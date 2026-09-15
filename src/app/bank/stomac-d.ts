import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p<=168?p-70:p<=174?p-73:p-77;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('stomac',13,pdfOffset,`stomac-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const STOMAC_D=[
q(67,['Raporturile anatomice ale stomacului, potrivit textului, includ:',
 ['Diafragmul superior, splina și ficatul lateral, pancreasul posterior și marele epiploon inferior','Aorta descendentă anterior, identic esofagului cervical','Cecul la curbura mică, valva ileocecală fiind joncțiunea GE','Vezica urinară posterior, ca un organ pelvin','Artera mezenterică inferioară ca unică vecinătate vasculară'],'A',167,'Anatomie — Raporturi gastrice',
 'Cartografierea vecinătăților (diafragm, splină/ficat, pancreas, epiploon), distincte de esofag, cec sau pelvis.',
 ['Cele patru raporturi citate sunt explicite.','Aorta pe stânga ține de esofagul toracic, nu e anterioară stomacului.','Cecul și VIC nu definesc joncțiunea GE.','Vezica este pelvină, nu un raport gastric.','AMI nu este vecinătatea vasculară gastrică descrisă.']],
 8,'Mută stomacul pe cec, vezică sau AMI, trei etaje din capitole vecine.',['hipocondrul stâng','marele epiploon']),

q(68,['Celulele caliciforme secretoare de mucus gastric se găsesc:',
 ['Pe întreaga suprafață a stomacului','Doar în antru, alături de celulele G, mucoasa fundică fiind lipsită de mucus','Doar în duodenul descendent, identic stimulatorului intestinal','În adventicea esofagiană, stomacul neavând mucus','Numai după vagotomie, mucusul ținând de secretină'],'A',167,'Histologie — Mucus pe toată suprafața',
 'Recunoașterea distribuției pan-gastrice a celulelor caliciforme, distinctă de compartimentarea G/parietal.',
 ['Fraza despre întreaga suprafață este explicită.','Antrul are G, nu monopolul mucusului.','Stimulatorul intestinal e în D2, nu definește mucusul gastric.','Adventicea e esofagiană; stomacul are mucoasă.','Mucusul există independent de vagotomie sau secretină.']],
 8,'Limitează mucusul la antru sau îl mută pe esofag/duoden, ignorând distribuția pan-gastrică.',['celulele calicifo','înti·eaga suprafaţă']),

q(69,['Duodenul ca organ endocrin se caracterizează prin:',
 ['Secretă secretină și colecistokinină ca răspuns la acidul gastric și la grăsimile ingerate','Acești hormoni semnalează sistemului hepatobiliar să descarce bila și pancreasului să furnizeze bicarbonat și enzime (tripsină, lipază, amilază)','Duodenul descendent conține stimulatorul intestinal','Secretă gastrină antrală, fără CCK, stimulatorul fiind fundic','Enzimele pancreatice sunt tripsină, pepsina și gastrina, secretina lipind de SEI'],'ABC',167,'Duoden — Secretină, CCK, pacemaker D2',
 'Cuplarea secretină/CCK (acid + grăsimi) cu bila/bicarbonat/enzime și cu pacemaker-ul din D2, distincte de gastrina antrală.',
 ['Secretina și CCK la acid și grăsimi sunt explicite.','Semnalul biliopancreatic și enzimele sunt citate.','Stimulatorul intestinal din duodenul descendent este descris.','Gastrina e antrală; pacemaker-ul gastric e fundic.','Pepsina e gastrică; gastrina nu e enzimă pancreatică.']],
 8,'Înlocuiește secretina/CCK cu gastrina antrală și mută pacemaker-ul duodenal pe fundus.',['secretină şi colecistokinină','stimulatorul intestinal']),

q(70,['Clasificarea endoscopică a cancerelor gastrice (ulcerate, polipoide, schiroase, extensie superficială) se caracterizează prin:',
 ['Carcinoamele ulcerate sunt de departe cele mai frecvente','Valoarea prognostică a acestui sistem de clasificare este limitată','Tipul endoscopic înlocuiește histologia intestinal/difuz, ulceratele având prognostic cert','Linita plastică este un polip adenomatos >1,5 cm, fără infiltrație','EUS distinge doar seroasa, mucoasa gastrică nefiind vizibilă'],'AB',172,'Adenocarcinom — Clasificare endoscopică',
 'Predominanța ulceratelor cu valoare prognostică limitată, fără a reface distincția histologică intestinal/difuz deja chestionată.',
 ['Predominanța ulceratelor este explicită.','Limita prognostică a sistemului este citată.','Textul tocmai spune că valoarea prognostică e limitată; histologia rămâne relevantă.','Linita este infiltrație difuză, nu un polip.','EUS evaluează profunzimea invaziei, nu „doar seroasa”.']],
 8,'Supraestimează prognosticul clasificării endoscopice și confundă linita cu polipul adenomatos.',['carcinoamele ulcerate','valoarea prognostică']),

q(71,['Linita plastică se definește prin:',
 ['Infiltrarea difuză a porțiunilor din peretele gastric sau a stomacului în întregime, cu aspect de tub rigid','Prognostic deosebit de rezervat','Echivalentul tipului intestinal bine diferențiat, cu diseminare doar hematogenă','O gastrită de reflux alcalin cu vase în tirbușon','Un GIST >6 cm tratat doar prin imatinib, fără rezecție'],'AB',172,'Adenocarcinom — Linită plastică',
 'Recunoașterea linitei ca infiltrație difuză cu tub rigid și prognostic rezervat, distinctă de tipul intestinal și de GIST.',
 ['Definiția (infiltrație, tub rigid) este explicită.','Prognosticul deosebit de rezervat este citat.','Tipul intestinal e bine diferențiat și hematogen, nu linita.','Tirbușonul ține de gastrita alcalină.','GIST-ul se excizează local; linita e adenocarcinom infiltrativ.']],
 8,'Confundă linita cu tipul intestinal sau cu GIST, două entități cu tratament diferit.',['Linita plastică','tub rigid']),

q(72,['Factorii de risc importanți pentru adenocarcinomul gastric, enumerați de text, includ:',
 ['Infecția cu H. pylori, anemia pernicioasă și achlorhidria','Polipii adenomatoși gastrici și gastrita cronică','Istoricul de leziuni caustice prin ingestie de sodă caustică','Tiloză, Plummer-Vinson și alcool-tutun, identic CSC esofagian','Grupa sanguină 0, fără rol al H. pylori'],'ABC',172,'Adenocarcinom — Factori de risc',
 'Lista gastrică (H. pylori, pernicioasă, achlorhidrie, polipi adenomatoși, gastrită, sodă caustică), distinctă de factorii CSC esofagian.',
 ['H. pylori, pernicioasa și achlorhidria sunt explicite.','Polipii adenomatoși și gastrita cronică sunt citați.','Soda caustică este descrisă.','Tiloză/Plummer-Vinson/alcool-tutun țin de CSC esofagian.','Tipul difuz se asociază cu grupa A; H. pylori este incriminat.']],
 8,'Importă factorii CSC esofagian (tiloză, Plummer-Vinson) peste lista gastrică.',['H. pylori','sodă caustică']),

q(73,['Un pacient cu adenocarcinom gastric, fără masă palpabilă. Manifestările de progresie, după durerea vagă și scăderea ponderală, includ:',
 ['Disfagie, hematemeză, melenă, greață sau vărsături','Anemie feriprivă nou instalată sau scaune guaiac-pozitive','Cancerele incipiente sunt de obicei asimptomatice','Tranzitul baritat e suficient, biopsia endoscopică fiind inutilă','Guaiacul negativ exclude boala, disfagia ținând doar de esofag'],'ABC',173,'Adenocarcinom — Simptome de progresie',
 'Escaladarea de la asimptomatic → durere/scădere ponderală → disfagie/sângerare/anemie, cu endoscopia (nu baritatul) ca diagnostic.',
 ['Simptomele specifice de progresie sunt explicite.','Anemia feriprivă și guaiacul sunt citați.','Asimptomatologia stadiilor incipiente este descrisă.','Endoscopia cu biopsii multiple este esențială; baritatul poate subdiagnostica.','Guaiacul negativ nu exclude; disfagia poate fi gastrică proximală.']],
 8,'Anulează biopsia endoscopică și tratează guaiacul negativ ca excludere, două erori de diagnostic.',['Pierderea în greutate','test guaiac pozitiv']),

q(74,['Când sunt necesare pentru o rezecție gastrică curativă, pot fi incluse en-block:',
 ['Splenectomia, pancreatectomia distală și/sau colectomia parțială','Doar limfadenectomia para-aortică D3, viscerele adiacente fiind prezervate de principiu','Esofagectomie McKeown, tumora fiind considerată esofagiană','Transplant hepatic, Krukenberg contraindicând orice rezecție locală','Miotomie Heller, linita ținând de achalazie'],'A',173,'Rezecție curativă — En-block visceral',
 'Recunoașterea splenectomiei, pancreatectomiei distale și colectomiei parțiale ca extensii en-block, nu ca McKeown sau Heller.',
 ['Cele trei viscere en-block sunt explicite.','Controversa e D1 vs D2, nu D3 ca substitut al viscerelor invadate.','McKeown e esofagian.','Krukenberg e metastază ovariană.','Heller e pentru achalazie.']],
 8,'Înlocuiește en-block-ul spleen/pancreas/colon cu McKeown sau Heller.',['splenectomia','colectomia pat1ială']),

q(75,['Agenții chimioterapici citați actual pentru cancerul gastric includ:',
 ['Fluorouracil, docetaxel, oxaliplatin, leucovorin, epirubicină, cisplatină și capecitabină','5-fluorouracil plus cisplatină și 45 Gy / 6–7 săptămâni, ca în protocolul esofagian','Imatinib mesilat de primă intenție, identic GIST','Octreotid lunar, identic gastrinomului metastatic','Acarboză 50–100 mg, ca în dumpingul tardiv'],'A',173,'Terapie — Agenți chimioterapici gastrici',
 'Memorarea listei de șapte agenți gastrici, distinctă de schema esofagiană 45 Gy, de imatinib (GIST) și de octreotid (ZES).',
 ['Cei șapte agenți sunt enumerați explicit.','45 Gy / 6–7 săptămâni e protocolul esofagian.','Imatinibul e pentru GIST.','Octreotidul e pentru gastrinom metastatic.','Acarboza e din dumpingul tardiv.']],
 8,'Importă 45 Gy esofagian sau imatinibul GIST peste lista de agenți gastrici.',['Docetaxel','Capecitabina']),

q(76,['Paliația adenocarcinomului gastric avansat, când rezecția curativă nu mai e posibilă, se caracterizează prin:',
 ['Rezecțiile paliative se limitează la derivații pentru formațiuni obstructive sau la controlul sângerării','Alte proceduri paliative sunt stentul endoscopic și terapia cu laser','Chimioterapia și radioterapia oferă puțin ajutor în aceste cazuri complicate','Dacă boala a fost substadializată și intraoperator apar metastaze neașteptate, rezecția paliativă este opțională, axul fiind calitatea vieții','Rezecția paliativă extinsă e regula la orice M1, chimio/RT vindecând obstacolul fără stent'],'ABCD',174,'Adenocarcinom — Paliație limitată',
 'Limitarea paliației la bypass/sângerare/stent/laser, cu chimio/RT de ajutor redus și rezecția paliativă doar opțională la M1 neașteptat.',
 ['Limitarea la derivații/sângerare este explicită.','Stentul și laserul sunt citați.','Ajutorul redus al chimio/RT este descris.','Opționalul la substadializare și calitatea vieții sunt menționate.','Rezecția extinsă nu e regula M1; chimio/RT nu înlocuiesc stentul pe obstacol.']],
 8,'Face din rezecția paliativă extinsă regula M1 și din chimio un substitut al stentului.',['plasarea endoscopică','calitatea vieţii']),

q(77,['Ulcerul duodenal necomplicat, față de ulcerul gastric, se deosebește etiologic prin:',
 ['H. pylori, AINS și tutunul sunt factori de risc importanți','Rareori se transformă malign, deci urmărirea și tratamentul diferă de cele ale ulcerului gastric','De obicei apare la nivelul bulbului duodenal','Se transformă frecvent în adenocarcinom, screeningul fiind identic linitei','Este produs de gastrinom, secretina fiind testul de primă intenție la orice bulb'],'ABC',174,'Ulcer duodenal — Rar malign',
 'Triada H. pylori/AINS/tutun plus raritatea malignizării (follow-up diferit de UG) și sediul bulbar.',
 ['Cei trei factori sunt explicite.','Raritatea transformării maligne este citată.','Sediul bulbar este descris.','Transformarea malignă e rară, nu frecventă.','ZES e o entitate separată; secretina nu e first-line la orice ulcer bulbar.']],
 8,'Declară ulcerul duodenal precursor de adenocarcinom, inversând deosebirea față de UG.',['rareori se transformă malign','bulbului duodenal']),

q(78,['După confirmarea hipergastrinemiei, localizarea gastrinomului se bazează pe:',
 ['CT, IRM și ultrasonografie','Scintigrafia receptorului de somatostatină și ecoendoscopie','Tumori adesea mici, deci localizarea preoperatorie poate fi dificilă','Metastazarea apare cel mai frecvent la ficat','Angiografia AMS cu embolizare de primă intenție, calciul fiind inutil ca screening MEN-1'],'ABCD',179,'ZES — Imagistică de localizare',
 'Pachetul CT/IRM/US plus SRS/EUS, dificultatea tumorilor mici și ficatul ca prim sediu M, distinct de pragurile de gastrină deja chestionate.',
 ['CT, IRM și US sunt explicite.','SRS și EUS sunt citate.','Dificultatea tumorilor mici este descrisă.','Ficatul ca sediu predilect este menționat.','Angiografia AMS e pentru gastrită hemoragică; calciul e screeningul MEN-1.']],
 8,'Înlocuiește SRS/EUS cu embolizarea AMS și anulează screeningul calcic.',['Scintigrafia receptorului','destul de mici']),

q(79,['Gastrectomia totală istorică pentru Zollinger-Ellison a fost abandonată ca rutină deoarece:',
 ['Oferind protecție împotriva ulcerului recurent, s-a asociat cu mortalitate ridicată','Pot apărea anemie pernicioasă, malnutriție și scădere ponderală','Progresele chirurgicale și medicale au făcut-o o intervenție foarte rar practicată','Tratamentul actual începe cu IPP în doze mari, H2 devenind linia a doua','Rămâne gestul de primă intenție, IPP-urile fiind contraindicate preoperator'],'ABCD',179,'ZES — De ce nu gastrectomie totală',
 'Costul (mortalitate, anemie pernicioasă, malnutriție) care a retras gastrectomia totală în favoarea IPP-urilor în doze mari.',
 ['Mortalitatea ridicată este explicită.','Cele trei sechele metabolice sunt citate.','Raritatea actuală este descrisă.','IPP doze mari și H2 linia 2 sunt menționate.','Gastrectomia totală nu mai e first-line.']],
 8,'Restaurează gastrectomia totală ca first-line și contraindică IPP-ul.',['anemiea pernicioasă','foarte rar practicată'],[180]),

q(80,['În dumpingul precoce, pe lângă shift-ul osmotic, textul incriminează eliberarea de:',
 ['Serotonină, neurotensina, histamină, glucagon, peptid intestinal vasoactiv, kinine și altele','Un analog de somatostatină poate bloca aceste substanțe la unii pacienți','Mese frecvente cu volum mic (ex. 6 pe zi); lichidele înainte de masă sau la cel puțin 30 de minute după','Propranolol 10–20 mg cu 20 de minute înainte de masă a fost înlocuit de somatostatină','Hormonii definesc dumpingul tardiv hipoglicemic, mesele unice hipertonice fiind indicate'],'ABCD',180,'Dumping precoce — Mediatori și 6 mese',
 'Lista de mediatori (VIP, kinine, serotonină) plus somatostatina, fracționarea 6/zi și retragerea propranololului.',
 ['Lista hormonală este explicită.','Analogul de somatostatină este citat.','Cele 6 mese și fereastra de 30 de minute sunt descrise.','Înlocuirea propranololului este menționată.','Hipoglicemia la 1–3 ore definește dumpingul tardiv.']],
 8,'Mută mediatorii pe dumpingul tardiv și restaură mesele hipertonice unice.',['peptidul intestinal vasoactiv','6 pe zi']),

q(81,['O femeie cu dumping tardiv refractar la fracționare. Tratamentul conservator citat include:',
 ['O mică gustare la 2 ore după mese; biscuiții și untul de arahide sunt un supliment excelent','Acarboza, inhibitor al hidrolazei α-glucozidază','Dacă non-operatorul eșuează, conversie la Billroth I (dacă nu e deja prezent) sau gastrojejunostomie Roux-en-Y','Propranolol 10–20 mg ca first-line, acarboza fiind inutilă','Mese unice hiperosmolare la 15 minute, identic dumpingului precoce'],'ABC',181,'Dumping tardiv — Unt de arahide',
 'Gustarea la 2 ore (biscuiți/unt de arahide) plus acarboza și conversia B I/Roux, distincte de propranololul precoce.',
 ['Gustarea la 2 ore și untul de arahide sunt explicite.','Acarboza este citată.','Conversia B I sau Roux este descrisă.','Propranololul ținea de dumpingul precoce și a fost înlocuit.','Mesele hiperosmolare la 15 minute definesc dumpingul precoce.']],
 8,'Pune propranololul ca first-line al tardivului și restaură masa hiperosmolară de 15 minute.',['untul de arahide','2 ore după mese']),

q(82,['Alterarea funcțiilor intestinului după reconstrucții gastrice poate duce la osteomalacie prin:',
 ['Tranzit accelerat cu steatoree; calciul și magneziul chelează grăsimile intestinale, scăzând absorbția','Aport suplimentar de calciu și administrare de bifosfonați pot preveni afectarea osoasă','Aproximativ unul din patru pacienți are scaune dese, moi, postoperator','Osteomalacia ține de excesul de vitamina D, chelarea neexistând','Bifosfonații sunt contraindicați, calciul accelerând dumpingul tardiv'],'ABC',182,'Postgastrectomie — Osteomalacie și 1/4 scaune',
 'Mecanismul chelare Ca/Mg–grăsimi plus bifosfonați și frecvența de 1/4 a scaunelor moi, distincte de anemiile 20%/50% deja chestionate.',
 ['Steatoreea și chelarea sunt explicite.','Calciul și bifosfonații sunt citați.','Unul din patru cu scaune moi este descris.','Osteomalacia e prin malabsorbție, nu exces de D.','Textul recomandă calciu și bifosfonați.']],
 8,'Inversează osteomalacia într-un exces de vitamină D și interzice bifosfonații.',['osteomalaciei','unul din panu']),

q(83,['Nu există contraindicații absolute pentru chirurgia bariatrică. Printre contraindicațiile relative, textul nu include:',
 ['IMC ≥40 fără comorbidități, care este o indicație, nu o interdicție','Insuficiența cardiacă severă','Boala coronariană instabilă și boala pulmonară în stadiu final','Ciroza cu hipertensiune portală și cancerul în tratament activ','Dependența necontrolată de alcool și capacitatea intelectuală grav afectată'],'A',184,'Bariatric — Fără contraindicație absolută',
 'Separarea indicației IMC ≥40 de lista de contraindicații relative (cord, plămân, cancer, ciroză, adicție, cognitiv) deja listată altundeva, prin item CS pe non-contraindicație.',
 ['IMC ≥40 fără comorbidități este indicație; textul spune că nu există contraindicații absolute.','Insuficiența cardiacă severă este pe lista relativă.','Coronariana instabilă și pulmonarul terminal sunt pe listă.','Ciroza cu HTP și cancerul activ sunt pe listă.','Adicția și deficitul cognitiv sunt pe listă.']],
 8,'Transformă indicația IMC ≥40 într-o contraindicație, inversând fraza „nu există contraindicații absolute”.',['Nu există contraindicaţii','IMC de 40']),

q(84,['Pregătirea preoperatorie bariatrică, dincolo de pragul IMC, include:',
 ['Testare psihologică: depresie, anxietate generalizată, somatizare, fobie socială, TOC, abuz de substanțe, mâncat compulsiv și PTSD sunt mai frecvente decât în populația generală','Consiliere nutrițională: aport real vs necesar, obiceiuri nesănătoase, educație dietetică postoperatorie; uneori dietă hipocalorică pentru a reduce volumul hepatic și a facilita MIS','Evaluare medicală: excluderea cauzelor endocrine tratabile; ECG ± test de efort; Rx toracică, gaze sanguine și probe funcționale, cu atenție la sindromul obezitate-hipoventilație (hipercapnie diurnă)','Omisiunea evaluării psihologice, depresia fiind indicație de urgență operatorie fără consiliere','Dieta hipocalorică e contraindicată, ficatul mare facilitând laparoscopia'],'ABC',184,'Bariatric — Psihologic, nutriție, hipoventilație',
 'Trio-ul psihologic (lista de tulburări) / dietă de micșorare hepatică / hipercapnie diurnă, față de omisiunea evaluării.',
 ['Lista de tulburări psihologice este explicită.','Dieta hipocalorică pentru volumul hepatic este citată.','Hipoventilația cu hipercapnie diurnă este descrisă.','Evaluarea psihologică precede majoritatea intervențiilor.','Dieta reduce, nu crește, volumul hepatic pentru MIS.']],
 8,'Anulează evaluarea psihologică și dieta de micșorare hepatică, două trepte pe care paragraful le cere.',['hipercapnia de zi','volumul hepatic'],[185]),

q(85,['Auto-monitorizarea, ca piatră de temelie a terapiei comportamentale a obezității, se caracterizează prin:',
 ['Persoanele obeze își subestimează adesea aportul; tratamentul îi învață să citească etichetele și să înregistreze exact ce, cât și câte calorii','Datele arată că cei care își înregistrează aportul zilnic pierd mai mult în greutate','Controlul stimulului: alimente mai sănătoase în casă, memento pe frigider, abținere de la mâncat în timpul televizorului','Prevenirea recidivei oferă instrumente pe termen lung de revenire la obiceiuri sănătoase','Înregistrarea aportului e inutilă, obezii supraestimându-și caloriile, televizorul fiind un adjuvant al dietei'],'ABCD',185,'Comportament — Auto-monitorizare și stimul',
 'Subestimarea aportului, câștigul celor care notează caloriile și tehnicile de control al stimulului (frigider, TV).',
 ['Subestimarea și înregistrarea exactă sunt explicite.','Câștigul ponderal al celor care notează este citat.','Exemplele de control al stimulului sunt descrise.','Prevenirea recidivei este menționată.','Textul spune subestimare, nu supraestimare; TV-ul e un stimulent de evitat.']],
 8,'Inversează subestimarea într-o supraestimare și face din televizor un adjuvant dietetic.',['Auto-monitorizarea','subestimează']),

q(86,['Creșterea consumului energetic (exercițiul) în tratamentul obezității, potrivit textului:',
 ['Produce reduceri minime, atât ca unică măsură, cât și combinată cu restricții dietetice','Recomandarea tipică: 1.000 kcal/săptămână; foarte eficientă cu antrenament de forță în prevenirea recâștigului după scădere','Modificările comportamentale și dietetice sunt adesea eficiente pe termen scurt, dar nu duc la succes pe termen lung; recidiva cu kilograme suplimentare e frecventă','Exercițiul singur e superior chirurgiei, 1.000 kcal/săptămână vindecând diabetul la 76%','Restricția dietetică e inutilă, forța fiind contraindicată după scădere'],'ABC',185,'Exercițiu — 1.000 kcal/săptămână',
 'Rolul modest al exercițiului ca slăbire, dar util la 1.000 kcal/săptămână plus forță anti-recâștig, pe fondul recidivei dietetice.',
 ['Reducerile minime sunt explicite.','1.000 kcal/săptămână și forța anti-recâștig sunt citate.','Eșecul pe termen lung și recidiva sunt descrise.','76% e vindecarea DM după chirurgie, nu după exercițiu.','Dieta rămâne un pilon; forța e tocmai recomandată.']],
 8,'Atribuie exercițiului cifrele chirurgiei (76% DM) și interzice antrenamentul de forță.',['1.000 kcal/săptămână','antrenamentul de forţă']),

q(87,['Farmacoterapia antiobezitate aprobată FDA, ca parte a unui program cuprinzător, include:',
 ['Fentermină (aprobată în 1959, cel mai frecvent prescrisă), orlistat, doză fixă fentermină+topiramat ER','Lorcaserină, doză fixă naltrexonă SR + bupropion SR și liraglutidă','Utilizarea eficientă cere terapie și monitorizare pe termen lung, nu ca unică măsură','Acarboza 50–100 mg, identic dumpingului tardiv, ca unic agent FDA','Heparina 5.000 UI, ca slăbire, fără monitorizare'],'ABC',185,'Farmacoterapie — Șase agenți FDA',
 'Cei șase agenți FDA, cu fentermina din 1959 ca cea mai prescrisă, plus cerința de monitorizare lungă, distincte de acarboză/heparină.',
 ['Fentermina 1959 și orlistat/topiramat sunt explicite.','Lorcaserina, naltrexonă-bupropion și liraglutida sunt citate.','Monitorizarea pe termen lung este descrisă.','Acarboza e din Tabelul 13-3, nu un antiobezitate FDA.','Heparina e profilaxie TVP, nu slăbire.']],
 8,'Înlocuiește lista FDA cu acarboza dumpingului sau cu heparina TVP.',['Fentennină','Liraglutidă']),

q(88,['Analiza impedanței bioelectrice pentru grăsimea corporală, potrivit textului:',
 ['Permite o măsurare indirectă utilă prin determinarea consumului energetic în repaus, dar necesită post alimentar pe parcursul nopții','Cântărirea hidrostatică e foarte precisă, dar costisitoare și greoaie','Pliurile cutanate sunt mai ușoare, dar foarte dependente de operator','IMC poate fi inexact la cei în formă, cu masă musculară ridicată','BIA înlocuiește IMC ca standard OMS, fără a necesita post'],'ABCD',184,'Compoziție corporală — BIA și post nocturn',
 'Completarea formulei IMC (deja chestionată) cu BIA (post nocturn), hidrostatica costisitoare și pliurile operator-dependente.',
 ['BIA, consumul de repaus și postul nocturn sunt explicite.','Hidrostatica precisă dar greoaie este citată.','Dependența de operator a pliurilor este descrisă.','Inexactitatea IMC la muscular este menționată.','IMC rămâne standardul OMS; BIA cere post nocturn.']],
 8,'Declară BIA standard OMS fără post, anulând tocmai limita de post nocturn.',['impedanţei bioelectrice','post alimentar']),

q(89,['Conform Tabelului 13-7, complicațiile tardive specifice (nu comune tuturor) se mapează astfel:',
 ['Hernia internă și sindromul de ansă aferentă țin de bypass-ul Roux-en-Y','Derapajul inelului și ulcerația pe inel țin de bandarea gastrică ajustabilă','Tulburările nutriționale, litiaza biliară, TVP/EP, sângerarea și infecția pot apărea la mai multe proceduri','Fistula anastomotică e listată ca precoce la procedurile cu capsă/anastomoză','Hernia internă e tipică benzii, derapajul inelului ținând de sleeve'],'ABCD',187,'Tabelul 13-7 — Complicații pe procedură',
 'Maparea hernie internă/ansă aferentă → RYGB și derapaj/ulcerație inel → BGA, față de complicațiile comune.',
 ['Hernia internă și ansa aferentă pe RYGB sunt din tabel.','Derapajul și ulcerația pe inel sunt pe BGA.','Nutriția, litiaza, TVP, sângerarea, infecția sunt marcate pe mai multe.','Fistula e la precoce, pe procedurile cu anastomoză.','Hernia internă nu e a benzii; derapajul nu e al sleeve-ului.']],
 8,'Inversează hernia internă (RYGB) cu derapajul inelului (bandă).',['Hernie internă0','Derapajul ineluluib']),

q(90,['Ulcerul marginal după bypass gastric, față de cel postgastrectomie clasic, se caracterizează prin:',
 ['Rezultă din alterarea perfuziei mucoasei jejunale prin linia de sutură mecanică; fumatul, AINS-urile sau steroizii (prednison) pot contribui','Poate apărea precoce, la câteva săptămâni, sau tardiv, la 1 an postoperator','Pacienții pot slăbi de teama de a mânca, alimentele agravând simptomele; tratamentul e IPP și sucralfat, uneori NPT','Enucleerea leiomiomului e prima linie, prednisonul fiind protector','Apare doar la 15 ani, AINS-urile fiind fără rol'],'ABC',188,'Bariatric — Ulcer marginal, prednison',
 'Adăugarea prednisonului/AINS și a ferestrei săptămâni–1 an, față de ulcerul ≤2 cm postgastrectomie deja chestionat.',
 ['Ischemia de capsă și cofactorii tutun/AINS/prednison sunt explicite.','Fereastra săptămâni versus 1 an este citată.','Teama de a mânca, IPP/sucralfat și NPT sunt descrise.','Enucleerea e a leiomiomului esofagian; prednisonul e factor de risc, nu protector.','Nu e o complicație doar la 15 ani.']],
 8,'Face din prednison un protector și mută ulcerul la 15 ani, inversând fereastra și etiologia.',['prednisonul','la l an postoperator']),

q(91,['Monitorizarea pe viață după bypass gastric, potrivit textului, include vizite anuale cu dozarea:',
 ['Vitaminelor A, B12, D și E, plus tiamină, acid folic, calciu și prealbumină','Doar hemoglobina, vitaminele liposolubile fiind inutile după malabsorbție','Gastrinei sub IPP, ca screening ZES de rutină','5-HIAA urinar, identic carcinoidului ileal','Acarbozei serice, ca marker al dumpingului tardiv'],'A',188,'Bariatric — Laboratoare anuale',
 'Lista anuală A/B12/D/E + tiamină/folat/calciu/prealbumină, distinctă de pachetul 60–80 g / 65 mg fier deja chestionat.',
 ['Cele opt doze anuale sunt explicite.','Vitaminele liposolubile sunt tocmai pe listă.','Gastrina sub IPP nu e screening bariatric.','5-HIAA e al carcinoidului.','Acarboza e un medicament, nu un marker seric.']],
 8,'Anulează vitaminele liposolubile din lista anuală și le înlocuiește cu markeri din alte sindroame.',['vizite anuale','prealbuminei']),

q(92,['Gestionarea pacienților obezi, potrivit textului, necesită o echipă multidisciplinară care include:',
 ['Medici nutriționiști, dieteticieni, psihologi și kinetoterapeuți, care lucrează pentru schimbări pe termen lung','Doar chirurgul bariatric, evaluarea nutrițională fiind superfluă după rezecție','Doar endocrinologul, psihologii fiind contraindicați preoperator','Manometristul anorectal, obezitatea ținând de sfincterul anal','Oncologul de principiu, sleeve-ul fiind o esofagectomie'],'A',185,'Bariatric — Echipă multidisciplinară',
 'Recunoașterea echipei (nutriție, dietetică, psihologie, kinetoterapie) ca cadru al schimbărilor pe termen lung, nu al chirurgului izolat.',
 ['Cele patru categorii și scopul pe termen lung sunt explicite.','Evaluarea nutrițională e parte din pregătire, nu superfluă.','Psihologii sunt tocmai incluși preoperator.','Sfincterul anal nu explică obezitatea.','Sleeve-ul nu e esofagectomie.']],
 8,'Reduce echipa la chirurgul izolat sau la un manometrist anal, ignorând pilonul multidisciplinar.',['echipă multidisciplinară','kinetoterapeuţi']),

q(93,['Dintre dieta, farmacoterapia și chirurgia, textul precizează că doar chirurgia bariatrică:',
 ['A reușit să ajute pacienții să piardă semnificativ în greutate, fără a recâștiga pierderea','Vindecă diabetul sub 10%, recâștigul fiind regula','Este inferioară exercițiului de 1.000 kcal/săptămână ca menținere','Se evită la IMC ≥40, dieta singură fiind durabilă','Înlocuiește auto-monitorizarea, înregistrarea caloriilor fiind inutilă postoperator'],'A',185,'Bariatric — Singura durabilă',
 'Izolarea chirurgiei ca unică modalitate cu scădere semnificativă fără recâștig, față de dietă/farmaceutice pe termen scurt.',
 ['Fraza despre pierdere semnificativă fără recâștig este explicită.','76%, nu <10%, e vindecarea DM chirurgicală; recâștigul e al dietei.','Exercițiul e modest ca slăbire; chirurgia e superioară ca durabilitate.','IMC ≥40 e indicație, nu interdicție.','Auto-monitorizarea rămâne piatră de temelie, inclusiv postoperator.']],
 8,'Atribuie dietei durabilitatea pe care textul o rezervă chirurgiei și coboară vindecarea DM sub 10%.',['fără a recâştiga','doar chirurgia']),

q(94,['Pierderea în greutate cu 10%, potrivit textului, reduce:',
 ['Hipertensiunea, hipercolesterolemia și diabetul de tip II','Incidența preconizată a bolilor de inimă și a accidentului vascular cerebral','Și crește speranța de viață','Diabetul doar la 10%, mortalitatea chirurgicală crescând cu 28%','Doar IMC-ul, fără efect pe TA, lipide sau ACV'],'ABC',190,'Bariatric — Beneficiul scăderii cu 10%',
 'Efectul unei scăderi de 10% pe TA/lipide/DM2, pe riscul cardiac/ACV și pe speranța de viață, distinct de cvartetul 76/61,7/85,7/28%.',
 ['Cele trei comorbidități reduse sunt explicite.','Bolile de inimă și ACV sunt citate.','Creșterea speranței de viață este descrisă.','76% e vindecarea DM după chirurgie; 28% e reducerea mortalității, nu un exces.','Textul listează tocmai TA, lipidele și ACV.']],
 8,'Confundă scăderea de 10% cu inversarea cifrelor 76% DM / 28% mortalitate din meta-analiză.',['10% a redus','speranţa de viaţă']),

q(95,['Identificați afirmația corectă referitoare la stadializarea laparoscopică a cancerului gastric:',
 ['Explorarea identifică leziuni peritoneale, hepatice sau omentale; leziunile suspecte se biopsiază, se face lavaj peritoneal și se determină extensia locală','Prezența bolii metastatice sau lavajul pozitiv contraindică rezecția curativă și poate evita o laparotomie inutilă','Majoritatea chirurgilor o practică selectiv, informațiile TNM având importanță semnificativă doar la anumite categorii','CT-ul convențional identifică ușor metastazele peritoneale și omentale, laparoscopia fiind inutilă','Lavajul pozitiv impune gastrectomie totală de principiu, ca unică cale curativă'],'ABC',173,'Stadializare — Laparoscopie și lavaj',
 'Rolul laparoscopiei (biopsie + lavaj) care contraindică rezecția curativă, practicat selectiv, pe fondul limitelor CT-ului peritoneal.',
 ['Explorarea, biopsia, lavajul și extensia locală sunt explicite.','Lavalajul pozitiv contraindică rezecția curativă.','Practica selectivă este descrisă.','CT-ul convențional identifică greu leziunile peritoneale/omentale.','Lavajul pozitiv contraindică, nu impune, rezecția curativă.']],
 8,'Declară CT-ul suficient pentru carcinomatoză și transformă lavajul pozitiv în indicație de gastrectomie totală.',['lavajul peritoneal','laparoscopia']),

q(96,['Stadializarea patologică postoperatorie a cancerului gastric, potrivit textului:',
 ['Este cel mai bun predictor al supraviețuirii și cel mai bun ghid pentru îngrijirea postoperatorie','Folosește informațiile macroscopice și microscopice ale piesei rezecate','Sistemul TNM ghidează și asistența preoperatorie, operația și îngrijirea neoperaților','Baritatul postoperator înlocuiește TNM-ul patologic, histologia fiind superfluă','Predictorul principal e clasificarea endoscopică ulcerat/polipoid, nu piesa'],'ABC',173,'TNM patologic — Predictor de supraviețuire',
 'Întâietatea stadializării patologice pe piesă ca predictor de supraviețuire, față de clasificarea endoscopică cu valoare limitată.',
 ['Predictorul de supraviețuire și ghidul postoperator sunt explicite.','Examenul macro+micro al piesei este citat.','Rolul TNM și preoperator/neoperați este descris.','Baritatul nu înlocuiește histologia.','Clasificarea endoscopică are valoare prognostică limitată.']],
 8,'Pune baritatul sau clasificarea endoscopică deasupra TNM-ului patologic ca predictor.',['cel mai bun predictor','stadializarea patologică']),
];
