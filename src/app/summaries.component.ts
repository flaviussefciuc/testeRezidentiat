import {Component,computed,effect,inject,input,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {TOPICS} from './topics';
import {EXAM_WEIGHTS} from './exam-weights';
import {Store} from './store';
import {IconComponent} from './icon.component';
import {keyPoints,namedSection,renderMarkdown,splitSections,tables,type MdSection} from './markdown';

// Chapter summaries written from the original textbook pages (public/rezumate/<topic>.md).
// /rezumate lists them by book; /rezumate/:topic shows one chapter by theme; /rezumate/recapitulare/:kind
// gathers one kind of content across all chapters (key points, tables, numbers, traps).
const FILES:Record<string,string[]>={cardiologie:['cardiologie-a','cardiologie-b']};
const filesOf=(topic:string)=>FILES[topic]??[topic];
const cache=new Map<string,Promise<string>>();
function load(file:string){let p=cache.get(file);if(!p){p=fetch(`rezumate/${file}.md`).then(r=>r.ok?r.text():'').catch(()=>'');cache.set(file,p);}return p;}
const loadTopic=(topic:string)=>Promise.all(filesOf(topic).map(load)).then(parts=>parts.filter(Boolean).join('\n\n'));
const fold=(s:string)=>s.toLocaleLowerCase('ro').normalize('NFD').replace(/\p{Diacritic}/gu,'');
const BOOKS=['Kumar & Clark','Lawrence','Sinopsis'] as const;
export const RECAPS:Record<string,{title:string;lead:string;pick:(md:string)=>string}>={
 esential:{title:'Esențialul fiecărui capitol',lead:'Ideile cele mai probabile la examen, capitol după capitol — o recapitulare de o oră.',pick:md=>keyPoints(md)},
 tabele:{title:'Toate tabelele, scorurile și comparațiile',lead:'Clasificări, criterii, scoruri și diferențele dintre entitățile ușor de confundat.',pick:md=>tables(md).join('\n\n')},
 cifre:{title:'Cifre de reținut',lead:'Praguri, procente, doze și intervale — exact ce schimbă distractorii.',pick:md=>namedSection(md,/^Cifre de reținut/)},
 capcane:{title:'Capcane frecvente',lead:'Confuziile pe care le construiesc variantele greșite.',pick:md=>namedSection(md,/^Capcane/)},
};
const readKey=(owner:string)=>`rezi:summary-read:${owner}`;

@Component({standalone:true,imports:[FormsModule,RouterLink,IconComponent],template:`
@if(kind();as k){
 <div class="page-heading"><div><a routerLink="/rezumate" class="text-link">← Toate rezumatele</a><div class="eyebrow">RECAPITULARE</div><h1>{{recap()?.title}}</h1><p>{{recap()?.lead}}</p></div><button class="button secondary" (click)="print()"><app-icon name="printer"/> Tipărește</button></div>
 <div class="recap-kinds">@for(r of recapKinds;track r.id){<a [routerLink]="['/rezumate/recapitulare',r.id]" [class.active]="r.id===k">{{r.title}}</a>}</div>
 @if(!recapParts().length){<div class="empty-state" role="status">{{loading()?'Se încarcă rezumatele…':'Nimic de afișat încă.'}}</div>}
 @for(p of recapParts();track p.id){<section class="panel summary-section"><header><small>{{p.book}} · cap. {{p.chapter}}</small><h2><a [routerLink]="['/rezumate',p.id]">{{p.name}}</a></h2></header><div class="md" [innerHTML]="p.html"></div></section>}
}@else if(topicId()){
 @if(topic();as t){
 <div class="page-heading"><div><a routerLink="/rezumate" class="text-link">← Toate rezumatele</a><div class="eyebrow">{{t.book}} · CAPITOLUL {{t.chapter}} · P. {{t.pages}}</div><h1>{{t.name}}</h1><p>Rezumat scris din textul manualului. ★ = pagină din care s-au dat întrebări în 2023–2025@if(examItems();as n){ · circa {{n}} întrebări pe an din acest capitol}.</p></div>
  <div class="summary-actions"><button class="button secondary" (click)="print()"><app-icon name="printer"/> Tipărește</button><button class="read-toggle" [class.on]="isRead(t.id)" (click)="toggleRead(t.id)">{{isRead(t.id)?'✓ Citit':'Marchează citit'}}</button></div></div>
 @if(loading()){<div class="empty-state" role="status">Se încarcă rezumatul…</div>}
 @else if(!doc().sections.length&&!doc().preamble){<div class="empty-state"><h3>Rezumatul acestui capitol este în pregătire.</h3><a routerLink="/rezumate" class="button secondary">Alte capitole</a></div>}
 @else{
  <div class="sheet-tools"><label class="search-input"><app-icon name="search"/><input placeholder="Caută în rezumat (ex. Wells, digoxină, criterii)…" [ngModel]="query()" (ngModelChange)="query.set($event)" aria-label="Caută în rezumat"></label><label class="check-line"><input type="checkbox" [ngModel]="starsOnly()" (ngModelChange)="starsOnly.set($event)"> Doar temele ★ cerute la examen</label></div>
  @if(!query()&&!starsOnly()){<div class="md summary-preamble panel" [innerHTML]="preambleHtml()"></div>}
  <nav class="summary-toc" aria-label="Cuprinsul capitolului">@for(s of visible();track s.slug){<a [href]="'#'+s.slug" (click)="jump($event,s.slug)">{{s.title}}</a>}</nav>
  @for(s of visible();track s.slug){<section class="panel summary-section" [id]="s.slug"><div class="md" [innerHTML]="s.html"></div></section>}
  @empty{<div class="empty-state"><h3>Nicio temă nu corespunde.</h3></div>}
 }
 }@else{<div class="empty-state"><h2>Capitolul nu există.</h2><a routerLink="/rezumate" class="button secondary">Toate rezumatele</a></div>}
}@else{
 <div class="page-heading"><div><div class="eyebrow">REZUMATE</div><h1>Toată bibliografia, pe capitole și teme.</h1><p>Rezumate scrise din textul manualelor cerute (Kumar & Clark, ed. 10; Lawrence, ed. 6; Sinopsis de medicină): esențialul, temele în ordinea cărții, tabele, comparații, cifre și capcane. ★ marchează paginile din care s-au dat întrebări în 2023–2025.</p></div></div>
 <div class="recap-cards">@for(r of recapKinds;track r.id){<a class="panel recap-card" [routerLink]="['/rezumate/recapitulare',r.id]"><strong>{{r.title}}</strong><small>{{r.lead}}</small></a>}</div>
 <div class="summary-order"><span>Ordine:</span><button [class.on]="order()==='book'" (click)="order.set('book')">pe cărți</button><button [class.on]="order()==='exam'" (click)="order.set('exam')">după ponderea la examen</button></div>
 @for(g of groups();track g.title){
  <h2 class="summary-book">{{g.title}}</h2>
  <div class="sheet-grid">@for(t of g.items;track t.id){<a class="panel sheet-card" [class.read]="isRead(t.id)" [routerLink]="['/rezumate',t.id]"><small>{{t.book}} · cap. {{t.chapter}} · p. {{t.pages}}</small><h3>{{t.name}}</h3><div class="sheet-meta"><span>~{{t.exam}} întrebări/an</span><span>★ {{t.asked}} pagini cerute</span>@if(isRead(t.id)){<span>✓ citit</span>}</div></a>}</div>
 }
}`})
export class SummariesComponent {
 store=inject(Store);
 topicId=input<string|undefined>(undefined,{alias:'topic'});
 kind=input<string|undefined>(undefined);
 query=signal('');starsOnly=signal(false);loading=signal(false);order=signal<'book'|'exam'>('book');
 text=signal('');
 recapKinds=Object.entries(RECAPS).map(([id,r])=>({id,...r}));
 recap=computed(():(typeof RECAPS)[string]|undefined=>RECAPS[this.kind()??'']);
 recapTexts=signal<Record<string,string>>({});
 read=signal<Record<string,number>>(this.loadRead());
 private loader=effect(()=>{
  const t=this.topicId(),k=this.kind();
  if(k){this.loading.set(true);void Promise.all(TOPICS.map(x=>loadTopic(x.id).then(md=>[x.id,md] as const))).then(all=>{this.recapTexts.set(Object.fromEntries(all));this.loading.set(false);});}
  else if(t){this.loading.set(true);this.text.set('');this.query.set('');void loadTopic(t).then(md=>{this.text.set(md);this.loading.set(false);});}
 });
 topic=computed(()=>TOPICS.find(t=>t.id===this.topicId()));
 examItems=computed(()=>{const w=EXAM_WEIGHTS.find(x=>x.topicId===this.topicId());return w?Math.round(w.mean):0;});
 doc=computed(()=>{const md=this.text();if(!md)return {preamble:'',sections:[] as MdSection[]};
  // Both halves of a split chapter keep their own key points; later titles become plain sections.
  const {preamble,sections}=splitSections(md.replace(/\n# (.*)\n/g,'\n## $1\n'));return {preamble,sections};});
 // The title and the book/chapter line repeat the page heading.
 preambleHtml=computed(()=>renderMarkdown(this.doc().preamble.replace(/^# .*\n/,'').replace(/^\s*[^\n>#]*·[^\n]*\n/,'')));
 visible=computed(()=>{
  const q=fold(this.query().trim()),stars=this.starsOnly();
  return this.doc().sections.filter(s=>(!stars||s.stars>0)&&(!q||fold(s.md).includes(q))).map(s=>({...s,html:renderMarkdown(s.md)}));
 });
 recapParts=computed(()=>{
  const r=this.recap(),texts=this.recapTexts();if(!r)return [];
  return TOPICS.map(t=>{const md=texts[t.id]??'';const part=md?r.pick(md):'';return {...t,html:part.trim()?renderMarkdown(part):''};}).filter(p=>p.html);
 });
 groups=computed(()=>{
  const items=TOPICS.map(t=>{const w=EXAM_WEIGHTS.find(x=>x.topicId===t.id);return {...t,exam:w?Math.round(w.mean*10)/10:0,asked:(w?.pages??[]).filter(([,c])=>c>0).length};});
  if(this.order()==='exam')return [{title:'După numărul mediu de întrebări pe an (2023–2025)',items:[...items].sort((a,b)=>b.exam-a.exam)}];
  return BOOKS.map(b=>({title:b==='Sinopsis'?'Sinopsis de medicină':b,items:items.filter(t=>t.book===b).sort((x,y)=>x.chapter-y.chapter)}));
 });
 jump(e:Event,id:string){e.preventDefault();document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});}
 print(){setTimeout(()=>window.print(),50);}
 private loadRead():Record<string,number>{try{return JSON.parse(localStorage.getItem(readKey(this.store.owner()))??'{}')??{};}catch{return {};}}
 isRead(id:string){return !!this.read()[id];}
 toggleRead(id:string){const next={...this.read()};if(next[id])delete next[id];else next[id]=Date.now();this.read.set(next);try{localStorage.setItem(readKey(this.store.owner()),JSON.stringify(next));}catch{/* storage unavailable */}}
}
