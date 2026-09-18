import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p<=1166?p-871:p<=1173?297:p<=1176?p-876:p-897;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('gastro',32,pdfOffset,`gastro-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const GASTRO_D=[
q(73,['Afecțiunile gingivale din Cadranul 32.9 includ:',
 ['Gingivita acută ulcerativă necrotizantă (angina Vincent) prin spirochete și bacterii fusiforme, tratată cu metronidazol oral 200 mg de 3 ori pe zi','Hiperplazia fibroasă gingivală indusă de fenitoin, ciclosporină sau nifedipină','Gingivita cronică prin placă bacteriană, tratată prin îndepărtarea plăcii','Angina Vincent se tratează cu IPP, spirochetele fiind absente','Hiperplazia gingivală este produsă de H. pylori, fără legătură cu fenitoinul'],'ABC',1162,'Cavitatea orală — Angina Vincent și hiperplazia medicamentoasă',
 'Cuplarea metronidazolului 200 mg ×3 în angina Vincent cu trio-ul fenitoin/ciclosporină/nifedipină.',
 ['Spirochete și fusiforme; metronidazol 200 mg de 3 ori pe zi.','Fenitoin, ciclosporină și nifedipină sunt listate.','Placa bacteriană se îndepărtează.','IPP nu tratează Vincent; spirochetele sunt cauza.','H. pylori nu cauzează hiperplazia gingivală.']],
 8,'Mută metronidazolul 200 mg spre IPP și atribuie hiperplazia lui H. pylori.',['200 mg de 3 ori pe','fenitoin, ciclosporină']),

q(74,['Hernia hiatală prin alunecare, conform Cadranului 32.12, este prezentă la:',
 ['30% dintre persoanele cu vârsta peste 50 de ani; nu produce simptome — simptomele țin de reflux','70% dintre tineri, cu SEI incompetent deasupra diafragmului ca regulă','5% peste 80 de ani, identică herniei paraesofagiene','Toți pacienții cu Barrett, independent de vârstă','0% peste 50 de ani, alunecarea fiind imposibilă'],'A',1163,'Hernia hiatală — Alunecare 30% peste 50 de ani',
 'Ponderea 30% peste 50 de ani a herniei prin alunecare, asimptomatică în sine.',
 ['Cadranul: 30% peste 50 de ani; simptomele sunt de reflux.','70% este hernia din esofagita erozivă, nu prevalența la tineri.','Paraesofagiana are SEI competent sub diafragm.','Barrett asociază HH în 95% în figură, nu „toți”.','Textul afirmă 30% peste 50 de ani.']],
 8,'Permutează 30% (alunecare >50) cu 70% (eroziv) și 95% (Barrett).',['30% dintre persoanele','peste 50 de ani']),

q(75,['Monitorizarea pH și tratamentul OTC al BAGE:',
 ['Un scor DeMeester mai mare de 14,72 indică reflux; trebuie corelație între pH <4,0 și simptome','Capsula Bravo wireless se atașează esofagului inferior, se detașează spontan și se elimină prin scaun','Preparatele cu alginat 10 ml de trei ori pe zi formează un gel sau plută de spumă cu conținutul gastric','DeMeester sub 2 exclude simptomele, pH <4 fiind irelevant','Alginatul 10 ml ×3 înlocuiește IPP-ul în esofagitele erozive'],'ABC',1163,'BAGE — DeMeester >14,72, Bravo și alginat 10 ml ×3',
 'Pragul 14,72, corelația pH<4 și schema alginat 10 ml ×3.',
 ['DeMeester >14,72 și corelația pH<4–simptome.','Bravo se detașează și se elimină în scaun.','Alginat 10 ml ×3, plută de spumă.','Pragul este 14,72, nu 2.','IPP rămân elecția în afara formelor ușoare.']],
 8,'Coboară DeMeester la 2 și face alginatul substitut al IPP în eroziv.',['14,72','10 ml de trei ori pe zi']),

q(76,['IPP în BAGE, dincolo de alegerea de clasă:',
 ['IPP reduc secreția acidă gastrică cu până la 90%','Aproximativ 60% dintre pacienți devin asimptomatici după 4 săptămâni de IPP o dată pe zi','Pacienții sub 45 de ani, fără semne de alarmă (în special disfagie), pot fi tratați fără investigații de primă intenție','Răspunsul la 4 săptămâni este nul, acidul scăzând cu sub 10%','Endoscopia este primul pas la toți tinerii fără alarmă'],'ABC',1163,'BAGE — IPP −90% acid, 60% la 4 săptămâni, tineri fără alarmă',
 'Reducerea de 90% a acidului, rata 60%/4 săptămâni și pragul de 45 de ani fără alarmă.',
 ['Până la 90% reducere a secreției.','Aproximativ 60% asimptomatici la 4 săptămâni.','Sub 45 ani fără alarmă: tratament fără investigații de primă intenție.','Textul citează 90% și 60%/4 săptămâni.','Investigațiile nu sunt primul pas la tinerii fără alarmă.']],
 8,'Inversează 90%/60% și impune endoscopia la tinerii fără alarmă.',['până la 90%','60% dintre aceştia']),

q(77,['Boala de reflux laringofaringian și hernia paraesofagiană:',
 ['În BRLF, tusea, vocea răgușită, rinoreea și astmul sunt mai frecvente decât pirozisul','Hernia prin rostogolire: SEI rămâne competent sub diafragm; ocazional dureri intense prin volvulus sau strangulare','BRLF se manifestă doar prin pirozis, fără tuse sau răgușeală','Paraesofagiana are SEI deasupra diafragmului, identică alunecării','Volvulusul paraesofagian este regula, SEI fiind incompetent'],'AB',1163,'BRLF — Tuse/răgușeală versus hernie paraesofagiană',
 'Simptomele extraesofagiene dominante în BRLF versus SEI competent al herniei prin rostogolire.',
 ['Tuse, răgușeală, rinoree, astm mai frecvente decât pirozisul.','SEI competent sub diafragm; volvulus ocazional.','Pirozisul poate lipsi.','Alunecarea aduce joncțiunea deasupra; paraesofagiana păstrează SEI jos.','Volvulusul este ocazional, nu regula.']],
 8,'Confundă poziția SEI a paraesofagienei cu alunecarea și reduce BRLF la pirozis.',['vocea răguşită','volvulus sau a strangulării']),

q(78,['În clasificarea Los Angeles, dincolo de gradul D (>75% circumferință):',
 ['Gradul A: eroziuni limitate la pliuri, care nu depășesc 5 mm','Gradul B: cel puțin o eroziune mai lungă de 5 mm, limitată la pliuri, fără continuitate între vârfurile a două pliuri','Gradul C: eroziuni care se continuă între vârfurile pliurilor, dar nu sunt circumferențiale','Gradul A înseamnă eroziuni confluente pe toată circumferința','Gradul B cere continuitate între toate pliurile, identic gradului D'],'ABC',1164,'Esofagită — Los Angeles A/B/C (pragul 5 mm)',
 'Pragul 5 mm care desparte A de B și continuitatea între pliuri care desparte B de C.',
 ['A: nu depășesc 5 mm, limitate la pliuri.','B: >5 mm, fără continuitate între două pliuri.','C: continuitate între pliuri, nu circumferențial.','Circumferențialul >75% este D, nu A.','Continuitatea între pliuri definește C, nu B.']],
 8,'Permutează 5 mm și continuitatea pliurilor între A, B și C.',['nu depăşesc 5 mm','mai lungă de']),

q(79,['NERD, antagoniști H2 și gastroplicatura endoluminală:',
 ['NERD are endoscopie normală, de obicei la femei; un grup mic are esofag hipersensibil, cu disconfort la modificări ușoare de pH','Antagoniștii H2 (cimetidină, ranitidină, famotidină, nizatidină) pot fi combinați cu IPP în forme mai severe','Gastroplicatura reduce pirozisul și episoadele acide, dar fără îmbunătățire de durată obiectivată prin pH','NERD predomină la bărbații vârstnici cu esofagită D','H2 înlocuiesc IPP-ul ca elecție în toate cazurile non-ușoare'],'ABC',1164,'BAGE — NERD hipersensibil, H2 plus IPP, gastroplicatură',
 'Profilul NERD (femei, esofag hipersensibil), combinația H2+IPP și limita obiectivă a gastroplicaturii.',
 ['Femei, endoscopie normală, esofag hipersensibil.','H2 pot fi adăugați IPP în forme severe.','Beneficiu clinic fără durabilitate pe măsurarea pH.','NERD este de obicei la femei, nu esofagită D.','IPP rămân elecția în afara formelor ușoare.']],
 8,'Face NERD-ul o esofagită D masculină și retrogradează H2 peste IPP.',['esofag „hipersensibil"','Antagoniştii receptorilor H2']),

q(80,['Doza de întreținere citată pentru omeprazol, după normalizarea sensibilității esofagiene, este:',
 ['Omeprazol 20 mg','Omeprazol 80 mg de două ori pe zi, ca în sindromul Zollinger-Ellison','Lansoprazol 5 mg săptămânal','Ranitidină 10 mg, fără IPP','Alginat 100 ml ca unică întreținere'],'A',1164,'BAGE — Întreținere cu omeprazol 20 mg',
 'Reținerea dozei de 20 mg omeprazol ca întreținere, distinctă de IPP-ul bid din formele severe.',
 ['Textul: omeprazol 20 mg poate fi păstrat ca întreținere.','80 mg bid ține de alte indicații, nu de textul de întreținere.','5 mg săptămânal nu apare.','H2 nu înlocuiesc IPP-ul de întreținere citat.','Alginatul este OTC, nu unica întreținere post-IPP.']],
 8,'Umflă 20 mg la doze de hipergastrinemie sau retrogradează alginatul ca unică întreținere.',['omeprazol 20 mg','tratament de întreţinere']),

q(81,['Strictura peptică și indicația de a evita chirurgia antireflux:',
 ['Chirurgia trebuie evitată la dismotilitate esofagiană fără relație cu refluxul acid, la non-responderi IPP și la cei cu tulburări funcționale intestinale','Stricturile peptice, mai rare după IPP, survin de obicei peste 60 de ani, cu disfagie intermitentă pentru solide care se agravează treptat','Cazurile ușoare pot răspunde doar la IPP; cele severe cer dilatare endoscopică și IPP pe termen lung','Chirurgia este primul pas la tinerii cu NERD și dismotilitate','Strictura peptică este tipică sub 30 de ani și răspunde doar la H2, fără dilatare'],'ABC',1165,'BAGE — Evitarea chirurgiei și strictura >60 ani',
 'Cele trei situații de evitarea fundoplicaturii și profilul stricturii (vârstnic, disfagie pentru solide).',
 ['Dismotilitate, non-răspuns IPP și tulburări funcționale: evită chirurgia.','Peste 60 de ani, disfagie intermitentă pentru solide.','Ușoare: doar IPP; severe: dilatare plus IPP.','NERD cu dismotilitate este tocmai contextul de evitat chirurgical.','Strictura este la >60 ani; dilatarea este pentru cazurile severe.']],
 8,'Operează NERD-ul cu dismotilitate și mută strictura la tineri, inversând paragraful de complicații.',['peste 60 de ani','dismotilitate esofagiană']),

q(82,['Displazia de grad scăzut pe esofag Barrett, la endoscopia de control:',
 ['Se repetă de obicei endoscopia la 6 luni, cu biopsii în cadran la fiecare 1 cm, sub IPP în doză mare','Dacă displazia de grad scăzut persistă, se propune ablație endoscopică sau monitorizare la 6 luni','Insulele de țesut scuamos sau columnar nu contribuie la măsurarea extensiei în criteriile Praga','Displazia de grad scăzut impune esofagectomie imediată, fără biopsii de control','Intervalul de 6 luni se aplică doar displaziei de grad înalt nodulare'],'ABC',1166,'Barrett — Displazie scăzută: 6 luni, 1 cm, IPP','Algoritmul 6 luni / biopsii 1 cm / IPP doză mare, plus nota Praga că insulele nu se măsoară.',
 ['Control la 6 luni, cadran la 1 cm, IPP doză mare.','Persistență: ablație sau supraveghere la 6 luni.','Insulele nu contribuie la extensia Praga.','Esofagectomia nu este primul pas în displazia scăzută.','6 luni este intervalul displaziei scăzute; înalta nodulară merge spre EMR.']],
 8,'Sare la esofagectomie în displazia scăzută și confundă intervalele 6 luni versus 3 luni ale gradului înalt.',['interval de 6 luni','fiecare 1 cm']),

q(83,['Displazia de grad înalt și ablația în Barrett:',
 ['Leziunea nodulară se îndepărtează prin rezecție endoscopică mucosală pentru stadializare histologică mai precisă','Fără leziune vizibilă: IPP doze mari și biopsii nu mai târziu de 3 luni; ecoendoscopia stadializează, excluzând cancerul și limfadenopatia','Ablația prin radiofrecvență a înlocuit terapia fotodinamică ca tehnică de elecție după îndepărtarea leziunii nodulare','Fotodinamica rămâne elecția, RFA fiind abandonată','EMR este contraindicată la leziunile nodulare, esofagectomia fiind unica opțiune'],'ABC',1166,'Barrett — HGD, EMR, biopsii la 3 luni, RFA',
 'EMR pentru nodular, fereastra ≤3 luni fără leziune vizibilă și RFA ca succesoare a fotodinamicii.',
 ['EMR pentru stadializare dacă este nodulară.','IPP doză mare, biopsii ≤3 luni, EUS.','RFA a înlocuit fotodinamica.','RFA, nu fotodinamica, este elecția.','EMR este tocmai indicația leziunii nodulare.']],
 8,'Păstrează fotodinamica ca elecție și interzice EMR-ul nodular, inversând algoritmul endoscopic.',['nu mai târziu de 3 luni','Ablaţia prin radiofrecvenţă']),

q(84,['Patogenia H. pylori, dincolo de urează deja menționată:',
 ['Aderența se face prin molecule inclusiv BabA, care se leagă de antigenul Lewis de pe celulele mucoasei gastrice','Ulcerele sunt mai frecvente când tulpina exprimă CagA și VacA, cu sinteză mai pronunțată de IL-8','Polimorfismele care cresc IL-1β se asociază cu gastrită atrofică și cancer','BabA se leagă de urează, fără Lewis, IL-8 fiind protector','CagA/VacA reduc inflamația, IL-1β prevenind atrofia'],'ABC',1172,'H. pylori — BabA/Lewis, CagA/VacA/IL-8, IL-1β',
 'Trio-ul adeziune BabA–Lewis, virulență CagA/VacA–IL-8 și riscul genetic IL-1β.',
 ['BabA se leagă de Lewis.','CagA și VacA, cu IL-8 crescută.','IL-1β: gastrită atrofică și cancer.','Lewis, nu ureaza, este ligandul BabA.','CagA/VacA accentuează inflamația; IL-1β se asociază cu atrofie.']],
 8,'Inversează rolul IL-8/IL-1β și rupe cuplul BabA–Lewis.',['BabA','interleukinei 8']),

q(85,['Proporția de persoane infectate cu H. pylori care dezvoltă ulcer duodenal, din populația adultă mondială infectată 50-60%, este de:',
 ['Doar 15%','90%, identic sensibilității testului respirator','Toate, gastrita antrală fiind echivalentă ulcerului','2-3%, identic raportului UD/UG inversat','75% imediat după eradicarea bacteriei'],'A',1173,'Ulcer duodenal — Doar 15% dintre infectați',
 'Reținerea cifrei 15% (ulcer printre infectați), distinctă de 50-75% (H. pylori printre UD) și de 50-60% (prevalență adultă).',
 ['Textul: doar 15% dintre infectați dezvoltă ulcere duodenale.','90% este sensibilitatea testului respirator, nu rata de UD.','Gastrita antrală este obișnuită și adesea asimptomatică.','UD sunt de 2-3 ori mai frecvente decât UG, nu 2-3% dintre infectați.','Eradicarea scade recurența, nu produce ulcer la 75%.']],
 8,'Permutează 15% (UD la infectați) cu 50-75% (H. pylori la UD) și 90% (test respirator).',['doar 15%','50-60% din populaţia']),

q(86,['Boala ulceroasă peptică, definiție și epidemiologie:',
 ['Ulcerul depășește în profunzime muscularis mucosae, cu bază fibroasă; eroziunile sunt limitate la mucoasă','UD afectează aproximativ 10% din populația adultă și sunt de 2-3 ori mai frecvente decât UG','UG se asociază cu pangastrită (corp și antru), pierdere de celule parietale și reducerea producției de acid','UD sunt de 10 ori mai rare decât UG și respectă muscularis mucosae','UG cresc acidul prin hipergastrinemie antrală, identic UD'],'ABC',1173,'Ulcer — Muscularis mucosae, UD 10% și 2-3× UG, pangastrită',
 'Definiția versus eroziune, ponderea 10% și 2-3×, plus hipoclorhidria pangastritei gastrice.',
 ['Dincolo de muscularis mucosae versus limitat la mucoasă.','10% adulți; UD de 2-3 ori mai frecvente decât UG.','Pangastrită, pierdere parietală, acid redus.','UD sunt mai frecvente, nu mai rare, și depășesc muscularis.','Hipergastrinemia antrală ține de gastrita antrală/UD, nu de UG.']],
 8,'Inversează UD versus UG (frecvență și acid) și confundă ulcerul cu eroziunea.',['10% din populaţia adultă','2-3 ori mai frecvente']),

q(87,['Metodele non-invazive pentru H. pylori, dincolo de antigenul fecal monoclonal:',
 ['Serologia IgG are sensibilitate 90% și specificitate 83%; scăderea titrului cu 50% poate dura până la 1 an, deci nu confirmă eradicarea','Testul respirator cu uree 13C are sensibilitate 90% și specificitate 96%; se evită antibioticele 4 săptămâni și IPP 2 săptămâni înainte','Anticorpii salivari nu sunt la fel de sensibili sau specifici comparativ cu serologia','Serologia IgG se negativează în 48 de ore după eradicare, fiind testul de control','Respiratorul cere IPP în ziua testului, antibioticele crescând sensibilitatea'],'ABC',1174,'H. pylori — Serologie 90/83, 13C 90/96, fereastra 4/2 săptămâni',
 'Perechile 90/83 (serologie) versus 90/96 (respirator) și ferestrele 4 săptămâni Abx / 2 săptămâni IPP.',
 ['90% și 83%; titrul scade lent, până la 1 an.','90% și 96%; fără Abx 4 săptămâni, fără IPP 2 săptămâni.','Saliva este inferioară serologiei.','Serologia nu confirmă eradicarea.','IPP-ul scade sensibilitatea; se evită 2 săptămâni.']],
 8,'Face serologia test de eradicare la 48 de ore și inversează ferestrele Abx/IPP ale respiratorului.',['sensibilitate de 90%','ultimele 4 săptămâni']),

q(88,['Sensibilitatea și specificitatea antigenului fecal H. pylori cu anticorpi monoclonali, deja apropiate de 97,6/96, se completează cu:',
 ['Întreruperea IPP 2 săptămâni înainte; blocanții H2 pot continua','Oprirea H2 și continuarea IPP până în ziua recoltării','Necesitatea endoscopiei, testul fiind doar invaziv','Specificitate sub 50%, inutil după eradicare','Înlocuirea culturii gastrice la toți vârstnicii cu alarmă'],'A',1174,'H. pylori — Antigen fecal: oprire IPP, H2 permis',
 'Nuanța practică: oprire IPP 2 săptămâni, H2 permis, distinct de cifrele de performanță deja folosite.',
 ['Textul: întrerupere IPP 2 săptămâni; H2 pot continua.','H2 pot continua; IPP se opresc.','Testul este non-invaziv.','Specificitatea citată este 96%.','„Testează și tratează” vizează dispepsia sub 55 ani fără alarmă, nu înlocuiește endoscopia la alarmă.']],
 8,'Inversează IPP versus H2 înaintea antigenului fecal, singura nuanță practică rămasă nefolosită.',['2 săptămâni','blocanţii receptorilor H2']),

q(89,['Consecințele pe termen lung ale chirurgiei gastrice, dincolo de ulcerul recurent:',
 ['Sindromul dumping după gastrectomie parțială cu gastro-jejunoanastomoză: greață, distensie, transpirații, leșin, palpitații prin evacuare jejunală hiperotonă și scăderea volemiei; poate apărea hipoglicemie','Diareea după vagotomie: episoade severe recurente la aproximativ 1% dintre pacienți','Carențe: fier (absorbție redusă), folat (aport deficitar), B12 (deficit de factor intrinsec), scădere ponderală (aport redus)','Dumping-ul este un reflux biliari, fără deplasare de lichid plasmatic','Diareea post-vagotomie atinge 50% din pacienți, B12 fiind în exces'],'ABC',1176,'Chirurgia gastrică — Dumping, diaree 1%, carențe B12/fier/folat',
 'Mecanismul dumping-ului, ponderea 1% a diareei post-vagotomie și triada carențelor.',
 ['Evacuare jejunală, influx de lichid, hipovolemie, posibilă hipoglicemie.','Aproximativ 1% episoade severe după vagotomie.','Fier, folat, B12, greutate.','Mecanismul este hiperosmolar, nu reflux biliar.','1%, nu 50%; B12 scade prin lipsa de factor intrinsec.']],
 8,'Umflă diareea post-vagotomie de la 1% la 50% și rupe mecanismul hiperosmolar al dumping-ului.',['aproximativ 1%','factor intrinsec']),

q(90,['Asocierile H. pylori cu neoplazia gastrică:',
 ['Incidența cancerului gastric distal (nu și a celui proximal) este direct proporțională cu infecția H. pylori în țările cu incidență ridicată','Peste 70% dintre limfoamele gastrice MALT cu celule B prezintă infecție H. pylori; gastrita cronică conține celula B clonală','Cancerul proximal este proporțional cu H. pylori, MALT-ul fiind independent de bacterie','Eradicarea nu are rol în MALT, celula B clonală fiind absentă','Adenocarcinomul distal scade când prevalența H. pylori crește'],'AB',1176,'H. pylori — Cancer distal și MALT >70%',
 'Gradientul distal versus proximal al adenocarcinomului și ponderea >70% H. pylori în MALT.',
 ['Distal da, proximal nu; proporționalitate în țările cu incidență ridicată.','Peste 70% MALT; celulă B clonală în gastrita cronică.','Proximalul nu urmează aceeași proporționalitate.','Gastrita cronică conține clona B care dă MALT.','Incidența distală crește cu infecția, nu scade.']],
 8,'Mută proporționalitatea pe cancerul proximal și rupe legătura MALT–H. pylori >70%.',['Peste 70%','distal (dar nu şi']),

q(91,['Leziunile AINS la evaluare endoscopică, dincolo de COX-1/COX-2:',
 ['Aproximativ 50% dintre consumatorii regulați de AINS dezvoltă leziuni ale mucoasei gastrice','Aproximativ 30% prezintă ulcere la endoscopie','Doar o mică parte au simptome (aproximativ 5%) și 1-2% dezvoltă o complicație majoră (hemoragie sau perforație)','90% sunt simptomatici, 50% având perforație','Ulcerele endoscopice lipsesc, leziunile fiind 1-2%'],'ABC',1176,'AINS — 50% leziuni, 30% ulcere, 5% simptome, 1-2% complicații',
 'Cascada 50% / 30% / 5% / 1-2% a leziunilor AINS.',
 ['50% leziuni mucoase.','30% ulcere endoscopice.','5% simptome; 1-2% complicație majoră.','Simptomele sunt ~5%, nu 90%.','Ulcerele endoscopice sunt ~30%, nu absente.']],
 8,'Permutează 50/30/5/1-2 între simptome, ulcere și perforație, patru procente din același paragraf AINS.',['aproximativ 50%','1-2%']),

q(92,['Epidemiologia BII, dincolo de gradientul etnic deja citat:',
 ['Incidența BC este aproximativ 4-10/100.000 anual, prevalență 25-100/100.000','Incidența CU este stabilă la 6-15/100.000 anual, prevalență 80-150/100.000','În 10% din colitele BII nu se poate distinge BC de CU (colită nedeterminată)','Aproximativ 25% sunt diagnosticați înainte de 18 ani, boala tânără fiind mai extinsă și agresivă','Incidența BC este 80-150/100.000, CU fiind 4-10, fără forme nedeterminate'],'ABCD',1198,'BII — Incidență 4-10 versus 6-15, 10% nedeterminată, 25% <18 ani',
 'Perechile incidență/prevalență BC versus CU, 10% colită nedeterminată și 25% debut pediatric.',
 ['BC: 4-10 incidență, 25-100 prevalență.','CU: 6-15 și 80-150.','10% colită nedeterminată.','25% înainte de 18 ani, mai agresivă.','Cifrele 80-150 țin de prevalența CU, nu de incidența BC.']],
 8,'Inversează 4-10 (BC) cu 80-150 (prevalență CU) și neagă colita nedeterminată.',['4-10/100.000','25% dintre pacienţi']),

q(93,['Factorii genetici în BII:',
 ['Până la 1 din 5 pacienți cu BC și 1 din 6 cu CU au o rudă de gradul I cu BII','Concordanța la gemeni monozigoți versus dizigoți pentru BC este 20-50% versus 10%','Factorii genetici majori pentru BC includ NOD2 (CARD15)','Concordanța monozigoților este 0%, NOD2 ținând de CU nu de BC','Riscul familial lipsește, istoricul fiind cel mai slab predictor'],'ABC',1198,'BII — 1 din 5 / 1 din 6, gemeni 20-50% versus 10%, NOD2',
 'Ponderile familiale 1/5 și 1/6, concordanța gemelară și locusul NOD2/CARD15.',
 ['1 din 5 BC, 1 din 6 CU.','20-50% MZ versus 10% DZ.','NOD2 (CARD15) pentru BC.','NOD2 este factor major pentru BC; concordanța MZ nu este 0%.','Istoricul familial este cel mai mare factor de risc independent.']],
 8,'Mută NOD2 pe CU și anulează concordanța gemelară 20-50%/10%.',['1 din 5 pacienţi','NOD2']),

q(94,['Microbiota în BII, dincolo de disbioza generică:',
 ['Intestinul are de 10 ori mai multe organisme bacteriene decât celule gazdă, cu 300-400 specii distincte','Concentrații mai scăzute de Faecalibacterium prausnitzii în specimenele rezecate prezic recădere endoscopică ulterioară','E. coli aderă prin pili de tip 1 la CEACAM6 pe celulele ileale în BC','F. prausnitzii crescut prezice recăderea, CEACAM6 fiind absent în ileon','Diversitatea microbiană este crescută în BII, MAP fiind confirmat prin PCR și trialuri anti-MTB pozitive'],'ABC',1199,'BII — 10× bacterii, F. prausnitzii și CEACAM6',
 'Ordinul 10×/300-400 specii, valoarea predictivă a F. prausnitzii scăzut și ligandul CEACAM6.',
 ['10 ori mai multe bacterii; 300-400 specii.','F. prausnitzii scăzut prezice recăderea endoscopică.','Pili tip 1 – CEACAM6.','Scăderea, nu creșterea, prezice recăderea.','Diversitatea este redusă; PCR și trialurile nu confirmă MAP.']],
 8,'Inversează F. prausnitzii ca predictor și „confirmă” MAP, două capcane microbiene din același paragraf.',['Faecalibacterium prausnitzii','CEACAM6']),

q(95,['Inducția remisiei în boala Crohn, dincolo de anti-TNF:',
 ['Prednisolon oral 30-60 mg/zi în pusee moderate-severe','Boala ileocecală ușoară-moderată: budesonid cu eliberare controlată, disponibilitate sistemică redusă','Nutriția enterală ca unică sursă 28 de zile induce remisie similară steroizilor; recidiva e mare mai ales cu afectare colonică','Steroizii sunt de elecție în boala penetrantă și sepsisul perianal','Aminosalicilații au dovezi solide de eficacitate, budesonidul fiind evitat ileocecal'],'ABC',1203,'Crohn — Prednisolon 30-60 mg, budesonid ileocecal, 28 zile enteral',
 'Doza 30-60 mg, budesonidul ileocecal și fereastra de 28 de zile a nutriției enterale.',
 ['30-60 mg/zi prednisolon.','Budesonid ileocecal ușor-moderat.','28 de zile, rate similare steroizilor, recidivă colonică.','Steroizii se evită în boala penetrantă sau sepsis perianal.','Aminosalicilații au foarte puține dovezi în BC.']],
 8,'Pune steroizii în fistula/sepsis și neagă budesonidul ileocecal, două reguli de inducție.',['30-60 mg/zi','28 de zile']),

q(96,['Prognosticul care ghidează întreținerea în Crohn:',
 ['Prognostic bun: vârstă înaintată la diagnostic, fără boală perianală, ulcerație limitată, non-fumător — poate fără întreținere','Prognostic defavorabil: vârstă tânără, intestin subțire extensiv, ulcerație colonică profundă, perianal/rectal, fumător — imunosupresie de lungă durată','Prognosticul bun este vârsta tânără, fumatul și boala perianală','Întreținerea se oprește la fumători tineri cu ulcerație profundă','Calprotectina fecală nu are valoare de predicție a răspunsului'],'AB',1203,'Crohn — Factori de prognostic bun versus defavorabil',
 'Contrastul vârstă înaintată/non-fumător versus tânăr/fumător/perianal pentru decizia de întreținere.',
 ['Vârstă înaintată, fără perianal, ulcerație limitată, non-fumător.','Tânăr, extensiv, profund, perianal, fumător.','Acestea sunt markerii defavorabili, nu buni.','Defavorabilii tocmai cer imunosupresie.','Calprotectina și lactoferina predictează răspunsul sau eșecul.']],
 8,'Inversează markerii bun/defavorabil (vârstă, fumat, perianal) din același paragraf de întreținere.',['vârstă înaintată la diagnostic','vârstă tânără la diag-nostic']),

q(97,['Chirurgia în Crohn, dincolo de indicațiile deja listate:',
 ['Studii pre-biologice: până la 80% vor necesita o intervenție; recurența este 15% pe an fără profilaxie de menținere','O cură de 3 luni cu metronidazol reduce rata recăderii; ileocolonoscopie de anastomoză la 6 luni postoperator','Pacienții cu Crohn nu se pretează pentru rezervor ileal, recurența la acest nivel fiind mare','Rezervorul ileoanal este operația standard în Crohn, recurența fiind nulă','Metronidazolul 3 luni crește recăderea, ileocolonoscopia la 6 luni fiind evitată'],'ABC',1205,'Crohn — Chirurgie 80%, recurență 15%/an, metronidazol 3 luni, fără pouch',
 'Ponderea 80%, rata 15%/an, metronidazolul 3 luni, controlul la 6 luni și contraindicația pouch-ului.',
 ['Până la 80%; 15% pe an.','Metronidazol 3 luni; ileocolonoscopie la 6 luni.','Pouch-ul nu se pretează în Crohn.','Pouch-ul este pentru CU, nu pentru Crohn.','Metronidazolul reduce recăderea; controlul la 6 luni este cerut.']],
 8,'Pune pouch-ul în Crohn și inversează metronidazolul 3 luni, două decizii postoperatorii.',['80%','15% pe an']),

q(98,['După colectomie subtotală cu anastomoză ileorectală pentru Crohn colonic cu rect cruțat:',
 ['Rata de recurență este 60-70% în ileon, rect sau ambele','Două treimi dintre acești pacienți păstrează un rect funcțional pentru 10 ani','Recurența este nulă, rectul rămânând funcțional la toți 20 de ani','Panproctocolectomia este evitată când rectul este complet afectat','Ileostoma terminală este contraindicată dacă colonul și rectul sunt afectate'],'AB',1205,'Crohn colonic — Ileorectal 60-70% recurență, 2/3 rect funcțional/10 ani',
 'Perechea 60-70% recurență versus două treimi cu rect funcțional la 10 ani.',
 ['60-70% recurență ileon/rect/ambele.','Două treimi păstrează rect funcțional 10 ani.','Recurența nu este nulă.','Dacă colonul și rectul sunt afectate, panproctocolectomia cu ileostomă este standard.','Ileostoma este standardul când rectul este afectat.']],
 8,'Anulează 60-70% și 10 ani, cifrele de pronostic ale anastomozei ileorectale.',['60-70%','10 ani']),

q(99,['Eliberarea colonică a 5-ASA prin legătură azo, polimer pH-sensibil sau microsfere, plus PPAR-γ:',
 ['Gruparea activă este 5-ASA, absorbit în intestinul subțire; preparatele eliberează 5-ASA în colon prin legătură azo (sulfasalazină, balsalazidă, olsalazină), polimer sensibil la pH sau microsfere','Mecanismul implică probabil PPAR-γ; sunt eficienți în inducție (ușor-moderat) și menținere, cu efect chemopreventiv pentru cancerul colorectal asociat CU','5-ASA poate provoca rareori boli renale','5-ASA se absoarbe doar în colon, legătura azo fiind inutilă','Sunt ineficienți în menținere și cresc riscul de CCR'],'ABC',1206,'CU — 5-ASA, legătură azo, PPAR-γ, chemoprevenție',
 'Eliberarea colonică (azo/pH/microsfere), PPAR-γ și dublul rol inducție/menținere plus chemoprevenție, cu nefrotoxicitate rară.',
 ['5-ASA eliberat în colon prin azo, pH sau microsfere.','PPAR-γ, inducție, menținere, chemoprevenție CCR.','Boli renale rare.','5-ASA se absoarbe în intestinul subțire, de aceea trebuie vehicul colonic.','Sunt eficienți în menținere și chemopreventivi, nu invers.']],
 8,'Anulează vehiculul colonic al 5-ASA și inversează chemoprevenția CCR.',['5-ASA','PPAR']),

q(100,['Conform Cadranului 32.41, episodul sever de colită ulcerativă se definește prin:',
 ['Frecvența scaunelor >6 pe zi cu sânge','Febră ≥37,5°C și tahicardie >90/min','VSH >30 mm/oră','Hemoglobină <100 g/L și albumină <30 g/L','Sub 3 scaune/zi fără sânge, febră absentă, Hb >120 g/L'],'ABCD',1206,'CU severă — Cadranul 32.41: >6 scaune, 37,5°C, 90, VSH 30, Hb 100, albumină 30',
 'Cele șase praguri ale atacului sever versus un profil de constipație/formă ușoară.',
 ['>6 scaune/zi cu sânge.','≥37,5°C și >90/min.','VSH >30.','Hb <100 și albumină <30.','Aceste valori descriu forma ușoară/constipația, nu atacul sever.']],
 8,'Înlocuiește cele șase praguri de severitate cu un tablou de tranzit lent, toate din același cadran.',['>6 scaune','<30 g/L']),

q(101,['În atacul sever de colită ulcerativă, endoscopia de elecție este:',
 ['Sigmoidoscopie flexibilă limitată, fără pregătire, colonoscopia completă fiind evitată pentru a nu perfora','Colonoscopie completă cu pregătire, perforația fiind neglijabilă','Enteroscopie de intestin subțire, colonul nefiind interesat','Capsule endoscopy ca primă intenție, fără sigmoidoscopie','Nicio endoscopie, radiografia pe gol stadializând extensia cu acuratețe'],'A',1206,'CU severă — Sigmoidoscopie fără pregătire, nu colonoscopie completă',
 'Evitarea colonoscopiei complete în atacul sever, în favoarea sigmoidoscopiei nepregătite.',
 ['Textul: colonoscopia completă evitată; sigmoidoscopie flexibilă fără pregătire.','Colonoscopia completă riscă perforația.','CU afectează colonul, nu cere enteroscopie de primă intenție.','Capsula nu înlocuiește confirmarea endoscopică distală.','Radiografia pe gol exclude dilatarea, dar nu apreciază corect extinderea.']],
 8,'Impune colonoscopia completă în atacul sever, tocmai gestul pe care textul îl evită.',['Colonoscopia completă','sigmoidoscopie flexibilă']),

q(102,['Constipația după criteriile Roma IV și clasificarea funcțională:',
 ['Diagnosticul de cercetare cere cel puțin 2 criterii timp de minim 3 luni, printre care <3 scaune/săptămână, efort >25% din timp, Bristol 1-2 în >25% defecații','Clasificare: tranzit colonic normal 59%, tulburări de defecație 25%, tranzit încetinit 13%; asocierea tulburare de defecație plus tranzit încetinit 3%','Tranzitul normal înseamnă că scaunul traversează colonul în ritm normal, frecvența putând fi percepută totuși ca anormală','Roma IV cere un singur criteriu o singură zi, tranzitul încetinit acoperind 59%','Tulburările de defecație sunt 59%, tranzitul normal 3%'],'ABC',1208,'Constipație — Roma IV (≥2/3 luni) și 59/25/13/3%',
 'Pragul ≥2 criterii/3 luni și cele patru ponderi 59/25/13/3 ale subtipurilor de tranzit.',
 ['≥2 criterii, minim 3 luni; <3/săptămână, efort >25%, Bristol 1-2.','59% normal, 25% defecație, 13% încetinit, 3% asociere.','Tranzit normal cu percepție de constipație.','Roma IV cere cel puțin 2 criterii/3 luni; 59% este tranzitul normal.','59% este tranzitul normal, nu tulburarea de defecație.']],
 8,'Permutează 59/25/13/3 între subtipuri și reduce Roma IV la un criteriu de o zi.',['<3 scaune/săptămână','59%']),
];
