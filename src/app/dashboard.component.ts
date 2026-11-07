import {Component,computed,inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Store} from './store';
import {LITE as QUESTION_HISTORY,LITE_ACTIVE as QUESTIONS,activeCount} from './bank';
import {TOPICS} from './topics';
import {improvement,summarize,topicStats,wrongIds} from './scoring';
import {IconComponent} from './icon.component';
import {ChartComponent} from './chart.component';
import {Sessions} from './session';
import {MasteryMapComponent} from './mastery.component';
import {Planner} from './planner';
import {ChallengeComponent} from './challenge.component';
import {readiness} from './readiness';
import {dailyCounts,streak} from './activity';
import {LITE_BY_ID,LITE_ACTIVE} from './bank';
@Component({standalone:true,imports:[RouterLink,IconComponent,ChartComponent,MasteryMapComponent,ChallengeComponent],template:`
<div class="page-heading"><div><div class="eyebrow">FIECARE ZI CONTEAZĂ</div><h1>Pregătirea ta, în progres<span class="serif-dot">.</span></h1><p>Un loc pentru tot ce înveți. O direcție clară pentru ce urmează.</p></div><a class="button primary" routerLink="/teste"><app-icon name="book"/>Începe un test<app-icon name="arrow"/></a></div>
@if(store.draft()){<div class="notice"><span>Ai un test în desfășurare, salvat pe acest dispozitiv.</span><a routerLink="/test">Continuă testul →</a></div>}
<section class="hero today-hero"><div class="hero-copy">
 <span class="hero-label"><span class="status-dot"></span> {{days}} {{days===1?'ZI':'ZILE'}} PÂNĂ LA EXAMEN · 15 NOIEMBRIE</span>
 <h2>@if(planner.todayPlan();as d){<span>Azi: {{d.total}} grile noi</span>}@else{<span>Azi: recapitulare</span>}@if(sessions.due().length){<span class="hero-plus"> + {{sessions.due().length}} de recapitulat</span>}</h2>
 <p>{{greeting()}}</p>
 <div class="hero-actions">@if(planner.todayPlan()?.items?.length){<button class="button lime" (click)="continuePlan()" [disabled]="!!store.draft()">Continuă planul · {{nextItem()?.name}}<app-icon name="arrow"/></button>}@else{<a class="button lime" routerLink="/teste">Începe un test<app-icon name="arrow"/></a>}@if(sessions.due().length){<button class="button ghost" (click)="startDue()" [disabled]="!!store.draft()">Recapitulează {{dueBatch()}}</button>}</div>
 <div class="hero-meta">{{count}} grile verificate <span>·</span> {{topics.length}} capitole <span>·</span> serie de {{streakDays()}} {{streakDays()===1?'zi':'zile'}} <span>·</span> azi {{planner.todayProgress()}}% din plan</div>
</div>
<div class="readiness" [attr.aria-label]="'Indice de pregătire în Rezi: '+ready().score+' din 100'">
 <div class="readiness-ring" [style.--p]="ready().score"><strong>{{ready().score}}</strong><small>din 100</small></div>
 <span class="readiness-title">Indicele tău de pregătire</span>
 @for(p of ready().parts;track p.key){<div class="readiness-part"><span>{{p.label}}</span><i><b [style.width.%]="p.value"></b></i><em>{{p.value}}%</em></div>}
 <p class="readiness-next">→ {{ready().next}}</p>
 <small class="readiness-note">Progres în banca Rezi, nu o predicție a notei.</small>
</div></section>

<section class="stats-grid" aria-label="Statisticile tale"><article class="stat"><span class="stat-icon mint"><app-icon name="book"/></span><div><span>Grile rezolvate</span><strong>{{summary().answered}}<small> / {{summary().total}} în teste</small></strong><small>{{store.attempts().length}} sesiuni finalizate</small></div></article><article class="stat"><span class="stat-icon peach"><app-icon name="target"/></span><div><span>Punctaj cumulat</span><strong>{{summary().max?summary().percent+'%':'—'}}</strong><small>{{summary().max?summary().points+' din '+summary().max+' puncte':'Începe pentru a-ți vedea scorul'}}</small></div></article><article class="stat"><span class="stat-icon lavender"><app-icon name="chart"/></span><div><span>Evoluție săptămânală</span><strong>{{delta()===null?'—':(delta()!>0?'+':'')+delta()+' pp'}}</strong><small>Ultimele 7 zile vs. cele precedente</small></div></article><article class="stat"><span class="stat-icon sand"><app-icon name="refresh"/></span><div><span>Scadente azi</span><strong>{{sessions.due().length}}<small> grile</small></strong><small>{{wrong().length}} greșite la ultima încercare · {{sessions.retained()}}% consolidate</small></div></article></section>
<div class="challenge-slot"><app-challenge [compact]="true"/></div>
<div class="dashboard-columns"><section class="panel"><div class="section-heading"><div><h3>Cum evoluezi</h3><p>Procentul de puncte obținute la ultimele sesiuni</p></div><a routerLink="/progres" class="text-link">Vezi progresul <span>↗</span></a></div><app-trend [points]="points()"/><div class="chart-legend"><span class="status-dot"></span>Punctajul tău <span class="muted">Fiecare test este un nou reper.</span></div></section><section class="panel focus-panel plan-mini"><div class="section-heading"><div><span class="eyebrow">PLANUL DE AZI</span><h3>{{planner.todayPlan()?planner.todayPlan()!.total+' grile noi':'Recapitulare'}}</h3></div><div class="plan-ring small" [style.--p]="planner.todayProgress()"><strong>{{planner.todayProgress()}}%</strong></div></div>@if(planner.todayPlan();as d){<ul class="plan-mini-list">@for(i of d.items.slice(0,4);track i.topicId){<li><span>{{i.name}}</span><b>{{planner.doneToday().get(i.topicId)??0}}/{{i.count}}</b></li>}</ul><button class="button secondary full" (click)="planner.start(d.items[0].topicId,d.items[0].count)" [disabled]="!!store.draft()||!d.items.length">Continuă cu {{d.items[0]?.name}}<app-icon name="arrow"/></button>}@else{<p>Ultima zi înainte de examen: doar recapitulare, fără material nou.</p>}<a routerLink="/plan" class="text-link">Vezi tot planul →</a></section></div>
<div class="lower-heading"><app-mastery-map/></div>
`})
export class DashboardComponent {store=inject(Store);sessions=inject(Sessions);planner=inject(Planner);
 ready=computed(()=>readiness(this.store.attempts(),LITE_ACTIVE,LITE_BY_ID,this.sessions.memory(),TOPICS.length));
 streakDays=computed(()=>streak(dailyCounts(this.store.attempts())).current);
 nextItem=computed(()=>{const d=this.planner.todayPlan();if(!d)return null;return d.items.find(i=>(this.planner.doneToday().get(i.topicId)??0)<i.count)??d.items[0];});
 continuePlan(){const i=this.nextItem();if(i)this.planner.start(i.topicId,i.count);}
 greeting=computed(()=>{const h=new Date().getHours(),p=this.planner.todayProgress();const hello=h<11?'Bună dimineața!':h<18?'Bună ziua!':'Bună seara!';if(!this.store.attempts().length)return `${hello} Începe cu planul de azi: capitolele sunt alese după punctele pe care le aduc la examen și după cât de bine le stăpânești.`;if(p>=100)return `${hello} Ai terminat planul de azi. Orice grilă în plus e un avantaj; recapitulează sau citește o fișă.`;return `${hello} ${p?`Ai făcut ${p}% din planul de azi.`:'Planul de azi te așteaptă.'} Fiecare grilă verificată și înțeleasă contează.`;});dueBatch=computed(()=>Math.min(20,this.sessions.due().length));startDue(){this.sessions.startPractice(this.sessions.due().slice(0,20));}topics=TOPICS;count=QUESTIONS.length;days=Math.max(0,Math.ceil((new Date('2026-11-15T00:00:00+02:00').getTime()-Date.now())/86400000));summary=computed(()=>summarize(this.store.attempts().flatMap(a=>a.answers),QUESTION_HISTORY));delta=computed(()=>improvement(this.store.attempts(),QUESTION_HISTORY));wrong=computed(()=>wrongIds(this.store.attempts(),QUESTIONS));points=computed(()=>[...this.store.attempts()].sort((a,b)=>a.completedAt.localeCompare(b.completedAt)).slice(-10).map(a=>({value:summarize(a.answers,QUESTION_HISTORY).percent,label:new Date(a.completedAt).toLocaleDateString('ro-RO',{day:'numeric',month:'short'})})));weakest=computed(()=>TOPICS.map(t=>({...t,...topicStats(this.store.attempts(),QUESTION_HISTORY,t.id)})).filter(t=>t.total>0).sort((a,b)=>a.percent-b.percent)[0]);questionCount(id:string){return activeCount(id);}}
