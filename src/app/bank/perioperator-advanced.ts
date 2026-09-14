import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('perioperator',1,0,`perioperator-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const PERIOPERATOR_ADVANCED=[
q(1,['Care dintre următoarele afirmații despre screeningul de laborator preoperator la pacienții asimptomatici sunt adevărate?',
 ['Testele de screening de rutină la asimptomatici aduc costuri ridicate fără garanția rezultatelor pozitive','Potențialul prejudiciu al screeningului neselectiv poate depăși beneficiul descoperirii unor modificări oculte','Aproximativ 60% din rezultatele anormale ale screeningului sunt ignorate','Nu este necesară repetarea analizelor de laborator cu rezultate normale din ultimele 4 săptămâni înaintea unei intervenții elective','Obținerea de date pentru definirea „stării bazale” este recomandată la toți pacienții asimptomatici'],'ABCD',1,'Evaluarea preoperatorie — Testele de screening și consulturile de specialitate',
 'Recunoașterea limitelor screeningului neselectiv preoperator și a faptului că anamneza și examenul clinic nu pot fi substituite de analize de rutină.',
 ['Textul precizează costurile ridicate fără garanția rezultatelor pozitive.','Prejudiciul potențial al screeningului neselectiv este descris ca mai mare decât beneficiul.','Argumentul că 60% din rezultatele anormale sunt ignorate este explicit.','Textul precizează că nu este necesară repetarea analizelor normale din ultimele 4 săptămâni.','Textul indică opusul: obținerea stării bazale nu este recomandată la asimptomatici.']],
 8,'Distractorul final inversează recomandarea privind starea bazală, pe fondul unui fapt cantitativ memorabil (60%).',['60% din rezultatele anormale','nu este recomandată']),

q(2,['Alegeți afirmațiile corecte referitoare la evaluarea cardiacă preoperatorie:',
 ['Răspunsul la stresul chirurgical include creșterea catecolaminelor plasmatice, cu creșterea necesarului miocardic de oxigen','Stresul chirurgical poate suprima sistemul fibrinolitic, predispunând la tromboză','Screeningul cardiac de rutină este recomandat tuturor pacienților cu risc scăzut pentru intervenții non-cardiace','Pacienții cu risc înalt și capacitate funcțională păstrată necesită neapărat o evaluare cardiacă amănunțită','ECG-ul nu are niciun rol înaintea operațiilor cu risc înalt'],'AB',2,'Evaluarea cardiacă',
 'Diferențierea efectelor fiziologice ale stresului chirurgical de screeningul neselectiv și de excepția capacității funcționale păstrate.',
 ['Creșterea catecolaminelor și a necesarului miocardic de O2 este descrisă explicit.','Supresia fibrinolizei cu predispoziție la tromboză este menționată.','Textul precizează opusul: screeningul cardiac de rutină nu este recomandat la risc scăzut.','Textul indică că pacienții cu risc înalt și capacitate funcțională păstrată ar putea să nu necesite evaluare amănunțită.','ECG-ul este indicat la comorbidități semnificative și operații cu risc înalt.']],
 8,'Distractorii extind screeningul la risc scăzut și anulează excepția capacității funcționale păstrate.',['catecolamine','sistemului fibrinolitic']),

q(3,['Sunt adevărate următoarele afirmații despre riscul pulmonar perioperator:',
 ['Incidența raportată a complicațiilor pulmonare postoperatorii este de 2-9%','Radiografia toracică de rutină și probele funcționale pulmonare nu sunt, în general, necesare','Factorii de risc legați de pacient includ vârsta, BPOC, tutunul, ICC și clasa ASA','Radiografia toracică este indicată oricărui pacient asimptomatic înaintea oricărei intervenții abdominale','Clasificarea ASA are doar trei categorii, fără clase pentru pacienți moribunzi'],'ABC',2,'Evaluarea pulmonară',
 'Aplicarea indicațiilor selective de radiografie toracică și recunoașterea factorilor de risc pulmonari legați de pacient.',
 ['Intervalul 2-9% este citat explicit.','Textul precizează că Rx și TFP de rutină nu sunt necesare.','Lista de factori de risc legați de pacient este enumerată, inclusiv ASA.','Rx este indicată pentru intervenții intratoracice sau boală pulmonară activă, nu oricărui asimptomatic.','ASA are 6 categorii, de la I (sănătos) până la V (moribund) și VI.']],
 8,'Distractorii generalizează indicația radiografiei și reduc greșit numărul de clase ASA.',['2-9%','American Society of Anesthesiologists'],[3]),

q(4,['Indicați afirmațiile corecte privind chirurgia electivă la pacientul cirotic:',
 ['Clasificarea Child-Pugh și scorul MELD trebuie calculate în evaluarea preoperatorie a riscului','Chirurgia electivă este, în general, bine tolerată de pacienții Child A','Chirurgia electivă este contraindicată la pacienții Child C','Chirurgia electivă este contraindicată la toți pacienții Child B, indiferent de tipul intervenției','Scorul MELD se bazează numai pe albumină și pe timpul de sângerare'],'ABC',3,'Pacientul cu disfuncție hepatică — Child-Pugh și MELD',
 'Aplicarea pragurilor Child-Pugh pentru tolerabilitatea chirurgiei elective și a componentelor scorului MELD.',
 ['Ambele scoruri sunt cerute explicit în evaluarea preoperatorie.','Child A tolerează bine chirurgia electivă.','Child C contraindică chirurgia electivă.','Child B permite chirurgia electivă cu pregătire, cu excepții (rezecții hepatice extinse, chirurgie cardiacă).','MELD se bazează pe bilirubină, creatinină și INR, nu pe albumină/timp de sângerare.']],
 8,'Distractorii extind contraindicația Child B la toate cazurile și înlocuiesc componentele reale ale MELD.',['Child C','bilirubinei']),

q(5,['Care dintre următoarele afirmații despre managementul perioperator al pacientului diabetic sunt adevărate?',
 ['Ținta glicemică perioperatorie este menținerea valorilor între 120 și 180 mg/dL','Este preferabilă menținerea glicemiei spre limita superioară a intervalului, din cauza riscului de hipoglicemie','Cetoacidoza diabetică poate apărea și la o glicemie sub 250 mg/dL, deoarece depinde de absența insulinei, nu de valoarea glicemiei','Insulina cu durată scurtă de acțiune se administrează neschimbat în dimineața intervenției, indiferent de statusul alimentar','Preparatele orale cu durată lungă de acțiune pot fi continuate până în dimineața intervenției, fără oprire prealabilă'],'ABC',5,'Pacientul diabetic',
 'Aplicarea țintei glicemice perioperatorii și a independenței CAD față de valoarea absolută a glicemiei.',
 ['Intervalul 120-180 mg/dL este ținta explicită.','Preferința pentru limita superioară din cauza hipoglicemiei este menționată.','CAD nu depinde de valoarea glicemiei, ci de absența insulinei.','Insulina rapidă/scurtă se oprește când pacientul nu se mai alimentează preoperator.','Agenții orali cu durată lungă se opresc cu 48-72 de ore înainte.']],
 8,'Inversează două reguli practice de oprire a insulinelor/oralelor și testează independența CAD de pragul glicemic.',['120-180 mg/dL','absența insulinei']),

q(6,['Alegeți afirmațiile corecte referitoare la pacienta gravidă cu patologie chirurgicală:',
 ['Dacă intervenția este necesară, ideal este al doilea trimestru, când riscul de avort spontan sau travaliu prematur este cel mai mic','Creșterea volumului plasmatic poate masca pierderile de sânge și întârzia semnele tipice de hipovolemie','Toate gravidele Rh-negative care au suferit o traumă trebuie să primească imunoglobulină anti-D, cu excepția leziunilor minore la distanță de uter','Intervențiile chirurgicale trebuie preferate în primul trimestru, deoarece riscul anestezic fetal este minim atunci','Laparoscopia este absolut contraindicată în al doilea trimestru, indiferent de presiunea de insufilație'],'ABC',6,'Pacienta însărcinată',
 'Alegerea trimestrului optim pentru chirurgie și recunoașterea modificărilor fiziologice care maschează hipovolemia și a indicației de anti-D.',
 ['Al doilea trimestru este descris ca ideal pentru riscul minim de avort/travaliu prematur.','Creșterea volumului plasmatic maschează pierderile sanguine.','Indicația anti-D la Rh-negative post-traumă, cu excepția leziunilor minore distale, este explicită.','Textul preferă evitarea chirurgiei; când e necesară, al doilea trimestru, nu primul.','Laparoscopia poate fi realizată în siguranță în al doilea trimestru, cu modificări de trocare și presiune redusă.']],
 8,'Distractorii inversează trimestrul preferat și transformă o precauție tehnică a laparoscopiei într-o interdicție absolută.',['al doilea trimestru','imunoglobulina anti-D']),

q(7,['Sunt adevărate următoarele afirmații despre atelectazia postoperatorie:',
 ['Poate afecta până la 90% dintre pacienții supuși anesteziei generale','Managementul trebuie să înceapă preoperator, prin oprirea fumatului cu 8 săptămâni înainte și inițierea exercițiilor inspiratorii','Strategiile esențiale postoperator includ controlul corect al durerii și mobilizarea precoce','Atelectazia apare doar după anestezie inhalatorie, nu după anestezie intravenoasă','Chirurgia minim invazivă crește semnificativ incidența atelectaziei față de chirurgia deschisă'],'ABC',10,'Complicațiile postoperatorii — Atelectazia',
 'Recunoașterea incidenței înalte a atelectaziei și a măsurilor preventive pre- și postoperatorii.',
 ['Incidența de până la 90% este citată explicit.','Oprirea fumatului cu 8 săptămâni și exercițiile inspiratorii sunt măsuri preoperatorii.','Analgezia adecvată (inclusiv epidurală) și mobilizarea precoce sunt strategii cheie.','Colabarea alveolară este favorizată de anestezicele generale, indiferent de agent.','Chirurgia minim invazivă reduce, nu crește, incidența atelectaziei.']],
 8,'Inversează relația cu tipul de anestezie și cu abordul minim invaziv, pe fondul unui procent memorabil (90%).',['90%','8 săptămâni'],[9]),

q(8,['Care dintre următoarele reprezintă o situație chirurgicală care „nu trebuie să aibă loc niciodată”, conform listei National Quality Forum?',
 ['Chirurgia efectuată pe partea greșită a corpului','Febra postoperatorie de 38,3°C în prima zi','Atelectazia segmentară pe radiografia de control','Necesitatea unei unități suplimentare de masă eritrocitară intraoperator','Consultul cardiologic post-infarct miocardic perioperator'],'A',11,'Siguranța perioperatorie a pacientului — Situații care nu trebuie să aibă loc niciodată',
 'Diferențierea evenimentelor „never events” chirurgicale de complicațiile postoperatorii frecvente, dar nu listate ca never events.',
 ['Chirurgia pe partea greșită este listată explicit printre situațiile chirurgicale care nu trebuie să aibă loc.','Febra ≥38,3°C declanșează investigații, dar nu este un never event chirurgical.','Atelectazia este o complicație frecventă, nu un never event din tabel.','Transfuzia intraoperatorie nu figurează ca never event chirurgical în tabel.','Consultul cardiologic post-IM este o practică recomandată, nu un never event.']],
 8,'Distractorii sunt evenimente clinice reale din capitol, dar nu apar în lista never events chirurgicale.',['partea greșită','Situații chirurgicale']),
];
