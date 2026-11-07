import type {Scorable} from './scoring';
import {shuffled} from './scoring';
import {EXAM_WEIGHTS,EXAM_CM_CARDINALITY} from './exam-weights';

export interface ChapterQuota {topicId:string;cs:number;cm:number;}

// Largest-remainder apportionment: integer shares that sum exactly to `total`.
export function apportion(weights:number[],total:number):number[]{
 const sum=weights.reduce((a,b)=>a+b,0);
 if(!sum||total<=0)return weights.map(()=>0);
 const exact=weights.map(w=>w/sum*total),base=exact.map(Math.floor);
 let left=total-base.reduce((a,b)=>a+b,0);
 const order=exact.map((x,i)=>[x-base[i],i] as [number,number]).sort((a,b)=>b[0]-a[0]||a[1]-b[1]);
 for(const [,i] of order){if(!left)break;base[i]++;left--;}
 return base;
}

// How many CS and CM items each chapter gets in a simulation of `count` questions,
// following the chapter counts of the analysed papers (mean of 2023–2025) and each
// chapter's own CS share there. Chapters never asked get nothing here; any question
// a chapter cannot supply is filled from the whole bank by the caller.
export function chapterQuotas(count:number,weights=EXAM_WEIGHTS):ChapterQuota[]{
 const singles=Math.round(count/4);
 const totals=apportion(weights.map(w=>w.mean),count);
 const cs=apportion(weights.map((w,i)=>Math.min(totals[i],w.mean*w.csShare)),singles).map((n,i)=>Math.min(n,totals[i]));
 return weights.map((w,i)=>({topicId:w.topicId,cs:cs[i],cm:totals[i]-cs[i]}));
}

// Target number of CM items with 2, 3 and 4 correct options, as in the 2025 key.
export function cardinalityTargets(multiples:number,split=EXAM_CM_CARDINALITY):number[]{return apportion(split,multiples);}

/** A full simulation: chapter quotas, then CM key sizes, then the sibling rule. */
export function composeExam<T extends Scorable>(bank:readonly T[],count=200,siblings?:ReadonlyMap<string,ReadonlySet<string>>,weights=EXAM_WEIGHTS):T[]{
 const singles=Math.round(count/4),multiples=count-singles;
 const cs=bank.filter(q=>q.type==='CS'),cm=bank.filter(q=>q.type==='CM');
 if(count<4||cs.length<singles||cm.length<multiples)throw new Error('Banca nu conține suficiente întrebări distincte pentru această simulare.');
 const taken=new Set<string>();
 const free=(q:T)=>!taken.has(q.id)&&![...(siblings?.get(q.id)??[])].some(s=>taken.has(s));
 const pick=(pool:readonly T[],n:number,out:T[])=>{for(const q of pool){if(n<=0)break;if(!free(q))continue;out.push(q);taken.add(q.id);n--;}return n;};
 const csOut:T[]=[],cmOut:T[]=[];
 // 1. Chapter quotas. The CM part of a chapter also follows the key-size targets,
 //    so that a chapter with many 4-key items does not bend the whole paper.
 const quotas=chapterQuotas(count,weights);
 const want=cardinalityTargets(multiples);
 const have=[0,0,0];
 let csShort=0,cmShort=0;
 for(const quota of quotas){
  const mine=shuffled(cs.filter(q=>q.topicId===quota.topicId));
  csShort+=pick(mine,quota.cs,csOut);
  const mineCm=shuffled(cm.filter(q=>q.topicId===quota.topicId));
  // Prefer the key sizes still under target, then anything from the chapter.
  const ranked=[...mineCm].sort((a,b)=>(have[b.correct.length-2]<want[b.correct.length-2]?1:0)-(have[a.correct.length-2]<want[a.correct.length-2]?1:0));
  const before=cmOut.length;
  cmShort+=pick(ranked,quota.cm,cmOut);
  for(const q of cmOut.slice(before))have[q.correct.length-2]++;
 }
 // 2. Whatever the quotas could not supply comes from the rest of the bank.
 csShort=pick(shuffled(cs),csShort,csOut);
 if(cmShort){
  const rest=shuffled(cm).sort((a,b)=>(have[b.correct.length-2]<want[b.correct.length-2]?1:0)-(have[a.correct.length-2]<want[a.correct.length-2]?1:0));
  const before=cmOut.length;cmShort=pick(rest,cmShort,cmOut);for(const q of cmOut.slice(before))have[q.correct.length-2]++;
 }
 if(csShort||cmShort||csOut.length!==singles||cmOut.length!==multiples)throw new Error('Banca nu conține suficiente întrebări distincte pentru această simulare.');
 return [...shuffled(csOut),...shuffled(cmOut)];
}
