import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_PERIOPERATOR:Question[]=[
 {
  "id": "perioperator-adv-001",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații despre screeningul de laborator preoperator la pacienții asimptomatici sunt adevărate?",
  "options": [
   "Testele de screening de rutină la asimptomatici aduc costuri ridicate fără garanția rezultatelor pozitive",
   "Potențialul prejudiciu al screeningului neselectiv poate depăși beneficiul descoperirii unor modificări oculte",
   "Aproximativ 60% din rezultatele anormale ale screeningului sunt ignorate",
   "Nu este necesară repetarea analizelor de laborator cu rezultate normale din ultimele 4 săptămâni înaintea unei intervenții elective",
   "Obținerea de date pentru definirea „stării bazale” este recomandată la toți pacienții asimptomatici"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Testele de screening de rutină la asimptomatici aduc costuri ridicate fără garanția rezultatelor pozitive — Corect: Textul precizează costurile ridicate fără garanția rezultatelor pozitive.\n\nPotențialul prejudiciu al screeningului neselectiv poate depăși beneficiul descoperirii unor modificări oculte — Corect: Prejudiciul potențial al screeningului neselectiv este descris ca mai mare decât beneficiul.\n\nAproximativ 60% din rezultatele anormale ale screeningului sunt ignorate — Corect: Argumentul că 60% din rezultatele anormale sunt ignorate este explicit.\n\nNu este necesară repetarea analizelor de laborator cu rezultate normale din ultimele 4 săptămâni înaintea unei intervenții elective — Corect: Textul precizează că nu este necesară repetarea analizelor normale din ultimele 4 săptămâni.\n\nObținerea de date pentru definirea „stării bazale” este recomandată la toți pacienții asimptomatici — Incorect: Textul indică opusul: obținerea stării bazale nu este recomandată la asimptomatici.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 1, Evaluarea preoperatorie — Testele de screening și consulturile de specialitate (pagini PDF: 1).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    1
   ],
   "pdfPages": [
    1
   ],
   "section": "Evaluarea preoperatorie — Testele de screening și consulturile de specialitate"
  },
  "learningObjective": "Recunoașterea limitelor screeningului neselectiv preoperator și a faptului că anamneza și examenul clinic nu pot fi substituite de analize de rutină.",
  "optionRationales": [
   "Textul precizează costurile ridicate fără garanția rezultatelor pozitive.",
   "Prejudiciul potențial al screeningului neselectiv este descris ca mai mare decât beneficiul.",
   "Argumentul că 60% din rezultatele anormale sunt ignorate este explicit.",
   "Textul precizează că nu este necesară repetarea analizelor normale din ultimele 4 săptămâni.",
   "Textul indică opusul: obținerea stării bazale nu este recomandată la asimptomatici."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul final inversează recomandarea privind starea bazală, pe fondul unui fapt cantitativ memorabil (60%)."
  },
  "textbookExpressions": [
   "60% din rezultatele anormale",
   "nu este recomandată"
  ]
 },
 {
  "id": "perioperator-adv-002",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la evaluarea cardiacă preoperatorie:",
  "options": [
   "Răspunsul la stresul chirurgical include creșterea catecolaminelor plasmatice, cu creșterea necesarului miocardic de oxigen",
   "Stresul chirurgical poate suprima sistemul fibrinolitic, predispunând la tromboză",
   "Screeningul cardiac de rutină este recomandat tuturor pacienților cu risc scăzut pentru intervenții non-cardiace",
   "Pacienții cu risc înalt și capacitate funcțională păstrată necesită neapărat o evaluare cardiacă amănunțită",
   "ECG-ul nu are niciun rol înaintea operațiilor cu risc înalt"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Răspunsul la stresul chirurgical include creșterea catecolaminelor plasmatice, cu creșterea necesarului miocardic de oxigen — Corect: Creșterea catecolaminelor și a necesarului miocardic de O2 este descrisă explicit.\n\nStresul chirurgical poate suprima sistemul fibrinolitic, predispunând la tromboză — Corect: Supresia fibrinolizei cu predispoziție la tromboză este menționată.\n\nScreeningul cardiac de rutină este recomandat tuturor pacienților cu risc scăzut pentru intervenții non-cardiace — Incorect: Textul precizează opusul: screeningul cardiac de rutină nu este recomandat la risc scăzut.\n\nPacienții cu risc înalt și capacitate funcțională păstrată necesită neapărat o evaluare cardiacă amănunțită — Incorect: Textul indică că pacienții cu risc înalt și capacitate funcțională păstrată ar putea să nu necesite evaluare amănunțită.\n\nECG-ul nu are niciun rol înaintea operațiilor cu risc înalt — Incorect: ECG-ul este indicat la comorbidități semnificative și operații cu risc înalt.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 2, Evaluarea cardiacă (pagini PDF: 2).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    2
   ],
   "pdfPages": [
    2
   ],
   "section": "Evaluarea cardiacă"
  },
  "learningObjective": "Diferențierea efectelor fiziologice ale stresului chirurgical de screeningul neselectiv și de excepția capacității funcționale păstrate.",
  "optionRationales": [
   "Creșterea catecolaminelor și a necesarului miocardic de O2 este descrisă explicit.",
   "Supresia fibrinolizei cu predispoziție la tromboză este menționată.",
   "Textul precizează opusul: screeningul cardiac de rutină nu este recomandat la risc scăzut.",
   "Textul indică că pacienții cu risc înalt și capacitate funcțională păstrată ar putea să nu necesite evaluare amănunțită.",
   "ECG-ul este indicat la comorbidități semnificative și operații cu risc înalt."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii extind screeningul la risc scăzut și anulează excepția capacității funcționale păstrate."
  },
  "textbookExpressions": [
   "catecolamine",
   "sistemului fibrinolitic"
  ]
 },
 {
  "id": "perioperator-adv-003",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Sunt adevărate următoarele afirmații despre riscul pulmonar perioperator:",
  "options": [
   "Incidența raportată a complicațiilor pulmonare postoperatorii este de 2-9%",
   "Radiografia toracică de rutină și probele funcționale pulmonare nu sunt, în general, necesare",
   "Factorii de risc legați de pacient includ vârsta, BPOC, tutunul, ICC și clasa ASA",
   "Radiografia toracică este indicată oricărui pacient asimptomatic înaintea oricărei intervenții abdominale",
   "Clasificarea ASA are doar trei categorii, fără clase pentru pacienți moribunzi"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Incidența raportată a complicațiilor pulmonare postoperatorii este de 2-9% — Corect: Intervalul 2-9% este citat explicit.\n\nRadiografia toracică de rutină și probele funcționale pulmonare nu sunt, în general, necesare — Corect: Textul precizează că Rx și TFP de rutină nu sunt necesare.\n\nFactorii de risc legați de pacient includ vârsta, BPOC, tutunul, ICC și clasa ASA — Corect: Lista de factori de risc legați de pacient este enumerată, inclusiv ASA.\n\nRadiografia toracică este indicată oricărui pacient asimptomatic înaintea oricărei intervenții abdominale — Incorect: Rx este indicată pentru intervenții intratoracice sau boală pulmonară activă, nu oricărui asimptomatic.\n\nClasificarea ASA are doar trei categorii, fără clase pentru pacienți moribunzi — Incorect: ASA are 6 categorii, de la I (sănătos) până la V (moribund) și VI.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 2, 3, Evaluarea pulmonară (pagini PDF: 2, 3).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    2,
    3
   ],
   "pdfPages": [
    2,
    3
   ],
   "section": "Evaluarea pulmonară"
  },
  "learningObjective": "Aplicarea indicațiilor selective de radiografie toracică și recunoașterea factorilor de risc pulmonari legați de pacient.",
  "optionRationales": [
   "Intervalul 2-9% este citat explicit.",
   "Textul precizează că Rx și TFP de rutină nu sunt necesare.",
   "Lista de factori de risc legați de pacient este enumerată, inclusiv ASA.",
   "Rx este indicată pentru intervenții intratoracice sau boală pulmonară activă, nu oricărui asimptomatic.",
   "ASA are 6 categorii, de la I (sănătos) până la V (moribund) și VI."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii generalizează indicația radiografiei și reduc greșit numărul de clase ASA."
  },
  "textbookExpressions": [
   "2-9%",
   "American Society of Anesthesiologists"
  ]
 },
 {
  "id": "perioperator-adv-004",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Indicați afirmațiile corecte privind chirurgia electivă la pacientul cirotic:",
  "options": [
   "Clasificarea Child-Pugh și scorul MELD trebuie calculate în evaluarea preoperatorie a riscului",
   "Chirurgia electivă este, în general, bine tolerată de pacienții Child A",
   "Chirurgia electivă este contraindicată la pacienții Child C",
   "Chirurgia electivă este contraindicată la toți pacienții Child B, indiferent de tipul intervenției",
   "Scorul MELD se bazează numai pe albumină și pe timpul de sângerare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Clasificarea Child-Pugh și scorul MELD trebuie calculate în evaluarea preoperatorie a riscului — Corect: Ambele scoruri sunt cerute explicit în evaluarea preoperatorie.\n\nChirurgia electivă este, în general, bine tolerată de pacienții Child A — Corect: Child A tolerează bine chirurgia electivă.\n\nChirurgia electivă este contraindicată la pacienții Child C — Corect: Child C contraindică chirurgia electivă.\n\nChirurgia electivă este contraindicată la toți pacienții Child B, indiferent de tipul intervenției — Incorect: Child B permite chirurgia electivă cu pregătire, cu excepții (rezecții hepatice extinse, chirurgie cardiacă).\n\nScorul MELD se bazează numai pe albumină și pe timpul de sângerare — Incorect: MELD se bazează pe bilirubină, creatinină și INR, nu pe albumină/timp de sângerare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 3, Pacientul cu disfuncție hepatică — Child-Pugh și MELD (pagini PDF: 3).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    3
   ],
   "pdfPages": [
    3
   ],
   "section": "Pacientul cu disfuncție hepatică — Child-Pugh și MELD"
  },
  "learningObjective": "Aplicarea pragurilor Child-Pugh pentru tolerabilitatea chirurgiei elective și a componentelor scorului MELD.",
  "optionRationales": [
   "Ambele scoruri sunt cerute explicit în evaluarea preoperatorie.",
   "Child A tolerează bine chirurgia electivă.",
   "Child C contraindică chirurgia electivă.",
   "Child B permite chirurgia electivă cu pregătire, cu excepții (rezecții hepatice extinse, chirurgie cardiacă).",
   "MELD se bazează pe bilirubină, creatinină și INR, nu pe albumină/timp de sângerare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii extind contraindicația Child B la toate cazurile și înlocuiesc componentele reale ale MELD."
  },
  "textbookExpressions": [
   "Child C",
   "bilirubinei"
  ]
 },
 {
  "id": "perioperator-adv-005",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații despre managementul perioperator al pacientului diabetic sunt adevărate?",
  "options": [
   "Ținta glicemică perioperatorie este menținerea valorilor între 120 și 180 mg/dL",
   "Este preferabilă menținerea glicemiei spre limita superioară a intervalului, din cauza riscului de hipoglicemie",
   "Cetoacidoza diabetică poate apărea și la o glicemie sub 250 mg/dL, deoarece depinde de absența insulinei, nu de valoarea glicemiei",
   "Insulina cu durată scurtă de acțiune se administrează neschimbat în dimineața intervenției, indiferent de statusul alimentar",
   "Preparatele orale cu durată lungă de acțiune pot fi continuate până în dimineața intervenției, fără oprire prealabilă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ținta glicemică perioperatorie este menținerea valorilor între 120 și 180 mg/dL — Corect: Intervalul 120-180 mg/dL este ținta explicită.\n\nEste preferabilă menținerea glicemiei spre limita superioară a intervalului, din cauza riscului de hipoglicemie — Corect: Preferința pentru limita superioară din cauza hipoglicemiei este menționată.\n\nCetoacidoza diabetică poate apărea și la o glicemie sub 250 mg/dL, deoarece depinde de absența insulinei, nu de valoarea glicemiei — Corect: CAD nu depinde de valoarea glicemiei, ci de absența insulinei.\n\nInsulina cu durată scurtă de acțiune se administrează neschimbat în dimineața intervenției, indiferent de statusul alimentar — Incorect: Insulina rapidă/scurtă se oprește când pacientul nu se mai alimentează preoperator.\n\nPreparatele orale cu durată lungă de acțiune pot fi continuate până în dimineața intervenției, fără oprire prealabilă — Incorect: Agenții orali cu durată lungă se opresc cu 48-72 de ore înainte.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 5, Pacientul diabetic (pagini PDF: 5).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    5
   ],
   "pdfPages": [
    5
   ],
   "section": "Pacientul diabetic"
  },
  "learningObjective": "Aplicarea țintei glicemice perioperatorii și a independenței CAD față de valoarea absolută a glicemiei.",
  "optionRationales": [
   "Intervalul 120-180 mg/dL este ținta explicită.",
   "Preferința pentru limita superioară din cauza hipoglicemiei este menționată.",
   "CAD nu depinde de valoarea glicemiei, ci de absența insulinei.",
   "Insulina rapidă/scurtă se oprește când pacientul nu se mai alimentează preoperator.",
   "Agenții orali cu durată lungă se opresc cu 48-72 de ore înainte."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează două reguli practice de oprire a insulinelor/oralelor și testează independența CAD de pragul glicemic."
  },
  "textbookExpressions": [
   "120-180 mg/dL",
   "absența insulinei"
  ]
 },
 {
  "id": "perioperator-adv-006",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la pacienta gravidă cu patologie chirurgicală:",
  "options": [
   "Dacă intervenția este necesară, ideal este al doilea trimestru, când riscul de avort spontan sau travaliu prematur este cel mai mic",
   "Creșterea volumului plasmatic poate masca pierderile de sânge și întârzia semnele tipice de hipovolemie",
   "Toate gravidele Rh-negative care au suferit o traumă trebuie să primească imunoglobulină anti-D, cu excepția leziunilor minore la distanță de uter",
   "Intervențiile chirurgicale trebuie preferate în primul trimestru, deoarece riscul anestezic fetal este minim atunci",
   "Laparoscopia este absolut contraindicată în al doilea trimestru, indiferent de presiunea de insufilație"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Dacă intervenția este necesară, ideal este al doilea trimestru, când riscul de avort spontan sau travaliu prematur este cel mai mic — Corect: Al doilea trimestru este descris ca ideal pentru riscul minim de avort/travaliu prematur.\n\nCreșterea volumului plasmatic poate masca pierderile de sânge și întârzia semnele tipice de hipovolemie — Corect: Creșterea volumului plasmatic maschează pierderile sanguine.\n\nToate gravidele Rh-negative care au suferit o traumă trebuie să primească imunoglobulină anti-D, cu excepția leziunilor minore la distanță de uter — Corect: Indicația anti-D la Rh-negative post-traumă, cu excepția leziunilor minore distale, este explicită.\n\nIntervențiile chirurgicale trebuie preferate în primul trimestru, deoarece riscul anestezic fetal este minim atunci — Incorect: Textul preferă evitarea chirurgiei; când e necesară, al doilea trimestru, nu primul.\n\nLaparoscopia este absolut contraindicată în al doilea trimestru, indiferent de presiunea de insufilație — Incorect: Laparoscopia poate fi realizată în siguranță în al doilea trimestru, cu modificări de trocare și presiune redusă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 6, Pacienta însărcinată (pagini PDF: 6).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    6
   ],
   "pdfPages": [
    6
   ],
   "section": "Pacienta însărcinată"
  },
  "learningObjective": "Alegerea trimestrului optim pentru chirurgie și recunoașterea modificărilor fiziologice care maschează hipovolemia și a indicației de anti-D.",
  "optionRationales": [
   "Al doilea trimestru este descris ca ideal pentru riscul minim de avort/travaliu prematur.",
   "Creșterea volumului plasmatic maschează pierderile sanguine.",
   "Indicația anti-D la Rh-negative post-traumă, cu excepția leziunilor minore distale, este explicită.",
   "Textul preferă evitarea chirurgiei; când e necesară, al doilea trimestru, nu primul.",
   "Laparoscopia poate fi realizată în siguranță în al doilea trimestru, cu modificări de trocare și presiune redusă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează trimestrul preferat și transformă o precauție tehnică a laparoscopiei într-o interdicție absolută."
  },
  "textbookExpressions": [
   "al doilea trimestru",
   "imunoglobulina anti-D"
  ]
 },
 {
  "id": "perioperator-adv-007",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Sunt adevărate următoarele afirmații despre atelectazia postoperatorie:",
  "options": [
   "Poate afecta până la 90% dintre pacienții supuși anesteziei generale",
   "Managementul trebuie să înceapă preoperator, prin oprirea fumatului cu 8 săptămâni înainte și inițierea exercițiilor inspiratorii",
   "Strategiile esențiale postoperator includ controlul corect al durerii și mobilizarea precoce",
   "Atelectazia apare doar după anestezie inhalatorie, nu după anestezie intravenoasă",
   "Chirurgia minim invazivă crește semnificativ incidența atelectaziei față de chirurgia deschisă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Poate afecta până la 90% dintre pacienții supuși anesteziei generale — Corect: Incidența de până la 90% este citată explicit.\n\nManagementul trebuie să înceapă preoperator, prin oprirea fumatului cu 8 săptămâni înainte și inițierea exercițiilor inspiratorii — Corect: Oprirea fumatului cu 8 săptămâni și exercițiile inspiratorii sunt măsuri preoperatorii.\n\nStrategiile esențiale postoperator includ controlul corect al durerii și mobilizarea precoce — Corect: Analgezia adecvată (inclusiv epidurală) și mobilizarea precoce sunt strategii cheie.\n\nAtelectazia apare doar după anestezie inhalatorie, nu după anestezie intravenoasă — Incorect: Colabarea alveolară este favorizată de anestezicele generale, indiferent de agent.\n\nChirurgia minim invazivă crește semnificativ incidența atelectaziei față de chirurgia deschisă — Incorect: Chirurgia minim invazivă reduce, nu crește, incidența atelectaziei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 10, 9, Complicațiile postoperatorii — Atelectazia (pagini PDF: 10, 9).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    10,
    9
   ],
   "pdfPages": [
    10,
    9
   ],
   "section": "Complicațiile postoperatorii — Atelectazia"
  },
  "learningObjective": "Recunoașterea incidenței înalte a atelectaziei și a măsurilor preventive pre- și postoperatorii.",
  "optionRationales": [
   "Incidența de până la 90% este citată explicit.",
   "Oprirea fumatului cu 8 săptămâni și exercițiile inspiratorii sunt măsuri preoperatorii.",
   "Analgezia adecvată (inclusiv epidurală) și mobilizarea precoce sunt strategii cheie.",
   "Colabarea alveolară este favorizată de anestezicele generale, indiferent de agent.",
   "Chirurgia minim invazivă reduce, nu crește, incidența atelectaziei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează relația cu tipul de anestezie și cu abordul minim invaziv, pe fondul unui procent memorabil (90%)."
  },
  "textbookExpressions": [
   "90%",
   "8 săptămâni"
  ]
 },
 {
  "id": "perioperator-adv-008",
  "topicId": "perioperator",
  "type": "CS",
  "stem": "Care dintre următoarele reprezintă o situație chirurgicală care „nu trebuie să aibă loc niciodată”, conform listei National Quality Forum?",
  "options": [
   "Chirurgia efectuată pe partea greșită a corpului",
   "Febra postoperatorie de 38,3°C în prima zi",
   "Atelectazia segmentară pe radiografia de control",
   "Necesitatea unei unități suplimentare de masă eritrocitară intraoperator",
   "Consultul cardiologic post-infarct miocardic perioperator"
  ],
  "correct": [
   0
  ],
  "explanation": "Chirurgia efectuată pe partea greșită a corpului — Corect: Chirurgia pe partea greșită este listată explicit printre situațiile chirurgicale care nu trebuie să aibă loc.\n\nFebra postoperatorie de 38,3°C în prima zi — Incorect: Febra ≥38,3°C declanșează investigații, dar nu este un never event chirurgical.\n\nAtelectazia segmentară pe radiografia de control — Incorect: Atelectazia este o complicație frecventă, nu un never event din tabel.\n\nNecesitatea unei unități suplimentare de masă eritrocitară intraoperator — Incorect: Transfuzia intraoperatorie nu figurează ca never event chirurgical în tabel.\n\nConsultul cardiologic post-infarct miocardic perioperator — Incorect: Consultul cardiologic post-IM este o practică recomandată, nu un never event.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 11, Siguranța perioperatorie a pacientului — Situații care nu trebuie să aibă loc niciodată (pagini PDF: 11).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    11
   ],
   "pdfPages": [
    11
   ],
   "section": "Siguranța perioperatorie a pacientului — Situații care nu trebuie să aibă loc niciodată"
  },
  "learningObjective": "Diferențierea evenimentelor „never events” chirurgicale de complicațiile postoperatorii frecvente, dar nu listate ca never events.",
  "optionRationales": [
   "Chirurgia pe partea greșită este listată explicit printre situațiile chirurgicale care nu trebuie să aibă loc.",
   "Febra ≥38,3°C declanșează investigații, dar nu este un never event chirurgical.",
   "Atelectazia este o complicație frecventă, nu un never event din tabel.",
   "Transfuzia intraoperatorie nu figurează ca never event chirurgical în tabel.",
   "Consultul cardiologic post-IM este o practică recomandată, nu un never event."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt evenimente clinice reale din capitol, dar nu apar în lista never events chirurgicale."
  },
  "textbookExpressions": [
   "partea greșită",
   "Situații chirurgicale"
  ]
 },
 {
  "id": "perioperator-adv-009",
  "topicId": "perioperator",
  "type": "CS",
  "stem": "Screeningul de rutină al hemoglobinei preoperatorii se realizează:",
  "options": [
   "La pacienții supuși procedurilor cu pierderi sanguine tipic >500 mL sau cu anemie de cauză necunoscută",
   "La toți asimptomaticii, indiferent de tipul intervenției",
   "Doar la copii, hemoglobină fiind superfluă la adult",
   "Numai postoperator, pentru a defini starea bazală",
   "Ca substitut al anamnezei la urgențe fără istoric"
  ],
  "correct": [
   0
  ],
  "explanation": "La pacienții supuși procedurilor cu pierderi sanguine tipic >500 mL sau cu anemie de cauză necunoscută — Corect: Textul limitează screeningul de rutină al hemoglobinei la proceduri cu pierderi tipic >500 mL sau anemie de cauză necunoscută.\n\nLa toți asimptomaticii, indiferent de tipul intervenției — Incorect: Screeningul neselectiv la asimptomatici este argumentat împotriva, nu în favoare.\n\nDoar la copii, hemoglobină fiind superfluă la adult — Incorect: Indicația nu este rezervată copiilor.\n\nNumai postoperator, pentru a defini starea bazală — Incorect: Starea bazală nu este recomandată la asimptomatici; hemoglobina se evaluează preoperator când e indicată.\n\nCa substitut al anamnezei la urgențe fără istoric — Incorect: Testele nu substituie anamneza, nici la urgențe.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 1, Evaluarea preoperatorie — Screeningul hemoglobinei (pagini PDF: 1).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    1
   ],
   "pdfPages": [
    1
   ],
   "section": "Evaluarea preoperatorie — Screeningul hemoglobinei"
  },
  "learningObjective": "Aplicarea indicației selective de hemoglobină (>500 mL sau anemie nediagnosticată) față de screeningul neselectiv.",
  "optionRationales": [
   "Textul limitează screeningul de rutină al hemoglobinei la proceduri cu pierderi tipic >500 mL sau anemie de cauză necunoscută.",
   "Screeningul neselectiv la asimptomatici este argumentat împotriva, nu în favoare.",
   "Indicația nu este rezervată copiilor.",
   "Starea bazală nu este recomandată la asimptomatici; hemoglobina se evaluează preoperator când e indicată.",
   "Testele nu substituie anamneza, nici la urgențe."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pragul de 500 mL se confundă ușor cu indicația de ionogramă sau de sumar de urină de pe aceeași pagină."
  },
  "textbookExpressions": [
   ">500 mL",
   "anemie de cauză necunoscută"
  ]
 },
 {
  "id": "perioperator-adv-010",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la investigațiile preoperatorii țintite:",
  "options": [
   "Ionograma și creatinina sunt adecvate când istoricul sugerează patologie cronică (diabet, HTA, boală cardiovasculară, renală, hepatică)",
   "Sumarul de urină este recomandat doar la simptome urinare, boală cronică de tract urinar sau proceduri urologice",
   "Scopul consultului de specialitate nu este de a contraindica operația, ci de a cuantifica riscul și de a formula pregătirea",
   "Ionograma de rutină este superfluă la vârstnici, deshidratarea cronică fiind rară",
   "Consultul de specialitate înlocuiește discuția echipei chirurgicale cu pacientul privind indicația operatorie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ionograma și creatinina sunt adecvate când istoricul sugerează patologie cronică (diabet, HTA, boală cardiovasculară, renală, hepatică) — Corect: Textul enumeră patologiile cronice care justifică ionograma și creatinina.\n\nSumarul de urină este recomandat doar la simptome urinare, boală cronică de tract urinar sau proceduri urologice — Corect: Cele trei indicații ale sumarului de urină sunt explicite.\n\nScopul consultului de specialitate nu este de a contraindica operația, ci de a cuantifica riscul și de a formula pregătirea — Corect: Consultul stabilește gradul de risc și pregătirea, nu contraindicația.\n\nIonograma de rutină este superfluă la vârstnici, deshidratarea cronică fiind rară — Incorect: Vârstnicii au risc substanțial de deshidratare cronică, deci ionograma este recomandată.\n\nConsultul de specialitate înlocuiește discuția echipei chirurgicale cu pacientul privind indicația operatorie — Incorect: După cuantificarea riscului, echipa chirurgicală discută indicația cu pacientul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 1, Testele de screening și consulturile de specialitate (pagini PDF: 1).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    1
   ],
   "pdfPages": [
    1
   ],
   "section": "Testele de screening și consulturile de specialitate"
  },
  "learningObjective": "Diferențierea indicațiilor selective de ionogramă/sumar urinar de mitul contraindicației prin consult.",
  "optionRationales": [
   "Textul enumeră patologiile cronice care justifică ionograma și creatinina.",
   "Cele trei indicații ale sumarului de urină sunt explicite.",
   "Consultul stabilește gradul de risc și pregătirea, nu contraindicația.",
   "Vârstnicii au risc substanțial de deshidratare cronică, deci ionograma este recomandată.",
   "După cuantificarea riscului, echipa chirurgicală discută indicația cu pacientul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează indicația de ionogramă la vârstnic și transformă consultul într-un veto operator."
  },
  "textbookExpressions": [
   "sumarului de urină",
   "consultului de specialitate"
  ]
 },
 {
  "id": "perioperator-adv-011",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Disfuncția renală perioperatorie se caracterizează prin:",
  "options": [
   "BRC se definește ca boală organică renală sau scăderea funcției timp de cel puțin 3 luni",
   "Perioperator, cea mai frecventă cauză de IRA este necroza tubulară acută",
   "Riscul de IRA la pacienții chirurgicali este de aproximativ 1%",
   "Fracția de ejecție <35% și indexul cardiac <1,7 L/min/m² sunt factori asociați cu risc crescut de IRA",
   "BRC în stadiu terminal denotă un grad precis de filtrare glomerulară, fără legătură cu dializa"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "BRC se definește ca boală organică renală sau scăderea funcției timp de cel puțin 3 luni — Corect: Pragul de cel puțin 3 luni definește BRC.\n\nPerioperator, cea mai frecventă cauză de IRA este necroza tubulară acută — Corect: NTA este cauza perioperatorie cea mai frecventă de IRA.\n\nRiscul de IRA la pacienții chirurgicali este de aproximativ 1% — Corect: Cifra de aproximativ 1% este citată.\n\nFracția de ejecție <35% și indexul cardiac <1,7 L/min/m² sunt factori asociați cu risc crescut de IRA — Corect: FE <35% și indexul cardiac <1,7 L/min/m² sunt listați ca factori de risc.\n\nBRC în stadiu terminal denotă un grad precis de filtrare glomerulară, fără legătură cu dializa — Incorect: Stadiul terminal indică necesitatea dializei sau a transplantului, nu un grad precis de funcție.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 2, Pacientul cu disfuncție renală — BRC și IRA (pagini PDF: 2).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    2
   ],
   "pdfPages": [
    2
   ],
   "section": "Pacientul cu disfuncție renală — BRC și IRA"
  },
  "learningObjective": "Aplicarea definiției BRC (≥3 luni), a NTA ca cauză perioperatorie dominantă și a riscului de 1%.",
  "optionRationales": [
   "Pragul de cel puțin 3 luni definește BRC.",
   "NTA este cauza perioperatorie cea mai frecventă de IRA.",
   "Cifra de aproximativ 1% este citată.",
   "FE <35% și indexul cardiac <1,7 L/min/m² sunt listați ca factori de risc.",
   "Stadiul terminal indică necesitatea dializei sau a transplantului, nu un grad precis de funcție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează NTA cu cauzele prerenale și confundă „stadiu terminal” cu un prag numeric de RFG."
  },
  "textbookExpressions": [
   "cel puţin 3 luni",
   "necroza tubulară acută"
  ]
 },
 {
  "id": "perioperator-adv-012",
  "topicId": "perioperator",
  "type": "CS",
  "stem": "Identificați afirmația corectă privind hemostaza și analgezia la pacientul cu BRC:",
  "options": [
   "O doză de DDAVP poate fi folosită preoperator în trombocitopatia din BRC, stimulând eliberarea de factor von Willebrand din endoteliu",
   "AINS sunt analgezicul de primă intenție, deoarece nu se acumulează în BRC",
   "Opioidele sunt preferate fără ajustare, riscul de depresie respiratorie fiind neglijabil",
   "DDAVP blochează factorul von Willebrand și este evitat preoperator",
   "Heparinizarea de dializă nu influențează sângerarea perioperatorie"
  ],
  "correct": [
   0
  ],
  "explanation": "O doză de DDAVP poate fi folosită preoperator în trombocitopatia din BRC, stimulând eliberarea de factor von Willebrand din endoteliu — Corect: Textul descrie eliberarea de vWF de către DDAVP și folosirea unei doze preoperatorii.\n\nAINS sunt analgezicul de primă intenție, deoarece nu se acumulează în BRC — Incorect: AINS sunt în general contraindicate din cauza nefrotoxicității.\n\nOpioidele sunt preferate fără ajustare, riscul de depresie respiratorie fiind neglijabil — Incorect: Opioidele se acumulează și cresc riscul de depresie respiratorie.\n\nDDAVP blochează factorul von Willebrand și este evitat preoperator — Incorect: DDAVP stimulează, nu blochează, eliberarea de vWF.\n\nHeparinizarea de dializă nu influențează sângerarea perioperatorie — Incorect: Heparinizarea de dializă și coagulopatia uremică cresc pierderea de sânge.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 3, 2, BRC — DDAVP și analgezia perioperatorie (pagini PDF: 3, 2).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    3,
    2
   ],
   "pdfPages": [
    3,
    2
   ],
   "section": "BRC — DDAVP și analgezia perioperatorie"
  },
  "learningObjective": "Recunoașterea DDAVP ca manevră preoperatorie pentru trombocitopatia uremică.",
  "optionRationales": [
   "Textul descrie eliberarea de vWF de către DDAVP și folosirea unei doze preoperatorii.",
   "AINS sunt în general contraindicate din cauza nefrotoxicității.",
   "Opioidele se acumulează și cresc riscul de depresie respiratorie.",
   "DDAVP stimulează, nu blochează, eliberarea de vWF.",
   "Heparinizarea de dializă și coagulopatia uremică cresc pierderea de sânge."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează rolul DDAVP și promovează AINS, contraindicate explicit în același paragraf."
  },
  "textbookExpressions": [
   "DDAVP",
   "trombocitopatiei"
  ]
 },
 {
  "id": "perioperator-adv-013",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Evaluarea hepatică preoperatorie se caracterizează prin:",
  "options": [
   "Steatohepatita non-alcoolică a devenit cea mai frecventă cauză de boală hepatică cronică în SUA",
   "Testele biochimice hepatice de rutină nu sunt recomandate la asimptomatici fără factori de risc sau semne fizice",
   "Biopsia hepatică rămâne standardul de aur pentru diagnosticul și stadializarea bolii hepatice",
   "Testele hepatice de rutină se cer la orice adult înaintea chirurgiei abdominale, inclusiv la asimptomatici fără risc",
   "Biopsia a fost înlocuită complet de serologie, fără rol diagnostic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Steatohepatita non-alcoolică a devenit cea mai frecventă cauză de boală hepatică cronică în SUA — Corect: NASH este identificată ca cea mai frecventă cauză de boală hepatică cronică în SUA.\n\nTestele biochimice hepatice de rutină nu sunt recomandate la asimptomatici fără factori de risc sau semne fizice — Corect: Absența testelor de rutină la asimptomatici fără risc este explicită.\n\nBiopsia hepatică rămâne standardul de aur pentru diagnosticul și stadializarea bolii hepatice — Corect: Biopsia rămâne standardul de aur pentru diagnostic și stadializare.\n\nTestele hepatice de rutină se cer la orice adult înaintea chirurgiei abdominale, inclusiv la asimptomatici fără risc — Incorect: Textul descurajează testarea de rutină la asimptomatici.\n\nBiopsia a fost înlocuită complet de serologie, fără rol diagnostic — Incorect: Serologia și imagistica sunt adesea adecvate, dar biopsia rămâne standardul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 3, Pacientul cu disfuncție hepatică — Evaluare (pagini PDF: 3).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    3
   ],
   "pdfPages": [
    3
   ],
   "section": "Pacientul cu disfuncție hepatică — Evaluare"
  },
  "learningObjective": "Recunoașterea NASH ca etiologie dominantă și a biopsiei ca standard, față de screeningul neselectiv.",
  "optionRationales": [
   "NASH este identificată ca cea mai frecventă cauză de boală hepatică cronică în SUA.",
   "Absența testelor de rutină la asimptomatici fără risc este explicită.",
   "Biopsia rămâne standardul de aur pentru diagnostic și stadializare.",
   "Textul descurajează testarea de rutină la asimptomatici.",
   "Serologia și imagistica sunt adesea adecvate, dar biopsia rămâne standardul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ierarhia NASH versus hepatita virală clasică și anulează rolul biopsiei."
  },
  "textbookExpressions": [
   "Steatohepatita non-alcoolică",
   "standardul de aur"
  ]
 },
 {
  "id": "perioperator-adv-014",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Sindromul de sevraj etanolic perioperator:",
  "options": [
   "Simptomele majore sunt maximale de obicei în ziua 3, dar pot apărea și la 10 zile de la oprirea alcoolului",
   "Netratat, delirium tremens are mortalitate postoperatorie de până la 50%, redusă la 10% cu tratament adecvat",
   "Benzodiazepinele instituite profilactic pot preveni simptomele majore de sevraj",
   "Debutul simptomelor ușoare este imediat la 30 de minute de la ultima ingestie",
   "Mortalitatea delirium tremens rămâne 50% și sub tratament, benzodiazepinele fiind inutile"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Simptomele majore sunt maximale de obicei în ziua 3, dar pot apărea și la 10 zile de la oprirea alcoolului — Corect: Maximul în ziua 3 și excepția de 10 zile sunt citate.\n\nNetratat, delirium tremens are mortalitate postoperatorie de până la 50%, redusă la 10% cu tratament adecvat — Corect: Cifrele 50% netratat și 10% tratat sunt explicite.\n\nBenzodiazepinele instituite profilactic pot preveni simptomele majore de sevraj — Corect: Benzodiazepinele profilactice sunt menționate ca prevenție a simptomelor majore.\n\nDebutul simptomelor ușoare este imediat la 30 de minute de la ultima ingestie — Incorect: Simptomele ușoare apar între ziua 1 și ziua 5, nu la 30 de minute.\n\nMortalitatea delirium tremens rămâne 50% și sub tratament, benzodiazepinele fiind inutile — Incorect: Tratamentul reduce mortalitatea de la 50% la 10%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 4, Disfuncție hepatică — Sevrajul etanolic (pagini PDF: 4).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    4
   ],
   "pdfPages": [
    4
   ],
   "section": "Disfuncție hepatică — Sevrajul etanolic"
  },
  "learningObjective": "Aplicarea ferestrei zilei 3 (până la 10 zile) și a reducerii mortalității DT de la 50% la 10%.",
  "optionRationales": [
   "Maximul în ziua 3 și excepția de 10 zile sunt citate.",
   "Cifrele 50% netratat și 10% tratat sunt explicite.",
   "Benzodiazepinele profilactice sunt menționate ca prevenție a simptomelor majore.",
   "Simptomele ușoare apar între ziua 1 și ziua 5, nu la 30 de minute.",
   "Tratamentul reduce mortalitatea de la 50% la 10%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează fereastra zilei 3 cu debutul imediat și anulează beneficiul benzodiazepinelor asupra DT."
  },
  "textbookExpressions": [
   "delirium tremens",
   "până la 50%"
  ]
 },
 {
  "id": "perioperator-adv-015",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Conform Tabelului 1-3, substituția glucocorticoidă în stres chirurgical:",
  "options": [
   "La proceduri minore sau anestezie locală (ex. hernie inghinală) nu este necesară suplimentarea, în afara dozei matinale",
   "Stresul moderat (revascularizare de membru, artroplastie de șold) primește 50 mg hidrocortizon IV înainte și 25 mg la 8 ore, 24 de ore",
   "Stresul major (esofagogastrectomie, proctocolectomie) primește 100 mg hidrocortizon IV la inducție și 50 mg la 8 ore, 24 de ore",
   "O doză echivalentă cu prednison 20 mg/zi cel puțin 3 săptămâni se poate asocia cu supresia HPA",
   "Stresul minor impune 200 mg hidrocortizon la 4 ore, fără doza matinală obișnuită"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "La proceduri minore sau anestezie locală (ex. hernie inghinală) nu este necesară suplimentarea, în afara dozei matinale — Corect: Absența suplimentării la proceduri minore, cu păstrarea dozei matinale, este primul rând.\n\nStresul moderat (revascularizare de membru, artroplastie de șold) primește 50 mg hidrocortizon IV înainte și 25 mg la 8 ore, 24 de ore — Corect: Schema 50+25 mg/8 h/24 h definește stresul moderat.\n\nStresul major (esofagogastrectomie, proctocolectomie) primește 100 mg hidrocortizon IV la inducție și 50 mg la 8 ore, 24 de ore — Corect: Schema 100+50 mg/8 h/24 h definește stresul major.\n\nO doză echivalentă cu prednison 20 mg/zi cel puțin 3 săptămâni se poate asocia cu supresia HPA — Corect: Pragul 20 mg prednison ≥3 săptămâni este enunțat în text.\n\nStresul minor impune 200 mg hidrocortizon la 4 ore, fără doza matinală obișnuită — Incorect: Stresul minor nu se suplimentează; 200 mg/4 h nu figurează.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 5, 4, Insuficiența adrenală — Tabelul 1-3 (pagini PDF: 5, 4).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    5,
    4
   ],
   "pdfPages": [
    5,
    4
   ],
   "section": "Insuficiența adrenală — Tabelul 1-3"
  },
  "learningObjective": "Aplicarea dozelor diferențiate după magnitudinea stresului și a pragului prednison 20 mg/3 săptămâni.",
  "optionRationales": [
   "Absența suplimentării la proceduri minore, cu păstrarea dozei matinale, este primul rând.",
   "Schema 50+25 mg/8 h/24 h definește stresul moderat.",
   "Schema 100+50 mg/8 h/24 h definește stresul major.",
   "Pragul 20 mg prednison ≥3 săptămâni este enunțat în text.",
   "Stresul minor nu se suplimentează; 200 mg/4 h nu figurează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează dozele dintre stresul minor și cel major, pe un tabel ușor de oglindit."
  },
  "textbookExpressions": [
   "20 mg/zi",
   "50 mg hidrocortizon"
  ]
 },
 {
  "id": "perioperator-adv-016",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "La gravida traumatizată sunt adevărate afirmațiile:",
  "options": [
   "Pierderea fătului apare în 15% dintre gravidele cu traumă severă",
   "Dezlipirea de placentă poate urma și traumatismelor minore, fără sângerare vaginală constantă",
   "Un uter dur, mai mare decât pentru vârsta gestațională, ridică suspiciunea de ruptură de placentă",
   "La orice femeie de vârstă fertilă cu traumă trebuie efectuat un test de sarcină",
   "Semnele vitale materne normale exclud suferința fetală, volumului plasmatic neavând efect de mascare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Pierderea fătului apare în 15% dintre gravidele cu traumă severă — Corect: Cifra de 15% este explicită.\n\nDezlipirea de placentă poate urma și traumatismelor minore, fără sângerare vaginală constantă — Corect: Dezlipirea după trauma minoră, fără sângerare vaginală invariabilă, este descrisă.\n\nUn uter dur, mai mare decât pentru vârsta gestațională, ridică suspiciunea de ruptură de placentă — Corect: Uterul dur, mai mare decât vârsta gestațională, este semnul citat.\n\nLa orice femeie de vârstă fertilă cu traumă trebuie efectuat un test de sarcină — Corect: Testul de sarcină la vârsta fertilă este o regulă.\n\nSemnele vitale materne normale exclud suferința fetală, volumului plasmatic neavând efect de mascare — Incorect: Volumul plasmatic crescut maschează hipovolemia și suferința fetală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 6, Pacienta însărcinată — Trauma (pagini PDF: 6).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    6
   ],
   "pdfPages": [
    6
   ],
   "section": "Pacienta însărcinată — Trauma"
  },
  "learningObjective": "Integrarea ratei de 15% a pierderii fetale cu semnele dezlipirii și cu testul de sarcină la vârsta fertilă.",
  "optionRationales": [
   "Cifra de 15% este explicită.",
   "Dezlipirea după trauma minoră, fără sângerare vaginală invariabilă, este descrisă.",
   "Uterul dur, mai mare decât vârsta gestațională, este semnul citat.",
   "Testul de sarcină la vârsta fertilă este o regulă.",
   "Volumul plasmatic crescut maschează hipovolemia și suferința fetală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă mascarea hipovolemiei de către volumul plasmatic, pe fondul cifrei de 15% ușor de uitat."
  },
  "textbookExpressions": [
   "15% din gravidele",
   "test de sarcină"
  ]
 },
 {
  "id": "perioperator-adv-017",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Consimțământul informat în chirurgia electivă:",
  "options": [
   "Este un proces, nu un moment și nici o formalitate, prin care pacientul și chirurgul stabilesc de comun acord un plan",
   "Formularul de consimțământ este documentul legal care consemnează rezultatul discuțiilor",
   "Se obține într-o singură discuție, în sala de operație, imediat înainte de inducție",
   "Se reduce la semnarea unui formular fără discuție prealabilă",
   "Opțiunea de a nu se opera nu trebuie prezentată, pentru a nu confunda pacientul"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este un proces, nu un moment și nici o formalitate, prin care pacientul și chirurgul stabilesc de comun acord un plan — Corect: Definiția ca proces, nu moment/formalitate, este explicită.\n\nFormularul de consimțământ este documentul legal care consemnează rezultatul discuțiilor — Corect: Formularul consemnează rezultatul discuțiilor.\n\nSe obține într-o singură discuție, în sala de operație, imediat înainte de inducție — Incorect: Textul precizează sesiuni multiple, nu o discuție unică în sală.\n\nSe reduce la semnarea unui formular fără discuție prealabilă — Incorect: Textul respinge reducerea la o formalitate unică.\n\nOpțiunea de a nu se opera nu trebuie prezentată, pentru a nu confunda pacientul — Incorect: Opțiunea de a nu se opera face parte din discuția onestă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 7, 6, Managementul operator — Consimțământul informat (pagini PDF: 7, 6).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    7,
    6
   ],
   "pdfPages": [
    7,
    6
   ],
   "section": "Managementul operator — Consimțământul informat"
  },
  "learningObjective": "Diferențierea procesului de consimțământ de formularul legal, față de semnătura de ultim moment.",
  "optionRationales": [
   "Definiția ca proces, nu moment/formalitate, este explicită.",
   "Formularul consemnează rezultatul discuțiilor.",
   "Textul precizează sesiuni multiple, nu o discuție unică în sală.",
   "Textul respinge reducerea la o formalitate unică.",
   "Opțiunea de a nu se opera face parte din discuția onestă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce consimțământul la semnătura din sală și exclude opțiunea non-operatorie, contrar paragrafului."
  },
  "textbookExpressions": [
   "Consimţământul informat",
   "proces, nu un moment"
  ]
 },
 {
  "id": "perioperator-adv-018",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Sondele digestive perioperatorii se caracterizează prin:",
  "options": [
   "Sonda nazo-gastrică modernă de tip sifon trebuie folosită în aspirație continuă, aerul din lumenul mic prevenind colabarea peretelui gastric",
   "Poziția sondei de alimentație se confirmă fără dubiu doar prin radiografie sau palpare intraoperatorie; auscultația epigastrică poate fi înșelătoare",
   "Sondele nazo-enterale destinate alimentației trebuie să fie moi, cu lumen subțire",
   "Auscultația zgomotelor de aer în epigastru confirmă poziția gastrică, radiografia fiind superfluă",
   "Nimic nu trebuie administrat pe sonda de alimentație până la confirmarea poziției, exceptând contrastul intrapulmonar de rutină"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sonda nazo-gastrică modernă de tip sifon trebuie folosită în aspirație continuă, aerul din lumenul mic prevenind colabarea peretelui gastric — Corect: Mecanismul de sifon și indicația de aspirație continuă sunt explicite.\n\nPoziția sondei de alimentație se confirmă fără dubiu doar prin radiografie sau palpare intraoperatorie; auscultația epigastrică poate fi înșelătoare — Corect: Radiografia sau palparea intraoperatorie sunt singurele confirmări sigure.\n\nSondele nazo-enterale destinate alimentației trebuie să fie moi, cu lumen subțire — Corect: Calibrul subțire și consistența moale definesc sondele de alimentație.\n\nAuscultația zgomotelor de aer în epigastru confirmă poziția gastrică, radiografia fiind superfluă — Incorect: Auscultația poate fi pozitivă și pe o sondă endobronșică.\n\nNimic nu trebuie administrat pe sonda de alimentație până la confirmarea poziției, exceptând contrastul intrapulmonar de rutină — Incorect: Administrarea de contrast intrapulmonar poate fi letală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 8, Sonde și tuburi de dren — Tractul gastro-intestinal (pagini PDF: 8).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    8
   ],
   "pdfPages": [
    8
   ],
   "section": "Sonde și tuburi de dren — Tractul gastro-intestinal"
  },
  "learningObjective": "Recunoașterea aspirației continue pe sonda-sifon și a radiografiei ca unică confirmare a sondei de alimentație.",
  "optionRationales": [
   "Mecanismul de sifon și indicația de aspirație continuă sunt explicite.",
   "Radiografia sau palparea intraoperatorie sunt singurele confirmări sigure.",
   "Calibrul subțire și consistența moale definesc sondele de alimentație.",
   "Auscultația poate fi pozitivă și pe o sondă endobronșică.",
   "Administrarea de contrast intrapulmonar poate fi letală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă auscultația epigastrică într-un criteriu de siguranță, capcana clasică a sondei intrapulmonare."
  },
  "textbookExpressions": [
   "aspiraţie continuă",
   "poziţionarea sondei"
  ]
 },
 {
  "id": "perioperator-adv-019",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Drenurile și sondele toracice/urinare, potrivit capitolului:",
  "options": [
   "Tubul toracic este conectat la un sistem cu aspirație de obicei 20 cm H2O, care evacuează aer/lichid și previne reintrarea aerului („drenaj sub apă”)",
   "Drenajele Penrose sunt pasive, moi, din latex, și constituie o cale cu dublu-sens pentru bacterii",
   "Sondele de traheostomă sunt rezervate ventilației de două ore, canula orotraheală fiind pentru luni",
   "Drenajul Penrose, conectat la aspirație continuă, este steril și unidirecțional",
   "Tuburile toracice nu evacuează sângele, fiind rezervate doar pneumotoraxului uscat"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Tubul toracic este conectat la un sistem cu aspirație de obicei 20 cm H2O, care evacuează aer/lichid și previne reintrarea aerului („drenaj sub apă”) — Corect: Cele trei funcții și nivelul de 20 cm H2O sunt enumerate.\n\nDrenajele Penrose sunt pasive, moi, din latex, și constituie o cale cu dublu-sens pentru bacterii — Corect: Caracterul pasiv, latexul și calea bacteriană dublă sunt explicite.\n\nSondele de traheostomă sunt rezervate ventilației de două ore, canula orotraheală fiind pentru luni — Incorect: Traheostomia este pentru ventilație pe termen lung; orotraheala pentru termen scurt.\n\nDrenajul Penrose, conectat la aspirație continuă, este steril și unidirecțional — Incorect: Penrose nu se conectează la aspirație; Davol-ul este aspirativ.\n\nTuburile toracice nu evacuează sângele, fiind rezervate doar pneumotoraxului uscat — Incorect: Tubul toracic evacuează aer, sânge sau lichid.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 9, Sonde de tract respirator, urinar și drenuri (pagini PDF: 9).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    9
   ],
   "pdfPages": [
    9
   ],
   "section": "Sonde de tract respirator, urinar și drenuri"
  },
  "learningObjective": "Contrastarea drenajului toracic sub apă (20 cm H2O) cu Penrose-ul pasiv bidirecțional.",
  "optionRationales": [
   "Cele trei funcții și nivelul de 20 cm H2O sunt enumerate.",
   "Caracterul pasiv, latexul și calea bacteriană dublă sunt explicite.",
   "Traheostomia este pentru ventilație pe termen lung; orotraheala pentru termen scurt.",
   "Penrose nu se conectează la aspirație; Davol-ul este aspirativ.",
   "Tubul toracic evacuează aer, sânge sau lichid."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează Penrose (pasiv) cu drenul aspirativ și limitează toracostomia la aer, omitând hemotoraxul."
  },
  "textbookExpressions": [
   "20 cm H2O",
   "drenaje Penrose"
  ]
 },
 {
  "id": "perioperator-adv-020",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Complicațiile de plagă și infecția locului operator perioperator:",
  "options": [
   "Evacuarea spontană de lichid seros din plagă este un semn premergător al dehiscenței fasciale acute și impune examinarea/închiderea în sală",
   "Infecția de plagă chirurgicală este a doua cea mai frecventă infecție nosocomială și apare la 2–5% dintre pacienții chirurgicali",
   "Semnele locale urmează tetrada inflamației: rubor, tumor, calor, dolor; tahicardia poate fi primul semn",
   "În lipsa profilaxiei, TEV afectează postoperator 25% dintre pacienți",
   "Dehiscența fascială se tratează conservator la pat, lichidul seros fiind un semn de vindecare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Evacuarea spontană de lichid seros din plagă este un semn premergător al dehiscenței fasciale acute și impune examinarea/închiderea în sală — Corect: Lichidul seros ca semn premergător și conduita de reintervenție sunt explicite.\n\nInfecția de plagă chirurgicală este a doua cea mai frecventă infecție nosocomială și apare la 2–5% dintre pacienții chirurgicali — Corect: Locul doi nosocomial și intervalul 2–5% sunt citate.\n\nSemnele locale urmează tetrada inflamației: rubor, tumor, calor, dolor; tahicardia poate fi primul semn — Corect: Tetrada inflamației și tahicardia precoce sunt descrise.\n\nÎn lipsa profilaxiei, TEV afectează postoperator 25% dintre pacienți — Corect: Cifra de 25% fără profilaxie este de pe pagina anterioară.\n\nDehiscența fascială se tratează conservator la pat, lichidul seros fiind un semn de vindecare — Incorect: Lichidul seros impune reintervenție, nu expectativă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 10, 9, Dehiscența plăgii, IPC și TEV (pagini PDF: 10, 9).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    10,
    9
   ],
   "pdfPages": [
    10,
    9
   ],
   "section": "Dehiscența plăgii, IPC și TEV"
  },
  "learningObjective": "Asocierea lichidului seros ca precursor al eviscerației cu incidențele 2–5% (IPC) și 25% (TEV fără profilaxie).",
  "optionRationales": [
   "Lichidul seros ca semn premergător și conduita de reintervenție sunt explicite.",
   "Locul doi nosocomial și intervalul 2–5% sunt citate.",
   "Tetrada inflamației și tahicardia precoce sunt descrise.",
   "Cifra de 25% fără profilaxie este de pe pagina anterioară.",
   "Lichidul seros impune reintervenție, nu expectativă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează lichidul seros ca semn de vindecare și permutează 2–5% cu 25%, două procente din pagini alăturate."
  },
  "textbookExpressions": [
   "2-5%",
   "25%"
  ]
 },
 {
  "id": "perioperator-adv-021",
  "topicId": "perioperator",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la Tabelul 1-1 (contraindicații ale chirurgiei elective hepatice):",
  "options": [
   "Hepatita virală acută, hepatita alcoolică, insuficiența hepatică acută, IRA, cardiomiopatia, hipoxemia și coagulopatia severă refractară figurează ca contraindicații",
   "Steatoza hepatică ușoară la un pacient Child A contraindică intervenția electivă",
   "Hipertensiunea arterială controlată, fără afectare de organ-țintă, este o contraindicație tabelată",
   "NASH, cauză frecventă de boală hepatică cronică, contraindică prin ea însăși chirurgia electivă",
   "Coagulopatia corectată prin tratament rămâne o contraindicație, identică celei refractare"
  ],
  "correct": [
   0
  ],
  "explanation": "Hepatita virală acută, hepatita alcoolică, insuficiența hepatică acută, IRA, cardiomiopatia, hipoxemia și coagulopatia severă refractară figurează ca contraindicații — Corect: Textul enumeră aceste entități în Tabelul 1-1.\n\nSteatoza hepatică ușoară la un pacient Child A contraindică intervenția electivă — Incorect: Child A tolerează, în general, chirurgia electivă; steatoza ușoară nu figurează în tabel.\n\nHipertensiunea arterială controlată, fără afectare de organ-țintă, este o contraindicație tabelată — Incorect: HTA controlată nu este o rubrică a Tabelului 1-1.\n\nNASH, cauză frecventă de boală hepatică cronică, contraindică prin ea însăși chirurgia electivă — Incorect: NASH este etiologia cea mai frecventă, nu o contraindicație automată.\n\nCoagulopatia corectată prin tratament rămâne o contraindicație, identică celei refractare — Incorect: Doar coagulopatia severă în ciuda tratamentului este tabelată, nu cea corectată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 3, Pacientul cu disfuncție hepatică — Tabelul 1-1 (pagini PDF: 3).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    3
   ],
   "pdfPages": [
    3
   ],
   "section": "Pacientul cu disfuncție hepatică — Tabelul 1-1"
  },
  "learningObjective": "Recunoașterea listei tabelate de contraindicații acute/refractare, distinctă de Child A sau de NASH compensată.",
  "optionRationales": [
   "Textul enumeră aceste entități în Tabelul 1-1.",
   "Child A tolerează, în general, chirurgia electivă; steatoza ușoară nu figurează în tabel.",
   "HTA controlată nu este o rubrică a Tabelului 1-1.",
   "NASH este etiologia cea mai frecventă, nu o contraindicație automată.",
   "Doar coagulopatia severă în ciuda tratamentului este tabelată, nu cea corectată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde contraindicațiile acute asupra Child A/NASH și asupra coagulopatiei deja corectate."
  },
  "textbookExpressions": [
   "Insuficienţa hepatică acută",
   "Coagulopatia severă"
  ]
 },
 {
  "id": "perioperator-adv-022",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Clasificarea Child-Pugh din Tabelul 1-2 se caracterizează prin:",
  "options": [
   "Clasa A: albumină >3,5 g/dL, bilirubină <2,0 mg/dL, ascită absentă, mortalitate <10%",
   "Clasa B: albumină 3,0–3,5 g/dL, bilirubină 2,0–3,0 mg/dL, mortalitate 40%",
   "Clasa C: albumină <3,0 g/dL, bilirubină >3,0 mg/dL, mortalitate >80%",
   "Scorul MELD variază între 6 și 40, valoarea 6 reflectând o formă ușoară, iar 40 boală severă",
   "Clasa A asociază mortalitate >80%, identică clasei C, albumina fiind >4,5 g/dL"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Clasa A: albumină >3,5 g/dL, bilirubină <2,0 mg/dL, ascită absentă, mortalitate <10% — Corect: Rândul A al tabelului fixează albumina >3,5, bilirubina <2,0 și mortalitatea <10%.\n\nClasa B: albumină 3,0–3,5 g/dL, bilirubină 2,0–3,0 mg/dL, mortalitate 40% — Corect: Rândul B fixează 3,0–3,5 / 2,0–3,0 și mortalitatea 40%.\n\nClasa C: albumină <3,0 g/dL, bilirubină >3,0 mg/dL, mortalitate >80% — Corect: Rândul C fixează <3,0 / >3,0 și mortalitatea >80%.\n\nScorul MELD variază între 6 și 40, valoarea 6 reflectând o formă ușoară, iar 40 boală severă — Corect: Intervalul MELD 6–40 este enunțat pe pagina anterioară.\n\nClasa A asociază mortalitate >80%, identică clasei C, albumina fiind >4,5 g/dL — Incorect: Mortalitatea >80% aparține clasei C, nu A.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 4, 3, Disfuncție hepatică — Tabelul 1-2 Child-Pugh și intervalul MELD (pagini PDF: 4, 3).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    4,
    3
   ],
   "pdfPages": [
    4,
    3
   ],
   "section": "Disfuncție hepatică — Tabelul 1-2 Child-Pugh și intervalul MELD"
  },
  "learningObjective": "Aplicarea pragurilor de albumină/bilirubină și a mortalităților tabelate (<10%, 40%, >80%), plus intervalul MELD 6–40.",
  "optionRationales": [
   "Rândul A al tabelului fixează albumina >3,5, bilirubina <2,0 și mortalitatea <10%.",
   "Rândul B fixează 3,0–3,5 / 2,0–3,0 și mortalitatea 40%.",
   "Rândul C fixează <3,0 / >3,0 și mortalitatea >80%.",
   "Intervalul MELD 6–40 este enunțat pe pagina anterioară.",
   "Mortalitatea >80% aparține clasei C, nu A."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează mortalitățile <10% / 40% / >80% între clasele A–C și inversează albumina clasei A."
  },
  "textbookExpressions": [
   ">3,5",
   "Precar >80"
  ]
 },
 {
  "id": "perioperator-adv-023",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Managementul perioperator al insulinei și al glucozei include:",
  "options": [
   "Insulina cu durată intermediară sau lungă: 2/3 din doza de seară în noaptea dinainte și 1/2 din doza de dimineață în dimineața intervenției",
   "Infuzie continuă de glucoză 5% pentru un aport de 10 g glucoză/oră",
   "Monitorizarea glicemiei cel puțin la fiecare 6 ore intra- și postoperator",
   "Infuzia i.v. de insulină 1–3 U/oră este preferată la pacientul instabil glicemic",
   "Insulina rapidă se administrează neschimbat în dimineața intervenției, pacientul fiind deja în post"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Insulina cu durată intermediară sau lungă: 2/3 din doza de seară în noaptea dinainte și 1/2 din doza de dimineață în dimineața intervenției — Corect: Schema 2/3 seara și 1/2 dimineața este explicită pentru durată intermediară/lungă.\n\nInfuzie continuă de glucoză 5% pentru un aport de 10 g glucoză/oră — Corect: Aportul de 10 g glucoză/oră pe glucoză 5% este citat.\n\nMonitorizarea glicemiei cel puțin la fiecare 6 ore intra- și postoperator — Corect: Intervalul de cel puțin 6 ore este cerut.\n\nInfuzia i.v. de insulină 1–3 U/oră este preferată la pacientul instabil glicemic — Corect: Infuzia 1–3 U/oră este metoda preferată la instabil.\n\nInsulina rapidă se administrează neschimbat în dimineața intervenției, pacientul fiind deja în post — Incorect: Insulina rapidă/scurtă se oprește când pacientul nu se mai alimentează, de obicei la miezul nopții.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 5, Pacientul diabetic — Scheme de insulină și glucoză 10 g/oră (pagini PDF: 5).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    5
   ],
   "pdfPages": [
    5
   ],
   "section": "Pacientul diabetic — Scheme de insulină și glucoză 10 g/oră"
  },
  "learningObjective": "Diferențierea reducerii 2/3–1/2 a insulinelor lente de oprirea rapidelor și de infuzia de 10 g glucoză/oră cu glucometrie la 6 ore.",
  "optionRationales": [
   "Schema 2/3 seara și 1/2 dimineața este explicită pentru durată intermediară/lungă.",
   "Aportul de 10 g glucoză/oră pe glucoză 5% este citat.",
   "Intervalul de cel puțin 6 ore este cerut.",
   "Infuzia 1–3 U/oră este metoda preferată la instabil.",
   "Insulina rapidă/scurtă se oprește când pacientul nu se mai alimentează, de obicei la miezul nopții."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Continuă insulina rapidă în dimineața operației și uită schema 2/3–1/2, două reguli din aceeași listă numerotată."
  },
  "textbookExpressions": [
   "2/3 din doza",
   "I O g glucoză"
  ]
 },
 {
  "id": "perioperator-adv-024",
  "topicId": "perioperator",
  "type": "CS",
  "stem": "Sindromul Wernicke-Korsakoff perioperator constă în:",
  "options": [
   "Ataxie, oftalmoplegie și confuzie, putând apărea dacă tiamina nu este administrată înaintea glucozei",
   "Paralizie flască izolată, fără tulburare de conștiență, prin deficit de vitamina K",
   "Necroză cutanată la inițierea warfarinei, ca în deficitul de proteină C",
   "Delirium tremens maximal în ziua 1, fără tremor sau tahicardie",
   "Hipoglicemie prin exces de insulină, independent de tiamină"
  ],
  "correct": [
   0
  ],
  "explanation": "Ataxie, oftalmoplegie și confuzie, putând apărea dacă tiamina nu este administrată înaintea glucozei — Corect: Textul definește sindromul prin ataxie, oftalmoplegie și confuzie dacă tiamina nu precede glucoza.\n\nParalizie flască izolată, fără tulburare de conștiență, prin deficit de vitamina K — Incorect: Paralizia flască și vitamina K țin de alte deficite, nu de acest sindrom.\n\nNecroză cutanată la inițierea warfarinei, ca în deficitul de proteină C — Incorect: Necroza cutanată Coumadin aparține hipercoagulabilității, nu capitolului de tiamină.\n\nDelirium tremens maximal în ziua 1, fără tremor sau tahicardie — Incorect: Delirium tremens are alt tablou (halucinații, tremor, agitație, tahicardie) și alt timing.\n\nHipoglicemie prin exces de insulină, independent de tiamină — Incorect: Hipoglicemia prin insulină este o entitate distinctă; mecanismul citat este omiterea tiaminei înaintea glucozei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 4, Disfuncție hepatică — Tiamină și Wernicke-Korsakoff (pagini PDF: 4).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    4
   ],
   "pdfPages": [
    4
   ],
   "section": "Disfuncție hepatică — Tiamină și Wernicke-Korsakoff"
  },
  "learningObjective": "Recunoașterea triadei ataxie–oftalmoplegie–confuzie și a ordinii tiamină înaintea glucozei.",
  "optionRationales": [
   "Textul definește sindromul prin ataxie, oftalmoplegie și confuzie dacă tiamina nu precede glucoza.",
   "Paralizia flască și vitamina K țin de alte deficite, nu de acest sindrom.",
   "Necroza cutanată Coumadin aparține hipercoagulabilității, nu capitolului de tiamină.",
   "Delirium tremens are alt tablou (halucinații, tremor, agitație, tahicardie) și alt timing.",
   "Hipoglicemia prin insulină este o entitate distinctă; mecanismul citat este omiterea tiaminei înaintea glucozei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește triada Wernicke cu DT, cu necroza Coumadin sau cu hipoglicemia insulinică, toate din vecinătatea perioperatorie."
  },
  "textbookExpressions": [
   "Wernicke-Kor",
   "înaintea glucozei"
  ]
 },
 {
  "id": "perioperator-adv-025",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Controlul preoperator al ascitei la pacientul hepatic se caracterizează prin:",
  "options": [
   "Restricție sodată până la maxim 2 g/zi, alături de combinația spironolactonă și furosemid",
   "Controlul poate include șunt porto-sistemic transjugular intrahepatic (TIPS)",
   "Restricția sodată se relaxează la 6–8 g/zi, diureticele fiind evitate de teama encefalopatiei",
   "TIPS este contraindicat, ascită trebuind lăsată să se reacumuleze nerestricționat",
   "Spironolactona este evitată, furosemidul izolat fiind schema unică"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Restricție sodată până la maxim 2 g/zi, alături de combinația spironolactonă și furosemid — Corect: Pragul de maxim 2 g/zi și combinația spironolactonă-furosemid sunt explicite.\n\nControlul poate include șunt porto-sistemic transjugular intrahepatic (TIPS) — Corect: TIPS este menționat ca alternativă de control preoperator.\n\nRestricția sodată se relaxează la 6–8 g/zi, diureticele fiind evitate de teama encefalopatiei — Incorect: Textul cere maxim 2 g/zi, nu 6–8 g.\n\nTIPS este contraindicat, ascită trebuind lăsată să se reacumuleze nerestricționat — Incorect: Ascita reacumulată crește dehiscența și eventrațiile; controlul preoperator este recomandat.\n\nSpironolactona este evitată, furosemidul izolat fiind schema unică — Incorect: Schema citată este combinația, nu furosemidul izolat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 4, Ascita perioperatorie — 2 g sodiu, spironolactonă-furosemid, TIPS (pagini PDF: 4).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    4
   ],
   "pdfPages": [
    4
   ],
   "section": "Ascita perioperatorie — 2 g sodiu, spironolactonă-furosemid, TIPS"
  },
  "learningObjective": "Aplicarea restricției de 2 g/zi și a diureticelor antialdosteronice plus TIPS, versus liberalizarea sodiului.",
  "optionRationales": [
   "Pragul de maxim 2 g/zi și combinația spironolactonă-furosemid sunt explicite.",
   "TIPS este menționat ca alternativă de control preoperator.",
   "Textul cere maxim 2 g/zi, nu 6–8 g.",
   "Ascita reacumulată crește dehiscența și eventrațiile; controlul preoperator este recomandat.",
   "Schema citată este combinația, nu furosemidul izolat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Ridică sodiul la 6–8 g și anulează TIPS/spironolactona, trei măsuri din același paragraf de ascită."
  },
  "textbookExpressions": [
   "2g/zi",
   "spironolactonă şi furosemid"
  ]
 },
 {
  "id": "perioperator-adv-026",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Modificările fiziologice și traumatice din sarcină includ:",
  "options": [
   "Compresia venoasă pelvină poate produce sau exacerba boala hemoroidală la 1/3 din gravide",
   "Una din 14 sarcini se complică cu traumă",
   "CID este o complicație de rău augur, apărând în decurs de ore de la dezlipirea de placentă sau de la embolia cu lichid amniotic",
   "Leucocitoza de sarcină crește specificitatea leucocitelor ca marker de peritonită",
   "Semnele clasice de șoc hemoragic exclud suferința fetală, perfuzia uterină fiind protejată prioritar"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Compresia venoasă pelvină poate produce sau exacerba boala hemoroidală la 1/3 din gravide — Corect: Cifra de 1/3 pentru boala hemoroidală este explicită.\n\nUna din 14 sarcini se complică cu traumă — Corect: Una din 14 sarcini se complică cu traumă.\n\nCID este o complicație de rău augur, apărând în decurs de ore de la dezlipirea de placentă sau de la embolia cu lichid amniotic — Corect: Fereastra de ore până la CID după abruptie sau embolie amniotică este citată.\n\nLeucocitoza de sarcină crește specificitatea leucocitelor ca marker de peritonită — Incorect: Leucocitoza de sarcină reduce, nu crește, utilitatea analizei.\n\nSemnele clasice de șoc hemoragic exclud suferința fetală, perfuzia uterină fiind protejată prioritar — Incorect: Homeostazia maternă se menține cu prețul scăderii perfuziei uterine; semnele de șoc semnifică suferință fetală în evoluție.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 6, Pacienta însărcinată — Hemoroizi 1/3, traumă 1/14, CID (pagini PDF: 6).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    6
   ],
   "pdfPages": [
    6
   ],
   "section": "Pacienta însărcinată — Hemoroizi 1/3, traumă 1/14, CID"
  },
  "learningObjective": "Integrarea prevalenței hemoroidale, a ratei de traumă 1/14 și a CID precoce după abruptie/embolie amniotică.",
  "optionRationales": [
   "Cifra de 1/3 pentru boala hemoroidală este explicită.",
   "Una din 14 sarcini se complică cu traumă.",
   "Fereastra de ore până la CID după abruptie sau embolie amniotică este citată.",
   "Leucocitoza de sarcină reduce, nu crește, utilitatea analizei.",
   "Homeostazia maternă se menține cu prețul scăderii perfuziei uterine; semnele de șoc semnifică suferință fetală în evoluție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează mascarea hipovolemiei/suferinței fetale și tratează leucocitoza fiziologică ca marker specific."
  },
  "textbookExpressions": [
   "I /3 din gravide",
   "Una din 14 sarcini"
  ]
 },
 {
  "id": "perioperator-adv-027",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "În locul consimțământului când pacientul nu poate decide, capitolul descrie:",
  "options": [
   "„Înlocuitorul în luarea deciziilor” (surrogate decision maker) este, de obicei, membrul familiei cu cel mai apropiat grad de rudenie",
   "Directiva în avans este un document legal care informează asupra nivelului de îngrijire dorit dacă pacientul nu își mai poate exprima dorințele",
   "Consimțământul se obține doar prin semnătura din sala de operație, înlocuitorul fiind superfluu",
   "Directiva în avans înlocuiește foaia de observație și anulează discuția cu familia",
   "Formularul de consimțământ este identic cu procesul de consimțământ informat, fără valoare legală"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "„Înlocuitorul în luarea deciziilor” (surrogate decision maker) este, de obicei, membrul familiei cu cel mai apropiat grad de rudenie — Corect: Definiția surrogate decision maker și rudenie cea mai apropiată sunt explicite.\n\nDirectiva în avans este un document legal care informează asupra nivelului de îngrijire dorit dacă pacientul nu își mai poate exprima dorințele — Corect: Rolul directivei în avans ca document despre nivelul de îngrijire este enunțat.\n\nConsimțământul se obține doar prin semnătura din sala de operație, înlocuitorul fiind superfluu — Incorect: Textul descrie sesiuni multiple și căutarea unui înlocuitor, nu o semnătură unică în sală.\n\nDirectiva în avans înlocuiește foaia de observație și anulează discuția cu familia — Incorect: Directiva informează perspectiva pacientului; nu anulează foaia de observație.\n\nFormularul de consimțământ este identic cu procesul de consimțământ informat, fără valoare legală — Incorect: Formularul este documentul legal care consemnează rezultatul discuțiilor, distinct de proces.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 7, 6, Managementul operator — Înlocuitorul decizional și directiva în avans (pagini PDF: 7, 6).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    7,
    6
   ],
   "pdfPages": [
    7,
    6
   ],
   "section": "Managementul operator — Înlocuitorul decizional și directiva în avans"
  },
  "learningObjective": "Diferențierea înlocuitorului familial și a directivei în avans de formularul legal și de semnătura de ultim moment.",
  "optionRationales": [
   "Definiția surrogate decision maker și rudenie cea mai apropiată sunt explicite.",
   "Rolul directivei în avans ca document despre nivelul de îngrijire este enunțat.",
   "Textul descrie sesiuni multiple și căutarea unui înlocuitor, nu o semnătură unică în sală.",
   "Directiva informează perspectiva pacientului; nu anulează foaia de observație.",
   "Formularul este documentul legal care consemnează rezultatul discuțiilor, distinct de proces."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce consimțământul la semnătura din sală și confundă formularul cu procesul, două distincții din același capitol."
  },
  "textbookExpressions": [
   "înlocuitor în luarea",
   "directiva în avans"
  ]
 },
 {
  "id": "perioperator-adv-028",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Îngrijirea plăgilor per secundam și soluțiile de meșă:",
  "options": [
   "Vindecarea per secundam lasă marginile neapoziționate; o meșă îmbibată cu ser fiziologic umple cavitatea, fără împachetare strânsă care ar produce ischemie",
   "Soluția de acid acetic 0,25%, soluția Dakin (hipoclorit de sodiu) și iod-povidona inhibă fibroblaștii în culturi, fără avantaj față de serul fiziologic steril",
   "Cateterele „pigtail” sunt un exemplu de drenaj pasiv, montate de obicei de radiologul intervenționist",
   "Meșa trebuie împachetată strâns până la ischemie, pentru a steriliza cavitatea",
   "Soluțiile de acid acetic și Dakin vindecă mai rapid decât serul, înlocuind drenajul"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Vindecarea per secundam lasă marginile neapoziționate; o meșă îmbibată cu ser fiziologic umple cavitatea, fără împachetare strânsă care ar produce ischemie — Corect: Neapoziționarea, meșa cu ser și interdicția împachetării strânse sunt explicite.\n\nSoluția de acid acetic 0,25%, soluția Dakin (hipoclorit de sodiu) și iod-povidona inhibă fibroblaștii în culturi, fără avantaj față de serul fiziologic steril — Corect: Cele trei soluții, inhibiția fibroblastului și absența avantajului față de ser sunt citate.\n\nCateterele „pigtail” sunt un exemplu de drenaj pasiv, montate de obicei de radiologul intervenționist — Corect: Pigtail-ul ca drenaj pasiv plasat de radiologul intervenționist este enunțat.\n\nMeșa trebuie împachetată strâns până la ischemie, pentru a steriliza cavitatea — Incorect: Împachetarea strânsă este descurajată tocmai pentru ischemia tisulară.\n\nSoluțiile de acid acetic și Dakin vindecă mai rapid decât serul, înlocuind drenajul — Incorect: Niciuna dintre soluții nu oferă avantaj comparativ cu serul fiziologic steril.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 9, Îngrijirea plăgilor — Per secundam, Dakin și cateter pigtail (pagini PDF: 9).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    9
   ],
   "pdfPages": [
    9
   ],
   "section": "Îngrijirea plăgilor — Per secundam, Dakin și cateter pigtail"
  },
  "learningObjective": "Contrastarea meșei laxe cu ser de soluțiile antiseptice fără avantaj (acetic 0,25%, Dakin) și a pigtail-ului pasiv ghidat imagistic.",
  "optionRationales": [
   "Neapoziționarea, meșa cu ser și interdicția împachetării strânse sunt explicite.",
   "Cele trei soluții, inhibiția fibroblastului și absența avantajului față de ser sunt citate.",
   "Pigtail-ul ca drenaj pasiv plasat de radiologul intervenționist este enunțat.",
   "Împachetarea strânsă este descurajată tocmai pentru ischemia tisulară.",
   "Niciuna dintre soluții nu oferă avantaj comparativ cu serul fiziologic steril."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează regula meșei laxe și atribuie acidului acetic/Dakin un avantaj inexistent față de ser."
  },
  "textbookExpressions": [
   "acid acetic 0,25%",
   "soluţia Dakin"
  ]
 },
 {
  "id": "perioperator-adv-029",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Evaluarea febrei postoperatorii, potrivit ghidului SCCM, se caracterizează prin:",
  "options": [
   "La temperatură ≥38,3°C se inițiază investigații privind cauza",
   "Primul pas analizează circumstanțele (locație, durată internare, ventilație, instrumentare, medicație, tipul operației)",
   "Al doilea pas este examenul fizic țintit; testele de laborator și culturile urmează abia după acești doi pași",
   "Culturi și imagistică neselectivă se cer imediat, înaintea anamnezei, la orice febră de 37,2°C",
   "Febra postoperatorie este considerată stare normală, deci nu se investighează"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "La temperatură ≥38,3°C se inițiază investigații privind cauza — Corect: Pragul ≥38,3°C este citat ca moment de inițiere a investigațiilor.\n\nPrimul pas analizează circumstanțele (locație, durată internare, ventilație, instrumentare, medicație, tipul operației) — Corect: Analiza circumstanțelor este descrisă ca primul pas.\n\nAl doilea pas este examenul fizic țintit; testele de laborator și culturile urmează abia după acești doi pași — Corect: Examenul țintit precede testele; culturile fără suspiciune sunt rezervate unor situații speciale.\n\nCulturi și imagistică neselectivă se cer imediat, înaintea anamnezei, la orice febră de 37,2°C — Incorect: Pragul nu este 37,2°C, iar testele neselective sunt descurajate la majoritatea chirurgicalilor.\n\nFebra postoperatorie este considerată stare normală, deci nu se investighează — Incorect: Textul precizează că mulți o consideră, în mod greșit, o stare normală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 10, 11, Febra postoperatorie — Pragul 38,3°C și secvența de evaluare (pagini PDF: 10, 11).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    10,
    11
   ],
   "pdfPages": [
    10,
    11
   ],
   "section": "Febra postoperatorie — Pragul 38,3°C și secvența de evaluare"
  },
  "learningObjective": "Aplicarea pragului SCCM de 38,3°C și a ordinii circumstanțe → examen țintit → teste, versus panoul neselectiv.",
  "optionRationales": [
   "Pragul ≥38,3°C este citat ca moment de inițiere a investigațiilor.",
   "Analiza circumstanțelor este descrisă ca primul pas.",
   "Examenul țintit precede testele; culturile fără suspiciune sunt rezervate unor situații speciale.",
   "Pragul nu este 37,2°C, iar testele neselective sunt descurajate la majoritatea chirurgicalilor.",
   "Textul precizează că mulți o consideră, în mod greșit, o stare normală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Coboară pragul la 37,2°C și inversează ordinea (culturi înaintea examenului), contrar ghidului SCCM."
  },
  "textbookExpressions": [
   "38,3°C",
   "Criticai Care Medicine"
  ]
 },
 {
  "id": "perioperator-adv-030",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Inițiativele de siguranță perioperatorie descrise în capitol includ:",
  "options": [
   "Raportul IOM „To Err is Human” (2000) estimează 44.000–98.000 de decese anuale prin erori medicale în spitalele americane",
   "NSQIP oferă chirurgului estimarea rezultatului ajustată în funcție de risc",
   "Campania „100.000 Lives” a promovat 6 strategii (echipă de răspuns rapid, SCA bazat pe dovezi, prevenția ADE, CVC, IPC, PAV) și a salvat circa 122.000 de vieți",
   "Mortalitatea prin eroare medicală este neglijabilă, IOM estimând sub 1.000 de decese/an",
   "NSQIP înlocuiește profilaxia antibiotică perioperatorie, cele 6 strategii fiind abandonate"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Raportul IOM „To Err is Human” (2000) estimează 44.000–98.000 de decese anuale prin erori medicale în spitalele americane — Corect: Cifrele 44.000–98.000 și titlul raportului sunt explicite.\n\nNSQIP oferă chirurgului estimarea rezultatului ajustată în funcție de risc — Corect: NSQIP ca estimare ajustată de risc este enunțat.\n\nCampania „100.000 Lives” a promovat 6 strategii (echipă de răspuns rapid, SCA bazat pe dovezi, prevenția ADE, CVC, IPC, PAV) și a salvat circa 122.000 de vieți — Corect: Cele 6 strategii și cifra de circa 122.000 de vieți sunt listate pe pagina următoare.\n\nMortalitatea prin eroare medicală este neglijabilă, IOM estimând sub 1.000 de decese/an — Incorect: Intervalul IOM este cu două ordine de mărime peste 1.000.\n\nNSQIP înlocuiește profilaxia antibiotică perioperatorie, cele 6 strategii fiind abandonate — Incorect: NSQIP completează, nu înlocuiește, pachetele de prevenție (inclusiv antibioticele perioperatorii).\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 11, 12, Siguranța pacientului — IOM, NSQIP și campania 100.000 Lives (pagini PDF: 11, 12).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    11,
    12
   ],
   "pdfPages": [
    11,
    12
   ],
   "section": "Siguranța pacientului — IOM, NSQIP și campania 100.000 Lives"
  },
  "learningObjective": "Fixarea intervalului 44.000–98.000, a rolului NSQIP și a celor 6 pachete care au salvat circa 122.000 de vieți.",
  "optionRationales": [
   "Cifrele 44.000–98.000 și titlul raportului sunt explicite.",
   "NSQIP ca estimare ajustată de risc este enunțat.",
   "Cele 6 strategii și cifra de circa 122.000 de vieți sunt listate pe pagina următoare.",
   "Intervalul IOM este cu două ordine de mărime peste 1.000.",
   "NSQIP completează, nu înlocuiește, pachetele de prevenție (inclusiv antibioticele perioperatorii)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Minimizează mortalitatea IOM la 1.000 și anulează pachetele 100.000 Lives, două cifre ușor de permutat."
  },
  "textbookExpressions": [
   "44.000-98.000",
   "122.000 de vieţi"
  ]
 },
 {
  "id": "perioperator-adv-031",
  "topicId": "perioperator",
  "type": "CS",
  "stem": "Identificați afirmația corectă privind indicațiile dializei perioperatorii la pacientul cu BRC sau IRA:",
  "options": [
   "Dializa poate fi necesară la supraîncărcare de volum cu ICC la un pacient anuric, la hiperkaliemie amenințătoare de viață sau la acidoză refractară",
   "Dializa se indică de principiu la pacientul Child A, indiferent de bilanțul hidric",
   "Hipokaliemia ușoară, fără aritmie, impune hemodializă de urgență înaintea herniei inghinale",
   "Acidoza metabolică corectată prin bicarbonat rămâne o indicație neselectivă de dializă",
   "Monitorizarea CVP sau Doppler esofagian înlocuiește dializa în anuria cu edem pulmonar"
  ],
  "correct": [
   0
  ],
  "explanation": "Dializa poate fi necesară la supraîncărcare de volum cu ICC la un pacient anuric, la hiperkaliemie amenințătoare de viață sau la acidoză refractară — Corect: Textul enumeră aceste trei situații ca exemple de dializă când echilibrul hidric sau detoxifierea sunt inadecvate.\n\nDializa se indică de principiu la pacientul Child A, indiferent de bilanțul hidric — Incorect: Child-Pugh privește ficatul, nu indicația de dializă renală.\n\nHipokaliemia ușoară, fără aritmie, impune hemodializă de urgență înaintea herniei inghinale — Incorect: Textul citează hiperkaliemia amenințătoare, nu hipokaliemia ușoară.\n\nAcidoza metabolică corectată prin bicarbonat rămâne o indicație neselectivă de dializă — Incorect: Acidoza refractară, nu cea deja corectată, figurează ca indicație.\n\nMonitorizarea CVP sau Doppler esofagian înlocuiește dializa în anuria cu edem pulmonar — Incorect: Monitorizarea invazivă ghidează volemia; nu înlocuiește dializa în anuria cu ICC.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 3, Disfuncție renală — Indicațiile dializei perioperatorii (pagini PDF: 3).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    3
   ],
   "pdfPages": [
    3
   ],
   "section": "Disfuncție renală — Indicațiile dializei perioperatorii"
  },
  "learningObjective": "Recunoașterea triadei supraîncărcare-anurie/ICC, hiperkaliemie amenințătoare și acidoză refractară, distinctă de Child sau de hipokaliemie.",
  "optionRationales": [
   "Textul enumeră aceste trei situații ca exemple de dializă când echilibrul hidric sau detoxifierea sunt inadecvate.",
   "Child-Pugh privește ficatul, nu indicația de dializă renală.",
   "Textul citează hiperkaliemia amenințătoare, nu hipokaliemia ușoară.",
   "Acidoza refractară, nu cea deja corectată, figurează ca indicație.",
   "Monitorizarea invazivă ghidează volemia; nu înlocuiește dializa în anuria cu ICC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează hiperkaliemia amenințătoare cu hipokaliemia și mută Child A pe dializa renală."
  },
  "textbookExpressions": [
   "hiperkalemia ameninţătoare",
   "acidoza refractară"
  ]
 },
 {
  "id": "perioperator-adv-032",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Mortalitatea perioperatorie în funcție de scorul MELD se caracterizează prin:",
  "options": [
   "La colecistectomia laparoscopică, MELD <8 asociază mortalitate 0%, iar MELD >8 aproximativ 6%",
   "În chirurgia abdominală (alta decât colecistectomia laparoscopică), ortopedică și cardiovasculară, MELD ≤7 asociază mortalitate 5%",
   "Același grup de intervenții: MELD 8–11 asociază mortalitate 10%",
   "Același grup: MELD 12–15 asociază mortalitate 25%",
   "Colecistectomia laparoscopică cu MELD <8 asociază mortalitate 25%, identică intervalului 12–15"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "La colecistectomia laparoscopică, MELD <8 asociază mortalitate 0%, iar MELD >8 aproximativ 6% — Corect: Perechea <8 → 0% și >8 → ≈6% este explicită pentru colecistectomia laparoscopică.\n\nÎn chirurgia abdominală (alta decât colecistectomia laparoscopică), ortopedică și cardiovasculară, MELD ≤7 asociază mortalitate 5% — Corect: Pragul ≤7 cu 5% este enunțat pentru chirurgia abdominală/ortopedică/cardiovasculară.\n\nAcelași grup de intervenții: MELD 8–11 asociază mortalitate 10% — Corect: Intervalul 8–11 cu 10% este citat.\n\nAcelași grup: MELD 12–15 asociază mortalitate 25% — Corect: Intervalul 12–15 cu 25% este citat.\n\nColecistectomia laparoscopică cu MELD <8 asociază mortalitate 25%, identică intervalului 12–15 — Incorect: 25% aparține intervalului 12–15, nu colecistectomiei cu MELD <8.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 3, Disfuncție hepatică — Praguri MELD și mortalitate (pagini PDF: 3).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    3
   ],
   "pdfPages": [
    3
   ],
   "section": "Disfuncție hepatică — Praguri MELD și mortalitate"
  },
  "learningObjective": "Aplicarea perechilor 0%/6% (colecistectomie) versus 5%/10%/25% (alte intervenții) pe intervalele MELD tabelate.",
  "optionRationales": [
   "Perechea <8 → 0% și >8 → ≈6% este explicită pentru colecistectomia laparoscopică.",
   "Pragul ≤7 cu 5% este enunțat pentru chirurgia abdominală/ortopedică/cardiovasculară.",
   "Intervalul 8–11 cu 10% este citat.",
   "Intervalul 12–15 cu 25% este citat.",
   "25% aparține intervalului 12–15, nu colecistectomiei cu MELD <8."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește 0% al MELD <8 cu 25% al intervalului 12–15, două cifre consecutive din același paragraf."
  },
  "textbookExpressions": [
   "MELD <8",
   "mortalitate de 25%"
  ]
 },
 {
  "id": "perioperator-adv-033",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Un diabetic cu plenitudine postprandială prelungită, constipație și clapotaj gastric pe stomac care ar trebui gol, este evaluat preoperator. Sunt adevărate afirmațiile:",
  "options": [
   "Gastropareza prin neuropatie vegetativă întârzie evacuarea și crește riscul de aspirație; clapotajul pe stomacul care ar trebui gol o sugerează",
   "Hiperglicemia alterează în special activitatea fagocitară; pulsul periferic poate fi prezent chiar în ischemie tisulară, vaselor mici fiind afectate preferențial",
   "Afectarea vaselor mici se extinde profund, cruțând tegumentul, ca un con cu baza la periferie și vârful proximal; un panarițiu sau o plagă minoră de picior pot duce la amputație sau deces",
   "Gastropareza crește specificitatea leucocitozei ca marker de peritonită, clapotajul fiind un semn de evacuare accelerată",
   "Pulsul absent la glezne este regula ischemiei diabetice de vase mici, tegumentul fiind primul afectat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Gastropareza prin neuropatie vegetativă întârzie evacuarea și crește riscul de aspirație; clapotajul pe stomacul care ar trebui gol o sugerează — Corect: Plenitudinea, constipația și clapotajul pe stomacul care ar trebui gol sunt semnele citate de gastropareză.\n\nHiperglicemia alterează în special activitatea fagocitară; pulsul periferic poate fi prezent chiar în ischemie tisulară, vaselor mici fiind afectate preferențial — Corect: Alterarea fagocitozei și prezența pulsului în ischemia de vase mici sunt explicite.\n\nAfectarea vaselor mici se extinde profund, cruțând tegumentul, ca un con cu baza la periferie și vârful proximal; un panarițiu sau o plagă minoră de picior pot duce la amputație sau deces — Corect: Metafora conului și gravitatea panarițiului/plăgii de picior sunt enunțate.\n\nGastropareza crește specificitatea leucocitozei ca marker de peritonită, clapotajul fiind un semn de evacuare accelerată — Incorect: Gastropareza întârzie, nu accelerează, evacuarea; leucocitoza de sarcină, nu gastropareza, reduce utilitatea analizei.\n\nPulsul absent la glezne este regula ischemiei diabetice de vase mici, tegumentul fiind primul afectat — Incorect: Textul precizează că pulsul poate fi prezent; tegumentul este cruțat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 4, Pacientul diabetic — Gastropareză, fagocitoză și vase mici (pagini PDF: 4).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    4
   ],
   "pdfPages": [
    4
   ],
   "section": "Pacientul diabetic — Gastropareză, fagocitoză și vase mici"
  },
  "learningObjective": "Integrarea clapotajului ca semn de gastropareză, a defectului fagocitar și a pattern-ului conic de ischemie a vaselor mici.",
  "optionRationales": [
   "Plenitudinea, constipația și clapotajul pe stomacul care ar trebui gol sunt semnele citate de gastropareză.",
   "Alterarea fagocitozei și prezența pulsului în ischemia de vase mici sunt explicite.",
   "Metafora conului și gravitatea panarițiului/plăgii de picior sunt enunțate.",
   "Gastropareza întârzie, nu accelerează, evacuarea; leucocitoza de sarcină, nu gastropareza, reduce utilitatea analizei.",
   "Textul precizează că pulsul poate fi prezent; tegumentul este cruțat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează prezența pulsului în ischemia de vase mici și tratează clapotajul ca evacuare accelerată."
  },
  "textbookExpressions": [
   "Clapotajul gastric",
   "con cu baza"
  ]
 },
 {
  "id": "perioperator-adv-034",
  "topicId": "perioperator",
  "type": "CS",
  "stem": "Pentru perspectiva dozelor de substituție, pacienții cu sindrom Cushing produc echivalentul a:",
  "options": [
   "36 mg hidrocortizon/zi",
   "20 mg prednison/zi, identic pragului de supresie HPA",
   "100 mg hidrocortizon la inducție, ca stresul chirurgical major",
   "50 mg hidrocortizon IV înaintea artroplastiei de șold",
   "200 mg hidrocortizon la 4 ore, ca stresul minor"
  ],
  "correct": [
   0
  ],
  "explanation": "36 mg hidrocortizon/zi — Corect: Textul precizează echivalentul de 36 mg hidrocortizon/zi produs de pacienții cu sindrom Cushing.\n\n20 mg prednison/zi, identic pragului de supresie HPA — Incorect: 20 mg prednison ≥3 săptămâni este pragul de supresie HPA, nu producția cushingoidă.\n\n100 mg hidrocortizon la inducție, ca stresul chirurgical major — Incorect: 100 mg la inducție este schema stresului major, nu producția endogenă.\n\n50 mg hidrocortizon IV înaintea artroplastiei de șold — Incorect: 50+25 mg definește stresul moderat din Tabelul 1-3.\n\n200 mg hidrocortizon la 4 ore, ca stresul minor — Incorect: Stresul minor nu se suplimentează; 200 mg/4 h nu figurează.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 5, Insuficiența adrenală — Producția din sindromul Cushing (pagini PDF: 5).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    5
   ],
   "pdfPages": [
    5
   ],
   "section": "Insuficiența adrenală — Producția din sindromul Cushing"
  },
  "learningObjective": "Fixarea cifrei de 36 mg hidrocortizon/zi ca referință fiziologică, distinctă de pragul prednison 20 mg și de schemele Tabelului 1-3.",
  "optionRationales": [
   "Textul precizează echivalentul de 36 mg hidrocortizon/zi produs de pacienții cu sindrom Cushing.",
   "20 mg prednison ≥3 săptămâni este pragul de supresie HPA, nu producția cushingoidă.",
   "100 mg la inducție este schema stresului major, nu producția endogenă.",
   "50+25 mg definește stresul moderat din Tabelul 1-3.",
   "Stresul minor nu se suplimentează; 200 mg/4 h nu figurează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 36 mg/zi cu 20 mg prednison sau cu dozele 50/100 mg din Tabelul 1-3."
  },
  "textbookExpressions": [
   "36 mg hidrocortizon",
   "sindrom Cushing"
  ]
 },
 {
  "id": "perioperator-adv-035",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Modificările respiratorii și digestive din sarcină includ:",
  "options": [
   "Frecvența respiratorie și volumul curent cresc; ventilația pe minut crescută scade PaCO2, în ciuda reducerii CRF și a volumului rezidual prin uterul gravid",
   "Cauza principală a refluxului este evacuarea gastrică întârziată prin progesteron, care reduce contractilitatea musculaturii netede; producția acidă este doar ușor crescută",
   "PaCO2 crește prin hipoventilație, CRF fiind crescută de mobilitatea diafragmatică",
   "Refluxul se datorează hipersecreției acide ca mecanism principal, progesteronul accelerând evacuarea",
   "Grețurile din primul trimestru exclud patologia chirurgicală digestivă, fără diagnostic diferențial"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Frecvența respiratorie și volumul curent cresc; ventilația pe minut crescută scade PaCO2, în ciuda reducerii CRF și a volumului rezidual prin uterul gravid — Corect: Creșterea FR/VT, scăderea PaCO2 și reducerea CRF/VR sunt explicite.\n\nCauza principală a refluxului este evacuarea gastrică întârziată prin progesteron, care reduce contractilitatea musculaturii netede; producția acidă este doar ușor crescută — Corect: Progesteronul ca cauză principală a evacuării întârziate, cu aciditate doar ușor crescută, este enunțat.\n\nPaCO2 crește prin hipoventilație, CRF fiind crescută de mobilitatea diafragmatică — Incorect: Textul descrie scăderea, nu creșterea, PaCO2 și reducerea CRF.\n\nRefluxul se datorează hipersecreției acide ca mecanism principal, progesteronul accelerând evacuarea — Incorect: Hipersecreția este secundară; mecanismul principal este evacuarea întârziată.\n\nGrețurile din primul trimestru exclud patologia chirurgicală digestivă, fără diagnostic diferențial — Incorect: Grețurile din T1 pot fi confundate cu afecțiuni chirurgicale, deci diagnosticul diferențial rămâne.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 6, Pacienta însărcinată — Ventilație, CRF și reflux prin progesteron (pagini PDF: 6).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    6
   ],
   "pdfPages": [
    6
   ],
   "section": "Pacienta însărcinată — Ventilație, CRF și reflux prin progesteron"
  },
  "learningObjective": "Contrastarea hipocapniei prin hiperventilație (CRF redusă) de mecanismul progesteronic al refluxului, versus hipersecreția ca cauză unică.",
  "optionRationales": [
   "Creșterea FR/VT, scăderea PaCO2 și reducerea CRF/VR sunt explicite.",
   "Progesteronul ca cauză principală a evacuării întârziate, cu aciditate doar ușor crescută, este enunțat.",
   "Textul descrie scăderea, nu creșterea, PaCO2 și reducerea CRF.",
   "Hipersecreția este secundară; mecanismul principal este evacuarea întârziată.",
   "Grețurile din T1 pot fi confundate cu afecțiuni chirurgicale, deci diagnosticul diferențial rămâne."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează PaCO2/CRF și atribuie refluxul hipersecreției, două mecanisme din același paragraf de fiziologie gravidă."
  },
  "textbookExpressions": [
   "volumul curent",
   "acţiunii progesteronului"
  ]
 },
 {
  "id": "perioperator-adv-036",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "La gravida traumatizată, explorarea chirurgicală este indicată pentru:",
  "options": [
   "Hemoragie intraperitoneală",
   "Traumatism al organelor cavitare, plagă penetrantă abdominală sau injurie uterină/fetală",
   "Explorările paraclinice cu valoare diagnostică trebuie recomandate, nu evitate de teama efectului teratogen",
   "Monitorizarea fetală se amână până după naștere, oxigenarea maternă fiind superfluă",
   "Plaga penetrantă abdominală se observă, laparotomia fiind rezervată doar fracturilor de membre"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hemoragie intraperitoneală — Corect: Hemoragia intraperitoneală este prima indicație enumerată.\n\nTraumatism al organelor cavitare, plagă penetrantă abdominală sau injurie uterină/fetală — Corect: Organele cavitare, plaga penetrantă și injuria uterină/fetală completează lista.\n\nExplorările paraclinice cu valoare diagnostică trebuie recomandate, nu evitate de teama efectului teratogen — Corect: Textul cere explorări diagnostice, nu evitarea lor.\n\nMonitorizarea fetală se amână până după naștere, oxigenarea maternă fiind superfluă — Incorect: Monitorizarea fetală precoce este esențială; resuscitarea fetală cere volum și oxigenare materne.\n\nPlaga penetrantă abdominală se observă, laparotomia fiind rezervată doar fracturilor de membre — Incorect: Plaga penetrantă abdominală este tocmai o indicație de explorare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 6, Pacienta însărcinată — Indicațiile explorării în traumă (pagini PDF: 6).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    6
   ],
   "pdfPages": [
    6
   ],
   "section": "Pacienta însărcinată — Indicațiile explorării în traumă"
  },
  "learningObjective": "Recunoașterea celor patru indicații de explorare și a principiului de a nu evita diagnosticul imagistic de teama teratogenezei.",
  "optionRationales": [
   "Hemoragia intraperitoneală este prima indicație enumerată.",
   "Organele cavitare, plaga penetrantă și injuria uterină/fetală completează lista.",
   "Textul cere explorări diagnostice, nu evitarea lor.",
   "Monitorizarea fetală precoce este esențială; resuscitarea fetală cere volum și oxigenare materne.",
   "Plaga penetrantă abdominală este tocmai o indicație de explorare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă teama de teratogeneză într-o interdicție imagistică și amână monitorizarea fetală."
  },
  "textbookExpressions": [
   "plagă penetrantă",
   "efectului teratogen"
  ]
 },
 {
  "id": "perioperator-adv-037",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Foaia de observație, potrivit capitolului, se caracterizează prin:",
  "options": [
   "Are trei obiective: consemnarea statusului și a raționamentului, transmiterea instrucțiunilor în rubrica de tratament și consemnarea evenimentelor din îngrijire",
   "Consemnarea imediat postoperator notează complicații, pierderi sanguine, refacere volemică și diureză",
   "Biletul de externare cuprinde diagnosticul principal, rezumatul evoluției, tratamentul după externare, destinația, nivelul de activitate și planul de urmărire, fără fiecare detaliu al internării",
   "Copierea din foaia electronică poate propaga informații false sau denaturate și trebuie folosită responsabil",
   "Biletul de externare trebuie să reproducă fiecare rezultat de laborator din spitalizare, cele trei obiective fiind superfluă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Are trei obiective: consemnarea statusului și a raționamentului, transmiterea instrucțiunilor în rubrica de tratament și consemnarea evenimentelor din îngrijire — Corect: Cele trei obiective sunt enumerate explicit.\n\nConsemnarea imediat postoperator notează complicații, pierderi sanguine, refacere volemică și diureză — Corect: Elementele notei imediat postoperatorii sunt listate.\n\nBiletul de externare cuprinde diagnosticul principal, rezumatul evoluției, tratamentul după externare, destinația, nivelul de activitate și planul de urmărire, fără fiecare detaliu al internării — Corect: Conținutul biletului de externare și interdicția detaliului exhaustiv sunt enunțate.\n\nCopierea din foaia electronică poate propaga informații false sau denaturate și trebuie folosită responsabil — Corect: Avertismentul privind copierea electronică este citat.\n\nBiletul de externare trebuie să reproducă fiecare rezultat de laborator din spitalizare, cele trei obiective fiind superfluă — Incorect: Textul cere un bilet concis, nu transcrierea fiecărui detaliu.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 7, Documentația — Trei roluri ale foii și biletul de externare (pagini PDF: 7).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    7
   ],
   "pdfPages": [
    7
   ],
   "section": "Documentația — Trei roluri ale foii și biletul de externare"
  },
  "learningObjective": "Fixarea celor trei obiective, a conținutului notei intraoperatorii și a biletului concis, plus riscul copy-paste electronic.",
  "optionRationales": [
   "Cele trei obiective sunt enumerate explicit.",
   "Elementele notei imediat postoperatorii sunt listate.",
   "Conținutul biletului de externare și interdicția detaliului exhaustiv sunt enunțate.",
   "Avertismentul privind copierea electronică este citat.",
   "Textul cere un bilet concis, nu transcrierea fiecărui detaliu."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă biletul concis într-o transcriere exhaustivă și anulează cele trei obiective din același paragraf de documentație."
  },
  "textbookExpressions": [
   "obiective principale",
   "Biletul de externare"
  ]
 },
 {
  "id": "perioperator-adv-038",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "În recomandările medicale, înștiințarea medicului este cerută, între altele, când:",
  "options": [
   "Diureza scade sub 30 mL/oră",
   "Drenajul toracic depășește 100 mL/oră",
   "Investigațiile de laborator „de rutină” sau „zilnice” sunt standardul de urmărire, fără reper temporal",
   "Hematocritul se cere o singură dată, fără fereastră (ex. la 6 ore timp de 24 de ore)",
   "Poziționarea pacientului nu influențează aspirația pe sonda de alimentație"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Diureza scade sub 30 mL/oră — Corect: Pragul <30 mL/oră este exemplul explicit de înștiințare.\n\nDrenajul toracic depășește 100 mL/oră — Corect: Pragul >100 mL/oră pentru drenajul toracic este citat în aceeași paranteză.\n\nInvestigațiile de laborator „de rutină” sau „zilnice” sunt standardul de urmărire, fără reper temporal — Incorect: Textul califică investigațiile „de rutină”/„zilnice” drept risipă, de evitat.\n\nHematocritul se cere o singură dată, fără fereastră (ex. la 6 ore timp de 24 de ore) — Incorect: Exemplul cerut este hematocrit la 6 ore timp de 24 de ore, cu reper temporal.\n\nPoziționarea pacientului nu influențează aspirația pe sonda de alimentație — Incorect: Poziționarea este esențială în prevenția aspirației la alimentația pe sondă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 8, Recomandări medicale — Praguri 30 mL/oră și 100 mL/oră (pagini PDF: 8).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    8
   ],
   "pdfPages": [
    8
   ],
   "section": "Recomandări medicale — Praguri 30 mL/oră și 100 mL/oră"
  },
  "learningObjective": "Aplicarea pragurilor de alarmă (diureză <30 mL/oră, drenaj toracic >100 mL/oră) versus interdicția analizelor „zilnice” neselective.",
  "optionRationales": [
   "Pragul <30 mL/oră este exemplul explicit de înștiințare.",
   "Pragul >100 mL/oră pentru drenajul toracic este citat în aceeași paranteză.",
   "Textul califică investigațiile „de rutină”/„zilnice” drept risipă, de evitat.",
   "Exemplul cerut este hematocrit la 6 ore timp de 24 de ore, cu reper temporal.",
   "Poziționarea este esențială în prevenția aspirației la alimentația pe sondă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează pragurile 30/100 mL și promovează analizele zilnice neselective, contrar aceluiași paragraf de ordine."
  },
  "textbookExpressions": [
   "<30 mL/oră",
   "> 100 mL/oră"
  ]
 },
 {
  "id": "perioperator-adv-039",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Drenurile chirurgicale și sondele urinare/respiratorii se caracterizează prin:",
  "options": [
   "Drenurile cu sistem închis de aspirație, uzual Jackson-Pratt și Hemovac, evacuează colecții prezente sau potențiale, conectate la un burduf pliabil",
   "Drenurile Davol (aspirative cu sifon) sunt voluminoase, relativ rigide, pe aspirație continuă, pentru drenaj dens sau particulat",
   "Tuburile de nefrostomie se plasează în pelvisul renal, amonte de o obstrucție sau de o anastomoză ureterală delicată",
   "Sondele de traheostomă sunt rezervate ventilației de două ore, canula orotraheală fiind pentru luni",
   "Jackson-Pratt este un drenaj pasiv din latex, identic Penrose, fără recipient compresibil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Drenurile cu sistem închis de aspirație, uzual Jackson-Pratt și Hemovac, evacuează colecții prezente sau potențiale, conectate la un burduf pliabil — Corect: JP/Hemovac, colecțiile și burduful pliabil sunt explicite.\n\nDrenurile Davol (aspirative cu sifon) sunt voluminoase, relativ rigide, pe aspirație continuă, pentru drenaj dens sau particulat — Corect: Davol: volum, rigiditate, aspirație continuă și drenaj particulat sunt citate.\n\nTuburile de nefrostomie se plasează în pelvisul renal, amonte de o obstrucție sau de o anastomoză ureterală delicată — Corect: Sediul în pelvisul renal și indicațiile (obstrucție/anastomoză) sunt enunțate.\n\nSondele de traheostomă sunt rezervate ventilației de două ore, canula orotraheală fiind pentru luni — Incorect: Traheostomia este pentru termen lung; orotraheala pentru termen scurt.\n\nJackson-Pratt este un drenaj pasiv din latex, identic Penrose, fără recipient compresibil — Incorect: Penrose este pasiv din latex; JP/Hemovac sunt aspirative închise.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 9, Sonde și drenuri — JP/Hemovac, Davol și nefrostomie (pagini PDF: 9).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    9
   ],
   "pdfPages": [
    9
   ],
   "section": "Sonde și drenuri — JP/Hemovac, Davol și nefrostomie"
  },
  "learningObjective": "Diferențierea drenului închis aspirativ (JP/Hemovac) și a Davol-ului rigid de nefrostomie, versus confuzia cu Penrose sau inversarea traheostomă/orotraheală.",
  "optionRationales": [
   "JP/Hemovac, colecțiile și burduful pliabil sunt explicite.",
   "Davol: volum, rigiditate, aspirație continuă și drenaj particulat sunt citate.",
   "Sediul în pelvisul renal și indicațiile (obstrucție/anastomoză) sunt enunțate.",
   "Traheostomia este pentru termen lung; orotraheala pentru termen scurt.",
   "Penrose este pasiv din latex; JP/Hemovac sunt aspirative închise."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează JP (închis aspirativ) cu Penrose și limitează traheostomia la două ore, două distincții din pagini alăturate."
  },
  "textbookExpressions": [
   "Jackson-Pratt",
   "Davol"
  ]
 },
 {
  "id": "perioperator-adv-040",
  "topicId": "perioperator",
  "type": "CM",
  "stem": "Datele epidemiologice și conduita în infecția de plagă chirurgicală includ:",
  "options": [
   "Dintre peste 27 de milioane de intervenții anuale, peste 500.000 asociază infecții de plagă, reprezentând un sfert din infecțiile nosocomiale",
   "Drenajul prompt minimizează consecințele, antibioticele având un rol secundar în absența circumstanțelor agravante; persistența tahicardiei, febrei sau ileusului sugerează o localizare profundă",
   "Infecția de plagă este cea mai rară infecție nosocomială, sub 1% dintre intervenții",
   "Antibioticele înlocuiesc drenajul, tahicardia precoce fiind un semn de vindecare",
   "Cele 500.000 de cazuri reprezintă totalul infecțiilor nosocomiale, nu un sfert"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Dintre peste 27 de milioane de intervenții anuale, peste 500.000 asociază infecții de plagă, reprezentând un sfert din infecțiile nosocomiale — Corect: Cifrele 27 de milioane, 500.000 și un sfert din nosocomiale sunt explicite.\n\nDrenajul prompt minimizează consecințele, antibioticele având un rol secundar în absența circumstanțelor agravante; persistența tahicardiei, febrei sau ileusului sugerează o localizare profundă — Corect: Rolul secundar al antibioticelor și semnele de infecție profundă sunt enunțate.\n\nInfecția de plagă este cea mai rară infecție nosocomială, sub 1% dintre intervenții — Incorect: Textul o plasează ca a doua cea mai frecventă nosocomială, la 2–5% dintre chirurgicali.\n\nAntibioticele înlocuiesc drenajul, tahicardia precoce fiind un semn de vindecare — Incorect: Drenajul, nu antibioticele izolate, este manevra cheie; tahicardia poate fi primul semn de infecție.\n\nCele 500.000 de cazuri reprezintă totalul infecțiilor nosocomiale, nu un sfert — Incorect: 500.000 este un sfert din nosocomiale, nu totalul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 1, p. 10, IPC — 500.000/27 milioane și rolul secundar al antibioticelor (pagini PDF: 10).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 1,
   "printedPages": [
    10
   ],
   "pdfPages": [
    10
   ],
   "section": "IPC — 500.000/27 milioane și rolul secundar al antibioticelor"
  },
  "learningObjective": "Fixarea cifrelor 27 de milioane / 500.000 / un sfert nosocomial și a ierarhiei drenaj înaintea antibioticelor.",
  "optionRationales": [
   "Cifrele 27 de milioane, 500.000 și un sfert din nosocomiale sunt explicite.",
   "Rolul secundar al antibioticelor și semnele de infecție profundă sunt enunțate.",
   "Textul o plasează ca a doua cea mai frecventă nosocomială, la 2–5% dintre chirurgicali.",
   "Drenajul, nu antibioticele izolate, este manevra cheie; tahicardia poate fi primul semn de infecție.",
   "500.000 este un sfert din nosocomiale, nu totalul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Minimizează 500.000 la sub 1% și inversează drenajul cu antibioticele, două mesaje din același paragraf de IPC."
  },
  "textbookExpressions": [
   "27 de milioane",
   "500.000 de cazuri"
  ]
 }
];
