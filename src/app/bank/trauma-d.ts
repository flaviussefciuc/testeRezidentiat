import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-57;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('trauma',9,pdfOffset,`trauma-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const TRAUMA_D=[
q(76,['ATLS, ca standard de aur al îngrijirii inițiale, ghidează prioritizarea prin:',
 ['Evaluare primară','Resuscitare','Evaluare secundară și îngrijire definitivă','Tomografie de principiu înaintea oricărei manevre ABCDE','Amânarea tratamentului leziunilor identificate până la încheierea întregului algoritm'],'ABC',87,'Evaluarea inițială — ATLS',
 'Reținerea celor patru etape ATLS, față de inversarea regulii că leziunea de la fiecare pas se tratează imediat.',
 ['Cele patru elemente sunt enumerate explicit.','Resuscitarea este etapa a doua a protocolului.','Evaluarea secundară și îngrijirea definitivă încheie lista.','CT-ul este adjuvant la stabil, nu precondiție a ABCDE.','Leziunile de la fiecare pas se tratează înainte de a trece la următorul.']],
 8,'Inversează regula ATLS de tratament imediat pe pas, o capcană clasică de ordine.',['standardul de aur','evaluarea primară']),

q(77,['Cricotiroidotomia, când glota nu poate fi intubată oral, se caracterizează tehnic prin:',
 ['După deschiderea membranei cricotiroidiene se introduce un tub de 6 French sau mai mic direct în trahee','Cricotiroidotomia cu ac este mai rapidă decât cea deschisă și folosește un cateter 16 sau 18 G prin membrană','Incizia transversală de 2 cm trece prin piele, subcutanat și membrană; mânerul bisturiului se rotește la 90° pentru a facilita inserția unui tub endotraheal mărimea 6','Tubul de 36 French, identic hemotoraxului, este calibrul de elecție al membranei cricotiroidiene','Acest abord este preferat dispozitivelor nazofaringiene în fracturile faciale, fără a încerca intubația orotraheală'],'ABC',88,'Căile aeriene — Cricotiroidotomie',
 'Maparea calibrelor 6 French / 16–18 G și a inciziei de 2 cm cu rotație 90°, distinct de 36 French al tubului toracic.',
 ['Calibrul 6 French sau mai mic este explicit pe pagina de căi aeriene.','Rapiditatea acului și gangele 16/18 sunt citate.','Incizia de 2 cm și rotația 90° sunt din legenda Figurii 9-1.','36 French este tubul de hemotorax, nu de cricotiroidotomie.','Metoda definitivă rămâne intubația orotraheală; chirurgicalul este rezervat eșecului glotei.']],
 8,'Permutează 6 French cu 36 French, două calibre din același capitol.',['6 French','16 sau 18 gange'],[87]),

q(78,['Conform Tabelului 9-1, hemoragia de clasă II la o persoană de 70 kg se caracterizează prin:',
 ['Pierdere 750–1.500 mL (15–30%), frecvență cardiacă >100, tensiune arterială încă normală, presiune a pulsului scăzută, diureză 20–30 mL/oră','Pierdere <750 mL, FC <100, presiune a pulsului normală, diureză >30 mL/oră','Pierdere 1.500–2.000 mL, FC >120, tensiune scăzută, cristaloide și sânge','Pierdere >2.000 mL (>40%), FC >140, diureză neglijabilă','Tensiune scăzută încă din clasa I, fără cristaloide'],'A',88,'Circulația — Hemoragia de clasă II',
 'Diferențierea clasei II (TA normală, presiunea pulsului scăzută) de clasa I (PP normală) și de hipotensiunea claselor III–IV.',
 ['Intervalele de volum, tahicardia >100, TA normală, PP scăzută și diureza 20–30 sunt din tabel.','Aceste praguri definesc clasa I.','Clasa III introduce hipotensiunea și sângele.','Clasa IV are >40% și diureză neglijabilă.','Clasa I–II păstrează TA normală și doar cristaloidele.']],
 8,'Capcană de tabel: TA încă normală în clasa II, ușor de confundat cu hipotensiunea de clasa III.',['750-1.500','Presiunea pulsului']),

q(79,['Resuscitarea circulatorie în trauma hemoragică include:',
 ['Refacerea volumului începe cu cristaloide izotone: Ringer lactat, ser fiziologic sau plasmalyte','În șocul sever se inițiază produse sangvine în raport 1:1:1 (masă eritrocitară, plasmă, plachete)','Hemoragiile externe se controlează temporar prin compresie directă sau garou','Hemoragiile intra-toracice sau intra-abdominale pot necesita pleurostomie, chirurgie sau angioembolizare','Șocul cardiogen și cel neurogen sunt cauzele cele mai comune după traumă, hemoragia fiind rară'],'ABCD',88,'Circulația — Cristaloide și protocol 1:1:1',
 'Aplicarea trio-ului de cristaloide și a raportului 1:1:1, plus ierarhia hemoragie versus alte șocuri.',
 ['Cele trei cristaloide izotone sunt enumerate.','Protocolul de transfuzii masive 1:1:1 este explicit.','Compresia și garoul sunt citate pentru hemoragia externă.','Măsurile invazive pentru sângerarea internă sunt descrise.','Cea mai comună cauză de șoc după traumatisme este hemoragia.']],
 8,'Inversează epidemiologia șocului, punând cardiogenul/neurogenul înaintea hemoragiei.',['Ringer lactat','raport de 1: 1: I']),

q(80,['În examinarea secundară, sonda nazogastrică și evaluarea uretrei se aleg astfel:',
 ['SNG se montează pentru distensia gastrică, exceptând fracturile de bază de craniu sau fracturile faciale extinse','Sângele la meatul penian sau diastaza simfizei pubiene (fractură „carte deschisă”) semnează traumatism uretral','SNG se montează de principiu în fractura de bază de craniu','Foley se trece în orb când există sânge la meat, uretrografia fiind evitată','Cateterul suprapubian este inutil, chiar și după demonstrarea leziunii uretrale'],'AB',89,'Evaluarea secundară — SNG și uretră',
 'Separarea excepțiilor SNG (bază de craniu/față) de semnele uretrale care cer UGR, nu Foley orb.',
 ['Excepțiile SNG sunt explicite.','Cele două semne uretrale sunt citate.','Fractura de bază contraindică SNG.','Sângele pe meat cere UGR, nu Foley orb.','Leziunea uretrală impune cateterizare suprapubiană.']],
 8,'Forțează SNG-ul pe fractura de bază și anulează UGR, două contraindicații din același paragraf.',['sondă nazogastrică','uretrografia retrogradă']),

q(81,['Hemoragia semnificativă din dilacerarea scalpului se explică prin:',
 ['Vasele din țesutul conjunctiv subcutanat nu se pot contracta când sunt lezate, iar mușchii atașați aponevrozei epicraniene se contractă în direcții opuse, menținând plaga și lumenul deschise','Vasoconstricția promptă a arteriolelor galeale oprește sângerarea în câteva minute','Doar arterele meningee, situate între craniu și dura, sângerează la nivelul scalpului','Hipotensiunea din leziunea cerebrală primară este cauza principală a hemoragiei de scalp','Aponevroza epicraniană lipsește, deci dilacerările nu sângerează'],'A',89,'Traumatisme cranio-cerebrale — Scalpul',
 'Recunoașterea dublului mecanism (vase care nu se contractă + tracțiune galeală opusă), distinct de hemoragia meningeală epidurală.',
 ['Cele două mecanisme sunt explicite.','Textul precizează că vasele nu se pot contracta.','Artera meningeală produce hematom epidural, nu hemoragia de scalp.','Hipotensiunea este cauza leziunii cerebrale secundare, nu a sângerării de scalp.','Aponevroza și mușchii atașați sunt tocmai explicația.']],
 8,'Mută sângerarea de scalp pe artera meningeală, confuzia clasică scalp versus epidural.',['aponevrozei epicraniene','ţesutul conjunctiv subcutanat']),

q(82,['Presiunea de perfuzie cerebrală și fluxul sanguin cerebral se caracterizează prin:',
 ['PPC reprezintă diferența dintre presiunea arterială medie și PIC','FSC = PPC/RVC; în condiții normale FSC rămâne constant la variații crescute ale PPC, prin autoreglarea rezistenței vasculare','Autoreglarea este alterată sau abolită după leziuni cerebrale','Când PIC depășește 20 mm Hg, FSC crește și protejează împotriva ischemiei','PPC este egală cu PIC minus PAM, iar FSC crește liniar cu PIC'],'ABC',90,'Fiziologie cerebrală — PPC și FSC',
 'Aplicarea formulei PPC = PAM − PIC și a pragului PIC >20 mmHg, față de inversarea termenilor.',
 ['Definiția PPC este explicită.','Formula FSC și autoreglarea sunt citate.','Abolirea autoreglării post-lezional este descrisă.','PIC >20 mm Hg reduce FSC și poate provoca ischemie, nu îl crește.','Direcția formulei este inversă față de text.']],
 8,'Inversează PAM și PIC în formula PPC, pe un triplet de ecuații ușor de oglindit.',['presiunea de perfuzie cerebrală','autoreglare'],[89]),

q(83,['Secvența midriază ipsilaterală, Babinski contralateral și hipertensiune cu bradicardie în hernierea uncală:',
 ['Compresia nervului oculomotor, cu midriază fixă a pupilei ipsilaterale','Compresia tractului cortico-spinal la peduncul, cu pareză spastică contralaterală și Babinski pozitiv','Compresia trunchiului, cu disfuncția centrilor respiratori bulbari; hipertensiunea și bradicardia semnalează hernierea','Midriază contralaterală și Babinski ipsilateral, inversând lateralitatea','Hiperventilația până la PaCO2 20 mmHg este prima manevră, înaintea oricărei măsuri pe PIC'],'ABC',90,'Hernierea transtentorială',
 'Maparea secvenței nerv III ipsilateral → piramidal contralateral → bulb, față de inversarea lateralității.',
 ['Midriaza ipsilaterală prin oculomotor este explicită.','Pareza contralaterală și Babinski sunt citate.','Compresia bulbară și cuplul HTA–bradicardie sunt descrise.','Lateralitatea este inversă față de text.','Hiperventilația moderată (32–35 mmHg) e rezervată PIC acute, nu PaCO2 20.']],
 8,'Inversează ipsilateral/contralateral la pupilă și Babinski, capcana clasică de herniere.',['nervul oculomotor','Babinski pozitiv']),

q(84,['Mortalitatea asociată unui scor Glasgow de 5 sau 6 după traumatism cranio-cerebral se apropie de:',
 ['65%','97%, identică scorurilor 3 și 4','28%, identică scorurilor 7 și 8','15%, identică asocierii cu leziuni cervicale','3, valoarea minimă a scalei, interpretată ca mortalitate nulă'],'A',90,'Prognostic GCS — Scoruri 5–6',
 'Reținerea treptei 65% pentru GCS 5–6, distinct de 97% (3–4) și 28% (7–8).',
 ['Apropierea de 65% este explicită.','97% ține de scorurile 3 și 4.','28% ține de scorurile 7 și 8.','15% este asocierea TCC–coloană cervicală.','3 este scorul minim, nu o rată de mortalitate.']],
 8,'Permutează 65% cu 97% și 28%, trei trepte de prognostic din același paragraf.',['se apropie de 65%','Scorurile de 3 şi 4']),

q(85,['Măsurile adjuvante din traumatismul cranio-cerebral, dincolo de hiperventilație și soluții hipertone, includ:',
 ['Manitolul înlătură radicalii liberi și este un diuretic osmotic eficient, dar poate cauza hipotensiune la hemoragia ocultă','Convulsiile se tratează prompt cu anticonvulsivante și antiepileptice','Nutriția enterală precoce este un adjuvant important, chiar în leziunile cerebrale izolate','Sedarea reduce riscurile comportamentului agresiv și cererile metabolice cerebrale','Manitolul este evitat tocmai pentru că nu are efect osmotic, iar alimentația se amână luni de zile'],'ABCD',91,'Managementul TCC — Manitol, convulsii, nutriție',
 'Combinarea efectului pe radicali liberi al manitolului cu tratamentul crizelor și enterala precoce.',
 ['Radicalii liberi, efectul osmotic și riscul hipotensiv sunt explicite.','Tratamentul prompt al convulsiilor este citat.','Enterala precoce este menționată în concluzie.','Sedarea este listată între măsurile de limitare a PIC.','Manitolul este descris ca osmotic eficient; enterala precoce este recomandată.']],
 8,'Anulează efectul osmotic al manitolului și amână nutriția, inversând două fraze consecutive.',['radicalii liberii','nutriţia enterală precoce']),

q(86,['Anatomia canalului medular orientează riscul lezional astfel:',
 ['Măduva din regiunea cervicală inferioară și toracică superioară este cea mai susceptibilă, chiar în absența fracturilor','Coloana toracică, stabilizată de coaste, este mai puțin mobilă și are probabilitate redusă de leziuni','Aproximativ 15% din leziunile traumatice ale coloanei se produc la joncțiunea toraco-lombară','La adulți, măduva se termină la S2, deci orice fractură lombară distale produce paraplegie','Tărgile pentru toraco-lombar rămân standard, ulcerul de decubit nefiind o problemă'],'ABC',91,'Coloana — Canal, T-L, con medular',
 'Aplicarea susceptibilității C-inferior/T-superior, a celor 15% T-L și a terminației la L1.',
 ['Susceptibilitatea C-inferior/T-superior este explicită.','Rolul coastelor este citat.','Cifra de aproximativ 15% este menționată.','Măduva se termină la L1; fracturile lombare distale lezează mai puțin măduva.','Tărgile nu mai sunt recomandate din cauza ulcerelor de decubit.']],
 8,'Restaurează tărgile ca „standard”, exact gestul legat de ulcerul de presiune.',['aproximativ 15%','primei ve11ebre lombare']),

q(87,['Sediul predilect al traumatismelor cervicale închise diferă astfel:',
 ['La adulți, a cincea vertebră cervicală','La copiii sub 8 ani, a doua și a treia vertebră cervicală','La adulți C1, la copii C7, invers față de text','Doar joncțiunea cranio-cervicală, indiferent de vârstă','Coloana toracică, mai mobilă decât cea cervicală'],'AB',92,'Coloana cervicală — C5 versus C2–C3',
 'Contrastul adult C5 versus copil <8 ani C2–C3, relevant pentru intubație și frenic.',
 ['Predilecția C5 la adult este explicită.','C2 și C3 la copilul sub 8 ani sunt citate.','Direcția este inversă.','Cervicalul este sediul cel mai frecvent, nu doar C0–C1.','Toracicul este mai puțin mobil, stabilizat de coaste.']],
 8,'Inversează C5 adult cu C2–C3 pediatric, două sedii din aceeași frază.',['a cincea vertebră cervicală','copiii sub 8 ani']),

q(88,['Sindromul medular central, ca leziune incompletă, se caracterizează prin:',
 ['Slăbiciune accentuată la extremitățile superioare comparativ cu cele inferioare','Rezultă din hiperextensie cervicală pe fondul unei îngustări preexistente a canalului','Predomină la tineri după scufundare cu încărcare axială, fără stenoză de canal','Este o leziune completă, cu prognostic identic absenței totale a funcției sub nivel','Brown-Séquard înlocuiește sindromul central la vârstnicul cu osteoartrită'],'AB',92,'Leziuni incomplete — Sindromul medular central',
 'Recunoașterea disocierii brațe > picioare pe hiperextensie și stenoză la vârstnicul cu OA.',
 ['Predominanța slăbiciunii la membrele superioare este explicită.','Mecanismul de hiperextensie plus stenoză este citat.','Scufundarea cu încărcare axială descrie fracturi cervicale la tineri, nu sindromul central.','Leziunea incompletă are prognostic mai bun, nu identic formei complete.','Sindromul central, nu Brown-Séquard, este varianta geriatrică cu OA.']],
 8,'Transformă sindromul central într-o leziune completă, inversând prognosticul.',['slăbiciune accenhiată','osteoartrită']),

q(89,['Conform Tabelului 9-3, dincolo de deltoid și cvadriceps, inervația motorie include:',
 ['Extensia pumnului (extensor radial al carpului) corespunde C6–C7','Extensia cotului (triceps) corespunde C7–C8','Abducția/adducția degetelor (interosoși) corespunde C8–T1','Dorsiflexia gleznei este C5, identică deltoidului','Flexia degetelor este L2–L3, identică adducției coapsei'],'ABC',93,'Inervația segmentară — C6–T1 și L4–S1',
 'Maparea C6–C7 pumn, C7–C8 triceps, C8–T1 interosoși și L4–S1 gleznă/haluce.',
 ['C6–C7 pentru extensia pumnului este din tabel.','C7–C8 pentru triceps este citat.','C8–T1 pentru interosoși este enumerat.','Dorsiflexia este tibial anterior L4–L5, nu C5.','Flexorii digitali sunt C8, nu L2–L3 (adductorii coapsei).']],
 8,'Mută flexorii digitali pe rădăcini lombare, amestecând etajele tabelului.',['C6,C7','interosoşi palmari']),

q(90,['Imagistica și protocoalele de excludere a leziunii cervicale includ:',
 ['Standardul de aur pentru examinarea coloanei este CT; reconstrucția 3D crește acuratețea fără iradiere suplimentară','IRM evaluează ligamente, contuzii medulare, hematoame epidurale și discuri herniate, la pacientul stabil și cooperant','Protocoalele Nexus/Canadian C-spine permit scoaterea gulerului fără imagistică doar la conștient, fără alcool/droguri/antalgice, care execută comenzi și fără durere sau limitare cervicală','Radiografia standard nu omite leziuni, CT-ul fiind inutil','IRM se face la instabilul hipotensiv, înaintea resuscitării'],'ABC',93,'Coloana — CT, IRM, Nexus',
 'Aplicarea CT ca standard, a IRM-ului pentru părțile moi și a criteriilor stricte Nexus.',
 ['CT-ul ca standard și reconstrucția 3D sunt explicite.','Lista indicațiilor IRM și condiția de stabilitate sunt citate.','Criteriile de aplicare a protocoalelor sunt enumerate.','Radiografia poate omite până la 20% din leziunile osoase.','IRM cere pacient stabil hemodinamic și cooperant.']],
 8,'Declară radiografia infailibilă și forțează IRM-ul la instabil, inversând ierarhia imagistică.',['standardul de aur','Nexus']),

q(91,['Ponderea traumatismelor toracice în mortalitatea prin traumă, potrivit textului, este de aproximativ:',
 ['25%, a doua cauză după traumatismele cranio-cerebrale; numai 10–15% necesită sternotomie sau toracotomie','50%, identică fracturilor de corp vertebral','90%, identică ocupării canalului de către C1–C4','1–10%, identică supraviețuirii după toracotomia de resuscitare pe cordul drept','80 mL/kg, confuzie cu volemia pediatrică'],'A',93,'Traumatisme toracice — Epidemiologie',
 'Reținerea cuplului 25% din decese / 10–15% chirurgical, distinct de alte procente din capitol.',
 ['Cifra de aproximativ 25% și rangul 2 după TCC sunt explicite; 10–15% chirurgical este citat.','50% descrie fracturile de corp vertebral.','C1–C4 ocupă 50% din canal, nu 90%.','1–10% este supraviețuirea după toracotomia de resuscitare.','80 mL/kg este volemia copilului.']],
 8,'Permutează 25% cu 50%/90%/1–10%, toate cifre din capitolul de traumă.',['aproximativ 25%','I 0-15% din leziunile']),

q(92,['Voletul costal, dincolo de definiția „două coaste adiacente în două locuri”, se caracterizează prin:',
 ['La pacientul ventilat cu presiune pozitivă, inspecția mișcării paradoxale este neconcludentă','Contuzia pulmonară subiacentă este cauza principală de hipoxie și hipercapnie','Inspecția paradoxală este mai evidentă sub ventilație cu presiune pozitivă','Lichidele agresive protejează plămânul afectat, corectând V/Q','Stabilizarea chirurgicală crește morbiditatea și se evită'],'AB',94,'Voletul costal — Contuzie și lichide',
 'Legarea hipoxiei de contuzia pulmonară, nu de paradoxul parietal, plus precauția volemică.',
 ['Neconcludența inspecției sub PPV este explicită.','Contuzia ca cauză principală de hipoxie/hipercapnie este citată.','PPV maschează paradoxul, nu îl face mai evident.','Lichidele agresive agravează V/Q, nu protejează plămânul.','Stabilizarea chirurgicală a redus morbiditatea, nu o crește.']],
 8,'Inversează efectul PPV asupra inspecției și transformă lichidele agresive în protecție pulmonară.',['presiune pozitivă','raportului ventilaţie-per']),

q(93,['Contuzia aortică, pe radiografia toracică, este sugerată de:',
 ['Lărgirea mediastinului (>8 cm)','Creșterea opacității mediastinale, condensare apicală, ștergerea conturului arcului, deplasarea inferioară a bronhiei primitive stângi, deplasarea traheei spre dreapta, obliterarea ferestrei aorto-pulmonare, devierea SNG, hemotorax stâng, fracturi de coastă 1–2','Absența acestor semne exclude leziunea, CT-ul cu contrast fiind inutil','Tehnicile deschise prin toracotomie stângă postero-laterală au înlocuit TEVAR','Mediastinul sub 4 cm este criteriul de ruptură iminentă'],'AB',95,'Contuzia aortică — Semne radiologice',
 'Aplicarea pragului >8 cm și a listei de semne, față de falsa reasigurare a radiografiei normale.',
 ['Pragul >8 cm este explicit.','Lista semnelor asociate este enumerată.','Absența semnelor nu exclude; CT cu contrast este necesar la suspiciune.','TEVAR a înlocuit repararea clasică prin toracotomie stângă postero-laterală.','Pragul citat este >8 cm, nu <4 cm.']],
 8,'Transformă radiografia normală în criteriu de excludere, exact avertismentul textului.',['>8 cm','ferestrei aorto-pulmonare']),

q(94,['Toracotomia de resuscitare din departamentul de urgențe permite:',
 ['Pericardiotomie pentru tamponadă și masaj cardiac deschis, cu eficacitate superioară compresiilor la hipovolemic','Clamparea aortei descendente la diafragm, creșterea TA, administrare intracardiacă de medicamente, controlul hemoragiei și evacuarea embolului gazos','Se consideră la traumatism deschis cu pierderea semnelor vitale cu mai puțin de 15 minute înaintea sosirii','Candidați sunt și instabilii cu tamponadă care nu pot fi transportați în sală','Stopul prelungit, trauma închisă masivă și AESP prespital au cel mai mare beneficiu, peste 50%'],'ABCD',96,'Toracotomia de resuscitare — Obiective și fereastră',
 'Combinarea obiectivelor tehnice cu fereastra <15 minute, față de grupurile fără beneficiu.',
 ['Pericardiotomia și masajul deschis sunt explicite.','Clamparea la diafragm și celelalte obiective sunt citate.','Fereastra <15 minute este descrisă.','Tamponada netransportabilă este menționată.','Aceste scenarii sunt tocmai cele fără beneficiu; supraviețuirea maximă e 1–10% chiar în înjunghierea cordului drept.']],
 8,'Atribuie beneficiul maxim stopului prelungit/AESP, exact grupul exclus de text.',['mai puţin de 15 minute','clamparea aotiei descendente']),

q(95,['Instrumentele adjuvante în traumatismul abdominal includ:',
 ['FAST a înlocuit lavajul peritoneal diagnostic în evaluarea sângerării intraperitoneale','FAST folosește incidențe în cadranele superioare dreapta și stânga, pericard și pelvis','CT este standardul de aur pentru organele intra- și retroperitoneale la hemodinamic stabil','FAST evaluează doar pericardul','CT-ul este inutil la stabili, LPD rămânând standardul'],'ABC',97,'Abdomen — FAST și CT',
 'Recunoașterea celor patru ferestre FAST și a CT-ului ca standard la stabil, după înlocuirea LPD.',
 ['Înlocuirea LPD este explicită.','Cele patru incidențe sunt enumerate.','CT-ul ca standard la stabil este citat.','FAST acoperă abdomen și pericard, nu doar pericardul.','CT-ul, nu LPD, este standardul la hemodinamic stabil.']],
 8,'Reduce FAST-ul la pericard și anulează CT-ul, inversând adjuvanții de pe pagină.',['lavajul peritoneal diagnostic','cadranelor superioare']),

q(96,['Managementul plăgilor penetrante de flanc și lombă include:',
 ['La stabil, CT cu contrast oral și rectal are acuratețe crescută; aceste traiectorii lezează mai frecvent organele retroperitoneale','Orice pacient cu leziune penetrantă a abdomenului, flancului sau lombei și hipotensiune trebuie laparotomizat pentru oprirea hemoragiei','Obiectele ascuțite de intensitate mică se evaluează pentru leziune fascială/peritoneală; dacă e prezentă, se impune laparotomia','Flancul hipotensiv se observă 72 de ore, contrastul rectal fiind evitat','Leziunile lombare nu ating retroperitoneul, deci CT-ul este superfluu'],'ABC',98,'Plăgi de flanc/lombă — Contrast și hipotensiune',
 'Separarea CT-ului dublu-contrast la stabil de laparotomia imediată la hipotensiv.',
 ['Contrastul oral și rectal și predilecția retroperitoneală sunt explicite.','Hipotensiunea ca indicație de laparotomie este citată.','Evaluarea fasciei/peritoneului la obiecte ascuțite este descrisă.','Hipotensivul nu se observă; laparotomia oprește hemoragia.','Textul subliniază tocmai riscul retroperitoneal.']],
 8,'Observă hipotensivul de flanc, exact scenariul de laparotomie imediată.',['contrast administrată oral şi rectal','flancurilor']),

q(97,['Vaccinarea după splenectomie traumatică vizează bacteriile încapsulate, textul citând explicit:',
 ['Pneumococul și meningococul','Haemophilus numai, fără pneumococ','Virusul gripal, fără bacterii încapsulate','Bacili Gram-negativi enterici, identic antibioticelor din diverticulită','Stafilococul meticilino-rezistent, ca în osteomielita deschisă'],'A',99,'Splina — Vaccinare post-splenectomie',
 'Reținerea cuplului pneumococ–meningococ pentru prevenția infecțiilor potențial fatale după splenectomie.',
 ['Cele două bacterii încapsulate sunt enumerate explicit.','Haemophilus nu este citat aici ca unică țintă.','Textul vorbește de bacterii încapsulate, nu de virus gripal.','Gram-negativii coliformi țin de antibioticele diverticulitei.','Stafilococul ține de fractura deschisă, nu de asplenie.']],
 8,'Înlocuiește pneumococul/meningococul cu germeni din alte capitole (diverticul, os).',['pneumococul şi','meningococul']),

q(98,['Leziunile pancreatice traumatice, dincolo de rezecția de la stânga AMS, se gestionează astfel:',
 ['Leziunile de cap: controlul sângerărilor și drenajul peripancreatic ca management inițial','Leziunile mici care nu interesează ductul principal pot fi tratate prin drenaj','Orice leziune de cap impune Whipple de urgență înaintea drenajului','MRCP și ERCP sunt evitate, CT-ul fiind inutil în trauma pancreatică','Plăgile lombare prin înjunghiere nu pot atinge pancreasul retroperitoneal'],'AB',100,'Pancreas traumatic — Cap, duct, imagistică',
 'Contrastul drenaj ± control hemoragic (cap, leziuni mici fără duct) versus Whipple-ul nejustificat de urgență.',
 ['Controlul sângerării și drenajul peripancreatic sunt explicite.','Drenajul leziunilor mici fără duct este citat.','Whipple nu figurează ca gest inițial de cap.','Evaluarea se face prin CT, MRCP și ERCP.','Plăgile lombare prin înjunghiere pot leza pancreasul.']],
 8,'Forțează Whipple-ul pe leziunea de cap, sărind peste drenajul descris ca management inițial.',['drenajul peripancreatic','MRCP']),

q(99,['Ruptura diafragmatică traumatică se deosebește stânga versus dreapta astfel:',
 ['Se întinde de obicei de la joncțiunea gastroesofagiană până la centrul tendinos; repararea cu fire separate sau continuă, ferind ramurile frenicului','Hemidiafragmul stâng are risc crescut de herniere și încarcerare; asociază frecvent stomac, colon, splină, intestin subțire','Defectele mici sunt greu de văzut pe CT, deci prag scăzut pentru laparoscopie/toracoscopie diagnostică în plăgile toraco-abdominale stângi','Leziunile mici ale hemidiafragmului drept pot fi tratate nonchirurgical, ficatul limitând herniația','Stânga se observă, dreapta impune reconstrucție prosthetică de principiu, frenicul fiind sacrificat'],'ABCD',100,'Diafragm — Stânga versus dreapta',
 'Ierarhia stânga (prag scăzut operator) versus dreapta (nonop posibil prin interpoziția ficatului).',
 ['Traiectul GE–centru tendinos și sutura, cu protecția frenicului, sunt explicite.','Riscul de herniere stângă și organele asociate sunt citate.','Limita CT și pragul laparoscopie/toracoscopie sunt descrise.','Nonop-ul drept prin ficat este menționat.','Direcția este inversă: stânga se repară, dreapta mica poate fi nonop; frenicul se ferește.']],
 8,'Inversează indicația stânga/dreapta și sacrifică frenicul, două erori din același paragraf.',['hemidiafragmului stâng','interpoziţiei ficatului']),

q(100,['Traumatismele colonului și rectului extraperitoneal se caracterizează prin:',
 ['Leziunile prin proiectil, de intensitate mică sau mare, pot fi adesea reparate prin sutură primară','Leziunile extinse cu mezenter cer rezecție și anastomoză; colostomia este rareori necesară','Rectul extraperitoneal: se consideră devierea tranzitului până la vindecare, împotriva sepsisului perineal','Colostomia este regula în orice sutură primară colonică, chiar la stabil fără șoc','Sutura primară este interzisă la proiectile, Hartmann fiind unica opțiune'],'ABC',101,'Colon și rect traumatic',
 'Separarea suturii primare/rezecției-anastomoză de colostomia rezervată șocului, leziunilor multiple și rectului extraperitoneal.',
 ['Sutura primară este explicită.','Rezecția-anastomoză și raritatea colostomiei sunt citate.','Devierea rectului extraperitoneal este descrisă.','Colostomia nu este regula suturii primare la stabil fără șoc.','Sutura primară este permisă la proiectile; Hartmann nu este unica opțiune.']],
 8,'Face colostomia regulă universală, contrar frazei că este rareori necesară.',['sutură primară','rectului extraperitoneal'],[100]),

q(101,['După mecanism și tratament, ruptura vezicală extra- versus intraperitoneală și leziunea uretrală:',
 ['Extraperitoneale: ligamentele care leagă vezica de oase sfâșie peretele; cistografia arată extravazare retroperitoneală; tratament Foley 7–10 zile','Intraperitoneale: ruptură a domului vezicii pline; cistografie CT cu extravazare intraperitoneală; necesită explorare și reparare chirurgicală','Leziunile uretrale: hematom scrotal, sânge la meat, prostată absentă sau malpoziționată; UGR înainte de Foley','Intraperitonealele se tratează doar cu Foley 7–10 zile, fără sutură','Trecerea în orb a Foley este metoda de elecție când există sânge la meat'],'ABC',102,'Vezică și uretră — Intra versus extra',
 'Contrastul Foley 7–10 zile (extraperitoneal) versus repararea chirurgicală (intraperitoneal, dom plin).',
 ['Mecanismul ligamentar, cistografia retroperitoneală și Foley 7–10 zile sunt explicite.','Domul, CT-cistografia și chirurgia sunt citate.','Triada uretrală și UGR sunt descrise.','Intraperitonealele cer reparare chirurgicală, nu doar Foley.','Foley orb poate completa o ruptură parțială; se face UGR.']],
 8,'Inversează Foley versus chirurgie între intra- și extraperitoneal, două algoritmi vecini.',['7-1 O zile','domului vezical']),

q(102,['Zonele anterioare ale gâtului, pentru plăgile care traversează platisma, se definesc astfel:',
 ['Regiunea anterioară merge de la linia mediană până la marginea anterioară a sternocleidomastoidianului','Zona I este inferioară cartilajului cricoid; zona III este superioară unghiului mandibulei','Șocul și semnele clare de lezare vitală din zonele I și II cer explorare chirurgicală imediată','La hemodinamic stabil, zonele I și III se abordează selectiv din cauza dificultății de expunere','Platisma poate fi ignorată, zona II impunând explorare de principiu la orice zgârietere cutanată'],'ABCD',102,'Gât — Zone și platisma',
 'Maparea limitelor cricoid/mandibulă și a explorării imediate la șoc în I–II, versus selectiv I/III la stabil.',
 ['Delimitarea față de SCM este explicită.','Definițiile zonelor I și III sunt din legendă/text.','Explorarea imediată la șoc/semne clare în I și II este citată.','Abordul selectiv I/III la stabil este descris.','Orice plagă care afectează platisma necesită evaluări suplimentare.']],
 8,'Ignorează platisma și forțează explorarea de principiu a zgârieturii, contrar pragului platismei.',['muşchiul platisma','cartilajul cricoid'],[103]),

q(103,['Leziunile laringiene din traumatismul penetrant al gâtului se clasifică și se repară astfel:',
 ['Supraglotice, glotice și subglotice; supragloticele deprimă în general incizura superioară a cartilajului tiroid, cu fractură verticală','Ruptura cartilajului tiroid lezează glota; subgloticele implică de obicei porțiunea inferioară a tiroidului și cricoidul','Repararea se amână 6 săptămâni, stricturile fiind rare','Laringoscopia și bronhoscopia sunt evitate până la vindecarea spontană','Subgloticele interesează doar osul hioid, fără cricoid'],'AB',103,'Gât — Laringe, clasificare și timing',
 'Aplicarea celor trei etaje laringiene și a reparării precoce împotriva stricturilor.',
 ['Cele trei etaje și semnul incizurii/fracturii verticale sunt explicite.','Cuplul tiroid–glotă și subglotic–cricoid este citat.','Repararea precoce este scopul, întârzierea crescând stricturile.','Laringoscopia directă plus bronhoscopia este metoda preferată.','Subgloticele implică tiroidul inferior și cricoidul, nu doar hioidul.']],
 8,'Amână repararea laringelui, exact gestul legat de stricturi.',['supraglotice, glotice şi subglotice','formării sh·icturilor']),

q(104,['Indicele gleznă-braț și principiile fracturilor de extremitate includ:',
 ['IGB se calculează ca TA sistolică tibială (Doppler) împărțită la sistola brahială; normalul este 1','Radiografiile unei fracturi trebuie să cuprindă oasele de deasupra și de sub focar','IGB de 0,5 este valoarea normală','Femurii bilaterali nu produc șoc în absența unei plăgi penetrante','Luxația prelungită este benignă, statusul neurovascular evaluându-se o singură dată, înainte de atele'],'AB',104,'Extremități — IGB și femur',
 'Reținerea IGB normal = 1 și a șocului prin femuri bilaterale, față de pragul 0,5 ca „normal”.',
 ['Formula și valoarea 1 sunt explicite.','Regula „osul de deasupra și de sub” este citată.','0,5 nu este IGB normal.','Femurii bilaterali se pot prezenta cu șoc chiar fără alte leziuni.','Luxația prelungită lezează nervi și vase; statusul NV se reevaluează după manipulare.']],
 8,'Inversează IGB-ul normal (1 versus 0,5) și neagă șocul din femuri bilaterale.',['rapo1t este I','fracturi femurale bilaterale'],[103]),

q(105,['Epidemiologia traumei pediatrice și geriatrică, potrivit textului, include:',
 ['La copiii între 1 și 14 ani, accidentele autovehiculelor cauzează 47% din decesele prin traumă; înecul este a doua cauză, urmat de agresiunea termică','Trauma este prima cauză de deces la copii și prima cauză de handicap sub 14 ani','La vârstnici (>65 ani) trauma este a cincea cauză de deces; victimele MVC >85 ani au mortalitate de 7–9 ori mai mare decât tinerii','Abuzul asupra vârstnicilor este estimat la 2–10%; 5% din omucideri au victime ≥65 ani','MVC pediatric explică sub 5% din decese, iar vârstnicul >85 ani are mortalitate identică tânărului'],'ABCD',105,'Pediatric și geriatric — Epidemiologie',
 'Combinarea 47%/înec la copil cu rangul 5 și multiplicatorul 7–9× la vârstnicul >85 ani.',
 ['47%, înecul și agresiunea termică sunt explicite.','Prima cauză de deces și handicap este citată.','Rangul 5 și 7–9 ori sunt descrise.','2–10% și 5% din omucideri sunt menționate.','Direcțiile procentuale sunt inverse față de text.']],
 8,'Reduce MVC-ul pediatric de la 47% la 5% și anulează excesul de mortalitate 7–9× al octogenarului.',['47% din','7-9 ori mai mare'],[106]),
];
