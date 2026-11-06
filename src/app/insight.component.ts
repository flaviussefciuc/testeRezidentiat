import {Component,computed,input} from '@angular/core';
import type {Question} from './models';
import {score,maximum} from './scoring';
import {insightOf,referenceLine} from './insight';

// The teaching card shown after an answer is checked (practice) or reviewed (results).
@Component({selector:'app-insight',standalone:true,template:`
@if(q();as q){
<section class="insight" aria-live="polite">
 <header class="insight-score" [class.perfect]="points()===max()" [class.zero]="points()===0">
  <div class="insight-points"><strong>{{points()}}</strong><span>/ {{max()}} puncte</span></div>
  <div>
   <strong>{{points()===max()?'Răspuns complet corect':points()===0?'De reluat':'Parțial corect'}}</strong>
   <small>{{summary()}}</small>
  </div>
  @if(q.type==='CM'){<div class="insight-meter" aria-hidden="true">@for(p of pips();track $index){<i [class.on]="p"></i>}</div>}
 </header>
 @if(info().objective){<div class="insight-block"><span class="insight-label">Ce verifică grila</span><p>{{info().objective}}</p></div>}
 @if(info().trap){<div class="insight-block trap"><span class="insight-label">Unde este capcana</span><p>{{info().trap}}</p></div>}
 @if(!info().rationales){<div class="insight-block"><span class="insight-label">Explicație</span><p class="pre">{{q.explanation}}</p></div>}
 @if(info().expressions.length){<div class="insight-block"><span class="insight-label">Termeni din manual</span><div class="term-row">@for(t of info().expressions;track t){<span class="term">{{t}}</span>}</div></div>}
 @if(info().reference;as r){<div class="insight-ref"><span class="ref-book">{{refLine()}}</span><span class="ref-section">{{r.section}}</span><span class="ref-pdf">{{r.edition}} · pagini PDF {{r.pdfPages.join(', ')}}</span><a [href]="q.source" target="_blank" rel="noopener noreferrer">Tematica oficială ↗</a></div>}
 @else{<a class="insight-link" [href]="q.source" target="_blank" rel="noopener noreferrer">Sursa și bibliografia capitolului ↗</a>}
</section>}`})
export class InsightComponent {
 q=input<Question|undefined>();
 selected=input<number[]>([]);
 info=computed(()=>insightOf(this.q()!));
 points=computed(()=>this.q()?score(this.q()!,this.selected()):0);
 max=computed(()=>this.q()?maximum(this.q()!):0);
 refLine=computed(()=>referenceLine(this.info()));
 pips=computed(()=>{const q=this.q(),s=this.selected();if(!q)return[];const valid=s.length>=2&&s.length<=4;return q.options.map((_,i)=>valid&&(q.correct.includes(i)===s.includes(i)));});
 summary=computed(()=>{
  const q=this.q(),s=this.selected();if(!q)return'';
  if(!s.length)return 'Nu ai marcat niciun răspuns.';
  if(q.type==='CS')return s[0]===q.correct[0]?'Ai ales singura variantă corectă.':'Varianta corectă este marcată mai sus.';
  if(s.length<2||s.length>4)return `Ai marcat ${s.length} ${s.length===1?'variantă':'variante'}: la complement multiplu sunt necesare 2–4, altfel punctajul este 0.`;
  const right=q.options.filter((_,i)=>q.correct.includes(i)===s.includes(i)).length;
  return `${right} din 5 variante clasificate corect · ${q.correct.length} adevărate în cheie.`;
 });
}
