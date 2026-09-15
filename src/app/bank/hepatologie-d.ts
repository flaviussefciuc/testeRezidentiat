import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const pdfOffset=(p:number)=>p===1275?313:p<=1284?p-970:p-973;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hepatologie',34,pdfOffset,`hepatologie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const HEPATOLOGIE_D=[
q(88,['Hepatita cronică, dincolo de definiția de ≥6 luni, se caracterizează histologic prin:',
 ['Infiltrate portale cronice cu limfocite, plasmocite și, uneori, foliculi limfoizi','Hepatită de interfață: pierderea definiției plăcii portal/periportal, prin apoptoză mai degrabă decât necroză','Fibroză ușoară, în punte (porto-centrală, centro-centrală, porto-portală) sau ciroză','Infiltrat portal strict neutrofilic, fără limfocite, patognomonic VHA','Interfața se datorează necrozei de zonă 1, apoptoza fiind absentă'],'ABC',1275,'Hepatita — Cronică: foliculi limfoizi și interfață apoptotică',
 'Recunoașterea infiltratei portale limfo-plasmocitare cu foliculi și a interfeței ca apoptoză, nu necroză.',
 ['Limfocitele, plasmocitele și foliculii limfoizi sunt din text.','Interfața este definită prin apoptoză, nu necroză.','Spectrul fibrozei până la punți/ciroză este explicit.','Infiltratul este limfocitar, nu strict neutrofilic.','Textul atribuie distrucția de interfață apoptozei, nu necrozei de zonă 1.']],
 8,'Apoptoza de interfață versus necroza acută de zonă 3 este capcana de pe aceeași pagină.',['foliculi limfoizi','de interfaţă']),

q(89,['Precizați enunțul corect privind cauza principală mondială de boală hepatică cronică, ciroză și HCC:',
 ['Deficitul de α1-antitripsină','Alcoolul, în toate regiunile, depășind virusurile','Hepatita cronică virală','Steatoza non-alcoolică, unica cauză recunoscută în Asia','VHE la imunocompetenți, ca status de purtător universal'],'C',1275,'Hepatita — Cauza principală mondială: hepatita virală cronică',
 'Reținerea hepatitei virale cronice ca principală cauză mondială de ciroză și HCC.',
 ['α1-AT este o cauză ereditară, nu principala mondială.','Alcoolul predomină în Occident, nu mondial.','Textul identifică hepatita cronică virală drept cauza principală mondială.','NAFLD nu este unica cauză în Asia.','VHE nu cronicizează la imunocompetenți.']],
 8,'Capcana este substituirea cauzei mondiale (virus) cu alcoolul occidental sau cu α1-AT.',['cauza principală','carcinom hepatocelular']),

q(90,['Severitatea hepatitei cronice se judecă după:',
 ['Gradul necrozei hepatocitare și al inflamației (grading)','Severitatea fibrozei sau a cirozei (staging)','Adițional pot apărea necroză confluentă, modificare lobulară, necroză litică focală, apoptoză și inflamație focală','Grading-ul care înlocuiește etiologia, staging-ul fiind abandonat','Un singur scor cantitativ identic, aplicabil oricărei etiologii fără nuanță'],'ABC',1275,'Hepatita — Grading versus staging în hepatita cronică',
 'Deosebirea grading (necroză/inflamație) de staging (fibroză/ciroză), plus leziunile adiționale (confluentă, litică, focală).',
 ['Grading-ul vizează necroza și inflamația.','Staging-ul vizează fibroza sau ciroza.','Lista de leziuni adiționale (confluentă, litică, focală) este din paragraful de hepatită cronică.','Cele două dimensiuni coexistă; etiologia rămâne criteriul de clasificare.','Textul nu reduce evaluarea la un scor unic independent de etiologie.']],
 8,'Grading versus staging sunt ușor de fuzionat într-un „scor unic etiologic”.',['grading','staging']),

q(91,['În icterul hemolitic și în testele hematologice adjuvante ale hepatitei:',
 ['Bilirubina este crescută, iar celelalte teste biochimice sunt normale','Printre alte teste din sânge figurează AMA pentru CBP','Statusul HIV este irelevant în evaluarea hepatitei acute','Leucocitoza neutrofilică definește hepatita virală, AMA fiind rezervat PSC','Bilirubina hemolitică se însoțește de FA maximală, identic obstacolului extrahepatic'],'AB',1275,'Hepatita — Icter hemolitic și AMA pentru CBP',
 'Deosebirea icterului hemolitic (doar bilirubină) de colestază și recunoașterea AMA ca test pentru CBP.',
 ['Patternul „doar bilirubină” al hemolizei este din text.','AMA pentru CBP figurează printre testele etiologice.','Textul cere, dimpotrivă, stabilirea statusului HIV.','Hepatita virală asociază mai degrabă leucopenie; AMA este al CBP, nu al PSC.','FA maximală este a obstacolului extrahepatic, nu a hemolizei.']],
 8,'Icterul hemolitic (biochimie altfel normală) este ușor de citit ca obstacol extrahepatic.',['icterul hemolitic','AMA pentru CBP']),

q(92,['Caracteristici histologice variabile ale hepatitei acute, alături de necroza de zonă 3, includ:',
 ['Colestază în zona 3','Încărcare grasă, evidentă mai ales în hepatita alcoolică sau medicamentoasă','Corpi eozinofili Councilman, cu balonizare și vacuolizare hepatocitară','Colestază maximală de zonă 1, identică PBC precoce, fără steatoză','Councilman-ul este patognomonic PBC, steatoza fiind absentă în hepatita medicamentoasă'],'ABC',1275,'Hepatita — Colestază de zonă 3 și corpi Councilman',
 'Plasarea colestazei și steatozei pe zona 3, alături de corpii Councilman, distincte de PBC de zonă 1.',
 ['Colestaza în zona 3 este citată ca trăsătură variabilă.','Încărcarea grasă în hepatita alcoolică sau medicamentoasă este explicită.','Councilman, balonizarea și vacuolizarea sunt din paragraful de patologie acută.','Zona 1 colestatică este a PBC, nu a hepatitei acute tipice.','Councilman nu este al PBC; steatoza medicamentoasă este menționată.']],
 8,'Zona 3 (colestază/steatoză acută) versus zona 1 (PBC) este firul roșu al histologiei.',['zona 3','corpi eozinofiliei Councilman']),

q(93,['Alegeți afirmațiile corecte referitoare la țintele moleculare ale DAA în VHC:',
 ['Medicamentele țintesc enzime din interiorul virusului, de obicei polimeraza, proteina NS5A sau proteaza NS3/4','Sofosbuvirul este un inhibitor nucleotidic al polimerazei, combinat cu un inhibitor NS5A','Combinația poate fi o singură tabletă 8–12 săptămâni','Sofosbuvir/velpatasvir este pangenotipică, iar sofosbuvir/ledipasvir este specifică genotipurilor 1 și 4','Sofosbuvir/ledipasvir este pangenotipică, iar velpatasvir este rezervat genotipurilor 1 și 4'],'ABCD',1284,'Hepatita virală C — Ținte: polimerază, NS5A, NS3/4',
 'Maparea celor trei ținte enzimatice și a perechii pangenotipică (velpatasvir) versus GT1/4 (ledipasvir).',
 ['Cele trei ținte sunt din text.','Sofosbuvir ca inhibitor nucleotidic de polimerază este explicit.','Schema o tabletă 8-12 săptămâni este citată.','Velpatasvir pangenotipic versus ledipasvir GT1/4 este distincția paginii.','Perechea este inversă: ledipasvir este GT1/4, velpatasvir este pangenotipic.']],
 8,'Inversarea velpatasvir/ledipasvir pe genotipuri este capcana clasică a paginii de DAA.',['NS5a','proteaza NS3/4']),

q(94,['Identificați afirmația corectă referitoare la histologia hepatitei acute:',
 ['Majoritatea modificărilor sunt specifice etiologic, biopsia înlocuind serologia','Deși anumite caracteristici histologice sunt sugestive pentru factorul etiologic, majoritatea modificărilor sunt nespecifice','Necroza este maximală în zona 1, indiferent de agent','Extinderea necrozei este identică la toți pacienții infectați cu același agent','Hepatocitele rămân intacte, fără degenerescență sau necroză'],'B',1275,'Hepatita — Histologie acută: modificări în principal nespecifice',
 'Reținerea că, deși unele trăsături sugerează etiologia, majoritatea modificărilor histologice sunt nespecifice.',
 ['Textul nu atribuie specificitate etiologică majorității leziunilor.','Formularea despre caracteristici sugestive, dar modificări în principal nespecifice, este din paragraf.','Necroza este de obicei maximală în zona 3.','Extinderea necrozei variază interindividual, chiar la același agent.','Hepatocitele prezintă degenerescență și necroză.']],
 8,'Nespecificitatea histologică versus tentația de a citi etiologia pe biopsie este capcana de morfopatologie.',['sugestive pentru','nespecifice']),

q(95,['Genomul VHE (Fig. 34.19) și diagnosticul de laborator:',
 ['Este un genom ARN monocatenar cu trei cadre de citire libere (ORF)','ORF1 codifică proteine non-structurale, ORF2 proteine structurale, ORF3 fiind nedeterminat','ELISA detectează anti-VHE IgG sau IgM; ARN VHE poate fi evidențiat în ser sau scaun prin PCR','Este un ADN din Hepadnaviridae, ORF3 codificând HBsAg','Diagnosticul se bazează doar pe biopsie, testele serologice nefiind disponibile'],'ABC',1284,'Hepatita virală E — ORF1–3 și PCR în ser/scaun',
 'Citirea celor trei ORF (ORF3 nedeterminat) și a pachetului ELISA plus PCR în ser sau scaun.',
 ['ARN monocatenar cu trei ORF este din figură.','Atribuirea ORF1/ORF2 și caracterul nedeterminat al ORF3 sunt explicite.','ELISA IgG/IgM și PCR în ser sau scaun sunt citate.','Hepadnaviridae/HBsAg aparțin VHB, nu VHE.','Testele serologice și PCR sunt disponibile.']],
 8,'ORF3 „nedeterminat” este detaliul de genom ușor de înlocuit cu HBsAg.',['ORF 3','ARN VHE']),

q(96,['Identificați afirmația corectă referitoare la agentul GB (VHG) și la virusul transmis prin transfuzie (TTV):',
 ['Nu au fost documentați ca factori cauzatori de boală la oameni','Sunt cauzele principale de ciroză la nivel mondial, înlocuind VHB','TTV este vaccinul chinezesc anti-VHE, aplicat de rutină în UE','Biochimia hepatică alterată din aceste infecții definește insuficiența fulminantă la toți purtătorii','Sunt virusuri ADN din Hepadnaviridae, identice VHB'],'A',1284,'Hepatita — VHG/TTV: fără cauzalitate umană documentată',
 'Recunoașterea absenței cauzalității documentate pentru VHG și TTV, distinctă de cota non-A–E.',
 ['Textul precizează că nu au fost documentați ca factori cauzatori de boală la oameni.','Nu înlocuiesc VHB ca principală cauză de ciroză.','TTV nu este un vaccin.','Nu definesc insuficiența fulminantă.','Hepadnaviridae aparține VHB, nu acestor agenți.']],
 8,'Absența cauzalității VHG/TTV este ușor de citit ca noile cauze majore de ciroză.',['Agentul GB','T TV']),

q(97,['Prevenția și epidemiologia VHE, dincolo de vaccinul chinezesc:',
 ['Prevenția și controlul depind de respectarea regulilor de igienă și de calitatea sistemului de sănătate','În țările în curs de dezvoltare, epidemiile sunt întâlnite; în cele dezvoltate, cazurile sunt sporadice, după contact cu animale de fermă sau călătorii','Contaminarea cărnii nu este rară; infecția derivată de la animale este de obicei mai puțin agresivă decât cea hidrică din subcontinentul Indian','VHE a dispărut din Europa, carnea nefiind rezervor, igiena fiind inutilă','Infecția hidrică indiană este mai blândă decât zoonoza europeană, fără epidemii în țările în dezvoltare'],'ABC',1284,'Hepatita virală E — Igienă, carne contaminată și zoonoză',
 'Contrastul epidemii hidrice versus cazuri sporadice zoonotice și afirmația că contaminarea cărnii nu este rară.',
 ['Igiena și sistemul de sănătate sunt pârghiile de prevenție.','Epidemii în țările în dezvoltare versus sporadice în cele dezvoltate sunt din text.','Contaminarea cărnii și agresivitatea mai mică a zoonozei versus apa indiană sunt explicite.','VHE este comun în UE; carnea este rezervor.','Relația de agresivitate este inversă.']],
 8,'„Contaminarea cărnii nu este rară” este detaliul zoonotic ușor de negat.',['Contaminarea','cărnii']),

q(98,['Ciroza, ca definiție morfologică și funcțională, înseamnă:',
 ['Arhitectura hepatică difuz alterată, ceea ce interferează cu circulația sanguină și cu funcțiile ficatului','Manifestări clinice de hipertensiune portală și de insuficiență hepatică','Noduli de regenerare separați prin septe fibroase, cu pierderea arhitecturii lobulare în interiorul nodulilor','Păstrarea arhitecturii lobulare, fără noduli, circulația rămânând intactă','Ciroza nu interferează cu circulația, funcțiile ficatului rămânând intacte'],'ABC',1289,'Ciroza hepatică — Definiție: arhitectură, septe și HTP',
 'Fixarea triadei arhitectură alterată–circulație interferată–noduli cu septe, ca sursă a HTP și a insuficienței.',
 ['Alterarea difuză cu interferența circulației și funcțiilor este definiția din text.','HTP și insuficiența hepatică sunt consecințele clinice citate.','Nodulii de regenerare cu septe și pierderea arhitecturii lobulare sunt trăsăturile specifice.','Arhitectura lobulară este pierdută, nu păstrată.','Textul afirmă tocmai interferența cu circulația și funcțiile.']],
 8,'Definiția prin interferența circulatorie este ușor de înlocuit cu „ficat nodular dar funcțional”.',['arhitectura hepatică','sepie fibroase']),

q(99,['Cauze mai puțin uzuale de ciroză din Cadranul 34.14 includ:',
 ['Fibroza chistică și galactozemia','Glicogenozele și boala veno-ocluzivă','Medicamente precum metotrexatul; sindromul Budd-Chiari','Congestia venoasă hepatică și forma idiopatică (criptogenetică)','Cauza unică rămâne VHE la imunocompetenți, restul fiind abandonate'],'ABCD',1289,'Ciroza hepatică — Cadranul 34.14: metotrexat, Budd-Chiari, glicogenoze',
 'Completarea listei rare (CF, galactozemie, glicogenoze, VOD, metotrexat, Budd-Chiari).',
 ['Fibroza chistică și galactozemia figurează la „altele”.','Glicogenozele și boala veno-ocluzivă sunt citate.','Metotrexatul și Budd-Chiari sunt în cadran.','Congestia venoasă și criptogenetica completează lista.','Cadranul enumeră numeroase cauze, nu un singur virus.']],
 8,'Metotrexatul și Budd-Chiari sunt detalii de cadran ușor de omis în favoarea virusurilor uzuale.',['metotrexat','Budd-Chiari']),

q(100,['Dacă cauza fibrozei este eliminată, textul distinge:',
 ['Rezoluția fibrozei incipiente: inversare completă, cu arhitectură aproape normală','Regresia cirozei constituite: ameliorare, nu restitutio ad integrum, care totuși îmbunătățește evoluția clinică','Terapii antifibrotice, inclusiv strategii de transplant de celule stem, aflate în dezvoltare','Transplantul hepatic ca singurul tratament disponibil pentru insuficiența hepatică','Restitutio ad integrum în ciroza constituită, antifibroticele orale fiind deja standardul'],'ABCD',1289,'Ciroza hepatică — Rezoluție versus regresie, celule stem',
 'Deosebirea rezoluției fibrozei incipiente de regresia (nu restitutio) a cirozei constituite.',
 ['Rezoluția cu arhitectură aproape normală este din text.','Regresia fără restitutio ad integrum este explicită.','Celulele stem (OCR: stern) sunt menționate printre strategiile în dezvoltare.','Transplantul rămâne singurul tratament al insuficienței.','Restitutio este negat pentru ciroza constituită; antifibroticele nu sunt standard.']],
 8,'Rezoluție (incipientă) versus regresie (constituită) sunt două trepte ușor de fuzionat.',['restitutio ad integrum','celule stern']),

q(101,['Imagistica în ciroză, dincolo de Fibroscan și de biopsia cu picrosirius:',
 ['Ecografia arată ecogenitate difuz crescută prin încărcare grasă și fibroză; evaluează sistemul porte și venele hepatice','CT cu contrast în faza arterială este util pentru depistarea HCC','Endoscopia detectează și tratează varicele și gastropatia portal-hipertensivă, prin ligatură sau scleroterapie','Colonoscopia este efectuată ocazional pentru colopatie; RMN distinge tumori maligne și benigne, cum ar fi hemangioamele','Ecografia nu vizualizează vena portă, colonoscopia înlocuind endoscopia variceală'],'ABCD',1290,'Ciroza hepatică — CT arterial, colopatie și hemangioame',
 'Completarea pachetului imagistic cu faza arterială CT, colopatia colonoscopică și hemangioamele RMN.',
 ['Ecogenitatea crescută și evaluarea porte/hepatice sunt din text.','Faza arterială CT pentru HCC este explicită.','Gastropatia portal-hipertensivă cu ligatură/scleroterapie este citată.','Colopatia și hemangioamele RMN sunt menționate.','Vena portă se evaluează ecografic; colonoscopia nu înlocuiește endoscopia variceală.']],
 8,'Colopatia și hemangioamele RMN sunt detalii imagistice nefolosite, ușor de negat.',['colopatie','hemangioamele']),

q(102,['Pentru diagnosticul și stadializarea hepatitei cronice virale, biopsia cere:',
 ['Eșantioane adecvate ca lungime a fragmentului și ca număr de spații porte complete','Teste imunocitochimice care pot identifica virusuri, ducte biliare, structuri angiogenice și markeri oncogeni','În ciroza macronodulară, miezul nodulului se poate fragmenta, provocând erori de eșantionare','Un fragment scurt, fără spații porte, suficient dacă elastografia este >25 kPa','Imunocitochimia este inutilă, markerii oncogeni neavând loc pe biopsie'],'ABC',1290,'Ciroza hepatică — Biopsie: lungime, spații porte, imunocitochimie',
 'Cerința de lungime și de spații porte complete, plus spectrul imunocitochimic (virus, ducte, angiogeneză, oncogene).',
 ['Lungimea și spațiile porte complete sunt din text.','Imunocitochimia pentru virusuri, ducte, angiogeneză și oncogene este citată.','Eroarea de eșantionare prin fragmentarea nodulului macronodular este explicită.','Fragmentul scurt este inadecvat.','Imunocitochimia are loc explicit.']],
 8,'Spațiile porte complete și markerii oncogeni sunt criterii de calitate ușor de ignorat în favoarea Fibroscan-ului.',['spaţii porte complete','markeri oncogeni']),

q(103,['Punctajul Child-Pugh pentru bilirubină (µmol/L), albumină (g/L) și prelungirea TP (secunde) atribuie:',
 ['Bilirubină: <34, 34–50 și >50 µmol/L pentru 1, 2 și 3 puncte','Albumină: >35, 28–35 și <28 g/L','Timp de protrombină: <4, 4–6 și >6 secunde peste normal','Bilirubină: <10, 10–20 și >100 µmol/L, identic pragului de transplant din PBC','Albumină >40 g/L primește 3 puncte, TP <4 secunde primind 3 puncte'],'ABC',1291,'Ciroza hepatică — Child-Pugh: cut-off-uri bilirubină, albumină, TP',
 'Memorarea pragurilor 34/50 µmol/L, 35/28 g/L și 4/6 secunde, distincte de bilirubina >100 a PBC.',
 ['Cut-off-urile 34 și 50 µmol/L sunt din cadran.','Albumina 35 și 28 g/L sunt explicite.','TP 4 și 6 secunde peste normal sunt citate.','>100 µmol/L este reperul de transplant din PBC, nu punctajul Child.','Direcțiile sunt inverse: albumina joasă și TP lung primesc punctajul mare.']],
 8,'Permutează 34/50 (Child) cu 100 (PBC-transplant) și inversează direcția albuminei.',['<34','28-35']),

q(104,['Indicații de transplant hepatic mai puțin abordate, alături de Child C/MELD ≥20:',
 ['Insuficiența hepatică acută de orice cauză','Hepatita cronică B, dacă ADN VHB este negativ sau scade sub analogi; recurența se previne cu imunoglobulină B plus analogi nucleozidici','Hepatita autoimună neresponsivă, cu risc de reapariție după grefă','PSC, boala polichistică a ficatului și oxaluria primară','VHB cu ADN în creștere, fără analogi, recurența fiind de nedorit a fi prevenită'],'ABCD',1292,'Ciroza hepatică — Transplant: VHB cu HBIG, AIH, oxalurie',
 'Completarea listei cu IHA de orice cauză, pachetul HBIG+analogi în VHB și indicațiile metabolice (oxalurie, ficat polichistic).',
 ['IHA de orice cauză figurează la indicații.','HBIG plus analogi nucleozidici previn recurența VHB.','AIH poate reapărea.','PSC, ficatul polichistic și oxaluria primară sunt citate.','ADN în creștere fără analogi nu este scenariul de listă; prevenția recurenței este tocmai scopul HBIG.']],
 8,'HBIG plus analogii post-VHB și oxaluria primară sunt detalii de listă nefolosite.',['imunoglobulină','oxaluria']),

q(105,['O femeie de 44 de ani cu PBC și bilirubină persistent 120 µmol/L este discutată pentru grefă. Momentul transplantului:',
 ['Depinde de disponibilitatea donatorului','Toți pacienții cu ciroză în stadiu final (Child C; MELD ≥20; UKELD ≥49) și cei cu simptome debilitante trebuie îndrumați către un centru de transplant','În PBC, bilirubina constant >100 µmol/L sau pruritul intratabil sunt repere','Disponibilitatea donatorului este irelevantă, listarea făcându-se la Child A','Bilirubina >100 µmol/L contraindică transplantul în PBC'],'ABC',1292,'Ciroza hepatică — Timing: donator, Child C și bilirubină PBC >100',
 'Aplicarea pragurilor Child C/MELD ≥20/UKELD ≥49 și a bilirubinei PBC >100, cu constrângerea donatorului.',
 ['Disponibilitatea donatorului condiționează momentul.','Child C, MELD ≥20 și UKELD ≥49 plus simptomele debilitante cer îndrumare.','>100 µmol/L sau pruritul intratabil sunt reperele PBC.','Listarea nu se face la Child A ca regulă.','Bilirubina >100 este indicație, nu contraindicație, în PBC.']],
 8,'Vigneta PBC testează >100 µmol/L ca indicație, nu ca prag de excludere.',['disponibilitatea donatorului','UKELD']),

q(106,['În hemoragia variceală acută, măsuri adjuvante din algoritmul Fig. 34.23 includ:',
 ['Montarea unui robinet pentru ascită','Administrarea de tiamină intravenos','Dacă TIPS nu este disponibil, intervenție chirurgicală sau injectare cu substanțe adezive sau trombină','Octreotidul figurează alături de terlipresină și somatostatină în schema vasoconstrictoare','Tiamina este contraindicată, robinetul de ascită înlocuind resuscitarea'],'ABCD',1294,'Ciroza hepatică — Hemoragia variceală: tiamină, robinet, adeziv',
 'Completarea algoritmului cu tiamina i.v., paracenteza (robinet) și alternativa adeziv/trombină când TIPS lipsește.',
 ['Robinetul pentru ascită este un pas din text.','Tiamina i.v. este cerută.','Adezivul sau trombina, ori chirurgia, sunt alternativele fără TIPS.','Octreotidul apare în figură alături de terlipresină/somatostatină.','Tiamina nu este contraindicată; resuscitarea rămâne primul pas.']],
 8,'Tiamina și injectarea cu adeziv/trombină sunt detalii de algoritm nefolosite.',['tiamină intravenos','substanţe adezive']),

q(107,['Sevrajul alcoolic la ciroticul care sângerează se tratează preferențial cu:',
 ['Clordiazepoxid, al cărui timp de înjumătățire scade în boala avansată','Lorazepam sau oxazepam, timpul de înjumătățire al clordiazepoxidului crescând în boala hepatică avansată','Haloperidol ca unică linie, benzodiazepinele fiind interzise','Fenobarbital de primă intenție, fără tiamină','Clordiazepoxid în doze mari, timpul de înjumătățire fiind neschimbat'],'B',1294,'Ciroza hepatică — Sevraj: lorazepam/oxazepam versus clordiazepoxid',
 'Alegerea lorazepam/oxazepam deoarece t1/2 al clordiazepoxidului crește, nu scade, în boala avansată.',
 ['Direcția t1/2 a clordiazepoxidului este inversă, deci nu este preferat.','Textul recomandă lorazepam sau oxazepam tocmai pentru că t1/2 al clordiazepoxidului crește.','Benzodiazepinele (lorazepam/oxazepam) sunt linia citată.','Tiamina i.v. este asociată, nu omisă.','t1/2 al clordiazepoxidului crește, nu rămâne neschimbat.']],
 8,'Direcția timpului de înjumătățire al clordiazepoxidului (crește) selectează lorazepam/oxazepam.',['lorazepam','clordiazepoxidului']),

q(108,['Morfopatologia PSC include aspectul clasic de:',
 ['„Coajă de ceapă” — inflamație a ramurilor biliare mici intrahepatice asociată cu țesut cicatricial','Modificări care variază de la infiltrate inflamatorii minore până la ciroză constituită','Granuloame AMA-pozitive de zonă 1, identic PBC, fără stricturi','Steatoză de zonă 3 cu corpi Mallory, fără leziune biliară','Absența oricărei inflamații biliare, diagnosticul fiind doar serologic'],'AB',1300,'Ciroza hepatică — PSC: coajă de ceapă',
 'Recunoașterea leziunii „coajă de ceapă” a ductelor mici, pe spectrul până la ciroză.',
 ['Aspectul de coajă de ceapă este descrierea clasică.','Spectrul de la infiltrat minor la ciroză este explicit.','Granuloamele AMA sunt ale PBC, nu ale PSC.','Steatoza de zonă 3 este a alcoolului.','Histologia poate fi contributivă, inflamația biliară fiind prezentă.']],
 8,'„Coaja de ceapă” biliară este ușor de mutat pe PBC (granuloame) sau pe alcool (Mallory).',['coajă de ceapă','ramurilor biliare mici']),

q(109,['Tratamentul PSC, dincolo de UDCA 30 mg/kg fără beneficiu:',
 ['Singurul tratament dovedit a fi eficient este transplantul hepatic','Dozele mari de UDCA (30 mg/kg) pot fi chiar dăunătoare','Colangita recurentă poate fi întâlnită înainte de debutul cirozei','Stricturile extrahepatice dominante se tratează endoscopic (dilatare cu balon și stent temporar)','UDCA 30 mg/kg înlocuiește transplantul, colangita recurentă fiind excepțională'],'ABCD',1300,'Ciroza hepatică — PSC: transplant ca unică terapie dovedită',
 'Ierarhizarea transplantului ca unică terapie dovedită, cu avertismentul că UDCA în doză mare poate dăuna.',
 ['Transplantul este singurul tratament dovedit eficient.','Dozele mari pot fi dăunătoare.','Colangita recurentă pre-ciroză este citată.','Dilatarea cu balon și stentul temporar sunt pentru stricturile dominante extrahepatice.','UDCA în doză mare nu înlocuiește transplantul.']],
 8,'„Poate fi chiar dăunător” la 30 mg/kg este nuanța nefolosită, dincolo de simpla ineficiență.',['dăunătoare','transplantul hepatic']),

q(110,['Ciroza biliară secundară rezultă din:',
 ['Obstrucția prelungită (luni de zile) a ductelor biliare mari','Cauze precum stenozele căii biliare principale, calculii biliari și colangita sclerozantă','Ecografie și MRCP, urmate uneori de ERCP sau, dacă abordarea endoscopică este dificilă, de colangiografie transhepatică percutană','Orice obstacol identificat trebuie rezolvat','Obstrucția de câteva ore a unui duct de ordinul 5, fără indicație de decomprimare'],'ABCD',1300,'Ciroza hepatică — Ciroza biliară secundară: luni de obstacol și PTC',
 'Reținerea duratei (luni) și a algoritmului eco/MRCP → ERCP sau PTC, cu rezolvarea obstacolului identificat.',
 ['Durata de luni de zile este din text.','Stenozele, calculii și PSC sunt cauzele citate.','PTC sub ghidaj ecografic este alternativa când ERCP este dificil.','Obstacolul trebuie rezolvat.','Ore de obstacol pe un duct mic nu definesc entitatea.']],
 8,'Fereastra „luni de zile” și PTC-ul ca alternativă la ERCP sunt detaliile de cale biliară nefolosite.',['luni de zile','colangiografie transhe']),

q(111,['Tipurile rare de hemocromatoză, dincolo de HFE/C282Y:',
 ['Tipul 2A: gena HJV juvenilă (mutația G320V); tipul 2B: gena HAMP (93delG)','Tipul 3: TfR2 (mutația Y250X), descris în sudul Europei','Tipul 4: ferroportină (SLC40A1, V162del), cu transmitere autozomal dominantă','Aportul alimentar de fier și agenții chelatori (acid ascorbic) pot fi relevanți; exces de alcool în istoricul a 25% dintre pacienți','Tipul 4 este autozomal recesiv, HAMP fiind mutația C282Y de pe cromozomul 6'],'ABCD',1300,'Ciroza hepatică — HE: HJV, HAMP, TfR2 și ferroportină',
 'Maparea tipurilor 2A/2B/3/4 (HJV, HAMP, TfR2, SLC40A1) și a cotei de 25% cu alcool.',
 ['HJV G320V și HAMP 93delG sunt din listă.','TfR2 Y250X în sudul Europei este explicit.','Ferroportina SLC40A1 cu transmitere AD este citată.','Acidul ascorbic și cota de 25% alcool sunt din text.','Tipul 4 este AD; C282Y este a tipului 1, nu HAMP.']],
 8,'Patru locusuri (HJV, HAMP, TfR2, SLC40A1) sunt concepute să fie amestecate cu C282Y.',['HAMP','25% dintre pacienţi']),

q(112,['Hepcidina, în fiziologia fierului și în HFE:',
 ['Este sintetizată hepatic și ocupă o poziție centrală în controlul absorbției fierului','Nivelul ei crește în deficitul de fier și scade odată cu supraîncărcarea','Expresia hepatică a genei hepcidinei este scăzută în hemocromatoza HFE, facilitând supraîncărcarea','Hepcidina blochează eliberarea fierului din eritrocite și macrofage, degradând exportatorul ferroportină','Hepcidina crescută în HFE blochează fierul, expresia fiind maximală la homozigoții C282Y'],'ABCD',1301,'Ciroza hepatică — Hepcidină: direcția în deficit versus HFE',
 'Direcția hepcidinei (crește în deficit, scade în supraîncărcare/HFE) și degradarea ferroportinei.',
 ['Sinteza hepatică și poziția centrală sunt din text.','Creșterea în deficit și scăderea la supraîncărcare sunt explicite.','Expresia scăzută în HFE facilitează supraîncărcarea.','Degradarea ferroportinei este mecanismul citat.','În HFE hepcidina este scăzută, nu crescută.']],
 8,'Direcția hepcidinei (scăzută în HFE, crescută în deficit) este capcana fiziologică a capitolului.',['Hepcidina','ferroportina'],[1300]),

q(113,['Heterozigoții HFE și distincția RMN față de hemosideroza secundară:',
 ['Pot avea teste biochimice normale sau creșteri ușoare ale saturației transferinei (>45%) ori ale feritinei (de obicei >400 µg/L)','Tehnica GRE, puternic ponderată T2, detectează supraîncărcările hepatice relevante (>60 µmol/g)','În supraîncărcarea secundară (hemosideroză), care implică celulele reticuloendoteliale, pancreasul este cruțat','Biochimia hepatică este adesea normală la homozigoți, chiar în prezența cirozei','Heterozigoții au feritină <50 µg/L, iar pancreasul este cel mai afectat în hemosideroza secundară'],'ABCD',1301,'Ciroza hepatică — Heterozigoți, GRE T2 și pancreas cruțat',
 'Pragurile heterozigoților (>45%, feritină >400) și semnul RMN: pancreas cruțat în hemosideroza secundară.',
 ['Saturația >45% sau feritina >400 la heterozigoți sunt din text.','GRE T2 pentru >60 µmol/g este explicit.','Pancreasul cruțat deosebește hemosideroza secundară de HE.','Biochimia hepatică adesea normală chiar cu ciroză este citată la homozigoți.','Feritina heterozigoților nu este <50; pancreasul este cruțat, nu maxim afectat, în forma secundară.']],
 8,'Pancreasul cruțat (hemosideroză RE) versus încărcat (HE) este distincția RMN nefolosită.',['>400','pancreasul este cruţat']),

q(114,['Carcinomul hepatocelular în hemocromatoză, dincolo de cota ~30% la cirotici:',
 ['HCC a fost descris foarte rar la non-cirotici la care s-au putut îndepărta depozitele de fier','Diagnosticul precoce este vital','Riscul pentru HCC persistă dacă ciroza este prezentă, chiar după flebotomie','HCC este regula la heterozigoții fără ciroză, flebotomia anulând riscul la cirotici','Flebotomia elimină riscul de HCC în ciroza constituită'],'ABC',1301,'Ciroza hepatică — HCC în HE: rar fără ciroză, persistă după flebotomie',
 'Disocierea riscului de HCC (persistă în ciroză post-flebotomie) de raritatea la non-ciroticul depletat.',
 ['Raritatea la non-ciroticul depletat este din text.','Diagnosticul precoce este subliniat.','Persistența riscului dacă ciroza este prezentă este explicită.','HCC nu este regula heterozigoților fără ciroză.','Flebotomia nu anulează riscul odată ce ciroza există.']],
 8,'Persistența riscului de HCC după depleție, dacă există ciroză, este mesajul contraintuitiv.',['non-cirotici','riscul pentru HCC persistă']),

q(115,['Mecanismul molecular HFE, dincolo de C282Y:',
 ['Proteina genei HFE interacționează cu receptorul 1 al transferinei, mediator al absorbției intestinale a fierului','Fierul este preluat în exces de celulele mucoasei, depășind capacitatea de legare a transferinei','Aproximativ 1–2 g de fier sunt absorbiți din intestin și circulă legați de transferină','HFE blochează TfR1, absorbția intestinală fiind nulă la homozigoți','Absorbția intestinală este 20–40 g/zi, identică stocului corporal al simptomaticului'],'ABC',1300,'Ciroza hepatică — HFE–TfR1 și absorbția 1–2 g',
 'Legarea HFE de TfR1 și a cifrei 1–2 g absorbite, distincte de stocul 20–40 g al bolnavului.',
 ['Interacțiunea HFE–TfR1 este din text.','Preluarea excesivă mucoasă, peste capacitatea transferinei, este citată.','1-2 g absorbiți, circulând pe transferină, sunt din figura 34.27.','HFE perturbat crește, nu anulează, absorbția.','20-40 g este stocul corporal simptomatic, nu absorbția zilnică.']],
 8,'Permutează 1–2 g (absorbție zilnică) cu 20–40 g (stocul bolnavului).',['receptorul 1 al transferinei','1-2 g de fier'],[1301]),

q(116,['Boala Wilson, dincolo de H1069Q și de penicilamină: absorbția și ceruloplasmina:',
 ['Cuprul alimentar este absorbit în stomac și în intestinul subțire proximal, transportat la ficat legat de albumină','În ficat este încorporat în apoceruloplasmină, formând ceruloplasmina, secretată în sânge; restul se excretă biliar','Scăderea ceruloplasminei serice este prezentă la peste 80% dintre pacienți, dar nu este alterarea responsabilă pentru depunerile de cupru','Afectează între 1 din 30.000 și 1 din 100.000; au fost identificate peste 300 de mutații','Ceruloplasmina scăzută este cauza depunerilor, absorbția fiind nulă, prevalența 1/400 ca în HFE'],'ABCD',1302,'Ciroza hepatică — Wilson: apoceruloplasmină și 1/30.000',
 'Disocierea ceruloplasminei scăzute (>80%) de mecanismul depunerilor și reținerea prevalenței 1/30.000–1/100.000.',
 ['Absorbția gastrică/jejunală proximală și transportul pe albumină sunt din text.','Incorporarea în apoceruloplasmină și excreția biliară sunt explicite.','>80% cu ceruloplasmină scăzută, fără ca aceasta să explice depunerile, este nuanța cheie.','1/30.000-1/100.000 și >300 mutații sunt citate.','Ceruloplasmina scăzută nu este cauza depunerilor; prevalența nu este 1/400.']],
 8,'„Ceruloplasmina scăzută nu cauzează depunerile” este capcana de mecanism a paginii.',['peste 80%','apoceruloplasmină']),

q(117,['Tabloul Wilson după vârstă și inelul Kayser–Fleischer:',
 ['Copiii se prezintă de obicei cu probleme hepatice; adulții tineri au mai frecvent manifestări neurologice (tremor, disartrie, mișcări involuntare, demență)','Inelul Kayser–Fleischer este depunere de cupru în membrana lui Descemet, pigment brun-verzui la joncțiunea sclerocorneană, adesea vizibil doar la lampa cu fantă','Poate să lipsească la copiii mici','Hemoliza și anemia pot fi prezente','Inelul Kayser–Fleischer este constant la sugar, fiind cel mai precoce semn, fără nicio formă hepatică pediatrică'],'ABCD',1302,'Ciroza hepatică — Wilson: copil hepatic vs adult neurologic, Descemet',
 'Contrastul prezentării (copil-ficat, adult-neurologie) și al inelului KF (Descemet, poate lipsi la copiii mici).',
 ['Dicotomia copil hepatic / adult neurologic este din text.','Descemet, pigmentul brun-verzui și lampa cu fantă sunt explicite.','Absența posibilă la copiii mici este citată.','Hemoliza și anemia figurează la investigații.','Inelul poate lipsi la copiii mici; forma hepatică pediatrică este tocmai prezentarea uzuală.']],
 8,'Absența KF la copiii mici este contraintuitivă; distractorul o face „constantă la sugar”.',['Descemet','copiii mici']),

q(118,['Pragul de cupru hepatic care sprijină diagnosticul de Wilson este:',
 ['>60 µmol/g, identic pragului RMN din hemocromatoză','>180 µmol/g greutate uscată, identic fierului din HE','>250 µg/g greutate uscată, deși niveluri ridicate apar și în colestaza cronică','<40 µg/24 h urinar, identic normalului de cuprurie','Nedozabil, diagnosticul bazându-se doar pe KF'],'C',1302,'Ciroza hepatică — Wilson: cupru hepatic >250 µg/g',
 'Reținerea pragului >250 µg/g greutate uscată, distinct de 180 µmol/g (fier HE) și de cupruria normală <40 µg/24 h.',
 ['60 µmol/g este pragul RMN al fierului, nu al cuprului Wilson.','180 µmol/g este fierul hepatic din HE.','Textul cere >250 µg/g, cu rezerva colestazei cronice.','<40 µg/24 h este normalul de cuprurie, nu pragul de boală.','Biopsia cu dozare de cupru aduce un aport diagnostic.']],
 8,'Permutează 250 µg/g (Wilson) cu 180 µmol/g (fier HE) și cu 60 µmol/g (RMN).',['>250','colestaza cronică']),

q(119,['Tratamentul și screeningul familial în Wilson, dincolo de dozele de penicilamină/trientină:',
 ['Dietă săracă în cupru, cu excluderea ciocolatei și a arahidelor','Toți frații și copiii pacienților trebuie investigați; analiza mutației ATP7B este utilă','Zinc se administrează chiar și la asimptomatici, dacă există dovezi de acumulare de cupru','Afectarea neurologică este permanentă; IHA sau ciroza decompensată se tratează prin transplant','Dieta include ciocolată și arahide, screeningul familial fiind inutil, zincul fiind interzis la asimptomatici'],'ABCD',1302,'Ciroza hepatică — Wilson: ciocolată/arahide, zinc la asimptomatici',
 'Completarea chelării cu dieta (ciocolată, arahide), zincul la asimptomatici și caracterul ireversibil neurologic.',
 ['Excluderea ciocolatei și arahidelor este din text.','Screeningul fraților și copiilor, cu ATP7B, este explicit.','Zincul la asimptomaticii cu acumulare este citat.','Ireversibilitatea neurologică și transplantul în IHA/decompensare sunt menționate.','Dieta și screeningul merg în direcția opusă.']],
 8,'Ciocolata/arahidele și zincul la ruda asimptomatică sunt detalii de viață reală nefolosite.',['ciocolata','arahidele']),

q(120,['Etanolul, dincolo de NADH/NAD și de cota 10–20% care fac ciroză:',
 ['Modificările redox afectează metabolismul carbohidraților și proteinelor și cauzează necroza centrolobulară tipică','Acetaldehida formată prin oxidarea etanolului poate contribui, prin efectul asupra proteinelor hepatice, la leziunea celulară','Alcoolul afectează direct celulele stelate, transformându-le în miofibroblaste producătoare de colagen','Fibroza perivenulară din jurul venelor centrolobulare poate progresa spre ciroză fără a fi precedată de hepatită','Necroza este de zonă 1, stelatele fiind inerte, fibroza perivenulară neputând ocoli hepatita'],'ABCD',1303,'Boala hepatică alcoolică — Acetaldehidă, stelate și fibroză perivenulară',
 'Legarea redox-ului de necroza centrolobulară, a acetaldehidei și a căii stelate–fibroză perivenulară care sare peste hepatită.',
 ['Necroza centrolobulară prin redox pe carbohidrați/proteine este din text.','Acetaldehida ca factor contributiv este citată.','Transformarea stelată în miofibroblast este explicită.','Progresia perivenulară fără hepatită prealabilă este menționată.','Necroza este centrolobulară/zona 3, nu zona 1; stelatele nu sunt inerte.']],
 8,'Calea perivenulară care ocolește hepatita este detaliul natural-istoric ușor de negat.',['Acetaldehida','fibroza perivenulară']),

q(121,['Corpusculii Mallory din hepatita alcoolică:',
 ['Sunt incluziuni citoplasmatice dense, observate uneori în hepatocite','Mitocondriile uriașe sunt, de asemenea, caracteristice hepatitei alcoolice','Sunt sugestivi, dar nu specifici pentru leziunile alcoolice, regăsindu-se și în Wilson și în PBC','Dacă consumul continuă, hepatita alcoolică poate progresa spre ciroză','Sunt patognomonici alcoolului, fiind absenți în Wilson și PBC, mitocondriile uriașe nefigurând'],'ABCD',1303,'Boala hepatică alcoolică — Mallory nespecifici și mitocondrii uriașe',
 'Recunoașterea Mallory ca sugestivi dar nespecifici (și în Wilson/PBC) plus mitocondriile uriașe.',
 ['Incluziunile citoplasmatice dense sunt din text.','Mitocondriile uriașe sunt caracteristice.','Nespecificitatea, cu Wilson și PBC ca exemple, este explicită.','Progresia spre ciroză dacă se continuă alcoolul este citată.','Nu sunt patognomonici; se găsesc și în Wilson/PBC.']],
 8,'Nespecificitatea Mallory (Wilson, PBC) este capcana de specificitate a ultimei pagini.',['Corpusculii Mallory','mitocondriile uriaşe']),

q(122,['Un bărbat cu hepatomegalie marcată, fără icter, consumator de alcool, are steatoză la biopsie. Ficatul gras alcoolic:',
 ['De multe ori nu există simptome sau semne','Simptomele abdominale vagi (greață, vărsături, diaree) se datorează mai degrabă efectelor alcoolului asupra tubului digestiv','Poate exista hepatomegalie, uneori foarte exprimată, împreună cu alte manifestări de boală hepatică cronică','Grăsimile dispar la oprirea consumului; nu există distrugere de celule hepatice','Steatoza este ireversibilă după o singură expunere, cu necroză de zonă 1 și AMA M2 pozitiv'],'ABCD',1303,'Boala hepatică alcoolică — Steatoza: clinic silențioasă, reversibilă',
 'Recunoașterea formei adesea asimptomatice, a hepatomegaliei marcate și a dispariției grăsimilor la abstinență.',
 ['Absența frecventă a simptomelor este din text.','Simptomele GI vagi țin de efectul alcoolului pe tubul digestiv.','Hepatomegalia uneori foarte exprimată este citată.','Dispariția grăsimilor la oprire, fără distrugere celulară, este explicită.','Steatoza este reversibilă; nu este PBC de zonă 1.']],
 8,'Reversibilitatea steatozei la abstinență este contraintuitivă față de o hepatomegalie „foarte exprimată”.',['nu există simptome','Grăsimile dispar']),
];
