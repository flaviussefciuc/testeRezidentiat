import type {Question} from './models';
import {insightOf,referenceLine} from './insight';
import {shuffled} from './scoring';

// Every option of a source-checked question is an independent, verified statement:
// the stem completed by the option is true exactly when the option is in the key.
// Stems that ask for the exception or the false statement invert that rule, so they
// are left out of the true/false drill.
const INVERTED=/excep|(falsă|false|greșită|greșite|incorectă|incorecte)\s*[:?]\s*$/i;
export interface Fact {key:string;qid:string;topicId:string;stem:string;text:string;truth:boolean;why:string;ref:string}

export function factsOf(q:Question):Fact[]{
 const info=insightOf(q);
 if(!info.rationales||INVERTED.test(q.stem))return [];
 const ref=referenceLine(info);
 return q.options.map((text,i)=>({key:`${q.id}#${i}`,qid:q.id,topicId:q.topicId,stem:q.stem,text,truth:q.correct.includes(i),why:info.rationales![i],ref}));
}

// Per-statement results stay on this device: [times seen, times right, last seen, last answer
// right (1/0), Leitner box]. Older entries without a box get one from their last answer.
export type FactLog=Record<string,[number,number,number,number,number?]>;
export const FACT_DAYS=[1,2,4,7,12];
const DAY=86400000;
const boxOf=(e:FactLog[string])=>e[4]??(e[3]?1:0);
export const factDue=(e:FactLog[string])=>e[2]+FACT_DAYS[Math.min(boxOf(e),FACT_DAYS.length-1)]*DAY;
export function dueFacts(facts:readonly Fact[],log:FactLog,now=Date.now()):Fact[]{return facts.filter(f=>{const e=log[f.key];return !!e&&factDue(e)<=now;}).sort((a,b)=>factDue(log[a.key])-factDue(log[b.key]));}
const key=(owner:string)=>`rezi:facts:${owner}`;
export function loadFactLog(owner:string):FactLog{try{return JSON.parse(localStorage.getItem(key(owner))??'{}')??{};}catch{return {};}}
export function saveFactLog(owner:string,log:FactLog){try{localStorage.setItem(key(owner),JSON.stringify(log));}catch{/* storage full or private mode */}}

// Statements due for review first (most overdue first), then unseen ones, then known ones.
export function pickFacts(facts:Fact[],log:FactLog,count:number,now=Date.now()):Fact[]{
 const rank=(f:Fact)=>{const e=log[f.key];if(!e)return 1;return factDue(e)<=now?0:2;};
 return shuffled(facts.map(f=>({f,r:rank(f),x:Math.random()})).sort((a,b)=>(a.r-b.r)||(a.x-b.x)).slice(0,count).map(o=>o.f));
}
export function recordFact(log:FactLog,key:string,ok:boolean,now=Date.now()){const e=log[key]??[0,0,0,0,0];const box=log[key]?(ok?Math.min(FACT_DAYS.length-1,boxOf(e)+1):0):(ok?1:0);log[key]=[e[0]+1,e[1]+(ok?1:0),now,ok?1:0,box];}
