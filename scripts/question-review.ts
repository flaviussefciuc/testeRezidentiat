import {createHash} from 'node:crypto';
import type {Question} from '../src/app/models.ts';
import {TOPICS} from '../src/app/topics.ts';
import type {SourcedQuestion} from '../src/app/bank/source-author.ts';

export const REVIEW_CHECKS=['withinIncludedSyllabusPages','contextResolvesAmbiguity','distractorsClinicallyPlausible','noAnswerLengthOrAbsoluteWordingCue','independentObjectiveNotParaphraseDuplicate','explanationAddressesIncorrectOptions','terminologyReviewedInRomanian','keySupportedByRequestedEdition'] as const;

// A review applies to one exact version, not simply to a reusable ID.
export function questionFingerprint(q:Question):string {
 const s=q as SourcedQuestion;
 return createHash('sha256').update(JSON.stringify({id:q.id,topicId:q.topicId,type:q.type,stem:q.stem,options:q.options,correct:q.correct,explanation:q.explanation,source:q.source,reference:s.reference??null,learningObjective:s.learningObjective??null,optionRationales:s.optionRationales??null})).digest('hex');
}

export function reviewErrors(q:Question,review:any):string[]{
 const errors:string[]=[];
 const sourced=q as SourcedQuestion;
 const topic=TOPICS.find(t=>t.id===q.topicId);
 if(review?.questionId!==q.id||review?.questionFingerprint!==questionFingerprint(q))errors.push('Review does not match the exact question version');
 if(!['source-checked','clinician-reviewed'].includes(review?.status))errors.push('No completed source review');
 if(!review?.reviewer?.name||!['ai','clinician'].includes(review?.reviewer?.kind)||!Number.isFinite(Date.parse(review?.reviewedAt)))errors.push('Missing reviewer provenance');
 if(review?.status==='clinician-reviewed'&&review?.reviewer?.kind!=='clinician')errors.push('AI review cannot be labelled clinician review');
 if(!review?.learningObjective||review.learningObjective!==sourced.learningObjective)errors.push('Missing or changed learning objective');
 if(!topic||!sourced.reference||sourced.reference.book!==topic.book||sourced.reference.chapter!==topic.chapter||!sourced.reference.edition||!sourced.reference.section)errors.push('Source does not match syllabus chapter');
 const ranges=topic?.pages.split(';').map(s=>s.trim().split('–').map(Number))??[];
 const pages=sourced.reference?.printedPages;
 const pdfPages=sourced.reference?.pdfPages;
 if(!Array.isArray(pages)||!pages.length||pages.some(p=>!Number.isInteger(p)||!ranges.some(([lo,hi])=>p>=lo&&p<=(hi??lo))))errors.push('Page outside included syllabus ranges');
 if(!Array.isArray(pdfPages)||pdfPages.length!==pages?.length||pdfPages.some(p=>!Number.isInteger(p)||p<1))errors.push('Missing PDF page reference');
 if(JSON.stringify(review?.reference)!==JSON.stringify(sourced.reference))errors.push('Review reference differs from question');
 if(!Array.isArray(review?.options)||review.options.length!==5||new Set(review.options.map((o:any)=>o.index)).size!==5||!review.options.every((o:any)=>Number.isInteger(o.index)&&o.index>=0&&o.index<5&&o.verdict===(q.correct.includes(o.index)?'correct':'incorrect')&&o.rationale?.trim()&&o.rationale===sourced.optionRationales?.[o.index]&&o.evidenceLocation?.trim()))errors.push('Incomplete or mismatched option review');
 if(!REVIEW_CHECKS.every(k=>review?.checks?.[k]===true))errors.push('Editorial checks incomplete');
 if(!Array.isArray(review?.unresolvedIssues)||review.unresolvedIssues.length)errors.push('Unresolved issues remain');
 return errors;
}
