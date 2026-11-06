import {Component,signal} from '@angular/core';

// Shows whether the app and the question bank are stored on this device, and downloads
// everything for offline use (through the service worker's caches).
@Component({selector:'app-offline',standalone:true,template:`
@if(supported){
<div class="offline-card" [class.ready]="state()==='ready'">
 @switch(state()){
  @case('ready'){<strong>✓ Disponibil offline</strong><small>{{detail()}}</small>}
  @case('busy'){<strong>Se descarcă… {{progress()}}%</strong><div class="progress-track"><span [style.width.%]="progress()"></span></div>}
  @default{<strong>Exersează și fără internet</strong><small>Descarcă banca (≈5 MB) și toate paginile pe acest dispozitiv.</small><button class="button secondary small-button" (click)="download()">Descarcă pentru offline</button>}
 }
</div>}`})
export class OfflineComponent {
 supported=typeof caches!=='undefined'&&'serviceWorker' in navigator&&!!navigator.serviceWorker.controller;
 state=signal<'unknown'|'missing'|'busy'|'ready'>('unknown');progress=signal(0);detail=signal('');
 constructor(){if(this.supported)void this.check();}
 private async manifest(){const r=await fetch('/sw-precache.json',{cache:'no-store'});return r.json() as Promise<{build:string;files:string[];bank:string[]}>;}
 private async check(){
  try{
   const m=await this.manifest();let missing=0;
   for(const f of [...m.files,...m.bank])if(!(await caches.match(f)))missing++;
   const history=!!(await caches.match(m.bank[0].replace('active.json','history.json')));
   if(missing){this.state.set('missing');return;}
   const est=await navigator.storage?.estimate?.();
   this.detail.set(`${m.files.length} fișiere și banca de grile${history?' (inclusiv istoricul)':''}${est?.usage?` · ${(est.usage/1048576).toFixed(1)} MB folosiți`:''}`);
   this.state.set('ready');
  }catch{this.state.set('missing');}
 }
 async download(){
  this.state.set('busy');this.progress.set(0);
  try{
   void navigator.storage?.persist?.();
   const m=await this.manifest(),all=[...m.files,...m.bank,m.bank[0].replace('active.json','history.json')];
   let done=0;
   // Requests go through the service worker, which stores them in its caches.
   for(const f of all){await fetch(f).catch(()=>undefined);done++;this.progress.set(Math.round(done/all.length*100));}
   await this.check();
  }catch{this.state.set('missing');}
 }
}
