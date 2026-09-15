import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('gineco',12,pdfOffset,`gineco-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const GINECO_ADVANCED=[
q(1,['Diagnosticul de menopauză se pune după:',
 ['Un an de amenoree','Șase luni de amenoree','Trei cicluri menstruale absente','FSH scăzut și estradiol crescut','LH scăzut și FSH scăzut'],'A',276,'Fiziologie — Menopauza',
 'Aplicarea criteriului temporal de diagnostic al menopauzei și recunoașterea profilului hormonal invers.',
 ['Nota „De reținut” definește diagnosticul după un an de amenoree.','Pragul de șase luni definește amenoreea secundară, nu menopauza.','Trei cicluri absente apar în definiția amenoreei secundare, nu a menopauzei.','În menopauză FSH și LH cresc, iar estradiolul scade.','Ambele gonadotropine cresc, nu scad.']],
 8,'Distractorii importă pragurile amenoreei secundare și inversează FSH/estradiol.',['un an de amenoree','funcţiei ovariene'],[277]),

q(2,['Pubertatea precoce:',
 ['La fetițe se definește prin apariția modificărilor pubertare sub 8 ani','Analogii de GnRH sunt utili pentru supresia LH și FSH în forma centrală','Complicațiile includ statura mică prin închiderea precoce a cartilajelor de creștere','La băieți apare sub 12 ani și este, de obicei, idiopatică','Forma incompletă se tratează imediat cu analogi de GnRH, fără perioadă de observație'],'ABC',275,'Dezvoltare — Pubertatea precoce',
 'Diferențierea formei centrale de cea incompletă și recunoașterea consecinței asupra taliei.',
 ['Pragul sub 8 ani la fetițe este explicit.','Analogii de GnRH sunt tratamentul formei centrale.','Statura mică prin închiderea precoce a cartilajelor este complicația citată.','La băieți pragul citat este sub 9 ani, iar cauza cea mai frecventă este hiperplazia suprarenaliană.','Forma incompletă necesită doar observație, pentru a nu se transforma în varianta completă.']],
 8,'Distractorii mută pragul de vârstă al băieților și tratează agresiv o formă care cere doar urmărire.',['Analogii de GnRH','statura mică'],[274]),

q(3,['Contraceptivele orale combinate:',
 ['Inhibă dezvoltarea foliculară și ovulația și cresc vâscozitatea mucusului cervical','Sunt contraindicate la marile fumătoare și la pacientele cu istoric de tromboză venoasă profundă','Conțin doar progestativ și trebuie administrate la aceeași oră în fiecare zi','Eficacitatea tipică este identică cu cea ideală, de 99%','Nu modifică calitatea endometrului'],'AB',277,'Contracepția — Metode hormonale',
 'Recunoașterea mecanismului COC și a contraindicațiilor tromboembolice, distinct de pilula doar cu progestativ.',
 ['Mecanismul combinat (ovulație, endometru, mucus) este descris pentru COC.','Contraindicațiile la fumătoare, TVP, malignități dependente de estrogeni și afecțiuni hepatice sunt explicite.','Administrarea la aceeași oră caracterizează pilulele doar cu progestativ.','Eficacitatea ideală este 99%, cea tipică 92%.','COC schimbă calitatea endometrului, prevenind implantarea.']],
 8,'Distractorii atribuie COC proprietățile pilulei doar cu progestativ și echivalează eficacitatea ideală cu cea tipică.',['Risc crescut de TVP','marile fumătoare']),

q(4,['Contracepția de urgență:',
 ['Schemele cu estradiol și progestativ se administrează în primele 72 de ore de la contactul neprotejat','Dispozitivul intrauterin cu cupru poate fi inserat în primele 4–5 zile','Levonorgestrelul (planul B) este o opțiune citată','Mifepristona (RU 486) întrerupe o sarcină nou apărută','Lactația asigură contracepție eficace peste 12 luni postpartum, independent de amenoree'],'ABCD',278,'Contracepția — Contracepția de urgență',
 'Ierarhizarea ferestrelor de 72 de ore și 4–5 zile și recunoașterea rolului mifepristonei.',
 ['Fereastra de 72 de ore pentru schemele hormonale este explicită.','DIU cu cupru în 4–5 zile este citat.','Levonorgestrelul este listat ca planul B.','Mifepristona întrerupe o sarcină nou apărută.','Lactația este eficace doar dacă este activă, sub 6 luni postpartum și cu amenoree.']],
 8,'Distractorul extinde metoda lactațională dincolo de cele trei condiții din tabel.',['primele 72 ore','Levonorgestrel']),

q(5,['Amenoreea:',
 ['Forma primară include absența menstruațiilor până la 16 ani, în prezența caracterelor sexuale secundare','În orice tip de amenoree, primul pas este testul de sarcină','Forma secundară se definește prin absența menstruațiilor timp de 6 săptămâni','Triada atletelor cuprinde amenoree, osteoporoză și tulburări de alimentație','Sindromul Asherman este o cauză de amenoree primară prin disgenezie gonadică'],'ABD',279,'Tulburări menstruale — Amenoreea',
 'Separarea amenoreei primare de cea secundară și recunoașterea primului pas diagnostic.',
 ['Definiția primarei cu pragul de 16 ani este explicită.','„Pasul următor” cere β-hCG ca primă investigație.','Secundara înseamnă 6 luni sau peste 3 menstre absente, nu 6 săptămâni.','Triada atletelor este redată în nota „De reținut”.','Asherman (sinechii intrauterine postchirurgicale sau infecțioase) este cauză de amenoree secundară.']],
 8,'Distractorii comprimă pragul temporal al formei secundare și mută Asherman în disgenezia gonadică.',['Amenoreea atletelor','Sindromul Asherman']),

q(6,['Mittelschmerz reprezintă:',
 ['O durere ușoară, unilaterală, recurentă, la mijlocul ciclului, anterior ovulației','Durerea pelvină din endometrioză, cu maxim cu 1–2 săptămâni înainte de menstruație','Invazia țesutului endometrial în miometru','Durerea colicativă a dismenoreei primare, care apare la începutul menstruației','Semnul candelabrului la mobilizarea colului uterin'],'A',281,'Tulburări menstruale — Mittelschmerz',
 'Identificarea durerii ovulatorii și diferențierea de endometrioză, adenomioză și BIP.',
 ['Descrierea din nota „De reținut” corespunde mittelschmerz.','Maximul dureros premenstrual caracterizează endometrioza.','Invazia în miometru definește adenomioza.','Dismenoreea primară începe odată cu menstruația.','Semnul candelabrului aparține bolii inflamatorii pelvine.']],
 8,'Toate distractoarele sunt dureri pelvine reale din același capitol, atribuite altor entități.',['Mittelschmerz','anterior ovulaţiei']),

q(7,['Endometrioza:',
 ['Țesutul ectopic urmează același model menstrual ca endometrul eutopic','Laparoscopia permite obiectivarea de leziuni de tip „praf de pușcă”','Este descrisă ca cea mai frecventă cauză de infertilitate la femeie','CA-125 are o sensibilitate foarte bună pentru diagnostic','Adenomioza este sinonimă, reprezentând implantarea pe ovare și ligamentul larg'],'ABC',281,'Tulburări menstruale — Endometrioza',
 'Recunoașterea fiziopatologiei, a imaginii laparoscopice și a rolului în infertilitate.',
 ['Urmărirea ciclului de către țesutul ectopic este explicită.','Leziunile „praf de pușcă” la laparoscopie sunt descrierea din text.','Nota „De reținut” o identifică drept cea mai frecventă cauză de infertilitate, până la 50% din cazuri.','CA-125 este frecvent crescut, dar sensibilitatea nu este foarte bună.','Adenomioza este invazia în miometru, nu sinonimul endometriozei peritoneal.']],
 8,'Distractorii supraestimează CA-125 și confundă endometrioza cu adenomioza, definite pe aceeași pagină.',['praf de puşcă','cea mai frecventă cauză de infertilitate']),

q(8,['Adenomioza:',
 ['Reprezintă invazia țesutului endometrial în miometru','Cauzează uter mic, asimetric, nedureros','Se prezintă frecvent ca durere cronică la o pacientă peste 40 de ani','Este cea mai frecventă cauză de infertilitate, însumând 50% din cazuri','Diagnosticul de elecție este laparoscopia cu leziuni „praf de pușcă”'],'AC',281,'Tulburări menstruale — Adenomioza',
 'Diferențierea adenomiozei de endometrioză după sediu, vârstă și aspect uterin.',
 ['Invazia în miometru este definiția din notă.','Textul descrie creștere simetrică a uterului, cu sensibilitate uterină.','Prezentarea peste 40 de ani este explicită.','Cea mai frecventă cauză de infertilitate este endometrioza.','Laparoscopia cu „praf de pușcă” este a endometriozei.']],
 8,'Distractorii importă epidemiologia și semnele laparoscopice ale endometriozei asupra adenomiozei.',['Adenomioza','peste 40 de ani']),

q(9,['Sindromul de ovar micropolichistic:',
 ['Excesul de LH induce o producție ovariană crescută de androgeni','Raportul LH/FSH peste 2 este un element de laborator citat','Pacientele au risc crescut de cancer endometrial prin estrogeni cronic crescuți','Chisturile ovariene sunt rezultatul hipersecreției de androgeni, nu cauza bolii','Metforminul și clomifenul sunt contraindicate, tratamentul fiind doar chirurgical'],'ABCD',282,'Tulburări menstruale — SOPC',
 'Corelarea dezechilibrului LH/FSH cu hiperandrogenismul, riscul oncologic și natura secundară a chisturilor.',
 ['Excesul de LH este mecanismul citat.','Raportul LH/FSH >2 este redat la laborator.','Riscul de cancer endometrial prin estrogeni cronici este explicit.','Nota precizează că chisturile sunt rezultat, nu cauză.','Tratamentul include exerciții, scădere ponderală, COC, metformin, spironolactonă și clomifen.']],
 8,'Distractorul transformă o boală medicală, cu metformin și clomifen, într-o indicație chirurgicală de primă intenție.',['LH/FSH >2','cancer endometrial']),

q(10,['Boala inflamatorie pelvină:',
 ['Infecția se poate extinde și produce perihepatită (boala Fitz-Hugh-Curtis)','Semnul candelabrului reflectă durerea intensă la palparea colului','Contracepția de barieră crește riscul de BIP','Complicațiile includ infertilitate, abces tubo-ovarian și sarcină ectopică','Agentul etiologic principal este Treponema pallidum'],'ABD',284,'Infecții — Boala inflamatorie pelvină',
 'Recunoașterea semnelor clinice, a perihepatitei și a sechelelor tubare.',
 ['Boala Fitz-Hugh-Curtis este descrisă ca perihepatită prin extensie.','Semnul candelabrului este definit în nota „De reținut”.','Contracepția de barieră reduce riscul de BIP.','Infertilitatea, abcesul tubo-ovarian și sarcina ectopică sunt complicațiile citate.','Agenții principali sunt N. gonorrhoeae și Chlamydia, nu Treponema.']],
 8,'Distractorii inversează efectul contracepției de barieră și atribuie etiologia sifilisului.',['semnul candelabrului','Fitz-Hugh-Curtis']),

q(11,['Cancerul de col uterin:',
 ['Carcinomul scuamos reprezintă circa 80% din cazuri','Tipurile HPV 6 și 11 sunt factorii oncogeni citați pentru cancerul invaziv','Screeningul prin frotiu Pap începe de la vârsta de 21 de ani','Adenocarcinomul reprezintă 80% din cazuri','Conizația este rezervată doar carcinomului cu invazie stromală masivă'],'AC',287,'Neoplasme — Cancerul de col uterin',
 'Ierarhizarea histologiei, a tipurilor HPV cu risc înalt și a vârstei de început a screeningului.',
 ['Distribuția 80% scuamos / 15% adenocarcinom / 5% mixt este explicită.','Tipurile citate sunt 16, 18, 31 sau 33, nu 6 și 11.','Screeningul Pap de la 21 de ani este redat în notă.','80% este ponderea formei scuamoase, nu a adenocarcinomului.','LEEP, conizația sau ablația laser sunt tratamente și pentru HSIL, nu doar pentru invazia masivă.']],
 8,'Distractorii inversează ponderea histologiilor și atribuie oncogeneza tipurilor HPV condilomatoase.',['80% din cazuri','vârsta de 21']),

q(12,['Alegeți afirmațiile corecte referitoare la cancerul mamar:',
 ['Majoritatea cancerelor mamare sunt diagnosticate prin mamografii de screening, dar circa 20% nu sunt detectate mamografic','Prezența ganglionilor axilari pozitivi și dimensiunea mare a tumorii sunt factori de prognostic negativ','Pacientele cu mutații BRCA1 sau BRCA2 pot lua în considerare mastectomia și ooforectomia profilactică','Aspirația cu ac fin a unei tumori solide are risc de rezultat fals negativ de 0%','Tumorile cu receptori hormonali pozitivi au prognostic mai rezervat decât cele negative'],'ABC',292,'Afecțiunile sânului — Cancerul mamar',
 'Corelarea limitelor mamografiei, a prognosticului ganglionar și a indicației profilactice BRCA.',
 ['Nota „De reținut” citează atât predominanța diagnosticului mamografic, cât și rata de 20% nedetectate.','Ganglionii axilari pozitivi și dimensiunea mare sunt factori de prognostic negativ.','Mastectomia și ooforectomia profilactică sunt menționate pentru BRCA1/2.','Aspirația cu ac fin are risc de 20% rezultat fals negativ.','Receptorii hormonali pozitivi și HER2/neu asociază un prognostic mai bun.']],
 8,'Distractorii neagă fals-negativul FNA, pe care textul îl cuantifică la 20%, și inversează prognosticul receptorilor hormonali.',['20% dintre cancere','ganglionilor axilari pozitivi']),
];
