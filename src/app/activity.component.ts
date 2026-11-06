import {Component,computed,inject,signal} from '@angular/core';
import {Store} from './store';
import {Planner} from './planner';
import {EXAM_DATE,startOfDay} from './plan';
import {dailyCounts,streak} from './activity';

const DAY=86400000;
const levelOf=(n:number)=>n<=0?0:n<25?1:n<60?2:n<120?3:4;
const WEEKDAYS=['Lu','Ma','Mi','Jo','Vi','Sâ','Du'];

// A calendar of answered questions, from ten weeks ago through exam day.
@Component({selector:'app-activity',standalone:true,template:`
<section class="panel activity">
 <div class="section-heading"><div><h3>Activitatea ta</h3><p>Grile rezolvate pe zi, până la ziua examenului. O zi intră în serie de la 10 grile.</p></div>
  <div class="activity-stats"><div><strong>{{s().current}}</strong><span>zile la rând</span></div><div><strong>{{s().best}}</strong><span>cea mai lungă serie</span></div><div><strong>{{s().today}}</strong><span>azi / {{planner.perDay()}}</span></div></div></div>
 <div class="heat-wrap" (mouseleave)="hover.set(null)" tabindex="0" role="region" aria-label="Calendarul activității (derulează orizontal)">
  <div class="heat-days" aria-hidden="true">@for(w of weekdays;track w){<span>{{w}}</span>}</div>
  <div class="heat-grid" role="img" [attr.aria-label]="'Calendar de activitate: '+total()+' grile în ultimele zece săptămâni'">
   @for(c of cells();track c.t){<i class="heat-cell" [attr.data-l]="c.level" [class.future]="c.future" [class.today]="c.today" [class.exam]="c.exam" (mouseenter)="hover.set(c)" (focus)="hover.set(c)" tabindex="-1"></i>}
  </div>
 </div>
 <p class="heat-caption" aria-live="polite">@if(hover();as h){<strong>{{label(h.t)}}</strong> · <span>{{caption(h)}}</span>}@else{<span>Treci cu mouse-ul peste o zi pentru detalii.</span>}</p>
 <div class="heat-legend" aria-hidden="true"><span>Mai puțin</span>@for(l of [0,1,2,3,4];track l){<i class="heat-cell" [attr.data-l]="l"></i>}<span>Mai mult</span><i class="heat-cell exam"></i><span>Examen</span></div>
</section>`})
export class ActivityComponent {
 store=inject(Store);planner=inject(Planner);weekdays=WEEKDAYS;
 hover=signal<{t:number;n:number;future:boolean;exam:boolean}|null>(null);
 counts=computed(()=>dailyCounts(this.store.attempts()));
 s=computed(()=>streak(this.counts()));
 total=computed(()=>[...this.counts().values()].reduce((a,b)=>a+b,0));
 cells=computed(()=>{
  const today=startOfDay(Date.now()),exam=startOfDay(EXAM_DATE.getTime());
  // Columns are weeks starting on Monday; the grid ends with the exam's week.
  const mondayOf=(t:number)=>{const d=new Date(t);const wd=(d.getDay()+6)%7;return startOfDay(t-wd*DAY+DAY/2);};
  const end=mondayOf(exam)+6*DAY,start=startOfDay(mondayOf(Math.min(today,exam))-9*7*DAY+DAY/2);
  const out=[];for(let t=start;t<=end+DAY/2;t=startOfDay(t+DAY*1.5)){const n=this.counts().get(t)??0;out.push({t,n,level:levelOf(n),future:t>today,today:t===today,exam:t===exam});}
  return out;
 });
 label(t:number){return new Date(t).toLocaleDateString('ro-RO',{weekday:'long',day:'numeric',month:'long'});}
 caption(h:{t:number;n:number;future:boolean;exam:boolean}){if(h.exam)return 'ziua examenului';if(h.future){const d=this.daysTo(h.t);return `peste ${d} ${d===1?'zi':'zile'}`;}return `${h.n} ${h.n===1?'grilă rezolvată':'grile rezolvate'}`;}
 daysTo(t:number){return Math.round((t-startOfDay(Date.now()))/DAY);}
}
