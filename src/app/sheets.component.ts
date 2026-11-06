import {Component,computed,inject,input,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {Store} from './store';
import {Bank,LITE_ACTIVE,LITE} from './bank';
import {Sessions} from './session';
import {TOPICS} from './topics';
import {topicStats} from './scoring';
import {IconComponent} from './icon.component';
import {buildSheet,loadRead,saveRead,splitSection} from './sheets';
import {Notes} from './notes';

const ACTIVE=new Set(LITE_ACTIVE.map(q=>q.id));
const fold=(s:string)=>s.toLocaleLowerCase('ro').normalize('NFD').replace(/\p{Diacritic}/gu,'');

// /fise lists the chapters; /fise/:topic shows one chapter's sheet.
@Component({standalone:true,imports:[FormsModule,RouterLink,IconComponent],template:`
@if(!topicId()){
<div class="page-heading"><div><div class="eyebrow">FIȘE DE RECAPITULARE</div><h1>Tot capitolul, pe o pagină.</h1><p>Afirmațiile adevărate și capcanele din fiecare grilă, grupate pe secțiunile manualului, în ordinea paginilor.</p></div></div>
<div class="sheet-grid">@for(t of overview();track t.id){
 <a class="panel sheet-card" [routerLink]="['/fise',t.id]"><small>{{t.book}} · cap. {{t.chapter}} · p. {{t.pages}}</small><h3>{{t.name}}</h3><div class="sheet-meta"><span>{{t.count}} grile</span>@if(t.total){<span [class.low]="t.percent<60">{{t.percent}}% la teste</span>}@else{<span>neexersat</span>}</div><div class="progress-track"><span [style.width.%]="t.readPct"></span></div><small>{{t.readPct}}% din secțiuni citite</small></a>}
</div>}
@else{@if(topic();as t){
<div class="page-heading sheet-heading"><div><a routerLink="/fise" class="text-link">← Toate fișele</a><div class="eyebrow">{{t.book}} · CAPITOLUL {{t.chapter}} · P. {{t.pages}}</div><h1>{{t.name}}</h1><p>{{sections().length}} secțiuni · {{itemCount()}} grile · {{readCount()}} secțiuni citite</p></div><div class="sheet-actions"><button class="button secondary" (click)="print()"><app-icon name="download"/>Tipărește / PDF</button><button class="button primary" (click)="practice()" [disabled]="!!store.draft()">Exersează capitolul<app-icon name="arrow"/></button></div></div>
<div class="sheet-tools"><label class="search-input"><app-icon name="search"/><input placeholder="Caută în fișă (ex. Wells, digoxină, Cadranul 30.17)…" [ngModel]="query()" (ngModelChange)="query.set($event)" aria-label="Caută în fișă"></label><label class="check-line"><input type="checkbox" [ngModel]="traps()" (ngModelChange)="traps.set($event)">Arată capcanele (variantele false și de ce)</label></div>
@if(!ready()){<div class="empty-state" role="status">{{bank.error()||'Se încarcă fișa…'}}</div>}
@for(s of visible();track s.key){
<section class="panel sheet-section" [class.read]="read()[s.key]">
 <header><div><small>p. {{s.pages.join(', ')}}</small><h3>{{s.title}}</h3></div><div class="sheet-section-actions"><button class="text-link" (click)="practiceSection(s.items)" [disabled]="!!store.draft()">Exersează {{s.items.length}}</button><button class="read-toggle" [class.on]="read()[s.key]" (click)="toggleRead(s.key)" [attr.aria-pressed]="!!read()[s.key]">{{read()[s.key]?'✓ Citit':'Marchează citit'}}</button></div></header>
 @for(item of s.items;track item.id){
 <div class="sheet-item">
  @if(item.detail){<span class="sheet-detail">{{item.detail}} · p. {{item.pages.join(', ')}}</span>}
  <p class="sheet-stem">{{item.stem}}</p>
  <ul class="sheet-truths">@for(x of item.truths;track x){<li>{{x}}</li>}</ul>
  @if(notes.note(item.id)){<p class="sheet-note">✎ {{notes.note(item.id)}}</p>}
  @if(traps()){<ul class="sheet-traps">@for(x of item.traps;track x.text){<li><span>{{x.text}}</span><small>{{x.why}}</small></li>}</ul>}
 </div>}
</section>}
@empty{@if(ready()){<div class="empty-state"><h3>Nimic nu corespunde căutării.</h3></div>}}
}@else{<div class="empty-state"><h2>Capitolul nu există.</h2><a routerLink="/fise" class="button secondary">Toate fișele</a></div>}}`})
export class SheetsComponent {
 topicId=input<string|undefined>(undefined,{alias:'topic'});
 store=inject(Store);bank=inject(Bank);sessions=inject(Sessions);notes=inject(Notes);
 query=signal('');traps=signal(false);ready=signal(false);
 read=signal<Record<string,number>>(loadRead(this.store.owner()));
 constructor(){void this.bank.active().then(()=>this.ready.set(true)).catch(()=>{});}
 topic=computed(()=>TOPICS.find(t=>t.id===this.topicId()));
 sections=computed(()=>this.ready()&&this.topicId()?buildSheet(this.topicId()!,[...this.bank.byId().values()].filter(q=>ACTIVE.has(q.id))):[]);
 itemCount=computed(()=>this.sections().reduce((n,s)=>n+s.items.length,0));
 readCount=computed(()=>this.sections().filter(s=>this.read()[s.key]).length);
 visible=computed(()=>{
  const q=fold(this.query().trim());if(!q)return this.sections();
  return this.sections().map(s=>fold(s.title).includes(q)?s:{...s,items:s.items.filter(i=>fold([i.stem,...i.truths,...i.traps.map(t=>t.text+' '+t.why)].join(' ')).includes(q))}).filter(s=>s.items.length);
 });
 // Chapter cards: question counts, test score and share of sections read.
 overview=computed(()=>{
  const read=this.read(),attempts=this.store.attempts();
  const sectionsBy=new Map<string,Set<string>>();for(const k of Object.keys(read)){const t=k.split('|')[0];sectionsBy.set(t,(sectionsBy.get(t)??new Set()).add(k));}
  return TOPICS.map(t=>{const s=topicStats(attempts,LITE,t.id),count=LITE_ACTIVE.filter(q=>q.topicId===t.id).length,totalSections=this.sectionCounts()[t.id]??0;return {...t,count,total:s.total,percent:s.percent,readPct:totalSections?Math.min(100,Math.round((sectionsBy.get(t.id)?.size??0)/totalSections*100)):0};});
 });
 // Distinct textbook sections per chapter (for the share read).
 sectionCounts=computed(()=>{const m=new Map<string,Set<string>>();if(this.ready())for(const q of this.bank.byId().values()){const r=(q as {reference?:{section:string}}).reference;if(r&&ACTIVE.has(q.id))m.set(q.topicId,(m.get(q.topicId)??new Set()).add(splitSection(r.section).head));}return Object.fromEntries([...m].map(([k,v])=>[k,v.size])) as Record<string,number>;});
 toggleRead(key:string){const next={...this.read()};if(next[key])delete next[key];else next[key]=Date.now();this.read.set(next);saveRead(this.store.owner(),next);}
 practice(){this.sessions.startPractice(this.sections().flatMap(s=>s.items.map(i=>i.id)).slice(0,40));}
 practiceSection(items:{id:string}[]){this.sessions.startPractice(items.map(i=>i.id));}
 print(){this.traps.set(true);setTimeout(()=>window.print(),50);}
}
