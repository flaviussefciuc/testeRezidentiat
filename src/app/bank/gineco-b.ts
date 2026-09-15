import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('gineco',12,pdfOffset,`gineco-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const GINECO_B=[
q(13,['Vârsta medie de instalare a menarhei în SUA este de:',
 ['13 ani, tendința fiind mai precoce la rasa neagră comparativ cu cea albă','8 ani, pragul care definește pubertatea precoce','16 ani, identic cu definiția amenoreei primare','9 ani, identic cu pragul pubertății precoce la băieți','21 de ani, vârsta de început a screeningului citologic'],'A',273,'Fiziologie — Dezvoltarea ginecologică',
 'Memorarea vârstei medii a menarhei și a diferenței etnice citate, distinct de pragurile de pubertate precoce și de amenoree.',
 ['Nota indică 13 ani, mai precoce la rasa neagră.','8 ani este pragul pubertății precoce la fetițe, nu media menarhei.','16 ani apare în definiția amenoreei primare.','9 ani este pragul la băieți.','21 de ani este vârsta de început a frotiului Pap.']],
 8,'Distractorii sunt praguri reale din același capitol (precoce, amenoree, Pap), ușor de confunda cu media menarhei.',['13 ani','menarhei']),

q(14,['Ordinea cronologică a evenimentelor pubertare la femeie este:',
 ['Adrenarha, gonadarha, telarha, pubarha, puseu de creștere, menarha','Menarha, telarha, pubarha, adrenarha, gonadarha, puseu de creștere','Telarha, menarha, adrenarha, fără gonadarhă','Doar puseul de creștere, urmat imediat de menopauză','Pubarha, apoi involuția caracterelor sexuale secundare'],'A',273,'Fiziologie — Pubertatea feminină',
 'Reținerea secvenței adrenarhă–gonadarhă–telarhă–pubarhă–puseu–menarhă.',
 ['Nota enumeră exact această ordine.','Menarha este ultimul eveniment, nu primul.','Gonadarha precede telarha; menarha nu precede telarha.','Puseul de creștere precede menarha, nu menopauza.','Pubarha nu este urmată de involuție în pubertatea normală.']],
 8,'Secvența are șase pași ușor de permutat; distractorii inversează menarha și telarha.',['adrenarha','telarha']),

q(15,['În stadiul Tanner 2 al dezvoltării mamare se observă:',
 ['Înmugurirea sânilor și reliefarea areolei','Doar mamelonul ascensionat, fără țesut mamar','Areola care revine la nivelul sânului, cu mamelon proeminent','Sânul matur de adult, cu pilozitate până pe coapse','Absența oricărei dezvoltări, după 17 ani'],'A',274,'Dezvoltare — Stadiile Tanner mamare',
 'Identificarea înmuguririi (Tanner 2) față de stadiile 1 și 5.',
 ['Tabelul descrie înmugurirea și reliefarea areolei în stadiul 2.','Doar mamelonul ascensionat este stadiul 1.','Areola revenită la nivelul sânului este stadiul 5.','Pilozitatea până pe coapse este Tanner 5 pubian, nu mamar 2.','Absența dezvoltării după 17 ani nu este stadiul 2.']],
 8,'Distractorii sunt descrierile reale ale stadiilor 1 și 5 din același tabel.',['înmugurirea sânilor','Stadiul Tanner']),

q(16,['Hormoni ai ciclului menstrual:',
 ['Peak-ul de LH de la mijlocul ciclului declanșează ovulația','Estradiolul stimulează proliferarea endometrială','Progesteronul crește temperatura bazală și consistența mucusului cervical','FSH stimulează dezvoltarea foliculilor ovarieni','hCG are acțiune FSH-like și scade progesteronul după implantare'],'ABCD',275,'Fiziologie — Ciclul menstrual normal',
 'Asocierea LH-ovulație, estradiol-proliferare, progesteron-temperatură bazală și FSH-foliculi.',
 ['Rolul peak-ului de LH este din tabel.','Proliferarea endometrială este rolul estrogenilor.','Temperatura bazală și mucusul sunt roluri ale progesteronului.','FSH stimulează dezvoltarea foliculilor, conform tabelului.','hCG are acțiune LH-like și menține corpul galben și progesteronul.']],
 8,'Distractorii inversează acțiunea FSH și substituie LH-like a hCG cu un efect opus asupra progesteronului.',['Peak-ul de','temperatura bazală']),

q(17,['Vaginoza bacteriană se caracterizează prin:',
 ['Secreție fluidă albicioasă cu miros de pește și celule tip „clue”','pH vaginal peste 4,5','Tratament cu metronidazol','pH vaginal normal (3,5–4,5) și pseudohife la KOH','Necesitatea tratamentului partenerului, ca în trichomonază'],'ABC',282,'Infecții — Vaginita',
 'Recunoașterea celulelor clue, a pH-ului crescut și a metronidazolului, distinct de candidă.',
 ['Secreția cu miros de pește și celulele clue sunt din tabel.','pH >4,5 este citat.','Metronidazolul este tratamentul.','pH normal și pseudohife definesc candida.','Nota precizează că partenerul se tratează în trichomonază, nu în vaginoză.']],
 8,'Distractorii importă pH-ul/pseudohifele candidei și regula de tratament a partenerului din trichomonază.',['clue','Miros de peşte'],[283]),

q(18,['Candidoza vaginală:',
 ['Produce secreție densă, albicioasă, brânzoasă, cu inflamație importantă','pH-ul vaginal rămâne între 3,5 și 4,5, iar KOH arată pseudohife','Tratamentul include clotrimazol topic sau o doză de fluconazol oral','Celulele clue și pH-ul peste 4,5 sunt caracteristice','Partenerul trebuie tratat cu metronidazol, altfel recidiva este certă'],'ABC',282,'Infecții — Vaginita candidozică',
 'Contrastarea pH-ului normal și a pseudohifelor cu criteriile vaginozei.',
 ['Secreția brânzoasă și inflamația importantă sunt din tabel.','pH 3,5–4,5 și pseudohifele sunt explicite.','Clotrimazolul/fluconazolul sunt tratamentul.','Celulele clue și pH >4,5 definesc vaginoza.','Tratamentul partenerului nu este necesar pentru Candida.']],
 8,'Distractorii permută criteriile de laborator între candida și Gardnerella.',['brânzoasă','Pseudohife'],[283]),

q(19,['Sindromul de șoc toxic:',
 ['Este o reacție la exotoxina stafilococică asociată cu utilizarea prelungită a tampoanelor','Tabloul include febră, erupție maculară și, în forme severe, descuamarea palmelor și tălpilor','Tratamentul include îndepărtarea obiectului intravaginal și antibiotice (clindamicină sau β-lactamine rezistente la penicilinază)','Agentul tipic este Treponema pallidum','Cultura vaginală este inutilă, deoarece treponemele nu cresc în culturi'],'ABC',283,'Infecții — Sindromul de șoc toxic',
 'Corelarea tampoanelor cu exotoxina S. aureus, rash-ul cu descuamare și clindamicina.',
 ['Asocierea tampon–exotoxină–S. aureus este explicită.','Febra, rash-ul macular și descuamarea sunt descrise.','Îndepărtarea obiectului și clindamicina/oxacilina sunt schema.','Treponema produce sifilisul, nu SST.','Nota despre culturi negative aparține sifilisului, nu SST (cultura pentru S. aureus este utilă).']],
 8,'Distractorii mută etiologia și limita de cultură ale sifilisului asupra șocului toxic.',['tampoanelor','clindamicină']),

q(20,['Infecția cu Chlamydia este descrisă ca:',
 ['Cea mai răspândită BTS raportabilă, frecvent asimptomatică mai ales la bărbați','Cervicita cu frotiu Gram și culturi negative este sugestivă pentru Chlamydia','Tratamentul citat este doxiciclină (nu în sarcină) sau azitromicină','Agentul se evidențiază ca diplococi gram-negativi pe agar Thayer-Martin','Partenerii sexuali nu necesită tratament'],'ABC',283,'Infecții — Cervicitele',
 'Recunoașterea predominanței epidemiologice, a Gram-negativului și a azitromicinei/doxiciclinei.',
 ['Nota o identifică drept cea mai răspândită BTS raportabilă.','Cervicita cu Gram și culturi negative este nota de pe pagina următoare.','Doxiciclina/azitromicina sunt schema.','Diplococii și Thayer-Martin definesc gonococul.','Partenerii trebuie tratați pentru a reduce reinfecția.']],
 8,'Distractorii atribuie Chlamydiei microbiologia gonococului și anulează tratarea partenerilor.',['cea mai răspândită BTS','azitromicină'],[284]),

q(21,['Sifilisul primar se caracterizează prin:',
 ['Șancru solitar, ulcer nedureros, care se vindecă spontan în circa 9 săptămâni','Limfadenopatie inghinală bilaterală','Debut, în medie, la 3 săptămâni după expunere','Erupție maculopapulară palmo-plantară și condyloma lata','Gome, tabes dorsalis și pupile Argyll Robertson'],'ABC',284,'Infecții — Sifilisul',
 'Separarea șancrului primar de erupția secundară și de neuro/gomele terțiare.',
 ['Șancrul nedureros cu vindecare în 9 săptămâni este forma primară.','Limfadenopatia inghinală bilaterală este citată.','Media de 3 săptămâni este explicită.','Erupția palmo-plantară și condyloma lata sunt stadiul secundar.','Gomele, tabes și Argyll Robertson sunt terțiarul.']],
 8,'Distractorii sunt stadiile secundar și terțiar, definite pe aceeași pagină.',['Şancru solitar','nedureros']),

q(22,['Referitor la testele serologice în sifilis sunt adevărate:',
 ['VDRL/RPR sunt teste de screening cu sensibilitate de circa 80%','FTA-ABS rămâne pozitiv toată viața, chiar după tratament','Treponema pallidum nu se dezvoltă în culturi','Spirochetele pot fi vizualizate pe frotiu la microscopul cu câmp întunecat','Diagnosticul de elecție este cultura pe agar Thayer-Martin'],'ABCD',284,'Infecții — Sifilisul',
 'Contrastarea screeningului RPR cu persistența FTA-ABS, cu imposibilitatea culturii și cu câmpul întunecat.',
 ['Sensibilitatea de 80% a VDRL/RPR este explicită.','Nota precizează persistența FTA-ABS.','Nota precizează că T. pallidum nu crește în culturi.','Câmpul întunecat este metoda citată de vizualizare.','Thayer-Martin este pentru gonococ.']],
 8,'Distractorii inversează persistența FTA-ABS și atribuie sifilisului mediul de cultură al gonococului.',['FTA-ABS','nu se dezvoltă în culturi'],[285]),

q(23,['Fibromul uterin (leiomiomul):',
 ['Regresează în general la menopauză','Miomectomia este indicată la femeile simptomatice care doresc menținerea fertilității','Agoniștii de GnRH reduc sângerarea și dimensiunea, dar sunt recomandați doar ca terapie temporară','Este un adenocarcinom legat de estrogeni, tipic postmenopauză','CA-125 este markerul specific de screening la toate femeile fertile'],'ABC',286,'Neoplasme — Fibromul uterin',
 'Recunoașterea regresiei la menopauză, a miomectomiei pentru fertilitate și a limitei GnRH.',
 ['Regresia la menopauză este explicită.','Miomectomia pentru fertilitate este citată.','GnRH ca terapie temporară este descris.','Adenocarcinomul postmenopauză este cancerul endometrial.','CA-125 nu este specific și nu este screeningul fibroamelor.']],
 8,'Distractorii confundă leiomiomul benign cu cancerul endometrial și supraestimează CA-125.',['regresează la menopauză','Miomectomia']),

q(24,['Cancerul endometrial:',
 ['Este un adenocarcinom legat de expunerea la estrogeni, cel mai frecvent la femei în postmenopauză','Factorii de risc includ anovulația cronică (SOPC), obezitatea și nuliparitatea','Tratamentul de fond este histerectomia totală abdominală cu anexectomie bilaterală','Screeningul de elecție este CA-125 la femeile fertile, înainte de 30 de ani','Supraviețuirea la 5 ani în boala metastatică este de 96%'],'ABC',286,'Neoplasme — Cancerul endometrial',
 'Corelarea estrogenilor neopusi cu sângerarea de postmenopauză și cu HTAB.',
 ['Legătura cu estrogenii și postmenopauza este explicită.','SOPC, obezitatea și nuliparitatea sunt din lista de risc.','HTAB cu limfadenectomie este tratamentul, continuat pe pagina următoare.','CA-125 nu este screeningul de elecție al femeii fertile.','96% la 5 ani este supraviețuirea bolii localizate, nu a metastazelor (25%).']],
 8,'Procentele 96% versus 25% sunt ușor de inversat între boala localizată și cea metastatică.',['postmenopauză','estrogeni'],[287]),

q(25,['CA-125 este util ca marker pentru cancerul ovarian:',
 ['Doar la femeile aflate în postmenopauză','La toate adolescentele, ca screening de rutină','Doar în primul trimestru de sarcină','Pentru confirmarea fibroamelor uterine la nulipare','Ca test de screening al cancerului de col, în locul frotiului Pap'],'A',288,'Neoplasme — Markerul CA-125',
 'Recunoașterea limitei CA-125 la postmenopauză și a elevărilor nespecifice.',
 ['Nota restrânge utilitatea la postmenopauză.','Nu este screening de rutină la adolescente.','Sarcina nu este contextul de utilitate citat.','Poate fi crescut în leiomiomatoză, dar nu o confirmă.','Screeningul de col este Pap/HPV, nu CA-125.']],
 8,'Nota nuanțează CA-125; distractorii îl generalizează ca screening universal.',['CA-125','postmenopauză']),

q(26,['Teratomul chistic benign (chistul dermoid):',
 ['Este de origine din celule germinale și poate conține păr, dinți și glande sebacee','Are risc crescut de torsiune ovariană','1–2% suferă transformare malignă','Regresează constant în primele 2 săptămâni ale ciclului, ca chistul folicular','Tratamentul este doar supraveghere, fără chistectomie, chiar la ruptură cu peritonită'],'ABC',288,'Neoplasme — Tumorile ovariene benigne',
 'Recunoașterea conținutului ectodermic, a torsiunii și a riscului de 1–2% de malignizare.',
 ['Originea germinală și conținutul (păr, dinți, sebum) sunt din tabel.','Riscul de torsiune este explicit.','Transformarea malignă 1–2% este citată.','Regresia menstruală caracterizează chistul folicular.','Ruptura cu conținut uleios poate produce peritonită și cere chistectomie.']],
 8,'Distractorii atribuie dermoidului evoluția chistului folicular și neagă indicația chirurgicală.',['dinţi','1-2%']),

q(27,['Cancerul ovarian:',
 ['Este cel mai frecvent de origine epitelială (65% din cazuri) sau cu celule germinale (25%)','Factorii de risc includ infertilitatea, nuliparitatea și mutațiile BRCA1 sau BRCA2','Majoritatea cazurilor sunt diagnosticate abia după o creștere considerabilă','Originea germinală reprezintă 80% din cazuri, ca la cancerul de col scuamos','CA-125 are sensibilitate excelentă ca screening la toate femeile fertile'],'ABC',289,'Neoplasme — Cancerul ovarian',
 'Ierarhizarea histologiei 65/25 și a riscului BRCA, cu diagnosticul tardiv.',
 ['Ponderile 65% epitelial și 25% germinal sunt explicite.','Infertilitatea, nuliparitatea și BRCA sunt factorii de risc.','Diagnosticul tardiv după creștere considerabilă este citat.','80% scuamos este histologia cancerului de col, nu originea ovariană germinală.','CA-125 este nuanțat ca util în postmenopauză, nu ca screening universal.']],
 8,'Distractorii permută 80% de la col și supraestimează CA-125 ca screening.',['65% cazuri','BRCAl']),

q(28,['Lichenul scleros vulvar:',
 ['Este leziune precursoare pentru carcinomul vulvar scuamos','Pielea poate apărea subțire și ridată precum „hârtia de țigaretă”','Tratamentul citat este clobetasol topic','Afectează vaginul în același mod ca vulva, cu secreție brânzoasă','Diagnosticul se pune pe celule clue, fără biopsie'],'ABC',289,'Afecțiuni vulvare — Lichenul scleros',
 'Recunoașterea riscului de carcinom, a aspectului de hârtie de țigaretă și a clobetasolului.',
 ['Rolul de leziune precursoare este explicit.','Nota descrie aspectul de hârtie de țigaretă.','Clobetasolul în doze mari este tratamentul.','Textul precizează absența afectării vaginului; secreția brânzoasă este a candidei.','Diagnosticul este biopsia prin ciupitură, nu celulele clue.']],
 8,'Distractorii importă candida (vagin, brânză) și diagnosticul de vaginoză.',['hârtia de ţigaretă','clobetasol']),

q(29,['Chistul glandei Bartholin:',
 ['Este o tumoră chistică netedă, mobilă, la poziția orei 4 sau 8 la baza labiei mari','Se poate infecta și evolua spre abces care necesită incizie și drenaj','Este sinonim cu endometriomul ovarian și se tratează cu danazol','Localizarea tipică este cadranul supero-extern al sânului','Se asociază cu expunerea in utero la dietilstilbestrol'],'AB',289,'Afecțiuni vulvare — Chistul Bartholin',
 'Localizarea la orele 4 și 8 și recunoașterea drenajului abcesului.',
 ['Poziția orei 4 sau 8 este din notă.','Incizia și drenajul abcesului sunt citate.','Endometriomul este ovarian, tratat diferit.','Cadranul supero-extern este al cancerului mamar.','DES se asociază cu adenocarcinomul vaginal cu celule clare.']],
 8,'Distractorii mută localizarea pe sân și etiologia DES a adenocarcinomului cu celule clare.',['orei 4 sau 8','incizie şi drenaj']),

q(30,['Adenocarcinomul vaginal cu celule clare este asociat cu:',
 ['Expunerea in utero la dietilstilbestrol','Infecția HPV 6 și 11','Celulele clue din vaginoză','Utilizarea prelungită a tampoanelor','Deficitul de uroporfirinogen-decarboxilază'],'A',290,'Neoplasme — Cancerul vaginal',
 'Asocierea DES antenatal cu adenocarcinomul cu celule clare, distinct de HPV 16/18 al formei scuamoase.',
 ['Nota leagă adenocarcinomul cu celule clare de DES in utero.','HPV 6 și 11 sunt tipuri condilomatoase, nu această asociere.','Celulele clue definesc vaginoza.','Tampoanele se leagă de șocul toxic.','Enzima citată aparține porfiriei cutanate tardive.']],
 8,'Nota alăturată leagă forma scuamoasă de HPV 16/18; candidatul trebuie să păstreze DES pentru celulele clare.',['dietilstilbestrol','celule clare']),

q(31,['Fibroadenomul mamar:',
 ['Este cea mai frecventă tumoră mamară benignă, mai ales la femei sub 30 de ani','Se prezintă ca masă unică, fermă, sferică, mobilă, cu margini bine delimitate','Dimensiunea poate varia în perioada menstruației, iar tumora este sensibilă la estrogeni','Este un cancer lobular invaziv, cu aspect de coajă de portocală','Secreția mamelonară sanguinolentă este semnul de prezentare tipic'],'ABC',291,'Afecțiunile sânului — Fibroadenomul',
 'Recunoașterea tumorii benigne mobile a femeii tinere, distinct de cancer și de papilomul intraductal.',
 ['Predominanța sub 30 de ani este explicită.','Masa unică fermă mobilă este tabloul.','Variația menstruală și sensibilitatea la estrogeni sunt citate.','Coaja de portocală aparține cancerului.','Secreția sanguinolentă caracterizează papilomul intraductal.']],
 8,'Distractorii importă semnele cancerului și ale papilomului intraductal, definite pe aceeași pagină.',['<30 ani','mobilă'],[290]),

q(32,['Papilomul intraductal:',
 ['Se prezintă cu secreție mamelonară sanguinolentă sau non-sanguinolentă','Poate asocia masă tumorală palpabilă retroareolară','Tratamentul este excizia chirurgicală, cu biopsie pentru excluderea cancerului','Este cea mai frecventă tumoră mamară benignă la femei sub 30 de ani','Nu are potențial malign, deci biopsia este superfluă'],'ABC',291,'Afecțiunile sânului — Papilomul intraductal',
 'Asocierea secreției mamelonare cu masa retroareolară și cu excizia diagnostică.',
 ['Secreția sanguinolentă/non-sanguinolentă este tabloul.','Masa retroareolară este citată.','Excizia cu excluderea cancerului este tratamentul.','Cea mai frecventă tumoră benignă sub 30 de ani este fibroadenomul.','Textul precizează potențial malign și cere biopsie excizională.']],
 8,'Distractorii atribuie papilomului epidemiologia fibroadenomului și neagă potențialul malign citat.',['sanguinolentă','retroareolară']),

q(33,['Modificările fibrochistice mamare:',
 ['Apar la femei de vârstă reproductivă, cu formațiuni care variază pe parcursul ciclului','Simptomele se atenuează postmenstrual','Reducerea cafeinei și a grăsimilor, COC, progesteron sau tamoxifen pot ameliora simptomele','Sunt cea mai frecventă localizare a cancerului, în cadranul supero-extern','Aspirația cu ac fin are risc zero de rezultat fals negativ'],'ABC',290,'Afecțiunile sânului — Modificări fibrochistice',
 'Recunoașterea variației ciclice și a măsurilor (cafeină, COC, tamoxifen), distinct de cancer.',
 ['Vârsta reproductivă și variația ciclică sunt explicite.','Atenuarea postmenstruală este citată.','Cafeina, grăsimile, COC, progesteronul și tamoxifenul sunt tratamentul.','Cadranul supero-extern este localizarea cea mai frecventă a cancerului mamar.','Fals-negativul FNA de 20% este al cancerului, nu o garanție zero.']],
 8,'Distractorii mută localizarea și limita FNA ale cancerului asupra bolii fibrochistice.',['cafeinei','variază'],[291]),

q(34,['Localizarea cea mai frecventă a cancerului mamar este:',
 ['Cadranul supero-extern','Cadranul infero-intern','Regiunea retroareolară','Doar coada axilară, fără parenchim mamar','Peretele vaginal posterior superior'],'A',291,'Afecțiunile sânului — Cancerul mamar',
 'Memorarea cadranului supero-extern ca sediu cel mai frecvent.',
 ['Nota identifică cadranul supero-extern.','Cadranul infero-intern nu este sediul citat ca cel mai frecvent.','Retroareolar este tipic papilomului intraductal.','Coada axilară nu este localizarea unică citată.','Peretele vaginal posterior este al cancerului vaginal scuamos.']],
 8,'Distractorii sunt sedii reale ale altor leziuni mamare sau vaginale din capitol.',['cea mai frecventă','cancerului mamar']),

q(35,['Dismenoreea primară:',
 ['Este durere menstruală fără patologie pelvină identificată','Tratamentul include AINS sau contraceptive orale','Forma secundară poate fi cauzată de endometrioză, BIP, fibroame, chiste sau adenomioză','Se definește prin absența menstruațiilor până la 16 ani','Este sinonimă cu mittelschmerz, durerea ovulatorie de la mijlocul ciclului'],'ABC',280,'Tulburări menstruale — Dismenoreea',
 'Separarea formei primare (AINS/COC) de cauzele secundare pelvine.',
 ['Absența patologiei pelvine definește forma primară.','AINS sau COC sunt tratamentul formei primare.','Lista cauzelor secundare este explicită.','Absența menstruațiilor până la 16 ani definește amenoreea primară.','Mittelschmerz este durerea ovulatorie, nu dismenoreea.']],
 8,'Distractorii confundă dismenoreea cu amenoreea primară și cu mittelschmerz.',['Dismenoreea','antiinflamatoare nesteroidiene'],[281]),

q(36,['Sindromul premenstrual și tulburarea disforică premenstruală:',
 ['Apar în faza luteală, la paciente cu funcție ovariană normală','5–10% dintre femei au simptome suficient de severe cât să le împiedice activitatea','SSRI, eventual cu alprazolam, pot ameliora labilitatea emoțională','Debutul este în faza foliculară, imediat după menstruație','CA-125 are sensibilitate foarte bună pentru diagnostic'],'ABC',281,'Tulburări menstruale — SPM și TDPM',
 'Plasarea simptomelor în faza luteală și recunoașterea ponderii 5–10% plus rolul SSRI.',
 ['Faza luteală și funcția ovariană normală sunt explicite.','Intervalul 5–10% este citat.','SSRI ± alprazolam sunt tratamentul labilității.','Simptomele preced menstruația, nu urmează imediat după ea.','CA-125 este discutat la endometrioză, cu sensibilitate slabă, nu ca diagnostic de SPM.']],
 8,'Distractorii mută faza ciclului și importă markerul CA-125 din endometrioză.',['faza luteală','5-10%']),

q(37,['Menstruațiile sunt considerate anormale când:',
 ['Apar la intervale sub 24 de zile sau peste 35 de zile','Durează peste 7 zile sau pierderea depășește 80 mL','Sunt neregulate sau apar în postmenopauză','Intervalul normal este sub 15 zile, cu durată peste 14 zile','Primul pas diagnostic este histerectomia, fără β-hCG'],'ABC',281,'Tulburări menstruale — Sângerări uterine anormale',
 'Aplicarea pragurilor 24–35 zile, 7 zile și 80 mL, plus sângerarea de postmenopauză.',
 ['Intervalele <24 sau >35 zile sunt criteriul.','Durata >7 zile și >80 mL sunt explicite.','Neregularitatea și postmenopauza sunt din tablou.','Pragurile 15/14 zile nu sunt cele din text.','β-hCG este printre primele analize; histerectomia nu este primul pas.']],
 8,'Cifrele 24/35/7/80 sunt ușor de deplasat; distractorul sare la histerectomie fără test de sarcină.',['>7 zile','>80 mL']),

q(38,['Gonoreea diseminată se prezintă ca:',
 ['Dermatită pustulară, poliartralgie asimetrică migratorie și tenosinovită','Șancru nedureros unic cu adenopatie inghinală','Celule clue și miros de pește','Plăci albe poligonale perianale în formă de 8','Masă mamară imobilă cu aspect de coajă de portocală'],'A',283,'Infecții — Cervicitele',
 'Identificarea triadei cutaneo-articulare a gonoreei diseminate.',
 ['Triada dermatită pustulară–poliartralgie migratorie–tenosinovită este explicită.','Șancrul nedureros este sifilisul primar.','Celulele clue definesc vaginoza.','Plăcile în 8 sunt lichenul scleros.','Coaja de portocală este a cancerului mamar.']],
 8,'Toate distractoarele sunt prezentări reale din capitol, atribuite altor entități.',['tenosinovită','poliartralgie']),

q(39,['Femeile între 21 și 29 de ani trebuie examinate citologic:',
 ['La fiecare 3 ani','Anual, cu test HPV cerut la fiecare vizită','La fiecare 5 ani, fără citologie','Doar după menopauză','O singură dată, la 65 de ani'],'A',287,'Neoplasme — Screeningul cancerului de col',
 'Aplicarea intervalului de 3 ani între 21 și 29 de ani, distinct de HPV la ≥30 de ani.',
 ['Nota cere examinare la fiecare 3 ani între 21 și 29 de ani.','HPV la fiecare 5 ani este opțiunea de la ≥30 de ani, nu un anual obligatoriu la 21–29.','Cei 5 ani fără citologie nu sunt schema acestei grupe.','Screeningul începe la 21 de ani, nu după menopauză.','65 de ani este vârsta de oprire, nu unicul test.']],
 8,'Intervalele 3 ani versus 5 ani și vârstele 21/30/65 sunt ușor de permutat.',['21 şi 29','fiecare 3 ani']),

q(40,['Cancerul vaginal scuamos:',
 ['Este localizat în partea superioară a peretelui vaginal posterior','Se asociază cu infecția HPV 16 sau 18','Este cauzat de expunerea in utero la dietilstilbestrol','Se diagnostichează prin celule clue pe frotiul salin','Regresează la menopauză, ca leiomiomul'],'AB',290,'Neoplasme — Cancerul vaginal',
 'Contrastarea formei scuamoase HPV 16/18 cu adenocarcinomul DES.',
 ['Localizarea posterior-superioară este din notă.','HPV 16 sau 18 este asocierea citată.','DES se asociază cu adenocarcinomul cu celule clare.','Celulele clue definesc vaginoza.','Regresia la menopauză este a fibroamelor, nu a cancerului.']],
 8,'Nota alăturată despre DES este capcana clasică față de HPV 16/18 al formei scuamoase.',['HPV 16 sau 18','peretelui vaginal posterior']),

q(41,['În lichenul scleros, pielea perianală poate avea aspectul:',
 ['Cifrei 8','Celulelor clue','Plăcii heraldice','Semnului Auspitz','Cojii de portocală'],'A',289,'Afecțiuni vulvare — Lichenul scleros',
 'Identificarea aspectului perianal în 8, distinct de alte metafore lezionale din ginecologie și dermatologie.',
 ['Textul descrie aspectul cifrei 8 al pielii perianale.','Celulele clue sunt ale vaginozei.','Placa heraldică este a pitiriazisului rozat.','Auspitz este al psoriazisului.','Coaja de portocală este a cancerului mamar.']],
 8,'Toate distractoarele sunt eponime/aspecte reale, dar din alte boli.',['cifrei 8','perianală']),

q(42,['Autoexaminarea mamară lunară după menstruație:',
 ['Ajută la distincția dintre leziunile evolutive și variațiile lunare ale țesutului mamar','Nu s-a dovedit că ar duce la scăderea mortalității','Leziunile suspecte mamografic sunt zonele hiperdense sau calcificările','Scade demonstrabil mortalitatea, înlocuind mamografia după 40 de ani','Înlocuiește biopsia leziunilor solide'],'ABC',290,'Afecțiunile sânului — Autoexaminarea și mamografia',
 'Nuanțarea utilității autoexaminării (distincție ciclică, fără scăderea dovedită a mortalității) și a semnelor mamografice.',
 ['Rolul de a distinge variațiile lunare este explicit.','Absența dovezii de scădere a mortalității este din aceeași notă.','Hiperdensele și calcificările sunt leziunile suspecte citate.','Textul nu îi atribuie scăderea mortalității și nu înlocuiește mamografia.','Biopsia rămâne necesară pentru leziunile suspecte.']],
 8,'Distractorii transformă o metodă fără impact dovedit pe mortalitate într-un substitut al mamografiei și biopsiei.',['nu s-a dovedit','calcificările']),
];
