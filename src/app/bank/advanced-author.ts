import {sourceChapter,type SourceRow,type SourcedQuestion} from './source-author';

export interface AdvancedQuestion extends SourcedQuestion {
 difficulty:{score:number;kind:'editorial-estimate';reason:string};
 textbookExpressions:string[];
 replaces?:string;
}

// Ratings are editorial judgments, never inferred from the answer count.
// Published revisions receive a new ID so historical answers keep their meaning.
export function advancedQuestion(topic:string,chapter:number,pdfOffset:number,id:string,row:SourceRow,rating:[score:number,reason:string],expressions:string[],replaces?:string,relatedPages:number[]=[]):AdvancedQuestion {
 const q=sourceChapter(topic,'Kumar & Clark','Medicină clinică, ediția a 10-a, text român',chapter,pdfOffset,[row],{1:relatedPages})[0];
 return {...q,id,difficulty:{score:rating[0],kind:'editorial-estimate',reason:rating[1]},textbookExpressions:expressions,...(replaces?{replaces}:{})};
}

export function advancedEligibilityErrors(q:Partial<AdvancedQuestion>):string[]{
 const errors:string[]=[];
 if(!Number.isInteger(q.difficulty?.score)||q.difficulty!.score<8||q.difficulty!.score>10)errors.push('Difficulty must be an integer from 8 to 10');
 if(q.difficulty?.kind!=='editorial-estimate'||!q.difficulty?.reason?.trim())errors.push('Missing editorial difficulty basis');
 if(!q.textbookExpressions?.length||q.textbookExpressions.some(s=>!s.trim()))errors.push('Missing textbook terminology evidence');
 return errors;
}
