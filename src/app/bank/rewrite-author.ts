import type {Question} from '../models';
import {advancedQuestion,type AdvancedQuestion} from './advanced-author';
import type {SourceRow,SourcedQuestion} from './source-author';

// A rewrite is a new published version (-v2) of a retired question. It keeps the
// retired item's book, chapter and edition, so the source stays the same syllabus
// chapter; the row itself is authored and re-checked against the cited page.
export function rewriter(retired:Question[],pdfOffset:number|((page:number)=>number)){
 return (oldId:string,row:SourceRow,rating:[score:number,reason:string],expressions:string[],related?:number[]):AdvancedQuestion=>{
  const old=retired.find(q=>q.id===oldId) as SourcedQuestion|undefined;
  if(!old)throw new Error(`Rewrite target ${oldId} is not retired`);
  const r=old.reference;
  return advancedQuestion(old.topicId,r.chapter,pdfOffset,`${oldId}-v2`,row,rating,expressions,oldId,related??r.printedPages.filter(p=>p!==row[3]),r.book,r.edition);
 };
}
