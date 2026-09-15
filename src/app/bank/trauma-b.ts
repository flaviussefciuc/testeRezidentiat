import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-57;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('trauma',9,pdfOffset,`trauma-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const TRAUMA_B=[
q(11,['Traumatismele, ca problemă de sănătate publică în SUA, se caracterizează prin:',
 ['Reprezintă principala cauză de deces pentru indivizii cu vârste între 1 și 44 de ani','Sunt a treia cauză de mortalitate după primul an de viață','ATLS ghidează îngrijirea inițială prin evaluare primară, resuscitare, evaluare secundară și îngrijire definitivă','Screeningul de laborator neselectiv înlocuiește evaluarea primară ABCDE','Reducerea mortalității a fost legată doar de creșterea numărului de laparotomii exploratorii, fără rol pentru CT sau controlul lezional'],'ABC',87,'Generalități și evaluarea inițială',
 'Recunoașterea ponderii epidemiologice a traumei și a celor patru etape ATLS, față de substituirea greșită a ABCDE.',
 ['Textul identifică trauma ca principala cauză de deces între 1 și 44 de ani.','Rangul de a treia cauză după primul an de viață este citat explicit.','Cele patru etape ATLS sunt enumerate în ordine.','Evaluarea primară ABCDE rămâne cadrul de prioritizare, nu analizele neselective.','Scăderea mortalității este asociată cu CT, IRM, tehnici minim invazive, control lezional și regionalizare, nu doar cu laparotomii.']],
 8,'Distractorii anulează ABCDE și atribuie câștigul de supraviețuire doar laparotomiei, contrar listei de inovații din text.',['principala cauză de deces','evaluarea primară']),

q(12,['Cricotiroidotomia, când glota nu poate fi intubată pe cale orală, se caracterizează prin:',
 ['Cricotiroidotomia cu ac este mai rapidă decât cea deschisă','În varianta deschisă, după deschiderea membranei cricotiroidiene se introduce un tub de 6 French sau mai mic','Varianta cu ac folosește un cateter 22 sau 24 gauge, trecut prin membrana tirohioidiană','Tubul de elecție este de 8,5 French, introdus prin membrana tirohioidiană','Incizia cutanată descrisă pentru varianta deschisă măsoară 8 cm, verticală, de-a lungul sternocleidomastoidianului'],'AB',87,'Evaluarea primară — Căile aeriene chirurgicale',
 'Aplicarea calibrului 6 French și a faptului că acul e mai rapid, față de calibrul 22–24 G și reperul tirohioidian greșite.',
 ['Textul precizează că varianta cu ac este mai rapidă.','Calibrul de 6 French sau mai mic este citat după deschiderea membranei.','Cateterul descris este 16 sau 18 gauge prin membrana cricotiroidiană, nu 22–24 G prin tirohioidiană.','Membrana tirohioidiană și 8,5 French nu sunt reperul/calibrul din text.','Figura descrie o incizie transversală de 2 cm, nu una de 8 cm pe SCM.']],
 8,'Permutează membrana (cricotiroidiană vs tirohioidiană) și calibrul tubului, două detalii de procedură ușor de inversat.',['6 French','16 sau 18 gange'],[88]),

q(13,['Identificați afirmația corectă referitoare la clasificarea hemoragiei după Tabelul 9-1:',
 ['În clasa II, la o persoană de 70 kg, pierderea este 750–1.500 mL (15–30%), frecvența cardiacă >100, iar tensiunea arterială rămâne normală','Clasa I asociază deja hipotensiune și necesită sânge, nu cristaloide','Clasa II se definește prin pierdere >40% și diureză neglijabilă','Tensiunea arterială scade încă din clasa I, înaintea tahicardiei','Clasa IV se tratează doar cu cristaloide, fără produse sangvine'],'A',88,'Circulația — Clasificarea hemoragiei',
 'Recunoașterea capcanei clasei II: tahicardie cu tensiune încă normală, distinct de hipotensiunea claselor III–IV.',
 ['Intervalele de volum și menținerea TA în clasa II sunt din tabel.','Clasa I are TA normală și cristaloide; sângele apare din clasa III.','Pierderea >40% și diureza neglijabilă definesc clasa IV.','TA rămâne normală în clasele I–II.','Clasa IV primește cristaloide și sânge.']],
 8,'Distractorii mută hipotensiunea în clasa I–II, exact eroarea pe care tabelul o corectează.',['Clasa I','Cristaloide și sânge']),

q(14,['Alegeți afirmațiile corecte referitoare la resuscitarea circulatorie în trauma hemoragică:',
 ['Cea mai comună cauză de șoc după traumatisme este hemoragia','Refacerea volumului începe cu soluții cristaloide izotone (Ringer lactat, ser fiziologic sau plasmalyte)','În șocul sever, masa eritrocitară, plasma și plachetele se administrează în raport 1:1:1','Hemoragiile externe se controlează temporar prin compresie directă sau garou','Pneumotoraxul în tensiune și tamponada sunt cauzele cele mai comune de șoc traumatic, înaintea hemoragiei'],'ABCD',88,'Circulația — Resuscitare și cauze de șoc',
 'Separarea hemoragiei ca etiologie dominantă de cauzele cardiogene/obstructive mai rare și aplicarea protocolului 1:1:1.',
 ['Hemoragia este numită cea mai comună cauză.','Cristaloizii izotoni sunt listați ca start.','Raportul 1:1:1 este protocolul de transfuzii masive.','Compresia și garoul sunt măsurile temporare externe.','Pneumotoraxul în tensiune, tamponada, șocul obstructiv și cel neurogen sunt cauze mai puțin frecvente.']],
 8,'Inversează ierarhia etiologică, punând cauzele rare în locul hemoragiei.',['1: 1: I','Ringer lactat']),

q(15,['Scala de Comă Glasgow (Tabelul 9-2) se caracterizează prin:',
 ['Răspunsul ocular maxim este 4 (spontan), cel motor 6 (execută comenzi), cel verbal 5 (orientat)','Scorul se calculează O + M + V; cel mai bun este 15, cel mai sever 3','Rigiditatea de decerebrare (extensie anormală) cotează 2 la răspunsul motor','Deschiderea oculară spontană cotează 6, egal cu executarea comenzilor','Un scor de 8 este valoarea maximă posibilă a scalei'],'ABC',89,'Evaluarea primară — Scala Glasgow',
 'Memorarea ponderilor O4/M6/V5 și a extremei 15 versus 3, față de confuzia decerebrare–decorticare și a maximului ocular.',
 ['Maximele pe cele trei axe sunt din tabel.','Formula O+M+V și extremele 15/3 sunt explicite.','Extensia anormală (decerebrare) are 2 puncte motor.','6 puncte aparțin răspunsului motor (comenzi), nu ocularului.','Maximul scalei este 15, nu 8.']],
 8,'Permutează punctajul ocular cu cel motor și transformă pragul de intubație (8) în maxim al scalei.',['cel moi bun = 15','Răspunsul motor']),

q(16,['În examinarea secundară a traumatizatului sunt adevărate următoarele:',
 ['Se montează sondă nazogastrică pentru distensia gastrică, cu excepția fracturilor de bază de craniu sau faciale extinse','Sângele la meatul penian sau diastaza simfizei în fractura „carte deschisă” impun uretrografie retrogradă înaintea sondei urinare','Ecografia este un adjuvant al evaluării primare pentru hemoragie abdominală sau intrapericardică','Sonda nazogastrică este calea de elecție în orice fractură de bază de craniu, pentru a evacua LCR-ul','La pacientul instabil hemodinamic, CT-ul înlocuiește evaluarea primară și FAST'],'ABC',89,'Examinarea secundară și investigații',
 'Aplicarea contraindicațiilor SNG, a uretrografiei înaintea Foley și a rolului FAST, față de CT-ul rezervat pacientului stabil.',
 ['Excepțiile SNG (bază de craniu, fracturi faciale) sunt explicite.','Semnele de traumatism uretral și UGR sunt descrise.','Rolul ecografiei în evaluarea primară este citat.','Fractura de bază contraindică SNG, nu o impune.','CT-ul este mai sensibil la pacientul stabil, nu la instabil în locul ABCDE/FAST.']],
 8,'Inversează contraindicația SNG și promovează CT-ul la instabil, două erori de secvență ATLS.',['sondă nazogastrică','uretrografia retrogradă']),

q(17,['Când presiunea intracraniană depășește 20 mm Hg:',
 ['Fluxul sanguin cerebral este redus și poate provoca ischemie','Volumul cutiei craniene fiind fix, creșterea unuia dintre cele trei conținuturi (creier, LCR, sânge) crește PIC','PPC este diferența PAM − PIC, iar FSC = PPC/RVC','Autoreglarea vasculară rămâne intactă după leziunea cerebrală, deci FSC variază liber cu PPC','Hipotensiunea este o cauză rară de leziune cerebrală secundară și trebuie atribuită injuriei cerebrale primare'],'ABC',89,'Traumatisme cranio-cerebrale — PIC și perfuzie',
 'Aplicarea pragului PIC de 20 mm Hg, a doctrinei Monroe–Kellie și a formulei PPC, față de soarta autoreglării după traumă.',
 ['Pragul de 20 mm Hg cu ischemie este explicit.','Volumul fix și cele trei conținuturi sunt descrise.','PPC = PAM − PIC și FSC = PPC/RVC sunt enunțate.','Autoreglarea este alterată sau abolită după leziune.','Hipotensiunea este cea mai frecventă cauză de leziune secundară.']],
 8,'Neagă pierderea autoreglării și inversează rolul hipotensiunii ca injurie secundară.',['20 mm Hg','presiunea de perfuzie cerebrală'],[90]),

q(18,['Hernierea transtentorială prin cortul cerebelului se manifestă prin:',
 ['Midriază fixă a pupilei ipsilaterale, prin comprimarea nervului oculomotor','Pareză spastică contralaterală și Babinski pozitiv, prin comprimarea tractului piramidal','Hipertensiune și bradicardie la compresia trunchiului, semnalând hernierea','Midriază contralaterală și pareză ipsilaterală, ca semn precoce de salvare','Hipotensiune cu tahicardie, identică șocului hemoragic, ca prim semn de herniere'],'ABC',90,'Hernierea cerebrală',
 'Maparea lateralityății: pupilă ipsilaterală, deficit motor contralateral, apoi hipertensiune-bradicardie de trunchi.',
 ['Compresia oculomotorului cu midriază ipsilaterală este descrisă.','Pareza contralaterală și Babinski sunt explicitate.','Hipertensiunea și bradicardia semnalează hernierea.','Lateralitatea pupilei și a deficitului este inversată față de text.','Tahicardia hipotensivă descrie șocul hemoragic, nu hernierea.']],
 8,'Inversează ipsilateral versus contralateral și confundă Cushing-ul tardiv cu șocul hemoragic.',['nervul oculomotor','cortul cerebelului']),

q(19,['Precizați enunțul corect privind prognosticul după scorul Glasgow în traumatismul cranio-cerebral:',
 ['Mortalitatea pentru un scor de 5 sau 6 se apropie de 65%, iar pentru 7 sau 8 de 28%','Scorurile 5–6 au mortalitate sub 5%, iar 7–8 sub 1%','Un GCS de 15 se asociază cu mortalitate de 97%','Sedativele, alcoolul și drogurile nu influențează GCS','GCS evaluează doar răspunsul motor, fără componentă oculară sau verbală'],'A',90,'Traumatisme cranio-cerebrale — Prognostic GCS',
 'Reținerea mortalității ~65% la GCS 5–6 și ~28% la 7–8, distinct de extrema 97% rezervată scorurilor 3–4.',
 ['Cele două procente de mortalitate sunt citate explicit.','Valorile „sub 5%/1%” contrazic textul.','97% este atribuit scorurilor 3 și 4, nu 15.','Sedativele, șocul, alcoolul și drogurile influențează GCS.','Scala are trei axe: ocular, verbal, motor.']],
 8,'Mută mortalitatea de 97% pe GCS 15 și neagă confondenții (sedare, alcool) ai scalei.',['se apropie de 65%','de 28%']),

q(20,['Leziunile coloanei vertebrale se caracterizează prin:',
 ['Coloana cervicală este sediul cel mai frecvent al leziunilor','Aproximativ 15% din leziunile traumatice ale coloanei se produc la joncțiunea toraco-lombară','La adulți, măduva se termină la S4, deci fracturile lombare distale lezează constant conusul','Tărgile de imobilizare toraco-lombară prelungită rămân standard, fără risc de ulcer de decubit','Coloana toracică, nesusținută de coaste, este segmentul cel mai mobil și cel mai frecvent fracturat'],'AB',91,'Leziunile coloanei — Anatomie și epidemiologie',
 'Localizarea predilectă cervicală și a 15% toraco-lombar, față de terminația reală a măduvei la L1 și de rolul coastelor.',
 ['Predilecția cervicală este explicită.','Cifra de 15% la joncțiunea toraco-lombară este citată.','Măduva se termină la L1; leziunea medulară e mai puțin probabilă distal.','Tărgile nu mai sunt recomandate din cauza ulcerelor de decubit.','Coastele stabilizează toracicul, reducând mobilitatea și riscul.']],
 8,'Inversează mobilitatea toracică și menține tărgile ca standard, contrar avertismentului de decubit.',['15% din leziunile','primei ve11ebre lombare']),

q(21,['Sediul predilect al traumatismelor coloanei cervicale este:',
 ['A cincea vertebră cervicală la adult și C2–C3 la copiii sub 8 ani','C7 la adult și T12 la copil','C1 la orice vârstă, deoarece atlasul este cel mai expus','Doar T10, indiferent de vârstă','L5 la adult, C7 la copil'],'A',92,'Coloana cervicală — Sediul predilect',
 'Diferențierea C5 la adult de C2–C3 la copilul sub 8 ani, pe fondul originii frenicului C3–C5.',
 ['Sediile C5 (adult) și C2–C3 (copil <8 ani) sunt explicite.','C7/T12 nu sunt sediile citate.','C1 nu este descris ca sediu predilect universal.','T10 nu este sediul cervical predilect.','L5 nu aparține coloanei cervicale.']],
 8,'Permutează nivelele C5 versus C2–C3 între adult și copil, o confuzie clasică de vârstă.',['a cincea vertebră cervicală','a doua şi a treia']),

q(22,['Sindromul medular central se prezintă cel mai frecvent cu:',
 ['Slăbiciune accentuată la extremitățile superioare față de cele inferioare, după hiperextensie cervicală pe un canal îngustat, mai ales la vârstnici cu osteoartrită cervicală','Paraplegie flască pură, cu păstrarea completă a membrelor superioare','Hemisecțiune cu pierdere motorie contralaterală și durere ipsilaterală, identică Brown-Séquard inversat','Șoc hemoragic cu extremități reci și tahicardie, fără deficit motor','Leziune completă deasupra C5, fără șansă de recuperare chiar incompletă'],'A',92,'Sindroame medulare incomplete — Sindromul central',
 'Recunoașterea disocierii brațe > picioare după hiperextensie la vârstnicul cu stenoză/OA, distinct de Brown-Séquard și de șocul hemoragic.',
 ['Tabloul, mecanismul și terenul (vârstnic, OA) sunt descrise explicit.','Păstrarea brațelor descrie alt pattern, nu sindromul central.','Brown-Séquard are hemisecțiune; lateralityatea din distractor este inversată.','Extremitățile reci și tahicardia țin de șocul hemoragic.','Textul rezervă prognostic mai bun leziunii incomplete după tratament optim.']],
 8,'Confruntă trei sindroame incomplete și șocul hemoragic pe un detaliu de distribuție (ms > mi) ușor de uitat.',['Sindromul medular central','osteoartrită']),

q(23,['Selectați enunțurile adevărate despre SCIWORA și imagistica coloanei:',
 ['SCIWORA este posibilă mai ales la copii și vârstnici, prin leziune ligamentară sau hiperextensie','Radiografia standard poate omite până la 20% din leziunile osoase, mai ales cervical inferior și toracic superior','Radiografia simplă rămâne standardul de aur, CT-ul fiind abandonat în evaluarea coloanei','IRM este investigația de primă intenție la pacientul instabil hemodinamic, înaintea oricărei resuscitări','Protocoalele Nexus/Canadian C-spine se aplică și pacientului intoxicat, care nu poate urma comenzi'],'AB',93,'SCIWORA și clearance-ul coloanei',
 'Aplicarea ratei de 20% false negative ale radiografiei, față de CT ca etalon real și de limitele IRM/protocoalelor clinice.',
 ['Terenul pediatric/geriatric și mecanismul ligamentar sunt citate.','Omisiunea de până la 20% este explicită.','CT-ul, nu radiografia, este numit standard de aur.','IRM cere pacient stabil și cooperant.','Protocoalele cer conștiență, fără alcool/droguri/antalgice, cu comenzi și fără durere/limitare cervicală.']],
 8,'Pune IRM înaintea stabilizării și extinde Nexus la intoxicat, două abateri de la condițiile textului.',['până la 20%','standardul de aur']),

q(24,['Traumatismele toracice, ca grup, se caracterizează prin:',
 ['Reprezintă aproximativ 25% din cauzele de mortalitate prin traumă, a doua după traumatismele cranio-cerebrale','Numai 10–15% dintre leziunile toracice necesită sternotomie mediană sau toracotomie','Pneumotoraxul deschis se recunoaște doar pe CT, sunetul de sucțiune neavând valoare clinică','Trei sferturi dintre leziunile toracice impun sternotomie de principiu, înaintea oricărui drenaj','Pneumotoraxul în tensiune, tamponada, hemotoracele masiv și voletul nu fac parte din leziunile amenințătoare de viață'],'AB',93,'Traumatisme toracice — Epidemiologie',
 'Reținerea ponderii de 25% din decese și a faptului că doar 10–15% ajung la toracotomie/sternotomie.',
 ['Cifra de 25% și locul doi după TCC sunt explicite.','Intervalul 10–15% chirurgicale este citat.','Sunetul de sucțiune, audibil fără stetoscop, este semnul clinic al pneumotoraxului deschis.','Sternotomia de principiu contrazice procentul 10–15%.','Cele patru leziuni sunt tocmai lista amenințătoare de viață.']],
 8,'Umflă indicația de sternotomie și scoate din listă tocmai leziunile fatale enumerare în text.',['25% din cauzele','I 0-15% din leziunile']),

q(25,['Pneumotoraxul deschis se tratează imediat prin:',
 ['Pansament parțial ocluziv, securizat pe trei laturi, care creează o valvă unidirecțională și transformă leziunea într-un pneumotorax închis','Pansament ocluziv pe patru laturi, ca primă și unica manevră, fără tub ulterior','Toracotomie de resuscitare înaintea oricărei acoperiri a defectului','Clampearea aortei descendente la diafragm, ca gest de primă intenție','Așteptarea confirmării CT înaintea oricărei manevre pe peretele toracic'],'A',93,'Pneumotoraxul deschis',
 'Recunoașterea pansamentului pe trei laturi ca manevră care evită transformarea în pneumotorax în tensiune.',
 ['Cele trei laturi, valva și transformarea în pneumotorax închis sunt explicite.','Ocluzia completă pe patru laturi riscă tensiunea; tubul urmează după stabilizare.','Toracotomia de resuscitare nu este tratamentul primar al defectului deschis.','Clamparea aortei ține de toracotomia de resuscitare, nu de pneumotoraxul deschis.','Diagnosticul este clinic (sunet de sucțiune); CT-ul amână tratamentul.']],
 8,'Înlocuiește valva pe trei laturi cu ocluzie completă sau cu toracotomie, două extreme greșite.',['trei laturi','sunet „de sucţiune”'],[94]),

q(26,['Voletul costal se definește și se gestionează astfel:',
 ['Două sau mai multe coaste adiacente fracturate în două sau mai multe locuri creează un segment cu mișcare paradoxală','Cauza principală de hipoxie este contuzia pulmonară subiacentă, cu tulburare a raportului ventilație-perfuzie','Lichidele intravenoase se administrează agresiv, pentru a umple plămânul contuzionat','Inspecția paradoxală rămâne concludentă și la pacientul ventilat cu presiune pozitivă','Stabilizarea chirurgicală a segmentului crește morbiditatea și este abandonată'],'AB',94,'Voletul costal',
 'Aplicarea definiției (≥2 coaste × ≥2 locuri) și a contuziei ca motor al hipoxiei, față de precauția volemică.',
 ['Definiția anatomică este explicită.','Contuzia ca cauză principală de hipoxie/hipercapnie este citată.','Resuscitarea agresivă sechestrează lichid în plămânul afectat; lichidele se dau cu precauție.','La ventilație cu presiune pozitivă inspecția este neconcludentă.','Stabilizarea chirurgicală s-a dovedit a reduce morbiditatea.']],
 8,'Inversează valoarea inspecției la pacientul ventilat și a stabilizării chirurgicale.',['două sau mai multe coaste','mişcărilor segmentului']),

q(27,['Contuzia aortică după decelerare se caracterizează prin:',
 ['Forța de forfecare acționează la joncțiunea dintre arcul aortic mobil și aorta descendentă toracică imobilă','Lărgirea mediastinului >8 cm pe radiografia toracică sugerează diagnosticul','Tehnicile endovasculare (TVAR) au înlocuit repararea clasică prin toracotomie stângă posterolaterală','Absența semnelor radiologice exclude leziunea, deci CT-ul cu contrast este inutil','Netratată, leziunea evoluează rar spre ruptură, deci controlul tensional nu are rol'],'ABC',95,'Contuzia aortică',
 'Reținerea situsului de forfecare, a pragului mediastinal de 8 cm și a TEVAR ca înlocuitor al toracotomiei stângi.',
 ['Joncțiunea arc mobil / descending imobilă este mecanismul descris.','Pragul >8 cm este citat.','Înlocuirea prin TVAR este explicită.','Absența semnelor nu exclude; CT cu contrast este necesar la suspiciune.','Netratate, majoritatea evoluează spre ruptură; TA se controlează agresiv dacă repararea e amânată.']],
 8,'Transformă radiografia negativă în criteriu de excludere și neagă istoria naturală spre ruptură.',['>8 cm','Tehnicile endovasculare']),

q(28,['Localizarea fracturilor costale orientează spre leziuni asociate astfel:',
 ['Primele 3 coaste se asociază cu leziuni aortice sau ale vaselor mari','Coastele mijlocii se asociază frecvent cu contuzii pulmonare și/sau hemotorax','Coastele inferioare se asociază cu leziuni cerebrale, nu viscerale','Fractura coastei 1 exclude leziunea de vas mare, fiind un marker de energie scăzută','Coastele inferioare protejează ficatul și splina, deci nu se asociază cu leziuni viscerale'],'AB',96,'Fracturile costale — Leziuni asociate',
 'Maparea etajelor costale: 1–3 vase mari și mijloc–plămân, față de etajul inferior (diafragm/ficat/splină).',
 ['Asocierea coastelor 1–3 cu aorta/vase mari este explicită.','Etajul mijlociu–contuzie/hemotorax este citat.','Etajul inferior se leagă de diafragm, ficat sau splină, nu de creier.','Prima coastă este marker de energie înaltă, nu de excludere.','Textul leagă coastele inferioare tocmai de viscerele subiacente.']],
 8,'Inversează semnificația coastei 1 și neagă asocierea viscerală a coastelor inferioare.',['primelor 3 coaste','coastelor inferioare']),

q(29,['Indicațiile toracotomiei de resuscitare în departamentul de urgențe includ:',
 ['Traumatism deschis cu pierderea semnelor vitale cu mai puțin de 15 minute înaintea sosirii','Pacient cu tamponadă, instabil, care nu poate fi transportat la sală','Obiectivele includ pericardiotomia, masajul deschis, clamparea aortei descendente la diafragm','Stopul prelungit după traumatism închis masiv, cu AESP prespital, are indicație de principiu','Procedura se face și în absența unui chirurg experimentat în leziuni toracice complexe'],'ABC',96,'Toracotomia în departamentul de urgențe',
 'Aplicarea ferestrei de 15 minute și a tamponadei intransportabile, față de contraindicațiile stopului prelungit/închis.',
 ['Fereastra <15 minute la traumatism deschis este explicită.','Tamponada intransportabilă este un al doilea scenariu.','Lista de obiective (pericard, masaj, clamp aortic) este enumerată.','Stopul prelungit, trauma închisă masivă și AESP prespital sunt fără beneficiu.','Textul cere un chirurg cu experiență; altfel procedura nu trebuie efectuată.']],
 8,'Extinde indicația la trauma închisă cu AESP prespital, exact grupul fără beneficiu din text.',['mai puţin de 15 minute','clamparea aotiei descendente']),

q(30,['Instrumentele adjuvante în traumatismul abdominal se caracterizează prin:',
 ['FAST a înlocuit lavajul peritoneal diagnostic în evaluarea sângerării intraperitoneale','FAST folosește incidențe în cadranele superioare drept și stâng, pericard și pelvis','CT este standardul de aur pentru organele intra- și retroperitoneale la pacientul hemodinamic stabil','Palparea abdominală rămâne infailibilă la pacientul intoxicat, în șoc sau cu TCC','Lavajul peritoneal rămâne superior FAST la orice pacient instabil'],'ABC',97,'Traumatisme abdominale — FAST și CT',
 'Recunoașterea celor patru ferestre FAST și a CT-ului ca etalon la stabil, față de limitele palparii la intoxicat.',
 ['Înlocuirea LPD de către FAST este explicită.','Cele patru incidențe sunt enumerate.','CT ca standard de aur la stabil este citat.','Palparea poate fi înșelătoare la alcool, droguri, TCC sau șoc.','FAST a înlocuit LPD, nu invers.']],
 8,'Restaurează LPD ca etalon și declară palparea infailibilă la tocmai grupurile unde textul o consideră înșelătoare.',['lavajul peritoneal diagnostic','standardul de aur'],[98]),

q(31,['Gradația leziunilor hepatice (Tabelul 9-4) și managementul lor includ:',
 ['Gradul I: hematom subcapsular neexpansiv <10% din suprafață sau dilacerare <1 cm','Gradul VI corespunde avulsiei hepatice','Hemoragia activă cu extravazare de contrast poate necesita embolizare','Majoritatea leziunilor hepatice sunt autolimitate la pacientul stabil','Orice leziune de grad I impune laparotomie de control lezional înaintea CT'],'ABCD',98,'Leziuni hepatice',
 'Aplicarea extremelor I versus VI și a embolizării pentru extravazare, față de laparotomia nejustificată în gradul I stabil.',
 ['Criteriile de grad I sunt din tabel.','Avulsia ca grad VI este explicită.','Embolizarea pentru extravazare este menționată.','Caracterul autolimitat al majorității este citat.','CT este modalitatea preferată la stabil; controlul lezional este pentru grade mari/vene hepatice/VCI retrohepatică.']],
 8,'Forțează damage control pe gradul I, ignorând caracterul autolimitat și rolul CT/embolizării.',['Avulsia hepatica','< 10% din suprafaţă']),

q(32,['Managementul leziunii splenice traumatice se caracterizează prin:',
 ['Tratamentul nonchirurgical este preferat la pacientul hemodinamic stabil, mai ales în grade scăzute','Extravazarea de contrast la CT dinamic poate fi tratată prin angioembolizare, pentru conservarea splinei','După splenectomie se vaccinează împotriva bacteriilor încapsulate (pneumococ, meningococ)','Eșecul nonchirurgical (resângerare, peritonită) indică laparotomie de urgență sau embolizare','Splenectomia totală este regula la orice grad I, vaccinarea neavând rol'],'ABCD',99,'Leziuni splenice',
 'Integrarea nonop, angioembolizării și vaccinării anti-capsulate, față de splenectomia de principiu în grade mici.',
 ['Preferința nonchirurgicală la stabil este explicită.','Angioembolizarea pentru extravazare este descrisă.','Pneumococul și meningococul sunt citați pentru vaccinare.','Eșecul nonop duce la laparotomie sau embolizare.','Gradul I stabil se gestionează nonop; vaccinarea are rol după splenectomie.']],
 8,'Transformă splenectomia în gest de grad I și neagă vaccinarea, două erori de conservare a splinei.',['pneumococul şi','angioembolizare']),

q(33,['Transecția corpului pancreatic la stânga arterei mezenterice superioare se tratează prin:',
 ['Pancreatectomie distală, cu sau fără conservarea splinei','Duodenopancreatectomie cefalică de principiu, chiar fără leziune de cap','Nefrectomie stângă asociată, fascia Gerota fiind continuă cu pancreasul','Observație fără drenaj, indiferent de interesarea ductului principal','ERCP ca unică terapie, fără evaluare CT'],'A',100,'Leziuni pancreatice',
 'Recunoașterea pancreatectomiei distale pentru leziunea de la stânga AMS, distinct de Whipple (cap) și de drenajul leziunilor mici fără duct.',
 ['Sediul la stânga AMS și pancreatectomia distală ± splină sunt explicite.','Whipple ține de patologia capului, nu de transecția corpului.','Nefrectomia nu face parte din tratamentul acestei leziuni.','Leziunile mici fără duct se drenează; transecția nu se observă simplu.','CT, MRCP și ERCP evaluează, nu înlocuiesc rezecția transecției.']],
 8,'Înlocuiește pancreatectomia distală cu Whipple sau nefrectomie, două vecini anatomici din aceeași pagină.',['stânga arterei mezenterice','pancreatectomie distală']),

q(34,['Ruptura diafragmatică traumatică se caracterizează prin:',
 ['Se întinde de obicei de la joncțiunea gastroesofagiană până la centrul tendinos','Leziunile hemidiafragmului stâng au risc crescut de herniere și încarcerare dacă nu sunt reparate','Defectele mici drepte pot fi tratate nonchirurgical, ficatul reducând riscul de herniere','Plăgile toraco-abdominale stângi impun un prag scăzut pentru laparoscopie/toracoscopie diagnostică','Hemidiafragmul stâng se lasă nereparat de principiu, stomacul tamponând defectul'],'ABCD',100,'Leziuni diafragmatice',
 'Contrastul stâng (reparare, prag scăzut de explorare) versus drept (ficatul protejează), plus extensia GE–centru tendinos.',
 ['Traiectul GE–centru tendinos este descris.','Riscul de herniere stângă este explicit.','Interpoziția hepatică justifică nonop la dreapta.','Pragul scăzut de laparoscopie/toracoscopie la stânga este citat.','Nerepararea stângă este tocmai conduita contraindicată de risc.']],
 8,'Inversează lateralityatea reparării, lăsând stânga deschisă — eroarea clasică de herniere tardivă.',['hemidiafragmului stâng','interpoziţiei ficatului']),

q(35,['„Semnele de centură de siguranță” pe abdomen ridică suspiciunea de:',
 ['Leziuni intestinale, inclusiv perforație întârziată după contuzie parietală','Ruptură aortică toracică de principiu, fără evaluare abdominală','Fractură de bază de craniu, ca echivalent al semnului Battle','Leziune medulară cervicală izolată, fără interes digestiv','Pneumotorax deschis, centura acționând ca valvă toracică'],'A',100,'Intestin subțire și mezenter — Semnul centurii',
 'Legarea echimozelor de centură de riscul de leziune intestinală/mezenterică, inclusiv perforație întârziată.',
 ['Asocierea semnului de centură cu leziunile intestinale este explicită.','Ruptura aortică are alt mecanism (decelerație toracică).','Semnul Battle ține de baza craniului, nu de centură.','Leziunea cervicală nu este mesajul acestui semn cutanat.','Pneumotoraxul deschis este o leziune parietală toracică, nu abdominală.']],
 8,'Mută un semn cutanat abdominal pe aorta, baza craniului sau torace, trei vecini de capitol.',['semnelor de centură','perforaţie întârziată']),

q(36,['În traumatismul colonic și rectal sunt adevărate următoarele:',
 ['Leziunile prin proiectil, de intensitate mică sau mare, pot fi adesea reparate prin sutură primară','Leziunile extinse cu mezenter necesită rezecție și anastomoză; colostomia este rareori necesară','Rectul extraperitoneal poate necesita devierea tranzitului până la vindecare, pentru a preveni sepsisul perineal','La asocierea cu șoc sau leziuni organice multiple se preferă colostomia temporară, riscul fistulei anastomotice fiind crescut','Colostomia terminală tip Hartmann este regula în orice plagă colică punctiformă, la pacientul stabil'],'ABCD',100,'Traumatismele colonului și rectului',
 'Individualizarea suturii primare versus colostomie (șoc, leziuni multiple, rect extraperitoneal), față de Hartmann-ul de principiu.',
 ['Sutura primară pentru proiectile este citată.','Rezecția-anastomoză și raritatea colostomiei sunt descrise.','Devierea pentru rectul extraperitoneal este menționată.','Preferința pentru colostomie temporară în șoc/leziuni multiple este explicită.','Plaga punctiformă la stabil se pretează suturii primare, nu Hartmann.']],
 8,'Transformă Hartmann-ul din excepție (șoc) în regulă pentru plaga punctiformă stabilă.',['sutură primară','Colostomia este rareori'],[101]),

q(37,['Leziunile vezicale asociate fracturilor de bazin se deosebesc astfel:',
 ['Leziunea extraperitoneală se diagnostichează prin cistografie cu extravazare retroperitoneală și se tratează prin Foley 7–10 zile','Ruptura intraperitoneală a domului (vezică plină) se vede pe cistografie CT cu extravazare intraperitoneală și cere reparare chirurgicală','Sângele la meat permite montarea imediată a sondei Foley, uretrografia fiind inutilă','Foley-ul „în orb” este sigur în ruptura uretrală parțială, convertind-o în leziune vindecabilă','Leziunea intraperitoneală se tratează doar prin Foley, fără explorare'],'AB',102,'Leziuni vezicale și uretrale',
 'Separarea conduitei Foley 7–10 zile (extraperitoneal) de repararea chirurgicală (intraperitoneal), față de uretrografia înaintea sondei.',
 ['Cistografia retroperitoneală și durata Foley sunt explicite.','Extravazarea intraperitoneală și indicația chirurgicală sunt descrise.','Triada scrotal–meat–prostată impune uretrografie înaintea Foley.','Foley în orb poate agrava o ruptură parțială până la completă.','Leziunea intraperitoneală necesită explorare și reparare, nu doar Foley.']],
 8,'Inversează tratamentul intra- versus extraperitoneal și autorizează Foley-ul orb pe uretra lezată.',['7-1 O zile','domului vezical']),

q(38,['Pentru evaluarea plăgilor penetrante ale gâtului, zonele anterioare se definesc astfel:',
 ['Zona I este inferioară cartilajului cricoid','Zona III este superioară unghiului mandibulei','Orice plagă care depășește platisma riscă vase mari, trahee, esofag sau măduvă și cere evaluări suplimentare','Șocul și semnele clare de leziune vitală în zonele I și II impun explorare chirurgicală imediată','Zona I se află deasupra unghiului mandibulei, iar platisma poate fi ignorată dacă plaga este punctiformă'],'ABCD',102,'Traumatisme penetrante ale gâtului — Zone',
 'Maparea zonei I (sub cricoid) versus III (peste unghiul mandibulei) și a pragului platisma, plus explorarea imediată la instabil.',
 ['Limita inferioară (cricoid) a zonei I este din figură/text.','Limita zonei III (unghi mandibular) este explicită.','Pragul platisma este citat.','Explorarea imediată la șoc/semne clare în I și II este descrisă.','Zona I nu este deasupra mandibulei; platisma nu se ignoră.']],
 8,'Inversează zona I cu III și anulează pragul platisma, două capcane de triaj cervical.',['cartilajul cricoid','muşchiul platisma'],[103]),

q(39,['Managementul leziunilor aerodigestive și vasculare cervicale include:',
 ['Leziunile laringelui/traheei se evaluează prin laringoscopie directă și bronhoscopie','Esofagul cervical se închide în două straturi, după debridare, cu drenaj aspirativ închis','Leziunea cea mai frecventă vasculară penetrantă este vena jugulară internă; la instabil se ligaturează','Steroizii sunt contraindicați în orice leziune a măduvei','Artera carotidă se ligaturează de principiu la pacientul cu funcție neurologică intactă'],'ABCD',103,'Gât — Aerodigestiv, vase, măduvă',
 'Combinarea închiderii esofagiene în două straturi, a ligaturii jugularei la instabil și a interdicției steroizilor, față de repararea carotidei dacă neurologia e intactă.',
 ['Cuplul laringoscopie–bronhoscopie este preferat.','Două straturi și drenajul aspirativ sunt explicite.','Frecvența VJI și ligatura la instabil sunt citate.','Contraindicația steroizilor este enunțată.','Carotida se repară când funcția neurologică este intactă sau instabilă; ligatura simplă este pentru exsanguinare fără șunt.']],
 8,'Înlocuiește repararea carotidei (neurologie intactă) cu ligatura de principiu, contrar algoritmului din text.',['venei jugulare interne','Steroizii sunt']),

q(40,['Semnele de certitudine ale unei leziuni vasculare acute de extremitate sunt:',
 ['Sângerare pulsatilă, hematom expansiv, suflu și extremitate palidă, rece, fără puls, cu sau fără parestezie sau paralizie','Hematom neexpansiv și puls doar diminuat, suficiente pentru a amâna explorarea la 72 de ore','Absența completă a durerii, care exclude ischemia','IGB normal de 0,5, considerat protector față de ocluzie','Fractura închisă fără deformare, ca echivalent de hard sign'],'A',103,'Traumatismele extremităților — Hard signs',
 'Recunoașterea celor patru hard signs care impun explorare imediată, distinct de semnele de probabilitate (hematom neexpansiv, puls diminuat).',
 ['Lista hard signs este enumerată explicit.','Hematomul neexpansiv și pulsul diminuat sunt semne de probabilitate, nu de amânare la 72 de ore.','Durerea este semn precoce de ischemie/compartiment, nu de excludere.','IGB normal este ~1, nu 0,5.','Fractura închisă nu figurează ca hard sign vascular.']],
 8,'Confundă semnele de probabilitate cu hard signs și inversează IGB-ul normal.',['hematom expansiv','sângerare pulsatilă']),

q(41,['Sindromul de compartiment al extremității se caracterizează prin:',
 ['Semnele precoce sunt durerea, parestezia și scăderea sensibilității; diminuarea pulsului este tardivă, adesea cu ischemie ireversibilă','Tratamentul este fasciotomia promptă a tuturor compartimentelor implicate','Este mai frecvent după zdrobirea gambei, cu sau fără fractură','Măsurarea directă a presiunii este utilă la comatos sau când diagnosticul e echivoc','Prezența pulsului periferic exclude sindromul și face fasciotomia inutilă'],'ABCD',104,'Sindromul de compartiment',
 'Recunoașterea pulsului păstrat ca semn tardiv (nu de excludere) și a fasciotomiei tuturor lojelor, mai ales după crush de gambă.',
 ['Secvența precoce versus puls tardiv este explicită.','Fasciotomia tuturor compartimentelor este tratamentul.','Predilecția pentru gambă/crush este citată.','Măsurarea la comatos/echivoc este descrisă.','Pulsul păstrat nu exclude; diminuarea lui e tardivă.']],
 8,'Transformă pulsul prezent în criteriu de excludere, exact capcana descrisă ca semn tardiv.',['Diminuarea pulsului','fasciotomia']),

q(42,['Mioglobinuria după rabdomioliză se gestionează prin:',
 ['Hidratare agresivă cu fluide intravenoase izotone','Alcalinizarea urinii cu bicarbonat de sodiu și diureză osmotică cu manitol, ca adjuvante','Debridarea țesuturilor necrotice, pentru a împiedica continuarea mioglobinuriei','Restricție hidrică și acidifiere urinară, pentru a precipita mioglobina în tubi','Manitolul este evitat, fiind rezervat doar hipertensiunii intracraniene'],'ABC',104,'Rabdomioliză și mioglobinurie',
 'Aplicarea trinomului hidratare izotonă – alcalinizare – manitol, plus debridare, față de acidifierea care precipită mioglobina.',
 ['Hidratarea izotonă agresivă este prima măsură.','Bicarbonatul și manitolul sunt adjuvante citate.','Debridarea este cerută pentru a opri sursa.','Mioglobina precipită tocmai în mediu acid; acidifierea agravează.','Manitolul este menționat ca diuretic osmotic adjuvant aici, nu doar în TCC.']],
 8,'Inversează pH-ul urinar (acidifiere) și scoate manitolul din algoritmul de protecție renală.',['bicarbonat de sodiu','manito I']),

q(43,['Resuscitarea gravidei traumatizate include:',
 ['Deplasarea uterului de pe cavă/aortă prin decubit lateral stâng sau drept, genunchi la piept, ori deplasare manuală la stânga','Hipervolemia fiziologică maschează semnele timpurii ale șocului, deci cristaloizii se încep și la normotensivă','Toate Rh-negativele primesc imunoglobulină Rho(D), exceptând leziunile minore la distanță de uter; 0,001 mL sânge fetal pot sensibiliza după 6 săptămâni de gestație','Cezariana peri mortem se consideră la stop matern, supraviețuirea fetală fiind raportată dacă se face la <4 minute de la pierderea semnelor vitale','Decubitul dorsal strict este preferat, uterul grăvid crescând întoarcerea venoasă prin cavă'],'ABCD',104,'Traumatismele în sarcină',
 'Combinarea deplasării uterine, a falsei reasigurări tensive, a pragului de 0,001 mL pentru RhoGAM și a ferestrei de 4 minute a cezarienei peri mortem.',
 ['Cele trei manevre de deplasare sunt enumerate.','Mascularea șocului și startul volemic la normotensivă sunt explicite.','Pragul 0,001 mL, vârsta de 6 săptămâni și excepția leziunilor distale sunt citate.','Fereastra <4 minute este menționată.','Decubitul dorsal comprimă cava; textul cere deplasarea uterului.']],
 8,'Păstrează decubitul dorsal ca „optimizare” a cavelor, inversând exact manevra de decompresie.',['0,00 I mL','<4 minute'],[105]),

q(44,['În traumatismul pediatric, particularitățile de resuscitare includ:',
 ['Banda Broselow estimează greutatea după înălțime, pentru doze și dimensiunea echipamentului','Intubația bronhiei principale drepte este o complicație frecventă, deci se verifică radiologic poziția sondei','Hipotermia se previne prin încăpere >37°C, fluide/sânge la 39°C, pături cu aer cald','O tensiune „normală pentru vârstă” atestă euvolemia, copilul necompensând prin tahicardie','Leziunile de organe solide la copilul instabil se observă nonchirurgical, fără laparotomie'],'ABC',105,'Traumatismele pediatrice — Resuscitare',
 'Aplicarea benzii Broselow, a capcanei intubației drepte și a țintelor termice 37/39°C, față de falsa reasigurare a TA.',
 ['Broselow ca standard de estimare este citat.','Verificarea radiologică pentru intubația dreaptă este descrisă.','Pragurile >37°C ambiental și 39°C pentru fluide sunt explicite.','TA se menține prin tahicardie și vasoconstricție; valoarea normală nu oglindește volumul.','Nonop este pentru copilul echilibrat hemodinamic, nu pentru instabil.']],
 8,'Reia capcana TA „normale” și extinde nonop-ul viscerelor solide la copilul instabil.',['Broselow','39°']),

q(45,['Vârstnicul traumatizat se deosebește de adultul tânăr prin:',
 ['O TA „normală” poate corespunde șocului profund; perfuzia se apreciază prin lactat seric și deficit de baze','Vârsta este cel mai puternic predictor al evoluției în fracturile costale multiple','GCS inițial poate reflecta mai degrabă afecțiuni cronice CNS decât severitatea acută','Nefronii funcționali scad cu 10% pe decadă de la 30 de ani; RFG scade de la 50 de ani cu 0,75–1 mL/min/an','Tahicardia compensatorie este constantă, beta-blocantele neinfluențând răspunsul la hipovolemie'],'ABCD',106,'Traumatismele la vârstnici',
 'Integrarea falsei normotensiuni, a vârstei ca predictor al fracturilor costale, a GCS-ului confondat și a declinului renal, față de tahicardia „garantată”.',
 ['Lactatul și deficitul de baze ca markeri, pe fond de RVS crescută, sunt explicite.','Vârsta ca cel mai puternic predictor în fracturi costale multiple este citată.','Limitarea GCS la geriatric este descrisă.','Cifrele 10%/decadă și 0,75–1 mL/min/an sunt din paragraf.','Răspunsul tahicardic lipsește adesea; medicația antihipertensivă/anti-aritmică alterează fiziologia.']],
 8,'Atribuie vârstnicului tahicardia tânărului și ignoră beta-blocantele, exact mecanismul falsei normotensiuni.',['deficitul de baze','0,75-1 mL/minut/an']),
];
