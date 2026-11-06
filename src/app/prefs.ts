import {effect,Injectable,signal} from '@angular/core';

// Per-device display preferences. They change only how the app looks, so they stay
// in this browser and are applied as attributes/variables on <html>.
const KEY='rezi:prefs';
export const READING_STEPS=[0.92,1,1.12,1.25,1.4];
interface Saved {read?:number}
function load():Saved{try{return JSON.parse(localStorage.getItem(KEY)??'{}')??{};}catch{return {};}}

@Injectable({providedIn:'root'})
export class Prefs {
 private saved=load();
 readonly read=signal<number>(READING_STEPS.includes(this.saved.read!)?this.saved.read!:1);
 constructor(){
  effect(()=>{
   const read=this.read();
   document.documentElement.style.setProperty('--read',String(read));
   try{localStorage.setItem(KEY,JSON.stringify({...load(),read}));}catch{/* private mode: keep for this session only */}
  });
 }
 bigger(){const i=READING_STEPS.indexOf(this.read());if(i<READING_STEPS.length-1)this.read.set(READING_STEPS[i+1]);}
 smaller(){const i=READING_STEPS.indexOf(this.read());if(i>0)this.read.set(READING_STEPS[i-1]);}
 get readLabel(){return Math.round(this.read()*100)+'%';}
}
