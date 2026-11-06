import type {Attempt} from './models';
import {exact,type Scorable} from './scoring';

// Spaced repetition derived entirely from the answer history (no extra storage, so it
// follows the account across devices). Leitner boxes: a wrong answer sends the question
// back to box 0; a correct answer moves it up — two boxes when marked "sure", none when
// it was a guess. The box sets when the question is due again.
export const INTERVAL_DAYS=[1,2,3,5,8,13];
const DAY=86400000;
export interface Memory {id:string;box:number;due:number;last:number;reps:number;lapses:number;lastExact:boolean}

export function memories(attempts:readonly Attempt[],lookup:ReadonlyMap<string,Scorable>):Map<string,Memory>{
 const events:{id:string;t:number;ok:boolean;conf?:string}[]=[];
 for(const a of attempts){
  const t=Date.parse(a.completedAt);if(!Number.isFinite(t))continue;
  for(const ans of a.answers){const q=lookup.get(ans.questionId);if(q&&ans.selected.length)events.push({id:q.id,t,ok:exact(q,ans.selected),conf:ans.confidence});}
 }
 events.sort((x,y)=>x.t-y.t);
 const out=new Map<string,Memory>();
 for(const e of events){
  const m=out.get(e.id)??{id:e.id,box:0,due:0,last:0,reps:0,lapses:0,lastExact:false};
  if(!e.ok){m.box=0;m.lapses++;}
  else if(e.conf==='guess'){/* a lucky guess earns no promotion */}
  else m.box=Math.min(INTERVAL_DAYS.length-1,m.box+(e.conf==='sure'?2:1));
  m.reps++;m.last=e.t;m.lastExact=e.ok;m.due=e.t+INTERVAL_DAYS[m.box]*DAY;
  out.set(e.id,m);
 }
 return out;
}

// Due questions, most urgent first: longest overdue, then the lowest box.
export function dueIds(mem:ReadonlyMap<string,Memory>,activeIds:ReadonlySet<string>,now=Date.now()):string[]{
 return [...mem.values()].filter(m=>m.due<=now&&activeIds.has(m.id)).sort((a,b)=>(a.due-b.due)||(a.box-b.box)).map(m=>m.id);
}
export function dueSoon(mem:ReadonlyMap<string,Memory>,activeIds:ReadonlySet<string>,days:number,now=Date.now()):number{
 return [...mem.values()].filter(m=>m.due>now&&m.due<=now+days*DAY&&activeIds.has(m.id)).length;
}
// Share of seen questions that reached box 3 or higher (answered correctly several times, spaced out).
export function retained(mem:ReadonlyMap<string,Memory>):number{
 const all=[...mem.values()];return all.length?Math.round(all.filter(m=>m.box>=3).length/all.length*100):0;
}
