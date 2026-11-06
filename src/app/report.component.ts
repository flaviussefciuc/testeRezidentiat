import {Component,computed,input,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import type {Question} from './models';
import {insightOf,referenceLine} from './insight';
import {TOPICS} from './topics';

const REPO='https://github.com/flaviussefciuc/testeRezidentiat';
const KINDS=[
 {id:'cheie',label:'Cheia pare greșită'},
 {id:'ambigua',label:'Formulare ambiguă sau mai multe răspunsuri posibile'},
 {id:'explicatie',label:'Explicația nu corespunde manualului'},
 {id:'redactare',label:'Greșeală de redactare sau diacritice'},
 {id:'tematica',label:'În afara tematicii / paginilor indicate'},
] as const;
const REPORTED='rezi:reported';

// Turns a doubt about a question into a precise, reproducible report for the editors.
@Component({selector:'app-report',standalone:true,imports:[FormsModule],template:`
@if(!open()){<button type="button" class="report-link" (click)="open.set(true)">{{reported()?'Ai raportat această grilă · trimite alt raport':'⚑ Raportează o problemă cu această grilă'}}</button>}
@else{
<div class="report-box" role="group" aria-label="Raportează o problemă">
 <strong>Ce nu este în regulă?</strong>
 @for(k of kinds;track k.id){<label class="check-line"><input type="radio" name="kind" [value]="k.id" [ngModel]="kind()" (ngModelChange)="kind.set($event)">{{k.label}}</label>}
 <label class="note-box"><span class="sr-only">Detalii</span><textarea rows="3" [ngModel]="comment()" (ngModelChange)="comment.set($event)" placeholder="Ce ai verificat? De ex. „Kumar p. 1063 spune că…”" (keydown)="$event.stopPropagation()"></textarea></label>
 <div class="report-actions"><a class="button primary small-button" [href]="issueUrl()" target="_blank" rel="noopener noreferrer" (click)="markReported()">Deschide raportul pe GitHub ↗</a><button type="button" class="button secondary small-button" (click)="copy()">{{copied()?'Copiat':'Copiază raportul'}}</button><button type="button" class="text-link" (click)="open.set(false)">Renunță</button></div>
 <small class="muted">Raportul include grila, cheia, răspunsul tău și pagina din manual. Pe GitHub este public; nu adăuga date personale.</small>
</div>}`})
export class ReportComponent {
 q=input.required<Question>();selected=input<number[]>([]);
 kinds=KINDS;open=signal(false);kind=signal<string>('cheie');comment=signal('');copied=signal(false);
 reported=signal(false);
 private body=computed(()=>{
  const q=this.q(),info=insightOf(q),label=KINDS.find(k=>k.id===this.kind())?.label??'';
  const opts=q.options.map((o,i)=>`- ${'ABCDE'[i]}. ${o}${q.correct.includes(i)?' **(în cheie)**':''}${this.selected().includes(i)?' ← răspunsul meu':''}`).join('\n');
  return [`**Problemă:** ${label}`,'',`**Grilă:** \`${q.id}\` · ${TOPICS.find(t=>t.id===q.topicId)?.name??q.topicId} · ${q.type}`,`**Referință:** ${referenceLine(info)}${info.reference?` · ${info.reference.section}`:''}`,'',`**Enunț:** ${q.stem}`,'',opts,'',`**Detalii:** ${this.comment().trim()||'—'}`,'',`Link: ${location.origin}/grila/${q.id}`].join('\n');
 });
 issueUrl=computed(()=>`${REPO}/issues/new?${new URLSearchParams({title:`[Grilă] ${this.q().id}: ${KINDS.find(k=>k.id===this.kind())?.label??''}`,body:this.body(),labels:'raport-grila'}).toString()}`);
 constructor(){queueMicrotask(()=>{try{this.reported.set((JSON.parse(localStorage.getItem(REPORTED)??'[]') as string[]).includes(this.q().id));}catch{/* storage unavailable */}});}
 markReported(){try{const list=new Set(JSON.parse(localStorage.getItem(REPORTED)??'[]') as string[]);list.add(this.q().id);localStorage.setItem(REPORTED,JSON.stringify([...list]));}catch{/* storage unavailable */}this.reported.set(true);setTimeout(()=>this.open.set(false),300);}
 async copy(){try{await navigator.clipboard.writeText(this.body());this.copied.set(true);setTimeout(()=>this.copied.set(false),2000);}catch{/* clipboard blocked */}}
}
