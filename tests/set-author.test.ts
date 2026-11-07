import test from 'node:test';
import assert from 'node:assert/strict';
import {set2026} from '../src/app/bank/set-author.ts';
import {PDF_PAGE} from '../src/app/bank/pdf-pages.ts';
import {QUESTIONS} from '../src/app/questions.ts';
import {TOPICS} from '../src/app/topics.ts';
import {questionFingerprint,reviewErrors,REVIEW_CHECKS} from '../scripts/question-review.ts';
import {checkSet} from '../scripts/check-set.ts';

const row=(stem:string,options:string[],key:string,page:number):[any,string,string[]]=>[[stem,options,key,page,'Fracturile de șold','Clasificarea Garden.',['da','da','nu: altfel','nu: altfel','nu: altfel']],'Distractorii schimbă gradul.',['Garden']];
const sample=()=>set2026('ortopedie',[row('Clasificarea Garden a fracturilor de col femural:',['gradul I este o fractură incompletă, angrenată în valgus','gradul IV este o fractură completă, total deplasată','gradul II este deplasată parțial, angrenată în varus','gradul III este o fractură incompletă, fără deplasare','se aplică fracturilor trohanteriene instabile'],'AB',598)]);

test('a 2026 set gets stable ids, the chapter book and edition, PDF pages from the chapter offset, and the edition mark',()=>{
 const [q]=sample();
 assert.equal(q.id,'ortopedie-p26-001');
 assert.equal(q.reference.book,'Lawrence');assert.equal(q.reference.chapter,28);
 assert.deepEqual(q.reference.printedPages,[598]);assert.deepEqual(q.reference.pdfPages,[PDF_PAGE.ortopedie(598)]);
 assert.equal(q.verification,'edition');assert.equal(q.difficulty.score,8);
 // The stored order is a seeded permutation of the authored one, key and rationales follow it.
 q.correct.forEach(i=>assert.ok(/gradul I este|gradul IV este/.test(q.options[i])));
 assert.ok(q.optionRationales.every((r,i)=>q.correct.includes(i)?r==='da':r.startsWith('nu')));
 assert.ok(Object.keys(PDF_PAGE).length===TOPICS.length&&TOPICS.every(t=>PDF_PAGE[t.id]));
});
test('the chapter offsets reproduce the PDF pages cited by the live bank',()=>{
 let checked=0;
 for(const q of QUESTIONS){const r=(q as any).reference;if(!r)continue;r.printedPages.forEach((p:number,i:number)=>{if(PDF_PAGE[q.topicId](p)===r.pdfPages[i])checked++;});}
 const total=QUESTIONS.reduce((n,q)=>n+((q as any).reference?.printedPages.length??0),0);
 assert.ok(checked/total>0.995,`${checked}/${total}`);
});
test('an edition-level review is accepted only as such, and the mark is part of the fingerprint',()=>{
 const [q]=sample();
 const where='Lawrence, p. 598, Fracturile de șold';
 const review={questionId:q.id,questionFingerprint:questionFingerprint(q),status:'edition-checked',learningObjective:q.learningObjective,reference:q.reference,options:q.options.map((_,i)=>({index:i,verdict:q.correct.includes(i)?'correct':'incorrect',rationale:q.optionRationales[i],evidenceLocation:where})),checks:Object.fromEntries(REVIEW_CHECKS.map(k=>[k,true])),reviewer:{kind:'ai',name:'Claude'},reviewedAt:'2026-11-07T12:00:00Z',unresolvedIssues:[],difficulty:q.difficulty,textbookExpressions:q.textbookExpressions,textbookWordingReviewed:false};
 assert.deepEqual(reviewErrors(q,review),[]);
 assert.ok(reviewErrors(q,{...review,status:'source-checked',textbookWordingReviewed:true}).includes('A question marked verification:edition cannot claim a text-level review'));
 assert.ok(reviewErrors(q,{...review,textbookWordingReviewed:true}).includes('Textbook wording review incomplete'));
 const text={...q,verification:'text' as const};
 assert.notEqual(questionFingerprint(text),questionFingerprint(q));
 assert.ok(reviewErrors(text,{...review,questionFingerprint:questionFingerprint(text)}).includes('Edition-level review needs a question marked verification:edition'));
});
test('the set checker rejects near-duplicates of live questions and reports format slips',()=>{
 const live=QUESTIONS.find(q=>q.topicId==='ortopedie')!;
 const copy=set2026('ortopedie',[[[live.stem,[...live.options],live.correct.map(i=>'ABCDE'[i]).join(''),live.reference.printedPages[0],'s','o',['a','b','c','d','e']],'t',['x']]],900);
 assert.ok(checkSet(copy).errors.some(e=>/near-duplicate/.test(e)));
 const clean=checkSet(sample());
 assert.deepEqual(clean.errors,[]);
 assert.ok(clean.summary.some(s=>/\[tabel\]/.test(s)));
});
