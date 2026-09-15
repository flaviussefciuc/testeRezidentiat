import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p-146;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('sepsis',8,pdfOffset,`sepsis-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const SEPSIS_C=[
q(36,['Scorul qSOFA este considerat pozitiv dacă se întrunesc minim două dintre:',
 ['Scor de comă Glasgow sub 15, frecvență respiratorie ≥22/min și tensiune arterială sistolică ≤100 mmHg','Febră peste 38,5°C, leucocitoză și PCR crescută, ca în vechea definiție SIRS','Lactat peste 4 mmol/L, MAP sub 50 mmHg și anurie de 24 de ore','Doar un GCS de 15 cu tahicardie sinusală','Trei criterii SOFA complete, qSOFA nefiind un scor de la pat'],'A',154,'Definiția Sepsis-3 — qSOFA',
 'Reținerea triadei qSOFA (GCS <15, FR ≥22, TAS ≤100), distinct de SIRS și de SOFA de ATI.',
 ['Cele trei criterii și regula „minim două” sunt enunțate explicit.','SIRS nu mai definește sepsisul; qSOFA nu cere febră/leucocite.','Lactatul și MAP 65 țin de definiția șocului septic, nu de qSOFA.','GCS 15 este normal, nu un criteriu pozitiv.','qSOFA este tocmai instrumentul rapid de la pat.']],
 8,'Distractorii reciclează SIRS sau pragurile de șoc (lactat, MAP) în locul triadei qSOFA din același paragraf.',['qSOFA','2:22 respiraţii/min']),

q(37,['În fiziopatologia sepsisului, răspunsul înnăscut include:',
 ['PAMP (componente bacteriene, fungice, virale) activează macrofage, monocite, granulocite, NK și celule dendritice prin receptori Toll-like, lectină tip C, NOD-like și RIG-I','Urmează producția de TNF-α, IL-1 și IL-6, proteine de fază acută, microparticule procoagulante și capcane neutrofile extracelulare (NETs)','Imunotromboza prinde microbii în microtrombi; peste un prag, disfuncția mitocondrială, CID-ul și catabolismul autoîntrețin sindromul','Răspunsul se limitează la limfocitele T citotoxice, fără rol al receptorilor Toll-like','NETs inhibă coagularea, CID-ul fiind absent în sepsisul descris'],'ABC',154,'Fiziopatologie — PAMP, citokine, imunotromboză',
 'Integrarea lanțului PAMP–receptori–citokine–NETs cu trecerea de la imunotromboză locală la CID difuz.',
 ['PAMP și receptorii listați sunt din deschidere.','Citokinele, faza acută, microparticulele și NETs sunt consecutive.','Imunotromboza, apoi mitocondriile/CID/catabolismul, sunt pragul de automenținere.','Răspunsul descris este înnăscut, nu T-citotoxic izolat.','NETs și microparticulele promovează imunotromboza, nu o inhibă.']],
 8,'Distractorii mută fiziopatologia pe imunitatea adaptativă și inversează rolul procoagulant al NETs.',['imunotromboză','NETs']),

q(38,['Disfuncția de organ în sepsis se caracterizează prin:',
 ['Vasoplegia reduce rezistența periferică; extravazarea capilară de plasmă bogată în proteine produce edem care scade livrarea de oxigen','La plămâni poate apărea leziune pulmonară acută și SDRA; lezarea epiteliului intestinal duce la malabsorbție și translocare bacteriană','Afectarea renală acută este frecventă și se asociază cu creșterea mortalității; disfuncția cerebrală este encefalopatie septică (somnolență–comă)','Solicitarea fiziologică cere creșterea debitului cardiac după repleție, dar sindromul și acidoza pot fi inotrop negative','Vasoplegia crește rezistența periferică, iar translocarea intestinală este infirmată'],'ABCD',154,'Disfuncția de organ',
 'Recunoașterea clusterului vasoplegie–edem–SDRA–translocare–AKI–encefalopatie, cu nuanța inotrop-negativă.',
 ['Vasoplegia și edemul capilar sunt enunțate.','SDRA și translocarea intestinală sunt explicite.','AKI cu mortalitate și encefalopatia completează lista.','Debitul crescut versus inotropismul negativ este contrastul cardiac.','Vasoplegia reduce, nu crește, rezistența; translocarea este descrisă.']],
 8,'Patru consecințe de organ reale; distractorul inversează vasoplegia și neagă translocarea din același paragraf.',['Vasoplegia','encefalopatie septică']),

q(39,['Clinic, șocul septic este rezervat pacienților care, după resuscitare volemică adecvată:',
 ['Necesită vasopresor pentru a menține o tensiune arterială medie de cel puțin 65 mmHg și au lactat seric peste 2 mmol/L','Au doar febră și leucocitoză, fără disfuncție circulatorie','Au qSOFA 1 punct, suficient pentru diagnosticul de șoc','Au lactat sub 1 mmol/L sub vasopresor, MAP-ul fiind irelevant','Se definesc prin SIRS, independent de lactat și de MAP'],'A',154,'Șocul septic',
 'Reținerea conjuncției vasopresor pentru MAP ≥65 mmHg și lactat >2 mmol/L după volemie.',
 ['Cele două condiții după resuscitare adecvată sunt definiția clinică.','Febra/leucocitoza țin de infecție/SIRS, nu de șocul septic.','qSOFA indică risc, nu definește șocul.','Lactatul trebuie să fie crescut (>2), nu scăzut.','SIRS nu mai definește sepsisul/șocul.']],
 8,'Distractorii despart cele două brațe ale definiției (MAP 65 și lactat >2) sau reînvie SIRS.',['65 mmHg','>2 mmol/L']),

q(40,['Originea sepsisului, după momentul instalării, se definește astfel:',
 ['Dobândit comunitar: în primele 48 de ore de la internare; dobândit în spital: după peste 48 de ore','Sepsisul asociat asistenței medicale (subgrup comunitar) include externare în ultimele 30 de zile, îngrijiri cronice (nu comunități închise) și tratament ambulator (ex. hemodializă)','Sepsisul nosocomial se instalează în prima oră de la internare, comunitarul după o săptămână','Hemodializa exclude sepsisul asociat asistenței, fiind considerată infecție strictly comunitară','Pragul de 48 de ore distinge doar pneumonia, nu sepsisul'],'AB',155,'Originea sepsisului — Comunitar, nosocomial, HCA',
 'Aplicarea pragului de 48 de ore și a criteriilor HCA (30 de zile, dializă), distinct de lista de patogeni deja acoperită.',
 ['Splitul 48 de ore este definiția explicită.','Cele trei situații HCA, inclusiv 30 de zile și hemodializa, sunt listate.','Sensul pragului 48 de ore este inversat.','Hemodializa este tocmai exemplu de HCA.','Pragul se aplică sepsisului, nu doar pneumoniei.']],
 8,'Distractorii inversează fereastra de 48 de ore și scot dializa din subgrupul HCA.',['48 de ore','ultimele 30 de zile']),

q(41,['La examenul obiectiv al pacientului cu sepsis, semnele hemodinamice și de deteriorare includ:',
 ['Tahipneea este semn-cheie al deteriorării clinice; hipoxia poate sugera infecție de tract respirator inferior','Pulsul poate fi amplu prin vasodilatație sau de volum scăzut dacă „periferia este închisă” prin hipovolemie relativă','Un suflu nou sau modificat poate indica endocardită; sensibilitatea în flancul stâng este comună în diverticulită','Tahipneea lipsește în sepsis, semnul-cheie fiind bradicardia','Pulsul amplu infirmă vasodilatația, fiind patognomonic pentru hipovolemie pură'],'ABC',153,'Examenul obiectiv — Parametri și semne de focar',
 'Contrastarea tahipneei ca semn-cheie cu cele două profiluri de puls (amplu vs închis) și cu focarele (suflu, flanc stâng).',
 ['Tahipneea ca semn-cheie și hipoxia respiratorie sunt din lista de parametri.','Cele două aspecte de puls sunt explicite.','Suflul de endocardită și diverticulita de flanc stâng sunt din figură.','Textul numește tahipneea semn-cheie, nu o neagă.','Pulsul amplu este atribuit vasodilatației, nu hipovolemiei pure.']],
 8,'Distractorii inversează tahipneea (semn-cheie) și atribuirea pulsului amplu vasodilatației.',['semn cheie','vasodilataţiei']),

q(42,['În supravegherea intraspitalicească, recunoașterea deteriorării include:',
 ['Stopul cardiac este de obicei precedat de alterări fiziologice progresive reflectate de NEWS 2; multe spitale autorizează apelul la un prag NEWS 5 sau 2 din 5, semnele clinice primând față de scor','Nu există test binar pentru sepsis; screeningul este evaluarea unui clinician experimentat, iar diagnosticul se bazează pe observații și teste POC, fără a aștepta laboratorul','Stopul cardiac survine fără prodrom fiziologic, NEWS 2 fiind superfluu','Diagnosticul se amână până la antibiogramă, POC-ul lactatului neavând loc','SBAR este interzis, apelul făcându-se doar după CT'],'AB',155,'Supravegherea intraspitalicească — NEWS 2',
 'Reținerea prodromului NEWS, a pragurilor 5 / 2-din-5 și a absenței testului binar, cu prioritatea clinicii și POC.',
 ['Prodromul până la stop și pragurile de apel sunt enunțate.','Absența testului binar și urgența fără așteptarea laboratorului sunt explicite.','Textul leagă stopul de alterările progresive NEWS.','Așteptarea laboratorului este descrisă ca și contraproductivă.','SBAR este exemplul de exprimare a nevoii de asistență.']],
 8,'Distractorii anulează prodromul NEWS și reintroduc așteptarea laboratorului, contrar paragrafului de screening.',['NEWS 2','test binar']),

q(43,['După instalarea hipotensiunii, un studiu retrospectiv citat arată că riscul de deces crește, pentru fiecare oră de întârziere a antibioticului cu spectru larg, cu circa:',
 ['7,6%','1%','50%','0,1%, întârzierea fiind fără impact','30 ml/kg, cifră de mortalitate, nu de fluid'],'A',157,'Terapia antimicrobiană — Fereastra orară',
 'Reținerea cifrei de 7,6% mortalitate suplimentară pe oră de întârziere după hipotensiune.',
 ['7,6% pe oră este cifra studiului retrospectiv; datele din New York confirmă gradientul temporal.','1% nu este cifra citată aici.','50% nu este incrementul orar.','Textul leagă întârzierea de mortalitate.','30 ml/kg este volumul de cristaloid din primele 3 ore, nu mortalitatea.']],
 8,'Distractorii reciclează 30 ml/kg (resuscitare) sau alte procente din capitol în locul incrementului orar 7,6%.',['7,6%','fiecare oră']),

q(44,['Resuscitarea volemică timpurie în sepsis, potrivit SSC și studiilor citate:',
 ['SSC recomandă cel puțin 30 ml/kg cristaloide în primele 3 ore de la diagnostic','Două trialuri din țări cu venituri mici au arătat că resuscitarea în bolus poate crește mortalitatea, în ciuda ameliorării inițiale a perfuziei','Explicațiile propuse includ lipsa tratamentului efectelor nocive ale volumelor mari și leziunea de reperfuzie la prezentare tardivă','Bolusul volemic scade mortalitatea în toate populațiile, trialurile africane fiind ignorate','Cristaloidele sunt interzise, albumina fiind unica soluție din prima oră'],'ABC',157,'Resuscitarea volemică — 30 ml/kg și evidențele adverse',
 'Contrastarea recomandării SSC 30 ml/kg/3 h cu trialurile din venituri mici care au crescut mortalitatea.',
 ['Volumul 30 ml/kg în 3 ore este recomandarea SSC.','Cele două trialuri și creșterea mortalității sunt enunțate.','Reperfuzia și lipsa contramăsurilor sunt explicațiile propuse.','Textul tocmai nuanțează că bolusul nu este benefic tuturor.','Cristaloidele sunt prima linie SSC; albumina poate fi luată în calcul la volume mari, nu ca unică soluție.']],
 8,'Distractorii anulează nuanța trialurilor din venituri mici și înlocuiesc cristaloidele cu albumină de primă intenție.',['30 ml/kg','primele 3 ore']),

q(45,['Recoltarea hemoculturilor la adultul cu sepsis:',
 ['Se recoltează minim 5 ml de sânge în flacoane aerob și anaerob; există timp pentru hemoculturi înaintea empiricului, inclusiv la pacientul acut, cu excepția suspiciunii de septicemie meningococică','Antibioterapia înainte de recoltare poate negativiza culturile; PCR pentru ADN bacterian din sânge poate totuși detecta patogenul','Hemoculturile se omit la adult, 5 ml fiind doza pediatrică inutilă','PCR 16S înlocuiește hemocultura de la prezentare, fără flacoane','În meningococemie, antibioticele se amână până la două seturi de hemoculturi'],'AB',158,'Probe biologice — Hemoculturi; Excepția meningococică',
 'Reținerea volumului de 5 ml, a excepției meningococice și a rolului PCR când culturile sunt negativizate.',
 ['Minimul 5 ml, aerob/anaerob și excepția meningococică sunt din deschidere.','Negativizarea și PCR-ul de salvare sunt explicite.','5 ml este regula adultului, nu se omite.','Metodele moleculare completează, nu înlocuiesc de la triaj, culturile.','Excepția este tocmai a nu întârzia antibioticul în suspiciunea meningococică.']],
 8,'Distractorii inversează excepția meningococică (a nu întârzia antibioticul) și volumul de 5 ml al adultului.',['minim 5 ml','septicemie meningococică']),

q(46,['Aztreonamul, ca monobactam, se caracterizează prin:',
 ['Este un β-lactamic sintetic fără alt inel decât cel β-lactamic; spectrul este limitat la bacilii Gram-negativi aerobi','Este alternativă la aminoglicozide în combinații, mai ales în sepsisul abdominal, și activ pe unele tulpini cu rezistență la carbapeneme producătoare de metalo-β-lactamază','Este folosit și în infecțiile cu P. aeruginosa, inclusiv pulmonare din fibroza chistică','Are spectru pe MRSA și anaerobi, identic carbapenemelor','Inelul dublu (cephem) îl face o cefalosporină de generația a cincea, inactivă pe Pseudomonas'],'ABC',163,'Monobactami — Aztreonam',
 'Distingerea monobactamului (un singur inel, doar GNA) de carbapeneme și de uzul în MBL/Pseudomonas/CF.',
 ['Definiția de monobactam și spectrul GNA sunt din paragraf.','Alternativa la aminoglicozid și activitatea pe MBL sunt explicite.','Pseudomonas, inclusiv CF, completează indicațiile.','MRSA și anaerobii nu sunt în spectrul descris.','Un singur inel îl deosebește de cefalosporine; este activ pe Pseudomonas.']],
 8,'Distractorii atribuie aztreonamului spectrul carbapenemelor sau structura cephem, inversând tocmai particularitatea clasei.',['monobactam','metalo-p-lactamază']),

q(47,['Carbapenemele, ca clasă, se caracterizează prin:',
 ['Au cel mai larg spectru, active pe majoritatea Gram-pozitivilor, Gram-negativilor și anaerobilor, dar nu pe MRSA','Ertapenemul, spre deosebire de celelalte, nu este activ împotriva Pseudomonas sau Acinetobacter spp.','Imipenemul este parțial inactivat enzimatic în rinichi, de aceea se asociază cilastatin','Clasa include imipenem, meropenem, doripenem și ertapenem','Ertapenemul este anti-Pseudomonas de elecție, imipenemul neavând nevoie de cilastatin'],'ABCD',163,'Carbapenemele',
 'Contrastarea spectrului larg (fără MRSA), a golului Pseudomonas/Acinetobacter al ertapenemului și a perechii imipenem–cilastatin.',
 ['Spectrul și excepția MRSA sunt enunțate.','Limita ertapenemului este explicită.','Cilastatinul pentru imipenem este motivat enzimatic renal.','Cele patru molecule sunt enumerate.','Relațiile ertapenem–Pseudomonas și imipenem–cilastatin sunt inverse.']],
 8,'Patru atribute de clasă; distractorul inversează golul de spectru al ertapenemului și nevoia de cilastatin.',['cel mai larg spec￾tru','cilastatin']),

q(48,['Toxicitatea cefalosporinelor, comparativ cu penicilinele, include observația că:',
 ['Este similară, dar mai rară; circa 10% dintre pacienții alergici la o clasă sunt alergici și la restul claselor','Cefalosporinele timpurii au cauzat leziuni de tub proximal, derivații mai noi având mai puține efecte nefrotoxice','Alergia încrucișată este de 90%, identică erupției din mononucleoză','Nefrotoxicitatea lipsește la derivații vechi, fiind o problemă doar a generației a cincea','10% este rata de icter colestatic al ceftazidimei, nu de alergie încrucișată'],'AB',163,'Cefalosporinele — Toxicitate',
 'Reținerea alergiei încrucișate de 10% și a nefrotoxicității mai reduse a derivaților noi.',
 ['Similaritatea, raritatea și 10% încrucișare sunt din paragraf.','Contrastul tub proximal vechi versus derivați noi este explicit.','90% este erupția amoxicilinei în mononucleoză, nu alergia încrucișată.','Nefrotoxicitatea era a derivaților timpurii.','Icterul colestatic de 6× ține de co-amoxiclav, nu de ceftazidimă.']],
 8,'Distractorii aplică 90% (mononucleoză) sau icterul co-amoxiclavului asupra alergiei încrucișate de 10%.',['10% dintre pacienţii','tub proxima']),

q(49,['Temocilina și pivmecilinamul, ca peniciline cu spectru îngust Gram-negativ:',
 ['Pivmecilinamul se folosește în ITU și acționează pe Gram-negativi, inclusiv E. coli ESBL, Klebsiella, Enterobacter și Salmonella, dar nu pe P. aeruginosa','Temocilina este activă doar pe Gram-negativi, inclusiv mulți ESBL; favorizează în mai mică măsură C. difficile și protejează carbapenemele; nu este activă pe Pseudomonas sau Acinetobacter','Ticarcilina și piperacilina (cu tazobactam) sunt active pe Pseudomonas','Temocilina este anti-Pseudomonas de primă intenție, pivmecilinamul acoperind MRSA','Ambele înlocuiesc carbapenemele în infecțiile cu Acinetobacter'],'ABC',163,'Penicilinele — Pivmecilinam; Temocilină; Ureidopeniciline',
 'Contrastarea golului Pseudomonas/Acinetobacter al temocilinei/pivmecilinamului cu ureidopenicilinele antipseudomonale.',
 ['Spectrul pivmecilinamului și excepția Pseudomonas sunt din paragraf.','Temocilina, C. difficile și protecția carbapenemelor sunt explicite.','Ticarcilina și tazocinul completează ramura antipseudomonală.','Temocilina nu este activă pe Pseudomonas; pivmecilinamul nu vizează MRSA.','Acinetobacter este tocmai în afara spectrului temocilinei.']],
 8,'Distractorii atribuie temocilinei activitatea antipseudomonală a tazocinului, inversând golul de spectru.',['Temocilina','Pivmecilina']),

q(50,['MRSA, în mecanism și diseminare:',
 ['Rezistența la meticilină este mediată de modificări ale PBP2a, pe care meticilina sau flucloxacilina nu o pot inhiba','Infecțiile necomplicate țin adesea de catetere/dispozitive; în circa 5% din cazuri infecția diseminează hematogen spre oase, articulații și valve','PBP2a crește sensibilitatea la flucloxacilină, vancomicina fiind inutilă','Diseminarea hematogenă lipsește, 5% fiind rata de colonizare cutanată inofensivă','Meticilina inhibă PBP2a mai bine decât flucloxacilina, rezistența fiind doar fenotipică'],'AB',167,'Staphylococcus aureus rezistent la meticilină',
 'Corelarea PBP2a cu diseminarea hematogenă de 5% către os, articulație și valvă.',
 ['Mecanismul PBP2a este fraza de deschidere.','5% diseminare hematogenă este explicită.','PBP2a împiedică inhibiția, nu o crește.','5% este diseminarea, nu o colonizare inofensivă.','Nici meticilina, nici flucloxacilina nu inhibă PBP2a.']],
 8,'Distractorii inversează mecanismul PBP2a și transformă cifra de 5% diseminare într-o colonizare banală.',['proteinei 2a','5% dintre cazuri']),

q(51,['Linezolidul, ca alternativă la vancomicina i.v. în MRSA:',
 ['Avantajul major este administrarea per os și lipsa nefrotoxicității','Poate cauza mielosupresie reversibilă, mai ales trombocitopenie, deci hemogramă săptămânală; pe termen lung există risc de neuropatie periferică sau nevrită optică','Vancomicina i.v. rămâne prima intenție clasică, cu niveluri 15-20 mg/L și durată minimă de două săptămâni','Linezolidul este nefrotoxic, motiv pentru care se evită la administrare orală','Trombocitopenia lipsește, monitorizarea hemogramei fiind superfluă'],'ABC',167,'MRSA — Vancomicină; Linezolid',
 'Contrastarea vancomicinei (15-20 mg/L, 2 săptămâni, nefrotoxică) cu linezolidul oral, mielosupresia și neuropatia.',
 ['Calea orală și absența nefrotoxicității sunt avantajele citate.','Mielosupresia, trombocitopenia, hemograma săptămânală și neuropatiile sunt explicite.','Nivelurile 15-20 mg/L și minim două săptămâni sunt ale vancomicinei.','Linezolidul este evidențiat tocmai prin lipsa nefrotoxicității.','Monitorizarea săptămânală este cerută.']],
 8,'Distractorii atribuie linezolidului nefrotoxicitatea vancomicinei și anulează mielosupresia pentru care se cere hemograma săptămânală.',['lipsa nefrotoxicităţii','15-20 mg/L']),

q(52,['Enterococul rezistent la vancomicină (VRE):',
 ['Rezistența e mediată de schimbarea precursorilor de peptidoglican de la D-Ala-D-Ala la D-Ala-D-Lac, care împiedică legarea glicopeptidelor','Multe infecții sunt nosocomiale, cu virulență scăzută; sediile frecvente sunt urinar și biliar; oral se folosește linezolid, i.v. daptomicină și tigeciclină','VRE este comunitar hipervirulent, de primă intenție fiind vancomicina orală','D-Ala-D-Lac crește afinitatea pentru vancomicină, rezistența fiind infirmată','Tigeciclina este inactivă, singura cale fiind ertapenemul'],'AB',167,'Enterococi rezistenți la vancomicină',
 'Reținerea substituției D-Ala-D-Lac și a pachetului terapeutic linezolid oral / daptomicină–tigeciclină i.v.',
 ['Mecanismul D-Ala-D-Lac este explicit.','Nosocomial, virulență scăzută, sedii și schemele sunt din paragraf.','Virulența este descrisă ca scăzută, nu comunitar invazivă.','Substituția scade, nu crește, legarea glicopeptidului.','Tigeciclina figurează printre opțiunile i.v.']],
 8,'Distractorii inversează mecanismul D-Ala-D-Lac și mută VRE pe un profil hipervirulent comunitar.',['O-Ala-O￾lac','linezolid']),

q(53,['Enterobacteriile producătoare de ESBL, în epidemiologie și tratament:',
 ['În Marea Britanie, E. coli CTX-M-15 a apărut în 2004; circa 15% din tulpinile de E. coli sunt acum ESBL; sediul cel mai frecvent este urinar','Tratamentul principal este o carbapenemă (meropenem i.v. de trei ori pe zi sau ertapenem o dată pe zi dacă se vizează OPAT)','Piperacilină/tazobactam este inferioară carbapenemelor, chiar dacă organismul pare sensibil la peniciline după MIC; se asociază totuși o carbapenemă','Ciprofloxacina orală este de elecție, ESBL fiind invariabil sensibile la chinolone','CTX-M-15 lipsește din Marea Britanie, 15% fiind ponderea KPC'],'ABC',167,'Enterobacterii producătoare de ESBL',
 'Integrarea CTX-M-15 / 15% cu carbapenema de primă linie și inferioritatea pip/tazo chiar la MIC „sensibil”.',
 ['2004, 15% și sediul urinar sunt din paragraf.','Meropenem x3 sau ertapenem OD (OPAT) sunt schemele.','Inferioritatea pip/tazo față de carbapenemă este explicită.','Tulpinile sunt adesea rezistente la cipro, cotrimoxazol și gentamicină.','CTX-M-15 este tocmai enzima britanică citată.']],
 8,'Distractorii transformă pip/tazo sau cipro în elecție, deși textul cere carbapenemă și notează rezistențe asociate.',['15%','CTX-M-15']),

q(54,['În infecțiile cu CRE, când standardizarea testării este limitată, capitolul plasează ca tratament principal:',
 ['Colistinul, cu tigeciclină și uneori fosfomicină ca adjuvant după susceptibilitate; meropenemul (bolus sau infuzie) poate fi util la sensibilitate intermediară, MIC 8-16 mg/L','Ertapenemul oral, colistinul fiind abandonat','Vancomicina, CRE fiind Gram-pozitive','Flucloxacilina, PBP2a nefiind implicată','Cipro singură, KPC fiind invariabil sensibilă'],'A',168,'Enterobacterii rezistente la carbapeneme — Tratament',
 'Identificarea colistinului ca piatră de temelie, cu adjuvanți și fereastra MIC 8-16 mg/L pentru meropenem.',
 ['Colistinul principal, tigeciclina/fosfomicina adjuvante și MIC 8-16 mg/L sunt din paragraf.','Ertapenemul oral nu este schema CRE.','CRE sunt enterobacterii Gram-negative.','Flucloxacilina privește MSSA, nu carbapenemazele.','KPC inactivează carbapenemele și majoritatea β-lactamilor.']],
 8,'Distractorii mută elecția pe ertapenem, vancomicină sau flucloxacilină, departe de colistinul și de fereastra MIC 8-16 mg/L.',['colistinul','8-16 mg/L']),

q(55,['La un utilizator de droguri injectabile cu febră, focarul și etiologia tipice descrise sunt:',
 ['Majoritatea episoadelor țin de tromboflebite infectate sau abcese la locul injecției','Cei mai frecvenți patogeni sunt MSSA sau MRSA și Streptococcus pyogenes','Infecțiile stafilococice pot uneori disemina','Focarul tipic este meningita pneumococică, stafilococul fiind neimplicat','Streptococcus pyogenes lipsește, etiologia fiind doar Pseudomonas de mediu'],'ABC',156,'Sepsisul în situații speciale — Dependenții de droguri injectabile',
 'Recunoașterea tromboflebitei/abcesului de injecție și a triadei MSSA/MRSA/S. pyogenes.',
 ['Tromboflebita și abcesul local sunt originea descrisă.','Cei trei patogeni sunt lista de frecvență.','Diseminarea stafilococică este menționată.','Meningita pneumococică nu este focarul acestui paragraf.','S. pyogenes figurează alături de S. aureus.']],
 8,'Vigneta cere focarul de injecție; distractorii mută etiologia pe pneumococ sau Pseudomonas, în afara listei din text.',['tromboflebite infec￾tate','Streptococcus pyogenes']),
];
