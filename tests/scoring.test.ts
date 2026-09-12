import test from 'node:test';
import assert from 'node:assert/strict';
import { QUESTIONS } from '../src/app/questions.ts';
import { TOPICS } from '../src/app/topics.ts';
import { score, maximum, summarize, topicStats, improvement, wrongIds, examQuestions } from '../src/app/scoring.ts';
import type { Attempt, Question } from '../src/app/models.ts';

const cs:Question={id:'cs',topicId:'a',type:'CS',stem:'Test',options:['A','B','C','D','E'],correct:[1],explanation:'Test',source:'https://example.com'};
const cm:Question={...cs,id:'cm',topicId:'b',type:'CM',correct:[0,2]};
test('single choice scores four only for the one correct answer',()=>{
 assert.equal(score(cs,[1]),4);
 for(const answer of [[],[0],[1,2],[1,1],[-1],[5],[1.5]])assert.equal(score(cs,answer),0);
});
test('multiple choice classifies all five options and rejects invalid counts',()=>{
 assert.equal(score(cm,[0,2]),5);assert.equal(score(cm,[0,1]),3);
 assert.equal(score(cm,[0,2,3]),4);
 for(const answer of [[],[0],[0,1,2,3,4],[0,0],[-1,2]])assert.equal(score(cm,answer),0);
});
test('all 32 response patterns are scored correctly for CM keys of size two, three and four',()=>{
 for(const correct of [[0,3],[0,2,4],[0,1,3,4]]){
  const question={...cm,correct};
  for(let mask=0;mask<32;mask++){
   const selected=[0,1,2,3,4].filter(i=>(mask&(1<<i))!==0);
   const valid=selected.length>=2&&selected.length<=4;
   const mismatches=selected.filter(i=>!correct.includes(i)).length+correct.filter(i=>!selected.includes(i)).length;
   assert.equal(score(question,selected),valid?5-mismatches:0,`key=${correct}; response=${selected}`);
  }
 }
});
test('exam has 200 distinct questions, 50 simple, 150 multiple and 950 points',()=>{
 const exam=examQuestions(QUESTIONS);
 assert.equal(exam.length,200);assert.equal(new Set(exam.map(q=>q.id)).size,200);
 assert.equal(exam.filter(q=>q.type==='CS').length,50);
 assert.equal(exam.reduce((n,q)=>n+maximum(q),0),950);
 assert.throws(()=>examQuestions([cs,cm]));
});
test('every question has a known topic, five distinct options and a valid answer key',()=>{
 assert.equal(new Set(QUESTIONS.map(q=>q.id)).size,QUESTIONS.length);
 for(const q of QUESTIONS){
  assert.ok(TOPICS.some(t=>t.id===q.topicId),q.id);
  assert.equal(q.options.length,5,q.id);assert.equal(new Set(q.options).size,5,q.id);
  if(q.type==='CS')assert.equal(q.correct.length,1,q.id);
  if(q.type==='CM')assert.ok(q.correct.length>=2&&q.correct.length<=4,q.id);
  assert.equal(score(q,q.correct),maximum(q),q.id);
  assert.ok(q.explanation.length>20&&q.source.startsWith('https://'),q.id);
 }
});
test('history compares weekly weighted scores and latest answer determines review',()=>{
 const now=Date.parse('2026-09-12T12:00:00Z');
 const make=(days:number,selected:number[]):Attempt=>({id:String(days),userId:'test',mode:'practice',startedAt:new Date(now-days*86400000).toISOString(),completedAt:new Date(now-days*86400000).toISOString(),answers:[{questionId:'cs',selected}]});
 const attempts=[make(10,[0]),make(1,[1])];
 assert.equal(improvement(attempts,[cs],now),100);
 assert.equal(improvement([attempts[1]],[cs],now),null);
 assert.deepEqual(wrongIds(attempts,[cs]),[]);
 assert.equal(topicStats(attempts,[cs],'a').percent,50);
 assert.equal(summarize([{questionId:'cs',selected:[]}],[cs]).points,0);
});
