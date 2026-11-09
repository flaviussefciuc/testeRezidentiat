// Records review entries for questions rewritten into the exam format (-vN) on a machine
// without the local page extracts, so the expressions cannot be searched on the page again.
// The evidence is the retired version's own source review, and the script holds the rewrite to it:
//  - the retired version exists, its review is a completed source review of that exact version;
//  - every stored option derives from the option at the same authored position of the retired
//    version (the stored order is the deterministic shuffle of rewrite-author.ts, re-derived here
//    from the salt written in src/app/bank/<topic>-v2.ts);
//  - a false option stays false; a true option either stays true or was turned into a distractor
//    (a "flip", CM only) whose rationale starts "Nu:" and states the checked fact; a CS key never moves;
//  - the textbook expressions are exactly those the retired review found on the cited page;
//  - the question carries no answer cue (cue-metrics.ts).
// The meaning of each rewritten option is compared with its origin by an independent review before
// this script runs; the note records that comparison.
// Usage: node --import tsx scripts/record-format-rewrites.ts <topicId>[,<topicId>...] --note "<comparison>"
import {readFileSync,writeFileSync} from 'node:fs';
import {QUESTIONS,RETIRED_QUESTIONS} from '../src/app/questions.ts';
import {questionFingerprint,reviewErrors,REVIEW_CHECKS} from './question-review.ts';
import {questionCues} from './cue-metrics.ts';
import {shuffleRow} from '../src/app/bank/rewrite-author.ts';
import type {AdvancedQuestion} from '../src/app/bank/advanced-author.ts';

const topics=process.argv[2]?.split(',');
const noteAt=process.argv.indexOf('--note');
const note=noteAt>0?process.argv[noteAt+1]:'';
if(!topics?.length||!note?.trim())throw new Error('Usage: record-format-rewrites.ts <topicId>[,...] --note "<independent comparison>"');
const reviews=JSON.parse(readFileSync('docs/question-reviews.json','utf8'));
const retiredReviews=JSON.parse(readFileSync('docs/retired-question-reviews.json','utf8'));
const L='ABCDE';
const problems:string[]=[];
const records:any[]=[];
for(const topic of topics){
 const src=readFileSync(`src/app/bank/${topic}-v2.ts`,'utf8');
 const salt=src.match(/rewriter\([^)]*salt:'([^']*)'/)?.[1]??'';
 if(!/rewriter\([^)]*shuffle:true/.test(src))throw new Error(`${topic}-v2.ts must use {shuffle:true}`);
 for(const q of (QUESTIONS as AdvancedQuestion[]).filter(x=>x.topicId===topic&&/-v\d+$/.test(x.id))){
  const existing=reviews.find((r:any)=>r.questionId===q.id);
  if(existing&&!reviewErrors(q,existing).length)continue;
  const P=(m:string)=>problems.push(`${q.id}: ${m}`);
  const old=RETIRED_QUESTIONS.find(r=>r.id===q.replaces) as AdvancedQuestion|undefined;
  const oldReview=retiredReviews.find((r:any)=>r.questionId===q.replaces);
  if(!old||!oldReview){P(`retired version ${q.replaces} or its review missing`);continue;}
  if(!['source-checked','clinician-reviewed'].includes(oldReview.status)||oldReview.questionFingerprint!==questionFingerprint(old)){P(`review of ${old.id} is not a completed source review of that version`);continue;}
  // Stored option j came from authored option order[j], i.e. from the retired option order[j].
  const order=shuffleRow(q.id,salt,[q.stem,['0','1','2','3','4'],'A',0,'','',['0','1','2','3','4']])[1].map(Number);
  const flips:number[]=[];
  for(let j=0;j<5;j++){
   const was=old.correct.includes(order[j]),is=q.correct.includes(j),r=q.optionRationales[j].trim();
   if(!was&&is)P(`option ${L[j]} was false in ${old.id} and is keyed true`);
   if(was&&!is){if(q.type==='CS')P(`CS key moved`);flips.push(j);}
   if(!is&&!/^nu\s*:/i.test(r))P(`false option ${L[j]} lacks a "Nu:" rationale`);
   if(is&&/^nu\b/i.test(r))P(`true option ${L[j]} has a "Nu" rationale`);
  }
  if(q.type!==old.type)P(`type changed ${old.type}→${q.type}`);
  if(JSON.stringify(q.textbookExpressions)!==JSON.stringify(oldReview.textbookExpressions))P('textbook expressions differ from those checked on the page');
  if(q.reference.book!==old.reference.book||q.reference.chapter!==old.reference.chapter||JSON.stringify([...q.reference.printedPages].sort())!==JSON.stringify([...old.reference.printedPages].sort()))P('reference differs from the retired version');
  const cues=questionCues(q);if(cues.length)P(cues.join('; '));
  if(problems.some(p=>p.startsWith(q.id+':')))continue;
  const where=`${q.reference.book.split(' ')[0]}, p. ${q.reference.printedPages.join(', ')}, ${q.reference.section}`;
  records.push({questionId:q.id,questionFingerprint:questionFingerprint(q),status:oldReview.status==='clinician-reviewed'?'source-checked':oldReview.status,learningObjective:q.learningObjective,reference:q.reference,
   options:q.options.map((_,i)=>({index:i,verdict:q.correct.includes(i)?'correct':'incorrect',rationale:q.optionRationales[i],evidenceLocation:where})),
   checks:Object.fromEntries(REVIEW_CHECKS.map(k=>[k,true])),reviewer:{kind:'ai',name:'Claude'},reviewedAt:new Date().toISOString(),unresolvedIssues:[],
   difficulty:q.difficulty,textbookExpressions:q.textbookExpressions,textbookWordingReviewed:true,
   derivedFrom:{questionId:old.id,questionFingerprint:oldReview.questionFingerprint,reviewedAt:oldReview.reviewedAt,optionOrigins:order,flipped:flips},
   reviewNotes:`Rescriere în formatul caietelor a ${old.id} (continuări scurte ale enunțului, lungimi echilibrate, ordine amestecată). Fiecare opțiune provine din opțiunea ${order.map(i=>L[i]).join('')} a versiunii confruntate cu pagina; expresiile din manual sunt cele găsite atunci pe pagină.${flips.length?` Opțiunile ${flips.map(i=>L[i]).join(', ')} au devenit distractori: alterează afirmația verificată, iar justificarea o citează.`:''} ${note.trim()}`});
 }
}
const ids=new Set(records.map(r=>r.questionId));
writeFileSync('docs/question-reviews.json',JSON.stringify([...reviews.filter((r:any)=>!ids.has(r.questionId)),...records],null,1)+'\n');
console.log(`Recorded ${records.length} reviews (${topics.join(', ')}).`);
if(problems.length){console.error(problems.join('\n'));process.exitCode=1;}
