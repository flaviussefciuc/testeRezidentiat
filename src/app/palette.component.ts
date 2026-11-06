import {Component,computed,effect,ElementRef,inject,signal,viewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from './store';
import {Prefs} from './prefs';
import {Sessions} from './session';
import {Planner} from './planner';
import {TOPICS} from './topics';
import {IconComponent} from './icon.component';
import {fold} from './text';
import {Ui} from './ui';
import {challengeIds,dayKey} from './challenge';
import {LITE_ACTIVE} from './bank';

interface Command {id:string;label:string;hint:string;icon:string;run:()=>void}

// Ctrl/⌘+K: jump anywhere or run an action without leaving the keyboard.
@Component({selector:'app-palette',standalone:true,imports:[IconComponent],template:`
@if(open()){<div class="modal-backdrop palette-backdrop" (click)="close()"><section class="palette" role="dialog" aria-modal="true" aria-label="Comenzi rapide" (click)="$event.stopPropagation()">
 <label class="palette-input"><app-icon name="search"/><input #box [value]="query()" (input)="query.set($any($event.target).value);active.set(0)" (keydown)="key($event)" placeholder="Pagină, capitol sau acțiune… (ex. cardio, recapitulare, temă)" aria-label="Caută o comandă" autocomplete="off"><kbd>Esc</kbd></label>
 <ul class="palette-list" role="listbox">@for(c of results();track c.id;let i=$index){<li role="option" [attr.aria-selected]="i===active()" [class.on]="i===active()" (mouseenter)="active.set(i)" (click)="run(c)"><app-icon [name]="c.icon"/><span>{{c.label}}</span><small>{{c.hint}}</small></li>}@empty{<li class="palette-empty">Nicio comandă. Apasă Enter pentru a căuta „{{query()}}” în bancă.</li>}</ul>
 <p class="palette-foot"><kbd>↑</kbd><kbd>↓</kbd> alege · <kbd>Enter</kbd> deschide · <kbd>Ctrl</kbd>+<kbd>K</kbd> oricând</p>
</section></div>}`})
export class PaletteComponent {
 store=inject(Store);prefs=inject(Prefs);sessions=inject(Sessions);planner=inject(Planner);router=inject(Router);
 ui=inject(Ui);open=this.ui.palette;query=signal('');active=signal(0);
 private focusOnOpen=effect(()=>{if(this.open()){this.query.set('');this.active.set(0);setTimeout(()=>this.box()?.nativeElement.focus());}});
 box=viewChild<ElementRef<HTMLInputElement>>('box');
 private go(path:string,params?:Record<string,string>){void this.router.navigate([path],params?{queryParams:params}:{});}
 commands=computed<Command[]>(()=>{
  const due=this.sessions.due().length,plan=this.planner.todayPlan(),busy=!!this.store.draft();
  const pages:Command[]=[
   {id:'p-home',label:'Privire de ansamblu',hint:'Pagină',icon:'dashboard',run:()=>this.go('/')},
   {id:'p-plan',label:'Planul meu',hint:'Pagină',icon:'calendar',run:()=>this.go('/plan')},
   {id:'p-tests',label:'Teste și simulări',hint:'Pagină',icon:'book',run:()=>this.go('/teste')},
   {id:'p-tf',label:'Adevărat sau fals',hint:'Pagină',icon:'spark',run:()=>this.go('/adevarat-fals')},
   {id:'p-challenge',label:'Provocarea zilei',hint:'Pagină',icon:'target',run:()=>this.go('/provocare')},
   {id:'p-paper',label:'Test tipărit',hint:'Pagină',icon:'printer',run:()=>this.go('/tiparit')},
   {id:'p-sheets',label:'Fișe de recapitulare',hint:'Pagină',icon:'sheet',run:()=>this.go('/fise')},
   {id:'p-reread',label:'Pagini de recitit',hint:'Pagină',icon:'bookmark',run:()=>this.go('/recitire')},
   {id:'p-notes',label:'Notițele mele',hint:'Pagină',icon:'pen',run:()=>this.go('/notite')},
   {id:'p-search',label:'Caută în bancă',hint:'Pagină',icon:'search',run:()=>this.go('/cauta')},
   {id:'p-progress',label:'Progresul meu',hint:'Pagină',icon:'chart',run:()=>this.go('/progres')},
   {id:'p-resources',label:'Tematică și resurse',hint:'Pagină',icon:'leaf',run:()=>this.go('/bibliografie')},
   {id:'p-account',label:'Contul meu',hint:'Pagină',icon:'user',run:()=>this.go('/cont')},
  ];
  const actions:Command[]=[
   ...(busy?[{id:'a-resume',label:'Continuă testul în desfășurare',hint:'Acțiune',icon:'arrow',run:()=>this.go('/test')}]:[]),
   ...(due&&!busy?[{id:'a-due',label:`Recapitulează ${Math.min(20,due)} grile scadente`,hint:'Recapitulare programată',icon:'refresh',run:()=>this.sessions.startPractice(this.sessions.due().slice(0,20))}]:[]),
   ...(plan?.items.length&&!busy?[{id:'a-plan',label:`Continuă planul: ${plan.items[0].name}`,hint:'Planul de azi',icon:'calendar',run:()=>this.planner.start(plan.items[0].topicId,plan.items[0].count)}]:[]),
   ...(!busy?[{id:'a-challenge',label:'Începe provocarea zilei',hint:'10 grile',icon:'target',run:()=>this.sessions.startPractice(challengeIds(dayKey(),LITE_ACTIVE))}]:[]),
   {id:'a-sim',label:'Simulare de examen (52, 100 sau 200 de grile)',hint:'Acțiune',icon:'clock',run:()=>this.go('/teste')},
   {id:'a-theme',label:'Schimbă tema (automată / întunecată / luminoasă)',hint:`Acum: ${this.prefs.themeLabel()}`,icon:'moon',run:()=>this.prefs.cycleTheme()},
   {id:'a-bigger',label:'Text mai mare',hint:this.prefs.readLabel,icon:'search',run:()=>this.prefs.bigger()},
   {id:'a-smaller',label:'Text mai mic',hint:this.prefs.readLabel,icon:'search',run:()=>this.prefs.smaller()},
   {id:'a-focus',label:this.prefs.focus()?'Ieși din modul concentrare':'Mod concentrare în teste',hint:'Z în timpul testului',icon:'focus',run:()=>this.prefs.focus.set(!this.prefs.focus())},
   {id:'a-export',label:'Exportă rezultatele (JSON)',hint:'Copie de siguranță',icon:'download',run:()=>this.store.export()},
  ];
  const chapters:Command[]=TOPICS.flatMap(t=>[
   {id:'c-'+t.id,label:`Exersează: ${t.name}`,hint:`${t.book} · cap. ${t.chapter}`,icon:'book',run:()=>this.go('/teste',{topic:t.id})},
   {id:'s-'+t.id,label:`Fișa: ${t.name}`,hint:`${t.book} · p. ${t.pages}`,icon:'sheet',run:()=>this.go('/fise/'+t.id)},
  ]);
  return [...actions,...pages,...chapters];
 });
 results=computed(()=>{
  const q=fold(this.query().trim());if(!q)return this.commands().slice(0,9);
  const terms=q.split(/\s+/);
  return this.commands().map(c=>{const text=fold(c.label+' '+c.hint);if(!terms.every(t=>text.includes(t)))return null;const label=fold(c.label);return {c,score:(label.startsWith(terms[0])?3:0)+(label.includes(q)?2:0)+(c.id.startsWith('a-')?1:0)};}).filter((x):x is {c:Command;score:number}=>!!x).sort((a,b)=>b.score-a.score).slice(0,10).map(x=>x.c);
 });
 show(){this.open.set(true);}
 close(){this.open.set(false);}
 run(c:Command){this.close();c.run();}
 key(e:KeyboardEvent){
  const list=this.results();
  if(e.key==='ArrowDown'){e.preventDefault();this.active.set(Math.min(list.length-1,this.active()+1));}
  else if(e.key==='ArrowUp'){e.preventDefault();this.active.set(Math.max(0,this.active()-1));}
  else if(e.key==='Enter'){e.preventDefault();const c=list[this.active()];if(c)this.run(c);else if(this.query().trim()){this.close();this.go('/cauta',{q:this.query().trim()});}}
  else if(e.key==='Escape'){e.preventDefault();this.close();}
  e.stopPropagation();
 }
}
