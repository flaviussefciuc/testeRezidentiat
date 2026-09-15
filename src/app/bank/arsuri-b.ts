import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-58;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('arsuri',10,pdfOffset,`arsuri-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const ARSURI_B=[
q(9,['Epidemiologia arsurilor, potrivit capitolului:',
 ['În SUA, peste 450.000 de pacienți se adresează anual serviciilor de sănătate din cauza arsurilor','Peste 3.700 decedează anual prin leziuni legate de arsuri, predominant în incendii casnice','Aproximativ 40.000 de pacienți sunt spitalizați anual','Mortalitatea anuală depășește 40.000, spitalizările fiind sub 3.700','Arsurile nu sunt considerate o problemă de sănătate publică'],'ABC',108,'Epidemiologie',
 'Reținerea triadului 450.000 prezentări / 3.700 decese / 40.000 spitalizări.',
 ['Cifra de peste 450.000 de prezentări este explicită.','Cifra de peste 3.700 de decese, predominant casnice, este citată.','Aproximativ 40.000 de spitalizări completează triada.','Cifrele sunt inversate față de text.','Textul le numește problemă majoră de sănătate publică.']],
 8,'Permutează decesele cu spitalizările, trei ordine de mărime din același paragraf.',['450.000 de pacienţi','3.700 de pacienţi']),

q(10,['Arsurile de profunzime parțială superficiale (grad II superficial) se caracterizează prin:',
 ['Piele eritematoasă cu flictene distinse din epiderm, conținut lichidian proteic din capilarele lezate','Dermul subiacent umed, care se albește la presiune, foarte dureros, nervii din dermul profund fiind intacți','Textură uscată, îngroșată, alb-cerată, cu durere redusă prin distrugerea a numeroase terminații','Escară avasculară uscată, nedureroasă, cu retracție de tip garou','Necesitatea grefării de principiu, anexele epidermale fiind distruse în toate cazurile'],'AB',109,'Profunzime — Grad II superficial',
 'Contrastarea flictenelor lichidiene și a durerii vii de la gradul II superficial față de II profund și III.',
 ['Aspectul cu flictene distinse și exudatul proteic sunt descrise.','Albeața la presiune și durerea prin nervi intacți sunt explicite.','Textura uscată alb-cerată definește gradul II profund.','Escară avasculară și garoul definesc gradul III.','Anexele pot supraviețui în arsurile parțiale, inclusiv profunde.']],
 8,'Mută semnele de II profund și III asupra II superficial, confuzia clasică de profunzime.',['flictene destinse','se albeşte la presiune']),

q(11,['În arsurile de grosime parțială, escara și vindecarea spontană:',
 ['În primele 24–48 de ore plăgile sunt acoperite de escară (țesut mort, ser coagulat, resturi); la cele superficiale detaşarea ar trebui să survine în 10–14 zile, cu „muguri” epiteliali din foliculi și glande sudoripare','Escara lipsește în arsurile parțiale, mugurii apărând în primele 2 ore','Arsurile de profunzime nedeterminată se grefează în prima oră, fără fereastră de observație','Mugurii epiteliali semnalează necroză de toată grosimea și contraindică expectanța','Detașarea escarei superficiale durează luni, identic escarei de grad III negrefate'],'A',109,'Escară și muguri epiteliali',
 'Aplicarea ferestrelor 24–48 de ore (escară) și 10–14 zile (muguri) pentru arsura parțială superficială.',
 ['Formarea escarei în 24–48 de ore și detaşarea cu muguri la 10–14 zile sunt explicite.','Escara este prezentă; mugurii nu apar în 2 ore.','Arsurile nedeterminate pot fi urmărite 10–14 zile.','Mugurii indică vindecare spontană, nu necroză totală.','Separarea conservatoare a escarei profunde durează săptămâni-luni, nu a celei superficiale.']],
 8,'Permutează 10–14 zile cu luni și tratează mugurii ca semn de grad III.',['10-14 zile','muguri'],[110]),

q(12,['Arsurile de toată grosimea (grad III) și categoria de grad IV:',
 ['Sunt acoperite de escară avasculară, uscată, nedureroasă, prin distrugerea terminațiilor nervoase','Contracția proteinelor dermice poate forma o retracție de tip garou, cu compromitere vasculară a extremității','O categorie de grad IV descrie leziunile care se extind până la os','Se albesc prompt la presiune, flictenele lichidiene fiind constante','Leziunile extensive se vindecă spontan prin anexe, grefarea fiind superfluă'],'ABC',110,'Grad III și grad IV',
 'Recunoașterea escarei insensibile, a efectului de garou și a gradului IV (până la os).',
 ['Escară uscată, avasculară, nedureroasă definește gradul III.','Retracția de tip garou este descrisă.','Gradul IV până la os este menționat.','Absența albirii și suprafața uscată sunt tipice; flictenele lichidiene țin de II superficial.','Anexele sunt distruse; leziunile extinse cer grefare.']],
 8,'Adaugă albirea și flictenele de II superficial asupra gradului III și neagă indicația de grefă.',['escară','grad patru']),

q(13,['Intoxicația cu cianură și evaluarea inhalatorie inițială:',
 ['Cianura, din arderea plasticului, se recunoaște prin acidoză metabolică persistentă care nu răspunde la resuscitarea lichidiană','Tratamentul constă în hidroxicobalamină, care colorează urina în violet închis','Bronhoscopia flexibilă este o parte importantă a evaluării inițiale a pacienților prinși în spații închise','Cianura se tratează cu Ringer lactat izolat, urina rămânând neschimbată','Bronhoscopia este contraindicată în incendii de spațiu închis, diagnosticul fiind doar clinic tardiv'],'ABC',112,'Leziuni inhalatorii — Cianură și bronhoscopie',
 'Recunoașterea acidozei refractare, a hidroxicobalaminei (urină violet) și a rolului bronhoscopiei.',
 ['Marca de acidoză persistentă este explicită.','Hidroxicobalamina și culoarea violet a urinii sunt citate.','Bronhoscopia flexibilă este cerută la spațiu închis.','Ringerul nu tratează cianura; acidoza este refractară.','Bronhoscopia face parte din evaluarea inițială, nu se amână.']],
 8,'Înlocuiește hidroxicobalamina cu cristaloizi și amână bronhoscopia, două gesturi de urgență din același paragraf.',['hidroxicobalamină','Bronhoscopia flexibilă']),

q(14,['Estimarea suprafeței arse se face corect astfel:',
 ['Doar arsurile de grosime parțială (grad 2) și de grosime totală (grad 3) se includ în %SCT; palma pacientului inclusiv degetele ≈1% SCT','Arsurile epidermice (grad I) se includ integral în formula de resuscitare','Palma examinatorului, fără degete, reprezintă 9% SCT','Regula lui 9 atribuie 1% fiecărui segment anatomic','Diagrama Lund și Browder este rezervată doar arsurilor solare'],'A',112,'Estimarea SCT — Regulă și palmă',
 'Excluderea gradului I din %SCT și folosirea palmei pacientului (cu degete) ca 1%.',
 ['Includerea doar a gradelor 2–3 și palma cu degete ≈1% sunt explicite.','Gradul I nu se include în estimarea pentru resuscitare.','Palma pacientului, cu degete, este ≈1%, nu 9%.','Regula lui 9 atribuie 9% segmentelor, nu 1%.','Lund și Browder este alternativa standard, nu un instrument pentru arsura solară.']],
 8,'Include greșit gradul I în %SCT și permută 1% (palma) cu 9% (regula).',['I% din totalul','regula lui 9'],[113]),

q(15,['Conform diagramei Lund și Browder, proporția capului este:',
 ['19% la naștere','7% la adult','9% la adult, valoare identică celei de la naștere','Identică la nou-născut și adult (13%)','Neglijabilă la copil, tot procentul fiind la membre'],'AB',113,'Diagrama Lund și Browder',
 'Aplicarea variației cu vârsta a suprafeței capului (19% la naștere versus 7% la adult).',
 ['Rândul „Cap” listează 19 la naștere.','La adult, capul este 7.','9% corespunde vârstei de 15 ani, nu adultului, și nu nașterii.','Valorile nu sunt identice; capul scade cu vârsta.','Capul copilului mic este disproporționat de mare, nu neglijabil.']],
 8,'Permutează 19% (nou-născut) cu 9% (adult), eroarea clasică de Lund-Browder.',['Cap 19','15 ani Adult']),

q(16,['Criteriile de transfer către centrul de arsuri (Tabelul 10-2) includ, pe lângă pragul de 10% SCT:',
 ['Arsurile care implică fața, mâinile, picioarele, organele genitale, perineul sau articulațiile majore','Arsurile de grad 3 la orice grupă de vârstă','Arsurile electrice, inclusiv cele prin fulger, și arsurile chimice','Leziunile inhalatorii','Arsura solară epidermică izolată, sub 5% SCT, la adultul sănătos'],'ABCD',114,'Tabelul 10-2 — Criterii de transfer',
 'Completarea pragului >10% cu localizările speciale, gradul III, electric/chimic și inhalator.',
 ['Localizările speciale sunt al doilea criteriu.','Gradul 3 la orice vârstă este al treilea.','Electricul (inclusiv fulger) și chimicul sunt criteriile 4–5.','Leziunile inhalatorii sunt criteriul 6.','Arsura epidermică solară nu figurează ca indicație de centru.']],
 8,'Extinde criteriile asupra arsurii solare și testează rândurile 2–6, nu doar pragul de 10%.',['fulger','Leziunile inhalatorii']),

q(17,['Șocul post-combustional și indicația de resuscitare formală:',
 ['În arsuri ≥15–20% SCT, pierderea capilară devine sistemică (edem generalizat și depleție a volumului circulant), fenomen numit șoc post-combustional; în general, arsurile ≥10–15% SCT cer resuscitare lichidiană formală','Șocul post-combustional apare doar sub 5% SCT','Resuscitarea formală este rezervată arsurilor epidermice izolate','Pierderea capilară rămâne strict locală chiar la 50% SCT','Edemul generalizat exclude indicația de fluide, diureticul fiind prima linie'],'A',114,'Perioada de resuscitare — Șoc post-combustional',
 'Diferențierea pragului de șoc sistemic (≥15–20%) de cel al resuscitării formale (≥10–15%).',
 ['Cele două praguri și termenul de șoc post-combustional sunt explicite.','Sub 5% nu produce șoc sistemic.','Epidermicele nu cer resuscitare formală.','La arsuri întinse pierderea capilară devine sistemică.','Fluidele, nu diureticul, tratează depleția.']],
 8,'Confundă pragul 10–15% (resuscitare) cu 15–20% (șoc sistemic) și inversează rolul diureticului.',['şoc post-combustional','I 0-15% SCT']),

q(18,['Ajustarea ratei de infuzie după formula Consensus, în exemplul din tabel:',
 ['La scăderea diurezei, rata se crește tipic cu 10–20%; majoritatea experților nu folosesc diuretic în această etapă','După diureză excesivă și stabilizare, rata se scade cu 10–15%/oră, cu monitorizarea diurezei și a semnelor vitale','La oligurie se introduce furosemid înaintea creșterii ratelor','Rata inițială nu se mai modifică după prima oră','Scăderea ratei se face cu 50%/oră imediat ce apare orice diureză'],'AB',115,'Formula Consensus — Ajustarea dinamică',
 'Aplicarea treptelor +10–20% la oligurie și −10–15%/oră la răspuns excesiv.',
 ['Creșterea cu 10–20% și evitarea diureticului sunt din exemplul tabelat.','Scăderea cu 10–15%/oră după răspuns este pasul final al exemplului.','Diureticul nu este considerat în această etapă.','Resuscitarea este un proces dinamic.','50%/oră nu este treapta citată.']],
 8,'Inversează treptele 10–20% / 10–15% și reintroduce diureticul, respins explicit în exemplu.',['10-20%','10-15%/oră']),

q(19,['Indicația de escarotomie după presiunea intramusculară:',
 ['Presiuni intramusculare măsurate >30 cm H2O, cu edem în tensiune, hipoestezie, parestezii și durere pulsatilă profundă, susțin escarotomia de membru','Escarotomia se face la presiuni <5 cm H2O, în absența simptomelor','Presiunea nu se măsoară, palparea pulsurilor distale fiind suficientă în toate cazurile','Escarotomia este rezervată arsurilor epidermice de 1% SCT','Fasciotomia înlocuiește escarotomia în toate arsurile termice superficiale'],'A',116,'Escarotomia — Pragul de 30 cm H2O',
 'Recunoașterea pragului >30 cm H2O împreună cu semnele de tensiune ca indicație de escarotomie.',
 ['Figura și textul citează excesul de 30 cm H2O plus semnele de tensiune.','<5 cm H2O nu este indicație.','Măsurarea cu ac și traductor este descrisă când semnele apar.','Epidermicele nu produc escară inextensibilă.','Fasciotomia se rezervă leziunilor foarte profunde, mai ales electrice.']],
 8,'Coboară pragul de 30 cm H2O și confundă escarotomia cu fasciotomia de rutină.',['30 cm H20','Escarotomia']),

q(20,['Grefele de piele de grosime parțială se caracterizează prin:',
 ['Se recoltează cu dermatumul până în dermul superficial, tipic 0,1–0,38 mm; zona donatoare se vindecă spontan în 7–14 zile','Grefele de toată grosimea se obțin eliptic din inghinal sau flancuri, zona donatoare închizându-se primar','Grosimea tipică a STSG este 2–3 mm, zona donatoare necerezând vindecare spontană','Autogrefa de grosime parțială nu poate acoperi o arsură excizată','Zona donatoare de STSG se închide prin lambou muscular de principiu'],'AB',117,'Autogrefe — STSG și FTSG',
 'Contrastarea STSG (0,1–0,38 mm, donator 7–14 zile) cu FTSG eliptic închis primar.',
 ['Intervalul 0,1–0,38 mm și vindecarea donatorului în 7–14 zile sunt explicite.','Recoltarea eliptică inghinală/flancuri cu sutură primară definește FTSG.','2–3 mm depășește grosimea STSG citată.','STSG este tocmai metoda de acoperire.','Donatorul STSG se vindecă spontan, nu prin lambou.']],
 8,'Permutează milimetrii STSG cu grosimi de lambou și inversează soarta zonei donatoare.',['0,1 mm - 0,38 mm','7-14 zile']),

q(21,['Când autogrefele sunt insuficiente, acoperirea temporară include:',
 ['Expandarea prin perforare (mesh); allogrefa de cadavru din băncile de piele','Piele de porc înghețată, membrană amniotică umană și materiale sintetice','Culturi de celule epidermale proprii, scumpe și fragile, dar salvatoare în arsuri majore','Doar xeno-grefa bovină proaspătă, allogrefa fiind interzisă','Culturile epidermale sunt ieftine, rezistente la infecție și înlocuiesc definitiv autogrefa'],'ABC',117,'Substitute de piele',
 'Recunoașterea mesh-ului, allogrefei, xenogrefei/amnioanului și a culturilor epidermale ca punți, nu ca înlocuitor definitiv.',
 ['Perforarea și allogrefa de cadavru sunt prima linie de substitut.','Porcul, amniosul și sinteticele sunt listate.','Culturile proprii sunt scumpe, fragile, dar salvatoare.','Allogrefa de cadavru este cel mai folosit substitut.','Culturile rămân sensibile la infecție și nu înlocuiesc autogrefa definitivă.']],
 8,'Transformă cultura epidermală în acoperire definitivă ieftină și exclude allogrefa, contrar ierarhiei din paragraf.',['allogrefa de la cadavru','culturilor de celule']),

q(22,['Antimicrobienele topice în arsura profundă:',
 ['Acetatul de mafenid (Sulfamylon) și sulfadiazina de argint au controlat multe infecții gram-negative, urmate de Pseudomonas rezistent','Antimicrobienele topice sunt eficiente doar câteva ore; înlocuirea și debridarea se fac de cel puțin două ori pe zi','Nitratul de argint a fost primul topic pe scară largă, eficient pe stafilococ și streptococ','Mafenidul se aplică o dată pe săptămână, debridarea zilnică fiind dăunătoare','Flora actuală este dominată doar de streptococ, Pseudomonas disparând complet'],'ABC',118,'Controlul infecției — Agenți topici',
 'Secvența nitrat de argint → mafenid/sulfadiazină → Pseudomonas/MRSA și ritmul de două ori pe zi.',
 ['Mafenidul și sulfadiazina, apoi Pseudomonas, sunt istoricul citat.','Eficiența de câteva ore și ritmul ≥2/zi sunt explicite.','Nitratul de argint ca prim topic pe stafilococ/streptococ este menționat.','Ritmul este de cel puțin două ori pe zi, nu săptămânal.','Textul descrie MRSA, Acinetobacter, VRE și fungi ca probleme actuale.']],
 8,'Reduce ritmul topic la o dată pe săptămână și anulează evoluția florei către gram-negativi/MRSA.',['acetatul de mafenid','două ori pe zi'],[117]),

q(23,['Suportul nutrițional la arsul major:',
 ['Metabolismul poate depăși de două ori normalul perioade lungi, cu creșterea excreției de azot','Hrănirea enterală este net superioară nutriției intravenoase; tuburile enterale se montează cât mai curând','Dieta de bază este bogată în proteine, 1,5–2,0 g/kg/zi, iar calorimetria indirectă și balanța azotată se folosesc cel puțin săptămânal','Nutriția parenterală totală este superioară celei enterale la arși','Necesarul proteic este 0,2 g/kg/zi, calorimetria fiind inutilă'],'ABC',118,'Suportul nutrițional',
 'Aplicarea hipermetabolismului ×2, a priorității enterale și a țintei 1,5–2,0 g proteine/kg/zi.',
 ['Dublarea metabolismului și azotul crescut sunt explicite.','Superioritatea enterală și montarea precoce sunt cerute.','1,5–2,0 g/kg/zi și măsurătorile săptămânale sunt principiul.','Enterala este net superioară intravenoasei.','0,2 g/kg subestimează gros; calorimetria este recomandată.']],
 8,'Inversează enteral versus parenteral și coboară proteinele de la 1,5–2,0 g/kg la 0,2 g/kg.',['1,5-2,0 g de proteine','calorimetrie indirectă'],[119]),

q(24,['La victima electrocuției, monitorizarea cardiacă:',
 ['La toate victimele se face ECG; cele cu înaltă tensiune (și joasă tensiune cu modificări ECG) se monitorizează prin telemetrie cel puțin 24 de ore','ECG-ul este superfluu dacă tegumentul este intact','Telemetria se rezervă doar arsurilor solare','Joasa tensiune cu ECG modificat nu cere monitorizare','Fibrilația ventriculară nu este mecanism de deces în electrocuție'],'A',120,'Leziuni electrice — Monitorizare cardiacă',
 'Aplicarea ECG-ului universal și a ferestrei de telemetrie de 24 de ore la înaltă tensiune sau ECG anormal.',
 ['ECG la toți și telemetrie ≥24 h la înaltă tensiune/ECG modificat sunt explicite.','Tegumentul intact nu exclude aritmia.','Arsura solară nu definește indicația.','Joasa tensiune cu ECG modificat intra în aceeași regulă.','Mulți mor prin FV sau stop indus electric.']],
 8,'Anulează ECG-ul universal și fereastra de 24 de ore, două reguli de triaj din același paragraf.',['cel puţin 24 de ore','electrocardiogramă']),

q(25,['Îngrijirea ambulatorie a arsurii minore include:',
 ['Peste 75% dintre prezentările de gardă sunt leziuni <10% SCT; la copil și vârstnic, arsura minoră este <5% SCT','Apa de robinet 12–25°C reduce dauna și durerea; gheața crește necroza în modele experimentale','Antibioticele orale nu sunt necesare pentru arsurile neinfectate','Gheața și cuburile sunt tratamentul de elecție, prelungit ore în șir','Toate arsurile <10% SCT se internează de principiu, oralul antibiotic fiind de rutină'],'ABC',120,'Arsuri minore — Răcire și antibiotice',
 'Contrastarea pragurilor <10% (general) și <5% (copil/vârstnic) cu răcirea 12–25°C versus gheață.',
 ['75% <10% SCT și pragul <5% la extremele de vârstă sunt citate.','12–25°C versus necroza indusă de gheață sunt explicite.','Absența antibioticului oral în arsura neinfectată este enunțată.','Gheața crește necroza; răcirea prelungită produce hipotermie.','Multe se gestionează ambulator; oralul nu este de rutină.']],
 8,'Promovează gheața (care crește necroza) și generalizează internarea/antibioticele asupra arsurii minore.',['12-25°C','mai puţin de 10% SCT']),

q(26,['Pragul de vindecare peste care se formează cicatrici hipertrofice este de:',
 ['Mai mult de 3 săptămâni','48 de ore','5 zile','7–14 zile, identic detaşării escarei superficiale','6 luni, pragul durerii cronice din alte capitole'],'A',121,'Cicatrici hipertrofice',
 'Recunoașterea pragului de 3 săptămâni peste care cicatricea hipertrofică și epiteliul instabil sunt așteptate.',
 ['Textul leagă vindecarea >3 săptămâni de cicatrici hipertrofice și epiteliu instabil.','48 de ore este fereastra de escară, nu de cicatrice.','5 zile subestimează pragul.','7–14 zile este detaşarea escarei superficiale, nu pragul hipertrofic.','6 luni nu este pragul citat aici.']],
 8,'Permutează 3 săptămâni cu 7–14 zile (mugurii) sau 48 de ore (escara), ferestre din același capitol.',['3 săptămâni','cicatrici hipertrofice']),

q(27,['Analgezia arsului acut se caracterizează prin:',
 ['Opioidele (morfina cea mai folosită; fentanilul cu acțiune mai scurtă) sunt baza; calea IV este preferată în resuscitare, intramusculara fiind evitată','Analgezicele sunt cele mai eficiente administrate programat, înainte ca durerea să se intensifice','Lorazepam, diazepam și midazolam sunt anxioliticii principali, adesea combinați cu opioide','Calea intramusculară este de primă intenție în resuscitare, absorbția fiind predictibilă','Benzodiazepinele înlocuiesc opioidele, durerea arsului fiind doar anxietate'],'ABC',121,'Tabelul 10-4 — Analgezie și sedare',
 'Prioritatea căii IV, evitarea IM și asocierea anxiolitică, pe fondul morfinei ca opioid de bază.',
 ['Morfina/fentanilul, IV-ul din resuscitare și evitarea IM sunt explicite.','Administrarea programată, înainte de intensificare, este cerută.','Cele trei benzodiazepine sunt listate.','IM are absorbție imprevizibilă și este evitată.','Anxioliticele se asociază, nu înlocuiesc, opioidele.']],
 8,'Reabilitează calea IM, descurajată explicit, și substituie opioidele cu benzodiazepine.',['Sulfat de morfină','administrarea intramusculară']),

q(28,['Necroliza epidermică toxică (NET), în îngrijirea din centrul de arși:',
 ['Este similară unei plăgi arse de grosime parțială și se poate vindeca fără chirurgie, cu terapie de susținere','Agenții topici sulfamidici sunt în general evitați, fiind implicați în etiologia NET','Un studiu multicentric a raportat mortalitate de 32%; factorii de risc includ vârsta >40 de ani, malignitate, descuamare >10% SCT','Sulfadiazina de argint este topicul de elecție, steroizii sistemici îmbunătățind invariabil supraviețuirea după descuamare','Mortalitatea este sub 1%, afectarea oculară fiind excepțională'],'ABC',123,'NET și SSJ',
 'Recunoașterea analogiei cu arsura parțială, a evitării sulfamidelor topice și a mortalității de 32%.',
 ['Analogia cu grosimea parțială și vindecarea fără chirurgie sunt explicite.','Evitarea topicelor sulfamidice este cerută.','32% și lista de factori (vârstă, malignitate, >10% SCT) sunt citate.','Sulfamidele se evită; steroizii nu au îmbunătățit supraviețuirea după descuamare.','Mortalitatea este 20–75% (32% în studiu); sechelele oculare ating jumătate dintre supraviețuitori.']],
 8,'Reintroduce sulfamida topică (implicată etiologic) și coboară mortalitatea de 32% sub 1%.',['azotat de argint 0,5%','mortalitate de 32%'],[122]),

q(29,['Faza de reabilitare a arsului:',
 ['Reabilitarea începe la momentul leziunii, nu după închiderea rănilor','Țesutul cicatricial rămâne inflamat și se remodelează cel puțin un an; îmbrăcămintea compresivă se poartă până la dispariția eritemului','Reabilitarea se amână până la maturarea completă a cicatricii, la 5 ani','Miofibroblastele lipsesc din cicatricea de arsură, contractura fiind imposibilă','Măștile faciale compresive la copii nu au efect asupra mandibulei'],'AB',119,'Faza de reabilitare',
 'Principiul reabilitării imediate și al remodelării de cel puțin un an sub compresie.',
 ['Începerea la momentul leziunii este subliniată (NU se așteaptă închiderea).','Remodelarea ≥1 an și durata hainelor compresive sunt explicite.','Amânarea la 5 ani contrazice principiul.','Miofibroblastele se acumulează precoce și produc contractura.','Măștile elastice prelungite tendă să deformeze mandibula la copii.']],
 8,'Amână reabilitarea după închiderea plăgii, inversul explicit al paragrafului.',['cel puţin un an','îmbrăcămintea compresivă'],[118]),

q(30,['Cele trei perioade teoretice ale îngrijirii arsului sunt:',
 ['Resuscitarea (primele 24–48 de ore)','Închiderea plăgii','Reabilitarea','Distincțiile sunt teoretice, multe aspecte ale îngrijirii se întrepătrund','Doar oxigenul hiperbar, ca unică fază terapeutică'],'ABCD',114,'Organizarea tratamentului definitiv',
 'Recunoașterea triadului resuscitare / închiderea plăgii / reabilitare și a caracterului teoretic al distincțiilor.',
 ['Resuscitarea ca primele 24–48 de ore deschide triada.','Închiderea plăgii este a doua perioadă.','Reabilitarea completează schema.','Caracterul teoretic și întrepătrunderea sunt precizate explicit.','OHB este o opțiune în CO, nu o fază de îngrijire.']],
 8,'Înlocuiește triada organizațională cu o tehnică (fascială) sau cu OHB, pe o schemă ușor de omis.',['primele 24-48 ore','reabilitarea']),
];
