// Records the review of a corrected version (-vN, N≥3) that replaces a retired, already
// source-checked version whose answer key contradicted its own rationales. The stem, the
// reference and the textbook expressions must be unchanged; the verdict of each option is
// re-derived from the new key, and the record says what was corrected and on what evidence.
// Usage: node --import tsx scripts/record-key-corrections.ts <id>=<note> [...]
import {readFileSync,writeFileSync} from 'node:fs';
import {QUESTIONS} from '../src/app/questions.ts';
import {questionFingerprint,reviewErrors} from './question-review.ts';
import {questionCues} from './cue-metrics.ts';
import type {AdvancedQuestion} from '../src/app/bank/advanced-author.ts';

const notes=new Map(process.argv.slice(2).map(a=>{const i=a.indexOf('=');return [a.slice(0,i),a.slice(i+1)] as [string,string];}));
const reviews=JSON.parse(readFileSync('docs/question-reviews.json','utf8'));
const retired=JSON.parse(readFileSync('docs/retired-question-reviews.json','utf8'));
const same=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);
const records:any[]=[];const problems:string[]=[];
for(const [id,note] of notes){
 const q=(QUESTIONS as AdvancedQuestion[]).find(x=>x.id===id);
 if(!q){problems.push(`${id}: not live`);continue;}
 const prev=retired.find((r:any)=>r.questionId===q.replaces);
 if(!q.replaces||!prev){problems.push(`${id}: no retired review for ${q.replaces}`);continue;}
 if(!['source-checked','clinician-reviewed'].includes(prev.status)){problems.push(`${id}: replaced version was not source-checked`);continue;}
 if(!same(prev.reference,q.reference)||!same(prev.textbookExpressions,q.textbookExpressions)){problems.push(`${id}: reference or textbook expressions changed`);continue;}
 const cues=questionCues(q);if(cues.length){problems.push(`${id}: ${cues.join('; ')}`);continue;}
 const where=prev.options[0]?.evidenceLocation??`${q.reference.book.split(' ')[0]}, p. ${q.reference.printedPages.join(', ')}, ${q.reference.section}`;
 records.push({...prev,questionId:q.id,questionFingerprint:questionFingerprint(q),learningObjective:q.learningObjective,
  options:q.options.map((_,i)=>({index:i,verdict:q.correct.includes(i)?'correct':'incorrect',rationale:q.optionRationales[i],evidenceLocation:where})),
  reviewedAt:new Date().toISOString(),difficulty:q.difficulty,unresolvedIssues:[],
  keyCorrection:{replaces:q.replaces,date:new Date().toISOString().slice(0,10),note},
  reviewNotes:`Corecție de cheie a ${q.replaces}: ${note}`});
}
const ids=new Set(records.map(r=>r.questionId));
const next=[...reviews.filter((r:any)=>!ids.has(r.questionId)),...records];
for(const r of records){const q=QUESTIONS.find(x=>x.id===r.questionId)!;const errs=reviewErrors(q,r);if(errs.length)problems.push(`${r.questionId}: ${errs.join('; ')}`);}
if(problems.length){console.error(problems.join('\n'));process.exit(1);}
writeFileSync('docs/question-reviews.json',JSON.stringify(next,null,1)+'\n');
console.log(`Recorded ${records.length} key-correction reviews.`);
