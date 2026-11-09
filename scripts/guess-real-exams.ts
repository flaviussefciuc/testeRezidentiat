// Knowledge-free strategies on the real papers of 2022–2025, next to the bank.
// Only the official answer keys are public (docs/exam-keys-2022-2025.json): the Ministry does not
// publish the question booklets, so this checks the strategies that need no question text — how
// many options to mark in a CM item and which letters to prefer, fixed or learned from other years
// or from the bank. Every strategy answers every booklet (A–D) of every year and is scored like the
// exam: CS 4 points, CM 1 point per option, 0 if fewer than 2 or more than 4 options are marked.
// Usage: node --import tsx scripts/guess-real-exams.ts [--runs 400] [--papers 100]
import {readFileSync} from 'node:fs';
import {QUESTIONS} from '../src/app/questions.ts';
import {composeExam} from '../src/app/exam-composition.ts';
import {score,type Scorable} from '../src/app/scoring.ts';

const arg=(k:string,d:string)=>{const i=process.argv.indexOf(k);return i>=0?process.argv[i+1]:d;};
const RUNS=+arg('--runs','400'),PAPERS=+arg('--papers','100');
function mulberry32(a:number){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
Math.random=mulberry32(11);const rng=mulberry32(29);
const L='ABCDE';
type Paper=Scorable[];
const data=JSON.parse(readFileSync('docs/exam-keys-2022-2025.json','utf8'));
const YEARS=Object.keys(data.years).sort();
const paperOf=(keys:string[]):Paper=>keys.map((k,i)=>({id:`q${i+1}`,topicId:'exam',type:i<50?'CS':'CM',correct:[...k].map(c=>L.indexOf(c))}));
const exams:Record<string,Paper[]>=Object.fromEntries(YEARS.map(y=>[y,Object.values(data.years[y].booklets).map((b:any)=>paperOf(b.keys))]));
const bankPapers:Paper[]=Array.from({length:PAPERS},()=>composeExam(QUESTIONS,200));

// ---- position statistics (what a candidate could learn from practice) ----
function stats(papers:Paper[]){
 const cs=[0,0,0,0,0],cm=[0,0,0,0,0],sizes=[0,0,0];let ncs=0,ncm=0,repeat=0,pairs=0;
 for(const p of papers){let prev=-1;for(const q of p){if(q.type==='CS'){cs[q.correct[0]]++;ncs++;if(prev>=0){pairs++;if(prev===q.correct[0])repeat++;}prev=q.correct[0];}else{q.correct.forEach(i=>cm[i]++);ncm++;sizes[q.correct.length-2]++;}}}
 return {cs:cs.map(x=>x/ncs),cm:cm.map(x=>x/ncm),sizes:sizes.map(x=>x/ncm),repeat:pairs?repeat/pairs:0};
}
const top=(v:number[],k:number)=>v.map((x,i)=>[x,i]).sort((a,b)=>b[0]-a[0]).slice(0,k).map(x=>x[1]).sort((a,b)=>a-b);
const randK=(k:number)=>{const o=[0,1,2,3,4];for(let i=4;i>0;i--){const j=Math.floor(rng()*(i+1));[o[i],o[j]]=[o[j],o[i]];}return o.slice(0,k).sort((a,b)=>a-b);};

// ---- strategies: CS and CM parts are independent, so each is scored on its own part ----
type Ctx={prior:ReturnType<typeof stats>};
type CsStrategy={name:string;desc:string;answer:(p:Paper,ctx:Ctx)=>number[][];random?:boolean};
type CmStrategy=CsStrategy;
const forCS=(p:Paper,f:(i:number)=>number[])=>p.map((q,i)=>q.type==='CS'?f(i):[]);
const forCM=(p:Paper,f:(i:number)=>number[])=>p.map((q,i)=>q.type==='CM'?f(i):[]);
const CS:CsStrategy[]=[
 {name:'random letter',desc:'a random letter',answer:p=>forCS(p,()=>randK(1)),random:true},
 ...[0,1,2,3,4].map(l=>({name:`always ${L[l]}`,desc:`always ${L[l]}`,answer:(p:Paper)=>forCS(p,()=>[l])})),
 {name:'random B, C or D',desc:'a random middle letter (never A or E)',answer:p=>forCS(p,()=>[1+Math.floor(rng()*3)]),random:true},
 {name:'balance letters',desc:'the letter used least so far in the CS part',random:true,answer:p=>{const used=[0,0,0,0,0];return forCS(p,()=>{const m=Math.min(...used),c=[0,1,2,3,4].filter(i=>used[i]===m),l=c[Math.floor(rng()*c.length)];used[l]++;return [l];});}},
 {name:'learned letter',desc:'the most frequent CS letter of the training papers',answer:(p,ctx)=>forCS(p,()=>top(ctx.prior.cs,1))},
];
const CM:CmStrategy[]=[
 {name:'random 2–4',desc:'2, 3 or 4 random options',answer:p=>forCM(p,()=>randK(2+Math.floor(rng()*3))),random:true},
 {name:'random 2',desc:'2 random options',answer:p=>forCM(p,()=>randK(2)),random:true},
 {name:'random 3',desc:'3 random options',answer:p=>forCM(p,()=>randK(3)),random:true},
 {name:'random 4',desc:'4 random options',answer:p=>forCM(p,()=>randK(4)),random:true},
 ...[0,1,2,3,4].map(skip=>({name:`always ${L.replace(L[skip],'')}`,desc:`always mark the four letters except ${L[skip]}`,answer:(p:Paper)=>forCM(p,()=>[0,1,2,3,4].filter(i=>i!==skip))})),
 {name:'learned 3 letters',desc:'the 3 letters most often true in the training papers',answer:(p,ctx)=>forCM(p,()=>top(ctx.prior.cm,3))},
 {name:'learned 4 letters',desc:'the 4 letters most often true in the training papers',answer:(p,ctx)=>forCM(p,()=>top(ctx.prior.cm,4))},
];

function points(p:Paper,ans:number[][],type:'CS'|'CM'){let s=0;p.forEach((q,i)=>{if(q.type===type)s+=score(q,ans[i]);});return s;}
function evaluate(s:CsStrategy,papers:Paper[],ctx:Ctx,type:'CS'|'CM'){
 const per=papers.map(p=>{const runs=s.random?RUNS:1;let t=0;for(let r=0;r<runs;r++)t+=points(p,s.answer(p,ctx),type);return t/runs;});
 return {mean:per.reduce((a,b)=>a+b,0)/per.length,min:Math.min(...per),max:Math.max(...per)};
}
// Learned strategies train on the other years (for a real year) or on the bank (for the bank and,
// separately, for every year: a candidate who practised only on this bank).
const yearCtx=(y:string):Ctx=>({prior:stats(YEARS.filter(x=>x!==y).flatMap(x=>exams[x]))});
const bankCtx:Ctx={prior:stats(bankPapers)};

console.log('Position statistics (share of keys per letter A–E; CM key sizes 2/3/4; CS answer equal to the previous one):');
const pct=(v:number[])=>v.map(x=>(100*x).toFixed(0).padStart(3)).join(' ');
for(const y of YEARS){const s=stats(exams[y]);console.log(`  ${y}  CS ${pct(s.cs)}  · CM true ${pct(s.cm)}  · sizes ${pct(s.sizes)}  · repeats ${(100*s.repeat).toFixed(0)}%`);}
{const s=bankCtx.prior;console.log(`  bank  CS ${pct(s.cs)}  · CM true ${pct(s.cm)}  · sizes ${pct(s.sizes)}  · repeats ${(100*s.repeat).toFixed(0)}%`);}

const cols=[...YEARS,'bank'];
function table(type:'CS'|'CM',list:CsStrategy[],max:number){
 console.log(`\n${type} part (points out of ${max}; real years: mean of booklets A–D, [min–max] when it differs):`);
 console.log('  '+'strategy'.padEnd(20)+cols.map(c=>c.padStart(16)).join('')+'   beats random every year?');
 const base=Object.fromEntries(cols.map(c=>[c,evaluate(list[0],c==='bank'?bankPapers:exams[c],c==='bank'?bankCtx:yearCtx(c),type).mean]));
 const rows=[];
 for(const s of list){
  const r=Object.fromEntries(cols.map(c=>[c,evaluate(s,c==='bank'?bankPapers:exams[c],c==='bank'?bankCtx:yearCtx(c),type)]));
  const always=YEARS.every(y=>r[y].min>base[y]+0.5);
  console.log('  '+s.name.padEnd(20)+cols.map(c=>{const v=r[c];const txt=v.min===v.max||s.random?v.mean.toFixed(0):`${v.mean.toFixed(0)} [${v.min.toFixed(0)}–${v.max.toFixed(0)}]`;return txt.padStart(16);}).join('')+'   '+(s===list[0]?'(baseline)':always?'YES':'no'));
  rows.push({name:s.name,desc:s.desc,...Object.fromEntries(cols.map(c=>[c,{mean:+r[c].mean.toFixed(1),min:+r[c].min.toFixed(1),max:+r[c].max.toFixed(1)}])),beatsRandomEveryYear:always});
 }
 return rows;
}
const csRows=table('CS',CS,200),cmRows=table('CM',CM,750);
// A candidate who practised only on this bank and applies its letter statistics to the real papers.
console.log('\nPractised on the bank, applied to the real papers:');
for(const [type,list,name] of [['CS',CS,'learned letter'],['CM',CM,'learned 4 letters']] as const){
 const s=list.find(x=>x.name===name)!;console.log(`  ${type} ${name.padEnd(18)} `+YEARS.map(y=>`${y}: ${evaluate(s,exams[y],bankCtx,type).mean.toFixed(0)}`).join('  '));}
const best=YEARS.map(y=>{const cs=evaluate(CS[0],exams[y],yearCtx(y),'CS').mean,cm=evaluate(CM.find(x=>x.name==='random 4')!,exams[y],yearCtx(y),'CM').mean,rnd=evaluate(CM[0],exams[y],yearCtx(y),'CM').mean;return `${y}: ${Math.round(cs+cm)} (random 2–4: ${Math.round(cs+rnd)})`;});
console.log(`\nBlind total out of 950 with "random letter + random 4": ${best.join(' · ')}`);
import('node:fs').then(fs=>{fs.mkdirSync('tmp',{recursive:true});fs.writeFileSync('tmp/guess-real-exams.json',JSON.stringify({years:YEARS,stats:Object.fromEntries([...YEARS.map(y=>[y,stats(exams[y])]),['bank',bankCtx.prior]]),cs:csRows,cm:cmRows},null,1)+'\n');});
