import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-329;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('urologie',29,pdfOffset,`urologie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const UROLOGIE_B=[
q(43,['Raportul PSA liber/PSA total sub 20–25%, la un bărbat cu PSA total moderat crescut, se asociază mai frecvent cu:',
 ['Carcinomul prostatic, față de HBP, în care predomină fracția liberă','HBP izolată, fără risc de carcinom','Prostatita acută cu E. coli, care scade PSA-ul total','Un nivel <4,0 ng/mL, considerat normal indiferent de vârstă','Scorul Gleason 2–4, bine diferențiat, descoperit doar la autopsie'],'A',639,'PSA — Fracția liberă versus totală',
 'Interpretarea raportului liber/total <20–25% ca orientare către carcinom, față de fracția liberă mai mare din HBP.',
 ['Textul asociază un raport procentual PSA-liber/PSA-total <20–25% mai frecvent cu carcinomul, comparativ cu HBP.','În HBP, proporția componentei libere este mai mare.','Prostatita nu este interpretarea acestui raport.','Un PSA <4 ng/mL este „normal” convențional, dar 20–25% dintre cancere au PSA în acest interval; pragul se ajustează după vârstă.','Gleason 2–4 nu este concluzia raportului liber/total.']],
 8,'Inversează direcția raportului liber/total (carcinom versus HBP) și ignoră cancerele cu PSA <4 ng/mL (20–25%).',['20-25%','PSA-liber']),

q(44,['Ultrasonografia transrectală și biopsia de prostată:',
 ['Carcinoamele sunt localizate, de regulă, în zona periferică și au un tipar clasic hipoecogen','TRUS nu este metodă de screening, din cauza lipsei de sensibilitate și specificitate; ghidează biopsia','Se recoltează, de regulă, 10–14 fragmente, după clismă și premedicație cu o fluorochinolonă 1–2 zile','TRUS înlocuiește tușeul rectal și PSA-ul ca screening de primă intenție','Biopsia se face fără antibiotic, riscul infecțios fiind neglijabil'],'ABC',639,'Carcinom prostatic — TRUS și biopsie',
 'Recunoașterea pattern-ului hipoecogen periferic, a limitei de screening a TRUS și a protocolului 10–14 fragmente plus fluorochinolonă.',
 ['Sediul periferic și aspectul hipoecogen sunt explicite.','TRUS nu este screening; ghidează puncția la tușeu sau PSA anormal.','Numărul 10–14, clisma și fluorochinolona 1–2 zile sunt descrise.','Screening-ul rămâne clinic și biochimic; TRUS nu le înlocuiește.','Premedicația antibiotică este necesară.']],
 8,'Transformă TRUS-ul din ghid de biopsie în test de screening și omite antibioterapia peri-puncție.',['hipoecogen','fluorochinolonă']),

q(45,['În clasificarea traumatismelor renale, gradele I și II sunt considerate:',
 ['Minore; gradele III, IV și V sunt majore','Majore, cu indicație de nefrectomie de principiu','Echivalente avulsiei pediculului (gradul V)','Prezente doar în traumatismul penetrant, nu în cel închis','Diagnosticate clinic, fără CT, chiar la macrohematurie'],'A',644,'Traumatisme renale — Gradele I–II versus III–V',
 'Separarea gradelor I–II (minore: contuzie, hematom subcapsular, lacerație <1 cm fără extravazare) de gradele III–V majore.',
 ['Figura și textul consideră gradele I și II minore, iar III–V majore.','Nefrectomia nu este regula gradelor minore.','Avulsia pediculului definește un pattern de grad V.','Clasificarea se aplică și traumatismului închis.','Imagistica (adesea CT) stadializează leziunea.']],
 8,'Umflă gradele I–II la nivelul avulsiei de pedicul (grad V), confuzie de scară din aceeași figură.',['Gradele I şi li','majore']),

q(46,['Pielonefrita acută necomplicată versus forma obstructivă:',
 ['În 80% din cazuri, microorganismul implicat este Escherichia coli','Forma necomplicată se tratează, de elecție, cu antibioterapie orală în ambulatoriu','Forma obstructivă (de exemplu calcul ureteral) este urgență urologică: imagistică imediată și drenaj prin stent dublu J sau nefrostomie percutanată','Febra și durerea lombară dispar în câteva ore sub oral, deci CT-ul de control este inutil dacă persistă zile','Obstrucția septică sub presiune este mai benignă decât un abces, nefiind nevoie de drenaj'],'ABC',644,'Pielonefrita — E. coli, ambulatoriu și urgența obstructivă',
 'Aplicarea etiologică (E. coli 80%), a tratamentului oral ambulatoriu și a drenajului de urgență în obstrucție, versus persistența febrilă de zile.',
 ['Ponderea de 80% a E. coli este explicită.','Antibioterapia orală ambulatorie este tratamentul de elecție al formei necomplicate.','Stentul dublu J sau nefrostomia percutanată de urgență sunt cerute în obstrucție.','Febra și durerea pot persista câteva zile sub antibiotic; persistența mai lungă impune reimagistică pentru abces.','Obstrucția infectată sub presiune este asemănătoare unui abces, dar mai gravă.']],
 8,'Minimizează urgența pielonefritei obstructive și tratează febra de câteva zile ca eșec care cere CT imediat.',['E. coli','stent ureteral'],[645]),

q(47,['Tratamentul carcinomului cu celule tranziționale al sistemului pielo-caliceal este:',
 ['Nefroureterectomia, cu îndepărtarea unei porțiuni de vezică la orificiul ureteral','Nefrectomia parțială, analog tumorilor mici de celule clare','Rezecția transuretrală vezicală izolată, ca în Ta/T1','Instilații cu BCG, fără abordarea căii superioare','Observație, citologia urinară negativă excluzând diagnosticul'],'A',646,'Carcinomul cu celule tranziționale — Nefroureterectomie',
 'Recunoașterea nefroureterectomiei cu manșon vezical, impusă de implicarea orificiului ureteral ipsilateral.',
 ['Textul numește nefroureterectomia, cu îndepărtarea unei porțiuni de vezică la orificiul ureteral, tratamentul acestor leziuni.','Nefrectomia parțială este opțiunea CRCC-ului mic, nu a carcinomului tranzițional de cale superioară.','TURBT vizează tumorile vezicale superficiale, nu pielo-calicealul.','BCG este descris la Tis vezical, nu ca unică terapie a căii superioare.','Citologia poate fi negativă; ureteroscopia este de obicei necesară pentru diagnostic definitiv.']],
 8,'Confundă nefroureterectomia de cale superioară cu nefrectomia parțială a CRCC sau cu TURBT/BCG vezical.',['Ureteroscopia','celule tranziţionale'],[647]),

q(48,['Hipospadiasul se caracterizează prin:',
 ['Este una dintre cele mai frecvente anomalii congenitale, întâlnită la 1 din 300 de nou-născuți','Meatul uretral este localizat pe fața ventrală a penisului, proximal de poziția normală din vârful glandului','Clasificarea se bazează pe localizarea meatului, care poate fi perineal, penoscrotal, penian, coronal sau glandular','Meatul este pe fața dorsală, distal de gland','Prepuțul este complet circular, identic penisului normal'],'ABC',667,'Hipospadiasul — Incidență și clasificare',
 'Potrivirea incidenței 1:300, a meatului ventral și a celor cinci nivele de clasificare, față de prepuțul incomplet dorsal.',
 ['Incidența 1 din 300 și caracterul de anomalie congenitală frecventă sunt explicite.','Localizarea ventrală, proximal de vârful glandului, este descrisă.','Cele cinci sedii ale meatului definesc clasificarea.','Meatul hipospadic nu este dorsal.','Prepuțul este incomplet dezvoltat, prezent ca un șorț pe fața dorsală.']],
 8,'Mută meatul pe fața dorsală și descrie un prepuț circular, două inversiuni anatomice din același paragraf.',['Hipospadiasul','Clasificarea hipospadiasului']),

q(49,['Leziunea iatrogenă a ureterului distal, recunoscută intraoperator, se repară de elecție prin:',
 ['Reimplantare ureterală','Anastomoză termino-terminală pe ureterul lombar, fără reimplantare','Nefrectomie de principiu, ureterul distal neputând fi reconstruit','Ligatură simplă, refluxul fiind de dorit','Uretrostomie perineală, ca în penectomia totală'],'A',649,'Leziuni iatrogene ureterale — Reimplantarea distală',
 'Diferențierea reimplantării (lezare distală) de anastomoza termino-terminală (lezare mai proximală) și de nefrostomia din câmp contaminat.',
 ['Textul numește reimplantarea ureterală intervenția de elecție când este lezat ureterul distal.','Anastomoza primară termino-terminală plus stent este pentru leziuni care permit sutura cap-la-cap, nu regula distalui.','Nefrectomia nu este reparația de primă intenție.','Ligatura nu restabilește continuitatea.','Uretrostomia perineală ține de penectomia totală, nu de ureterul distal.']],
 8,'Schimbă reimplantarea distală cu anastomoza T-T sau cu nefrostomia din câmp contaminat, trei opțiuni din același paragraf.',['reimplantarea ureterală','Leziunile iatrogene']),

q(50,['Identificați afirmația corectă referitoare la evaluarea rupturii vezicale:',
 ['Cistografia este investigația imagistică cu mare acuratețe; la adult se introduc circa 350 mL de contrast steril','Se introduc doar 50 mL de contrast, analog cistografiei de reflux a sugarului','Contuziile vezicii nu produc hematurie, spre deosebire de rupturi','La inconștient, suspiciunea clinică este superfluă, hematuria lipsind constant','Ecografia renală izolată înlocuiește cistografia ca test de elecție'],'A',653,'Ruptura vezicală — Cistografie și uretrografie',
 'Recunoașterea cistografiei (circa 350 mL) ca investigație de elecție și a uretrografiei înaintea sondei când există sânge la meat.',
 ['Textul numește cistografia investigația cu mare acuratețe și precizează circa 350 mL contrast la adult.','Volumul citat la adult este circa 350 mL, nu 50 mL.','Contuziile provoacă cel mai des hematurie.','La inconștient este esențial un grad ridicat de suspiciune.','Cistografia, nu ecografia renală izolată, este testul citat pentru ruptură.']],
 8,'Permutează volumul de 350 mL al cistografiei de adult cu 50 mL și anulează hematuria contuziei.',['cistografia','350 mL'],[654]),

q(51,['Cauze urologice care trebuie tratate în infecțiile urinare recurente, conform tabelului 29-1, includ:',
 ['Hipertrofia prostatei, strictura de uretră și litiaza','Prostatita cronică bacteriană și refluxul vezico-ureteral','Corpii străini, fistula vezico-vaginală sau vezico-intestinală și chistul de uracă','Rinita alergică și polipoza nazală, prin picătură postnazală','Hernia de disc L4–L5, în absența retenției'],'ABC',655,'ITU recurente — Tabelul 29-1',
 'Recunoașterea listei de cauze anatomice corectabile (obstrucție, litiază, reflux, fistulă, uracă), versus cauze extra-urinare.',
 ['HBP, strictura și litiaza figurează în tabel.','Prostatita cronică bacteriană și RVU figurează în tabel.','Corpii străini, fistulele și chistul de uracă figurează în tabel.','Patologia nazală nu este o cauză urologică din tabel.','Hernia de disc nu figurează ca atare în tabelul 29-1.']],
 8,'Amestecă lista urologică a tabelului 29-1 cu cauze ORL sau ortopedice din alte capitole.',['Hipertrofia prostatei','Chistul de uracă']),

q(52,['Vezica neurologică autonomă (lezare sacrală, con, coadă de cal sau plex) se caracterizează prin:',
 ['Contracții detrusoriene voluntare sau involuntare ineficiente pe cistomanometrie','Volum rezidual postmicțional de obicei crescut, micțiunea putând fi susținută prin creșterea presiunii abdominale','Senzație micțională scăzută sau absentă, cu complianță variabilă','Acest tip de vezică rezultă din leziuni medulare sacrate, ale conului medular, ale cozii de cal sau ale plexului sacrat','Disreflexie autonomă cu hipertensiune severă, tipică leziunilor deasupra T6, nu leziunii sacrale'],'ABCD',658,'Vezica neurogenă — Tipul autonom (tabelul 29-2)',
 'Separarea vezicii autonome (contracții ineficiente, PVR crescut) de hiperreflexia cu dissinergie a leziunii deasupra S2 și de disreflexia de peste T6.',
 ['CMG-ul cu contracții ineficiente este explicit.','PVR crescut și micțiunea prin presă abdominală sunt descrise.','Senzația scăzută/absentă și complianța variabilă sunt enunțate.','Originea sacrală, conul, coada de cal și plexul sunt enumerate.','Disreflexia autonomă figurează la leziunile deasupra T6.']],
 8,'Confundă vezica autonomă sacrală cu dissinergia de deasupra S2 și cu disreflexia T6, trei linii vecine din tabel.',['Disreflexie autonomă','conului medular']),

q(53,['Vezica neurologică senzorială (tabes dorsal, diabet, siringomielie, anemie pernicioasă) se recunoaște prin:',
 ['Scăderea sau lipsa senzației de micțiune, fără hiperreflexie detrusoriană, cu capacitate vezicală mare','Pareza motorie izolată, cu senzație păstrată, ca în poliomielită','Detrusor hiperreflex și incontinență de imperiozitate, ca în Parkinson','Contracții neinhibate cu sfincter striat dissinergic, ca în leziunea medulară deasupra S2','Necesitatea de a urina la 350–500 mL, identică vezicii normale'],'A',658,'Vezica neurogenă senzorială',
 'Identificarea absenței senzației fără hiperreflexie și a capacității mari, distincte de vezica motorie și de hiperreflexia cerebrală.',
 ['Textul definește astfel vezica neurologică senzorială și enumeră tabesul, diabetul, siringomielia și anemia pernicioasă.','Pareza motorie cu senzație prezentă este un alt tip (motor).','Parkinson produce detrusor hiperreflex.','Dissinergia striată este a leziunii deasupra S2.','350–500 mL este umplerea normală fără creștere de presiune, nu tabloul senzorial.']],
 8,'Schimbă vezica senzorială (capacitate mare, fără hiperreflexie) cu hiperreflexia Parkinson sau cu dissinergia medulară.',['tabesului dorsal','capacitate vezicală mare']),

q(54,['Disreflexia autonomă, cu transpirație, cefalee, hipertensiune severă sau spasticitate, apare tipic în leziunile neurologice:',
 ['Deasupra T6','Deasupra trunchiului cerebral, ca tumorile cerebrale','Doar în diabetul zaharat, prin neuropatie autonomă periferică','În mielodisplazie, cu detrusor areflex izolat','După chirurgie pelvină radicală, cu retenție prin areflexie'],'A',658,'Disreflexia autonomă — Pragul T6',
 'Fixarea pragului T6 pentru disreflexia autonomă, distinct de hiperreflexia cerebrală și de areflexia sacrală.',
 ['Tabelul 29-2 plasează disreflexia autonomă la leziunile deasupra T6.','Leziunile deasupra trunchiului produc contracții involuntare, fără a fi linia disreflexiei T6.','Diabetul figurează cu senzație alterată și contractilitate scăzută.','Mielodisplazia asociază retenție și disfuncție vezicală, nu disreflexie T6.','Chirurgia pelvină radicală produce retenție, nu disreflexie de T6.']],
 8,'Mută disreflexia de la T6 la leziunile cerebrale sau sacrale din același tabel.',['Disreflexie autonomă','T6']),

q(55,['Eritroplazia Queyrat, leziune premalignă peniană, se caracterizează prin:',
 ['Leziune roșiatică, în relief, la nivelul glandului sau șanțului coronal, histologie de carcinom in situ; tratament prin fulgurație laser, excizie sau 5-fluorouracil topic','Placă albicioasă cu acantoză și hiperkeratoză, tratată doar prin observație','Condilom acuminat gigant, fără invazie în țesuturile subiacente','Placă roșie solitară pe corpul penian (boala Bowen), care nu este carcinom in situ','Balanită xerotică obliterantă, fără opțiune de steroizi topici sau excizie'],'A',661,'Leziuni peniene premaligne — Tabelul 29-3',
 'Diferențierea eritroplaziei Queyrat (CIS de gland/șanț, 5-FU) de leukoplakie, Bowen de corp și BXO.',
 ['Tabelul descrie exact morfologia, sediul, CIS și tratamentul (laser, excizie, 5-FU).','Placa albicioasă cu acantoză este leukoplakia, tratată prin excizie.','Condiloamele gigante prezintă invazie în țesuturile subiacente.','Bowen este CIS pe corpul penian, nu „non-CIS”.','BXO se tratează prin excizie și steroizi topici.']],
 8,'Permutează liniile tabelului 29-3 (Queyrat, Bowen, leukoplakie, BXO), toate CIS sau premaligne ale penisului.',['Eritroplazia Queyrat','5-fluorou']),

q(56,['Boala Peyronie în faza imatură (de obicei peste 6 luni, cu erecții dureroase și încurbare progresivă):',
 ['Chirurgia este contraindicată; managementul este conservator (colagenază, vitamina E, eventual potaba sau colchicină)','Faza matură, cu încurbare staționară 6 luni și remiterea durerii, permite corecție chirurgicală dacă deviația împiedică actul sexual','Placa este mai frecvent dorsală, pe tunica albuginee a corpilor cavernoși','Chirurgia imediată a plăcii, în faza dureroasă progresivă, este tratamentul de primă intenție','Toate tratamentele medicale au rată înaltă de succes, deci observația este inutilă'],'ABC',663,'Boala Peyronie — Faza imatură versus matură',
 'Recunoașterea contraindicației chirurgicale în faza imatură (>6 luni dureroasă) și a ferestrei de maturitate (staționar 6 luni, fără durere).',
 ['Contraindicația chirurgicală și lista conservatoare sunt explicite.','Definiția bolii mature și indicația de corecție sunt enunțate.','Predilecția dorsală pe albuginee este descrisă.','Chirurgia imediată în faza imatură este contraindicată.','Textul precizează că niciun tratament medical nu are rată semnificativă de succes; adesea există rezoluție spontană.']],
 8,'Operează placa în faza dureroasă imatură și supraestimează succesul medical, două erori de timing.',['Peyronie','6 luni']),

q(57,['Contraindicațiile circumciziei includ:',
 ['Mielodisplazia și hipospadiasul, deoarece prepuțul poate fi folosit pentru plastia uretrei','Fimoza simptomatică, care este o indicație, nu o contraindicație','Decizia parentală, listată ca indicație în SUA','Balanita recurentă, care constituie o indicație','Parafimoza ireductibilă după eșecul compresiei, care poate necesita incizie și circumcizie ulterioară'],'A',664,'Circumcizia — Contraindicații',
 'Recunoașterea mielodisplaziei și a hipospadiasului ca situații în care prepuțul trebuie păstrat pentru reconstrucție uretrală.',
 ['Textul numește mielodisplazia și hipospadiasul contraindicații, prepuțul putând fi folosit la plastia uretrei.','Fimoza este o indicație.','Decizia parentală figurează printre indicații.','Balanitele/infecțiile locale sunt context de indicație, nu contraindicație de principiu.','După reducerea parafimozei, circumcizia se practică după remisia edemului, deci nu este contraindicație absolută.']],
 8,'Transformă indicațiile (fimoza, decizia parentală) în contraindicații și pierde salvarea prepuțului pentru hipospadias.',['mielodisplazia','hipospadiasul']),

q(58,['Seminomul în stadiile I și IIa se tratează, de obicei, cu:',
 ['Doze moderate de radioterapie retroperitoneală','Limfodisecție retroperitoneală de primă intenție, ca în non-seminomul stadiul I','Chimioterapie de salvare doar după eșecul supravegherii fără imagistică','Orhidectomie scrotală, fără clamparea cordonului','Instilații endovezicale cu BCG, ca în Tis vezical'],'A',671,'Seminomul — Radiosensibilitate',
 'Recunoașterea radiosensibilității seminomului I/IIa, distinctă de RPLND-ul non-seminomului și de chimioterapia cu platină a bolii voluminoase.',
 ['Textul atribuie stadiilor I și IIa doze moderate de radioterapie retroperitoneală.','RPLND este o opțiune bună pentru non-seminomul stadiul I.','Boala metastatică voluminoasă sau la distanță primește platină ca primă linie.','Abordul este inghinal, cu clamparea cordonului, nu scrotal.','BCG este terapia Tis vezical, nu a seminomului.']],
 8,'Aplică RPLND-ul non-seminomului pe seminomul radiosensibil I/IIa.',['radiosensibilă','Stadiile I şi Ila']),

q(59,['Pentru tumorile testiculare non-seminomatoase avansate sau metastatice, chimioterapia pe bază de săruri de platină obține o supraviețuire la 5 ani care:',
 ['Depășește 70%, chiar și în boala metastatică','Rămâne sub 10%, analog recidivei carcinomului vezical netratat endoscopic','Este nulă fără limfodisecție scrotală','Depinde de radioterapia retroperitoneală, seminomul fiind chemo-rezistent','Impune BCG endovezical concomitent'],'A',671,'Non-seminomul metastatic — Platină',
 'Memorarea supraviețuirii >70% la 5 ani sub platină, inclusiv în boala metastatică, urmată de rezecția maselor reziduale.',
 ['Textul citează o rată de supraviețuire la 5 ani care depășește 70%, chiar în boala metastatică.','Sub 10% nu este cifra acestui paragraf.','Limfodisecția este retroperitoneală, nu scrotală, și nu este condiția unică a supraviețuirii.','Seminomul este radiosensibil; platina este prima linie a bolii voluminoase.','BCG nu are rol în GCT testicular.']],
 8,'Înlocuiește pragul >70% cu recidiva de 50% a vezicii sau cu radiosensibilitatea seminomului.',['70%','săruri de platină']),

q(60,['Dificultățile de concepție ale cuplurilor recent căsătorite:',
 ['Afectează 15% dintre cupluri','60% dintre cuplurile fertile concep în primele 3 luni fără contracepție; procentul crește la 90% la 1 an','Cauza este, în peste 85% din cazuri, o disfuncție erectilă psihologică izolată','Volumul redus de ejaculat nu are relevanță, densitatea spermei fiind singurul parametru','Fructoza din ejaculat este produsă de prostată, nu de veziculele seminale'],'AB',671,'Infertilitatea masculină — Epidemiologie',
 'Aplicarea cifrelor 15%, 60% la 3 luni și 90% la 1 an, înaintea evaluării de laborator a ejaculatului.',
 ['Procentul de 15% este explicit.','60% la 3 luni și 90% la 1 an sunt citate.','Peste 85% organic privește disfuncția erectilă, nu infertilitatea de cuplu.','Volumul redus este o cauză recunoscută de probleme de fertilitate.','Fructoza este produsă de veziculele seminale.']],
 8,'Amestecă 15% (infertilitate) cu 85% (DE organică) și mută fructoza din vezicule în prostată.',['15%','90%'],[672]),

q(61,['Ejacularea retrogradă și obstrucția ductelor ejaculatoare:',
 ['Diagnosticul ejaculării retrograde se pune prin spermă în prima urină după ejaculare; tratamentul inițial este un simpatomimetic (pseudoefedrină)','Absența fructozei în ejaculat indică lipsa lichidului din veziculele seminale','Ecografia transrectală evaluează obstrucția ductului, adesea tratabilă prin rezecție transuretrală a stenozei','Dacă simpatomimeticele eșuează, spermatozoizii pot fi recoltați din vezică, spălați și folosiți pentru inseminare intrauterină','Simpatomimeticele sunt contraindicate, recolta vezicală fiind primul gest'],'ABCD',672,'Infertilitatea — Ejaculare retrogradă și fructoză',
 'Înlănțuirea urinei post-ejaculare, a pseudoefedrinei, a fructozei ca marker al veziculelor și a TUR a stenozei de duct.',
 ['Spermă în urina post-ejaculare și pseudoefedrina sunt explicite.','Absența fructozei ca semn de lipsă a lichidului din vezicule este enunțată.','TRUS și rezecția transuretrală a stenozei sunt descrise.','Recolta vezicală după eșecul simpatomimeticelor este descrisă.','Medicația simpatomimetică este primul pas; recolta vezicală urmează dacă eșuează.']],
 8,'Inversează ordinea pseudoefedrină–recoltă vezicală și atribuie fructozei o origine hipotalamică.',['fructozei','pseudoefedrina']),

q(62,['Inhibitorii de PDE-5 în disfuncția erectilă:',
 ['Sunt extrem de eficienți la majoritatea pacienților; alternativele se iau în considerare numai dacă eșuează','Peste 85% dintre bărbații cu DE au o afectare organică, nu doar psihologică','Sunt rezervați cazurilor psihogene, organicul cerând proteză de la prima consultație','Vacuum-ul și alprostadilul intrauretral preced de principiu orice PDE-5','Heparina și warfarina sunt adjuvante de primă intenție ale PDE-5, înaintea oricărei alte măsuri'],'AB',673,'Disfuncția erectilă — PDE-5 ca primă linie',
 'Recunoașterea predominanței organice (>85%) și a PDE-5 ca primă linie, înaintea vacuum-ului, alprostadilului sau protezei.',
 ['Eficiența la majoritatea și rezervarea alternativelor după eșec sunt explicite.','Ponderea organică de peste 85% este citată pe pagina anterioară.','Organicul nu sare peste PDE-5 la proteză.','Vacuum-ul, alprostadilul și injecțiile sunt opțiuni ulterioare.','Anticoagularea nu face parte din algoritmul PDE-5.']],
 8,'Pune proteza sau vacuum-ul înaintea PDE-5 și inversează ponderea 85% organic versus psihogen.',['PDE-5','85%'],[672]),
];
