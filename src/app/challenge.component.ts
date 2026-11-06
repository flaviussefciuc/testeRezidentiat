import {Component,computed,inject,input,signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Store} from './store';
import {LITE_ACTIVE,LITE_BY_ID} from './bank';
import {Sessions} from './session';
import {IconComponent} from './icon.component';
import {challengeDay,challengeIds,dayKey,dayLabel,shareGrid} from './challenge';
import type {Attempt} from './models';

// Today's shared challenge: start it, or share the result once done.
@Component({selector:'app-challenge',standalone:true,imports:[RouterLink,IconComponent],template:`
<section class="panel challenge" [class.compact]="compact()">
 <div class="challenge-head"><span class="challenge-badge">🎯</span><div><span class="eyebrow">PROVOCAREA ZILEI · {{label}}</span><h3>@if(done();as d){<span>{{d.points}} / {{d.max}} puncte azi</span>}@else{<span>Aceleași 10 grile pentru toți</span>}</h3></div></div>
 @if(done();as d){
  <p class="challenge-grid" aria-label="Rezultatul pe grile">{{d.text}}</p>
  <p class="small muted">Revino mâine pentru o nouă provocare. Compară-ți rezultatul cu colegii.</p>
  <div class="challenge-actions"><button class="button primary small-button" (click)="share(d)"><app-icon name="share"/>{{shared()||'Distribuie rezultatul'}}</button><a class="text-link" [routerLink]="['/rezultat',d.id]">Vezi răspunsurile →</a></div>
 }@else{
  <p>3 grile de complement simplu și 7 de complement multiplu, din 10 capitole diferite. Durează ~10 minute; rezultatul se poate distribui fără să dezvăluie grilele.</p>
  <button class="button primary small-button" (click)="start()" [disabled]="!!store.draft()">Începe provocarea<app-icon name="arrow"/></button>@if(store.draft()){<small class="muted"> Termină mai întâi testul în desfășurare.</small>}
 }
</section>`})
export class ChallengeComponent {
 compact=input(false);
 store=inject(Store);sessions=inject(Sessions);shared=signal('');
 key=dayKey();label=dayLabel(this.key);
 ids=challengeIds(this.key,LITE_ACTIVE);
 done=computed(()=>{const a=[...this.store.attempts()].reverse().find((x:Attempt)=>challengeDay(x,LITE_ACTIVE)===this.key);return a?{id:a.id,...shareGrid(a,LITE_BY_ID,this.ids)}:null;});
 start(){this.sessions.startPractice(this.ids);}
 async share(d:{text:string;points:number;max:number}){
  const text=`Rezi · Provocarea zilei, ${this.label}\n${d.points}/${d.max} puncte\n${d.text}\n${location.origin}/provocare`;
  try{if(navigator.share){await navigator.share({text});this.shared.set('Trimis');return;}}catch{/* cancelled */}
  try{await navigator.clipboard.writeText(text);this.shared.set('Copiat');}catch{this.shared.set('Nu s-a putut copia');}
  setTimeout(()=>this.shared.set(''),2500);
 }
}

// The /provocare page: the challenge card plus the last week's results.
@Component({standalone:true,imports:[ChallengeComponent,RouterLink],template:`
<div class="page-heading"><div><div class="eyebrow">ÎN FIECARE ZI, ACEEAȘI PROVOCARE PENTRU TOȚI</div><h1>Provocarea zilei.</h1><p>Zece grile alese la miezul nopții, identice pentru toți cei care învață cu Rezi. Rezolvă, compară, discută-le cu colegii.</p></div></div>
<div class="challenge-page"><app-challenge/>
 <section class="panel"><h3>Ultimele tale provocări</h3>
  @for(h of history();track h.key){<div class="challenge-row"><span>{{h.label}}</span><span class="challenge-grid small">{{h.text}}</span><b>{{h.points}}/{{h.max}}</b><a class="text-link" [routerLink]="['/rezultat',h.id]">Detalii</a></div>}
  @empty{<p class="muted">Încă nu ai rezolvat nicio provocare.</p>}
 </section></div>`})
export class ChallengePageComponent {
 store=inject(Store);
 history=computed(()=>this.store.attempts().map(a=>({a,key:challengeDay(a,LITE_ACTIVE)})).filter(x=>x.key).sort((x,y)=>y.key!.localeCompare(x.key!)).slice(0,14).map(x=>({key:x.key!,id:x.a.id,label:dayLabel(x.key!),...shareGrid(x.a,LITE_BY_ID,challengeIds(x.key!,LITE_ACTIVE))})));
}
