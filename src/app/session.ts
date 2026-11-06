import {computed,inject,Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from './store';
import {LITE_ACTIVE,LITE_BY_ID} from './bank';
import {memories,dueIds,dueSoon,retained} from './srs';
import {shuffled,wrongIds} from './scoring';

export type Source='all'|'unseen'|'wrong'|'due';
export const SOURCE_LABEL:Record<Source,string>={all:'Toate grilele',unseen:'Doar grile nevăzute',wrong:'Greșite la ultima încercare',due:'Scadente azi (recapitulare programată)'};
const ACTIVE_IDS=new Set(LITE_ACTIVE.map(q=>q.id));

// Shared study state derived from the history, and one way to start a session.
@Injectable({providedIn:'root'})
export class Sessions {
 private store=inject(Store);private router=inject(Router);
 readonly memory=computed(()=>memories(this.store.attempts(),LITE_BY_ID));
 readonly due=computed(()=>dueIds(this.memory(),ACTIVE_IDS));
 readonly soon=computed(()=>dueSoon(this.memory(),ACTIVE_IDS,3));
 readonly retained=computed(()=>retained(this.memory()));
 readonly seen=computed(()=>new Set(this.store.attempts().flatMap(a=>a.answers.filter(x=>x.selected.length).map(x=>x.questionId))));
 readonly wrong=computed(()=>new Set(wrongIds(this.store.attempts(),LITE_ACTIVE)));

 // Question ids for a source, optionally limited to some chapters. Due questions keep
 // their urgency order; the others are shuffled.
 pool(source:Source,topics?:readonly string[]):string[]{
  const inTopics=(id:string)=>!topics||topics.includes(LITE_BY_ID.get(id)!.topicId);
  if(source==='due')return this.due().filter(inTopics);
  const base=LITE_ACTIVE.filter(q=>inTopics(q.id));
  const ids=source==='unseen'?base.filter(q=>!this.seen().has(q.id)):source==='wrong'?base.filter(q=>this.wrong().has(q.id)):base;
  return shuffled(ids.map(q=>q.id));
 }

 count(source:Source,topics?:readonly string[]):number{
  const inTopics=(id:string)=>!topics||topics.includes(LITE_BY_ID.get(id)!.topicId);
  if(source==='due')return this.due().filter(inTopics).length;
  return LITE_ACTIVE.filter(q=>inTopics(q.id)&&(source==='all'||(source==='unseen'?!this.seen().has(q.id):this.wrong().has(q.id)))).length;
 }

 // Starts a practice session; returns false when a test is already in progress.
 startPractice(ids:readonly string[]):boolean{
  if(!ids.length||this.store.draft())return false;
  this.store.saveDraft({id:crypto.randomUUID(),owner:this.store.owner(),mode:'practice',startedAt:new Date().toISOString(),deadline:null,questionIds:shuffled(ids),answers:{},checked:[],flagged:[],index:0});
  void this.router.navigate(['/test']);
  return true;
 }
}
