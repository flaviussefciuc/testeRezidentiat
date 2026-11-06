import test from 'node:test';
import assert from 'node:assert/strict';
import {QUESTIONS,QUESTION_HISTORY} from '../src/app/questions.ts';
import {TOPICS} from '../src/app/topics.ts';
import {decodeEntry,encodeEntry} from '../src/app/bank-codec.ts';
import {summarize} from '../src/app/scoring.ts';

test('the browser index keeps the topic, type and key of every saved question version',()=>{
 const order=TOPICS.map(t=>t.id),active=new Set(QUESTIONS.map(q=>q.id));
 const lite=QUESTION_HISTORY.map(q=>decodeEntry(order,q.id,encodeEntry(order,q,active.has(q.id))));
 QUESTION_HISTORY.forEach((q,i)=>{
  assert.equal(lite[i].topicId,q.topicId,q.id);
  assert.equal(lite[i].type,q.type,q.id);
  assert.deepEqual(lite[i].correct,[...q.correct].sort((a,b)=>a-b),q.id);
  assert.equal(lite[i].active,active.has(q.id),q.id);
 });
 // Scoring from the index must equal scoring from the full questions.
 const answers=QUESTION_HISTORY.flatMap(q=>[{questionId:q.id,selected:q.correct},{questionId:q.id,selected:[0,1]},{questionId:q.id,selected:[2]}]);
 assert.deepEqual(summarize(answers,lite),summarize(answers,QUESTION_HISTORY));
});
