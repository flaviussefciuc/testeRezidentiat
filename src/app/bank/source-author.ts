import type {Question} from '../models';
import {SYLLABUS_URL} from '../topics';

export interface BookReference {
 book:'Kumar & Clark'|'Lawrence'|'Sinopsis';
 edition:string;
 chapter:number;
 printedPages:number[];
 pdfPages:number[];
 section:string;
}
export interface SourcedQuestion extends Question {
 reference:BookReference;
 learningObjective:string;
 optionRationales:string[];
}
export type SourceRow=[stem:string,options:string[],key:string,printedPage:number,section:string,objective:string,rationales:string[]];

// Each row is authored and reviewed individually. This helper only validates and
// serializes it; it does not create questions or mark a review as accepted.
export function sourceChapter(topicId:string,book:BookReference['book'],edition:string,chapter:number,pdfOffset:number,rows:SourceRow[],relatedPages:Record<number,number[]>={}):SourcedQuestion[]{
 return rows.map(([stem,options,key,page,section,learningObjective,optionRationales],i)=>{
  const correct=[...key].map(c=>'ABCDE'.indexOf(c));
  if(options.length!==5||new Set(options).size!==5||optionRationales.length!==5||optionRationales.some(r=>!r.trim())||correct.length<1||correct.length>4||new Set(correct).size!==correct.length||correct.some(n=>n<0))throw new Error(`Invalid source row ${topicId}:${i+1}`);
  const printedPages=[...new Set([page,...(relatedPages[i+1]??[])])];
  const reference={book,edition,chapter,printedPages,pdfPages:printedPages.map(p=>p+pdfOffset),section};
  // Identify an option by its text, never by an A–E label: practice shuffles choices.
  const explanation=options.map((o,n)=>`${o} — ${correct.includes(n)?'Corect':'Incorect'}: ${optionRationales[n]}`).join('\n\n')+`\n\nReferință: ${book}, ${edition}, cap. ${chapter}, p. ${printedPages.join(', ')}, ${section} (pagini PDF: ${reference.pdfPages.join(', ')}).`;
  return {id:`${topicId}-ext-${String(i+1).padStart(3,'0')}`,topicId,type:correct.length===1?'CS':'CM',stem,options,correct,explanation,source:SYLLABUS_URL,reference,learningObjective,optionRationales};
 });
}
