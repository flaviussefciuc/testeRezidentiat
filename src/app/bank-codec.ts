import type {Scorable} from './scoring.ts';

// One integer per question version: (((topic index * 32) + answer-key bit mask) * 2 + active flag) * 2 + table flag.
// The type is implied by the key: one correct option is CS, two to four are CM. The table
// flag marks a question built on a table, box, figure, score or classification of the book.
export interface Lite extends Scorable {active:boolean;table:boolean}
export const TABLE_SOURCE=/(^|[^\p{L}])(cadran(ul|ele)?|tabel(ul|ele)?|fig(ura|\.)|caseta|schema|scor(ul|uri|urile)?|clasificar\p{L}*|stadializ\p{L}*|criteriile)(?=$|[^\p{L}])/iu;
export function fromTable(q:{stem:string;learningObjective?:string;optionRationales?:string[];reference?:{section:string}}):boolean {
 return TABLE_SOURCE.test([q.stem,q.learningObjective??'',q.reference?.section??'',...(q.optionRationales??[])].join(' '));
}
export function encodeEntry(topicOrder:readonly string[],q:Scorable,active:boolean,table=false):number {
 const topic=topicOrder.indexOf(q.topicId);
 if(topic<0)throw new Error(`Unknown topic for ${q.id}`);
 const mask=q.correct.reduce((m,i)=>m|(1<<i),0);
 return ((topic*32+mask)*2+(active?1:0))*2+(table?1:0);
}
export function decodeEntry(topicOrder:readonly string[],id:string,value:number):Lite {
 const table=(value&1)===1,v=value>>1,active=(v&1)===1,rest=v>>1,mask=rest&31,correct=[0,1,2,3,4].filter(i=>(mask&(1<<i))!==0);
 return {id,topicId:topicOrder[rest>>5],type:correct.length===1?'CS':'CM',correct,active,table};
}
