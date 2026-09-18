import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('tromboembolism',29,-810,`tromboembolism-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const TROMBOEMBOLISM_D=[
q(66,['Tromboza arterială, spre deosebire de cea venoasă, produce:',
 ['Trombi albi, în care predomină trombocitele și fibrina, forțele de forfecare și ruptura plăcii ateromatoase fiind determinante; trombii venoși sunt roșii, din fibrină și hematii','Trombi roșii în artere, din hematii, fără fibrină','Doar ocluzie prin placă, fără participarea trombocitelor','Emboli paradoxali sistematici, fără atașare de perete','Un proces limitat la capilare, identic hemostazei extraendoteliale'],'A',1001,'Patogeneza trombozei — Trombi albi versus roșii',
 'Separarea trombului alb (plachete–fibrină, forfecare, placă) de trombul venos roșu (fibrină–hematii).',
 ['Contrastul alb/roșu și componentele sunt din închiderea paginii.','Trombii roșii sunt venoși, nu arteriali.','Placa inițiază tromboza arterială, dar cheagul conține trombocite și fibrină.','Trombii sunt atașați de perete; embolii se desprind secundar.','Tromboza intramurală diferă de hemostaza extraendotelială.']],
 8,'Distractorii inversează culoarea/compoziția și reciclează hemostaza extraendotelială din definiția de pe aceeași pagină.',['trombi albi','trombi roşii']),

q(67,['Identificați afirmația corectă referitoare la ponderea globală a trombozei:',
 ['Se crede că tromboza este cauza a aproximativ 25% din totalul deceselor din întreaga lume, în fiecare an','Tromboza explică sub 1% din mortalitatea globală, fiind o boală rară a adultului tânăr','Toate decesele cardiovasculare sunt prin tromboză venoasă, fără componentă arterială','Ponderea de 25% privește doar EP de spital, nu mortalitatea mondială','Tromboza nu figurează printre cauzele de deces, fiind doar o sechelă a ateromului'],'A',1002,'Factorii care influențează tromboza — Impact global',
 'Reținerea ordinii de mărime de 25% din decesele mondiale atribuite trombozei.',
 ['Cifra de aproximativ 25% este fraza de deschidere a paginii.','Nu este o boală rară de sub 1%.','Textul distinge arterialul de venos, ambele trombotice.','25% este global, nu doar EP nosocomială.','Tromboza este descrisă ca proces cauzal, nu doar sechelă.']],
 8,'Distractorii comprimă 25% la o raritate sau o limitează la EP de spital, exact contrastul frazei de deschidere.',['25% din totalul','întreaga lume']),

q(68,['Gradul în care factorii de risc cresc probabilitatea de TEV se ierarhizează astfel:',
 ['Factorii puternici cresc riscul de 10-50 de ori (chirurgie majoră, traumatisme, repaus absolut la pat)','Factorii moderați cresc riscul de 3-10 ori (sarcină, estrogeni, chirurgie minoră sub anestezie generală; cele mai multe trombofilii ereditare)','Factorii slabi cresc riscul de până la 3 ori (obezitate, călătorii pe distanțe lungi)','Obezitatea crește riscul de 10-50 de ori, identic chirurgiei majore','Trombofiliile ereditare sunt factori slabi, sub 1,5 ori, fără interacțiune cu estrogenii'],'ABC',1002,'Epidemiologie — Magnitudinea factorilor de risc',
 'Memorarea treptelor 10-50× / 3-10× / până la 3× și a exemplelor (chirurgie versus obezitate/călătorie).',
 ['Treapta 10-50× cu exemplele chirurgical-traumatice este explicită.','Treapta 3-10×, inclusiv trombofiliile, este din același paragraf.','Treapta până la 3× pentru obezitate și călătorii completează ierarhia.','Obezitatea este factor slab, nu puternic.','Trombofiliile sunt treapta moderată 3-10×.']],
 8,'Distractorii urcă obezitatea pe treapta 10-50× a chirurgiei majore și coboară trombofilia sub 1,5×.',['10-50 de ori','până la 3 ori']),

q(69,['Incidența TEV după etnie, potrivit capitolului, este:',
 ['Cea mai mare la persoanele cu descendență africană și cea mai scăzută la asiatici; populația albă are o incidență intermediară','Identică în toate grupurile etnice, în jur de 1 la 100 pe an din copilărie','Maximă la asiatici, minimă la descendența africană','Absentă la albi, fiind o boală doar a vârstnicului african','Independentă de etnie, determinată doar de grupa sanguină'],'A',1002,'Epidemiologie — Variația etnică',
 'Reținerea gradientului african > alb > asiatic, din motive încă neelucidate.',
 ['Gradientul african–alb–asiatic este fraza de închidere.','Incidența variază cu vârsta și etnia, nu este 1/100 din copilărie.','Direcția african versus asiatic este inversă.','Albi au incidență intermediară, nu nulă.','Textul invocă etnia, nu grupa sanguină.']],
 8,'Distractorii inversează polii african/asiatic sau anulează variația etnică descrisă în același paragraf de epidemiologie.',['descendenţă africană','asiatici']),

q(70,['Pe ECG-ul din EP acută, dincolo de S1Q3T3 prezent doar la o minoritate, se mai pot observa:',
 ['Suprasolicitare de ventricul drept, cu inversarea undei T în derivațiile inferioare (II, III, aVF) și precordiale drepte (V1-V4)','Tahicardie și aspect de bloc de ramură dreaptă incomplet (R în aVR și V1, S în V6), ca în figura 29.1','Un BAV complet cu bradicardie, patognomonic pentru infarctul pulmonar','Unde T pozitive înalte în V1-V4, care confirmă EP fără imagistică','Un traseu normal exclude EP, S1Q3T3 fiind prezent la majoritatea pacienților'],'AB',1003,'Diagnostic — ECG în EP',
 'Adăugarea inversării T în V1-V4 și a BRD incomplet din figură la S1Q3T3-ul minoritar deja consacrat.',
 ['Inversarea T inferioară și precordial dreaptă este din paragraf.','Tahicardia și BRD incomplet sunt din legenda figurii.','BAV-ul cu bradicardie nu este descris; forma severă este tahipneică/tahicardică.','Undele T sunt inversate, nu pozitive înalte; ECG nu confirmă singur.','S1Q3T3 este minoritar; traseul poate fi nespecific.']],
 8,'Distractorii transformă un traseu nespecific (T inversate, BRD incomplet) într-un BAV sau într-un test de confirmare.',['V1-V4','bloc de ramură dreaptă incomplet']),

q(71,['Scorul Wells cu două niveluri pentru EP (Cadranul 29.4) include:',
 ['Semne și simptome de TVP (cel puțin edem al piciorului și durere la palparea venelor profunde) — 3 puncte; diagnostic alternativ mai improbabil decât EP — 3 puncte','Alură ventriculară >100/min, imobilizare >3 zile sau chirurgie în ultimele 4 săptămâni și istoric de TVP/EP — câte 1,5 puncte','Hemoptizie — 1 punct; cancer (tratament în ultimele 6 luni sau paleație) — 1 punct','EP probabilă la un scor simplificat >4','Un scor >4 confirmă EP fără D-dimeri sau imagistică, imobilizarea fiind cotată pe 12 săptămâni ca în TVP'],'ABCD',1004,'Cadranul 29.4 — Scorul Wells pentru EP',
 'Reținerea punctajelor 3/3/1,5/1 și a pragului >4, distinct de fereastra de 12 săptămâni a scorului pentru TVP.',
 ['Cele două iteme de 3 puncte sunt din tabel.','Triada de 1,5 puncte (AV, imobilizare 4 săptămâni, istoric) este explicită.','Hemoptizia și cancerul valorează 1 punct fiecare.','Pragul >4 pentru EP probabilă este din scorul simplificat.','Scorul nu diagnostichează singur; imobilizarea în EP este 4 săptămâni, nu 12.']],
 8,'Patru itemi/praguri reale; distractorul aplică fereastra de 12 săptămâni a Wells-TVP asupra EP și transformă scorul în test de confirmare.',['>4','ultimele 4 săptămâni']),

q(72,['După un algoritm Wells–D-dimeri negativ la probabilitate pre-test scăzută, rata de eșec (TEV ratat) în 3 luni este:',
 ['Sub 2%, fără a se putea exclude complet TEV','Circa 25%, impunând CTPA de rutină la toți','Nulă, D-dimerul negativ având valoare predictivă pozitivă de 100%','Peste 50% la vârstnici, D-dimerul fiind specific','Identică unui Wells de EP probabilă, imagistica nemaifiind necesară'],'A',1004,'Măsurarea D-dimerilor — Rata de eșec',
 'Reținerea plafonului <2% în 3 luni ca limită a căii D-dimeri-negativ, nu ca excludere absolută.',
 ['Rata mică de eșec <2% în 3 luni este avertismentul explicit.','25% ar anula utilitatea căii de excludere.','Valoarea este predictivă negativă înaltă, nu pozitivă 100%.','D-dimerii sunt nespecifici la vârstnici, nu specifici.','La Wells probabil se merge direct la imagistică.']],
 8,'Distractorii umflă rata de eșec sau pretind excludere absolută, exact nuanța <2% din același paragraf.',['<2% în 3 luni','valoare predictivă negativă']),

q(73,['La pacienții internați și la gravidele cu suspiciune de TVP sau EP, capitolul indică:',
 ['Să fie considerați ca având risc înalt și, în consecință, să beneficieze de examinare imagistică adecvată','Algoritmul D-dimeri al asistenței primare/UPU nu li se aplică ca atare','D-dimerul negativ le exclude TEV identic ambulatoriului, fără imagistică','Gravidele se investighează doar după naștere, iradierea fiind interzisă în orice trimestru','Internații așteaptă 48 de ore fără anticoagulant, scorul Wells fiind suficient'],'AB',1005,'Calendarul investigațiilor — Internați și gravide',
 'Recunoașterea că internatul și gravida sunt risc înalt, cu imagistică, în afara căii D-dimeri a UPU.',
 ['Încadrarea ca risc înalt și imagistica sunt enunțate.','Abordările descrise se aplică doar asistenței primare sau UPU.','Calea D-dimeri nu este transpusă ca atare.','Textul cere imagistică adecvată, nu amânare după naștere.','Anticoagularea se începe dacă imagistica întârzie (1 oră EP / 4 ore TVP).']],
 8,'Distractorii aplică calea ambulatorie D-dimeri asupra gravidei/internatului, pe care textul îi scoate din acest algoritm.',['risc înalt','femeile gravide']),

q(74,['Angiografia pulmonară CT (CTPA) și scintigrafia V/Q, ca imagistică a EP, se deosebesc prin:',
 ['CTPA este cea mai comună tehnică, sensibilă și disponibilă, și poate oferi un diagnostic alternativ când EP este exclusă','V/Q are doză mai mică de radiații și este preferată în insuficiență renală și alergie la contrastul i.v.; o scintigrafie V/Q normală exclude EP','Faza de perfuzie folosește agregate de albumină marcate cu tehnețiu; faza de ventilație, xenon sau tehnețiu inhalat','V/Q înlocuiește CTPA la toți instabilii, fiind mai rapidă și diagnostică în toate bolile pulmonare preexistente','CTPA este interzisă când se dorește un diagnostic alternativ, V/Q având radiație mai mare'],'ABC',1005,'Examinarea imagistică a EP — CTPA versus V/Q',
 'Contrastarea CTPA (alternativă diagnostică) cu V/Q (radiație mică, IR, alergie; normal = excludere).',
 ['Rolul CTPA de tehnică comună cu diagnostic alternativ este explicit.','Doza mică, preferința din IR/alergie și excluderea prin V/Q normal sunt din paragraf.','Cele două faze (albumină–tehnețiu versus xenon/tehnețiu) sunt descrise.','V/Q este mai puțin disponibilă și adesea non-diagnostică în boli pulmonare preexistente.','CTPA tocmai poate oferi alternativa; V/Q are doză mai mică, nu mai mare.']],
 8,'Distractorii inversează radiația și disponibilitatea și pretind că V/Q este testul de șoc, contrar algoritmului de instabilitate.',['agenţii de contrast','xenon']),

q(75,['Tromboza venoasă profundă a membrului superior:',
 ['Algoritmul de diagnostic nu este atât de bine stabilit; pacienții cu durere și edem de braț necesită, de regulă, ultrasonografie','Respectă, ca tratament, aceleași principii ca TVP a membrului inferior; multe episoade țin de catetere centrale, anticoagularea continuând ≥3 luni și mai mult dacă linia rămâne in situ','Se confirmă prin Wells-EP >4, fără imagistică de braț','Cateterul central se extrage imediat, anticoagularea fiind superfluă după 48 de ore','TVP de membru superior nu embolizează și nu se anticoagulează'],'AB',1006,'TVP a membrului superior',
 'Recunoașterea US ca prim test și a regulii ≥3 luni (prelungită cât cateterul rămâne in situ).',
 ['Algoritmul slab codificat și US la durere/edem sunt din paragraf.','Principiile identice și durata legată de cateter sunt de la pagina de recurență.','Wells-EP nu diagnostichează TVP de braț.','Anticoagularea continuă cel puțin 3 luni.','Nu se neagă riscul embolic; se tratează ca TVP.']],
 8,'Distractorii aplică Wells-EP asupra brațului și scurtează anticoagularea la 48 de ore, contrar regulii de ≥3 luni/cateter.',['membrului superior','3 luni'],[1010]),

q(76,['Embriopatia warfarinică, dincolo de interdicția de clasă din sarcină, se caracterizează prin:',
 ['Apare între săptămânile 6 și 12, cu anomalii scheletice incluzând hipoplazie nazală și epifize punctate','Mai târziu, warfarina produce hemoragie fetală, anomalii neurologice și risc semnificativ de deces intrauterin','La femeia care rămâne însărcinată sub warfarină, medicamentul este considerat sigur până în săptămâna 6, deci se înlocuiește atunci cu LMWH','Embriopatia este maximă în săptămâna 2, warfarina fiind sigură între 6 și 12','LMWH traversează placenta identic warfarinei, deci se evită până după naștere'],'ABC',1007,'Situații speciale — Warfarina în sarcină',
 'Reținerea ferestrei 6-12 săptămâni (hipoplazie nazală, epifize punctate) și a siguranței până în săptămâna 6.',
 ['Fereastra 6-12 și anomaliile scheletice sunt explicite.','Hemoragia fetală tardivă și decesul intrauterin completează toxicitatea.','Siguranța până în săptămâna 6 și switch-ul la LMWH sunt conduita.','Fereastra de teratogenitate este 6-12, nu săptămâna 2.','LMWH nu traversează placenta și este sigură pentru făt.']],
 8,'Distractorii inversează fereastra 6-12 săptămâni și atribuie LMWH pasajul transplacentar al warfarinei.',['a 6-a şi a 12-a','hipoplazia nazală']),

q(77,['Conform Cadranului 29.5, PESI original (nu varianta simplificată) stratifică mortalitatea la 30 de zile astfel:',
 ['Clasa I: ≤65 puncte, mortalitate 0-1,6%; clasa II: 66-85 puncte, 1,7-3,5%','Clasa III: 86-105 puncte, 3,2-7,1%; clasa IV: 106-125 puncte, 4,0-11,4%','Clasa V: >125 puncte, 10,0-24,5%','Statusul mental alterat valorează +60 de puncte, cancerul +30, TAS <100 mmHg +30, AV >110/min +20','Clasa I începe de la 125 de puncte, identic PESI simplificat cu mortalitate 10,9%'],'ABCD',1008,'Cadranul 29.5 — PESI original',
 'Memorarea claselor I–V (≤65 până la >125) și a itemilor grei (status mental +60, cancer +30).',
 ['Clasele I-II și intervalele de mortalitate sunt din tabel.','Clasele III-IV completează scara.','Clasa V >125 cu 10-24,5% închide stratificarea.','+60 mental, +30 cancer, +30 TAS, +20 AV sunt din lista de puncte.','125 de puncte este clasa V, nu I; 10,9% este PESI simplificat ≥1.']],
 8,'Patru trepte numerice; distractorul confundă clasa I (≤65) cu pragul >125 și cu mortalitatea PESI simplificat.',[':565 puncte','+60 puncte']),

q(78,['Tromboliza și filtrele de VCI, în nuanțele neacoperite de indicația de șoc, se caracterizează prin:',
 ['Agenții trombolitici au un risc de 2% de hemoragie intracraniană, mai mare decât anticoagularea','Rolul trombolizei în EP cu risc intermediar (fără hipotensiune, dar cu disfuncție VD și pro-BNP/troponină crescute) rămâne controversat','Filtrele VCI nu reduc riscul de EP recurentă față de anticoagularea singură, se asociază independent cu TVP și se preferă recuperabile, îndepărtate când anticoagularea devine sigură','Tromboliza este standardul EP intermediare, filtrele permanente reducând EP sub anticoagulare','Hemoragia intracraniană este nulă, filtrele permanente fiind preferate celor recuperabile'],'ABC',1008,'Rolul trombolizei; Filtrele de venă cavă inferioară',
 'Contrastarea riscului de 2% ICH, a controversiei de risc intermediar și a limitelor filtrului (fără reducere a EP, plus TVP).',
 ['Cifra de 2% ICH este explicită.','Definiția riscului intermediar și controversa sunt din același paragraf.','Absența beneficiului versus AC, riscul de TVP și preferința recuperabilelor sunt enunțate.','Tromboliza intermediară nu este standard; filtrele nu bat anticoagularea.','ICH nu este nulă; se preferă filtre recuperabile.']],
 8,'Distractorii transformă controversa intermediară în standard și inversează preferința pentru filtre recuperabile.',['2% de hemoragie','filtrele recuperabile']),

q(79,['Eficacitatea și durata anticoagulării după lunile 3, dincolo de recurența de 5% în anul următor opririi, includ:',
 ['Anticoagulantele reduc riscul relativ de tromboză recurentă cu 80-90%, cu un risc absolut de hemoragie majoră de 1-3% pe an','Dacă tratamentul a durat cel puțin 3 luni, o durată mai lungă nu pare să reducă riscul de tromboză recurentă după încetarea anticoagulării','Decizia de a continua ține de echilibrul recurență versus sângerare și de opinia pacientului','Prelungirea de la 3 la 12 luni anulează recurența de după oprire, sângerarea majoră fiind sub 0,1% pe an','Reducerea relativă de 80-90% dispare după luna 1, deci se oprește de rutină la 4 săptămâni'],'ABC',1008,'Durata tratamentului — RRR și platoul după 3 luni',
 'Reținerea RRR 80-90%, a sângerării 1-3%/an și a platoului: prelungirea peste 3 luni nu scade recurența post-oprire.',
 ['80-90% și 1-3% pe an sunt din paragraf.','Platoul după ≥3 luni este fraza-cheie a paginii următoare.','Individualizarea după risc și preferință este explicită.','Textul neagă beneficiul unei durate mai lungi asupra recurenței post-oprire.','Menținerea minimă este 3 luni, nu 4 săptămâni.']],
 8,'Distractorii pretind că 12 luni anulează recurența post-oprire, exact ceea ce textul infirmă după pragul de 3 luni.',['80-90%','1-3% pe an'],[1009]),

q(80,['Măsurile asupra membrului după TVP proximală, dincolo de prevalența SPT de 40%, includ:',
 ['Rolul ciorapilor până la genunchi cu cel puțin 24 mmHg la gleznă în prevenția SPT rămâne controversat; unii pacienți îi consideră greu de îmbrăcat','5-10% dezvoltă ulcerație de membru inferior, greu de tratat și cu tendință de recădere; la ocluzie ilio-femurală reziduală se cere opinie vasculară, unii beneficiind de stent venos','Ciorapii de 24 mmHg vindecă ulcerația în 48 de ore, stentul fiind interzis','SPT nu ulcerează, ciorapii fiind indicați în boala arterială periferică','Stentul venos înlocuiește anticoagularea, ulcerația apărând la peste 80% din TVP distale'],'AB',1010,'Sindromul post-trombotic — Compresie 24 mmHg; Ulcerație',
 'Contrastarea controversiei ciorapilor ≥24 mmHg cu ulcerația 5-10% și cu stentul ilio-femural selectiv.',
 ['Pragul 24 mmHg și controversa, plus inconfortul, sunt explicite.','5-10% ulcerație și stentul ilio-femural sunt din închidere.','Ciorapii nu vindecă rapid; stentul este o opțiune selectivă.','Ulcerația există; ciorapii antiembolie se evită în boala arterială.','Anticoagularea nu este înlocuită de stent; 80% nu este cifra de ulcerație.']],
 8,'Distractorii transformă controversa 24 mmHg într-un tratament de 48 de ore și umflă ulcerația de la 5-10% la 80%.',['24 mmHg','5-10%']),

q(81,['Conform Cadranului 29.6, printre itemii de risc hemoragic sau de internare se numără:',
 ['Trombocite <75×10⁹/L și hipertensiune sistolică necontrolată (≥230/120 mmHg)','Puncție lombară/epidurală/spinală în următoarele 12 ore sau în ultimele 4 ore','Anestezie totală cu durată >90 de minute, protezare de șold sau genunchi și internare în ATI','Trombocitele >400×10⁹/L contraindică profilaxia mecanică, TA 140/90 fiind pragul hemoragic','Puncția lombară de acum 48 de ore rămâne o contraindicație de LMWH, independent de fereastra de 4 ore'],'ABC',1013,'Cadranul 29.6 — Risc de TEV și de sângerare',
 'Reținerea pragurilor hematologic (75×10⁹), tensional (230/120) și al puncției (12 h înainte / 4 h după).',
 ['Trombocitele <75 și 230/120 mmHg sunt din lista hemoragică.','Ferestrele 12 ore (viitor) și 4 ore (trecut) sunt explicite.','>90 min, artroplastia și ATI sunt itemi de internare.','Pragul hemoragic este trombocitopenie, nu trombocitoză; 230/120, nu 140/90.','Fereastra relevantă este 4 ore, nu 48.']],
 8,'Distractorii înlocuiesc 75×10⁹ și 230/120 cu valori de HTA esențială și extind fereastra de puncție de la 4 la 48 de ore.',['<75 x 109/L','12 ore']),

q(82,['După artroplastia majoră de șold sau genunchi, capitolul notează că aspirina:',
 ['Reduce riscul de tromboză venoasă, deși în mod tradițional nu se credea că ar fi de folos în TEV','Este inutilă, doar DOAC-urile terapeutice prevenind TEV post-artroplastie','Înlocuiește LMWH-ul de internare la toți medicalii imobilizați','Este contraindicată după protezare, crescând TEV de 10-50 de ori','Se administrează doar dacă INR-ul warfarinei depășește 5, fără sângerare'],'A',1013,'Profilaxia farmacologică — Aspirina după artroplastie',
 'Identificarea efectului anti-TEV al aspirinei după înlocuirea majoră de șold/genunchi, contrar prejudecății tradiționale.',
 ['Fraza despre descoperirea reducerii riscului după artroplastie este explicită.','DOAC-urile în doză mică sunt o opțiune, nu unica, și nu infirmă aspirina.','Aspirina este citată după artroplastie, nu ca substitut universal la medicali.','Chirurgia majoră, nu aspirina, este factorul 10-50×.','INR >5 privește managementul warfarinei, nu profilaxia cu aspirină.']],
 8,'Distractorii neagă efectul anti-TEV al aspirinei post-artroplastie sau îl mută pe treapta de risc 10-50× a chirurgiei.',['aspirina','înlocuire (artroplastie)']),

q(83,['DOAC în doză mică după înlocuirea majoră de șold și genunchi:',
 ['Au fost aprobate pentru prevenirea TEV în acest context','Administrarea este continuată timp de 2-5 săptămâni după operație','Se dau în doză terapeutică de EP masivă, 6 luni, fără legătură cu artroplastia','Durata este o singură doză intraoperatorie, identică UFH de profilaxie','Sunt contraindicate după genunchi, fiind rezervate TVP distale netratate'],'AB',1013,'Profilaxia farmacologică — DOAC post-artroplastie',
 'Reținerea aprobării și a ferestrei 2-5 săptămâni post-șold/genunchi, distinct de doza terapeutică.',
 ['Aprobarea pentru prevenție după artroplastie este explicită.','Fereastra 2-5 săptămâni este durata citată.','Doza este mică (profilactică), nu terapeutică de EP masivă.','UFH de profilaxie cere 2-3 injecții/zi; DOAC-ul nu este o doză unică intraoperatorie.','Indicația include genunchiul, nu îl exclude.']],
 8,'Distractorii înlocuiesc fereastra 2-5 săptămâni cu o doză unică sau cu tratamentul de EP masivă.',['2-5 săptămâni','şoldului şi a genunchiului']),

q(84,['În sindromul antifosfolipidic cu tromboză, dincolo de criteriile de recunoaștere, sunt adevărate:',
 ['Prezența SAFL la pacienții cu TEV se asociază cu risc crescut de recurență, ceea ce poate prelungi anticoagularea','Există dovezi că DOAC ar putea fi mai puțin eficiente decât warfarina în prevenirea trombozei recurente în SAFL','Tratamentul prezentării arteriale este controversat: warfarină cu INR 2,0-3,0 sau 3,0-4,0 și/sau antiplachetar','DOAC sunt superioare warfarinei în SAFL, INR-ul arterial fiind inutil','SAFL venos se tratează 6 săptămâni, ca o TVP distală cu factor tranzitoriu rezolvat'],'ABC',1012,'Sindromul antifosfolipidic — Durată și intensitate',
 'Contrastarea recurenței crescute și a slăbiciunii DOAC cu dezbaterea INR 2-3 versus 3-4 în forma arterială.',
 ['Recurența crescută și impactul pe durată sunt enunțate.','Inferioritatea posibilă a DOAC versus warfarină este explicită.','Cele două intensități INR și/sau antiplachetarul sunt dezbaterea arterială.','Textul slăbește DOAC-ul, nu îl declară superior.','6 săptămâni este opțiunea TVP distale cu factor tranzitoriu, nu a SAFL.']],
 8,'Distractorii inversează ierarhia warfarină/DOAC și aplică durata de 6 săptămâni a TVP distale asupra SAFL.',['mai puţin eficiente','INR 3,0-4,0']),

q(85,['Interacțiunile și auto-monitorizarea warfarinei, dincolo de INR 2-3 și t½ 36 de ore, includ:',
 ['Inductorii sau inhibitorii citocromului P450 reduc sau cresc nivelurile de warfarină și INR-ul; aspirina și clopidogrelul nu schimbă nivelul, dar sporesc riscul hemoragic prin efect antiplachetar','Un număr mic de pacienți pregătiți își măsoară INR-ul acasă, cu coagulometre; înaintea procedurilor invazive warfarina se întrerupe cu câteva zile și poate fi înlocuită cu LMWH','Alimentele și alcoolul nu interacționează, warfarina având indice terapeutic larg ca DOAC','Aspirina scade INR-ul prin P450, clopidogrelul fiind fără efect hemoragic','Auto-monitorizarea înlocuiește consilierea pre-procedurală, LMWH-ul de bridging fiind interzis'],'AB',1016,'Warfarina — Interacțiuni P450; Auto-monitorizare',
 'Separarea interacțiunilor farmacocinetice P450 de cele farmacodinamice antiplachetare și a coagulometrului de acasă.',
 ['P450 versus aspirină/clopidogrel este distincția PK/PD.','Coagulometrul de acasă și bridging-ul cu LMWH sunt explicite.','Warfarina are indice îngust și interacțiuni cu dietă/alcool.','Aspirina nu scade INR-ul prin P450.','Consilierea pre-procedurală rămâne necesară.']],
 8,'Distractorii atribuie warfarinei indicele larg al DOAC și transformă interacțiunea antiplachetară într-o scădere de INR via P450.',['cito￾cromului P450','coagulometre']),

q(86,['Conform Cadranului 29.8, dincolo de INR >5 fără sângerare, managementul include:',
 ['La INR ≥8 fără sângerare sau cu sângerare minimă: se oprește warfarina; vitamina K 1-5 mg oral dacă nu sângerează, sau 1-3 mg i.v. dacă sângerarea este minimă; se re-măsoară INR în 24 de ore','La sângerare majoră: se oprește warfarina, se dă PCC 25-50 U/kg (sau plasma 15 ml/kg dacă PCC lipsește) și vitamina K 5 mg i.v.; INR se repetă după PCC','Se caută o cauză anatomică locală a sângerării','La sângerare majoră se crește doza de warfarină, PCC fiind rezervat INR-ului 2-3','Vitamina K orală de 1-5 mg este interzisă la INR ≥8 fără sângerare, plasma 15 ml/kg înlocuind PCC-ul de primă intenție'],'ABC',1016,'Cadranul 29.8 — INR ≥8 și sângerarea majoră',
 'Reținerea vitaminei K 1-5 mg oral / 1-3 mg i.v. la INR ≥8 și a PCC 25-50 U/kg plus vitamina K 5 mg i.v. în sângerarea majoră.',
 ['Pașii de INR ≥8 (oral versus i.v., recontrol 24 h) sunt din tabel.','PCC 25-50 U/kg, plasma 15 ml/kg și vitamina K 5 mg i.v. sunt lista de sângerare majoră.','Căutarea cauzei anatomice este nota cadranului.','Doza se oprește, nu se crește; PCC este pentru sângerarea majoră.','Vitamina K orală este tocmai opțiunea fără sângerare; PCC are prioritate față de plasmă.']],
 8,'Distractorii inversează prioritatea PCC versus plasmă și cresc doza de warfarină în sângerarea majoră.',['1-5 mg oral','25-50 u/kg']),

q(87,['La pacientul cu cancer activ și TEV, datele recente despre DOAC versus LMWH arată:',
 ['DOAC pot fi cel puțin la fel de eficiente ca LMWH în prevenirea trombozei recurente, dar pot crește riscul de sângerare','LMWH a fost, timp de mai mulți ani, tratamentul de elecție, fiind mai eficientă decât warfarina în acest context','DOAC elimină sângerarea, warfarina rămânând superioară LMWH la cancerul activ','Eficacitatea DOAC este nulă, fiind rezervate TVP distale fără cancer','Sângerarea scade sub DOAC față de LMWH, deci se preferă la orice tumori digestive'],'AB',1008,'Pacienții cu cancer — DOAC versus LMWH',
 'Nuanțarea: DOAC ≥ LMWH pe recurență, dar cu mai multă sângerare; LMWH rămâne referința istorică versus warfarină.',
 ['Eficacitatea cel puțin similară și excesul hemoragic sunt din paragraf.','Superioritatea istorică LMWH versus warfarină este explicită.','DOAC nu elimină sângerarea; warfarina este inferioară LMWH aici.','Textul nu anulează eficacitatea DOAC.','Sângerarea poate crește, nu scade, sub DOAC.']],
 8,'Distractorii inversează semnalul hemoragic al DOAC și pretind superioritatea warfarinei asupra LMWH în cancer.',['cel puţin la fel de eficiente','riscul de sângerare']),

q(88,['Diagnosticul hipertensiunii pulmonare tromboembolice cronice (CTEPH) se bazează pe:',
 ['Simptome persistente după EP, monitorizare prin scintigrafie de perfuzie, CTPA care dovedește ocluzie reziduală și ecocardiografie care sugerează hipertensiune pulmonară','Un D-dimer negativ la 48 de ore de la episodul acut, fără imagistică','Doar radiografia toracică normală, CTEPH fiind o diagnoză clinică de efort','Tromboliza sistemică tardivă ca test diagnostic','Oprirea anticoagulării pentru a demasca hipertensiunea la cateterism imediat'],'A',1010,'Complicații — CTEPH diagnostic',
 'Reținerea triadei scintigrafie de perfuzie – CTPA cu ocluzie reziduală – eco sugestivă, la dispnee persistentă.',
 ['Cele trei modalități și contextul de simptome persistente sunt din paragraf.','D-dimerul nu diagnostichează CTEPH.','Radiografia normală nu exclude.','Tromboliza tardivă nu este un test diagnostic.','Textul nu cere oprirea anticoagulării pentru diagnostic.']],
 8,'Distractorii înlocuiesc triadа imagistică (perfuzie/CTPA/eco) cu D-dimeri sau tromboliză tardivă.',['scintigrafie pulmonară de perfuzie','ocluzia reziduală'],[1011]),

q(89,['Dacă HIT este suspectată sau confirmată, anticoagulantele alternative menționate sunt:',
 ['Danaparoid (heparinoid), argatroban (inhibitor direct de trombină i.v.) și fondaparinux','Pacienții cu HIT nu trebuie reexpuși la heparină pe viitor, inclusiv la spălarea cateterelor','Se continuă UFH în doză crescută, protamina vindecând HIT','Warfarina orală se începe imediat, fără anticoagulant non-heparinic de acoperire','Argatrobanul este interzis, singura opțiune fiind reintroducerea LMWH'],'AB',1015,'HIT — Anticoagulante alternative',
 'Recunoașterea triadei danaparoid–argatroban–fondaparinux și a interdicției de reexpunere, inclusiv pe catetere.',
 ['Cele trei alternative sunt enumerate.','Interdicția de reexpunere, inclusiv spălarea cateterelor, este explicită.','Orice heparină se întrerupe; protamina nu tratează HIT.','Se cere un anticoagulant non-heparinic din cauza ratei trombotice.','Argatrobanul este tocmai o opțiune listată.']],
 8,'Distractorii reintroduc heparina sau warfarina fără acoperire, inversând regula de stop și substituție non-heparinică.',['danaparoid','argatroban']),

q(90,['Care dintre următoarele afirmații diferențiază corect ferestrele de imobilizare/chirurgie din scorurile Wells?',
 ['Pentru TVP, chirurgia majoră cotată este în ultimele 12 săptămâni sub anestezie; pentru EP, imobilizarea >3 zile sau chirurgia sunt în ultimele 4 săptămâni','Ambele scoruri cotază chirurgia pe 12 săptămâni, fără deosebire EP/TVP','Wells-EP ignoră imobilizarea, cotând doar hemoptizia cu 3 puncte','Fereastra de 12 săptămâni aparține EP, cea de 4 săptămâni TVP','Imobilizarea nu figurează în niciunul dintre scorurile cu două niveluri'],'A',1004,'Cadranele 29.3 și 29.4 — Ferestre temporale',
 'Contrastarea ferestrei de 12 săptămâni (Wells-TVP) cu cea de 4 săptămâni (Wells-EP).',
 ['12 săptămâni la TVP versus 4 săptămâni la EP sunt valorile din cele două cadrane.','Ferestrele diferă, nu coincid.','EP cotază imobilizarea cu 1,5 puncte; hemoptizia valorează 1, nu 3.','Direcția 12 versus 4 este inversă.','Imobilizarea figurează în ambele scoruri.']],
 8,'Itemul cere distincția 12 versus 4 săptămâni; distractorii le permută sau le anulează din cadranele alăturate.',['12 săptămâni','4 săptămâni']),
];
