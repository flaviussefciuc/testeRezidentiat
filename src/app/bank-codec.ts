import type {Scorable} from './scoring.ts';

// One integer per question version: ((topic index * 32) + answer-key bit mask) * 2 + active flag.
// The type is implied by the key: one correct option is CS, two to four are CM.
export interface Lite extends Scorable {active:boolean}
export function encodeEntry(topicOrder:readonly string[],q:Scorable,active:boolean):number {
 const topic=topicOrder.indexOf(q.topicId);
 if(topic<0)throw new Error(`Unknown topic for ${q.id}`);
 const mask=q.correct.reduce((m,i)=>m|(1<<i),0);
 return (topic*32+mask)*2+(active?1:0);
}
export function decodeEntry(topicOrder:readonly string[],id:string,value:number):Lite {
 const active=(value&1)===1,rest=value>>1,mask=rest&31,correct=[0,1,2,3,4].filter(i=>(mask&(1<<i))!==0);
 return {id,topicId:topicOrder[rest>>5],type:correct.length===1?'CS':'CM',correct,active};
}
