import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {TOPICS} from '../src/app/topics.ts';
import {EXAM_WEIGHTS,EXAM_YEARS,EXAM_CM_CARDINALITY} from '../src/app/exam-weights.ts';
import {examWeights,parseAnalysis,type ExamItem} from '../scripts/exam-history.ts';

const history=JSON.parse(readFileSync(new URL('../public/exam-history.json',import.meta.url),'utf8'));
const items:ExamItem[]=history.items;
const ranges=(topicId:string)=>TOPICS.find(t=>t.id===topicId)!.pages.split(';').map(s=>s.trim().split('–').map(Number));

test('each analysed paper has 200 items: 50 CS then 150 CM, every one in a syllabus chapter',()=>{
 assert.deepEqual(history.years,[2023,2024,2025]);
 for(const year of history.years){
  const paper=items.filter(i=>i.year===year);
  assert.equal(paper.length,200,String(year));
  assert.deepEqual(paper.map(i=>i.n),Array.from({length:200},(_,i)=>i+1));
  assert.equal(paper.filter(i=>i.type==='CS').length,50);
  assert.ok(paper.every(i=>i.type===(i.n<=50?'CS':'CM')));
 }
 for(const i of items){
  const topic=TOPICS.find(t=>t.id===i.topicId);
  assert.ok(topic,`${i.year}#${i.n}`);
  assert.equal(topic!.book,i.book,`${i.year}#${i.n}`);
  // A cited page is kept only when the chapter's included ranges contain it.
  assert.ok(i.pages.every(p=>ranges(i.topicId).some(([lo,hi])=>p>=lo&&p<=(hi??lo))),`${i.year}#${i.n}`);
  assert.ok(i.otherPages.every(p=>!ranges(i.topicId).some(([lo,hi])=>p>=lo&&p<=(hi??lo))),`${i.year}#${i.n}`);
 }
 // Only a handful of attributions point outside the chapter's own pages.
 assert.ok(items.filter(i=>!i.pages.length).length<=6);
});
test('the 2025 keys follow the exam rules and give the CM cardinality split',()=>{
 const paper=items.filter(i=>i.year===2025);
 assert.ok(paper.every(i=>i.key&&/^[A-E]+$/.test(i.key)));
 assert.ok(paper.filter(i=>i.type==='CS').every(i=>i.key!.length===1));
 assert.ok(paper.filter(i=>i.type==='CM').every(i=>i.key!.length>=2&&i.key!.length<=4));
 assert.deepEqual(EXAM_CM_CARDINALITY,[2,3,4].map(k=>paper.filter(i=>i.type==='CM'&&i.key!.length===k).length));
 assert.equal(EXAM_CM_CARDINALITY.reduce((a,b)=>a+b,0),150);
 // Earlier papers carry the text/table attribution instead of the key.
 for(const year of [2023,2024]){const p=items.filter(i=>i.year===year);assert.ok(p.every(i=>i.kind&&!i.key));assert.ok(p.filter(i=>i.kind!=='text').length>=40,String(year));}
});
test('the generated chapter weights match the data and sum to a full paper per year',()=>{
 assert.deepEqual(EXAM_YEARS,history.years);
 assert.deepEqual(EXAM_WEIGHTS,examWeights(items));
 assert.equal(EXAM_WEIGHTS.length,TOPICS.length);
 for(let y=0;y<history.years.length;y++)assert.equal(EXAM_WEIGHTS.reduce((s,w)=>s+w.perYear[y],0),200);
 const w=(id:string)=>EXAM_WEIGHTS.find(x=>x.topicId===id)!;
 assert.ok(w('cardiologie').mean>=18&&w('ortopedie').mean>=10&&w('epidemio').mean<=1.5);
 assert.ok(EXAM_WEIGHTS.every(x=>x.pages.every(([p,n])=>Number.isInteger(p)&&n>=1)));
});
test('the parser reads a per-question table and splits run-together pages',()=>{
 const html='<table><tr><th>Grilă</th><th>Carte</th><th>Capitol</th><th>Pagină</th><th>Text/tabel</th></tr><tr><td>1</td><td>Lawrence</td><td>Ortopedie</td><td>613614</td><td>Tabel</td></tr><tr><td>51</td><td>Kumar</td><td>CAP. 30 – CARDIOLOGIE</td><td>1047, 1048</td><td>ABD</td></tr></table>';
 const [a,b]=parseAnalysis(2099,html);
 assert.deepEqual([a.type,a.topicId,a.pages,a.kind,a.key],['CS','ortopedie',[613,614],'table',null]);
 assert.deepEqual([b.type,b.topicId,b.pages,b.kind,b.key],['CM','cardiologie',[1047,1048],null,'ABD']);
});
