import {Component,computed,inject,input,signal} from '@angular/core';
import type {Answer,Question} from './models';
import {Bank} from './bank';
import {Notes} from './notes';
import {exact} from './scoring';
import {insightOf,referenceLine} from './insight';

// The three most useful lessons of a session: confident mistakes first (a false belief
// corrected now sticks best), then the other misses, preferring the ones with a stated trap.
@Component({selector:'app-takeaways',standalone:true,template:`
@if(items().length){
<section class="panel takeaways">
 <div class="section-heading"><div><span class="eyebrow">DE REȚINUT DIN ACEASTĂ SESIUNE</span><h3>{{items().length}} {{items().length===1?'lecție':'lecții'}} care merită 2 minute acum</h3></div><button class="button secondary small-button" (click)="saveAll()" [disabled]="saved()">{{saved()?'★ Salvate în notițe':'☆ Salvează-le în colecție'}}</button></div>
 <ol class="takeaway-list">@for(t of items();track t.q.id){
  <li [class.sure]="t.sure"><span class="takeaway-kind">{{t.sure?'Erai sigur, dar…':'Ai greșit aici'}}</span>
   <strong>{{t.objective||t.q.stem}}</strong>
   <p class="takeaway-stem">{{t.q.stem}}</p>
   <ul class="sheet-truths">@for(x of t.truths;track x){<li>{{x}}</li>}</ul>
   @if(t.trap){<p class="takeaway-trap">Capcana: {{t.trap}}</p>}
   <small>{{t.ref}}</small></li>}
 </ol>
 <p class="small muted">Grilele greșite revin automat mâine la recapitularea programată.</p>
</section>}`})
export class TakeawaysComponent {
 answers=input<Answer[]>([]);
 bank=inject(Bank);notes=inject(Notes);saved=signal(false);
 items=computed(()=>{
  const out:{q:Question;sure:boolean;objective:string|null;truths:string[];trap:string|null;ref:string;rank:number}[]=[];
  for(const a of this.answers()){
   const q=this.bank.byId().get(a.questionId);if(!q||!a.selected.length||exact(q,a.selected))continue;
   const info=insightOf(q),sure=a.confidence==='sure';
   out.push({q,sure,objective:info.objective,truths:q.options.filter((_,i)=>q.correct.includes(i)),trap:info.trap,ref:referenceLine(info),rank:(sure?2:0)+(info.trap?1:0)+(a.confidence==='guess'?-1:0)});
  }
  return out.sort((x,y)=>y.rank-x.rank).slice(0,3);
 });
 saveAll(){for(const t of this.items())if(!this.notes.isSaved(t.q.id))this.notes.toggleSaved(t.q.id);this.saved.set(true);}
}
