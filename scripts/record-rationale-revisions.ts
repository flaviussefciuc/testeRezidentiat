// Re-records the review of a live question whose option rationales were rewritten
// (e.g. a bare "Nu." expanded into the fact that makes the option false) while the stem,
// options, key, reference, objective, difficulty and textbook expressions stayed exactly
// as reviewed. The earlier source check of the key still stands; the new record keeps the
// old status and evidence, carries the new rationales and says when and why they changed.
// Usage: node --import tsx scripts/record-rationale-revisions.ts [topicId,...] [--note "<what changed>"]
import {readFileSync,writeFileSync} from 'node:fs';
import {QUESTIONS} from '../src/app/questions.ts';
import {questionFingerprint,reviewErrors} from './question-review.ts';
import {questionCues} from './cue-metrics.ts';
import type {SourcedQuestion} from '../src/app/bank/source-author.ts';
import type {AdvancedQuestion} from '../src/app/bank/advanced-author.ts';

const BARE=/^(nu|da|corect|incorect|fals|adevărat|criteriu)[.!]?$/i;
const topics=process.argv[2]?.startsWith('--')?undefined:process.argv[2]?.split(',');
const noteAt=process.argv.indexOf('--note');
// What changed in the rationales; the default describes the November 2026 replacement of bare "Nu." answers.
const what=noteAt>0?process.argv[noteAt+1]:'cele de tip „Nu.” înlocuite cu faptul care face opțiunea falsă sau adevărată';
const reviews=JSON.parse(readFileSync('docs/question-reviews.json','utf8'));
const byId=new Map<string,any>(reviews.map((r:any)=>[r.questionId,r]));
const same=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);
let updated=0;const problems:string[]=[];
for(const q of QUESTIONS as (SourcedQuestion&Partial<AdvancedQuestion>)[]){
 if(topics&&!topics.includes(q.topicId))continue;
 const r=byId.get(q.id);
 if(!r||!reviewErrors(q,r).length)continue;
 // Only the rationales (and therefore the explanation and fingerprint) may differ.
 const frozen=same(r.learningObjective,q.learningObjective)&&same(r.reference,q.reference)&&same(r.difficulty,q.difficulty)&&same(r.textbookExpressions,q.textbookExpressions)
  &&r.options.length===5&&r.options.every((o:any)=>o.verdict===(q.correct.includes(o.index)?'correct':'incorrect'));
 if(!frozen){problems.push(`${q.id}: more than the rationales changed; needs a full review`);continue;}
 if(q.optionRationales.some(x=>BARE.test(x.trim())||x.trim().length<8)){problems.push(`${q.id}: a rationale is still bare`);continue;}
 const cues=questionCues(q);if(cues.length){problems.push(`${q.id}: ${cues.join('; ')}`);continue;}
 const next={...r,questionFingerprint:questionFingerprint(q),options:r.options.map((o:any)=>({...o,rationale:q.optionRationales[o.index]})),reviewedAt:new Date().toISOString(),
  rationalesRevisedAt:new Date().toISOString().slice(0,10),
  reviewNotes:`${r.reviewNotes??''} Justificările opțiunilor au fost rescrise la ${new Date().toISOString().slice(0,10)} (${what}); enunțul, opțiunile, cheia, referința, obiectivul și expresiile din manual sunt neschimbate, deci confruntarea anterioară a cheii cu textul rămâne valabilă.`.trim()};
 byId.set(q.id,next);updated++;
}
writeFileSync('docs/question-reviews.json',JSON.stringify(reviews.map((r:any)=>byId.get(r.questionId)??r),null,1)+'\n');
console.log(`Re-recorded ${updated} reviews after rationale revisions.`);
if(problems.length){console.error(problems.join('\n'));process.exitCode=1;}
