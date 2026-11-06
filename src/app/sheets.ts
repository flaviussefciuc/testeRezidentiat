import type {Question} from './models';
import {insightOf} from './insight';

// A revision sheet groups a chapter's verified questions by textbook section, in page order.
// Section names read "Heading — detail"; the sheet groups by heading and shows the detail per item.
export const splitSection=(section:string)=>{const [head,...rest]=section.split(/\s+[—–-]\s+/);return {head:head.trim(),detail:rest.join(' — ').trim()};};
export interface SheetItem {id:string;detail:string;stem:string;objective:string|null;truths:string[];traps:{text:string;why:string}[];pages:number[]}
export interface SheetSection {key:string;title:string;pages:number[];items:SheetItem[]}

export function buildSheet(topicId:string,questions:Iterable<Question>):SheetSection[]{
 const sections=new Map<string,SheetSection>();
 for(const q of questions){
  if(q.topicId!==topicId)continue;
  const info=insightOf(q),r=info.reference;if(!r||!info.rationales)continue;
  const {head,detail}=splitSection(r.section),key=`${topicId}|${head}`;
  const s=sections.get(key)??{key,title:head,pages:[],items:[]};
  s.items.push({id:q.id,detail,stem:q.stem,objective:info.objective,pages:r.pages,
   truths:q.options.filter((_,i)=>q.correct.includes(i)),
   traps:q.options.map((text,i)=>({text,why:info.rationales![i],i})).filter(o=>!q.correct.includes(o.i)).map(({text,why})=>({text,why}))});
  s.pages=[...new Set([...s.pages,...r.pages])].sort((a,b)=>a-b);
  sections.set(key,s);
 }
 const first=(s:{pages:number[]})=>s.pages[0]??0;
 return [...sections.values()].map(s=>({...s,items:s.items.sort((a,b)=>first(a)-first(b))})).sort((a,b)=>first(a)-first(b)||a.title.localeCompare(b.title,'ro'));
}

// Sections marked as read stay on this device.
const key=(owner:string)=>`rezi:read:${owner}`;
export function loadRead(owner:string):Record<string,number>{try{return JSON.parse(localStorage.getItem(key(owner))??'{}')??{};}catch{return {};}}
export function saveRead(owner:string,read:Record<string,number>){try{localStorage.setItem(key(owner),JSON.stringify(read));}catch{/* storage unavailable */}}
