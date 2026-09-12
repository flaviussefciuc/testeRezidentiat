import type {Question} from '../models';

// Authoring format: stem | five options separated by ~ | key (A–E) | rationale.
// Rows are independent authored items, not runtime-generated permutations.
// Keep row order stable: persisted attempts refer to these permanent IDs.
export function chapter(topicId:string,source:string,text:string,offset=0):Question[]{
 return text.trim().split('\n').filter(line=>line.trim()).map((line,index)=>{
  const fields=line.split('|').map(s=>s.trim());
  if(fields.length!==4)throw new Error(`Invalid authored row ${topicId}:${index+1}`);
  const [stem,choices,key,explanation]=fields;
  const options=choices.split('~').map(s=>s.trim());
  const correct=[...key].map(letter=>'ABCDE'.indexOf(letter));
  if(options.length!==5||new Set(options).size!==5||!correct.length||correct.length>4||new Set(correct).size!==correct.length||correct.some(i=>i<0))throw new Error(`Invalid key/options ${topicId}:${index+1}`);
  return {id:`${topicId}-ext-${String(offset+index+1).padStart(3,'0')}`,topicId,type:correct.length===1?'CS':'CM',stem,options,correct,explanation,source};
 });
}
