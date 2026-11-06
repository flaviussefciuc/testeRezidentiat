import {effect,inject,Injectable,signal} from '@angular/core';
import {Store} from './store';

// Personal notes and saved questions, kept on this device per account.
export interface Note {text:string;at:number}
interface Saved {notes:Record<string,Note>;saved:Record<string,number>}
const key=(owner:string)=>`rezi:notes:${owner}`;
function load(owner:string):Saved{try{const v=JSON.parse(localStorage.getItem(key(owner))??'null');return v&&typeof v==='object'?{notes:v.notes??{},saved:v.saved??{}}:{notes:{},saved:{}};}catch{return {notes:{},saved:{}};}}

@Injectable({providedIn:'root'})
export class Notes {
 private store=inject(Store);
 readonly notes=signal<Record<string,Note>>({});
 readonly saved=signal<Record<string,number>>({});
 private owner='';
 constructor(){
  // Follow the signed-in account: guest notes stay separate from account notes.
  effect(()=>{const owner=this.store.owner();if(owner!==this.owner){this.owner=owner;const v=load(owner);this.notes.set(v.notes);this.saved.set(v.saved);}});
 }
 private persist(){try{localStorage.setItem(key(this.owner),JSON.stringify({notes:this.notes(),saved:this.saved()}));}catch{/* storage full or private mode */}}
 note(id:string){return this.notes()[id]?.text??'';}
 setNote(id:string,text:string){const next={...this.notes()};if(text.trim())next[id]={text,at:Date.now()};else delete next[id];this.notes.set(next);this.persist();}
 isSaved(id:string){return !!this.saved()[id];}
 toggleSaved(id:string){const next={...this.saved()};if(next[id])delete next[id];else next[id]=Date.now();this.saved.set(next);this.persist();}
}
