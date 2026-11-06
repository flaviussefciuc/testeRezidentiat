import {Component,computed,effect,inject,signal} from '@angular/core';
import {ActivatedRoute,RouterLink} from '@angular/router';
import {Store} from './store';
import {Bank,LITE,LITE_BY_ID} from './bank';
import {TOPICS} from './topics';
import {summarize,score,maximum,exact} from './scoring';
import {IconComponent} from './icon.component';
import {InsightComponent} from './insight.component';
import {CalibrationComponent} from './calibration.component';
import {PaceChartComponent} from './pace-chart.component';
import {AnalysisComponent} from './analysis.component';
import {NoteComponent} from './note.component';
import {insightOf,optionPoint,verdictOf,VERDICT_LABEL} from './insight';
import {CONFIDENCE_LABEL} from './calibration';
import type {Question} from './models';
type Filter='all'|'wrong'|'confident';
@Component({standalone:true,imports:[RouterLink,IconComponent,InsightComponent,CalibrationComponent,PaceChartComponent,AnalysisComponent,NoteComponent],template:`
@if(attempt();as a){
<div class="page-heading"><div><div class="eyebrow">ÎNCĂ UN PAS ÎNAINTE</div><h1>Ai terminat. Acum consolidează.</h1><p>{{date(a.completedAt)}} · {{a.mode==='exam'?'Simulare de examen':'Antrenament'}} · {{result().total}} grile · {{duration(a)}}</p></div><a routerLink="/teste" class="button primary">Un nou test<app-icon name="arrow"/></a></div>
<section class="result-banner"><div class="score-circle"><strong>{{result().percent}}<small>%</small></strong><span>din punctaj</span></div><div><h2>{{result().points}} <span>/ {{result().max}} puncte</span></h2><p>{{result().correct}} răspunsuri complet corecte · {{result().total-result().correct}} de revizuit</p><p class="small">Punctajul măsoară acest test de antrenament, nu prezice rezultatul concursului.</p></div></section>
<div class="notice"><span>{{store.user()?store.syncState():'Rezultat salvat în acest browser. Conectează-te înaintea următoarelor teste pentru sincronizare.'}}</span><a routerLink="/progres">Vezi progresul →</a></div>
<app-analysis [answers]="a.answers"/>
<app-calibration [answers]="a.answers"/>
<app-pace-chart [answers]="a.answers"/>
<div class="section-heading review-heading"><h3>Revizuiește răspunsurile</h3>
 <div class="segmented" role="group" aria-label="Filtrează grilele">
  <button [class.on]="filter()==='all'" (click)="filter.set('all')">Toate <span>{{a.answers.length}}</span></button>
  <button [class.on]="filter()==='wrong'" (click)="filter.set('wrong')">De revizuit <span>{{result().total-result().correct}}</span></button>
  @if(confidentMisses()){<button [class.on]="filter()==='confident'" (click)="filter.set('confident')">Greșeli „sigure” <span>{{confidentMisses()}}</span></button>}
 </div>
</div>
<div class="review-list">
 @if(!loaded()){<div class="empty-state" role="status">{{bank.error()||'Se încarcă grilele…'}}</div>}
 @for(item of review();track item.q.id;let index=$index){
 <details class="panel review-item" [open]="index===0">
  <summary><span class="review-status" [class.wrong]="!exact(item.q,item.selected)">{{exact(item.q,item.selected)?'✓':'↻'}}</span><span><small>{{topic(item.q.topicId)}} · {{item.q.type}}@if(item.confidence){ · <b class="conf-tag" [attr.data-c]="item.confidence">{{confLabel[item.confidence]}}</b>}</small><strong>{{item.q.stem}}</strong></span><span class="review-score">{{score(item.q,item.selected)}} / {{maximum(item.q)}}</span></summary>
  <div class="review-content">
   @for(option of item.q.options;track $index){<div class="answer revealed" [attr.data-v]="verdict(item.q,item.selected,$index)"><span class="answer-letter">{{item.q.correct.includes($index)?'✓':'✕'}}</span><span class="answer-body"><span class="answer-text">{{option}}</span><span class="answer-why"><span class="verdict">{{verdictLabel[verdict(item.q,item.selected,$index)]}}@if(point(item.q,item.selected,$index)!==null){<b>+{{point(item.q,item.selected,$index)}}</b>}</span>@if(rationales(item.q);as r){<span class="why-text">{{r[$index]}}</span>}</span></span></div>}
   @if(!item.selected.length){<p class="muted">Nu ai răspuns la această întrebare.</p>}
   <app-insight [q]="item.q" [selected]="item.selected" [confidence]="item.confidence"/>
   <app-note [qid]="item.q.id"/>
  </div>
 </details>}
 @empty{@if(loaded()){<div class="empty-state"><h3>{{filter()==='all'?'Nicio grilă în acest test.':'Nicio grilă în această categorie.'}}</h3><p>Continuă cu un alt set de grile.</p></div>}}
</div>}
@else{<div class="empty-state"><h2>{{store.ready()?'Rezultatul nu este disponibil în acest cont.':'Se încarcă rezultatul…'}}</h2><a routerLink="/progres" class="button secondary">Înapoi la progres</a></div>}`})
export class ResultComponent {
 store=inject(Store);bank=inject(Bank);id=inject(ActivatedRoute).snapshot.paramMap.get('id');
 filter=signal<Filter>('all');
 attempt=computed(()=>this.store.attempts().find(a=>a.id===this.id));
 result=computed(()=>summarize(this.attempt()?.answers??[],LITE));
 loaded=computed(()=>(this.attempt()?.answers??[]).every(a=>this.bank.byId().has(a.questionId)||!LITE_BY_ID.has(a.questionId)));
 private loader=effect(()=>{const a=this.attempt();if(a)void this.bank.ensure(a.answers.map(x=>x.questionId)).catch(()=>{});});
 confidentMisses=computed(()=>(this.attempt()?.answers??[]).filter(a=>{const q=LITE_BY_ID.get(a.questionId);return q&&a.confidence==='sure'&&a.selected.length&&!exact(q,a.selected);}).length);
 review=computed(()=>(this.attempt()?.answers??[]).flatMap(a=>{
  const q=this.bank.byId().get(a.questionId);if(!q)return[];
  const ok=exact(q,a.selected),f=this.filter();
  if(f==='wrong'&&ok)return[];
  if(f==='confident'&&(ok||a.confidence!=='sure'||!a.selected.length))return[];
  return [{q,selected:a.selected,confidence:a.confidence}];
 }));
 score=score;maximum=maximum;exact=exact;verdictLabel=VERDICT_LABEL;verdict=verdictOf;point=optionPoint;confLabel=CONFIDENCE_LABEL;
 rationales(q:Question){return insightOf(q).rationales;}
 topic(id:string){return TOPICS.find(t=>t.id===id)?.name;}
 date(d:string){return new Date(d).toLocaleString('ro-RO');}
 duration(a:{startedAt:string;completedAt:string}){const m=Math.max(1,Math.round((Date.parse(a.completedAt)-Date.parse(a.startedAt))/60000));return m>=60?`${Math.floor(m/60)} h ${m%60} min`:`${m} min`;}
}
