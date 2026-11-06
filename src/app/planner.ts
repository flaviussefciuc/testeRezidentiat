import {computed,inject,Injectable,signal} from '@angular/core';
import {Store} from './store';
import {LITE,LITE_ACTIVE,LITE_BY_ID} from './bank';
import {Sessions} from './session';
import {TOPICS} from './topics';
import {topicStats} from './scoring';
import {buildPlan,EXAM_DATE,loadPerDay,savePerDay,startOfDay,type ChapterLoad} from './plan';

// The plan is computed from progress up to the start of today, so today's quotas stay put
// while the student works; today's answers are counted separately as progress.
@Injectable({providedIn:'root'})
export class Planner {
 private store=inject(Store);private sessions=inject(Sessions);
 readonly perDay=signal(loadPerDay(this.store.owner()));
 setPerDay(n:number){this.perDay.set(n);savePerDay(this.store.owner(),n);}
 private today=startOfDay(Date.now());
 readonly daysLeft=Math.max(0,Math.ceil((EXAM_DATE.getTime()-Date.now())/86400000));
 private before=computed(()=>this.store.attempts().filter(a=>Date.parse(a.completedAt)<this.today));
 readonly loads=computed<ChapterLoad[]>(()=>{
  const seen=new Set(this.before().flatMap(a=>a.answers.filter(x=>x.selected.length).map(x=>x.questionId)));
  return TOPICS.map(t=>{const ids=LITE_ACTIVE.filter(q=>q.topicId===t.id),s=topicStats(this.before(),LITE,t.id);return {topicId:t.id,name:t.name,size:ids.length,unseen:ids.filter(q=>!seen.has(q.id)).length,answered:s.answered,percent:s.percent};});
 });
 readonly plan=computed(()=>buildPlan(this.loads(),this.perDay()));
 readonly todayPlan=computed(()=>{const d=this.plan().days[0];return d&&d.start===this.today?d:null;});
 // Questions answered today, per chapter.
 readonly doneToday=computed(()=>{
  const m=new Map<string,number>();
  for(const a of this.store.attempts())if(Date.parse(a.completedAt)>=this.today)for(const x of a.answers)if(x.selected.length){const t=LITE_BY_ID.get(x.questionId)?.topicId;if(t)m.set(t,(m.get(t)??0)+1);}
  return m;
 });
 readonly todayProgress=computed(()=>{const d=this.todayPlan();if(!d||!d.total)return 0;const done=d.items.reduce((n,i)=>n+Math.min(i.count,this.doneToday().get(i.topicId)??0),0);return Math.round(done/d.total*100);});
 // Unseen questions of the chapter first, then any, up to what is left of today's quota.
 start(topicId:string,count:number){
  const left=Math.max(5,Math.min(40,count-(this.doneToday().get(topicId)??0)));
  const unseen=this.sessions.pool('unseen',[topicId]);
  this.sessions.startPractice((unseen.length?unseen:this.sessions.pool('all',[topicId])).slice(0,left));
 }
}
