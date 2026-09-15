import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const pdfOffset=(p:number)=>p===1275?313:p<=1284?p-970:p-973;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hepatologie',34,pdfOffset,`hepatologie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const HEPATOLOGIE_C=[
q(53,['Biochimia hepatică în hepatită versus obstrucția biliară extrahepatică:',
 ['În hepatită, AST și ALT tind să crească precoce, cu o creștere numai ușoară a FA','În obstrucțiile extrahepatice, FA este mult crescută, cu o creștere mai mică a aminotransferazelor','Aceste descoperiri nu pot reprezenta singure baza diagnosticului într-un caz individual','Într-o boală hepatică de durată, TP este de obicei prelungit, iar albumina serică este scăzută','În hepatită, FA este maximal crescută, iar AST/ALT rămân normale'],'ABCD',1275,'Hepatita — Biochimie: aminotransferaze versus fosfatază alcalină',
 'Contrastul patternului AST/ALT versus FA și recunoașterea TP/albuminei ca markeri de durată.',
 ['Textul descrie creșterea precoce AST/ALT, cu FA numai ușor crescută, în hepatită.','Obstrucția extrahepatică inversează acest raport.','Textul avertizează că patternul nu diagnostichează singur un caz individual.','TP prelungit și albumina scăzută caracterizează boala de durată.','Patternul „FA maximală, transaminaze normale” este al obstrucției, nu al hepatitei.']],
 8,'Capcana este inversarea raportului transaminaze/FA între hepatită și obstacol extrahepatic.',['AST şi ALT serice','obstrucţiile biliare extrahepatice']),

q(54,['Testele hematologice în icter și hepatita acută:',
 ['Leucocitele pot fi crescute, indicând infecție (de exemplu colangită)','Leucopenia poate apărea în hepatitele virale','Anomalii ale celulelor mononucleare exclud EBV, Monospot-ul neavând loc','Statusul HIV nu trebuie stabilit în hepatita acută','Leucocitoza neutrofilică definește hepatita virală, Monospot-ul fiind inutil'],'AB',1275,'Hepatita — Hematologie: leucopenie versus leucocitoză',
 'Deosebirea leucocitozei de infecție/colangită de leucopenia hepatitelor virale.',
 ['Leucocitoza poate indica infecție/colangită.','Leucopenia este citată în hepatitele virale.','Celulele mononucleare anormale sugerează mononucleoza EBV și justifică Monospot.','Textul cere să se stabilească și statusul HIV.','Hepatita virală asociază mai degrabă leucopenie.']],
 8,'Distractorul inversează leucopenie versus leucocitoză și anulează Monospot-ul din același paragraf.',['Leucopenia','test Monospot']),

q(55,['Extinderea necrozei hepatice, între extremele descrise, include:',
 ['Necroză pătată sau focală, cu grupuri mici și unice de hepatocite moarte','Necroză multiacinară care cuprinde o mare parte din ficat (necroză hepatică masivă), ducând la insuficiență hepatică acută','Necroză confluentă limitată cu colaps de reticulină și punți (bridging) între vene centrolobulare, între vene și spații porte și între spații porte','Infiltratul portal și lobular este format în principal din limfocite','Necroza este maximală în zona 1, punțile fiind absente în hepatita acută'],'ABCD',1275,'Hepatita — Morfopatologie: bridging și extremele necrozei',
 'Plasarea necrozei focale, a celei masive și a punților de reticulină pe același continuum, cu predilecție zonală 3.',
 ['Necroza pătată/focală este o extremă.','Necroza hepatică masivă multiacinară este cealaltă extremă.','Bridging-ul centrolobular-portal și portal-portal este descris între extreme.','Infiltratul este în principal limfocitar.','Necroza este de obicei maximală în zona 3, nu în zona 1.']],
 8,'Zona 1 versus 3 și negarea punților sunt capcane pe un paragraf care tocmai descrie bridging-ul.',['necroză pătată sau focală','bridging']),

q(56,['Cauze neobișnuite de hepatită cronică, alături de cele din Cadranul 34.6, includ:',
 ['Infecții precum sifilisul, tuberculoza și diverse infecții tropicale','Boli infiltrative, inclusiv amiloidoză și limfom','Ingestia de toxine nu figurează, fiind rezervată doar litiazei biliare','Hepatita E nu apare la imunocompromiși, spre deosebire de VHA','Cauza unică recunoscută rămâne deficitul de α1-antitripsină, restul fiind abandonate'],'AB',1275,'Hepatita — Cauze neobișnuite: infecții și infiltrație',
 'Completarea cadranului cu sifilis/TB și amiloid/limfom, fără a reduce etiologia la α1-AT.',
 ['Sifilisul, tuberculoza și infecțiile tropicale sunt citate ca neobișnuite.','Amiloidoza și limfomul figurează la infiltrație.','Ingestia de toxine este menționată printre cauzele neobișnuite.','Cadranul 34.6 include hepatita E la imunocompromiși.','Textul identifică hepatita virală cronică drept cauza principală mondială, nu α1-AT.']],
 8,'Distractorul reinstaurează α1-AT ca etiologie unică, contrazicând ierarhia virală a aceluiași paragraf.',['sifilis','amiloidoza']),

q(57,['După un răspuns virusologic susținut la VHC, urmărirea ulterioară:',
 ['Pacienții fără ciroză pot fi absolviți de urmărire după virus nedetectabil la 12 săptămâni de la terminarea terapiei','La cirotici, riscul de cancer hepatic persistă, deși la un nivel scăzut, chiar după clearance','Progresia fibrozei este oprită și poate chiar regresa după clearance','Pacienții fără ciroză rămân la risc identic de HCC și necesită RMN lunar tot restul vieții','Clearance-ul viral nu influențează fibroza, urmărirea fiind identică indiferent de ciroză'],'ABC',1284,'Hepatita virală C — SVR12 și urmărirea post-terapie',
 'Disocierea urmăririi: ieșire din dispensar fără ciroză versus persistența riscului de HCC la cirotici.',
 ['Absolvirea de urmărire după SVR12 la non-cirotici este explicită.','Riscul de HCC persistă la cirotici, la nivel scăzut.','Oprirea și posibila regresie a fibrozei sunt din text.','Non-ciroticii pot fi absolviți de urmărire, nu supravegheați lunar prin RMN.','Fibroza se oprește/poate regresa; urmărirea depinde de prezența cirozei.']],
 8,'Capcana este menținerea screeningului HCC la non-cirotici după SVR12, deși textul îi absolvă.',['absolviti de urmărire','12 săptămâni']),

q(58,['Virusul hepatitei E, dincolo de analogia cu VHA și de mortalitatea la gravide:',
 ['Un vaccin a fost dezvoltat și utilizat cu succes în China','Infecția acută cu VHE este acum cea mai comună cauză de hepatită virală acută în Marea Britanie și în multe țări din UE','Infecția derivată de la animale (în special porc) este de obicei mai puțin agresivă decât cea prin apă din subcontinentul Indian','O mare parte din populația adultă din Anglia are markeri de infecție, sugerând infecție subclinică frecventă','VHE a dispărut din Europa, vaccinul chinezesc fiind inactiv, iar porcul nefiind rezervor'],'ABCD',1284,'Hepatita virală E — Vaccin China, zoonoză și epidemiologie UK',
 'Reținerea vaccinului chinezesc, a întâietății VHE ca hepatită acută în UK/UE și a formei zoonotice mai blânde.',
 ['Vaccinul utilizat cu succes în China este citat.','VHE este cea mai comună cauză de hepatită virală acută în UK și multe țări UE.','Zoonoza de la porc este mai puțin agresivă decât forma hidrică indiană.','Markerii la adulții din Anglia sugerează infecție subclinică comună.','Textul o descrie ca frecventă în UK/UE, cu rezervor porcin.']],
 8,'Întâietatea VHE în UK este contraintuitivă față de VHA/VHB; distractorul o neagă complet.',['utilizat cu succes în China','Marea Britanie']),

q(59,['Precizați enunțul corect privind hepatitele non-A–E:',
 ['Aproximativ 10–15% din hepatitele acute virale nu pot fi clasificate (non-A–E)','Agentul GB (VHG) și TTV sunt cauzele principale de ciroză la nivel mondial','Biochimia hepatică alterată din infecțiile acute este invariabil gravă și definește insuficiența fulminantă','VHG și TTV înlocuiesc VHB ca principală cauză de ciroză mondială','Procentul de 10–15% a fost eliminat, toate hepatitele acute fiind azi etichetabile'],'A',1284,'Hepatita — Non-A–E: cota 10–15%',
 'Reținerea cotei de hepatite acute virale neclasificate, fără a atribui patogenitate VHG/TTV.',
 ['Cota 10-15% este reafirmată.','VHG și TTV nu au fost documentați ca factori cauzatori de boală la oameni.','Modificările biochimice din alte infecții acute sunt de obicei ușoare și fără semnificație clinică.','Cauza principală mondială de ciroză rămâne hepatita virală clasică, nu GB/TTV.','Textul păstrează cota de neclasificate.']],
 8,'Capcana este promovarea VHG/TTV la rangul VHB, deși textul le neagă patogenitatea umană.',['virusul hepatitei G','T TV']),

q(60,['La pacienții imunocompromiși, infecția cronică cu VHE:',
 ['Poate conduce la infecție cronică','Se tratează prin reducerea imunosupresiei și/sau ribavirină','Nu există status de purtător la imunocompetenți, iar infecția nu progresează spre cronicizare decât la unii imunosupresați','Ribavirina este linia întâi la toți imunocompetenții cu hepatită E acută hidrică','Cronicizarea VHE este regula la imunocompetenți, ribavirina fiind inutilă la transplantați'],'ABC',1284,'Hepatita virală E — Infecția cronică a imunocompromisului',
 'Limitarea ribavirinei și a reducerii imunosupresiei la forma cronică a imunocompromisului.',
 ['Cronicizarea la imunosupresați este explicită.','Reducerea imunosupresiei și/sau ribavirina sunt tratamentul citat.','Absența statusului de purtător la imunocompetenți este din text.','Ribavirina nu este linia întâi a hepatitei E acute la imunocompetenți.','Relația este inversă: cronicizarea ține de imunosupresați.']],
 8,'Extinderea ribavirinei de la transplantați la toate hepatitele E acute este capcana terapeutică.',['ribavirina','imunocompromişi']),

q(61,['Pe lângă axa CCL2–CCR2 deja consacrată, fibrogeneza hepatică este favorizată de:',
 ['Permeabilitatea crescută a tubului digestiv și activarea receptorului hepatic LPS–TLR4','Lezarea și inflamația repetitivă sau cronică, care perpetuează procesul','Terapii antifibrotice (inclusiv strategii de transplant de celule stem) aflate în dezvoltare, transplantul rămânând singurul tratament disponibil pentru insuficiența hepatică','Activarea TLR4 care înlocuiește complet celulele stelate, MMP-urile nemaifiind citate','Antifibroticele orale sunt deja standardul, transplantul fiind abandonat'],'ABC',1289,'Ciroza hepatică — LPS–TLR4 și terapii antifibrotice în dezvoltare',
 'Adăugarea axei intestin–LPS–TLR4 la cascada stelată și recunoașterea stadiului experimental al antifibroticelor.',
 ['LPS-TLR4 și permeabilitatea digestivă favorizează fibrogeneza.','Lezarea repetitivă perpetuează procesul.','Antifibroticele (inclusiv celule stem) sunt în dezvoltare; transplantul rămâne singurul tratament al insuficienței.','Celulele stelate și MMP/TIMP rămân centrale; TLR4 le completează, nu le înlocuiește.','Transplantul nu este abandonat.']],
 8,'TLR4 este un adjuvant al cascadei stelate, nu un înlocuitor; distractorul transformă cercetarea în standard.',['TLR4','celule stern']),

q(62,['Toți pacienții cu ciroză trebuie investigați pentru a exclude cauze tratabile. Printre acestea textul citează:',
 ['Hepatita virală','Boala Wilson','Alcoolul, încă cea mai frecventă cauză occidentală, probabil înlocuit de NAFLD','Infecția virală, cel mai frecvent factor etiologic la nivel mondial','Ciroza nu se investighează etiologic, fiind considerată ireversibilă indiferent de cauză'],'ABCD',1289,'Ciroza hepatică — Cauze tratabile de exclus la diagnostic',
 'Reținerea mandatului de a căuta cauze tratabile (viral, Wilson) alături de ierarhia alcool/NAFLD versus viral mondial.',
 ['Hepatita virală este exemplu de cauză tratabilă.','Boala Wilson este explicit menționată.','Alcoolul rămâne prima cauză occidentală, cu NAFLD pe cale să îl înlocuiască.','Infecția virală este cel mai frecvent factor mondial.','Textul cere investigarea cauzelor tratabile, nu resemnarea.']],
 8,'Mandatul „exclude cauze tratabile” este ușor de negat prin dogma ireversibilității cirozei.',['cauze tratabile','boala Wilson']),

q(63,['Identificați afirmația corectă referitoare la forma mixtă de ciroză:',
 ['Ocazional se poate întâlni o formă mixtă, cu noduli mici și mari','Ciroza nu interferează cu circulația sanguină, funcțiile ficatului rămânând intacte','Trăsăturile specifice sunt absența nodulilor și păstrarea arhitecturii lobulare','Forma mixtă înlocuiește complet celelalte două tipuri în hepatita virală','Ciroza nu alterează arhitectura, nodulii fiind absenți prin definiție'],'A',1289,'Ciroza hepatică — Forma mixtă',
 'Recunoașterea formei mixte (noduli mici și mari) ca variantă ocazională alături de micro- și macronodulară.',
 ['Forma mixtă cu noduli mici și mari este citată ocazional.','Ciroza interferează cu circulația și cu funcțiile ficatului, ducând la HTP și insuficiență.','Trăsăturile specifice sunt nodulii de regenerare separați prin septe și pierderea arhitecturii lobulare.','Mixta nu înlocuiește micro/macro; viralul rămâne adesea macronodular.','Ciroza este definită tocmai prin alterarea arhitecturii cu noduli.']],
 8,'Forma mixtă este detaliul nefolosit; distractorii neagă definiția arhitecturală a cirozei.',['formă mixtă','septe fibroase']),

q(64,['La ciroticii tineri, investigațiile etiologice trebuie să includă:',
 ['Cuprul seric și α1-antitripsina, determinate de rutină la ciroticii tineri','TIBC și feritina, pentru a exclude hemocromatoza ereditară; sunt disponibili și markeri genetici','Ultrasonografia, care poate arăta nodularitate marginală și distorsiunea arhitecturii arteriale în ciroza constituită','Cuprul seric este inutil sub 40 de ani, α1-AT măsurându-se doar după 70 de ani','Feritina scăzută confirmă hemocromatoza, TIBC neavând rol'],'ABC',1290,'Ciroza hepatică — Cupru, α1-AT și feritină la tânărul cirrhotic',
 'Aplicarea panelului obligatoriu al tânărului cirrhotic (cupru, α1-AT, TIBC/feritină).',
 ['Cuprul și α1-AT trebuie determinate la ciroticii tineri.','TIBC, feritina și markerii genetici vizează hemocromatoza.','Ecografia descrie nodularitatea și distorsiunea vasculară.','Panelul este cerut tocmai la tineri, nu după 70 de ani.','Hemocromatoza asociază feritină crescută, nu scăzută.']],
 8,'Inversează vârsta țintă a panelului Wilson/α1-AT și direcția feritinei din hemocromatoză.',['Cuprul seric','a1-antitripsina']),

q(65,['Limitările elastografiei (Fibroscan) și locul endoscopiei pentru varice:',
 ['Limitările tehnice împiedică folosirea la pacienții cu ascită sau obezitate morbidă, dar în majoritatea cazurilor rămâne utilizabilă','Dacă valoarea este >25 kPa, hipertensiunea portală este foarte probabilă','Unii experți recomandă ca endoscopia pentru varice să fie restrânsă numai la cei cu scoruri înalte la Fibroscan','Fibroscan-ul este inutil în ascită, dar înlocuiește complet endoscopia la toți ciroticii, indiferent de valoare','Valorile sub 5 kPa fac hipertensiunea portală certă și impun TIPS de primă intenție'],'ABC',1290,'Ciroza hepatică — Fibroscan: ascită, obezitate și triaj endoscopic',
 'Reținerea limitărilor (ascită, obezitate) și a strategiei de a rezerva endoscopia scorurilor înalte (>25 kPa).',
 ['Ascita și obezitatea morbidă sunt limitările citate.','Pragul >25 kPa face HTP foarte probabilă.','Restrângerea endoscopiei la scoruri înalte este poziția unor experți.','Nu înlocuiește endoscopia la toți; este limitat tehnic în ascită.','HTP certă se leagă de valori înalte (25 kPa), nu de cele sub 5.']],
 8,'Pragul 25 kPa este ușor de mutat sub 5; distractorul transformă un triaj expert în înlocuirea totală a endoscopiei.',['obezitate morbidă','>25 kPa']),

q(66,['Biopsia hepatică în ciroză, dincolo de elastografie:',
 ['Rămâne standardul de aur pentru confirmarea tipului și gravității bolii','În ciroza macronodulară, miezul nodulului se poate fragmenta, provocând erori de eșantionare','Determinarea cantitativă a fierului și a cuprului este necesară pentru hemocromatoză sau Wilson','Analiza digitală a colorației cu roșu picrosirius poate cuantifica colagenul','Biopsia este abandonată, picrosiriusul pe ser înlocuind orice fragment tisular'],'ABCD',1290,'Ciroza hepatică — Biopsie: eroare de eșantionare și picrosirius',
 'Păstrarea biopsiei ca standard, cu recunoașterea fragmentării macronodulare și a cuantificării prin picrosirius.',
 ['Standardul de aur este explicit.','Eroarea de eșantionare prin fragmentare este specifică formei macronodulare.','Fierul și cuprul cantitative confirmă HE/Wilson.','Picrosiriusul digital cuantifică colagenul.','Biopsia nu este abandonată; picrosiriusul se aplică pe eșantionul de biopsie.']],
 8,'Fragmentarea macronodulară este detaliul tehnic nefolosit; distractorul mută picrosiriusul din țesut în ser.',['roşu picrosirius','erori de eşantionare']),

q(67,['Măsurile generale la ciroticul compensat, dincolo de sodiul ≤2 g/zi:',
 ['Pacienții cu ciroză compensată pot să ducă o viață normală','Cei expuși riscului trebuie vaccinați împotriva hepatitei A și B','Tratamentul cauzei de bază poate opri sau face să regreseze modificările cirozei','Alcoolul, aspirina și AINS se evită, putând precipita sângerare sau afectare renală','Vaccinarea VHA/VHB este contraindicată, ciroza compensată impunând repaus la pat permanent'],'ABCD',1290,'Ciroza hepatică — Viață normală, vaccinare VHA/VHB',
 'Completarea măsurilor igienice cu vaccinarea VHA/VHB și cu posibilitatea unei vieți normale în forma compensată.',
 ['Viața normală în forma compensată este explicită.','Vaccinarea VHA și VHB este cerută la cei la risc.','Tratamentul cauzei poate opri sau regressa ciroza.','Alcoolul, aspirina și AINS sunt de evitat.','Vaccinarea este recomandată, nu contraindicată; repausul permanent nu este cerut.']],
 8,'Vaccinarea VHA/VHB a ciroticului la risc este ușor de omis printre restricțiile de sodiu deja consacrate.',['vaccinaţi împotriva','viaţă normală'],[1291]),

q(68,['Conform clasificării Child-Pugh modificate (Cadranul 34.16), supraviețuirile citate sunt:',
 ['Child A (<7 puncte): 82% la 1 an, 45% la 5 ani, 25% la 10 ani','Child B (7–9 puncte): 62% la 1 an, 20% la 5 ani, 7% la 10 ani','Child C (10+ puncte): 42% la 1 an, 20% la 5 ani, 0% la 10 ani','Supraviețuirea generală la 5 ani în ciroză este de aproximativ 50%','Child C are supraviețuire de 97% la 1 an, identică MELD <10'],'ABCD',1291,'Ciroza hepatică — Child-Pugh: supraviețuiri la 1, 5 și 10 ani',
 'Memorarea tripletului 82/45/25 versus 62/20/7 versus 42/20/0 și a supraviețuirii generale de ~50% la 5 ani.',
 ['Tripletul Child A este din cadran.','Tripletul Child B este din cadran.','Tripletul Child C, inclusiv 0% la 10 ani, este din cadran.','~50% la 5 ani este cifra generală din text.','97% la 1 an aparține MELD <10, nu Child C.']],
 8,'Permutează 97% (MELD <10) pe Child C, a cărui supraviețuire la 1 an este 42%.',['82% la 1 an','0% la 10 ani']),

q(69,['Indicatorii clinici de prognostic nefavorabil (Cadranul 34.15), dincolo de albumină/Na/TP/creatinină:',
 ['Icter persistent','Eșecul răspunsului la terapie','Complicații neuropsihiatrice după insuficiență hepatică progresivă','Etiologie de ciroză alcoolică, dacă pacientul continuă să consume alcool','Icterul fugace și abstinența de alcool, ca markeri de prognostic excelent identic Child A'],'ABCD',1291,'Ciroza hepatică — Cadranul 34.15: icter, alcool, neuropsihiatrie',
 'Completarea cadranului cu icterul persistent, eșecul terapeutic, complicațiile neuropsihiatrice și alcoolul continuat.',
 ['Icterul persistent figurează la semnele clinice.','Eșecul răspunsului la terapie este listat.','Complicațiile neuropsihiatrice sunt citate.','Ciroza alcoolică cu consum continuat este exemplu de etiologie nefavorabilă.','Continuarea alcoolului și icterul persistent agravează, nu ameliorează, prognosticul.']],
 8,'Alcoolul continuat ca indicator nefavorabil este ușor de transformat într-un marker „de Child A”.',['Icter persistent','continuă să consume alcool']),

q(70,['Indicații de transplant hepatic mai puțin abordate anterior:',
 ['Sindromul hepatopulmonar și hipertensiunea porto-pulmonară pot justifica transplantul chiar dacă funcția hepatică este păstrată','În PBC, bilirubina persistent >100 µmol/L sau pruritul intratabil sunt repere','După DAA, rata transplantelor pentru VHC în UK a scăzut de la 10,5% (2013) la 4,7% (2016)','Ciroza NASH este foarte probabil să devină cea mai frecventă indicație, dat fiind obezitatea','VHC rămâne indicația în creștere, DAA neinfluențând listele de așteptare'],'ABCD',1292,'Ciroza hepatică — Transplant: hepatopulmonar, VHC 10,5→4,7%, NASH',
 'Reținerea indicațiilor extrahepatice (hepatopulmonar, porto-pulmonar), a căderii VHC pe liste și a ascensiunii NASH.',
 ['Complicațiile extrahepatice cu funcție păstrată sunt explicitate.','Bilirubina >100 și pruritul intratabil sunt din PBC.','Cifrele 10,5% și 4,7% sunt din text.','NASH este prognozată ca cea mai frecventă indicație.','Rata VHC a scăzut după DAA, nu a crescut.']],
 8,'Căderea 10,5→4,7% a VHC este contraintuitivă față de „epidemia VHC”; distractorul o inversează.',['10,5% în 2013','4,7% în 2016']),

q(71,['Transplantul în boala hepatică alcoolică, dincolo de Child C:',
 ['Se oferă pacienților bine motivați care au încetat alcoolul fără ameliorarea funcției, cu consiliere frecventă','A fost demonstrat ca tratament de salvare în hepatita alcoolică severă neresponsivă, dar sunt necesare studii suplimentare','După transplant, pacienții „înalt selectați” au supraviețuire comparabilă la 1 și 3 ani cu cei cu boală cronică','Nu toți specialiștii sunt de acord să abandoneze așteptarea abstinenței dovedite pre-transplant','Abstinența pre-transplant este considerată inutilă de toți autorii, transplantul fiind oferit în plin sevrajul necontrolat'],'ABCD',1292,'Ciroza hepatică — Transplantul în hepatita alcoolică severă',
 'Nuanțarea transplantului precoce la „înalt selectați” versus persistența cerinței de abstinență la o parte dintre specialiști.',
 ['Motivația, oprirea alcoolului și consilierea sunt din text.','Salvarea în hepatita alcoolică severă este menționată cu rezervă.','Supraviețuirea comparabilă la 1 și 3 ani a selecționaților este citată.','Dezacordul privind abandonarea ferestrei de abstinență este explicit.','Textul păstrează controversa, nu un consens de transplant în sevrajul necontrolat.']],
 8,'Controversa abstinenței pre-transplant este detaliul nefolosit; distractorul o transformă în consens fals.',['înalt selectaţi','abstinenţei dovedite']),

q(72,['Pregătirea pre-transplant hepatic include:',
 ['Confirmarea diagnosticului, imagistică ecografică și secțională','Studiul radiologic al circulației hepatice arteriale și al arborelui biliar','Evaluarea stării cardiorespiratorii și renale','Sprijin psihosocial și, eventual, psihiatric regulat, date fiind implicațiile etice și financiare','Pregătirea se rezumă la un grupaj ABO, evaluarea cardiorespiratorie fiind inutilă'],'ABCD',1292,'Ciroza hepatică — Pregătirea pre-transplant',
 'Recunoașterea pachetului imagistic vascular/biliar, cardiorespirator-renal și psihosocial.',
 ['Confirmarea și imagistica sunt din text.','Circulația arterială și arborele biliar sunt studiate radiologic.','Evaluarea cardiorespiratorie și renală este cerută.','Sprijinul psihosocial/psihiatric este calificat drept vital.','Evaluarea cardiorespiratorie este parte a pregătirii, nu este inutilă.']],
 8,'Pachetul pre-transplant este mai larg decât ABO; distractorul îl reduce la un grupaj.',['cardiorespirato￾rii şi renale','psihosocial']),

q(73,['Contraindicațiile relative și vârsta în transplantul hepatic:',
 ['Sunt legate în principal de considerente anatomice, cum ar fi tromboza venoasă splanhnică extinsă','Cu unele excepții, pacienții peste 70 de ani nu sunt candidați de regulă','Contraindicațiile absolute includ lipsa angajamentului psihologic din partea pacientului','Tromboza splanhnică extinsă face actul chirurgical mai dificil, nu îl indică de primă intenție','Vârsta peste 70 de ani este o indicație absolută, tromboza splanhnică fiind ignorată'],'ABCD',1292,'Ciroza hepatică — Transplant: vârstă >70 și tromboză splanhnică',
 'Deosebirea contraindicației relative anatomice (tromboză splanhnică) de pragul de vârstă ~70 de ani.',
 ['Tromboza splanhnică extinsă este exemplul de contraindicație relativă.','Pragul de 70 de ani, cu excepții, este explicit.','Lipsa angajamentului psihologic figurează la absolute.','Dificultatea chirurgicală, nu indicația, definește relativa.','Peste 70 de ani este de regulă non-candidat, nu indicație absolută.']],
 8,'Inversează relativa (anatomie) și absoluta (angajament) și transformă vârsta >70 într-o indicație.',['peste 70 de ani','tromboza venoasă splanhnică']),

q(74,['Resângerarea variceală acută, după controlul inițial:',
 ['Survine la aproximativ 15–20% din cazuri în primele 5 zile','Sursa trebuie căutată endoscopic și uneori este ulcerația sau alunecarea unei benzi de ligatură','Endoscopia trebuie efectuată o singură dată pentru a controla resângerarea; dacă hemostaza eșuează, este necesar TIPS','Ranitidina poate fi preferabilă IPP, riscul de infecție cu Clostridium difficile fiind mai mic; sucralfatul 1 g ×4/zi poate reduce ulcerațiile după bandare','Resângerarea este excepțională sub 2% în 5 zile, TIPS fiind contraindicat'],'ABCD',1295,'Ciroza hepatică — Resângerare 15–20% în 5 zile și ranitidină versus IPP',
 'Fixarea ferestrei 15–20%/5 zile, a unei singure re-endoscopii și a preferinței ranitidinei față de IPP pentru C. difficile.',
 ['Cota 15-20% în 5 zile este din text.','Ulcerația sau alunecarea benzii sunt surse citate.','O singură endoscopie de control, apoi TIPS.','Ranitidina, C. difficile și sucralfatul 1 g ×4/zi sunt explicite.','Cifra reală este 15-20%, nu sub 2%; TIPS este pasul următor.']],
 8,'Permutează 15–20% cu mortalitatea Child C (50%) sau cu o cotă minimală; ranitidina versus IPP este detaliul nefolosit.',['15-20% din cazuri','Clostridium difficile'],[1294]),

q(75,['TIPS, dincolo de studiul pe 671 de pacienți și de fereastra de 72 de ore:',
 ['Crește riscul de encefalopatie portală','Stenoza sau tromboza de stent sunt mai puțin frecvente cu stenturi acoperite decât cu „metal gol”','Colateralele din venele splenice sau portale pot fi embolizate selectiv','Un RCT pe 28 de pacienți a sugerat eficacitate mai mare și evenimente adverse mai puține pentru stentul esofagian versus tamponada cu balon','Stenturile acoperite cresc tromboza față de metalul gol, encefalopatia fiind absentă după TIPS'],'ABCD',1295,'Ciroza hepatică — TIPS: stent acoperit versus metal gol',
 'Contrastul stenturilor acoperite versus metal gol și recunoașterea encefalopatiei ca preț al șuntului.',
 ['Encefalopatia portală crește după TIPS.','Stenturile acoperite reduc stenoza/tromboza față de metalul gol.','Embolizarea selectivă a colateralelor este menționată.','Studiul pe 28 de pacienți compară stentul esofagian cu balonul.','Relația acoperit versus gol este inversă; encefalopatia este un risc, nu este absentă.']],
 8,'Inversează avantajul stentului acoperit și neagă encefalopatia, două consecințe consecutive ale aceluiași paragraf.',['stenturi „acoperite"','metal gol']),

q(76,['Confirmarea clinică a ascitei și factorii precipitanți:',
 ['Matitatea deplasabilă în flancuri confirmă prezența lichidului','Mulți pacienți au edeme periferice; revărsatul pleural, de obicei drept, poate trece prin defecte diafragmatice congenitale','Factorii precipitanți includ continuarea alcoolului, infecția/sepsisul, HCC sau tromboza venelor splanhnice','Durerea abdominală severă trebuie să ridice suspiciunea de PBS','Matitatea deplasabilă exclude ascita, revărsatul pleural drept fiind patognomonic pentru TBC'],'ABCD',1296,'Ciroza hepatică — Ascita: matitate deplasabilă, hidrotorax drept',
 'Reținerea semnului de matitate deplasabilă, a hidrotoraxului drept prin defect diafragmatic și a precipitanților (alcool, HCC, tromboză).',
 ['Matitatea deplasabilă este semnul clinic citat.','Edemele și revărsatul drept prin defecte congenitale sunt din text.','Lista de precipitanți este explicită.','Durerea mai severă ridică suspiciunea de PBS.','Matitatea deplasabilă confirmă lichidul, nu îl exclude.']],
 8,'Hidrotoraxul drept prin defect diafragmatic este ușor de etichetat TBC; matitatea deplasabilă este semnul clasic.',['deplasabile în flancuri','partea dreaptă']),

q(77,['Paracenteza diagnostică a ascitei cere 10–20 ml pentru:',
 ['Numărătoarea celulelor (neutrofile >250/mm³ sugerează PBS)','Colorație Gram și culturi','Proteine și gradient albumină ser–ascită; citologie pentru celule maligne; amilază pentru ascites pancreatică','SAAG >11 g/L sugerează hipertensiune portală; SAAG <11 g/L, afecțiuni peritoneale (neoplazie)','Amilaza în ascită confirmă PBS, SAAG >11 g/L excluzând hipertensiunea portală'],'ABCD',1296,'Ciroza hepatică — Paracenteza diagnostică: pachetul de 10–20 ml',
 'Listarea pachetului complet (celule, Gram, SAAG, citologie, amilază) pe volumul 10–20 ml.',
 ['Volumul 10-20 ml și pragul 250/mm³ sunt din text.','Gram și culturile figurează.','Citolgia și amilaza completează proteinele/SAAG.','SAAG >11 versus <11 este în Cadranul 34.20.','Amilaza țintește ascita pancreatică, nu PBS; SAAG >11 sugerează HTP.']],
 8,'Amilaza este mutat de la pancreatită la PBS; pragurile SAAG sunt inversate în distractor.',['10-20 ml','Amilaza']),

q(78,['Pentru ascita refractară, dincolo de TIPS și de albumina 8 g/L:',
 ['Un conduct peritoneo-vezical cu pompă cu baterie implantabilă reîncărcabilă (pompa Alfa) transferă ascita în vezică','Studii mai vechi au arătat scăderea paracentezelor de volum mare, cu complicații precum durere locală și infecție','La pacienții ante finem, un drenaj abdominal pe termen lung (LTAD) poate permite controlul ascitei la domiciliu','TIPS se montează cu condiția să nu existe encefalopatie portosistemică sau perturbare importantă a funcției renale','Pompa Alfa înlocuiește transplantul, TIPS fiind contraindicat în ascita refractară'],'ABCD',1297,'Ciroza hepatică — Pompa Alfa și LTAD în ascita refractară',
 'Recunoașterea pompei peritoneo-vezicale Alfa și a LTAD paliativ, cu rezerva TIPS față de encefalopatie/funcție renală.',
 ['Pompa Alfa este descrisă cu transfer peritoneo-vezical.','Reducerea paracentezelor și complicațiile locale sunt citate.','LTAD la domiciliu pentru ante finem este menționat.','Condițiile TIPS (fără EPS, fără perturbare renală importantă) sunt explicite.','TIPS rămâne o opțiune; pompa nu înlocuiește transplantul.']],
 8,'Pompa Alfa și LTAD sunt dispozitive nefolosite anterior; distractorul le urcă peste TIPS/transplant.',['pompa Alfa','LTAD']),

q(79,['Peritonita bacteriană spontană, dincolo de pragul de 250 neutrofile:',
 ['Apare la până la 18% dintre pacienții cu ascită care au suferit decompensare','Organismele ajung hematogen; majoritatea sunt Escherichia coli, Klebsiella sau enterococi','Este o indicație pentru transplant hepatic','Antibioticul cu spectru larg se asociază perfuziilor de albumină umană','PBS este o colonizare cutanată inocentă, fără indicație de transplant, germenii fiind anaerobi stricti'],'ABCD',1297,'Ciroza hepatică — PBS: 18%, germeni și albumină',
 'Fixarea prevalenței ~18%, a tridentului E. coli/Klebsiella/enterococ și a asocierii antibiotic–albumină.',
 ['Cota de până la 18% este din text.','Calea hematogenă și cei trei germeni sunt explicite.','PBS este indicație de transplant.','Albumina se asociază antibioticului.','Nu este inocentă; germenii citați sunt enterobacterii și enterococi, nu anaerobi stricti.']],
 8,'Cota 18% completează mortalitatea 10–15% și recurența 70% deja consacrate; distractorul banalizează indicația de transplant.',['până la 18%','enterococi']),

q(80,['Tratamentul encefalopatiei portosistemice, dincolo de lactuloză:',
 ['Lactuloza se dă 10–30 ml de trei ori pe zi','Rifaximina, antibiotic semisintetic cu absorbție foarte redusă, are efect benefic în profilaxia secundară','Metronidazolul 200 mg de patru ori pe zi poate fi eficient în episodul acut; neomicina trebuie evitată','Embolizarea colateralelor care ocolesc ficatul poate reduce encefalopatia la cazuri selectate','Neomicina înlocuiește rifaximina în profilaxia secundară, lactuloza fiind contraindicată'],'ABCD',1298,'Ciroza hepatică — EPS: rifaximină, metronidazol, embolizare',
 'Ierarhizarea rifaximinei de profilaxie secundară, a metronidazolului acut și a evitării neomicinei.',
 ['Doza 10-30 ml ×3/zi este din text.','Rifaximina este citată pentru profilaxia secundară.','Metronidazolul acut și evitarea neomicinei sunt explicite.','Embolizarea colateralelor este o opțiune la selecționați.','Neomicina trebuie evitată, nu promovată; lactuloza rămâne baza.']],
 8,'Inversează locul neomicinei (de evitat) cu al rifaximinei (profilaxie secundară).',['Rifaximina','Neomicina']),

q(81,['Sindromul hepatorenal, dincolo de vasodilatația periferică:',
 ['Diureza este scăzută, sodiul urinar redus, capacitatea de concentrare păstrată (tubi intacți), histologia aproape normală','Este adesea precipitat de diuretice excesive, AINS, diaree, paracenteză sau infecție, în special PBS','Terlipresina sau noradrenalina plus albumină i.v. ameliorează funcția renală în aproximativ 50% din cazuri','La candidații de transplant, hemodializa poate fi o punte, adesea dificil de efectuat','HRS se tratează prin creșterea spironolactonei, histologia arătând necroză tubulară acută difuză'],'ABCD',1298,'Ciroza hepatică — HRS: precipitanți și terlipresină plus albumină 50%',
 'Recunoașterea caracterului „funcțional” (Na urinar scăzut, tubi intacți) și a răspunsului ~50% la vasopresor plus albumină.',
 ['Profilul urinar și histologia aproape normală definesc forma funcțională.','Lista de precipitanți include PBS.','Cota de ~50% pentru terlipresină/noradrenalină plus albumină este explicită.','Dializa-punte este menționată cu rezerve.','Spironolactona excesivă precipită HRS; histologia nu este NTA difuză.']],
 8,'Cota 50% vasopresor+albumină și precipitanții (AINS, PBS) sunt ușor de înlocuit cu o NTA „anatomică”.',['aproximativ 50% din cazuri','funcţie tubulară intactă']),

q(82,['Encefalopatia cronică din ciroză poate evolua, rar, cu:',
 ['Un sindrom organic cu semne cerebeloase sau coreoatetozice','O mielopatie care duce la parapareză spastică prin demielinizare','Necesitatea transplantului hepatic la acești pacienți','Encefalopatia acută din insuficiența hepatică acută, care are un prognostic foarte rău','Mielopatia spastică este reversibilă în 48 de ore cu o singură doză de neomicină, transplantul fiind inutil'],'ABCD',1298,'Ciroza hepatică — EPS cronică: mielopatie și coreoatetoza',
 'Recunoașterea formei rare cerebeloase/coreoatetozice și a mielopatiei prin demielinizare ca indicație de transplant.',
 ['Semnele cerebeloase sau coreoatetozice sunt din text.','Mielopatia cu parapareză spastică prin demielinizare este citată.','Acești pacienți necesită transplant.','Prognosticul foarte rău al EPS din IHA este distins.','Neomicina trebuie evitată; mielopatia nu se rezolvă în 48 de ore.']],
 8,'Mielopatia demielinizantă este un detaliu neurologic nefolosit; distractorul o „vindecă” cu neomicină.',['parapareză spastică','coreoatetozice']),

q(83,['Manifestările asociate PBC, dincolo de AMA M2 și UDCA:',
 ['Keratoconjunctivita sicca este observată în 70% din cazuri','Se asociază sindrom Sjögren, sclerodermie, tiroidită','Pot fi asociate acidoza tubulară renală, glomerulonefrita membranoasă, boala celiacă și pneumonia interstițială','Xantelasma pigmentată a pleoapelor sau depozite de colesterol în pliurile mâinilor pot fi constatate','PBC nu are manifestări extrahepatice, sicca fiind specifică PSC'],'ABCD',1299,'Ciroza hepatică — PBC: sicca 70% și asocieri autoimune',
 'Completarea serologiei PBC cu sicca 70% și cu lista de asocieri (Sjögren, ATR, membranoasă, celiacă).',
 ['Cota 70% pentru sicca este explicită.','Sjögren, sclerodermia și tiroidita sunt citate.','ATR, membranoasa, celiaca și pneumonia interstițială figurează.','Xantelasma și depozitele din pliuri sunt din tabloul clinic.','Sicca 70% este a PBC, nu a PSC.']],
 8,'Lista extrahepatică (ATR, membranoasă, celiacă) este nefolosită; distractorul mută sicca pe PSC.',['70% din cazuri','Keratoconjunctivita sicca']),

q(84,['Patogeneza PBC, dincolo de AMA:',
 ['Un factor de mediu acționează pe o gazdă predispusă, prin mimetică moleculară','Anticorpii E. coli și Novosphingobium aromaticivorans sunt prezenți în titru ridicat','Sinteza IgM este crescută prin eșecul comutării de la IgM la IgG','Nu s-au găsit loci specifici MHC de clasă II','PBC este o infecție hidrică cu VHE, IgM scăzut definind vindecarea'],'ABCD',1298,'Ciroza hepatică — PBC: Novosphingobium și comutarea IgM',
 'Reținerea mimetismului molecular (E. coli, Novosphingobium) și a eșecului class-switch IgM→IgG.',
 ['Mimetica moleculară este formularea din text.','Cei doi microbi sunt citați cu titru ridicat.','Eșecul comutării IgM→IgG explică IgM-ul crescut.','Absența locusurilor MHC II specifice este explicită.','PBC nu este hepatită E; IgM este crescut, nu scăzut.']],
 8,'Novosphingobium este un detaliu ușor de înlocuit cu VHE; class-switch-ul IgM este mecanismul nefolosit.',['Novosphingobium','lgM la anticorpi lgG'],[1299]),

q(85,['Diagnosticul diferențial al granuloamelor hepatice, alături de PBC (~40% din biopsii):',
 ['Sarcoidoză','Tuberculoză și schistosomiază','Reacții medicamentoase și bruceloză','Infestare parazitară, de exemplu strongiloidoză','Granuloamele hepatice apar doar în PBC, restul etiologiilor fiind pulmonare'],'ABCD',1299,'Ciroza hepatică — Granuloame hepatice: DD dincolo de PBC',
 'Recunoașterea spectrului granulomatos (sarcoid, TB, schistosomiază, brucelă, strongiloidoză) versus PBC.',
 ['Sarcoidoza figurează în lista de DD.','TB și schistosomiaza sunt citate.','Medicamentele și bruceloza sunt menționate.','Strongiloidoza este exemplul parazitar.','Lista arată tocmai că granuloamele hepatice au multiple cauze.']],
 8,'Granuloamele din PBC (~40%) sunt ușor de crezut patognomonice; textul oferă o listă lungă de DD.',['strongiloidoză','bruceloză']),

q(86,['Hemocromatoza ereditară, dincolo de C282Y și de flebotomie:',
 ['Hepcidina hepatică ocupă o poziție centrală în controlul absorbției fierului','Expresia hepcidinei este scăzută în hemocromatoza HFE, facilitând supraîncărcarea','Conținutul total de fier la simptomatici este 20–40 g, față de 3–4 g la o persoană normală; ficatul și pancreasul 50–100 de ori normalul','Triada clasică (pigmentare bronzantă, hepatomegalie, diabet) apare doar în supraîncărcarea importantă','Hepcidina crescută blochează fierul, triada clasică fiind prezentă încă din copilărie la toți heterozigoții'],'ABCD',1301,'Ciroza hepatică — Hemocromatoza: hepcidină, stoc 20–40 g, triadă',
 'Corelarea hepcidinei scăzute HFE cu stocul 20–40 g și cu triada tardivă (pigment, ficat, diabet).',
 ['Poziția centrală a hepcidinei este din text.','Expresia scăzută în HFE facilitează supraîncărcarea.','20-40 g versus 3-4 g și 50-100× în ficat/pancreas sunt explicite.','Triada apare doar în supraîncărcarea importantă, de obicei în deceniul al cincilea.','Hepcidina este scăzută, nu crescută; heterozigoții nu au triada din copilărie.']],
 8,'Direcția hepcidinei (scăzută în HFE) este capcana; stocul 20–40 g versus 3–4 g completează aritmetica flebotomiei.',['Hepcidina','20-40 g']),

q(87,['Morfologia și tabloul endocrin-articular al hemocromatozei constituite:',
 ['În stadiile precoce, fierul se depune în hepatocitele periportale (lizozomi pericanaliculari)','Hipogonadismul secundar disfuncției hipofizare este cea mai frecventă tulburare endocrină','Manifestările cardiace (insuficiență, aritmii) sunt frecvente, mai ales la tineri','Pirofosfatul de calciu se depune asimetric (condrocalcinoză), cu artropatie','Fierul precoce este strict Kupffer, hipogonadismul fiind cea mai rară endocrinopatie'],'ABCD',1301,'Ciroza hepatică — Hemocromatoza: periportal precoce, hipofiză, condrocalcinoză',
 'Secvența depozitului periportal precoce, a hipogonadismului hipofizar și a condrocalcinozei asimetrice.',
 ['Depunerea periportală precoce în lizozomi pericanaliculari este din text.','Hipogonadismul hipofizar este cea mai frecventă endocrinopatie.','Afectarea cardiacă la tineri este citată.','Condrocalcinoza asimetrică duce la artropatie.','Precoce este hepatocitar periportal, nu strict Kupffer; hipogonadismul este cea mai frecventă, nu cea mai rară, endocrinopatie.']],
 8,'Inversează sediul precoce (hepatocit versus Kupffer) și frecvența hipogonadismului, două detalii din același tablou.',['periportale','condrocalcinoză']),
];
