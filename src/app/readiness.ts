import type {Attempt} from './models';
import {exact,type Scorable} from './scoring';
import type {Memory} from './srs';

// A transparent progress index for the bank (not a prediction of the exam score):
// coverage of the bank, accuracy on the latest 300 answers, retention (questions that
// climbed past the first review boxes) and breadth across the 39 chapters.
export interface Readiness {score:number;parts:{key:string;label:string;value:number;weight:number;tip:string}[];next:string}
export function readiness(attempts:readonly Attempt[],active:readonly Scorable[],lookup:ReadonlyMap<string,Scorable>,mem:ReadonlyMap<string,Memory>,chapters:number):Readiness{
 const activeIds=new Set(active.map(q=>q.id));
 const answers=[...attempts].sort((a,b)=>a.completedAt.localeCompare(b.completedAt)).flatMap(a=>a.answers).filter(x=>x.selected.length&&lookup.has(x.questionId));
 const seen=new Set(answers.map(x=>x.questionId).filter(id=>activeIds.has(id)));
 const recent=answers.slice(-300);
 const accuracy=recent.length?recent.filter(x=>exact(lookup.get(x.questionId)!,x.selected)).length/recent.length:0;
 const seenMem=[...mem.values()].filter(m=>activeIds.has(m.id));
 const retention=seenMem.length?seenMem.filter(m=>m.box>=2).length/seenMem.length:0;
 const perTopic=new Map<string,number>();for(const x of answers){const t=lookup.get(x.questionId)!.topicId;perTopic.set(t,(perTopic.get(t)??0)+1);}
 const breadth=chapters?[...perTopic.values()].filter(n=>n>=10).length/chapters:0;
 const parts=[
  {key:'coverage',label:'Acoperire',value:seen.size/Math.max(1,activeIds.size),weight:0.3,tip:'Rezolvă grile nevăzute din planul de azi.'},
  {key:'accuracy',label:'Răspunsuri complet corecte',value:accuracy,weight:0.4,tip:'Recitește paginile grilelor greșite și refă-le.'},
  {key:'retention',label:'Rețineri consolidate',value:retention,weight:0.2,tip:'Fă recapitularea programată: grilele revăzute la timp urcă în cutii.'},
  {key:'breadth',label:'Capitole exersate',value:breadth,weight:0.1,tip:'Atinge capitolele încă neexersate (minimum 10 grile fiecare).'},
 ].map(p=>({...p,value:Math.round(p.value*100)}));
 const score=Math.round(parts.reduce((n,p)=>n+p.value*p.weight,0));
 // The part with the most points left to gain, given its weight.
 const next=[...parts].sort((a,b)=>(100-b.value)*b.weight-(100-a.value)*a.weight)[0].tip;
 return {score,parts,next};
}
