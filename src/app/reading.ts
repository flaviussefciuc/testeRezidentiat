import type {Attempt,Question} from './models';
import {exact} from './scoring';
import {insightOf} from './insight';
import {splitSection} from './sheets';

// Pages of the textbook behind the questions whose latest answer was not fully correct.
export interface PageMiss {id:string;stem:string;objective:string|null;sure:boolean;at:number}
export interface ReadingPage {key:string;book:string;chapter:number;page:number;heading:string;topicId:string;misses:PageMiss[];sure:number;last:number}

export function readingList(attempts:readonly Attempt[],byId:ReadonlyMap<string,Question>,active:ReadonlySet<string>):ReadingPage[]{
 const latest=new Map<string,{selected:number[];confidence?:string;at:number}>();
 for(const a of [...attempts].sort((x,y)=>x.completedAt.localeCompare(y.completedAt))){
  const at=Date.parse(a.completedAt);
  for(const ans of a.answers)if(ans.selected.length)latest.set(ans.questionId,{selected:ans.selected,confidence:ans.confidence,at});
 }
 const pages=new Map<string,ReadingPage>();
 for(const [id,ans] of latest){
  const q=byId.get(id);if(!q||!active.has(id)||exact(q,ans.selected))continue;
  const info=insightOf(q),r=info.reference;if(!r)continue;
  const page=r.pages[0],key=`${r.book}|${r.chapter}|${page}`;
  const p=pages.get(key)??{key,book:r.book,chapter:r.chapter,page,heading:splitSection(r.section).head,topicId:q.topicId,misses:[],sure:0,last:0};
  p.misses.push({id,stem:q.stem,objective:info.objective,sure:ans.confidence==='sure',at:ans.at});
  if(ans.confidence==='sure')p.sure++;
  p.last=Math.max(p.last,ans.at);
  pages.set(key,p);
 }
 // Confident mistakes first, then pages with more misses, then textbook order.
 return [...pages.values()].sort((a,b)=>(b.sure-a.sure)||(b.misses.length-a.misses.length)||a.book.localeCompare(b.book)||a.chapter-b.chapter||a.page-b.page);
}

const key=(owner:string)=>`rezi:reread:${owner}`;
export function loadReread(owner:string):Record<string,number>{try{return JSON.parse(localStorage.getItem(key(owner))??'{}')??{};}catch{return {};}}
export function saveReread(owner:string,v:Record<string,number>){try{localStorage.setItem(key(owner),JSON.stringify(v));}catch{/* storage unavailable */}}
