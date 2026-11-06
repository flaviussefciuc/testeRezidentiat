import {Component,computed,effect,inject,input,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router,RouterLink} from '@angular/router';
import {Store} from './store';
import {Bank,LITE_ACTIVE,SIBLING_OF} from './bank';
import {TOPICS} from './topics';
import {IconComponent} from './icon.component';
import {simMinutes} from './pace';
import type {Question} from './models';
import type {Scorable} from './scoring';

// A seeded test: the same code always rebuilds the same questions, so a booklet printed
// today can be scored later from the answers written on paper.
function rng(seed:string){let h=2166136261;for(const c of seed)h=Math.imul(h^c.charCodeAt(0),16777619);return ()=>{h=(h+0x6D2B79F5)|0;let t=Math.imul(h^(h>>>15),1|h);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296;};}
export function paperIds(code:string,n:number,bank:readonly Scorable[]):string[]{
 const next=rng('rezi-paper-'+code+'-'+n),pool=[...bank].sort((a,b)=>a.id.localeCompare(b.id));
 const taken=new Set<string>();
 const pick=(type:'CS'|'CM',k:number)=>{const list=pool.filter(q=>q.type===type);for(let i=list.length-1;i>0;i--){const j=Math.floor(next()*(i+1));[list[i],list[j]]=[list[j],list[i]];}const out:string[]=[];for(const q of list){if(out.length===k)break;const sib=SIBLING_OF.get(q.id);if(sib&&[...sib].some(s=>taken.has(s)))continue;out.push(q.id);taken.add(q.id);}return out;};
 const cs=Math.round(n/4);return [...pick('CS',cs),...pick('CM',n-cs)];
}
const newCode=()=>Array.from(crypto.getRandomValues(new Uint8Array(4)),b=>'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[b%32]).join('');

@Component({standalone:true,imports:[FormsModule,RouterLink,IconComponent],template:`
@if(!code()){
<div class="page-heading"><div><div class="eyebrow">CA LA EXAMEN, PE HÂRTIE</div><h1>Test tipărit.</h1><p>Generează un caiet de test, rezolvă-l cu pixul și cronometrul, apoi introdu răspunsurile de pe foaie: primești punctajul și analiza completă.</p></div></div>
<section class="panel paper-setup">
 <div class="segmented sim-formats" role="group" aria-label="Lungime">@for(f of sizes;track f){<button [class.on]="n()===f" (click)="n.set(f)">{{f}} de grile <span>{{minutes(f)}} min</span></button>}</div>
 <p class="small muted">Primele {{cs()}} grile sunt complement simplu, următoarele {{n()-cs()}} complement multiplu, ca în caietul oficial. Codul testului permite refacerea lui exactă la corectare.</p>
 <div class="sheet-actions"><button class="button primary" (click)="generate()">Generează caietul<app-icon name="arrow"/></button></div>
 <form class="paper-code" (submit)="$event.preventDefault();open(codeInput.value)"><label class="field-label">Ai deja un caiet? Introdu codul<input #codeInput placeholder="ex. K7QH" maxlength="8" autocomplete="off"></label><button class="button secondary" type="submit">Deschide</button></form>
</section>}
@else{
<div class="page-heading paper-head"><div><a routerLink="/tiparit" class="text-link">← Alt test</a><div class="eyebrow">COD {{code()}} · {{n()}} GRILE · {{minutes(n())}} MIN</div><h1>{{tab()==='entry'?'Introdu răspunsurile de pe foaie.':'Caietul tău de test.'}}</h1></div>
 <div class="sheet-actions"><div class="segmented" role="group"><button [class.on]="tab()==='print'" (click)="tab.set('print')">Caietul</button><button [class.on]="tab()==='entry'" (click)="tab.set('entry')">Introdu răspunsurile</button></div>@if(tab()==='print'){<button class="button primary" (click)="print()"><app-icon name="download"/>Tipărește / PDF</button>}</div></div>
@if(!ready()){<div class="empty-state" role="status">{{bank.error()||'Se pregătește caietul…'}}</div>}
@else if(tab()==='print'){
<article class="booklet">
 <header class="booklet-cover"><strong>Rezi · Test de antrenament tipărit</strong><span>Cod {{code()}} · {{n()}} grile · timp de lucru {{minutes(n())}} minute · punctaj maxim {{maxPoints()}}</span><p>Grilele 1–{{cs()}}: complement simplu, un singur răspuns (4 puncte). Grilele {{cs()+1}}–{{n()}}: complement multiplu, 2–4 răspunsuri (un punct pentru fiecare variantă clasificată corect; 1 sau 5 variante marcate = 0). Notează răspunsurile pe foaia de răspuns de la final.</p></header>
 @for(q of questions();track q.id;let i=$index){@if(i===cs()){<h3 class="booklet-section">Complement multiplu</h3>}@if(i===0){<h3 class="booklet-section">Complement simplu</h3>}
 <section class="booklet-q"><p><b>{{i+1}}.</b> {{q.stem}}</p><ol type="A">@for(k of orderOf(q.id);track k){<li>{{q.options[k]}}</li>}</ol></section>}
 <section class="booklet-grid"><h3>Foaie de răspuns · cod {{code()}}</h3><div class="grid-cols">@for(q of questions();track q.id;let i=$index){<div class="grid-row"><b>{{i+1}}</b>@for(l of letters;track l){<span>{{l}}</span>}</div>}</div></section>
 <section class="booklet-key"><h3>Barem · cod {{code()}}</h3><p class="small">Nu întoarce această pagină înainte de final. Mai simplu: introdu răspunsurile în aplicație pentru corectare și explicații.</p><div class="grid-cols">@for(q of questions();track q.id;let i=$index){<div class="key-row"><b>{{i+1}}</b> {{keyOf(q)}}</div>}</div></section>
</article>}
@else{
<section class="panel paper-entry">
 <p class="small muted">Bifează ce ai marcat pe hârtie. Literele corespund variantelor A–E din caiet.</p>
 <div class="sheet-rows">@for(q of questions();track q.id;let i=$index){<div class="sheet-row" [class.void]="isVoid(q)"><span class="sheet-num">{{i+1}}</span><span class="sheet-type">{{q.type}}</span>@for(l of letters;track l;let k=$index){<button class="bubble" [class.on]="marked(q.id).includes(orderOf(q.id)[k])" (click)="mark(q,orderOf(q.id)[k])" [attr.aria-label]="'Grila '+(i+1)+', varianta '+l">{{l}}</button>}<span class="sheet-flags">@if(isVoid(q)){<span class="warn" title="1 sau 5 variante: 0 puncte">!</span>}</span></div>}</div>
 <label class="field-label paper-time">Cât timp ai lucrat (minute)?<input type="number" min="1" max="300" [ngModel]="spent()" (ngModelChange)="spent.set(+$event)"></label>
 <div class="sheet-actions"><button class="button primary" (click)="submit()" [disabled]="busy()||!answeredCount()">{{busy()?'Se corectează…':'Corectează ('+answeredCount()+' / '+n()+' cu răspuns)'}}<app-icon name="check"/></button></div>
 @if(error()){<p class="error" role="alert">{{error()}}</p>}
</section>}}`})
export class PaperComponent {
 c=input<string|undefined>(undefined);nParam=input<string|undefined>(undefined,{alias:'n'});
 store=inject(Store);bank=inject(Bank);router=inject(Router);
 sizes=[52,100,200];letters=['A','B','C','D','E'];
 n=signal(52);tab=signal<'print'|'entry'>('print');ready=signal(false);busy=signal(false);error=signal('');spent=signal(60);
 answers=signal<Record<string,number[]>>({});
 code=computed(()=>(this.c()??'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,8));
 private sync=effect(()=>{const n=Number(this.nParam());if([52,100,200].includes(n))this.n.set(n);});
 cs=computed(()=>Math.round(this.n()/4));
 maxPoints=computed(()=>this.cs()*4+(this.n()-this.cs())*5);
 ids=computed(()=>this.code()?paperIds(this.code(),this.n(),LITE_ACTIVE):[]);
 private loader=effect(()=>{const ids=this.ids();if(ids.length){this.ready.set(false);void this.bank.ensure(ids).then(()=>this.ready.set(true)).catch(()=>{});}});
 questions=computed(()=>this.ready()?this.ids().map(id=>this.bank.byId().get(id)).filter((q):q is Question=>!!q):[]);
 answeredCount=computed(()=>Object.values(this.answers()).filter(a=>a.length).length);
 minutes(n:number){return simMinutes(n);}
 // Options are printed in an order seeded by the test code, so the stored order (whose keys
 // lean towards the first positions) is never a cue on paper. Letters map back to options.
 orderOf(id:string){const next=rng('order-'+this.code()+id),o=[0,1,2,3,4];for(let i=4;i>0;i--){const j=Math.floor(next()*(i+1));[o[i],o[j]]=[o[j],o[i]];}return o;}
 keyOf(q:Question){const o=this.orderOf(q.id);return o.map((k,pos)=>q.correct.includes(k)?'ABCDE'[pos]:'').join('');}
 marked(id:string){return this.answers()[id]??[];}
 isVoid(q:Question){const a=this.marked(q.id);return q.type==='CM'&&a.length>0&&(a.length<2||a.length>4);}
 mark(q:Question,k:number){const cur=this.marked(q.id);const next=q.type==='CS'?(cur[0]===k?[]:[k]):cur.includes(k)?cur.filter(v=>v!==k):[...cur,k];this.answers.set({...this.answers(),[q.id]:next});}
 generate(){void this.router.navigate(['/tiparit'],{queryParams:{c:newCode(),n:this.n()}});}
 open(code:string){const c=code.toUpperCase().replace(/[^A-Z0-9]/g,'');if(c)void this.router.navigate(['/tiparit'],{queryParams:{c,n:this.n()}});}
 print(){setTimeout(()=>window.print(),50);}
 async submit(){
  this.busy.set(true);this.error.set('');
  try{
   const now=Date.now(),start=now-Math.max(1,Math.min(300,this.spent()||1))*60000;
   const id=crypto.randomUUID();
   await this.store.addAttempt({id,userId:this.store.owner(),mode:'exam',startedAt:new Date(start).toISOString(),completedAt:new Date(now).toISOString(),answers:this.ids().map(q=>({questionId:q,selected:this.answers()[q]??[]}))});
   await this.router.navigate(['/rezultat',id]);
  }catch(e){this.error.set((e as Error).message);}finally{this.busy.set(false);}
 }
}
