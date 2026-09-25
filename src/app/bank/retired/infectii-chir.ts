import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_INFECTII_CHIR:Question[]=[
 {
  "id": "infectii-chir-adv-001",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la factorii care cresc incidența infecțiilor chirurgicale:",
  "options": [
   "Factorii locali includ hematomul de plagă, țesutul necrotic, corpul străin, obezitatea și contaminarea",
   "Factorii sistemici includ vârsta înaintată, șocul, diabetul, malnutriția, alcoolismul și corticoterapia",
   "Hematoamele constituie un mediu bogat în fier care potențează multiplicarea bacteriană",
   "Oxigenarea ineficientă la nivelul zonei contaminate scade riscul de infecție, prin inhibarea bacteriilor anaerobe",
   "Țesuturile devitalizate nu favorizează dezvoltarea bacteriană, deoarece lipsa celulelor de apărare este compensată de inflamație"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Factorii locali includ hematomul de plagă, țesutul necrotic, corpul străin, obezitatea și contaminarea — Corect: Lista factorilor locali este tabelată explicit.\n\nFactorii sistemici includ vârsta înaintată, șocul, diabetul, malnutriția, alcoolismul și corticoterapia — Corect: Lista factorilor sistemici este tabelată explicit.\n\nHematoamele constituie un mediu bogat în fier care potențează multiplicarea bacteriană — Corect: Mediul bogat în fier al hematomului este descris.\n\nOxigenarea ineficientă la nivelul zonei contaminate scade riscul de infecție, prin inhibarea bacteriilor anaerobe — Incorect: Oxigenarea ineficientă crește, nu scade, riscul de infecție.\n\nȚesuturile devitalizate nu favorizează dezvoltarea bacteriană, deoarece lipsa celulelor de apărare este compensată de inflamație — Incorect: Țesuturile devitalizate sunt un mediu propice prin absența celulelor de apărare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 75, Patogenia infecțiilor — Factorii de risc (pagini PDF: 20).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    75
   ],
   "pdfPages": [
    20
   ],
   "section": "Patogenia infecțiilor — Factorii de risc"
  },
  "learningObjective": "Diferențierea factorilor locali de cei sistemici și a rolului hematomului și al țesutului devitalizat ca mediu de proliferare.",
  "optionRationales": [
   "Lista factorilor locali este tabelată explicit.",
   "Lista factorilor sistemici este tabelată explicit.",
   "Mediul bogat în fier al hematomului este descris.",
   "Oxigenarea ineficientă crește, nu scade, riscul de infecție.",
   "Țesuturile devitalizate sunt un mediu propice prin absența celulelor de apărare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează două relații patogenice (oxigenare și țesut devitalizat) pe fondul listelor tabelate."
  },
  "textbookExpressions": [
   "Hematom de plagă",
   "Tesut necrotic"
  ]
 },
 {
  "id": "infectii-chir-adv-002",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Sunt adevărate următoarele afirmații despre antibioterapia profilactică perioperatorie:",
  "options": [
   "Doza preoperatorie se administrează, de regulă, cu o oră înainte de incizie, pentru a asigura concentrația tisulară maximă",
   "Fluorochinolonele și vancomicina necesită administrare pe 1–2 ore, deci se încep cu 120 de minute înainte de incizie",
   "Antibioticele sistemice administrate după contaminarea plăgii rămân la fel de eficiente în stoparea procesului infecțios ca cele preoperatorii",
   "Cazurile curate, cu risc redus de contaminare, necesită în toate situațiile antibioterapie profilactică, indiferent de materialele folosite",
   "Dozele suplimentare intraoperatorii nu sunt necesare, indiferent de durata intervenției sau de pierderile de sânge"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Doza preoperatorie se administrează, de regulă, cu o oră înainte de incizie, pentru a asigura concentrația tisulară maximă — Corect: Administrarea cu o oră înainte de incizie este regula generală.\n\nFluorochinolonele și vancomicina necesită administrare pe 1–2 ore, deci se încep cu 120 de minute înainte de incizie — Corect: Excepția de 120 de minute pentru FQ și vancomicină este explicită.\n\nAntibioticele sistemice administrate după contaminarea plăgii rămân la fel de eficiente în stoparea procesului infecțios ca cele preoperatorii — Incorect: Textul precizează că antibioticele după contaminare nu sunt eficiente în stoparea procesului.\n\nCazurile curate, cu risc redus de contaminare, necesită în toate situațiile antibioterapie profilactică, indiferent de materialele folosite — Incorect: Cazurile curate nu necesită profilaxie, cu excepția materialelor protetice.\n\nDozele suplimentare intraoperatorii nu sunt necesare, indiferent de durata intervenției sau de pierderile de sânge — Incorect: Doze suplimentare sunt necesare dacă durata depășește 2× t½ sau există pierderi excesive de sânge.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 76, Antibioterapie perioperatorie (pagini PDF: 21).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    76
   ],
   "pdfPages": [
    21
   ],
   "section": "Antibioterapie perioperatorie"
  },
  "learningObjective": "Aplicarea timing-ului corect al profilaxiei (inclusiv excepțiile vanco/FQ) față de administrarea tardivă sau profilaxia neselectivă.",
  "optionRationales": [
   "Administrarea cu o oră înainte de incizie este regula generală.",
   "Excepția de 120 de minute pentru FQ și vancomicină este explicită.",
   "Textul precizează că antibioticele după contaminare nu sunt eficiente în stoparea procesului.",
   "Cazurile curate nu necesită profilaxie, cu excepția materialelor protetice.",
   "Doze suplimentare sunt necesare dacă durata depășește 2× t½ sau există pierderi excesive de sânge."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează timing-ul relativ la contaminare și generalizează greșit profilaxia la toate cazurile curate."
  },
  "textbookExpressions": [
   "cu o oră înainte",
   "120 de minute"
  ]
 },
 {
  "id": "infectii-chir-adv-003",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Conform clasificării plăgilor chirurgicale după nivelul de contaminare:",
  "options": [
   "Plăgile curate au o frecvență a infecției de aproximativ 3% și sursa tipică este flora Gram-pozitivă din sala de operație, echipă sau tegument",
   "Plăgile curat-contaminate au o frecvență a infecției de 5–15% și implică colonizarea endogenă a pacientului",
   "Plăgile contaminate au o frecvență a infecției de 15–40% și reflectă contaminare macroscopică, de exemplu cu conținut digestiv",
   "Plăgile curate au o frecvență a infecției de 15–40%, similară plăgilor contaminate",
   "Rezecția electivă de colon este un exemplu tipic de plagă curată, fără colonizare endogenă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Plăgile curate au o frecvență a infecției de aproximativ 3% și sursa tipică este flora Gram-pozitivă din sala de operație, echipă sau tegument — Corect: 3% și flora Gram-pozitivă pentru plăgile curate sunt tabelate.\n\nPlăgile curat-contaminate au o frecvență a infecției de 5–15% și implică colonizarea endogenă a pacientului — Corect: 5–15% și colonizarea endogenă definesc curat-contaminatul.\n\nPlăgile contaminate au o frecvență a infecției de 15–40% și reflectă contaminare macroscopică, de exemplu cu conținut digestiv — Corect: 15–40% și contaminarea macroscopică definesc contaminatul.\n\nPlăgile curate au o frecvență a infecției de 15–40%, similară plăgilor contaminate — Incorect: 15–40% aparține clasei contaminate, nu celei curate.\n\nRezecția electivă de colon este un exemplu tipic de plagă curată, fără colonizare endogenă — Incorect: Rezecția electivă de colon este exemplu de plagă curat-contaminată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 77, Clasificarea plăgilor chirurgicale după nivelul de contaminare (pagini PDF: 22).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    77
   ],
   "pdfPages": [
    22
   ],
   "section": "Clasificarea plăgilor chirurgicale după nivelul de contaminare"
  },
  "learningObjective": "Aplicarea frecvențelor de infecție și a exemplelor tipice pe clasele curat / curat-contaminat / contaminat.",
  "optionRationales": [
   "3% și flora Gram-pozitivă pentru plăgile curate sunt tabelate.",
   "5–15% și colonizarea endogenă definesc curat-contaminatul.",
   "15–40% și contaminarea macroscopică definesc contaminatul.",
   "15–40% aparține clasei contaminate, nu celei curate.",
   "Rezecția electivă de colon este exemplu de plagă curat-contaminată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii deplasează pragurile procentuale între clase și reclasifică greșit rezecția de colon."
  },
  "textbookExpressions": [
   "3%",
   "5-15%"
  ]
 },
 {
  "id": "infectii-chir-adv-004",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Indicați afirmațiile corecte despre selecția antibioterapiei profilactice în funcție de tipul intervenției:",
  "options": [
   "Cazurile curate cu risc redus de contaminare nu necesită, de regulă, antibioterapie profilactică",
   "Profilaxia este indicată când se folosesc materiale protetice (mese, dispozitive ortopedice, grefe vasculare sintetice)",
   "Chirurgia tubului digestiv inferior necesită adăugarea acoperirii anaerobilor, pe lângă acoperirea Gram-pozitivă și Gram-negativă",
   "Chirurgia digestivă superioară necesită acoperire doar a anaerobilor, fără acoperire Gram-negativă",
   "Riscul de infecție a plăgii în cazurile curat-contaminate este identic cu cel din cazurile curate"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cazurile curate cu risc redus de contaminare nu necesită, de regulă, antibioterapie profilactică — Corect: Absența profilaxiei de rutină în cazurile curate este explicită.\n\nProfilaxia este indicată când se folosesc materiale protetice (mese, dispozitive ortopedice, grefe vasculare sintetice) — Corect: Excepția materialelor protetice este menționată.\n\nChirurgia tubului digestiv inferior necesită adăugarea acoperirii anaerobilor, pe lângă acoperirea Gram-pozitivă și Gram-negativă — Corect: Acoperirea anaerobilor în chirurgia digestivă inferioară este cerută.\n\nChirurgia digestivă superioară necesită acoperire doar a anaerobilor, fără acoperire Gram-negativă — Incorect: Digestivul superior necesită acoperire Gram-pozitivă și Gram-negativă, nu doar anaerobi.\n\nRiscul de infecție a plăgii în cazurile curat-contaminate este identic cu cel din cazurile curate — Incorect: Riscul în curat-contaminat este de trei ori mai mare decât în curat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 76, Antibioterapie perioperatorie — Selecția după tipul intervenției (pagini PDF: 21).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    76
   ],
   "pdfPages": [
    21
   ],
   "section": "Antibioterapie perioperatorie — Selecția după tipul intervenției"
  },
  "learningObjective": "Diferențierea necesității de profilaxie în cazurile curate versus cu material protetic și a spectrului necesar pe etaje digestive.",
  "optionRationales": [
   "Absența profilaxiei de rutină în cazurile curate este explicită.",
   "Excepția materialelor protetice este menționată.",
   "Acoperirea anaerobilor în chirurgia digestivă inferioară este cerută.",
   "Digestivul superior necesită acoperire Gram-pozitivă și Gram-negativă, nu doar anaerobi.",
   "Riscul în curat-contaminat este de trei ori mai mare decât în curat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează spectrul pentru etajul digestiv superior și anulează diferența de risc curat vs curat-contaminat."
  },
  "textbookExpressions": [
   "materiale protetice",
   "anaerobilor"
  ]
 },
 {
  "id": "infectii-chir-adv-005",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații despre infecțiile piciorului la pacientul diabetic sunt adevărate?",
  "options": [
   "Rezultă frecvent din neuropatie, deformări osoase consecutive și degenerare vasculară, cu ulcerații ischemice și de presiune",
   "Ulcerele plantare la nivelul capetelor metatarsienelor sunt tipice pentru ulcerațiile de presiune",
   "În toate cazurile de celulită dorsală se impune căutarea unei surse plantare",
   "Infecțiile piciorului diabetic sunt tipic monomicrobiene, cauzate doar de stafilococ auriu",
   "Osteomielita piciorului diabetic apare numai când plaga prezintă semne evidente de infecție activă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Rezultă frecvent din neuropatie, deformări osoase consecutive și degenerare vasculară, cu ulcerații ischemice și de presiune — Corect: Triada neuropatie–deformare–degenerare vasculară este descrisă.\n\nUlcerele plantare la nivelul capetelor metatarsienelor sunt tipice pentru ulcerațiile de presiune — Corect: Ulcerele plantare la capetele metatarsienelor sunt tipice.\n\nÎn toate cazurile de celulită dorsală se impune căutarea unei surse plantare — Corect: Căutarea sursei plantare în celulita dorsală este o regulă explicită.\n\nInfecțiile piciorului diabetic sunt tipic monomicrobiene, cauzate doar de stafilococ auriu — Incorect: Infecțiile sunt de natură polimicrobiană, inclusiv Pseudomonas.\n\nOsteomielita piciorului diabetic apare numai când plaga prezintă semne evidente de infecție activă — Incorect: Osteomielita poate fi prezentă chiar fără semne de infecție activă a plăgii.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 82, Infecții ale piciorului — Pacientul diabetic (pagini PDF: 27).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    82
   ],
   "pdfPages": [
    27
   ],
   "section": "Infecții ale piciorului — Pacientul diabetic"
  },
  "learningObjective": "Recunoașterea mecanismelor ulcerației diabetice și a necesității de a căuta sursa plantară în celulita dorsală.",
  "optionRationales": [
   "Triada neuropatie–deformare–degenerare vasculară este descrisă.",
   "Ulcerele plantare la capetele metatarsienelor sunt tipice.",
   "Căutarea sursei plantare în celulita dorsală este o regulă explicită.",
   "Infecțiile sunt de natură polimicrobiană, inclusiv Pseudomonas.",
   "Osteomielita poate fi prezentă chiar fără semne de infecție activă a plăgii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează natura polimicrobiană și legătura osteomielită–aspectul plăgii, două erori clinice frecvente."
  },
  "textbookExpressions": [
   "capetelor metatarsienelor",
   "surse plantare"
  ]
 },
 {
  "id": "infectii-chir-adv-006",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Sunt adevărate următoarele afirmații despre ulcerul gastroduodenal perforat:",
  "options": [
   "Aproximativ 80% dintre pacienți au pneumoperitoneu la radiografia toracică simplă în ortostatism",
   "Toți pacienții cu ulcer perforat trebuie testați pentru Helicobacter pylori",
   "Perforația la pacienții cu aclorhidrie (endogenă sau indusă medicamentos) necesită terapie antifungică empirică",
   "Antibioterapia perioperatorie pe aerobi și anaerobi este rezervată doar perforațiilor vechi de peste 72 de ore",
   "CT-ul este mai puțin sensibil decât radiografia simplă în detectarea pneumoperitoneului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Aproximativ 80% dintre pacienți au pneumoperitoneu la radiografia toracică simplă în ortostatism — Corect: 80% cu pneumoperitoneu pe Rx în ortostatism este cifra citată.\n\nToți pacienții cu ulcer perforat trebuie testați pentru Helicobacter pylori — Corect: Testarea H. pylori este obligatoriu menționată pentru toți.\n\nPerforația la pacienții cu aclorhidrie (endogenă sau indusă medicamentos) necesită terapie antifungică empirică — Corect: Terapia antifungică empirică în aclorhidrie este o precizare importantă.\n\nAntibioterapia perioperatorie pe aerobi și anaerobi este rezervată doar perforațiilor vechi de peste 72 de ore — Incorect: Antibioterapia pe aerobi/anaerobi este indicată pentru perforațiile acute <24 h; prelungirea e pentru peritonită purulentă/abces.\n\nCT-ul este mai puțin sensibil decât radiografia simplă în detectarea pneumoperitoneului — Incorect: CT-ul este mai sensibil decât radiografia simplă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 83, Peritonita — Ulcer gastroduodenal perforat (pagini PDF: 28).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    83
   ],
   "pdfPages": [
    28
   ],
   "section": "Peritonita — Ulcer gastroduodenal perforat"
  },
  "learningObjective": "Aplicarea sensibilității imagistice, a testării H. pylori și a indicației antifungice în aclorhidrie.",
  "optionRationales": [
   "80% cu pneumoperitoneu pe Rx în ortostatism este cifra citată.",
   "Testarea H. pylori este obligatoriu menționată pentru toți.",
   "Terapia antifungică empirică în aclorhidrie este o precizare importantă.",
   "Antibioterapia pe aerobi/anaerobi este indicată pentru perforațiile acute <24 h; prelungirea e pentru peritonită purulentă/abces.",
   "CT-ul este mai sensibil decât radiografia simplă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează timing-ul antibioterapiei și relația de sensibilitate CT versus radiografie."
  },
  "textbookExpressions": [
   "80%",
   "Helicobacter"
  ]
 },
 {
  "id": "infectii-chir-adv-007",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte privind perforația apendiculară și perforația colonică:",
  "options": [
   "În absența intervenției, perforația apendiculară poate apărea în termen de 24 de ore de la debutul simptomelor",
   "Antibioterapia în apendicită trebuie îndreptată atât împotriva aerobilor enterici (E. coli), cât și a anaerobilor (Bacteroides fragilis)",
   "Perforația colonică cu peritonită difuză creează, de regulă, cel mai virulent tip de peritonită, din cauza concentrației mari de floră aerobă și anaerobă",
   "Perforațiile colonului se tratează, de regulă, doar cu antibiotice, fără rezecție sau deviere a tranzitului",
   "O perforație apendiculară limitată, cu abces periapendiceal, produce în mod tipic peritonită generalizată tip „abdomen de lemn”"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În absența intervenției, perforația apendiculară poate apărea în termen de 24 de ore de la debutul simptomelor — Corect: Fereastra de 24 de ore până la perforație este menționată.\n\nAntibioterapia în apendicită trebuie îndreptată atât împotriva aerobilor enterici (E. coli), cât și a anaerobilor (Bacteroides fragilis) — Corect: Acoperirea E. coli și B. fragilis este explicită.\n\nPerforația colonică cu peritonită difuză creează, de regulă, cel mai virulent tip de peritonită, din cauza concentrației mari de floră aerobă și anaerobă — Corect: Virulența maximă a perforației colonice este afirmată.\n\nPerforațiile colonului se tratează, de regulă, doar cu antibiotice, fără rezecție sau deviere a tranzitului — Incorect: Managementul perforației colonice necesită, de regulă, rezecție și deviere a tranzitului.\n\nO perforație apendiculară limitată, cu abces periapendiceal, produce în mod tipic peritonită generalizată tip „abdomen de lemn” — Incorect: Abcesul periapendiceal poate induce doar durere și apărare în fosa iliacă dreaptă, nu peritonită generalizată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 83, 84, Peritonita — Apendicita și perforația colonică (pagini PDF: 28, 29).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    83,
    84
   ],
   "pdfPages": [
    28,
    29
   ],
   "section": "Peritonita — Apendicita și perforația colonică"
  },
  "learningObjective": "Diferențierea peritonitei localizate de cea difuză și a virulenței particulare a perforației colonice.",
  "optionRationales": [
   "Fereastra de 24 de ore până la perforație este menționată.",
   "Acoperirea E. coli și B. fragilis este explicită.",
   "Virulența maximă a perforației colonice este afirmată.",
   "Managementul perforației colonice necesită, de regulă, rezecție și deviere a tranzitului.",
   "Abcesul periapendiceal poate induce doar durere și apărare în fosa iliacă dreaptă, nu peritonită generalizată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde greșit tabloul localizat la peritonită generalizată și omită necesitatea rezecției în perforația colonică."
  },
  "textbookExpressions": [
   "24 de ore",
   "Bacteroides"
  ]
 },
 {
  "id": "infectii-chir-adv-008",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Prevenția infecțiilor de plagă chirurgicală (IPC) include:",
  "options": [
   "Duș cu săpun sau soluții antiseptice cu o seară înaintea intervenției",
   "Părul corporal trebuie tuns și nu ras, imediat înaintea intervenției",
   "Pregătirea tegumentelor include un agent antiseptic pe bază de alcool",
   "Părul trebuie ras din timp, cu 24 de ore înainte, pentru a reduce flora",
   "Durata intervenției, temperatura corporală și controlul glicemiei nu influențează rata IPC"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Duș cu săpun sau soluții antiseptice cu o seară înaintea intervenției — Corect: Dușul cu săpun sau antiseptic cu o seară înainte este cerut explicit.\n\nPărul corporal trebuie tuns și nu ras, imediat înaintea intervenției — Corect: Tunsul, nu rasul, imediat înaintea intervenției, previne iritațiile care constituie porți de intrare.\n\nPregătirea tegumentelor include un agent antiseptic pe bază de alcool — Corect: Agentul antiseptic pe bază de alcool este precizat pentru reducerea florei endogene.\n\nPărul trebuie ras din timp, cu 24 de ore înainte, pentru a reduce flora — Incorect: Rasul este descurajat tocmai pentru că irită tegumentul; îndepărtarea se face imediat preoperator, nu cu 24 de ore înainte.\n\nDurata intervenției, temperatura corporală și controlul glicemiei nu influențează rata IPC — Incorect: Reducerea duratei, normotermia și controlul glicemiei scad semnificativ rata IPC.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 75, 76, Prevenția infecțiilor chirurgicale — Pregătirea mecanică (pagini PDF: 20, 21).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    75,
    76
   ],
   "pdfPages": [
    20,
    21
   ],
   "section": "Prevenția infecțiilor chirurgicale — Pregătirea mecanică"
  },
  "learningObjective": "Aplicarea măsurilor de pregătire a câmpului (duș, tuns nu ras, antiseptic alcoolic) versus miturile despre rasul precoce.",
  "optionRationales": [
   "Dușul cu săpun sau antiseptic cu o seară înainte este cerut explicit.",
   "Tunsul, nu rasul, imediat înaintea intervenției, previne iritațiile care constituie porți de intrare.",
   "Agentul antiseptic pe bază de alcool este precizat pentru reducerea florei endogene.",
   "Rasul este descurajat tocmai pentru că irită tegumentul; îndepărtarea se face imediat preoperator, nu cu 24 de ore înainte.",
   "Reducerea duratei, normotermia și controlul glicemiei scad semnificativ rata IPC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează regula tuns versus ras și anulează rolul duratei, temperaturii și glicemiei, trei măsuri din același paragraf."
  },
  "textbookExpressions": [
   "tuns şi nu ras",
   "cu o seară înainte"
  ]
 },
 {
  "id": "infectii-chir-adv-009",
  "topicId": "infectii-chir",
  "type": "CS",
  "stem": "Se estimează că proporția pacienților spitalizați care vor dobândi cel puțin o infecție nosocomială în timpul internării este de:",
  "options": [
   "5%",
   "1%",
   "20%",
   "50%",
   "80%"
  ],
  "correct": [
   0
  ],
  "explanation": "5% — Corect: Textul estimează că 5% dintre pacienții spitalizați vor dobândi cel puțin o infecție nosocomială.\n\n1% — Incorect: 1% subestimează incidența citată.\n\n20% — Incorect: 20% este ponderea IPC din infecțiile dobândite în spital, nu incidența nosocomială la internați.\n\n50% — Incorect: 50% corespunde riscului de infecție al plăgilor murdare, nu incidenței nosocomiale globale.\n\n80% — Incorect: 80% nu figurează ca incidență a infecțiilor nosocomiale.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 77, Clasificarea după modul de dobândire — Infecțiile nosocomiale (pagini PDF: 22).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    77
   ],
   "pdfPages": [
    22
   ],
   "section": "Clasificarea după modul de dobândire — Infecțiile nosocomiale"
  },
  "learningObjective": "Recunoașterea incidenței de 5% a infecției nosocomiale, distinctă de alte procente din capitol (IPC 20%, PAV 22%).",
  "optionRationales": [
   "Textul estimează că 5% dintre pacienții spitalizați vor dobândi cel puțin o infecție nosocomială.",
   "1% subestimează incidența citată.",
   "20% este ponderea IPC din infecțiile dobândite în spital, nu incidența nosocomială la internați.",
   "50% corespunde riscului de infecție al plăgilor murdare, nu incidenței nosocomiale globale.",
   "80% nu figurează ca incidență a infecțiilor nosocomiale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permută 5% (incidența nosocomială) cu 20% (ponderea IPC) și 50% (plăgi murdare) din același capitol."
  },
  "textbookExpressions": [
   "5% dinh",
   "Infecţia nosocomială"
  ]
 },
 {
  "id": "infectii-chir-adv-010",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Febra postoperatorie:",
  "options": [
   "Creșterea precoce a temperaturii este, de obicei, rezultatul atelectaziei pulmonare",
   "Conform celor 6 „W”, „Wind” (vânt) corespunde zilelor 1–2, iar „Wound” (plagă) zilelor 3–5",
   "Tratamentul cu antibiotice trebuie inițiat numai când a fost identificată o sursă infecțioasă specifică",
   "Febra medicamentoasă este cauza cea mai frecventă și trebuie invocată înaintea oricărei alte etiologii",
   "Infecțiile profunde și abcesele sunt identificate, de regulă, în primele 24 de ore"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Creșterea precoce a temperaturii este, de obicei, rezultatul atelectaziei pulmonare — Corect: Atelectazia este cauza uzuală a creșterii precoce de temperatură.\n\nConform celor 6 „W”, „Wind” (vânt) corespunde zilelor 1–2, iar „Wound” (plagă) zilelor 3–5 — Corect: Tabelul plasează Wind la zilele 1–2 și Wound la zilele 3–5.\n\nTratamentul cu antibiotice trebuie inițiat numai când a fost identificată o sursă infecțioasă specifică — Corect: Antibioticele se inițiază doar după identificarea unei surse infecțioase specifice.\n\nFebra medicamentoasă este cauza cea mai frecventă și trebuie invocată înaintea oricărei alte etiologii — Incorect: Febra medicamentoasă este rară și se ia în calcul doar după excluderea celorlalte cauze.\n\nInfecțiile profunde și abcesele sunt identificate, de regulă, în primele 24 de ore — Incorect: Abcesele sunt identificate de obicei cu întârziere (zilele 7–10 în schema celor 6 W).\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 77, Febra postoperatorie — Cei 6 W (pagini PDF: 22).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    77
   ],
   "pdfPages": [
    22
   ],
   "section": "Febra postoperatorie — Cei 6 W"
  },
  "learningObjective": "Aplicarea cronologiei celor 6 W și a principiului de a nu începe antibiotice fără sursă identificată.",
  "optionRationales": [
   "Atelectazia este cauza uzuală a creșterii precoce de temperatură.",
   "Tabelul plasează Wind la zilele 1–2 și Wound la zilele 3–5.",
   "Antibioticele se inițiază doar după identificarea unei surse infecțioase specifice.",
   "Febra medicamentoasă este rară și se ia în calcul doar după excluderea celorlalte cauze.",
   "Abcesele sunt identificate de obicei cu întârziere (zilele 7–10 în schema celor 6 W)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează ferestrele temporale ale celor 6 W și transformă febra medicamentoasă din diagnostic de excludere în cauză de primă intenție."
  },
  "textbookExpressions": [
   "atelectaziei",
   "Cei 6"
  ]
 },
 {
  "id": "infectii-chir-adv-011",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Infecțiile locului operator și intra-abdominale postoperatorii:",
  "options": [
   "IPC superficială implică tegumentele și țesuturile subcutanate și este cel mai frecvent tip",
   "IPC profunde se extind la mușchi și fascii și pot duce la necroză fascială și dehiscență",
   "Drenajul percutan ghidat ecografic sau CT este metoda de elecție pentru abcesele intra-abdominale localizate",
   "După controlul sursei, studiul STOP-IT a arătat evoluție similară cu antibiotice 4 zile versus o cură mai lungă",
   "Infecțiile intra-abdominale sunt, de regulă, monomicrobiene, iar acoperirea anaerobă nu se ia în calcul"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "IPC superficială implică tegumentele și țesuturile subcutanate și este cel mai frecvent tip — Corect: IPC superficială (tegument și subcutis) este descrisă ca cel mai frecvent tip.\n\nIPC profunde se extind la mușchi și fascii și pot duce la necroză fascială și dehiscență — Corect: Extinderea la mușchi/fascii cu risc de necroză fascială și dehiscență este explicită.\n\nDrenajul percutan ghidat ecografic sau CT este metoda de elecție pentru abcesele intra-abdominale localizate — Corect: Drenajul percutan ghidat este metoda de elecție pentru abcesele localizate.\n\nDupă controlul sursei, studiul STOP-IT a arătat evoluție similară cu antibiotice 4 zile versus o cură mai lungă — Corect: Studiul STOP-IT arată evoluție similară la 4 zile versus o durată mai lungă.\n\nInfecțiile intra-abdominale sunt, de regulă, monomicrobiene, iar acoperirea anaerobă nu se ia în calcul — Incorect: Infecțiile intra-abdominale sunt de obicei polimicrobiene, iar acoperirea anaerobă trebuie luată în considerare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 78, Infecțiile plăgii chirurgicale și infecțiile intra-abdominale (pagini PDF: 23).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    78
   ],
   "pdfPages": [
    23
   ],
   "section": "Infecțiile plăgii chirurgicale și infecțiile intra-abdominale"
  },
  "learningObjective": "Diferențierea IPC superficiale de cele profunde și aplicarea drenajului percutan plus duratei scurte STOP-IT după controlul sursei.",
  "optionRationales": [
   "IPC superficială (tegument și subcutis) este descrisă ca cel mai frecvent tip.",
   "Extinderea la mușchi/fascii cu risc de necroză fascială și dehiscență este explicită.",
   "Drenajul percutan ghidat este metoda de elecție pentru abcesele localizate.",
   "Studiul STOP-IT arată evoluție similară la 4 zile versus o durată mai lungă.",
   "Infecțiile intra-abdominale sunt de obicei polimicrobiene, iar acoperirea anaerobă trebuie luată în considerare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează natura polimicrobiană a infecțiilor intra-abdominale, pe fondul duratei STOP-IT de 4 zile, ușor de uitat."
  },
  "textbookExpressions": [
   "STOP-IT",
   "cel mai frecvent tip"
  ]
 },
 {
  "id": "infectii-chir-adv-012",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Efuziunile pleurale exudative de cauză inflamatorie se caracterizează prin:",
  "options": [
   "pH sub 7,2, glucoză sub 60 mg/dL și/sau LDH peste de trei ori nivelul seric",
   "La o treime dintre pacienții cu empiem, microorganismele nu sunt identificate în lichid",
   "pH peste 7,5 și glucoză peste 150 mg/dL definesc empiemul",
   "Colorația Gram este pozitivă la toți pacienții cu empiem",
   "Drenajul pleural este inutil, toracocenteza diagnostică fiind suficientă în toate cazurile"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "pH sub 7,2, glucoză sub 60 mg/dL și/sau LDH peste de trei ori nivelul seric — Corect: Pragurile pH <7,2, glucoză <60 mg/dL și LDH >3× seric sunt tabelate pentru efuziunile exudative inflamatorii.\n\nLa o treime dintre pacienții cu empiem, microorganismele nu sunt identificate în lichid — Corect: Absența microorganismelor la o treime dintre pacienții cu empiem este explicită.\n\npH peste 7,5 și glucoză peste 150 mg/dL definesc empiemul — Incorect: Valorile citate pentru empiem sunt pH scăzut și glucoză scăzută, nu crescute.\n\nColorația Gram este pozitivă la toți pacienții cu empiem — Incorect: Colorația Gram sau culturile pot fi pozitive, dar lipsa germenului nu exclude empiemul.\n\nDrenajul pleural este inutil, toracocenteza diagnostică fiind suficientă în toate cazurile — Incorect: La simptomatici sau la revărsate exsudative, drenajul adecvat al spațiului pleural este necesar.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 78, Empiemul (pagini PDF: 23).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    78
   ],
   "pdfPages": [
    23
   ],
   "section": "Empiemul"
  },
  "learningObjective": "Recunoașterea criteriilor biochimice ale efuziunii inflamatorii (pH, glucoză, LDH) și a faptului că o treime din empieme rămân fără germene identificat.",
  "optionRationales": [
   "Pragurile pH <7,2, glucoză <60 mg/dL și LDH >3× seric sunt tabelate pentru efuziunile exudative inflamatorii.",
   "Absența microorganismelor la o treime dintre pacienții cu empiem este explicită.",
   "Valorile citate pentru empiem sunt pH scăzut și glucoză scăzută, nu crescute.",
   "Colorația Gram sau culturile pot fi pozitive, dar lipsa germenului nu exclude empiemul.",
   "La simptomatici sau la revărsate exsudative, drenajul adecvat al spațiului pleural este necesar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează pragurile de pH și glucoză și transformă negativitatea culturii într-o excludere a empiemului."
  },
  "textbookExpressions": [
   "pH <7,2",
   "o treime din"
  ]
 },
 {
  "id": "infectii-chir-adv-013",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Pneumonia asociată ventilatorului (PAV):",
  "options": [
   "PAV și pneumonia asociată spitalizării reprezintă împreună 22% din infecțiile dobândite în spital",
   "Aproximativ 10% dintre pacienții ventilați mecanic sunt diagnosticați cu PAV",
   "Tratamentul cu antibiotice specifice timp de 7 zile este suficient pentru majoritatea pacienților cu PAV",
   "Pacienții spitalizați sub 5 zile au risc înalt pentru germeni multi-rezistenți, similar celor cu ARDS",
   "O cultură endotraheală negativă are valoare predictivă negativă redusă, fără utilitate"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "PAV și pneumonia asociată spitalizării reprezintă împreună 22% din infecțiile dobândite în spital — Corect: Cele 22% din infecțiile nosocomiale (cele mai frecvente) sunt citate.\n\nAproximativ 10% dintre pacienții ventilați mecanic sunt diagnosticați cu PAV — Corect: Incidența de circa 10% la pacienții ventilați este explicită.\n\nTratamentul cu antibiotice specifice timp de 7 zile este suficient pentru majoritatea pacienților cu PAV — Corect: Durata de 7 zile este considerată suficientă pentru majoritatea pacienților cu PAV.\n\nPacienții spitalizați sub 5 zile au risc înalt pentru germeni multi-rezistenți, similar celor cu ARDS — Incorect: Spitalizarea sub 5 zile marchează risc scăzut pentru germeni rezistenți; riscul înalt apare peste 5 zile, la imunocompromiși sau în ARDS.\n\nO cultură endotraheală negativă are valoare predictivă negativă redusă, fără utilitate — Incorect: O cultură din aspiratul endotraheal negativă are valoare predictivă negativă foarte puternică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 79, Pneumonia asociată spitalizării și ventilației mecanice (pagini PDF: 24).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    79
   ],
   "pdfPages": [
    24
   ],
   "section": "Pneumonia asociată spitalizării și ventilației mecanice"
  },
  "learningObjective": "Aplicarea ponderii de 22%, a incidenței de 10% la ventilați și a duratei de 7 zile, versus stratificarea riscului de rezistență după 5 zile.",
  "optionRationales": [
   "Cele 22% din infecțiile nosocomiale (cele mai frecvente) sunt citate.",
   "Incidența de circa 10% la pacienții ventilați este explicită.",
   "Durata de 7 zile este considerată suficientă pentru majoritatea pacienților cu PAV.",
   "Spitalizarea sub 5 zile marchează risc scăzut pentru germeni rezistenți; riscul înalt apare peste 5 zile, la imunocompromiși sau în ARDS.",
   "O cultură din aspiratul endotraheal negativă are valoare predictivă negativă foarte puternică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează pragul de 5 zile pentru germeni rezistenți și anulează VPN-ul culturii endotraheale negative."
  },
  "textbookExpressions": [
   "22%",
   "7 zile"
  ]
 },
 {
  "id": "infectii-chir-adv-014",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Infecțiile necrozante de țesuturi moi (INTM):",
  "options": [
   "Cel mai caracteristic simptom precoce este durerea disproporționată față de aspectul leziunii",
   "Emfizemul țesuturilor moi este detectat doar la 39% dintre pacienți, iar absența acestuia nu exclude INTM",
   "Emfizemul radiologic este prezent la peste 90% dintre pacienți și este necesar pentru diagnostic",
   "Celulita streptococică necomplicată, care dispare la digitopresiune, impune debridare radicală de urgență",
   "Oxigenoterapia hiperbară înlocuiește debridarea chirurgicală în mionecroza clostridiană"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Cel mai caracteristic simptom precoce este durerea disproporționată față de aspectul leziunii — Corect: Durerea disproporționată față de aspect este descrisă ca cel mai caracteristic simptom.\n\nEmfizemul țesuturilor moi este detectat doar la 39% dintre pacienți, iar absența acestuia nu exclude INTM — Corect: Emfizemul este detectat doar la 39%, iar absența nu exclude INTM.\n\nEmfizemul radiologic este prezent la peste 90% dintre pacienți și este necesar pentru diagnostic — Incorect: 39%, nu 90%, este cifra de detecție a emfizemului; absența nu exclude diagnosticul.\n\nCelulita streptococică necomplicată, care dispare la digitopresiune, impune debridare radicală de urgență — Incorect: Celulita obișnuită (eritem care dispare la digitopresiune) se tratează cu penicilină, nu prin debridare radicală.\n\nOxigenoterapia hiperbară înlocuiește debridarea chirurgicală în mionecroza clostridiană — Incorect: Oxigenul hiperbar este adjuvant, nu substitut pentru debridarea chirurgicală agresivă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 79, 80, Infecții ale pielii și țesuturilor moi — INTM (pagini PDF: 24, 25).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    79,
    80
   ],
   "pdfPages": [
    24,
    25
   ],
   "section": "Infecții ale pielii și țesuturilor moi — INTM"
  },
  "learningObjective": "Recunoașterea durerii disproporționate ca semn precoce și a sensibilității scăzute (39%) a emfizemului radiologic.",
  "optionRationales": [
   "Durerea disproporționată față de aspect este descrisă ca cel mai caracteristic simptom.",
   "Emfizemul este detectat doar la 39%, iar absența nu exclude INTM.",
   "39%, nu 90%, este cifra de detecție a emfizemului; absența nu exclude diagnosticul.",
   "Celulita obișnuită (eritem care dispare la digitopresiune) se tratează cu penicilină, nu prin debridare radicală.",
   "Oxigenul hiperbar este adjuvant, nu substitut pentru debridarea chirurgicală agresivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă un semn tardiv inconstant (emfizemul) în criteriu de diagnostic necesar și confundă celulita cu INTM."
  },
  "textbookExpressions": [
   "durerea disprop",
   "edemul ce depăşeşte"
  ]
 },
 {
  "id": "infectii-chir-adv-015",
  "topicId": "infectii-chir",
  "type": "CS",
  "stem": "Triada Charcot din angiocolită constă în:",
  "options": [
   "Febră fulminantă, durere în hipocondrul drept și icter",
   "Hipotensiune, alterarea stării mentale și anurie, fără icter",
   "Tuse, durere toracică și hemoptiză",
   "Diaree, tenesme și rectoragie",
   "Durere lombară, hematurie și febră, fără icter"
  ],
  "correct": [
   0
  ],
  "explanation": "Febră fulminantă, durere în hipocondrul drept și icter — Corect: Textul definește triada Charcot ca febră fulminantă, durere în hipocondrul drept și icter.\n\nHipotensiune, alterarea stării mentale și anurie, fără icter — Incorect: Hipotensiunea și alterarea stării mentale completează pentada Reynolds, care include și icterul, nu îl exclude.\n\nTuse, durere toracică și hemoptiză — Incorect: Tusea, durerea toracică și hemoptizia evocă patologia respiratorie, nu angiocolita.\n\nDiaree, tenesme și rectoragie — Incorect: Diareea, tenesmele și rectoragia țin de patologia colorectală.\n\nDurere lombară, hematurie și febră, fără icter — Incorect: Durerea lombară cu hematurie sugerează o cauză urologică, nu biliară.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 82, Infecțiile tractului biliar — Angiocolita (pagini PDF: 27).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    82
   ],
   "pdfPages": [
    27
   ],
   "section": "Infecțiile tractului biliar — Angiocolita"
  },
  "learningObjective": "Diferențierea triadei Charcot de pentada Reynolds și de triade din alte aparate.",
  "optionRationales": [
   "Textul definește triada Charcot ca febră fulminantă, durere în hipocondrul drept și icter.",
   "Hipotensiunea și alterarea stării mentale completează pentada Reynolds, care include și icterul, nu îl exclude.",
   "Tusea, durerea toracică și hemoptizia evocă patologia respiratorie, nu angiocolita.",
   "Diareea, tenesmele și rectoragia țin de patologia colorectală.",
   "Durerea lombară cu hematurie sugerează o cauză urologică, nu biliară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă triada Charcot cu pentada Reynolds, două liste din același paragraf, ușor de superpus."
  },
  "textbookExpressions": [
   "pentada Reynold",
   "hipocondrul drept"
  ]
 },
 {
  "id": "infectii-chir-adv-016",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Plăgile „murdare” și durata antibioterapiei perioperatorii:",
  "options": [
   "Plăgile murdare, cu contaminare sau infecție stabilită, au riscul cel mai mare de infecție, ajungând la aproximativ 50%; antibioticele pot fi considerate terapeutice",
   "În majoritatea cazurilor, antibioterapia perioperatorie se continuă postoperator mai puțin de 24 de ore; prelungirea crește rezistența fără a reduce IPC",
   "Riscul de infecție al plăgilor murdare este identic cu al plăgilor curate (circa 3%)",
   "Antibioterapia profilactică se prelungește 7 zile în toate intervențiile elective curate",
   "Prelungirea peste 24 de ore scade rezistența bacteriană și este standardul în hernia inghinală"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Plăgile murdare, cu contaminare sau infecție stabilită, au riscul cel mai mare de infecție, ajungând la aproximativ 50%; antibioticele pot fi considerate terapeutice — Corect: Pragul de circa 50% și caracterul terapeutic (nu doar profilactic) sunt explicite.\n\nÎn majoritatea cazurilor, antibioterapia perioperatorie se continuă postoperator mai puțin de 24 de ore; prelungirea crește rezistența fără a reduce IPC — Corect: Limita <24 de ore și efectul de rezistență al prelungirii sunt citate.\n\nRiscul de infecție al plăgilor murdare este identic cu al plăgilor curate (circa 3%) — Incorect: 3% aparține plăgilor curate, nu celor murdare.\n\nAntibioterapia profilactică se prelungește 7 zile în toate intervențiile elective curate — Incorect: Cazurile curate nu cer profilaxie de 7 zile.\n\nPrelungirea peste 24 de ore scade rezistența bacteriană și este standardul în hernia inghinală — Incorect: Prelungirea crește rezistența; hernia curată nu o justifică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 76, 77, Antibioterapie perioperatorie — Plăgi murdare și durată (pagini PDF: 21, 22).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    76,
    77
   ],
   "pdfPages": [
    21,
    22
   ],
   "section": "Antibioterapie perioperatorie — Plăgi murdare și durată"
  },
  "learningObjective": "Aplicarea riscului de 50% al plăgilor murdare și a limitei de 24 de ore a profilaxiei.",
  "optionRationales": [
   "Pragul de circa 50% și caracterul terapeutic (nu doar profilactic) sunt explicite.",
   "Limita <24 de ore și efectul de rezistență al prelungirii sunt citate.",
   "3% aparține plăgilor curate, nu celor murdare.",
   "Cazurile curate nu cer profilaxie de 7 zile.",
   "Prelungirea crește rezistența; hernia curată nu o justifică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 50% (murdar) cu 3% (curat) și inversează regula celor 24 de ore."
  },
  "textbookExpressions": [
   "aproximativ 50%",
   "mult de 24 de ore"
  ]
 },
 {
  "id": "infectii-chir-adv-017",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Conform Tabelului 8-2, selecția profilaxiei în chirurgia electivă include:",
  "options": [
   "Chirurgia cardiacă sau vasculară: cefazolină sau cefuroxim; la alergie la β-lactamine, clindamicină sau vancomicină",
   "Chirurgia colorectală: cefazolină plus metronidazol, cefoxitin, cefotetan, ampicilină-sulbactam, ceftriaxonă plus metronidazol sau ertapenem",
   "Chirurgia gastroduodenală: cefazolină ca agent recomandat",
   "Chirurgia colorectală se acoperă doar cu cefazolină, fără anaerobi",
   "În alergia la β-lactamine, chirurgia cardiacă primește ertapenem ca substitut de primă linie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Chirurgia cardiacă sau vasculară: cefazolină sau cefuroxim; la alergie la β-lactamine, clindamicină sau vancomicină — Corect: Cefazolina/cefuroximul și alternativa clinda/vanco sunt tabelate.\n\nChirurgia colorectală: cefazolină plus metronidazol, cefoxitin, cefotetan, ampicilină-sulbactam, ceftriaxonă plus metronidazol sau ertapenem — Corect: Lista colorectală include combinațiile cu metronidazol și ertapenemul.\n\nChirurgia gastroduodenală: cefazolină ca agent recomandat — Corect: Cefazolina este agentul recomandat gastroduodenal.\n\nChirurgia colorectală se acoperă doar cu cefazolină, fără anaerobi — Incorect: Colorectala cere acoperire anaerobă, nu cefazolină izolată.\n\nÎn alergia la β-lactamine, chirurgia cardiacă primește ertapenem ca substitut de primă linie — Incorect: Ertapenemul figurează la colorectal, nu ca substitut cardiac.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 76, Tabelul 8-2 — Selecția antibioticelor profilactice (pagini PDF: 21).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    76
   ],
   "pdfPages": [
    21
   ],
   "section": "Tabelul 8-2 — Selecția antibioticelor profilactice"
  },
  "learningObjective": "Diferențierea spectrului cardiac/vascular (cefazolină/cefuroxim) de acoperirea anaerobă colorectală.",
  "optionRationales": [
   "Cefazolina/cefuroximul și alternativa clinda/vanco sunt tabelate.",
   "Lista colorectală include combinațiile cu metronidazol și ertapenemul.",
   "Cefazolina este agentul recomandat gastroduodenal.",
   "Colorectala cere acoperire anaerobă, nu cefazolină izolată.",
   "Ertapenemul figurează la colorectal, nu ca substitut cardiac."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Omită anaerobii de la colorectal și mută ertapenemul pe chirurgia cardiacă, două rânduri alăturate."
  },
  "textbookExpressions": [
   "Cefazolină, cefuroxim",
   "Cefazolină + metronidazol"
  ]
 },
 {
  "id": "infectii-chir-adv-018",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "În anumite intervenții, durata profilaxiei se poate extinde astfel:",
  "options": [
   "În chirurgia cardiacă, utilizarea antibioterapiei poate fi extinsă la 48 de ore",
   "Până la 30% dintre pacienții cu infecții de cateter au tratament antimicrobian inadecvat, cu mortalitate de două ori mai mare",
   "În chirurgia cardiacă, profilaxia se oprește la incizie, 48 de ore fiind dăunătoare",
   "Infecțiile de cateter au acoperire empirică adecvată în 95% din cazuri, mortalitatea fiind independentă de spectru",
   "48 de ore este durata standard a profilaxiei în hernia inghinală curată"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "În chirurgia cardiacă, utilizarea antibioterapiei poate fi extinsă la 48 de ore — Corect: Extinderea la 48 de ore în chirurgia cardiacă este explicită.\n\nPână la 30% dintre pacienții cu infecții de cateter au tratament antimicrobian inadecvat, cu mortalitate de două ori mai mare — Corect: Cifrele 30% inadecvat și mortalitate ×2 sunt citate.\n\nÎn chirurgia cardiacă, profilaxia se oprește la incizie, 48 de ore fiind dăunătoare — Incorect: 48 de ore este excepția permisă, nu o durată dăunătoare în sine.\n\nInfecțiile de cateter au acoperire empirică adecvată în 95% din cazuri, mortalitatea fiind independentă de spectru — Incorect: Inadecvarea empirică este frecventă (30%), cu impact de mortalitate.\n\n48 de ore este durata standard a profilaxiei în hernia inghinală curată — Incorect: Hernia curată nu justifică 48 de ore.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 77, Durata profilaxiei și antibioterapia empirică nosocomială (pagini PDF: 22).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    77
   ],
   "pdfPages": [
    22
   ],
   "section": "Durata profilaxiei și antibioterapia empirică nosocomială"
  },
  "learningObjective": "Recunoașterea excepției de 48 de ore în chirurgia cardiacă și a impactului de mortalitate al acoperirii inadecvate de cateter.",
  "optionRationales": [
   "Extinderea la 48 de ore în chirurgia cardiacă este explicită.",
   "Cifrele 30% inadecvat și mortalitate ×2 sunt citate.",
   "48 de ore este excepția permisă, nu o durată dăunătoare în sine.",
   "Inadecvarea empirică este frecventă (30%), cu impact de mortalitate.",
   "Hernia curată nu justifică 48 de ore."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Generalizează excepția cardiacă de 48 de ore asupra chirurgiei curate și neagă impactul acoperirii de cateter."
  },
  "textbookExpressions": [
   "48 de ore",
   "30% din pacienţii"
  ]
 },
 {
  "id": "infectii-chir-adv-019",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Conform Tabelului 8-5 și textului despre INTM:",
  "options": [
   "Celulita este tipic streptococică, cu eritem difuz cald, tratată cu antibiotice sistemice și îngrijirea locală a plăgii",
   "Hidrosadenita supurativă implică glandele sudoripare apocrine, de obicei axilar și inghinal; zonele mari cer excizie largă și grefă",
   "Gangrena Fournier este eponimul INTM al organelor genitale și perineului, de obicei polimicrobiană",
   "Limfangita este clostridiană, cu crepitații și indicație de amputație de primă intenție",
   "Hidrosadenita se tratează doar cu oxigen hiperbar, fără incizie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Celulita este tipic streptococică, cu eritem difuz cald, tratată cu antibiotice sistemice și îngrijirea locală a plăgii — Corect: Etiologia streptococică și conduita celulitei sunt tabelate.\n\nHidrosadenita supurativă implică glandele sudoripare apocrine, de obicei axilar și inghinal; zonele mari cer excizie largă și grefă — Corect: Localizarea apocrină axilară/inghinală și excizia largă sunt explicite.\n\nGangrena Fournier este eponimul INTM al organelor genitale și perineului, de obicei polimicrobiană — Corect: Definiția Fournier (genital/perineu, polimicrobian) este în text.\n\nLimfangita este clostridiană, cu crepitații și indicație de amputație de primă intenție — Incorect: Limfangita este streptococică, cu striuri limfatice, nu clostridiană.\n\nHidrosadenita se tratează doar cu oxigen hiperbar, fără incizie — Incorect: Hidrosadenita cere incizie/drenaj sau excizie, nu OHB ca monoterapie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 80, 79, Tabelul 8-5 — Infecții ale țesuturilor moi (pagini PDF: 25, 24).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    80,
    79
   ],
   "pdfPages": [
    25,
    24
   ],
   "section": "Tabelul 8-5 — Infecții ale țesuturilor moi"
  },
  "learningObjective": "Diferențierea celulitei streptococice, a hidrosadenitei apocrine și a gangrenei Fournier perineale.",
  "optionRationales": [
   "Etiologia streptococică și conduita celulitei sunt tabelate.",
   "Localizarea apocrină axilară/inghinală și excizia largă sunt explicite.",
   "Definiția Fournier (genital/perineu, polimicrobian) este în text.",
   "Limfangita este streptococică, cu striuri limfatice, nu clostridiană.",
   "Hidrosadenita cere incizie/drenaj sau excizie, nu OHB ca monoterapie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută clostridiile pe limfangită și înlocuiește excizia hidrosadenitei cu oxigen hiperbar."
  },
  "textbookExpressions": [
   "Hidrosadenită",
   "Gangrena Fumier"
  ]
 },
 {
  "id": "infectii-chir-adv-020",
  "topicId": "infectii-chir",
  "type": "CS",
  "stem": "Tetanosul (lockjaw) se caracterizează prin:",
  "options": [
   "Incubație de 3–21 de zile, urmată de neliniște și cefalee, apoi spasme descendente care încep cu rigidizarea maseterului",
   "Debut imediat la 30 de minute, fără prodrom, cu flaciditate generalizată",
   "Diagnosticul se bazează pe izolarea bacteriei în 90% din cazuri, clinica fiind superfluă",
   "Imunoglobulina tetanică acționează pe toxina deja legată de terminațiile nervoase, nu pe toxina liberă",
   "Spasmele tonice apar după 3 săptămâni de la debutul simptomelor, fără risc de stop respirator"
  ],
  "correct": [
   0
  ],
  "explanation": "Incubație de 3–21 de zile, urmată de neliniște și cefalee, apoi spasme descendente care încep cu rigidizarea maseterului — Corect: Incubația 3–21 de zile, prodromul și rigidizarea maseterului sunt explicite.\n\nDebut imediat la 30 de minute, fără prodrom, cu flaciditate generalizată — Incorect: Debutul nu este la 30 de minute și nu este flasc.\n\nDiagnosticul se bazează pe izolarea bacteriei în 90% din cazuri, clinica fiind superfluă — Incorect: Bacteria este izolată doar în 30% din cazuri; diagnosticul este clinic.\n\nImunoglobulina tetanică acționează pe toxina deja legată de terminațiile nervoase, nu pe toxina liberă — Incorect: IGT acționează pe toxina liberă, nu pe cea legată.\n\nSpasmele tonice apar după 3 săptămâni de la debutul simptomelor, fără risc de stop respirator — Incorect: Spasmele tonice apar în 24 de ore de la debutul simptomelor și pot duce la stop respirator.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 80, 81, Tetanosul — Tablou clinic (pagini PDF: 25, 26).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    80,
    81
   ],
   "pdfPages": [
    25,
    26
   ],
   "section": "Tetanosul — Tablou clinic"
  },
  "learningObjective": "Recunoașterea ferestrei de incubație 3–21 de zile și a debutului cu trismus (maseter).",
  "optionRationales": [
   "Incubația 3–21 de zile, prodromul și rigidizarea maseterului sunt explicite.",
   "Debutul nu este la 30 de minute și nu este flasc.",
   "Bacteria este izolată doar în 30% din cazuri; diagnosticul este clinic.",
   "IGT acționează pe toxina liberă, nu pe cea legată.",
   "Spasmele tonice apar în 24 de ore de la debutul simptomelor și pot duce la stop respirator."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 3–21 de zile cu debutul imediat și inversează ținta IGT (liberă versus legată)."
  },
  "textbookExpressions": [
   "3-21 de zile",
   "mușchiului maseter"
  ]
 },
 {
  "id": "infectii-chir-adv-021",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Managementul tetanosului și profilaxia după plagă:",
  "options": [
   "Bacteria este izolată doar în 30% din cazuri, deci diagnosticul este clinic, nu microbiologic",
   "IGT ajută doar la eliminarea toxinei libere și se administrează intramuscular, cu infiltrație peri-lezională",
   "Plăgile cu predispoziție (zdrobire, avulsie, arsuri, >6 ore, contaminanți) beneficiază de profilaxie conform Tabelului 8-7",
   "IGT neutralizează toxina deja legată de nervi și face debridarea superfluă",
   "Plăgile curate sub 6 ore, ascuțite, fără contaminanți, au aceeași predispoziție ca arsurile zdrobite"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Bacteria este izolată doar în 30% din cazuri, deci diagnosticul este clinic, nu microbiologic — Corect: Izolarea în 30% și diagnosticul clinic sunt explicite.\n\nIGT ajută doar la eliminarea toxinei libere și se administrează intramuscular, cu infiltrație peri-lezională — Corect: Acțiunea pe toxina liberă și calea IM plus infiltrația sunt descrise.\n\nPlăgile cu predispoziție (zdrobire, avulsie, arsuri, >6 ore, contaminanți) beneficiază de profilaxie conform Tabelului 8-7 — Corect: Tabelul 8-6 listează >6 ore, zdrobire, avulsie, arsuri, contaminanți.\n\nIGT neutralizează toxina deja legată de nervi și face debridarea superfluă — Incorect: IGT nu acționează pe toxina legată; debridarea rămâne cheia.\n\nPlăgile curate sub 6 ore, ascuțite, fără contaminanți, au aceeași predispoziție ca arsurile zdrobite — Incorect: Plăgile curate <6 ore, ascuțite, fără contaminanți, sunt fără predispoziție.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 81, Tetanosul — Diagnostic, IGT și Tabelul 8-6 (pagini PDF: 26).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    81
   ],
   "pdfPages": [
    26
   ],
   "section": "Tetanosul — Diagnostic, IGT și Tabelul 8-6"
  },
  "learningObjective": "Aplicarea izolării de 30%, a țintei IGT (toxina liberă) și a criteriilor de plagă predispozantă.",
  "optionRationales": [
   "Izolarea în 30% și diagnosticul clinic sunt explicite.",
   "Acțiunea pe toxina liberă și calea IM plus infiltrația sunt descrise.",
   "Tabelul 8-6 listează >6 ore, zdrobire, avulsie, arsuri, contaminanți.",
   "IGT nu acționează pe toxina legată; debridarea rămâne cheia.",
   "Plăgile curate <6 ore, ascuțite, fără contaminanți, sunt fără predispoziție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ținta IGT și egalizează plăgile curate cu cele zdrobite contaminate."
  },
  "textbookExpressions": [
   "30% din cazuri",
   "Imunoglobulina Tetanică"
  ]
 },
 {
  "id": "infectii-chir-adv-022",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Abcesul mamar se caracterizează prin:",
  "options": [
   "Etiologie de obicei stafilococică; factorii de risc includ alăptarea, vârsta maternă >30 de ani, prima sarcină, fumatul și obezitatea",
   "Opțiunea inițială este antibiotice antistafilococice plus 2–3 aspirații seriate la 2–3 zile; alăptarea sau pomparea continuă",
   "Abcesul la femeia care nu alăptează trebuie să ridice suspiciunea de malignitate, cu biopsie la risc",
   "Diagnosticul se confirmă prin examen clinic, ecografie și aspirația lichidului purulent",
   "Alăptarea se întrerupe imediat, germenii contraindicând orice lactație"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Etiologie de obicei stafilococică; factorii de risc includ alăptarea, vârsta maternă >30 de ani, prima sarcină, fumatul și obezitatea — Corect: Etiologia stafilococică și lista de risc sunt explicite.\n\nOpțiunea inițială este antibiotice antistafilococice plus 2–3 aspirații seriate la 2–3 zile; alăptarea sau pomparea continuă — Corect: Schema 2–3 aspirații la 2–3 zile și continuarea lactației sunt cerute.\n\nAbcesul la femeia care nu alăptează trebuie să ridice suspiciunea de malignitate, cu biopsie la risc — Corect: Abcesul la non-lactantă sugerează posibilă malignitate.\n\nDiagnosticul se confirmă prin examen clinic, ecografie și aspirația lichidului purulent — Corect: Examenul clinic, ecografia și aspirația confirmă diagnosticul.\n\nAlăptarea se întrerupe imediat, germenii contraindicând orice lactație — Incorect: Mamele care alăptează sunt încurajate să continue.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 81, Abcesul mamar (pagini PDF: 26).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    81
   ],
   "pdfPages": [
    26
   ],
   "section": "Abcesul mamar"
  },
  "learningObjective": "Aplicarea spectrului stafilococic, a aspirațiilor seriate, a semnalului de malignitate și a confirmării ecografice.",
  "optionRationales": [
   "Etiologia stafilococică și lista de risc sunt explicite.",
   "Schema 2–3 aspirații la 2–3 zile și continuarea lactației sunt cerute.",
   "Abcesul la non-lactantă sugerează posibilă malignitate.",
   "Examenul clinic, ecografia și aspirația confirmă diagnosticul.",
   "Mamele care alăptează sunt încurajate să continue."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă aspirația serială în mastectomie și oprește lactația, două erori de conduită din același paragraf."
  },
  "textbookExpressions": [
   "2-3 aspiraţii",
   "alăptarea"
  ]
 },
 {
  "id": "infectii-chir-adv-023",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Infecțiile mâinii, potrivit capitolului:",
  "options": [
   "Panarițiul este o infecție stafilococică a șanțului unghial proximal; drenajul simplu și pansamentele calde sunt de obicei suficiente",
   "Tenosinovita cere deschiderea tecii pe toată lungimea, pentru a preveni necroza tendonului",
   "Antibioterapia empirică cu spectru larg în abcesele spațiilor profunde se ajustează după antibiogramă și se continuă circa 10 zile",
   "Panarițiul se tratează prin amputație de principiu, stafilococul fiind rară cauză",
   "Muşcăturile umane ale mâinii au potențial infecțios neglijabil, flora orală fiind nepatogenă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Panarițiul este o infecție stafilococică a șanțului unghial proximal; drenajul simplu și pansamentele calde sunt de obicei suficiente — Corect: Definiția panarițiului și conduita conservatoare sunt explicite.\n\nTenosinovita cere deschiderea tecii pe toată lungimea, pentru a preveni necroza tendonului — Corect: Deschiderea completă a tecii este cerută în tenosinovită.\n\nAntibioterapia empirică cu spectru larg în abcesele spațiilor profunde se ajustează după antibiogramă și se continuă circa 10 zile — Corect: Durata de 10 zile, cu de-escaladare, este citată.\n\nPanarițiul se tratează prin amputație de principiu, stafilococul fiind rară cauză — Incorect: Amputația nu este tratamentul panarițiului.\n\nMuşcăturile umane ale mâinii au potențial infecțios neglijabil, flora orală fiind nepatogenă — Incorect: Muşcăturile umane au potențial infecțios ce nu trebuie subestimat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 82, 81, Infecțiile mâinii (pagini PDF: 27, 26).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    82,
    81
   ],
   "pdfPages": [
    27,
    26
   ],
   "section": "Infecțiile mâinii"
  },
  "learningObjective": "Diferențierea panarițiului unghial de tenosinovită și a duratei de 10 zile în spațiile palmare.",
  "optionRationales": [
   "Definiția panarițiului și conduita conservatoare sunt explicite.",
   "Deschiderea completă a tecii este cerută în tenosinovită.",
   "Durata de 10 zile, cu de-escaladare, este citată.",
   "Amputația nu este tratamentul panarițiului.",
   "Muşcăturile umane au potențial infecțios ce nu trebuie subestimat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde amputația asupra panarițiului și minimizează mușcătura umană, două capcane de urgență."
  },
  "textbookExpressions": [
   "Panariţiul",
   "I O zile"
  ]
 },
 {
  "id": "infectii-chir-adv-024",
  "topicId": "infectii-chir",
  "type": "CS",
  "stem": "Abcesul perirectal care se extinde deasupra planșeului pelvin poate fi fatal mai ales la:",
  "options": [
   "Pacienții diabetici sau imunosupresați",
   "Adulții tineri sănătoși, fără comorbidități",
   "Pacienții cu hernie inghinală electivă curată",
   "Copiii cu panarițiu unghial necomplicat",
   "Femeile cu abces mamar stafilococic drenat prin aspirație"
  ],
  "correct": [
   0
  ],
  "explanation": "Pacienții diabetici sau imunosupresați — Corect: Textul precizează că extinderea pelvină poate fi fatală mai ales la diabetici sau imunosupresați.\n\nAdulții tineri sănătoși, fără comorbidități — Incorect: Tânărul sănătos nu este grupul citat cu risc maxim.\n\nPacienții cu hernie inghinală electivă curată — Incorect: Hernia curată nu definește acest risc.\n\nCopiii cu panarițiu unghial necomplicat — Incorect: Panarițiul unghial este o infecție de mână, nu perirectală pelvină.\n\nFemeile cu abces mamar stafilococic drenat prin aspirație — Incorect: Abcesul mamar are alt mecanism și alt prognostic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 81, Abcesul perirectal (pagini PDF: 26).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    81
   ],
   "pdfPages": [
    26
   ],
   "section": "Abcesul perirectal"
  },
  "learningObjective": "Recunoașterea riscului vital al extensiei pelvine la diabetic și imunosupresat.",
  "optionRationales": [
   "Textul precizează că extinderea pelvină poate fi fatală mai ales la diabetici sau imunosupresați.",
   "Tânărul sănătos nu este grupul citat cu risc maxim.",
   "Hernia curată nu definește acest risc.",
   "Panarițiul unghial este o infecție de mână, nu perirectală pelvină.",
   "Abcesul mamar are alt mecanism și alt prognostic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Minimizează drenajul și neagă riscul pelvin la diabetic, pe o urgență proctologică clasică."
  },
  "textbookExpressions": [
   "Abcesul perirectal",
   "anestezie generală"
  ]
 },
 {
  "id": "infectii-chir-adv-025",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre mionecroza clostridiană:",
  "options": [
   "Poate apărea încă din prima zi postoperator sau după plăgi prin puncție, cu necroză și crepitații cu avans rapid (gangrenă gazoasă)",
   "Antibioterapia include penicilină în doze mari; clindamicina este alternativă la alergie, tigeciclina fiind o opțiune înrudită",
   "Oxigenul hiperbar este adjuvant, nu substitut al debridării radicale",
   "Colorația Gram din flictenă diferențiază infecția de streptococul de grup A",
   "Penicilina este evitată, clindamicina hiperbară înlocuind debridarea"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Poate apărea încă din prima zi postoperator sau după plăgi prin puncție, cu necroză și crepitații cu avans rapid (gangrenă gazoasă) — Corect: Debutul din prima zi și crepitațiile fulminante sunt descrise.\n\nAntibioterapia include penicilină în doze mari; clindamicina este alternativă la alergie, tigeciclina fiind o opțiune înrudită — Corect: Penicilina în doze mari, clinda la alergie și tigeciclina sunt listate.\n\nOxigenul hiperbar este adjuvant, nu substitut al debridării radicale — Corect: OHB sprijină, dar nu înlocuiește debridarea.\n\nColorația Gram din flictenă diferențiază infecția de streptococul de grup A — Corect: Colorația Gram din flictenă ajută diagnosticul diferențial cu SGA.\n\nPenicilina este evitată, clindamicina hiperbară înlocuind debridarea — Incorect: Penicilina este tratamentul; OHB nu înlocuiește chirurgia.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 80, INTM — Mionecroza clostridiană (pagini PDF: 25).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    80
   ],
   "pdfPages": [
    25
   ],
   "section": "INTM — Mionecroza clostridiană"
  },
  "learningObjective": "Integrarea debutului precoce, a penicilinei în doză mare și a OHB ca adjuvant, nu substitut.",
  "optionRationales": [
   "Debutul din prima zi și crepitațiile fulminante sunt descrise.",
   "Penicilina în doze mari, clinda la alergie și tigeciclina sunt listate.",
   "OHB sprijină, dar nu înlocuiește debridarea.",
   "Colorația Gram din flictenă ajută diagnosticul diferențial cu SGA.",
   "Penicilina este tratamentul; OHB nu înlocuiește chirurgia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează rolul penicilinei și transformă oxigenul hiperbar în substitut al debridării."
  },
  "textbookExpressions": [
   "penicilină în doze",
   "Oxigenoterapia hiperbară"
  ]
 },
 {
  "id": "infectii-chir-adv-026",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Dozele suplimentare intraoperatorii de antibiotic profilactic și riscul relativ de IPC:",
  "options": [
   "Doze suplimentare sunt necesare dacă durata intervenției depășește de două ori timpul de înjumătățire al antibioticului sau dacă există pierderi excesive de sânge",
   "Riscul de IPC în cazurile curat-contaminate este de trei ori mai mare decât în cazurile curate",
   "Riscul general de infecție pentru cazurile contaminate crește de 5–10 ori față de cazurile curate",
   "Doza unică preoperatorie acoperă orice durată, redosarea fiind superfluă după 4 ore",
   "Cazurile contaminate au același risc ca hernia inghinală curată (circa 3%)"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Doze suplimentare sunt necesare dacă durata intervenției depășește de două ori timpul de înjumătățire al antibioticului sau dacă există pierderi excesive de sânge — Corect: Cele două indicații de redosare intraoperatorie sunt explicite.\n\nRiscul de IPC în cazurile curat-contaminate este de trei ori mai mare decât în cazurile curate — Corect: Multiplicatorul de trei ori pentru curat-contaminat este citat.\n\nRiscul general de infecție pentru cazurile contaminate crește de 5–10 ori față de cazurile curate — Corect: Intervalul 5–10 ori pentru contaminat versus curat este enunțat.\n\nDoza unică preoperatorie acoperă orice durată, redosarea fiind superfluă după 4 ore — Incorect: Textul cere doze suplimentare când durata depășește 2× t½, nu o doză unică nelimitată.\n\nCazurile contaminate au același risc ca hernia inghinală curată (circa 3%) — Incorect: 3% este frecvența plăgilor curate, nu a celor contaminate.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 76, Antibioterapie perioperatorie — Redosare și risc relativ (pagini PDF: 21).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    76
   ],
   "pdfPages": [
    21
   ],
   "section": "Antibioterapie perioperatorie — Redosare și risc relativ"
  },
  "learningObjective": "Aplicarea regulii de redosare (2× t½ sau hemoragie) și a multiplicatorilor 3× (curat-contaminat) și 5–10× (contaminat).",
  "optionRationales": [
   "Cele două indicații de redosare intraoperatorie sunt explicite.",
   "Multiplicatorul de trei ori pentru curat-contaminat este citat.",
   "Intervalul 5–10 ori pentru contaminat versus curat este enunțat.",
   "Textul cere doze suplimentare când durata depășește 2× t½, nu o doză unică nelimitată.",
   "3% este frecvența plăgilor curate, nu a celor contaminate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează redosarea după 2× t½ și egalizează contaminatul cu 3% al plăgii curate, două praguri din același paragraf."
  },
  "textbookExpressions": [
   "de două ori timpul",
   "5-10 ori"
  ]
 },
 {
  "id": "infectii-chir-adv-027",
  "topicId": "infectii-chir",
  "type": "CS",
  "stem": "Conform Tabelului 8-3, frecvența infecției în plăgile murdare (infecție stabilită) este de:",
  "options": [
   "40–50%",
   "circa 3%",
   "5–15%",
   "15–40%",
   "sub 1%, identică herniei inghinale"
  ],
  "correct": [
   0
  ],
  "explanation": "40–50% — Corect: Tabelul plasează frecvența murdară la 40–50%, cu exemple de drenaj de abces intraabdominal și rezecție de intestin infarctat.\n\ncirca 3% — Incorect: 3% aparține plăgilor curate.\n\n5–15% — Incorect: 5–15% definește curat-contaminatul.\n\n15–40% — Incorect: 15–40% este intervalul contaminatului macroscopic.\n\nsub 1%, identică herniei inghinale — Incorect: Sub 1% nu figurează; hernia curată este exemplul de 3%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 77, Tabelul 8-3 — Plăgi murdare 40–50% (pagini PDF: 22).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    77
   ],
   "pdfPages": [
    22
   ],
   "section": "Tabelul 8-3 — Plăgi murdare 40–50%"
  },
  "learningObjective": "Diferențierea intervalului 40–50% al plăgii murdare de 3% (curat), 5–15% (curat-contaminat) și 15–40% (contaminat).",
  "optionRationales": [
   "Tabelul plasează frecvența murdară la 40–50%, cu exemple de drenaj de abces intraabdominal și rezecție de intestin infarctat.",
   "3% aparține plăgilor curate.",
   "5–15% definește curat-contaminatul.",
   "15–40% este intervalul contaminatului macroscopic.",
   "Sub 1% nu figurează; hernia curată este exemplul de 3%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează cele patru trepte procentuale ale Tabelului 8-3, ușor de oglindit între rânduri alăturate."
  },
  "textbookExpressions": [
   "40-50",
   "intestinului infarctat"
  ]
 },
 {
  "id": "infectii-chir-adv-028",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Controlul sursei prin reintervenție în abcesul intra-abdominal este necesar atunci când există:",
  "options": [
   "O sursă de contaminare continuă (perforație, scurgere anastomotică sau fistulă)",
   "Țesut devitalizat care necesită debridare, eșuarea drenării percutanate sau progresie spre peritonită generalizată",
   "Doar febră izolată, cu colecție bine drenată percutan și fără scurgere",
   "Ileus rezolvat și culturi sterile, fără colecție organizată",
   "Leucocitoză în scădere după 4 zile de STOP-IT, fără contaminare persistentă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "O sursă de contaminare continuă (perforație, scurgere anastomotică sau fistulă) — Corect: Contaminarea continuă (perforație/scurgere/fistulă) este prima indicație enumerată.\n\nȚesut devitalizat care necesită debridare, eșuarea drenării percutanate sau progresie spre peritonită generalizată — Corect: Debridarea, eșecul percutan și progresia la peritonită generalizată completează lista.\n\nDoar febră izolată, cu colecție bine drenată percutan și fără scurgere — Incorect: Colecția localizată drenată percutan este metoda de elecție, nu reintervenția de principiu.\n\nIleus rezolvat și culturi sterile, fără colecție organizată — Incorect: Ileusul rezolvat fără colecție nu cere reintervenție.\n\nLeucocitoză în scădere după 4 zile de STOP-IT, fără contaminare persistentă — Incorect: STOP-IT privește durata antibioticelor după controlul sursei, nu indicația de reintervenție.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 78, Infecții intra-abdominale — Indicațiile reintervenției (pagini PDF: 23).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    78
   ],
   "pdfPages": [
    23
   ],
   "section": "Infecții intra-abdominale — Indicațiile reintervenției"
  },
  "learningObjective": "Recunoașterea celor patru indicații de reintervenție versus succesul drenajului percutan al abcesului localizat.",
  "optionRationales": [
   "Contaminarea continuă (perforație/scurgere/fistulă) este prima indicație enumerată.",
   "Debridarea, eșecul percutan și progresia la peritonită generalizată completează lista.",
   "Colecția localizată drenată percutan este metoda de elecție, nu reintervenția de principiu.",
   "Ileusul rezolvat fără colecție nu cere reintervenție.",
   "STOP-IT privește durata antibioticelor după controlul sursei, nu indicația de reintervenție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă drenajul percutan de elecție într-o laparotomie neselectivă și confundă STOP-IT cu indicația operatorie."
  },
  "textbookExpressions": [
   "eşuarea drenării",
   "peritonită generalizată"
  ]
 },
 {
  "id": "infectii-chir-adv-029",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Pachetul de prevenție a pneumoniei asociate ventilatorului include:",
  "options": [
   "Reducerea sedării cu întrerupere zilnică și evaluarea zilnică a disponibilității pentru detubare, cu încercări de respirație spontană",
   "Mobilizare precoce și tub endotraheal cu dispozitiv de aspirație subglotică",
   "Ridicarea toracelui prin poziționarea patului la 30–45°",
   "Schimbarea circuitului ventilatorului numai când este vizibil murdar sau defect",
   "Schimbarea zilnică de principiu a circuitului și menținerea patului în clinostatism strict"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Reducerea sedării cu întrerupere zilnică și evaluarea zilnică a disponibilității pentru detubare, cu încercări de respirație spontană — Corect: Întreruperea zilnică a sedării și SBT sunt punctele (1) și (2).\n\nMobilizare precoce și tub endotraheal cu dispozitiv de aspirație subglotică — Corect: Mobilizarea precoce și aspirația subglotică sunt punctele (3) și (4).\n\nRidicarea toracelui prin poziționarea patului la 30–45° — Corect: Unghiul 30–45° este punctul (5).\n\nSchimbarea circuitului ventilatorului numai când este vizibil murdar sau defect — Corect: Schimbarea circuitului doar dacă e murdar/defect este punctul (6).\n\nSchimbarea zilnică de principiu a circuitului și menținerea patului în clinostatism strict — Incorect: Textul cere 30–45° și schimbarea selectivă a circuitului, nu clinostatism și schimb zilnic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 79, PAV — Pachetul de prevenție 30–45° (pagini PDF: 24).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    79
   ],
   "pdfPages": [
    24
   ],
   "section": "PAV — Pachetul de prevenție 30–45°"
  },
  "learningObjective": "Aplicarea celor șase măsuri (sedare, SBT, mobilizare, aspirație subglotică, 30–45°, circuit neschimbat) versus clinostatismul și schimbul zilnic de circuit.",
  "optionRationales": [
   "Întreruperea zilnică a sedării și SBT sunt punctele (1) și (2).",
   "Mobilizarea precoce și aspirația subglotică sunt punctele (3) și (4).",
   "Unghiul 30–45° este punctul (5).",
   "Schimbarea circuitului doar dacă e murdar/defect este punctul (6).",
   "Textul cere 30–45° și schimbarea selectivă a circuitului, nu clinostatism și schimb zilnic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează unghiul patului și regula circuitului, două elemente consecutive din lista numerotată de prevenție."
  },
  "textbookExpressions": [
   "30-45°",
   "aspiraţie subglotic"
  ]
 },
 {
  "id": "infectii-chir-adv-030",
  "topicId": "infectii-chir",
  "type": "CS",
  "stem": "Identificați afirmația corectă privind infecțiile de tract urinar postoperatorii:",
  "options": [
   "Diagnosticul clasic se stabilește prin cultură cantitativă de peste 100.000 de organisme/mL; bacteriuria de sondă nu este, de obicei, sursa febrei, iar bacteriemia urinară este neobișnuită fără obstrucție",
   "Orice cultură pozitivă pe sondă impune atribuirea febrei tractului urinar, fără a căuta alte surse",
   "Cateterul endovezical nu influențează riscul de ITU, durata menținerii fiind indiferentă",
   "Bacteriemia cu punct de plecare urinar este regula la pacientul cu sondă, chiar fără obstrucție",
   "Pragul diagnostic este 1.000 de organisme/mL, identic periajului bronșic protejat din PAV"
  ],
  "correct": [
   0
  ],
  "explanation": "Diagnosticul clasic se stabilește prin cultură cantitativă de peste 100.000 de organisme/mL; bacteriuria de sondă nu este, de obicei, sursa febrei, iar bacteriemia urinară este neobișnuită fără obstrucție — Corect: Pragul >100.000/mL, caracterul neseptic al bacteriuriei de sondă și raritatea bacteriemiei fără obstrucție sunt explicite.\n\nOrice cultură pozitivă pe sondă impune atribuirea febrei tractului urinar, fără a căuta alte surse — Incorect: Textul cere căutarea altor surse de febră chiar și cu culturi urinare pozitive.\n\nCateterul endovezical nu influențează riscul de ITU, durata menținerii fiind indiferentă — Incorect: Prezența cateterului este cel mai mare factor de risc; durata menținerii contează.\n\nBacteriemia cu punct de plecare urinar este regula la pacientul cu sondă, chiar fără obstrucție — Incorect: Bacteriemia sistemică din tractul urinar este descrisă ca neobișnuită fără obstrucție.\n\nPragul diagnostic este 1.000 de organisme/mL, identic periajului bronșic protejat din PAV — Incorect: 1.000 CFU/mL este pragul periajului bronșic protejat, nu al urinii.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 79, ITU asociate cateterului — 100.000/mL și febra (pagini PDF: 24).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    79
   ],
   "pdfPages": [
    24
   ],
   "section": "ITU asociate cateterului — 100.000/mL și febra"
  },
  "learningObjective": "Contrastarea pragului de 100.000/mL și a faptului că bacteriuria de sondă nu explică febra, față de atribuirea neselectivă a febrei la ITU.",
  "optionRationales": [
   "Pragul >100.000/mL, caracterul neseptic al bacteriuriei de sondă și raritatea bacteriemiei fără obstrucție sunt explicite.",
   "Textul cere căutarea altor surse de febră chiar și cu culturi urinare pozitive.",
   "Prezența cateterului este cel mai mare factor de risc; durata menținerii contează.",
   "Bacteriemia sistemică din tractul urinar este descrisă ca neobișnuită fără obstrucție.",
   "1.000 CFU/mL este pragul periajului bronșic protejat, nu al urinii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie febra postoperatorie bacteriuriei de sondă și permută 100.000 cu pragul 10³ al PAV."
  },
  "textbookExpressions": [
   "100.000",
   "cateter endo-vezical"
  ]
 },
 {
  "id": "infectii-chir-adv-031",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Infecțiile tractului biliar se caracterizează prin:",
  "options": [
   "Bacteriile cel mai frecvent implicate sunt Escherichia coli, Klebsiella spp. și Enterococcus spp.; anaerobii sunt rar întâlniți",
   "La pacienții cu anastomoză bilio-enterală, probabilitatea de contaminare cu anaerobi este crescută",
   "Colecistita acută debutează cu obstrucția canalului cistic prin material litiazic",
   "Anaerobii predomină în colecistita simplă, E. coli fiind absent",
   "Obstrucția canalului cistic nu joacă rol, colecistita fiind o bacteriemie hematogenă izolată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Bacteriile cel mai frecvent implicate sunt Escherichia coli, Klebsiella spp. și Enterococcus spp.; anaerobii sunt rar întâlniți — Corect: Cei trei patogeni și raritatea anaerobilor sunt explicite.\n\nLa pacienții cu anastomoză bilio-enterală, probabilitatea de contaminare cu anaerobi este crescută — Corect: Excepția anastomozei bilio-enterale este citată.\n\nColecistita acută debutează cu obstrucția canalului cistic prin material litiazic — Corect: Obstrucția cistică litiazică este debutul descris al colecistitei acute.\n\nAnaerobii predomină în colecistita simplă, E. coli fiind absent — Incorect: Anaerobii sunt rari în absența anastomozei; E. coli este primul listat.\n\nObstrucția canalului cistic nu joacă rol, colecistita fiind o bacteriemie hematogenă izolată — Incorect: Mecanismul este obstrucție cistică plus proliferare în spațiu închis, nu bacteriemie hematogenă izolată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 82, Infecțiile tractului biliar — Floră și colecistită (pagini PDF: 27).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    82
   ],
   "pdfPages": [
    27
   ],
   "section": "Infecțiile tractului biliar — Floră și colecistită"
  },
  "learningObjective": "Recunoașterea triadei E. coli–Klebsiella–Enterococcus, a anaerobilor la anastomoza bilio-enterală și a obstrucției cistice.",
  "optionRationales": [
   "Cei trei patogeni și raritatea anaerobilor sunt explicite.",
   "Excepția anastomozei bilio-enterale este citată.",
   "Obstrucția cistică litiazică este debutul descris al colecistitei acute.",
   "Anaerobii sunt rari în absența anastomozei; E. coli este primul listat.",
   "Mecanismul este obstrucție cistică plus proliferare în spațiu închis, nu bacteriemie hematogenă izolată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune anaerobii ca floră dominantă a colecistitei simple și anulează obstrucția cistică, două erori de etiopatogenie."
  },
  "textbookExpressions": [
   "Escherichia coli",
   "anastomoză bilio-enterală"
  ]
 },
 {
  "id": "infectii-chir-adv-032",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Comparând peritonita primară cu cea secundară:",
  "options": [
   "Peritonita primară este, de obicei, monomicrobiană și mai frecventă la alcoolicii cu ascită și la imunocompromiși, fără întreruperea continuității tractului GI",
   "Peritonita secundară urmează contaminării din tractul GI perforat sau prin catetere de dializă peritoneală și este, de obicei, polimicrobiană",
   "Peritonita primară este polimicrobiană prin perforație colonică, iar cea secundară este monomicrobiană la cirotic",
   "Dializa peritoneală nu este o cale de peritonită secundară",
   "Apărarea de tip „abdomen de lemn” exclude peritonita generalizată"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Peritonita primară este, de obicei, monomicrobiană și mai frecventă la alcoolicii cu ascită și la imunocompromiși, fără întreruperea continuității tractului GI — Corect: Definiția peritonitei primare (monomicrobiană, ascită, imunocompromis) este explicită.\n\nPeritonita secundară urmează contaminării din tractul GI perforat sau prin catetere de dializă peritoneală și este, de obicei, polimicrobiană — Corect: Originea prin perforație sau cateter de DP și caracterul polimicrobian sunt enunțate.\n\nPeritonita primară este polimicrobiană prin perforație colonică, iar cea secundară este monomicrobiană la cirotic — Incorect: Atribuțiile sunt inversate față de text.\n\nDializa peritoneală nu este o cale de peritonită secundară — Incorect: Cateterele de dializă peritoneală sunt o cauză citată de peritonită secundară.\n\nApărarea de tip „abdomen de lemn” exclude peritonita generalizată — Incorect: „Abdomenul de lemn” este tocmai caracteristic peritonitei generalizate, pe pagina următoare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 82, 83, Peritonita acută — Primară versus secundară (pagini PDF: 27, 28).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    82,
    83
   ],
   "pdfPages": [
    27,
    28
   ],
   "section": "Peritonita acută — Primară versus secundară"
  },
  "learningObjective": "Contrastarea monomicrobianului (ascită, imunocompromis) de polimicrobianul prin perforație GI sau cateter de DP.",
  "optionRationales": [
   "Definiția peritonitei primare (monomicrobiană, ascită, imunocompromis) este explicită.",
   "Originea prin perforație sau cateter de DP și caracterul polimicrobian sunt enunțate.",
   "Atribuțiile sunt inversate față de text.",
   "Cateterele de dializă peritoneală sunt o cauză citată de peritonită secundară.",
   "„Abdomenul de lemn” este tocmai caracteristic peritonitei generalizate, pe pagina următoare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește mono- versus polimicrobian între primară și secundară și uită cateterul de dializă peritoneală."
  },
  "textbookExpressions": [
   "monomicrobiană",
   "polinucrobiană"
  ]
 },
 {
  "id": "infectii-chir-adv-033",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Muşcăturile mâinii se caracterizează prin:",
  "options": [
   "Muşcăturile umane sunt singurele leziuni penetrante ale mâinii care nu se închid primar",
   "Flora orală umană include Eikenella corrodens, care poate produce supurații de-a lungul tecilor tendinoase",
   "Muşcăturile de câine sau pisică implică cel mai uzual specii aerobe precum Pasteurella",
   "Muşcăturile umane se suturează primar, flora orală fiind nepatogenă",
   "Pasteurella este patogenul tipic al mușcăturii umane, Eikenella aparținând flora canină"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Muşcăturile umane sunt singurele leziuni penetrante ale mâinii care nu se închid primar — Corect: Regula de a nu închide primar mușcătura umană este explicită.\n\nFlora orală umană include Eikenella corrodens, care poate produce supurații de-a lungul tecilor tendinoase — Corect: Eikenella corrodens și distrucția tecilor sunt citate.\n\nMuşcăturile de câine sau pisică implică cel mai uzual specii aerobe precum Pasteurella — Corect: Pasteurella ca agent uzual al mușcăturilor animale este enunțată.\n\nMuşcăturile umane se suturează primar, flora orală fiind nepatogenă — Incorect: Textul cere opusul: mușcătura umană nu se închide primar.\n\nPasteurella este patogenul tipic al mușcăturii umane, Eikenella aparținând flora canină — Incorect: Atribuirea Eikenella/Pasteurella este inversată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 82, Infecțiile mâinii — Muşcături umane versus animale (pagini PDF: 27).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    82
   ],
   "pdfPages": [
    27
   ],
   "section": "Infecțiile mâinii — Muşcături umane versus animale"
  },
  "learningObjective": "Diferențierea interdicției de închidere primară și a Eikenella (uman) de Pasteurella (câine/pisică).",
  "optionRationales": [
   "Regula de a nu închide primar mușcătura umană este explicită.",
   "Eikenella corrodens și distrucția tecilor sunt citate.",
   "Pasteurella ca agent uzual al mușcăturilor animale este enunțată.",
   "Textul cere opusul: mușcătura umană nu se închide primar.",
   "Atribuirea Eikenella/Pasteurella este inversată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Suturează primar mușcătura umană și permută Eikenella cu Pasteurella, două capcane de urgență din același paragraf."
  },
  "textbookExpressions": [
   "Eikenella corrodens",
   "Pasteurella"
  ]
 },
 {
  "id": "infectii-chir-adv-034",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Conform Tabelului 8-7, profilaxia tetanosului la adultul 19–64 de ani include:",
  "options": [
   "Istoric necunoscut sau <3 doze, plagă curată minoră: Tdap/Td da, IGT nu",
   "Istoric necunoscut sau <3 doze, celelalte plăgi: Tdap/Td da și IGT da",
   "≥3 doze, plagă curată minoră: fără rapel, exceptând dacă au trecut >10 ani de la ultima doză de TT",
   "≥3 doze, celelalte plăgi: fără IGT; rapel dacă au trecut >5 ani de la ultima doză de TT",
   "La ≥3 doze, IGT se administrează de principiu și în plaga curată minoră, rapelul fiind superfluu"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Istoric necunoscut sau <3 doze, plagă curată minoră: Tdap/Td da, IGT nu — Corect: Prima linie a tabelului: vaccin da, IGT nu în plaga curată.\n\nIstoric necunoscut sau <3 doze, celelalte plăgi: Tdap/Td da și IGT da — Corect: Aceeași linie, coloana „toate celelalte”: vaccin și IGT.\n\n≥3 doze, plagă curată minoră: fără rapel, exceptând dacă au trecut >10 ani de la ultima doză de TT — Corect: Nota de subsol: rapel dacă >10 ani de la TT în plaga curată.\n\n≥3 doze, celelalte plăgi: fără IGT; rapel dacă au trecut >5 ani de la ultima doză de TT — Corect: Nota: rapel dacă >5 ani în celelalte plăgi, fără IGT.\n\nLa ≥3 doze, IGT se administrează de principiu și în plaga curată minoră, rapelul fiind superfluu — Incorect: La ≥3 doze IGT nu se dă; rapelul rămâne condiționat de interval.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 81, Tabelul 8-7 — Profilaxia tetanosului după numărul de doze (pagini PDF: 26).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    81
   ],
   "pdfPages": [
    26
   ],
   "section": "Tabelul 8-7 — Profilaxia tetanosului după numărul de doze"
  },
  "learningObjective": "Aplicarea matricei Tdap/IGT: <3 doze (IGT doar la plăgile ne-curate) versus ≥3 doze (rapel la >10 ani curat, >5 ani celelalte).",
  "optionRationales": [
   "Prima linie a tabelului: vaccin da, IGT nu în plaga curată.",
   "Aceeași linie, coloana „toate celelalte”: vaccin și IGT.",
   "Nota de subsol: rapel dacă >10 ani de la TT în plaga curată.",
   "Nota: rapel dacă >5 ani în celelalte plăgi, fără IGT.",
   "La ≥3 doze IGT nu se dă; rapelul rămâne condiționat de interval."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Dă IGT neselectiv după ≥3 doze și confundă ferestrele >10 ani (curat) cu >5 ani (plagă predispozantă)."
  },
  "textbookExpressions": [
   "> 10 ani",
   "> 5 ani"
  ]
 },
 {
  "id": "infectii-chir-adv-035",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Conform Tabelului 8-5, furunculul/carbunculul și limfangita se recunosc prin:",
  "options": [
   "Furunculul/carbunculul: stafilococ, indurație localizată cu drenaj purulent; tratament prin incizie și drenaj plus antibiotice sistemice",
   "Limfangita: streptococ, striuri de inflamație de-a lungul canalelor limfatice; îngrijire locală, antibiotice, îndepărtarea corpului străin și ridicarea extremității",
   "Furunculul este clostridian, cu crepitații, și cere amputație de primă intenție",
   "Limfangita se tratează doar prin oxigen hiperbar, fără antibiotice",
   "Ambele sunt INTM polimicrobiene ale perineului, identice gangrenei Fournier"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Furunculul/carbunculul: stafilococ, indurație localizată cu drenaj purulent; tratament prin incizie și drenaj plus antibiotice sistemice — Corect: Etiologia stafilococică, aspectul localizat și I&D sunt tabelate.\n\nLimfangita: streptococ, striuri de inflamație de-a lungul canalelor limfatice; îngrijire locală, antibiotice, îndepărtarea corpului străin și ridicarea extremității — Corect: Etiologia streptococică, striurile limfatice, corpul străin și elevarea sunt tabelate.\n\nFurunculul este clostridian, cu crepitații, și cere amputație de primă intenție — Incorect: Crepitațiile și amputația țin de rândul gangrenă/INTM, nu de furuncul.\n\nLimfangita se tratează doar prin oxigen hiperbar, fără antibiotice — Incorect: Limfangita primește antibiotice sistemice și îngrijire locală, nu OHB ca monoterapie.\n\nAmbele sunt INTM polimicrobiene ale perineului, identice gangrenei Fournier — Incorect: Fournier este eponimul INTM genital/perineal, nu al furunculului sau limfangitei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 80, Tabelul 8-5 — Furuncul/carbuncul versus limfangită (pagini PDF: 25).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    80
   ],
   "pdfPages": [
    25
   ],
   "section": "Tabelul 8-5 — Furuncul/carbuncul versus limfangită"
  },
  "learningObjective": "Diferențierea stafilococului localizat (I&D) de streptococul cu striuri limfatice și elevarea extremității, versus INTM/Fournier.",
  "optionRationales": [
   "Etiologia stafilococică, aspectul localizat și I&D sunt tabelate.",
   "Etiologia streptococică, striurile limfatice, corpul străin și elevarea sunt tabelate.",
   "Crepitațiile și amputația țin de rândul gangrenă/INTM, nu de furuncul.",
   "Limfangita primește antibiotice sistemice și îngrijire locală, nu OHB ca monoterapie.",
   "Fournier este eponimul INTM genital/perineal, nu al furunculului sau limfangitei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută clostridiile și Fournier pe furuncul/limfangită, două rânduri alăturate din același tabel."
  },
  "textbookExpressions": [
   "Furuncul",
   "Limfangită"
  ]
 },
 {
  "id": "infectii-chir-adv-036",
  "topicId": "infectii-chir",
  "type": "CS",
  "stem": "După controlul adecvat al sursei primare în infecția intra-abdominală, durata antibioterapiei:",
  "options": [
   "Nu trebuie să fie mai lungă de 2 zile de la încetarea febrei și a leucocitozei",
   "Se prelungește 14 zile de principiu, independent de defervescență",
   "Se oprește la incizie, analog profilaxiei herniei curate",
   "Se ghidează doar după PCR, febra fiind ignorată",
   "Cere oxigen hiperbar ca substitut al controlului sursei"
  ],
  "correct": [
   0
  ],
  "explanation": "Nu trebuie să fie mai lungă de 2 zile de la încetarea febrei și a leucocitozei — Corect: Textul fixează durata la cel mult 2 zile de la încetarea febrei și leucocitozei după controlul sursei.\n\nSe prelungește 14 zile de principiu, independent de defervescență — Incorect: 14 zile neselectiv contrazice limita citată.\n\nSe oprește la incizie, analog profilaxiei herniei curate — Incorect: Hernia curată nu dictează durata curativă intra-abdominală.\n\nSe ghidează doar după PCR, febra fiind ignorată — Incorect: Febra și leucocitoza sunt tocmai reperul de oprire.\n\nCere oxigen hiperbar ca substitut al controlului sursei — Incorect: Controlul sursei rămâne pasul esențial; OHB nu îl înlocuiește.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 78, Infecții intra-abdominale — Durata după defervescență (pagini PDF: 23).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    78
   ],
   "pdfPages": [
    23
   ],
   "section": "Infecții intra-abdominale — Durata după defervescență"
  },
  "learningObjective": "Recunoașterea limitei de 2 zile după dispariția febrei și leucocitozei, distinctă de STOP-IT (4 zile) din același paragraf.",
  "optionRationales": [
   "Textul fixează durata la cel mult 2 zile de la încetarea febrei și leucocitozei după controlul sursei.",
   "14 zile neselectiv contrazice limita citată.",
   "Hernia curată nu dictează durata curativă intra-abdominală.",
   "Febra și leucocitoza sunt tocmai reperul de oprire.",
   "Controlul sursei rămâne pasul esențial; OHB nu îl înlocuiește."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează fereastra de 2 zile după defervescență cu 14 zile sau cu STOP-IT, două durate din același capitol."
  },
  "textbookExpressions": [
   "2 zile de la",
   "încetarea febrei"
  ]
 },
 {
  "id": "infectii-chir-adv-037",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Diagnosticul microbiologic și terapia empirică în PAV includ:",
  "options": [
   "Cultură cantitativă pozitivă: ≥10⁴ UFC/mL la lavajul bronhoalveolar și ≥10³ CFU/mL la periajul bronșic protejat",
   "Pacienții spitalizați sub 5 zile au risc scăzut de germeni rezistenți; acoperirea vizează S. aureus și Gram-negativi",
   "Spitalizare >5 zile, imunodepresie sau SDRA impun acoperire MRSA și Pseudomonas; 7 zile de antibiotic specific sunt suficiente la majoritatea",
   "O cultură negativă din aspiratul endotraheal are valoare predictivă negativă foarte puternică; sub pragul cantitativ, empiricul se oprește",
   "Empiricul se continuă 21 de zile chiar la culturi negative, spitalizarea sub 5 zile impunând MRSA de principiu"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Cultură cantitativă pozitivă: ≥10⁴ UFC/mL la lavajul bronhoalveolar și ≥10³ CFU/mL la periajul bronșic protejat — Corect: Pragurile BAL ≥10⁴ și periaj ≥10³ sunt explicite.\n\nPacienții spitalizați sub 5 zile au risc scăzut de germeni rezistenți; acoperirea vizează S. aureus și Gram-negativi — Corect: Fereastra <5 zile cu spectru S. aureus/GNN este enunțată.\n\nSpitalizare >5 zile, imunodepresie sau SDRA impun acoperire MRSA și Pseudomonas; 7 zile de antibiotic specific sunt suficiente la majoritatea — Corect: MRSA/Pseudomonas peste 5 zile/SDRA și cele 7 zile sunt citate.\n\nO cultură negativă din aspiratul endotraheal are valoare predictivă negativă foarte puternică; sub pragul cantitativ, empiricul se oprește — Corect: VPN-ul aspiratului negativ și oprirea empiricului sub prag sunt descrise.\n\nEmpiricul se continuă 21 de zile chiar la culturi negative, spitalizarea sub 5 zile impunând MRSA de principiu — Incorect: Textul cere oprirea la culturi negative și 7 zile, nu 21; <5 zile nu impune MRSA.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 79, PAV — Praguri 10⁴/10³, fereastra de 5 zile și cura de 7 zile (pagini PDF: 24).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    79
   ],
   "pdfPages": [
    24
   ],
   "section": "PAV — Praguri 10⁴/10³, fereastra de 5 zile și cura de 7 zile"
  },
  "learningObjective": "Aplicarea pragurilor cantitative, a riscului de rezistență după 5 zile și a duratei de 7 zile, versus continuarea neselectivă.",
  "optionRationales": [
   "Pragurile BAL ≥10⁴ și periaj ≥10³ sunt explicite.",
   "Fereastra <5 zile cu spectru S. aureus/GNN este enunțată.",
   "MRSA/Pseudomonas peste 5 zile/SDRA și cele 7 zile sunt citate.",
   "VPN-ul aspiratului negativ și oprirea empiricului sub prag sunt descrise.",
   "Textul cere oprirea la culturi negative și 7 zile, nu 21; <5 zile nu impune MRSA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează fereastra <5 zile (fără MRSA) cu acoperirea MRSA și prelungește cura de 7 zile la 21."
  },
  "textbookExpressions": [
   "7 zile",
   "periajul bronşic"
  ]
 },
 {
  "id": "infectii-chir-adv-038",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Manifestările precoce ale infecțiilor necrozante de țesuturi moi includ:",
  "options": [
   "Durere disproporționată față de aspectul leziunii",
   "Edem care depășește eritemul, desensibilizare tegumentară, epidermoliză și decolorare; leucocitoza și hiponatremia pot susține suspiciunea",
   "Emfizemul de țesuturi moi este detectat doar la 39% dintre pacienți, absența lui neexcluzând INTM; explorarea chirurgicală este adesea necesară",
   "Bulele, crepitațiile și gangrena dermică sunt semne precoce, hiponatremia infirmând diagnosticul",
   "Emfizemul radiologic este sine qua non pentru diagnostic, explorarea fiind superfluă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Durere disproporționată față de aspectul leziunii — Corect: Durerea disproporționată este descrisă ca cel mai caracteristic simptom.\n\nEdem care depășește eritemul, desensibilizare tegumentară, epidermoliză și decolorare; leucocitoza și hiponatremia pot susține suspiciunea — Corect: Edemul extra-eritematos, desensibilizarea și perechea leucocitoză-hiponatremie sunt listate.\n\nEmfizemul de țesuturi moi este detectat doar la 39% dintre pacienți, absența lui neexcluzând INTM; explorarea chirurgicală este adesea necesară — Corect: Cifra 39% și necesitatea explorării sunt de pe pagina următoare.\n\nBulele, crepitațiile și gangrena dermică sunt semne precoce, hiponatremia infirmând diagnosticul — Incorect: Bulele și crepitațiile sunt manifestări tardive, asociate sepsisului.\n\nEmfizemul radiologic este sine qua non pentru diagnostic, explorarea fiind superfluă — Incorect: Absența emfizemului nu exclude INTM; explorarea rămâne adesea necesară.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 79, 80, INTM — Durere disproporționată și emfizem la 39% (pagini PDF: 24, 25).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    79,
    80
   ],
   "pdfPages": [
    24,
    25
   ],
   "section": "INTM — Durere disproporționată și emfizem la 39%"
  },
  "learningObjective": "Contrastarea durerii disproporționate și a semnelor precoce de hiponatremia/leucocitoză față de emfizemul inconstant (39%).",
  "optionRationales": [
   "Durerea disproporționată este descrisă ca cel mai caracteristic simptom.",
   "Edemul extra-eritematos, desensibilizarea și perechea leucocitoză-hiponatremie sunt listate.",
   "Cifra 39% și necesitatea explorării sunt de pe pagina următoare.",
   "Bulele și crepitațiile sunt manifestări tardive, asociate sepsisului.",
   "Absența emfizemului nu exclude INTM; explorarea rămâne adesea necesară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă semnele tardive (bule, crepitații) în criterii precoce și face din emfizemul de 39% un sine qua non."
  },
  "textbookExpressions": [
   "disprop011ionată",
   "39% dintre pacienţi"
  ]
 },
 {
  "id": "infectii-chir-adv-039",
  "topicId": "infectii-chir",
  "type": "CS",
  "stem": "Eritemul care nu dispare la digitopresiune, în gangrena streptococică necrotizantă, indică:",
  "options": [
   "Tromboza subdermică a vascularizației nutritive tegumentare",
   "Celulită streptococică simplă, tratată doar cu pansamente calde",
   "Hidrosadenită apocrină axilară, fără debridare",
   "Limfangită cu striuri, fără risc de necroză",
   "Colonizare de Pasteurella după mușcătură de pisică"
  ],
  "correct": [
   0
  ],
  "explanation": "Tromboza subdermică a vascularizației nutritive tegumentare — Corect: Textul leagă explicit eritemul neresponsiv de tromboza subdermică a vaselor nutritive.\n\nCelulită streptococică simplă, tratată doar cu pansamente calde — Incorect: Celulita simplă dispare la digitopresiune și răspunde la penicilină, fără acest semn.\n\nHidrosadenită apocrină axilară, fără debridare — Incorect: Hidrosadenita este o entitate tabelată distinctă, apocrină.\n\nLimfangită cu striuri, fără risc de necroză — Incorect: Limfangita are striuri limfatice, nu tromboză subdermică.\n\nColonizare de Pasteurella după mușcătură de pisică — Incorect: Pasteurella ține de mușcătura animală, nu de această gangrenă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 80, INTM — Eritem neresponsiv la digitopresiune (pagini PDF: 25).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    80
   ],
   "pdfPages": [
    25
   ],
   "section": "INTM — Eritem neresponsiv la digitopresiune"
  },
  "learningObjective": "Recunoașterea eritemului care nu dispare la digitopresiune ca semn de tromboză subdermică, nu de celulită banală.",
  "optionRationales": [
   "Textul leagă explicit eritemul neresponsiv de tromboza subdermică a vaselor nutritive.",
   "Celulita simplă dispare la digitopresiune și răspunde la penicilină, fără acest semn.",
   "Hidrosadenita este o entitate tabelată distinctă, apocrină.",
   "Limfangita are striuri limfatice, nu tromboză subdermică.",
   "Pasteurella ține de mușcătura animală, nu de această gangrenă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă semnul de tromboză subdermică cu celulita care dispare la presiune, două entități alăturate."
  },
  "textbookExpressions": [
   "digitopresiune",
   "tromboza subdem"
  ]
 },
 {
  "id": "infectii-chir-adv-040",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "În INTM cu suspiciune de streptococ de grup A, antibioterapia include:",
  "options": [
   "Penicilină în doze mari",
   "Un inhibitor al sintezei proteice, precum clindamicina, folosit teoretic pentru a reduce producția de toxine",
   "Oxigen hiperbar ca substitut al debridării",
   "Vancomicină fără acoperire anaerobă, SGA fiind rezistent la penicilină",
   "Metronidazol izolat, identic abcesului amebian"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Penicilină în doze mari — Corect: Penicilina în doze mari la suspiciune de SGA este explicită.\n\nUn inhibitor al sintezei proteice, precum clindamicina, folosit teoretic pentru a reduce producția de toxine — Corect: Clindamicina ca inhibitor al sintezei proteice, cu efect teoretic antitoxinic, este citată.\n\nOxigen hiperbar ca substitut al debridării — Incorect: OHB este adjuvant, nu substitut al debridării.\n\nVancomicină fără acoperire anaerobă, SGA fiind rezistent la penicilină — Incorect: SGA rămâne sensibil la penicilină; acoperirea INTM include și anaerobi/MRSA.\n\nMetronidazol izolat, identic abcesului amebian — Incorect: Metronidazolul izolat nu este schema SGA.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 80, INTM — Penicilină în doză mare și clindamicină antitoxină (pagini PDF: 25).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    80
   ],
   "pdfPages": [
    25
   ],
   "section": "INTM — Penicilină în doză mare și clindamicină antitoxină"
  },
  "learningObjective": "Asocierea penicilinei în doză mare cu clindamicina ca inhibitor de sinteză proteică, versus OHB ca substitut.",
  "optionRationales": [
   "Penicilina în doze mari la suspiciune de SGA este explicită.",
   "Clindamicina ca inhibitor al sintezei proteice, cu efect teoretic antitoxinic, este citată.",
   "OHB este adjuvant, nu substitut al debridării.",
   "SGA rămâne sensibil la penicilină; acoperirea INTM include și anaerobi/MRSA.",
   "Metronidazolul izolat nu este schema SGA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește penicilina plus clindamicina cu OHB ca monoterapie, ignorând mecanismul antitoxinic."
  },
  "textbookExpressions": [
   "sintezei proteice",
   "penicilina în doze"
  ]
 },
 {
  "id": "infectii-chir-adv-041",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Abcesul mamar, dincolo de etiologia stafilococică, se caracterizează prin:",
  "options": [
   "Vârsta de gestație >41 de săptămâni figurează printre factorii de risc",
   "Drenajul chirurgical, acceptat ca primă intenție, asociază rezultat cosmetic mai prost și rată mai mare de fistule de duct mamar",
   "Tegumentul supraiacent compromis sau eșecul aspirației seriate impun drenaj chirurgical",
   "Alăptarea se întrerupe de principiu, fistulele contraindicând orice lactație",
   "Factorii de risc exclud vârsta gestațională avansată, fistulele fiind absente după drenaj"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Vârsta de gestație >41 de săptămâni figurează printre factorii de risc — Corect: Pragul >41 de săptămâni este listat printre factorii de risc.\n\nDrenajul chirurgical, acceptat ca primă intenție, asociază rezultat cosmetic mai prost și rată mai mare de fistule de duct mamar — Corect: Rezultatul cosmetic inferior și fistulele de duct sunt explicite.\n\nTegumentul supraiacent compromis sau eșecul aspirației seriate impun drenaj chirurgical — Corect: Tegumentul compromis și eșecul aspirației sunt indicațiile de drenaj chirurgical.\n\nAlăptarea se întrerupe de principiu, fistulele contraindicând orice lactație — Incorect: Mamele care alăptează sunt încurajate să continue.\n\nFactorii de risc exclud vârsta gestațională avansată, fistulele fiind absente după drenaj — Incorect: Vârsta gestațională >41 de săptămâni este tocmai un factor listat; fistulele sunt o complicație a drenajului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 81, Abcesul mamar — Gestație >41 săptămâni și fistula ductală (pagini PDF: 26).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    81
   ],
   "pdfPages": [
    26
   ],
   "section": "Abcesul mamar — Gestație >41 săptămâni și fistula ductală"
  },
  "learningObjective": "Adăugarea pragului >41 de săptămâni și a prețului cosmetic/fistulos al drenajului chirurgical, versus oprirea lactației.",
  "optionRationales": [
   "Pragul >41 de săptămâni este listat printre factorii de risc.",
   "Rezultatul cosmetic inferior și fistulele de duct sunt explicite.",
   "Tegumentul compromis și eșecul aspirației sunt indicațiile de drenaj chirurgical.",
   "Mamele care alăptează sunt încurajate să continue.",
   "Vârsta gestațională >41 de săptămâni este tocmai un factor listat; fistulele sunt o complicație a drenajului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Omită pragul >41 de săptămâni și inversează indicația de a continua lactația, două detalii din același paragraf."
  },
  "textbookExpressions": [
   ">41 de săptămâni",
   "fistule de duct mamar"
  ]
 },
 {
  "id": "infectii-chir-adv-042",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Infecțiile spațiilor profunde ale mâinii se recunosc prin:",
  "options": [
   "Infecția spațiului tenar: durere și tumefacție a eminenței tenare, policele ținut în abducție pentru a reduce durerea",
   "Abcesul compartimentului palmar: pierderea concavității normale prin tumefacție dureroasă în tensiune a palmei",
   "Policele se menține în adducție forțată, concavitatea palmară fiind accentuată",
   "Panarițiul unghial se tratează prin deschiderea tecii pe toată lungimea, identic tenosinovitei",
   "Spațiul hipotenar este scutit de infecție, abducția policeului fiind un semn de vindecare"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Infecția spațiului tenar: durere și tumefacție a eminenței tenare, policele ținut în abducție pentru a reduce durerea — Corect: Abducția policeului în infecția tenară este explicită.\n\nAbcesul compartimentului palmar: pierderea concavității normale prin tumefacție dureroasă în tensiune a palmei — Corect: Pierderea concavității palmare este semnul abcesului palmar.\n\nPolicele se menține în adducție forțată, concavitatea palmară fiind accentuată — Incorect: Textul descrie abducție, nu adducție; concavitatea se pierde, nu se accentuează.\n\nPanarițiul unghial se tratează prin deschiderea tecii pe toată lungimea, identic tenosinovitei — Incorect: Deschiderea tecii definește tenosinovita, nu panarițiul unghial.\n\nSpațiul hipotenar este scutit de infecție, abducția policeului fiind un semn de vindecare — Incorect: Spațiul hipotenar poate prezenta, rar, tumefacție și durere la mobilizare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 82, Infecțiile mâinii — Tenar (abducție) versus palmar (concavitate) (pagini PDF: 27).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    82
   ],
   "pdfPages": [
    27
   ],
   "section": "Infecțiile mâinii — Tenar (abducție) versus palmar (concavitate)"
  },
  "learningObjective": "Diferențierea abducției antalgice a policeului (tenar) de pierderea concavității palmare, versus tenosinovită/panarițiu.",
  "optionRationales": [
   "Abducția policeului în infecția tenară este explicită.",
   "Pierderea concavității palmare este semnul abcesului palmar.",
   "Textul descrie abducție, nu adducție; concavitatea se pierde, nu se accentuează.",
   "Deschiderea tecii definește tenosinovita, nu panarițiul unghial.",
   "Spațiul hipotenar poate prezenta, rar, tumefacție și durere la mobilizare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează abducția tenară cu adducția și confundă pierderea concavității palmare cu tenosinovita."
  },
  "textbookExpressions": [
   "abducţie",
   "concavităţii"
  ]
 },
 {
  "id": "infectii-chir-adv-043",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Angiocolita obstructivă, dincolo de triada Charcot, se caracterizează prin:",
  "options": [
   "Adăugarea hipotensiunii și a alterării stării mentale definește pentada Reynolds",
   "Drenajul prompt al căii biliare plus antibiotice empirice sistemice sunt imperative",
   "Calea poate fi drenată endoscopic (ERCP cu extracție și sfincterotomie Oddi), prin colangio-cateter transhepatic percutanat sau chirurgical",
   "Colecistectomia se realizează odată ce patologia septică a fost corectată",
   "Pentada înlocuiește resuscitarea volemică, colecistectomia fiind primul gest în șoc"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Adăugarea hipotensiunii și a alterării stării mentale definește pentada Reynolds — Corect: Hipotensiunea și alterarea mentală ca plus față de Charcot sunt explicite.\n\nDrenajul prompt al căii biliare plus antibiotice empirice sistemice sunt imperative — Corect: Drenajul prompt și antibioticele sunt imperative.\n\nCalea poate fi drenată endoscopic (ERCP cu extracție și sfincterotomie Oddi), prin colangio-cateter transhepatic percutanat sau chirurgical — Corect: Cele trei căi de drenaj sunt enumerate.\n\nColecistectomia se realizează odată ce patologia septică a fost corectată — Corect: Colecistectomia după corectarea sepsiei este enunțată.\n\nPentada înlocuiește resuscitarea volemică, colecistectomia fiind primul gest în șoc — Incorect: Resuscitarea volemică agresivă este cerută în șoc; colecistectomia nu este primul gest.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 82, Angiocolită — Pentada Reynolds și căile de drenaj (pagini PDF: 27).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    82
   ],
   "pdfPages": [
    27
   ],
   "section": "Angiocolită — Pentada Reynolds și căile de drenaj"
  },
  "learningObjective": "Completarea triadei Charcot cu pentada Reynolds și ierarhia ERCP/transhepatic/chirurgie, plus colecistectomia după controlul sepsiei.",
  "optionRationales": [
   "Hipotensiunea și alterarea mentală ca plus față de Charcot sunt explicite.",
   "Drenajul prompt și antibioticele sunt imperative.",
   "Cele trei căi de drenaj sunt enumerate.",
   "Colecistectomia după corectarea sepsiei este enunțată.",
   "Resuscitarea volemică agresivă este cerută în șoc; colecistectomia nu este primul gest."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune colecistectomia înaintea drenajului căii și anulează pentada Reynolds, două trepte din același algoritm."
  },
  "textbookExpressions": [
   "pentada Reynold",
   "sfincterotomie"
  ]
 },
 {
  "id": "infectii-chir-adv-044",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Perforația colonică, pe CT și în forma localizată, se caracterizează prin:",
  "options": [
   "CT poate descrie îngroșarea peretelui, densificarea grăsimii mezenterice, pneumatoză intestinală, colecții pericolonice și pneumoperitoneu",
   "Anumiți pacienți cu perforație localizată, inclusiv mezocolonică, pot fi gestionați inițial conservator, cu condiția drenajului adecvat",
   "Perforațiile colonului necesită, de regulă, rezecția segmentului perforat și devierea tranzitului",
   "Pneumatoza infirmă perforația, managementul conservator fiind regula în peritonita difuză cu șoc",
   "Devierea tranzitului este superfluă, antibioticele izolând perforația colonică virulentă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "CT poate descrie îngroșarea peretelui, densificarea grăsimii mezenterice, pneumatoză intestinală, colecții pericolonice și pneumoperitoneu — Corect: Cele cinci semne CT sunt enumerate.\n\nAnumiți pacienți cu perforație localizată, inclusiv mezocolonică, pot fi gestionați inițial conservator, cu condiția drenajului adecvat — Corect: Excepția perforației localizate/mezocolonice cu drenaj este explicită.\n\nPerforațiile colonului necesită, de regulă, rezecția segmentului perforat și devierea tranzitului — Corect: Rezecția plus devierea este conduita uzuală.\n\nPneumatoza infirmă perforația, managementul conservator fiind regula în peritonita difuză cu șoc — Incorect: Pneumatoza este un semn CT de perforație, nu o infirmare; forma difuză cu șoc cere chirurgie.\n\nDevierea tranzitului este superfluă, antibioticele izolând perforația colonică virulentă — Incorect: Antibioticele nu înlocuiesc rezecția și deturnarea.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 84, 83, Perforația colonică — Semne CT și perforația mezocolonică (pagini PDF: 29, 28).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    84,
    83
   ],
   "pdfPages": [
    29,
    28
   ],
   "section": "Perforația colonică — Semne CT și perforația mezocolonică"
  },
  "learningObjective": "Integrarea semnelor CT (inclusiv pneumatoza) cu excepția conservatoare a perforației localizate/mezocolonice.",
  "optionRationales": [
   "Cele cinci semne CT sunt enumerate.",
   "Excepția perforației localizate/mezocolonice cu drenaj este explicită.",
   "Rezecția plus devierea este conduita uzuală.",
   "Pneumatoza este un semn CT de perforație, nu o infirmare; forma difuză cu șoc cere chirurgie.",
   "Antibioticele nu înlocuiesc rezecția și deturnarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă pneumatoza într-un semn de liniștire și generalizează conservatorul asupra peritonitei difuze."
  },
  "textbookExpressions": [
   "pneumatoza intestinală",
   "mezocolonică"
  ]
 },
 {
  "id": "infectii-chir-adv-045",
  "topicId": "infectii-chir",
  "type": "CM",
  "stem": "Pneumonia asociată spitalizării și cea asociată ventilatorului, împreună:",
  "options": [
   "Reprezintă 22% din totalul infecțiilor dobândite în spital, ceea ce le face cele mai frecvente infecții nosocomiale",
   "Aproximativ 10% dintre pacienții care necesită ventilație mecanică sunt diagnosticați cu PAV, rata nescăzând în ultimul deceniu",
   "Reprezintă 5% din nosocomiale, identic incidenței globale la internați",
   "PAV apare la 50% dintre ventilați, analog plăgilor murdare",
   "IPC rămâne cea mai frecventă nosocomială, PAV fiind rară sub 1%"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Reprezintă 22% din totalul infecțiilor dobândite în spital, ceea ce le face cele mai frecvente infecții nosocomiale — Corect: Cifra 22% și statutul de cele mai frecvente nosocomiale sunt explicite.\n\nAproximativ 10% dintre pacienții care necesită ventilație mecanică sunt diagnosticați cu PAV, rata nescăzând în ultimul deceniu — Corect: Cei 10% dintre ventilați și stagnarea ratei sunt citați.\n\nReprezintă 5% din nosocomiale, identic incidenței globale la internați — Incorect: 5% este incidența nosocomială globală la internați, nu ponderea HAP/PAV.\n\nPAV apare la 50% dintre ventilați, analog plăgilor murdare — Incorect: 50% este riscul plăgilor murdare, nu al PAV.\n\nIPC rămâne cea mai frecventă nosocomială, PAV fiind rară sub 1% — Incorect: Textul plasează HAP/PAV înaintea IPC ca nosocomială cea mai frecventă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 8, p. 79, HAP/PAV — Pondere 22% și incidență 10% la ventilați (pagini PDF: 24).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 8,
   "printedPages": [
    79
   ],
   "pdfPages": [
    24
   ],
   "section": "HAP/PAV — Pondere 22% și incidență 10% la ventilați"
  },
  "learningObjective": "Fixarea ponderii de 22% (cea mai frecventă nosocomială) și a ratei de 10% la ventilați, versus 5% sau 50%.",
  "optionRationales": [
   "Cifra 22% și statutul de cele mai frecvente nosocomiale sunt explicite.",
   "Cei 10% dintre ventilați și stagnarea ratei sunt citați.",
   "5% este incidența nosocomială globală la internați, nu ponderea HAP/PAV.",
   "50% este riscul plăgilor murdare, nu al PAV.",
   "Textul plasează HAP/PAV înaintea IPC ca nosocomială cea mai frecventă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 22% (HAP/PAV) cu 5% (nosocomial global) și 50% (plagă murdară), trei procente din capitol."
  },
  "textbookExpressions": [
   "22% din toatalul",
   "Aproximativ 10%"
  ]
 }
];
