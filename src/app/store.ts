import { computed, Injectable, signal } from '@angular/core';
import { createClient, type SupabaseClient, type User } from '@supabase/supabase-js';
import { cloudConfig } from './config.generated';
import type { Attempt, Draft } from './models';

@Injectable({providedIn:'root'})
export class Store {
 readonly user=signal<User|null>(null);
 readonly ready=signal(false);
 readonly recovering=signal(false);
 readonly attempts=signal<Attempt[]>([]);
 readonly draft=signal<Draft|null>(null);
 readonly syncState=signal('');
 readonly error=signal('');
 readonly configured=!!cloudConfig.url;
 readonly owner=computed(()=>this.user()?.id??'guest');
 readonly client:SupabaseClient|null=this.configured?createClient(cloudConfig.url,cloudConfig.key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}):null;
 private pending:Attempt[]=[];
 private syncing=false;
 private generation=0;
 constructor(){
  if(this.client){
   this.client.auth.onAuthStateChange((event,session)=>{if(event==='PASSWORD_RECOVERY')this.recovering.set(true);if(event==='SIGNED_OUT')this.recovering.set(false);const id=session?.user?.id??'guest';if(id!==this.owner()||!this.ready()){this.user.set(session?.user??null);this.loadOwner();}this.ready.set(true);});
   this.client.auth.getSession().then(({data,error})=>{if(error)this.error.set('Sesiunea nu a putut fi restaurată. Reconectează-te.');if(!this.ready()){this.user.set(data.session?.user??null);this.loadOwner();this.ready.set(true);}});
  }else{this.loadOwner();this.ready.set(true);}
  window.addEventListener('online',()=>void this.sync());
  window.addEventListener('focus',()=>void this.sync());
 }
 private read<T>(key:string,fallback:T):T {try{return JSON.parse(localStorage.getItem(key)??'null')??fallback;}catch{return fallback;}}
 private write(key:string,value:unknown){try{localStorage.setItem(key,JSON.stringify(value));}catch{this.error.set('Spațiul de stocare local nu este disponibil. Păstrează pagina deschisă și verifică sincronizarea.');}}
 private loadOwner(){
  this.generation++;this.syncState.set('');this.error.set('');
  const owner=this.owner();
  const cached=this.read<Attempt[]>(`rezi:attempts:${owner}`,[]);
  this.attempts.set(Array.isArray(cached)?cached.filter(a=>a.userId===owner&&Array.isArray(a.answers)):[]);
  const pending=this.read<Attempt[]>(`rezi:pending:${owner}`,[]);
  this.pending=Array.isArray(pending)?pending.filter(a=>a.userId===owner&&Array.isArray(a.answers)):[];
  const draft=this.read<Draft|null>(`rezi:draft:${owner}`,null);
  this.draft.set(draft?.owner===owner&&Array.isArray(draft.questionIds)?draft:null);
  if(owner!=='guest')setTimeout(()=>void this.sync(),0);
 }
 saveDraft(draft:Draft|null){this.draft.set(draft);this.write(`rezi:draft:${this.owner()}`,draft);}
 async addAttempt(attempt:Attempt){
  if(attempt.userId!==this.owner())throw new Error('Contul s-a schimbat. Reîncepe testul.');
  this.attempts.update(items=>[...items.filter(x=>x.id!==attempt.id),attempt]);
  this.write(`rezi:attempts:${this.owner()}`,this.attempts());
  if(this.user()){this.pending=[...this.pending.filter(a=>a.id!==attempt.id),attempt];this.write(`rezi:pending:${this.owner()}`,this.pending);await this.sync();}
 }
 async sync(){
  if(!this.client||!this.user()||this.syncing)return;
  this.syncing=true;const owner=this.owner(),generation=this.generation;
  this.syncState.set('Se sincronizează…');
  try{
   const batch=[...this.pending];
   if(batch.length){const {error}=await this.client.from('attempts').upsert(batch.map(a=>({id:a.id,user_id:owner,mode:a.mode,started_at:a.startedAt,completed_at:a.completedAt,answers:a.answers})),{onConflict:'id',ignoreDuplicates:true});if(error)throw error;
    if(generation!==this.generation)return;
    this.pending=this.pending.filter(a=>!batch.some(b=>a.id===b.id));this.write(`rezi:pending:${owner}`,this.pending);
   }
   const rows:Attempt[]=[];
   for(let offset=0;;offset+=500){const {data,error}=await this.client.from('attempts').select('*').eq('user_id',owner).order('completed_at',{ascending:true}).order('id',{ascending:true}).range(offset,offset+499);if(error)throw error;
    if(generation!==this.generation)return;
    for(const a of data??[])rows.push({id:a.id,userId:a.user_id,mode:a.mode,startedAt:a.started_at,completedAt:a.completed_at,answers:a.answers});
    if(!data||data.length<500)break;
   }
   if(generation!==this.generation)return;
   const merged=new Map(rows.map(a=>[a.id,a]));for(const a of this.pending)merged.set(a.id,a);
   this.attempts.set([...merged.values()]);this.write(`rezi:attempts:${owner}`,this.attempts());this.syncState.set(this.pending.length?'Rezultate în așteptare':'Sincronizat');
  }catch{if(generation===this.generation)this.syncState.set('Sincronizare indisponibilă · rezultatele noi sunt salvate local');}
  finally{this.syncing=false;if(generation!==this.generation&&this.user())void this.sync();}
 }
 async signOut(){await this.client?.auth.signOut();}
 export(){const blob=new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),attempts:this.attempts()},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='rezidentiat-rezultate.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),500);}
}
