import type {Question} from './models';

// Structured teaching data carried by source-checked questions. Older questions
// only have a free-text explanation, so every field is optional.
export interface Insight {
 rationales: string[]|null;
 objective: string|null;
 trap: string|null;
 reference: {book:string;edition:string;chapter:number;pages:number[];pdfPages:number[];section:string}|null;
 expressions: string[];
}

export function insightOf(q:Question):Insight {
 const s=q as Question&{optionRationales?:string[];learningObjective?:string;reference?:{book:string;edition:string;chapter:number;printedPages:number[];pdfPages:number[];section:string};textbookExpressions?:string[]};
 const r=s.reference;
 return {
  rationales:Array.isArray(s.optionRationales)&&s.optionRationales.length===q.options.length?s.optionRationales:null,
  objective:s.learningObjective?.trim()||null,
  trap:q.difficulty?.reason?.trim()||null,
  reference:r?{book:r.book,edition:r.edition,chapter:r.chapter,pages:r.printedPages,pdfPages:r.pdfPages,section:r.section}:null,
  expressions:Array.isArray(s.textbookExpressions)?s.textbookExpressions.filter(e=>e.trim()):[],
 };
}

// How one option was handled: a correct option ticked (hit) or left out (miss),
// a false option ticked (wrong) or correctly left out (avoided).
export type Verdict='hit'|'miss'|'wrong'|'avoided';
export function verdictOf(q:Question,selected:number[],i:number):Verdict {
 const isCorrect=q.correct.includes(i),chosen=selected.includes(i);
 return isCorrect?(chosen?'hit':'miss'):(chosen?'wrong':'avoided');
}
export const VERDICT_LABEL:Record<Verdict,string>={hit:'Adevărat · bifat',miss:'Adevărat · omis',wrong:'Fals · bifat',avoided:'Fals · evitat'};

// Under the CM rule, each option classified correctly is worth one point, but only
// when 2–4 options are marked; otherwise the whole item scores zero.
export function optionPoint(q:Question,selected:number[],i:number):number|null {
 if(q.type!=='CM')return null;
 if(selected.length<2||selected.length>4)return 0;
 const v=verdictOf(q,selected,i);
 return v==='hit'||v==='avoided'?1:0;
}

export function referenceLine(i:Insight):string {
 const r=i.reference;
 return r?`${r.book} · cap. ${r.chapter} · p. ${r.pages.join(', ')}`:'';
}
