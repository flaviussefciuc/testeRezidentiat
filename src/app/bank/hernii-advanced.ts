import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-59;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hernii',11,pdfOffset,`hernii-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const HERNII_ADVANCED=[
q(1,['Diastazisul de mușchi drepți abdominali se deosebește de hernie prin faptul că:',
 ['Reprezintă o subțiere a liniei mediane superioare, fără defect parietal, deci fără risc de încarcerare sau strangulare și fără indicație chirurgicală','Presupune un defect parțial al peretelui, cu risc înalt de strangulare, deci cu indicație operatorie de urgență','Este un defect ombilical congenital care se încarcerează frecvent','Se însoțește de sac peritoneal reductibil prin inelul inghinal intern','Impune plasă intraperitoneală de principiu, similar herniei ventrale mari'],'A',127,'Herniile peretelui abdominal — Diastazisul',
 'Diferențierea diastazisului (fără defect, fără strangulare, fără chirurgie) de hernia ventrală adevărată.',
 ['Definiția (subțiere fără defect), absența riscului de încarcerare/strangulare și absența indicației chirurgicale sunt explicite.','Defectul parietal definește hernia, nu diastazisul.','Diastazisul nu este un defect ombilical.','Sacul prin inelul inghinal intern descrie hernia indirectă, nu diastazisul.','Plasa intraperitoneală nu este tratamentul diastazisului, care nu se operează.']],
 8,'Distractorii tratează diastazisul ca pe o hernie cu risc de strangulare, o confuzie clinică frecventă.',['diastazisul de mușchi','defect parietal']),

q(2,['Alegeți afirmațiile corecte referitoare la încarcerarea și strangularea herniei:',
 ['Încarcerarea înseamnă blocarea conținutului, care nu mai poate fi redus în cavitatea peritoneală','Hernia încarcerată nedureroasă, în sine, nu impune intervenție de urgență','Herniile recent încarcerate necesită intervenție în 4–6 ore de la prezentare, pentru a evita complicațiile','Reducerea sub sedare se practică la pacientul cu leucocitoză și acidoză, ca primă manevră','Strangularea se exclude dacă tegumentul își păstrează culoarea'],'ABC',127,'Tablou clinic — Încarcerare și strangulare',
 'Separarea încarcerării (blocare, nu neapărat urgență) de strangulare (ischemie, urgență) și a ferestrei de 4–6 ore.',
 ['Definiția încarcerării ca ireductibilitate este explicită.','Textul precizează că hernia încarcerată nedureroasă nu necesită urgență.','Fereastra 4–6 ore pentru herniile recent încarcerate este citată.','Reducerea sub sedare se acceptă doar la pacientul stabil, fără leucocitoză sau acidoză.','Modificarea de culoare sugerează necroză, dar strangularea poate fi prezentă și fără acest semn; peritonita, acidoza și leucocitoza o indică.']],
 8,'Inversează condițiile de reducere sub sedare (leucocitoză/acidoză) și transformă culoarea tegumentului în criteriu de excludere.',['4-6 ore','încarcerată']),

q(3,['În pregătirea electivă a herniorafiei, sunt adevărate afirmațiile:',
 ['Înainte de o operație electivă, hemoglobina glicozilată A1C ar trebui normalizată sub valoarea de 7','Stoparea fumatului previne complicațiile pulmonare și pe cele de plagă','Plasa biologică/absorbabilă este de preferat în contaminare intra-abdominală sau diabet dezechilibrat, față de sintetica non-absorbabilă','HbA1c-țintă preoperatorie electivă este 9%, prag sub care infecția de plasă nu mai apare','Tehnica anatomică (doar sutură) este de primă intenție în herniile mari la fumători obezi, deoarece are recidivă mai mică decât plasa'],'ABC',128,'Factori ce țin de pacient — Tehnici alloplastice',
 'Aplicarea pragului HbA1c <7 și a alegerii plasei biologice în câmp contaminat, față de supraestimarea suturii anatomice.',
 ['Pragul A1C sub 7 înaintea chirurgiei elective este explicit.','Efectul opririi fumatului asupra plămânului și plăgii este menționat.','Materialele biologice/absorbabile sunt indicate în contaminare sau diabet dezechilibrat.','Ținta nu este 9%; textul cere normalizare sub 7.','Tehnicile alloplastice au risc mult mai scăzut de recidivă; anatomica este rezervată defectelor mici, cu risc minim.']],
 8,'Ridică pragul A1C la 9% și inversează relația recidivă plasă vs sutură anatomică.',['valoarea de 7','plasele biologice'],[129]),

q(4,['Hernia femurală la femei se caracterizează prin:',
 ['Incidență mai mare decât la bărbați, din cauza pelvisului mai larg, și indicație operatorie chiar dacă este asimptomatică, din cauza riscului de încarcerare sau strangulare','Frecvență mai mică decât la bărbați și supraveghere ca pentru hernia inghinală minim simptomatică','Localizare deasupra ligamentului ilioinghinal, identică herniei inghinale directe','Absența riscului de strangulare, ceea ce permite amânarea indefinită','Reparație prin aceeași tehnică Lichtenstein anterioară ca pentru hernia inghinală, fără acoperirea spațiului femural'],'A',133,'Herniile orificiului miopectineal — Hernia femurală',
 'Recunoașterea riscului înalt de încarcerare al herniei femurale, inclusiv asimptomatice, și a diferenței de localizare față de hernia inghinală.',
 ['Incidența mai mare la femei, pelvisul mai larg și indicația de a opera hernia femurală asimptomatică sunt explicite.','Spre deosebire de hernia OMP minim simptomatică, femurala asimptomatică se operează.','Hernia femurală se simte complet sub ligamentul ilioinghinal.','Riscul de încarcerare/strangulare este motivul intervenției.','Herniile femurale necesită metode diferite, cu închiderea spațiului inferior al OMP; abordul posterior acoperă cele trei spații.']],
 8,'Extinde protocolul de supraveghere al herniei inghinale minim simptomatice asupra femuralelor, o eroare de triaj.',['hernii femurale','ligamentul ilioinghinal']),

q(5,['Caracteristicile herniilor particulare ale OMP includ:',
 ['Hernia Richter încarcerează doar o porțiune din circumferința intestinală, fără ocluzie, dar cu risc de strangulare','Hernia prin alunecare are seroasa unui organ ca parte a sacului; deschiderea intempestivă poate contamina câmpul și împiedica plasa','Hernia Littre conține un diverticul Meckel simptomatic în sac','Hernia Amyand conține apendicele cecal','Hernia Richter produce ocluzie intestinală completă, deoarece lumenul este interceptat pe toată circumferința'],'ABCD',133,'Situații particulare — Richter, alunecare, Littre, Amyand',
 'Recunoașterea celor patru entități eponime și a pericolului herniei Richter (strangulare fără ocluzie).',
 ['Definiția Richter (porțiune de circumferință, fără simptome de ocluzie) este explicită.','Mecanismul herniei prin alunecare și riscul de contaminare intraoperatorie sunt descrise.','Littre = diverticul Meckel în sac.','Amyand = apendice în sac.','În Richter lumenul nu este implicat, deci nu există ocluzie completă.']],
 8,'Inversează fiziopatologia Richter (ocluzie vs strangulare fără ocluzie), capcana clasică a acestei hernii.',['hernia Richter','hernia Amyand']),

q(6,['Selectați enunțurile adevărate despre tehnicile de cură a herniilor OMP:',
 ['Procedeul Lichtenstein plasează plasa pe fața posterioară a canalului inghinal, acoperind spațiile direct și indirect, superior de ligamentul ilioinghinal','Abordarea posterioară protetică (TEP sau TAPP) este unica tehnică în care o singură plasă acoperă cele trei spații ale OMP (direct, indirect și femural)','Herniile femurale ar trebui reparate prin abordare posterioară','Procedeele tisulare (Bassini, McVay) sunt standardul actual, deoarece plasa este contraindicată în absența contaminării','TEP pătrunde în cavitatea peritoneală similar oricărei laparoscopii, spre deosebire de TAPP'],'ABC',134,'Tehnici chirurgicale — Lichtenstein, TEP, TAPP',
 'Diferențierea acoperirii anterioare Lichtenstein (două spații) de plasa posterioară care include și spațiul femural.',
 ['Descrierea Lichtenstein (plasă anterioară, spații direct/indirect, deasupra ligamentului) este explicită.','Acoperirea celor trei spații prin TEP/TAPP este numită unică.','Recomandarea de abord posterior pentru hernia femurală este enunțată.','Utilizarea protezei este standardul; procedeele tisulare sunt rezervate câmpului contaminat.','TEP nu intră în cavitatea peritoneală; TAPP pătrunde intraperitoneal.']],
 8,'Inversează TEP cu TAPP și restabilește greșit procedeele tisulare ca standard în câmp curat.',['Lichtenstein','orificiul miopectineal'],[133]),

q(7,['Durerea cronică după cura herniei OMP este definită ca durere la locul intervenției care persistă mai mult de:',
 ['12 săptămâni, întâlnită la 5–10% dintre pacienți','48 de ore, interval în care inflamația postoperatorie se consideră cronică','6 luni, prag sub care simptomul este interpretat ca serom','7 zile, corespunzător echimozelor scrotale obișnuite','24 de ore, dacă apare hipoestezie la nivelul inciziei'],'A',136,'Complicații postoperatorii — Durerea cronică',
 'Recunoașterea pragului de 12 săptămâni și a incidenței 5–10% pentru durerea cronică post-herniorafie OMP.',
 ['Textul definește durerea cronică ca persistând mai mult de 12 săptămâni, la 5–10% dintre pacienți.','48 de ore descrie inflamația acută, nu cronicizarea.','Seromul se resorbe în timp și nu redefinește pragul durerii cronice.','Echimoză/tumefacție scrotală sunt așteptări imediate, nu durere cronică.','Hipoestezia de incizie este frecventă în abord deschis și nu definește cronicizarea la 24 de ore.']],
 8,'Distractorii înlocuiesc pragul de 12 săptămâni cu intervale ale inflamației acute sau ale echimozelor.',['5-10%','12 săptămâni']),

q(8,['Următoarele afirmații despre seromul de după herniorafia ventrală sunt adevărate:',
 ['Seromul nu prezintă expansiune la manevra Valsalva, spre deosebire de hernia recidivată, și de obicei nu este dureros','Nu este recomandată drenarea unui serom necomplicat, din cauza riscului de infectare','Seromul se recunoaște clinic prin impuls la tuse, identic recidivei, și se drenează de principiu în prima zi','Excizia sacului peritoneal elimină complet riscul de serom, inclusiv în herniile foarte mari','Infecția de plasă se previne prin drenajul repetat al seromului necomplicat'],'AB',130,'Complicații postoperatorii — Seromul',
 'Diferențierea seromului de recidivă (fără Valsalva) și evitarea puncției seromului necomplicat.',
 ['Absența expansiunii la Valsalva și caracterul de obicei nedureros sunt explicit contrastate cu recidiva.','Drenarea seromului necomplicat este descurajată din cauza infecției.','Impulsul la tuse și drenajul de principiu descriu conduita greșită, rezervată recidivei suspectate.','Chiar și după excizia sacului, mai ales în hernii mari, riscul nu dispare complet.','Drenajul seromului necomplicat crește, nu scade, riscul de infectare a plasei.']],
 8,'Tratează seromul ca recidivă (Valsalva pozitiv, drenaj imediat), o eroare care infectează plasa.',['seromul','manevra Valsalva']),
];
