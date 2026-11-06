import {Component,ElementRef,HostListener,inject,signal} from '@angular/core';
import {FONTS,Prefs,type ReadingFont,type Theme} from './prefs';

// One place for how the app looks: theme, text size, reading font, spacing, motion.
@Component({selector:'app-display',standalone:true,template:`
<button class="icon-button display-btn" (click)="open.set(!open())" [attr.aria-expanded]="open()" aria-haspopup="dialog" title="Afișare: temă, text, font"><span class="aa">Aa</span></button>
@if(open()){<section class="display-panel" role="dialog" aria-label="Setări de afișare">
 <span class="display-label">Temă</span>
 <div class="segmented">@for(t of themes;track t.id){<button [class.on]="prefs.theme()===t.id" (click)="prefs.theme.set(t.id)">{{t.label}}</button>}</div>
 <span class="display-label">Mărimea textului · {{prefs.readLabel}}</span>
 <div class="display-size"><button class="icon-button" (click)="prefs.smaller()" [disabled]="prefs.read()<=0.92" aria-label="Text mai mic"><span class="aa small">A</span></button><input type="range" min="0" max="4" step="1" [value]="steps.indexOf(prefs.read())" (input)="prefs.read.set(steps[+$any($event.target).value])" aria-label="Mărimea textului"><button class="icon-button" (click)="prefs.bigger()" [disabled]="prefs.read()>=1.4" aria-label="Text mai mare"><span class="aa">A</span></button></div>
 <span class="display-label">Font pentru grile și fișe</span>
 <div class="font-options">@for(f of fonts;track f.id){<label class="font-option" [class.on]="prefs.font()===f.id"><input type="radio" name="font" [checked]="prefs.font()===f.id" (change)="prefs.font.set(f.id)"><span><strong>{{f.label}}</strong><em [style.font-family]="f.family">Hidramniosul se asociază cu diabetul matern.</em></span></label>}</div>
 <label class="check-line"><input type="checkbox" [checked]="prefs.airy()" (change)="prefs.airy.set(!prefs.airy())">Rânduri mai aerisite</label>
 <label class="check-line"><input type="checkbox" [checked]="prefs.calm()" (change)="prefs.calm.set(!prefs.calm())">Fără animații</label>
</section>}`,styles:[`:host{position:relative;display:inline-flex}`]})
export class DisplayComponent {
 prefs=inject(Prefs);host=inject(ElementRef);open=signal(false);
 steps=[0.92,1,1.12,1.25,1.4];
 themes:{id:Theme;label:string}[]=[{id:'auto',label:'Automată'},{id:'light',label:'Luminoasă'},{id:'dark',label:'Întunecată'}];
 fonts=(Object.keys(FONTS) as ReadingFont[]).map(id=>({id,...FONTS[id]}));
 @HostListener('document:click',['$event']) outside(e:MouseEvent){if(this.open()&&!this.host.nativeElement.contains(e.target))this.open.set(false);}
 @HostListener('document:keydown.escape') esc(){this.open.set(false);}
}
