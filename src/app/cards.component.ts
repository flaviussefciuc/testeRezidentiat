import {Component,computed,HostListener,inject,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Store} from './store';
import {Bank,LITE_ACTIVE} from './bank';
import {Sessions} from './session';
import {Notes} from './notes';
import {TOPICS} from './topics';
import {IconComponent} from './icon.component';
import {StemComponent} from './stem.component';
import {insightOf,referenceLine} from './insight';
import {shuffled} from './scoring';
import type {Question} from './models';

const ACTIVE=new Set(LITE_ACTIVE.map(q=>q.id));
type Source='wrong'|'saved'|'due'|'chapter';
type Phase='setup'|'run'|'done';

// Flip cards over whole questions: read, recall, flip, rate yourself. Cards marked
// "nu știam" come back later in the same deck (up to twice).
@Component({standalone:true,imports:[FormsModule,IconComponent,StemComponent],template:`
@switch(phase()){
@case('setup'){
<div class="page-heading"><div><div class="eyebrow">RECAPITULARE RAPIDĂ</div><h1>Carduri rapide.</h1><p>Citești grila, îți amintești răspunsul, întorci cardul. Fără să bifezi variante: ideal pentru ultimele zile, când vrei să treci repede prin multe grile.</p></div></div>
<section class="panel cards-setup">
 <label class="field-label">Ce carduri<select [ngModel]="source()" (ngModelChange)="source.set($event)"><option value="wrong">Grilele greșite la ultima încercare ({{counts().wrong}})</option><option value="saved">Colecția mea salvată ({{counts().saved}})</option><option value="due">Scadente la recapitulare ({{counts().due}})</option><option value="chapter">Un capitol</option></select></label>
 @if(source()==='chapter'){<label class="field-label">Capitol<select [ngModel]="topic()" (ngModelChange)="topic.set($event)">@for(t of topics;track t.id){<option [value]="t.id">{{t.name}}</option>}</select></label>}
 <label class="field-label">Câte carduri<select [ngModel]="size()" (ngModelChange)="size.set(+$event)"><option [ngValue]="20">20</option><option [ngValue]="40">40</option><option [ngValue]="80">80</option></select></label>
 <button class="button primary full" (click)="start()" [disabled]="!ready()||!pool().length">{{ready()?(pool().length?'Începe ('+min(size(),pool().length)+' carduri)':'Niciun card în această sursă'):'Se încarcă…'}}<app-icon name="arrow"/></button>
 <p class="small muted"><kbd>Spațiu</kbd> întoarce cardul · <kbd>→</kbd> știam · <kbd>←</kbd> nu știam</p>
</section>}
@case('run'){@if(card();as q){
<div class="drill-top"><button class="text-link" (click)="finish()">← Termină acum</button><div class="drill-progress"><div class="progress-track"><span [style.width.%]="doneCount()/total()*100"></span></div><span>{{doneCount()}} / {{total()}}</span></div><span class="drill-streak">✓ {{known()}} · ↻ {{unknownIds().size}}</span></div>
<section class="panel flipcard" [class.flipped]="flipped()" (click)="!flipped()&&flip()">
 <span class="drill-topic">{{topicName(q.topicId)}}@if(repeats()[q.id]){ · a {{repeats()[q.id]+1}}-a oară}</span>
 <p class="flip-stem"><app-stem [text]="q.stem"/></p>
 <ol class="flip-options" type="A">@for(o of q.options;track $index;let i=$index){<li [class.key]="flipped()&&q.correct.includes(i)" [class.dim]="flipped()&&!q.correct.includes(i)">{{o}}@if(flipped()&&q.correct.includes(i)&&why(q)[i]){<small>{{why(q)[i]}}</small>}</li>}</ol>
 @if(!flipped()){<button class="button primary flip-btn" (click)="$event.stopPropagation();flip()">Întoarce cardul <kbd>Spațiu</kbd></button>}
 @else{<p class="flip-ref">{{ref(q)}}</p><div class="drill-choices"><button class="drill-btn false" (click)="rate(false)"><kbd>←</kbd> Nu știam</button><button class="drill-btn true" (click)="rate(true)"><kbd>→</kbd> Știam</button></div>}
</section>}}
@case('done'){
<div class="page-heading"><div><div class="eyebrow">PACHET TERMINAT</div><h1>{{known()}} știute din prima, {{unknownIds().size}} de lucrat.</h1><p>Cardurile „nu știam” sunt cele care merită o grilă adevărată acum.</p></div><div class="sheet-actions"><button class="button secondary" (click)="phase.set('setup')">Alt pachet</button>@if(unknownIds().size){<button class="button primary" (click)="practiceUnknown()" [disabled]="!!store.draft()">Rezolvă-le ca grile ({{unknownIds().size}})<app-icon name="arrow"/></button>}</div></div>}
}`})
export class CardsComponent {
 store=inject(Store);bank=inject(Bank);sessions=inject(Sessions);notes=inject(Notes);
 topics=TOPICS;min=Math.min;
 phase=signal<Phase>('setup');source=signal<Source>('wrong');topic=signal(TOPICS[0].id);size=signal(20);ready=signal(false);
 deck=signal<string[]>([]);pos=signal(0);flipped=signal(false);known=signal(0);unknownIds=signal(new Set<string>());repeats=signal<Record<string,number>>({});total=signal(0);doneCount=signal(0);
 constructor(){void this.bank.active().then(()=>this.ready.set(true)).catch(()=>{});}
 counts=computed(()=>({wrong:[...this.sessions.wrong()].filter(id=>ACTIVE.has(id)).length,saved:Object.keys(this.notes.saved()).filter(id=>ACTIVE.has(id)).length,due:this.sessions.due().length}));
 pool=computed(()=>{const s=this.source();if(s==='wrong')return [...this.sessions.wrong()].filter(id=>ACTIVE.has(id));if(s==='saved')return Object.keys(this.notes.saved()).filter(id=>ACTIVE.has(id));if(s==='due')return this.sessions.due();return LITE_ACTIVE.filter(q=>q.topicId===this.topic()).map(q=>q.id);});
 card=computed(()=>this.bank.byId().get(this.deck()[this.pos()]));
 start(){const ids=shuffled(this.pool()).slice(0,this.size());this.deck.set(ids);this.pos.set(0);this.flipped.set(false);this.known.set(0);this.unknownIds.set(new Set());this.repeats.set({});this.total.set(ids.length);this.doneCount.set(0);this.phase.set('run');}
 flip(){this.flipped.set(true);}
 rate(ok:boolean){
  const id=this.deck()[this.pos()];if(!id||!this.flipped())return;
  const rep=this.repeats()[id]??0;
  if(ok){if(!rep&&!this.unknownIds().has(id))this.known.update(n=>n+1);this.doneCount.update(n=>n+1);}
  else{this.unknownIds.update(s=>new Set(s).add(id));if(rep<2){this.deck.update(d=>[...d,id]);this.repeats.update(r=>({...r,[id]:rep+1}));}else this.doneCount.update(n=>n+1);}
  if(this.pos()<this.deck().length-1){this.pos.update(p=>p+1);this.flipped.set(false);}else this.finish();
 }
 finish(){this.phase.set('done');}
 practiceUnknown(){this.sessions.startPractice([...this.unknownIds()]);}
 why(q:Question){return insightOf(q).rationales??[];}
 ref(q:Question){return referenceLine(insightOf(q));}
 topicName(id:string){return TOPICS.find(t=>t.id===id)?.name??'';}
 @HostListener('document:keydown',['$event']) onKey(e:KeyboardEvent){
  if(this.phase()!=='run'||e.ctrlKey||e.metaKey||e.altKey)return;const tag=(e.target as HTMLElement|null)?.tagName;if(tag==='INPUT'||tag==='SELECT'||tag==='TEXTAREA'||tag==='BUTTON'&&e.key===' ')return;
  if(!this.flipped()&&(e.key===' '||e.key==='Enter')){e.preventDefault();this.flip();}
  else if(this.flipped()&&e.key==='ArrowRight'){e.preventDefault();this.rate(true);}
  else if(this.flipped()&&e.key==='ArrowLeft'){e.preventDefault();this.rate(false);}
 }
}
