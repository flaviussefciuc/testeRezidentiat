import {effect,Injectable,signal} from '@angular/core';

// Per-device display preferences. They change only how the app looks, so they stay
// in this browser and are applied as attributes/variables on <html>. index.html
// applies the saved values before the app starts, so there is no flash on load.
const KEY='rezi:prefs';
export const READING_STEPS=[0.92,1,1.12,1.25,1.4];
export type Theme='auto'|'light'|'dark';
export type ReadingFont='sans'|'serif'|'hyper';
interface Saved {read?:number;theme?:Theme;focus?:boolean;font?:ReadingFont;airy?:boolean;calm?:boolean}
function load():Saved{try{return JSON.parse(localStorage.getItem(KEY)??'{}')??{};}catch{return {};}}
function save(patch:Saved){try{localStorage.setItem(KEY,JSON.stringify({...load(),...patch}));}catch{/* private mode: keep for this session only */}}
const THEME_LABEL:Record<Theme,string>={auto:'automată (ca sistemul)',light:'luminoasă',dark:'întunecată'};
// Reading fonts are loaded only when chosen.
export const FONTS:Record<ReadingFont,{label:string;family:string;css?:string}>={
 sans:{label:'DM Sans (implicit)',family:"'DM Sans',sans-serif"},
 serif:{label:'Literata · serif pentru citit mult',family:"'Literata',Georgia,serif",css:'https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,600;7..72,700&display=swap'},
 hyper:{label:'Atkinson Hyperlegible · lizibilitate maximă',family:"'Atkinson Hyperlegible',sans-serif",css:'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap'},
};

@Injectable({providedIn:'root'})
export class Prefs {
 private saved=load();
 private media=typeof matchMedia==='function'?matchMedia('(prefers-color-scheme: dark)'):null;
 private systemDark=signal(!!this.media?.matches);
 readonly read=signal<number>(READING_STEPS.includes(this.saved.read!)?this.saved.read!:1);
 readonly focus=signal<boolean>(!!this.saved.focus);
 readonly theme=signal<Theme>(['auto','light','dark'].includes(this.saved.theme!)?this.saved.theme!:'auto');
 readonly font=signal<ReadingFont>(this.saved.font&&this.saved.font in FONTS?this.saved.font:'sans');
 readonly airy=signal<boolean>(!!this.saved.airy);
 readonly calm=signal<boolean>(!!this.saved.calm);
 constructor(){
  this.media?.addEventListener('change',e=>this.systemDark.set(e.matches));
  effect(()=>save({focus:this.focus()}));
  effect(()=>{const read=this.read();document.documentElement.style.setProperty('--read',String(read));save({read});});
  effect(()=>{
   const theme=this.theme(),dark=theme==='dark'||(theme==='auto'&&this.systemDark());
   document.documentElement.dataset['theme']=dark?'dark':'light';
   document.querySelector('meta[name="theme-color"]')?.setAttribute('content',dark?'#121714':'#173e36');
   save({theme});
  });
  effect(()=>{
   const font=this.font(),f=FONTS[font],root=document.documentElement;
   if(f.css&&!document.querySelector(`link[data-font="${font}"]`)){const l=document.createElement('link');l.rel='stylesheet';l.href=f.css;l.dataset['font']=font;document.head.appendChild(l);}
   root.style.setProperty('--reading-font',f.family);root.dataset['font']=font;save({font});
  });
  effect(()=>{document.documentElement.toggleAttribute('data-airy',this.airy());save({airy:this.airy()});});
  effect(()=>{document.documentElement.toggleAttribute('data-calm',this.calm());save({calm:this.calm()});});
 }
 bigger(){const i=READING_STEPS.indexOf(this.read());if(i<READING_STEPS.length-1)this.read.set(READING_STEPS[i+1]);}
 smaller(){const i=READING_STEPS.indexOf(this.read());if(i>0)this.read.set(READING_STEPS[i-1]);}
 get readLabel(){return Math.round(this.read()*100)+'%';}
 cycleTheme(){this.theme.set(this.theme()==='auto'?'dark':this.theme()==='dark'?'light':'auto');}
 themeLabel(){return THEME_LABEL[this.theme()];}
}
