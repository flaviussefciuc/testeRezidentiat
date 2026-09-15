import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('perioperator',1,0,`perioperator-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const PERIOPERATOR_C=[
q(21,['Identificați afirmația corectă referitoare la Tabelul 1-1 (contraindicații ale chirurgiei elective hepatice):',
 ['Hepatita virală acută, hepatita alcoolică, insuficiența hepatică acută, IRA, cardiomiopatia, hipoxemia și coagulopatia severă refractară figurează ca contraindicații','Steatoza hepatică ușoară la un pacient Child A contraindică intervenția electivă','Hipertensiunea arterială controlată, fără afectare de organ-țintă, este o contraindicație tabelată','NASH, cauză frecventă de boală hepatică cronică, contraindică prin ea însăși chirurgia electivă','Coagulopatia corectată prin tratament rămâne o contraindicație, identică celei refractare'],'A',3,'Pacientul cu disfuncție hepatică — Tabelul 1-1',
 'Recunoașterea listei tabelate de contraindicații acute/refractare, distinctă de Child A sau de NASH compensată.',
 ['Textul enumeră aceste entități în Tabelul 1-1.','Child A tolerează, în general, chirurgia electivă; steatoza ușoară nu figurează în tabel.','HTA controlată nu este o rubrică a Tabelului 1-1.','NASH este etiologia cea mai frecventă, nu o contraindicație automată.','Doar coagulopatia severă în ciuda tratamentului este tabelată, nu cea corectată.']],
 8,'Extinde contraindicațiile acute asupra Child A/NASH și asupra coagulopatiei deja corectate.',['Insuficienţa hepatică acută','Coagulopatia severă']),

q(22,['Clasificarea Child-Pugh din Tabelul 1-2 se caracterizează prin:',
 ['Clasa A: albumină >3,5 g/dL, bilirubină <2,0 mg/dL, ascită absentă, mortalitate <10%','Clasa B: albumină 3,0–3,5 g/dL, bilirubină 2,0–3,0 mg/dL, mortalitate 40%','Clasa C: albumină <3,0 g/dL, bilirubină >3,0 mg/dL, mortalitate >80%','Scorul MELD variază între 6 și 40, valoarea 6 reflectând o formă ușoară, iar 40 boală severă','Clasa A asociază mortalitate >80%, identică clasei C, albumina fiind >4,5 g/dL'],'ABCD',4,'Disfuncție hepatică — Tabelul 1-2 Child-Pugh și intervalul MELD',
 'Aplicarea pragurilor de albumină/bilirubină și a mortalităților tabelate (<10%, 40%, >80%), plus intervalul MELD 6–40.',
 ['Rândul A al tabelului fixează albumina >3,5, bilirubina <2,0 și mortalitatea <10%.','Rândul B fixează 3,0–3,5 / 2,0–3,0 și mortalitatea 40%.','Rândul C fixează <3,0 / >3,0 și mortalitatea >80%.','Intervalul MELD 6–40 este enunțat pe pagina anterioară.','Mortalitatea >80% aparține clasei C, nu A.']],
 8,'Permutează mortalitățile <10% / 40% / >80% între clasele A–C și inversează albumina clasei A.',['>3,5','Precar >80'],[3]),

q(23,['Managementul perioperator al insulinei și al glucozei include:',
 ['Insulina cu durată intermediară sau lungă: 2/3 din doza de seară în noaptea dinainte și 1/2 din doza de dimineață în dimineața intervenției','Infuzie continuă de glucoză 5% pentru un aport de 10 g glucoză/oră','Monitorizarea glicemiei cel puțin la fiecare 6 ore intra- și postoperator','Infuzia i.v. de insulină 1–3 U/oră este preferată la pacientul instabil glicemic','Insulina rapidă se administrează neschimbat în dimineața intervenției, pacientul fiind deja în post'],'ABCD',5,'Pacientul diabetic — Scheme de insulină și glucoză 10 g/oră',
 'Diferențierea reducerii 2/3–1/2 a insulinelor lente de oprirea rapidelor și de infuzia de 10 g glucoză/oră cu glucometrie la 6 ore.',
 ['Schema 2/3 seara și 1/2 dimineața este explicită pentru durată intermediară/lungă.','Aportul de 10 g glucoză/oră pe glucoză 5% este citat.','Intervalul de cel puțin 6 ore este cerut.','Infuzia 1–3 U/oră este metoda preferată la instabil.','Insulina rapidă/scurtă se oprește când pacientul nu se mai alimentează, de obicei la miezul nopții.']],
 8,'Continuă insulina rapidă în dimineața operației și uită schema 2/3–1/2, două reguli din aceeași listă numerotată.',['2/3 din doza','I O g glucoză']),

q(24,['Sindromul Wernicke-Korsakoff perioperator constă în:',
 ['Ataxie, oftalmoplegie și confuzie, putând apărea dacă tiamina nu este administrată înaintea glucozei','Paralizie flască izolată, fără tulburare de conștiență, prin deficit de vitamina K','Necroză cutanată la inițierea warfarinei, ca în deficitul de proteină C','Delirium tremens maximal în ziua 1, fără tremor sau tahicardie','Hipoglicemie prin exces de insulină, independent de tiamină'],'A',4,'Disfuncție hepatică — Tiamină și Wernicke-Korsakoff',
 'Recunoașterea triadei ataxie–oftalmoplegie–confuzie și a ordinii tiamină înaintea glucozei.',
 ['Textul definește sindromul prin ataxie, oftalmoplegie și confuzie dacă tiamina nu precede glucoza.','Paralizia flască și vitamina K țin de alte deficite, nu de acest sindrom.','Necroza cutanată Coumadin aparține hipercoagulabilității, nu capitolului de tiamină.','Delirium tremens are alt tablou (halucinații, tremor, agitație, tahicardie) și alt timing.','Hipoglicemia prin insulină este o entitate distinctă; mecanismul citat este omiterea tiaminei înaintea glucozei.']],
 8,'Înlocuiește triada Wernicke cu DT, cu necroza Coumadin sau cu hipoglicemia insulinică, toate din vecinătatea perioperatorie.',['Wernicke-Kor','înaintea glucozei']),

q(25,['Controlul preoperator al ascitei la pacientul hepatic se caracterizează prin:',
 ['Restricție sodată până la maxim 2 g/zi, alături de combinația spironolactonă și furosemid','Controlul poate include șunt porto-sistemic transjugular intrahepatic (TIPS)','Restricția sodată se relaxează la 6–8 g/zi, diureticele fiind evitate de teama encefalopatiei','TIPS este contraindicat, ascită trebuind lăsată să se reacumuleze nerestricționat','Spironolactona este evitată, furosemidul izolat fiind schema unică'],'AB',4,'Ascita perioperatorie — 2 g sodiu, spironolactonă-furosemid, TIPS',
 'Aplicarea restricției de 2 g/zi și a diureticelor antialdosteronice plus TIPS, versus liberalizarea sodiului.',
 ['Pragul de maxim 2 g/zi și combinația spironolactonă-furosemid sunt explicite.','TIPS este menționat ca alternativă de control preoperator.','Textul cere maxim 2 g/zi, nu 6–8 g.','Ascita reacumulată crește dehiscența și eventrațiile; controlul preoperator este recomandat.','Schema citată este combinația, nu furosemidul izolat.']],
 8,'Ridică sodiul la 6–8 g și anulează TIPS/spironolactona, trei măsuri din același paragraf de ascită.',['2g/zi','spironolactonă şi furosemid']),

q(26,['Modificările fiziologice și traumatice din sarcină includ:',
 ['Compresia venoasă pelvină poate produce sau exacerba boala hemoroidală la 1/3 din gravide','Una din 14 sarcini se complică cu traumă','CID este o complicație de rău augur, apărând în decurs de ore de la dezlipirea de placentă sau de la embolia cu lichid amniotic','Leucocitoza de sarcină crește specificitatea leucocitelor ca marker de peritonită','Semnele clasice de șoc hemoragic exclud suferința fetală, perfuzia uterină fiind protejată prioritar'],'ABC',6,'Pacienta însărcinată — Hemoroizi 1/3, traumă 1/14, CID',
 'Integrarea prevalenței hemoroidale, a ratei de traumă 1/14 și a CID precoce după abruptie/embolie amniotică.',
 ['Cifra de 1/3 pentru boala hemoroidală este explicită.','Una din 14 sarcini se complică cu traumă.','Fereastra de ore până la CID după abruptie sau embolie amniotică este citată.','Leucocitoza de sarcină reduce, nu crește, utilitatea analizei.','Homeostazia maternă se menține cu prețul scăderii perfuziei uterine; semnele de șoc semnifică suferință fetală în evoluție.']],
 8,'Inversează mascarea hipovolemiei/suferinței fetale și tratează leucocitoza fiziologică ca marker specific.',['I /3 din gravide','Una din 14 sarcini']),

q(27,['În locul consimțământului când pacientul nu poate decide, capitolul descrie:',
 ['„Înlocuitorul în luarea deciziilor” (surrogate decision maker) este, de obicei, membrul familiei cu cel mai apropiat grad de rudenie','Directiva în avans este un document legal care informează asupra nivelului de îngrijire dorit dacă pacientul nu își mai poate exprima dorințele','Consimțământul se obține doar prin semnătura din sala de operație, înlocuitorul fiind superfluu','Directiva în avans înlocuiește foaia de observație și anulează discuția cu familia','Formularul de consimțământ este identic cu procesul de consimțământ informat, fără valoare legală'],'AB',7,'Managementul operator — Înlocuitorul decizional și directiva în avans',
 'Diferențierea înlocuitorului familial și a directivei în avans de formularul legal și de semnătura de ultim moment.',
 ['Definiția surrogate decision maker și rudenie cea mai apropiată sunt explicite.','Rolul directivei în avans ca document despre nivelul de îngrijire este enunțat.','Textul descrie sesiuni multiple și căutarea unui înlocuitor, nu o semnătură unică în sală.','Directiva informează perspectiva pacientului; nu anulează foaia de observație.','Formularul este documentul legal care consemnează rezultatul discuțiilor, distinct de proces.']],
 8,'Reduce consimțământul la semnătura din sală și confundă formularul cu procesul, două distincții din același capitol.',['înlocuitor în luarea','directiva în avans'],[6]),

q(28,['Îngrijirea plăgilor per secundam și soluțiile de meșă:',
 ['Vindecarea per secundam lasă marginile neapoziționate; o meșă îmbibată cu ser fiziologic umple cavitatea, fără împachetare strânsă care ar produce ischemie','Soluția de acid acetic 0,25%, soluția Dakin (hipoclorit de sodiu) și iod-povidona inhibă fibroblaștii în culturi, fără avantaj față de serul fiziologic steril','Cateterele „pigtail” sunt un exemplu de drenaj pasiv, montate de obicei de radiologul intervenționist','Meșa trebuie împachetată strâns până la ischemie, pentru a steriliza cavitatea','Soluțiile de acid acetic și Dakin vindecă mai rapid decât serul, înlocuind drenajul'],'ABC',9,'Îngrijirea plăgilor — Per secundam, Dakin și cateter pigtail',
 'Contrastarea meșei laxe cu ser de soluțiile antiseptice fără avantaj (acetic 0,25%, Dakin) și a pigtail-ului pasiv ghidat imagistic.',
 ['Neapoziționarea, meșa cu ser și interdicția împachetării strânse sunt explicite.','Cele trei soluții, inhibiția fibroblastului și absența avantajului față de ser sunt citate.','Pigtail-ul ca drenaj pasiv plasat de radiologul intervenționist este enunțat.','Împachetarea strânsă este descurajată tocmai pentru ischemia tisulară.','Niciuna dintre soluții nu oferă avantaj comparativ cu serul fiziologic steril.']],
 8,'Inversează regula meșei laxe și atribuie acidului acetic/Dakin un avantaj inexistent față de ser.',['acid acetic 0,25%','soluţia Dakin']),

q(29,['Evaluarea febrei postoperatorii, potrivit ghidului SCCM, se caracterizează prin:',
 ['La temperatură ≥38,3°C se inițiază investigații privind cauza','Primul pas analizează circumstanțele (locație, durată internare, ventilație, instrumentare, medicație, tipul operației)','Al doilea pas este examenul fizic țintit; testele de laborator și culturile urmează abia după acești doi pași','Culturi și imagistică neselectivă se cer imediat, înaintea anamnezei, la orice febră de 37,2°C','Febra postoperatorie este considerată stare normală, deci nu se investighează'],'ABC',10,'Febra postoperatorie — Pragul 38,3°C și secvența de evaluare',
 'Aplicarea pragului SCCM de 38,3°C și a ordinii circumstanțe → examen țintit → teste, versus panoul neselectiv.',
 ['Pragul ≥38,3°C este citat ca moment de inițiere a investigațiilor.','Analiza circumstanțelor este descrisă ca primul pas.','Examenul țintit precede testele; culturile fără suspiciune sunt rezervate unor situații speciale.','Pragul nu este 37,2°C, iar testele neselective sunt descurajate la majoritatea chirurgicalilor.','Textul precizează că mulți o consideră, în mod greșit, o stare normală.']],
 8,'Coboară pragul la 37,2°C și inversează ordinea (culturi înaintea examenului), contrar ghidului SCCM.',['38,3°C','Criticai Care Medicine'],[11]),

q(30,['Inițiativele de siguranță perioperatorie descrise în capitol includ:',
 ['Raportul IOM „To Err is Human” (2000) estimează 44.000–98.000 de decese anuale prin erori medicale în spitalele americane','NSQIP oferă chirurgului estimarea rezultatului ajustată în funcție de risc','Campania „100.000 Lives” a promovat 6 strategii (echipă de răspuns rapid, SCA bazat pe dovezi, prevenția ADE, CVC, IPC, PAV) și a salvat circa 122.000 de vieți','Mortalitatea prin eroare medicală este neglijabilă, IOM estimând sub 1.000 de decese/an','NSQIP înlocuiește profilaxia antibiotică perioperatorie, cele 6 strategii fiind abandonate'],'ABC',11,'Siguranța pacientului — IOM, NSQIP și campania 100.000 Lives',
 'Fixarea intervalului 44.000–98.000, a rolului NSQIP și a celor 6 pachete care au salvat circa 122.000 de vieți.',
 ['Cifrele 44.000–98.000 și titlul raportului sunt explicite.','NSQIP ca estimare ajustată de risc este enunțat.','Cele 6 strategii și cifra de circa 122.000 de vieți sunt listate pe pagina următoare.','Intervalul IOM este cu două ordine de mărime peste 1.000.','NSQIP completează, nu înlocuiește, pachetele de prevenție (inclusiv antibioticele perioperatorii).']],
 8,'Minimizează mortalitatea IOM la 1.000 și anulează pachetele 100.000 Lives, două cifre ușor de permutat.',['44.000-98.000','122.000 de vieţi'],[12]),
];
