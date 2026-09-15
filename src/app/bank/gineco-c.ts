import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('gineco',12,pdfOffset,`gineco-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const GINECO_C=[
q(43,['Tratamentul de primă linie pentru bufeurile de menopauză este:',
 ['Scăderea ponderală','Estrogenul oral continuu, fără evaluarea riscului trombotic','Chimioterapia pe bază de cisplatin, ca în cancerul de col invaziv','Ablația endometrială de primă intenție','Metronidazolul, ca în vaginoza bacteriană'],'A',277,'Fiziologie — Menopauza',
 'Identificarea scăderii ponderale ca primă linie pentru bufeuri, distinct de estrogenul sistemic.',
 ['Textul precizează că tratamentul de primă linie pentru bufeuri este scăderea ponderală.','Estrogenul sistemic crește riscul de cancer mamar și TVP; nu este cotat ca primă linie.','Cisplatinul aparține cancerului de col invaziv.','Ablația endometrială este pentru hemoragii uterine severe.','Metronidazolul tratează vaginoza, nu bufeurile.']],
 8,'Distractorii sunt terapii reale din capitol, atribuite greșit bufeurilor a căror primă linie este ponderală.',['bufeuri','scăderea ponderală']),

q(44,['Alegeți afirmațiile corecte referitoare la menopauză și osteoporoză:',
 ['Tratamentul local cu estrogeni este contraindicat la pacientele cu istoric de cancer de sân','Nivelul scăzut al estrogenilor ovarieni crește riscul de osteoporoză','Terapia hormonală este asociată cu risc crescut de cancer mamar și tromboză venoasă profundă','Calciul, vitamina D, bisfosfonații și exercițiul previn osteoporoza','Raloxifenul și tamoxifenul cresc osteoporoza și trebuie evitați după menopauză'],'ABCD',277,'Fiziologie — Menopauza și osteoporoza',
 'Corelarea contraindicației estrogenului local după cancer mamar cu riscul de osteoporoză și cu limitele THS.',
 ['Nota contraindică estrogenul local după cancer mamar.','Nota leagă estrogenii ovarieni scăzuți de osteoporoză.','THS este asociată explicit cu cancer mamar și TVP.','Calciul, vitamina D, bisfosfonații și exercițiul sunt măsurile de prevenție.','SERM (raloxifen, tamoxifen) servesc la reducerea osteoporozei, nu o cresc.']],
 8,'Distractorul inversează efectul SERM asupra osteoporozei, pe care textul îl descrie ca protector.',['cancer de sân','raloxifenul']),

q(45,['Medroxiprogesteronul acetat (Depo-Provera):',
 ['Este un analog de progesteron administrat din 3 în 3 luni, care inhibă ovulația și îngroșarea endometrului','Efectele secundare includ greață, cefalee, creștere ponderală și osteoporoză','Trebuie schimbat săptămânal, ca patch-ul transdermic','Conține etinilestradiol în doze mai mari decât inelul vaginal','Eficacitatea scade la pacientele cu masă corporală mare prin difuzie în țesutul adipos, identic patch-ului'],'AB',277,'Contracepția — Depo-Provera',
 'Recunoașterea intervalului de 3 luni și a osteoporozei ca efect advers, distinct de patch.',
 ['Administrarea din 3 în 3 luni și inhibiția ovulației/endometrului sunt din tabel.','Greața, cefaleea, creșterea ponderală și osteoporoza sunt efectele citate.','Schimbarea săptămânală caracterizează patch-ul.','Etinilestradiolul aparține inelului și COC, nu Depo.','Eficacitatea redusă la masă corporală mare este nota patch-ului.']],
 8,'Distractorii atribuie Depo schema săptămânală și limita ponderală ale patch-ului, de pe aceeași pagină.',['Depo-Provera','osteoporoză']),

q(46,['Patch-urile contraceptive transdermice:',
 ['Eliberează estradiol și progestativ similar COC și trebuie schimbate săptămânal','Sunt mai puțin eficace la pacientele cu masă corporală mare, prin difuzie în țesutul adipos','Asociază risc crescut de TVP','Se lasă pe loc 10 ani, ca steriletul de cupru','Se administrează din 3 în 3 luni, ca medroxiprogesteronul'],'ABC',277,'Contracepția — Patch-ul transdermic',
 'Corelarea schimbării săptămânale, a eficacității reduse la BMI crescut și a riscului de TVP.',
 ['Acțiunea similară COC și schimbarea săptămânală sunt explicite.','Difuzia în țesutul adipos la masă corporală mare este nota de eficacitate.','Riscul crescut de TVP este listat.','10 ani este durata steriletului de cupru.','Intervalul de 3 luni este al Depo-Provera.']],
 8,'Duratele 1 săptămână / 3 luni / 10 ani din tabelele contraceptive sunt ușor de permutat.',['masa corporală','Patch-uri'],[278]),

q(47,['Inelul intravaginal contraceptiv:',
 ['Eliberează etinilestradiol 3 săptămâni pentru a preveni ovulația, în doze de estrogeni mai mici decât la COC','Necesită înlocuire lunară','Se inserează în uter și se lasă 10 ani','Este o pilulă doar cu progestativ, de luat la aceeași oră zilnic','Nu asociază risc de TVP, spre deosebire de COC'],'AB',278,'Contracepția — Inelul vaginal',
 'Recunoașterea eliberării de 3 săptămâni, a înlocuirii lunare și a dozei mai mici de estrogen decât COC.',
 ['Etinilestradiolul 3 săptămâni și dozele mai mici decât COC sunt din tabel.','Înlocuirea lunară este explicită.','Inserția uterină 10 ani definește steriletul de cupru.','Ora fixă zilnică caracterizează pilulele doar cu progestativ.','Tabelul listează risc crescut de TVP și pentru inel.']],
 8,'Distractorii mută durata IUDului și regula orei a POP asupra inelului lunar.',['etinilestradiol','înlocuire lunară']),

q(48,['Dispozitivele intrauterine citate:',
 ['Steriletul de cupru poate fi lăsat pe loc 10 ani','Steriletul cu progestativ este lăsat pe loc circa 5 ani','Cel de cupru poate fi plasat ca urgență imediat după act, cu scădere cu 90% a ratei sarcinii','Ambele se schimbă săptămânal, ca patch-ul','Lactația înlocuiește DIU peste 12 luni postpartum, independent de amenoree'],'ABC',278,'Contracepția — Dispozitivele intrauterine',
 'Ierarhizarea duratelor 10 ani (cupru) versus circa 5 ani (progestativ) și a eficacității de urgență de 90%.',
 ['Durata de 10 ani a cuprului este explicită.','Durata de circa 5 ani a sistemului cu progestativ este citată.','Scăderea cu 90% a ratei sarcinii ca urgență este din tabel.','Schimbarea săptămânală este a patch-ului.','Lactația este eficace doar dacă este activă, sub 6 luni și cu amenoree.']],
 8,'Duratele 5/10 ani versus săptămâna patch-ului și cele trei condiții ale lactației sunt capcane clasice.',['10 ani','90%']),

q(49,['Sterilizarea chirurgicală:',
 ['Constă în secționarea ductului deferent (vasectomie) sau ligatura tubară','În caz de eșec sau după repermeabilizarea tubară există risc crescut de sarcină ectopică','Este reversibilă facil, fără risc ectopic','Are eficacitate tipică de 71%, ca spermicidul folosit singur','Se lasă in situ 10 ani, apoi se extrage ca un sterilet de cupru'],'AB',279,'Contracepția — Sterilizarea',
 'Recunoașterea vasectomiei/ligaturii și a riscului ectopic la eșec sau repermeabilizare.',
 ['Cele două tehnici sunt din tabel.','Riscul crescut de sarcină ectopică la eșec sau după repermeabilizare este explicit.','Repermeabilizarea este descrisă ca dificilă.','71% este eficacitatea tipică a spermicidului singur.','10 ani este durata cuprului, nu a sterilizării.']],
 8,'Distractorii importă eficacitatea spermicidului și durata IUDului asupra unei metode aproape 100%.',['vasectomie','sarcină ectopică']),

q(50,['Menopauza prematură reprezintă declinul funcției ovariene înaintea vârstei de:',
 ['40 de ani','51,5 ani, vârsta medie a menopauzei naturale','16 ani, pragul amenoreei primare','8 ani, pragul pubertății precoce la fete','21 de ani, vârsta de început a screeningului citologic'],'A',276,'Fiziologie — Menopauza prematură',
 'Diferențierea menopauzei premature (<40 ani) de vârsta medie de 51,5 ani și de alte praguri din capitol.',
 ['Textul definește menopauza prematură înainte de 40 de ani.','51,5 ani este vârsta medie a menopauzei naturale.','16 ani definește amenoreea primară.','8 ani este pragul pubertății precoce la fetițe.','21 de ani este începutul frotiului Pap.']],
 8,'Toate pragurile sunt reale din ginecologie; doar 40 de ani definește menopauza prematură.',['Menopauza prematură','înaintea vârstei de 40']),

q(51,['După fertilizare, textul precizează că:',
 ['Sincițiotrofoblastul secretă hCG pentru a menține activitatea corpului galben','Corpul galben continuă să secrete progesteron până când producția este preluată de placentă, circa 8–12 săptămâni','Dacă ovocitul nu este fertilizat, corpul galben degenerează, iar endometrul se detaşează','Peak-ul de FSH, nu de LH, induce ovulația','hCG are acțiune FSH-like și scade progesteronul după implantare'],'ABC',276,'Fiziologie — Fertilizarea și corpul galben',
 'Corelarea hCG–corp galben cu preluarea placentară la 8–12 săptămâni și cu menstruația în absența nidației.',
 ['Rolul hCG al sincițiotrofoblastului este explicit.','Intervalul 8–12 săptămâni pentru preluarea placentară este citat.','Degenerarea corpului galben fără fertilizare este descrisă.','Peak-ul de LH, nu de FSH, induce ovulația.','hCG are acțiune LH-like și menține progesteronul.']],
 8,'Distractorii inversează LH versus FSH și substituie acțiunea LH-like a hCG cu un efect opus pe progesteron.',['Sinciţiotrofoblastul','8-12 săptămâni']),

q(52,['La o pacientă cu sindrom de insensibilitate la androgeni și testicule prezente se recomandă:',
 ['Extirparea gonadelor la vârstă precoce, din cauza riscului crescut de cancer testicular','Testul de sarcină ca prim pas în orice amenoree','Administrarea de Depo-Provera din 3 în 3 luni, ca contraceptiv de elecție','Observație pe termen nelimitat, fără gonadectomie, riscul oncologic fiind nul','Conizație de col, ca în HSIL'],'AB',279,'Tulburări menstruale — Insensibilitatea la androgeni',
 'Aplicarea gonadectomiei precoce pentru risc de cancer testicular și a β-hCG ca prim pas în amenoree.',
 ['„Pasul următor” cere extirparea gonadelor precoce pentru riscul de cancer testicular.','Primul pas în orice amenoree este testul de sarcină.','Depo nu este conduita acestei entități.','Textul nu autorizează observația fără gonadectomie.','Conizația este a displaziei de col, nu a insensibilității la androgeni.']],
 8,'Distractorii mută contracepția injectabilă și conizația asupra unei indicații oncologice de gonadectomie.',['insensibilitate la androgeni','cancer testicular']),

q(53,['În stadiul Tanner 4 al dezvoltării mamare se observă:',
 ['Creșterea secundară a mamelonului și areolei deasupra nivelului sânului','Doar mamelonul ascensionat, fără țesut mamar','Înmugurirea sânilor și reliefarea areolei, ca în stadiul 2','Areola revenită la nivelul sânului, cu mamelon proeminent, ca în stadiul 5','Păr aspru până pe fața medială a coapselor, fără nicio modificare mamară'],'A',274,'Dezvoltare — Stadiile Tanner mamare',
 'Identificarea muntelui secundar areolo-mamelonar din Tanner 4, distinct de stadiile 1, 2 și 5.',
 ['Tabelul descrie creșterea secundară a mamelonului și areolei deasupra sânului în stadiul 4.','Doar mamelonul ascensionat este stadiul 1.','Înmugurirea este stadiul 2.','Areola revenită la nivelul sânului este stadiul 5.','Pilozitatea până pe coapse este Tanner 5 pubian, nu definirea stadiului mamar 4.']],
 8,'Distractorii sunt descrierile reale ale stadiilor 1, 2 și 5 din același tabel.',['creşterea secundară','areolei']),

q(54,['Pubertatea precoce la băieți și forma heterosexuală la fetițe:',
 ['La băieți apare sub 9 ani și este cel mai adesea cauzată de hiperplazia suprarenaliană','Leziunile sistemului nervos central sau traumatismele cauzează pubertate izosexuală precoce în circa 10% din cazuri','La fetițe, cauzele heterosexuale cele mai frecvente sunt hiperplazia adrenală congenitală, androgenii exogeni sau tumorile secretante de androgeni','Pragul la băieți este sub 8 ani, identic fetițelor, și cauza tipică este idiopatică','LH și FSH scăzute, fără răspuns la GnRH, definesc forma centrală, nu pseudopubertatea'],'ABC',274,'Dezvoltare — Pubertatea precoce',
 'Recunoașterea pragului <9 ani și a HAC la băieți, a ponderii de 10% a leziunilor SNC și a cauzelor virilizante la fetițe.',
 ['Nota plasează pragul băieților sub 9 ani, cu HAC ca cea mai frecventă cauză.','Ponderea de circa 10% a leziunilor SNC/traumatismelor este explicită.','HAC, androgenii exogeni și tumorile sunt cauzele heterosexuale citate la fetițe.','Sub 8 ani este pragul fetițelor; la băieți cauza tipică nu este idiopatică.','LH/FSH scăzute fără răspuns la GnRH definesc pseudopubertatea, nu forma centrală.']],
 8,'Distractorii inversează pragul 8 versus 9 ani și diagnosticul hormonal central versus pseudo.',['<9','hiperplazia suprarenaliană'],[275]),

q(55,['Tratamentul partenerului în vaginite:',
 ['Este necesar în infecțiile cu Trichomonas, cu metronidazol','Nu este necesar pentru Gardnerella vaginalis','Nu este necesar pentru Candida albicans','Aplicarea de KOH pe secreție poate emana miros de pește („testul mirosului”)','Partenerul trebuie tratat și în candidoză, altfel recidiva este certă'],'ABCD',283,'Infecții — Vaginitele și partenerul',
 'Aplicarea regulii de tratament al partenerului doar în trichomonază și recunoașterea testului mirosului.',
 ['Nota cere tratamentul partenerului în Trichomonas cu metronidazol.','Partenerul nu este necesar pentru G. vaginalis.','Partenerul nu este necesar pentru C. albicans.','Testul mirosului la KOH este descris în laborator.','Textul exclude explicit tratamentul partenerului în candidoză.']],
 8,'Capcana este generalizarea tratamentului partenerului de la Trichomonas asupra candidei și vaginozei.',['Trichomonas','testul mirosului']),

q(56,['Monitorizarea răspunsului în sifilis tratat include:',
 ['Obținerea RPR în 2–4 săptămâni pentru titrul bazal','Eficiența terapeutică definită prin scăderea titrului de patru ori la 6 și 12 luni','Cultura pe agar Thayer-Martin ca test de vindecare','FTA-ABS care se negativează în 2 săptămâni după o doză de metronidazol','Negativarea FTA-ABS ca singurul criteriu de succes terapeutic'],'AB',285,'Infecții — Tratamentul sifilisului',
 'Aplicarea titrului RPR de bază la 2–4 săptămâni și a scăderii de patru ori la 6 și 12 luni.',
 ['RPR-ul de bază la 2–4 săptămâni este explicit.','Scăderea de patru ori a titrului la 6 și 12 luni definește eficiența.','Thayer-Martin este mediul gonococului.','FTA-ABS rămâne pozitiv toată viața; metronidazolul nu este schema sifilisului (penicilină G, doxiciclină, tetraciclină).','FTA-ABS nu se folosește ca criteriu de dispariție pentru succes.']],
 8,'Distractorii confundă persistența FTA-ABS cu titrul RPR și atribuie sifilisului mediul gonococului.',['2-4 săptămâni','patru ori'],[284]),

q(57,['Herpesul genital și infecția HPV:',
 ['Herpesul este cauzat în majoritatea cazurilor de HSV-2; HSV-1 este mai puțin comun','HPV 6 și 11 se asociază cu condiloame genitale','HPV 16 sau 18 sunt implicate în 70% din cazurile de cancer de col','Vaccinarea vizează tipurile 6, 11, 16 și 18, la femei 11–26 ani și bărbați 9–21 ani','HPV 6 și 11 sunt tipurile oncogene citate pentru 70% din cancerele de col invazive'],'ABCD',285,'Infecții — Herpes și HPV',
 'Separarea tipurilor condilomatoase 6/11 de oncogenele 16/18 (70%) și recunoașterea ferestrelor de vaccinare.',
 ['Predominanța HSV-2 este explicită.','Tipurile 6 și 11 sunt ale condiloamelor.','70% din cancerele de col sunt legate de 16 sau 18.','Vârstele 11–26 ani (femei) și 9–21 ani (bărbați) sunt ferestrele vaccinului.','6 și 11 sunt condilomatoase, nu oncogenele de 70%.']],
 8,'Capcana clasică este permutarea HPV 6/11 versus 16/18 pentru cele 70% de cancere de col.',['70% din cazuri','11 şi 26 ani']),

q(58,['Șancrul moale este cauzat de:',
 ['Haemophilus ducreyi','Treponema pallidum','Neisseria gonorrhoeae','Gardnerella vaginalis','HSV-2'],'A',285,'Infecții — Șancrul moale',
 'Identificarea H. ducreyi ca agent al șancrului moale, distinct de sifilis, gonococ, vaginoză și herpes.',
 ['Textul identifică Haemophilus ducreyi (OCR: Hacmophilus ducreyi) drept agent.','T. pallidum produce sifilisul, cu șancru nedureros.','Gonococul produce cervicita și forma diseminată.','Gardnerella produce vaginoza.','HSV-2 produce veziculele herpetice dureroase.']],
 8,'Toate distractoarele sunt agenți reali din același capitol de BTS, cu ulcerații sau secreții ușor de confundat.',['d11crcyi','bubo']),

q(59,['Clasificarea Bethesda a displaziei cervicale:',
 ['ASCUS impune screening/tipizare HPV; dacă tulpina e cu risc ridicat, colposcopie cu biopsie sau Pap la 12 luni','LSIL (CIN 1) permite repetarea Pap la 6 și 12 luni, HPV la 12 luni, sau LEEP/conizație/ablație laser','HSIL (CIN 2 sau 3) se tratează prin LEEP, conizație sau ablație laser, cu citologie la fiecare 6 luni','ASCUS se tratează imediat prin histerectomie radicală cu limfadenectomie','Carcinomul scuamos microinvaziv sub 5 mm se lasă doar sub observație, fără conizație sau histerectomie'],'ABC',287,'Neoplasme — Displazia de col',
 'Ierarhizarea conduitei ASCUS versus LSIL versus HSIL, distinct de histerectomia radicală a bolii invazive.',
 ['Conduita ASCUS cu HPV și colposcopie/Pap la 12 luni este din tabel.','Opțiunile LSIL (Pap/HPV sau LEEP) sunt explicite.','HSIL cere LEEP/conizație/laser și citologie la 6 luni.','Histerectomia radicală este a leziunilor vizibile invazive, nu a ASCUS.','Invazia <5 mm se tratează prin histerectomie sau conizație dacă se dorește fertilitatea.']],
 8,'Distractorii sar de la ASCUS la histerectomie radicală și neagă conizația indicată sub 5 mm.',['ASCUS','HSIL']),

q(60,['Leziunile de col cu invazie microscopică sub 5 mm se tratează prin:',
 ['Histerectomie sau conizație, dacă pacienta dorește păstrarea fertilității','Doar radioterapie și chimioterapie, ca extensia parametrială','Observație și Pap la 5 ani, fără biopsie','Metronidazol topic, ca în vaginoză','Mastectomie și ooforectomie profilactică, ca în BRCA'],'A',287,'Neoplasme — Cancerul de col microinvaziv',
 'Aplicarea pragului de 5 mm pentru histerectomie sau conizație conservatoare de fertilitate.',
 ['Textul rezervă HT sau conizația leziunilor cu invazie microscopică sub 5 mm, dacă se dorește fertilitatea.','Radio-chimioterapia este a extensiei parametrial/perete pelvin/treime inferioară de vagin.','Pap la 5 ani este opțiunea de screening ≥30 de ani, nu tratamentul invaziei.','Metronidazolul tratează vaginoza.','Mastectomia/ooforectomia profilactică aparțin BRCA.']],
 8,'Pragul de 5 mm este ușor de înlocuit cu conduita bolii parametrial avansate sau cu screeningul de rutină.',['<5 mm','păstrarea fertilităţii'],[288]),

q(61,['Cancerul de col cu extensie parametrială, la peretele pelvin, la treimea inferioară a vaginului sau cu metastaze:',
 ['Se tratează prin radioterapie și chimioterapie','Are supraviețuire la 5 ani de circa 20% pentru leziunile metastatice','Are supraviețuire la 5 ani peste 90% , identică leziunilor microscopice','Se tratează prin conizație simplă, pentru conservarea fertilității','Nu necesită tratament, regresând la menopauză ca leiomiomul'],'AB',288,'Neoplasme — Cancerul de col avansat',
 'Contrastarea radio-chimioterapiei bolii extra-uterine cu supraviețuirea de 20% a metastazelor versus >90% microscopic.',
 ['Schema radio-chimioterapie pentru extensia parametrială/perete/treime inferioară/metastaze este explicită.','20% la 5 ani pentru leziunile metastatice este cifra citată.','>90% este supraviețuirea leziunilor microscopice, nu a metastazelor.','Conizația este a invaziei <5 mm cu dorință de fertilitate.','Regresia la menopauză este a fibroamelor, nu a cancerului.']],
 8,'Procentele 90% versus 20% sunt ușor de inversat între boala microscopică și cea metastatică.',['parametrial','20%']),

q(62,['Tumorile ovariene benigne funcționale:',
 ['Chistul folicular apare în primele 2 săptămâni ale ciclului, are circa 3 cm și poate regresă la menstruație','Chistul luteal apare mai frecvent în ultimele săptămâni, este mai mare și are risc mai mare de torsiune sau ruptură hemoragică','Endometriomul poate fi ameliorat simptomatic cu COC, agoniști GnRH, progesteron sau danazol','Chistul folicular secretă androgeni și produce virilizare, ca tumorile Sertoli-Leydig','Teratomul dermoid regresează constant în primele 2 săptămâni ale ciclului, fără chistectomie'],'ABC',288,'Neoplasme — Tumorile ovariene benigne',
 'Separarea ferestrelor folicular (primele 2 săptămâni) versus luteal (ultimele săptămâni) și a terapiei endometriomului.',
 ['Fereastra primelor 2 săptămâni, diametrul ~3 cm și regresia menstruală sunt din tabel.','Ultimele săptămâni, dimensiunea mai mare și sângerarea mai importantă definesc chistul luteal.','COC, GnRH, progesteronul și danazolul sunt tratamentul simptomatic al endometriomului.','Virilizarea aparține tumorilor Sertoli-Leydig.','Regresia menstruală caracterizează chistul folicular, nu dermoizii (care cer chistectomie).']],
 8,'Distractorii atribuie folicularului virilizarea stromală și dermoidului regresia ciclică a chistului funcțional.',['2 săpt.','danazol']),

q(63,['Tumorile ovariene stromale (granuloasă, tecale sau Sertoli-Leydig):',
 ['Pot secreta hormoni în funcție de linia celulară și au potențial de malignizare','Tumorile tecale și granuloase pot produce pubertate precoce, iar cele Sertoli-Leydig virilizare','Sunt de origine germinală și conțin păr, dinți și glande sebacee','Regresează la menopauză, ca leiomiomul uterin','Se diagnostichează prin celule clue, fără imagistică'],'AB',288,'Neoplasme — Tumorile stromale ovariene',
 'Contrastarea secreției hormonale (precocitate versus virilizare) cu teratomul germinal.',
 ['Secreția hormonală în funcție de origine și potențialul malign sunt din tabel.','Pubertatea precoce (tecale/granuloase) și virilizarea (Sertoli-Leydig) sunt tabloul.','Părul, dinții și sebumul definesc teratomul dermoid.','Regresia la menopauză este a fibroamelor.','Celulele clue definesc vaginoza.']],
 8,'Distractorii importă conținutul dermoidului și regresia fibroamelor asupra tumorilor stromale hormonosecretante.',['Sertoli-Leydig','Pubertate precoce']),

q(64,['Carcinomul mamar in situ și forma invazivă precoce:',
 ['CDIS se tratează prin tumorectomie plus iradiere; mastectomia se discută la risc crescut','CLIS se gestionează prin observație atentă plus SERM (tamoxifen, raloxifen); mastectomia bilaterală profilactică e o opțiune dacă nu se dorește supraveghere lungă','Cancerul focal precoce invaziv se tratează prin tumorectomie plus iradiere','CLIS se tratează identic CDIS, prin tumorectomie plus iradiere de primă intenție','Tumorectomia este contraindicată în boala focală precoce, mastectomia fiind unica opțiune'],'ABC',292,'Afecțiunile sânului — CDIS, CLIS și boala precoce',
 'Separarea tumorectomie+iradiere (CDIS și invaziv precoce) de observație+SERM (CLIS).',
 ['Schema CDIS (tumorectomie + iradiere, mastectomie la risc) este explicită.','CLIS: observație + tamoxifen/raloxifen, cu mastectomie bilaterală ca alternativă.','Boala focală precoce: tumorectomie + iradiere.','CLIS nu primește de primă intenție aceeași iradiere ca CDIS.','Tumorectomia este tocmai opțiunea bolii focale precoce.']],
 8,'Capcana este aplicarea iradierii CDIS asupra CLIS, pe care textul o rezervă observației și SERM.',['CDIS','raloxifen']),

q(65,['În cancerul mamar invaziv se recomandă:',
 ['Biopsie de ganglion santinelă la invazia axilară; biopsia pozitivă este urmată de limfodisecție axilară','Trastuzumab la pacientele cu receptori HER2/neu','Tamoxifen în cancerul cu receptori hormonali pozitivi','Aspirația cu ac fin are risc zero de rezultat fals negativ, deci biopsia extinsă este superfluă','Receptorii hormonali pozitivi asociază prognostic mai rezervat decât cei negativi'],'ABC',292,'Afecțiunile sânului — Tratamentul cancerului invaziv',
 'Corelarea ganglionului santinelă, a trastuzumabului anti-HER2 și a tamoxifenului pentru receptorii hormonali.',
 ['Secvența santinelă apoi limfodisecție dacă este pozitivă este explicită.','Trastuzumab este indicat la receptorii HER2/neu.','Tamoxifenul este citat pentru receptorii hormonali pozitivi.','FNA are risc de 20% fals negativ; tumora solidă negativă cere biopsie mai extinsă.','Receptorii hormonali pozitivi și HER2 asociază prognostic mai bun, nu mai rezervat.']],
 8,'Distractorii neagă fals-negativul FNA de 20% și inversează prognosticul receptorilor hormonali.',['trastuzumab','ganglion santinelă']),

q(66,['Cele mai bune rate de supraviețuire în cancerul mamar inflamator se obțin după:',
 ['Utilizarea combinată a mastectomiei, radioterapiei și chimioterapiei','Doar observație și SERM, ca în CLIS','Doar tumorectomie, fără iradiere sau sistemic','Metronidazol și îndepărtarea tamponului, ca în șocul toxic','Conizație de col, fără tratament mamar'],'A',292,'Afecțiunile sânului — Cancerul inflamator',
 'Recunoașterea triadei mastectomie–radioterapie–chimioterapie ca schema cu cele mai bune rate în forma inflamatorie.',
 ['Textul atribuie cele mai bune rate combinației mastectomie + radioterapie + chimioterapie.','Observația + SERM este a CLIS.','Tumorectomia izolată nu este schema inflamatorului.','Metronidazolul și tamponul aparțin șocului toxic.','Conizația este a colului, nu a sânului inflamator.']],
 8,'Distractorii aplică conduita CLIS, a șocului toxic și a colului asupra unui subtip ductal agresiv, angioinvaziv.',['inflamator','mastectomiei']),

q(67,['Faza foliculară a ciclului menstrual:',
 ['Începe în prima zi a menstruației','FSH stimulează creșterea foliculilor ovarieni (celulele de granuloasă), care secretă estradiol','Estradiolul induce proliferarea endometrială și, prin feedback pozitiv, sinteza de FSH și LH','Peak-ul de LH lipsește cu desăvârșire în această fază, ovulația fiind indusă de TSH','hCG este hormonul care inițiază faza foliculară în absența fertilizării'],'ABC',275,'Fiziologie — Faza foliculară',
 'Plasarea debutului în ziua 1, a axului FSH–granuloasă–estradiol și a feedback-ului pozitiv asupra gonadotropinelor.',
 ['Debutul în prima zi a menstruației este explicit.','FSH, granuloasa și estradiolul sunt din text și tabel.','Proliferarea endometrială și feedback-ul pozitiv pe FSH/LH sunt citate.','Peak-ul de LH de la mijlocul ciclului declanșează ovulația; TSH nu o induce.','hCG apare după implantare, nu inițiază faza foliculară.']],
 8,'Distractorii substituie peak-ul de LH cu TSH și mută hCG înainte de ovulație.',['prima zi a menstruaţiei','celulele de granuloasă']),
];
