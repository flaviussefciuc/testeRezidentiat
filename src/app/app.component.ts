import {Component,computed,HostListener,inject,signal} from '@angular/core';
import {Router,RouterLink,RouterLinkActive,RouterOutlet} from '@angular/router';
import {IconComponent} from './icon.component';
import {Store} from './store';
import {Prefs} from './prefs';
import {Planner} from './planner';
import {dailyCounts,streak} from './activity';
@Component({selector:'app-root',standalone:true,imports:[RouterLink,RouterLinkActive,RouterOutlet,IconComponent],template:`
<a class="skip" href="#content">Sari la conținut</a>
<aside class="sidebar" [class.mobile-open]="menu()">
 <a routerLink="/" class="brand" (click)="menu.set(false)"><span class="brand-mark">r<span>•</span></span><span>rezi<span class="brand-dot">.</span><small>UN PAS MAI APROAPE</small></span></a>
 <div class="workspace-label"><span class="status-dot"></span> Medicină <span class="year-pill">2026</span></div>
 <div class="nav-caption">SPAȚIUL TĂU DE ÎNVĂȚARE</div>
 <nav aria-label="Navigare principală">
 @for(item of nav;track item.path){<a [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="{exact:item.path==='/' }" (click)="menu.set(false)"><app-icon [name]="item.icon"/>{{item.label}}</a>}
 </nav>
 @if(installable()){<button class="install-app" (click)="install()"><app-icon name="download"/><span><strong>Instalează aplicația</strong><small>Funcționează și fără internet</small></span></button>}
 <div class="sidebar-tip"><app-icon name="leaf"/><strong>Puțin, în fiecare zi.</strong><p>Consecvența transformă întrebările de azi în siguranța de mâine.</p></div>
 <a class="profile" routerLink="/cont" (click)="menu.set(false)"><span class="avatar"><app-icon name="user"/></span><span><strong>{{store.user() ? 'Contul meu' : 'Bine ai venit'}}</strong><small>{{store.user() ? 'Progres sincronizat' : 'Conectează-te pentru sincronizare'}}</small></span><app-icon name="chevron"/></a>
</aside>
<div class="shell"><header class="topbar"><button class="mobile-toggle icon-button" aria-label="Deschide meniul" (click)="menu.set(!menu())"><app-icon name="menu"/></button><span class="top-breadcrumb">Pregătire rezidențiat <span>/</span> <strong>Medicină 2026</strong></span><form class="top-search" role="search" (submit)="$event.preventDefault();search(q.value);q.blur()"><app-icon name="search"/><input #q id="top-search" name="q" placeholder="Caută în bancă…" aria-label="Caută în banca de grile" autocomplete="off"><kbd>/</kbd></form><div class="top-tools">@if(!online()){<span class="offline-pill" role="status" title="Poți exersa în continuare; rezultatele se sincronizează când revii online.">Offline</span>}<a routerLink="/plan" class="streak-chip" [class.hot]="streakInfo().current>=3" [attr.aria-label]="streakInfo().current+' zile la rând, '+streakInfo().today+' din '+planner.perDay()+' grile azi'" [title]="'Serie: '+streakInfo().current+' zile · Azi: '+streakInfo().today+' / '+planner.perDay()+' grile'"><app-icon name="flame"/><strong>{{streakInfo().current}}</strong><span class="streak-today"><i [style.width.%]="min(100,streakInfo().today/planner.perDay()*100)"></i></span><small>{{streakInfo().today}}/{{planner.perDay()}}</small></a><button class="icon-button theme-toggle" (click)="prefs.cycleTheme()" [attr.aria-label]="'Temă: '+prefs.themeLabel()+'. Schimbă tema'" [title]="'Temă: '+prefs.themeLabel()"><app-icon [name]="prefs.theme()==='auto'?'contrast':prefs.theme()==='dark'?'moon':'sun'"/></button><div class="reading-size" role="group" aria-label="Mărimea textului"><button class="icon-button" (click)="prefs.smaller()" [disabled]="prefs.read()<=0.92" aria-label="Text mai mic" title="Text mai mic"><span class="aa small">A</span></button><span class="reading-value" aria-live="polite">{{prefs.readLabel}}</span><button class="icon-button" (click)="prefs.bigger()" [disabled]="prefs.read()>=1.4" aria-label="Text mai mare" title="Text mai mare"><span class="aa">A</span></button></div><a routerLink="/bibliografie" class="exam-date"><span class="status-dot"></span>15 noiembrie 2026</a></div></header>
<main id="content"><router-outlet/></main>
<footer>Rezi · Învață cu direcție.<span>Grile originale de antrenament · Fără afiliere cu Ministerul Sănătății</span></footer></div>
`,})
export class AppComponent {store=inject(Store);prefs=inject(Prefs);router=inject(Router);planner=inject(Planner);min=Math.min;
 streakInfo=computed(()=>streak(dailyCounts(this.store.attempts())));
 online=signal(navigator.onLine);
 private installEvent:(Event&{prompt:()=>Promise<void>})|null=null;
 installable=signal(false);
 constructor(){
  window.addEventListener('online',()=>this.online.set(true));window.addEventListener('offline',()=>this.online.set(false));
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();this.installEvent=e as Event&{prompt:()=>Promise<void>};this.installable.set(true);});
  window.addEventListener('appinstalled',()=>{this.installEvent=null;this.installable.set(false);});
 }
 async install(){const e=this.installEvent;if(!e)return;this.installable.set(false);await e.prompt().catch(()=>{});this.installEvent=null;}
 search(q:string){if(q.trim())void this.router.navigate(['/cauta'],{queryParams:{q:q.trim()}});}
 // "/" focuses the search box from anywhere, unless the user is typing.
 @HostListener('document:keydown',['$event']) onKey(e:KeyboardEvent){const t=e.target as HTMLElement|null;if(e.key!=='/'||e.ctrlKey||e.metaKey||e.altKey||t?.isContentEditable||['INPUT','TEXTAREA','SELECT'].includes(t?.tagName??''))return;const box=document.getElementById('top-search') as HTMLInputElement|null;if(box&&box.offsetParent){e.preventDefault();box.focus();}}
menu=signal(false);nav=[{path:'/',label:'Privire de ansamblu',icon:'dashboard'},{path:'/plan',label:'Planul meu',icon:'calendar'},{path:'/teste',label:'Antrenează-te',icon:'book'},{path:'/fise',label:'Fișe de recapitulare',icon:'sheet'},{path:'/adevarat-fals',label:'Adevărat sau fals',icon:'spark'},{path:'/recitire',label:'Pagini de recitit',icon:'bookmark'},{path:'/notite',label:'Notițele mele',icon:'pen'},{path:'/progres',label:'Progresul meu',icon:'chart'},{path:'/bibliografie',label:'Tematică și resurse',icon:'leaf'}];}
