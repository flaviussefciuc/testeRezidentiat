import type { Answer, Attempt } from './models.ts';
// Scoring needs only the answer key: full questions and the light index both qualify.
export interface Scorable { id: string; topicId: string; type: 'CS' | 'CM'; correct: number[]; }
const OPTIONS=[0,1,2,3,4];
export function score(q: Scorable, selected: number[]) {
 const marked = new Set(selected);
 if (marked.size !== selected.length || selected.some(n=>!Number.isInteger(n)||n<0||n>4)) return 0;
 if (q.type==='CS') return selected.length===1 && selected[0]===q.correct[0] ? 4 : 0;
 if (selected.length<2 || selected.length>4) return 0;
 return OPTIONS.reduce((sum,i)=>sum+(marked.has(i)===q.correct.includes(i)?1:0),0);
}
export const maximum = (q: Scorable) => q.type==='CS'?4:5;
export const exact = (q: Scorable, a: number[]) => score(q,a)===maximum(q);
const lookups=new WeakMap<readonly Scorable[],Map<string,Scorable>>();
function lookupOf(bank: readonly Scorable[]) {
 let map=lookups.get(bank);
 if(!map){map=new Map(bank.map(q=>[q.id,q]));lookups.set(bank,map);}
 return map;
}
export function summarize(answers: Answer[], bank: readonly Scorable[]) {
 const lookup = lookupOf(bank);
 let points=0,max=0,correct=0,answered=0;
 for(const a of answers){ const q=lookup.get(a.questionId); if(!q)continue; points+=score(q,a.selected); max+=maximum(q); correct+=Number(exact(q,a.selected)); answered+=Number(a.selected.length>0); }
 return {points,max,correct,answered,total:answers.length,percent:max?Math.round(points/max*100):0};
}
export function topicStats(attempts: Attempt[], bank: readonly Scorable[], topicId: string) {
 const ids = new Set(bank.filter(q=>q.topicId===topicId).map(q=>q.id));
 return summarize(attempts.flatMap(a=>a.answers.filter(x=>ids.has(x.questionId))),bank);
}
export function improvement(attempts: Attempt[], bank: readonly Scorable[], now = Date.now()) {
 const recent = attempts.filter(a=>Date.parse(a.completedAt)>now-7*86400000);
 const previous = attempts.filter(a=>Date.parse(a.completedAt)<=now-7*86400000 && Date.parse(a.completedAt)>now-14*86400000);
 if(!recent.length||!previous.length) return null;
 return summarize(recent.flatMap(a=>a.answers),bank).percent-summarize(previous.flatMap(a=>a.answers),bank).percent;
}
export function wrongIds(attempts: Attempt[], bank: readonly Scorable[]) {
 const latest=new Map<string,Answer>();
 for(const a of [...attempts].sort((a,b)=>a.completedAt.localeCompare(b.completedAt))) for(const answer of a.answers)latest.set(answer.questionId,answer);
 return bank.filter(q=>latest.has(q.id)&&!exact(q,latest.get(q.id)!.selected)).map(q=>q.id);
}
export function shuffled<T>(items: readonly T[]): T[] {
 const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;
}
export function examQuestions<T extends Scorable>(bank: readonly T[], count=200, siblings?: ReadonlyMap<string,ReadonlySet<string>>): T[] {
 // The real format is one quarter single-choice; shorter simulations keep the ratio.
 const singles=Math.round(count/4),multiples=count-singles;
 const cs=shuffled(bank.filter(q=>q.type==='CS')),cm=shuffled(bank.filter(q=>q.type==='CM'));
 if(count<4||cs.length<singles||cm.length<multiples)throw new Error('Banca nu conține suficiente întrebări distincte pentru această simulare.');
 // Skip a question whose sibling (same table, shared options) is already in the test.
 const taken=new Set<string>();
 const take=(list:T[],n:number)=>{const out:T[]=[];for(const q of list){if(out.length===n)break;const sib=siblings?.get(q.id);if(sib&&[...sib].some(s=>taken.has(s)))continue;out.push(q);taken.add(q.id);}if(out.length<n)throw new Error('Banca nu conține suficiente întrebări distincte pentru această simulare.');return out;};
 return [...take(cs,singles),...take(cm,multiples)];
}
