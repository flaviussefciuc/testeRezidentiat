import type {Question} from '../models';
import {advancedQuestion,type AdvancedQuestion} from './advanced-author';
import type {SourceRow,SourcedQuestion} from './source-author';

// Deterministic Fisher–Yates driven by the question id, so the stored option order
// does not mirror the authoring order (correct statements are often written first).
function seededOrder(id:string):number[]{
 let a=2166136261;
 for(const c of id)a=Math.imul(a^c.charCodeAt(0),16777619);
 const next=()=>{a=(a+0x6D2B79F5)|0;let t=Math.imul(a^(a>>>15),1|a);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296;};
 const order=[0,1,2,3,4];
 for(let i=4;i>0;i--){const j=Math.floor(next()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
 return order;
}
function shuffleRow(id:string,salt:string,[stem,options,key,page,section,objective,rationales]:SourceRow):SourceRow{
 const order=seededOrder(id+salt),correct=new Set([...key].map(c=>'ABCDE'.indexOf(c)));
 const newKey=order.map((from,to)=>correct.has(from)?'ABCDE'[to]:'').join('');
 return [stem,order.map(i=>options[i]),newKey,page,section,objective,order.map(i=>rationales[i])];
}

// A rewrite is a new published version (-v2) of a retired question. It keeps the
// retired item's book, chapter and edition, so the source stays the same syllabus
// chapter; the row itself is authored and re-checked against the cited page.
// With {shuffle:true} the authored option order is permuted deterministically; an optional
// salt re-seeds the permutation (used to balance key positions in small chapters).
export function rewriter(retired:Question[],pdfOffset:number|((page:number)=>number),opts:{shuffle?:boolean;salt?:string}={}){
 return (oldId:string,row:SourceRow,rating:[score:number,reason:string],expressions:string[],related?:number[]):AdvancedQuestion=>{
  const old=retired.find(q=>q.id===oldId) as SourcedQuestion|undefined;
  if(!old)throw new Error(`Rewrite target ${oldId} is not retired`);
  const r=old.reference,id=`${oldId}-v2`;
  return advancedQuestion(old.topicId,r.chapter,pdfOffset,id,opts.shuffle?shuffleRow(id,opts.salt??'',row):row,rating,expressions,oldId,related??r.printedPages.filter(p=>p!==row[3]),r.book,r.edition);
 };
}
