import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_GINECO:(Question&Record<string,unknown>)[]=[
 {
  "id": "gineco-adv-001",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Diagnosticul de menopauză se pune după:",
  "options": [
   "Un an de amenoree",
   "Șase luni de amenoree",
   "Trei cicluri menstruale absente",
   "FSH scăzut și estradiol crescut",
   "LH scăzut și FSH scăzut"
  ],
  "correct": [
   0
  ],
  "explanation": "Un an de amenoree — Corect: Nota „De reținut” definește diagnosticul după un an de amenoree.\n\nȘase luni de amenoree — Incorect: Pragul de șase luni definește amenoreea secundară, nu menopauza.\n\nTrei cicluri menstruale absente — Incorect: Trei cicluri absente apar în definiția amenoreei secundare, nu a menopauzei.\n\nFSH scăzut și estradiol crescut — Incorect: În menopauză FSH și LH cresc, iar estradiolul scade.\n\nLH scăzut și FSH scăzut — Incorect: Ambele gonadotropine cresc, nu scad.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 276, 277, Fiziologie — Menopauza (pagini PDF: 54, 55).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    276,
    277
   ],
   "pdfPages": [
    54,
    55
   ],
   "section": "Fiziologie — Menopauza"
  },
  "learningObjective": "Aplicarea criteriului temporal de diagnostic al menopauzei și recunoașterea profilului hormonal invers.",
  "optionRationales": [
   "Nota „De reținut” definește diagnosticul după un an de amenoree.",
   "Pragul de șase luni definește amenoreea secundară, nu menopauza.",
   "Trei cicluri absente apar în definiția amenoreei secundare, nu a menopauzei.",
   "În menopauză FSH și LH cresc, iar estradiolul scade.",
   "Ambele gonadotropine cresc, nu scad."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă pragurile amenoreei secundare și inversează FSH/estradiol."
  },
  "textbookExpressions": [
   "un an de amenoree",
   "funcţiei ovariene"
  ]
 },
 {
  "id": "gineco-adv-002",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Pubertatea precoce:",
  "options": [
   "La fetițe se definește prin apariția modificărilor pubertare sub 8 ani",
   "Analogii de GnRH sunt utili pentru supresia LH și FSH în forma centrală",
   "Complicațiile includ statura mică prin închiderea precoce a cartilajelor de creștere",
   "La băieți apare sub 12 ani și este, de obicei, idiopatică",
   "Forma incompletă se tratează imediat cu analogi de GnRH, fără perioadă de observație"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "La fetițe se definește prin apariția modificărilor pubertare sub 8 ani — Corect: Pragul sub 8 ani la fetițe este explicit.\n\nAnalogii de GnRH sunt utili pentru supresia LH și FSH în forma centrală — Corect: Analogii de GnRH sunt tratamentul formei centrale.\n\nComplicațiile includ statura mică prin închiderea precoce a cartilajelor de creștere — Corect: Statura mică prin închiderea precoce a cartilajelor este complicația citată.\n\nLa băieți apare sub 12 ani și este, de obicei, idiopatică — Incorect: La băieți pragul citat este sub 9 ani, iar cauza cea mai frecventă este hiperplazia suprarenaliană.\n\nForma incompletă se tratează imediat cu analogi de GnRH, fără perioadă de observație — Incorect: Forma incompletă necesită doar observație, pentru a nu se transforma în varianta completă.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 275, 274, Dezvoltare — Pubertatea precoce (pagini PDF: 53, 52).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    275,
    274
   ],
   "pdfPages": [
    53,
    52
   ],
   "section": "Dezvoltare — Pubertatea precoce"
  },
  "learningObjective": "Diferențierea formei centrale de cea incompletă și recunoașterea consecinței asupra taliei.",
  "optionRationales": [
   "Pragul sub 8 ani la fetițe este explicit.",
   "Analogii de GnRH sunt tratamentul formei centrale.",
   "Statura mică prin închiderea precoce a cartilajelor este complicația citată.",
   "La băieți pragul citat este sub 9 ani, iar cauza cea mai frecventă este hiperplazia suprarenaliană.",
   "Forma incompletă necesită doar observație, pentru a nu se transforma în varianta completă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută pragul de vârstă al băieților și tratează agresiv o formă care cere doar urmărire."
  },
  "textbookExpressions": [
   "Analogii de GnRH",
   "statura mică"
  ]
 },
 {
  "id": "gineco-adv-003",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Contraceptivele orale combinate:",
  "options": [
   "Inhibă dezvoltarea foliculară și ovulația și cresc vâscozitatea mucusului cervical",
   "Sunt contraindicate la marile fumătoare și la pacientele cu istoric de tromboză venoasă profundă",
   "Conțin doar progestativ și trebuie administrate la aceeași oră în fiecare zi",
   "Eficacitatea tipică este identică cu cea ideală, de 99%",
   "Nu modifică calitatea endometrului"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Inhibă dezvoltarea foliculară și ovulația și cresc vâscozitatea mucusului cervical — Corect: Mecanismul combinat (ovulație, endometru, mucus) este descris pentru COC.\n\nSunt contraindicate la marile fumătoare și la pacientele cu istoric de tromboză venoasă profundă — Corect: Contraindicațiile la fumătoare, TVP, malignități dependente de estrogeni și afecțiuni hepatice sunt explicite.\n\nConțin doar progestativ și trebuie administrate la aceeași oră în fiecare zi — Incorect: Administrarea la aceeași oră caracterizează pilulele doar cu progestativ.\n\nEficacitatea tipică este identică cu cea ideală, de 99% — Incorect: Eficacitatea ideală este 99%, cea tipică 92%.\n\nNu modifică calitatea endometrului — Incorect: COC schimbă calitatea endometrului, prevenind implantarea.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 277, Contracepția — Metode hormonale (pagini PDF: 55).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    277
   ],
   "pdfPages": [
    55
   ],
   "section": "Contracepția — Metode hormonale"
  },
  "learningObjective": "Recunoașterea mecanismului COC și a contraindicațiilor tromboembolice, distinct de pilula doar cu progestativ.",
  "optionRationales": [
   "Mecanismul combinat (ovulație, endometru, mucus) este descris pentru COC.",
   "Contraindicațiile la fumătoare, TVP, malignități dependente de estrogeni și afecțiuni hepatice sunt explicite.",
   "Administrarea la aceeași oră caracterizează pilulele doar cu progestativ.",
   "Eficacitatea ideală este 99%, cea tipică 92%.",
   "COC schimbă calitatea endometrului, prevenind implantarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie COC proprietățile pilulei doar cu progestativ și echivalează eficacitatea ideală cu cea tipică."
  },
  "textbookExpressions": [
   "Risc crescut de TVP",
   "marile fumătoare"
  ]
 },
 {
  "id": "gineco-adv-004",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Contracepția de urgență:",
  "options": [
   "Schemele cu estradiol și progestativ se administrează în primele 72 de ore de la contactul neprotejat",
   "Dispozitivul intrauterin cu cupru poate fi inserat în primele 4–5 zile",
   "Levonorgestrelul (planul B) este o opțiune citată",
   "Mifepristona (RU 486) întrerupe o sarcină nou apărută",
   "Lactația asigură contracepție eficace peste 12 luni postpartum, independent de amenoree"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Schemele cu estradiol și progestativ se administrează în primele 72 de ore de la contactul neprotejat — Corect: Fereastra de 72 de ore pentru schemele hormonale este explicită.\n\nDispozitivul intrauterin cu cupru poate fi inserat în primele 4–5 zile — Corect: DIU cu cupru în 4–5 zile este citat.\n\nLevonorgestrelul (planul B) este o opțiune citată — Corect: Levonorgestrelul este listat ca planul B.\n\nMifepristona (RU 486) întrerupe o sarcină nou apărută — Corect: Mifepristona întrerupe o sarcină nou apărută.\n\nLactația asigură contracepție eficace peste 12 luni postpartum, independent de amenoree — Incorect: Lactația este eficace doar dacă este activă, sub 6 luni postpartum și cu amenoree.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 278, Contracepția — Contracepția de urgență (pagini PDF: 56).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    278
   ],
   "pdfPages": [
    56
   ],
   "section": "Contracepția — Contracepția de urgență"
  },
  "learningObjective": "Ierarhizarea ferestrelor de 72 de ore și 4–5 zile și recunoașterea rolului mifepristonei.",
  "optionRationales": [
   "Fereastra de 72 de ore pentru schemele hormonale este explicită.",
   "DIU cu cupru în 4–5 zile este citat.",
   "Levonorgestrelul este listat ca planul B.",
   "Mifepristona întrerupe o sarcină nou apărută.",
   "Lactația este eficace doar dacă este activă, sub 6 luni postpartum și cu amenoree."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul extinde metoda lactațională dincolo de cele trei condiții din tabel."
  },
  "textbookExpressions": [
   "primele 72 ore",
   "Levonorgestrel"
  ]
 },
 {
  "id": "gineco-adv-005",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Amenoreea:",
  "options": [
   "Forma primară include absența menstruațiilor până la 16 ani, în prezența caracterelor sexuale secundare",
   "În orice tip de amenoree, primul pas este testul de sarcină",
   "Forma secundară se definește prin absența menstruațiilor timp de 6 săptămâni",
   "Triada atletelor cuprinde amenoree, osteoporoză și tulburări de alimentație",
   "Sindromul Asherman este o cauză de amenoree primară prin disgenezie gonadică"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Forma primară include absența menstruațiilor până la 16 ani, în prezența caracterelor sexuale secundare — Corect: Definiția primarei cu pragul de 16 ani este explicită.\n\nÎn orice tip de amenoree, primul pas este testul de sarcină — Corect: „Pasul următor” cere β-hCG ca primă investigație.\n\nForma secundară se definește prin absența menstruațiilor timp de 6 săptămâni — Incorect: Secundara înseamnă 6 luni sau peste 3 menstre absente, nu 6 săptămâni.\n\nTriada atletelor cuprinde amenoree, osteoporoză și tulburări de alimentație — Corect: Triada atletelor este redată în nota „De reținut”.\n\nSindromul Asherman este o cauză de amenoree primară prin disgenezie gonadică — Incorect: Asherman (sinechii intrauterine postchirurgicale sau infecțioase) este cauză de amenoree secundară.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 279, Tulburări menstruale — Amenoreea (pagini PDF: 57).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    279
   ],
   "pdfPages": [
    57
   ],
   "section": "Tulburări menstruale — Amenoreea"
  },
  "learningObjective": "Separarea amenoreei primare de cea secundară și recunoașterea primului pas diagnostic.",
  "optionRationales": [
   "Definiția primarei cu pragul de 16 ani este explicită.",
   "„Pasul următor” cere β-hCG ca primă investigație.",
   "Secundara înseamnă 6 luni sau peste 3 menstre absente, nu 6 săptămâni.",
   "Triada atletelor este redată în nota „De reținut”.",
   "Asherman (sinechii intrauterine postchirurgicale sau infecțioase) este cauză de amenoree secundară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii comprimă pragul temporal al formei secundare și mută Asherman în disgenezia gonadică."
  },
  "textbookExpressions": [
   "Amenoreea atletelor",
   "Sindromul Asherman"
  ]
 },
 {
  "id": "gineco-adv-006",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Mittelschmerz reprezintă:",
  "options": [
   "O durere ușoară, unilaterală, recurentă, la mijlocul ciclului, anterior ovulației",
   "Durerea pelvină din endometrioză, cu maxim cu 1–2 săptămâni înainte de menstruație",
   "Invazia țesutului endometrial în miometru",
   "Durerea colicativă a dismenoreei primare, care apare la începutul menstruației",
   "Semnul candelabrului la mobilizarea colului uterin"
  ],
  "correct": [
   0
  ],
  "explanation": "O durere ușoară, unilaterală, recurentă, la mijlocul ciclului, anterior ovulației — Corect: Descrierea din nota „De reținut” corespunde mittelschmerz.\n\nDurerea pelvină din endometrioză, cu maxim cu 1–2 săptămâni înainte de menstruație — Incorect: Maximul dureros premenstrual caracterizează endometrioza.\n\nInvazia țesutului endometrial în miometru — Incorect: Invazia în miometru definește adenomioza.\n\nDurerea colicativă a dismenoreei primare, care apare la începutul menstruației — Incorect: Dismenoreea primară începe odată cu menstruația.\n\nSemnul candelabrului la mobilizarea colului uterin — Incorect: Semnul candelabrului aparține bolii inflamatorii pelvine.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 281, Tulburări menstruale — Mittelschmerz (pagini PDF: 59).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    281
   ],
   "pdfPages": [
    59
   ],
   "section": "Tulburări menstruale — Mittelschmerz"
  },
  "learningObjective": "Identificarea durerii ovulatorii și diferențierea de endometrioză, adenomioză și BIP.",
  "optionRationales": [
   "Descrierea din nota „De reținut” corespunde mittelschmerz.",
   "Maximul dureros premenstrual caracterizează endometrioza.",
   "Invazia în miometru definește adenomioza.",
   "Dismenoreea primară începe odată cu menstruația.",
   "Semnul candelabrului aparține bolii inflamatorii pelvine."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate distractoarele sunt dureri pelvine reale din același capitol, atribuite altor entități."
  },
  "textbookExpressions": [
   "Mittelschmerz",
   "anterior ovulaţiei"
  ]
 },
 {
  "id": "gineco-adv-007",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Endometrioza:",
  "options": [
   "Țesutul ectopic urmează același model menstrual ca endometrul eutopic",
   "Laparoscopia permite obiectivarea de leziuni de tip „praf de pușcă”",
   "Este descrisă ca cea mai frecventă cauză de infertilitate la femeie",
   "CA-125 are o sensibilitate foarte bună pentru diagnostic",
   "Adenomioza este sinonimă, reprezentând implantarea pe ovare și ligamentul larg"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Țesutul ectopic urmează același model menstrual ca endometrul eutopic — Corect: Urmărirea ciclului de către țesutul ectopic este explicită.\n\nLaparoscopia permite obiectivarea de leziuni de tip „praf de pușcă” — Corect: Leziunile „praf de pușcă” la laparoscopie sunt descrierea din text.\n\nEste descrisă ca cea mai frecventă cauză de infertilitate la femeie — Corect: Nota „De reținut” o identifică drept cea mai frecventă cauză de infertilitate, până la 50% din cazuri.\n\nCA-125 are o sensibilitate foarte bună pentru diagnostic — Incorect: CA-125 este frecvent crescut, dar sensibilitatea nu este foarte bună.\n\nAdenomioza este sinonimă, reprezentând implantarea pe ovare și ligamentul larg — Incorect: Adenomioza este invazia în miometru, nu sinonimul endometriozei peritoneal.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 281, Tulburări menstruale — Endometrioza (pagini PDF: 59).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    281
   ],
   "pdfPages": [
    59
   ],
   "section": "Tulburări menstruale — Endometrioza"
  },
  "learningObjective": "Recunoașterea fiziopatologiei, a imaginii laparoscopice și a rolului în infertilitate.",
  "optionRationales": [
   "Urmărirea ciclului de către țesutul ectopic este explicită.",
   "Leziunile „praf de pușcă” la laparoscopie sunt descrierea din text.",
   "Nota „De reținut” o identifică drept cea mai frecventă cauză de infertilitate, până la 50% din cazuri.",
   "CA-125 este frecvent crescut, dar sensibilitatea nu este foarte bună.",
   "Adenomioza este invazia în miometru, nu sinonimul endometriozei peritoneal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii supraestimează CA-125 și confundă endometrioza cu adenomioza, definite pe aceeași pagină."
  },
  "textbookExpressions": [
   "praf de puşcă",
   "cea mai frecventă cauză de infertilitate"
  ]
 },
 {
  "id": "gineco-adv-008",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Adenomioza:",
  "options": [
   "Reprezintă invazia țesutului endometrial în miometru",
   "Cauzează uter mic, asimetric, nedureros",
   "Se prezintă frecvent ca durere cronică la o pacientă peste 40 de ani",
   "Este cea mai frecventă cauză de infertilitate, însumând 50% din cazuri",
   "Diagnosticul de elecție este laparoscopia cu leziuni „praf de pușcă”"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Reprezintă invazia țesutului endometrial în miometru — Corect: Invazia în miometru este definiția din notă.\n\nCauzează uter mic, asimetric, nedureros — Incorect: Textul descrie creștere simetrică a uterului, cu sensibilitate uterină.\n\nSe prezintă frecvent ca durere cronică la o pacientă peste 40 de ani — Corect: Prezentarea peste 40 de ani este explicită.\n\nEste cea mai frecventă cauză de infertilitate, însumând 50% din cazuri — Incorect: Cea mai frecventă cauză de infertilitate este endometrioza.\n\nDiagnosticul de elecție este laparoscopia cu leziuni „praf de pușcă” — Incorect: Laparoscopia cu „praf de pușcă” este a endometriozei.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 281, Tulburări menstruale — Adenomioza (pagini PDF: 59).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    281
   ],
   "pdfPages": [
    59
   ],
   "section": "Tulburări menstruale — Adenomioza"
  },
  "learningObjective": "Diferențierea adenomiozei de endometrioză după sediu, vârstă și aspect uterin.",
  "optionRationales": [
   "Invazia în miometru este definiția din notă.",
   "Textul descrie creștere simetrică a uterului, cu sensibilitate uterină.",
   "Prezentarea peste 40 de ani este explicită.",
   "Cea mai frecventă cauză de infertilitate este endometrioza.",
   "Laparoscopia cu „praf de pușcă” este a endometriozei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă epidemiologia și semnele laparoscopice ale endometriozei asupra adenomiozei."
  },
  "textbookExpressions": [
   "Adenomioza",
   "peste 40 de ani"
  ]
 },
 {
  "id": "gineco-adv-009",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Sindromul de ovar micropolichistic:",
  "options": [
   "Excesul de LH induce o producție ovariană crescută de androgeni",
   "Raportul LH/FSH peste 2 este un element de laborator citat",
   "Pacientele au risc crescut de cancer endometrial prin estrogeni cronic crescuți",
   "Chisturile ovariene sunt rezultatul hipersecreției de androgeni, nu cauza bolii",
   "Metforminul și clomifenul sunt contraindicate, tratamentul fiind doar chirurgical"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Excesul de LH induce o producție ovariană crescută de androgeni — Corect: Excesul de LH este mecanismul citat.\n\nRaportul LH/FSH peste 2 este un element de laborator citat — Corect: Raportul LH/FSH >2 este redat la laborator.\n\nPacientele au risc crescut de cancer endometrial prin estrogeni cronic crescuți — Corect: Riscul de cancer endometrial prin estrogeni cronici este explicit.\n\nChisturile ovariene sunt rezultatul hipersecreției de androgeni, nu cauza bolii — Corect: Nota precizează că chisturile sunt rezultat, nu cauză.\n\nMetforminul și clomifenul sunt contraindicate, tratamentul fiind doar chirurgical — Incorect: Tratamentul include exerciții, scădere ponderală, COC, metformin, spironolactonă și clomifen.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 282, Tulburări menstruale — SOPC (pagini PDF: 60).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    282
   ],
   "pdfPages": [
    60
   ],
   "section": "Tulburări menstruale — SOPC"
  },
  "learningObjective": "Corelarea dezechilibrului LH/FSH cu hiperandrogenismul, riscul oncologic și natura secundară a chisturilor.",
  "optionRationales": [
   "Excesul de LH este mecanismul citat.",
   "Raportul LH/FSH >2 este redat la laborator.",
   "Riscul de cancer endometrial prin estrogeni cronici este explicit.",
   "Nota precizează că chisturile sunt rezultat, nu cauză.",
   "Tratamentul include exerciții, scădere ponderală, COC, metformin, spironolactonă și clomifen."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul transformă o boală medicală, cu metformin și clomifen, într-o indicație chirurgicală de primă intenție."
  },
  "textbookExpressions": [
   "LH/FSH >2",
   "cancer endometrial"
  ]
 },
 {
  "id": "gineco-adv-010",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Boala inflamatorie pelvină:",
  "options": [
   "Infecția se poate extinde și produce perihepatită (boala Fitz-Hugh-Curtis)",
   "Semnul candelabrului reflectă durerea intensă la palparea colului",
   "Contracepția de barieră crește riscul de BIP",
   "Complicațiile includ infertilitate, abces tubo-ovarian și sarcină ectopică",
   "Agentul etiologic principal este Treponema pallidum"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Infecția se poate extinde și produce perihepatită (boala Fitz-Hugh-Curtis) — Corect: Boala Fitz-Hugh-Curtis este descrisă ca perihepatită prin extensie.\n\nSemnul candelabrului reflectă durerea intensă la palparea colului — Corect: Semnul candelabrului este definit în nota „De reținut”.\n\nContracepția de barieră crește riscul de BIP — Incorect: Contracepția de barieră reduce riscul de BIP.\n\nComplicațiile includ infertilitate, abces tubo-ovarian și sarcină ectopică — Corect: Infertilitatea, abcesul tubo-ovarian și sarcina ectopică sunt complicațiile citate.\n\nAgentul etiologic principal este Treponema pallidum — Incorect: Agenții principali sunt N. gonorrhoeae și Chlamydia, nu Treponema.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 284, Infecții — Boala inflamatorie pelvină (pagini PDF: 62).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    284
   ],
   "pdfPages": [
    62
   ],
   "section": "Infecții — Boala inflamatorie pelvină"
  },
  "learningObjective": "Recunoașterea semnelor clinice, a perihepatitei și a sechelelor tubare.",
  "optionRationales": [
   "Boala Fitz-Hugh-Curtis este descrisă ca perihepatită prin extensie.",
   "Semnul candelabrului este definit în nota „De reținut”.",
   "Contracepția de barieră reduce riscul de BIP.",
   "Infertilitatea, abcesul tubo-ovarian și sarcina ectopică sunt complicațiile citate.",
   "Agenții principali sunt N. gonorrhoeae și Chlamydia, nu Treponema."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează efectul contracepției de barieră și atribuie etiologia sifilisului."
  },
  "textbookExpressions": [
   "semnul candelabrului",
   "Fitz-Hugh-Curtis"
  ]
 },
 {
  "id": "gineco-adv-011",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Cancerul de col uterin:",
  "options": [
   "Carcinomul scuamos reprezintă circa 80% din cazuri",
   "Tipurile HPV 6 și 11 sunt factorii oncogeni citați pentru cancerul invaziv",
   "Screeningul prin frotiu Pap începe de la vârsta de 21 de ani",
   "Adenocarcinomul reprezintă 80% din cazuri",
   "Conizația este rezervată doar carcinomului cu invazie stromală masivă"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Carcinomul scuamos reprezintă circa 80% din cazuri — Corect: Distribuția 80% scuamos / 15% adenocarcinom / 5% mixt este explicită.\n\nTipurile HPV 6 și 11 sunt factorii oncogeni citați pentru cancerul invaziv — Incorect: Tipurile citate sunt 16, 18, 31 sau 33, nu 6 și 11.\n\nScreeningul prin frotiu Pap începe de la vârsta de 21 de ani — Corect: Screeningul Pap de la 21 de ani este redat în notă.\n\nAdenocarcinomul reprezintă 80% din cazuri — Incorect: 80% este ponderea formei scuamoase, nu a adenocarcinomului.\n\nConizația este rezervată doar carcinomului cu invazie stromală masivă — Incorect: LEEP, conizația sau ablația laser sunt tratamente și pentru HSIL, nu doar pentru invazia masivă.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 287, Neoplasme — Cancerul de col uterin (pagini PDF: 65).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    287
   ],
   "pdfPages": [
    65
   ],
   "section": "Neoplasme — Cancerul de col uterin"
  },
  "learningObjective": "Ierarhizarea histologiei, a tipurilor HPV cu risc înalt și a vârstei de început a screeningului.",
  "optionRationales": [
   "Distribuția 80% scuamos / 15% adenocarcinom / 5% mixt este explicită.",
   "Tipurile citate sunt 16, 18, 31 sau 33, nu 6 și 11.",
   "Screeningul Pap de la 21 de ani este redat în notă.",
   "80% este ponderea formei scuamoase, nu a adenocarcinomului.",
   "LEEP, conizația sau ablația laser sunt tratamente și pentru HSIL, nu doar pentru invazia masivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează ponderea histologiilor și atribuie oncogeneza tipurilor HPV condilomatoase."
  },
  "textbookExpressions": [
   "80% din cazuri",
   "vârsta de 21"
  ]
 },
 {
  "id": "gineco-adv-012",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la cancerul mamar:",
  "options": [
   "Majoritatea cancerelor mamare sunt diagnosticate prin mamografii de screening, dar circa 20% nu sunt detectate mamografic",
   "Prezența ganglionilor axilari pozitivi și dimensiunea mare a tumorii sunt factori de prognostic negativ",
   "Pacientele cu mutații BRCA1 sau BRCA2 pot lua în considerare mastectomia și ooforectomia profilactică",
   "Aspirația cu ac fin a unei tumori solide are risc de rezultat fals negativ de 0%",
   "Tumorile cu receptori hormonali pozitivi au prognostic mai rezervat decât cele negative"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Majoritatea cancerelor mamare sunt diagnosticate prin mamografii de screening, dar circa 20% nu sunt detectate mamografic — Corect: Nota „De reținut” citează atât predominanța diagnosticului mamografic, cât și rata de 20% nedetectate.\n\nPrezența ganglionilor axilari pozitivi și dimensiunea mare a tumorii sunt factori de prognostic negativ — Corect: Ganglionii axilari pozitivi și dimensiunea mare sunt factori de prognostic negativ.\n\nPacientele cu mutații BRCA1 sau BRCA2 pot lua în considerare mastectomia și ooforectomia profilactică — Corect: Mastectomia și ooforectomia profilactică sunt menționate pentru BRCA1/2.\n\nAspirația cu ac fin a unei tumori solide are risc de rezultat fals negativ de 0% — Incorect: Aspirația cu ac fin are risc de 20% rezultat fals negativ.\n\nTumorile cu receptori hormonali pozitivi au prognostic mai rezervat decât cele negative — Incorect: Receptorii hormonali pozitivi și HER2/neu asociază un prognostic mai bun.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 292, Afecțiunile sânului — Cancerul mamar (pagini PDF: 70).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    292
   ],
   "pdfPages": [
    70
   ],
   "section": "Afecțiunile sânului — Cancerul mamar"
  },
  "learningObjective": "Corelarea limitelor mamografiei, a prognosticului ganglionar și a indicației profilactice BRCA.",
  "optionRationales": [
   "Nota „De reținut” citează atât predominanța diagnosticului mamografic, cât și rata de 20% nedetectate.",
   "Ganglionii axilari pozitivi și dimensiunea mare sunt factori de prognostic negativ.",
   "Mastectomia și ooforectomia profilactică sunt menționate pentru BRCA1/2.",
   "Aspirația cu ac fin are risc de 20% rezultat fals negativ.",
   "Receptorii hormonali pozitivi și HER2/neu asociază un prognostic mai bun."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii neagă fals-negativul FNA, pe care textul îl cuantifică la 20%, și inversează prognosticul receptorilor hormonali."
  },
  "textbookExpressions": [
   "20% dintre cancere",
   "ganglionilor axilari pozitivi"
  ]
 },
 {
  "id": "gineco-adv-013",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Vârsta medie de instalare a menarhei în SUA este de:",
  "options": [
   "13 ani, tendința fiind mai precoce la rasa neagră comparativ cu cea albă",
   "8 ani, pragul care definește pubertatea precoce",
   "16 ani, identic cu definiția amenoreei primare",
   "9 ani, identic cu pragul pubertății precoce la băieți",
   "21 de ani, vârsta de început a screeningului citologic"
  ],
  "correct": [
   0
  ],
  "explanation": "13 ani, tendința fiind mai precoce la rasa neagră comparativ cu cea albă — Corect: Nota indică 13 ani, mai precoce la rasa neagră.\n\n8 ani, pragul care definește pubertatea precoce — Incorect: 8 ani este pragul pubertății precoce la fetițe, nu media menarhei.\n\n16 ani, identic cu definiția amenoreei primare — Incorect: 16 ani apare în definiția amenoreei primare.\n\n9 ani, identic cu pragul pubertății precoce la băieți — Incorect: 9 ani este pragul la băieți.\n\n21 de ani, vârsta de început a screeningului citologic — Incorect: 21 de ani este vârsta de început a frotiului Pap.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 273, Fiziologie — Dezvoltarea ginecologică (pagini PDF: 51).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    273
   ],
   "pdfPages": [
    51
   ],
   "section": "Fiziologie — Dezvoltarea ginecologică"
  },
  "learningObjective": "Memorarea vârstei medii a menarhei și a diferenței etnice citate, distinct de pragurile de pubertate precoce și de amenoree.",
  "optionRationales": [
   "Nota indică 13 ani, mai precoce la rasa neagră.",
   "8 ani este pragul pubertății precoce la fetițe, nu media menarhei.",
   "16 ani apare în definiția amenoreei primare.",
   "9 ani este pragul la băieți.",
   "21 de ani este vârsta de început a frotiului Pap."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt praguri reale din același capitol (precoce, amenoree, Pap), ușor de confunda cu media menarhei."
  },
  "textbookExpressions": [
   "13 ani",
   "menarhei"
  ]
 },
 {
  "id": "gineco-adv-014",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Ordinea cronologică a evenimentelor pubertare la femeie este:",
  "options": [
   "Adrenarha, gonadarha, telarha, pubarha, puseu de creștere, menarha",
   "Menarha, telarha, pubarha, adrenarha, gonadarha, puseu de creștere",
   "Telarha, menarha, adrenarha, fără gonadarhă",
   "Doar puseul de creștere, urmat imediat de menopauză",
   "Pubarha, apoi involuția caracterelor sexuale secundare"
  ],
  "correct": [
   0
  ],
  "explanation": "Adrenarha, gonadarha, telarha, pubarha, puseu de creștere, menarha — Corect: Nota enumeră exact această ordine.\n\nMenarha, telarha, pubarha, adrenarha, gonadarha, puseu de creștere — Incorect: Menarha este ultimul eveniment, nu primul.\n\nTelarha, menarha, adrenarha, fără gonadarhă — Incorect: Gonadarha precede telarha; menarha nu precede telarha.\n\nDoar puseul de creștere, urmat imediat de menopauză — Incorect: Puseul de creștere precede menarha, nu menopauza.\n\nPubarha, apoi involuția caracterelor sexuale secundare — Incorect: Pubarha nu este urmată de involuție în pubertatea normală.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 273, Fiziologie — Pubertatea feminină (pagini PDF: 51).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    273
   ],
   "pdfPages": [
    51
   ],
   "section": "Fiziologie — Pubertatea feminină"
  },
  "learningObjective": "Reținerea secvenței adrenarhă–gonadarhă–telarhă–pubarhă–puseu–menarhă.",
  "optionRationales": [
   "Nota enumeră exact această ordine.",
   "Menarha este ultimul eveniment, nu primul.",
   "Gonadarha precede telarha; menarha nu precede telarha.",
   "Puseul de creștere precede menarha, nu menopauza.",
   "Pubarha nu este urmată de involuție în pubertatea normală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Secvența are șase pași ușor de permutat; distractorii inversează menarha și telarha."
  },
  "textbookExpressions": [
   "adrenarha",
   "telarha"
  ]
 },
 {
  "id": "gineco-adv-015",
  "topicId": "gineco",
  "type": "CS",
  "stem": "În stadiul Tanner 2 al dezvoltării mamare se observă:",
  "options": [
   "Înmugurirea sânilor și reliefarea areolei",
   "Doar mamelonul ascensionat, fără țesut mamar",
   "Areola care revine la nivelul sânului, cu mamelon proeminent",
   "Sânul matur de adult, cu pilozitate până pe coapse",
   "Absența oricărei dezvoltări, după 17 ani"
  ],
  "correct": [
   0
  ],
  "explanation": "Înmugurirea sânilor și reliefarea areolei — Corect: Tabelul descrie înmugurirea și reliefarea areolei în stadiul 2.\n\nDoar mamelonul ascensionat, fără țesut mamar — Incorect: Doar mamelonul ascensionat este stadiul 1.\n\nAreola care revine la nivelul sânului, cu mamelon proeminent — Incorect: Areola revenită la nivelul sânului este stadiul 5.\n\nSânul matur de adult, cu pilozitate până pe coapse — Incorect: Pilozitatea până pe coapse este Tanner 5 pubian, nu mamar 2.\n\nAbsența oricărei dezvoltări, după 17 ani — Incorect: Absența dezvoltării după 17 ani nu este stadiul 2.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 274, Dezvoltare — Stadiile Tanner mamare (pagini PDF: 52).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    274
   ],
   "pdfPages": [
    52
   ],
   "section": "Dezvoltare — Stadiile Tanner mamare"
  },
  "learningObjective": "Identificarea înmuguririi (Tanner 2) față de stadiile 1 și 5.",
  "optionRationales": [
   "Tabelul descrie înmugurirea și reliefarea areolei în stadiul 2.",
   "Doar mamelonul ascensionat este stadiul 1.",
   "Areola revenită la nivelul sânului este stadiul 5.",
   "Pilozitatea până pe coapse este Tanner 5 pubian, nu mamar 2.",
   "Absența dezvoltării după 17 ani nu este stadiul 2."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt descrierile reale ale stadiilor 1 și 5 din același tabel."
  },
  "textbookExpressions": [
   "înmugurirea sânilor",
   "Stadiul Tanner"
  ]
 },
 {
  "id": "gineco-adv-016",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Hormoni ai ciclului menstrual:",
  "options": [
   "Peak-ul de LH de la mijlocul ciclului declanșează ovulația",
   "Estradiolul stimulează proliferarea endometrială",
   "Progesteronul crește temperatura bazală și consistența mucusului cervical",
   "FSH stimulează dezvoltarea foliculilor ovarieni",
   "hCG are acțiune FSH-like și scade progesteronul după implantare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Peak-ul de LH de la mijlocul ciclului declanșează ovulația — Corect: Rolul peak-ului de LH este din tabel.\n\nEstradiolul stimulează proliferarea endometrială — Corect: Proliferarea endometrială este rolul estrogenilor.\n\nProgesteronul crește temperatura bazală și consistența mucusului cervical — Corect: Temperatura bazală și mucusul sunt roluri ale progesteronului.\n\nFSH stimulează dezvoltarea foliculilor ovarieni — Corect: FSH stimulează dezvoltarea foliculilor, conform tabelului.\n\nhCG are acțiune FSH-like și scade progesteronul după implantare — Incorect: hCG are acțiune LH-like și menține corpul galben și progesteronul.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 275, Fiziologie — Ciclul menstrual normal (pagini PDF: 53).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    275
   ],
   "pdfPages": [
    53
   ],
   "section": "Fiziologie — Ciclul menstrual normal"
  },
  "learningObjective": "Asocierea LH-ovulație, estradiol-proliferare, progesteron-temperatură bazală și FSH-foliculi.",
  "optionRationales": [
   "Rolul peak-ului de LH este din tabel.",
   "Proliferarea endometrială este rolul estrogenilor.",
   "Temperatura bazală și mucusul sunt roluri ale progesteronului.",
   "FSH stimulează dezvoltarea foliculilor, conform tabelului.",
   "hCG are acțiune LH-like și menține corpul galben și progesteronul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează acțiunea FSH și substituie LH-like a hCG cu un efect opus asupra progesteronului."
  },
  "textbookExpressions": [
   "Peak-ul de",
   "temperatura bazală"
  ]
 },
 {
  "id": "gineco-adv-017",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Vaginoza bacteriană se caracterizează prin:",
  "options": [
   "Secreție fluidă albicioasă cu miros de pește și celule tip „clue”",
   "pH vaginal peste 4,5",
   "Tratament cu metronidazol",
   "pH vaginal normal (3,5–4,5) și pseudohife la KOH",
   "Necesitatea tratamentului partenerului, ca în trichomonază"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Secreție fluidă albicioasă cu miros de pește și celule tip „clue” — Corect: Secreția cu miros de pește și celulele clue sunt din tabel.\n\npH vaginal peste 4,5 — Corect: pH >4,5 este citat.\n\nTratament cu metronidazol — Corect: Metronidazolul este tratamentul.\n\npH vaginal normal (3,5–4,5) și pseudohife la KOH — Incorect: pH normal și pseudohife definesc candida.\n\nNecesitatea tratamentului partenerului, ca în trichomonază — Incorect: Nota precizează că partenerul se tratează în trichomonază, nu în vaginoză.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 282, 283, Infecții — Vaginita (pagini PDF: 60, 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    282,
    283
   ],
   "pdfPages": [
    60,
    61
   ],
   "section": "Infecții — Vaginita"
  },
  "learningObjective": "Recunoașterea celulelor clue, a pH-ului crescut și a metronidazolului, distinct de candidă.",
  "optionRationales": [
   "Secreția cu miros de pește și celulele clue sunt din tabel.",
   "pH >4,5 este citat.",
   "Metronidazolul este tratamentul.",
   "pH normal și pseudohife definesc candida.",
   "Nota precizează că partenerul se tratează în trichomonază, nu în vaginoză."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă pH-ul/pseudohifele candidei și regula de tratament a partenerului din trichomonază."
  },
  "textbookExpressions": [
   "clue",
   "Miros de peşte"
  ]
 },
 {
  "id": "gineco-adv-018",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Candidoza vaginală:",
  "options": [
   "Produce secreție densă, albicioasă, brânzoasă, cu inflamație importantă",
   "pH-ul vaginal rămâne între 3,5 și 4,5, iar KOH arată pseudohife",
   "Tratamentul include clotrimazol topic sau o doză de fluconazol oral",
   "Celulele clue și pH-ul peste 4,5 sunt caracteristice",
   "Partenerul trebuie tratat cu metronidazol, altfel recidiva este certă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Produce secreție densă, albicioasă, brânzoasă, cu inflamație importantă — Corect: Secreția brânzoasă și inflamația importantă sunt din tabel.\n\npH-ul vaginal rămâne între 3,5 și 4,5, iar KOH arată pseudohife — Corect: pH 3,5–4,5 și pseudohifele sunt explicite.\n\nTratamentul include clotrimazol topic sau o doză de fluconazol oral — Corect: Clotrimazolul/fluconazolul sunt tratamentul.\n\nCelulele clue și pH-ul peste 4,5 sunt caracteristice — Incorect: Celulele clue și pH >4,5 definesc vaginoza.\n\nPartenerul trebuie tratat cu metronidazol, altfel recidiva este certă — Incorect: Tratamentul partenerului nu este necesar pentru Candida.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 282, 283, Infecții — Vaginita candidozică (pagini PDF: 60, 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    282,
    283
   ],
   "pdfPages": [
    60,
    61
   ],
   "section": "Infecții — Vaginita candidozică"
  },
  "learningObjective": "Contrastarea pH-ului normal și a pseudohifelor cu criteriile vaginozei.",
  "optionRationales": [
   "Secreția brânzoasă și inflamația importantă sunt din tabel.",
   "pH 3,5–4,5 și pseudohifele sunt explicite.",
   "Clotrimazolul/fluconazolul sunt tratamentul.",
   "Celulele clue și pH >4,5 definesc vaginoza.",
   "Tratamentul partenerului nu este necesar pentru Candida."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută criteriile de laborator între candida și Gardnerella."
  },
  "textbookExpressions": [
   "brânzoasă",
   "Pseudohife"
  ]
 },
 {
  "id": "gineco-adv-019",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Sindromul de șoc toxic:",
  "options": [
   "Este o reacție la exotoxina stafilococică asociată cu utilizarea prelungită a tampoanelor",
   "Tabloul include febră, erupție maculară și, în forme severe, descuamarea palmelor și tălpilor",
   "Tratamentul include îndepărtarea obiectului intravaginal și antibiotice (clindamicină sau β-lactamine rezistente la penicilinază)",
   "Agentul tipic este Treponema pallidum",
   "Cultura vaginală este inutilă, deoarece treponemele nu cresc în culturi"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este o reacție la exotoxina stafilococică asociată cu utilizarea prelungită a tampoanelor — Corect: Asocierea tampon–exotoxină–S. aureus este explicită.\n\nTabloul include febră, erupție maculară și, în forme severe, descuamarea palmelor și tălpilor — Corect: Febra, rash-ul macular și descuamarea sunt descrise.\n\nTratamentul include îndepărtarea obiectului intravaginal și antibiotice (clindamicină sau β-lactamine rezistente la penicilinază) — Corect: Îndepărtarea obiectului și clindamicina/oxacilina sunt schema.\n\nAgentul tipic este Treponema pallidum — Incorect: Treponema produce sifilisul, nu SST.\n\nCultura vaginală este inutilă, deoarece treponemele nu cresc în culturi — Incorect: Nota despre culturi negative aparține sifilisului, nu SST (cultura pentru S. aureus este utilă).\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 283, Infecții — Sindromul de șoc toxic (pagini PDF: 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    283
   ],
   "pdfPages": [
    61
   ],
   "section": "Infecții — Sindromul de șoc toxic"
  },
  "learningObjective": "Corelarea tampoanelor cu exotoxina S. aureus, rash-ul cu descuamare și clindamicina.",
  "optionRationales": [
   "Asocierea tampon–exotoxină–S. aureus este explicită.",
   "Febra, rash-ul macular și descuamarea sunt descrise.",
   "Îndepărtarea obiectului și clindamicina/oxacilina sunt schema.",
   "Treponema produce sifilisul, nu SST.",
   "Nota despre culturi negative aparține sifilisului, nu SST (cultura pentru S. aureus este utilă)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută etiologia și limita de cultură ale sifilisului asupra șocului toxic."
  },
  "textbookExpressions": [
   "tampoanelor",
   "clindamicină"
  ]
 },
 {
  "id": "gineco-adv-020",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Infecția cu Chlamydia este descrisă ca:",
  "options": [
   "Cea mai răspândită BTS raportabilă, frecvent asimptomatică mai ales la bărbați",
   "Cervicita cu frotiu Gram și culturi negative este sugestivă pentru Chlamydia",
   "Tratamentul citat este doxiciclină (nu în sarcină) sau azitromicină",
   "Agentul se evidențiază ca diplococi gram-negativi pe agar Thayer-Martin",
   "Partenerii sexuali nu necesită tratament"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cea mai răspândită BTS raportabilă, frecvent asimptomatică mai ales la bărbați — Corect: Nota o identifică drept cea mai răspândită BTS raportabilă.\n\nCervicita cu frotiu Gram și culturi negative este sugestivă pentru Chlamydia — Corect: Cervicita cu Gram și culturi negative este nota de pe pagina următoare.\n\nTratamentul citat este doxiciclină (nu în sarcină) sau azitromicină — Corect: Doxiciclina/azitromicina sunt schema.\n\nAgentul se evidențiază ca diplococi gram-negativi pe agar Thayer-Martin — Incorect: Diplococii și Thayer-Martin definesc gonococul.\n\nPartenerii sexuali nu necesită tratament — Incorect: Partenerii trebuie tratați pentru a reduce reinfecția.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 283, 284, Infecții — Cervicitele (pagini PDF: 61, 62).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    283,
    284
   ],
   "pdfPages": [
    61,
    62
   ],
   "section": "Infecții — Cervicitele"
  },
  "learningObjective": "Recunoașterea predominanței epidemiologice, a Gram-negativului și a azitromicinei/doxiciclinei.",
  "optionRationales": [
   "Nota o identifică drept cea mai răspândită BTS raportabilă.",
   "Cervicita cu Gram și culturi negative este nota de pe pagina următoare.",
   "Doxiciclina/azitromicina sunt schema.",
   "Diplococii și Thayer-Martin definesc gonococul.",
   "Partenerii trebuie tratați pentru a reduce reinfecția."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie Chlamydiei microbiologia gonococului și anulează tratarea partenerilor."
  },
  "textbookExpressions": [
   "cea mai răspândită BTS",
   "azitromicină"
  ]
 },
 {
  "id": "gineco-adv-021",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Sifilisul primar se caracterizează prin:",
  "options": [
   "Șancru solitar, ulcer nedureros, care se vindecă spontan în circa 9 săptămâni",
   "Limfadenopatie inghinală bilaterală",
   "Debut, în medie, la 3 săptămâni după expunere",
   "Erupție maculopapulară palmo-plantară și condyloma lata",
   "Gome, tabes dorsalis și pupile Argyll Robertson"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Șancru solitar, ulcer nedureros, care se vindecă spontan în circa 9 săptămâni — Corect: Șancrul nedureros cu vindecare în 9 săptămâni este forma primară.\n\nLimfadenopatie inghinală bilaterală — Corect: Limfadenopatia inghinală bilaterală este citată.\n\nDebut, în medie, la 3 săptămâni după expunere — Corect: Media de 3 săptămâni este explicită.\n\nErupție maculopapulară palmo-plantară și condyloma lata — Incorect: Erupția palmo-plantară și condyloma lata sunt stadiul secundar.\n\nGome, tabes dorsalis și pupile Argyll Robertson — Incorect: Gomele, tabes și Argyll Robertson sunt terțiarul.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 284, Infecții — Sifilisul (pagini PDF: 62).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    284
   ],
   "pdfPages": [
    62
   ],
   "section": "Infecții — Sifilisul"
  },
  "learningObjective": "Separarea șancrului primar de erupția secundară și de neuro/gomele terțiare.",
  "optionRationales": [
   "Șancrul nedureros cu vindecare în 9 săptămâni este forma primară.",
   "Limfadenopatia inghinală bilaterală este citată.",
   "Media de 3 săptămâni este explicită.",
   "Erupția palmo-plantară și condyloma lata sunt stadiul secundar.",
   "Gomele, tabes și Argyll Robertson sunt terțiarul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt stadiile secundar și terțiar, definite pe aceeași pagină."
  },
  "textbookExpressions": [
   "Şancru solitar",
   "nedureros"
  ]
 },
 {
  "id": "gineco-adv-022",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Referitor la testele serologice în sifilis sunt adevărate:",
  "options": [
   "VDRL/RPR sunt teste de screening cu sensibilitate de circa 80%",
   "FTA-ABS rămâne pozitiv toată viața, chiar după tratament",
   "Treponema pallidum nu se dezvoltă în culturi",
   "Spirochetele pot fi vizualizate pe frotiu la microscopul cu câmp întunecat",
   "Diagnosticul de elecție este cultura pe agar Thayer-Martin"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "VDRL/RPR sunt teste de screening cu sensibilitate de circa 80% — Corect: Sensibilitatea de 80% a VDRL/RPR este explicită.\n\nFTA-ABS rămâne pozitiv toată viața, chiar după tratament — Corect: Nota precizează persistența FTA-ABS.\n\nTreponema pallidum nu se dezvoltă în culturi — Corect: Nota precizează că T. pallidum nu crește în culturi.\n\nSpirochetele pot fi vizualizate pe frotiu la microscopul cu câmp întunecat — Corect: Câmpul întunecat este metoda citată de vizualizare.\n\nDiagnosticul de elecție este cultura pe agar Thayer-Martin — Incorect: Thayer-Martin este pentru gonococ.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 284, 285, Infecții — Sifilisul (pagini PDF: 62, 63).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    284,
    285
   ],
   "pdfPages": [
    62,
    63
   ],
   "section": "Infecții — Sifilisul"
  },
  "learningObjective": "Contrastarea screeningului RPR cu persistența FTA-ABS, cu imposibilitatea culturii și cu câmpul întunecat.",
  "optionRationales": [
   "Sensibilitatea de 80% a VDRL/RPR este explicită.",
   "Nota precizează persistența FTA-ABS.",
   "Nota precizează că T. pallidum nu crește în culturi.",
   "Câmpul întunecat este metoda citată de vizualizare.",
   "Thayer-Martin este pentru gonococ."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează persistența FTA-ABS și atribuie sifilisului mediul de cultură al gonococului."
  },
  "textbookExpressions": [
   "FTA-ABS",
   "nu se dezvoltă în culturi"
  ]
 },
 {
  "id": "gineco-adv-023",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Fibromul uterin (leiomiomul):",
  "options": [
   "Regresează în general la menopauză",
   "Miomectomia este indicată la femeile simptomatice care doresc menținerea fertilității",
   "Agoniștii de GnRH reduc sângerarea și dimensiunea, dar sunt recomandați doar ca terapie temporară",
   "Este un adenocarcinom legat de estrogeni, tipic postmenopauză",
   "CA-125 este markerul specific de screening la toate femeile fertile"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Regresează în general la menopauză — Corect: Regresia la menopauză este explicită.\n\nMiomectomia este indicată la femeile simptomatice care doresc menținerea fertilității — Corect: Miomectomia pentru fertilitate este citată.\n\nAgoniștii de GnRH reduc sângerarea și dimensiunea, dar sunt recomandați doar ca terapie temporară — Corect: GnRH ca terapie temporară este descris.\n\nEste un adenocarcinom legat de estrogeni, tipic postmenopauză — Incorect: Adenocarcinomul postmenopauză este cancerul endometrial.\n\nCA-125 este markerul specific de screening la toate femeile fertile — Incorect: CA-125 nu este specific și nu este screeningul fibroamelor.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 286, Neoplasme — Fibromul uterin (pagini PDF: 64).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    286
   ],
   "pdfPages": [
    64
   ],
   "section": "Neoplasme — Fibromul uterin"
  },
  "learningObjective": "Recunoașterea regresiei la menopauză, a miomectomiei pentru fertilitate și a limitei GnRH.",
  "optionRationales": [
   "Regresia la menopauză este explicită.",
   "Miomectomia pentru fertilitate este citată.",
   "GnRH ca terapie temporară este descris.",
   "Adenocarcinomul postmenopauză este cancerul endometrial.",
   "CA-125 nu este specific și nu este screeningul fibroamelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă leiomiomul benign cu cancerul endometrial și supraestimează CA-125."
  },
  "textbookExpressions": [
   "regresează la menopauză",
   "Miomectomia"
  ]
 },
 {
  "id": "gineco-adv-024",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Cancerul endometrial:",
  "options": [
   "Este un adenocarcinom legat de expunerea la estrogeni, cel mai frecvent la femei în postmenopauză",
   "Factorii de risc includ anovulația cronică (SOPC), obezitatea și nuliparitatea",
   "Tratamentul de fond este histerectomia totală abdominală cu anexectomie bilaterală",
   "Screeningul de elecție este CA-125 la femeile fertile, înainte de 30 de ani",
   "Supraviețuirea la 5 ani în boala metastatică este de 96%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este un adenocarcinom legat de expunerea la estrogeni, cel mai frecvent la femei în postmenopauză — Corect: Legătura cu estrogenii și postmenopauza este explicită.\n\nFactorii de risc includ anovulația cronică (SOPC), obezitatea și nuliparitatea — Corect: SOPC, obezitatea și nuliparitatea sunt din lista de risc.\n\nTratamentul de fond este histerectomia totală abdominală cu anexectomie bilaterală — Corect: HTAB cu limfadenectomie este tratamentul, continuat pe pagina următoare.\n\nScreeningul de elecție este CA-125 la femeile fertile, înainte de 30 de ani — Incorect: CA-125 nu este screeningul de elecție al femeii fertile.\n\nSupraviețuirea la 5 ani în boala metastatică este de 96% — Incorect: 96% la 5 ani este supraviețuirea bolii localizate, nu a metastazelor (25%).\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 286, 287, Neoplasme — Cancerul endometrial (pagini PDF: 64, 65).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    286,
    287
   ],
   "pdfPages": [
    64,
    65
   ],
   "section": "Neoplasme — Cancerul endometrial"
  },
  "learningObjective": "Corelarea estrogenilor neopusi cu sângerarea de postmenopauză și cu HTAB.",
  "optionRationales": [
   "Legătura cu estrogenii și postmenopauza este explicită.",
   "SOPC, obezitatea și nuliparitatea sunt din lista de risc.",
   "HTAB cu limfadenectomie este tratamentul, continuat pe pagina următoare.",
   "CA-125 nu este screeningul de elecție al femeii fertile.",
   "96% la 5 ani este supraviețuirea bolii localizate, nu a metastazelor (25%)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Procentele 96% versus 25% sunt ușor de inversat între boala localizată și cea metastatică."
  },
  "textbookExpressions": [
   "postmenopauză",
   "estrogeni"
  ]
 },
 {
  "id": "gineco-adv-025",
  "topicId": "gineco",
  "type": "CS",
  "stem": "CA-125 este util ca marker pentru cancerul ovarian:",
  "options": [
   "Doar la femeile aflate în postmenopauză",
   "La toate adolescentele, ca screening de rutină",
   "Doar în primul trimestru de sarcină",
   "Pentru confirmarea fibroamelor uterine la nulipare",
   "Ca test de screening al cancerului de col, în locul frotiului Pap"
  ],
  "correct": [
   0
  ],
  "explanation": "Doar la femeile aflate în postmenopauză — Corect: Nota restrânge utilitatea la postmenopauză.\n\nLa toate adolescentele, ca screening de rutină — Incorect: Nu este screening de rutină la adolescente.\n\nDoar în primul trimestru de sarcină — Incorect: Sarcina nu este contextul de utilitate citat.\n\nPentru confirmarea fibroamelor uterine la nulipare — Incorect: Poate fi crescut în leiomiomatoză, dar nu o confirmă.\n\nCa test de screening al cancerului de col, în locul frotiului Pap — Incorect: Screeningul de col este Pap/HPV, nu CA-125.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 288, Neoplasme — Markerul CA-125 (pagini PDF: 66).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    288
   ],
   "pdfPages": [
    66
   ],
   "section": "Neoplasme — Markerul CA-125"
  },
  "learningObjective": "Recunoașterea limitei CA-125 la postmenopauză și a elevărilor nespecifice.",
  "optionRationales": [
   "Nota restrânge utilitatea la postmenopauză.",
   "Nu este screening de rutină la adolescente.",
   "Sarcina nu este contextul de utilitate citat.",
   "Poate fi crescut în leiomiomatoză, dar nu o confirmă.",
   "Screeningul de col este Pap/HPV, nu CA-125."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Nota nuanțează CA-125; distractorii îl generalizează ca screening universal."
  },
  "textbookExpressions": [
   "CA-125",
   "postmenopauză"
  ]
 },
 {
  "id": "gineco-adv-026",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Teratomul chistic benign (chistul dermoid):",
  "options": [
   "Este de origine din celule germinale și poate conține păr, dinți și glande sebacee",
   "Are risc crescut de torsiune ovariană",
   "1–2% suferă transformare malignă",
   "Regresează constant în primele 2 săptămâni ale ciclului, ca chistul folicular",
   "Tratamentul este doar supraveghere, fără chistectomie, chiar la ruptură cu peritonită"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este de origine din celule germinale și poate conține păr, dinți și glande sebacee — Corect: Originea germinală și conținutul (păr, dinți, sebum) sunt din tabel.\n\nAre risc crescut de torsiune ovariană — Corect: Riscul de torsiune este explicit.\n\n1–2% suferă transformare malignă — Corect: Transformarea malignă 1–2% este citată.\n\nRegresează constant în primele 2 săptămâni ale ciclului, ca chistul folicular — Incorect: Regresia menstruală caracterizează chistul folicular.\n\nTratamentul este doar supraveghere, fără chistectomie, chiar la ruptură cu peritonită — Incorect: Ruptura cu conținut uleios poate produce peritonită și cere chistectomie.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 288, Neoplasme — Tumorile ovariene benigne (pagini PDF: 66).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    288
   ],
   "pdfPages": [
    66
   ],
   "section": "Neoplasme — Tumorile ovariene benigne"
  },
  "learningObjective": "Recunoașterea conținutului ectodermic, a torsiunii și a riscului de 1–2% de malignizare.",
  "optionRationales": [
   "Originea germinală și conținutul (păr, dinți, sebum) sunt din tabel.",
   "Riscul de torsiune este explicit.",
   "Transformarea malignă 1–2% este citată.",
   "Regresia menstruală caracterizează chistul folicular.",
   "Ruptura cu conținut uleios poate produce peritonită și cere chistectomie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie dermoidului evoluția chistului folicular și neagă indicația chirurgicală."
  },
  "textbookExpressions": [
   "dinţi",
   "1-2%"
  ]
 },
 {
  "id": "gineco-adv-027",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Cancerul ovarian:",
  "options": [
   "Este cel mai frecvent de origine epitelială (65% din cazuri) sau cu celule germinale (25%)",
   "Factorii de risc includ infertilitatea, nuliparitatea și mutațiile BRCA1 sau BRCA2",
   "Majoritatea cazurilor sunt diagnosticate abia după o creștere considerabilă",
   "Originea germinală reprezintă 80% din cazuri, ca la cancerul de col scuamos",
   "CA-125 are sensibilitate excelentă ca screening la toate femeile fertile"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este cel mai frecvent de origine epitelială (65% din cazuri) sau cu celule germinale (25%) — Corect: Ponderile 65% epitelial și 25% germinal sunt explicite.\n\nFactorii de risc includ infertilitatea, nuliparitatea și mutațiile BRCA1 sau BRCA2 — Corect: Infertilitatea, nuliparitatea și BRCA sunt factorii de risc.\n\nMajoritatea cazurilor sunt diagnosticate abia după o creștere considerabilă — Corect: Diagnosticul tardiv după creștere considerabilă este citat.\n\nOriginea germinală reprezintă 80% din cazuri, ca la cancerul de col scuamos — Incorect: 80% scuamos este histologia cancerului de col, nu originea ovariană germinală.\n\nCA-125 are sensibilitate excelentă ca screening la toate femeile fertile — Incorect: CA-125 este nuanțat ca util în postmenopauză, nu ca screening universal.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 289, Neoplasme — Cancerul ovarian (pagini PDF: 67).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    289
   ],
   "pdfPages": [
    67
   ],
   "section": "Neoplasme — Cancerul ovarian"
  },
  "learningObjective": "Ierarhizarea histologiei 65/25 și a riscului BRCA, cu diagnosticul tardiv.",
  "optionRationales": [
   "Ponderile 65% epitelial și 25% germinal sunt explicite.",
   "Infertilitatea, nuliparitatea și BRCA sunt factorii de risc.",
   "Diagnosticul tardiv după creștere considerabilă este citat.",
   "80% scuamos este histologia cancerului de col, nu originea ovariană germinală.",
   "CA-125 este nuanțat ca util în postmenopauză, nu ca screening universal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută 80% de la col și supraestimează CA-125 ca screening."
  },
  "textbookExpressions": [
   "65% cazuri",
   "BRCAl"
  ]
 },
 {
  "id": "gineco-adv-028",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Lichenul scleros vulvar:",
  "options": [
   "Este leziune precursoare pentru carcinomul vulvar scuamos",
   "Pielea poate apărea subțire și ridată precum „hârtia de țigaretă”",
   "Tratamentul citat este clobetasol topic",
   "Afectează vaginul în același mod ca vulva, cu secreție brânzoasă",
   "Diagnosticul se pune pe celule clue, fără biopsie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este leziune precursoare pentru carcinomul vulvar scuamos — Corect: Rolul de leziune precursoare este explicit.\n\nPielea poate apărea subțire și ridată precum „hârtia de țigaretă” — Corect: Nota descrie aspectul de hârtie de țigaretă.\n\nTratamentul citat este clobetasol topic — Corect: Clobetasolul în doze mari este tratamentul.\n\nAfectează vaginul în același mod ca vulva, cu secreție brânzoasă — Incorect: Textul precizează absența afectării vaginului; secreția brânzoasă este a candidei.\n\nDiagnosticul se pune pe celule clue, fără biopsie — Incorect: Diagnosticul este biopsia prin ciupitură, nu celulele clue.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 289, Afecțiuni vulvare — Lichenul scleros (pagini PDF: 67).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    289
   ],
   "pdfPages": [
    67
   ],
   "section": "Afecțiuni vulvare — Lichenul scleros"
  },
  "learningObjective": "Recunoașterea riscului de carcinom, a aspectului de hârtie de țigaretă și a clobetasolului.",
  "optionRationales": [
   "Rolul de leziune precursoare este explicit.",
   "Nota descrie aspectul de hârtie de țigaretă.",
   "Clobetasolul în doze mari este tratamentul.",
   "Textul precizează absența afectării vaginului; secreția brânzoasă este a candidei.",
   "Diagnosticul este biopsia prin ciupitură, nu celulele clue."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă candida (vagin, brânză) și diagnosticul de vaginoză."
  },
  "textbookExpressions": [
   "hârtia de ţigaretă",
   "clobetasol"
  ]
 },
 {
  "id": "gineco-adv-029",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Chistul glandei Bartholin:",
  "options": [
   "Este o tumoră chistică netedă, mobilă, la poziția orei 4 sau 8 la baza labiei mari",
   "Se poate infecta și evolua spre abces care necesită incizie și drenaj",
   "Este sinonim cu endometriomul ovarian și se tratează cu danazol",
   "Localizarea tipică este cadranul supero-extern al sânului",
   "Se asociază cu expunerea in utero la dietilstilbestrol"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este o tumoră chistică netedă, mobilă, la poziția orei 4 sau 8 la baza labiei mari — Corect: Poziția orei 4 sau 8 este din notă.\n\nSe poate infecta și evolua spre abces care necesită incizie și drenaj — Corect: Incizia și drenajul abcesului sunt citate.\n\nEste sinonim cu endometriomul ovarian și se tratează cu danazol — Incorect: Endometriomul este ovarian, tratat diferit.\n\nLocalizarea tipică este cadranul supero-extern al sânului — Incorect: Cadranul supero-extern este al cancerului mamar.\n\nSe asociază cu expunerea in utero la dietilstilbestrol — Incorect: DES se asociază cu adenocarcinomul vaginal cu celule clare.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 289, Afecțiuni vulvare — Chistul Bartholin (pagini PDF: 67).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    289
   ],
   "pdfPages": [
    67
   ],
   "section": "Afecțiuni vulvare — Chistul Bartholin"
  },
  "learningObjective": "Localizarea la orele 4 și 8 și recunoașterea drenajului abcesului.",
  "optionRationales": [
   "Poziția orei 4 sau 8 este din notă.",
   "Incizia și drenajul abcesului sunt citate.",
   "Endometriomul este ovarian, tratat diferit.",
   "Cadranul supero-extern este al cancerului mamar.",
   "DES se asociază cu adenocarcinomul vaginal cu celule clare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută localizarea pe sân și etiologia DES a adenocarcinomului cu celule clare."
  },
  "textbookExpressions": [
   "orei 4 sau 8",
   "incizie şi drenaj"
  ]
 },
 {
  "id": "gineco-adv-030",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Adenocarcinomul vaginal cu celule clare este asociat cu:",
  "options": [
   "Expunerea in utero la dietilstilbestrol",
   "Infecția HPV 6 și 11",
   "Celulele clue din vaginoză",
   "Utilizarea prelungită a tampoanelor",
   "Deficitul de uroporfirinogen-decarboxilază"
  ],
  "correct": [
   0
  ],
  "explanation": "Expunerea in utero la dietilstilbestrol — Corect: Nota leagă adenocarcinomul cu celule clare de DES in utero.\n\nInfecția HPV 6 și 11 — Incorect: HPV 6 și 11 sunt tipuri condilomatoase, nu această asociere.\n\nCelulele clue din vaginoză — Incorect: Celulele clue definesc vaginoza.\n\nUtilizarea prelungită a tampoanelor — Incorect: Tampoanele se leagă de șocul toxic.\n\nDeficitul de uroporfirinogen-decarboxilază — Incorect: Enzima citată aparține porfiriei cutanate tardive.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 290, Neoplasme — Cancerul vaginal (pagini PDF: 68).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    290
   ],
   "pdfPages": [
    68
   ],
   "section": "Neoplasme — Cancerul vaginal"
  },
  "learningObjective": "Asocierea DES antenatal cu adenocarcinomul cu celule clare, distinct de HPV 16/18 al formei scuamoase.",
  "optionRationales": [
   "Nota leagă adenocarcinomul cu celule clare de DES in utero.",
   "HPV 6 și 11 sunt tipuri condilomatoase, nu această asociere.",
   "Celulele clue definesc vaginoza.",
   "Tampoanele se leagă de șocul toxic.",
   "Enzima citată aparține porfiriei cutanate tardive."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Nota alăturată leagă forma scuamoasă de HPV 16/18; candidatul trebuie să păstreze DES pentru celulele clare."
  },
  "textbookExpressions": [
   "dietilstilbestrol",
   "celule clare"
  ]
 },
 {
  "id": "gineco-adv-031",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Fibroadenomul mamar:",
  "options": [
   "Este cea mai frecventă tumoră mamară benignă, mai ales la femei sub 30 de ani",
   "Se prezintă ca masă unică, fermă, sferică, mobilă, cu margini bine delimitate",
   "Dimensiunea poate varia în perioada menstruației, iar tumora este sensibilă la estrogeni",
   "Este un cancer lobular invaziv, cu aspect de coajă de portocală",
   "Secreția mamelonară sanguinolentă este semnul de prezentare tipic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este cea mai frecventă tumoră mamară benignă, mai ales la femei sub 30 de ani — Corect: Predominanța sub 30 de ani este explicită.\n\nSe prezintă ca masă unică, fermă, sferică, mobilă, cu margini bine delimitate — Corect: Masa unică fermă mobilă este tabloul.\n\nDimensiunea poate varia în perioada menstruației, iar tumora este sensibilă la estrogeni — Corect: Variația menstruală și sensibilitatea la estrogeni sunt citate.\n\nEste un cancer lobular invaziv, cu aspect de coajă de portocală — Incorect: Coaja de portocală aparține cancerului.\n\nSecreția mamelonară sanguinolentă este semnul de prezentare tipic — Incorect: Secreția sanguinolentă caracterizează papilomul intraductal.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 291, 290, Afecțiunile sânului — Fibroadenomul (pagini PDF: 69, 68).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    291,
    290
   ],
   "pdfPages": [
    69,
    68
   ],
   "section": "Afecțiunile sânului — Fibroadenomul"
  },
  "learningObjective": "Recunoașterea tumorii benigne mobile a femeii tinere, distinct de cancer și de papilomul intraductal.",
  "optionRationales": [
   "Predominanța sub 30 de ani este explicită.",
   "Masa unică fermă mobilă este tabloul.",
   "Variația menstruală și sensibilitatea la estrogeni sunt citate.",
   "Coaja de portocală aparține cancerului.",
   "Secreția sanguinolentă caracterizează papilomul intraductal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă semnele cancerului și ale papilomului intraductal, definite pe aceeași pagină."
  },
  "textbookExpressions": [
   "<30 ani",
   "mobilă"
  ]
 },
 {
  "id": "gineco-adv-032",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Papilomul intraductal:",
  "options": [
   "Se prezintă cu secreție mamelonară sanguinolentă sau non-sanguinolentă",
   "Poate asocia masă tumorală palpabilă retroareolară",
   "Tratamentul este excizia chirurgicală, cu biopsie pentru excluderea cancerului",
   "Este cea mai frecventă tumoră mamară benignă la femei sub 30 de ani",
   "Nu are potențial malign, deci biopsia este superfluă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se prezintă cu secreție mamelonară sanguinolentă sau non-sanguinolentă — Corect: Secreția sanguinolentă/non-sanguinolentă este tabloul.\n\nPoate asocia masă tumorală palpabilă retroareolară — Corect: Masa retroareolară este citată.\n\nTratamentul este excizia chirurgicală, cu biopsie pentru excluderea cancerului — Corect: Excizia cu excluderea cancerului este tratamentul.\n\nEste cea mai frecventă tumoră mamară benignă la femei sub 30 de ani — Incorect: Cea mai frecventă tumoră benignă sub 30 de ani este fibroadenomul.\n\nNu are potențial malign, deci biopsia este superfluă — Incorect: Textul precizează potențial malign și cere biopsie excizională.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 291, Afecțiunile sânului — Papilomul intraductal (pagini PDF: 69).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    291
   ],
   "pdfPages": [
    69
   ],
   "section": "Afecțiunile sânului — Papilomul intraductal"
  },
  "learningObjective": "Asocierea secreției mamelonare cu masa retroareolară și cu excizia diagnostică.",
  "optionRationales": [
   "Secreția sanguinolentă/non-sanguinolentă este tabloul.",
   "Masa retroareolară este citată.",
   "Excizia cu excluderea cancerului este tratamentul.",
   "Cea mai frecventă tumoră benignă sub 30 de ani este fibroadenomul.",
   "Textul precizează potențial malign și cere biopsie excizională."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie papilomului epidemiologia fibroadenomului și neagă potențialul malign citat."
  },
  "textbookExpressions": [
   "sanguinolentă",
   "retroareolară"
  ]
 },
 {
  "id": "gineco-adv-033",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Modificările fibrochistice mamare:",
  "options": [
   "Apar la femei de vârstă reproductivă, cu formațiuni care variază pe parcursul ciclului",
   "Simptomele se atenuează postmenstrual",
   "Reducerea cafeinei și a grăsimilor, COC, progesteron sau tamoxifen pot ameliora simptomele",
   "Sunt cea mai frecventă localizare a cancerului, în cadranul supero-extern",
   "Aspirația cu ac fin are risc zero de rezultat fals negativ"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Apar la femei de vârstă reproductivă, cu formațiuni care variază pe parcursul ciclului — Corect: Vârsta reproductivă și variația ciclică sunt explicite.\n\nSimptomele se atenuează postmenstrual — Corect: Atenuarea postmenstruală este citată.\n\nReducerea cafeinei și a grăsimilor, COC, progesteron sau tamoxifen pot ameliora simptomele — Corect: Cafeina, grăsimile, COC, progesteronul și tamoxifenul sunt tratamentul.\n\nSunt cea mai frecventă localizare a cancerului, în cadranul supero-extern — Incorect: Cadranul supero-extern este localizarea cea mai frecventă a cancerului mamar.\n\nAspirația cu ac fin are risc zero de rezultat fals negativ — Incorect: Fals-negativul FNA de 20% este al cancerului, nu o garanție zero.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 290, 291, Afecțiunile sânului — Modificări fibrochistice (pagini PDF: 68, 69).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    290,
    291
   ],
   "pdfPages": [
    68,
    69
   ],
   "section": "Afecțiunile sânului — Modificări fibrochistice"
  },
  "learningObjective": "Recunoașterea variației ciclice și a măsurilor (cafeină, COC, tamoxifen), distinct de cancer.",
  "optionRationales": [
   "Vârsta reproductivă și variația ciclică sunt explicite.",
   "Atenuarea postmenstruală este citată.",
   "Cafeina, grăsimile, COC, progesteronul și tamoxifenul sunt tratamentul.",
   "Cadranul supero-extern este localizarea cea mai frecventă a cancerului mamar.",
   "Fals-negativul FNA de 20% este al cancerului, nu o garanție zero."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută localizarea și limita FNA ale cancerului asupra bolii fibrochistice."
  },
  "textbookExpressions": [
   "cafeinei",
   "variază"
  ]
 },
 {
  "id": "gineco-adv-034",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Localizarea cea mai frecventă a cancerului mamar este:",
  "options": [
   "Cadranul supero-extern",
   "Cadranul infero-intern",
   "Regiunea retroareolară",
   "Doar coada axilară, fără parenchim mamar",
   "Peretele vaginal posterior superior"
  ],
  "correct": [
   0
  ],
  "explanation": "Cadranul supero-extern — Corect: Nota identifică cadranul supero-extern.\n\nCadranul infero-intern — Incorect: Cadranul infero-intern nu este sediul citat ca cel mai frecvent.\n\nRegiunea retroareolară — Incorect: Retroareolar este tipic papilomului intraductal.\n\nDoar coada axilară, fără parenchim mamar — Incorect: Coada axilară nu este localizarea unică citată.\n\nPeretele vaginal posterior superior — Incorect: Peretele vaginal posterior este al cancerului vaginal scuamos.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 291, Afecțiunile sânului — Cancerul mamar (pagini PDF: 69).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    291
   ],
   "pdfPages": [
    69
   ],
   "section": "Afecțiunile sânului — Cancerul mamar"
  },
  "learningObjective": "Memorarea cadranului supero-extern ca sediu cel mai frecvent.",
  "optionRationales": [
   "Nota identifică cadranul supero-extern.",
   "Cadranul infero-intern nu este sediul citat ca cel mai frecvent.",
   "Retroareolar este tipic papilomului intraductal.",
   "Coada axilară nu este localizarea unică citată.",
   "Peretele vaginal posterior este al cancerului vaginal scuamos."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt sedii reale ale altor leziuni mamare sau vaginale din capitol."
  },
  "textbookExpressions": [
   "cea mai frecventă",
   "cancerului mamar"
  ]
 },
 {
  "id": "gineco-adv-035",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Dismenoreea primară:",
  "options": [
   "Este durere menstruală fără patologie pelvină identificată",
   "Tratamentul include AINS sau contraceptive orale",
   "Forma secundară poate fi cauzată de endometrioză, BIP, fibroame, chiste sau adenomioză",
   "Se definește prin absența menstruațiilor până la 16 ani",
   "Este sinonimă cu mittelschmerz, durerea ovulatorie de la mijlocul ciclului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este durere menstruală fără patologie pelvină identificată — Corect: Absența patologiei pelvine definește forma primară.\n\nTratamentul include AINS sau contraceptive orale — Corect: AINS sau COC sunt tratamentul formei primare.\n\nForma secundară poate fi cauzată de endometrioză, BIP, fibroame, chiste sau adenomioză — Corect: Lista cauzelor secundare este explicită.\n\nSe definește prin absența menstruațiilor până la 16 ani — Incorect: Absența menstruațiilor până la 16 ani definește amenoreea primară.\n\nEste sinonimă cu mittelschmerz, durerea ovulatorie de la mijlocul ciclului — Incorect: Mittelschmerz este durerea ovulatorie, nu dismenoreea.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 280, 281, Tulburări menstruale — Dismenoreea (pagini PDF: 58, 59).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    280,
    281
   ],
   "pdfPages": [
    58,
    59
   ],
   "section": "Tulburări menstruale — Dismenoreea"
  },
  "learningObjective": "Separarea formei primare (AINS/COC) de cauzele secundare pelvine.",
  "optionRationales": [
   "Absența patologiei pelvine definește forma primară.",
   "AINS sau COC sunt tratamentul formei primare.",
   "Lista cauzelor secundare este explicită.",
   "Absența menstruațiilor până la 16 ani definește amenoreea primară.",
   "Mittelschmerz este durerea ovulatorie, nu dismenoreea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă dismenoreea cu amenoreea primară și cu mittelschmerz."
  },
  "textbookExpressions": [
   "Dismenoreea",
   "antiinflamatoare nesteroidiene"
  ]
 },
 {
  "id": "gineco-adv-036",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Sindromul premenstrual și tulburarea disforică premenstruală:",
  "options": [
   "Apar în faza luteală, la paciente cu funcție ovariană normală",
   "5–10% dintre femei au simptome suficient de severe cât să le împiedice activitatea",
   "SSRI, eventual cu alprazolam, pot ameliora labilitatea emoțională",
   "Debutul este în faza foliculară, imediat după menstruație",
   "CA-125 are sensibilitate foarte bună pentru diagnostic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Apar în faza luteală, la paciente cu funcție ovariană normală — Corect: Faza luteală și funcția ovariană normală sunt explicite.\n\n5–10% dintre femei au simptome suficient de severe cât să le împiedice activitatea — Corect: Intervalul 5–10% este citat.\n\nSSRI, eventual cu alprazolam, pot ameliora labilitatea emoțională — Corect: SSRI ± alprazolam sunt tratamentul labilității.\n\nDebutul este în faza foliculară, imediat după menstruație — Incorect: Simptomele preced menstruația, nu urmează imediat după ea.\n\nCA-125 are sensibilitate foarte bună pentru diagnostic — Incorect: CA-125 este discutat la endometrioză, cu sensibilitate slabă, nu ca diagnostic de SPM.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 281, Tulburări menstruale — SPM și TDPM (pagini PDF: 59).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    281
   ],
   "pdfPages": [
    59
   ],
   "section": "Tulburări menstruale — SPM și TDPM"
  },
  "learningObjective": "Plasarea simptomelor în faza luteală și recunoașterea ponderii 5–10% plus rolul SSRI.",
  "optionRationales": [
   "Faza luteală și funcția ovariană normală sunt explicite.",
   "Intervalul 5–10% este citat.",
   "SSRI ± alprazolam sunt tratamentul labilității.",
   "Simptomele preced menstruația, nu urmează imediat după ea.",
   "CA-125 este discutat la endometrioză, cu sensibilitate slabă, nu ca diagnostic de SPM."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută faza ciclului și importă markerul CA-125 din endometrioză."
  },
  "textbookExpressions": [
   "faza luteală",
   "5-10%"
  ]
 },
 {
  "id": "gineco-adv-037",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Menstruațiile sunt considerate anormale când:",
  "options": [
   "Apar la intervale sub 24 de zile sau peste 35 de zile",
   "Durează peste 7 zile sau pierderea depășește 80 mL",
   "Sunt neregulate sau apar în postmenopauză",
   "Intervalul normal este sub 15 zile, cu durată peste 14 zile",
   "Primul pas diagnostic este histerectomia, fără β-hCG"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Apar la intervale sub 24 de zile sau peste 35 de zile — Corect: Intervalele <24 sau >35 zile sunt criteriul.\n\nDurează peste 7 zile sau pierderea depășește 80 mL — Corect: Durata >7 zile și >80 mL sunt explicite.\n\nSunt neregulate sau apar în postmenopauză — Corect: Neregularitatea și postmenopauza sunt din tablou.\n\nIntervalul normal este sub 15 zile, cu durată peste 14 zile — Incorect: Pragurile 15/14 zile nu sunt cele din text.\n\nPrimul pas diagnostic este histerectomia, fără β-hCG — Incorect: β-hCG este printre primele analize; histerectomia nu este primul pas.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 281, Tulburări menstruale — Sângerări uterine anormale (pagini PDF: 59).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    281
   ],
   "pdfPages": [
    59
   ],
   "section": "Tulburări menstruale — Sângerări uterine anormale"
  },
  "learningObjective": "Aplicarea pragurilor 24–35 zile, 7 zile și 80 mL, plus sângerarea de postmenopauză.",
  "optionRationales": [
   "Intervalele <24 sau >35 zile sunt criteriul.",
   "Durata >7 zile și >80 mL sunt explicite.",
   "Neregularitatea și postmenopauza sunt din tablou.",
   "Pragurile 15/14 zile nu sunt cele din text.",
   "β-hCG este printre primele analize; histerectomia nu este primul pas."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cifrele 24/35/7/80 sunt ușor de deplasat; distractorul sare la histerectomie fără test de sarcină."
  },
  "textbookExpressions": [
   ">7 zile",
   ">80 mL"
  ]
 },
 {
  "id": "gineco-adv-038",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Gonoreea diseminată se prezintă ca:",
  "options": [
   "Dermatită pustulară, poliartralgie asimetrică migratorie și tenosinovită",
   "Șancru nedureros unic cu adenopatie inghinală",
   "Celule clue și miros de pește",
   "Plăci albe poligonale perianale în formă de 8",
   "Masă mamară imobilă cu aspect de coajă de portocală"
  ],
  "correct": [
   0
  ],
  "explanation": "Dermatită pustulară, poliartralgie asimetrică migratorie și tenosinovită — Corect: Triada dermatită pustulară–poliartralgie migratorie–tenosinovită este explicită.\n\nȘancru nedureros unic cu adenopatie inghinală — Incorect: Șancrul nedureros este sifilisul primar.\n\nCelule clue și miros de pește — Incorect: Celulele clue definesc vaginoza.\n\nPlăci albe poligonale perianale în formă de 8 — Incorect: Plăcile în 8 sunt lichenul scleros.\n\nMasă mamară imobilă cu aspect de coajă de portocală — Incorect: Coaja de portocală este a cancerului mamar.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 283, Infecții — Cervicitele (pagini PDF: 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    283
   ],
   "pdfPages": [
    61
   ],
   "section": "Infecții — Cervicitele"
  },
  "learningObjective": "Identificarea triadei cutaneo-articulare a gonoreei diseminate.",
  "optionRationales": [
   "Triada dermatită pustulară–poliartralgie migratorie–tenosinovită este explicită.",
   "Șancrul nedureros este sifilisul primar.",
   "Celulele clue definesc vaginoza.",
   "Plăcile în 8 sunt lichenul scleros.",
   "Coaja de portocală este a cancerului mamar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate distractoarele sunt prezentări reale din capitol, atribuite altor entități."
  },
  "textbookExpressions": [
   "tenosinovită",
   "poliartralgie"
  ]
 },
 {
  "id": "gineco-adv-039",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Femeile între 21 și 29 de ani trebuie examinate citologic:",
  "options": [
   "La fiecare 3 ani",
   "Anual, cu test HPV cerut la fiecare vizită",
   "La fiecare 5 ani, fără citologie",
   "Doar după menopauză",
   "O singură dată, la 65 de ani"
  ],
  "correct": [
   0
  ],
  "explanation": "La fiecare 3 ani — Corect: Nota cere examinare la fiecare 3 ani între 21 și 29 de ani.\n\nAnual, cu test HPV cerut la fiecare vizită — Incorect: HPV la fiecare 5 ani este opțiunea de la ≥30 de ani, nu un anual obligatoriu la 21–29.\n\nLa fiecare 5 ani, fără citologie — Incorect: Cei 5 ani fără citologie nu sunt schema acestei grupe.\n\nDoar după menopauză — Incorect: Screeningul începe la 21 de ani, nu după menopauză.\n\nO singură dată, la 65 de ani — Incorect: 65 de ani este vârsta de oprire, nu unicul test.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 287, Neoplasme — Screeningul cancerului de col (pagini PDF: 65).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    287
   ],
   "pdfPages": [
    65
   ],
   "section": "Neoplasme — Screeningul cancerului de col"
  },
  "learningObjective": "Aplicarea intervalului de 3 ani între 21 și 29 de ani, distinct de HPV la ≥30 de ani.",
  "optionRationales": [
   "Nota cere examinare la fiecare 3 ani între 21 și 29 de ani.",
   "HPV la fiecare 5 ani este opțiunea de la ≥30 de ani, nu un anual obligatoriu la 21–29.",
   "Cei 5 ani fără citologie nu sunt schema acestei grupe.",
   "Screeningul începe la 21 de ani, nu după menopauză.",
   "65 de ani este vârsta de oprire, nu unicul test."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Intervalele 3 ani versus 5 ani și vârstele 21/30/65 sunt ușor de permutat."
  },
  "textbookExpressions": [
   "21 şi 29",
   "fiecare 3 ani"
  ]
 },
 {
  "id": "gineco-adv-040",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Cancerul vaginal scuamos:",
  "options": [
   "Este localizat în partea superioară a peretelui vaginal posterior",
   "Se asociază cu infecția HPV 16 sau 18",
   "Este cauzat de expunerea in utero la dietilstilbestrol",
   "Se diagnostichează prin celule clue pe frotiul salin",
   "Regresează la menopauză, ca leiomiomul"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este localizat în partea superioară a peretelui vaginal posterior — Corect: Localizarea posterior-superioară este din notă.\n\nSe asociază cu infecția HPV 16 sau 18 — Corect: HPV 16 sau 18 este asocierea citată.\n\nEste cauzat de expunerea in utero la dietilstilbestrol — Incorect: DES se asociază cu adenocarcinomul cu celule clare.\n\nSe diagnostichează prin celule clue pe frotiul salin — Incorect: Celulele clue definesc vaginoza.\n\nRegresează la menopauză, ca leiomiomul — Incorect: Regresia la menopauză este a fibroamelor, nu a cancerului.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 290, Neoplasme — Cancerul vaginal (pagini PDF: 68).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    290
   ],
   "pdfPages": [
    68
   ],
   "section": "Neoplasme — Cancerul vaginal"
  },
  "learningObjective": "Contrastarea formei scuamoase HPV 16/18 cu adenocarcinomul DES.",
  "optionRationales": [
   "Localizarea posterior-superioară este din notă.",
   "HPV 16 sau 18 este asocierea citată.",
   "DES se asociază cu adenocarcinomul cu celule clare.",
   "Celulele clue definesc vaginoza.",
   "Regresia la menopauză este a fibroamelor, nu a cancerului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Nota alăturată despre DES este capcana clasică față de HPV 16/18 al formei scuamoase."
  },
  "textbookExpressions": [
   "HPV 16 sau 18",
   "peretelui vaginal posterior"
  ]
 },
 {
  "id": "gineco-adv-041",
  "topicId": "gineco",
  "type": "CS",
  "stem": "În lichenul scleros, pielea perianală poate avea aspectul:",
  "options": [
   "Cifrei 8",
   "Celulelor clue",
   "Plăcii heraldice",
   "Semnului Auspitz",
   "Cojii de portocală"
  ],
  "correct": [
   0
  ],
  "explanation": "Cifrei 8 — Corect: Textul descrie aspectul cifrei 8 al pielii perianale.\n\nCelulelor clue — Incorect: Celulele clue sunt ale vaginozei.\n\nPlăcii heraldice — Incorect: Placa heraldică este a pitiriazisului rozat.\n\nSemnului Auspitz — Incorect: Auspitz este al psoriazisului.\n\nCojii de portocală — Incorect: Coaja de portocală este a cancerului mamar.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 289, Afecțiuni vulvare — Lichenul scleros (pagini PDF: 67).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    289
   ],
   "pdfPages": [
    67
   ],
   "section": "Afecțiuni vulvare — Lichenul scleros"
  },
  "learningObjective": "Identificarea aspectului perianal în 8, distinct de alte metafore lezionale din ginecologie și dermatologie.",
  "optionRationales": [
   "Textul descrie aspectul cifrei 8 al pielii perianale.",
   "Celulele clue sunt ale vaginozei.",
   "Placa heraldică este a pitiriazisului rozat.",
   "Auspitz este al psoriazisului.",
   "Coaja de portocală este a cancerului mamar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate distractoarele sunt eponime/aspecte reale, dar din alte boli."
  },
  "textbookExpressions": [
   "cifrei 8",
   "perianală"
  ]
 },
 {
  "id": "gineco-adv-042",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Autoexaminarea mamară lunară după menstruație:",
  "options": [
   "Ajută la distincția dintre leziunile evolutive și variațiile lunare ale țesutului mamar",
   "Nu s-a dovedit că ar duce la scăderea mortalității",
   "Leziunile suspecte mamografic sunt zonele hiperdense sau calcificările",
   "Scade demonstrabil mortalitatea, înlocuind mamografia după 40 de ani",
   "Înlocuiește biopsia leziunilor solide"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ajută la distincția dintre leziunile evolutive și variațiile lunare ale țesutului mamar — Corect: Rolul de a distinge variațiile lunare este explicit.\n\nNu s-a dovedit că ar duce la scăderea mortalității — Corect: Absența dovezii de scădere a mortalității este din aceeași notă.\n\nLeziunile suspecte mamografic sunt zonele hiperdense sau calcificările — Corect: Hiperdensele și calcificările sunt leziunile suspecte citate.\n\nScade demonstrabil mortalitatea, înlocuind mamografia după 40 de ani — Incorect: Textul nu îi atribuie scăderea mortalității și nu înlocuiește mamografia.\n\nÎnlocuiește biopsia leziunilor solide — Incorect: Biopsia rămâne necesară pentru leziunile suspecte.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 290, Afecțiunile sânului — Autoexaminarea și mamografia (pagini PDF: 68).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    290
   ],
   "pdfPages": [
    68
   ],
   "section": "Afecțiunile sânului — Autoexaminarea și mamografia"
  },
  "learningObjective": "Nuanțarea utilității autoexaminării (distincție ciclică, fără scăderea dovedită a mortalității) și a semnelor mamografice.",
  "optionRationales": [
   "Rolul de a distinge variațiile lunare este explicit.",
   "Absența dovezii de scădere a mortalității este din aceeași notă.",
   "Hiperdensele și calcificările sunt leziunile suspecte citate.",
   "Textul nu îi atribuie scăderea mortalității și nu înlocuiește mamografia.",
   "Biopsia rămâne necesară pentru leziunile suspecte."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă o metodă fără impact dovedit pe mortalitate într-un substitut al mamografiei și biopsiei."
  },
  "textbookExpressions": [
   "nu s-a dovedit",
   "calcificările"
  ]
 },
 {
  "id": "gineco-adv-043",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Tratamentul de primă linie pentru bufeurile de menopauză este:",
  "options": [
   "Scăderea ponderală",
   "Estrogenul oral continuu, fără evaluarea riscului trombotic",
   "Chimioterapia pe bază de cisplatin, ca în cancerul de col invaziv",
   "Ablația endometrială de primă intenție",
   "Metronidazolul, ca în vaginoza bacteriană"
  ],
  "correct": [
   0
  ],
  "explanation": "Scăderea ponderală — Corect: Textul precizează că tratamentul de primă linie pentru bufeuri este scăderea ponderală.\n\nEstrogenul oral continuu, fără evaluarea riscului trombotic — Incorect: Estrogenul sistemic crește riscul de cancer mamar și TVP; nu este cotat ca primă linie.\n\nChimioterapia pe bază de cisplatin, ca în cancerul de col invaziv — Incorect: Cisplatinul aparține cancerului de col invaziv.\n\nAblația endometrială de primă intenție — Incorect: Ablația endometrială este pentru hemoragii uterine severe.\n\nMetronidazolul, ca în vaginoza bacteriană — Incorect: Metronidazolul tratează vaginoza, nu bufeurile.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 277, Fiziologie — Menopauza (pagini PDF: 55).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    277
   ],
   "pdfPages": [
    55
   ],
   "section": "Fiziologie — Menopauza"
  },
  "learningObjective": "Identificarea scăderii ponderale ca primă linie pentru bufeuri, distinct de estrogenul sistemic.",
  "optionRationales": [
   "Textul precizează că tratamentul de primă linie pentru bufeuri este scăderea ponderală.",
   "Estrogenul sistemic crește riscul de cancer mamar și TVP; nu este cotat ca primă linie.",
   "Cisplatinul aparține cancerului de col invaziv.",
   "Ablația endometrială este pentru hemoragii uterine severe.",
   "Metronidazolul tratează vaginoza, nu bufeurile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt terapii reale din capitol, atribuite greșit bufeurilor a căror primă linie este ponderală."
  },
  "textbookExpressions": [
   "bufeuri",
   "scăderea ponderală"
  ]
 },
 {
  "id": "gineco-adv-044",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la menopauză și osteoporoză:",
  "options": [
   "Tratamentul local cu estrogeni este contraindicat la pacientele cu istoric de cancer de sân",
   "Nivelul scăzut al estrogenilor ovarieni crește riscul de osteoporoză",
   "Terapia hormonală este asociată cu risc crescut de cancer mamar și tromboză venoasă profundă",
   "Calciul, vitamina D, bisfosfonații și exercițiul previn osteoporoza",
   "Raloxifenul și tamoxifenul cresc osteoporoza și trebuie evitați după menopauză"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Tratamentul local cu estrogeni este contraindicat la pacientele cu istoric de cancer de sân — Corect: Nota contraindică estrogenul local după cancer mamar.\n\nNivelul scăzut al estrogenilor ovarieni crește riscul de osteoporoză — Corect: Nota leagă estrogenii ovarieni scăzuți de osteoporoză.\n\nTerapia hormonală este asociată cu risc crescut de cancer mamar și tromboză venoasă profundă — Corect: THS este asociată explicit cu cancer mamar și TVP.\n\nCalciul, vitamina D, bisfosfonații și exercițiul previn osteoporoza — Corect: Calciul, vitamina D, bisfosfonații și exercițiul sunt măsurile de prevenție.\n\nRaloxifenul și tamoxifenul cresc osteoporoza și trebuie evitați după menopauză — Incorect: SERM (raloxifen, tamoxifen) servesc la reducerea osteoporozei, nu o cresc.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 277, Fiziologie — Menopauza și osteoporoza (pagini PDF: 55).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    277
   ],
   "pdfPages": [
    55
   ],
   "section": "Fiziologie — Menopauza și osteoporoza"
  },
  "learningObjective": "Corelarea contraindicației estrogenului local după cancer mamar cu riscul de osteoporoză și cu limitele THS.",
  "optionRationales": [
   "Nota contraindică estrogenul local după cancer mamar.",
   "Nota leagă estrogenii ovarieni scăzuți de osteoporoză.",
   "THS este asociată explicit cu cancer mamar și TVP.",
   "Calciul, vitamina D, bisfosfonații și exercițiul sunt măsurile de prevenție.",
   "SERM (raloxifen, tamoxifen) servesc la reducerea osteoporozei, nu o cresc."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează efectul SERM asupra osteoporozei, pe care textul îl descrie ca protector."
  },
  "textbookExpressions": [
   "cancer de sân",
   "raloxifenul"
  ]
 },
 {
  "id": "gineco-adv-045",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Medroxiprogesteronul acetat (Depo-Provera):",
  "options": [
   "Este un analog de progesteron administrat din 3 în 3 luni, care inhibă ovulația și îngroșarea endometrului",
   "Efectele secundare includ greață, cefalee, creștere ponderală și osteoporoză",
   "Trebuie schimbat săptămânal, ca patch-ul transdermic",
   "Conține etinilestradiol în doze mai mari decât inelul vaginal",
   "Eficacitatea scade la pacientele cu masă corporală mare prin difuzie în țesutul adipos, identic patch-ului"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este un analog de progesteron administrat din 3 în 3 luni, care inhibă ovulația și îngroșarea endometrului — Corect: Administrarea din 3 în 3 luni și inhibiția ovulației/endometrului sunt din tabel.\n\nEfectele secundare includ greață, cefalee, creștere ponderală și osteoporoză — Corect: Greața, cefaleea, creșterea ponderală și osteoporoza sunt efectele citate.\n\nTrebuie schimbat săptămânal, ca patch-ul transdermic — Incorect: Schimbarea săptămânală caracterizează patch-ul.\n\nConține etinilestradiol în doze mai mari decât inelul vaginal — Incorect: Etinilestradiolul aparține inelului și COC, nu Depo.\n\nEficacitatea scade la pacientele cu masă corporală mare prin difuzie în țesutul adipos, identic patch-ului — Incorect: Eficacitatea redusă la masă corporală mare este nota patch-ului.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 277, Contracepția — Depo-Provera (pagini PDF: 55).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    277
   ],
   "pdfPages": [
    55
   ],
   "section": "Contracepția — Depo-Provera"
  },
  "learningObjective": "Recunoașterea intervalului de 3 luni și a osteoporozei ca efect advers, distinct de patch.",
  "optionRationales": [
   "Administrarea din 3 în 3 luni și inhibiția ovulației/endometrului sunt din tabel.",
   "Greața, cefaleea, creșterea ponderală și osteoporoza sunt efectele citate.",
   "Schimbarea săptămânală caracterizează patch-ul.",
   "Etinilestradiolul aparține inelului și COC, nu Depo.",
   "Eficacitatea redusă la masă corporală mare este nota patch-ului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie Depo schema săptămânală și limita ponderală ale patch-ului, de pe aceeași pagină."
  },
  "textbookExpressions": [
   "Depo-Provera",
   "osteoporoză"
  ]
 },
 {
  "id": "gineco-adv-046",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Patch-urile contraceptive transdermice:",
  "options": [
   "Eliberează estradiol și progestativ similar COC și trebuie schimbate săptămânal",
   "Sunt mai puțin eficace la pacientele cu masă corporală mare, prin difuzie în țesutul adipos",
   "Asociază risc crescut de TVP",
   "Se lasă pe loc 10 ani, ca steriletul de cupru",
   "Se administrează din 3 în 3 luni, ca medroxiprogesteronul"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Eliberează estradiol și progestativ similar COC și trebuie schimbate săptămânal — Corect: Acțiunea similară COC și schimbarea săptămânală sunt explicite.\n\nSunt mai puțin eficace la pacientele cu masă corporală mare, prin difuzie în țesutul adipos — Corect: Difuzia în țesutul adipos la masă corporală mare este nota de eficacitate.\n\nAsociază risc crescut de TVP — Corect: Riscul crescut de TVP este listat.\n\nSe lasă pe loc 10 ani, ca steriletul de cupru — Incorect: 10 ani este durata steriletului de cupru.\n\nSe administrează din 3 în 3 luni, ca medroxiprogesteronul — Incorect: Intervalul de 3 luni este al Depo-Provera.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 277, 278, Contracepția — Patch-ul transdermic (pagini PDF: 55, 56).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    277,
    278
   ],
   "pdfPages": [
    55,
    56
   ],
   "section": "Contracepția — Patch-ul transdermic"
  },
  "learningObjective": "Corelarea schimbării săptămânale, a eficacității reduse la BMI crescut și a riscului de TVP.",
  "optionRationales": [
   "Acțiunea similară COC și schimbarea săptămânală sunt explicite.",
   "Difuzia în țesutul adipos la masă corporală mare este nota de eficacitate.",
   "Riscul crescut de TVP este listat.",
   "10 ani este durata steriletului de cupru.",
   "Intervalul de 3 luni este al Depo-Provera."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Duratele 1 săptămână / 3 luni / 10 ani din tabelele contraceptive sunt ușor de permutat."
  },
  "textbookExpressions": [
   "masa corporală",
   "Patch-uri"
  ]
 },
 {
  "id": "gineco-adv-047",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Inelul intravaginal contraceptiv:",
  "options": [
   "Eliberează etinilestradiol 3 săptămâni pentru a preveni ovulația, în doze de estrogeni mai mici decât la COC",
   "Necesită înlocuire lunară",
   "Se inserează în uter și se lasă 10 ani",
   "Este o pilulă doar cu progestativ, de luat la aceeași oră zilnic",
   "Nu asociază risc de TVP, spre deosebire de COC"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Eliberează etinilestradiol 3 săptămâni pentru a preveni ovulația, în doze de estrogeni mai mici decât la COC — Corect: Etinilestradiolul 3 săptămâni și dozele mai mici decât COC sunt din tabel.\n\nNecesită înlocuire lunară — Corect: Înlocuirea lunară este explicită.\n\nSe inserează în uter și se lasă 10 ani — Incorect: Inserția uterină 10 ani definește steriletul de cupru.\n\nEste o pilulă doar cu progestativ, de luat la aceeași oră zilnic — Incorect: Ora fixă zilnică caracterizează pilulele doar cu progestativ.\n\nNu asociază risc de TVP, spre deosebire de COC — Incorect: Tabelul listează risc crescut de TVP și pentru inel.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 278, Contracepția — Inelul vaginal (pagini PDF: 56).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    278
   ],
   "pdfPages": [
    56
   ],
   "section": "Contracepția — Inelul vaginal"
  },
  "learningObjective": "Recunoașterea eliberării de 3 săptămâni, a înlocuirii lunare și a dozei mai mici de estrogen decât COC.",
  "optionRationales": [
   "Etinilestradiolul 3 săptămâni și dozele mai mici decât COC sunt din tabel.",
   "Înlocuirea lunară este explicită.",
   "Inserția uterină 10 ani definește steriletul de cupru.",
   "Ora fixă zilnică caracterizează pilulele doar cu progestativ.",
   "Tabelul listează risc crescut de TVP și pentru inel."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută durata IUDului și regula orei a POP asupra inelului lunar."
  },
  "textbookExpressions": [
   "etinilestradiol",
   "înlocuire lunară"
  ]
 },
 {
  "id": "gineco-adv-048",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Dispozitivele intrauterine citate:",
  "options": [
   "Steriletul de cupru poate fi lăsat pe loc 10 ani",
   "Steriletul cu progestativ este lăsat pe loc circa 5 ani",
   "Cel de cupru poate fi plasat ca urgență imediat după act, cu scădere cu 90% a ratei sarcinii",
   "Ambele se schimbă săptămânal, ca patch-ul",
   "Lactația înlocuiește DIU peste 12 luni postpartum, independent de amenoree"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Steriletul de cupru poate fi lăsat pe loc 10 ani — Corect: Durata de 10 ani a cuprului este explicită.\n\nSteriletul cu progestativ este lăsat pe loc circa 5 ani — Corect: Durata de circa 5 ani a sistemului cu progestativ este citată.\n\nCel de cupru poate fi plasat ca urgență imediat după act, cu scădere cu 90% a ratei sarcinii — Corect: Scăderea cu 90% a ratei sarcinii ca urgență este din tabel.\n\nAmbele se schimbă săptămânal, ca patch-ul — Incorect: Schimbarea săptămânală este a patch-ului.\n\nLactația înlocuiește DIU peste 12 luni postpartum, independent de amenoree — Incorect: Lactația este eficace doar dacă este activă, sub 6 luni și cu amenoree.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 278, Contracepția — Dispozitivele intrauterine (pagini PDF: 56).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    278
   ],
   "pdfPages": [
    56
   ],
   "section": "Contracepția — Dispozitivele intrauterine"
  },
  "learningObjective": "Ierarhizarea duratelor 10 ani (cupru) versus circa 5 ani (progestativ) și a eficacității de urgență de 90%.",
  "optionRationales": [
   "Durata de 10 ani a cuprului este explicită.",
   "Durata de circa 5 ani a sistemului cu progestativ este citată.",
   "Scăderea cu 90% a ratei sarcinii ca urgență este din tabel.",
   "Schimbarea săptămânală este a patch-ului.",
   "Lactația este eficace doar dacă este activă, sub 6 luni și cu amenoree."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Duratele 5/10 ani versus săptămâna patch-ului și cele trei condiții ale lactației sunt capcane clasice."
  },
  "textbookExpressions": [
   "10 ani",
   "90%"
  ]
 },
 {
  "id": "gineco-adv-049",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Sterilizarea chirurgicală:",
  "options": [
   "Constă în secționarea ductului deferent (vasectomie) sau ligatura tubară",
   "În caz de eșec sau după repermeabilizarea tubară există risc crescut de sarcină ectopică",
   "Este reversibilă facil, fără risc ectopic",
   "Are eficacitate tipică de 71%, ca spermicidul folosit singur",
   "Se lasă in situ 10 ani, apoi se extrage ca un sterilet de cupru"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Constă în secționarea ductului deferent (vasectomie) sau ligatura tubară — Corect: Cele două tehnici sunt din tabel.\n\nÎn caz de eșec sau după repermeabilizarea tubară există risc crescut de sarcină ectopică — Corect: Riscul crescut de sarcină ectopică la eșec sau după repermeabilizare este explicit.\n\nEste reversibilă facil, fără risc ectopic — Incorect: Repermeabilizarea este descrisă ca dificilă.\n\nAre eficacitate tipică de 71%, ca spermicidul folosit singur — Incorect: 71% este eficacitatea tipică a spermicidului singur.\n\nSe lasă in situ 10 ani, apoi se extrage ca un sterilet de cupru — Incorect: 10 ani este durata cuprului, nu a sterilizării.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 279, Contracepția — Sterilizarea (pagini PDF: 57).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    279
   ],
   "pdfPages": [
    57
   ],
   "section": "Contracepția — Sterilizarea"
  },
  "learningObjective": "Recunoașterea vasectomiei/ligaturii și a riscului ectopic la eșec sau repermeabilizare.",
  "optionRationales": [
   "Cele două tehnici sunt din tabel.",
   "Riscul crescut de sarcină ectopică la eșec sau după repermeabilizare este explicit.",
   "Repermeabilizarea este descrisă ca dificilă.",
   "71% este eficacitatea tipică a spermicidului singur.",
   "10 ani este durata cuprului, nu a sterilizării."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă eficacitatea spermicidului și durata IUDului asupra unei metode aproape 100%."
  },
  "textbookExpressions": [
   "vasectomie",
   "sarcină ectopică"
  ]
 },
 {
  "id": "gineco-adv-050",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Menopauza prematură reprezintă declinul funcției ovariene înaintea vârstei de:",
  "options": [
   "40 de ani",
   "51,5 ani, vârsta medie a menopauzei naturale",
   "16 ani, pragul amenoreei primare",
   "8 ani, pragul pubertății precoce la fete",
   "21 de ani, vârsta de început a screeningului citologic"
  ],
  "correct": [
   0
  ],
  "explanation": "40 de ani — Corect: Textul definește menopauza prematură înainte de 40 de ani.\n\n51,5 ani, vârsta medie a menopauzei naturale — Incorect: 51,5 ani este vârsta medie a menopauzei naturale.\n\n16 ani, pragul amenoreei primare — Incorect: 16 ani definește amenoreea primară.\n\n8 ani, pragul pubertății precoce la fete — Incorect: 8 ani este pragul pubertății precoce la fetițe.\n\n21 de ani, vârsta de început a screeningului citologic — Incorect: 21 de ani este începutul frotiului Pap.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 276, Fiziologie — Menopauza prematură (pagini PDF: 54).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    276
   ],
   "pdfPages": [
    54
   ],
   "section": "Fiziologie — Menopauza prematură"
  },
  "learningObjective": "Diferențierea menopauzei premature (<40 ani) de vârsta medie de 51,5 ani și de alte praguri din capitol.",
  "optionRationales": [
   "Textul definește menopauza prematură înainte de 40 de ani.",
   "51,5 ani este vârsta medie a menopauzei naturale.",
   "16 ani definește amenoreea primară.",
   "8 ani este pragul pubertății precoce la fetițe.",
   "21 de ani este începutul frotiului Pap."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate pragurile sunt reale din ginecologie; doar 40 de ani definește menopauza prematură."
  },
  "textbookExpressions": [
   "Menopauza prematură",
   "înaintea vârstei de 40"
  ]
 },
 {
  "id": "gineco-adv-051",
  "topicId": "gineco",
  "type": "CM",
  "stem": "După fertilizare, textul precizează că:",
  "options": [
   "Sincițiotrofoblastul secretă hCG pentru a menține activitatea corpului galben",
   "Corpul galben continuă să secrete progesteron până când producția este preluată de placentă, circa 8–12 săptămâni",
   "Dacă ovocitul nu este fertilizat, corpul galben degenerează, iar endometrul se detaşează",
   "Peak-ul de FSH, nu de LH, induce ovulația",
   "hCG are acțiune FSH-like și scade progesteronul după implantare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sincițiotrofoblastul secretă hCG pentru a menține activitatea corpului galben — Corect: Rolul hCG al sincițiotrofoblastului este explicit.\n\nCorpul galben continuă să secrete progesteron până când producția este preluată de placentă, circa 8–12 săptămâni — Corect: Intervalul 8–12 săptămâni pentru preluarea placentară este citat.\n\nDacă ovocitul nu este fertilizat, corpul galben degenerează, iar endometrul se detaşează — Corect: Degenerarea corpului galben fără fertilizare este descrisă.\n\nPeak-ul de FSH, nu de LH, induce ovulația — Incorect: Peak-ul de LH, nu de FSH, induce ovulația.\n\nhCG are acțiune FSH-like și scade progesteronul după implantare — Incorect: hCG are acțiune LH-like și menține progesteronul.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 276, Fiziologie — Fertilizarea și corpul galben (pagini PDF: 54).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    276
   ],
   "pdfPages": [
    54
   ],
   "section": "Fiziologie — Fertilizarea și corpul galben"
  },
  "learningObjective": "Corelarea hCG–corp galben cu preluarea placentară la 8–12 săptămâni și cu menstruația în absența nidației.",
  "optionRationales": [
   "Rolul hCG al sincițiotrofoblastului este explicit.",
   "Intervalul 8–12 săptămâni pentru preluarea placentară este citat.",
   "Degenerarea corpului galben fără fertilizare este descrisă.",
   "Peak-ul de LH, nu de FSH, induce ovulația.",
   "hCG are acțiune LH-like și menține progesteronul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează LH versus FSH și substituie acțiunea LH-like a hCG cu un efect opus pe progesteron."
  },
  "textbookExpressions": [
   "Sinciţiotrofoblastul",
   "8-12 săptămâni"
  ]
 },
 {
  "id": "gineco-adv-052",
  "topicId": "gineco",
  "type": "CM",
  "stem": "La o pacientă cu sindrom de insensibilitate la androgeni și testicule prezente se recomandă:",
  "options": [
   "Extirparea gonadelor la vârstă precoce, din cauza riscului crescut de cancer testicular",
   "Testul de sarcină ca prim pas în orice amenoree",
   "Administrarea de Depo-Provera din 3 în 3 luni, ca contraceptiv de elecție",
   "Observație pe termen nelimitat, fără gonadectomie, riscul oncologic fiind nul",
   "Conizație de col, ca în HSIL"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Extirparea gonadelor la vârstă precoce, din cauza riscului crescut de cancer testicular — Corect: „Pasul următor” cere extirparea gonadelor precoce pentru riscul de cancer testicular.\n\nTestul de sarcină ca prim pas în orice amenoree — Corect: Primul pas în orice amenoree este testul de sarcină.\n\nAdministrarea de Depo-Provera din 3 în 3 luni, ca contraceptiv de elecție — Incorect: Depo nu este conduita acestei entități.\n\nObservație pe termen nelimitat, fără gonadectomie, riscul oncologic fiind nul — Incorect: Textul nu autorizează observația fără gonadectomie.\n\nConizație de col, ca în HSIL — Incorect: Conizația este a displaziei de col, nu a insensibilității la androgeni.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 279, Tulburări menstruale — Insensibilitatea la androgeni (pagini PDF: 57).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    279
   ],
   "pdfPages": [
    57
   ],
   "section": "Tulburări menstruale — Insensibilitatea la androgeni"
  },
  "learningObjective": "Aplicarea gonadectomiei precoce pentru risc de cancer testicular și a β-hCG ca prim pas în amenoree.",
  "optionRationales": [
   "„Pasul următor” cere extirparea gonadelor precoce pentru riscul de cancer testicular.",
   "Primul pas în orice amenoree este testul de sarcină.",
   "Depo nu este conduita acestei entități.",
   "Textul nu autorizează observația fără gonadectomie.",
   "Conizația este a displaziei de col, nu a insensibilității la androgeni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută contracepția injectabilă și conizația asupra unei indicații oncologice de gonadectomie."
  },
  "textbookExpressions": [
   "insensibilitate la androgeni",
   "cancer testicular"
  ]
 },
 {
  "id": "gineco-adv-053",
  "topicId": "gineco",
  "type": "CS",
  "stem": "În stadiul Tanner 4 al dezvoltării mamare se observă:",
  "options": [
   "Creșterea secundară a mamelonului și areolei deasupra nivelului sânului",
   "Doar mamelonul ascensionat, fără țesut mamar",
   "Înmugurirea sânilor și reliefarea areolei, ca în stadiul 2",
   "Areola revenită la nivelul sânului, cu mamelon proeminent, ca în stadiul 5",
   "Păr aspru până pe fața medială a coapselor, fără nicio modificare mamară"
  ],
  "correct": [
   0
  ],
  "explanation": "Creșterea secundară a mamelonului și areolei deasupra nivelului sânului — Corect: Tabelul descrie creșterea secundară a mamelonului și areolei deasupra sânului în stadiul 4.\n\nDoar mamelonul ascensionat, fără țesut mamar — Incorect: Doar mamelonul ascensionat este stadiul 1.\n\nÎnmugurirea sânilor și reliefarea areolei, ca în stadiul 2 — Incorect: Înmugurirea este stadiul 2.\n\nAreola revenită la nivelul sânului, cu mamelon proeminent, ca în stadiul 5 — Incorect: Areola revenită la nivelul sânului este stadiul 5.\n\nPăr aspru până pe fața medială a coapselor, fără nicio modificare mamară — Incorect: Pilozitatea până pe coapse este Tanner 5 pubian, nu definirea stadiului mamar 4.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 274, Dezvoltare — Stadiile Tanner mamare (pagini PDF: 52).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    274
   ],
   "pdfPages": [
    52
   ],
   "section": "Dezvoltare — Stadiile Tanner mamare"
  },
  "learningObjective": "Identificarea muntelui secundar areolo-mamelonar din Tanner 4, distinct de stadiile 1, 2 și 5.",
  "optionRationales": [
   "Tabelul descrie creșterea secundară a mamelonului și areolei deasupra sânului în stadiul 4.",
   "Doar mamelonul ascensionat este stadiul 1.",
   "Înmugurirea este stadiul 2.",
   "Areola revenită la nivelul sânului este stadiul 5.",
   "Pilozitatea până pe coapse este Tanner 5 pubian, nu definirea stadiului mamar 4."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt descrierile reale ale stadiilor 1, 2 și 5 din același tabel."
  },
  "textbookExpressions": [
   "creşterea secundară",
   "areolei"
  ]
 },
 {
  "id": "gineco-adv-054",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Pubertatea precoce la băieți și forma heterosexuală la fetițe:",
  "options": [
   "La băieți apare sub 9 ani și este cel mai adesea cauzată de hiperplazia suprarenaliană",
   "Leziunile sistemului nervos central sau traumatismele cauzează pubertate izosexuală precoce în circa 10% din cazuri",
   "La fetițe, cauzele heterosexuale cele mai frecvente sunt hiperplazia adrenală congenitală, androgenii exogeni sau tumorile secretante de androgeni",
   "Pragul la băieți este sub 8 ani, identic fetițelor, și cauza tipică este idiopatică",
   "LH și FSH scăzute, fără răspuns la GnRH, definesc forma centrală, nu pseudopubertatea"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "La băieți apare sub 9 ani și este cel mai adesea cauzată de hiperplazia suprarenaliană — Corect: Nota plasează pragul băieților sub 9 ani, cu HAC ca cea mai frecventă cauză.\n\nLeziunile sistemului nervos central sau traumatismele cauzează pubertate izosexuală precoce în circa 10% din cazuri — Corect: Ponderea de circa 10% a leziunilor SNC/traumatismelor este explicită.\n\nLa fetițe, cauzele heterosexuale cele mai frecvente sunt hiperplazia adrenală congenitală, androgenii exogeni sau tumorile secretante de androgeni — Corect: HAC, androgenii exogeni și tumorile sunt cauzele heterosexuale citate la fetițe.\n\nPragul la băieți este sub 8 ani, identic fetițelor, și cauza tipică este idiopatică — Incorect: Sub 8 ani este pragul fetițelor; la băieți cauza tipică nu este idiopatică.\n\nLH și FSH scăzute, fără răspuns la GnRH, definesc forma centrală, nu pseudopubertatea — Incorect: LH/FSH scăzute fără răspuns la GnRH definesc pseudopubertatea, nu forma centrală.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 274, 275, Dezvoltare — Pubertatea precoce (pagini PDF: 52, 53).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    274,
    275
   ],
   "pdfPages": [
    52,
    53
   ],
   "section": "Dezvoltare — Pubertatea precoce"
  },
  "learningObjective": "Recunoașterea pragului <9 ani și a HAC la băieți, a ponderii de 10% a leziunilor SNC și a cauzelor virilizante la fetițe.",
  "optionRationales": [
   "Nota plasează pragul băieților sub 9 ani, cu HAC ca cea mai frecventă cauză.",
   "Ponderea de circa 10% a leziunilor SNC/traumatismelor este explicită.",
   "HAC, androgenii exogeni și tumorile sunt cauzele heterosexuale citate la fetițe.",
   "Sub 8 ani este pragul fetițelor; la băieți cauza tipică nu este idiopatică.",
   "LH/FSH scăzute fără răspuns la GnRH definesc pseudopubertatea, nu forma centrală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează pragul 8 versus 9 ani și diagnosticul hormonal central versus pseudo."
  },
  "textbookExpressions": [
   "<9",
   "hiperplazia suprarenaliană"
  ]
 },
 {
  "id": "gineco-adv-055",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Tratamentul partenerului în vaginite:",
  "options": [
   "Este necesar în infecțiile cu Trichomonas, cu metronidazol",
   "Nu este necesar pentru Gardnerella vaginalis",
   "Nu este necesar pentru Candida albicans",
   "Aplicarea de KOH pe secreție poate emana miros de pește („testul mirosului”)",
   "Partenerul trebuie tratat și în candidoză, altfel recidiva este certă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este necesar în infecțiile cu Trichomonas, cu metronidazol — Corect: Nota cere tratamentul partenerului în Trichomonas cu metronidazol.\n\nNu este necesar pentru Gardnerella vaginalis — Corect: Partenerul nu este necesar pentru G. vaginalis.\n\nNu este necesar pentru Candida albicans — Corect: Partenerul nu este necesar pentru C. albicans.\n\nAplicarea de KOH pe secreție poate emana miros de pește („testul mirosului”) — Corect: Testul mirosului la KOH este descris în laborator.\n\nPartenerul trebuie tratat și în candidoză, altfel recidiva este certă — Incorect: Textul exclude explicit tratamentul partenerului în candidoză.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 283, Infecții — Vaginitele și partenerul (pagini PDF: 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    283
   ],
   "pdfPages": [
    61
   ],
   "section": "Infecții — Vaginitele și partenerul"
  },
  "learningObjective": "Aplicarea regulii de tratament al partenerului doar în trichomonază și recunoașterea testului mirosului.",
  "optionRationales": [
   "Nota cere tratamentul partenerului în Trichomonas cu metronidazol.",
   "Partenerul nu este necesar pentru G. vaginalis.",
   "Partenerul nu este necesar pentru C. albicans.",
   "Testul mirosului la KOH este descris în laborator.",
   "Textul exclude explicit tratamentul partenerului în candidoză."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Capcana este generalizarea tratamentului partenerului de la Trichomonas asupra candidei și vaginozei."
  },
  "textbookExpressions": [
   "Trichomonas",
   "testul mirosului"
  ]
 },
 {
  "id": "gineco-adv-056",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Monitorizarea răspunsului în sifilis tratat include:",
  "options": [
   "Obținerea RPR în 2–4 săptămâni pentru titrul bazal",
   "Eficiența terapeutică definită prin scăderea titrului de patru ori la 6 și 12 luni",
   "Cultura pe agar Thayer-Martin ca test de vindecare",
   "FTA-ABS care se negativează în 2 săptămâni după o doză de metronidazol",
   "Negativarea FTA-ABS ca singurul criteriu de succes terapeutic"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Obținerea RPR în 2–4 săptămâni pentru titrul bazal — Corect: RPR-ul de bază la 2–4 săptămâni este explicit.\n\nEficiența terapeutică definită prin scăderea titrului de patru ori la 6 și 12 luni — Corect: Scăderea de patru ori a titrului la 6 și 12 luni definește eficiența.\n\nCultura pe agar Thayer-Martin ca test de vindecare — Incorect: Thayer-Martin este mediul gonococului.\n\nFTA-ABS care se negativează în 2 săptămâni după o doză de metronidazol — Incorect: FTA-ABS rămâne pozitiv toată viața; metronidazolul nu este schema sifilisului (penicilină G, doxiciclină, tetraciclină).\n\nNegativarea FTA-ABS ca singurul criteriu de succes terapeutic — Incorect: FTA-ABS nu se folosește ca criteriu de dispariție pentru succes.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 285, 284, Infecții — Tratamentul sifilisului (pagini PDF: 63, 62).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    285,
    284
   ],
   "pdfPages": [
    63,
    62
   ],
   "section": "Infecții — Tratamentul sifilisului"
  },
  "learningObjective": "Aplicarea titrului RPR de bază la 2–4 săptămâni și a scăderii de patru ori la 6 și 12 luni.",
  "optionRationales": [
   "RPR-ul de bază la 2–4 săptămâni este explicit.",
   "Scăderea de patru ori a titrului la 6 și 12 luni definește eficiența.",
   "Thayer-Martin este mediul gonococului.",
   "FTA-ABS rămâne pozitiv toată viața; metronidazolul nu este schema sifilisului (penicilină G, doxiciclină, tetraciclină).",
   "FTA-ABS nu se folosește ca criteriu de dispariție pentru succes."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă persistența FTA-ABS cu titrul RPR și atribuie sifilisului mediul gonococului."
  },
  "textbookExpressions": [
   "2-4 săptămâni",
   "patru ori"
  ]
 },
 {
  "id": "gineco-adv-057",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Herpesul genital și infecția HPV:",
  "options": [
   "Herpesul este cauzat în majoritatea cazurilor de HSV-2; HSV-1 este mai puțin comun",
   "HPV 6 și 11 se asociază cu condiloame genitale",
   "HPV 16 sau 18 sunt implicate în 70% din cazurile de cancer de col",
   "Vaccinarea vizează tipurile 6, 11, 16 și 18, la femei 11–26 ani și bărbați 9–21 ani",
   "HPV 6 și 11 sunt tipurile oncogene citate pentru 70% din cancerele de col invazive"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Herpesul este cauzat în majoritatea cazurilor de HSV-2; HSV-1 este mai puțin comun — Corect: Predominanța HSV-2 este explicită.\n\nHPV 6 și 11 se asociază cu condiloame genitale — Corect: Tipurile 6 și 11 sunt ale condiloamelor.\n\nHPV 16 sau 18 sunt implicate în 70% din cazurile de cancer de col — Corect: 70% din cancerele de col sunt legate de 16 sau 18.\n\nVaccinarea vizează tipurile 6, 11, 16 și 18, la femei 11–26 ani și bărbați 9–21 ani — Corect: Vârstele 11–26 ani (femei) și 9–21 ani (bărbați) sunt ferestrele vaccinului.\n\nHPV 6 și 11 sunt tipurile oncogene citate pentru 70% din cancerele de col invazive — Incorect: 6 și 11 sunt condilomatoase, nu oncogenele de 70%.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 285, Infecții — Herpes și HPV (pagini PDF: 63).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    285
   ],
   "pdfPages": [
    63
   ],
   "section": "Infecții — Herpes și HPV"
  },
  "learningObjective": "Separarea tipurilor condilomatoase 6/11 de oncogenele 16/18 (70%) și recunoașterea ferestrelor de vaccinare.",
  "optionRationales": [
   "Predominanța HSV-2 este explicită.",
   "Tipurile 6 și 11 sunt ale condiloamelor.",
   "70% din cancerele de col sunt legate de 16 sau 18.",
   "Vârstele 11–26 ani (femei) și 9–21 ani (bărbați) sunt ferestrele vaccinului.",
   "6 și 11 sunt condilomatoase, nu oncogenele de 70%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Capcana clasică este permutarea HPV 6/11 versus 16/18 pentru cele 70% de cancere de col."
  },
  "textbookExpressions": [
   "70% din cazuri",
   "11 şi 26 ani"
  ]
 },
 {
  "id": "gineco-adv-058",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Șancrul moale este cauzat de:",
  "options": [
   "Haemophilus ducreyi",
   "Treponema pallidum",
   "Neisseria gonorrhoeae",
   "Gardnerella vaginalis",
   "HSV-2"
  ],
  "correct": [
   0
  ],
  "explanation": "Haemophilus ducreyi — Corect: Textul identifică Haemophilus ducreyi (OCR: Hacmophilus ducreyi) drept agent.\n\nTreponema pallidum — Incorect: T. pallidum produce sifilisul, cu șancru nedureros.\n\nNeisseria gonorrhoeae — Incorect: Gonococul produce cervicita și forma diseminată.\n\nGardnerella vaginalis — Incorect: Gardnerella produce vaginoza.\n\nHSV-2 — Incorect: HSV-2 produce veziculele herpetice dureroase.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 285, Infecții — Șancrul moale (pagini PDF: 63).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    285
   ],
   "pdfPages": [
    63
   ],
   "section": "Infecții — Șancrul moale"
  },
  "learningObjective": "Identificarea H. ducreyi ca agent al șancrului moale, distinct de sifilis, gonococ, vaginoză și herpes.",
  "optionRationales": [
   "Textul identifică Haemophilus ducreyi (OCR: Hacmophilus ducreyi) drept agent.",
   "T. pallidum produce sifilisul, cu șancru nedureros.",
   "Gonococul produce cervicita și forma diseminată.",
   "Gardnerella produce vaginoza.",
   "HSV-2 produce veziculele herpetice dureroase."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate distractoarele sunt agenți reali din același capitol de BTS, cu ulcerații sau secreții ușor de confundat."
  },
  "textbookExpressions": [
   "d11crcyi",
   "bubo"
  ]
 },
 {
  "id": "gineco-adv-059",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Clasificarea Bethesda a displaziei cervicale:",
  "options": [
   "ASCUS impune screening/tipizare HPV; dacă tulpina e cu risc ridicat, colposcopie cu biopsie sau Pap la 12 luni",
   "LSIL (CIN 1) permite repetarea Pap la 6 și 12 luni, HPV la 12 luni, sau LEEP/conizație/ablație laser",
   "HSIL (CIN 2 sau 3) se tratează prin LEEP, conizație sau ablație laser, cu citologie la fiecare 6 luni",
   "ASCUS se tratează imediat prin histerectomie radicală cu limfadenectomie",
   "Carcinomul scuamos microinvaziv sub 5 mm se lasă doar sub observație, fără conizație sau histerectomie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "ASCUS impune screening/tipizare HPV; dacă tulpina e cu risc ridicat, colposcopie cu biopsie sau Pap la 12 luni — Corect: Conduita ASCUS cu HPV și colposcopie/Pap la 12 luni este din tabel.\n\nLSIL (CIN 1) permite repetarea Pap la 6 și 12 luni, HPV la 12 luni, sau LEEP/conizație/ablație laser — Corect: Opțiunile LSIL (Pap/HPV sau LEEP) sunt explicite.\n\nHSIL (CIN 2 sau 3) se tratează prin LEEP, conizație sau ablație laser, cu citologie la fiecare 6 luni — Corect: HSIL cere LEEP/conizație/laser și citologie la 6 luni.\n\nASCUS se tratează imediat prin histerectomie radicală cu limfadenectomie — Incorect: Histerectomia radicală este a leziunilor vizibile invazive, nu a ASCUS.\n\nCarcinomul scuamos microinvaziv sub 5 mm se lasă doar sub observație, fără conizație sau histerectomie — Incorect: Invazia <5 mm se tratează prin histerectomie sau conizație dacă se dorește fertilitatea.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 287, Neoplasme — Displazia de col (pagini PDF: 65).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    287
   ],
   "pdfPages": [
    65
   ],
   "section": "Neoplasme — Displazia de col"
  },
  "learningObjective": "Ierarhizarea conduitei ASCUS versus LSIL versus HSIL, distinct de histerectomia radicală a bolii invazive.",
  "optionRationales": [
   "Conduita ASCUS cu HPV și colposcopie/Pap la 12 luni este din tabel.",
   "Opțiunile LSIL (Pap/HPV sau LEEP) sunt explicite.",
   "HSIL cere LEEP/conizație/laser și citologie la 6 luni.",
   "Histerectomia radicală este a leziunilor vizibile invazive, nu a ASCUS.",
   "Invazia <5 mm se tratează prin histerectomie sau conizație dacă se dorește fertilitatea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sar de la ASCUS la histerectomie radicală și neagă conizația indicată sub 5 mm."
  },
  "textbookExpressions": [
   "ASCUS",
   "HSIL"
  ]
 },
 {
  "id": "gineco-adv-060",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Leziunile de col cu invazie microscopică sub 5 mm se tratează prin:",
  "options": [
   "Histerectomie sau conizație, dacă pacienta dorește păstrarea fertilității",
   "Doar radioterapie și chimioterapie, ca extensia parametrială",
   "Observație și Pap la 5 ani, fără biopsie",
   "Metronidazol topic, ca în vaginoză",
   "Mastectomie și ooforectomie profilactică, ca în BRCA"
  ],
  "correct": [
   0
  ],
  "explanation": "Histerectomie sau conizație, dacă pacienta dorește păstrarea fertilității — Corect: Textul rezervă HT sau conizația leziunilor cu invazie microscopică sub 5 mm, dacă se dorește fertilitatea.\n\nDoar radioterapie și chimioterapie, ca extensia parametrială — Incorect: Radio-chimioterapia este a extensiei parametrial/perete pelvin/treime inferioară de vagin.\n\nObservație și Pap la 5 ani, fără biopsie — Incorect: Pap la 5 ani este opțiunea de screening ≥30 de ani, nu tratamentul invaziei.\n\nMetronidazol topic, ca în vaginoză — Incorect: Metronidazolul tratează vaginoza.\n\nMastectomie și ooforectomie profilactică, ca în BRCA — Incorect: Mastectomia/ooforectomia profilactică aparțin BRCA.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 287, 288, Neoplasme — Cancerul de col microinvaziv (pagini PDF: 65, 66).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    287,
    288
   ],
   "pdfPages": [
    65,
    66
   ],
   "section": "Neoplasme — Cancerul de col microinvaziv"
  },
  "learningObjective": "Aplicarea pragului de 5 mm pentru histerectomie sau conizație conservatoare de fertilitate.",
  "optionRationales": [
   "Textul rezervă HT sau conizația leziunilor cu invazie microscopică sub 5 mm, dacă se dorește fertilitatea.",
   "Radio-chimioterapia este a extensiei parametrial/perete pelvin/treime inferioară de vagin.",
   "Pap la 5 ani este opțiunea de screening ≥30 de ani, nu tratamentul invaziei.",
   "Metronidazolul tratează vaginoza.",
   "Mastectomia/ooforectomia profilactică aparțin BRCA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pragul de 5 mm este ușor de înlocuit cu conduita bolii parametrial avansate sau cu screeningul de rutină."
  },
  "textbookExpressions": [
   "<5 mm",
   "păstrarea fertilităţii"
  ]
 },
 {
  "id": "gineco-adv-061",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Cancerul de col cu extensie parametrială, la peretele pelvin, la treimea inferioară a vaginului sau cu metastaze:",
  "options": [
   "Se tratează prin radioterapie și chimioterapie",
   "Are supraviețuire la 5 ani de circa 20% pentru leziunile metastatice",
   "Are supraviețuire la 5 ani peste 90% , identică leziunilor microscopice",
   "Se tratează prin conizație simplă, pentru conservarea fertilității",
   "Nu necesită tratament, regresând la menopauză ca leiomiomul"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Se tratează prin radioterapie și chimioterapie — Corect: Schema radio-chimioterapie pentru extensia parametrială/perete/treime inferioară/metastaze este explicită.\n\nAre supraviețuire la 5 ani de circa 20% pentru leziunile metastatice — Corect: 20% la 5 ani pentru leziunile metastatice este cifra citată.\n\nAre supraviețuire la 5 ani peste 90% , identică leziunilor microscopice — Incorect: >90% este supraviețuirea leziunilor microscopice, nu a metastazelor.\n\nSe tratează prin conizație simplă, pentru conservarea fertilității — Incorect: Conizația este a invaziei <5 mm cu dorință de fertilitate.\n\nNu necesită tratament, regresând la menopauză ca leiomiomul — Incorect: Regresia la menopauză este a fibroamelor, nu a cancerului.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 288, Neoplasme — Cancerul de col avansat (pagini PDF: 66).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    288
   ],
   "pdfPages": [
    66
   ],
   "section": "Neoplasme — Cancerul de col avansat"
  },
  "learningObjective": "Contrastarea radio-chimioterapiei bolii extra-uterine cu supraviețuirea de 20% a metastazelor versus >90% microscopic.",
  "optionRationales": [
   "Schema radio-chimioterapie pentru extensia parametrială/perete/treime inferioară/metastaze este explicită.",
   "20% la 5 ani pentru leziunile metastatice este cifra citată.",
   ">90% este supraviețuirea leziunilor microscopice, nu a metastazelor.",
   "Conizația este a invaziei <5 mm cu dorință de fertilitate.",
   "Regresia la menopauză este a fibroamelor, nu a cancerului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Procentele 90% versus 20% sunt ușor de inversat între boala microscopică și cea metastatică."
  },
  "textbookExpressions": [
   "parametrial",
   "20%"
  ]
 },
 {
  "id": "gineco-adv-062",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Tumorile ovariene benigne funcționale:",
  "options": [
   "Chistul folicular apare în primele 2 săptămâni ale ciclului, are circa 3 cm și poate regresă la menstruație",
   "Chistul luteal apare mai frecvent în ultimele săptămâni, este mai mare și are risc mai mare de torsiune sau ruptură hemoragică",
   "Endometriomul poate fi ameliorat simptomatic cu COC, agoniști GnRH, progesteron sau danazol",
   "Chistul folicular secretă androgeni și produce virilizare, ca tumorile Sertoli-Leydig",
   "Teratomul dermoid regresează constant în primele 2 săptămâni ale ciclului, fără chistectomie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Chistul folicular apare în primele 2 săptămâni ale ciclului, are circa 3 cm și poate regresă la menstruație — Corect: Fereastra primelor 2 săptămâni, diametrul ~3 cm și regresia menstruală sunt din tabel.\n\nChistul luteal apare mai frecvent în ultimele săptămâni, este mai mare și are risc mai mare de torsiune sau ruptură hemoragică — Corect: Ultimele săptămâni, dimensiunea mai mare și sângerarea mai importantă definesc chistul luteal.\n\nEndometriomul poate fi ameliorat simptomatic cu COC, agoniști GnRH, progesteron sau danazol — Corect: COC, GnRH, progesteronul și danazolul sunt tratamentul simptomatic al endometriomului.\n\nChistul folicular secretă androgeni și produce virilizare, ca tumorile Sertoli-Leydig — Incorect: Virilizarea aparține tumorilor Sertoli-Leydig.\n\nTeratomul dermoid regresează constant în primele 2 săptămâni ale ciclului, fără chistectomie — Incorect: Regresia menstruală caracterizează chistul folicular, nu dermoizii (care cer chistectomie).\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 288, Neoplasme — Tumorile ovariene benigne (pagini PDF: 66).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    288
   ],
   "pdfPages": [
    66
   ],
   "section": "Neoplasme — Tumorile ovariene benigne"
  },
  "learningObjective": "Separarea ferestrelor folicular (primele 2 săptămâni) versus luteal (ultimele săptămâni) și a terapiei endometriomului.",
  "optionRationales": [
   "Fereastra primelor 2 săptămâni, diametrul ~3 cm și regresia menstruală sunt din tabel.",
   "Ultimele săptămâni, dimensiunea mai mare și sângerarea mai importantă definesc chistul luteal.",
   "COC, GnRH, progesteronul și danazolul sunt tratamentul simptomatic al endometriomului.",
   "Virilizarea aparține tumorilor Sertoli-Leydig.",
   "Regresia menstruală caracterizează chistul folicular, nu dermoizii (care cer chistectomie)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie folicularului virilizarea stromală și dermoidului regresia ciclică a chistului funcțional."
  },
  "textbookExpressions": [
   "2 săpt.",
   "danazol"
  ]
 },
 {
  "id": "gineco-adv-063",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Tumorile ovariene stromale (granuloasă, tecale sau Sertoli-Leydig):",
  "options": [
   "Pot secreta hormoni în funcție de linia celulară și au potențial de malignizare",
   "Tumorile tecale și granuloase pot produce pubertate precoce, iar cele Sertoli-Leydig virilizare",
   "Sunt de origine germinală și conțin păr, dinți și glande sebacee",
   "Regresează la menopauză, ca leiomiomul uterin",
   "Se diagnostichează prin celule clue, fără imagistică"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Pot secreta hormoni în funcție de linia celulară și au potențial de malignizare — Corect: Secreția hormonală în funcție de origine și potențialul malign sunt din tabel.\n\nTumorile tecale și granuloase pot produce pubertate precoce, iar cele Sertoli-Leydig virilizare — Corect: Pubertatea precoce (tecale/granuloase) și virilizarea (Sertoli-Leydig) sunt tabloul.\n\nSunt de origine germinală și conțin păr, dinți și glande sebacee — Incorect: Părul, dinții și sebumul definesc teratomul dermoid.\n\nRegresează la menopauză, ca leiomiomul uterin — Incorect: Regresia la menopauză este a fibroamelor.\n\nSe diagnostichează prin celule clue, fără imagistică — Incorect: Celulele clue definesc vaginoza.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 288, Neoplasme — Tumorile stromale ovariene (pagini PDF: 66).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    288
   ],
   "pdfPages": [
    66
   ],
   "section": "Neoplasme — Tumorile stromale ovariene"
  },
  "learningObjective": "Contrastarea secreției hormonale (precocitate versus virilizare) cu teratomul germinal.",
  "optionRationales": [
   "Secreția hormonală în funcție de origine și potențialul malign sunt din tabel.",
   "Pubertatea precoce (tecale/granuloase) și virilizarea (Sertoli-Leydig) sunt tabloul.",
   "Părul, dinții și sebumul definesc teratomul dermoid.",
   "Regresia la menopauză este a fibroamelor.",
   "Celulele clue definesc vaginoza."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă conținutul dermoidului și regresia fibroamelor asupra tumorilor stromale hormonosecretante."
  },
  "textbookExpressions": [
   "Sertoli-Leydig",
   "Pubertate precoce"
  ]
 },
 {
  "id": "gineco-adv-064",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Carcinomul mamar in situ și forma invazivă precoce:",
  "options": [
   "CDIS se tratează prin tumorectomie plus iradiere; mastectomia se discută la risc crescut",
   "CLIS se gestionează prin observație atentă plus SERM (tamoxifen, raloxifen); mastectomia bilaterală profilactică e o opțiune dacă nu se dorește supraveghere lungă",
   "Cancerul focal precoce invaziv se tratează prin tumorectomie plus iradiere",
   "CLIS se tratează identic CDIS, prin tumorectomie plus iradiere de primă intenție",
   "Tumorectomia este contraindicată în boala focală precoce, mastectomia fiind unica opțiune"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "CDIS se tratează prin tumorectomie plus iradiere; mastectomia se discută la risc crescut — Corect: Schema CDIS (tumorectomie + iradiere, mastectomie la risc) este explicită.\n\nCLIS se gestionează prin observație atentă plus SERM (tamoxifen, raloxifen); mastectomia bilaterală profilactică e o opțiune dacă nu se dorește supraveghere lungă — Corect: CLIS: observație + tamoxifen/raloxifen, cu mastectomie bilaterală ca alternativă.\n\nCancerul focal precoce invaziv se tratează prin tumorectomie plus iradiere — Corect: Boala focală precoce: tumorectomie + iradiere.\n\nCLIS se tratează identic CDIS, prin tumorectomie plus iradiere de primă intenție — Incorect: CLIS nu primește de primă intenție aceeași iradiere ca CDIS.\n\nTumorectomia este contraindicată în boala focală precoce, mastectomia fiind unica opțiune — Incorect: Tumorectomia este tocmai opțiunea bolii focale precoce.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 292, Afecțiunile sânului — CDIS, CLIS și boala precoce (pagini PDF: 70).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    292
   ],
   "pdfPages": [
    70
   ],
   "section": "Afecțiunile sânului — CDIS, CLIS și boala precoce"
  },
  "learningObjective": "Separarea tumorectomie+iradiere (CDIS și invaziv precoce) de observație+SERM (CLIS).",
  "optionRationales": [
   "Schema CDIS (tumorectomie + iradiere, mastectomie la risc) este explicită.",
   "CLIS: observație + tamoxifen/raloxifen, cu mastectomie bilaterală ca alternativă.",
   "Boala focală precoce: tumorectomie + iradiere.",
   "CLIS nu primește de primă intenție aceeași iradiere ca CDIS.",
   "Tumorectomia este tocmai opțiunea bolii focale precoce."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Capcana este aplicarea iradierii CDIS asupra CLIS, pe care textul o rezervă observației și SERM."
  },
  "textbookExpressions": [
   "CDIS",
   "raloxifen"
  ]
 },
 {
  "id": "gineco-adv-065",
  "topicId": "gineco",
  "type": "CM",
  "stem": "În cancerul mamar invaziv se recomandă:",
  "options": [
   "Biopsie de ganglion santinelă la invazia axilară; biopsia pozitivă este urmată de limfodisecție axilară",
   "Trastuzumab la pacientele cu receptori HER2/neu",
   "Tamoxifen în cancerul cu receptori hormonali pozitivi",
   "Aspirația cu ac fin are risc zero de rezultat fals negativ, deci biopsia extinsă este superfluă",
   "Receptorii hormonali pozitivi asociază prognostic mai rezervat decât cei negativi"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Biopsie de ganglion santinelă la invazia axilară; biopsia pozitivă este urmată de limfodisecție axilară — Corect: Secvența santinelă apoi limfodisecție dacă este pozitivă este explicită.\n\nTrastuzumab la pacientele cu receptori HER2/neu — Corect: Trastuzumab este indicat la receptorii HER2/neu.\n\nTamoxifen în cancerul cu receptori hormonali pozitivi — Corect: Tamoxifenul este citat pentru receptorii hormonali pozitivi.\n\nAspirația cu ac fin are risc zero de rezultat fals negativ, deci biopsia extinsă este superfluă — Incorect: FNA are risc de 20% fals negativ; tumora solidă negativă cere biopsie mai extinsă.\n\nReceptorii hormonali pozitivi asociază prognostic mai rezervat decât cei negativi — Incorect: Receptorii hormonali pozitivi și HER2 asociază prognostic mai bun, nu mai rezervat.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 292, Afecțiunile sânului — Tratamentul cancerului invaziv (pagini PDF: 70).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    292
   ],
   "pdfPages": [
    70
   ],
   "section": "Afecțiunile sânului — Tratamentul cancerului invaziv"
  },
  "learningObjective": "Corelarea ganglionului santinelă, a trastuzumabului anti-HER2 și a tamoxifenului pentru receptorii hormonali.",
  "optionRationales": [
   "Secvența santinelă apoi limfodisecție dacă este pozitivă este explicită.",
   "Trastuzumab este indicat la receptorii HER2/neu.",
   "Tamoxifenul este citat pentru receptorii hormonali pozitivi.",
   "FNA are risc de 20% fals negativ; tumora solidă negativă cere biopsie mai extinsă.",
   "Receptorii hormonali pozitivi și HER2 asociază prognostic mai bun, nu mai rezervat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii neagă fals-negativul FNA de 20% și inversează prognosticul receptorilor hormonali."
  },
  "textbookExpressions": [
   "trastuzumab",
   "ganglion santinelă"
  ]
 },
 {
  "id": "gineco-adv-066",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Cele mai bune rate de supraviețuire în cancerul mamar inflamator se obțin după:",
  "options": [
   "Utilizarea combinată a mastectomiei, radioterapiei și chimioterapiei",
   "Doar observație și SERM, ca în CLIS",
   "Doar tumorectomie, fără iradiere sau sistemic",
   "Metronidazol și îndepărtarea tamponului, ca în șocul toxic",
   "Conizație de col, fără tratament mamar"
  ],
  "correct": [
   0
  ],
  "explanation": "Utilizarea combinată a mastectomiei, radioterapiei și chimioterapiei — Corect: Textul atribuie cele mai bune rate combinației mastectomie + radioterapie + chimioterapie.\n\nDoar observație și SERM, ca în CLIS — Incorect: Observația + SERM este a CLIS.\n\nDoar tumorectomie, fără iradiere sau sistemic — Incorect: Tumorectomia izolată nu este schema inflamatorului.\n\nMetronidazol și îndepărtarea tamponului, ca în șocul toxic — Incorect: Metronidazolul și tamponul aparțin șocului toxic.\n\nConizație de col, fără tratament mamar — Incorect: Conizația este a colului, nu a sânului inflamator.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 292, Afecțiunile sânului — Cancerul inflamator (pagini PDF: 70).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    292
   ],
   "pdfPages": [
    70
   ],
   "section": "Afecțiunile sânului — Cancerul inflamator"
  },
  "learningObjective": "Recunoașterea triadei mastectomie–radioterapie–chimioterapie ca schema cu cele mai bune rate în forma inflamatorie.",
  "optionRationales": [
   "Textul atribuie cele mai bune rate combinației mastectomie + radioterapie + chimioterapie.",
   "Observația + SERM este a CLIS.",
   "Tumorectomia izolată nu este schema inflamatorului.",
   "Metronidazolul și tamponul aparțin șocului toxic.",
   "Conizația este a colului, nu a sânului inflamator."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică conduita CLIS, a șocului toxic și a colului asupra unui subtip ductal agresiv, angioinvaziv."
  },
  "textbookExpressions": [
   "inflamator",
   "mastectomiei"
  ]
 },
 {
  "id": "gineco-adv-067",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Faza foliculară a ciclului menstrual:",
  "options": [
   "Începe în prima zi a menstruației",
   "FSH stimulează creșterea foliculilor ovarieni (celulele de granuloasă), care secretă estradiol",
   "Estradiolul induce proliferarea endometrială și, prin feedback pozitiv, sinteza de FSH și LH",
   "Peak-ul de LH lipsește cu desăvârșire în această fază, ovulația fiind indusă de TSH",
   "hCG este hormonul care inițiază faza foliculară în absența fertilizării"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Începe în prima zi a menstruației — Corect: Debutul în prima zi a menstruației este explicit.\n\nFSH stimulează creșterea foliculilor ovarieni (celulele de granuloasă), care secretă estradiol — Corect: FSH, granuloasa și estradiolul sunt din text și tabel.\n\nEstradiolul induce proliferarea endometrială și, prin feedback pozitiv, sinteza de FSH și LH — Corect: Proliferarea endometrială și feedback-ul pozitiv pe FSH/LH sunt citate.\n\nPeak-ul de LH lipsește cu desăvârșire în această fază, ovulația fiind indusă de TSH — Incorect: Peak-ul de LH de la mijlocul ciclului declanșează ovulația; TSH nu o induce.\n\nhCG este hormonul care inițiază faza foliculară în absența fertilizării — Incorect: hCG apare după implantare, nu inițiază faza foliculară.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 275, Fiziologie — Faza foliculară (pagini PDF: 53).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    275
   ],
   "pdfPages": [
    53
   ],
   "section": "Fiziologie — Faza foliculară"
  },
  "learningObjective": "Plasarea debutului în ziua 1, a axului FSH–granuloasă–estradiol și a feedback-ului pozitiv asupra gonadotropinelor.",
  "optionRationales": [
   "Debutul în prima zi a menstruației este explicit.",
   "FSH, granuloasa și estradiolul sunt din text și tabel.",
   "Proliferarea endometrială și feedback-ul pozitiv pe FSH/LH sunt citate.",
   "Peak-ul de LH de la mijlocul ciclului declanșează ovulația; TSH nu o induce.",
   "hCG apare după implantare, nu inițiază faza foliculară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii substituie peak-ul de LH cu TSH și mută hCG înainte de ovulație."
  },
  "textbookExpressions": [
   "prima zi a menstruaţiei",
   "celulele de granuloasă"
  ]
 },
 {
  "id": "gineco-adv-068",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Toate ovocitele sunt formate și parțial maturate, conform tabelului de dezvoltare, la:",
  "options": [
   "20 de săptămâni de amenoree",
   "4–8 ani, când FSH și LH sunt suprimate de GnRH",
   "Naștere, odată cu maximul de LH",
   "Menarha, la vârsta medie de 13 ani",
   "Menopauză, odată cu rezistența ovariană"
  ],
  "correct": [
   0
  ],
  "explanation": "20 de săptămâni de amenoree — Corect: Tabelul plasează formarea și maturarea parțială a tuturor ovocitelor la 20 SA.\n\n4–8 ani, când FSH și LH sunt suprimate de GnRH — Incorect: Intervalul 4–8 ani are FSH/LH scăzute prin supresia GnRH, nu formarea ovocitelor.\n\nNaștere, odată cu maximul de LH — Incorect: Maximul de FSH/LH la 20 SA este fetal, nu de la naștere.\n\nMenarha, la vârsta medie de 13 ani — Incorect: Menarha la 13 ani marchează debutul ciclurilor, nu formarea ovocitelor.\n\nMenopauză, odată cu rezistența ovariană — Incorect: Menopauza asociază insuficiență ovariană, nu apariția ovocitelor.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 273, Fiziologie — Dezvoltarea ginecologică (pagini PDF: 51).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    273
   ],
   "pdfPages": [
    51
   ],
   "section": "Fiziologie — Dezvoltarea ginecologică"
  },
  "learningObjective": "Memorarea vârstei de 20 SA pentru completarea stocului de ovocite, distinct de supresia GnRH și de menarha.",
  "optionRationales": [
   "Tabelul plasează formarea și maturarea parțială a tuturor ovocitelor la 20 SA.",
   "Intervalul 4–8 ani are FSH/LH scăzute prin supresia GnRH, nu formarea ovocitelor.",
   "Maximul de FSH/LH la 20 SA este fetal, nu de la naștere.",
   "Menarha la 13 ani marchează debutul ciclurilor, nu formarea ovocitelor.",
   "Menopauza asociază insuficiență ovariană, nu apariția ovocitelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate vârstele sunt rânduri reale ale aceluiași tabel; doar 20 SA asociază stocul ovocitar."
  },
  "textbookExpressions": [
   "20 SA",
   "ovocitele"
  ]
 },
 {
  "id": "gineco-adv-069",
  "topicId": "gineco",
  "type": "CS",
  "stem": "În stadiul Tanner 5 al dezvoltării mamare se observă:",
  "options": [
   "Sân matur, cu areola revenită la nivelul sânului și doar mamelonul proeminent",
   "Doar mamelonul ascensionat, fără țesut mamar",
   "Înmugurirea sânilor și reliefarea areolei, ca în stadiul 2",
   "Creșterea secundară a mamelonului și areolei deasupra nivelului sânului, ca în stadiul 4",
   "Păr aspru pubian, fără nicio modificare mamară"
  ],
  "correct": [
   0
  ],
  "explanation": "Sân matur, cu areola revenită la nivelul sânului și doar mamelonul proeminent — Corect: Sânul matur cu areola la nivelul sânului este descrierea stadiului 5.\n\nDoar mamelonul ascensionat, fără țesut mamar — Incorect: Mamelonul izolat definește stadiul 1.\n\nÎnmugurirea sânilor și reliefarea areolei, ca în stadiul 2 — Incorect: Înmugurirea și reliefarea areolei definesc stadiul 2.\n\nCreșterea secundară a mamelonului și areolei deasupra nivelului sânului, ca în stadiul 4 — Incorect: Areola deasupra sânului definește stadiul 4.\n\nPăr aspru pubian, fără nicio modificare mamară — Incorect: Pilozitatea fără modificare mamară nu descrie stadiul 5 mamar.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 274, Dezvoltare — Stadiile Tanner mamare (pagini PDF: 52).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    274
   ],
   "pdfPages": [
    52
   ],
   "section": "Dezvoltare — Stadiile Tanner mamare"
  },
  "learningObjective": "Identificarea revenirea areolei la nivelul sânului ca reper al stadiului 5, distinct de 1, 2 și 4.",
  "optionRationales": [
   "Sânul matur cu areola la nivelul sânului este descrierea stadiului 5.",
   "Mamelonul izolat definește stadiul 1.",
   "Înmugurirea și reliefarea areolei definesc stadiul 2.",
   "Areola deasupra sânului definește stadiul 4.",
   "Pilozitatea fără modificare mamară nu descrie stadiul 5 mamar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Stadiile 1, 2 și 4 din același tabel sunt ușor de permutat cu stadiul 5."
  },
  "textbookExpressions": [
   "Sân matur",
   "mamelonul"
  ]
 },
 {
  "id": "gineco-adv-070",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la cauzele și tratamentul pubertății precoce:",
  "options": [
   "Hipotiroidismul cronic, cu TSH crescut și T4/T3 scăzute, poate induce pubertate precoce",
   "Forma din hiperplazia adrenală congenitală poate fi tratată prin substituție cortizonică",
   "Secreția ectopică de hormoni se tratează prin localizarea și îndepărtarea sursei",
   "LH și FSH scăzute, fără răspuns la GnRH, definesc forma centrală, nu pseudopubertatea",
   "Analogii de GnRH sunt inutili în forma centrală, fiind rezervați doar HAC"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hipotiroidismul cronic, cu TSH crescut și T4/T3 scăzute, poate induce pubertate precoce — Corect: Profilul TSH crescut cu T4/T3 scăzute este citat.\n\nForma din hiperplazia adrenală congenitală poate fi tratată prin substituție cortizonică — Corect: Substituția cortizonică în HAC este tratamentul.\n\nSecreția ectopică de hormoni se tratează prin localizarea și îndepărtarea sursei — Corect: Localizarea și îndepărtarea sursei ectopice sunt explicite.\n\nLH și FSH scăzute, fără răspuns la GnRH, definesc forma centrală, nu pseudopubertatea — Incorect: LH/FSH scăzute fără răspuns la GnRH definesc pseudopubertatea, nu forma centrală.\n\nAnalogii de GnRH sunt inutili în forma centrală, fiind rezervați doar HAC — Incorect: Analogii de GnRH sunt tocmai tratamentul formei centrale.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 275, 274, Dezvoltare — Pubertatea precoce (pagini PDF: 53, 52).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    275,
    274
   ],
   "pdfPages": [
    53,
    52
   ],
   "section": "Dezvoltare — Pubertatea precoce"
  },
  "learningObjective": "Recunoașterea hipotiroidismului, a substituției cortizonice în HAC și a exciziei sursei ectopice.",
  "optionRationales": [
   "Profilul TSH crescut cu T4/T3 scăzute este citat.",
   "Substituția cortizonică în HAC este tratamentul.",
   "Localizarea și îndepărtarea sursei ectopice sunt explicite.",
   "LH/FSH scăzute fără răspuns la GnRH definesc pseudopubertatea, nu forma centrală.",
   "Analogii de GnRH sunt tocmai tratamentul formei centrale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează criteriile de laborator central versus pseudo și neagă analogii de GnRH din forma centrală."
  },
  "textbookExpressions": [
   "hipotiroidismului",
   "HAC"
  ]
 },
 {
  "id": "gineco-adv-071",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Faza luteală a ciclului menstrual:",
  "options": [
   "Peak-ul de LH induce ovulația, care marchează tranziția de la faza foliculară",
   "Mucusul cervical este abundent imediat înaintea ovulației, mai consistent și transparent, indicând peak-ul de LH",
   "Corpul galben secretă estradiol și progesteron pentru a menține endometrul",
   "Peak-ul de FSH, nu de LH, induce ovulația",
   "hCG are acțiune FSH-like și scade progesteronul după implantare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Peak-ul de LH induce ovulația, care marchează tranziția de la faza foliculară — Corect: Peak-ul de LH și tranziția de fază sunt explicite.\n\nMucusul cervical este abundent imediat înaintea ovulației, mai consistent și transparent, indicând peak-ul de LH — Corect: Mucusul abundent, consistent și transparent este nota periovulatorie.\n\nCorpul galben secretă estradiol și progesteron pentru a menține endometrul — Corect: Estradiolul și progesteronul corpului galben sunt citate.\n\nPeak-ul de FSH, nu de LH, induce ovulația — Incorect: Ovulația este indusă de LH, nu de FSH.\n\nhCG are acțiune FSH-like și scade progesteronul după implantare — Incorect: hCG are acțiune LH-like și menține progesteronul, nu îl scade.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 276, 275, Fiziologie — Faza luteală (pagini PDF: 54, 53).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    276,
    275
   ],
   "pdfPages": [
    54,
    53
   ],
   "section": "Fiziologie — Faza luteală"
  },
  "learningObjective": "Corelarea peak-ului de LH, a mucusului periovulator și a secreției corpului galben, distinct de hCG.",
  "optionRationales": [
   "Peak-ul de LH și tranziția de fază sunt explicite.",
   "Mucusul abundent, consistent și transparent este nota periovulatorie.",
   "Estradiolul și progesteronul corpului galben sunt citate.",
   "Ovulația este indusă de LH, nu de FSH.",
   "hCG are acțiune LH-like și menține progesteronul, nu îl scade."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează LH versus FSH și atribuie hCG un efect FSH-like opus tabelului de pe pagina anterioară."
  },
  "textbookExpressions": [
   "Mucusul cervical",
   "corpul galben"
  ]
 },
 {
  "id": "gineco-adv-072",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre perimenopauză și menopauza prematură:",
  "options": [
   "Menopauza prematură este mai frecventă la fumătoare",
   "Poate urma radioterapiei, chimioterapiei, afecțiunilor autoimune sau chirurgiei abdomino-pelvine",
   "În perimenopauză, răspunsul ovarian la FSH și LH scade, iar FSH și LH cresc, cu estrogeni fluctuanți",
   "Complicațiile menopauzei includ osteoporoză, boală coronariană și demență",
   "Se diagnostichează după șase luni de amenoree, identic menopauzei naturale"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Menopauza prematură este mai frecventă la fumătoare — Corect: Predilecția la fumătoare este explicită.\n\nPoate urma radioterapiei, chimioterapiei, afecțiunilor autoimune sau chirurgiei abdomino-pelvine — Corect: RT, chimioterapia, autoimunitatea și chirurgia sunt factorii enumerați.\n\nÎn perimenopauză, răspunsul ovarian la FSH și LH scade, iar FSH și LH cresc, cu estrogeni fluctuanți — Corect: Scăderea răspunsului ovarian, creșterea FSH/LH și fluctuația estrogenilor sunt din text.\n\nComplicațiile menopauzei includ osteoporoză, boală coronariană și demență — Corect: Osteoporoza, boala coronariană și demența sunt complicațiile de pe pagina următoare.\n\nSe diagnostichează după șase luni de amenoree, identic menopauzei naturale — Incorect: Diagnosticul menopauzei este după un an de amenoree, nu după șase luni.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 276, 277, Fiziologie — Perimenopauza și menopauza prematură (pagini PDF: 54, 55).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    276,
    277
   ],
   "pdfPages": [
    54,
    55
   ],
   "section": "Fiziologie — Perimenopauza și menopauza prematură"
  },
  "learningObjective": "Corelarea factorilor de risc (fumat, RT/chimioterapie) cu profilul hormonal perimenopauzal și cu complicațiile.",
  "optionRationales": [
   "Predilecția la fumătoare este explicită.",
   "RT, chimioterapia, autoimunitatea și chirurgia sunt factorii enumerați.",
   "Scăderea răspunsului ovarian, creșterea FSH/LH și fluctuația estrogenilor sunt din text.",
   "Osteoporoza, boala coronariană și demența sunt complicațiile de pe pagina următoare.",
   "Diagnosticul menopauzei este după un an de amenoree, nu după șase luni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul importă pragul amenoreei secundare (6 luni) asupra menopauzei, definită prin 1 an."
  },
  "textbookExpressions": [
   "fumătoare",
   "chimioterapie"
  ]
 },
 {
  "id": "gineco-adv-073",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Pilulele care conțin doar progestativ:",
  "options": [
   "Alterează calitatea endometrului și cresc vâscozitatea mucusului, prevenind fertilizarea și implantarea",
   "Pot fi o opțiune la pacientele cu contraindicație pentru estrogeni și trebuie luate la aceeași oră zilnic",
   "Se schimbă săptămânal, ca patch-ul transdermic",
   "Conțin etinilestradiol în doze mai mici decât inelul vaginal",
   "Eficacitatea scade la masa corporală mare prin difuzie în țesutul adipos, identic patch-ului"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Alterează calitatea endometrului și cresc vâscozitatea mucusului, prevenind fertilizarea și implantarea — Corect: Alterarea endometrului și a mucusului este descrierea din tabel.\n\nPot fi o opțiune la pacientele cu contraindicație pentru estrogeni și trebuie luate la aceeași oră zilnic — Corect: Contraindicația la estrogeni și ora zilnică sunt explicite.\n\nSe schimbă săptămânal, ca patch-ul transdermic — Incorect: Schimbarea săptămânală caracterizează patch-ul.\n\nConțin etinilestradiol în doze mai mici decât inelul vaginal — Incorect: Etinilestradiolul aparține inelului și COC.\n\nEficacitatea scade la masa corporală mare prin difuzie în țesutul adipos, identic patch-ului — Incorect: Difuzia în țesutul adipos este nota patch-ului.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 277, Contracepția — Pilulele doar cu progestativ (pagini PDF: 55).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    277
   ],
   "pdfPages": [
    55
   ],
   "section": "Contracepția — Pilulele doar cu progestativ"
  },
  "learningObjective": "Recunoașterea mecanismului fără estrogen și a regulii orei fixe, distinct de patch și inel.",
  "optionRationales": [
   "Alterarea endometrului și a mucusului este descrierea din tabel.",
   "Contraindicația la estrogeni și ora zilnică sunt explicite.",
   "Schimbarea săptămânală caracterizează patch-ul.",
   "Etinilestradiolul aparține inelului și COC.",
   "Difuzia în țesutul adipos este nota patch-ului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie POP schema săptămânală și limita ponderală ale patch-ului, de pe aceeași pagină."
  },
  "textbookExpressions": [
   "progestativ",
   "aceeaşi oră"
  ]
 },
 {
  "id": "gineco-adv-074",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Implanturile cu progestativ:",
  "options": [
   "Sunt dispozitive subcutanate care eliberează progestative circa 3 ani, cu acțiune similară pilulelor doar cu progestativ",
   "Eficacitatea ideală și tipică citate sunt ambele de 99%",
   "Se lasă in situ 10 ani, ca steriletul de cupru",
   "Se administrează din 3 în 3 luni, ca medroxiprogesteronul",
   "Necesită înlocuire lunară, ca inelul vaginal"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sunt dispozitive subcutanate care eliberează progestative circa 3 ani, cu acțiune similară pilulelor doar cu progestativ — Corect: Durata de circa 3 ani și similitudinea cu POP sunt din tabel.\n\nEficacitatea ideală și tipică citate sunt ambele de 99% — Corect: Eficacitatea 99% ideală și tipică este explicită.\n\nSe lasă in situ 10 ani, ca steriletul de cupru — Incorect: 10 ani este durata steriletului de cupru.\n\nSe administrează din 3 în 3 luni, ca medroxiprogesteronul — Incorect: Intervalul de 3 luni este al Depo-Provera.\n\nNecesită înlocuire lunară, ca inelul vaginal — Incorect: Înlocuirea lunară este a inelului.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 277, 278, Contracepția — Implantul cu progestativ (pagini PDF: 55, 56).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    277,
    278
   ],
   "pdfPages": [
    55,
    56
   ],
   "section": "Contracepția — Implantul cu progestativ"
  },
  "learningObjective": "Memorarea duratei de circa 3 ani și a eficacității 99/99, distinct de DIU, Depo și inel.",
  "optionRationales": [
   "Durata de circa 3 ani și similitudinea cu POP sunt din tabel.",
   "Eficacitatea 99% ideală și tipică este explicită.",
   "10 ani este durata steriletului de cupru.",
   "Intervalul de 3 luni este al Depo-Provera.",
   "Înlocuirea lunară este a inelului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Duratele 3 ani / 10 ani / 3 luni / 1 lună din tabelele contraceptive sunt ușor de permutat."
  },
  "textbookExpressions": [
   "3 ani",
   "Implanturi"
  ]
 },
 {
  "id": "gineco-adv-075",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Prezervativul:",
  "options": [
   "Este o barieră, cel mai frecvent din latex, lăsată pe loc până la retragere după ejaculare",
   "Este folosit frecvent cu spermicid",
   "Variantele din poliuretan sunt produse pentru cei cu alergie la latex",
   "Se lasă pe loc 10 ani, ca steriletul de cupru",
   "Are eficacitate tipică de 71%, identică spermicidului folosit singur"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este o barieră, cel mai frecvent din latex, lăsată pe loc până la retragere după ejaculare — Corect: Bariera de latex până după ejaculare este explicită.\n\nEste folosit frecvent cu spermicid — Corect: Asocierea cu spermicidul este citată.\n\nVariantele din poliuretan sunt produse pentru cei cu alergie la latex — Corect: Poliuretanul pentru alergia la latex este din tabel.\n\nSe lasă pe loc 10 ani, ca steriletul de cupru — Incorect: 10 ani este durata steriletului de cupru.\n\nAre eficacitate tipică de 71%, identică spermicidului folosit singur — Incorect: 71% este eficacitatea tipică a spermicidului folosit singur, nu a prezervativului (85% tipic).\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 278, Contracepția — Prezervativul (pagini PDF: 56).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    278
   ],
   "pdfPages": [
    56
   ],
   "section": "Contracepția — Prezervativul"
  },
  "learningObjective": "Recunoașterea latexului, a asocierii cu spermicidul și a alternativei din poliuretan.",
  "optionRationales": [
   "Bariera de latex până după ejaculare este explicită.",
   "Asocierea cu spermicidul este citată.",
   "Poliuretanul pentru alergia la latex este din tabel.",
   "10 ani este durata steriletului de cupru.",
   "71% este eficacitatea tipică a spermicidului folosit singur, nu a prezervativului (85% tipic)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută durata DIU și eficacitatea spermicidului asupra prezervativului, din același tabel."
  },
  "textbookExpressions": [
   "latex",
   "poliuretan"
  ]
 },
 {
  "id": "gineco-adv-076",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Metodele de barieră și spermicidul, altele decât prezervativul:",
  "options": [
   "Diafragmele sau cupolele cervicale se folosesc cu spermicid și se lasă pe loc mai multe ore după act",
   "Buretele contraceptiv eliberează spermicid 24 de ore și poate asocia risc crescut de șoc toxic",
   "Spermicidul folosit singur are eficacitate tipică de 71%",
   "Diafragmul nu asociază risc de infecție de tract urinar",
   "Buretele are eficacitate identică abstinenței, de 100%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Diafragmele sau cupolele cervicale se folosesc cu spermicid și se lasă pe loc mai multe ore după act — Corect: Utilizarea cu spermicid și menținerea după act sunt explicite.\n\nBuretele contraceptiv eliberează spermicid 24 de ore și poate asocia risc crescut de șoc toxic — Corect: Eliberarea 24 de ore și riscul de șoc toxic sunt din tabel.\n\nSpermicidul folosit singur are eficacitate tipică de 71% — Corect: 71% tipic pentru spermicidul singur este citat.\n\nDiafragmul nu asociază risc de infecție de tract urinar — Incorect: Tabelul listează risc crescut de ITU la diafragm.\n\nBuretele are eficacitate identică abstinenței, de 100% — Incorect: 100% este eficacitatea abstinenței, nu a buretelui.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 278, Contracepția — Diafragm, burete și spermicid (pagini PDF: 56).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    278
   ],
   "pdfPages": [
    56
   ],
   "section": "Contracepția — Diafragm, burete și spermicid"
  },
  "learningObjective": "Corelarea diafragmului (ITU, spermicid), a buretelui (24 h, șoc toxic) și a eficacității 71% a spermicidului.",
  "optionRationales": [
   "Utilizarea cu spermicid și menținerea după act sunt explicite.",
   "Eliberarea 24 de ore și riscul de șoc toxic sunt din tabel.",
   "71% tipic pentru spermicidul singur este citat.",
   "Tabelul listează risc crescut de ITU la diafragm.",
   "100% este eficacitatea abstinenței, nu a buretelui."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii neagă ITU-ul diafragmului și echivalează buretele cu abstinența, ambele din același tabel."
  },
  "textbookExpressions": [
   "şoc toxic",
   "Spermicid"
  ]
 },
 {
  "id": "gineco-adv-077",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Amenoreea primară se definește prin:",
  "options": [
   "Absența menstruațiilor până la 16 ani, în prezența caracterelor sexuale secundare",
   "Absența concomitentă a menstruațiilor și a caracterelor sexuale secundare până la 13 ani",
   "Absența menstruațiilor timp de 6 luni la o pacientă cu cicluri anterioare",
   "Un an de amenoree, criteriul de diagnostic al menopauzei",
   "Declinul funcției ovariene înainte de 40 de ani, fără evaluarea Tanner"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Absența menstruațiilor până la 16 ani, în prezența caracterelor sexuale secundare — Corect: Pragul de 16 ani cu caractere secundare este explicit.\n\nAbsența concomitentă a menstruațiilor și a caracterelor sexuale secundare până la 13 ani — Corect: Pragul de 13 ani fără caractere secundare este citat.\n\nAbsența menstruațiilor timp de 6 luni la o pacientă cu cicluri anterioare — Incorect: 6 luni sau peste 3 menstre absente definesc amenoreea secundară.\n\nUn an de amenoree, criteriul de diagnostic al menopauzei — Incorect: Un an de amenoree diagnostichează menopauza.\n\nDeclinul funcției ovariene înainte de 40 de ani, fără evaluarea Tanner — Incorect: Pragul de 40 de ani definește menopauza prematură/insuficiența ovariană, nu amenoreea primară.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 279, 276, Tulburări menstruale — Amenoreea primară (pagini PDF: 57, 54).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    279,
    276
   ],
   "pdfPages": [
    57,
    54
   ],
   "section": "Tulburări menstruale — Amenoreea primară"
  },
  "learningObjective": "Separarea celor două praguri ale amenoreei primare (16 cu caractere, 13 fără) de amenoreea secundară și menopauză.",
  "optionRationales": [
   "Pragul de 16 ani cu caractere secundare este explicit.",
   "Pragul de 13 ani fără caractere secundare este citat.",
   "6 luni sau peste 3 menstre absente definesc amenoreea secundară.",
   "Un an de amenoree diagnostichează menopauza.",
   "Pragul de 40 de ani definește menopauza prematură/insuficiența ovariană, nu amenoreea primară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pragurile 13/16/6 luni/1 an/40 de ani din capitol sunt ușor de permutat."
  },
  "textbookExpressions": [
   "16 ani",
   "13 ani"
  ]
 },
 {
  "id": "gineco-adv-078",
  "topicId": "gineco",
  "type": "CM",
  "stem": "În amenoree, după excluderea sarcinii, textul precizează că:",
  "options": [
   "Creșterea prolactinei sugerează o tumoră secretantă de prolactină, tratabilă cu agoniști dopaminergici",
   "Sindromul Asherman se tratează prin liza aderențelor și administrare de estrogeni",
   "Disfuncția hipotalamo-hipofizară poate fi tratată cu GnRH sau substituție cu gonadotropine",
   "Primul pas este histerectomia, fără β-hCG",
   "Testul la progesteron pozitiv exclude integritatea tractului genital"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Creșterea prolactinei sugerează o tumoră secretantă de prolactină, tratabilă cu agoniști dopaminergici — Corect: Prolactinomul și agoniștii dopaminergici sunt explicite.\n\nSindromul Asherman se tratează prin liza aderențelor și administrare de estrogeni — Corect: Liza aderențelor plus estrogenii sunt tratamentul Asherman.\n\nDisfuncția hipotalamo-hipofizară poate fi tratată cu GnRH sau substituție cu gonadotropine — Corect: GnRH sau gonadotropinele sunt citate pentru disfuncția hipotalamo-hipofizară.\n\nPrimul pas este histerectomia, fără β-hCG — Incorect: Primul pas este testul de sarcină, nu histerectomia.\n\nTestul la progesteron pozitiv exclude integritatea tractului genital — Incorect: Prezența menstruației după progesteron denotă integritatea tractului, nu o exclude.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 279, 280, Tulburări menstruale — Abordarea amenoreei (pagini PDF: 57, 58).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    279,
    280
   ],
   "pdfPages": [
    57,
    58
   ],
   "section": "Tulburări menstruale — Abordarea amenoreei"
  },
  "learningObjective": "Recunoașterea prolactinomului (agoniști), a Asherman (liză + estrogen) și a GnRH, cu β-hCG ca prim pas.",
  "optionRationales": [
   "Prolactinomul și agoniștii dopaminergici sunt explicite.",
   "Liza aderențelor plus estrogenii sunt tratamentul Asherman.",
   "GnRH sau gonadotropinele sunt citate pentru disfuncția hipotalamo-hipofizară.",
   "Primul pas este testul de sarcină, nu histerectomia.",
   "Prezența menstruației după progesteron denotă integritatea tractului, nu o exclude."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sar la histerectomie fără β-hCG și inversează interpretarea testului la progesteron."
  },
  "textbookExpressions": [
   "Asherman",
   "prolactină"
  ]
 },
 {
  "id": "gineco-adv-079",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații diferențiază corect dismenoreea primară de cea secundară?",
  "options": [
   "În forma primară, simptomele apar la începutul menstruației și dispar în câteva zile",
   "În forma secundară, simptomele încep de obicei la mijlocul ciclului anterior și se accentuează până la sfârșitul menstruației",
   "Forma primară începe la mijlocul ciclului și persistă tot intervalul intermenstrual",
   "Mittelschmerz este sinonimul dismenoreei primare",
   "Forma secundară nu are cauze pelvine, spre deosebire de forma primară"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "În forma primară, simptomele apar la începutul menstruației și dispar în câteva zile — Corect: Debutul la începutul menstruației și dispariția în câteva zile definesc forma primară.\n\nÎn forma secundară, simptomele încep de obicei la mijlocul ciclului anterior și se accentuează până la sfârșitul menstruației — Corect: Debutul de la mijlocul ciclului, cu accentuare până la sfârșit, definește forma secundară.\n\nForma primară începe la mijlocul ciclului și persistă tot intervalul intermenstrual — Incorect: Intervalul intermenstrual prelungit nu este descrierea formei primare.\n\nMittelschmerz este sinonimul dismenoreei primare — Incorect: Mittelschmerz este durerea ovulatorie, nu dismenoreea.\n\nForma secundară nu are cauze pelvine, spre deosebire de forma primară — Incorect: Cauzele pelvine (endometrioză, BIP, fibroame, chiste, adenomioză) definesc forma secundară.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 280, 281, Tulburări menstruale — Dismenoreea (pagini PDF: 58, 59).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    280,
    281
   ],
   "pdfPages": [
    58,
    59
   ],
   "section": "Tulburări menstruale — Dismenoreea"
  },
  "learningObjective": "Contrastarea debutului odată cu menstruația (primară) versus debutul de la mijlocul ciclului (secundară).",
  "optionRationales": [
   "Debutul la începutul menstruației și dispariția în câteva zile definesc forma primară.",
   "Debutul de la mijlocul ciclului, cu accentuare până la sfârșit, definește forma secundară.",
   "Intervalul intermenstrual prelungit nu este descrierea formei primare.",
   "Mittelschmerz este durerea ovulatorie, nu dismenoreea.",
   "Cauzele pelvine (endometrioză, BIP, fibroame, chiste, adenomioză) definesc forma secundară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează calendarul celor două forme și confundă dismenoreea cu mittelschmerz."
  },
  "textbookExpressions": [
   "dismenoreei primare",
   "dismenoreei"
  ]
 },
 {
  "id": "gineco-adv-080",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Infecția vaginală cu Trichomonas:",
  "options": [
   "Asociază inflamație vaginală și cervicală, cu peteșii cervicale",
   "Secreția este urât mirositoare, spumoasă, verzuie, iar frotiul salin arată Trichomonas mobil",
   "pH-ul vaginal este peste 4,5, iar tratamentul este metronidazol, inclusiv la partener",
   "pH-ul rămâne între 3,5 și 4,5, cu pseudohife la KOH, ca în candidoză",
   "Partenerul nu necesită tratament, identic infecției cu Gardnerella"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Asociază inflamație vaginală și cervicală, cu peteșii cervicale — Corect: Inflamația cu peteșii cervicale este din tabel.\n\nSecreția este urât mirositoare, spumoasă, verzuie, iar frotiul salin arată Trichomonas mobil — Corect: Secreția spumoasă verzuie și parazitul mobil sunt explicite.\n\npH-ul vaginal este peste 4,5, iar tratamentul este metronidazol, inclusiv la partener — Corect: pH-ul crescut și metronidazolul la ambii parteneri sunt citate.\n\npH-ul rămâne între 3,5 și 4,5, cu pseudohife la KOH, ca în candidoză — Incorect: pH normal și pseudohife definesc candidoza.\n\nPartenerul nu necesită tratament, identic infecției cu Gardnerella — Incorect: Partenerul trebuie tratat în trichomoniază; ne-tratamentul partenerului este al Gardnerella.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 282, 283, Infecții — Trichomoniaza (pagini PDF: 60, 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    282,
    283
   ],
   "pdfPages": [
    60,
    61
   ],
   "section": "Infecții — Trichomoniaza"
  },
  "learningObjective": "Recunoașterea peteșiilor, a secreției spumoase verzui și a tratamentului partenerului, distinct de candidoză și vaginoză.",
  "optionRationales": [
   "Inflamația cu peteșii cervicale este din tabel.",
   "Secreția spumoasă verzuie și parazitul mobil sunt explicite.",
   "pH-ul crescut și metronidazolul la ambii parteneri sunt citate.",
   "pH normal și pseudohife definesc candidoza.",
   "Partenerul trebuie tratat în trichomoniază; ne-tratamentul partenerului este al Gardnerella."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă pH-ul candidozei și regula partenerului din vaginoză asupra trichomoniazei."
  },
  "textbookExpressions": [
   "Trichomonas",
   "Metronidazol"
  ]
 },
 {
  "id": "gineco-adv-081",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Lactobacilii pe frotiul vaginal:",
  "options": [
   "Reprezintă flora microbiană vaginală normală, a căror prezență nu este sugestivă pentru infecție",
   "Sunt patognomonici pentru vaginoza cu Gardnerella",
   "Identifică Trichomonas mobil pe frotiul salin",
   "Apar ca pseudohife la preparatul KOH",
   "Impun metronidazol de primă intenție, ca în trichomoniază"
  ],
  "correct": [
   0
  ],
  "explanation": "Reprezintă flora microbiană vaginală normală, a căror prezență nu este sugestivă pentru infecție — Corect: Nota identifică lactobacilii drept floră normală, nesugestivă pentru infecție.\n\nSunt patognomonici pentru vaginoza cu Gardnerella — Incorect: Gardnerella se recunoaște prin celule clue, nu prin lactobacili.\n\nIdentifică Trichomonas mobil pe frotiul salin — Incorect: Trichomonas mobil este protozoarul, nu un lactobacil.\n\nApar ca pseudohife la preparatul KOH — Incorect: Pseudohifele definesc Candida.\n\nImpun metronidazol de primă intenție, ca în trichomoniază — Incorect: Metronidazolul tratează Gardnerella/Trichomonas, nu flora normală.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 282, Infecții — Flora vaginală (pagini PDF: 60).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    282
   ],
   "pdfPages": [
    60
   ],
   "section": "Infecții — Flora vaginală"
  },
  "learningObjective": "Interpretarea lactobacililor ca floră normală, nu ca marker de vaginită.",
  "optionRationales": [
   "Nota identifică lactobacilii drept floră normală, nesugestivă pentru infecție.",
   "Gardnerella se recunoaște prin celule clue, nu prin lactobacili.",
   "Trichomonas mobil este protozoarul, nu un lactobacil.",
   "Pseudohifele definesc Candida.",
   "Metronidazolul tratează Gardnerella/Trichomonas, nu flora normală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate distractoarele sunt elemente reale ale tabelului de vaginite, atribuite greșit lactobacililor."
  },
  "textbookExpressions": [
   "Lactobacilii",
   "flora microbiană"
  ]
 },
 {
  "id": "gineco-adv-082",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Limfogranulomatoza inghinală:",
  "options": [
   "Este cauzată de serotipurile L1, L2 sau L3 ale Chlamydia trachomatis, diferite de cele ale cervicitei",
   "După circa o lună se dezvoltă adenopatii inghinale semnificative, mai frecvent la bărbați",
   "Agentul este Klebsiella granulomatis, cu corpi Donovan pe colorația Giemsa",
   "Ulcerația este dureroasă, cu bază cenușie, ca în șancrul moale",
   "Tratamentul de fond este ceftriaxona, ca în șancrul moale"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este cauzată de serotipurile L1, L2 sau L3 ale Chlamydia trachomatis, diferite de cele ale cervicitei — Corect: Serotipurile L1–L3, diferite de cervicită, sunt explicite.\n\nDupă circa o lună se dezvoltă adenopatii inghinale semnificative, mai frecvent la bărbați — Corect: Adenopatia la o lună, mai ales la bărbați, este tabloul.\n\nAgentul este Klebsiella granulomatis, cu corpi Donovan pe colorația Giemsa — Incorect: Klebsiella și corpii Donovan definesc granulomul inghinal.\n\nUlcerația este dureroasă, cu bază cenușie, ca în șancrul moale — Incorect: Ulcerația dureroasă cenușie este a șancrului moale.\n\nTratamentul de fond este ceftriaxona, ca în șancrul moale — Incorect: Ceftriaxona tratează șancrul moale; LGV se tratează cu tetraciclină, eritromicină sau doxiciclină.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 286, 285, Infecții — Limfogranulomatoza inghinală (pagini PDF: 64, 63).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    286,
    285
   ],
   "pdfPages": [
    64,
    63
   ],
   "section": "Infecții — Limfogranulomatoza inghinală"
  },
  "learningObjective": "Asocierea serotipurilor L1–L3 cu adenopatia tardivă, distinct de granulomul inghinal și de șancrul moale.",
  "optionRationales": [
   "Serotipurile L1–L3, diferite de cervicită, sunt explicite.",
   "Adenopatia la o lună, mai ales la bărbați, este tabloul.",
   "Klebsiella și corpii Donovan definesc granulomul inghinal.",
   "Ulcerația dureroasă cenușie este a șancrului moale.",
   "Ceftriaxona tratează șancrul moale; LGV se tratează cu tetraciclină, eritromicină sau doxiciclină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută agentul granulomului inghinal și tratamentul șancrului moale, alăturate în capitol."
  },
  "textbookExpressions": [
   "Limfogranulomatoza",
   "trachomatis"
  ]
 },
 {
  "id": "gineco-adv-083",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Granulomul inghinal:",
  "options": [
   "Este cauzat de Klebsiella granulomatis",
   "Ulcerația nedureroasă are aspect de „carne roșie de vită” și margini neregulate",
   "Colorația Giemsa evidențiază corpi Donovan",
   "Agentul este Haemophilus ducreyi, cu streptobacili gram-negativi",
   "Serotipurile L1–L3 ale Chlamydia definesc entitatea, nu cervicita"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este cauzat de Klebsiella granulomatis — Corect: Klebsiella granulomatis este agentul citat.\n\nUlcerația nedureroasă are aspect de „carne roșie de vită” și margini neregulate — Corect: Carnea roșie de vită și marginile neregulate sunt tabloul.\n\nColorația Giemsa evidențiază corpi Donovan — Corect: Corpii Donovan pe Giemsa sunt laboratorul.\n\nAgentul este Haemophilus ducreyi, cu streptobacili gram-negativi — Incorect: Haemophilus ducreyi produce șancrul moale.\n\nSerotipurile L1–L3 ale Chlamydia definesc entitatea, nu cervicita — Incorect: L1–L3 definesc limfogranulomatoza, nu granulomul inghinal.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 286, Infecții — Granulomul inghinal (pagini PDF: 64).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    286
   ],
   "pdfPages": [
    64
   ],
   "section": "Infecții — Granulomul inghinal"
  },
  "learningObjective": "Recunoașterea Klebsiellei, a aspectului de carne roșie și a corpilor Donovan, distinct de LGV și șancrul moale.",
  "optionRationales": [
   "Klebsiella granulomatis este agentul citat.",
   "Carnea roșie de vită și marginile neregulate sunt tabloul.",
   "Corpii Donovan pe Giemsa sunt laboratorul.",
   "Haemophilus ducreyi produce șancrul moale.",
   "L1–L3 definesc limfogranulomatoza, nu granulomul inghinal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt agenții celorlalte ulcerații genitale din aceleași două pagini."
  },
  "textbookExpressions": [
   "Donovan",
   "carne roşie"
  ]
 },
 {
  "id": "gineco-adv-084",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Indicațiile biopsiei de endometru includ:",
  "options": [
   "Metroragia în postmenopauză",
   "Metroragia disfuncțională peste 45 de ani",
   "Metroragia disfuncțională sub 45 de ani, în condițiile expunerii la estrogen nebalansat cu progesteron",
   "HNPCC și celule glandulare atipice pe frotiul Papanicolau",
   "Vaginita atrofică, care explică 80% din metroragiile de climax, face biopsia superfluă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Metroragia în postmenopauză — Corect: Metroragia de postmenopauză este prima indicație.\n\nMetroragia disfuncțională peste 45 de ani — Corect: Pragul de 45 de ani este explicit.\n\nMetroragia disfuncțională sub 45 de ani, în condițiile expunerii la estrogen nebalansat cu progesteron — Corect: Estrogenul nebalansat sub 45 de ani este citat.\n\nHNPCC și celule glandulare atipice pe frotiul Papanicolau — Corect: HNPCC și celulele glandulare atipice completează lista.\n\nVaginita atrofică, care explică 80% din metroragiile de climax, face biopsia superfluă — Incorect: Deși vaginita atrofică e cea mai frecventă cauză, textul cere totuși excluderea cancerului prin biopsie.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 286, Neoplasme — Biopsia endometrială (pagini PDF: 64).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    286
   ],
   "pdfPages": [
    64
   ],
   "section": "Neoplasme — Biopsia endometrială"
  },
  "learningObjective": "Aplicarea listei de indicații (postmenopauză, >45 ani, estrogen nebalansat, HNPCC, AGC), în ciuda frecvenței vaginitei atrofice.",
  "optionRationales": [
   "Metroragia de postmenopauză este prima indicație.",
   "Pragul de 45 de ani este explicit.",
   "Estrogenul nebalansat sub 45 de ani este citat.",
   "HNPCC și celulele glandulare atipice completează lista.",
   "Deși vaginita atrofică e cea mai frecventă cauză, textul cere totuși excluderea cancerului prin biopsie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul transformă ponderea de 80% a vaginitei atrofice într-o scutire de biopsie, pe care nota o neagă."
  },
  "textbookExpressions": [
   "HNPCC",
   "biopsiei de endometru"
  ]
 },
 {
  "id": "gineco-adv-085",
  "topicId": "gineco",
  "type": "CS",
  "stem": "Cea mai frecventă cauză de metroragie în postmenopauză, reprezentând circa 80% din cazuri, este:",
  "options": [
   "Vaginita atrofică",
   "Carcinomul endometrial metastatic",
   "Sarcina molară",
   "Fibromul uterin în creștere, după menopauză",
   "Granulomul inghinal"
  ],
  "correct": [
   0
  ],
  "explanation": "Vaginita atrofică — Corect: Nota cuantifică vaginita atrofică la 80% din metroragiile de climax.\n\nCarcinomul endometrial metastatic — Incorect: Cancerul trebuie exclus, dar nu este cauza cea mai frecventă.\n\nSarcina molară — Incorect: Sarcina molară nu este etiologia citată a metroragiei de postmenopauză.\n\nFibromul uterin în creștere, după menopauză — Incorect: Fibromul nu continuă să crească după menopauză.\n\nGranulomul inghinal — Incorect: Granulomul inghinal este o ulcerație infecțioasă, nu cauza de 80%.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 286, Neoplasme — Metroragia de postmenopauză (pagini PDF: 64).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    286
   ],
   "pdfPages": [
    64
   ],
   "section": "Neoplasme — Metroragia de postmenopauză"
  },
  "learningObjective": "Identificarea vaginitei atrofice ca etiologia cea mai frecventă, fără a confunda frecvența cu dispensarea de biopsie.",
  "optionRationales": [
   "Nota cuantifică vaginita atrofică la 80% din metroragiile de climax.",
   "Cancerul trebuie exclus, dar nu este cauza cea mai frecventă.",
   "Sarcina molară nu este etiologia citată a metroragiei de postmenopauză.",
   "Fibromul nu continuă să crească după menopauză.",
   "Granulomul inghinal este o ulcerație infecțioasă, nu cauza de 80%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt patologii reale din aceeași pagină (endometru, fibrom, granulom), atribuite greșit ponderii de 80%."
  },
  "textbookExpressions": [
   "80% cazuri",
   "vaginita atrofică"
  ]
 },
 {
  "id": "gineco-adv-086",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Chistadenomul ovarian mucinos sau seros:",
  "options": [
   "Poate semăna histologic cu epiteliul endometrial sau tubar și poate forma calcificări (corpi psammoma)",
   "Poate deveni extrem de mare, cu masă palpabilă inclusiv transabdominal",
   "Tratamentul este anexectomie unilaterală; histerectomia totală cu anexectomie bilaterală se discută la menopauză",
   "Regresează constant în primele 2 săptămâni ale ciclului, ca chistul folicular",
   "Este de origine germinală și conține păr, dinți și glande sebacee"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Poate semăna histologic cu epiteliul endometrial sau tubar și poate forma calcificări (corpi psammoma) — Corect: Originea epitelială, conținutul seros/mucinos și corpii psammoma sunt din tabel.\n\nPoate deveni extrem de mare, cu masă palpabilă inclusiv transabdominal — Corect: Dimensiunea extremă și palparea transabdominală sunt explicite.\n\nTratamentul este anexectomie unilaterală; histerectomia totală cu anexectomie bilaterală se discută la menopauză — Corect: Anexectomia unilaterală și HTAB la menopauză sunt tratamentul.\n\nRegresează constant în primele 2 săptămâni ale ciclului, ca chistul folicular — Incorect: Regresia menstruală caracterizează chistul folicular.\n\nEste de origine germinală și conține păr, dinți și glande sebacee — Incorect: Părul, dinții și sebumul definesc teratomul dermoid.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 288, Neoplasme — Chistadenomul ovarian (pagini PDF: 66).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    288
   ],
   "pdfPages": [
    66
   ],
   "section": "Neoplasme — Chistadenomul ovarian"
  },
  "learningObjective": "Recunoașterea corpilor psammoma, a dimensiunilor extreme și a anexectomiei, distinct de chistul folicular și dermoid.",
  "optionRationales": [
   "Originea epitelială, conținutul seros/mucinos și corpii psammoma sunt din tabel.",
   "Dimensiunea extremă și palparea transabdominală sunt explicite.",
   "Anexectomia unilaterală și HTAB la menopauză sunt tratamentul.",
   "Regresia menstruală caracterizează chistul folicular.",
   "Părul, dinții și sebumul definesc teratomul dermoid."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie chistadenomului evoluția chistului folicular și histologia dermoizilor, din același tabel."
  },
  "textbookExpressions": [
   "psammoma",
   "Anexectomie"
  ]
 },
 {
  "id": "gineco-adv-087",
  "topicId": "gineco",
  "type": "CM",
  "stem": "În tumorile ovariene epiteliale maligne se recomandă:",
  "options": [
   "Histerectomie totală abdominală, biopsii peritoneale pelvine și apendicectomie, cu chimioterapie adjuvantă frecventă",
   "Citoreducție tumorală cu rezecția intestinelor, ficatului, omentului, splinei și ganglionilor în boala metastatică",
   "Ooforectomie unilaterală pentru tumorile detectate precoce, dacă se dorește conservarea fertilității",
   "Doar supraveghere, ca în chisturile funcționale, fără chirurgie",
   "CA-125 are sensibilitate de screening la toate femeile fertile, înlocuind imagistica"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Histerectomie totală abdominală, biopsii peritoneale pelvine și apendicectomie, cu chimioterapie adjuvantă frecventă — Corect: HTAB, biopsiile peritoneale și apendicectomia sunt explicite.\n\nCitoreducție tumorală cu rezecția intestinelor, ficatului, omentului, splinei și ganglionilor în boala metastatică — Corect: Citoreducția viscerelor citate este tratamentul bolii extinse.\n\nOoforectomie unilaterală pentru tumorile detectate precoce, dacă se dorește conservarea fertilității — Corect: Ooforectomia unilaterală precoce pentru fertilitate este permisă.\n\nDoar supraveghere, ca în chisturile funcționale, fără chirurgie — Incorect: Supravegherea este a chisturilor funcționale, nu a cancerului epitelial.\n\nCA-125 are sensibilitate de screening la toate femeile fertile, înlocuind imagistica — Incorect: CA-125 este nuanțat ca util în postmenopauză, nu ca screening universal.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 289, Neoplasme — Cancerul ovarian epitelial (pagini PDF: 67).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    289
   ],
   "pdfPages": [
    67
   ],
   "section": "Neoplasme — Cancerul ovarian epitelial"
  },
  "learningObjective": "Ierarhizarea HTAB plus apendicectomie, a citoreducției și a conservării de fertilitate, distinct de chistul funcțional.",
  "optionRationales": [
   "HTAB, biopsiile peritoneale și apendicectomia sunt explicite.",
   "Citoreducția viscerelor citate este tratamentul bolii extinse.",
   "Ooforectomia unilaterală precoce pentru fertilitate este permisă.",
   "Supravegherea este a chisturilor funcționale, nu a cancerului epitelial.",
   "CA-125 este nuanțat ca util în postmenopauză, nu ca screening universal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică supravegherea chistului funcțional și supraestimează CA-125 ca screening."
  },
  "textbookExpressions": [
   "apendicectomie",
   "Citoreducţia"
  ]
 },
 {
  "id": "gineco-adv-088",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre lichenul plan și vestibulodinie:",
  "options": [
   "Lichenul plan produce leziuni lucioase, reticulare, eritematoase, cu ulcerații, iar vaginul se poate oblitera",
   "Vestibulodinia se limitează la vestibulul vulvar; durerea la atingere sau penetrare se tratează cu antidepresive triciclice",
   "Lichenul plan nu afectează vaginul, identic lichenului scleros",
   "Vestibulodinia se tratează cu clobetasol, ca lichenul scleros",
   "Diagnosticul lichenului plan se pune pe celule clue, fără examen clinic"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Lichenul plan produce leziuni lucioase, reticulare, eritematoase, cu ulcerații, iar vaginul se poate oblitera — Corect: Leziunile lucioase reticulare și obliterarea vaginală sunt tabloul lichenului plan.\n\nVestibulodinia se limitează la vestibulul vulvar; durerea la atingere sau penetrare se tratează cu antidepresive triciclice — Corect: Limitarea la vestibul și triciclicele sunt explicite.\n\nLichenul plan nu afectează vaginul, identic lichenului scleros — Incorect: Textul precizează că vaginul se poate oblitera în lichenul plan; absența afectării vaginale este a lichenului scleros.\n\nVestibulodinia se tratează cu clobetasol, ca lichenul scleros — Incorect: Clobetasolul este al lichenului scleros, nu al vestibulodiniei.\n\nDiagnosticul lichenului plan se pune pe celule clue, fără examen clinic — Incorect: Celulele clue definesc vaginoza, nu lichenul plan.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 289, Afecțiuni vulvare — Lichen plan și vestibulodinie (pagini PDF: 67).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    289
   ],
   "pdfPages": [
    67
   ],
   "section": "Afecțiuni vulvare — Lichen plan și vestibulodinie"
  },
  "learningObjective": "Contrastarea obliterării vaginale din lichenul plan cu vestibulodinia tratată prin triciclice.",
  "optionRationales": [
   "Leziunile lucioase reticulare și obliterarea vaginală sunt tabloul lichenului plan.",
   "Limitarea la vestibul și triciclicele sunt explicite.",
   "Textul precizează că vaginul se poate oblitera în lichenul plan; absența afectării vaginale este a lichenului scleros.",
   "Clobetasolul este al lichenului scleros, nu al vestibulodiniei.",
   "Celulele clue definesc vaginoza, nu lichenul plan."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă absența afectării vaginale și clobetasolul lichenului scleros, definite pe aceeași pagină."
  },
  "textbookExpressions": [
   "Lichenul plan",
   "Vestibulodinia"
  ]
 },
 {
  "id": "gineco-adv-089",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Abcesul mamar:",
  "options": [
   "Este cauzat de Staphylococcus aureus sau streptococ în infecțiile superficiale și de anaerobi în cele subareolare",
   "Majoritatea sunt legate de alăptare și sunt mai frecvente la fumătoare",
   "Tratamentul include antibiotice, incizie și drenaj ale maselor fluctuante, cu continuarea alăptării",
   "Se tratează prin tumorectomie plus iradiere, ca CDIS",
   "Este adenocarcinomul cu celule clare legat de dietilstilbestrol"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este cauzat de Staphylococcus aureus sau streptococ în infecțiile superficiale și de anaerobi în cele subareolare — Corect: S. aureus/streptococul superficial și anaerobii subareolari sunt explicite.\n\nMajoritatea sunt legate de alăptare și sunt mai frecvente la fumătoare — Corect: Alăptarea și fumatul sunt factorii citați.\n\nTratamentul include antibiotice, incizie și drenaj ale maselor fluctuante, cu continuarea alăptării — Corect: Antibioticele, drenajul și continuarea alăptării sunt tratamentul.\n\nSe tratează prin tumorectomie plus iradiere, ca CDIS — Incorect: Tumorectomia plus iradiere este a CDIS.\n\nEste adenocarcinomul cu celule clare legat de dietilstilbestrol — Incorect: DES se asociază cu adenocarcinomul vaginal cu celule clare.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 290, Afecțiunile sânului — Abcesul mamar (pagini PDF: 68).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    290
   ],
   "pdfPages": [
    68
   ],
   "section": "Afecțiunile sânului — Abcesul mamar"
  },
  "learningObjective": "Corelarea etiologiei (S. aureus versus anaerobi), a alăptării/fumatului și a continuării lactației după drenaj.",
  "optionRationales": [
   "S. aureus/streptococul superficial și anaerobii subareolari sunt explicite.",
   "Alăptarea și fumatul sunt factorii citați.",
   "Antibioticele, drenajul și continuarea alăptării sunt tratamentul.",
   "Tumorectomia plus iradiere este a CDIS.",
   "DES se asociază cu adenocarcinomul vaginal cu celule clare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută conduita CDIS și etiologia DES asupra unei infecții lactaționale."
  },
  "textbookExpressions": [
   "alăptare",
   "incizia şi drenajul"
  ]
 },
 {
  "id": "gineco-adv-090",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Boala Paget a sânului:",
  "options": [
   "Celulele maligne adenocarcinomatoase infiltrează epiteliul mamelonar și areolar și marchează de regulă un carcinom ductal din profunzime",
   "Se prezintă ca leziune descuamativă, eczematoasă sau ulcerativă a mamelonului și areolei",
   "Este cea mai frecventă tumoră mamară benignă la femei sub 30 de ani",
   "Secreția mamelonară sanguinolentă fără masă definește papilomul, deci Paget nu asociază leziune mamelonară",
   "Nu are substrat carcinomatos profund, fiind o dermatită izolată"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Celulele maligne adenocarcinomatoase infiltrează epiteliul mamelonar și areolar și marchează de regulă un carcinom ductal din profunzime — Corect: Infiltrația epiteliului mamelonar/areolar și legătura cu carcinomul ductal sunt din tabel.\n\nSe prezintă ca leziune descuamativă, eczematoasă sau ulcerativă a mamelonului și areolei — Corect: Aspectul descuamativ-eczematos este tabloul clinic.\n\nEste cea mai frecventă tumoră mamară benignă la femei sub 30 de ani — Incorect: Tumora benignă mobilă sub 30 de ani este fibroadenomul.\n\nSecreția mamelonară sanguinolentă fără masă definește papilomul, deci Paget nu asociază leziune mamelonară — Incorect: Paget este tocmai leziunea mamelonară; secreția izolată sugerează papilomul.\n\nNu are substrat carcinomatos profund, fiind o dermatită izolată — Incorect: Textul o descrie ca marker al unui carcinom din profunzime, nu ca dermatită izolată.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 291, 290, Afecțiunile sânului — Boala Paget (pagini PDF: 69, 68).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    291,
    290
   ],
   "pdfPages": [
    69,
    68
   ],
   "section": "Afecțiunile sânului — Boala Paget"
  },
  "learningObjective": "Recunoașterea eczemei mamelonare ca marker al carcinomului ductal profund, distinct de fibroadenom și papilom.",
  "optionRationales": [
   "Infiltrația epiteliului mamelonar/areolar și legătura cu carcinomul ductal sunt din tabel.",
   "Aspectul descuamativ-eczematos este tabloul clinic.",
   "Tumora benignă mobilă sub 30 de ani este fibroadenomul.",
   "Paget este tocmai leziunea mamelonară; secreția izolată sugerează papilomul.",
   "Textul o descrie ca marker al unui carcinom din profunzime, nu ca dermatită izolată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă Paget cu fibroadenomul și cu papilomul intraductal, definite pe aceleași pagini."
  },
  "textbookExpressions": [
   "Paget",
   "mamelonului"
  ]
 },
 {
  "id": "gineco-adv-091",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Carcinomul mamar după originea histologică:",
  "options": [
   "Forma ductală reprezintă circa 80% din cazuri și are agresivitate crescută",
   "Forma lobulară reprezintă circa 20% din cazuri, cu agresivitate redusă și detecție mai dificilă",
   "Carcinomul ductal invaziv este cea mai frecventă formă invazivă, circa 80% din cazurile invazive",
   "Forma lobulară reprezintă 80% din cazuri, identic carcinomului de col scuamos",
   "Unu la sută dintre cancerele mamare apar la bărbați"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Forma ductală reprezintă circa 80% din cazuri și are agresivitate crescută — Corect: Ponderea 80% și agresivitatea formei ductale sunt explicite.\n\nForma lobulară reprezintă circa 20% din cazuri, cu agresivitate redusă și detecție mai dificilă — Corect: 20%, agresivitatea redusă și detecția dificilă definesc forma lobulară.\n\nCarcinomul ductal invaziv este cea mai frecventă formă invazivă, circa 80% din cazurile invazive — Corect: Tabelul identifică carcinomul ductal invaziv drept cea mai frecventă formă invazivă (80%).\n\nForma lobulară reprezintă 80% din cazuri, identic carcinomului de col scuamos — Incorect: 80% scuamos este histologia cancerului de col, nu originea lobulară.\n\nUnu la sută dintre cancerele mamare apar la bărbați — Corect: Nota cuantifică 1% dintre cancerele mamare la bărbați.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 291, Afecțiunile sânului — Histologia cancerului mamar (pagini PDF: 69).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    291
   ],
   "pdfPages": [
    69
   ],
   "section": "Afecțiunile sânului — Histologia cancerului mamar"
  },
  "learningObjective": "Ierarhizarea 80% ductal versus 20% lobular, a predominanței formei invazive ductale și a ponderii de 1% la bărbați.",
  "optionRationales": [
   "Ponderea 80% și agresivitatea formei ductale sunt explicite.",
   "20%, agresivitatea redusă și detecția dificilă definesc forma lobulară.",
   "Tabelul identifică carcinomul ductal invaziv drept cea mai frecventă formă invazivă (80%).",
   "80% scuamos este histologia cancerului de col, nu originea lobulară.",
   "Nota cuantifică 1% dintre cancerele mamare la bărbați."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul permută 80% de la col asupra originii lobulare, restul fiind cifre alăturate ușor de inversat."
  },
  "textbookExpressions": [
   "80% din cazuri)",
   "1% dintre cancerele"
  ]
 },
 {
  "id": "gineco-adv-092",
  "topicId": "gineco",
  "type": "CM",
  "stem": "Conduita față de o tumoră mamară palpabilă la femeia sub 30 de ani include:",
  "options": [
   "Ecografie țintită, eventual plus mamografie diagnostică",
   "Aspirație și monitorizare la 2–4 luni pentru chistele simple",
   "Biopsie țintită ghidată imagistic pentru chistele complexe sau tumorile solide",
   "Doar încurajare și reevaluare după 1–2 cicluri, ca la adolescente, fără imagistică",
   "Mamografie de screening de primă intenție, fără ecografie, identic femeii peste 30 de ani"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ecografie țintită, eventual plus mamografie diagnostică — Corect: Ecografia țintită ± mamografia diagnostică este conduita sub 30 de ani.\n\nAspirație și monitorizare la 2–4 luni pentru chistele simple — Corect: Aspirația și reevaluarea la 2–4 luni sunt ale chistului simplu.\n\nBiopsie țintită ghidată imagistic pentru chistele complexe sau tumorile solide — Corect: Biopsia ghidată este a chistelor complexe sau a maselor solide.\n\nDoar încurajare și reevaluare după 1–2 cicluri, ca la adolescente, fără imagistică — Incorect: Doar reevaluarea după 1–2 cicluri este rezervată adolescentelor.\n\nMamografie de screening de primă intenție, fără ecografie, identic femeii peste 30 de ani — Incorect: Sub 30 de ani ecografia precede; mamografia ± ecografia este algoritmul peste 30 de ani.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 12, p. 290, 291, Afecțiunile sânului — Algoritmul tumorii palpabile (pagini PDF: 68, 69).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 12,
   "printedPages": [
    290,
    291
   ],
   "pdfPages": [
    68,
    69
   ],
   "section": "Afecțiunile sânului — Algoritmul tumorii palpabile"
  },
  "learningObjective": "Aplicarea ecografiei ca prim pas sub 30 de ani și a distincției chist simplu versus complex/solid.",
  "optionRationales": [
   "Ecografia țintită ± mamografia diagnostică este conduita sub 30 de ani.",
   "Aspirația și reevaluarea la 2–4 luni sunt ale chistului simplu.",
   "Biopsia ghidată este a chistelor complexe sau a maselor solide.",
   "Doar reevaluarea după 1–2 cicluri este rezervată adolescentelor.",
   "Sub 30 de ani ecografia precede; mamografia ± ecografia este algoritmul peste 30 de ani."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vârstele adolescentă / <30 / >30 din același tabel sunt ușor de permutat între observație, ecografie și mamografie."
  },
  "textbookExpressions": [
   "Vârsta <30 ani",
   "Ecografie"
  ]
 }
];
