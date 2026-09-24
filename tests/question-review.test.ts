import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {QUESTIONS,QUESTION_HISTORY,LEGACY_QUESTIONS,SOURCE_CHECKED_QUESTIONS,PREVIOUS_SOURCE_QUESTIONS,RETIRED_QUESTIONS} from '../src/app/questions.ts';
import {questionCues} from '../scripts/cue-metrics.ts';
import {advancedEligibilityErrors} from '../src/app/bank/advanced-author.ts';
import {HEMATOLOGY_SOURCE} from '../src/app/bank/hematology-source.ts';
import {INTENSIVE_CARE_SOURCE} from '../src/app/bank/intensive-care-source.ts';
import {ELECTROLYTES_SOURCE} from '../src/app/bank/electrolytes-source.ts';
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
test('retiring original questions preserves the content and scoring of old attempts',()=>{
 const retired=LEGACY_QUESTIONS;
 assert.equal(retired.length,200);
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
test('revised chapters cover CS and every CM cardinality without absolute-word distractors',()=>{
 for(const chapter of [SEPSIS_SOURCE,ELECTROLYTES_SOURCE,INTENSIVE_CARE_SOURCE,HEMATOLOGY_SOURCE])assert.deepEqual(new Set(chapter.map(q=>q.correct.length)),new Set([1,2,3,4]));
 assert.ok(SOURCE_CHECKED_QUESTIONS.every(q=>q.options.every(o=>!/obligator|întotdeauna|niciodată|exclusiv|garantat/i.test(o))));
});
test('difficulty gate rejects low, absent, fractional and out-of-range ratings',()=>{
 const q=SOURCE_CHECKED_QUESTIONS[0];
 for(const score of [0,7,7.9,8.5,11,NaN])assert.ok(advancedEligibilityErrors({...q,difficulty:{...q.difficulty,score}}).length);
 assert.ok(advancedEligibilityErrors({...q,difficulty:undefined}).length);
 assert.ok(advancedEligibilityErrors({...q,textbookExpressions:[]}).length);
 for(const a of SOURCE_CHECKED_QUESTIONS)assert.deepEqual(advancedEligibilityErrors(a),[]);
 const r=reviews.find((r:any)=>r.questionId===q.id);
 assert.ok(reviewErrors({...q,difficulty:{...q.difficulty,score:9}},r).length);
 assert.ok(reviewErrors({...q,textbookExpressions:['altă expresie']},r).length);
});
test('every earlier source version remains unchanged and cannot enter new sessions',()=>{
 const assessments=JSON.parse(readFileSync(new URL('../docs/difficulty-review.json',import.meta.url),'utf8')).previous;
 assert.equal(assessments.length,80);
 assert.equal(new Set(assessments.map((r:any)=>r.questionId)).size,80);
 for(const q of PREVIOUS_SOURCE_QUESTIONS){
  assert.equal(assessments.find((r:any)=>r.questionId===q.id)?.questionFingerprint,questionFingerprint(q));
  assert.deepEqual(QUESTION_HISTORY.find(h=>h.id===q.id),q);
  assert.ok(!QUESTIONS.some(a=>a.id===q.id));
  assert.deepEqual(reviewErrors(q,reviews.find((r:any)=>r.questionId===q.id)),[],q.id);
  assert.deepEqual(summarize([{questionId:q.id,selected:q.correct}],QUESTION_HISTORY),summarize([{questionId:q.id,selected:q.correct}],PREVIOUS_SOURCE_QUESTIONS));
 }
 assert.deepEqual(new Set(SOURCE_CHECKED_QUESTIONS.map(q=>q.correct.length)),new Set([1,2,3,4]));
 assert.ok(QUESTIONS.every(q=>SOURCE_CHECKED_QUESTIONS.some(a=>a.id===q.id)));
});

test('every original question has an exact-version editorial rejection',()=>{
 const report=JSON.parse(readFileSync(new URL('../docs/legacy-question-review.json',import.meta.url),'utf8'));
 assert.equal(report.questions.length,LEGACY_QUESTIONS.length);
 for(const q of LEGACY_QUESTIONS){
  const records=report.questions.filter((r:any)=>r.questionId===q.id);
  assert.equal(records.length,1);
  assert.equal(records[0].questionFingerprint,questionFingerprint(q));
  assert.ok(records[0].difficulty.score<8);
  assert.ok(records[0].difficulty.reason);
  assert.ok(!QUESTIONS.some(a=>a.id===q.id));
 }
});

test('retired advanced versions stay frozen, scoreable and out of new sessions',()=>{
 const retiredReviews=JSON.parse(readFileSync(new URL('../docs/retired-question-reviews.json',import.meta.url),'utf8'));
 assert.equal(new Set(RETIRED_QUESTIONS.map(q=>q.id)).size,RETIRED_QUESTIONS.length);
 for(const q of RETIRED_QUESTIONS){
  assert.ok(!QUESTIONS.some(a=>a.id===q.id),q.id);
  assert.equal(QUESTION_HISTORY.find(h=>h.id===q.id),q);
  // The snapshot must be the exact version that was reviewed and published.
  const records=retiredReviews.filter((r:any)=>r.questionId===q.id);
  assert.equal(records.length,1,q.id);
  assert.equal(records[0].questionFingerprint,questionFingerprint(q),q.id);
  assert.ok(!reviews.some((r:any)=>r.questionId===q.id),q.id);
  for(const selected of [[],q.correct,[0,1]]){
   const answer=[{questionId:q.id,selected}];
   assert.deepEqual(summarize(answer,QUESTION_HISTORY),summarize(answer,RETIRED_QUESTIONS));
  }
 }
 assert.equal(new Set(QUESTION_HISTORY.map(q=>q.id)).size,QUESTION_HISTORY.length);
});
test('rewritten versions replace a retired question and carry no answer cue',()=>{
 const retiredIds=new Set(RETIRED_QUESTIONS.map(q=>q.id));
 for(const q of SOURCE_CHECKED_QUESTIONS as any[]){
  if(/-v\d+$/.test(q.id)){
   assert.ok(retiredIds.has(q.replaces),q.id);
   assert.deepEqual(questionCues(q),[],q.id);
  }
 }
});
