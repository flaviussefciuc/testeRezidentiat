import {Component,computed,effect,inject,input,signal} from '@angular/core';
import {Router,RouterLink} from '@angular/router';
import {Bank,LITE_ACTIVE} from './bank';
import {Sessions} from './session';
import {TOPICS} from './topics';
import {IconComponent} from './icon.component';
import {InsightComponent} from './insight.component';
import {NoteComponent} from './note.component';
import {insightOf,optionPoint,verdictOf,VERDICT_LABEL} from './insight';
import {splitSection} from './sheets';
import {StemComponent} from './stem.component';
import {isNegative} from './emphasis';
import type {Question} from './models';

const ACTIVE=new Set(LITE_ACTIVE.map(q=>q.id));
export const shareUrl=(id:string)=>`${location.origin}/grila/${encodeURIComponent(id)}`;
// Shares a question link with the system sheet when available, otherwise copies it.
export async function shareQuestion(id:string,stem:string):Promise<string>{
 const url=shareUrl(id);
 try{if(navigator.share){await navigator.share({title:'Grilă Rezi',text:stem,url});return 'Trimis.';}}catch{/* cancelled */}
 try{await navigator.clipboard.writeText(url);return 'Link copiat.';}catch{return url;}
}

// One question on its own page: answer, check, read the explanation, share.
@Component({standalone:true,imports:[RouterLink,IconComponent,InsightComponent,NoteComponent,StemComponent],template:`
@if(question();as q){
<div class="quiz-top"><a routerLink="/teste" class="text-link">← Teste</a><span class="badge">{{topicName(q.topicId)}}</span><span class="single-actions"><button class="button secondary small-button" (click)="share(q)"><app-icon name="share"/>{{shared()||'Distribuie'}}</button></span></div>
<section class="panel question-panel single">
 <div class="question-meta"><span>{{q.type==='CS'?'Complement simplu · un răspuns':'Complement multiplu · 2–4 răspunsuri'}}</span>@if(section()){<span>· {{section()}}</span>}</div>
 @if(negative(q.stem)){<p class="polarity-chip" role="note">⚠ Întrebare negativă: se cere varianta falsă sau excepția.</p>}<h1 class="question-stem"><app-stem [text]="q.stem"/></h1>
 <fieldset class="answers"><legend class="sr-only">Alege răspunsurile</legend>
  @for(o of q.options;track $index;let i=$index){
  <label class="answer" [class.chosen]="selected().includes(i)" [class.revealed]="checked()" [attr.data-v]="checked()?verdict(q,i):null">
   <input [type]="q.type==='CS'?'radio':'checkbox'" name="single" [checked]="selected().includes(i)" [disabled]="checked()" (change)="choose(q,i)">
   <span class="answer-letter">{{'ABCDE'[i]}}</span>
   <span class="answer-body"><span class="answer-text">{{o}}</span>@if(checked()){<span class="answer-why"><span class="verdict">{{verdictLabel[verdict(q,i)]}}@if(point(q,i)!==null){<b>+{{point(q,i)}}</b>}</span>@if(rationales();as r){<span class="why-text">{{r[i]}}</span>}</span>}</span>
  </label>}
 </fieldset>
 @if(checked()){<app-insight [q]="q" [selected]="selected()"/>}
 <app-note [qid]="q.id" [compact]="!checked()"/>
 <div class="quiz-actions">@if(!checked()){<button class="button secondary" (click)="checked.set(true)">Arată răspunsul</button><button class="button primary" (click)="checked.set(true)" [disabled]="invalid(q)">Verifică<app-icon name="check"/></button>}
 @else{<button class="button secondary" (click)="reset()">Încearcă din nou</button>@if(sibling();as s){<a class="button primary" [routerLink]="['/grila',s]">Altă grilă din această secțiune<app-icon name="arrow"/></a>}@else{<button class="button primary" (click)="practice(q.topicId)">Exersează capitolul<app-icon name="arrow"/></button>}}</div>
</section>}
@else{<div class="empty-state" role="status">@if(missing()){<h2>Grila nu există sau a fost retrasă.</h2><a routerLink="/cauta" class="button secondary">Caută în bancă</a>}@else{<span>{{bank.error()||'Se încarcă grila…'}}</span>}</div>}`})
export class SingleComponent {
 id=input.required<string>();
 bank=inject(Bank);sessions=inject(Sessions);router=inject(Router);
 selected=signal<number[]>([]);checked=signal(false);shared=signal('');missing=signal(false);
 verdictLabel=VERDICT_LABEL;negative=isNegative;
 private loader=effect(()=>{const id=this.id();this.selected.set([]);this.checked.set(false);this.shared.set('');this.missing.set(false);void this.bank.ensure([id]).then(()=>this.missing.set(!this.bank.byId().has(id))).catch(()=>{});});
 question=computed(()=>this.bank.byId().get(this.id()));
 rationales=computed(()=>this.question()?insightOf(this.question()!).rationales:null);
 section=computed(()=>{const r=this.question()?insightOf(this.question()!).reference:null;return r?`${splitSection(r.section).head} · p. ${r.pages.join(', ')}`:'';});
 // A random active question from the same textbook heading, for going deeper.
 sibling=computed(()=>{
  const q=this.question();if(!q)return null;const head=insightOf(q).reference?splitSection(insightOf(q).reference!.section).head:null;if(!head)return null;
  const peers=[...this.bank.byId().values()].filter(x=>x.id!==q.id&&x.topicId===q.topicId&&ACTIVE.has(x.id)&&insightOf(x).reference&&splitSection(insightOf(x).reference!.section).head===head);
  return peers.length?peers[Math.floor(Math.random()*peers.length)].id:null;
 });
 topicName(id:string){return TOPICS.find(t=>t.id===id)?.name??'';}
 invalid(q:Question){const n=this.selected().length;return q.type==='CS'?n!==1:n<2||n>4;}
 choose(q:Question,i:number){if(this.checked())return;const s=this.selected();this.selected.set(q.type==='CS'?[i]:s.includes(i)?s.filter(v=>v!==i):[...s,i]);}
 verdict(q:Question,i:number){return verdictOf(q,this.selected(),i);}
 point(q:Question,i:number){return optionPoint(q,this.selected(),i);}
 reset(){this.selected.set([]);this.checked.set(false);}
 async share(q:Question){this.shared.set(await shareQuestion(q.id,q.stem));setTimeout(()=>this.shared.set(''),2500);}
 practice(topicId:string){this.sessions.startPractice(this.sessions.pool('unseen',[topicId]).slice(0,20));}
}
