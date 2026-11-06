import {Component,computed,inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Store} from './store';
import {LITE_BY_ID} from './bank';
import {IconComponent} from './icon.component';
import {calibration} from './calibration';
import {losses,markHabit} from './analysis';
import {PACE_SECONDS} from './pace';

// How to sit the exam, using the scoring rules and the student's own numbers.
@Component({standalone:true,imports:[RouterLink,IconComponent],template:`
<div class="page-heading"><div><div class="eyebrow">ZIUA EXAMENULUI</div><h1>Strategia ta pentru 15 noiembrie.</h1><p>Reguli de punctaj, un plan de timp și sfaturi construite din felul în care rezolvi tu grilele în Rezi.</p></div></div>
<div class="strategy-grid">
 <section class="panel strategy-card"><h3>⏱ Planul de timp</h3><p>200 de grile în 240 de minute înseamnă <strong>{{pace}} secunde pe grilă</strong>. Repere pe care să le verifici pe ceas:</p>
  <div class="checkpoints">@for(c of checkpoints;track c.q){<div><strong>grila {{c.q}}</strong><span>la {{c.t}}</span></div>}</div>
  <p class="small">Lasă ultimele ~15 minute pentru grilele marcate și pentru verificarea foii de răspuns. O grilă care te ține peste 2 minute: marcheaz-o, alege varianta cea mai probabilă și mergi mai departe.</p></section>
 <section class="panel strategy-card"><h3>✓ Reguli de punctaj care contează</h3><ul>
  <li><strong>Complement simplu:</strong> 4 puncte sau 0, fără penalizare. Nu lăsa nicio grilă CS fără răspuns.</li>
  <li><strong>Complement multiplu:</strong> marchează mereu <strong>între 2 și 4 variante</strong>. Cu 1 sau 5 variante grila valorează 0, chiar dacă ai clasificat corect majoritatea.</li>
  <li>La CM fiecare variantă e un punct, în ambele sensuri: bifeaz-o dacă o crezi <em>mai degrabă adevărată</em> decât falsă; altfel las-o.</li>
  <li>O grilă CM nesigură tot aduce puncte: chiar și 3 variante clasificate corect valorează 3 din 5.</li></ul></section>
 <section class="panel strategy-card"><h3>👁 Disciplina citirii</h3><ul>
  <li>Citește enunțul până la capăt înainte de variante; caută negațiile (<em>cu excepția</em>, <em>NU</em>, <em>este falsă</em>) și calificativele (<em>cel mai frecvent</em>, <em>de primă intenție</em>).</li>
  <li>Elimină mai întâi variantele sigur false; restul se decid mai ușor.</li>
  <li>Schimbă un răspuns doar când găsești un argument concret, nu din nesiguranță.</li>
  <li>Transferă răspunsurile pe foaie pe măsură ce avansezi, nu toate la final.</li></ul></section>
 <section class="panel strategy-card mine"><h3>📊 Ce spun datele tale</h3>
  @if(answered()<40){<p>Rezolvă câteva teste (cel puțin 40 de grile) și aici apar sfaturi construite din răspunsurile tale.</p><a routerLink="/teste" class="button primary small-button">Începe o simulare scurtă<app-icon name="arrow"/></a>}
  @else{<ul>@for(t of tips();track t){<li>{{t}}</li>}</ul>}</section>
 <section class="panel strategy-card"><h3>🌙 Seara dinainte</h3><ul><li>Fără material nou: recapitulează greșelile „sigure”, grilele scadente și paginile de recitit.</li><li>Pregătește tot ce cere anunțul oficial al concursului (verifică-l din timp).</li><li>Somnul de 7–8 ore consolidează memoria mai mult decât încă două ore de grile.</li></ul></section>
 <section class="panel strategy-card"><h3>☀ Dimineața examenului</h3><ul><li>Mic dejun obișnuit, fără experimente; apă la îndemână.</li><li>O rundă scurtă de 10 afirmații Adevărat sau fals te „încălzește” fără să te obosească.</li><li>În sală: respiră lent înainte de prima grilă, apoi urmează reperele de timp.</li></ul></section>
</div>`})
export class StrategyComponent {
 store=inject(Store);pace=PACE_SECONDS;
 checkpoints=[{q:50,t:'1 h 00'},{q:100,t:'2 h 00'},{q:150,t:'3 h 00'},{q:200,t:'3 h 45 (+15 min verificare)'}];
 private answers=computed(()=>this.store.attempts().flatMap(a=>a.answers));
 answered=computed(()=>this.answers().filter(a=>a.selected.length).length);
 tips=computed(()=>{
  const ans=this.answers(),out:string[]=[];
  const timed=ans.filter(a=>(a.ms??0)>0),avg=timed.length?Math.round(timed.reduce((n,a)=>n+(a.ms??0),0)/timed.length/1000):0;
  if(timed.length>=20)out.push(avg>PACE_SECONDS?`Lucrezi în medie ${avg} s pe grilă, peste ritmul examenului (${PACE_SECONDS} s). Exersează simulări scurte cu antrenorul de ritm și sari peste grilele care te blochează.`:`Ritmul tău mediu este ${avg} s pe grilă, sub cele ${PACE_SECONDS} s disponibile: ai timp să verifici fiecare variantă și să revii la grilele marcate.`);
  const l=losses(ans,LITE_BY_ID),h=markHabit(ans,LITE_BY_ID);
  if(l.voidCm)out.push(`Ai avut grile de complement multiplu anulate (1 sau 5 variante marcate), adică ${l.voidCm} puncte pierdute din formă, nu din cunoștințe. La examen: niciodată mai puțin de 2 sau mai mult de 4.`);
  if(h.answered>=20){const m=h.marked/h.answered,t=h.truth/h.answered;if(m<t-0.25)out.push(`Marchezi în medie ${m.toFixed(1)} variante la CM, iar cheile au ${t.toFixed(1)}: tinzi să omiți variante adevărate. Când o variantă ți se pare plauzibilă și ai un argument pentru ea, bifeaz-o.`);else if(m>t+0.25)out.push(`Marchezi în medie ${m.toFixed(1)} variante la CM, iar cheile au ${t.toFixed(1)}: bifezi prea ușor. Cere-ți un argument pentru fiecare bifă.`);}
  const cal=calibration(ans,LITE_BY_ID),sure=cal.find(r=>r.level==='sure')!,guess=cal.find(r=>r.level==='guess')!;
  if(sure.total>=10)out.push(sure.percent>=80?`Când ești sigur, ai dreptate în ${sure.percent}% din cazuri: încrede-te în primul răspuns la grilele pe care le știi și investește timpul în cele nesigure.`:`Când ești sigur, ai dreptate doar în ${sure.percent}% din cazuri: la examen recitește enunțul și la grilele care ți se par evidente.`);
  if(guess.total>=10)out.push(`Când ghicești, nimerești complet în ${guess.percent}% din cazuri. La CS răspunde oricum (fără penalizare); la CM păstrează 2–4 variante, chiar ghicite.`);
  const whyMisread=ans.filter(a=>a.why==='misread').length,whyRushed=ans.filter(a=>a.why==='rushed').length;
  if(whyMisread>=3)out.push(`Ai marcat ${whyMisread} greșeli de citire: subliniază mental negațiile și calificativele înainte de a citi variantele.`);
  if(whyRushed>=3)out.push(`Ai marcat ${whyRushed} greșeli din grabă: încetinește la ultima variantă citită, acolo apar de obicei capcanele.`);
  if(!out.length)out.push('Datele tale nu arată o problemă de strategie: punctele pierdute vin din cunoștințe. Continuă cu planul și recapitularea programată.');
  return out;
 });
}
