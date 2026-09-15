import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p<=199?p-78:p-82;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('intestin',14,pdfOffset,`intestin-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const INTESTIN_C=[
q(32,['În ocluzia extrem de proximală a intestinului subțire, vărsăturile persistente produc, potrivit textului:',
 ['Alcaloză metabolică, sucul intestinal fiind foarte acid','Acidoză metabolică, sucul fiind alcalin, identic OIS distale','Acidoză lactică de principiu, infarctul fiind deja instalat','Alcaloză respiratorie prin tahipneea din ischemia mezenterică','Hiperkalemie, rinichiul reținând potasiul cu bicarbonatul'],'A',195,'OIS — Alcaloză proximală vs acidoză distală',
 'Separarea alcalozei din OIS extrem de proximală de acidoza din OIS distală, plus pierderea renală de K+ cu bicarbonatul.',
 ['Alcaloza prin suc acid și vărsături proximale este explicită.','Acidoza metabolică este rezultatul OIS distale, unde sucul este mai alcalin.','Acidoza lactică poate semnala ischemie, dar infarctul nu este exclus de absența ei.','Alcaloza descrisă este metabolică, nu respiratorie.','Pierderile de potasiu cresc, rinichiul secretând K+ împreună cu bicarbonatul, deci hipokalemie, nu hiperkalemie.']],
 8,'Inversează alcaloza proximală cu acidoza distală, două tulburări consecutive în același paragraf.',['alcaloză metabolică','OIS distală']),

q(33,['Deshidratarea din OIS se produce prin:',
 ['Vărsături, scăderea absorbției și secreție stimulată hormonal de distensia lumenului','Pierderi în „spațiul al treilea”, prin edem parietal și transsudat peritoneal, care pot conduce la hipovolemie severă','Absorbția de Na, K, Cl și H rămâne intactă, secreția fiind oprită','Spațiul al treilea este neglijabil, hipovolemia ținând doar de hematemeză','Hiperhidratarea iatrogenă, fără pierderi digestive'],'AB',195,'OIS — Hipovolemie și spațiul al treilea',
 'Recunoașterea tripletei vărsături/malabsorbție/secreție plus a treilea spațiu parietal-peritoneal ca surse de hipovolemie.',
 ['Cele trei mecanisme digestive sunt explicite.','Spațiul al treilea și hipovolemia severă sunt citate.','Absorbția electroliților este redusă semnificativ, iar hormonii stimulează secreția.','Textul include transsudatul peritoneal, nu doar hematemeza.','Pierderile, nu hiperhidratarea, definesc tabloul.']],
 8,'Neagă spațiul al treilea pe care paragraful îl pune ca mecanism suplimentar de hipovolemie.',['spaţiul al treilea','hipovolemie severă']),

q(34,['Selectați enunțurile adevărate despre simptomele OIS în funcție de sediu:',
 ['În obstrucțiile distale, vărsăturile pot căpăta caracter fecaloid, pe măsură ce bacteriile descompun conținutul; distensia este mai evidentă','În OIS parțială, pasajul scaunului, gazelor și diareei poate persista, spre deosebire de ocluzia înaltă unde lipsa de gaze și scaun este sugestivă, dar nu imediată','OIS proximală produce distensie masivă și vărsături fecaloid de la debut','Absența tranzitului este imediată, colonul fiind gol din prima oră','Vărsăturile fecaloid definesc ileusul paralitic, nu OIS mecanică'],'AB',196,'OIS — Fecaloid și distensie distală',
 'Contrastul distal (fecaloid, distensie) versus parțial (pasaj persistent) și față de ocluzia înaltă (lipsă de gaze, dar nu imediată).',
 ['Caracterul fecaloid și distensia distală sunt explicite.','Persistența pasajului în OIS parțială și întârzierea în ocluzia înaltă sunt citate.','Distensia poate fi minimă în obstrucțiile proximale; fecaloidul apare pe măsură ce bacteriile acționează, nu de la debut proximal.','Aerul și scaunul deja din colon pot trece după debut.','Fecaloidul este descris în OIS mecanică distală, nu ca definiție a ileusului.']],
 8,'Atribuie fecaloidul și distensia masivă OIS proximale, inversând capacitatea de înmagazinare a intestinului.',['caracter „fecaloid"','Distensia abdominală']),

q(35,['Examinarea clinică a pacientului cu OIS include:',
 ['Tahicardie, mucoase uscate, turgor scăzut și hipotensiune relativă în cazurile avansate','Auscultație: sunete înalte și borborisme inițial, apoi diminuare pe măsură ce distensia progresează sau apare peritonita','Sensibilitatea ușoară difuză se remite adesea după decompresie nazogastrică, dacă ischemia nu s-a instalat','Durerea persistentă sau semnele peritoneale (percuție, decompresie, teama de mișcare) impun chirurgie de urgență','La obezi, cicatricea și eritemul peri-incizional sunt irelevante, hernia ocultă fiind exclusă'],'ABCD',196,'OIS — Clinic, auscultație, SNG',
 'Citirea progresiei borborisme înalte → tăcere și a testului de decompresie SNG ca discriminator de ischemie.',
 ['Semnele de hipovolemie sunt explicite.','Secvența auscultatorie este citată.','Remiterea după SNG, dacă nu există ischemie, este descrisă.','Semnele peritoneale ca indicație de urgență sunt menționate.','La obezi, eritemul/sensibilitatea lângă cicatrice pot fi singurul indiciu de hernie ocultă.']],
 8,'Ignorează indiciile de hernie ocultă la obez, pe care textul le subliniază explicit.',['borborisme','sondă nazogastrică']),

q(36,['Aspectele radiologice inițiale în suspiciunea de OIS includ:',
 ['Radiografii abdominale în clino- și ortostatism plus radiografie toracică; se caută calculi, pneumoperitoneu, pneumatoză, pneumobilie, aeroportie și pneumonie','Nivelele hidroaerice în ortostatism denotă alterarea peristalticii; persistența localizată pe seriate poate sugera ansă închisă','Dacă intestinul este destins masiv cu aer, clisma cu contrast hidrosolubil poate exclude un obstacol colic','CT-ul este inutil, zona de tranziție fiind vizibilă doar pe baritat gastric','Aerul rectal exclude OIS și confirmă perforația, fără alte investigații'],'ABC',196,'OIS — Radiografie și nivele hidroaerice',
 'Pachetul Rx (hidroaerice, pneumatoză, aeroportie) plus clisma hidrosolubilă când distincția subțire/colon este grea.',
 ['Lista de semne de căutat, inclusiv pneumatoză și aeroportie, este explicită.','Nivelele hidroaerice și persistența de ansă închisă sunt citate.','Clisma hidrosolubilă pentru obstacolul colic este descrisă.','CT-ul identifică zona de tranziție și ansele pline cu lichid.','Aerul din sigmoid/rect ajută diferențierea ileusului de OIS, nu confirmă perforația.']],
 8,'Anulează CT-ul ca unealtă a zonei de tranziție, deși paragraful următor i-o atribuie.',['nivelele hidroaerice','pneumatoza intestinală'],[197]),

q(37,['Investigațiile de laborator în OIS se caracterizează prin:',
 ['O alcaloză hipokalemică de „contracție” este frecventă la deshidratarea avansată','Acidoza lactică, mai ales după resuscitare adecvată, poate semnala ischemie, dar un infarct constituit poate exista și fără acidoză','Leucocitoza care persistă după SNG și volemie este irelevantă','Hiperamilazemia exclude OIS și impune doar diagnostic de pancreatită','Sumarul de urină este inutil, litiaza fiind exclusă de distensie'],'AB',197,'OIS — Laborator, alcaloză de contracție',
 'Temperarea acidului lactic: sugerează ischemie după resuscitare, dar nu exclude infarctul dacă lipsește.',
 ['Alcaloza hipokalemică de contracție este explicită.','Limitele acidozei lactice sunt citate.','Leucocitoza persistentă poate fi semn de progresie spre ischemie.','Hiperamilazemia poate apărea în OIS; valorile foarte mari ridică și suspiciunea de pancreatită.','Sumarul de urină exclude infecția sau litiaza ca origine a durerii.']],
 8,'Transformă absența acidozei lactice în excluderea infarctului, contrar frazei din paragraf.',['alcaloză hipokalemică','Acidoza lactică']),

q(38,['Reechilibrarea și protocolul de circuit rapid în ileusul postoperator includ:',
 ['Soluții izotone IV titrate; restabilirea normovolemiei înainte de înlocuirea agresivă a potasiului, ca să nu crească rapid dacă perfuzia renală nu e restabilită','Diureză de cel puțin 0,5 mL/kg/oră la adult ca indicator de resuscitare adecvată','Protocoalele de circuit rapid (evitarea SNG, mobilizare precoce, evitarea supraîncărcării, dietă precoce) și antagoniști opioizi selectivi precum alvimopan scad durata IPO','Potasiul se încarcă agresiv înainte de volemie, diureza țintă fiind 5 mL/kg/oră','Alvimopanul prelungește ileusul, SNG-ul fiind cerut după orice laparotomie'],'ABC',198,'IPO — 0,5 mL/kg/h și alvimopan',
 'Aplicarea pragului 0,5 mL/kg/oră, a ordinii volemie-înainte-de-K+ și a alvimopanului în protocolul de circuit rapid.',
 ['Ordinea volemie apoi potasiu este explicită.','Pragul 0,5 mL/kg/oră este citat.','Pachetul de circuit rapid și alvimopanul sunt descrise.','5 mL/kg/oră umflă diureza; K+ înainte de volemie riscă hiperkalemie.','Alvimopanul scade durata IPO; protocolul evită SNG-ul de rutină.']],
 8,'Umflă diureza la 5 mL/kg/oră și inversează alvimopanul, două detalii din același paragraf de reechilibrare.',['0,5 mL/kg/oră','alvimopan']),

q(39,['După reducerea aparentă a unei hernii încarcerate, durerea persistă. Identificați afirmația corectă referitoare la „reducerea în masă”:',
 ['Sacul herniar se reduce cu conținutul ca o unitate, deci conținutul poate rămâne compromis deși este internalizat; eșecul se manifestă prin durere sau sensibilitate persistentă, cu sau fără modificări inflamatorii','Reducerea în masă vindecă strangularea, monitorizarea fiind inutilă','Este identică herniei Richter, lumenul rămânând permeabil mezenteric','Definește volvulusul pe ax mezenteric, cu semn de vârtej','Se tratează conservator 2 săptămâni, identic OIS precoce aderențiale'],'A',199,'OIS — Reducere în masă',
 'Recunoașterea capcanei: internalizare aparentă cu intestin încă strangulat în sac, deci durerea persistentă cere reevaluare.',
 ['Definiția (sac + conținut ca unitate) și persistența compromiterii sunt explicite.','Monitorizarea atentă este cerută tocmai pentru a certifica remiterea.','Richter este prindere antimezenterică fără ocluzie completă, altă entitate.','Vârtejul CT ține de volvulus/hernie internă, nu de reducerea în masă.','Temporizarea de 2 săptămâni este a OIS precoce, nu a herniei încă ischemice.']],
 8,'Confundă reducerea în masă (intestin încă compromis) cu rezolvarea sau cu hernia Richter.',['reducere în masă','internalizat']),

q(40,['Dacă viabilitatea intestinului este îndoielnică la laparotomia pentru OIS, textul recomandă:',
 ['Evaluare cu fluoresceină sau Doppler, în completarea culorii, sângerării și peristalticii; niciun test nu este infailibil, deci reintervenție la 24 de ore dacă suspiciunea rămâne','Evitarea rezecțiilor extinse, mai ales în Crohn sau când restantul se apropie de 100 cm','La adult, invaginația ca punct de rezistență se rezecează; la copil, invaginația ileocolonică spontană se poate reduce prin clismă pneumatică sau cu contrast','Rezecție de principiu a tot intestinul destins, second-look-ul fiind abandonat','La adult, clisma reduce invaginația, rezecția fiind rezervată copilului'],'ABC',199,'OIS — Fluoresceină, 24 de ore, invaginație',
 'Cuplarea fluoresceină/Doppler + second-look 24 h cu regula adult=rezecție versus copil=clismă în invaginație.',
 ['Fluoresceina, Doppler-ul și fereastra de 24 de ore sunt explicite.','Pragul de 100 cm și Crohn-ul sunt citați.','Contrastul adult (rezecție) versus copil (clismă) este descris.','Textul cere evitatea rezecțiilor extinse, nu rezecția în bloc.','Direcția adult/copil este inversată.']],
 8,'Inversează conduita invaginației adult versus copil și anulează second-look-ul de 24 de ore.',['fluoresceină','24 de ore']),

q(41,['Prevalența și terenul bolii Crohn a intestinului subțire includ:',
 ['Prevalență mondială de 10–70 de cazuri la 100.000 locuitori, în America de Nord până la 200 la 100.000','Este întâlnită în primul rând în țările industrializate, cu factori genetici și de mediu','Rudele de gradul I au un risc de 30 de ori mai mare decât populația generală','Boala Crohn a intestinului subțire este asociată cu aproximativ o pătrime din sindroamele de intestin scurt, prin recurență și rezecții repetate','Prevalența este 2% din populație, identică Meckel, fără agregare familială'],'ABCD',199,'Crohn — 10–70 / 200 / 30× / o pătrime',
 'Memorarea treptelor 10–70 mondiale, 200 nord-americane, 30× la rude și a ponderii de o pătrime din intestinul scurt.',
 ['Intervalul 10–70 și cifra nord-americană 200 sunt explicite.','Predominanța în țările industrializate este citată.','Riscul de 30 de ori la rudele de gradul I este descris.','Ponderea de o pătrime din intestinul scurt este menționată.','2% este prevalența Meckel, nu a Crohn; agregarea familială există.']],
 8,'Permutează 10–70/100.000 (Crohn) cu 2% (Meckel) și neagă riscul familial de 30 de ori.',['I 0-70 de cazuri','30 de ori'],[204]),

q(42,['Când se observă recurența bolii Crohn după rezecție, afectarea este cel mai frecvent localizată:',
 ['Proximal de sediul anterior al bolii, deși nu este o regulă fără excepție','Distal de anastomoză, identic carcinoidului ileal','Doar pe colonul stâng, identic rectocolitei','Pe esofagul Barrett, identic adenocarcinomului','Pe apendice, impunând hemicolectomie de principiu'],'A',204,'Crohn — Recurență proximală',
 'Fixarea recurenței proximal de sediul anterior, față de pattern-urile ileal carcinoid sau colitic.',
 ['Fraza „cel mai frecvent localizată proximal de sediul anterior” este explicită.','Carcinoidul ileal nu dictează recurența Crohn.','Rectocolita nu este pattern-ul descris.','Barrett ține de esofag, nu de Crohn intestinal.','Apendicectomia profilactică se evită dacă inserția cecală e bolnavă.']],
 8,'Mută recurența Crohn de pe versantul proximal pe colon stâng sau Barrett, două sedii din alte capitole.',['proxima! de','sediul anterior']),

q(43,['În boala perianală Crohn și în fistulele care nu răspund medical sunt adevărate următoarele:',
 ['Fistulele cutanate sau viscerale non-enterice: rezecția intestinului comunicant și debridare simplă sau excizie limitată; abcesele constituite: drenaj percutanat și optimizare medicală, chirurgie întârziată dacă e nevoie','Fistulele perianale: evacuare simplă a abceselor și seton elastic pentru drenaj continuu; stomele pentru sepsis recurent sau scurgeri persistente; proctectomia rezervată stadiului final','Chirurgia perianală este limitată și conservatoare, inciziile agresive riscând plăgi care nu se vindecă','Setonul și stoma sunt contraindicate, proctectomia fiind gestul de primă intenție la orice fistulă','Apendicectomia pe cec bolnav previne fistula, deci se face de principiu'],'ABC',204,'Crohn — Seton, stomă, proctectomie',
 'Escaladarea seton → stomă → proctectomie de ultimă linie, față de debridarea agresivă care nu se vindecă.',
 ['Drenajul percutanat și rezecția limitată a fistulelor sunt explicite.','Setonul, stoma și proctectomia ca ultimă treaptă sunt citate.','Caracterul conservator al chirurgiei perianale este descris.','Proctectomia este rezervată stadiului final, nu primei intenții.','Apendicectomia pe cec bolnav riscă fistula cecală și se evită.']],
 8,'Pune proctectomia ca prim gest, inversând ierarhia conservatoare seton–stomă–proctectomie.',['seton elastic','Proctectomia']),

q(44,['Fereastra de timp și tabloul trombozei venoase mezenterice, față de embolia AMS, se caracterizează prin:',
 ['Ischemia prelungită (ex. >12 ore) poate progresa până la necroză, deci diagnosticul prompt scade mortalitatea','Tromboza VMS tinde să aibă debut insidios, cu dureri de câteva zile sau chiar săptămâni, difuze și nespecifice','Embolia AMS are același debut insidios de săptămâni, fără fibrilație atrială','Fereastra până la necroză este de 2 săptămâni, identică OIS precoce','IMNO se prezintă cu durere disproporționată bruscă, identică emboliei, fără instabilitate hemodinamică'],'AB',205,'IMA — Fereastra >12 ore și VMS insidios',
 'Contrastul ferestrei scurte >12 ore până la necroză cu debutul insidios zile–săptămâni al trombozei VMS.',
 ['Fereastra >12 ore este explicită.','Debutul insidios zile/săptămâni al VMS este citat.','Embolia AMS este clasic bruscă, adesea cu FiA.','2 săptămâni este temporizarea OIS precoce, nu fereastra IMA.','IMNO are dureri minore, umbrite de instabilitatea hemodinamică.']],
 8,'Permutează fereastra >12 ore a necrozei IMA cu temporizarea de 2 săptămâni a OIS precoce.',['> 12 ore','câteva zile']),

q(45,['După revascularizarea pentru ischemie mezenterică acută, în așteptarea second-look-ului, cateterul mezenteric permite administrarea de:',
 ['Papaverină, pentru a ameliora vasospasmul asociat și a îmbunătăți fluxul către intestinul recent revascularizat','Vasopresoare α-adrenergice și digoxină, pentru a crește spasmul splanhnic','Octreotid lunar, ca în diareea post-vagotomie','Ursodeoxicolic 300 mg, ca în litiaza post-bypass','Alvimopan, ca în ileusul postoperator colic'],'A',206,'IMA — Papaverină pe cateter',
 'Izolarea papaverinei pe cateter mezenteric ca antispastic după revascularizare, față de vasopresoarele α evitate în IMNO.',
 ['Papaverina pentru vasospasmul post-revascularizare este explicită.','Vasopresoarele α și digoxina trebuie evitate în IMNO.','Octreotidul ține de dumping/diaree post-vagotomie sau gastrinom.','Ursodeoxicolicul este profilaxia litiazei bariatrice.','Alvimopanul este pentru IPO, nu pentru IMA.']],
 8,'Înlocuiește papaverina cu vasopresoare α, inversând tocmai evitarea spasmului splanhnic.',['papaverină','vasospasmul']),

q(46,['Tumorile intestinului subțire, deși organul are lungime și suprafață mari, sunt mai puțin frecvente decât cele colorectale, posibil datorită:',
 ['Timpului de tranzit scăzut, concentrației bacteriene mai reduse și conținutului mai diluat','Diagnosticului cel mai frecvent prin enteroclismă și, în special, enterografie CT','Leiomiomelor (spectrul GIST benign) ca cele mai frecvente leziuni benigne tradiționale, mai ales în jejun, cu vârf în decada a șasea, adesea asimptomatice','Capsula endoscopiei care permite biopsie și polipectomie, înlocuind enterografia','Manometriei anorectale ca standard de aur oncologic'],'ABC',206,'Tumori IS — Raritate, CT, leiomiom jejunal',
 'Explicația rarității (tranzit/bacterii/diluție), a enterografiei CT și a leiomiomului jejunal din decada a șasea.',
 ['Cele trei explicații sunt explicite.','Enteroclisma și enterografia CT sunt citate.','Leiomiomul jejunal, decada a șasea și asimptomaticul sunt descrise.','Incapacitatea capsulei de a biopsia este dezavantajul major.','Manometria anală nu diagnostichează tumorile de intestin subțire.']],
 8,'Atribuie capsulei biopsia, pe care textul o neagă, și anulează enterografia CT.',['enterografie CT','decada a şasea'],[207]),

q(47,['Sindromul carcinoid se caracterizează prin:',
 ['Asociere cu producția de serotonină (5-hidroxitriptamină); ficatul degradează serotonina portală în 5-HIAA','Pentru ca sindromul să apară dintr-un primar intestinal, sunt necesare metastaze hepatice (descărcare postportală) sau un primar extra-portal (plămân, gonade, rect)','Confirmare: 5-HIAA urinar; serotonina sau cromogranina A serică pot confirma de asemenea','Manifestări: eritem cutanat, bronhospasm, stenoză pulmonară și insuficiență tricuspidiană','Sindromul ileal apare fără metastaze hepatice, ficatul neepurând serotonina portală'],'ABCD',208,'Carcinoid — 5-HIAA și first-pass hepatic',
 'Aplicarea regulii first-pass: sindromul intestinal cere metastaze hepatice sau primar extra-portal, plus 5-HIAA urinar.',
 ['Serotonina și degradarea la 5-HIAA sunt explicite.','Condiția metastaze hepatice sau primar extra-portal este citată.','5-HIAA urinar și cromogranina A sunt descrise.','Eritemul, bronhospasmul și valvulopatia dreaptă sunt din figură.','Ficatul este extrem de eficient la epurarea portală; sindromul ileal cere metastaze hepatice.']],
 8,'Anulează first-pass-ul hepatic, permițând sindrom carcinoid ileal fără metastaze, contrar paragrafului.',['5-HIAA','vena po1te']),

q(48,['Limfomul intestinului subțire se caracterizează prin:',
 ['Intestinul subțire este cea mai comună localizare extraganglionară a limfoamelor, deși doar 5% dintre limfoame se află aici; reprezintă 10–15% din cancerele intestinului subțire','Ileonul este cel mai frecvent implicat, prin concentrația de țesut limfoid din plăcile Peyer; vârful de incidență este în decadele a cincea și a șasea','Limfomul este Hodgkin al copilului, plăcile Peyer fiind scutite','Duodenul periampular deține 90% din limfoame, tratate prin Whipple','Manometria anală stabilește histologia, biopsia fiind inutilă'],'AB',208,'Limfom IS — 5%, 10–15%, Peyer',
 'Împerecherea 5% din limfoame / 10–15% din cancerele IS cu predilecția ileonului (Peyer) în decadele 5–6.',
 ['Cele două procente și locul extraganglionar 1 sunt explicite.','Ileonul, Peyer și decadele 5–6 sunt citate.','Predomină non-Hodgkin-ul adult, nu Hodgkin-ul pediatric.','Duodenul periampular este sediul adenocarcinomului, nu al limfomului dominant.','Diagnosticul este histologic, nu manometric.']],
 8,'Permutează 10–15% (cancere IS) cu 90% periampular (adenocarcinom duodenal) și mută limfomul pe Hodgkin pediatric.',['I 0-15%','plăcilor Peyer']),

q(49,['Un copil de 18 luni cu scaun „jeleu de coacăze” și masă abdominală dreaptă. Diverticulul Meckel ca punct de invaginație:',
 ['Clisma cu aer sau contrast, la copil, poate reduce invaginația dacă intestinul nu e compromis, urmată de rezecția diverticulului și eliberarea aderențelor fibroase','Scintigrafia cu 99mTc-pertehnetat diagnostichează ~90%; acuratețea poate fi îmbunătățită cu cimetidină sau pentagastrină, de obicei fără a fi necesar','Rezecția incidentală la tânăr este justificată preventiv (morbiditate scăzută); beneficiul scade cu vârsta; la adult se consideră baza îngustă, banda mezodiverticulară sau heterotopia evidentă','Clisma înlocuiește rezecția la adult, scintigrafia fiind inutilă sub 2 ani','Rezecția incidentală la vârstnic este de principiu, riscul simptomatic crescând cu vârsta'],'ABC',210,'Meckel — Jeleu de coacăze, cimetidină, incidental',
 'Completarea regulii lui 2 cu jeleul de coacăze, adjuvanții scintigrafiei și cu indicațiile rezecției incidentale (tânăr vs bază îngustă).',
 ['Clisma pediatrică urmată de rezecție este explicită.','90% și cimetidina/pentagastrina sunt citate.','Criteriile de rezecție incidentală după vârstă sunt descrise.','La adult invaginația se rezecează; scintigrafia este utilă la <2 ani.','Beneficiul rezecției incidentale scade cu vârsta, nu crește.']],
 8,'Inversează clisma pediatrică cu rezecția de principiu a vârstnicului, două extreme de vârstă din același paragraf.',['Jeleu de coacăze','cimetidină']),

q(50,['Malrotația cu volvulus al mezenteronului se caracterizează prin:',
 ['Anomalii de rotație și fixare între săptămânile 4 și 10 de gestație; rotația incompletă lasă duodenul acoperit de benzile lui Ladd, cu cec în hipocondrul drept','Simptome precoce: vărsături bilioase, apoi distensie, sensibilitate și șoc ca manifestări tardive de necroză','Cea mai rapidă evaluare: explorarea radiografică a tractului GI superior; tratament: detorsie, secționarea benzilor Ladd, lărgirea mezenterului, intestin subțire la dreapta și colon la stânga, plus apendicectomie','Apendicectomia se evită, cecul rămânând în fosa iliacă dreaptă','Malrotația se tratează prin Nissen 360°, benzile Ladd ținând de BRGE'],'ABCD',210,'Malrotație — Ladd, UGI, apendicectomie',
 'Maparea săptămânilor 4–10, a benzilor Ladd și a operației (detorsie + apendicectomie, pentru că apendicele ar ajunge în hipocondrul stâng).',
 ['Fereastra 4–10 săptămâni și benzile Ladd sunt explicite.','Vărsăturile bilioase ca semn precoce sunt citate.','UGI, detorsia, plasarea intestin/colon și apendicectomia sunt descrise.','Apendicectomia se face tocmai pentru că apendicele ar fi în cadranul superior stâng.','Nissen este antireflux, nu procedura Ladd.']],
 8,'Omite apendicectomia din procedura Ladd, deși textul o cere din cauza poziției viitoare a cecului.',['benzile lui Ladd','a 4-a şi a 10-a']),

q(51,['Incidența apendicitei acute, citată în capitol, afectează aproximativ:',
 ['6,7% dintre femei și 8,6% dintre bărbați, majoritatea între 5 și 35 de ani, de obicei în primele 24–48 de ore; prezentarea atipică la copii și vârstnici aproape dublează riscul de perforație','2% din populație, identic diverticulului Meckel, fără diferență de sex','50% din femei, identic mucoasei gastrice ectopice Meckel','90% din bărbați peste 80 de ani, perforația fiind rară','0,5%, identic sângerării după sleeve'],'A',211,'Apendicită — 6,7% / 8,6%',
 'Reținerea cuplului 6,7% femei / 8,6% bărbați și a dublării perforației la extremele de vârstă.',
 ['Cifrele 6,7% și 8,6%, vârsta 5–35 de ani, fereastra 24–48 de ore și dublarea perforației sunt explicite.','2% este prevalența Meckel.','50% este mucoasa gastrică ectopică, nu incidența apendicitei.','Vârstnicii au prezentare atipică și risc mai mare de perforație, nu 90% incidență.','0,5% este sângerarea după sleeve, nu apendicita.']],
 8,'Permutează 6,7/8,6% (apendicită) cu 2% (Meckel) sau 0,5% (sleeve), trei prevalențe din capitole vecine.',['6,7%','8,6%']),
];
