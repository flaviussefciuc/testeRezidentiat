import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p<=142?p-60:p-68;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('esofag',12,pdfOffset,`esofag-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const ESOFAG_B=[
q(7,['Cartografierea endoscopică și segmentele esofagului includ:',
 ['Esofagul începe la aproximativ 15 cm de arcada dentară și se termină la aproximativ 40 cm','Cervicalul măsoară 3–5 cm, toracicul proximal+mijlociu 18–22 cm, abdominalul distal 3–6 cm','Traheea și atriul stâng sunt anterioare; aorta coboară pe stânga, apoi trece posterior de esofag prin diafragm','Originea endoscopică este la 5 cm de AD, iar esofagul abdominal măsoară 18–22 cm','Aorta dreaptă impune abord prin toracotomie stângă ca regulă'],'ABC',140,'Anatomie — Segmente și reper endoscopic',
 'Aplicarea reperelor 15–40 cm de AD și a lungimilor 3–5 / 18–22 / 3–6 cm, plus vecinătățile mediastinale.',
 ['Cele 15 și 40 cm sunt explicite.','Cele trei lungimi de segment sunt citate.','Traheea, atriul stâng și traiectul aortei sunt descrise.','15 cm, nu 5 cm, e startul; 18–22 cm e toracicul, nu abdominalul.','Aorta pe stânga impune abord drept, nu stâng.']],
 8,'Permutează lungimile de segment și inversează partea toracotomiei.',['15 cm de','40 cm de AD']),

q(8,['Vascularizația arterială a esofagului se caracterizează prin:',
 ['Cervicalul e irigat de artera tiroidiană inferioară (trunchi tirocervical)','Toracicul e alimentat de arterele bronșice și de arterele esofagiene mici din aorta toracică','Distalul e vascularizat de ramuri ale arterei gastrice stângi','Limfaticele cervicale merg în ganglionii cervicali profunzi (jugulari); toracicul în paratraheali și hilari; distalul în celiaci, gastrici stângi și parahiatali','Cervicalul e irigat de artera gastrică stângă, iar distalul de tiroidiana inferioară'],'ABCD',140,'Vascularizație și limfatice',
 'Maparea etajelor arterial (tiroidiană inf. / bronșice / gastrică stângă) pe stațiile limfatice corespunzătoare.',
 ['Tiroidiana inferioară este explicită.','Bronșicele și esofagienele aortice sunt citate.','Gastrica stângă distală este descrisă.','Cele trei stații limfatice sunt enumerate.','Direcția arterială cervical versus distal este inversată.']],
 8,'Inversează pediculul cervical (tiroidiană inf.) cu cel distal (gastrică stângă).',['tiroidiană inferioară','gastrice stângi']),

q(9,['Drenajul venos esofagian relevant pentru varice include:',
 ['Toracicul drenează prin azygos și hemiazygos','Distalul drenează prin vena coronariană gastrică și vena gastrică stângă în sistemul port','În HTP, plexul esofagian inferior leagă portul de azygos, cu risc de varice','Cervicalul drenează prin vena tiroidiană inferioară','Distalul evită sistemul port, vărsându-se doar în cava superioară'],'ABCD',140,'Drenaj venos și varice',
 'Recunoașterea punții port–azygos prin plexul esofagian inferior ca substrat al varicelor din ciroză.',
 ['Azygos/hemiazygos sunt explicite.','Traiectul coronariană–gastrică stângă–port este citat.','Mecanismul varicelor este descris.','Drenajul cervical prin tiroidiana inferioară este menționat.','Distalul se varsă în port, nu evită sistemul port.']],
 8,'Scoate esofagul distal din teritoriul port, anulând tocmai substratul varicelor.',['sistemul venos portal','varicelor esofagiene']),

q(10,['Histologia esofagului se deosebește de restul tubului digestiv prin:',
 ['Absența seroasei; peretele are mucoasă, submucoasă, muscularis propria (circular intern, longitudinal extern) și adventice','Musculara: fibre striate în 1/3 proximală și netede în 2/3 distale','Căptușeala normală este epiteliu scuamos stratificat nekeratinizant','EUS distinge cinci zone, corelate cu cele două straturi ale mucoasei plus submucoasă, musculară și adventice','Esofagul are seroasă completă, musculară netedă pe toată lungimea și epiteliu cubic simplu'],'ABCD',141,'Histologie și EUS',
 'Reținerea absenței seroasei, a disocierii striat/neted pe treimi și a celor cinci straturi EUS.',
 ['Cele patru straturi și lipsa seroasei sunt explicite.','1/3 striat vs 2/3 neted este citat.','Epiteliul scuamos nekeratinizant este descris.','Cele cinci zone EUS sunt enumerate.','Seroasa lipsește; musculara nu e netedă pe tot; epiteliul nu e cubic.']],
 8,'Atribuie esofagului seroasă și musculară netedă pe toată lungimea, două particularități pe care textul le neagă.',['nu prezintă un strat seros','1/3 proximală']),

q(11,['Presiunile de repaus și peristaltismul esofagian se caracterizează prin:',
 ['SES 30–120 mm Hg, SEI 15–30 mm Hg; restul esofagului e relaxat în repaus','Deglutiția voluntară (nucleul ambiguu) relaxează temporar SES; unda primară propulsează bolusul; SEI se relaxează anticipativ','Undele secundare sunt de rezervă, la dilatare, iritație sau obstacol rezidual','Undele terțiare sunt ne-propulsive, de „fibrilație” esofagiană','SEI are 80–120 mm Hg în repaus, iar undele terțiare sunt peristaltismul normal de deglutiție'],'ABCD',142,'Fiziologie — SES, SEI, unde peristaltice',
 'Aplicarea intervalelor 30–120 / 15–30 mm Hg și a ierarhiei primar–secundar (rezervă)–terțiar (nepropulsiv).',
 ['Cele două intervale de presiune sunt explicite.','Secvența nucleu ambiguu–SES–primară–SEI este descrisă.','Rolul de rezervă al secundarelor este citat.','Caracterul nepropulsiv al terțiarelor este menționat.','15–30 mm Hg e SEI, nu 80–120; terțiarele nu sunt deglutiția normală.']],
 8,'Permutează presiunea SEI cu cea a SES și declară terțiarele ca peristaltism fiziologic.',['30-120 mm Hg','15-30 mm Hg']),

q(12,['Esofagul Barrett constă în:',
 ['Transformarea epiteliului scuamos normal al esofagului distal în celule columnare intestinale metaplazice, sub refluxul gastric din BRGE','Metaplazie gastrică oxintică a întregului esofag cervical, independent de reflux','O ulcerație caustică de grad III, fără metaplazie','O leiomiomatoză difuză a musculei striate proximale','Un diverticul de pulsiune al mușchiului cricofaringian'],'A',141,'Esofag Barrett',
 'Recunoașterea metaplaziei scuamos → columnar intestinal distal ca leziune de BRGE.',
 ['Definiția metaplaziei intestinale pe fond de BRGE este explicită.','Mucoasa oxintică este a stomacului proximal, nu o metaplazie cervicală.','Barrett nu este o arsură caustică.','Leiomiomul este o tumoră musculară, nu metaplazie.','Zenker-ul este un diverticul, nu Barrett.']],
 8,'Confundă Barrett-ul cu Zenker, caustic sau mucoasă oxintică gastrică.',['esofagul Barrett','celule columnare intestinale']),

q(13,['Gastroplastia Collis, când esofagul e scurtat și retras în torace prin BRGE cronică, prelungește esofagul cu aproximativ:',
 ['5 cm, prin secționarea fornixului gastric, creând un neo-esofag','1 cm, prin plicatura Nissen de 360°','15 cm, prin interpoziție de colon retrosternală','25 cm, egalând lungimea întregului esofag','8 cm, prin miotomie Heller pe stomac'],'A',151,'BRGE — Gastroplastia Collis',
 'Recunoașterea alungirii de ~5 cm din fornix ca soluție a esofagului scurt, distinct de Nissen și de Heller.',
 ['Cifra de aproximativ 5 cm și secționarea fornixului sunt explicite.','Nissen este o fundoplicatură 360°, nu o alungire de 1 cm.','Interpoziția colică ține de caustic/esofagectomie, nu de Collis.','25 cm este lungimea esofagului, nu a plastiei.','Heller este pentru achalazie, nu pentru esofag scurt.']],
 8,'Permutează Collis (5 cm din fornix) cu Nissen, Heller sau interpoziția colică.',['5 cm','gastro￾plastia Collis']),

q(14,['Fundoplicatura Nissen se caracterizează prin:',
 ['Învelire completă de 360° a esofagului distal cu o porțiune din fornix, pentru compresie externă care ajută competența SEI','Poate fi realizată laparoscopic','Este o miotomie a SEI, identică Heller, fără fundoplicatură','Se face prin toracotomie stângă de principiu, laparoscopia fiind contraindicată','Înlocuiește esofagectomia Ivor Lewis în adenocarcinomul T4'],'AB',151,'Fundoplicatura Nissen',
 'Recunoașterea învelirii 360° din fornix ca procedură antireflux, distinctă de miotomia Heller și de esofagectomie.',
 ['360° și mecanismul pe SEI sunt explicite.','Imaginile laparoscopice atestă fezabilitatea.','Heller este miotomie, Nissen este fundoplicatură.','Laparoscopia este ilustrată, nu contraindicată.','Nissen nu înlocuiește esofagectomia oncologică.']],
 8,'Confundă Nissen-ul 360° cu miotomia Heller sau cu esofagectomia.',['360°','Fundoplicatura Nissen']),

q(15,['Abordul transhiatal al esofagectomiei se caracterizează prin:',
 ['Două incizii: abdominală și cervicală; esofagul mediotoracic se disecă manual, boant și orb','Avantaje: evită toracotomia dureroasă, trauma pulmonară și anastomoza intratoracică','Dezavantaje: rezecție limitată a tumorilor mari mediotoracice, însămânțare, tensiune/ischemie a anastomozei cervicale cu risc de fistulă','Pare ideal pentru tumorile distale, ca în degenerarea Barrett','Este superior dovedit Ivor Lewis în toate studiile, fără dezavantaje de fistulă'],'ABCD',154,'Esofagectomie transhiatală',
 'Cântărirea evitării toracotomiei față de disecția oarbă și de tensiunea anastomozei cervicale, cu indicația predilectă distală.',
 ['Cele două incizii și disecția boantă sunt explicite.','Cele trei avantaje sunt enumerate.','Dezavantajele (limitare, însămânțare, fistulă) sunt citate.','Indicația distală/Barrett este menționată.','Textul precizează că nu există studiu definitiv de superioritate.']],
 8,'Declară transhiatalul superior absolut, ignorând absența studiului comparativ și riscul de fistulă.',['transhiatal','disecţie manuală'],[155]),

q(16,['Protocolul neoadjuvant frecvent citat în cancerul esofagian rezecabil avansat include:',
 ['5-fluorouracil și cisplatină plus iradiere externă de 45 Gy timp de 6–7 săptămâni, urmate de rezecție la o lună după terminarea tratamentului','Beneficiul cel mai mare de supraviețuire apare la răspunsul complet (fără celule tumorale reziduale în piesă)','Utilizarea rămâne controversată, cu cost de morbiditate perioperatorie și întârziere a chirurgiei','Radiochimioterapia neoadjuvantă se evită, chirurgia unică fiind superioară în toate studiile randomizate','Doza de iradiere citată este 10 Gy într-o singură ședință, fără chimioterapie'],'ABC',155,'Terapie neoadjuvantă',
 'Aplicarea schemei 5-FU + cisplatină + 45 Gy / 6–7 săptămâni și a ferestrei de o lună până la rezecție.',
 ['Schema și calendarul sunt explicite.','Răspunsul complet ca cel mai mare beneficiu este citat.','Controversa și costul de morbiditate/întârziere sunt descrise.','Multiple RCT arată îmbunătățire vs chirurgia unică, deși nu toate.','45 Gy în 6–7 săptămâni, nu 10 Gy unic.']],
 8,'Reduce schema la 10 Gy fără chimio și neagă RCT-urile pozitive.',['45 Gy','6-7 săptămâni'],[156]),

q(17,['Paliația disfagiei din cancerul esofagian terminal include:',
 ['Stenturi metalice expandabile, cu efect imediat, dar risc de migrare, impactare și perforație; distal pot da reflux','Dilatația (bougie/balon) dă ameliorare imediată, de scurtă durată, cu risc de perforație','Radiochimioterapia paliativă e mai durabilă, dar răspunsul apare după săptămâni','Laserul are risc ridicat de perforație; PDT are penetrare limitată, deci perforație mai rară dar excizie limitată','Chirurgia paliativă de rezecție este regula, stenturile fiind abandonate'],'ABCD',156,'Tratament paliativ',
 'Contrastul imediat (stent/dilatație/laser) versus durabil-dar-lent (radiochimio) și al riscului de perforație.',
 ['Stenturile expandabile și complicațiile sunt explicite.','Dilatația scurtă cu risc de perforație este citată.','Întârzierea de săptămâni a RT/CT este descrisă.','Laser vs PDT sunt comparate.','Chirurgia paliativă e rar indicată datorită tehnicilor endoscopice.']],
 8,'Restaurează rezecția paliativă ca regulă, contrar frazei că chirurgia e rar indicată.',['stenturi metalice','câteva săptămâni']),

q(18,['În achalazie, semnul radiologic clasic și manometria arată:',
 ['„Cioc de pasăre”: obstrucție conică progresivă la SEI pe tranzitul baritat','Eșecul relaxării SEI la deglutiție plus absența peristalticii normale','Endoscopia exclude pseudoachalazia (carcinom distal)','Nitrații și CCB oferă ameliorare de durată la aproape toți pacienții, înlocuind dilatația și miotomia','Peristaltica e păstrată, SEI relaxându-se excesiv, ca în sclerodermie'],'ABC',159,'Achalazie — Diagnostic',
 'Cuplarea „ciocului de pasăre” cu eșecul relaxării SEI și cu endoscopia anti-pseudoachalazie, față de eșecul medicamentelor.',
 ['Semnul ciocului de pasăre este explicit.','Cele două anomalii manometrice sunt citate.','Rolul endoscopiei de excludere este descris.','Medicamentele nu oferă aproape niciodată ameliorare de durată.','Pattern-ul este eșec de relaxare + aperistalsis, nu hiperrelaxare.']],
 8,'Supraestimează nitrații/CCB și inversează manometria (relaxare excesivă).',['ciocului de pasăre','eşecul relaxării SEI']),

q(19,['Diverticulul Zenker se tratează chirurgical prin:',
 ['Miotomie cricofaringiană, pentru a ameliora obstrucția, de obicei asociată cu diverticulectomie','Doar dilatație pneumatică a SEI, ca în achalazie, fără miotomie cricofaringiană','Esofagectomie Ivor Lewis de principiu','Protocol Nigro, leziunea fiind CCS','Fundoplicatură Nissen 360°, diverticulul ținând de BRGE'],'A',162,'Diverticul Zenker',
 'Recunoașterea miotomiei cricofaringiene ± diverticulectomie, distinctă de Heller, Nissen sau esofagectomie.',
 ['Cuplul miotomie cricofaringiană + diverticulectomie este explicit în legendă.','Dilatația SEI este pentru achalazie, nu pentru Zenker.','Ivor Lewis este pentru cancer.','Nigro este pentru CCS anal.','Nissen este antireflux, nu tratamentul Zenker.']],
 8,'Înlocuiește miotomia cricofaringiană cu Heller, Nissen sau Nigro.',['Miotomie cricofaringiană','Diverticulectomie']),

q(20,['Leiomiomul esofagian se caracterizează prin:',
 ['Este cea mai frecventă tumoră benignă, în stratul muscular, cu mucoasă supraiacentă de obicei indemnă','A doua masă benignă e chistul (adventice ± musculară); FNA/biopsia se evită (nu distinge leiomiosarcomul; infectează chistul)','Simptomaticele se enuclează cu reaproximarea musculei; prognostic excelent, recidivă rară','Cele mici asimptomatice se pot urmări cu EUS','Leiomiomul impune esofagectomie de principiu, FNA fiind diagnosticul de elecție'],'ABCD',162,'Tumori benigne — Leiomiom',
 'Aplicarea enucleerii (nu esofagectomie) și a interdicției FNA, plus urmărirea EUS a leziunilor mici.',
 ['Frecvența, sediul muscular și mucoasa indemnă sunt explicite.','Chistul ca a doua masă și evitarea FNA sunt citate.','Enucleerea și prognosticul sunt descrise.','Urmărirea EUS a celor mici e menționată.','Esofagectomia nu e tratamentul; FNA se evită.']],
 8,'Forțează esofagectomia și FNA, exact cele două gesturi pe care textul le evită.',['leiomomul','enucleerea']),

q(21,['După ingestia de corp străin esofagian sunt adevărate următoarele:',
 ['Cea mai frecventă la copii și adulți cu boală psihică; la adulți predomină impactarea alimentară (carne, oase)','Majoritatea impactărilor sunt la cricofaringian sau pe o strictură peptică distală','Tranzitul baritat este contraindicat (aspirație; contrastul nu ajută managementul)','Tratamentul de elecție: extracție blândă cu esofagoscop sub anestezie generală','Bariul oral este investigația de primă intenție, extracția chirurgicală deschisă fiind regula'],'ABCD',162,'Ingestia de corpi străini',
 'Aplicarea sediilor de impactare, a interdicției bariului și a extracției endoscopice sub AG.',
 ['Populațiile și impactarea alimentară sunt explicite.','Cricofaringianul și strictura peptică sunt citate.','Contraindicația bariului este enunțată.','Extracția endoscopică sub AG este descrisă.','Bariul e contraindicat; deschisul e rar, la eșec sau perforație.']],
 8,'Pune bariul ca first-line și deschisul ca regulă, inversând algoritmul endoscopic.',['Tranzitul baritat este conb','esofagoscop']),

q(22,['În ingestia caustică, măsurile inițiale includ:',
 ['Căi aeriene, iv, NPO, fără SNG, radiografie toracică','Inducerea vărsăturilor și „neutralizarea” nu sunt recomandate (ineficiente și dăunătoare; a doua expunere a esofagului)','Steroizii nu s-au dovedit eficienți în prevenirea stenozei','Dacă arsuri de grad II–III cu stomac relativ indemn, PEG pentru nutriție și dilatare retrogradă ulterioară','SNG-ul de urgență și inducerea vărsăturilor sunt gesturile de primă intenție'],'ABCD',164,'Ingestie caustică — Prim ajutor',
 'Prioritatea ABC + NPO fără SNG și interdicția vărsăturilor/neutralizării, plus ineficiența steroizilor pe stenoză.',
 ['Algoritmul (căi aeriene, iv, NPO, nu SNG, Rx) este din figură.','Interdicția vărsăturilor/neutralizării este explicită.','Ineficiența steroizilor pe stenoză este citată.','PEG la gradele II–III cu stomac indemn este descris.','SNG și vărsăturile sunt tocmai evitate.']],
 8,'Restaurează SNG-ul și vărsăturile ca prim ajutor, exact gesturile contraindicate.',['nu SNG','Inducerea vărsăturilor']),

q(23,['Gradarea endoscopică a arsurii caustice ghidează conduita astfel:',
 ['Gradul I (hiperemie, eroziuni superficiale): dietă progresivă, fără steroizi/antibiotice de rutină','Gradul II (ulcerații superficiale, benzi albe): NPO 1 săptămână','Gradul III (ulcerații adânci): NPO, iv, antibiotic, monitorizare a perforației','Tranzit baritat la 4–6 săptămâni și esofagoscopie de supraveghere a stenozei sau carcinomului','Gradul I impune esofagectomie imediată, baritatul fiind inutil'],'ABCD',164,'Ingestie caustică — Grade I–III',
 'Escaladarea dietă / NPO 1 săptămână / NPO+iv+antibiotic după grad, plus baritatul de 4–6 săptămâni.',
 ['Conduita gradului I este din algoritm.','NPO 1 săptămână la gradul II este citat.','Pachetul gradului III este enumerat.','Fereastra 4–6 săptămâni este repetată în figură.','Gradul I se alimentează progresiv, nu se rezecează.']],
 8,'Forțează esofagectomia pe gradul I, inversând treapta cea mai ușoară a algoritmului.',['Grad I','4--6 săpt']),

q(24,['Complicațiile tardive ale ingestiei caustice includ:',
 ['Risc crescut de carcinom scuamos esofagian','Stenoze; rezecția pentru perforație sau stenoză refractară e dificilă prin fibroza periesofagiană','Interpoziția de colon e frecvent necesară, stomacul fiind adesea deteriorat; dacă rezecția e nesigură, colon retrosternal','Steroizii previn stenoza în 95% din gradele I','Stomacul rămâne intact, deci grefonul gastric e regula, fără risc de SCC'],'ABC',164,'Ingestie caustică — Sequelă oncologică și reconstrucție',
 'Legarea causticului de SCC tardiv și de interpoziția colică (stomac avariat), față de ineficiența steroizilor.',
 ['Riscul de SCC este explicit.','Fibroza care îngreunează rezecția este citată.','Colonul (inclusiv retrosternal) este descris.','Steroizii nu s-au dovedit eficienți pe stenoză.','Stomacul e frecvent deteriorat; riscul de SCC există.']],
 8,'Neagă riscul de SCC și păstrează stomacul ca grefon de elecție după caustic.',['cancerului esofagian','interpoziţia de colon']),

q(25,['Lezarea nervului laringeu recurent în chirurgia esofagului cervical:',
 ['Perturbă corzile vocale și mecanismul de deglutiție al esofagului superior, crescând riscul de aspirație','Esofagul proximal e inervat de vag prin recurenți și de lanțul simpatic cervical','Nu are efect pe deglutiție, inervația motorie fiind doar simpatică toracică','Crește presiunea SEI, prevenind refluxul','Este fără consecințe, SES fiind independent de vag'],'AB',140,'Inervație — Nervul laringeu recurent',
 'Recunoașterea dublei consecințe (voce + deglutiție superioară/aspirație) după leziunea recurentului.',
 ['Perturbarea corzilor și a deglutiției, cu aspirație, este explicită.','Inervația proximală prin recurenți este citată.','Inervația motorie e vagală, nu doar simpatică.','Recurentul nu crește SEI.','SES/deglutiția superioară depind de această inervație.']],
 8,'Neagă riscul de aspirație după leziunea recurentului, contrar frazei din paragraf.',['laring�u recur�nt','riscul de aspiraţie']),

q(26,['Incidența anuală a cancerului esofagian în SUA, citată pentru 1987–2007, a rămas în jur de:',
 ['4–5 la 100.000, cu mortalitate similară 4–5 la 100.000','40–50 la 100.000, mortalitatea fiind sub 1 la 100.000','0,1 la 100.000, boala fiind eradicată prin screening Barrett','20 la 1.000, identică supraviețuirii la 5 ani','100 la 100.000 la afro-americani, zero la populația albă'],'A',151,'Epidemiologie — Incidență',
 'Reținerea platoului 4–5/100.000 atât ca incidență, cât și ca mortalitate, în ciuda schimbării histologice CSC→adenocarcinom.',
 ['Intervalul 4–5 la 100.000 pentru ambele este explicit.','40–50 umflă incidența de 10 ori.','Boala nu e eradicată.','20% e supraviețuirea la 5 ani, nu incidența la 1.000.','Adenocarcinomul e mai frecvent la albi; CSC la afro-americani, nu zero.']],
 8,'Confundă 4–5/100.000 cu 20% supraviețuire sau cu umflarea de 10 ori a incidenței.',['4-5 la 100.000','4-5 la I 00.000']),

q(27,['CSC esofagian, față de datele de teren, se asociază cu:',
 ['Raport bărbați:femei aproape 4:1 și incidență mai mare la afro-americani','Alcool, tutun, nitrozamine, Plummer-Vinson, tiloză, acalazie și leziuni caustice','Localizare predominant treimea medie și proximală','Adenocarcinomul a crescut de 4 ori în Occident și e mai prevalenț la populația albă, pe esofag distal/Barrett','CSC a rămas dominant în America de Nord, adenocarcinomul fiind o raritate a populației asiatice'],'ABCD',151,'CSC — Factori de risc adiționali',
 'Adăugarea raportului 4:1 și a listei Plummer-Vinson/tiloză/caustic, plus creșterea de 4 ori a adenocarcinomului, fără a reface întrebarea 2 despre 20% și depășirea CSC.',
 ['Raportul 4:1 și terenul afro-american sunt explicite.','Lista de factori, inclusiv Plummer-Vinson, este citată.','Sediul mediu/proximal este descris.','Creșterea de 4 ori și predominanța la albi/distal sunt menționate.','Textul precizează că adenocarcinomul a depășit CSC în America de Nord și Europa.']],
 8,'Neagă depășirea CSC de către adenocarcinom în Occident, păstrând o ierarhie depășită.',['4: I','Plummer-Vinson']),

q(28,['Durerea esofagiană poate mima angina deoarece:',
 ['Fibrele senzoriale esofagiene mijlocii/distale și cele cardiace urmează o cale similară','Inervația motorie a esofagului este vagală','Angina e produsă de spasmul SEI de 5 mm Hg, fără overlap senzorial','SES inervează miocardul prin nervul frenic','Esofagul nu are fibre senzoriale, durerea fiind tot timpul coronariană'],'AB',141,'Overlap senzorial esofag–cord',
 'Recunoașterea căii senzoriale comune care face spasmul/refluxul să mimeze angina.',
 ['Fraza despre calea similară este explicită.','Inervația motorie vagală este citată.','SEI e 15–30 mm Hg; overlap-ul e senzorial, nu un spasm de 5 mm Hg.','Frenicul nu e calea descrisă.','Textul tocmai explică mimetismul senzorial.']],
 8,'Neagă overlap-ul senzorial pe care paragraful îl invocă pentru diagnosticul diferențial angină vs reflux.',['durerea cardiacă','durerea esofagiană']),

q(29,['Stenturile esofagiene paliative se folosesc pentru tumori:',
 ['Mediotoracice și distale; montate distal pot asocia reflux semnificativ','Cervicale de principiu, refluxul fiind absent','Doar după esofagectomie Ivor Lewis, ca anastomoză de rezervă','În locul extracției corpului străin impactat la cricofaringian','Ca substitut al miotomiei cricofaringiene în Zenker'],'A',156,'Stent paliativ — Sediul',
 'Limitarea stentului la etajul mediotoracic/distal și recunoașterea refluxului când e plasat distal.',
 ['Sediile și refluxul distal sunt explicite.','Cervicalul nu e sediul citat.','Stentul paliativ nu e o anastomoză post-Ivor Lewis.','Corpul străin se extrage endoscopic, nu se stentează de primă intenție.','Zenker se tratează prin miotomie cricofaringiană.']],
 8,'Mută stentul pe cervical, Zenker sau corp străin, trei indicații false din același capitol.',['mediotoracic','esofagul distal']),

q(30,['Undele peristaltice secundare apar din cauza:',
 ['Dilatării sau iritației esofagiene, ori a unui obstacol care împiedică progresia bolusului, ca proces de rezervă după deglutiție','Inițierii voluntare din nucleul ambiguu, identic undei primare','Fibrilației nepropulsive, identică undelor terțiare','Relaxării izolate a SES, fără undă de propulsie','Hipertensiunii SEI de 120 mm Hg în achalazie'],'A',142,'Peristaltism secundar',
 'Diferențierea undei secundare (rezervă la reziduu/obstacol) de primară (deglutiție) și de terțiară (nepropulsivă).',
 ['Cauzele (dilatare, iritație, obstacol) și rolul de rezervă sunt explicite.','Nucleul ambiguu declanșează unda primară.','Fibrilația nepropulsivă definește terțiarele.','SES se relaxează în unda primară, nu definește secundara.','120 mm Hg e polul SES, nu mecanismul undei secundare.']],
 8,'Confundă secundara (rezervă) cu primara (deglutiție) sau cu terțiara (fibrilație).',['peristaltice secundare','de re￾zervă']),

q(31,['La ecografia endoscopică, esofagul apare ca:',
 ['Cinci zone discrete: mucoasă superficială, mucoasă profundă, submucoasă, muscularis propria și adventice','Trei zone: mucoasă, seroasă și mezenter','Un singur strat hiperecogen, fără musculară','Șapte straturi, identic colonului cu tenii','Două straturi, seroasă internă și mucoasă externă'],'A',141,'EUS — Cinci straturi',
 'Memorarea celor cinci benzi EUS, inclusiv despicarea mucoasei în superficială și profundă, plus absența seroasei.',
 ['Cele cinci zone sunt enumerate explicit.','Seroasa și mezenterul lipsesc.','Musculara e vizibilă ca zonă distinctă.','Teniile sunt colice, nu esofagiene.','Ordinea e mucoasă→adventice, fără seroasă internă.']],
 8,'Atribuie EUS-ului seroasă/mezenter, pe un organ definit prin lipsa seroasei.',['cinci zone','mucoasa profundă']),

q(32,['Abordul laparoscopic al esofagectomiei, potrivit textului:',
 ['Are rezultate de supraviețuire pe termen lung similare tehnicilor clasice, cu morbiditate redusă datorită inciziilor mai puțin invazive','Curba de învățare e lungă; doar anumite centre efectuează esofagectomii laparoscopice de succes','Înlocuiește complet experiența în Ivor Lewis și transhiatal, studiile demonstrând superioritate oncologică absolută','Este contraindicat, morbiditatea depășind toracotomia clasică','Se rezervă tumorilor T4 nerezecabile, ca paliație fără anastomoză'],'AB',155,'Esofagectomie laparoscopică',
 'Echivalența oncologică cu morbiditate mai mică, temperată de curba lungă de învățare și de centrele selecte.',
 ['Supraviețuirea similară și morbiditatea redusă sunt explicite.','Curba lungă și centrele limitate sunt citate.','Textul nu proclamă superioritate oncologică absolută nici înlocuirea celorlalte aborduri.','Morbiditatea e descrisă ca redusă, nu crescută.','Indicația e cancerul rezecabil, nu paliația T4.']],
 8,'Transformă laparoscopia din alternativă cu curbă lungă într-un substitut oncologic absolut sau într-o contraindicație.',['laparoscopie','Curba de învăţare']),

q(33,['Esofagul proximal este inervat de nervul vag prin:',
 ['Nervii laringieni recurenți și lanțul simpatic cervical','Doar plexul Auerbach duodenal','Artera gastrică stângă, ca nerv periarterial','Nervul frenic drept, identic diafragmului','Lanțul simpatic lombar L1–L3, ca rectul superior'],'A',140,'Inervația esofagului proximal',
 'Localizarea inervației proximale pe recurenți + simpatic cervical, distinctă de vagul toracic al etajului mijlociu/distal.',
 ['Recurenții și lanțul cervical sunt explicite.','Auerbach duodenal nu inervează esofagul proximal.','Gastrica stângă e arterială distală.','Frenicul e al diafragmului.','L1–L3 țin de rect, nu de esofagul cervical.']],
 8,'Mută inervația proximală pe frenic, Auerbach sau simpatic lombar.',['nervii laringieni','simpatic cervical']),

q(34,['După pasajul bolusului, SEI:',
 ['Revine la presiunea de repaus ridicată, prevenind refluxul conținutului gastric','Rămâne relaxat până la următoarea masă, refluxul fiind fiziologic continuu','Se contractă la 5 mm Hg, insuficient pentru antireflux','Dispare anatomic după Nissen, presiunea devenind zero','Se comportă ca SES, cu 30–120 mm Hg doar în deglutiție'],'A',142,'SEI după deglutiție',
 'Recunoașterea revenirii SEI la tonusul de repaus (15–30 mm Hg) ca barieră antireflux post-bolus.',
 ['Revenirea la presiunea ridicată de repaus este explicită.','Relaxarea persistentă ar favoriza refluxul, pe care SEI tocmai îl previne.','5 mm Hg nu e valoarea de repaus citată.','Nissen ajută competența, nu anulează SEI.','30–120 mm Hg e SES, nu SEI.']],
 8,'Lasă SEI relaxat după bolus sau îi atribuie presiunea SES, două confuzii de barieră antireflux.',['revine la presiunea','prevenind refluxul']),

q(35,['Terapia fotodinamică paliativă, față de laserul endoscopic, se caracterizează prin:',
 ['Penetrare tisulară limitată a undei, deci risc mai mic de perforație, dar și excizie tumorală limitată','Risc mai mare de perforație decât laserul, cu excizie transmurală completă','Vindecare oncologică echivalentă esofagectomiei R0','Înlocuirea neoadjuvantului 45 Gy la tumorile rezecabile','Indicație de primă intenție în leiomiomul mic, în locul enucleerii'],'A',156,'Terapie fotodinamică',
 'Traducerea penetrării limitate în dublu efect: mai puține perforații, dar ablație incompletă.',
 ['Penetrarea limitată, perforația redusă și excizia limitată sunt explicite.','Laserul, nu PDT, are riscul ridicat de perforație.','PDT e paliție, nu R0.','Neoadjuvantul rămâne 5-FU/cisplatină/45 Gy.','Leiomiomul se enuclează sau se urmărește, nu se tratează prin PDT.']],
 8,'Inversează riscul de perforație laser versus PDT și promovează PDT ca substitut oncologic.',['Terapia fotodinamică','riscul de perforaţie']),

q(36,['Identificați afirmația corectă referitoare la undele terțiare esofagiene:',
 ['Sunt unde anormale, ne-propulsive, de „fibrilație” esofagiană','Sunt unda primară declanșată de nucleul ambiguu','Sunt procesul de rezervă identic secundarelor','Măsoară 15–30 mm Hg la SEI în repaus','Definesc semnul ciocului de pasăre din achalazie'],'A',142,'Unde terțiare',
 'Izolarea terțiarelor ca fibrilație nepropulsivă, distinctă de primară, secundară, tonus SEI și ciocul de pasăre.',
 ['Definiția de fibrilație nepropulsivă este explicită.','Primara e deglutiția voluntară.','Rezerva e unda secundară.','15–30 mm Hg e presiunea de repaus a SEI.','Ciocul de pasăre e semnul baritat al achalaziei.']],
 8,'Atribuie terțiarelor rolul primarei sau al ciocului de pasăre, trei entități din pagini învecinate.',['ne-pro￾pulsive','fibrilaţie']),
];
