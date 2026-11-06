import {Component,computed,inject,input,signal} from '@angular/core';
import {Notes} from './notes';
import {IconComponent} from './icon.component';

// Save/note controls for one question; the note autosaves while typing.
@Component({selector:'app-note',standalone:true,imports:[IconComponent],template:`
<div class="note-tools">
 <button type="button" class="note-btn" [class.on]="notes.isSaved(qid())" (click)="notes.toggleSaved(qid())" [attr.aria-pressed]="notes.isSaved(qid())">{{notes.isSaved(qid())?'★ Salvată':'☆ Salvează'}}</button>
 <button type="button" class="note-btn" [class.on]="hasNote()" (click)="open.set(!open())" [attr.aria-expanded]="open()">✎ {{hasNote()?'Notița ta':'Adaugă o notiță'}}</button>
</div>
@if(open()||(hasNote()&&!compact())){
<label class="note-box"><span class="sr-only">Notița ta pentru această grilă</span><textarea rows="3" [value]="notes.note(qid())" (input)="save($any($event.target).value)" placeholder="Ce vrei să-ți amintești? O mnemonică, o confuzie de evitat, pagina de recitit…" (keydown)="$event.stopPropagation()"></textarea><small>{{status()}}</small></label>}`})
export class NoteComponent {
 qid=input.required<string>();compact=input(false);
 notes=inject(Notes);open=signal(false);status=signal('Se salvează automat, pe acest dispozitiv.');
 hasNote=computed(()=>!!this.notes.notes()[this.qid()]);
 private timer:ReturnType<typeof setTimeout>|undefined;
 save(text:string){clearTimeout(this.timer);this.status.set('…');this.timer=setTimeout(()=>{this.notes.setNote(this.qid(),text);this.status.set('Salvată.');},400);}
}
