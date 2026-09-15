import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p<=168?p-70:p<=174?p-73:p-77;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('stomac',13,pdfOffset,`stomac-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const STOMAC_B=[
q(7,['Sfincterul esofagian inferior, la indivizi sănătoși, se caracterizează prin:',
 ['Este intraperitoneal, are >2 cm lungime și rezistă la o presiune de peste 6 mm Hg','Joncțiunea GE e definită histologic prin tranziția scuamos–columnar','Este retroperitoneal, măsoară 8 cm și are presiune de 80 mm Hg, identic SES','Lipsește anatomic, continența ținând doar de pilor','Se află la Treitz, pe D4'],'AB',167,'Anatomie — SEI și joncțiunea GE',
 'Aplicarea criteriilor >2 cm și >6 mm Hg, plus definiția histologică scuamos–columnar.',
 ['Cele trei trăsături (intraperitoneal, >2 cm, >6 mm Hg) sunt explicite.','Tranziția histologică este citată.','Valorile 8 cm/80 mm Hg țin de alte sfinctere/etaje.','SEI există și e zona de înaltă presiune.','Treitz marchează duodeno-jejunul, nu GE.']],
 8,'Permutează dimensiunea/presiunea SEI cu cele ale SES esofagian.',['>2 cm','peste 6 mm Hg']),

q(8,['Regiunile stomacului, în afara localizării celulelor G, se caracterizează prin:',
 ['Fundusul asigură relaxarea receptivă vagală și adăpostește pacemaker-ul motilității','Corpul conține masa celulelor parietale (HCl), principale (pepsinogen) și ECL','Pilorul, valvă de 1–3 cm, previne refluxul duodenal și, cu pompa antrală, controlează evacuarea','Musculara are trei straturi (longitudinal, circular, oblic); pacemaker-ul e în circularul fundic','Fundusul secretă gastrina, iar pilorul e sediul celulelor parietale'],'ABCD',167,'Anatomie — Fundus, corp, pilor',
 'Completarea hărții funcționale: relaxare receptivă și pacemaker fundic, HCl corporal, pilor 1–3 cm, față de permutarea G/parietal deja tratată în itemul 1.',
 ['Relaxarea receptivă și pacemaker-ul sunt explicite.','Cele trei linii celulare corporale sunt citate.','Valva 1–3 cm și rolul anti-reflux/evacuare sunt descrise.','Cele trei straturi și sediul circular al pacemaker-ului sunt menționate.','Gastrina e antrală; parietalele sunt corporale, nu pilorice.']],
 8,'Mută gastrina în fundus și parietalele în pilor, două permutări de etaj.',['pompa antrală','1-3 cm']),

q(9,['Inervația vagală gastrică se caracterizează prin:',
 ['Trunchiul stâng intră anterior de esofag, cel drept posterior','Vagul drept trimite ramură la plexul celiac și, uneori, nervul criminal al lui Grassi posterior de esofag','Vagul stâng trimite ramură hepatică prin ligamentul gastrohepatic (colecist, căi biliare, ficat)','Distal, ambii vagi merg pe marea curbură, fără ramuri către pilor','„Piciorul de cioară” inervează fundusul, nu pilorul'],'ABC',167,'Vag — Grassi și picior de cioară',
 'Maparea rotației vagale (stâng anterior / drept posterior), a lui Grassi și a ramurii hepatice, față de piciorul de cioară piloric.',
 ['Rotația stâng-anterior / drept-posterior este explicită.','Grassi și ramura celiacă sunt citate.','Ramura hepatică prin ligamentul gastrohepatic este descrisă.','Vagii continuă pe marea... textul spune curbura mică, cu ramuri terminale spre pilor.','Piciorul de cioară inervează pilorul.']],
 8,'Mută vagii pe marea curbură și piciorul de cioară pe fundus.',['nervul criminal al lui Grassi','picior de cioară']),

q(10,['Duodenul se caracterizează anatomic prin:',
 ['Segment în mare parte retroperitoneal, de 25–30 cm, cu patru părți (bulb, descendent, transversal, ascendent)','Ampula Vater se deschide posteromedial pe D2; papila minoră descarcă ductul accesor','Continuarea cu jejunul e la ligamentul Treitz','Este intraperitoneal pe toată lungimea, de 150 cm, fără ampula Vater','D4 se continuă cu cecul, Treitz marcând valva ileocecală'],'ABC',167,'Anatomie — Duodenul',
 'Reținerea lungimii 25–30 cm, a celor patru porțiuni și a reperelor Vater/Treitz.',
 ['Lungimea, retroperitoneul și cele patru părți sunt explicite.','Vater pe D2 și papila minoră sunt citate.','Treitz ca joncțiune duodeno-jejunală este descris.','Nu e 150 cm (colonul) și nu e tot intraperitoneal.','Treitz nu e valva ileocecală.']],
 8,'Confundă lungimea duodenului cu cea a colonului și Treitz-ul cu valva ileocecală.',['25-30 cm','ligamentul lui Treitz']),

q(11,['Vascularizația arterială a stomacului cuprinde:',
 ['Arterele gastrice dreaptă și stângă','Arterele gastroepiploice dreaptă și stângă','Arterele gastrice scurte și artera gastroduodenală','Simpaticul urmează vasele; parasimpaticul vagal contribuie la HCl și motilitate','Artera mezenterică inferioară, ca unică sursă, fără gastrică stângă'],'ABCD',167,'Vascularizație gastrică',
 'Enumerarea celor șase pediculi (gastrice, gastroepiploice, scurte, gastroduodenală) și a inervației care le însoțește.',
 ['Gastricele D/S sunt listate.','Gastroepiploicele sunt listate.','Scurtele și gastroduodenala sunt listate.','Simpatic periarterial și vag pentru HCl/motilitate sunt citate.','AMI nu irigă stomacul.']],
 8,'Înlocuiește pediculii gastrici cu AMI, un vas din etajul colic.',['gastrice scurte','gastroduodenală']),

q(12,['Sindromul Mallory-Weiss se caracterizează prin:',
 ['Ruptură lineară mucoasă la joncțiunea GE, după Valsalva intens (vărsături, alcool, naștere, greutăți, convulsii)','Majoritatea sângerărilor se opresc; persistentele se tratează endoscopic, apoi angioembolizare; chirurgia e ultima soluție','La explorare, colorația subseroasă pe mica curbură e patognomonică; se face gastrotomie și sutură in situ','Ruptura e transmurală toracică, tratată identic Boerhaave','Chirurgia de primă intenție e esofagectomie, endoscopia fiind contraindicată'],'ABC',172,'Mallory-Weiss',
 'Diferențierea rupturii mucoase GE (non-transmurală) de Boerhaave, cu oprire spontană frecventă și sutură in situ ca ultimă linie.',
 ['Sediul, mecanismul Valsalva și lista de cauze sunt explicite.','Ierarhia conservator–endoscopie–angio–chirurgie este descrisă.','Colorația de mică curbură și gastrotomia sunt citate.','Mallory-Weiss nu e transmural; Boerhaave e altă entitate.','Endoscopia e diagnostic și terapeutic; esofagectomia nu e prima linie.']],
 8,'Confundă Mallory-Weiss cu Boerhaave și pune esofagectomia ca prim gest.',['Malloty-Weiss','micii curburi']),

q(13,['Polipii gastrici se deosebesc astfel:',
 ['Hiperplasticii sunt mai frecvenți și de obicei benigni, deși rar se pot transforma','Adenomatoșii au risc mai mare de degenerare, mai ales cei >1,5 cm','Identificarea lor impune căutarea altor polipi GI și a sindroamelor (ex. Peutz-Jeghers)','Hiperplasticii >1,5 cm au potențial malign mai mare decât adenomatoșii și nu se caută sindroame','Polipii gastrici sunt hamartoame fără nicio supraveghere, indiferent de histologie'],'ABC',172,'Polipi gastrici',
 'Ierarhia hiperplastic (frecvent, benign) versus adenomatos (>1,5 cm, risc mai mare) și alerta de polipoză.',
 ['Predominanța și benignitatea hiperplasticilor sunt explicite.','Pragul >1,5 cm pentru adenomatoși este citat.','Căutarea altor polipi/sindroame este descrisă.','Relația de risc e inversată.','Nu toți sunt hamartoame fără urmărire.']],
 8,'Inversează riscul malign dintre hiperplastic și adenomatos și ignoră pragul 1,5 cm.',['> 1,5 cm','Polipii hiperplastici']),

q(14,['Prognosticul adenocarcinomului gastric, potrivit capitolului, include:',
 ['Chiar în cancerul cu extensie superficială (Japonia), supraviețuirea la 5 ani este <50%','În țările anglofone, rezecția curativă asociază 5 ani <10%','Descoperirea incidentală intraoperatorie, fără metastaze, se apropie de 75% la 5 ani','Rezecțiile paliative se limitează la derivații pentru obstrucție sau la controlul sângerării','Rezecția curativă în Occident vindecă >90% la 5 ani, screeningul US fiind cost-eficient'],'ABCD',174,'Adenocarcinom gastric — Prognostic',
 'Contrastul <50% (superficial japonez) / <10% (curativ anglofon) / ~75% (incidental fără M), față de paliația limitată.',
 ['Pragul <50% este explicit.','Pragul <10% este citat.','Cifra de ~75% incidentală este descrisă.','Limitarea paliației la bypass/sângerare este menționată.','Screeningul US e considerat prohibitiv ca și cost; 90% nu e cifra occidentală.']],
 8,'Umflă vindecarea occidentală la 90% și declară screeningul US cost-eficient, contrar textului.',['<50%','< I 0%']),

q(15,['În stadializarea carcinomului gastric, metastaza ovariană poartă numele de:',
 ['Tumora Krukenberg','Nodulul Virchow','Semnul Sister Mary Joseph','Semnul Blumer','GIST submucos'],'A',173,'Diseminare — Krukenberg',
 'Izolarea eponimului ovarian (Krukenberg) de Virchow, Sister Mary Joseph și Blumer, deja grupate în itemul 3.',
 ['Textul listează ovarele (tumora Krukenberg) printre sediile de metastază.','Virchow e supraclavicular stâng.','Sister Mary Joseph e ombilical.','Blumer e rectal.','GIST nu e eponimul ovarian.']],
 8,'Permutează eponimele de diseminare, Krukenberg fiind ușor de mutat pe Virchow/Blumer.',['tumora Krukenberg','ovare']),

q(16,['Limfomul gastric se caracterizează prin:',
 ['Stomacul e sediul a aproape două treimi din limfoamele GI; predomină non-Hodgkin-ul la vârstnici','Stadializarea include Rx torace, CT abdominal și biopsie de măduvă','Majoritatea specialiștilor pledează pentru chimioterapie (risc de perforație/hemoragie); rezecția în boala limitată la stomac poate da ~75% la 5 ani','Simptomele mimează adenocarcinomul (durere, scădere ponderală, sângerare)','Limfomul e Hodgkin al copilului, chimioterapia fiind contraindicată de riscul de perforație, rezecția neavând rol'],'ABCD',174,'Limfom gastric',
 'Reținerea ponderii 2/3, a non-Hodgkin-ului, a riscului de perforație sub chimio și a ~75% după rezecție în boala limitată.',
 ['Cifra de două treimi și non-Hodgkin-ul sunt explicite.','Trio-ul Rx/CT/măduvă este citat.','Controversa chimio vs rezecție și 75% sunt descrise.','Simptomele comune cu adenocarcinomul sunt menționate.','Predomină non-Hodgkin-ul la vârstnici; chimio e opinia majoritară.']],
 8,'Transformă limfomul în Hodgkin pediatric și interzice chimio, inversând opinia majoritară.',['două treimi','se poate apropia de 75%']),

q(17,['Adenocarcinomul duodenal se caracterizează prin:',
 ['Duodenul e cea mai frecventă localizare de adenocarcinom al intestinului subțire','Aproximativ două treimi sunt pe D2, de obicei periampular','D1–D2 rezecabile: duodenopancreatectomie; D3–D4: rezecție cu duodenojejunostomie','N+: supraviețuire la 5 ani sub 15%; nerezecabilele primesc gastroenterostomie','Două treimi sunt pe D4, tratate prin hemicolectomie dreaptă, cu 90% supraviețuire N+'],'ABCD',180,'Adenocarcinom duodenal',
 'Maparea 2/3 periampular D2 pe Whipple versus D3–D4 pe duodenojejunostomie, plus pragul N+ <15%.',
 ['Frecvența duodenală e explicită.','Cele două treimi pe D2 sunt citate.','Cele două operații după sediu sunt descrise.','<15% la 5 ani N+ și bypass-ul sunt menționate.','D4 nu e sediul dominant; hemicolectomia e colică, nu duodenală.']],
 8,'Mută cele două treimi pe D4 și înlocuiește Whipple cu hemicolectomie.',['două treimi','sub 15%']),

q(18,['Polipii duodenali din PAF se gestionează astfel:',
 ['Supraveghere endoscopică de rutină a stomacului și duodenului, cu îndepărtarea polipilor; cancerul sau adenomul vilos impune excizie chirurgicală','Majoritatea necesită și îndepărtarea profilactică precoce a colonului','Observație fără endoscopie, polipii duodenali neavând potențial malign','Whipple de principiu la primul polip hiperplastic de 3 mm','Hemoroidectomie, polipii fiind pachete interne de grad IV'],'AB',179,'Polipi duodenali — PAF',
 'Escaladarea supraveghere endoscopică → excizie la vilos/cancer, pe fondul colectomiei profilactice PAF.',
 ['Supravegherea și pragul vilos/cancer sunt explicite.','Colectomia profilactică e citată.','Potențialul malign există; endoscopia e cerută.','Hiperplasticul de 3 mm nu e indicație de Whipple.','Hemoroizii nu sunt polipi PAF.']],
 8,'Forțează Whipple pe polipul milimetric sau anulează supravegherea, două extreme greșite.',['adenomului vilos','polipoză adenomatoasă familială']),

q(19,['Evaluarea unui sindrom postgastrectomie include:',
 ['Tranzit baritat: nivel de rezecție, tip de reconstrucție, cauză a vărsăturilor, evacuare','Masă cu radionuclizi și imagini secvențiale, mai fiziologică pentru evacuare','Endoscopie cu vizualizare directă și biopsie','Doar examen clinic, baritatul și endoscopia fiind contraindicate','Manometrie anorectală, sindroamele ținând de sfincterul anal'],'ABC',180,'Evaluarea postgastrectomie',
 'Trio-ul baritat–scintigrafie de evacuare–endoscopie, față de investigații anorectale irelevante.',
 ['Rolurile baritatului sunt enumerate.','Masa cu radionuclizi este citată ca mai fiziologică.','Endoscopia cu biopsie este descrisă.','Textul recomandă tocmai aceste investigații.','Sfincterul anal nu explică dumpingul/ansa.']],
 8,'Anulează baritatul/endoscopia sau le înlocuiește cu manometrie anală.',['tranzitul baritat','radionuclizi']),

q(20,['Diareea post-vagotomie se caracterizează prin:',
 ['Aproape jumătate dintre vagotomiile tronculare își modifică tranzitul (frecvență crescută, scaun mai lichid); majoritatea se ameliorează','Un procent mic (<1%) are diaree severă explozivă, necorelată cu mesele, fără avertizare','Cauze: motilitate accelerată (denervare), evacuare rapidă, malabsorbție biliară, suprainfecție','Definește dumpingul tardiv, cu hipoglicemie la 1–3 ore','Apare la 90% și impune reversia imediată a vagotomiei'],'ABC',181,'Diaree post-vagotomie',
 'Separarea modificării de tranzit (~50%, autolimitată) de forma <1% explozivă, față de dumpingul tardiv din itemul 6.',
 ['Proporția de aproape jumătate și ameliorarea sunt explicite.','Pragul <1% și caracterul exploziv necorelat sunt citate.','Cele patru cauze sunt enumerate.','Dumpingul tardiv e alt sindrom (hipoglicemie 1–3 h).','Nu 90% și nu reversie de principiu.']],
 8,'Confundă diareea post-vagotomie cu dumpingul tardiv și umflă incidența la 90%.',['<I%','debut exploziv']),

q(21,['Pacienții cu risc ridicat de complicații postgastrectomie, la care e avantajos să se evite vagotomia tronculară (preferând-o pe cea supraselectivă), sunt:',
 ['Femeile tinere și slabe','Bărbații vârstnici obezi, ca unicul grup citat','Copiii cu pancreas inelar','Gravidele din primul trimestru, ca regulă ATLS','Pacienții cu CCS anal, după Nigro'],'A',179,'Selecția procedurii antiulceroase',
 'Recunoașterea femeii tinere slabe ca grup vulnerabil, cu HSV ca alternativă la tronculară.',
 ['Terenul (femei tinere, slabe) este explicit.','Textul nu identifică bărbatul vârstnic obez ca grupul citat.','Pancreasul inelar e alt capitol.','ATLS al gravidei e traumatologie.','Nigro e CCS anal.']],
 8,'Mută vulnerabilitatea de pe femeia tânără slabă pe grupuri din alte capitole.',['femeile tinere','vagotomiei supraselective']),

q(22,['Conform ghidului NIH 1998 (Tabelul 13-5), chirurgia bariatrică e o opțiune la:',
 ['IMC ≥40, independent de comorbidități','IMC 35,0–39,9 când există comorbidități','IMC 25,0–26,9, ca primă linie, fără modificare de comportament','IMC 27–29,9 fără comorbidități, chirurgia înlocuind dieta','Orice IMC >22, farmacoterapia fiind suficientă fără echipă multidisciplinară'],'AB',185,'Indicații bariatice — NIH',
 'Aplicarea pragurilor IMC ≥40 și 35–39,9 plus comorbiditate, față de intervalele doar dietă/farmacie.',
 ['Rândul ≥40 cu Da pentru chirurgie este din tabel.','Rândul 35–39,9 cu Da0 (comorbidități) este citat.','25–26,9 are doar modificare de comportament.','27–29,9 fără comorbidități nu are chirurgie.','Echipa multidisciplinară e cerută; 22 nu e prag.']],
 8,'Coboară indicația chirurgicală la IMC 25 sau 22, ignorând tabelul NIH.',['2:40,0','35,0-39,9']),

q(23,['Bypass-ul gastric Roux-en-Y (BGRNY) se caracterizează prin:',
 ['Rămâne standardul de aur; rezervor gastric proximal mic și gastrojejunostomie Roux-en-Y','Ansa Roux măsoară 75–150 cm','Scădere ponderală medie 60–80% din GCE în 2 ani; date de ~60% din GCE până la 15 ani','Problemele nutriționale sunt, în general, mai puțin severe decât la DBP/DBP-SD','Ansa Roux are 15 cm, scăderea e 10% din GCE, iar banda gastrică rămâne standardul de aur'],'ABCD',187,'BGRNY',
 'Reținerea lungimii Roux 75–150 cm și a ferestrelor 60–80% la 2 ani / ~60% la 15 ani, plus statutul de standard de aur.',
 ['Standardul de aur și anatomia sunt explicite.','75–150 cm este citat.','Cifrele 60–80% și 60% la 15 ani sunt descrise.','Comparația nutrițională cu DBP este menționată.','15 cm/10%/banda ca standard contrazic textul.']],
 8,'Reduce Roux-ul la 15 cm și cedează standardul de aur benzii, două inversări de ierarhie.',['75-150 cm','60-80% din GCE']),

q(24,['Gastrectomia longitudinală (sleeve) produce, în primii 2 ani, o scădere medie de:',
 ['60–75% din greutatea corporală în exces','10–15% din GCE, inferioară dietei','90–100% din GCE, fără comorbidități reziduale','20–55% din GCE, identic benzii ajustabile','Nicio scădere, procedura fiind doar restrictivă esofagiană'],'A',187,'Sleeve — Scădere ponderală',
 'Izolarea intervalului 60–75% GCE la 2 ani, distinct de bandă (20–55%) și de RYGB (60–80%).',
 ['Intervalul 60–75% în primii 2 ani este explicit.','10–15% subestimează.','90–100% supraestimează.','20–55% e banda.','Textul descrie pierdere importantă, comparabilă cu alte proceduri.']],
 8,'Permutează intervalele sleeve / bandă / RYGB, trei procente alăturate în același paragraf.',['60-75%','primii 2 ani']),

q(25,['Bandarea gastrică ajustabilă se caracterizează prin:',
 ['Rezervor proximal cu inel gonflabil și port pe fascia abdominală; tehnica pars flaccida (tunel de la mica curbură la unghiul His)','Pacienții pierd 20–55% din GCE în primii ani','Popularitatea a scăzut prin variabilitatea scăderii și complicațiile care cer scoaterea inelului','Este standardul de aur, cu 80% GCE la 15 ani, fără complicații de inel','Pars flaccida e o miotomie Heller, inelul montându-se pe esofag'],'ABC',187,'Bandă gastrică ajustabilă',
 'Aplicarea intervalului 20–55% și a declinului de popularitate, plus reperul pars flaccida (His).',
 ['Inelul, portul și pars flaccida sunt explicite.','20–55% este citat.','Cauzele declinului sunt descrise.','Standardul de aur e RYGB; 80%/15 ani țin de alt procedeu.','Pars flaccida e tunel gastric, nu Heller.']],
 8,'Confundă pars flaccida cu Heller și atribuie benzii cifrele RYGB.',['20-55%','pars flaccida']),

q(26,['Diversia biliopancreatică (cu sau fără switch duodenal) se caracterizează prin:',
 ['Porțiune semnificativă de intestin exclusă din circuit, deci malabsorbție marcată','Pierderi de 70–90% din GCE în primii ani, dar probleme nutriționale severe','Risc mai mare de complicații, inclusiv mortalitate, deci popularitate mai mică în SUA','DBP/SD combină rezervor tubular tip sleeve cu duodenojejunostomie și jejunoileostomie foarte distală','Este procedura cea mai populară din SUA, fără risc nutrițional, superioară RYGB'],'ABCD',187,'DBP și switch duodenal',
 'Cântărirea 70–90% EWL față de costul nutrițional și de mortalitatea mai mare care îi limitează popularitatea.',
 ['Excluderea intestinală e explicită.','70–90% și severitatea nutrițională sunt citate.','Popularitatea redusă e descrisă.','Anatomia DBP/SD e menționată.','Popularitatea maximă e a RYGB, nu a DBP.']],
 8,'Declară DBP cea mai populară și lipsită de risc nutrițional, inversând ierarhia SUA.',['70-90% din GCE','nu s-au bucurat']),

q(27,['În gastrita hemoragică persistentă, după eșec endoscopic, opțiunile includ:',
 ['Angiografie selectivă (de obicei artera gastrică stângă) cu embolizare','Sutură in situ ± vagotomie și piloroplastie, care controlează hemoragia la ~50%','Gastrectomie totală dacă sângerarea continuă sau reapare','Nissen 360° ca hemostază de primă intenție','SIL stângă, sursa fiind o fisură anală'],'ABC',172,'Gastrită hemoragică — Eșec endoscopic',
 'Escaladarea embolizare LGA → sutură ± vagotomie/piloroplastie (~50%) → gastrectomie totală.',
 ['Embolizarea gastricei stângi e explicită.','Cifra de aproximativ 50% e citată.','Gastrectomia totală ca linie următoare e descrisă.','Nissen e antireflux, nu hemostază gastrică.','SIL e pentru fisură.']],
 8,'Înlocuiește hemostaza gastrică cu Nissen sau SIL, două gesturi din esofag/anus.',['gastrice stângi','gastrectomia totală']),

q(28,['În gastrinomul cu MEN-1 și boală metastatică sunt adevărate următoarele:',
 ['Dacă există hiperparatiroidism, paratiroidectomia scade eliberarea de gastrină','Vindecarea e mai rară; unii nu operează absența metastazelor, alții operează în centre experimentate','Octreotidul suprimă gastrina și încetinește creșterea; IPP continuu dacă rezecția e incompletă sau e boală metastatică','H2-blocanții au devenit linia a doua; HSV plus rezecția tumorii dacă e identificată','Paratiroidectomia crește gastrina, iar octreotidul e contraindicat, IPP oprindu-se după diagnostic'],'ABCD',180,'Gastrinom — MEN-1 și paliație',
 'Integrarea paratiroidectomiei, a controversei chirurgicale MEN-1, a octreotidului și a IPP continuu la metastatic.',
 ['Efectul paratiroidectomiei e explicit.','Controversa e descrisă.','Octreotidul și IPP-ul continuu sunt citate.','H2 linia 2 și HSV+rezecție sunt menționate.','Paratiroidectomia scade, nu crește, gastrina; IPP-ul continuă.']],
 8,'Inversează efectul paratiroidectomiei pe gastrină și oprește IPP-ul la metastatic.',['paratiroidectomiea','Octreotidul']),

q(29,['Stomacul se poate destinde, în mod normal, pentru a primi:',
 ['Un litru sau mai mult de alimente ingerate','50 mL, capacitatea fiind egală cu cecul','5 L, identic volumului în șocul neurogen','200 mL, cât lichidul residual colic zilnic','25 cm, lungimea fiind confundată cu volumul'],'A',167,'Capacitate gastrică',
 'Reținerea capacității ≥1 L, pe fondul relaxării receptive fundice.',
 ['„Un litru sau mai mult” este explicit.','50 mL e prea puțin.','5 L e volumul din șocul neurogen (traumă).','200 mL e lichidul fecal zilnic colic.','25 cm e lungime esofagiană/duodenală, nu volum.']],
 8,'Permutează 1 L cu volume din trauma (5 L) sau colon (<200 mL).',['un litru sau mai mult','relaxare']),

q(30,['Ramura hepatică a vagului stâng trece prin:',
 ['Ligamentul gastrohepatic și inervează vezica biliară, tractul biliar și ficatul','Hiatusul aortic, inervând doar coada pancreatică','Canalul inghinal, ca nerv ilioinghinal','Mezorectul, ca nervi erigenți S2–S4','Pars flaccida a benzii gastrice, fără țintă biliară'],'A',167,'Ramura hepatică vagală',
 'Urmărirea ramurii hepatice prin ligamentul gastrohepatic până la colecist/căi/ficat.',
 ['Traiectul și țintele sunt explicite.','Hiatusul aortic nu e calea descrisă.','Ilioinghinalul e al peretelui.','Nervii erigenți țin de rect.','Pars flaccida e un tunel bariatric, nu inervație.']],
 8,'Mută ramura hepatică pe pars flaccida sau pe nervii pelvini.',['ligamentul gastrohepatic','ramură hepatică']),

q(31,['Stenoza ansei aferente după Billroth II se recunoaște prin:',
 ['Crampe severe imediat postprandial, apoi vărsătură brun-închisă, amară, cu consistența uleiului de motor, fără alimente','Ameliorare după vărsătură și scădere ponderală prin evitarea meselor','Conversia chirurgicală a Billroth II în Roux-en-Y sau Billroth I','Dumping tardiv cu hipoglicemie la 1–3 ore și scaun exploziv necorelat cu mesele','Nissen 360° ca tratament de primă intenție'],'ABC',181,'Stenoză de ansă aferentă',
 'Recunoașterea vărsăturii „ulei de motor” fără alimente ca semn de decompresie forțată a ansei aferente, cu conversie BII→RY/BI.',
 ['Secvența durere–vărsătură caracteristică este explicită.','Absența alimentelor în vărsătură și scăderea ponderală sunt citate.','Cele două conversii sunt descrise.','Dumpingul tardiv și diareea post-vagotomie sunt alte sindroame.','Nissen este antireflux, nu decompresie de ansă.']],
 8,'Permutează tabloul „ulei de motor” cu dumpingul tardiv, două sindroame consecutive în același capitol.',['uleiului de motor','Billroth II']),

q(32,['Gastrita de reflux alcalin se caracterizează prin:',
 ['Endoscopie: epiteliu edemațiat, pătat bilios, atrofie și eritem; biopsia la distanță de anastomoză arată vase submucoase „în tirbușon”','Corecția chirurgicală: Roux-en-Y cu distanță minimă de 40 cm între gastrojejunostomie și reimplantarea sucurilor digestive','Colestiramina, antiacidele, H2 și metoclopramidul sunt uniform satisfăcătoare, fără indicație de derivare','Distanța minimă Roux este de 5 cm, identică gastroplastiei Collis','SIL stângă, etiologia fiind o fisură anală'],'AB',182,'Gastrită de reflux alcalin',
 'Reținerea aspectului „tirbușon” și a pragului Roux de 40 cm, față de eșecul medical uniform.',
 ['Aspectul endoscopic și histologia în tirbușon sunt explicite.','Pragul de 40 cm este citat.','Textul precizează că niciun regim medical nu este uniform satisfăcător.','5 cm este Collis, nu Roux-ul alcalin.','SIL este pentru fisură, nu pentru reflux biliar.']],
 8,'Permutează cei 40 cm Roux cu cei 5 cm Collis, două lungimi din capitole vecine.',['tirbuşon','40 cm']),

q(33,['Atonia gastrică după reconstrucție Roux-en-Y se caracterizează prin:',
 ['Peste jumătate dintre pacienți au întârziere substanțială a evacuării la scintigrafia cu albumină marcată','Doar aproximativ jumătate dintre cei cu evacuare întârziată sunt simptomatici','Simptomele se ameliorează adesea în timp; mese fracționate, evitarea tutunului/alcoolului, metoclopramid sau eritromicină','Majoritatea impun reintervenție imediată, scintigrafia fiind inutilă','Atonia definește dumpingul precoce osmotic de la 15 minute'],'ABC',182,'Atonie gastrică',
 'Separarea întârzierii scintigrafice frecvente (>1/2) de simptomatologia doar la jumătate dintre aceștia, față de dumpingul precoce.',
 ['Peste jumătate la scintigrafie este explicit.','Doar aproximativ jumătate simptomatici este citat.','Măsurile conservatoare și prokineticele sunt descrise.','Textul rezervă chirurgia cazurilor care nu se ameliorează.','Dumpingul precoce este alt sindrom (golire rapidă de lichide).']],
 8,'Confundă golirea întârziată a solidelor cu dumpingul precoce prin lichide hiperosmolare.',['Peste jumătate','metoclopramidul']),

q(34,['Anemiile după rezecție gastrică includ:',
 ['Deficit de B12 sau folat, cu anemie megaloblastică la până la 20% dintre pacienți','Deficit de fier (malabsorbție sau sângerare cronică), cu anemie microcitară în 50% din cazuri','Anemia megaloblastică la 90% în prima săptămână, fără suplimentare posibilă','Deficitul de fier este rar, sub 2%, identic recurenței după antrectomie','Hemoglobina țintă perioperatorie este 4 g/dL, fără substituție'],'AB',182,'Tulburări metabolice postgastrectomie',
 'Aplicarea celor două procente memorabile (20% megaloblastică, 50% feriprivă) după rezecție gastrică.',
 ['Pragul de până la 20% este explicit.','Cifra de 50% este citată.','90% în prima săptămână nu apare în text.','50%, nu 2%, este frecvența feriprivă.','Textul cere suplimentare, nu o țintă de 4 g/dL.']],
 8,'Permutează 20% și 50% între megaloblastică și feriprivă, două cifre alăturate.',['până la 20%','50% din']),

q(35,['Fistula anastomotică precoce după chirurgie bariatrică se caracterizează prin:',
 ['Apare la 1–5% după sleeve, bypass sau DBP/SD','Localizare tipică: gastrojejunostomie în RYGB; linia de sutură mecanică de lângă joncțiunea GE în sleeve','Tahicardie inexplicabilă, tahipnee, hipoxie sau drenaj anormal ridică suspiciunea, chiar fără peritonită clasică','Pacientul stabil: antibiotice IV, drenaj percutan (stent endoscopic la fistule mici) și alimentație parenterală; instabilul merge la explorare','Fistula este o complicație tardivă la 15 ani, diagnosticată doar prin manometrie anală'],'ABCD',188,'Fistulă anastomotică bariatrică',
 'Recunoașterea ferestrei 1–5% și a semnelor atipice la obez (tahicardie), plus ierarhia conservator versus explorare.',
 ['Intervalul 1–5% este explicit.','Cele două sedii tipice sunt citate.','Tabloul tahicardie/tahipnee/hipoxie este descris.','Algoritmul stabil/instabil este menționat.','Fistula e precoce perioperatorie, nu o complicație la 15 ani.']],
 8,'Mută fistula din fereastra perioperatorie 1–5% în palierul tardiv de 15 ani al RYGB.',['1-5%','tahicardia inexplicabilă']),

q(36,['Pentru a scădea riscul de litiază veziculară după bypass gastric, textul citează administrarea de rutină a acidului ursodeoxicolic în doză de:',
 ['300 mg de două ori pe zi, timp de 6 luni postoperator, ceea ce reduce riscul până la aproximativ 2%','50–100 mg de acarboză, 3×/zi, ca în dumpingul tardiv','20 mg somatostatină IM lunar, ca în diareea post-vagotomie','1 g sucralfat, 4×/zi, ca în ulcerul marginal','Nicio profilaxie, litiaza apărând la sub 1% fără tratament'],'A',189,'Litiază veziculară post-bypass',
 'Izolarea schemei 300 mg ×2/zi, 6 luni, care coboară riscul de la ~1/3 la ~2%, față de dozele din tabelul sindroamelor postgastrectomie.',
 ['Doza, durata și pragul de aproximativ 2% sunt explicite.','Acarboza 50–100 mg este din Tabelul 13-3 (dumping tardiv).','Somatostatina IM lunară este tot din Tabelul 13-3.','Sucralfatul 1 g ×4 este pentru ulcer marginal.','Textul citează litiază la aproximativ o treime, nu sub 1% spontan.']],
 8,'Permutează 300 mg ursodeoxicolic cu dozele de acarboză/sucralfat din tabelul postgastrectomie.',['300 mg','aproximativ 2%']),
];
