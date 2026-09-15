import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p<=324?p-130:p-138;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('ficat-splina',20,pdfOffset,`ficat-splina-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const FICAT_SPLINA_B=[
q(19,['Anatomia chirurgicală a ficatului se caracterizează prin:',
 ['Capsula Glisson, fibroasă, se extinde intraparenchimatos de-a lungul vaselor, precum pediculul portal','Cu excepția ariei nuda (posterior, lângă VCI) și a patului veziculei, ficatul este acoperit de peritoneu visceral','Clasificarea Couinaud împarte ficatul în opt segmente, fiecare cu circulație și drenaj biliar propriu','Ficatul este lipsit de capsulă, fiind acoperit doar de peritoneu pe toată suprafața, inclusiv pe aria nuda','Segmentarea Couinaud recunoaște un singur sector, fără distincție stâng-drept'],'ABC',317,'Anatomia ficatului — Capsula Glisson și Couinaud',
 'Recunoașterea capsulei Glisson, a celor două arii fără peritoneu visceral și a celor opt segmente Couinaud.',
 ['Extinderea capsulei Glisson de-a lungul vaselor este explicită.','Cele două excepții (aria nuda și patul veziculei) sunt enumerate.','Cele opt segmente cu pedicul propriu sunt enunțate.','Aria nuda și patul veziculei sunt tocmai zonele fără peritoneu visceral.','Clasificarea împarte stâng/drept, sectoare și opt segmente.']],
 8,'Anulează excepțiile peritoneale (aria nuda, patul veziculei) și reduce Couinaud de la opt segmente la un sector unic.',['capsula Glisson','opt segmente']),

q(20,['Aspectul CT cu contrast al hemangiomului cavernos hepatic este:',
 ['Captare progresivă a contrastului de la periferie către centru, cu o zonă hipodensă centrală','Washout arterial precoce cu inel hiperdens, ca în carcinomul hepatocelular','Defect de captare prin absența celulelor Kupffer, ca în adenom','Cicatrice centrală cu septuri fibroase și ducte biliare, ca în hiperplazia nodulară focală','Masă hipoecogenă cu perete vascularizat, ca în abcesul piogen'],'A',319,'Hemangiomul cavernos — CT cu contrast',
 'Diferențierea umplerii centripete periferie→centru a hemangiomului de washout-ul CHC, de defectul adenomului și de cicatricea HNF.',
 ['Textul descrie captarea progresivă dinspre periferie către centru, cu zonă hipodensă centrală.','Captarea arterială urmată de washout este aspectul tipic al CHC.','Adenomul nu conține celule Kupffer și dă defect la 99mTc, nu umplere centripetă CT.','Cicatricea centrală cu ducte biliare definește HNF.','Masa hipoecogenă cu perete vascularizat descrie abcesul piogen.']],
 8,'Permutează pattern-urile imagistice hemangiom / CHC / HNF / adenom din același capitol de tumori benigne.',['captarea progresivă','periferia leziunii']),

q(21,['Adenomul hepatic cu risc înalt de transformare malignă este susținut de:',
 ['Prezența activării beta-cateninei pe eșantionul histopatologic, situație în care intervenția chirurgicală este recomandată','Indicația operatorie pentru adenoamele stratificate ca risc înalt, față de monitorizarea celor cu risc scăzut','Continuarea contraceptivelor orale, deoarece oprirea lor nu influențează dimensiunea','Absența oricărui potențial de sângerare sub 10 cm, analog hemangiomului gigant','Captarea intensă la scintigrafia cu 99mTc prin celule Kupffer abundente'],'AB',321,'Adenomul hepatic — Beta-catenina și stratificare',
 'Recunoașterea beta-cateninei ca marker de risc malign și a stratificării operator versus monitorizare, plus oprirea estrogenilor.',
 ['Activarea beta-cateninei ca risc crescut, cu indicație chirurgicală, este explicită.','Stratificarea risc înalt (operație) versus scăzut (monitorizare) este descrisă.','Întreruperea contraceptivelor poate duce la regresie și este prima măsură la leziunea asimptomatică.','Complicațiile (creștere, sângerare) sunt mai frecvente peste 5 cm, nu sunt absente sub 10 cm.','Adenomul nu conține celule Kupffer; captarea intensă nu este pattern-ul său.']],
 8,'Neagă oprirea estrogenilor și confundă pragul de 5 cm al sângerării cu 10 cm al hemangiomului gigant.',['beta-cateninei','contraceptivelor orale']),

q(22,['Screening-ul și markerii carcinomului hepatocelular:',
 ['Pacienții cirotici trebuie evaluați imagistic bianual prin ultrasonografie abdominală','AFP de 500–1.000 mg/dL sau mai mult este aproape constant asociată cu CHC','Valori de 200–400 mg/dL pot apărea la cirotici fără CHC','Screening-ul se face doar când apare icterul, encefalopatia sau ascita de novo, ultrasonografia bianuală fiind inutilă','Biopsia este primul pas, chiar când există captare arterială cu washout tipic'],'ABC',321,'Carcinomul hepatocelular — US bianuală și praguri AFP',
 'Aplicarea US bianuale la cirotic și a pragurilor AFP (200–400 în ciroză versus 500–1.000 aproape diagnostic).',
 ['Evaluarea bianuală prin US este explicită.','Pragul 500–1.000 mg/dL ca aproape diagnostic este citat.','Intervalul 200–400 mg/dL la cirotic fără CHC este enunțat.','Decompensarea bruscă ridică suspiciunea, dar screening-ul bianual precedă acest moment.','Biopsia se rezervă când aspectul imagistic tipic lipsește.']],
 8,'Permutează pragurile AFP 200–400 versus 500–1.000 și anulează US-ul bianual în favoarea biopsiei premature.',['bianual','60-80%']),

q(23,['Chemoembolizarea și radioembolizarea în CHC:',
 ['Chemoembolizarea infuzează de obicei doxorubicină plus particule emboligene pe artera hepatică','Radioembolizarea folosește Y90 în microsfere de sticlă; diametrul este prea mic pentru ocluzie arterială reală','Hepatocitele normale primesc circa 70% din necesarul sanguin prin fluxul venos portal, ceea ce permite doze locale mai mari cu mai puține efecte sistemice','Agentul chimioterapic citat este cisplatina, nu doxorubicina','Hepatocitele normale sunt hrănite aproape doar arterial, identic hepatocarcinomului'],'ABC',322,'CHC — TACE (doxorubicină) și Y90',
 'Contrastarea TACE cu doxorubicină de radioembolizarea Y90 non-ocluzivă și a dependenței portale (70%) a hepatocitului normal.',
 ['Doxorubicina plus emboligen pe artera hepatică este explicită.','Y90, microsferele de sticlă și absența ocluziei reale sunt descrise.','Cei 70% din necesarul sanguin pe cale portală sunt citați.','Agentul citat este doxorubicina (Adriamycin), nu cisplatina.','CHC este predominant arterial; hepatocitul normal este predominant portal.']],
 8,'Schimbă doxorubicina cu cisplatina și oglindește 70% portal versus arterial între hepatocit și CHC.',['doxorubicină','Y90']),

q(24,['După rezecția CHC pe ficat cirotic, recidiva și diseminarea:',
 ['Parenchimul restant este locul preferențial de recidivă la peste 50% dintre bolnavi','Locurile principale de metastazare sunt plămânul și sistemul osos','Creierul și metastazele peritoneale sunt mult mai puțin frecvente','Hepatita persistentă și leziunile satelite neidentificate la rezecția inițială explică recidiva în restant','Metastazele cerebrale depășesc numeric pe cele pulmonare și osoase'],'ABCD',322,'CHC rezecat — Recidivă >50% și metastaze',
 'Fixarea recidivei în parenchimul restant (>50%) și a ierarhiei plămân/os față de creier/peritoneu.',
 ['Pragul de peste 50% recidivă în restant este explicit.','Plămânul și osul sunt locurile principale.','Creierul și peritoneul sunt mult mai puțin frecvente.','Textul invocă hepatita persistentă și satelitele neidentificate.','Ierarhia metastazelor este inversată față de text.']],
 8,'Minimizează recidiva de 50% și inversează ierarhia plămân/os versus creier.',['50%','plămânul']),

q(25,['Colangiocarcinomul hilar (tumoră Klatskin) este sugerat de:',
 ['Icter cu dilatarea ductelor biliare intrahepatice și veziculă biliară de dimensiuni mici','O masă periferică asimptomatică, fără icter, ca leziunile periferice','Captare arterială cu washout și inel hiperdens, diagnostică pentru CHC','Criteriile Milano (unică <5 cm sau ≤3 tumori ≤3 cm) ca indicație de transplant','Chistadenoame mucinoase la femeia peste 40 de ani, cu septuri și noduli intramurali'],'A',322,'Colangiocarcinomul — Tumora Klatskin',
 'Recunoașterea icterului obstructiv cu VBIH dilatate și colecist mic ca semn de leziune hilară/centrală, distinct de CHC și de chistadenom.',
 ['Combinația icter + VBIH dilatate + veziculă mică este înalt sugestivă pentru colangiocarcinom hilar sau central.','Leziunile periferice pot fi asimptomatice, fără acest pattern de icter.','Washout-ul arterial este al CHC, nu al Klatskin.','Milano ghidează transplantul în CHC.','Chistadenomul este o tumoră chistică mucinoasă, nu Klatskin.']],
 8,'Înlocuiește semnul veziculei mici + VBIH dilatate cu washout-ul CHC sau cu criteriile Milano.',['Klatskin','vezicula biliară']),

q(26,['Neoplasmul chistic hepatic (chistadenom/chistadenocarcinom):',
 ['Chistadenoamele apar mai frecvent la femei după 40 de ani, recidivează și au potențial de transformare malignă','Sunt de obicei formațiuni unice voluminoase (peste 10 cm), septate, cu perete subțire și conținut mucinos','Marsupializarea, drenajul peritoneal sau în ansă intestinală sunt contraindicate, din cauza recidivei, infecției și a riscului de malignizare','Aspirația prin puncție vindecă definitiv, ca o tentativă în chistul simplu','Decorticarea este tratamentul de elecție, identic chistului simplu simptomatic'],'ABC',323,'Chistadenomul hepatic — Contraindicația marsupializării',
 'Contrastarea chistadenomului (femeie >40 ani, >10 cm, mucinos) de chistul simplu; interdicția procedurilor non-rezecționale.',
 ['Predilecția feminină după 40 de ani, recidiva și potențialul malign sunt explicite.','Pragul peste 10 cm, septurile, peretele subțire și mucina sunt descrise.','Contraindicația marsupializării și a drenajelor este enunțată.','Puncția nu elimină riscul de malignizare; recidiva este regula procedurilor non-rezecționale.','Decorticarea este standardul chistului simplu simptomatic, nu al chistadenomului.']],
 8,'Aplică decorticarea/puncția chistului simplu pe o leziune cu potențial malign, ignorând interdicția marsupializării.',['Chistadenoamele','marsupializarea']),

q(27,['Abcesul piogen hepatic:',
 ['Pacienții acuză dureri în hipocondrul drept, febră și leucocitoză; fosfataza alcalină este crescută la majoritatea','În majoritatea cazurilor sursa este o infecție digestivă (diverticulită, apendicită) sau a arborelui biliar','Aspirația percutanată cu tub de drenaj ajută diagnosticul și remiterea; antibioticele se adaptează culturilor','Drenajul percutanat este inutil, metronidazolul izolat fiind suficient, ca în abcesul amebian','Sursa primară nu trebuie căutată, abcesul fiind o însămânțare hematogenă izolată'],'ABC',323,'Abcesul piogen — Drenaj percutanat',
 'Recunoașterea triadei clinic-FA, a originii biliare/digestive și a drenajului plus cultură, versus confuzia cu abcesul amebian (fără drenaj).',
 ['Durerea, febra, leucocitoza și FA crescută sunt explicite.','Originea digestivă sau biliară, nu doar hematogenă, este enunțată.','Aspirația, drenajul și adaptarea antibioticelor sunt descrise.','Metronidazolul fără drenaj este strategia abcesului amebian, nu a celui piogen.','Sursa primară trebuie identificată și tratată.']],
 8,'Aplică schema amebiană (metronidazol, fără drenaj) pe abcesul piogen, care cere tub și cultură.',['Fosfataza alcalină','Aspiraţia percutanată']),

q(28,['Abcesul amebian hepatic:',
 ['Apare la circa 10% dintre pacienții infectați; ficatul este cel mai susceptibil situs extraintestinal','Aspirația evidențiază un conținut steril, cu aspect de „pastă de anșoa”','Răspunde foarte bine la metronidazol și, spre deosebire de abcesul piogen, nu necesită drenaj percutanat','Diagnosticul impune puncție-biopsie hepatică de primă intenție, serologia fiind inutilă','Drenajul percutanat este regula, identic abcesului piogen, metronidazolul fiind ineficient'],'ABC',324,'Abcesul amebian — Pastă de anșoa și metronidazol',
 'Contrastarea ratei de 10%, a aspectului de pastă de anșoa și a metronidazolului fără drenaj față de strategia piogenică.',
 ['Cei 10% și predilecția hepatică extraintestinală sunt explicite.','Conținutul steril cu aspect de pastă de anșoa este citat.','Răspunsul la metronidazol fără drenaj, spre deosebire de piogen, este enunțat.','Anticorpii anti-amibă sunt un test util; puncția diagnostică nu este primul pas.','Drenajul este al piogenului, nu al amebianului.']],
 8,'Inversează indicația de drenaj între amebian și piogen și neagă metronidazolul.',['metronidazol','pastă de an']),

q(29,['Intoxicația cu ciuperci sălbatice și hepatita fulminantă:',
 ['Disfuncția hepatică apare la 8–12 săptămâni de la simptomele de debut','Encefalopatia hepatică apare precoce și poate progresa spre comă, herniere de trunchi și deces fără transplant','Majoritatea bolnavilor decedează la 1–2 săptămâni de la prezentare în lipsa transplantului','Hipertensiunea portală și malnutriția cronică sunt constante, transplantul fiind tehnic mai dificil decât în ciroză','Perioada de observație trebuie prelungită maximal, pentru a nu „risipi” un grefon'],'ABC',333,'Insuficiența hepatică fulminantă — Ciuperci',
 'Fixarea ferestrelor 8–12 săptămâni până la disfuncție și 1–2 săptămâni până la deces fără grefă, cu absența HTP a cirozei.',
 ['Intervalul 8–12 săptămâni este explicit.','Encefalopatia precoce și riscul de herniere/deces sunt descrise.','Decesul la 1–2 săptămâni fără transplant este citat.','Pacienții nu au modificări hepatice cronice; HTP și malnutriția lipsesc, deci transplantul este tehnic mai ușor.','Observația prelungită riscă depășirea ferestrei de transplant.']],
 8,'Prelungește observația dincolo de fereastra de grefă și atribuie fulminantului HTP-ul cirozei.',['8-12 săptămâni','transplant hepatic']),

q(30,['Filtrarea splenică a sângelui se caracterizează prin:',
 ['Splina filtrează aproximativ 350 L de sânge pe zi','Eritrocitele sunt îndepărtate în pulpa roșie la 110–120 de zile, prin pierderea deformabilității','O treime din trombocite este depozitată în splină','Hematiile normale suferă îndepărtarea corpurilor Howell-Jolly, Heinz și Pappenheimer în sinusurile splenice','Durata de viață a hematiei în circulație este de 30 de zile, analog trombocitului'],'ABCD',334,'Fiziologia splinei — Filtrare 350 L/zi și pulpa roșie',
 'Aplicarea debitului de 350 L/zi, a duratei 110–120 de zile și a depozitului plachetar de 1/3, versus pitting-ul corpurilor de incluziune.',
 ['Cei 350 L/zi sunt expliciți.','Intervalul 110–120 de zile și sediul în pulpa roșie sunt citați.','Depozitul de o treime din trombocite este enunțat.','Hematiile normale suferă îndepărtarea corpurilor Howell-Jolly, Heinz și Pappenheimer.','30 de zile nu este durata citată a hematiei.']],
 8,'Permutează 110–120 de zile cu durata scurtă a trombocitului și neagă pitting-ul Howell-Jolly.',['350 L','110-120 de zile']),

q(31,['Scintigrafia splenică cu coloizi de technetiu este utilă pentru:',
 ['Decelarea splinelor accesorii când, după splenectomie, nu se controlează boala hematologică sau aceasta reapare','Diferențierea unei spline accesorii de o tumoră a cozii de pancreas','Splenoza apare ca absență de captare izotopică, nu ca hipercaptare ectopică','Stadializarea de primă intenție a lacerației splenice la instabil, în locul laparotomiei','Înlocuirea CT-ului cu contrast în traumatismul abdominal stabil'],'AB',336,'Imagistica splinei — Scintigrafie, splină accesorie și splenoză',
 'Recunoașterea indicațiilor scintigrafiei (splină accesorie, diagnostic diferențial cu coada pancreasului, splenoză), versus rolul CT/FAST în traumă.',
 ['Rolul în recidiva hematologică prin splină accesorie omisă este explicit.','Diferențierea de tumora cozii de pancreas este enunțată.','Splenoza este evidențiată ca hipercaptare ectopică, nu ca absență de captare.','La instabil, laparotomia/splenectomia rămân standardul.','CT-ul cu contrast este cea mai utilă tehnică pentru dimensiuni și leziuni; eco-ul e preferat la urmărire pentru lipsa iradierii.']],
 8,'Pune scintigrafia în locul CT/FAST din traumă și uită că instabilul nu se stadializează izotopic.',['Splenoza','cozii de pancreas'],[337]),

q(32,['Anemiile hemolitice autoimune și splenectomia:',
 ['Formele cu anticorpi la cald (de obicei IgG) nu implică activarea complementului și răspund la splenectomie','Formele cu anticorpi la rece (de regulă IgM) activează complementul și aglutinează, fără a fi responsive la splenectomie','Anemiile Coombs-negative medicamentoase, toxice sau infecțioase se tratează cel mai bine prin înlăturarea agentului cauzator','Formele IgM la rece sunt indicația clasică de splenectomie, IgG la cald fiind neresponsive','Splenectomia este inutilă în sferocitoza ereditară, hematiile rigide ocolind filtrarea splenică'],'ABC',339,'Hemoliza autoimună — Anticorpi la cald versus la rece',
 'Contrastarea IgG la cald (fără complement, răspuns la splenectomie) de IgM la rece (complement, fără răspuns), plus Coombs-negativul prin evicțiune.',
 ['Răspunsul formelor IgG la cald, fără CN, este explicit.','Formele IgM la rece, cu complement, fără răspuns la splenectomie, sunt enunțate.','Evicțiunea agentului în Coombs-negativ este descrisă.','Relația este inversată față de text.','Sferocitoza ereditară este o indicație uzuală de splenectomie.']],
 8,'Oglindește IgG-cald (răspunde) cu IgM-rece (nu răspunde), perechea clasică de splenectomie din tabelul 20-7.',['anticorpi la cald','splenectomie']),

q(33,['Trombocitoza post-splenectomie și prevenția trombozei:',
 ['Terapia antiagregantă se inițiază la trombocite >400.000/mm³, precum și la ceilalți pacienți dacă numărul depășește 750.000/mm³','Antiagregarea se menține până la revenirea trombocitelor la normal','Tratamentul anticoagulant cu heparină sau warfarină nu aduce beneficii și trebuie evitat; trombocitozele extreme se tratează cu hidroxiuree','Heparina și warfarina sunt superioare antiagregării și se prescriu de la 200.000/mm³','Sindromul Waterhouse-Friderichsen (infarct suprarenal) face ca vaccinarea pneumococică să fie superfluă'],'ABC',342,'Post-splenectomie — Praguri 400.000/750.000 și hidroxiuree',
 'Aplicarea pragurilor de antiagregare 400.000 versus 750.000, a inutilității heparinei/warfarinei și a hidroxiureei în trombocitoza extremă.',
 ['Cele două praguri de antiagregare sunt explicite.','Durata până la normalizarea trombocitelor este enunțată.','Evitarea heparinei/warfarinei și hidroxiureea sunt descrise.','Anticoagularea nu aduce beneficii; pragul 200.000 nu figurează.','Waterhouse-Friderichsen este o complicație a OPSI, nu un argument contra vaccinării.']],
 8,'Pune heparina înaintea antiagregării și inversează pragurile 400.000/750.000, lângă falsa scutire de vaccin prin Waterhouse-Friderichsen.',['750.000','hidroxiuree']),
];
