import type {Attempt} from './models';
import {exact,maximum,score,type Scorable} from './scoring';

// The daily challenge: the same 10 questions for everyone on a given day
// (3 single-choice, 7 multiple-choice, from different chapters), picked by a PRNG
// seeded with the date.
export const CHALLENGE_SIZE=10;
export const dayKey=(t=Date.now())=>{const d=new Date(t);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
function rng(seed:string){let h=2166136261;for(const c of seed)h=Math.imul(h^c.charCodeAt(0),16777619);return ()=>{h=(h+0x6D2B79F5)|0;let t=Math.imul(h^(h>>>15),1|h);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296;};}

export function challengeIds(key:string,bank:readonly Scorable[]):string[]{
 const next=rng('rezi-challenge-'+key),pool=[...bank].sort((a,b)=>a.id.localeCompare(b.id));
 const picked:Scorable[]=[],topics=new Set<string>();
 const take=(type:'CS'|'CM',n:number)=>{
  let guard=0;
  while(picked.filter(q=>q.type===type).length<n&&guard++<5000){
   const q=pool[Math.floor(next()*pool.length)];
   if(q.type!==type||picked.includes(q)||topics.has(q.topicId))continue;
   picked.push(q);topics.add(q.topicId);
  }
 };
 take('CS',3);take('CM',7);
 return picked.map(q=>q.id);
}

// Which day's challenge an attempt is, if any (same questions, any order).
export function challengeDay(a:Attempt,bank:readonly Scorable[]):string|null{
 if(a.answers.length!==CHALLENGE_SIZE)return null;
 const key=dayKey(Date.parse(a.startedAt)),ids=new Set(challengeIds(key,bank));
 return a.answers.every(x=>ids.has(x.questionId))?key:null;
}

// Cells follow the canonical order of the day's questions, so grids are comparable between students.
export function shareGrid(a:Attempt,lookup:ReadonlyMap<string,Scorable>,order:readonly string[]=[]):{text:string;points:number;max:number}{
 let points=0,max=0;
 const rank=(id:string)=>{const i=order.indexOf(id);return i<0?99:i;};
 const cells=[...a.answers].sort((x,y)=>rank(x.questionId)-rank(y.questionId)).map(x=>{const q=lookup.get(x.questionId);if(!q)return '⬜';const s=score(q,x.selected);points+=s;max+=maximum(q);return exact(q,x.selected)?'🟩':s>0?'🟨':'🟥';});
 return {text:cells.join(''),points,max};
}
export const dayLabel=(key:string)=>new Date(key+'T12:00:00').toLocaleDateString('ro-RO',{day:'numeric',month:'long'});
