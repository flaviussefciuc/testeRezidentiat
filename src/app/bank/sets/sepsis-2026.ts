import {set2026} from '../set-author';

// Set 2026 · Sepsis și infecții bacteriene (Kumar & Clark, cap. 8). Aimed at p. 163 (β-lactamine), 161 (Cadranul 8.7,
// clasificarea β-lactaminelor) and 164 (glicopeptide, inhibitori de β-lactamază, aminoglicozide), then 154 (scorul qSOFA),
// 156 (Cadranul 8.3), 157 (Cadranul 8.5), 159 (decizia de la 72 de ore), 162 (Cadranul 8.8) and 167 (organisme multirezistente).
const Q='Definiția — qSOFA',R='Cadranul 8.3 — Stratificarea riscului',F='Tratamentul sepsisului — Resuscitarea volemică',D72='Antibioterapia după 72 de ore',C7='Cadranul 8.7 — Chemoprofilaxia antibiotică',BL='Antibiotice β-lactamice',C8='Cadranul 8.8 — Doze',PEN='Penicilinele',CEF='Cefalosporinele',CAR='Carbapenemele',GLI='Glicopeptidele',INH='Combinații β-lactamice/inhibitori de β-lactamază',AMG='Aminoglicozidele',MEC='Mecanisme de rezistență',MR='MRSA — Tratament';

export const SEPSIS_2026=set2026('sepsis',[
[['Pneumonie, Glasgow 14, FR 24/min, TA 108/70 mmHg. Scorul qSOFA:',
 ['are 2 puncte, deci este pozitiv','semnalează risc crescut, fără a pune diagnosticul','are 3 puncte, TA sistolică fiind sub 110 mmHg','este negativ, Glasgow 14 neaducând puncte','definește șocul septic, la lactat peste 2 mmol/L'],'AB',154,Q,
 'Aplicarea scorului qSOFA la un caz și interpretarea lui ca instrument de risc.',
 ['Glasgow <15 și FR ≥22/min aduc câte un punct; TA sistolică de 108 mmHg nu punctează, deci scorul este 2, pozitiv.','qSOFA indică doar risc ridicat și nevoia de evaluare, nu stabilește diagnosticul de sepsis.','Nu: criteriul tensional qSOFA este TA sistolică ≤100 mmHg; 108 mmHg nu aduce punct.','Nu: orice Glasgow sub 15 aduce un punct în qSOFA.','Nu: șocul septic cere, după resuscitare volemică, vasopresor pentru TA medie ≥65 mmHg și lactat >2 mmol/L.']],
 'Pragul tensional qSOFA este ≤100 mmHg, iar Glasgow 14 aduce deja un punct.',['qSOFA','Glasgow']],

[['Adult cu infecție suspectată. Conform Cadranului 8.3, îl încadrează singur la risc înalt:',
 ['pulsul de 135 de bătăi pe minut','pulsul de 115 bătăi pe minut','frecvența respiratorie de 23 pe minut','absența diurezei în ultimele 14 ore','tensiunea sistolică de 98 mmHg'],'A',156,R,
 'Cadranul 8.3: pragurile care încadrează singure adultul cu suspiciune de sepsis la risc înalt.',
 ['Alura ventriculară peste 130/min este criteriu de risc înalt.','Nu: alura de 91–130/min este criteriu de risc moderat spre crescut; riscul înalt cere peste 130/min.','Nu: 21–24 respirații/min înseamnă risc moderat spre crescut; riscul înalt începe la 25/min.','Nu: lipsa diurezei de 12–18 ore este risc moderat; riscul înalt cere 18 ore fără diureză.','Nu: riscul înalt cere TA sistolică ≤90 mmHg sau cu peste 40 mmHg sub valoarea normală.']],
 'Distractorii sunt valori de risc moderat, chiar sub pragurile riscului înalt.',['18 ore','25 respiraţii']],

[['Conform Cadranului 8.5, recomandările Surviving Sepsis includ:',
 ['ținta inițială de tensiune arterială medie de 65 mmHg','ghidarea resuscitării spre normalizarea lactatului','albumina, când sunt necesare volume mari de cristaloid','hidroxietil amidonul ca alternativă la cristaloide','scoaterea cateterului infectat după cura antibiotică'],'ABC',157,F,
 'Cadranul 8.5: recomandările Surviving Sepsis privind ținta tensională, lactatul și fluidele.',
 ['Ținta inițială de TA medie este de 65 mmHg.','La lactat crescut, resuscitarea se ghidează spre normalizarea lui.','Albumina poate fi adăugată când sunt necesare volume mari de cristaloid.','Nu: cristaloidele sunt fluidul de primă intenție, iar hidroxietil amidonul se evită.','Nu: dispozitivul de acces vascular infectat se scoate prompt, după montarea unui nou acces.']],
 'Distractorii inversează recomandarea privind amidonul și momentul scoaterii cateterului.',['hidroxietil','30 ml/kg']],

[['Antibioterapia i.v. se continuă după 72 de ore în:',
 ['meningita bacteriană, cu pacientul stabilizat','artrita septică, cu pacientul stabilizat','pielonefrita necomplicată, cu pacientul stabilizat','pneumonia necomplicată, cu pacientul stabilizat','simptome fără cauză infecțioasă la reevaluare'],'AB',159,D72,
 'Infecțiile în care tratamentul i.v. continuă la reevaluarea de la 72 de ore.',
 ['Meningita este exemplul dat pentru continuarea tratamentului intravenos.','Artrita septică este celălalt exemplu de continuare intravenoasă.','Nu: în pielonefrita necomplicată, la pacientul stabil, se trece la oral după 2–3 zile.','Nu: pneumonia necomplicată permite trecerea la oral după 2–3 zile, dacă pacientul se ameliorează.','Nu: dacă reevaluarea infirmă infecția, antibioticul se oprește.']],
 'Stabilizarea clinică nu permite trecerea la oral în meningită și artrita septică.',['pielonefrită','cinci decizii']],

[['Conform Cadranului 8.7, rifampicina 600 mg zilnic, 4 zile, se indică la:',
 ['contacții unui caz cu H. influenzae tip B','contacții unui caz de meningită meningococică','pacienții după splenectomie','contacții tuberculin-negativi ai unui caz de TB','pacienții cu reumatism articular acut'],'A',161,C7,
 'Cadranul 8.7: indicația schemei de rifampicină 600 mg zilnic, 4 zile.',
 ['Contacții unui caz cu H. influenzae tip B primesc rifampicină 600 mg zilnic, 4 zile.','Nu: la contacții de meningococ rifampicina se dă 600 mg de două ori pe zi, 2 zile.','Nu: după splenectomie se folosește fenoximetilpenicilină 500 mg de două ori pe zi.','Nu: profilaxia tuberculozei folosește izoniazidă 300 mg zilnic, 6 luni.','Nu: în reumatismul articular acut se dă fenoximetilpenicilină 250 mg de două ori pe zi.']],
 'Aceeași doză de rifampicină se dă la contacții de meningococ de două ori pe zi, 2 zile.',['rifampicină 600','250 mg doză dublă']],

[['Clasificarea antibioticelor β-lactamice cuprinde:',
 ['penicilinele, inclusiv temocilina','monobactamii, reprezentați de aztreonam','carbapenemele, inclusiv ertapenemul','glicopeptidele, ca vancomicina','avibactamul, inhibitor de β-lactamază'],'ABC',161,BL,
 'Clasificarea antibioticelor β-lactamice și separarea lor de alte clase active pe perete.',
 ['Temocilina este o penicilină cu spectru Gram-negativ.','Aztreonamul este un monobactam, cu un singur inel β-lactamic.','Ertapenemul face parte din carbapeneme, alături de imipenem și meropenem.','Nu: glicopeptidele inhibă tot sinteza peretelui, dar nu sunt β-lactamine.','Nu: avibactamul este primul inhibitor non-β-lactamic al β-lactamazelor.']],
 'Glicopeptidele și avibactamul țintesc peretele sau β-lactamazele, fără a fi β-lactamine.',['dependentă de timp','peptidaze']],

[['Conform Cadranului 8.8, meropenemul în meningită se administrează:',
 ['2 g de trei ori pe zi, intravenos','1 g de trei ori pe zi, intravenos','2 g o dată pe zi, intravenos','4 g de patru ori pe zi, intravenos','3 g oral, în doză unică'],'A',162,C8,
 'Cadranul 8.8: doza de meropenem în meningită, față de doza uzuală.',
 ['În meningită, meropenemul se dă 2 g de trei ori pe zi, intravenos.','Nu: 1 g de trei ori pe zi este doza uzuală; în meningită doza se dublează.','Nu: meropenemul se administrează de trei ori pe zi, nu o dată pe zi.','Nu: administrarea de patru ori pe zi este doza maximă de piperacilină/tazobactam.','Nu: 3 g oral în doză unică este schema fosfomicinei.']],
 'Distractorii sunt doza uzuală și schemele altor antibiotice din cadran.',['meropenem','20 mg/kg']],

[['Sunt active pe Pseudomonas aeruginosa:',
 ['piperacilina, asociată cu tazobactam','ceftazidima și cefepimul','aztreonamul, inclusiv în fibroza chistică','meropenemul, spre deosebire de ertapenem','temocilina, ca și pivmecilinamul'],'ABCD',163,BL,
 'Activitatea antipseudomonas comparată între clasele de β-lactamine.',
 ['Piperacilina, asociată cu tazobactam, este activă pe Pseudomonas, ca și ticarcilina.','Ceftazidima și cefepimul sunt cefalosporinele active pe P. aeruginosa.','Aztreonamul se folosește și în infecțiile cu P. aeruginosa, inclusiv pulmonare din fibroza chistică.','Meropenemul este activ; ertapenemul este carbapenemul fără activitate pe Pseudomonas.','Nu: nici temocilina, nici pivmecilinamul nu sunt active pe P. aeruginosa.']],
 'Temocilina și pivmecilinamul au spectru Gram-negativ, dar fără Pseudomonas.',['ceftazidima','Ertapenem']],

[['Rolul cilastatinului asociat imipenemului:',
 ['previne inactivarea enzimatică renală','inhibă β-lactamazele, ca acidul clavulanic','previne convulsiile induse de imipenem','permite administrarea o dată pe zi','reduce riscul de infecție cu C. difficile'],'A',163,CAR,
 'Motivul asocierii imipenemului cu cilastatin.',
 ['Imipenemul este parțial inactivat enzimatic în rinichi, de aceea se asociază cu cilastatin.','Nu: inhibitorii clasici de β-lactamază sunt acidul clavulanic, sulbactamul și tazobactamul.','Nu: convulsiile rămân un efect advers al imipenemului; în meningită se preferă meropenemul.','Nu: doza unică zilnică este proprie ertapenemului, nu imipenemului.','Nu: riscul mai mic de C. difficile este descris pentru temocilină.']],
 'Cilastatinul nu este inhibitor de β-lactamază, ci protejează imipenemul în rinichi.',['cilastatin','Ertapenem']],

[['Antibiotic de primă intenție și indicația sa:',
 ['benzilpenicilina – endocardita streptococică','flucloxacilina – infecția severă cu MSSA','imipenemul – meningita bacteriană','pivmecilinamul – infecția cu Pseudomonas','amoxicilina – stafilococul producător de penicilinază'],'AB',163,PEN,
 'Asocierea antibioticelor de primă intenție cu indicațiile lor.',
 ['Benzilpenicilina rămâne de primă intenție în endocardita streptococică.','Flucloxacilina este prima intenție în infecțiile severe cu MSSA.','Nu: imipenemul poate produce convulsii; în meningită alternativa este meropenemul.','Nu: pivmecilinamul nu este activ pe P. aeruginosa; se folosește în infecțiile urinare.','Nu: amoxicilina este inactivată de β-lactamază; penicilinaza stafilococică cere flucloxacilină.']],
 'Distractorii pun antibiotice reale pe indicații din care sunt excluse.',['fasceită necrozantă','convulsii']],

[['Despre toxicitatea cefalosporinelor sunt adevărate:',
 ['este similară celei a penicilinelor, dar mai rară','include alergie încrucișată cu penicilinele la circa 10%','a afectat tubul proximal la derivații timpurii','include erupție la 90% în mononucleoza infecțioasă','include ototoxicitate, ca la aminoglicozide'],'ABC',163,CEF,
 'Toxicitatea și alergia încrucișată a cefalosporinelor.',
 ['Toxicitatea este similară celei a penicilinelor, dar mai rară.','Circa 10% dintre pacienții alergici la peniciline reacționează și la cefalosporine.','Cefalosporinele timpurii au produs leziuni de tub proximal; derivații noi sunt mai puțin nefrotoxici.','Nu: erupția la 90% în mononucleoză aparține amoxicilinei și ampicilinei.','Nu: ototoxicitatea este caracteristică aminoglicozidelor, nu cefalosporinelor.']],
 'Distractorii transferă erupția amoxicilinei și ototoxicitatea aminoglicozidelor.',['mononucleoză','penicilinazele stafilococice']],

[['Particularitățile vancomicinei administrate intravenos:',
 ['poate elibera histamină la perfuzia rapidă','este lent bactericidă, comparativ cu β-lactaminele','poate produce necroză la injectarea perivenoasă','este mai puțin nefrotoxică decât teicoplanina','se poate administra de trei ori pe săptămână'],'ABC',164,GLI,
 'Efectele adverse și farmacodinamica vancomicinei intravenoase.',
 ['Perfuzia prea rapidă poate declanșa eliberare simptomatică de histamină.','Vancomicina este lent bactericidă, spre deosebire de β-lactamine.','Injectarea perivenoasă poate produce necroză și tromboflebită.','Nu: teicoplanina este mai puțin nefrotoxică decât vancomicina.','Nu: administrarea de trei ori pe săptămână este posibilă cu teicoplanina.']],
 'Distractorii atribuie vancomicinei avantajele teicoplaninei.',['Teicoplanina','trei ori pe săptămână']],

[['Asocieri β-lactamină – inhibitor de β-lactamază:',
 ['amoxicilina cu acidul clavulanic','piperacilina cu tazobactamul','ceftazidima cu avibactamul','imipenemul cu cilastatinul','ceftriaxona cu avibactamul'],'ABC',164,INH,
 'Perechile β-lactamină–inhibitor de β-lactamază și partenerul avibactamului.',
 ['Co-amoxiclavul asociază amoxicilina cu acidul clavulanic, inhibitor β-lactamic.','Piperacilina se asociază cu tazobactamul, inhibitor β-lactamic.','Avibactamul, primul inhibitor non-β-lactamic, se combină cu ceftazidima.','Nu: cilastatinul previne inactivarea renală a imipenemului; nu inhibă β-lactamazele.','Nu: avibactamul se combină cu ceftazidima, nu cu ceftriaxona.']],
 'Imipenem–cilastatin nu este o asociere cu inhibitor de β-lactamază.',['Avibactam','OXA-48']],

[['Efectele toxice ale aminoglicozidelor includ:',
 ['nefrotoxicitate dependentă de doză','ototoxicitate vestibulară și auditivă','bloc neuromuscular, potențat de curarizante','ototoxicitate favorizată de mutația m.1555A>G','ototoxicitate atenuată de diureticele asociate'],'ABCD',164,AMG,
 'Spectrul de toxicitate al aminoglicozidelor.',
 ['Nefrotoxicitatea este dependentă de doză și potențată de alte nefrotoxice.','Ototoxicitatea poate afecta atât componenta vestibulară, cât și pe cea auditivă.','Riscul de bloc neuromuscular crește la asocierea cu curarizante; se evită în miastenia gravis.','Mutația m.1555A>G, prezentă la sub 1% din populație, predispune la ototoxicitate.','Nu: unele diuretice accentuează ototoxicitatea, nu o atenuează.']],
 'Diureticele accentuează, nu atenuează, ototoxicitatea.',['m.1555A','6-14 ore']],

[['Mecanismele rezistenței la organismele multirezistente:',
 ['MRSA: PBP2a, pe care flucloxacilina nu o inhibă','VRE: precursori de peptidoglican D-Ala-D-Lac','CRE: carbapenemaze OXA-48, NDM sau KPC','VRE: PBP2a cu afinitate scăzută pentru glicopeptide','MRSA: modificarea LPS prin enzima MCR-1'],'ABC',167,MEC,
 'Asocierea organismelor multirezistente cu mecanismul lor de rezistență.',
 ['Rezistența MRSA este mediată de PBP2a, pe care meticilina și flucloxacilina nu o inhibă.','La VRE, precursorii D-Ala-D-Ala devin D-Ala-D-Lac și împiedică legarea glicopeptidelor.','În Marea Britanie, carbapenemazele frecvente sunt de tip OXA-48, NDM și KPC.','Nu: PBP2a este mecanismul MRSA; VRE modifică ținta glicopeptidelor (D-Ala-D-Lac).','Nu: MCR-1 modifică LPS și dă rezistență la colistin la bacteriile Gram-negative.']],
 'Distractorii mută PBP2a la VRE și MCR-1 la MRSA.',['peptidoglican','OXA-48']],

[['Linezolidul, ca alternativă la vancomicină în MRSA:',
 ['poate produce trombocitopenie reversibilă','poate produce nevrită optică pe termen lung','impune niveluri serice de 15–20 mg/L','se administrează intravenos, fiind slab absorbit','este nefrotoxic, cu monitorizare renală'],'AB',167,MR,
 'Efectele adverse ale linezolidului, distincte de cele ale vancomicinei.',
 ['Linezolidul poate produce mielosupresie reversibilă, mai ales trombocitopenie, cu hemogramă săptămânală.','Tratamentul prelungit expune la neuropatie periferică sau nevrită optică.','Nu: nivelurile de 15–20 mg/L sunt ținta vancomicinei.','Nu: linezolidul se poate da oral, cu biodisponibilitate de 100%.','Nu: linezolidul nu este nefrotoxic, spre deosebire de vancomicină.']],
 'Distractorii atribuie linezolidului proprietățile vancomicinei.',['15-20 mg/L','linezolid']],
]);
