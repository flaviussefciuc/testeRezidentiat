import {Component,computed,effect,inject,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute,Router,RouterLink} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';
import {Store} from './store';
import {Bank,LITE_ACTIVE} from './bank';
import {Sessions} from './session';
import {TOPICS} from './topics';
import {IconComponent} from './icon.component';
import {insightOf,referenceLine} from './insight';
import type {Question} from './models';

const ACTIVE=new Set(LITE_ACTIVE.map(q=>q.id));
import {fold} from './text';
export {fold};
// Light Romanian stemming: "digoxina" also finds "digoxinei" and "digoxinului".
const stem=(t:string)=>{if(t.length<5||/\d/.test(t))return t;const r=t.replace(/(ului|elor|ilor|iei|ele|ul|ei|ii|ia|le|a|e|i|u)$/,'');return r.length>=4?r:t;};
interface Seg {t:string;hit:boolean}
// Splits text into highlighted and plain segments, matching on folded (diacritic-free) text.
function highlight(text:string,terms:string[]):Seg[]{
 const f=fold(text);if(!terms.length)return [{t:text,hit:false}];
 const marks=new Array(text.length).fill(false);
 for(const term of terms){let i=f.indexOf(term);while(i>=0){for(let k=i;k<i+term.length&&k<marks.length;k++)marks[k]=true;i=f.indexOf(term,i+term.length);}}
 const out:Seg[]=[];for(let i=0;i<text.length;i++){const last=out[out.length-1];if(last&&last.hit===marks[i])last.t+=text[i];else out.push({t:text[i],hit:marks[i]});}
 return out;
}
interface Hit {q:Question;score:number;topic:string;ref:string;section:string;stem:Seg[];options:{segs:Seg[];hit:boolean;correct:boolean;why:string}[];objective:Seg[]|null}

@Component({standalone:true,imports:[FormsModule,RouterLink,IconComponent],template:`
<div class="page-heading"><div><div class="eyebrow">CAUTĂ ÎN BANCĂ</div><h1>Tot ce știe banca despre un subiect.</h1><p>Caută după termen, semn, scor sau medicament: enunțuri, variante, obiective și secțiunile manualului. Diacriticele sunt opționale.</p></div></div>
<form class="search-hero" (submit)="$event.preventDefault();submit()"><label class="search-input big"><app-icon name="search"/><input #box name="q" [ngModel]="draft()" (ngModelChange)="draft.set($event)" placeholder="ex. scor Wells, feocromocitom, digoxina, Cadranul 30.17" aria-label="Caută în banca de grile" autocomplete="off" autofocus></label><button class="button primary" type="submit">Caută</button></form>
<div class="search-chips">@for(s of suggestions;track s){<button class="term" type="button" (click)="draft.set(s);submit()">{{s}}</button>}</div>
@if(!ready()){<div class="empty-state" role="status">{{bank.error()||'Se încarcă banca…'}}</div>}
@else if(terms().length){
 <div class="section-heading lower-heading"><div><h3>{{hits().length}} {{hits().length===1?'grilă găsită':'grile găsite'}}@if(hits().length>shown().length){ · primele {{shown().length}}}</h3><p>{{byTopic()}}</p></div>@if(hits().length){<button class="button secondary" (click)="practice()" [disabled]="!!store.draft()">Exersează {{min(40,hits().length)}} dintre ele<app-icon name="arrow"/></button>}</div>
 <div class="review-list">@for(h of shown();track h.q.id){
  <article class="panel search-hit">
   <small class="search-where"><a [routerLink]="['/fise',h.q.topicId]">{{h.topic}}</a> · {{h.section}} · {{h.ref}}</small>
   <p class="search-stem">@for(s of h.stem;track $index){@if(s.hit){<mark>{{s.t}}</mark>}@else{<span>{{s.t}}</span>}}</p>
   @if(h.objective){<p class="search-objective">@for(s of h.objective;track $index){@if(s.hit){<mark>{{s.t}}</mark>}@else{<span>{{s.t}}</span>}}</p>}
   <ul class="search-options">@for(o of h.options;track $index){<li [class.hit]="o.hit" [class.correct]="open().has(h.q.id)&&o.correct" [class.wrong]="open().has(h.q.id)&&!o.correct">@for(s of o.segs;track $index){@if(s.hit){<mark>{{s.t}}</mark>}@else{<span>{{s.t}}</span>}}@if(open().has(h.q.id)){<small>{{o.correct?'Adevărat':'Fals'}} · {{o.why}}</small>}</li>}</ul>
   <button class="text-link" (click)="toggle(h.q.id)">{{open().has(h.q.id)?'Ascunde răspunsul':'Arată răspunsul și justificările'}}</button>
  </article>}
  @empty{<div class="empty-state"><h3>Nicio grilă nu conține toți termenii.</h3><p>Încearcă mai puține cuvinte sau o formă mai scurtă (de exemplu „feocrom”).</p></div>}
 </div>}`})
export class SearchComponent {
 store=inject(Store);bank=inject(Bank);sessions=inject(Sessions);router=inject(Router);
 query=toSignal(inject(ActivatedRoute).queryParamMap.pipe(map(p=>p.get('q')??'')),{initialValue:''});
 draft=signal('');ready=signal(false);open=signal(new Set<string>());
 suggestions=['scor Wells','feocromocitom','digoxină','Cadranul 30.17','hiperkaliemie','Child-Pugh','Ranson','Tanner'];
 private index=new Map<string,{stem:string;options:string[];objective:string;rest:string}>();
 constructor(){
  void this.bank.active().then(()=>{for(const q of this.bank.byId().values())if(ACTIVE.has(q.id)){const i=insightOf(q);this.index.set(q.id,{stem:fold(q.stem),options:q.options.map(fold),objective:fold(i.objective??''),rest:fold([i.reference?.section??'',...i.expressions].join(' '))});}this.ready.set(true);}).catch(()=>{});
  effect(()=>this.draft.set(this.query()));
 }
 terms=computed(()=>[...new Set(fold(this.query()).split(/[^\p{L}\p{N}.,%-]+/u).map(t=>stem(t.replace(/^[.,-]+|[.,-]+$/g,''))).filter(t=>t.length>=2))]);
 hits=computed<Hit[]>(()=>{
  if(!this.ready())return [];const terms=this.terms();if(!terms.length)return [];
  const out:Hit[]=[];
  for(const [id,ix] of this.index){
   let score=0,all=true;
   for(const t of terms){const s=(ix.stem.includes(t)?3:0)+(ix.options.some(o=>o.includes(t))?2:0)+(ix.objective.includes(t)?1:0)+(ix.rest.includes(t)?1:0);if(!s){all=false;break;}score+=s;}
   if(!all)continue;
   const q=this.bank.byId().get(id)!,info=insightOf(q);
   out.push({q,score,topic:TOPICS.find(t=>t.id===q.topicId)?.name??'',ref:referenceLine(info),section:info.reference?.section??'',stem:highlight(q.stem,terms),objective:info.objective?highlight(info.objective,terms):null,options:q.options.map((o,i)=>({segs:highlight(o,terms),hit:terms.some(t=>fold(o).includes(t)),correct:q.correct.includes(i),why:info.rationales?.[i]??''}))});
  }
  return out.sort((a,b)=>b.score-a.score);
 });
 shown=computed(()=>this.hits().slice(0,60));
 byTopic=computed(()=>{const m=new Map<string,number>();for(const h of this.hits())m.set(h.topic,(m.get(h.topic)??0)+1);return [...m].sort((a,b)=>b[1]-a[1]).slice(0,6).map(([t,n])=>`${t} (${n})`).join(' · ');});
 submit(){void this.router.navigate(['/cauta'],{queryParams:{q:this.draft().trim()||null}});}
 toggle(id:string){const s=new Set(this.open());if(s.has(id))s.delete(id);else s.add(id);this.open.set(s);}
 practice(){this.sessions.startPractice(this.hits().slice(0,40).map(h=>h.q.id));}
 min=Math.min;
}
