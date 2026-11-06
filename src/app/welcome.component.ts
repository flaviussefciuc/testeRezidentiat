import {Component,computed,inject,input,signal} from '@angular/core';
import {Router,RouterLink} from '@angular/router';
import {Store} from './store';
import {Planner} from './planner';
import {IconComponent} from './icon.component';
import {Ui} from './ui';

const ONBOARDED='rezi:onboarded',NEWS_KEY='rezi:news-seen';
export const NEWS_VERSION='2026-11-06';
const read=(k:string)=>{try{return localStorage.getItem(k);}catch{return null;}};
const write=(k:string,v:string)=>{try{localStorage.setItem(k,v);}catch{/* storage unavailable */}};
export const NEWS=[
 {icon:'calendar',title:'Planul până la examen',text:'Capitolele împărțite pe zilele rămase, după mărime și după cât de bine le stăpânești.',path:'/plan'},
 {icon:'check',title:'Explicații pe fiecare variantă',text:'După verificare, fiecare variantă spune de ce e adevărată sau falsă, cu pagina din manual.',path:'/teste'},
 {icon:'refresh',title:'Recapitulare programată',text:'Grilele revin exact când ești pe cale să le uiți. Marchează cât de sigur ești (S/N/G).',path:'/teste'},
 {icon:'spark',title:'Adevărat sau fals',text:'16.000 de afirmații verificate, în runde de câteva minute.',path:'/adevarat-fals'},
 {icon:'sheet',title:'Fișe de recapitulare',text:'Tot capitolul pe o pagină, în ordinea paginilor din carte; se pot asculta.',path:'/fise'},
 {icon:'bookmark',title:'Pagini de recitit',text:'Greșelile tale, mutate pe paginile din manual de unde vin.',path:'/recitire'},
 {icon:'target',title:'Provocarea zilei',text:'Aceleași 10 grile pentru toți, cu rezultat de distribuit.',path:'/provocare'},
 {icon:'clock',title:'Simulări 200/100/52',text:'Cu antrenor de ritm (72 s/grilă) și foaie de răspuns.',path:'/teste'},
 {icon:'download',title:'Funcționează offline',text:'Instalează aplicația și exersează fără internet; rezultatele se sincronizează la revenire.',path:'/'},
];

// First visit: a short welcome that sets the daily pace. Later visits: what is new, once.
@Component({selector:'app-welcome',standalone:true,imports:[RouterLink,IconComponent],template:`
@if(mode();as m){<div class="modal-backdrop welcome-backdrop"><section class="modal welcome" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
 @if(m==='onboarding'){
  @switch(step()){
  @case(0){<span class="eyebrow">BINE AI VENIT LA REZI</span><h2 id="welcome-title">Mai sunt {{planner.daysLeft}} zile. Să le folosim bine.</h2><p>3.220 de grile verificate pe paginile din bibliografie, cu explicații pentru fiecare variantă. Cât timp ai pe zi?</p>
   <div class="pace-options">@for(o of paces;track o.n){<button class="pace-option" [class.on]="planner.perDay()===o.n" (click)="planner.setPerDay(o.n)"><strong>{{o.n}}</strong><span>grile noi/zi</span><small>{{o.hint}}</small></button>}</div>
   <div class="modal-actions"><button class="button secondary" (click)="close()">Mai târziu</button><button class="button primary" (click)="step.set(1)">Continuă<app-icon name="arrow"/></button></div>}
  @case(1){<span class="eyebrow">CUM ÎNVEȚI CU REZI</span><h2 id="welcome-title">Un ciclu simplu, în fiecare zi.</h2>
   <ol class="welcome-steps"><li><strong>Planul de azi</strong> îți spune ce capitole să lucrezi.</li><li><strong>Rezolvi și verifici</strong>: fiecare variantă vine cu justificarea și pagina din manual.</li><li><strong>Greșelile</strong> revin la recapitularea programată și în „Pagini de recitit”.</li><li><strong>Seara</strong>: o rundă de Adevărat sau fals sau o fișă ascultată.</li></ol>
   <p class="small muted">Rezultatele se salvează în acest browser. Cu un cont gratuit le ai pe orice dispozitiv.</p>
   <div class="modal-actions"><button class="button secondary" (click)="step.set(0)">Înapoi</button><button class="button primary" (click)="startPlan()">Începe planul de azi<app-icon name="arrow"/></button></div>}
  }
 }@else{
  <span class="eyebrow">CE E NOU ÎN REZI</span><h2 id="welcome-title">Unelte noi pentru ultima săptămână.</h2>
  <div class="news-grid">@for(n of news;track n.title){<a class="news-item" [routerLink]="n.path" (click)="close()"><app-icon [name]="n.icon"/><span><strong>{{n.title}}</strong><small>{{n.text}}</small></span></a>}</div>
  <div class="modal-actions"><button class="button primary" (click)="close()">Am înțeles</button></div>
 }
</section></div>}`})
export class WelcomeComponent {
 suppress=input(false);
 store=inject(Store);planner=inject(Planner);router=inject(Router);
 ui=inject(Ui);step=signal(0);dismissed=signal(false);news=NEWS;
 paces=[{n:60,hint:'~1 oră'},{n:100,hint:'~2 ore'},{n:150,hint:'~3 ore'},{n:200,hint:'~4 ore'}];
 mode=computed<'onboarding'|'news'|null>(()=>{
  if(this.ui.news())return 'news';
  if(this.dismissed()||this.suppress()||!this.store.ready())return null;
  if(!this.store.attempts().length&&!read(ONBOARDED))return 'onboarding';
  if(this.store.attempts().length&&read(NEWS_KEY)!==NEWS_VERSION)return 'news';
  return null;
 });
 openNews(){this.ui.news.set(true);}
 close(){write(ONBOARDED,'1');write(NEWS_KEY,NEWS_VERSION);this.ui.news.set(false);this.dismissed.set(true);}
 startPlan(){this.close();const d=this.planner.todayPlan();if(d?.items.length)this.planner.start(d.items[0].topicId,d.items[0].count);else void this.router.navigate(['/plan']);}
}
