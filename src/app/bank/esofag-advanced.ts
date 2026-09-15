import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p<=142?p-60:p-68;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('esofag',12,pdfOffset,`esofag-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const ESOFAG_ADVANCED=[
q(1,['Anatomia chirurgicală a esofagului se caracterizează prin:',
 ['Lungime de aproximativ 25 cm, de la cartilajul cricoid (C6) până sub diafragm (T11), cu abord chirurgical de obicei prin toracotomie dreaptă, deoarece aorta coboară pe partea stângă','Trei zone de îngustare: mușchiul cricofaringian, arcul aortic și diafragmul','Esofagul cervical este irigat de artera gastrică stângă, iar drenajul venos distal evită sistemul portal','Abordul de elecție prin toracotomie stângă, deoarece aorta protejează esofagul pe dreapta','Originea esofagului la vertebra T3 și terminarea la L2, fără zone de îngustare fiziologică'],'AB',140,'Anatomia esofagului',
 'Aplicarea reperelor C6–T11, a celor trei îngustări și a motivelor toracotomiei drepte, plus drenajul portal distal.',
 ['Lungimea ~25 cm, originile C6/T11 și toracotomia dreaptă din cauza aortei stângi sunt explicite.','Cele trei zone de impactare (cricofaringian, arc aortic, diafragm) sunt enumerate.','Artera tiroidiană inferioară irigă esofagul cervical; distal, drenajul se face spre sistemul portal, cu risc de varice.','Aorta pe stânga impune abord drept, nu stâng.','Originea este C6, nu T3; zonele de îngustare există și sunt clinic importante.']],
 8,'Inversează partea toracotomiei (stânga vs dreapta) și nivelele vertebrale de origine/terminare.',['25 cm','toracotomie dreaptă']),

q(2,['Care dintre următoarele afirmații diferențiază corect carcinomul scuamo-celular de adenocarcinomul esofagian?',
 ['CSC este localizat predominant în treimea medie și proximală și se asociază cu alcool, tutun, nitrozamine, tiloză, acalazie și leziuni caustice','Adenocarcinomul implică esofagul distal și se asociază cu esofagul Barrett din BRGE; prevalența este mai mare în populația albă','Supraviețuirea generală la 5 ani rămâne redusă, aproximativ 20%, din cauza bolii avansate la diagnostic','CSC a depășit adenocarcinomul ca cel mai frecvent tip în America de Nord și Europa','Adenocarcinomul se asociază predominant cu sindromul Plummer-Vinson și cu tiloza, nu cu Barrett'],'ABC',151,'Carcinomul esofagian',
 'Separarea epidemiologiei și a sediului CSC (proximal/mediu, alcool-tutun) de adenocarcinomul distal pe esofag Barrett.',
 ['Sediul și factorii de risc ai CSC, inclusiv tiloza, acalazia și causticile, sunt listați.','Asocierea adenocarcinom–Barrett/BRGE și predominanța la populația albă sunt explicite.','Cifra de ~20% supraviețuire la 5 ani este citată.','Textul precizează că adenocarcinomul a depășit CSC în prevalență în America de Nord și Europa.','Plummer-Vinson și tiloza sunt factori de CSC, nu de adenocarcinom.']],
 8,'Inversează care subtip a devenit predominant în Occident și mută factorii de CSC asupra adenocarcinomului.',['esofagului Barrett','aproximativ 20%']),

q(3,['Perforația esofagiană: alegeți afirmațiile corecte:',
 ['Majoritatea perforațiilor cervicale urmează instrumentării endoscopice, în special la sfincterul cricofaringian','Tranzitul baritat poate fi negativ în până la 20% din perforațiile cervicale, deci indicația operatorie se poate baza pe clinică și radiografie simplă','Ruptura distală spontană după vărsături violente (Boerhaave) are prognostic mai prost din cauza contaminării toracice cu conținut esofagian și gastric','Sindromul Mallory-Weiss este o ruptură transmurală a esofagului toracic, tratată identic cu Boerhaave','Sutura primară a defectului cervical este indispensabilă, deoarece drenajul singur nu permite vindecarea'],'ABC',156,'Perforația esofagiană',
 'Diferențierea perforației cervicale (instrumentare, baritat fals negativ 20%) de Boerhaave și de Mallory-Weiss (non-transmural).',
 ['Cauza endoscopică, la cricofaringian, este numită cea mai frecventă pentru perforația cervicală.','Rata de 20% fals negativ a tranzitului baritat este explicită.','Prognosticul mai prost al Boerhaave prin contaminare toracică este descris.','Mallory-Weiss nu este transmural și produce în principal hemoragie digestivă superioară.','Sutura primară cervicală se poate încerca, dar vindecarea se obține de regulă prin drenaj, NPO și absența obstrucției distale.']],
 8,'Confundă Mallory-Weiss cu Boerhaave și transformă sutura cervicală din opțiune în condiție sine qua non.',['sfincterului cricofaringian','spațiul retrovisceral'],[157]),

q(4,['Hernia hiatală de tip II (paraesofagiană adevărată) se definește prin:',
 ['Prolaps izolat al stomacului printr-un ligament frenoesofagian slăbit, cu joncțiunea gastroesofagiană rămasă intra-abdominal','Alunecarea joncțiunii gastroesofagiene în torace, tipic asociată cu BRGE','Combinația dintre hernia de alunecare și cea paraesofagiană','Hernia de tip III plus alte viscere abdominale migrate intratoracic','Absența oricărui prolaps gastric, cu simplă laxitate a hiatusului fără sac'],'A',157,'Herniile hiatale',
 'Recunoașterea criteriului anatomic al tipului II: stomac în torace, JGE ancorată în abdomen.',
 ['Definiția tipului II (prolaps gastric izolat, JGE intra-abdominală) este explicită.','Alunecarea JGE descrie tipul I.','Combinația alunecare + paraesofagiană este tipul III.','Tipul IV este tipul III plus alte viscere.','Laxitatea fără prolaps nu corespunde niciunui tip descris.']],
 8,'Permutează tipurile I–IV, o confuzie frecventă de clasificare a herniilor hiatale.',['paraesofagiană','joncțiunii gastroesofagiene'],[158]),

q(5,['În achalazie, miotomia Heller laparoscopică se caracterizează prin:',
 ['Extinderea miotomiei pe stomac de cel puțin 2–3 cm, pentru a preveni miotomia incompletă','Fundoplicatură concomitentă, pentru a preveni refluxul după ce SEI a devenit incompetent','Anomalia primară este degenerarea plexului mienteric (Auerbach), cu eșecul relaxării SEI','Injectarea de toxină botulinică în SEI, cu succes durabil care înlocuiește miotomia la tineri','POEM asociază de rutină fundoplicatură, deci ratele de reflux sunt mai mici decât după Heller'],'ABC',160,'Achalazia — Miotomia Heller',
 'Aplicarea lungimii gastrice 2–3 cm a miotomiei și a fundoplicaturii anti-reflux, față de limitele toxinei botulinice și ale POEM.',
 ['Extinderea de cel puțin 2–3 cm pe stomac este subliniată.','Fundoplicatura concomitentă pentru a preveni BRGE după incompetența SEI este descrisă.','Degenerarea plexului Auerbach și eșecul relaxării SEI sunt mecanismul primar.','Toxina botulinică are succes limitat; dilatarea pneumatică se preferă adesea la tineri, nu botox-ul ca substitut.','După POEM ratele de reflux pot fi mari, deoarece fundoplicatura nu se face concomitent.']],
 8,'Inversează POEM vs Heller privind fundoplicatura și supraestimează toxina botulinică la tineri.',['2-3 cm','plexului nervos mienteric'],[161]),

q(6,['Indicați afirmațiile corecte privind reconstrucția după esofagectomie:',
 ['Stomacul este grefonul cel mai des utilizat; după secționarea arterei gastrice stângi și a gastrice scurte, vascularizația rămâne pe artera gastrică dreaptă și gastroduodenală','Refluxul postoperator este mai frecvent după anastomoza intratoracică decât după cea cervicală','Abordul Ivor Lewis combină toracotomie dreaptă cu laparotomie și anastomoză în hemitoracele drept','McKeown adaugă timp cervical; consecințele unei fistule anastomotice cervicale sunt mai puțin severe decât ale unei fistule intratoracice','Colonul stâng se folosește antiperistaltic, pediculat pe artera mezenterică superioară, fără angiografie preoperatorie'],'ABCD',153,'Tratament chirurgical — Substitute esofagiene',
 'Recunoașterea stomacului ca grefon principal, a pediculului gastric drept și a diferenței Ivor Lewis vs McKeown privind locul anastomozei.',
 ['Avantajele stomacului și pediculul residual (gastrică dreaptă + gastroduodenală) sunt explicite.','Comparația refluxului anastomoza toracică vs cervicală este menționată.','Ivor Lewis (toracotomie dreaptă + laparotomie, anastomoză dreaptă) este descris ca cel mai comun abord.','Textul precizează că fistula cervicală are consecințe mai puțin severe decât fistula intratoracică.','Colonul stâng se folosește izoperistaltic, pediculat pe artera colică stângă (AMI), după colonoscopie și angiografie.']],
 8,'Inversează pediculul și sensul peristaltic ale colonului stâng, pe fondul distincției Ivor Lewis vs McKeown.',['Ivor Lewis','artera gastrică dreaptă']),
];
