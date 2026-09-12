import {Component,inject,signal} from '@angular/core';
import {RouterLink,RouterLinkActive,RouterOutlet} from '@angular/router';
import {IconComponent} from './icon.component';
import {Store} from './store';
@Component({selector:'app-root',standalone:true,imports:[RouterLink,RouterLinkActive,RouterOutlet,IconComponent],template:`
<a class="skip" href="#content">Sari la conținut</a>
<aside class="sidebar" [class.mobile-open]="menu()">
 <a routerLink="/" class="brand" (click)="menu.set(false)"><span class="brand-mark">r<span>•</span></span><span>rezi<span class="brand-dot">.</span><small>UN PAS MAI APROAPE</small></span></a>
 <div class="workspace-label"><span class="status-dot"></span> Medicină <span class="year-pill">2026</span></div>
 <div class="nav-caption">SPAȚIUL TĂU DE ÎNVĂȚARE</div>
 <nav aria-label="Navigare principală">
 @for(item of nav;track item.path){<a [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="{exact:item.path==='/' }" (click)="menu.set(false)"><app-icon [name]="item.icon"/>{{item.label}}</a>}
 </nav>
 <div class="sidebar-tip"><app-icon name="leaf"/><strong>Puțin, în fiecare zi.</strong><p>Consecvența transformă întrebările de azi în siguranța de mâine.</p></div>
 <a class="profile" routerLink="/cont" (click)="menu.set(false)"><span class="avatar"><app-icon name="user"/></span><span><strong>{{store.user() ? 'Contul meu' : 'Bine ai venit'}}</strong><small>{{store.user() ? 'Progres sincronizat' : 'Conectează-te pentru sincronizare'}}</small></span><app-icon name="chevron"/></a>
</aside>
<div class="shell"><header class="topbar"><button class="mobile-toggle icon-button" aria-label="Deschide meniul" (click)="menu.set(!menu())"><app-icon name="menu"/></button><span class="top-breadcrumb">Pregătire rezidențiat <span>/</span> <strong>Medicină 2026</strong></span><a routerLink="/bibliografie" class="exam-date"><span class="status-dot"></span>15 noiembrie 2026</a></header>
<main id="content"><router-outlet/></main>
<footer>Rezi · Învață cu direcție.<span>Grile originale de antrenament · Fără afiliere cu Ministerul Sănătății</span></footer></div>
`,})
export class AppComponent {store=inject(Store);menu=signal(false);nav=[{path:'/',label:'Privire de ansamblu',icon:'dashboard'},{path:'/teste',label:'Antrenează-te',icon:'book'},{path:'/progres',label:'Progresul meu',icon:'chart'},{path:'/bibliografie',label:'Tematică și resurse',icon:'leaf'}];}
