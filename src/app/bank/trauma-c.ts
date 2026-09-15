import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-57;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('trauma',9,pdfOffset,`trauma-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const TRAUMA_C=[
q(46,['Cifrele epidemiologice ale traumei în SUA, citate pentru 2016, includ:',
 ['38.000 de pasageri de autovehicule au murit în urma unei coliziuni','Decesele prin arme de foc însumează încă 38.000','Anual se produc peste 30 milioane de traumatisme care nu se soldează cu deces','Trauma este a treia cauză de deces între 1 și 44 de ani, după bolile cardiovasculare','Traumatismele non-fatale sunt estimate sub un milion pe an'],'ABC',87,'Generalități și epidemiologie',
 'Reținerea trio-ului 38.000/38.000/30 milioane, distinct de rangul de mortalitate pe grupe de vârstă.',
 ['Cifra de 38.000 de decese rutiere este explicită.','Egalitatea cu decesele prin arme de foc este citată.','Estimarea de peste 30 de milioane de traumatisme non-fatale este din text.','Între 1 și 44 de ani trauma este principala cauză, nu a treia.','Estimarea non-fatală este de peste 30 de milioane, nu sub un milion.']],
 8,'Permutează rangul 1–44 cu „a treia cauză” și reduce cu un ordin de mărime volumul non-fatal.',['38.000 de pasageri','30 milioane de traumatisme']),

q(47,['Permeabilitatea căilor aeriene la traumatizat se evaluează clinic astfel:',
 ['Solicitarea pacientului să vorbească: vocea și exprimarea normale indică permeabilitate și stare de conștiență','Stridorul, răgușeala, durerea la vorbire, cianoza, agitația și tahipneea pot indica o leziune a căilor aeriene','Ridicarea bărbiei se face cu hiperextensie cervicală, fără imobilizare','Dispozitivele nazofaringiene sunt de elecție în fracturile faciale complexe','La pacientul obnubilat, limba nu poate obstrua glota, deci intubația este inutilă'],'AB',87,'Evaluarea primară — Căile aeriene',
 'Aplicarea testului vorbirii și a semnelor de leziune aeriană, față de manevrele care ignoră coloana cervicală.',
 ['Textul descrie vorbirea ca evaluare rapidă a permeabilității.','Lista semnelor (stridor, răgușeală, cianoză, agitație, tahipnee) este enumerată.','Ridicarea bărbiei și tracționarea mandibulei se fac menținând coloana cervicală imobilizată.','Dispozitivele nazofaringiene nu se folosesc dacă există leziuni faciale.','La obnubilat, limba obstruează glota; intubația nazală sau orală restabilește permeabilitatea.']],
 8,'Autorizează canula nazală în fracturi faciale și hiperextensia cervicală la manevra de bărbie.',['solicitarea pacientului să vorbească','Ridicarea bărbiei']),

q(48,['Șocul, în evaluarea circulației traumatizatului, este definit ca:',
 ['Perfuzie tisulară inadecvată, cu metabolism anaerob și hipoxie tisulară prelungită, ce determină disfuncții de organ, distrugeri tisulare ireversibile și, eventual, deces','Hipertensiune cu bradicardie, identică reflexului Cushing, ca prim semn de hipovolemie','Doar tahicardie, fără modificări ale statusului mental sau ale diurezei','Perfuzie crescută cu metabolism aerob excesiv','O stare psihogenă, fără hipoxie tisulară'],'A',88,'Circulația — Definiția șocului',
 'Recunoașterea definiției prin perfuzie inadecvată și metabolism anaerob, față de confuzia cu Cushing sau cu tahicardia izolată.',
 ['Definiția cu lanțul anaerob–hipoxie–disfuncție de organ este explicită.','Hipertensiunea cu bradicardie descrie răspunsul la PIC crescută, nu șocul hipovolemic.','Textul listează tahicardie, tahipnee, hipotensiune, alterare mentală, agitație, oligurie ca semne, nu tahicardia izolată.','Metabolismul este anaerob, nu aerob excesiv.','Hipoxia tisulară este nucleul definiției, nu o stare psihogenă.']],
 8,'Confruntă definiția de perfuzie cu reflexul Cushing, o confuzie clasică hipertensiune versus hipotensiune.',['perfuzia tisulară inadecvată','hipoxie tisulară']),

q(49,['Conform Tabelului 9-1, hemoragia de clasă III se caracterizează prin:',
 ['Pierdere de 1.500–2.000 mL (30–40%) la o persoană de 70 kg','Frecvență cardiacă >120 și tensiune arterială scăzută','Diureză 5–15 mL/oră și status mental de anxietate/confuzie','Lichidele de înlocuire sunt cristaloide și sânge','Tensiunea arterială rămâne normală, ca în clasele I–II, fără produse sangvine'],'ABCD',88,'Circulația — Hemoragia de clasă III',
 'Maparea pragurilor de volum, tahicardie >120 și asocierea cristaloid plus sânge, distinct de menținerea TA din clasa II.',
 ['Intervalele de volum 1.500–2.000 mL și 30–40% sunt din tabel.','FC >120 și TA scăzută definesc clasa III.','Diureza 5–15 mL/oră și anxietatea/confuzia sunt citate.','Cristaloidele și sângele apar din clasa III.','TA normală și doar cristaloidele țin de clasele I–II.']],
 8,'Păstrează capcana clasei II (TA normală) pe un rând de tabel care tocmai introduce hipotensiunea.',['1.500-2.000','Cristaloide şi sânge']),

q(50,['Expunerea (E) din evaluarea primară se caracterizează prin:',
 ['Înlăturarea tuturor hainelor pentru examinarea din cap până în picioare, inclusiv a celor ude sau contaminate','După examinare, pacientul este acoperit cu cearceafuri calde sau dispozitive de încălzire','Hipotermia poate exacerba coagulopatia și acidoza','Hainele ude se păstrează, hipotermia protejând creierul traumatizat','Coagulopatia traumatică este independentă de temperatură și de pH'],'ABC',89,'Evaluarea primară — Expunerea',
 'Legarea dezbrăcării complete de prevenirea hipotermiei care agravează coagulopatia și acidoza.',
 ['Dezbrăcarea completă, inclusiv hainele ude/contaminate, este explicită.','Acoperirea cu cearceafuri calde/dispozitive de încălzire urmează examinării.','Exacerbarea coagulopatiei și acidozei de către hipotermie este citată.','Hainele ude se îndepărtează tocmai pentru a preveni hipotermia.','Textul leagă hipotermia de coagulopatie și acidoză, nu de independență.']],
 8,'Inversează rolul hipotermiei, prezentând-o ca neuroprotecție în loc de agravare a coagulopatiei.',['cearceafuri calde','exacerba coagulopatia']),

q(51,['Anatomia meningelui orientează tipul de hemoragie extracerebrală astfel:',
 ['Venele cerebrale care ajung în sinusurile durei pot fi rupte în traumatisme închise, producând hemoragie subdurală','Artera meningeală, situată între craniu și dura, poate fi lezată de fracturi temporale sau parietale, producând hematoame epidurale','Pia mater acoperă direct creierul; leziunile vaselor de la acest nivel pot cauza hemoragie subarahnoidiană sau contuzie intraparenchimatoasă','Artera meningeală traversează spațiul subarahnoidian, deci fractura temporală produce doar hemoragie subarahnoidiană','Dura nu formează sinusuri venoase, falx sau cortul cerebelului'],'ABC',89,'Traumatisme cranio-cerebrale — Anatomie meningeală',
 'Maparea vene bridging → subdural, arteră meningeală → epidural și pia → HSA/contuzie.',
 ['Ruptura venelor cerebrale către sinusuri este mecanismul subdural descris.','Poziția arterei meningee între craniu și dura și fracturile temporo-parietale sunt explicite.','Rolul piei mater în HSA/contuzie este citat.','Artera meningeală nu este subarahnoidiană; fractura temporală orientează spre epidural.','Dura formează sinusurile, falx cerebri/cerebelli, diafragma șeii și cortul cerebelului.']],
 8,'Mută artera meningeală în spațiul subarahnoidian, inversând epiduralul cu HSA.',['hemoragie subdurală','hematoame epidurale']),

q(52,['Monitorizarea presiunii intracraniene după traumatism cranio-cerebral include:',
 ['Plasarea unui cateter în ventriculul lateral permite monitorizarea continuă a PIC și drenajul LCR','Dacă ventriculii nu pot fi canulați, se poate monitoriza presiunea în spațiul subarahnoidian','Alte tehnici folosesc un transductor din fibră optică în spațiul epidural, subdural sau în ventriculii laterali','Monitorizarea PIC se face doar prin puncție lombară repetată, ventriculul fiind evitat','Ridicarea capului și poziția neutră a gâtului cresc PIC și sunt contraindicate'],'ABC',91,'Managementul PIC — Monitorizare',
 'Recunoașterea cateterului ventricular ca metodă care permite și drenajul LCR, versus spațiul subarahnoidian și fibra optică.',
 ['Cuplul monitorizare plus drenaj LCR prin ventriculul lateral este explicit.','Alternativa subarahnoidiană când ventriculii nu sunt canulabili este citată.','Transductorul din fibră optică în cele trei spații este menționat.','Puncția lombară repetată nu este metoda descrisă.','Menținerea gâtului în poziție neutră și ridicarea capului sunt măsuri de limitare a PIC.']],
 8,'Înlocuiește cateterul ventricular cu puncția lombară și inversează manevrele de poziționare a capului.',['ventriculul lateral','spaţiul subarahnoidian']),

q(53,['Identificați afirmația corectă referitoare la soluțiile hipertone în traumatismul cranio-cerebral:',
 ['Pot fi administrate intravenos pentru reducerea edemului cerebral și menținerea euvolemiei','Înlocuiesc manitolul, care nu are efect osmotic asupra edemului','Se administrează în volume mari, fără precauție asupra debitului cardiac','Sunt rezervate doar șocului hemoragic, fără efect asupra PIC','Contraindică orice sedare, cererile metabolice cerebrale nefiind relevante'],'A',91,'Managementul PIC — Soluții hipertone',
 'Reținerea dublului scop al serului hiperton: edem cerebral și euvolemie, distinct de manitolul osmotic.',
 ['Textul atribuie soluțiilor saline hipertone reducerea edemului și menținerea euvolemiei.','Manitolul este descris ca diuretic osmotic eficient în reducerea edemului.','Lichidele se dau cu precauție, pentru un debit cardiac adecvat.','Indicația citată vizează edemul/PIC, nu doar șocul.','Sedarea reduce cererile metabolice cerebrale și riscul de agitație.']],
 8,'Anulează manitolul și mută hipertonele exclusiv în șoc, ignorând rolul lor pe PIC.',['soluţii hipertone','edemului cerebral']),

q(54,['Fracturile și mecanismele coloanei cervicale se caracterizează prin:',
 ['Fracturile corpurilor vertebrale reprezintă aproximativ 50% din leziunile coloanei vertebrale','Scufundările în ape superficiale se soldează frecvent cu paralizie la adulții tineri, prin încărcare axială cervicală','Măduva cervicală superioară (C1–C4) ocupă 90% din canal, deci orice fractură C2 produce tetraplegie imediată','Flexia, extensia, rotația și încărcarea axială nu produc leziuni medulare închise','Gulerul cervical se îndepărtează înaintea evaluării radiologice, pentru a facilita intubația'],'AB',92,'Coloana cervicală — Fracturi și mecanisme',
 'Aplicarea ponderii de 50% a fracturilor de corp vertebral și a încărcării axiale la scufundare.',
 ['Proporția de aproximativ 50% este explicită.','Mecanismul de încărcare axială la scufundări este citat.','C1–C4 ocupă numai 50% din canal; un pacient cu leziune instabilă poate să nu aibă deficit înaintea manevrelor.','Cele patru mecanisme (flexie, extensie, rotație, încărcare axială) sunt enumerate.','Imobilizarea se menține până la evaluare clinică și radiologică adecvată.']],
 8,'Umflă ocuparea canalului de la 50% la 90% și declară tetraplegia inevitabilă, contrar avertismentului despre intubație.',['aproximativ 50%','încărcare axială']),

q(55,['La evaluarea leziunii spinale sunt adevărate următoarele:',
 ['La adulți, măduva cervicală superioară (C1–C4) ocupă numai 50% din canalul medular','Fracturile cervicale de energie crescută se însoțesc în 5–30% din cazuri de o altă fractură a coloanei','Leziunile deasupra C5 pot afecta nervul frenic, cu respirație abdominală și insuficiență respiratorie progresivă','Un traumatism cranio-cerebral moderat sau sever contraindică examenul fizic al coloanei cervicale; gulerul se menține până la decizia neurochirurgului','Leziunile secundare nu pot fi influențate de oxigenoterapie sau de presiunea de perfuzie'],'ABCD',92,'Leziuni spinale — Canal, frenic, leziuni secundare',
 'Combinarea ocupării de 50% a canalului C1–C4, a ratei 5–30% de fracturi etajate și a originei frenicului C3–C5.',
 ['Ocuparea de numai 50% a canalului este explicită.','Intervalul 5–30% pentru o a doua fractură este citat.','Simptomele frenice și indicația de intubație precoce sunt descrise.','Contraindicația examenului cervical după TCC moderat/sever este enunțată.','Oxigenoterapia și menținerea perfuziei sunt primii pași împotriva leziunilor secundare.']],
 8,'Neagă prevenirea leziunii secundare, deși textul o leagă de calitatea îngrijirii inițiale.',['C3-C5','5-30% din cazuri']),

q(56,['Volumul sanguin în șocul neurogen, la un adult de 70 kg, se caracterizează prin:',
 ['Volumul normal este de aproximativ 5 L, dar în șocul neurogen poate crește la 15 L, cu hipotensiune și ischemie de organ','Rămâne fix la 5 L, vasodilatația neinfluențând capacitatea vasculară','Scade la 1 L prin vasoconstricție splanhnică','Crește doar dacă coexistă hemoragie internă','Este identic cu volumul din șocul hemoragic, extremitățile fiind reci în ambele'],'A',92,'Șocul neurogen — Capacitate vasculară',
 'Recunoașterea triplării aparente a capacității vasculare (5 L → 15 L) prin pierderea tonusului precapilar.',
 ['Cifrele 5 L și 15 L sunt explicite.','Vasodilatația crește capacitatea vasculară, nu o lasă fixă.','Nu este descrisă o scădere la 1 L.','Creșterea capacității ține de vasodilatație, nu de hemoragie asociată.','Extremitățile calde deosebesc șocul neurogen de cel hemoragic.']],
 8,'Prag numeric 5 versus 15 L, ușor de inversat cu volemia „normală” din șocul hemoragic.',['aproximativ 5 L','15 L']),

q(57,['Examenul neurologic al coloanei, în evaluarea secundară, include:',
 ['La pacientul treaz, examinarea începe cu rădăcinile distale de leziune, continuând cranial','Dermatomerele de reținut sunt deltoidul (C5), mamelonul (T4) și ombilicul (T10)','Leziunile deasupra C5 pot impune intubație orotraheală precoce, prin afectarea nervului frenic','Examinarea pornește din zona anesteziată către distal, pentru a nu trezi pacientul','Dermatomul mamelonului corespunde lui L1, iar ombilicului lui C5'],'ABC',92,'Evaluarea secundară — Dermatoame și frenic',
 'Aplicarea direcției distal→cranial și a reperelor C5/T4/T10, plus pragul C5 pentru frenic.',
 ['Direcția de examinare distal apoi cranial este explicită.','Cele trei dermatoame sunt enumerate.','Afectarea frenică deasupra C5 și intubația precoce sunt descrise.','Textul cere începerea distal, mergând spre zonele cu sensibilitate păstrată.','Mamelonul este T4, ombilicul T10, nu L1/C5.']],
 8,'Inversează harta dermatomerică T4/T10 cu L1/C5, o confuzie clasică de nivele.',['deltoidului (C5)','ombilicului (TIO)']),

q(58,['Conform Tabelului 9-3, inervația segmentară motorie include:',
 ['Extensia umărului (deltoid) corespunde C5','Flexia cotului (biceps, brahial) corespunde C5–C6','Extensia genunchiului (cvadriceps) corespunde L3–L4','Flexia plantară a gleznei este C5, identică deltoidului','Dorsiflexia gleznei ține de C8, nu de L4–L5'],'ABC',93,'Inervația segmentară motorie',
 'Maparea C5 deltoid, C5–C6 biceps și L3–L4 cvadriceps, față de confuzia cu glezna.',
 ['Deltoidul/C5 este din tabel.','Bicepsul și brahialul C5–C6 sunt citate.','Cvadricepsul L3–L4 este enumerat.','Flexia plantară aparține gastrocnemian/solear (S1–S2), nu C5.','Dorsiflexia este tibial anterior L4–L5.']],
 8,'Mută funcțiile de gleznă pe rădăcini cervicale, amestecând etajele tabelului.',['Deltoid cs','Cvadriceps L3,L4']),

q(59,['Precizați enunțul corect privind SCIWORA la adult:',
 ['Sindromul medular central este varianta SCIWORA de la adult','SCIWORA există doar la copii, adultul având mereu fractură vizibilă pe radiografie','IRM este inutilă, conceptul fiind definit după era CT/IRM','Radiografia standard nu omite leziuni osoase cervical inferior','Protocoalele Nexus se aplică pacientului intoxicat, fără imagistică'],'A',93,'SCIWORA — Varianta adultului',
 'Recunoașterea sindromului medular central ca echivalent adult al SCIWORA, pe fondul limitelor radiografiei.',
 ['Textul identifică explicit sindromul medular central ca variantă SCIWORA a adultului.','SCIWORA este posibilă mai ales la copii și vârstnici.','Conceptul a fost dezvoltat înainte ca CT și IRM să fie larg disponibile.','Radiografia poate omite până la 20% din leziunile osoase, mai ales cervical inferior și toracic superior.','Protocoalele cer conștiență, fără alcool/droguri/antalgice.']],
 8,'Neagă existența SCIWORA la adult, deși textul o echivalează cu sindromul medular central.',['varianta SCIWORA','Sindromul medular central']),

q(60,['Pneumotoraxul închis post-traumatic se gestionează astfel:',
 ['Examenul fizic relevă murmur vezicular diminuat și hipersonoritate la percuție; diagnosticul se stabilește pe radiografie sau ecografie la pat','Pneumotoraxul vizibil radiologic trebuie tratat prin pleurostomie, pentru reexpansionarea plămânului','La pacientul intubat și ventilat cu presiune pozitivă, pneumotoraxul vizibil doar pe CT necesită tub toracic precoce, pentru a minimiza riscul de tensiune','Pneumotoraxul vizibil doar pe CT, la pacientul neintubat, impune toracotomie de resuscitare','Hipersonoritatea exclude hemotoraxul asociat și face drenajul inutil'],'ABC',94,'Pneumotoraxul închis',
 'Diferențierea drenajului pentru PTX radiologic de observația PTX-ului doar CT, exceptând ventilația cu presiune pozitivă.',
 ['Semnele de murmur diminuat și hipersonoritate plus RX/eco sunt explicite.','Indicația de pleurostomie pentru PTX vizibil radiologic este citată.','Tubul precoce la intubat/PPV este descris.','PTX-ul doar CT, neintubat, poate fi doar monitorizat clinic.','Hipersonoritatea orientează spre aer, nu anulează drenajul când PTX-ul e vizibil radiologic.']],
 8,'Forțează toracotomia pe PTX-ul occult și ignoră distincția intubat versus neintubat.',['mmmur vezicular','ventilaţi cu presiune pozitivă'],[95]),

q(61,['Calibrul tubului toracic descris pentru hemotoraxul tratat la pacientul stabil este:',
 ['36 French, cu verificare radiologică postprocedural a poziției și a evacuării','12 French, identic drenajului pleural de rutină medicală','6 French, ca în cricotiroidotomia deschisă','24 French, plasat doar pe linia medioclaviculară în ICS 2','Un angiocateter 16 G, fără tub ulterior'],'A',95,'Hemotoraxul — Tubul toracic',
 'Reținerea calibrului 36 French și a radiografiei de control, distinct de calibrele căilor aeriene chirurgicale.',
 ['Calibrul 36 French și radiografia postprocedurală sunt explicite.','12 French nu este calibrul citat aici.','6 French este tubul de cricotiroidotomie, nu de hemotorax.','ICS 2 medioclavicular ține de decompresia pneumotoraxului în tensiune.','Angiocateterul nu înlocuiește tubul de 36 French în hemotorax.']],
 8,'Permutează 36 French cu 6 French din cricotiroidotomie, două calibre din același capitol.',['36 French','radiografii postprocedural']),

q(62,['După drenajul hemotoraxului și în contuzia aortică netratată imediat sunt adevărate următoarele:',
 ['Sângele restant trebuie evacuat precoce, în mai puțin de 5 zile, pentru a preveni empiemul sau expansionarea pulmonară parțială','Când repararea aortică este întârziată, se impune controlul agresiv al tensiunii arteriale, pentru a scădea riscul de ruptură','Tehnicile endovasculare nu pot produce paraplegie, vasele intercostale fiind ocolite de grefă','Sângele restant se lasă 3 săptămâni, empiemul fiind rar după traumă','Controlul tensional este inutil, leziunea aortică acoperită de adventice neputând rupe'],'AB',95,'Hemotorax restant și contuzie aortică amânată',
 'Aplicarea ferestrei de 5 zile împotriva empiemului și a controlului TA când repararea aortică este amânată.',
 ['Fereastra <5 zile și riscul de empiem sunt explicite.','Controlul agresiv al TA la amânare este citat.','Paraplegia poate apărea dacă grefa obstruează vasele intercostale.','Amânarea la 3 săptămâni crește riscul de infecție/expansionare incompletă.','Netratate, majoritatea leziunilor aortice evoluează spre ruptură.']],
 8,'Anulează fereastra de 5 zile și neagă paraplegia după TEVAR, două capcane din aceeași pagină.',['mai puţin de 5 zile','controlul agresiv']),

q(63,['Managementul fracturilor costale, în afara leziunilor asociate, include:',
 ['Pacienții tineri cu una sau două fracturi pot fi tratați cu antialgice orale și externați din urgență','Vârstnicii și cei cu fracturi multiple necesită, în general, internare','Analgezia intravenoasă controlată de pacient și cateterizarea epidurală previn intubația, evitant imobilizarea toracelui prin durere','Imobilizarea toracelui cu bandaj circular este gestul de elecție, pentru a reduce durerea','CT-ul toracic este indicat de rutină la orice coastă fracturată vizibilă clinic'],'ABC',96,'Fracturile costale — Analgezie și internare',
 'Contrastul tânăr 1–2 coaste/externare versus vârstnic/multiple/internare, plus PCA/epidurală versus bandaj.',
 ['Externarea tânărului cu 1–2 fracturi este explicită.','Internarea vârstnicului/fracturilor multiple este citată.','PCA și epidurala ca metode de a evita imobilizarea dureroasă sunt descrise.','Scopul este evitarea imobilizării toracelui, care favorizează atelectazia și pneumonia.','CT-ul are sensibilitate crescută, dar este indicat rareori doar pentru diagnosticul fracturilor costale.']],
 8,'Restaurează bandajul circular ca „standard”, exact gestul pe care textul îl leagă de atelectazie.',['antialgice orale','cateterizarea epidurală']),

q(64,['Cea mai înaltă rată de supraviețuire după toracotomia de resuscitare se întâlnește în:',
 ['Traumatismele prin înjunghiere la nivelul cordului drept, cu valori între 1 și 10% chiar și în aceste cazuri','Stopul prelungit după traumatism închis masiv, cu AESP prespital','Orice tamponadă, indiferent de experiența chirurgului','Plăgile abdominale izolate, fără leziune toracică','Fracturile costale multiple la vârstnic, fără instabilitate hemodinamică'],'A',96,'Toracotomia de resuscitare — Prognostic',
 'Reținerea ferestrei prognostice 1–10% pentru înjunghierea cordului drept, nu pentru trauma închisă cu AESP.',
 ['Cuplul înjunghiere cord drept și 1–10% este explicit.','Stopul prelungit, trauma închisă masivă și AESP prespital sunt fără beneficiu.','Procedura cere un chirurg experimentat în leziuni toracice complexe.','Indicațiile vizează toracele/tamponada, nu abdomenul izolat.','Fracturile costale stabile nu figurează ca indicație de toracotomie de resuscitare.']],
 8,'Mută supraviețuirea 1–10% pe trauma închisă cu AESP, exact grupul fără beneficiu.',['I şi I 0%','cordului drept']),

q(65,['Considerațiile anatomice în traumatismul abdominal includ:',
 ['Flancul este regiunea dintre linia axilară anterioară și cea posterioară, coastele inferioare și creasta iliacă','Pancreasul, rinichii, vezica, aorta, VCI, duodenul, colonul ascendent, descendent și rectul sunt retroperitoneale','În plăgile penetrante, cel mai frecvent sunt afectate intestinul subțire și mezenterul','La decelerare, organele cavitare sunt mai mobile decât splina și ficatul, deci se lezează primele','Abdomenul posterior se delimitează de linia axilară anterioară, fără raport cu creasta iliacă'],'ABC',96,'Traumatisme abdominale — Compartimente',
 'Maparea flancului pe liniile axilare și a viscerelor retroperitoneale, plus predilecția intestinului subțire în plăgile penetrante.',
 ['Definiția flancului este explicită.','Lista organelor retroperitoneale este enumerată.','Predilecția intestin subțire/mezenter în penetrante este citată.','La decelerare, splina și ficatul au mobilitate sporită față de organele cavitare.','Abdomenul posterior este delimitat de procesele spinoase, linia axilară posterioară, coastele inferioare și creasta iliacă.']],
 8,'Inversează mobilitatea la decelerare (parenchim versus cavitar) și mută flancul pe linia axilară anterioară greșit.',['Linia axilară','intestinul subţire şi mezenterul']),

q(66,['La pacientul cu contuzie abdominală, hipotensiv și aresponsiv la volum, sunt adevărate următoarele:',
 ['Este considerat a avea hemoragie intra-abdominală până la dovezi contrarii','Cea mai frecventă sursă de sângerare este splina și/sau ficatul, impunând tratament chirurgical rapid','Sângele hipoecogen în spațiul Morison, între ficat și rinichiul drept, semnează un FAST pozitiv','Leziunea medulară este cauza cea mai frecventă de hipotensiune, înaintea hemoragiei intra-abdominale','FAST pozitiv în Morison se tratează prin observație, fără laparotomie, la instabil'],'ABC',98,'Contuzia abdominală — Sursă de sângerare și FAST',
 'Prioritizarea hemoragiei splină/ficat față de hipotensiunea spinală și recunoașterea ferestrei Morison.',
 ['Prezumția de hemoragie intra-abdominală până la proba contrarie este explicită.','Splina și/sau ficatul ca sursă cea mai frecventă sunt citate.','Descrierea FAST pozitiv în spațiul Morison este din legendă/text.','Hipotensiunea spinală există, dar hemoragia necontrolată este cauza mult mai frecventă.','La instabil cu FAST pozitiv, textul cere tratament chirurgical rapid.']],
 8,'Pune hipotensiunea spinală înaintea hemoragiei, inversând ierarhia etiologică a paginii.',['spaţiul Morison','splină şi/sau ficat'],[97]),

q(67,['Plăgile penetrante abdominale se gestionează astfel:',
 ['Peritonita impune laparotomia, incidența leziunilor viscerale fiind foarte mare','În plăgile prin împușcare, gloanțele pot ricoșa și se pot fragmenta; traiectul nu urmează o linie dreaptă','Pacienții stabili cu leziune penetrantă în hipocondrul drept sau toraco-abdominal dreapta pot fi tratați conservator când ficatul este singurul organ lezat','Orice plagă punctiformă a peretelui, fără peritonită, impune laparotomie de principiu','CT-ul crește numărul laparotomiilor exploratorii la stabili'],'ABC',98,'Plăgi penetrante — Laparotomie versus conservator',
 'Separarea peritonitei (laparotomie) de leziunea hepatică dreaptă izolată la stabil (conservator) și de capcana traiectului „drept”.',
 ['Indicația de laparotomie în peritonită este explicită.','Ricoșeul și fragmentarea sunt citate.','Conservatorul pentru ficat izolat dreapta la stabil este descris.','Stabili fără peritonită pot avea leziuni doar parietale.','CT-ul reduce necesitatea laparotomiilor exploratorii.']],
 8,'Forțează laparotomia pe plaga parietală stabilă și neagă ricoșeul proiectilului.',['hipocondrului drept','ricoşeze']),

q(68,['Gradația CT a leziunilor hepatice, dincolo de extremele I și VI, include:',
 ['Gradul III: hematom subcapsular >50% din suprafață sau în expansiune, ori dilacerare >3 cm în profunzime','Gradul IV: ruptură parenchimatoasă implicând 25–75% dintr-un lob sau 1–3 segmente din același lob','Gradul II: hematom intraparenchimatos neexpansiv <10 cm; la splină pragul analog este <5 cm','Gradul III înseamnă avulsia pediculului, fără hematom subcapsular','Gradul IV se definește doar prin dilacerare <1 cm, identică gradului I'],'ABC',98,'Leziuni hepatice — Grade II–IV',
 'Diferențierea pragurilor de hematom (ficat <10 cm versus splină <5 cm) și a procentelor de lob din gradele III–IV.',
 ['Criteriile de grad III (subcapsular >50%/expansiv, dilacerare >3 cm) sunt din tabel.','Procentele 25–75% din lob pentru gradul IV sunt explicite.','Pragurile intraparenchimatoase <10 cm (ficat) și <5 cm (splină) sunt din tabelele 9-4 și 9-5.','Avulsia pediculului este gradul VI.','Dilacerarea <1 cm definește gradul I, nu IV.']],
 8,'Amestecă pragurile de diametru ficat versus splină și mută avulsia din gradul VI în III.',['>50% din suprafaţă','25-75% din lobul'],[99]),

q(69,['Hematomul intraparenchimatos splenic neexpansiv de grad II se definește prin diametru:',
 ['Sub 5 cm','Sub 10 cm, identic ficatului de grad II','Peste 10 cm sau în expansiune','Orice hematom rupt cu sângerare activă','Avulsie hilară, indiferent de dimensiune'],'A',99,'Leziuni splenice — Gradul II',
 'Reținerea pragului splenic <5 cm, distinct de <10 cm al hematomului hepatic analog.',
 ['Tabelul 9-5 citește intraparenchimatos neexpansiv <5 cm pentru gradul II splenic.','<10 cm este pragul hepatic de grad II, nu splenic.','>5 cm sau expansiv urcă la gradul III splenic.','Hematomul rupt cu sângerare activă este grad III.','Leziunea hilară care devascularizează este grad V.']],
 8,'Capcană de tabel: același grad II, diametre diferite ficat 10 cm versus splină 5 cm.',['<5 cm în diametru','lntraparenchimatos']),

q(70,['Leziunile renale traumatice se caracterizează prin:',
 ['Rinichiul este relativ protejat de localizarea retroperitoneală și de fascia Gerota','Contuziile necesită rareori chirurgie, exceptând lezarea uretrei sau a pelvisului renal','Nefrectomia este necesară în leziuni parenchimatoase extinse (grad ≥IV) sau când este interesat hilul','Cateterul Foley se menține 7–10 zile sau până la remiterea hematuriei','Contuzia de grad I impune nefrectomie înaintea CT'],'ABCD',100,'Leziuni renale',
 'Integrarea protecției Gerota, a pragului de nefrectomie (grad IV/hil) și a duratei Foley 7–10 zile.',
 ['Protecția retroperitoneală și fascia Gerota sunt explicite.','Raritatea chirurgiei în contuzii, cu excepțiile ureter/pelvis, este citată.','Pragul grad ≥IV sau hilul este descris.','Durata Foley 7–10 zile sau până la dispariția hematuriei este menționată.','CT evaluează; nefrectomia nu este gest de grad I.']],
 8,'Forțează nefrectomia pe gradul I, ignorând caracterul conservator al majorității contuziilor.',['fasciei Gerota','7-1 O zile']),

q(71,['Sindromul de compartiment abdominal, dincolo de pragul de 25 mmHg, se recunoaște prin:',
 ['Triada clinică: scăderea diurezei, creșterea presiunii în căile aeriene și creșterea presiunii intra-abdominale','Măsurarea presiunii vezicale, care corespunde indirect presiunii intraperitoneale','Tratamentul este decompresia promptă printr-o incizie pe linia mediană, cu ameliorarea funcției pulmonare și a diurezei','Nediagnosticat, evoluează spre insuficiență multiplă de organ (MODS), frecvent fatală','Diagnosticul se pune pe presiunea din vena cavă, vezica fiind nerelevantă'],'ABCD',101,'Sindromul de compartiment abdominal — Triadă și decompresie',
 'Reținerea triadei oligurie–presiune de căi aeriene–IAP și a decompresiei mediane, față de substituirea vezicii cu VCI.',
 ['Cele trei elemente ale triadei sunt enumerate.','Presiunea vezicală ca surogat este explicită.','Incizia mediană și efectele pe plămân/rinichi sunt descrise.','Evoluția spre MODS este citată.','Vena cavă nu este metoda de măsurare descrisă.']],
 8,'Înlocuiește presiunea vezicală cu VCI, pe fondul unei triade ușor de fragmentat.',['scăderea diurezei','incizie pe linia mediană']),

q(72,['Stabilizarea și controlul hemoragiei în fractura de bazin includ:',
 ['Bandajarea strânsă a bazinului sau fixatoarele externe restabilesc alinierea, mai ales în compresia antero-posterioară','Dacă pacientul este deja operat pentru altă leziune, hematomul pelvin poate fi împachetat în câmpuri de laparotomie','Embolizarea pe cateter este metoda optimă de control al hemoragiei arteriale','Explorarea prin deschiderea peritoneului este prima opțiune pentru sângerarea venoasă pelvină','Sursa arterială este prezentă la aproximativ jumătate dintre fracturile de bazin'],'ABC',102,'Fracturi de bazin — Binder, packing, embolizare',
 'Aplicarea binder-ului/fixatorului în mecanismul AP și a packing-ului doar dacă abdomenul este deja deschis.',
 ['Metodele simple de stabilizare, eficiente mai ales în AP, sunt explicite.','Împachetarea hematomului când se operează altă leziune este citată.','Embolizarea pe cateter este numită metoda optimă arterială.','Deschiderea peritoneului anulează tamponamentul venos retroperitoneal.','Sursa arterială este menționată la aproximativ 10% dintre pacienți.']],
 8,'Restaurează laparotomia pelvină ca prim gest și umflă ponderea arterială de la 10% la 50%.',['bandajarea strânsă','embolizarea pe cateter'],[101]),

q(73,['La pacientul hemodinamic stabil cu plagă penetrantă cervicală, evaluarea imagistică include:',
 ['Angiografia CT are sensibilitate aproape de 100% și valoare predictivă negativă de peste 90%','O limitare recunoscută a CT-ului este dificultatea de a determina traiectul leziunilor produse de cuțite, în special a leziunilor faringo-esofagiene mici','Zonele I și III, la stabil, se abordează selectiv din cauza dificultății de expunere chirurgicală','CT-ul are sensibilitate sub 50% și a fost abandonat în favoarea explorării de principiu a zonei II','Leziunile prin cuțit sunt cele mai ușor de cartografiat pe CT, față de proiectile'],'ABC',103,'Gât penetrant — CT angiografie',
 'Aplicarea performanței CTA (~100%/NPV>90%) și a limitei traiectului de cuțit, plus abordul selectiv I/III.',
 ['Sensibilitatea aproape 100% și VPN peste 90% sunt explicite.','Limitarea traiectului de cuțit și a leziunilor faringo-esofagiene mici este citată.','Abordarea selectivă a zonelor I și III la stabil este descrisă.','Literatura susține creșterea rolului CT la stabili, nu abandonul.','Dificultatea de traiect este tocmai a cuțitelor, nu ușurința.']],
 8,'Inversează performanța CTA și declară cuțitul „cel mai vizibil”, contrar limitei recunoscute.',['aproape de I 00%','peste 90%'],[102]),

q(74,['Leziunile aerodigestive cervicale, dincolo de laringoscopie și esofagorafie, se caracterizează prin:',
 ['Se întâlnesc în 10% din traumatismele penetrante ale gâtului','Leziunile subglotice ale traheei se suturează într-un singur strat, cu fire resorbabile','Riscul de fistulă arterio-esofagiană se reduce prin interpoziția unui pedicul din omohioidian sau sternocleidomastoidian','Leziunile limitate la hipofaringe pot fi tratate conservator, cu tub de alimentație nazogastric și antibioterapie parenterală empirică','Orice leziune hipofaringiană impune esofagectomie transhiatală înaintea intubației'],'ABCD',103,'Gât — Aerodigestiv, detalii de reparare',
 'Combinarea prevalenței de 10%, a suturii traheale într-un strat și a excepției conservatoare hipofaringiene.',
 ['Cifra de 10% este explicită.','Un strat cu fire resorbabile pentru traheea subglotice este citat.','Interpoziția omohioidian/SCM este descrisă.','Tratamentul conservator hipofaringian cu SNG și antibiotice este menționat.','Esofagectomia transhiatală nu figurează ca gest de hipofaringe.']],
 8,'Înlocuiește conservatorul hipofaringian cu o rezecție esofagiană, pe detalii de sutură ușor de inversat (un strat versus două).',['I 0% din traumatismele','muşchii omohioidian']),

q(75,['Cauzele de deces fetal și particularitățile gravidei traumatizate, în anamneză, includ:',
 ['Ciocnirile dintre autovehicule reprezintă cauza principală de deces fetal, urmate de armele de foc și de precipitări','Gravidele între 15 și 19 ani prezintă cel mai mare risc de deces fetal prin traumă','Se estimează că 10–30% dintre femei suferă abuzuri fizice în sarcină, 5% dintre acestea determinând deces fetal','Testul de sarcină urinar este inutil la femeia de vârstă reproductivă, consultația obstetrică neavând rol','Lichidul alb tulbure sau verde din ostium este benign și se observă ambulatoriu'],'ABC',104,'Traumatismele în sarcină — Epidemiologie și abuz',
 'Reținerea ierarhiei MVA > arme > căderi, a vârfului de risc 15–19 ani și a intervalului 10–30% de abuz.',
 ['Ierarhia cauzelor de deces fetal este explicită.','Grupa 15–19 ani este citată.','Intervalul 10–30% și cei 5% cu deces fetal sunt din paragraf.','Testul urinar de sarcină se face tuturor pacientelor de vârstă reproductivă; rezultatul pozitiv cere consultație obstetrică.','Drenajul de lichid alb tulbure/verde din ostium sugerează ruptura de membrane, urgență obstetrică cu cezariană.']],
 8,'Anulează testul de sarcină și tratează lichidul meconial/AMN ca benign, două urgențe obstetricale din aceeași pagină.',['15 şi 19 ani','I 0-30% dintre femei']),
];
