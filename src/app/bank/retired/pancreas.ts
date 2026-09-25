import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_PANCREAS:Question[]=[
 {
  "id": "pancreas-adv-001",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Diagnosticul și etiologia pancreatitei acute:",
  "options": [
   "Diagnosticul este cert când sunt îndeplinite cel puțin două dintre trei criterii: tablou clinic concordant, amilaze sau lipaze crescute și modificări CT tipice",
   "Consumul de alcool și calculii biliari sunt responsabili de aproximativ 85% dintre cazuri",
   "Pancreatita post-ERCP poate apărea la 1–5% dintre pacienți",
   "Formele fără etiologie cunoscută reprezintă 40–50% și nu au legătură cu microlitiaza",
   "Pancreatita acută ușoară se definește prin necroză infectată și insuficiență multiplă de organ persistentă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Diagnosticul este cert când sunt îndeplinite cel puțin două dintre trei criterii: tablou clinic concordant, amilaze sau lipaze crescute și modificări CT tipice — Corect: Cele trei criterii și regula „cel puțin două” sunt explicite.\n\nConsumul de alcool și calculii biliari sunt responsabili de aproximativ 85% dintre cazuri — Corect: Ponderea de aproximativ 85% alcool plus calculi este citată.\n\nPancreatita post-ERCP poate apărea la 1–5% dintre pacienți — Corect: Intervalul 1–5% post-ERCP este menționat.\n\nFormele fără etiologie cunoscută reprezintă 40–50% și nu au legătură cu microlitiaza — Incorect: Formele idiopatice sunt 8–10% și se leagă adesea de sludge, pancreas divisum sau pancreatită autoimună IgG4.\n\nPancreatita acută ușoară se definește prin necroză infectată și insuficiență multiplă de organ persistentă — Incorect: Necroza infectată și MSOF persistentă definesc forma severă, nu pe cea ușoară.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 262, Pancreatita acută — Diagnostic și etiologie (pagini PDF: 173).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    262
   ],
   "pdfPages": [
    173
   ],
   "section": "Pancreatita acută — Diagnostic și etiologie"
  },
  "learningObjective": "Aplicarea criteriilor Atlanta (2 din 3) și a ponderii alcool/litiază, față de definirea greșită a formei ușoare.",
  "optionRationales": [
   "Cele trei criterii și regula „cel puțin două” sunt explicite.",
   "Ponderea de aproximativ 85% alcool plus calculi este citată.",
   "Intervalul 1–5% post-ERCP este menționat.",
   "Formele idiopatice sunt 8–10% și se leagă adesea de sludge, pancreas divisum sau pancreatită autoimună IgG4.",
   "Necroza infectată și MSOF persistentă definesc forma severă, nu pe cea ușoară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amestecă pragul diagnostic Atlanta cu clasificarea de severitate și umflă ponderea formelor idiopatice."
  },
  "textbookExpressions": [
   "aproximativ 85%",
   "1-5% dintre pacienţi"
  ]
 },
 {
  "id": "pancreas-adv-002",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Interpretată separat, creșterea de 3 ori peste limita normală a amilazelor serice are:",
  "options": [
   "Specificitate de 95% și sensibilitate de 61%",
   "Sensibilitate de 95% și specificitate de 61%",
   "Sensibilitate și specificitate de 50%",
   "Valoare prognostică superioară criteriilor Ranson",
   "Semnificație diagnostică doar dacă lipaza rămâne normală"
  ],
  "correct": [
   0
  ],
  "explanation": "Specificitate de 95% și sensibilitate de 61% — Corect: Textul atribuie creșterii de 3 ori o specificitate de 95% și o sensibilitate de 61%.\n\nSensibilitate de 95% și specificitate de 61% — Incorect: Valorile sunt inversate față de text.\n\nSensibilitate și specificitate de 50% — Incorect: Nu sunt citate sensibilitate și specificitate de 50% pentru acest prag.\n\nValoare prognostică superioară criteriilor Ranson — Incorect: Amilaza nu este inclusă în criteriile Ranson și nu reflectă gravitatea.\n\nSemnificație diagnostică doar dacă lipaza rămâne normală — Incorect: Asocierea 1,5× amilază plus 5× lipază are sensibilitate 95%; amilaza izolată nu cere lipază normală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 263, Pancreatita acută — Explorări de laborator (pagini PDF: 174).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    263
   ],
   "pdfPages": [
    174
   ],
   "section": "Pancreatita acută — Explorări de laborator"
  },
  "learningObjective": "Diferențierea specificității înalte a pragului de 3× amilază de sensibilitatea mai scăzută și de criteriile de prognostic.",
  "optionRationales": [
   "Textul atribuie creșterii de 3 ori o specificitate de 95% și o sensibilitate de 61%.",
   "Valorile sunt inversate față de text.",
   "Nu sunt citate sensibilitate și specificitate de 50% pentru acest prag.",
   "Amilaza nu este inclusă în criteriile Ranson și nu reflectă gravitatea.",
   "Asocierea 1,5× amilază plus 5× lipază are sensibilitate 95%; amilaza izolată nu cere lipază normală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sensibilitatea și specificitatea unui prag numeric clasic, ușor de memorat greșit."
  },
  "textbookExpressions": [
   "specificitate de 95%",
   "61 %"
  ]
 },
 {
  "id": "pancreas-adv-003",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Criteriile Ranson în pancreatita acută:",
  "options": [
   "Nici amilaza, nici lipaza serică nu sunt incluse și nu reflectă gravitatea pancreatitei",
   "Prezența a trei sau mai multe criterii indică o pancreatită severă, cu incidență crescută a complicațiilor",
   "Pentru etiologia non-biliară, pragul de vârstă la internare este >70 de ani",
   "Amilaza serică este criteriul dominant de gravitate măsurat la internare",
   "O singură examinare CT la internare reflectă gravitatea bolii pe tot parcursul evoluției"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Nici amilaza, nici lipaza serică nu sunt incluse și nu reflectă gravitatea pancreatitei — Corect: Textul subliniază explicit absența amilazei și lipazei din criteriile Ranson.\n\nPrezența a trei sau mai multe criterii indică o pancreatită severă, cu incidență crescută a complicațiilor — Corect: Trei sau mai multe criterii definesc pancreatita severă.\n\nPentru etiologia non-biliară, pragul de vârstă la internare este >70 de ani — Incorect: Vârsta >70 ani este pragul biliar; non-biliar este >55 ani.\n\nAmilaza serică este criteriul dominant de gravitate măsurat la internare — Incorect: Amilaza marchează distrucția acinară, nu gravitatea.\n\nO singură examinare CT la internare reflectă gravitatea bolii pe tot parcursul evoluției — Incorect: Pancreatita nu este statică; un singur CT poate să nu reflecte gravitatea la un alt moment.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 264, Prognostic — Criteriile Ranson (pagini PDF: 175).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    264
   ],
   "pdfPages": [
    175
   ],
   "section": "Prognostic — Criteriile Ranson"
  },
  "learningObjective": "Recunoașterea faptului că amilaza/lipaza nu intră în Ranson și a pragului de trei criterii pentru forma severă.",
  "optionRationales": [
   "Textul subliniază explicit absența amilazei și lipazei din criteriile Ranson.",
   "Trei sau mai multe criterii definesc pancreatita severă.",
   "Vârsta >70 ani este pragul biliar; non-biliar este >55 ani.",
   "Amilaza marchează distrucția acinară, nu gravitatea.",
   "Pancreatita nu este statică; un singur CT poate să nu reflecte gravitatea la un alt moment."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează pragurile de vârstă biliar/non-biliar și atribuie amilazei un rol prognostic pe care textul i-l neagă."
  },
  "textbookExpressions": [
   "trei sau mai multe criterii",
   "Criteriile Ranson"
  ]
 },
 {
  "id": "pancreas-adv-004",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Managementul necrozei pancreatice:",
  "options": [
   "Profilaxia antibiotică nu este indicată nici la pacienții cu necroză sterilă",
   "Necroza pancreatică apare la aproximativ 20% dintre pacienții cu pancreatită acută",
   "Doar circa 5% dintre pacienții cu necroză dezvoltă o infecție secundară",
   "Intervențiile precoce în necroza sterilă trebuie evitate cel puțin 2–3 săptămâni de la apariție",
   "Necroza infectată trebuie suspectată încă din prima zi de la debutul pancreatitei"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Profilaxia antibiotică nu este indicată nici la pacienții cu necroză sterilă — Corect: Textul precizează că profilaxia nu este indicată nici în necroza sterilă.\n\nNecroza pancreatică apare la aproximativ 20% dintre pacienții cu pancreatită acută — Corect: Incidența de circa 20% este citată.\n\nDoar circa 5% dintre pacienții cu necroză dezvoltă o infecție secundară — Corect: Infecția secundară la circa 5% dintre cei cu necroză este menționată.\n\nIntervențiile precoce în necroza sterilă trebuie evitate cel puțin 2–3 săptămâni de la apariție — Corect: Fereastra de cel puțin 2–3 săptămâni înaintea operației în necroza sterilă este explicită.\n\nNecroza infectată trebuie suspectată încă din prima zi de la debutul pancreatitei — Incorect: Infecția apare de obicei la 2–3 săptămâni de la debut, nu din prima zi.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 265, 266, Complicații — Necroza pancreatică (pagini PDF: 176, 177).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    265,
    266
   ],
   "pdfPages": [
    176,
    177
   ],
   "section": "Complicații — Necroza pancreatică"
  },
  "learningObjective": "Aplicarea ratelor 20%/5%, a interdicției profilaxiei în necroza sterilă și a ferestrei de 2–3 săptămâni înaintea necrectomiei.",
  "optionRationales": [
   "Textul precizează că profilaxia nu este indicată nici în necroza sterilă.",
   "Incidența de circa 20% este citată.",
   "Infecția secundară la circa 5% dintre cei cu necroză este menționată.",
   "Fereastra de cel puțin 2–3 săptămâni înaintea operației în necroza sterilă este explicită.",
   "Infecția apare de obicei la 2–3 săptămâni de la debut, nu din prima zi."
  ],
  "difficulty": {
   "score": 9,
   "kind": "editorial-estimate",
   "reason": "Combină două procente de necroză/infecție cu timing-ul chirurgical, pe un distractor care forțează operația în ziua 1."
  },
  "textbookExpressions": [
   "aproximativ 20%",
   "2-3 săptămâni"
  ]
 },
 {
  "id": "pancreas-adv-005",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Carcinomul pancreatic se caracterizează prin:",
  "options": [
   "O veziculă biliară palpabilă, nedureroasă, asociată cu icter nedureros, reprezintă cel mai adesea semn de malignitate (semnul Courvoisier)",
   "Rezecabilitatea presupune absența diseminării la distanță, a ascitei și a invaziei VMS, venei porte, AMS, arterei hepatice, venei cave și aortei",
   "Tumorile corporeo-caudale se prezintă tardiv, cu durere posterioară, fără icter, și au prognostic nefavorabil",
   "Carcinoamele periampulare produc icter nedureros mai târziu decât cele ale capului pancreatic și au prognostic mai prost",
   "Biopsia preoperatorie a unei tumori imagistic rezecabile este necesară înaintea oricărei duodenopancreatectomii"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "O veziculă biliară palpabilă, nedureroasă, asociată cu icter nedureros, reprezintă cel mai adesea semn de malignitate (semnul Courvoisier) — Corect: Semnul Courvoisier este definit explicit în acest context.\n\nRezecabilitatea presupune absența diseminării la distanță, a ascitei și a invaziei VMS, venei porte, AMS, arterei hepatice, venei cave și aortei — Corect: Criteriile de rezecabilitate (fără metastaze, ascită sau invazie vasculară majoră) sunt enumerate.\n\nTumorile corporeo-caudale se prezintă tardiv, cu durere posterioară, fără icter, și au prognostic nefavorabil — Corect: Prezentarea tardivă fără icter și prognosticul nefavorabil al leziunilor corporeo-caudale sunt descrise.\n\nCarcinoamele periampulare produc icter nedureros mai târziu decât cele ale capului pancreatic și au prognostic mai prost — Incorect: Carcinoamele periampulare produc icter mai devreme și au prognostic mai bun.\n\nBiopsia preoperatorie a unei tumori imagistic rezecabile este necesară înaintea oricărei duodenopancreatectomii — Incorect: Biopsia preoperatorie a tumorii rezecabile nu este indicată de rutină, din cauza fals-negativelor și a riscului de întârziere.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 269, 270, Tumorile pancreatice — Tablou clinic și rezecabilitate (pagini PDF: 180, 181).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    269,
    270
   ],
   "pdfPages": [
    180,
    181
   ],
   "section": "Tumorile pancreatice — Tablou clinic și rezecabilitate"
  },
  "learningObjective": "Recunoașterea semnului Courvoisier, a criteriilor de rezecabilitate și a prezentării tardive a tumorilor corporeo-caudale.",
  "optionRationales": [
   "Semnul Courvoisier este definit explicit în acest context.",
   "Criteriile de rezecabilitate (fără metastaze, ascită sau invazie vasculară majoră) sunt enumerate.",
   "Prezentarea tardivă fără icter și prognosticul nefavorabil al leziunilor corporeo-caudale sunt descrise.",
   "Carcinoamele periampulare produc icter mai devreme și au prognostic mai bun.",
   "Biopsia preoperatorie a tumorii rezecabile nu este indicată de rutină, din cauza fals-negativelor și a riscului de întârziere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează prognosticul periampular versus corporeo-caudal și transformă biopsia opțională într-o condiție preoperatorie."
  },
  "textbookExpressions": [
   "semnul Courvoisier",
   "icterului nedureros"
  ]
 },
 {
  "id": "pancreas-adv-006",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "La o tumoră pancreatică imagistic rezecabilă, drenajul biliar preoperator:",
  "options": [
   "Nu este indicat atunci când imaginile sugerează rezecabilitate, deoarece procedurile de drenaj cresc riscul de complicații infecțioase după rezecție",
   "Trebuie efectuat de rutină pentru a reduce complicațiile infecțioase post-rezecție",
   "Înlocuiește duodenopancreatectomia cefalică în tumorile capului pancreatic",
   "Se realizează prin splenectomie asociată pancreatectomiei distale",
   "Este preferat stentării doar după documentarea invaziei aortice"
  ],
  "correct": [
   0
  ],
  "explanation": "Nu este indicat atunci când imaginile sugerează rezecabilitate, deoarece procedurile de drenaj cresc riscul de complicații infecțioase după rezecție — Corect: Textul contraindică drenajul preoperator la tumorile imagistic rezecabile, din cauza creșterii complicațiilor infecțioase.\n\nTrebuie efectuat de rutină pentru a reduce complicațiile infecțioase post-rezecție — Incorect: Drenajul crește, nu reduce, riscul infecțios post-rezecție.\n\nÎnlocuiește duodenopancreatectomia cefalică în tumorile capului pancreatic — Incorect: Tumorile cefalice rezecabile se abordează prin duodenopancreatectomie (Whipple), nu prin drenaj ca substitut.\n\nSe realizează prin splenectomie asociată pancreatectomiei distale — Incorect: Splenectomia însoțește pancreatectomia distală pentru corp/coadă, nu drenajul biliar.\n\nEste preferat stentării doar după documentarea invaziei aortice — Incorect: Invazia aortică definește nerezecabilitatea, nu o indicație de drenaj ca etapă curativă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 270, Tratamentul cancerului pancreatic — Pregătire preoperatorie (pagini PDF: 181).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    270
   ],
   "pdfPages": [
    181
   ],
   "section": "Tratamentul cancerului pancreatic — Pregătire preoperatorie"
  },
  "learningObjective": "Recunoașterea că drenajul biliar preoperator crește infecțiile după rezecție și nu este indicat la tumorile rezecabile.",
  "optionRationales": [
   "Textul contraindică drenajul preoperator la tumorile imagistic rezecabile, din cauza creșterii complicațiilor infecțioase.",
   "Drenajul crește, nu reduce, riscul infecțios post-rezecție.",
   "Tumorile cefalice rezecabile se abordează prin duodenopancreatectomie (Whipple), nu prin drenaj ca substitut.",
   "Splenectomia însoțește pancreatectomia distală pentru corp/coadă, nu drenajul biliar.",
   "Invazia aortică definește nerezecabilitatea, nu o indicație de drenaj ca etapă curativă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează relația drenaj–infecție, pe o regulă preoperatorie contraintuitivă."
  },
  "textbookExpressions": [
   "Drenajul",
   "complicaţii infecţioase"
  ]
 },
 {
  "id": "pancreas-adv-007",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Anatomia chirurgicală a pancreasului se caracterizează prin:",
  "options": [
   "Organ retroperitoneal cu patru părți: cap, istm, corp și coadă",
   "Capul este încadrat de potcoava duodenală; procesul uncinat este o prelungire posterioară și inferioară a capului",
   "Vena mezenterică superioară marchează joncțiunea cap–istm; istmul stă imediat deasupra VMS, corpul la stânga ei",
   "Coada se extinde spre hilul splinei, pe care uneori se sprijină",
   "Pancreasul este intraperitoneal, uncinatul ținând de coadă, iar VMS separă coada de splină"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Organ retroperitoneal cu patru părți: cap, istm, corp și coadă — Corect: Cele patru părți sunt enumerate.\n\nCapul este încadrat de potcoava duodenală; procesul uncinat este o prelungire posterioară și inferioară a capului — Corect: Potcoava duodenală și uncinatul sunt descrise.\n\nVena mezenterică superioară marchează joncțiunea cap–istm; istmul stă imediat deasupra VMS, corpul la stânga ei — Corect: Rolul VMS ca reper cap/istm/corp este explicit.\n\nCoada se extinde spre hilul splinei, pe care uneori se sprijină — Corect: Relația coadă–hil splenic este citată.\n\nPancreasul este intraperitoneal, uncinatul ținând de coadă, iar VMS separă coada de splină — Incorect: Glanda este retroperitoneală; uncinatul ține de cap, nu de coadă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 257, Anatomie — Segmente (pagini PDF: 168).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    257
   ],
   "pdfPages": [
    168
   ],
   "section": "Anatomie — Segmente"
  },
  "learningObjective": "Maparea cap–istm–corp–coadă pe VMS ca reper al istmului și pe uncinat ca prelungire a capului.",
  "optionRationales": [
   "Cele patru părți sunt enumerate.",
   "Potcoava duodenală și uncinatul sunt descrise.",
   "Rolul VMS ca reper cap/istm/corp este explicit.",
   "Relația coadă–hil splenic este citată.",
   "Glanda este retroperitoneală; uncinatul ține de cap, nu de coadă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută uncinatul pe coadă și scoate pancreasul din retroperitoneu, două erori de reper."
  },
  "textbookExpressions": [
   "patru părţi",
   "procesul uncinat"
  ]
 },
 {
  "id": "pancreas-adv-008",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Embriologia ductelor pancreatice include:",
  "options": [
   "La 30 de zile, endodermul duodenal formează mugurii ventral și dorsal",
   "Mugurele ventral (viitorul uncinat) se rotește în sens orar și se așază inferior de cel dorsal",
   "Wirsung se formează prin fuziunea porțiunilor distale ale ductelor dorsal și ventral și se deschide, de obicei, cu CBP la ampula Vater",
   "Santorini este porțiunea distală persistentă a ductului dorsal (duct accesor)",
   "Mugurele ventral dă naștere corpului și cozii, iar Wirsung se deschide izolat, fără CBP"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "La 30 de zile, endodermul duodenal formează mugurii ventral și dorsal — Corect: Ziua 30 este explicită.\n\nMugurele ventral (viitorul uncinat) se rotește în sens orar și se așază inferior de cel dorsal — Corect: Rotația orară și soarta uncinatului sunt descrise.\n\nWirsung se formează prin fuziunea porțiunilor distale ale ductelor dorsal și ventral și se deschide, de obicei, cu CBP la ampula Vater — Corect: Fuziunea și ampula Vater sunt citate.\n\nSantorini este porțiunea distală persistentă a ductului dorsal (duct accesor) — Corect: Santorini ca rest dorsal este menționat.\n\nMugurele ventral dă naștere corpului și cozii, iar Wirsung se deschide izolat, fără CBP — Incorect: Mugurele dorsal dă cap, corp și coadă; Wirsung se asociază de obicei cu CBP.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 257, Embriologie — Wirsung și Santorini (pagini PDF: 168).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    257
   ],
   "pdfPages": [
    168
   ],
   "section": "Embriologie — Wirsung și Santorini"
  },
  "learningObjective": "Aplicarea rotației orare a mugurelui ventral și a fuziunii care creează Wirsung versus Santorini persistent.",
  "optionRationales": [
   "Ziua 30 este explicită.",
   "Rotația orară și soarta uncinatului sunt descrise.",
   "Fuziunea și ampula Vater sunt citate.",
   "Santorini ca rest dorsal este menționat.",
   "Mugurele dorsal dă cap, corp și coadă; Wirsung se asociază de obicei cu CBP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează soarta mugurelui ventral (uncinat vs corp-coadă) și deschiderea Wirsung."
  },
  "textbookExpressions": [
   "30 de zile",
   "Canalul Wirsung"
  ]
 },
 {
  "id": "pancreas-adv-009",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Pancreas divisum se caracterizează prin:",
  "options": [
   "Aproximativ 10% din populație are ducte ventral și dorsal care nu fuzionează complet",
   "Cea mai mare parte a pancreasului dorsal drenează prin Santorini (papila mică), iar uncinatul/o parte din cap prin papila mare",
   "90% dintre pacienți au pancreatită recurentă, orificiul secundar fiind prea larg",
   "Pancreas divisum este prezent la 90% din populație și impune Whipple de principiu",
   "Santorini drenează doar uncinatul, iar Wirsung întregul corp, fără risc de pancreatită"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Aproximativ 10% din populație are ducte ventral și dorsal care nu fuzionează complet — Corect: Cifra de aproximativ 10% este explicită.\n\nCea mai mare parte a pancreasului dorsal drenează prin Santorini (papila mică), iar uncinatul/o parte din cap prin papila mare — Corect: Pattern-ul de drenaj papilă mică/mare este descris.\n\n90% dintre pacienți au pancreatită recurentă, orificiul secundar fiind prea larg — Incorect: 90% sunt asimptomatici; orificiul secundar e prea mic, nu prea larg.\n\nPancreas divisum este prezent la 90% din populație și impune Whipple de principiu — Incorect: 10%, nu 90%, au anomalia; Whipple nu este tratamentul de principiu.\n\nSantorini drenează doar uncinatul, iar Wirsung întregul corp, fără risc de pancreatită — Incorect: Santorini drenează majoritatea pancreasului dorsal, nu doar uncinatul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 257, Pancreas divisum (pagini PDF: 168).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    257
   ],
   "pdfPages": [
    168
   ],
   "section": "Pancreas divisum"
  },
  "learningObjective": "Reținerea prevalenței de 10%, a drenajului dorsal pe Santorini și a faptului că 90% rămân asimptomatici.",
  "optionRationales": [
   "Cifra de aproximativ 10% este explicită.",
   "Pattern-ul de drenaj papilă mică/mare este descris.",
   "90% sunt asimptomatici; orificiul secundar e prea mic, nu prea larg.",
   "10%, nu 90%, au anomalia; Whipple nu este tratamentul de principiu.",
   "Santorini drenează majoritatea pancreasului dorsal, nu doar uncinatul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează 10% versus 90% (prevalență vs asimptomatici) și forțează Whipple."
  },
  "textbookExpressions": [
   "Aproximativ 10%",
   "90% dintre pacienţii"
  ]
 },
 {
  "id": "pancreas-adv-010",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Pancreasul inelar, cauză rară de obstrucție duodenală la sugar, se tratează prin:",
  "options": [
   "Șuntare chirurgicală (duodeno-jejunostomie), evitând secționarea parenchimului, care ar avea rată mare de fistule",
   "Secționarea inelului pancreatic, ca gest de elecție, fistula fiind rară",
   "Duodenopancreatectomie cefalică de principiu la nou-născut",
   "ERCP cu sfincterotomie, inelul fiind un pancreas divisum",
   "Observație, obstrucția duodenală rezolvându-se la pubertate"
  ],
  "correct": [
   0
  ],
  "explanation": "Șuntare chirurgicală (duodeno-jejunostomie), evitând secționarea parenchimului, care ar avea rată mare de fistule — Corect: Șuntarea și evitarea secțiunii sunt explicite.\n\nSecționarea inelului pancreatic, ca gest de elecție, fistula fiind rară — Incorect: Secționarea este tocmai gestul evitat.\n\nDuodenopancreatectomie cefalică de principiu la nou-născut — Incorect: Whipple nu este tratamentul inelului.\n\nERCP cu sfincterotomie, inelul fiind un pancreas divisum — Incorect: Inelul nu este divisum și nu se rezolvă prin sfincterotomie.\n\nObservație, obstrucția duodenală rezolvându-se la pubertate — Incorect: Obstrucția la sugar cere bypass, nu observație.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 258, Pancreas inelar (pagini PDF: 169).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    258
   ],
   "pdfPages": [
    169
   ],
   "section": "Pancreas inelar"
  },
  "learningObjective": "Recunoașterea duodeno-jejunostomiei ca bypass, față de secțiunea parenchimului care produce fistulă.",
  "optionRationales": [
   "Șuntarea și evitarea secțiunii sunt explicite.",
   "Secționarea este tocmai gestul evitat.",
   "Whipple nu este tratamentul inelului.",
   "Inelul nu este divisum și nu se rezolvă prin sfincterotomie.",
   "Obstrucția la sugar cere bypass, nu observație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește bypass-ul cu tăierea inelului, exact manevra cu rată mare de fistulă."
  },
  "textbookExpressions": [
   "duodeno-jejunostomie",
   "fistule pancreatice"
  ]
 },
 {
  "id": "pancreas-adv-011",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Variațiile arteriale relevante pentru duodenopancreatectomie includ:",
  "options": [
   "La aproximativ 20% lipsește artera hepatică dreaptă „clasică”; lobul drept e irigat din AMS (arteră hepatică dreaptă din AMS)",
   "La 20% artera hepatică stângă își are originea în artera gastrică stângă",
   "Aceste vase din AMS se pot leza ușor dacă nu sunt identificate pe CT cu contrast sau intraoperator",
   "Trunchiul celiac se trifurcă normal în gastrică stângă, splenică și hepatică comună",
   "Artera hepatică dreaptă din AMS este prezentă la 80% din populație și poate fi ligaturată fără risc"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "La aproximativ 20% lipsește artera hepatică dreaptă „clasică”; lobul drept e irigat din AMS (arteră hepatică dreaptă din AMS) — Corect: Cifra de ~20% și originea din AMS sunt explicite.\n\nLa 20% artera hepatică stângă își are originea în artera gastrică stângă — Corect: Cele 20% AHS din gastrică stângă sunt citate.\n\nAceste vase din AMS se pot leza ușor dacă nu sunt identificate pe CT cu contrast sau intraoperator — Corect: Avertismentul de lezare/ligatură este descris.\n\nTrunchiul celiac se trifurcă normal în gastrică stângă, splenică și hepatică comună — Corect: Trifurcația clasică este menționată.\n\nArtera hepatică dreaptă din AMS este prezentă la 80% din populație și poate fi ligaturată fără risc — Incorect: Variația este la 20%, nu 80%; ligatura poate infarcta lobul drept.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 258, Anatomie vasculară — Artera hepatică dreaptă din AMS (pagini PDF: 169).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    258
   ],
   "pdfPages": [
    169
   ],
   "section": "Anatomie vasculară — Artera hepatică dreaptă din AMS"
  },
  "learningObjective": "Reținerea celor două variații de 20% (AHD din AMS, AHS din gastrică stângă) și a riscului de ligatură în Whipple.",
  "optionRationales": [
   "Cifra de ~20% și originea din AMS sunt explicite.",
   "Cele 20% AHS din gastrică stângă sunt citate.",
   "Avertismentul de lezare/ligatură este descris.",
   "Trifurcația clasică este menționată.",
   "Variația este la 20%, nu 80%; ligatura poate infarcta lobul drept."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează 20% versus 80% și autorizează ligatura AHD din AMS."
  },
  "textbookExpressions": [
   "20% din populaţie",
   "arteră hepatică dreaptă"
  ]
 },
 {
  "id": "pancreas-adv-012",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Secreția exocrină pancreatică se caracterizează prin:",
  "options": [
   "500–800 mL zilnic de fluid alcalin izoton, cu Na și K egale cu plasma",
   "Când chimul gastric cu pH <3 ajunge în duoden, secretina determină lichid bogat în bicarbonat (pH >8)",
   "Clorul variază invers proporțional cu secreția de bicarbonat",
   "CCK, stimulată de peptide, aminoacizi și acizi grași, contractă vezicula biliară",
   "Volumul zilnic este 50 mL acid, secretina inhibând bicarbonatul când pH-ul duodenal e <3"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "500–800 mL zilnic de fluid alcalin izoton, cu Na și K egale cu plasma — Corect: Volumul 500–800 mL este explicit.\n\nCând chimul gastric cu pH <3 ajunge în duoden, secretina determină lichid bogat în bicarbonat (pH >8) — Corect: Secvența pH <3 → secretină → HCO3 pH >8 este citată.\n\nClorul variază invers proporțional cu secreția de bicarbonat — Corect: Relația inversă Cl–bicarbonat este descrisă.\n\nCCK, stimulată de peptide, aminoacizi și acizi grași, contractă vezicula biliară — Corect: Stimulii CCK și contracția veziculei sunt menționați.\n\nVolumul zilnic este 50 mL acid, secretina inhibând bicarbonatul când pH-ul duodenal e <3 — Incorect: Volumul este alcalin 500–800 mL, nu 50 mL acid.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 260, Fiziologie exocrină (pagini PDF: 171).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    260
   ],
   "pdfPages": [
    171
   ],
   "section": "Fiziologie exocrină"
  },
  "learningObjective": "Aplicarea volumului 500–800 mL, a pragului pH <3 pentru secretină și a relației inversă Cl/HCO3.",
  "optionRationales": [
   "Volumul 500–800 mL este explicit.",
   "Secvența pH <3 → secretină → HCO3 pH >8 este citată.",
   "Relația inversă Cl–bicarbonat este descrisă.",
   "Stimulii CCK și contracția veziculei sunt menționați.",
   "Volumul este alcalin 500–800 mL, nu 50 mL acid."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează volumul și efectul secretinei pe bicarbonat."
  },
  "textbookExpressions": [
   "500-800 mL",
   "pH <3"
  ]
 },
 {
  "id": "pancreas-adv-013",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la funcția endocrină pancreatică:",
  "options": [
   "Insulele Langerhans sunt mai abundente în coadă; celulele α secretă glucagon la glicemie scăzută, cu glicogenoliză",
   "Insulele predomină în cap, iar glucagonul scade glicemia",
   "Insulina este produsă de celulele acinare, nu insulare",
   "Somatostatina lipsește din insule, fiind doar duodenală",
   "Coada pancreatică este lipsită de insule, de aceea pancreatectomia distală nu afectează glicemia"
  ],
  "correct": [
   0
  ],
  "explanation": "Insulele Langerhans sunt mai abundente în coadă; celulele α secretă glucagon la glicemie scăzută, cu glicogenoliză — Corect: Abundența în coadă și secreția de glucagon sunt explicite.\n\nInsulele predomină în cap, iar glucagonul scade glicemia — Incorect: Insulele sunt mai abundente caudal, nu în cap; glucagonul crește glicemia.\n\nInsulina este produsă de celulele acinare, nu insulare — Incorect: Insulina este insulară, nu acinară.\n\nSomatostatina lipsește din insule, fiind doar duodenală — Incorect: Somatostatina figurează printre hormonii insulari.\n\nCoada pancreatică este lipsită de insule, de aceea pancreatectomia distală nu afectează glicemia — Incorect: Coada este tocmai sediul abundent; rezecția distală poate afecta homeostazia glucozei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 261, Fiziologie endocrină (pagini PDF: 172).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    261
   ],
   "pdfPages": [
    172
   ],
   "section": "Fiziologie endocrină"
  },
  "learningObjective": "Recunoașterea densității insulare caudale și a răspunsului α–glucagon la hipoglicemie.",
  "optionRationales": [
   "Abundența în coadă și secreția de glucagon sunt explicite.",
   "Insulele sunt mai abundente caudal, nu în cap; glucagonul crește glicemia.",
   "Insulina este insulară, nu acinară.",
   "Somatostatina figurează printre hormonii insulari.",
   "Coada este tocmai sediul abundent; rezecția distală poate afecta homeostazia glucozei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută insulele din coadă în cap și inversează efectul glucagonului pe glicemie."
  },
  "textbookExpressions": [
   "cozii pancreatice",
   "glucagonul"
  ]
 },
 {
  "id": "pancreas-adv-014",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "În etiologia pancreatitei acute, în afara cuplului alcool–litiază, sunt adevărate următoarele:",
  "options": [
   "Primul episod postetanolic este precedat de 6–8 ani de consum excesiv",
   "La neconsumatorii de alcool, ~60% au calculi biliari ca și cauză mecanică",
   "Medicamente incriminate includ corticosteroizi, tiazide, furosemid, estrogeni și azatioprină",
   "Pancreatita postoperatorie este citată după 0,8–17% proceduri gastrice și 0,7–9,3% proceduri biliare",
   "Alcoolul produce primul episod în primele 48 de ore de consum, fără ani de expunere"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Primul episod postetanolic este precedat de 6–8 ani de consum excesiv — Corect: Intervalul 6–8 ani este explicit.\n\nLa neconsumatorii de alcool, ~60% au calculi biliari ca și cauză mecanică — Corect: Cifra de 60% este citată.\n\nMedicamente incriminate includ corticosteroizi, tiazide, furosemid, estrogeni și azatioprină — Corect: Lista de medicamente este enumerată.\n\nPancreatita postoperatorie este citată după 0,8–17% proceduri gastrice și 0,7–9,3% proceduri biliare — Corect: Procentele gastrice și biliare sunt din Tabelul 17-2.\n\nAlcoolul produce primul episod în primele 48 de ore de consum, fără ani de expunere — Incorect: Primul episod urmează ani de consum, nu 48 de ore.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 262, 263, Etiologie — Alcool, litiază, medicamente (pagini PDF: 173, 174).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    262,
    263
   ],
   "pdfPages": [
    173,
    174
   ],
   "section": "Etiologie — Alcool, litiază, medicamente"
  },
  "learningObjective": "Aplicarea ferestrei de 6–8 ani, a ponderii de 60% litiazică la nealcoolici și a listelor medicamentoase/postoperatorii.",
  "optionRationales": [
   "Intervalul 6–8 ani este explicit.",
   "Cifra de 60% este citată.",
   "Lista de medicamente este enumerată.",
   "Procentele gastrice și biliare sunt din Tabelul 17-2.",
   "Primul episod urmează ani de consum, nu 48 de ore."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Comprimă fereastra de 6–8 ani la 48 de ore, o capcană de istoric etanolic."
  },
  "textbookExpressions": [
   "6-8 ani",
   "60% dintre pacienţii"
  ]
 },
 {
  "id": "pancreas-adv-015",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Semnele Grey Turner și Cullen în pancreatita severă reprezintă:",
  "options": [
   "Hematom pe flancuri (Grey Turner) și echimoză periombilicală (Cullen), prin disecția sângelui retroperitoneal",
   "Icterul obstructiv palpebral, respectiv xantelasmele de hipertrigliceridemie",
   "Echimoza mastoidiană și cea periorbitală ale fracturii de bază de craniu",
   "Eritemul palmar și spider nevii din ciroză",
   "Livido reticularis al emboliei de colesterol, fără legătură cu retroperitoneul"
  ],
  "correct": [
   0
  ],
  "explanation": "Hematom pe flancuri (Grey Turner) și echimoză periombilicală (Cullen), prin disecția sângelui retroperitoneal — Corect: Cele două sedii și mecanismul de disecție sunt explicite.\n\nIcterul obstructiv palpebral, respectiv xantelasmele de hipertrigliceridemie — Incorect: Icterul/xantelasma nu sunt aceste semne.\n\nEchimoza mastoidiană și cea periorbitală ale fracturii de bază de craniu — Incorect: Battle și raccoon țin de baza craniului.\n\nEritemul palmar și spider nevii din ciroză — Incorect: Semnele cirotice sunt alt capitol.\n\nLivido reticularis al emboliei de colesterol, fără legătură cu retroperitoneul — Incorect: Livedo-ul embolic nu este descrierea din text.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 263, Pancreatită acută — Semne cutanate (pagini PDF: 174).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    263
   ],
   "pdfPages": [
    174
   ],
   "section": "Pancreatită acută — Semne cutanate"
  },
  "learningObjective": "Diferențierea Grey Turner (flanc) de Cullen (periombilical) ca markeri de hemoragie retroperitoneală.",
  "optionRationales": [
   "Cele două sedii și mecanismul de disecție sunt explicite.",
   "Icterul/xantelasma nu sunt aceste semne.",
   "Battle și raccoon țin de baza craniului.",
   "Semnele cirotice sunt alt capitol.",
   "Livedo-ul embolic nu este descrierea din text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută semnele de hemoragie retroperitoneală pe baza craniului sau pe ciroză."
  },
  "textbookExpressions": [
   "Grey Turner",
   "semnul Cullen"
  ]
 },
 {
  "id": "pancreas-adv-016",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Asocierea amilază ×1,5 peste normal plus lipază ×5 are:",
  "options": [
   "Sensibilitate de 95% pentru confirmarea diagnosticului de pancreatită acută",
   "Specificitate de 95% și sensibilitate de 61%, ca pragul izolat de 3× amilază",
   "Valoare prognostică superioară criteriilor Ranson",
   "Semnificație doar dacă CT-ul este deja necrotic",
   "Sensibilitate de 20%, insuficientă pentru diagnostic"
  ],
  "correct": [
   0
  ],
  "explanation": "Sensibilitate de 95% pentru confirmarea diagnosticului de pancreatită acută — Corect: Sensibilitatea de 95% a asocierii este explicită.\n\nSpecificitate de 95% și sensibilitate de 61%, ca pragul izolat de 3× amilază — Incorect: 95%/61% țin de amilaza izolată de 3×, nu de cuplu.\n\nValoare prognostică superioară criteriilor Ranson — Incorect: Amilaza/lipaza nu intră în Ranson și nu reflectă gravitatea.\n\nSemnificație doar dacă CT-ul este deja necrotic — Incorect: Necroza CT nu este condiția de validare a enzimelor.\n\nSensibilitate de 20%, insuficientă pentru diagnostic — Incorect: Textul atribuie 95%, nu 20%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 263, Laborator — Amilază și lipază combinate (pagini PDF: 174).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    263
   ],
   "pdfPages": [
    174
   ],
   "section": "Laborator — Amilază și lipază combinate"
  },
  "learningObjective": "Diferențierea cuplului 1,5× + 5× (sensibilitate 95%) de pragul izolat 3× amilază (specificitate 95%, sensibilitate 61%).",
  "optionRationales": [
   "Sensibilitatea de 95% a asocierii este explicită.",
   "95%/61% țin de amilaza izolată de 3×, nu de cuplu.",
   "Amilaza/lipaza nu intră în Ranson și nu reflectă gravitatea.",
   "Necroza CT nu este condiția de validare a enzimelor.",
   "Textul atribuie 95%, nu 20%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă cuplul 1,5×/5× cu pragul izolat 3×, două numere alăturate în același paragraf."
  },
  "textbookExpressions": [
   "1,5 ori",
   "5 ori"
  ]
 },
 {
  "id": "pancreas-adv-017",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Stadializarea CT Balthazar în pancreatita acută atribuie:",
  "options": [
   "Gradul A pancreasului normal și B creșterii de dimensiuni",
   "Gradul C inflamației pancreatice și/sau a grăsimii peripancreatice",
   "Gradul E descrie pancreasul normal, fără colecții",
   "Un singur CT la internare reflectă gravitatea pe tot parcursul bolii",
   "Gradul B corespunde aerului retroperitoneal și necrozei infectate"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Gradul A pancreasului normal și B creșterii de dimensiuni — Corect: A și B sunt din tabel.\n\nGradul C inflamației pancreatice și/sau a grăsimii peripancreatice — Corect: C este citat.\n\nGradul E descrie pancreasul normal, fără colecții — Incorect: E este polul sever (colecții multiple/aer), nu pancreasul normal.\n\nUn singur CT la internare reflectă gravitatea pe tot parcursul bolii — Incorect: Un singur CT poate să nu reflecte gravitatea ulterioară.\n\nGradul B corespunde aerului retroperitoneal și necrozei infectate — Incorect: B este mărirea de dimensiuni, nu aerul retroperitoneal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 264, Prognostic — Clasificarea Balthazar (pagini PDF: 175).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    264
   ],
   "pdfPages": [
    175
   ],
   "section": "Prognostic — Clasificarea Balthazar"
  },
  "learningObjective": "Memorarea scării A–E (normal → mărire → inflamație → o colecție → colecții multiple/aer), față de caracterul nestatic al bolii.",
  "optionRationales": [
   "A și B sunt din tabel.",
   "C este citat.",
   "E este polul sever (colecții multiple/aer), nu pancreasul normal.",
   "Un singur CT poate să nu reflecte gravitatea ulterioară.",
   "B este mărirea de dimensiuni, nu aerul retroperitoneal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează polii A și E și tratează CT-ul unic ca prognostic definitiv."
  },
  "textbookExpressions": [
   "Grad",
   "Colecţie fluidă peripancreatică"
  ]
 },
 {
  "id": "pancreas-adv-018",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Pseudochistul pancreatic după pancreatită acută se caracterizează prin:",
  "options": [
   "Apare de obicei la 3–4 săptămâni, prin maturarea peretelui de colagen al colecției",
   "Nu are epiteliu în perete; poate comunica sau nu cu ductul pancreatic",
   "Cele >5 cm sau persistente peste 1 an tind să crească și merită drenaj",
   "Cele mature (>4 săptămâni) au perete gros, suturabil",
   "Pseudochistul are epiteliu cubic și se formează în primele 24 de ore, impunând drenaj extern imediat"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Apare de obicei la 3–4 săptămâni, prin maturarea peretelui de colagen al colecției — Corect: Fereastra 3–4 săptămâni este explicită.\n\nNu are epiteliu în perete; poate comunica sau nu cu ductul pancreatic — Corect: Absența epiteliului și comunicarea variabilă sunt citate.\n\nCele >5 cm sau persistente peste 1 an tind să crească și merită drenaj — Corect: Pragurile >5 cm și >1 an sunt menționate.\n\nCele mature (>4 săptămâni) au perete gros, suturabil — Corect: Maturarea la >4 săptămâni este descrisă.\n\nPseudochistul are epiteliu cubic și se formează în primele 24 de ore, impunând drenaj extern imediat — Incorect: Nu are epiteliu; 24 de ore este prea devreme pentru perete suturabil.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 266, Pseudochist — Definiție și timing (pagini PDF: 177).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    266
   ],
   "pdfPages": [
    177
   ],
   "section": "Pseudochist — Definiție și timing"
  },
  "learningObjective": "Aplicarea ferestrei 3–4 săptămâni, a absenței epiteliului și a pragurilor >5 cm / >1 an, față de drenajul prematur.",
  "optionRationales": [
   "Fereastra 3–4 săptămâni este explicită.",
   "Absența epiteliului și comunicarea variabilă sunt citate.",
   "Pragurile >5 cm și >1 an sunt menționate.",
   "Maturarea la >4 săptămâni este descrisă.",
   "Nu are epiteliu; 24 de ore este prea devreme pentru perete suturabil."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune epiteliu și drenaj la 24 de ore pe o leziune definită tocmai prin lipsa epiteliului și maturare la 3–4 săptămâni."
  },
  "textbookExpressions": [
   "3-4 săptămâni",
   ">5 cm"
  ]
 },
 {
  "id": "pancreas-adv-019",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Drenajul pseudochistului se alege după comunicarea cu ductul astfel:",
  "options": [
   "Drenajul extern al unui pseudochist comunicant este contraindicat (fistulă cronică sau infecție)",
   "Cele comunicante cer drenaj intern în stomac, duoden sau ansă Roux; succes >90%",
   "Un fragment de perete se trimite la anatomie patologică pe secțiuni la rece, pentru a exclude un neoplasm",
   "Cele necomunicante pot fi aspirate/drenate percutan, cu risc mic de refacere sau fistulă",
   "Drenajul extern este de elecție în cele comunicante, internul fiind rezervat celor necomunicante"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Drenajul extern al unui pseudochist comunicant este contraindicat (fistulă cronică sau infecție) — Corect: Contraindicația drenajului extern la comunicante este explicită.\n\nCele comunicante cer drenaj intern în stomac, duoden sau ansă Roux; succes >90% — Corect: Succesul >90% al internului este citat.\n\nUn fragment de perete se trimite la anatomie patologică pe secțiuni la rece, pentru a exclude un neoplasm — Corect: Fragmentul pentru excluderea neoplaziei este cerut.\n\nCele necomunicante pot fi aspirate/drenate percutan, cu risc mic de refacere sau fistulă — Corect: Percutanul la necomunicante este descris.\n\nDrenajul extern este de elecție în cele comunicante, internul fiind rezervat celor necomunicante — Incorect: Direcția intern/extern este inversată față de text.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 267, Pseudochist — Drenaj intern versus extern (pagini PDF: 178).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    267
   ],
   "pdfPages": [
    178
   ],
   "section": "Pseudochist — Drenaj intern versus extern"
  },
  "learningObjective": "Invertirea interzisă: externul e contraindicat dacă există comunicare ductală; internul (>90%) este calea corectă.",
  "optionRationales": [
   "Contraindicația drenajului extern la comunicante este explicită.",
   "Succesul >90% al internului este citat.",
   "Fragmentul pentru excluderea neoplaziei este cerut.",
   "Percutanul la necomunicante este descris.",
   "Direcția intern/extern este inversată față de text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează indicația intern versus extern după comunicarea cu ductul."
  },
  "textbookExpressions": [
   "peste 90%",
   "Drenajul extern"
  ]
 },
 {
  "id": "pancreas-adv-020",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Pancreatita cronică se deosebește de cea acută prin:",
  "options": [
   "Alcoolul este responsabil de aproximativ 70% dintre cazuri",
   "Distrucția glandulară este ireversibilă și de obicei progresivă",
   "Când 90% din glandă e distrusă apar insuficiență exo- și endocrină (steatoree, diabet, vitamine liposolubile)",
   "Durerea e surdă epigastrică cu iradiere posterioară; mâncarea o agravează",
   "Alcoolul cauzează sub 5% din cazuri, iar distrucția este reversibilă după un episod unic"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Alcoolul este responsabil de aproximativ 70% dintre cazuri — Corect: Cifra de ~70% este explicită.\n\nDistrucția glandulară este ireversibilă și de obicei progresivă — Corect: Ireversibilitatea este citată.\n\nCând 90% din glandă e distrusă apar insuficiență exo- și endocrină (steatoree, diabet, vitamine liposolubile) — Corect: Pragul de 90% și consecințele sunt descrise.\n\nDurerea e surdă epigastrică cu iradiere posterioară; mâncarea o agravează — Corect: Caracterul durerii și agravarea alimentară sunt menționate.\n\nAlcoolul cauzează sub 5% din cazuri, iar distrucția este reversibilă după un episod unic — Incorect: 70%, nu 5%; distrucția nu este reversibilă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 267, Pancreatită cronică — Etiologie și tablou (pagini PDF: 178).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    267
   ],
   "pdfPages": [
    178
   ],
   "section": "Pancreatită cronică — Etiologie și tablou"
  },
  "learningObjective": "Reținerea ponderii de 70% alcool, a ireversibilității și a pragului de 90% pentru insuficiența mixtă.",
  "optionRationales": [
   "Cifra de ~70% este explicită.",
   "Ireversibilitatea este citată.",
   "Pragul de 90% și consecințele sunt descrise.",
   "Caracterul durerii și agravarea alimentară sunt menționate.",
   "70%, nu 5%; distrucția nu este reversibilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ponderea alcoolului și declară reversibilă o leziune pe care textul o numește progresivă."
  },
  "textbookExpressions": [
   "aproximativ 70%",
   "90% din glandă"
  ]
 },
 {
  "id": "pancreas-adv-021",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Supraviețuirea în adenocarcinomul pancreatic se caracterizează prin:",
  "options": [
   "Boala nerezecabilă: medie ~6 luni, chiar și cu chimioterapie",
   "Rezecția cu margini negative plus adjuvant: ~19 luni",
   "Supraviețuirea la 5 ani este probabil de 20%",
   "Factori nefavorabili: metastaze ganglionare, tumori >3 cm, invazie perineurală",
   "Rezecția cu R0 garantează vindecarea, supraviețuirea la 5 ani depășind 90%"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Boala nerezecabilă: medie ~6 luni, chiar și cu chimioterapie — Corect: Cele ~6 luni sunt explicite.\n\nRezecția cu margini negative plus adjuvant: ~19 luni — Corect: Cele ~19 luni sunt citate.\n\nSupraviețuirea la 5 ani este probabil de 20% — Corect: Cifra de 20% la 5 ani este menționată.\n\nFactori nefavorabili: metastaze ganglionare, tumori >3 cm, invazie perineurală — Corect: Cei trei factori nefavorabili sunt listați.\n\nRezecția cu R0 garantează vindecarea, supraviețuirea la 5 ani depășind 90% — Incorect: Chiar după R0 pacienții decedează de obicei din cauza neoplaziei; 20%, nu 90%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 271, Cancer pancreatic — Prognostic (pagini PDF: 182).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    271
   ],
   "pdfPages": [
    182
   ],
   "section": "Cancer pancreatic — Prognostic"
  },
  "learningObjective": "Alinierea ferestrelor 6 luni / 19 luni / 20% la 5 ani și a trio-ului N+/mărime/perineural.",
  "optionRationales": [
   "Cele ~6 luni sunt explicite.",
   "Cele ~19 luni sunt citate.",
   "Cifra de 20% la 5 ani este menționată.",
   "Cei trei factori nefavorabili sunt listați.",
   "Chiar după R0 pacienții decedează de obicei din cauza neoplaziei; 20%, nu 90%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă supraviețuirea R0 la 90%, ignorând cifra textuală de 20% la 5 ani."
  },
  "textbookExpressions": [
   "6 luni",
   "19 luni"
  ]
 },
 {
  "id": "pancreas-adv-022",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "La tumora pancreatică nerezecabilă, paliația include:",
  "options": [
   "Bypass biliar dacă nerezecabilitatea se constată la explorare",
   "Obstrucția gastrică distală apare la ~10% și cere gastrojejunostomie paliativă",
   "Durerea posterioară se ameliorează prin neuroliza plexului celiac",
   "Pruritul prin hiperbilirubinemie se tratează prin stent biliar endoscopic",
   "Gastrojejunostomia este inutilă, obstrucția gastrică neexistând în cancerul pancreatic"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Bypass biliar dacă nerezecabilitatea se constată la explorare — Corect: Bypass-ul biliar intraoperator este citat.\n\nObstrucția gastrică distală apare la ~10% și cere gastrojejunostomie paliativă — Corect: Cifra de ~10% și GJ sunt explicite.\n\nDurerea posterioară se ameliorează prin neuroliza plexului celiac — Corect: Neuroliza celiacă este menționată.\n\nPruritul prin hiperbilirubinemie se tratează prin stent biliar endoscopic — Corect: Stentul endoscopic pentru prurit este descris.\n\nGastrojejunostomia este inutilă, obstrucția gastrică neexistând în cancerul pancreatic — Incorect: Obstrucția gastrică distală există și se paliază prin GJ.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 271, Paliație — Bypass, GJ, neuroliză, stent (pagini PDF: 182).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    271
   ],
   "pdfPages": [
    182
   ],
   "section": "Paliație — Bypass, GJ, neuroliză, stent"
  },
  "learningObjective": "Aplicarea ratei de 10% a obstrucției gastrice distale și a trio-ului bypass biliar / GJ / neuroliză / stent.",
  "optionRationales": [
   "Bypass-ul biliar intraoperator este citat.",
   "Cifra de ~10% și GJ sunt explicite.",
   "Neuroliza celiacă este menționată.",
   "Stentul endoscopic pentru prurit este descris.",
   "Obstrucția gastrică distală există și se paliază prin GJ."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă obstrucția gastrică distală, tocmai indicația de GJ din același paragraf."
  },
  "textbookExpressions": [
   "I 0% dintre",
   "gastrojejunostomie paliativă"
  ]
 },
 {
  "id": "pancreas-adv-023",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Insulinomul se caracterizează prin:",
  "options": [
   "Majoritatea sunt solitare și <2 cm; ~75% în corp și coadă",
   "Aproximativ 10% dintre pacienți au MEN-1",
   "Triada Whipple: simptome de hipoglicemie, glicemie 40–50 mg/dL, dispariția simptomelor după glucoză iv",
   "Insulinoamele nu cresc insulina ca răspuns la secretină, spre deosebire de celulele β normale",
   "Majoritatea sunt în cap, >5 cm și multicentrice, fără legătură cu MEN-1"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Majoritatea sunt solitare și <2 cm; ~75% în corp și coadă — Corect: Dimensiunea <2 cm și 75% corp/coadă sunt explicite.\n\nAproximativ 10% dintre pacienți au MEN-1 — Corect: Cifra de 10% MEN-1 este citată.\n\nTriada Whipple: simptome de hipoglicemie, glicemie 40–50 mg/dL, dispariția simptomelor după glucoză iv — Corect: Cele trei elemente Whipple sunt enumerate.\n\nInsulinoamele nu cresc insulina ca răspuns la secretină, spre deosebire de celulele β normale — Corect: Absența răspunsului la secretină este descrisă.\n\nMajoritatea sunt în cap, >5 cm și multicentrice, fără legătură cu MEN-1 — Incorect: Capul este sediul celorlalte TPN funcționale, nu al majorității insulinoamelor.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 272, Insulinom (pagini PDF: 183).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    272
   ],
   "pdfPages": [
    183
   ],
   "section": "Insulinom"
  },
  "learningObjective": "Combinarea sediului 75% corporeo-caudal, a 10% MEN-1, a triadei Whipple și a testului la secretină.",
  "optionRationales": [
   "Dimensiunea <2 cm și 75% corp/coadă sunt explicite.",
   "Cifra de 10% MEN-1 este citată.",
   "Cele trei elemente Whipple sunt enumerate.",
   "Absența răspunsului la secretină este descrisă.",
   "Capul este sediul celorlalte TPN funcționale, nu al majorității insulinoamelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută insulinomul în cap și neagă MEN-1, inversând harta TPN din același paragraf."
  },
  "textbookExpressions": [
   "75% dintre ele",
   "Triada Whipple"
  ]
 },
 {
  "id": "pancreas-adv-024",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Gastrinomul (Zollinger-Ellison) se caracterizează prin:",
  "options": [
   "Reprezintă ~20% dintre TPN funcționale; trei pătrimi sporadice, o pătrime MEN-1",
   "Peste 50% sunt în peretele duodenal; 60–90% cad în triunghiul gastrinomului",
   "Gastrina >1.000 pg/mL plus pH gastric <2 are valoare diagnostică; două treimi au gastrină <1.000 și cer teste suplimentare",
   "Simptomele (durere, ezofagită, diaree) țin de hiperaciditate; se remit dacă acidul e controlat, independent de gastrină",
   "Gastrinoamele sunt toate pancreatice, sporadice în 10% și cu gastrină diagnostică doar peste 200 pg/mL sub IPP"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Reprezintă ~20% dintre TPN funcționale; trei pătrimi sporadice, o pătrime MEN-1 — Corect: 20% și raportul 3/4 vs 1/4 sunt explicite.\n\nPeste 50% sunt în peretele duodenal; 60–90% cad în triunghiul gastrinomului — Corect: Duodenul >50% și triunghiul 60–90% sunt citate.\n\nGastrina >1.000 pg/mL plus pH gastric <2 are valoare diagnostică; două treimi au gastrină <1.000 și cer teste suplimentare — Corect: Pragul 1.000 și pH <2, plus cele două treimi, sunt descrise.\n\nSimptomele (durere, ezofagită, diaree) țin de hiperaciditate; se remit dacă acidul e controlat, independent de gastrină — Corect: Remisia simptomelor prin controlul acidului este menționată.\n\nGastrinoamele sunt toate pancreatice, sporadice în 10% și cu gastrină diagnostică doar peste 200 pg/mL sub IPP — Incorect: Multe nu sunt în pancreas; 1.000, nu 200 sub IPP, este pragul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 272, Gastrinom (pagini PDF: 183).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    272
   ],
   "pdfPages": [
    183
   ],
   "section": "Gastrinom"
  },
  "learningObjective": "Integrarea ponderii 20%, a sediului duodenal >50%, a triunghiului 60–90% și a pragului 1.000 pg/mL.",
  "optionRationales": [
   "20% și raportul 3/4 vs 1/4 sunt explicite.",
   "Duodenul >50% și triunghiul 60–90% sunt citate.",
   "Pragul 1.000 și pH <2, plus cele două treimi, sunt descrise.",
   "Remisia simptomelor prin controlul acidului este menționată.",
   "Multe nu sunt în pancreas; 1.000, nu 200 sub IPP, este pragul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce sporadicile la 10% și înlocuiește pragul 1.000 cu 200 pg/mL sub IPP."
  },
  "textbookExpressions": [
   "20% dintre TPN",
   ">I.OOO pg/mL"
  ]
 },
 {
  "id": "pancreas-adv-025",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Chistadenoamele seroase pancreatice:",
  "options": [
   "Sunt benigne și nu necesită rezecție",
   "Spre deosebire de chistadenocarcinomul seros, foarte rar, care trebuie rezecat",
   "Se confundă frecvent cu IPMN, de aceea toate se rezecează de principiu",
   "Conțin stromă ovariană și apar aproape doar la bărbați",
   "Au potențial invaziv de 40% la diagnostic, ca neoplasmele mucinoase"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sunt benigne și nu necesită rezecție — Corect: Lipsa indicației de rezecție este explicită.\n\nSpre deosebire de chistadenocarcinomul seros, foarte rar, care trebuie rezecat — Corect: Excepția chistadenocarcinomului seros (rezecție) este citată.\n\nSe confundă frecvent cu IPMN, de aceea toate se rezecează de principiu — Incorect: Nu toate leziunile chistice se rezecează; seroasele se observă.\n\nConțin stromă ovariană și apar aproape doar la bărbați — Incorect: Stroma ovariană ține de neoplasmele mucinoase, la femei.\n\nAu potențial invaziv de 40% la diagnostic, ca neoplasmele mucinoase — Incorect: Cifra de 40% invaziv ține de mucinoase, nu de seroase.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 274, Leziuni chistice — Chistadenom seros (pagini PDF: 185).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    274
   ],
   "pdfPages": [
    185
   ],
   "section": "Leziuni chistice — Chistadenom seros"
  },
  "learningObjective": "Recunoașterea caracterului benign (fără rezecție) al chistadenomului seros, față de rezecția obligatorie a mucinoaselor.",
  "optionRationales": [
   "Lipsa indicației de rezecție este explicită.",
   "Excepția chistadenocarcinomului seros (rezecție) este citată.",
   "Nu toate leziunile chistice se rezecează; seroasele se observă.",
   "Stroma ovariană ține de neoplasmele mucinoase, la femei.",
   "Cifra de 40% invaziv ține de mucinoase, nu de seroase."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Forțează rezecția seroaselor benigne, confundându-le cu mucinoasele (stromă ovariană, 40% invazive)."
  },
  "textbookExpressions": [
   "Chistadenoamele seroase",
   "nu necesită rezecţie"
  ]
 },
 {
  "id": "pancreas-adv-026",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Neoplasmele chistice mucinoase pancreatice se caracterizează prin:",
  "options": [
   "Apar aproape la femei de vârstă mijlocie și conțin stromă ovariană",
   "La diagnostic, 40% sunt invazive; sediul predilect este corp/coadă",
   "Trebuie rezecate",
   "IPMN sunt mucinoase fără stromă ovariană",
   "Sunt leziuni ale bărbatului tânăr, seroase, fără indicație de rezecție"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Apar aproape la femei de vârstă mijlocie și conțin stromă ovariană — Corect: Terenul feminin și stroma ovariană sunt explicite.\n\nLa diagnostic, 40% sunt invazive; sediul predilect este corp/coadă — Corect: Cifra de 40% și sediul corp/coadă sunt citate.\n\nTrebuie rezecate — Corect: Indicația de rezecție este enunțată.\n\nIPMN sunt mucinoase fără stromă ovariană — Corect: IPMN fără stromă ovariană este definit.\n\nSunt leziuni ale bărbatului tânăr, seroase, fără indicație de rezecție — Incorect: Profilul descris este al chistadenomului seros, nu al mucinoasei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 274, Neoplasme mucinoase și IPMN (pagini PDF: 185).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    274
   ],
   "pdfPages": [
    185
   ],
   "section": "Neoplasme mucinoase și IPMN"
  },
  "learningObjective": "Contrastul mucinoasă (femei, stromă ovariană, 40% invazive, rezecție) versus IPMN (fără stromă ovariană).",
  "optionRationales": [
   "Terenul feminin și stroma ovariană sunt explicite.",
   "Cifra de 40% și sediul corp/coadă sunt citate.",
   "Indicația de rezecție este enunțată.",
   "IPMN fără stromă ovariană este definit.",
   "Profilul descris este al chistadenomului seros, nu al mucinoasei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie mucinoaselor profilul seros (bărbat, fără rezecție), inversând indicația oncologică."
  },
  "textbookExpressions": [
   "stromă ovariană",
   "40% dintre tumori"
  ]
 },
 {
  "id": "pancreas-adv-027",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "IPMN-urile care pot fi urmărite prin CT seriat, potrivit textului, sunt cele:",
  "options": [
   "Asimptomatice, cu diametru care nu depășește 3 cm, fără noduli și fără citologie îngrijorătoare",
   "Simptomatice, >3 cm, cu noduli, care se rezecează de principiu prin observație",
   "Orice IPMN, inclusiv cele cu noduli, observația înlocuind rezecția",
   "Doar cele seroase cu stromă ovariană",
   "Cele de 5 cm cu citologie malignă, observația fiind superioară rezecției"
  ],
  "correct": [
   0
  ],
  "explanation": "Asimptomatice, cu diametru care nu depășește 3 cm, fără noduli și fără citologie îngrijorătoare — Corect: Cele trei condiții de urmărire sunt explicite.\n\nSimptomatice, >3 cm, cu noduli, care se rezecează de principiu prin observație — Incorect: Simptomatic, >3 cm sau noduli sunt criterii împotriva observației simple.\n\nOrice IPMN, inclusiv cele cu noduli, observația înlocuind rezecția — Incorect: Nodulii sunt aspecte îngrijorătoare, nu de observație.\n\nDoar cele seroase cu stromă ovariană — Incorect: Stroma ovariană ține de mucinoase, nu de IPMN.\n\nCele de 5 cm cu citologie malignă, observația fiind superioară rezecției — Incorect: Citologia malignă și 5 cm cer tratament, nu observație.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 275, IPMN — Criterii de urmărire (pagini PDF: 186).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    275
   ],
   "pdfPages": [
    186
   ],
   "section": "IPMN — Criterii de urmărire"
  },
  "learningObjective": "Aplicarea triadei de observație: asimptomatic, ≤3 cm, fără noduli/citologie suspectă.",
  "optionRationales": [
   "Cele trei condiții de urmărire sunt explicite.",
   "Simptomatic, >3 cm sau noduli sunt criterii împotriva observației simple.",
   "Nodulii sunt aspecte îngrijorătoare, nu de observație.",
   "Stroma ovariană ține de mucinoase, nu de IPMN.",
   "Citologia malignă și 5 cm cer tratament, nu observație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune sub observație tocmai IPMN-urile >3 cm cu noduli, inversând criteriile din ultima pagină."
  },
  "textbookExpressions": [
   ">3 cm",
   "noduli"
  ]
 },
 {
  "id": "pancreas-adv-028",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Arcadele pancreaticoduodenale se formează prin anastomoza dintre:",
  "options": [
   "Ramurile anterioară și posterioară ale arterei pancreaticoduodenale superioare (din AGD/celiac) cu omonimele inferioare (din AMS)",
   "Artera gastrică stângă cu artera colică stângă, fără participarea AMS",
   "Doar artera splenică cu artera hepatică proprie, în hilul splenic",
   "Artera mezenterică inferioară cu artera rușinoasă internă",
   "Artera renală stângă cu artera gastroepiploică, retroduodenal"
  ],
  "correct": [
   0
  ],
  "explanation": "Ramurile anterioară și posterioară ale arterei pancreaticoduodenale superioare (din AGD/celiac) cu omonimele inferioare (din AMS) — Corect: Anastomoza superioară (AGD) – inferioară (AMS) este explicită.\n\nArtera gastrică stângă cu artera colică stângă, fără participarea AMS — Incorect: Gastrica stângă și colica stângă nu formează aceste arcade.\n\nDoar artera splenică cu artera hepatică proprie, în hilul splenic — Incorect: Splenica irigă corp/coadă, nu arcadele cefalice.\n\nArtera mezenterică inferioară cu artera rușinoasă internă — Incorect: AMI nu participă la arcadele pancreaticoduodenale.\n\nArtera renală stângă cu artera gastroepiploică, retroduodenal — Incorect: Renala nu face parte din rețeaua descrisă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 258, 260, Arcade pancreaticoduodenale (pagini PDF: 169, 171).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    258,
    260
   ],
   "pdfPages": [
    169,
    171
   ],
   "section": "Arcade pancreaticoduodenale"
  },
  "learningObjective": "Recunoașterea punții celiac–AMS prin arcadele pancreaticoduodenale superioare (AGD) și inferioare (AMS).",
  "optionRationales": [
   "Anastomoza superioară (AGD) – inferioară (AMS) este explicită.",
   "Gastrica stângă și colica stângă nu formează aceste arcade.",
   "Splenica irigă corp/coadă, nu arcadele cefalice.",
   "AMI nu participă la arcadele pancreaticoduodenale.",
   "Renala nu face parte din rețeaua descrisă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește puntea celiac–AMS cu pediculi din alte etaje (AMI, renal, gastric)."
  },
  "textbookExpressions": [
   "pancreaticoduodenale",
   "artera mezenterică superioară"
  ]
 },
 {
  "id": "pancreas-adv-029",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Tratamentul durerii din pancreatita cronică poate include neuroliza plexului celiac, care:",
  "options": [
   "Blochează aferențele cu alcool sau alte substanțe neurolitice",
   "Se poate face percutan ghidat CT, intraoperator sau endoscopic cu ultrasunete",
   "Înlocuiește substituția enzimatică și abstinența, fiind suficientă ca unică terapie a steatoreei",
   "Se face doar prin toracotomie stângă, celelalte căi fiind abandonate",
   "Are ca țintă steatoreea, nu durerea, și cere rezecție de plex"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Blochează aferențele cu alcool sau alte substanțe neurolitice — Corect: Alcoolul/substanțele neurolitice sunt citate.\n\nSe poate face percutan ghidat CT, intraoperator sau endoscopic cu ultrasunete — Corect: Cele trei aborduri (CT, intraop, EUS) sunt enumerate.\n\nÎnlocuiește substituția enzimatică și abstinența, fiind suficientă ca unică terapie a steatoreei — Incorect: Enzimele și abstinența rămân baza medicală; neuroliza vizează durerea, nu steatoreea.\n\nSe face doar prin toracotomie stângă, celelalte căi fiind abandonate — Incorect: Calea nu e limitată la toracotomie.\n\nAre ca țintă steatoreea, nu durerea, și cere rezecție de plex — Incorect: Ținta este durerea aferentă, nu steatoreea.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 260, Durere pancreatică — Neuroliză celiacă (pagini PDF: 171).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    260
   ],
   "pdfPages": [
    171
   ],
   "section": "Durere pancreatică — Neuroliză celiacă"
  },
  "learningObjective": "Recunoașterea celor trei căi de neuroliză și a celor două teorii ale durerii, față de persistența tratamentului medical al insuficienței.",
  "optionRationales": [
   "Alcoolul/substanțele neurolitice sunt citate.",
   "Cele trei aborduri (CT, intraop, EUS) sunt enumerate.",
   "Enzimele și abstinența rămân baza medicală; neuroliza vizează durerea, nu steatoreea.",
   "Calea nu e limitată la toracotomie.",
   "Ținta este durerea aferentă, nu steatoreea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă neuroliza în substitut al enzimelor și o limitează la toracotomie."
  },
  "textbookExpressions": [
   "plexului celiac",
   "ghidaj CT"
  ]
 },
 {
  "id": "pancreas-adv-030",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Amilaza serică în pancreatita acută:",
  "options": [
   "Crește rapid în primele 12 ore de la internare și revine de obicei la normal în 3–5 zile",
   "Nu toți pacienții cu abdomen acut și hiperamilazemie au pancreatită (ulcer perforat, ischemie intestinală etc.)",
   "Amilaza rămâne crescută luni de zile, fiind markerul de gravitate Ranson",
   "Hiperamilazemia este patognomonică, diagnosticul diferențial fiind gol",
   "Cinetica enzimatică începe după 3 săptămâni și persistă tot restul vieții"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Crește rapid în primele 12 ore de la internare și revine de obicei la normal în 3–5 zile — Corect: Cinetica 12 ore / 3–5 zile este explicită.\n\nNu toți pacienții cu abdomen acut și hiperamilazemie au pancreatită (ulcer perforat, ischemie intestinală etc.) — Corect: Avertismentul că hiperamilazemia nu egalează pancreatita este citat, cu Tabelul 17-3.\n\nAmilaza rămâne crescută luni de zile, fiind markerul de gravitate Ranson — Incorect: Amilaza nu intră în Ranson și scade în 3–5 zile.\n\nHiperamilazemia este patognomonică, diagnosticul diferențial fiind gol — Incorect: Diagnosticul diferențial este tocmai lista din tabel.\n\nCinetica enzimatică începe după 3 săptămâni și persistă tot restul vieții — Incorect: Cinetica descrisă este ore–zile, nu săptămâni–viață.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 263, Cinetică enzimatică și diagnostic diferențial (pagini PDF: 174).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    263
   ],
   "pdfPages": [
    174
   ],
   "section": "Cinetică enzimatică și diagnostic diferențial"
  },
  "learningObjective": "Aplicarea ferestrei 12 ore → 3–5 zile și a listei de hiperamilazemii non-pancreatitice.",
  "optionRationales": [
   "Cinetica 12 ore / 3–5 zile este explicită.",
   "Avertismentul că hiperamilazemia nu egalează pancreatita este citat, cu Tabelul 17-3.",
   "Amilaza nu intră în Ranson și scade în 3–5 zile.",
   "Diagnosticul diferențial este tocmai lista din tabel.",
   "Cinetica descrisă este ore–zile, nu săptămâni–viață."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă amilaza în marker Ranson persistent, contrar cineticii 3–5 zile."
  },
  "textbookExpressions": [
   "primele 12 ore",
   "3-5 zile"
  ]
 },
 {
  "id": "pancreas-adv-031",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Enucleerea insulinomului este rezonabilă când tumora este:",
  "options": [
   "Mică și la distanță de ductul pancreatic principal",
   "Mare și adiacentă ductului, caz în care se preferă totuși enucleerea, nu pancreatectomia",
   "Metastatică, enucleerea înlocuind diazoxidul",
   "Multicentrică MEN-1, fără evaluare a restului glandei",
   "Situată în ampula Vater, ca substitut al sfincterotomiei"
  ],
  "correct": [
   0
  ],
  "explanation": "Mică și la distanță de ductul pancreatic principal — Corect: Cele două condiții (mic, distant de duct) sunt explicite.\n\nMare și adiacentă ductului, caz în care se preferă totuși enucleerea, nu pancreatectomia — Incorect: Când e mare/adiacent ductului, textul indică pancreatectomie.\n\nMetastatică, enucleerea înlocuind diazoxidul — Incorect: Metastaticul se gestionează medical (diazoxid, streptozocină).\n\nMulticentrică MEN-1, fără evaluare a restului glandei — Incorect: MEN-1 cere evaluarea întregii glande, nu enucleere izolată oarbă.\n\nSituată în ampula Vater, ca substitut al sfincterotomiei — Incorect: Ampula nu este sediul tipic al insulinomului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 272, Insulinom — Enucleere versus rezecție (pagini PDF: 183).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    272
   ],
   "pdfPages": [
    183
   ],
   "section": "Insulinom — Enucleere versus rezecție"
  },
  "learningObjective": "Recunoașterea ferestrei de enucleere (mic, departe de duct) versus pancreatectomie când e adiacent ductului.",
  "optionRationales": [
   "Cele două condiții (mic, distant de duct) sunt explicite.",
   "Când e mare/adiacent ductului, textul indică pancreatectomie.",
   "Metastaticul se gestionează medical (diazoxid, streptozocină).",
   "MEN-1 cere evaluarea întregii glande, nu enucleere izolată oarbă.",
   "Ampula nu este sediul tipic al insulinomului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde enucleerea la tumorile mari, lipite de duct, exact scenariul rezecției."
  },
  "textbookExpressions": [
   "enucleate",
   "ductul pancreatic principal"
  ]
 },
 {
  "id": "pancreas-adv-032",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "La pacientul cu cancer pancreatic nerezecabil identificat preoperator, pruritul din hiperbilirubinemie se paliază prin:",
  "options": [
   "Stentare biliară endoscopică",
   "Duodenopancreatectomie paliativă de principiu",
   "Cecostomie, ca în Ogilvie",
   "Sfincterotomie internă laterală",
   "Neuroliză celiacă ca gest unic, stentul fiind inutil"
  ],
  "correct": [
   0
  ],
  "explanation": "Stentare biliară endoscopică — Corect: Stentarea endoscopică este explicită pentru prurit.\n\nDuodenopancreatectomie paliativă de principiu — Incorect: Whipple paliativ nu este gestul descris la nerezecabilul preoperator.\n\nCecostomie, ca în Ogilvie — Incorect: Cecostomia ține de Ogilvie, nu de icter.\n\nSfincterotomie internă laterală — Incorect: SIL este pentru fisură anală.\n\nNeuroliză celiacă ca gest unic, stentul fiind inutil — Incorect: Neuroliza vizează durerea posterioară, nu pruritul; stentul are rol.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 271, Paliație preoperatorie — Stent biliar (pagini PDF: 182).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    271
   ],
   "pdfPages": [
    182
   ],
   "section": "Paliație preoperatorie — Stent biliar"
  },
  "learningObjective": "Recunoașterea stentului endoscopic ca paliție a pruritului, distinct de neuroliza durerii și de Whipple-ul nerezectabil.",
  "optionRationales": [
   "Stentarea endoscopică este explicită pentru prurit.",
   "Whipple paliativ nu este gestul descris la nerezecabilul preoperator.",
   "Cecostomia ține de Ogilvie, nu de icter.",
   "SIL este pentru fisură anală.",
   "Neuroliza vizează durerea posterioară, nu pruritul; stentul are rol."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește stentul pruritului cu Whipple paliativ sau SIL, două gesturi din alte contexte."
  },
  "textbookExpressions": [
   "stentare biliară",
   "pruritului"
  ]
 },
 {
  "id": "pancreas-adv-033",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Celulele acinare lezate în pancreatita acută permit:",
  "options": [
   "Activarea enzimelor în afara canalelor și a tractului digestiv, cu distrucție pancreatică și peripancreatică",
   "Glanda poate fi tumefiată, edemațiată, hemoragică sau necrotică; chiar fără necroză imagistică există distrucție microscopică",
   "Formele variază de la autolimitate la amenințătoare de viață",
   "Enzimele rămân inactive extracanalicular, pancreatita fiind o colecistită chimică",
   "Necroza imagistică este cerută pentru diagnosticul Atlanta, edemul interstițial excluzând boala"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Activarea enzimelor în afara canalelor și a tractului digestiv, cu distrucție pancreatică și peripancreatică — Corect: Activarea extra-canal este explicită.\n\nGlanda poate fi tumefiată, edemațiată, hemoragică sau necrotică; chiar fără necroză imagistică există distrucție microscopică — Corect: Spectrul macroscopic și distrucția microscopică sunt citate.\n\nFormele variază de la autolimitate la amenințătoare de viață — Corect: Spectrul de severitate este descris.\n\nEnzimele rămân inactive extracanalicular, pancreatita fiind o colecistită chimică — Incorect: Enzimele se activează extracanalicular; nu este o colecistită.\n\nNecroza imagistică este cerută pentru diagnosticul Atlanta, edemul interstițial excluzând boala — Incorect: Atlanta nu cere necroză imagistică; edemul interstițial este o formă histologică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 262, Fiziopatologie — Activarea enzimatică (pagini PDF: 173).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    262
   ],
   "pdfPages": [
    173
   ],
   "section": "Fiziopatologie — Activarea enzimatică"
  },
  "learningObjective": "Înțelegerea autodigestiei prin activare extracanaliculară, inclusiv când CT-ul încă nu arată necroză.",
  "optionRationales": [
   "Activarea extra-canal este explicită.",
   "Spectrul macroscopic și distrucția microscopică sunt citate.",
   "Spectrul de severitate este descris.",
   "Enzimele se activează extracanalicular; nu este o colecistită.",
   "Atlanta nu cere necroză imagistică; edemul interstițial este o formă histologică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere necroza CT ca sine qua non Atlanta, ignorând edemul interstițial ca pol ușor."
  },
  "textbookExpressions": [
   "celulelor aciuare",
   "edem interstiţial"
  ]
 },
 {
  "id": "pancreas-adv-034",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Artera pancreatică dorsală are rolul de:",
  "options": [
   "A interconecta trunchiul celiac și AMS în mai multe locuri, pe lângă arcadele pancreaticoduodenale",
   "A înlocui artera mezenterică inferioară ca unică sursă a colonului stâng",
   "A drena vena portă în cava superioară",
   "A iriga doar rinichiul stâng",
   "A fi o arteră terminală, fără colaterale, a cărei ligatură infarctează tot mezenteronul"
  ],
  "correct": [
   0
  ],
  "explanation": "A interconecta trunchiul celiac și AMS în mai multe locuri, pe lângă arcadele pancreaticoduodenale — Corect: Rolul de interconectare este explicit.\n\nA înlocui artera mezenterică inferioară ca unică sursă a colonului stâng — Incorect: AMI rămâne sursa colonului stâng.\n\nA drena vena portă în cava superioară — Incorect: Drenajul port nu trece prin această arteră.\n\nA iriga doar rinichiul stâng — Incorect: Renala nu este teritoriul ei.\n\nA fi o arteră terminală, fără colaterale, a cărei ligatură infarctează tot mezenteronul — Incorect: Textul subliniază tocmai rețeaua bogată de colaterale, de aceea stenoza celiacului e adesea asimptomatică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 260, Colaterale celiac–AMS (pagini PDF: 171).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    260
   ],
   "pdfPages": [
    171
   ],
   "section": "Colaterale celiac–AMS"
  },
  "learningObjective": "Recunoașterea arterei pancreatice dorsale ca punte celiac–AMS, complementară arcadei pancreaticoduodenale.",
  "optionRationales": [
   "Rolul de interconectare este explicit.",
   "AMI rămâne sursa colonului stâng.",
   "Drenajul port nu trece prin această arteră.",
   "Renala nu este teritoriul ei.",
   "Textul subliniază tocmai rețeaua bogată de colaterale, de aceea stenoza celiacului e adesea asimptomatică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă o punte colaterală într-o arteră terminală a mezenteronului."
  },
  "textbookExpressions": [
   "Artera pancreatică dorsală",
   "trunchiul celiac"
  ]
 },
 {
  "id": "pancreas-adv-035",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Explorarea imagistică inițială a pancreatitei acute suspectate include:",
  "options": [
   "Radiografie toracică (complicații, pneumoperitoneu)",
   "Radiografie abdominală (calcificări de cronică, ocluzie)",
   "Ecografie (litiază, dilatare CBP, dimensiuni, colecții)",
   "CT-ul nu este necesar pentru diagnosticul Atlanta când criteriile clinice și enzimatice sunt îndeplinite",
   "CT-ul de urgență înlocuiește Atlanta și se cere la orice durere epigastrică cu amilază normală"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Radiografie toracică (complicații, pneumoperitoneu) — Corect: Rx toracică este primul punct.\n\nRadiografie abdominală (calcificări de cronică, ocluzie) — Corect: Rx abdominală este al doilea.\n\nEcografie (litiază, dilatare CBP, dimensiuni, colecții) — Corect: US este al treilea.\n\nCT-ul nu este necesar pentru diagnosticul Atlanta când criteriile clinice și enzimatice sunt îndeplinite — Corect: Limitarea CT când Atlanta e îndeplinită este explicită.\n\nCT-ul de urgență înlocuiește Atlanta și se cere la orice durere epigastrică cu amilază normală — Incorect: CT-ul nu înlocuiește definiția Atlanta și nu e cerut la amilază normală ca regulă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 263, Imagistică inițială (pagini PDF: 174).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    263
   ],
   "pdfPages": [
    174
   ],
   "section": "Imagistică inițială"
  },
  "learningObjective": "Ierarhia Rx torace + abdomen + US, cu CT rezervat incertitudinii, nu ca substitut al criteriilor Atlanta.",
  "optionRationales": [
   "Rx toracică este primul punct.",
   "Rx abdominală este al doilea.",
   "US este al treilea.",
   "Limitarea CT când Atlanta e îndeplinită este explicită.",
   "CT-ul nu înlocuiește definiția Atlanta și nu e cerut la amilază normală ca regulă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Forțează CT-ul de urgență ca substitut al Atlanta, inversând fraza „de cele mai multe ori nu este necesar”."
  },
  "textbookExpressions": [
   "tomografia computerizată nu",
   "ultrasonografie"
  ]
 },
 {
  "id": "pancreas-adv-036",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Când 90% din pancreasul cronic e înlocuit de cicatrice, consecințele includ:",
  "options": [
   "Malabsorbție, diabet și deficit de vitamine liposolubile, cu malnutriție",
   "Substituția orală de enzime ajută, în general, steatoreea",
   "Laboratorul tinde să fie normal, exceptând icterul dacă există obstrucție biliară",
   "Examenul clinic e sărac, în afara unui pseudochist palpabil",
   "Steatoreea se tratează prin Whipple de principiu, enzimele fiind inutile"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Malabsorbție, diabet și deficit de vitamine liposolubile, cu malnutriție — Corect: Triada malabsorbție–diabet–vitamine este explicită.\n\nSubstituția orală de enzime ajută, în general, steatoreea — Corect: Rolul enzimelor pe steatoree este citat.\n\nLaboratorul tinde să fie normal, exceptând icterul dacă există obstrucție biliară — Corect: Laboratorul „normal” cu excepția icterului obstructiv este descris.\n\nExamenul clinic e sărac, în afara unui pseudochist palpabil — Corect: Sărăcia examenului, exceptând pseudochistul, este menționată.\n\nSteatoreea se tratează prin Whipple de principiu, enzimele fiind inutile — Incorect: Tratamentul de primă linie al steatoreei este substituția, nu Whipple.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 267, Insuficiență pancreatică cronică (pagini PDF: 178).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    267
   ],
   "pdfPages": [
    178
   ],
   "section": "Insuficiență pancreatică cronică"
  },
  "learningObjective": "Aplicarea pragului de 90% pentru eșecul mixt și a substituției enzimatice pentru steatoree, față de Whipple-ul nejustificat.",
  "optionRationales": [
   "Triada malabsorbție–diabet–vitamine este explicită.",
   "Rolul enzimelor pe steatoree este citat.",
   "Laboratorul „normal” cu excepția icterului obstructiv este descris.",
   "Sărăcia examenului, exceptând pseudochistul, este menționată.",
   "Tratamentul de primă linie al steatoreei este substituția, nu Whipple."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește enzimele cu Whipple ca tratament al steatoreei, ignorând algoritmul medical."
  },
  "textbookExpressions": [
   "vitamine liposolubile",
   "enzime pancreatice"
  ]
 },
 {
  "id": "pancreas-adv-037",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Pentru boala nerezecabilă sau metastatică a insulinomului se pot folosi:",
  "options": [
   "Diazoxidul sau streptozocina",
   "Doar hemoroidectomia, simptomele fiind anorectale",
   "Protocolul Nigro (mitomicină + 5-FU + RT)",
   "Sfincterotomie internă laterală",
   "Ligatura elastică a pachetelor hemoroidale interne"
  ],
  "correct": [
   0
  ],
  "explanation": "Diazoxidul sau streptozocina — Corect: Cei doi agenți sunt citați explicit.\n\nDoar hemoroidectomia, simptomele fiind anorectale — Incorect: Hemoroidectomia nu are loc în insulinom.\n\nProtocolul Nigro (mitomicină + 5-FU + RT) — Incorect: Nigro este pentru CCS anal.\n\nSfincterotomie internă laterală — Incorect: SIL este pentru fisură.\n\nLigatura elastică a pachetelor hemoroidale interne — Incorect: Ligatura elastică este pentru hemoroizi.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 272, Insulinom metastatic — Terapie medicală (pagini PDF: 183).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    272
   ],
   "pdfPages": [
    183
   ],
   "section": "Insulinom metastatic — Terapie medicală"
  },
  "learningObjective": "Recunoașterea diazoxidului/streptozocinei ca opțiuni când rezecția nu e posibilă.",
  "optionRationales": [
   "Cei doi agenți sunt citați explicit.",
   "Hemoroidectomia nu are loc în insulinom.",
   "Nigro este pentru CCS anal.",
   "SIL este pentru fisură.",
   "Ligatura elastică este pentru hemoroizi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută terapia insulinomului metastatic pe proceduri anorectale din capitolul de colon."
  },
  "textbookExpressions": [
   "diazoxidul",
   "streptozocina"
  ]
 },
 {
  "id": "pancreas-adv-038",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Analogii de somatostatină în TPN paliative:",
  "options": [
   "Controlează simptomele la aproape 100% dintre pacienți",
   "Sunt bine tolerați și pot stabiliza evoluția pe termen scurt, dar nu prelungesc supraviețuirea",
   "Chimioterapia cu streptozocină, 5-FU și doxorubicină e salvare pentru insulinoame maligne, cu eficacitate slabă și toxicitate",
   "Înlocuiesc rezecția curativă a tumorilor mici, rezecabile",
   "Prelungesc supraviețuirea cu 5 ani la toți pacienții, fără toxicitate"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Controlează simptomele la aproape 100% dintre pacienți — Corect: Cifra de aproape 100% este explicită.\n\nSunt bine tolerați și pot stabiliza evoluția pe termen scurt, dar nu prelungesc supraviețuirea — Corect: Stabilizarea scurtă fără prelungirea supraviețuirii este citată.\n\nChimioterapia cu streptozocină, 5-FU și doxorubicină e salvare pentru insulinoame maligne, cu eficacitate slabă și toxicitate — Corect: Trio-ul streptozocină/5-FU/doxorubicină și limitele lui sunt descrise.\n\nÎnlocuiesc rezecția curativă a tumorilor mici, rezecabile — Incorect: Tumorile rezecabile se rezecează; analogii sunt paliție.\n\nPrelungesc supraviețuirea cu 5 ani la toți pacienții, fără toxicitate — Incorect: Textul neagă prelungirea supraviețuirii.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 274, TPN — Analogi de somatostatină (pagini PDF: 185).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    274
   ],
   "pdfPages": [
    185
   ],
   "section": "TPN — Analogi de somatostatină"
  },
  "learningObjective": "Separarea controlului simptomatic (~100%) de absența câștigului de supraviețuire, plus limita chimio de salvare.",
  "optionRationales": [
   "Cifra de aproape 100% este explicită.",
   "Stabilizarea scurtă fără prelungirea supraviețuirii este citată.",
   "Trio-ul streptozocină/5-FU/doxorubicină și limitele lui sunt descrise.",
   "Tumorile rezecabile se rezecează; analogii sunt paliție.",
   "Textul neagă prelungirea supraviețuirii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă analogii într-un substitut curativ cu câștig de 5 ani, contrar frazei „nu prelungesc supraviețuirea”."
  },
  "textbookExpressions": [
   "aproape 100%",
   "Analogii de somatostatină"
  ]
 },
 {
  "id": "pancreas-adv-039",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Necroza pancreatică pe CT se recunoaște prin:",
  "options": [
   "Țesut pancreatic care nu captează contrastul iv",
   "Diagnosticul radiologic de necroză nu este, prin el însuși, indicație operatorie; majoritatea se recuperează fără operație",
   "Aerul în bursă omentală sau retroperitoneu, la un febril cu organe în eșec, sugerează infecție",
   "Puncția ghidată CT, cu Gram și culturi (inclusiv fungi), e utilă dacă suspiciunea de infecție e mare și aerul lipsește",
   "Orice necroză sterilă vizibilă în ziua 1 impune necrectomie deschisă imediată"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Țesut pancreatic care nu captează contrastul iv — Corect: Absența captării este explicită.\n\nDiagnosticul radiologic de necroză nu este, prin el însuși, indicație operatorie; majoritatea se recuperează fără operație — Corect: Fraza că necroza imagistică nu egalează operația este citată.\n\nAerul în bursă omentală sau retroperitoneu, la un febril cu organe în eșec, sugerează infecție — Corect: Aerul retroperitoneal/în bursă ca semn de infecție este descris (pagina 266).\n\nPuncția ghidată CT, cu Gram și culturi (inclusiv fungi), e utilă dacă suspiciunea de infecție e mare și aerul lipsește — Corect: Puncția când aerul lipsește este menționată.\n\nOrice necroză sterilă vizibilă în ziua 1 impune necrectomie deschisă imediată — Incorect: Necrectomia precoce în necroza sterilă este evitată; deschisul e rezervat eșecului minim-invaziv la critici.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 263, 266, Necroză pe CT versus indicație chirurgicală (pagini PDF: 174, 177).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    263,
    266
   ],
   "pdfPages": [
    174,
    177
   ],
   "section": "Necroză pe CT versus indicație chirurgicală"
  },
  "learningObjective": "Disocierea imaginii de necroză (fără captare) de indicația operatorie și recunoașterea aerului ca marker de infecție.",
  "optionRationales": [
   "Absența captării este explicită.",
   "Fraza că necroza imagistică nu egalează operația este citată.",
   "Aerul retroperitoneal/în bursă ca semn de infecție este descris (pagina 266).",
   "Puncția când aerul lipsește este menționată.",
   "Necrectomia precoce în necroza sterilă este evitată; deschisul e rezervat eșecului minim-invaziv la critici."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Forțează necrectomia deschisă în ziua 1 pe necroza sterilă, contrar regulii de așteptare și de escladație minim-invazivă."
  },
  "textbookExpressions": [
   "nu captează",
   "aerului"
  ]
 },
 {
  "id": "pancreas-adv-040",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Fuziunea mugurilor pancreatici, după rotația orară a celui ventral, se caracterizează prin:",
  "options": [
   "Până în săptămâna a 6-a de gestație, mugurii ventral și dorsal sunt alipiți unul de celălalt",
   "În timpul săptămânii a 8-a, parenchimul și ductele lor fuzionează",
   "Fuziunea se produce în ziua 30, înaintea oricărei rotații",
   "Mugurele ventral rămâne separat de cel dorsal, fără alipire",
   "Santorini se formează doar în săptămâna a 20-a, independent de muguri"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Până în săptămâna a 6-a de gestație, mugurii ventral și dorsal sunt alipiți unul de celălalt — Corect: Alipirea până în săptămâna 6 este explicită.\n\nÎn timpul săptămânii a 8-a, parenchimul și ductele lor fuzionează — Corect: Fuziunea parenchimului și ductelor în săptămâna 8 este citată.\n\nFuziunea se produce în ziua 30, înaintea oricărei rotații — Incorect: Ziua 30 este formarea mugurilor, nu fuziunea.\n\nMugurele ventral rămâne separat de cel dorsal, fără alipire — Incorect: Textul descrie alipirea, nu absența ei.\n\nSantorini se formează doar în săptămâna a 20-a, independent de muguri — Incorect: Santorini este restul distal al ductului dorsal după fuziune, nu un eveniment din săptămâna 20.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 257, Embriologie — Calendarul fuziunii (pagini PDF: 168).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    257
   ],
   "pdfPages": [
    168
   ],
   "section": "Embriologie — Calendarul fuziunii"
  },
  "learningObjective": "Reținerea etapelor săptămâna 6 (alipire) și săptămâna 8 (fuziune parenchim/ducte), distinct de ziua 30 a formării mugurilor.",
  "optionRationales": [
   "Alipirea până în săptămâna 6 este explicită.",
   "Fuziunea parenchimului și ductelor în săptămâna 8 este citată.",
   "Ziua 30 este formarea mugurilor, nu fuziunea.",
   "Textul descrie alipirea, nu absența ei.",
   "Santorini este restul distal al ductului dorsal după fuziune, nu un eveniment din săptămâna 20."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează ziua 30 cu săptămânile 6–8, trei praguri embriologice din același paragraf."
  },
  "textbookExpressions": [
   "săptămâna a 6-a",
   "celei de-a 8-a săptămâni"
  ]
 },
 {
  "id": "pancreas-adv-041",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Variațiile arteriale relevante pentru chirurgia pancreatică includ:",
  "options": [
   "La aproximativ 20% din populație lipsește artera hepatică dreaptă clasică, lobul drept fiind vascularizat din AMS (hepatică dreaptă din AMS)",
   "La 20% din populație, artera hepatică stângă își are originea în artera gastrică stângă",
   "AMS se situează imediat posterior de pancreas și dă ca primă ramură artera pancreaticoduodenală inferioară",
   "Artera hepatică dreaptă din AMS este rară sub 1% și poate fi ligaturată fără risc în Whipple",
   "AMS naște anterior de pancreas, prima ramură fiind artera gastrică stângă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "La aproximativ 20% din populație lipsește artera hepatică dreaptă clasică, lobul drept fiind vascularizat din AMS (hepatică dreaptă din AMS) — Corect: Prevalența de aproximativ 20% a hepaticei drepte din AMS este explicită.\n\nLa 20% din populație, artera hepatică stângă își are originea în artera gastrică stângă — Corect: Originea hepaticei stângi din gastrica stângă la 20% este citată.\n\nAMS se situează imediat posterior de pancreas și dă ca primă ramură artera pancreaticoduodenală inferioară — Corect: Poziția posterioară a AMS și prima ramură (pancreaticoduodenală inferioară) sunt descrise.\n\nArtera hepatică dreaptă din AMS este rară sub 1% și poate fi ligaturată fără risc în Whipple — Incorect: Ligatura neidentificată a hepaticei drepte din AMS este tocmai riscul duodenopancreatectomiei.\n\nAMS naște anterior de pancreas, prima ramură fiind artera gastrică stângă — Incorect: AMS naște din peretele anterior al aortei, posterior de pancreas; gastrica stângă ține de trunchiul celiac.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 258, Anatomie vasculară — Variații hepatice și AMS (pagini PDF: 169).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    258
   ],
   "pdfPages": [
    169
   ],
   "section": "Anatomie vasculară — Variații hepatice și AMS"
  },
  "learningObjective": "Aplicarea celor două prevalențe de 20% (hepatică dreaptă înlocuită și hepatică stângă din gastrică stângă) și a poziției AMS.",
  "optionRationales": [
   "Prevalența de aproximativ 20% a hepaticei drepte din AMS este explicită.",
   "Originea hepaticei stângi din gastrica stângă la 20% este citată.",
   "Poziția posterioară a AMS și prima ramură (pancreaticoduodenală inferioară) sunt descrise.",
   "Ligatura neidentificată a hepaticei drepte din AMS este tocmai riscul duodenopancreatectomiei.",
   "AMS naște din peretele anterior al aortei, posterior de pancreas; gastrica stângă ține de trunchiul celiac."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Autorizează ligatura hepaticei drepte din AMS, exact capcana de 20% din Whipple."
  },
  "textbookExpressions": [
   "aproximativ 20% din populaţie",
   "20% din populaţie"
  ]
 },
 {
  "id": "pancreas-adv-042",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Secreția exocrină, dincolo de volumul zilnic, se caracterizează prin:",
  "options": [
   "Când conținutul gastric cu pH <3 pătrunde în duoden, mucoasa duodenală eliberează secretină, care stimulează lichid bogat în bicarbonat (pH >8)",
   "Concentrația de clor variază invers proporțional cu secreția de bicarbonat",
   "Aproximativ 20 de enzime sunt secretate ca precursori inactivi; amilaza este singura enzimă secretată în forma sa activă, funcționând optim la pH 7",
   "CCK este eliberată de peptide, aminoacizi și acizi grași liberi și stimulează contracția veziculei biliare",
   "Amilaza se secretă doar ca tripsinogen, inactivă la orice pH"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Când conținutul gastric cu pH <3 pătrunde în duoden, mucoasa duodenală eliberează secretină, care stimulează lichid bogat în bicarbonat (pH >8) — Corect: Lanțul pH <3 → secretină → bicarbonat pH >8 este explicit.\n\nConcentrația de clor variază invers proporțional cu secreția de bicarbonat — Corect: Relația inversă Cl/bicarbonat este citată.\n\nAproximativ 20 de enzime sunt secretate ca precursori inactivi; amilaza este singura enzimă secretată în forma sa activă, funcționând optim la pH 7 — Corect: Cele 20 de precursori și amilaza activă la pH 7 sunt descrise.\n\nCCK este eliberată de peptide, aminoacizi și acizi grași liberi și stimulează contracția veziculei biliare — Corect: Stimulii CCK și contracția veziculei sunt menționate.\n\nAmilaza se secretă doar ca tripsinogen, inactivă la orice pH — Incorect: Tripsinogenul este precursorul tripsinei; amilaza este forma activă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 260, Fiziologie exocrină — Secretină, bicarbonat, amilază (pagini PDF: 171).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    260
   ],
   "pdfPages": [
    171
   ],
   "section": "Fiziologie exocrină — Secretină, bicarbonat, amilază"
  },
  "learningObjective": "Legarea pragului pH <3 de secretină și a pH >8 al sucului, plus caracterul unic al amilazei active.",
  "optionRationales": [
   "Lanțul pH <3 → secretină → bicarbonat pH >8 este explicit.",
   "Relația inversă Cl/bicarbonat este citată.",
   "Cele 20 de precursori și amilaza activă la pH 7 sunt descrise.",
   "Stimulii CCK și contracția veziculei sunt menționate.",
   "Tripsinogenul este precursorul tripsinei; amilaza este forma activă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă amilaza în precursor inactiv, inversând excepția explicită din text."
  },
  "textbookExpressions": [
   "pH <3",
   "pH >8"
  ]
 },
 {
  "id": "pancreas-adv-043",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Insulele Langerhans sunt mai abundente la nivelul:",
  "options": [
   "Cozii pancreatice",
   "Capului, uncinatul neconținând insule",
   "Istmului, de-a lungul VMS",
   "Duodenului, ca resturi ectopice de insule",
   "Splinei, prin contiguitate cu coada"
  ],
  "correct": [
   0
  ],
  "explanation": "Cozii pancreatice — Corect: Textul precizează că insulele sunt mai abundente la nivelul cozii.\n\nCapului, uncinatul neconținând insule — Incorect: Capul conține insule, dar nu este sediul de maximă abundență.\n\nIstmului, de-a lungul VMS — Incorect: Istmului nu i se atribuie această predilecție.\n\nDuodenului, ca resturi ectopice de insule — Incorect: Insulele sunt pancreatice, nu duodenale „obligatorii”.\n\nSplinei, prin contiguitate cu coada — Incorect: Splina nu este depozitul de insule.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 261, Fiziologie endocrină — Distribuția insulelor (pagini PDF: 172).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    261
   ],
   "pdfPages": [
    172
   ],
   "section": "Fiziologie endocrină — Distribuția insulelor"
  },
  "learningObjective": "Reținerea predilecției insulelor pentru coadă, relevantă pentru rezecțiile distale și insulinom.",
  "optionRationales": [
   "Textul precizează că insulele sunt mai abundente la nivelul cozii.",
   "Capul conține insule, dar nu este sediul de maximă abundență.",
   "Istmului nu i se atribuie această predilecție.",
   "Insulele sunt pancreatice, nu duodenale „obligatorii”.",
   "Splina nu este depozitul de insule."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută abundența insulelor pe cap sau duoden, contrar frazei despre coadă."
  },
  "textbookExpressions": [
   "cozii pancreatice",
   "Insulele Langerhans"
  ]
 },
 {
  "id": "pancreas-adv-044",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "În etiologia pancreatitei acute, dincolo de ponderea alcool–litiază, sunt adevărate următoarele:",
  "options": [
   "La pancreatita postetanolică, primul episod este precedat de 6–8 ani de consum excesiv",
   "Se estimează că 60% dintre pacienții cu pancreatită acută care nu consumă alcool prezintă calculi biliari",
   "Aproximativ 8–10% sunt idiopatice, adesea legate de sludge, pancreas divisum sau pancreatită autoimună IgG4",
   "Pancreatita post-ERCP poate apărea la 1–5% dintre pacienți",
   "Formele fără etiologie reprezintă 40–50% și nu au legătură cu microlitiaza"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "La pancreatita postetanolică, primul episod este precedat de 6–8 ani de consum excesiv — Corect: Fereastra 6–8 ani este explicită.\n\nSe estimează că 60% dintre pacienții cu pancreatită acută care nu consumă alcool prezintă calculi biliari — Corect: Cifra de 60% la ne-alcoolici este citată.\n\nAproximativ 8–10% sunt idiopatice, adesea legate de sludge, pancreas divisum sau pancreatită autoimună IgG4 — Corect: 8–10% idiopatic cu sludge/divisum/IgG4 este descris.\n\nPancreatita post-ERCP poate apărea la 1–5% dintre pacienți — Corect: Intervalul 1–5% post-ERCP este menționat.\n\nFormele fără etiologie reprezintă 40–50% și nu au legătură cu microlitiaza — Incorect: Idiopaticul este 8–10%, nu 40–50%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 262, Etiologie — Alcool, litiază, idiopatic (pagini PDF: 173).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    262
   ],
   "pdfPages": [
    173
   ],
   "section": "Etiologie — Alcool, litiază, idiopatic"
  },
  "learningObjective": "Aplicarea ferestrei 6–8 ani, a ponderii de 60% litiază la ne-alcoolici și a intervalului 8–10% idiopatic.",
  "optionRationales": [
   "Fereastra 6–8 ani este explicită.",
   "Cifra de 60% la ne-alcoolici este citată.",
   "8–10% idiopatic cu sludge/divisum/IgG4 este descris.",
   "Intervalul 1–5% post-ERCP este menționat.",
   "Idiopaticul este 8–10%, nu 40–50%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă ponderea idiopaticului și rupe legătura cu sludge-ul, pe trei praguri din același paragraf."
  },
  "textbookExpressions": [
   "6-8 ani",
   "8-10% dintre cazurile"
  ]
 },
 {
  "id": "pancreas-adv-045",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Tabloul clinic și dinamica amilazei în pancreatita acută includ:",
  "options": [
   "Durerea epigastrică constantă, necolicativă, iradiază posterior și poate fi atenuată de poziția șezândă sau în ortostatism",
   "Amilaza serică crește rapid în primele 12 ore de la internare și revine de obicei la normal în 3–5 zile",
   "Durerea colicativă în hipocondrul drept, agravată de clinostatism, este tipică",
   "Amilaza rămâne crescută luni de zile, independent de evoluție",
   "Poziția șezândă agravează durerea, spre deosebire de colecistită"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Durerea epigastrică constantă, necolicativă, iradiază posterior și poate fi atenuată de poziția șezândă sau în ortostatism — Corect: Caracterul necolicativ, iradierea posterioară și atenuarea în șezut/ortostatism sunt explicite.\n\nAmilaza serică crește rapid în primele 12 ore de la internare și revine de obicei la normal în 3–5 zile — Corect: Cinetica 12 ore / 3–5 zile este citată.\n\nDurerea colicativă în hipocondrul drept, agravată de clinostatism, este tipică — Incorect: Colica de hipocondru drept descrie altă patologie biliară.\n\nAmilaza rămâne crescută luni de zile, independent de evoluție — Incorect: Normalizarea în 3–5 zile este regula citată, nu persistența lunară.\n\nPoziția șezândă agravează durerea, spre deosebire de colecistită — Incorect: Textul atribuie atenuarea, nu agravarea, poziției șezânde.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 263, Tablou clinic — Durere și amilază (pagini PDF: 174).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    263
   ],
   "pdfPages": [
    174
   ],
   "section": "Tablou clinic — Durere și amilază"
  },
  "learningObjective": "Recunoașterea ameliorării în șezut/ortostatism și a ferestrei 12 ore / 3–5 zile a amilazei.",
  "optionRationales": [
   "Caracterul necolicativ, iradierea posterioară și atenuarea în șezut/ortostatism sunt explicite.",
   "Cinetica 12 ore / 3–5 zile este citată.",
   "Colica de hipocondru drept descrie altă patologie biliară.",
   "Normalizarea în 3–5 zile este regula citată, nu persistența lunară.",
   "Textul atribuie atenuarea, nu agravarea, poziției șezânde."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează efectul poziției șezânde și prelungește amilaza la luni, două capcane de interpretare."
  },
  "textbookExpressions": [
   "primele 12 ore",
   "3-5 zile"
  ]
 },
 {
  "id": "pancreas-adv-046",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Clasificarea Atlanta a severității pancreatitei acute distinge:",
  "options": [
   "Forma ușoară: fără complicații locale sau sistemice",
   "Forma moderată: complicații locale care se remit și/sau insuficiență de organ tranzitorie sub 48 de ore",
   "Forma severă: fără necroză, cu organe intacte",
   "Pseudochistul acut apare din prima zi, fără perete de granulație",
   "Colecțiile fluide acute au perete fibros matur și puroi"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Forma ușoară: fără complicații locale sau sistemice — Corect: Definiția formei ușoare este din tabel.\n\nForma moderată: complicații locale care se remit și/sau insuficiență de organ tranzitorie sub 48 de ore — Corect: Complicațiile locale remisive și insuficiența <48 h definesc forma moderată.\n\nForma severă: fără necroză, cu organe intacte — Incorect: Forma severă include necroză, necroză infectată, pseudochisturi și MSOF persistentă.\n\nPseudochistul acut apare din prima zi, fără perete de granulație — Incorect: Pseudochistul acut apare la cel puțin 4 săptămâni, cu perete de granulație.\n\nColecțiile fluide acute au perete fibros matur și puroi — Incorect: Colecțiile acute sunt imprecis delimitate, fără perete de granulație, de obicei sterile.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 262, Clasificarea Atlanta — Grade de severitate (pagini PDF: 173).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    262
   ],
   "pdfPages": [
    173
   ],
   "section": "Clasificarea Atlanta — Grade de severitate"
  },
  "learningObjective": "Separarea formei ușoare (fără complicații) de cea moderată (organ <48 h) față de confuzia cu necroza/pseudochistul.",
  "optionRationales": [
   "Definiția formei ușoare este din tabel.",
   "Complicațiile locale remisive și insuficiența <48 h definesc forma moderată.",
   "Forma severă include necroză, necroză infectată, pseudochisturi și MSOF persistentă.",
   "Pseudochistul acut apare la cel puțin 4 săptămâni, cu perete de granulație.",
   "Colecțiile acute sunt imprecis delimitate, fără perete de granulație, de obicei sterile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută necroza în forma ușoară și pune peretele de granulație pe colecția acută din ziua 1."
  },
  "textbookExpressions": [
   "sub 48 h",
   "Fără complicaţii locale"
  ]
 },
 {
  "id": "pancreas-adv-047",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Conform Tabelului 17-4, criteriile Ranson deosebesc etiologia non-biliară de cea biliară prin:",
  "options": [
   "Vârsta la internare: >55 ani (non-biliar) versus >70 ani (biliar)",
   "Leucocitele: >16.000 versus >18.000",
   "Sechestrarea de fluide în 48 de ore: >6 L versus >4 L",
   "Creșterea BUN: >5 mg/dl versus >2 mg/dl",
   "Vârsta non-biliară este >70, iar sechestrarea non-biliară >4 L, inverse față de tabel"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Vârsta la internare: >55 ani (non-biliar) versus >70 ani (biliar) — Corect: Perechea de vârstă este din tabel.\n\nLeucocitele: >16.000 versus >18.000 — Corect: Perechea de leucocite este citată.\n\nSechestrarea de fluide în 48 de ore: >6 L versus >4 L — Corect: Perechea de sechestrare 6 L versus 4 L este enumerată.\n\nCreșterea BUN: >5 mg/dl versus >2 mg/dl — Corect: Perechea BUN 5 versus 2 mg/dl este din tabel.\n\nVârsta non-biliară este >70, iar sechestrarea non-biliară >4 L, inverse față de tabel — Incorect: Direcțiile sunt inverse față de aceste afirmații.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 264, Criteriile Ranson — Praguri biliar versus non-biliar (pagini PDF: 175).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    264
   ],
   "pdfPages": [
    175
   ],
   "section": "Criteriile Ranson — Praguri biliar versus non-biliar"
  },
  "learningObjective": "Maparea pragurilor pereche (55/70, 16/18, 6 L/4 L, 5/2 mg/dl) care se inversează ușor între etiologii.",
  "optionRationales": [
   "Perechea de vârstă este din tabel.",
   "Perechea de leucocite este citată.",
   "Perechea de sechestrare 6 L versus 4 L este enumerată.",
   "Perechea BUN 5 versus 2 mg/dl este din tabel.",
   "Direcțiile sunt inverse față de aceste afirmații."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Capcană de tabel: patru perechi numerice ușor de oglindit între litiază și alcool."
  },
  "textbookExpressions": [
   ">55",
   ">70"
  ]
 },
 {
  "id": "pancreas-adv-048",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Tratamentul medical suportiv al pancreatitei acute include:",
  "options": [
   "Repaus alimentar până dispar durerea și sensibilitatea, iar amilazele și leucocitele revin la normal",
   "Toate încercările medicamentoase de reducere a secreției (anticolinergice, analogi de somatostatină, aprotinină, antiacide) nu au demonstrat beneficiu semnificativ",
   "Aspirația nazogastrică este indicată doar la grețuri, vărsături sau distensie, pentru a reduce riscul de aspirație",
   "Analogii de somatostatină scurtează necroza și înlocuiesc NPO",
   "Sonda nazogastrică se montează de rutină la forma ușoară, indiferent de grețuri"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Repaus alimentar până dispar durerea și sensibilitatea, iar amilazele și leucocitele revin la normal — Corect: Condițiile de oprire a NPO sunt explicite.\n\nToate încercările medicamentoase de reducere a secreției (anticolinergice, analogi de somatostatină, aprotinină, antiacide) nu au demonstrat beneficiu semnificativ — Corect: Lista de clase fără beneficiu este enumerată.\n\nAspirația nazogastrică este indicată doar la grețuri, vărsături sau distensie, pentru a reduce riscul de aspirație — Corect: Indicația selectivă a SNG este citată.\n\nAnalogii de somatostatină scurtează necroza și înlocuiesc NPO — Incorect: Analogii de somatostatină figurează tocmai în lista fără beneficiu.\n\nSonda nazogastrică se montează de rutină la forma ușoară, indiferent de grețuri — Incorect: SNG nu este cerută de rutină în forma ușoară fără grețuri.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 264, Tratament medical — NPO, medicamente, SNG (pagini PDF: 175).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    264
   ],
   "pdfPages": [
    175
   ],
   "section": "Tratament medical — NPO, medicamente, SNG"
  },
  "learningObjective": "Aplicarea criteriilor de reluare a alimentației și a lipsei de beneficiu a supresiei farmacologice, plus indicația selectivă a SNG.",
  "optionRationales": [
   "Condițiile de oprire a NPO sunt explicite.",
   "Lista de clase fără beneficiu este enumerată.",
   "Indicația selectivă a SNG este citată.",
   "Analogii de somatostatină figurează tocmai în lista fără beneficiu.",
   "SNG nu este cerută de rutină în forma ușoară fără grețuri."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie somatostatinei un efect pe necroză și face SNG-ul rutină, contrar celor două propoziții din text."
  },
  "textbookExpressions": [
   "revin la normal",
   "nu au demonstrat niciun be"
  ]
 },
 {
  "id": "pancreas-adv-049",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Suportul nutrițional în pancreatita acută severă se caracterizează prin:",
  "options": [
   "Nutriția enterală precoce este preferabilă celei parenterale și nu există diferențe între alimentația nazogastrică și cea nazojejunală privind evoluția",
   "Nutriția parenterală totală este superioară enteralei și trebuie începută înaintea oricărei încercări enterale",
   "Alimentația nazojejunală este inferioară celei nazogastrice, cu mai multe recurențe",
   "Enterala este contraindicată până la normalizarea amilazei timp de 3 săptămâni",
   "Doar alimentația orală imediată, fără sondă, este acceptată"
  ],
  "correct": [
   0
  ],
  "explanation": "Nutriția enterală precoce este preferabilă celei parenterale și nu există diferențe între alimentația nazogastrică și cea nazojejunală privind evoluția — Corect: Preferința enteralei și absența diferenței NG/NJ sunt explicite.\n\nNutriția parenterală totală este superioară enteralei și trebuie începută înaintea oricărei încercări enterale — Incorect: NPT este rezervată tractului nefuncțional, nu superioară enteralei.\n\nAlimentația nazojejunală este inferioară celei nazogastrice, cu mai multe recurențe — Incorect: Textul neagă diferența de evoluție între NG și NJ.\n\nEnterala este contraindicată până la normalizarea amilazei timp de 3 săptămâni — Incorect: Enterala precoce este recomandată, nu amânată 3 săptămâni.\n\nDoar alimentația orală imediată, fără sondă, este acceptată — Incorect: Sondele enterale sunt acceptate; oralul imediat nu este regula în forma severă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 265, Nutriție — Enteral versus parenteral (pagini PDF: 176).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    265
   ],
   "pdfPages": [
    176
   ],
   "section": "Nutriție — Enteral versus parenteral"
  },
  "learningObjective": "Recunoașterea priorității enteralei precoce și a echivalenței NG versus NJ.",
  "optionRationales": [
   "Preferința enteralei și absența diferenței NG/NJ sunt explicite.",
   "NPT este rezervată tractului nefuncțional, nu superioară enteralei.",
   "Textul neagă diferența de evoluție între NG și NJ.",
   "Enterala precoce este recomandată, nu amânată 3 săptămâni.",
   "Sondele enterale sunt acceptate; oralul imediat nu este regula în forma severă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ierarhia enteral versus parenteral și inventează o diferență NG/NJ pe care textul o neagă."
  },
  "textbookExpressions": [
   "Nutriţia enterală precoce",
   "nazojejunală"
  ]
 },
 {
  "id": "pancreas-adv-050",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Colecistectomia și ERCP în pancreatita biliară se aleg astfel:",
  "options": [
   "În formele ușoare sau moderate, colecistectomia se face în internarea curentă după remisiune, reducând riscul unui nou episod de la circa 50% la circa 5%",
   "În formele severe, colecistectomia precoce se evită, morbiditatea fiind crescută, iar intervenția nemodificând episodul în sine",
   "ERCP cu sfincterotomie este recomandată în forma severă când se suspectează impactarea ampulară (colangită sau amilazemie persistentă)",
   "Colecistectomia precoce în forma severă vindecă pancreatita în 24 de ore",
   "ERCP de rutină la orice pancreatită ușoară, fără litiază coledociană, înlocuiește colecistectomia"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În formele ușoare sau moderate, colecistectomia se face în internarea curentă după remisiune, reducând riscul unui nou episod de la circa 50% la circa 5% — Corect: Reducerea 50%→5% și timing-ul în internarea curentă sunt explicite.\n\nÎn formele severe, colecistectomia precoce se evită, morbiditatea fiind crescută, iar intervenția nemodificând episodul în sine — Corect: Evitarea colecistectomiei precoce în forma severă este citată.\n\nERCP cu sfincterotomie este recomandată în forma severă când se suspectează impactarea ampulară (colangită sau amilazemie persistentă) — Corect: Indicația ERCP la impactare/colangită/amilazemie persistentă este descrisă.\n\nColecistectomia precoce în forma severă vindecă pancreatita în 24 de ore — Incorect: Intervenția nu modifică episodul în sine.\n\nERCP de rutină la orice pancreatită ușoară, fără litiază coledociană, înlocuiește colecistectomia — Incorect: ERCP nu înlocuiește colecistectomia de rutină în forma ușoară fără coledocolitiază.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 265, Pancreatita biliară — Timing colecistectomie/ERCP (pagini PDF: 176).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    265
   ],
   "pdfPages": [
    176
   ],
   "section": "Pancreatita biliară — Timing colecistectomie/ERCP"
  },
  "learningObjective": "Contrastul internare-curentă (50%→5%) versus amânarea în forma severă și a ERCP rezervat colangitei.",
  "optionRationales": [
   "Reducerea 50%→5% și timing-ul în internarea curentă sunt explicite.",
   "Evitarea colecistectomiei precoce în forma severă este citată.",
   "Indicația ERCP la impactare/colangită/amilazemie persistentă este descrisă.",
   "Intervenția nu modifică episodul în sine.",
   "ERCP nu înlocuiește colecistectomia de rutină în forma ușoară fără coledocolitiază."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Forțează colecistectomia precoce în forma severă, exact scenariul cu morbiditate crescută."
  },
  "textbookExpressions": [
   "aproximativ 50%",
   "aproximativ 5%"
  ]
 },
 {
  "id": "pancreas-adv-051",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Tromboza venei splenice și/sau porte după pancreatită acută severă se caracterizează prin:",
  "options": [
   "Poate determina hipertensiune portală stângă, cu varice gastrice mari care pot sângera",
   "Tratamentul definitiv al varicelor gastrice hemoragice din hipertensiunea portală stângă este splenectomia",
   "TIPS este gestul de elecție, splenectomia fiind evitată",
   "Varicele esofagiene, nu gastrice, definesc hipertensiunea portală stângă",
   "Tromboza portei nu poate produce ischemie mezenterică"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Poate determina hipertensiune portală stângă, cu varice gastrice mari care pot sângera — Corect: Mecanismul HTP stângă cu varice gastrice este explicit.\n\nTratamentul definitiv al varicelor gastrice hemoragice din hipertensiunea portală stângă este splenectomia — Corect: Splenectomia ca tratament definitiv este citată.\n\nTIPS este gestul de elecție, splenectomia fiind evitată — Incorect: TIPS nu este metoda descrisă aici.\n\nVaricele esofagiene, nu gastrice, definesc hipertensiunea portală stângă — Incorect: Varicele gastrice, nu esofagiene, sunt consecința citată.\n\nTromboza portei nu poate produce ischemie mezenterică — Incorect: O consecință a trombozei portei este ischemia acută mezenterică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 265, Complicații — Tromboză splenică/portă (pagini PDF: 176).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    265
   ],
   "pdfPages": [
    176
   ],
   "section": "Complicații — Tromboză splenică/portă"
  },
  "learningObjective": "Legarea trombozei splenice de hipertensiunea portală stângă și de splenectomie ca tratament al varicelor gastrice.",
  "optionRationales": [
   "Mecanismul HTP stângă cu varice gastrice este explicit.",
   "Splenectomia ca tratament definitiv este citată.",
   "TIPS nu este metoda descrisă aici.",
   "Varicele gastrice, nu esofagiene, sunt consecința citată.",
   "O consecință a trombozei portei este ischemia acută mezenterică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește splenectomia cu TIPS și mută varicele pe esofag, două vecini de hipertensiune portală."
  },
  "textbookExpressions": [
   "hipertensiunii p011ale stângi",
   "splenectomie"
  ]
 },
 {
  "id": "pancreas-adv-052",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Necroza pancreatică infectată, dincolo de ratele 20%/5%, se recunoaște și se tratează astfel:",
  "options": [
   "CT evidențiază aer retroperitoneal sau în bursa omentală; dacă aerul lipsește, puncția ghidată CT cu Gram și culturi (inclusiv fungi) poate fi utilă",
   "Procedurile endoscopice și minim invazive au scăzut morbiditatea; necrectomia deschisă se rezervă criticului la care metodele conservatoare au eșuat",
   "Infecția apare de obicei la 2–3 săptămâni de la debutul pancreatitei necrotice severe",
   "Aerul retroperitoneal exclude infecția, debridarea deschisă fiind prima intenție din ziua 1",
   "Profilaxia antibiotică modifică favorabil mortalitatea și este indicată în necroza sterilă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "CT evidențiază aer retroperitoneal sau în bursa omentală; dacă aerul lipsește, puncția ghidată CT cu Gram și culturi (inclusiv fungi) poate fi utilă — Corect: Aerul în bursa omentală/retroperitoneu și FNA sunt explicite.\n\nProcedurile endoscopice și minim invazive au scăzut morbiditatea; necrectomia deschisă se rezervă criticului la care metodele conservatoare au eșuat — Corect: Rezerva necrectomiei deschise după eșecul MIS este citată.\n\nInfecția apare de obicei la 2–3 săptămâni de la debutul pancreatitei necrotice severe — Corect: Fereastra 2–3 săptămâni este menționată.\n\nAerul retroperitoneal exclude infecția, debridarea deschisă fiind prima intenție din ziua 1 — Incorect: Aerul semnifică infecție; deschiderea din ziua 1 este descurajată.\n\nProfilaxia antibiotică modifică favorabil mortalitatea și este indicată în necroza sterilă — Incorect: Profilaxia nu este recomandată nici în necroza sterilă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 266, 265, Necroza infectată — Diagnostic și abord (pagini PDF: 177, 176).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    266,
    265
   ],
   "pdfPages": [
    177,
    176
   ],
   "section": "Necroza infectată — Diagnostic și abord"
  },
  "learningObjective": "Aplicarea semnelor de aer, a FNA și a ierarhiei MIS înaintea necrectomiei deschise.",
  "optionRationales": [
   "Aerul în bursa omentală/retroperitoneu și FNA sunt explicite.",
   "Rezerva necrectomiei deschise după eșecul MIS este citată.",
   "Fereastra 2–3 săptămâni este menționată.",
   "Aerul semnifică infecție; deschiderea din ziua 1 este descurajată.",
   "Profilaxia nu este recomandată nici în necroza sterilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează semnificația aerului și pune necrectomia deschisă în ziua 1, contrar ferestrei 2–3 săptămâni."
  },
  "textbookExpressions": [
   "bursei omentale",
   "puncţie aspirativă"
  ]
 },
 {
  "id": "pancreas-adv-053",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Indicațiile de drenaj ale pseudochistului pancreatic includ:",
  "options": [
   "Cele care persistă mai mult de 1 an sau au >5 cm au tendința să crească și să determine simptome obstructive, deci drenajul este indicat",
   "Pseudochisturile mature, în general mai vechi de 4 săptămâni, au perete gros potrivit pentru suturare",
   "Pseudochistul din prima săptămână se anastomozează de rutină, peretele fiind deja matur",
   "Drenajul extern al unui pseudochist comunicant este de elecție, fistula fiind rară",
   "Dimensiunea sub 2 cm impune drenaj intern, independent de simptome"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Cele care persistă mai mult de 1 an sau au >5 cm au tendința să crească și să determine simptome obstructive, deci drenajul este indicat — Corect: Cele două praguri (1 an, 5 cm) sunt explicite.\n\nPseudochisturile mature, în general mai vechi de 4 săptămâni, au perete gros potrivit pentru suturare — Corect: Maturarea la peste 4 săptămâni este citată.\n\nPseudochistul din prima săptămână se anastomozează de rutină, peretele fiind deja matur — Incorect: Anastomoza prematură pe perete nematur nu este descrisă.\n\nDrenajul extern al unui pseudochist comunicant este de elecție, fistula fiind rară — Incorect: Drenajul extern al comunicantului este contraindicat (fistulă cronică/infecție).\n\nDimensiunea sub 2 cm impune drenaj intern, independent de simptome — Incorect: Cele mici asimptomatice pot fi urmărite.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 266, 267, Pseudochist — Praguri 5 cm, 1 an, 4 săptămâni (pagini PDF: 177, 178).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    266,
    267
   ],
   "pdfPages": [
    177,
    178
   ],
   "section": "Pseudochist — Praguri 5 cm, 1 an, 4 săptămâni"
  },
  "learningObjective": "Reținerea pragurilor >5 cm / >1 an pentru drenaj și a maturării la >4 săptămâni pentru sutură.",
  "optionRationales": [
   "Cele două praguri (1 an, 5 cm) sunt explicite.",
   "Maturarea la peste 4 săptămâni este citată.",
   "Anastomoza prematură pe perete nematur nu este descrisă.",
   "Drenajul extern al comunicantului este contraindicat (fistulă cronică/infecție).",
   "Cele mici asimptomatice pot fi urmărite."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Forțează anastomoza în săptămâna 1 și autorizează drenajul extern al comunicantului."
  },
  "textbookExpressions": [
   ">5 cm",
   "mai vechi de 4 săptămâni"
  ]
 },
 {
  "id": "pancreas-adv-054",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Drenajul intern al pseudochistului comunicant se caracterizează prin:",
  "options": [
   "Anastomoză directă cu stomacul, duodenul sau o ansă Roux; un fragment de perete se trimite la anatomopatologie pe secțiuni înghețate, pentru a exclude un neoplasm; este funcțional în peste 90% dintre cazuri",
   "Drenajul percutan este preferat, riscul de fistulă fiind nul",
   "Secțiunile înghețate sunt inutile, peretele neputând masca un neoplasm",
   "Rata de succes este sub 10%, deci se evită",
   "Comunicarea cu ductul contraindică drenajul intern"
  ],
  "correct": [
   0
  ],
  "explanation": "Anastomoză directă cu stomacul, duodenul sau o ansă Roux; un fragment de perete se trimite la anatomopatologie pe secțiuni înghețate, pentru a exclude un neoplasm; este funcțional în peste 90% dintre cazuri — Corect: Anastomoza, fragmentul pe înghețate și >90% sunt explicite.\n\nDrenajul percutan este preferat, riscul de fistulă fiind nul — Incorect: Percutanul este pentru necomunicante; la comunicante fistulizează.\n\nSecțiunile înghețate sunt inutile, peretele neputând masca un neoplasm — Incorect: Excluderea neoplasmului este motivul secțiunilor înghețate.\n\nRata de succes este sub 10%, deci se evită — Incorect: Textul citează succes peste 90%.\n\nComunicarea cu ductul contraindică drenajul intern — Incorect: Comunicarea impune tocmai drenajul intern.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 267, Pseudochist comunicant — Drenaj intern (pagini PDF: 178).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    267
   ],
   "pdfPages": [
    178
   ],
   "section": "Pseudochist comunicant — Drenaj intern"
  },
  "learningObjective": "Aplicarea ratei >90% și a biopsiei de perete pe înghețate, față de drenajul percutan rezervat necomunicantelor.",
  "optionRationales": [
   "Anastomoza, fragmentul pe înghețate și >90% sunt explicite.",
   "Percutanul este pentru necomunicante; la comunicante fistulizează.",
   "Excluderea neoplasmului este motivul secțiunilor înghețate.",
   "Textul citează succes peste 90%.",
   "Comunicarea impune tocmai drenajul intern."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește drenajul intern cu percutanul la comunicant, exact contraindicația din frază."
  },
  "textbookExpressions": [
   "peste 90%",
   "secţiuni îngheţate"
  ]
 },
 {
  "id": "pancreas-adv-055",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Chirurgia pancreatitei cronice, după eșecul medical, include:",
  "options": [
   "Consumul de alcool este responsabil de aproximativ 70% dintre cazuri",
   "Procedurile de drenaj (pancreaticojejunostomie laterală Puestow) funcționează cel mai bine la duct >4 mm, cu ameliorarea durerii la circa 70%",
   "Pancreatectomia totală nu este indicată, din cauza disfuncției severe exo- și endocrine",
   "Puestow se rezervă ductelor nedilatate, rezecția fiind pentru ductul >4 mm",
   "Splanhnicectomia are durabilitate înaltă și înlocuiește drenajul"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Consumul de alcool este responsabil de aproximativ 70% dintre cazuri — Corect: Ponderea de circa 70% alcool este explicită.\n\nProcedurile de drenaj (pancreaticojejunostomie laterală Puestow) funcționează cel mai bine la duct >4 mm, cu ameliorarea durerii la circa 70% — Corect: Pragul >4 mm, Puestow și 70% ameliorare sunt citate.\n\nPancreatectomia totală nu este indicată, din cauza disfuncției severe exo- și endocrine — Corect: Motivul de a evita pancreatectomia totală este descris.\n\nPuestow se rezervă ductelor nedilatate, rezecția fiind pentru ductul >4 mm — Incorect: Drenajul este pentru duct dilatat; rezecția pentru duct nedilatat cu boală focală.\n\nSplanhnicectomia are durabilitate înaltă și înlocuiește drenajul — Incorect: Rezultatele splanhnicectomiei au fost dezamăgitoare, cu durabilitate scăzută.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 268, 267, Pancreatita cronică — Puestow și rezecție (pagini PDF: 179, 178).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    268,
    267
   ],
   "pdfPages": [
    179,
    178
   ],
   "section": "Pancreatita cronică — Puestow și rezecție"
  },
  "learningObjective": "Maparea pragului ductal >4 mm pe Puestow (70% ameliorare) versus rezecție pe duct nedilatat, plus interdicția pancreatectomiei totale.",
  "optionRationales": [
   "Ponderea de circa 70% alcool este explicită.",
   "Pragul >4 mm, Puestow și 70% ameliorare sunt citate.",
   "Motivul de a evita pancreatectomia totală este descris.",
   "Drenajul este pentru duct dilatat; rezecția pentru duct nedilatat cu boală focală.",
   "Rezultatele splanhnicectomiei au fost dezamăgitoare, cu durabilitate scăzută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează indicația Puestow versus rezecție pe calibrul ductal și supraevaluează neuroliza."
  },
  "textbookExpressions": [
   ">4 mm",
   "aproximativ 70%"
  ]
 },
 {
  "id": "pancreas-adv-056",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Adenocarcinomul pancreatic, ca problemă oncologică, se caracterizează prin:",
  "options": [
   "Este a patra cauză de deces prin cancer în SUA; fumatul dublează riscul",
   "Aproximativ 98% dintre pacienții diagnosticați decedează prin boală, în pofida tratamentului multimodal",
   "Două treimi dintre cazuri se dezvoltă la nivel cefalic",
   "Mutația cea mai frecventă și cea mai precoce este în oncogenele K-ras",
   "O rudă paternă cu cancer pancreatic reduce riscul sub 1%, K-ras apărând doar tardiv"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este a patra cauză de deces prin cancer în SUA; fumatul dublează riscul — Corect: Rangul 4 și fumatul sunt explicite.\n\nAproximativ 98% dintre pacienții diagnosticați decedează prin boală, în pofida tratamentului multimodal — Corect: Cifra de 98% este citată.\n\nDouă treimi dintre cazuri se dezvoltă la nivel cefalic — Corect: Cele două treimi cefalice sunt menționate.\n\nMutația cea mai frecventă și cea mai precoce este în oncogenele K-ras — Corect: K-ras ca mutație cea mai frecventă și precoce este descris.\n\nO rudă paternă cu cancer pancreatic reduce riscul sub 1%, K-ras apărând doar tardiv — Incorect: Ruda paternă asociază risc de 75%; K-ras este precoce, nu tardiv.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 268, 269, Adenocarcinom — Epidemiologie și K-ras (pagini PDF: 179, 180).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    268,
    269
   ],
   "pdfPages": [
    179,
    180
   ],
   "section": "Adenocarcinom — Epidemiologie și K-ras"
  },
  "learningObjective": "Combinarea rangului 4, a dublării prin fumat, a mortalității 98%, a predilecției cefalice și a K-ras precoce.",
  "optionRationales": [
   "Rangul 4 și fumatul sunt explicite.",
   "Cifra de 98% este citată.",
   "Cele două treimi cefalice sunt menționate.",
   "K-ras ca mutație cea mai frecventă și precoce este descris.",
   "Ruda paternă asociază risc de 75%; K-ras este precoce, nu tardiv."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează riscul familial 75% și mută K-ras în leziunile tardive, contrar tabelului genetic."
  },
  "textbookExpressions": [
   "a patra cea mai frecventă",
   "K-ras"
  ]
 },
 {
  "id": "pancreas-adv-057",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Evaluarea icterului din tumora pancreatică începe astfel:",
  "options": [
   "Creșterea bilirubinei totale și directe, a fosfatazei alcaline și a γ-GGT, cu creștere ușoară a transaminazelor, sugerează icter obstructiv",
   "Ultrasonografia este prima opțiune imagistică la pacientul icteric",
   "Pacienții cu o rudă paternă cu cancer pancreatic prezintă un risc de 75% pentru dezvoltarea afecțiunii",
   "Prima investigație este ERCP, ecografia fiind inutilă înaintea stentării",
   "Transaminazele foarte crescute, cu FA normală, definesc obstacolul extrahepatic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Creșterea bilirubinei totale și directe, a fosfatazei alcaline și a γ-GGT, cu creștere ușoară a transaminazelor, sugerează icter obstructiv — Corect: Profilul biochimic obstructiv este explicit.\n\nUltrasonografia este prima opțiune imagistică la pacientul icteric — Corect: Ecografia ca primă opțiune este citată.\n\nPacienții cu o rudă paternă cu cancer pancreatic prezintă un risc de 75% pentru dezvoltarea afecțiunii — Corect: Riscul de 75% la ruda paternă este menționat.\n\nPrima investigație este ERCP, ecografia fiind inutilă înaintea stentării — Incorect: CT este cea mai bună examinare a pancreasului după sugestia de neoplasm; ERCP nu înlocuiește US ca prim pas.\n\nTransaminazele foarte crescute, cu FA normală, definesc obstacolul extrahepatic — Incorect: Transaminazele foarte crescute orientează hepatocelular, nu obstructiv.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 269, Tablou clinic — Icter obstructiv și risc familial (pagini PDF: 180).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    269
   ],
   "pdfPages": [
    180
   ],
   "section": "Tablou clinic — Icter obstructiv și risc familial"
  },
  "learningObjective": "Recunoașterea profilului colestatic (FA/GGT) versus transaminaze ușoare și a ecografiei ca prim pas.",
  "optionRationales": [
   "Profilul biochimic obstructiv este explicit.",
   "Ecografia ca primă opțiune este citată.",
   "Riscul de 75% la ruda paternă este menționat.",
   "CT este cea mai bună examinare a pancreasului după sugestia de neoplasm; ERCP nu înlocuiește US ca prim pas.",
   "Transaminazele foarte crescute orientează hepatocelular, nu obstructiv."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune ERCP înaintea ecografiei și inversează pattern-ul enzimatic al icterului obstructiv."
  },
  "textbookExpressions": [
   "fosfatazei alcaline",
   "risc de 75%"
  ]
 },
 {
  "id": "pancreas-adv-058",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Duodenopancreatectomia cefalică (Whipple) se caracterizează tehnic prin:",
  "options": [
   "Rezecția porțiunii distale a CBP, a duodenului și a capului pancreatic; reconstrucția include coledocojejunostomie, pancreaticojejunostomie și gastrojejunostomie (sau duodenojejunostomie dacă se prezervă pilorul)",
   "Mortalitatea este <5%, dar complicațiile sunt frecvente; fistula cea mai frecventă este cea pancreaticojejunală",
   "Tumorile corpului și cozii se tratează prin pancreatectomie distală, care include cel mai adesea splenectomia",
   "Mortalitatea depășește 40%, identică necrozei infectate, reconstrucția având o singură anastomoză",
   "Splenectomia însoțește de principiu Whipple-ul cefalic, nu rezecția distală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Rezecția porțiunii distale a CBP, a duodenului și a capului pancreatic; reconstrucția include coledocojejunostomie, pancreaticojejunostomie și gastrojejunostomie (sau duodenojejunostomie dacă se prezervă pilorul) — Corect: Piesele rezecate și cele trei anastomoze sunt explicite.\n\nMortalitatea este <5%, dar complicațiile sunt frecvente; fistula cea mai frecventă este cea pancreaticojejunală — Corect: Mortalitatea <5% și fistula PJ sunt citate.\n\nTumorile corpului și cozii se tratează prin pancreatectomie distală, care include cel mai adesea splenectomia — Corect: Pancreatectomia distală ± splenectomie pentru corp/coadă este descrisă.\n\nMortalitatea depășește 40%, identică necrozei infectate, reconstrucția având o singură anastomoză — Incorect: 40% este mortalitatea necrozei infectate, nu a Whipple.\n\nSplenectomia însoțește de principiu Whipple-ul cefalic, nu rezecția distală — Incorect: Splenectomia ține de rezecția distală, nu de Whipple-ul cefalic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 270, Whipple — Rezecție, reconstrucție, fistulă (pagini PDF: 181).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    270
   ],
   "pdfPages": [
    181
   ],
   "section": "Whipple — Rezecție, reconstrucție, fistulă"
  },
  "learningObjective": "Maparea celor trei anastomoze, a mortalității <5% și a predilecției fistulei pe pancreaticojejunostomie.",
  "optionRationales": [
   "Piesele rezecate și cele trei anastomoze sunt explicite.",
   "Mortalitatea <5% și fistula PJ sunt citate.",
   "Pancreatectomia distală ± splenectomie pentru corp/coadă este descrisă.",
   "40% este mortalitatea necrozei infectate, nu a Whipple.",
   "Splenectomia ține de rezecția distală, nu de Whipple-ul cefalic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă mortalitatea Whipple la 40% și mută splenectomia pe rezecția cefalică."
  },
  "textbookExpressions": [
   "<5%",
   "pancreaticojejunală"
  ]
 },
 {
  "id": "pancreas-adv-059",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Supraviețuirea în adenocarcinomul pancreatic nerezecabil versus rezecat se caracterizează prin:",
  "options": [
   "Boala nerezecabilă are o supraviețuire medie de aproximativ 6 luni, chiar și cu chimioterapie; rezecția cu margini negative plus adjuvant extinde durata la circa 19 luni, supraviețuirea la 5 ani fiind probabil de 20%",
   "Nerezecabilul are supraviețuire de 19 luni, rezecția scurtând-o la 6 luni",
   "Supraviețuirea la 5 ani după rezecție depășește 90%",
   "Factorii de prognostic nefavorabil (N+, tumora >3 cm, invazie perineurală) îmbunătățesc supraviețuirea",
   "Chimioterapia anulează prognosticul ganglionilor pozitivi"
  ],
  "correct": [
   0
  ],
  "explanation": "Boala nerezecabilă are o supraviețuire medie de aproximativ 6 luni, chiar și cu chimioterapie; rezecția cu margini negative plus adjuvant extinde durata la circa 19 luni, supraviețuirea la 5 ani fiind probabil de 20% — Corect: Cele trei cifre (6 luni, 19 luni, 20%) sunt explicite.\n\nNerezecabilul are supraviețuire de 19 luni, rezecția scurtând-o la 6 luni — Incorect: Direcția este inversă față de text.\n\nSupraviețuirea la 5 ani după rezecție depășește 90% — Incorect: 20%, nu 90%, este supraviețuirea la 5 ani.\n\nFactorii de prognostic nefavorabil (N+, tumora >3 cm, invazie perineurală) îmbunătățesc supraviețuirea — Incorect: N+, tumora >3 cm și invazia perineurală sunt factori nefavorabili.\n\nChimioterapia anulează prognosticul ganglionilor pozitivi — Incorect: Textul nu atribuie chimio anularea prognosticului N+.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 271, Prognostic — 6 luni versus 19 luni (pagini PDF: 182).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    271
   ],
   "pdfPages": [
    182
   ],
   "section": "Prognostic — 6 luni versus 19 luni"
  },
  "learningObjective": "Reținerea cuplului 6 luni (nerezecabil) versus 19 luni (R0 + adjuvant) și a 20% la 5 ani.",
  "optionRationales": [
   "Cele trei cifre (6 luni, 19 luni, 20%) sunt explicite.",
   "Direcția este inversă față de text.",
   "20%, nu 90%, este supraviețuirea la 5 ani.",
   "N+, tumora >3 cm și invazia perineurală sunt factori nefavorabili.",
   "Textul nu atribuie chimio anularea prognosticului N+."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează 6 versus 19 luni și umflă supraviețuirea la 5 ani de la 20% la 90%."
  },
  "textbookExpressions": [
   "aproximativ 6 luni",
   "aproximativ 19 luni"
  ]
 },
 {
  "id": "pancreas-adv-060",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Tumorile pancreatice neuroendocrine (TPN) se deosebesc de adenocarcinom prin:",
  "options": [
   "Reprezintă aproximativ 7% din cancerele pancreatice; incidența maximă este între 30 și 60 de ani",
   "Aproximativ 50% sunt nefuncționale",
   "Sunt clasificate funcționale sau nefuncționale după prezența sindromului clinic de secreție peptidică",
   "90% sunt adenocarcinoame ductale funcționale cu sindrom carcinoid constant",
   "Nefuncționalele nu se rezecă, scanarea cu octreotid înlocuind chirurgia"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Reprezintă aproximativ 7% din cancerele pancreatice; incidența maximă este între 30 și 60 de ani — Corect: 7% și vârful 30–60 ani sunt explicite.\n\nAproximativ 50% sunt nefuncționale — Corect: Proporția de circa 50% nefuncționale este citată.\n\nSunt clasificate funcționale sau nefuncționale după prezența sindromului clinic de secreție peptidică — Corect: Criteriul funcțional/nefuncțional este definit.\n\n90% sunt adenocarcinoame ductale funcționale cu sindrom carcinoid constant — Incorect: 90% adenocarcinom ductal ține de cancerele pancreatice în ansamblu, nu de TPN.\n\nNefuncționalele nu se rezecă, scanarea cu octreotid înlocuind chirurgia — Incorect: Tratamentul implică rezecție pancreatică pentru toate aceste tumori; octreotidul evaluează metastazele.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 271, TPN — Epidemiologie și clasificare (pagini PDF: 182).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    271
   ],
   "pdfPages": [
    182
   ],
   "section": "TPN — Epidemiologie și clasificare"
  },
  "learningObjective": "Aplicarea ponderii de 7%, a vârfului 30–60 ani și a ratei de 50% nefuncționale.",
  "optionRationales": [
   "7% și vârful 30–60 ani sunt explicite.",
   "Proporția de circa 50% nefuncționale este citată.",
   "Criteriul funcțional/nefuncțional este definit.",
   "90% adenocarcinom ductal ține de cancerele pancreatice în ansamblu, nu de TPN.",
   "Tratamentul implică rezecție pancreatică pentru toate aceste tumori; octreotidul evaluează metastazele."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Conflatează TPN-urile cu adenocarcinomul ductal și anulează rezecția nefuncționalelor."
  },
  "textbookExpressions": [
   "aproximativ 7%",
   "30-60 ani"
  ]
 },
 {
  "id": "pancreas-adv-061",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Insulinomul, ca TPN funcțională, se caracterizează prin:",
  "options": [
   "Reprezintă 20–30% din TPN, fiind cea mai frecventă tumoare funcțională; 85–90% sunt benigne",
   "Majoritatea sunt solitare și <2 cm; circa 75% sunt în corp și coadă; aproximativ 10% asociază MEN1",
   "Majoritatea celorlalte TPN (60%) sunt maligne, spre deosebire de insulinom",
   "Enucleerea este rezonabilă când tumora este mare și lipită de ductul principal",
   "85–90% sunt maligne, localizate în cap, fără legătură cu MEN1"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Reprezintă 20–30% din TPN, fiind cea mai frecventă tumoare funcțională; 85–90% sunt benigne — Corect: Ponderea 20–30% și benignitatea 85–90% sunt explicite.\n\nMajoritatea sunt solitare și <2 cm; circa 75% sunt în corp și coadă; aproximativ 10% asociază MEN1 — Corect: Solitare, <2 cm, 75% corp/coadă și 10% MEN1 sunt citate.\n\nMajoritatea celorlalte TPN (60%) sunt maligne, spre deosebire de insulinom — Corect: Malignitatea de 60% a celorlalte TPN este menționată.\n\nEnucleerea este rezonabilă când tumora este mare și lipită de ductul principal — Incorect: Enucleerea este pentru leziuni mici, la distanță de duct; cele aderente cer pancreatectomie.\n\n85–90% sunt maligne, localizate în cap, fără legătură cu MEN1 — Incorect: Benignitatea și sediul distale sunt inverse în această variantă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 272, 271, Insulinom — Epidemiologie și sediu (pagini PDF: 183, 182).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    272,
    271
   ],
   "pdfPages": [
    183,
    182
   ],
   "section": "Insulinom — Epidemiologie și sediu"
  },
  "learningObjective": "Contrastul benign (85–90%) și sediul corporeo-caudal (75%) față de celelalte TPN maligne în cap.",
  "optionRationales": [
   "Ponderea 20–30% și benignitatea 85–90% sunt explicite.",
   "Solitare, <2 cm, 75% corp/coadă și 10% MEN1 sunt citate.",
   "Malignitatea de 60% a celorlalte TPN este menționată.",
   "Enucleerea este pentru leziuni mici, la distanță de duct; cele aderente cer pancreatectomie.",
   "Benignitatea și sediul distale sunt inverse în această variantă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează benign/malign și cap versus corp-coadă, două oglindiri din același paragraf."
  },
  "textbookExpressions": [
   "20-30% din totalul",
   "85-90%"
  ]
 },
 {
  "id": "pancreas-adv-062",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Gastrinomul (Zollinger-Ellison) se caracterizează prin:",
  "options": [
   "Trei pătrimi apar sporadic, o pătrime în MEN1, unde este cea mai frecventă TPN funcțională",
   "Peste 50% sunt în peretele duodenal; 60–90% se află în triunghiul gastrinoamelor",
   "Un nivel de gastrină >1.000 pg/mL la pH gastric <2 are valoare diagnostică",
   "Gastrina >1.000 pg/mL la pH >7 confirmă insulinomul",
   "Triunghiul gastrinoamelor exclude duodenul, toate leziunile fiind în coada pancreasului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Trei pătrimi apar sporadic, o pătrime în MEN1, unde este cea mai frecventă TPN funcțională — Corect: 3/4 sporadice și 1/4 MEN1 sunt explicite.\n\nPeste 50% sunt în peretele duodenal; 60–90% se află în triunghiul gastrinoamelor — Corect: Peretele duodenal >50% și 60–90% în triunghi sunt citate.\n\nUn nivel de gastrină >1.000 pg/mL la pH gastric <2 are valoare diagnostică — Corect: Pragul >1.000 pg/mL cu pH <2 este diagnostic.\n\nGastrina >1.000 pg/mL la pH >7 confirmă insulinomul — Incorect: pH-ul trebuie să fie acid (<2), nu alcalin; nu este insulinom.\n\nTriunghiul gastrinoamelor exclude duodenul, toate leziunile fiind în coada pancreasului — Incorect: Triunghiul include D2–D3 și joncțiunea col–corp, nu coada.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 272, Gastrinom — Triunghi și prag diagnostic (pagini PDF: 183).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    272
   ],
   "pdfPages": [
    183
   ],
   "section": "Gastrinom — Triunghi și prag diagnostic"
  },
  "learningObjective": "Aplicarea triunghiului (cistic–duoden D2/D3–istm) și a pragului gastrină >1.000 cu pH <2.",
  "optionRationales": [
   "3/4 sporadice și 1/4 MEN1 sunt explicite.",
   "Peretele duodenal >50% și 60–90% în triunghi sunt citate.",
   "Pragul >1.000 pg/mL cu pH <2 este diagnostic.",
   "pH-ul trebuie să fie acid (<2), nu alcalin; nu este insulinom.",
   "Triunghiul include D2–D3 și joncțiunea col–corp, nu coada."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută gastrinomul în coadă și cere pH alcalin, inversând triunghiul și criteriul acid."
  },
  "textbookExpressions": [
   ">I.OOO pg/mL",
   "pH gastric <2"
  ]
 },
 {
  "id": "pancreas-adv-063",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Glucagonomul și VIPomul se recunosc clinic astfel:",
  "options": [
   "Glucagonomul: leziuni mari, adesea metastatice, în corp/coadă; peste jumătate au eritem migrator necrolitic; glucagon 500–1.000 pg/mL este diagnostic",
   "VIPomul: diaree apoasă 6–8 L/zi chiar în NPO, hipopotasemie și hipoclorhidrie (sindrom Verner-Morrison); octreotidul ajută diareea metastatică",
   "Eritemul migrator necrolitic definește gastrinomul, iar diareea 6–8 L/zi insulinomul",
   "Glucagonul diagnostic este <50 pg/mL, identic glicemiei din triada Whipple",
   "VIPomul nu produce diaree în repaus alimentar"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Glucagonomul: leziuni mari, adesea metastatice, în corp/coadă; peste jumătate au eritem migrator necrolitic; glucagon 500–1.000 pg/mL este diagnostic — Corect: Tabloul glucagonomului, inclusiv 500–1.000 pg/mL, este explicit.\n\nVIPomul: diaree apoasă 6–8 L/zi chiar în NPO, hipopotasemie și hipoclorhidrie (sindrom Verner-Morrison); octreotidul ajută diareea metastatică — Corect: Triada SDA/Verner-Morrison și 6–8 L/zi sunt citate.\n\nEritemul migrator necrolitic definește gastrinomul, iar diareea 6–8 L/zi insulinomul — Incorect: Eritemul ține de glucagonom, diareea masivă de VIPom, nu de gastrinom/insulinom.\n\nGlucagonul diagnostic este <50 pg/mL, identic glicemiei din triada Whipple — Incorect: 500–1.000 pg/mL, nu <50.\n\nVIPomul nu produce diaree în repaus alimentar — Incorect: Diareea VIPom persistă și în repaus alimentar.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 273, Glucagonom și VIPom (pagini PDF: 184).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    273
   ],
   "pdfPages": [
    184
   ],
   "section": "Glucagonom și VIPom"
  },
  "learningObjective": "Separarea eritemului migrator necrolitic (glucagon) de holera pancreatică 6–8 L (VIP).",
  "optionRationales": [
   "Tabloul glucagonomului, inclusiv 500–1.000 pg/mL, este explicit.",
   "Triada SDA/Verner-Morrison și 6–8 L/zi sunt citate.",
   "Eritemul ține de glucagonom, diareea masivă de VIPom, nu de gastrinom/insulinom.",
   "500–1.000 pg/mL, nu <50.",
   "Diareea VIPom persistă și în repaus alimentar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă dermatita necrolică pe gastrinom și diareea masivă pe insulinom, două sindroame vecine din tabelul TPN."
  },
  "textbookExpressions": [
   "eritemul migrator necrolitic",
   "6-8 L/zi"
  ]
 },
 {
  "id": "pancreas-adv-064",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Neoplasmele chistice mucinoase pancreatice se deosebesc de IPMN prin:",
  "options": [
   "Sunt întâlnite aproape constant la femei de vârstă mijlocie și conțin stromă ovariană la examenul histologic",
   "La diagnostic, 40% sunt invazive, localizate cel mai frecvent în corp și coadă, și trebuie rezecate",
   "IPMN-urile nu conțin stromă ovariană; cele de duct principal (dilatare >5 mm) sunt mai frecvent maligne și aproape toate se rezecă",
   "IPMN-urile de ramură se urmăresc prin CT, exceptând simptomele, diametrul >3 cm, nodulii sau citologia îngrijorătoare",
   "Stromă ovariană definește IPMN-ul de duct principal la bărbați, mucinoasele nefiind rezecate"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Sunt întâlnite aproape constant la femei de vârstă mijlocie și conțin stromă ovariană la examenul histologic — Corect: Predilecția feminină și stroma ovariană sunt explicite.\n\nLa diagnostic, 40% sunt invazive, localizate cel mai frecvent în corp și coadă, și trebuie rezecate — Corect: Cifra de 40% invazive și sediul corp/coadă sunt citate.\n\nIPMN-urile nu conțin stromă ovariană; cele de duct principal (dilatare >5 mm) sunt mai frecvent maligne și aproape toate se rezecă — Corect: Absența stromei ovariene și dilatarea >5 mm sunt descrise.\n\nIPMN-urile de ramură se urmăresc prin CT, exceptând simptomele, diametrul >3 cm, nodulii sau citologia îngrijorătoare — Corect: Criteriile de urmărire a ramurilor (simptome, >3 cm, noduli, citologie) sunt enumerate.\n\nStromă ovariană definește IPMN-ul de duct principal la bărbați, mucinoasele nefiind rezecate — Incorect: Stroma ovariană ține de neoplasmul mucinos, nu de IPMN.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 274, 275, Chiste mucinoase versus IPMN (pagini PDF: 185, 186).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    274,
    275
   ],
   "pdfPages": [
    185,
    186
   ],
   "section": "Chiste mucinoase versus IPMN"
  },
  "learningObjective": "Contrastul stromă ovariană (mucinos, femei, 40% invazive) versus IPMN fără stromă, cu pragul >5 mm al ductului principal.",
  "optionRationales": [
   "Predilecția feminină și stroma ovariană sunt explicite.",
   "Cifra de 40% invazive și sediul corp/coadă sunt citate.",
   "Absența stromei ovariene și dilatarea >5 mm sunt descrise.",
   "Criteriile de urmărire a ramurilor (simptome, >3 cm, noduli, citologie) sunt enumerate.",
   "Stroma ovariană ține de neoplasmul mucinos, nu de IPMN."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune stroma ovariană pe IPMN-ul masculin și anulează rezecția mucinoaselor, inversând Tabelul 17-11."
  },
  "textbookExpressions": [
   "stromă ovariană",
   "40% dintre tumori"
  ]
 },
 {
  "id": "pancreas-adv-065",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Anatomia chirurgicală a pancreasului, dincolo de cele patru segmente, include:",
  "options": [
   "Capul este încadrat de potcoava duodenală; procesul uncinat este o prelungire posterioară și inferioară a capului",
   "Vena mezenterică superioară marchează joncțiunea cap–istm; istmul stă imediat deasupra VMS",
   "Corpul se întinde la stânga VMS; coada, cea mai distală, se extinde spre hilul splinei, pe care uneori se sprijină",
   "Uncinatul este o prelungire a cozii în hilul splenic, VMS despărțind coada de corp",
   "Capul stă la stânga VMS, coada fiind încadrată de duoden"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Capul este încadrat de potcoava duodenală; procesul uncinat este o prelungire posterioară și inferioară a capului — Corect: Raportul duodenal și uncinatul sunt explicite.\n\nVena mezenterică superioară marchează joncțiunea cap–istm; istmul stă imediat deasupra VMS — Corect: Rolul de reper al VMS este citat.\n\nCorpul se întinde la stânga VMS; coada, cea mai distală, se extinde spre hilul splinei, pe care uneori se sprijină — Corect: Corpul la stânga VMS și coada spre hil sunt descrise.\n\nUncinatul este o prelungire a cozii în hilul splenic, VMS despărțind coada de corp — Incorect: Uncinatul aparține capului, nu cozii.\n\nCapul stă la stânga VMS, coada fiind încadrată de duoden — Incorect: Capul, nu coada, este încadrat de duoden.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 257, Anatomie — Segmente și VMS (pagini PDF: 168).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    257
   ],
   "pdfPages": [
    168
   ],
   "section": "Anatomie — Segmente și VMS"
  },
  "learningObjective": "Maparea VMS ca graniță cap–istm și a uncinatului ca prelungire postero-inferioară a capului.",
  "optionRationales": [
   "Raportul duodenal și uncinatul sunt explicite.",
   "Rolul de reper al VMS este citat.",
   "Corpul la stânga VMS și coada spre hil sunt descrise.",
   "Uncinatul aparține capului, nu cozii.",
   "Capul, nu coada, este încadrat de duoden."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută uncinatul pe coadă și inversează raporturile VMS, două repere de rezecție."
  },
  "textbookExpressions": [
   "procesul uncinat",
   "vena mezenterică superioară"
  ]
 },
 {
  "id": "pancreas-adv-066",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Dintre pacienții cu pancreas divisum, ponderea celor asimptomatici este, potrivit textului, de:",
  "options": [
   "90%",
   "10%, identică ponderii fuziunii incomplete",
   "20%, identică hepaticei drepte din AMS",
   "50%, identică TPN nefuncționale",
   "1–5%, identică pancreatitei post-ERCP"
  ],
  "correct": [
   0
  ],
  "explanation": "90% — Corect: 90% asimptomatici este explicit.\n\n10%, identică ponderii fuziunii incomplete — Incorect: 10% este ponderea populației cu fuziune incompletă, nu a simptomelor.\n\n20%, identică hepaticei drepte din AMS — Incorect: 20% este variația hepatică dreaptă din AMS.\n\n50%, identică TPN nefuncționale — Incorect: 50% sunt TPN nefuncționale.\n\n1–5%, identică pancreatitei post-ERCP — Incorect: 1–5% este pancreatita post-ERCP.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 257, Embriologie — Divisum asimptomatic (pagini PDF: 168).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    257
   ],
   "pdfPages": [
    168
   ],
   "section": "Embriologie — Divisum asimptomatic"
  },
  "learningObjective": "Reținerea cifrei de 90% asimptomatici, distinct de cei 10% cu fuziune incompletă.",
  "optionRationales": [
   "90% asimptomatici este explicit.",
   "10% este ponderea populației cu fuziune incompletă, nu a simptomelor.",
   "20% este variația hepatică dreaptă din AMS.",
   "50% sunt TPN nefuncționale.",
   "1–5% este pancreatita post-ERCP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 90% cu 10%/20%/50%/1–5%, toate procente din capitolul de pancreas."
  },
  "textbookExpressions": [
   "90% dintre pacienţii",
   "pancreas divisum"
  ]
 },
 {
  "id": "pancreas-adv-067",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Formarea ductelor pancreatice, după fuziune, se caracterizează prin:",
  "options": [
   "Wirsung (principal) se formează, cel mai frecvent, prin fuziunea porțiunilor distale ale ductelor dorsal și ventral",
   "Wirsung formează de obicei un canal comun cu calea biliară principală și pătrunde în duoden la ampula Vater / sfincterul Oddi (papila mare)",
   "Porțiunea distală a ductului dorsal poate persista ca Santorini (accesor) sau se poate oblitera complet",
   "Santorini drenează tot pancreasul prin papila mare, Wirsung lipsind constant",
   "Fuziunea se produce în ziua 30, înaintea rotației mugurelui ventral"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Wirsung (principal) se formează, cel mai frecvent, prin fuziunea porțiunilor distale ale ductelor dorsal și ventral — Corect: Originea Wirsung este explicită.\n\nWirsung formează de obicei un canal comun cu calea biliară principală și pătrunde în duoden la ampula Vater / sfincterul Oddi (papila mare) — Corect: Canalul comun cu CBP și papila mare sunt citate.\n\nPorțiunea distală a ductului dorsal poate persista ca Santorini (accesor) sau se poate oblitera complet — Corect: Persistența sau obliterarea Santorini sunt descrise.\n\nSantorini drenează tot pancreasul prin papila mare, Wirsung lipsind constant — Incorect: Santorini este accesorul; 10% au fuziune incompletă, nu absență constantă a Wirsung.\n\nFuziunea se produce în ziua 30, înaintea rotației mugurelui ventral — Incorect: Ziua 30 este formarea mugurilor, nu fuziunea (săptămânile 6–8).\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 257, Embriologie — Wirsung, Santorini, Vater (pagini PDF: 168).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    257
   ],
   "pdfPages": [
    168
   ],
   "section": "Embriologie — Wirsung, Santorini, Vater"
  },
  "learningObjective": "Legarea Wirsung de fuziunea distală dorsal+ventral și a Santorini de restul dorsal, distinct de ziua 30 a mugurilor.",
  "optionRationales": [
   "Originea Wirsung este explicită.",
   "Canalul comun cu CBP și papila mare sunt citate.",
   "Persistența sau obliterarea Santorini sunt descrise.",
   "Santorini este accesorul; 10% au fuziune incompletă, nu absență constantă a Wirsung.",
   "Ziua 30 este formarea mugurilor, nu fuziunea (săptămânile 6–8)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează Wirsung și mută fuziunea în ziua 30, două praguri embriologice din același paragraf."
  },
  "textbookExpressions": [
   "canalul Wirsung",
   "ductul Santorini"
  ]
 },
 {
  "id": "pancreas-adv-068",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Drenajul venos al pancreasului și riscul de infarct intestinal se caracterizează prin:",
  "options": [
   "Drenajul corpului și cozii se face prin tributare ale venei splenice și vene pancreatice inferioare",
   "Vena mezenterică inferioară se poate alătura sistemului port oriunde de-a lungul venei splenice, inclusiv la joncțiunea splenică–VMS",
   "Întreg sângele intestinului subțire și gros drenează în sistemul port; lezarea acestei structuri venoase poate produce infarct intestinal",
   "VMI se varsă constant în cava inferioară, ocolind porta",
   "Lezarea portei nu afectează intestinul, drenajul fiind sistemic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Drenajul corpului și cozii se face prin tributare ale venei splenice și vene pancreatice inferioare — Corect: Tributarele splenice sunt explicite.\n\nVena mezenterică inferioară se poate alătura sistemului port oriunde de-a lungul venei splenice, inclusiv la joncțiunea splenică–VMS — Corect: Variabilitatea VMI, inclusiv la joncțiunea splenică–VMS, este citată.\n\nÎntreg sângele intestinului subțire și gros drenează în sistemul port; lezarea acestei structuri venoase poate produce infarct intestinal — Corect: Drenajul port al întregului intestin și riscul de infarct sunt descrise.\n\nVMI se varsă constant în cava inferioară, ocolind porta — Incorect: VMI se alătură sistemului port, nu cavei.\n\nLezarea portei nu afectează intestinul, drenajul fiind sistemic — Incorect: Textul leagă lezarea portei de infarct intestinal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 260, Anatomie venoasă — VMI și portă (pagini PDF: 171).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    260
   ],
   "pdfPages": [
    171
   ],
   "section": "Anatomie venoasă — VMI și portă"
  },
  "learningObjective": "Aplicarea confluenței variabile a VMI și a riscului de infarct după lezarea portei.",
  "optionRationales": [
   "Tributarele splenice sunt explicite.",
   "Variabilitatea VMI, inclusiv la joncțiunea splenică–VMS, este citată.",
   "Drenajul port al întregului intestin și riscul de infarct sunt descrise.",
   "VMI se alătură sistemului port, nu cavei.",
   "Textul leagă lezarea portei de infarct intestinal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută VMI în cavă și neagă infarctul după lezarea portei, inversând teritoriul splanhnic."
  },
  "textbookExpressions": [
   "vena mezenterică inferioară",
   "infarctului intestinal"
  ]
 },
 {
  "id": "pancreas-adv-069",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Volumul zilnic al secreției exocrine pancreatice, potrivit textului, este de:",
  "options": [
   "500–800 mL de fluid alcalin izoton, cu sodiu și potasiu egale cu plasma",
   "1–2 L, identic chimului ileal evacuat în cec",
   "800–900 mL, identic gazelor colonice",
   "80 mL/kg, identic volemiei pediatrice",
   "<200 mL, identic lichidului fecal zilnic"
  ],
  "correct": [
   0
  ],
  "explanation": "500–800 mL de fluid alcalin izoton, cu sodiu și potasiu egale cu plasma — Corect: 500–800 mL, caracterul alcalin izoton și egalitatea Na/K sunt explicite.\n\n1–2 L, identic chimului ileal evacuat în cec — Incorect: 1–2 L este chimul ileal.\n\n800–900 mL, identic gazelor colonice — Incorect: 800–900 mL sunt gazele colonice.\n\n80 mL/kg, identic volemiei pediatrice — Incorect: 80 mL/kg este volemia copilului.\n\n<200 mL, identic lichidului fecal zilnic — Incorect: <200 mL este lichidul din scaunul solid.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 260, Fiziologie exocrină — Volum zilnic (pagini PDF: 171).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    260
   ],
   "pdfPages": [
    171
   ],
   "section": "Fiziologie exocrină — Volum zilnic"
  },
  "learningObjective": "Reținerea intervalului 500–800 mL și a izotoniei Na/K cu plasma, distinct de volumele colice.",
  "optionRationales": [
   "500–800 mL, caracterul alcalin izoton și egalitatea Na/K sunt explicite.",
   "1–2 L este chimul ileal.",
   "800–900 mL sunt gazele colonice.",
   "80 mL/kg este volemia copilului.",
   "<200 mL este lichidul din scaunul solid."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 500–800 mL cu 1–2 L și 800–900 mL, trei volume digestive ușor de amestecat."
  },
  "textbookExpressions": [
   "500-800 mL",
   "alcalin izoton"
  ]
 },
 {
  "id": "pancreas-adv-070",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Celulele α insulare și controlul glicemiei se caracterizează prin:",
  "options": [
   "Secretă glucagon la glicemie scăzută, determinând glicogenoliză și creșterea glicemiei",
   "Insulele conțin și linii care produc insulină, somatostatină, PP, VIP, galanină, serotonină, amilină, pancreastatină și CgA",
   "Celulele α secretă insulină la hiperglicemie, glucagonul lipsind din insule",
   "Insulele sunt mai abundente în cap, coada fiind lipsită de hormoni",
   "Homeostazia glucozei nu depinde de feedback-ul glicemiei"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Secretă glucagon la glicemie scăzută, determinând glicogenoliză și creșterea glicemiei — Corect: Răspunsul α la hipoglicemie este explicit.\n\nInsulele conțin și linii care produc insulină, somatostatină, PP, VIP, galanină, serotonină, amilină, pancreastatină și CgA — Corect: Lista hormonilor peptidici este enumerată.\n\nCelulele α secretă insulină la hiperglicemie, glucagonul lipsind din insule — Incorect: Insulina ține de celulele β, nu de α.\n\nInsulele sunt mai abundente în cap, coada fiind lipsită de hormoni — Incorect: Insulele sunt mai abundente la coadă.\n\nHomeostazia glucozei nu depinde de feedback-ul glicemiei — Incorect: Mecanismul de feedback pe glicemie este descris.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 261, Fiziologie endocrină — Glucagon și α (pagini PDF: 172).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    261
   ],
   "pdfPages": [
    172
   ],
   "section": "Fiziologie endocrină — Glucagon și α"
  },
  "learningObjective": "Legarea celulelor α de glucagon/glicogenoliză, plus lista peptidică, față de mutarea insulelor pe cap.",
  "optionRationales": [
   "Răspunsul α la hipoglicemie este explicit.",
   "Lista hormonilor peptidici este enumerată.",
   "Insulina ține de celulele β, nu de α.",
   "Insulele sunt mai abundente la coadă.",
   "Mecanismul de feedback pe glicemie este descris."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie insulinei celulele α și mută abundența insulelor pe cap, două inversări din același paragraf."
  },
  "textbookExpressions": [
   "Celulele a",
   "glicogenoliză"
  ]
 },
 {
  "id": "pancreas-adv-071",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "În etiologia pancreatitei acute, Tabelul 17-2 include, dincolo de alcool și litiază:",
  "options": [
   "Metabolic: hiperlipidemie, hipertrigliceridemie, hipercalcemie (hiperparatiroidism), uremie, sarcină, venin de scorpion",
   "Infecțios: oreion, Coxsackie B, CMV, hepatite A/B/C, EBV, HSV",
   "Postoperator/traumatic: 0,8–17% după proceduri gastrice și 0,7–9,3% după proceduri biliare",
   "Medicamente precum corticosteroizi, tiazidice, furosemid, estrogeni și azatioprină",
   "Cauza metabolică unică este deficitul de vitamine hidrosolubile, scorpionul fiind protector"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Metabolic: hiperlipidemie, hipertrigliceridemie, hipercalcemie (hiperparatiroidism), uremie, sarcină, venin de scorpion — Corect: Lista metabolică, inclusiv scorpionul, este din tabel.\n\nInfecțios: oreion, Coxsackie B, CMV, hepatite A/B/C, EBV, HSV — Corect: Agenții infecțioși sunt citați.\n\nPostoperator/traumatic: 0,8–17% după proceduri gastrice și 0,7–9,3% după proceduri biliare — Corect: Intervalele 0,8–17% și 0,7–9,3% sunt din tabel.\n\nMedicamente precum corticosteroizi, tiazidice, furosemid, estrogeni și azatioprină — Corect: Medicamentele sunt menționate și în text.\n\nCauza metabolică unică este deficitul de vitamine hidrosolubile, scorpionul fiind protector — Incorect: Veninul de scorpion este cauză, nu protecție.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 262, Etiologie — Tabelul 17-2 (pagini PDF: 173).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    262
   ],
   "pdfPages": [
    173
   ],
   "section": "Etiologie — Tabelul 17-2"
  },
  "learningObjective": "Recunoașterea veninului de scorpion, a oreionului și a intervalelor post-gastrice/biliare, față de „protecția” scorpionului.",
  "optionRationales": [
   "Lista metabolică, inclusiv scorpionul, este din tabel.",
   "Agenții infecțioși sunt citați.",
   "Intervalele 0,8–17% și 0,7–9,3% sunt din tabel.",
   "Medicamentele sunt menționate și în text.",
   "Veninul de scorpion este cauză, nu protecție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă scorpionul în factor protector și anulează lista de medicamente, două capcane de tabel."
  },
  "textbookExpressions": [
   "veninul de scorpion",
   "0,8-17%"
  ]
 },
 {
  "id": "pancreas-adv-072",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Sindromul de răspuns inflamator sistemic în pancreatita acută severă se poate solda cu:",
  "options": [
   "Injurie renală acută, ARDS, instabilitate cardiovasculară",
   "Hiperglicemie, hipocalcemie, creșterea ureei și creatininei, hipoxie prin afectare hepatică, pulmonară și renală",
   "SIRS exclude afectarea extra-pancreatică, organele distant rămânând intacte",
   "Hipocalcemia lipsește, glicemia scăzând constant",
   "ARDS apare doar după ERCP, nu în pancreatita biliară"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Injurie renală acută, ARDS, instabilitate cardiovasculară — Corect: IRA, ARDS și instabilitatea cardiovasculară sunt explicite.\n\nHiperglicemie, hipocalcemie, creșterea ureei și creatininei, hipoxie prin afectare hepatică, pulmonară și renală — Corect: Cuplul hiperglicemie–hipocalcemie și hipoxia sunt citate.\n\nSIRS exclude afectarea extra-pancreatică, organele distant rămânând intacte — Incorect: SIRS poate leza alte organe pe lângă pancreas.\n\nHipocalcemia lipsește, glicemia scăzând constant — Incorect: Hipocalcemia și hiperglicemia sunt menționate.\n\nARDS apare doar după ERCP, nu în pancreatita biliară — Incorect: ARDS figurează ca leziune de organ în SIRS, nu ca specific ERCP.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 263, Pancreatită severă — SIRS și organe (pagini PDF: 174).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    263
   ],
   "pdfPages": [
    174
   ],
   "section": "Pancreatită severă — SIRS și organe"
  },
  "learningObjective": "Aplicarea listei ARDS–IRA–instabilitate, plus hiperglicemie/hipocalcemie, față de ideea de boală „doar pancreatică”.",
  "optionRationales": [
   "IRA, ARDS și instabilitatea cardiovasculară sunt explicite.",
   "Cuplul hiperglicemie–hipocalcemie și hipoxia sunt citate.",
   "SIRS poate leza alte organe pe lângă pancreas.",
   "Hipocalcemia și hiperglicemia sunt menționate.",
   "ARDS figurează ca leziune de organ în SIRS, nu ca specific ERCP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Izolează pancreatita de SIRS extra-pancreatic, deși pagina enumeră ARDS și IRA."
  },
  "textbookExpressions": [
   "ARDS",
   "hipocalcemie"
  ]
 },
 {
  "id": "pancreas-adv-073",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Necroza pancreatică pe CT, recunoscută prin absența captării contrastului IV, reprezintă:",
  "options": [
   "Un diagnostic radiologic care nu este, prin el însuși, indicație chirurgicală; majoritatea se recuperează fără operație",
   "Indicație de necrectomie deschisă în primele 24 de ore",
   "Criteriu Atlanta de formă ușoară, fără complicații locale",
   "Echivalentul infecției, profilaxia antibiotică fiind cerută",
   "Un semn prezent la toți pacienții din prima zi de internare"
  ],
  "correct": [
   0
  ],
  "explanation": "Un diagnostic radiologic care nu este, prin el însuși, indicație chirurgicală; majoritatea se recuperează fără operație — Corect: Fraza că diagnosticul radiologic nu este indicator operator este explicită.\n\nIndicație de necrectomie deschisă în primele 24 de ore — Incorect: Necrectomia precoce în necroza sterilă se evită 2–3 săptămâni.\n\nCriteriu Atlanta de formă ușoară, fără complicații locale — Incorect: Necroza ține de forma severă, nu de cea ușoară.\n\nEchivalentul infecției, profilaxia antibiotică fiind cerută — Incorect: Profilaxia nu este indicată în necroza sterilă.\n\nUn semn prezent la toți pacienții din prima zi de internare — Incorect: Necroza e evidențiată cel mai frecvent la zile–săptămâni, nu la toți din ziua 1.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 263, Necroză CT — Nu este indicație operatorie (pagini PDF: 174).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    263
   ],
   "pdfPages": [
    174
   ],
   "section": "Necroză CT — Nu este indicație operatorie"
  },
  "learningObjective": "Recunoașterea că non-captarea nu dictează chirurgia, majoritatea necrozelor vindecându-se fără operație.",
  "optionRationales": [
   "Fraza că diagnosticul radiologic nu este indicator operator este explicită.",
   "Necrectomia precoce în necroza sterilă se evită 2–3 săptămâni.",
   "Necroza ține de forma severă, nu de cea ușoară.",
   "Profilaxia nu este indicată în necroza sterilă.",
   "Necroza e evidențiată cel mai frecvent la zile–săptămâni, nu la toți din ziua 1."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă semnul CT de necroză în indicație de necrectomie din ziua 1."
  },
  "textbookExpressions": [
   "nu captează",
   "nu reprezintă un indicator"
  ]
 },
 {
  "id": "pancreas-adv-074",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Colecțiile lichidiene peripancreatice, cea mai frecventă complicație a pancreatitei acute:",
  "options": [
   "Rezultă din întreruperea ductului și scurgerea enzimelor activate în mezenter și retroperitoneu",
   "Sunt delimitate de viscere și țesut inflamator (colagen); cele mai multe se resorb spontan",
   "Pseudochistul bine definit apare de obicei la 3–4 săptămâni, fără straturi epiteliale în perete",
   "Cele persistente >1 an sau >5 cm tind să crească și să obstrueze, deci drenajul este indicat",
   "Colecția acută din ziua 1 are perete epitelial matur, potrivit pentru anastomoză"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Rezultă din întreruperea ductului și scurgerea enzimelor activate în mezenter și retroperitoneu — Corect: Mecanismul de scurgere ductală este explicit.\n\nSunt delimitate de viscere și țesut inflamator (colagen); cele mai multe se resorb spontan — Corect: Delimitarea de viscere/colagen și resorbția spontană sunt citate.\n\nPseudochistul bine definit apare de obicei la 3–4 săptămâni, fără straturi epiteliale în perete — Corect: Fereastra 3–4 săptămâni și absența epiteliului sunt descrise.\n\nCele persistente >1 an sau >5 cm tind să crească și să obstrueze, deci drenajul este indicat — Corect: Pragurile 1 an / 5 cm sunt menționate.\n\nColecția acută din ziua 1 are perete epitelial matur, potrivit pentru anastomoză — Incorect: Colecțiile acute nu au perete de granulație/epiteliu; anastomozarea prematură nu este descrisă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 266, Colecții și pseudochist — 3–4 săptămâni (pagini PDF: 177).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    266
   ],
   "pdfPages": [
    177
   ],
   "section": "Colecții și pseudochist — 3–4 săptămâni"
  },
  "learningObjective": "Legarea complicației celei mai frecvente de absența epiteliului și de maturarea la 3–4 săptămâni.",
  "optionRationales": [
   "Mecanismul de scurgere ductală este explicit.",
   "Delimitarea de viscere/colagen și resorbția spontană sunt citate.",
   "Fereastra 3–4 săptămâni și absența epiteliului sunt descrise.",
   "Pragurile 1 an / 5 cm sunt menționate.",
   "Colecțiile acute nu au perete de granulație/epiteliu; anastomozarea prematură nu este descrisă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune epiteliul și anastomoza pe colecția din ziua 1, inversând definiția pseudochistului."
  },
  "textbookExpressions": [
   "3-4 săptămâni",
   "fără straturi epiteliale"
  ]
 },
 {
  "id": "pancreas-adv-075",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Când 90% din pancreasul cronic a fost înlocuit de cicatrice, consecințele includ:",
  "options": [
   "Insuficiență endocrină și exocrină: malabsorbție, diabet, deficit de vitamine liposolubile, malnutriție",
   "Substituția orală de enzime ajută, în general, tratamentul steatoreei",
   "Durerea este surdă, epigastrică, iradiază posterior; mâncarea o agravează adesea",
   "Laboratorul rămâne normal dacă nu există obstrucție biliară",
   "Enzimele orale sunt inutile, steatoreea ținând de deficitul de B12, nu de lipază"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Insuficiență endocrină și exocrină: malabsorbție, diabet, deficit de vitamine liposolubile, malnutriție — Corect: Pragul 90% și lista de consecințe sunt explicite.\n\nSubstituția orală de enzime ajută, în general, tratamentul steatoreei — Corect: Enzimele pentru steatoree sunt citate.\n\nDurerea este surdă, epigastrică, iradiază posterior; mâncarea o agravează adesea — Corect: Caracterul durerii și agravarea alimentară sunt descrise.\n\nLaboratorul rămâne normal dacă nu există obstrucție biliară — Corect: Normalitatea de laborator în absența icterului obstructiv este menționată.\n\nEnzimele orale sunt inutile, steatoreea ținând de deficitul de B12, nu de lipază — Incorect: Steatoreea ține de insuficiența exocrină, enzimele fiind utile.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 267, Pancreatită cronică — 90% și steatoree (pagini PDF: 178).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    267
   ],
   "pdfPages": [
    178
   ],
   "section": "Pancreatită cronică — 90% și steatoree"
  },
  "learningObjective": "Aplicarea pragului de 90% pentru insuficiența exo/endocrină și a enzimelor orale pentru steatoree.",
  "optionRationales": [
   "Pragul 90% și lista de consecințe sunt explicite.",
   "Enzimele pentru steatoree sunt citate.",
   "Caracterul durerii și agravarea alimentară sunt descrise.",
   "Normalitatea de laborator în absența icterului obstructiv este menționată.",
   "Steatoreea ține de insuficiența exocrină, enzimele fiind utile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează enzimele orale și mută steatoreea pe B12, contrar frazei despre substituție."
  },
  "textbookExpressions": [
   "90% din glandă",
   "steatoreei"
  ]
 },
 {
  "id": "pancreas-adv-076",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Dintre explorările ductale în pancreatita cronică, ERCP:",
  "options": [
   "Are cea mai mare sensibilitate pentru arhitectura ductală bilio-pancreatică: lungime, stricturi, fistule, obstrucții, esențiale înaintea chirurgiei",
   "Este un test invaziv, cu riscuri reduse de exacerbare a pancreatitei sau de sepsis biliar/pancreatic",
   "CT/MRCP sunt suficiente pentru planificarea tuturor rezecțiilor, ERCP fiind abandonat",
   "ERCP nu vizualizează stricturile, fiind inferioară radiografiei simple",
   "Sepsisul biliar exclude orice indicație de ERCP, chiar diagnostică"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Are cea mai mare sensibilitate pentru arhitectura ductală bilio-pancreatică: lungime, stricturi, fistule, obstrucții, esențiale înaintea chirurgiei — Corect: Sensibilitatea maximă și detaliile ductale sunt explicite.\n\nEste un test invaziv, cu riscuri reduse de exacerbare a pancreatitei sau de sepsis biliar/pancreatic — Corect: Caracterul invaziv și riscurile reduse sunt citate.\n\nCT/MRCP sunt suficiente pentru planificarea tuturor rezecțiilor, ERCP fiind abandonat — Incorect: Textul spune că CT/MRCP de obicei nu arată suficiente detalii pentru a planifica.\n\nERCP nu vizualizează stricturile, fiind inferioară radiografiei simple — Incorect: ERCP evaluează tocmai stricturile și obstrucțiile.\n\nSepsisul biliar exclude orice indicație de ERCP, chiar diagnostică — Incorect: Riscul de sepsis există, dar testul rămâne util diagnostic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 267, Pancreatită cronică — ERCP (pagini PDF: 178).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    267
   ],
   "pdfPages": [
    178
   ],
   "section": "Pancreatită cronică — ERCP"
  },
  "learningObjective": "Recunoașterea sensibilității maxime a ERCP pentru anatomia ductală preoperatorie, cu riscul (redus) de exacerbare.",
  "optionRationales": [
   "Sensibilitatea maximă și detaliile ductale sunt explicite.",
   "Caracterul invaziv și riscurile reduse sunt citate.",
   "Textul spune că CT/MRCP de obicei nu arată suficiente detalii pentru a planifica.",
   "ERCP evaluează tocmai stricturile și obstrucțiile.",
   "Riscul de sepsis există, dar testul rămâne util diagnostic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Declară CT/MRCP suficiente pentru planificare, exact limita pe care textul o subliniază."
  },
  "textbookExpressions": [
   "cea mai mare sensibilitate",
   "ERCP"
  ]
 },
 {
  "id": "pancreas-adv-077",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Pregătirea preoperatorie a icterului obstructiv din tumora pancreatică include:",
  "options": [
   "Coagulopatia legată de vitamina K, prin întreruperea circulației enterohepatice și malnutriție, trebuie corectată înaintea unei intervenții majore",
   "Laboratorul include albumină, transferină, prealbumină și timpul de protrombină",
   "Drenajul biliar preoperator nu este indicat la tumora imagistic rezecabilă, crescând infecțiile post-rezecție",
   "Biopsia preoperatorie a tumorii rezecabile se evită de rutină, din cauza fals-negativelor, a dificultății diagnostice și a hemoragiei care poate întârzia operația",
   "Drenajul preoperator reduce infecțiile și înlocuiește corectarea vitaminei K"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Coagulopatia legată de vitamina K, prin întreruperea circulației enterohepatice și malnutriție, trebuie corectată înaintea unei intervenții majore — Corect: Coagulopatia K și malnutriția sunt explicite.\n\nLaboratorul include albumină, transferină, prealbumină și timpul de protrombină — Corect: Cei patru markeri de laborator sunt citați.\n\nDrenajul biliar preoperator nu este indicat la tumora imagistic rezecabilă, crescând infecțiile post-rezecție — Corect: Creșterea infecțiilor după drenaj este descrisă.\n\nBiopsia preoperatorie a tumorii rezecabile se evită de rutină, din cauza fals-negativelor, a dificultății diagnostice și a hemoragiei care poate întârzia operația — Corect: Motivele de a nu biopsia rezecabilul sunt enumerate.\n\nDrenajul preoperator reduce infecțiile și înlocuiește corectarea vitaminei K — Incorect: Drenajul crește, nu reduce, infecțiile; vitamina K se corectează separat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 270, Cancer — Vitamina K, nutriție, drenaj (pagini PDF: 181).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    270
   ],
   "pdfPages": [
    181
   ],
   "section": "Cancer — Vitamina K, nutriție, drenaj"
  },
  "learningObjective": "Combinarea coagulopatiei K-dependente cu interdicția drenajului la rezecabil, plus rezerva biopsiei.",
  "optionRationales": [
   "Coagulopatia K și malnutriția sunt explicite.",
   "Cei patru markeri de laborator sunt citați.",
   "Creșterea infecțiilor după drenaj este descrisă.",
   "Motivele de a nu biopsia rezecabilul sunt enumerate.",
   "Drenajul crește, nu reduce, infecțiile; vitamina K se corectează separat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează relația drenaj–infecție și anulează corectarea vitaminei K."
  },
  "textbookExpressions": [
   "vitamina K",
   "transferina"
  ]
 },
 {
  "id": "pancreas-adv-078",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Triada Whipple, sugestivă pentru insulinom, cuprinde:",
  "options": [
   "Simptome de hipoglicemie, glicemie 40–50 mg/dL și dispariția simptomelor după glucoză IV",
   "Gastrină >1.000 pg/mL la pH gastric <2",
   "Glucagon 500–1.000 pg/mL plus eritem migrator necrolitic",
   "Diaree 6–8 L/zi în NPO, cu hipopotasemie",
   "Bilirubină directă crescută cu veziculă palpabilă nedureroasă"
  ],
  "correct": [
   0
  ],
  "explanation": "Simptome de hipoglicemie, glicemie 40–50 mg/dL și dispariția simptomelor după glucoză IV — Corect: Cele trei componente (simptome, 40–50 mg/dL, răspuns la glucoză) sunt explicite.\n\nGastrină >1.000 pg/mL la pH gastric <2 — Incorect: Pragul gastrinic definește gastrinomul.\n\nGlucagon 500–1.000 pg/mL plus eritem migrator necrolitic — Incorect: Cuplul glucagon–eritem definește glucagonomul.\n\nDiaree 6–8 L/zi în NPO, cu hipopotasemie — Incorect: Holera pancreatică definește VIPomul.\n\nBilirubină directă crescută cu veziculă palpabilă nedureroasă — Incorect: Semnul Courvoisier ține de adenocarcinomul cefalic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 272, Insulinom — Triada Whipple (pagini PDF: 183).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    272
   ],
   "pdfPages": [
    183
   ],
   "section": "Insulinom — Triada Whipple"
  },
  "learningObjective": "Reținerea celor trei elemente ale triadei, distinct de pragurile gastrinomului, glucagonomului și VIPomului.",
  "optionRationales": [
   "Cele trei componente (simptome, 40–50 mg/dL, răspuns la glucoză) sunt explicite.",
   "Pragul gastrinic definește gastrinomul.",
   "Cuplul glucagon–eritem definește glucagonomul.",
   "Holera pancreatică definește VIPomul.",
   "Semnul Courvoisier ține de adenocarcinomul cefalic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă triada Whipple cu pragurile TPN vecine (gastrină, glucagon, VIP)."
  },
  "textbookExpressions": [
   "Triada Whipple",
   "40-50 mg/dL"
  ]
 },
 {
  "id": "pancreas-adv-079",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Criteriile de laborator ale insulinomului, dincolo de triada Whipple, includ:",
  "options": [
   "Glicemie ≤45 mg/dL cu insulină serică ≥36 µU/L concomitentă",
   "Peptid-C ≥200 pmol/L, proinsulină ≥5 pmol/L, β-hidroxibutirat ≤2,7 mmol/L și absența sulfonilureei",
   "Testul cu secretină: insulinoamele nu eliberează insulină ca răspuns, inhibând și răspunsul normal al celulelor β",
   "Creșterea insulinei după secretină confirmă insulinomul, sulfonilureea fiind necesară pentru diagnostic",
   "Peptid-C nedetectabil definește insulinomul, ca în hipoglicemia factice cu insulină exogenă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Glicemie ≤45 mg/dL cu insulină serică ≥36 µU/L concomitentă — Corect: Perechea glicemie–insulină este explicită.\n\nPeptid-C ≥200 pmol/L, proinsulină ≥5 pmol/L, β-hidroxibutirat ≤2,7 mmol/L și absența sulfonilureei — Corect: Celelalte praguri, inclusiv sulfonilureea absentă, sunt citate.\n\nTestul cu secretină: insulinoamele nu eliberează insulină ca răspuns, inhibând și răspunsul normal al celulelor β — Corect: Lipsa creșterii insulinei la secretină este descrisă.\n\nCreșterea insulinei după secretină confirmă insulinomul, sulfonilureea fiind necesară pentru diagnostic — Incorect: Insulinoamele nu cresc insulina la secretină.\n\nPeptid-C nedetectabil definește insulinomul, ca în hipoglicemia factice cu insulină exogenă — Incorect: Peptid-C scăzut orientează spre insulină exogenă, nu spre insulinom.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 272, Insulinom — Șase criterii și secretină (pagini PDF: 183).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    272
   ],
   "pdfPages": [
    183
   ],
   "section": "Insulinom — Șase criterii și secretină"
  },
  "learningObjective": "Aplicarea pragurilor ≤45 / ≥36 / peptid-C și a absenței răspunsului la secretină, față de confuzia cu insulină exogenă.",
  "optionRationales": [
   "Perechea glicemie–insulină este explicită.",
   "Celelalte praguri, inclusiv sulfonilureea absentă, sunt citate.",
   "Lipsa creșterii insulinei la secretină este descrisă.",
   "Insulinoamele nu cresc insulina la secretină.",
   "Peptid-C scăzut orientează spre insulină exogenă, nu spre insulinom."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează testul la secretină și peptid-C, două capcane de diagnostic diferențial al hipoglicemiei."
  },
  "textbookExpressions": [
   "≤45 mg/dL",
   "secretinei"
  ]
 },
 {
  "id": "pancreas-adv-080",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Gastrinomul, ca pondere în TPN funcționale, se caracterizează epidemiologic prin:",
  "options": [
   "Reprezintă aproximativ 20% dintre TPN funcționale; trei pătrimi sporadice, un sfert MEN1, unde este cea mai frecventă TPN funcțională",
   "Este multicentric în jumătate din cazuri și tinde să metastazeze în ganglioni și ficat (50%)",
   "90% sunt benigne, localizate în coadă, fără metastaze",
   "Enucleerea este regula, tumora fiind solitară <1 cm în hilul splenic",
   "MEN1 exclude gastrinomul, care este doar sporadic"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Reprezintă aproximativ 20% dintre TPN funcționale; trei pătrimi sporadice, un sfert MEN1, unde este cea mai frecventă TPN funcțională — Corect: 20%, 3/4 sporadice și 1/4 MEN1 sunt explicite.\n\nEste multicentric în jumătate din cazuri și tinde să metastazeze în ganglioni și ficat (50%) — Corect: Multicentricitatea jumătate și metastazele 50% sunt citate.\n\n90% sunt benigne, localizate în coadă, fără metastaze — Incorect: 85–90% benigne în coadă descrie insulinomul, nu gastrinomul.\n\nEnucleerea este regula, tumora fiind solitară <1 cm în hilul splenic — Incorect: Enucleerea distanță de duct ține de insulinomul mic.\n\nMEN1 exclude gastrinomul, care este doar sporadic — Incorect: În MEN1, gastrinomul este tocmai cea mai frecventă TPN funcțională.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 272, Gastrinom — 20%, multicentric, 50% metastaze (pagini PDF: 183).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    272
   ],
   "pdfPages": [
    183
   ],
   "section": "Gastrinom — 20%, multicentric, 50% metastaze"
  },
  "learningObjective": "Aplicarea ponderii de 20% și a ratei de 50% multicentric/metastatic, față de benignitatea insulinomului.",
  "optionRationales": [
   "20%, 3/4 sporadice și 1/4 MEN1 sunt explicite.",
   "Multicentricitatea jumătate și metastazele 50% sunt citate.",
   "85–90% benigne în coadă descrie insulinomul, nu gastrinomul.",
   "Enucleerea distanță de duct ține de insulinomul mic.",
   "În MEN1, gastrinomul este tocmai cea mai frecventă TPN funcțională."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie gastrinomului benignitatea și sediul caudal ale insulinomului."
  },
  "textbookExpressions": [
   "aproximativ 20%",
   "metastazeze"
  ]
 },
 {
  "id": "pancreas-adv-081",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Când gastrina de repaus este sub 1.000 pg/mL, diagnosticul de gastrinom se sprijină pe:",
  "options": [
   "Aproximativ două treimi dintre pacienți au gastrină <1.000 pg/mL și cer teste suplimentare",
   "Gastrină de repaus >200 pg/mL plus test la secretină pozitiv (creștere >200 pg/mL) are valoare diagnostică; normal, secretina scade gastrina",
   "Calciul seric se dozează la toți, pentru excluderea MEN1",
   "Gastrina <1.000 exclude gastrinomul, secretina fiind inutilă",
   "Creșterea gastrinei la secretină este răspunsul normal, nu diagnosticul de Zollinger-Ellison"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Aproximativ două treimi dintre pacienți au gastrină <1.000 pg/mL și cer teste suplimentare — Corect: Fracția de două treimi este explicită.\n\nGastrină de repaus >200 pg/mL plus test la secretină pozitiv (creștere >200 pg/mL) are valoare diagnostică; normal, secretina scade gastrina — Corect: Pragurile >200 și delta >200, plus scăderea normală, sunt citate.\n\nCalciul seric se dozează la toți, pentru excluderea MEN1 — Corect: Dozaajul calciului este descris.\n\nGastrina <1.000 exclude gastrinomul, secretina fiind inutilă — Incorect: Sub 1.000 nu exclude, ci cere teste suplimentare.\n\nCreșterea gastrinei la secretină este răspunsul normal, nu diagnosticul de Zollinger-Ellison — Incorect: Normal secretina scade gastrina; creșterea este patologică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 272, Gastrinom — Secretină când gastrina <1.000 (pagini PDF: 183).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    272
   ],
   "pdfPages": [
    183
   ],
   "section": "Gastrinom — Secretină când gastrina <1.000"
  },
  "learningObjective": "Aplicarea fracției 2/3 cu gastrină sub prag și a deltei >200 pg/mL la secretină, plus calciul pentru MEN1.",
  "optionRationales": [
   "Fracția de două treimi este explicită.",
   "Pragurile >200 și delta >200, plus scăderea normală, sunt citate.",
   "Dozaajul calciului este descris.",
   "Sub 1.000 nu exclude, ci cere teste suplimentare.",
   "Normal secretina scade gastrina; creșterea este patologică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă gastrina <1.000 într-un criteriu de excludere și inversează răspunsul normal la secretină."
  },
  "textbookExpressions": [
   "<l.000 pg/",
   ">200 pg/mL"
  ]
 },
 {
  "id": "pancreas-adv-082",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Analogii de somatostatină în TPN paliative se caracterizează prin:",
  "options": [
   "Pot controla simptomele la aproape 100% dintre pacienți, sunt bine tolerați și pot stabiliza evoluția pe termen scurt",
   "Nu prelungesc supraviețuirea",
   "Streptozocina, 5-FU și doxorubicina, ca salvare în insulinomul malign, au eficacitate slabă și toxicitate semnificativă",
   "Analogii vindecă metastazele hepatice și prelungesc supraviețuirea peste 90% la 5 ani",
   "Chimioterapia cu streptozocină înlocuiește rezecția TPN rezecabile"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pot controla simptomele la aproape 100% dintre pacienți, sunt bine tolerați și pot stabiliza evoluția pe termen scurt — Corect: Aproape 100% control simptomatic este explicit.\n\nNu prelungesc supraviețuirea — Corect: Absența prelungirii supraviețuirii este citată.\n\nStreptozocina, 5-FU și doxorubicina, ca salvare în insulinomul malign, au eficacitate slabă și toxicitate semnificativă — Corect: Eficacitatea slabă și toxicitatea schemei de salvare sunt descrise.\n\nAnalogii vindecă metastazele hepatice și prelungesc supraviețuirea peste 90% la 5 ani — Incorect: Analogii nu prelungesc supraviețuirea; 90% la 5 ani nu figurează aici.\n\nChimioterapia cu streptozocină înlocuiește rezecția TPN rezecabile — Incorect: Rezecția rămâne tratamentul TPN rezecabile.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 274, TPN — Octreotid paliativ (pagini PDF: 185).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    274
   ],
   "pdfPages": [
    185
   ],
   "section": "TPN — Octreotid paliativ"
  },
  "learningObjective": "Separarea controlului simptomatic aproape complet de absența prelungirii supraviețuirii.",
  "optionRationales": [
   "Aproape 100% control simptomatic este explicit.",
   "Absența prelungirii supraviețuirii este citată.",
   "Eficacitatea slabă și toxicitatea schemei de salvare sunt descrise.",
   "Analogii nu prelungesc supraviețuirea; 90% la 5 ani nu figurează aici.",
   "Rezecția rămâne tratamentul TPN rezecabile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă analogii într-un tratament curativ care prelungește supraviețuirea, contrar frazei explicite."
  },
  "textbookExpressions": [
   "aproape 100%",
   "nu prelungesc supravieţuirea"
  ]
 },
 {
  "id": "pancreas-adv-083",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Chistadenoamele seroase pancreatice, spre deosebire de neoplasmele mucinoase:",
  "options": [
   "Sunt benigne și nu necesită rezecție",
   "Chistadenocarcinoamele seroase, deși foarte rare, trebuie rezecate când sunt identificate",
   "Mucinoasele au stromă ovariană, predilecție feminină și 40% invazive la diagnostic, deci se rezecă",
   "Seroasele conțin stromă ovariană și se rezecă de principiu la bărbați",
   "IPMN-urile de ramură se rezecă toate, urmărirea CT fiind interzisă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sunt benigne și nu necesită rezecție — Corect: Caracterul benign fără rezecție este explicit.\n\nChistadenocarcinoamele seroase, deși foarte rare, trebuie rezecate când sunt identificate — Corect: Excepția chistadenocarcinomului seros este citată.\n\nMucinoasele au stromă ovariană, predilecție feminină și 40% invazive la diagnostic, deci se rezecă — Corect: Stroma ovariană, femeile și 40% invazive sunt descrise.\n\nSeroasele conțin stromă ovariană și se rezecă de principiu la bărbați — Incorect: Stroma ovariană ține de mucinoase, nu de seroase.\n\nIPMN-urile de ramură se rezecă toate, urmărirea CT fiind interzisă — Incorect: IPMN-urile de ramură se urmăresc, cu excepțiile cunoscute.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 274, 275, Chiste — Seros versus mucinos (pagini PDF: 185, 186).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    274,
    275
   ],
   "pdfPages": [
    185,
    186
   ],
   "section": "Chiste — Seros versus mucinos"
  },
  "learningObjective": "Contrastul seros (benign, fără rezecție) versus mucinos (stromă ovariană, rezecție) și excepția rarului chistadenocarcinom seros.",
  "optionRationales": [
   "Caracterul benign fără rezecție este explicit.",
   "Excepția chistadenocarcinomului seros este citată.",
   "Stroma ovariană, femeile și 40% invazive sunt descrise.",
   "Stroma ovariană ține de mucinoase, nu de seroase.",
   "IPMN-urile de ramură se urmăresc, cu excepțiile cunoscute."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune stroma ovariană pe seroase și forțează rezecția lor, inversând Tabelul 17-11."
  },
  "textbookExpressions": [
   "Chistadenoamele seroase",
   "nu necesită rezecţie"
  ]
 },
 {
  "id": "pancreas-adv-084",
  "topicId": "pancreas",
  "type": "CS",
  "stem": "Vena mezenterică superioară, ca reper pancreatic, marchează:",
  "options": [
   "Joncțiunea dintre cap și istm; istmul este porțiunea situată imediat deasupra VMS",
   "Granița coadă–hil splenic, capul fiind la stânga VMS",
   "Originea arterei gastrice stângi din trunchiul celiac",
   "Ampula Vater, unde se unește cu Wirsung",
   "Linia de transecție de principiu a oricărui insulinom din cap"
  ],
  "correct": [
   0
  ],
  "explanation": "Joncțiunea dintre cap și istm; istmul este porțiunea situată imediat deasupra VMS — Corect: Joncțiunea cap–istm și poziția istmului deasupra VMS sunt explicite.\n\nGranița coadă–hil splenic, capul fiind la stânga VMS — Incorect: Coada se extinde spre hilul splinei, la stânga; capul este la dreapta, în potcoava duodenală.\n\nOriginea arterei gastrice stângi din trunchiul celiac — Incorect: Gastrica stângă ține de trunchiul celiac.\n\nAmpula Vater, unde se unește cu Wirsung — Incorect: Ampula este vărsarea Wirsung–CBP.\n\nLinia de transecție de principiu a oricărui insulinom din cap — Incorect: Enucleerea insulinomului depinde de distanța față de duct, nu de VMS ca linie obligatorie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 257, Anatomie — Reperul VMS (pagini PDF: 168).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    257
   ],
   "pdfPages": [
    168
   ],
   "section": "Anatomie — Reperul VMS"
  },
  "learningObjective": "Reținerea VMS ca graniță cap–istm, esențială pentru planul de Whipple versus rezecție distală.",
  "optionRationales": [
   "Joncțiunea cap–istm și poziția istmului deasupra VMS sunt explicite.",
   "Coada se extinde spre hilul splinei, la stânga; capul este la dreapta, în potcoava duodenală.",
   "Gastrica stângă ține de trunchiul celiac.",
   "Ampula este vărsarea Wirsung–CBP.",
   "Enucleerea insulinomului depinde de distanța față de duct, nu de VMS ca linie obligatorie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută VMS pe granița coadă–splină, inversând dreapta/stânga glandei."
  },
  "textbookExpressions": [
   "Joncţiunea",
   "istmul glandei"
  ]
 },
 {
  "id": "pancreas-adv-085",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Trunchiul celiac și arcadele pancreaticoduodenale se caracterizează prin:",
  "options": [
   "Trunchiul se trifurcă, în mod normal, în gastrica stângă, splenică și hepatica comună",
   "Capul și duodenul sunt vascularizate prin AGD, din care se nasc arcadele pancreaticoduodenale superioare anterioară și posterioară",
   "Corpul și coada primesc ramuri pancreatice din splenică și artera pancreatică dorsală, adesea din AGD",
   "AMS naște posterior de pancreas și dă ca primă ramură pancreaticoduodenala inferioară, care se anastomozează cu ramurile superioare",
   "AGD vascularizează doar coada, arcadele pancreaticoduodenale lipsind"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Trunchiul se trifurcă, în mod normal, în gastrica stângă, splenică și hepatica comună — Corect: Trifurcația este explicită.\n\nCapul și duodenul sunt vascularizate prin AGD, din care se nasc arcadele pancreaticoduodenale superioare anterioară și posterioară — Corect: AGD și arcadele superioare sunt citate.\n\nCorpul și coada primesc ramuri pancreatice din splenică și artera pancreatică dorsală, adesea din AGD — Corect: Splenica și artera pancreatică dorsală sunt descrise.\n\nAMS naște posterior de pancreas și dă ca primă ramură pancreaticoduodenala inferioară, care se anastomozează cu ramurile superioare — Corect: Poziția AMS și prima ramură sunt pe aceeași pagină.\n\nAGD vascularizează doar coada, arcadele pancreaticoduodenale lipsind — Incorect: AGD alimentează capul/duodenul prin arcade, nu doar coada.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 258, 259, Vascularizație — Celiac, AGD, arcade (pagini PDF: 169, 170).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    258,
    259
   ],
   "pdfPages": [
    169,
    170
   ],
   "section": "Vascularizație — Celiac, AGD, arcade"
  },
  "learningObjective": "Maparea trifurcației celiacului, a AGD ca sursă a arcadei superioare și a unirii cu inferioara din AMS.",
  "optionRationales": [
   "Trifurcația este explicită.",
   "AGD și arcadele superioare sunt citate.",
   "Splenica și artera pancreatică dorsală sunt descrise.",
   "Poziția AMS și prima ramură sunt pe aceeași pagină.",
   "AGD alimentează capul/duodenul prin arcade, nu doar coada."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează arcadele pancreaticoduodenale, exact anastomoza celiac–AMS din jurul capului."
  },
  "textbookExpressions": [
   "artera gastroduodenale",
   "arcadele pancreaticoduodenale"
  ]
 },
 {
  "id": "pancreas-adv-086",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Radiografia toracică, radiografia abdominală și ecografia, înaintea CT, în pancreatita acută suspectată:",
  "options": [
   "Radiografie toracică pentru complicații intratoracice și excluderea pneumoperitoneului",
   "Radiografie abdominală simplă pentru calcificări (pancreatită cronică) sau obstacol intestinal, plus ultrasonografie pentru litiază, dilatarea coledocului, dimensiunea pancreasului și colecții",
   "CT de principiu la toți, înaintea oricărei definiții Atlanta",
   "Ultrasonografia înlocuiește evaluarea clinică, amilaza fiind superfluă",
   "Radiografia toracică este evitată, pneumoperitoneul neintrând în diagnosticul diferențial"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Radiografie toracică pentru complicații intratoracice și excluderea pneumoperitoneului — Corect: RX torace și pneumoperitoneul sunt explicite.\n\nRadiografie abdominală simplă pentru calcificări (pancreatită cronică) sau obstacol intestinal, plus ultrasonografie pentru litiază, dilatarea coledocului, dimensiunea pancreasului și colecții — Corect: RX abdomen, calcificările și US biliară sunt citate.\n\nCT de principiu la toți, înaintea oricărei definiții Atlanta — Incorect: CT nu este necesar pentru diagnosticul Atlanta când clinic + enzime sunt suficiente.\n\nUltrasonografia înlocuiește evaluarea clinică, amilaza fiind superfluă — Incorect: Diagnosticul cere cel puțin două din trei (clinic, enzime, CT), nu US izolată.\n\nRadiografia toracică este evitată, pneumoperitoneul neintrând în diagnosticul diferențial — Incorect: Pneumoperitoneul ține de diagnosticul diferențial al abdomenului acut.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 263, Diagnostic — RX și ecografie înaintea CT (pagini PDF: 174).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    263
   ],
   "pdfPages": [
    174
   ],
   "section": "Diagnostic — RX și ecografie înaintea CT"
  },
  "learningObjective": "Ierarhia RX torace–RX abdomen–US înaintea CT, care nu este necesară pentru diagnosticul Atlanta.",
  "optionRationales": [
   "RX torace și pneumoperitoneul sunt explicite.",
   "RX abdomen, calcificările și US biliară sunt citate.",
   "CT nu este necesar pentru diagnosticul Atlanta când clinic + enzime sunt suficiente.",
   "Diagnosticul cere cel puțin două din trei (clinic, enzime, CT), nu US izolată.",
   "Pneumoperitoneul ține de diagnosticul diferențial al abdomenului acut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Forțează CT-ul de principiu, deși textul precizează că adesea nu este necesar pentru diagnostic."
  },
  "textbookExpressions": [
   "radiografie toracică",
   "Ultrasonografia"
  ]
 },
 {
  "id": "pancreas-adv-087",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Diagnosticul diferențial al pancreatitei acute, potrivit textului, include:",
  "options": [
   "Colecistita acută",
   "Ulcerul peptic perforat",
   "Ischemia acută mezenterică, perforația esofagiană și infarctul miocardic",
   "Nu toți pacienții cu abdomen acut și amilaze crescute au pancreatită acută",
   "Amilaza crescută confirmă pancreatita și exclude ulcerul perforat sau ischemia mezenterică"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Colecistita acută — Corect: Colecistita este enumerată.\n\nUlcerul peptic perforat — Corect: Ulcerul perforat este citat.\n\nIschemia acută mezenterică, perforația esofagiană și infarctul miocardic — Corect: Ischemia, perforația esofagiană și infarctul sunt descrise.\n\nNu toți pacienții cu abdomen acut și amilaze crescute au pancreatită acută — Corect: Avertismentul despre amilază este explicit (și trimite la Tabelul 17-3).\n\nAmilaza crescută confirmă pancreatita și exclude ulcerul perforat sau ischemia mezenterică — Incorect: Textul subliniază tocmai că amilaza nu confirmă diagnosticul în orice abdomen acut.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 263, Diagnostic diferențial — Amilază nespecifică (pagini PDF: 174).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    263
   ],
   "pdfPages": [
    174
   ],
   "section": "Diagnostic diferențial — Amilază nespecifică"
  },
  "learningObjective": "Reținerea că amilaza crescută nu echivalează pancreatita, lista cuprinzând ulcer perforat, ischemie și infarct.",
  "optionRationales": [
   "Colecistita este enumerată.",
   "Ulcerul perforat este citat.",
   "Ischemia, perforația esofagiană și infarctul sunt descrise.",
   "Avertismentul despre amilază este explicit (și trimite la Tabelul 17-3).",
   "Textul subliniază tocmai că amilaza nu confirmă diagnosticul în orice abdomen acut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă amilaza în test patognomonic, contrar avertismentului și tabelului de diagnostice diferențiale."
  },
  "textbookExpressions": [
   "ulcernl peptic perforat",
   "infarctul miocardic"
  ]
 },
 {
  "id": "pancreas-adv-088",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Duodenopancreatectomia cefalică clasică, față de varianta cu prezervarea pilorului, se deosebește prin:",
  "options": [
   "În Whipple clasic se rezecă antrul gastric, capul pancreatic și duodenul în totalitate; reconstrucția include gastrojejunostomie",
   "Varianta cu prezervarea pilorului folosește duodenojejunostomie în loc de gastrojejunostomie",
   "Antrul se păstrează de principiu în forma clasică, pilorul rezecându-se doar în varianta pylorus-preserving",
   "Reconstrucția clasică are o singură anastomoză, cea pancreaticojejunală",
   "Splenectomia însoțește de principiu Whipple-ul cefalic clasic"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "În Whipple clasic se rezecă antrul gastric, capul pancreatic și duodenul în totalitate; reconstrucția include gastrojejunostomie — Corect: Rezecția antrului în forma clasică este explicită.\n\nVarianta cu prezervarea pilorului folosește duodenojejunostomie în loc de gastrojejunostomie — Corect: Duodenojejunostomia din varianta cu pilor păstrat este citată (legendă/figură).\n\nAntrul se păstrează de principiu în forma clasică, pilorul rezecându-se doar în varianta pylorus-preserving — Incorect: Clasicul rezecă antrul, nu îl păstrează.\n\nReconstrucția clasică are o singură anastomoză, cea pancreaticojejunală — Incorect: Reconstrucția are trei anastomoze.\n\nSplenectomia însoțește de principiu Whipple-ul cefalic clasic — Incorect: Splenectomia ține de rezecția distală, nu de Whipple-ul cefalic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 270, Whipple — Clasică versus pylorus-preserving (pagini PDF: 181).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    270
   ],
   "pdfPages": [
    181
   ],
   "section": "Whipple — Clasică versus pylorus-preserving"
  },
  "learningObjective": "Contrastul hemigastrectomie + gastrojejunostomie versus duodenojejunostomie cu pilor păstrat.",
  "optionRationales": [
   "Rezecția antrului în forma clasică este explicită.",
   "Duodenojejunostomia din varianta cu pilor păstrat este citată (legendă/figură).",
   "Clasicul rezecă antrul, nu îl păstrează.",
   "Reconstrucția are trei anastomoze.",
   "Splenectomia ține de rezecția distală, nu de Whipple-ul cefalic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ce se rezecă din stomac între clasic și pylorus-preserving."
  },
  "textbookExpressions": [
   "antrul gastric",
   "prezervarea pilorului"
  ]
 },
 {
  "id": "pancreas-adv-089",
  "topicId": "pancreas",
  "type": "CM",
  "stem": "Cele două teorii majore care explică durerea din pancreatită, potrivit textului, sunt:",
  "options": [
   "Presiune intraductală sau intraparenchimatoasă crescută",
   "Teoria neurogenă, în care substanțe nocive sau celule activate imunologic irită celulele nervoase expuse",
   "Doar ischemia AMS, fără componentă inflamatorie sau ductală",
   "Hipersecreția de gastrină, identică sindromului Zollinger-Ellison",
   "Deficitul de secretină duodenală, cu pH >8 în stomac"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Presiune intraductală sau intraparenchimatoasă crescută — Corect: Teoria presiunii este explicită.\n\nTeoria neurogenă, în care substanțe nocive sau celule activate imunologic irită celulele nervoase expuse — Corect: Teoria neurogenă cu iritarea fibrelor expuse este citată.\n\nDoar ischemia AMS, fără componentă inflamatorie sau ductală — Incorect: Ischemia AMS nu este una dintre cele două teorii.\n\nHipersecreția de gastrină, identică sindromului Zollinger-Ellison — Incorect: Gastrina ține de gastrinom, nu de pancreatita inflamatorie.\n\nDeficitul de secretină duodenală, cu pH >8 în stomac — Incorect: Secretina stimulează bicarbonatul duodenal, nu explică durerea pancreatitică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 17, p. 260, Durere pancreatică — Două teorii (pagini PDF: 171).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 17,
   "printedPages": [
    260
   ],
   "pdfPages": [
    171
   ],
   "section": "Durere pancreatică — Două teorii"
  },
  "learningObjective": "Recunoașterea cuplului presiune intraductală versus iritație neurogenă, baza neurolizei de plex celiac.",
  "optionRationales": [
   "Teoria presiunii este explicită.",
   "Teoria neurogenă cu iritarea fibrelor expuse este citată.",
   "Ischemia AMS nu este una dintre cele două teorii.",
   "Gastrina ține de gastrinom, nu de pancreatita inflamatorie.",
   "Secretina stimulează bicarbonatul duodenal, nu explică durerea pancreatitică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește cele două teorii din paragraf cu ischemie AMS sau gastrinom, doi vecini de capitol."
  },
  "textbookExpressions": [
   "presiunea intraductală",
   "teoria neurogenă"
  ]
 }
];
