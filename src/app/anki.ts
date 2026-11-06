import type {Question} from './models';
import {insightOf,referenceLine} from './insight';
import {TOPICS} from './topics';
import type {Fact} from './facts';

// Anki-ready text export (File → Import): tab-separated Front/Back/Tags with header lines,
// HTML allowed in fields. Cards keep the source page so the answer can be checked in the book.
const esc=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\t/g,' ').replace(/\r?\n/g,'<br>');
const tagOf=(topicId:string)=>'rezi::'+(TOPICS.find(t=>t.id===topicId)?.name??topicId).normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/[^A-Za-z0-9]+/g,'_');
const header=(deck:string)=>['#separator:tab','#html:true','#notetype:Basic',`#deck:${deck}`,'#tags column:3'];

export function ankiQuestions(qs:readonly Question[],deck='Rezi::Greșeli',noteOf:(id:string)=>string=()=>''):string{
 const rows=qs.map(q=>{
  const info=insightOf(q);
  const front=`${esc(q.stem)}<br><br>${q.options.map((o,i)=>`${'ABCDE'[i]}. ${esc(o)}`).join('<br>')}<br><br><i>${q.type==='CS'?'Complement simplu':'Complement multiplu (2–4)'}</i>`;
  const lines=q.options.map((o,i)=>`<b>${'ABCDE'[i]}. ${q.correct.includes(i)?'✓':'✗'}</b> ${esc(o)}${info.rationales?` — ${esc(info.rationales[i])}`:''}`);
  const back=`<b>Răspuns: ${q.correct.map(i=>'ABCDE'[i]).join(', ')}</b><br><br>${lines.join('<br>')}${info.rationales?'':`<br><br>${esc(q.explanation)}`}<br><br><small>${esc(referenceLine(info)||'')}${info.reference?' · '+esc(info.reference.section):''}</small>${noteOf(q.id)?`<br><br><b>Notița mea:</b> ${esc(noteOf(q.id))}`:''}`;
  return [front,back,tagOf(q.topicId)].join('\t');
 });
 return [...header(deck),...rows].join('\n')+'\n';
}

export function ankiFacts(facts:readonly Fact[],deck='Rezi::Adevărat sau fals'):string{
 const rows=facts.map(f=>[`${esc(f.stem)}<br><b>${esc(f.text)}</b><br><br><i>Adevărat sau fals?</i>`,`<b>${f.truth?'ADEVĂRAT':'FALS'}</b><br>${esc(f.why)}<br><br><small>${esc(f.ref)}</small>`,tagOf(f.topicId)].join('\t'));
 return [...header(deck),...rows].join('\n')+'\n';
}

export function download(text:string,filename:string){
 const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
 const a=document.createElement('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),500);
}
