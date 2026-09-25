import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_FICAT_SPLINA:Question[]=[
 {
  "id": "ficat-splina-adv-001",
  "topicId": "ficat-splina",
  "type": "CS",
  "stem": "Masa hepatică la adult este de:",
  "options": [
   "1.200–1.600 g",
   "75–150 g",
   "400–600 g",
   "2.500–3.000 g",
   "800–1.000 g"
  ],
  "correct": [
   0
  ],
  "explanation": "1.200–1.600 g — Corect: Textul precizează că, la adult, ficatul cântărește 1.200-1.600 g.\n\n75–150 g — Incorect: 75–150 g este masa splinei la adult, nu a ficatului.\n\n400–600 g — Incorect: 400–600 g subestimează masa hepatică descrisă.\n\n2.500–3.000 g — Incorect: 2.500–3.000 g depășește intervalul citat pentru adult.\n\n800–1.000 g — Incorect: 800–1.000 g este sub limita inferioară a intervalului din text.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 317, Anatomia ficatului (pagini PDF: 187).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    317
   ],
   "pdfPages": [
    187
   ],
   "section": "Anatomia ficatului"
  },
  "learningObjective": "Recunoașterea masei hepatice normale la adult, distinctă de masa splinei și de alte ordine de mărime.",
  "optionRationales": [
   "Textul precizează că, la adult, ficatul cântărește 1.200-1.600 g.",
   "75–150 g este masa splinei la adult, nu a ficatului.",
   "400–600 g subestimează masa hepatică descrisă.",
   "2.500–3.000 g depășește intervalul citat pentru adult.",
   "800–1.000 g este sub limita inferioară a intervalului din text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Intervalul numeric hepatic se confundă ușor cu masa splinei din același capitol."
  },
  "textbookExpressions": [
   "1.200-1.600 g",
   "cea mai mare glandă"
  ]
 },
 {
  "id": "ficat-splina-adv-002",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Vascularizația și segmentarea ficatului se caracterizează prin:",
  "options": [
   "Un sfert din fluxul sanguin hepatic este asigurat prin artera hepatică, iar restul provine din vena portă",
   "Variante anatomice arteriale există în până la 40% dintre cazuri",
   "Vena portă reprezintă confluența venei mezenterice superioare cu vena splenică",
   "Artera hepatică asigură trei sferturi din flux, vena portă doar un sfert",
   "Ficatul are o singură venă suprahepatică, care se varsă în vena mezenterică superioară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Un sfert din fluxul sanguin hepatic este asigurat prin artera hepatică, iar restul provine din vena portă — Corect: Textul precizează că un sfert din flux este arterial, restul portal.\n\nVariante anatomice arteriale există în până la 40% dintre cazuri — Corect: Variantele arteriale sunt citate în până la 40% dintre cazuri.\n\nVena portă reprezintă confluența venei mezenterice superioare cu vena splenică — Corect: Confluența mezenterică superioară plus splenică definește vena portă.\n\nArtera hepatică asigură trei sferturi din flux, vena portă doar un sfert — Incorect: Textul indică opusul: artera asigură un sfert, nu trei sferturi.\n\nFicatul are o singură venă suprahepatică, care se varsă în vena mezenterică superioară — Incorect: Există trei vene suprahepatice care se varsă în vena cavă inferioară, nu o venă unică în mezenterica superioară.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 317, Anatomia ficatului — Vascularizație și segmentare (pagini PDF: 187).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    317
   ],
   "pdfPages": [
    187
   ],
   "section": "Anatomia ficatului — Vascularizație și segmentare"
  },
  "learningObjective": "Diferențierea proporției arterio-portale, a frecvenței variantelor arteriale și a originii venei porte de inversiunile numerice uzuale.",
  "optionRationales": [
   "Textul precizează că un sfert din flux este arterial, restul portal.",
   "Variantele arteriale sunt citate în până la 40% dintre cazuri.",
   "Confluența mezenterică superioară plus splenică definește vena portă.",
   "Textul indică opusul: artera asigură un sfert, nu trei sferturi.",
   "Există trei vene suprahepatice care se varsă în vena cavă inferioară, nu o venă unică în mezenterica superioară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează raportul 1/4 versus 3/4 al fluxului și numărul venelor suprahepatice, pe fondul procentului de 40%."
  },
  "textbookExpressions": [
   "Un sfert",
   "până la 40%"
  ]
 },
 {
  "id": "ficat-splina-adv-003",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "În evaluarea leziunilor hepatice incidentale, sunt adevărate afirmațiile:",
  "options": [
   "Un principiu important este evitarea biopsiei în stadiile incipiente ale diagnosticului la pacientul asimptomatic",
   "Biopsia percutanată poate aduce informații eronate și se asociază cu hemoragie și însămânțare tumorală",
   "Biopsia percutanată poate fi necesară în tumorile nerezecabile a căror natură rămâne necunoscută după imagistică și laborator",
   "Biopsia percutanată este manevra de primă intenție la orice leziune incidentală, înaintea imagisticii",
   "Leziunile și chistele hepatice benigne din populație impun, de regulă, rezecție imediată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Un principiu important este evitarea biopsiei în stadiile incipiente ale diagnosticului la pacientul asimptomatic — Corect: Textul cere explicit evitarea biopsiei precoce la asimptomatici.\n\nBiopsia percutanată poate aduce informații eronate și se asociază cu hemoragie și însămânțare tumorală — Corect: Riscurile de informație eronată, hemoragie și însămânțare sunt menționate.\n\nBiopsia percutanată poate fi necesară în tumorile nerezecabile a căror natură rămâne necunoscută după imagistică și laborator — Corect: Indicația de biopsie în tumori nerezecabile de natură necunoscută este precizată.\n\nBiopsia percutanată este manevra de primă intenție la orice leziune incidentală, înaintea imagisticii — Incorect: Evaluarea începe imagistic; biopsia nu este primul pas la incidentale.\n\nLeziunile și chistele hepatice benigne din populație impun, de regulă, rezecție imediată — Incorect: Textul afirmă că leziunile benigne sunt frecvente și, în mod normal, nu necesită tratament.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 319, Tumorile hepatice, chisturile și abcesele — Principii diagnostice (pagini PDF: 189).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    319
   ],
   "pdfPages": [
    189
   ],
   "section": "Tumorile hepatice, chisturile și abcesele — Principii diagnostice"
  },
  "learningObjective": "Aplicarea principiului de a nu biopsia prematur leziunile incidentale și recunoașterea indicației restante în tumorile nerezecabile.",
  "optionRationales": [
   "Textul cere explicit evitarea biopsiei precoce la asimptomatici.",
   "Riscurile de informație eronată, hemoragie și însămânțare sunt menționate.",
   "Indicația de biopsie în tumori nerezecabile de natură necunoscută este precizată.",
   "Evaluarea începe imagistic; biopsia nu este primul pas la incidentale.",
   "Textul afirmă că leziunile benigne sunt frecvente și, în mod normal, nu necesită tratament."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă o precauție (evitarea biopsiei precoce) într-o regulă de biopsie sau rezecție neselectivă."
  },
  "textbookExpressions": [
   "evita biopsia",
   "însămânţarea tumorală"
  ]
 },
 {
  "id": "ficat-splina-adv-004",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Hemangiomul cavernos hepatic:",
  "options": [
   "Este cea mai frecventă tumoră hepatică benignă, prezentă la 1–20% din populația generală",
   "Frecvența este de 5 ori mai mare la femei, cu date care sugerează sensibilitate hormonală, inclusiv creștere în sarcină",
   "Hemangiomul cavernos mai mare de 10 cm este definit drept hemangiom gigant",
   "Ultrasonografia abdominală este diagnostică și arată un focar hiperecogen",
   "Funcția hepatică este constant alterată, iar rezecția este regula la leziunile incidentale asimptomatice"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este cea mai frecventă tumoră hepatică benignă, prezentă la 1–20% din populația generală — Corect: Textul îl descrie ca cea mai frecventă tumoră benignă, la 1–20% din populație.\n\nFrecvența este de 5 ori mai mare la femei, cu date care sugerează sensibilitate hormonală, inclusiv creștere în sarcină — Corect: Predilecția de 5 ori la femei și sensibilitatea hormonală, inclusiv în sarcină, sunt citate.\n\nHemangiomul cavernos mai mare de 10 cm este definit drept hemangiom gigant — Corect: Pragul de peste 10 cm definește hemangiomul gigant.\n\nUltrasonografia abdominală este diagnostică și arată un focar hiperecogen — Corect: US diagnostică prin focar hiperecogen este explicită.\n\nFuncția hepatică este constant alterată, iar rezecția este regula la leziunile incidentale asimptomatice — Incorect: Funcția hepatică se păstrează normală, iar hemangioamele incidentale nu necesită terapie specifică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 319, Tumorile hepatice benigne — Hemangiomul (pagini PDF: 189).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    319
   ],
   "pdfPages": [
    189
   ],
   "section": "Tumorile hepatice benigne — Hemangiomul"
  },
  "learningObjective": "Recunoașterea prevalenței, a predilecției de sex, a pragului de hemangiom gigant și a aspectului ecografic, versus indicația neselectivă de rezecție.",
  "optionRationales": [
   "Textul îl descrie ca cea mai frecventă tumoră benignă, la 1–20% din populație.",
   "Predilecția de 5 ori la femei și sensibilitatea hormonală, inclusiv în sarcină, sunt citate.",
   "Pragul de peste 10 cm definește hemangiomul gigant.",
   "US diagnostică prin focar hiperecogen este explicită.",
   "Funcția hepatică se păstrează normală, iar hemangioamele incidentale nu necesită terapie specifică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Combină pragul de 10 cm și procentul 1–20% cu un distractor care inversează conservarea funcției și indicația de tratament."
  },
  "textbookExpressions": [
   "1-20%",
   "cavernos hepatic gigant"
  ]
 },
 {
  "id": "ficat-splina-adv-005",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Hiperplazia nodulară focală se caracterizează prin:",
  "options": [
   "Imaginea clasică este de cicatrice centrală cu septuri fibroase, iar spre deosebire de adenom schițează și ducte biliare",
   "Nu are potențial malign și rar se asociază cu ruptură sau hemoragie",
   "Creșterea dimensională nu este influențată de tratamentul hormonal sau de contraceptivele orale",
   "IRM este cea mai eficientă metodă de descriere, prin modificările din fazele arterială, venoasă și de echilibru",
   "Diagnosticul imagistic impune rezecție, deoarece HNF este un precursor al carcinomului hepatocelular"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Imaginea clasică este de cicatrice centrală cu septuri fibroase, iar spre deosebire de adenom schițează și ducte biliare — Corect: Cicatricea centrală și prezența ductelor biliare, spre deosebire de adenom, sunt descrise.\n\nNu are potențial malign și rar se asociază cu ruptură sau hemoragie — Corect: Absența potențialului malign și rarisima ruptură/hemoragie sunt afirmate.\n\nCreșterea dimensională nu este influențată de tratamentul hormonal sau de contraceptivele orale — Corect: Textul precizează că dimensiunea nu este influențată de hormoni sau contraceptive.\n\nIRM este cea mai eficientă metodă de descriere, prin modificările din fazele arterială, venoasă și de echilibru — Corect: IRM este descrisă ca cea mai eficientă, pe fazele arterială, venoasă și de echilibru.\n\nDiagnosticul imagistic impune rezecție, deoarece HNF este un precursor al carcinomului hepatocelular — Incorect: HNF este un proces regenerativ benign, de tratat conservator când diagnosticul imagistic este stabilit, nu un precursor al CHC.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 320, Tumorile hepatice benigne — Hiperplazia nodulară focală (pagini PDF: 190).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    320
   ],
   "pdfPages": [
    190
   ],
   "section": "Tumorile hepatice benigne — Hiperplazia nodulară focală"
  },
  "learningObjective": "Diferențierea HNF de adenom prin ductele biliare, absența potențialului malign și lipsa influenței hormonale, cu rolul IRM.",
  "optionRationales": [
   "Cicatricea centrală și prezența ductelor biliare, spre deosebire de adenom, sunt descrise.",
   "Absența potențialului malign și rarisima ruptură/hemoragie sunt afirmate.",
   "Textul precizează că dimensiunea nu este influențată de hormoni sau contraceptive.",
   "IRM este descrisă ca cea mai eficientă, pe fazele arterială, venoasă și de echilibru.",
   "HNF este un proces regenerativ benign, de tratat conservator când diagnosticul imagistic este stabilit, nu un precursor al CHC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul transformă o leziune de tratat conservator într-un precursor malign, pe fondul contrastului HNF versus adenom."
  },
  "textbookExpressions": [
   "septuri fibroase",
   "nu este influenţată"
  ]
 },
 {
  "id": "ficat-splina-adv-006",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "O femeie de 34 de ani, sub contraceptive orale de lungă durată, are o leziune hepatică solidă hipodensă. Adenomul hepatic:",
  "options": [
   "Este frecvent la femeia tânără între 30 și 50 de ani, de obicei după expunere prelungită la estrogeni",
   "Microscopic este format din hepatocite fără triadă portală sau duct biliar",
   "Poate crește sau sângera în aproximativ 20–40% dintre cazuri, complicațiile fiind mai frecvente la tumori peste 5 cm",
   "Conține celule Kupffer abundente, cu captare intensă la scintigrafia cu 99mTc",
   "Contraceptivele orale trebuie continuate, deoarece oprirea lor nu influențează dimensiunea"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este frecvent la femeia tânără între 30 și 50 de ani, de obicei după expunere prelungită la estrogeni — Corect: Vârsta 30–50 de ani și expunerea la estrogeni/contraceptive sunt explicitate.\n\nMicroscopic este format din hepatocite fără triadă portală sau duct biliar — Corect: Absența triadei portale și a ductului biliar este criteriul microscopic.\n\nPoate crește sau sângera în aproximativ 20–40% dintre cazuri, complicațiile fiind mai frecvente la tumori peste 5 cm — Corect: Intervalul 20–40% și pragul de 5 cm pentru complicații sunt citate.\n\nConține celule Kupffer abundente, cu captare intensă la scintigrafia cu 99mTc — Incorect: Tumorile nu conțin celule Kupffer și dau, adesea, defect de captare la 99mTc.\n\nContraceptivele orale trebuie continuate, deoarece oprirea lor nu influențează dimensiunea — Incorect: Întreruperea contraceptivelor poate duce la regresiune și este prima măsură la leziunea asimptomatică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 320, 321, Tumorile hepatice benigne — Adenomul hepatic (pagini PDF: 190, 191).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    320,
    321
   ],
   "pdfPages": [
    190,
    191
   ],
   "section": "Tumorile hepatice benigne — Adenomul hepatic"
  },
  "learningObjective": "Recunoașterea contextului hormonal, a histologiei fără triadă portală și a riscului de sângerare la tumori peste 5 cm.",
  "optionRationales": [
   "Vârsta 30–50 de ani și expunerea la estrogeni/contraceptive sunt explicitate.",
   "Absența triadei portale și a ductului biliar este criteriul microscopic.",
   "Intervalul 20–40% și pragul de 5 cm pentru complicații sunt citate.",
   "Tumorile nu conțin celule Kupffer și dau, adesea, defect de captare la 99mTc.",
   "Întreruperea contraceptivelor poate duce la regresiune și este prima măsură la leziunea asimptomatică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează captarea scintigrafică (absența celulelor Kupffer) și prima măsură terapeutică (oprirea estrogenilor)."
  },
  "textbookExpressions": [
   "30 şi 50 de ani",
   "20--40%"
  ]
 },
 {
  "id": "ficat-splina-adv-007",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Carcinomul hepatocelular:",
  "options": [
   "Reprezintă 90% din tumorile maligne primare ale ficatului",
   "Alfa-fetoproteina este crescută la 60–80% dintre pacienții cu CHC",
   "Aspectul tipic imagistic este captare precoce arterială urmată de washout, cu inel rezidual hiperdens",
   "Orice formațiune hepatică mai mare de 1 cm la un cirotic ar trebui investigată pentru a exclude hepatocarcinomul",
   "Biopsia este primul pas diagnostic, chiar când aspectul imagistic tipic este evidențiabil"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Reprezintă 90% din tumorile maligne primare ale ficatului — Corect: Ponderea de 90% din tumorile maligne primare este explicită.\n\nAlfa-fetoproteina este crescută la 60–80% dintre pacienții cu CHC — Corect: Creșterea AFP la 60–80% dintre pacienții cu CHC este citată.\n\nAspectul tipic imagistic este captare precoce arterială urmată de washout, cu inel rezidual hiperdens — Corect: Captarea arterială urmată de washout cu inel hiperdens este aspectul tipic diagnostic.\n\nOrice formațiune hepatică mai mare de 1 cm la un cirotic ar trebui investigată pentru a exclude hepatocarcinomul — Corect: Pragul de peste 1 cm la cirotic impune investigare pentru CHC.\n\nBiopsia este primul pas diagnostic, chiar când aspectul imagistic tipic este evidențiabil — Incorect: Biopsia este recomandată doar când aspectul tipic nu este evidențiabil.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 321, Tumorile hepatice maligne — Carcinomul hepatocelular (pagini PDF: 191).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    321
   ],
   "pdfPages": [
    191
   ],
   "section": "Tumorile hepatice maligne — Carcinomul hepatocelular"
  },
  "learningObjective": "Aplicarea ponderii CHC între tumorile primare, a sensibilității AFP, a aspectului arterial-washout și a pragului de 1 cm la cirotic.",
  "optionRationales": [
   "Ponderea de 90% din tumorile maligne primare este explicită.",
   "Creșterea AFP la 60–80% dintre pacienții cu CHC este citată.",
   "Captarea arterială urmată de washout cu inel hiperdens este aspectul tipic diagnostic.",
   "Pragul de peste 1 cm la cirotic impune investigare pentru CHC.",
   "Biopsia este recomandată doar când aspectul tipic nu este evidențiabil."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează indicația biopsiei față de aspectul imagistic tipic, pe fondul unor procente și praguri memorabile."
  },
  "textbookExpressions": [
   "90% din tumorile maligne",
   "60-80%"
  ]
 },
 {
  "id": "ficat-splina-adv-008",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte privind tratamentul carcinomului hepatocelular:",
  "options": [
   "Criteriile Milano pentru transplant includ tumoră unică sub 5 cm sau până la trei tumori de cel mult 3 cm, fără invazie vasculară",
   "În parenchim hepatic sănătos se poate rezeca până la 70% din volumul ficatului",
   "Criteriile Milano permit oricâte tumori, cu condiția absenței icterului",
   "În ciroză, capacitatea de regenerare permite aceleași rezecții extinse ca în ficatul sănătos",
   "Chemoembolizarea folosește de obicei cisplatină, nu doxorubicină"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Criteriile Milano pentru transplant includ tumoră unică sub 5 cm sau până la trei tumori de cel mult 3 cm, fără invazie vasculară — Corect: Criteriile Milano (unică <5 cm sau ≤3 tumori ≤3 cm, fără invazie vasculară) sunt enumerate.\n\nÎn parenchim hepatic sănătos se poate rezeca până la 70% din volumul ficatului — Corect: Rezecția până la 70% în parenchim sănătos este explicită.\n\nCriteriile Milano permit oricâte tumori, cu condiția absenței icterului — Incorect: Milano limitează numărul și dimensiunea tumorilor, nu le lasă nelimitate.\n\nÎn ciroză, capacitatea de regenerare permite aceleași rezecții extinse ca în ficatul sănătos — Incorect: În ciroză regenerarea este limitată, de aceea se preferă rezecția segmentară.\n\nChemoembolizarea folosește de obicei cisplatină, nu doxorubicină — Incorect: Agentul chimioterapic citat pentru chemoembolizare este doxorubicina, nu cisplatina.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 322, Carcinomul hepatocelular — Opțiuni de tratament (pagini PDF: 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    322
   ],
   "pdfPages": [
    192
   ],
   "section": "Carcinomul hepatocelular — Opțiuni de tratament"
  },
  "learningObjective": "Aplicarea criteriilor Milano și a limitei de rezecție de 70% în ficatul sănătos, versus regenerarea limitată din ciroză.",
  "optionRationales": [
   "Criteriile Milano (unică <5 cm sau ≤3 tumori ≤3 cm, fără invazie vasculară) sunt enumerate.",
   "Rezecția până la 70% în parenchim sănătos este explicită.",
   "Milano limitează numărul și dimensiunea tumorilor, nu le lasă nelimitate.",
   "În ciroză regenerarea este limitată, de aceea se preferă rezecția segmentară.",
   "Agentul chimioterapic citat pentru chemoembolizare este doxorubicina, nu cisplatina."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă pragurile Milano și extinde greșit rezecția de 70% la cirotici, două erori de selecție terapeutică."
  },
  "textbookExpressions": [
   "criteriile Milano",
   "până la 70%"
  ]
 },
 {
  "id": "ficat-splina-adv-009",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Chisturile hepatice simple și boala polichistică hepatică:",
  "options": [
   "Chisturile simple sunt întâlnite la 10% dintre pacienți, sunt de obicei asimptomatice și nu comunică cu arborele biliar",
   "Tratamentul standard al chistului simplu simptomatic este decorticarea chirurgicală",
   "Boala polichistică hepatică este autozomal dominantă și se asociază frecvent cu boală polichistică renală",
   "Aspirația prin puncție vindecă definitiv chistul simplu, fără reapariția simptomelor",
   "Decorticarea este metoda cea mai eficientă în boala polichistică extinsă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Chisturile simple sunt întâlnite la 10% dintre pacienți, sunt de obicei asimptomatice și nu comunică cu arborele biliar — Corect: Prevalența de 10%, caracterul asimptomatic și absența comunicării cu arborele biliar sunt citate.\n\nTratamentul standard al chistului simplu simptomatic este decorticarea chirurgicală — Corect: Decorticarea chirurgicală este tratamentul standard al chistului simptomatic.\n\nBoala polichistică hepatică este autozomal dominantă și se asociază frecvent cu boală polichistică renală — Corect: Transmiterea autozomal dominantă și asocierea cu polichistoză renală sunt descrise.\n\nAspirația prin puncție vindecă definitiv chistul simplu, fără reapariția simptomelor — Incorect: Aspirația ameliorează simptomele, dar acestea reapar în majoritatea situațiilor.\n\nDecorticarea este metoda cea mai eficientă în boala polichistică extinsă — Incorect: Textul precizează că decorticarea este rar eficientă din cauza afectării extensive.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 323, Chisturile hepatice — Chistul simplu și boala polichistică (pagini PDF: 193).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    323
   ],
   "pdfPages": [
    193
   ],
   "section": "Chisturile hepatice — Chistul simplu și boala polichistică"
  },
  "learningObjective": "Diferențierea chistului simplu (prevalență 10%, decorticare) de boala polichistică autozomal dominantă, în care decorticarea este rar eficientă.",
  "optionRationales": [
   "Prevalența de 10%, caracterul asimptomatic și absența comunicării cu arborele biliar sunt citate.",
   "Decorticarea chirurgicală este tratamentul standard al chistului simptomatic.",
   "Transmiterea autozomal dominantă și asocierea cu polichistoză renală sunt descrise.",
   "Aspirația ameliorează simptomele, dar acestea reapar în majoritatea situațiilor.",
   "Textul precizează că decorticarea este rar eficientă din cauza afectării extensive."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează eficiența decorticării între chistul simplu și polichistoză și tratează puncția ca vindecare definitivă."
  },
  "textbookExpressions": [
   "10% dintre pacienţi",
   "autozomal dominantă"
  ]
 },
 {
  "id": "ficat-splina-adv-010",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Un pacient provenit dintr-o zonă mediteraneană are un chist hepatic complex, cu vezicule fiice. Chistul hidatic:",
  "options": [
   "Rezultă din infecția cu Echinococcus granulosus sau Echinococcus multilocularis, omul fiind gazdă intermediară accidentală",
   "Echinococcus granulosus formează un chist unic care, în două treimi din cazuri, apare în parenchimul hepatic",
   "Dacă boala este suspicionată, aspirația percutanată sau biopsia diagnostică trebuie evitate din cauza riscului de însămânțare și anafilaxie",
   "Diagnosticul se bazează pe puncția diagnostică de primă intenție, chiar la suspiciune",
   "Eozinofilia lipsește constant, iar calcificările imagistice exclud infecția"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Rezultă din infecția cu Echinococcus granulosus sau Echinococcus multilocularis, omul fiind gazdă intermediară accidentală — Corect: Cei doi Echinococcus și statutul de gazdă intermediară accidentală sunt descriși.\n\nEchinococcus granulosus formează un chist unic care, în două treimi din cazuri, apare în parenchimul hepatic — Corect: Localizarea hepatică în 2/3 din cazuri pentru E. granulosus este citată.\n\nDacă boala este suspicionată, aspirația percutanată sau biopsia diagnostică trebuie evitate din cauza riscului de însămânțare și anafilaxie — Corect: Evitarea aspirației/biopsiei din cauza însămânțării și anafilaxiei este explicită.\n\nDiagnosticul se bazează pe puncția diagnostică de primă intenție, chiar la suspiciune — Incorect: Puncția diagnostică este descurajată la suspiciune, nu este primul pas.\n\nEozinofilia lipsește constant, iar calcificările imagistice exclud infecția — Incorect: Eozinofilia apare la o treime până la jumătate dintre pacienți, iar calcificările sugerează infecție indolentă, nu o exclud.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 324, Abcesele și chistele infecțioase — Chistul hidatic (pagini PDF: 194).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    324
   ],
   "pdfPages": [
    194
   ],
   "section": "Abcesele și chistele infecțioase — Chistul hidatic"
  },
  "learningObjective": "Recunoașterea etiologică echinococică, a predilecției hepatice de 2/3 și a contraindicației puncției diagnostice.",
  "optionRationales": [
   "Cei doi Echinococcus și statutul de gazdă intermediară accidentală sunt descriși.",
   "Localizarea hepatică în 2/3 din cazuri pentru E. granulosus este citată.",
   "Evitarea aspirației/biopsiei din cauza însămânțării și anafilaxiei este explicită.",
   "Puncția diagnostică este descurajată la suspiciune, nu este primul pas.",
   "Eozinofilia apare la o treime până la jumătate dintre pacienți, iar calcificările sugerează infecție indolentă, nu o exclud."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează interdicția puncției și semnificația eozinofiliei/calcificărilor, erori clasice de diagnostic."
  },
  "textbookExpressions": [
   "Echinococcus granulosus",
   "2/3 dintre cazuri"
  ]
 },
 {
  "id": "ficat-splina-adv-011",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Următoarele afirmații despre hipertensiunea portală sunt adevărate:",
  "options": [
   "Hipertensiunea portală ușoară este definită prin GPVH peste 5, dar sub 10 mmHg, iar cea semnificativă clinic la valori de cel puțin 10 mmHg",
   "Ciroza cauzează aproximativ 90% din cazurile de hipertensiune portală în Statele Unite",
   "Tromboza venei porte reprezintă aproximativ 50% din cazurile de hipertensiune portală la copii",
   "Cea mai frecventă cauză de hipertensiune portală în SUA este schistosomiaza",
   "Sindromul Budd-Chiari este o cauză prehepatică, prin tromboză izolată a venei porte extrahepatice"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hipertensiunea portală ușoară este definită prin GPVH peste 5, dar sub 10 mmHg, iar cea semnificativă clinic la valori de cel puțin 10 mmHg — Corect: Pragurile >5 și <10 mmHg (ușoară) versus ≥10 mmHg (semnificativă clinic) sunt definite.\n\nCiroza cauzează aproximativ 90% din cazurile de hipertensiune portală în Statele Unite — Corect: Ciroza este cauza a circa 90% din cazurile din SUA.\n\nTromboza venei porte reprezintă aproximativ 50% din cazurile de hipertensiune portală la copii — Corect: Tromboza portei explică circa 50% din hipertensiunea portală pediatrică.\n\nCea mai frecventă cauză de hipertensiune portală în SUA este schistosomiaza — Incorect: Schistosomiaza este cea mai frecventă cauză presinusoidală mondială, nu cauza dominantă din SUA.\n\nSindromul Budd-Chiari este o cauză prehepatică, prin tromboză izolată a venei porte extrahepatice — Incorect: Budd-Chiari este o cauză posthepatică (ocluzia venelor suprahepatice), nu prehepatică prin tromboză portă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 324, Hipertensiunea portală — Definiție și cauze (pagini PDF: 194).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    324
   ],
   "pdfPages": [
    194
   ],
   "section": "Hipertensiunea portală — Definiție și cauze"
  },
  "learningObjective": "Aplicarea pragurilor GPVH și a ponderii etiologice (ciroză 90% în SUA, tromboză portă 50% la copii), versus clasificarea Budd-Chiari.",
  "optionRationales": [
   "Pragurile >5 și <10 mmHg (ușoară) versus ≥10 mmHg (semnificativă clinic) sunt definite.",
   "Ciroza este cauza a circa 90% din cazurile din SUA.",
   "Tromboza portei explică circa 50% din hipertensiunea portală pediatrică.",
   "Schistosomiaza este cea mai frecventă cauză presinusoidală mondială, nu cauza dominantă din SUA.",
   "Budd-Chiari este o cauză posthepatică (ocluzia venelor suprahepatice), nu prehepatică prin tromboză portă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă pragurile GPVH 5 versus 10 mmHg și mută Budd-Chiari din categoria posthepatică în cea prehepatică."
  },
  "textbookExpressions": [
   "GPVH",
   "aproximativ 90%"
  ]
 },
 {
  "id": "ficat-splina-adv-012",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Anatomia și fiziologia splinei:",
  "options": [
   "La adult, splina cântărește 75–150 g și este cea mai mare masă limfoidă din organism",
   "Primește aproximativ 5% din debitul cardiac, cu vascularizație arterială dublă (artera splenică și arterele gastrice scurte)",
   "Splina accesorie este identificată la 10–30% din populație, cea mai comună localizare fiind hilul splinei",
   "Eșecul identificării și exciziei splinelor accesorii poate duce la recidiva bolilor hematologice tratate prin splenectomie",
   "Artera splenică este ramură a arterei mezenterice superioare și nu are colaterale gastrice"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "La adult, splina cântărește 75–150 g și este cea mai mare masă limfoidă din organism — Corect: Masa 75–150 g și statutul de cea mai mare masă limfoidă sunt explicitate.\n\nPrimește aproximativ 5% din debitul cardiac, cu vascularizație arterială dublă (artera splenică și arterele gastrice scurte) — Corect: Cei 5% din debitul cardiac și dubla vascularizație (splenică plus gastrice scurte) sunt descrise.\n\nSplina accesorie este identificată la 10–30% din populație, cea mai comună localizare fiind hilul splinei — Corect: Prevalența 10–30% și localizarea cea mai comună la hil sunt tabelate ca ordine a frecvenței.\n\nEșecul identificării și exciziei splinelor accesorii poate duce la recidiva bolilor hematologice tratate prin splenectomie — Corect: Omiterea splinelor accesorii poate recidiva bolile hematologice tratate prin splenectomie.\n\nArtera splenică este ramură a arterei mezenterice superioare și nu are colaterale gastrice — Incorect: Artera splenică este ramură a trunchiului celiac; gastricele scurte asigură colaterale din gastrica stângă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 333, Anatomia și fiziologia splinei (pagini PDF: 195).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    333
   ],
   "pdfPages": [
    195
   ],
   "section": "Anatomia și fiziologia splinei"
  },
  "learningObjective": "Recunoașterea masei, a debitului, a dublei vascularizații și a importanței splinei accesorii (10–30%, hil) în recidiva hematologică.",
  "optionRationales": [
   "Masa 75–150 g și statutul de cea mai mare masă limfoidă sunt explicitate.",
   "Cei 5% din debitul cardiac și dubla vascularizație (splenică plus gastrice scurte) sunt descrise.",
   "Prevalența 10–30% și localizarea cea mai comună la hil sunt tabelate ca ordine a frecvenței.",
   "Omiterea splinelor accesorii poate recidiva bolile hematologice tratate prin splenectomie.",
   "Artera splenică este ramură a trunchiului celiac; gastricele scurte asigură colaterale din gastrica stângă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul mută originea arterei splenice de la trunchiul celiac la mezenterica superioară, pe fondul procentelor 5% și 10–30%."
  },
  "textbookExpressions": [
   "75-150 g",
   "10-30%"
  ]
 },
 {
  "id": "ficat-splina-adv-013",
  "topicId": "ficat-splina",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la traumatismele splenice:",
  "options": [
   "Splina este cel mai frecvent organ afectat în contuziile abdominale și al doilea ca frecvență în plăgile abdominale penetrante",
   "Splina este cel mai frecvent organ lezat în plăgile penetrante, nu în contuzii",
   "La pacientul instabil cu lacerație splenică, prezervarea splinei rămâne tratamentul standard",
   "OPSI a dus la abandonarea splenectomiei de urgență la instabili",
   "Trauma reprezintă o cauză rară de indicație de splenectomie, depășită numeric de tumorile splenice primare"
  ],
  "correct": [
   0
  ],
  "explanation": "Splina este cel mai frecvent organ afectat în contuziile abdominale și al doilea ca frecvență în plăgile abdominale penetrante — Corect: Textul o plasează ca cel mai frecvent organ în contuzii și al doilea în plăgi penetrante.\n\nSplina este cel mai frecvent organ lezat în plăgile penetrante, nu în contuzii — Incorect: Ordinea este inversată față de text: întâi contuzii, apoi plăgi penetrante.\n\nLa pacientul instabil cu lacerație splenică, prezervarea splinei rămâne tratamentul standard — Incorect: La instabil, splenectomia de urgență rămâne standardul, nu prezervarea.\n\nOPSI a dus la abandonarea splenectomiei de urgență la instabili — Incorect: OPSI a condus la soluții de prezervare la stabili, nu la abandonarea splenectomiei la instabili.\n\nTrauma reprezintă o cauză rară de indicație de splenectomie, depășită numeric de tumorile splenice primare — Incorect: Trauma este cea mai frecventă cauză de indicație de splenectomie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 337, 338, Afecțiunile chirurgicale ale splinei — Traumatismele splenice (pagini PDF: 199, 200).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    337,
    338
   ],
   "pdfPages": [
    199,
    200
   ],
   "section": "Afecțiunile chirurgicale ale splinei — Traumatismele splenice"
  },
  "learningObjective": "Diferențierea rangului splinei în traumatismul contuz versus penetrant și a indicației de splenectomie la instabil.",
  "optionRationales": [
   "Textul o plasează ca cel mai frecvent organ în contuzii și al doilea în plăgi penetrante.",
   "Ordinea este inversată față de text: întâi contuzii, apoi plăgi penetrante.",
   "La instabil, splenectomia de urgență rămâne standardul, nu prezervarea.",
   "OPSI a condus la soluții de prezervare la stabili, nu la abandonarea splenectomiei la instabili.",
   "Trauma este cea mai frecventă cauză de indicație de splenectomie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează rangul contuz versus penetrant și extinde prezervarea splinei la pacientul instabil."
  },
  "textbookExpressions": [
   "cel mai frecvent organ",
   "plăgi penetrante"
  ]
 },
 {
  "id": "ficat-splina-adv-014",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Sferocitoza ereditară:",
  "options": [
   "Are transmitere autozomal dominantă și implică deficite ale proteinelor membranare (spectrină, ankyrină sau banda 3)",
   "Intervenția trebuie amânată până după vârsta de 4–5 ani, deoarece riscul de OPSI este mai ridicat la copiii mici",
   "Are transmitere autozomal recesivă, similară siclemiei",
   "Splenectomia este inutilă, hematiile rigide ocolind filtrarea splenică",
   "Identificarea splinelor accesorii intraoperator nu are relevanță clinică"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Are transmitere autozomal dominantă și implică deficite ale proteinelor membranare (spectrină, ankyrină sau banda 3) — Corect: Transmiterea AD și proteinele de membrană (spectrină, ankyrină, banda 3) sunt descrise.\n\nIntervenția trebuie amânată până după vârsta de 4–5 ani, deoarece riscul de OPSI este mai ridicat la copiii mici — Corect: Amânarea până după 4–5 ani din cauza OPSI la copiii mici este explicită.\n\nAre transmitere autozomal recesivă, similară siclemiei — Incorect: Siclemia este autozomal recesivă; sferocitoza este dominantă.\n\nSplenectomia este inutilă, hematiile rigide ocolind filtrarea splenică — Incorect: Splenectomia este de obicei recomandată, permițând supraviețuirea hematiilor.\n\nIdentificarea splinelor accesorii intraoperator nu are relevanță clinică — Incorect: Identificarea splinelor accesorii este esențială, hipertrofia lor putând persista simptomatologia.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 338, Anemia hemolitică — Sferocitoza ereditară (pagini PDF: 200).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    338
   ],
   "pdfPages": [
    200
   ],
   "section": "Anemia hemolitică — Sferocitoza ereditară"
  },
  "learningObjective": "Aplicarea transmiterii autozomal dominante, a deficitului de spectrină și a amânării splenectomiei până la 4–5 ani.",
  "optionRationales": [
   "Transmiterea AD și proteinele de membrană (spectrină, ankyrină, banda 3) sunt descrise.",
   "Amânarea până după 4–5 ani din cauza OPSI la copiii mici este explicită.",
   "Siclemia este autozomal recesivă; sferocitoza este dominantă.",
   "Splenectomia este de obicei recomandată, permițând supraviețuirea hematiilor.",
   "Identificarea splinelor accesorii este esențială, hipertrofia lor putând persista simptomatologia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă modul de transmitere cu siclemia și anulează importanța splinelor accesorii, două capcane de rezidențiat."
  },
  "textbookExpressions": [
   "Sferocitoza ereditară",
   "4--5 ani"
  ]
 },
 {
  "id": "ficat-splina-adv-015",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Trombocitopenia imună (TI) și splenectomia:",
  "options": [
   "La adulții splenectomizați, rata de răspuns favorabil pe termen lung este de 60–85%",
   "Dacă trombocitele sunt sub 20.000, trebuie asigurată masa trombocitară, dar transfuzia nu se face înaintea clampării arterei splenice",
   "Recurența TI poate fi cauzată de omiterea unei spline accesorii sau de splenoză",
   "Transfuzia de trombocite trebuie făcută sistematic înainte de clamparea arterei splenice, pentru a preveni distrugerea lor",
   "Splenectomia accelerează evoluția pacienților HIV pozitivi spre SIDA"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "La adulții splenectomizați, rata de răspuns favorabil pe termen lung este de 60–85% — Corect: Răspunsul pe termen lung de 60–85% este citat.\n\nDacă trombocitele sunt sub 20.000, trebuie asigurată masa trombocitară, dar transfuzia nu se face înaintea clampării arterei splenice — Corect: Pragul <20.000 și interdicția transfuziei înaintea clampării sunt explicite, deoarece plachetele ar fi distruse în splină.\n\nRecurența TI poate fi cauzată de omiterea unei spline accesorii sau de splenoză — Corect: Recurența prin splină accesorie omisă sau splenoză este menționată.\n\nTransfuzia de trombocite trebuie făcută sistematic înainte de clamparea arterei splenice, pentru a preveni distrugerea lor — Incorect: Textul cere opusul: nu se transfuzează înaintea clampării arterei splenice.\n\nSplenectomia accelerează evoluția pacienților HIV pozitivi spre SIDA — Incorect: Splenectomia nu pare să accelereze evoluția HIV spre SIDA.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 340, Trombocitopenia imună — Splenectomia (pagini PDF: 202).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    340
   ],
   "pdfPages": [
    202
   ],
   "section": "Trombocitopenia imună — Splenectomia"
  },
  "learningObjective": "Aplicarea ratei de răspuns 60–85%, a pragului de 20.000 pentru disponibilitatea masei și a interdicției de transfuzie înaintea clampării.",
  "optionRationales": [
   "Răspunsul pe termen lung de 60–85% este citat.",
   "Pragul <20.000 și interdicția transfuziei înaintea clampării sunt explicite, deoarece plachetele ar fi distruse în splină.",
   "Recurența prin splină accesorie omisă sau splenoză este menționată.",
   "Textul cere opusul: nu se transfuzează înaintea clampării arterei splenice.",
   "Splenectomia nu pare să accelereze evoluția HIV spre SIDA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează momentul transfuziei față de clamparea arterei splenice, o eroare tehnică cu consecințe imediate."
  },
  "textbookExpressions": [
   "60-85%",
   "<20.000"
  ]
 },
 {
  "id": "ficat-splina-adv-016",
  "topicId": "ficat-splina",
  "type": "CS",
  "stem": "Un pacient prezintă febră, purpură, anemie hemolitică, tulburări de status mental și afectare renală. Mortalitatea purpurei trombotice trombocitopenice netratate este de aproximativ:",
  "options": [
   "90%",
   "10%",
   "25%",
   "40%",
   "5%"
  ],
  "correct": [
   0
  ],
  "explanation": "90% — Corect: Textul citează mortalitatea datorată PTT netratate de aproximativ 90%.\n\n10% — Incorect: 10% subestimează mortalitatea netratată.\n\n25% — Incorect: 25% nu este cifra citată pentru PTT netratată.\n\n40% — Incorect: 40% nu figurează ca mortalitate a PTT netratate.\n\n5% — Incorect: 5% ar corespunde unei boli cu prognostic bun fără tratament, opus textului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 340, Purpura trombotică trombocitopenică (pagini PDF: 202).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    340
   ],
   "pdfPages": [
    202
   ],
   "section": "Purpura trombotică trombocitopenică"
  },
  "learningObjective": "Recunoașterea mortalității de circa 90% a PTT netratate, distinctă de alte procente din capitol.",
  "optionRationales": [
   "Textul citează mortalitatea datorată PTT netratate de aproximativ 90%.",
   "10% subestimează mortalitatea netratată.",
   "25% nu este cifra citată pentru PTT netratată.",
   "40% nu figurează ca mortalitate a PTT netratate.",
   "5% ar corespunde unei boli cu prognostic bun fără tratament, opus textului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere cifra de 90% dintr-un capitol cu multe procente (60–85% în TI, 50% trombocitoză), ușor de permutat."
  },
  "textbookExpressions": [
   "PTI netratată",
   "Plasmafereza"
  ]
 },
 {
  "id": "ficat-splina-adv-017",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Modificările hematologice după splenectomie includ:",
  "options": [
   "Numărul leucocitelor crește în medie cu 50% peste limita superioară a normalului și revine de obicei în 5–7 zile",
   "Numărul plachetelor crește cu până la 30% între ziua 2 și ziua 10 și revine de obicei la normal în aproximativ două săptămâni",
   "Trombocitoza (peste 400.000/mm³) apare la 50% dintre pacienți",
   "Absența corpurilor Howell-Jolly după splenectomie pentru o afecțiune hematologică sugerează o splină accesorie omisă",
   "Leucocitoza peste 15.000/mm³ în zilele 1–3 este, prin ea însăși, diagnostică pentru infecție, independent de moment"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Numărul leucocitelor crește în medie cu 50% peste limita superioară a normalului și revine de obicei în 5–7 zile — Corect: Creșterea medie de 50% și revenirea în 5–7 zile sunt explicitate.\n\nNumărul plachetelor crește cu până la 30% între ziua 2 și ziua 10 și revine de obicei la normal în aproximativ două săptămâni — Corect: Creșterea plachetară de până la 30% între zilele 2 și 10, cu normalizare în circa două săptămâni, este citată.\n\nTrombocitoza (peste 400.000/mm³) apare la 50% dintre pacienți — Corect: Trombocitoza >400.000 la 50% dintre pacienți este menționată.\n\nAbsența corpurilor Howell-Jolly după splenectomie pentru o afecțiune hematologică sugerează o splină accesorie omisă — Corect: Absența Howell-Jolly, a corpiilor Heinz și a hematiilor nucleate sugerează splină accesorie omisă.\n\nLeucocitoza peste 15.000/mm³ în zilele 1–3 este, prin ea însăși, diagnostică pentru infecție, independent de moment — Incorect: Valori de 15.000–20.000/mm³ sunt descrise imediat postoperator; persistenta peste 5–7 zile, nu valoarea precoce, sugerează infecție.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 341, Consecințe după splenectomie — Modificări hematologice (pagini PDF: 203).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    341
   ],
   "pdfPages": [
    203
   ],
   "section": "Consecințe după splenectomie — Modificări hematologice"
  },
  "learningObjective": "Diferențierea leucocitozei tranzitorii de 5–7 zile și a trombocitozei de 50% de semnul de splină accesorie (lipsa corpurilor Howell-Jolly).",
  "optionRationales": [
   "Creșterea medie de 50% și revenirea în 5–7 zile sunt explicitate.",
   "Creșterea plachetară de până la 30% între zilele 2 și 10, cu normalizare în circa două săptămâni, este citată.",
   "Trombocitoza >400.000 la 50% dintre pacienți este menționată.",
   "Absența Howell-Jolly, a corpiilor Heinz și a hematiilor nucleate sugerează splină accesorie omisă.",
   "Valori de 15.000–20.000/mm³ sunt descrise imediat postoperator; persistenta peste 5–7 zile, nu valoarea precoce, sugerează infecție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă leucocitoza precoce așteptată (15.000–20.000) într-un marker de infecție, ignorând fereastra de 5–7 zile."
  },
  "textbookExpressions": [
   "5-7 zile",
   "Howell-Jolly"
  ]
 },
 {
  "id": "ficat-splina-adv-018",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Infecția severă post-splenectomie (OPSI):",
  "options": [
   "La copilul sănătos riscul este de aproximativ 2–4%, iar la adult de circa 1–2%",
   "Streptococcus pneumoniae este cel mai frecvent agent incriminat (75%)",
   "Vaccinarea antipneumococică este indicată după splenectomie totală, după splenectomii conservative posttraumatice și la trauma splenică tratată non-operator",
   "Vaccinarea asigură protecție completă față de toate serotipurile pneumococice și față de celelalte bacterii",
   "Sindromul OPSI apare, de regulă, în primele ore postoperator, nu tardiv"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "La copilul sănătos riscul este de aproximativ 2–4%, iar la adult de circa 1–2% — Corect: Riscul 2–4% la copilul sănătos și 1–2% la adult este citat.\n\nStreptococcus pneumoniae este cel mai frecvent agent incriminat (75%) — Corect: Pneumococul este agentul cel mai frecvent, în 75% din cazuri.\n\nVaccinarea antipneumococică este indicată după splenectomie totală, după splenectomii conservative posttraumatice și la trauma splenică tratată non-operator — Corect: Textul cere vaccinarea după splenectomie totală, parțială posttraumatică și după management non-operator.\n\nVaccinarea asigură protecție completă față de toate serotipurile pneumococice și față de celelalte bacterii — Incorect: Textul precizează că vaccinarea nu trebuie considerată protecție totală; răspunsul poate fi inadecvat, iar subtipuri neincluse pot produce sepsis.\n\nSindromul OPSI apare, de regulă, în primele ore postoperator, nu tardiv — Incorect: OPSI nu apare de obicei imediat postoperator.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 342, Consecințe imunologice — OPSI (pagini PDF: 204).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    342
   ],
   "pdfPages": [
    204
   ],
   "section": "Consecințe imunologice — OPSI"
  },
  "learningObjective": "Aplicarea riscului pe grupe de vârstă, a predominanței pneumococului (75%) și a indicațiilor de vaccinare, inclusiv după tratament non-operator.",
  "optionRationales": [
   "Riscul 2–4% la copilul sănătos și 1–2% la adult este citat.",
   "Pneumococul este agentul cel mai frecvent, în 75% din cazuri.",
   "Textul cere vaccinarea după splenectomie totală, parțială posttraumatică și după management non-operator.",
   "Textul precizează că vaccinarea nu trebuie considerată protecție totală; răspunsul poate fi inadecvat, iar subtipuri neincluse pot produce sepsis.",
   "OPSI nu apare de obicei imediat postoperator."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează caracterul tardiv al OPSI și supraestimează protecția vaccinală, două erori de urmărire post-splenectomie."
  },
  "textbookExpressions": [
   "2--4%",
   "75%"
  ]
 },
 {
  "id": "ficat-splina-adv-019",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Anatomia chirurgicală a ficatului se caracterizează prin:",
  "options": [
   "Capsula Glisson, fibroasă, se extinde intraparenchimatos de-a lungul vaselor, precum pediculul portal",
   "Cu excepția ariei nuda (posterior, lângă VCI) și a patului veziculei, ficatul este acoperit de peritoneu visceral",
   "Clasificarea Couinaud împarte ficatul în opt segmente, fiecare cu circulație și drenaj biliar propriu",
   "Ficatul este lipsit de capsulă, fiind acoperit doar de peritoneu pe toată suprafața, inclusiv pe aria nuda",
   "Segmentarea Couinaud recunoaște un singur sector, fără distincție stâng-drept"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Capsula Glisson, fibroasă, se extinde intraparenchimatos de-a lungul vaselor, precum pediculul portal — Corect: Extinderea capsulei Glisson de-a lungul vaselor este explicită.\n\nCu excepția ariei nuda (posterior, lângă VCI) și a patului veziculei, ficatul este acoperit de peritoneu visceral — Corect: Cele două excepții (aria nuda și patul veziculei) sunt enumerate.\n\nClasificarea Couinaud împarte ficatul în opt segmente, fiecare cu circulație și drenaj biliar propriu — Corect: Cele opt segmente cu pedicul propriu sunt enunțate.\n\nFicatul este lipsit de capsulă, fiind acoperit doar de peritoneu pe toată suprafața, inclusiv pe aria nuda — Incorect: Aria nuda și patul veziculei sunt tocmai zonele fără peritoneu visceral.\n\nSegmentarea Couinaud recunoaște un singur sector, fără distincție stâng-drept — Incorect: Clasificarea împarte stâng/drept, sectoare și opt segmente.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 317, Anatomia ficatului — Capsula Glisson și Couinaud (pagini PDF: 187).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    317
   ],
   "pdfPages": [
    187
   ],
   "section": "Anatomia ficatului — Capsula Glisson și Couinaud"
  },
  "learningObjective": "Recunoașterea capsulei Glisson, a celor două arii fără peritoneu visceral și a celor opt segmente Couinaud.",
  "optionRationales": [
   "Extinderea capsulei Glisson de-a lungul vaselor este explicită.",
   "Cele două excepții (aria nuda și patul veziculei) sunt enumerate.",
   "Cele opt segmente cu pedicul propriu sunt enunțate.",
   "Aria nuda și patul veziculei sunt tocmai zonele fără peritoneu visceral.",
   "Clasificarea împarte stâng/drept, sectoare și opt segmente."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează excepțiile peritoneale (aria nuda, patul veziculei) și reduce Couinaud de la opt segmente la un sector unic."
  },
  "textbookExpressions": [
   "capsula Glisson",
   "opt segmente"
  ]
 },
 {
  "id": "ficat-splina-adv-020",
  "topicId": "ficat-splina",
  "type": "CS",
  "stem": "Aspectul CT cu contrast al hemangiomului cavernos hepatic este:",
  "options": [
   "Captare progresivă a contrastului de la periferie către centru, cu o zonă hipodensă centrală",
   "Washout arterial precoce cu inel hiperdens, ca în carcinomul hepatocelular",
   "Defect de captare prin absența celulelor Kupffer, ca în adenom",
   "Cicatrice centrală cu septuri fibroase și ducte biliare, ca în hiperplazia nodulară focală",
   "Masă hipoecogenă cu perete vascularizat, ca în abcesul piogen"
  ],
  "correct": [
   0
  ],
  "explanation": "Captare progresivă a contrastului de la periferie către centru, cu o zonă hipodensă centrală — Corect: Textul descrie captarea progresivă dinspre periferie către centru, cu zonă hipodensă centrală.\n\nWashout arterial precoce cu inel hiperdens, ca în carcinomul hepatocelular — Incorect: Captarea arterială urmată de washout este aspectul tipic al CHC.\n\nDefect de captare prin absența celulelor Kupffer, ca în adenom — Incorect: Adenomul nu conține celule Kupffer și dă defect la 99mTc, nu umplere centripetă CT.\n\nCicatrice centrală cu septuri fibroase și ducte biliare, ca în hiperplazia nodulară focală — Incorect: Cicatricea centrală cu ducte biliare definește HNF.\n\nMasă hipoecogenă cu perete vascularizat, ca în abcesul piogen — Incorect: Masa hipoecogenă cu perete vascularizat descrie abcesul piogen.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 319, Hemangiomul cavernos — CT cu contrast (pagini PDF: 189).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    319
   ],
   "pdfPages": [
    189
   ],
   "section": "Hemangiomul cavernos — CT cu contrast"
  },
  "learningObjective": "Diferențierea umplerii centripete periferie→centru a hemangiomului de washout-ul CHC, de defectul adenomului și de cicatricea HNF.",
  "optionRationales": [
   "Textul descrie captarea progresivă dinspre periferie către centru, cu zonă hipodensă centrală.",
   "Captarea arterială urmată de washout este aspectul tipic al CHC.",
   "Adenomul nu conține celule Kupffer și dă defect la 99mTc, nu umplere centripetă CT.",
   "Cicatricea centrală cu ducte biliare definește HNF.",
   "Masa hipoecogenă cu perete vascularizat descrie abcesul piogen."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează pattern-urile imagistice hemangiom / CHC / HNF / adenom din același capitol de tumori benigne."
  },
  "textbookExpressions": [
   "captarea progresivă",
   "periferia leziunii"
  ]
 },
 {
  "id": "ficat-splina-adv-021",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Adenomul hepatic cu risc înalt de transformare malignă este susținut de:",
  "options": [
   "Prezența activării beta-cateninei pe eșantionul histopatologic, situație în care intervenția chirurgicală este recomandată",
   "Indicația operatorie pentru adenoamele stratificate ca risc înalt, față de monitorizarea celor cu risc scăzut",
   "Continuarea contraceptivelor orale, deoarece oprirea lor nu influențează dimensiunea",
   "Absența oricărui potențial de sângerare sub 10 cm, analog hemangiomului gigant",
   "Captarea intensă la scintigrafia cu 99mTc prin celule Kupffer abundente"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Prezența activării beta-cateninei pe eșantionul histopatologic, situație în care intervenția chirurgicală este recomandată — Corect: Activarea beta-cateninei ca risc crescut, cu indicație chirurgicală, este explicită.\n\nIndicația operatorie pentru adenoamele stratificate ca risc înalt, față de monitorizarea celor cu risc scăzut — Corect: Stratificarea risc înalt (operație) versus scăzut (monitorizare) este descrisă.\n\nContinuarea contraceptivelor orale, deoarece oprirea lor nu influențează dimensiunea — Incorect: Întreruperea contraceptivelor poate duce la regresie și este prima măsură la leziunea asimptomatică.\n\nAbsența oricărui potențial de sângerare sub 10 cm, analog hemangiomului gigant — Incorect: Complicațiile (creștere, sângerare) sunt mai frecvente peste 5 cm, nu sunt absente sub 10 cm.\n\nCaptarea intensă la scintigrafia cu 99mTc prin celule Kupffer abundente — Incorect: Adenomul nu conține celule Kupffer; captarea intensă nu este pattern-ul său.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 321, Adenomul hepatic — Beta-catenina și stratificare (pagini PDF: 191).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    321
   ],
   "pdfPages": [
    191
   ],
   "section": "Adenomul hepatic — Beta-catenina și stratificare"
  },
  "learningObjective": "Recunoașterea beta-cateninei ca marker de risc malign și a stratificării operator versus monitorizare, plus oprirea estrogenilor.",
  "optionRationales": [
   "Activarea beta-cateninei ca risc crescut, cu indicație chirurgicală, este explicită.",
   "Stratificarea risc înalt (operație) versus scăzut (monitorizare) este descrisă.",
   "Întreruperea contraceptivelor poate duce la regresie și este prima măsură la leziunea asimptomatică.",
   "Complicațiile (creștere, sângerare) sunt mai frecvente peste 5 cm, nu sunt absente sub 10 cm.",
   "Adenomul nu conține celule Kupffer; captarea intensă nu este pattern-ul său."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă oprirea estrogenilor și confundă pragul de 5 cm al sângerării cu 10 cm al hemangiomului gigant."
  },
  "textbookExpressions": [
   "beta-cateninei",
   "contraceptivelor orale"
  ]
 },
 {
  "id": "ficat-splina-adv-022",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Screening-ul și markerii carcinomului hepatocelular:",
  "options": [
   "Pacienții cirotici trebuie evaluați imagistic bianual prin ultrasonografie abdominală",
   "AFP de 500–1.000 mg/dL sau mai mult este aproape constant asociată cu CHC",
   "Valori de 200–400 mg/dL pot apărea la cirotici fără CHC",
   "Screening-ul se face doar când apare icterul, encefalopatia sau ascita de novo, ultrasonografia bianuală fiind inutilă",
   "Biopsia este primul pas, chiar când există captare arterială cu washout tipic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pacienții cirotici trebuie evaluați imagistic bianual prin ultrasonografie abdominală — Corect: Evaluarea bianuală prin US este explicită.\n\nAFP de 500–1.000 mg/dL sau mai mult este aproape constant asociată cu CHC — Corect: Pragul 500–1.000 mg/dL ca aproape diagnostic este citat.\n\nValori de 200–400 mg/dL pot apărea la cirotici fără CHC — Corect: Intervalul 200–400 mg/dL la cirotic fără CHC este enunțat.\n\nScreening-ul se face doar când apare icterul, encefalopatia sau ascita de novo, ultrasonografia bianuală fiind inutilă — Incorect: Decompensarea bruscă ridică suspiciunea, dar screening-ul bianual precedă acest moment.\n\nBiopsia este primul pas, chiar când există captare arterială cu washout tipic — Incorect: Biopsia se rezervă când aspectul imagistic tipic lipsește.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 321, Carcinomul hepatocelular — US bianuală și praguri AFP (pagini PDF: 191).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    321
   ],
   "pdfPages": [
    191
   ],
   "section": "Carcinomul hepatocelular — US bianuală și praguri AFP"
  },
  "learningObjective": "Aplicarea US bianuale la cirotic și a pragurilor AFP (200–400 în ciroză versus 500–1.000 aproape diagnostic).",
  "optionRationales": [
   "Evaluarea bianuală prin US este explicită.",
   "Pragul 500–1.000 mg/dL ca aproape diagnostic este citat.",
   "Intervalul 200–400 mg/dL la cirotic fără CHC este enunțat.",
   "Decompensarea bruscă ridică suspiciunea, dar screening-ul bianual precedă acest moment.",
   "Biopsia se rezervă când aspectul imagistic tipic lipsește."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează pragurile AFP 200–400 versus 500–1.000 și anulează US-ul bianual în favoarea biopsiei premature."
  },
  "textbookExpressions": [
   "bianual",
   "60-80%"
  ]
 },
 {
  "id": "ficat-splina-adv-023",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Chemoembolizarea și radioembolizarea în CHC:",
  "options": [
   "Chemoembolizarea infuzează de obicei doxorubicină plus particule emboligene pe artera hepatică",
   "Radioembolizarea folosește Y90 în microsfere de sticlă; diametrul este prea mic pentru ocluzie arterială reală",
   "Hepatocitele normale primesc circa 70% din necesarul sanguin prin fluxul venos portal, ceea ce permite doze locale mai mari cu mai puține efecte sistemice",
   "Agentul chimioterapic citat este cisplatina, nu doxorubicina",
   "Hepatocitele normale sunt hrănite aproape doar arterial, identic hepatocarcinomului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Chemoembolizarea infuzează de obicei doxorubicină plus particule emboligene pe artera hepatică — Corect: Doxorubicina plus emboligen pe artera hepatică este explicită.\n\nRadioembolizarea folosește Y90 în microsfere de sticlă; diametrul este prea mic pentru ocluzie arterială reală — Corect: Y90, microsferele de sticlă și absența ocluziei reale sunt descrise.\n\nHepatocitele normale primesc circa 70% din necesarul sanguin prin fluxul venos portal, ceea ce permite doze locale mai mari cu mai puține efecte sistemice — Corect: Cei 70% din necesarul sanguin pe cale portală sunt citați.\n\nAgentul chimioterapic citat este cisplatina, nu doxorubicina — Incorect: Agentul citat este doxorubicina (Adriamycin), nu cisplatina.\n\nHepatocitele normale sunt hrănite aproape doar arterial, identic hepatocarcinomului — Incorect: CHC este predominant arterial; hepatocitul normal este predominant portal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 322, CHC — TACE (doxorubicină) și Y90 (pagini PDF: 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    322
   ],
   "pdfPages": [
    192
   ],
   "section": "CHC — TACE (doxorubicină) și Y90"
  },
  "learningObjective": "Contrastarea TACE cu doxorubicină de radioembolizarea Y90 non-ocluzivă și a dependenței portale (70%) a hepatocitului normal.",
  "optionRationales": [
   "Doxorubicina plus emboligen pe artera hepatică este explicită.",
   "Y90, microsferele de sticlă și absența ocluziei reale sunt descrise.",
   "Cei 70% din necesarul sanguin pe cale portală sunt citați.",
   "Agentul citat este doxorubicina (Adriamycin), nu cisplatina.",
   "CHC este predominant arterial; hepatocitul normal este predominant portal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă doxorubicina cu cisplatina și oglindește 70% portal versus arterial între hepatocit și CHC."
  },
  "textbookExpressions": [
   "doxorubicină",
   "Y90"
  ]
 },
 {
  "id": "ficat-splina-adv-024",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "După rezecția CHC pe ficat cirotic, recidiva și diseminarea:",
  "options": [
   "Parenchimul restant este locul preferențial de recidivă la peste 50% dintre bolnavi",
   "Locurile principale de metastazare sunt plămânul și sistemul osos",
   "Creierul și metastazele peritoneale sunt mult mai puțin frecvente",
   "Hepatita persistentă și leziunile satelite neidentificate la rezecția inițială explică recidiva în restant",
   "Metastazele cerebrale depășesc numeric pe cele pulmonare și osoase"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Parenchimul restant este locul preferențial de recidivă la peste 50% dintre bolnavi — Corect: Pragul de peste 50% recidivă în restant este explicit.\n\nLocurile principale de metastazare sunt plămânul și sistemul osos — Corect: Plămânul și osul sunt locurile principale.\n\nCreierul și metastazele peritoneale sunt mult mai puțin frecvente — Corect: Creierul și peritoneul sunt mult mai puțin frecvente.\n\nHepatita persistentă și leziunile satelite neidentificate la rezecția inițială explică recidiva în restant — Corect: Textul invocă hepatita persistentă și satelitele neidentificate.\n\nMetastazele cerebrale depășesc numeric pe cele pulmonare și osoase — Incorect: Ierarhia metastazelor este inversată față de text.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 322, CHC rezecat — Recidivă >50% și metastaze (pagini PDF: 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    322
   ],
   "pdfPages": [
    192
   ],
   "section": "CHC rezecat — Recidivă >50% și metastaze"
  },
  "learningObjective": "Fixarea recidivei în parenchimul restant (>50%) și a ierarhiei plămân/os față de creier/peritoneu.",
  "optionRationales": [
   "Pragul de peste 50% recidivă în restant este explicit.",
   "Plămânul și osul sunt locurile principale.",
   "Creierul și peritoneul sunt mult mai puțin frecvente.",
   "Textul invocă hepatita persistentă și satelitele neidentificate.",
   "Ierarhia metastazelor este inversată față de text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Minimizează recidiva de 50% și inversează ierarhia plămân/os versus creier."
  },
  "textbookExpressions": [
   "50%",
   "plămânul"
  ]
 },
 {
  "id": "ficat-splina-adv-025",
  "topicId": "ficat-splina",
  "type": "CS",
  "stem": "Colangiocarcinomul hilar (tumoră Klatskin) este sugerat de:",
  "options": [
   "Icter cu dilatarea ductelor biliare intrahepatice și veziculă biliară de dimensiuni mici",
   "O masă periferică asimptomatică, fără icter, ca leziunile periferice",
   "Captare arterială cu washout și inel hiperdens, diagnostică pentru CHC",
   "Criteriile Milano (unică <5 cm sau ≤3 tumori ≤3 cm) ca indicație de transplant",
   "Chistadenoame mucinoase la femeia peste 40 de ani, cu septuri și noduli intramurali"
  ],
  "correct": [
   0
  ],
  "explanation": "Icter cu dilatarea ductelor biliare intrahepatice și veziculă biliară de dimensiuni mici — Corect: Combinația icter + VBIH dilatate + veziculă mică este înalt sugestivă pentru colangiocarcinom hilar sau central.\n\nO masă periferică asimptomatică, fără icter, ca leziunile periferice — Incorect: Leziunile periferice pot fi asimptomatice, fără acest pattern de icter.\n\nCaptare arterială cu washout și inel hiperdens, diagnostică pentru CHC — Incorect: Washout-ul arterial este al CHC, nu al Klatskin.\n\nCriteriile Milano (unică <5 cm sau ≤3 tumori ≤3 cm) ca indicație de transplant — Incorect: Milano ghidează transplantul în CHC.\n\nChistadenoame mucinoase la femeia peste 40 de ani, cu septuri și noduli intramurali — Incorect: Chistadenomul este o tumoră chistică mucinoasă, nu Klatskin.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 322, Colangiocarcinomul — Tumora Klatskin (pagini PDF: 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    322
   ],
   "pdfPages": [
    192
   ],
   "section": "Colangiocarcinomul — Tumora Klatskin"
  },
  "learningObjective": "Recunoașterea icterului obstructiv cu VBIH dilatate și colecist mic ca semn de leziune hilară/centrală, distinct de CHC și de chistadenom.",
  "optionRationales": [
   "Combinația icter + VBIH dilatate + veziculă mică este înalt sugestivă pentru colangiocarcinom hilar sau central.",
   "Leziunile periferice pot fi asimptomatice, fără acest pattern de icter.",
   "Washout-ul arterial este al CHC, nu al Klatskin.",
   "Milano ghidează transplantul în CHC.",
   "Chistadenomul este o tumoră chistică mucinoasă, nu Klatskin."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește semnul veziculei mici + VBIH dilatate cu washout-ul CHC sau cu criteriile Milano."
  },
  "textbookExpressions": [
   "Klatskin",
   "vezicula biliară"
  ]
 },
 {
  "id": "ficat-splina-adv-026",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Neoplasmul chistic hepatic (chistadenom/chistadenocarcinom):",
  "options": [
   "Chistadenoamele apar mai frecvent la femei după 40 de ani, recidivează și au potențial de transformare malignă",
   "Sunt de obicei formațiuni unice voluminoase (peste 10 cm), septate, cu perete subțire și conținut mucinos",
   "Marsupializarea, drenajul peritoneal sau în ansă intestinală sunt contraindicate, din cauza recidivei, infecției și a riscului de malignizare",
   "Aspirația prin puncție vindecă definitiv, ca o tentativă în chistul simplu",
   "Decorticarea este tratamentul de elecție, identic chistului simplu simptomatic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Chistadenoamele apar mai frecvent la femei după 40 de ani, recidivează și au potențial de transformare malignă — Corect: Predilecția feminină după 40 de ani, recidiva și potențialul malign sunt explicite.\n\nSunt de obicei formațiuni unice voluminoase (peste 10 cm), septate, cu perete subțire și conținut mucinos — Corect: Pragul peste 10 cm, septurile, peretele subțire și mucina sunt descrise.\n\nMarsupializarea, drenajul peritoneal sau în ansă intestinală sunt contraindicate, din cauza recidivei, infecției și a riscului de malignizare — Corect: Contraindicația marsupializării și a drenajelor este enunțată.\n\nAspirația prin puncție vindecă definitiv, ca o tentativă în chistul simplu — Incorect: Puncția nu elimină riscul de malignizare; recidiva este regula procedurilor non-rezecționale.\n\nDecorticarea este tratamentul de elecție, identic chistului simplu simptomatic — Incorect: Decorticarea este standardul chistului simplu simptomatic, nu al chistadenomului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 323, Chistadenomul hepatic — Contraindicația marsupializării (pagini PDF: 193).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    323
   ],
   "pdfPages": [
    193
   ],
   "section": "Chistadenomul hepatic — Contraindicația marsupializării"
  },
  "learningObjective": "Contrastarea chistadenomului (femeie >40 ani, >10 cm, mucinos) de chistul simplu; interdicția procedurilor non-rezecționale.",
  "optionRationales": [
   "Predilecția feminină după 40 de ani, recidiva și potențialul malign sunt explicite.",
   "Pragul peste 10 cm, septurile, peretele subțire și mucina sunt descrise.",
   "Contraindicația marsupializării și a drenajelor este enunțată.",
   "Puncția nu elimină riscul de malignizare; recidiva este regula procedurilor non-rezecționale.",
   "Decorticarea este standardul chistului simplu simptomatic, nu al chistadenomului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Aplică decorticarea/puncția chistului simplu pe o leziune cu potențial malign, ignorând interdicția marsupializării."
  },
  "textbookExpressions": [
   "Chistadenoamele",
   "marsupializarea"
  ]
 },
 {
  "id": "ficat-splina-adv-027",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Abcesul piogen hepatic:",
  "options": [
   "Pacienții acuză dureri în hipocondrul drept, febră și leucocitoză; fosfataza alcalină este crescută la majoritatea",
   "În majoritatea cazurilor sursa este o infecție digestivă (diverticulită, apendicită) sau a arborelui biliar",
   "Aspirația percutanată cu tub de drenaj ajută diagnosticul și remiterea; antibioticele se adaptează culturilor",
   "Drenajul percutanat este inutil, metronidazolul izolat fiind suficient, ca în abcesul amebian",
   "Sursa primară nu trebuie căutată, abcesul fiind o însămânțare hematogenă izolată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pacienții acuză dureri în hipocondrul drept, febră și leucocitoză; fosfataza alcalină este crescută la majoritatea — Corect: Durerea, febra, leucocitoza și FA crescută sunt explicite.\n\nÎn majoritatea cazurilor sursa este o infecție digestivă (diverticulită, apendicită) sau a arborelui biliar — Corect: Originea digestivă sau biliară, nu doar hematogenă, este enunțată.\n\nAspirația percutanată cu tub de drenaj ajută diagnosticul și remiterea; antibioticele se adaptează culturilor — Corect: Aspirația, drenajul și adaptarea antibioticelor sunt descrise.\n\nDrenajul percutanat este inutil, metronidazolul izolat fiind suficient, ca în abcesul amebian — Incorect: Metronidazolul fără drenaj este strategia abcesului amebian, nu a celui piogen.\n\nSursa primară nu trebuie căutată, abcesul fiind o însămânțare hematogenă izolată — Incorect: Sursa primară trebuie identificată și tratată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 323, Abcesul piogen — Drenaj percutanat (pagini PDF: 193).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    323
   ],
   "pdfPages": [
    193
   ],
   "section": "Abcesul piogen — Drenaj percutanat"
  },
  "learningObjective": "Recunoașterea triadei clinic-FA, a originii biliare/digestive și a drenajului plus cultură, versus confuzia cu abcesul amebian (fără drenaj).",
  "optionRationales": [
   "Durerea, febra, leucocitoza și FA crescută sunt explicite.",
   "Originea digestivă sau biliară, nu doar hematogenă, este enunțată.",
   "Aspirația, drenajul și adaptarea antibioticelor sunt descrise.",
   "Metronidazolul fără drenaj este strategia abcesului amebian, nu a celui piogen.",
   "Sursa primară trebuie identificată și tratată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Aplică schema amebiană (metronidazol, fără drenaj) pe abcesul piogen, care cere tub și cultură."
  },
  "textbookExpressions": [
   "Fosfataza alcalină",
   "Aspiraţia percutanată"
  ]
 },
 {
  "id": "ficat-splina-adv-028",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Abcesul amebian hepatic:",
  "options": [
   "Apare la circa 10% dintre pacienții infectați; ficatul este cel mai susceptibil situs extraintestinal",
   "Aspirația evidențiază un conținut steril, cu aspect de „pastă de anșoa”",
   "Răspunde foarte bine la metronidazol și, spre deosebire de abcesul piogen, nu necesită drenaj percutanat",
   "Diagnosticul impune puncție-biopsie hepatică de primă intenție, serologia fiind inutilă",
   "Drenajul percutanat este regula, identic abcesului piogen, metronidazolul fiind ineficient"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Apare la circa 10% dintre pacienții infectați; ficatul este cel mai susceptibil situs extraintestinal — Corect: Cei 10% și predilecția hepatică extraintestinală sunt explicite.\n\nAspirația evidențiază un conținut steril, cu aspect de „pastă de anșoa” — Corect: Conținutul steril cu aspect de pastă de anșoa este citat.\n\nRăspunde foarte bine la metronidazol și, spre deosebire de abcesul piogen, nu necesită drenaj percutanat — Corect: Răspunsul la metronidazol fără drenaj, spre deosebire de piogen, este enunțat.\n\nDiagnosticul impune puncție-biopsie hepatică de primă intenție, serologia fiind inutilă — Incorect: Anticorpii anti-amibă sunt un test util; puncția diagnostică nu este primul pas.\n\nDrenajul percutanat este regula, identic abcesului piogen, metronidazolul fiind ineficient — Incorect: Drenajul este al piogenului, nu al amebianului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 324, Abcesul amebian — Pastă de anșoa și metronidazol (pagini PDF: 194).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    324
   ],
   "pdfPages": [
    194
   ],
   "section": "Abcesul amebian — Pastă de anșoa și metronidazol"
  },
  "learningObjective": "Contrastarea ratei de 10%, a aspectului de pastă de anșoa și a metronidazolului fără drenaj față de strategia piogenică.",
  "optionRationales": [
   "Cei 10% și predilecția hepatică extraintestinală sunt explicite.",
   "Conținutul steril cu aspect de pastă de anșoa este citat.",
   "Răspunsul la metronidazol fără drenaj, spre deosebire de piogen, este enunțat.",
   "Anticorpii anti-amibă sunt un test util; puncția diagnostică nu este primul pas.",
   "Drenajul este al piogenului, nu al amebianului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează indicația de drenaj între amebian și piogen și neagă metronidazolul."
  },
  "textbookExpressions": [
   "metronidazol",
   "pastă de an"
  ]
 },
 {
  "id": "ficat-splina-adv-029",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Intoxicația cu ciuperci sălbatice și hepatita fulminantă:",
  "options": [
   "Disfuncția hepatică apare la 8–12 săptămâni de la simptomele de debut",
   "Encefalopatia hepatică apare precoce și poate progresa spre comă, herniere de trunchi și deces fără transplant",
   "Majoritatea bolnavilor decedează la 1–2 săptămâni de la prezentare în lipsa transplantului",
   "Hipertensiunea portală și malnutriția cronică sunt constante, transplantul fiind tehnic mai dificil decât în ciroză",
   "Perioada de observație trebuie prelungită maximal, pentru a nu „risipi” un grefon"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Disfuncția hepatică apare la 8–12 săptămâni de la simptomele de debut — Corect: Intervalul 8–12 săptămâni este explicit.\n\nEncefalopatia hepatică apare precoce și poate progresa spre comă, herniere de trunchi și deces fără transplant — Corect: Encefalopatia precoce și riscul de herniere/deces sunt descrise.\n\nMajoritatea bolnavilor decedează la 1–2 săptămâni de la prezentare în lipsa transplantului — Corect: Decesul la 1–2 săptămâni fără transplant este citat.\n\nHipertensiunea portală și malnutriția cronică sunt constante, transplantul fiind tehnic mai dificil decât în ciroză — Incorect: Pacienții nu au modificări hepatice cronice; HTP și malnutriția lipsesc, deci transplantul este tehnic mai ușor.\n\nPerioada de observație trebuie prelungită maximal, pentru a nu „risipi” un grefon — Incorect: Observația prelungită riscă depășirea ferestrei de transplant.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 333, Insuficiența hepatică fulminantă — Ciuperci (pagini PDF: 195).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    333
   ],
   "pdfPages": [
    195
   ],
   "section": "Insuficiența hepatică fulminantă — Ciuperci"
  },
  "learningObjective": "Fixarea ferestrelor 8–12 săptămâni până la disfuncție și 1–2 săptămâni până la deces fără grefă, cu absența HTP a cirozei.",
  "optionRationales": [
   "Intervalul 8–12 săptămâni este explicit.",
   "Encefalopatia precoce și riscul de herniere/deces sunt descrise.",
   "Decesul la 1–2 săptămâni fără transplant este citat.",
   "Pacienții nu au modificări hepatice cronice; HTP și malnutriția lipsesc, deci transplantul este tehnic mai ușor.",
   "Observația prelungită riscă depășirea ferestrei de transplant."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Prelungește observația dincolo de fereastra de grefă și atribuie fulminantului HTP-ul cirozei."
  },
  "textbookExpressions": [
   "8-12 săptămâni",
   "transplant hepatic"
  ]
 },
 {
  "id": "ficat-splina-adv-030",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Filtrarea splenică a sângelui se caracterizează prin:",
  "options": [
   "Splina filtrează aproximativ 350 L de sânge pe zi",
   "Eritrocitele sunt îndepărtate în pulpa roșie la 110–120 de zile, prin pierderea deformabilității",
   "O treime din trombocite este depozitată în splină",
   "Hematiile normale suferă îndepărtarea corpurilor Howell-Jolly, Heinz și Pappenheimer în sinusurile splenice",
   "Durata de viață a hematiei în circulație este de 30 de zile, analog trombocitului"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Splina filtrează aproximativ 350 L de sânge pe zi — Corect: Cei 350 L/zi sunt expliciți.\n\nEritrocitele sunt îndepărtate în pulpa roșie la 110–120 de zile, prin pierderea deformabilității — Corect: Intervalul 110–120 de zile și sediul în pulpa roșie sunt citați.\n\nO treime din trombocite este depozitată în splină — Corect: Depozitul de o treime din trombocite este enunțat.\n\nHematiile normale suferă îndepărtarea corpurilor Howell-Jolly, Heinz și Pappenheimer în sinusurile splenice — Corect: Hematiile normale suferă îndepărtarea corpurilor Howell-Jolly, Heinz și Pappenheimer.\n\nDurata de viață a hematiei în circulație este de 30 de zile, analog trombocitului — Incorect: 30 de zile nu este durata citată a hematiei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 334, Fiziologia splinei — Filtrare 350 L/zi și pulpa roșie (pagini PDF: 196).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    334
   ],
   "pdfPages": [
    196
   ],
   "section": "Fiziologia splinei — Filtrare 350 L/zi și pulpa roșie"
  },
  "learningObjective": "Aplicarea debitului de 350 L/zi, a duratei 110–120 de zile și a depozitului plachetar de 1/3, versus pitting-ul corpurilor de incluziune.",
  "optionRationales": [
   "Cei 350 L/zi sunt expliciți.",
   "Intervalul 110–120 de zile și sediul în pulpa roșie sunt citați.",
   "Depozitul de o treime din trombocite este enunțat.",
   "Hematiile normale suferă îndepărtarea corpurilor Howell-Jolly, Heinz și Pappenheimer.",
   "30 de zile nu este durata citată a hematiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 110–120 de zile cu durata scurtă a trombocitului și neagă pitting-ul Howell-Jolly."
  },
  "textbookExpressions": [
   "350 L",
   "110-120 de zile"
  ]
 },
 {
  "id": "ficat-splina-adv-031",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Scintigrafia splenică cu coloizi de technetiu este utilă pentru:",
  "options": [
   "Decelarea splinelor accesorii când, după splenectomie, nu se controlează boala hematologică sau aceasta reapare",
   "Diferențierea unei spline accesorii de o tumoră a cozii de pancreas",
   "Splenoza apare ca absență de captare izotopică, nu ca hipercaptare ectopică",
   "Stadializarea de primă intenție a lacerației splenice la instabil, în locul laparotomiei",
   "Înlocuirea CT-ului cu contrast în traumatismul abdominal stabil"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Decelarea splinelor accesorii când, după splenectomie, nu se controlează boala hematologică sau aceasta reapare — Corect: Rolul în recidiva hematologică prin splină accesorie omisă este explicit.\n\nDiferențierea unei spline accesorii de o tumoră a cozii de pancreas — Corect: Diferențierea de tumora cozii de pancreas este enunțată.\n\nSplenoza apare ca absență de captare izotopică, nu ca hipercaptare ectopică — Incorect: Splenoza este evidențiată ca hipercaptare ectopică, nu ca absență de captare.\n\nStadializarea de primă intenție a lacerației splenice la instabil, în locul laparotomiei — Incorect: La instabil, laparotomia/splenectomia rămân standardul.\n\nÎnlocuirea CT-ului cu contrast în traumatismul abdominal stabil — Incorect: CT-ul cu contrast este cea mai utilă tehnică pentru dimensiuni și leziuni; eco-ul e preferat la urmărire pentru lipsa iradierii.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 336, 337, Imagistica splinei — Scintigrafie, splină accesorie și splenoză (pagini PDF: 198, 199).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    336,
    337
   ],
   "pdfPages": [
    198,
    199
   ],
   "section": "Imagistica splinei — Scintigrafie, splină accesorie și splenoză"
  },
  "learningObjective": "Recunoașterea indicațiilor scintigrafiei (splină accesorie, diagnostic diferențial cu coada pancreasului, splenoză), versus rolul CT/FAST în traumă.",
  "optionRationales": [
   "Rolul în recidiva hematologică prin splină accesorie omisă este explicit.",
   "Diferențierea de tumora cozii de pancreas este enunțată.",
   "Splenoza este evidențiată ca hipercaptare ectopică, nu ca absență de captare.",
   "La instabil, laparotomia/splenectomia rămân standardul.",
   "CT-ul cu contrast este cea mai utilă tehnică pentru dimensiuni și leziuni; eco-ul e preferat la urmărire pentru lipsa iradierii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune scintigrafia în locul CT/FAST din traumă și uită că instabilul nu se stadializează izotopic."
  },
  "textbookExpressions": [
   "Splenoza",
   "cozii de pancreas"
  ]
 },
 {
  "id": "ficat-splina-adv-032",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Anemiile hemolitice autoimune și splenectomia:",
  "options": [
   "Formele cu anticorpi la cald (de obicei IgG) nu implică activarea complementului și răspund la splenectomie",
   "Formele cu anticorpi la rece (de regulă IgM) activează complementul și aglutinează, fără a fi responsive la splenectomie",
   "Anemiile Coombs-negative medicamentoase, toxice sau infecțioase se tratează cel mai bine prin înlăturarea agentului cauzator",
   "Formele IgM la rece sunt indicația clasică de splenectomie, IgG la cald fiind neresponsive",
   "Splenectomia este inutilă în sferocitoza ereditară, hematiile rigide ocolind filtrarea splenică"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Formele cu anticorpi la cald (de obicei IgG) nu implică activarea complementului și răspund la splenectomie — Corect: Răspunsul formelor IgG la cald, fără CN, este explicit.\n\nFormele cu anticorpi la rece (de regulă IgM) activează complementul și aglutinează, fără a fi responsive la splenectomie — Corect: Formele IgM la rece, cu complement, fără răspuns la splenectomie, sunt enunțate.\n\nAnemiile Coombs-negative medicamentoase, toxice sau infecțioase se tratează cel mai bine prin înlăturarea agentului cauzator — Corect: Evicțiunea agentului în Coombs-negativ este descrisă.\n\nFormele IgM la rece sunt indicația clasică de splenectomie, IgG la cald fiind neresponsive — Incorect: Relația este inversată față de text.\n\nSplenectomia este inutilă în sferocitoza ereditară, hematiile rigide ocolind filtrarea splenică — Incorect: Sferocitoza ereditară este o indicație uzuală de splenectomie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 339, Hemoliza autoimună — Anticorpi la cald versus la rece (pagini PDF: 201).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    339
   ],
   "pdfPages": [
    201
   ],
   "section": "Hemoliza autoimună — Anticorpi la cald versus la rece"
  },
  "learningObjective": "Contrastarea IgG la cald (fără complement, răspuns la splenectomie) de IgM la rece (complement, fără răspuns), plus Coombs-negativul prin evicțiune.",
  "optionRationales": [
   "Răspunsul formelor IgG la cald, fără CN, este explicit.",
   "Formele IgM la rece, cu complement, fără răspuns la splenectomie, sunt enunțate.",
   "Evicțiunea agentului în Coombs-negativ este descrisă.",
   "Relația este inversată față de text.",
   "Sferocitoza ereditară este o indicație uzuală de splenectomie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește IgG-cald (răspunde) cu IgM-rece (nu răspunde), perechea clasică de splenectomie din tabelul 20-7."
  },
  "textbookExpressions": [
   "anticorpi la cald",
   "splenectomie"
  ]
 },
 {
  "id": "ficat-splina-adv-033",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Trombocitoza post-splenectomie și prevenția trombozei:",
  "options": [
   "Terapia antiagregantă se inițiază la trombocite >400.000/mm³, precum și la ceilalți pacienți dacă numărul depășește 750.000/mm³",
   "Antiagregarea se menține până la revenirea trombocitelor la normal",
   "Tratamentul anticoagulant cu heparină sau warfarină nu aduce beneficii și trebuie evitat; trombocitozele extreme se tratează cu hidroxiuree",
   "Heparina și warfarina sunt superioare antiagregării și se prescriu de la 200.000/mm³",
   "Sindromul Waterhouse-Friderichsen (infarct suprarenal) face ca vaccinarea pneumococică să fie superfluă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Terapia antiagregantă se inițiază la trombocite >400.000/mm³, precum și la ceilalți pacienți dacă numărul depășește 750.000/mm³ — Corect: Cele două praguri de antiagregare sunt explicite.\n\nAntiagregarea se menține până la revenirea trombocitelor la normal — Corect: Durata până la normalizarea trombocitelor este enunțată.\n\nTratamentul anticoagulant cu heparină sau warfarină nu aduce beneficii și trebuie evitat; trombocitozele extreme se tratează cu hidroxiuree — Corect: Evitarea heparinei/warfarinei și hidroxiureea sunt descrise.\n\nHeparina și warfarina sunt superioare antiagregării și se prescriu de la 200.000/mm³ — Incorect: Anticoagularea nu aduce beneficii; pragul 200.000 nu figurează.\n\nSindromul Waterhouse-Friderichsen (infarct suprarenal) face ca vaccinarea pneumococică să fie superfluă — Incorect: Waterhouse-Friderichsen este o complicație a OPSI, nu un argument contra vaccinării.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 342, Post-splenectomie — Praguri 400.000/750.000 și hidroxiuree (pagini PDF: 204).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    342
   ],
   "pdfPages": [
    204
   ],
   "section": "Post-splenectomie — Praguri 400.000/750.000 și hidroxiuree"
  },
  "learningObjective": "Aplicarea pragurilor de antiagregare 400.000 versus 750.000, a inutilității heparinei/warfarinei și a hidroxiureei în trombocitoza extremă.",
  "optionRationales": [
   "Cele două praguri de antiagregare sunt explicite.",
   "Durata până la normalizarea trombocitelor este enunțată.",
   "Evitarea heparinei/warfarinei și hidroxiureea sunt descrise.",
   "Anticoagularea nu aduce beneficii; pragul 200.000 nu figurează.",
   "Waterhouse-Friderichsen este o complicație a OPSI, nu un argument contra vaccinării."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune heparina înaintea antiagregării și inversează pragurile 400.000/750.000, lângă falsa scutire de vaccin prin Waterhouse-Friderichsen."
  },
  "textbookExpressions": [
   "750.000",
   "hidroxiuree"
  ]
 },
 {
  "id": "ficat-splina-adv-034",
  "topicId": "ficat-splina",
  "type": "CS",
  "stem": "Hepatocitele adulte regenerează întreaga masă celulară hepatică la fiecare:",
  "options": [
   "50 de zile",
   "7 zile",
   "110–120 de zile",
   "3–5 zile",
   "1 an"
  ],
  "correct": [
   0
  ],
  "explanation": "50 de zile — Corect: Textul precizează că hepatocitele se divid continuu și pot regenera întreaga masă celulară la fiecare 50 de zile.\n\n7 zile — Incorect: 7 zile este o fereastră post-splenectomie (leucocite), nu regenerarea hepatică.\n\n110–120 de zile — Incorect: 110–120 de zile este durata de viață a eritrocitului în pulpa roșie.\n\n3–5 zile — Incorect: 3–5 zile este fereastra de producție a factorilor după hepatectomie parțială, din alt capitol.\n\n1 an — Incorect: 1 an depășește ciclul citat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 317, Fiziologia ficatului — Regenerarea hepatocitară (pagini PDF: 187).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    317
   ],
   "pdfPages": [
    187
   ],
   "section": "Fiziologia ficatului — Regenerarea hepatocitară"
  },
  "learningObjective": "Recunoașterea ciclului de 50 de zile al masei hepatocitare, distinct de durata de viață a hematiei (110–120 de zile) din același capitol.",
  "optionRationales": [
   "Textul precizează că hepatocitele se divid continuu și pot regenera întreaga masă celulară la fiecare 50 de zile.",
   "7 zile este o fereastră post-splenectomie (leucocite), nu regenerarea hepatică.",
   "110–120 de zile este durata de viață a eritrocitului în pulpa roșie.",
   "3–5 zile este fereastra de producție a factorilor după hepatectomie parțială, din alt capitol.",
   "1 an depășește ciclul citat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 50 de zile cu 110–120 de zile (hematia) sau cu 5–7 zile (leucocite post-splenectomie), trei cifre din același capitol."
  },
  "textbookExpressions": [
   "50 de zile",
   "se divid continuu"
  ]
 },
 {
  "id": "ficat-splina-adv-035",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Ligamentele și imunitatea hepatică se caracterizează prin:",
  "options": [
   "Ligamentele falciform, coronar și triunghiular atașează ficatul de diafragm și de peretele abdominal anterior",
   "Ligamentul gastrohepatic (omentul mic) se extinde de la ficat la mica curbură gastrică și la prima porțiune a duodenului",
   "Celulele Kupffer reprezintă 80–90% din toate macrofagele fixe din organism și se regenerează periodic",
   "Ficatul este lipsit de ligamente, fiind mobil față de diafragm pe toată suprafața",
   "Celulele Kupffer lipsesc din ficat, imunitatea reticuloendotelială fiind atribuită doar splinei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ligamentele falciform, coronar și triunghiular atașează ficatul de diafragm și de peretele abdominal anterior — Corect: Cele trei ligamente și inserția diafragmatică/parietală sunt explicite.\n\nLigamentul gastrohepatic (omentul mic) se extinde de la ficat la mica curbură gastrică și la prima porțiune a duodenului — Corect: Traiectul ligamentului gastrohepatic către mica curbură și D1 este enunțat.\n\nCelulele Kupffer reprezintă 80–90% din toate macrofagele fixe din organism și se regenerează periodic — Corect: Ponderea 80–90% și regenerarea periodică sunt citate.\n\nFicatul este lipsit de ligamente, fiind mobil față de diafragm pe toată suprafața — Incorect: Ligamentele atașează tocmai ficatul de diafragm și perete.\n\nCelulele Kupffer lipsesc din ficat, imunitatea reticuloendotelială fiind atribuită doar splinei — Incorect: Kupffer sunt localizate în endoteliul hepatic, nu lipsesc.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 317, Anatomia ficatului — Ligamente și celule Kupffer (pagini PDF: 187).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    317
   ],
   "pdfPages": [
    187
   ],
   "section": "Anatomia ficatului — Ligamente și celule Kupffer"
  },
  "learningObjective": "Recunoașterea celor trei ligamente de suspensie, a omentului mic și a ponderii 80–90% a celulelor Kupffer între macrofagele fixe.",
  "optionRationales": [
   "Cele trei ligamente și inserția diafragmatică/parietală sunt explicite.",
   "Traiectul ligamentului gastrohepatic către mica curbură și D1 este enunțat.",
   "Ponderea 80–90% și regenerarea periodică sunt citate.",
   "Ligamentele atașează tocmai ficatul de diafragm și perete.",
   "Kupffer sunt localizate în endoteliul hepatic, nu lipsesc."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează ligamentele de suspensie și mută imunitatea reticuloendotelială exclusiv la splină, ignorând 80–90% Kupffer."
  },
  "textbookExpressions": [
   "ligamentul falciform",
   "80-90%"
  ]
 },
 {
  "id": "ficat-splina-adv-036",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Urmărirea hemangiomului cavernos gigant pe termen lung arată:",
  "options": [
   "Studiile de peste 10 ani confirmă absența hemoragiilor spontane sau a rupturilor",
   "Durerea abdominală ocazională are, în majoritatea cazurilor, o altă etiologie decât hemangiomul",
   "Ruptura spontană este regula după 10 ani, rezecția fiind indicată la orice incidental",
   "Hemangiomul gigant impune biopsie percutană de primă intenție, înaintea imagisticii",
   "Funcția hepatică se alterează constant, analog CHC"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Studiile de peste 10 ani confirmă absența hemoragiilor spontane sau a rupturilor — Corect: Absența hemoragiei/rupturii pe urmărire de peste 10 ani este explicită.\n\nDurerea abdominală ocazională are, în majoritatea cazurilor, o altă etiologie decât hemangiomul — Corect: Durerea cu altă etiologie în majoritatea cazurilor este enunțată.\n\nRuptura spontană este regula după 10 ani, rezecția fiind indicată la orice incidental — Incorect: Textul confirmă absența, nu regula, rupturii spontane.\n\nHemangiomul gigant impune biopsie percutană de primă intenție, înaintea imagisticii — Incorect: Biopsia precoce la incidental este descurajată; US/CT sunt diagnostice.\n\nFuncția hepatică se alterează constant, analog CHC — Incorect: Funcția hepatică se păstrează normală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 320, 319, Hemangiomul gigant — Urmărire >10 ani fără ruptură (pagini PDF: 190, 189).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    320,
    319
   ],
   "pdfPages": [
    190,
    189
   ],
   "section": "Hemangiomul gigant — Urmărire >10 ani fără ruptură"
  },
  "learningObjective": "Aplicarea datelor de urmărire (>10 ani, fără ruptură spontană) și a faptului că durerea are de obicei altă cauză.",
  "optionRationales": [
   "Absența hemoragiei/rupturii pe urmărire de peste 10 ani este explicită.",
   "Durerea cu altă etiologie în majoritatea cazurilor este enunțată.",
   "Textul confirmă absența, nu regula, rupturii spontane.",
   "Biopsia precoce la incidental este descurajată; US/CT sunt diagnostice.",
   "Funcția hepatică se păstrează normală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă absența rupturii pe 10 ani într-o indicație neselectivă de rezecție, contrar paragrafului de urmărire."
  },
  "textbookExpressions": [
   "mai mult de 10 ani",
   "hemoragiilor spontane"
  ]
 },
 {
  "id": "ficat-splina-adv-037",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "HNF și conduita în hemoragia pe adenom hepatic includ:",
  "options": [
   "Dopplerul poate vizualiza semnal vascular cu aspect de spițe de roată în HNF",
   "Hemoragia pe adenom cu șoc hipovolemic necesită tratament de urgență; în alte situații hemoragice se poate tenta resuscitare, embolizare, apoi chirurgie programată",
   "Femeile cu istoric de adenom trebuie să evite contraceptivele orale",
   "HNF se tratează prin rezecție de principiu, fiind un precursor al CHC",
   "Embolizarea este contraindicată în hemoragia pe adenom, unica opțiune fiind observația"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Dopplerul poate vizualiza semnal vascular cu aspect de spițe de roată în HNF — Corect: Aspectul de spițe de roată la Doppler este explicit.\n\nHemoragia pe adenom cu șoc hipovolemic necesită tratament de urgență; în alte situații hemoragice se poate tenta resuscitare, embolizare, apoi chirurgie programată — Corect: Algoritmul șoc-urgență versus resuscitare-embolizare-chirurgie programată este citat.\n\nFemeile cu istoric de adenom trebuie să evite contraceptivele orale — Corect: Evitarea contraceptivelor după adenom este enunțată.\n\nHNF se tratează prin rezecție de principiu, fiind un precursor al CHC — Incorect: HNF este un proces regenerativ de tratat conservator când diagnosticul imagistic e stabilit.\n\nEmbolizarea este contraindicată în hemoragia pe adenom, unica opțiune fiind observația — Incorect: Embolizarea este tocmai etapa intermediară descrisă în hemoragia fără șoc.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 320, 321, HNF (spițe de roată) și hemoragia pe adenom (pagini PDF: 190, 191).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    320,
    321
   ],
   "pdfPages": [
    190,
    191
   ],
   "section": "HNF (spițe de roată) și hemoragia pe adenom"
  },
  "learningObjective": "Diferențierea pattern-ului Doppler în spițe al HNF de conduita etapizată (urgență versus embolizare) a hemoragiei pe adenom.",
  "optionRationales": [
   "Aspectul de spițe de roată la Doppler este explicit.",
   "Algoritmul șoc-urgență versus resuscitare-embolizare-chirurgie programată este citat.",
   "Evitarea contraceptivelor după adenom este enunțată.",
   "HNF este un proces regenerativ de tratat conservator când diagnosticul imagistic e stabilit.",
   "Embolizarea este tocmai etapa intermediară descrisă în hemoragia fără șoc."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă HNF într-un precursor malign și anulează embolizarea din algoritmul hemoragiei pe adenom."
  },
  "textbookExpressions": [
   "spiţe de roată",
   "embolizare"
  ]
 },
 {
  "id": "ficat-splina-adv-038",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Contextul epidemiologic și invazia vasculară în CHC se caracterizează prin:",
  "options": [
   "Tumora apare uzual la pacienții cu boală hepatică cronică, într-o proporție de 70–80%",
   "Incidența este crescută și la infectați VHB sau VHC fără modificări cirotice",
   "Consumul de alcool și steatoza non-alcoolică asociată obezității sunt factori de risc",
   "CHC are susceptibilitate pentru invazia vasculară, în particular a vaselor tributare sistemului venos port, mai probabilă la tumori mai mari",
   "CHC apare doar pe ficat sănătos, fără legătură cu VHB/VHC sau cu ciroza"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Tumora apare uzual la pacienții cu boală hepatică cronică, într-o proporție de 70–80% — Corect: Proporția 70–80% pe boală hepatică cronică este explicită.\n\nIncidența este crescută și la infectați VHB sau VHC fără modificări cirotice — Corect: Incidența crescută fără ciroză la VHB/VHC este citată.\n\nConsumul de alcool și steatoza non-alcoolică asociată obezității sunt factori de risc — Corect: Alcoolul și NASH/obezitatea sunt listați ca factori de risc.\n\nCHC are susceptibilitate pentru invazia vasculară, în particular a vaselor tributare sistemului venos port, mai probabilă la tumori mai mari — Corect: Invazia portală, dependentă de dimensiune, este enunțată.\n\nCHC apare doar pe ficat sănătos, fără legătură cu VHB/VHC sau cu ciroza — Incorect: CHC este strâns asociat cirozei și virusurilor, nu ficatului sănătos.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 321, CHC — 70–80% pe boală cronică și invazie portală (pagini PDF: 191).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    321
   ],
   "pdfPages": [
    191
   ],
   "section": "CHC — 70–80% pe boală cronică și invazie portală"
  },
  "learningObjective": "Integrarea ponderii 70–80% pe hepatopatie cronică, a riscului viral non-cirotic și a predilecției pentru invazia venoasă portă.",
  "optionRationales": [
   "Proporția 70–80% pe boală hepatică cronică este explicită.",
   "Incidența crescută fără ciroză la VHB/VHC este citată.",
   "Alcoolul și NASH/obezitatea sunt listați ca factori de risc.",
   "Invazia portală, dependentă de dimensiune, este enunțată.",
   "CHC este strâns asociat cirozei și virusurilor, nu ficatului sănătos."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă hepatopatia cronică de 70–80% și mută CHC pe ficatul sănătos, ignorând invazia portă."
  },
  "textbookExpressions": [
   "70-80%",
   "sistemului venos port"
  ]
 },
 {
  "id": "ficat-splina-adv-039",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Metastazele hepatice și ablația termică se caracterizează prin:",
  "options": [
   "Cele mai frecvente tumori maligne din ficat sunt metastazele, de obicei de origine GI; 30–40% dintre decesele prin cancer au metastaze hepatice la autopsie",
   "În cancerul colorectal, tratamentul cu succes al leziunilor hepatice izolate îmbunătățește supraviețuirea până la 55–65% la 5 ani",
   "Ablația termică (RFA, MWA) provoacă distrucție la temperaturi de peste 100°C; pentru metastaze, tehnicile ablative sunt considerate inferioare rezecției",
   "Metastazele sunt mai rare decât CHC ca tumori maligne intrahepatice",
   "RFA înlocuiește rezecția ca standard al metastazelor rezecabile, temperaturile utile fiind sub 40°C"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cele mai frecvente tumori maligne din ficat sunt metastazele, de obicei de origine GI; 30–40% dintre decesele prin cancer au metastaze hepatice la autopsie — Corect: Originea GI și cifra 30–40% la autopsie sunt explicite.\n\nÎn cancerul colorectal, tratamentul cu succes al leziunilor hepatice izolate îmbunătățește supraviețuirea până la 55–65% la 5 ani — Corect: Intervalul 55–65% la 5 ani este citat.\n\nAblația termică (RFA, MWA) provoacă distrucție la temperaturi de peste 100°C; pentru metastaze, tehnicile ablative sunt considerate inferioare rezecției — Corect: Temperatura >100°C și inferioritatea față de rezecție (pagina următoare) sunt enunțate.\n\nMetastazele sunt mai rare decât CHC ca tumori maligne intrahepatice — Incorect: Textul afirmă că metastazele sunt cele mai frecvente tumori maligne din ficat.\n\nRFA înlocuiește rezecția ca standard al metastazelor rezecabile, temperaturile utile fiind sub 40°C — Incorect: Ablația rămâne opțiune când rezecția nu e posibilă, nu standardul; pragul este >100°C.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 322, 323, Metastaze hepatice — 30–40% autopsie, 55–65% la 5 ani, RFA >100°C (pagini PDF: 192, 193).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    322,
    323
   ],
   "pdfPages": [
    192,
    193
   ],
   "section": "Metastaze hepatice — 30–40% autopsie, 55–65% la 5 ani, RFA >100°C"
  },
  "learningObjective": "Contrastarea predominanței metastazelor GI, a supraviețuirii 55–65% în colorectal și a pragului >100°C al ablației, inferioară rezecției.",
  "optionRationales": [
   "Originea GI și cifra 30–40% la autopsie sunt explicite.",
   "Intervalul 55–65% la 5 ani este citat.",
   "Temperatura >100°C și inferioritatea față de rezecție (pagina următoare) sunt enunțate.",
   "Textul afirmă că metastazele sunt cele mai frecvente tumori maligne din ficat.",
   "Ablația rămâne opțiune când rezecția nu e posibilă, nu standardul; pragul este >100°C."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ierarhia metastază versus CHC și coboară temperatura RFA sub 40°C, două erori de selecție terapeutică."
  },
  "textbookExpressions": [
   "30-40%",
   "55-65%"
  ]
 },
 {
  "id": "ficat-splina-adv-040",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "După rezecția metastazelor colorectale hepatice:",
  "options": [
   "La 60–70% dintre pacienți cancerul recidivează, țesutul hepatic rezidual fiind cea mai frecventă localizare",
   "Cei care beneficiază cel mai mult au leziuni mici, CEA scăzut, >1 an fără progresie, fără boală extrahepatică și fără ganglioni tumorali secundari",
   "Recidiva este excepțională (<5%), urmărirea fiind superfluă",
   "Ablația (MWA, RFA) este superioară rezecției ca tratament de primă intenție",
   "CEA crescut și boala extrahepatică definesc candidatul ideal de rezecție"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "La 60–70% dintre pacienți cancerul recidivează, țesutul hepatic rezidual fiind cea mai frecventă localizare — Corect: Cifra 60–70% și predilecția pentru ficatul rezidual sunt explicite.\n\nCei care beneficiază cel mai mult au leziuni mici, CEA scăzut, >1 an fără progresie, fără boală extrahepatică și fără ganglioni tumorali secundari — Corect: Criteriile de selecție (dimensiune, CEA, interval >1 an, absența extrahepatică/ganglionară) sunt listate pe pagina anterioară.\n\nRecidiva este excepțională (<5%), urmărirea fiind superfluă — Incorect: Recidiva este majoritară, deci urmărirea atentă este cerută.\n\nAblația (MWA, RFA) este superioară rezecției ca tratament de primă intenție — Incorect: Ablația este considerată inferioară rezecției.\n\nCEA crescut și boala extrahepatică definesc candidatul ideal de rezecție — Incorect: CEA scăzut și absența extrahepatică definesc candidatul, nu inversul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 323, 322, Metastaze colorectale — Recidivă 60–70% și selecția candidatului (pagini PDF: 193, 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    323,
    322
   ],
   "pdfPages": [
    193,
    192
   ],
   "section": "Metastaze colorectale — Recidivă 60–70% și selecția candidatului"
  },
  "learningObjective": "Fixarea recidivei de 60–70% în ficatul rezidual și a profilului de candidat (leziuni mici, CEA scăzut, >1 an).",
  "optionRationales": [
   "Cifra 60–70% și predilecția pentru ficatul rezidual sunt explicite.",
   "Criteriile de selecție (dimensiune, CEA, interval >1 an, absența extrahepatică/ganglionară) sunt listate pe pagina anterioară.",
   "Recidiva este majoritară, deci urmărirea atentă este cerută.",
   "Ablația este considerată inferioară rezecției.",
   "CEA scăzut și absența extrahepatică definesc candidatul, nu inversul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Minimizează recidiva de 60–70% și inversează criteriile CEA/extrahepatic, două capcane de selecție oncologică."
  },
  "textbookExpressions": [
   "60-70%",
   "antigenului carcinoem"
  ]
 },
 {
  "id": "ficat-splina-adv-041",
  "topicId": "ficat-splina",
  "type": "CS",
  "stem": "Terapia antiparazitară inițială a chistului hidatic mic, uniloculat, se bazează pe:",
  "options": [
   "Albendazol, care poate controla creșterea și extensia bolii",
   "Metronidazol, identic abcesului amebian, fără agent scolicid",
   "Marsupializare în cavitatea peritoneală, ca în chistadenom",
   "Puncție-biopsie diagnostică de primă intenție, înaintea serologiei",
   "Decorticare, identică chistului simplu simptomatic"
  ],
  "correct": [
   0
  ],
  "explanation": "Albendazol, care poate controla creșterea și extensia bolii — Corect: Albendazolul pentru chisturi mici uniloculate este explicit.\n\nMetronidazol, identic abcesului amebian, fără agent scolicid — Incorect: Metronidazolul este schema amebianului, nu a hidaticului.\n\nMarsupializare în cavitatea peritoneală, ca în chistadenom — Incorect: Marsupializarea este contraindicată în chistadenom, nu este tratamentul hidaticului.\n\nPuncție-biopsie diagnostică de primă intenție, înaintea serologiei — Incorect: Puncția diagnostică se evită la suspiciune din cauza însămânțării/anafilaxiei; PAIR-ul e rezervat cazurilor selecționate după diagnostic.\n\nDecorticare, identică chistului simplu simptomatic — Incorect: Decorticarea este standardul chistului simplu, nu al hidaticului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 324, Chistul hidatic — Albendazol în chistul mic uniloculat (pagini PDF: 194).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    324
   ],
   "pdfPages": [
    194
   ],
   "section": "Chistul hidatic — Albendazol în chistul mic uniloculat"
  },
  "learningObjective": "Recunoașterea albendazolului ca terapie inițială a chistului mic uniloculat, distinct de metronidazol, marsupializare sau puncția diagnostică.",
  "optionRationales": [
   "Albendazolul pentru chisturi mici uniloculate este explicit.",
   "Metronidazolul este schema amebianului, nu a hidaticului.",
   "Marsupializarea este contraindicată în chistadenom, nu este tratamentul hidaticului.",
   "Puncția diagnostică se evită la suspiciune din cauza însămânțării/anafilaxiei; PAIR-ul e rezervat cazurilor selecționate după diagnostic.",
   "Decorticarea este standardul chistului simplu, nu al hidaticului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește albendazolul cu metronidazolul amebian sau cu decorticarea chistului simplu, trei strategii din același capitol de chiste."
  },
  "textbookExpressions": [
   "albendazol",
   "uniloculate"
  ]
 },
 {
  "id": "ficat-splina-adv-042",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Colateralele porto-sistemice din hipertensiunea portală includ:",
  "options": [
   "Venele submucoase esofagiene către sistemul azygos, producând varice esofagogastrice",
   "Venele hemoroidale către sistemul iliac, producând hemoroizi anorectali",
   "Vena ombilicală către venele peretelui abdominal, generând „capul de meduză”",
   "Venele retroperitoneale către vena cavă; aderențele peretelui pot conține colaterale voluminoase",
   "Colateralele lipsesc, presiunea portală drenându-se doar prin venele suprahepatice permeabile"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Venele submucoase esofagiene către sistemul azygos, producând varice esofagogastrice — Corect: Varicele esofagogastrice prin azygos sunt explicite.\n\nVenele hemoroidale către sistemul iliac, producând hemoroizi anorectali — Corect: Hemoroizii prin sistemul iliac sunt citați.\n\nVena ombilicală către venele peretelui abdominal, generând „capul de meduză” — Corect: Capul de meduză prin vena ombilicală este enunțat.\n\nVenele retroperitoneale către vena cavă; aderențele peretelui pot conține colaterale voluminoase — Corect: Colateralele retroperitoneale și cele din aderențe sunt listate.\n\nColateralele lipsesc, presiunea portală drenându-se doar prin venele suprahepatice permeabile — Incorect: Textul descrie tocmai aceste căi de drenaj compensator.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 324, Hipertensiunea portală — Șunturi colaterale (azygos, meduză) (pagini PDF: 194).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    324
   ],
   "pdfPages": [
    194
   ],
   "section": "Hipertensiunea portală — Șunturi colaterale (azygos, meduză)"
  },
  "learningObjective": "Recunoașterea celor patru situsuri clasice de comunicare porto-sistemică, inclusiv capul de meduză.",
  "optionRationales": [
   "Varicele esofagogastrice prin azygos sunt explicite.",
   "Hemoroizii prin sistemul iliac sunt citați.",
   "Capul de meduză prin vena ombilicală este enunțat.",
   "Colateralele retroperitoneale și cele din aderențe sunt listate.",
   "Textul descrie tocmai aceste căi de drenaj compensator."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează colateralele (azygos, ombilical, hemoroidal) deși sunt enumerate consecutiv în același paragraf."
  },
  "textbookExpressions": [
   "capul de meduză",
   "sistemul azygos"
  ]
 },
 {
  "id": "ficat-splina-adv-043",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Anatomia chirurgicală a splinei se caracterizează prin:",
  "options": [
   "Ligamentele suspensoare sunt splenorenal, gastrosplenic, splenocolic și splenodiafragmatic, în raport cu coada pancreasului, stomacul, rinichiul stâng, colonul și diafragmul",
   "Artera splenică, ramură a trunchiului celiac, are traiect de-a lungul marginii superioare a pancreasului, cranial de vena splenică",
   "În mod normal se asociază 4–6 artere gastrice scurte, ramuri ale arterei gastroepiploice stângi",
   "Artera splenică este ramură a mezentericei superioare și nu are colaterale gastrice",
   "Ligamentul falciform este principalul ligament suspensiv al splinei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ligamentele suspensoare sunt splenorenal, gastrosplenic, splenocolic și splenodiafragmatic, în raport cu coada pancreasului, stomacul, rinichiul stâng, colonul și diafragmul — Corect: Cele patru ligamente și organele de vecinătate sunt enumerate.\n\nArtera splenică, ramură a trunchiului celiac, are traiect de-a lungul marginii superioare a pancreasului, cranial de vena splenică — Corect: Originea din trunchiul celiac și traiectul de-a lungul pancreasului sunt explicite.\n\nÎn mod normal se asociază 4–6 artere gastrice scurte, ramuri ale arterei gastroepiploice stângi — Corect: Cifra 4–6 și originea din gastroepiploica stângă sunt citate.\n\nArtera splenică este ramură a mezentericei superioare și nu are colaterale gastrice — Incorect: Artera splenică este celiacă; gastricele scurte asigură colaterale.\n\nLigamentul falciform este principalul ligament suspensiv al splinei — Incorect: Ligamentul falciform aparține ficatului, nu splinei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 333, Anatomia splinei — Ligamente, celiac și 4–6 gastrice scurte (pagini PDF: 195).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    333
   ],
   "pdfPages": [
    195
   ],
   "section": "Anatomia splinei — Ligamente, celiac și 4–6 gastrice scurte"
  },
  "learningObjective": "Fixarea celor patru ligamente, a originii celiace cu traiect pancreatic și a celor 4–6 gastrice scurte din gastroepiploica stângă.",
  "optionRationales": [
   "Cele patru ligamente și organele de vecinătate sunt enumerate.",
   "Originea din trunchiul celiac și traiectul de-a lungul pancreasului sunt explicite.",
   "Cifra 4–6 și originea din gastroepiploica stângă sunt citate.",
   "Artera splenică este celiacă; gastricele scurte asigură colaterale.",
   "Ligamentul falciform aparține ficatului, nu splinei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută originea arterei splenice la mezenterica superioară și atribuie splinei ligamentul falciform hepatic."
  },
  "textbookExpressions": [
   "4-6 artere gastrice",
   "trunchiului celiac"
  ]
 },
 {
  "id": "ficat-splina-adv-044",
  "topicId": "ficat-splina",
  "type": "CS",
  "stem": "În ordinea descrescătoare a frecvenței, splina accesorie se găsește la:",
  "options": [
   "Hilul splinei, ligamentul splenocolic, ligamentul gastrocolic, ligamentul splenorenal și oment",
   "Coada pancreasului ca sediu unic, fără localizări ligamentare",
   "Doar în scrot, analog gubernaculului testicular",
   "În fosa iliacă dreaptă, analog apendicelui",
   "În mediastin, analog timusului"
  ],
  "correct": [
   0
  ],
  "explanation": "Hilul splinei, ligamentul splenocolic, ligamentul gastrocolic, ligamentul splenorenal și oment — Corect: Ordinea descrescătoare a localizărilor este tabelată în text.\n\nCoada pancreasului ca sediu unic, fără localizări ligamentare — Incorect: Coada pancreasului figurează pe figură ca raport, nu ca unica localizare.\n\nDoar în scrot, analog gubernaculului testicular — Incorect: Traiectul de coborâre testiculară este o localizare posibilă rară pe figură, nu sediul exclusiv.\n\nÎn fosa iliacă dreaptă, analog apendicelui — Incorect: Fosa iliacă dreaptă nu este în lista de ordine a frecvenței.\n\nÎn mediastin, analog timusului — Incorect: Mediastinul nu figurează printre localizările comune.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 333, Splina accesorie — Ordinea localizărilor (pagini PDF: 195).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    333
   ],
   "pdfPages": [
    195
   ],
   "section": "Splina accesorie — Ordinea localizărilor"
  },
  "learningObjective": "Recunoașterea ierarhiei hil → splenocolic → gastrocolic → splenorenal → oment, rezultată din defectul de fuziune al mugurilor din mezogastrul dorsal.",
  "optionRationales": [
   "Ordinea descrescătoare a localizărilor este tabelată în text.",
   "Coada pancreasului figurează pe figură ca raport, nu ca unica localizare.",
   "Traiectul de coborâre testiculară este o localizare posibilă rară pe figură, nu sediul exclusiv.",
   "Fosa iliacă dreaptă nu este în lista de ordine a frecvenței.",
   "Mediastinul nu figurează printre localizările comune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește ierarhia hil-ligamente cu sedii aberante (scrot, mediastin), deși textul dă o ordine explicită."
  },
  "textbookExpressions": [
   "hitul splinei",
   "mezogastrului dorsal"
  ]
 },
 {
  "id": "ficat-splina-adv-045",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Funcțiile imune și hematopoietice ale splinei includ:",
  "options": [
   "Splina este cea mai mare sursă de IgM; splenectomia generează o scădere marcată a IgM și a producției de opsonină",
   "Hematopoieza extramedulară fetală se oprește imediat după naștere",
   "Splina are, cel mai probabil, un rol major în modularea răspunsului citokinic la infecție; splenectomia este urmată de trombocitoză pasageră",
   "IgM crește după splenectomie, opsonina fiind independentă de splină",
   "Hematopoieza splenică începe abia la adult, fetusul neavând rol splenic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Splina este cea mai mare sursă de IgM; splenectomia generează o scădere marcată a IgM și a producției de opsonină — Corect: Statutul de cea mai mare sursă de IgM și scăderea opsoninei sunt explicite.\n\nHematopoieza extramedulară fetală se oprește imediat după naștere — Corect: Oprirea hematopoiezei imediat după naștere este citată pe pagina anterioară.\n\nSplina are, cel mai probabil, un rol major în modularea răspunsului citokinic la infecție; splenectomia este urmată de trombocitoză pasageră — Corect: Rolul citokinic și trombocitoza pasageră sunt enunțate pe aceeași pagină.\n\nIgM crește după splenectomie, opsonina fiind independentă de splină — Incorect: Textul descrie scăderea, nu creșterea, IgM după splenectomie.\n\nHematopoieza splenică începe abia la adult, fetusul neavând rol splenic — Incorect: Rolul hematopoietic este definit la fetus și se oprește postnatal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 335, 334, Fiziologia splinei — IgM, opsonină și hematopoieza fetală (pagini PDF: 197, 196).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    335,
    334
   ],
   "pdfPages": [
    197,
    196
   ],
   "section": "Fiziologia splinei — IgM, opsonină și hematopoieza fetală"
  },
  "learningObjective": "Contrastarea rolului de sursă principală de IgM/opsonină și a opririi hematopoiezei fetale imediat postnatal, plus depozitul plachetar.",
  "optionRationales": [
   "Statutul de cea mai mare sursă de IgM și scăderea opsoninei sunt explicite.",
   "Oprirea hematopoiezei imediat după naștere este citată pe pagina anterioară.",
   "Rolul citokinic și trombocitoza pasageră sunt enunțate pe aceeași pagină.",
   "Textul descrie scăderea, nu creșterea, IgM după splenectomie.",
   "Rolul hematopoietic este definit la fetus și se oprește postnatal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează IgM post-splenectomie și mută hematopoieza fetală la adult, două funcții din același bloc fiziologic."
  },
  "textbookExpressions": [
   "imunoglobulină M",
   "opsonină"
  ]
 },
 {
  "id": "ficat-splina-adv-046",
  "topicId": "ficat-splina",
  "type": "CS",
  "stem": "Disconfortul la palparea unei spline mărite alertează de obicei către:",
  "options": [
   "Infecție splenică, infarct splenic sau ruptură splenică",
   "Splenomegalie hematologică nedureroasă, fără semnificație acută",
   "Litiază renală stângă izolată, splina fiind nepălpabilă în infarct",
   "Peritonită bilio-pancreatică, palparea splinei fiind superfluă",
   "Hipersplenism congestiv fără ischemie, durerea fiind regula în limfoame"
  ],
  "correct": [
   0
  ],
  "explanation": "Infecție splenică, infarct splenic sau ruptură splenică — Corect: Textul precizează că splina hematologică mărită nu este de obicei dureroasă, iar disconfortul alertează către infecție, infarct sau ruptură.\n\nSplenomegalie hematologică nedureroasă, fără semnificație acută — Incorect: Absența durerii este tocmai pattern-ul hematologic, nu semnul de alarmă.\n\nLitiază renală stângă izolată, splina fiind nepălpabilă în infarct — Incorect: Infarctul este una dintre cauzele de disconfort, nu o situație în care palparea e negativă.\n\nPeritonită bilio-pancreatică, palparea splinei fiind superfluă — Incorect: Palparea bimanuală/Middleton rămâne relevantă.\n\nHipersplenism congestiv fără ischemie, durerea fiind regula în limfoame — Incorect: Limfoamele produc de obicei splenomegalie nedureroasă; durerea nu este regula.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 335, Examenul splinei — Durerea sugerează infecție, infarct sau ruptură (pagini PDF: 197).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    335
   ],
   "pdfPages": [
    197
   ],
   "section": "Examenul splinei — Durerea sugerează infecție, infarct sau ruptură"
  },
  "learningObjective": "Diferențierea splinei hematologice nedureroase de disconfortul care orientează către infecție, infarct sau ruptură.",
  "optionRationales": [
   "Textul precizează că splina hematologică mărită nu este de obicei dureroasă, iar disconfortul alertează către infecție, infarct sau ruptură.",
   "Absența durerii este tocmai pattern-ul hematologic, nu semnul de alarmă.",
   "Infarctul este una dintre cauzele de disconfort, nu o situație în care palparea e negativă.",
   "Palparea bimanuală/Middleton rămâne relevantă.",
   "Limfoamele produc de obicei splenomegalie nedureroasă; durerea nu este regula."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează durerea ca semn de limfom banal și ignoră triada infecție–infarct–ruptură din același paragraf."
  },
  "textbookExpressions": [
   "disconfortul la palpare",
   "infarct splenic"
  ]
 },
 {
  "id": "ficat-splina-adv-047",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Indicațiile splenectomiei în hipersplenism includ:",
  "options": [
   "Trombocite <50.000 cu prezența hemoragiei",
   "Neutropenie <2.000, cu sau fără infecții intercurente, sau anemie care necesită transfuzii",
   "În hipersplenismul congestiv prin hipertensiune portală se tratează hipertensiunea, mai degrabă decât splenectomia",
   "În sindromul Felty, splenectomia este o opțiune la infecții severe recurente sau ulcere gambiere trenante",
   "Splenomegalia este un criteriu de diagnostic sine qua non, citopenia fără splenomegalie excluzând entitatea"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Trombocite <50.000 cu prezența hemoragiei — Corect: Pragul <50.000 cu hemoragie este explicit.\n\nNeutropenie <2.000, cu sau fără infecții intercurente, sau anemie care necesită transfuzii — Corect: Neutropenia <2.000 și anemia transfusion-dependentă sunt citate.\n\nÎn hipersplenismul congestiv prin hipertensiune portală se tratează hipertensiunea, mai degrabă decât splenectomia — Corect: Tratarea HTP, nu splenectomia, este conduita congestivă.\n\nÎn sindromul Felty, splenectomia este o opțiune la infecții severe recurente sau ulcere gambiere trenante — Corect: Felty: infecții recurente sau ulcere trenante ca indicații.\n\nSplenomegalia este un criteriu de diagnostic sine qua non, citopenia fără splenomegalie excluzând entitatea — Incorect: Textul precizează că splenomegalia poate lipsi și nu face parte din criteriile de diagnostic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 341, 340, Hipersplenism — Praguri 50.000 / 2.000 și Felty (pagini PDF: 203, 202).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    341,
    340
   ],
   "pdfPages": [
    203,
    202
   ],
   "section": "Hipersplenism — Praguri 50.000 / 2.000 și Felty"
  },
  "learningObjective": "Aplicarea pragurilor de citopenie, a priorității tratării HTP în forma congestivă și a indicației selective din Felty, versus mitul splenomegaliei obligatorii.",
  "optionRationales": [
   "Pragul <50.000 cu hemoragie este explicit.",
   "Neutropenia <2.000 și anemia transfusion-dependentă sunt citate.",
   "Tratarea HTP, nu splenectomia, este conduita congestivă.",
   "Felty: infecții recurente sau ulcere trenante ca indicații.",
   "Textul precizează că splenomegalia poate lipsi și nu face parte din criteriile de diagnostic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă splenomegalia într-un criteriu sine qua non și uită pragurile 50.000/2.000, două capcane de indicație."
  },
  "textbookExpressions": [
   "<50.000",
   "sindromului Felty"
  ]
 },
 {
  "id": "ficat-splina-adv-048",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Prevenția și spectrul OPSI, dincolo de pneumococ, includ:",
  "options": [
   "Incidența generală a OPSI la splenectomizați este de 40 de ori mai mare decât în populația generală",
   "După pneumococ urmează, descrescător, H. influenzae, N. meningitidis, streptococ β-hemolitic, S. aureus, E. coli și Pseudomonas; herpes zoster, babesioza și malaria pot fi severe",
   "La splenectomia electivă, vaccinarea cu mai mult de o săptămână înainte este, cel mai probabil, suficientă; se iau în considerare și vaccinurile Hib și meningococic",
   "OPSI apare de obicei în primele ore postoperator, vaccinarea electivă fiind superfluă",
   "Protecția vaccinală este completă, copiii sub 2 ani având răspuns identic adultului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Incidența generală a OPSI la splenectomizați este de 40 de ori mai mare decât în populația generală — Corect: Multiplicatorul de 40 de ori este explicit.\n\nDupă pneumococ urmează, descrescător, H. influenzae, N. meningitidis, streptococ β-hemolitic, S. aureus, E. coli și Pseudomonas; herpes zoster, babesioza și malaria pot fi severe — Corect: Lista descrescătoare după pneumococ și infecțiile virale/parazitare sunt citate.\n\nLa splenectomia electivă, vaccinarea cu mai mult de o săptămână înainte este, cel mai probabil, suficientă; se iau în considerare și vaccinurile Hib și meningococic — Corect: Fereastra de peste o săptămână și vaccinurile Hib/meningococ sunt enunțate.\n\nOPSI apare de obicei în primele ore postoperator, vaccinarea electivă fiind superfluă — Incorect: Textul precizează că OPSI nu apare de obicei imediat postoperator.\n\nProtecția vaccinală este completă, copiii sub 2 ani având răspuns identic adultului — Incorect: Vaccinarea nu este protecție totală; copiii sub 2 ani nu dezvoltă imunizare eficientă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 342, OPSI — Risc ×40, floră după pneumococ și timing vaccinal (pagini PDF: 204).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    342
   ],
   "pdfPages": [
    204
   ],
   "section": "OPSI — Risc ×40, floră după pneumococ și timing vaccinal"
  },
  "learningObjective": "Fixarea riscului de 40 de ori, a spectrului după pneumococ și a ferestrei de vaccinare >1 săptămână înaintea splenectomiei elective.",
  "optionRationales": [
   "Multiplicatorul de 40 de ori este explicit.",
   "Lista descrescătoare după pneumococ și infecțiile virale/parazitare sunt citate.",
   "Fereastra de peste o săptămână și vaccinurile Hib/meningococ sunt enunțate.",
   "Textul precizează că OPSI nu apare de obicei imediat postoperator.",
   "Vaccinarea nu este protecție totală; copiii sub 2 ani nu dezvoltă imunizare eficientă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Plasează OPSI imediat postoperator și supraestimează protecția vaccinală, ignorând fereastra de >1 săptămână și riscul ×40."
  },
  "textbookExpressions": [
   "40 de ori",
   "mai mult de o săptămână"
  ]
 },
 {
  "id": "ficat-splina-adv-049",
  "topicId": "ficat-splina",
  "type": "CS",
  "stem": "Un politraumatizat cu suspiciune de leziune hepatică. Identificați afirmația corectă:",
  "options": [
   "Instabilitatea hemodinamică reprezintă principala indicație pentru intervenția chirurgicală; imagistica de elecție include FAST, ultrasonografia standard și CT",
   "Biopsia percutană de primă intenție înlocuiește FAST-ul la instabil",
   "Leziunea hepatică traumatică se tratează de principiu conservator, independent de tensiune",
   "Hemangiomul cavernos este diagnosticul de primă intenție al FAST-ului pozitiv",
   "Capsula Glisson contraindică laparotomia, chiar în prezența instabilității"
  ],
  "correct": [
   0
  ],
  "explanation": "Instabilitatea hemodinamică reprezintă principala indicație pentru intervenția chirurgicală; imagistica de elecție include FAST, ultrasonografia standard și CT — Corect: Textul plasează instabilitatea ca indicație principală și enumeră FAST, US și CT.\n\nBiopsia percutană de primă intenție înlocuiește FAST-ul la instabil — Incorect: Biopsia percutană este descurajată la incidentale; la instabil, chirurgia primează.\n\nLeziunea hepatică traumatică se tratează de principiu conservator, independent de tensiune — Incorect: Conduita depinde de hemodinamică, nu este conservatoare neselectiv.\n\nHemangiomul cavernos este diagnosticul de primă intenție al FAST-ului pozitiv — Incorect: Hemangiomul este o tumoră benignă incidentală, nu diagnosticul FAST-ului traumatic.\n\nCapsula Glisson contraindică laparotomia, chiar în prezența instabilității — Incorect: Capsula Glisson nu contraindică laparotomia de urgență.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 318, 317, Traumatisme hepatice — Instabilitatea ca indicație operatorie (pagini PDF: 188, 187).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    318,
    317
   ],
   "pdfPages": [
    188,
    187
   ],
   "section": "Traumatisme hepatice — Instabilitatea ca indicație operatorie"
  },
  "learningObjective": "Recunoașterea instabilității hemodinamice ca indicație principală de chirurgie, cu FAST/US/CT ca imagistică de elecție.",
  "optionRationales": [
   "Textul plasează instabilitatea ca indicație principală și enumeră FAST, US și CT.",
   "Biopsia percutană este descurajată la incidentale; la instabil, chirurgia primează.",
   "Conduita depinde de hemodinamică, nu este conservatoare neselectiv.",
   "Hemangiomul este o tumoră benignă incidentală, nu diagnosticul FAST-ului traumatic.",
   "Capsula Glisson nu contraindică laparotomia de urgență."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește instabilitatea ca indicație operatorie cu biopsia percutană, o manevră din capitolul de incidentale."
  },
  "textbookExpressions": [
   "Instabilitatea hemodinamică",
   "computer tomografia"
  ]
 },
 {
  "id": "ficat-splina-adv-050",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Microscopia și originea hemangiomului cavernos hepatic se caracterizează prin:",
  "options": [
   "Este, probabil, o leziune congenitală, un hamartom embriologic (tumoră benignă cu două tipuri de celule distincte)",
   "Evaluarea microscopică evidențiază spații endoteliale vasculare separate de septuri fibroase; leziunile pot crește în dimensiuni în timpul vieții",
   "Este un precursor al CHC, fără componente vasculare",
   "Spațiile sunt biliare, fără endoteliu, analog chistului simplu",
   "Hamartomul embriologic impune rezecție de principiu la incidentalul asimptomatic"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este, probabil, o leziune congenitală, un hamartom embriologic (tumoră benignă cu două tipuri de celule distincte) — Corect: Originea congenitală/hamartom embriologic este explicită.\n\nEvaluarea microscopică evidențiază spații endoteliale vasculare separate de septuri fibroase; leziunile pot crește în dimensiuni în timpul vieții — Corect: Spațiile endoteliale separate de septuri fibroase și creșterea în timp sunt citate.\n\nEste un precursor al CHC, fără componente vasculare — Incorect: Hemangiomul este benign, fără potențial de CHC în acest paragraf.\n\nSpațiile sunt biliare, fără endoteliu, analog chistului simplu — Incorect: Spațiile sunt vasculare endoteliale, nu biliare.\n\nHamartomul embriologic impune rezecție de principiu la incidentalul asimptomatic — Incorect: Incidentalele nu necesită terapie specifică; funcția hepatică se păstrează.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 319, Hemangiomul cavernos — Hamartom embriologic și spații endoteliale (pagini PDF: 189).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    319
   ],
   "pdfPages": [
    189
   ],
   "section": "Hemangiomul cavernos — Hamartom embriologic și spații endoteliale"
  },
  "learningObjective": "Recunoașterea naturii de hamartom congenital și a arhitecturii (spații endoteliale, septuri fibroase), versus indicația neselectivă de rezecție.",
  "optionRationales": [
   "Originea congenitală/hamartom embriologic este explicită.",
   "Spațiile endoteliale separate de septuri fibroase și creșterea în timp sunt citate.",
   "Hemangiomul este benign, fără potențial de CHC în acest paragraf.",
   "Spațiile sunt vasculare endoteliale, nu biliare.",
   "Incidentalele nu necesită terapie specifică; funcția hepatică se păstrează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă hamartomul vascular într-un precursor de CHC și cere rezecție neselectivă, contrar paragrafului de incidental."
  },
  "textbookExpressions": [
   "spaţii endoteliale",
   "septuri fibroase"
  ]
 },
 {
  "id": "ficat-splina-adv-051",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Imagistica adenomului hepatic se caracterizează prin:",
  "options": [
   "CT evidențiază o masă solidă hipodensă, cu hemoragie asociată",
   "Aspectul heterogen la IRM reprezintă elementul patognomonic al diagnosticului",
   "Biopsia cu ac poate ajuta, dar erorile de prelevare ridică probleme de diagnostic diferențial cu HNF sau CHC",
   "Tumorile sunt leziuni solitare, neîncapsulate",
   "IRM este inutilă, diagnosticul impunând puncție de primă intenție înaintea CT"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "CT evidențiază o masă solidă hipodensă, cu hemoragie asociată — Corect: Masa solidă hipodensă cu hemoragie la CT este explicită.\n\nAspectul heterogen la IRM reprezintă elementul patognomonic al diagnosticului — Corect: Heterogenitatea IRM ca element patognomonic este enunțată.\n\nBiopsia cu ac poate ajuta, dar erorile de prelevare ridică probleme de diagnostic diferențial cu HNF sau CHC — Corect: Erorile de prelevare versus HNF/CHC sunt citate.\n\nTumorile sunt leziuni solitare, neîncapsulate — Corect: Caracterul solitar, neîncapsulat, este enunțat în același paragraf.\n\nIRM este inutilă, diagnosticul impunând puncție de primă intenție înaintea CT — Incorect: IRM este descrisă ca metodă excelentă; biopsia nu este primul pas.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 320, Adenomul hepatic — CT hipodens, IRM heterogen, erori de biopsie (pagini PDF: 190).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    320
   ],
   "pdfPages": [
    190
   ],
   "section": "Adenomul hepatic — CT hipodens, IRM heterogen, erori de biopsie"
  },
  "learningObjective": "Contrastarea masei CT hipodense hemoragice, a heterogenității IRM patognomonice și a caracterului solitar neîncapsulat de limitele biopsiei.",
  "optionRationales": [
   "Masa solidă hipodensă cu hemoragie la CT este explicită.",
   "Heterogenitatea IRM ca element patognomonic este enunțată.",
   "Erorile de prelevare versus HNF/CHC sunt citate.",
   "Caracterul solitar, neîncapsulat, este enunțat în același paragraf.",
   "IRM este descrisă ca metodă excelentă; biopsia nu este primul pas."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează defectul de captare (absența Kupffer) într-o hipercaptare și pune puncția înaintea IRM."
  },
  "textbookExpressions": [
   "aspectul heterogen",
   "patognomonic"
  ]
 },
 {
  "id": "ficat-splina-adv-052",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "CHC trebuie suspectat la ciroticul cu:",
  "options": [
   "Decompensare clinică bruscă, incluzând accentuarea icterului, encefalopatie sau creșterea ascitei",
   "Orice tumoră hepatică solidă, CHC fiind inclus în diagnosticul diferențial",
   "O leziune chistică simplă, seroasă, fără comunicare biliară, ca chistul de 10%",
   "AFP sub 50 mg/dL, fără imagistică bianuală",
   "Washout-ul arterial infirmă CHC, biopsia fiind primul pas la leziunea sub 1 cm"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Decompensare clinică bruscă, incluzând accentuarea icterului, encefalopatie sau creșterea ascitei — Corect: Triada decompensării bruște este enumerată explicit.\n\nOrice tumoră hepatică solidă, CHC fiind inclus în diagnosticul diferențial — Corect: Includerea CHC la orice tumoră hepatică solidă este enunțată.\n\nO leziune chistică simplă, seroasă, fără comunicare biliară, ca chistul de 10% — Incorect: Chistul simplu seros nu este pattern-ul de suspiciune CHC.\n\nAFP sub 50 mg/dL, fără imagistică bianuală — Incorect: Screening-ul bianual și AFP rămân relevante; pragul diagnostic este 500–1.000.\n\nWashout-ul arterial infirmă CHC, biopsia fiind primul pas la leziunea sub 1 cm — Incorect: Washout-ul este aspectul tipic; biopsia se rezervă când pattern-ul lipsește, iar pragul de investigare este >1 cm.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 321, CHC — Decompensare bruscă (icter, encefalopatie, ascită) (pagini PDF: 191).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    321
   ],
   "pdfPages": [
    191
   ],
   "section": "CHC — Decompensare bruscă (icter, encefalopatie, ascită)"
  },
  "learningObjective": "Recunoașterea decompensării bruște (icter, encefalopatie, ascită) și a includerii CHC la orice tumoră solidă, versus chistul simplu.",
  "optionRationales": [
   "Triada decompensării bruște este enumerată explicit.",
   "Includerea CHC la orice tumoră hepatică solidă este enunțată.",
   "Chistul simplu seros nu este pattern-ul de suspiciune CHC.",
   "Screening-ul bianual și AFP rămân relevante; pragul diagnostic este 500–1.000.",
   "Washout-ul este aspectul tipic; biopsia se rezervă când pattern-ul lipsește, iar pragul de investigare este >1 cm."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește decompensarea bruscă cu chistul simplu și inversează indicația biopsiei față de washout."
  },
  "textbookExpressions": [
   "decompensare clinică bruscă",
   "encefalopatie"
  ]
 },
 {
  "id": "ficat-splina-adv-053",
  "topicId": "ficat-splina",
  "type": "CS",
  "stem": "Hepatocitele normale primesc, prin fluxul venos portal, circa 70% din necesarul sanguin și aproximativ:",
  "options": [
   "50% din oxigen",
   "10% din oxigen, identic arterei hepatice",
   "90% din oxigen, analog CHC-ului arterial",
   "Niciun procent de oxigen, tot oxigenul fiind arterial",
   "25% din oxigen, analog sfertului de flux arterial"
  ],
  "correct": [
   0
  ],
  "explanation": "50% din oxigen — Corect: Textul asociază fluxului portal atât ~70% din sânge, cât și ~50% din oxigen.\n\n10% din oxigen, identic arterei hepatice — Incorect: 10% nu figurează; artera aduce restul, nu 90% din oxigen.\n\n90% din oxigen, analog CHC-ului arterial — Incorect: CHC este predominant arterial; hepatocitul normal este predominant portal.\n\nNiciun procent de oxigen, tot oxigenul fiind arterial — Incorect: Oxigenul portal este tocmai cifra citată.\n\n25% din oxigen, analog sfertului de flux arterial — Incorect: 25% este sfertul de flux arterial, nu ponderea de oxigen portal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 322, CHC — Oxigenul portal al hepatocitului normal (pagini PDF: 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    322
   ],
   "pdfPages": [
    192
   ],
   "section": "CHC — Oxigenul portal al hepatocitului normal"
  },
  "learningObjective": "Fixarea ponderii de oxigen (~50%) aduse pe cale portală hepatocitului normal, distinctă de 70% din debitul sanguin și de predilecția arterială a CHC.",
  "optionRationales": [
   "Textul asociază fluxului portal atât ~70% din sânge, cât și ~50% din oxigen.",
   "10% nu figurează; artera aduce restul, nu 90% din oxigen.",
   "CHC este predominant arterial; hepatocitul normal este predominant portal.",
   "Oxigenul portal este tocmai cifra citată.",
   "25% este sfertul de flux arterial, nu ponderea de oxigen portal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 50% oxigen portal cu 25% (flux arterial) sau cu arterializarea CHC, două procente din același paragraf de TACE/Y90."
  },
  "textbookExpressions": [
   "S-0% din oxigen",
   "hepatocitele normale"
  ]
 },
 {
  "id": "ficat-splina-adv-054",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Colangiocarcinomul hilar/central, dincolo de icterul cu veziculă mică, se caracterizează prin:",
  "options": [
   "Frecvent nu există tumoră vizibilă pe CT, în timp ce colangio-IRM poate evidenția lipsa unui segment al arborelui biliar central",
   "ERCP poate identifica stenoze ale ductelor biliare",
   "Alte tumori rare primare includ angiosarcomul și hemangioendoteliomul epitelioid",
   "Captarea arterială cu washout și inel hiperdens este diagnostică, analog CHC",
   "Criteriile Milano (unică <5 cm) ghidează transplantul acestor leziuni hilare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Frecvent nu există tumoră vizibilă pe CT, în timp ce colangio-IRM poate evidenția lipsa unui segment al arborelui biliar central — Corect: Absența tumorii pe CT și semnul de segment lipsă la colangio-IRM sunt explicite.\n\nERCP poate identifica stenoze ale ductelor biliare — Corect: Stenozele la ERCP sunt citate.\n\nAlte tumori rare primare includ angiosarcomul și hemangioendoteliomul epitelioid — Corect: Angiosarcomul și hemangioendoteliomul epitelioid sunt listate ca tumori rare primare.\n\nCaptarea arterială cu washout și inel hiperdens este diagnostică, analog CHC — Incorect: Washout-ul arterial este al CHC, nu al Klatskin.\n\nCriteriile Milano (unică <5 cm) ghidează transplantul acestor leziuni hilare — Incorect: Milano ghidează transplantul în CHC, nu în colangiocarcinomul hilar.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 322, Colangiocarcinom — CT mut, colangio-IRM și ERCP (pagini PDF: 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    322
   ],
   "pdfPages": [
    192
   ],
   "section": "Colangiocarcinom — CT mut, colangio-IRM și ERCP"
  },
  "learningObjective": "Contrastarea absenței masei CT și a golului central la colangio-IRM/stenozele ERCP de washout-ul CHC și de Milano.",
  "optionRationales": [
   "Absența tumorii pe CT și semnul de segment lipsă la colangio-IRM sunt explicite.",
   "Stenozele la ERCP sunt citate.",
   "Angiosarcomul și hemangioendoteliomul epitelioid sunt listate ca tumori rare primare.",
   "Washout-ul arterial este al CHC, nu al Klatskin.",
   "Milano ghidează transplantul în CHC, nu în colangiocarcinomul hilar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune washout-ul CHC și criteriile Milano pe Klatskin, ignorând CT-ul mut și colangio-IRM."
  },
  "textbookExpressions": [
   "colangio-IRM",
   "tumori Klatskin"
  ]
 },
 {
  "id": "ficat-splina-adv-055",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Chisturile hepatice simple multiple, spre deosebire de boala polichistică, se caracterizează prin:",
  "options": [
   "Când sunt multiple, sunt în număr de aproximativ 3–4 și dispuse aleator în ficat",
   "Hemoragia intrachistică în chisturile voluminoase poate face diferențierea de un chist neoplazic sau infecțios dificilă",
   "Sunt zeci-sute, progresive, autozomal dominante, cu rinichi polichistici constant",
   "Aspirația prin puncție vindecă definitiv, fără recidivă simptomatică",
   "Decorticarea este ineficientă, analog bolii polichistice extensive"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Când sunt multiple, sunt în număr de aproximativ 3–4 și dispuse aleator în ficat — Corect: Cifra 3–4 și dispoziția aleatorie sunt explicite.\n\nHemoragia intrachistică în chisturile voluminoase poate face diferențierea de un chist neoplazic sau infecțios dificilă — Corect: Hemoragia care mimează chistul neoplazic/infecțios este enunțată.\n\nSunt zeci-sute, progresive, autozomal dominante, cu rinichi polichistici constant — Incorect: Zecile de chiste progresive definesc boala polichistică, nu chistul simplu multiplu.\n\nAspirația prin puncție vindecă definitiv, fără recidivă simptomatică — Incorect: Aspirația ameliorează, dar simptomele reapar în majoritatea situațiilor.\n\nDecorticarea este ineficientă, analog bolii polichistice extensive — Incorect: Decorticarea este tratamentul standard al chistului simptomatic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 323, Chistul simplu — 3–4 leziuni aleatorii și hemoragia intrachistică (pagini PDF: 193).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    323
   ],
   "pdfPages": [
    193
   ],
   "section": "Chistul simplu — 3–4 leziuni aleatorii și hemoragia intrachistică"
  },
  "learningObjective": "Diferențierea clusterului de 3–4 chiste aleatorii și a capcanei hemoragiei intrachistice de polichistoza progresivă.",
  "optionRationales": [
   "Cifra 3–4 și dispoziția aleatorie sunt explicite.",
   "Hemoragia care mimează chistul neoplazic/infecțios este enunțată.",
   "Zecile de chiste progresive definesc boala polichistică, nu chistul simplu multiplu.",
   "Aspirația ameliorează, dar simptomele reapar în majoritatea situațiilor.",
   "Decorticarea este tratamentul standard al chistului simptomatic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Egalizează 3–4 chiste aleatorii cu polichistoza progresivă și tratează puncția ca vindecare definitivă."
  },
  "textbookExpressions": [
   "3-4",
   "dispuse aleator"
  ]
 },
 {
  "id": "ficat-splina-adv-056",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Drenajul venos al splinei se caracterizează prin:",
  "options": [
   "Se realizează prin vena splenică și venele gastrice scurte",
   "Vena splenică are traiect paralel cu artera splenică",
   "Vena splenică se unește cu vena mezenterică superioară, formând vena portă",
   "Artera splenică este ramură a mezentericei superioare, fără vene gastrice scurte",
   "Vena splenică se varsă direct în VCI, analog suprahepaticelor"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se realizează prin vena splenică și venele gastrice scurte — Corect: Cele două căi venoase sunt explicite.\n\nVena splenică are traiect paralel cu artera splenică — Corect: Traiectul paralel arteră-venă este citat.\n\nVena splenică se unește cu vena mezenterică superioară, formând vena portă — Corect: Confluența cu VMS formând porta este enunțată.\n\nArtera splenică este ramură a mezentericei superioare, fără vene gastrice scurte — Incorect: Artera splenică este celiacă; gastricele scurte există.\n\nVena splenică se varsă direct în VCI, analog suprahepaticelor — Incorect: Porta, nu VCI, este confluența splenică + VMS.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 333, Anatomia splinei — Vena splenică, gastrice scurte și confluența portă (pagini PDF: 195).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    333
   ],
   "pdfPages": [
    195
   ],
   "section": "Anatomia splinei — Vena splenică, gastrice scurte și confluența portă"
  },
  "learningObjective": "Fixarea dublei căi venoase (splenică + gastrice scurte), a paralelismului arteră-venă și a confluenței cu VMS.",
  "optionRationales": [
   "Cele două căi venoase sunt explicite.",
   "Traiectul paralel arteră-venă este citat.",
   "Confluența cu VMS formând porta este enunțată.",
   "Artera splenică este celiacă; gastricele scurte există.",
   "Porta, nu VCI, este confluența splenică + VMS."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Varsă vena splenică în VCI și mută originea arterei la mezenterica superioară, două erori de confluență din același paragraf."
  },
  "textbookExpressions": [
   "vena splenică",
   "vena mezenterică superioară"
  ]
 },
 {
  "id": "ficat-splina-adv-057",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Radiografia abdominală pe gol, în patologia splenică, se caracterizează prin:",
  "options": [
   "Splenomegalia poate fi sugerată indirect de devierea colonului caudal sau a stomacului medial, ori de ascensionarea hemidiafragmului stâng",
   "Uneori se observă un contur radiologic mărit al splinei",
   "Fracturile arcurilor costale inferioare stângi pot fi sugestive pentru leziuni concomitente ale parenchimului splenic",
   "Radiografia pe gol evidențiază constant splina normală, CT-ul fiind superfluu",
   "Fracturile costale stângi infirmă leziunea splenică, colonul deviat fiind un semn de splină accessory"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Splenomegalia poate fi sugerată indirect de devierea colonului caudal sau a stomacului medial, ori de ascensionarea hemidiafragmului stâng — Corect: Devierea colon/stomac și hemidiafragmul stâng ascensionat sunt explicite.\n\nUneori se observă un contur radiologic mărit al splinei — Corect: Conturul radiologic mărit este citat.\n\nFracturile arcurilor costale inferioare stângi pot fi sugestive pentru leziuni concomitente ale parenchimului splenic — Corect: Fracturile costale inferioare stângi ca indiciu de leziune splenică sunt enunțate.\n\nRadiografia pe gol evidențiază constant splina normală, CT-ul fiind superfluu — Incorect: Textul precizează că splina normală este rar evidențiată pe gol.\n\nFracturile costale stângi infirmă leziunea splenică, colonul deviat fiind un semn de splină accessory — Incorect: Fracturile stângi sugerează, nu infirmă, leziunea parenchimatoasă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 336, Imagistica splinei — Radiografia pe gol și coastele stângi (pagini PDF: 198).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    336
   ],
   "pdfPages": [
    198
   ],
   "section": "Imagistica splinei — Radiografia pe gol și coastele stângi"
  },
  "learningObjective": "Recunoașterea semnelor indirecte de splenomegalie și a asocierii fracturilor costale inferioare stângi cu leziunea splenică.",
  "optionRationales": [
   "Devierea colon/stomac și hemidiafragmul stâng ascensionat sunt explicite.",
   "Conturul radiologic mărit este citat.",
   "Fracturile costale inferioare stângi ca indiciu de leziune splenică sunt enunțate.",
   "Textul precizează că splina normală este rar evidențiată pe gol.",
   "Fracturile stângi sugerează, nu infirmă, leziunea parenchimatoasă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează semnul coastelor stângi și tratează radiografia pe gol ca vizualizare constantă a splinei normale."
  },
  "textbookExpressions": [
   "hemidiafragmul",
   "arcurilor costale"
  ]
 },
 {
  "id": "ficat-splina-adv-058",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "AngioCT-ul și embolizarea splenică, potrivit capitolului, se caracterizează prin:",
  "options": [
   "Secțiunile fine angioCT au înlocuit cateterizarea arterei splenice pentru evaluarea lacerărilor la traumatizatul abdominal hemodinamic stabil, cu lichid liber la US",
   "Embolizarea arterei splenice poate reduce sângerarea înaintea splenectomiei; embolizarea parțială selectivă controlează hipersplenismul la copiii cu HTP și hemoragia din lacerări",
   "AngioCT-ul este rezervat instabilului, cateterizarea fiind standardul la stabil",
   "Embolizarea este contraindicată înaintea splenectomiei laparoscopice",
   "Lichidul liber la US infirmă lacerarea, angioCT-ul fiind superfluu"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Secțiunile fine angioCT au înlocuit cateterizarea arterei splenice pentru evaluarea lacerărilor la traumatizatul abdominal hemodinamic stabil, cu lichid liber la US — Corect: Înlocuirea cateterizării de angioCT la stabilul cu lichid liber este explicită.\n\nEmbolizarea arterei splenice poate reduce sângerarea înaintea splenectomiei; embolizarea parțială selectivă controlează hipersplenismul la copiii cu HTP și hemoragia din lacerări — Corect: Embolizarea preoperatorie și cea parțială (copil cu HTP, lacerare) sunt citate.\n\nAngioCT-ul este rezervat instabilului, cateterizarea fiind standardul la stabil — Incorect: Instabilul nu se evaluează prin angioCT electiv; standardul rămâne laparotomia.\n\nEmbolizarea este contraindicată înaintea splenectomiei laparoscopice — Incorect: Embolizarea este descrisă ca utilă înaintea splenectomiei.\n\nLichidul liber la US infirmă lacerarea, angioCT-ul fiind superfluu — Incorect: Lichidul liber este tocmai contextul angioCT, nu o infirmare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 337, AngioCT și embolizare — Stabilul traumatic și hipersplenismul pediatric (pagini PDF: 199).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    337
   ],
   "pdfPages": [
    199
   ],
   "section": "AngioCT și embolizare — Stabilul traumatic și hipersplenismul pediatric"
  },
  "learningObjective": "Contrastarea înlocuirii angiografiei clasice de angioCT la stabil și a embolizării (pre-splenectomie, hipersplenism copil, lacerare).",
  "optionRationales": [
   "Înlocuirea cateterizării de angioCT la stabilul cu lichid liber este explicită.",
   "Embolizarea preoperatorie și cea parțială (copil cu HTP, lacerare) sunt citate.",
   "Instabilul nu se evaluează prin angioCT electiv; standardul rămâne laparotomia.",
   "Embolizarea este descrisă ca utilă înaintea splenectomiei.",
   "Lichidul liber este tocmai contextul angioCT, nu o infirmare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune angioCT-ul la instabil și interzice embolizarea pre-splenectomie, două inversări din același paragraf de imagistică."
  },
  "textbookExpressions": [
   "angioCT",
   "Embolizarea"
  ]
 },
 {
  "id": "ficat-splina-adv-059",
  "topicId": "ficat-splina",
  "type": "CS",
  "stem": "Conform Tabelului 20-5, abcesul splenic este deseori asociat cu:",
  "options": [
   "Abuz de droguri sau SIDA",
   "Sferocitoză ereditară la copilul sub 4 ani",
   "Anevrism de arteră splenică izolat, fără infecție",
   "Litiază biliară simptomatică din sferocitoză",
   "Vaccinarea antipneumococică de principiu, fără factor de risc infecțios"
  ],
  "correct": [
   0
  ],
  "explanation": "Abuz de droguri sau SIDA — Corect: Paranteza tabelului leagă explicit abcesul splenic de abuzul de droguri sau SIDA.\n\nSferocitoză ereditară la copilul sub 4 ani — Incorect: Sferocitoza este o indicație hematologică, nu asocierea abcesului.\n\nAnevrism de arteră splenică izolat, fără infecție — Incorect: Anevrismul de arteră splenică este o rubrică separată.\n\nLitiază biliară simptomatică din sferocitoză — Incorect: Litiaza din sferocitoză nu definește abcesul.\n\nVaccinarea antipneumococică de principiu, fără factor de risc infecțios — Incorect: Vaccinarea privește OPSI, nu etiologia abcesului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 337, Tabelul 20-5 — Abcesul splenic (droguri, SIDA) (pagini PDF: 199).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    337
   ],
   "pdfPages": [
    199
   ],
   "section": "Tabelul 20-5 — Abcesul splenic (droguri, SIDA)"
  },
  "learningObjective": "Recunoașterea asocierii tabelate a abcesului splenic cu abuzul de droguri sau SIDA, distinctă de indicațiile hematologice.",
  "optionRationales": [
   "Paranteza tabelului leagă explicit abcesul splenic de abuzul de droguri sau SIDA.",
   "Sferocitoza este o indicație hematologică, nu asocierea abcesului.",
   "Anevrismul de arteră splenică este o rubrică separată.",
   "Litiaza din sferocitoză nu definește abcesul.",
   "Vaccinarea privește OPSI, nu etiologia abcesului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută abcesul splenic pe sferocitoză sau anevrism, două rânduri alăturate din Tabelul 20-5."
  },
  "textbookExpressions": [
   "Abces splenic",
   "SIDA"
  ]
 },
 {
  "id": "ficat-splina-adv-060",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Anomaliile funcției splenice se caracterizează prin:",
  "options": [
   "Mărimea splinei nu se corelează cu funcția hematologică; splenomegalia nu trebuie confundată cu hipersplenismul",
   "Splenectomia este cea mai comună cauză de asplenie; siclemia poate duce la asplenie funcțională prin infarcte repetate și fibroză",
   "Cele trei categorii în care splenectomia poate fi utilă sunt anemiile hemolitice, trombocitopenia imună și hipersplenismul secundar",
   "Splenomegalia echivalează hipersplenismul, siclemia crescând dimensiunea fără a afecta funcția",
   "Asplenia congenitală este cauza dominantă, splenectomia fiind rară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mărimea splinei nu se corelează cu funcția hematologică; splenomegalia nu trebuie confundată cu hipersplenismul — Corect: Absența corelației mărime-funcție și distincția de hipersplenism sunt explicite.\n\nSplenectomia este cea mai comună cauză de asplenie; siclemia poate duce la asplenie funcțională prin infarcte repetate și fibroză — Corect: Splenectomia ca cauză comună de asplenie și mecanismul din siclemie sunt citate.\n\nCele trei categorii în care splenectomia poate fi utilă sunt anemiile hemolitice, trombocitopenia imună și hipersplenismul secundar — Corect: Cele trei categorii sunt enumerate.\n\nSplenomegalia echivalează hipersplenismul, siclemia crescând dimensiunea fără a afecta funcția — Incorect: Textul cere tocmai să nu se confunde splenomegalia cu hipersplenismul; siclemia duce la asplenie funcțională.\n\nAsplenia congenitală este cauza dominantă, splenectomia fiind rară — Incorect: Asplenia/hiposplenismul congenital sunt extrem de rare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 338, Funcția splenică — Splenomegalie versus hipersplenism și siclemie (pagini PDF: 200).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    338
   ],
   "pdfPages": [
    200
   ],
   "section": "Funcția splenică — Splenomegalie versus hipersplenism și siclemie"
  },
  "learningObjective": "Separarea dimensiunii de funcție, a aspleniei din siclemie (infarcte/fibroză) și a celor trei categorii de indicație.",
  "optionRationales": [
   "Absența corelației mărime-funcție și distincția de hipersplenism sunt explicite.",
   "Splenectomia ca cauză comună de asplenie și mecanismul din siclemie sunt citate.",
   "Cele trei categorii sunt enumerate.",
   "Textul cere tocmai să nu se confunde splenomegalia cu hipersplenismul; siclemia duce la asplenie funcțională.",
   "Asplenia/hiposplenismul congenital sunt extrem de rare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Egalizează splenomegalia cu hipersplenismul și neagă asplenia funcțională din siclemie, două distincții din același paragraf."
  },
  "textbookExpressions": [
   "siclemia",
   "hipersplenismul"
  ]
 },
 {
  "id": "ficat-splina-adv-061",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "În talasemia majoră (β-talasemie homozigotă), splenectomia:",
  "options": [
   "Este benefică prin reducerea necesarului de transfuzie, a disconfortului din splenomegalia masivă și a potențialului de ruptură",
   "Asociază riscul cel mai ridicat de OPSI; de aceea, alternativele (embolizare splenică, splenectomie parțială) sunt preferate",
   "Vindecă sinteza de hemoglobină, OPSI fiind neglijabil față de sferocitoză",
   "Este inutilă, analog siclemiei homozigote cu asplenie deja instalată",
   "Se face de principiu înainte de 2 ani, vaccinarea fiind superfluă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este benefică prin reducerea necesarului de transfuzie, a disconfortului din splenomegalia masivă și a potențialului de ruptură — Corect: Cele trei beneficii sunt enumerate.\n\nAsociază riscul cel mai ridicat de OPSI; de aceea, alternativele (embolizare splenică, splenectomie parțială) sunt preferate — Corect: Riscul maxim de OPSI și preferința pentru alternative sunt explicite.\n\nVindecă sinteza de hemoglobină, OPSI fiind neglijabil față de sferocitoză — Incorect: Splenectomia nu corectează defectul de sinteză; OPSI este maxim, nu neglijabil.\n\nEste inutilă, analog siclemiei homozigote cu asplenie deja instalată — Incorect: În siclemie splenectomia este rară; în talasemia majoră este descrisă ca benefică, cu rezerve.\n\nSe face de principiu înainte de 2 ani, vaccinarea fiind superfluă — Incorect: Copiii mici au risc crescut de OPSI; vaccinarea rămâne esențială.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 338, Talasemia majoră — Beneficiu transfuzional și risc maxim de OPSI (pagini PDF: 200).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    338
   ],
   "pdfPages": [
    200
   ],
   "section": "Talasemia majoră — Beneficiu transfuzional și risc maxim de OPSI"
  },
  "learningObjective": "Aplicarea beneficiului (transfuzii, disconfort, ruptură) și a preferinței pentru embolizare/splenectomie parțială din cauza OPSI maxim.",
  "optionRationales": [
   "Cele trei beneficii sunt enumerate.",
   "Riscul maxim de OPSI și preferința pentru alternative sunt explicite.",
   "Splenectomia nu corectează defectul de sinteză; OPSI este maxim, nu neglijabil.",
   "În siclemie splenectomia este rară; în talasemia majoră este descrisă ca benefică, cu rezerve.",
   "Copiii mici au risc crescut de OPSI; vaccinarea rămâne esențială."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Minimizează OPSI-ul (maxim în talasemie) și transformă splenectomia într-o vindecare a hemoglobinopatiei."
  },
  "textbookExpressions": [
   "talasemia majoră",
   "OPSI"
  ]
 },
 {
  "id": "ficat-splina-adv-062",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Conform Tabelului 20-7, anemiile hemolitice ereditare se caracterizează prin:",
  "options": [
   "Eliptocitoza: transmitere autozomal dominantă, nivele scăzute de spectrină, utilitatea splenectomiei uzuală",
   "Deficitul de piruvat-kinază: autozomal recesiv, scăderea ATP cu distrugerea membranei, splenectomie rară",
   "Deficitul de G6PD: sex-linkat recesiv, șunt pentozo-fosfat blocat, injurie oxidativă (sulfametoxazol, ASA, fenacetină, nitrofurantoin), splenectomie fără utilitate",
   "Siclemia: autozomal recesivă, înlocuire Glu→Val în poziția 6 a lanțului β, splenectomie rară",
   "G6PD se transmite autozomal dominant, analog sferocitozei, iar eliptocitoza este sex-linkată"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Eliptocitoza: transmitere autozomal dominantă, nivele scăzute de spectrină, utilitatea splenectomiei uzuală — Corect: Rândul eliptocitozei (AD, spectrină, uzual) este tabelat.\n\nDeficitul de piruvat-kinază: autozomal recesiv, scăderea ATP cu distrugerea membranei, splenectomie rară — Corect: Rândul PK (AR, ATP, rar) este tabelat.\n\nDeficitul de G6PD: sex-linkat recesiv, șunt pentozo-fosfat blocat, injurie oxidativă (sulfametoxazol, ASA, fenacetină, nitrofurantoin), splenectomie fără utilitate — Corect: Rândul G6PD (X-linkat, oxidanți, fără utilitate) este tabelat.\n\nSiclemia: autozomal recesivă, înlocuire Glu→Val în poziția 6 a lanțului β, splenectomie rară — Corect: Rândul siclemiei (AR, Val6, rar) este tabelat.\n\nG6PD se transmite autozomal dominant, analog sferocitozei, iar eliptocitoza este sex-linkată — Incorect: G6PD este sex-linkat recesiv; eliptocitoza este autozomal dominantă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 339, Tabelul 20-7 — Eliptocitoză, PK, G6PD și siclemie (pagini PDF: 201).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    339
   ],
   "pdfPages": [
    201
   ],
   "section": "Tabelul 20-7 — Eliptocitoză, PK, G6PD și siclemie"
  },
  "learningObjective": "Diferențierea transmiterii și a utilității splenectomiei între eliptocitoză (AD, uzual), PK (AR, rar), G6PD (X-linkat, fără utilitate) și siclemie (AR, rar).",
  "optionRationales": [
   "Rândul eliptocitozei (AD, spectrină, uzual) este tabelat.",
   "Rândul PK (AR, ATP, rar) este tabelat.",
   "Rândul G6PD (X-linkat, oxidanți, fără utilitate) este tabelat.",
   "Rândul siclemiei (AR, Val6, rar) este tabelat.",
   "G6PD este sex-linkat recesiv; eliptocitoza este autozomal dominantă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează transmiterea X-linkată a G6PD cu AD-ul sferocitozei/eliptocitozei, două rânduri alăturate din Tabelul 20-7."
  },
  "textbookExpressions": [
   "Deficit de G6PD",
   "Eliptocitoza"
  ]
 },
 {
  "id": "ficat-splina-adv-063",
  "topicId": "ficat-splina",
  "type": "CM",
  "stem": "Splenectomia, în trombocitopenii, în general nu este indicată în:",
  "options": [
   "Trombocitopeniile induse medicamentos",
   "Trombocitopenia neonatală",
   "Purpura post-transfuzională",
   "Trombocitopenia imună idiopatică a adultului, cu rată de răspuns 60–85% după splenectomie",
   "TI asociată leucemiei limfatice cronice sau lupusului, unde splenectomia este uneori indicată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Trombocitopeniile induse medicamentos — Corect: Inducția medicamentoasă este prima situație listată fără indicație.\n\nTrombocitopenia neonatală — Corect: Trombocitopenia neonatală este a doua.\n\nPurpura post-transfuzională — Corect: Purpura post-transfuzională este a treia.\n\nTrombocitopenia imună idiopatică a adultului, cu rată de răspuns 60–85% după splenectomie — Incorect: TI idiopatică a adultului este tocmai indicația clasică, cu 60–85% pe pagina următoare.\n\nTI asociată leucemiei limfatice cronice sau lupusului, unde splenectomia este uneori indicată — Incorect: Textul precizează că splenectomia este uneori indicată în LLC/LES.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 20, p. 339, 340, Trombocitopenia — Situațiile fără indicație de splenectomie (pagini PDF: 201, 202).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 20,
   "printedPages": [
    339,
    340
   ],
   "pdfPages": [
    201,
    202
   ],
   "section": "Trombocitopenia — Situațiile fără indicație de splenectomie"
  },
  "learningObjective": "Recunoașterea triadei (medicamentoasă, neonatală, post-transfuzională) în care splenectomia nu este, în general, indicată.",
  "optionRationales": [
   "Inducția medicamentoasă este prima situație listată fără indicație.",
   "Trombocitopenia neonatală este a doua.",
   "Purpura post-transfuzională este a treia.",
   "TI idiopatică a adultului este tocmai indicația clasică, cu 60–85% pe pagina următoare.",
   "Textul precizează că splenectomia este uneori indicată în LLC/LES."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde interdicția asupra TI idiopatice a adultului, care este indicația clasică, și uită triada medicamentoasă–neonatală–PTP."
  },
  "textbookExpressions": [
   "post-transfuzionale",
   "Trombocitopenia"
  ]
 }
];
