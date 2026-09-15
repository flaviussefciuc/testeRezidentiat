import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-59;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hernii',11,pdfOffset,`hernii-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const HERNII_B=[
q(9,['Anatomia peretelui abdominal central se caracterizează prin:',
 ['Linea alba rezultă din unirea mediană a fasciilor anterioară și posterioară ale dreptului abdominal','Teaca posterioară se întinde până imediat subombilical, unde se termină ca linea semilunaris (linia arcuată)','Sub linia arcuată, peretele central cuprinde doar dreptul abdominal și teaca anterioară','Lateral, straturile sunt oblic extern, oblic intern, transvers, apoi fascia transversalis și peritoneu','Fascia transversalis este stratul cel mai superficial, deasupra oblicului extern'],'ABCD',125,'Anatomie — Linea alba și linia arcuată',
 'Contrastarea tecii anterioare (xifoid–pube) cu terminarea tecii posterioare la linia arcuată și stratigrafia laterală.',
 ['Definiția linei alba este explicită.','Terminarea tecii posterioare imediat subombilical, ca linia arcuată, este citată.','Compoziția sub linia arcuată (drept + teacă anterioară) este enunțată.','Succesiunea oblic extern–intern–transvers–transversalis–peritoneu este descrisă.','Fascia transversalis este cel mai profund strat, sub transvers.']],
 8,'Inversează teaca anterioară cu cea posterioară și mută fascia transversalis la suprafață.',['linea semilunaris','linia arcuată']),

q(10,['Hernia Spiegel se caracterizează prin:',
 ['Apare la unirea marginii inferioare a fasciei posterioare cu marginea laterală a dreptului, la nivelul liniei arcuate','Se situează în cadranul inferior drept sau stâng și implică elementele posterioare; oblicul extern rămâne intact, deci hernia poate să nu fie vizibilă sau palpabilă','Este un defect al canalului femural, constant palpabil deasupra ligamentului ilioinghinal','Impune de principiu supraveghere, riscul de încarcerare fiind nul','Este identică diastazisului de drepți, fără defect parietal'],'AB',126,'Situații particulare — Hernia Spiegel',
 'Recunoașterea localizării la linia arcuată și a „ascunderii” sub oblicul extern intact.',
 ['Zona de unire la linia arcuată este definiția.','Cadranele inferioare, straturile posterioare și oblicul extern intact sunt explicite.','Canalul femural definește hernia femurală, nu Spiegel.','Nevizibilitatea nu anulează riscul de încarcerare.','Diastazisul nu are defect; Spiegel are defect posterior.']],
 8,'Tratează Spiegel ca diastazis sau ca hernie femurală, două entități vecine din același capitol.',['hernia Spiegel','liniei arcuate']),

q(11,['Herniile parastomale se caracterizează prin:',
 ['Apar după incizia fasciei pentru stomă, cu herniere în jurul acesteia, și pot afecta funcția stomei','Opțiunile includ reparație laparoscopică sau deschisă, precum și relocarea stomei într-o zonă indemnă','Sunt hernii obținute congenital, fără legătură cu stoma','Nu influențează funcția stomei și nu se repară','Relocarea stomei este contraindicată, unica opțiune fiind supravegherea'],'AB',126,'Herniile parastomale',
 'Recunoașterea mecanismului (defectul de stomă) și a opțiunilor de reparație versus relocare.',
 ['Definiția și impactul asupra funcției stomei sunt explicite.','Tehnicile laparoscopic/deschis și relocarea sunt listate.','Sunt dobândite după stomă, nu congenitale.','Textul precizează că pot afecta funcția stomei.','Relocarea într-o zonă indemnă este o opțiune.']],
 8,'Transformă hernia parastomală într-o entitate congenitală și exclude relocarea, menționată explicit.',['Herniile parastomale','relocarea stomei']),

q(12,['Vascularizația peretelui abdominal:',
 ['Zona centrală este alimentată de vasele epigastrice superioare și inferioare, cu traiect cranio-caudal prin dreptul abdominal','Perforantele tegumentului sunt ramuri ale epigastricelor care se exteriorizează anterior pe lungimea dreptului','Porțiunea laterală este alimentată de ramuri segmentare cu traiect de la lateral spre medial','Zona centrală este alimentată doar de artera femurală, fără epigastrice','Perforantele lipsesc, tegumentul depinzând de pediculul iliopsoas'],'ABC',125,'Vascularizație și inervație',
 'Diferențierea axului epigastric central de ramurile segmentare laterale.',
 ['Epigastricele superioare și inferioare definesc axul central.','Perforantele din epigastrice sunt descrise.','Ramurile segmentare laterale sunt explicite.','Artera femurală nu este axul central.','Perforantele există și vascularizează tegumentul.']],
 8,'Înlocuiește axul epigastric cu artera femurală, o confuzie de pedicul de lambou.',['epigastrice superioare','ramuri segmentare']),

q(13,['Poziționarea plasei în herniorafia ventrală include:',
 ['Onlay, la suprafața musculaturii, ca întărire a suturii primare','Underlay preperitoneal, peritoneul protejând viscerele de eroziune','Plasă de substituție (punte) când marginile nu pot fi apropiate','Onlay intraperitoneal în contact direct cu ansele, ca poziție cea mai sigură față de eroziune','Plasa biologică este evitată în contaminare, sintentica non-absorbabilă fiind preferată acolo'],'ABC',129,'Poziționarea plasei — Onlay, underlay, punte',
 'Contrastarea onlay / underlay preperitoneal / punte față de contactul intraperitoneal neprotejat.',
 ['Onlay-ul de întărire este primul mod descris.','Underlay preperitoneal reduce eroziunea prin peritoneu.','Puntea de substituție este indicată la defecte nereductibile.','Contactul intraperitoneal direct crește riscul de eroziune; există plase dedicate, dar nu este „cea mai sigură”.','Biologicele/absorbabilele sunt preferate în contaminare.']],
 8,'Inversează riscul eroziv intraperitoneal și alegerea plasei în câmp contaminat.',['manieră „onlay"','spaţiul preperitoneal']),

q(14,['Tehnica de separare anterioară a componentelor:',
 ['Este rezervată herniilor mari, complexe, mediane, inclusiv recidivelor','Presupune disecția laterală a aponevrozei oblicului extern; se pot obține 10–12 cm de țesut către linia mediană','Se poate asocia cu plasă preperitoneală underlay ca barieră anti-eroziune','Realizează 1–2 cm, insuficienți pentru defectele mediane','Incizia oblicului intern, nu a aponevrozei oblicului extern, este manevra descrisă'],'ABC',129,'Separarea componentelor',
 'Aplicarea indicației (hernii mediane mari) și a câștigului de 10–12 cm prin eliberarea oblicului extern.',
 ['Rezervarea pentru hernii mari mediane/recidive este explicită.','Incizia aponevrozei oblicului extern și 10–12 cm sunt citate.','Asocierea cu underlay preperitoneal este menționată.','Câștigul citat este 10–12 cm, nu 1–2 cm.','Manevra vizează oblicul extern, nu internul.']],
 8,'Coboară câștigul de 10–12 cm la 1–2 cm și mută incizia pe oblicul intern.',['I 0-12 cm','oblic extern']),

q(15,['Comparând abordul minim-invaziv cu cel deschis în hernia ventrală:',
 ['Minim-invazivul reduce morbiditatea, spitalizarea și infecțiile de plagă, dar cere anestezie generală și adezioliză pentru camera de lucru','Abordul deschis are timp operator mai redus, poate evita relaxarea musculară/anestezia generală și este preferat când e nevoie de excizie de piele sau revizuire de cicatrice','Minim-invazivul elimină nevoia de anestezie generală și de adezioliză','Abordul deschis crește infecțiile de plagă mai puțin decât laparoscopia, fiind preferat pentru acest motiv','Trocarele se plasează pe defectul herniar, disecția aderențelor fiind superfluă'],'AB',129,'Abord minim-invaziv versus deschis',
 'Contrastarea reducerii IPC în MIS cu avantajele deschisului (timp, anestezie, excizie de piele).',
 ['Beneficiile MIS și costul (AG, adezioliză) sunt explicite.','Timpul mai scurt, evitarea AG și indicația de revizuire cutanată definesc deschisul.','MIS cere AG și adezioliză.','Reducerea IPC este avantajul principal al MIS, nu al deschisului.','Trocarele se plasează adesea la distanță de hernie.']],
 8,'Inversează avantajul de IPC și nevoia de anestezie generală între MIS și deschis.',['infecţiilor de plagă','anestezia generală'],[130]),

q(16,['Recidiva după herniorafie este favorizată de:',
 ['Abdomen cicatricial, obezitate, vârstă, fumat, status funcțional, tuse cronică sau efort fizic intens','Simptomele noi sau recurente impun reevaluare; dacă examenul este neconcludent, ecografie sau CT','Recidiva este imposibilă după plasă, imagistica fiind superfluă','Fumatul și obezitatea protejează de recidivă','Tusea cronică nu influențează riscul, fiind un factor doar respirator'],'AB',131,'Recidiva postoperatorie',
 'Listarea factorilor de risc de recidivă și a indicației de imagistică la simptome noi.',
 ['Lista de factori este explicită.','Reevaluarea și ecografia/CT la examen neconcludent sunt cerute.','Toate herniile au potențial de recidivă.','Obezitatea și fumatul cresc riscul.','Tusea cronică este listată ca factor.']],
 8,'Anulează potențialul de recidivă după plasă și inversează rolul fumatului/obezității.',['obezitatea, vârsta, fumatul','tuse cronică']),

q(17,['Limitele orificiului miopectineal Fruchaud sunt:',
 ['Inferior: linia pectineală (ligamentul Cooper) pe ramul pubian superior','Lateral: marginea medială a iliopsoasului','Superior: fibrele transversului și oblicului intern; medial: dreptul abdominal','Tendonul conjunct, prezent în 3–6% din cazuri, se inseră pe tuberculul pubic','Inferior: ligamentul inghinal, fără raport cu Cooper'],'ABCD',131,'OMP — Limite anatomice',
 'Recunoașterea celor patru limite și a tendonului conjunct (3–6%).',
 ['Cooper/linia pectineală este limita inferioară.','Iliopsoasul medial este limita laterală.','Arcadă musculară superior și dreptul medial completează cadranul.','Tendonul conjunct în 3–6% este precizat.','Limita inferioară este Cooper, nu ligamentul inghinal ca substitut.']],
 8,'Înlocuiește ligamentul Cooper cu ligamentul inghinal ca limită inferioară, o confuzie de reper clasică.',['ligamentul lui Cooper','3-6% dintre cazuri']),

q(18,['Spațiile orificiului miopectineal se diferențiază astfel:',
 ['Ligamentul ilioinghinal (Poupart) împarte OMP: inferior canalul femural, superior canalul inghinal','Hernia femurală trece prin „spațiul gol” dintre nerv și limfaticele femurale','Herniile directe și indirecte ocupă spațiul superior (canalul inghinal)','OMP conține un strat muscular gros, identic peretelui abdominal anterolateral','Canalul femural este locul herniilor directe, nu al celor femurale'],'ABC',131,'Spațiile OMP',
 'Împărțirea de către Poupart în spațiu femural versus canal inghinal (direct/indirect).',
 ['Împărțirea de ligamentul ilioinghinal este explicită.','Spațiul gol ca loc al herniei femurale este citat.','Directa și indirecta stau deasupra ligamentului.','OMP nu conține strat muscular, spre deosebire de peretele abdominal.','Canalul femural este locul herniei femurale.']],
 8,'Mută hernia directă în canalul femural și atribuie OMP un strat muscular inexistent.',['ligamentul ilioinghinal','spaţiu femural']),

q(19,['Identificați afirmația corectă privind procedeul McVay (Tabelul 11.1):',
 ['Suturează tendonul conjunct la ligamentul Cooper și, lateral, la ligamentul ilioinghinal; este procedeul tisular folosit și pentru hernia femurală; cere incizie de relaxare','Suturează tendonul conjunct doar la ilioinghinal și nu se folosește pentru hernia femurală, ca Bassini','Este considerat fără tensiune, identic Shouldice, fără relaxare','Nu acoperă hernia femurală, fiind rezervat doar recidivelor ombilicale','Plasa Lichtenstein înlocuiește McVay în câmpul contaminat, tisularul fiind standardul în câmp curat'],'A',135,'Tabelul 11.1 — McVay, Bassini, Shouldice',
 'Diferențierea McVay (Cooper, inclusiv femurală, cu relaxare) de Bassini/Shouldice (fără femurală).',
 ['Sutura la Cooper, indicația femurală și incizia de relaxare sunt tabelate.','Sutura doar la ilioinghinal fără femurală descrie Bassini, nu McVay.','Fără tensiune și fără femurală descrie Shouldice.','McVay este tocmai procedeul tisular pentru femurală.','Proteza este standardul în câmp curat; tisularul se rezervă contaminării.']],
 8,'Confundă McVay cu Bassini/Shouldice pe coloana „tipuri de hernii” a aceluiași tabel.',['McVay','ligamentul Cooper']),

q(20,['Nervii lezați în cura OMP se caracterizează prin:',
 ['Nervul ilioinghinal traversează canalul de-a lungul funiculului/ligamentului rotund; durerea iradiază spre scrot/labii, se agravează la șezut prelungit și este mai frecvent lezat în abord deschis, neieșind prin inelul intern','Nervul genitofemural trece prin inelul intern și este lezat mai ales în abordul minim-invaziv','Nervul cutanat lateral femural produce amorțeală pe fața anterolaterală a coapsei','Ilioinghinalul trece prin inelul intern și este lezat tipic laparoscopic, nu deschis','Genitofemuralul nu trece prin inelul intern, fiind lezat doar în diastazis'],'ABC',136,'Durere cronică — Nervii OMP',
 'Maparea celor trei nervi pe abord deschis versus MIS și pe teritoriul senzitiv.',
 ['Traiectul ilioinghinal, iradierea scrotală/labială și predilecția abordului deschis sunt explicite.','Trecerea genitofemuralului prin inelul intern și lezarea MIS sunt citate.','Teritoriul anterolateral al coapsei definește cutanatul lateral femural.','Ilioinghinalul NU trece prin inelul intern.','Genitofemuralul trece tocmai prin inelul intern.']],
 8,'Inversează care nerv trece prin inelul intern și, deci, care abord îl lezează.',['nervul ilioinghinal','inelul inghinal intern']),

q(21,['Orhita după cura herniei OMP:',
 ['Este mai frecventă în cura recidivei, plexul pampiniform fiind deja compromis de cicatrice','Simptomele (testicul tumefiat, sensibil) se diferențiază de inflamația obișnuită; AINS sunt de obicei suficiente','Devascularizarea completă este mai puțin obișnuită datorită colateralelor; totuși, atrofia testiculară poate urma circulației compromise','Orhita impune orhidectomie de principiu în primele 24 de ore','Colateralele lipsesc, deci orice edem scrotal postoperator echivalează cu infarct testicular'],'ABC',136,'Complicații — Orhita',
 'Recunoașterea predilecției pentru recidivă, a conduitei cu AINS și a atrofiei tardive versus infarctul rar.',
 ['Predilecția pentru recidivă și plexul pampiniform sunt explicite.','Diferențierea de inflamația obișnuită și AINS sunt descrise.','Colateralele și riscul de atrofie sunt menționate.','Orhidectomia nu este conduita de primă intenție.','Colateralele există; edemul scrotal imediat este adesea așteptat.']],
 8,'Transformă orhita autolimitată în indicație de orhidectomie și neagă circulația colaterală.',['Orhita','plexul venos pampiniform']),

q(22,['Inghinodinia („hernia sportivului”) se caracterizează prin:',
 ['Este cauzată de obicei de tensiune la adductorii inserați pe pubis; anamneza include senzație de ruptură la efort, tuse sau accelerație','Durerea se agravează la activitate și se atenuează la odihnă, dar revine la reluarea efortului','Diagnosticul diferențial (Tabelul 11-2) include osteita pubiană, patologia de șold, cauze genitourinare și gastrointestinale','Este identică herniei femurale încarcerate și se operează de urgență ca atare','Absența formațiunii inghinale exclude orice cauză musculo-tendinoasă'],'ABC',136,'Sindromul durerii inghinale pubiene',
 'Separarea pubalgiei de efort de hernia adevărată și recunoașterea diagnosticului diferențial larg.',
 ['Tensiunea adductorilor și contextul de efort sunt definiția.','Patternul efort–odihnă–reluare este descris.','Tabelul 11-2 listează sportive, șold, GU și GI.','Nu este o hernie femurală încarcerată.','Absența formațiunii este tocmai cadrul clinic al inghinodiniei.']],
 8,'Operează pubalgia ca hernie femurală strangulată, capcana clasică a „herniei sportivului”.',['hernia sportivului','inghinodiniei']),

q(23,['Hernia obturatorie se caracterizează prin:',
 ['Defect al planșeului pelvin la canalul obturator, inferior de OMP, de obicei cu intestin subțire','Tabloul clasic: femeie ~70 de ani, emaciată, multipară, cu colici și durere pe fața medială a coapsei („mica hernie a femeii bătrâne”)','Semnul Howship-Romberg: exacerbarea durerii prin rotație medială a coapsei','Este cea mai frecventă hernie a bărbatului tânăr și se palpează constant în canalul inghinal','Semnul Howship-Romberg o exclude, rotația coapsei fiind nedureroasă'],'ABC',137,'Hernia obturatorie',
 'Recunoașterea profilului „femeii bătrâne emaciate” și a semnului Howship-Romberg.',
 ['Localizarea la canalul obturator, inferior OMP, este explicită.','Profilul epidemiologic și eponimul sunt citate.','Howship-Romberg este definit prin rotația medială.','Este rară, la femeia vârstnică, nu la bărbatul tânăr.','Howship-Romberg este pozitiv, nu un semn de excludere.']],
 8,'Mută hernia obturatorie pe bărbatul tânăr și inversează semnul Howship-Romberg.',['Howship-Romberg','femeii bătrâne']),

q(24,['Diagnosticul herniei obturatorii:',
 ['Este dificil, cu prezentare intermitentă; în acut poate asocia ocluzie de intestin subțire','Parestezii sau durere intensă pe fața anteromedială a coapsei; rar, formațiune moale la tușeu rectal','Diagnosticul se face de obicei prin CT sau intraoperator, la laparotomia pentru ocluzie','Herniile obturatorii asimptomatice depistate la MIS pentru OMP se repară, de regulă, independent, ca urgență','Examenul clinic palpează constant defectul în ortostatism, CT-ul fiind superfluu'],'ABC',137,'Hernia obturatorie — Diagnostic',
 'Aplicarea suspiciunii înalte, a CT/intraoperatorului și a faptului că cele asimptomatice nu se rezolvă independent.',
 ['Dificultatea diagnosticului și ocluzia acută sunt explicite.','Teritoriul anteromedial și tușeul rectal rar pozitiv sunt descrise.','CT sau descoperirea intraoperatorie sunt calea uzuală.','Textul precizează că nu se rezolvă independent, ci odată cu ocluzia.','Palparea este rară; diagnosticul este imagistic sau intraoperator.']],
 8,'Transformă hernia obturatorie asimptomatică într-o urgență independentă, contrar ultimei fraze a paragrafului.',['tomografie computerizată','ocluzii a intestinului']),

q(25,['Herniile ventrale, ombilicale și incizionale se deosebesc prin:',
 ['Ventralele primare nu sunt asociate cu o incizie anterioară și stau pe linia mediană, supra- sau subombilical','Ombilicalele protruzionează tegumentul ombilical','Incizionalele se dezvoltă pe locul unor incizii anterioare, oriunde pe perete','Ventralele primare apar doar pe locul unei laparotomii anterioare','Ombilicala este un diastazis, fără defect, deci fără indicație de evaluare'],'ABC',125,'Tipuri de hernii ale peretelui',
 'Diferențierea herniei ventrale primare de ombilicală și de incizională.',
 ['Definiția ventralei primare (fără incizie, mediană) este explicită.','Protruzia ombilicală definește ombilicala.','Incizionala pe cicatrice, oriunde, este citată.','Incizionala, nu primara, stă pe locul laparotomiei.','Ombilicala are defect; diastazisul este entitatea fără defect.']],
 8,'Confundă ventrala primară cu incizionala și ombilicala cu diastazisul.',['Herniile ventrale','Herniile incizionale']),

q(26,['Neuropatiile după herniorafia ventrală:',
 ['Se manifestă ca parestezii, furnicături și hiperestezie; de obicei sunt limitate, unii pacienți necesitând injecții locale, steroizi și medicație specifică','Aceste complicații sunt mult mai semnificative după herniile OMP decât după cele ventrale','Sunt invariabil ireversibile și impun reintervenție cu explantarea plasei în 24 de ore','Nu apar după OMP, fiind specifice doar diastazisului','Hipoestezia de incizie lipsește în abordul deschis al OMP'],'AB',130,'Neuropatii postoperatorii',
 'Recunoașterea caracterului adesea limitat și a predominanței după OMP.',
 ['Simptomele și conduita conservatoare inițială sunt descrise.','Predominanța după OMP este explicită.','Reintervenția urgentă cu explant nu este conduita de primă linie.','Textul le leagă mai ales de OMP.','Hipoestezia de incizie este frecventă în abordul deschis al OMP.']],
 8,'Transformă neuropatia limitată în indicație de explant la 24 de ore și inversează predominanța OMP versus ventrală.',['parestezii','herniile de OMP'],[136]),

q(27,['Selectați enunțurile adevărate despre echimozele scrotale/labiale după cura OMP:',
 ['Tumefacția și echimozele pot apărea la distanță de inciziile vizibile și pot alarma pacientul','Echimoza scrotală semnalează recidiva precoce și impune reintervenție în 4–6 ore','Absența echimozelor exclude lezarea ilioinghinalului','Suportul scrotal agravează orhita și este evitat','Echimoza labială este patognomonică pentru hernia obturatorie'],'A',134,'Complicații imediate — Echimoze scrotale',
 'Normalizarea echimozelor la distanță față de reintervenția inutilă.',
 ['Apariția la distanță și caracterul alarmant sunt explicite.','Echimoza nu definește recidiva și nu cere urgență de 4–6 ore.','Ilioinghinalul se recunoaște prin teritoriul senzitiv, nu prin echimoză.','Un suport scrotal poate ameliora simptomele, nu precipită orhita.','Echimoza labială este o consecință a disecției OMP, nu un semn de obturatorie.']],
 8,'Tratează echimoza scrotală așteptată ca recidivă de urgență, o confuzie cu fereastra 4–6 ore a încarcerării.',['echimoze pe scrot','suport scrotal'],[135]),

q(28,['Care dintre următoarele afirmații privind OMP ca volum tridimensional sunt adevărate?',
 ['OMP nu este un plan, ci un cilindru; forma se schimbă între perspectiva anterioară (oval) și cea posterioară (patrulater)','Această dualitate explică de ce abordul deschis și cel MIS „văd” altfel aceleași spații','OMP este un plan plat, identic din anterior și posterior','Cilindrul OMP conține mușchiul drept pe toată circumferința','Perspectiva posterioară este identică celei anterioare, TEP neaducând informație anatomică nouă'],'AB',131,'OMP — Geometrie',
 'Recunoașterea OMP ca cilindru cu aspect oval anterior și patrulater posterior.',
 ['Cilindrul și schimbarea oval/patrulater sunt explicite.','Consecința asupra abordului deschis versus MIS este enunțată.','Textul neagă caracterul de plan.','OMP nu conține strat muscular.','Cele două perspective diferă tocmai de aceea.']],
 8,'Aplatizează cilindrul OMP într-un plan unic, anulând rațiunea anatomică a TEP/TAPP.',['nu este un plan','un cilindru']),
];
