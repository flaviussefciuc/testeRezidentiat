import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-88;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('biliar',16,pdfOffset,`biliar-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const BILIAR_C=[
q(27,['Litiaza veziculară asimptomatică, la adult:',
 ['Anual, circa 1–2% dintre asimptomatici dezvoltă simptome sau complicații; două treimi rămân fără simptome sau complicații timp de 20 de ani','Colecistectomia profilactică nu este indicată la adulții asimptomatici, riscul de carcinom fiind prea scăzut pentru a o justifica','Riscul de carcinom este mai mare la vezicula de porțelan (calcificarea peretelui)','Profilaxia chirurgicală se impune la toți adulții cu calculi, chiar fără colică','Rata de simptome este 50% pe an, deci așteptarea 20 de ani este inutilă'],'ABC',246,'Litiază veziculară asimptomatică',
 'Aplicarea cifrelor 1–2%/an și 2/3 la 20 de ani și a absenței indicației de colecistectomie profilactică la adultul asimptomatic.',
 ['Cifrele 1–2% și două treimi/20 de ani sunt explicite.','Absența indicației profilactice la adult este citată.','Porțelanul crește riscul de carcinom față de calculii simpli.','Profilaxia nu se impune la asimptomaticul adult.','1–2%/an, nu 50%, este rata citată.']],
 8,'Ridică conversia simptomatică de la 1–2%/an la 50% și impune profilaxie la toți adulții cu calculi.',['1-2% vor dezvolta','20 de ani']),

q(28,['Conform algoritmului de evaluare a icterului (Figura 16-3):',
 ['Bilirubina directă (conjugată) crescută, cu FA și GGT mult crescute față de aminotransferaze, orientează spre obstrucția arborelui biliar (ecografie ± PTC, ERCP, MRCP)','Bilirubina indirectă (neconjugată) crescută orientează spre tulburare de glucuronil-transferază (nou-născut, Crigler-Najjar), absorbție (Gilbert) sau producție excesivă (hemoliză)','Aminotransferazele (AST, ALT) mult peste FA/GGT orientează spre boală hepatocelulară','Obstrucția biliară se recunoaște după bilirubină indirectă izolată, fără creștere de FA','Gilbert produce conjugare excesivă, cu FA de trei ori peste transaminaze'],'ABC',247,'Figura 16-3 — Algoritmul icterului',
 'Diferențierea colestazei (FA/GGT) de hepatocelular (AST/ALT) și a icterului neconjugat (Crigler-Najjar, Gilbert, hemoliză).',
 ['Ramura conjugată + FA/GGT către obstrucție este desenată.','Ramura neconjugată către Crigler-Najjar, Gilbert și hemoliză este listată.','Ierarhia transaminaze >> FA definește hepatocelularul.','Obstrucția este conjugată, cu FA crescută.','Gilbert este pe ramura neconjugată, nu colestatică.']],
 8,'Mută Gilbert/Crigler-Najjar pe ramura colestatică și inversează FA versus transaminaze.',['Crigler-Najjar','Gilbert']),

q(29,['Hipercarotenemia se deosebește de icter prin:',
 ['Bilirubină serică normală și sclere albe, adesea cu istoric de consum de medicamente','Tegumente icterice, sclere icterice și bilirubină serică crescută, identic obstacolului extrahepatic','Scaune decolorate și urină ca ceaiul, cu FA foarte crescută','Bilirubină conjugată crescută izolat, cu dilatație de CBP la ecografie','Necesitatea ERCP de primă intenție, ca în coledocolitiază'],'A',247,'Diagnostic diferențial — Hipercarotenemia',
 'Recunoașterea hipercarotenemiei (bilirubină normală, sclere albe) față de icterul adevărat.',
 ['Algoritmul o plasează la bilirubină normală și sclere albe.','Tegumente și sclere icterice cu bilirubină crescută definesc icterul.','Scaunele decolorate țin de obstacol extrahepatic.','CBP dilatată nu face parte din ramura hipercarotenemiei.','ERCP nu este primul gest în hipercarotenemie.']],
 8,'Tratează hipercarotenemia ca obstacol extrahepatic (sclere icterice, ERCP), deși algoritmul o desparte prin sclere albe.',['Hipercarotenemia','Sclere albe']),

q(30,['PTC (colangiografia percutană transhepatică) se caracterizează prin:',
 ['Succes de peste 95% când ductele sunt dilatate și de doar 70–80% la calibru normal; este utilă mai ales pentru arborele biliar proximal','Permite diagnostic citologic, extragerea calculilor și plasarea unui tub de dren pe canalele obstruate','Coagulopatia trebuie corectată înaintea PTC sau ERCP','Succesul este sub 20% pe ducte dilatate, citologia fiind imposibilă','PTC vizualizează doar pancreasul, nu arborele biliar proximal'],'ABC',246,'PTC — Succes 95% versus 70–80%',
 'Aplicarea ratelor de succes după calibru și a rolului terapeutic (citologie, extracție, dren), cu corectarea coagulopatiei.',
 ['Cifrele >95% versus 70–80% și utilitatea proximală sunt explicite.','Citologia, extracția și drenul sunt listate.','Corectarea coagulopatiei înainte de PTC/ERCP este cerută.','Succesul pe dilatate este >95%, nu sub 20%.','PTC vizează arborele biliar proximal.']],
 8,'Inversează 95% (ducte dilatate) cu 70–80% (calibru normal) și mută PTC pe pancreas.',['peste 95%','70-80%']),

q(31,['Tratamentul inițial al colecistitei acute include:',
 ['Oprirea aportului oral, lichide intravenoase și antibiotice pe Gram-negative aerobe și enterococ (E. coli, Klebsiella pneumoniae, Streptococcus faecalis)','Colecistectomie precoce, la câteva zile de la prezentare, după hidratare și antibiotice, pentru a preveni gangrena, perforația și sepsisul','Întârziere dacă trebuie gestionate alte probleme medicale majore, sau intervenție mai devreme dacă se suspectează perforație sau abces','Colecistostomie percutană ecoghidată (tub prin ficat în vezică) la pacientul prea grav pentru colecistectomie','Antibiotice doar pe anaerobi, fără acoperire Gram-negativă, și amânare sistematică 6 săptămâni'],'ABCD',248,'Colecistita acută — Antibiotice și timing',
 'Ierarhia NPO/IV/antibiotice → colecistectomie precoce versus colecistostomie la pacientul instabil.',
 ['Bacteriile și spectrul antibiotic sunt explicite.','Fereastra de câteva zile și prevenția complicațiilor sunt citate.','Excepțiile (comorbidități versus perforație) sunt descrise.','Colecistostomia percutană prin ficat este indicația pentru cel prea grav.','Spectrul țintește Gram-negativi și enterococ; amânarea 6 săptămâni nu e regula.']],
 8,'Amână sistematic 6 săptămâni și schimbă spectrul antibiotic, inversul algoritmului precoce.',['Escherichia coli','colecistostomie']),

q(32,['O femeie de 82 de ani, instabilă, cu colecistită acută, prea gravă pentru colecistectomie. Decompresia acceptată este:',
 ['Colecistostomie percutană sub ghidaj ecografic, cu tub de dren prin ficat în vezica biliară','Whipple de urgență, vezicula neputând fi decompresată izolat','ESWL extracorporeală, ca substitut al drenajului','Doar acid ursodeoxicolic oral, fără dren','ERCP cu sfincterotomie, fără abordarea veziculei'],'A',248,'Colecistostomia percutană',
 'Recunoașterea colecistostomiei percutane transhepatice ca decompresie la pacientul inoperabil.',
 ['Plasarea percutană ecoghidată prin ficat este explicită.','Whipple nu este tratamentul colecistitei.','ESWL nu decomprimează vezicula inflamată.','Ursodeoxicolicul ține de dizolvarea electivă, nu de acutul instabil.','ERCP decomprimează CBP, nu vezicula obstruată pe cistic.']],
 8,'Înlocuiește colecistostomia percutană cu Whipple sau ESWL, două gesturi din alte capitole ale căii biliare.',['plasarea percutană','ghidaj ecografic']),

q(33,['Colecistita gangrenoasă și cea emfizematoasă se deosebesc prin:',
 ['Gangrenoasa asociază morbiditate 15–25% și mortalitate 20–25%; pacienții sunt mai vârstnici, cu comorbidități și hiperleucocitoză; tratamentul e stabilizare, antibiotice cu spectru larg și colecistostomie de urgență sau colecistectomie, după toleranță','Emfizematoasa rezultă din bacterii producătoare de gaze, cu risc mai mare de gangrenă și perforație; 20–50% asociază diabet; aer în perete, lumen, țesuturi pericolecistice sau nivel hidro-aeric','Emfizematoasa cere antibiotice cu acoperire anaerobă și colecistectomie de urgență','Gangrenoasa are mortalitate sub 1%, emfizematoasa fiind limitată la tineri nediabetici','Aerul parietal contraindică antibioticele, colecistectomia fiind amânată electiv'],'ABC',248,'Gangrenă versus emfizematoasă',
 'Contrastarea prognosticului 15–25%/20–25% al gangrenei cu aerul parietal și diabetul 20–50% ale formei emfizematoase.',
 ['Cifrele de morbiditate/mortalitate și conduita sunt explicite.','Gazul, diabetul 20–50% și semnele radiologice sunt citate.','Acoperirea anaerobă și urgența operatorie închid paragraful emfizematos.','Mortalitatea gangrenei nu e sub 1%; emfizematoasa e a vârstnicului, adesea diabetic.','Aerul impune urgență, nu amânare.']],
 8,'Permutează mortalitatea 20–25% sub 1% și transformă aerul parietal într-o indicație electivă.',['15-25%','20-50% dintre pacienţi']),

q(34,['Un pacient din ATI, pe nutriție parenterală și ventilație, dezvoltă distensie veziculară fără calculi. Colecistita alitiazică:',
 ['Poate complica evoluția pacientului internat, adesea cu NPT, ventilație și imunosupresie; diagnosticul e dificil, istoricul fiind necoerent','HIDA are adesea fals-pozitive și specificitate de doar 38% în astfel de cazuri; după diagnostic, tratamentul e similar litiazicei','HIDA are specificitate 98% aici, calculii fiind vizibili în toate cazurile','NPT protejează de alitiazică, ventilația fiind un factor protector','Tratamentul diferă radical, colecistectomia fiind abandonată'],'AB',248,'Colecistita acută alitiazică',
 'Recunoașterea terenului (NPT, ventilație, imunosupresie) și a specificității HIDA de doar 38% în alitiazică.',
 ['Terenul și dificultatea diagnosticului sunt explicite.','Fals-pozitivele și 38% specificitate sunt citate; tratamentul e similar.','38%, nu 98%, este specificitatea; calculii lipsesc prin definiție.','NPT și ventilația predispun, nu protejează.','Tratamentul este similar litiazicei.']],
 8,'Ridică specificitatea HIDA din alitiazică de la 38% la 98% și transformă NPT-ul în factor protector.',['specificitate de doar 38%','Colecistita acută alitiazică']),

q(35,['Colecistita cronică se caracterizează prin:',
 ['Este cea mai frecventă formă de litiază colecistică simptomatică, prin episoade minore repetate de obstrucție a cisticului, cu inflamație și fibroză parietală','Colica (HD/epigastru) durează de la 30 de minute până la câteva ore, adesea la câteva ore după masă; febra și frisoanele lipsesc','Dispepsia (intoleranță la grăsimi, flatulență, eructații, indigestie) este nespecifică; icterul nu este produs prin obstrucția cisticului','Febra înaltă și icterul prin cistic sunt regula, identic angiocolitei','Examenul fizic rămâne peritonitic între crize, ca în colecistita acută'],'ABC',248,'Colecistita cronică',
 'Contrastarea colicii prelungite fără febră a cronicei față de angiocolită și de peritonismul acutului.',
 ['Frecvența maximă și mecanismul (obstrucții minore repetate) sunt explicite.','Fereastra 30 min–ore și absența febrei sunt citate.','Nespecificitatea dispepsiei și originea extra-cistică a icterului sunt enunțate.','Febra/icterul prin cistic țin de acut/angiocolită, nu de cronică.','Între crize abdomenul nu are modificări specifice.']],
 8,'Atribuie cronicei febra și icterul angiocolitei, deși textul le neagă explicit.',['Colecistita cronică','30 de minute']),

q(36,['Epidemiologia litiazei, dincolo de cifra de 15% la adulți:',
 ['Peste 800.000 de colecistectomii sunt practicate anual în SUA','La femeile caucaziene, prevalența este 5–15% sub 50 de ani și circa 25% la vârste mai înaintate','La bărbații caucazieni, prevalența este 4–10% sub 50 de ani și 10–15% ulterior','Prevalența scade cu vârsta, bărbații fiind afectați de 3 ori mai frecvent','Colecistectomia deschisă a înlocuit laparoscopia ca operație de elecție'],'ABC',242,'Epidemiologie — Prevalență pe vârstă și sex',
 'Aplicarea prevalențelor pe decade la caucazieni și a volumului de 800.000 de colecistectomii, față de inversarea de sex/vârstă.',
 ['Cifra de 800.000 este explicită.','5–15% și 25% la femei sunt citate.','4–10% și 10–15% la bărbați completează tabelul.','Incidența crește cu vârsta; femeile sunt afectate de circa 3 ori mai frecvent.','Laparoscopia a înlocuit deschisul, nu invers.']],
 8,'Inversează predilecția de sex și direcția vârstei, pe fondul a patru procente din același paragraf.',['800.000 de colecistectomii','5-15%']),

q(37,['„Nămolul” biliar (sludge) se caracterizează prin:',
 ['Material amorf cu mucoproteine, cristale de colesterol și bilirubinat de calciu; apare la NPT prelungită, înfometare și scădere ponderală rapidă și poate precede calculii','Este un calcul pigmentar brun, primitiv în căi infectate, radioopac','Nu conține cristale de colesterol și nu se asociază nutriției parenterale','Se formează doar în CBP sterilă, identic calculilor negri','Impune ERCP de urgență, fiind echivalentul colangitei supurate'],'A',243,'Sludge biliar',
 'Recunoașterea compoziției sludge-ului și a terenului (NPT, înfometare, scădere ponderală) ca precursor al calculilor.',
 ['Compoziția, terenul și rolul de precursor sunt explicite.','Brunii infectați din căi sunt altă entitate.','Sludge-ul conține tocmai cristale de colesterol și se leagă de NPT.','Negrii sunt din colecist steril, nu sludge-ul.','Nu este echivalentul colangitei supurate.']],
 8,'Confundă sludge-ul (precursor amorf) cu calculul pigmentar brun din căile infectate.',['Nămolul" biliar','bilirubinat de calciu']),

q(38,['Cancerul veziculei biliare — epidemiologie și factori de risc:',
 ['Este cel mai frecvent cancer al tractului biliar și al șaselea al tractului gastrointestinal; vârful e în a șaptea decadă, raport 3:1 femei','Litiaza este cel mai frecvent factor de risc (până la 75% dintre pacienți); polipii ≥1,5 cm au prevalență a cancerului de 46–70%','Vezicula de porțelan (calcificarea peretelui) asociază carcinom în circa 20%; colecistectomia profilactică este recomandată când se constată calcificări parietale','Alți factori: joncțiune pancreaticobiliară anormală (~10%), CSP, infecție cu E. coli/Salmonella, solvenți industriali','Incidența maximă e în a treia decadă, la bărbați, litiaza fiind protectivă'],'ABCD',251,'Cancer de veziculă — 3:1, 75%, porțelan 20%',
 'Reținerea triadului 3:1 / 75% litiază / 20% porțelan și a pragului de 1,5 cm pentru polipi.',
 ['Frecvența, decada a șaptea și 3:1 sunt explicite.','75% și 46–70% la polipi ≥1,5 cm sunt citate.','20% și indicația profilactică pe calcificări sunt enunțate.','Joncțiunea, CSP, infecțiile și toxinele completează lista.','Vârful nu e în tinerețe; litiaza e factor de risc, nu protecție.']],
 8,'Inversează raportul 3:1 și tratează litiaza ca protectivă, pe trei procente din același paragraf.',['3: 1','aproximativ 20%']),

q(39,['Diagnosticul incidental al cancerului de veziculă:',
 ['Treizeci la sută dintre tumori sunt diagnosticate incidental în timpul colecistectomiei; cancerul se regăsește în 0,3–1% din piesele de colecistectomie','Simptomele incipiente sunt adesea cauzate de litiază, nu de neoplazie; durerea în HD e similară colicii, dar mai persistentă','90% sunt diagnosticate preoperator, piesele de colecistectomie fiind negative','Formele incipiente se prezintă cu scădere ponderală și astenie, fără durere','Incidentalul este excepțional (sub 0,01% din piese)'],'AB',251,'Cancer incidental — 30% și 0,3–1%',
 'Contrastarea diagnosticului incidental (30%; 0,3–1% din piese) cu simptomele litiazice ale bolii incipiente.',
 ['30% incidental și 0,3–1% din piese sunt explicite.','Originea litiazică a simptomelor incipiente este citată.','Diagnosticul preoperator corect e scăzut (capitolul citează 10% în altă secțiune), nu 90%.','Scăderea ponderală și astenia țin de boala avansată.','0,3–1%, nu 0,01%, este cifra din piese.']],
 8,'Permutează 30% (incidental) cu 90% preoperator și coboară 0,3–1% sub 0,01%.',['Treizeci la sută','0,3-1%']),

q(40,['Ileusul biliar, după confirmarea CT, se gestionează astfel:',
 ['Inițial ca o ocluzie intestinală înaltă: tub nazogastric și hidratare intravenoasă','Urmează laparotomie (sau laparoscopie) exploratorie și îndepărtarea calculului, mobilizat retrograd către o enterotomie în intestin sănătos','Întregul intestin trebuie explorat pentru alți calculi; la selectați, fără comorbidități, se pot adăuga colecistectomia și corectarea fistulei','Reconstrucția fistulei și colecistectomia se impun de principiu la vârsta înaintată, înaintea enterotomiei','Sonda nazogastrică este contraindicată, calculul lăsându-se pe loc'],'ABC',251,'Ileus biliar — Enterotomie și explorarea intestinului',
 'Ierarhia decompresie/hidratare → enterotomie în intestin sănătos → explorarea întregului intestin, cu fistulă doar la selectați.',
 ['NG și hidratarea ca ocluzie înaltă sunt explicite.','Enterotomia după mobilizare retrogradă este citată.','Explorarea întregului intestin și selecția pentru fistulă sunt descrise.','Mulți vârstnici nu tolerează operații prelungite; fistulă nu precede enterotomia.','NG este primul gest, nu o contraindicație.']],
 8,'Inversează ordinea enterotomie versus reconstrucția fistulei și contraindică sonda nazogastrică.',['enterotomie','Întregul intestin']),

q(41,['Tubul în T după explorarea deschisă a CBP:',
 ['Se menține de obicei 3 săptămâni, apoi se injectează contrast; dacă curge liber în duoden, fără defecte de umplere, se suprimă','În general, tuburile în T se scot după asigurarea patenței (3–6 săptămâni)','La calcul restant pe colangiografia pe tub, circa 20% se evacuează spontan dacă sunt mici; tubul se lasă 4–6 săptămâni și se repetă colangiografia','Tubul se extrage în primele 24 de ore, patența nefiind verificată','Calculii restanți nu trec spontan, ERCP-ul fiind inutil'],'ABC',255,'Tubul în T — 3 săptămâni și 20% spontan',
 'Aplicarea ferestrelor 3 săptămâni / 3–6 săptămâni și a evacuării spontane la 20% din calculii restanți mici.',
 ['Cele 3 săptămâni și condiția de extragere sunt explicite.','Intervalul 3–6 săptămâni este citat.','20% și fereastra 4–6 săptămâni sunt descrise.','Drenajul peritoneal, nu tubul în T, se suprimă la 24–48 de ore după clampare.','20% se evacuează spontan; ERCP rămâne o opțiune.']],
 8,'Extrage tubul în T la 24 de ore și neagă evacuarea spontană de 20%, două ferestre din același paragraf.',['3 săptămâni','4-6 săptămâni']),

q(42,['Complicațiile ERCP cu sfincterotomie și manipulare de calcul includ:',
 ['Pancreatită postprocedură, sângerare GI (1–2%) și perforație duodenală sau de CBP (0,3%)','Coagulopatia trebuie corectată înainte de procedură; dacă un calcul nu poate fi extras, un stent decomprima până la o nouă ERCP sau chirurgie','Sângerarea atinge 50%, perforația fiind regula (peste 30%)','Stentul este contraindicat când extracția eșuează','ERCP electiv nu se face în ambulator, coagulopatia neavând relevanță'],'AB',255,'ERCP — Sângerare 1–2%, perforație 0,3%',
 'Reținerea procentelor 1–2% (sângerare) și 0,3% (perforație) și a stentului de decomprimare când extracția eșuează.',
 ['Cele trei complicații și cifrele sunt explicite.','Corectarea coagulării și stentul paliativ sunt citate.','1–2% și 0,3%, nu 50%/30%.','Stentul este tocmai soluția când extracția eșuează.','ERCP electiv este de obicei ambulatoriu.']],
 8,'Ridică sângerarea de la 1–2% la 50% și perforația de la 0,3% la 30%.',['1-2%','0,3%']),

q(43,['Explorarea deschisă a CBP se caracterizează prin:',
 ['Indicații absolute: palparea unui calcul în cale sau vizualizarea lui preoperator ori pe colangiografia intraoperatorie','Indicații relative: icter, pancreatită acută biliară, dilatație de cale și microlitiază veziculară; atunci colangiografia intraoperatorie confirmă sau infirmă calculii','Tehnica include manevra Kocher, incizie longitudinală mică, irigare, catetere cu balon, coledocoscop, penses/coșulețe, apoi tub în T','Indicația absolută este dispepsia izolată, Kocher-ul fiind evitat','Tubul în T se omite, breșa lăsându-se deschisă în peritoneu'],'ABC',255,'Explorarea CBP — Absolute versus relative',
 'Contrastarea indicațiilor absolute (calcul văzut/palpat) cu cele relative (icter, pancreatită, dilatație, microlitiază) și a manevrei Kocher.',
 ['Absolutele sunt enumerate.','Relativele și rolul colangiografiei sunt citate.','Kocher, incizia, instrumentele și tubul în T sunt descrise.','Dispepsia nu este indicație absolută.','Tubul în T închide breșa, nu se lasă deschis.']],
 8,'Transformă dispepsia în indicație absolută și omite tubul în T, doi piloni ai explorării deschise.',['manevra Kocher','Indicaţiile absolute']),

q(44,['Patogenia calculilor micști de colesterol include:',
 ['Precipitarea cristalelor dacă bila e litogenică și suprasaturată; factorii de nucleație aglomerează cristalele cu bilirubină, mucus și calciu','Majoritatea micștilor nu conțin suficient calciu pentru a fi radioopaci; ocazional se formează un calcul „solitar” aproape în întregime din colesterol','Evacuarea incompletă a veziculei asigură condițiile de conglomerare, deci majoritatea calculilor se formează în colecist, nu în căi','Micștii sunt 20% și se formează primitiv în căile infectate','Toți micștii sunt radioopaci, nucleația neavând rol'],'ABC',243,'Patogenie — Micști, nucleație, solitar',
 'Legarea suprasaturării/nucleației de radiotransparență și de formarea în veziculă prin stază.',
 ['Litogenia, suprasaturarea și nucleația sunt explicite.','Radiotransparența și calculul solitar de colesterol sunt citate.','Staza veziculară ca loc principal de formare este enunțată.','20% și căile infectate definesc pigmentarii, nu micștii (circa 75%).','Majoritatea nu sunt radioopaci; nucleația este centrală.']],
 8,'Atribuie micștilor cifrele și sediul pigmentarilor (20%, căi infectate) și îi face pe toți radioopaci.',['colesterol „solitar"','factorilor de nucleaţie']),

q(45,['La pacientul icteric, semnele de obstacol extrahepatic includ:',
 ['Scaune decolorate și urină hipercromă, ca ceaiul','Prurit prin concentrații tisulare crescute de acizi biliari conjugați reabsorbiți din intestin','Urină incoloră și scaune hipercrome, pruritul lipsind în obstacol','Pruritul e cauzat de bilirubină neconjugată, scaunele rămânând normale','Urina hipercromă exclude obstacolul, indicând doar hemoliză'],'AB',244,'Icter obstructiv — Scaune, urină, prurit',
 'Recunoașterea triadului scaune decolorate / urină ca ceaiul / prurit prin acizi biliari conjugați.',
 ['Scaunele decolorate și urina ca ceaiul sunt explicite.','Mecanismul pruritului (acizi biliari conjugați) este citat.','Direcția culorilor este inversată.','Pruritul ține de acizi biliari conjugați, nu de neconjugată.','Urina hipercromă susține obstacolul, nu hemoliza (neconjugată).']],
 8,'Inversează culorile scaun/urină și atribuie pruritul bilirubinei neconjugate.',['scaunelor decolorate','urine hipercrome']),

q(46,['Embriologia arborelui biliar, potrivit capitolului:',
 ['Arborele biliar își are originea într-un diverticul al proenteronului; din cei trei muguri iau naștere ficatul, pancreasul ventral și vezicula biliară','Vezicula se localizează în hipocondrul drept, sub diviziunea anatomică a lobilor drept și stâng','Originea este din diverticulul hindgut, mugurii dând doar splina și rinichiul','Pancreasul ventral nu derivă din acești muguri, vezicula formându-se în hipocondrul stâng','Proenteronul nu participă, calea biliară fiind un derivat neural'],'AB',242,'Embriologie — Trei muguri',
 'Recunoașterea originii din diverticulul proenteronului și a celor trei muguri (ficat, pancreas ventral, veziculă).',
 ['Diverticulul proenteronului și cei trei muguri sunt explicite.','Localizarea în HD sub scizura interlobară este citată.','Nu este hindgut; splina și rinichiul nu sunt mugurii listați.','Pancreasul ventral este unul dintre muguri; vezicula e în HD.','Originea este endodermică din proenteron, nu neurală.']],
 8,'Mută originea pe hindgut și înlocuiește cei trei muguri (ficat/pancreas ventral/veziculă) cu splină și rinichi.',['proenteronului','trei muguri']),
];
