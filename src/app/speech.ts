import {Injectable,signal} from '@angular/core';

// Text-to-speech with the device's voices (Web Speech API), preferring Romanian.
// A queue of segments can be played like a podcast: play/pause, previous/next, speed.
export interface Segment {id:string;text:string}
const RATE_KEY='rezi:speech-rate';

@Injectable({providedIn:'root'})
export class Speech {
 readonly supported=typeof window!=='undefined'&&'speechSynthesis' in window;
 readonly playing=signal(false);
 readonly index=signal(-1);
 readonly queue=signal<Segment[]>([]);
 readonly rate=signal(this.loadRate());
 readonly romanian=signal(false);
 private voice:SpeechSynthesisVoice|null=null;
 private token=0;
 constructor(){
  if(!this.supported)return;
  const pick=()=>{const voices=speechSynthesis.getVoices();this.voice=voices.find(v=>/^ro(-|_|$)/i.test(v.lang))??null;this.romanian.set(!!this.voice);};
  pick();speechSynthesis.addEventListener?.('voiceschanged',pick);
 }
 private loadRate(){try{const r=Number(localStorage.getItem(RATE_KEY));return r>=0.6&&r<=2?r:1;}catch{return 1;}}
 setRate(r:number){this.rate.set(r);try{localStorage.setItem(RATE_KEY,String(r));}catch{/* storage unavailable */}if(this.playing())this.playFrom(this.index());}
 // Plays a list of segments from the start (or a given index).
 play(queue:Segment[],from=0){this.queue.set(queue);this.playFrom(from);}
 say(text:string){this.play([{id:'once',text}]);}
 private playFrom(i:number){
  if(!this.supported)return;
  const token=++this.token;speechSynthesis.cancel();
  const q=this.queue();if(i<0||i>=q.length){this.stop();return;}
  this.index.set(i);this.playing.set(true);
  const u=new SpeechSynthesisUtterance(q[i].text);u.lang='ro-RO';if(this.voice)u.voice=this.voice;u.rate=this.rate();
  u.onend=()=>{if(token===this.token)this.playFrom(i+1);};
  u.onerror=()=>{if(token===this.token)this.playing.set(false);};
  speechSynthesis.speak(u);
 }
 toggle(){if(!this.supported)return;if(this.playing()){this.token++;speechSynthesis.cancel();this.playing.set(false);}else this.playFrom(Math.max(0,this.index()));}
 next(){this.playFrom(this.index()+1);}
 prev(){this.playFrom(Math.max(0,this.index()-1));}
 stop(){if(!this.supported)return;this.token++;speechSynthesis.cancel();this.playing.set(false);this.index.set(-1);this.queue.set([]);}
}
// Reads "A." style letters naturally and drops symbols that speech engines spell out.
export const speakable=(s:string)=>s.replace(/\s*[—–]\s*/g,', ').replace(/±/g,' plus minus ').replace(/≥/g,' mai mare sau egal cu ').replace(/≤/g,' mai mic sau egal cu ').replace(/>/g,' peste ').replace(/</g,' sub ');
