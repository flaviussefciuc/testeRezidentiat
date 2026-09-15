import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p<=168?p-70:p<=174?p-73:p-77;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('stomac',13,pdfOffset,`stomac-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const STOMAC_ADVANCED=[
q(1,['Celulele G producătoare de gastrină sunt localizate în:',
 ['Antru, care nu conține celule parietale','Fundus, alături de pacemaker-ul motilității gastrice','Corpul gastric, care adăpostește masa principală a celulelor G','Pilor, care secretă acid clorhidric','Duodenul descendent, ca unică sursă de gastrină'],'A',167,'Anatomie — Regiunile stomacului',
 'Recunoașterea compartimentării: celule G în antru, celule parietale în corp, fundus cu relaxare receptivă.',
 ['Textul precizează că antrul conține celule G producătoare de gastrină, dar nu celule parietale.','Fundusul este sediul stimulatorului autonom al motilității și al relaxării receptive, nu al celulelor G.','Corpul conține celule parietale, principale și ECL, nu masa celulelor G.','Pilorul este o valvă musculară care controlează evacuarea, nu secretă HCl.','Gastrina antrală este sursa descrisă; duodenul nu este prezentat ca unică localizare.']],
 8,'Permutează celulele G, parietale și pacemaker-ul fundic între etajele stomacului.',['celule G','celule parietale']),

q(2,['Adenocarcinomul gastric de tip difuz se caracterizează prin:',
 ['Diferențiere slabă, celule în inel cu pecete, apariție la pacienți mai tineri, asociere cu grupa sanguină A și diseminare limfatică și prin extensie locală','Diferențiere bună, prognostic mai bun, apariție la vârstnici și diseminare hematogenă','Aspect de tub rigid al stomacului, rezervat tipului intestinal bine diferențiat','Transformare malignă rară, similară ulcerului duodenal','Răspândire hematogenă, similară tipului intestinal, fără invazie limfatică'],'A',172,'Adenocarcinomul gastric — Clasificare histologică',
 'Diferențierea tipului difuz (inel cu pecete, tineri, grupa A) de tipul intestinal (vârstnici, hematogen, prognostic mai bun).',
 ['Toate trăsăturile tipului difuz sunt enumerate în text.','Trăsăturile listate descriu tipul intestinal, nu pe cel difuz.','Linita plastică este infiltrarea difuză a peretelui, cu prognostic deosebit de rezervat, nu tipul intestinal.','Ulcerul duodenal rareori se transformă malign; adenocarcinomul gastric nu se comportă astfel.','Tipul difuz diseminează limfatic și prin extensie locală, nu hematogen ca tipul intestinal.']],
 8,'Inversează profilul epidemiologic și calea de diseminare între tipul intestinal și cel difuz.',['inel cu pecete','grupa de sânge A']),

q(3,['Semnele clinice de boală gastrică avansată, diseminată, includ:',
 ['Nodulul supraclavicular stâng (Virchow), nodulul ombilical (Sister Mary Joseph), formațiunea rectală (Blumer) și ascita','Doar o masă epigastrică palpabilă, fără adenopatii la distanță','Testul guaiac negativ și absența anemiei feriprive, care exclud diseminarea','Tranzitul baritat ca investigație indispensabilă, superioară endoscopiei pentru cancerul cu extensie superficială','Laparoscopia de stadializare contraindicată, deoarece lavajul peritoneal pozitiv nu schimbă indicația de rezecție curativă'],'A',173,'Adenocarcinom gastric — Tablou clinic și stadializare',
 'Recunoașterea semnelor de diseminare (Virchow, Sister Mary Joseph, Blumer, ascită) care orientează spre boală nerezecabilă curativ.',
 ['Cele patru semne de diseminare sunt enumerate explicit.','Masa epigastrică sugerează extensie locală, nu singurul semn de boală avansată.','Anemia feriprivă nouă și scaunul guaiac pozitiv sunt manifestări posibile, nu criterii de excludere.','Tranzitul baritat nu este necesar și poate subdiagnostica subtipul cu extensie superficială; endoscopia cu biopsii este esențială.','Laparoscopia cu lavaj pozitiv contraindică rezecția curativă.']],
 8,'Negă rolul endoscopiei/laparoscopiei și tratează absența sângerării oculte ca semn de boală localizată.',['noduful lui Virchow','semnul Blumer']),

q(4,['Selectați enunțurile adevărate despre tumorile stromale gastrointestinale gastrice:',
 ['Dimensiunea >6 cm, necroza tumorală și peste 10 mitoze la 50 de câmpuri de mare putere sugerează comportament malign','Invazia ganglionilor limfatici este rară; ficatul este locul cel mai frecvent de metastazare','Tratamentul implică gastrectomie totală de principiu; imatinibul nu are rol în downstaging-ul tumorilor invazive','Biopsia endoscopică clasică este, de regulă, diagnostică, iar limfadenectomia radicală D2 este standard','GIST-urile gastrice derivă din mucoasa de suprafață și se stadializează identic adenocarcinomului'],'AB',174,'Tumori stromale gastrointestinale',
 'Aplicarea criteriilor de agresivitate (>6 cm, >10 mitoze/50 CGA) și a rarității metastazelor ganglionare, plus rolul imatinibului.',
 ['Cei trei markeri de comportament agresiv sunt citați.','Metastazarea hepatică predominantă și raritatea invaziei ganglionare sunt explicite.','Excizia locală este tratamentul; imatinibul poate converti tumori mari, invazive, la un stadiu mai puțin avansat.','Biopsia este de obicei nondiagnostică; invazia ganglionară rară face limfadenectomia radicală nejustificată ca standard.','GIST-urile sunt mase submucoase, nu mucosale, și nu se stadializează ca adenocarcinomul.']],
 8,'Pune gastrectomia totală în locul exciziei locale și neagă rolul imatinibului preoperator.',['>6 cm','imatinib mesilat']),

q(5,['Sindromul Zollinger-Ellison se caracterizează prin:',
 ['Peste două treimi dintre gastrinoame sunt în triunghiul gastrinomului (joncțiune cistic–coledoc, D2–D3, col pancreatic)','Gastrina à jeun peste 1.000 pg/mL este diagnostică, după oprirea IPP cel puțin o săptămână','Testul la secretină este pozitiv dacă gastrina crește cu ≥200 pg/mL față de bazal, iar pH-ul gastric ≤2,5 confirmă hipersecreția','Aproximativ 60% dintre gastrinoame sunt maligne; screeningul MEN-1 include calciul seric','Gastrina peste 200 pg/mL sub IPP este suficientă pentru diagnostic, fără oprirea tratamentului'],'ABCD',179,'Sindromul Zollinger-Ellison',
 'Aplicarea reperelor anatomice ale triunghiului gastrinomului și a pragurilor de gastrină (1.000 pg/mL; +200 la secretină).',
 ['Cele trei vârfuri ale triunghiului sunt descrise, cu peste două treimi din tumori în acest areal.','Pragul de 1.000 pg/mL și oprirea IPP o săptămână sunt explicite.','Creșterea ≥200 pg/mL la secretină și pH ≤2,5 sunt criteriile de confirmare.','Rata de malignitate ~60% și calciul ca screening MEN-1 sunt menționate.','IPP cresc gastrina; diagnosticul nu se pune sub IPP, iar 200 pg/mL nu este pragul de 1.000.']],
 8,'Folosește o gastrină „de 200” sub IPP ca prag diagnostic, confundând delta-ul la secretină cu valoarea bazală.',['1.000 pg/mL','triunghiul gastrinomului']),

q(6,['Dumpingul precoce se deosebește de dumpingul tardiv prin:',
 ['Debut la 15–30 de minute după o masă hiperosmolară, cu simptome abdominale (greață, diaree, crampe) plus vasomotorii, prin golire osmotică rapidă în intestin','Debut la 1–3 ore, cu simptome vasomotorii prin hipoglicemie hiperinsulinemică, fără borborisme sau diaree','Acarboza, inhibitor de α-glucozidază, este folosită în dumpingul tardiv','Dumpingul precoce debutează la 3 ore prin hipoglicemie, iar cel tardiv la 15 minute prin shift osmotic','Diareea explozivă necorelată cu mesele definește dumpingul tardiv, nu diareea post-vagotomie'],'ABC',180,'Complicațiile postgastrectomie — Dumping',
 'Separarea temporală și mecanică a dumpingului precoce (osmotic, 15 min) de cel tardiv (hipoglicemic, 1–3 h) și a diareei post-vagotomie.',
 ['Intervalul 15–30 de minute, masa hiperosmolară și combinația abdominal + vasomotor sunt tabelate.','Debutul la 1–3 ore, mecanismul glucoză–insulină și absența diareei sunt explicite.','Acarboza este indicată pentru dumpingul tardiv.','Direcția timp–mecanism este inversată față de tabel.','Diareea explozivă, necorelată cu mesele, descrie diareea post-vagotomie (<1% severă), nu dumpingul tardiv.']],
 8,'Inversează ora de debut și mecanismul între precoce și tardiv și atribuie diareea post-vagotomie dumpingului tardiv.',['15-30 minute','Acarboza'],[181]),
];
