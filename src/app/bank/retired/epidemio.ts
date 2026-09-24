import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_EPIDEMIO:Question[]=[
 {
  "id": "epidemio-adv-001",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Studiile caz-control:",
  "options": [
   "Compară retrospectiv pacienții care au boala cu martorii sănătoși",
   "Permit calcularea raportului cotelor (odds ratio)",
   "Permit analiza bolilor rare sau cronice într-o perioadă scurtă de timp",
   "Permit determinarea incidenței bolii",
   "Reprezintă standardul de aur pentru testarea medicamentelor"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Compară retrospectiv pacienții care au boala cu martorii sănătoși — Corect: Tabelul 15-1 descrie comparația retrospectivă bolnavi–martori.\n\nPermit calcularea raportului cotelor (odds ratio) — Corect: Concluzia specifică studiilor caz-control este raportul cotelor.\n\nPermit analiza bolilor rare sau cronice într-o perioadă scurtă de timp — Corect: Avantajul analizei bolilor rare într-o perioadă scurtă este explicit.\n\nPermit determinarea incidenței bolii — Incorect: Dezavantajul citat: nu se poate determina incidența bolii.\n\nReprezintă standardul de aur pentru testarea medicamentelor — Incorect: Standardul de aur pentru testarea medicamentelor este trialul clinic randomizat.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 333, Studiile științifice — Tipuri de studii (pagini PDF: 111).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    333
   ],
   "pdfPages": [
    111
   ],
   "section": "Studiile științifice — Tipuri de studii"
  },
  "learningObjective": "Recunoașterea designului, a măsurii de asociere și a limitelor studiilor caz-control.",
  "optionRationales": [
   "Tabelul 15-1 descrie comparația retrospectivă bolnavi–martori.",
   "Concluzia specifică studiilor caz-control este raportul cotelor.",
   "Avantajul analizei bolilor rare într-o perioadă scurtă este explicit.",
   "Dezavantajul citat: nu se poate determina incidența bolii.",
   "Standardul de aur pentru testarea medicamentelor este trialul clinic randomizat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie studiului caz-control proprietăți ale studiului de cohortă și ale trialului randomizat."
  },
  "textbookExpressions": [
   "Raportul cotelor",
   "erori de memorie"
  ]
 },
 {
  "id": "epidemio-adv-002",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Studiile de cohortă:",
  "options": [
   "Stabilesc un risc relativ",
   "Pot fi prospective sau retrospective",
   "Reprezintă standardul de aur pentru testarea medicamentelor",
   "Sunt dublu-orb pentru a evita erorile",
   "Constau în studiul unui număr mare de persoane la un moment dat"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Stabilesc un risc relativ — Corect: Riscul relativ este concluzia specifică studiilor de cohortă.\n\nPot fi prospective sau retrospective — Corect: Tabelul precizează variantele prospectivă și retrospectivă.\n\nReprezintă standardul de aur pentru testarea medicamentelor — Incorect: Standardul de aur pentru medicamente este trialul clinic randomizat.\n\nSunt dublu-orb pentru a evita erorile — Incorect: Designul dublu-orb caracterizează trialul randomizat.\n\nConstau în studiul unui număr mare de persoane la un moment dat — Incorect: Evaluarea unui număr mare de persoane la un moment dat definește studiul transversal.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 333, Studiile științifice — Tipuri de studii (pagini PDF: 111).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    333
   ],
   "pdfPages": [
    111
   ],
   "section": "Studiile științifice — Tipuri de studii"
  },
  "learningObjective": "Diferențierea studiului de cohortă de trialul randomizat și de studiul transversal.",
  "optionRationales": [
   "Riscul relativ este concluzia specifică studiilor de cohortă.",
   "Tabelul precizează variantele prospectivă și retrospectivă.",
   "Standardul de aur pentru medicamente este trialul clinic randomizat.",
   "Designul dublu-orb caracterizează trialul randomizat.",
   "Evaluarea unui număr mare de persoane la un moment dat definește studiul transversal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii preiau caracteristici definitorii ale altor două tipuri de studii din același tabel."
  },
  "textbookExpressions": [
   "Risc relativ",
   "prospective"
  ]
 },
 {
  "id": "epidemio-adv-003",
  "topicId": "epidemio",
  "type": "CS",
  "stem": "Eroarea de perioadă de latență în studiile de screening constă în:",
  "options": [
   "Testul de screening furnizează un diagnostic precoce, fără efect asupra duratei de supraviețuire, creând falsa impresie a creșterii supraviețuirii",
   "Testul detectează mai multe cazuri de boală lent progresive și omite cazurile rapid progresive",
   "Repartizarea nerandomizată a subiecților în grupurile de studiu",
   "Studiile care arată o diferență între grupuri au o probabilitate mai mare de a fi publicate",
   "Pacienții cu un anumit istoric medical sunt mai predispuși să participe la un studiu legat de boala lor"
  ],
  "correct": [
   0
  ],
  "explanation": "Testul de screening furnizează un diagnostic precoce, fără efect asupra duratei de supraviețuire, creând falsa impresie a creșterii supraviețuirii — Corect: Descrierea din Tabelul 15-2 pentru eroarea de perioadă de latență.\n\nTestul detectează mai multe cazuri de boală lent progresive și omite cazurile rapid progresive — Incorect: Aceasta este eroarea de durată.\n\nRepartizarea nerandomizată a subiecților în grupurile de studiu — Incorect: Aceasta este eroarea de înrolare (selecție).\n\nStudiile care arată o diferență între grupuri au o probabilitate mai mare de a fi publicate — Incorect: Aceasta este eroarea de publicare.\n\nPacienții cu un anumit istoric medical sunt mai predispuși să participe la un studiu legat de boala lor — Incorect: Aceasta este auto-selecția.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 334, Studiile științifice — Tipuri de erori (pagini PDF: 112).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    334
   ],
   "pdfPages": [
    112
   ],
   "section": "Studiile științifice — Tipuri de erori"
  },
  "learningObjective": "Identificarea erorii de perioadă de latență și diferențierea ei de celelalte erori din studiile clinice.",
  "optionRationales": [
   "Descrierea din Tabelul 15-2 pentru eroarea de perioadă de latență.",
   "Aceasta este eroarea de durată.",
   "Aceasta este eroarea de înrolare (selecție).",
   "Aceasta este eroarea de publicare.",
   "Aceasta este auto-selecția."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt celelalte erori tabelate, două dintre ele fiind tot erori de screening ușor confundabile."
  },
  "textbookExpressions": [
   "Perioada de latență",
   "Eficacitatea screeningului este exagerată"
  ]
 },
 {
  "id": "epidemio-adv-004",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Riscul relativ (RR):",
  "options": [
   "Se determină prin studii de cohortă",
   "O valoare mai mare decât 1 sugerează o relație pozitivă între expunere și boală",
   "O valoare egală cu 1 nu sugerează nicio relație între expunere și boală",
   "Se determină prin studii caz-control",
   "Este estimat cu precizie de raportul cotelor doar când prevalența bolii este ridicată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se determină prin studii de cohortă — Corect: Nota „De reținut” precizează că RR se determină prin studii de cohortă.\n\nO valoare mai mare decât 1 sugerează o relație pozitivă între expunere și boală — Corect: RR mai mare decât 1 indică relație pozitivă.\n\nO valoare egală cu 1 nu sugerează nicio relație între expunere și boală — Corect: RR egal cu 1 indică absența relației.\n\nSe determină prin studii caz-control — Incorect: Studiile caz-control generează raportul cotelor, nu RR.\n\nEste estimat cu precizie de raportul cotelor doar când prevalența bolii este ridicată — Incorect: OR estimează RR dacă prevalența este scăzută, nu ridicată.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 335, Biostatistică — Riscul bolii (pagini PDF: 113).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    335
   ],
   "pdfPages": [
    113
   ],
   "section": "Biostatistică — Riscul bolii"
  },
  "learningObjective": "Interpretarea valorilor riscului relativ și cunoașterea tipului de studiu care îl generează.",
  "optionRationales": [
   "Nota „De reținut” precizează că RR se determină prin studii de cohortă.",
   "RR mai mare decât 1 indică relație pozitivă.",
   "RR egal cu 1 indică absența relației.",
   "Studiile caz-control generează raportul cotelor, nu RR.",
   "OR estimează RR dacă prevalența este scăzută, nu ridicată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează tipul de studiu și condiția de prevalență pentru aproximarea RR prin OR."
  },
  "textbookExpressions": [
   "Riscul relativ se determină prin studii de cohortă",
   "prevalența este scăzută"
  ]
 },
 {
  "id": "epidemio-adv-005",
  "topicId": "epidemio",
  "type": "CS",
  "stem": "Numărul necesar pentru tratament (NNT) se calculează ca:",
  "options": [
   "1 / reducerea absolută a riscului",
   "Rata bolii la populația expusă minus rata bolii la populația neexpusă",
   "Sensibilitatea / (1 − specificitatea)",
   "Rata bolii în grupul martor minus rata bolii în grupul de intervenție",
   "(A + D) / (A + B + C + D)"
  ],
  "correct": [
   0
  ],
  "explanation": "1 / reducerea absolută a riscului — Corect: NNT = 1/RAR, conform textului.\n\nRata bolii la populația expusă minus rata bolii la populația neexpusă — Incorect: Aceasta este formula riscului atribuibil.\n\nSensibilitatea / (1 − specificitatea) — Incorect: Aceasta este rata de probabilitate pozitivă.\n\nRata bolii în grupul martor minus rata bolii în grupul de intervenție — Incorect: Aceasta este reducerea absolută a riscului, nu inversul ei.\n\n(A + D) / (A + B + C + D) — Incorect: Aceasta este formula acurateței.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 335, 336, Biostatistică — Riscul bolii (pagini PDF: 113, 114).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    335,
    336
   ],
   "pdfPages": [
    113,
    114
   ],
   "section": "Biostatistică — Riscul bolii"
  },
  "learningObjective": "Aplicarea formulei NNT și diferențierea ei de alți indicatori de risc și de performanță diagnostică.",
  "optionRationales": [
   "NNT = 1/RAR, conform textului.",
   "Aceasta este formula riscului atribuibil.",
   "Aceasta este rata de probabilitate pozitivă.",
   "Aceasta este reducerea absolută a riscului, nu inversul ei.",
   "Aceasta este formula acurateței."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt formule reale din același capitol, inclusiv chiar RAR din care derivă NNT."
  },
  "textbookExpressions": [
   "NNT",
   "Reducerea absolută a riscului"
  ]
 },
 {
  "id": "epidemio-adv-006",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Sensibilitatea și specificitatea unui test de diagnostic:",
  "options": [
   "Sensibilitatea este probabilitatea ca testul să fie pozitiv la pacienții care au boala",
   "Rezultatele fals-negative se aproximează prin (1 − sensibilitatea)",
   "Testele de confirmare acceptabile au de obicei specificitatea peste 85%",
   "Testele de screening acceptabile au de obicei sensibilitatea sub 50%",
   "Rezultatele fals-pozitive se aproximează prin (1 − sensibilitatea)"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sensibilitatea este probabilitatea ca testul să fie pozitiv la pacienții care au boala — Corect: Definiția sensibilității din text.\n\nRezultatele fals-negative se aproximează prin (1 − sensibilitatea) — Corect: Fals-negativele sunt aproximate prin 1 − sensibilitatea.\n\nTestele de confirmare acceptabile au de obicei specificitatea peste 85% — Corect: Pragul de peste 85% pentru testele de confirmare este citat.\n\nTestele de screening acceptabile au de obicei sensibilitatea sub 50% — Incorect: Testele de screening acceptabile au sensibilitatea peste 80%.\n\nRezultatele fals-pozitive se aproximează prin (1 − sensibilitatea) — Incorect: Fals-pozitivele se aproximează prin 1 − specificitatea.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 335, Biostatistică — Statistica testelor de diagnostic (pagini PDF: 113).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    335
   ],
   "pdfPages": [
    113
   ],
   "section": "Biostatistică — Statistica testelor de diagnostic"
  },
  "learningObjective": "Definirea sensibilității și specificității și aplicarea pragurilor uzuale pentru screening și confirmare.",
  "optionRationales": [
   "Definiția sensibilității din text.",
   "Fals-negativele sunt aproximate prin 1 − sensibilitatea.",
   "Pragul de peste 85% pentru testele de confirmare este citat.",
   "Testele de screening acceptabile au sensibilitatea peste 80%.",
   "Fals-pozitivele se aproximează prin 1 − specificitatea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează pragurile și formula complementară pentru fals-pozitive."
  },
  "textbookExpressions": [
   "sensibilitatea >80%",
   "specificitatea >85%"
  ]
 },
 {
  "id": "epidemio-adv-007",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte privind semnificația statistică și erorile de interpretare:",
  "options": [
   "Eroarea de tip I constă în respingerea ipotezei nule, deși aceasta este adevărată",
   "Eroarea de tip II constă în nerespingerea ipotezei nule, deși aceasta este falsă",
   "Valoarea p reprezintă șansa unei erori de tip I pentru un anumit rezultat",
   "Riscul erorilor de tip I și II crește odată cu creșterea dimensiunii eșantionului",
   "Studiile cu putere insuficientă predispun la erori de tip I"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Eroarea de tip I constă în respingerea ipotezei nule, deși aceasta este adevărată — Corect: Definiția erorii de tip I (fals-pozitivă).\n\nEroarea de tip II constă în nerespingerea ipotezei nule, deși aceasta este falsă — Corect: Definiția erorii de tip II (fals-negativă).\n\nValoarea p reprezintă șansa unei erori de tip I pentru un anumit rezultat — Corect: Valoarea p este definită ca șansa erorii de tip I.\n\nRiscul erorilor de tip I și II crește odată cu creșterea dimensiunii eșantionului — Incorect: Riscul acestor erori scade cu creșterea eșantionului.\n\nStudiile cu putere insuficientă predispun la erori de tip I — Incorect: Puterea insuficientă predispune la erori de tip II.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 336, Biostatistică — Tipuri de erori și semnificația statistică (pagini PDF: 114).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    336
   ],
   "pdfPages": [
    114
   ],
   "section": "Biostatistică — Tipuri de erori și semnificația statistică"
  },
  "learningObjective": "Diferențierea erorilor de tip I și II și interpretarea valorii p și a puterii studiului.",
  "optionRationales": [
   "Definiția erorii de tip I (fals-pozitivă).",
   "Definiția erorii de tip II (fals-negativă).",
   "Valoarea p este definită ca șansa erorii de tip I.",
   "Riscul acestor erori scade cu creșterea eșantionului.",
   "Puterea insuficientă predispune la erori de tip II."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează sensul relației cu dimensiunea eșantionului și tipul de eroare legat de putere."
  },
  "textbookExpressions": [
   "Eroarea de tip I",
   "Puterea unui studiu"
  ]
 },
 {
  "id": "epidemio-adv-008",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Confidențialitatea medicală nu este obligatorie atunci când pacientul:",
  "options": [
   "Are o boală raportabilă din punct de vedere legal",
   "Se consideră că ar avea tendințe suicidale sau criminale",
   "A suferit o rană penetrantă în urma unui atac",
   "Este un adolescent care solicită tratament pentru o boală cu transmitere sexuală",
   "Are o familie care solicită informații fără acordul său"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Are o boală raportabilă din punct de vedere legal — Corect: Bolile raportabile legal sunt o excepție explicită.\n\nSe consideră că ar avea tendințe suicidale sau criminale — Corect: Tendințele suicidale sau criminale sunt o excepție explicită.\n\nA suferit o rană penetrantă în urma unui atac — Corect: Rănile penetrante prin atac sunt o excepție explicită.\n\nEste un adolescent care solicită tratament pentru o boală cu transmitere sexuală — Incorect: Confidențialitatea trebuie păstrată la adolescenți pentru BTS, contracepție și sarcină.\n\nAre o familie care solicită informații fără acordul său — Incorect: Informațiile se împart familiei doar dacă pacientul permite.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 337, Etică — Drepturile pacientului: confidențialitatea (pagini PDF: 115).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    337
   ],
   "pdfPages": [
    115
   ],
   "section": "Etică — Drepturile pacientului: confidențialitatea"
  },
  "learningObjective": "Aplicarea excepțiilor legitime de la confidențialitate și recunoașterea situațiilor în care aceasta se păstrează.",
  "optionRationales": [
   "Bolile raportabile legal sunt o excepție explicită.",
   "Tendințele suicidale sau criminale sunt o excepție explicită.",
   "Rănile penetrante prin atac sunt o excepție explicită.",
   "Confidențialitatea trebuie păstrată la adolescenți pentru BTS, contracepție și sarcină.",
   "Informațiile se împart familiei doar dacă pacientul permite."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii testează două situații în care intuiția contrazice regula: adolescentul cu BTS și solicitarea familiei."
  },
  "textbookExpressions": [
   "Confidențialitatea nu este obligatorie",
   "adolescenților"
  ]
 },
 {
  "id": "epidemio-adv-009",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Pentru a fi considerat competent să ia decizii medicale, un pacient trebuie:",
  "options": [
   "Să nu fie diagnosticat în prezent cu psihoză sau intoxicație",
   "Să înțeleagă situația sa medicală",
   "Să fie capabil să ia decizii în acord cu valorile sale anterioare",
   "Să aibă acordul familiei pentru deciziile luate",
   "Să nu se răzgândească după acceptarea inițială a terapiei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Să nu fie diagnosticat în prezent cu psihoză sau intoxicație — Corect: Absența psihozei sau intoxicației este primul criteriu.\n\nSă înțeleagă situația sa medicală — Corect: Înțelegerea situației medicale este al doilea criteriu.\n\nSă fie capabil să ia decizii în acord cu valorile sale anterioare — Corect: Concordanța cu valorile anterioare este al treilea criteriu.\n\nSă aibă acordul familiei pentru deciziile luate — Incorect: Acordul familiei nu este un criteriu de competență.\n\nSă nu se răzgândească după acceptarea inițială a terapiei — Incorect: Un pacient competent poate să se răzgândească în orice moment.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 337, Etică — Luarea deciziei de către pacient: competența (pagini PDF: 115).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    337
   ],
   "pdfPages": [
    115
   ],
   "section": "Etică — Luarea deciziei de către pacient: competența"
  },
  "learningObjective": "Aplicarea celor trei criterii de competență decizională și a dreptului pacientului de a-și schimba decizia.",
  "optionRationales": [
   "Absența psihozei sau intoxicației este primul criteriu.",
   "Înțelegerea situației medicale este al doilea criteriu.",
   "Concordanța cu valorile anterioare este al treilea criteriu.",
   "Acordul familiei nu este un criteriu de competență.",
   "Un pacient competent poate să se răzgândească în orice moment."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii adaugă condiții false care contrazic autonomia pacientului competent."
  },
  "textbookExpressions": [
   "Competența",
   "se răzgândească"
  ]
 },
 {
  "id": "epidemio-adv-010",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Criteriile morții cerebrale includ:",
  "options": [
   "Absența reflexelor de trunchi cerebral (faringian, cornean, calorice)",
   "Apneea la decuplarea de ventilator pentru o durată suficientă pentru a produce o conducere normală hipercarbică",
   "Absența hipotermiei sau intoxicației",
   "Absența activității pe EEG definește singură moartea cerebrală",
   "Absența ireversibilă a activității întregului creier cu durată de peste 6 ore"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Absența reflexelor de trunchi cerebral (faringian, cornean, calorice) — Corect: Absența reflexelor de trunchi este criteriul (1).\n\nApneea la decuplarea de ventilator pentru o durată suficientă pentru a produce o conducere normală hipercarbică — Corect: Testul de apnee este criteriul (2).\n\nAbsența hipotermiei sau intoxicației — Corect: Absența hipotermiei sau intoxicației este criteriul (5).\n\nAbsența activității pe EEG definește singură moartea cerebrală — Incorect: Nota „De reținut” precizează că absența activității EEG nu definește moartea cerebrală, ci doar ajută analiza.\n\nAbsența ireversibilă a activității întregului creier cu durată de peste 6 ore — Corect: Definiția cere absența ireversibilă a activității întregului creier peste 6 ore.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 338, Etică — Probleme legate de sfârșitul vieții: moartea (pagini PDF: 116).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    338
   ],
   "pdfPages": [
    116
   ],
   "section": "Etică — Probleme legate de sfârșitul vieții: moartea"
  },
  "learningObjective": "Aplicarea criteriilor de moarte cerebrală și recunoașterea limitelor EEG-ului.",
  "optionRationales": [
   "Absența reflexelor de trunchi este criteriul (1).",
   "Testul de apnee este criteriul (2).",
   "Absența hipotermiei sau intoxicației este criteriul (5).",
   "Nota „De reținut” precizează că absența activității EEG nu definește moartea cerebrală, ci doar ajută analiza.",
   "Definiția cere absența ireversibilă a activității întregului creier peste 6 ore."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul supraevaluează EEG-ul, exact punctul pe care textul îl nuanțează explicit."
  },
  "textbookExpressions": [
   "Moartea cerebrală",
   ">6 ore"
  ]
 },
 {
  "id": "epidemio-adv-011",
  "topicId": "epidemio",
  "type": "CS",
  "stem": "Eutanasia este definită ca:",
  "options": [
   "Administrarea activă de către medic a unui agent letal unui pacient pentru a pune capăt suferinței",
   "Furnizarea de către medic a unui mijloc prin care pacientul își încheie singur viața",
   "Retragerea măsurilor de suport vital la cererea unui pacient competent",
   "Emiterea unui ordin de neresuscitare la cererea pacientului",
   "Neinițierea terapiilor considerate iraționale pentru starea curentă a pacientului"
  ],
  "correct": [
   0
  ],
  "explanation": "Administrarea activă de către medic a unui agent letal unui pacient pentru a pune capăt suferinței — Corect: Definiția eutanasiei din text: administrarea activă a unui agent letal.\n\nFurnizarea de către medic a unui mijloc prin care pacientul își încheie singur viața — Incorect: Aceasta este sinuciderea asistată de medic.\n\nRetragerea măsurilor de suport vital la cererea unui pacient competent — Incorect: Retragerea suportului vital la cererea unui pacient competent este un drept al pacientului.\n\nEmiterea unui ordin de neresuscitare la cererea pacientului — Incorect: Ordinul DNR este o directivă în avans, nu eutanasie.\n\nNeinițierea terapiilor considerate iraționale pentru starea curentă a pacientului — Incorect: Medicii nu sunt obligați să furnizeze terapii iraționale; aceasta nu este eutanasie.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 338, Etică — Decesul asistat medical (pagini PDF: 116).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    338
   ],
   "pdfPages": [
    116
   ],
   "section": "Etică — Decesul asistat medical"
  },
  "learningObjective": "Diferențierea eutanasiei de sinuciderea asistată, de retragerea suportului vital și de limitarea terapeutică.",
  "optionRationales": [
   "Definiția eutanasiei din text: administrarea activă a unui agent letal.",
   "Aceasta este sinuciderea asistată de medic.",
   "Retragerea suportului vital la cererea unui pacient competent este un drept al pacientului.",
   "Ordinul DNR este o directivă în avans, nu eutanasie.",
   "Medicii nu sunt obligați să furnizeze terapii iraționale; aceasta nu este eutanasie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt practici legitime de la sfârșitul vieții, frecvent confundate cu eutanasia."
  },
  "textbookExpressions": [
   "Eutanasia",
   "Sinuciderea asistată de medic"
  ]
 },
 {
  "id": "epidemio-adv-012",
  "topicId": "epidemio",
  "type": "CS",
  "stem": "Incidența unei boli se definește ca:",
  "options": [
   "Numărul de cazuri noi apărute într-o perioadă dată, raportat la populația totală la risc",
   "Numărul de persoane care au afecțiunea într-o perioadă dată, raportat la populația totală",
   "Procentul de bolnavi care decedează într-o perioadă dată",
   "1 / reducerea absolută a riscului",
   "Sensibilitatea împărțită la (1 − specificitate)"
  ],
  "correct": [
   0
  ],
  "explanation": "Numărul de cazuri noi apărute într-o perioadă dată, raportat la populația totală la risc — Corect: Definiția cu cazuri noi peste populația la risc este explicită.\n\nNumărul de persoane care au afecțiunea într-o perioadă dată, raportat la populația totală — Incorect: Aceasta este prevalența.\n\nProcentul de bolnavi care decedează într-o perioadă dată — Incorect: Aceasta este rata de fatalitate a cazurilor.\n\n1 / reducerea absolută a riscului — Incorect: Aceasta este formula NNT.\n\nSensibilitatea împărțită la (1 − specificitate) — Incorect: Aceasta este rata de probabilitate pozitivă.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 334, Biostatistică — Rate de morbiditate (pagini PDF: 112).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    334
   ],
   "pdfPages": [
    112
   ],
   "section": "Biostatistică — Rate de morbiditate"
  },
  "learningObjective": "Diferențierea incidenței (cazuri noi) de prevalență, de rata de fatalitate, de NNT și de rata de probabilitate pozitivă.",
  "optionRationales": [
   "Definiția cu cazuri noi peste populația la risc este explicită.",
   "Aceasta este prevalența.",
   "Aceasta este rata de fatalitate a cazurilor.",
   "Aceasta este formula NNT.",
   "Aceasta este rata de probabilitate pozitivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate distractoarele sunt indicatori reali din același capitol de biostatistică, cu formule alăturate."
  },
  "textbookExpressions": [
   "cazuri noi",
   "populaţia totală la risc"
  ]
 },
 {
  "id": "epidemio-adv-013",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Trialul clinic randomizat:",
  "options": [
   "Compară prospectiv tratamentul experimental cu placebo și cu terapiile existente",
   "Este dublu-orb pentru a evita erorile și alocă randomizat pacienții",
   "Este descris ca standardul de aur pentru testarea medicamentelor",
   "Permite calcularea doar a raportului cotelor, nu a eficacității",
   "Constă în examinarea unui număr mare de persoane la un singur moment, pentru prevalență"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Compară prospectiv tratamentul experimental cu placebo și cu terapiile existente — Corect: Comparația prospectivă experimental versus placebo/terapii existente este din tabel.\n\nEste dublu-orb pentru a evita erorile și alocă randomizat pacienții — Corect: Dublu-orb și alocarea randomizată sunt explicite.\n\nEste descris ca standardul de aur pentru testarea medicamentelor — Corect: Standardul de aur pentru medicamente este citat.\n\nPermite calcularea doar a raportului cotelor, nu a eficacității — Incorect: Raportul cotelor este concluzia studiilor caz-control.\n\nConstă în examinarea unui număr mare de persoane la un singur moment, pentru prevalență — Incorect: Evaluarea la un moment dat definește studiul transversal.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 333, Studiile științifice — Trialul clinic randomizat (pagini PDF: 111).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    333
   ],
   "pdfPages": [
    111
   ],
   "section": "Studiile științifice — Trialul clinic randomizat"
  },
  "learningObjective": "Recunoașterea designului prospectiv, randomizat, dublu-orb, ca standard de aur, distinct de caz-control și transversal.",
  "optionRationales": [
   "Comparația prospectivă experimental versus placebo/terapii existente este din tabel.",
   "Dublu-orb și alocarea randomizată sunt explicite.",
   "Standardul de aur pentru medicamente este citat.",
   "Raportul cotelor este concluzia studiilor caz-control.",
   "Evaluarea la un moment dat definește studiul transversal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie RCT concluzia caz-control și designul transversal din același tabel."
  },
  "textbookExpressions": [
   "Standard de aur",
   "Dublu-orb"
  ]
 },
 {
  "id": "epidemio-adv-014",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Valoarea predictivă a unui test de screening:",
  "options": [
   "Prevalența ridicată se asociază cu o valoare predictivă pozitivă ridicată",
   "Prevalența scăzută se asociază cu o valoare predictivă negativă ridicată",
   "VPP este probabilitatea ca un pacient cu test pozitiv să aibă boala",
   "Prevalența ridicată scade VPP și crește VPN, independent de sensibilitate",
   "Ratele de probabilitate depind de prevalență la fel ca VPP"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Prevalența ridicată se asociază cu o valoare predictivă pozitivă ridicată — Corect: Nota leagă prevalența ridicată de VPP ridicată.\n\nPrevalența scăzută se asociază cu o valoare predictivă negativă ridicată — Corect: Prevalența scăzută se leagă de VPN ridicată.\n\nVPP este probabilitatea ca un pacient cu test pozitiv să aibă boala — Corect: VPP = A/(A+B) este probabilitatea bolii la testul pozitiv.\n\nPrevalența ridicată scade VPP și crește VPN, independent de sensibilitate — Incorect: Direcția este inversată față de notă.\n\nRatele de probabilitate depind de prevalență la fel ca VPP — Incorect: Textul precizează că ratele de probabilitate elimină dependența de prevalență.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 336, Biostatistică — Valori predictive (pagini PDF: 114).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    336
   ],
   "pdfPages": [
    114
   ],
   "section": "Biostatistică — Valori predictive"
  },
  "learningObjective": "Corelarea prevalenței înalte cu VPP înalt și a prevalenței joase cu VPN înalt, plus definiția VPP.",
  "optionRationales": [
   "Nota leagă prevalența ridicată de VPP ridicată.",
   "Prevalența scăzută se leagă de VPN ridicată.",
   "VPP = A/(A+B) este probabilitatea bolii la testul pozitiv.",
   "Direcția este inversată față de notă.",
   "Textul precizează că ratele de probabilitate elimină dependența de prevalență."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează relația prevalență–VPP/VPN și reintroduc dependența de prevalență la likelihood ratios."
  },
  "textbookExpressions": [
   "Prevalenţa ridicată",
   "valoare predictivă pozitivă"
  ]
 },
 {
  "id": "epidemio-adv-015",
  "topicId": "epidemio",
  "type": "CS",
  "stem": "Prevalența unei boli se definește ca:",
  "options": [
   "Numărul de persoane cu o anumită afecțiune într-o perioadă dată, raportat la populația totală",
   "Numărul de cazuri noi apărute într-o perioadă dată, raportat la populația totală la risc",
   "Procentul de bolnavi care decedează într-o perioadă dată",
   "1 / reducerea absolută a riscului",
   "Sensibilitatea împărțită la (1 − specificitate)"
  ],
  "correct": [
   0
  ],
  "explanation": "Numărul de persoane cu o anumită afecțiune într-o perioadă dată, raportat la populația totală — Corect: Definiția cu cazurile existente peste populația totală este explicită.\n\nNumărul de cazuri noi apărute într-o perioadă dată, raportat la populația totală la risc — Incorect: Aceasta este incidența.\n\nProcentul de bolnavi care decedează într-o perioadă dată — Incorect: Aceasta este rata de fatalitate a cazurilor.\n\n1 / reducerea absolută a riscului — Incorect: Aceasta este formula NNT.\n\nSensibilitatea împărțită la (1 − specificitate) — Incorect: Aceasta este rata de probabilitate pozitivă.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 334, Biostatistică — Rate de morbiditate (pagini PDF: 112).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    334
   ],
   "pdfPages": [
    112
   ],
   "section": "Biostatistică — Rate de morbiditate"
  },
  "learningObjective": "Diferențierea prevalenței (cazuri existente) de incidență, de rata de fatalitate, de NNT și de rata de probabilitate pozitivă.",
  "optionRationales": [
   "Definiția cu cazurile existente peste populația totală este explicită.",
   "Aceasta este incidența.",
   "Aceasta este rata de fatalitate a cazurilor.",
   "Aceasta este formula NNT.",
   "Aceasta este rata de probabilitate pozitivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate distractoarele sunt indicatori reali din același capitol, cu formule alăturate."
  },
  "textbookExpressions": [
   "Prevalenţa",
   "populaţia totală"
  ]
 },
 {
  "id": "epidemio-adv-016",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Studiul transversal și meta-analiza, conform tabelului 15-1:",
  "options": [
   "Studiul transversal evaluează expunerea și prevalența bolii la un număr mare de persoane, la un singur moment",
   "Meta-analiza combină mai multe studii care examinează o anumită boală sau expunere",
   "Seria de cazuri poate fi ușor de realizat și generează ipoteze, dar nu poate fi folosită pentru testarea ipotezelor",
   "Studiul transversal determină incidența și este standardul de aur pentru testarea medicamentelor",
   "Meta-analiza elimină factorii limitativi din studiile originale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Studiul transversal evaluează expunerea și prevalența bolii la un număr mare de persoane, la un singur moment — Corect: Evaluarea la un moment dat pentru prevalență este din tabel.\n\nMeta-analiza combină mai multe studii care examinează o anumită boală sau expunere — Corect: Combinarea studiilor este definiția meta-analizei.\n\nSeria de cazuri poate fi ușor de realizat și generează ipoteze, dar nu poate fi folosită pentru testarea ipotezelor — Corect: Ușurința și incapacitatea de a testa ipoteze sunt ale seriei de cazuri.\n\nStudiul transversal determină incidența și este standardul de aur pentru testarea medicamentelor — Incorect: Incidența nu se obține transversal; standardul de aur este trialul randomizat.\n\nMeta-analiza elimină factorii limitativi din studiile originale — Incorect: Tabelul precizează că meta-analiza este incapabilă să elimine factorii limitativi din studiile originale.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 333, Studiile științifice — Transversal, serie de cazuri, meta-analiză (pagini PDF: 111).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    333
   ],
   "pdfPages": [
    111
   ],
   "section": "Studiile științifice — Transversal, serie de cazuri, meta-analiză"
  },
  "learningObjective": "Recunoașterea designului transversal (prevalență, un moment) și a limitei meta-analizei de a nu putea elimina defectele studiilor sursă.",
  "optionRationales": [
   "Evaluarea la un moment dat pentru prevalență este din tabel.",
   "Combinarea studiilor este definiția meta-analizei.",
   "Ușurința și incapacitatea de a testa ipoteze sunt ale seriei de cazuri.",
   "Incidența nu se obține transversal; standardul de aur este trialul randomizat.",
   "Tabelul precizează că meta-analiza este incapabilă să elimine factorii limitativi din studiile originale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie transversalului incidența/RCT și neagă limita explicită a meta-analizei."
  },
  "textbookExpressions": [
   "Studiul transversal",
   "Meta-analiza"
  ]
 },
 {
  "id": "epidemio-adv-017",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Eroarea de durată (length-time) în screening și eroarea de publicare:",
  "options": [
   "Eroarea de durată: testul detectează mai multe cazuri lent progresive și omite cazurile rapid progresive, exagerând eficacitatea screeningului",
   "Eroarea de publicare: studiile care arată o diferență între grupuri au o probabilitate mai mare de a fi publicate decât cele fără diferență",
   "Eroarea de durată este identică erorii de perioadă de latență, fără efect asupra cazurilor lente",
   "Eroarea de publicare favorizează studiile care susțin ipoteza nulă",
   "Auto-selecția înseamnă interpretarea subiectivă a datelor de către investigator"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Eroarea de durată: testul detectează mai multe cazuri lent progresive și omite cazurile rapid progresive, exagerând eficacitatea screeningului — Corect: Descrierea și consecința (eficacitate exagerată) sunt din tabelul 15-2.\n\nEroarea de publicare: studiile care arată o diferență între grupuri au o probabilitate mai mare de a fi publicate decât cele fără diferență — Corect: Probabilitatea mai mare de publicare a studiilor pozitive este explicită.\n\nEroarea de durată este identică erorii de perioadă de latență, fără efect asupra cazurilor lente — Incorect: Perioada de latență este un rând separat: diagnostic precoce fără câștig de supraviețuire.\n\nEroarea de publicare favorizează studiile care susțin ipoteza nulă — Incorect: Datele disponibile pentru meta-analiză pot omite tocmai studiile care susțin ipoteza nulă.\n\nAuto-selecția înseamnă interpretarea subiectivă a datelor de către investigator — Incorect: Interpretarea subiectivă de către investigator este eroarea de investigație, nu auto-selecția.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 334, Studiile științifice — Erori de durată și de publicare (pagini PDF: 112).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    334
   ],
   "pdfPages": [
    112
   ],
   "section": "Studiile științifice — Erori de durată și de publicare"
  },
  "learningObjective": "Separarea length-time bias de lead-time, de publicare și de eroarea de investigație.",
  "optionRationales": [
   "Descrierea și consecința (eficacitate exagerată) sunt din tabelul 15-2.",
   "Probabilitatea mai mare de publicare a studiilor pozitive este explicită.",
   "Perioada de latență este un rând separat: diagnostic precoce fără câștig de supraviețuire.",
   "Datele disponibile pentru meta-analiză pot omite tocmai studiile care susțin ipoteza nulă.",
   "Interpretarea subiectivă de către investigator este eroarea de investigație, nu auto-selecția."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă length-time cu lead-time și inversează direcția bias-ului de publicare."
  },
  "textbookExpressions": [
   "Durata",
   "De publicare"
  ]
 },
 {
  "id": "epidemio-adv-018",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Raportul cotelor și riscul atribuibil:",
  "options": [
   "Raportul cotelor se determină prin studii caz-control și estimează riscul relativ dacă prevalența este scăzută",
   "Riscul atribuibil este diferența dintre rata bolii la populația expusă și rata la populația neexpusă",
   "OR dă estimarea cea mai precisă a riscului relativ în cazurile de boli rare",
   "Raportul cotelor se determină prin studii de cohortă, identic riscului relativ",
   "Riscul atribuibil este 1 / reducerea absolută a riscului, identic NNT"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Raportul cotelor se determină prin studii caz-control și estimează riscul relativ dacă prevalența este scăzută — Corect: Nota leagă OR de caz-control și de prevalența scăzută.\n\nRiscul atribuibil este diferența dintre rata bolii la populația expusă și rata la populația neexpusă — Corect: Formula RA = rată expuși − rată neexpuși este explicită.\n\nOR dă estimarea cea mai precisă a riscului relativ în cazurile de boli rare — Corect: Nota precizează estimarea cea mai precisă a RR de către OR în bolile rare.\n\nRaportul cotelor se determină prin studii de cohortă, identic riscului relativ — Incorect: Studiile de cohortă determină riscul relativ, nu OR.\n\nRiscul atribuibil este 1 / reducerea absolută a riscului, identic NNT — Incorect: 1/RAR este NNT, nu riscul atribuibil.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 335, Biostatistică — Raportul cotelor și riscul atribuibil (pagini PDF: 113).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    335
   ],
   "pdfPages": [
    113
   ],
   "section": "Biostatistică — Raportul cotelor și riscul atribuibil"
  },
  "learningObjective": "Corelarea OR cu studiul caz-control și cu bolile rare, plus formula diferenței a riscului atribuibil.",
  "optionRationales": [
   "Nota leagă OR de caz-control și de prevalența scăzută.",
   "Formula RA = rată expuși − rată neexpuși este explicită.",
   "Nota precizează estimarea cea mai precisă a RR de către OR în bolile rare.",
   "Studiile de cohortă determină riscul relativ, nu OR.",
   "1/RAR este NNT, nu riscul atribuibil."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează tipul de studiu al OR și substituie NNT formulei riscului atribuibil."
  },
  "textbookExpressions": [
   "Raportul cotelor",
   "Riscul atribuibil"
  ]
 },
 {
  "id": "epidemio-adv-019",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Ratele de probabilitate și acuratețea unui test:",
  "options": [
   "Rata de probabilitate pozitivă este sensibilitatea / (1 − specificitatea)",
   "Rata de probabilitate negativă este (1 − sensibilitatea) / specificitatea",
   "Ratele de probabilitate elimină dependența de prevalența bolii",
   "Acuratețea este (A + D) / (A + B + C + D), luând în considerare numai rezultatele reale",
   "Ratele de probabilitate depind de prevalență la fel ca valoarea predictivă pozitivă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Rata de probabilitate pozitivă este sensibilitatea / (1 − specificitatea) — Corect: Formula RPP este explicită.\n\nRata de probabilitate negativă este (1 − sensibilitatea) / specificitatea — Corect: Formula RPN este explicită.\n\nRatele de probabilitate elimină dependența de prevalența bolii — Corect: Textul precizează eliminarea dependenței de prevalență.\n\nAcuratețea este (A + D) / (A + B + C + D), luând în considerare numai rezultatele reale — Corect: Formula acurateței cu (A+D)/total este citată.\n\nRatele de probabilitate depind de prevalență la fel ca valoarea predictivă pozitivă — Incorect: Independența de prevalență este tocmai avantajul față de VPP.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 336, Biostatistică — Rate de probabilitate și acuratețe (pagini PDF: 114).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    336
   ],
   "pdfPages": [
    114
   ],
   "section": "Biostatistică — Rate de probabilitate și acuratețe"
  },
  "learningObjective": "Aplicarea formulelor RPP/RPN și a acurateței, plus independența likelihood ratio față de prevalență.",
  "optionRationales": [
   "Formula RPP este explicită.",
   "Formula RPN este explicită.",
   "Textul precizează eliminarea dependenței de prevalență.",
   "Formula acurateței cu (A+D)/total este citată.",
   "Independența de prevalență este tocmai avantajul față de VPP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul reintroduce dependența de prevalență, pe care textul o elimină explicit la likelihood ratios."
  },
  "textbookExpressions": [
   "Rata de probabilitate pozitivă",
   "Acurateţea"
  ]
 },
 {
  "id": "epidemio-adv-020",
  "topicId": "epidemio",
  "type": "CS",
  "stem": "Rata de fatalitate a cazurilor se definește ca:",
  "options": [
   "Procentul de persoane cu o anumită boală care decedează într-o anumită perioadă, adică decese în interval raportate la numărul de cazuri de boală din acel interval",
   "Numărul de cazuri noi dintr-o perioadă, raportat la populația totală la risc",
   "Numărul de persoane cu afecțiunea într-o perioadă, raportat la populația totală",
   "1 / reducerea absolută a riscului",
   "Sensibilitatea împărțită la (1 − specificitate)"
  ],
  "correct": [
   0
  ],
  "explanation": "Procentul de persoane cu o anumită boală care decedează într-o anumită perioadă, adică decese în interval raportate la numărul de cazuri de boală din acel interval — Corect: Formula decese peste cazuri de boală în aceeași perioadă este explicită.\n\nNumărul de cazuri noi dintr-o perioadă, raportat la populația totală la risc — Incorect: Aceasta este incidența.\n\nNumărul de persoane cu afecțiunea într-o perioadă, raportat la populația totală — Incorect: Aceasta este prevalența.\n\n1 / reducerea absolută a riscului — Incorect: Aceasta este formula NNT.\n\nSensibilitatea împărțită la (1 − specificitate) — Incorect: Aceasta este rata de probabilitate pozitivă.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 334, Biostatistică — Rata de fatalitate (pagini PDF: 112).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    334
   ],
   "pdfPages": [
    112
   ],
   "section": "Biostatistică — Rata de fatalitate"
  },
  "learningObjective": "Diferențierea ratei de fatalitate (decese/cazuri) de incidență, prevalență, NNT și rata de probabilitate pozitivă.",
  "optionRationales": [
   "Formula decese peste cazuri de boală în aceeași perioadă este explicită.",
   "Aceasta este incidența.",
   "Aceasta este prevalența.",
   "Aceasta este formula NNT.",
   "Aceasta este rata de probabilitate pozitivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate distractoarele sunt indicatori reali din același capitol, cu formule alăturate."
  },
  "textbookExpressions": [
   "Rata de fatalitate",
   "cazuri de boală"
  ]
 },
 {
  "id": "epidemio-adv-021",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Cerințele unui studiu științific, conform textului introductiv:",
  "options": [
   "Subiecții trebuie să fie reprezentativi pentru populația vizată și suficient de numeroși pentru semnificație statistică",
   "Consimțământul informat este necesar, cu excepția cazurilor special aprobate de IRB (de exemplu pacienți cu traumatisme)",
   "Erorile de investigație și observaționale pot fi evitate printr-un studiu dublu-orb; interesele pacientului au prioritate față de cele ale studiului",
   "Studiul transversal determină incidența și este standardul de aur pentru testarea medicamentelor",
   "Meta-analiza elimină factorii limitativi din studiile originale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Subiecții trebuie să fie reprezentativi pentru populația vizată și suficient de numeroși pentru semnificație statistică — Corect: Reprezentativitatea și dimensiunea eșantionului sunt punctele 1-2.\n\nConsimțământul informat este necesar, cu excepția cazurilor special aprobate de IRB (de exemplu pacienți cu traumatisme) — Corect: Excepția IRB pentru traumatisme este explicită.\n\nErorile de investigație și observaționale pot fi evitate printr-un studiu dublu-orb; interesele pacientului au prioritate față de cele ale studiului — Corect: Nota leagă dublu-orbul de erorile de investigație/observație; prioritatea interesului pacientului este punctul 5.\n\nStudiul transversal determină incidența și este standardul de aur pentru testarea medicamentelor — Incorect: Incidența și standardul de aur aparțin cohortelor, respectiv trialului randomizat.\n\nMeta-analiza elimină factorii limitativi din studiile originale — Incorect: Tabelul precizează că meta-analiza nu poate elimina limitările studiilor originale.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 333, Studiile științifice — Condiții de validitate (pagini PDF: 111).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    333
   ],
   "pdfPages": [
    111
   ],
   "section": "Studiile științifice — Condiții de validitate"
  },
  "learningObjective": "Asamblarea reprezentativității, a excepției IRB și a dublu-orbului ca protecție față de erorile de investigație/observație.",
  "optionRationales": [
   "Reprezentativitatea și dimensiunea eșantionului sunt punctele 1-2.",
   "Excepția IRB pentru traumatisme este explicită.",
   "Nota leagă dublu-orbul de erorile de investigație/observație; prioritatea interesului pacientului este punctul 5.",
   "Incidența și standardul de aur aparțin cohortelor, respectiv trialului randomizat.",
   "Tabelul precizează că meta-analiza nu poate elimina limitările studiilor originale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie transversalului aurul RCT și neagă limita explicită a meta-analizei."
  },
  "textbookExpressions": [
   "consimţământul informat",
   "dublu-orb"
  ]
 },
 {
  "id": "epidemio-adv-022",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Eroarea de memorie și auto-selecția, conform tabelului 15-2:",
  "options": [
   "Eroarea de memorie: confuzia cu experiențe anterioare; pacienții cu experiențe negative își amintesc mai degrabă detaliile negative",
   "Auto-selecția: pacienții cu un anumit istoric medical sunt mai predispuși să participe la un studiu legat de boala lor, deci nu sunt reprezentativi și introduc variabile de confuzie",
   "Eroarea de memorie este identică erorii de durată, care omite cazurile lent progresive",
   "Auto-selecția înseamnă interpretarea subiectivă a datelor de către investigator",
   "Variabilele de confuzie afectează doar grupul experimental, nu și martorii"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Eroarea de memorie: confuzia cu experiențe anterioare; pacienții cu experiențe negative își amintesc mai degrabă detaliile negative — Corect: Descrierea și consecința (detalii negative) sunt din tabel.\n\nAuto-selecția: pacienții cu un anumit istoric medical sunt mai predispuși să participe la un studiu legat de boala lor, deci nu sunt reprezentativi și introduc variabile de confuzie — Corect: Predispoziția de a participa și introducerea confuziei sunt explicite.\n\nEroarea de memorie este identică erorii de durată, care omite cazurile lent progresive — Incorect: Eroarea de durată detectează cazuri lente și omite cazurile rapide, opusul enunțului.\n\nAuto-selecția înseamnă interpretarea subiectivă a datelor de către investigator — Incorect: Interpretarea subiectivă de către investigator este eroarea de investigație.\n\nVariabilele de confuzie afectează doar grupul experimental, nu și martorii — Incorect: Textul definește confuzia ca factori care afectează atât grupurile experimentale, cât și pe cele de control.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 334, Studiile științifice — Memorie și auto-selecție (pagini PDF: 112).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    334
   ],
   "pdfPages": [
    112
   ],
   "section": "Studiile științifice — Memorie și auto-selecție"
  },
  "learningObjective": "Separarea bias-ului de memorie (detalii negative) de auto-selecție (ne-reprezentativitate și confuzie).",
  "optionRationales": [
   "Descrierea și consecința (detalii negative) sunt din tabel.",
   "Predispoziția de a participa și introducerea confuziei sunt explicite.",
   "Eroarea de durată detectează cazuri lente și omite cazurile rapide, opusul enunțului.",
   "Interpretarea subiectivă de către investigator este eroarea de investigație.",
   "Textul definește confuzia ca factori care afectează atât grupurile experimentale, cât și pe cele de control."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă memory bias cu length-time și mută eroarea de investigație pe auto-selecție."
  },
  "textbookExpressions": [
   "De memorie",
   "Auto-selecţia"
  ]
 },
 {
  "id": "epidemio-adv-023",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Specificitatea, rezultatele fals-pozitive și reducerea absolută a riscului:",
  "options": [
   "Specificitatea este probabilitatea ca testul să fie negativ la cei fără boală, adică D / (B + D)",
   "Rezultatele fals-pozitive se aproximează prin (1 − specificitate); testele de confirmare acceptabile au de obicei specificitatea peste 85%",
   "Reducerea absolută a riscului este rata bolii în grupul martor minus rata bolii în grupul de intervenție",
   "Specificitatea este A / (A + C), identică sensibilității",
   "RAR este 1 / NNT, nu diferența dintre ratele martor și intervenție"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Specificitatea este probabilitatea ca testul să fie negativ la cei fără boală, adică D / (B + D) — Corect: Definiția și formula specificității sunt explicite.\n\nRezultatele fals-pozitive se aproximează prin (1 − specificitate); testele de confirmare acceptabile au de obicei specificitatea peste 85% — Corect: (1 − specificitate) și pragul >85% pentru confirmare sunt citate.\n\nReducerea absolută a riscului este rata bolii în grupul martor minus rata bolii în grupul de intervenție — Corect: Formula RAR = rată martor − rată intervenție este din text.\n\nSpecificitatea este A / (A + C), identică sensibilității — Incorect: A/(A+C) este sensibilitatea, nu specificitatea.\n\nRAR este 1 / NNT, nu diferența dintre ratele martor și intervenție — Incorect: NNT = 1/RAR; RAR este diferența de rate, nu inversul NNT.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 335, 336, Biostatistică — Specificitate și RAR (pagini PDF: 113, 114).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    335,
    336
   ],
   "pdfPages": [
    113,
    114
   ],
   "section": "Biostatistică — Specificitate și RAR"
  },
  "learningObjective": "Aplicarea formulei D/(B+D), a aproximării FP și a diferenței de rate care definește RAR.",
  "optionRationales": [
   "Definiția și formula specificității sunt explicite.",
   "(1 − specificitate) și pragul >85% pentru confirmare sunt citate.",
   "Formula RAR = rată martor − rată intervenție este din text.",
   "A/(A+C) este sensibilitatea, nu specificitatea.",
   "NNT = 1/RAR; RAR este diferența de rate, nu inversul NNT."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută formula sensibilității pe specificitate și inversează relația NNT–RAR."
  },
  "textbookExpressions": [
   "Specificitatea",
   "Reducerea absolută a riscului"
  ]
 },
 {
  "id": "epidemio-adv-024",
  "topicId": "epidemio",
  "type": "CM",
  "stem": "Consimțământul informat, ordinul DNR și decesul asistat medical:",
  "options": [
   "Consimțământul cere indicații, riscuri, beneficii, alternative și riscurile refuzului; în urgență există consimțământ implicit, fără acord parental pentru minori",
   "DNR este o directivă anticipată care poate refuza terapiile non-paliative sau poate limita doar ventilația, RCP, tuburile de alimentare ori antibioticele",
   "Sinuciderea asistată de medic înseamnă furnizarea unui mijloc prin care pacientul își încheie viața; eutanasia este administrarea activă de către medic a unui agent letal",
   "Un pacient competent se poate răzgândi în orice moment cu privire la acceptarea terapiei",
   "Absența activității pe EEG definește singură moartea cerebrală"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Consimțământul cere indicații, riscuri, beneficii, alternative și riscurile refuzului; în urgență există consimțământ implicit, fără acord parental pentru minori — Corect: Elementele consimțământului și excepția de urgență sunt de pe pagina 337.\n\nDNR este o directivă anticipată care poate refuza terapiile non-paliative sau poate limita doar ventilația, RCP, tuburile de alimentare ori antibioticele — Corect: Limitarea selectivă a terapiilor din DNR este de pe 338.\n\nSinuciderea asistată de medic înseamnă furnizarea unui mijloc prin care pacientul își încheie viața; eutanasia este administrarea activă de către medic a unui agent letal — Corect: Definițiile PAS versus eutanasie sunt explicite.\n\nUn pacient competent se poate răzgândi în orice moment cu privire la acceptarea terapiei — Corect: Nota precizează că un pacient competent se poate răzgândi în orice moment.\n\nAbsența activității pe EEG definește singură moartea cerebrală — Incorect: Nota precizează că absența activității pe EEG nu definește moartea cerebrală.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 15, p. 337, 338, Etică — Consimțământ, DNR, deces asistat (pagini PDF: 115, 116).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 15,
   "printedPages": [
    337,
    338
   ],
   "pdfPages": [
    115,
    116
   ],
   "section": "Etică — Consimțământ, DNR, deces asistat"
  },
  "learningObjective": "Asamblarea conținutului consimțământului, a flexibilității DNR, a distincției PAS versus eutanasie și a dreptului de a se răzgândi.",
  "optionRationales": [
   "Elementele consimțământului și excepția de urgență sunt de pe pagina 337.",
   "Limitarea selectivă a terapiilor din DNR este de pe 338.",
   "Definițiile PAS versus eutanasie sunt explicite.",
   "Nota precizează că un pacient competent se poate răzgândi în orice moment.",
   "Nota precizează că absența activității pe EEG nu definește moartea cerebrală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul transformă EEG-ul izoelectric în criteriu unic, contrar notei."
  },
  "textbookExpressions": [
   "Consimţământul informat",
   "Sinuciderea asistată de medic"
  ]
 }
];
