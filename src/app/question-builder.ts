import type {Question} from './models';
type Row=[string,string[],number[],string];
export function group(topicId:string,source:string,rows:Row[]):Question[]{return rows.map(([stem,options,correct,explanation],i)=>({id:`${topicId}-${String(i+1).padStart(2,'0')}`,topicId,type:correct.length===1?'CS':'CM',stem,options,correct,explanation,source}));}
