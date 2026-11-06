import {Component,computed,HostListener,inject,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Store} from './store';
import {Bank,LITE_ACTIVE} from './bank';
import {Sessions} from './session';
import {TOPICS} from './topics';
import {IconComponent} from './icon.component';
import {StemComponent} from './stem.component';
import {factsOf,loadFactLog,pickFacts,recordFact,saveFactLog,type Fact,type FactLog} from './facts';

type Phase='setup'|'run'|'done';
const ACTIVE=new Set(LITE_ACTIVE.map(q=>q.id));
interface Result {fact:Fact;said:boolean;ok:boolean}

// Rapid true/false review built from the verified option statements of the bank.
@Component({standalone:true,imports:[FormsModule,IconComponent,StemComponent],template:`
@switch(phase()){
@case('setup'){
<div class="page-heading"><div><div class="eyebrow">RECAPITULARE FULGER</div><h1>Adevărat sau fals?</h1><p>Fiecare variantă din bancă este o afirmație verificată în manual. Decizi în câteva secunde și afli imediat de ce.</p></div></div>
<div class="drill-setup">
 <section class="panel">
  <div class="drill-pitch"><div><strong>{{factCount()|| '…'}}</strong><span>afirmații verificate</span></div><div><strong>~6 s</strong><span>pe afirmație</span></div><div><strong>{{logSize()}}</strong><span>deja exersate de tine</span></div></div>
  <label class="field-label">Capitol<select [ngModel]="topic()" (ngModelChange)="topic.set($event)"><option value="">Toate capitolele</option>@for(b of books;track b){<optgroup [label]="b">@for(t of topicsOf(b);track t.id){<option [value]="t.id">{{t.name}}</option>}</optgroup>}</select></label>
  <label class="field-label">Afirmații din<select [ngModel]="from()" (ngModelChange)="from.set($event)"><option value="all">Toată banca (întâi cele greșite data trecută, apoi cele noi)</option><option value="wrong">Grilele pe care le-ai greșit la ultima încercare ({{sessions.wrong().size}})</option></select></label>
  <label class="field-label">Lungimea rundei<select [ngModel]="size()" (ngModelChange)="size.set(+$event)"><option [ngValue]="20">20 de afirmații · ~2 minute</option><option [ngValue]="40">40 de afirmații · ~4 minute</option><option [ngValue]="80">80 de afirmații · ~8 minute</option></select></label>
  <button class="button primary full" (click)="start()" [disabled]="!ready()||!pool().length">{{ready()?'Începe runda':'Se încarcă afirmațiile…'}}<app-icon name="arrow"/></button>
  @if(ready()&&!pool().length){<p class="small muted">Nu există afirmații pentru această selecție.</p>}
 </section>
 <aside class="panel drill-how"><span class="eyebrow">CUM FUNCȚIONEAZĂ</span><ol><li>Citești începutul grilei și o variantă.</li><li>Alegi <kbd>A</kbd> Adevărat sau <kbd>F</kbd> Fals (sau <kbd>←</kbd> / <kbd>→</kbd>).</li><li>Vezi justificarea din manual și treci mai departe cu <kbd>Enter</kbd>.</li></ol><p class="small muted">Afirmațiile greșite revin primele în rundele următoare. Rezultatele rămân pe acest dispozitiv.</p></aside>
</div>}
@case('run'){@if(current();as f){
<div class="drill-top"><button class="text-link" (click)="phase.set('setup')">← Oprește runda</button><div class="drill-progress"><div class="progress-track"><span [style.width.%]="(index()+ (answered()?1:0))/deck().length*100"></span></div><span>{{index()+1}} / {{deck().length}}</span></div><span class="drill-streak" [class.hot]="streak()>=5">🔥 {{streak()}}</span></div>
<section class="drill-card panel" [attr.data-state]="answered()?(lastOk()?'ok':'bad'):null">
 <span class="drill-topic">{{topicName(f.topicId)}}</span>
 <p class="drill-stem"><app-stem [text]="f.stem"/></p>
 <p class="drill-statement">{{f.text}}</p>
 @if(!answered()){<div class="drill-choices"><button class="drill-btn true" (click)="answer(true)"><kbd>A</kbd> Adevărat</button><button class="drill-btn false" (click)="answer(false)"><kbd>F</kbd> Fals</button></div>}
 @else{<div class="drill-feedback" aria-live="polite"><strong>{{lastOk()?'Corect':'Greșit'}} · afirmația este {{f.truth?'adevărată':'falsă'}}</strong><p>{{f.why}}</p><small>{{f.ref}}</small><button class="button primary" (click)="next()">{{isLast()?'Vezi rezultatul':'Următoarea'}} <kbd>Enter</kbd></button></div>}
</section>}}
@case('done'){
<div class="page-heading"><div><div class="eyebrow">RUNDĂ ÎNCHEIATĂ</div><h1>{{correct()}} din {{results().length}} corecte.</h1><p>{{verdict()}}</p></div><button class="button primary" (click)="start()">Încă o rundă<app-icon name="refresh"/></button></div>
<div class="stats-grid three"><article class="stat"><span class="stat-icon mint"><app-icon name="target"/></span><div><span>Acuratețe</span><strong>{{accuracy()}}%</strong><small>{{correct()}} / {{results().length}} afirmații</small></div></article><article class="stat"><span class="stat-icon peach"><app-icon name="spark"/></span><div><span>Cea mai lungă serie</span><strong>{{best()}}</strong><small>răspunsuri corecte la rând</small></div></article><article class="stat"><span class="stat-icon lavender"><app-icon name="clock"/></span><div><span>Ritm</span><strong>{{pace()}} s</strong><small>în medie pe afirmație</small></div></article></div>
@if(missed().length){
<div class="section-heading lower-heading"><div><h3>De reținut ({{missed().length}})</h3><p>Afirmațiile greșite revin primele în runda următoare.</p></div><button class="button secondary" (click)="practiceMissed()" [disabled]="!!store.draft()">Rezolvă grilele complete<app-icon name="arrow"/></button></div>
<div class="review-list">@for(r of missed();track r.fact.key){<article class="panel drill-miss"><small>{{topicName(r.fact.topicId)}} · {{r.fact.stem}}</small><strong>{{r.fact.text}}</strong><span class="verdict-line" [class.t]="r.fact.truth">Este {{r.fact.truth?'ADEVĂRAT':'FALS'}} · tu ai spus {{r.said?'adevărat':'fals'}}</span><p>{{r.fact.why}}</p><small class="muted">{{r.fact.ref}}</small></article>}</div>}
@else{<div class="empty-state"><h3>Nicio greșeală. Excelent!</h3><p>Încearcă o rundă mai lungă sau alt capitol.</p></div>}
}}`})
export class DrillComponent {
 store=inject(Store);bank=inject(Bank);sessions=inject(Sessions);
 books=['Kumar & Clark','Lawrence','Sinopsis'];
 phase=signal<Phase>('setup');topic=signal('');from=signal<'all'|'wrong'>('all');size=signal(20);
 ready=signal(false);
 private log:FactLog=loadFactLog(this.store.owner());
 logSize=signal(Object.keys(this.log).length);
 deck=signal<Fact[]>([]);index=signal(0);results=signal<Result[]>([]);answered=signal(false);lastOk=signal(false);streak=signal(0);best=signal(0);
 private started=0;private finishedAt=0;
 constructor(){void this.bank.active().then(()=>this.ready.set(true)).catch(()=>{});}
 allFacts=computed(()=>this.ready()?[...this.bank.byId().values()].filter(q=>ACTIVE.has(q.id)).flatMap(q=>factsOf(q)):[]);
 factCount=computed(()=>this.allFacts().length);
 pool=computed(()=>{const t=this.topic(),wrong=this.sessions.wrong(),from=this.from();return this.allFacts().filter(f=>(!t||f.topicId===t)&&(from==='all'||wrong.has(f.qid)));});
 current=computed(()=>this.deck()[this.index()]);
 isLast=computed(()=>this.index()===this.deck().length-1);
 correct=computed(()=>this.results().filter(r=>r.ok).length);
 accuracy=computed(()=>this.results().length?Math.round(this.correct()/this.results().length*100):0);
 missed=computed(()=>this.results().filter(r=>!r.ok));
 pace=computed(()=>this.results().length?Math.max(1,Math.round((this.finishedAt-this.started)/1000/this.results().length)):0);
 verdict=computed(()=>{const a=this.accuracy();return a>=90?'Stăpânești bine aceste afirmații. Trece la un capitol mai slab.':a>=70?'Bază solidă. Recitește justificările greșite mai jos.':'Aici merită să revii: citește justificările, apoi refă runda.';});
 topicsOf(book:string){return TOPICS.filter(t=>t.book===book);}
 topicName(id:string){return TOPICS.find(t=>t.id===id)?.name??'';}
 start(){
  const deck=pickFacts(this.pool(),this.log,this.size());if(!deck.length)return;
  this.deck.set(deck);this.index.set(0);this.results.set([]);this.answered.set(false);this.streak.set(0);this.best.set(0);this.started=Date.now();this.phase.set('run');
 }
 answer(said:boolean){
  const f=this.current();if(!f||this.answered())return;
  const ok=said===f.truth;
  this.results.update(r=>[...r,{fact:f,said,ok}]);this.lastOk.set(ok);this.answered.set(true);
  this.streak.set(ok?this.streak()+1:0);this.best.set(Math.max(this.best(),this.streak()));
  recordFact(this.log,f.key,ok);saveFactLog(this.store.owner(),this.log);this.logSize.set(Object.keys(this.log).length);
 }
 next(){
  if(!this.answered())return;
  if(this.index()<this.deck().length-1){this.index.update(i=>i+1);this.answered.set(false);}
  else{this.finishedAt=Date.now();this.phase.set('done');}
 }
 practiceMissed(){this.sessions.startPractice([...new Set(this.missed().map(r=>r.fact.qid))]);}
 @HostListener('document:keydown',['$event']) onKey(e:KeyboardEvent){
  if(this.phase()!=='run'||e.ctrlKey||e.metaKey||e.altKey)return;
  const tag=(e.target as HTMLElement|null)?.tagName;if(tag==='INPUT'||tag==='SELECT'||tag==='TEXTAREA')return;
  if(!this.answered()){
   if(e.code==='KeyA'||e.key==='ArrowLeft'){e.preventDefault();this.answer(true);}
   else if(e.code==='KeyF'||e.key==='ArrowRight'){e.preventDefault();this.answer(false);}
  }else if((e.key==='Enter'||e.key===' ')&&tag!=='BUTTON'){e.preventDefault();this.next();}
 }
}
