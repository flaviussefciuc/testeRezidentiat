import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-89;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('pancreas',17,pdfOffset,`pancreas-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const PANCREAS_C=[
q(40,['Fuziunea mugurilor pancreatici, după rotația orară a celui ventral, se caracterizează prin:',
 ['Până în săptămâna a 6-a de gestație, mugurii ventral și dorsal sunt alipiți unul de celălalt','În timpul săptămânii a 8-a, parenchimul și ductele lor fuzionează','Fuziunea se produce în ziua 30, înaintea oricărei rotații','Mugurele ventral rămâne separat de cel dorsal, fără alipire','Santorini se formează doar în săptămâna a 20-a, independent de muguri'],'AB',257,'Embriologie — Calendarul fuziunii',
 'Reținerea etapelor săptămâna 6 (alipire) și săptămâna 8 (fuziune parenchim/ducte), distinct de ziua 30 a formării mugurilor.',
 ['Alipirea până în săptămâna 6 este explicită.','Fuziunea parenchimului și ductelor în săptămâna 8 este citată.','Ziua 30 este formarea mugurilor, nu fuziunea.','Textul descrie alipirea, nu absența ei.','Santorini este restul distal al ductului dorsal după fuziune, nu un eveniment din săptămâna 20.']],
 8,'Permutează ziua 30 cu săptămânile 6–8, trei praguri embriologice din același paragraf.',['săptămâna a 6-a','celei de-a 8-a săptămâni']),

q(41,['Variațiile arteriale relevante pentru chirurgia pancreatică includ:',
 ['La aproximativ 20% din populație lipsește artera hepatică dreaptă clasică, lobul drept fiind vascularizat din AMS (hepatică dreaptă din AMS)','La 20% din populație, artera hepatică stângă își are originea în artera gastrică stângă','AMS se situează imediat posterior de pancreas și dă ca primă ramură artera pancreaticoduodenală inferioară','Artera hepatică dreaptă din AMS este rară sub 1% și poate fi ligaturată fără risc în Whipple','AMS naște anterior de pancreas, prima ramură fiind artera gastrică stângă'],'ABC',258,'Anatomie vasculară — Variații hepatice și AMS',
 'Aplicarea celor două prevalențe de 20% (hepatică dreaptă înlocuită și hepatică stângă din gastrică stângă) și a poziției AMS.',
 ['Prevalența de aproximativ 20% a hepaticei drepte din AMS este explicită.','Originea hepaticei stângi din gastrica stângă la 20% este citată.','Poziția posterioară a AMS și prima ramură (pancreaticoduodenală inferioară) sunt descrise.','Ligatura neidentificată a hepaticei drepte din AMS este tocmai riscul duodenopancreatectomiei.','AMS naște din peretele anterior al aortei, posterior de pancreas; gastrica stângă ține de trunchiul celiac.']],
 8,'Autorizează ligatura hepaticei drepte din AMS, exact capcana de 20% din Whipple.',['aproximativ 20% din populaţie','20% din populaţie']),

q(42,['Secreția exocrină, dincolo de volumul zilnic, se caracterizează prin:',
 ['Când conținutul gastric cu pH <3 pătrunde în duoden, mucoasa duodenală eliberează secretină, care stimulează lichid bogat în bicarbonat (pH >8)','Concentrația de clor variază invers proporțional cu secreția de bicarbonat','Aproximativ 20 de enzime sunt secretate ca precursori inactivi; amilaza este singura enzimă secretată în forma sa activă, funcționând optim la pH 7','CCK este eliberată de peptide, aminoacizi și acizi grași liberi și stimulează contracția veziculei biliare','Amilaza se secretă doar ca tripsinogen, inactivă la orice pH'],'ABCD',260,'Fiziologie exocrină — Secretină, bicarbonat, amilază',
 'Legarea pragului pH <3 de secretină și a pH >8 al sucului, plus caracterul unic al amilazei active.',
 ['Lanțul pH <3 → secretină → bicarbonat pH >8 este explicit.','Relația inversă Cl/bicarbonat este citată.','Cele 20 de precursori și amilaza activă la pH 7 sunt descrise.','Stimulii CCK și contracția veziculei sunt menționate.','Tripsinogenul este precursorul tripsinei; amilaza este forma activă.']],
 8,'Transformă amilaza în precursor inactiv, inversând excepția explicită din text.',['pH <3','pH >8']),

q(43,['Insulele Langerhans sunt mai abundente la nivelul:',
 ['Cozii pancreatice','Capului, uncinatul neconținând insule','Istmului, de-a lungul VMS','Duodenului, ca resturi ectopice de insule','Splinei, prin contiguitate cu coada'],'A',261,'Fiziologie endocrină — Distribuția insulelor',
 'Reținerea predilecției insulelor pentru coadă, relevantă pentru rezecțiile distale și insulinom.',
 ['Textul precizează că insulele sunt mai abundente la nivelul cozii.','Capul conține insule, dar nu este sediul de maximă abundență.','Istmului nu i se atribuie această predilecție.','Insulele sunt pancreatice, nu duodenale „obligatorii”.','Splina nu este depozitul de insule.']],
 8,'Mută abundența insulelor pe cap sau duoden, contrar frazei despre coadă.',['cozii pancreatice','Insulele Langerhans']),

q(44,['În etiologia pancreatitei acute, dincolo de ponderea alcool–litiază, sunt adevărate următoarele:',
 ['La pancreatita postetanolică, primul episod este precedat de 6–8 ani de consum excesiv','Se estimează că 60% dintre pacienții cu pancreatită acută care nu consumă alcool prezintă calculi biliari','Aproximativ 8–10% sunt idiopatice, adesea legate de sludge, pancreas divisum sau pancreatită autoimună IgG4','Pancreatita post-ERCP poate apărea la 1–5% dintre pacienți','Formele fără etiologie reprezintă 40–50% și nu au legătură cu microlitiaza'],'ABCD',262,'Etiologie — Alcool, litiază, idiopatic',
 'Aplicarea ferestrei 6–8 ani, a ponderii de 60% litiază la ne-alcoolici și a intervalului 8–10% idiopatic.',
 ['Fereastra 6–8 ani este explicită.','Cifra de 60% la ne-alcoolici este citată.','8–10% idiopatic cu sludge/divisum/IgG4 este descris.','Intervalul 1–5% post-ERCP este menționat.','Idiopaticul este 8–10%, nu 40–50%.']],
 8,'Umflă ponderea idiopaticului și rupe legătura cu sludge-ul, pe trei praguri din același paragraf.',['6-8 ani','8-10% dintre cazurile']),

q(45,['Tabloul clinic și dinamica amilazei în pancreatita acută includ:',
 ['Durerea epigastrică constantă, necolicativă, iradiază posterior și poate fi atenuată de poziția șezândă sau în ortostatism','Amilaza serică crește rapid în primele 12 ore de la internare și revine de obicei la normal în 3–5 zile','Durerea colicativă în hipocondrul drept, agravată de clinostatism, este tipică','Amilaza rămâne crescută luni de zile, independent de evoluție','Poziția șezândă agravează durerea, spre deosebire de colecistită'],'AB',263,'Tablou clinic — Durere și amilază',
 'Recunoașterea ameliorării în șezut/ortostatism și a ferestrei 12 ore / 3–5 zile a amilazei.',
 ['Caracterul necolicativ, iradierea posterioară și atenuarea în șezut/ortostatism sunt explicite.','Cinetica 12 ore / 3–5 zile este citată.','Colica de hipocondru drept descrie altă patologie biliară.','Normalizarea în 3–5 zile este regula citată, nu persistența lunară.','Textul atribuie atenuarea, nu agravarea, poziției șezânde.']],
 8,'Inversează efectul poziției șezânde și prelungește amilaza la luni, două capcane de interpretare.',['primele 12 ore','3-5 zile']),

q(46,['Clasificarea Atlanta a severității pancreatitei acute distinge:',
 ['Forma ușoară: fără complicații locale sau sistemice','Forma moderată: complicații locale care se remit și/sau insuficiență de organ tranzitorie sub 48 de ore','Forma severă: fără necroză, cu organe intacte','Pseudochistul acut apare din prima zi, fără perete de granulație','Colecțiile fluide acute au perete fibros matur și puroi'],'AB',262,'Clasificarea Atlanta — Grade de severitate',
 'Separarea formei ușoare (fără complicații) de cea moderată (organ <48 h) față de confuzia cu necroza/pseudochistul.',
 ['Definiția formei ușoare este din tabel.','Complicațiile locale remisive și insuficiența <48 h definesc forma moderată.','Forma severă include necroză, necroză infectată, pseudochisturi și MSOF persistentă.','Pseudochistul acut apare la cel puțin 4 săptămâni, cu perete de granulație.','Colecțiile acute sunt imprecis delimitate, fără perete de granulație, de obicei sterile.']],
 8,'Mută necroza în forma ușoară și pune peretele de granulație pe colecția acută din ziua 1.',['sub 48 h','Fără complicaţii locale']),

q(47,['Conform Tabelului 17-4, criteriile Ranson deosebesc etiologia non-biliară de cea biliară prin:',
 ['Vârsta la internare: >55 ani (non-biliar) versus >70 ani (biliar)','Leucocitele: >16.000 versus >18.000','Sechestrarea de fluide în 48 de ore: >6 L versus >4 L','Creșterea BUN: >5 mg/dl versus >2 mg/dl','Vârsta non-biliară este >70, iar sechestrarea non-biliară >4 L, inverse față de tabel'],'ABCD',264,'Criteriile Ranson — Praguri biliar versus non-biliar',
 'Maparea pragurilor pereche (55/70, 16/18, 6 L/4 L, 5/2 mg/dl) care se inversează ușor între etiologii.',
 ['Perechea de vârstă este din tabel.','Perechea de leucocite este citată.','Perechea de sechestrare 6 L versus 4 L este enumerată.','Perechea BUN 5 versus 2 mg/dl este din tabel.','Direcțiile sunt inverse față de aceste afirmații.']],
 8,'Capcană de tabel: patru perechi numerice ușor de oglindit între litiază și alcool.',['>55','>70']),

q(48,['Tratamentul medical suportiv al pancreatitei acute include:',
 ['Repaus alimentar până dispar durerea și sensibilitatea, iar amilazele și leucocitele revin la normal','Toate încercările medicamentoase de reducere a secreției (anticolinergice, analogi de somatostatină, aprotinină, antiacide) nu au demonstrat beneficiu semnificativ','Aspirația nazogastrică este indicată doar la grețuri, vărsături sau distensie, pentru a reduce riscul de aspirație','Analogii de somatostatină scurtează necroza și înlocuiesc NPO','Sonda nazogastrică se montează de rutină la forma ușoară, indiferent de grețuri'],'ABC',264,'Tratament medical — NPO, medicamente, SNG',
 'Aplicarea criteriilor de reluare a alimentației și a lipsei de beneficiu a supresiei farmacologice, plus indicația selectivă a SNG.',
 ['Condițiile de oprire a NPO sunt explicite.','Lista de clase fără beneficiu este enumerată.','Indicația selectivă a SNG este citată.','Analogii de somatostatină figurează tocmai în lista fără beneficiu.','SNG nu este cerută de rutină în forma ușoară fără grețuri.']],
 8,'Atribuie somatostatinei un efect pe necroză și face SNG-ul rutină, contrar celor două propoziții din text.',['revin la normal','nu au demonstrat niciun be']),

q(49,['Suportul nutrițional în pancreatita acută severă se caracterizează prin:',
 ['Nutriția enterală precoce este preferabilă celei parenterale și nu există diferențe între alimentația nazogastrică și cea nazojejunală privind evoluția','Nutriția parenterală totală este superioară enteralei și trebuie începută înaintea oricărei încercări enterale','Alimentația nazojejunală este inferioară celei nazogastrice, cu mai multe recurențe','Enterala este contraindicată până la normalizarea amilazei timp de 3 săptămâni','Doar alimentația orală imediată, fără sondă, este acceptată'],'A',265,'Nutriție — Enteral versus parenteral',
 'Recunoașterea priorității enteralei precoce și a echivalenței NG versus NJ.',
 ['Preferința enteralei și absența diferenței NG/NJ sunt explicite.','NPT este rezervată tractului nefuncțional, nu superioară enteralei.','Textul neagă diferența de evoluție între NG și NJ.','Enterala precoce este recomandată, nu amânată 3 săptămâni.','Sondele enterale sunt acceptate; oralul imediat nu este regula în forma severă.']],
 8,'Inversează ierarhia enteral versus parenteral și inventează o diferență NG/NJ pe care textul o neagă.',['Nutriţia enterală precoce','nazojejunală']),

q(50,['Colecistectomia și ERCP în pancreatita biliară se aleg astfel:',
 ['În formele ușoare sau moderate, colecistectomia se face în internarea curentă după remisiune, reducând riscul unui nou episod de la circa 50% la circa 5%','În formele severe, colecistectomia precoce se evită, morbiditatea fiind crescută, iar intervenția nemodificând episodul în sine','ERCP cu sfincterotomie este recomandată în forma severă când se suspectează impactarea ampulară (colangită sau amilazemie persistentă)','Colecistectomia precoce în forma severă vindecă pancreatita în 24 de ore','ERCP de rutină la orice pancreatită ușoară, fără litiază coledociană, înlocuiește colecistectomia'],'ABC',265,'Pancreatita biliară — Timing colecistectomie/ERCP',
 'Contrastul internare-curentă (50%→5%) versus amânarea în forma severă și a ERCP rezervat colangitei.',
 ['Reducerea 50%→5% și timing-ul în internarea curentă sunt explicite.','Evitarea colecistectomiei precoce în forma severă este citată.','Indicația ERCP la impactare/colangită/amilazemie persistentă este descrisă.','Intervenția nu modifică episodul în sine.','ERCP nu înlocuiește colecistectomia de rutină în forma ușoară fără coledocolitiază.']],
 8,'Forțează colecistectomia precoce în forma severă, exact scenariul cu morbiditate crescută.',['aproximativ 50%','aproximativ 5%']),

q(51,['Tromboza venei splenice și/sau porte după pancreatită acută severă se caracterizează prin:',
 ['Poate determina hipertensiune portală stângă, cu varice gastrice mari care pot sângera','Tratamentul definitiv al varicelor gastrice hemoragice din hipertensiunea portală stângă este splenectomia','TIPS este gestul de elecție, splenectomia fiind evitată','Varicele esofagiene, nu gastrice, definesc hipertensiunea portală stângă','Tromboza portei nu poate produce ischemie mezenterică'],'AB',265,'Complicații — Tromboză splenică/portă',
 'Legarea trombozei splenice de hipertensiunea portală stângă și de splenectomie ca tratament al varicelor gastrice.',
 ['Mecanismul HTP stângă cu varice gastrice este explicit.','Splenectomia ca tratament definitiv este citată.','TIPS nu este metoda descrisă aici.','Varicele gastrice, nu esofagiene, sunt consecința citată.','O consecință a trombozei portei este ischemia acută mezenterică.']],
 8,'Înlocuiește splenectomia cu TIPS și mută varicele pe esofag, două vecini de hipertensiune portală.',['hipertensiunii p011ale stângi','splenectomie']),

q(52,['Necroza pancreatică infectată, dincolo de ratele 20%/5%, se recunoaște și se tratează astfel:',
 ['CT evidențiază aer retroperitoneal sau în bursa omentală; dacă aerul lipsește, puncția ghidată CT cu Gram și culturi (inclusiv fungi) poate fi utilă','Procedurile endoscopice și minim invazive au scăzut morbiditatea; necrectomia deschisă se rezervă criticului la care metodele conservatoare au eșuat','Infecția apare de obicei la 2–3 săptămâni de la debutul pancreatitei necrotice severe','Aerul retroperitoneal exclude infecția, debridarea deschisă fiind prima intenție din ziua 1','Profilaxia antibiotică modifică favorabil mortalitatea și este indicată în necroza sterilă'],'ABC',266,'Necroza infectată — Diagnostic și abord',
 'Aplicarea semnelor de aer, a FNA și a ierarhiei MIS înaintea necrectomiei deschise.',
 ['Aerul în bursa omentală/retroperitoneu și FNA sunt explicite.','Rezerva necrectomiei deschise după eșecul MIS este citată.','Fereastra 2–3 săptămâni este menționată.','Aerul semnifică infecție; deschiderea din ziua 1 este descurajată.','Profilaxia nu este recomandată nici în necroza sterilă.']],
 8,'Inversează semnificația aerului și pune necrectomia deschisă în ziua 1, contrar ferestrei 2–3 săptămâni.',['bursei omentale','puncţie aspirativă'],[265]),

q(53,['Indicațiile de drenaj ale pseudochistului pancreatic includ:',
 ['Cele care persistă mai mult de 1 an sau au >5 cm au tendința să crească și să determine simptome obstructive, deci drenajul este indicat','Pseudochisturile mature, în general mai vechi de 4 săptămâni, au perete gros potrivit pentru suturare','Pseudochistul din prima săptămână se anastomozează de rutină, peretele fiind deja matur','Drenajul extern al unui pseudochist comunicant este de elecție, fistula fiind rară','Dimensiunea sub 2 cm impune drenaj intern, independent de simptome'],'AB',266,'Pseudochist — Praguri 5 cm, 1 an, 4 săptămâni',
 'Reținerea pragurilor >5 cm / >1 an pentru drenaj și a maturării la >4 săptămâni pentru sutură.',
 ['Cele două praguri (1 an, 5 cm) sunt explicite.','Maturarea la peste 4 săptămâni este citată.','Anastomoza prematură pe perete nematur nu este descrisă.','Drenajul extern al comunicantului este contraindicat (fistulă cronică/infecție).','Cele mici asimptomatice pot fi urmărite.']],
 8,'Forțează anastomoza în săptămâna 1 și autorizează drenajul extern al comunicantului.',['>5 cm','mai vechi de 4 săptămâni'],[267]),

q(54,['Drenajul intern al pseudochistului comunicant se caracterizează prin:',
 ['Anastomoză directă cu stomacul, duodenul sau o ansă Roux; un fragment de perete se trimite la anatomopatologie pe secțiuni înghețate, pentru a exclude un neoplasm; este funcțional în peste 90% dintre cazuri','Drenajul percutan este preferat, riscul de fistulă fiind nul','Secțiunile înghețate sunt inutile, peretele neputând masca un neoplasm','Rata de succes este sub 10%, deci se evită','Comunicarea cu ductul contraindică drenajul intern'],'A',267,'Pseudochist comunicant — Drenaj intern',
 'Aplicarea ratei >90% și a biopsiei de perete pe înghețate, față de drenajul percutan rezervat necomunicantelor.',
 ['Anastomoza, fragmentul pe înghețate și >90% sunt explicite.','Percutanul este pentru necomunicante; la comunicante fistulizează.','Excluderea neoplasmului este motivul secțiunilor înghețate.','Textul citează succes peste 90%.','Comunicarea impune tocmai drenajul intern.']],
 8,'Înlocuiește drenajul intern cu percutanul la comunicant, exact contraindicația din frază.',['peste 90%','secţiuni îngheţate']),

q(55,['Chirurgia pancreatitei cronice, după eșecul medical, include:',
 ['Consumul de alcool este responsabil de aproximativ 70% dintre cazuri','Procedurile de drenaj (pancreaticojejunostomie laterală Puestow) funcționează cel mai bine la duct >4 mm, cu ameliorarea durerii la circa 70%','Pancreatectomia totală nu este indicată, din cauza disfuncției severe exo- și endocrine','Puestow se rezervă ductelor nedilatate, rezecția fiind pentru ductul >4 mm','Splanhnicectomia are durabilitate înaltă și înlocuiește drenajul'],'ABC',268,'Pancreatita cronică — Puestow și rezecție',
 'Maparea pragului ductal >4 mm pe Puestow (70% ameliorare) versus rezecție pe duct nedilatat, plus interdicția pancreatectomiei totale.',
 ['Ponderea de circa 70% alcool este explicită.','Pragul >4 mm, Puestow și 70% ameliorare sunt citate.','Motivul de a evita pancreatectomia totală este descris.','Drenajul este pentru duct dilatat; rezecția pentru duct nedilatat cu boală focală.','Rezultatele splanhnicectomiei au fost dezamăgitoare, cu durabilitate scăzută.']],
 8,'Inversează indicația Puestow versus rezecție pe calibrul ductal și supraevaluează neuroliza.',['>4 mm','aproximativ 70%'],[267]),

q(56,['Adenocarcinomul pancreatic, ca problemă oncologică, se caracterizează prin:',
 ['Este a patra cauză de deces prin cancer în SUA; fumatul dublează riscul','Aproximativ 98% dintre pacienții diagnosticați decedează prin boală, în pofida tratamentului multimodal','Două treimi dintre cazuri se dezvoltă la nivel cefalic','Mutația cea mai frecventă și cea mai precoce este în oncogenele K-ras','O rudă paternă cu cancer pancreatic reduce riscul sub 1%, K-ras apărând doar tardiv'],'ABCD',268,'Adenocarcinom — Epidemiologie și K-ras',
 'Combinarea rangului 4, a dublării prin fumat, a mortalității 98%, a predilecției cefalice și a K-ras precoce.',
 ['Rangul 4 și fumatul sunt explicite.','Cifra de 98% este citată.','Cele două treimi cefalice sunt menționate.','K-ras ca mutație cea mai frecventă și precoce este descris.','Ruda paternă asociază risc de 75%; K-ras este precoce, nu tardiv.']],
 8,'Inversează riscul familial 75% și mută K-ras în leziunile tardive, contrar tabelului genetic.',['a patra cea mai frecventă','K-ras'],[269]),

q(57,['Evaluarea icterului din tumora pancreatică începe astfel:',
 ['Creșterea bilirubinei totale și directe, a fosfatazei alcaline și a γ-GGT, cu creștere ușoară a transaminazelor, sugerează icter obstructiv','Ultrasonografia este prima opțiune imagistică la pacientul icteric','Pacienții cu o rudă paternă cu cancer pancreatic prezintă un risc de 75% pentru dezvoltarea afecțiunii','Prima investigație este ERCP, ecografia fiind inutilă înaintea stentării','Transaminazele foarte crescute, cu FA normală, definesc obstacolul extrahepatic'],'ABC',269,'Tablou clinic — Icter obstructiv și risc familial',
 'Recunoașterea profilului colestatic (FA/GGT) versus transaminaze ușoare și a ecografiei ca prim pas.',
 ['Profilul biochimic obstructiv este explicit.','Ecografia ca primă opțiune este citată.','Riscul de 75% la ruda paternă este menționat.','CT este cea mai bună examinare a pancreasului după sugestia de neoplasm; ERCP nu înlocuiește US ca prim pas.','Transaminazele foarte crescute orientează hepatocelular, nu obstructiv.']],
 8,'Pune ERCP înaintea ecografiei și inversează pattern-ul enzimatic al icterului obstructiv.',['fosfatazei alcaline','risc de 75%']),

q(58,['Duodenopancreatectomia cefalică (Whipple) se caracterizează tehnic prin:',
 ['Rezecția porțiunii distale a CBP, a duodenului și a capului pancreatic; reconstrucția include coledocojejunostomie, pancreaticojejunostomie și gastrojejunostomie (sau duodenojejunostomie dacă se prezervă pilorul)','Mortalitatea este <5%, dar complicațiile sunt frecvente; fistula cea mai frecventă este cea pancreaticojejunală','Tumorile corpului și cozii se tratează prin pancreatectomie distală, care include cel mai adesea splenectomia','Mortalitatea depășește 40%, identică necrozei infectate, reconstrucția având o singură anastomoză','Splenectomia însoțește de principiu Whipple-ul cefalic, nu rezecția distală'],'ABC',270,'Whipple — Rezecție, reconstrucție, fistulă',
 'Maparea celor trei anastomoze, a mortalității <5% și a predilecției fistulei pe pancreaticojejunostomie.',
 ['Piesele rezecate și cele trei anastomoze sunt explicite.','Mortalitatea <5% și fistula PJ sunt citate.','Pancreatectomia distală ± splenectomie pentru corp/coadă este descrisă.','40% este mortalitatea necrozei infectate, nu a Whipple.','Splenectomia ține de rezecția distală, nu de Whipple-ul cefalic.']],
 8,'Umflă mortalitatea Whipple la 40% și mută splenectomia pe rezecția cefalică.',['<5%','pancreaticojejunală']),

q(59,['Supraviețuirea în adenocarcinomul pancreatic nerezecabil versus rezecat se caracterizează prin:',
 ['Boala nerezecabilă are o supraviețuire medie de aproximativ 6 luni, chiar și cu chimioterapie; rezecția cu margini negative plus adjuvant extinde durata la circa 19 luni, supraviețuirea la 5 ani fiind probabil de 20%','Nerezecabilul are supraviețuire de 19 luni, rezecția scurtând-o la 6 luni','Supraviețuirea la 5 ani după rezecție depășește 90%','Factorii de prognostic nefavorabil (N+, tumora >3 cm, invazie perineurală) îmbunătățesc supraviețuirea','Chimioterapia anulează prognosticul ganglionilor pozitivi'],'A',271,'Prognostic — 6 luni versus 19 luni',
 'Reținerea cuplului 6 luni (nerezecabil) versus 19 luni (R0 + adjuvant) și a 20% la 5 ani.',
 ['Cele trei cifre (6 luni, 19 luni, 20%) sunt explicite.','Direcția este inversă față de text.','20%, nu 90%, este supraviețuirea la 5 ani.','N+, tumora >3 cm și invazia perineurală sunt factori nefavorabili.','Textul nu atribuie chimio anularea prognosticului N+.']],
 8,'Inversează 6 versus 19 luni și umflă supraviețuirea la 5 ani de la 20% la 90%.',['aproximativ 6 luni','aproximativ 19 luni']),

q(60,['Tumorile pancreatice neuroendocrine (TPN) se deosebesc de adenocarcinom prin:',
 ['Reprezintă aproximativ 7% din cancerele pancreatice; incidența maximă este între 30 și 60 de ani','Aproximativ 50% sunt nefuncționale','Sunt clasificate funcționale sau nefuncționale după prezența sindromului clinic de secreție peptidică','90% sunt adenocarcinoame ductale funcționale cu sindrom carcinoid constant','Nefuncționalele nu se rezecă, scanarea cu octreotid înlocuind chirurgia'],'ABC',271,'TPN — Epidemiologie și clasificare',
 'Aplicarea ponderii de 7%, a vârfului 30–60 ani și a ratei de 50% nefuncționale.',
 ['7% și vârful 30–60 ani sunt explicite.','Proporția de circa 50% nefuncționale este citată.','Criteriul funcțional/nefuncțional este definit.','90% adenocarcinom ductal ține de cancerele pancreatice în ansamblu, nu de TPN.','Tratamentul implică rezecție pancreatică pentru toate aceste tumori; octreotidul evaluează metastazele.']],
 8,'Conflatează TPN-urile cu adenocarcinomul ductal și anulează rezecția nefuncționalelor.',['aproximativ 7%','30-60 ani']),

q(61,['Insulinomul, ca TPN funcțională, se caracterizează prin:',
 ['Reprezintă 20–30% din TPN, fiind cea mai frecventă tumoare funcțională; 85–90% sunt benigne','Majoritatea sunt solitare și <2 cm; circa 75% sunt în corp și coadă; aproximativ 10% asociază MEN1','Majoritatea celorlalte TPN (60%) sunt maligne, spre deosebire de insulinom','Enucleerea este rezonabilă când tumora este mare și lipită de ductul principal','85–90% sunt maligne, localizate în cap, fără legătură cu MEN1'],'ABC',272,'Insulinom — Epidemiologie și sediu',
 'Contrastul benign (85–90%) și sediul corporeo-caudal (75%) față de celelalte TPN maligne în cap.',
 ['Ponderea 20–30% și benignitatea 85–90% sunt explicite.','Solitare, <2 cm, 75% corp/coadă și 10% MEN1 sunt citate.','Malignitatea de 60% a celorlalte TPN este menționată.','Enucleerea este pentru leziuni mici, la distanță de duct; cele aderente cer pancreatectomie.','Benignitatea și sediul distale sunt inverse în această variantă.']],
 8,'Inversează benign/malign și cap versus corp-coadă, două oglindiri din același paragraf.',['20-30% din totalul','85-90%'],[271]),

q(62,['Gastrinomul (Zollinger-Ellison) se caracterizează prin:',
 ['Trei pătrimi apar sporadic, o pătrime în MEN1, unde este cea mai frecventă TPN funcțională','Peste 50% sunt în peretele duodenal; 60–90% se află în triunghiul gastrinoamelor','Un nivel de gastrină >1.000 pg/mL la pH gastric <2 are valoare diagnostică','Gastrina >1.000 pg/mL la pH >7 confirmă insulinomul','Triunghiul gastrinoamelor exclude duodenul, toate leziunile fiind în coada pancreasului'],'ABC',272,'Gastrinom — Triunghi și prag diagnostic',
 'Aplicarea triunghiului (cistic–duoden D2/D3–istm) și a pragului gastrină >1.000 cu pH <2.',
 ['3/4 sporadice și 1/4 MEN1 sunt explicite.','Peretele duodenal >50% și 60–90% în triunghi sunt citate.','Pragul >1.000 pg/mL cu pH <2 este diagnostic.','pH-ul trebuie să fie acid (<2), nu alcalin; nu este insulinom.','Triunghiul include D2–D3 și joncțiunea col–corp, nu coada.']],
 8,'Mută gastrinomul în coadă și cere pH alcalin, inversând triunghiul și criteriul acid.',['>I.OOO pg/mL','pH gastric <2']),

q(63,['Glucagonomul și VIPomul se recunosc clinic astfel:',
 ['Glucagonomul: leziuni mari, adesea metastatice, în corp/coadă; peste jumătate au eritem migrator necrolitic; glucagon 500–1.000 pg/mL este diagnostic','VIPomul: diaree apoasă 6–8 L/zi chiar în NPO, hipopotasemie și hipoclorhidrie (sindrom Verner-Morrison); octreotidul ajută diareea metastatică','Eritemul migrator necrolitic definește gastrinomul, iar diareea 6–8 L/zi insulinomul','Glucagonul diagnostic este <50 pg/mL, identic glicemiei din triada Whipple','VIPomul nu produce diaree în repaus alimentar'],'AB',273,'Glucagonom și VIPom',
 'Separarea eritemului migrator necrolitic (glucagon) de holera pancreatică 6–8 L (VIP).',
 ['Tabloul glucagonomului, inclusiv 500–1.000 pg/mL, este explicit.','Triada SDA/Verner-Morrison și 6–8 L/zi sunt citate.','Eritemul ține de glucagonom, diareea masivă de VIPom, nu de gastrinom/insulinom.','500–1.000 pg/mL, nu <50.','Diareea VIPom persistă și în repaus alimentar.']],
 8,'Schimbă dermatita necrolică pe gastrinom și diareea masivă pe insulinom, două sindroame vecine din tabelul TPN.',['eritemul migrator necrolitic','6-8 L/zi']),

q(64,['Neoplasmele chistice mucinoase pancreatice se deosebesc de IPMN prin:',
 ['Sunt întâlnite aproape constant la femei de vârstă mijlocie și conțin stromă ovariană la examenul histologic','La diagnostic, 40% sunt invazive, localizate cel mai frecvent în corp și coadă, și trebuie rezecate','IPMN-urile nu conțin stromă ovariană; cele de duct principal (dilatare >5 mm) sunt mai frecvent maligne și aproape toate se rezecă','IPMN-urile de ramură se urmăresc prin CT, exceptând simptomele, diametrul >3 cm, nodulii sau citologia îngrijorătoare','Stromă ovariană definește IPMN-ul de duct principal la bărbați, mucinoasele nefiind rezecate'],'ABCD',274,'Chiste mucinoase versus IPMN',
 'Contrastul stromă ovariană (mucinos, femei, 40% invazive) versus IPMN fără stromă, cu pragul >5 mm al ductului principal.',
 ['Predilecția feminină și stroma ovariană sunt explicite.','Cifra de 40% invazive și sediul corp/coadă sunt citate.','Absența stromei ovariene și dilatarea >5 mm sunt descrise.','Criteriile de urmărire a ramurilor (simptome, >3 cm, noduli, citologie) sunt enumerate.','Stroma ovariană ține de neoplasmul mucinos, nu de IPMN.']],
 8,'Pune stroma ovariană pe IPMN-ul masculin și anulează rezecția mucinoaselor, inversând Tabelul 17-11.',['stromă ovariană','40% dintre tumori'],[275]),
];
