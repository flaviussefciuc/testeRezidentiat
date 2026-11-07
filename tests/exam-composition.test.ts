import test from 'node:test';
import assert from 'node:assert/strict';
import {QUESTIONS,EXAM_AVAILABLE} from '../src/app/questions.ts';
import {apportion,chapterQuotas,cardinalityTargets,composeExam} from '../src/app/exam-composition.ts';
import {EXAM_WEIGHTS,EXAM_CM_CARDINALITY} from '../src/app/exam-weights.ts';
import {TOPICS} from '../src/app/topics.ts';
import {decodeEntry,encodeEntry,fromTable} from '../src/app/bank-codec.ts';

const cs={id:'cs',topicId:'a',type:'CS' as const,correct:[0]},cm={id:'cm',topicId:'a',type:'CM' as const,correct:[0,1]};

test('apportionment keeps the total and favours the largest remainders',()=>{
 assert.deepEqual(apportion([1,1,1],2),[1,1,0]);
 assert.deepEqual(apportion([19,11.33,1],200).reduce((a,b)=>a+b,0),200);
 assert.deepEqual(apportion([0,0],5),[0,0]);
});
test('chapter quotas follow the papers: 50 CS, 150 CM, cardiology about 19, epidemiology 1',()=>{
 for(const count of [200,100,52]){
  const q=chapterQuotas(count);
  assert.equal(q.reduce((s,x)=>s+x.cs,0),Math.round(count/4));
  assert.equal(q.reduce((s,x)=>s+x.cs+x.cm,0),count);
  assert.ok(q.every(x=>x.cs>=0&&x.cm>=0));
 }
 const full=Object.fromEntries(chapterQuotas(200).map(x=>[x.topicId,x.cs+x.cm]));
 assert.ok(full.cardiologie>=18&&full.cardiologie<=20,String(full.cardiologie));
 assert.ok(full.ortopedie>=10&&full.ortopedie<=12);
 assert.equal(full.epidemio,1);
 assert.deepEqual(cardinalityTargets(150),EXAM_CM_CARDINALITY);
});
test('a full simulation from the live bank matches the chapter quotas and the 2025 key sizes',{skip:!EXAM_AVAILABLE},()=>{
 for(let k=0;k<5;k++){
  const exam=composeExam(QUESTIONS,200);
  assert.equal(exam.length,200);assert.equal(new Set(exam.map(q=>q.id)).size,200);
  assert.equal(exam.filter(q=>q.type==='CS').length,50);
  const per:Record<string,number>={};for(const q of exam)per[q.topicId]=(per[q.topicId]??0)+1;
  for(const quota of chapterQuotas(200))assert.equal(per[quota.topicId]??0,quota.cs+quota.cm,quota.topicId);
  const sizes=[2,3,4].map(n=>exam.filter(q=>q.type==='CM'&&q.correct.length===n).length);
  sizes.forEach((n,i)=>assert.ok(Math.abs(n-EXAM_CM_CARDINALITY[i])<=1,`key size ${i+2}: ${n} vs ${EXAM_CM_CARDINALITY[i]}`));
 }
 // Shorter formats scale the same composition.
 assert.equal(composeExam(QUESTIONS,52).length,52);
 assert.equal(composeExam(QUESTIONS,100).filter(q=>q.type==='CS').length,25);
});
test('chapters outside the weights are filled from the whole bank, siblings never pair up',()=>{
 const fixture=[...Array.from({length:60},(_,i)=>({...cs,id:'cs-'+i})),...Array.from({length:170},(_,i)=>({...cm,id:'cm-'+i,correct:i%3?[0,1,2]:[0,1]}))];
 const siblings=new Map<string,Set<string>>([['cm-1',new Set(['cm-2'])],['cm-2',new Set(['cm-1'])]]);
 for(let k=0;k<20;k++){const ids=new Set(composeExam(fixture,200,siblings).map(q=>q.id));assert.equal(ids.size,200);assert.ok(!(ids.has('cm-1')&&ids.has('cm-2')));}
 assert.throws(()=>composeExam([cs,cm]));
 assert.equal(EXAM_WEIGHTS.length,39);
});
test('a simulation from the index prefers table-based items up to each chapter share',{skip:!EXAM_AVAILABLE},()=>{
 const order=TOPICS.map(t=>t.id);
 const lite=QUESTIONS.map(q=>decodeEntry(order,q.id,encodeEntry(order,q,true,fromTable(q as any))));
 const exam=composeExam(lite,200);
 const tables=exam.filter(q=>q.table).length;
 // The papers had about 24% such items; the bank can supply at least that many here.
 assert.ok(tables>=40&&tables<=95,String(tables));
 assert.equal(exam.filter(q=>q.type==='CS').length,50);
});
