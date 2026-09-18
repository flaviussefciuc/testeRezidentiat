import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p<=142?p-60:p-68;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('esofag',12,pdfOffset,`esofag-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const ESOFAG_D=[
q(62,['Metastazarea ganglionară inițială în carcinomul esofagian este determinată, potrivit textului, de:',
 ['Localizarea tumorii','Gradul histopatologic izolat, independent de etaj','Prezența seroasei, care orientează limfa doar celiac','Doza de 45 Gy, care redefinește stațiile N','Valoarea presiunii SES, nu sediul leziunii'],'A',140,'Drenaj limfatic — Stații după etaj',
 'Recunoașterea că prima stație ganglionară urmează etajul tumoral (cervical/mediastinal/celiac), nu gradul sau fiziologia SES.',
 ['Textul precizează că metastazarea inițială în ganglionii limfatici este determinată de localizarea tumorii.','Gradul nu este prezentat ca determinant al primei stații.','Esofagul nu are seroasă; stațiile distale includ celiaci, gastrici stângi și parahiatali.','45 Gy ține de neoadjuvant, nu de cartografierea N.','Presiunea SES este un reper fiziologic, nu un ghid de metastazare.']],
 8,'Mută determinantul stației N de pe etajul tumoral pe grad, seroasă sau iradiere.',['metastazarea iniţială','localizarea tumorii']),

q(63,['Cele două sfinctere funcționale ale esofagului se caracterizează prin:',
 ['SES este situat la nivelul mușchiului cricofaringian','SEI este situat între esofag și stomac','Ambele sunt localizate în esofagul mijlociu, la arcul aortic','SES coincide cu hiatusul diafragmatic, SEI cu C6','Nu există sfinctere funcționale, doar cele trei îngustări anatomice'],'AB',140,'Anatomie — SES și SEI',
 'Separarea SES (cricofaringian) de SEI (joncțiunea eso-gastrică), față de cele trei îngustări de impactare.',
 ['Sediul SES pe cricofaringian este explicit.','Sediul SEI între esofag și stomac este citat.','Arcul aortic este o zonă de îngustare, nu un sfincter.','C6 și diafragmul sunt originile/terminarea esofagului, nu inversarea sfincterelor.','Textul enumeră explicit două sfinctere funcționale.']],
 8,'Permutează SES/SEI pe arc aortic sau pe hiatus, confundându-le cu îngustările de impactare.',['sfincter esofagian','muşchiului cricofaringian']),

q(64,['Spre deosebire de esofagul căptușit scuamos, stomacul proximal se caracterizează histologic prin:',
 ['Mucoasă gastrică bogată în celule oxintice','Epiteliu scuamos stratificat nekeratinizant pe tot fornixul','Absența mucoasei, adventicea fiind în contact cu lumenul','Un strat seros dublu care lipsește esofagului distal','Fibre striate pe toată lungimea, identic treimii esofagiene proximale'],'A',141,'Histologie — Mucoasă oxintică proximală',
 'Contrastul epiteliu scuamos esofagian versus mucoasa oxintică a stomacului proximal, ca reper al joncțiunii.',
 ['Textul precizează că stomacul proximal este căptușit cu mucoasă gastrică bogată în celule oxintice.','Epiteliul scuamos nekeratinizant căptușește esofagul, nu fornixul.','Mucoasa există; adventicea este stratul esofagian extern.','Esofagul nu are seroasă; stomacul are.','Fibrele striate țin de 1/3 esofagiană proximală, nu de stomac.']],
 8,'Atribuie stomacului proximal epiteliu scuamos sau musculară striată, două trăsături esofagiene.',['celule oxintice','epiteliul scuamos']),

q(65,['Un pacient cu tumoră esofagiană proximală, după gastrectomie anterioară. Jejunul ca substitut esofagian:',
 ['Este folosit ocazional ca grefă liberă, mai ales când se rezecează un segment scurt de esofag cervical','Grefa liberă se interpune între segmentele esofagiene, cu anastomoză microvasculară a vaselor jejunale la vasele cervicale','O grefă jejunală pediculată este dificil de creat din cauza anatomiei vasculare nefavorabile','Reconstrucția Roux-en-Y poate fi folosită când gastrectomia totală este combinată cu esofagectomia distală','Jejunul este grefonul de primă alegere, pediculat pe artera colică stângă, fără microanastomoză'],'ABCD',153,'Substitute — Jejun liber și Roux',
 'Reținerea jejunului ca grefă liberă cervicală microvasculară și a Roux-en-Y după gastrectomie totală plus esofagectomie distală.',
 ['Utilizarea ocazională ca grefă liberă pe segment cervical scurt este explicită.','Anastomoza microvasculară jejunal–cervicală este citată.','Dificultatea grefei pediculate prin anatomie vasculară nefavorabilă este descrisă.','Montajul Roux-en-Y în combinația gastrectomie totală + esofagectomie distală este menționat.','Grefonul de primă alegere este stomacul; colica stângă ține de colonul stâng.']],
 8,'Pune jejunul pe pediculul colic stâng, confundând substitutul jejunal cu interpoziția de colon.',['grefă liberă','anastomoza microvasculară']),

q(66,['Pentru o tumoră esofagiană distală extinsă în stomac, cu boală avansată local, unii autori propun:',
 ['Incizie toraco-abdominală stângă, care permite rezecție extinsă en-block','Toracotomie dreaptă Ivor Lewis, anastomoza fiind cervicală de principiu','Doar abord transhiatal, stomacul invadat contraindicând toracotomia','McKeown fără timp abdominal, tumora fiind distală','Interpoziție jejunală liberă cervicală, fără rezecție gastrică'],'A',153,'Abord — Toraco-abdominal stâng',
 'Recunoașterea inciziei toraco-abdominale stângi ca soluție de rezecție en-block când tumora distală invadează stomacul.',
 ['Incizia toraco-abdominală stângă și beneficiul en-block sunt explicite.','Ivor Lewis are anastomoză în hemitoracele drept, nu cervicală.','Invazia gastrică orientează spre rezecție extinsă, nu spre interdicția toracotomiei.','McKeown adaugă timp cervical pentru tumori proximale/mediotoracice.','Grefa jejunală liberă este pentru segment cervical scurt.']],
 8,'Înlocuiește toraco-abdominalul stâng cu Ivor Lewis cervical sau cu grefă jejunală, două aborduri de etaj greșit.',['incizie toraco-abdominală stângă','rezecţie extinsă']),

q(67,['Argumentele împotriva esofagectomiei transhiatale, în afara tensiunii anastomozei cervicale, includ:',
 ['Acces limitat în cazul unei hemoragii necontrolate','Rezecție limitată a tumorilor mari care invadează țesutul periesofagian','Superioritate oncologică dovedită față de Ivor Lewis în toate RCT','Interdicția la tumorile distale pe esofag Barrett','Obligația anastomozei intratoracice, toracotomia fiind inevitabilă'],'AB',153,'Transhiatal — Limite de acces și rezecție',
 'Cântărirea riscului hemoragic (disecție oarbă) și a rezecției incomplete pe tumori mari invadante, fără a relua fistula cervicală deja chestionată.',
 ['Accesul limitat la hemoragia necontrolată este explicit.','Rezecția limitată a tumorilor mari periesofagiene este citată.','Textul nu proclamă superioritate RCT a transhiatalului.','Transhiatalul pare ideal tocmai pentru tumorile distale/Barrett.','Transhiatalul evită toracotomia și anastomoza intratoracică.']],
 8,'Transformă transhiatalul în abord oncologic absolut sau îi atribuie anastomoza toracică pe care tocmai o evită.',['acces limitat','hemoragii necontrolate'],[154]),

q(68,['Avantajele stomacului ca grefon și dezavantajele colonului stâng includ:',
 ['Vascularizație bogată, mobilizare facilă pe pedicul și necesar redus de anastomoze','Colonul este mai rezistent la refluxul acid decât stomacul','Colonul cere două anastomoze suplimentare și experiență tehnică mai mare pentru vascularizație','Stomacul cere angiografie colonică de rutină, colonul fiind scutit de colonoscopie','Colonul se folosește antiperistaltic pe AMS, stomacul păstrând gastrica stângă'],'ABC',153,'Substitute — Avantaje stomac vs colon',
 'Contrastul „puține anastomoze / vascularizație bogată” al stomacului cu rezistența la acid și prețul tehnic (două anastomoze, angiografie) ale colonului.',
 ['Cele trei avantaje gastrice sunt explicite.','Rezistența colonului la refluxul acid este citată.','Cele două anastomoze suplimentare și experiența vasculară sunt descrise.','Colonoscopia și angiografia colonică sunt cerute pentru colon, nu pentru stomac.','Colonul e izoperistaltic pe colica stângă/AMI; gastrica stângă se secționează.']],
 8,'Inversează lucrările preoperatorii (angiografie pe stomac) și pediculul colonic (AMS vs AMI).',['vascularizaţia sa bogată','refluxul acid']),

q(69,['Procedura McKeown, față de Ivor Lewis:',
 ['Adaugă un al treilea timp, incizia cervicală, cu anastomoză esofago-gastrică cervicală','Este descrisă pentru tumorile care implică esofagul proximal sau mediotoracic','Oferă margini proximale mai largi prin rezecție esofagiană proximală mai extinsă','Consecințele unei fistule anastomotice cervicale sunt mai puțin severe decât ale uneia intratoracice','Anastomoza rămâne în hemitoracele drept, timpul cervical fiind doar de drenaj, fără anastomoză'],'ABCD',153,'Tehnici — McKeown versus Ivor Lewis',
 'Adăugarea timpului cervical (anastomoză + margini + fistula mai „iartă”) ca distincție față de Ivor Lewis, pe indicația proximală/mediotoracică.',
 ['Al treilea timp și anastomoza cervicală sunt explicite.','Indicația proximală/mediotoracică este citată.','Marginile proximale mai largi sunt descrise.','Severitatea mai mică a fistulei cervicale este menționată.','Anastomoza McKeown este cervicală, nu rămâne în hemitoracele drept.']],
 8,'Lasă anastomoza McKeown în hemitoracele drept, anulând tocmai timpul cervical care o definește.',['triplu abord','anastomoze esofago-gastrice']),

q(70,['Pe măsură ce tubul gastric este retras prin cervicotomie, textul subliniază urmărirea laparoscopică pentru a preveni:',
 ['Răsucirea, ruptura sau tensionarea inadecvată a grefonului','Ischemia fornixului prin păstrarea gastricei stângi','Obstrucția prin cudare retrosternală, calea posterioară fiind abandonată','Necesitatea piloromiotomiei, vagul rămânând intact','Plasarea grefei jejunale libere fără microanastomoză'],'A',155,'Transhiatal — Traiectul grefonului gastric',
 'Recunoașterea triadei răsucire/ruptură/tensiune ca riscuri de tracțiune a stomacului spre gât, ilustrate în figura 12-16.',
 ['Cele trei accidente de tracțiune sunt explicite în legendă.','Gastrica stângă se secționează; ischemia fornixului ține de colaterale, nu de păstrarea ei.','Calea mediastinală posterioară este preferată, nu abandonată.','Vagul este secționat; piloromiotomia este deseori practicată.','Grefa jejunală liberă nu este subiectul figurii.']],
 8,'Înlocuiește triada de tracțiune cu păstrarea gastricei stângi sau cu calea retrosternală, două erori de grefon.',['răsucirea, ruptura','tensionarea inadecvată']),

q(71,['Stenturile metalice expandabile paliative, față de tuburile rigide din plastic:',
 ['Le-au înlocuit pentru paliația leziunilor stenozante și au efect imediat','Simptomele obstructive pot reapărea în câteva luni, necesitând reintervenție','Complicațiile includ migrarea stentului, impactarea alimentelor și perforația esofagiană','Necesită expertiză pentru alegerea dimensiunii și plasarea adecvată','Sunt abandonate, laserul având risc zero de perforație și efect permanent'],'ABCD',156,'Paliație — Stent expandabil',
 'Efectul imediat al stentului expandabil, temperat de recurența la luni și de triada migrare/impactare/perforație.',
 ['Înlocuirea tuburilor de plastic și efectul imediat sunt explicite.','Recurența la câteva luni este citată.','Cele trei complicații sunt enumerate.','Nevoia de expertiză dimensională/pozițională este descrisă.','Laserul are risc ridicat de perforație; chirurgia paliativă e rar indicată.']],
 8,'Declară laserul fără perforație și stentul abandonat, inversând ierarhia paliativă a paragrafului.',['Stenturile metalice expandabile','migrarea stentului']),

q(72,['Un bărbat după EES prezintă odinofagie și durere la flexia gâtului. Perforația esofagului cervical:',
 ['Poate fi diagnosticată pe radiografie cervicală simplă prin aer în spațiul retrovisceral, eventual cu pneumomediastin','Sensibilitatea locală și emfizemul subcutanat pot fi prezente','Tranzitul baritat poate fi negativ în până la 20% din cazuri, deci indicația operatorie se poate baza pe clinică și radiografie simplă','Abordul este o incizie cervicală pe partea leziunii, cu drenaj și debridare a spațiului retrovisceral','Sutura primară este sine qua non, drenajul singur nepermițând vindecarea'],'ABCD',156,'Perforație cervicală — Clinic, Rx, abord',
 'Cuplarea odinofagiei/flexiei cu aerul retrovisceral și cu falsul negativ 20% al bariului, plus incizia ipsilaterală.',
 ['Aerul retrovisceral ± pneumomediastin este explicit.','Sensibilitatea și emfizemul sunt citate.','Rata de 20% fals negativ este descrisă.','Incizia pe partea leziunii și debridarea retroviscerală sunt menționate.','Sutura primară se poate încerca, dar nu este obligatorie; vindecarea urmează drenajului, NPO și absenței obstacolului distal.']],
 8,'Transformă sutura cervicală din opțiune în condiție de vindecare, contrar frazei despre drenajul adecvat.',['spaţiul retrovisceral','odinofagie'],[157]),

q(73,['Dacă perforația cervicală se asociază cu o leziune traheală, textul recomandă:',
 ['Un lambou muscular pediculat pentru a preveni formarea fistulelor eso-traheale','Stent esofagian expandabil de primă intenție, lamboul fiind inutil','Esofagectomie transhiatală de principiu, fără drenaj cervical','Sutură traheală simplă, spațiul retrovisceral fiind lăsat nedrenat','Gastroplastie Collis, fistula ținând de esofagul scurt'],'A',156,'Perforație cervicală — Lambou anti-fistulă',
 'Recunoașterea lamboului muscular pediculat ca barieră anti-fistulă eso-traheală, distinctă de stent, Collis sau transhiatal.',
 ['Lamboul muscular pediculat anti-fistulă este explicit.','Stentul paliativ nu este gestul descris pentru leziunea traheală asociată.','Abordul este cervical cu drenaj, nu transhiatal oncologic.','Spațiul retrovisceral trebuie drenat.','Collis tratează esofagul scurt din BRGE, nu fistula eso-traheală.']],
 8,'Înlocuiește lamboul anti-fistulă cu Collis sau cu transhiatal, două proceduri de alt capitol al esofagului.',['lambou muscular','fistulelor eso-traheale']),

q(74,['Managementul non-operator al perforației esofagiene toracice, potrivit textului:',
 ['Ar trebui să fie excepția, nu regula, și cere perforație limitată cervical sau mediastinal plus pacient stabil clinic','Include antibiotice, drenaj nazo-gastric și alimentație enterală distal de leziune sau nutriție parenterală','Este regula la Boerhaave, contaminarea toracică fiind bine tolerată','Înlocuiește debridarea și esofagorafia în două straturi la orice perforație toracică instabilă','Se bazează pe inducerea vărsăturilor pentru a evacua conținutul mediastinal'],'AB',157,'Perforație toracică — Conservator ca excepție',
 'Limitarea expectativei la perforația circumscrisă la pacient stabil, față de Boerhaave și de instabilul care cere sutură în două straturi.',
 ['Excepția (limitare cervicală/mediastinală + stabilitate) este explicită.','Pachetul antibiotic + SNG + nutriție distală/NPT este citat.','Boerhaave are prognostic mai prost prin contaminare toracică largă.','Principiile chirurgicale (debridare, esofagorafie două straturi) rămân regula.','Vărsăturile țin de etiologia Boerhaave, nu de tratament.']],
 8,'Face din conservator regula Boerhaave, inversând tocmai indicația de excepție a paragrafului.',['managementul non-operator','pacient stabil clinic']),

q(75,['Principiile reparației chirurgicale a perforației esofagiene toracice includ:',
 ['Debridare minuțioasă a țesuturilor infectate','Esofagorafie în două straturi a mucoasei și muscularei','Consolidarea suturii, adesea cu un lambou intercostal pediculat','Tratarea patologiei concomitente (miotomie pentru acalazie, dilatarea stricturilor, esofagectomie pentru carcinom stenozant)','Lăsarea obstacolului distal netratat, tensiunea suturii fiind fără consecințe'],'ABCD',157,'Perforație toracică — Esofagorafie și patologie concomitentă',
 'Pachetul debridare + sutură mucoasă/musculară + lambou intercostal, plus tratarea obstacolului care ar tensiona sutura.',
 ['Debridarea minuțioasă este explicită.','Esofagorafia în două straturi este citată.','Lamboul intercostal pediculat este descris.','Miotomia, dilatarea și esofagectomia ca gesturi concomitente sunt enumerate.','Obstacolul rezidual tensionază sutura și trebuie tratat.']],
 8,'Lasă obstacolul distal netratat, exact factorul pe care textul îl incriminează pentru eșecul suturii.',['esofagorafia în două straturi','lambou intercostal']),

q(76,['Excluderea esofagiană la pacientul tarat, care nu tolerează o procedură extinsă, se realizează prin:',
 ['Izolarea porțiunii lezate prin suturi/capse proximal și distal de perforație','Drenaj cervical prin fistulă salivară (esofagostomie cervicală)','Jejunostomie de alimentație, drenaj larg și debridare locală','După recuperare, recanalizare spontană de-a lungul liniei de sutură sau reconstrucție cu grefon','Anastomoză Ivor Lewis de principiu, excluderea fiind abandonată la tarat'],'ABCD',157,'Perforație — Excludere esofagiană',
 'Secvența izolare proximal/distal + fistulă salivară + jejunostomie, cu reconstrucție ulterioară, ca alternativă la reparația extinsă.',
 ['Izolarea cu capse proximal și distal este explicită.','Fistula salivară cervicală este citată.','Jejunostomia și drenajul larg sunt descrise.','Recanalizarea sau reconstrucția ulterioară sunt menționate.','Excluderea este tocmai pentru taratul care nu tolerează procedura extinsă.']],
 8,'Pune Ivor Lewis ca gest de excludere la tarat, inversând indicația de salvare a paragrafului.',['fistulă salivară','esofagostomie ce1vicală']),

q(77,['Radiografia toracică și standardul de aur în hernia hiatală se caracterizează prin:',
 ['Rx poate arăta un nivel hidroaeric în mediastin sau în toracele stâng, determinat de hernierea stomacului','Tranzitul digestiv superior cu contrast este considerat standardul de aur pentru identificarea herniei','CT poate oferi detalii anatomice suplimentare, dar nu este de obicei necesar','Hernia de tip I nu are risc de încarcerare; indicația operatorie e de regulă dată de simptomele de BRGE','CT înlocuiește tranzitul baritat ca standard de aur, Rx fiind inutilă'],'ABCD',158,'Hernii hiatale — Diagnostic imagistic',
 'Ierarhia Rx (nivel hidroaeric) → baritat (standard de aur) → CT (opțional), plus absența riscului de încarcerare în tipul I.',
 ['Nivelul hidroaeric mediastinal/stâng este explicit.','Tranzitul digestiv superior ca standard de aur este citat.','Rolul opțional al CT este descris.','Absența riscului de încarcerare în tipul I și indicația pe BRGE sunt menționate.','Baritatul rămâne standardul; CT nu îl înlocuiește de rutină.']],
 8,'Pune CT-ul deasupra baritatului ca standard de aur, contrar frazei explicite a paragrafului.',['standardul de aur','nivel hidroaeric']),

q(78,['Etapele cheie ale curei chirurgicale a herniei hiatale simptomatice includ:',
 ['Reducerea completă a sacului de hernie','Mobilizarea esofagului toracic pentru o lungime intraabdominală de 2–3 cm','Închiderea fără tensiune a defectului diafragmatic, cu sau fără plasă resorbabilă','Fundoplicatură','Observația fără fundoplicatură, plasa neresorbabilă fiind regula la tipul I asimptomatic'],'ABCD',158,'Hernii hiatale — Pași operatori',
 'Secvența sac → 2–3 cm esofag intraabdominal → crurorafie ± plasă resorbabilă → fundoplicatură.',
 ['Reducerea completă a sacului este explicită.','Lungimea intraabdominală 2–3 cm este citată.','Închiderea fără tensiune ± plasă resorbabilă este descrisă.','Fundoplicatura este menționată ca etapă cheie.','Tipul I asimptomatic nu se operează profilactic pentru încarcerare; plasa citată este resorbabilă.']],
 8,'Anulează fundoplicatura și impune plasă neresorbabilă pe tipul I asimptomatic, două inversări de etapă.',['2-3 cm','plasă resorbabilă']),

q(79,['Hernia hiatală de tip III, potrivit figurii 12-18:',
 ['Migrația în torace atât a joncțiunii gastroesofagiene, cât și a stomacului','Este cea mai frecventă hernie paraesofagiană, în afară de tipul I','Tipul IV este un tip III plus alte viscere abdominale migrate intratoracic','Joncțiunea rămâne ancorată în abdomen, doar stomacul alunecând prin ligamentul frenoesofagian','Este identică tipului I, fără componentă paraesofagiană'],'ABC',158,'Hernii hiatale — Tip III versus II și IV',
 'Definirea tipului III ca alunecare + paraesofagiană (cea mai frecventă paraesofagiană după tipul I) și a tipului IV ca III plus viscere.',
 ['Migrația JGE + stomac este explicită în legendă.','Statutul de cea mai frecventă paraesofagiană (în afară de tipul I) este citat.','Tipul IV ca III plus alte viscere este descris.','JGE ancorată cu prolaps gastric izolat definește tipul II.','Tipul III combină alunecarea cu componenta paraesofagiană.']],
 8,'Reduce tipul III la tipul II (JGE intra-abdominală) sau la tipul I pur, două confuzii de clasificare.',['cea mai f','hernie paraesofagiană'],[157]),

q(80,['Dilatarea endoscopică pneumatică cu balon în achalazie:',
 ['Este cea mai eficientă intervenție nechirurgicală disponibilă','Poate avea efect de la câteva luni la câțiva ani, dar deseori sunt necesare dilatații repetate','Din cauza riscului cumulativ de perforație prin dilatații repetate, miotomia este adesea preferată la pacienții mai tineri','Injectarea de toxină botulinică în SEI a fost folosită, dar cu succes limitat','Oferă vindecare definitivă, botox-ul înlocuind miotomia la tineri'],'ABCD',159,'Achalazie — Dilatare pneumatică versus tineri',
 'Recunoașterea dilatării pneumatice ca cea mai eficientă opțiune nechirurgicală, cu recurență și risc cumulativ care orientează tinerii spre miotomie.',
 ['Textul numește dilatarea pneumatică cea mai eficientă opțiune nechirurgicală.','Durata luni–ani și nevoia de repetare sunt explicite.','Preferința pentru miotomie la tineri din cauza riscului cumulativ de perforație este citată.','Succesul limitat al toxinei botulinice este menționat.','Boala nu poate fi vindecată; intervențiile sunt paliative, iar la tineri se preferă miotomia, nu botox-ul.']],
 8,'Declară dilatarea curativă și botox-ul substitut al Heller la tineri, două afirmații pe care paragraful le neagă.',['dilatarea SEI cu balonul','riscul cumulativ de perforaţie'],[160]),

q(81,['Identificați afirmația corectă referitoare la lungimea miotomiei Heller laparoscopice ilustrate:',
 ['Accentul se pune pe o miotomie de 5 cm, cu 2–3 cm la nivelul stomacului, pentru a preveni miotomia incompletă','Miotomia se oprește la JGE, cei 5 cm gastrici fiind contraindicați','Se rezecă 15 cm de esofag, ca în Collis','Se practică doar POEM, fundoplicatura concomitentă fiind regula procedurii','Se limitează la fibrele longitudinale, circulara fiind prezervată'],'A',161,'Heller — 5 cm plus 2–3 cm gastric',
 'Memorarea lungimii totale de 5 cm cu 2–3 cm gastrici ca prevenție a miotomiei incomplete, cheia fiind prezervarea mucoasei.',
 ['Cifrele 5 cm și 2–3 cm gastrici sunt explicite în legendă.','Extinderea pe stomac este cerută, nu contraindicată.','Collis alungește esofagul scurt, nu este Heller.','POEM nu asociază fundoplicatură; Heller adesea da.','Se incizează circulara după depărtarea longitudinalelor, mucoasa rămânând intactă.']],
 8,'Oprește miotomia la JGE sau o confundă cu Collis/POEM, ratând lungimea gastrică 2–3 cm.',['miotomie de 5 cm','2-3 cm la nivelul stomacului']),

q(82,['Tulburările esofagiene spastice (spasm distal și esofag jackhammer) se prezintă și se gestionează astfel:',
 ['De obicei cu disfagie și dureri toracice noncardiace','Managementul este tipic limitat la nitrați și blocanți ai canalelor de calciu','S-a descris și miotomia lungă, cu ameliorarea simptomatologiei','MEI are tratament curativ standard prin Heller 5 cm, fără prokinetice','Manometria este inutilă, diagnosticul punându-se doar pe ciocul de pasăre'],'ABC',160,'Motilitate — Spasm distal și jackhammer',
 'Cuplarea tabloului (disfagie + durere noncardiacă) cu nitrați/CCB și cu miotomia lungă, distinctă de MEI și de achalazie.',
 ['Disfagia și durerea toracică noncardiacă sunt explicite.','Nitrații și CCB ca management tipic sunt citați.','Miotomia lungă cu ameliorare este descrisă.','MEI nu are tratament cunoscut; s-au încercat prokinetice, nu Heller de principiu.','Ciocul de pasăre este al achalaziei; spasticele se evaluează manometric.']],
 8,'Atribuie Heller-ul de achalazie MEI/spasmului și anulează manometria, două confuzii de clasă motilă.',['esofagul jackhammer','miotomia lungă']),

q(83,['Diverticulul Zenker, dincolo de miotomia cricofaringiană, se caracterizează anatomic și endoscopic prin:',
 ['Apare posterior, într-o zonă de slăbiciune la tranziția hipofaringe–esofag, imediat deasupra mușchiului cricofaringian','Este cauzat de relaxarea necoordonată sau inadecvată a cricofaringianului la deglutiție','Endoscopia nu este necesară pentru diagnostic, dar dacă se face trebuie cu precauție, din cauza riscului de perforație','S-au descris abordări endoscopice cu stapler sau electrocauter, creând o esofagodiverticulostomie','Este un diverticul adevărat de tracțiune medioesofagian, pe adenopatie TBC'],'ABCD',161,'Zenker — Killian, endoscopie, stapler',
 'Localizarea posterioară deasupra cricofaringianului, precauția endoscopică și esofagodiverticulostomia cu stapler, distincte de diverticulul de tracțiune.',
 ['Zona de slăbiciune posterioară deasupra cricofaringianului este explicită.','Relaxarea necoordonată/inadecvată este citată.','Precauția endoscopică pentru perforație este descrisă.','Staplerul/electrocauterul cu esofagodiverticulostomie sunt menționate.','Zenker este diverticul de pulsiune cervical, fals, nu adevărat medioesofagian.']],
 8,'Mută Zenker-ul pe etajul medioesofagian de tracțiune TBC, inversând clasa și sediul.',['relaxarea necoordonată','esofagodive11iculostomie']),

q(84,['Toracotomia stângă pentru diverticulul epifrenic simptomatic, plus gestul distal anti-recidivă, constă în:',
 ['Toracotomie stângă, cu rezecția diverticulului și sutură esofagiană, urmată de dilatația stricturii sau esomiotomie distală extinsă pentru a preveni recurența','McKeown cu anastomoză cervicală de principiu','Doar dilatare pneumatică a SES, fără rezecție','Esofagectomie Ivor Lewis de rutină, ca în cancer','Diverticulostomie endoscopică identică Zenker, fără miotomie distală'],'A',161,'Diverticul epifrenic — Toracotomie stângă',
 'Recunoașterea toracotomiei stângi plus miotomie/dilatare distală ca prevenție a recurenței, distinctă de Zenker și de esofagectomie.',
 ['Toracotomia stângă, rezecția, sutura și miotomia/dilatarea distală sunt explicite.','McKeown este pentru cancer proximal/mediotoracic.','SES nu este ținta; disfuncția este a SEI.','Ivor Lewis este oncologic, nu tratamentul diverticulului epifrenic.','Esofagodiverticulostomia endoscopică este descrisă la Zenker.']],
 8,'Înlocuiește toracotomia stângă + esomiotomie cu Ivor Lewis sau cu staplerul de Zenker.',['toracotomie stângă','esomiotomie distală']),

q(85,['Diverticulii medioesofagieni adevărați se asociază frecvent cu:',
 ['Inflamația ganglionului paratraheal din tuberculoză, histoplasmoză sau cancer pulmonar','Posibilitatea de a fistuliza în trahee sau în vasele adiacente, cu simptome respiratorii și hemoragice','Tratament chirurgical prin excizie, repararea structurii adiacente și lambou de țesut interpus','Obligația esofagectomiei Ivor Lewis la orice diverticul asimptomatic','Originea în relaxarea inadecvată a cricofaringianului, identic Zenker'],'ABC',161,'Diverticul medioesofagian — TBC, fistulă, lambou',
 'Legarea diverticulului adevărat medioesofagian de adenopatia paratraheală (TBC/histoplasmoză/cancer pulmonar) și de fistula traheală/vasculară.',
 ['Asocierea cu adenopatia paratraheală TBC/histoplasmoză/cancer pulmonar este explicită.','Fistula în trahee sau vase este citată.','Excizia, repararea structurii adiacente și lamboul interpus sunt descrise.','De obicei sunt asimptomatici și nu necesită tratament.','Cricofaringianul definește Zenker-ul cervical, nu diverticulul mediu.']],
 8,'Forțează Ivor Lewis pe diverticulul asimptomatic și îl mută pe cricofaringian, două etaje greșite.',['histoplasmoză','lambou de ţesut']),

q(86,['Tumora cu celule granulare și polipul fibrovascular, ca leziuni mucoase/submucoase esofagiene:',
 ['Sunt cele mai frecvente leziuni mucoase/submucoase; majoritatea apar pe esofagul mijlociu și distal și se prezintă frecvent cu disfagie','Tranzitul baritat arată o masă cu contur neted, bine definit, care ocupă lumenul','Evaluarea include vizualizare endoscopică directă și ecoendoscopie','Leiomiomul este a doua masă, localizat în adventice, FNA fiind diagnosticul de elecție','Sunt diverticuli de pulsiune cervicali, tratați prin miotomie cricofaringiană'],'ABC',162,'Mase benigne — Granular și fibrovascular',
 'Clasarea tumorii granulare și a polipului fibrovascular ca leziuni mucoase/submucoase mijlocii-distale, cu baritat neted și EUS, distincte de leiomiom.',
 ['Frecvența, sediul mijlociu/distal și disfagia sunt explicite.','Masa netedă, bine definită, ocupând lumenul este citată.','Endoscopia și EUS sunt descrise.','Leiomiomul este cea mai frecventă tumoră benignă, în musculară; FNA se evită.','Nu sunt diverticuli; Zenker se tratează prin miotomie cricofaringiană.']],
 8,'Confundă leziunile mucoase cu leiomiomul (FNA) sau cu Zenker, trei entități consecutive în capitol.',['celule granulare','polipul fibrovascular']),
];
