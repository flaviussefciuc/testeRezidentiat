import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p-146;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('sepsis',8,pdfOffset,`sepsis-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const SEPSIS_B=[
q(11,['Sepsisul, în datele epidemiologice și de urgență din capitol:',
 ['Se estimează că 49 de milioane de oameni dezvoltă anual sepsis și 11 milioane decedează din cauza acestuia','Antibioterapia empirică trebuie prescrisă în interval de o oră de la prezentare și revizuită la 72 de ore, când devin disponibile rezultatele antibiogramei','Abordarea cazurilor se bazează pe pachetul de îngrijiri Sepsis Six','Diagnosticul de sepsis se rezervă infecțiilor localizate fără disfuncție de organ','Antibioterapia se temporizează până la rezultatele de laborator, pentru a evita spectrul larg inutil'],'ABC',151,'Introducere — Abilități clinice în infecții și sepsis',
 'Reținerea magnitudinii globale și a ferestrelor de o oră / 72 de ore, plus pachetul Sepsis Six.',
 ['Cifrele 49 și 11 milioane sunt cele din deschiderea capitolului.','Fereastra de o oră pentru empiric și revizuirea la 72 de ore sunt enunțate explicit.','Pachetul Sepsis Six structurează tratamentul și investigațiile de urgență.','Sepsisul este rezervat răspunsului inadecvat cu disfuncție de organ, nu infecției simple.','Textul cere inițiere fără întârziere; așteptarea laboratorului este contraproductivă.']],
 8,'Combină două praguri temporale ușor de inversat (1 oră față de 72 de ore) cu o cifră epidemiologică și un pachet de îngrijiri.',['49 de milioane','Sepsis Six']),

q(12,['Identificați afirmația corectă referitoare la definiția Sepsis-3:',
 ['SIRS rămâne criteriul de definire a sepsisului, după revizuirea din 2001','Termenul de urosepsis este preferat pentru infecția de tract urinar, pentru a uniformiza statisticile','Sepsisul este o disfuncție de organ amenințătoare de viață provocată de un răspuns anormal al gazdei la infecție','Biomarkerii propuși au specificitate suficientă pentru a înlocui evaluarea clinică','qSOFA și NEWS 2 stabilesc singure diagnosticul de sepsis, fără evaluare ulterioară'],'C',154,'Definiția (consensul Sepsis-3)',
 'Separarea definiției Sepsis-3 de SIRS, de utilizarea improprie a termenului urosepsis și de instrumentele de screening.',
 ['SIRS nu mai este utilizat pentru definirea sepsisului.','Folosirea necorespunzătoare a termenului urosepsis pentru ITU distorsionează statisticile.','Aceasta este definiția publicată în 2016 sub denumirea Sepsis-3.','Niciun biomarker nu are suficientă specificitate diagnostică.','qSOFA și NEWS 2 indică risc, nu pun diagnosticul.']],
 8,'Distractorii reînvie SIRS și transformă instrumentele de screening în teste diagnostice, contrar paragrafului Sepsis-3.',['Sepsis-3','urosepsis']),

q(13,['În recunoașterea riscului de sepsis în Marea Britanie sunt adevărate:',
 ['Colegiul Regal al Medicilor recomandă screening la o valoare NEWS 2 de 5 sau mai mare','Nici qSOFA, nici NEWS 2 nu au rol diagnostic; indică doar risc ridicat și necesitatea evaluării','Nivelul lactatului are valoare prognostică; o valoare ridicată este semn de insuficiență organică, chiar și la pacienții care aparent evoluează bine','Stopul cardiac apare de regulă fără alterări fiziologice prealabile, scorul NEWS 2 fiind astfel superfluu','Diagnosticul se amână până la rezultatele de laborator complete, pentru a crește specificitatea'],'ABC',154,'Recunoașterea sepsisului — NEWS 2 și lactat',
 'Contrastarea screeningului NEWS 2 / qSOFA cu valoarea prognostică a lactatului la patul bolnavului.',
 ['Pragul NEWS 2 ≥5 este recomandarea citată pentru risc ridicat.','Textul precizează explicit absența rolului diagnostic al ambelor scoruri.','Lactatul POC nu trebuie ignorat, chiar dacă pacientul pare stabil.','Stopul cardiac este de obicei precedat de alterări fiziologice progresive reflectate de NEWS 2.','Așteptarea laboratorului este descrisă ca fiind contraproductivă.']],
 8,'Distractorii anulează valoarea prognostică a lactatului la pacientul „aparent bine” și transformă screeningul în diagnostic.',['NEWS 2','valoare prognostică'],[155]),

q(14,['Grupele cu risc crescut de a dezvolta sepsis includ:',
 ['Vârstnicii peste 65 de ani și nou-născuții','Pacienții cu sepsis în antecedente','Pacienții cu HIV, asplenism, ciroză sau boli autoimune, precum și cei pe corticoizi sistemici','Pacienții cu dispozitive medicale permanente, gravidele și dependenții de alcool sau droguri intravenoase','Adulții tineri sănătoși, fără factor de gazdă identificat, reprezintă grupul cu cea mai mare incidență citată'],'ABCD',155,'Recunoașterea sepsisului — Grupele aflate la risc',
 'Recunoașterea listei de gazde vulnerabile, distinct de virulența patogenului.',
 ['Cele două extreme de vârstă sunt enumerate explicit.','Antecedentele de sepsis figurează printre factorii de risc.','Imunosupresia medicală și cea iatrogenă (inclusiv corticoizi) sunt ambele listate.','Dispozitivele, sarcina și dependențele sunt ultimele grupe din listă.','Textul leagă progresia de virulență, încărcătură, sediu și răspunsul gazdei; adulții tineri sănătoși nu sunt grupul de risc citat.']],
 8,'Patru categorii reale trebuie ținute împreună; distractorul inversează ierarhia de risc către gazda sănătoasă.',['>65 de ani','gravidele']),

q(15,['La un pacient cu leziune a măduvei spinării, o infecție situată sub nivelul leziunii nervoase se manifestă de regulă prin:',
 ['Semne inflamatorii locale floride, identice celor de deasupra leziunii','Febră înaltă cu leucocitoză ca semn constant de însoțire','Meningism și redoare de ceafă ca semne-ghid','Semne și simptome de disautonomie, mai degrabă decât de infecție','Absența manifestărilor, motiv pentru care screeningul este inutil'],'D',157,'Sepsisul în situații speciale — Pacienții imobilizați',
 'Recunoașterea disautonomiei ca mască a infecției sub nivelul leziunii medulare.',
 ['Sub nivelul leziunii, semnele clasice de infecție sunt înlocuite de disautonomie.','Textul nu cere febră și leucocitoză ca trăsături definitorii în acest context.','Meningismul nu este semnul descris pentru infecția sublezională.','Aceasta este formularea din paragraf.','Screeningul și pachetele de îngrijire a dispozitivelor rămân esențiale la imobilizați.']],
 8,'Vigneta inversează așteptarea de semne inflamatorii floride; răspunsul corect este contraintuitiv (disautonomie).',['disautonomie','măduvei spinării']),

q(16,['Sepsisul la neutropenici și la pacienții imobilizați:',
 ['La hemato-oncologici, după chimioterapie, riscul crescut de infecții cu bacil piocianic motivează piperacilină/tazobactam, cu sau fără un aminoglicozid','La imobilizați, cel mai mare risc îl reprezintă dispozitivele (catetere venoase centrale, urinare și sonde endotraheale)','Escarele se previn cu saltele potrivite și rotirea periodică a pacientului','Antibioterapia empirică a neutropenicului se limitează la un glicopeptid, Pseudomonas fiind neimplicat','La imobilizați, dispozitivele medicale reduc riscul de organisme multirezistente și pot fi ignorate'],'ABC',157,'Sepsisul în situații speciale — Neutropenici; Imobilizați',
 'Asocierea piperacilină/tazobactam ± aminoglicozid cu riscul de Pseudomonas și a dispozitivelor cu infecția nosocomială a imobilizatului.',
 ['Regimul tazocin ± aminoglicozid este cel citat pentru riscul de piocianic.','Cele trei dispozitive sunt exemplele de risc maxim.','Prevenția escarilor prin saltea și rotație este enunțată explicit.','Spectrul empiric vizează Pseudomonas, nu un glicopeptid izolat.','Dispozitivele cresc, nu reduc, riscul de organisme greu de tratat.']],
 8,'Distractorii mută empiricul neutropenic de pe piocianic pe glicopeptid și neagă rolul dispozitivelor la imobilizat.',['piperacilină/ tazobactam','bacil piocianic']),

q(17,['Alegeți afirmațiile corecte referitoare la Sepsis Six și la țintele hemodinamice din campania Surviving Sepsis:',
 ['Sepsis Six include oxigen pentru SpO2 >94%, hemoculturi, antibiotic cu spectru larg, lichide rapid, măsurarea lactatului și monitorizarea diurezei orare','Se menține tensiunea arterială medie la 65 mmHg','Resuscitarea este ghidată spre normalizarea lactatului la pacienții cu valori ridicate','Albumina umană este interzisă, chiar și când sunt necesare volume mari de lichid','Prima treaptă este vasopresorul, lichidele fiind rezervate șocului refractar'],'ABC',157,'Cadranul 8.4 Sepsis Six; Cadranul 8.5 Surviving Sepsis',
 'Reținerea celor șase elemente ale pachetului și a țintelor PAM 65 mmHg și lactat, distinct de alegerea fluidului de primă intenție.',
 ['Cele șase componente sunt lista din Cadranul 8.4.','PAM 65 mmHg este ținta din Cadranul 8.5.','Ghidarea după lactat este o recomandare principală.','Albumina poate fi luată în calcul când sunt necesare volume mari.','Resuscitarea volemică este primul pas pentru menținerea perfuziei.']],
 8,'Distractorii inversează locul albuminei și al vasopresorului față de cristaloide, două nuanțe din același cadran.',['Sp02 >94%','65 mmHg']),

q(18,['La o femeie cu sepsis fără focar evident, examinarea genitală trebuie să caute, printre altele:',
 ['Tampoane rămase în vagin, care pot provoca sindromul șocului toxic','Orhiepididimită, ca focar tipic feminin','Sensibilitate limitată la flancul stâng, patognomonică pentru pielonefrită','Suflu nou, care exclude un focar pelvin','Ulcere plantare, care fac inutilă examinarea pelvină'],'A',153,'Examenul obiectiv — Examinarea genitală',
 'Identificarea tamponului vaginal reținut ca cauză de sindrom al șocului toxic, distinct de focarele masculine sau abdominale.',
 ['Textul cere luarea în considerare a tampoanelor rămase, cauză de sindrom al șocului toxic.','Orhiepididimita este semnul descris la bărbați.','Sensibilitatea în flancul stâng este comună în diverticulită; pielonefrita este legată de sensibilitatea în flancuri, nu ca semn genital feminin.','Un suflu nou poate indica endocardită, nu exclude un focar pelvin.','Ulcerele de picioare nu înlocuiesc examinarea genitală.']],
 8,'Distractorii reciclează semne reale din aceeași figură (orhiepididimită, diverticulită, suflu, ulcere) atribuite greșit contextului feminin.',['tampoane rămase','şocului toxic']),

q(19,['Controlul sursei în sepsis poate include:',
 ['Stent biliar, cateter urinar sau nefrostomă în obstrucțiile biliare și urinare','Drenajul colecțiilor intraabdominale, al empiemului și al colecțiilor paraspinale','Lavaj artroscopic în infecția intraarticulară și debridare cu ablația endoprotezei când aceasta este infectată','Valvectomie tot mai folosită în endocardita acută cu S. aureus și debridare în fasceita necrozantă sau gangrena Fournier','Menținerea cateterelor blocate, deoarece îndepărtarea agravează bacteriemia'],'ABCD',158,'Controlul sursei',
 'Recunoașterea manevrelor anatomice de control al sursei, de la obstrucție și colecții până la valvă și fascie.',
 ['Decompresiunea căilor biliare și urinare este exemplul dat.','Cele trei tipuri de colecții sunt enumerate.','Conduita articulară nativă versus protezată este distinsă explicit.','Valvectomia și debridarea din fasceită/Fournier completează lista.','Cateterele infectate, mai ales blocate, trebuie îndepărtate.']],
 8,'Patru manevre reale din lista de control al sursei; distractorul inversează regula cateterului blocat.',['nefrostomă','gangrenei Fournier']),

q(20,['Spectroscopia de masă MALDI-TOF se caracterizează prin:',
 ['Tulpinile sunt fixate într-o matrice fragmentată, fiecare fragment proteic generând un profil spectral unic de specie','Uneori genele de rezistență sunt detectate: MRSA produce un profil spectral diferit de MSSA','Oferă o antibiogramă fenotipică completă, înlocuind testarea de susceptibilitate','Identifică bacteriile prin secvențierea regiunilor hipervariabile ale ARNr 16S','Necesită pozitivarea prealabilă a hemoculturii timp de 48 de ore, ca PCR 16S'],'AB',158,'Cadranul 8.6 — MALDI-TOF',
 'Diferențierea profilului proteic MALDI-TOF de PCR 16S și recunoașterea distincției spectrale MRSA/MSSA.',
 ['Mecanismul matrice–profil spectral este cel din cadran.','Exemplul MRSA versus MSSA este dat explicit.','MALDI-TOF nu înlocuiește antibiograma; doar uneori detectează gene de rezistență.','Secvențierea 16S aparține PCR, nu MALDI-TOF.','Avantajul metodelor moleculare este tocmai identificarea fără a aștepta cultura clasică.']],
 8,'Distractorii atribuie MALDI-TOF proprietățile PCR 16S (secvențiere, absența antibiogramei inversată) din același cadran.',['MALDI-TOF','profil spectral']),

q(21,['Obiectivele CQUIN și alegerea antibioterapiei empirice în NHS:',
 ['Indicatorii vizează reducerea prescrierii de antibiotice, mai ales a carbapenemelor și a piperacilină-tazobactamului, și revizuirea la 72 de ore','Rezultatele microbiologice anterioare, cum sunt colonizările cu Enterobacteriacee producătoare de ESBL, sunt utile în alegerea empiricului','Parametrii de ales includ calea, frecvența, durata, toxicitatea, nivelurile terapeutice (gentamicină sau amikacină) și ajustarea hepatică/renală','Politica empirică este identică în toate spitalele, prevalența locală a rezistenței neinfluențând schema','Terapia adjuvantă (rifampicină sau acid fusidic) este inutilă în infecția severă cu S. aureus'],'ABC',159,'Obiective specifice în Marea Britanie; Antibioterapia empirică',
 'Corelarea KPI-urilor CQUIN (carbapeneme, tazocin, 72 de ore) cu rolul colonizării ESBL și al parametrilor de prescriere.',
 ['Cele două clase vizate și revizuirea la 72 de ore sunt KPI-urile citate.','Colonizarea ESBL anterioară poate justifica o carbapenemă.','Lista de parametri (inclusiv niveluri de aminoglicozid) este cea din paragraf.','Politica diferă după prevalența locală a rezistenței.','Textul menționează rifampicina sau acidul fusidic ca terapie adjuvantă când este necesar.']],
 8,'Distractorii anulează două nuanțe de stewardship (ecologia locală, adjuvantul antistafilococic) din același paragraf.',['CQUIN','piperacilina-tazobactamului']),

q(22,['Serviciile de antibioterapie parenterală în ambulatoriu (OPAT):',
 ['Exemple de antibiotice în doză unică zilnică sunt ceftriaxona, ertapenemul, amikacina, teicoplanina și daptomicina','Pentru tratament peste 7 zile se preferă un cateter Hickman sau un PICC','Utilizatorii de droguri intravenoase și pacienții cu afecțiuni psihiatrice severe nu sunt eligibili','Hemograma, ureea, electroliții, CRP și probele hepatice se monitorizează cel puțin săptămânal','OPAT este rezervat doar celulitei, endocardita și osteomielita fiind excluse după stabilizare'],'ABCD',160,'Antibioterapia parenterală în ambulatoriu',
 'Reținerea schemei o dată pe zi, a căii venoase de lungă durată, a ineligibilității IVDU și a monitorizării săptămânale.',
 ['Cele cinci exemple de doză unică zilnică sunt lista din text.','Pragul >7 zile pentru Hickman/PICC este explicit.','Non-complianța (IVDU, psihiatrie severă) exclude OPAT.','Monitorizarea săptămânală a pachetului de analize este cerută.','După stabilizare, osteomielita, endocardita, empiemul și abcesele pot fi potrivite.']],
 8,'Patru reguli operaționale distincte; distractorul restrânge greșit indicațiile pe care textul tocmai le lărgește.',['cateter Hickman','daptomicina'],[159]),

q(23,['Următoarele afirmații despre alergia raportată la penicilină sunt adevărate:',
 ['În jur de 10% din populație relatează alergie, dar valoarea reală este doar în jur de 1%','În alergia de tip 1 (IgE-mediată) și în alte alergii severe trebuie evitate și cefalosporinele și carbapenemele','În alergia non-severă (erupție blândă) cefalosporinele, carbapenemele și monobactamii pot fi utilizați cu prudență','Desensibilizarea cu doze progresive este imposibilă odată ce alergia a fost declarată','Toți pacienții care declară alergie trebuie îndrumați de rutină către alergologie, fără selecție'],'ABC',160,'Evaluarea riscului alergic',
 'Contrastarea prevalenței declarate față de cea reală și a conduitei în alergia severă versus non-severă.',
 ['Raportul 10% versus 1% este cifra din paragraf.','Evitarea cefalosporinelor și carbapenemelor în tipul 1 este explicită.','Utilizarea prudentă în erupția blândă non-IgE este permisă.','Desensibilizarea cu doze progresive este descrisă ca posibilă (exemplu cotrimoxazol).','Doar pacienții selectați (plurialergici, fără alternativă, gold-standard, etc.) se îndrumă.']],
 8,'Distractorii transformă selecția către alergologie și desensibilizarea posibilă în interdicții absolute.',['10% din populaţie','doar în jur de 1%']),

q(24,['Profilaxia antibiotică perioperatorie, pentru majoritatea intervențiilor:',
 ['O doză unică la inducție este suficientă, iar durata nu trebuie să depășească 24 de ore postprocedural','Se prelungește de rutină 7 zile, pentru a acoperi bacteriemia de procedură','Este identică, ca durată, profilaxiei meningococice de 2 zile','Se omite în chirurgia colonului, unde riscul infecțios este neglijabil','Gargara cu clorhexidină înlocuiește antibioticul la pacienții cu proteze valvulare'],'A',161,'Chemoprofilaxia antibiotică',
 'Reținerea regulii dozei unice la inducție și a plafonului de 24 de ore, distinct de indicațiile speciale (colon, transplant).',
 ['Doza unică la inducție și limita de 24 de ore sunt enunțate pentru majoritatea operațiilor.','Prelungirea de rutină la 7 zile contrazice regula de 24 de ore.','Regimul de 2 zile aparține profilaxiei contacților de meningococ, nu chirurgiei.','Chirurgia colonului este tocmai un exemplu în care profilaxia rămâne recomandată.','NICE nu recomandă profilaxie antibiotică sau clorhexidină pentru endocardită la proceduri dentare.']],
 8,'Distractorii aplică durate din Cadranul 8.7 (2 zile, 7 zile) sau interdicția dentară asupra profilaxiei chirurgicale de 24 de ore.',['doză unică la inducţie','24 de ore']),

q(25,['Penicilinele antistafilococice și reacțiile lor cutaneo-hepatice:',
 ['Flucloxacilina rămâne alegerea de primă intenție în infecțiile severe cauzate de MSSA','Amoxicilina și ampicilina produc o erupție la 90% din pacienții cu mononucleoză infecțioasă care primesc acest tratament','Amoxicilina/acid clavulanic produce icter colestatic de șase ori mai frecvent decât amoxicilina, la fel de des ca flucloxacilina','Flucloxacilina este inactivă pe streptococii producători de penicilinaze, motiv pentru care se evită în MSSA','Icterul colestatic al co-amoxiclavului este mai rar decât al amoxicilinei simple'],'ABC',163,'Terapiile antibiotice — Penicilinele',
 'Asocierea flucloxacilinei cu MSSA, a erupției din mononucleoză (90%) și a icterului colestatic de 6 ori mai frecvent al co-amoxiclavului.',
 ['Prima intenție în MSSA sever este flucloxacilina.','Proporția de 90% în mononucleoză este cifra din text.','Raportul de șase ori și echivalența cu flucloxacilina sunt enunțate.','Flucloxacilina este folosită tocmai în infecțiile cu streptococi producători de penicilinaze și în MSSA.','Co-amoxiclavul produce icter mai frecvent, nu mai rar, decât amoxicilina.']],
 8,'Cere simultan 90% și factorul 6; distractorii inversează indicația MSSA și direcția icterului colestatic.',['90% din pacienţii','de şase ori mai frecvent']),

q(26,['Avibactamul și combinația ceftazidimă/avibactam:',
 ['Avibactamul este primul inhibitor non-β-lactamic al enzimelor β-lactamice, combinat cu ceftazidima','Combinația pare neafectată de majoritatea ESBL și de unele carbapenemaze (KPC, OXA-48) ale Enterobacteriaceae','Avibactamul este un inhibitor clasic de tip acid clavulanic, hidrolizat ca moleculă suicidară β-lactamică','Combinația este inactivă pe ESBL, fiind rezervată streptococilor','Ceftazidima/avibactam înlocuiește colistinul în toate infecțiile cu NDM'],'AB',164,'Combinații β-lactamice / inhibitori de β-lactamază',
 'Distingerea avibactamului ca prim inhibitor non-β-lactamic de inhibitorii clasici suicidari (clavulanat, tazobactam).',
 ['Caracterul de prim inhibitor non-β-lactamic este explicit.','Acoperirea ESBL și a KPC/OXA-48 este cea descrisă.','Inhibitorii clasici (clavulanat, sulbactam, tazobactam) sunt β-lactamici suicidari; avibactamul este non-β-lactamic.','Textul o descrie ca neafectată de majoritatea ESBL.','NDM tinde să rămână rezistent la antibioticele obișnuite, cu excepția colistinului, fosfomicinei și tigeciclinei, nu a avibactamului.']],
 8,'Distractorii confundă avibactamul cu BLI clasici suicidari și extind spectrul asupra NDM, tratat în alt paragraf.',['Avibactam','non-p-lactamic']),

q(27,['Chinolonele se caracterizează prin:',
 ['Inhibă topoizomeraza IV și ADN-giraza, enzimele superhelixului ADN','Pot produce leziuni ale tendoanelor, inclusiv ruptură, în primele 48 de ore de utilizare','Utilizarea se evită în sarcină, la copii și la pacienții tratați cu corticosteroizi, dacă beneficiul nu depășește riscul','Există îngrijorări privind prelungirea QT; asocierea cu alte medicamente care prelungesc QT se evită când este posibil','Sunt antibioticele de primă intenție în sarcină, având profil teratogen absent'],'ABCD',164,'Chinolonele',
 'Integrarea mecanismului (girază/topoizomeraza IV) cu toxicitățile de 48 de ore, steroizi și QT.',
 ['Cele două enzime sunt țintele enunțate.','Fereastra de 48 de ore pentru ruptură tendinoasă este explicită.','Cele trei populații de evitat sunt listate.','Prelungirea QT și interacțiunea sunt avertismentele finale.','Sarcina este un context de evitare, nu de primă intenție.']],
 8,'Patru fapte din același paragraf (mecanism, 48 de ore, steroizi, QT); distractorul inversează regula din sarcină.',['primele 48 de ore','intervalului QT']),

q(28,['Administrarea aminoglicozidelor, dincolo de toxicitățile clasice, include:',
 ['Mutația m.1555A>G, asociată ototoxicității la gentamicină, apare la mai puțin de 1% din populație','În majoritatea cazurilor este indicată doza unică zilnică, cu nivel seric la 6-14 ore și nomogramă pentru intervalul 24 sau 48 de ore','În endocardită se prescriu doze mici la fiecare 12 ore, cu ținte pre- și post-doză diferite față de schema o dată pe zi','Doza unică zilnică este interzisă, aminoglicozidele administrându-se doar în trei prize egale','Mutația m.1555A>G este prezentă la peste jumătate din populație, motiv pentru care gentamicina s-a abandonat'],'ABC',164,'Aminoglicozidele — Dozare',
 'Reținerea mutației mitocondriale rare, a ferestrei 6-14 ore și a schemei de 12 ore din endocardită.',
 ['Prevalența <1% a mutației este cifra din text.','Algoritmul 6-14 ore plus nomogramă este cel descris.','Schema de endocardită (12 ore, ținte diferite) este distinsă de doza unică zilnică.','Doza unică zilnică este, dimpotrivă, indicată în majoritatea cazurilor.','Mutația este rară (<1%), nu majoritară.']],
 8,'Distractorii inversează prevalența mutației și interzic schema o dată pe zi pe care textul o recomandă.',['m.1555A>G','6-14 ore']),

q(29,['Teicoplanina, comparativ cu vancomicina, se caracterizează prin:',
 ['Este mai puțin nefrotoxică și permite administrarea în doză unică zilnică sau de trei ori pe săptămână','Are nefrotoxicitate superioară vancomicinei, motiv pentru care se evită','Se administrează doar oral, ca vancomicina în C. difficile','Nu necesită nicio monitorizare a nivelurilor serice','Este inactivă pe Gram-pozitivi, fiind rezervată bacililor Gram-negativi'],'A',164,'Glicopeptidele — Teicoplanina',
 'Contrastarea nefrotoxicității mai reduse și a posologiei o dată pe zi sau de trei ori pe săptămână față de vancomicină.',
 ['Nefrotoxicitatea mai mică și cele două scheme (zilnic sau de trei ori pe săptămână) sunt enunțate.','Relația de nefrotoxicitate este inversă.','Teicoplanina se administrează intravenos.','Nivelurile pre-doză sunt monitorizate pentru eficiență.','Glicopeptidele sunt active pe Gram-pozitivi.']],
 8,'Distractorii inversează nefrotoxicitatea relativă și calea de administrare, două atribute alăturate în același paragraf.',['mai puţin nefrotoxică','trei ori pe săptămână']),

q(30,['Lipopeptidele utilizate în infecțiile de piele și țesuturi moi:',
 ['Daptomicina are un spectru similar vancomicinei, se administrează intravenos și este folosită în SSTI complicate, inclusiv MRSA, precum și ca alternativă în endocardită, infecții osteoarticulare și septicemii Gram-pozitive','Lipopeptidele cu timp de eliminare prelungit, precum dalbavancina, sunt folosite ca tratament în doză unică pentru infecțiile tegumentare și ale țesuturilor moi','Daptomicina se administrează oral, biodisponibilitatea fiind completă','Dalbavancina înlocuiește carbapenemele în infecțiile cu Pseudomonas','Daptomicina este inactivă pe MRSA, fiind rezervată enterobacteriilor'],'AB',164,'Lipopeptidele',
 'Separarea daptomicinei (SSTI/MRSA, endocardită) de dalbavancina în doză unică.',
 ['Spectrul similar vancomicinei și indicațiile listate sunt cele din paragraf.','Doza unică de dalbavancină pentru SSTI este explicită.','Daptomicina este administrată intravenos.','Dalbavancina vizează infecții tegumentare Gram-pozitive, nu Pseudomonas.','MRSA figurează printre indicațiile daptomicinei.']],
 8,'Distractorii mută daptomicina pe cale orală sau pe spectru Gram-negativ, inversând clasa lipopeptidelor.',['Daptomicina','dalbavancina']),

q(31,['Tedizolidul, față de linezolid:',
 ['Este mai puțin medulotoxic și poate fi administrat în doză unică zilnică, spre deosebire de doza dublă zilnică a linezolidului','A fost aprobat pentru tratamentul infecțiilor tegumentare','Monitorizarea săptămânală a hemogramei rămâne necesară pentru citopenie','Tedizolidul se administrează de două ori pe zi, linezolidul o dată pe zi','Medulotoxicitatea superioară face tedizolidul impropriu infecțiilor tegumentare'],'ABC',165,'Oxazolidinonele — Tedizolid',
 'Contrastarea posologiei o dată pe zi și a medulotoxicității mai reduse ale tedizolidului față de linezolid.',
 ['Comparația medulotoxicitate și doză unică versus dublă este explicită.','Aprobarea pentru infecții tegumentare este menționată.','Monitorizarea săptămânală a hemogramei este cerută pentru clasă.','Frecvențele sunt inversate.','Tedizolidul este tocmai mai puțin medulotoxic și aprobat pentru tegument.']],
 8,'Distractorii inversează frecvența de administrare dintre cele două oxazolidinone din același paragraf.',['Tedizolid','doză unică zilnică']),

q(32,['Macrolidele în infecțiile severe și particularitățile azitromicinei:',
 ['Nu sunt utilizate curent pentru infecții severe sau amenințătoare de viață, cum sunt endocardita sau meningita','Biodisponibilitatea serică scăzută face problematică utilizarea azitromicinei în bacteriemii','Prelungirea QT poate duce la torsada vârfurilor; asocierea cu alte medicamente care prelungesc QT se evită când nu este absolut necesară','Azitromicina este antibioticul de primă intenție în bacteriemia meningococică, datorită nivelurilor serice ridicate','Eritromicina este preferată intravenos în endocardită, fiind lipsită de iritație venoasă'],'ABC',165,'Macrolidele',
 'Recunoașterea limitei macrolidelor în endocardită/meningită, a biodisponibilității serice slabe a azitromicinei și a riscului de torsadă.',
 ['Endocardita și meningita sunt exemplele de infecții în care macrolidele nu se folosesc curent.','Nivelurile serice scăzute contraindică azitromicina în bacteriemii.','Torsada și interacțiunea QT sunt avertismentele cardiace.','Azitromicina are biodisponibilitate serică scăzută, problematică în bacteriemii.','Administrarea i.v. a eritromicinei este iritantă și cauzează flebită.']],
 8,'Distractorii transformă tocmai limitele (bacteriemie, flebită, endocardită) în indicații de primă intenție.',['biodisponibilitatea serică scăzută','torsadei vârfurilor']),

q(33,['Polimixinele (colistimetat sodic) se caracterizează prin:',
 ['Colistimetatul sodic este un prodrog inactiv metabolizat in vivo în colistinul activ, ceea ce complică dozarea','Mecanismul bactericid este ruperea membranei prin legare de LPS','Sunt active împotriva majorității bacililor Gram-negativi, cu excepția Proteus și Providencia spp.','A fost descrisă rezistență plasmidică prin enzima fosfoetanolamină MCR-1, care modifică LPS','Sunt antibiotice de primă linie în infecțiile comunitare necomplicate, toxicitatea fiind neglijabilă'],'ABCD',165,'Polimixinele',
 'Integrarea statutului de prodrog al CMS, a țintei LPS, a excepțiilor Proteus/Providencia și a MCR-1.',
 ['Statutul de prodrog și implicația asupra dozării sunt enunțate.','Legarea de LPS cu ruperea membranei este mecanismul citat.','Excepțiile Proteus și Providencia sunt explicite.','MCR-1 și modificarea LPS apar la pagina următoare.','Clasa a fost puțin folosită din cauza neuro- și nefrotoxicității; a revenit ca ultimă alegere.']],
 8,'Patru detalii de clasă (prodrog, LPS, excepții, MCR-1); distractorul anulează toxicitatea care a limitat uzul.',['prodrog inactiv','MCR-1'],[166]),

q(34,['Metronidazolul:',
 ['Este tratamentul de elecție în infecția moderată cu C. difficile, amibiază, giardiază și infecția cu Trichomonas vaginalis','Poate produce o reacție de tip disulfiram cu etanolul și intensifică efectul anticoagulant al warfarinei','Provoacă gust metalic și polineuropatie în tratamentul de lungă durată','Se evită ca profilaxie în chirurgia colonului, anaerobii nefiind o țintă','Absorbția rectală este neglijabilă, supozitorul fiind ineficace'],'ABC',166,'Nitroimidazolii — Metronidazol',
 'Reținerea indicațiilor (C. difficile moderat, protozoare), a reacției disulfiram/warfarină și a neuropatiei de lungă durată.',
 ['Lista de indicații de elecție este cea din paragraf.','Reacția disulfiram și potențarea warfarinei sunt avertismentele.','Gustul metalic și polineuropatia țin de tratamentul prelungit.','Este folosit ca profilaxie în chirurgia colonului.','Supozitorul are absorbție bună și este ieftin, spre deosebire de calea i.v. mai scumpă.']],
 8,'Distractorii neagă profilaxia colonică și absorbția rectală, două fapte alăturate indicațiilor de elecție.',['reacţie de tip disulfiram','gust metalic']),

q(35,['Clindamicina este utilă în infecțiile stafilococice/streptococice severe deoarece:',
 ['Inhibă toxina 1 a sindromului șocului toxic stafilococic (TSST-1) și producția de toxină alfa și joacă un rol în infecțiile cu S. aureus secretor de PVL','Asigură concentrație ridicată la nivel osos și este folosită în osteomielită','Este antibioticul de primă intenție de rutină, asocierea cu C. difficile fiind infirmată','Este inactivă pe anaerobi, în special pe Bacteroides','Concentrația osoasă este neglijabilă, motiv pentru care se evită osteomielita'],'AB',166,'Alte antibiotice — Clindamicina',
 'Corelarea inhibării TSST-1/PVL cu concentrația osoasă, distinct de limita impusă de C. difficile.',
 ['Inhibarea TSST-1, a toxinei alfa și rolul în infecțiile PVL sunt enunțate.','Concentrația osoasă și uzul în osteomielită sunt explicite.','Nu este folosită pe scară largă tocmai din cauza asocierii cu C. difficile.','Este activă împotriva anaerobilor, mai ales Bacteroides.','Textul afirmă concentrație osoasă ridicată, nu neglijabilă.']],
 8,'Distractorii inversează motivul restricției (C. difficile) și activitatea pe Bacteroides/os din același paragraf.',['TSST-1','leucocidină Panton Valentine']),
];
