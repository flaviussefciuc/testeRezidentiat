import type {Answer,Confidence} from './models';
import {exact,type Scorable} from './scoring';

export const CONFIDENCE_LEVELS:Confidence[]=['sure','unsure','guess'];
export const CONFIDENCE_LABEL:Record<Confidence,string>={sure:'Sigur',unsure:'Nesigur',guess:'Ghicesc'};
export const CONFIDENCE_KEY:Record<Confidence,string>={sure:'S',unsure:'N',guess:'G'};

export interface CalibrationRow {level:Confidence|'none';label:string;total:number;exact:number;percent:number}
// How often each confidence level ends in a completely correct answer.
export function calibration(answers:Answer[],lookup:ReadonlyMap<string,Scorable>):CalibrationRow[]{
 const rows=new Map<Confidence|'none',CalibrationRow>([...CONFIDENCE_LEVELS,'none' as const].map(level=>[level,{level,label:level==='none'?'Fără marcaj':CONFIDENCE_LABEL[level],total:0,exact:0,percent:0}]));
 for(const a of answers){
  const q=lookup.get(a.questionId);if(!q||!a.selected.length)continue;
  const row=rows.get(a.confidence??'none')!;row.total++;if(exact(q,a.selected))row.exact++;
 }
 for(const row of rows.values())row.percent=row.total?Math.round(row.exact/row.total*100):0;
 return [...rows.values()];
}

// Confident mistakes are the most valuable to revisit; lucky guesses are not yet knowledge.
export type CalibrationKind='solid'|'confident-miss'|'shaky-hit'|'lucky'|'known-gap';
export function calibrationKind(confidence:Confidence,isExact:boolean):CalibrationKind{
 if(confidence==='sure')return isExact?'solid':'confident-miss';
 if(confidence==='unsure')return isExact?'shaky-hit':'known-gap';
 return isExact?'lucky':'known-gap';
}
export const CALIBRATION_MESSAGE:Record<CalibrationKind,string>={
 'solid':'Sigur și complet corect: cunoștința este consolidată.',
 'confident-miss':'Erai sigur, dar răspunsul nu este complet corect. Acestea sunt greșelile cu cel mai mare câștig: o convingere falsă corectată acum se fixează mai bine decât o informație nouă. Recitește pagina indicată.',
 'shaky-hit':'Corect, deși ezitai. Mai trece o dată prin justificări ca răspunsul să devină sigur.',
 'lucky':'Ghicit corect: punctele contează la examen, dar cunoștința nu este încă a ta. Merită revăzută.',
 'known-gap':'Ai simțit corect că nu știi: exact asta este de recitit, fără să-ți strice încrederea în ce știi deja.',
};
export function calibrationNote(rows:CalibrationRow[]):string{
 const sure=rows.find(r=>r.level==='sure')!,guess=rows.find(r=>r.level==='guess')!;
 if(sure.total<5)return 'Marchează cât de sigur ești la fiecare grilă: după câteva sesiuni vezi dacă încrederea ta este bine calibrată.';
 const gap=guess.total>=5?` Când ghicești, ai dreptate în ${guess.percent}% din cazuri.`:'';
 const verdict=sure.percent>=85?'Încrederea ta este un semnal bun.':sure.percent>=65?'Încrederea ta este parțial calibrată: verifică grilele „sigure” greșite.':'Atenție: multe răspunsuri „sigure” sunt greșite. Recitește-le înainte de examen.';
 return `Când ești sigur, ai dreptate în ${sure.percent}% din cazuri.${gap} ${verdict}`;
}
