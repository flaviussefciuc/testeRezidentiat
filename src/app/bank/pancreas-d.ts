import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-89;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('pancreas',17,pdfOffset,`pancreas-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const PANCREAS_D=[
q(65,['Anatomia chirurgicală a pancreasului, dincolo de cele patru segmente, include:',
 ['Capul este încadrat de potcoava duodenală; procesul uncinat este o prelungire posterioară și inferioară a capului','Vena mezenterică superioară marchează joncțiunea cap–istm; istmul stă imediat deasupra VMS','Corpul se întinde la stânga VMS; coada, cea mai distală, se extinde spre hilul splinei, pe care uneori se sprijină','Uncinatul este o prelungire a cozii în hilul splenic, VMS despărțind coada de corp','Capul stă la stânga VMS, coada fiind încadrată de duoden'],'ABC',257,'Anatomie — Segmente și VMS',
 'Maparea VMS ca graniță cap–istm și a uncinatului ca prelungire postero-inferioară a capului.',
 ['Raportul duodenal și uncinatul sunt explicite.','Rolul de reper al VMS este citat.','Corpul la stânga VMS și coada spre hil sunt descrise.','Uncinatul aparține capului, nu cozii.','Capul, nu coada, este încadrat de duoden.']],
 8,'Mută uncinatul pe coadă și inversează raporturile VMS, două repere de rezecție.',['procesul uncinat','vena mezenterică superioară']),

q(66,['Dintre pacienții cu pancreas divisum, ponderea celor asimptomatici este, potrivit textului, de:',
 ['90%','10%, identică ponderii fuziunii incomplete','20%, identică hepaticei drepte din AMS','50%, identică TPN nefuncționale','1–5%, identică pancreatitei post-ERCP'],'A',257,'Embriologie — Divisum asimptomatic',
 'Reținerea cifrei de 90% asimptomatici, distinct de cei 10% cu fuziune incompletă.',
 ['90% asimptomatici este explicit.','10% este ponderea populației cu fuziune incompletă, nu a simptomelor.','20% este variația hepatică dreaptă din AMS.','50% sunt TPN nefuncționale.','1–5% este pancreatita post-ERCP.']],
 8,'Permutează 90% cu 10%/20%/50%/1–5%, toate procente din capitolul de pancreas.',['90% dintre pacienţii','pancreas divisum']),

q(67,['Formarea ductelor pancreatice, după fuziune, se caracterizează prin:',
 ['Wirsung (principal) se formează, cel mai frecvent, prin fuziunea porțiunilor distale ale ductelor dorsal și ventral','Wirsung formează de obicei un canal comun cu calea biliară principală și pătrunde în duoden la ampula Vater / sfincterul Oddi (papila mare)','Porțiunea distală a ductului dorsal poate persista ca Santorini (accesor) sau se poate oblitera complet','Santorini drenează tot pancreasul prin papila mare, Wirsung lipsind constant','Fuziunea se produce în ziua 30, înaintea rotației mugurelui ventral'],'ABC',257,'Embriologie — Wirsung, Santorini, Vater',
 'Legarea Wirsung de fuziunea distală dorsal+ventral și a Santorini de restul dorsal, distinct de ziua 30 a mugurilor.',
 ['Originea Wirsung este explicită.','Canalul comun cu CBP și papila mare sunt citate.','Persistența sau obliterarea Santorini sunt descrise.','Santorini este accesorul; 10% au fuziune incompletă, nu absență constantă a Wirsung.','Ziua 30 este formarea mugurilor, nu fuziunea (săptămânile 6–8).']],
 8,'Anulează Wirsung și mută fuziunea în ziua 30, două praguri embriologice din același paragraf.',['canalul Wirsung','ductul Santorini']),

q(68,['Drenajul venos al pancreasului și riscul de infarct intestinal se caracterizează prin:',
 ['Drenajul corpului și cozii se face prin tributare ale venei splenice și vene pancreatice inferioare','Vena mezenterică inferioară se poate alătura sistemului port oriunde de-a lungul venei splenice, inclusiv la joncțiunea splenică–VMS','Întreg sângele intestinului subțire și gros drenează în sistemul port; lezarea acestei structuri venoase poate produce infarct intestinal','VMI se varsă constant în cava inferioară, ocolind porta','Lezarea portei nu afectează intestinul, drenajul fiind sistemic'],'ABC',260,'Anatomie venoasă — VMI și portă',
 'Aplicarea confluenței variabile a VMI și a riscului de infarct după lezarea portei.',
 ['Tributarele splenice sunt explicite.','Variabilitatea VMI, inclusiv la joncțiunea splenică–VMS, este citată.','Drenajul port al întregului intestin și riscul de infarct sunt descrise.','VMI se alătură sistemului port, nu cavei.','Textul leagă lezarea portei de infarct intestinal.']],
 8,'Mută VMI în cavă și neagă infarctul după lezarea portei, inversând teritoriul splanhnic.',['vena mezenterică inferioară','infarctului intestinal']),

q(69,['Volumul zilnic al secreției exocrine pancreatice, potrivit textului, este de:',
 ['500–800 mL de fluid alcalin izoton, cu sodiu și potasiu egale cu plasma','1–2 L, identic chimului ileal evacuat în cec','800–900 mL, identic gazelor colonice','80 mL/kg, identic volemiei pediatrice','<200 mL, identic lichidului fecal zilnic'],'A',260,'Fiziologie exocrină — Volum zilnic',
 'Reținerea intervalului 500–800 mL și a izotoniei Na/K cu plasma, distinct de volumele colice.',
 ['500–800 mL, caracterul alcalin izoton și egalitatea Na/K sunt explicite.','1–2 L este chimul ileal.','800–900 mL sunt gazele colonice.','80 mL/kg este volemia copilului.','<200 mL este lichidul din scaunul solid.']],
 8,'Permutează 500–800 mL cu 1–2 L și 800–900 mL, trei volume digestive ușor de amestecat.',['500-800 mL','alcalin izoton']),

q(70,['Celulele α insulare și controlul glicemiei se caracterizează prin:',
 ['Secretă glucagon la glicemie scăzută, determinând glicogenoliză și creșterea glicemiei','Insulele conțin și linii care produc insulină, somatostatină, PP, VIP, galanină, serotonină, amilină, pancreastatină și CgA','Celulele α secretă insulină la hiperglicemie, glucagonul lipsind din insule','Insulele sunt mai abundente în cap, coada fiind lipsită de hormoni','Homeostazia glucozei nu depinde de feedback-ul glicemiei'],'AB',261,'Fiziologie endocrină — Glucagon și α',
 'Legarea celulelor α de glucagon/glicogenoliză, plus lista peptidică, față de mutarea insulelor pe cap.',
 ['Răspunsul α la hipoglicemie este explicit.','Lista hormonilor peptidici este enumerată.','Insulina ține de celulele β, nu de α.','Insulele sunt mai abundente la coadă.','Mecanismul de feedback pe glicemie este descris.']],
 8,'Atribuie insulinei celulele α și mută abundența insulelor pe cap, două inversări din același paragraf.',['Celulele a','glicogenoliză']),

q(71,['În etiologia pancreatitei acute, Tabelul 17-2 include, dincolo de alcool și litiază:',
 ['Metabolic: hiperlipidemie, hipertrigliceridemie, hipercalcemie (hiperparatiroidism), uremie, sarcină, venin de scorpion','Infecțios: oreion, Coxsackie B, CMV, hepatite A/B/C, EBV, HSV','Postoperator/traumatic: 0,8–17% după proceduri gastrice și 0,7–9,3% după proceduri biliare','Medicamente precum corticosteroizi, tiazidice, furosemid, estrogeni și azatioprină','Cauza metabolică unică este deficitul de vitamine hidrosolubile, scorpionul fiind protector'],'ABCD',262,'Etiologie — Tabelul 17-2',
 'Recunoașterea veninului de scorpion, a oreionului și a intervalelor post-gastrice/biliare, față de „protecția” scorpionului.',
 ['Lista metabolică, inclusiv scorpionul, este din tabel.','Agenții infecțioși sunt citați.','Intervalele 0,8–17% și 0,7–9,3% sunt din tabel.','Medicamentele sunt menționate și în text.','Veninul de scorpion este cauză, nu protecție.']],
 8,'Transformă scorpionul în factor protector și anulează lista de medicamente, două capcane de tabel.',['veninul de scorpion','0,8-17%']),

q(72,['Sindromul de răspuns inflamator sistemic în pancreatita acută severă se poate solda cu:',
 ['Injurie renală acută, ARDS, instabilitate cardiovasculară','Hiperglicemie, hipocalcemie, creșterea ureei și creatininei, hipoxie prin afectare hepatică, pulmonară și renală','SIRS exclude afectarea extra-pancreatică, organele distant rămânând intacte','Hipocalcemia lipsește, glicemia scăzând constant','ARDS apare doar după ERCP, nu în pancreatita biliară'],'AB',263,'Pancreatită severă — SIRS și organe',
 'Aplicarea listei ARDS–IRA–instabilitate, plus hiperglicemie/hipocalcemie, față de ideea de boală „doar pancreatică”.',
 ['IRA, ARDS și instabilitatea cardiovasculară sunt explicite.','Cuplul hiperglicemie–hipocalcemie și hipoxia sunt citate.','SIRS poate leza alte organe pe lângă pancreas.','Hipocalcemia și hiperglicemia sunt menționate.','ARDS figurează ca leziune de organ în SIRS, nu ca specific ERCP.']],
 8,'Izolează pancreatita de SIRS extra-pancreatic, deși pagina enumeră ARDS și IRA.',['ARDS','hipocalcemie']),

q(73,['Necroza pancreatică pe CT, recunoscută prin absența captării contrastului IV, reprezintă:',
 ['Un diagnostic radiologic care nu este, prin el însuși, indicație chirurgicală; majoritatea se recuperează fără operație','Indicație de necrectomie deschisă în primele 24 de ore','Criteriu Atlanta de formă ușoară, fără complicații locale','Echivalentul infecției, profilaxia antibiotică fiind cerută','Un semn prezent la toți pacienții din prima zi de internare'],'A',263,'Necroză CT — Nu este indicație operatorie',
 'Recunoașterea că non-captarea nu dictează chirurgia, majoritatea necrozelor vindecându-se fără operație.',
 ['Fraza că diagnosticul radiologic nu este indicator operator este explicită.','Necrectomia precoce în necroza sterilă se evită 2–3 săptămâni.','Necroza ține de forma severă, nu de cea ușoară.','Profilaxia nu este indicată în necroza sterilă.','Necroza e evidențiată cel mai frecvent la zile–săptămâni, nu la toți din ziua 1.']],
 8,'Transformă semnul CT de necroză în indicație de necrectomie din ziua 1.',['nu captează','nu reprezintă un indicator']),

q(74,['Colecțiile lichidiene peripancreatice, cea mai frecventă complicație a pancreatitei acute:',
 ['Rezultă din întreruperea ductului și scurgerea enzimelor activate în mezenter și retroperitoneu','Sunt delimitate de viscere și țesut inflamator (colagen); cele mai multe se resorb spontan','Pseudochistul bine definit apare de obicei la 3–4 săptămâni, fără straturi epiteliale în perete','Cele persistente >1 an sau >5 cm tind să crească și să obstrueze, deci drenajul este indicat','Colecția acută din ziua 1 are perete epitelial matur, potrivit pentru anastomoză'],'ABCD',266,'Colecții și pseudochist — 3–4 săptămâni',
 'Legarea complicației celei mai frecvente de absența epiteliului și de maturarea la 3–4 săptămâni.',
 ['Mecanismul de scurgere ductală este explicit.','Delimitarea de viscere/colagen și resorbția spontană sunt citate.','Fereastra 3–4 săptămâni și absența epiteliului sunt descrise.','Pragurile 1 an / 5 cm sunt menționate.','Colecțiile acute nu au perete de granulație/epiteliu; anastomozarea prematură nu este descrisă.']],
 8,'Pune epiteliul și anastomoza pe colecția din ziua 1, inversând definiția pseudochistului.',['3-4 săptămâni','fără straturi epiteliale']),

q(75,['Când 90% din pancreasul cronic a fost înlocuit de cicatrice, consecințele includ:',
 ['Insuficiență endocrină și exocrină: malabsorbție, diabet, deficit de vitamine liposolubile, malnutriție','Substituția orală de enzime ajută, în general, tratamentul steatoreei','Durerea este surdă, epigastrică, iradiază posterior; mâncarea o agravează adesea','Laboratorul rămâne normal dacă nu există obstrucție biliară','Enzimele orale sunt inutile, steatoreea ținând de deficitul de B12, nu de lipază'],'ABCD',267,'Pancreatită cronică — 90% și steatoree',
 'Aplicarea pragului de 90% pentru insuficiența exo/endocrină și a enzimelor orale pentru steatoree.',
 ['Pragul 90% și lista de consecințe sunt explicite.','Enzimele pentru steatoree sunt citate.','Caracterul durerii și agravarea alimentară sunt descrise.','Normalitatea de laborator în absența icterului obstructiv este menționată.','Steatoreea ține de insuficiența exocrină, enzimele fiind utile.']],
 8,'Anulează enzimele orale și mută steatoreea pe B12, contrar frazei despre substituție.',['90% din glandă','steatoreei']),

q(76,['Dintre explorările ductale în pancreatita cronică, ERCP:',
 ['Are cea mai mare sensibilitate pentru arhitectura ductală bilio-pancreatică: lungime, stricturi, fistule, obstrucții, esențiale înaintea chirurgiei','Este un test invaziv, cu riscuri reduse de exacerbare a pancreatitei sau de sepsis biliar/pancreatic','CT/MRCP sunt suficiente pentru planificarea tuturor rezecțiilor, ERCP fiind abandonat','ERCP nu vizualizează stricturile, fiind inferioară radiografiei simple','Sepsisul biliar exclude orice indicație de ERCP, chiar diagnostică'],'AB',267,'Pancreatită cronică — ERCP',
 'Recunoașterea sensibilității maxime a ERCP pentru anatomia ductală preoperatorie, cu riscul (redus) de exacerbare.',
 ['Sensibilitatea maximă și detaliile ductale sunt explicite.','Caracterul invaziv și riscurile reduse sunt citate.','Textul spune că CT/MRCP de obicei nu arată suficiente detalii pentru a planifica.','ERCP evaluează tocmai stricturile și obstrucțiile.','Riscul de sepsis există, dar testul rămâne util diagnostic.']],
 8,'Declară CT/MRCP suficiente pentru planificare, exact limita pe care textul o subliniază.',['cea mai mare sensibilitate','ERCP']),

q(77,['Pregătirea preoperatorie a icterului obstructiv din tumora pancreatică include:',
 ['Coagulopatia legată de vitamina K, prin întreruperea circulației enterohepatice și malnutriție, trebuie corectată înaintea unei intervenții majore','Laboratorul include albumină, transferină, prealbumină și timpul de protrombină','Drenajul biliar preoperator nu este indicat la tumora imagistic rezecabilă, crescând infecțiile post-rezecție','Biopsia preoperatorie a tumorii rezecabile se evită de rutină, din cauza fals-negativelor, a dificultății diagnostice și a hemoragiei care poate întârzia operația','Drenajul preoperator reduce infecțiile și înlocuiește corectarea vitaminei K'],'ABCD',270,'Cancer — Vitamina K, nutriție, drenaj',
 'Combinarea coagulopatiei K-dependente cu interdicția drenajului la rezecabil, plus rezerva biopsiei.',
 ['Coagulopatia K și malnutriția sunt explicite.','Cei patru markeri de laborator sunt citați.','Creșterea infecțiilor după drenaj este descrisă.','Motivele de a nu biopsia rezecabilul sunt enumerate.','Drenajul crește, nu reduce, infecțiile; vitamina K se corectează separat.']],
 8,'Inversează relația drenaj–infecție și anulează corectarea vitaminei K.',['vitamina K','transferina']),

q(78,['Triada Whipple, sugestivă pentru insulinom, cuprinde:',
 ['Simptome de hipoglicemie, glicemie 40–50 mg/dL și dispariția simptomelor după glucoză IV','Gastrină >1.000 pg/mL la pH gastric <2','Glucagon 500–1.000 pg/mL plus eritem migrator necrolitic','Diaree 6–8 L/zi în NPO, cu hipopotasemie','Bilirubină directă crescută cu veziculă palpabilă nedureroasă'],'A',272,'Insulinom — Triada Whipple',
 'Reținerea celor trei elemente ale triadei, distinct de pragurile gastrinomului, glucagonomului și VIPomului.',
 ['Cele trei componente (simptome, 40–50 mg/dL, răspuns la glucoză) sunt explicite.','Pragul gastrinic definește gastrinomul.','Cuplul glucagon–eritem definește glucagonomul.','Holera pancreatică definește VIPomul.','Semnul Courvoisier ține de adenocarcinomul cefalic.']],
 8,'Schimbă triada Whipple cu pragurile TPN vecine (gastrină, glucagon, VIP).',['Triada Whipple','40-50 mg/dL']),

q(79,['Criteriile de laborator ale insulinomului, dincolo de triada Whipple, includ:',
 ['Glicemie ≤45 mg/dL cu insulină serică ≥36 µU/L concomitentă','Peptid-C ≥200 pmol/L, proinsulină ≥5 pmol/L, β-hidroxibutirat ≤2,7 mmol/L și absența sulfonilureei','Testul cu secretină: insulinoamele nu eliberează insulină ca răspuns, inhibând și răspunsul normal al celulelor β','Creșterea insulinei după secretină confirmă insulinomul, sulfonilureea fiind necesară pentru diagnostic','Peptid-C nedetectabil definește insulinomul, ca în hipoglicemia factice cu insulină exogenă'],'ABC',272,'Insulinom — Șase criterii și secretină',
 'Aplicarea pragurilor ≤45 / ≥36 / peptid-C și a absenței răspunsului la secretină, față de confuzia cu insulină exogenă.',
 ['Perechea glicemie–insulină este explicită.','Celelalte praguri, inclusiv sulfonilureea absentă, sunt citate.','Lipsa creșterii insulinei la secretină este descrisă.','Insulinoamele nu cresc insulina la secretină.','Peptid-C scăzut orientează spre insulină exogenă, nu spre insulinom.']],
 8,'Inversează testul la secretină și peptid-C, două capcane de diagnostic diferențial al hipoglicemiei.',['≤45 mg/dL','secretinei']),

q(80,['Gastrinomul, ca pondere în TPN funcționale, se caracterizează epidemiologic prin:',
 ['Reprezintă aproximativ 20% dintre TPN funcționale; trei pătrimi sporadice, un sfert MEN1, unde este cea mai frecventă TPN funcțională','Este multicentric în jumătate din cazuri și tinde să metastazeze în ganglioni și ficat (50%)','90% sunt benigne, localizate în coadă, fără metastaze','Enucleerea este regula, tumora fiind solitară <1 cm în hilul splenic','MEN1 exclude gastrinomul, care este doar sporadic'],'AB',272,'Gastrinom — 20%, multicentric, 50% metastaze',
 'Aplicarea ponderii de 20% și a ratei de 50% multicentric/metastatic, față de benignitatea insulinomului.',
 ['20%, 3/4 sporadice și 1/4 MEN1 sunt explicite.','Multicentricitatea jumătate și metastazele 50% sunt citate.','85–90% benigne în coadă descrie insulinomul, nu gastrinomul.','Enucleerea distanță de duct ține de insulinomul mic.','În MEN1, gastrinomul este tocmai cea mai frecventă TPN funcțională.']],
 8,'Atribuie gastrinomului benignitatea și sediul caudal ale insulinomului.',['aproximativ 20%','metastazeze']),

q(81,['Când gastrina de repaus este sub 1.000 pg/mL, diagnosticul de gastrinom se sprijină pe:',
 ['Aproximativ două treimi dintre pacienți au gastrină <1.000 pg/mL și cer teste suplimentare','Gastrină de repaus >200 pg/mL plus test la secretină pozitiv (creștere >200 pg/mL) are valoare diagnostică; normal, secretina scade gastrina','Calciul seric se dozează la toți, pentru excluderea MEN1','Gastrina <1.000 exclude gastrinomul, secretina fiind inutilă','Creșterea gastrinei la secretină este răspunsul normal, nu diagnosticul de Zollinger-Ellison'],'ABC',272,'Gastrinom — Secretină când gastrina <1.000',
 'Aplicarea fracției 2/3 cu gastrină sub prag și a deltei >200 pg/mL la secretină, plus calciul pentru MEN1.',
 ['Fracția de două treimi este explicită.','Pragurile >200 și delta >200, plus scăderea normală, sunt citate.','Dozaajul calciului este descris.','Sub 1.000 nu exclude, ci cere teste suplimentare.','Normal secretina scade gastrina; creșterea este patologică.']],
 8,'Transformă gastrina <1.000 într-un criteriu de excludere și inversează răspunsul normal la secretină.',['<l.000 pg/','>200 pg/mL']),

q(82,['Analogii de somatostatină în TPN paliative se caracterizează prin:',
 ['Pot controla simptomele la aproape 100% dintre pacienți, sunt bine tolerați și pot stabiliza evoluția pe termen scurt','Nu prelungesc supraviețuirea','Streptozocina, 5-FU și doxorubicina, ca salvare în insulinomul malign, au eficacitate slabă și toxicitate semnificativă','Analogii vindecă metastazele hepatice și prelungesc supraviețuirea peste 90% la 5 ani','Chimioterapia cu streptozocină înlocuiește rezecția TPN rezecabile'],'ABC',274,'TPN — Octreotid paliativ',
 'Separarea controlului simptomatic aproape complet de absența prelungirii supraviețuirii.',
 ['Aproape 100% control simptomatic este explicit.','Absența prelungirii supraviețuirii este citată.','Eficacitatea slabă și toxicitatea schemei de salvare sunt descrise.','Analogii nu prelungesc supraviețuirea; 90% la 5 ani nu figurează aici.','Rezecția rămâne tratamentul TPN rezecabile.']],
 8,'Transformă analogii într-un tratament curativ care prelungește supraviețuirea, contrar frazei explicite.',['aproape 100%','nu prelungesc supravieţuirea']),

q(83,['Chistadenoamele seroase pancreatice, spre deosebire de neoplasmele mucinoase:',
 ['Sunt benigne și nu necesită rezecție','Chistadenocarcinoamele seroase, deși foarte rare, trebuie rezecate când sunt identificate','Mucinoasele au stromă ovariană, predilecție feminină și 40% invazive la diagnostic, deci se rezecă','Seroasele conțin stromă ovariană și se rezecă de principiu la bărbați','IPMN-urile de ramură se rezecă toate, urmărirea CT fiind interzisă'],'ABC',274,'Chiste — Seros versus mucinos',
 'Contrastul seros (benign, fără rezecție) versus mucinos (stromă ovariană, rezecție) și excepția rarului chistadenocarcinom seros.',
 ['Caracterul benign fără rezecție este explicit.','Excepția chistadenocarcinomului seros este citată.','Stroma ovariană, femeile și 40% invazive sunt descrise.','Stroma ovariană ține de mucinoase, nu de seroase.','IPMN-urile de ramură se urmăresc, cu excepțiile cunoscute.']],
 8,'Pune stroma ovariană pe seroase și forțează rezecția lor, inversând Tabelul 17-11.',['Chistadenoamele seroase','nu necesită rezecţie'],[275]),

q(84,['Vena mezenterică superioară, ca reper pancreatic, marchează:',
 ['Joncțiunea dintre cap și istm; istmul este porțiunea situată imediat deasupra VMS','Granița coadă–hil splenic, capul fiind la stânga VMS','Originea arterei gastrice stângi din trunchiul celiac','Ampula Vater, unde se unește cu Wirsung','Linia de transecție de principiu a oricărui insulinom din cap'],'A',257,'Anatomie — Reperul VMS',
 'Reținerea VMS ca graniță cap–istm, esențială pentru planul de Whipple versus rezecție distală.',
 ['Joncțiunea cap–istm și poziția istmului deasupra VMS sunt explicite.','Coada se extinde spre hilul splinei, la stânga; capul este la dreapta, în potcoava duodenală.','Gastrica stângă ține de trunchiul celiac.','Ampula este vărsarea Wirsung–CBP.','Enucleerea insulinomului depinde de distanța față de duct, nu de VMS ca linie obligatorie.']],
 8,'Mută VMS pe granița coadă–splină, inversând dreapta/stânga glandei.',['Joncţiunea','istmul glandei']),

q(85,['Trunchiul celiac și arcadele pancreaticoduodenale se caracterizează prin:',
 ['Trunchiul se trifurcă, în mod normal, în gastrica stângă, splenică și hepatica comună','Capul și duodenul sunt vascularizate prin AGD, din care se nasc arcadele pancreaticoduodenale superioare anterioară și posterioară','Corpul și coada primesc ramuri pancreatice din splenică și artera pancreatică dorsală, adesea din AGD','AMS naște posterior de pancreas și dă ca primă ramură pancreaticoduodenala inferioară, care se anastomozează cu ramurile superioare','AGD vascularizează doar coada, arcadele pancreaticoduodenale lipsind'],'ABCD',258,'Vascularizație — Celiac, AGD, arcade',
 'Maparea trifurcației celiacului, a AGD ca sursă a arcadei superioare și a unirii cu inferioara din AMS.',
 ['Trifurcația este explicită.','AGD și arcadele superioare sunt citate.','Splenica și artera pancreatică dorsală sunt descrise.','Poziția AMS și prima ramură sunt pe aceeași pagină.','AGD alimentează capul/duodenul prin arcade, nu doar coada.']],
 8,'Anulează arcadele pancreaticoduodenale, exact anastomoza celiac–AMS din jurul capului.',['artera gastroduodenale','arcadele pancreaticoduodenale'],[259]),

q(86,['Radiografia toracică, radiografia abdominală și ecografia, înaintea CT, în pancreatita acută suspectată:',
 ['Radiografie toracică pentru complicații intratoracice și excluderea pneumoperitoneului','Radiografie abdominală simplă pentru calcificări (pancreatită cronică) sau obstacol intestinal, plus ultrasonografie pentru litiază, dilatarea coledocului, dimensiunea pancreasului și colecții','CT de principiu la toți, înaintea oricărei definiții Atlanta','Ultrasonografia înlocuiește evaluarea clinică, amilaza fiind superfluă','Radiografia toracică este evitată, pneumoperitoneul neintrând în diagnosticul diferențial'],'AB',263,'Diagnostic — RX și ecografie înaintea CT',
 'Ierarhia RX torace–RX abdomen–US înaintea CT, care nu este necesară pentru diagnosticul Atlanta.',
 ['RX torace și pneumoperitoneul sunt explicite.','RX abdomen, calcificările și US biliară sunt citate.','CT nu este necesar pentru diagnosticul Atlanta când clinic + enzime sunt suficiente.','Diagnosticul cere cel puțin două din trei (clinic, enzime, CT), nu US izolată.','Pneumoperitoneul ține de diagnosticul diferențial al abdomenului acut.']],
 8,'Forțează CT-ul de principiu, deși textul precizează că adesea nu este necesar pentru diagnostic.',['radiografie toracică','Ultrasonografia']),

q(87,['Diagnosticul diferențial al pancreatitei acute, potrivit textului, include:',
 ['Colecistita acută','Ulcerul peptic perforat','Ischemia acută mezenterică, perforația esofagiană și infarctul miocardic','Nu toți pacienții cu abdomen acut și amilaze crescute au pancreatită acută','Amilaza crescută confirmă pancreatita și exclude ulcerul perforat sau ischemia mezenterică'],'ABCD',263,'Diagnostic diferențial — Amilază nespecifică',
 'Reținerea că amilaza crescută nu echivalează pancreatita, lista cuprinzând ulcer perforat, ischemie și infarct.',
 ['Colecistita este enumerată.','Ulcerul perforat este citat.','Ischemia, perforația esofagiană și infarctul sunt descrise.','Avertismentul despre amilază este explicit (și trimite la Tabelul 17-3).','Textul subliniază tocmai că amilaza nu confirmă diagnosticul în orice abdomen acut.']],
 8,'Transformă amilaza în test patognomonic, contrar avertismentului și tabelului de diagnostice diferențiale.',['ulcernl peptic perforat','infarctul miocardic']),

q(88,['Duodenopancreatectomia cefalică clasică, față de varianta cu prezervarea pilorului, se deosebește prin:',
 ['În Whipple clasic se rezecă antrul gastric, capul pancreatic și duodenul în totalitate; reconstrucția include gastrojejunostomie','Varianta cu prezervarea pilorului folosește duodenojejunostomie în loc de gastrojejunostomie','Antrul se păstrează de principiu în forma clasică, pilorul rezecându-se doar în varianta pylorus-preserving','Reconstrucția clasică are o singură anastomoză, cea pancreaticojejunală','Splenectomia însoțește de principiu Whipple-ul cefalic clasic'],'AB',270,'Whipple — Clasică versus pylorus-preserving',
 'Contrastul hemigastrectomie + gastrojejunostomie versus duodenojejunostomie cu pilor păstrat.',
 ['Rezecția antrului în forma clasică este explicită.','Duodenojejunostomia din varianta cu pilor păstrat este citată (legendă/figură).','Clasicul rezecă antrul, nu îl păstrează.','Reconstrucția are trei anastomoze.','Splenectomia ține de rezecția distală, nu de Whipple-ul cefalic.']],
 8,'Inversează ce se rezecă din stomac între clasic și pylorus-preserving.',['antrul gastric','prezervarea pilorului']),

q(89,['Cele două teorii majore care explică durerea din pancreatită, potrivit textului, sunt:',
 ['Presiune intraductală sau intraparenchimatoasă crescută','Teoria neurogenă, în care substanțe nocive sau celule activate imunologic irită celulele nervoase expuse','Doar ischemia AMS, fără componentă inflamatorie sau ductală','Hipersecreția de gastrină, identică sindromului Zollinger-Ellison','Deficitul de secretină duodenală, cu pH >8 în stomac'],'AB',260,'Durere pancreatică — Două teorii',
 'Recunoașterea cuplului presiune intraductală versus iritație neurogenă, baza neurolizei de plex celiac.',
 ['Teoria presiunii este explicită.','Teoria neurogenă cu iritarea fibrelor expuse este citată.','Ischemia AMS nu este una dintre cele două teorii.','Gastrina ține de gastrinom, nu de pancreatita inflamatorie.','Secretina stimulează bicarbonatul duodenal, nu explică durerea pancreatitică.']],
 8,'Înlocuiește cele două teorii din paragraf cu ischemie AMS sau gastrinom, doi vecini de capitol.',['presiunea intraductală','teoria neurogenă']),
];
