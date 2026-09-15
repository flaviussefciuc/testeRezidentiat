import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p<=618?p-523:p-525;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('endocrinologie',21,pdfOffset,`endocrinologie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const ENDOCRINOLOGIE_C=[
q(33,['Prevalența hipotiroidismului primar, în datele epidemiologice din capitol, este descrisă astfel:',
 ['Peste 2% la femei în Marea Britanie, sub 0,1% la bărbați','Prevalența pe parcursul vieții poate ajunge la 9% la femei și 1% la bărbați, cu vârsta medie la diagnostic în jur de 60 de ani','Prevalența mondială a hipotiroidismului subclinic variază între 1% și 10%','Este identică la cele două sexe (circa 20%), cu diagnostic median la 20 de ani','Forma secundară hipofizară depășește 99% din cazuri, forma primară fiind rară'],'ABC',611,'Hipotiroidism — Epidemiologie',
 'Reținerea disocierii pe sexe (>2% versus <0,1%), a riscului pe viață 9%/1% și a vârstei mediane de 60 de ani.',
 ['Cifrele de prevalență UK pe sexe deschid paragraful.','9%, 1% și 60 de ani completează riscul pe viață.','Intervalul 1-10% al formei subclinice este explicit.','Textul dă disociere majoră pe sexe, nu 20% identic, și diagnostic la ~60 de ani.','Hipofuncția este de obicei primară; cauza hipofizară este secundară.']],
 8,'Distractorii unifică prevalența pe sexe la 20% și inversează primar versus secundar.',['peste 2% la femei','vârsta medie la diagnosticare']),

q(34,['Tiroidita Hashimoto, în descrierea capitolului, se caracterizează prin:',
 ['Este mai frecventă la femei, în etapa avansată a vârstei mijlocii; produce atrofie cu regenerare și gușă, glanda fiind de obicei fermă, cauciucată','Anticorpii anti-TPO sunt adesea în titruri foarte înalte (>1 000 UI/L)','Pacienții sunt hipo- sau eutiroidieni, deși poate exista o fază toxică inițială („Hashi-toxicoza”); levotiroxina poate reduce gușa chiar la eutiroidieni','Glanda este constant lichidă, anti-TPO lipsind, fără fază toxică posibilă','Levotiroxina este inutilă dacă TSH este normal, gușa neputând regresiona'],'ABC',612,'Tiroidita Hashimoto',
 'Asocierea gușii cauciucate, a titrului TPO >1 000 UI/L și a Hashi-toxicozei, plus regresia gușii sub levotiroxină.',
 ['Demografia, regenerarea cu gușă și consistența cauciucată sunt din deschidere.','>1 000 UI/L este titrul citat.','Eu-/hipotiroidismul, faza toxică și regresia gușii completează.','Consistența variază de la moale la dură, anti-TPO sunt înalți, Hashi-toxicoza este numită.','Textul precizează reducerea gușii chiar fără hipotiroidism.']],
 8,'Distractorii neagă titrul TPO înalt și Hashi-toxicoza, trăsăturile centrale ale paragrafului.',['>1.000 UI/L','Hashi-toxicoza']),

q(35,['Doza inițială de levotiroxină în hipotiroidismul primar, potrivit capitolului, este:',
 ['100 µg zilnic la pacienții tineri și apți','50 µg, crescând la 100 µg după 2-4 săptămâni, la cei cu greutate redusă, vârstnici sau fragili','La boala cardiacă ischemică, mai ales dacă deficitul e sever și îndelungat, majoritatea medicilor încep cu 25 µg zilnic, crescând la 3-4 săptămâni dacă angina/ECG nu se agravează','Doza uzuală de întreținere este 100-150 µg în priză unică zilnică; se evită supresia completă a TSH (risc de FA și osteoporoză)','Se începe de rutină cu 300 µg la vârstnicul ischemic, ținta fiind TSH nedetectabil'],'ABCD',613,'Terapia de substituție — Doze',
 'Ierarhizarea 100 / 50 / 25 µg după vârstă și ischemie, plus întreținerea 100-150 µg fără supresie TSH.',
 ['100 µg la tânărul apt este prima treaptă.','50→100 µg la 2-4 săptămâni este treapta intermediară.','25 µg și intervalul 3-4 săptămâni sunt ale ischemicului.','100-150 µg și avertismentul FA/osteoporoză închid monitorizarea.','300 µg și TSH nedetectabil contrazic prudența cardiacă și interdicția supresiei.']],
 8,'Distractorul înlocuiește 25 µg la ischemic cu 300 µg și transformă supresia TSH din risc în țintă.',['100 µg zilnic','25 µg zilnic']),

q(36,['Hipotiroidismul de graniță sau „eutiroidismul compensat”, în conduita din capitol:',
 ['Tratamentul cu levotiroxină este recomandat dacă TSH se păstrează constant peste 10 mU/L sau dacă există simptome, titruri înalte anti-tiroidiene ori anomalii lipidice','Dacă TSH este crescut marginal, testele se repetă la 3-6 luni, o proporție semnificativă normalizându-se; evoluția spre hipotiroidism este mai frecventă la bărbați sau la anti-TPO în titru crescut','Se tratează imediat orice TSH de 5,5 mU/L, retestarea fiind superfluă','Proba terapeutică este inutilă, simptomele vagi de la TSH <10 mU/L răspunzând constant substituției','În sarcină TSH-ul crescut poate fi lăsat netratat, fătul fiind independent de substituția maternă'],'AB',613,'Eutiroidismul compensat — Conduită',
 'Separarea pragului TSH >10 mU/L (sau simptome/anticorpi/lipide) de retestarea la 3-6 luni a valorilor marginale.',
 ['Pragul >10 și cele trei indicații suplimentare sunt din prima frază.','3-6 luni, normalizarea și riscul la bărbați/anti-TPO sunt din a doua.','Textul cere retestare, nu tratament imediat al valorii marginale.','Simptomele vagi sub 10 mU/L răspund rar; proba terapeutică este tocmai pentru a infirma originea tiroidiană.','Se impune normalizarea TSH în sarcină pentru făt.']],
 8,'Distractorii transformă valoarea marginală într-o indicație imediată și lasă sarcina fără substituție.',['peste 10 mU/L','3-6 luni mai târziu']),

q(37,['În coma mixedematoasă, doza de T3 recomandată de majoritatea medicilor, potrivit capitolului, este:',
 ['2,5-5 µg oral sau intravenos la fiecare 8 ore, apoi creștere treptată; nu se folosesc doze mari intravenoase','100 µg T4 în bolus IV unic, fără T3','300 µg T3 în bolus IV, fără hidrocortizon','Levotiroxină 100 µg la tânăr, T3 fiind evitată','Doar reîncălzire rapidă, fără hormon tiroidian'],'A',613,'Coma mixedematoasă',
 'Reținerea ferestrei 2,5-5 µg T3 la 8 ore și a interdicției bolusului mare IV.',
 ['2,5-5 µg la 8 ore și interdicția dozelor mari IV sunt fraza de tratament.','Textul preferă T3 în doze mici, nu un bolus mare de T4.','Dozele mari IV sunt explicit interzise; hidrocortizonul 100 mg la 8 ore face parte din măsurile suplimentare.','Coma mixedematoasă nu urmează schema ambulatorie de 100 µg.','Hormonul tiroidian este central; reîncălzirea este treptată.']],
 8,'Distractorii înlocuiesc 2,5-5 µg la 8 ore cu boluri de 100-300 µg, pe care textul le interzice.',['2,5-5µ9','hidrocortizon 100 mg']),

q(38,['Screeningul hipotiroidismului congenital, în datele din capitol, include:',
 ['Incidența este de aproximativ 1 la 3 500 de nașteri','Netratat și sever, produce deteriorare neurologică și intelectuală permanentă (cretinism)','Screeningul neonatal prin picătură de sânge (test Guthrie) pentru TSH ridicat este eficient; terapia cu T4 inițiată în primele luni previne cretinismul','Screeningul vârstnicului confuziv este abandonat, litiul și amiodarona necerând nicio monitorizare','Incidența este 1 la 50 de nașteri, screeningul Guthrie fiind inutil după vârsta de 2 ani'],'ABC',613,'Screening-ul hipotiroidismului',
 'Reținerea cifrei 1/3 500, a cretinismului și a ferestrei terapeutice din primele luni de viață.',
 ['1 la 3 500 este incidența citată.','Cretinismul ca sechelă netratată este explicit.','Guthrie și inițierea T4 în primele luni închid prevenția.','Screeningul vârstnicului este nerecomandat exceptând confuzia; litiul și amiodarona cer testare regulată.','1 la 50 exagerează incidența; fereastra utilă este în primele luni.']],
 8,'Distractorii umflă incidența la 1/50 și anulează monitorizarea sub litiu/amiodaronă.',['1 la 3.500','testul Guthrie']),

q(39,['Hipertiroidismul, în epidemiologia de deschidere, se caracterizează prin:',
 ['Afectează probabil 2-5% dintre femei la un moment dat, cu raport pe sexe 5:1, cel mai adesea între 20 și 40 de ani','Peste 99% din cazuri sunt cauzate de boala tiroidiană intrinscă; cauza hipofizară este extrem de rară','Predomină la bărbați peste 70 de ani, cu raport 1:10, cauza hipofizară fiind >50%','Boala Graves lipsește dintre cauzele frecvente, nodulul toxic acoperind 99%','Forma secundară TSH-secretoare este regula la femeia tânără'],'AB',614,'Hipertiroidismul — Epidemiologie',
 'Reținerea ferestrei 2-5% / 5:1 / 20-40 ani și a originii intrinsci >99%.',
 ['Cifrele 2-5%, 5:1 și 20-40 de ani deschid paragraful.','>99% intrinsc versus hipofizar rar este fraza următoare.','Textul dă predominanță feminină 20-40 de ani, nu masculină peste 70.','Graves, gușa multinodulară toxică și nodulul solitar sunt cauzele frecvente.','Cauza hipofizară este extrem de rară.']],
 8,'Distractorii inversează sexul/vârsta și mută etiologia de la >99% intrinsc la hipofizar.',['2-5% din toate femeile','raport pe sexe de 5:1']),

q(40,['Tirotoxicoza indusă de inhibitorii punctului de control imun, în datele din capitol, include:',
 ['Ipilimumab, pembrolizumab și nivolumab provoacă irAE endocrine: tiroidită 15%, hipofizită 9%, adrenalită 1%, diabet zaharat tip 1 <1%','Tiroidita este cea mai frecventă irAE endocrină și apare între 3 și 12 săptămâni de la inițiere','Tratamentul: beta-blocante, analgezice și, mai rar, antitiroidiene dacă tirotoxicoza persistă, mai ales la simptomatici','Diabetul de tip 1 este irAE-ul endocrin dominant (15%), tiroidita fiind rară (<1%)','Debutul este după 5 ani, fără tratament simptomatic posibil'],'ABC',615,'Tirotoxicoza indusă de imunoterapie',
 'Reținerea ierarhiei 15/9/1/<1% și a ferestrei 3-12 săptămâni, plus conduita simptomatică.',
 ['Cele patru procente irAE sunt din listă.','15% și 3-12 săptămâni definesc tiroidita ca cea mai frecventă.','Beta-blocant, analgezic și ATD ocazional sunt conduita.','Cifrele sunt inversate: tiroidita 15%, DZ1 <1%.','Fereastra este 3-12 săptămâni, nu 5 ani.']],
 8,'Distractorii inversează 15% (tiroidită) cu <1% (DZ1) și mută debutul la 5 ani.',['tiroidită (15%)','3 și 12 săptămâni']),

q(41,['Carbimazolul în hipertiroidism, potrivit Cadranului 21.30 și textului, se caracterizează prin:',
 ['Doza inițială uzuală este 20-40 mg zilnic (la 8 ore sau în priză unică); metabolitul activ este tiamazolul (metimazolul)','Agranulocitoza apare la 0,1%; pacienții trebuie avertizați să se prezinte și să-și controleze leucograma la febră sau disfagie nejustificată','Sinteza hormonală scade rapid, dar T4 are timp de înjumătățire de 7 zile, deci beneficiul clinic apare abia la 10-20 de zile','Erupțiile cutanate sunt mai frecvente și necesită de obicei schimbarea medicamentului; la toxicitate sub carbimazol se poate trece pe PTU și vice-versa','Doza inițială este 2 mg/săptămână, agranulocitoza lipsind, tiamazolul fiind un metabolit inactiv'],'ABCD',616,'Cadranul 21.30 — Carbimazol',
 'Integrarea dozei 20-40 mg, a agranulocitozei 0,1%, a latenței 10-20 zile și a substituirii PTU la toxicitate.',
 ['20-40 mg și tiamazolul ca metabolit activ sunt din cadran.','0,1% și avertismentul febră/disfagie sunt din textul de siguranță.','7 zile și 10-20 de zile explică latența clinică.','Schimbarea preparatului la erupție/toxicitate este conduita de la începutul paginii următoare.','2 mg/săptămână și absența agranulocitozei contrazic cadranul; tiamazolul este metabolitul activ.']],
 8,'Distractorul coboară doza la 2 mg și neagă agranulocitoza 0,1% din același cadran.',['20-40 mg','agranulocitoză (0,1%)'],[617]),

q(42,['La fătul unei mame cu antecedente de Graves, un ritm cardiac persistent peste:',
 ['160/minut este înalt sugestiv pentru hipertiroidism fetal, caz în care mamei i se aplică PTU și/sau propranolol','120/minut impune iod radioactiv matern','90/minut definește hipotiroidismul fetal și contraindică PTU','200/minut este pragul de eutiroidie fetală','Ritmul fetal nu se monitorizează, TSI neputând traversa placenta'],'A',618,'Fătul și boala Graves maternă',
 'Reținerea pragului >160/min ca indicator de hipertiroidism fetal și a conduitei PTU/propranolol.',
 ['>160/min și PTU/propranolol sunt fraza din paragraf.','IRA este absolut contraindicat în sarcină.','90/min nu este pragul citat; PTU este tocmai tratamentul hipertiroidismului fetal.','200/min nu este definit ca eutiroidie.','TSI persistă și stimulează tiroida fetală; ritmul se monitorizează lunar.']],
 8,'Distractorii mută pragul 160/min spre 90 sau 200 și reintroduc iodul radioactiv, contraindicat în sarcină.',['160/minut','PTU']),

q(43,['Evaluarea nodulului tiroidian, în cifrele de risc din capitol, include:',
 ['Riscul de malignitate este de 5% la persoanele cu nodul solitar sau nodul dominant într-o gușă multinodulară','FNA are o rată de 5% rezultate fals-negative; nodulul presupus benign neexcizat necesită urmărire periodică','Un nodul cald la scintigrafie este doar rareori malign; un nodul rece este malign în doar 10% din cazuri, FNA înlocuind practic scintigrafia diagnostică','Un nodul rece confirmă carcinomul în 90% din cazuri, FNA fiind superfluă','Rata de fals-negativ FNA este nulă, urmărirea fiind inutilă după o citologie benignă'],'ABC',621,'Gușa — FNA și scintigrafie',
 'Separarea riscului 5%, a fals-negativelor 5% și a malignității de 10% a nodulului rece.',
 ['5% este riscul citat pentru nodulul solitar/dominant.','5% fals-negativ și urmărirea sunt precizate.','Nodulul cald rar malign și 10% la cel rece, cu FNA dominantă, închid paragraful.','Doar 10% dintre nodulii reci sunt maligni; FNA este centrală.','Rata de 5% fals-negativ impune consiliere și urmărire.']],
 8,'Distractorii transformă nodulul rece din risc 10% în confirmare 90% și anulează fals-negativul FNA.',['risc de malignitate de 5%','10% din cazuri']),

q(44,['Carcinomul medular tiroidian, în datele genetice din capitol:',
 ['Aproximativ 25% dintre pacienții diagnosticați prezintă o mutație RET, chiar în absența altor manifestări MEN 2, de unde consilierea genetică și screeningul familial','Persoanele cu mutații în cadrul MEN 2 sunt sfătuite să se supună tiroidectomiei profilactice încă de la vârsta de 5 ani, pentru a preveni CMT','Mutația RET este absentă în CMT sporadic, screeningul familial fiind inutil după 25%','Tiroidectomia profilactică se amână până după 50 de ani, mutația RET neavând impact în copilărie','Vandetanibul și cabozantinibul sunt inutile în formele avansate, chirurgia fiind evitată'],'AB',622,'Carcinomul medular — Genetică',
 'Reținerea cifrei 25% RET și a tiroidectomiei profilactice de la 5 ani în MEN 2.',
 ['25% RET fără alte manifestări MEN 2 și screeningul familial sunt din deschidere.','Vârsta de 5 ani pentru tiroidectomia profilactică este explicită.','Mutația poate exista fără alte manifestări MEN 2; screeningul rămâne relevant.','Profilaxia este de la 5 ani, nu de la 50.','Textul citează beneficiu al vandetanibului/cabozantinibului în CMT avansat; chirurgia (totală + evidare) rămâne metoda uzuală.']],
 8,'Distractorii amână profilaxia de la 5 ani la 50 de ani și anulează relevanța RET fără fenotip MEN 2 complet.',['25% dintre pacienţii','vârsta de 5 ani']),
];
