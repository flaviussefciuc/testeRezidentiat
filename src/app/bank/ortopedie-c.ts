import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p===605?p-327:p===606?p-329:p-328;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('ortopedie',28,pdfOffset,`ortopedie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const ORTOPEDIE_C=[
q(76,['Fractura în lemn verde a ulnei, incompletă, cu vârful înclinării anterior, se tratează prin:',
 ['Completarea fracturii, cu întreruperea celeilalte corticale, pentru a preveni deformarea angulară','Observație, corticala intactă prevenind orice angulație','Fixare internă cu placă, ca în fractura segmentară a adultului','Fasciotomie de compartiment anterior, analog sindromului de efort','Artrodeză radiocarpiană de urgență'],'A',587,'Traiectul fracturii — Lemn verde',
 'Recunoașterea necesității de a întrerupe a doua corticală la fractura pediatrică incompletă, pentru a evita angulația reziduală.',
 ['Textul cere completarea fracturii prin întreruperea celeilalte corticale, altfel deformarea angulară persistă.','Corticala intactă menține înclinarea; observația nu corectează vârful anterior.','Placa este tratamentul fracturilor cominutive/segmentare de energie mare, nu al lemnului verde.','Fasciotomia nu are rol în corectarea unei corticale pediatrice incomplete.','Artrodeza radiocarpiană nu figurează ca tratament al fracturii ulnare în lemn verde.']],
 8,'Înlocuiește completarea corticalei (gestul descris pe figură) cu observație sau cu osteosinteza adultului.',['lemn verde','întreruperea celeilalte corticale']),

q(77,['Fracturile cominutive, impactate și prin compresie:',
 ['Fragmentul triunghiular se numește în aripă de fluture; configurația cilindrică este segmentară','Cominutivele rezultă din forțe mari, cu deteriorarea aportului sanguin intramedular și a țesuturilor moi','Fractura impactată este frecventă în os metafizar: col femural, extremitate distală radială sau platou tibial','Fractura prin compresie strivește osul cortical diafizar, nu trabecularul vertebral','Lemnul verde este traiectul tipic al fracturii segmentare a adultului'],'ABC',587,'Clasificarea traiectului — Cominutivă, impactată, compresie',
 'Diferențierea fragmentului fluture/segmentar de impactarea metafizară de energie redusă și de strivirea trabeculară vertebrală.',
 ['Textul distinge fragmentul triunghiular „în aripă de fluture” de forma cilindrică segmentară.','Energia mare și compromiterea vascularizației intramedulare sunt enunțate.','Sediile metafizare (col femural, radius distal, platou tibial) și energia redusă sunt citate.','Compreshia strivește osul trabecular/spongios, adesea în corpurile vertebrale.','Lemnul verde este încurbarea incompletă a unei singure corticale la copil, nu segmentara adultului.']],
 8,'Mută compresia din corpul vertebral trabecular pe corticala diafizară și confundă lemnul verde cu segmentara.',['aripă de fluture','impactată']),

q(78,['Deplasarea fragmentelor unei fracturi se caracterizează prin:',
 ['Fragmentul distal este denumit în raport cu fragmentul proximal, deoarece reducerea aliniază distalu pe proximal','Deplasarea posterioară de 50% plus cea laterală de 50% poate însemna, tridimensional, o apoziție osoasă de doar 25%','Deplasarea se raportează la fragmentul distal ca reper, proximalul fiind ignorat','Procentele dintr-un singur plan descriu fidel contactul cortical tridimensional','Angulația se măsoară doar în plan orizontal, fără convenții coronale sau sagitale'],'AB',587,'Deplasarea fracturii — Convenție distal/proximal și apoziție',
 'Aplicarea convenției de denumire a distalui față de proximal și a capcanei 50%+50%=25% apoziție 3D.',
 ['Textul fixează convenția: distalu este descris față de proximal, deoarece reducerea îl aliniază pe acesta.','Figura 28-7 arată că 50% posterior plus 50% lateral pot lăsa doar 25% apoziție.','Reperul este fragmentul proximal, nu distalu luat ca origină.','Procentele unipolare induc în eroare în plan tridimensional.','Deplasarea se măsoară în planuri coronale și sagitale, iar angulația are două convenții.']],
 8,'Inversează reperul distal/proximal și tratează procentul unipolar ca echivalent al contactului 3D.',['deplasarea posterioară cu 50%','25%']),

q(79,['În imaginea antero-posterioară (plan coronal), când fragmentul distal este angulat lateral, vârful angulației fracturii este:',
 ['Medial','Lateral, identic direcției fragmentului distal','Anterior, ca în planul sagital','Posterior, spre vârful ulnei în lemn verde','Independență de plan, angulația nefiind descrisă'],'A',589,'Angulația — Convenția din planul coronal',
 'Recunoașterea celor două convenții: direcția fragmentului distal versus sediul (vârful) angulației, opuse în plan coronal.',
 ['Figura 28-8A: fragmentul distal angulat lateral, angularea fracturii (vârful) este medială.','Vârful nu coincide cu direcția distalui; cele două convenții sunt opuse.','Anteriorul este vârful din imaginea laterală (plan sagital), nu din AP.','Posteriorul descrie direcția distalui pe radiografia laterală, nu vârful din AP.','Textul consacră explicit ambele convenții de descriere.']],
 8,'Confundă direcția distalui (lateral) cu vârful angulației (medial), cele două convenții din aceeași figură.',['angulat lateral','angularea fracturii este']),

q(80,['În imaginea laterală (plan sagital) a unei fracturi, dacă fragmentul distal este angulat posterior:',
 ['Vârful unghiului este anterior','Vârful unghiului este posterior, identic distalui','Planul sagital nu se folosește la cuantificarea angulației','Deplasarea se raportează doar procentual, fără ax lung','Vârful unghiului coincide cu linia mediană, ca în genu valgum'],'A',589,'Angulația — Convenția din planul sagital',
 'Aplicarea figurii 28-8B: distal posterior ⇒ apex anterior, distinct de convenția coronală.',
 ['Figura 28-8B: distal angulat posterior, vârful unghiului este anterior.','Vârful este opus direcției distalui, nu identic.','Planul sagital (incidența laterală) este una dintre cele două măsurători.','Angulația reflectă relația axelor lungi distal-proximal, nu doar procentul de deplasare.','Linia mediană definește varus/valgus, nu vârful angulației de fractură sagitală.']],
 8,'Egalizează vârful cu direcția distalui pe laterala, deși figura le plasează anterior versus posterior.',['angulat posterior','vârful unghiului este anterior']),

q(81,['Un pacient este găsit după o criză epileptică, cu umăr dureros. Clinic, brațul este în rotație internă și nu poate fi rotat extern dincolo de neutră. Sunt adevărate:',
 ['Luxația posterioară trebuie luată în considerare după electrocutare, criză epileptică, șoc electric sau sevraj alcoolic','Radiografiile în două incidențe perpendiculare sunt necesare; o singură AP poate omite capul în afara glenei','Reducerea se amână până la artroscopie, chiar dacă statusul neurovascular este îndoielnic','Rotația internă blocată exclude luxația și face inutile radiografiile','Luxația posterioară se confirmă pe o singură radiografie AP, procesul coracoid fiind posterior'],'AB',597,'Luxația posterioară de umăr — Clinic și imagistică',
 'Recunoașterea poziției în rotație internă, a contextului convulsiv/electric și a cerinței de două planuri perpendiculare.',
 ['Textul cere suspiciunea de posterioară după epilepsie, electrocutare, șocuri electrice sau sevraj.','Capul în afara glenei pe axilară și necesitatea a două planuri perpendiculare sunt enunțate.','Reducerea pe focar închis prin tracțiune și contratracțiune este descrisă, nu amânarea artroscopică.','Rotația internă fără ER dincolo de neutră este semnul clinic, nu o excludere.','Procesul coracoid este o structură scapulară anterioară, utilă la orientarea filmului, nu un reper posterior.']],
 8,'Tratează AP-ul izolat ca diagnostic și inversează coracoidul (anterior) cu un reper posterior.',['rotaţie internă','electrocutării'],[596]),

q(82,['Fracturile de șold prin traumatism de energie minimă, la vârstnici și osteoporotici, reprezintă circa:',
 ['33% din internările în centrele de ortopedie','5% din internările ortopedice, predominând scafoidul','90% din traumatismele de cameră de gardă, analog dorsalgiei','Sub 2% din patologia musculoscheletală','Echivalentul fracturilor de stres tibiale ale alergătorului recreațional'],'A',597,'Fracturile șoldului — Pondere epidemiologică',
 'Reținerea ponderii de circa 33% dintre internările ortopedice pentru fracturile de șold de energie minimă.',
 ['Textul atribuie acestor fracturi circa 33% din internările în centrele de ortopedie.','Scafoidul nu este ponderea internărilor citată.','90% și dorsalgia țin de alte capitole/pagini, nu de acest paragraf.','Ponderea este o treime din internări, nu sub 2%.','Sindromul de stres tibial este o entitate de efort, nu echivalent epidemiologic al fracturii de șold.']],
 8,'Permutează 33% cu procente din alte patologii (stres, dorsalgie, scafoid) din același capitol.',['circa 33%','osteoporoză']),

q(83,['Fasciita plantară a sportivului:',
 ['Factori contributivi sunt piciorul plat și cel cav, alergarea pe vârfuri sau în nisip, obezitatea și încălțămintea inadecvată','Tratamentul conservator include repaus, medicație, scădere ponderală, încălțăminte adecvată și suport calcaneean sau orteze','Chirurgia eliberează fascia plantară de la originea calcaneeană și este rezervată eșecului nonoperativ','Eliberarea chirurgicală a fasciei este gestul de primă intenție, înaintea ortezelor','Afecțiunea cedează mai rapid dacă persistă de mult timp, fără măsuri conservatoare'],'ABC',603,'Leziuni sportive — Fasciita plantară',
 'Integrarea factorilor mecanici, a ierarhiei conservatoare și a eliberării fasciei de pe calcaneu doar după eșec.',
 ['Lista factorilor (plat, cav, vârfuri, nisip, obezitate, papuci) este explicită.','Măsurile conservatoare sunt enumerate în această ordine.','Eliberarea de la originea calcaneeană este rezervată cazurilor neresponsive.','Chirurgia nu este prima intenție.','Textul precizează că persistența îndelungată încetinește, nu accelerează, recuperarea.']],
 8,'Inversează ierarhia (chirurgie înaintea ortezelor) și durata (persistența încetinește vindecarea).',['fascia plantară','originea sa calcaneeană']),

q(84,['Un alergător acuză durere anterioară de genunchi la urcatul scărilor, ghemuit și după ședere prelungită. Sindromul dureros patelar:',
 ['Rotula funcționează ca un scripete care crește eficiența mecanică a cvadricepsului în extensia genunchiului','Tratamentul conservator evită activitățile agravante, folosește AINS și orteze rotuliene','Exercițiile de ridicare a piciorului cu genunchiul extins întăresc cvadricepsul și sunt importante pentru recuperare','Exercițiile cu genunchiul în extensie exagerată trebuie evitate, deoarece pun presiune excesivă pe patelă','Diagnosticul de condromalacie se pune clinic, fără RMN sau artroscopie, pe baza durerii anterioare izolate'],'ABCD',603,'Sindromul dureros patelar — Condromalacie',
 'Separarea tratamentului conservator și a izometriei în extensie de interdicția hiperextensiei și de rezerva diagnosticului de condromalacie pentru RMN/artroscopie.',
 ['Funcția de scripete a rotulei este enunțată.','Evitarea activităților, AINS și ortezele rotuliene sunt descrise ca eficiente.','Ridicarea piciorului cu genunchiul extins este citată ca importantă.','Extensia exagerată agravează presiunea patelară.','Condromalacia se rezervă leziunilor de cartilaj văzute la RMN sau artroscopic, nu durerii izolate.']],
 8,'Transformă durerea anterioară în diagnostic de condromalacie și promovează hiperextensia, pe care textul o interzice.',['condromalacie','genunchiul extins']),

q(85,['Testul sertarului anterior al gleznei este pozitiv atunci când:',
 ['Ligamentul talofibular anterior este întrerupt și se observă translația anterioară excesivă a piciorului pe gambă','Ligamentul deltoid este intact, iar maleola peronieră scurtă permite eversiunea','Ligamentul încrucișat posterior cedează, cu translație posterioară a tibiei','Fascia plantară este ruptă de pe originea calcaneeană','Ligamentul colateral medial al genunchiului cedează în varus'],'A',605,'Entorsele de gleznă — Testul sertarului anterior',
 'Identificarea sertarului anterior de gleznă ca semn al întreruperii talofibularului anterior, distinct de ligamentele genunchiului.',
 ['Figura 28-26 leagă sertarul pozitiv de întreruperea talofibularului anterior și de translația piciorului pe gambă.','Deltoidul și lungimea maleolei țin de biomecanica eversiunii, nu de acest test.','LIP controlează translația posterioară a tibiei la genunchi, nu sertarul de gleznă.','Fascia plantară este o entitate de călcâi, nu un stabilizator al sertarului.','LCM al genunchiului nu este structura testată de sertarul de gleznă.']],
 8,'Mută sertarul anterior de gleznă pe LIP sau pe LCM, ligamente din figura 28-27 de pe aceeași pagină.',['talofibular anterior','translaţia anterioară excesivă']),

q(86,['Stabilitatea articulației genunchiului, conform figurii 28-27:',
 ['Depinde de cele două ligamente colaterale și de cele două ligamente încrucișate','Ligamentul încrucișat anterior rezistă la translația anterioară a tibiei','Ligamentul încrucișat posterior împiedică translația posterioară a tibiei','Ligamentul încrucișat anterior împiedică translația posterioară, iar posteriorul pe cea anterioară','Stabilitatea este asigurată doar de tendonul patelar, fără rol colateral'],'ABC',605,'Genunchiul — Ligamente colaterale și încrucișate',
 'Maparea LIA→translație tibială anterioară și LIP→posterioară, pe lângă cele două colaterale.',
 ['Textul enumeră cele două colaterale și cele două încrucișate ca piloni ai stabilității.','Rolul LIA de a rezista translației anterioare a tibiei este explicit.','Rolul LIP de a împiedica translația posterioară este explicit.','Opțiunea inversează vectorii LIA și LIP.','Tendonul patelar figurează pe schemă, dar nu înlocuiește cele patru ligamente.']],
 8,'Oglindește vectorii LIA (anterior) și LIP (posterior), capcana clasică a încrucișatelor.',['translaţia anterioară a tibiei','translaţia posterioară']),

q(87,['Anteversia femurală de-a lungul creșterii:',
 ['Valoarea medie scade de la aproximativ 40° la naștere până la 10° la maturitate','Schimbările cele mai dramatice au loc în primii 2 ani de viață','Anteversia crește de la 10° la naștere la 40° la maturitate','Modificările majore survin după închiderea cartilajului de creștere, în adolescența tardivă','La maturitate colul este retrovertit la 0°, analog genu varum al sugarului'],'AB',612,'Torsiunea membrului inferior — Curba anteversiei',
 'Citirea graficului 28-37: 40°→10°, cu panta maximă în primii 2 ani, nu după fuziunea epifizară.',
 ['Textul figurei precizează scăderea de la circa 40° la naștere la 10° la maturitate.','Cele mai dramatice schimbări sunt plasate în primii 2 ani.','Direcția este de scădere, nu de creștere.','Adolescența tardivă nu este intervalul pantei maxime.','10° la maturitate rămâne anteversie, nu retroversie 0°.']],
 8,'Inversează 40°/10° și mută panta dramatică din primii 2 ani în adolescența tardivă.',['40° la naştere','la maturitate']),

q(88,['Adducția metatarsienelor ca o cauză a rotației interne a piciorului se recunoaște prin:',
 ['O margine laterală convexă a piciorului; dacă piciorul nu poate fi corectat pasiv în poziție neutră, diformitatea este rigidă și poate necesita imobilizări gipsate repetate','O margine medială convexă, analog genu valgum, tratată prin ham Pavlik','Torsiune tibială externă, cu unghi coapsă-picior orientat în afara liniei mediane, ca variantă rigidă','Anteversie femurală de 10° la naștere, corectată prin epifiziodeză','Pes cavus cu degete în gheară, indicație de artrodeză tarsiană înainte de 2 ani'],'A',612,'Diformități de torsiune — Adducția metatarsienelor',
 'Diferențierea marginii laterale convexe și a formei rigide (gipsuri seriate) de torsiunea tibială externă din aceeași figură.',
 ['Figura 28-39B subliniază marginea laterală convexă și gipsurile repetate dacă nu se corectează pasiv la neutru.','Convexitatea descrisă este laterală, nu medială; Pavlik este al displaziei de șold.','Torsiunea tibială externă este detectată prin unghiul coapsă-picior orientat în afara liniei mediane, nu este adducția metatarsiană.','Anteversia la naștere este circa 40°, nu 10°.','Pes cavus și artrodeza precoce nu sunt tratamentul adducției metatarsiene.']],
 8,'Schimbă convexitatea laterală cu cea medială și atribuie Pavlik-ul sau artrodeza unei diformități de antepicior.',['metatarsiene','imobilizări ghipsate repetate']),

q(89,['O tânără cu pustule palmare și artrită a articulațiilor mici ale mâinii. Artrita gonococică:',
 ['Infecția gonococică sistemică poate asocia peteșii sau pustule la palme sau tălpi','Cultura din aspiratul articular relevă diplococi Gram-negativi tipici','Infecția afectează uzual articulațiile mici ale mâinii și piciorului','Tratamentul cu cefuroxim 1 g intravenos zilnic, 7 zile, conduce de obicei la recuperare completă, germenul neproducând colagenază','Germenul produce colagenază abundantă, deci distrucția cartilajului este ireversibilă chiar după antibiotic'],'ABCD',621,'Artropatii infecțioase — Artrita gonococică',
 'Recunoașterea tetradei pustule palmo-plantare, diplococi Gram-negativi, articulații mici și cefuroxim 7 zile, opus mitului colagenazei.',
 ['Peteșiile/pustulele palmo-plantare sunt enunțate.','Diplococii Gram-negativi din aspirat sunt citați.','Predilecția pentru articulațiile mici ale mâinii și piciorului este explicită.','Cefuroxim 1 g i.v. zilnic 7 zile și absența colagenazei explică recuperarea.','Textul leagă recuperarea completă de lipsa colagenazei, nu de distrucție ireversibilă.']],
 8,'Inversează absența colagenazei (recuperare) într-o distrucție inevitabilă, lângă doza de cefuroxim ușor de uitat.',['Gram-negativi tipici','cefuroxim 1']),

q(90,['Boala Lyme cu poliartralgie migratorie:',
 ['Este cauzată de spirocheta Borrelia burgdorferi, purtată de căpușe de pe căprioare','Simptomele se ameliorează de obicei după doxiciclină 100 mg p.o. de 2 ori pe zi, 10 zile','Amoxicilina 500 mg p.o. la 6 ore, 10 zile, este o alternativă','Tratamentul de elecție este cefuroxim 1 g i.v. zilnic, ca în gonococ','Cristalele de urat negativ birefringente confirmă diagnosticul, analog gutei'],'ABC',621,'Artropatii infecțioase — Boala Lyme',
 'Separarea schemei orale 10 zile (doxiciclină sau amoxicilină) de cefuroximul gonococic și de cristalele gutei de pe aceeași pagină.',
 ['Spirocheta și vectorul (căpușe/căprioare) sunt explicite.','Doxiciclina 100 mg ×2/zi, 10 zile, este citată.','Amoxicilina 500 mg la 6 ore, 10 zile, este alternativa.','Cefuroximul i.v. 7 zile este schema gonococului, nu a Lyme.','Cristalele de urat definesc guta, nu infecția cu Borrelia.']],
 8,'Permutează schema Lyme (oral 10 zile) cu cefuroximul i.v. al gonococului și cu cristalele gutei.',['Borrelia Burg','doxiciclină']),

q(91,['Analiza lichidului articular diferențiază guta de pseudogută prin:',
 ['Guta: cristale în așchii, monoclinice, negativ birefringente de acid uric','Pseudoguta: cristale romboidale, pozitiv birefringente de calciu pirofosfat dihidrat','Guta: cristale romboidale pozitiv birefringente de pirofosfat','Pseudoguta: așchii negativ birefringente de urat, identice gutei','Allopurinolul este tratamentul puseului acut, iar colchicina prevenția de lungă durată'],'AB',621,'Artropatii microcristaline — Gută versus pseudogută',
 'Contrastarea uratului negativ birefringent cu pirofosfatul pozitiv birefringent, plus ierarhia AINS/colchicină acut versus allopurinol preventiv.',
 ['Morfologia în așchii, monoclinică, negativ birefringentă a uratului este explicită.','Romburile pozitiv birefringente de CPPD definesc pseudoguta.','Romburile pozitiv birefringente sunt ale pseudogutei, nu ale gutei.','Așchiile de urat nu descriu pseudoguta.','Puseul acut se tratează cu AINS în doze mari sau colchicină; allopurinolul scade uricemia pe termen lung.']],
 8,'Oglindește semnul optic (negativ versus pozitiv birefringent) și inversează allopurinolul din prevenție în puseu.',['negativ birefringente','calciu pirofosfat dihidrat']),

q(92,['Osteonecroza netraumatică:',
 ['Pacienții cu glucocorticoizi (în special LES sau transplant renal) au risc crescut','Trombii din siclemie, bulele de azot ale scafandrilor, glucocerebrozidele din Gaucher și embolii grăsoși ai alcoolicului pot ocluziona osul','IRM este cea mai sensibilă metodă de detectare a osteonecrozei incipiente; necroza celulară apare în 24 de ore, iar radiografia poate întârzia până la 5 ani','Scintigrafia este superioară IRM în stadiul presimptomatic, iar radiografia se pozitivează în primele 24 de ore','Capul femural este rar afectat, predilecția fiind pentru diafiza tibială, bogat anastomozată'],'ABC',621,'Osteonecroza — Cauze netraumatice și diagnostic precoce',
 'Integrarea listelor embolice (steroid, siclemie, caisson, Gaucher) cu superioritatea IRM și latența radiologică de până la 5 ani.',
 ['Riscul steroidian, mai ales în LES și transplant renal, este enunțat.','Mecanismele ocluzive enumerate sunt din același paragraf.','Sensibilitatea IRM, fereastra de 24 de ore microscopică și întârzierea radiologică de până la 5 ani sunt explicite.','IRM, nu scintigrafia, este metoda cea mai sensibilă; radiografia întârzie ani.','Capul femural este cel mai afectat; osul are puține anastomoze.']],
 8,'Inversează ierarhia IRM/radiografie (5 ani versus 24 de ore) și mută predilecția de pe capul femural pe tibie.',['IRM este cea mai sensibilă','5 ani']),

q(93,['Tratamentul necrozei avasculare a capului femural:',
 ['Tratamentul conservator previne încărcarea articulară până la încheierea procesului natural de vindecare','Decompresia centrală, prin forarea unui tunel în osul spongios mort, scade presiunea intraosoasă și ușurează revascularizarea','Dacă volumul de os mort este mare, artroplastia totală este o opțiune rezonabilă','Încărcarea deplină imediată accelerează substituția trabeculelor necrotice','Decompresia centrală crește presiunea intraosoasă și este rezervată artrozei finale'],'ABC',622,'Osteonecroza — Decompresie centrală și artroplastie',
 'Ierarhia descărcare → decompresie centrală (scăderea presiunii) → artroplastie când volumul necrotic este mare, la tineri activi cu risc de uzură a implantului.',
 ['Prevenirea încărcării până la vindecarea naturală stă la baza tratamentului conservator.','Tunelul în osul mort scade presiunea și oferă cale de revascularizare.','Volumul mare de os mort justifică artroplastia totală.','Încărcarea persistentă fractură osul necrotic subcondral.','Decompresia scade, nu crește, presiunea intraosoasă.']],
 8,'Inversează efectul decompresiei asupra presiunii intraosoase și promovează încărcarea, care precipită prăbușirea subcondrală.',['Decompresia centrală','intraosoasă']),

q(94,['Ponderea adulților care au un episod de durere lombară joasă suficient de sever cât să interfereze cu activitatea zilnică este de:',
 ['80%','10%, identic ponderii cu iradiere sciatică','1–2%, analog indicației chirurgicale pentru hernie de disc','50% în primele 2 săptămâni, ca rată de ameliorare, nu de incidență','Sub 5%, durerea lombară fiind rară între 30 și 65 de ani'],'A',622,'Coloana lombară — Epidemiologie',
 'Reținerea cifrei de 80% dintre adulți cu episod invalidant de lombalgie, distinctă de 10% sciatică și 1–2% chirurgie de pe pagina următoare.',
 ['Textul citează 80% dintre adulți cu un episod suficient de sever.','Sub 10% au iradiere sciatică, pe pagina 623, nu ca incidență a episodului.','1–2% este ponderea care necesită chirurgie pentru hernie, nu incidența episodului.','50% în 2 săptămâni este rata de ameliorare, nu prevalența de-a lungul vieții.','Grupa 30–65 ani este tocmai cea în care lombalgia este cea mai frecventă suferință musculoscheletală.']],
 8,'Permutează 80% (episod de-a lungul vieții) cu 10% sciatică și 1–2% chirurgie din paragraful următor.',['80%','durere lombară joasă'],[623]),

q(95,['Unitatea mobilă a coloanei vertebrale:',
 ['Este compusă din două corpuri vertebrale acoperite cu plăci terminale cartilaginoase și un disc intervertebral','Discul conține un nucleus pulposus gelatinos central și un annulus fibrosus elastic','Fațetele lombare sunt orientate în plan sagital și permit flexia și extensia','Fațetele lombare, orizontale, permit rotația largă și blochează flexia','Nucleus pulposus este inelul fibros periferic, iar annulus este gelul central'],'ABC',622,'Anatomia coloanei — Disc, fațete, unitate mobilă',
 'Maparea nucleu central/inel periferic și a orientării sagitale a fațetelor lombare (flexie-extensie), opus fațetelor toracice mai orizontale.',
 ['Definiția unității mobile (două vertebre + disc) este explicită.','Nucleus central gelatinos și annulus elastic periferic sunt descrise.','Orientarea sagitală lombară și cuplul flexie-extensie sunt enunțate.','Fațetele toracice, nu lombare, sunt mai orizontale și permit înclinarea laterală și rotația.','Opțiunea inversează nucleul și inelul.']],
 8,'Oglindește nucleus/annulus și atribuie lombarului orientarea orizontală toracică.',['nucleus pulposus','Faţetele lombare']),

q(96,['Condrosarcomul, conform tabelului 28-9:',
 ['Apare la 40–60 de ani, ca masă tumorală în creștere cu durere surdă, în zone centrale (centurile bazinului și umărului)','Poate reprezenta transformarea malignă a unui encondrom sau osteocondrom preexistent, mai ales dacă este multiplu','Este tumora copilului de 10–15 ani, diafizară, cu aspect de „bulb de ceapă”','Spiculii „raze de soare” metafizari definesc condrosarcomul, nu osteosarcomul','Proteinuria Bence Jones confirmă condrosarcomul, nu mielomul'],'AB',631,'Tumori osoase — Condrosarcomul (Tabelul 28-9)',
 'Separarea vârstei 40–60 și a originii pe encondrom/osteocondrom de Ewing („bulb de ceapă”) și de osteosarcom („raze de soare”).',
 ['Vârsta, durerea surdă și sediul central pelvi-scapular sunt din tabel.','Transformarea encondromului/osteocondromului, mai ales multiplu, este citată.','10–15 ani, diafiză și bulb de ceapă definesc sarcomul Ewing.','Razele de soare sunt ale osteosarcomului metafizar.','Bence Jones ține de mielomul cu origine plasmocitară.']],
 8,'Mută semnele Ewing și osteosarcom (bulb de ceapă, raze de soare) pe condrosarcomul adultului de 40–60 de ani.',['40-60 de ani','encondrom']),

q(97,['Evaluarea de laborator a unei suspiciuni de tumoră osoasă include:',
 ['În carcinomul de prostată, antigenul specific prostatic se măsoară înainte de tușeul rectal','Dacă se suspectează un mielom, este necesară electroforeza proteinelor serice','Studiul funcției hepatice și determinarea acidului uric, fosfatazei alcaline, calciului și fosforului evaluează formarea sau resorbția osoasă','Tușeul rectal precede dozarea PSA, pentru a „activa” antigenul','Electroforeza se rezervă osteosarcomului cu raze de soare, nu mielomului'],'ABC',631,'Neoplasmele osului — Laborator (PSA, electroforeză)',
 'Ordinea PSA înainte de tușeu, electroforeza din mielom și panelul FA/Ca/P/uric, opus inversării tușeu-PSA.',
 ['Textul cere măsurarea PSA înainte de tușeul rectal.','Electroforeza serică este impusă de suspiciunea de mielom.','Panelul hepatic, uric, FA, calciu și fosfor este enumerat.','Ordinea corectă este PSA apoi tușeu, nu invers.','Electroforeza ține de mielom, nu de osteosarcom.']],
 8,'Inversează ordinea PSA–tușeu și atribuie electroforeza osteosarcomului în locul mielomului.',['antigenului specific prostatei','electroforeza proteinelor serice']),

q(98,['Imagistica și biopsia tumorilor osoase:',
 ['Scintigrafia cu technețiu-99m pirofosfat este un screening excelent al metastazelor, dar este negativă în mielomul multiplu','CT definește osul cortical și este metoda de preferat pentru leziunile pulmonare mici','IRM evaluează extinderea intramedulară și relația cu pachetele vasculonervoase','Tehnicile speciale de imagistică se efectuează înainte de a recurge la biopsie','Biopsia se practică înaintea oricărei imagistici, incizia fiind transversală pe os, cu disecție musculară extinsă'],'ABCD',632,'Tumori osoase — Scintigrafie, CT, IRM și biopsie',
 'Ierarhia imagistică (scintigrafie de screening, CT cortical/pulmonar, IRM medular) înaintea biopsiei longitudinale atelejate.',
 ['Fixarea Tc-99m în osul activ și negativitatea din mielom sunt explicite.','Rolul CT pentru corticală și noduli pulmonari mici este enunțat.','IRM pentru măduvă și raportul vasculonervos este descris.','Imagistica specială precede biopsia.','Incizia este în axul longitudinal, evitând disecția musculară extinsă; imagistica vine înainte.']],
 8,'Inversează ordinea biopsie-imagistică și transformă incizia longitudinală într-una transversală contaminată.',['99m pirofosfat','înainte de a recurge la biopsie']),

q(99,['Riscul iminent de fractură pe os patologic justifică osteosinteza profilactică atunci când leziunea ocupă:',
 ['Peste 50% din diametrul corticalei osului','Sub 10% din diametrul medular, analog nidusului de osteom osteoid','Întreaga epifiză, dar nu corticala diafizară','Doar trabeculele, fără interesare corticală','Peste 90% din lungimea diafizei, analog unei fracturi segmentare'],'A',632,'Metastaze osoase — Pragul de 50% și osteosinteza profilactică',
 'Reținerea pragului de peste 50% din diametrul cortical ca indicație de fixare profilactică, înaintea fracturii, care are morbiditate mai mare.',
 ['Textul leagă ocuparea a peste 50% din diametrul corticalei de riscul iminent și de preferința pentru osteosinteză profilactică.','Nidusul sub 1 cm este al osteomului osteoid, nu pragul de fractură patologică.','Pragul este cortical (diametru), nu o regulă epifizară.','Interesarea doar trabeculară fără 50% cortical nu este indicația citată.','90% din lungime nu este criteriul din acest paragraf.']],
 8,'Permutează pragul de 50% din diametrul cortical cu 10% (nidus) sau 90% (segmentară).',['peste 50% din diametrul','os patologic']),

q(100,['Ciclul normal de mers se caracterizează prin:',
 ['Se extinde de la atingerea solului cu călcâiul unui picior până la următoarea atingere a solului cu același călcâi','Faza de sprijin ocupă 60% din ciclu și începe cu atingerea călcâiului, urmată de piciorul plat, terminându-se cu desprinderea degetelor','Faza de balansare ocupă 40% din ciclu, cu pendularea membrului până la atingerea călcâiului','Faza de sprijin ocupă 40%, iar balansarea 60%, călcâiul atingând solul la sfârșitul sprijinului','Lungimea pasului este distanța dintre două contacte succesive ale aceluiași călcâi, identică ciclului'],'ABC',632,'Mersul — Ciclul, sprijin și balansare',
 'Definirea ciclului călcâi-călcâi ipsilateral, a succesiunii heel-strike → foot-flat → toe-off (60%) și a balansului de 40%.',
 ['Definiția ciclului de la un contact de călcâi la următorul ipsilateral este explicită.','60% sprijin și succesiunea călcâi–picior plat–desprinderea degetelor sunt descrise.','40% balansare până la noul contact de călcâi este enunțată.','Raportul 60/40 este inversat în această opțiune.','Lungimea ciclului este călcâi-călcâi ipsilateral; lungimea pasului este distanța (începută pe pagina aceasta, distinctă de ciclu).']],
 8,'Oglindește 60%/40% și confundă lungimea pasului cu lungimea ciclului ipsilateral.',['60% din ciclu','atingerea călcâiului']),

q(101,['Etiologia durerii lombare joase:',
 ['În 80–90% dintre cazuri etiologia este necunoscută, patogenia rămânând neelucidată','Mai puțin de 10% dintre pacienți au durere iradiată în teritoriul sciatic (L5–S3)','Numai 1–2% dintre pacienți necesită tratament chirurgical pentru hernie de disc','Majoritatea lombalgiilor se datorează unui „disc alunecat”, indicația chirurgicală fiind regula','Peste 50% necesită discectomie în primele 2 săptămâni'],'ABC',623,'Lombalgia — Cauze necunoscute, sciatică, chirurgie',
 'Contrastarea necunoscutei de 80–90% cu sciatica <10% și cu chirurgia de 1–2%, opus mitului discului alunecat.',
 ['Intervalul 80–90% cu etiologie necunoscută este explicit.','Pragul sub 10% pentru iradierea sciatică este citat.','Doar 1–2% ajung la chirurgie pentru hernie.','Textul respinge opinia că majoritatea ar fi „disc alunecat”.','50% se ameliorează în 2 săptămâni cu tratament simptomatic, nu prin discectomie.']],
 8,'Transformă excepția chirurgicală 1–2% în regulă și atribuie majoritatea cazurilor discului herniat.',['80--90%','1-2%']),

q(102,['Cu tratament simptomatic, ameliorarea durerii lombare joase se produce în:',
 ['50% dintre cazuri în 2 săptămâni și 90% în 3 luni','10% în 2 săptămâni, restul impunând chirurgie','90% în 48 de ore, analog claudicației vasculare','1–2% în 3 luni, ponderea celor operați','Nicio ameliorare spontană, orteza fiind necesară până la maturitate, ca în scolioză'],'A',623,'Lombalgia — Istoria naturală',
 'Reținerea ferestrelor 50% la 2 săptămâni și 90% la 3 luni, distincte de 1–2% chirurgie și de 80% rezoluție la 6 săptămâni a durerii mecanice.',
 ['Cele două procente și ferestrele temporale sunt enunțate explicit.','Ameliorarea este regula, nu excepția de 10%.','48 de ore este fereastra claudicației vasculare, nu a lombalgiei.','1–2% este ponderea chirurgicală, nu rata de ameliorare.','Orteza până la maturitate ține de scolioza adolescentului, nu de contractura lombară.']],
 8,'Permutează 50%/2 săptămâni și 90%/3 luni cu 1–2% chirurgie sau cu 48 de ore vasculare.',['50% se ameliorează','90% în 3 luni']),

q(103,['Osteomielita cronică și infecția de implant:',
 ['Bacteriile izolate de un sechestru osos avascular rămân latente și se pot reactiva după mulți ani, cu traiect de drenaj','Tratamentul eficient al implantului infectat este îndepărtarea chirurgicală, debridarea și antibioterapia parenterală','S. aureus rămâne principala cauză a infecției osoase la adulți; S. epidermidis poate produce infecții mai puțin virulente','Antibioticele orale fără debridarea sechestrului eradică infecția, implantul putând fi păstrat de rutină','Etiologia piciorului diabetic este monomicrobiană, rezervată Haemophilus influenzae'],'ABC',617,'Osteomielita — Sechestru, implant și adult',
 'Recunoașterea sechestrului ca sanctuar, a explantării ca tratament al protezei infectate și a dualității S. aureus/S. epidermidis.',
 ['Peretele osos avascular (sechestrul) și latența de ani sunt descrise.','Triada explantare–debridare–antibiotic parenteral este explicită.','S. aureus ca germen principal adult și S. epidermidis ca variantă mai puțin virulentă sunt citate.','Sechestrul trebuie debridat; păstrarea de rutină a implantului nu este tratamentul eficient.','Piciorul diabetic are etiologie mixtă aerobă și anaerobă, nu H. influenzae (copil <3 ani).']],
 8,'Păstrează implantul și neagă sechestrul, apoi atribuie piciorului diabetic spectrul pediatric de H. influenzae.',['sechestru osos','aureus rămâne']),

q(104,['Contractura lombară (durerea mecanică) și spondiloliza:',
 ['Durerea mecanică radiază rar dincolo de genunchi și rămâne localizată la coloană și zona fesieră','Mai mult de 80% dintre aceste probleme se rezolvă în 6 săptămâni de la debut','Spondiloliza este fractura de pars interarticularis, imediat caudal de fațeta superioară, după hiperextensie plus forță rotațională','Durerea mecanică iradiază caracteristic sub genunchi, în teritoriul L5–S3, și impune discectomie','Pars interarticularis este sediul zonei Looser din osteomalacie, nu al fracturii de stres vertebrale'],'ABC',623,'Lombalgia mecanică — Spondiloliză (pars interarticularis)',
 'Contrastarea iradierii scurte (deasupra genunchiului) și a rezoluției în 6 săptămâni cu sediul spondilolizei în pars, nu cu sciatica chirurgicală.',
 ['Iradierea rară dincolo de genunchi este explicită.','Fereastra de 6 săptămâni pentru >80% este citată.','Sediul pars, imediat caudal de fațeta superioară, și cuplul hiperextensie–rotație sunt descrise.','Iradierea sub genunchi definește sciatica, nu durerea mecanică.','Zona Looser este a osteomalaciei (col femural, ramuri pubiene), nu pars.']],
 8,'Transformă durerea mecanică (deasupra genunchiului, 6 săptămâni) în sciatică chirurgicală și mută pars pe zona Looser.',['pars interarticularis','săptămâni']),

q(105,['Managementul artritei reumatoide avansate și al altor artropatii:',
 ['În distrugeri articulare avansate, rupturile tendinoase sunt reparate, iar rezecția artroplastică sau endoprotezarea ajută mobilitatea','Echipa multidisciplinară include reumatolog, chirurg ortoped, fizioterapeut, terapeut ocupațional și asistent social','Anti-TNF au fost adăugați tratamentului artritei inflamatorii sistemice, cu reducere dramatică a durerii la unii pacienți; efectele pe termen lung nu sunt cunoscute','Anti-TNF înlocuiesc de rutină echipa multidisciplinară, efectele pe termen lung fiind bine stabilite','Guta acută se previne cu allopurinol, iar puseul se tratează doar prin decompresie centrală a capului femural'],'ABC',621,'Artrita reumatoidă — Echipă, anti-TNF și artropatii',
 'Păstrarea echipei multidisciplinare și a incertitudinii pe termen lung a anti-TNF, distincte de cristalele gutei și de decompresia osteonecrozei de pe aceeași pagină.',
 ['Repararea tendinoasă și artroplastia/endoprotezarea în stadiul avansat sunt enunțate.','Componența echipei este enumerată.','Reducerea dramatică a durerii și necunoașterea efectelor de lungă durată sunt explicite.','Anti-TNF se adaugă tratamentului, nu înlocuiesc echipa; prognosticul lung nu este cunoscut.','Puseul gutos se tratează cu AINS sau colchicină; decompresia centrală este a osteonecrozei.']],
 8,'Transformă anti-TNF în substitut al echipei, cu siguranță pe termen lung, și mută decompresia capului femural pe guta acută.',['anti-TNF','echipă multidisciplinară']),
];
