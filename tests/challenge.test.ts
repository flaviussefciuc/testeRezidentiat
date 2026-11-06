import test from 'node:test';
import assert from 'node:assert/strict';
import {QUESTIONS} from '../src/app/questions.ts';
import {challengeIds} from '../src/app/challenge.ts';

test('the daily challenge is the same for everyone, balanced and spread over chapters',()=>{
 const a=challengeIds('2026-11-06',QUESTIONS),b=challengeIds('2026-11-06',[...QUESTIONS].reverse());
 assert.deepEqual(a,b);assert.equal(a.length,10);
 const qs=a.map(id=>QUESTIONS.find(q=>q.id===id)!);
 assert.equal(qs.filter(q=>q.type==='CS').length,3);
 assert.equal(new Set(qs.map(q=>q.topicId)).size,10);
 assert.notDeepEqual(challengeIds('2026-11-07',QUESTIONS),a);
});
