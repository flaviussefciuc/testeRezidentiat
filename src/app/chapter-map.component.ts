import {Component,computed,inject,input} from '@angular/core';
import {RouterLink} from '@angular/router';
import type {Answer} from './models';
import {Bank} from './bank';
import {TOPICS} from './topics';
import {exact,score,maximum} from './scoring';
import {insightOf} from './insight';
import {splitSection} from './sheets';

// For a test focused on one chapter: how each textbook heading went.
@Component({selector:'app-chapter-map',standalone:true,imports:[RouterLink],template:`
@if(map();as m){
<section class="panel chapter-map">
 <div class="section-heading"><div><h3>Harta capitolului · {{m.name}}</h3><p>Fiecare secțiune a manualului din acest test: verde complet corect, galben parțial, roșu zero. Apasă pe o secțiune ca s-o recitești în fișă.</p></div><a class="text-link" [routerLink]="['/fise',m.topic]">Fișa capitolului →</a></div>
 <div class="heading-chips">@for(h of m.headings;track h.title){<a class="heading-chip" [attr.data-r]="h.result" [routerLink]="['/fise',m.topic]" [title]="h.title+' · '+h.points+'/'+h.max+' puncte'">{{h.title}}<b>{{h.points}}/{{h.max}}</b></a>}</div>
</section>}`})
export class ChapterMapComponent {
 answers=input<Answer[]>([]);bank=inject(Bank);
 map=computed(()=>{
  const rows=this.answers().map(a=>({a,q:this.bank.byId().get(a.questionId)})).filter(r=>!!r.q);
  if(!rows.length)return null;
  const counts=new Map<string,number>();for(const r of rows)counts.set(r.q!.topicId,(counts.get(r.q!.topicId)??0)+1);
  const [topic,n]=[...counts].sort((x,y)=>y[1]-x[1])[0];
  if(n/rows.length<0.6||n<5)return null;
  const by=new Map<string,{title:string;points:number;max:number;exact:number;total:number;page:number}>();
  for(const r of rows){if(r.q!.topicId!==topic)continue;const ref=insightOf(r.q!).reference;if(!ref)continue;const title=splitSection(ref.section).head;const h=by.get(title)??{title,points:0,max:0,exact:0,total:0,page:ref.pages[0]};h.points+=score(r.q!,r.a.selected);h.max+=maximum(r.q!);h.exact+=Number(exact(r.q!,r.a.selected));h.total++;by.set(title,h);}
  if(by.size<4)return null;
  const headings=[...by.values()].sort((x,y)=>x.page-y.page).map(h=>({...h,result:h.exact===h.total?'ok':h.points>0?'partial':'zero'}));
  return {topic,name:TOPICS.find(t=>t.id===topic)?.name??topic,headings};
 });
}
