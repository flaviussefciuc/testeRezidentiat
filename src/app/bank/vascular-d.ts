import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p<=527?p-315:p-321;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('vascular',26,pdfOffset,`vascular-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const VASCULAR_D=[
q(47,['Aorta cu „lumen dublu” (double-barreled) din disecție se caracterizează prin:',
 ['Lumenul fals reprezintă 50% sau mai mult din circumferința aortei','Lumenul fals ocupă sub 10% din circumferință, fără impact hemodinamic','Double-barreled descrie doar anevrismul popliteu trombozat','Nu există lumen fals, dilacerarea oprindu-se în intimă','Circumferința falsă e limitată la 5%, ramurile viscerale fiind ocrotite'],'A',520,'Disecție — Double-barreled aorta',
 'Recunoașterea lumenului fals ≥50% din circumferință ca geometrie a aortei cu lumen dublu.',
 ['Textul definește lumenul fals ca 50% sau mai mult din circumferință.','Pragul citat este ≥50%, nu sub 10%.','Double-barreled ține de disecția aortică, nu de popliteu.','Dilacerarea trece din intimă în medie, creând lumen fals.','Ramurile critice pot fi compromise tocmai de acest lumen fals.']]
,8,'Coboară lumenul fals sub 10%, deși paragraful îl plasează la ≥50% din circumferință.',['double-barreled aorta','50% sau mai mult']),

q(48,['Alegeți afirmațiile corecte referitoare la etiologia și propagarea disecției de aortă:',
 ['Sindroamele Marfan și Ehlers-Danlos predispun la degenerarea mediei și ruptură','Dilacerarea murală urmează hipertensiunii, aterosclerozei sau leziunii traumatice','Disecția se poate propaga proximal sau distal, ca o coloană sanguină pulsatilă prin medie','Marfan protejează media, disecția ținând doar de venele safene','Propagarea e imposibilă distal, lumenul fals oprindu-se la valva aortică'],'ABC',520,'Disecție — Marfan, Ehlers-Danlos, propagare',
 'Legarea fragilizării mediei (Marfan/ED, HTA, aterom, traumă) de propagarea proximală sau distală prin medie.',
 ['Predispoziția Marfan și Ehlers-Danlos este explicită.','HTA, ateroscleroza și trauma sunt citate ca leziuni murale.','Propagarea proximală sau distală prin medie este descrisă.','Marfan predispun, nu protejează; sediul e aortic, nu safenian.','Textul admite atât propagarea proximală, cât și pe cea distală.']],
 8,'Inversează Marfan din factor de ruptură în protecție și blochează propagarea distală.',['Marfan şi Ehlers-Danlos','propaga']),

q(49,['Complicațiile disecției de aortă ascendentă, după direcția de propagare, sunt:',
 ['Disecția retrogradă spre valva aortică poate obstrua originile coronarelor, cu ischemie miocardică acută','Extensia la cuspele aortice produce insuficiență valvulară aortică acută secundară','Extensia proximală spre rădăcină, cu ruptură liberă în sacul pericardic, instalează tamponada cardiacă','Extensia spre vasele brahiocefalice poate determina accident vascular','Disecția ascendentă se oprește la istm, coronarele și pericardul fiind ocrotite'],'ABCD',520,'Disecție — Coronare, IA, tamponadă, AVC',
 'Maparea celor patru complicații retrograde/anterograde ale disecției ascendente.',
 ['Obstrucția ostiilor coronare și ischemia acută sunt explicite.','Insuficiența aortică prin extensia la cuspe este citată.','Tamponada prin ruptură pericardică este complicația majoră descrisă.','Extensia brahiocefalică cu AVC este enunțată.','Ascendența interesează tocmai rădăcina, coronarele și pericardul.']],
 8,'Declară rădăcina, coronarele și pericardul ocrotite, inversul listei de complicații ale tipului A.',['tamponadei cardiace','arterelor coronare']),

q(50,['Indicația majoră de chirurgie reparatorie electivă în disecția de tip B este:',
 ['Lărgirea disecției cronice de aortă cu anevrism asociat','Orice tip B în primele 6 ore, identic urgenței de tip A','Hipertensiunea controlată medical, fără dilatare anevrismală','Disecția scurtă, sub 2 cm, fără risc de ruptură','Tipul B necomplicat, ca substituție de urgență a controlului dp/dt'],'A',520,'Disecție tip B — Chirurgie electivă',
 'Recunoașterea lărgirii cronice cu anevrism ca indicație majoră electivă, distinctă de urgența ischemiei/rupturii.',
 ['Textul numește lărgirea cronică cu anevrism indicația majoră electivă.','Urgența de 6 ore definește tipul A, nu B-ul necomplicat.','Controlul tensional fără anevrism ține de tratamentul medical.','Indicația electivă este dilatarea anevrismală cu risc de ruptură, nu leziunea scurtă.','dp/dt rămâne strategia medicală a tipului B necomplicat.']],
 8,'Mută chirurgia electivă de tip B pe urgența de 6 ore a tipului A, deși paragraful o rezervă anevrismului cronic.',['disecţiei cronice','chirurgie reparatorie electivă']),

q(51,['Conform Figurii 26-10, reducerea fluxului arterial apare la scăderea diametrului cu:',
 ['60–70%','10%, orice placă prăbușind debitul','20% arie, independent de diametru','100%, stenozele parțiale neinfluențând fluxul','5%, înaintea oricărei turbulențe'],'A',521,'Figura 26-10 — Prag 60–70%',
 'Aplicarea pragului figurii (reducerea fluxului la 60–70% scădere de diametru), distinct de remodelarea Glagov.',
 ['Legenda figurii plasează reducerea fluxului la 60–70% scădere de diametru.','10% nu este pragul citat.','Figura vorbește de diametru, nu de 20% arie.','Stenozele parțiale de 60–70% reduc deja fluxul.','Turbulența precede placa; 5% nu e pragul de flux.']],
 8,'Permutează 60–70% cu praguri de 5–20%, pe o legendă de figură ușor de confudat cu 50%/75% Poiseuille.',['60-70%','reducerea fluxului']),

q(52,['Claudicația intermitentă, ca mecanism și definiție, se caracterizează prin:',
 ['Termenul vine din latinescul claudatio (a șchiopăta); durerea e precipitată de efort și ameliorată de repaus','Mecanismul este conversia la metabolism anaerob și acidoză metabolică, ocluziile împiedicând creșterea de flux cerută de mușchi','Articulațiile și piciorul sunt scutite, masa musculară fiind redusă','Durerea e prezentă în repaus, identic crampelor nocturne de gambă','Piciorul și articulațiile sunt sediul tipic, masa musculară fiind maximă acolo'],'ABC',521,'Claudicație — claudatio și acidoză',
 'Legarea etimologiei și a definiției efort/repaus de metabolismul anaerob și de scutirea piciorului.',
 ['Etimologia claudatio și precipitarea de efort sunt explicite.','Conversia anaerobă cu acidoză este mecanismul citat.','Scutirea articulațiilor și a piciorului este descrisă.','Prezența în repaus definește ischemia avansată sau crampele, nu claudicația.','Masa musculară redusă scutește piciorul, nu îl face sediu.']],
 8,'Mută claudicația pe repaus și pe picior, inversul definiției efort/acidoză din același paragraf.',['claudatio','metabolismul anaerob']),

q(53,['Care dintre următoarele afirmații diferențiază corect durerea din stenoza de canal medular de claudicația ischemică?',
 ['Durerea din stenoza de canal medular este ameliorată prin aplecarea înainte în timpul mersului; adesea radiază de-a lungul membrului și nu se remite imediat în repaus','Durerea neurogenă nu este de obicei localizată la grupele musculare majore și este rar declanșată prin exerciții','Stenoza de canal se aliniază imediat la oprirea mersului, identic claudicației, fără iradiere','Aplecarea înainte agravează stenoza de canal, alinierea ținând de declivitatea Buerger','Durerea musculo-scheletală lipsește în repaus, fiind precipitată doar de ischemie'],'AB',522,'Diagnostic diferențial — Stenoza de canal medular',
 'Contrastarea alinării prin aplecare înainte și a neremiterii imediate, față de claudicația de grup muscular.',
 ['Aplecarea înainte, iradierea și neremitearea imediată sunt explicite.','Localizarea extra-musculară și raritatea precipitării de efort sunt citate.','Textul precizează că nu se remite imediat în repaus.','Aplecarea ameliorează, nu agravează, stenoza de canal.','Durerea musculo-scheletală este adesea prezentă în repaus.']],
 8,'Tratează stenoza de canal ca pe claudicația care cedează imediat la repaus, inversul alinării prin aplecare.',['stenozei de canal medular','aplecarea înainte']),

q(54,['Sonda Doppler portabilă cu undă continuă emite ultrasunete cu lungime de undă cuprinsă între:',
 ['2 și 10 MHz, reflectate de globulele roșii; variația de frecvență e proporțională cu viteza particulelor','20–50 MHz, reflectate de peretele arterial, independent de viteză','0,2–0,5 kHz, fără interacțiune cu hematiile','100–200 kHz, utile doar pentru venele cave','Doar lumină infraroșie, ultrasunetele fiind abandonate'],'A',522,'Doppler — 2–10 MHz',
 'Recunoașterea ferestrei 2–10 MHz și a dependenței deplasării de frecvență de viteza hematiilor.',
 ['Intervalul 2–10 MHz, reflexia pe hematii și proporționalitatea cu viteza sunt explicite.','20–50 MHz nu este fereastra citată; semnalul depinde de viteză.','kHz-ul jos nu descrie sonda portabilă.','Fereastra e în MHz, nu 100–200 kHz, și nu e rezervată cavzelor.','Instrumentul este ultrasonografic, nu optic.']],
 8,'Mută 2–10 MHz pe decade vecine și rupe legătura hematii–viteză, capcana ferestrei de frecvență.',['2 şi 10 MHz','globulele roşii']),

q(55,['În prevenția reacțiilor la contrast și a ulcerului diabetic se recomandă:',
 ['La hipersensibilitatea cunoscută la contrast, steroizi și antihistaminice înainte de procedură, pentru a reduce incidența și gravitatea reacțiilor','Chestionarea atentă a statusului alergic înainte de angio-CT, RM, arteriografie sau venografie','La diabetic, program regulat de îngrijire a piciorului: tăierea unghiilor, încălțăminte ortopedică și îndepărtarea calusurilor','Steroizii se evită la alergic, contrastul necerând anamneză','Îngrijirea piciorului diabetic e superfluă, calusul protejând de ulcerație'],'ABC',523,'Contrast — Steroizi; piciorul diabetic',
 'Cuplarea premedicației steroizi/antihistaminice cu îngrijirea piciorului diabetic (unghii, ortopedie, calus).',
 ['Premedicația steroizi plus antihistaminice este explicită.','Chestionarea alergică înaintea celor patru imagistici este cerută.','Triada unghii/încălțăminte/calus este descrisă.','Steroizii se dau tocmai alergicilor cunoscuți.','Calusul se îndepărtează pentru a preveni ulcerația, nu se păstrează.']],
 8,'Interzice steroizii la alergic și transformă calusul în protecție, inversul celor două paragrafe de prevenție.',['steroizi şi antihistaminice','îndepă1iarea calusurilor']),

q(56,['Endarterectomia de arteră femurală comună, în BAP, se caracterizează prin:',
 ['Puțini pacienți cu boală aorto-iliacă sunt candidați pentru endarterectomie','Mulți chirurgi folosesc endarterectomia locală a arterelor femurale comune și profunde pentru a îmbunătăți fluxul unei proteze aortofemurale sau al unui bypass infrainghinal','Devine tot mai importantă în procedurile combinate, asociată cu stentarea iliacă sau cu aterectomia/stentarea AFS','Abordarea hibridă face întreaga intervenție mult mai puțin invazivă','Endarterectomia femurală înlocuiește de principiu bypassul, hibridul fiind abandonat'],'ABCD',525,'Endarterectomie femurală — Abord hibrid',
 'Poziționarea endarterectomiei CFA/PFA ca adjuvant de descărcare și ca piesă a hibridului iliac/AFS.',
 ['Raritatea candidaților aorto-iliaci este explicită.','Rolul de îmbunătățire a fluxului de proteză/bypass este citat.','Asocierea cu stent iliac sau aterectomie/stent AFS este descrisă.','Reducerea invazivității prin hibrid este enunțată.','Hibridul completează, nu înlocuiește, reconstrucția; textul îl consideră tot mai important.']],
 8,'Declară endarterectomia femurală substitut al bypassului și abandon al hibridului, inversul paragrafului de proceduri combinate.',['abordare hibridă','stentarea iliacă']),

q(57,['Profundoplastia, combinată cu endarterectomia femurală:',
 ['La durere ischemică de repaus, ocluzie AFS și stenoză proximală AFP, poate crește perfuzia prin colaterale și ameliora majoritatea simptomelor','Dacă ischemia a progresat la leziuni tisulare sau gangrenă, e puțin probabil ca profundoplastia singură să vindece ulcerațiile; e necesar un bypass arterial','Înlocuiește bypassul în gangrena de picior, colateralele AFP fiind suficiente','Este inutilă în durerea de repaus, fiind rezervată claudicației Framingham fără stenoză AFP','Leziunile tisulare se vindecă mai bine cu profundoplastie decât cu bypass'],'AB',525,'Profundoplastie — Repaus versus gangrenă',
 'Contrastarea utilității în durerea de repaus (colaterale AFP) cu insuficiența ei la pierderea de țesut.',
 ['Indicația (repaus + ocluzie AFS + stenoză AFP) și ameliorarea sunt explicite.','Insuficiența la ulcerație/gangrenă și nevoia de bypass sunt citate.','La gangrenă textul cere bypass, nu substitutul prin profundoplastie.','Indicația citată este tocmai durerea de repaus, nu claudicația benignă.','Ulcerațiile cer bypass, nu profundoplastie izolată.']],
 8,'Pune profundoplastia înaintea bypassului în gangrenă, inversul limitei de flux către picior.',['profundoplastia','leziuni tisulare sau gangrenă']),

q(58,['Complicațiile imediate ale intervenției de bypass arterial includ:',
 ['Sângerare postoperatorie de la nivelul anastomozelor','Tromboza grefonului','Infecția plăgilor','Limforagie cu formare de limfocel (colecție de lichid limfatic)','Complicațiile cardiopulmonare lipsesc, pacienții cu BAP neavând boală coronariană sau BPOC'],'ABCD',526,'Bypass — Complicații imediate',
 'Listarea tetradei imediate (sângerare, tromboză, infecție, limfocel) față de comorbiditatea cardiopulmonară asociată.',
 ['Sângerarea anastomotică este explicită.','Tromboza grefonului este citată.','Infecția plăgilor este listată.','Limforagia cu limfocel este descrisă.','Textul menționează tocmai complicații cardiopulmonare pe fond de BCI, IR sau BPOC.']],
 8,'Anulează tetrada chirurgicală imediată și neagă comorbiditatea cardiopulmonară, deși ambele stau în același paragraf.',['limfocel','tromboza grefonului']),

q(59,['Când AFS este ocluzată concomitent, descărcarea bypassului aortofemural:',
 ['Vasul principal de descărcare este artera femurală profundă (AFP)','Ocluzia protezei aortofemurale e de obicei cauzată de progresia bolii distale, care limitează descărcarea și fluxul prin proteză','Descărcarea se face prin AFS oclusă, AFP neavând rol','Ocluzia protezei ține de infecția de limfocel, nu de boala distală','Patența la 5 ani sub 30% face procedura abandonată, indiferent de AFP'],'AB',525,'Aortofemural — Descărcare pe AFP',
 'Recunoașterea AFP ca outflow când AFS e oclusă și a progresiei distale ca mecanism de ocluzie a protezei.',
 ['AFP ca vas principal de descărcare este explicită.','Progresia distală cu limitarea outflow-ului este mecanismul citat.','AFS oclusă nu poate descărca; textul mută rolul pe AFP.','Mecanismul ocluziei de proteză e boala distală, nu limfocelul.','Patența citată a aortofemuralului e >90% la 5 ani, nu sub 30%.']],
 8,'Mută outflow-ul pe AFS oclusă și coboară patența sub 30%, două capcane ale aceluiași paragraf de bypass.',['principal de descărcare','progresia bolii']),

q(60,['Revascularizarea la claudicant versus ischemia care pune în pericol membrul:',
 ['Claudicația poate fi tratată prin modificarea factorilor de risc, în special renunțarea la fumat și exerciții fizice; intervențiile se justifică de simptome debilitante care restricționează activitățile zilnice','Terapia endovasculară poate fi prima linie, rezervând procedurile invazive stadiilor mai avansate','Pentru durere de repaus, pierdere de țesuturi sau gangrenă, bypassul este adesea cea mai bună opțiune; tehnicile intervenționale se folosesc la riscul chirurgical ridicat','Bypassul deschis e prima linie la claudicația ușoară, fumatul neinfluențând indicația','Endovascularul e evitat în ischemia critică chiar la riscul chirurgical înalt, claudicația cerând de principiu bypass'],'ABC',527,'Claudicație versus pericol de membru',
 'Ierarhia conservator/endovascular la claudicant versus bypass la ischemia care amenință membrul.',
 ['Modificarea factorilor de risc și pragul simptomelor debilitante sunt explicite.','Endovascularul ca primă linie, cu rezerva invazivă, este citat.','Bypassul la pericolul de membru și endovascularul la riscul înalt sunt descrise.','Claudicația ușoară nu cere bypass de primă linie; fumatul e central.','Textul rezervă endovascularul tocmai pacientului cu risc înalt în ischemia critică.']],
 8,'Inversează ierarhia (bypass la claudicație ușoară, endovascular interzis în ischemia critică).',['renunţarea la fumat','pun în pericol membrele'],[526]),

q(61,['Ecografia Doppler în ischemia mezenterică cronică:',
 ['Este non-invazivă, evaluează fluxul visceral și evidențiază stenozele de la emergența vaselor principale','Este limitată de aerocolia marcată sau de calcificările semnificative; de aceea angio-CT sau angio-RM sunt cele mai indicate','Înlocuiește angiografia terapeutică, aerocolia îmbunătățind fereastra acustică','Calcificările cresc acuratețea Doppler, CT-ul fiind superfluu','Angiografia e abandonată, Doppler-ul recanalizând trunchiul celiac'],'AB',527,'Mezenteric — Doppler versus angio-CT/RM',
 'Contrastarea utilității Doppler la emergențe cu limitele aerocolie/calcificare care trimit spre CT/RM.',
 ['Caracterul non-invaziv și vizualizarea stenozelor de emergență sunt explicite.','Limitele aerocolie/calcificare și preferința CT/RM sunt citate.','Aerocolia limitează, nu îmbunătățește, Doppler-ul; angiografia rămâne pentru intervenții.','Calcificările reduc acuratețea.','Angiografia este folosită pentru intervenții, nu e abandonată.']],
 8,'Transformă aerocolia și calcificările în avantaje Doppler și abandonează angiografia, inversul indicației de CT/RM.',['aerocoliei marcate','calcificărilor']),

q(62,['Precizați enunțul corect privind revascularizarea chirurgicală mezenterică:',
 ['Chirurgii cu experiență revascularizează de rutină cel puțin două vase viscerale pentru o patență mai bună pe termen lung; grefa venoasă autologă se folosește când există risc crescut de infecție','Un singur vas e suficient, vena autologă înlocuind de principiu proteza, chiar fără risc infecțios','Endarterectomia proximală e abandonată, grefele sintetice fiind interzise','Revascularizarea unui singur vas maximizează patența, al doilea vas crescând infarctul','Vena autologă e evitată tocmai la riscul de infecție, sinteticele fiind rezervate sepsisului'],'A',527,'Mezenteric — Două vase și venă autologă',
 'Recunoașterea revascularizării a cel puțin două vase și a venei autologe rezervate riscului infecțios.',
 ['Cele două reguli (≥2 vase; venă doar la risc infecțios) sunt explicite.','Un singur vas nu e strategia citată; vena nu înlocuiește de principiu sinteticele.','Endarterectomia proximală și bypassul cu grefe sintetice rămân opțiuni.','Al doilea vas e pentru patență, nu pentru infarct.','Vena e tocmai pentru riscul de infecție, nu invers.']],
 8,'Reduce revascularizarea la un singur vas și inversează indicația venei autologe la infecție.',['cel puţin două vase viscerale','Grefa venoasă autologă']),

q(63,['Selectați enunțurile adevărate despre anatomia venoasă și apelul din 2008:',
 ['În 2008, chirurgul general al SUA a emis un „apel la acțiune” pentru reducerea deceselor prin TVP prevenibile','Sistemul venos central include venele cave inferioară și superioară, venele iliace și venele subclaviculare','Fluxul unidirecțional e asigurat de valve venoase bicuspide, care previn refluxul în ortostatism','Sistemul central e format doar din safene, valvele bicuspide lipind','Apelul din 2008 viza doar varicele estetice, fără profilaxie la pacientul chirurgical'],'ABC',534,'Vene — Apel 2008, sistem central, bicuspide',
 'Cuplarea apelului din 2008 cu definiția sistemului central și cu rolul valvelor bicuspide în ortostatism.',
 ['Apelul la acțiune din 2008 este explicit.','Cele patru teritorii ale sistemului central sunt listate.','Valvele bicuspide și prevenirea refluxului ortostatic sunt descrise.','Safenele țin de sistemul superficial periferic, nu de central.','Apelul vizează TVP prevenibilă la pacientul chirurgical, nu estetica varicelor.']],
 8,'Mută apelul din 2008 pe varicele estetice și golește sistemul central de cave/iliace, două ancore de pagină.',['apel la acţiune','valve venoase bicuspide']),

q(64,['Următoarele afirmații despre diagnosticul TVP sunt adevărate:',
 ['În mod normal, fluxul venos al membrelor inferioare scade cu inspirația, prin creșterea presiunii intraabdominale','Acuratețea Doppler e redusă la venele tibiale, din cauza dificultății de vizualizare a acestor vene mici în compartimentele musculare','CT de abdomen și pelvis cu contrast IV poate ajuta diagnosticul trombozei pelvine și a venei cave','Diagnosticul diferențial al edemului acut include traumatismele, ruptura de tendon plantar, infecția, limfangita, hematomul muscular și chistul Baker rupt','Inspirația crește fluxul venos de membru, venele tibiale având acuratețe Doppler superioară iliacei'],'ABCD',537,'TVP — Inspirație, tibiale, CT, Baker',
 'Aplicarea scăderii inspiratorii a fluxului, a limitei tibiale a Doppler-ului, a CT-ului pelvin/cav și a diagnosticului diferențial.',
 ['Scăderea fluxului cu inspirația prin presiune intraabdominală este explicită.','Reducerea acurateții la tibiale este citată.','Rolul CT abdomino-pelvin pentru pelvină/cavă este descris.','Lista de diagnostic diferențial, inclusiv chistul Baker rupt, este enunțată.','Direcția e inversă: inspirația scade fluxul; tibialele sunt mai greu de văzut.']],
 8,'Inversează răspunsul inspirator al fluxului și supraestimează Doppler-ul tibial, două capcane de fiziologie/acuratețe.',['scade cu inspiraţia','chistul Baker rupt']),

q(65,['Profilaxia TVP perioperatorie și contraindicațiile anticoagulării includ:',
 ['Măsuri mecanice (dispozitive de compresie segmentară intermitentă), mobilizare precoce și terapie farmacologică (heparină subcutanat sau warfarină)','Risc crescut: vârstă avansată, proceduri îndelungate, antecedente de TVP sau cancer','Contraindicații: diateze hemoragice, ulcere digestive, AVC recent, malformații arterio-venoase cerebrale, chirurgie recentă, hemofilie, supresie medulară post-chimioterapie','Profilaxia mecanică e superfluă, warfarina fiind inofensivă imediat postoperator, fără contraindicații','Cancerul și vârsta protejează de TVP, heparina subcutanată fiind evitată'],'ABC',538,'TVP — Profilaxie și contraindicații',
 'Reținerea triadului mecanic/mobilizare/farmacologic, a stratificării de risc și a listei de contraindicații.',
 ['Cele trei măsuri profilactice sunt explicite.','Cei patru factori de vulnerabilitate sunt citați.','Lista de contraindicații (diatheză, ulcer, AVC, MAV, chirurgie, hemofilie, mielosupresie) este descrisă.','Mecanicul e parte din profilaxie; contraindicațiile există.','Cancerul și vârsta cresc, nu scad, riscul.']],
 8,'Anulează stratificarea de risc și lista de contraindicații, deși stau în paragrafele de profilaxie și de warfarină.',['compresie segmentară intermitentă','ulcerere gastrointestinale']),

q(66,['Tratamentul inițial al insuficienței venoase cronice cu lipodermatoscleroză:',
 ['Ciorapi de contenție elastică; complianța e adesea slabă (lipsa beneficiului imediat, preț, discomfort)','La ulcerații, îngrijirea locală a plăgii și pansamente din trei sau patru straturi ca element compresiv','Dacă plaga nu se vindecă, dar refluxul și edemul sunt controlate, plastia cu piele liberă despicată poate conduce la vindecare','Ciorapii produc beneficiu imediat, complianța fiind maximă fără cost','Plastia cu piele se face înaintea controlului refluxului, pansamentele cu straturi fiind evitate'],'ABC',541,'CVI — Ciorapi, pansamente, piele despicată',
 'Ierarhia ciorapi (cu complianță slabă) → pansamente 3–4 straturi → piele despicată după controlul refluxului/edemului.',
 ['Ciorapii ca tratament inițial și cauzele complianței slabe sunt explicite.','Pansamentele din trei sau patru straturi sunt citate.','Condiția (reflux și edem controlate) a plastiei cu piele despicată este descrisă.','Textul leagă complianța slabă tocmai de absența beneficiului imediat și de cost/discomfort.','Pielea despicată urmează controlului refluxului, nu îl precede.']],
 8,'Inversează complianța ciorapilor și pune grefa de piele înaintea controlului refluxului.',['trei sau patru straturi','piele liberă despicată']),
];
