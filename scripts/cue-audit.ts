// CLI for the guessability audit (see cue-metrics.ts). Writes tmp/cue-audit.json.
// Usage: node --import tsx scripts/cue-audit.ts [--gate] [--topic <id>[,<id>...]] [--out <file>]
import {writeFileSync,mkdirSync} from 'node:fs';
import {QUESTIONS} from '../src/app/questions.ts';
import {metrics,gateFailures,questionCues} from './cue-metrics.ts';

const arg=(k:string)=>{const i=process.argv.indexOf(k);return i>=0?process.argv[i+1]:undefined;};
const topicFilter=arg('--topic')?.split(',');
const out=arg('--out')??'tmp/cue-audit.json';
const topics=[...new Set(QUESTIONS.map(q=>q.topicId))];
const perTopic=Object.fromEntries(topics.map(t=>{const m=metrics(QUESTIONS.filter(q=>q.topicId===t));return [t,{...m,gateFailures:gateFailures(m,'topic')}];}));
const bank=metrics(QUESTIONS);
const ranking=topics.map(t=>[t,perTopic[t].projectedCueScore950] as const).sort((a,b)=>b[1]-a[1]);
const cuedQuestions=QUESTIONS.map(q=>({id:q.id,topicId:q.topicId,cues:questionCues(q)})).filter(x=>x.cues.length);
mkdirSync('tmp',{recursive:true});
writeFileSync(out,JSON.stringify({date:new Date().toISOString().slice(0,10),bank:{...bank,gateFailures:gateFailures(bank,'bank')},ranking,perTopic,cuedQuestions},null,1)+'\n');
const show=topicFilter?topicFilter.map(t=>[t,perTopic[t]] as const):[['BANK',{...bank,gateFailures:gateFailures(bank,'bank')}] as const];
for(const [t,m] of show){
 if(!m){console.error(`Unknown topic ${t}`);process.exitCode=1;continue;}
 console.log(`${t}: ${m.questions}q · cue score ${m.projectedCueScore950}/950 (random ${m.projectedRandomScore950}) · CS longest ${m.csCorrectIsLongestPct}% · guesser CS ${m.guesserCsPct}% CM ${m.guesserCmPerOptionPct}% · abs ${m.absoluteWordingCorrectPct}/${m.absoluteWordingIncorrectPct}% · median ${m.optionMedianWords}w · lowercase ${m.lowercaseOptionPct}% · cued ${m.questionsWithCues}`);
 for(const f of m.gateFailures)console.log('  ✗ '+f);
}
if(!topicFilter)console.log('Worst topics:',ranking.slice(0,10).map(([t,s])=>`${t} ${s}`).join(', '));
if(process.argv.includes('--gate')&&show.some(([,m])=>!m||m.gateFailures.length))process.exitCode=1;
