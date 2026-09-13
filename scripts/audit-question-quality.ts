import {writeFileSync,mkdirSync,readFileSync} from 'node:fs';
import {QUESTIONS,LEGACY_QUESTIONS,ADVANCED_CANDIDATES,BANK_TARGET} from '../src/app/questions.ts';
import {advancedEligibilityErrors,type AdvancedQuestion} from '../src/app/bank/advanced-author.ts';
import {MEDICINE_A} from '../src/app/bank/medicine-a.ts';
import {MEDICINE_B} from '../src/app/bank/medicine-b.ts';
import {TOPICS} from '../src/app/topics.ts';
import {reviewErrors} from './question-review.ts';
import type {Question} from '../src/app/models.ts';

const normalize=(s:string)=>s.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase().replace(/[^a-z0-9]/g,'');
function audit(bank:Question[]){
 const seen=new Map<string,string>();
 const duplicates:string[][]=[];
 const structural:string[]=[];
 for(const q of bank){
  const fingerprint=normalize(q.stem)+'::'+q.options.map(normalize).sort().join('::');
  if(seen.has(fingerprint))duplicates.push([seen.get(fingerprint)!,q.id]);
  seen.set(fingerprint,q.id);
  if(q.options.length!==5||new Set(q.options.map(normalize)).size!==5||new Set(q.correct).size!==q.correct.length||q.correct.some(n=>!Number.isInteger(n)||n<0||n>4)||!TOPICS.some(t=>t.id===q.topicId)||!(q.type==='CS'?q.correct.length===1:q.correct.length>=2&&q.correct.length<=4))structural.push(q.id);
 }
 const distribution=Object.fromEntries([1,2,3,4].map(n=>[String(n),bank.filter(q=>q.correct.length===n).length]));
 const cm=bank.filter(q=>q.type==='CM');
 return {
  count:bank.length,
  correctAnswerCounts:distribution,
  missingMultipleAnswerFormats:[2,3,4].filter(n=>!cm.some(q=>q.correct.length===n)),
  fourCorrectShareOfMultiple:cm.length?Math.round(1000*cm.filter(q=>q.correct.length===4).length/cm.length)/10:0,
  idsUnique:new Set(bank.map(q=>q.id)).size===bank.length,
  structuralErrors:structural,
  exactQuestionDuplicates:duplicates,
  // Flags request editorial review; neither heuristic establishes medical correctness.
  possibleWordingCues:bank.filter(q=>q.options.some(o=>/obligator|întotdeauna|niciodată|exclusiv|garantat/i.test(o))).map(q=>q.id),
  possibleDuplicateStems:bank.filter((q,i)=>bank.findIndex(x=>normalize(x.stem)===normalize(q.stem))!==i).map(q=>q.id),
  topicCoverage:TOPICS.map(t=>({id:t.id,count:bank.filter(q=>q.topicId===t.id).length})),
 };
}
const draft=[...MEDICINE_A,...MEDICINE_B,...ADVANCED_CANDIDATES];
const reviews=JSON.parse(readFileSync('docs/question-reviews.json','utf8'));
const acceptedIds=new Set<string>();
const invalidReviews:{questionId:string;errors:string[]}[]=[];
for(const review of reviews){
 const q=draft.find(q=>q.id===review.questionId);
 const errors=q?reviewErrors(q,review):['Unknown question ID'];
 if(errors.length)invalidReviews.push({questionId:review.questionId,errors});
 else if(q!.id.includes('-adv-')&&!advancedEligibilityErrors(q! as AdvancedQuestion).length)acceptedIds.add(q!.id);
}
const accepted=draft.filter(q=>acceptedIds.has(q.id));
const acceptedAudit=audit(accepted);
const netAdditionalActive=QUESTIONS.length-LEGACY_QUESTIONS.length;
const liveAudit=audit(QUESTIONS);
// Latest request: reach 800 accepted questions after reviewing the old bank.
const releaseReady=accepted.length>=BANK_TARGET&&QUESTIONS.length>=BANK_TARGET&&QUESTIONS.every(q=>acceptedIds.has(q.id))&&!acceptedAudit.missingMultipleAnswerFormats.length&&!acceptedAudit.structuralErrors.length&&!acceptedAudit.exactQuestionDuplicates.length&&acceptedAudit.idsUnique&&!invalidReviews.length&&liveAudit.idsUnique&&!liveAudit.structuralErrors.length&&!liveAudit.exactQuestionDuplicates.length;
const report={date:'2026-09-13',minimumEditorialDifficulty:8,baselineActive:LEGACY_QUESTIONS.length,targetAcceptedActive:BANK_TARGET,netAdditionalActive,additionalAccepted:accepted.length,remainingToTarget:Math.max(0,BANK_TARGET-accepted.length),publicationStatus:releaseReady?'Eligible for editorial publication decision':'Expansion incomplete: only source-reviewed new versions with editorial difficulty 8–10 may be published',live:liveAudit,draft:audit(draft),accepted:acceptedAudit,invalidReviews,medicalValidation:'Editorial difficulty is estimated, not measured. Review records are evidence of the recorded process, not a claim of psychometric equivalence. Automated checks cannot establish medical correctness.'};
mkdirSync('docs',{recursive:true});writeFileSync('docs/question-quality-audit.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({live:report.live.correctAnswerCounts,draft:report.draft.correctAnswerCounts,draftCount:draft.length,invalidReviewCount:invalidReviews.length,additionalAccepted:accepted.length,missingFormats:report.draft.missingMultipleAnswerFormats,publicationStatus:report.publicationStatus},null,2));
if(process.argv.includes('--release')&&!releaseReady)process.exitCode=1;
