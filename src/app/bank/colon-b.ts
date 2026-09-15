import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p<=219?p-83:p<=225?p-85:p-87;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('colon',15,pdfOffset,`colon-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const COLON_B=[
q(9,['Colonul, ca organ, se caracterizează anatomic prin:',
 ['Începe la joncțiunea ileocecală și măsoară aproximativ 150 cm','Cecul are diametru mediu de 7,5 cm, iar sigmoidul de 2,5 cm','Cecul, ascendentul și porțiunea proximală a transversului derivă din mezenteron','Sigmoidul este retroperitoneal și fix, spre deosebire de descendentul intraperitoneal','Teniile lipsesc pe tot colonul, fiind prezente doar pe intestinul subțire'],'ABC',216,'Anatomie — Segmente și calibre',
 'Aplicarea lungimii ~150 cm și a contrastului de calibru cec 7,5 versus sigmoid 2,5 cm, plus originea embriologică dreaptă.',
 ['Originea ileocecală și lungimea ~150 cm sunt explicite.','Calibrele 7,5 și 2,5 cm sunt citate.','Derivarea din mezenteron a cecului, ascendentului și transversului proximal este descrisă.','Sigmoidul este intraperitoneal și mobil; descendentul este retroperitoneal.','Teniile sunt cele trei benzi longitudinale ale colonului, de la baza apendicelui până la peretele rectal.']],
 8,'Inversează statutul peritoneal al sigmoidului și atribuie teniile intestinului subțire.',['aproximativ 150 cm','7,5 cm']),

q(10,['Față de intestinul subțire, colonul se deosebește prin:',
 ['Calibru, grad de fixare, apendici epiploici, tenii și haustre','Absența vilozităților; criptele Lieberkühn formează o suprafață mai uniformă, cu absorbție mai redusă','Nu există apendici epiploici la cec, apendice cecal și rect','Transversul este cea mai mobilă parte, cu marele epiploon atașat pe fața antimezenterică','Haustrele apar doar pe rect, colonul având perete neted, identic jejunului'],'ABCD',216,'Anatomie — Diferențe față de intestinul subțire',
 'Reținerea celor cinci deosebiri macroscopice și a absenței vilozităților, plus excepțiile fără apendici epiploici.',
 ['Cele cinci puncte de diferență sunt enumerate.','Absența vilozităților și criptele Lieberkühn sunt explicite.','Lipsa apendicilor la cec/apendice/rect este citată.','Mobilitatea transversului și atașarea epiploonului sunt descrise.','Haustrele sunt protruzii între tenii pe colon, nu pe rect ca structură exclusivă.']],
 8,'Mută haustrele pe rect și anulează cele cinci criterii de recunoaștere intraoperatorie.',['apendici epiploici','vilozităţilor']),

q(11,['Inervația autonomă a colonului se caracterizează prin:',
 ['Parasimpaticul până la jumătatea transversului vine pe vag; distal, din rădăcinile S2–S4','Stimularea simpatică inhibă activitatea musculară colică; parasimpaticul o stimulează','Controlul motilității dispare după secțiune medulară, plexurile submucoase fiind inerte','Simpaticul distal de transvers vine pe vag, iar S2–S4 inervează doar cecul','După secțiunea măduvei, motilitatea colică dispare complet, plexurile intramurale fiind inerte'],'AB',217,'Inervația colonului',
 'Maparea vag versus S2–S4 și a faptului că motilitatea persistă după secțiune medulară, prin plexuri regionale.',
 ['Teritoriile vag și S2–S4 sunt explicite.','Efectele opuse simpatic/parasimpatic sunt citate.','După secțiune medulară motilitatea rămâne relativ normală, controlul fiind plexual regional.','Vagul nu inervează colonul stâng; S2–S4 nu țin de cec.','Motilitatea relativ normală persistă după secțiune medulară.']],
 8,'Inversează teritoriile vag/S2–S4 și declară colonul inert după leziune medulară.',['S2 la S4','plexurile submucoase'],[218]),

q(12,['Anatomia chirurgicală a rectului include:',
 ['Lungime de aproximativ 12–18 cm, de la joncțiunea rectosigmoidiană până la inelul anorectal (puborectal)','Trei pliuri submusculare — valvele rectale ale lui Houston','Cele două treimi superioare acoperite anterior de peritoneu; treimea inferioară complet extraperitoneală','Fascia Waldeyer posterior și Denonvilliers anterior delimitează mezorectul','Rectul are un mezenter adevărat, de aceea termenul de mezorect este anatomic strict'],'ABCD',218,'Anatomie — Rectul',
 'Aplicarea lungimii 12–18 cm, a valvelor Houston și a planurilor Waldeyer/Denonvilliers, față de caracterul impropriu al „mezorectului”.',
 ['Intervalul 12–18 cm și inelul puborectal sunt explicite.','Valvele Houston sunt numite.','Distribuția peritoneală pe treimi este descrisă.','Cele două fascii și mezorectul sunt citate.','Textul precizează că mezorectul este un termen impropriu, rectul neavând mezenter adevărat.']],
 8,'Transformă „mezorectul” din termen impropriu în mezenter anatomic adevărat.',['12- I 8 cm','fascia lui Waldeyer']),

q(13,['Linia dințată marchează o schimbare de inervație și drenaj astfel:',
 ['Deasupra, mucoasa nu are sensibilitate (simpatic și parasimpatic); dedesubt, inervația este somatică, deci sensibilă','Limfaticele de deasupra drenează în ganglioni mezenterici inferiori și iliaci interni; sub linie, în inghinali superficiali','Plexul hemoroidal intern e deasupra liniei; cel extern, sub linie, drenează în vena hemoroidală inferioară','Canalul anal măsoară 2,5–5 cm, de la inelul anorectal până la linia anocutană','Sub linia dințată mucoasa este insensibilă, iar limfaticele urcă spre hilul hepatic'],'ABCD',219,'Anatomie — Anusul și linia dințată',
 'Separarea sensibilității și a stațiilor limfatice de o parte și de alta a liniei dințate, plus lungimea 2,5–5 cm a canalului anal.',
 ['Disociația vegetativ/somatic este explicită.','Stațiile limfatice deasupra versus inghinal sub linie sunt citate.','Plexurile hemoroidale intern/extern urmează linia.','Lungimea 2,5–5 cm este descrisă.','Sub linie inervația este somatică, sensibilă; limfaticele merg inghinal, nu hepatic.']],
 8,'Inversează sensibilitatea de sub linia dințată și mută drenajul limfatic spre ficat.',['linia dinţată','2,5-5 cm']),

q(14,['Fiziologia colică a apei, electroliților și florei include:',
 ['Din intestinul subțire ajung zilnic în cec 1–2 L de chim; până la 90% din apă se absoarbe, cu <200 mL lichid în scaun','Nouăzeci la sută din sodiul ileal se absoarbe activ la schimb cu secreția de potasiu','Există peste 400 de tipuri de bacterii, predominant anaerobe; Bacteroides fragilis este cel mai comun bacil Gram-negativ anaerob','Fermentația produce circa 800–900 mL gaz/zi, azotul ~70% provenind din aerul înghițit','Excizia întregului colon și rect anulează capacitatea de a menține o nutriție normală'],'ABCD',219,'Fiziologie — Absorbție și floră',
 'Integrarea volumelor 1–2 L / <200 mL, a schimbului Na/K, a florei (400 specii, B. fragilis) și a gazului 800–900 mL, față de nutriția păstrată după colectomie.',
 ['Volumele de chim și de scaun sunt explicite.','Cifra de 90% pentru sodiu este citată.','400 de tipuri și B. fragilis sunt menționate.','800–900 mL gaz și 70% azot sunt descrise.','Textul precizează că excizia colon+rect nu afectează nutriția normală.']],
 8,'Declară colectomia incompatibilă cu nutriția, contrar afirmației explicite din paragraf.',['1-2 L de','Bacteroides fi']),

q(15,['Motilitatea colică și defecația se caracterizează prin:',
 ['Undele lente sunt contracții bidirecționale segmentare, de frecvență joasă, care amestecă materiile','Contracțiile globale, propulsive, încep în transvers, apar după trezire și ingestie, și asociază nevoia de a defeca','Contracțiile globale apar doar în somn profund, nu după trezire sau mese','Contracțiile globale pornesc din cec și sunt independente de trezire sau alimentație','Defecația normală impune un ritm fix de trei scaune pe zi, orice abatere definind ocluzia'],'AB',219,'Fiziologie — Motilitate și defecație',
 'Diferențierea undelor lente de contracțiile globale (start în transvers, după trezire) și a intervalului 8–72 de ore.',
 ['Undele lente de amestec sunt descrise.','Originea în transvers, legătura cu trezirea/masa și nevoia de defecație sunt explicite.','Textul le leagă de trezire și ingestie, nu de somn.','Startul este în transvers, nu în cec, și sunt legate de trezire/ingestie.','Variația 8–72 de ore infirmă ritmul rigid de trei scaune.']],
 8,'Mută originea contracțiilor globale în cec și impune un ritm de trei scaune, ignorând intervalul 8–72 de ore.',['8 ore la 72 de ore','Colonul transvers']),

q(16,['Boala diverticulară simptomatică necomplicată (BDSN) se deosebește de diverticulită prin:',
 ['Durere recurentă în cadranul inferior stâng și modificări de tranzit, fără febră și fără leucocitoză','Endoscopia arată doar diverticuli, fără modificări mucosale inflamatorii','Fibrele alimentare sunt contraindicate, inflamația cerând Hartmann imediat','Febra, leucocitoza și apărarea musculară definesc BDSN, nu diverticulita','BDSN impune Hartmann de urgență la primul episod, fibrele fiind contraindicate'],'AB',223,'BDSN versus diverticulită',
 'Recunoașterea absenței febrei/leucocitozei și a tratamentului cu fibre în BDSN, față de tabloul inflamator al diverticulitei.',
 ['Tabloul fără febră/leucocitoză este explicit.','Endoscopia „doar diverticuli” este citată.','Fibrele sunt tratamentul BDSN, nu o contraindicație.','Febra și leucocitoza țin de diverticulită, nu de BDSN.','Hartmann este pentru perforație/obstrucție, nu pentru BDSN.']],
 8,'Atribuie BDSN-ului febra și Hartmann-ul, confundând-o cu diverticulita complicată.',['BDSN','creşterea apo1tului de fibre'],[222]),

q(17,['Colita ulcerativă se deosebește de boala Crohn prin:',
 ['CU interesează mucoasa și submucoasa și doar colonul și rectul','BC este transmurală și poate fi oriunde de la cavitatea bucală până la anus','În BC, circa jumătate din cazuri afectează subțire și gros lângă valva ileocecală; 10% au doar interesare perianală; stomac/duoden ~2%','Vârsta de debut e bimodală: două treimi în decadele 2–3, o treime în decada 5','CU este o boală transmurală a întregului tub digestiv, cu skip lesions ca regulă'],'ABCD',225,'BII — Distincția CU versus Crohn',
 'Aplicarea adâncimii (mucoasă vs transmural), a teritoriului (colon-rect vs tot tubul) și a cifrelor de localizare Crohn.',
 ['Limitarea CU la mucoasă/submucoasă și la colon-rect este explicită.','Caracterul transmural și teritoriul gură–anus sunt citate.','Proporțiile 50%/10%/2% sunt menționate.','Distribuția bimodală este descrisă.','Skip lesions și transmuralitatea definesc Crohn, nu CU.']],
 8,'Atribuie CU-ului transmuralitatea și skip-lesions, exact markerii Crohn din același paragraf.',['doar colonul şi rectul','aproximativ 2%']),

q(18,['Conform Tabelului 15-2, deosebirile CU versus Crohn includ:',
 ['Diareea din CU este severă, cu sânge; în Crohn e mai puțin severă, rar sangvinolentă','Fistula perianală este rară în CU și frecventă în Crohn','Tratamentul chirurgical este curativ în CU și paliativ în Crohn, recurența fiind frecventă doar în Crohn','Radiologic, CU dă aspect de țeavă de plumb; Crohn dă semnul corzii și fistule interne','Rectul este scutit în CU și constant lezat în Crohn, megacolonul fiind rar în CU'],'ABCD',228,'Tabelul 15-2 — CU versus Crohn',
 'Extragerea contrastelor de diaree, fistulă perianală, intenție chirurgicală și aspect radiologic, față de inversarea interesării rectale.',
 ['Contrastul de severitate/sânge al diareei este din tabel.','Fistula perianală rară vs frecventă este citată.','Curativ vs paliativ și recurența Crohn sunt explicite.','Țeava de plumb versus semnul corzii sunt din rândul radiologic.','Tabelul atribuie rectul interesat CU și adesea normal în Crohn; megacolonul e frecvent în CU.']],
 8,'Inversează interesarea rectală și frecvența megacolonului între CU și Crohn.',['Ţeavă de plumb','Tratament chirurgical']),

q(19,['Anastomoza ileo-anală cu rezervor (Figura 15-13) este operația de elecție pentru:',
 ['Tratamentul definitiv al colitei ulcerative și al sindromului de polipoză familială, cu rezervor ileal în J anastomozat la linia dințată','Pancreatita cronică cefalică, ca substitut al Whipple','Hemoragia diverticulară masivă necontrolată, în locul rezecției segmentare','Fisura anală cronică, în locul sfincterotomiei laterale','Abcesul ischiorectal, ca drenaj definitiv'],'A',228,'Tratament chirurgical — IPAA',
 'Recunoașterea IPAA cu rezervor J ca procedură de elecție în CU și PAF, nu în urgențele anorectale sau pancreatice.',
 ['Legendă și text identifică CU și PAF, rezervorul J și anastomoza la linia dințată.','Whipple nu se înlocuiește cu IPAA.','Hemoragia diverticulară se rezolvă prin rezecție segmentară, nu prin proctocolectomie de principiu.','Fisura se tratează prin SIL sau conservator.','Abcesul se drenează, nu se reconstruiește un neorect.']],
 8,'Mută IPAA pe indicații din capitole vecine (pancreas, diverticul, fisură), ignorând CU/PAF.',['rezervor','linia dinţată']),

q(20,['Imagistica ocluziei de intestin gros include:',
 ['Volvulusul sigmoidian poate avea aspect de „boabă de cafea” sau „tub îndoit interior”','Clisma hidrosolubilă (Gastrografin) cu capăt în „cioc de pasăre” sugerează volvulus colonic','Bariul nu se administrează dacă există suspiciune de obstrucție sau perforație colonică','Pneumatoza parietală pe radiografie sugerează ischemie colonică','Bariul oral este contrastul de elecție în suspiciunea de perforație colonică'],'ABCD',229,'Ocluzia intestinului gros — Imagistică',
 'Recunoașterea semnelor „boabă de cafea”/„cioc de pasăre” și a interdicției bariului la obstrucție/perforație.',
 ['Aspectul de boabă de cafea este citat.','Ciocul de pasăre la Gastrografin este descris.','Interdicția bariului la obstrucție/perforație este explicită.','Pneumatoza ca semn de ischemie este menționată.','Bariul este evitat, nu preferat, la perforație.']],
 8,'Pune bariul ca contrast de elecție tocmai în scenariul (perforație) în care textul îl interzice.',['boabă de cafea','cioc de pasăre']),

q(21,['În volvulusul sigmoidian, fără ischemie sau perforație, conduita inițială este:',
 ['Detorsionare endoscopică, eficientă la 60–95% dintre pacienți','Lăsarea unui tub de decompresie 1–3 zile după detorsie, pentru pregătire mecanică','Observația ambulatorie, recurența fiind neglijabilă după un episod unic','Detorsia endoscopică a cecului, superioară rezecției de cec','Rezecția sigmoidiană este inutilă, detorsia endoscopică vindecând definitiv'],'AB',230,'Volvulusul sigmoidian',
 'Aplicarea ratei 60–95% a detorsiei endoscopice, a tubului 1–3 zile și a rezecției elective, față de interdicția detorsiei cecale.',
 ['Intervalul 60–95% este explicit.','Tubul 1–3 zile este citat.','Riscul înalt de recurență impune chirurgie în internarea index, nu observație.','Detorsia endoscopică a cecului nu este, în general, recomandată.','Rezecția+anastomoză rămâne cea mai eficientă împotriva recurenței.']],
 8,'Extinde detorsia endoscopică la cec și neagă recurența, două capcane de localizare.',['60-95%','1-3 zile']),

q(22,['Identificați afirmația corectă referitoare la volvulusul de cec:',
 ['Încercările de detorsionare endoscopică nu sunt, în general, recomandate; rezecția de cec este cea mai eficientă împotriva recurenței','Detorsia endoscopică este superioară celei din volvulusul sigmoidian, cu succes >99%','Tubul rectal 1–3 zile înlocuiește rezecția, recurența cecală fiind nulă','Cecostomia percutană este contraindicată în orice dilatație cecală, inclusiv în Ogilvie cu colon viabil','Radiografia arată o ansă din cadranul inferior stâng spre cel superior drept, cu colon distal destins'],'A',230,'Volvulusul cecal',
 'Recunoașterea interdicției detorsiei endoscopice cecale și a rezecției de cec ca prevenție a recurenței.',
 ['Cele două afirmații (nu detorsie endoscopică; rezecție de cec) sunt explicite.','Succesul 60–95% ține de sigmoid, nu de cec.','Tubul 1–3 zile este manevra de după detorsia sigmoidiană.','Cecostomia este recomandată în Ogilvie cu colon viabil, nu contraindicată.','Ansa cecală se extinde din cadranul inferior drept spre cel superior stâng; colonul distal e aplatizat.']],
 8,'Aplică algoritmul sigmoidian (detorsie+tub) pe cec, exact ceea ce textul descurajează.',['Rezecţia de cec','detorsionare endoscopică']),

q(23,['În sindromul Ogilvie, după eșecul măsurilor suportive, sunt adevărate următoarele:',
 ['Neostigmina iv remite dilatația în aproximativ 90% dintre cazuri','Se administrează sub monitorizare; atropina sau glicopirolatul trebuie disponibile pentru bradicardie/bronhospasm','Laxativele orale osmotice și stimulantele trebuie evitate, putând accentua dilatația','Cecostomia (sau cecostomia pe tub) are succes 95–100% la colonul viabil, dilatat','Neostigmina este de elecție în ischemie, perforație, sarcină, aritmii necontrolate sau bronhospasm sever activ'],'ABCD',230,'POAC — Neostigmină și cecostomy',
 'Aplicarea ratei ~90% a neostigminei, a contraindicațiilor ei și a cecostomiei 95–100% pe colon viabil.',
 ['Cifra de aproximativ 90% este explicită.','Monitorizarea și antidotul (atropină/glicopirolat) sunt cerute.','Evitarea laxativelor osmotice/stimulante este citată.','Succesul 95–100% al cecostomiei pe colon viabil este menționat.','Ischemia, perforația, sarcina, aritmiile și bronhospasmul sunt contraindicații, nu indicații.']],
 8,'Transformă contraindicațiile neostigminei în indicații de elecție.',['aproximativ 90%','Cecostomia']),

q(24,['Dintre tipurile histologice de polipi, cel mai mare risc de malignizare îl au:',
 ['Adenoamele viloase','Polipii inflamatori (pseudopolipii) din BII','Hamartoamele (juvenili, Peutz-Jeghers)','Polipii hiperplazici','Adenoamele tubulare, listate cu potențial „ridicat” în tabel, față de viloasele cu potențial „scăzut”'],'A',231,'Polipi colo-rectali — Potențial malign',
 'Ierarhia de risc: vilos > tubular; inflamator/hamartom/hiperplazic fără (sau cu minim) potențial malign.',
 ['Textul atribuie adenoamelor viloase cel mai mare risc.','Pseudopolipii inflamatori nu au potențial malign.','Hamartoamele au potențial foarte scăzut și adesea regresează.','Hiperplazicii au „niciunul” ca potențial în tabel.','Tabelul listează tubularul cu potențial scăzut și vilosul cu potențial ridicat, nu invers.']],
 8,'Inversează coloana de potențial malign dintre adenomul tubular și cel vilos.',['Adenom vilos','Potenţial Malign']),

q(25,['Tratamentul polipilor colorectali se caracterizează prin:',
 ['Polipectomia colonoscopică permite histologia și identificarea tipului','Un polip mare/plat, neextirpabil endoscopic cu margini sigure, cu biopsie de adenom, poate impune rezecție segmentară','Polipii inflamatori impun colectomie totală de principiu, având potențial malign înalt','În PAF se evită colectomia, adenoamele fiind urmărite medicamentos','Hamartoamele se tratează prin duodenopancreatectomie, nu prin urmărire'],'AB',231,'Tratamentul polipilor',
 'Escaladarea polipectomie → rezecție segmentară → colectomie totală (PAF), față de urmărirea inflamatorilor/hamartoamelor.',
 ['Rolul polipectomiei este explicit.','Indicația de rezecție segmentară pentru adenomul plat/mare este citată.','Inflamatorii nu au potențial malign și se urmăresc.','În PAF operația cea mai frecventă este colectomia totală.','Hamartoamele se monitorizează; Whipple nu are loc aici.']],
 8,'Forțează colectomia/Whipple pe polipi fără potențial malign semnificativ.',['colectomia totală','polipectomie co']),

q(26,['În epidemiologia cancerului colorectal sunt adevărate următoarele:',
 ['Aproximativ 6% sunt cauzate de un sindrom familial cu mutație cunoscută','PAF (mutație APC) este responsabil de 1% din cancerele colorectale','Inhibitorii de prostaglandină (aspirină, sulindac) scăd riscul de adenoame și de cancer colonic','HNPCC (Lynch) reprezintă 5%, cu cancere drepte la 30–40 de ani și risc endometrial/urotelial','PAF produce 25% din cancerele colorectale, iar aspirina crește formarea adenoamelor'],'ABCD',231,'Cancer colorectal — Epidemiologie și chimioprevenție',
 'Combinarea ponderilor 6%/1%/5% cu efectul protector al aspirinei/sulindacului, față de umflarea PAF.',
 ['Cifra de 6% familial este explicită.','PAF 1% este citat.','Aspirina și sulindacul sunt menționate ca reducând riscul.','HNPCC 5%, dreapta, 30–40 de ani și cancerele asociate sunt din pagina următoare, dar PAF/6% sunt pe 231; HNPCC continuă pe 232.','PAF este 1%, nu 25%; aspirina scade, nu crește, adenoamele.']],
 8,'Umflă ponderea PAF la 25% și inversează efectul aspirinei asupra adenoamelor.',['6% din toate','responsabil de I%'],[232]),

q(27,['Tabloul clinic al cancerului colorectal depinde de sediu astfel:',
 ['Colonul drept: leziuni exofitice, hemoragii oculte, anemie feriprivă; scaunul lichid maschează tumora până tardiv','Colonul stâng/sigmoid: rectoragie macroscopică și semne de obstrucție parțială (scaune creionate, meteorism)','Rectul: sângerare, obstrucție, alternanță diaree-constipație; tenesmele apar în boala avansată','Orice pacient >30 de ani cu modificare de tranzit, anemie feriprivă sau rectoragie necesită colonoscopie completă','Cancerele drepte se prezintă precoce prin scaune creionate, iar cele stângi doar prin anemie ocultă'],'ABCD',232,'Tablou clinic după localizare',
 'Maparea triadei dreapta-anemie / stânga-obstrucție / rect-tenesme și a pragului de vârstă >30 de ani pentru colonoscopie.',
 ['Profilul drept (exofitic, occult, feripriv) este explicit.','Profilul stâng (rectoragie, obstrucție) este citat.','Tenesmele ca semn avansat rectal sunt descrise.','Pragul >30 de ani și indicația de colonoscopie sunt menționate.','Scaunele creionate țin de stânga, anemia ocultă de dreapta — distractorul inversează.']],
 8,'Inversează semnele drepte versus stângi, capcana clasică de localizare.',['deficit de fier','>30 ani'],[233]),

q(28,['Stadializarea adenocarcinomului colorectal include:',
 ['CT toracic, abdominal și pelvin, pentru a exclude metastaze (ficat, plămân)','Dozarea CEA, utilă în urmărirea recurenței după rezecție, deși nu e specifică','Pentru rect, IRM sau ecografie endorectală evaluează profunzimea (T) și ganglionii','Chirurgia este etapa inițială în cancerul de colon; mezenterul se ia pentru ganglionii care drenează segmentul (30% pozitivi la diagnostic)','CEA înlocuiește CT-ul de stadializare, fiind specific doar cancerului colorectal'],'ABCD',234,'Stadializare și principii de rezecție colonică',
 'Integrarea CT TAP, CEA nespecific și a IRM/EUS rectal, plus ponderea de 30% a ganglionilor pozitivi.',
 ['CT TAP și sediile hepatic/pulmonar sunt explicite.','CEA ca marker de urmărire, nespecific, este citat.','IRM/EUS pentru T și N rectali sunt descrise.','Cifra de 30% și luarea mezenterului sunt menționate.','CEA nu e specific și nu înlocuiește CT-ul.']],
 8,'Transformă CEA-ul nespecific într-un substitut al CT-ului de stadializare.',['30% dintre cancerele','antigenului carcinoembrionar']),

q(29,['Cancerul rectal T3/T4 sau N+ se gestionează astfel:',
 ['Radiochimioterapie neoadjuvantă, apoi 8–12 săptămâni de recuperare după 6 săptămâni de tratament, urmate de chirurgie','Rezecție anterioară joasă cu margine distală de 1 cm și excizie completă de mezorect','Anastomoza joasă, post-RT, are risc înalt de fistulă, deci se protejează prin stomă proximală temporară','Invazia sfincterului impune rezecție abdomino-perineală și colostomie sigmoidiană definitivă','Chirurgia se face în ziua diagnosticului T3, fără neoadjuvant, stoma fiind inutilă după RT'],'ABCD',234,'Cancer rectal — Neoadjuvant și tehnică',
 'Aplicarea secvenței 6 săptămâni CRT → 8–12 recuperare, a marginii de 1 cm/TME și a stomei de protecție, versus APR la invazie sfincteriană.',
 ['Secvența neoadjuvantă și ferestrele temporale sunt explicite.','Marginea de 1 cm și TME sunt citate.','Riscul de fistulă și stoma temporară sunt descrise.','APR + colostomie definitivă la invazie sfincteriană este indicația.','Neoadjuvantul este etapa inițială la T3/T4 sau N+, nu chirurgia imediată.']],
 8,'Sare peste neoadjuvant la T3 și neagă stoma de protecție, două erori de secvență rectală.',['8-12 săptămâni','I cm, distal']),

q(30,['După rezecția cancerului colorectal, urmărirea și chimioterapia adjuvantă includ:',
 ['Stadiile I–II colonice se tratează corespunzător doar prin rezecție; chimioterapia e uzuală în stadiul 3 colonic și în stadiile 2–3 rectale','Standardul actual este 4–6 luni FOLFOX (5-FU, leucovorin, oxaliplatin)','Cele mai multe recurențe sunt în 18–24 de luni; CEA la 3 luni în primii 2 ani, apoi la 6 luni 3 ani','Colonoscopia de rutină la 1 și 4 ani postoperator, apoi la 5 ani','Stadiul I colonic impune FOLFOX de principiu, CEA-ul neavând rol în recurență'],'ABCD',234,'Adjuvanță și supraveghere',
 'Reținerea indicației FOLFOX 4–6 luni, a ferestrei de recurență 18–24 luni și a calendarului CEA/colonoscopie.',
 ['Diferența stadiu I–II vs 3 (colon) și 2–3 (rect) este explicită.','FOLFOX 4–6 luni este numit standard.','18–24 luni și ritmul CEA sunt citate.','Calendarul colonoscopic 1/4/5 ani este descris.','Stadiul I colonic nu primește chimioterapie de rutină; CEA ghidează recurența.']],
 8,'Extinde FOLFOX la stadiul I și neagă rolul CEA, inversând tocmai algoritmul de supraveghere.',['4-6 luni','18-24 luni'],[235]),

q(31,['Prolapsul rectal adevărat se deosebește de prolapsul de mucoasă prin:',
 ['Protruzia întregului perete, de 4–20 cm, cu pliuri concentrice circumferențiale','Prolapsul de mucoasă: eversiune de 2–3 cm cu pliuri radiale, ca în prolapsul hemoroidal','Procidența adevărată este o eversiune de 2–3 cm, rezervată bărbaților obezi','Pliurile radiale definesc prolapsul adevărat, iar cele concentrice pe cel mucos','Lungimea de 2–3 cm cu pliuri radiale atestă procidența completă, de 4–20 cm'],'AB',235,'Prolaps rectal versus prolaps de mucoasă',
 'Contrastul 4–20 cm concentric versus 2–3 cm radial, pe terenul femeii astenice.',
 ['Lungimea 4–20 cm și pliurile concentrice sunt explicite.','2–3 cm și modelul radial sunt citate.','Terenul descris este femeia slabă, astenică; 2–3 cm este prolapsul mucos.','Direcția pliurilor este inversată față de figură/text.','2–3 cm radial este prolapsul mucos, nu procidența completă.']],
 8,'Inversează patternul de pliuri concentric versus radial, criteriul vizual de diferențiere.',['4-20 cm','pliurile concentrice']),

q(32,['Tratamentul prolapsului rectal adevărat se caracterizează prin:',
 ['Procedură intra-abdominală: rezecție sigmoidiană a segmentului redundant plus rectopexie (sutură la fascia presacrală)','Rate de recurență <5% dacă procedura e corect efectuată','La riscul crescut, rezecția completă perineală are recurențe mult mai mari','Prolapsul de mucoasă și cel hemoroidal se tratează prin hemoroidectomie','Rectopexia abdominală are recurență >50%, deci perinealul este de elecție la tineri'],'ABCD',236,'Tratamentul prolapsului rectal',
 'Aplicarea cuplului rezecție+rectopexie cu recurență <5% și a recurenței mai mari a căii perineale.',
 ['Rezecția+rectopexia sunt descrise.','Pragul <5% este citat.','Recurența mai mare a căii perineale este explicită.','Hemoroidectomia pentru prolapsul mucos/hemoroidal este menționată.','<5% este tocmai rata căii abdominale; perinealul nu e de elecție la tineri.']],
 8,'Inversează ierarhia recurenței abdominal versus perineal.',['<5%','rectopexie']),

q(33,['Hemoroizii interni se clasifică și se tratează astfel:',
 ['Gradul I nu prolabează; se văd la anuscop; sângerarea se poate trata prin scleroterapie sau coagulare IR, plus ligatură elastică','Gradul II prolabează la defecație și se reduce spontan; ligatură elastică sau conservator','Gradul III prolabează și cere reducere manuală; ligatură în cazuri selectate, hemoroidectomie dacă e componentă externă voluminoasă','Gradul IV nu se reduce; hemoroidectomie','Hemoroizii de grad I se operează de principiu, ligatura elastică fiind rezervată gradului IV ireductibil'],'ABCD',236,'Hemoroizi interni — Grade și tratament',
 'Maparea I–IV (nu prolabează / spontan / manual / ireductibil) pe ligatură versus hemoroidectomie.',
 ['Gradul I și opțiunile office sunt explicite.','Gradul II (reducere spontană) este citat.','Gradul III (reducere manuală) și hemoroidectomia mixtă sunt descrise.','Gradul IV → hemoroidectomie este din tabel.','Ligatura este pentru I–III, nu pentru IV; I nu se operează de principiu.']],
 8,'Inversează ligatura (I–III) cu hemoroidectomia de grad IV.',['grad I','Hemoroidectomia'],[237]),

q(34,['Hemoroidul extern trombozat, consultat în primele 24–48 de ore, se tratează prin:',
 ['Excizia cheagului sub anestezie locală','Hemoroidectomie radicală cu ligatură arterială Doppler, de principiu','Cremă, supozitoare și pernă inelară, superioare exciziei precoce','Seton de drenaj, ca în fistula transsfincteriană','Protocol Nigro, leziunea fiind asimilată CCS anal'],'A',237,'Hemoroid extern trombozat',
 'Recunoașterea ferestrei 24–48 de ore pentru excizie locală, față de conservatorul tardiv (7–10 zile) și de perna inelară care agravează.',
 ['Excizia în 24–48 de ore sub anestezie locală este explicită.','Hemoroidectomia radicală nu este gestul fereastră precoce.','Cremele/supozitoarele nu aduc beneficiu; pernele de șezut se evită.','Setonul ține de fistulă, nu de tromboză.','Nigro este pentru CCS anal, nu pentru tromboză.']],
 8,'Înlocuiește excizia precoce cu pernă inelară sau Nigro, două conduite din paragrafele vecine.',['24--48 ore','7-1 O zile']),

q(35,['Abcesul anorectal de origine criptoglandulară se gestionează astfel:',
 ['Incizie și drenaj cât mai aproape de marginea anală, pentru a scurta o fistulă ulterioară','Aproximativ o treime dintre pacienți vor fi diagnosticați cu fistulă la luni–ani după drenaj','Antibioticele se rezervă celulitei semnificative, semnelor sistemice sau imunosupresiei','Pansamentul agresiv al cavității întârzie vindecarea și nu este justificat','Antibioticele de spectru larg înlocuiesc drenajul la abcesul fluctuent necomplicat'],'ABCD',237,'Abces anorectal',
 'Prioritatea drenajului aproape de marginea anală, a ratei de o treime fistule tardive și a antibioterapiei selective.',
 ['Incizia aproape de margine este explicită.','Cifra de aproximativ o treime este citată.','Cele trei indicații de antibiotic sunt enumerate.','Pansamentul agresiv nejustificat este menționat.','Drenajul rămâne tratamentul de primă intenție; antibioticul nu-l înlocuiește.']],
 8,'Înlocuiește drenajul cu antibioterapie la abcesul fluctuent, contrar regulii de primă intenție.',['o treime','origine criptoglandulară']),

q(36,['Fistula perianală se caracterizează prin:',
 ['Intersfincteriană după abces perianal, transsfincteriană după ischiorectal, suprasfincteriană după supralevator; extrasfincteriană ocolește sfincterul și se deschide în rect','Fistulotomia vindecă peste 90% din fistulele simple','LIFT raportează vindecare 61–94%, cu morbiditate scăzută, inclusiv în transsfincteriene','Lamboul de avansare endoanal prezervă sfincterul; eșecul se leagă de RT, Crohn, proctită, fistulă recto-vaginală, neoplazie, obezitate','Fistulotomia este contraindicată în fistula simplă, LIFT având succes sub 10%'],'ABCD',238,'Fistula perianală — Clasificare și proceduri',
 'Maparea Parks (inter/trans/supra/extra) pe fistulotomie >90% și LIFT 61–94%, față de lamboul de avansare în complexe.',
 ['Cele patru tipuri după originea abcesului sunt explicite.','Pragul >90% al fistulotomiei este citat.','Intervalul LIFT 61–94% este menționat.','Factorii de eșec ai lamboului sunt listați.','Fistulotomia este de primă intenție în fistula simplă; LIFT nu are succes sub 10%.']],
 8,'Neagă fistulotomia în fistula simplă și prăbușește rata LIFT sub 10%.',['peste 90%','61 %-94%']),

q(37,['Localizarea cea mai frecventă a fisurii anale este:',
 ['Linia mediană posterioară, în peste 80% dintre cazuri','Linia mediană anterioară, în peste 95% dintre cazuri, ca sediu unic','Circumferențial, pe tot canalul, ca echivalent de CCS','Pe fața laterală stângă, corespunzător SIL de elecție','În vertexul coccigian, în afara canalului anal'],'A',238,'Fisura anală — Localizare',
 'Recunoașterea predilecției >80% posterioare; localizările multiple/excentrice sugerează Crohn, ITS sau neoplazie.',
 ['Cifra >80% posterior este explicită.','Anteriorul există, dar nu la 95% ca sediu unic.','Distribuția circumferențială nu este pattern-ul fisurii idiopatice.','Lateralul excentric ridică suspiciunea de boală sistemică.','Fisura este o soluție de continuitate a canalului, nu o leziune coccigiană.']],
 8,'Mută predilecția posterioară pe anterior sau lateral, ignorând pragul >80%.',['>80%','liniei mediane posterioare']),

q(38,['Tratamentul fisurii anale include:',
 ['Măsuri conservatoare (băi calde, fibre, hidratare) utile în 50–75% dintre cazuri','Blocanți de calciu sau nitrați topici, cu vindecare 65–95%; cefaleea e mai rară la CCB decât la nitrați','După ~8 săptămâni fisura e cronică (fibre musculare expuse, mariscă santinelă, papilă hipertrofică)','SIL (sfincterotomie internă laterală stângă) vindecă 95–98%, cu incontinență în 5–10%','SIL este primul gest în fisura acută de 48 de ore, conservatorul fiind rezervat formei cronice de 8 săptămâni'],'ABCD',238,'Fisura anală — Conservator versus SIL',
 'Escaladarea 50–75% conservator → 65–95% topic → SIL 95–98% după cronicizare la 8 săptămâni.',
 ['Intervalul 50–75% este explicit.','65–95% și diferența de cefalee CCB vs nitrați sunt citate.','Pragul de 8 săptămâni și semnele de cronicizare sunt descrise.','95–98% vindecare și 5–10% incontinență sunt menționate.','SIL este pentru eșecul conservator/forma cronică, nu pentru fisura acută de 48 de ore.']],
 8,'Pune SIL înaintea celor 8 săptămâni de conservator, inversând algoritmul de escladație.',['50-75% din cazuri','95-98%'],[239]),

q(39,['Infecțiile bacteriene anorectale se tratează astfel:',
 ['Gonoreea: spectinomicină 2 g IM doză unică sau cefalosporine/chinolone; se asociază doxiciclină din cauza co-infecției cu Chlamydia','Sifilisul primar/secundar: penicilină G IM doză unică; la alergie, doxiciclină sau tetraciclină','Șancrul anorectal apare la 2–10 săptămâni; stadiul secundar (condyloma lata) la 4–10 săptămâni după dispariția leziunilor primare','Partenerii din ultimele 60 de zile se tratează; abstinența până la dispariția simptomelor','Penicilina G este inutilă în sifilis; gonoreea se tratează doar topic, fără doxiciclină'],'ABCD',239,'ITS bacteriene anorectale',
 'Combinarea spectinomicinei+doxiciclinei, a PCN G pentru sifilis și a ferestrelor 2–10 / 4–10 săptămâni, plus tratarea partenerilor pe 60 de zile.',
 ['Doza de 2 g IM și asocierea doxiciclinei sunt explicite.','PCN G și alternativele la alergie sunt citate.','Ferestrele temporale ale stadiilor sunt descrise.','Cele 60 de zile și abstinența sunt menționate.','PCN G este tratamentul sifilisului primar/secundar; doxiciclina se asociază gonoreei.']],
 8,'Anulează PCN G și doxiciclina, cele două pietre de temelie ale paragrafului.',['spectinomicină 2 g','penicilină G']),

q(40,['Carcinomul scuamos de canal anal, după confirmare histologică și stadializare, are ca tratament de primă intenție:',
 ['Protocolul Nigro: mitomicină-C plus fluorouracil și radioterapie externă, cu răspuns complet la aproximativ 80%','APR imediată la toate tumorile, Nigro fiind abandonat','Doar crioterapie cu podofilină, ca în condiloamele mici','Hemoroidectomie, leziunea fiind un pachet intern de grad IV','SIL stângă, durerea fiind interpretată ca fisură cronică'],'A',240,'CCS anal — Protocolul Nigro',
 'Recunoașterea radiochimioterapiei Nigro (mitomicină + 5-FU) cu ~80% răspuns complet, APR rămânând salvaj.',
 ['Combinația mitomicină-C, fluorouracil, RT și cifra de 80% sunt explicite.','APR este pentru non-răspuns sau recurență, nu prima intenție.','Crioterapia/podofilina țin de condiloame, nu de CCS invaziv.','Hemoroidectomia nu tratează CCS.','SIL este pentru fisură, nu pentru cancer.']],
 8,'Înlocuiește Nigro cu APR, crioterapie sau SIL, trei conduite din vecinătatea anorectală.',['mitomicină-c','protocolul Nigro']),

q(41,['În carcinomul scuamos de canal anal sunt adevărate următoarele:',
 ['APR este indicată dacă tumora nu răspunde complet la neoadjuvant sau la recurență','Tumori selecționate <2 cm, cu margini libere, fără invazie sfincteriană, pot fi tratate prin rezecție locală','HPV 16 și 18 au rata cea mai mare de progresie spre displazie și cancer de canal anal; 6 și 11 sunt cu risc scăzut','Excizia, crioterapia, podofilina, imiquimodul și fulgurația sunt opțiuni pentru condiloamele externe mici, nu eradică HPV','Nigro se rezervă tumorilor <2 cm fără sfincter, APR fiind de primă intenție la orice CCS'],'ABCD',240,'CCS anal și HPV',
 'Ierarhia Nigro → APR de salvaj → rezecție locală <2 cm, plus ierarhia HPV 16/18 versus 6/11.',
 ['APR ca salvaj este explicită.','Pragul <2 cm fără sfincter este citat.','Subtipurile 16/18 versus 6/11 sunt descrise (pagina 239).','Metodele de distrucție locală a condiloamelor sunt enumerate.','Nigro este prima intenție a CCS stadializat, nu APR.']],
 8,'Inversează Nigro și APR și atribuie protocolul tumorilor <2 cm, care țin de rezecția locală.',['<2 cm','subtipurile 16 şi 18'],[239]),

q(42,['Precizați enunțul corect privind continența și defecația:',
 ['Când scaunul destinde rectul proximal, sfincterul anal extern se contractă și sfincterul intern se relaxează, permițând progresia conținutului','Sfincterul intern se contractă voluntar, iar externul se relaxează reflex la distensia rectală, inversând continența','Defecația normală cere scaun la fiecare 2 ore, altfel se definește Ogilvie','Sfincterul intern este striat, sub control voluntar, continuarea ridicătorului anal','Canalul anal nu participă la continență, sfincterele fiind vestigiale'],'A',219,'Fiziologia continenței',
 'Recunoașterea cuplului distensie rectală → SAI relaxat / SAE contractat, ca mecanism de continență-eșantionare.',
 ['Secvența destindere–SAE contractat–SAI relaxat este explicită.','Direcția voluntar/reflex este inversată.','Intervalul normal este 8–72 de ore, nu 2 ore.','Internul e neted involuntar, continuarea circularului rectal; externul e striat, din ridicător.','Complexul sfincterian este esențial pentru viața socială normală, cf. introducere.']],
 8,'Inversează rolurile sfincterului intern (neted, involuntar) și extern (striat, voluntar).',['sfincterul anal extern','sfincterul anal intern']),

q(43,['Arcada arterială marginală a colonului se caracterizează prin:',
 ['Se situează paralel și la aproximativ 2–3 cm de peretele colonului','Începe de la ramurile arterei colice drepte și se termină cu ramurile sigmoidiene, conectând AMS de AMI','Vena mezenterică inferioară se varsă în vena splenică, care se unește cu VMS pentru a forma porta','Arcada începe de la artera gastrică stângă și se termină în artera hepatică, fără legătură AMS–AMI','Drenajul venos colonic evită sistemul port, vărsându-se direct în cava superioară'],'ABC',217,'Vascularizație — Arcada marginală',
 'Reținerea distanței 2–3 cm, a capetelor colică dreaptă–sigmoidiene și a confluenței VMI–splenică–portă.',
 ['Distanța 2–3 cm este explicită.','Originea și terminația arcadei, cu puntea AMS–AMI, sunt citate.','Traiectul VMI → splenică → portă este descris.','Artera gastrică stângă și hepatica nu formează arcada colică.','Majoritatea ramurilor venoase se varsă în sistemul port.']],
 8,'Mută arcada pe pediculul gastric/hepatic și scoate colonul din teritoriul port.',['2-3 cm','Arcada arterială']),
];
