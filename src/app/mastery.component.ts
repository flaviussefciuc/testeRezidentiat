import {Component,computed,inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Store} from './store';
import {LITE,LITE_ACTIVE,LITE_BY_ID} from './bank';
import {Sessions} from './session';
import {TOPICS} from './topics';
import {topicStats} from './scoring';
import {chapterQuotas} from './exam-composition';

// Diverging bins around the 55–70% neutral band: below it is a study priority,
// above it is solid. Every tile prints its value, so colour is never the only cue.
const BIN_LABEL=['Neexersat','sub 40%','40–55%','55–70%','70–85%','peste 85%'];
const binOf=(answered:number,percent:number)=>!answered?0:percent<40?1:percent<55?2:percent<70?3:percent<85?4:5;

@Component({selector:'app-mastery-map',standalone:true,imports:[RouterLink],template:`
<section class="panel mastery">
 <div class="section-heading"><div><h3>Harta tematicii</h3><p>Cele 39 de capitole: culoarea arată punctajul tău, bara arată cât din capitol ai văzut, iar «≈ la examen» e numărul de grile pe care caietele 2023–2025 l-au avut din capitol. Alege un capitol ca să-l exersezi.</p></div><div class="heading-links"><a routerLink="/predictie" class="text-link">Predicția 2026 →</a><a routerLink="/progres" class="text-link">Vezi tabelul →</a></div></div>
 <div class="mastery-legend" aria-hidden="true">@for(l of legend;track l;let i=$index){<span><i class="mbin" [attr.data-b]="i"></i>{{l}}</span>}</div>
 @for(g of groups();track g.book){
 <h4 class="mastery-book">{{g.book}} <small>{{g.seen}} / {{g.count}} grile văzute</small></h4>
 <div class="mastery-grid">@for(t of g.tiles;track t.id){
  <a class="mtile" [attr.data-b]="t.bin" [routerLink]="['/teste']" [queryParams]="{topic:t.id}" [attr.aria-label]="t.name+': '+(t.answered?t.percent+'% punctaj, ':'neexersat, ')+t.coverage+'% văzut, '+t.count+' grile'+(t.due?', '+t.due+' scadente':'')">
   <span class="mtile-name">{{t.name}}</span>
   <span class="mtile-score">{{t.answered?t.percent+'%':'—'}}</span>
   <span class="mtile-cover" aria-hidden="true"><i [style.width.%]="t.coverage"></i></span>
   <span class="mtile-meta">{{t.seen}}/{{t.count}} văzute@if(t.due){ · <b>{{t.due}} scadente</b>}</span>
   <span class="mtile-exam" title="Grile așteptate la examen, după caietele 2023–2025">≈{{t.exam}} la examen</span>
  </a>}
 </div>}
</section>`})
export class MasteryMapComponent {
 store=inject(Store);sessions=inject(Sessions);legend=BIN_LABEL;
 groups=computed(()=>{
  const attempts=this.store.attempts(),seen=this.sessions.seen(),due=new Map<string,number>();
  for(const id of this.sessions.due()){const t=LITE_BY_ID.get(id)?.topicId;if(t)due.set(t,(due.get(t)??0)+1);}
  const quota=new Map(chapterQuotas(200).map(q=>[q.topicId,q.cs+q.cm]));
  const tiles=TOPICS.map(t=>{
   const ids=LITE_ACTIVE.filter(q=>q.topicId===t.id),s=topicStats(attempts,LITE,t.id),seenCount=ids.filter(q=>seen.has(q.id)).length;
   return {...t,count:ids.length,seen:seenCount,coverage:ids.length?Math.round(seenCount/ids.length*100):0,answered:s.answered,percent:s.percent,bin:binOf(s.answered,s.percent),due:due.get(t.id)??0,exam:quota.get(t.id)??0};
  });
  return ['Kumar & Clark','Lawrence','Sinopsis'].map(book=>{const ts=tiles.filter(t=>t.book===book);return {book,tiles:ts,count:ts.reduce((n,t)=>n+t.count,0),seen:ts.reduce((n,t)=>n+t.seen,0)};});
 });
}
