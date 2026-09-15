import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p<=199?p-78:p-82;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('intestin',14,pdfOffset,`intestin-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const INTESTIN_D=[
q(52,['Aderențele ca substrat de OIS, în afara laparotomiilor, pot urma și bolilor inflamatorii peritoneale tratate non-chirurgical, precum:',
 ['Diverticulita acută, colecistita și apendicita','Boala inflamatorie pelvină sau endometrioza','Carcinomatoza ovariană, care formează aderențe mezoteliale sterile, fără inflamație','Esofagita caustică, aderențele ținând de mediastin','Hernia Richter, lumenul rămânând permeabil mezenteric'],'AB',193,'OIS — Aderențe post-inflamatorii non-operatorii',
 'Recunoașterea aderențelor după inflamații peritoneale netolerate chirurgical (diverticulită, colecistită, apendicită, BIP, endometrioză), distincte de carcinomatoză sau Richter.',
 ['Diverticulita, colecistita și apendicita sunt explicite.','BIP și endometrioza sunt citate.','Carcinomatoza comprimă lumenul ca factor extrinsec, nu ca aderență post-inflamatorie sterilă.','Causticul e esofagian.','Richter e o hernie antimezenterică, nu o cauză de aderențe.']],
 8,'Confundă aderențele post-diverticulită cu carcinomatoza sau cu hernia Richter, două entități extrinseci vecine.',['dive1ticulita acută','endometrioza']),

q(53,['Conform Tabelului 14-1, ocluzia proximală cu ansă deschisă, față de cea distală, se caracterizează prin:',
 ['Vărsături în cantități mari, bilioase și dese; distensia poate să lipsească','Durere intermitentă, intensă, colicativă, ameliorată de vărsătură; sensibilitate epigastrică sau periombilicală redusă în absența ștrangulării','Vărsături fecaloid de la debut, distensie marcată și absența tranzitului prezentă de la primul minut','Durere continuă colică, identică obstacolului de colon și rect','Ansa închisă are distensie marcată de principiu, vărsăturile lipsind complet'],'AB',195,'OIS — Tabelul 14-1 proximal vs distal',
 'Contrastul proximal (vărsături voluminoase, distensie absentă) versus distal (fecaloid, distensie), fără a reface paragraful clinic deja chestionat.',
 ['Vărsăturile mari biloase și distensia absentă sunt din tabel.','Durerea colicativă ameliorată de vărsătură este citată.','Fecaloidul și distensia țin de ansa distală; absența tranzitului poate lipsi proximal.','Durerea continuă e a colonului/rectului.','La ansa închisă distensia e adesea absentă, vărsăturile putând fi proeminente (reflexe).']],
 8,'Atribuie fecaloidul și distensia marcată OIS proximale, inversând tabelul 14-1.',['Cantităţi mari, bilioase','Absentă']),

q(54,['Debutul tipic al OIS acute este marcat de dureri colicative periombilicale deoarece:',
 ['Cea mai mare porțiune a intestinului subțire are inervație autonomă cu originea embriologică a mezenteronului','Durerea somatică parietală e prezentă de la primul minut, identic perforației','Nucleul ambiguu inervează sfincterul anal, durerea fiind rectală','Fibrele cardiace comune fac din OIS un echivalent de angină, fără colică','Plexul Auerbach esofagian orientează durerea toracică'],'A',195,'OIS — Durere periombilicală de mezenteron',
 'Legarea colicii periombilicale de embriologia autonomă a mezenteronului, distinctă de durerea somatică a peritonitei.',
 ['Fraza despre embriologia căilor autonome ale intestinului subțire este explicită.','Durerea somatică localizată ridică tocmai suspiciunea de ischemie/peritonită, nu e de debut.','Nucleul ambiguu inițiază deglutiția, nu durerea din OIS.','Overlap-ul anginos ține de esofag, nu de OIS.','Auerbach esofagian nu orientează colica abdominală.']],
 8,'Înlocuiește inervația de mezenteron cu nucleul ambiguu sau cu overlap-ul esofago-cardiac.',['periombilicală','embriologia']),

q(55,['Investigațiile cu substanță de contrast ale intestinului subțire, în OIS parțială persistentă, se caracterizează prin:',
 ['Sunt utile când e dificilă diferențierea ileusului paralitic de obstrucția mecanică','Înainte de a le începe trebuie excluse obstrucția colonică și boala ocluzivă mezenterică, contrastul putând masca clisma și angiografia','Nu sunt de obicei necesare în urgența majoră, unde clinica, radiografiile simple și CT-ul ghidează tratamentul','Sunt investigația de primă intenție în urgență, înaintea clismei și a angiografiei','CT-ul nu poate indica eronat obstrucție cu buclă închisă, fiind suficient fără corelare clinică'],'ABC',197,'OIS — Contrast subțire după excluderea colonului',
 'Ordinea: exclude colonul și mezenterul (clismă/angio), apoi contrastul de subțire; inutil de rutină în urgența elocventă.',
 ['Utilitatea în ileus vs mecanic este explicită.','Excluderea prealabilă a obstacolului colic și a ocluziei mezenterice este citată.','Inutilitatea de rutină în urgență este descrisă.','În urgență ghidează clinica/Rx/CT; clisma hidrosolubilă e tocmai un pas anterior.','Textul menționează tocmai falsul pozitiv CT de ansă închisă/hernie internă, deci CT-ul nu e suficient necorelat.']],
 8,'Pune contrastul de subțire înaintea excluderii obstacolului colic, inversând ordinea paragrafului.',['obstrucţia colonică','boala ocluzivă mezenterică']),

q(56,['Decompresia nazogastrică în OIS, pe lângă controlul vărsăturilor, se caracterizează prin:',
 ['Reduce cantitatea de lichide care pot fi aspirate, dar crește riscul de microaspirație prin suprimarea reflexului de vărsătură și deschiderea joncțiunii gastroesofagiene','Anulează riscul de aspirație, joncțiunea GE rămânând închisă','Înlocuiește reechilibrarea volemică, diureza devenind superfluă','Este contraindicată, protocolul de circuit rapid interzicând orice SNG în OIS mecanică','Impune baritat oral imediat, contrastul scăzând microaspirația'],'A',198,'OIS — SNG și microaspirație',
 'Recunoașterea prețului SNG: microaspirație prin abolirea gag-ului și deschiderea JGE, distinct de protocolul de circuit rapid al IPO.',
 ['Dublul efect (mai puțin de aspirat vs microaspirație prin gag/JGE) este explicit.','Textul tocmai descrie creșterea, nu anularea, riscului.','Reechilibrarea rămâne primul pas.','SNG-ul e început de regulă în OIS; circuitul rapid evită SNG-ul în IPO, nu interzice SNG-ul în OIS mecanică.','Baritatul oral nu e gestul SNG.']],
 8,'Anulează riscul de microaspirație pe care paragraful îl pune ca preț al SNG-ului.',['microaspiraţie','joncţiunii gastroesofagiene']),

q(57,['Pacientul cu OIS fără antecedente chirurgicale și fără hernie externă evidentă:',
 ['Ar trebui pregătit pentru intervenție, un procent ridicat având leziuni neoplazice sau hernie internă','Obstrucțiile complete sau de grad înalt se pregătesc, în general, pentru chirurgie promptă, riscul de remitere fiind diminuat și cel de ischemie crescut','Se observă 2 săptămâni de principiu, identic OIS precoce postoperatorii aderențiale','Hernia internă se tratează conservator, neoplazia fiind exclusă de absența cicatricei','Gastrografinul e contraindicat, diagnosticul ținând doar de manometrie anală'],'AB',199,'OIS — Fără cicatrice: neoplazie sau hernie internă',
 'Indicația operatorie la OIS „virgin abdomen” (neoplazie/hernie internă) și la ocluzia completă/înaltă, distinctă de temporizarea de 2 săptămâni a OIS precoce.',
 ['Pregătirea pentru chirurgie și cauzele (neoplazie, hernie internă) sunt explicite.','Ocluzia completă/înaltă cu risc de ischemie este citată.','Cele 2 săptămâni țin de OIS precoce postoperatorie.','Absența cicatricei crește, nu scade, suspiciunea de hernie internă/neoplazie.','Manometria anală nu diagnostichează OIS.']],
 8,'Aplică fereastra de 2 săptămâni a OIS precoce pe abdomenul neoperat, unde textul cere chirurgie.',['nu au antecedente chirurgicale','hernie internă']),

q(58,['Antibioterapia preoperatorie la laparotomia pentru OIS trebuie să acopere:',
 ['Aerobii și anaerobii gram-negativi, care pot prolifera în intestinul normal steril, dar acum obstruat și cu stază','Doar cocii gram-pozitivi cutanați, staza intestinală nefiind relevantă','Nimic, intestinul obstruat rămânând steril','Doar fluconazol, flora ținând de Candida esofagiană','Alvimopan, ca substitut de antibiotic în OIS'],'A',199,'OIS — Antibiotice preoperatorii',
 'Recunoașterea spectrului gram-negativ aerob+anaerob, justificat de proliferarea în intestinul cu stază, altfel „steril”.',
 ['Spectrul aerob/anaerob gram-negativ și staza sunt explicite.','Cocii cutanați nu sunt spectrul citat.','Intestinul obstruat nu rămâne steril.','Candida esofagiană nu e flora OIS.','Alvimopanul e antagonist opioid pentru IPO, nu antibiotic.']],
 8,'Lasă intestinul obstruat „steril” sau acoperă doar coci cutanați, ignorând proliferarea gram-negativă.',['aerobilor şi anaerobilor','intestinul normal steril']),

q(59,['Laparoscopia în OIS, potrivit textului, se caracterizează prin:',
 ['Succesul e documentat într-un număr modest de cazuri, dar distensia limitează accesul și manipularea, mai ales în abdomenul multiplu operat și ostil','Interesul continuă mai ales în ocluzii aderențiale necomplicate și obstrucții proximale','A înlocuit laparotomia în toate OIS complete cu strangulare, distensia fiind un avantaj','E contraindicată în orice OIS proximală aderențială','Se rezervă carcinomatozei, aderențele simple impunând de principiu laparotomie mediană'],'AB',199,'OIS — Limitele laparoscopiei',
 'Temperarea entuziasmului laparoscopic: distensie și abdomen ostil versus nișa aderențială necomplicată/proximală.',
 ['Succesul modest și limita distensiei/ostilului sunt explicite.','Nișa aderențială necomplicată și proximală este citată.','Strangularea cu distensie nu e indicația de elecție.','Textul tocmai menționează interesul în OIS proximală aderențială.','Carcinomatoza nu e nișa laparoscopică descrisă.']],
 8,'Transformă laparoscopia în standard al OIS strangulate sau o interzice pe nișa aderențială proximală.',['abdomenului multiplu','ocluzii aderenţiale']),

q(60,['Complicațiile care dictează adesea schimbările de management în boala Crohn includ:',
 ['Malnutriția, ocluzia, fistulele și tulburările electrolitice','Reacțiile adverse, în special la corticosteroizi și agenți imunosupresivi, plus progresia bolii când apare rezistența','Incontinența anală, care poate urma bolii perianale avansate sau chirurgiei agresive ce compromite sfincterul','Suportul nutrițional perioperator e superfluu, vindecarea plăgilor fiind neafectată de imunosupresia preoperatorie','Fistulele după rezecție țin doar de esofagectomie, scurgerea anastomotică fiind exclusă'],'ABC',204,'Crohn — Complicații medicale și sfincteriene',
 'Maparea complicațiilor care schimbă strategia (malnutriție/ocluzie/fistulă/electroliți), a toxicității cortizon/imunosupresie și a incontinenței sfincteriene, distincte de principiile de rezecție deja chestionate.',
 ['Cele patru complicații clinice sunt explicite.','Toxicitatea cortizonului/imunosupresivelor și progresia prin rezistență sunt citate.','Incontinența după boală perianală avansată sau chirurgie agresivă este descrisă.','Textul cere suport nutrițional perioperator aproape la toți operații; imunosupresia preoperatorie afectează vindecarea.','Fistulele chirurgicale pot urma scurgerilor anastomotice după rezecție.']],
 8,'Ignorează incontinența sfincteriană și toxicitatea cortizonului, două complicații din același paragraf de închidere.',['Malnutriţia, ocluzia','perianală avansată']),

q(61,['Un bărbat de 72 de ani, fibrilație atrială, durere abdominală disproporționată, leucocite încă normale. Examinările de laborator în ischemia mezenterică acută:',
 ['Nu există nicio analiză prin care se poate stabili diagnosticul de IMA','Valorile normale nu exclud posibilitatea bolii în plin scenariu clinic','La dureri abdominale și acidoză metabolică persistentă trebuie suspicionată IMA','Leucocitoza, acidul lactic crescut și acidoza metabolică sunt sine qua non de la debut, infarctul fiind exclus de un laborator normal','Manometria anorectală confirmă IMA, arteriografia fiind abandonată'],'ABC',205,'IMA — Laborator nespecific, acidoză persistentă',
 'Recunoașterea că IMA nu are marker de laborator patognomonic, că valorile normale nu exclud și că durerea plus acidoza persistentă ridică suspiciunea, distincte de tratamentul embolie/VMS deja chestionat.',
 ['Absența unui test diagnostic de laborator este explicită.','Neexcluderea prin valori normale este citată.','Cuplul durere + acidoză metabolică persistentă este descris.','Modificările de laborator nu sunt necesare pentru diagnostic și pot fi tardive; infarctul nu e exclus de laborator normal.','Standardul de aur rămâne arteriografia mezenterică, nu manometria.']],
 8,'Așteaptă leucocitoza/lactatul ca sine qua non, inversând fraza că infarctul poate exista cu laborator normal.',['analiză de laborator','acidoză metabolică persistentă']),

q(62,['O femeie de 82 de ani, după un episod de colecistită, cu ocluzii intermitente. Cauzele intraluminale de OIS, mai puțin frecvente, includ:',
 ['Majoritatea corpilor străini care reușesc să treacă de pilor vor străbate intestinul subțire; valva ileocecală poate opri corpii mai mari','Fitobezoarele, agregate din fructe și fibre vegetale slab digerate','Ileusul biliar: un calcul mare migrează prin peretele vezicii într-o buclă aderentă și se oprește, în cele din urmă, lângă sau în VIC','Sindromul AMS comprimă D3 după scădere ponderală, ca factor intraluminal','Carcinomatoza ovariană, ca obstacol din lumen, nu peritoneal'],'ABC',194,'OIS — Fitobezoar, ileus biliar, VIC',
 'Separarea obstacolelor din lumen (corpi străini la VIC, fitobezoar, ileus biliar al vârstnicului) de cauzele extrinseci SAMS și carcinomatoză.',
 ['Traversarea post-pilorică și bariera VIC sunt explicite.','Fitobezoarele sunt citate.','Mecanismul colecistită → fistulă → calcul lângă VIC, mai ales la vârstnici, este descris.','SAMS este o compresie extrinsecă a D3, nu un conținut luminal.','Carcinomatoza comprimă din peritoneu, nu din lumen.']],
 8,'Clasează SAMS și carcinomatoza ca obstacole intraluminale, inversând capitolul de cauze extrinseci.',['Fitobezoarele','ileusul biliar']),

q(63,['După second-look-ul pentru ischemie mezenterică, o a treia intervenție:',
 ['Este rar necesară, dar ar putea fi efectuată dacă are indicații clinice','Este protocol la 2 ore, identic fistulei esofagiene','Înlocuiește de principiu second-look-ul de 12–24 de ore','Se face doar laparoscopic, laparotomia fiind abandonată după embolectomie','E contraindicată, anastomoza primară fiind regula la prima operație'],'A',206,'IMA — Al treilea look',
 'Recunoașterea celui de-al treilea look ca excepție ghidată clinic, nu ca protocol, pe fondul evitării anastomozei primare până la second-look.',
 ['Raritatea și condiția indicațiilor clinice sunt explicite.','Fereastra second-look e 12–24 de ore, nu 2 ore esofagiene.','Al treilea look nu înlocuiește second-look-ul.','Vizualizarea poate fi open sau laparo, nu doar laparoscopică.','Anastomoza primară e adesea evitată până la a doua laparotomie.']],
 8,'Transformă al treilea look din excepție clinică într-un protocol de 2 ore sau într-o contraindicație.',['a treia inte1ventie','rar necesară']),

q(64,['Limfomul intestinului subțire, dincolo de predilecția ileonului și a plăcilor Peyer, se caracterizează prin:',
 ['Până la o pătrime dintre pacienți se prezintă cu urgențe abdominale: perforație, hemoragie, ocluzie sau invaginație','După diagnostic imagistic, chimioterapia și uneori radioterapia pot duce rar la perforații prin liză tumorală','Supraviețuirea medie depășește 10 ani; după rezecție de urgență, supraviețuirea la 5 ani este de 20–40%','Adenopatia mezenterică exclude limfomul, diagnosticul ținând doar de manometrie anorectală','Este Hodgkin al copilului, duodenul periampular deținând 90% din cazuri'],'ABC',209,'Limfom IS — Urgențe, liză, 20–40%',
 'Contrastul prezentării de urgență (~1/4), al perforației prin liză tumorală și al supraviețuirii (medie >10 ani vs 20–40% după urgență), față de epidemiologia Peyer deja chestionată.',
 ['Cele patru urgențe și ponderea de o pătrime sunt explicite.','Perforația rară prin liză după chimio/RT este citată.','Cuplul >10 ani versus 20–40% la 5 ani după urgență este descris.','CT-ul arată adesea adenopatie mezenterică; diagnosticul e histologic, nu manometric.','Predomină non-Hodgkin-ul adult ileal, nu Hodgkin-ul pediatric periampular.']],
 8,'Permutează supraviețuirea >10 ani (cazurile imagistice) cu 20–40% (urgențele) și mută limfomul pe Hodgkin pediatric.',['o pătrime','20-40%']),

q(65,['Tumorile benigne ale intestinului subțire, față de cele maligne, se caracterizează epidemiologic prin:',
 ['Sunt mult mai frecvente decât cele maligne; majoritatea sunt asimptomatice','Ambele sexe sunt afectate egal, cu incidență maximă în decada a șasea','Predomină la femei tinere, decada a doua, identic apendicitei','Constituie 90% din neoplaziile GI, identic colonului','Sunt mai rare decât malignele, cu vârf după 80 de ani'],'AB',206,'Tumori benigne — Sex egal, decada a șasea',
 'Predominanța benignelor, egalitatea de sex și vârful din decada a șasea, distincte de epidemiologia apendicitei.',
 ['Frecvența mai mare și asimptomatologia sunt explicite.','Egalitatea de sex și decada a șasea sunt citate.','Apendicita e 5–35 de ani, nu profilul tumorilor benigne.','Malignele sunt doar 2% din neoplaziile GI.','Benignele sunt mai frecvente, nu mai rare.']],
 8,'Inversează frecvența benign/malign și mută vârful pe decadele apendicitei.',['mult mai frecvente','decada a şasea']),

q(66,['Lipoamele, hemangioamele și adenoamele viloase ale intestinului subțire se caracterizează prin:',
 ['Lipoamele sunt mai frecvente la bărbați, mai ales în duoden sau ileon','Hemangioamele reprezintă 5% din leziunile benigne, sunt adesea multiple (Osler-Weber-Rendu) și o cauză importantă de hemoragie ocultă; capsula e utilă','Adenoamele viloase au risc global de transformare malignă de 30%, care crește cu dimensiunea, deci trebuie excizate','După proctocolectomie, pacienții cu polipoză familială trebuie supravegheați endoscopic pe duoden și papilă, carcinomul periampular fiind cea mai frecventă neoplazie ulterioară','Lipoamele predomină la femei în jejun, hemangioamele fiind unice și fără sângerare, vilosul având risc zero'],'ABCD',207,'Tumori benigne — Lipom, Osler, vilos 30%',
 'Maparea lipom (bărbați, D/ileon), hemangiom 5% (Osler, capsulă) și vilos 30%, plus supravegherea periampulară PAF.',
 ['Predilecția masculină și sediile D/ileon sunt explicite.','5%, multiplicitatea Osler și utilitatea capsulei sunt citate.','Riscul 30% și indicația de excizie sunt descrise.','Screeningul duodenal/papilar post-proctocolectomie este menționat.','Direcțiile de sex, sediu și risc sunt inversate.']],
 8,'Inversează sexul lipomului, unicitatea hemangiomului și riscul vilosului de 30%.',['Osler-Weber-Rendu','risc global 30%']),

q(67,['Tumorile maligne ale intestinului subțire constituie, din totalul neoplaziilor tractului GI:',
 ['Doar 2%; sunt ușor mai frecvente la bărbați, vârsta medie de debut fiind în decada a șasea','Jumătate din cancerele GI, identic colonului','90%, intestinul având suprafața cea mai mare','0,5%, identic sângerării după sleeve','6,7%, identic incidenței apendicitei la femei'],'A',207,'Tumori maligne — 2% din neoplaziile GI',
 'Izolarea ponderii de 2% și a vârfului din decada a șasea, față de suprafața mare care ar sugera inversul.',
 ['Cifra de 2%, predominanța masculină ușoară și decada a șasea sunt explicite.','Colonul, nu intestinul subțire, e sediul dominant.','Textul tocmai notează paradoxul suprafață mare / tumori rare.','0,5% e sângerarea după sleeve.','6,7% e apendicita la femei.']],
 8,'Umflă ponderea de 2% la jumătate din cancerele GI, ignorând paradoxul suprafeței.',['2% din totalul','decada a şasea']),

q(68,['Adenocarcinoamele intestinului subțire se caracterizează prin:',
 ['Reprezintă aproximativ jumătate din tumorile maligne ale intestinului subțire; sunt mai frecvente în duoden, incidența scăzând spre distal','Sângerarea ocultă la un tânăr e frecvent cauzată de neoplasme; sângerarea masivă e rară','Tumorile periampulare se pot prezenta cu icter nedureros și, mai rar, pancreatită inexplicabilă; aproape jumătate se diagnostichează abia intraoperator','Supraviețuirea la 5 ani e în general 70–90%, terapiile adjuvante fiind standardul cu eficacitate dovedită','Predomină în ileon, sângerarea masivă e regula, iar chimio adjuvantă vindecă de principiu'],'ABC',207,'Adenocarcinom IS — Jumătate, duoden, 10–30%',
 'Ponderea de ~50%, gradientul duodenal→distal, icterul periampular și sângerarea ocultă a tânărului, distincte de intervalul 10–30% la 5 ani.',
 ['Jumătatea și gradientul duodenal sunt explicite.','Sângerarea ocultă la tânăr și raritatea masivei sunt citate.','Icterul nedureros și diagnosticul intraoperator ~50% sunt descrise.','Textul dă 10–30% la 5 ani, cu adjuvantă puțin dovedită, nu 70–90%.','Ileonalul e al carcinoidului/limfomului; sângerarea masivă e rară.']],
 8,'Mută adenocarcinomul pe ileon și umflă 10–30% la 90%, două confuzii cu carcinoidul/limfomul.',['aproximativ jumătate','10-30%']),

q(69,['Episoadele de sindrom carcinoid, dincolo de 5-HIAA urinar, se caracterizează prin:',
 ['Pot fi declanșate de efort, emoție, alcool, anestezie sau manipularea tumorii','Leziuni cutanate asemănătoare pelagrei, prin devierea triptofanului de la sinteza niacinei către serotonină','Peptide vasoactive asociate, printre care 5-hidroxitriptofan, calicreină, histamină și ACTH','Apar dintr-un primar ileal fără metastaze hepatice, ficatul neepurând serotonina portală','Confirmarea se face doar prin manometrie anorectală, 5-HIAA fiind inutil'],'ABC',207,'Carcinoid — Pelagră, triggere, peptide',
 'Declanșatorii (efort/alcool/anestezie), pelagra prin deturnarea triptofanului și lista de peptide vasoactive, distincte de regula first-pass hepatic deja chestionată.',
 ['Cei cinci triggere sunt expliciți.','Pelagra prin deturnarea triptofanului de la niacină este citată.','5-hidroxitriptofanul, calicreina, histamina și ACTH sunt enumerați.','Ficatul epurează serotonina portală; sindromul ileal cere metastaze hepatice.','Confirmarea e 5-HIAA urinar ± serotonină/cromogranină A serică.']],
 8,'Anulează first-pass-ul și înlocuiește pelagra/triggerele cu manometria, două capcane de capitol vecin.',['pelagra','efo1i, emoţie'],[208]),

q(70,['GIST-urile intestinului subțire, față de cele esofagiene și gastrice, se caracterizează prin:',
 ['Par să aibă un prognostic mai grav','După excizie largă, aproximativ 50% dintre pacienți dezvoltă recurență în primii 2 ani','Dacă devin refractare sau intolerante la imatinib, se poate trece pe sunitinib sau alți inhibitori de tirozin-kinază','Originea e în celulele interstițiale ale lui Cajal, cu expresie CD117 (c-kit)','Au prognostic mai bun decât GIST-ul gastric, recurența fiind rară, sunitinibu l fiind first-line înaintea imatinibului'],'ABCD',209,'GIST intestinal — Prognostic, 50%, sunitinib',
 'Prognosticul mai grav intestinal, recurența ~50% la 2 ani și sunitinib ca linie după imatinib, plus originea Cajal/CD117.',
 ['Prognosticul mai grav față de esofag/stomac este explicit.','Cifra de ~50% la 2 ani este citată.','Sunitinib după eșec/intoleranță la imatinib este descris.','Cajal și CD117 sunt menționate.','Direcția prognosticului și a liniilor TKI este inversată.']],
 8,'Inversează prognosticul intestinal vs gastric și pune sunitinib înaintea imatinibului.',['prognostic mai grav','sunitinib']),

q(71,['Un bărbat de 22 de ani, 36 de ore de durere migratoare, leucocitoză. Anatomia și complicațiile apendicitei, dincolo de Rovsing/psoas, includ:',
 ['Artera apendiculară e în mezoapendice și provine din artera ileocolică; la 10–20 de ani pot exista până la 200 de foliculi, ceea ce se corelează cu vârful de vârstă','În SUA, aproximativ 10.000 de decese pe an sunt atribuite bolilor apendiculare','Infecția necontrolată se poate răspândi în sistemul portal (pileflebită), cu aer portal sau abcese hepatice','Ecografia clasică: structură tubulară necompresibilă, cu sensibilitate dureroasă focală în cadranul inferior drept','Artera e din AMS direct, fără ileocolică, foliculii lipsind la tineri, pileflebită fiind exclusă de oment'],'ABCD',211,'Apendicită — Ileocolică, 200 foliculi, pileflebită',
 'Pediculul ileocolic, cei ~200 de foliculi la 10–20 de ani, cele ~10.000 decese/an și pileflebită/US necompresibil, distincte de McBurney/Rovsing deja chestionate.',
 ['Artera ileocolică și cei 200 de foliculi sunt explicite.','Cifra de ~10.000 decese/an este citată.','Pileflebită, aer portal și abcese hepatice sunt descrise.','US necompresibil cu durere focală este menționat.','Artera nu e din AMS direct; foliculii sunt numeroși tocmai la tineri.']],
 8,'Rupe pediculul ileocolic și neagă pileflebită, două detalii de vecinătate vasculară/portală.',['artera ileocolică','pileflebita'],[212]),
];
