import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-195;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('pediatrie',10,pdfOffset,`pediatrie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const PEDIATRIE_D=[
q(90,['Identificați afirmația corectă referitoare la hemoglobina fetală:',
 ['Are o afinitate mai mare pentru oxigen decât hemoglobina adultului și extrage oxigenul din sângele matern','Are o afinitate mai mică pentru oxigen decât hemoglobina adultului, motiv pentru care nu extrage O2 din sângele matern','Este înlocuită complet de hemoglobina adultă încă din viața intrauterină, înainte de expansiunea pulmonară','Nu participă la schimbul de gaze, care ar începe abia după naștere în circulația sistemică','Arterele ombilicale transportă sângele oxigenat de la placentă către sistemul portal'],'A',212,'Cardiologie pediatrică — Circulația fetală',
 'Recunoașterea afinității crescute a Hb fetale pentru oxigen, distinct de direcția fluxurilor ombilicale.',
 ['Textul precizează afinitatea mai mare a Hb fetale și extracția de O2 din sângele matern.','Afinitatea este mai mare, nu mai mică.','Înlocuirea completă antenatală nu este descrisă; după naștere se modifică rezistențele vasculare.','Schimbul de gaze are loc în circulația utero-placentară.','Arterele ombilicale duc sânge neoxigenat spre placentă; venele aduc sângele oxigenat.']],
 8,'Distractorii inversează afinitatea Hb și direcția oxigenării ombilicale, ambele pe aceeași pagină.',['afinitate mai mare pentru oxigen','circulaţia utero-placentară']),

q(91,['În defectele septale ventriculare largi, textul recomandă:',
 ['Diuretice sau inhibitori ai enzimei de conversie pentru scăderea încărcării de volum sau a rezistențelor vasculare','Repararea precoce, înaintea apariției sindromului Eisenmenger','Urmărire fără tratament, rezervată defectelor mici, aplicată și șunturilor largi','Risc crescut de endocardită în lipsa tratamentului','Indometacinul ca agent de închidere, identic persistenței de canal arterial'],'ABD',212,'Cardiologie pediatrică — Defectul septal ventricular',
 'Corelarea tratamentului medical al șuntului larg cu repararea înainte de Eisenmenger și cu riscul de endocardită.',
 ['Diureticele sau IECA sunt citate pentru șunturile largi.','Repararea precoce înainte de Eisenmenger este explicită.','Urmărirea este rezervată defectelor mici, nu celor largi.','Riscul crescut de endocardită este complicația citată.','Indometacinul închide PCA, nu DSV.']],
 8,'Distractorii mută urmărirea defectelor mici și indometacinul din PCA asupra DSV-ului larg.',['sindromului Eisenmenger','endocardită'],[214]),

q(92,['Următoarele afirmații despre defectul septal atrial sunt adevărate:',
 ['Este cel mai frecvent defect cardiac ce apare în sindromul Down','Pacienții sunt mai susceptibili la desaturări la altitudini mari și la sindromul de decompresie în scufundări','Închiderea chirurgicală se indică când fluxul sanguin pulmonar este dublul celui sistemic sau la sugarul simptomatic','Profilaxia antibiotică înaintea intervențiilor stomatologice este superfluă, chiar la defectele mici neresparate','ECG-ul tipic arată deviație axială stângă, ca în canalul atrioventricular'],'ABC',213,'Cardiologie pediatrică — Defectul septal atrial',
 'Asocierea DSA cu Down, cu riscul de altitudine/decompresie și cu pragul de flux pulmonar dublu.',
 ['Textul îl identifică drept cel mai frecvent defect din sindromul Down.','Nota despre desaturări la altitudine și decompresie este explicită.','Pragul de flux pulmonar dublu și sugarul simptomatic sunt indicațiile de închidere.','Profilaxia antibiotică este cerută înaintea chirurgiei sau stomatologiei la defectele mici.','Deviația axială dreaptă este a DSA; cea stângă este a canalului atrioventricular.']],
 8,'Distractorii neagă profilaxia stomatologică și permută axul ECG cu canalul AV de pe pagina următoare.',['desaturări la altitudini mari','fluxul sanguin pulmonar'],[212,215]),

q(93,['Trunchiul arterial persistent:',
 ['Rezultă din eșecul separării aortei de artera pulmonară, un singur vas alimentând circulația sistemică și pulmonară','Radiografia poate arăta cord în sabot, fără arteră pulmonară, cu aortă mărită și arc pe partea dreaptă','Realizează un șunt stânga-dreapta de la aortă la artera pulmonară, închis cu indometacin','Este incompatibil cu viața în absența unui DSV sau PCA, ca transpoziția marilor vase','Tratamentul de fond este prostaglandina E pentru menținerea canalului, fără corecție chirurgicală'],'AB',214,'Cardiologie pediatrică — Trunchiul arterial persistent',
 'Recunoașterea vasului unic și a imaginii de cord în sabot cu arc drept, distinct de PCA și transpoziție.',
 ['Definiția vasului unic este explicită.','Cordul în sabot fără arteră pulmonară și arcul drept sunt din imagistică.','Șuntul aortă–pulmonară închis cu indometacin definește PCA.','Incompatibilitatea fără PCA/DSV este a transpoziției.','Corecția chirurgicală este tratamentul trunchiului; PGE menține PCA în transpoziție sau Fallot.']],
 8,'Distractorii importă fiziologia PCA și conduita transpoziției asupra trunchiului, definite pe aceeași pagină.',['Trunchiul arterial persistent','arcul pe partea dreaptă']),

q(94,['Întoarcerea venoasă pulmonară anormală totală:',
 ['Venele pulmonare se golesc în circulația venoasă sistemică, adesea în vena brahiocefalică stângă','Este incompatibilă cu viața dacă foramen ovale sau canalul arterial nu rămân deschise','Se manifestă la nou-născut cu cianoză, insuficiență respiratorie, șoc și posibil hepatomegalie prin insuficiență de ventricul drept','Aorta pleacă din ventriculul drept, iar artera pulmonară din ventriculul stâng','Tratamentul de primă intenție este indometacinul, pentru a închide canalul arterial'],'ABC',214,'Cardiologie pediatrică — Întoarcerea venoasă pulmonară anormală totală',
 'Corelarea drenajului în vena brahiocefalică cu dependența de foramen/canal și cu tabloul de șoc neonatal.',
 ['Drenajul în circulația sistemică, adesea brahiocefalică stângă, este explicit.','Dependența de foramen ovale sau canal arterial este citată.','Cianoza, detresa, șocul și hepatomegalia sunt tabloul.','Conexiunile inversate ale marilor vase definesc transpoziția.','Indometacinul închide PCA, ceea ce ar fi catastrofal în această leziune dependentă de șunt.']],
 8,'Distractorii confundă drenajul venos anormal cu transpoziția și aplică indometacinul din PCA.',['vena brahiocefalică stângă','canalul arterial rămân deschise']),

q(95,['În episoadele de cianoză din tetralogia Fallot se folosesc:',
 ['Prostaglandină E pentru menținerea canalului arterial','Oxigen, propranolol, fluide intravenos și morfină','Poziție genu-pectorală','Corecție chirurgicală ca tratament definitiv','Indometacin pentru închiderea canalului arterial, ca în PCA izolată'],'ABCD',214,'Cardiologie pediatrică — Tetralogia Fallot',
 'Ierarhizarea PGE, a măsurilor din criza hipoxemică și a poziției genu-pectorale, distinct de indometacin.',
 ['PGE pentru menținerea PCA este citată.','O2, propranololul, fluidele IV și morfina sunt enumerate.','Poziția genu-pectorală este explicită.','Corecția chirurgicală este tratamentul.','Indometacinul închide PCA și agravează leziunile dependente de canal.']],
 8,'Distractorul aplică indometacinul din PCA izolată asupra unei tetralogii care cere canalul deschis.',['poziţie genu-pectorală','propranolol']),

q(96,['Atrezia de tricuspidă:',
 ['Reprezintă eșecul de formare al valvei tricuspide, împiedicând trecerea sângelui din atriul drept în ventriculul drept','Se asociază de obicei cu DSA, DSV și hipoplazie a ventriculului drept','Se manifestă imediat după naștere cu cianoză și suflu holosistolic datorat DSV','Realizează un șunt stânga-dreapta de la aortă la artera pulmonară, închis cu indometacin','Radiografia arată cord în sabot fără arteră pulmonară și arc aortic drept, ca trunchiul arterial'],'ABC',214,'Cardiologie pediatrică — Atrezia de tricuspidă',
 'Corelarea absenței valvei tricuspide cu șunturile asociate și cu suflul de DSV, distinct de PCA și trunchi.',
 ['Definiția eșecului de formare al valvei este explicită.','Asocierea cu DSA, DSV și hipoplazia de VD este citată.','Cianoza neonatală și suflul holosistolic de DSV sunt tabloul.','Șuntul aortă–pulmonară închis cu indometacin definește PCA.','Cordul în sabot cu arc drept este imagistica trunchiului arterial, nu a atreziei de tricuspidă.']],
 8,'Distractorii importă fiziologia PCA și imaginea trunchiului asupra atreziei, toate pe aceeași pagină.',['Atrezia de tricuspidă','suflu holosistolic']),

q(97,['Purpura Henoch-Schönlein:',
 ['Este o vasculită mediată de complexe imune IgA, care afectează arteriole, capilare și venule','Apare adesea între 3 și 15 ani, după o infecție acută de căi respiratorii superioare','Corticosteroizii sunt folosiți pentru simptomele gastro-intestinale severe sau afectarea renală','Complicațiile includ invaginația și leziunile renale acute','Este a doua cea mai frecventă vasculită pediatrică și asociază anevrisme coronariene la 25% dintre pacienți'],'ABCD',215,'Cardiologie pediatrică — Purpura Henoch-Schönlein',
 'Corelarea mecanismului IgA, a vârstei 3–15 ani, a corticoterapiei țintite și a invaginației.',
 ['Mecanismul IgA pe vase mici este explicit.','Vârsta 3–15 ani și prodromul de IACRS sunt citate.','Corticosteroizii pentru GI sever sau rinichi sunt tratamentul.','Invaginația și leziunile renale acute sunt complicațiile.','A doua cea mai frecventă vasculită cu anevrisme coronariene este Kawasaki.']],
 8,'Distractorul atribuie HSP epidemiologia și coronaritele Kawasaki, alăturate pe aceeași pagină.',['depozite de IgA','invaginaţie']),

q(98,['Factorii de risc ai persistenței de canal arterial includ:',
 ['Prematuritatea și altitudinea mare','Infecția maternă cu virusul rubeolic în primul trimestru de sarcină','Administrarea de prostaglandină la mamă și predilecția pentru sexul feminin','Predilecția pentru sexul masculin, ca în tetralogia Fallot','Indometacinul matern în primul trimestru, care menține canalul deschis'],'ABC',214,'Cardiologie pediatrică — Persistența canalului arterial',
 'Recunoașterea prematurității, a rubeolei de trimestrul I și a prostaglandinei materne, cu predominanță feminină.',
 ['Prematuritatea și altitudinea mare sunt din lista de factori.','Rubeola maternă din primul trimestru este explicită.','Prostaglandina la mamă și sexul feminin > masculin sunt citate.','Textul citează predominanța feminină, nu masculină.','Indometacinul induce închiderea canalului, nu îl menține deschis.']],
 8,'Distractorii inversează sexul de predilecție și efectul indometacin versus prostaglandină, de pe aceeași pagină.',['prematuritatea','virusul rubeolic']),

q(99,['Alegeți afirmațiile corecte referitoare la pertussis:',
 ['Faza catarală durează 1–2 săptămâni, cu tuse ușoară, rinoree și conjunctive injectate','Faza paroxistică aduce tusea urmată de sunet inspirator „convulsiv”, emeză și sincopă','Macrolidele (eritromicina) pot scurta durata dacă sunt inițiate precoce și se folosesc ca profilaxie postexpunere','Faza de convalescență durează circa 2 săptămâni, cu scăderea graduală a tusei','Apneea ca unică manifestare la sugar se tratează ambulator, fără spitalizare'],'ABCD',217,'Probleme pulmonare — Pertussis',
 'Memorarea celor trei faze și a rolului macrolidelor, inclusiv postexpunere.',
 ['Durata și simptomele fazei catarale sunt explicite.','Sunetul convulsiv, emeza și sincopa definesc faza paroxistică.','Eritromicina precoce și profilaxia postexpunere sunt citate.','Faza de convalescență de circa 2 săptămâni este din text.','Apneea la sugar necesită spitalizare din cauza riscului crescut.']],
 8,'Distractorul neagă spitalizarea pe care textul o cere pentru apneea sugarului.',['Faza catarală','macrolidele']),

q(100,['Sindromul de aspirație de meconiu:',
 ['Radiografia poate arăta atelectazie, zone de hiperinflație sau pneumotorax','Intubația traheală pentru aspirarea secrețiilor nu mai este recomandată','Intubația traheală pentru aspirație rămâne manevra de primă intenție la toți sugarii cu lichid meconial','Corticosteroizii antenatali grăbesc maturarea, ca în detresa prin deficit de surfactant','Raportul lecitină/sfingomielină sub 2 confirmă diagnosticul de aspirație'],'AB',218,'Probleme pulmonare — Aspirația de meconiu',
 'Recunoașterea imaginii radiologice și a abandonării intubației pentru aspirație, distinct de SDR.',
 ['Atelectazia, hiperinflația și pneumotoraxul sunt citate.','Abandonarea intubației pentru aspirație este explicită.','Textul precizează că intubația pentru aspirarea secrețiilor nu mai este recomandată.','Corticosteroizii antenatali aparțin protocolului de maturare pulmonară din SDR.','Raportul L:S ghidează maturitatea pulmonară, nu diagnostichează aspirația.']],
 8,'Distractorii aplică corticosteroizii și pragul L:S din SDR asupra aspirației de meconiu.',['intubaţia traheală','Sindromul de aspiraţie de meconiu'],[217]),

q(101,['Fistula traheo-esofagiană:',
 ['Este frecvent asociată cu atrezia esofagiană','Tabloul include tuse și cianoză în timpul alimentației, cu posibil fund de sac plin de alimente','Radiografia după inserția sondei nazo-gastrice arată sonda în plămâni sau în fundul de sac','Vărsăturile sunt nebilioase în jet, cu masă epigastrică de mărimea unei măsline','Diagnosticul se confirmă prin biopsie care arată absența ganglionilor'],'ABC',219,'Tulburări gastro-intestinale — Fistula traheo-esofagiană',
 'Corelarea asocierii cu atrezia, a cianozei la alimentație și a sondei rătăcite, distinct de stenoză pilorică și Hirschsprung.',
 ['Asocierea cu atrezia esofagiană este explicită.','Tusea, cianoza la alimentație și fundul de sac sunt tabloul.','Sonda nazo-gastrică în plămâni sau fund de sac este imagistica.','Măslina și vărsăturile în jet definesc stenoza pilorică.','Aganglionoza este criteriul Hirschsprung.']],
 8,'Distractorii mută clinica stenozei pilorice și histologia Hirschsprung asupra fistulei.',['Fistula traheo-esofagiană','fundul de sac']),

q(102,['Enurezisul:',
 ['Reprezintă micțiunea în pat pe parcursul nopții la copiii mici','Majoritatea cazurilor se rezolvă până la vârsta de 4 ani','Tratamentul include educație, alarme, restricție de lichide seara, iar în formele refractare desmopresină sau imipramină','Este, în majoritatea cazurilor, o valvulopatie posterioară care impune ablație cistoscopică de primă intenție','Circumcizia neonatală este primul pas, pentru a facilita reconstrucția uretrală'],'ABC',222,'Probleme genitourinare — Enurezisul',
 'Recunoașterea evoluției până la 4 ani și a treptelor terapeutice, distinct de valve și hipospadias.',
 ['Definiția micțiunii nocturne este explicită.','Rezolvarea majorității până la 4 ani este citată.','Educația, alarmele, dieta și desmopresina/imipramina sunt tratamentul.','Ablația cistoscopică este a valvelor uretrale posterioare.','Circumcizia amânată este regula hipospadiasului, nu a enurezisului.']],
 8,'Distractorii aplică ablația valvelor și interdicția de circumcizie din hipospadias asupra enurezisului benign.',['desmopresină','vârsta de 4 ani']),

q(103,['Criptorhidia:',
 ['Tratamentul citat este hCG exogen sau orhidopexie înainte de vârsta de 5 ani','Corecția chirurgicală reduce, dar nu elimină, riscul de cancer testicular','Circumcizia de rutină înaintea reconstrucției uretrale este primul pas, ca în hipospadias','Ablația transuretrală a pliurilor prostatice este tratamentul de elecție','Enurezisul refractar se tratează identic, cu orhidopexie'],'AB',222,'Probleme genitourinare — Criptorhidia',
 'Memorarea ferestrei de 5 ani pentru hCG/orhidopexie și a riscului oncologic persistent.',
 ['hCG sau orhidopexia înainte de 5 ani sunt explicite.','Riscul de cancer este redus, dar nu eliminat.','Circumcizia amânată aparține hipospadiasului.','Ablația transuretrală este a valvelor posterioare.','Orhidopexia nu este tratamentul enurezisului.']],
 8,'Distractorii permută conduitele hipospadiasului, valvelor și enurezisului, toate pe aceeași pagină.',['orhidopexie','cancer testicular']),

q(104,['Valvele uretrale posterioare:',
 ['Sunt pliuri anormale la nivelul uretrei prostatice distale, cu obstrucție vezicală și jet urinar slab','Ecografia arată îngroșarea pereților vezicii, hidronefroză bilaterală și/sau megaureter','Cistouretrografia micțională arată alungirea și dilatarea uretrei posterioare în timpul micțiunii','Tratamentul este hCG sau orhidopexie înainte de 5 ani','Diagnosticul se pune pe scanare Meckel cu technetiu'],'ABC',222,'Probleme genitourinare — Valve uretrale posterioare',
 'Corelarea anatomiei, a hidronefrozei bilaterale și a imaginii VCUG, distinct de criptorhidie.',
 ['Definiția pliurilor prostatice distale este explicită.','Îngroșarea vezicală, hidronefroza și megaureterul sunt din ecografie.','Alungirea uretrei posterioare la VCUG este imagistica citată.','hCG/orhidopexia tratează criptorhidia.','Scanarea Meckel detectează mucoasă gastrică ectopică.']],
 8,'Distractorii mută tratamentul criptorhidiei și scanarea Meckel asupra obstrucției uretrale posterioare.',['Valve uretrale posterioare','megaureter'],[221]),

q(105,['Hipotiroidismul congenital:',
 ['Cauza principală în țările dezvoltate este agenezia de tiroidă, iar în cele subdezvoltate deficitul sever de iod','Laboratorul arată T4 scăzut și TSH crescut','Levothyroxina se începe imediat după naștere, pentru a evita întârzierile permanente de dezvoltare','Icterul prelungit este frecvent primul semn','Tratamentul de fond este hCG exogen, ca în criptorhidie'],'ABCD',222,'Probleme endocrinologice — Hipotiroidismul congenital',
 'Contrastarea etiologiilor pe nivel de dezvoltare, a profilului T4/TSH și a urgenței levothyroxinei.',
 ['Iodul versus agenezia, după nivelul de dezvoltare, sunt explicite.','T4 scăzut și TSH crescut sunt laboratorul.','Levothyroxina imediat postnatală este cerută.','Nota identifică icterul prelungit ca prim semn frecvent.','hCG este al criptorhidiei, nu al hipotiroidismului.']],
 8,'Distractorul aplică hCG-ul criptorhidiei, aflat pe aceeași pagină, asupra cretinismului.',['cretinism','levothyroxină']),

q(106,['Boala McArdle (glicogenoză tip V) este determinată de deficitul de:',
 ['Fosforilază musculară a glicogenului','Glucozo-6-fosfatază','α-glucozidază lizozomală','Enzima de ramificare a glicogenului','Hexozaminidază A'],'A',223,'Endocrinologie pediatrică — Boala McArdle',
 'Diferențierea fosforilazei musculare de enzimele von Gierke, Pompe, Cori/Anderson și Tay-Sachs.',
 ['Tabelul atribuie tipului V deficitul de fosforilază musculară, cu crampe și mialgii.','Glucozo-6-fosfataza definește von Gierke.','α-glucozidaza lizozomală definește Pompe.','Enzima de ramificare apare la Cori și Anderson.','Hexozaminidaza A lipsește în Tay-Sachs.']],
 8,'Toate enzimele sunt din tabelele învecinate de stocare; doar fosforilaza musculară este McArdle.',['McArdle','fosforilază']),

q(107,['Selectați enunțurile adevărate despre neuroblastom:',
 ['Factorii de risc includ neurofibromatoza, scleroza tuberoasă, feocromocitomul, Beckwith-Wiedemann, Turner și consumul matern scăzut de folat','Examenul poate arăta hipertensiune, proptoză, tulburări de mișcare și echimoză periorbitală','Prognosticul este prost dacă apare după vârsta de 1 an, cu metastaze în os și creier','Este cea mai frecventă sarcomă de țesuturi moi, tratată doar prin observație','Markerul urinar caracteristic este acidul orotic, nu catecolaminele'],'ABC',224,'Oncologie pediatrică — Neuroblastomul',
 'Recunoașterea asocierilor (Beckwith, Turner, folat), a echimozei periorbitale și a prognosticului după 1 an.',
 ['Lista factorilor de risc este explicită.','HTA, proptoza și echimoză periorbitală sunt din tablou.','Prognosticul prost după 1 an și metastazele os/creier sunt citate.','Cel mai frecvent sarcom de părți moi este rabdomiosarcomul.','Markerii citați sunt VMA și HVA, nu acidul orotic.']],
 8,'Distractorii atribuie neuroblastomului epidemiologia rabdomiosarcomului și un marker necitrat.',['echimoză periorbitală','după vârsta de 1 an']),

q(108,['Convulsiile febrile recurente:',
 ['Aproximativ 35% dintre pacienți au convulsii febrile recurente, dar riscul de epilepsie pe durata vieții este doar ușor crescut','Formele complexe au probabilitate mai mare de recurență și risc crescut de epilepsie','Antipireticele anulează riscul ulterior de convulsii febrile','EEG-ul de rutină este necesar în forma simplă, fiind de obicei patognomonic','Acidul acetilsalicilic este antipireticul de primă intenție la copilul mic'],'AB',225,'Probleme neurologice — Convulsiile febrile',
 'Cuantificarea recurenței de 35% și a riscului mai mare al formei complexe, fără a supraestima epilepsia.',
 ['Cifra de 35% și riscul ușor crescut de epilepsie sunt explicite.','Recurența și epilepsia mai frecvente în forma complexă sunt citate.','Nota precizează că antipireticele nu scad riscul.','EEG-ul nu este necesar de rutină în forma simplă.','ASA se evită din cauza sindromului Reye.']],
 8,'Distractorii contrazic nota despre antipiretice și regula de a nu face EEG de rutină.',['Treizeci şi cinci la sută','risc crescut de epilepsie'],[224]),

q(109,['Hidrocefalia copilăriei:',
 ['Forma necomunicantă rezultă din obstrucția circulației LCR în ventriculul al patrulea','Forma comunicantă rezultă din disfuncția cisternelor subarahnoidiene sau a vililor arahnoidieni','Malformațiile Arnold-Chiari tip II și Dandy-Walker sunt defecte anatomice asociate','Mortalitatea netratată este sub 5% după vârsta de 10 ani, fără șunt','Diagnosticul de elecție este biopsia de ganglion, nu imagistica ventriculară'],'ABC',225,'Probleme neurologice — Hidrocefalia',
 'Separarea hidrocefaliei necomunicante de cea comunicantă și recunoașterea asocierii Chiari II/Dandy-Walker.',
 ['Obstrucția în ventriculul IV definește forma necomunicantă.','Cisternele și vilii definesc forma comunicantă.','Nota leagă Chiari II și Dandy-Walker de hidrocefalia pediatrică.','Mortalitatea citată este 50% înainte de 3 ani, nu sub 5% tardiv.','Imagistica arată ventriculi măriți; biopsia de ganglion nu este metoda.']],
 8,'Distractorii minimizează mortalitatea de 50% sub 3 ani și înlocuiesc imagistica cu o biopsie neindicată.',['Arnold-Chiari','vililor arahnoidieni']),

q(110,['Boala Osgood-Schlatter reprezintă:',
 ['Inflamația interfeței os-cartilaj a tuberculului tibial, cel mai frecvent la băieți în puseul de creștere','Necroza avasculară a epifizei capului femural între 3 și 8 ani','Subluxația capului radial prin tragere de mână','Inversia piciorului cu flexie plantară și adducție a antepiciorului','Separarea epifizei femurale de metafiză la adolescentul obez'],'A',228,'Ortopedie pediatrică — Boala Osgood-Schlatter',
 'Identificarea osteocondritei tuberculului tibial, distinct de Perthes, cotul de dădacă, piciorul strâmb și AECF.',
 ['Definiția cu predilecție la băieți în puseul de creștere este explicită.','NAV 3–8 ani definește Perthes.','Subluxația capului radial este cotul de dădacă.','Inversia, flexia plantară și adducția definesc piciorul strâmb.','Alunecarea epifizei la adolescentul obez este AECF.']],
 8,'Toate distractoarele sunt entități ortopedice reale din aceleași două pagini.',['Osgood-Schlatter','tuberculului tibial']),

q(111,['Clasificarea Salter-Harris a fracturilor cartilajului de creștere:',
 ['Tipul I este separarea cartilajului fără extindere la osul adiacent, cu prognostic bun după reducere adecvată','Tipul II asociază extindere metafizară și rar perturbări de creștere','Tipul V este o injurie prin zdrobire, cu probabilitate mare de oprire parțială a creșterii','Tipul I are prognosticul cel mai rezervat, identic zdrobirii de tip V','Tipul II impune constant epifiziodexă contralaterală de primă intenție, fără reducere'],'ABC',228,'Ortopedie pediatrică — Fracturile Salter-Harris',
 'Ierarhizarea tipurilor I, II și V după extensie anatomică și prognostic.',
 ['Separarea fără extindere osoasă și prognosticul bun sunt din tabel.','Extinderea metafizară cu rar perturbări de creștere definește tipul II.','Zdrobirea cu oprire parțială a creșterii definește tipul V.','Tipul I are prognostic bun, nu pe cel al zdrobirii.','Epifiziodеза contralaterală este o opțiune pentru inegalitatea ulterioară, nu tratamentul de primă intenție al tipului II.']],
 8,'Distractorii inversează prognosticul tipului I cu al tipului V și sar la epifiziodеză.',['Salter-Harris','Injurie prin zdrobire']),

q(112,['Piciorul strâmb (varus equin):',
 ['Asociază inversia piciorului, flexie plantară a gleznei și adducția piciorului anterior','Tratamentul începe cu fixări seriate în poziție corectă; chirurgia eliberează contracturile în cazurile cronice','Reducția se face prin supinația antebrațului și flexia cotului, ca în cotul de dădacă','Este necroza avasculară a capului femural între 3 și 8 ani','Se tratează cu ham Pavlik sub 6 luni, ca displazia de dezvoltare a șoldului'],'AB',228,'Ortopedie pediatrică — Piciorul strâmb',
 'Recunoașterea triadei inversie–flexie plantară–adducție și a seriei de gipsuri, distinct de alte entități ortopedice.',
 ['Cele trei componente de aliniere sunt explicite.','Fixările seriate și chirurgia cazurilor cronice sunt tratamentul.','Supinația cu flexia cotului reduce cotul de dădacă.','NAV 3–8 ani este Perthes.','Hamul Pavlik este al DDH sub 6 luni.']],
 8,'Distractorii aplică manevra cotului de dădacă, vârsta Perthes și Pavlik-ul DDH asupra piciorului strâmb.',['Varus equin','fixări seriate'],[227,229]),

q(113,['Forma poliarticulară a artritei juvenile idiopatice:',
 ['Interesează cinci sau mai multe articulații, cu afectare simetrică, coloană, deformități ale mâinilor și dactilită','Poate debuta la 2–5 ani sau la 10–14 ani','Tratamentul include AINS, metotrexat, sulfasalazină sau etanercept','Factorul reumatoid poate fi pozitiv la vârste mai mari','Interesează mai puțin de patru articulații mari, cu excepția șoldului, iar ANA este constant negativ ca în forma sistemică'],'ABCD',230,'Ortopedie pediatrică — AJI poliarticulară',
 'Contrastarea pragului de cinci articulații, a ferestrelor de vârstă și a etanerceptului față de forma pauciarticulară.',
 ['Cinci sau mai multe articulații și dactilita sunt din tabel.','Cele două ferestre de vârstă sunt explicite.','AINS, metotrexat, sulfasalazină și etanercept sunt tratamentul.','FR pozitiv la vârste mai mari este laboratorul citat.','Sub patru articulații mari, fără șold, definește forma pauciarticulară, unde ANA este slab pozitiv.']],
 8,'Distractorul descrie exact forma pauciarticulară, alăturată în același tabel.',['Poliarticular','etanercept']),

q(114,['Creșterea în înălțime în copilărie, conform textului:',
 ['Lungimea crește cu 50% la circa 1 an, se dublează la circa 4 ani și se triplează la circa 13 ani','Creșterea anuală de la 2 ani până la adolescență este de circa 5 cm/an','Greutatea se dublează la 4 ani și se triplează la 13 ani, identic taliei','Circumferința craniană se măsoară doar după 6 ani','În deficitul de creștere, circumferința capului este primul parametru afectat, înaintea greutății'],'AB',231,'Monitorizarea dezvoltării — Creșterea staturală',
 'Memorarea cadenței 1/4/13 ani și a ritmului de 5 cm/an, distinct de cadența ponderală.',
 ['Cadența 50%/dublare/tripling la 1/4/13 ani este explicită.','Cei 5 cm/an de la 2 ani sunt citați.','Dublarea/triplarea/cvadruplarea la 6/12/24 luni este a greutății, nu a taliei la 4 și 13 ani.','Circumferința capului se măsoară în primii 1–3 ani.','Greutatea este primul semn, înaintea înălțimii și a craniului.']],
 8,'Distractorii permută cadența ponderală 6/12/24 luni asupra taliei și inversează ierarhia FTT.',['5 cm/an','Marfan']),

q(115,['Reperul de dezvoltare corespunzător vârstei de 9 luni include:',
 ['Jocuri interactive, târât, ridicare în picioare, pensă police-index și primele cuvinte','Zâmbet social și gângurit, cu ridicarea capului la 45 de grade','Mers bine, turn din 4 cuburi și propoziții din 2 cuvinte','Turn din 9 cuburi și desenarea unui cerc','Omiteri, desenarea unei persoane și vorbire fluentă'],'A',232,'Monitorizarea dezvoltării — Reperele de 9 luni',
 'Memorarea pachetului de 9 luni (târât, pensă, primele cuvinte), distinct de 2 luni, 18 luni, 3 ani și 6 ani.',
 ['Tabelul plasează jocurile interactive, târâtul, pensă și primele cuvinte la 9 luni.','Zâmbetul social și 45 de grade sunt ale vârstei de 2 luni.','Mersul bine, 4 cuburi și propozițiile din 2 cuvinte sunt la 18 luni.','9 cuburi și cercul sunt la 3 ani.','Omiterile și vorbirea fluentă sunt la 6 ani.']],
 8,'Toate vârstele sunt rânduri reale ale aceluiași tabel de repere.',['9 luni','Primele cuvinte']),

q(116,['Reflexul de apucare palmară dispare în mod tipic la:',
 ['3 luni','6 luni','9 luni','12 luni','18 luni'],'A',233,'Monitorizarea dezvoltării — Reflexele copilăriei',
 'Memorarea vârstei de dispariție a reflexului de apucare din tabelul de reflexe.',
 ['Tabelul indică dispariția la 3 luni, cu sediu medular/vestibular.','6 luni este pragul după care persistența reflexelor infantile îngrijorează, nu vârsta de dispariție citată pentru apucare.','9 luni este reperul pensei și al primelor cuvinte.','12 luni nu este vârsta de dispariție citată.','18 luni nu apare în tabelul reflexelor pentru apucare.']],
 8,'Toate vârstele sunt repere reale; doar 3 luni este cea a reflexului de apucare.',['De apucare','3']),

q(117,['Agammaglobulinemia X-linkată:',
 ['Rezultă din diferențierea anormală a limfocitelor B, cu nivel scăzut de limfocite B și anticorpi','Determină la băieți infecții bacteriene recurente după vârsta de 6 luni','Tratamentul include imunoglobulină intravenos și antibiotice','Este o deleție 22q11.2 cu hipoplazie timică, tetanie și malformații cardiace','Se tratează cu fluconazol, ca în candidoza mucocutanată cronică'],'ABC',237,'Patologii imune — Agammaglobulinemia X-linkată',
 'Corelarea debutului după 6 luni la băieți cu absența limfocitelor B și cu IGIV, distinct de DiGeorge.',
 ['Diferențierea B anormală este descrierea din tabel.','Infecțiile bacteriene după 6 luni la băieți sunt explicite.','IGIV și antibioticele sunt tratamentul.','22q11.2 cu tetanie este DiGeorge.','Fluconazolul tratează candidoza mucocutanată cronică.']],
 8,'Distractorii confundă agammaglobulinemia cu DiGeorge și cu candidoza mucocutanată din același tabel.',['Agamaglobulinemia X','vârsta de 6 luni']),

q(118,['Boala granulomatoasă cronică:',
 ['Rezultă din incapacitatea neutrofilelor de a digera bacteriile ingerate, cu infecții bacteriene și fungice recurente','Tratamentul include antibioterapie profilactică, γ-interferon, corticosteroizi și transplant medular','Asociază albinism, granulații gigante pe frotiu și disfuncție neurologică, ca sindromul Chediak-Higashi','Este o afecțiune X-linkată cu eczemă și trombocitopenie, prin gena WASP','Ligandul CD40 deficient produce IgM crescut și IgG scăzut'],'AB',238,'Patologii imune — Boala granulomatoasă cronică',
 'Recunoașterea defectului de digestie intracelulară și a γ-interferonului, distinct de Chediak, WAS și hiper-IgM.',
 ['Incapacitatea de a digera bacteriile ingerate este definiția.','γ-interferonul, antibioticele, corticosteroizii și transplantul sunt tratamentul.','Albinismul și granulațiile gigante definesc Chediak-Higashi.','Eczema și trombocitopenia X-linkate definesc Wiskott-Aldrich.','Ligandul CD40 și IgM crescut definesc sindromul hiper-IgM.']],
 8,'Distractorii sunt celelalte fagocitopatii și defecte B/T din același tabel, cu stigmate ușor de permutat.',['Boala granulomatoasă','y-interferon']),

q(119,['Sindromul Klinefelter:',
 ['Are cariotip 47XXY','Tabloul include atrofie testiculară, siluetă longilină, ginecomastie, infertilitate și dizabilitate intelectuală moderată','Bărbații cu 47XYY sunt înalți, cu acnee severă și dizabilitate intelectuală ușoară; teoria violenței crescute a fost abandonată','Cariotipul tipic este 45XO, cu pterygium colli și coarctație de aortă','Tratamentul de fond este doar splenectomia, ca în Wiskott-Aldrich'],'ABC',239,'Patologii genetice — Sindromul Klinefelter',
 'Contrastarea 47XXY de 47XYY și de Turner, inclusiv abandonarea teoriei violenței la XYY.',
 ['Cariotipul 47XXY este din tabel.','Atrofia testiculară, ginecomastia și silueta longilină sunt tabloul.','Nota despre XYY (înălțime, acnee, teoria violenței abandonată) este explicită.','45XO cu pterygium și coarctație este Turner.','Splenectomia aparține Wiskott-Aldrich.']],
 8,'Distractorii importă cariotipul Turner și splenectomia din Wiskott-Aldrich.',['ginecomastie','47'],[238]),

q(120,['Sindromul de imunodeficiență combinată severă:',
 ['Asociază limfocite T absente și disfuncție a anticorpilor, cu infecții severe precoce, frecvent fatale','Tratamentul include IGIV, antibiotice și transplant medular','Vaccinurile vii sau vii atenuate nu trebuie administrate','Limfocitele T sunt prezente, iar defectul se limitează la chemotaxia neutrofilelor, ca în sindromul Job','Debutul infecțiilor este după a doua decadă, ca în imunodeficiența comună variabilă'],'ABC',238,'Patologii imune — Imunodeficiența combinată severă',
 'Recunoașterea absenței limfocitelor T, a urgenței transplantului și a interdicției vaccinurilor vii.',
 ['Absența limfocitelor T și fatalitatea precoce sunt din tabel.','IGIV, antibioticele și transplantul sunt tratamentul.','Interdicția vaccinurilor vii este explicită.','Chemotaxia deficientă cu IgE crescut definește Job.','Debutul în a doua decadă caracterizează imunodeficiența comună variabilă.']],
 8,'Distractorii mută Job și CVID, din același tabel, asupra unei entități fatale precoce.',['IDCS','vaccinurile vii'],[237]),

q(121,['Rujeola (pojarul):',
 ['Tabloul include febră, tuse, coriză, conjunctivită și pete Koplik pe mucoasa jugală, de obicei în dreptul molarului 2','Rash-ul eritematos începe pe scalp, piept și extremități','Tratamentul suportiv include vitamina A, izolare și notificare','Petele Forchheimer pe palatul moale și adenopatia occipitală definesc entitatea, fără indicație de vitamină A','Agentul este Parvovirus B19, cu obraji pălmuiți din prima zi'],'ABC',242,'Infecții pediatrice — Rujeola',
 'Asocierea tetradei tuse–coriză–conjunctivită–Koplik cu vitamina A, distinct de rubeolă și a cincea boală.',
 ['Tusea, coriza, conjunctivita și petele Koplik sunt tabloul.','Debutul rash-ului pe scalp și piept este explicit.','Vitamina A, izolarea și notificarea sunt tratamentul.','Petele Forchheimer și adenopatia occipitală definesc rubeola.','Parvovirus B19 produce eritemul infecțios.']],
 8,'Distractorii sunt enantemul rubeolei și etiologia eritemului infecțios, alăturate pe aceeași pagină.',['vitamina A','pete Koplik']),

q(122,['Complicațiile eritemului infecțios (a cincea boală) includ:',
 ['Hidrops fetal în caz de expunere intrauterină','Anemie aplastică, mai ales la pacienții cu siclemie','Encefalită și otită medie acută, ca în rujeolă','Cardită reumatică și glomerulonefrită poststreptococică','Pneumonie chlamidiană între zilele 5 și 14 de viață'],'AB',242,'Infecții pediatrice — Eritemul infecțios',
 'Recunoașterea hidropsului antenatal și a crizei aplastice din siclemie, distinct de rujeolă, scarlatină și oftalmia chlamidiană.',
 ['Hidropsul după expunere intrauterină este explicit.','Anemia aplastică, mai ales în siclemie, este citată.','Encefalita și OMA sunt complicațiile rujeolei.','Cardita și glomerulonefrita sunt ale scarlatinei.','Pneumonia chlamidiană aparține conjunctivitei neonatale.']],
 8,'Toate distractoarele sunt complicații reale din subcapitolul de infecții, atribuite altor exanteme.',['hidrops fetal','anemie aplastică'],[241]),

q(123,['Tulburările din spectrul autist:',
 ['Asociază afectare persistentă a comunicării sociale și patternuri restrictive de comportament, de obicei din copilăria precoce','Tabloul include eșec în a dezvolta relații, limbaj repetitiv, contact vizual deficitar și manierisme motorii','Comportamentul agresiv sau iritabil poate fi tratat cu antipsihotice atipice','Diagnosticul cere șase simptome de inatenție înainte de 12 ani, ca în ADHD','Coprolalia este prezentă la 40% dintre pacienți, ca în Tourette'],'ABC',242,'Psihiatrie pediatrică — Spectrul autist',
 'Recunoașterea triadei sociale–comunicare–restrictiv și a antipsihoticelor atipice, distinct de ADHD și Tourette.',
 ['Definiția afectării sociale și a patternurilor restrictive este explicită.','Relatiile, limbajul repetitiv și manierismele sunt din tablou.','Antipsihoticele atipice pentru agresivitate sunt citate.','Criteriul celor șase simptome înainte de 12 ani este al ADHD.','Coprolalia 40% este nota sindromului Tourette.']],
 8,'Distractorii importă criteriile ADHD și coprolalia Tourette, aflate pe paginile imediat următoare.',['antipsihotice atipice','comunicării sociale'],[243]),

q(124,['Sindromul Tourette:',
 ['Diagnosticul cere ticuri motorii și vocale zilnice, prezente peste 1 an și cu debut înainte de 18 ani','Coprolalia (obscenități repetitive) este observată la o minoritate, circa 40% dintre pacienți','Se definește prin șase simptome de inatenție înainte de 12 ani, fără ticuri','Comportamentul ilegal și distructiv, cu violarea drepturilor altora, este criteriul de bază, ca în tulburarea de conduită','Tratamentul de fond este levothyroxina, ca în hipotiroidismul congenital'],'AB',243,'Psihiatrie pediatrică — Sindromul Tourette',
 'Aplicarea duratei de peste 1 an, a vârstei sub 18 ani și a ponderii de 40% a coprolaliei.',
 ['Ticurile zilnice >1 an, înainte de 18 ani, sunt criteriile.','Nota cuantifică coprolalia la 40%, ca minoritate.','Șase simptome înainte de 12 ani definesc ADHD.','Violarea drepturilor altora definește tulburarea de conduită.','Levothyroxina tratează hipotiroidismul congenital, nu ticurile.']],
 8,'Distractorii confundă Tourette cu ADHD și cu tulburarea de conduită, definite pe aceeași pagină.',['Coprolalia','40%']),
];
