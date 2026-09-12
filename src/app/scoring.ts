import type { Answer, Attempt, Question } from './models.ts';
export function score(q: Question, selected: number[]) {
 const marked = new Set(selected);
 if (marked.size !== selected.length || selected.some(n=>!Number.isInteger(n)||n<0||n>4)) return 0;
 if (q.type==='CS') return selected.length===1 && selected[0]===q.correct[0] ? 4 : 0;
 if (selected.length<2 || selected.length>4) return 0;
 return q.options.reduce((sum,_,i)=>sum+(marked.has(i)===q.correct.includes(i)?1:0),0);
}
export const maximum = (q: Question) => q.type==='CS'?4:5;
export const exact = (q: Question, a: number[]) => score(q,a)===maximum(q);
export function summarize(answers: Answer[], bank: Question[]) {
 const lookup = new Map(bank.map(q=>[q.id,q]));
 let points=0,max=0,correct=0,answered=0;
 for(const a of answers){ const q=lookup.get(a.questionId); if(!q)continue; points+=score(q,a.selected); max+=maximum(q); correct+=Number(exact(q,a.selected)); answered+=Number(a.selected.length>0); }
 return {points,max,correct,answered,total:answers.length,percent:max?Math.round(points/max*100):0};
}
export function topicStats(attempts: Attempt[], bank: Question[], topicId: string) {
 const ids = new Set(bank.filter(q=>q.topicId===topicId).map(q=>q.id));
 return summarize(attempts.flatMap(a=>a.answers.filter(x=>ids.has(x.questionId))),bank);
}
export function improvement(attempts: Attempt[], bank: Question[], now = Date.now()) {
 const recent = attempts.filter(a=>Date.parse(a.completedAt)>now-7*86400000);
 const previous = attempts.filter(a=>Date.parse(a.completedAt)<=now-7*86400000 && Date.parse(a.completedAt)>now-14*86400000);
 if(!recent.length||!previous.length) return null;
 return summarize(recent.flatMap(a=>a.answers),bank).percent-summarize(previous.flatMap(a=>a.answers),bank).percent;
}
export function wrongIds(attempts: Attempt[], bank: Question[]) {
 const latest=new Map<string,Answer>();
 for(const a of [...attempts].sort((a,b)=>a.completedAt.localeCompare(b.completedAt))) for(const answer of a.answers)latest.set(answer.questionId,answer);
 return bank.filter(q=>latest.has(q.id)&&!exact(q,latest.get(q.id)!.selected)).map(q=>q.id);
}
export function shuffled<T>(items: T[]): T[] {
 const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;
}
export function examQuestions(bank: Question[], count=200): Question[] {
 const singles=count/4,multiples=count-singles;
 const cs=shuffled(bank.filter(q=>q.type==='CS')),cm=shuffled(bank.filter(q=>q.type==='CM'));
 if(!Number.isInteger(singles)||cs.length<singles||cm.length<multiples)throw new Error('Banca nu conține suficiente întrebări distincte pentru această simulare.');
 return [...cs.slice(0,singles),...cm.slice(0,multiples)];
}
