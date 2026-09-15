import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p-149;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('electroliti',9,pdfOffset,`electroliti-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const ELECTROLITI_D=[
q(71,['Conform Fig. 9.3, distribuția apei între spațiile vascular și interstițial se caracterizează prin:',
 ['Presiunea hidrostatică tinde să forțeze ieșirea lichidului din capilare, iar presiunea oncotică acționează pentru a menține lichidele în vase','Fluxul net de lichide înspre exterior este echilibrat de aspirația lichidelor în vasele limfatice, care le returnează fluxului sanguin','Volumele spațiilor peritoneal și pleural sunt guvernate de principii similare','Presiunea oncotică forțează ieșirea din capilar, limfaticele fiind irelevante','Spațiile peritoneal și pleural scapă principiilor Starling, fiind compartimente închise'],'ABC',172,'Fig. 9.3 — Starling vascular versus interstițial',
 'Reținerea polarității hidrostatică versus oncotică și a rolului limfatic, plus aplicarea la seroase.',
 ['Cele două forțe opuse sunt din legendă.','Aspirația limfatică echilibrează fluxul net.','Peritoneul și pleura urmează aceleași principii.','Direcțiile hidrostatică/oncotică sunt inverse.','Textul extinde explicit principiile la seroase.']],
 8,'Distractorii inversează direcția forțelor Starling și scot seroasele din același model.',['presiunea oncotică','vaselor limfatice']),

q(72,['Un litru de soluție coloidală, potrivit Fig. 9.4 și paragrafului de substituție, se caracterizează prin:',
 ['Rămâne în compartimentul vascular datorită presiunii oncotice ridicate; era utilizat pentru hipovolemie, deși acum se utilizează în general soluțiile saline de 0,9%','Se distribuie egal între toate compartimentele, identic glucozei 5%','Rămâne în tot extracelularul, identic serului fiziologic, fără avantaj oncotic','Este tratamentul actual de elecție al depleției de apă extracelulară, sarea fiind abandonată','Nu influențează volumul vascular, fiind osmotic inactiv ca ureea'],'A',172,'Distribuția lichidelor de substituție — Coloizi versus salină',
 'Contrastarea soartei coloidului (vascular, oncotic) de practica actuală care preferă salina 0,9%.',
 ['Retenția vasculară prin oncotică și trecerea la salină 0,9% sunt explicite.','Distribuția egală este a apei/glucozei 5%.','Serul fiziologic rămâne extracelular, nu doar vascular.','Depleția extracelulară se tratează cu ser fiziologic.','Ureea este osmotic inactivă; coloidul are oncotică ridicată.']],
 8,'Distractorii atribuie coloidului soarta glucozei 5% sau a serului, ignorând trecerea la NaCl 0,9%.',['soluţie coloidală','0,9%']),

q(73,['Episoadele recurente de stres termic la bărbați agricultori tineri și de vârstă medie, de-a lungul coastei Pacificului și din America Centrală, sunt menționate în capitol în contextul:',
 ['Reglării volumului lichidian și al subumplerii arteriale, alături de sarcină și de vasodilatatoarele arteriale','Hipercalcemiei familiale, fără legătură cu volemia','Diabetului insipid nefrogen prin mutație de aquaporină 2','Sindromului Liddle, ca activare constitutivă a ENaC','Intoxicației digitalice induse de hipokaliemie'],'A',174,'Fig. 9.5 — Stres termic și subumplere arterială',
 'Plasarea nefropatiei de stres termic a agricultorilor în lanțul de subumplere arterială al Fig. 9.5.',
 ['Terenul (agricultori, Pacific/America Centrală) este alăturat sarcinii și vasodilatatoarelor.','Nu este un paragraf de hipercalcemie.','Aquaporina 2 ține de diabetul insipid nefrogen, altă pagină.','Liddle este mutația ENaC de la p. 188.','Digitala ține de hipokaliemie, nu de stresul termic.']],
 8,'Distractorii mută un fapt de subumplere arterială pe mutații (AQP2, ENaC) sau pe digitală.',['stres termic','agricultori tineri']),

q(74,['În Fig. 9.5, stările care inițiază retenția renală de sodiu și apă prin subumplere arterială includ:',
 ['Scăderea debitului cardiac: insuficiență, tamponadă, pericardită constrictivă','Vasodilatație periferică arterială: fistulă arteriovenoasă, ciroză, sepsis','Sarcină și vasodilatatoare arteriale','Hiperaldosteronismul primar (Conn), cu expansiune fără subumplere','Creșterea rezistenței arteriale periferice ca eveniment inițial, nu ca consecință'],'ABC',174,'Fig. 9.5 — Cauze de subumplere arterială',
 'Recunoașterea celor două brațe (debit scăzut versus vasodilatație) plus sarcina/vasodilatatoarele.',
 ['Triada de debit scăzut este din ramura A.','Fistula, ciroza și sepsisul sunt vasodilatația.','Sarcina și vasodilatatoarele completează lista.','Conn produce expansiune prin aldosteron, nu subumplere.','Creșterea rezistenței este consecință, nu inițiator.']],
 8,'Distractorii pun Conn (mineralocorticoid) pe ramura de subumplere și inversează cauza cu efectul de rezistență.',['Fistula arteriovenoasă','Vasodilataţie periferică']),

q(75,['Receptorii de vasopresină și celulele ductului colector, dincolo de V2 apical deja consacrat, se caracterizează prin:',
 ['V1A din celule musculare netede: activarea induce vasoconstricție','V1B din pituitara anterioară și din creier: mediază eliberarea de ACTH','Celulele principale (aproximativ 65%) au canale de Na+ și K+ apicale și Na+/K+-ATP-ază bazolaterală','Celulele intercalate nu transportă NaCl, dar joacă rol în manipularea H+ și HCO3− și în reabsorbția K+ în depleție','V1B este receptorul renal al apei, celulele intercalate fiind 65% din duct'],'ABCD',176,'Receptori V1A/V1B/V2; Celule principale versus intercalate',
 'Contrastarea celor trei receptori G-proteină și a perechii principal 65% versus intercalat (acid-bază/K+).',
 ['V1A și vasoconstricția sunt din listă.','V1B–ACTH este al doilea item.','65% și pompele principale sunt explicite.','Intercalatele: fără NaCl, cu H+/HCO3− și K+ în depleție.','V2, nu V1B, este renal; 65% sunt principalele.']],
 8,'Patru atribute de receptor/celulă; distractorul permută V1B pe rinichi și 65% pe intercalate.',['aproximativ 65%','hormon adreno']),

q(76,['Transportul apei mediat de aquaporine în celula principală (Fig. 9.7) se caracterizează prin:',
 ['ADH acționează pe receptorii V2 bazolaterali, activând adenilciclaza, proteinkinaza și inserția veziculelor cu aquaporine în membrana luminală','Când efectul ADH s-a epuizat, canalele de apă sunt îndepărtate prin endocitoză și returnate citoplasmei','Un defect la atașarea ADH de receptor sau în funcționarea canalelor de apă determină rezistență la ADH și debit urinar crescut — diabet insipid nefrogen','Aquaporinele se inserează în membrana bazolaterală, V2 fiind apical','Diabetul insipid nefrogen este deficitul de sinteză hipofizară a ADH, nu o rezistență de receptor'],'ABC',176,'Fig. 9.7 — Aquaporina 2 și diabetul insipid nefrogen',
 'Reținerea cascadei V2–AMPc–AQP2 și a definiției de rezistență (nefrogen), nu de deficit de secreție.',
 ['Cascada V2 bazolateral → adenilciclază → inserție luminală este din paragraf.','Endocitoza la epuizarea ADH este explicită.','Defectul de receptor/canal = DIN.','Inserția este luminală, V2 bazolateral.','Deficitul de sinteză este forma pituitară, nu nefrogenă.']],
 8,'Distractorii inversează polaritatea V2/AQP2 și confundă forma nefrogenă cu cea pituitară.',['adenilciclazei','diabet insipid nefrogen']),

q(77,['Mecanismul edemelor din ciroza hepatică, potrivit capitolului, include:',
 ['Vasodilatație periferică datorată creșterii generării de oxid nitric, care reduce VACE (volumul arterial circulant efectiv) și umplerea arterială','Activarea lanțului comun altor stări cu vasodilatație marcată și insuficiență cardiacă (Fig. 9.5), cu retenție de apă și sodiu','Creșterea VACE prin vasoconstricție mediata de oxid nitric, fără retenție de sare','Edemul cirotic este pur oncotoc, NO fiind irelevant','VACE crescut blochează Fig. 9.5, deci nu există retenție renală'],'AB',177,'Ciroza hepatică — Oxid nitric și VACE',
 'Legarea vasodilatației prin NO de scăderea VACE și de lanțul de subumplere al Fig. 9.5.',
 ['NO, vasodilatația și reducerea VACE sunt fraza de deschidere.','Lanțul comun și retenția Na/apă sunt explicitate.','NO scade, nu crește, VACE.','Mecanismul este complex, nu pur oncotoc.','VACE redus, nu crescut, declanșează Fig. 9.5.']],
 8,'Distractorii inversează direcția VACE sub NO, capcana centrală a paragrafului de ciroză.',['oxid nitric','VACE']),

q(78,['Printre cauzele medicamentoase de retenție de sodiu, dincolo de TZD și amlodipină deja consacrate, se numără:',
 ['Estrogenii determină o ușoară retenție de sodiu, din cauza unui efect slab aldosteron-like, motiv al câștigului ponderal din faza premenstruală','AINS determină retenție de sodiu în prezența activării SRAA în insuficiența cardiacă, ciroză și stenoza arterei renale','Estrogenii sunt diuretice de ansă, AINS crescând natriureza în stenoza renală','AINS blochează ENaC identic amiloridului, fără risc în ciroză','Câștigul premenstrual se datorează pierderii renale de sare, estrogenii fiind kaliuretici'],'AB',178,'Retenția sodiului — Estrogeni; AINS',
 'Contrastarea efectului aldosteron-like al estrogenilor de retenția AINS pe teren de SRAA activat.',
 ['Efectul slab aldosteron-like și premenstrualul sunt explicite.','AINS + SRAA în ICC/ciroză/stenoză sunt din același paragraf.','Estrogenii rețin sodiu, nu sunt diuretice de ansă.','AINS rețin Na+, nu blochează ENaC.','Premenstrualul este retenție, nu pierdere.']],
 8,'Distractorii transformă estrogenii în diuretice și AINS în economisitoare de K+, inversând ambele mecanisme.',['Estrogenii','stenoza arterei renale']),

q(79,['Edemul prin creșterea permeabilității capilare la proteine, dincolo de edemul idiopatic, este menționat în:',
 ['Un sindrom rar de deficiență a complementului','Utilizarea terapeutică a interleukinei 2 în chimioterapia din cancer','Sindromul de hiperstimulare ovariană','Edemul precapilar al amlodipinei, prin relaxare arteriolară fără proteine','Spațiul al treilea pleural, prin creșterea PVC'],'ABC',178,'Alte cauze de edem — Complement; IL-2; Hiperstimulare ovariană',
 'Recunoașterea triadei de permeabilitate (complement, IL-2, OHSS), distinctă de amlodipină și de spațiul al treilea.',
 ['Deficiența de complement este primul exemplu.','IL-2 în chimioterapie este al doilea.','Hiperstimularea ovariană completează lista.','Amlodipina este precapilară, nu prin proteine.','Spațiul al treilea poate exista fără creșterea PVC.']],
 8,'Distractorii reciclează amlodipina (precapilară) și spațiul al treilea, două mecanisme vecine din aceeași pagină.',['interleukinei 2','hiperstimulare ovariană']),

q(80,['Edemul local și manevrele care cresc întoarcerea venoasă se caracterizează prin:',
 ['Exemple de confuzie clinică: edem de gleznă după tromboză/chirurgie venoasă sau limfatică, edem de braț prin tromboză subclavie, edem facial prin obstrucția venei cave superioare','Repausul strict la pat sau scufundarea în apă stimulează excreția de sare și apă prin efecte asupra debitului cardiac și eliberarea de ANP, dar au rareori valoare practică','Edemul facial prin VCS reflectă hiperaldosteronism primar, imersia fiind diureticul de elecție','Tromboza subclavie expandează VASE, ANP fiind suprimată','Manevrele de întoarcere venoasă înlocuiesc diureticele la toți edematoșii'],'AB',178,'Edem local; Manevre de întoarcere venoasă',
 'Separarea edemului regional (subclavie, VCS) de manevrele ANP (pat, imersie) cu valoare practică redusă.',
 ['Lista de edeme locale, inclusiv VCS, este explicită.','Patul/imersia, ANP și limita practică sunt din tratament.','VCS este mecanic, nu Conn; imersia are rar valoare.','Tromboza subclavie este locală, nu expansiune de VASE.','Textul le consideră rar practice, baza fiind diureticele.']],
 8,'Distractorii transformă obstrucția VCS în Conn și fac din imersie diureticul de elecție.',['vene cave superioare','eliberarea de ANP']),

q(81,['Efectele nedorite ale diureticelor de ansă, dincolo de ototoxicitate și de venodilatația pre-diuretică, includ:',
 ['Retenție de urați, care determină gută','Hipercalciurie cu risc crescut de calculi pe bază de calciu; hipomagneziemie','Mialgii, mai ales la doze mari de bumetanidă','Interferență cu excreția litiului, ducând la intoxicații','Hipercalcemie prin reducerea excreției de calciu, identic tiazidelor'],'ABCD',178,'Diureticele de ansă — Efecte nedorite',
 'Contrastarea hipercalciuriei/gută/litiu/mialgii ale ansei de reducerea calciului caracteristică tiazidelor.',
 ['Guta prin urați este primul item.','Hipercalciuria/calculii și hipomagneziemia sunt din listă.','Mialgiile bumetanidei sunt explicite.','Litiul completează toxicitatea.','Reducerea excreției de Ca2+ este a tiazidelor; ansa crește calciuria.']],
 8,'Distractorul atribuie ansei hipocalciuria tiazidică, inversând soarta calciului între cele două clase.',['retenţie de uraţi','excreţia litiului'],[179]),

q(82,['Diureticele tiazidice, comparativ cu ansa, se caracterizează prin:',
 ['Determină o retenție relativ mai mare de urați, intoleranță la glucoză și hipokaliemie','Interferă cu excreția apei și pot cauza hiponatremie, mai ales cu amilorid/triamteren; acest efect este util în diabetul insipid','Reduc excreția calciului, util în hipercalciuria idiopatică, dar pot determina hipercalcemie','Blochează NKCC2, cu hipercalciurie și calculi, identic ansei','Metolazonul își pierde orice efect când scade RFG, spre deosebire de furosemid'],'ABC',179,'Diureticele tiazidice — DI, calciu, urați',
 'Reținerea utilității în diabet insipid, a hipocalciuriei și a profilului metabolic mai pronunțat decât al ansei.',
 ['Urații, glucoza și hipokaliemia relative sunt din paragraf.','Hiponatremia și uzul în DI sunt explicite.','Reducerea calciuriei și riscul de hipercalcemie completează.','NKCC2 și hipercalciuria sunt ale ansei.','Metolazonul își păstrează efectul independent de RFG.']],
 8,'Distractorii permută NKCC2/hipercalciuria de pe ansă pe tiazide și inversează independența de RFG a metolazonului.',['diabetul insipid','excreţia calciului']),

q(83,['Conform Cadranului 9.7, cauzele de hipotensiune posturală, dincolo de hipovolemie, includ:',
 ['Insuficiență autonomă: diabet zaharat, amiloidoză sistemică, sindromul Shy-Drager, boala Parkinson, îmbătrânirea','Interferența medicației cu funcția autonomă (antidepresive triciclice) sau cu vasoconstricția periferică (nitrați, blocanți de calciu, α-blocante)','Repaus la pat prelungit (afectare cardiovasculară)','Hipotensiunea posturală exclude hipovolemia, fiind patognomonică pentru Shy-Drager','Nitrații cresc întoarcerea venoasă, deci previn căderea tensională la ridicare'],'ABC',181,'Cadranul 9.7 — Hipotensiune posturală',
 'Reținerea diagnosticului diferențial (autonom, medicamente, decubit) față de hipovolemie ca primă cauză.',
 ['Lista autonomă, inclusiv Shy-Drager, este din cadran.','Triciclicele și vasodilatatoarele completează.','Decubitul prelungit este ultimul item.','Hipovolemia este prima cauză din cadran, nu o excludere.','Nitrații interferează cu vasoconstricția, deci favorizează, nu previn, căderea.']],
 8,'Distractorii scot hipovolemia din cadran și transformă nitrații în protectori posturali.',['Shy-Drager','Antidepresive triciclice']),

q(84,['Conform notei 5 din Cadranul 9.10, soluția Hartmann sau Plasma-Lyte, față de salina 0,9%, poate fi mai bună la:',
 ['Pacienții cu sepsis și hipovolemie relativă','Pacienții eunatriemici aflați doar în menținere hidrică, identic glucozei 5%','Înlocuirea apei pure, fără sodiu, ca în diabetul insipid','Depleția cronică de sare cu acidoză, ca bicarbonatul 1,26%','Hiperkaliemia severă, prin conținutul de 40 mmol/L K+'],'A',182,'Cadranul 9.10 — Indicația 5, sepsis',
 'Identificarea sepsisului cu hipovolemie relativă ca indicația comparativă Hartmann/Plasma-Lyte versus NaCl 0,9%.',
 ['Nota 5 numește explicit sepsisul cu hipovolemie relativă.','Menținerea eunatriemică este indicația 2 (NaCl 0,18% + glucoză 4%).','Înlocuirea apei este indicația 3 (glucoză 5%).','Acidoza cu pierdere de sare este indicația 4 (bicarbonat 1,26%).','40 mmol/L K+ este al glucozei 5% + KCl 0,3%, nu al Hartmann.']],
 8,'Distractorii reciclează indicațiile 2–4 ale aceluiași cadran asupra notei 5 de sepsis.',['sepsis şi hipovolemie relativă','Soluţie Hartmann']),

q(85,['Conform Cadranului 9.13, cauzele de hiponatremie euvolemică includ:',
 ['Creșterea sensibilității la ADH: clorpropamid, tolbutamid','Substanțe ADH-like: oxitocină, desmopresină','Substanțe osmotic active nemăsurate: glucoză, mannitol; plus sindromul de celulă bolnavă','Hipotiroidism, depleție severă de potasiu, deficit de ACTH/glucocorticoizi (Addison)','Pierderi extrarenale cu Na+ urinar <20 mmol/L (vărsături, diaree), care definesc hipovolemia'],'ABCD',184,'Cadranul 9.13 — Hiponatremia euvolemică',
 'Reținerea clusterelor clorpropamid/oxitocină/mannitol/Addison, distinct de hiponatremia hipovolemică.',
 ['Clorpropamid/tolbutamid sunt din rândul sensibilității.','Oxitocina și desmopresina sunt ADH-like.','Glucoza, mannitolul și celula bolnavă completează.','Hipotiroidismul, K+ și Addison sunt în eliberarea anormală de ADH.','Na+ urinar <20 mmol/L este al Cadranului 9.11 (hipovolemie).']],
 8,'Distractorul mută cauzele hipovolemice (Cadranul 9.11) pe lista euvolemică 9.13.',['Clorpropamid','Oxitocină']),

q(86,['Simptomele hiponatremiei de diluție, în pragurile numerice ale capitolului, se caracterizează prin:',
 ['Simptome inechivoce neurologice apar rareori până nivelul seric al sodiului scade sub 125 mmol/L','Sunt asociate mai frecvent cu valori în jur de 115 mmol/L sau mai joase, mai ales în cazurile cronice','La vârstnici, chiar forme medii de 130-135 mmol/L s-au asociat cu risc de cădere și modificări subtile cognitive','Simptomele inechivoce apar deja la 132 mmol/L la tineri, 115 mmol/L fiind fiziologic','Valorile 130-135 mmol/L la vârstnici sunt ignorabile, fără risc de cădere'],'ABC',184,'Hiponatremia de diluție — Praguri simptomatice',
 'Memorarea ierarhiei 125 / 115 mmol/L și a semnalului 130-135 mmol/L la vârstnic.',
 ['Pragul 125 mmol/L pentru simptome inechivoce este explicit.','115 mmol/L (sau mai jos) este frecvența mai mare, mai ales cronic.','130-135 mmol/L la vârstnici cu căderi/cognition este avertismentul.','132 nu este pragul inechivoc; 115 nu este fiziologic.','Textul leagă 130-135 mmol/L de căderi la vârstnici.']],
 8,'Distractorii coboară pragul inechivoc de la 125 la 132 și anulează riscul 130-135 mmol/L al vârstnicului.',['125 mmol/L','130-135 mmol/L']),

q(87,['Conform Cadranului 9.14 și paragrafului SDO, elementele-cheie ale tratamentului hiponatremiei includ:',
 ['Euvolemie (SIADH): restricție lichidiană la 500-700 ml/zi; hipervolemie (BCR/IC): restricție lichidiană și salină, se consideră un diuretic de ansă','Corecția nu trebuie să depășească 8 mmol în primele 24 de ore și 18 mmol în 48 de ore; sodiul se verifică chiar la 1-2 ore','Diagnosticul SDO se bazează pe leziuni hipodense T1 și hiperdense T2 pe IRM, care au nevoie de 2 sau 3 săptămâni pentru apariție','Hipovolemia se rehidratează cu salină 0,9%','SIADH se corectează cu salină 3% de rutină, fără restricție, IRM-ul SDO apărând în 2 ore'],'ABCD',185,'Cadranul 9.14; SDO — IRM',
 'Integrarea restricției 500-700 ml, a plafoanelor 8/18 mmol și a ferestrei IRM de 2-3 săptămâni.',
 ['Cele două ramuri volemice sunt din cadran.','8 mmol/24 h, 18 mmol/48 h și 1-2 ore sunt explicite.','Semnalul T1/T2 și 2-3 săptămâni sunt din paragraf.','Rehidratarea hipovolemicului cu 0,9% este primul punct.','SIADH cere restricție, nu 3% de rutină; IRM-ul SDO întârzie săptămâni.']],
 8,'Distractorul inversează restricția din SIADH și comprimă fereastra IRM de 2-3 săptămâni la 2 ore.',['500-700 ml/zi','18 mmol în 48']),

q(88,['Conform Cadranului 9.16, cauzele de hipernatremie includ:',
 ['Lipsă de sensibilitate la ADH (diabet insipid nefrogen): litiu, tetracicline, amfotericină B, necroză tubulară acută','Iatrogen: soluții de sodiu hipertone, medicamente cu sodiu ridicat (ex. piperacilină), soluție de bicarbonat 8,4% după oprirea cardiacă','Deficit de aport hidric (sete sau conștiență afectate) și pierderi excesive prin tegumente sau plămâni','Hipernatremia cere setea intactă și acces nelimitat la apă pentru a se instala','Litiul cauzează SIADH cu hiponatremie, bicarbonatul 8,4% fiind tratamentul de elecție'],'ABC',186,'Cadranul 9.16 — Cauze de hipernatremie',
 'Reținerea clusterului litiu/tetraciclină/amfotericină, a piperacilinei/8,4% post-stop și a condiției de sete deficientă.',
 ['Cauzele de DIN medicamentos sunt din cadran.','Piperacilina și 8,4% post-stop sunt iatrogene.','Setea/conștiența și pierderile insensibile completează.','Textul spune că niciun factor nu dă hipernatremie dacă setea e normală și accesul la apă e liber.','Litiul figurează la DIN (hipernatremie), nu la SIADH.']],
 8,'Distractorii inversează condiția de sete și mută litiul pe SIADH, exact opusul Cadranului 9.16.',['Amfotericina','8,4%']),

q(89,['Homeostazia potasiului, dincolo de Na+/K+-ATP-ază, se caracterizează prin:',
 ['Klotho, o proteină împotriva îmbătrânirii din tubii distali, crește excreția de potasiu, iar CD63 o inhibă','În mod normal, numai circa 10% din aportul zilnic de K+ este excretat în tubul digestiv; voma conține circa 5-10 mmol/L, lichidele diareice 10-30 mmol/L','Adenoamele viloase colorectale pot determina rareori diaree profuză și pierderi marcate de K+','Klotho scade excreția de K+, CD63 fiind kaliureticul principal','Voma conține 90 mmol/L de K+, identic aportului OMS, colonul nesecretând potasiu'],'ABC',187,'Klotho; Pierderi digestive de K+',
 'Contrastarea perechii Klotho/CD63 de pierderile GI (5-10 versus 10-30 mmol/L) și de adenomul vilos.',
 ['Klotho crește, CD63 inhibă excreția — din paragraf.','10% digestiv, 5-10 mmol/L în vomă și 10-30 în diaree sunt explicite.','Adenomul vilos completează cauzele rare.','Direcțiile Klotho/CD63 sunt inverse.','90 mmol/zi este aportul OMS, nu concentrația vomei.']],
 8,'Distractorii inversează Klotho versus CD63 și atribuie vomei cifra de 90 mmol a aportului zilnic.',['Klotho','10-30 mmol/L']),

q(90,['Sindroamele Bartter, Gitelman și Liddle se deosebesc astfel:',
 ['Bartter tip IV (pierderea funcției proteinei barttin) se asociază cu surditate senzorio-neurală și insuficiență renală; tratamentul poate include indometacin','Gitelman (pierdere de funcție NCCT) are hipocalciurie, spre deosebire de hipercalciuria frecventă din Bartter; de obicei nu este necesară resuscitarea volemică','Liddle: mutație cu activare constitutivă a ENaC, HTA cu renină/aldosteron scăzute; spironolactona este ineficientă, amiloridul și triamterenul închizând direct canalul','Gitelman are surditate congenitală, Liddle răspunzând la spironolactonă ca un hiperaldosteronism','Bartter tip IV este identic Liddle, cu HTA și ENaC activat, fără defect de barttin'],'ABC',188,'Bartter tip IV; Gitelman; Liddle',
 'Contrastarea barttin/surditate, a hipocalciuriei Gitelman și a ineficienței spironolactonei în Liddle.',
 ['Tipul IV, surditatea și indometacinul sunt din paragraf.','Hipocalciuria versus hipercalciuria și absența resuscitării sunt explicite.','ENaC, HTA low-renin și eșecul spironolactonei definesc Liddle.','Surditatea este a Bartter IV; Liddle nu răspunde la spironolactonă.','Bartter IV este un defect de clorură/barttin, nu de ENaC.']],
 8,'Distractorii mută surditatea pe Gitelman și fac Liddle sensibil la spironolactonă, exact opusul mecanismului ENaC.',['surditate senzorio-neurală','spironolactona, este ineficientă']),
];
