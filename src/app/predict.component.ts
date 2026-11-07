import {Component,computed,inject,signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Bank,LITE_ACTIVE} from './bank';
import {Sessions} from './session';
import {Store} from './store';
import {TOPICS} from './topics';
import {EXAM_WEIGHTS,EXAM_YEARS,EXAM_CM_CARDINALITY} from './exam-weights';
import {chapterQuotas} from './exam-composition';
import {shuffled} from './scoring';
import {IconComponent} from './icon.component';

interface Row {id:string;name:string;book:string;perYear:number[];expected:number;cs:number;points:number;bank:number;depth:number;hot:[number,number][];hotCovered:number;hotIds:string[];tableShare:number|null;}

// What the last three papers asked, chapter by chapter and page by page, next to what
// the bank holds for it. The counts come from public/exam-history.json (attribution of
// each exam item by blog.grile-rezidentiat.ro); they describe past papers, not 2026.
@Component({standalone:true,imports:[RouterLink,IconComponent],template:`
<div class="page-heading"><div><div class="eyebrow">CE A CERUT EXAMENUL</div><h1>Predicția pentru 2026.</h1><p>Caietele din {{years.join(', ')}} au cerut aproape aceleași capitole în aceleași proporții: cardiologia {{row('cardiologie')?.perYear?.join('/')}} grile, ortopedia {{row('ortopedie')?.perYear?.join('/')}}, pneumologia {{row('pneumologie')?.perYear?.join('/')}}. Mai jos, fiecare capitol cu numărul așteptat de grile, punctele în joc și paginile cerute de mai multe ori.</p></div></div>
<div class="stat-grid">
 <div class="panel stat"><span class="stat-icon mint"><app-icon name="target"/></span><div><strong>{{quotaTotal}}</strong><span>grile într-o simulare: {{csTotal}} CS + {{quotaTotal-csTotal}} CM, în proporțiile caietelor</span></div></div>
 <div class="panel stat"><span class="stat-icon peach"><app-icon name="check"/></span><div><strong>{{card[0]}} / {{card[1]}} / {{card[2]}}</strong><span>grile CM cu 2 / 3 / 4 răspunsuri corecte în caietul {{years[years.length-1]}}</span></div></div>
 <div class="panel stat"><span class="stat-icon sand"><app-icon name="sheet"/></span><div><strong>{{tablePct}}%</strong><span>din grilele {{years[0]}}–{{years[1]}} veneau dintr-un tabel sau o figură</span></div></div>
 <div class="panel stat"><span class="stat-icon mint"><app-icon name="book"/></span><div><strong>{{hotCovered()}} / {{hotTotal()}}</strong><span>pagini cerute de cel puțin două ori au grile în bancă</span></div></div>
</div>
<div class="notice">Numerele descriu caietele trecute, nu pe cel din 15 noiembrie. Atribuirea pe capitol și pagină este a autorilor analizelor publice, nu a Ministerului. Grilele oficiale nu sunt reproduse în bancă.</div>
<div class="section-heading lower-heading"><div><h3>Capitolele, în ordinea punctelor în joc</h3><p>«Așteptat» este media celor trei caiete; «adâncime» arată câte grile are banca pentru fiecare grilă așteptată la examen.</p></div><div class="segmented" role="group" aria-label="Sortare"><button [class.on]="sort()==='points'" (click)="sort.set('points')">după puncte</button><button [class.on]="sort()==='depth'" (click)="sort.set('depth')">după adâncime</button><button [class.on]="sort()==='gaps'" (click)="sort.set('gaps')">după pagini neacoperite</button></div></div>
<div class="panel table-panel table-scroll"><table class="predict-table"><thead><tr><th>Capitol</th><th>{{years.join(' · ')}}</th><th>Așteptat</th><th>Puncte</th><th>Bancă</th><th>Adâncime</th><th>Pagini cerute ≥2 ori</th><th>Din tabele</th><th></th></tr></thead><tbody>
@for(r of rows();track r.id){<tr>
 <td><strong>{{r.name}}</strong><small>{{r.book}}</small></td>
 <td class="num">{{r.perYear.join(' · ')}}</td>
 <td class="num"><strong>{{r.expected}}</strong><small>{{r.cs}} CS</small></td>
 <td class="num">{{r.points}}</td>
 <td class="num">{{r.bank}}</td>
 <td class="num" [class.low]="r.depth<=12"><strong>{{r.depth}}</strong><small>grile / grilă</small></td>
 <td class="pages">@if(r.hot.length){@for(p of r.hot;track p[0]){<span class="page-chip" [class.gap]="!covered(r.id,p[0])" [title]="'p. '+p[0]+': cerută de '+p[1]+' ori'+(covered(r.id,p[0])?', '+covered(r.id,p[0])+' grile în bancă':', nicio grilă în bancă')">{{p[0]}}<small>×{{p[1]}}</small></span>}}@else{<span class="muted">—</span>}</td>
 <td class="num">{{r.tableShare===null?'—':r.tableShare+'%'}}</td>
 <td class="actions"><button class="button secondary small-button" (click)="practiceHot(r)" [disabled]="!ready()||!r.hotIds.length||!!store.draft()" title="Grilele de pe paginile cerute de cel puțin două ori">Paginile cerute ({{r.hotIds.length}})</button><a class="text-link" routerLink="/teste" [queryParams]="{topic:r.id}">Tot capitolul →</a></td>
</tr>}
</tbody></table></div>
<p class="small muted">Punctele presupun 4 puncte la CS și 5 la CM. O pagină este «acoperită» dacă cel puțin o grilă din bancă o citează ca sursă; grilele de pe o pagină vecină pot acoperi același subiect.</p>`})
export class PredictComponent {
 bank=inject(Bank);sessions=inject(Sessions);store=inject(Store);
 years=EXAM_YEARS;card=EXAM_CM_CARDINALITY;sort=signal<'points'|'depth'|'gaps'>('points');ready=signal(false);
 quotas=chapterQuotas(200);quotaTotal=this.quotas.reduce((s,q)=>s+q.cs+q.cm,0);csTotal=this.quotas.reduce((s,q)=>s+q.cs,0);
 tablePct=Math.round(EXAM_WEIGHTS.reduce((s,w)=>s+(w.tableShare??0)*w.perYear.slice(0,2).reduce((a,b)=>a+b,0),0)/EXAM_WEIGHTS.reduce((s,w)=>s+w.perYear.slice(0,2).reduce((a,b)=>a+b,0),0)*100);
 // page → ids of active questions citing it, per chapter (needs the full bank text).
 pageIndex=computed(()=>{const m=new Map<string,string[]>(),active=new Set(LITE_ACTIVE.map(l=>l.id));for(const q of this.bank.byId().values()){const r=(q as any).reference;if(!r||!active.has(q.id))continue;for(const p of r.printedPages as number[]){const k=q.topicId+':'+p;m.set(k,[...(m.get(k)??[]),q.id]);}}return m;});
 constructor(){void this.bank.active().then(()=>this.ready.set(true)).catch(()=>{});}
 covered(topicId:string,page:number){return this.pageIndex().get(topicId+':'+page)?.length??0;}
 base=computed<Row[]>(()=>{
  const idx=this.pageIndex();
  return TOPICS.map(t=>{
   const w=EXAM_WEIGHTS.find(x=>x.topicId===t.id)!,q=this.quotas.find(x=>x.topicId===t.id)!;
   const expected=q.cs+q.cm,bank=LITE_ACTIVE.filter(l=>l.topicId===t.id).length;
   const hot=w.pages.filter(([,n])=>n>=2);
   const hotIds=[...new Set(hot.flatMap(([p])=>idx.get(t.id+':'+p)??[]))];
   return {id:t.id,name:t.name,book:t.book,perYear:w.perYear,expected,cs:q.cs,points:q.cs*4+q.cm*5,bank,depth:expected?Math.round(bank/expected):bank,hot,hotCovered:hot.filter(([p])=>idx.has(t.id+':'+p)).length,hotIds,tableShare:w.tableShare===null?null:Math.round(w.tableShare*100)};
  });
 });
 rows=computed(()=>{const s=this.sort(),r=[...this.base()];return s==='points'?r.sort((a,b)=>b.points-a.points||b.expected-a.expected):s==='depth'?r.sort((a,b)=>a.depth-b.depth):r.sort((a,b)=>(b.hot.length-b.hotCovered)-(a.hot.length-a.hotCovered)||b.points-a.points);});
 hotTotal=computed(()=>this.base().reduce((s,r)=>s+r.hot.length,0));
 hotCovered=computed(()=>this.base().reduce((s,r)=>s+r.hotCovered,0));
 row(id:string){return this.base().find(r=>r.id===id);}
 practiceHot(r:Row){this.sessions.startPractice(shuffled(r.hotIds).slice(0,40));}
}
