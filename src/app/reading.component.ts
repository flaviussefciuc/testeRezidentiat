import {Component,computed,inject,signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Store} from './store';
import {Bank,LITE_ACTIVE} from './bank';
import {Sessions} from './session';
import {TOPICS} from './topics';
import {IconComponent} from './icon.component';
import {loadReread,readingList,saveReread,type ReadingPage} from './reading';
import {ankiQuestions,download} from './anki';

const ACTIVE=new Set(LITE_ACTIVE.map(q=>q.id));
type View='todo'|'done';

// A personal reading list: the textbook pages behind the latest mistakes.
@Component({standalone:true,imports:[RouterLink,IconComponent],template:`
<div class="page-heading"><div><div class="eyebrow">ÎNVAȚĂ DIN GREȘELI, DIRECT DIN MANUAL</div><h1>Pagini de recitit.</h1><p>Fiecare grilă greșită la ultima încercare, mutată pe pagina din carte de unde vine. Recitești pagina, apoi verifici cu grilele ei.</p></div>@if(pages().length){<div class="sheet-actions"><button class="button secondary" (click)="anki()" title="Fișier pentru Anki: File → Import"><app-icon name="download"/>Anki ({{ankiCount()}} carduri)</button>@if(todo().length){<button class="button primary" (click)="practiceAll()" [disabled]="!!store.draft()">Exersează {{todoQuestions()}} grile<app-icon name="arrow"/></button>}</div>}</div>
@if(!ready()){<div class="empty-state" role="status">{{bank.error()||'Se încarcă referințele…'}}</div>}
@else if(!pages().length){<div class="empty-state"><app-icon name="book"/><h2>Nicio pagină de recitit.</h2><p>Paginile apar aici după ce greșești o grilă. Începe un test.</p><a routerLink="/teste" class="button primary">Alege un test →</a></div>}
@else{
<div class="stats-grid three"><article class="stat"><span class="stat-icon peach"><app-icon name="book"/></span><div><span>Pagini de recitit</span><strong>{{todo().length}}</strong><small>în {{chapters()}} capitole</small></div></article><article class="stat"><span class="stat-icon sand"><app-icon name="target"/></span><div><span>Greșeli „sigure”</span><strong>{{sureTotal()}}</strong><small>paginile lor apar primele</small></div></article><article class="stat"><span class="stat-icon mint"><app-icon name="clock"/></span><div><span>Timp estimat</span><strong>{{minutes()}} min</strong><small>~6 minute pe pagină</small></div></article></div>
<div class="segmented reading-tabs" role="group" aria-label="Filtru"><button [class.on]="view()==='todo'" (click)="view.set('todo')">De recitit <span>{{todo().length}}</span></button><button [class.on]="view()==='done'" (click)="view.set('done')">Recitite <span>{{done().length}}</span></button></div>
<div class="reading-list">
 @for(p of shown();track p.key){
 <article class="panel reading-page" [class.sure]="p.sure">
  <div class="reading-ref"><span class="reading-page-no">p. {{p.page}}</span><span class="reading-book">{{p.book}} · cap. {{p.chapter}}</span></div>
  <div class="reading-body">
   <h3>{{p.heading}}</h3><small>{{topicName(p.topicId)}} · {{p.misses.length}} {{p.misses.length===1?'grilă greșită':'grile greșite'}}@if(p.sure){ · {{p.sure}} „sigur”}</small>
   <ul>@for(m of p.misses;track m.id){<li [class.sure]="m.sure">{{m.objective||m.stem}}</li>}</ul>
  </div>
  <div class="reading-actions"><button class="read-toggle" [class.on]="isDone(p)" (click)="toggle(p)">{{isDone(p)?'✓ Recitită':'Am recitit-o'}}</button><button class="text-link" (click)="practice(p)" [disabled]="!!store.draft()">Verifică-te ({{p.misses.length}}) →</button></div>
 </article>}
 @empty{<div class="empty-state"><h3>{{view()==='todo'?'Ai recitit toate paginile. Bravo!':'Încă nu ai marcat nicio pagină ca recitită.'}}</h3></div>}
</div>}`})
export class ReadingComponent {
 store=inject(Store);bank=inject(Bank);sessions=inject(Sessions);
 ready=signal(false);view=signal<View>('todo');
 marks=signal<Record<string,number>>(loadReread(this.store.owner()));
 constructor(){void this.bank.active().then(()=>this.ready.set(true)).catch(()=>{});}
 pages=computed(()=>this.ready()?readingList(this.store.attempts(),this.bank.byId(),ACTIVE):[]);
 // A page counts as reread until a newer mistake points to it again.
 isDone(p:ReadingPage){const m=this.marks()[p.key];return !!m&&m>=p.last;}
 todo=computed(()=>this.pages().filter(p=>!this.isDone(p)));
 done=computed(()=>this.pages().filter(p=>this.isDone(p)));
 shown=computed(()=>this.view()==='todo'?this.todo():this.done());
 chapters=computed(()=>new Set(this.todo().map(p=>p.book+p.chapter)).size);
 sureTotal=computed(()=>this.todo().reduce((n,p)=>n+p.sure,0));
 minutes=computed(()=>this.todo().length*6);
 todoQuestions=computed(()=>Math.min(40,this.todo().reduce((n,p)=>n+p.misses.length,0)));
 topicName(id:string){return TOPICS.find(t=>t.id===id)?.name??'';}
 toggle(p:ReadingPage){const next={...this.marks()};if(this.isDone(p))delete next[p.key];else next[p.key]=Date.now();this.marks.set(next);saveReread(this.store.owner(),next);}
 practice(p:ReadingPage){this.sessions.startPractice(p.misses.map(m=>m.id));}
 ankiCount=computed(()=>this.pages().reduce((n,p)=>n+p.misses.length,0));
 anki(){const qs=this.pages().flatMap(p=>p.misses.map(m=>this.bank.byId().get(m.id)!)).filter(Boolean);download(ankiQuestions(qs,'Rezi::Greșeli'),'rezi-greseli-anki.txt');}
 practiceAll(){this.sessions.startPractice(this.todo().flatMap(p=>p.misses.map(m=>m.id)).slice(0,40));}
}
