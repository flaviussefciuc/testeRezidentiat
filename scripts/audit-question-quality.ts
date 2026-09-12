import {writeFileSync,mkdirSync,readFileSync} from 'node:fs';
import {QUESTIONS} from '../src/app/questions.ts';
import {MEDICINE_A} from '../src/app/bank/medicine-a.ts';
import {MEDICINE_B} from '../src/app/bank/medicine-b.ts';
import {TOPICS} from '../src/app/topics.ts';
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
const draft=[...MEDICINE_A,...MEDICINE_B];
const reviews=JSON.parse(readFileSync('docs/question-reviews.json','utf8'));
const acceptedIds=new Set<string>();
for(const review of reviews){
 const q=draft.find(q=>q.id===review.questionId);
 if(!q||review.status!=='accepted'||!review.reviewer||!review.reviewedAt||!review.learningObjective||!review.syllabus?.page||!review.syllabus?.romanianEdition||!review.syllabus?.book||!review.syllabus?.chapter)continue;
 if(!Array.isArray(review.options)||review.options.length!==5||new Set(review.options.map((o:any)=>o.index)).size!==5)continue;
 if(!review.options.every((o:any)=>Number.isInteger(o.index)&&o.index>=0&&o.index<5&&o.verdict===(q.correct.includes(o.index)?'correct':'incorrect')&&o.rationale?.trim()&&o.evidenceLocation?.trim()))continue;
 const required=['withinIncludedSyllabusPages','contextResolvesAmbiguity','distractorsClinicallyPlausible','noAnswerLengthOrAbsoluteWordingCue','independentObjectiveNotParaphraseDuplicate','explanationAddressesIncorrectOptions','terminologyReviewedInRomanian','keySupportedByRequestedEdition'];
 if(!required.every(key=>review.checks?.[key]===true)||!Array.isArray(review.unresolvedIssues)||review.unresolvedIssues.length)continue;
 acceptedIds.add(q.id);
}
const accepted=draft.filter(q=>acceptedIds.has(q.id));
const acceptedAudit=audit(accepted);
const releaseReady=accepted.length>=800&&!acceptedAudit.missingMultipleAnswerFormats.length&&!acceptedAudit.structuralErrors.length&&!acceptedAudit.exactQuestionDuplicates.length&&acceptedAudit.idsUnique;
const report={date:'2026-09-12',targetAdditionalAccepted:800,additionalAccepted:accepted.length,publicationStatus:releaseReady?'Eligible for editorial publication decision':'HOLD: draft content is not imported by the application',live:audit(QUESTIONS),draft:audit(draft),accepted:acceptedAudit,medicalValidation:'Review records are evidence of the recorded process, not a claim of psychometric equivalence. Automated checks cannot establish medical correctness.'};
mkdirSync('docs',{recursive:true});writeFileSync('docs/question-quality-audit.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({live:report.live.correctAnswerCounts,draft:report.draft.correctAnswerCounts,draftCount:draft.length,additionalAccepted:accepted.length,missingFormats:report.draft.missingMultipleAnswerFormats,publicationStatus:report.publicationStatus},null,2));
if(process.argv.includes('--release')&&!releaseReady)process.exitCode=1;
