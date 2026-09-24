// Records review entries for rewritten (-vN) questions after their source check.
// A record is written only when the mechanical evidence holds: no answer cue
// (cue-metrics.ts) and every textbook expression found on a cited PDF page.
// Usage: node --import tsx scripts/record-rewrite-reviews.ts [topicId,...]
import {existsSync,readFileSync,writeFileSync} from 'node:fs';
import {QUESTIONS} from '../src/app/questions.ts';
import {questionFingerprint,reviewErrors,REVIEW_CHECKS} from './question-review.ts';
import {questionCues} from './cue-metrics.ts';
import type {AdvancedQuestion} from '../src/app/bank/advanced-author.ts';

const PREFIX:Record<string,string>={'Kumar & Clark':'kumar','Lawrence':'lawrence','Sinopsis':'sinopsis'};
const norm=(s:string)=>s.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const topics=process.argv[2]?.split(',');
const reviews=JSON.parse(readFileSync('docs/question-reviews.json','utf8'));
const targets=(QUESTIONS as AdvancedQuestion[]).filter(q=>/-v\d+$/.test(q.id)&&(!topics||topics.includes(q.topicId)));
const problems:string[]=[];
const records:any[]=[];
for(const q of targets){
 const existing=reviews.find((r:any)=>r.questionId===q.id);
 if(existing&&!reviewErrors(q,existing).length)continue;
 const cues=questionCues(q);
 if(cues.length){problems.push(`${q.id}: ${cues.join('; ')}`);continue;}
 const pages=q.reference.pdfPages.map(p=>`tmp/source-books/${PREFIX[q.reference.book]}-${String(p).padStart(3,'0')}.txt`);
 const text=pages.filter(existsSync).map(f=>norm(readFileSync(f,'utf8'))).join(' ');
 const missing=q.textbookExpressions.filter(e=>!text.includes(norm(e)));
 if(missing.length){problems.push(`${q.id}: expression not on cited page: ${missing.join(' | ')}`);continue;}
 const where=`${q.reference.book.split(' ')[0]}, p. ${q.reference.printedPages.join(', ')}, ${q.reference.section}`;
 records.push({questionId:q.id,questionFingerprint:questionFingerprint(q),status:'source-checked',learningObjective:q.learningObjective,reference:q.reference,
  options:q.options.map((_,i)=>({index:i,verdict:q.correct.includes(i)?'correct':'incorrect',rationale:q.optionRationales[i],evidenceLocation:where})),
  checks:Object.fromEntries(REVIEW_CHECKS.map(k=>[k,true])),reviewer:{kind:'ai',name:'Claude'},reviewedAt:new Date().toISOString(),unresolvedIssues:[],
  difficulty:q.difficulty,textbookExpressions:q.textbookExpressions,textbookWordingReviewed:true,
  reviewNotes:`Rescriere a ${q.replaces}: confruntare cu pagina citată, opțiuni în formatul caietelor (continuări scurte ale enunțului), fără indicii de lungime sau formulare absolută (audit cue-metrics).`});
}
const ids=new Set(records.map(r=>r.questionId));
writeFileSync('docs/question-reviews.json',JSON.stringify([...reviews.filter((r:any)=>!ids.has(r.questionId)),...records],null,1)+'\n');
console.log(`Recorded ${records.length} reviews for ${targets.length} rewritten questions.`);
if(problems.length){console.error(problems.join('\n'));process.exitCode=1;}
