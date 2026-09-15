import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const pdfOffset=(p:number)=>p===1275?313:p<=1284?p-970:p-973;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hepatologie',34,pdfOffset,`hepatologie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const HEPATOLOGIE_B=[
q(13,['Identificați afirmația corectă referitoare la hepatita cronică:',
 ['Este definită prin inflamație hepatică de 6 luni sau mai mult și se clasifică după etiologie','Este definită prin orice creștere a transaminazelor peste 48 de ore','Necroza este maximală în zona 1, indiferent de etiologie','Scorurile histologice sunt măsuri cantitative identice ale fibrozei, aplicabile oricărei etiologii','Hepatita E nu figurează printre cauzele de hepatită cronică, nici la imunocompromiși'],'A',1275,'Hepatita — Hepatita cronică: definiție și etiologie',
 'Recunoașterea pragului de 6 luni care definește hepatita cronică și a clasificării etiologice din Cadranul 34.6.',
 ['Textul definește hepatita cronică prin durată de 6 luni sau mai mult, clasificată după etiologie (Cadranul 34.6).','Pragul este de luni, nu de 48 de ore.','Necroza este de obicei maximală în zona 3, nu în zona 1.','Textul precizează că scorurile nu sunt măsuri cantitative identice și că se folosesc sisteme diferite după boală.','Cadranul 34.6 include hepatita E la imunocompromiși.']],
 8,'Distractorii mută pragul temporal, zona de necroză și excepția VHE la imunocompromiși, toate din același paragraf.',['6 luni sau mai mult','Cadranul 34.6']),

q(14,['Morfopatologia hepatitei acute și cronice se caracterizează prin:',
 ['Hepatocitele prezintă degenerescență (balonizare, vacuolizare) și necroză, inclusiv corpi eozinofili Councilman','Necroza este de obicei maximală în zona 3, cu forme de la necroza focală până la necroza hepatică masivă','Hepatita de interfață înseamnă pierderea definiției plăcii de delimitare portală/periportală, prin apoptoză mai degrabă decât necroză','Colestaza în zona 3 și încărcarea grasă sunt evidente mai ales în hepatita alcoolică sau medicamentoasă','Infiltratul portal este format predominant din neutrofile, limfocitele fiind absente în hepatita virală'],'ABCD',1275,'Hepatita — Morfopatologie: necroză, interfață, zona 3',
 'Corelarea corpilor Councilman, a predilecției pentru zona 3 și a hepatitei de interfață (apoptoză) cu patternul inflamator limfocitar.',
 ['Textul descrie balonizarea, vacuolizarea, necroza și corpii eozinofili Councilman.','Distribuția este maximală în zona 3, de la necroza pătată/focală până la necroza multiacinară masivă.','Hepatita de interfață este definită prin pierderea plăcii de delimitare, distrucția fiind prin apoptoză mai degrabă decât necroză.','Colestaza în zona 3 și încărcarea grasă sunt citate în hepatita alcoolică sau medicamentoasă.','Infiltratul portal și lobular este format în principal din limfocite, nu din neutrofile.']],
 8,'Capcana este atribuirea infiltratului neutrofilic (marca hepatitei alcoolice) hepatitei virale, plus confuzia zonă 1 versus 3.',['zona 3','corpi eozinofiliei Councilman']),

q(15,['Cauzele hepatitelor cronice (Cadranul 34.6) includ:',
 ['Cauze metabolice, precum steatoza hepatică non-alcoolică, și forma alcool-indusă','Cauze virale: hepatita B ± D, hepatita C și hepatita E la imunocompromiși','Cauze autoimune și ereditare (boala Wilson, hemocromatoză)','Medicamente precum metildopa, izoniazid, ketoconazol și nitrofurantoin','Cauza principală la nivel mondial este deficitul de α1-antitripsină, virusurile fiind rare'],'ABCD',1275,'Hepatita — Cadranul 34.6: cauzele hepatitelor cronice',
 'Recunoașterea spectrului etiologic (metabolic, viral inclusiv VHE la imunocompromiși, medicamentos, autoimun, ereditar).',
 ['Cadranul listează NAFLD și forma alcool-indusă.','Sunt enumerate VHB ± D, VHC și VHE la imunocompromiși.','Autoimună, Wilson și hemocromatoză figurează explicit.','Metildopa, izoniazid, ketoconazol și nitrofurantoin sunt exemplele medicamentoase.','Textul identifică hepatita cronică virală drept cauza principală de boală hepatică cronică, ciroză și HCC la nivel mondial.']],
 8,'Distractorul inversează ierarhia etiologică mondială (viral versus α1-AT) din același paragraf introductiv.',['Steatoza hepatica non-alcoolica','ketoconazol']),

q(16,['Dincolo de combinațiile sofosbuvir/ledipasvir și glecaprevir/pibrentasvir deja consacrate, terapia VHC mai include:',
 ['Grazoprevir/elbasvir se administrează ca o singură tabletă pe zi, 12 săptămâni, la genotipurile 1 și 4','Toate regimurile elimină virusul la peste 95% dintre pacienți','Tratamentul de salvare cu sofosbuvir/velpatasvir plus voxilaprevir elimină virusul la peste 90% dintre non-responderi','OMS are ca scop eliminarea VHC până în 2030, fără a depinde de un vaccin eficient','Grazoprevir/elbasvir este pangenotipic și se dă 8 săptămâni indiferent de ciroză'],'ABCD',1284,'Hepatita virală C — Regimuri alternative, salvare și obiectivul OMS',
 'Completarea hărții DAA cu grazoprevir/elbasvir (1 și 4, 12 săptămâni), ratele >95%/>90% și ținta OMS 2030.',
 ['Textul descrie grazoprevir+elbasvir ca o tabletă pe zi, 12 săptămâni, eficientă la genotipurile 1 și 4.','Eliminarea la peste 95% este explicită.','Salvarea cu sofosbuvir/velpatasvir și voxilaprevir are rată >90%.','OMS urmărește eliminarea până în 2030, prima infecție virală controlată fără vaccin eficient.','Pangenotipică și 8/12 săptămâni după ciroză este glecaprevir/pibrentasvir, nu grazoprevir/elbasvir.']],
 8,'Inversează spectrul genotipic și durata dintre două regimuri bazate pe inhibitori de protează.',['voxilaprevir','până în 2030']),

q(17,['Virusul hepatitei E, dincolo de mortalitatea la gravide:',
 ['Determină o boală clinic foarte asemănătoare hepatitei A și se transmite enteral, de obicei prin apă contaminată','Aproximativ 30% dintre câini, porci și rozătoare poartă virusul','Genomul este ARN monocatenar, cu ORF1 (non-structurale) și ORF2 (structurale)','Diagnosticul folosește ELISA pentru anti-VHE IgG sau IgM și evidențierea ARN VHE în ser sau scaun','Este un virus ADN din familia Hepadnaviridae, transmis parenteral ca VHB'],'ABCD',1284,'Hepatita virală E — Transmitere, rezervor animal și genom',
 'Recunoașterea analogiei cu VHA, a rezervorului animal (~30%) și a genomului ARN cu ORF, distinct de VHB.',
 ['Textul o descrie ca foarte asemănătoare hepatitei A, cu transmitere enterală prin apă.','30% din câini, porci și rozătoare poartă virusul.','Figura genomului indică ARN monocatenar cu ORF1 și ORF2.','ELISA IgG/IgM și PCR pentru ARN în ser sau scaun sunt descrise.','VHE este ARN din Hepeviridae, nu ADN Hepadnaviridae.']],
 8,'Distractorul reia capcana VHB (ADN, Hepadnaviridae, parenteral) pe un virus enteric ARN.',['30% din câini','Familia Hepeviridae']),

q(18,['Aproximativ 10–15% din hepatitele acute virale nu pot fi clasificate. În acest context sunt adevărate:',
 ['O proporție de 10–15% rămâne neclasificată după testele uzuale','Mononucleoza infecțioasă, datorată EBV, poate produce hepatită','Alte cauze virale de afectare parenchimatoasă acută includ CMV și virusul febrei galbene','Cauze non-virale din aceeași figură includ Toxoplasma, Leptospira și Coxiella (febra Q)','Toate hepatitele acute virale sunt azi etichetabile serologic, procentul de 10–15% fiind depășit'],'ABCD',1284,'Hepatita — Hepatite neclasificate și cauze non-A–E',
 'Reținerea cotei de 10–15% neclasificate și a listei de agenți (EBV, CMV, febra galbenă, Leptospira, Coxiella) din figura cauzelor acute.',
 ['Textul citează 10-15% hepatite acute virale neclasificate.','Mononucleoza EBV este menționată ca hepatită.','CMV și virusul febrei galbene figurează la infecțiile virale din figura de pe pagina de hepatită acută.','Toxoplasma, Leptospira icterohaemorrhagiae și Coxiella burnetii (febra Q) sunt listate la non-virale.','Textul păstrează cota de 10-15% neclasificate.']],
 8,'Cota 10–15% este ușor de negat, iar distractorii trebuie deosebiți de lista reală de zoonoze hepatitice.',['10-15%','Mononucleoza infectioasa'],[1275]),

q(19,['Etiologia și morfologia cirozei:',
 ['Alcoolul rămâne cea mai frecventă cauză în Occident, dar este probabil să fie înlocuit de NAFLD','Infecția virală este cel mai frecvent factor etiologic la nivel mondial','Ciroza micronodulară are noduli de obicei <3 mm, uniformi, adesea din alcool sau boli ale arborelui biliar','Ciroza macronodulară are noduli de dimensiuni variabile, adesea după hepatită cronică virală','Ciroza micronodulară este tipică hepatitelor virale, iar cea macronodulară alcoolului'],'ABCD',1289,'Ciroza hepatică — Etiologie și tipuri micronodular/macronodular',
 'Contrastul Occident (alcool/NAFLD) versus mondial (viral) și corespondența micro- versus macronodulară.',
 ['Textul păstrează alcoolul ca cea mai frecventă cauză occidentală, cu NAFLD pe cale să îl înlocuiască.','Infecția virală este cel mai frecvent factor mondial.','Micronodular: <3 mm, uniform, alcool sau arbore biliar.','Macronodular: dimensiuni variabile, adesea viral.','Relația este inversă față de distractor.']],
 8,'Inversează cuplajul etiologie–morfologie (alcool/micro versus viral/macro), o asociere clasică de manual.',['<3 mm','cel mai frecvent factor etio']),

q(20,['Patogeneza fibrozei hepatice:',
 ['Lezarea activează celulele stelate și macrofagele prin axa CCL2–CCR2','Miofibroblastele proliferă sub PDGF, iar TGF-β favorizează diferențierea stelată','TIMP-urile inhibă MMP-urile, perpetuând depunerea de colagen','Dacă cauza este eliminată, fibroza incipientă poate rezolva; în ciroza constituită poate exista regresie, nu restitutio ad integrum','Transplantul hepatic nu are rol, terapiile antifibrotice fiind deja standardul de îngrijire'],'ABCD',1289,'Ciroza hepatică — Patogeneza fibrozei și reversibilitatea',
 'Urmărirea cascadei stelată–TGF-β–PDGF–TIMP și nuanța reversibilitate versus regresie, cu absența antifibroticelor de rutină.',
 ['Axa CCL2-CCR2 activează stelatele și macrofagele.','TGF-β diferențiază stelatele în miofibroblaste; PDGF le proliferă.','TIMP-urile inhibă degradarea matricei de către MMP.','Rezoluția fibrozei incipiente și regresia (nu restitutio) în ciroza constituită sunt distinse explicit.','Antifibroticele sunt în dezvoltare; transplantul rămâne singurul tratament disponibil pentru insuficiența hepatică.']],
 8,'Distractorul inversează stadiul clinic al terapiilor antifibrotice și rolul transplantului, contrazicând fraza finală a paragrafului.',['celulele stelate','restitutio ad integrum']),

q(21,['Cel mai bun indicator de laborator al funcției hepatice, asociat cu prognostic nefavorabil sub pragul citat, este:',
 ['ALT de trei ori normalul','Albumina serică <28 g/L','GGT izolat crescută','Feritina <50 µg/L','Sodiul seric >145 mmol/L'],'B',1289,'Ciroza hepatică — Investigații: albumină și prognostic',
 'Identificarea albuminei <28 g/L (și a TP) ca cei mai buni indicatori funcționali, cu pragul de prognostic nefavorabil.',
 ['ALT reflectă necroza, nu este citat ca cel mai bun indicator funcțional.','Textul precizează că albumina și TP sunt cei mai buni indicatori; prognostic nefavorabil dacă albumina este <28 g/L.','GGT nu este folosită astfel în acest paragraf.','Feritina scăzută nu este markerul de prognostic hepatic citat.','Hiponatremia <125 mmol/L, nu hipernatremia, figurează la indicatorii nefavorabili.']],
 8,'Pragul 28 g/L trebuie deosebit de alte cut-off-uri de pe aceeași pagină (creatinină 130, AFP 200).',['<28 g/L','cei mai buni indica']),

q(22,['Elastografia (Fibroscan) în ciroză:',
 ['O valoare <7,7 indică absența bolii sau boală ușoară','Intervalul 7,7–9,8 corespunde bolii moderate, iar ≥9,8 bolii severe','Peste 25 kPa, hipertensiunea portală este foarte probabilă','Biopsia rămâne primul pas de rutină, elastografia neavând rol în evitarea ei','Valorile sub 5 kPa definesc ciroza constituită cu hipertensiune portală certă'],'ABC',1290,'Ciroza hepatică — Elastografie: praguri de fibroză și de hipertensiune portală',
 'Memorarea cut-off-urilor 7,7 / 9,8 pentru severitatea fibrozei și 25 kPa pentru hipertensiunea portală.',
 ['Textul dă <7,7 ca absență sau boală ușoară.','7,7-9,8 moderată, ≥9,8 severă.','>25 kPa face hipertensiunea portală foarte probabilă.','Elastografia este din ce în ce mai folosită pentru a evita biopsia.','Ciroza/HTP se asociază valorilor înalte (25 kPa), nu celor sub 5.']],
 8,'Trei praguri numerice învecinate (7,7, 9,8, 25) sunt concepute să fie permutate.',['7,7-9,8','>25 kPa'],[1289]),

q(23,['Screeningul și măsurile generale la cirotic:',
 ['α-fetoproteina serică >200 ng/ml este puternic sugestivă pentru HCC','Ecografia la 6 luni este metoda de screening pentru depistarea precoce a HCC','Aportul de sodiu se reduce (≤2 g sodiu pe zi); se evită alcoolul, aspirina și AINS','Screeningul HCC se face anual cu RMN, AFP-ul neavând nicio valoare','Restricția de sodiu este inutilă, pacienții cirotici având nevoie de 6 g sare zilnic'],'ABC',1290,'Ciroza hepatică — Screening HCC și măsuri igienice',
 'Reținerea pragului AFP >200 ng/ml, a ecografiei la 6 luni și a țintei de sodiu ≤2 g/zi.',
 ['Textul consideră AFP >200 ng/ml puternic sugestivă pentru HCC.','Screeningul ecografic la 6 luni este indicat pentru HCC precoce.','Sodiul ≤2 g/zi și evitarea alcoolului, aspirinei și AINS sunt recomandate.','Metoda citată este ecografia la 6 luni, iar AFP are valoare peste 200 ng/ml.','Restricția de sodiu este explicită, nu un aport de 6 g.']],
 8,'Intervalul de screening (6 luni versus anual) și pragul AFP 200 sunt ușor de deplasat.',['>200 ng/ml','6 luni'],[1289]),

q(24,['Indicatorii de prognostic nefavorabil în ciroză (Cadranul 34.15) includ:',
 ['Albumină <28 g/L și sodiu seric <125 mmol/L','Timp de protrombină prelungit >6 secunde peste normal','Creatinină >130 µmol/L','Ascită, hemoragie variceală, ficat mic și hipotensiune persistentă','Sodiu seric >145 mmol/L și albumină >40 g/L, ca markeri de hipervolemie'],'ABCD',1291,'Ciroza hepatică — Cadranul 34.15: prognostic nefavorabil',
 'Aplicarea pragurilor biochimice (albumină 28, Na 125, TP >6 s, creatinină 130) și a semnelor clinice de prognostic prost.',
 ['Cadranul listează albumina <28 g/L și Na <125 mmol/L.','TP >6 s peste normal este criteriu.','Creatinina >130 µmol/L este listată.','Ascita, hemoragia variceală, ficatul mic și hipotensiunea persistentă figurează la semnele clinice.','Valorile „înalte” de Na și albumină sunt opusul criteriilor de prognostic nefavorabil.']],
 8,'Toate pragurile numerice au un „invers” plauzibil (hipernatremie, albumină mare) ca distractor unic.',['<125 mmol/L','>130 µmol/l']),

q(25,['Scorul MELD (Cadranul 34.17):',
 ['Se bazează pe bilirubină, creatinină și INR (cu un termen constant +6,4)','Conversia bilirubinei din µmol/L în mg/dl se face prin împărțire la 17, a creatininei la 88,4','Un scor <10 se asociază cu supraviețuire de 97% la 1 an; scorul 30–40 cu 70% la 1 an','Există un MELD modificat (ex. UKELD) folosit în alocare','MELD înlocuiește complet Child-Pugh, clasele A/B/C nemaifiind citate în prognosticul la 1 și 5 ani'],'ABCD',1291,'Ciroza hepatică — Scorul MELD și UKELD',
 'Reținerea formulei (bilirubină, creatinină, INR), a factorilor de conversie și a supraviețuirii pe benzi de scor.',
 ['Formula din cadran folosește bilirubină, creatinină, INR și +6,4.','Împărțire la 17 (bilirubină) și 88,4 (creatinină).','<10: 97% la 1 an; 30-40: 70% la 1 an.','UKELD este menționat ca MELD modificat.','Child-Pugh rămâne prezentat cu supraviețuiri la 1, 5 și 10 ani; MELD nu îl „șterge”.']],
 8,'Benzile de supraviețuire MELD (97% versus 70%) și factorii 17/88,4 sunt ușor de permutat.',['împarte cu 17','UKELD']),

q(26,['Indicațiile de transplant hepatic, dincolo de contraindicațiile absolute:',
 ['Ciroza în stadiu final (Child C; MELD ≥20; UKELD ≥49) și simptomele debilitante justifică evaluarea','În PBC, bilirubina serică crescută constant >100 µmol/L este un reper','Criteriile Milan pentru HCC: trei leziuni <3 cm sau un nodul solitar <5 cm','Donatorii sub 50 de ani oferă o grefă de calitate superioară; conservarea pe gheață poate ajunge la 20 de ore','Compatibilitatea HLA este cerută ca la transplantul renal, iar donatorii peste 50 de ani sunt sistematic excluși'],'ABCD',1292,'Ciroza hepatică — Transplantul: indicații, Milan, donatorul',
 'Aplicarea pragurilor Child C / MELD 20 / UKELD 49, a bilirubinei 100 în PBC și a criteriilor Milan, plus fereastra de conservare de 20 de ore.',
 ['Textul cere evaluarea la Child C, MELD ≥20, UKELD ≥49 și simptome debilitante.','Bilirubina >100 µmol/L constantă este reper în PBC.','Milan: trei leziuni <3 cm sau un nodul <5 cm.','Donatorii <50 de ani și conservarea până la 20 de ore sunt citate.','Compatibilitatea HLA nu este necesară (banca anterioară); donatorii mai în vârstă (criterii extinse) sunt folosiți, nu excluși sistematic.']],
 8,'Pragurile MELD/UKELD și cele două brațe Milan (3×3 cm versus 1×5 cm) sunt concepute pentru permutare.',['nodul solitar','20 de ore']),

q(27,['După transplantul hepatic, pe lângă cele două tipuri de rejet deja descrise:',
 ['Operația durează aproximativ 8 ore și rareori necesită o transfuzie mare','Supraviețuirea este de ~90% la 1 an și 70–85% la 5 ani','Sepsisul și hemoragia sunt complicații postoperatorii în primele 3 luni','Imunosupresia de obicei combină un calcineurinic cu azatioprină sau micofenolat, plus steroizi','Mortalitatea operatorie este de 50%, iar imunosupresia se oprește la 3 luni'],'ABCD',1292,'Ciroza hepatică — Transplantul: perioperator și supraviețuire',
 'Reținerea duratei (~8 h), a supraviețuirii 90%/70–85% și a ferestrei de 3 luni pentru sepsis/hemoragie.',
 ['Durata de aproximativ 8 ore, cu transfuzie mare rară, este din text.','90% la 1 an și 70-85% la 5 ani.','Sepsisul și hemoragia apar în primele 3 luni.','Combinația calcineurinic ± azatioprină/MMF + steroizi este descrisă.','Imunosupresia este de durată, nu se oprește la 3 luni; mortalitatea 50% nu este cifra operației.']],
 8,'Supraviețuirea 90%/70–85% este ușor de inversat cu o mortalitate operatorie imaginară de 50%.',['aproximativ 8 ore','70-85% la 5 ani']),

q(28,['Hipertensiunea portală și varicele:',
 ['Presiunea portală normală este 5–8 mmHg; peste 10–12 mmHg se deschid colateralele','Aproximativ 90% dintre cirotici dezvoltă varice în 10 ani, dar numai o treime sângeră','Mortalitatea generală prin hemoragie variceală la 6 săptămâni este 15–25%, ajungând la 50% în clasa Child C','Varicele rectale sunt frecvente (~30%) dacă sunt căutate și se deosebesc de hemoroizi','Varicele apar la sub 10% dintre cirotici, iar mortalitatea la 6 săptămâni este sub 2% în Child C'],'ABCD',1293,'Ciroza hepatică — Hipertensiunea portală: praguri și istorie naturală',
 'Fixarea pragului 10–12 mmHg, a riscului 90%/10 ani versus 1/3 sângerări și a mortalității 15–25% (50% în Child C).',
 ['Normal 5-8 mmHg; peste 10-12 mmHg se deschid colateralele.','90% varice în 10 ani, o treime sângeră.','15-25% la 6 săptămâni, 50% în Child C.','Varice rectale ~30%, distincte de hemoroizi.','Cifrele reale sunt 90% și 15-25%/50%, nu 10% și 2%.']],
 8,'Trei procente (90, 30, 15–25) din același paragraf sunt ușor de coborât spre valori „benigne”.',['10-12 mmHg','15-25%']),

q(29,['În hemoragia variceală acută, dincolo de terlipresină și ținta de hemoglobină 80 g/L:',
 ['Între 15% și 20% din sângerări provin din varice gastrice, cu mortalitate până la 40%','Hemostaza endoscopică se realizează la 80–90% dintre pacienți; ideal sub anestezie','Somatostatina 250–500 µg/oră reduce sângerarea și este rezervată contraindicațiilor la terlipresină','Terlipresina se reduce la 1 mg la 4 ore după 48 de ore, dacă este nevoie de un regim până la 5 zile','Somatostatina înlocuiește terlipresina la toți pacienții, având dovezi superioare de reducere a mortalității'],'ABCD',1294,'Ciroza hepatică — Hemoragia variceală: varice gastrice și somatostatină',
 'Completarea managementului acut cu ponderea varicelor gastrice (15–20%, mortalitate 40%) și doza de somatostatină 250–500 µg/oră.',
 ['15-20% din sângerări sunt gastrice, mortalitate până la 40%.','Hemostaza endoscopică 80-90%, preferabil sub anestezie.','Somatostatina 250-500 µg/oră este rezervată contraindicațiilor la terlipresină.','După 48 de ore doza de terlipresină poate scădea la 1 mg la 4 ore, până la 5 zile.','Terlipresina, nu somatostatina, are dovezile de mortalitate; somatostatina este de rezervă.']],
 8,'Doza de somatostatină și ponderea varicelor gastrice completează itemul existent despre terlipresină, fără a-l relua.',['250-500 µg/oră','până la 40%']),

q(30,['Tamponada cu balon și stentul esofagian în sângerarea variceală refractară:',
 ['Balonul se lasă pe loc cel mult 12 ore și se extrage în laboratorul de endoscopie imediat înaintea endoscopiei','Stentul metalic acoperit autoexpandabil (Danis) se îndepărtează la 7 zile după introducere','Hemostaza cu balon se realizează în până la 90% din cazuri, dar cu complicații grave (pneumonie de aspirație, ruptură, ulcerație)','Sucralfatul 1 g de patru ori pe zi poate reduce ulcerațiile după bandare','Balonul se menține 7 zile, iar stentul Danis se lasă 12 ore, rapoartele fiind inversate'],'ABCD',1295,'Ciroza hepatică — Tamponadă cu balon și stent Danis',
 'Diferențierea ferestrelor 12 ore (balon) versus 7 zile (stent Danis) și recunoașterea complicațiilor tamponadei.',
 ['Textul limitează balonul la cel mult 12 ore, extras imediat înaintea endoscopiei.','Stentul Danis se îndepărtează la 7 zile.','Hemostază până la 90%, cu complicații grave listate.','Sucralfat 1 g ×4/zi poate reduce ulcerațiile după bandare.','Ferestrele sunt inversate în distractor: 12 ore balon, 7 zile stent.']],
 8,'Cele două dispozitive diferă doar prin durată (12 ore versus 7 zile), o capcană de permutare.',['cel mult 12 ore','Danis'],[1294]),

q(31,['TIPS și profilaxia primară a sângerării variceale:',
 ['TIPS reduce presiunea sinusoidală; un studiu pe 671 de pacienți a validat beneficiul de supraviețuire al TIPS „preventiv” în 72 de ore, mai ales la Child C','Fără profilaxie, riscul de resângerare este 60–80% la 2 ani, cu mortalitate ~20% pe episod','Beta-blocantele neselective reduc sângerarea gastrointestinală superioară cu aproximativ 50%, pot crește supraviețuirea și sunt cost-eficiente','Ligaturile se repetă la 2 săptămâni; 30–40% din varice se refac pe an, cu control la 1–3 luni apoi la 6–12 luni','TIPS crește presiunea portală și este rezervat Child A, fără beneficiu de supraviețuire'],'ABCD',1295,'Ciroza hepatică — TIPS preventiv și profilaxia primară',
 'Reținerea ferestrei de 72 de ore pentru TIPS preventiv, a riscului 60–80%/2 ani fără profilaxie și a reducerii cu 50% a sângerării prin NSBB.',
 ['TIPS preventiv în 72 de ore, cu beneficiu mai ales la Child C, este citat.','60-80% resângerare la 2 ani, ~20% mortalitate pe episod.','NSBB reduc sângerarea superioară cu ~50% și pot crește supraviețuirea.','Intervalele 2 săptămâni, 30-40% recurență/an, control 1-3 luni apoi 6-12 luni.','TIPS scade presiunea, nu o crește; beneficiul de supraviețuire este descris la Child C.']],
 8,'Fereastra 72 de ore și reducerea de 50% a sângerării prin NSBB sunt ușor de atribuit greșit Child A sau TIPS ca măsură care crește presiunea.',['72','60-80% la 2 ani']),

q(32,['Fiziopatologia ascitei cirotice, dincolo de dozele de spironolactonă:',
 ['Excreția urinară de sodiu depășește rar 5 mmol/24 h, iar pierderea extrarenală este ~30 mmol/24 h','Un aport obișnuit de 120–200 mmol Na duce la un bilanț pozitiv de ~90–170 mmol/24 h (600–1300 ml lichid)','SAAG >11 g/L sugerează hipertensiune portală; SAAG <11 g/L se asociază afecțiunilor peritoneale (neoplazie)','Un număr de neutrofile >250/mm³ în ascită definește pragul de PBS','SAAG >11 g/L exclude hipertensiunea portală și impune laparotomie imediată'],'ABCD',1296,'Ciroza hepatică — Ascita: bilanțul sodiului și SAAG',
 'Aplicarea cifrelor de bilanț Na (5 / 30 / 90–170 mmol) și a pragurilor SAAG 11 g/L și neutrofile 250/mm³.',
 ['Na urinar rar >5 mmol/24 h; pierdere extrarenală ~30 mmol.','Aport 120-200 mmol → bilanț +90-170 mmol (600-1300 ml).','SAAG >11 g/L = HTP; <11 g/L = peritoneal/neoplazie.','Neutrofile >250/mm³ este pragul citat.','SAAG >11 g/L susține HTP, nu o exclude.']],
 8,'Pragurile 5 mmol, 11 g/L și 250/mm³ coexistă pe aceeași pagină și sunt ușor de inversat.',['>11 g/L','>250/mm3']),

q(33,['Paracenteza în ascita tensionată sau refractară:',
 ['Complicațiile principale sunt hipovolemia și disfuncția renală (disfuncție circulatorie post-paracenteză), mai ales peste 5 L evacuați','Se perfuzionează albumină 8 g/L de lichid ascitic eliminat','În practică se pot evacua până la 20 L în 4–6 ore','TIPS poate trata ascita refractară, aceasta fiind o indicație de transplant','Albumina se evită, iar evacuarea a 20 L fără substituție este preferată pentru a scurta spitalizarea'],'ABCD',1297,'Ciroza hepatică — Paracenteza de volum mare',
 'Reținerea pragului >5 L, a dozei de albumină 8 g/L și a volumului practic de până la 20 L în 4–6 ore.',
 ['Disfuncția circulatorie post-paracenteză este mai probabilă peste 5 L.','Albumina 8 g/L lichid eliminat este schema.','Până la 20 L în 4-6 ore este practica citată.','TIPS pentru refractară; indicație de transplant.','Albumina este tocmai măsura care limitează hipovolemia; evitarea ei este opusul recomandării.']],
 8,'Doza 8 g/L și pragul 5 L versus volumul 20 L sunt ușor de permutat într-o schemă „fără albumină”.',['8 g/L','mai mult de 5 litri'],[1296]),

q(34,['Profilaxia peritonitei bacteriene spontane, dincolo de oprirea beta-blocantului:',
 ['Mortalitatea unui episod este 10–15%','Profilaxia primară se consideră la pacienții cu proteine în ascită sub 10 g/L sau cu boală hepatică avansată','Norfloxacina 400 mg/zi este exemplul de prevenție secundară care prelungește supraviețuirea','Recurența este frecventă (70% într-un an)','Profilaxia primară se adresează doar ascitei cu proteine peste 30 g/L, recurența fiind rară sub 5%'],'ABCD',1297,'Ciroza hepatică — PBS: mortalitate și profilaxie primară versus secundară',
 'Completarea itemului existent cu mortalitatea 10–15%, pragul de proteine <10 g/L pentru profilaxia primară și norfloxacina 400 mg.',
 ['Mortalitatea 10-15% este citată.','Profilaxia primară: proteine <10 g/L sau boală avansată.','Norfloxacin 400 mg/zi prelungește supraviețuirea în prevenția secundară.','Recurența 70% într-un an.','Pragul este <10 g/L, nu >30 g/L; recurența nu este rară.']],
 8,'Pragul proteic <10 g/L versus >30 g/L și recurența 70% versus 5% sunt capcane de ordin de mărime.',['sub 10 g/L','norfloxacin 400 mg']),

q(35,['Encefalopatia portosistemică, diagnostice adjuvante:',
 ['EEG arată scăderea frecvenței undelor α (8–13 Hz) la 1,5–3 Hz, modificări care preced coma','Potențialele evocate vizuale pot detecta encefalopatia subclinică','Factorii precipitanți includ infecția, hemoragia, diureticele, TIPS și șunturile chirurgicale','Lactitolul 30 g zilnic este comparabil ca eficacitate cu lactuloza','EEG cu unde de 8–13 Hz care se accelerează la 20 Hz este markerul de comă hepatică, iar proteinele se restricționează peste 2 săptămâni'],'ABCD',1297,'Ciroza hepatică — Encefalopatia: EEG și precipitanți',
 'Reținerea încetinirii EEG la 1,5–3 Hz înaintea comei și a listei de precipitanți (inclusiv TIPS), plus echivalența lactitol 30 g.',
 ['Scăderea de la 8-13 Hz la 1,5-3 Hz precede coma.','PEV detectează forma subclinică.','Cadranul 34.22 include infecție, hemoragie, diuretice, TIPS.','Lactitol 30 g zilnic este comparabil cu lactuloza.','Coma se asociază încetinirii, nu accelerării; proteinele nu se restricționează peste 48 de ore.']],
 8,'Inversează direcția modificării EEG (încetinire versus accelerare) și durata restricției proteice.',['1,5-3 Hz','Lactilolul'],[1298]),

q(36,['Sindromul hepatorenal și sindromul hepatopulmonar:',
 ['Mecanismul HRS este vasodilatație periferică extremă, cu scăderea volumului efectiv și hipotensiune','Transplantul hepatic este cea mai bună opțiune în HRS; fără el mortalitatea este mare (cifra de ~50% este invocată în context)','Sindromul hepatopulmonar apare la 1–2% dintre pacienții cu ciroză și HTP și poate răspunde la epoprostenol i.v.','Dispozitivele extracorporeale nu sunt disponibile de rutină în ACLF, context înrudit','HRS se tratează de primă intenție prin creșterea dozei de spironolactonă, vasodilatația fiind benefic'],'ABCD',1298,'Ciroza hepatică — Sindromul hepatorenal și hepatopulmonar',
 'Contrastul HRS (vasodilatație, transplant) cu sindromul hepatopulmonar (prevalență 1–2%, epoprostenol).',
 ['Vasodilatația periferică extremă cu hipotensiune este mecanismul.','Transplantul este cea mai bună opțiune.','1-2% dintre ciroticii cu HTP; epoprostenol i.v. este menționat.','Niciun dispozitiv extracorporeal de rutină (pasaj ACLF înrudit).','Intensificarea diureticelor precipită HRS/encefalopatia; nu este tratamentul.']],
 8,'Distractorul propune intensificarea diureticelor, un precipitant, în locul transplantului.',['1-2%','epoprostenol'],[1291]),

q(37,['Colangita biliară primitivă — epidemiologie și autoimunitate:',
 ['Femeile de 40–50 de ani reprezintă 90% dintre pacienți; prevalența ~7,5/100.000, cu creștere 1–6% la rudele de gradul întâi','AMA sunt prezenți la aproape toți; antigenul M2 este specific, cu cinci antigene M2','Anti-gp210 sunt prezenți la 50% și se corelează cu progresia spre insuficiență hepatică','Titrul AMA nu se leagă de tabloul clinic sau histologic','PBC predomină la bărbații tineri, AMA fiind negativi la peste 90%, diagnosticul bazându-se pe pANCA'],'ABCD',1298,'Ciroza hepatică — PBC: epidemiologie și serologie',
 'Fixarea predilecției feminine (90%, 40–50 ani), a specificității M2 și a valorii prognostice a anti-gp210 (50%).',
 ['90% femei 40-50 ani; 7,5/100.000; 1-6% la rude.','AMA la aproape toți, M2 specific, cinci antigene M2.','Anti-gp210 la 50%, corelat cu progresia.','Titrul AMA nu se leagă de clinică/histologie.','Predominanța este feminină; pANCA este al PSC, nu al PBC.']],
 8,'Inversează sexul și serologia (AMA versus pANCA) între PBC și PSC, două colangiopatii consecutive în text.',['90% dintre','anti-gp210'],[1299]),

q(38,['Investigațiile și tratamentul în PBC:',
 ['AMA ELISA în titru >1:160 la peste 95% dintre pacienți; M2 este 98% specific','Fosfataza alcalină crescută este adesea singura anomalie biochimică; colesterolul și IgM pot fi mari','Biopsia arată infiltrat portal limfo-plasmocitar; granuloame în ~40%; modificările precoce sunt în zona 1','Acidul ursodeoxicolic 10–15 mg/kg îmbunătățește bilirubina și aminotransferazele','PBC se asociază cu un risc cardiovascular foarte crescut din cauza hiperlipidemiei, iar UDCA este inactiv pe bilirubină'],'ABCD',1299,'Ciroza hepatică — PBC: laborator, histologie și UDCA',
 'Reținerea titrului AMA >1:160, a specificității M2 98%, a granuloamelor 40% în zona 1 și a dozei UDCA 10–15 mg/kg.',
 ['ELISA >1:160 la >95%; M2 98% specific.','FA crescută adesea izolat; colesterol și IgM mari.','Infiltrat limfo-plasmocitar, granuloame ~40%, zona 1.','UDCA 10-15 mg/kg ameliorează bilirubina și aminotransferazele.','Textul precizează că, în ciuda lipidelor crescute, PBC nu se asociază cu risc CV crescut.']],
 8,'Capcana este disocierea hiperlipidemie–risc CV, contraintuitivă, plus doza UDCA ușor de înjumătățit.',['98% specific','10-15 mg/kg']),

q(39,['Prognosticul PBC și momentul transplantului:',
 ['Pacienții care se confruntă doar cu prurit pot supraviețui peste 20 de ani','Cei cu icter evoluează prin insuficiență hepatică sau sângerare variceală în termen de 5 ani','Transplantul se consideră când bilirubina serică este persistent peste 100 µmol/L','Keratoconjunctivita sicca apare în 70% din cazuri','Pruritul izolat impune transplant în primele 6 luni, supraviețuirea fără grefă fiind sub 2 ani'],'ABCD',1299,'Ciroza hepatică — PBC: evoluție naturală și pragul bilirubinei',
 'Contrastul prurit izolat (>20 ani) versus icter (decompensare în 5 ani) și pragul de bilirubină 100 µmol/L pentru transplant.',
 ['Doar prurit: >20 de ani.','Icter: insuficiență sau varice în 5 ani.','Bilirubină persistentă >100 µmol/L.','Sicca în 70%.','Pruritul izolat are prognostic lung, nu indicație urgentă de transplant.']],
 8,'Cele două orizonturi (20 de ani versus 5 ani) sunt ușor de inversat, iar pragul 100 µmol/L este comun PBC și indicației de transplant.',['mai mult de 20 de ani','peste 100']),

q(40,['Colangita sclerozantă primitivă:',
 ['La 75% se asociază cu o BII, de obicei colită ulcerativă','70% dintre pacienți sunt bărbați, vârsta medie de debut ~40 de ani','pANCA este prezent în 60% din cazuri; susceptibilitatea se asociază haplotipului HLA-A1-B8-DR3','MRCP/colangiograma arată neregularități de calibru intra- și extrahepatice','PSC predomină la femei de 40–50 de ani, cu AMA M2 pozitiv, identic PBC'],'ABCD',1299,'Ciroza hepatică — PSC: asocierea cu BII, sex și pANCA',
 'Fixarea triadei 75% BII / 70% bărbați / 60% pANCA și deosebirea de PBC (femei, AMA).',
 ['75% au BII, de obicei CU.','70% bărbați, debut ~40 de ani.','pANCA 60%; HLA-A1-B8-DR3.','Neregularități de calibru intra- și extrahepatice.','Descrierea distractorului este a PBC, nu a PSC.']],
 8,'Permutează sexul și autoanticorpul (AMA versus pANCA) între PBC și PSC.',['75% dintre pacienţi','HLA-A1-B8-DR3']),

q(41,['Evoluția și tratamentul PSC:',
 ['Este lent progresivă spre ciroză; colangiocarcinomul apare în până la 15% din cazuri','UDCA în doze mari (30 mg/kg) nu are dovezi de beneficiu','Stricturile dominante pot fi tratate endoscopic (dilatare cu balon și stent temporar)','PSC secundară se vede în HIV cu Cryptosporidium și după injurii biliare','UDCA 30 mg/kg reduce mortalitatea și înlocuiește transplantul ca tratament curativ'],'ABCD',1300,'Ciroza hepatică — PSC: colangiocarcinom și endoscopie',
 'Reținerea riscului de colangiocarcinom (~15%), a lipsei de beneficiu a UDCA în doză mare și a opțiunii endoscopice pe stricturi.',
 ['Lent progresivă; colangiocarcinom până la 15%.','Dozele mari 30 mg/kg fără beneficiu demonstrat.','Dilatare cu balon și stent temporar.','PSC secundară: HIV/Cryptosporidium și trauma biliară.','UDCA în doză mare nu are dovezi de beneficiu și nu înlocuiește transplantul.']],
 8,'Doza 30 mg/kg, inactivă în PSC, este ușor de confudat cu UDCA 10–15 mg/kg utilă în PBC.',['30 mg/kg','până la 15%']),

q(42,['Hemocromatoza ereditară — genetică:',
 ['Tipul 1 (HFE, mutația C282Y) este cel mai frecvent și se află pe cromozomul 6','Tipurile 1, 2 și 3 se transmit autozomal recesiv; tipul 4 (ferroportină, SLC40A1) are exces de ferroportină','85–90% dintre pacienți sunt homozigoți C282Y; H63D apare la ~25% din populație','Prevalența homozigoților caucazieni este 1 din 400, cu heterozigoți ~1 din 10','Tipul 1 se transmite autozomal dominant, C282Y fiind rară la caucazieni (<1%)'],'ABCD',1300,'Ciroza hepatică — Hemocromatoza: clasificarea genetică HFE',
 'Maparea C282Y/cromozom 6, a transmiterii AR versus tipul 4 și a prevalenței 1/400 versus 1/10.',
 ['HFE tip 1, C282Y, cromozomul 6.','Tipurile 1-3 AR; tipul 4 ferroportină.','85-90% homozigoți C282Y; H63D la 25%.','1 din 400 homozigoți, ~1 din 10 heterozigoți.','Tipul 1 este AR și frecvent la caucazieni, nu dominant și rar.']],
 8,'Inversează modelul de transmitere și prevalența (1/400 versus <1%), plus confuzia cu tipul 4 dominant-like.',['C282Y','cromozomul 6']),

q(43,['Diagnosticul hemocromatozei:',
 ['Fierul seric este crescut (>30 µmol/L) în 90% din cazuri, cu saturație a transferinei >45%','Feritina este de obicei >500 µg/L','Concentrația hepatică de fier >180 µmol/g greutate uscată indică supraîncărcare','RMN T2 detectează supraîncărcările relevante (>60 µmol/g ficat)','Un fier seric scăzut cu saturație <15% confirmă diagnosticul de HE tip 1'],'ABCD',1301,'Ciroza hepatică — Hemocromatoza: laborator, biopsie și RMN',
 'Aplicarea pragurilor fier >30, saturație >45%, feritină >500, fier hepatic >180 și pragul RMN >60 µmol/g.',
 ['Fier >30 µmol/L în 90%, saturație >45%.','Feritina de obicei >500 µg/L.','>180 µmol/g greutate uscată.','RMN T2 pentru >60 µmol/g.','Diagnosticul cere supraîncărcare, nu deficit de fier.']],
 8,'Pragurile 45%, 180 și 60 µmol/g sunt permutabile; distractorul descrie un profil de deficit, nu de supraîncărcare.',['>45%','>180']),

q(44,['Identificați afirmația corectă referitoare la flebotomia din hemocromatoză:',
 ['Se obține prin emisie de 500 ml de două ori pe săptămână până la 2 ani, adică ~160 de unități × 250 mg fier ≈ 40 g eliminate','Se fac 50 ml o dată pe an, suficiente pentru a elimina 3–4 g, stocul normal','Deferoxamina orală înlocuiește flebotomia la toți homozigoții C282Y','Flebotomia este contraindicată, fierul hepatic scăzând spontan după 40 de ani','Se vizează un stoc de 20–40 g de fier, identic persoanei sănătoase'],'A',1301,'Ciroza hepatică — Hemocromatoza: tratamentul prin flebotomie',
 'Calculul schemei 500 ml ×2/săptămână × până la 2 ani (~40 g fier), contrastat cu stocul normal de 3–4 g.',
 ['Textul descrie 500 ml de două ori pe săptămână până la 2 ani, 160 de unități a 250 mg = 40 g.','Stocul normal este 3-4 g, nu ținta de eliminare anuală.','Flebotomia, nu chelarea orală de rutină, este metoda descrisă.','Nu este contraindicată; este tratamentul.','20-40 g este stocul bolnavului înainte de tratament, nu al sănătosului.']],
 8,'Aritmetica 160×250 mg=40 g versus stocul normal 3–4 g este capcana cantitativă a paginii.',['500 ml','40 g fier']),

q(45,['Screeningul familiei în hemocromatoză:',
 ['Toate rudele de gradul întâi trebuie examinate pentru a detecta boala precoce, asimptomatică','Analiza mutației HFE se face împreună cu saturația transferinei','Aproximativ 30% dintre persoanele cu ciroză prin HE vor dezvolta carcinom hepatocelular','Screeningul se limitează la simptomaticii de peste 70 de ani, genetica fiind inutilă','HCC nu apare în ciroza prin hemocromatoză, spre deosebire de VHC'],'ABC',1302,'Ciroza hepatică — Hemocromatoza: screening familial și HCC',
 'Indicarea screeningului rudelor de gradul I cu HFE plus saturație și a riscului de HCC (~30%) după ciroză.',
 ['Toate rudele de gradul întâi trebuie examinate în stadiul asimptomatic.','Mutația HFE se asociază măsurării saturației.','~30% dintre ciroticii cu HE dezvoltă HCC.','Screeningul vizează și asimptomaticii, nu doar vârstnicii simptomatici.','HCC este o complicație citată a cirozei prin HE.']],
 8,'Procentul 30% HCC este ușor de negat, iar distractorul amână screeningul până la vârste tardive.',['gradul întâi','mutaţiei HFE'],[1301]),

q(46,['Boala Wilson, dincolo de cromozomul 13 și de pragul hepatic de cupru:',
 ['Mutația cea mai frecventă la caucazieni este H1069Q, prezentă la ~50%; este rară în India și Asia','Cupruria este de obicei 100–1000 µg/24 h (normal <40 µg)','Trientina 1,2–1,8 g/zi și acetatul de zinc 150 mg/zi sunt alternative la penicilamină','Penicilamina 1–1,5 g/zi este pe viață; reacții adverse grave în ~10%','Penicilamina se oprește după 2–3 luni, cupruria normală făcând chelarea inutilă'],'ABCD',1302,'Ciroza hepatică — Boala Wilson: mutația H1069Q, cuprurie și alternative',
 'Completarea itemului genetic existent cu H1069Q (~50% caucazieni), intervalul de cuprurie și alternativele trientină/zinc.',
 ['H1069Q la ~50% dintre caucazieni, rară în India/Asia.','Cuprurie 100-1000 µg/24 h, normal <40 µg.','Trientina 1,2-1,8 g/zi și zinc 150 mg/zi.','Penicilamină 1-1,5 g/zi pe viață, RA grave ~10%.','Doza se reduce după 2-3 ani, tratamentul nu se oprește.']],
 8,'Capcana clasică rămâne oprirea versus reducerea penicilaminei; se adaugă mutația H1069Q și intervalul de cuprurie.',['H1069Q','1,2-1,8 g/zi']),

q(47,['Deficitul de α1-antitripsină cu afectare hepatică:',
 ['Gena este pe cromozomul 14; homozigotul Z este PiZZ, heterozigoții PiMZ și PiSZ','α1-AT serică scade la 10% din normal în PiZZ și la 60% din normal în varianta S','Globulele sunt PAS-negative și sensibile la diastază, ca glicogenul','PiZZ are α1-AT serică crescută de zece ori','Ciroza apare la toți homozigoții în primul an de viață, transplantul fiind inutil'],'AB',1302,'Ciroza hepatică — Deficitul de α1-antitripsină: genetică și histologie',
 'Corelarea locusului (cromozom 14, PiZZ) cu nivelurile serice 10%/60% și cu globulele PAS-pozitive rezistente la diastază.',
 ['Gena este pe cromozomul 14; PiZZ, PiMZ și PiSZ sunt descrise.','Scădere la 10% din normal în PiZZ și 60% în varianta S.','Textul descrie globule rezistente la diastază, PAS-pozitive, nu invers.','Nivelul este scăzut, nu crescut.','Doar 10-15% dintre adulți dezvoltă ciroză, de obicei după 50 de ani; transplantul se evaluează la decompensare.']],
 8,'Inversează direcția α1-AT serice (scăzut versus crescut) și negativitatea PAS, două detalii histochimice din aceeași frază.',['cromozomul 14','PiZZ'],[1303]),

q(48,['Selectați enunțurile adevărate despre evoluția adultului cu PiZZ:',
 ['Aproximativ 10–15% dezvoltă ciroză, de obicei peste 50 de ani','Aproximativ 75% au probleme respiratorii, iar ~5% mor prin boală hepatică','Augmentarea cu α1-AT intravenos vindecă ciroza constituită în peste 90% din cazuri','Ciroza este universală la homozigoți încă din copilărie, fără afectare pulmonară','Fumatul este încurajat, transplantul fiind contraindicat în PiZZ'],'AB',1302,'Ciroza hepatică — Deficitul de α1-antitripsină: prognostic adult',
 'Reținerea cotelor 10–15% ciroză, 75% afectare respiratorie și 5% deces hepatic, plus absența unui tratament etiologic.',
 ['10-15% ciroză, de obicei peste 50 de ani.','75% probleme respiratorii; ~5% mor prin boală hepatică.','Textul nu descrie vindecarea cirozei prin augmentare i.v.; nu există tratament al cauzei.','Ciroza nu este universală; afectarea pulmonară predomină.','Fumatul trebuie oprit, iar decompensațiile se evaluează pentru transplant.']],
 8,'Cotele 10–15%, 75% și 5% sunt ușor de permutat, iar distractorul transformă o boală fără tratament etiologic într-o vindecare.',['10-15%','75% vor avea'],[1303]),

q(49,['Boala hepatică alcoolică — mecanisme:',
 ['Etanolul crește raportul NADH/NAD, sporind sinteza de acizi grași și scăzând oxidarea lor, cu acumulare de gliceride','Doar 10–20% dintre persoanele cu consum excesiv dezvoltă ciroză, recunoscându-se o predispoziție genetică','Infiltrarea cu neutrofile, atrasă de IL-8, este o caracteristică a hepatitei alcoolice','MEOS indus de alcool poate potența toxicitatea metaboliților (ex. paracetamol)','Ciroza alcoolică apare la peste 90% dintre băutori, fără componentă genetică'],'ABCD',1303,'Boala hepatică alcoolică — Redox, IL-8 și MEOS',
 'Corelarea redox NADH/NAD, a cotei 10–20% care progresează și a infiltratului neutrofilic IL-8, plus interacțiunea MEOS–paracetamol.',
 ['Creșterea NADH/NAD duce la sinteză crescută și oxidare scăzută a acizilor grași.','Doar 10-20% dezvoltă ciroză, cu predispoziție genetică.','IL-8 atrage neutrofilele, caracteristice hepatitei alcoolice.','MEOS induce metabolism microsomal și potențează paracetamolul.','Cota reală este 10-20%, nu peste 90%.']],
 8,'Cota 10–20% versus „aproape toți băutorii” este capcana epidemiologică a capitolului.',['10-20%','IL-8']),

q(50,['Precizați enunțul corect privind morfologia ficatului gras alcoolic:',
 ['Metabolizarea alcoolului produce grăsimi în ficat, în principal în zona 3','Steatoza predomină în zona 1, identic PBC precoce','Corpii Mallory sunt absenți în hepatita alcoolică, fiind specifici PBC','Neutrofilele lipsesc, infiltratul fiind strict limfocitar de interfață','Steatoza alcoolică nu se vede histologie, diagnosticul fiind doar serologic'],'A',1303,'Boala hepatică alcoolică — Steatoza de zonă 3',
 'Localizarea steatozei alcoolice în zona 3, distinctă de leziunile de zonă 1 din PBC.',
 ['Textul plasează încărcarea grasă în principal în zona 3.','Zona 1 este a modificărilor precoce din PBC, nu a steatozei alcoolice.','Hepatita alcoolică asociază infiltrat polimorfonuclear și necroză, tot în zona 3; corpii hialini alcoolici sunt din spectrul bolii, nu absenți.','Infiltratul caracteristic este cu neutrofile, nu strict limfocitar.','Steatoza este demonstrată histologic (figura 34.29).']],
 8,'Confuzia zonă 1 (PBC) versus zonă 3 (alcool) este firul roșu al ultimelor pagini de capitol.',['zona 3','Ficatul gras']),

q(51,['Un bărbat de 54 de ani, consumator cronic de alcool, are transaminaze moderate, leucocitoză și durere în hipocondrul drept. Hepatita alcoolică se caracterizează prin:',
 ['Infiltrat cu leucocite polimorfonucleare și necroză hepatocitară, în principal în zona 3','Predispoziție genetică, de vreme ce numai 10–20% dintre marii băutori fac ciroză','TNF-α din celulele Kupffer eliberează specii reactive de oxigen, cu leziuni și fibroză','Infiltrat portal strict plasmocitar de zonă 1, cu AMA M2 pozitiv, ca în PBC','Absența oricărei necroze, leziunea fiind doar macroveziculară de zonă 1'],'ABC',1303,'Boala hepatică alcoolică — Hepatita alcoolică',
 'Recunoașterea infiltratului neutrofilic de zonă 3 și a axei Kupffer–TNF-α, distincte de histologia PBC.',
 ['Textul descrie infiltrat polimorfonuclear și necroză în principal în zona 3.','Cota 10-20% și predispoziția genetică sunt reafirmate.','TNF-α din Kupffer, cu ROS, duce la leziuni și fibroză.','Descrierea este a PBC (zonă 1, plasmocite, AMA), nu a hepatitei alcoolice.','Necroza centrolobulară/zona 3 este tipică, nu absentă.']],
 8,'Vigneta împinge spre PBC (durere, FA), dar histologia și IL-8/neutrofilele definesc hepatita alcoolică.',['infiltrat cu leucocite','zona 3']),

q(52,['Cauze neobișnuite de hepatită cronică și de afectare parenchimatoasă acută, alături de virusuri, includ:',
 ['Medicamente (paracetamol în forma acută; metildopa, izoniazid, ketoconazol, nitrofurantoin în forma cronică)','Toxice precum Amanita phalloides și tetraclorura de carbon','Boala Wilson, atât ca hepatită acută cât și cronică/ereditară','Insuficiența circulatorie și aflatoxina, printre cauzele de afectare acută','Cauza unică de hepatită acută este VHC, celelalte agenți fiind eliminați din clasificare'],'ABCD',1275,'Hepatita — Cauze acute și cronice non-virale',
 'Recunoașterea listei din Fig. 34.11 și Cadranul 34.6 (paracetamol, Amanita, Wilson, insuficiență circulatorie).',
 ['Paracetamolul figurează la cauzele acute, iar metildopa/izoniazid/ketoconazol/nitrofurantoin la cronice.','Amanita phalloides și tetraclorura de carbon sunt listate.','Wilson apare și la hepatita acută, și la cauzele ereditare cronice.','Insuficiența circulatorie și aflatoxina sunt în figura cauzelor acute.','Figura și cadranul enumeră numeroși agenți, nu un singur virus.']],
 8,'Distractorul reduce un tabel etiologic bogat la un singur virus, ignorând toxicele și Wilson din aceeași figură.',['Amanita phalloides','Paracetamol']),
];

