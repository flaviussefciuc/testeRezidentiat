// Knowledge-free guessing: how many points does a candidate who knows no medicine score on the
// bank, answering only from surface features (option position, length, wording, word overlap)?
// Every strategy sees the stem and the five options, never the key or the explanations. The
// learned strategies are trained on half of the questions and scored on the other half (2-fold
// cross-validation), as a student who practised on part of the bank would be.
// A strategy that beats random answering by a clear margin exposes a cue in the bank.
// Usage: node --import tsx scripts/guess-strategies.ts [--papers 100] [--seed 1] [--exclude topic,...] [--json tmp/guess-strategies.json]
import {writeFileSync,mkdirSync} from 'node:fs';
import {QUESTIONS,RETIRED_QUESTIONS} from '../src/app/questions.ts';
import {composeExam} from '../src/app/exam-composition.ts';
import {score,maximum} from '../src/app/scoring.ts';
import {ABSOLUTE} from './cue-metrics.ts';
import type {Question} from '../src/app/models.ts';

const arg=(k:string,d:string)=>{const i=process.argv.indexOf(k);return i>=0?process.argv[i+1]:d;};
const PAPERS=+arg('--papers','100'),SEED=+arg('--seed','1'),OUT=arg('--json','tmp/guess-strategies.json');
function mulberry32(a:number){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
// The exam composer shuffles with Math.random: seed it so every run sees the same papers.
Math.random=mulberry32(SEED);
const rng=mulberry32(SEED*7919+1);

// ---- surface features (no key, no explanations) ----
const fold=(s:string)=>s.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();
const STOP=new Set('si sau de la in a al ale ai cu din pe pentru este sunt se nu mai un o care ca prin dupa fara spre sub peste cel cea cei cele fi au are poate pot dar iar intre lui ei sa ce cum cand unde decat'.split(' '));
const toks=(s:string)=>new Set(fold(s).split(/[^a-z0-9]+/).filter(w=>w.length>2&&!STOP.has(w)));
const jacc=(a:Set<string>,b:Set<string>)=>{let i=0;for(const w of a)if(b.has(w))i++;const u=a.size+b.size-i;return u?i/u:0;};
const HEDGE=/(^|[^a-z])(poate|pot|de obicei|de regula|frecvent|adesea|uneori|mai ales|in general|aproximativ|circa|rar|predominant|tipic)([^a-z]|$)/;
const NEG=/(^|[^a-z])(nu|fara|nici|niciodata|absent|absenta|lipsa|lipseste)([^a-z]|$)/;
const firstNum=(s:string)=>{const m=s.replace(/(\d)\.(\d{3})/g,'$1$2').match(/\d+(?:[.,]\d+)?/);return m?parseFloat(m[0].replace(',','.')):null;};
interface Feat{len:number;lenZ:number;lenRank:number;abs:number;hedge:number;neg:number;stemOv:number;optOv:number;num:number;numMid:number;cap:number;pos:number}
function features(q:Question):Feat[]{
 const L=q.options.map(o=>o.length),mean=L.reduce((a,b)=>a+b,0)/5,sd=Math.sqrt(L.reduce((a,b)=>a+(b-mean)**2,0)/5)||1;
 const T=q.options.map(toks),S=toks(q.stem),N=q.options.map(firstNum);
 const nums=N.filter((x):x is number=>x!==null),sorted=[...nums].sort((a,b)=>a-b),median=sorted.length>=3?sorted[sorted.length>>1]:null;
 return q.options.map((o,i)=>({len:o.length,lenZ:(L[i]-mean)/sd,lenRank:L.filter(l=>l>L[i]).length/4,abs:+ABSOLUTE.test(o),hedge:+HEDGE.test(fold(o)),neg:+NEG.test(fold(o)),
  stemOv:jacc(T[i],S),optOv:T.reduce((s,t,j)=>j===i?s:s+jacc(T[i],t),0)/4,num:+(N[i]!==null),numMid:+(median!==null&&N[i]===median),cap:+/^[A-ZĂÂÎȘȚ][a-zăâîșț]/.test(o.trim()),pos:i}));
}
const FEAT_TEXT=(f:Feat)=>[f.lenZ,f.lenRank,f.abs,f.hedge,f.neg,f.stemOv,f.optOv,f.num,f.numMid,f.cap];
const FEAT_ALL=(f:Feat)=>[...FEAT_TEXT(f),...[0,1,2,3,4].map(p=>+(f.pos===p))];

// ---- helpers ----
const argmax=(s:number[])=>{const m=Math.max(...s),ix=s.map((v,i)=>v===m?i:-1).filter(i=>i>=0);return ix[Math.floor(rng()*ix.length)];};
const topK=(s:number[],k:number)=>s.map((v,i)=>[v+rng()*1e-9,i]).sort((a,b)=>b[0]-a[0]).slice(0,k).map(x=>x[1]).sort((a,b)=>a-b);
const randK=(k:number)=>topK([0,0,0,0,0].map(()=>rng()),k);
const foldOf=(id:string)=>{let h=2166136261;for(const c of id)h=Math.imul(h^c.charCodeAt(0),16777619);return (h>>>0)%2;};
type Ctx={prior?:{cs:number[][],cm:number[][]};ml?:Record<'text'|'all',{cs:Model[],cm:Model[]}>};
type Strategy={name:string;desc:string;pick:(q:Question,f:Feat[],ctx:Ctx)=>number[]};
const cm3=(s:number[])=>topK(s,3);

// ---- logistic regression (per option), trained per fold ----
interface Model{w:number[];b:number;mu:number[];sd:number[]}
function trainModel(rows:number[][],y:number[]):Model{
 const d=rows[0].length,mu=Array(d).fill(0),sd=Array(d).fill(0);
 for(const r of rows)r.forEach((v,j)=>mu[j]+=v/rows.length);
 for(const r of rows)r.forEach((v,j)=>sd[j]+=(v-mu[j])**2/rows.length);
 for(let j=0;j<d;j++)sd[j]=Math.sqrt(sd[j])||1;
 const X=rows.map(r=>r.map((v,j)=>(v-mu[j])/sd[j]));let w=Array(d).fill(0),b=0;
 for(let it=0;it<300;it++){const gw=Array(d).fill(0);let gb=0;
  for(let i=0;i<X.length;i++){let z=b;for(let j=0;j<d;j++)z+=w[j]*X[i][j];const e=1/(1+Math.exp(-z))-y[i];gb+=e;for(let j=0;j<d;j++)gw[j]+=e*X[i][j];}
  for(let j=0;j<d;j++)w[j]-=0.5*(gw[j]/X.length+1e-3*w[j]);b-=0.5*gb/X.length;}
 return {w,b,mu,sd};
}
const predict=(m:Model,r:number[])=>{let z=m.b;r.forEach((v,j)=>z+=m.w[j]*(v-m.mu[j])/m.sd[j]);return 1/(1+Math.exp(-z));};
function buildCtx(bank:Question[]):Ctx{
 const prior={cs:[0,1].map(()=>[0,0,0,0,0]),cm:[0,1].map(()=>[0,0,0,0,0])};
 for(const q of bank){const k=foldOf(q.id);for(const i of q.correct)(q.type==='CS'?prior.cs:prior.cm)[k][i]++;}
 const ml={} as NonNullable<Ctx['ml']>;
 for(const kind of ['text','all'] as const){const F=kind==='text'?FEAT_TEXT:FEAT_ALL;const m={cs:[] as Model[],cm:[] as Model[]};
  for(const t of ['CS','CM'] as const)for(const k of [0,1]){
   const rows:number[][]=[],y:number[]=[];
   for(const q of bank)if(q.type===t&&foldOf(q.id)!==k)features(q).forEach((f,i)=>{rows.push(F(f));y.push(+q.correct.includes(i));});
   (t==='CS'?m.cs:m.cm)[k]=trainModel(rows,y);}
  ml[kind]=m;}
 return {prior,ml};
}
// A question is always answered with the model/prior learned on the OTHER fold.
const other=(q:Question)=>1-foldOf(q.id);
function mlPick(kind:'text'|'all'){return (q:Question,f:Feat[],ctx:Ctx)=>{const F=kind==='text'?FEAT_TEXT:FEAT_ALL;
 const m=(q.type==='CS'?ctx.ml![kind].cs:ctx.ml![kind].cm)[other(q)],p=f.map(x=>predict(m,F(x)));
 if(q.type==='CS')return [argmax(p)];
 const k=Math.max(2,Math.min(4,Math.round(p.reduce((a,b)=>a+b,0))));return topK(p,k);};}

const STRATEGIES:Strategy[]=[
 {name:'blank',desc:'leaves every question unanswered',pick:()=>[]},
 {name:'random',desc:'CS: random letter; CM: random 2, 3 or 4 letters',pick:q=>q.type==='CS'?randK(1):randK(2+Math.floor(rng()*3))},
 {name:'random-2',desc:'CS random; CM: 2 random letters',pick:q=>q.type==='CS'?randK(1):randK(2)},
 {name:'random-3',desc:'CS random; CM: 3 random letters',pick:q=>q.type==='CS'?randK(1):randK(3)},
 {name:'random-4',desc:'CS random; CM: 4 random letters',pick:q=>q.type==='CS'?randK(1):randK(4)},
 {name:'position-prior',desc:'learned letter frequencies: CS most frequent letter, CM 3 most frequent',pick:(q,f,ctx)=>{const p=(q.type==='CS'?ctx.prior!.cs:ctx.prior!.cm)[other(q)];return q.type==='CS'?[argmax(p)]:cm3(p);}},
 {name:'longest',desc:'CS: longest option; CM: 3 longest',pick:(q,f)=>q.type==='CS'?[argmax(f.map(x=>x.len))]:cm3(f.map(x=>x.len))},
 {name:'longest-4',desc:'CS: longest; CM: 4 longest',pick:(q,f)=>q.type==='CS'?[argmax(f.map(x=>x.len))]:topK(f.map(x=>x.len),4)},
 {name:'shortest',desc:'CS: shortest option; CM: 3 shortest',pick:(q,f)=>q.type==='CS'?[argmax(f.map(x=>-x.len))]:cm3(f.map(x=>-x.len))},
 {name:'middle-length',desc:'CS: median-length option; CM: drop the longest and the shortest',pick:(q,f)=>{const d=f.map(x=>-Math.abs(x.lenRank-0.5));return q.type==='CS'?[argmax(d)]:cm3(d);}},
 {name:'no-absolute',desc:'avoid "doar/niciodată/întotdeauna/toate…"; random among the rest',pick:(q,f)=>{const s=f.map(x=>-x.abs+rng()*0.5);return q.type==='CS'?[argmax(s)]:cm3(s);}},
 {name:'hedged',desc:'prefer "poate/de obicei/frecvent…"; random among the rest',pick:(q,f)=>{const s=f.map(x=>x.hedge+rng()*0.5);return q.type==='CS'?[argmax(s)]:cm3(s);}},
 {name:'no-negation',desc:'avoid options with "nu/fără/nici…"; random among the rest',pick:(q,f)=>{const s=f.map(x=>-x.neg+rng()*0.5);return q.type==='CS'?[argmax(s)]:cm3(s);}},
 {name:'convergence',desc:'pick the options sharing most words with the other options',pick:(q,f)=>q.type==='CS'?[argmax(f.map(x=>x.optOv))]:cm3(f.map(x=>x.optOv))},
 {name:'stem-echo',desc:'pick the options repeating most words of the stem',pick:(q,f)=>q.type==='CS'?[argmax(f.map(x=>x.stemOv))]:cm3(f.map(x=>x.stemOv))},
 {name:'numeric-middle',desc:'CS: middle number among numeric options, else random; CM: 3 random',pick:(q,f)=>q.type==='CS'?(f.some(x=>x.numMid)?[argmax(f.map(x=>x.numMid+rng()*0.1))]:randK(1)):randK(3)},
 {name:'test-wise',desc:'coaching rules combined: longer, hedged, convergent, middle number; no absolutes or negations',pick:(q,f)=>{const s=f.map(x=>0.5*x.lenZ+x.hedge-1.5*x.abs-0.5*x.neg+2*x.optOv+0.5*x.numMid);return q.type==='CS'?[argmax(s)]:cm3(s);}},
 {name:'learned-text',desc:'logistic model on wording/length features, trained on the other half',pick:mlPick('text')},
 {name:'learned-all',desc:'the same plus option position',pick:mlPick('all')},
];

// ---- evaluation ----
function evalSet(bank:Question[],ctx:Ctx,s:Strategy,runs=5){
 let cs=0,csMax=0,cm=0,cmMax=0;
 for(let r=0;r<runs;r++)for(const q of bank){const sel=s.pick(q,features(q),ctx),p=score(q,sel);if(q.type==='CS'){cs+=p;csMax+=maximum(q);}else{cm+=p;cmMax+=maximum(q);}}
 const pcs=csMax?cs/csMax:0,pcm=cmMax?cm/cmMax:0;
 return {csPct:+(100*pcs).toFixed(1),cmPct:+(100*pcm).toFixed(1),exam950:Math.round(200*pcs+750*pcm)};
}
function auc(scores:number[],labels:number[]){const idx=scores.map((s,i)=>[s,labels[i]]).sort((a,b)=>a[0]-b[0]);let rank=0,pos=0,sum=0;
 for(let i=0;i<idx.length;){let j=i;while(j<idx.length&&idx[j][0]===idx[i][0])j++;const avg=(i+j+1)/2;for(let k=i;k<j;k++)if(idx[k][1]){sum+=avg;pos++;}i=j;}
 const neg=idx.length-pos;return pos&&neg?(sum-pos*(pos+1)/2)/(pos*neg):0.5;}
function cueAuc(bank:Question[],ctx:Ctx,kind:'text'|'all'){const out:Record<string,number>={};
 for(const t of ['CS','CM'] as const){const s:number[]=[],y:number[]=[];const F=kind==='text'?FEAT_TEXT:FEAT_ALL;
  for(const q of bank)if(q.type===t){const m=(t==='CS'?ctx.ml![kind].cs:ctx.ml![kind].cm)[other(q)];features(q).forEach((f,i)=>{s.push(predict(m,F(f)));y.push(+q.correct.includes(i));});}
  out[t]=+auc(s,y).toFixed(3);}
 return out;}

const EXCLUDE=new Set(arg('--exclude','').split(',').filter(Boolean));
const bank=(QUESTIONS as Question[]).filter(q=>!EXCLUDE.has(q.topicId));
const ctx=buildCtx(bank);
console.log(`Bank: ${bank.length} active questions (${bank.filter(q=>q.type==='CS').length} CS, ${bank.filter(q=>q.type==='CM').length} CM). Papers: ${PAPERS} × 200 questions (exam composition), seed ${SEED}.`);
const papers=Array.from({length:PAPERS},()=>composeExam(bank,200) as Question[]);
const results=STRATEGIES.map(s=>{
 const totals=papers.map(p=>p.reduce((sum,q)=>sum+score(q,s.pick(q,features(q),ctx)),0));
 const mean=totals.reduce((a,b)=>a+b,0)/totals.length,sd=Math.sqrt(totals.reduce((a,b)=>a+(b-mean)**2,0)/totals.length);
 const sorted=[...totals].sort((a,b)=>a-b);
 return {name:s.name,desc:s.desc,papers:{mean:Math.round(mean),sd:Math.round(sd),min:sorted[0],p10:sorted[Math.floor(0.1*sorted.length)],p90:sorted[Math.floor(0.9*sorted.length)],max:sorted.at(-1)},bank:evalSet(bank,ctx,s)};
});
const rand=results.find(r=>r.name==='random')!;
console.log('\nStrategy          paper score /950 (mean ± sd, min–max)   vs random   whole bank: CS% CM%');
for(const r of [...results].sort((a,b)=>b.papers.mean-a.papers.mean))
 console.log(`${r.name.padEnd(17)} ${String(r.papers.mean).padStart(4)} ± ${String(r.papers.sd).padStart(2)}  (${r.papers.min}–${r.papers.max})${' '.repeat(Math.max(1,14-`${r.papers.min}–${r.papers.max}`.length))}${(r.papers.mean-rand.papers.mean>=0?'+':'')+(r.papers.mean-rand.papers.mean)}`.padEnd(60)+`  ${r.bank.csPct}  ${r.bank.cmPct}`);
const aucText=cueAuc(bank,ctx,'text'),aucAll=cueAuc(bank,ctx,'all');
console.log(`\nCue strength (cross-validated AUC of the learned models; 0.5 = no usable cue): wording/length CS ${aucText.CS} CM ${aucText.CM}; with position CS ${aucAll.CS} CM ${aucAll.CM}`);
// What the learned guesser relies on: standardized weights, averaged over the two folds (+ = "true").
const NAMES=['length (z)','length rank','absolute word','hedge word','negation','stem overlap','option overlap','has number','middle number','capital start','pos A','pos B','pos C','pos D','pos E'];
const weights:Record<string,Record<string,number>>={};
for(const t of ['cs','cm'] as const){const m=ctx.ml!.all[t];weights[t]=Object.fromEntries(NAMES.map((n,j)=>[n,+((m[0].w[j]+m[1].w[j])/2).toFixed(2)]));
 console.log(`Learned weights ${t.toUpperCase()}: `+Object.entries(weights[t]).filter(([,w])=>Math.abs(w)>=0.05).sort((a,b)=>Math.abs(b[1])-Math.abs(a[1])).map(([n,w])=>`${n} ${w>0?'+':''}${w}`).join(', '));}

// Per chapter: the best surface strategy against random on the whole chapter.
const topics=[...new Set(bank.map(q=>q.topicId))];
const focus=['random','random-3','longest','convergence','test-wise','learned-all'];
const perTopic=topics.map(t=>{const qs=bank.filter(q=>q.topicId===t);const row:Record<string,number>={};
 for(const n of focus){const s=STRATEGIES.find(x=>x.name===n)!;let p=0,m=0;for(let r=0;r<5;r++)for(const q of qs){p+=score(q,s.pick(q,features(q),ctx));m+=maximum(q);}row[n]=+(100*p/m).toFixed(1);}
 const best=Math.max(...focus.filter(n=>!n.startsWith('random')).map(n=>row[n]));
 return {topic:t,n:qs.length,...row,edge:+(best-row['random-3']).toFixed(1)};}).sort((a,b)=>b.edge-a.edge);
console.log('\nChapters where a surface strategy gains most over 3 random letters (% of max points):');
for(const r of perTopic.slice(0,12))console.log(`  ${r.topic.padEnd(16)} n=${String(r.n).padStart(3)}  random-3 ${r['random-3']}  best surface +${r.edge}  (longest ${r.longest}, convergence ${r.convergence}, test-wise ${r['test-wise']}, learned ${r['learned-all']})`);

// Before/after the November rewrite: the retired old-style versions of the rewritten chapters.
const REWRITTEN=['hiv','diabet','nefrologie'];
const before=(RETIRED_QUESTIONS as Question[]).filter(q=>REWRITTEN.includes(q.topicId)&&/-adv-\d+$/.test(q.id));
const after=bank.filter(q=>REWRITTEN.includes(q.topicId)&&/-v\d+$/.test(q.id));
const compare=['random-3','position-prior','longest','test-wise','learned-all'].map(n=>{const s=STRATEGIES.find(x=>x.name===n)!;return {name:n,before:evalSet(before,buildCtx(before),s),after:evalSet(after,buildCtx(after),s)};});
if(before.length){console.log(`\nBefore/after the format rewrite (${REWRITTEN.join(', ')}: ${before.length} old vs ${after.length} new questions; exam-equivalent /950):`);
 for(const c of compare)console.log(`  ${c.name.padEnd(15)} before ${String(c.before.exam950).padStart(4)}   after ${String(c.after.exam950).padStart(4)}`);}

mkdirSync('tmp',{recursive:true});
writeFileSync(OUT,JSON.stringify({date:new Date().toISOString(),seed:SEED,papers:PAPERS,bankSize:bank.length,results,cueAuc:{text:aucText,all:aucAll},weights,perTopic,beforeAfter:compare},null,1)+'\n');
console.log(`\nWrote ${OUT}`);
