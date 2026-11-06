// Days are local days; pin the students' timezone so the build server (UTC) agrees.
process.env.TZ='Europe/Bucharest';
import test from 'node:test';
import assert from 'node:assert/strict';
import {dailyCounts,streak} from '../src/app/activity.ts';
import type {Attempt} from '../src/app/models.ts';

const day=(iso:string,n:number):Attempt=>({id:iso+n,userId:'u',mode:'practice',startedAt:iso,completedAt:iso,answers:Array.from({length:n},(_,i)=>({questionId:'q'+i,selected:[0]}))});
test('streak counts consecutive days with at least ten answers, across a DST change',()=>{
 const attempts=[day('2026-10-24T10:00:00+03:00',12),day('2026-10-25T10:00:00+02:00',15),day('2026-10-26T10:00:00+02:00',10),day('2026-10-27T10:00:00+02:00',3)];
 const s=streak(dailyCounts(attempts),Date.parse('2026-10-27T18:00:00+02:00'));
 assert.equal(s.current,3);assert.equal(s.best,3);assert.equal(s.today,3);
});
test('an unfinished today does not break the streak, a missed day does',()=>{
 const attempts=[day('2026-11-04T10:00:00+02:00',20),day('2026-11-05T10:00:00+02:00',20)];
 assert.equal(streak(dailyCounts(attempts),Date.parse('2026-11-06T08:00:00+02:00')).current,2);
 assert.equal(streak(dailyCounts(attempts),Date.parse('2026-11-07T08:00:00+02:00')).current,0);
});
