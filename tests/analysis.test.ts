import test from 'node:test';
import assert from 'node:assert/strict';
import {losses,markHabit} from '../src/app/analysis.ts';
import type {Scorable} from '../src/app/scoring.ts';

const cs:Scorable={id:'cs',topicId:'a',type:'CS',correct:[1]};
const cm:Scorable={id:'cm',topicId:'a',type:'CM',correct:[0,1,2]};
const lookup=new Map([[cs.id,cs],[cm.id,cm]]);

test('lost points add up to the maximum minus the score',()=>{
 for(const answers of [
  [{questionId:'cs',selected:[0]},{questionId:'cm',selected:[0,3]}],
  [{questionId:'cs',selected:[]},{questionId:'cm',selected:[0]}],
  [{questionId:'cs',selected:[1]},{questionId:'cm',selected:[0,1,2,3,4]}],
  [{questionId:'cm',selected:[0,1]}],
 ]){
  const l=losses(answers,lookup);
  assert.equal(l.omitted+l.falseMarks+l.wrongCs+l.voidCm+l.blank,l.max-l.points,JSON.stringify(answers));
 }
});
test('the marking habit compares marks with the key size',()=>{
 const h=markHabit([{questionId:'cm',selected:[0]},{questionId:'cm',selected:[0,1,2,3]},{questionId:'cs',selected:[1]}],lookup);
 assert.equal(h.answered,2);assert.equal(h.marked,5);assert.equal(h.truth,6);
 assert.deepEqual(h.diff,{'-2':1,'-1':0,'0':0,'+1':1,'+2':0});
});
