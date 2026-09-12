import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {QUESTIONS,QUESTION_HISTORY,LEGACY_QUESTIONS,SOURCE_CHECKED_QUESTIONS} from '../src/app/questions.ts';
import {SEPSIS_SOURCE} from '../src/app/bank/sepsis-source.ts';
import {reviewErrors,questionFingerprint} from '../scripts/question-review.ts';
import {summarize} from '../src/app/scoring.ts';

const reviews=JSON.parse(readFileSync(new URL('../docs/question-reviews.json',import.meta.url),'utf8'));
test('every published source-checked question has a matching complete review',()=>{
 for(const q of SOURCE_CHECKED_QUESTIONS){
  const records=reviews.filter((r:any)=>r.questionId===q.id);
  assert.equal(records.length,1,q.id);
  assert.deepEqual(reviewErrors(q,records[0]),[],q.id);
 }
});
test('a changed distractor, answer key or explanation invalidates the previous review',()=>{
 const q=SEPSIS_SOURCE[0],r=reviews.find((r:any)=>r.questionId===q.id);
 for(const modified of [{...q,options:q.options.map((o,i)=>i===0?o+' modificat':o)},{...q,correct:[0]},{...q,explanation:q.explanation+' modificată'}]){
  assert.ok(reviewErrors(modified,r).includes('Review does not match the exact question version'));
 }
});
test('a filled page reference outside the syllabus and incomplete evidence cannot pass',()=>{
 const q=structuredClone(SEPSIS_SOURCE[0]),r=structuredClone(reviews[0]);
 q.reference.printedPages=[169];r.reference=q.reference;r.questionFingerprint=questionFingerprint(q);
 assert.ok(reviewErrors(q,r).includes('Page outside included syllabus ranges'));
 const missing=structuredClone(reviews[0]);missing.options[2].rationale='';
 assert.ok(reviewErrors(SEPSIS_SOURCE[0],missing).length);
 const fakeClinician=structuredClone(reviews[0]);fakeClinician.status='clinician-reviewed';
 assert.ok(reviewErrors(SEPSIS_SOURCE[0],fakeClinician).includes('AI review cannot be labelled clinician review'));
});
test('retiring the original sepsis questions preserves the content and scoring of old attempts',()=>{
 const retired=LEGACY_QUESTIONS.filter(q=>q.topicId==='sepsis');
 assert.equal(retired.length,5);
 assert.ok(retired.every(q=>!QUESTIONS.some(a=>a.id===q.id)));
 for(const q of retired){
  assert.deepEqual(QUESTION_HISTORY.find(h=>h.id===q.id),q);
  for(const selected of [[],q.correct,[0,1]]){
   const answer=[{questionId:q.id,selected}];
   assert.deepEqual(summarize(answer,QUESTION_HISTORY),summarize(answer,LEGACY_QUESTIONS));
  }
 }
 assert.equal(new Set(QUESTION_HISTORY.map(q=>q.id)).size,QUESTION_HISTORY.length);
});
test('revised chapter covers CS and every CM cardinality without absolute-word distractors',()=>{
 assert.deepEqual([1,2,3,4].map(n=>SEPSIS_SOURCE.filter(q=>q.correct.length===n).length),[5,5,5,5]);
 assert.ok(SEPSIS_SOURCE.every(q=>q.options.every(o=>!/obligator|întotdeauna|niciodată|exclusiv|garantat/i.test(o))));
});
