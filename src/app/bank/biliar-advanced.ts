import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-88;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('biliar',16,pdfOffset,`biliar-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const BILIAR_ADVANCED=[
q(1,['Semnul Courvoisier constă în:',
 ['O veziculă biliară destinsă, fără sensibilitate la palpare, asociată cu icter, evocând o boală malignă precum cancerul de cap de pancreas','Oprirea bruscă a respirației la palpare profundă în hipocondrul drept, când peritoneul veziculei este inflamat','Durere viscerală surdă de 1–4 ore, fără inflamație, produsă de un calcul impactat în canalul cistic','Febră înaltă ca marker al colicii biliare necomplicate, fără colecistită','Urină hipercromă și scaune decolorate în absența unui obstacol pe căile extrahepatice'],'A',244,'Tablou clinic — Colică biliară, colecistită și icter',
 'Diferențierea semnului Courvoisier de semnul Murphy și de colica biliară neinflamatorie.',
 ['Textul definește vezicula destinsă nedureroasă cu icter ca semn Courvoisier, sugestiv pentru malignitate (cancer de cap de pancreas).','Oprirea respirației la palpare în HD este semnul Murphy, din colecistita acută.','Durerea de 1–4 ore fără inflamație descrie colica biliară, nu semnul Courvoisier.','Febra însoțește colecistita acută sau angiocolita, nu colica biliară.','Scaunele decolorate și urina hipercromă sugerează obstacol extrahepatic, nu absența lui.']],
 8,'Alege între trei semne din aceeași pagină (Courvoisier, Murphy, colică) care se confundă frecvent.',['senmul Courvoisier','cancer de cap de pancreas']),

q(2,['Alegeți afirmațiile corecte referitoare la ecografia în patologia biliară:',
 ['Sensibilitatea și specificitatea ecografiei în detectarea litiazei biliare sunt de 95%','Ecografia poate detecta calculi cu diametrul de până la 3 mm','Calea biliară este considerată dilatată dacă are diametrul >7 mm','Ecografia este metoda de elecție pentru vizualizarea calculilor din CBP, duodenul neinterferând','Aproximativ jumătate dintre calculii veziculari sunt radioopaci pe radiografia abdominală simplă'],'ABC',245,'Examinare imagistică — Ecografie',
 'Aplicarea performanței ecografice (95%, 3 mm, 7 mm) și a limitelor pentru coledocolitiază și radioopacitate.',
 ['Sensibilitatea și specificitatea de 95% sunt citate explicit.','Pragul de 3 mm este menționat.','Diametrul >7 mm definește dilatația căii biliare.','Ecografia este mai puțin utilă pentru calculii de CBP din cauza aerului duodenal.','Doar 10–15% dintre calculii veziculari conțin suficient calciu pentru a fi radioopaci.']],
 8,'Trei praguri numerice corecte față de două supraestimări clasice (CBP vizibil, radioopacitate 50%).',['sunt de 95%','>7 mm']),

q(3,['Scintigrafia biliară HIDA în colecistita acută:',
 ['Vizualizarea căii biliare principale și a duodenului, fără vizualizarea colecistului după 4 ore, indică obstrucția canalului cistic','Sensibilitatea este de 95–97%, iar specificitatea de 90–97%','Este investigația de elecție pentru identificarea calculilor veziculari și ai CBP','Colecistul normal se vizualizează după 4 ore, nu în 30 de minute','Rezultate fals pozitive nu sunt descrise la pacienții cu nutriție parenterală sau hepatită'],'AB',246,'Scintigrafia biliară HIDA',
 'Interpretarea nevizualizării colecistului la 4 ore ca obstrucție cistică și recunoașterea limitelor HIDA pentru litiază.',
 ['Criteriul CBP+duoden vizibile, colecist absent la 4 ore, este explicit pentru obstrucția cisticului.','Intervalele 95–97% și 90–97% sunt citate.','HIDA nu este utilă în identificarea calculilor veziculari sau ai CBP.','Colecistul normal este vizualizat în 30 de minute de la injectare.','Rezultate fals pozitive pot apărea la nutriție parenterală sau hepatită.']],
 8,'Inversează timing-ul vizualizării normale (30 min vs 4 h) și atribuie HIDA un rol diagnostic pe care textul i-l neagă.',['după 4 ore','95-97%']),

q(4,['Colangita acută și litiaza coledociană se caracterizează prin:',
 ['Triada Charcot include icter, durere în hipocondrul drept și febră asociată cu frisoane','Pentada Reynolds adaugă hipotensiune și stare de confuzie psihică','Colecistita acută diferă de colangita acută prin absența obstrucției biliare și a icterului','Aproximativ 50% dintre pacienții cu litiază coledociană pot rămâne asimptomatici','Calculii din CBP sunt vizualizați ecografic în marea majoritate a cazurilor'],'ABCD',249,'Litiaza coledociană și colangita acută',
 'Diferențierea triadei Charcot de pentada Reynolds și a colangitei de colecistită, cu recunoașterea limitei ecografiei pentru CBP.',
 ['Cele trei elemente ale triadei Charcot sunt enumerate.','Hipotensiunea și confuzia completează pentada Reynolds.','Deosebirea prin absența obstrucției și a icterului este explicită.','Proporția de circa 50% asimptomatici este citată.','De cele mai multe ori, calculii din CBP nu pot fi vizualizați ecografic.']],
 9,'Cere harta Charcot versus Reynolds versus colecistită, cu un distractor care supraestimează vizibilitatea ecografică a CBP.',['Triada Charcot','pentada Reynold']),

q(5,['În pancreatita acută biliară se recomandă:',
 ['Calculii biliari cauzează circa 40% din pancreatite (mai ales la femei), iar alcoolul circa 40% (mai ales la bărbați)','Fără colecistectomie, până la 60% dintre pacienți recidivează în decurs de 6 luni','În formele ușoare sau moderate, colecistectomia laparoscopică se poate efectua în primele 48–72 de ore de la internare','Antibioterapia se administrează de rutină în toate formele ușoare, independent de complicațiile septice','Colecistectomia trebuie amânată 6 luni după orice episod ușor, pentru a permite vindecarea pancreatică'],'ABC',250,'Pancreatită acută biliară',
 'Aplicarea etiologiei 40/40, a recurenței de 60% fără colecistectomie și a ferestrei 48–72 de ore pentru colecistectomie precoce.',
 ['Proporțiile 40% litiază și 40% alcool, cu predilecție de sex, sunt explicite.','Recidiva de până la 60% în 6 luni fără colecistectomie este citată.','Fereastra 48–72 de ore pentru forme ușoare/moderate este menționată.','Antibioticele sunt rezervate formelor severe și complicațiilor septice, nu formelor ușoare de rutină.','Amânarea este justificată în pancreatita severă, nu după orice episod ușor.']],
 8,'Confruntă fereastra precoce 48–72 h cu falsa amânare de 6 luni și cu antibioterapia neselectivă.',['calculi biliari (40%','până la 60%']),

q(6,['Ileusul biliar se caracterizează prin:',
 ['Reprezintă sub 1% din toate cazurile de ocluzie intestinală','Raportul femei:bărbați este de 3,5:1','Calculul se impactează de obicei în jejunul proximal, nu în apropierea valvei ileocecale','Aerul în arborele biliar lipsește din tabloul radiologic tipic','CT-ul cu substanță de contrast orală este inferior radiografiei simple pentru diagnostic'],'AB',250,'Ileusul biliar',
 'Recunoașterea rarității ileusului biliar și a predominanței feminine, față de locul clasic de impactare și aerobilie.',
 ['Textul citează <1% din ocluziile intestinale.','Raportul 3,5:1 este explicit.','Impactarea este imediat proximal de valva ileocecală, cea mai îngustă porțiune.','Pacienții se prezintă cu ocluzie și aer în arborele biliar.','CT-ul cu contrast oral este investigația de elecție, nu inferioară radiografiei.']],
 8,'Mută locul de impactare (VIC versus jejun) și neagă aerobilia, pe două cifre epidemiologice memorabile.',['3,5: 1','valva ileocecală']),
];
