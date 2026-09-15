import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p<=527?p-315:p-321;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('vascular',26,pdfOffset,`vascular-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const VASCULAR_C=[
q(27,['Complicațiile angiografiei (tehnica Seldinger) includ:',
 ['Sângerare sau tromboză la locul puncției, pseudoanevrism, fistulă arterio-venoasă iatrogenă, hipersensibilitate și toxicitate renală la contrast, cea din urmă mai frecventă la diabetici','Tromboza apare de obicei în primele 6 ore de la puncție, dar poate apărea și după câteva zile','Pseudoanevrismele pot fi închise prin compresie sub ghidaj ecografic, mai ales la cei fără anticoagulare; altfel, sutură chirurgicală a orificiului','Hidratarea înainte și după angiografie este importantă, în special la insuficiența renală','Tromboza este imposibilă după 2 ore, contrastul neavând toxicitate renală la diabetic'],'ABCD',523,'Angiografie — Complicații Seldinger',
 'Listarea complicațiilor de puncție și a ferestrei de tromboză de 6 ore, plus compresia ecografică a pseudoanevrismului.',
 ['Lista de complicații și predilecția diabeticului pentru nefropatia de contrast sunt explicite.','Fereastra de 6 ore (și posibilitatea tardivă) este citată.','Compresia US versus sutura chirurgicală sunt descrise.','Hidratarea, mai ales la IR, este cerută.','Tromboza poate apărea și după zile; diabeticul e tocmai la risc renal.']],
 8,'Anulează fereastra de 6 ore și toxicitatea renală a diabeticului, două capcane din același paragraf.',['primele 6 ore','pseudoanevrism']),

q(28,['Cauza principală de deces la pacienții cu BAP este:',
 ['Infarctul miocardic; terapia medicală (dietă, exercițiu, stop fumat, antiplachetare, betablocant, control HTA, dislipidemie, diabet) scade evenimentele cardiovasculare','Amputația de coapsă, evenimentele coronariene fiind excepționale','Embolia pulmonară, fără legătură cu ateroscleroza sistemică','Ischemia mezenterică acută, ca unica cauză de mortalitate','Ruptura de anevrism popliteu, IM-ul neavând rol'],'A',523,'BAP — Terapie medicală și mortalitate',
 'Recunoașterea infarctului miocardic ca principală cauză de deces în BAP, nu a evenimentului de membru.',
 ['IM-ul ca cauză principală și pachetul de terapie medicală sunt explicite.','Amputația nu este cauza principală de deces citată.','Decesul e cardiac, pe fond aterosclerotic sistemic.','Ischemia mezenterică nu înlocuiește IM-ul.','Popliteul embolizează/trombozează, dar mortalitatea BAP e coronariană.']],
 8,'Mută cauza decesului din BAP de pe infarct pe amputație, inversul explicit al paragrafului de terapie medicală.',['infarctul miocardic','Terapia medicală']),

q(29,['Angio-RM și angio-CT, comparativ cu arteriografia, se caracterizează prin:',
 ['Nu necesită puncție femurală, deci evită complicațiile de la locul puncției; contrastul e injectat într-o venă centrală, cu sincronizare critică a imaginilor','Gadolinium poate provoca rar fibroză subcutanată (sistemică nefrogene) la insuficiența renală; majoritatea agenților de angio-CT pot exacerba IR','Sunt superioare pentru că permit PTA în aceeași ședință, fără risc de contrast','Gadolinium e inofensiv în IR, puncția femurală rămânând necesară ca la Seldinger','Arteriografia nu folosește puncție, angio-RM-ul fiind calea Seldinger'],'AB',523,'Angio-RM/CT versus arteriografie',
 'Contrastarea absenței puncției femurale cu riscul de fibroză nefrogene a gadoliniumului și de exacerbarea IR la iod.',
 ['Absența puncției și injectarea venoasă centrală sunt explicite.','Gadolinium/NSF și exacerbarea IR sunt citate.','PTA în aceeași ședință ține de arteriografia cu puncție.','Gadoliniumul are risc în IR; puncția nu e cerută.','Seldinger descrie arteriografia, nu angio-RM.']],
 8,'Inversează puncția (RM/CT versus Seldinger) și declară gadoliniumul inofensiv în IR.',['Gadolinium','fibroză subcutanată']),

q(30,['Tehnici adjuvante PTA, dincolo de stentul de oțel sau nitinol:',
 ['Recanalizarea subintimală creează un pasaj nou între straturile peretelui, dilatat apoi cu balon, fără bypass','Baloanele și stenturile farmacologic active (antineoplazice, citotoxice, imunosupresoare) au arătat patență promițătoare în studii inițiale','Aterectomia (lame rotative/orbitale sau laser) restabilește lumenul maximal și poate evita un corp străin, dar creează suprafețe denudate cu restenoză ridicată','Stenturile acoperite sunt inferioare metalului neacoperit, mai ales la restenoză','Recanalizarea subintimală impune bypass de principiu, aterectomia fiind abandonată'],'ABC',524,'PTA — Subintimal, DES, aterectomie',
 'Recunoașterea recanalizării subintimale, a stenturilor farmacologic active și a costului restenoic al aterectomiei.',
 ['Pasajul subintimal fără bypass este explicit.','Acoperirea farmacologică și rezultatele inițiale sunt citate.','Lamele/laserul, lumenul maximal și restenoza prin denudare sunt descrise.','Stenturile acoperite au rezultate favorabile față de neacoperite, mai ales la restenoză.','Subintimala evită bypass-ul; aterectomia rămâne o alternativă.']],
 8,'Declară stentul acoperit inferior neacoperitului și transformă subintimala în indicație de bypass.',['recanalizare subintimală','Aterectomia']),

q(31,['Conform Tabelului 26-3, patența la 2 ani a bypassului infrainghinal este de ordinul:',
 ['Femuro-popliteu deasupra genunchiului: PTFE 75%, venă 80%','Femuro-popliteu sub genunchi: PTFE 60%, venă 75–80% (secundară 90%)','Femuro-tibial: PTFE 30%, venă 70–75% (secundară 80–90%)','La 4 ani, femuro-tibialul pe PTFE rămâne 20%, vena 60–70%/75–80%','Deasupra genunchiului, PTFE depășește vena (90% versus 30%)'],'ABCD',526,'Tabelul 26-3 — Patențe PTFE versus venă',
 'Contrastarea prăbușirii PTFE sub genunchi și tibial (60% / 30%) față de venă (75–80% / 70–75%).',
 ['Rândul supra-genunchi 75/80 la 2 ani este tabelat.','Sub-genunchi 60 versus 75–80/90 este tabelat.','Tibialul 30 versus 70–75/80–90 este tabelat.','Coloana de 4 ani confirmă 20% PTFE tibial.','Deasupra genunchiului vena (80%) rămâne cel puțin egală, nu inferioară PTFE.']],
 8,'Inversează vena cu PTFE deasupra genunchiului și ignoră prăbușirea tibială a sinteticei la 30%.',['Femuro-popliteu deasupra','Bypass femuro-tibial']),

q(32,['Când safena ipsilaterală lipsește, alternativele de grefon includ:',
 ['Safena contralaterală, cu precauție pentru circulația celuilalt picior','Venele cefalice și bazilice, suturate cap la cap într-o grefă combinată','Proteză sintetică până la tibial, cu petec venos sau „manșetă” (cuff) distală; în gangrenă fără venă autologă, criovenă sau venă ombilicală, cu patență mai redusă, dar suficientă pentru a vindeca un ulcer','Safena contralaterală se recoltează de principiu, fără a evalua celălalt membru','Criovena depășește patența venei autologe și înlocuiește urmărirea Doppler'],'ABC',526,'Grefon alternativ — Safenă, braț, criovenă',
 'Ierarhia contralaterală → vene de braț → PTFE cu cuff → criovenă/ombilicală, cu patență inferioară autologului.',
 ['Contralaterala cu precauție este explicită.','Cefalica/bazilica cap-la-cap sunt citate.','Cuff-ul, criovena și patența redusă dar utilă pentru ulcer sunt descrise.','Textul cere precauție pentru celălalt picior.','Patența criovenei e mult mai redusă decât a autologului.']],
 8,'Supraestimează criovena peste autolog și recoltează contralateralul fără a gândi celălalt membru.',['criovena','manşete']),

q(33,['Urmărirea Doppler a bypassului venos safenian arată că:',
 ['Identificarea și corectarea stenozelor (angioplastie sau revizie) duc la patență „asistată” de circa 90% la 2 ani','Dacă stenoza e lăsată să ocludă înainte de corecție, patența la 2 ani este de doar 30%','Patența asistată este 30%, ocluzia netratată urcând la 90%','Doppler-ul e inutil, stenozele anastomotice neexistând','Angioplastia stenozei scade patența față de expectativă'],'AB',526,'Patență asistată — 90% versus 30%',
 'Contrastarea patenței asistate de 90% la 2 ani cu 30% după ocluzia stenozelor netratate.',
 ['90% asistată prin Doppler + PTA/revizie este explicită.','30% după ocluzie netratată este citată.','Cifrele sunt inversate față de text.','Doppler-ul e util tocmai pentru stenoze anastomotice și de grefon.','Corecția crește, nu scade, patența.']],
 8,'Permutează 90% (asistată) cu 30% (după ocluzie), perechea de prognostic a urmăririi Doppler.',['90% la 2 ani','doar 30%']),

q(34,['Nivelul amputației, când revascularizarea nu e posibilă:',
 ['Cu cât amputația e mai distală, cu atât potențialul de reabilitare e mai bun; distalele includ degete, transmetatarsiană și Syme (gleznă)','Păstrarea genunchiului (transtibială) e importantă, proteza de coapsă cerând semnificativ mai multă energie','Amputația de coapsă e indicată când ischemia e profundă, gangrena ajunge la genunchi, sau la imobilizații/risc chirurgical înalt','Syme se rezervă ischemiei de coapsă, genunchiul fiind sacrificat de principiu','Amputația de coapsă are potențial de reabilitare superior celei de degete'],'ABC',527,'Amputație — Syme, gambă, coapsă',
 'Ierarhia distal → proximal (reabilitare) și costul energetic al protezei de coapsă, plus indicațiile amputației de coapsă.',
 ['Regula „mai distal, mai bun” și lista Syme sunt explicite.','Energia crescută a protezei de coapsă este citată.','Cele trei indicații de coapsă sunt descrise.','Syme este distal (gleznă), nu de coapsă.','Degetele, nu coapsa, maximizează reabilitarea.']],
 8,'Sacrifică genunchiul de principiu și declară coapsa superioară degetelor, inversul energiei de deplasare.',['Syme','proteză de coapsă']),

q(35,['Epidemiologia TVP, potrivit capitolului:',
 ['Aproximativ 900.000 de pacienți pe an dezvoltă TVP; dacă apare embolia pulmonară, mortalitatea în spital depășește 10%','Circa 50% din episoadele de TVP dobândite în spital sunt asimptomatice','TVP spitalicească e simptomatică în 95% din cazuri, mortalitatea prin EP fiind sub 1%','Incidența anuală e sub 9.000, EP-ul neinfluențând mortalitatea','Asimptomaticii spitalizați nu dezvoltă TVP, screening-ul fiind superfluu'],'AB',536,'TVP — 900.000 și mortalitate >10%',
 'Reținerea volumului de 900.000/an, a mortalității >10% prin EP și a ponderii de 50% asimptomatice spitalicești.',
 ['900.000 și >10% sunt explicite.','50% asimptomatice spitalicești sunt citate.','50%, nu 95%; mortalitatea nu e sub 1%.','900.000, nu 9.000.','Jumătate din TVP spitalicească e tăcută.']],
 8,'Coboară 900.000 la 9.000 și mortalitatea prin EP sub 1%, două ordine de mărime din același paragraf.',['900.000 de pacienţi','depăşeşte 10%']),

q(36,['Tromboflebita superficială se tratează astfel:',
 ['Antiinflamatoare nesteroidiene și comprese calde','Heparine cu greutate moleculară mică timp de 4–6 săptămâni, pentru ameliorarea simptomelor','Uneori, excizia trombului după incizia venei ameliorază imediat durerea, aspectul cosmetic și reduce pigmentarea','Anticoagularea prelungită cu warfarină INR 4–5 e prima linie, compresele calde fiind evitate','Excizia trombului agravează pigmentarea și se evită din considerente cosmetice'],'ABC',536,'Tromboflebită superficială',
 'Ierarhia AINS/comprese → HGMM 4–6 săptămâni → trombectomie superficială pentru durere și pigmentare.',
 ['AINS și compresele calde sunt prima linie.','HGMM 4–6 săptămâni este citată.','Excizia pentru durere, cosmetic și pigmentare este descrisă.','Warfarina INR 4–5 nu e tratamentul flebitei superficiale.','Excizia reduce, nu agravează, pigmentarea.']],
 8,'Înlocuiește AINS/HGMM cu warfarină la INR 4–5 și inversează efectul cosmetic al trombectomiei.',['4-6 săptămâni','comprese calde']),

q(37,['Diagnosticul TVP de membru inferior:',
 ['TVP de iliac stâng e mai frecventă (sindrom May-Thurner: compresia venei iliace stângi de bifurcația aortică și artera iliacă dreaptă)','Semnul Homan (durere la flexia dorsală) e prezent în mai puțin de 50% din cazuri; acuratețea clinică izolată e de numai 50%','Sensibilitatea Doppler e >95%; D-dimerii sunt sensibili dar nespecifici și, dacă pozitivi, trebuie urmați de ecografie','Venografia e rară pentru diagnostic, dar frecventă înainte de tromboliză','Homan pozitiv în 95% înlocuiește Doppler-ul, May-Thurner ținând de artera poplitee'],'ABCD',537,'TVP — May-Thurner, Homan, Doppler',
 'Aplicarea predilecției stângi (May-Thurner), a sensibilității Homan <50% și a Doppler >95%, cu D-dimerii ca screening.',
 ['May-Thurner și predilecția iliacului stâng sunt explicite.','Homan <50% și acuratețea clinică 50% sunt citate.','Doppler >95% și D-dimerii sensibili/nespecifici sunt descrise.','Rolul venografiei înainte de tromboliză este enunțat.','Homan nu înlocuiește Doppler-ul; May-Thurner e iliac, nu popliteu.']],
 8,'Ridică Homan la 95% ca substitut al Doppler-ului și mută May-Thurner pe popliteu.',['May-Thurner','>95%']),

q(38,['Evaluarea hipercoagulabilității în TVP spontană (idiopatică) include:',
 ['Proteina C, proteina S, antitrombina III, factorul V Leiden, mutația genei protrombinei și anticorpii anticardiolipină','Doar D-dimerii, restul testelor fiind inutile în TVP idiopatică','Numai grupul sanguin ABO, fără factori ereditari','Antitrombina III se dozează doar după 6 luni de warfarină, celelalte teste fiind abandonate','Factorul V Leiden exclude restul panelului, mutația protrombinei neexistând'],'A',537,'Hipercoagulabilitate — Panelul idiopatic',
 'Recunoașterea panelului complet (C, S, ATIII, FV Leiden, protrombină, anticardiolipină) în TVP spontană.',
 ['Cele șase categorii sunt enumerate explicit.','D-dimerii sunt screening de TVP, nu substitut al panelului de trombofilie.','ABO nu înlocuiește panelul.','Panelul se cere la idiopatică, nu după 6 luni de warfarină ca unică fereastră.','FV Leiden nu anulează celelalte teste.']],
 8,'Reduce panelul de trombofilie la D-dimeri, deși textul listează șase determinări la TVP idiopatică.',['proteină C','factor V Leiden']),

q(39,['Anticoagularea clasică a TVP cu heparină și warfarină:',
 ['După heparinizare adecvată se începe warfarina, cu INR țintă 2–3','Warfarina inhibă factorii II, VII, IX, X și proteinele C și S; timpii de înjumătățire ai C/S fiind mai scurți, există o fereastră hipercoagulabilă','Necroza cutanată warfarinică e o complicație rară dar catastrofală a acestei ferestre; de aceea heparina se menține la începutul warfarinei','INR-ul țintă e 5–6, heparina oprindu-se înaintea primei doze de warfarină','Proteinele C și S au timp de înjumătățire mai lung decât II/VII/IX/X, fereastra hipercoagulabilă lipsind'],'ABC',538,'Warfarină — INR 2–3 și necroza cutanată',
 'Aplicarea INR 2–3 și a overlap-ului de heparină din cauza ferestrei hipercoagulabile (C/S versus II/VII/IX/X).',
 ['Succesiunea heparină → warfarină și INR 2–3 sunt explicite.','Inhibarea dublă și timpii mai scurți ai C/S sunt citați.','Necroza cutanată și menținerea heparinei sunt descrise.','Ținta nu e 5–6; heparina nu se oprește înainte.','C/S au timpi mai scurți, nu mai lungi.']],
 8,'Oprește heparina înaintea warfarinei și urcă INR-ul la 5–6, tocmai scenariul necrozei cutanate.',['INR între 2 şi 3','Necroza cutanată warfarinică']),

q(40,['Indicațiile clare de tromboliză venoasă, plus criteriile ACCP pentru TVP iliofemurală, sunt:',
 ['Tromboza venei subclavii, a venei renale și ocluzia acută trombotică a venei mezenterice superioare; ACCP: TVP iliofemurală, simptome <14 zile, stare bună, speranță de viață >1 an și risc scăzut de sângerare','Orice TVP surală de peste 6 luni, fără criterii de risc hemoragic','Doar TVP tibiale asimptomatice, ACCP contraindicând iliofemurala','Speranța de viață <3 luni e criteriul principal ACCP','Subclavia și vena renală contraindică tromboliza, rezervată claudicației Framingham'],'A',538,'Tromboliză — Subclavie, renală, AMS, ACCP',
 'Recunoașterea triadului subclavie/renală/AMS și a ferestrei ACCP <14 zile / >1 an.',
 ['Cele trei indicații clare și criteriile ACCP sunt explicite.','TVP surală cronică nu e indicația citată.','ACCP vizează tocmai iliofemurala simptomatică recentă.','Speranța >1 an, nu <3 luni.','Subclavia și renală sunt indicații clare, nu contraindicații.']],
 8,'Mută tromboliza de pe subclavie/AMS pe TVP surală cronică și inversează fereastra ACCP de 14 zile / 1 an.',['< 14 zile','speranţă de viaţă> I an']),

q(41,['Phlegmasia și trombectomia în TVP iliofemurală masivă:',
 ['Chiar în tromboza iliofemurală completă cu edem masiv (phlegmasia cerulea dolens sau phlegmasia alba dolens), dispozitivele de trombectomie mecanică sau tromboliza sunt modalitățile primare','Trombectomia chirurgicală e rară, rezervată de obicei ischemiei care pune în pericol membrul','Trombectomia mecanică are mai puține contraindicații, agentul trombolitic fiind izolat în vena trombozată','Chirurgia deschisă e prima linie în orice phlegmasia, tromboliza fiind abandonată','Phlegmasia se tratează doar cu ciorapi elastici, fără recanalizare'],'ABC',538,'Phlegmasia — Mecanică versus chirurgicală',
 'Poziționarea trombectomiei mecanice/trombolizei ca primă linie chiar în phlegmasia, chirurgia fiind rezervată ischemiei de membru.',
 ['Phlegmasia cerulea/alba și întâietatea mecanică/trombolitică sunt explicite.','Raritatea chirurgiei și rezerva pentru ischemia de membru sunt citate.','Izolarea agentului și contraindicațiile mai puține sunt descrise.','Chirurgia nu e prima linie.','Ciorapii nu recanalizează iliofemurala oclusă.']],
 8,'Pune chirurgia deschisă înaintea trombectomiei mecanice în phlegmasia, inversul ierarhiei din paragraf.',['phlegmasia cerulea dolens','trombectomie mecanică']),

q(42,['Traumatismele vasculare se caracterizează prin:',
 ['Mecanisme: penetrant (înjunghiere, împușcare), contuzie (cel mai frecvent prin fractura oaselor lungi) sau iatrogen; în accidente, decelerare/accelerare','Hemoragia poate fi ocultă (părți moi, intracavitar); fistule AV cu triluri/sufluri; deficite neurologice prin hematom; ischemie de organ (ex. AVC carotidian)','Pulsul distal diminuat sau absent apare doar dacă trauma restricționează fluxul; flapul intimal poate tromboza doar după ore sau zile','Diagnosticul și tratamentul imediat evită șocul hipovolemic; complicații tardive: pseudoanevrisme, fistule AV cu IC prin suprasolicitare, tromboză pe leziuni intimale','Pulsul distal prezent exclude trauma vasculară, flapul intimal trombozând doar intraoperator'],'ABCD',541,'Traumatism vascular — Flap intimal tardiv',
 'Recunoașterea pulsațiilor păstrate și a trombozei tardive pe flap intimal, plus mecanismele penetrant/contuzie/decelerație.',
 ['Cele trei mecanisme și decelerația sunt explicite.','Hemoragia ocultă, fistulele și ischemia de organ sunt citate.','Limitarea semnului de puls absent și latența ore–zile sunt descrise.','Complicațiile tardive sunt listate.','Pulsul prezent nu exclude leziunea; tromboza poate fi tardivă.']],
 8,'Tratează pulsul distal prezent ca excludere a traumei, deși flapul intimal poate tromboza după ore sau zile.',['flapul intimai','ore sau zile']),

q(43,['Când se suspicionează traumatism vascular de extremitate:',
 ['Dacă IGB este 1, cu extremitate viabilă, diagnosticul de traumatism vascular e improbabil; vasele adiacente se examinează prin Doppler și ecografie de părți moi','Dacă membrul e ischemic, e indicată arteriografia cu contrast','IGB 1 cu membru viabil impune arteriografie de urgență, Doppler-ul fiind superfluu','Arteriografia e contraindicată în ischemia de membru, IGB 1 confirmând leziunea','Ecografia de părți moi e evitată când IGB e 1'],'AB',541,'Traumă vasculară — IGB 1 versus arteriografie',
 'Contrastarea IGB 1 + membru viabil (traumă improbabilă, Doppler) cu ischemia (arteriografie cu contrast).',
 ['IGB 1 și viabilitatea ca argument împotriva traumei semnificative sunt explicite.','Arteriografia în ischemia de membru este citată.','IGB 1 nu impune arteriografie de urgență.','Direcția e inversă: arteriografia e pentru ischemic, nu contraindicată.','Ecografia e tocmai următorul pas la IGB 1.']],
 8,'Impune arteriografie la IGB 1 cu membru viabil, inversul triajului din ultimele rânduri ale capitolului.',['indice gleznă-braţ','extremitate viabilă']),

q(44,['La pacientul observat pe banda de alergare, IGB:',
 ['Scade la cei cu claudicație atunci când apar simptomele, în timp ce alte cauze de durere de membru nu modifică măsurătorile de presiune','Rămâne neschimbat la claudicanți, scăderea diagnosticând artroza de șold','Crește la claudicație, stenoza diluând gradientul','Nu se măsoară la efort, banda fiind contraindicată în BAP','Scade doar în durerea venoasă maleolară, nu în claudicație'],'A',523,'IGB la efort — Banda de alergare',
 'Recunoașterea scăderii IGB la efort ca discriminator al claudicației față de alte dureri de membru.',
 ['Scăderea IGB la apariția simptomelor versus absența modificării în alte cauze este explicită.','Neschimbarea ar pune diagnosticul de cauză nevasculară, nu de claudicație.','IGB scade, nu crește, la stenoză simptomatică.','Banda e tocmai testul descris.','Sediul maleolar venei nu definește răspunsul IGB la efort.']],
 8,'Declară IGB neschimbat la efort în claudicație, deși textul îl folosește tocmai ca discriminator.',['bandă de alergare','IGB va scădea']),

q(45,['PTA poate fi complicată acut prin:',
 ['Ocluzie acută, de obicei prin ruptură de placă sau disecție intimală; restenoză prin recul elastic; pierderea continuității vasului — evenimente care cer în general stentare sau, mai rar, chirurgie imediată','Tehnica s-a extins la stenoze complexe, segmente lungi și ocluzii totale, odată cu profilele reduse și baloanele mai lungi','Ocluzia acută e excepțională, stentarea fiind inutilă după disecție','Reculul elastic protejează de restenoză','Ocluziile totale rămân inabordabile endovascular, indiferent de profilul dispozitivului'],'AB',524,'PTA — Ocluzie acută și recul elastic',
 'Recunoașterea triadului ocluzie acută (ruptură/disecție) / recul elastic / pierdere de continuitate ca indicații de stent.',
 ['Cele trei evenimente și conduita (stent ± chirurgie) sunt explicite.','Extinderea la leziuni lungi și ocluzii totale este citată.','Ocluzia acută e complicația descrisă, nu o excepție.','Reculul cauzează restenoză, nu protejează.','Ocluziile totale pot fi abordate, inclusiv subintimal.']],
 8,'Anulează ocluzia acută post-PTA și tratează reculul elastic ca protector, inversul indicației de stent.',['ocluzia acută','reculul elastic']),

q(46,['Anticoagulantele orale noi, față de warfarină, se caracterizează prin:',
 ['Permit anticoagulare imediată, fără heparinizare prealabilă','Nu necesită monitorizare, având biodisponibilitate stabilă; riscuri similare de sângerare ca warfarina, dar în prezent doar unul are antidot','Reversia rapidă (traumă, chirurgie de urgență) poate cere plasmă proaspătă înghețată sau concentrate de complex protrombinic','Toate au antidot specific, heparina rămânând necesară înaintea oricărui oral','Biodisponibilitatea instabilă impune INR săptămânal, identic warfarinei'],'ABC',538,'DOAC — Fără punte de heparină, un antidot',
 'Contrastarea debutului imediat fără heparină și a absenței monitorizării cu limita unui singur antidot.',
 ['Absența heparinizării prealabile este explicită.','Lipsa monitorizării, sângerarea similară și unicul antidot sunt citate.','PPC și concentratele de complex protrombinic sunt descrise pentru reversie.','Doar unul are antidot; heparina nu e cerută înainte.','Avantajul e tocmai biodisponibilitatea stabilă, fără INR.']],
 8,'Atribuie tuturor DOAC-urilor antidot și reintroduce heparina/INR-ul, inversul avantajelor listate.',['nu necesită heparinizare','doar unul dintre aceste medicamente']),
];
