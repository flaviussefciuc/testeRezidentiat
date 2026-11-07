import test from 'node:test';
import assert from 'node:assert/strict';
import {QUESTIONS,QUESTION_HISTORY} from '../src/app/questions.ts';
import {TOPICS} from '../src/app/topics.ts';
import {decodeEntry,encodeEntry,fromTable} from '../src/app/bank-codec.ts';
import {summarize} from '../src/app/scoring.ts';

test('the browser index keeps the topic, type and key of every saved question version',()=>{
 const order=TOPICS.map(t=>t.id),active=new Set(QUESTIONS.map(q=>q.id));
 const lite=QUESTION_HISTORY.map(q=>decodeEntry(order,q.id,encodeEntry(order,q,active.has(q.id),fromTable(q as any))));
 QUESTION_HISTORY.forEach((q,i)=>{
  assert.equal(lite[i].topicId,q.topicId,q.id);
  assert.equal(lite[i].type,q.type,q.id);
  assert.deepEqual(lite[i].correct,[...q.correct].sort((a,b)=>a-b),q.id);
  assert.equal(lite[i].active,active.has(q.id),q.id);
  assert.equal(lite[i].table,fromTable(q as any),q.id);
 });
 // Scoring from the index must equal scoring from the full questions.
 const answers=QUESTION_HISTORY.flatMap(q=>[{questionId:q.id,selected:q.correct},{questionId:q.id,selected:[0,1]},{questionId:q.id,selected:[2]}]);
 assert.deepEqual(summarize(answers,lite),summarize(answers,QUESTION_HISTORY));
});
test('the table flag marks questions built on a table, box, score or classification',()=>{
 assert.ok(fromTable({stem:'Clasificarea GOLD a obstrucției:',optionRationales:[]}));
 assert.ok(fromTable({stem:'Oxigenoterapia la domiciliu:',learningObjective:'Cadranul 28.23.'}));
 assert.ok(!fromTable({stem:'Blocul atrioventricular de gradul II se caracterizează prin:',learningObjective:'Tulburări de conducere.'}));
 const tagged=QUESTIONS.filter(q=>fromTable(q as any)).length;
 assert.ok(tagged>=400&&tagged<QUESTIONS.length/4,String(tagged));
});
