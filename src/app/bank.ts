import {Injectable,signal} from '@angular/core';
import {BANK_VERSION,INDEX,TOPIC_ORDER} from './bank-index.generated';
import type {Question} from './models';
import {decodeEntry,type Lite} from './bank-codec';
export type {Lite};

// Light records decoded from the generated index: enough to score attempts and
// to compose sessions without downloading the question text.
export const LITE:Lite[]=Object.entries(INDEX).map(([id,v])=>decodeEntry(TOPIC_ORDER,id,v));
export const LITE_ACTIVE:Lite[]=LITE.filter(q=>q.active);
export const LITE_BY_ID=new Map(LITE.map(q=>[q.id,q]));
export const EXAM_AVAILABLE=LITE_ACTIVE.filter(q=>q.type==='CS').length>=50&&LITE_ACTIVE.filter(q=>q.type==='CM').length>=150;
export function activeCount(topicId:string){return LITE_ACTIVE.filter(q=>q.topicId===topicId).length;}

// Full question text, fetched on demand and cached for the lifetime of the page.
@Injectable({providedIn:'root'})
export class Bank {
 readonly byId=signal<ReadonlyMap<string,Question>>(new Map());
 readonly error=signal('');
 private loads=new Map<string,Promise<void>>();
 private load(file:'active'|'history'):Promise<void>{
  let p=this.loads.get(file);
  if(!p){
   p=fetch(`bank/${file}.json?v=${BANK_VERSION}`).then(r=>{if(!r.ok)throw new Error(String(r.status));return r.json() as Promise<Question[]>;}).then(items=>{
    const next=new Map(this.byId());for(const q of items)next.set(q.id,q);this.byId.set(next);
   }).catch(e=>{this.loads.delete(file);this.error.set('Grilele nu au putut fi încărcate. Verifică conexiunea și reîncarcă pagina.');throw e;});
   this.loads.set(file,p);
  }
  return p;
 }
 active(){return this.load('active');}
 // Loads the active bank, plus the historical versions only when an id needs them.
 async ensure(ids:Iterable<string>){
  await this.active();
  for(const id of ids)if(!this.byId().has(id)&&LITE_BY_ID.has(id)){await this.load('history');break;}
 }
}
