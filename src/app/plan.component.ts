import {Component,computed,inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {Store} from './store';
import {Sessions} from './session';
import {Planner} from './planner';
import {IconComponent} from './icon.component';

const dayLabel=(t:number)=>new Date(t).toLocaleDateString('ro-RO',{weekday:'long',day:'numeric',month:'long'});

@Component({standalone:true,imports:[FormsModule,RouterLink,IconComponent],template:`
<div class="page-heading"><div><div class="eyebrow">{{planner.daysLeft}} {{planner.daysLeft===1?'ZI':'ZILE'}} PÂNĂ LA EXAMEN</div><h1>Planul tău până pe 15 noiembrie.</h1><p>Capitolele în care ești mai slab și cele care aduc mai multe puncte la examen (după caietele 2023–2025: cardiologia ~90 de puncte, ortopedia ~52) primesc mai mult timp. Planul se recalculează în fiecare dimineață după progresul tău.</p></div>
 <label class="field-label plan-capacity">Cât poți rezolva pe zi?<select [ngModel]="planner.perDay()" (ngModelChange)="planner.setPerDay(+$event)">@for(n of capacities;track n){<option [ngValue]="n">{{n}} grile noi pe zi</option>}</select></label></div>
@if(plan();as p){
<div class="notice plan-forecast"><span>În ritmul ales vezi <strong>{{p.planned}}</strong> din cele {{p.unseen}} grile încă nevăzute ({{coverage()}}%). @if(p.planned<p.unseen){Pentru toată banca ar fi nevoie de ~{{p.needPerDay}} pe zi; planul prioritizează capitolele slabe și pe cele mari.}@else{Acoperi toată banca înainte de examen.}</span></div>
@if(planner.todayPlan();as d){
<section class="panel plan-today">
 <div class="section-heading"><div><span class="eyebrow">AZI · {{label(d.start)}}</span><h3>{{d.items.length}} {{d.items.length===1?'capitol':'capitole'}} · {{d.total}} grile noi</h3></div><div class="plan-ring" [style.--p]="planner.todayProgress()"><strong>{{planner.todayProgress()}}%</strong></div></div>
 @for(i of d.items;track i.topicId){
 <div class="plan-item"><div><strong>{{i.name}}</strong><small>{{min(i.count,done(i.topicId))}} / {{i.count}} rezolvate azi</small></div><div class="progress-track"><span [style.width.%]="min(100,done(i.topicId)/i.count*100)"></span></div><button class="button secondary small-button" (click)="planner.start(i.topicId,i.count)" [disabled]="!!store.draft()">{{done(i.topicId)>=i.count?'Încă o rundă':'Începe'}}</button></div>}
 @if(sessions.due().length){<div class="plan-item review"><div><strong>Recapitulare programată</strong><small>{{sessions.due().length}} grile scadente, în plus față de plan</small></div><span></span><button class="button primary small-button" (click)="sessions.startPractice(sessions.due().slice(0,20))" [disabled]="!!store.draft()">Recapitulează</button></div>}
</section>}
<div class="section-heading lower-heading"><div><h3>Zilele următoare</h3><p>Fiecare zi continuă de unde a rămas cea precedentă.</p></div></div>
<div class="plan-days">@for(d of upcoming();track d.start){
 <article class="panel plan-day" [class.eve]="d.reviewOnly"><span class="eyebrow">{{label(d.start)}}</span>
  @if(d.reviewOnly){<h3>Recapitulare, fără material nou</h3><ul class="plan-eve"><li>Greșelile „sigure” și grilele scadente</li><li><a routerLink="/recitire">Paginile de recitit</a> rămase</li><li>O rundă scurtă de <a routerLink="/adevarat-fals">Adevărat sau fals</a></li><li>Culcă-te devreme: somnul consolidează ce ai învățat.</li><li><a routerLink="/strategie">Strategia pentru ziua examenului</a></li></ul>}
  @else{<h3>{{d.total}} grile</h3><ul>@for(i of d.items;track i.topicId){<li><span>{{i.name}}</span><b>{{i.count}}</b></li>}@empty{<li>Zi liberă: banca este acoperită.</li>}</ul>}
 </article>}
 <article class="panel plan-day exam"><span class="eyebrow">DUMINICĂ, 15 NOIEMBRIE</span><h3>Ziua examenului</h3><p>Ai făcut tot ce se putea face. Mult succes!</p></article>
</div>}`})
export class PlanComponent {
 store=inject(Store);sessions=inject(Sessions);planner=inject(Planner);
 capacities=[60,100,150,200,300];min=Math.min;
 plan=computed(()=>this.planner.plan());
 coverage=computed(()=>{const p=this.plan();return p.unseen?Math.round(p.planned/p.unseen*100):100;});
 upcoming=computed(()=>this.plan().days.filter(d=>d!==this.planner.todayPlan()));
 label(t:number){return dayLabel(t);}
 done(topicId:string){return this.planner.doneToday().get(topicId)??0;}
}
