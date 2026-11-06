import test from 'node:test';
import assert from 'node:assert/strict';
import {dueFacts,factDue,recordFact,pickFacts,type Fact,type FactLog} from '../src/app/facts.ts';

const DAY=86400000,t0=Date.parse('2026-11-01T08:00:00Z');
const fact=(key:string):Fact=>({key,qid:key,topicId:'a',stem:'s',text:'t',truth:true,why:'w',ref:'r'});
test('statements climb boxes when known and return the next day when missed',()=>{
 const log:FactLog={};
 recordFact(log,'a',true,t0);assert.equal(factDue(log.a),t0+2*DAY);
 recordFact(log,'a',true,t0+2*DAY);assert.equal(factDue(log.a),t0+2*DAY+4*DAY);
 recordFact(log,'a',false,t0+6*DAY);assert.equal(factDue(log.a),t0+7*DAY);
 // legacy entries without a box
 const legacy:FactLog={b:[3,2,t0,1]};assert.equal(factDue(legacy.b),t0+2*DAY);
});
test('due statements come first in a round',()=>{
 const log:FactLog={};recordFact(log,'due',false,t0);recordFact(log,'known',true,t0);
 const facts=[fact('due'),fact('known'),fact('new')];
 assert.deepEqual(dueFacts(facts,log,t0+DAY).map(f=>f.key),['due']);
 assert.equal(pickFacts(facts,log,1,t0+DAY)[0].key,'due');
});
