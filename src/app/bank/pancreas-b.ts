import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-89;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('pancreas',17,pdfOffset,`pancreas-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const PANCREAS_B=[
q(7,['Anatomia chirurgicală a pancreasului se caracterizează prin:',
 ['Organ retroperitoneal cu patru părți: cap, istm, corp și coadă','Capul este încadrat de potcoava duodenală; procesul uncinat este o prelungire posterioară și inferioară a capului','Vena mezenterică superioară marchează joncțiunea cap–istm; istmul stă imediat deasupra VMS, corpul la stânga ei','Coada se extinde spre hilul splinei, pe care uneori se sprijină','Pancreasul este intraperitoneal, uncinatul ținând de coadă, iar VMS separă coada de splină'],'ABCD',257,'Anatomie — Segmente',
 'Maparea cap–istm–corp–coadă pe VMS ca reper al istmului și pe uncinat ca prelungire a capului.',
 ['Cele patru părți sunt enumerate.','Potcoava duodenală și uncinatul sunt descrise.','Rolul VMS ca reper cap/istm/corp este explicit.','Relația coadă–hil splenic este citată.','Glanda este retroperitoneală; uncinatul ține de cap, nu de coadă.']],
 8,'Mută uncinatul pe coadă și scoate pancreasul din retroperitoneu, două erori de reper.',['patru părţi','procesul uncinat']),

q(8,['Embriologia ductelor pancreatice include:',
 ['La 30 de zile, endodermul duodenal formează mugurii ventral și dorsal','Mugurele ventral (viitorul uncinat) se rotește în sens orar și se așază inferior de cel dorsal','Wirsung se formează prin fuziunea porțiunilor distale ale ductelor dorsal și ventral și se deschide, de obicei, cu CBP la ampula Vater','Santorini este porțiunea distală persistentă a ductului dorsal (duct accesor)','Mugurele ventral dă naștere corpului și cozii, iar Wirsung se deschide izolat, fără CBP'],'ABCD',257,'Embriologie — Wirsung și Santorini',
 'Aplicarea rotației orare a mugurelui ventral și a fuziunii care creează Wirsung versus Santorini persistent.',
 ['Ziua 30 este explicită.','Rotația orară și soarta uncinatului sunt descrise.','Fuziunea și ampula Vater sunt citate.','Santorini ca rest dorsal este menționat.','Mugurele dorsal dă cap, corp și coadă; Wirsung se asociază de obicei cu CBP.']],
 8,'Inversează soarta mugurelui ventral (uncinat vs corp-coadă) și deschiderea Wirsung.',['30 de zile','Canalul Wirsung']),

q(9,['Pancreas divisum se caracterizează prin:',
 ['Aproximativ 10% din populație are ducte ventral și dorsal care nu fuzionează complet','Cea mai mare parte a pancreasului dorsal drenează prin Santorini (papila mică), iar uncinatul/o parte din cap prin papila mare','90% dintre pacienți au pancreatită recurentă, orificiul secundar fiind prea larg','Pancreas divisum este prezent la 90% din populație și impune Whipple de principiu','Santorini drenează doar uncinatul, iar Wirsung întregul corp, fără risc de pancreatită'],'AB',257,'Pancreas divisum',
 'Reținerea prevalenței de 10%, a drenajului dorsal pe Santorini și a faptului că 90% rămân asimptomatici.',
 ['Cifra de aproximativ 10% este explicită.','Pattern-ul de drenaj papilă mică/mare este descris.','90% sunt asimptomatici; orificiul secundar e prea mic, nu prea larg.','10%, nu 90%, au anomalia; Whipple nu este tratamentul de principiu.','Santorini drenează majoritatea pancreasului dorsal, nu doar uncinatul.']],
 8,'Inversează 10% versus 90% (prevalență vs asimptomatici) și forțează Whipple.',['Aproximativ 10%','90% dintre pacienţii']),

q(10,['Pancreasul inelar, cauză rară de obstrucție duodenală la sugar, se tratează prin:',
 ['Șuntare chirurgicală (duodeno-jejunostomie), evitând secționarea parenchimului, care ar avea rată mare de fistule','Secționarea inelului pancreatic, ca gest de elecție, fistula fiind rară','Duodenopancreatectomie cefalică de principiu la nou-născut','ERCP cu sfincterotomie, inelul fiind un pancreas divisum','Observație, obstrucția duodenală rezolvându-se la pubertate'],'A',258,'Pancreas inelar',
 'Recunoașterea duodeno-jejunostomiei ca bypass, față de secțiunea parenchimului care produce fistulă.',
 ['Șuntarea și evitarea secțiunii sunt explicite.','Secționarea este tocmai gestul evitat.','Whipple nu este tratamentul inelului.','Inelul nu este divisum și nu se rezolvă prin sfincterotomie.','Obstrucția la sugar cere bypass, nu observație.']],
 8,'Înlocuiește bypass-ul cu tăierea inelului, exact manevra cu rată mare de fistulă.',['duodeno-jejunostomie','fistule pancreatice']),

q(11,['Variațiile arteriale relevante pentru duodenopancreatectomie includ:',
 ['La aproximativ 20% lipsește artera hepatică dreaptă „clasică”; lobul drept e irigat din AMS (arteră hepatică dreaptă din AMS)','La 20% artera hepatică stângă își are originea în artera gastrică stângă','Aceste vase din AMS se pot leza ușor dacă nu sunt identificate pe CT cu contrast sau intraoperator','Trunchiul celiac se trifurcă normal în gastrică stângă, splenică și hepatică comună','Artera hepatică dreaptă din AMS este prezentă la 80% din populație și poate fi ligaturată fără risc'],'ABCD',258,'Anatomie vasculară — Artera hepatică dreaptă din AMS',
 'Reținerea celor două variații de 20% (AHD din AMS, AHS din gastrică stângă) și a riscului de ligatură în Whipple.',
 ['Cifra de ~20% și originea din AMS sunt explicite.','Cele 20% AHS din gastrică stângă sunt citate.','Avertismentul de lezare/ligatură este descris.','Trifurcația clasică este menționată.','Variația este la 20%, nu 80%; ligatura poate infarcta lobul drept.']],
 8,'Inversează 20% versus 80% și autorizează ligatura AHD din AMS.',['20% din populaţie','arteră hepatică dreaptă']),

q(12,['Secreția exocrină pancreatică se caracterizează prin:',
 ['500–800 mL zilnic de fluid alcalin izoton, cu Na și K egale cu plasma','Când chimul gastric cu pH <3 ajunge în duoden, secretina determină lichid bogat în bicarbonat (pH >8)','Clorul variază invers proporțional cu secreția de bicarbonat','CCK, stimulată de peptide, aminoacizi și acizi grași, contractă vezicula biliară','Volumul zilnic este 50 mL acid, secretina inhibând bicarbonatul când pH-ul duodenal e <3'],'ABCD',260,'Fiziologie exocrină',
 'Aplicarea volumului 500–800 mL, a pragului pH <3 pentru secretină și a relației inversă Cl/HCO3.',
 ['Volumul 500–800 mL este explicit.','Secvența pH <3 → secretină → HCO3 pH >8 este citată.','Relația inversă Cl–bicarbonat este descrisă.','Stimulii CCK și contracția veziculei sunt menționați.','Volumul este alcalin 500–800 mL, nu 50 mL acid.']],
 8,'Inversează volumul și efectul secretinei pe bicarbonat.',['500-800 mL','pH <3']),

q(13,['Identificați afirmația corectă referitoare la funcția endocrină pancreatică:',
 ['Insulele Langerhans sunt mai abundente în coadă; celulele α secretă glucagon la glicemie scăzută, cu glicogenoliză','Insulele predomină în cap, iar glucagonul scade glicemia','Insulina este produsă de celulele acinare, nu insulare','Somatostatina lipsește din insule, fiind doar duodenală','Coada pancreatică este lipsită de insule, de aceea pancreatectomia distală nu afectează glicemia'],'A',261,'Fiziologie endocrină',
 'Recunoașterea densității insulare caudale și a răspunsului α–glucagon la hipoglicemie.',
 ['Abundența în coadă și secreția de glucagon sunt explicite.','Insulele sunt mai abundente caudal, nu în cap; glucagonul crește glicemia.','Insulina este insulară, nu acinară.','Somatostatina figurează printre hormonii insulari.','Coada este tocmai sediul abundent; rezecția distală poate afecta homeostazia glucozei.']],
 8,'Mută insulele din coadă în cap și inversează efectul glucagonului pe glicemie.',['cozii pancreatice','glucagonul']),

q(14,['În etiologia pancreatitei acute, în afara cuplului alcool–litiază, sunt adevărate următoarele:',
 ['Primul episod postetanolic este precedat de 6–8 ani de consum excesiv','La neconsumatorii de alcool, ~60% au calculi biliari ca și cauză mecanică','Medicamente incriminate includ corticosteroizi, tiazide, furosemid, estrogeni și azatioprină','Pancreatita postoperatorie este citată după 0,8–17% proceduri gastrice și 0,7–9,3% proceduri biliare','Alcoolul produce primul episod în primele 48 de ore de consum, fără ani de expunere'],'ABCD',262,'Etiologie — Alcool, litiază, medicamente',
 'Aplicarea ferestrei de 6–8 ani, a ponderii de 60% litiazică la nealcoolici și a listelor medicamentoase/postoperatorii.',
 ['Intervalul 6–8 ani este explicit.','Cifra de 60% este citată.','Lista de medicamente este enumerată.','Procentele gastrice și biliare sunt din Tabelul 17-2.','Primul episod urmează ani de consum, nu 48 de ore.']],
 8,'Comprimă fereastra de 6–8 ani la 48 de ore, o capcană de istoric etanolic.',['6-8 ani','60% dintre pacienţii'],[263]),

q(15,['Semnele Grey Turner și Cullen în pancreatita severă reprezintă:',
 ['Hematom pe flancuri (Grey Turner) și echimoză periombilicală (Cullen), prin disecția sângelui retroperitoneal','Icterul obstructiv palpebral, respectiv xantelasmele de hipertrigliceridemie','Echimoza mastoidiană și cea periorbitală ale fracturii de bază de craniu','Eritemul palmar și spider nevii din ciroză','Livido reticularis al emboliei de colesterol, fără legătură cu retroperitoneul'],'A',263,'Pancreatită acută — Semne cutanate',
 'Diferențierea Grey Turner (flanc) de Cullen (periombilical) ca markeri de hemoragie retroperitoneală.',
 ['Cele două sedii și mecanismul de disecție sunt explicite.','Icterul/xantelasma nu sunt aceste semne.','Battle și raccoon țin de baza craniului.','Semnele cirotice sunt alt capitol.','Livedo-ul embolic nu este descrierea din text.']],
 8,'Mută semnele de hemoragie retroperitoneală pe baza craniului sau pe ciroză.',['Grey Turner','semnul Cullen']),

q(16,['Asocierea amilază ×1,5 peste normal plus lipază ×5 are:',
 ['Sensibilitate de 95% pentru confirmarea diagnosticului de pancreatită acută','Specificitate de 95% și sensibilitate de 61%, ca pragul izolat de 3× amilază','Valoare prognostică superioară criteriilor Ranson','Semnificație doar dacă CT-ul este deja necrotic','Sensibilitate de 20%, insuficientă pentru diagnostic'],'A',263,'Laborator — Amilază și lipază combinate',
 'Diferențierea cuplului 1,5× + 5× (sensibilitate 95%) de pragul izolat 3× amilază (specificitate 95%, sensibilitate 61%).',
 ['Sensibilitatea de 95% a asocierii este explicită.','95%/61% țin de amilaza izolată de 3×, nu de cuplu.','Amilaza/lipaza nu intră în Ranson și nu reflectă gravitatea.','Necroza CT nu este condiția de validare a enzimelor.','Textul atribuie 95%, nu 20%.']],
 8,'Confundă cuplul 1,5×/5× cu pragul izolat 3×, două numere alăturate în același paragraf.',['1,5 ori','5 ori']),

q(17,['Stadializarea CT Balthazar în pancreatita acută atribuie:',
 ['Gradul A pancreasului normal și B creșterii de dimensiuni','Gradul C inflamației pancreatice și/sau a grăsimii peripancreatice','Gradul E descrie pancreasul normal, fără colecții','Un singur CT la internare reflectă gravitatea pe tot parcursul bolii','Gradul B corespunde aerului retroperitoneal și necrozei infectate'],'AB',264,'Prognostic — Clasificarea Balthazar',
 'Memorarea scării A–E (normal → mărire → inflamație → o colecție → colecții multiple/aer), față de caracterul nestatic al bolii.',
 ['A și B sunt din tabel.','C este citat.','E este polul sever (colecții multiple/aer), nu pancreasul normal.','Un singur CT poate să nu reflecte gravitatea ulterioară.','B este mărirea de dimensiuni, nu aerul retroperitoneal.']],
 8,'Inversează polii A și E și tratează CT-ul unic ca prognostic definitiv.',['Grad','Colecţie fluidă peripancreatică']),

q(18,['Pseudochistul pancreatic după pancreatită acută se caracterizează prin:',
 ['Apare de obicei la 3–4 săptămâni, prin maturarea peretelui de colagen al colecției','Nu are epiteliu în perete; poate comunica sau nu cu ductul pancreatic','Cele >5 cm sau persistente peste 1 an tind să crească și merită drenaj','Cele mature (>4 săptămâni) au perete gros, suturabil','Pseudochistul are epiteliu cubic și se formează în primele 24 de ore, impunând drenaj extern imediat'],'ABCD',266,'Pseudochist — Definiție și timing',
 'Aplicarea ferestrei 3–4 săptămâni, a absenței epiteliului și a pragurilor >5 cm / >1 an, față de drenajul prematur.',
 ['Fereastra 3–4 săptămâni este explicită.','Absența epiteliului și comunicarea variabilă sunt citate.','Pragurile >5 cm și >1 an sunt menționate.','Maturarea la >4 săptămâni este descrisă.','Nu are epiteliu; 24 de ore este prea devreme pentru perete suturabil.']],
 8,'Pune epiteliu și drenaj la 24 de ore pe o leziune definită tocmai prin lipsa epiteliului și maturare la 3–4 săptămâni.',['3-4 săptămâni','>5 cm']),

q(19,['Drenajul pseudochistului se alege după comunicarea cu ductul astfel:',
 ['Drenajul extern al unui pseudochist comunicant este contraindicat (fistulă cronică sau infecție)','Cele comunicante cer drenaj intern în stomac, duoden sau ansă Roux; succes >90%','Un fragment de perete se trimite la anatomie patologică pe secțiuni la rece, pentru a exclude un neoplasm','Cele necomunicante pot fi aspirate/drenate percutan, cu risc mic de refacere sau fistulă','Drenajul extern este de elecție în cele comunicante, internul fiind rezervat celor necomunicante'],'ABCD',267,'Pseudochist — Drenaj intern versus extern',
 'Invertirea interzisă: externul e contraindicat dacă există comunicare ductală; internul (>90%) este calea corectă.',
 ['Contraindicația drenajului extern la comunicante este explicită.','Succesul >90% al internului este citat.','Fragmentul pentru excluderea neoplaziei este cerut.','Percutanul la necomunicante este descris.','Direcția intern/extern este inversată față de text.']],
 8,'Inversează indicația intern versus extern după comunicarea cu ductul.',['peste 90%','Drenajul extern']),

q(20,['Pancreatita cronică se deosebește de cea acută prin:',
 ['Alcoolul este responsabil de aproximativ 70% dintre cazuri','Distrucția glandulară este ireversibilă și de obicei progresivă','Când 90% din glandă e distrusă apar insuficiență exo- și endocrină (steatoree, diabet, vitamine liposolubile)','Durerea e surdă epigastrică cu iradiere posterioară; mâncarea o agravează','Alcoolul cauzează sub 5% din cazuri, iar distrucția este reversibilă după un episod unic'],'ABCD',267,'Pancreatită cronică — Etiologie și tablou',
 'Reținerea ponderii de 70% alcool, a ireversibilității și a pragului de 90% pentru insuficiența mixtă.',
 ['Cifra de ~70% este explicită.','Ireversibilitatea este citată.','Pragul de 90% și consecințele sunt descrise.','Caracterul durerii și agravarea alimentară sunt menționate.','70%, nu 5%; distrucția nu este reversibilă.']],
 8,'Inversează ponderea alcoolului și declară reversibilă o leziune pe care textul o numește progresivă.',['aproximativ 70%','90% din glandă']),

q(21,['Supraviețuirea în adenocarcinomul pancreatic se caracterizează prin:',
 ['Boala nerezecabilă: medie ~6 luni, chiar și cu chimioterapie','Rezecția cu margini negative plus adjuvant: ~19 luni','Supraviețuirea la 5 ani este probabil de 20%','Factori nefavorabili: metastaze ganglionare, tumori >3 cm, invazie perineurală','Rezecția cu R0 garantează vindecarea, supraviețuirea la 5 ani depășind 90%'],'ABCD',271,'Cancer pancreatic — Prognostic',
 'Alinierea ferestrelor 6 luni / 19 luni / 20% la 5 ani și a trio-ului N+/mărime/perineural.',
 ['Cele ~6 luni sunt explicite.','Cele ~19 luni sunt citate.','Cifra de 20% la 5 ani este menționată.','Cei trei factori nefavorabili sunt listați.','Chiar după R0 pacienții decedează de obicei din cauza neoplaziei; 20%, nu 90%.']],
 8,'Umflă supraviețuirea R0 la 90%, ignorând cifra textuală de 20% la 5 ani.',['6 luni','19 luni']),

q(22,['La tumora pancreatică nerezecabilă, paliația include:',
 ['Bypass biliar dacă nerezecabilitatea se constată la explorare','Obstrucția gastrică distală apare la ~10% și cere gastrojejunostomie paliativă','Durerea posterioară se ameliorează prin neuroliza plexului celiac','Pruritul prin hiperbilirubinemie se tratează prin stent biliar endoscopic','Gastrojejunostomia este inutilă, obstrucția gastrică neexistând în cancerul pancreatic'],'ABCD',271,'Paliație — Bypass, GJ, neuroliză, stent',
 'Aplicarea ratei de 10% a obstrucției gastrice distale și a trio-ului bypass biliar / GJ / neuroliză / stent.',
 ['Bypass-ul biliar intraoperator este citat.','Cifra de ~10% și GJ sunt explicite.','Neuroliza celiacă este menționată.','Stentul endoscopic pentru prurit este descris.','Obstrucția gastrică distală există și se paliază prin GJ.']],
 8,'Neagă obstrucția gastrică distală, tocmai indicația de GJ din același paragraf.',['I 0% dintre','gastrojejunostomie paliativă']),

q(23,['Insulinomul se caracterizează prin:',
 ['Majoritatea sunt solitare și <2 cm; ~75% în corp și coadă','Aproximativ 10% dintre pacienți au MEN-1','Triada Whipple: simptome de hipoglicemie, glicemie 40–50 mg/dL, dispariția simptomelor după glucoză iv','Insulinoamele nu cresc insulina ca răspuns la secretină, spre deosebire de celulele β normale','Majoritatea sunt în cap, >5 cm și multicentrice, fără legătură cu MEN-1'],'ABCD',272,'Insulinom',
 'Combinarea sediului 75% corporeo-caudal, a 10% MEN-1, a triadei Whipple și a testului la secretină.',
 ['Dimensiunea <2 cm și 75% corp/coadă sunt explicite.','Cifra de 10% MEN-1 este citată.','Cele trei elemente Whipple sunt enumerate.','Absența răspunsului la secretină este descrisă.','Capul este sediul celorlalte TPN funcționale, nu al majorității insulinoamelor.']],
 8,'Mută insulinomul în cap și neagă MEN-1, inversând harta TPN din același paragraf.',['75% dintre ele','Triada Whipple']),

q(24,['Gastrinomul (Zollinger-Ellison) se caracterizează prin:',
 ['Reprezintă ~20% dintre TPN funcționale; trei pătrimi sporadice, o pătrime MEN-1','Peste 50% sunt în peretele duodenal; 60–90% cad în triunghiul gastrinomului','Gastrina >1.000 pg/mL plus pH gastric <2 are valoare diagnostică; două treimi au gastrină <1.000 și cer teste suplimentare','Simptomele (durere, ezofagită, diaree) țin de hiperaciditate; se remit dacă acidul e controlat, independent de gastrină','Gastrinoamele sunt toate pancreatice, sporadice în 10% și cu gastrină diagnostică doar peste 200 pg/mL sub IPP'],'ABCD',272,'Gastrinom',
 'Integrarea ponderii 20%, a sediului duodenal >50%, a triunghiului 60–90% și a pragului 1.000 pg/mL.',
 ['20% și raportul 3/4 vs 1/4 sunt explicite.','Duodenul >50% și triunghiul 60–90% sunt citate.','Pragul 1.000 și pH <2, plus cele două treimi, sunt descrise.','Remisia simptomelor prin controlul acidului este menționată.','Multe nu sunt în pancreas; 1.000, nu 200 sub IPP, este pragul.']],
 8,'Reduce sporadicile la 10% și înlocuiește pragul 1.000 cu 200 pg/mL sub IPP.',['20% dintre TPN','>I.OOO pg/mL']),

q(25,['Chistadenoamele seroase pancreatice:',
 ['Sunt benigne și nu necesită rezecție','Spre deosebire de chistadenocarcinomul seros, foarte rar, care trebuie rezecat','Se confundă frecvent cu IPMN, de aceea toate se rezecează de principiu','Conțin stromă ovariană și apar aproape doar la bărbați','Au potențial invaziv de 40% la diagnostic, ca neoplasmele mucinoase'],'AB',274,'Leziuni chistice — Chistadenom seros',
 'Recunoașterea caracterului benign (fără rezecție) al chistadenomului seros, față de rezecția obligatorie a mucinoaselor.',
 ['Lipsa indicației de rezecție este explicită.','Excepția chistadenocarcinomului seros (rezecție) este citată.','Nu toate leziunile chistice se rezecează; seroasele se observă.','Stroma ovariană ține de neoplasmele mucinoase, la femei.','Cifra de 40% invaziv ține de mucinoase, nu de seroase.']],
 8,'Forțează rezecția seroaselor benigne, confundându-le cu mucinoasele (stromă ovariană, 40% invazive).',['Chistadenoamele seroase','nu necesită rezecţie']),

q(26,['Neoplasmele chistice mucinoase pancreatice se caracterizează prin:',
 ['Apar aproape la femei de vârstă mijlocie și conțin stromă ovariană','La diagnostic, 40% sunt invazive; sediul predilect este corp/coadă','Trebuie rezecate','IPMN sunt mucinoase fără stromă ovariană','Sunt leziuni ale bărbatului tânăr, seroase, fără indicație de rezecție'],'ABCD',274,'Neoplasme mucinoase și IPMN',
 'Contrastul mucinoasă (femei, stromă ovariană, 40% invazive, rezecție) versus IPMN (fără stromă ovariană).',
 ['Terenul feminin și stroma ovariană sunt explicite.','Cifra de 40% și sediul corp/coadă sunt citate.','Indicația de rezecție este enunțată.','IPMN fără stromă ovariană este definit.','Profilul descris este al chistadenomului seros, nu al mucinoasei.']],
 8,'Atribuie mucinoaselor profilul seros (bărbat, fără rezecție), inversând indicația oncologică.',['stromă ovariană','40% dintre tumori']),

q(27,['IPMN-urile care pot fi urmărite prin CT seriat, potrivit textului, sunt cele:',
 ['Asimptomatice, cu diametru care nu depășește 3 cm, fără noduli și fără citologie îngrijorătoare','Simptomatice, >3 cm, cu noduli, care se rezecează de principiu prin observație','Orice IPMN, inclusiv cele cu noduli, observația înlocuind rezecția','Doar cele seroase cu stromă ovariană','Cele de 5 cm cu citologie malignă, observația fiind superioară rezecției'],'A',275,'IPMN — Criterii de urmărire',
 'Aplicarea triadei de observație: asimptomatic, ≤3 cm, fără noduli/citologie suspectă.',
 ['Cele trei condiții de urmărire sunt explicite.','Simptomatic, >3 cm sau noduli sunt criterii împotriva observației simple.','Nodulii sunt aspecte îngrijorătoare, nu de observație.','Stroma ovariană ține de mucinoase, nu de IPMN.','Citologia malignă și 5 cm cer tratament, nu observație.']],
 8,'Pune sub observație tocmai IPMN-urile >3 cm cu noduli, inversând criteriile din ultima pagină.',['>3 cm','noduli']),

q(28,['Arcadele pancreaticoduodenale se formează prin anastomoza dintre:',
 ['Ramurile anterioară și posterioară ale arterei pancreaticoduodenale superioare (din AGD/celiac) cu omonimele inferioare (din AMS)','Artera gastrică stângă cu artera colică stângă, fără participarea AMS','Doar artera splenică cu artera hepatică proprie, în hilul splenic','Artera mezenterică inferioară cu artera rușinoasă internă','Artera renală stângă cu artera gastroepiploică, retroduodenal'],'A',258,'Arcade pancreaticoduodenale',
 'Recunoașterea punții celiac–AMS prin arcadele pancreaticoduodenale superioare (AGD) și inferioare (AMS).',
 ['Anastomoza superioară (AGD) – inferioară (AMS) este explicită.','Gastrica stângă și colica stângă nu formează aceste arcade.','Splenica irigă corp/coadă, nu arcadele cefalice.','AMI nu participă la arcadele pancreaticoduodenale.','Renala nu face parte din rețeaua descrisă.']],
 8,'Înlocuiește puntea celiac–AMS cu pediculi din alte etaje (AMI, renal, gastric).',['pancreaticoduodenale','artera mezenterică superioară'],[260]),

q(29,['Tratamentul durerii din pancreatita cronică poate include neuroliza plexului celiac, care:',
 ['Blochează aferențele cu alcool sau alte substanțe neurolitice','Se poate face percutan ghidat CT, intraoperator sau endoscopic cu ultrasunete','Înlocuiește substituția enzimatică și abstinența, fiind suficientă ca unică terapie a steatoreei','Se face doar prin toracotomie stângă, celelalte căi fiind abandonate','Are ca țintă steatoreea, nu durerea, și cere rezecție de plex'],'AB',260,'Durere pancreatică — Neuroliză celiacă',
 'Recunoașterea celor trei căi de neuroliză și a celor două teorii ale durerii, față de persistența tratamentului medical al insuficienței.',
 ['Alcoolul/substanțele neurolitice sunt citate.','Cele trei aborduri (CT, intraop, EUS) sunt enumerate.','Enzimele și abstinența rămân baza medicală; neuroliza vizează durerea, nu steatoreea.','Calea nu e limitată la toracotomie.','Ținta este durerea aferentă, nu steatoreea.']],
 8,'Transformă neuroliza în substitut al enzimelor și o limitează la toracotomie.',['plexului celiac','ghidaj CT']),

q(30,['Amilaza serică în pancreatita acută:',
 ['Crește rapid în primele 12 ore de la internare și revine de obicei la normal în 3–5 zile','Nu toți pacienții cu abdomen acut și hiperamilazemie au pancreatită (ulcer perforat, ischemie intestinală etc.)','Amilaza rămâne crescută luni de zile, fiind markerul de gravitate Ranson','Hiperamilazemia este patognomonică, diagnosticul diferențial fiind gol','Cinetica enzimatică începe după 3 săptămâni și persistă tot restul vieții'],'AB',263,'Cinetică enzimatică și diagnostic diferențial',
 'Aplicarea ferestrei 12 ore → 3–5 zile și a listei de hiperamilazemii non-pancreatitice.',
 ['Cinetica 12 ore / 3–5 zile este explicită.','Avertismentul că hiperamilazemia nu egalează pancreatita este citat, cu Tabelul 17-3.','Amilaza nu intră în Ranson și scade în 3–5 zile.','Diagnosticul diferențial este tocmai lista din tabel.','Cinetica descrisă este ore–zile, nu săptămâni–viață.']],
 8,'Transformă amilaza în marker Ranson persistent, contrar cineticii 3–5 zile.',['primele 12 ore','3-5 zile']),

q(31,['Enucleerea insulinomului este rezonabilă când tumora este:',
 ['Mică și la distanță de ductul pancreatic principal','Mare și adiacentă ductului, caz în care se preferă totuși enucleerea, nu pancreatectomia','Metastatică, enucleerea înlocuind diazoxidul','Multicentrică MEN-1, fără evaluare a restului glandei','Situată în ampula Vater, ca substitut al sfincterotomiei'],'A',272,'Insulinom — Enucleere versus rezecție',
 'Recunoașterea ferestrei de enucleere (mic, departe de duct) versus pancreatectomie când e adiacent ductului.',
 ['Cele două condiții (mic, distant de duct) sunt explicite.','Când e mare/adiacent ductului, textul indică pancreatectomie.','Metastaticul se gestionează medical (diazoxid, streptozocină).','MEN-1 cere evaluarea întregii glande, nu enucleere izolată oarbă.','Ampula nu este sediul tipic al insulinomului.']],
 8,'Extinde enucleerea la tumorile mari, lipite de duct, exact scenariul rezecției.',['enucleate','ductul pancreatic principal']),

q(32,['La pacientul cu cancer pancreatic nerezecabil identificat preoperator, pruritul din hiperbilirubinemie se paliază prin:',
 ['Stentare biliară endoscopică','Duodenopancreatectomie paliativă de principiu','Cecostomie, ca în Ogilvie','Sfincterotomie internă laterală','Neuroliză celiacă ca gest unic, stentul fiind inutil'],'A',271,'Paliație preoperatorie — Stent biliar',
 'Recunoașterea stentului endoscopic ca paliție a pruritului, distinct de neuroliza durerii și de Whipple-ul nerezectabil.',
 ['Stentarea endoscopică este explicită pentru prurit.','Whipple paliativ nu este gestul descris la nerezecabilul preoperator.','Cecostomia ține de Ogilvie, nu de icter.','SIL este pentru fisură anală.','Neuroliza vizează durerea posterioară, nu pruritul; stentul are rol.']],
 8,'Înlocuiește stentul pruritului cu Whipple paliativ sau SIL, două gesturi din alte contexte.',['stentare biliară','pruritului']),

q(33,['Celulele acinare lezate în pancreatita acută permit:',
 ['Activarea enzimelor în afara canalelor și a tractului digestiv, cu distrucție pancreatică și peripancreatică','Glanda poate fi tumefiată, edemațiată, hemoragică sau necrotică; chiar fără necroză imagistică există distrucție microscopică','Formele variază de la autolimitate la amenințătoare de viață','Enzimele rămân inactive extracanalicular, pancreatita fiind o colecistită chimică','Necroza imagistică este cerută pentru diagnosticul Atlanta, edemul interstițial excluzând boala'],'ABC',262,'Fiziopatologie — Activarea enzimatică',
 'Înțelegerea autodigestiei prin activare extracanaliculară, inclusiv când CT-ul încă nu arată necroză.',
 ['Activarea extra-canal este explicită.','Spectrul macroscopic și distrucția microscopică sunt citate.','Spectrul de severitate este descris.','Enzimele se activează extracanalicular; nu este o colecistită.','Atlanta nu cere necroză imagistică; edemul interstițial este o formă histologică.']],
 8,'Cere necroza CT ca sine qua non Atlanta, ignorând edemul interstițial ca pol ușor.',['celulelor aciuare','edem interstiţial']),

q(34,['Artera pancreatică dorsală are rolul de:',
 ['A interconecta trunchiul celiac și AMS în mai multe locuri, pe lângă arcadele pancreaticoduodenale','A înlocui artera mezenterică inferioară ca unică sursă a colonului stâng','A drena vena portă în cava superioară','A iriga doar rinichiul stâng','A fi o arteră terminală, fără colaterale, a cărei ligatură infarctează tot mezenteronul'],'A',260,'Colaterale celiac–AMS',
 'Recunoașterea arterei pancreatice dorsale ca punte celiac–AMS, complementară arcadei pancreaticoduodenale.',
 ['Rolul de interconectare este explicit.','AMI rămâne sursa colonului stâng.','Drenajul port nu trece prin această arteră.','Renala nu este teritoriul ei.','Textul subliniază tocmai rețeaua bogată de colaterale, de aceea stenoza celiacului e adesea asimptomatică.']],
 8,'Transformă o punte colaterală într-o arteră terminală a mezenteronului.',['Artera pancreatică dorsală','trunchiul celiac']),

q(35,['Explorarea imagistică inițială a pancreatitei acute suspectate include:',
 ['Radiografie toracică (complicații, pneumoperitoneu)','Radiografie abdominală (calcificări de cronică, ocluzie)','Ecografie (litiază, dilatare CBP, dimensiuni, colecții)','CT-ul nu este necesar pentru diagnosticul Atlanta când criteriile clinice și enzimatice sunt îndeplinite','CT-ul de urgență înlocuiește Atlanta și se cere la orice durere epigastrică cu amilază normală'],'ABCD',263,'Imagistică inițială',
 'Ierarhia Rx torace + abdomen + US, cu CT rezervat incertitudinii, nu ca substitut al criteriilor Atlanta.',
 ['Rx toracică este primul punct.','Rx abdominală este al doilea.','US este al treilea.','Limitarea CT când Atlanta e îndeplinită este explicită.','CT-ul nu înlocuiește definiția Atlanta și nu e cerut la amilază normală ca regulă.']],
 8,'Forțează CT-ul de urgență ca substitut al Atlanta, inversând fraza „de cele mai multe ori nu este necesar”.',['tomografia computerizată nu','ultrasonografie']),

q(36,['Când 90% din pancreasul cronic e înlocuit de cicatrice, consecințele includ:',
 ['Malabsorbție, diabet și deficit de vitamine liposolubile, cu malnutriție','Substituția orală de enzime ajută, în general, steatoreea','Laboratorul tinde să fie normal, exceptând icterul dacă există obstrucție biliară','Examenul clinic e sărac, în afara unui pseudochist palpabil','Steatoreea se tratează prin Whipple de principiu, enzimele fiind inutile'],'ABCD',267,'Insuficiență pancreatică cronică',
 'Aplicarea pragului de 90% pentru eșecul mixt și a substituției enzimatice pentru steatoree, față de Whipple-ul nejustificat.',
 ['Triada malabsorbție–diabet–vitamine este explicită.','Rolul enzimelor pe steatoree este citat.','Laboratorul „normal” cu excepția icterului obstructiv este descris.','Sărăcia examenului, exceptând pseudochistul, este menționată.','Tratamentul de primă linie al steatoreei este substituția, nu Whipple.']],
 8,'Înlocuiește enzimele cu Whipple ca tratament al steatoreei, ignorând algoritmul medical.',['vitamine liposolubile','enzime pancreatice']),

q(37,['Pentru boala nerezecabilă sau metastatică a insulinomului se pot folosi:',
 ['Diazoxidul sau streptozocina','Doar hemoroidectomia, simptomele fiind anorectale','Protocolul Nigro (mitomicină + 5-FU + RT)','Sfincterotomie internă laterală','Ligatura elastică a pachetelor hemoroidale interne'],'A',272,'Insulinom metastatic — Terapie medicală',
 'Recunoașterea diazoxidului/streptozocinei ca opțiuni când rezecția nu e posibilă.',
 ['Cei doi agenți sunt citați explicit.','Hemoroidectomia nu are loc în insulinom.','Nigro este pentru CCS anal.','SIL este pentru fisură.','Ligatura elastică este pentru hemoroizi.']],
 8,'Mută terapia insulinomului metastatic pe proceduri anorectale din capitolul de colon.',['diazoxidul','streptozocina']),

q(38,['Analogii de somatostatină în TPN paliative:',
 ['Controlează simptomele la aproape 100% dintre pacienți','Sunt bine tolerați și pot stabiliza evoluția pe termen scurt, dar nu prelungesc supraviețuirea','Chimioterapia cu streptozocină, 5-FU și doxorubicină e salvare pentru insulinoame maligne, cu eficacitate slabă și toxicitate','Înlocuiesc rezecția curativă a tumorilor mici, rezecabile','Prelungesc supraviețuirea cu 5 ani la toți pacienții, fără toxicitate'],'ABC',274,'TPN — Analogi de somatostatină',
 'Separarea controlului simptomatic (~100%) de absența câștigului de supraviețuire, plus limita chimio de salvare.',
 ['Cifra de aproape 100% este explicită.','Stabilizarea scurtă fără prelungirea supraviețuirii este citată.','Trio-ul streptozocină/5-FU/doxorubicină și limitele lui sunt descrise.','Tumorile rezecabile se rezecează; analogii sunt paliție.','Textul neagă prelungirea supraviețuirii.']],
 8,'Transformă analogii într-un substitut curativ cu câștig de 5 ani, contrar frazei „nu prelungesc supraviețuirea”.',['aproape 100%','Analogii de somatostatină']),

q(39,['Necroza pancreatică pe CT se recunoaște prin:',
 ['Țesut pancreatic care nu captează contrastul iv','Diagnosticul radiologic de necroză nu este, prin el însuși, indicație operatorie; majoritatea se recuperează fără operație','Aerul în bursă omentală sau retroperitoneu, la un febril cu organe în eșec, sugerează infecție','Puncția ghidată CT, cu Gram și culturi (inclusiv fungi), e utilă dacă suspiciunea de infecție e mare și aerul lipsește','Orice necroză sterilă vizibilă în ziua 1 impune necrectomie deschisă imediată'],'ABCD',263,'Necroză pe CT versus indicație chirurgicală',
 'Disocierea imaginii de necroză (fără captare) de indicația operatorie și recunoașterea aerului ca marker de infecție.',
 ['Absența captării este explicită.','Fraza că necroza imagistică nu egalează operația este citată.','Aerul retroperitoneal/în bursă ca semn de infecție este descris (pagina 266).','Puncția când aerul lipsește este menționată.','Necrectomia precoce în necroza sterilă este evitată; deschisul e rezervat eșecului minim-invaziv la critici.']],
 8,'Forțează necrectomia deschisă în ziua 1 pe necroza sterilă, contrar regulii de așteptare și de escladație minim-invazivă.',['nu captează','aerului'],[266]),
];
