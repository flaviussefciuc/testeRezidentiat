// The exam allows 240 minutes for 200 questions: 72 seconds per question.
export const PACE_SECONDS=72;
export const SIM_FORMATS=[
 {count:200,label:'Completă',detail:'200 de grile · 4 ore'},
 {count:100,label:'Jumătate',detail:'100 de grile · 2 ore'},
 {count:52,label:'Sfert',detail:'52 de grile · ~1 oră'},
] as const;
export const simMinutes=(count:number)=>Math.round(count*PACE_SECONDS/60);
