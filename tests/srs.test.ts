import test from 'node:test';
import assert from 'node:assert/strict';
import {memories,dueIds,INTERVAL_DAYS} from '../src/app/srs.ts';
import type {Attempt,Answer} from '../src/app/models.ts';
import type {Scorable} from '../src/app/scoring.ts';

const DAY=86400000,t0=Date.parse('2026-11-01T08:00:00Z');
const q:Scorable={id:'q',topicId:'a',type:'CS',correct:[1]};
const lookup=new Map([[q.id,q]]);
const at=(day:number,answer:Partial<Answer>):Attempt=>({id:String(day),userId:'u',mode:'practice',startedAt:new Date(t0+day*DAY).toISOString(),completedAt:new Date(t0+day*DAY).toISOString(),answers:[{questionId:'q',selected:[1],...answer}]});

test('correct answers climb the boxes, "sure" climbs faster and a guess does not climb',()=>{
 assert.equal(memories([at(0,{})],lookup).get('q')!.box,1);
 assert.equal(memories([at(0,{confidence:'sure'})],lookup).get('q')!.box,2);
 assert.equal(memories([at(0,{confidence:'guess'})],lookup).get('q')!.box,0);
 const m=memories([at(0,{}),at(1,{}),at(3,{})],lookup).get('q')!;
 assert.equal(m.box,3);assert.equal(m.due,t0+3*DAY+INTERVAL_DAYS[3]*DAY);
});
test('a wrong answer resets the box and makes the question due the next day',()=>{
 const m=memories([at(0,{confidence:'sure'}),at(2,{selected:[0]})],lookup).get('q')!;
 assert.equal(m.box,0);assert.equal(m.lapses,1);assert.equal(m.due,t0+3*DAY);
 assert.deepEqual(dueIds(memories([at(0,{selected:[0]})],lookup),new Set(['q']),t0+DAY),['q']);
 assert.deepEqual(dueIds(memories([at(0,{selected:[0]})],lookup),new Set(['q']),t0+DAY-1),[]);
});
test('unanswered items and retired questions never become due',()=>{
 assert.equal(memories([at(0,{selected:[]})],lookup).size,0);
 assert.deepEqual(dueIds(memories([at(0,{selected:[0]})],lookup),new Set(),t0+5*DAY),[]);
});
