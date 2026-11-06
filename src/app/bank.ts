import {Injectable,signal} from '@angular/core';
import {BANK_VERSION,INDEX,SIBLINGS,TOPIC_ORDER} from './bank-index.generated';
import type {Question} from './models';
import {decodeEntry,type Lite} from './bank-codec';
export type {Lite};

// Light records decoded from the generated index: enough to score attempts and
// to compose sessions without downloading the question text.
export const LITE:Lite[]=Object.entries(INDEX).map(([id,v])=>decodeEntry(TOPIC_ORDER,id,v));
export const LITE_ACTIVE:Lite[]=LITE.filter(q=>q.active);
export const LITE_BY_ID=new Map(LITE.map(q=>[q.id,q]));
export const EXAM_AVAILABLE=LITE_ACTIVE.filter(q=>q.type==='CS').length>=50&&LITE_ACTIVE.filter(q=>q.type==='CM').length>=150;
// Questions that must not appear in the same session (see scripts/export-bank.ts).
export const SIBLING_OF=new Map<string,Set<string>>();
for(const [a,b] of SIBLINGS){SIBLING_OF.set(a,(SIBLING_OF.get(a)??new Set()).add(b));SIBLING_OF.set(b,(SIBLING_OF.get(b)??new Set()).add(a));}
export function withoutSiblings(ids:readonly string[]):string[]{const kept:string[]=[],taken=new Set<string>();for(const id of ids){const sib=SIBLING_OF.get(id);if(sib&&[...sib].some(s=>taken.has(s)))continue;kept.push(id);taken.add(id);}return kept;}
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
