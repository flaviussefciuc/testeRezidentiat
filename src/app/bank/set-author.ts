import {advancedQuestion,type AdvancedQuestion} from './advanced-author';
import {shuffleRow} from './rewrite-author';
import type {SourceRow} from './source-author';
import {TOPICS} from '../topics';
import {PDF_PAGE} from './pdf-pages';

// A 2026 set: questions written for the pages the 2023–2025 papers asked, in the papers'
// format. Their keys and rationales are checked against the required edition and against
// the source-checked questions of the same pages, but the Romanian wording has not been
// confirmed mechanically on the local extract, so they carry verification:'edition'
// and a review with status 'edition-checked' (scripts/record-set-reviews.ts).
export interface PredictedQuestion extends AdvancedQuestion {verification:'edition'|'text'}
export type SetRow=[row:SourceRow,trap:string,expressions:string[]];
const EDITION:Record<string,string>={'Kumar & Clark':'Medicină clinică, ediția a 10-a, text român',Lawrence:'Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025',Sinopsis:'Sinopsis de medicină, ediția pentru rezidențiat MG 2025'};

export function set2026(topicId:string,rows:SetRow[],start=1):PredictedQuestion[]{
 const t=TOPICS.find(x=>x.id===topicId);
 if(!t)throw new Error(`Unknown topic ${topicId}`);
 return rows.map(([row,trap,expressions],i)=>{
  const id=`${topicId}-p26-${String(start+i).padStart(3,'0')}`;
  // The authored order usually lists the true statements first; store a seeded permutation.
  const q=advancedQuestion(topicId,t.chapter,PDF_PAGE[topicId],id,shuffleRow(id,'2026',row),[8,trap],expressions,undefined,[],t.book,EDITION[t.book]);
  return {...q,verification:'edition'};
 });
}
