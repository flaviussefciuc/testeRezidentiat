import {Component,computed,input} from '@angular/core';
import {RouterLink} from '@angular/router';
import type {Answer} from './models';
import {whyCounts} from './why';

// The student's own diagnosis of their misses, turned into the most useful next step.
@Component({selector:'app-why',standalone:true,imports:[RouterLink],template:`
<section class="panel why-panel">
 <div class="section-heading"><div><h3>De ce greșești</h3><p>Din motivele pe care le-ai marcat după grilele greșite la antrenament ({{tagged()}} etichetate).</p></div></div>
 @if(tagged()){
  @for(r of rows();track r.id){@if(r.count){<div class="why-bar"><span>{{r.label}}</span><div class="progress-track"><span [style.width.%]="r.share"></span></div><b>{{r.count}}</b></div>}}
  @if(rows()[0];as top){<div class="why-advice"><strong>Cel mai des: {{top.label.toLowerCase()}}.</strong> {{top.advice}} <a class="text-link" [routerLink]="top.link.path">{{top.link.label}} →</a></div>}
 }@else{<p class="muted">După ce verifici o grilă greșită la antrenament, alege motivul în caseta explicației. Aici vei vedea ce tip de greșeală domină și ce să faci.</p>}
</section>`})
export class WhyComponent {
 answers=input<Answer[]>([]);
 rows=computed(()=>whyCounts(this.answers()));
 tagged=computed(()=>this.answers().filter(a=>a.why).length);
}
