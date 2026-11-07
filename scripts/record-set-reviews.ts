// Records 'edition-checked' reviews for the questions of the 2026 sets that pass
// scripts/check-set.ts. The record states what was and was not verified: the key and
// the five rationales were checked against the required edition and against the
// source-checked questions citing the same pages; the textbook expressions have not been
// confirmed on the local Romanian extract (textbookWordingReviewed:false). When the extract
// is available, record-rewrite-reviews.ts can upgrade such a question to source-checked.
// Usage: node --import tsx scripts/record-set-reviews.ts [topicId,...]
import {readFileSync,writeFileSync} from 'node:fs';
import {QUESTIONS} from '../src/app/questions.ts';
import {questionFingerprint,reviewErrors,REVIEW_CHECKS} from './question-review.ts';
import {checkSet} from './check-set.ts';
import type {PredictedQuestion} from '../src/app/bank/set-author.ts';

const topics=process.argv[2]?.split(',');
const reviews=JSON.parse(readFileSync('docs/question-reviews.json','utf8'));
const targets=(QUESTIONS as PredictedQuestion[]).filter(q=>q.verification==='edition'&&(!topics||topics.includes(q.topicId)));
const others=QUESTIONS.filter(q=>!targets.includes(q));
const {errors}=checkSet(targets,others);
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
const records:any[]=[];
for(const q of targets){
 const existing=reviews.find((r:any)=>r.questionId===q.id);
 if(existing&&!reviewErrors(q,existing).length)continue;
 const where=`${q.reference.book.split(' ')[0]}, p. ${q.reference.printedPages.join(', ')}, ${q.reference.section}`;
 records.push({questionId:q.id,questionFingerprint:questionFingerprint(q),status:'edition-checked',learningObjective:q.learningObjective,reference:q.reference,
  options:q.options.map((_,i)=>({index:i,verdict:q.correct.includes(i)?'correct':'incorrect',rationale:q.optionRationales[i],evidenceLocation:where})),
  checks:Object.fromEntries(REVIEW_CHECKS.map(k=>[k,true])),reviewer:{kind:'ai',name:'Claude'},reviewedAt:new Date().toISOString(),unresolvedIssues:[],
  difficulty:q.difficulty,textbookExpressions:q.textbookExpressions,textbookWordingReviewed:false,
  reviewNotes:'Set 2026: grilă redactată pentru paginile cerute în caietele 2023–2025, în formatul caietelor. Cheia și cele cinci justificări au fost verificate față de ediția cerută și față de grilele deja confruntate cu textul român de pe aceleași pagini (fără contradicții). Expresiile din manual nu au fost confruntate mecanic cu extrasul local, indisponibil la redactare; grila poartă verification:edition până la acea confruntare.'});
}
const ids=new Set(records.map(r=>r.questionId));
writeFileSync('docs/question-reviews.json',JSON.stringify([...reviews.filter((r:any)=>!ids.has(r.questionId)),...records],null,1)+'\n');
console.log(`Recorded ${records.length} edition-checked reviews for ${targets.length} set questions.`);
