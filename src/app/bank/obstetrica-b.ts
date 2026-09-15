import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('obstetrica',13,pdfOffset,`obstetrica-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const OBSTETRICA_B=[
q(15,['Teratogenii în sarcină:',
 ['În primele 2 săptămâni fie ucid fătul, fie nu au niciun efect','Pot determina organogeneză anormală între 2 și 12 săptămâni','Produc malformații maxime după săptămâna 28, când SNC este deja matur','Sunt fără efect între săptămânile 2 și 12, perioada fiind „mută”','Înlocuiesc regula lui Naegele în calculul datei nașterii'],'AB',295,'Fiziologia sarcinii — Teratogeni',
 'Aplicarea ferestrelor: totul-sau-nimic în primele 2 săptămâni versus organogeneza 2–12 săptămâni.',
 ['Fereastra de 2 săptămâni (moarte sau fără efect) este din notă.','Organogeneza anormală între 2 și 12 săptămâni este explicită.','După 28 de săptămâni SNC este descris ca matur, nu ca fereastră de malformație maximă.','Intervalul 2–12 săptămâni este tocmai fereastra de organogeneză.','Regula lui Naegele estimează data nașterii, independent de teratogeni.']],
 8,'Distractorii inversează fereastra critică 2–12 săptămâni și o mută după maturarea SNC.',['primele 2 săptă￾mâni','2 şi 12']),

q(16,['Activitățile cu risc scăzut în sarcină, conform textului, includ:',
 ['Exerciții fizice de intensitate moderată','Relații sexuale, în absența riscului crescut de avort, naștere prematură sau placentă praevia','Relații sexuale în placenta praevia centrală, pentru a grăbi dilatația','Efort fizic maximal de performanță, indiferent de simptome','Tact vaginal repetat în suspiciunea de praevia'],'AB',295,'Fiziologia sarcinii — Activitate fizică și sexuală',
 'Recunoașterea încurajării efortului moderat și a excepțiilor (praevia, avort, prematuritate) pentru contactul sexual.',
 ['Exercițiile moderate sunt încurajate explicit.','Contactul sexual este permis cu cele trei excepții.','Praevia este o contraindicație citată, nu o indicație.','Textul limitează la intensitate moderată.','Tactul vaginal în praevia este evitat în capitolul de sângerare din trimestrul III.']],
 8,'Distractorii transformă excepțiile (praevia) în indicații și recomandă tactul interzis.',['intensitate','placentă praevia']),

q(17,['Cea mai precisă metodă de determinare a vârstei gestaționale în primul trimestru este:',
 ['Ultrasonografia lungimii cranio-caudale, cu acuratețe de ±3–5 zile în săptămânile 7–14','Înălțimea fundului uterin, cu precizie de ±3 săptămâni','Doar diametrul biparietal, fără alte măsurători','Regula lui Naegele aplicată pe data fertilizării','Testul de toleranță la 50 g glucoză'],'A',296,'Evaluarea vârstei gestaționale — Primul trimestru',
 'Ierarhizarea preciziei: CRL în trimestrul I versus fundul uterin după 20 de săptămâni.',
 ['CRL este descris ca cea mai precisă metodă, ±3–5 zile.','Fundul uterin după 20 de săptămâni are precizie ±3 săptămâni.','În trimestrul II se combină mai multe măsurători, nu doar DBP în trimestrul I.','Naegele pornește de la DUM, nu de la fertilizare.','Testul de 50 g este screeningul DZG, nu datarea.']],
 8,'Distractorii sunt metode reale de datare sau de screening, cu precizii diferite.',['lungimii cranio-caudale','±3-5 zile']),

q(18,['După 20 de săptămâni, înălțimea fundului uterin:',
 ['Estimează vârsta gestațională cu o precizie de ±3 săptămâni','Este afectată ca precizie de fibroame și de obezitatea maternă','În trimestrul I înlocuiește lungimea cranio-caudală ca metodă cea mai precisă','Are acuratețe de ±3–5 zile, identică ecografiei de trimestrul I','Nu este influențată de fibroamele uterine'],'AB',296,'Evaluarea vârstei gestaționale — Fundul uterin',
 'Recunoașterea preciziei ±3 săptămâni și a limitelor (fibroame, obezitate).',
 ['Precizia ±3 săptămâni este explicită.','Fibroamele și obezitatea afectează măsurătoarea.','Cea mai precisă în trimestrul I rămâne CRL.','±3–5 zile este acuratețea CRL, nu a fundului uterin.','Textul precizează că fibroamele afectează precizia.']],
 8,'Distractorii atribuie fundului uterin precizia CRL și neagă interferența fibroamelor.',['±3 săptămâni','Fibroamele']),

q(19,['Modificările renale normale din sarcină includ:',
 ['Creșterea fluxului plasmatic renal și a ratei de filtrare glomerulară cu 40%','Scăderea BUN și a creatininei','Creșterea pierderii renale de bicarbonat, pentru a compensa alcaloza respiratorie','Creșterea excreției renale de proteine','Scăderea RFG cu 40%, cu creșterea creatininei peste intervalul de referință'],'ABCD',296,'Fiziologia sarcinii — Modificări renale',
 'Corelarea hiperdinamicii renale (+40%) cu scăderea BUN/creatininei, pierderea de bicarbonat și proteinuria fiziologică.',
 ['Creșterea cu 40% a FPR și RFG este din tabel.','Scăderea BUN și creatininei este explicită.','Pierderea de bicarbonat compensează alcaloza respiratorie.','Textul precizează creșterea excreției renale de proteine.','RFG crește, nu scade; creatinina scade.']],
 8,'Distractorii inversează semnul modificării RFG/creatininei, o capcană clasică de „valori normale de adult”.',['40%','alcaloza respiratorie']),

q(20,['Modificările hematologice normale din sarcină includ:',
 ['Hipercoagulabilitate','Creșterea producției de eritrocite','Scăderea hematocritului prin creșterea volumului sanguin','Creșterea volumului sanguin și a lichidului interstițial','Creșterea hematocritului, deoarece volumul sanguin scade'],'ABCD',296,'Fiziologia sarcinii — Modificări hematologice',
 'Recunoașterea stării procoagulante, a expansiunii volemice și a anemiei diluționale, deși eritropoieza crește.',
 ['Hipercoagulabilitatea este din tabel.','Producția de eritrocite crește.','Hematocritul scade prin volumul crescut.','Creșterea volumului sanguin și a lichidului interstițial este din același tabel.','Direcția hematocrit–volum este inversată.']],
 8,'Distractorii inversează diluția hematocritului și neagă murmurul hiperdinamic, deja folosit în itemul de CV al băncii A.',['Hipercoag ula bi litate','Hematocritul scade']),

q(21,['La screeningul cvadruplu, trisomia 21 se asociază cu:',
 ['α-fetoproteină scăzută','Estriol scăzut','hCG crescut și inhibină A crescută','hCG scăzut și inhibină A scăzută, ca în trisomia 18','PAPP-A crescută în primul trimestru, fără modificarea translucenței nuchale'],'ABC',299,'Îngrijirea prenatală — Screeningul genetic',
 'Memorarea pattern-ului Down la cvadruplu (AFP↓, uE3↓, hCG↑, InhA↑).',
 ['Tabelul arată AFP scăzută în T21.','uE3 scăzut este citat.','hCG și inhibina A crescute completează pattern-ul.','hCG și inhibina scăzute caracterizează trisomia 18.','În primul trimestru, PAPP-A scade, iar translucența nuchală crește.']],
 8,'Pattern-urile T21 versus T18 sunt oglindite la hCG/inhibină; distractorii le inversează.',['Trisomia 21','lnhA']),

q(22,['Diabetul zaharat pregestațional în sarcină:',
 ['Poate asocia defecte cardiace fetale, inclusiv transpoziția marilor vase și tetralogia Fallot','Complicațiile fetale includ agenezia de sacru, defecte de tub neural și agenezie renală','Ecocardiografia fetală, mai ales în trimestrul III, este folosită pentru anomalii cardiace și de creștere','Apare doar după 24 de săptămâni și exclude malformațiile de organogeneză','Metforminul înlocuiește insulina în tot diabetul de tip I din sarcină'],'ABC',300,'Complicații medicale — Diabetul pregestațional',
 'Recunoașterea spectrului malformativ (sacru, cord, tub neural) al hiperglicemiei periconcepționale.',
 ['Transpoziția și Fallot sunt citate.','Agenezia de sacru, DTN și agenezia renală sunt enumerate.','US și ecocardiografia, mai ales în trimestrul III, sunt indicate.','DZG apare după 24 de săptămâni; malformațiile țin de diabetul preexistent.','Insulina este cerută în tipul I necontrolat; textul nu înlocuiește insulina cu metformin în tot tipul I.']],
 8,'Distractorii mută malformațiile pe DZG (debut tardiv) și scot insulina din tipul I.',['agenezie de sacru','tetralogia']),

q(23,['La testul de toleranță de 1 oră din screeningul DZG, doza de glucoză administrată mamei este de:',
 ['50 g','75 g','100 g','25 g','150 g'],'A',300,'Complicații medicale — Screeningul DZG',
 'Diferențierea dozei de 50 g a testului de 1 oră de doza de 100 g a testului de 3 ore.',
 ['Figura indică 50 g la testul de 1 oră.','75 g nu este doza citată în figură.','100 g este doza testului de 3 ore.','25 g este o jumătate necitata.','150 g depășește ambele doze din protocol.']],
 8,'50 g versus 100 g sunt dozele reale ale celor două trepte, ușor de inversat.',['1 oră','100 g']),

q(24,['Testul de toleranță la 3 ore (100 g) este considerat anormal dacă sunt prezente cel puțin două dintre:',
 ['Glicemia a jeun ≥95 mg/dL','Valoarea la 1 oră ≥180 mg/dL','Valoarea la 3 ore ≥140 mg/dL','O singură valoare a jeun ≥70 mg/dL','Doza folosită este de 50 g, identică testului de 1 oră'],'ABC',300,'Complicații medicale — Testul de 3 ore',
 'Aplicarea pragurilor 95/180/140 și a regulii a două valori anormale.',
 ['Pragul a jeun ≥95 este din figură (OCR: <!95).','≥180 la 1 oră este citat.','≥140 la 3 ore este citat.','70 mg/dL nu este pragul de diagnostic.','Doza este 100 g, nu 50 g.']],
 8,'Pragurile succesive 95/180/150/140 sunt ușor de amestecat, iar doza 50/100 g se inversează frecvent.',['100 g','3 ore']),

q(25,['În preeclampsia severă, departe de termen, țintele tensionale citate sunt:',
 ['Menținerea tensiunii sub 155/105 mm Hg, cu TAD peste 90 mm Hg','Labetalolul este un antihipertensiv frecvent utilizat','MgSO4 intravenos se administrează pentru profilaxia convulsiilor','Inhibitorii enzimei de conversie sunt de primă linie','Proteinuria diagnostică este sub 30 mg/24 ore'],'ABC',301,'Complicații medicale — Preeclampsia',
 'Aplicarea țintei 155/105, a labetalolului și a magneziului, fără IECA.',
 ['Ținta <155/105 cu TAD >90 este explicită.','Labetalolul este citat.','MgSO4 IV pentru profilaxia convulsiilor este descris.','IECA sunt evitate în sarcină (capitolul leagă teratogenitatea de alte pasaje; aici se folosesc labetalol/metildopa/BCC).','Pragul de proteinurie este ≥300 mg/24 ore, nu <30 mg.']],
 8,'Distractorii reintroduc IECA și subestimează pragul de proteinurie, capcane din itemele băncii A.',['155/105','labetalolul']),

q(26,['Avorturile spontane:',
 ['Se definesc ca terminarea non-electivă a sarcinii sub 20 de săptămâni','Cele din primul trimestru sunt de obicei rezultatul unor anomalii cromozomiale (în special trisomii)','Apar în până la 25% din sarcini','Cele din trimestrul I sunt aproape tot timpul prin incontinență cervico-istmică, nu prin aneuploidie','β-hCG este produs de decidua maternă, nu de sincițiotrofoblast'],'ABC',305,'Complicații obstetricale — Avortul spontan',
 'Aplicarea pragului de 20 de săptămâni, a cauzei aneuploide și a ponderii de până la 25%.',
 ['Definiția <20 săptămâni este explicită.','Trisomiiile ca și cauză de trimestrul I sunt citate.','Nota indică până la 25%.','Incontinența cervico-istmică este cauză de trimestrul II, nu I.','Nota precizează că β-hCG este produs de sincițiotrofoblast.']],
 8,'Distractorii inversează etiologia trimestrului I versus II și originea β-hCG.',['25% din sarcini','<20 săptămâni']),

q(27,['Amenințarea de avort se deosebește de iminență prin faptul că:',
 ['Orificiul cervical este închis, iar fătul este viabil','Orificiul este deschis, cu făt viabil','Produsul de concepție a fost eliminat complet','Fătul este neviabil, cu col închis','Nu există sângerare uterină'],'A',306,'Complicații obstetricale — Clasificarea avortului',
 'Separarea colului închis (amenințare) de colul deschis (iminență) la făt viabil.',
 ['Tabelul: amenințare = col închis, făt viabil, neeliminat.','Col deschis cu făt viabil definește iminența.','Eliminarea completă definește avortul complet.','Făt neviabil cu col închis este sarcina oprită în evoluție.','Sângerarea uterină este prezentă în amenințare.']],
 8,'Cele cinci linii ale tabelului (amenințare, oprită, iminență, incomplet, complet) sunt ușor de permutat.',['închis','Ameninţare de avort']),

q(28,['Moartea fetală intrauterină:',
 ['Reprezintă moartea fătului după 20 de săptămâni și înainte de debutul travaliului','Diagnosticul ecografic arată făt neviabil, fără activitate cardiacă','Complicația citată a reținerii prelungite este CID','Se definește ca pierderea sarcinii sub 12 săptămâni','Tratamentul este doar expectativ, fără inducție, indiferent de vârsta gestațională'],'ABC',306,'Complicații obstetricale — Moartea fetală intrauterină',
 'Aplicarea pragului de 20 de săptămâni, a absenței BCF și a riscului de CID.',
 ['Definiția după 20 de săptămâni, înainte de travaliu, este explicită.','US fără activitate cardiacă este criteriul.','CID la reținere prelungită este complicația citată.','Sub 12 săptămâni este avortul precoce, nu IUFD.','Se pot administra ocitocină, misoprostol sau PGE2 pentru inducție; sub 24 de săptămâni, uneori D&E.']],
 8,'Distractorii comprimă definiția sub 12 săptămâni și neagă inducția, care este tratamentul citat.',['după 20 de săptămâni','CID']),

q(29,['Restricția de creștere intrauterină:',
 ['Se definește prin creștere sub percentila 10 pentru vârsta gestațională','Forma asimetrică reprezintă 80% din cazuri, cu abdomen mic și craniu relativ păstrat, tardiv în sarcină','Forma simetrică (20%) apare devreme, prin infecții congenitale, anomalii cromozomiale sau droguri materne','Forma simetrică este 80% și apare doar prin insuficiență uteroplacentară tardivă','Primul semn US cel mai frecvent este circumferința craniană peste percentila 90'],'ABC',306,'Complicații obstetricale — RCIU',
 'Separarea formei asimetrice tardive (80%) de cea simetrică precoce (20%).',
 ['Pragul <percentila 10 este definiția.','80%, abdomen redus, tardiv, sunt ale formei asimetrice.','20%, debut precoce și cauzele citate sunt ale formei simetrice.','Ponderile 80/20 sunt inversate.','Nota de pe pagina următoare identifică circumferința abdominală <percentila 10 ca primul semn US, nu craniul mare.']],
 8,'Ponderile 80 versus 20 și sediul (abdomen versus craniu) sunt capcane simetrice.',['percentila 10','80% dintre cazuri'],[307]),

q(30,['Hidramniosul (polihidramniosul):',
 ['Se definește prin indexul lichidului amniotic peste 25 cm sau un buzunar de cel puțin 8 cm','Poate rezulta din atrezie esofagiană, diabet matern sau sarcini multiple','Sub 32 de săptămâni se poate asocia amnioreducția cu indometacin','Definește oligoamniosul, cu index sub 5 cm','Tactul vaginal repetat este primul pas diagnostic'],'ABC',307,'Complicații obstetricale — Hidramniosul',
 'Aplicarea pragului ILA >25 cm și a opțiunii indometacin plus amnioreducție sub 32 de săptămâni.',
 ['ILA >25 cm sau buzunar ≥8 cm sunt criteriile.','Atrezia esofagiană, diabetul și sarcinile multiple sunt cauzele citate.','Indometacinul cu amnioreducție sub 32 de săptămâni este tratamentul.','ILA <5 cm definește oligoamniosul.','Tactul vaginal repetat este evitat în PROM, nu este diagnosticul hidramniosului.']],
 8,'Pragurile 5 cm versus 25 cm sunt oglindite; distractorul importă interdicția tactului din PROM.',['>25 cm','indometacin']),

q(31,['În ultimele săptămâni de gestație, contracțiile Braxton-Hicks:',
 ['Sunt contracții false, care nu se asociază cu travaliul','Definesc faza activă a primului stadiu, cu dilatație de 1,5 cm/oră','Impun operație cezariană de urgență','Sunt decelerații tardive ale frecvenței cardiace fetale','Apar doar după dilatația completă de 10 cm'],'A',311,'Travaliu — Contracțiile Braxton-Hicks',
 'Identificarea contracțiilor false de la termen, distinct de travaliul adevărat.',
 ['Nota le descrie ca false, neasociate cu travaliul.','Faza activă cu 1,5 cm/oră la multipare este travaliul adevărat.','Cezariana nu este indicația contracțiilor false.','Decelerațiile tardive țin de monitorizarea fetală.','Dilatația de 10 cm marchează începutul stadiului 2.']],
 8,'Distractorii sunt etape reale ale travaliului, atribuite unor contracții pe care textul le numește false.',['Braxton-Hicks','nu se asociază']),

q(32,['Prezentația craniană:',
 ['Este prezentă în peste 95% din sarcini în momentul nașterii','Înainte de 28 de săptămâni, prezentația pelviană apare în 25% din cazuri, dar de obicei se convertește','Este rară sub 5% la termen, pelviana fiind regula','Impune cezariană în toate cazurile, inclusiv occipito-anterioară','Este sinonimă cu prezentația facială prin hiperextensie totală'],'AB',312,'Travaliu — Prezentația la naștere',
 'Cuantificarea celor >95% craniene la termen și a celor 25% pelviene înainte de 28 de săptămâni.',
 ['Peste 95% la naștere este din notă.','25% pelviană înainte de 28 de săptămâni, cu conversie ulterioară, este explicită.','La termen craniană este regula, nu excepția.','Cezariana nu este regula prezentației craniene occipito-anterioare.','Prezentația facială este o distocie rară prin hiperextensie, nu sinonimul cranienei.']],
 8,'Procentele 95% și 25% sunt ușor de inversat între termen și trimestrul II.',['>95% din sarcini','28 săptămâni']),

q(33,['Inducerea travaliului este contraindicată în:',
 ['Uter cicatricial','Herpes genital activ','Placentă previa sau vasa previa','Preeclampsie, care este o indicație maternă, nu o contraindicație','Sarcina depășită cronologic (>40–42 de săptămâni), care este o indicație fetală'],'ABC',312,'Travaliu — Inducerea travaliului',
 'Separarea contraindicațiilor (cicatrice, herpes activ, praevia) de indicațiile (preeclampsie, post-term).',
 ['Uterul cicatricial este contraindicație.','Herpesul genital activ este contraindicație.','Praevia/vasa previa sunt contraindicații.','Preeclampsia este indicație maternă.','Post-term este indicație fetală.']],
 8,'Listele de indicații și contraindicații stau alăturat; distractorii permută preeclampsie și post-term pe coloana interzisă.',['herpes genital activ','placenta previa']),

q(34,['Un scor Bishop sub 3 după inducere se asociază cu o rată de cezariană de circa:',
 ['30%, față de 15% când scorul este peste 3','5%, identică nașterii spontane','80%, indiferent de dilatație','0%, scorul neavând valoare prognostică','50%, pragul mortalității hidrocefaliei netratate'],'A',312,'Travaliu — Scorul Bishop',
 'Memorarea ratelor 30% versus 15% de cezariană după Bishop <3 versus >3.',
 ['Textul citează 30% sub 3 și 15% peste 3.','5% nu este rata citată.','80% nu apare.','Textul atribuie scorului valoare prognostică.','50% este o cifră din alt capitol (hidrocefalie), nu Bishop.']],
 8,'Cele două procente 30 și 15 sunt ușor de inversat sau de înlocuit cu alte cifre memorabile.',['Bishop <3','30%']),

q(35,['Stadiile travaliului:',
 ['Stadiul 2 merge de la dilatația completă (10 cm) până la expulzia fătului','Stadiul 3 merge de la expulzia nou-născutului până la expulzia placentei, de obicei în primele 30 de minute','Stadiul 4 este prima oră postpartum, de stabilizare hemodinamică','Stadiul 1 se încheie la dilatația de 4 cm, fără fază activă ulterior','Placenta se separă înaintea expulziei fătului, definind stadiul 2'],'ABC',313,'Travaliu — Stadiile travaliului',
 'Delimitarea stadiilor 2–4 după dilatația completă, placenta în 30 de minute și prima oră postpartum.',
 ['Stadiul 2: 10 cm → expulzia fătului.','Stadiul 3: expulzia fătului → placentă în 30 de minute.','Stadiul 4: prima oră postpartum.','Stadiul 1 include faza activă până la circa 10 cm.','Separarea placentei urmează expulziei fătului (stadiul 3).']],
 8,'Numerotarea celor patru stadii și pragul de 10 cm sunt ușor de deplasat.',['10 cm','30 de minute']),

q(36,['Prezentația pelviană decompletă (francă):',
 ['Reprezintă 75% dintre cazurile pelviene','Are coapsele flectate pe abdomen și genunchii în extensie','Este cea mai comună prezentație distocică, în ansamblu','Are ambele genunchi și coapse în flexie, definind forma completă','Este prezentația craniană cu bărbia în piept'],'ABC',313,'Travaliu — Distocii de prezentație',
 'Identificarea formei france (75%) după poziția coapselor și genunchilor.',
 ['75% este ponderea formei decomplete.','Coapse flectate, genunchi în extensie, este descrierea.','Pelviana este cea mai comună distocie de prezentație.','Flexia coapselor și genunchilor definește forma completă.','Bărbia în piept este prezentația craniană normală.']],
 8,'Formele francă/completă/incompletă se deosebesc doar prin genunchi; ponderea 75% ancorează varianta corectă.',['75% dintre cazuri','genunchii în extensie']),

q(37,['Coriocarcinomul:',
 ['Apare secundar unei mole în 50% din cazuri, sau după avort, sarcină extrauterină ori sarcină normală','Tratamentul include chimioterapia de rutină; histerectomia dacă tumora este limitată la uter','Prognosticul este bun în absența metastazelor hepatice sau cerebrale','Diagnosticul de elecție este doar metotrexatul, fără a măsura β-hCG ulterior','Metastazează doar local, fără diseminare pulmonară'],'ABC',316,'Boala trofoblastică — Coriocarcinomul',
 'Recunoașterea originii post-molare (50%), a chimioterapiei și a prognosticului legat de metastazele hepatice/cerebrale.',
 ['Cei 50% după molă și celelalte origini sunt explicite.','Chimioterapia de rutină și histerectomia în boala limitată sunt schema.','Prognosticul bun fără metastaze hepatice/cerebrale este citat.','β-hCG se monitorizează periodic; chimioterapia nu exclude urmărirea.','Metastazele pulmonare, cerebrale, hepatice, renale sau GI sunt enumerate.']],
 8,'Distractorii neagă urmărirea β-hCG și diseminarea pulmonară, ambele explicite.',['50% din cazuri','metastaze']),

q(38,['Pseudocieza (sarcina falsă):',
 ['Implică somatizarea stresului, cu modificare a axei hipotalamo-hipofizo-ovariene','Determină semnele și simptomele sarcinii la femei care nu sunt gravide și nu sunt psihotice','Este identică molei complete, cu cariotip 46XX paternal','Se tratează prin D&C de primă intenție, ca mola','Impune metotrexat, ca sarcina ectopică ruptă'],'AB',295,'Fiziologia sarcinii — Pseudocieza',
 'Diferențierea sarcinii false non-psihotice de boala trofoblastică și de ectopica ruptă.',
 ['Somatizarea cu modificarea axei este definiția.','Femeia nu este gravidă și nu este psihotică.','46XX paternal definește mola completă.','D&C este tratamentul molei, nu al pseudociezei.','Metotrexatul este al ectopicii nerupte; forma ruptă cere chirurgie.']],
 8,'Distractorii aplică cariotipul, D&C-ul molei și metotrexatul ectopicii asupra unei entități non-gravide.',['Pseudocieza','nu sunt psihotice']),

q(39,['În RCIU, primul semn ultrasonografic și cel mai frecvent este:',
 ['Circumferința abdominală sub percentila 10 pentru vârsta gestațională','Indexul lichidului amniotic peste 25 cm','Decelerațiile precoce izolate, fără alte modificări','Lungimea cranio-caudală din trimestrul I','Scorul Bishop sub 3'],'A',307,'Complicații obstetricale — RCIU',
 'Identificarea circumferinței abdominale <percentila 10 ca prim semn US.',
 ['Nota identifică CA <percentila 10.','ILA >25 cm definește hidramniosul.','Decelerațiile precoce țin de monitorizarea din travaliu.','CRL datează trimestrul I, nu diagnostichează RCIU tardiv.','Bishop estimează succesul inducției.']],
 8,'Percentila 10 este folosită și pentru definiția RCIU; candidatul trebuie să o lege de abdomen, nu de craniu sau de lichid.',['circumferin)a abdo￾minală','percentila 10']),

q(40,['Faza activă a primului stadiu al travaliului:',
 ['Începe când colul se dilată de la 6 cm până la circa 10 cm','Progresează cu circa 1,2 cm/oră la nulipare și 1,5 cm/oră la multipare','Se încheie la dilatația de 2 cm, înaintea ștergerii colului','Corespunde expulziei placentei','Durează prima oră postpartum'],'AB',313,'Travaliu — Stadiul 1, faza activă',
 'Aplicarea pragului de 6 cm și a vitezelor 1,2 versus 1,5 cm/oră după paritate.',
 ['Intervalul 6–10 cm definește faza activă.','Vitezele 1,2 (nulipare) și 1,5 (multipare) sunt din tabel.','2 cm este încă faza pasivă (până la 6 cm).','Expulzia placentei este stadiul 3.','Prima oră postpartum este stadiul 4.']],
 8,'Pragul clasic de 4 cm a fost înlocuit în text cu 6 cm; vitezele 1,2/1,5 se inversează ușor după paritate.',['6 cm','1,5 cm/h']),

q(41,['La gravida după 20 de săptămâni, distanța în centimetri de la pubis la fundul uterin:',
 ['Ar trebui să fie identică cu vârsta gestațională măsurată în săptămâni','O diferență de cel puțin 3 cm sub așteptare sugerează RCIU','Este egală cu vârsta embrionară, nu cu cea gestațională','Înlocuiește CRL ca metodă cea mai precisă încă din săptămâna 7','Crește cu 40%, ca debitul cardiac'],'AB',307,'Complicații obstetricale — Evaluarea creșterii',
 'Aplicarea regulii centimetru = săptămână și a deficitului de 3 cm ca semnal de RCIU.',
 ['Identitatea cm–săptămâni de la 20 de săptămâni este explicită.','Deficitul ≥3 cm sugerează RCIU.','Măsura urmează vârsta gestațională, nu pe cea embrionară (cu 2 săptămâni mai mică).','CRL rămâne cea mai precisă în trimestrul I.','Cei 40% sunt ai debitului cardiac, nu ai înălțimii fundului.']],
 8,'Regula cm = săptămână este ușor de aplicat pe vârsta embrionară sau de confunda cu +40% din fiziologie.',['3 cm mai mică','săptămâna 20']),

q(42,['Tumorile trofoblastice benigne însumează circa:',
 ['80% din totalul cazurilor de boală gestațională trofoblastică','5% din cazuri, restul fiind coriocarcinom de novo','50%, identic ponderii coriocarcinomului post-molar','25%, ponderea avorturilor spontane','95%, ponderea prezentației craniene'],'A',316,'Boala trofoblastică — Mola hidatiformă',
 'Ierarhizarea: 80% tumori trofoblastice benigne, 20% neoplazie, 5% coriocarcinom după molă.',
 ['Cei 80% sunt explicit tumori benigne.','5% este ponderea coriocarcinomului dintre mole, nu a bolii benigne.','50% este originea post-molară a coriocarcinomului.','25% este ponderea avorturilor.','95% este prezentația craniană.']],
 8,'Toate procentele apar în obstetrică (80, 50, 25, 95, 5); candidatul trebuie să lege 80% de molele benigne.',['80% din totalul','trofoblastice benigne']),

q(43,['În hidramnios, lichidul amniotic în exces:',
 ['Se reacumulează de cele mai multe ori după amnioreducție','Poate fi drenat percutan (amnioreducție)','Rămâne definitiv redus după o singură amnioreducție, fără recidivă','Se tratează de primă intenție prin tact vaginal repetat','Definește oligoamniosul când ILA depășește 25 cm'],'AB',307,'Complicații obstetricale — Hidramniosul',
 'Recunoașterea reacumulării după amnioreducția percutană.',
 ['Nota precizează reacumularea după amnioreducție.','Drenajul percutan este definit în aceeași notă.','Recidiva este regula, nu excepția.','Tactul vaginal repetat nu este tratamentul.','ILA >25 cm este hidramnios, nu oligoamnios.']],
 8,'Nota avertizează tocmai asupra reacumulării, o capcană dacă se crede că o singură puncție rezolvă excesul.',['reacumulează','amnio￾reducţie']),

q(44,['β-hCG în sarcina timpurie:',
 ['Este produs de sincițiotrofoblast','Menține secreția de progesteron până când placenta preia producția','Se dublează la fiecare 48 de ore în sarcina intrauterină viabilă','Este produs de decidua maternală și se înjumătățește la 48 de ore în sarcina normală','Lipsa vizualizării intrauterine la un prag de 1.500 mUI/mL transvaginal exclude complet ectopica'],'ABC',305,'Complicații obstetricale — β-hCG',
 'Corelarea originii sincițiotrofoblastice cu dublarea la 48 de ore și cu susținerea corpului galben.',
 ['Originea din sincițiotrofoblast este din notă.','Menținerea progesteronului până la preluarea placentară este explicită.','Dublarea la 48 de ore este din textul despre ectopie.','Decidua nu este sursa; cinetică de înjumătățire ar fi patologică.','Absența sacului la 1.500 mUI/mL crește suspiciunea, iar valoarea se repetă în 2 zile; nu „exclude”.']],
 8,'Distractorii inversează cinetică (dublare versus înjumătățire) și transformă un prag de suspiciune într-o excludere.',['sinciţiotrofoblast','progesteron']),
];
