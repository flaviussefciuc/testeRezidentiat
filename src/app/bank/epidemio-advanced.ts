import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('epidemio',15,pdfOffset,`epidemio-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const EPIDEMIO_ADVANCED=[
q(1,['Studiile caz-control:',
 ['Compară retrospectiv pacienții care au boala cu martorii sănătoși','Permit calcularea raportului cotelor (odds ratio)','Permit analiza bolilor rare sau cronice într-o perioadă scurtă de timp','Permit determinarea incidenței bolii','Reprezintă standardul de aur pentru testarea medicamentelor'],'ABC',333,'Studiile științifice — Tipuri de studii',
 'Recunoașterea designului, a măsurii de asociere și a limitelor studiilor caz-control.',
 ['Tabelul 15-1 descrie comparația retrospectivă bolnavi–martori.','Concluzia specifică studiilor caz-control este raportul cotelor.','Avantajul analizei bolilor rare într-o perioadă scurtă este explicit.','Dezavantajul citat: nu se poate determina incidența bolii.','Standardul de aur pentru testarea medicamentelor este trialul clinic randomizat.']],
 8,'Distractorii atribuie studiului caz-control proprietăți ale studiului de cohortă și ale trialului randomizat.',['Raportul cotelor','erori de memorie']),

q(2,['Studiile de cohortă:',
 ['Stabilesc un risc relativ','Pot fi prospective sau retrospective','Reprezintă standardul de aur pentru testarea medicamentelor','Sunt dublu-orb pentru a evita erorile','Constau în studiul unui număr mare de persoane la un moment dat'],'AB',333,'Studiile științifice — Tipuri de studii',
 'Diferențierea studiului de cohortă de trialul randomizat și de studiul transversal.',
 ['Riscul relativ este concluzia specifică studiilor de cohortă.','Tabelul precizează variantele prospectivă și retrospectivă.','Standardul de aur pentru medicamente este trialul clinic randomizat.','Designul dublu-orb caracterizează trialul randomizat.','Evaluarea unui număr mare de persoane la un moment dat definește studiul transversal.']],
 8,'Distractorii preiau caracteristici definitorii ale altor două tipuri de studii din același tabel.',['Risc relativ','prospective']),

q(3,['Eroarea de perioadă de latență în studiile de screening constă în:',
 ['Testul de screening furnizează un diagnostic precoce, fără efect asupra duratei de supraviețuire, creând falsa impresie a creșterii supraviețuirii','Testul detectează mai multe cazuri de boală lent progresive și omite cazurile rapid progresive','Repartizarea nerandomizată a subiecților în grupurile de studiu','Studiile care arată o diferență între grupuri au o probabilitate mai mare de a fi publicate','Pacienții cu un anumit istoric medical sunt mai predispuși să participe la un studiu legat de boala lor'],'A',334,'Studiile științifice — Tipuri de erori',
 'Identificarea erorii de perioadă de latență și diferențierea ei de celelalte erori din studiile clinice.',
 ['Descrierea din Tabelul 15-2 pentru eroarea de perioadă de latență.','Aceasta este eroarea de durată.','Aceasta este eroarea de înrolare (selecție).','Aceasta este eroarea de publicare.','Aceasta este auto-selecția.']],
 8,'Distractorii sunt celelalte erori tabelate, două dintre ele fiind tot erori de screening ușor confundabile.',['Perioada de latență','Eficacitatea screeningului este exagerată']),

q(4,['Riscul relativ (RR):',
 ['Se determină prin studii de cohortă','O valoare mai mare decât 1 sugerează o relație pozitivă între expunere și boală','O valoare egală cu 1 nu sugerează nicio relație între expunere și boală','Se determină prin studii caz-control','Este estimat cu precizie de raportul cotelor doar când prevalența bolii este ridicată'],'ABC',335,'Biostatistică — Riscul bolii',
 'Interpretarea valorilor riscului relativ și cunoașterea tipului de studiu care îl generează.',
 ['Nota „De reținut” precizează că RR se determină prin studii de cohortă.','RR mai mare decât 1 indică relație pozitivă.','RR egal cu 1 indică absența relației.','Studiile caz-control generează raportul cotelor, nu RR.','OR estimează RR dacă prevalența este scăzută, nu ridicată.']],
 8,'Distractorii inversează tipul de studiu și condiția de prevalență pentru aproximarea RR prin OR.',['Riscul relativ se determină prin studii de cohortă','prevalența este scăzută']),

q(5,['Numărul necesar pentru tratament (NNT) se calculează ca:',
 ['1 / reducerea absolută a riscului','Rata bolii la populația expusă minus rata bolii la populația neexpusă','Sensibilitatea / (1 − specificitatea)','Rata bolii în grupul martor minus rata bolii în grupul de intervenție','(A + D) / (A + B + C + D)'],'A',335,'Biostatistică — Riscul bolii',
 'Aplicarea formulei NNT și diferențierea ei de alți indicatori de risc și de performanță diagnostică.',
 ['NNT = 1/RAR, conform textului.','Aceasta este formula riscului atribuibil.','Aceasta este rata de probabilitate pozitivă.','Aceasta este reducerea absolută a riscului, nu inversul ei.','Aceasta este formula acurateței.']],
 8,'Distractorii sunt formule reale din același capitol, inclusiv chiar RAR din care derivă NNT.',['NNT','Reducerea absolută a riscului'],[336]),

q(6,['Sensibilitatea și specificitatea unui test de diagnostic:',
 ['Sensibilitatea este probabilitatea ca testul să fie pozitiv la pacienții care au boala','Rezultatele fals-negative se aproximează prin (1 − sensibilitatea)','Testele de confirmare acceptabile au de obicei specificitatea peste 85%','Testele de screening acceptabile au de obicei sensibilitatea sub 50%','Rezultatele fals-pozitive se aproximează prin (1 − sensibilitatea)'],'ABC',335,'Biostatistică — Statistica testelor de diagnostic',
 'Definirea sensibilității și specificității și aplicarea pragurilor uzuale pentru screening și confirmare.',
 ['Definiția sensibilității din text.','Fals-negativele sunt aproximate prin 1 − sensibilitatea.','Pragul de peste 85% pentru testele de confirmare este citat.','Testele de screening acceptabile au sensibilitatea peste 80%.','Fals-pozitivele se aproximează prin 1 − specificitatea.']],
 8,'Distractorii inversează pragurile și formula complementară pentru fals-pozitive.',['sensibilitatea >80%','specificitatea >85%']),

q(7,['Alegeți afirmațiile corecte privind semnificația statistică și erorile de interpretare:',
 ['Eroarea de tip I constă în respingerea ipotezei nule, deși aceasta este adevărată','Eroarea de tip II constă în nerespingerea ipotezei nule, deși aceasta este falsă','Valoarea p reprezintă șansa unei erori de tip I pentru un anumit rezultat','Riscul erorilor de tip I și II crește odată cu creșterea dimensiunii eșantionului','Studiile cu putere insuficientă predispun la erori de tip I'],'ABC',336,'Biostatistică — Tipuri de erori și semnificația statistică',
 'Diferențierea erorilor de tip I și II și interpretarea valorii p și a puterii studiului.',
 ['Definiția erorii de tip I (fals-pozitivă).','Definiția erorii de tip II (fals-negativă).','Valoarea p este definită ca șansa erorii de tip I.','Riscul acestor erori scade cu creșterea eșantionului.','Puterea insuficientă predispune la erori de tip II.']],
 8,'Distractorii inversează sensul relației cu dimensiunea eșantionului și tipul de eroare legat de putere.',['Eroarea de tip I','Puterea unui studiu']),

q(8,['Confidențialitatea medicală nu este obligatorie atunci când pacientul:',
 ['Are o boală raportabilă din punct de vedere legal','Se consideră că ar avea tendințe suicidale sau criminale','A suferit o rană penetrantă în urma unui atac','Este un adolescent care solicită tratament pentru o boală cu transmitere sexuală','Are o familie care solicită informații fără acordul său'],'ABC',337,'Etică — Drepturile pacientului: confidențialitatea',
 'Aplicarea excepțiilor legitime de la confidențialitate și recunoașterea situațiilor în care aceasta se păstrează.',
 ['Bolile raportabile legal sunt o excepție explicită.','Tendințele suicidale sau criminale sunt o excepție explicită.','Rănile penetrante prin atac sunt o excepție explicită.','Confidențialitatea trebuie păstrată la adolescenți pentru BTS, contracepție și sarcină.','Informațiile se împart familiei doar dacă pacientul permite.']],
 8,'Distractorii testează două situații în care intuiția contrazice regula: adolescentul cu BTS și solicitarea familiei.',['Confidențialitatea nu este obligatorie','adolescenților']),

q(9,['Pentru a fi considerat competent să ia decizii medicale, un pacient trebuie:',
 ['Să nu fie diagnosticat în prezent cu psihoză sau intoxicație','Să înțeleagă situația sa medicală','Să fie capabil să ia decizii în acord cu valorile sale anterioare','Să aibă acordul familiei pentru deciziile luate','Să nu se răzgândească după acceptarea inițială a terapiei'],'ABC',337,'Etică — Luarea deciziei de către pacient: competența',
 'Aplicarea celor trei criterii de competență decizională și a dreptului pacientului de a-și schimba decizia.',
 ['Absența psihozei sau intoxicației este primul criteriu.','Înțelegerea situației medicale este al doilea criteriu.','Concordanța cu valorile anterioare este al treilea criteriu.','Acordul familiei nu este un criteriu de competență.','Un pacient competent poate să se răzgândească în orice moment.']],
 8,'Distractorii adaugă condiții false care contrazic autonomia pacientului competent.',['Competența','se răzgândească']),

q(10,['Criteriile morții cerebrale includ:',
 ['Absența reflexelor de trunchi cerebral (faringian, cornean, calorice)','Apneea la decuplarea de ventilator pentru o durată suficientă pentru a produce o conducere normală hipercarbică','Absența hipotermiei sau intoxicației','Absența activității pe EEG definește singură moartea cerebrală','Absența ireversibilă a activității întregului creier cu durată de peste 6 ore'],'ABCE',338,'Etică — Probleme legate de sfârșitul vieții: moartea',
 'Aplicarea criteriilor de moarte cerebrală și recunoașterea limitelor EEG-ului.',
 ['Absența reflexelor de trunchi este criteriul (1).','Testul de apnee este criteriul (2).','Absența hipotermiei sau intoxicației este criteriul (5).','Nota „De reținut” precizează că absența activității EEG nu definește moartea cerebrală, ci doar ajută analiza.','Definiția cere absența ireversibilă a activității întregului creier peste 6 ore.']],
 8,'Distractorul supraevaluează EEG-ul, exact punctul pe care textul îl nuanțează explicit.',['Moartea cerebrală','>6 ore']),

q(11,['Eutanasia este definită ca:',
 ['Administrarea activă de către medic a unui agent letal unui pacient pentru a pune capăt suferinței','Furnizarea de către medic a unui mijloc prin care pacientul își încheie singur viața','Retragerea măsurilor de suport vital la cererea unui pacient competent','Emiterea unui ordin de neresuscitare la cererea pacientului','Neinițierea terapiilor considerate iraționale pentru starea curentă a pacientului'],'A',338,'Etică — Decesul asistat medical',
 'Diferențierea eutanasiei de sinuciderea asistată, de retragerea suportului vital și de limitarea terapeutică.',
 ['Definiția eutanasiei din text: administrarea activă a unui agent letal.','Aceasta este sinuciderea asistată de medic.','Retragerea suportului vital la cererea unui pacient competent este un drept al pacientului.','Ordinul DNR este o directivă în avans, nu eutanasie.','Medicii nu sunt obligați să furnizeze terapii iraționale; aceasta nu este eutanasie.']],
 8,'Distractorii sunt practici legitime de la sfârșitul vieții, frecvent confundate cu eutanasia.',['Eutanasia','Sinuciderea asistată de medic']),
];
