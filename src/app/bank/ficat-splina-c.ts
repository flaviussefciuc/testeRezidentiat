import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p<=324?p-130:p-138;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('ficat-splina',20,pdfOffset,`ficat-splina-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const FICAT_SPLINA_C=[
q(34,['Hepatocitele adulte regenerează întreaga masă celulară hepatică la fiecare:',
 ['50 de zile','7 zile','110–120 de zile','3–5 zile','1 an'],'A',317,'Fiziologia ficatului — Regenerarea hepatocitară',
 'Recunoașterea ciclului de 50 de zile al masei hepatocitare, distinct de durata de viață a hematiei (110–120 de zile) din același capitol.',
 ['Textul precizează că hepatocitele se divid continuu și pot regenera întreaga masă celulară la fiecare 50 de zile.','7 zile este o fereastră post-splenectomie (leucocite), nu regenerarea hepatică.','110–120 de zile este durata de viață a eritrocitului în pulpa roșie.','3–5 zile este fereastra de producție a factorilor după hepatectomie parțială, din alt capitol.','1 an depășește ciclul citat.']],
 8,'Permutează 50 de zile cu 110–120 de zile (hematia) sau cu 5–7 zile (leucocite post-splenectomie), trei cifre din același capitol.',['50 de zile','se divid continuu']),

q(35,['Ligamentele și imunitatea hepatică se caracterizează prin:',
 ['Ligamentele falciform, coronar și triunghiular atașează ficatul de diafragm și de peretele abdominal anterior','Ligamentul gastrohepatic (omentul mic) se extinde de la ficat la mica curbură gastrică și la prima porțiune a duodenului','Celulele Kupffer reprezintă 80–90% din toate macrofagele fixe din organism și se regenerează periodic','Ficatul este lipsit de ligamente, fiind mobil față de diafragm pe toată suprafața','Celulele Kupffer lipsesc din ficat, imunitatea reticuloendotelială fiind atribuită doar splinei'],'ABC',317,'Anatomia ficatului — Ligamente și celule Kupffer',
 'Recunoașterea celor trei ligamente de suspensie, a omentului mic și a ponderii 80–90% a celulelor Kupffer între macrofagele fixe.',
 ['Cele trei ligamente și inserția diafragmatică/parietală sunt explicite.','Traiectul ligamentului gastrohepatic către mica curbură și D1 este enunțat.','Ponderea 80–90% și regenerarea periodică sunt citate.','Ligamentele atașează tocmai ficatul de diafragm și perete.','Kupffer sunt localizate în endoteliul hepatic, nu lipsesc.']],
 8,'Anulează ligamentele de suspensie și mută imunitatea reticuloendotelială exclusiv la splină, ignorând 80–90% Kupffer.',['ligamentul falciform','80-90%']),

q(36,['Urmărirea hemangiomului cavernos gigant pe termen lung arată:',
 ['Studiile de peste 10 ani confirmă absența hemoragiilor spontane sau a rupturilor','Durerea abdominală ocazională are, în majoritatea cazurilor, o altă etiologie decât hemangiomul','Ruptura spontană este regula după 10 ani, rezecția fiind indicată la orice incidental','Hemangiomul gigant impune biopsie percutană de primă intenție, înaintea imagisticii','Funcția hepatică se alterează constant, analog CHC'],'AB',320,'Hemangiomul gigant — Urmărire >10 ani fără ruptură',
 'Aplicarea datelor de urmărire (>10 ani, fără ruptură spontană) și a faptului că durerea are de obicei altă cauză.',
 ['Absența hemoragiei/rupturii pe urmărire de peste 10 ani este explicită.','Durerea cu altă etiologie în majoritatea cazurilor este enunțată.','Textul confirmă absența, nu regula, rupturii spontane.','Biopsia precoce la incidental este descurajată; US/CT sunt diagnostice.','Funcția hepatică se păstrează normală.']],
 8,'Transformă absența rupturii pe 10 ani într-o indicație neselectivă de rezecție, contrar paragrafului de urmărire.',['mai mult de 10 ani','hemoragiilor spontane'],[319]),

q(37,['HNF și conduita în hemoragia pe adenom hepatic includ:',
 ['Dopplerul poate vizualiza semnal vascular cu aspect de spițe de roată în HNF','Hemoragia pe adenom cu șoc hipovolemic necesită tratament de urgență; în alte situații hemoragice se poate tenta resuscitare, embolizare, apoi chirurgie programată','Femeile cu istoric de adenom trebuie să evite contraceptivele orale','HNF se tratează prin rezecție de principiu, fiind un precursor al CHC','Embolizarea este contraindicată în hemoragia pe adenom, unica opțiune fiind observația'],'ABC',320,'HNF (spițe de roată) și hemoragia pe adenom',
 'Diferențierea pattern-ului Doppler în spițe al HNF de conduita etapizată (urgență versus embolizare) a hemoragiei pe adenom.',
 ['Aspectul de spițe de roată la Doppler este explicit.','Algoritmul șoc-urgență versus resuscitare-embolizare-chirurgie programată este citat.','Evitarea contraceptivelor după adenom este enunțată.','HNF este un proces regenerativ de tratat conservator când diagnosticul imagistic e stabilit.','Embolizarea este tocmai etapa intermediară descrisă în hemoragia fără șoc.']],
 8,'Transformă HNF într-un precursor malign și anulează embolizarea din algoritmul hemoragiei pe adenom.',['spiţe de roată','embolizare'],[321]),

q(38,['Contextul epidemiologic și invazia vasculară în CHC se caracterizează prin:',
 ['Tumora apare uzual la pacienții cu boală hepatică cronică, într-o proporție de 70–80%','Incidența este crescută și la infectați VHB sau VHC fără modificări cirotice','Consumul de alcool și steatoza non-alcoolică asociată obezității sunt factori de risc','CHC are susceptibilitate pentru invazia vasculară, în particular a vaselor tributare sistemului venos port, mai probabilă la tumori mai mari','CHC apare doar pe ficat sănătos, fără legătură cu VHB/VHC sau cu ciroza'],'ABCD',321,'CHC — 70–80% pe boală cronică și invazie portală',
 'Integrarea ponderii 70–80% pe hepatopatie cronică, a riscului viral non-cirotic și a predilecției pentru invazia venoasă portă.',
 ['Proporția 70–80% pe boală hepatică cronică este explicită.','Incidența crescută fără ciroză la VHB/VHC este citată.','Alcoolul și NASH/obezitatea sunt listați ca factori de risc.','Invazia portală, dependentă de dimensiune, este enunțată.','CHC este strâns asociat cirozei și virusurilor, nu ficatului sănătos.']],
 8,'Neagă hepatopatia cronică de 70–80% și mută CHC pe ficatul sănătos, ignorând invazia portă.',['70-80%','sistemului venos port']),

q(39,['Metastazele hepatice și ablația termică se caracterizează prin:',
 ['Cele mai frecvente tumori maligne din ficat sunt metastazele, de obicei de origine GI; 30–40% dintre decesele prin cancer au metastaze hepatice la autopsie','În cancerul colorectal, tratamentul cu succes al leziunilor hepatice izolate îmbunătățește supraviețuirea până la 55–65% la 5 ani','Ablația termică (RFA, MWA) provoacă distrucție la temperaturi de peste 100°C; pentru metastaze, tehnicile ablative sunt considerate inferioare rezecției','Metastazele sunt mai rare decât CHC ca tumori maligne intrahepatice','RFA înlocuiește rezecția ca standard al metastazelor rezecabile, temperaturile utile fiind sub 40°C'],'ABC',322,'Metastaze hepatice — 30–40% autopsie, 55–65% la 5 ani, RFA >100°C',
 'Contrastarea predominanței metastazelor GI, a supraviețuirii 55–65% în colorectal și a pragului >100°C al ablației, inferioară rezecției.',
 ['Originea GI și cifra 30–40% la autopsie sunt explicite.','Intervalul 55–65% la 5 ani este citat.','Temperatura >100°C și inferioritatea față de rezecție (pagina următoare) sunt enunțate.','Textul afirmă că metastazele sunt cele mai frecvente tumori maligne din ficat.','Ablația rămâne opțiune când rezecția nu e posibilă, nu standardul; pragul este >100°C.']],
 8,'Inversează ierarhia metastază versus CHC și coboară temperatura RFA sub 40°C, două erori de selecție terapeutică.',['30-40%','55-65%'],[323]),

q(40,['După rezecția metastazelor colorectale hepatice:',
 ['La 60–70% dintre pacienți cancerul recidivează, țesutul hepatic rezidual fiind cea mai frecventă localizare','Cei care beneficiază cel mai mult au leziuni mici, CEA scăzut, >1 an fără progresie, fără boală extrahepatică și fără ganglioni tumorali secundari','Recidiva este excepțională (<5%), urmărirea fiind superfluă','Ablația (MWA, RFA) este superioară rezecției ca tratament de primă intenție','CEA crescut și boala extrahepatică definesc candidatul ideal de rezecție'],'AB',323,'Metastaze colorectale — Recidivă 60–70% și selecția candidatului',
 'Fixarea recidivei de 60–70% în ficatul rezidual și a profilului de candidat (leziuni mici, CEA scăzut, >1 an).',
 ['Cifra 60–70% și predilecția pentru ficatul rezidual sunt explicite.','Criteriile de selecție (dimensiune, CEA, interval >1 an, absența extrahepatică/ganglionară) sunt listate pe pagina anterioară.','Recidiva este majoritară, deci urmărirea atentă este cerută.','Ablația este considerată inferioară rezecției.','CEA scăzut și absența extrahepatică definesc candidatul, nu inversul.']],
 8,'Minimizează recidiva de 60–70% și inversează criteriile CEA/extrahepatic, două capcane de selecție oncologică.',['60-70%','antigenului carcinoem'],[322]),

q(41,['Terapia antiparazitară inițială a chistului hidatic mic, uniloculat, se bazează pe:',
 ['Albendazol, care poate controla creșterea și extensia bolii','Metronidazol, identic abcesului amebian, fără agent scolicid','Marsupializare în cavitatea peritoneală, ca în chistadenom','Puncție-biopsie diagnostică de primă intenție, înaintea serologiei','Decorticare, identică chistului simplu simptomatic'],'A',324,'Chistul hidatic — Albendazol în chistul mic uniloculat',
 'Recunoașterea albendazolului ca terapie inițială a chistului mic uniloculat, distinct de metronidazol, marsupializare sau puncția diagnostică.',
 ['Albendazolul pentru chisturi mici uniloculate este explicit.','Metronidazolul este schema amebianului, nu a hidaticului.','Marsupializarea este contraindicată în chistadenom, nu este tratamentul hidaticului.','Puncția diagnostică se evită la suspiciune din cauza însămânțării/anafilaxiei; PAIR-ul e rezervat cazurilor selecționate după diagnostic.','Decorticarea este standardul chistului simplu, nu al hidaticului.']],
 8,'Înlocuiește albendazolul cu metronidazolul amebian sau cu decorticarea chistului simplu, trei strategii din același capitol de chiste.',['albendazol','uniloculate']),

q(42,['Colateralele porto-sistemice din hipertensiunea portală includ:',
 ['Venele submucoase esofagiene către sistemul azygos, producând varice esofagogastrice','Venele hemoroidale către sistemul iliac, producând hemoroizi anorectali','Vena ombilicală către venele peretelui abdominal, generând „capul de meduză”','Venele retroperitoneale către vena cavă; aderențele peretelui pot conține colaterale voluminoase','Colateralele lipsesc, presiunea portală drenându-se doar prin venele suprahepatice permeabile'],'ABCD',324,'Hipertensiunea portală — Șunturi colaterale (azygos, meduză)',
 'Recunoașterea celor patru situsuri clasice de comunicare porto-sistemică, inclusiv capul de meduză.',
 ['Varicele esofagogastrice prin azygos sunt explicite.','Hemoroizii prin sistemul iliac sunt citați.','Capul de meduză prin vena ombilicală este enunțat.','Colateralele retroperitoneale și cele din aderențe sunt listate.','Textul descrie tocmai aceste căi de drenaj compensator.']],
 8,'Anulează colateralele (azygos, ombilical, hemoroidal) deși sunt enumerate consecutiv în același paragraf.',['capul de meduză','sistemul azygos']),

q(43,['Anatomia chirurgicală a splinei se caracterizează prin:',
 ['Ligamentele suspensoare sunt splenorenal, gastrosplenic, splenocolic și splenodiafragmatic, în raport cu coada pancreasului, stomacul, rinichiul stâng, colonul și diafragmul','Artera splenică, ramură a trunchiului celiac, are traiect de-a lungul marginii superioare a pancreasului, cranial de vena splenică','În mod normal se asociază 4–6 artere gastrice scurte, ramuri ale arterei gastroepiploice stângi','Artera splenică este ramură a mezentericei superioare și nu are colaterale gastrice','Ligamentul falciform este principalul ligament suspensiv al splinei'],'ABC',333,'Anatomia splinei — Ligamente, celiac și 4–6 gastrice scurte',
 'Fixarea celor patru ligamente, a originii celiace cu traiect pancreatic și a celor 4–6 gastrice scurte din gastroepiploica stângă.',
 ['Cele patru ligamente și organele de vecinătate sunt enumerate.','Originea din trunchiul celiac și traiectul de-a lungul pancreasului sunt explicite.','Cifra 4–6 și originea din gastroepiploica stângă sunt citate.','Artera splenică este celiacă; gastricele scurte asigură colaterale.','Ligamentul falciform aparține ficatului, nu splinei.']],
 8,'Mută originea arterei splenice la mezenterica superioară și atribuie splinei ligamentul falciform hepatic.',['4-6 artere gastrice','trunchiului celiac']),

q(44,['În ordinea descrescătoare a frecvenței, splina accesorie se găsește la:',
 ['Hilul splinei, ligamentul splenocolic, ligamentul gastrocolic, ligamentul splenorenal și oment','Coada pancreasului ca sediu unic, fără localizări ligamentare','Doar în scrot, analog gubernaculului testicular','În fosa iliacă dreaptă, analog apendicelui','În mediastin, analog timusului'],'A',333,'Splina accesorie — Ordinea localizărilor',
 'Recunoașterea ierarhiei hil → splenocolic → gastrocolic → splenorenal → oment, rezultată din defectul de fuziune al mugurilor din mezogastrul dorsal.',
 ['Ordinea descrescătoare a localizărilor este tabelată în text.','Coada pancreasului figurează pe figură ca raport, nu ca unica localizare.','Traiectul de coborâre testiculară este o localizare posibilă rară pe figură, nu sediul exclusiv.','Fosa iliacă dreaptă nu este în lista de ordine a frecvenței.','Mediastinul nu figurează printre localizările comune.']],
 8,'Înlocuiește ierarhia hil-ligamente cu sedii aberante (scrot, mediastin), deși textul dă o ordine explicită.',['hitul splinei','mezogastrului dorsal']),

q(45,['Funcțiile imune și hematopoietice ale splinei includ:',
 ['Splina este cea mai mare sursă de IgM; splenectomia generează o scădere marcată a IgM și a producției de opsonină','Hematopoieza extramedulară fetală se oprește imediat după naștere','Splina are, cel mai probabil, un rol major în modularea răspunsului citokinic la infecție; splenectomia este urmată de trombocitoză pasageră','IgM crește după splenectomie, opsonina fiind independentă de splină','Hematopoieza splenică începe abia la adult, fetusul neavând rol splenic'],'ABC',335,'Fiziologia splinei — IgM, opsonină și hematopoieza fetală',
 'Contrastarea rolului de sursă principală de IgM/opsonină și a opririi hematopoiezei fetale imediat postnatal, plus depozitul plachetar.',
 ['Statutul de cea mai mare sursă de IgM și scăderea opsoninei sunt explicite.','Oprirea hematopoiezei imediat după naștere este citată pe pagina anterioară.','Rolul citokinic și trombocitoza pasageră sunt enunțate pe aceeași pagină.','Textul descrie scăderea, nu creșterea, IgM după splenectomie.','Rolul hematopoietic este definit la fetus și se oprește postnatal.']],
 8,'Inversează IgM post-splenectomie și mută hematopoieza fetală la adult, două funcții din același bloc fiziologic.',['imunoglobulină M','opsonină'],[334]),

q(46,['Disconfortul la palparea unei spline mărite alertează de obicei către:',
 ['Infecție splenică, infarct splenic sau ruptură splenică','Splenomegalie hematologică nedureroasă, fără semnificație acută','Litiază renală stângă izolată, splina fiind nepălpabilă în infarct','Peritonită bilio-pancreatică, palparea splinei fiind superfluă','Hipersplenism congestiv fără ischemie, durerea fiind regula în limfoame'],'A',335,'Examenul splinei — Durerea sugerează infecție, infarct sau ruptură',
 'Diferențierea splinei hematologice nedureroase de disconfortul care orientează către infecție, infarct sau ruptură.',
 ['Textul precizează că splina hematologică mărită nu este de obicei dureroasă, iar disconfortul alertează către infecție, infarct sau ruptură.','Absența durerii este tocmai pattern-ul hematologic, nu semnul de alarmă.','Infarctul este una dintre cauzele de disconfort, nu o situație în care palparea e negativă.','Palparea bimanuală/Middleton rămâne relevantă.','Limfoamele produc de obicei splenomegalie nedureroasă; durerea nu este regula.']],
 8,'Tratează durerea ca semn de limfom banal și ignoră triada infecție–infarct–ruptură din același paragraf.',['disconfortul la palpare','infarct splenic']),

q(47,['Indicațiile splenectomiei în hipersplenism includ:',
 ['Trombocite <50.000 cu prezența hemoragiei','Neutropenie <2.000, cu sau fără infecții intercurente, sau anemie care necesită transfuzii','În hipersplenismul congestiv prin hipertensiune portală se tratează hipertensiunea, mai degrabă decât splenectomia','În sindromul Felty, splenectomia este o opțiune la infecții severe recurente sau ulcere gambiere trenante','Splenomegalia este un criteriu de diagnostic sine qua non, citopenia fără splenomegalie excluzând entitatea'],'ABCD',341,'Hipersplenism — Praguri 50.000 / 2.000 și Felty',
 'Aplicarea pragurilor de citopenie, a priorității tratării HTP în forma congestivă și a indicației selective din Felty, versus mitul splenomegaliei obligatorii.',
 ['Pragul <50.000 cu hemoragie este explicit.','Neutropenia <2.000 și anemia transfusion-dependentă sunt citate.','Tratarea HTP, nu splenectomia, este conduita congestivă.','Felty: infecții recurente sau ulcere trenante ca indicații.','Textul precizează că splenomegalia poate lipsi și nu face parte din criteriile de diagnostic.']],
 8,'Transformă splenomegalia într-un criteriu sine qua non și uită pragurile 50.000/2.000, două capcane de indicație.',['<50.000','sindromului Felty'],[340]),

q(48,['Prevenția și spectrul OPSI, dincolo de pneumococ, includ:',
 ['Incidența generală a OPSI la splenectomizați este de 40 de ori mai mare decât în populația generală','După pneumococ urmează, descrescător, H. influenzae, N. meningitidis, streptococ β-hemolitic, S. aureus, E. coli și Pseudomonas; herpes zoster, babesioza și malaria pot fi severe','La splenectomia electivă, vaccinarea cu mai mult de o săptămână înainte este, cel mai probabil, suficientă; se iau în considerare și vaccinurile Hib și meningococic','OPSI apare de obicei în primele ore postoperator, vaccinarea electivă fiind superfluă','Protecția vaccinală este completă, copiii sub 2 ani având răspuns identic adultului'],'ABC',342,'OPSI — Risc ×40, floră după pneumococ și timing vaccinal',
 'Fixarea riscului de 40 de ori, a spectrului după pneumococ și a ferestrei de vaccinare >1 săptămână înaintea splenectomiei elective.',
 ['Multiplicatorul de 40 de ori este explicit.','Lista descrescătoare după pneumococ și infecțiile virale/parazitare sunt citate.','Fereastra de peste o săptămână și vaccinurile Hib/meningococ sunt enunțate.','Textul precizează că OPSI nu apare de obicei imediat postoperator.','Vaccinarea nu este protecție totală; copiii sub 2 ani nu dezvoltă imunizare eficientă.']],
 8,'Plasează OPSI imediat postoperator și supraestimează protecția vaccinală, ignorând fereastra de >1 săptămână și riscul ×40.',['40 de ori','mai mult de o săptămână']),
];
