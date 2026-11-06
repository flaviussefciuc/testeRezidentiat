import test from 'node:test';
import assert from 'node:assert/strict';
import {QUESTIONS} from '../src/app/questions.ts';
import {ankiQuestions} from '../src/app/anki.ts';

test('Anki export has the import headers and exactly three tab-separated fields per card',()=>{
 const qs=QUESTIONS.slice(0,25),text=ankiQuestions(qs,'Rezi::Test',id=>id===qs[0].id?'notă <cu> tab\tși\nrând':'');
 const lines=text.trimEnd().split('\n');
 assert.deepEqual(lines.slice(0,5),['#separator:tab','#html:true','#notetype:Basic','#deck:Rezi::Test','#tags column:3']);
 const cards=lines.slice(5);assert.equal(cards.length,25);
 for(const c of cards)assert.equal(c.split('\t').length,3);
 assert.ok(cards[0].includes('notă &lt;cu&gt; tab și<br>rând'));
 assert.ok(cards.every(c=>c.split('\t')[2].startsWith('rezi::')));
});
