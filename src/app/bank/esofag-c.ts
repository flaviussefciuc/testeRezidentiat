import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p<=142?p-60:p-68;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('esofag',12,pdfOffset,`esofag-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const ESOFAG_C=[
q(37,['Un pacient cu cancer esofagian stadializat T2 N0 M0 (stadiu IIa sau mai precoce) întreabă prognosticul. Supraviețuirea la 5 ani citată pentru stadiile incipiente, comparativ cu stadiile avansate (IIb–IV), este:',
 ['50% sau mai mare, față de sub 30% în stadiile avansate','20% în ambele, identică ratei globale după rezecție','4–5 la 100.000, confuzie cu incidența anuală','90% după neoadjuvant 10 Gy unic','Sub 10%, identică rezecției curative gastrice anglofone'],'A',152,'Stadializare TNM — Prognostic precoce vs avansat',
 'Aplicarea distincției I–IIa (≥50% la 5 ani) versus IIb–IV (<30%), față de rata globală de 20% după rezecție.',
 ['Textul precizează 50% sau mai mare pentru stadiile incipiente și <30% pentru cele avansate.','20% este rata globală după încercarea de rezecție curativă, nu cifra stadiului IIa.','4–5 la 100.000 este incidența/mortalitatea, nu supraviețuirea.','Schema neoadjuvantă citată este 45 Gy, nu 10 Gy.','<10% ține de rezecția gastrică curativă din alt capitol.']],
 8,'Permutează pragurile 50% / <30% / 20% între stadiu precoce, avansat și rata globală post-rezecție.',['50% sau mai mare','<30%']),

q(38,['Care dintre următoarele afirmații privind evaluarea paraclinică a cancerului esofagian sunt adevărate?',
 ['CT nu este suficient ca unică investigație pentru a dovedi invazia în structurile adiacente, neputând distinge reacția inflamatorie de invazia tumorală','În tumorile proximale și mediotoracice, bronhoscopia exclude invazia traheobronșică','Tranzitul baritat înlocuiește biopsia endoscopică, confirmarea histologică nefiind necesară','PET-CT este inutil pentru metastazele la distanță, ficatul și plămânii fiind scutiți','EUS nu localizează ganglionii suspecți și nu ghidează aspirația cu ac fin'],'AB',152,'Diagnostic — CT, bronhoscopie, EUS',
 'Recunoașterea limitei CT (inflamație vs invazie) și a rolului bronhoscopiei pe etajul proximal/mediotoracic.',
 ['Limita CT de a nu distinge inflamația de invazie este explicită.','Bronhoscopia pentru tumorile proximale și mediotoracice este citată.','Evaluarea endoscopică este cerută pentru confirmarea histologică.','Combinația CT+PET identifică metastazele; ficatul și plămânii sunt organele extra-ganglionare cele mai frecvente.','EUS definește profunzimea și ghidează FNA a ganglionilor adiacenți.']],
 8,'Anulează biopsia endoscopică și EUS-FNA, două trepte pe care paragraful le impune pentru stadializare.',['invazia tumorală','bronhoscopia'],[153]),

q(39,['Alegeți afirmațiile corecte referitoare la stadializarea TNM 2017 a cancerului esofagian:',
 ['CSC și adenocarcinomul sunt clasificate diferit; localizarea tumorii este folosită numai pentru stadializarea CSC','Pentru stadiile IIa sau mai incipiente există invazie locală limitată, absența ganglionilor și absența metastazelor la distanță','Adenocarcinomul ≤IIa corespunde, în tabel, unui T ≤T2 N0 M0, indiferent de grad','CSC T2–3 N0 M0 G2–3 este stadiu precoce indiferent de localizare, inclusiv pe esofagul cervical','Metastazele extra-ganglionare predilecte sunt splina și rinichiul, nu ficatul și plămânii'],'ABC',152,'TNM 2017 — Tabelul 12-3',
 'Separarea regulii de localizare (doar CSC) de criteriile ≤IIa (N0 M0) și de rândul adenocarcinom ≤T2.',
 ['Clasificarea diferențiată și folosirea localizării doar la CSC sunt explicite.','Triada invazie limitată / N0 / M0 pentru ≤IIa este citată.','Rândul adenocarcinom ≤T2 N0 M0, G oricare, este din tabel.','Pentru T2–3 N0 G2–3 stadiul ≤IIa cere localizare inferioară, nu cervicală.','Organele extra-ganglionare citate sunt ficatul și plămânii.']],
 8,'Extinde stadiul precoce T2–3 G2–3 la orice localizare, ignorând restricția „inferior” din tabel.',['stadializarea CSC','T2-3 NO MO']),

q(40,['Stomacul folosit ca grefon după esofagectomie se caracterizează prin:',
 ['După secționarea gastricei stângi și a gastrice scurte, vascularizația rămâne pe gastrica dreaptă și gastroduodenală','Piloromiotomia este deseori efectuată, vagul fiind secționat la rezecție, pentru a facilita evacuarea','Riscul de ischemie a fornixului ține de fluxul dependent de colaterale','Refluxul postoperator este mai frecvent după anastomoza intratoracică decât după cea cervicală','Gastrica stângă este păstrată ca unică sursă, piloromiotomia fiind contraindicată'],'ABCD',153,'Substitute — Stomacul ca grefon',
 'Maparea pediculului residual (gastrică dreaptă + gastroduodenală), a piloromiotomiei și a prețului (ischemie fornix, reflux toracic).',
 ['Pediculul residual este explicit.','Piloromiotomia după secțiunea vagală este citată.','Ischemia fornixului prin colaterale este descrisă.','Comparația reflux toracic versus cervical este menționată.','Gastrica stângă și scurte sunt secționate; piloromiotomia este practicată, nu interzisă.']],
 8,'Păstrează gastrica stângă și interzice piloromiotomia, inversând tocmai pregătirea grefonului gastric.',['piloromiotomie','artera gastrică dreaptă']),

q(41,['Colonul stâng ca substitut esofagian se caracterizează prin:',
 ['Este următorul cel mai frecvent utilizat după stomac; unii chirurgi îl preferă pentru lungime, anatomie vasculară și calibru similar esofagului','Se folosește izoperistaltic, pediculat pe artera colică stângă, ramură a arterei mezenterice inferioare','Colonoscopia și angiografia colonică preoperatorie verifică absența altei patologii și aportul arterial','Calea preferată de interpunere este mediastinul posterior; retrosternalul, cu traseu sinuos, crește riscul de obstrucție prin cudare la apertura toracică superioară','Se montează antiperistaltic pe AMS, angiografia fiind inutilă'],'ABCD',153,'Substitute — Colon stâng și cale retrosternală',
 'Reținerea pediculului colic stâng (AMI), a lucrărilor preoperatorii și a inferiorității căii retrosternale.',
 ['Locul 2 după stomac și criteriile de preferință sunt explicite.','Izoperistalticul pe colica stângă/AMI este citat.','Colonoscopia și angiografia sunt cerute.','Calea posterioară preferată și dezavantajul retrosternal (cudare) sunt descrise.','Sensul este izoperistaltic pe AMI, nu antiperistaltic pe AMS.']],
 8,'Inversează pediculul (AMS vs AMI) și sensul peristaltic, plus anulează angiografia preoperatorie.',['artera colică stângă','calea retrosternală']),

q(42,['Identificați afirmația corectă referitoare la jejunul ca substitut esofagian:',
 ['Este rar folosit; grefa liberă, cu anastomoză microvasculară la vasele cervicale, se rezervă unui segment scurt de esofag cervical rezecat','Este grefonul de primă intenție, stomacul fiind abandonat','Se pediculează ușor pe toată lungimea până la faringe, anatomia vasculară fiind favorabilă','Înlocuiește de rutină Ivor Lewis pentru tumorile mediotoracice T4','Se montează retrosternal antiperistaltic, identic colonului stâng'],'A',153,'Substitute — Grefă jejunală liberă',
 'Izolarea jejunului ca grefă liberă microvasculară pentru esofagul cervical scurt, nu ca substitut de primă linie.',
 ['Raritatea, grefa liberă cervicală și anastomoza microvasculară sunt explicite.','Stomacul rămâne grefonul cel mai des utilizat.','Grefa pediculată jejunală este dificilă prin anatomia vasculară nefavorabilă.','Ivor Lewis rămâne abordul transtoracic clasic, nu un substitut jejunal.','Calea retrosternală și izoperistaltismul țin de colon, nu de jejunul liber.']],
 8,'Promovează jejunul ca grefon de primă intenție, contrar frazei că este rar utilizat.',['grefă liberă','vasele cervicale']),

q(43,['Perforația esofagului cervical se recunoaște clinic și radiologic prin:',
 ['Odinofagie și durere la flexia gâtului, cu sensibilitate locală și emfizem subcutanat','Aer în spațiul retrovisceral pe radiografia cervicală, eventual pneumomediastin','Semnul ciocului de pasăre, fără emfizem, identic achalaziei','Hidrotorax stâng masiv de principiu, fără aer cervical','Stent metalic expandabil ca prim gest, drenajul fiind inutil'],'AB',156,'Perforație cervicală — Clinic și Rx',
 'Cuplarea odinofagiei/flexiei gâtului cu aerul retrovisceral, distinct de semnele achalaziei sau ale paliației oncologice.',
 ['Odinofagia, durerea la flexie, sensibilitatea și emfizemul sunt explicite.','Aerul retrovisceral și pneumomediastinul sunt citate.','Ciocul de pasăre este semnul baritat al achalaziei, nu al perforației.','Revărsatul pleural ține de perforația toracică, nu de tabloul cervical inițial.','Tratamentul este antibiotic, debridare și drenaj, nu stent paliativ de primă intenție.']],
 8,'Înlocuiește aerul retrovisceral cu ciocul de pasăre sau cu stentul paliativ, două entități din același capitol.',['odinofagie','spaţiul retrovisceral']),

q(44,['Un bărbat de 55 de ani prezintă durere toracică, detresă respiratorie și revărsat pleural la scurt timp după dilatarea unei stricturi peptice distale. Selectați enunțurile adevărate:',
 ['Perforația esofagului toracic urmează cel mai frecvent instrumentării unui esofag patologic, de obicei dilatarea unei obstrucții distale','Ruptura spontană după vărsături violente (Boerhaave) are tablou mai dramatic și prognostic mai prost prin contaminare esofago-gastrică toracică','Managementul non-operator trebuie să fie excepția, rezervat perforației limitate cervical/mediastinal la un pacient stabil','Mallory-Weiss este o ruptură transmurală identică Boerhaave, cu același prognostic','Tratamentul conservator este regula, criteriile de selecție fiind absente'],'ABC',157,'Perforație toracică — Dilatare și Boerhaave',
 'Legarea instrumentării stricturii peptice de Boerhaave-ul cu prognostic prost și de non-operator ca excepție, nu ca regulă.',
 ['Cauza (instrumentare/dilatare de strictură distală) este explicită.','Tabloul dramatic și prognosticul prost al Boerhaave sunt citate.','Non-operatorul ca excepție, cu criteriile limitat + stabil, este descris.','Mallory-Weiss nu este transmural și produce în principal hemoragie digestivă.','Textul precizează că non-operatorul este excepția, nu regula.']],
 8,'Transformă non-operatorul din excepție în regulă și identifică Mallory-Weiss cu Boerhaave.',['strictura peptică','sindromul Boerhaave']),

q(45,['Principiile tratamentului chirurgical al perforației esofagiene toracice includ:',
 ['Debridare minuțioasă, esofagorafie în două straturi (mucoasă și musculară) și consolidare, adesea cu lambou intercostal pediculat','Tratarea afecțiunii concomitente (miotomie pentru achalazie, dilatare de strictură, uneori esofagectomie pentru carcinom stenozant)','În cancer terminal: drenaj cu tub T sau stent intraluminal ca alternative','Excluderea esofagiană (capse proximal și distal, esofagostomie cervicală/fistulă salivară, jejunostomie, drenaj larg) la tarații care nu tolerează o procedură extinsă','Sutura într-un singur strat fără lambou, obstrucția distală rămânând netratată de principiu'],'ABCD',157,'Perforație toracică — Esofagorafie și excludere',
 'Escaladarea esofagorafie 2 straturi + lambou → tratarea obstacolului → T-tube/stent paliativ → excludere cu fistulă salivară.',
 ['Cele trei gesturi (debridare, două straturi, lambou) sunt explicite.','Miotomia, dilatarea și esofagectomia ca gesturi concomitente sunt citate.','Tubul T și stentul în cancerul terminal sunt descrise.','Excluderea cu fistulă salivară și jejunostomie este enumerată.','Textul cere două straturi, lambou și tratarea obstacolului rezidual.']],
 8,'Reduce reparația la un singur strat fără lambou și lasă obstacolul distal, exact ceea ce tensionază sutura.',['esofagorafia în două straturi','fistulă salivară']),

q(46,['Clasificarea herniilor hiatale se caracterizează prin:',
 ['Tipul I (alunecare) este cel mai comun și se asociază frecvent cu BRGE; joncțiunea GE alunecă în torace','Tipul III combină alunecarea cu paraesofagiana și este cea mai frecventă hernie paraesofagiană (în afară de tipul I)','Tipul IV este tipul III plus alte viscere (colon sau splină) migrate intratoracic','Tipul II păstrează joncțiunea GE intra-abdominală, cu prolaps gastric izolat prin ligament frenoesofagian slăbit','Tipul I este paraesofagiana adevărată, cu joncțiunea GE ancorată și stomacul în torace'],'ABCD',157,'Hernii hiatale — Tipurile I–IV',
 'Maparea I (alunecare/BRGE) / II (JGE abdominală) / III (combinație, cea mai frecventă paraesofagiană) / IV (colon-splină).',
 ['Predominanța tipului I și asocierea BRGE sunt explicite.','Tipul III ca combinație și ca cea mai frecventă paraesofagiană este citat în legendă.','Tipul IV cu colon/splină este descris.','Definiția tipului II (JGE conservată) este menționată.','Tipul I alunecă JGE; paraesofagiana adevărată este tipul II.']],
 8,'Inversează tipul I cu tipul II, confuzia clasică de ancorare a joncțiunii GE.',['hernie de alunecare','colonul sau splina'],[158]),

q(47,['Precizați enunțul corect privind diagnosticul herniei hiatale:',
 ['Tranzitul digestiv superior cu substanță de contrast este considerat standardul de aur pentru identificarea prezenței herniei','Radiografia toracică este inutilă, nivelul hidroaeric mediastinal fiind exclus','CT înlocuiește de rutină tranzitul, fiind cerut la fiecare pacient','Manometria anorectală confirmă hernia de tip IV','Ecografia endoscopică a sfincterului anal este investigația de primă intenție'],'A',158,'Hernii hiatale — Standard de aur',
 'Fixarea tranzitului baritat ca standard de aur, CT-ul rămânând adjunct neobligatoriu.',
 ['Fraza „standardul de aur” pentru tranzitul digestiv superior este explicită.','Radiografia poate arăta un nivel hidroaeric mediastinal sau în toracele stâng.','CT oferă detalii, dar nu este de obicei necesar.','Manometria anală nu diagnostichează hernia hiatală.','EUS anal nu este investigația descrisă.']],
 8,'Cedează standardul de aur CT-ului sau manometriei anale, două investigații din contexte vecine.',['standardul de aur','Tranzitul digestiv superior']),

q(48,['Managementul herniilor hiatale de tip I și II asimptomatice se deosebește astfel:',
 ['Tipul I poate fi asimptomatic, fără risc de încarcerare; indicația chirurgicală este de obicei dată de simptomele de BRGE','La tipul II, incidența încarcerării acute cu necroză este considerată rară; observarea atentă cu educația pacientului este o alternativă rezonabilă la chirurgia profilactică','Tipul I impune reparație de urgență prin risc de ștrangulare, identic volvulusului gastric','Tipul II se operează identic achalaziei, prin POEM, fără fundoplicatură','Observarea tipului II este interzisă, necroza fiind regula'],'AB',158,'Hernii hiatale — Tip I vs II asimptomatic',
 'Contrastul tip I (fără încarcerare, chirurgie pentru BRGE) versus tip II (necroză rară, observație acceptabilă).',
 ['Absența riscului de încarcerare la tipul I și indicația BRGE sunt explicite.','Raritatea necrozei și alternativa observației la tipul II sunt citate.','Ștrangularea este argumentul controversat al tipului II, nu al tipului I.','POEM este pentru achalazie, nu pentru hernia hiatală.','Textul consideră observația o alternativă rezonabilă, nu o interdicție.']],
 8,'Mută riscul de ștrangulare de pe tipul II pe tipul I și interzice observația pe care textul o acceptă.',['niciun risc pentru încarcerare','observarea atentă']),

q(49,['O femeie de 82 de ani, tarată, cu hernie paraesofagiană mare simptomatică, nu tolerează o operație îndelungată. În cura herniei hiatale simptomatice sunt adevărate următoarele:',
 ['Etapele cheie: reducerea completă a sacului, mobilizare toracică pentru 2–3 cm de esofag intra-abdominal, închidere fără tensiune (± plasă resorbabilă) și fundoplicatură','La vârstnicii tarați, reducerea laparoscopică plus gastropexie (suturi sau gastrostomie percutanată) este adesea suficientă','Chirurgia este indicată când există durere postprandială, disfagie, BRGE sau dispnee','Reparația se limitează la stent esofagian paliativ, fundoplicatura fiind contraindicată la simptomatici','Esofagul intra-abdominal țintă măsoară 15 cm, identic originii endoscopice'],'ABC',158,'Hernii hiatale — Pași operatori și gastropexie',
 'Aplicarea pachetului sac / 2–3 cm / plasă / fundoplicatură și a alternativei gastropexie/PEG la tarat.',
 ['Cele patru etape cheie, inclusiv 2–3 cm, sunt explicite.','Gastropexia/PEG la vârstnicul tarat este citată.','Lista de simptome care indică cura este descrisă.','Stentul paliativ ține de cancerul esofagian, nu de hernia hiatală simptomatică.','15 cm este originea endoscopică a esofagului, nu lungimea intra-abdominală țintă.']],
 8,'Permutează cei 2–3 cm intra-abdominali cu cei 15 cm de la arcada dentară.',['2-3 cm','gastropexie']),

q(50,['Achalazia, tradusă prin „eșecul relaxării”, se caracterizează clinic prin:',
 ['Disfagie progresivă la solide și apoi la lichide','Regurgitare care duce adesea, inițial, la diagnostic greșit de BRGE','Tratament curativ medicamentos care restabilește plexul Auerbach','Peristaltică păstrată cu hiperrelaxare SEI, identică sclerodermiei','Semnul hidroaeric mediastinal al herniei de tip I, fără disfagie'],'AB',159,'Achalazie — Clinic',
 'Recunoașterea disfagiei progresive solide→lichide și a confuziei inițiale cu BRGE, boala rămânând incurabilă.',
 ['Secvența solide apoi lichide este explicită.','Diagnosticul greșit de BRGE prin regurgitare este citat.','Intervențiile sunt paliative; boala nu poate fi vindecată.','Pattern-ul este eșec de relaxare SEI plus aperistalsis, nu hiperrelaxare.','Hidroaericul mediastinal ține de hernia hiatală, nu de achalazie.']],
 8,'Declară achalazia curabilă medicamentos și inversează manometria (hiperrelaxare).',['eşecul relaxării','disfagie progresivă']),

q(51,['În achalazie, în afara miotomiei Heller, sunt adevărate următoarele:',
 ['Nitrații și blocanții de calciu relaxează SEI înainte de mese, dar ameliorarea de durată lipsește aproape la toți pacienții','Dilatarea endoscopică pneumatică este cea mai eficientă intervenție nechirurgicală; efectul ține luni–ani, dar dilatațiile repetate acumulează risc de perforație','De aceea miotomia este adesea preferată la pacienții mai tineri','Injectarea de toxină botulinică în SEI are succes limitat','Dilatarea pneumatică vindecă plexul Auerbach, botox-ul fiind prima linie la tineri'],'ABCD',159,'Achalazie — Dilatare, medicamente, botox',
 'Ierarhia medicamente ineficiente durabil / pneumatic cea mai bună nechirurgicală / chirurgie la tineri / botox limitat.',
 ['Eșecul durabil al nitraților/CCB este explicit.','Statutul dilatației pneumatice și riscul cumulativ sunt citați.','Preferința pentru miotomie la tineri este descrisă.','Succesul limitat al toxinei botulinice este menționat.','Boala nu se vindecă; la tineri se preferă miotomia, nu botox-ul.']],
 8,'Pune botox-ul ca primă linie la tineri, inversând tocmai preferința pentru miotomie din cauza perforației cumulative.',['Dilatarea endoscopică pneumatică','toxinǎ botulinică'],[160]),

q(52,['Un pacient cu dureri toracice noncardiace și disfagie are manometrie de esofag hipercontractil (jackhammer). Precizați enunțul corect:',
 ['Managementul este tipic limitat la nitrați și blocanți de calciu; s-a descris și miotomia lungă cu ameliorare simptomatică','POEM cu fundoplicatură concomitentă de rutină, refluxul fiind absent','Enucleerea leiomiomului este tratamentul de primă intenție','Stent metalic expandabil cervical, identic paliației oncologice','Dilatare pneumatică a SEI de principiu, ca în achalazie, fără manometrie'],'A',160,'Peristaltism — Jackhammer și spasm distal',
 'Rezervarea nitraților/CCB (± miotomie lungă) tulburărilor spastice, distincte de Heller/POEM ale achalaziei.',
 ['Nitrații, CCB și miotomia lungă pentru spasm distal/jackhammer sunt explicite.','POEM nu asociază fundoplicatură; refluxul poate fi mare.','Enucleerea ține de leiomiom, nu de jackhammer.','Stentul paliativ este pentru cancer, nu pentru dismotilitate.','Dilatarea SEI este tratamentul achalaziei, nu al jackhammer-ului.']],
 8,'Tratează jackhammer-ul ca achalazie (dilatare SEI/POEM) sau ca leiomiom (enucleere).',['esofagul hipercontractil','jackhammer']),

q(53,['Motilitatea esofagiană ineficientă (MEI) se caracterizează prin:',
 ['Este adesea asimptomatică, dar se poate manifesta ca disfagie','Nu există un tratament cunoscut; s-au încercat prokinetice esofagiene cu oarecare succes','Definește semnul ciocului de pasăre, cu eșec de relaxare SEI','Impune esofagectomie Ivor Lewis de principiu','Este un diverticul de tracțiune mediotoracic, cu toate straturile'],'AB',160,'Peristaltism — MEI',
 'Izolarea MEI ca dismotilitate adesea silențioasă, fără tratament cert, față de achalazie și de diverticuli.',
 ['Asimptomaticul și disfagia sunt explicite.','Absența tratamentului cunoscut și tentativa prokinetică sunt citate.','Ciocul de pasăre și eșecul SEI definesc achalazia.','Ivor Lewis este pentru cancer.','Diverticulul de tracțiune este altă entitate, pe pagina următoare.']],
 8,'Confundă MEI cu achalazia (cioc de pasăre) sau cu diverticulul de tracțiune.',['motilitatea esofagiană ineficientă','medicamente prokinetice']),

q(54,['Diverticulii esofagieni de pulsiune se deosebesc de cei de tracțiune prin:',
 ['Pulsionarii sunt mai frecvenți, asociați disfuncției de motilitate, localizați proximal sau distal, și falși (fără strat muscular complet)','Tracționarii sunt de obicei mediotoracici, de la adenopatie inflamatorie, și adevărați (toate straturile); și ei asociază aproape constant dismotilitate','Zenker-ul este un diverticul de pulsiune cervical, prin relaxare necoordonată a cricofaringianului, posterior deasupra mușchiului','Tracționarii sunt falși și cervicali, iar pulsionarii adevărați mediotoracici, fără dismotilitate','Epifrenicii sunt diverticuli de tracțiune ai treimii proximale, tratați prin Nissen'],'ABC',161,'Diverticuli — Pulsiune vs tracțiune',
 'Contrastul pulsiune (fals, proximal/distal, dismotilitate) versus tracțiune (adevărat, mediotoracic, adenopatie), plus Zenker ca pulsiune cervicală.',
 ['Frecvența, sediul, caracterul fals și dismotilitatea pulsionarilor sunt explicite.','Sediul mediotoracic, adenopatia, caracterul adevărat și dismotilitatea asociată sunt citate.','Mecanismul cricofaringian și sediul posterior al Zenker sunt descrise.','Direcția fals/adevărat și sediul sunt inversate.','Epifrenicii sunt pulsionari distali, nu tracțiune proximală; Nissen nu este tratamentul.']],
 8,'Inversează fals versus adevărat și cervical versus mediotoracic între pulsiune și tracțiune.',['falşi diverticuli','diverticuli adevăraţi']),

q(55,['Un bărbat vârstnic regurgitează alimente recent înghițite și are halitoză. Diverticulul Zenker simptomatic:',
 ['Diagnosticul se confirmă prin tranzit baritat','Endoscopia nu este necesară pentru diagnostic; dacă se face, trebuie cu precauție, din risc de perforație','Tratamentul: miotomie cricofaringiană plus diverticulectomie sau diverticulopexie (inversare și fixare pentru drenaj gravitațional)','Abordările endoscopice secționează cricofaringianul cu stapler sau electrocauter, creând o esofagodiverticulostomie','Dilatarea pneumatică a SEI înlocuiește miotomia cricofaringiană, ca în achalazie'],'ABCD',161,'Diverticul Zenker — Diagnostic și diverticulopexie',
 'Completarea miotomiei cu diverticulopexie/esofagodiverticulostomie endoscopică și cu precauția endoscopiei diagnostice.',
 ['Confirmarea baritată este explicită.','Inutilitatea diagnostică a endoscopiei și riscul de perforație sunt citate.','Cuplul miotomie + diverticulectomie/pexie este descris.','Staplerul/electrocauterul și esofagodiverticulostomia sunt menționate.','Dilatarea SEI este pentru achalazie, nu pentru Zenker.']],
 8,'Înlocuiește miotomia cricofaringiană cu dilatarea SEI, două gesturi de „obstrucție” din pagini alăturate.',['halitoză','esofagodive11iculostomie']),

q(56,['Abordarea chirurgicală a diverticulului epifrenic simptomatic se face de obicei prin:',
 ['Toracotomie stângă, cu rezecția diverticulului și sutură esofagiană, urmată de dilatarea stricturii sau esomiotomie distală extinsă pentru a preveni recurența','Toracotomie dreaptă Ivor Lewis de principiu, ca în cancerul mediotoracic','Miotomie cricofaringiană izolată, identică Zenker','POEM fără evaluare manometrică','Observație, diverticulii distali neavând indicație când sunt simptomatici'],'A',161,'Diverticul epifrenic',
 'Fixarea toracotomiei stângi plus esomiotomie distală, distinctă de Ivor Lewis, Zenker și POEM.',
 ['Toracotomia stângă, rezecția și esomiotomia/dilatarea sunt explicite.','Ivor Lewis este pentru cancer, nu pentru epifrenic.','Miotomia cricofaringiană este tratamentul Zenker.','Evaluarea epifrenicului cere baritat și manometrie; POEM nu este abordul citat.','Când sunt simptomatici au indicație chirurgicală.']],
 8,'Mută epifrenicul pe toracotomie dreaptă (Ivor Lewis) sau pe miotomia cricofaringiană (Zenker).',['toracotomie stângă','esomiotomie distală']),

q(57,['Diverticulii medioesofagieni se caracterizează prin:',
 ['Sunt frecvent asociați inflamației ganglionului paratraheal din tuberculoză, histoplasmoză sau cancer pulmonar și sunt de obicei adevărați','De obicei sunt asimptomatici și nu necesită tratament','Pot fistuliza în trahee sau vase, cu simptome respiratorii și hemoragice; chirurgia excizează diverticulul, repară structura adiacentă și interpun un lambou','Pulsionarii de esofag mediu se asociază spasmului distal sau achalaziei','Sunt simptomatici în 90% și impun esofagectomie de principiu, fără lambou'],'ABCD',161,'Diverticul medioesofagian',
 'Împerecherea adenopatiei TBC/histoplasmoză/cancer cu caracterul adesea silențios și cu riscul de fistulă, plus lamboul de interpoziție.',
 ['Asocierea TBC/histoplasmoză/cancer pulmonar și caracterul adevărat sunt explicite.','Asimptomaticul și absența tratamentului de rutină sunt citate.','Fistula, reparația adiacentă și lamboul sunt descrise.','Pulsionarii mediotoracici cu spasm/achalazie sunt menționați.','De obicei nu necesită tratament; esofagectomia nu este gestul citat.']],
 8,'Forțează esofagectomia pe o leziune descrisă ca de obicei asimptomatică.',['histoplasmoză','lambou de ţesut']),

q(58,['Selectați enunțurile adevărate despre masele esofagiene benigne, în afara leiomiomului:',
 ['A doua masă benignă este chistul, în adventicea externă, cu implicare parțială a muscularei','Tumora cu celule granulare și polipul fibrovascular sunt cele mai frecvente leziuni mucoase/submucoase, de obicei pe esofagul mijlociu și distal, cu disfagie','Chistul se biopsiază de principiu prin FNA, infecția iatrogenă fiind exclusă','Leiomiomul se enuclează doar după FNA care distinge sarcomul','Polipul fibrovascular impune esofagectomie McKeown de primă intenție'],'AB',162,'Tumori benigne — Chist, granular, fibrovascular',
 'Completarea leiomiomului (deja tratat) cu chistul adventiceal și cu cuplul granular/fibrovascular muco-submucos.',
 ['Sediul adventiceal al chistului este explicit.','Granularul și fibrovascularul ca leziuni mucoase/submucoase mijlocii-distale sunt citați.','FNA/biopsia chistului riscă infecție iatrogenă și se evită.','FNA nu distinge leiomiomul de sarcom și se evită.','Enucleerea/urmărirea EUS, nu McKeown, este conduita maselor benigne.']],
 8,'Impune FNA pe chist, exact manevra care infectează și forțează rezecția.',['chistul esofagian','polipul fibrovascular']),

q(59,['Un adult după ingestie intenționată de substanță caustică. Identificați afirmațiile corecte:',
 ['Alcalinele (ex. Drano) produc vătămare esofagiană în toată grosimea peretelui, spre deosebire de acizi, care dau leziuni mai superficiale','Volumul mare de acid este limitat de arsura extremă din cavitatea bucală','Prioritate: căi aeriene, cu pregătire pentru intubație endotraheală de urgență cu fibroscop, edemul putând fi rapid','Endoscopia flexibilă se face precoce, în termen de 24 de ore, pentru a reduce riscul de perforație','Inducerea vărsăturilor este gestul de primă intenție, pentru a evacua alcalinul'],'ABCD',163,'Ingestie caustică — Alcalin vs acid, 24 de ore',
 'Contrastul transmural alcalin versus superficial acid, plus fereastra endoscopică de 24 de ore și intubația cu fibroscop.',
 ['Vătămarea transmurală alcalină versus cea superficială acidă este explicită.','Limitarea volumului de acid prin arsura bucală este citată.','Intubația de urgență cu fibroscop este descrisă.','Fereastra de 24 de ore este menționată.','Vărsăturile sunt contraindicate (a doua expunere); nu sunt prim ajutor.']],
 8,'Restaurează vărsăturile ca prim gest, inversând interdicția și contrastul alcalin/acid.',['produse alcaline','în termen de 24 de ore'],[164]),

q(60,['Plexul mienteric esofagian se caracterizează prin:',
 ['Este un plex intramural, între straturile circular și longitudinal ale muscularei propria, din fibre simpatice și parasimpatice','Controlează activitatea peristaltică; lezarea poate produce achalazie (incapacitatea SEI de a se relaxa plus absența peristalticii corpului)','Esofagul mijlociu și distal este inervat autonom prin vag și lanțul toracic simpatic','Fibrele aferente viscerale toracice superioare, pe cale simpatică, împart traiectul cu cele cardiace','Plexul se află în adventice, iar lezarea lui produce doar hiperperistaltică cu SEI hipotonic'],'ABCD',140,'Inervație — Plexul mienteric',
 'Localizarea plexului între circular și longitudinal și traducerea leziunii în achalazie (SEI neresponsiv + aperistalsis).',
 ['Sediul între circular și longitudinal este explicit.','Controlul peristalticii și definiția achalaziei prin lezare sunt citate.','Inervația mijlocie/distală vag + simpatic toracic este descrisă.','Overlap-ul aferent cu durerea cardiacă este menționat.','Plexul nu este în adventice; lezarea dă aperistalsis și eșec de relaxare SEI, nu hiperperistaltică.']],
 8,'Mută plexul în adventice și inversează efectul leziunii (hiperperistaltică vs achalazie).',['plexul mienteric','straturile musculare circular']),

q(61,['Următoarele afirmații despre tabloul clinic al tulburărilor esofagiene sunt adevărate:',
 ['Detectarea cere o anamneză meticuloasă, simptomele putând fi manifestări ale bolii în alte organe (anginǎ pectorală sau astm)','Pot fi semne ale unei probleme sistemice (boli de colagen, tulburări vasculare sau neurologice)','Durerea esofagiană este patognomonică, overlap-ul cu angina fiind exclus','Manometria anorectală este primul test, nucleul ambiguu inervând sfincterul anal','Tabloul este independent de anamneză, diagnosticul punându-se doar pe PET-CT oncologic'],'AB',142,'Tablou clinic — Anamneză',
 'Recunoașterea că simptomele esofagiene mimează angina/astmul sau trădează o boală de colagen/neurologică.',
 ['Angina și astmul ca mimetici sunt explicite.','Bolile de colagen, vasculare și neurologice sunt citate.','Textul tocmai subliniază overlap-ul, nu patognomonia.','Nucleul ambiguu inițiază deglutiția; manometria anală nu evaluează esofagul.','Anamneza este esențială; PET-CT ține de stadializarea cancerului.']],
 8,'Neagă overlap-ul angină/astm pe care paragraful îl pune la baza anamnezei.',['anginǎ pectorală','boli de colagen']),
];
