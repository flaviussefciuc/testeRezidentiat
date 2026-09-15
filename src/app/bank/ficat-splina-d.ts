import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p<=324?p-130:p-138;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('ficat-splina',20,pdfOffset,`ficat-splina-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const FICAT_SPLINA_D=[
q(49,['Un politraumatizat cu suspiciune de leziune hepatică. Identificați afirmația corectă:',
 ['Instabilitatea hemodinamică reprezintă principala indicație pentru intervenția chirurgicală; imagistica de elecție include FAST, ultrasonografia standard și CT','Biopsia percutană de primă intenție înlocuiește FAST-ul la instabil','Leziunea hepatică traumatică se tratează de principiu conservator, independent de tensiune','Hemangiomul cavernos este diagnosticul de primă intenție al FAST-ului pozitiv','Capsula Glisson contraindică laparotomia, chiar în prezența instabilității'],'A',318,'Traumatisme hepatice — Instabilitatea ca indicație operatorie',
 'Recunoașterea instabilității hemodinamice ca indicație principală de chirurgie, cu FAST/US/CT ca imagistică de elecție.',
 ['Textul plasează instabilitatea ca indicație principală și enumeră FAST, US și CT.','Biopsia percutană este descurajată la incidentale; la instabil, chirurgia primează.','Conduita depinde de hemodinamică, nu este conservatoare neselectiv.','Hemangiomul este o tumoră benignă incidentală, nu diagnosticul FAST-ului traumatic.','Capsula Glisson nu contraindică laparotomia de urgență.']],
 8,'Înlocuiește instabilitatea ca indicație operatorie cu biopsia percutană, o manevră din capitolul de incidentale.',['Instabilitatea hemodinamică','computer tomografia'],[317]),

q(50,['Microscopia și originea hemangiomului cavernos hepatic se caracterizează prin:',
 ['Este, probabil, o leziune congenitală, un hamartom embriologic (tumoră benignă cu două tipuri de celule distincte)','Evaluarea microscopică evidențiază spații endoteliale vasculare separate de septuri fibroase; leziunile pot crește în dimensiuni în timpul vieții','Este un precursor al CHC, fără componente vasculare','Spațiile sunt biliare, fără endoteliu, analog chistului simplu','Hamartomul embriologic impune rezecție de principiu la incidentalul asimptomatic'],'AB',319,'Hemangiomul cavernos — Hamartom embriologic și spații endoteliale',
 'Recunoașterea naturii de hamartom congenital și a arhitecturii (spații endoteliale, septuri fibroase), versus indicația neselectivă de rezecție.',
 ['Originea congenitală/hamartom embriologic este explicită.','Spațiile endoteliale separate de septuri fibroase și creșterea în timp sunt citate.','Hemangiomul este benign, fără potențial de CHC în acest paragraf.','Spațiile sunt vasculare endoteliale, nu biliare.','Incidentalele nu necesită terapie specifică; funcția hepatică se păstrează.']],
 8,'Transformă hamartomul vascular într-un precursor de CHC și cere rezecție neselectivă, contrar paragrafului de incidental.',['spaţii endoteliale','septuri fibroase']),

q(51,['Imagistica adenomului hepatic se caracterizează prin:',
 ['CT evidențiază o masă solidă hipodensă, cu hemoragie asociată','Aspectul heterogen la IRM reprezintă elementul patognomonic al diagnosticului','Biopsia cu ac poate ajuta, dar erorile de prelevare ridică probleme de diagnostic diferențial cu HNF sau CHC','Tumorile sunt leziuni solitare, neîncapsulate','IRM este inutilă, diagnosticul impunând puncție de primă intenție înaintea CT'],'ABCD',320,'Adenomul hepatic — CT hipodens, IRM heterogen, erori de biopsie',
 'Contrastarea masei CT hipodense hemoragice, a heterogenității IRM patognomonice și a caracterului solitar neîncapsulat de limitele biopsiei.',
 ['Masa solidă hipodensă cu hemoragie la CT este explicită.','Heterogenitatea IRM ca element patognomonic este enunțată.','Erorile de prelevare versus HNF/CHC sunt citate.','Caracterul solitar, neîncapsulat, este enunțat în același paragraf.','IRM este descrisă ca metodă excelentă; biopsia nu este primul pas.']],
 8,'Inversează defectul de captare (absența Kupffer) într-o hipercaptare și pune puncția înaintea IRM.',['aspectul heterogen','patognomonic']),

q(52,['CHC trebuie suspectat la ciroticul cu:',
 ['Decompensare clinică bruscă, incluzând accentuarea icterului, encefalopatie sau creșterea ascitei','Orice tumoră hepatică solidă, CHC fiind inclus în diagnosticul diferențial','O leziune chistică simplă, seroasă, fără comunicare biliară, ca chistul de 10%','AFP sub 50 mg/dL, fără imagistică bianuală','Washout-ul arterial infirmă CHC, biopsia fiind primul pas la leziunea sub 1 cm'],'AB',321,'CHC — Decompensare bruscă (icter, encefalopatie, ascită)',
 'Recunoașterea decompensării bruște (icter, encefalopatie, ascită) și a includerii CHC la orice tumoră solidă, versus chistul simplu.',
 ['Triada decompensării bruște este enumerată explicit.','Includerea CHC la orice tumoră hepatică solidă este enunțată.','Chistul simplu seros nu este pattern-ul de suspiciune CHC.','Screening-ul bianual și AFP rămân relevante; pragul diagnostic este 500–1.000.','Washout-ul este aspectul tipic; biopsia se rezervă când pattern-ul lipsește, iar pragul de investigare este >1 cm.']],
 8,'Înlocuiește decompensarea bruscă cu chistul simplu și inversează indicația biopsiei față de washout.',['decompensare clinică bruscă','encefalopatie']),

q(53,['Hepatocitele normale primesc, prin fluxul venos portal, circa 70% din necesarul sanguin și aproximativ:',
 ['50% din oxigen','10% din oxigen, identic arterei hepatice','90% din oxigen, analog CHC-ului arterial','Niciun procent de oxigen, tot oxigenul fiind arterial','25% din oxigen, analog sfertului de flux arterial'],'A',322,'CHC — Oxigenul portal al hepatocitului normal',
 'Fixarea ponderii de oxigen (~50%) aduse pe cale portală hepatocitului normal, distinctă de 70% din debitul sanguin și de predilecția arterială a CHC.',
 ['Textul asociază fluxului portal atât ~70% din sânge, cât și ~50% din oxigen.','10% nu figurează; artera aduce restul, nu 90% din oxigen.','CHC este predominant arterial; hepatocitul normal este predominant portal.','Oxigenul portal este tocmai cifra citată.','25% este sfertul de flux arterial, nu ponderea de oxigen portal.']],
 8,'Permutează 50% oxigen portal cu 25% (flux arterial) sau cu arterializarea CHC, două procente din același paragraf de TACE/Y90.',['S-0% din oxigen','hepatocitele normale']),

q(54,['Colangiocarcinomul hilar/central, dincolo de icterul cu veziculă mică, se caracterizează prin:',
 ['Frecvent nu există tumoră vizibilă pe CT, în timp ce colangio-IRM poate evidenția lipsa unui segment al arborelui biliar central','ERCP poate identifica stenoze ale ductelor biliare','Alte tumori rare primare includ angiosarcomul și hemangioendoteliomul epitelioid','Captarea arterială cu washout și inel hiperdens este diagnostică, analog CHC','Criteriile Milano (unică <5 cm) ghidează transplantul acestor leziuni hilare'],'ABC',322,'Colangiocarcinom — CT mut, colangio-IRM și ERCP',
 'Contrastarea absenței masei CT și a golului central la colangio-IRM/stenozele ERCP de washout-ul CHC și de Milano.',
 ['Absența tumorii pe CT și semnul de segment lipsă la colangio-IRM sunt explicite.','Stenozele la ERCP sunt citate.','Angiosarcomul și hemangioendoteliomul epitelioid sunt listate ca tumori rare primare.','Washout-ul arterial este al CHC, nu al Klatskin.','Milano ghidează transplantul în CHC, nu în colangiocarcinomul hilar.']],
 8,'Pune washout-ul CHC și criteriile Milano pe Klatskin, ignorând CT-ul mut și colangio-IRM.',['colangio-IRM','tumori Klatskin']),

q(55,['Chisturile hepatice simple multiple, spre deosebire de boala polichistică, se caracterizează prin:',
 ['Când sunt multiple, sunt în număr de aproximativ 3–4 și dispuse aleator în ficat','Hemoragia intrachistică în chisturile voluminoase poate face diferențierea de un chist neoplazic sau infecțios dificilă','Sunt zeci-sute, progresive, autozomal dominante, cu rinichi polichistici constant','Aspirația prin puncție vindecă definitiv, fără recidivă simptomatică','Decorticarea este ineficientă, analog bolii polichistice extensive'],'AB',323,'Chistul simplu — 3–4 leziuni aleatorii și hemoragia intrachistică',
 'Diferențierea clusterului de 3–4 chiste aleatorii și a capcanei hemoragiei intrachistice de polichistoza progresivă.',
 ['Cifra 3–4 și dispoziția aleatorie sunt explicite.','Hemoragia care mimează chistul neoplazic/infecțios este enunțată.','Zecile de chiste progresive definesc boala polichistică, nu chistul simplu multiplu.','Aspirația ameliorează, dar simptomele reapar în majoritatea situațiilor.','Decorticarea este tratamentul standard al chistului simptomatic.']],
 8,'Egalizează 3–4 chiste aleatorii cu polichistoza progresivă și tratează puncția ca vindecare definitivă.',['3-4','dispuse aleator']),

q(56,['Drenajul venos al splinei se caracterizează prin:',
 ['Se realizează prin vena splenică și venele gastrice scurte','Vena splenică are traiect paralel cu artera splenică','Vena splenică se unește cu vena mezenterică superioară, formând vena portă','Artera splenică este ramură a mezentericei superioare, fără vene gastrice scurte','Vena splenică se varsă direct în VCI, analog suprahepaticelor'],'ABC',333,'Anatomia splinei — Vena splenică, gastrice scurte și confluența portă',
 'Fixarea dublei căi venoase (splenică + gastrice scurte), a paralelismului arteră-venă și a confluenței cu VMS.',
 ['Cele două căi venoase sunt explicite.','Traiectul paralel arteră-venă este citat.','Confluența cu VMS formând porta este enunțată.','Artera splenică este celiacă; gastricele scurte există.','Porta, nu VCI, este confluența splenică + VMS.']],
 8,'Varsă vena splenică în VCI și mută originea arterei la mezenterica superioară, două erori de confluență din același paragraf.',['vena splenică','vena mezenterică superioară']),

q(57,['Radiografia abdominală pe gol, în patologia splenică, se caracterizează prin:',
 ['Splenomegalia poate fi sugerată indirect de devierea colonului caudal sau a stomacului medial, ori de ascensionarea hemidiafragmului stâng','Uneori se observă un contur radiologic mărit al splinei','Fracturile arcurilor costale inferioare stângi pot fi sugestive pentru leziuni concomitente ale parenchimului splenic','Radiografia pe gol evidențiază constant splina normală, CT-ul fiind superfluu','Fracturile costale stângi infirmă leziunea splenică, colonul deviat fiind un semn de splină accessory'],'ABC',336,'Imagistica splinei — Radiografia pe gol și coastele stângi',
 'Recunoașterea semnelor indirecte de splenomegalie și a asocierii fracturilor costale inferioare stângi cu leziunea splenică.',
 ['Devierea colon/stomac și hemidiafragmul stâng ascensionat sunt explicite.','Conturul radiologic mărit este citat.','Fracturile costale inferioare stângi ca indiciu de leziune splenică sunt enunțate.','Textul precizează că splina normală este rar evidențiată pe gol.','Fracturile stângi sugerează, nu infirmă, leziunea parenchimatoasă.']],
 8,'Inversează semnul coastelor stângi și tratează radiografia pe gol ca vizualizare constantă a splinei normale.',['hemidiafragmul','arcurilor costale']),

q(58,['AngioCT-ul și embolizarea splenică, potrivit capitolului, se caracterizează prin:',
 ['Secțiunile fine angioCT au înlocuit cateterizarea arterei splenice pentru evaluarea lacerărilor la traumatizatul abdominal hemodinamic stabil, cu lichid liber la US','Embolizarea arterei splenice poate reduce sângerarea înaintea splenectomiei; embolizarea parțială selectivă controlează hipersplenismul la copiii cu HTP și hemoragia din lacerări','AngioCT-ul este rezervat instabilului, cateterizarea fiind standardul la stabil','Embolizarea este contraindicată înaintea splenectomiei laparoscopice','Lichidul liber la US infirmă lacerarea, angioCT-ul fiind superfluu'],'AB',337,'AngioCT și embolizare — Stabilul traumatic și hipersplenismul pediatric',
 'Contrastarea înlocuirii angiografiei clasice de angioCT la stabil și a embolizării (pre-splenectomie, hipersplenism copil, lacerare).',
 ['Înlocuirea cateterizării de angioCT la stabilul cu lichid liber este explicită.','Embolizarea preoperatorie și cea parțială (copil cu HTP, lacerare) sunt citate.','Instabilul nu se evaluează prin angioCT electiv; standardul rămâne laparotomia.','Embolizarea este descrisă ca utilă înaintea splenectomiei.','Lichidul liber este tocmai contextul angioCT, nu o infirmare.']],
 8,'Pune angioCT-ul la instabil și interzice embolizarea pre-splenectomie, două inversări din același paragraf de imagistică.',['angioCT','Embolizarea']),

q(59,['Conform Tabelului 20-5, abcesul splenic este deseori asociat cu:',
 ['Abuz de droguri sau SIDA','Sferocitoză ereditară la copilul sub 4 ani','Anevrism de arteră splenică izolat, fără infecție','Litiază biliară simptomatică din sferocitoză','Vaccinarea antipneumococică de principiu, fără factor de risc infecțios'],'A',337,'Tabelul 20-5 — Abcesul splenic (droguri, SIDA)',
 'Recunoașterea asocierii tabelate a abcesului splenic cu abuzul de droguri sau SIDA, distinctă de indicațiile hematologice.',
 ['Paranteza tabelului leagă explicit abcesul splenic de abuzul de droguri sau SIDA.','Sferocitoza este o indicație hematologică, nu asocierea abcesului.','Anevrismul de arteră splenică este o rubrică separată.','Litiaza din sferocitoză nu definește abcesul.','Vaccinarea privește OPSI, nu etiologia abcesului.']],
 8,'Mută abcesul splenic pe sferocitoză sau anevrism, două rânduri alăturate din Tabelul 20-5.',['Abces splenic','SIDA']),

q(60,['Anomaliile funcției splenice se caracterizează prin:',
 ['Mărimea splinei nu se corelează cu funcția hematologică; splenomegalia nu trebuie confundată cu hipersplenismul','Splenectomia este cea mai comună cauză de asplenie; siclemia poate duce la asplenie funcțională prin infarcte repetate și fibroză','Cele trei categorii în care splenectomia poate fi utilă sunt anemiile hemolitice, trombocitopenia imună și hipersplenismul secundar','Splenomegalia echivalează hipersplenismul, siclemia crescând dimensiunea fără a afecta funcția','Asplenia congenitală este cauza dominantă, splenectomia fiind rară'],'ABC',338,'Funcția splenică — Splenomegalie versus hipersplenism și siclemie',
 'Separarea dimensiunii de funcție, a aspleniei din siclemie (infarcte/fibroză) și a celor trei categorii de indicație.',
 ['Absența corelației mărime-funcție și distincția de hipersplenism sunt explicite.','Splenectomia ca cauză comună de asplenie și mecanismul din siclemie sunt citate.','Cele trei categorii sunt enumerate.','Textul cere tocmai să nu se confunde splenomegalia cu hipersplenismul; siclemia duce la asplenie funcțională.','Asplenia/hiposplenismul congenital sunt extrem de rare.']],
 8,'Egalizează splenomegalia cu hipersplenismul și neagă asplenia funcțională din siclemie, două distincții din același paragraf.',['siclemia','hipersplenismul']),

q(61,['În talasemia majoră (β-talasemie homozigotă), splenectomia:',
 ['Este benefică prin reducerea necesarului de transfuzie, a disconfortului din splenomegalia masivă și a potențialului de ruptură','Asociază riscul cel mai ridicat de OPSI; de aceea, alternativele (embolizare splenică, splenectomie parțială) sunt preferate','Vindecă sinteza de hemoglobină, OPSI fiind neglijabil față de sferocitoză','Este inutilă, analog siclemiei homozigote cu asplenie deja instalată','Se face de principiu înainte de 2 ani, vaccinarea fiind superfluă'],'AB',338,'Talasemia majoră — Beneficiu transfuzional și risc maxim de OPSI',
 'Aplicarea beneficiului (transfuzii, disconfort, ruptură) și a preferinței pentru embolizare/splenectomie parțială din cauza OPSI maxim.',
 ['Cele trei beneficii sunt enumerate.','Riscul maxim de OPSI și preferința pentru alternative sunt explicite.','Splenectomia nu corectează defectul de sinteză; OPSI este maxim, nu neglijabil.','În siclemie splenectomia este rară; în talasemia majoră este descrisă ca benefică, cu rezerve.','Copiii mici au risc crescut de OPSI; vaccinarea rămâne esențială.']],
 8,'Minimizează OPSI-ul (maxim în talasemie) și transformă splenectomia într-o vindecare a hemoglobinopatiei.',['talasemia majoră','OPSI']),

q(62,['Conform Tabelului 20-7, anemiile hemolitice ereditare se caracterizează prin:',
 ['Eliptocitoza: transmitere autozomal dominantă, nivele scăzute de spectrină, utilitatea splenectomiei uzuală','Deficitul de piruvat-kinază: autozomal recesiv, scăderea ATP cu distrugerea membranei, splenectomie rară','Deficitul de G6PD: sex-linkat recesiv, șunt pentozo-fosfat blocat, injurie oxidativă (sulfametoxazol, ASA, fenacetină, nitrofurantoin), splenectomie fără utilitate','Siclemia: autozomal recesivă, înlocuire Glu→Val în poziția 6 a lanțului β, splenectomie rară','G6PD se transmite autozomal dominant, analog sferocitozei, iar eliptocitoza este sex-linkată'],'ABCD',339,'Tabelul 20-7 — Eliptocitoză, PK, G6PD și siclemie',
 'Diferențierea transmiterii și a utilității splenectomiei între eliptocitoză (AD, uzual), PK (AR, rar), G6PD (X-linkat, fără utilitate) și siclemie (AR, rar).',
 ['Rândul eliptocitozei (AD, spectrină, uzual) este tabelat.','Rândul PK (AR, ATP, rar) este tabelat.','Rândul G6PD (X-linkat, oxidanți, fără utilitate) este tabelat.','Rândul siclemiei (AR, Val6, rar) este tabelat.','G6PD este sex-linkat recesiv; eliptocitoza este autozomal dominantă.']],
 8,'Permutează transmiterea X-linkată a G6PD cu AD-ul sferocitozei/eliptocitozei, două rânduri alăturate din Tabelul 20-7.',['Deficit de G6PD','Eliptocitoza']),

q(63,['Splenectomia, în trombocitopenii, în general nu este indicată în:',
 ['Trombocitopeniile induse medicamentos','Trombocitopenia neonatală','Purpura post-transfuzională','Trombocitopenia imună idiopatică a adultului, cu rată de răspuns 60–85% după splenectomie','TI asociată leucemiei limfatice cronice sau lupusului, unde splenectomia este uneori indicată'],'ABC',339,'Trombocitopenia — Situațiile fără indicație de splenectomie',
 'Recunoașterea triadei (medicamentoasă, neonatală, post-transfuzională) în care splenectomia nu este, în general, indicată.',
 ['Inducția medicamentoasă este prima situație listată fără indicație.','Trombocitopenia neonatală este a doua.','Purpura post-transfuzională este a treia.','TI idiopatică a adultului este tocmai indicația clasică, cu 60–85% pe pagina următoare.','Textul precizează că splenectomia este uneori indicată în LLC/LES.']],
 8,'Extinde interdicția asupra TI idiopatice a adultului, care este indicația clasică, și uită triada medicamentoasă–neonatală–PTP.',['post-transfuzionale','Trombocitopenia'],[340]),
];
