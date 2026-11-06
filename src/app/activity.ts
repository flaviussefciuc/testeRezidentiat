import type {Attempt} from './models';
import {startOfDay} from './plan';

const DAY=86400000;
// Answered questions per local day.
export function dailyCounts(attempts:readonly Attempt[]):Map<number,number>{
 const m=new Map<number,number>();
 for(const a of attempts){const t=Date.parse(a.completedAt);if(!Number.isFinite(t))continue;const d=startOfDay(t),n=a.answers.filter(x=>x.selected.length).length;if(n)m.set(d,(m.get(d)??0)+n);}
 return m;
}
// A day counts toward the streak from 10 answered questions. Today does not break the
// streak while it is still in progress.
export const STREAK_MIN=10;
export function streak(counts:ReadonlyMap<number,number>,now=Date.now()):{current:number;best:number;today:number}{
 const today=startOfDay(now),ok=(d:number)=>(counts.get(d)??0)>=STREAK_MIN;
 let current=0,d=ok(today)?today:today-DAY;
 // Daylight-saving shifts make days 23–25 h long: step back by a day, then snap to midnight.
 while(ok(d)){current++;d=startOfDay(d-DAY/2);}
 let best=0,run=0,prev=0;
 for(const day of [...counts.keys()].filter(ok).sort((a,b)=>a-b)){run=prev&&day-prev<=DAY+3600000*2?run+1:1;best=Math.max(best,run);prev=day;}
 return {current,best:Math.max(best,current),today:counts.get(today)??0};
}
