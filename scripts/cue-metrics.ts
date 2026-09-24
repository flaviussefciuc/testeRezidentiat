// Guessability ("cue") audit of the live bank. A candidate who knows no medicine
// can exploit surface cues: the longest option, absolute wording concentrated in
// distractors, full-sentence options unlike the exam's short stem continuations.
// These helpers measure those cues per question and over any set of questions.
import type {Question} from '../src/app/models.ts';

// Chosen in advance from generic test-taking advice, not tuned on this bank.
export const ABSOLUTE=/(^|[^\p{L}])(doar|numai|niciodată|întotdeauna|exclusiv|toate|toți|niciun|nicio)(?=$|[^\p{L}])/iu;
const words=(s:string)=>s.trim().split(/\s+/).filter(Boolean).length;
const lowerStart=(s:string)=>/^[a-zăâîșțşţ]/u.test(s.trim());

/** Per-question cues. An empty list means no cue that a review may certify as absent. */
export function questionCues(q:Question):string[]{
 const cues:string[]=[];
 const L=q.options.map(o=>o.length);
 const isC=(i:number)=>q.correct.includes(i);
 if(q.type==='CS'){
  const c=L[q.correct[0]],maxD=Math.max(...L.filter((_,i)=>!isC(i)));
  if(c>maxD*1.2&&c-maxD>8)cues.push('CS correct option clearly longest');
 }else{
  const mc=L.filter((_,i)=>isC(i)),mi=L.filter((_,i)=>!isC(i));
  const avg=(a:number[])=>a.reduce((s,x)=>s+x,0)/a.length,all=avg(L);
  if(Math.abs(avg(mc)-avg(mi))/all>0.3&&Math.abs(avg(mc)-avg(mi))>10)cues.push('CM correct/incorrect length imbalance');
 }
 const absC=q.options.filter((o,i)=>isC(i)&&ABSOLUTE.test(o)).length,absI=q.options.filter((o,i)=>!isC(i)&&ABSOLUTE.test(o)).length;
 if(absI>=2&&absC===0)cues.push('absolute wording only in distractors');
 if(absC>=2&&absI===0)cues.push('absolute wording only in correct options');
 const max=Math.max(...L),min=Math.min(...L);
 if(max>30&&max>3*min)cues.push('option length spread >3x');
 return cues;
}

function guessCS(o:string[]){const s=o.map(x=>x.length-(ABSOLUTE.test(x)?1e4:0));return s.indexOf(Math.max(...s));}
function guessCM(o:string[]){
 let m=o.map(x=>!ABSOLUTE.test(x));const k=m.filter(Boolean).length;
 if(k<2||k>4){const idx=o.map((x,i)=>[x.length,i]).sort((a,b)=>b[0]-a[0]).slice(0,3).map(x=>x[1]);m=o.map((_,i)=>idx.includes(i));}
 return m;
}

export function metrics(bank:Question[]){
 const cs=bank.filter(q=>q.type==='CS'),cm=bank.filter(q=>q.type==='CM');
 const csLongest=cs.filter(q=>{const L=q.options.map(o=>o.length);return L[q.correct[0]]===Math.max(...L);}).length;
 const csGuess=cs.filter(q=>guessCS(q.options)===q.correct[0]).length;
 let cmHits=0,cmRandom=0;
 for(const q of cm){const m=guessCM(q.options);for(let i=0;i<5;i++)if(m[i]===q.correct.includes(i))cmHits++;const k=q.correct.length;cmRandom+=3*k/5+(5-k)*2/5;}
 const csAcc=cs.length?csGuess/cs.length:0,cmAcc=cm.length?cmHits/cm.length/5:0,cmRand=cm.length?cmRandom/cm.length/5:0.52;
 let absCN=0,absC=0,absIN=0,absI=0,low=0,n=0;const ow:number[]=[];
 for(const q of bank)q.options.forEach((o,i)=>{n++;ow.push(words(o));if(lowerStart(o))low++;if(q.correct.includes(i)){absCN++;if(ABSOLUTE.test(o))absC++;}else{absIN++;if(ABSOLUTE.test(o))absI++;}});
 ow.sort((a,b)=>a-b);
 const csPos=[0,0,0,0,0];cs.forEach(q=>csPos[q.correct[0]]++);
 const cmPos=[0,0,0,0,0];cm.forEach(q=>q.correct.forEach(i=>cmPos[i]++));
 const card:Record<number,number>={};cm.forEach(q=>card[q.correct.length]=(card[q.correct.length]??0)+1);
 const cued=bank.filter(q=>questionCues(q).length).length;
 const pct=(x:number)=>Math.round(x*1000)/10;
 return {
  questions:bank.length,cs:cs.length,cm:cm.length,
  csCorrectIsLongestPct:pct(cs.length?csLongest/cs.length:0),
  guesserCsPct:pct(csAcc),guesserCmPerOptionPct:pct(cmAcc),
  projectedCueScore950:Math.round(200*csAcc+750*cmAcc),projectedRandomScore950:Math.round(200*0.2+750*cmRand),
  absoluteWordingCorrectPct:pct(absCN?absC/absCN:0),absoluteWordingIncorrectPct:pct(absIN?absI/absIN:0),
  optionMedianWords:ow[ow.length>>1]??0,lowercaseOptionPct:pct(n?low/n:0),
  csKeyPositionPct:csPos.map(x=>pct(cs.length?x/cs.length:0)),cmOptionCorrectPct:cmPos.map(x=>pct(cm.length?x/cm.length:0)),
  cmCardinality:card,questionsWithCues:cued,questionsWithCuesPct:pct(bank.length?cued/bank.length:0),
 };
}
export type CueMetrics=ReturnType<typeof metrics>;

/** Gate failures. Topic gates allow +5 points of sampling slack over the bank-wide targets. */
export function gateFailures(m:CueMetrics,scope:'bank'|'topic'):string[]{
 const slack=scope==='topic'?5:0,f:string[]=[];
 if(m.cs&&m.csCorrectIsLongestPct>30+slack)f.push(`CS correct-is-longest ${m.csCorrectIsLongestPct}% > ${30+slack}%`);
 if(m.cs&&m.guesserCsPct>30+slack)f.push(`cue guesser CS ${m.guesserCsPct}% > ${30+slack}%`);
 if(m.cm&&m.guesserCmPerOptionPct>56+slack)f.push(`cue guesser CM ${m.guesserCmPerOptionPct}% > ${56+slack}%`);
 if(Math.abs(m.absoluteWordingCorrectPct-m.absoluteWordingIncorrectPct)>5+slack)f.push(`absolute wording correct ${m.absoluteWordingCorrectPct}% vs incorrect ${m.absoluteWordingIncorrectPct}%`);
 if(m.optionMedianWords>7)f.push(`option median ${m.optionMedianWords} words > 7`);
 if(m.lowercaseOptionPct<50-slack)f.push(`lowercase fragment options ${m.lowercaseOptionPct}% < ${50-slack}%`);
 if(m.cs>=10&&Math.max(...m.csKeyPositionPct)>35+slack)f.push(`CS key concentrated at one position (${m.csKeyPositionPct.join('/')})`);
 if(m.cm>=10&&Math.min(...m.cmOptionCorrectPct)<0.6*Math.max(...m.cmOptionCorrectPct))f.push(`CM correct positions unbalanced (${m.cmOptionCorrectPct.join('/')})`);
 if(m.questionsWithCuesPct>10)f.push(`${m.questionsWithCuesPct}% questions carry a per-question cue > 10%`);
 return f;
}

