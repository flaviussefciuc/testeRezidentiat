import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-195;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('pediatrie',10,pdfOffset,`pediatrie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const PEDIATRIE_B=[
q(15,['Cel mai frecvent defect cardiac congenital este:',
 ['Defectul septal ventricular','Defectul septal atrial','Persistența canalului arterial','Tetralogia Fallot','Transpoziția marilor vase'],'A',212,'Cardiologie pediatrică — Defectul septal ventricular',
 'Identificarea DSV ca cel mai frecvent defect congenital, distinct de DSA, PCA și leziunile cianogene.',
 ['Textul identifică DSV drept cel mai frecvent defect cardiac congenital.','DSA este descris separat și nu este cotat ca cel mai frecvent.','PCA este un eșec de închidere postnatală, nu defectul cel mai frecvent.','Tetralogia Fallot este o leziune cianogenă complexă, nu cea mai frecventă.','Transpoziția este incompatibilă cu viața fără șunt asociat, nu este cea mai frecventă.']],
 8,'Distractorii sunt celelalte defecte congenitale din același capitol, ușor de ierarhizat greșit.',['Cel mai frecvent defect cardiac congenital','sindromului Eisenmenger']),

q(16,['Tetralogia Fallot se caracterizează prin:',
 ['DSV, hipertrofie ventriculară dreaptă, aortă călare pe sept și obstrucție a ejecției ventriculului drept','Copiii stau în poziție ghemuită pentru ameliorarea simptomatologiei în episoadele hipoxemice','Radiografia toracică poate arăta inimă în „sabot”','Z2 larg dedublat fix, fără suflu','Șuntul predominant este stânga-dreapta, de la aortă la artera pulmonară'],'ABC',214,'Cardiologie pediatrică — Tetralogia Fallot',
 'Recunoașterea tetradei anatomice, a poziției ghemuite și a siluetei în sabot.',
 ['Cele patru componente sunt enumerate explicit.','Poziția ghemuită în episoadele hipoxemice este descrisă.','Inima în „sabot” pe RXth este citată.','Z2 larg dedublat fix caracterizează DSA, nu Fallot (Z2 unic).','Șuntul aortă–pulmonară definește PCA, nu tetralogia.']],
 8,'Distractorii importă auscultația DSA și direcția șuntului din PCA asupra tetralogiei.',['poziţie ghemuită','inimă în „sabot”']),

q(17,['Transpoziția marilor vase:',
 ['Este incompatibilă cu viața dacă nu se asociază cu PCA sau DSV','Tratamentul include menținerea PCA deschis cu prostaglandină E','Indometacinul este tratamentul de elecție pentru a închide canalul arterial','Cianoza se ameliorează pe măsură ce PCA se închide','Aorta pleacă din ventriculul stâng, iar artera pulmonară din ventriculul drept'],'AB',214,'Cardiologie pediatrică — Transpoziția marilor vase',
 'Corelarea necesității unui șunt (PCA/DSV) cu prostaglandina E care menține canalul deschis.',
 ['Textul precizează incompatibilitatea cu viața fără PCA sau DSV.','Prostaglandina E menține PCA deschis.','Indometacinul închide canalul și este folosit în PCA izolată, nu în transpoziție.','Cianoza se accentuează cu închiderea PCA.','Conexiunile sunt inverse: aorta din VD, artera pulmonară din VS.']],
 8,'Distractorii inversează atât conexiunile vasculare, cât și efectul indometacin versus prostaglandină E.',['Incompatibilă cu viaţa','prostaglandină E']),

q(18,['Boala Kawasaki:',
 ['Este a doua cea mai frecventă vasculită la copii','Criteriile includ febră peste 5 zile, conjunctivită, rash, adenopatie cervicală peste 1,5 cm și limbă zmeurie','Vasculita coronariană apare la 25% dintre pacienți','Tratamentul citat include acid acetilsalicilic și γ-globuline intravenos','Este cea mai comună vasculită pediatrică și se manifestă prin purpură palpabilă pe fese'],'ABCD',215,'Cardiologie pediatrică — Boala Kawasaki',
 'Aplicarea criteriilor clinice CRASH, a riscului coronarian de 25% și a schemei ASA plus IGIV.',
 ['Textul o plasează ca a doua cea mai frecventă vasculită.','Criteriile febrile și mucocutanate sunt enumerate.','Cifra de 25% pentru vasculita coronariană este explicită.','ASA și γ-globulinele IV sunt tratamentul citat.','Cea mai comună vasculită, cu purpură pe fese, este purpura Henoch-Schönlein.']],
 8,'Distractorul atribuie Kawasaki epidemiologia și purpura palpabilă ale Henoch-Schönlein, definite pe aceeași pagină.',['25% dintre pacienţi','limbă Zmeurie']),

q(19,['Cea mai comună vasculită la copii este:',
 ['Purpura Henoch-Schönlein','Boala Kawasaki','Poliarterita nodoasă','Arterita Takayasu','Granulomatoza cu poliangeită'],'A',215,'Cardiologie pediatrică — Purpura Henoch-Schönlein',
 'Ierarhizarea vasculitelor pediatrice: Henoch-Schönlein prima, Kawasaki a doua.',
 ['Textul identifică Henoch-Schönlein drept cea mai comună vasculită la copii.','Kawasaki este a doua cea mai frecventă, nu prima.','Poliarterita nodoasă nu este cotată astfel în text.','Arterita Takayasu nu este discutată ca cea mai comună.','Granulomatoza cu poliangeită nu este etiologia citată.']],
 8,'Distractorul imediat este Kawasaki, plasat explicit pe locul doi pe aceeași pagină.',['Cea mai comună vasculită','IgA']),

q(20,['Crupul (laringotraheita):',
 ['Este cauzat cel mai frecvent de virusurile parainfluenza tip 1','Radiografia gâtului poate arăta semnul turlei (îngustare subglotică)','Cazurile ușoare se tratează cu steroizi, iar cele severe (stridor de repaus) cu epinefrină în aerosoli plus corticosteroizi','Agentul istoric principal este Haemophilus influenzae tip b','Examinarea gâtului se face de rutină în cabinet, înainte de asigurarea căii aeriene'],'ABC',215,'Probleme pulmonare — Crupul',
 'Recunoașterea etiologiei parainfluenza, a semnului turlei și a schemei steroizi versus epinefrină.',
 ['Parainfluenza tip 1 este agentul principal citat.','Semnul turlei este descrierea radiologică.','Schema ușor/sever (steroizi, respectiv epinefrină plus corticosteroizi) este explicită.','Hib este agentul istoric al epiglotitei, nu al crupului.','Examinarea gâtului fără cale aeriană asigurată este precauția din epiglotită.']],
 8,'Distractorii aplică etiologia și precauția de examinare ale epiglotitei asupra crupului.',['semnul turlei','parainfluenza'],[216]),

q(21,['Defectele canalului atrioventricular:',
 ['Forma completă cuprinde DSA, DSV și un canal atrioventricular unic','Sunt întâlnite la 20% din copiii cu sindrom Down','Forma incompletă se aseamănă ca prezentare cu tetralogia Fallot','ECG arată de obicei deviație axială dreaptă, ca în DSA','Sunt incompatibile cu viața în absența prostaglandinei E'],'AB',215,'Cardiologie pediatrică — Canalul atrioventricular',
 'Recunoașterea anatomiei complete și a asocierii de 20% cu sindromul Down.',
 ['Componentele formei complete sunt enumerate.','Asocierea de 20% cu Down este explicită.','Forma incompletă se aseamănă cu DSA, nu cu Fallot.','ECG-ul citat arată deviație axială stângă.','Incompatibilitatea fără PGE caracterizează transpoziția, nu canalul AV.']],
 8,'Distractorii mută prezentarea pe Fallot, axul ECG pe dreapta și dependența de PGE din transpoziție.',['20% din copiii cu sindrom Down','canal atrioventricular unic']),

q(22,['Fibroza chistică este descrisă ca:',
 ['Cea mai frecventă patologie autozomal recesivă fatală în Statele Unite','Cea mai frecventă infecție virală a bronhiolelor','O vasculită mediată prin IgA','Un deficit de surfactant prin imaturitate pulmonară','O infecție polimicrobiană a planurilor fasciale'],'A',218,'Probleme pulmonare — Fibroza chistică',
 'Identificarea FC ca cea mai frecventă boală autozomal recesivă fatală citată.',
 ['Nota „De reținut” o identifică astfel.','Infecția virală a bronhiolelor definește bronșiolita.','Vasculita IgA este Henoch-Schönlein.','Deficitul de surfactant definește detresa respiratorie a prematurului.','Infecția planurilor fasciale este fasceita necrozantă.']],
 8,'Toate distractoarele sunt definiții reale din pediatrie/dermato, atribuite altor entități.',['autozomal recesivă fatală','Fibroza chistică']),

q(23,['Diagnosticul și tratamentul fibrozei chistice includ:',
 ['Testul sudorii cu Na și Cl peste 60 mEq/L la copii','Dezoxiribonucleaza pentru scăderea vâscozității secrețiilor','Suplimentarea cu enzime pancreatice și vitamine A, D, E și K','Pragul sudorii la copii este peste 80 mEq/L, identic cu al adultului','Mierea este tratamentul de primă linie pentru ileusul meconial'],'ABC',219,'Probleme pulmonare — Fibroza chistică',
 'Aplicarea pragului sudorii pediatric și a măsurilor mucolitice și pancreatice.',
 ['Pragul >60 mEq/L la copii este explicit.','DNaza este citată pentru vâscozitate.','Enzimele pancreatice și vitaminele A, D, E, K sunt tratamentul malabsorbției.','>80 mEq/L este pragul la adulți, nu la copii.','Mierea este contraindicată sub 1 an din cauza botulismului, nu un tratament.']],
 8,'Distractorii inversează pragul pediatric/adult și introduc mierea, o contraindicație pediatrică clasică.',['>60 mEq/L','vitamine A, D, E şi K'],[218]),

q(24,['Stenoza pilorică:',
 ['Produce vărsături nebilioase în jet și o masă epigastrică de mărimea unei măsline','Laboratorul arată alcaloză metabolică hipocloremică, hipopotasemică','Vărsăturile sunt bilioase, ca în volvulus, încă din prima zi de viață','Tratamentul de elecție este clisma cu aer contrast','Biopsia arată absența ganglionilor intramurali'],'AB',219,'Tulburări gastro-intestinale — Stenoza pilorică',
 'Recunoașterea vărsăturilor în jet, a „măslinei” și a alcalozei hipocloremice.',
 ['Tabloul clinic cu vărsături în jet și masa de tip măsline este explicit.','Alcaloza hipocloremică hipopotasemică este laboratorul citat.','Simptomele încep la câteva săptămâni, iar vărsăturile sunt nebilioase.','Clisma cu aer este tratamentul invaginației.','Absența ganglionilor definește Hirschsprung.']],
 8,'Distractorii importă vărsăturile bilioase ale volvulusului și tratamentul/histologia altor urgențe GI.',['mărimea unei măsline','alcaloză metabolică hipocloremică']),

q(25,['Enterocolita necrotică:',
 ['Are ca factori de risc nașterea prematură și greutatea mică la naștere','Radiografia poate arăta aer în peretele intestinal sau în vena portă','Tratamentul include nutriție parenterală totală, antibiotice intravenos și aspirare nazogastrică','Laboratorul arată alcaloză metabolică hipocloremică, ca în stenoza pilorică','Reducerea se face prin clismă baritată cu aer contrast'],'ABC',220,'Tulburări gastro-intestinale — Enterocolita necrotică',
 'Corelarea prematurității cu pneumatoza intestinală și cu tratamentul conservator inițial.',
 ['Prematuritatea și greutatea mică sunt factorii de risc citați.','Aerul intramural și portal este descrierea radiologică.','NPT, antibioticele IV și aspirarea NG sunt tratamentul.','Alcaloza hipocloremică este a stenozei pilorice; NEC asociază acidoză și hiponatremie.','Clisma cu aer reduce invaginația, nu NEC.']],
 8,'Distractorii mută ionograma stenozei pilorice și reducerea invaginației asupra enterocolitei necrozante.',['aer în peretele intestinal','naştere prematură']),

q(26,['Diagnosticul de boală Hirschsprung se confirmă prin:',
 ['Biopsie intestinală care arată absența ganglionilor','Scanare Meckel cu technetiu','Testul sudorii cu clor peste 60 mEq/L','Semnul sforii la tranzitul baritat gastric','Manevrele Barlow și Ortolani'],'A',220,'Tulburări gastro-intestinale — Boala Hirschsprung',
 'Asocierea confirmării histologice (aganglionoză) cu entitatea corectă.',
 ['Absența ganglionilor la biopsie este criteriul de laborator citat.','Scanarea Meckel detectează mucoasă gastrică ectopică.','Testul sudorii diagnostichează fibroza chistică.','Semnul sforii aparține stenozei pilorice.','Barlow și Ortolani sunt manevre de șold.']],
 8,'Toate distractoarele sunt teste reale din capitolul de pediatrie, legate de alte diagnostice.',['absenţa ganglionilor','megacolon']),

q(27,['Icterul neonatal sugerează o cauză nefiziologică atunci când:',
 ['Apare în primele 24 de ore după naștere','Bilirubina totală depășește 15 mg/dL sau bilirubina directă depășește 2 mg/dL','Se rezolvă spontan în două săptămâni, fără alte investigații','Fototerapia este contraindicată în forma fiziologică','Kernicterus apare tipic în hiperbilirubinemia fiziologică ușoară'],'AB',221,'Tulburări gastro-intestinale — Icterul neonatal',
 'Aplicarea pragurilor temporale și bilirubinice care delimitează icterul nefiziologic.',
 ['Debutul în primele 24 de ore este un criteriu nefiziologic.','Pragurile >15 mg/dL total sau >2 mg/dL direct sunt explicite.','Cauzele fiziologice se rezolvă frecvent în 2 săptămâni; aceasta nu definește forma nefiziologică.','Fototerapia este utilă tocmai în icterul fiziologic.','Kernicterus urmează valori extrem de mari, tipic în anomalii hepatice, nu fiziologicului ușor.']],
 8,'Distractorii inversează rolul fototerapiei și atribuie kernicterusul formei fiziologice benigne.',['primele 24 de ore','>15 mg/dL']),

q(28,['Icterul prelungit este frecvent primul semn de:',
 ['Hipotiroidism congenital','Stenoză pilorică','Invaginație intestinală','Boală Kawasaki','Sindrom Down'],'A',222,'Endocrinologie pediatrică — Hipotiroidismul congenital',
 'Recunoașterea icterului prelungit ca semnal de alarmă pentru hipotiroidismul congenital.',
 ['Nota „De reținut” identifică icterul prelungit drept primul semn frecvent.','Stenoza pilorică se prezintă cu vărsături în jet, nu ca prim semn de icter prelungit.','Invaginația produce durere și scaun de jeleu de coacăze.','Kawasaki se prezintă cu febră prelungită și semne mucocutanate.','Down asociază defecte cardiace și GI, nu este semnul citat.']],
 8,'Distractorii sunt entități pediatrice frecvente, dar nota leagă explicit icterul prelungit de hipotiroidism.',['Icterul prelungit','hipotiroidism congenital']),

q(29,['Tumora Wilms:',
 ['Este o tumoră malignă renală care apare la copiii sub 4 ani','Se poate prezenta cu masă palpabilă în flanc și hipertensiune arterială','Tratamentul include rezecție sau nefrectomie, chimioterapie și posibil radioterapie','Originea este în creasta neurală, cu acid vanilmandelic urinar crescut','Prognosticul este bun doar dacă diagnosticul se pune după vârsta de 1 an'],'ABC',221,'Probleme genitourinare — Tumora Wilms',
 'Recunoașterea vârstei sub 4 ani, a masei cu HTA și a tratamentului multimodal.',
 ['Vârsta <4 ani este explicită.','Masa de flanc și HTA sunt din tabloul clinic.','Rezecția/nefrectomia cu chimio±radio este schema citată.','Creasta neurală și VMA definesc neuroblastomul.','Prognosticul bun sub 1 an este al neuroblastomului, nu al Wilms.']],
 8,'Distractorii importă originea, markerul și pragul de vârstă prognostic al neuroblastomului.',['<4 ani','masă palpabilă'],[222]),

q(30,['Hipospadiasul și epispadiasul:',
 ['Uretra se deschide pe fața inferioară (hipospadias) sau deasupra (epispadias) a penisului','Circumcizia nu se efectuează înaintea corecției chirurgicale','Circumcizia neonatală de rutină este primul pas, pentru a facilita reconstrucția ulterioară','Tratamentul este doar hormonal, cu hCG, fără chirurgie','Defectul se asociază constant cu agenezie renală bilaterală'],'AB',222,'Probleme genitourinare — Deschiderea anormală de uretră',
 'Recunoașterea anatomiei și a interdicției de circumcizie înaintea reconstrucției.',
 ['Deschiderea inferioară versus superioară este definiția din text.','Textul cere să nu se efectueze circumcizia înaintea corecției.','Circumcizia prematură îndepărtează țesutul necesar reconstrucției.','hCG/orhidopexia sunt ale criptorhidiei, nu tratamentul de fond al hipospadiasului.','Asocierea citată este cu alte anomalii peniene, nu cu agenezie renală bilaterală constantă.']],
 8,'Distractorul recomandă tocmai circumcizia pe care textul o amână până după reconstrucție.',['hipospadias','circumcizia']),

q(31,['Boala von Gierke (glicogenoză tip I) este determinată de deficitul de:',
 ['Glucozo-6-fosfatază','α-glucozidază lizozomală','Fosforilază musculară a glicogenului','Glucozo-6-fosfat dehidrogenază','Hexozaminidază A'],'A',223,'Endocrinologie pediatrică — Bolile de stocare ale glicogenului',
 'Diferențierea deficitului de G6Pază de G6PD, Pompe, McArdle și Tay-Sachs.',
 ['Tabelul atribuie tipului I (von Gierke) deficitul de glucozo-6-fosfatază.','α-glucozidaza lizozomală definește boala Pompe.','Fosforilaza musculară definește McArdle.','Nota avertizează să nu se confunde cu G6PD.','Hexozaminidaza A lipsește în Tay-Sachs.']],
 8,'Nota din text cere tocmai distincția G6Pază versus G6PD; celelalte enzime sunt din tabelele învecinate.',['Glucozo-6-fosfatază','von Gierke']),

q(32,['Anemia Fanconi se caracterizează prin:',
 ['Transmitere autozomal recesivă, cu insuficiență medulară și risc crescut de leucemie','Pete cafe-au-lait sau zone hipopigmentate, rinichi în potcoavă și anomalii ale degetelor','Biopsie medulară hipocelulară și rupturi cromozomiale','Tratamentul poate include transplant medular, androgeni și corticosteroizi','Este o anemie pură a progenitorilor eritroizi, cu reticulocite scăzute și VEM crescut, fără pancitopenie'],'ABCD',223,'Hematologie pediatrică — Anemia Fanconi',
 'Recunoașterea pancitopeniei cu stigmate congenitale, distinct de Diamond-Blackfan.',
 ['Definiția autozomal recesivă cu insuficiență medulară și leucemie este explicită.','Stigmatele cutanate, renale și digitale sunt enumerate.','Hipocelularitatea și rupturile de benzi sunt laboratorul citat.','Transplantul, androgenii și corticosteroizii sunt tratamentul.','Anemia pură cu VEM crescut, fără pancitopenie, definește Diamond-Blackfan.']],
 8,'Distractorul descrie exact Diamond-Blackfan, prezentat imediat după Fanconi.',['pete cafe au lait','insuficienţă medulară'],[224]),

q(33,['Neuroblastomul:',
 ['Are originea în celulele crestei neurale, în glandele suprarenale sau ganglionii simpatici','Poate asocia acid vanilmandelic și homovanilic crescuți în urina pe 24 de ore','Prognosticul este bun dacă este diagnosticat înaintea vârstei de 1 an','Este cea mai frecventă sarcomă de țesuturi moi la copii','Markerul urinar caracteristic este acidul orotic'],'ABC',224,'Oncologie pediatrică — Neuroblastomul',
 'Corelarea originii din creasta neurală cu catecolaminele urinare și cu prognosticul sub 1 an.',
 ['Originea în creasta neurală/suprarenală/simpatic este explicită.','VMA și HVA urinare sunt laboratorul citat.','Nota precizează prognostic bun sub 1 an.','Cel mai frecvent sarcom de țesuturi moi este rabdomiosarcomul.','Acidul orotic nu este markerul citat.']],
 8,'Distractorul atribuie neuroblastomului epidemiologia rabdomiosarcomului, notată pe aceeași pagină.',['înaintea vârstei de 1 an','acid vanilmandelic']),

q(34,['Cel mai frecvent sarcom de țesuturi moi la copii este:',
 ['Rabdomiosarcomul','Neuroblastomul','Tumora Wilms','Osteosarcomul','Sarcomul Ewing'],'A',224,'Oncologie pediatrică — Rabdomiosarcomul',
 'Ierarhizarea tumorilor pediatrice: rabdomiosarcomul ca sarcom de părți moi.',
 ['Nota identifică rabdomiosarcomul drept cel mai frecvent sarcom de țesuturi moi.','Neuroblastomul este o tumoră a crestei neurale, nu acest sarcom.','Wilms este tumoră renală.','Osteosarcomul nu este cotat astfel în text.','Ewing nu este identificat ca cel mai frecvent sarcom de părți moi.']],
 8,'Distractorii sunt tumorile solide pediatrice din aceleași pagini, de origini diferite.',['Rabdomiosarcomul','sarcom de ţesuturi moi']),

q(35,['Hidrocefalia netratată a copilăriei:',
 ['Are o mortalitate de 50% înainte de vârsta de 3 ani','Acetazolamida sau furosemidul pot fi folosite temporar; șuntarea este de obicei necesară','Se vindecă spontan în majoritatea cazurilor, fără șunt','Mortalitatea netratată este sub 5% după vârsta de 10 ani','Diagnosticul se pune pe biopsie de ganglion, nu pe imagistică'],'AB',225,'Probleme neurologice — Hidrocefalia',
 'Cuantificarea mortalității de 50% sub 3 ani și a rolului temporar al diureticelor versus șunt.',
 ['Cifra de 50% mortalitate înainte de 3 ani, în lipsa tratamentului, este explicită.','Acetazolamida/furosemidul temporar și șuntarea uzuală sunt citate.','Textul nu descrie vindecare spontană a majorității.','Mortalitatea citată este 50% sub 3 ani, nu sub 5% tardiv.','Imagistica (US, CT, IRM) arată ventriculi măriți; biopsia de ganglion nu este metoda.']],
 8,'Procentul 50% este ușor de minimizat, iar distractorii neagă necesitatea șuntului.',['50% mortalitate','şuntarea']),

q(36,['Boala Tay-Sachs:',
 ['Este autozomal recesivă, prin absența hexozaminidazei A','Factorii de risc includ evreii Ashkenazi și canadienii francezi','Examenul de fund de ochi poate arăta pete roșii-cireșii pe retină','Deficitul enzimatic este de glucozo-6-fosfatază','Tratamentul curativ este substituția enzimatică cu alglucozidază alfa'],'ABC',225,'Probleme neurologice — Boala Tay-Sachs',
 'Asocierea hexozaminidazei A cu pata roșie-cireașă și cu grupurile de risc.',
 ['Absența hexozaminidazei A este cauza citată.','Ashkenazi și canadienii francezi sunt factorii de risc.','Petele roșii-cireșii sunt semnul oftalmologic.','G6Paza definește von Gierke.','Alglucozidaza alfa este substituția din Pompe, nu Tay-Sachs (tratament suportiv).']],
 8,'Distractorii mută enzima și tratamentul din tabelul de glicogenoze asupra Tay-Sachs.',['hexozaminidazei A','pete roşii-cireşii']),

q(37,['Defectele de tub neural:',
 ['α-fetoproteina și acetilcolinesteraza sunt crescute în sarcină, la screeningul cvadruplu','Suplimentarea cu folat la femeile care încearcă să conceapă reduce riscul','Diagnosticul prenatal se bazează pe testul sudorii','Spina bifida ocultă este forma cea mai severă, cu absența creierului anterior','Anencefalia se vindecă prin șunt ventriculo-peritoneal'],'AB',226,'Probleme neurologice — Defectele de tub neural',
 'Corelarea markerilor cvadrupli și a folatului preconcepțional cu prevenția.',
 ['AFP și acetilcolinesteraza crescute sunt laboratorul prenatal.','Suplimentarea cu folat este recomandată explicit.','Testul sudorii diagnostichează FC, nu DTN.','Spina bifida ocultă este forma cea mai benignă; absența creierului anterior definește anencefalia.','Anencefalia duce la deces în câteva zile; șuntul este pentru meningocel/mielomeningocel cu hidrocefalie.']],
 8,'Distractorii inversează ierarhia de severitate (ocultă versus anencefalie) și metoda diagnostică.',['acetilcolinesteraza','suplimentare de folat']),

q(38,['Paralizia cerebrală spastică este cauzată de deteriorarea:',
 ['Tracturilor piramidale','Căilor extrapiramidale','Hexozaminidazei A','Genei RB1','Distrofinei'],'A',226,'Probleme neurologice — Paralizia cerebrală',
 'Diferențierea PC spastice (piramidală) de forma diskinetică (extrapiramidală).',
 ['Nota precizează originea piramidală a formei spastice.','Patologia extrapiramidală produce PC diskinetică.','Hexozaminidaza A lipsește în Tay-Sachs.','RB1 este gena retinoblastomului.','Distrofina lipsește în Duchenne.']],
 8,'Nota din text contrastează explicit piramidal versus extrapiramidal; celelalte sunt gene/enzime din capitol.',['tracturilor piramidale','PC diskinetică']),

q(39,['Displazia de dezvoltare a șoldului:',
 ['Factorii de risc includ sexul feminin, primul născut, prezentația pelviană și oligohidramnios','Manevrele Barlow și Ortolani și semnul Galeazzi sunt elemente de examen','Hamul Pavlik este folosit la copiii sub 6 luni','Tratamentul chirurgical se amână după 8 ani, când acetabulul se modelează spontan','Este necroza avasculară a epifizei femurale între 3 și 8 ani'],'ABC',227,'Ortopedie pediatrică — Displazia de dezvoltare a șoldului',
 'Aplicarea factorilor de risc, a manevrelor clinice și a hamului Pavlik sub 6 luni.',
 ['Cei patru factori de risc sunt enumerați.','Barlow, Ortolani și Galeazzi sunt descrise.','Pavlik sub 6 luni este schema de vârstă.','După 8 ani corecția nu mai aduce beneficiu; nu se așteaptă modelare spontană.','NAV între 3 și 8 ani definește Legg-Calvé-Perthes.']],
 8,'Distractorii inversează fereastra de 8 ani și confundă DDH cu Perthes.',['ham Pavlik','semnul Galeazzi']),

q(40,['Alunecarea epifizei capului femural:',
 ['Are ca factori de risc adolescența, obezitatea, rasa neagră și hipotiroidismul','Tratamentul este fixarea chirurgicală; în hipotiroidism se poate face fixare profilactică contralaterală','Se tratează cu ham Pavlik sub 6 luni, ca displazia de dezvoltare','Apare cel mai frecvent între 3 și 8 ani prin necroză avasculară','Reducția se face prin supinația antebrațului și flexia cotului'],'AB',227,'Ortopedie pediatrică — Alunecarea epifizei capului femural',
 'Recunoașterea adolescentului obez hipotirodian și a fixării chirurgicale, inclusiv contralaterale.',
 ['Factorii de risc sunt enumerați.','Fixarea și profilaxia contralaterală din hipotiroidism sunt de pe pagina următoare.','Pavlik este al DDH sub 6 luni.','Intervalul 3–8 ani cu NAV este Perthes.','Supinația cu flexia cotului reduce cotul de dădacă.']],
 8,'Distractorii aplică tratamentul DDH, vârsta Perthes și manevra cotului de dădacă asupra AECF.',['obezitatea','fixare chirurgicală'],[228]),

q(41,['Boala Legg-Calvé-Perthes reprezintă:',
 ['Necroza avasculară a epifizei capului femural, cel mai frecvent între 3 și 8 ani','Alunecarea epifizei prin cartilajul de creștere la adolescentul obez','Subluxația capului radial prin tragere de mână','Inflamația tuberculului tibial la băieți în puseul de creștere','Fractura claviculară, cea mai frecventă la naștere'],'A',228,'Ortopedie pediatrică — Boala Legg-Calvé-Perthes',
 'Identificarea Perthes ca NAV a capului femural în intervalul 3–8 ani.',
 ['Definiția cu intervalul 3–8 ani este explicită.','Alunecarea la adolescentul obez este AECF.','Subluxația capului radial este cotul de dădacă.','Inflamația tuberculului tibial este Osgood-Schlatter.','Fractura claviculară este o entitate separată.']],
 8,'Toate distractoarele sunt entități ortopedice pediatrice reale din aceleași două pagini.',['3 şi 8 ani','NAV a epifizei']),

q(42,['Cotul de dădacă:',
 ['Este o subluxație a capului radial produsă prin tragere și ridicare a mâinii','Brațul este menținut în pronație și adducție','Reducția se face prin supinația antebrațului cu flexia cotului sau prin hiperpronație','Necesită bandaj în formă de opt, ca fractura de claviculă','Este cea mai frecventă fractură apărută în timpul nașterii'],'ABC',229,'Ortopedie pediatrică — Cotul de dădacă',
 'Recunoașterea mecanismului de tracțiune, a poziției și a celor două manevre de reducție.',
 ['Subluxația capului radial prin tracțiune este definiția.','Pronația și adducția sunt poziția descrisă.','Cele două manevre de reducție sunt explicite.','Bandajul în opt este al fracturii claviculare.','Cea mai frecventă fractură la naștere este cea claviculară.']],
 8,'Distractorii atribuie cotului de dădacă tratamentul și epidemiologia fracturii claviculare, de pe aceeași pagină.',['capului radial','pronaţie şi adducţie']),

q(43,['Distrofia musculară Duchenne:',
 ['Este X-linkată, prin deficit de distrofină','Manevra Gower este pozitivă, iar slăbiciunea afectează întâi mușchii proximali','Decesul survine cel mai frecvent până la 20 de ani, prin probleme respiratorii','Forma Becker are simptome mai severe și evoluție mai rapidă','CK-ul este scăzut, iar distrofina este în exces la colorația imunohistochimică'],'ABC',229,'Ortopedie pediatrică — Distrofia musculară Duchenne',
 'Corelarea distrofinei, a manevrei Gower și a mortalității respiratorii până la 20 de ani.',
 ['X-linkarea și distrofina sunt definiția.','Gower și slăbiciunea proximală sunt tabloul clinic.','Decesul până la 20 de ani prin cauze respiratorii este de pe pagina următoare.','Nota precizează că Becker este mai puțin severă, cu evoluție mai lentă.','CK este crescut, iar distrofina este absentă.']],
 8,'Distractorii inversează gravitatea Becker versus Duchenne și semnele de laborator (CK, distrofină).',['distrofină','manevra Gower'],[230]),

q(44,['Creșterea ponderală normală în copilărie include:',
 ['Dublarea greutății la naștere până la circa 6 luni, triplarea până la 12 luni și cvadruplarea la circa 24 de luni','Recâștigarea greutății de la naștere până la vârsta de 2 săptămâni, după o pierdere inițială de circa 10%','Triplarea greutății încă de la 2 săptămâni și cvadruplarea la 6 luni','Înălțimea este primul parametru afectat în deficitul de creștere, înaintea greutății','Circumferința craniană se măsoară doar după vârsta de 6 ani'],'AB',231,'Monitorizarea dezvoltării — Creșterea fizică',
 'Memorarea cadenței 6/12/24 luni și a recâștigării ponderale la 2 săptămâni.',
 ['Cadența dublare–triplare–cvadruplare este explicită.','Pierderea de ~10% și recâștigarea la 2 săptămâni sunt descrise.','Intervalele sunt comprimate față de text.','Nota precizează că greutatea este primul semn, înaintea înălțimii.','Circumferința capului se măsoară în primii 1–3 ani.']],
 8,'Distractorii comprimă cadența ponderală și inversează ordinea greutate–talie–craniu din notă.',['se dublează până la','se triplează']),

q(45,['În deficitul de creștere, cel mai sensibil și primul semn este:',
 ['Greutatea, afectată înaintea înălțimii, care precedă circumferința capului','Înălțimea, afectată înaintea greutății','Circumferința craniană, înaintea oricărui alt parametru','Doar scorul Tanner','Doar vârsta gestațională corectată'],'A',231,'Monitorizarea dezvoltării — Deficitul de creștere',
 'Aplicarea ierarhiei greutate, apoi talie, apoi craniu în eșecul de creștere.',
 ['Nota identifică greutatea ca cel mai sensibil și primul semn.','Înălțimea urmează greutății, nu o precede.','Circumferința capului este ultimul parametru afectat.','Tanner evaluează pubertatea, nu FTT.','Vârsta gestațională corectată nu este semnul citat.']],
 8,'Ierarhia celor trei curbe este ușor de inversat; nota o fixează explicit.',['cea mai sensibilă','înaintea înălţimii']),

q(46,['Trauma pediatrică neaccidentală:',
 ['Semnele includ hemoragii retiniene, fracturi de coaste posterioare sau metafizare și hematoame subdurale','Cea mai comună cauză de deces este leziunea craniană, urmată de injuriile abdominale','Cazurile suspectate se documentează și se raportează Serviciilor de Protecție a Copilului','Cea mai comună cauză de deces este fractura de claviculă obstetricală','Raportarea se amână până la confirmarea judiciară definitivă, pentru a nu alarma familia'],'ABC',237,'Monitorizarea sănătății — Abuzul copilului',
 'Recunoașterea stigmantelor de abuz, a ierarhiei cauzelor de deces și a obligației de raportare.',
 ['Lista semnelor fizice include hemoragiile retiniene, fracturile caracteristice și subduralele.','Leziunea craniană, apoi cea abdominală, este ierarhia decesului.','Raportarea către protecția copilului este cerută.','Fractura claviculară obstetricală este accidentală, nu cauza principală de deces prin abuz.','Textul cere raportare, nu amânare până la o sentință.']],
 8,'Distractorii minimizează urgența raportării și atribuie decesul unei fracturi obstetricale benigne.',['Hemoragii retiniene','leziunea craniană'],[232]),

q(47,['Sindromul DiGeorge:',
 ['Rezultă din deleția 22q11.2, cu hipoplazie timică și paratiroidiană','Asociază tetanie, anomalii faciale și malformații cardiace congenitale','Este o afecțiune X-linkată cu eczemă și trombocitopenie','Limfocitele T sunt absente, dar anticorpii sunt normali de la naștere, fără hipocalcemie','Tratamentul de fond este doar fluconazolul, ca în candidoza mucocutanată cronică'],'AB',237,'Patologii imune — Sindromul DiGeorge',
 'Corelarea deleției 22q11.2 cu tetania hipocalcemică și defectele cardiace.',
 ['Deleția 22q11.2 cu hipoplazie timică/paratiroidiană este descrierea.','Tetania, faciesul și cardiopatiile sunt elementele de diagnostic.','Eczema și trombocitopenia X-linkate definesc Wiskott-Aldrich.','Hipocalcemia este centrală; nou-născutul are anticorpi materni circa 3 luni, dar defectul este de limfocite T.','Fluconazolul tratează candidoza mucocutanată cronică, nu DiGeorge.']],
 8,'Distractorii confundă DiGeorge cu Wiskott-Aldrich și cu candidoza mucocutanată din același tabel.',['22q11.2','tetanie']),

q(48,['Reflexul Moro dispare în mod tipic la vârsta de:',
 ['3 luni','6 luni','9 luni','12 luni','18 luni'],'A',233,'Monitorizarea dezvoltării — Reflexele copilăriei',
 'Memorarea vârstei de dispariție a reflexului Moro din tabelul de reflexe.',
 ['Tabelul indică dispariția la 3 luni.','6 luni este pragul general după care persistența reflexelor infantile îngrijorează, nu vârsta Moro.','9 luni este un reper de dezvoltare (clește, primele cuvinte), nu al Moro.','12 luni nu este vârsta de dispariție citată.','18 luni nu apare în tabelul reflexelor pentru Moro.']],
 8,'Toate vârstele sunt repere reale de dezvoltare; doar 3 luni este cea a reflexului Moro.',['Moro','3']),

q(49,['Sindromul Down (trisomia 21):',
 ['Are incidența de circa 1/700 nașteri, crescând cu vârsta maternă','Asociază plică simiană, instabilitate cervicală și risc crescut de atrezie duodenală, LLA și malformații cardiace','Este cea mai frecventă cauză de dizabilitate intelectuală congenitală, indiferent de sex','Este frecvent fatal în primul an, ca trisomiile 13 și 18','Cariotipul tipic este 45X0'],'ABC',240,'Patologii genetice — Trisomia 21',
 'Recunoașterea incidenței, a stigmantelor și a supraviețuirii până în decada a patra, distinct de trisomiile 13/18.',
 ['Incidența ~1/700 cu vârsta maternă este din tabel.','Plica simiană, instabilitatea cervicală, atrezia duodenală, LLA și cardiopatiile sunt enumerate.','Nota de pe pagina anterioară o identifică drept cea mai frecventă cauză congenitală de dizabilitate intelectuală.','Fatalitatea în primul an caracterizează trisomiile 18 și 13; Down supraviețuiește adesea până în decada a patra.','45X0 este sindromul Turner.']],
 8,'Distractorii atribuie Down mortalitatea precoce a trisomiilor 13/18 și cariotipul Turner.',['plică simiană','1/700 naşteri'],[239]),

q(50,['Sindromul X fragil:',
 ['Este cea mai comună cauză de dizabilitate intelectuală familială la bărbați','Rezultă din repetări CGG la capătul cromozomului X','Tabloul include față mare, urechi mari și macroorhidie','Este cauzat de deleția brațului 5p, cu plâns asemănător țipătului de pisică','Femeile purtătoare manifestă constant fenotipul complet, identic bărbaților'],'ABC',240,'Patologii genetice — Sindromul X fragil',
 'Corelarea repetițiilor CGG cu fenotipul (macroorhidie) și cu epidemiologia la bărbați.',
 ['Nota o identifică drept cea mai comună cauză familială la bărbați.','Repetițiile CGG sunt mecanismul.','Fața/urechile mari și macroorhidia sunt tabloul.','Deleția 5p cu plâns de pisică este cri-du-chat.','Textul precizează că femeile sunt purtătoare și manifestă foarte rar efecte.']],
 8,'Distractorul importă cri-du-chat (5p) și generalizează fenotipul la purtătoarele feminine.',['CGG','macroorhidie'],[241]),

q(51,['Conjunctivita neonatală, după momentul debutului:',
 ['Forma chimică apare în prima zi de viață','Forma gonococică apare între a 2-a și a 7-a zi, cu secreție purulentă abundantă','Forma cu Chlamydia apare între ziua 5 și 14 și poate asocia pneumonie','Forma gonococică apare după 3 luni, când dispar anticorpii materni','Profilaxia la naștere se face cu unguent de nistatină, nu cu eritromicină'],'ABC',241,'Infecții pediatrice — Conjunctivita neonatală',
 'Separarea ferestrelor 1 zi / 2–7 zile / 5–14 zile și a riscului de pneumonie chlamidiană.',
 ['Fereastra de o zi definește forma chimică.','Fereastra 2–7 zile cu secreție purulentă definește gonococul.','Fereastra 5–14 zile cu risc de pneumonie definește Chlamydia.','Trei luni este fereastra manifestării imunodeficiențelor, nu a oftalmiei gonococice.','Profilaxia citată este unguentul cu eritromicină.']],
 8,'Ferestrele celor trei etiologii sunt ușor de permutat; distractorii mută gonococul pe fereastra imună de 3 luni.',['a 2-a şi a 7-a zi','eritromicină']),

q(52,['Eritemul infecțios (a cincea boală) este cauzat de:',
 ['Parvovirus B19, cu rash accentuat pe obraji („febra cu obraji pălmuiți”)','HHV-6, cu rash care apare după dispariția febrei înalte','Streptococcus pyogenes, cu aspect de șmirghel și limbă zmeurie','Virusul rujeolic, cu pete Koplik','Virusul rubeolic, cu pete Forchheimer pe palatul moale'],'A',242,'Infecții pediatrice — Eritemul infecțios',
 'Asocierea Parvovirus B19 cu rash-ul de obraji pălmuiți, distinct de roseolă, scarlatină, rujeolă și rubeolă.',
 ['Parvovirus B19 și „obraji pălmuiți” sunt descrierea din text.','HHV-6 produce roseola (exantemul subit).','Streptococul de grup A produce scarlatina.','Rujeola asociază petele Koplik.','Rubeola asociază petele Forchheimer.']],
 8,'Toate distractoarele sunt exanteme reale din același subcapitol, cu agenți și semne specifice.',['Parvovirus B19','obraji pălmuiţi']),

q(53,['Tulburarea de hiperactivitate și deficit de atenție:',
 ['Este de două până la patru ori mai frecventă la sexul masculin','Diagnosticul cere șase simptome de inatenție sau șase de hiperactivitate/impulsivitate, evidente înainte de 12 ani','Atomoxetina sau stimulantele (metilfenidat, amfetamine) sunt opțiuni farmacologice citate','Majoritatea copiilor își pierd criteriile la adult, boala fiind autolimitată înainte de pubertate','Diagnosticul se pune după un singur context (doar școala), fără afectare funcțională'],'ABC',243,'Psihiatrie pediatrică — ADHD',
 'Aplicarea predominanței masculine, a pragului de șase simptome înainte de 12 ani și a stimulantelelor.',
 ['Predilecția 2–4 ori la băieți este explicită.','Criteriul celor șase simptome și vârsta de 12 ani sunt din text.','Atomoxetina și stimulantele sunt enumerate.','Nota de pe pagina anterioară precizează că majoritatea continuă să aibă criterii la adult.','Simptomele trebuie să limiteze funcționarea în situații multiple, nu într-un singur context.']],
 8,'Distractorii contrazic nota despre persistența la adult și cerința de afectare în contexte multiple.',['şase simptome','metilfenidat'],[242]),

q(54,['Wiskott-Aldrich se caracterizează prin:',
 ['Afecțiune X-linkată cu susceptibilitate la bacterii încapsulate, eczemă și trombocitopenie','Gena WASP anormală la testarea genetică','Deleție 22q11.2 cu hipoplazie timică și tetanie','Ataxie și telangiectazie după vârsta de 3 ani, cu IgA scăzut','Abcese reci cutanate și IgE foarte crescut, ca în sindromul Job'],'AB',238,'Patologii imune — Sindromul Wiskott-Aldrich',
 'Recunoașterea triadei infecții–eczemă–trombocitopenie și a genei WASP, distinct de DiGeorge, ataxia-telangiectazia și Job.',
 ['Triada X-linkată este descrierea din tabel.','Gena WASP este citată la diagnostic.','22q11.2 cu tetanie este DiGeorge.','Ataxia și telangiectazia cu IgA scăzut definesc ataxia-telangiectazia.','IgE crescut și abcesele definesc hiper-IgE (Job).']],
 8,'Distractorii sunt celelalte imunodeficiențe din același tabel, cu stigmate ușor de permutat.',['Wiskott-Aldrich','WASP']),
];
