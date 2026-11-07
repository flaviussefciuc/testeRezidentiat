// Days are local days; pin the students' timezone so the build server (UTC) agrees.
process.env.TZ='Europe/Bucharest';
import test from 'node:test';
import assert from 'node:assert/strict';
import {buildPlan,type ChapterLoad} from '../src/app/plan.ts';

const now=Date.parse('2026-11-06T09:00:00+02:00'),exam=Date.parse('2026-11-15T00:00:00+02:00');
const ch=(topicId:string,size:number,unseen:number,answered=0,percent=0):ChapterLoad=>({topicId,name:topicId,size,unseen,answered,percent});

test('new material fills the days before the exam eve, which stays review-only',()=>{
 const plan=buildPlan([ch('a',300,300),ch('b',100,100)],50,now,exam);
 assert.equal(plan.days.length,9);
 assert.ok(plan.days.at(-1)!.reviewOnly);assert.equal(plan.days.at(-1)!.total,0);
 assert.equal(plan.capacity,8*50);assert.equal(plan.planned,400);
 assert.ok(plan.days.slice(0,-1).every(d=>d.total<=50));
});
test('quotas never exceed unseen questions and weaker chapters get more',()=>{
 const plan=buildPlan([ch('strong',100,100,50,90),ch('weak',100,100,50,30)],20,now,exam);
 const total=(id:string)=>plan.days.flatMap(d=>d.items).filter(i=>i.topicId===id).reduce((n,i)=>n+i.count,0);
 assert.ok(total('weak')>total('strong'));
 assert.equal(total('weak')+total('strong'),160);
 const small=buildPlan([ch('x',10,3)],100,now,exam);
 assert.equal(small.planned,3);
});
test('on the exam eve only the review day remains',()=>{
 const plan=buildPlan([ch('a',100,100)],50,Date.parse('2026-11-14T10:00:00+02:00'),exam);
 assert.equal(plan.days.length,1);assert.ok(plan.days[0].reviewOnly);assert.equal(plan.capacity,0);
});
test('a chapter weight (exam points) outranks the bank size when both are given',()=>{
 // Same bank size and the same weakness: the chapter with more points at the exam gets more of the day.
 const plan=buildPlan([{...ch('ortho',120,120),weight:52},{...ch('nefro',120,120),weight:38},{...ch('diabet',120,120),weight:33}],30,now,exam);
 const total=(id:string)=>plan.days.flatMap(d=>d.items).filter(i=>i.topicId===id).reduce((n,i)=>n+i.count,0);
 assert.ok(total('ortho')>total('nefro')&&total('nefro')>total('diabet'),[total('ortho'),total('nefro'),total('diabet')].join('/'));
 assert.equal(total('ortho')+total('nefro')+total('diabet'),240);
});
