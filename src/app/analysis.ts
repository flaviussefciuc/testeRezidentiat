import type {Answer} from './models';
import {maximum,score,type Scorable} from './scoring';

// Where the missing points went, under the official rules: CS is all-or-nothing; a CM
// answer with 2–4 marks earns one point per option classified correctly, otherwise zero.
export interface Losses {max:number;points:number;omitted:number;falseMarks:number;wrongCs:number;voidCm:number;blank:number}
export interface MarkHabit {answered:number;marked:number;truth:number;diff:Record<string,number>}

export function losses(answers:readonly Answer[],lookup:ReadonlyMap<string,Scorable>):Losses{
 const out:Losses={max:0,points:0,omitted:0,falseMarks:0,wrongCs:0,voidCm:0,blank:0};
 for(const a of answers){
  const q=lookup.get(a.questionId);if(!q)continue;
  const max=maximum(q),pts=score(q,a.selected);out.max+=max;out.points+=pts;
  if(!a.selected.length){out.blank+=max;continue;}
  if(q.type==='CS'){if(pts===0)out.wrongCs+=max;continue;}
  if(a.selected.length<2||a.selected.length>4){out.voidCm+=max;continue;}
  out.omitted+=q.correct.filter(i=>!a.selected.includes(i)).length;
  out.falseMarks+=a.selected.filter(i=>!q.correct.includes(i)).length;
 }
 return out;
}

// How many options the student marks on CM questions compared with the key.
export function markHabit(answers:readonly Answer[],lookup:ReadonlyMap<string,Scorable>):MarkHabit{
 const h:MarkHabit={answered:0,marked:0,truth:0,diff:{'-2':0,'-1':0,'0':0,'+1':0,'+2':0}};
 for(const a of answers){
  const q=lookup.get(a.questionId);if(!q||q.type!=='CM'||!a.selected.length)continue;
  h.answered++;h.marked+=a.selected.length;h.truth+=q.correct.length;
  const d=Math.max(-2,Math.min(2,a.selected.length-q.correct.length));h.diff[d>0?`+${d}`:String(d)]++;
 }
 return h;
}

export function habitTip(l:Losses,h:MarkHabit):string{
 if(l.voidCm)return 'Ai pierdut grile întregi de complement multiplu marcând o singură variantă sau toate cinci. La CM marchează mereu între 2 și 4 variante: chiar și cu o variantă nesigură în plus, păstrezi punctele celorlalte.';
 if(h.answered<5)return 'După câteva grile de complement multiplu, aici vezi dacă tinzi să marchezi prea puține sau prea multe variante.';
 const avgMarked=h.marked/h.answered,avgTruth=h.truth/h.answered;
 if(l.omitted>l.falseMarks*1.5&&avgMarked<avgTruth-0.2)return `Marchezi în medie ${avgMarked.toFixed(1)} variante, iar cheile au ${avgTruth.toFixed(1)}: pierzi mai multe puncte prin variante adevărate omise decât prin bifări greșite. Fiecare variantă valorează un punct în ambele sensuri, așa că merită bifată orice variantă pe care o crezi mai degrabă adevărată decât falsă.`;
 if(l.falseMarks>l.omitted*1.5&&avgMarked>avgTruth+0.2)return `Marchezi în medie ${avgMarked.toFixed(1)} variante, iar cheile au ${avgTruth.toFixed(1)}: pierzi mai multe puncte prin bifări greșite. Lasă nebifată o variantă când nu o crezi mai degrabă adevărată decât falsă.`;
 return `Marchezi în medie ${avgMarked.toFixed(1)} variante, cât au și cheile (${avgTruth.toFixed(1)}): omisiunile și bifările greșite sunt echilibrate, deci punctele pierdute vin din cunoștințe, nu din strategie.`;
}
