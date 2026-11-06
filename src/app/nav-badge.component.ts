import {Component,computed,inject,input} from '@angular/core';
import {Sessions} from './session';
import {Planner} from './planner';
import {Notes} from './notes';

// Live counters beside menu entries: reviews due, today's plan, notes. Loaded after the
// shell paints, together with the question index they depend on.
@Component({selector:'app-nav-badge',standalone:true,template:`@if(badge();as b){<span class="nav-badge" [class.hot]="b.hot">{{b.text}}</span>}`,styles:[`:host{display:contents}`]})
export class NavBadgeComponent {
 path=input('');dot=input(false);
 private sessions=inject(Sessions);private planner=inject(Planner);private notes=inject(Notes);
 badge=computed(()=>{
  const p=this.path();
  if(p==='/teste'){const due=this.sessions.due().length;return due?{text:this.dot()?'':String(due),hot:true}:null;}
  if(p==='/plan'){const d=this.planner.todayPlan();if(!d)return null;const v=this.planner.todayProgress();return {text:this.dot()?'':v+'%',hot:v<100};}
  if(p==='/notite'){const n=Object.keys(this.notes.notes()).length+Object.keys(this.notes.saved()).length;return n?{text:this.dot()?'':String(n),hot:false}:null;}
  return null;
 });
}

