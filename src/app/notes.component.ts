import {Component,computed,inject,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {Store} from './store';
import {Bank,LITE_BY_ID} from './bank';
import {Notes} from './notes';
import {Sessions} from './session';
import {TOPICS} from './topics';
import {IconComponent} from './icon.component';
import {NoteComponent} from './note.component';
import {insightOf,referenceLine} from './insight';
import {fold} from './search.component';
import {ankiQuestions,download} from './anki';

// All notes and saved questions, by chapter.
@Component({standalone:true,imports:[FormsModule,RouterLink,IconComponent,NoteComponent],template:`
<div class="page-heading"><div><div class="eyebrow">COLECȚIA TA</div><h1>Notițele mele.</h1><p>Grilele salvate cu ☆ și tot ce ți-ai notat, grupate pe capitole. Rămân pe acest dispozitiv.</p></div>
 <div class="sheet-actions"><button class="button secondary" (click)="exportMd()" [disabled]="!items().length"><app-icon name="download"/>Descarcă (.md)</button><button class="button secondary" (click)="anki()" [disabled]="!items().length||!ready()" title="Fișier pentru Anki: File → Import"><app-icon name="download"/>Anki</button><button class="button primary" (click)="practice()" [disabled]="!items().length||!!store.draft()">Exersează colecția<app-icon name="arrow"/></button></div></div>
<div class="sheet-tools"><label class="search-input"><app-icon name="search"/><input placeholder="Caută în notițe și grile…" [ngModel]="query()" (ngModelChange)="query.set($event)" aria-label="Caută în notițe"></label>
 <div class="segmented" role="group" aria-label="Filtru"><button [class.on]="filter()==='all'" (click)="filter.set('all')">Toate <span>{{items().length}}</span></button><button [class.on]="filter()==='notes'" (click)="filter.set('notes')">Cu notiță <span>{{noteCount()}}</span></button><button [class.on]="filter()==='saved'" (click)="filter.set('saved')">Salvate <span>{{savedCount()}}</span></button></div></div>
@if(!items().length){<div class="empty-state"><app-icon name="bookmark"/><h2>Colecția ta este goală.</h2><p>În timpul unui test, apasă ☆ Salvează sau ✎ Adaugă o notiță sub orice grilă.</p><a routerLink="/teste" class="button primary">Începe un test →</a></div>}
@else{@if(!ready()){<div class="empty-state" role="status">{{bank.error()||'Se încarcă grilele…'}}</div>}
@for(g of groups();track g.topic){
 <h3 class="notes-chapter">{{g.name}} <small>{{g.items.length}}</small></h3>
 <div class="review-list">@for(i of g.items;track i.id){
  <article class="panel note-card"><small class="search-where">{{i.ref}}</small><p class="search-stem">{{i.stem}}</p>
   @if(i.truths.length){<ul class="sheet-truths">@for(t of i.truths;track t){<li>{{t}}</li>}</ul>}
   <app-note [qid]="i.id"/></article>}
 </div>}
 @empty{@if(ready()){<div class="empty-state"><h3>Nimic nu corespunde filtrului.</h3></div>}}}`})
export class NotesComponent {
 store=inject(Store);bank=inject(Bank);notes=inject(Notes);sessions=inject(Sessions);
 query=signal('');filter=signal<'all'|'notes'|'saved'>('all');ready=signal(false);
 constructor(){void this.bank.ensure(this.ids()).then(()=>this.ready.set(true)).catch(()=>{});}
 ids(){return [...new Set([...Object.keys(this.notes.notes()),...Object.keys(this.notes.saved())])].filter(id=>LITE_BY_ID.has(id));}
 items=computed(()=>this.ids());
 noteCount=computed(()=>Object.keys(this.notes.notes()).length);
 savedCount=computed(()=>Object.keys(this.notes.saved()).length);
 groups=computed(()=>{
  if(!this.ready())return [];
  const q=fold(this.query().trim()),f=this.filter(),notes=this.notes.notes(),saved=this.notes.saved();
  const rows=this.items().filter(id=>(f==='all'||(f==='notes'?!!notes[id]:!!saved[id]))).map(id=>{const qn=this.bank.byId().get(id);if(!qn)return null;const info=insightOf(qn);return {id,topic:qn.topicId,stem:qn.stem,truths:qn.options.filter((_,i)=>qn.correct.includes(i)),ref:referenceLine(info)||TOPICS.find(t=>t.id===qn.topicId)?.name||'',at:Math.max(notes[id]?.at??0,saved[id]??0),text:fold([qn.stem,...qn.options,notes[id]?.text??''].join(' '))};}).filter((r):r is NonNullable<typeof r>=>!!r&&(!q||r.text.includes(q)));
  return TOPICS.map(t=>({topic:t.id,name:t.name,items:rows.filter(r=>r.topic===t.id).sort((a,b)=>b.at-a.at)})).filter(g=>g.items.length);
 });
 practice(){this.sessions.startPractice(this.items().slice(0,60));}
 // Notes go on the back of the card, after the explanation.
 anki(){const qs=this.items().map(id=>this.bank.byId().get(id)).filter((q):q is NonNullable<typeof q>=>!!q);download(ankiQuestions(qs,'Rezi::Colecția mea',id=>this.notes.note(id)),'rezi-colectie-anki.txt');}
 exportMd(){
  const lines=['# Notițele mele · Rezi',''];
  for(const g of this.groups()){lines.push(`## ${g.name}`,'');for(const i of g.items){lines.push(`### ${i.stem}`);for(const t of i.truths)lines.push(`- ✓ ${t}`);const n=this.notes.note(i.id);if(n)lines.push('',`> ${n.replace(/\n/g,'\n> ')}`);lines.push(`_${i.ref}_`,'');}}
  const url=URL.createObjectURL(new Blob([lines.join('\n')],{type:'text/markdown'}));const a=document.createElement('a');a.href=url;a.download='rezi-notite.md';a.click();setTimeout(()=>URL.revokeObjectURL(url),500);
 }
}
