import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-59;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hernii',11,pdfOffset,`hernii-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const HERNII_C=[
q(29,['Hernia peretelui abdominal este definită ca:',
 ['Un defect parietal bine definit, la nivelul structurilor musculare și fasciale, prin care se exteriorizează conținutul cavității abdominale','O subțiere a liniei albe, fără defect, identică diastazisului','O protruzie tegumentară fără comunicare cu cavitatea peritoneală','Un hematom de perete, fără risc de ocluzie sau ischemie','O dehiscență cutanată superficială, fără implicare fascială'],'A',125,'Definiție — Defect parietal',
 'Recunoașterea definiției (defect muscular-fascial bine delimitat cu exteriorizare viscerală), distinctă de diastazis.',
 ['Definiția cu defect bine definit și exteriorizare este explicită.','Subțierea fără defect descrie diastazisul, nu hernia.','Hernia comunică cu cavitatea abdominală.','Textul leagă hernia de încarcerare, ocluzie și strangulare.','Defectul vizat este muscular și fascial, nu doar cutanat.']],
 8,'Egalizează hernia (defect) cu diastazisul (fără defect), confuzia de deschidere a capitolului.',['defect parietal','structurilor musculare']),

q(30,['Herniile, din punct de vedere clinic, se caracterizează prin:',
 ['Patru tipuri: asimptomatice, simptomatice, subacute și acute','Asimptomaticele sunt de obicei reductibile (spontan în decubit sau manual) și, în acest cadru, nu cer intervenție chirurgicală','Riscul de complicații crește când reducerea se face printr-un defect mic sau când conținutul herniei este de mari dimensiuni','Asimptomaticele se operează de urgență, reductibilitatea fiind un semn de strangulare','Herniile reductibile nu pot fi simptomatice'],'ABC',127,'Tablou clinic — Cele patru tipuri',
 'Contrastarea supravegherii herniei asimptomatice reductibile cu riscul crescut la defect mic / conținut mare.',
 ['Cele patru tipuri sunt enumerate.','Reductibilitatea și absența indicației operatorii la asimptomatice sunt explicite.','Defectul mic și conținutul voluminos cresc riscul.','Asimptomaticele nu se operează de urgență; strangularea e ischemie, nu reductibilitate.','Textul precizează că herniile reductibile pot fi simptomatice.']],
 8,'Transformă hernia asimptomatică reductibilă în urgență de strangulare, inversul paragrafului.',['asimptomatice, simptomatice','defect parietal de mici dimensiuni']),

q(31,['După reducerea sub sedare a unei hernii recent încarcerate, la pacientul stabil:',
 ['Pacientul trebuie internat și monitorizat, deoarece conținutul redus în peritoneu poate să fi fost strangulat','Organele reduse pot fi infarctizate sau ischemiate, ceea ce impune explorare (laparotomie, celiotomie)','Pacientul se externează imediat, reducerea reușită excludând ischemia','Celiotomia este superfluă după orice reducere, chiar cu acidoză prealabilă','Monitorizarea se rezumă la un control la 6 luni, fără internare'],'AB',127,'Reducere sub sedare — Supravegherea ulterioară',
 'Recunoașterea internării obligatorii după reducere, din cauza ischemiei oculta a viscerelor reintroduse.',
 ['Internarea și riscul de strangulare prealabilă sunt explicite.','Infarctizarea/ischemia și indicația de explorare sunt citate.','Externarea imediată contrazice monitorizarea cerută.','Acidoza prealabilă contraindica reducerea, nu explorarea.','Fereastra de supraveghere este imediată, nu la 6 luni.']],
 8,'Externează imediat după reducere, anulând riscul de ischemie a viscerelor reintroduse.',['internat şi monitorizat','celiotomie']),

q(32,['Pregătirea perioperatorie a herniorafiei include:',
 ['Reechilibrarea nutrițională la pacientul subnutrit, esențială pentru vindecarea după incizii mari','Controlul greutății la obezi, care reduce morbiditatea, complicațiile de plagă și riscul de recidivă','Profilaxie mecanică cu dispozitive de compresie la majoritate; cei cu risc crescut beneficiază și de chemoprofilaxie (anticoagulare)','Fumatul reduce complicațiile de plagă, nutriția neinfluențând vindecarea','Pacienții deja anticoagulați nu necesită un plan de „bridging”'],'ABC',128,'Factori modificabili — Nutriție, greutate, TVP',
 'Aplicarea triadei nutriție / control ponderal / profilaxie TVP (mecanică ± chemoprofilaxie).',
 ['Reechilibrarea nutrițională este explicită.','Efectul controlului ponderal asupra recidivei este citat.','Compreshia pentru majoritate și anticoagularea la risc crescut sunt descrise.','Stoparea fumatului, nu fumatul, previne complicațiile; nutriția contează.','Textul cere un plan de bridging la cei deja anticoagulați.']],
 8,'Inversează rolul fumatului și anulează bridging-ul, două măsuri perioperatorii din același paragraf.',['Reechilibrarea nutriţională','chemoprofilaxie']),

q(33,['Alternativele non-narcotice pentru controlul durerii perioperatorii în herniorafie sunt:',
 ['Infiltrare cu lidocaină, blocuri ale planului transvers abdominal (PTA) și blocuri spinale sau epidurale','Doar opioide parenterale, blocurile regionale fiind evitate','Anestezia locală izolată, fără lidocaină, pentru a crește depresia respiratorie','Blocul PTA contraindicat, deoarece agravează ileusul','Epidurala rezervată doar diastazisului, nu herniei'],'A',128,'Planificarea perioperatorie — Blocuri PTA',
 'Recunoașterea lidocainei, a blocului PTA și a blocurilor neuraxiale ca alternative care reduc depresia respiratorie.',
 ['Cele trei modalități sunt enumerate explicit.','Scopul este reducerea opioidelor și a depresiei respiratorii.','Lidocaina este citată ca infiltrare.','Blocul PTA este tocmai o alternativă recomandată.','Indicația ține de herniorafie, nu de diastazis.']],
 8,'Elimină blocul PTA și epidurala, tocmai alternativele non-narcotice din protocolul de recuperare.',['planului transvers abdominal','lidocaină']),

q(34,['Anatomia inelelor canalului inghinal se caracterizează prin:',
 ['Inelul intern este o deschidere cranială și posterioară în fascia transversalis, acoperită anterior de aponevroza oblicului extern','Inelul extern este o deschidere anterioară și caudală prin aponevroza oblicului extern, acoperită posterior de fascia transversalis','Dacă procesul vaginal nu se obliterează, rezultatul este o hernie pediatrică; peritoneul din scrot se umple cu lichid și devine hidrocel','Inelul intern străpunge aponevroza oblicului extern, cel extern fiind în fascia transversalis','Obliterarea incompletă a procesului vaginal protejează de hidrocel'],'ABC',132,'Inel intern, inel extern și proces vaginal',
 'Contrastarea inelului intern (transversalis, posterior) cu cel extern (oblic extern, anterior) și a hidrocelului din procesul vaginal persistent.',
 ['Definiția inelului intern este explicită.','Definiția inelului extern completează unghiul de penetrare.','Hernia pediatrică și hidrocelul din neobliterare sunt descrise.','Atributele celor două inele sunt inversate.','Neobliterarea produce, nu protejează de, hidrocel.']],
 8,'Inversează straturile inelului intern cu ale celui extern, capcana anatomică a canalului inghinal.',['inel inghinal intern','proces vaginal']),

q(35,['Herniile inghinale indirecte și directe se deosebesc prin:',
 ['Indirecta apare lateral de vasele epigastrice; sacul iese prin inelul intern slăbit și urmează funiculul spermatic','Directa apare medial de epigastrice, prin triunghiul Hesselbach; sacul pătrunde în canal, dar nu trece prin inelul intern cu funiculul','Majoritatea hidrocelelor întâlnite mai târziu în viață au o hernie indirectă asociată și sunt congenitale','Directa iese prin inelul intern de-a lungul funiculului, identic herniei pediatrice','Indirecta este medial de epigastrice, în trigonul Hesselbach'],'ABC',132,'Directă versus indirectă — Epigastricele',
 'Maparea lateralei de epigastrice (indirectă, inel intern) versus medialei (directă, Hesselbach), plus hidrocelul congenital tardiv.',
 ['Lateralitatea și traiectul prin inelul intern definesc indirecta.','Medialitatea, Hesselbach și evitarea inelului intern definesc directa.','Asocierea hidrocel tardiv–hernie indirectă congenitală este citată.','Atributele sunt ale indirectei, nu ale directe.','Medial/Hesselbach descrie directa, nu indirecta.']],
 8,'Inversează raportul cu epigastricele (lateral vs medial), distincția clasică directă/indirectă.',['triunghiul lui Hesselbach','vasele epigastrice']),

q(36,['Hernia „în pantalon” a OMP constă în:',
 ['O hernie situată atât în spațiul direct, cât și în spațiul indirect','Un „picior” de peritoneu în ambele spații, împărțit de vasele epigastrice, care sunt fixe','O hernie femurală bilaterală, sub ligamentul ilioinghinal','Un defect unic medial, fără componentă indirectă','Lipsa oricărui sac peritoneal, epigastricele fiind mobile'],'AB',132,'Hernia în pantalon',
 'Recunoașterea dublei componente (direct + indirect) despărțite de epigastricele fixe.',
 ['Definiția (ambele spații) este explicită.','„Piciorul” peritoneal și fixitatea epigastricelor sunt citate.','Femurala stă sub Poupart, nu definește pantalonul.','Pantalonul are două componente, nu un defect unic.','Există sac în ambele spații; epigastricele sunt fixe.']],
 8,'Mută hernia în pantalon sub ligamentul ilioinghinal (spațiul femural), o confuzie de etaj al OMP.',['hernie „în pantalon"','vasele epigastrice']),

q(37,['La femei și în diagnosticul herniilor OMP sunt adevărate:',
 ['Femeile prezintă rareori hernii inghinale directe; cea mai frecventă dintre cele trei hernii OMP la femei este indirecta','Nu există examinare clinică sau imagistică ce poate diferenția în mod cert hernia inghinală directă de cea indirectă','Tehnicile de reparare a celor două hernii inghinale sunt identice; femuralele cer metode diferite, fiind în spațiul inferior','CT-ul și IRM-ul sunt, de obicei, superioare ecografiei ca prim test în OMP neconcludent','Directa este cea mai frecventă hernie OMP a femeii, femuralele fiind excepționale'],'ABC',133,'OMP la femei — Directă rară, diagnostic',
 'Aplicarea predilecției pentru indirectă la femei și a imposibilității de a distinge cert directa de indirectă preoperator.',
 ['Raritatea directei și predominanța indirectei sunt explicite.','Absența unui test care să diferențieze cert cele două inghinale este citată.','Identitatea tehnicilor inghinale versus specificul femural sunt descrise.','CT/IRM de obicei nu aduc beneficiu; ecografia poate ajuta.','Directa e rară; femuralele sunt mai frecvente la femei decât la bărbați.']],
 8,'Declară directa ca cea mai frecventă OMP la femei și pune CT înaintea ecografiei.',['rareori hernii inghinale directe','cea mai frecventă']),

q(38,['Consilierea preoperatorie a herniorafiei trebuie să includă:',
 ['Înțelegerea de către pacient a riscurilor intervenției versus tratamentul non-chirurgical, mai ales la cei cu risc crescut de morbiditate perioperatorie','Personalizarea riscului de recidivă după antecedente abdominale, obezitate, vârstă, tutun, status de performanță și dimensiunile herniei','Mențiunea riscurilor specifice: serom, infecție de proteză, afectare nervoasă și leziuni intestinale','Asigurarea că recidiva este nulă după plasă, consilierea fiind superfluă','Resursele de tip calculator ACS fiind rezervate doar diastazisului'],'ABC',128,'Consilierea pacientului',
 'Listarea conținutului consilierii (risc operator vs conservator, recidivă personalizată, complicații specifice).',
 ['Contrastul chirurgical versus non-chirurgical este explicit.','Factorii de personalizare a recidivei sunt citați.','Seromul, infecția de plasă, nervii și intestinul sunt listați.','Recidiva rămâne posibilă; consilierea este esențială.','Calculatorul ACS este menționat pentru educația pacienților cu hernie.']],
 8,'Anulează consilierea pe motivul unei recidive nule după plasă, contrar listei de riscuri.',['Consilierea pacientului','Colegiul American al Chirurgilor']),

q(39,['Alegerea tehnicii pentru hernia OMP, potrivit capitolului:',
 ['Procedeele protetice trebuie oferite, dacă plasa nu este contraindicată de contaminare, strangulare cu ischemie/necroză sau leziune intestinală incidentală','Tehnicile minim-invazive sunt puternic recomandate pentru hernia unilaterală nerecidivată și pentru hernia femurală','Sunt tehnicile preferate la femei, pentru că pot repara hernii femurale oculte','Plasa este evitată în câmp curat, procedeele tisulare rămânând standardul','MIS este evitată la femei, herniile femurale oculte neexistând'],'ABC',134,'Alegerea unei tehnici — Proteză și MIS',
 'Aplicarea protezei ca regulă (cu excepțiile de contaminare/ischemie) și a recomandării MIS la unilaterală, femurală și femei.',
 ['Regula protezei și contraindicațiile sunt explicite.','Recomandarea puternică pentru unilaterală nerecidivată și femurală este citată.','Preferința la femei pentru femuralele oculte este enunțată.','Proteza este standardul în absența contaminării.','MIS este tocmai preferată la femei.']],
 8,'Readuce procedeele tisulare ca standard în câmp curat și evită MIS la femei, inversul algoritmului.',['hernia unilaterală','hernii femurale oculte']),

q(40,['Conform Tabelului 11.1, procedeele tisulare Bassini și Shouldice:',
 ['Bassini suturează tendonul conjunct la ligamentul ilioinghinal; se folosește pentru hernii directe și indirecte, nu pentru femurală; cere incizie de relaxare','Shouldice este complexă, în mai multe straturi, considerată fără tensiune, și nu se folosește pentru hernia femurală','Shouldice poate avea cea mai redusă rată de recidivă dintre procedeele tisulare','Incizia de relaxare, similară separării componentelor, este notată ca necesară la Bassini pentru a reduce tensiunea','Shouldice este procedeul tisular de elecție pentru hernia femurală, fără relaxare deoarece acoperă Cooper'],'ABCD',135,'Tabelul 11.1 — Bassini versus Shouldice',
 'Contrastarea Bassini (ilioinghinal, relaxare, fără femurală) cu Shouldice (multistrat, fără tensiune, recidivă minimă, tot fără femurală).',
 ['Sutura la ilioinghinal, indicațiile și relaxarea Bassini sunt tabelate.','Multistratul, absența tensiunii și excluderea femuralei la Shouldice sunt citate.','Cea mai redusă recidivă tisulară este atribuită Shouldice.','Nota de subsol leagă relaxarea de tehnica separării componentelor.','Femurala tisulară este McVay (Cooper), nu Shouldice.']],
 8,'Atribuie Shouldice indicația femurală a lui McVay, coloana „tipuri de hernii” a aceluiași tabel.',['Bassini','Shouldice']),

q(41,['Simptomele strangulării herniei, care impun urgență, includ:',
 ['Greață și vărsături incoercibile, durere severă, tahicardie, febră și peritonită localizată','Leucocitoză, acidoză sau semne imagistice de ocluzie','Modificări de culoare a tegumentului sugestive pentru necroza țesutului subiacent','Posibilitatea rezecțiilor de organe când conținutul sacului este ischemic','Programarea electivă la 6 luni, acidoza fiind un semn de colică biliară, nu de ischemie'],'ABCD',128,'Strangulare — Semne de urgență',
 'Recunoașterea constellationii clinic-biologice de strangulare și a rezecției posibile, față de amânarea electivă.',
 ['Simptomele sistemice și peritonita sunt de la sfârșitul paginii precedente, continuate aici.','Leucocitoza, acidoza și ocluzia imagistică sunt explicite.','Modificarea de culoare tegumentară este citată.','Rezecția de organ ischemic este menționată.','Acidoza impune urgență, nu programare electivă.']],
 8,'Amână strangularea (acidoză, peritonită) ca pe o colică, inversul indicației de urgență.',['leucocitoza, acidoza','modificări de culoare'],[127]),

q(42,['În sindromul durerii inghinale pubiene, imagistica se alege astfel:',
 ['IRM-ul este examenul ales atunci când sunt suspectate leziunile de tendon și mușchi; poate arăta dezvoltare musculară asimetrică sau inflamație a fasciei pubiene','Dacă se suspectează osteita de pubis, este recomandată o scanare a osului','Radiografia simplă înlocuiește IRM-ul pentru leziunile tendinoase','Ecografia nu are rol în excluderea unei hernii sau a unei patologii testiculare','CT-ul este mai dependent de operator decât ecografia și se evită în patologia inghinală'],'AB',137,'Pubalgie — IRM și scanarea osoasă',
 'Poziționarea IRM-ului pentru tendon/mușchi și a scanării osoase pentru osteita pubiană, față de ecografie/CT.',
 ['IRM ca examen ales și semnele de asimetrie/inflamație sunt explicite.','Scanarea osoasă în osteita de pubis este citată.','IRM, nu radiografia, e alegerea pentru tendoane.','Ecografia poate exclude hernie sau patologie testiculară.','CT-ul e descris ca mai puțin dependent de operator decât ecografia.']],
 8,'Pune radiografia simplă înaintea IRM-ului pentru leziunea tendinoasă, inversul ierarhiei din paragraf.',['IRM-ul însă','osteita de pubis']),

q(43,['Când durerea inghinală este suferința principală, fără hernie simptomatică:',
 ['Tratamentul non-chirurgical este cea mai bună abordare terapeutică','Durerea prezentă înainte de intervenție este cel mai bun factor predictiv al durerii cronice debilitante de după operație','Managementul include AINS, limitarea activității fizice și terapie de recuperare','Herniorafia imediată vindecă durerea preexistentă, prognosticul fiind sigur favorabil','Fizioterapia agravează pubalgia și se evită înaintea plasei'],'ABC',137,'Pubalgie — Tratament conservator',
 'Aplicarea conservatorului ca primă linie și a durerii preoperatorii ca predictor al durerii cronice post-herniorafie.',
 ['Non-chirurgicalul ca cea mai bună abordare este explicit.','Predictorul (durerea preoperatorie) este citat.','AINS, limitarea efortului și recuperarea sunt listate.','Textul cere gândire atentă și discuție sinceră despre prognostic, nu vindecare sigură.','Terapia de recuperare face parte din management, nu se evită.']],
 8,'Operează pubalgia de primă intenție, deși durerea preoperatorie prezice durerea cronică postoperatorie.',['non-chirurgical','terapie de recuperare fizică']),

q(44,['Herniile se grupează, în acest capitol, în:',
 ['Herniile peretelui abdominal și herniile inghinale sau ale orificiului miopectineal (OMP); hernia obturatorie este un tip particular, detaliat separat','Doar hernii ombilicale, celelalte localizări fiind ignorate','Herniile OMP și diastazisul, ca entități cu defect identic','Un singur grup, fără distincție între perete și OMP','Numai hernii parastomale, OMP-ul nefiind recunoscut'],'A',125,'Clasificare — Perete versus OMP',
 'Recunoașterea bipartiției perete abdominal / OMP și a statutului separat al herniei obturatorii.',
 ['Cele două categorii principale și excepția obturatorie sunt explicite.','Figura 11-1 arată multiple localizări, nu doar ombilicalul.','Diastazisul nu are defect, deci nu e o hernie OMP.','Distincția perete versus OMP deschide capitolul.','Parastomalele sunt o excepție a peretelui, nu unicul grup.']],
 8,'Topesc OMP-ul în diastazis sau reduc capitolul la ombilical, anulând bipartiția de deschidere.',['orificiului miopectineal','hernia obturatorie']),

q(45,['Prevenția infecției după herniorafia ventrală include:',
 ['Antibioterapie preoperatorie','Evitarea montării plasei în țesuturi contaminate, reechilibrarea comorbidităților și abord minim-invaziv, când este posibil','Recunoașterea precoce a infecției superficiale, pentru a limita extinderea către plasă','Montarea de principiu a plasei în câmp contaminat, antibioticele preoperatorii fiind inutile','Ignorarea eritemului superficial, infecția de plasă neputând urma unei infecții de tegument'],'ABC',130,'Infecția de plagă — Prevenție',
 'Ierarhia antibiotice preoperatorii / evitare plasă contaminată / MIS / recunoaștere precoce a infecției superficiale.',
 ['Antibioticele preoperatorii sunt primul gest listat.','Evitarea plasei în contaminare, comorbiditățile și MIS sunt citate.','Recunoașterea precoce limitează răspândirea către plasă.','Plasa în contaminare e tocmai de evitat.','Infecția superficială netratată poate ajunge la plasă.']],
 8,'Montează plasa în contaminare și ignoră infecția superficială, inversul prevenției din paragraf.',['Antibiotice preoperatorie','excizia plasei']),

q(46,['Comparând TEP cu TAPP în cura posterioară a OMP:',
 ['Ambele implică trei incizii mici și utilizează o proteză; plasa se așază între peritoneu și OMP','TEP nu intră în cavitatea peritoneală: se creează un spațiu între dreptul abdominal și peritoneu și se poate face doar cu echipament laparoscopic','TAPP pătrunde în peritoneu similar altei MIS, disecă peritoneul de pe OMP, așază plasa și reatașează peritoneul; se poate face laparoscopic sau robotic','TEP se face de principiu robotic, TAPP fiind imposibil laparoscopic','Niciuna nu folosește proteză, ambele fiind procedee tisulare Bassini'],'ABC',134,'TEP versus TAPP — Echipament',
 'Contrastarea TEP (extraperitoneal, doar laparoscopic) cu TAPP (intraperitoneal, lap sau robotic), ambele protetice.',
 ['Cele trei incizii, proteza și poziția între peritoneu și OMP sunt explicite.','Spațiul drept-peritoneu și limita la laparoscopie definesc TEP.','Reatașarea peritoneului și opțiunea robotică definesc TAPP.','Direcția echipamentului este inversată.','Ambele folosesc proteză; Bassini e tisular anterior.']],
 8,'Inversează echipamentul (TEP robotic versus TAPP doar laparoscopic) și golește ambele de proteză.',['total extraperitoneal','transabdominal preperitoneal']),
];
