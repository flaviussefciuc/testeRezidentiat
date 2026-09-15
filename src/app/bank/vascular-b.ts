import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p<=527?p-315:p-321;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('vascular',26,pdfOffset,`vascular-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const VASCULAR_B=[
q(7,['Anevrismele de arteră femurală, comparativ cu cele poplitee:',
 ['Au morbiditate redusă, embolizează și se trombozează mai rar; tratamentul este bypass cu interpoziție de grefă, graft-stentul nefiind recomandat în zona de mobilitate (risc de tromboză și ruptură)','Se tratează de principiu cu graft-stent, mobilitatea regiunii crescând patența','Embolizează mai frecvent decât cele poplitee, bypass-ul fiind evitat','Sunt identice anevrismelor aortice, EVAR fiind prima linie','Nu se operează, riscul trombotic fiind nul'],'A',520,'Anevrismul arterei femurale',
 'Contrastarea riscului mai mic față de popliteu și a contraindicației de stent-graft în zona de flexie.',
 ['Morbiditatea redusă, embolizarea rară și bypass-ul (nu stent-graft) sunt explicite.','Stent-graftul este nrecomandat tocmai din cauza mobilității.','Popliteele, nu femuralele, embolizează/trombozează mai des.','EVAR ține de aorta abdominală.','Tratamentul implică bypass cu interpoziție.']],
 8,'Pune stent-graftul — contraindicat în zona de flexie — ca tratament de elecție al anevrismului femural.',['arteră femurală','graft-stent']),

q(8,['Legea Poiseuille aplicată stenozei arteriale:',
 ['Căderea de presiune este direct proporțională cu fluxul și lungimea, dar invers proporțională cu pătratul razei; reducerea razei are efectul cel mai mare','ΔP rămâne mică până la îngustarea diametrului cu 50% sau a ariei cu 75%; apoi presiunea și fluxul distal scad exponențial','Vasul se adaptează inițial mărindu-și diametrul total (remodelare Glagov); după stenoza >40% adaptarea se epuizează','ΔP scade când raza scade, stenoza de 20% prăbușind fluxul','Aria trebuie redusă cu 10% pentru a egala o stenoză de diametru de 50%'],'ABC',520,'Fiziologie — Poiseuille și pragul de stenoză',
 'Aplicarea relației ΔP ∝ 1/r² și a pragurilor 50% diametru / 75% arie, plus remodelarea până la 40%.',
 ['Proporționalitățile și predominanța razei sunt explicite.','Pragurile 50% diametru și 75% arie sunt citate.','Remodelarea compensatorie până la >40% este pe pagina următoare.','ΔP crește când raza scade.','75% arie, nu 10%, corespunde stenozei de 50% diametru.']],
 8,'Permutează 50% diametru cu 75% arie și inversează relația rază–ΔP.',['50%','75%'],[521]),

q(9,['Evoluția naturală a claudicației netratate, în studiul Framingham:',
 ['Riscul de amputație a fost de numai 5% la 5 ani dacă claudicația a fost tratată conservator','Renunțarea la fumat și exercițiile supravegheate ameliorează sau dispar simptomele la 50% dintre pacienți; cea mai frecventă cauză de deces este ateroscleroza sistemică (evenimente cardiace sau cerebrale)','Amputația survine la 50% în primul an, decesul fiind prin ischemie de membru, nu cardiacă','Exercițiile agravează claudicația și sunt evitate','Fumatul nu influențează simptomele, mortalitatea fiind independentă de ateroscleroza sistemică'],'AB',521,'Claudicația — Framingham și prognostic',
 'Contrastarea amputației de 5%/5 ani cu ameliorarea de 50% prin fumat/exercițiu și cu decesul cardio-cerebral.',
 ['Cifra Framingham 5% la 5 ani este explicită.','50% ameliorare și decesul cardiac/cerebral sunt citate.','5%, nu 50% în primul an, este riscul de amputație; decesul este sistemic.','Exercițiile supravegheate ameliorează.','Fumatul și ateroscleroza sistemică sunt centrali.']],
 8,'Permutează 5% (amputație) cu 50% (ameliorare) și mută cauza decesului de pe cord/creier pe membru.',['5% la','50% din pacienţii']),

q(10,['Localizarea simptomelor în funcție de nivelul ocluziei:',
 ['Ocluzia aorto-iliacă determină sindromul Leriche: impotență, claudicație a extremităților inferioare și atrofie fesieră','Ocluzia AFS provoacă claudicație de gambă, nu de coapsă, coapsa fiind alimentată de AFP','Grupele musculare afectate de claudicație se află distal de obstrucția arterială; articulațiile și piciorul sunt scutite, masa musculară fiind redusă','Ocluzia AFS claudică la coapsă, AFP neavând rol','Leriche asociază doar durere de repaus nocturnă, fără impotență'],'ABC',521,'Claudicație — Leriche și AFS',
 'Maparea Leriche (aorto-iliac) versus claudicația de gambă din AFS, cu scutirea piciorului.',
 ['Triada Leriche este explicită.','Gamba, nu coapsa, și rolul AFP sunt citate.','Regula „distal de obstrucție” și scutirea piciorului sunt descrise.','AFS nu claudică la coapsă.','Leriche include impotența, nu doar durerea de repaus.']],
 8,'Mută claudicația AFS pe coapsă și golește Leriche de impotență, două localizări din același paragraf.',['sindromul Leriche','arterei femurale profunde']),

q(11,['Durerea ischemică de repaus se caracterizează prin:',
 ['Dureri la degete și epifizele distale metatarsiene, mai ales noaptea; alinarea temporară prin poziție declivă sau câțiva pași, presiunea hidrostatică crescând aportul de oxigen','Crampe nocturne de gambă, fără modificări ischemice cutanate, identice ca mecanism','Paloare de declivitate și eritroză la ridicare, inversul semnului Buerger','Dispariție la ridicarea piciorului, hidrostatica neavând rol','Este un echivalent de claudicație de gambă, articulațiile fiind sediul tipic'],'A',521,'Durerea de repaus ischemică',
 'Recunoașterea sediului distal (degete/metatarsiene), a predilecției nocturne și a alinării prin declivitate.',
 ['Sediul, nocturnul și alinarea declivă prin presiune hidrostatică sunt explicite.','Crampele de gambă se diferențiază tocmai prin localizare și absența ischemiei cutanate.','În Buerger, declivitatea produce rubor, ridicarea paloare.','Ridicarea scade presiunea hidrostatică și agravează ischemia.','Piciorul distal, nu gamba/articulațiile, este sediul.']],
 8,'Confundă durerea de repaus (degete) cu crampele de gambă, distincția din același paragraf.',['Durerea de repaus','poziţionarea declivă']),

q(12,['Ulcerele de gambă/picior și prognosticul ischemiei avansate:',
 ['Ulcerele arteriale sunt dureroase (exceptând diabeticul neuropat), circumscrise, cu bază palidă sau necrotică, la degete, călcâie sau fața dorsală','Ulcerele venoase apar de obicei imediat deasupra maleolelor, în treimea inferioară a gambei','Ulcerele diabetice sunt nedureroase, plantare sau laterale, în zone de presiune, pe fond de picior Charcot','Netratată, durerea de repaus duce la amputație la aproape 50%; diabeticul cu membru amputat are supraviețuire la 2 ani de 50%','Ulcerele arteriale sunt nedureroase și maleolare, identic celor venoase'],'ABCD',521,'Ulcere arteriale, venoase, diabetice',
 'Contrastarea sediului (digital/maleolar/plantar) și a prognosticului 50%/50%.',
 ['Caracterele ulcerului arterial sunt explicite.','Sediul maleolar venos este citat.','Sediul plantar/lateral diabetic și Charcot sunt descrise.','Cele două cifre de 50% (amputație; supraviețuire la 2 ani) sunt pe pagina următoare.','Maleolarul nedureros descrie venosul, nu arterialul.']],
 8,'Egalizează cele trei ulcere pe maleolă și pierde cele două prognostice de 50%.',['maleolelor','rata de supravieţuire la 2 ani'],[522]),

q(13,['Gangrena uscată și umedă, plus amputația:',
 ['Gangrena uscată înseamnă mumificare fără drenaj purulent sau celulită; umeda asociază infecție activă, miros și secreție purulentă','Cea mai frecventă cauză de amputație este diabetul','Prognosticul gangrenei umede este nefavorabil, cu sepsis și pierderea imediată a membrului, dacă nu se elimină necroza și nu se revascularizează','Gangrena uscată este mai septicemică decât umeda și se tratează doar cu antibiotice, fără debridare','Diabetul protejează de amputație, cauza principală fiind claudicația Framingham'],'ABC',522,'Gangrenă și amputație',
 'Diferențierea mumificării uscate de infecția umedă și recunoașterea diabetului ca principală cauză de amputație.',
 ['Contrastul uscat/umed este explicit.','Diabetul ca principală cauză de amputație este citat.','Sepsisul și nevoia de debridare plus revascularizare sunt descrise.','Umeda, nu uscata, este forma septicemică.','Framingham arată amputație rară în claudicație; diabetul conduce amputațiile.']],
 8,'Inversează uscat versus umed și atribuie amputația claudicației, nu diabetului.',['Gangrena uscată','Gangrena umedă']),

q(14,['Alegerea stentului în PTA, potrivit capitolului:',
 ['Stenturile din oțel inoxidabil expandabile pe balon, cu forță radială ridicată, sunt indicate leziunilor focale calcificate de la originea vaselor majore (iliacă comună, renală)','Stenturile auto-expandabile din nitinol sunt mai flexibile, pentru leziuni lungi sau sinuoase (iliacă externă, AFS), dar cu forță radială mai mică; precauție la flexia șoldului/genunchiului (fractură)','Nitinolul, cu forță radială maximă, este de elecție la originea iliacă comună calcificată','Stenturile expandabile pe balon se evită la originea vaselor, fiind rezervate fosei poplitee în flexie','Fractura de stent este imposibilă, flexia articulară neinfluențând dispozitivul'],'AB',524,'Stenturi expandabile versus nitinol',
 'Contrastarea forței radiale (oțel pe balon, origini calcificate) cu flexibilitatea nitinolului pe vase lungi/sinuoase.',
 ['Indicația oțel-balon pe origini calcificate este explicită.','Nitinolul flexibil, forța mai mică și riscul de fractură la flexie sunt citate.','Nitinolul are forță radială mai mică, nu maximă.','Expandabilele pe balon sunt tocmai pentru origini.','Fractura este un risc recunoscut la flexie.']],
 8,'Inversează forța radială și sediul (origine calcificată versus AFS sinuoasă) între cele două stenturi.',['oţel inoxidabil','nitinol']),

q(15,['Restenoza după intervenția endovasculară:',
 ['Apare de obicei între 6 luni și 1 an, prin remodelare și hiperplazie neointimală (proliferare, invazie monocitară, migrare de celule musculare netede, colagen)','Clasificarea TASC ghidează tratamentul după localizare, grad de stenoză și lungime','Patența iliaca cu stent/angioplastie este 70–90% la 1 an; infrainghinal, restenoză/eșec 20–50% la 1 an','Restenoza este excepțională după 6 luni, hiperplazia neointimală fiind protectivă','TASC clasifică doar venele superficiale, fără aplicare arterială'],'ABC',525,'Restenoză, hiperplazie neointimală și TASC',
 'Aplicarea ferestrei 6 luni–1 an, a mecanismului neointimal și a contrastului de patență iliac versus infrainghinal.',
 ['Fereastra 6 luni–1 an și mecanismul inflamator sunt explicite.','TASC după localizare, stenoză și lungime este citat.','70–90% iliac versus 20–50% eșec infrainghinal sunt menționate.','Hiperplazia limitează eficacitatea, nu protejează.','TASC este o clasificare arterială.']],
 8,'Anulează hiperplazia neointimală și permutează patențele iliac/infrainghinal.',['6 luni şi 1 an','TASC']),

q(16,['Bypassurile extra-anatomice se caracterizează prin:',
 ['Sunt opțiuni în abdomen ostil (risc abdominal înalt, laparotomii multiple, infecție): axilo-femural și femuro-femural, cu proteză tunelizată subcutanat, posibil sub anestezie locală plus sedare','Patența este acceptabilă, dar mai redusă decât a aortofemuralului; ocluziile țin de hiperplazie anastomotică, progresie distală, lungime, compresie/unghi în tunel; anticoagularea sistemică crește de obicei patența','Patența depășește aortofemuralul (>90% la 5 ani), anticoagularea fiind inutilă','Se realizează doar transperitoneal, anestezia locală fiind interzisă','Abdomenul ostil contraindică orice bypass, inclusiv extra-anatomic'],'AB',525,'Bypass extra-anatomic',
 'Poziționarea axilo-/femuro-femuralului în abdomenul ostil, cu patență inferioară aortofemuralului.',
 ['Indicația de abdomen ostil, traseul subcutanat și anestezia locală sunt explicite.','Patența inferioară, mecanismele de ocluzie și rolul anticoagulării sunt citate.','Aortofemuralul are >90% la 5 ani; extra-anatomicul este inferior.','Tunelizarea este subcutanată, nu transperitoneală de principiu.','Extra-anatomicul există tocmai pentru abdomenul ostil.']],
 8,'Supraestimează patența extra-anatomică peste aortofemural și cere abord transperitoneal.',['abdomen ostil','axilo-femurale']),

q(17,['Bypassul infrainghinal, alegerea grefonului:',
 ['Deasupra genunchiului, vena autologă și proteza sintetică au rezultate inițiale comparabile','Sub genunchi, protezele sintetice funcționează mai slab; se preferă grefon venos autolog','Safena poate fi inversată (valvele în sensul fluxului) sau in situ (valvulotom, potrivire de calibru, incizii minime; risc de leziune endotelială)','Sub genunchi, proteza sintetică este superioară venei','Tehnica in situ păstrează valvele intacte, inversarea fiind abandonată'],'ABC',525,'Bypass infrainghinal — Venă versus proteză',
 'Contrastarea echivalenței deasupra genunchiului cu superioritatea venei sub genunchi și a opțiunii in situ.',
 ['Echivalența inițială supra-genunchi este explicită.','Inferioritatea sinteticei sub genunchi este citată.','Inversarea versus in situ, cu avantaje/dezavantaje, este descrisă.','Sub genunchi vena este superioară.','In situ distruge valvele cu valvulotomul.']],
 8,'Inversează ierarhia venă/proteză sub genunchi și păstrează greșit valvele în tehnica in situ.',['deasupra genunchiului','grefon venos autolog'],[526]),

q(18,['Vena „femurală superficială” a fost redenumită „femurală” pentru a:',
 ['Evita confuzia și a recunoaște riscul de embolie pulmonară dacă această venă profundă dezvoltă tromboză','Sublinia că este o venă superficială, fără risc emboligen','O alinia nomenclaturii arterei femurale profunde, fără implicație embolică','Exclude tromboza acestei vene din definiția TVP','Justifica stripping-ul de rutină, fiind fără rol în întoarcerea venoasă'],'A',534,'Nomenclatură — Vena femurală',
 'Recunoașterea redenumirii menite să evidențieze caracterul profund și riscul de EP.',
 ['Textul explică redenumirea prin confuzie și risc de EP.','Nu este o venă superficială.','Motivația este emboligenă, nu alinierea la AFP.','TVP a acestei vene este relevantă embolic.','85–90% din întoarcere e profundă; stripping-ul superficial e permis doar dacă profundul e patent.']],
 8,'Tratează vena femurală (ex-superficială) ca venă superficială neemboligenă, capcana nomenclaturii.',['femurală superficială','embolie pulmonară']),

q(19,['Epidemiologia bolii venoase cronice:',
 ['Aproximativ 40% dintre adulți vor avea o formă de boală venoasă (varice, post-trombotic, ulcere, telangiectazii)','Adulții au o probabilitate de 6% de ulcer venos în viață; 70% dintre cei peste 70 de ani au o formă de boală venoasă cronică','TVP este responsabilă de multe decese neașteptate la spitalizați, mai ales postoperator','Boala venoasă este rară sub 5% la adulți, ulcerele fiind excepționale după 70 de ani','Profilaxia TVP nu se ia în considerare la pacientul chirurgical'],'ABC',534,'Boala venoasă — Epidemiologie',
 'Reținerea triadului 40% / 6% ulcer / 70% după 70 de ani și a apelului la profilaxia TVP.',
 ['40% este explicit.','6% ulcer lifetime și 70% după 70 de ani sunt citate.','Decesul postoperator prin TVP și apelul la profilaxie sunt descrise.','40%, nu 5%; vârsta crește incidența.','La toți pacienții chirurgicali cu risc trebuie avută în vedere o formă de profilaxie.']],
 8,'Coboară 40% sub 5% și anulează profilaxia TVP, pe trei procente memorabile.',['40% dintre','6% de a dezvolta']),

q(20,['Anatomia venelor profunde ale gambei:',
 ['Venele tibiale anterioare, posterioare și peroniere sunt aproape constant pereche; gamba are șase vene profunde principale, față de trei artere','Sistemul superficial al membrului inferior cuprinde safena mare, safena mică și afluenții','Venele gambei sunt unice, câte una de arteră, fără perechi','Safena mare este o venă profundă, paralelă cu artera femurală','Perforantele drenează din profund spre superficial, valvele încurajând refluxul'],'AB',534,'Anatomie venoasă — Șase vene de gambă',
 'Recunoașterea dublării venelor tibiale/peroniere (6 versus 3 artere) și a conținutului sistemului superficial.',
 ['Perechile și totalul de șase vene versus trei artere sunt explicite.','Safena mare, mică și afluenții definesc superficialul.','Textul precizează că sunt aproape întotdeauna pereche.','Safena mare este superficială.','Perforantele dirijează sângele din superficial spre profund; incompetența permite refluxul invers.']],
 8,'Reduce cele șase vene pereche la trei vene unice și mută safena în compartimentul profund.',['şase vene profunde','trei at1ere']),

q(21,['Fiziopatologia bolii venoase, după Virchow și consecințe:',
 ['Triada: stază, leziune endotelială venoasă și hipercoagulabilitate; trauma osoasă/de părți moi a membrului este o cauză frecventă de leziune endotelială și TVP','Valvele deteriorate de TVP cresc presiunea în ortostatism, cu exudat proteic și inflamație interstițială, finalul fiind lipodermatoscleroza de gambă','Compartimentele musculare pompează sângele profund spre inimă; venele superficiale nu beneficiază de această pompă','Triada Virchow include doar hipertensiunea arterială, fără stază','Lipodermatoscleroza apare la membrul superior, unde presiunea ortostatică este maximă'],'ABC',535,'Virchow și lipodermatoscleroza',
 'Aplicarea triadei, a pompării musculare și a lipodermatosclerozei ca stadiu final de gambă.',
 ['Cele trei elemente și trauma ca leziune endotelială sunt explicite.','Cascada presiune–exudat–fibroză de gambă este descrisă.','Contrastul pompă musculară profundă versus superficial fără pompă este citat.','Triada nu este HTA.','Sediul este gamba, unde presiunea ortostatică e maximă.']],
 8,'Mută lipodermatoscleroza pe membrul superior și golește triada Virchow de stază.',['staza, leziunile endoteliale','lipodermatoscleroza']),

q(22,['Conform Tabelului 26-4, tabloul clinic al emboliei pulmonare include:',
 ['Durere toracică pleuritică (70%)','Dispnee și tahipnee (80%)','Tahicardie (45%)','Hemoptizie (25–30%)','Radiografia pulmonară este constant diagnostică, imaginea de „pană” fiind regula'],'ABCD',539,'Tabelul 26-4 — Embolia pulmonară',
 'Reținerea celor patru procente (70/80/45/25–30) față de raritatea semnelor radiografice clasice.',
 ['70% durere pleuritică este tabelat.','80% dispnee/tahipnee este tabelat.','45% tahicardie este tabelat.','25–30% hemoptizie este tabelat.','Radiografia este rareori diagnostică; pana de atelectazie este rară.']],
 8,'Patru procente din tabel versus mitul radiografiei „în pană”, ușor de memorat greșit.',['70%','80%']),

q(23,['Diagnosticul definitiv al emboliei pulmonare este dat de:',
 ['Tomografie computerizată toracică, scintigrafie ventilație-perfuzie sau angiografie pulmonară; angiografia are specificitate și sensibilitate >98%, dar este invazivă','Radiografie simplă patognomonică în toate cazurile','Doar D-dimeri, fără imagistică','Ecografie abdominală, artera pulmonară nefiind vizibilă CT','Scintigrafia este abandonată, angiografia având sensibilitate sub 50%'],'A',539,'Diagnosticul emboliei pulmonare',
 'Recunoașterea triadului CT / V/Q / angiografie, cu performanța >98% a angiografiei invazive.',
 ['Cele trei modalități și cifra >98% sunt explicite.','Radiografia este rareori diagnostică.','D-dimerii nu sunt menționați ca substitut al imagisticii de confirmare.','CT-ul toracic evidențiază trombul pulmonar.','Angiografia are >98%, nu sub 50%; scintigrafia rămâne o opțiune.']],
 8,'Înlocuiește CT/V/Q/angiografia cu radiografia simplă și coboară sensibilitatea angiografică de la >98% sub 50%.',['>98%','angiografia pulmonară']),

q(24,['Tratamentul emboliei pulmonare include:',
 ['Anticoagularea inițială, pentru a preveni emboli noi și propagarea; suport inotrop dacă instabilitatea persistă','Tromboliza se ia în considerare la pacientul stabil, dar simptomatic din cauza embolului','Filtrul cav (jugular intern sau femural, permanent sau provizoriu) la contraindicație de anticoagulant sau EP sub tratament; se îndepărtează când nu mai e util','Mărimea trombului se corelează liniar cu supraviețuirea, embolii mici fiind inofensivi','Filtrele cave se lasă pe viață, migrarea și perforația nefiind descrise'],'ABC',539,'EP — Anticoagulare, tromboliză, filtru cav',
 'Ierarhia anticoagulant → tromboliză la simptomaticul stabil → filtru cav la contraindicație/recidivă.',
 ['Anticoagularea și inotopia sunt prima linie.','Tromboliza la stabilul simptomatic este citată.','Indicațiile, căile de implantare și explantarea filtrului sunt descrise.','Nu există corelație directă mărime–supraviețuire; embolii mici multipli pot cauza colaps.','Textul cere îndepărtarea pentru a preveni migrare, perforație, ocluzie.']],
 8,'Atribuie prognosticul exclusiv mărimii trombului și lasă filtrul cav permanent, contrar paragrafului de explantare.',['filtru cav','trombolitic']),

q(25,['Tratamentul varicelor, în raport cu sistemul profund:',
 ['85–90% din întoarcerea venoasă e asigurată de sistemul profund; îndepărtarea superficialelor are impact minim dacă profundul e patent','Ligaturarea safenei la joncțiunea safeno-femurală este mai ales pentru safene proximale >1,5 cm; recidiva e mai mare decât după stripping','ARF, laser endovenos, scleroterapie cu spumă sau închidere mecano-chimică se fac prin puncție ecoghidată sub genunchi','Stripping-ul este mai puțin dureros decât tehnicile minim-invazive și s-a impus ca standard actual','Ablatia superficială este contraindicată dacă profundul e patent, 10% din întoarcere depinzând de safenă'],'ABC',540,'Varice — 85–90% profund și tehnici',
 'Aplicarea ponderii de 85–90% a sistemului profund și a pragului >1,5 cm pentru ligatură versus ablație.',
 ['85–90% și condiția de patență profundă sunt explicite.','Pragul >1,5 cm și recidiva superioară stripping-ului sunt citate.','Tehnicile endovenoase prin puncție sub genunchi sunt listate.','Stripping-ul are recuperare mai lungă și durere mai mare decât minim-invazivul.','Ablația superficială e permisă tocmai când profundul e patent.']],
 8,'Inversează 85–90% (profund) cu dependența de safenă și reabilitează stripping-ul ca mai puțin dureros.',['85-90%','> 1,5 cm'],[539]),

q(26,['Insuficiența venoasă cronică se caracterizează prin:',
 ['Este consecința hipertensiunii venoase locale prin incompetență valvulară profundă, obstrucție sau reflux din perforante','Clinic: edem cronic, hiperpigmentare și ulcere; piciorul este edemațiat și hiperpigmentat maleolar','Este o arteriopatie de trifurcație, hiperpigmentarea lipsind','Ulcerele venoase stau pe pulpa digitală, identic celor arteriale','Compresia și elevația agravează hipertensiunea venoasă, fiind evitate'],'AB',540,'Insuficiența venoasă cronică',
 'Legarea hipertensiunii venoase (valve/obstrucție/perforante) de edemul și hiperpigmentarea maleolară.',
 ['Cele trei cauze de hipertensiune venoasă sunt explicite.','Edemul, hiperpigmentarea și ulcerele, cu sediu maleolar, sunt descrise.','Nu este o arteriopatie.','Ulcerele venoase sunt maleolare, nu digitale.','Fiziopatologia este hipertensiunea; compresia și elevația o combat, nu o agravează.']],
 8,'Mută ulcerul venos pe degete (sediul arterial) și neagă hipertensiunea venoasă ca mecanism.',['hipertensiunii venoase','hiperpigmentarea']),
];
