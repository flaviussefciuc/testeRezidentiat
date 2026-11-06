import {Component,computed,input,signal} from '@angular/core';
import type {Answer} from './models';
import {LITE_BY_ID} from './bank';
import {exact} from './scoring';
import {PACE_SECONDS} from './pace';

// Seconds spent on each question, in test order, against the exam pace of 72 s.
@Component({selector:'app-pace-chart',standalone:true,template:`
@if(bars().length){
<section class="panel pace">
 <div class="section-heading"><div><h3>Ritmul tău</h3><p>Secunde pe grilă, în ordinea testului. Linia punctată este ritmul examenului ({{pace}} s).</p></div>
  <div class="activity-stats"><div><strong>{{avg()}} s</strong><span>în medie</span></div><div><strong>{{over()}}%</strong><span>peste {{pace}} s</span></div><div><strong>{{wrongAvg()}} s</strong><span>pe cele greșite</span></div></div></div>
 <div class="pace-plot" (mouseleave)="hover.set(null)" tabindex="0" role="region" aria-label="Timpul pe grilă (derulează orizontal)">
  <svg [attr.viewBox]="'0 0 '+width()+' 160'" preserveAspectRatio="none" role="img" [attr.aria-label]="'Timp pe grilă: medie '+avg()+' secunde, '+over()+'% peste ritmul examenului'">
   @for(b of bars();track b.i){<rect class="pace-bar" [class.bad]="!b.ok" [attr.x]="b.i*step()+1" [attr.y]="160-b.h" [attr.width]="step()-2" [attr.height]="b.h" rx="2" (mouseenter)="hover.set(b)"/>}
   <line class="pace-line" x1="0" [attr.x2]="width()" [attr.y1]="160-paceY()" [attr.y2]="160-paceY()"/>
  </svg>
 </div>
 <p class="heat-caption">@if(hover();as h){<strong>Grila {{h.i+1}}</strong> · <span>{{h.s}} s · {{h.ok?'complet corectă':'de revizuit'}}</span>}@else{<span><i class="pace-key"></i> complet corecte · <i class="pace-key bad"></i> de revizuit · treci peste o bară pentru detalii</span>}</p>
</section>}`})
export class PaceChartComponent {
 answers=input<Answer[]>([]);pace=PACE_SECONDS;
 hover=signal<{i:number;s:number;ok:boolean}|null>(null);
 private timed=computed(()=>this.answers().map((a,i)=>({i,s:Math.round((a.ms??0)/1000),ok:!!LITE_BY_ID.get(a.questionId)&&exact(LITE_BY_ID.get(a.questionId)!,a.selected)})).filter(x=>x.s>0));
 private top=computed(()=>Math.max(PACE_SECONDS*2,...this.timed().map(x=>x.s)));
 step=computed(()=>Math.max(4,Math.min(24,Math.floor(900/Math.max(1,this.answers().length)))));
 width=computed(()=>this.answers().length*this.step());
 bars=computed(()=>this.timed().map(x=>({...x,h:Math.max(3,Math.min(160,x.s/this.top()*150))})));
 paceY=computed(()=>PACE_SECONDS/this.top()*150);
 avg=computed(()=>{const t=this.timed();return t.length?Math.round(t.reduce((n,x)=>n+x.s,0)/t.length):0;});
 over=computed(()=>{const t=this.timed();return t.length?Math.round(t.filter(x=>x.s>PACE_SECONDS).length/t.length*100):0;});
 wrongAvg=computed(()=>{const t=this.timed().filter(x=>!x.ok);return t.length?Math.round(t.reduce((n,x)=>n+x.s,0)/t.length):0;});
}
