import type {Answer,Why} from './models';

// Why an answer was wrong, as the student judges it right after seeing the explanation.
export const WHY_OPTIONS:{id:Why;label:string;advice:string;link:{path:string;label:string}}[]=[
 {id:'unknown',label:'Nu știam',advice:'Lipsă de informație: recitește paginile din manual și refă grilele lor.',link:{path:'/recitire',label:'Pagini de recitit'}},
 {id:'confused',label:'Am confundat cu altceva',advice:'Confuzii între noțiuni apropiate: citește fișa capitolului cu capcanele afișate, ca să vezi diferențele una lângă alta.',link:{path:'/fise',label:'Fișe de recapitulare'}},
 {id:'misread',label:'Am citit greșit enunțul',advice:'Erori de citire: oprește-te la cuvintele evidențiate (negații, „cel mai frecvent”, „de primă intenție”) înainte să alegi.',link:{path:'/adevarat-fals',label:'Adevărat sau fals'}},
 {id:'rushed',label:'M-am grăbit',advice:'Grabă: în simulări, folosește antrenorul de ritm; ai 72 s pe grilă, deci timp să verifici fiecare variantă.',link:{path:'/teste',label:'Simulări cu ritm'}},
 {id:'changed',label:'Am schimbat răspunsul',advice:'Răspunsuri schimbate în rău: schimbă doar când găsești un argument concret, nu din nesiguranță.',link:{path:'/progres',label:'Calibrarea încrederii'}},
];
export const WHY_LABEL=Object.fromEntries(WHY_OPTIONS.map(o=>[o.id,o.label])) as Record<Why,string>;
export function whyCounts(answers:readonly Answer[]):{id:Why;label:string;count:number;share:number;advice:string;link:{path:string;label:string}}[]{
 const tagged=answers.filter(a=>a.why);
 return WHY_OPTIONS.map(o=>{const count=tagged.filter(a=>a.why===o.id).length;return {...o,count,share:tagged.length?Math.round(count/tagged.length*100):0};}).sort((a,b)=>b.count-a.count);
}
