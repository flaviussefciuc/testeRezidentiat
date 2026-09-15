import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p-149;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('electroliti',9,pdfOffset,`electroliti-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const ELECTROLITI_B=[
q(31,['La un bărbat sănătos de 70 kg, apa totală a organismului și compartimentele ei:',
 ['Apa totală este de aproximativ 42 L, reprezentând 50-60% din masa slabă la bărbați și 40-50% la femei','Lichidul intracelular este circa 28 L (aproximativ 35% din masa slabă)','Lichidul interstițial este circa 9,4 L (aproximativ 12%), iar plasma circa 4,6 L (aproximativ 4-5%)','Electrolitul osmotic dominant intracelular este K+, în interstițiu predomină sărurile de Na+, iar în plasmă proteinele','Apa totală este 70 L, plasma fiind 28 L, identică lichidului intracelular'],'ABCD',172,'Apa și electroliții — Compartimente',
 'Reținerea celor trei volume (28 / 9,4 / 4,6 L) și a solviților osmotici dominanți pe compartiment.',
 ['42 L și procentele pe sex sunt din deschidere.','28 L intracelular este cifra dată.','9,4 L interstițiu și 4,6 L plasmă completează suma extracelulară.','K+, Na+ și proteinele sunt solviții osmotici ai celor trei compartimente.','70 L și plasma de 28 L inversează ordinele de mărime.']],
 8,'Patru volume reale; distractorul permută plasma cu compartimentul intracelular.',['aproximativ 42 L','trei compartimente majore']),

q(32,['Identificați afirmația corectă referitoare la presiunea osmotică între compartimente:',
 ['Abilitatea de a menține apa într-un compartiment reprezintă presiunea osmotică, determinantul principal al distribuției apei între cele trei compartimente majore','Ureea este unicul determinant al volumului extracelular, Na+ fiind osmotic inactiv','Proteinele plasmatice nu exercită efect oncotic','K+ extracelular determină volumul intracelular, Na+ fiind sechestrat în celule','Apa nu traversează membranele semipermeabile'],'A',172,'Presiunea osmotică',
 'Definirea presiunii osmotice ca determinant al distribuției apei, distinct de soarta ureei și a Na+.',
 ['Definiția și rolul de determinant principal sunt enunțate.','Ureea este osmotic inactivă; Na+ total determină volumul extracelular.','Proteinele rețin apa intravascular prin efect oncotic.','K+ este predominant intracelular.','Apa traversează membranele semipermeabile.']],
 8,'Distractorii inversează soarta osmotică a ureei și a Na+, două afirmații alăturate în același paragraf.',['presiunea osmotică','trei compartimente majore']),

q(33,['Cadranul 9.9 — evaluarea statusului volemic se bazează pe:',
 ['Presiunea venoasă jugulară și presiunea venoasă centrală, bazală și după proba de încărcare','Modificările posturale ale tensiunii arteriale','Radiografia toracelui, măsurarea serială a greutății și debitul urinar la intervale regulate','Un singur hematocrit izolat, fără semne clinice','Ignorarea PVJ, deoarece nu reflectă volemia'],'ABC',182,'Cadranul 9.9 — Evaluarea statusului volemic',
 'Reținerea pachetului clinic (PVJ, PVC, postural, greutate, diureză), nu a unui marker izolat.',
 ['PVJ și PVC cu încărcare sunt primele verificări.','Hipotensiunea posturală figurează în listă.','Rx, greutatea serială și diureza completează cadranul.','Hematocritul izolat nu înlocuiește observațiile clinice.','PVJ este primul semn de verificat.']],
 8,'Distractorii înlocuiesc pachetul clinic cu un marker de laborator izolat pe care cadranul nu îl listează.',['Presiunea venoasă jugulară','debitului urinar']),

q(34,['Înlocuirea orală a pierderilor de apă și sodiu include:',
 ['Sodiu lent 600 mg (circa 10 mmol Na+ sau Cl- pe tabletă), doză uzuală 6-12 tablete/zi în 2-3 L de apă, în depleția cronică ușoară','Bicarbonat de sodiu 500 mg (Na+ și HCO3-), 6-12 tablete/zi cu 2-3 L de apă, în depleții ușoare/cronice cu acidoză (BCR, ATR)','Bicarbonatul de sodiu este mai puțin eficient decât clorura de sodiu în a determina o balanță pozitivă de sodiu','Pierderea de plasmă (arsuri, peritonită severă) se tratează cu plasmă umană sau substituent','Bicarbonatul oral este mai eficient decât NaCl în retenția de sodiu, fiind preferat în depleția fără acidoză'],'ABCD',182,'Pierderea de apă și electroliți',
 'Contrastarea sodiu lent versus bicarbonat (eficiență mai mică pe balanța de Na+) și a substituției plasmatice.',
 ['Doza 600 mg / 6-12 tablete este schema de sodiu lent.','Bicarbonatul în acidoză cronică este a doua schemă.','Inferioritatea bicarbonatului pe balanța de Na+ este explicită.','Plasma sau substituentul sunt indicate în pierderea de plasmă.','Textul precizează că bicarbonatul este mai puțin eficient decât NaCl.']],
 8,'Distractorul inversează eficiența comparativă bicarbonat versus NaCl pe balanța de sodiu.',['6-12 tablete','mai puţin eficient']),

q(35,['Conform Cadranului 9.10, particularitățile compoziției cristaloidelor includ:',
 ['Clorura de sodiu 0,9% conține Na+ 150 mmol/L și Cl- 150 mmol/L, față de valorile plasmatice normale circa 142 și 103 mmol/L','Soluția Hartmann conține 2 mmol/L de calciu, iar Plasma-Lyte tamponază cu acetat și gluconat, nu cu lactat ca Hartmann','Glucoza 5% rămâne sechestrată intravascular prin presiune oncotică, ca un coloid','Hartmann este un coloid, nu un cristaloid','Plasma-Lyte are Cl- 150 mmol/L, identic salinei 0,9%'],'AB',182,'Cadranul 9.10 — Preparate lichide intravenoase',
 'Contrastarea hipernatremiei/hipercloremiei relative a salinei 0,9% de tamponii Hartmann versus Plasma-Lyte.',
 ['Perechea 150/150 versus 142/103 este din tabel.','Calciul 2 mmol/L și acetatul/gluconatul versus lactat sunt notele cadranului.','Glucoza 5% se distribuie ca apă liberă, nu ca un coloid.','Hartmann figurează între cristaloide.','Plasma-Lyte are Cl- 98 mmol/L, nu 150.']],
 8,'Distractorii atribuie salinei soarta coloidului și inversează Cl- al Plasma-Lyte cu al NaCl 0,9%.',['Clorură de sodiu 0.9%','Soluţie Hartmann']),

q(36,['Pragul de osmolalitate plasmatică sub care nu există ADH circulant, potrivit capitolului, este:',
 ['<275 mOsm/kg, corespunzând de obicei Na+ plasmatic <135-137 mmol/L','<300 mOsm/kg, corespunzând Na+ de 150 mmol/L','<250 mOsm/kg, independent de natremie','>320 mOsm/kg, pragul setei maxime','Identic pragului de eliberare maximală, circa 350 mOsm/kg'],'A',176,'Osmolalitatea plasmatică',
 'Reținerea pragului 275 mOsm/kg și a echivalentului natremic 135-137 mmol/L pentru absența ADH.',
 ['Cifrele 275 mOsm/kg și 135-137 mmol/L sunt cele din paragraf.','300 mOsm/kg și Na 150 nu sunt pragul de absență a ADH.','250 mOsm/kg nu este cifra citată.','Setea este discutată separat; pragul de absență a ADH este 275.','Eliberarea crește progresiv deasupra pragului, nu de la 350.']],
 8,'Distractorii reciclează natremii reale din capitol (150, 135) pe lângă un prag osmotic greșit.',['275 mOsm/kg','135-137']),

q(37,['Căile separate de osmoreglare și de reglarea volemică se deosebesc prin:',
 ['O încărcare cu apă este excretată rapid (în 4-6 ore) prin inhibarea ADH, fără modificări relevante ale ANP sau ale sistemului renină–angiotensină–aldosteron, cu urină diluată','Administrarea de NaCl 0,9% crește volumul fără a schimba osmolalitatea: ANP crește, aldosteronul scade, ADH rămâne neschimbat, iar excesul de Na+ se excretă în urină relativ izoosmotică','Încărcarea cu apă activează ANP și suprimă aldosteronul identic unei încărcări saline izotone','NaCl 0,9% suprimă ADH osmotic, ca o încărcare de apă liberă','Cele două căi sunt identice, având aceiași senzori'],'AB',177,'Osmoreglarea versus reglarea volemică',
 'Contrastarea soartei unei încărcări de apă (4-6 ore, fără ANP) de cea a salinei izotone (ANP↑, ADH neschimbat).',
 ['Fereastra 4-6 ore și absența activării volemice sunt enunțate.','Profilul ANP/aldosteron/ADH al salinei izotone este cel din paragraf.','Apa liberă nu activează calea volemică.','Salina izotonă nu schimbă osmolalitatea, deci nu suprima ADH osmotic.','Textul cere separarea rolurilor celor două căi.']],
 8,'Distractorii aplică efectorii volemici (ANP, aldosteron) încărcării de apă și inversează soarta ADH.',['4-6 ore','urină relativ izoosmotică'],[176]),

q(38,['Hiponatremia la spitalizați, în datele de deschidere:',
 ['Este definită prin Na+ <135 mmol/L și este cea mai comună anomalie biochimică la pacienții spitalizați','Până la 35% dintre cei internați dezvoltă hiponatremie pe durata internării','Cauzele se grupează după volumul extracelular: hipovolemie, euvolemie sau hipervolemie','Este o anomalie rară, sub 1% dintre internări, rezervată SIADH','Se definește prin Na+ <120 mmol/L, valorile 130-135 fiind fiziologice'],'ABC',183,'Hiponatremia — Introducere',
 'Reținerea pragului 135 mmol/L, a proporției de 35% și a clasificării volemice.',
 ['Definiția <135 mmol/L și caracterul de cea mai comună anomalie sunt din deschidere.','Cifra de până la 35% este explicită.','Cele trei fenotipuri volemice structurează cauzele.','Textul o numește cea mai comună, nu rară.','Pragul de definiție este 135, nu 120 mmol/L.']],
 8,'Distractorii coboară pragul de definiție la 120 mmol/L și transformă o anomalie frecventă într-una rară.',['Na <135 mmol/L','35%']),

q(39,['Pseudohiponatremia și artefactul de recoltare, potrivit capitolului:',
 ['Poate apărea în hiperlipidemie (hipercolesterolemie sau hipertrigliceridemie), sodiul fiind reținut în faza apoasă dar raportat la volumul total de plasmă','Osmolalitatea plasmatică este normală, astfel încât tratamentul „hiponatremiei” nu este necesar','Trebuie exclusă hiponatremia artefactală prin recoltarea din brațul în care se perfuzează un lichid sărac în sodiu','Osmolalitatea plasmatică este crescută, impunând salină 3% de urgență','Hiperlipidemia scade realmente sodiul total al organismului, ca o depleție de Na+'],'ABC',183,'Hiponatremia — Pseudohiponatremie',
 'Separarea valorii fals scăzute (osmolalitate normală, hiperlipidemie sau braț perfuzat) de hiponatremia adevărată.',
 ['Mecanismul de fază apoasă în hiperlipidemie este enunțat.','Osmolalitatea normală contraindică tratamentul.','Recoltarea din brațul perfuzat este artefactul de exclus.','Osmolalitatea normală, nu crescută, caracterizează pseudohiponatremia.','Sodiul total nu este depletat; este o problemă de raportare.']],
 8,'Distractorii transformă un artefact de laborator într-o urgență de salină 3% sau într-o depleție reală.',['pseudohiponatremie','osmolalitatea plasmatică']),

q(40,['În hiponatremia hipovolemică, sodiul urinar distinge:',
 ['Pierderile extrarenale (vărsături, diaree, hemoragie, arsuri, pancreatită) — Na+ urinar <20 mmol/L, cu urină concentrată','Pierderea renală de sare — Na+ urinar >20 mmol/L în prezența depleției volemice clinic evidente','Pierderile extrarenale — Na+ urinar >50 mmol/L, rinichiul fiind incapabil să conserve sodiul','Na+ urinar <20 mmol/L definește pierderea renală, nu pe cea extrarenală','Sodiul urinar nu are loc în acest diagnostic diferențial'],'AB',183,'Cadranul 9.11 — Hiponatremia hipovolemică',
 'Aplicarea pragului de 20 mmol/L: sub el extrarenal, peste el renal, în depleție clinică.',
 ['Lista extrarenală și pragul <20 mmol/L sunt din cadran.','>20 mmol/L în depleție clinică sugerează pierdere renală.','Extrarenalul conservă sodiul, deci UNa este scăzut.','Sensul pragului este inversat.','Cadranul este construit tocmai pe acest prag.']],
 8,'Distractorii inversează pragul 20 mmol/L între pierderea extrarenală și cea renală.',['<20 mmol/L','>20 mmol/L']),

q(41,['În hiponatremia hipovolemică, ierarhia receptorilor pentru ADH și sete este:',
 ['Inițial, secreția de ADH este suprimată pe calea osmoreceptorilor hipotalamici','Pe măsură ce volumul se pierde, receptorii de volum depășesc osmoreceptorii, stimulând atât setea cât și eliberarea de ADH','Organismul încearcă astfel să conserve volumul circulant pe seama osmolalității','Osmoreceptorii rămân dominanți până la colaps, receptorii de volum neavând rol','Setea este inhibată în hipovolemie, pentru a nu dilua și mai mult sodiul'],'ABC',183,'Hiponatremia cu hipovolemie — Mecanism',
 'Recunoașterea preluării controlului de către receptorii de volum, cu conservarea volemiei în dauna osmolalității.',
 ['Supresia osmotică inițială este enunțată.','Depășirea osmoreceptorilor de către receptorii de volum este fraza-cheie.','Conservarea volumului pe seama osmolalității este scopul descris.','Textul precizează că receptorii de volum preiau controlul.','Setea este stimulată, nu inhibată.']],
 8,'Distractorii păstrează osmoreceptorii ca unici stăpâni și inhibă setea, inversând ierarhia din paragraf.',['receptorii de volum','osmoreceptorilor']),

q(42,['Identificați afirmația corectă referitoare la cristaloidele balansate la pacienții critici:',
 ['Soluțiile cristaloide balansate (Hartmann sau Plasma-Lyte, cu Cl- mai mic decât salina) s-au asociat cu rate mai scăzute de deces de orice cauză, de terapii de substituție renală noi sau de disfuncție renală, comparativ cu serul fiziologic, mai ales la volume mari','Salina 0,9% reduce mortalitatea față de Hartmann, fiind cristaloidul de primă intenție în volume mari','Plasma-Lyte este evitată în sepsis din cauza clorului excesiv','Hartmann este contraindicat în hipovolemie, fiind rezervat hipernatremiei','Cristaloidele balansate cresc necesarul de dializă față de NaCl 0,9%'],'A',183,'Lichide intravenoase — Cristaloide balansate',
 'Recunoașterea avantajului Hartmann/Plasma-Lyte (Cl- mai mic) asupra salinei la volume mari, pe mortalitate și funcție renală.',
 ['Concluzia SMART și a comparațiilor citate este enunțată astfel.','Textul atribuie beneficiul cristaloidelor balansate, nu salinei.','Plasma-Lyte are Cl- mai mic, nu excesiv.','Hartmann este tocmai opțiunea balansată discutată în hipovolemie.','Relația cu dializa este inversată.']],
 8,'Distractorii inversează concluzia de mortalitate/RRT dintre salină și cristaloidele cu Cl- mai mic.',['cristaloide balansate','serului fiziologic']),

q(43,['Corecția rapidă a hipovolemiei severe se caracterizează prin:',
 ['Hipovolemia severă induce vasoconstricție care menține întoarcerea venoasă','Corecția suprarapidă nu lasă timp vasoconstricției să se reverseze, putând produce semne de supraîncărcare (edem pulmonar) chiar dacă rămâne un deficit de lichid extracelular total','În formele mai puțin severe, înlocuirea se face cu circa 1.000 ml la fiecare 4-6 ore, cu reevaluări clinice repetate','Vasoconstricția dispare instantaneu, deci supraîncărcarea este imposibilă cât timp există deficit ECF','Evaluările clinice repetate sunt inutile odată ce s-a început un litru pe oră'],'ABC',183,'Corecția hipovolemiei',
 'Recunoașterea edemului pulmonar iatrogen prin vasoconstricție neresorbită, în ciuda deficitului ECF persistent.',
 ['Vasoconstricția de menținere a întoarcerii venoase este mecanismul de start.','Edemul pulmonar cu deficit ECF restant este avertismentul citat.','Viteza 1.000 ml/4-6 ore este schema formelor mai puțin severe.','Textul descrie tocmai posibilitatea supraîncărcării.','Reevaluarea clinică repetată este cerută.']],
 8,'Distractorii neagă edemul pulmonar iatrogen pe care textul îl plasează lângă deficitul ECF persistent.',['edem pulmonar','1.000 ml']),

q(44,['În perioada perioperatorie, administrarea de lichide trebuie să țină seama că:',
 ['Pentru a evita depleția, se pot administra 1-2 L în 24 de ore','Intervenția chirurgicală este un stimul pentru retenția de sodiu și apă','Supraîncărcarea poate fi la fel de periculoasă ca subadministrarea','Chirurgia suprimă ADH, impunând 5 L/zi de rutină pentru a preveni hipernatremia','Bilanțul hidric și greutatea pot fi ignorate dacă s-au prescris 3 L izotoni'],'ABC',183,'Lichide perioperatorii',
 'Reținerea ferestrei 1-2 L/24 h și a stimulului chirurgical de retenție hidrosalină, cu riscul simetric al supraîncărcării.',
 ['Volumul 1-2 L/24 h este cifra dată.','Stimulul de retenție Na+/apă este explicit.','Simetria pericolului supra- versus subadministrare este enunțată.','Chirurgia stimulează retenția, nu diureza apoasă.','Monitorizarea fișelor, greutății și biochimiei este numită crucială.']],
 8,'Distractorii inversează stimulul chirurgical (retenție versus diureză) și anulează monitorizarea cerută.',['1-2 L în 24 ore','retenţia de sodiu']),

q(45,['Pierderea de apă, spre deosebire de depleția extracelulară de NaCl, se caracterizează prin:',
 ['Depleția volumului extracelular apare doar în cazurile severe, pierderea fiind distribuită egal între toate compartimentele','În deficitul adevărat numai de apă (diabet insipid, pacient incapabil să bea), tratamentul corect este administrarea apei','Intravenos, apa se dă ca glucoză 5% cu K+, deoarece apa pură ar produce liza osmotică a hematiilor','Pierderea de apă se limitează la plasma, similar coloizilor','Apa pură intravenoasă este calea preferată, hematiile fiind protejate de uree'],'ABCD',183,'Pierderea de apă',
 'Separarea distribuției egale a deficitului de apă de substituția cu glucoză 5% (+K+), nu cu apă pură.',
 ['Distribuția egală și apariția tardivă a depleției ECF sunt enunțate.','Apa ca tratament al deficitului pur este explicită.','Glucoza 5% cu K+ evită liza osmotică.','Apa se repartizează în toate compartimentele, nu rămâne intravascular.','Apa pură i.v. ar liza hematiile.']],
 8,'Distractorii atribuie apei libere soarta coloidului și transformă liza osmotică într-o cale terapeutică.',['glucoză 5%','liza osmotică']),

q(46,['Studiile Na-IRM cantitative recente, citate în capitol, arată că:',
 ['Cantități remarcabile de Na sunt depozitate în mușchi, oase și tegumente fără apă','Lichidele din interstițiul tegumentar sunt hipertone comparativ cu plasma','Stresul osmotic interstițial activează mecanisme locale în celulele imune și capilarele limfatice pentru clearance-ul electroliților','Sodiul tegumentar este izoton plasmei și nu necesită mecanisme extrarenale','Na-IRM a infirmat orice depozit extrarenal de sodiu'],'ABC',183,'Tulburările concentrației de sodiu — Na-IRM',
 'Recunoașterea depozitului de Na fără apă și a interstițiului cutanat hiperton, ca argument pentru homeostazie extrarenală.',
 ['Depozitul muscular/osos/cutanat fără apă este prima constatare.','Hipertonia interstițiului tegumentar este a doua.','Clearance-ul local imun-limfatic este a treia.','Textul spune că interstițiul este hiperton, nu izoton.','Constatarea este existența depozitelor, nu infirmarea lor.']],
 8,'Distractorii neagă depozitul extrarenal pe care Na-IRM tocmai îl documentează.',['muşchi, oase','interstiţiul tegumentar']),

q(47,['Pacienții cu diabet insipid central, în osmoreglare, se caracterizează prin:',
 ['Poliurie marcată prin declinul reabsorbției apei în ducturile colectoare, dar fără hipernatremie atât timp cât setea compensează pierderea urinară','Hipernatremie inevitabilă, setea fiind ineficientă în absența ADH','Oligurie cu urină concentrată, analog SIADH','Absența poliuriei, rinichiul concentrând independent de ADH','Setea inhibată, ceea ce accelerează hipernatremia'],'A',176,'Osmoreglarea — Rolul setei',
 'Recunoașterea setei ca mecanism care previne hipernatremia în diabetul insipid central, în ciuda poliuriei.',
 ['Poliuria marcată fără hipernatremie, prin sete, este exemplul din text.','Textul precizează că nu devin hipernatremici dacă setea funcționează.','SIADH are retenție de apă, nu poliurie.','Poliuria este tocmai manifestarea.','Setea este stimulentul compensator, nu este inhibată.']],
 8,'Distractorii transformă exemplul clasic (sete care previne hipernatremia) în hipernatremie inevitabilă sau în SIADH.',['diabet insipid','mecanismul de sete']),

q(48,['Aportul și depozitele de potasiu, în datele OMS și ale capitolului:',
 ['OMS recomandă un aport de 90 mmol/zi pentru scăderea tensiunii arteriale','Majoritatea oamenilor ingestionează 80-150 mmol K+/zi, în funcție de fructe și legume','Majoritatea potasiului din organism (3.500 mmol la un adult) se găsește intracelular','Aportul recomandat este 20 mmol/zi, depozitul total fiind 350 mmol, aproape tot extracelular','K+ total este 42 L, identic apei totale'],'ABC',187,'Reglarea concentrației de potasiu seric',
 'Reținerea țintei OMS 90 mmol/zi, a intervalului 80-150 și a depozitului intracelular de 3.500 mmol.',
 ['90 mmol/zi este recomandarea OMS citată.','Intervalul 80-150 mmol/zi este cel din text.','3.500 mmol intracelular este cifra adultului.','20 mmol și 350 mmol extracelular inversează ordinele de mărime.','42 L este apa totală, nu K+.']],
 8,'Distractorii permută 90 mmol (aport) cu 3.500 mmol (depozit) și cu volumul apei totale.',['90 mmol/zi','3.500 mmol']),

q(49,['De-a lungul nefronului, soarta potasiului filtrat include:',
 ['Peste 90% din potasiul filtrat este reabsorbit în tubul proximal și ansa lui Henle, sub 10% din sarcina filtrată ajungând în porțiunea proximală a tubului distal','Reabsorbția proximală este în întregime pasivă, urmând sodiul și apa, iar în porțiunea groasă ascendentă este mediată de co-transportorul Na+-K+-2Cl-','Secreția de către celulele principale din tubii colectori este responsabilă de majoritatea excreției urinare de K+','Peste 90% din K+ filtrat este secretat în tubul proximal, reabsorbția fiind neglijabilă','Co-transportorul Na+-K+-2Cl- este sediul secreției distale, nu al reabsorbției din ansă'],'ABC',187,'Excreția renală a potasiului',
 'Plasarea reabsorbției (>90% proximal + ansă, NKCC2) față de secreția reglementată din celula principală.',
 ['Procentele >90% / <10% sunt cele din paragraf.','Pasivul proximal și NKCC2 din ansă sunt mecanismele citate.','Celulele principale distale asigură cea mai mare parte a excreției.','Proximalul reabsoarbe, nu secretă, marea majoritate.','NKCC2 este al ansei groase, nu al secreției distale.']],
 8,'Distractorii inversează reabsorbția proximală cu secreția și mută NKCC2 pe segmentul secretor.',['Peste 90%','co-transportorul']),

q(50,['Administrarea intravenoasă de potasiu în hipokaliemie, potrivit cadranului de tratament, include:',
 ['Adăugarea a 20 mmol K+/L în lichidele de substituție, cu monitorizare','Viteze <2 mmol/oră când funcția renală este afectată, cu monitorizare orară a K+ seric și a ECG','Fiolele se amestecă atent cu NaCl 0,9%; soluțiile de glucoză agravează hipokaliemia','Verificarea potasiului cel puțin zilnic până la 48 de ore după oprirea suplimentării','Glucoza 5% este vehiculul preferat, deoarece scade K+ iatrogen și accelerează corecția'],'ABCD',189,'Cadranul 9.18 — Tratamentul hipokaliemiei',
 'Reținerea vehiculului salin (nu glucoză), a vitezei <2 mmol/oră în disfuncție renală și a supravegherii 48 de ore după oprire.',
 ['20 mmol/L cu monitorizare este schema i.v. din cadran.','Limita <2 mmol/oră și monitorizarea orară sunt pentru funcția renală afectată.','Interdicția glucozei (agravează hipokaliemia) este explicită.','Fereastra de 48 de ore după oprire este cerută.','Glucoza agravează hipokaliemia, deci nu este vehiculul preferat.']],
 8,'Distractorul transformă avertismentul despre glucoză (agravează hipokaliemia) într-un vehicul terapeutic.',['<2 mmol pe oră','soluţie salină de 0,9%']),
];
