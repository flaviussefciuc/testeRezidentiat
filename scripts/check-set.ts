// Checks a 2026 set before it is published: format, answer cues, overlap with the live
// bank, pages inside the chapter's syllabus ranges, and a short per-question summary.
// Usage: node --import tsx scripts/check-set.ts src/app/bank/sets/<topic>-2026.ts
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
import {QUESTIONS} from '../src/app/questions.ts';
import {TOPICS} from '../src/app/topics.ts';
import {questionCues,metrics,gateFailures} from './cue-metrics.ts';
import {advancedEligibilityErrors} from '../src/app/bank/advanced-author.ts';
import type {PredictedQuestion} from '../src/app/bank/set-author.ts';
import {fromTable} from '../src/app/bank-codec.ts';

const STOP=new Set('si sau de la in cu pe din al ale a o un una este sunt se care pentru prin mai cel cea ce nu lui ei sa fi sau'.split(' '));
const words=(s:string)=>new Set(s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,'').split(/[^a-z0-9]+/).filter(t=>t.length>2&&!STOP.has(t)));
const jaccard=(a:Set<string>,b:Set<string>)=>{let n=0;for(const x of a)if(b.has(x))n++;return n/(a.size+b.size-n);};

export function checkSet(set:PredictedQuestion[],bank=QUESTIONS):{errors:string[];warnings:string[];summary:string[]}{
 const errors:string[]=[],warnings:string[]=[],summary:string[]=[];
 const ids=new Set<string>(),bankIds=new Set(bank.map(q=>q.id));
 const bankWords=bank.map(q=>({id:q.id,topicId:q.topicId,w:words(q.stem+' '+q.options.join(' '))}));
 for(const q of set){
  const tag=q.id;
  if(ids.has(q.id))errors.push(`${tag}: duplicate id in set`);ids.add(q.id);
  if(bankIds.has(q.id))errors.push(`${tag}: id already in the bank`);
  const topic=TOPICS.find(t=>t.id===q.topicId);
  if(!topic){errors.push(`${tag}: unknown topic`);continue;}
  if(q.options.length!==5||new Set(q.options.map(o=>o.trim().toLowerCase())).size!==5)errors.push(`${tag}: five distinct options required`);
  if(q.type==='CM'&&(q.correct.length<2||q.correct.length>4))errors.push(`${tag}: CM needs 2–4 correct options`);
  if(!q.stem.trim().endsWith(':')&&!q.stem.trim().endsWith('?'))warnings.push(`${tag}: stem should end with ':' (papers' style) or '?'`);
  if(q.options.some(o=>/[.;]$/.test(o.trim())))warnings.push(`${tag}: options end with punctuation; the papers use bare continuations`);
  if(q.options.some(o=>o.trim().split(/\s+/).length>14))warnings.push(`${tag}: an option is longer than 14 words`);
  if(q.options.some(o=>/^[A-ZĂÂÎȘȚ][a-zăâîșț]/.test(o.trim())&&!/^[A-Z][A-Za-z0-9-]*\b/.test(o.trim())))warnings.push(`${tag}: options should start lower-case unless they begin with a proper noun or acronym`);
  const ranges=topic.pages.split(';').map(s=>s.trim().split('–').map(Number));
  for(const p of q.reference.printedPages)if(!ranges.some(([lo,hi])=>p>=lo&&p<=(hi??lo)))errors.push(`${tag}: page ${p} outside ${topic.pages}`);
  errors.push(...advancedEligibilityErrors(q).map(e=>`${tag}: ${e}`));
  for(const c of questionCues(q))errors.push(`${tag}: cue — ${c}`);
  if(q.options.some(o=>/\b(obligator\w*|întotdeauna|niciodată|exclusiv|garantat)\b/iu.test(o)))errors.push(`${tag}: absolute wording in an option`);
  const w=words(q.stem+' '+q.options.join(' '));
  let best={id:'',j:0};
  for(const b of bankWords){const j=jaccard(w,b.w);if(j>best.j)best={id:b.id,j};}
  if(best.j>=0.5)errors.push(`${tag}: near-duplicate of ${best.id} (${Math.round(best.j*100)}% shared words)`);
  else if(best.j>=0.35)warnings.push(`${tag}: overlaps ${best.id} (${Math.round(best.j*100)}% shared words) — make sure the objective differs`);
  for(const o of set)if(o!==q&&jaccard(w,words(o.stem+' '+o.options.join(' ')))>=0.5)warnings.push(`${tag}: sibling of ${o.id} inside the set`);
  summary.push(`${q.id} ${q.type} key=${q.correct.map(i=>'ABCDE'[i]).join('')} p.${q.reference.printedPages.join(',')}${fromTable(q)?' [tabel]':''} — ${q.stem.slice(0,70)}`);
 }
 const m=metrics(set);
 for(const f of gateFailures(m,'topic'))warnings.push(`set gate: ${f}`);
 summary.push(`CS ${m.cs} · CM ${m.cm} (2/3/4 keys: ${[2,3,4].map(k=>m.cmCardinality[k]??0).join('/')}) · table-based ${set.filter(q=>fromTable(q)).length} · median option words ${m.optionMedianWords}`);
 return {errors,warnings,summary};
}

if(process.argv[1]&&/check-set\.ts$/.test(process.argv[1])){
 const file=process.argv[2];
 if(!file){console.error('usage: check-set.ts <set file>');process.exit(1);}
 const mod=await import(pathToFileURL(resolve(file)).href);
 const set=Object.values(mod).find(v=>Array.isArray(v)) as PredictedQuestion[];
 const {errors,warnings,summary}=checkSet(set);
 console.log(summary.join('\n'));
 if(warnings.length)console.log('\nWARNINGS\n'+warnings.join('\n'));
 if(errors.length){console.error('\nERRORS\n'+errors.join('\n'));process.exit(1);}
 console.log(`\nOK: ${set.length} questions, no errors.`);
}
