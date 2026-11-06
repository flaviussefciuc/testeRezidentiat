import {Component,computed,inject} from '@angular/core';
import {Store} from './store';
import {LITE,LITE_ACTIVE,LITE_BY_ID} from './bank';
import {TOPICS} from './topics';
import {summarize,topicStats} from './scoring';
import {dailyCounts,streak} from './activity';
import {calibration} from './calibration';
import {loadFactLog} from './facts';
import {startOfDay} from './plan';

const DAY=86400000;
// This week against the previous one, and milestones that matter for the exam.
@Component({selector:'app-weekly',standalone:true,template:`
<section class="panel weekly">
 <div class="section-heading"><div><h3>Săptămâna ta</h3><p>Ultimele 7 zile față de cele 7 dinainte.</p></div></div>
 <div class="weekly-grid">
  <div><span>Grile rezolvate</span><strong>{{w().now.n}}</strong><small [class.up]="w().now.n>=w().prev.n">{{delta(w().now.n,w().prev.n)}} față de {{w().prev.n}}</small></div>
  <div><span>Punctaj</span><strong>{{w().now.n?w().now.pct+'%':'—'}}</strong><small [class.up]="w().now.pct>=w().prev.pct">{{w().prev.n?delta(w().now.pct,w().prev.pct)+' pp':'fără comparație'}}</small></div>
  <div><span>Timp de studiu</span><strong>{{w().now.min}} min</strong><small>{{w().prev.min}} min săptămâna trecută</small></div>
  <div><span>Cea mai bună zi</span><strong>{{w().best?.n??0}}</strong><small>{{w().best?w().best!.label:'—'}}</small></div>
 </div>
 @if(w().improved;as i){<p class="weekly-note">📈 Cel mai mare progres: <strong>{{i.name}}</strong>, de la {{i.before}}% la {{i.after}}%.</p>}
 <h4 class="milestones-title">Jaloane</h4>
 <div class="milestones">@for(m of milestones();track m.id){<div class="milestone" [class.done]="m.done"><span class="milestone-icon">{{m.done?'★':'☆'}}</span><div><strong>{{m.label}}</strong><small>{{m.detail}}</small>@if(!m.done){<div class="progress-track"><span [style.width.%]="m.progress"></span></div>}</div></div>}</div>
</section>`})
export class WeeklyComponent {
 store=inject(Store);
 w=computed(()=>{
  const now=Date.now(),start=startOfDay(now)-6*DAY,prevStart=start-7*DAY;
  const span=(from:number,to:number)=>{const atts=this.store.attempts().filter(a=>{const t=Date.parse(a.completedAt);return t>=from&&t<to;});const answers=atts.flatMap(a=>a.answers).filter(x=>x.selected.length);const s=summarize(answers,LITE);const min=Math.round(atts.reduce((m,a)=>m+Math.min(240*60000,Math.max(0,Date.parse(a.completedAt)-Date.parse(a.startedAt))),0)/60000);return {n:answers.length,pct:s.percent,min,atts};};
  const cur=span(start,now+1),prev=span(prevStart,start);
  const counts=dailyCounts(cur.atts);let best:{n:number;label:string}|null=null;for(const [d,n] of counts)if(!best||n>best.n)best={n,label:new Date(d).toLocaleDateString('ro-RO',{weekday:'long',day:'numeric',month:'short'})};
  let improved:{name:string;before:number;after:number}|null=null;
  const before=this.store.attempts().filter(a=>Date.parse(a.completedAt)<start);
  for(const t of TOPICS){const a=topicStats(cur.atts,LITE,t.id),b=topicStats(before,LITE,t.id);if(a.answered>=5&&b.answered>=5&&a.percent-b.percent>0&&(!improved||a.percent-b.percent>improved.after-improved.before))improved={name:t.name,before:b.percent,after:a.percent};}
  return {now:cur,prev,best,improved};
 });
 milestones=computed(()=>{
  const atts=this.store.attempts(),answers=atts.flatMap(a=>a.answers).filter(x=>x.selected.length);
  const seen=new Set(answers.map(x=>x.questionId).filter(id=>LITE_BY_ID.get(id)?.active));
  const chapters=new Set(answers.map(x=>LITE_BY_ID.get(x.questionId)?.topicId).filter(Boolean));
  const st=streak(dailyCounts(atts)),full=atts.some(a=>a.mode==='exam'&&a.answers.length>=200);
  const sure=calibration(answers,LITE_BY_ID).find(r=>r.level==='sure')!;
  const facts=Object.keys(loadFactLog(this.store.owner())).length,total=LITE_ACTIVE.length;
  const step=(v:number,goals:number[])=>goals.find(g=>v<g)??goals[goals.length-1];
  const cover=step(seen.size,[100,500,1000,2000,total]);
  return [
   {id:'cover',label:`Ai văzut ${seen.size} grile din bancă`,detail:`Următorul jalon: ${cover}`,progress:Math.min(100,seen.size/cover*100),done:seen.size>=total},
   {id:'chapters',label:'Toate cele 39 de capitole atinse',detail:`${chapters.size} / 39 capitole cu cel puțin o grilă`,progress:chapters.size/39*100,done:chapters.size>=39},
   {id:'streak',label:'O săptămână fără pauză',detail:`Cea mai lungă serie: ${st.best} zile (7 necesare)`,progress:Math.min(100,st.best/7*100),done:st.best>=7},
   {id:'full',label:'O simulare completă de 200 de grile',detail:full?'Ai trecut prin formatul real':'Patru ore, ca la examen',progress:full?100:0,done:full},
   {id:'calib',label:'Încredere calibrată',detail:sure.total>=20?`„Sigur” corect în ${sure.percent}% din ${sure.total} cazuri (80% necesar)`:`Marchează „sigur” la cel puțin 20 de grile (${sure.total} până acum)`,progress:sure.total>=20?Math.min(100,sure.percent/80*100):sure.total/20*100,done:sure.total>=20&&sure.percent>=80},
   {id:'facts',label:'500 de afirmații Adevărat sau fals',detail:`${facts} afirmații exersate`,progress:Math.min(100,facts/500*100),done:facts>=500},
  ];
 });
 delta(a:number,b:number){const d=a-b;return (d>=0?'+':'')+d;}
}
