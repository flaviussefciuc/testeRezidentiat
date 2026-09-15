import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p-146;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('sepsis',8,pdfOffset,`sepsis-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const SEPSIS_D=[
q(56,['Conform Cadranului 8.1, localizarea simptomelor care orientează sediul infecției include:',
 ['Torace: tuse, spută, dispnee; tract urinar: disurie, incontinență, durere în flancuri','Sistem nervos central: cefalee, meningism; tract biliar: durere în abdomenul superior, icter, vărsături','Tegumente și țesuturi moi: semne de celulită, durere','Disuria orientează spre meningită, icterul fiind un semn de celulită','Tusea și sputa definesc sepsisul biliar, fără valoare toracică'],'ABC',152,'Cadranul 8.1 — Anamneza orientativă',
 'Reținerea clusterelor torace/urinar/SNC/biliar/tegument, distinct de invertirea sediilor.',
 ['Clusterul toracic și urinar este din cadran.','SNC și biliarul completează lista.','Celulita/durerea tegumentară este ultimul item de localizare.','Disuria este urinară, nu meningitică.','Tusea/sputa sunt toracice, nu biliare.']],
 8,'Distractorii permută disuria pe meningită și tusea pe sepsisul biliar, exact perechile din același cadran anamnestic.',['Durata','Tract urinar']),

q(57,['În Fig. 8.1, printre criteriile de disfuncție de organ care susțin suspiciunea de sepsis se numără:',
 ['Creatinină serică >170 µmol/L sau diureză <0,5 ml/kg pe oră timp de 2 ore succesive','INR >1,5 sau PTT >60 sec; trombocite <100×10⁹/L','Bilirubină ≥32 µmol/L; PaO2/FiO2 <300 mmHg (39,9 kPa) sau infiltrate pulmonare bilaterale cu nevoie nouă de oxigen pentru saturații >90%','Creatinina <70 µmol/L și trombocite >400×10⁹/L ca markeri de gravitate','PaO2/FiO2 >500 mmHg exclude disfuncția, INR-ul 1,0 fiind criteriul de CID'],'ABC',152,'Fig. 8.1 — Praguri de disfuncție de organ',
 'Memorarea pragurilor creatinină 170, diureză 0,5 ml/kg, INR 1,5, trombocite 100 și PaO2/FiO2 300.',
 ['Pragurile renale 170 µmol/L și 0,5 ml/kg ×2 ore sunt din figură.','Coagularea (INR/PTT) și trombocitele <100 completează lista.','Bilirubina 32 și PaO2/FiO2 <300 cu infiltratele sunt explicite.','Gravitatea este creatinină crescută și trombocitopenie, nu invers.','PaO2/FiO2 <300, nu >500, marchează disfuncția.']],
 8,'Distractorii inversează direcția creatininei/trombocitelor și înlocuiesc pragul PaO2/FiO2 300 cu 500.',['>170 µmol/L','<300 mmHg']),

q(58,['Conform Cadranului 8.2, o creștere a scorului SOFA cu ≥2 puncte identifică disfuncția de organ; itemii includ:',
 ['Coagulare: trombocite ≥150 (0 puncte), <150 (1), <100 (2), <50 (3), <20 (4)','Hepatic: bilirubină <20, 20-32, 33-101, 102-204, >204 µmol/L pe treptele 0-4','SNC: Glasgow 15, 13-14, 10-12, 6-9, <6; renal: creatinină <110, 110-170, 171-299, 300-440, >440 µmol/L','Trombocitele >400 valorează 4 puncte, bilirubină <20 fiind treapta maximă','Glasgow 15 valorează 4 puncte de disfuncție, creatinina <110 fiind treapta 4'],'ABC',155,'Cadranul 8.2 — Scorul SOFA',
 'Reținerea treptelor trombocite/bilirubină/GCS/creatinină și a regulii ΔSOFA ≥2.',
 ['Scara trombocitelor 150/100/50/20 este din tabel.','Benzile de bilirubină sunt explicite.','GCS și creatinina pe cinci trepte completează cadranul.','Trombocitoza nu punctează; bilirubina <20 este treapta 0.','GCS 15 și creatinina <110 sunt trepte 0, nu 4.']],
 8,'Distractorii inversează treptele 0 și 4 ale GCS/creatininei, capcana clasică a tabelului SOFA.',['22 puncte','Trombocite']),

q(59,['În supravegherea de secție, pragul care autorizează solicitarea ajutorului, dincolo de NEWS 2 ≥5 ca screening, este descris astfel:',
 ['În multe cazuri se bazează pe un scor NEWS total de 5 sau mai mare, sau pe semne clinice care primează față de scorurile numerice; necesitatea asistenței (ex. SBAR) trebuie să declanșeze reevaluare de urgență, inclusiv screening pentru sepsis','Ajutorul se cere doar la stop cardiac, NEWS fiind ignorat dacă pacientul „arată bine”','SBAR se folosește după 72 de ore de antibiotic, nu la deteriorare','Semnele clinice nu pot prevala asupra unui NEWS 2','Stopul cardiac nu este precedat de alterări fiziologice, deci pragul este inutil'],'A',155,'Supravegherea intraspitalicească — SBAR și pragul NEWS',
 'Legarea pragului NEWS 5 (sau semne clinice prioritare) de SBAR și de reevaluarea de urgență pentru sepsis.',
 ['Pragul 5 sau semnele care primează, plus SBAR, sunt din paragraf.','Stopul este de obicei precedat de alterări NEWS; ajutorul nu se amână.','SBAR este pentru deteriorarea acută, nu după 72 de ore.','Textul spune că semnele clinice primează.','Stopul este precedat de alterări progresive.']],
 8,'Distractorii amână ajutorul până la stop și anulează prioritatea semnelor clinice față de scorul numeric.',['SBAR','5 sau mai mare']),

q(60,['Tabloul clinic precoce al sepsisului, dincolo de qSOFA, se caracterizează prin:',
 ['Nu există simptome patognomonice; în general rigiditate, dispnee, mialgii, vărsături, tegumente marmorate și senzație de rău, pe lângă simptomele infecției','Unii pacienți se deteriorează abrupt, în câteva ore, de la simptome minore la disfuncție multiplă de organ','Imunodeprimații pot avea puține semne de inflamație, deși răspunsul fiziologic ar trebui să fie prezent','Simptomele patognomonice (doar febră intermitentă tertiană) permit diagnosticul fără disfuncție de organ','Imunodeprimații au inflamație floridă, deteriorarea abruptă fiind infirmată'],'ABC',156,'Tablou clinic',
 'Recunoașterea absenței patognomonicului, a deteriorării în ore și a sărăciei semnelor la imunodeprimat.',
 ['Lista nespecifică și absența patognomonicului sunt enunțate.','Deteriorarea în câteva ore este explicită.','Puținele semne inflamatorii la imunodeprimat sunt avertismentul.','Nu există simptome patognomonice.','Imunodeprimații au puține, nu floride, semne inflamatorii.']],
 8,'Distractorii inventează un patognomonic și inversează sărăcia semnelor de la imunodeprimat.',['patognomonice','câteva ore']),

q(61,['La 72 de ore, când culturile sunt disponibile, cele cinci decizii posibile sunt:',
 ['Oprirea antibioticului dacă, după reevaluare, se consideră că nu a existat infecție (confuzia putând avea multe cauze)','Dezescaladarea la oral în infecții necomplicate (pneumonie, pielonefrită) după 2-3 zile, dacă pacientul e stabil și se ameliorează','Schimbarea schemei (sediu neanticipat, ex. endocardită; sau rezistență, ex. ESBL care cere carbapenem i.v.)','Continuarea i.v. (meningită, artrită septică) sau externarea pe OPAT','Dezescaladarea se face spre spectru cât mai larg, pentru a acoperi C. difficile; cele cinci decizii se iau la 1 oră, înaintea oricărei culturi'],'ABCD',159,'Antibioterapia după 72 de ore — Cinci decizii',
 'Reținerea celor cinci opțiuni (stop, oral, schimbare, i.v. continuu, OPAT) și a ferestrei 2-3 zile pentru switch.',
 ['Oprirea după reevaluare este prima decizie.','Switch-ul oral la 2-3 zile în necomplicate este a doua.','Schimbarea schemei completează lista.','Continuarea i.v. și OPAT sunt ultimele două decizii.','Dezescaladarea urmărește spectrul îngust; cele cinci decizii sunt la 72 de ore, nu la 1 oră.']],
 8,'Distractorul inversează spectrul îngust al dezescaladării și mută cele cinci decizii pe fereastra de 1 oră a empiricului.',['72 de ore','2-3 zile']),

q(62,['În medicina de familie din Marea Britanie, indicatorii de prescriere pentru ITU joasă necomplicată prevăd:',
 ['Prescrierea de nitrofurantoină în loc de trimetoprim, fiind mai eficientă împotriva patogenilor urinari, inclusiv E. coli multirezistent','Reducerea utilizării de ciprofloxacină și de amoxicilină/acid clavulanic','Nitrofurantoina înlocuiește carbapenemul i.v. în pielonefrita ESBL','Trimetoprimul este preferat nitrofurantoinei în ITU joasă, ciprofloxacina fiind KPI de crescut','Co-amoxiclavul este prima linie de ITU joasă, nitrofurantoina fiind rezervată meningitei'],'AB',159,'Obiective specifice în Marea Britanie — Nitrofurantoină',
 'Contrastarea KPI-ului nitrofurantoină versus trimetoprim în ITU joasă cu reducerea cipro/co-amoxiclav.',
 ['Substituția nitrofurantoină–trimetoprim și eficacitatea pe E. coli rezistent sunt explicite.','Reducerea cipro și co-amoxiclav este KPI-ul de practică generală.','Nitrofurantoina nu înlocuiește carbapenemul în pielonefrită ESBL.','Direcția KPI este inversă.','Co-amoxiclavul se reduce, nu se promovează ca primă linie de ITU joasă.']],
 8,'Distractorii mută nitrofurantoina pe pielonefrită/ESBL i.v. și inversează KPI-ul trimetoprim versus nitrofurantoină.',['nitrofurantoină','trimetoprim']),

q(63,['La examenul obiectiv al sepsisului fără focar evident, sediile mai puțin acoperite anterior includ:',
 ['Sensibilitate localizată spinală (discită sau abces) și sensibilitate în flancuri (pielonefrită)','Suflu nou sau modificat (endocardită) și semne la dispozitive (Hickman: scurgere, indurație), cu culturi de la cateter','La femei, tampoane rămase în vagin care pot provoca sindromul șocului toxic; flancul stâng comun în diverticulită','Discita se exclude dacă există febră, suflul nou infirmând endocardita','Tampoanele vaginale protejează de șocul toxic, Hickman-ul nefiind o poartă'],'ABC',153,'Examenul obiectiv — Sedii și semne',
 'Recunoașterea discitei, a suflului de endocardită, a Hickman-ului, a tamponului (TSS) și a diverticulitei de flanc stâng.',
 ['Discita/abcesul și flancurile de pielonefrită sunt din schemă.','Suflul nou și dispozitivul Hickman sunt explicite.','Tampoanele (TSS) și diverticulita stângă completează lista.','Febra nu exclude discita; suflul nou o sugerează, nu o infirmă.','Tampoanele pot provoca TSS; Hickman-ul este poartă.']],
 8,'Distractorii inversează valoarea suflului nou și transformă tamponul (cauză de TSS) într-un factor protector.',['discită','şocului toxic']),

q(64,['Betalactaminele, ca clasă folosită în sepsis, se caracterizează prin:',
 ['Blochează sinteza peretelui prin legarea de proteinele de legare a penicilinei (peptidaze) din ultima etapă a formării peretelui și a diviziunii','Sunt în general bactericide pentru celulele susceptibile, într-o manieră dependentă de timp','Modificări ale nucleului β-lactamic și/sau ale lanțului adiacent pot extinde spectrul la Gram-negativi și Gram-pozitivi','Sunt bacteriostatice dependente de concentrație, fără țintă pe perete','Nucleul β-lactamic nu poate fi modificat, spectrul rămânând identic penicilinei G'],'ABC',163,'Antibiotice betalactamice — Mecanism',
 'Reținerea țintei PBP, a bactericidiei time-dependent și a ingineriei de nucleu/lanț.',
 ['Ținta PBP/peptidaze este explicită.','Bactericidia dependentă de timp este enunțată.','Modificările de nucleu/lanț extind spectrul.','Nu sunt bacteriostatice concentration-dependent.','Ingineria nucleului este tocmai baza generațiilor.']],
 8,'Distractorii transformă betalactaminele în bacteriostatice concentration-dependent, inversând PK/PD din același paragraf.',['dependentă de timp','proteinelor specifice legate de penicilină']),

q(65,['Dintre cefalosporine, activitatea pe Pseudomonas aeruginosa este atribuită:',
 ['Doar anumitor agenți, de exemplu ceftazidimă și cefepim','Tuturor cefalosporinelor de generația a doua, enterococul fiind acoperit','Cefalexinei orale, identic flucloxacilinei pe MSSA','Nicio cefalosporină nu atinge Pseudomonas, aztreonamul fiind inutil','Ceftazidima este inactivă pe Pseudomonas, cefepimul fiind rezervat anaerobilor'],'A',163,'Cefalosporinele — Pseudomonas',
 'Identificarea ceftazidimei și cefepimului ca excepțiile anti-Pseudomonas, celelalte cefalosporine neacoperind acest bacil.',
 ['Fraza „doar anumite cefalosporine (ex. ceftazidima și cefepim)” este explicită.','Generația a doua nu acoperă Pseudomonas; enterococul este exceptat din spectru.','Cefalexina nu este agentul anti-Pseudomonas citat.','Aztreonamul este folosit inclusiv în infecții cu P. aeruginosa.','Ceftazidima este exemplul anti-Pseudomonas.']],
 8,'Distractorii extind anti-Pseudomonas la toată generația a doua sau îl neagă la ceftazidimă, exact excepția din paragraf.',['ceftazidima','cefepim']),

q(66,['Efectele neurologice ale carbapenemelor, dincolo de spectrul de clasă deja consacrat, se caracterizează prin:',
 ['Greața, vărsăturile și diareea sunt prezente în mai puțin de 5% din cazuri','Imipenemul și ertapenemul pot produce convulsii și nu trebuie administrate în tratamentul meningitei, alternativa fiind meropenemul','Convulsiile apar la peste 50% din tratați, meropenemul fiind interzis în meningită','Diareea lipsește, clasa fiind fără efecte digestive','Ertapenemul este macrolidul de elecție al meningitei, fără risc convulsiv'],'AB',163,'Carbapenemele — Convulsii și meningită',
 'Reținerea GI <5% și a perechii imipenem/ertapenem convulsivante versus meropenem în meningită.',
 ['Rata <5% pentru greață/vărsături/diaree este explicită.','Convulsiile celor două molecule și meropenemul ca alternativă sunt din același paragraf.','Textul nu descrie convulsii la 50%; meropenemul este alternativa, nu interdicția.','Diareea figurează printre efectele <5%.','Ertapenemul se evită în meningită; nu este macrolid.']],
 8,'Distractorii inversează meropenemul (alternativa de meningită) și umflă convulsiile de la un avertisment la 50%.',['convulsii','meropenem']),

q(67,['Tigeciclina și tetraciclinele, dincolo de evitarea pompelor de eflux, se caracterizează prin:',
 ['Tigeciclina este activă pe VRE, MRSA și Acinetobacter baumannii, dar nu pe Pseudomonas sau Proteus; indicațiile acceptate sunt SSTI complicate și sepsis intraabdominal','Un avertisment FDA din 2010 slăbește eficiența în infecții severe, mai ales pneumonia asociată ventilației','Tetraciclinele colorează maroniu dinții în dezvoltare, deci se evită la copii și gravide; fotosensibilitatea apare la 1 din 20; doxiciclina este mai sigură în insuficiență renală','Tigeciclina este de primă intenție în pneumonia de ventilație și pe Pseudomonas','Colorarea dentară lipsește, tetraciclinele fiind de elecție în sarcină'],'ABC',165,'Tetraciclinele; Tigeciclina',
 'Integrarea spectrului (fără Pseudomonas/Proteus), a avertismentului FDA pe VAP și a colorării dentare/fotosensibilității 1/20.',
 ['Spectrul cu excepțiile Pseudomonas/Proteus și indicațiile SSTI/intraabdominal sunt din paragraf.','Avertismentul FDA 2010 pe VAP este explicit.','Dinții, gravidele, 1/20 și doxiciclina renală completează toxicitatea.','FDA slăbește tocmai VAP; Pseudomonas este exceptat.','Colorarea dentară contraindică copiii/gravidele.']],
 8,'Distractorii transformă avertismentul FDA pe VAP într-o indicație de primă intenție și neagă colorarea dentară.',['tigeciclinei','1 din 20']),

q(68,['Azitromicina, comparativ cu eritromicina, se caracterizează prin:',
 ['Penetrabilitate tisulară și intracelulară ridicate și timp de înjumătățire mai lung, care permite administrarea zilnică în doză unică','Biodisponibilitate serică scăzută, care face problematică utilizarea în bacteriemii','Este de primă intenție în endocardită și meningită, concentrația serică fiind maximă','t½ scurt impune șase prize pe zi, identic eritromicinei i.v. iritante','Penetrarea tisulară nulă o face inutilă în trahom sau holeră'],'AB',165,'Macrolidele — Azitromicina',
 'Contrastarea t½ lung și a penetrării tisulare cu limita serică care o face problematică în bacteriemie.',
 ['PK superioară și doza unică zilnică sunt explicite.','Biodisponibilitatea serică scăzută și problema din bacteriemii sunt enunțate.','Macrolidele nu sunt folosite curent în endocardită sau meningită.','t½ lung permite o doză zilnică, nu șase.','Este folosită în trahom, holeră și unele BTS.']],
 8,'Distractorii inversează limita serică (bacteriemie) și o promovează în endocardită/meningită, pe care textul le exclude.',['doză unică','bacteriemii']),

q(69,['Prelungirea QT la macrolide și colistimetatul sodic (CMS) se caracterizează prin:',
 ['Prelungirea QT este un efect cardiac recunoscut al macrolidelor și poate duce la torsada vârfurilor; asocierea cu alte prelungitoare de QT se evită când nu este absolut necesară','CMS este un prodrog inactiv, metabolizat in vivo în colistinul activ, ceea ce complică dozarea și crește potențialul de toxicitate','Polimixinele rup membrana prin legare de LPS și sunt active pe majoritatea bacililor Gram-negativi, cu excepția Proteus și Providencia','Macrolidele scurtează QT, CMS fiind forma activă orală fără metabolizare','Colistinul oral înlocuiește meropenemul în meningită, QT-ul macrolidelor fiind protector'],'ABC',165,'Macrolide — QT; Polimixine — CMS',
 'Legarea torsadei de macrolide de statutul de prodrog al CMS și de excepțiile Proteus/Providencia.',
 ['QT și torsada, plus evitarea asocierilor, sunt din paragraful macrolidelor.','Prodrogul CMS și toxicitatea de dozare sunt explicite.','LPS și excepțiile Proteus/Providencia completează mecanismul.','Macrolidele prelungesc, nu scurtează, QT; CMS este prodrog.','Colistinul nu este alternativa de meningită; meropenemul este.']],
 8,'Distractorii inversează QT-ul macrolidelor și transformă CMS-ul (prodrog i.v.) în formă orală activă de meningită.',['torsadei vârfurilor','prodrog inactiv'],[166]),

q(70,['Dezescaladarea către un antibiotic cu spectru îngust, când culturile sunt disponibile, urmărește:',
 ['Reducerea riscului de infecție cu Clostridioides difficile și a colonizării cu organisme multirezistente, în condiții de siguranță și de cost','Păstrarea spectrului cât mai larg până la externare, C. difficile fiind prevenit de carbapeneme','Oprirea oricărui oral, OPAT-ul fiind interzis după dezescaladare','Înlocuirea de rutină a îngustului cu piperacilină-tazobactam, conform CQUIN','Nicio schimbare la 72 de ore, cele cinci decizii fiind doar teoretice'],'A',159,'Administrarea prudentă — Spectru îngust',
 'Identificarea obiectivului dezescaladării: C. difficile ↓ și MDR ↓, nu păstrarea spectrului larg.',
 ['C. difficile, MDR, siguranța și costul sunt fraza de închidere.','Spectrul îngust, nu larg, este scopul; carbapenemele sunt tocmai țintele de redus.','OPAT este una dintre cele cinci decizii, nu o interdicție.','CQUIN cere reducerea, nu creșterea, piperacilină-tazobactamului.','Cele cinci decizii se aplică concret la 72 de ore.']],
 8,'Distractorii inversează dezescaladarea în conservarea spectrului larg, contrar obiectivului C. difficile/MDR din același paragraf.',['Clostrid￾ium difficile','spectru îngust']),

q(71,['Conform Cadranului 8.7, dincolo de meningococ și Haemophilus, chemoprofilaxia include:',
 ['Reumatism articular acut: fenoximetilpenicilină 250 mg doză dublă zilnică sau sulfadiazină 1 g la alergie la penicilină','Tuberculoză: izoniazidă oral 300 mg zilnic 6 luni (copii 5-10 mg/kg zilnic) la contacți tuberculin-negativi, copii cu mame infectate și imunosupresați','Splenectomia folosește 250 mg, identic reumatismului, izoniazida fiind de 2 zile ca rifampicina meningococică','Sulfadiazina 1 g este de elecție la toți splenectomizații, fără alternativă de penicilină','Izoniazida de 6 luni se dă ca doză unică de 500 mg ciprofloxacină'],'AB',161,'Cadranul 8.7 — Reumatism articular acut; Tuberculoză',
 'Contrastarea 250 mg (RAA) versus 500 mg (splenectomie) și a izoniazidei 300 mg ×6 luni.',
 ['250 mg ×2/zi sau sulfadiazină 1 g sunt din rândul RAA.','300 mg ×6 luni și populațiile-țintă sunt din rândul TB.','Splenectomia este 500 mg, nu 250 mg; izoniazida nu este 2 zile.','Sulfadiazina este alternativa de alergie din RAA, nu de elecție la splenectomie.','Ciprofloxacina 500 mg unică este alternativa meningococică, nu izoniazida.']],
 8,'Distractorii permută 250 mg (RAA) cu 500 mg (splenectomie) și izoniazida de 6 luni cu doza unică de ciprofloxacină.',['250 mg','300 mg zilnic']),

q(72,['În infecțiile severe streptococice, benzilpenicilina se caracterizează prin:',
 ['Rămâne de primă intenție în anumite infecții severe, inclusiv endocardita streptococică și infecțiile cu streptococ de grup A care produc fasceită necrozantă sau gangrenă gazoasă, în general combinate cu alte antibiotice','Nu trebuie folosită empiric în infecțiile severe fără confirmarea sensibilității, din cauza creșterii rezistenței','Se dă empiric la orice sepsis comunitar, fără cultură, fiind inactivă pe S. pyogenes','Înlocuiește debridarea în fasceita necrozantă, combinațiile fiind inutile','Este rezervată ITU joase, ca nitrofurantoina'],'AB',163,'Penicilinele — Benzilpenicilina în infecții severe',
 'Reținerea indicațiilor (EI streptococică, fasceită/gangrenă gazoasă, de regulă în combinație) și a interdicției empirice fără sensibilitate.',
 ['Indicațiile severe și combinațiile sunt din paragraf.','Regula „nu empiric fără laborator” este explicită.','Este activă pe S. pyogenes; empiricul fără sensibilitate este descurajat.','Debridarea rămâne controlul sursei; antibioticul se asociază.','ITU joasă nu este indicația benzilpenicilinei.']],
 8,'Distractorii transformă interdicția empirică într-un empiric universal și anulează debridarea din fasceită.',['fasceită necrozantă','gangrenă gazoasă']),

q(73,['Cefalosporinele de generația a doua și a treia sunt rezervate anumitor infecții severe deoarece:',
 ['Tratamentul empiric al infecțiilor Gram-negative poate deveni ineficient din cauza ESBL și se asociază cu risc crescut de infecție cu C. difficile','Sunt inactivate de toate penicilinazele stafilococice, spre deosebire de peniciline','Enterococul și anaerobii Gram-negativi sunt acoperiți predictibil, ESBL-ul fiind irelevant','C. difficile este prevenit de aceste generații, ESBL-ul neafectând cefalosporinele','Se preferă empiric larg la ITU joasă, în loc de nitrofurantoină'],'A',163,'Cefalosporinele — Generațiile II-III',
 'Identificarea dublului motiv de rezervare: ESBL (ineficacitate empirică) și riscul de C. difficile.',
 ['ESBL și C. difficile sunt cele două argumente de rezervare.','Textul spune că NU sunt inactivate de penicilinazele stafilococice (cu nuanța generației a cincea).','Enterococul și anaerobii Gram-negativi sunt excepții de spectru.','Relația cu C. difficile și ESBL este inversă.','KPI-ul de ITU joasă promovează nitrofurantoina, nu cefalosporina empirică largă.']],
 8,'Distractorii inversează avantajul față de penicilinaze și neagă riscul de C. difficile, cele două axe ale paragrafului.',['C. diffici/e','generaţia a doua şi a treia']),

q(74,['Conform Cadranului 8.8, schemele de doză uzuale în sepsis includ:',
 ['Piperacilină/tazobactam: (4 g + 0,5 g) ×3 i.v. standard, până la ×4 i.v. ca doză maximă','Gentamicină 5 mg/kg ×1 i.v. (maxim 7 mg/kg); amikacină 20 mg/kg ×1 i.v. (maxim 30 mg/kg)','Fosfomicină orală 3 g în doză unică','Meropenemul în meningită: 2 g ×3 i.v. în 30 min (sau 3 ore)','Gentamicina se administrează 3 g oral o dată, identic fosfomicinei de ITU'],'ABCD',162,'Cadranul 8.8 — Doze uzuale în sepsis',
 'Reținerea tazocinului 4+0,5 g ×3/×4, a aminoglicozidelor 5 versus 20 mg/kg, a fosfomicinei 3 g unică și a meropenemului 2 g ×3 în meningită.',
 ['Schema 4+0,5 g ×3 și maximul ×4 sunt din tabel.','5 mg/kg (max 7) versus 20 mg/kg (max 30) deosebesc gentamicina de amikacină.','3 g doză unică orală este fosfomicina.','2 g ×3 i.v. în 30 min (sau 3 ore) este nota de meningită a meropenemului.','3 g unică este fosfomicina, nu gentamicina.']],
 8,'Distractorul permută 3 g de fosfomicină pe gentamicină, în timp ce celelalte opțiuni sunt doze din același cadran.',['4 g piperacilină','3 g x 1 p.o.']),

q(75,['La un pacient cu pneumonia asociată ventilației și o Acinetobacter producătoare de carbapenemază, capitolul plasează tigeciclina astfel:',
 ['Este folosită tot mai mult în combinație (ex. cu polimixine) pentru Gram-negativi foarte rezistenți producători de carbapenemază, dar avertismentul FDA din 2010 cere îndrumare de specialist în infecții severe, mai ales VAP','Este monoterapia de elecție a VAP, superioară combinațiilor, fără avertisment de eficacitate','Este inactivă pe Acinetobacter, fiind rezervată Pseudomonas','Antiacidele și fierul îi cresc eficiența în VAP','Fotosensibilitatea de 1/20 o contraindică doar la ventilați, nu la SSTI'],'A',165,'Tigeciclina — Combinații și VAP',
 'Aplicarea dublei nuanțe: uz în combinație pe carbapenemaze versus slăbirea FDA în VAP.',
 ['Combinația cu polimixine și avertismentul FDA pe VAP sunt din același paragraf.','FDA slăbește, nu promovează, monoterapia în VAP.','Acinetobacter este inclus; Pseudomonas este exceptat.','Antiacidele și fierul reduc eficiența tetraciclinelor.','Fotosensibilitatea 1/20 este a clasei, nu o regulă doar de VAP.']],
 8,'Vigneta cere coexistența uzului pe carbapenemaze cu avertismentul FDA pe VAP, două mesaje opuse din același paragraf.',['pneumonia asociată','polimixine']),
];
