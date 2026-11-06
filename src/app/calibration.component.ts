import {Component,computed,input} from '@angular/core';
import type {Answer} from './models';
import {LITE_BY_ID} from './bank';
import {calibration,calibrationNote} from './calibration';

// Confidence vs. outcome: one bar per confidence level.
@Component({selector:'app-calibration',standalone:true,template:`
@if(marked()){
<section class="panel calibration">
 <div class="section-heading"><div><h3>Cât de bine îți cunoști răspunsurile</h3><p>Procentul de grile complet corecte, pe nivelul de încredere marcat.</p></div></div>
 <div class="calib-grid">
  @for(r of rows();track r.level){@if(r.total){
  <div class="calib-row" [attr.data-c]="r.level"><span class="calib-label">{{r.label}}</span><div class="calib-bar"><span [style.width.%]="r.percent"></span></div><strong>{{r.percent}}%</strong><small>{{r.exact}} / {{r.total}}</small></div>}}
 </div>
 <p class="calib-note">{{note()}}</p>
</section>}`})
export class CalibrationComponent {
 answers=input<Answer[]>([]);
 rows=computed(()=>calibration(this.answers(),LITE_BY_ID));
 marked=computed(()=>this.rows().some(r=>r.level!=='none'&&r.total>0));
 note=computed(()=>calibrationNote(this.rows()));
}
