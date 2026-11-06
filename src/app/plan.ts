// Study plan until the exam. New material is spread over the days before the exam eve,
// which is kept for review only. Each chapter's share of the capacity grows with its size
// and with how weak the student is in it; it never exceeds the questions not yet seen.
export const EXAM_DATE=new Date('2026-11-15T00:00:00+02:00');
const DAY=86400000;
export interface ChapterLoad {topicId:string;name:string;size:number;unseen:number;answered:number;percent:number}
export interface PlanItem {topicId:string;name:string;count:number}
export interface DayPlan {start:number;items:PlanItem[];total:number;reviewOnly:boolean}
export interface Plan {days:DayPlan[];capacity:number;planned:number;unseen:number;needPerDay:number}

export const startOfDay=(t:number)=>{const d=new Date(t);d.setHours(0,0,0,0);return d.getTime();};
// Unpractised chapters weigh like a weak one; mastered chapters still get a little time.
export const weakness=(c:ChapterLoad)=>c.answered?Math.max(0.5,1.5-c.percent/100):1.2;

export function buildPlan(chapters:ChapterLoad[],perDay:number,now=Date.now(),exam=EXAM_DATE.getTime()):Plan{
 const today=startOfDay(now),eve=startOfDay(exam-DAY);
 const newDays:number[]=[];for(let d=today;d<eve;d+=DAY)newDays.push(d);
 const capacity=newDays.length*perDay,unseen=chapters.reduce((n,c)=>n+c.unseen,0);
 // Water-filling: share capacity by size × weakness, cap at the unseen count, repeat with the rest.
 const quota=new Map<string,number>(chapters.map(c=>[c.topicId,0]));
 let left=Math.min(capacity,unseen),open=chapters.filter(c=>c.unseen>0);
 while(left>0&&open.length){
  const weight=open.reduce((n,c)=>n+c.size*weakness(c),0);let used=0;
  for(const c of open){const room=c.unseen-quota.get(c.topicId)!,give=Math.min(room,Math.max(1,Math.floor(left*c.size*weakness(c)/weight)));quota.set(c.topicId,quota.get(c.topicId)!+give);used+=give;if(used>=left)break;}
  left-=used;open=open.filter(c=>quota.get(c.topicId)!<c.unseen);
 }
 // Interleave: each chapter's quota is cut into chunks of about a third of a day, and the
 // chunks are dealt round by round, weakest chapters first. A day then mixes ~3 chapters
 // and a chapter comes back on later days instead of filling one day.
 const order=[...chapters].filter(c=>quota.get(c.topicId)!>0).sort((a,b)=>weakness(b)-weakness(a)||b.size-a.size);
 const size=Math.max(15,Math.round(perDay/3)),chunks:{c:ChapterLoad;n:number;round:number;rank:number}[]=[];
 order.forEach((c,rank)=>{let q=quota.get(c.topicId)!,round=0;while(q>0){const n=Math.min(size,q);chunks.push({c,n,round:round++,rank});q-=n;}});
 chunks.sort((a,b)=>a.round-b.round||a.rank-b.rank);
 const days:DayPlan[]=newDays.map(start=>({start,items:[],total:0,reviewOnly:false}));
 let di=0;
 for(const ch of chunks){
  let rest=ch.n;
  while(rest>0&&di<days.length){
   const day=days[di],room=perDay-day.total;
   // A sliver at the end of a day is not worth a session: start the chunk tomorrow.
   const last=di===days.length-1;
   if(!last&&room<Math.min(8,rest,Math.ceil(perDay/10))){di++;continue;}
   // The last day absorbs whatever slivers pushed forward, so no planned question is lost.
   const take=last?rest:Math.min(rest,room);
   if(take>0){const last=day.items.find(i=>i.topicId===ch.c.topicId);if(last)last.count+=take;else day.items.push({topicId:ch.c.topicId,name:ch.c.name,count:take});day.total+=take;rest-=take;}
   if(day.total>=perDay)di++;
  }
 }
 if(eve>=today)days.push({start:eve,items:[],total:0,reviewOnly:true});
 return {days,capacity,planned:[...quota.values()].reduce((a,b)=>a+b,0),unseen,needPerDay:newDays.length?Math.ceil(unseen/newDays.length):unseen};
}

const key=(owner:string)=>`rezi:plan:${owner}`;
export function loadPerDay(owner:string):number{try{const v=Number(JSON.parse(localStorage.getItem(key(owner))??'{}')?.perDay);return [60,100,150,200,300].includes(v)?v:100;}catch{return 100;}}
export function savePerDay(owner:string,perDay:number){try{localStorage.setItem(key(owner),JSON.stringify({perDay}));}catch{/* storage unavailable */}}
