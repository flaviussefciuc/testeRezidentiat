import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-89;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('pancreas',17,pdfOffset,`pancreas-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const PANCREAS_ADVANCED=[
q(1,['Diagnosticul și etiologia pancreatitei acute:',
 ['Diagnosticul este cert când sunt îndeplinite cel puțin două dintre trei criterii: tablou clinic concordant, amilaze sau lipaze crescute și modificări CT tipice','Consumul de alcool și calculii biliari sunt responsabili de aproximativ 85% dintre cazuri','Pancreatita post-ERCP poate apărea la 1–5% dintre pacienți','Formele fără etiologie cunoscută reprezintă 40–50% și nu au legătură cu microlitiaza','Pancreatita acută ușoară se definește prin necroză infectată și insuficiență multiplă de organ persistentă'],'ABC',262,'Pancreatita acută — Diagnostic și etiologie',
 'Aplicarea criteriilor Atlanta (2 din 3) și a ponderii alcool/litiază, față de definirea greșită a formei ușoare.',
 ['Cele trei criterii și regula „cel puțin două” sunt explicite.','Ponderea de aproximativ 85% alcool plus calculi este citată.','Intervalul 1–5% post-ERCP este menționat.','Formele idiopatice sunt 8–10% și se leagă adesea de sludge, pancreas divisum sau pancreatită autoimună IgG4.','Necroza infectată și MSOF persistentă definesc forma severă, nu pe cea ușoară.']],
 8,'Amestecă pragul diagnostic Atlanta cu clasificarea de severitate și umflă ponderea formelor idiopatice.',['aproximativ 85%','1-5% dintre pacienţi']),

q(2,['Interpretată separat, creșterea de 3 ori peste limita normală a amilazelor serice are:',
 ['Specificitate de 95% și sensibilitate de 61%','Sensibilitate de 95% și specificitate de 61%','Sensibilitate și specificitate de 50%','Valoare prognostică superioară criteriilor Ranson','Semnificație diagnostică doar dacă lipaza rămâne normală'],'A',263,'Pancreatita acută — Explorări de laborator',
 'Diferențierea specificității înalte a pragului de 3× amilază de sensibilitatea mai scăzută și de criteriile de prognostic.',
 ['Textul atribuie creșterii de 3 ori o specificitate de 95% și o sensibilitate de 61%.','Valorile sunt inversate față de text.','Nu sunt citate sensibilitate și specificitate de 50% pentru acest prag.','Amilaza nu este inclusă în criteriile Ranson și nu reflectă gravitatea.','Asocierea 1,5× amilază plus 5× lipază are sensibilitate 95%; amilaza izolată nu cere lipază normală.']],
 8,'Inversează sensibilitatea și specificitatea unui prag numeric clasic, ușor de memorat greșit.',['specificitate de 95%','61 %']),

q(3,['Criteriile Ranson în pancreatita acută:',
 ['Nici amilaza, nici lipaza serică nu sunt incluse și nu reflectă gravitatea pancreatitei','Prezența a trei sau mai multe criterii indică o pancreatită severă, cu incidență crescută a complicațiilor','Pentru etiologia non-biliară, pragul de vârstă la internare este >70 de ani','Amilaza serică este criteriul dominant de gravitate măsurat la internare','O singură examinare CT la internare reflectă gravitatea bolii pe tot parcursul evoluției'],'AB',264,'Prognostic — Criteriile Ranson',
 'Recunoașterea faptului că amilaza/lipaza nu intră în Ranson și a pragului de trei criterii pentru forma severă.',
 ['Textul subliniază explicit absența amilazei și lipazei din criteriile Ranson.','Trei sau mai multe criterii definesc pancreatita severă.','Vârsta >70 ani este pragul biliar; non-biliar este >55 ani.','Amilaza marchează distrucția acinară, nu gravitatea.','Pancreatita nu este statică; un singur CT poate să nu reflecte gravitatea la un alt moment.']],
 8,'Inversează pragurile de vârstă biliar/non-biliar și atribuie amilazei un rol prognostic pe care textul i-l neagă.',['trei sau mai multe criterii','Criteriile Ranson']),

q(4,['Managementul necrozei pancreatice:',
 ['Profilaxia antibiotică nu este indicată nici la pacienții cu necroză sterilă','Necroza pancreatică apare la aproximativ 20% dintre pacienții cu pancreatită acută','Doar circa 5% dintre pacienții cu necroză dezvoltă o infecție secundară','Intervențiile precoce în necroza sterilă trebuie evitate cel puțin 2–3 săptămâni de la apariție','Necroza infectată trebuie suspectată încă din prima zi de la debutul pancreatitei'],'ABCD',265,'Complicații — Necroza pancreatică',
 'Aplicarea ratelor 20%/5%, a interdicției profilaxiei în necroza sterilă și a ferestrei de 2–3 săptămâni înaintea necrectomiei.',
 ['Textul precizează că profilaxia nu este indicată nici în necroza sterilă.','Incidența de circa 20% este citată.','Infecția secundară la circa 5% dintre cei cu necroză este menționată.','Fereastra de cel puțin 2–3 săptămâni înaintea operației în necroza sterilă este explicită.','Infecția apare de obicei la 2–3 săptămâni de la debut, nu din prima zi.']],
 9,'Combină două procente de necroză/infecție cu timing-ul chirurgical, pe un distractor care forțează operația în ziua 1.',['aproximativ 20%','2-3 săptămâni'],[266]),

q(5,['Carcinomul pancreatic se caracterizează prin:',
 ['O veziculă biliară palpabilă, nedureroasă, asociată cu icter nedureros, reprezintă cel mai adesea semn de malignitate (semnul Courvoisier)','Rezecabilitatea presupune absența diseminării la distanță, a ascitei și a invaziei VMS, venei porte, AMS, arterei hepatice, venei cave și aortei','Tumorile corporeo-caudale se prezintă tardiv, cu durere posterioară, fără icter, și au prognostic nefavorabil','Carcinoamele periampulare produc icter nedureros mai târziu decât cele ale capului pancreatic și au prognostic mai prost','Biopsia preoperatorie a unei tumori imagistic rezecabile este necesară înaintea oricărei duodenopancreatectomii'],'ABC',269,'Tumorile pancreatice — Tablou clinic și rezecabilitate',
 'Recunoașterea semnului Courvoisier, a criteriilor de rezecabilitate și a prezentării tardive a tumorilor corporeo-caudale.',
 ['Semnul Courvoisier este definit explicit în acest context.','Criteriile de rezecabilitate (fără metastaze, ascită sau invazie vasculară majoră) sunt enumerate.','Prezentarea tardivă fără icter și prognosticul nefavorabil al leziunilor corporeo-caudale sunt descrise.','Carcinoamele periampulare produc icter mai devreme și au prognostic mai bun.','Biopsia preoperatorie a tumorii rezecabile nu este indicată de rutină, din cauza fals-negativelor și a riscului de întârziere.']],
 8,'Inversează prognosticul periampular versus corporeo-caudal și transformă biopsia opțională într-o condiție preoperatorie.',['semnul Courvoisier','icterului nedureros'],[270]),

q(6,['La o tumoră pancreatică imagistic rezecabilă, drenajul biliar preoperator:',
 ['Nu este indicat atunci când imaginile sugerează rezecabilitate, deoarece procedurile de drenaj cresc riscul de complicații infecțioase după rezecție','Trebuie efectuat de rutină pentru a reduce complicațiile infecțioase post-rezecție','Înlocuiește duodenopancreatectomia cefalică în tumorile capului pancreatic','Se realizează prin splenectomie asociată pancreatectomiei distale','Este preferat stentării doar după documentarea invaziei aortice'],'A',270,'Tratamentul cancerului pancreatic — Pregătire preoperatorie',
 'Recunoașterea că drenajul biliar preoperator crește infecțiile după rezecție și nu este indicat la tumorile rezecabile.',
 ['Textul contraindică drenajul preoperator la tumorile imagistic rezecabile, din cauza creșterii complicațiilor infecțioase.','Drenajul crește, nu reduce, riscul infecțios post-rezecție.','Tumorile cefalice rezecabile se abordează prin duodenopancreatectomie (Whipple), nu prin drenaj ca substitut.','Splenectomia însoțește pancreatectomia distală pentru corp/coadă, nu drenajul biliar.','Invazia aortică definește nerezecabilitatea, nu o indicație de drenaj ca etapă curativă.']],
 8,'Inversează relația drenaj–infecție, pe o regulă preoperatorie contraintuitivă.',['Drenajul','complicaţii infecţioase']),
];
