import {Component,computed,effect,HostListener,inject,OnDestroy,signal} from '@angular/core';
import {PACE_SECONDS} from './pace';
import {Router,RouterLink} from '@angular/router';
import {Store} from './store';
import {Prefs} from './prefs';
import {Bank} from './bank';
import {TOPICS} from './topics';
import {score,maximum} from './scoring';
import type {Confidence,Draft,Question} from './models';
import {CONFIDENCE_KEY,CONFIDENCE_LABEL,CONFIDENCE_LEVELS} from './calibration';
import {IconComponent} from './icon.component';
import {InsightComponent} from './insight.component';
import {insightOf,optionPoint,verdictOf,VERDICT_LABEL} from './insight';
@Component({standalone:true,imports:[RouterLink,IconComponent,InsightComponent],template:`
@if(!store.ready()){<div class="empty-state">Se încarcă sesiunea…</div>}
@else if(draft();as d){
 @if(question();as q){
 <div class="quiz-top"><a routerLink="/teste" class="text-link">← Înapoi la antrenament</a><span class="badge" [class.peach]="d.mode==='exam'">{{d.mode==='exam'?'Simulare de examen':'Antrenament'}}</span>@if(pace();as p){<span class="pace-badge" [class.behind]="p.ahead<0" [title]="'Ritmul examenului: '+paceSeconds+' s pe grilă'">{{p.ahead<0?'În urmă':'În ritm'}} · {{p.ahead<0?'−':'+'}}{{p.minutes}} min</span>}<span class="timer" [class.error]="remaining()<300&&d.mode==='exam'"><app-icon name="clock"/>{{time()}}</span><button class="icon-button focus-toggle" (click)="toggleFocus()" [attr.aria-pressed]="prefs.focus()" [title]="prefs.focus()?'Ieși din modul concentrare (Z)':'Mod concentrare: doar grila (Z)'"><app-icon [name]="prefs.focus()?'expand':'focus'"/></button></div>
 <div class="quiz-layout">
  <section class="panel question-panel" (touchstart)="touchStart($event)" (touchend)="touchEnd($event)">
   <div class="section-heading"><span class="eyebrow">ÎNTREBAREA {{d.index+1}} DIN {{d.questionIds.length}}</span><button class="icon-button" [class.flagged]="d.flagged.includes(q.id)" (click)="flag()" [attr.aria-label]="d.flagged.includes(q.id)?'Elimină marcajul':'Marchează pentru revizuire'" title="Marchează pentru revizuire (F)"><app-icon name="flag"/></button></div>
   <div class="question-meta"><span class="badge">{{topic(q.topicId)}}</span><span>{{q.type==='CS'?'Complement simplu · un răspuns':'Complement multiplu · 2–4 răspunsuri'}}</span></div>
   <h1 class="question-stem">{{q.stem}}</h1>
   <fieldset class="answers"><legend class="sr-only">Alege răspunsurile</legend>
    @for(i of order();track i;let pos=$index){
    <label class="answer" [class.chosen]="selected().includes(i)" [class.struck]="!checked()&&struck().includes(i)" [class.revealed]="checked()" [attr.data-v]="checked()?verdict(q,i):null">
     <input [type]="q.type==='CS'?'radio':'checkbox'" [name]="q.id" [checked]="selected().includes(i)" [disabled]="checked()||busy()" (change)="choose(i)">
     <span class="answer-letter">{{letters[pos]}}</span>
     <span class="answer-body"><span class="answer-text">{{q.options[i]}}</span>
      @if(checked()){<span class="answer-why"><span class="verdict">{{verdictLabel[verdict(q,i)]}}@if(point(q,i)!==null){<b>+{{point(q,i)}}</b>}</span>@if(info()?.rationales;as r){<span class="why-text">{{r[i]}}</span>}</span>}
     </span>
     @if(!checked()){<button type="button" class="strike-btn" (click)="$event.preventDefault();$event.stopPropagation();strike(i)" [attr.aria-label]="(struck().includes(i)?'Readu varianta ':'Taie varianta ')+letters[pos]" [attr.title]="struck().includes(i)?'Readu varianta':'Taie varianta (Shift+'+letters[pos]+')'">{{struck().includes(i)?'↺':'✕'}}</button>}
     @if(checked()&&q.correct.includes(i)){<app-icon name="check"/>}
    </label>}
   </fieldset>
   @if(invalid()){<p class="selection-hint">{{q.type==='CS'?'Selectează un răspuns.':'Selectează între 2 și 4 răspunsuri. Altfel, punctajul este 0.'}}</p>}
   @if(!checked()){<div class="confidence-row" role="group" aria-label="Cât de sigur ești?"><span class="confidence-q">Cât de sigur ești?</span>@for(c of levels;track c){<button type="button" class="conf-chip" [class.on]="conf()===c" [attr.data-c]="c" [attr.aria-pressed]="conf()===c" (click)="setConf(c)">{{confLabel[c]}}<kbd>{{confKey[c]}}</kbd></button>}</div>}
   @if(checked()){<app-insight [q]="q" [selected]="selected()" [confidence]="conf()"/>}
   <div class="quiz-actions"><button class="button secondary" (click)="go(d.index-1)" [disabled]="d.index===0">← Anterioara</button>@if(d.mode==='practice'&&!checked()){<button class="button primary" (click)="check()" [disabled]="invalid()">Verifică răspunsul<app-icon name="check"/></button>}@else if(d.index<d.questionIds.length-1){<button class="button primary" (click)="go(d.index+1)">Următoarea<app-icon name="arrow"/></button>}@else{<button class="button primary" (click)="confirm.set(true)">Finalizează testul<app-icon name="check"/></button>}</div>
   <div class="kbd-hint" aria-hidden="true"><span><kbd>A</kbd>–<kbd>E</kbd> alege</span><span><kbd>Shift</kbd>+<kbd>A</kbd>–<kbd>E</kbd> taie o variantă</span><span><kbd>Enter</kbd> {{d.mode==='practice'&&!checked()?'verifică':'continuă'}}</span><span><kbd>←</kbd> <kbd>→</kbd> navighează</span><span><kbd>S</kbd> <kbd>N</kbd> <kbd>G</kbd> încredere</span><span><kbd>F</kbd> marchează</span><button class="text-link" type="button" (click)="help.set(true)"><kbd>?</kbd> toate scurtăturile</button></div>
  </section>
  <aside class="panel navigator" [class.sheet-open]="navOpen()"><button class="sheet-close icon-button" (click)="navOpen.set(false)" aria-label="Închide harta testului"><app-icon name="close"/></button><h3>Parcursul tău</h3><div class="summary-row"><span>Cu răspuns</span><strong>{{answered()}} / {{d.questionIds.length}}</strong></div><div class="progress-track"><span [style.width.%]="answered()/d.questionIds.length*100"></span></div><div class="question-grid">@for(id of d.questionIds;track id;let i=$index){<button [class.current]="i===d.index" [class.done]="!!d.answers[id]?.length" [class.flagged]="d.flagged.includes(id)" [attr.aria-label]="'Întrebarea '+(i+1)+(d.flagged.includes(id)?', marcată':'')" (click)="go(i);navOpen.set(false)">{{i+1}}</button>}</div><div class="navigator-legend"><span>● Cu răspuns</span><span>⚑ De revizuit</span></div><button class="button secondary full" (click)="confirm.set(true)" [disabled]="busy()">Predă testul</button><p class="small muted">Răspunsurile se salvează pe acest dispozitiv. {{d.mode==='exam'?'Cronometrul continuă și dacă închizi pagina.':'Poți continua testul mai târziu.'}}</p></aside>
 </div>
 <nav class="quiz-dock" aria-label="Navigare în test"><button class="dock-btn" (click)="go(d.index-1)" [disabled]="d.index===0" aria-label="Grila anterioară"><app-icon name="back"/></button><button class="dock-map" (click)="navOpen.set(true)" aria-label="Harta testului"><strong>{{d.index+1}}</strong>/{{d.questionIds.length}}</button>@if(d.mode==='practice'&&!checked()){<button class="dock-primary" (click)="check()" [disabled]="invalid()">Verifică</button>}@else if(d.index<d.questionIds.length-1){<button class="dock-primary" (click)="go(d.index+1)">Următoarea</button>}@else{<button class="dock-primary" (click)="confirm.set(true)">Finalizează</button>}<button class="dock-btn" (click)="go(d.index+1)" [disabled]="d.index>=d.questionIds.length-1" aria-label="Grila următoare"><app-icon name="arrow"/></button></nav>
 @if(navOpen()){<div class="sheet-backdrop" (click)="navOpen.set(false)"></div>}
 @if(confirm()){<div class="modal-backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="finish-title"><span class="stat-icon mint"><app-icon name="check"/></span><h2 id="finish-title">Predai testul?</h2><p>Ai completat {{answered()}} din {{d.questionIds.length}} de grile. Întrebările fără răspuns primesc 0 puncte.</p><p>După predare, răspunsurile nu mai pot fi modificate.</p><div class="modal-actions"><button class="button secondary" (click)="confirm.set(false)" [disabled]="busy()">Continuă testul</button><button class="button primary" (click)="finish()" [disabled]="busy()">{{busy()?'Se salvează…':'Predă și vezi rezultatul'}}</button></div>@if(error()){<p class="error" role="alert">{{error()}}</p>}</section></div>}
 @if(help()){<div class="modal-backdrop" (click)="help.set(false)"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="keys-title" (click)="$event.stopPropagation()"><h2 id="keys-title">Scurtături de tastatură</h2><p>Rezolvă fără mouse, ca la foaia de răspuns: alegi, tai variantele eliminate și treci mai departe.</p><div class="shortcut-list"><span><kbd>A</kbd>–<kbd>E</kbd> sau <kbd>1</kbd>–<kbd>5</kbd></span><span>Alege sau deselectează varianta</span><span><kbd>Shift</kbd> + <kbd>A</kbd>–<kbd>E</kbd></span><span>Taie varianta pe care ai exclus-o (o poți readuce oricând)</span><span><kbd>Enter</kbd></span><span>Verifică răspunsul, apoi treci la următoarea grilă</span><span><kbd>←</kbd> / <kbd>→</kbd></span><span>Grila anterioară / următoare</span><span><kbd>S</kbd> / <kbd>N</kbd> / <kbd>G</kbd></span><span>Sigur / Nesigur / Ghicesc: cât de sigur ești pe răspuns</span><span><kbd>F</kbd></span><span>Marchează grila pentru revizuire</span><span><kbd>Z</kbd></span><span>Mod concentrare: ascunde tot în afară de grilă</span><span><kbd>?</kbd> / <kbd>Esc</kbd></span><span>Deschide / închide acest panou</span></div><div class="modal-actions"><button class="button primary" (click)="help.set(false)">Am înțeles</button></div></section></div>}
 }@else{<div class="empty-state" role="status">{{bank.error()||'Se încarcă grilele…'}}</div>}
}@else{<div class="empty-state"><app-icon name="book"/><h2>Niciun test în desfășurare.</h2><p>Alege un antrenament și fă primul pas.</p><a routerLink="/teste" class="button primary">Alege un test →</a></div>}`})
export class QuizComponent implements OnDestroy {
 store=inject(Store);router=inject(Router);bank=inject(Bank);prefs=inject(Prefs);navOpen=signal(false);draft=this.store.draft;now=signal(Date.now());confirm=signal(false);help=signal(false);busy=signal(false);error=signal('');letters=['A','B','C','D','E'];score=score;maximum=maximum;
 verdictLabel=VERDICT_LABEL;levels=CONFIDENCE_LEVELS;confLabel=CONFIDENCE_LABEL;confKey=CONFIDENCE_KEY;
 question=computed(()=>{const d=this.draft();return d?this.bank.byId().get(d.questionIds[d.index]):undefined;});
 info=computed(()=>this.question()?insightOf(this.question()!):null);
 verdict(q:Question,i:number){return verdictOf(q,this.selected(),i);}
 point(q:Question,i:number){return optionPoint(q,this.selected(),i);}
 private loader=effect(()=>{const d=this.draft();if(d)void this.bank.ensure(d.questionIds).catch(()=>{});});
 selected=computed(()=>this.draft()?.answers[this.question()?.id??'']??[]);
 struck=computed(()=>this.draft()?.struck?.[this.question()?.id??'']??[]);
 conf=computed(()=>this.draft()?.confidence?.[this.question()?.id??'']);
 checked=computed(()=>this.draft()?.mode==='practice'&&!!this.draft()?.checked.includes(this.question()?.id??''));
 invalid=computed(()=>this.question()?.type==='CS'?this.selected().length!==1:this.selected().length<2||this.selected().length>4);
 answered=computed(()=>Object.values(this.draft()?.answers??{}).filter(a=>a.length).length);
 remaining=computed(()=>Math.max(0,Math.ceil(((this.draft()?.deadline??this.now())-this.now())/1000)));
 order=computed(()=>{let seed=0;for(const c of (this.draft()?.id??'')+(this.question()?.id??''))seed=(Math.imul(seed,31)+c.charCodeAt(0))|0;const order=[0,1,2,3,4];for(let i=4;i>0;i--){seed=(Math.imul(seed,1664525)+1013904223)|0;const j=(seed>>>0)%(i+1);[order[i],order[j]]=[order[j],order[i]];}return order;});
 paceSeconds=PACE_SECONDS;
 // Simulations: compare answered questions with the exam pace (72 s per question).
 pace=computed(()=>{const d=this.draft();if(!d||d.mode!=='exam')return null;const elapsed=(this.now()-Date.parse(d.startedAt))/1000;if(elapsed<300)return null;const ahead=this.answered()*PACE_SECONDS-elapsed;return {ahead,minutes:Math.round(Math.abs(ahead)/60)};});
 // Visible time on each question, until it is checked (practice) or left (exam).
 private enteredAt:number|null=Date.now();
 private onVisibility=()=>{if(document.hidden){const p=this.timePatch();if(p)this.update(p);this.enteredAt=null;}else if(!this.checked())this.enteredAt=Date.now();};
 private timePatch():Partial<Draft>|null{const d=this.draft(),q=this.question();if(!d||!q||this.enteredAt===null)return null;const slice=Math.min(10*60000,Date.now()-this.enteredAt);this.enteredAt=Date.now();return {times:{...(d.times??{}),[q.id]:(d.times?.[q.id]??0)+slice}};}
 constructor(){document.addEventListener('visibilitychange',this.onVisibility);}
 private interval=setInterval(()=>{this.now.set(Date.now());const d=this.draft();if(d?.mode==='exam'&&d.deadline&&Date.now()>=d.deadline&&!this.busy())void this.finish();},1000);
 // Focus mode hides the app chrome; it is a page-level class so the sidebar can react.
 private focusClass=effect(()=>document.documentElement.classList.toggle('quiz-focus',this.prefs.focus()));
 toggleFocus(){this.prefs.focus.set(!this.prefs.focus());}
 // Horizontal swipes on the question move between questions (phones).
 private touch:{x:number;y:number}|null=null;
 touchStart(e:TouchEvent){const t=e.touches[0];this.touch=t?{x:t.clientX,y:t.clientY}:null;}
 touchEnd(e:TouchEvent){const s=this.touch,t=e.changedTouches[0];this.touch=null;if(!s||!t)return;const dx=t.clientX-s.x,dy=t.clientY-s.y;if(Math.abs(dx)<70||Math.abs(dy)>Math.abs(dx)*0.6)return;const d=this.draft();if(d)this.go(d.index+(dx<0?1:-1));}
 ngOnDestroy(){document.documentElement.classList.remove('quiz-focus');clearInterval(this.interval);document.removeEventListener('visibilitychange',this.onVisibility);const p=this.timePatch();if(p)this.update(p);}topic(id:string){return TOPICS.find(t=>t.id===id)?.name;}
 time(){let secs=this.draft()?.mode==='exam'?this.remaining():Math.max(0,Math.floor((this.now()-Date.parse(this.draft()?.startedAt??''))/1000));return [Math.floor(secs/3600),Math.floor(secs/60)%60,secs%60].map(v=>String(v).padStart(2,'0')).join(':');}
 private update(patch:Partial<Draft>){const d=this.draft();if(d&&d.owner===this.store.owner())this.store.saveDraft({...d,...patch});}
 choose(i:number){
  if(this.checked()||this.busy())return;const d=this.draft(),q=this.question();if(!d||!q)return;
  if(d.deadline&&Date.now()>=d.deadline){void this.finish();return;}
  const selected=q.type==='CS'?[i]:this.selected().includes(i)?this.selected().filter(v=>v!==i):[...this.selected(),i];
  const patch:Partial<Draft>={answers:{...d.answers,[q.id]:selected}};
  // Choosing an option you had crossed out means you changed your mind about it.
  if(selected.includes(i)&&this.struck().includes(i))patch.struck={...(d.struck??{}),[q.id]:this.struck().filter(v=>v!==i)};
  this.update(patch);
 }
 // Crossing out an option is a thinking aid, not an answer: it only deselects it.
 strike(i:number){
  if(this.checked()||this.busy())return;const d=this.draft(),q=this.question();if(!d||!q)return;
  const struck=this.struck(),on=!struck.includes(i);
  const patch:Partial<Draft>={struck:{...(d.struck??{}),[q.id]:on?[...struck,i]:struck.filter(v=>v!==i)}};
  if(on&&this.selected().includes(i))patch.answers={...d.answers,[q.id]:this.selected().filter(v=>v!==i)};
  this.update(patch);
 }
 // Confidence is optional and locked once the answer has been checked.
 setConf(c:Confidence){if(this.checked()||this.busy())return;const d=this.draft(),q=this.question();if(!d||!q)return;const next={...(d.confidence??{})};if(next[q.id]===c)delete next[q.id];else next[q.id]=c;this.update({confidence:next});}
 check(){const d=this.draft(),q=this.question();if(d&&q&&!this.invalid()){this.update({...this.timePatch(),checked:[...d.checked,q.id]});this.enteredAt=null;}}
 flag(){const d=this.draft(),q=this.question();if(d&&q)this.update({flagged:d.flagged.includes(q.id)?d.flagged.filter(id=>id!==q.id):[...d.flagged,q.id]});}
 go(index:number){const d=this.draft();if(d&&index>=0&&index<d.questionIds.length&&index!==d.index){this.update({...this.timePatch(),index});const next=d.questionIds[index];this.enteredAt=d.mode==='practice'&&d.checked.includes(next)?null:Date.now();}}
 // Enter does what the primary button says: check, then move on, then offer to finish.
 private primary(){
  const d=this.draft();if(!d)return;
  if(d.mode==='practice'&&!this.checked()){if(!this.invalid())this.check();return;}
  if(d.index<d.questionIds.length-1)this.go(d.index+1);else this.confirm.set(true);
 }
 @HostListener('document:keydown',['$event']) onKey(e:KeyboardEvent){
  if(e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey)return;
  const target=e.target as HTMLElement|null,tag=target?.tagName;
  if(tag==='TEXTAREA'||tag==='SELECT'||target?.isContentEditable||(tag==='INPUT'&&!['radio','checkbox'].includes((target as HTMLInputElement).type)))return;
  const question=e.key==='?'||(e.code==='Slash'&&e.shiftKey);
  if(this.help()){if(e.key==='Escape'||question){e.preventDefault();this.help.set(false);}return;}
  if(this.confirm()){if(e.key==='Escape'&&!this.busy()){e.preventDefault();this.confirm.set(false);}return;}
  const d=this.draft();if(!d||!this.question())return;
  const pos=['KeyA','KeyB','KeyC','KeyD','KeyE'].indexOf(e.code)>=0?['KeyA','KeyB','KeyC','KeyD','KeyE'].indexOf(e.code):['Digit1','Digit2','Digit3','Digit4','Digit5'].indexOf(e.code)>=0?['Digit1','Digit2','Digit3','Digit4','Digit5'].indexOf(e.code):['Numpad1','Numpad2','Numpad3','Numpad4','Numpad5'].indexOf(e.code);
  if(pos>=0){e.preventDefault();const i=this.order()[pos];if(e.shiftKey)this.strike(i);else this.choose(i);return;}
  if(question){e.preventDefault();this.help.set(true);return;}
  if(e.key==='Enter'&&tag!=='BUTTON'&&tag!=='A'){e.preventDefault();this.primary();return;}
  if(e.key==='ArrowRight'){e.preventDefault();this.go(d.index+1);return;}
  if(e.key==='ArrowLeft'){e.preventDefault();this.go(d.index-1);return;}
  // Native radio groups would silently change the answer on arrow keys.
  if((e.key==='ArrowUp'||e.key==='ArrowDown')&&tag==='INPUT'){e.preventDefault();return;}
  if(e.code==='KeyF'){e.preventDefault();this.flag();return;}
  if(e.code==='KeyZ'){e.preventDefault();this.toggleFocus();return;}
  if(e.key==='Escape'&&this.navOpen()){this.navOpen.set(false);return;}
  const level=({KeyS:'sure',KeyN:'unsure',KeyG:'guess'} as Record<string,Confidence>)[e.code];
  if(level){e.preventDefault();this.setConf(level);}
 }
 async finish(){const p=this.timePatch();if(p)this.update(p);const d=this.draft();if(!d||this.busy())return;this.busy.set(true);try{const completedAt=new Date(d.deadline&&Date.now()>d.deadline?d.deadline:Date.now()).toISOString();await this.store.addAttempt({id:d.id,userId:d.owner,mode:d.mode,startedAt:d.startedAt,completedAt,answers:d.questionIds.map(id=>({questionId:id,selected:d.answers[id]??[],...(d.confidence?.[id]?{confidence:d.confidence[id]}:{}),...(d.times?.[id]?{ms:Math.round(d.times[id])}:{})}))});this.store.saveDraft(null);await this.router.navigate(['/rezultat',d.id]);}catch(e){this.error.set((e as Error).message);this.confirm.set(true);}finally{this.busy.set(false);}}
}
