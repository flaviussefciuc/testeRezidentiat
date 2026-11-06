import {Component,computed,input} from '@angular/core';
import type {Answer} from './models';
import {LITE_BY_ID} from './bank';
import {TOPICS} from './topics';
import {summarize} from './scoring';
import {habitTip,losses,markHabit} from './analysis';

// Where the points went, per chapter scores and the CM marking habit.
@Component({selector:'app-analysis',standalone:true,template:`
@if(l().max){
<section class="panel analysis">
 <div class="section-heading"><div><h3>{{title()}}</h3><p>{{l().points}} din {{l().max}} puncte. Fiecare segment arată câte puncte au mers într-o direcție.</p></div></div>
 <div class="loss-bar" role="img" [attr.aria-label]="aria()">@for(s of segments();track s.key){@if(s.value){<span [attr.data-k]="s.key" [style.flex-grow]="s.value" [title]="s.label+': '+s.value+' puncte'"></span>}}</div>
 <ul class="loss-legend">@for(s of segments();track s.key){@if(s.value){<li><i [attr.data-k]="s.key"></i><span>{{s.label}}</span><b>{{s.value}}</b><small>{{pct(s.value)}}%</small></li>}}</ul>
 <div class="analysis-cols">
  <div><h4>Pe capitole</h4>
   @for(c of chapters();track c.id){<div class="chapter-bar"><span>{{c.name}}</span><div class="progress-track"><span [style.width.%]="c.percent" [class.low]="c.percent<55"></span></div><b>{{c.percent}}%</b><small>{{c.total}}</small></div>}
  </div>
  <div><h4>Cum marchezi la complement multiplu</h4>
   @if(h().answered){<div class="habit-cols" role="img" [attr.aria-label]="'Diferența dintre variantele marcate și cele adevărate, pe '+h().answered+' grile CM'">@for(k of diffKeys;track k){<div class="habit-col"><div class="habit-track"><span [style.height.%]="colH(k)"></span></div><b>{{h().diff[k]}}</b><small>{{diffLabel[k]}}</small></div>}</div>}
   <p class="habit-tip">{{tip()}}</p>
  </div>
 </div>
</section>}`})
export class AnalysisComponent {
 answers=input<Answer[]>([]);title=input('Unde s-au dus punctele');
 diffKeys=['-2','-1','0','+1','+2'];
 diffLabel:Record<string,string>={'-2':'2+ prea puține','-1':'1 prea puțin','0':'exact cât cheia','+1':'1 în plus','+2':'2+ în plus'};
 l=computed(()=>losses(this.answers(),LITE_BY_ID));
 h=computed(()=>markHabit(this.answers(),LITE_BY_ID));
 tip=computed(()=>habitTip(this.l(),this.h()));
 segments=computed(()=>{const l=this.l();return [
  {key:'points',label:'Obținute',value:l.points},
  {key:'omitted',label:'Variante adevărate omise (CM)',value:l.omitted},
  {key:'false',label:'Variante false bifate (CM)',value:l.falseMarks},
  {key:'cs',label:'Complement simplu greșit',value:l.wrongCs},
  {key:'void',label:'CM anulate (1 sau 5 variante marcate)',value:l.voidCm},
  {key:'blank',label:'Fără răspuns',value:l.blank}];});
 pct(v:number){return Math.round(v/this.l().max*100);}
 aria=computed(()=>this.segments().filter(s=>s.value).map(s=>`${s.label}: ${s.value}`).join('; '));
 chapters=computed(()=>{
  const by=new Map<string,Answer[]>();for(const a of this.answers()){const t=LITE_BY_ID.get(a.questionId)?.topicId;if(t)by.set(t,[...(by.get(t)??[]),a]);}
  return [...by].map(([id,ans])=>{const s=summarize(ans,[...ans.map(a=>LITE_BY_ID.get(a.questionId)!)]);return {id,name:TOPICS.find(t=>t.id===id)?.name??id,percent:s.percent,total:ans.length};}).sort((a,b)=>a.percent-b.percent||b.total-a.total).slice(0,10);
 });
 colH(k:string){const h=this.h(),max=Math.max(1,...Object.values(h.diff));return h.diff[k]/max*100;}
}
