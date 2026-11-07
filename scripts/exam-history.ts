// Builds public/exam-history.json and src/app/exam-weights.ts from the per-question
// tables of the public analyses of the 2023, 2024 and 2025 Medicină papers
// (blog.grile-rezidentiat.ro). Each analysed item gives the book, the syllabus chapter,
// the printed page(s) and whether it came from a table/figure; 2025 also lists the key.
// Those tables are the authors' bibliographic attribution of each exam item, not an
// official document; the exam text itself is never copied.
// Usage: node --import tsx scripts/exam-history.ts   (reads tmp/exam-analyses/analiza-YYYY.html)
import {existsSync,readFileSync,writeFileSync} from 'node:fs';
import {TOPICS} from '../src/app/topics.ts';

export interface ExamItem {year:number;n:number;type:'CS'|'CM';book:'Kumar & Clark'|'Lawrence'|'Sinopsis';topicId:string;pages:number[];otherPages:number[];kind:'text'|'table'|'figure'|null;key:string|null;}

const BOOK:Record<string,ExamItem['book']>={kumar:'Kumar & Clark',lawrence:'Lawrence',sinopsis:'Sinopsis'};
// Chapter labels used by the analyses, normalised (lower case, no diacritics) → topic id.
const CHAPTER:[RegExp,string][]=[
 [/sepsis/,'sepsis'],[/hidro-electrolitic|apa si electroliti|electrolitice|acido-bazice|echilibre/,'electroliti'],[/terapie intensiv|^ati$/,'ati'],[/hematolog/,'hematologie'],[/reumatolog/,'reumatologie'],[/endocrinolog/,'endocrinologie'],[/diabet/,'diabet'],[/neurolog/,'neurologie'],[/pneumolog/,'pneumologie'],[/tromboembolic|^tev$/,'tromboembolism'],[/cardiolog/,'cardiologie'],[/hipertensiun|^hta$/,'hta'],[/gastroenterolog/,'gastro'],[/hepatic/,'hepatologie'],[/renale|nefrolog|^renal$/,'nefrologie'],[/hiv|sexual/,'hiv'],
 [/perioperator|management/,'perioperator'],[/sangerar|hemostaz/,'hemostaza'],[/infectii/,'infectii-chir'],[/traumatolog|traumatism/,'trauma'],[/arsur/,'arsuri'],[/herni/,'hernii'],[/esofag/,'esofag'],[/stomac/,'stomac'],[/intestin/,'intestin'],[/colon/,'colon'],[/biliar/,'biliar'],[/pancrea/,'pancreas'],[/ficat/,'ficat-splina'],[/vascular|arteriala|venelor|venoas/,'vascular'],[/orl|otorinolaringolog/,'orl'],[/ortoped/,'ortopedie'],[/urolog/,'urologie'],
 [/dermatolog/,'dermato'],[/pediatr/,'pediatrie'],[/ginecolog/,'gineco'],[/obstetric/,'obstetrica'],[/psihi/,'psihiatrie'],[/epidemiolog/,'epidemio']];
const norm=(s:string)=>s.normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/ş/g,'s').replace(/ţ/g,'t').toLowerCase().trim();
const strip=(s:string)=>s.replace(/<[^>]+>/g,' ').replace(/&nbsp;|&#160;/g,' ').replace(/&amp;/g,'&').replace(/&#8211;|&ndash;/g,'–').replace(/\s+/g,' ').trim();
const ranges=(topicId:string)=>TOPICS.find(t=>t.id===topicId)!.pages.split(';').map(s=>s.trim().split('–').map(Number));
const inRange=(topicId:string,p:number)=>ranges(topicId).some(([lo,hi])=>p>=lo&&p<=(hi??lo));

function topicOf(book:ExamItem['book'],label:string):string{
 const l=norm(label).replace(/^cap\.\s*\d+\s*[–-]?\s*/,'');
 const hit=CHAPTER.find(([re,id])=>re.test(l)&&TOPICS.find(t=>t.id===id)!.book===book);
 if(!hit)throw new Error(`Unmapped chapter: ${book} / ${label}`);
 return hit[1];
}
// Page cells: "621, 622", "1002, 1009, 1010", "613614" (two pages run together), "179-180",
// "1353,135" (second page cut off). Tokens are split into plausible page numbers and
// kept only when the topic's syllabus ranges contain them; the rest go to otherPages.
function pagesOf(topicId:string,cell:string):{pages:number[];otherPages:number[]}{
 const digits=norm(cell).match(/\d+/g)??[];
 const nums:number[]=[];
 for(const d of digits){
  if(d.length<=4&&inRange(topicId,+d)){nums.push(+d);continue;}
  // Run-together pages such as 613614 or 10471048: split into equal halves.
  if(d.length%2===0&&d.length>=6){const h=d.length/2,a=+d.slice(0,h),b=+d.slice(h);if(inRange(topicId,a)&&inRange(topicId,b)&&b-a<=3){nums.push(a,b);continue;}}
  if(d.length<=4)nums.push(+d);
 }
 const uniq=[...new Set(nums)];
 return {pages:uniq.filter(p=>inRange(topicId,p)).sort((a,b)=>a-b),otherPages:uniq.filter(p=>!inRange(topicId,p)&&p>=1)};
}
function kindOf(cell:string|undefined):ExamItem['kind']{
 if(!cell)return null;const k=norm(cell);
 if(/fig/.test(k)&&!/tabel/.test(k))return 'figure';
 if(/tabel|schema/.test(k))return 'table';
 if(/text/.test(k))return 'text';
 return null;
}

export function parseAnalysis(year:number,html:string):ExamItem[]{
 const tables=[...html.matchAll(/<table[\s\S]*?<\/table>/g)].map(m=>[...m[0].matchAll(/<tr[\s\S]*?<\/tr>/g)].map(r=>[...r[0].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)].map(c=>strip(c[1]))));
 const rows=tables.filter(t=>/gril/i.test(t[0]?.[0]??'')).flatMap(t=>t.slice(1)).filter(r=>/^\d+$/.test(r[0]));
 const items:ExamItem[]=rows.map(r=>{
  const n=+r[0],book=BOOK[norm(r[1])];
  if(!book)throw new Error(`Unknown book in ${year}: ${r[1]}`);
  const topicId=topicOf(book,r[2]);
  const {pages,otherPages}=pagesOf(topicId,r[3]);
  const fifth=r[4]??'';
  const key=/^[A-E]{1,5}$/.test(fifth.replace(/\s|,/g,''))?fifth.replace(/\s|,/g,'').split('').sort().join(''):null;
  return {year,n,type:n<=50?'CS':'CM',book,topicId,pages,otherPages,kind:key?null:kindOf(fifth),key};
 });
 return items.sort((a,b)=>a.n-b.n);
}

export function examWeights(items:ExamItem[]){
 const years=[...new Set(items.map(i=>i.year))].sort();
 return TOPICS.map(t=>{
  const mine=items.filter(i=>i.topicId===t.id);
  const perYear=years.map(y=>mine.filter(i=>i.year===y).length);
  const cs=mine.filter(i=>i.type==='CS').length,table=mine.filter(i=>i.kind==='table'||i.kind==='figure').length,kinds=mine.filter(i=>i.kind).length;
  const pageHits:Record<number,number>={};for(const i of mine)for(const p of i.pages)pageHits[p]=(pageHits[p]??0)+1;
  return {topicId:t.id,perYear,mean:Math.round(mine.length/years.length*100)/100,csShare:mine.length?Math.round(cs/mine.length*100)/100:0.25,tableShare:kinds?Math.round(table/kinds*100)/100:null,pages:Object.entries(pageHits).map(([p,n])=>[+p,n] as [number,number]).sort((a,b)=>a[0]-b[0])};
 });
}

if(process.argv[1]&&/exam-history\.ts$/.test(process.argv[1])){
 const items:ExamItem[]=[];
 for(const year of [2023,2024,2025]){
  const file=`tmp/exam-analyses/analiza-${year}.html`;
  if(!existsSync(file)){console.error(`missing ${file}`);process.exit(1);}
  const parsed=parseAnalysis(year,readFileSync(file,'utf8'));
  if(parsed.length!==200)throw new Error(`${year}: ${parsed.length} items`);
  items.push(...parsed);
 }
 const years=[...new Set(items.map(i=>i.year))];
 const weights=examWeights(items);
 const cm2025=items.filter(i=>i.year===2025&&i.type==='CM'&&i.key);
 const cardinality=[2,3,4].map(k=>cm2025.filter(i=>i.key!.length===k).length);
 writeFileSync('public/exam-history.json',JSON.stringify({source:'blog.grile-rezidentiat.ro — analizele publice ale caietelor de Medicină (atribuirea bibliografică a autorilor, nu document oficial)',years,items},null,0)+'\n');
 writeFileSync('src/app/exam-weights.ts',`// Generated by scripts/exam-history.ts from public/exam-history.json — do not edit.\n// Questions per chapter in the ${years.join(', ')} Medicină papers (attribution by blog.grile-rezidentiat.ro).\nexport const EXAM_YEARS=${JSON.stringify(years)};\n// CM key sizes (2, 3, 4 correct) in the ${years.at(-1)} paper.\nexport const EXAM_CM_CARDINALITY=${JSON.stringify(cardinality)};\nexport interface ExamWeight {topicId:string;perYear:number[];mean:number;csShare:number;tableShare:number|null;pages:[number,number][];}\nexport const EXAM_WEIGHTS:ExamWeight[]=${JSON.stringify(weights)};\n`);
 const summary=weights.map(w=>`${w.topicId.padEnd(15)} ${w.perYear.join(' ')}  mean ${w.mean}`).join('\n');
 console.info(`${items.length} items, ${years.length} years; CM cardinality ${years.at(-1)}: ${cardinality.join('/')}\n${summary}`);
}
