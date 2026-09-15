import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('perioperator',1,0,`perioperator-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const PERIOPERATOR_B=[
q(9,['Screeningul de rutină al hemoglobinei preoperatorii se realizează:',
 ['La pacienții supuși procedurilor cu pierderi sanguine tipic >500 mL sau cu anemie de cauză necunoscută','La toți asimptomaticii, indiferent de tipul intervenției','Doar la copii, hemoglobină fiind superfluă la adult','Numai postoperator, pentru a defini starea bazală','Ca substitut al anamnezei la urgențe fără istoric'],'A',1,'Evaluarea preoperatorie — Screeningul hemoglobinei',
 'Aplicarea indicației selective de hemoglobină (>500 mL sau anemie nediagnosticată) față de screeningul neselectiv.',
 ['Textul limitează screeningul de rutină al hemoglobinei la proceduri cu pierderi tipic >500 mL sau anemie de cauză necunoscută.','Screeningul neselectiv la asimptomatici este argumentat împotriva, nu în favoare.','Indicația nu este rezervată copiilor.','Starea bazală nu este recomandată la asimptomatici; hemoglobina se evaluează preoperator când e indicată.','Testele nu substituie anamneza, nici la urgențe.']],
 8,'Pragul de 500 mL se confundă ușor cu indicația de ionogramă sau de sumar de urină de pe aceeași pagină.',['>500 mL','anemie de cauză necunoscută']),

q(10,['Alegeți afirmațiile corecte referitoare la investigațiile preoperatorii țintite:',
 ['Ionograma și creatinina sunt adecvate când istoricul sugerează patologie cronică (diabet, HTA, boală cardiovasculară, renală, hepatică)','Sumarul de urină este recomandat doar la simptome urinare, boală cronică de tract urinar sau proceduri urologice','Scopul consultului de specialitate nu este de a contraindica operația, ci de a cuantifica riscul și de a formula pregătirea','Ionograma de rutină este superfluă la vârstnici, deshidratarea cronică fiind rară','Consultul de specialitate înlocuiește discuția echipei chirurgicale cu pacientul privind indicația operatorie'],'ABC',1,'Testele de screening și consulturile de specialitate',
 'Diferențierea indicațiilor selective de ionogramă/sumar urinar de mitul contraindicației prin consult.',
 ['Textul enumeră patologiile cronice care justifică ionograma și creatinina.','Cele trei indicații ale sumarului de urină sunt explicite.','Consultul stabilește gradul de risc și pregătirea, nu contraindicația.','Vârstnicii au risc substanțial de deshidratare cronică, deci ionograma este recomandată.','După cuantificarea riscului, echipa chirurgicală discută indicația cu pacientul.']],
 8,'Inversează indicația de ionogramă la vârstnic și transformă consultul într-un veto operator.',['sumarului de urină','consultului de specialitate']),

q(11,['Disfuncția renală perioperatorie se caracterizează prin:',
 ['BRC se definește ca boală organică renală sau scăderea funcției timp de cel puțin 3 luni','Perioperator, cea mai frecventă cauză de IRA este necroza tubulară acută','Riscul de IRA la pacienții chirurgicali este de aproximativ 1%','Fracția de ejecție <35% și indexul cardiac <1,7 L/min/m² sunt factori asociați cu risc crescut de IRA','BRC în stadiu terminal denotă un grad precis de filtrare glomerulară, fără legătură cu dializa'],'ABCD',2,'Pacientul cu disfuncție renală — BRC și IRA',
 'Aplicarea definiției BRC (≥3 luni), a NTA ca cauză perioperatorie dominantă și a riscului de 1%.',
 ['Pragul de cel puțin 3 luni definește BRC.','NTA este cauza perioperatorie cea mai frecventă de IRA.','Cifra de aproximativ 1% este citată.','FE <35% și indexul cardiac <1,7 L/min/m² sunt listați ca factori de risc.','Stadiul terminal indică necesitatea dializei sau a transplantului, nu un grad precis de funcție.']],
 8,'Permutează NTA cu cauzele prerenale și confundă „stadiu terminal” cu un prag numeric de RFG.',['cel puţin 3 luni','necroza tubulară acută']),

q(12,['Identificați afirmația corectă privind hemostaza și analgezia la pacientul cu BRC:',
 ['O doză de DDAVP poate fi folosită preoperator în trombocitopatia din BRC, stimulând eliberarea de factor von Willebrand din endoteliu','AINS sunt analgezicul de primă intenție, deoarece nu se acumulează în BRC','Opioidele sunt preferate fără ajustare, riscul de depresie respiratorie fiind neglijabil','DDAVP blochează factorul von Willebrand și este evitat preoperator','Heparinizarea de dializă nu influențează sângerarea perioperatorie'],'A',3,'BRC — DDAVP și analgezia perioperatorie',
 'Recunoașterea DDAVP ca manevră preoperatorie pentru trombocitopatia uremică.',
 ['Textul descrie eliberarea de vWF de către DDAVP și folosirea unei doze preoperatorii.','AINS sunt în general contraindicate din cauza nefrotoxicității.','Opioidele se acumulează și cresc riscul de depresie respiratorie.','DDAVP stimulează, nu blochează, eliberarea de vWF.','Heparinizarea de dializă și coagulopatia uremică cresc pierderea de sânge.']],
 8,'Distractorii inversează rolul DDAVP și promovează AINS, contraindicate explicit în același paragraf.',['DDAVP','trombocitopatiei'],[2]),

q(13,['Evaluarea hepatică preoperatorie se caracterizează prin:',
 ['Steatohepatita non-alcoolică a devenit cea mai frecventă cauză de boală hepatică cronică în SUA','Testele biochimice hepatice de rutină nu sunt recomandate la asimptomatici fără factori de risc sau semne fizice','Biopsia hepatică rămâne standardul de aur pentru diagnosticul și stadializarea bolii hepatice','Testele hepatice de rutină se cer la orice adult înaintea chirurgiei abdominale, inclusiv la asimptomatici fără risc','Biopsia a fost înlocuită complet de serologie, fără rol diagnostic'],'ABC',3,'Pacientul cu disfuncție hepatică — Evaluare',
 'Recunoașterea NASH ca etiologie dominantă și a biopsiei ca standard, față de screeningul neselectiv.',
 ['NASH este identificată ca cea mai frecventă cauză de boală hepatică cronică în SUA.','Absența testelor de rutină la asimptomatici fără risc este explicită.','Biopsia rămâne standardul de aur pentru diagnostic și stadializare.','Textul descurajează testarea de rutină la asimptomatici.','Serologia și imagistica sunt adesea adecvate, dar biopsia rămâne standardul.']],
 8,'Inversează ierarhia NASH versus hepatita virală clasică și anulează rolul biopsiei.',['Steatohepatita non-alcoolică','standardul de aur']),

q(14,['Sindromul de sevraj etanolic perioperator:',
 ['Simptomele majore sunt maximale de obicei în ziua 3, dar pot apărea și la 10 zile de la oprirea alcoolului','Netratat, delirium tremens are mortalitate postoperatorie de până la 50%, redusă la 10% cu tratament adecvat','Benzodiazepinele instituite profilactic pot preveni simptomele majore de sevraj','Debutul simptomelor ușoare este imediat la 30 de minute de la ultima ingestie','Mortalitatea delirium tremens rămâne 50% și sub tratament, benzodiazepinele fiind inutile'],'ABC',4,'Disfuncție hepatică — Sevrajul etanolic',
 'Aplicarea ferestrei zilei 3 (până la 10 zile) și a reducerii mortalității DT de la 50% la 10%.',
 ['Maximul în ziua 3 și excepția de 10 zile sunt citate.','Cifrele 50% netratat și 10% tratat sunt explicite.','Benzodiazepinele profilactice sunt menționate ca prevenție a simptomelor majore.','Simptomele ușoare apar între ziua 1 și ziua 5, nu la 30 de minute.','Tratamentul reduce mortalitatea de la 50% la 10%.']],
 8,'Permutează fereastra zilei 3 cu debutul imediat și anulează beneficiul benzodiazepinelor asupra DT.',['delirium tremens','până la 50%']),

q(15,['Conform Tabelului 1-3, substituția glucocorticoidă în stres chirurgical:',
 ['La proceduri minore sau anestezie locală (ex. hernie inghinală) nu este necesară suplimentarea, în afara dozei matinale','Stresul moderat (revascularizare de membru, artroplastie de șold) primește 50 mg hidrocortizon IV înainte și 25 mg la 8 ore, 24 de ore','Stresul major (esofagogastrectomie, proctocolectomie) primește 100 mg hidrocortizon IV la inducție și 50 mg la 8 ore, 24 de ore','O doză echivalentă cu prednison 20 mg/zi cel puțin 3 săptămâni se poate asocia cu supresia HPA','Stresul minor impune 200 mg hidrocortizon la 4 ore, fără doza matinală obișnuită'],'ABCD',5,'Insuficiența adrenală — Tabelul 1-3',
 'Aplicarea dozelor diferențiate după magnitudinea stresului și a pragului prednison 20 mg/3 săptămâni.',
 ['Absența suplimentării la proceduri minore, cu păstrarea dozei matinale, este primul rând.','Schema 50+25 mg/8 h/24 h definește stresul moderat.','Schema 100+50 mg/8 h/24 h definește stresul major.','Pragul 20 mg prednison ≥3 săptămâni este enunțat în text.','Stresul minor nu se suplimentează; 200 mg/4 h nu figurează.']],
 8,'Inversează dozele dintre stresul minor și cel major, pe un tabel ușor de oglindit.',['20 mg/zi','50 mg hidrocortizon'],[4]),

q(16,['La gravida traumatizată sunt adevărate afirmațiile:',
 ['Pierderea fătului apare în 15% dintre gravidele cu traumă severă','Dezlipirea de placentă poate urma și traumatismelor minore, fără sângerare vaginală constantă','Un uter dur, mai mare decât pentru vârsta gestațională, ridică suspiciunea de ruptură de placentă','La orice femeie de vârstă fertilă cu traumă trebuie efectuat un test de sarcină','Semnele vitale materne normale exclud suferința fetală, volumului plasmatic neavând efect de mascare'],'ABCD',6,'Pacienta însărcinată — Trauma',
 'Integrarea ratei de 15% a pierderii fetale cu semnele dezlipirii și cu testul de sarcină la vârsta fertilă.',
 ['Cifra de 15% este explicită.','Dezlipirea după trauma minoră, fără sângerare vaginală invariabilă, este descrisă.','Uterul dur, mai mare decât vârsta gestațională, este semnul citat.','Testul de sarcină la vârsta fertilă este o regulă.','Volumul plasmatic crescut maschează hipovolemia și suferința fetală.']],
 8,'Neagă mascarea hipovolemiei de către volumul plasmatic, pe fondul cifrei de 15% ușor de uitat.',['15% din gravidele','test de sarcină']),

q(17,['Consimțământul informat în chirurgia electivă:',
 ['Este un proces, nu un moment și nici o formalitate, prin care pacientul și chirurgul stabilesc de comun acord un plan','Formularul de consimțământ este documentul legal care consemnează rezultatul discuțiilor','Se obține într-o singură discuție, în sala de operație, imediat înainte de inducție','Se reduce la semnarea unui formular fără discuție prealabilă','Opțiunea de a nu se opera nu trebuie prezentată, pentru a nu confunda pacientul'],'AB',7,'Managementul operator — Consimțământul informat',
 'Diferențierea procesului de consimțământ de formularul legal, față de semnătura de ultim moment.',
 ['Definiția ca proces, nu moment/formalitate, este explicită.','Formularul consemnează rezultatul discuțiilor.','Textul precizează sesiuni multiple, nu o discuție unică în sală.','Textul respinge reducerea la o formalitate unică.','Opțiunea de a nu se opera face parte din discuția onestă.']],
 8,'Reduce consimțământul la semnătura din sală și exclude opțiunea non-operatorie, contrar paragrafului.',['Consimţământul informat','proces, nu un moment'],[6]),

q(18,['Sondele digestive perioperatorii se caracterizează prin:',
 ['Sonda nazo-gastrică modernă de tip sifon trebuie folosită în aspirație continuă, aerul din lumenul mic prevenind colabarea peretelui gastric','Poziția sondei de alimentație se confirmă fără dubiu doar prin radiografie sau palpare intraoperatorie; auscultația epigastrică poate fi înșelătoare','Sondele nazo-enterale destinate alimentației trebuie să fie moi, cu lumen subțire','Auscultația zgomotelor de aer în epigastru confirmă poziția gastrică, radiografia fiind superfluă','Nimic nu trebuie administrat pe sonda de alimentație până la confirmarea poziției, exceptând contrastul intrapulmonar de rutină'],'ABC',8,'Sonde și tuburi de dren — Tractul gastro-intestinal',
 'Recunoașterea aspirației continue pe sonda-sifon și a radiografiei ca unică confirmare a sondei de alimentație.',
 ['Mecanismul de sifon și indicația de aspirație continuă sunt explicite.','Radiografia sau palparea intraoperatorie sunt singurele confirmări sigure.','Calibrul subțire și consistența moale definesc sondele de alimentație.','Auscultația poate fi pozitivă și pe o sondă endobronșică.','Administrarea de contrast intrapulmonar poate fi letală.']],
 8,'Transformă auscultația epigastrică într-un criteriu de siguranță, capcana clasică a sondei intrapulmonare.',['aspiraţie continuă','poziţionarea sondei']),

q(19,['Drenurile și sondele toracice/urinare, potrivit capitolului:',
 ['Tubul toracic este conectat la un sistem cu aspirație de obicei 20 cm H2O, care evacuează aer/lichid și previne reintrarea aerului („drenaj sub apă”)','Drenajele Penrose sunt pasive, moi, din latex, și constituie o cale cu dublu-sens pentru bacterii','Sondele de traheostomă sunt rezervate ventilației de două ore, canula orotraheală fiind pentru luni','Drenajul Penrose, conectat la aspirație continuă, este steril și unidirecțional','Tuburile toracice nu evacuează sângele, fiind rezervate doar pneumotoraxului uscat'],'AB',9,'Sonde de tract respirator, urinar și drenuri',
 'Contrastarea drenajului toracic sub apă (20 cm H2O) cu Penrose-ul pasiv bidirecțional.',
 ['Cele trei funcții și nivelul de 20 cm H2O sunt enumerate.','Caracterul pasiv, latexul și calea bacteriană dublă sunt explicite.','Traheostomia este pentru ventilație pe termen lung; orotraheala pentru termen scurt.','Penrose nu se conectează la aspirație; Davol-ul este aspirativ.','Tubul toracic evacuează aer, sânge sau lichid.']],
 8,'Inversează Penrose (pasiv) cu drenul aspirativ și limitează toracostomia la aer, omitând hemotoraxul.',['20 cm H2O','drenaje Penrose']),

q(20,['Complicațiile de plagă și infecția locului operator perioperator:',
 ['Evacuarea spontană de lichid seros din plagă este un semn premergător al dehiscenței fasciale acute și impune examinarea/închiderea în sală','Infecția de plagă chirurgicală este a doua cea mai frecventă infecție nosocomială și apare la 2–5% dintre pacienții chirurgicali','Semnele locale urmează tetrada inflamației: rubor, tumor, calor, dolor; tahicardia poate fi primul semn','În lipsa profilaxiei, TEV afectează postoperator 25% dintre pacienți','Dehiscența fascială se tratează conservator la pat, lichidul seros fiind un semn de vindecare'],'ABCD',10,'Dehiscența plăgii, IPC și TEV',
 'Asocierea lichidului seros ca precursor al eviscerației cu incidențele 2–5% (IPC) și 25% (TEV fără profilaxie).',
 ['Lichidul seros ca semn premergător și conduita de reintervenție sunt explicite.','Locul doi nosocomial și intervalul 2–5% sunt citate.','Tetrada inflamației și tahicardia precoce sunt descrise.','Cifra de 25% fără profilaxie este de pe pagina anterioară.','Lichidul seros impune reintervenție, nu expectativă.']],
 8,'Tratează lichidul seros ca semn de vindecare și permutează 2–5% cu 25%, două procente din pagini alăturate.',['2-5%','25%'],[9]),
];
