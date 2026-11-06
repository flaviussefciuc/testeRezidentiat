import {Component,computed,input} from '@angular/core';
import {emphasize} from './emphasis';

// A question stem with its decisive words emphasised (see emphasis.ts).
@Component({selector:'app-stem',standalone:true,template:`@for(s of segs();track $index){@if(s.k==='neg'){<strong class="em-neg" title="Atenție la polaritate">{{s.t}}</strong>}@else if(s.k==='qual'){<strong class="em-qual">{{s.t}}</strong>}@else{<span>{{s.t}}</span>}}`,styles:[`:host{display:contents}`]})
export class StemComponent {text=input('');segs=computed(()=>emphasize(this.text()));}
