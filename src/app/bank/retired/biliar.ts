import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_BILIAR:Question[]=[
 {
  "id": "biliar-adv-001",
  "topicId": "biliar",
  "type": "CS",
  "stem": "Semnul Courvoisier constă în:",
  "options": [
   "O veziculă biliară destinsă, fără sensibilitate la palpare, asociată cu icter, evocând o boală malignă precum cancerul de cap de pancreas",
   "Oprirea bruscă a respirației la palpare profundă în hipocondrul drept, când peritoneul veziculei este inflamat",
   "Durere viscerală surdă de 1–4 ore, fără inflamație, produsă de un calcul impactat în canalul cistic",
   "Febră înaltă ca marker al colicii biliare necomplicate, fără colecistită",
   "Urină hipercromă și scaune decolorate în absența unui obstacol pe căile extrahepatice"
  ],
  "correct": [
   0
  ],
  "explanation": "O veziculă biliară destinsă, fără sensibilitate la palpare, asociată cu icter, evocând o boală malignă precum cancerul de cap de pancreas — Corect: Textul definește vezicula destinsă nedureroasă cu icter ca semn Courvoisier, sugestiv pentru malignitate (cancer de cap de pancreas).\n\nOprirea bruscă a respirației la palpare profundă în hipocondrul drept, când peritoneul veziculei este inflamat — Incorect: Oprirea respirației la palpare în HD este semnul Murphy, din colecistita acută.\n\nDurere viscerală surdă de 1–4 ore, fără inflamație, produsă de un calcul impactat în canalul cistic — Incorect: Durerea de 1–4 ore fără inflamație descrie colica biliară, nu semnul Courvoisier.\n\nFebră înaltă ca marker al colicii biliare necomplicate, fără colecistită — Incorect: Febra însoțește colecistita acută sau angiocolita, nu colica biliară.\n\nUrină hipercromă și scaune decolorate în absența unui obstacol pe căile extrahepatice — Incorect: Scaunele decolorate și urina hipercromă sugerează obstacol extrahepatic, nu absența lui.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 244, Tablou clinic — Colică biliară, colecistită și icter (pagini PDF: 156).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    244
   ],
   "pdfPages": [
    156
   ],
   "section": "Tablou clinic — Colică biliară, colecistită și icter"
  },
  "learningObjective": "Diferențierea semnului Courvoisier de semnul Murphy și de colica biliară neinflamatorie.",
  "optionRationales": [
   "Textul definește vezicula destinsă nedureroasă cu icter ca semn Courvoisier, sugestiv pentru malignitate (cancer de cap de pancreas).",
   "Oprirea respirației la palpare în HD este semnul Murphy, din colecistita acută.",
   "Durerea de 1–4 ore fără inflamație descrie colica biliară, nu semnul Courvoisier.",
   "Febra însoțește colecistita acută sau angiocolita, nu colica biliară.",
   "Scaunele decolorate și urina hipercromă sugerează obstacol extrahepatic, nu absența lui."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Alege între trei semne din aceeași pagină (Courvoisier, Murphy, colică) care se confundă frecvent."
  },
  "textbookExpressions": [
   "senmul Courvoisier",
   "cancer de cap de pancreas"
  ]
 },
 {
  "id": "biliar-adv-002",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la ecografia în patologia biliară:",
  "options": [
   "Sensibilitatea și specificitatea ecografiei în detectarea litiazei biliare sunt de 95%",
   "Ecografia poate detecta calculi cu diametrul de până la 3 mm",
   "Calea biliară este considerată dilatată dacă are diametrul >7 mm",
   "Ecografia este metoda de elecție pentru vizualizarea calculilor din CBP, duodenul neinterferând",
   "Aproximativ jumătate dintre calculii veziculari sunt radioopaci pe radiografia abdominală simplă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sensibilitatea și specificitatea ecografiei în detectarea litiazei biliare sunt de 95% — Corect: Sensibilitatea și specificitatea de 95% sunt citate explicit.\n\nEcografia poate detecta calculi cu diametrul de până la 3 mm — Corect: Pragul de 3 mm este menționat.\n\nCalea biliară este considerată dilatată dacă are diametrul >7 mm — Corect: Diametrul >7 mm definește dilatația căii biliare.\n\nEcografia este metoda de elecție pentru vizualizarea calculilor din CBP, duodenul neinterferând — Incorect: Ecografia este mai puțin utilă pentru calculii de CBP din cauza aerului duodenal.\n\nAproximativ jumătate dintre calculii veziculari sunt radioopaci pe radiografia abdominală simplă — Incorect: Doar 10–15% dintre calculii veziculari conțin suficient calciu pentru a fi radioopaci.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 245, Examinare imagistică — Ecografie (pagini PDF: 157).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    245
   ],
   "pdfPages": [
    157
   ],
   "section": "Examinare imagistică — Ecografie"
  },
  "learningObjective": "Aplicarea performanței ecografice (95%, 3 mm, 7 mm) și a limitelor pentru coledocolitiază și radioopacitate.",
  "optionRationales": [
   "Sensibilitatea și specificitatea de 95% sunt citate explicit.",
   "Pragul de 3 mm este menționat.",
   "Diametrul >7 mm definește dilatația căii biliare.",
   "Ecografia este mai puțin utilă pentru calculii de CBP din cauza aerului duodenal.",
   "Doar 10–15% dintre calculii veziculari conțin suficient calciu pentru a fi radioopaci."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Trei praguri numerice corecte față de două supraestimări clasice (CBP vizibil, radioopacitate 50%)."
  },
  "textbookExpressions": [
   "sunt de 95%",
   ">7 mm"
  ]
 },
 {
  "id": "biliar-adv-003",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Scintigrafia biliară HIDA în colecistita acută:",
  "options": [
   "Vizualizarea căii biliare principale și a duodenului, fără vizualizarea colecistului după 4 ore, indică obstrucția canalului cistic",
   "Sensibilitatea este de 95–97%, iar specificitatea de 90–97%",
   "Este investigația de elecție pentru identificarea calculilor veziculari și ai CBP",
   "Colecistul normal se vizualizează după 4 ore, nu în 30 de minute",
   "Rezultate fals pozitive nu sunt descrise la pacienții cu nutriție parenterală sau hepatită"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Vizualizarea căii biliare principale și a duodenului, fără vizualizarea colecistului după 4 ore, indică obstrucția canalului cistic — Corect: Criteriul CBP+duoden vizibile, colecist absent la 4 ore, este explicit pentru obstrucția cisticului.\n\nSensibilitatea este de 95–97%, iar specificitatea de 90–97% — Corect: Intervalele 95–97% și 90–97% sunt citate.\n\nEste investigația de elecție pentru identificarea calculilor veziculari și ai CBP — Incorect: HIDA nu este utilă în identificarea calculilor veziculari sau ai CBP.\n\nColecistul normal se vizualizează după 4 ore, nu în 30 de minute — Incorect: Colecistul normal este vizualizat în 30 de minute de la injectare.\n\nRezultate fals pozitive nu sunt descrise la pacienții cu nutriție parenterală sau hepatită — Incorect: Rezultate fals pozitive pot apărea la nutriție parenterală sau hepatită.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 246, Scintigrafia biliară HIDA (pagini PDF: 158).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    246
   ],
   "pdfPages": [
    158
   ],
   "section": "Scintigrafia biliară HIDA"
  },
  "learningObjective": "Interpretarea nevizualizării colecistului la 4 ore ca obstrucție cistică și recunoașterea limitelor HIDA pentru litiază.",
  "optionRationales": [
   "Criteriul CBP+duoden vizibile, colecist absent la 4 ore, este explicit pentru obstrucția cisticului.",
   "Intervalele 95–97% și 90–97% sunt citate.",
   "HIDA nu este utilă în identificarea calculilor veziculari sau ai CBP.",
   "Colecistul normal este vizualizat în 30 de minute de la injectare.",
   "Rezultate fals pozitive pot apărea la nutriție parenterală sau hepatită."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează timing-ul vizualizării normale (30 min vs 4 h) și atribuie HIDA un rol diagnostic pe care textul i-l neagă."
  },
  "textbookExpressions": [
   "după 4 ore",
   "95-97%"
  ]
 },
 {
  "id": "biliar-adv-004",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Colangita acută și litiaza coledociană se caracterizează prin:",
  "options": [
   "Triada Charcot include icter, durere în hipocondrul drept și febră asociată cu frisoane",
   "Pentada Reynolds adaugă hipotensiune și stare de confuzie psihică",
   "Colecistita acută diferă de colangita acută prin absența obstrucției biliare și a icterului",
   "Aproximativ 50% dintre pacienții cu litiază coledociană pot rămâne asimptomatici",
   "Calculii din CBP sunt vizualizați ecografic în marea majoritate a cazurilor"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Triada Charcot include icter, durere în hipocondrul drept și febră asociată cu frisoane — Corect: Cele trei elemente ale triadei Charcot sunt enumerate.\n\nPentada Reynolds adaugă hipotensiune și stare de confuzie psihică — Corect: Hipotensiunea și confuzia completează pentada Reynolds.\n\nColecistita acută diferă de colangita acută prin absența obstrucției biliare și a icterului — Corect: Deosebirea prin absența obstrucției și a icterului este explicită.\n\nAproximativ 50% dintre pacienții cu litiază coledociană pot rămâne asimptomatici — Corect: Proporția de circa 50% asimptomatici este citată.\n\nCalculii din CBP sunt vizualizați ecografic în marea majoritate a cazurilor — Incorect: De cele mai multe ori, calculii din CBP nu pot fi vizualizați ecografic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 249, Litiaza coledociană și colangita acută (pagini PDF: 161).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    249
   ],
   "pdfPages": [
    161
   ],
   "section": "Litiaza coledociană și colangita acută"
  },
  "learningObjective": "Diferențierea triadei Charcot de pentada Reynolds și a colangitei de colecistită, cu recunoașterea limitei ecografiei pentru CBP.",
  "optionRationales": [
   "Cele trei elemente ale triadei Charcot sunt enumerate.",
   "Hipotensiunea și confuzia completează pentada Reynolds.",
   "Deosebirea prin absența obstrucției și a icterului este explicită.",
   "Proporția de circa 50% asimptomatici este citată.",
   "De cele mai multe ori, calculii din CBP nu pot fi vizualizați ecografic."
  ],
  "difficulty": {
   "score": 9,
   "kind": "editorial-estimate",
   "reason": "Cere harta Charcot versus Reynolds versus colecistită, cu un distractor care supraestimează vizibilitatea ecografică a CBP."
  },
  "textbookExpressions": [
   "Triada Charcot",
   "pentada Reynold"
  ]
 },
 {
  "id": "biliar-adv-005",
  "topicId": "biliar",
  "type": "CM",
  "stem": "În pancreatita acută biliară se recomandă:",
  "options": [
   "Calculii biliari cauzează circa 40% din pancreatite (mai ales la femei), iar alcoolul circa 40% (mai ales la bărbați)",
   "Fără colecistectomie, până la 60% dintre pacienți recidivează în decurs de 6 luni",
   "În formele ușoare sau moderate, colecistectomia laparoscopică se poate efectua în primele 48–72 de ore de la internare",
   "Antibioterapia se administrează de rutină în toate formele ușoare, independent de complicațiile septice",
   "Colecistectomia trebuie amânată 6 luni după orice episod ușor, pentru a permite vindecarea pancreatică"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Calculii biliari cauzează circa 40% din pancreatite (mai ales la femei), iar alcoolul circa 40% (mai ales la bărbați) — Corect: Proporțiile 40% litiază și 40% alcool, cu predilecție de sex, sunt explicite.\n\nFără colecistectomie, până la 60% dintre pacienți recidivează în decurs de 6 luni — Corect: Recidiva de până la 60% în 6 luni fără colecistectomie este citată.\n\nÎn formele ușoare sau moderate, colecistectomia laparoscopică se poate efectua în primele 48–72 de ore de la internare — Corect: Fereastra 48–72 de ore pentru forme ușoare/moderate este menționată.\n\nAntibioterapia se administrează de rutină în toate formele ușoare, independent de complicațiile septice — Incorect: Antibioticele sunt rezervate formelor severe și complicațiilor septice, nu formelor ușoare de rutină.\n\nColecistectomia trebuie amânată 6 luni după orice episod ușor, pentru a permite vindecarea pancreatică — Incorect: Amânarea este justificată în pancreatita severă, nu după orice episod ușor.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 250, Pancreatită acută biliară (pagini PDF: 162).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    250
   ],
   "pdfPages": [
    162
   ],
   "section": "Pancreatită acută biliară"
  },
  "learningObjective": "Aplicarea etiologiei 40/40, a recurenței de 60% fără colecistectomie și a ferestrei 48–72 de ore pentru colecistectomie precoce.",
  "optionRationales": [
   "Proporțiile 40% litiază și 40% alcool, cu predilecție de sex, sunt explicite.",
   "Recidiva de până la 60% în 6 luni fără colecistectomie este citată.",
   "Fereastra 48–72 de ore pentru forme ușoare/moderate este menționată.",
   "Antibioticele sunt rezervate formelor severe și complicațiilor septice, nu formelor ușoare de rutină.",
   "Amânarea este justificată în pancreatita severă, nu după orice episod ușor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confruntă fereastra precoce 48–72 h cu falsa amânare de 6 luni și cu antibioterapia neselectivă."
  },
  "textbookExpressions": [
   "calculi biliari (40%",
   "până la 60%"
  ]
 },
 {
  "id": "biliar-adv-006",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Ileusul biliar se caracterizează prin:",
  "options": [
   "Reprezintă sub 1% din toate cazurile de ocluzie intestinală",
   "Raportul femei:bărbați este de 3,5:1",
   "Calculul se impactează de obicei în jejunul proximal, nu în apropierea valvei ileocecale",
   "Aerul în arborele biliar lipsește din tabloul radiologic tipic",
   "CT-ul cu substanță de contrast orală este inferior radiografiei simple pentru diagnostic"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Reprezintă sub 1% din toate cazurile de ocluzie intestinală — Corect: Textul citează <1% din ocluziile intestinale.\n\nRaportul femei:bărbați este de 3,5:1 — Corect: Raportul 3,5:1 este explicit.\n\nCalculul se impactează de obicei în jejunul proximal, nu în apropierea valvei ileocecale — Incorect: Impactarea este imediat proximal de valva ileocecală, cea mai îngustă porțiune.\n\nAerul în arborele biliar lipsește din tabloul radiologic tipic — Incorect: Pacienții se prezintă cu ocluzie și aer în arborele biliar.\n\nCT-ul cu substanță de contrast orală este inferior radiografiei simple pentru diagnostic — Incorect: CT-ul cu contrast oral este investigația de elecție, nu inferioară radiografiei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 250, Ileusul biliar (pagini PDF: 162).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    250
   ],
   "pdfPages": [
    162
   ],
   "section": "Ileusul biliar"
  },
  "learningObjective": "Recunoașterea rarității ileusului biliar și a predominanței feminine, față de locul clasic de impactare și aerobilie.",
  "optionRationales": [
   "Textul citează <1% din ocluziile intestinale.",
   "Raportul 3,5:1 este explicit.",
   "Impactarea este imediat proximal de valva ileocecală, cea mai îngustă porțiune.",
   "Pacienții se prezintă cu ocluzie și aer în arborele biliar.",
   "CT-ul cu contrast oral este investigația de elecție, nu inferioară radiografiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută locul de impactare (VIC versus jejun) și neagă aerobilia, pe două cifre epidemiologice memorabile."
  },
  "textbookExpressions": [
   "3,5: 1",
   "valva ileocecală"
  ]
 },
 {
  "id": "biliar-adv-007",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Anatomia extrahepatică relevantă chirurgical include:",
  "options": [
   "Colecistul are circa 10 × 5 cm, conține circa 50 mL de bilă destins și este format din fund, corp și col",
   "Canalul cistic prezintă valvele spiralate Heister; în ligamentul hepatoduodenal, CBP e la dreapta, artera hepatică proprie la stânga, vena portă posterior",
   "Triunghiul Calot este delimitat superior de marginea inferioară a ficatului, medial de hepaticul comun, lateral de cistic",
   "Artera cistică se desprinde din artera hepatică stângă, în afara triunghiului Calot",
   "Sfincterul Oddi lipsește, fluxul biliar fiind nereglementat la ampula Vater"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Colecistul are circa 10 × 5 cm, conține circa 50 mL de bilă destins și este format din fund, corp și col — Corect: Dimensiunile 10 × 5 cm, 50 mL și cele trei porțiuni sunt explicite.\n\nCanalul cistic prezintă valvele spiralate Heister; în ligamentul hepatoduodenal, CBP e la dreapta, artera hepatică proprie la stânga, vena portă posterior — Corect: Heister și ordinea CBP–arteră–portă sunt citate.\n\nTriunghiul Calot este delimitat superior de marginea inferioară a ficatului, medial de hepaticul comun, lateral de cistic — Corect: Cele trei limite ale Calot sunt enumerate.\n\nArtera cistică se desprinde din artera hepatică stângă, în afara triunghiului Calot — Incorect: Artera cistică se desprinde din hepatică dreaptă, în Calot.\n\nSfincterul Oddi lipsește, fluxul biliar fiind nereglementat la ampula Vater — Incorect: Sfincterul Oddi manșonează canalul comun la ampula Vater.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 242, Anatomie — Calot, Heister, triadă portală (pagini PDF: 154).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    242
   ],
   "pdfPages": [
    154
   ],
   "section": "Anatomie — Calot, Heister, triadă portală"
  },
  "learningObjective": "Recunoașterea dimensiunilor colecistului, a triadei din ligamentul hepatoduodenal și a limitelor Calot.",
  "optionRationales": [
   "Dimensiunile 10 × 5 cm, 50 mL și cele trei porțiuni sunt explicite.",
   "Heister și ordinea CBP–arteră–portă sunt citate.",
   "Cele trei limite ale Calot sunt enumerate.",
   "Artera cistică se desprinde din hepatică dreaptă, în Calot.",
   "Sfincterul Oddi manșonează canalul comun la ampula Vater."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută cistica pe hepatică stângă și anulează Oddi, două repere din același paragraf."
  },
  "textbookExpressions": [
   "triunghiul Calot",
   "valvele spiralate"
  ]
 },
 {
  "id": "biliar-adv-008",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Epidemiologia litiazei biliare:",
  "options": [
   "Aproximativ 15% dintre adulți au calculi; femeile sunt afectate de circa 3 ori mai frecvent decât bărbații",
   "Nativii americani: peste 50% dintre bărbați și 80% dintre femei au calculi micști până la 60 de ani",
   "Obezitatea, multiparitatea, estrogenii, scăderea ponderală rapidă, NPT prelungită și Crohn-ul ileal predispun la calculi",
   "Pacienții cu boli hemolitice și ciroză alcoolică sunt predispuși la calculi pigmentari",
   "Calculii pigmentari sunt tipici obezității, nu hemolizei sau cirozei"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Aproximativ 15% dintre adulți au calculi; femeile sunt afectate de circa 3 ori mai frecvent decât bărbații — Corect: 15% și raportul de circa 3 ori sunt explicite.\n\nNativii americani: peste 50% dintre bărbați și 80% dintre femei au calculi micști până la 60 de ani — Corect: Cifrele 50%/80% la nativi până la 60 de ani sunt citate.\n\nObezitatea, multiparitatea, estrogenii, scăderea ponderală rapidă, NPT prelungită și Crohn-ul ileal predispun la calculi — Corect: Lista de factori (obezitate, paritate, NPT, Crohn) este enumerată.\n\nPacienții cu boli hemolitice și ciroză alcoolică sunt predispuși la calculi pigmentari — Corect: Hemoliza și ciroza alcoolică predispun la pigmentari.\n\nCalculii pigmentari sunt tipici obezității, nu hemolizei sau cirozei — Incorect: Obezitatea predispune la calculi de colesterol, nu pigmentari.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 242, Epidemiologia calculilor biliari (pagini PDF: 154).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    242
   ],
   "pdfPages": [
    154
   ],
   "section": "Epidemiologia calculilor biliari"
  },
  "learningObjective": "Aplicarea prevalenței de 15%, a raportului 3:1, a predilecției la nativi și a pigmentarilor din hemoliză/ciroză.",
  "optionRationales": [
   "15% și raportul de circa 3 ori sunt explicite.",
   "Cifrele 50%/80% la nativi până la 60 de ani sunt citate.",
   "Lista de factori (obezitate, paritate, NPT, Crohn) este enumerată.",
   "Hemoliza și ciroza alcoolică predispun la pigmentari.",
   "Obezitatea predispune la calculi de colesterol, nu pigmentari."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează predilecția de sex și mută pigmentarii de pe hemoliză pe obezitate."
  },
  "textbookExpressions": [
   "15% dintre adulţi",
   "de circa 3 ori"
  ]
 },
 {
  "id": "biliar-adv-009",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Tipurile de calculi biliari se caracterizează prin:",
  "options": [
   "Calculii micști (colesterol, acizi biliari, lecitină) reprezintă circa 75% în emisfera vestică",
   "Calculii pigmentari negri ≈20%, se formează în bila sterilă din colecist, asociați hemolizei și cirozei",
   "Calculii pigmentari bruni apar în bila infectată, primitiv în căi, sunt moi și adesea radioopaci",
   "Calculii micști sunt 20%, pigmentarii negri 75%",
   "Sludge-ul biliar nu conține cristale de colesterol și nu precede calculii"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Calculii micști (colesterol, acizi biliari, lecitină) reprezintă circa 75% în emisfera vestică — Corect: Proporția de circa 75% micști este explicită.\n\nCalculii pigmentari negri ≈20%, se formează în bila sterilă din colecist, asociați hemolizei și cirozei — Corect: 20%, bila sterilă, hemoliza/ciroza definesc negrii.\n\nCalculii pigmentari bruni apar în bila infectată, primitiv în căi, sunt moi și adesea radioopaci — Corect: Brunii infecțioși, moi, radioopaci, primitivi în căi sunt descriși.\n\nCalculii micști sunt 20%, pigmentarii negri 75% — Incorect: Cifrele 75% și 20% sunt inversate.\n\nSludge-ul biliar nu conține cristale de colesterol și nu precede calculii — Incorect: Sludge-ul conține mucoproteine, cristale de colesterol și bilirubinat de calciu și poate precede calculii.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 243, Patogenia litiazei — Micști, pigmentari, sludge (pagini PDF: 155).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    243
   ],
   "pdfPages": [
    155
   ],
   "section": "Patogenia litiazei — Micști, pigmentari, sludge"
  },
  "learningObjective": "Contrastarea 75% micști / 20% negri / bruni infecțioși și a sludge-ului ca precursor.",
  "optionRationales": [
   "Proporția de circa 75% micști este explicită.",
   "20%, bila sterilă, hemoliza/ciroza definesc negrii.",
   "Brunii infecțioși, moi, radioopaci, primitivi în căi sunt descriși.",
   "Cifrele 75% și 20% sunt inversate.",
   "Sludge-ul conține mucoproteine, cristale de colesterol și bilirubinat de calciu și poate precede calculii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează 75% micști cu 20% pigmentari negri, două procente din același paragraf."
  },
  "textbookExpressions": [
   "circa 75%",
   "aproximativ 20%"
  ]
 },
 {
  "id": "biliar-adv-010",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Colica biliară se deosebește de colecistita acută prin:",
  "options": [
   "Durere viscerală surdă, 1–4 ore, prin contracție contra unui calcul impactat în cistic, fără inflamație sau infecție",
   "Pacientul cu colică este neliniștit; cel cu colecistită tinde să nu se miște, orice mișcare accentuând durerea somatică",
   "Colecistita menține durerea peste 3–4 ore, zile, cu febră posibilă; febra înaltă evocă gangrenă sau angiocolită",
   "Febra înaltă este markerul colicii necomplicate, fără inflamație",
   "Colica asociază apărare și decompresie pozitivă încă din primul episod, identic peritonitei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Durere viscerală surdă, 1–4 ore, prin contracție contra unui calcul impactat în cistic, fără inflamație sau infecție — Corect: Mecanismul și fereastra 1–4 ore fără inflamație sunt explicite.\n\nPacientul cu colică este neliniștit; cel cu colecistită tinde să nu se miște, orice mișcare accentuând durerea somatică — Corect: Contrastul neliniștit versus imobil este citat.\n\nColecistita menține durerea peste 3–4 ore, zile, cu febră posibilă; febra înaltă evocă gangrenă sau angiocolită — Corect: Durata prelungită, febra și semnificația febrei înalte sunt descrise.\n\nFebra înaltă este markerul colicii necomplicate, fără inflamație — Incorect: Febra însoțește colecistita/angiocolita, nu colica.\n\nColica asociază apărare și decompresie pozitivă încă din primul episod, identic peritonitei — Incorect: Apărarea și decompresia apar când inflamația atinge peritoneul parietal, în colecistită.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 244, Colică versus colecistită (pagini PDF: 156).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    244
   ],
   "pdfPages": [
    156
   ],
   "section": "Colică versus colecistită"
  },
  "learningObjective": "Contrastarea duratei 1–4 ore (viscerală, fără inflamație) cu durerea >3–4 ore, somatică, febrilă a colecistitei.",
  "optionRationales": [
   "Mecanismul și fereastra 1–4 ore fără inflamație sunt explicite.",
   "Contrastul neliniștit versus imobil este citat.",
   "Durata prelungită, febra și semnificația febrei înalte sunt descrise.",
   "Febra însoțește colecistita/angiocolita, nu colica.",
   "Apărarea și decompresia apar când inflamația atinge peritoneul parietal, în colecistită."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie febra înaltă colicii necomplicate și peritonismul primului episod de colică."
  },
  "textbookExpressions": [
   "1-4 ore",
   "3-4 ore"
  ]
 },
 {
  "id": "biliar-adv-011",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Probele hepatice în obstacolul extrahepatic se caracterizează prin:",
  "options": [
   "Crește bilirubina conjugată (directă); FA și GGT cresc mai mult decât AST/ALT, inversul sugerând hepatită",
   "FA este sintetizată de epiteliul căilor; izoforma hepatobiliară rezistă la temperaturi ridicate, spre deosebire de cea osoasă",
   "În obstacol incomplet, FA poate fi crescută cu bilirubină serică normală",
   "În obstacol, urobilinogenul urinar crește, bilirubina conjugată fiind absentă din urină",
   "INR-ul scade în icterul obstructiv, vitamina K absorbindu-se mai bine"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Crește bilirubina conjugată (directă); FA și GGT cresc mai mult decât AST/ALT, inversul sugerând hepatită — Corect: Bilirubina directă și ierarhia FA/GGT versus AST/ALT sunt explicite.\n\nFA este sintetizată de epiteliul căilor; izoforma hepatobiliară rezistă la temperaturi ridicate, spre deosebire de cea osoasă — Corect: Originea epitelială și distincția termică față de FA osoasă sunt citate.\n\nÎn obstacol incomplet, FA poate fi crescută cu bilirubină serică normală — Corect: Obstacolul incomplet cu FA crescută și bilirubină normală este descris.\n\nÎn obstacol, urobilinogenul urinar crește, bilirubina conjugată fiind absentă din urină — Incorect: Obstacolul reduce urobilinogenul urinar; bilirubina conjugată apare în urină.\n\nINR-ul scade în icterul obstructiv, vitamina K absorbindu-se mai bine — Incorect: INR-ul crește prin malabsorbția vitaminei K.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 244, Analize de laborator — Colestază versus hepatită (pagini PDF: 156).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    244
   ],
   "pdfPages": [
    156
   ],
   "section": "Analize de laborator — Colestază versus hepatită"
  },
  "learningObjective": "Aplicarea ierarhiei FA/GGT > transaminaze, a stabilității termice a FA hepatice și a FA crescute cu bilirubină normală în obstacol incomplet.",
  "optionRationales": [
   "Bilirubina directă și ierarhia FA/GGT versus AST/ALT sunt explicite.",
   "Originea epitelială și distincția termică față de FA osoasă sunt citate.",
   "Obstacolul incomplet cu FA crescută și bilirubină normală este descris.",
   "Obstacolul reduce urobilinogenul urinar; bilirubina conjugată apare în urină.",
   "INR-ul crește prin malabsorbția vitaminei K."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează urobilinogenul/bilirubina urinară și direcția INR-ului din icterul obstructiv."
  },
  "textbookExpressions": [
   "gama-glutamil transferazei",
   "Fosfataza alcalină"
  ]
 },
 {
  "id": "biliar-adv-012",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Radiografia abdominală simplă în patologia biliară poate arăta:",
  "options": [
   "Aer în calea biliară, prin fistulă bilio-digestivă sau comunicare iatrogenă",
   "Aer în lumenul sau peretele vezicii, în colecistita acută emfizematoasă",
   "Doar 10–15% dintre calculii veziculari sunt suficient de calcificați pentru a fi radioopaci",
   "Aproximativ 80% dintre calculi sunt radioopaci, aerobilia fiind imposibilă",
   "Colecistita emfizematoasă nu produce aer parietal, CT-ul fiind superfluu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Aer în calea biliară, prin fistulă bilio-digestivă sau comunicare iatrogenă — Corect: Aerobilia prin fistulă sau anastomoză este citată.\n\nAer în lumenul sau peretele vezicii, în colecistita acută emfizematoasă — Corect: Aerul luminal/parietal definește forma emfizematoasă.\n\nDoar 10–15% dintre calculii veziculari sunt suficient de calcificați pentru a fi radioopaci — Corect: 10–15% radioopaci sunt cifra explicită.\n\nAproximativ 80% dintre calculi sunt radioopaci, aerobilia fiind imposibilă — Incorect: Doar 10–15%, nu 80%, sunt radioopaci.\n\nColecistita emfizematoasă nu produce aer parietal, CT-ul fiind superfluu — Incorect: Emfizematoasa se vede tocmai prin aer parietal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 245, Radiografia abdominală simplă (pagini PDF: 157).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    245
   ],
   "pdfPages": [
    157
   ],
   "section": "Radiografia abdominală simplă"
  },
  "learningObjective": "Recunoașterea aerobiliei, a aerului parietal emfizematos și a radioopacității de 10–15%.",
  "optionRationales": [
   "Aerobilia prin fistulă sau anastomoză este citată.",
   "Aerul luminal/parietal definește forma emfizematoasă.",
   "10–15% radioopaci sunt cifra explicită.",
   "Doar 10–15%, nu 80%, sunt radioopaci.",
   "Emfizematoasa se vede tocmai prin aer parietal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Ridică radioopacitatea de la 10–15% la 80% și neagă aerobilia, două semne din același paragraf."
  },
  "textbookExpressions": [
   "10-15%",
   "colecistitei acute emfizematoase"
  ]
 },
 {
  "id": "biliar-adv-013",
  "topicId": "biliar",
  "type": "CM",
  "stem": "MRCP în patologia biliară:",
  "options": [
   "Selectează imaginile de rezonanță ale arborelui biliar și ale ductelor pancreatice, utilă pentru calculii de CBP și alte anomalii",
   "Este de obicei metoda inițială înainte de PTC sau ERCP; avantajele sunt absența invazivității și a iradierii",
   "Înlocuiește ecografia ca investigație de primă intenție în colica biliară necomplicată",
   "Implică iradiere similară CT-ului și este mai invazivă decât ERCP",
   "Nu vizualizează CBP, fiind rezervată doar chisturilor renale"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Selectează imaginile de rezonanță ale arborelui biliar și ale ductelor pancreatice, utilă pentru calculii de CBP și alte anomalii — Corect: Utilitatea pentru CBP și anomalii este explicită.\n\nEste de obicei metoda inițială înainte de PTC sau ERCP; avantajele sunt absența invazivității și a iradierii — Corect: Rolul preliminar și absența iradierii/invazivității sunt citate.\n\nÎnlocuiește ecografia ca investigație de primă intenție în colica biliară necomplicată — Incorect: Ecografia rămâne explorarea inițială de elecție în colică.\n\nImplică iradiere similară CT-ului și este mai invazivă decât ERCP — Incorect: MRCP nu iradiază și nu este mai invazivă decât ERCP.\n\nNu vizualizează CBP, fiind rezervată doar chisturilor renale — Incorect: MRCP este utilă tocmai pentru CBP.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 245, MRCP (pagini PDF: 157).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    245
   ],
   "pdfPages": [
    157
   ],
   "section": "MRCP"
  },
  "learningObjective": "Poziționarea MRCP ca metodă neinvazivă, neiradiantă, de obicei preliminară ERCP/PTC, nu ca prim test în colică.",
  "optionRationales": [
   "Utilitatea pentru CBP și anomalii este explicită.",
   "Rolul preliminar și absența iradierii/invazivității sunt citate.",
   "Ecografia rămâne explorarea inițială de elecție în colică.",
   "MRCP nu iradiază și nu este mai invazivă decât ERCP.",
   "MRCP este utilă tocmai pentru CBP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune MRCP înaintea ecografiei în colică și îi atribuie iradiere, două erori de ierarhie imagistică."
  },
  "textbookExpressions": [
   "MRCP",
   "nu implică utilizarea radiaţiilor"
  ]
 },
 {
  "id": "biliar-adv-014",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Tratamentul colicii biliare simptomatice include:",
  "options": [
   "Colecistectomia laparoscopică electivă la majoritatea pacienților cu litiază simptomatică",
   "Dizolvarea (acid ursodeoxicolic ≥6 luni, până la 1 an) este o opțiune la circa 15% care nu tolerează sau refuză operația",
   "Rata de dizolvare este 90% sub 5 mm și 60% sub 10 mm, dar recurența este 50% la 5 ani de la întrerupere",
   "Ursodeoxicolicul dizolvă 90% din calculii de 3 cm în 2 săptămâni, fără recurență",
   "ESWL este prima linie la toți pacienții tineri, fără risc de pancreatită"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Colecistectomia laparoscopică electivă la majoritatea pacienților cu litiază simptomatică — Corect: Laparoscopia electivă este indicația la majoritate.\n\nDizolvarea (acid ursodeoxicolic ≥6 luni, până la 1 an) este o opțiune la circa 15% care nu tolerează sau refuză operația — Corect: Opțiunea de dizolvare la 15% este citată.\n\nRata de dizolvare este 90% sub 5 mm și 60% sub 10 mm, dar recurența este 50% la 5 ani de la întrerupere — Corect: Cifrele 90%/60% și recurența 50% la 5 ani sunt explicite.\n\nUrsodeoxicolicul dizolvă 90% din calculii de 3 cm în 2 săptămâni, fără recurență — Incorect: 5 mm, nu 3 cm, și durata de luni, nu 2 săptămâni; recurența există.\n\nESWL este prima linie la toți pacienții tineri, fără risc de pancreatită — Incorect: ESWL are utilizare limitată prin risc de pancreatită și calculi noi.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 249, Colica biliară — Tratament (pagini PDF: 161).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    249
   ],
   "pdfPages": [
    161
   ],
   "section": "Colica biliară — Tratament"
  },
  "learningObjective": "Contrastarea colecistectomiei laparoscopice ca standard cu limitele dizolvării (15%, recurență 50%/5 ani).",
  "optionRationales": [
   "Laparoscopia electivă este indicația la majoritate.",
   "Opțiunea de dizolvare la 15% este citată.",
   "Cifrele 90%/60% și recurența 50% la 5 ani sunt explicite.",
   "5 mm, nu 3 cm, și durata de luni, nu 2 săptămâni; recurența există.",
   "ESWL are utilizare limitată prin risc de pancreatită și calculi noi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Supraestimează dizolvarea (3 cm în 2 săptămâni) și reabilitează ESWL ca primă linie."
  },
  "textbookExpressions": [
   "Acidul ursodeoxicolic",
   "recurenţă de 50%"
  ]
 },
 {
  "id": "biliar-adv-015",
  "topicId": "biliar",
  "type": "CS",
  "stem": "Sindromul Mirizzi constă în:",
  "options": [
   "Un calcul mare din veziculă care comprimă canalul hepatic comun, producând icter obstructiv",
   "O fistulă colecisto-colică cu aerobilie, fără obstacol pe hepaticul comun",
   "Impactarea ileală a unui calcul, identică ileusului biliar",
   "O tumoră Klatskin perihilară, fără calcul vezicular",
   "O colică de 1–4 ore fără icter și fără obstacol"
  ],
  "correct": [
   0
  ],
  "explanation": "Un calcul mare din veziculă care comprimă canalul hepatic comun, producând icter obstructiv — Corect: Definiția (calcul vezicular mare, compresie de hepatic comun, icter) este explicită.\n\nO fistulă colecisto-colică cu aerobilie, fără obstacol pe hepaticul comun — Incorect: Fistula colecisto-enterică descrie ileusul biliar, nu Mirizzi.\n\nImpactarea ileală a unui calcul, identică ileusului biliar — Incorect: Impactarea ileală este ileusul biliar.\n\nO tumoră Klatskin perihilară, fără calcul vezicular — Incorect: Klatskin este colangiocarcinom perihilar.\n\nO colică de 1–4 ore fără icter și fără obstacol — Incorect: Colica nu produce icter prin compresie de hepatic comun.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 249, Sindromul Mirizzi (pagini PDF: 161).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    249
   ],
   "pdfPages": [
    161
   ],
   "section": "Sindromul Mirizzi"
  },
  "learningObjective": "Diferențierea compresiei hepaticului comun de către un calcul vezicular mare de ileus, Klatskin și colică.",
  "optionRationales": [
   "Definiția (calcul vezicular mare, compresie de hepatic comun, icter) este explicită.",
   "Fistula colecisto-enterică descrie ileusul biliar, nu Mirizzi.",
   "Impactarea ileală este ileusul biliar.",
   "Klatskin este colangiocarcinom perihilar.",
   "Colica nu produce icter prin compresie de hepatic comun."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă Mirizzi cu ileusul biliar și cu tumora Klatskin, trei cauze de icter din același capitol."
  },
  "textbookExpressions": [
   "Sindromul Mirizzi",
   "canalul hepatic comun"
  ]
 },
 {
  "id": "biliar-adv-016",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Colangita acută supurată, în conduita de urgență:",
  "options": [
   "Tratamentul inițial: reechilibrare, UTI, hemoculturi, antibiotice cu spectru pe Gram-negative; coagulopatia se corectează cu vitamina K sau PPC înaintea gestului invaziv",
   "Peste 70% răspund; după recuperare se face colecistectomie; non-responderii cer decompresie urgentă (ERCP, tub transhepatic sau chirurgie deschisă)",
   "ERCP cu sfincterotomie extrage calculii din CBP cu succes >90% și complicații circa 5–10%",
   "Decompresia se amână 6 săptămâni la toți, antibioticele fiind suficiente în șoc",
   "Succesul ERCP este sub 20%, sfincterotomia fiind abandonată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tratamentul inițial: reechilibrare, UTI, hemoculturi, antibiotice cu spectru pe Gram-negative; coagulopatia se corectează cu vitamina K sau PPC înaintea gestului invaziv — Corect: Resuscitarea, UTI, spectrul Gram-negativ și corectarea coagulării sunt explicite.\n\nPeste 70% răspund; după recuperare se face colecistectomie; non-responderii cer decompresie urgentă (ERCP, tub transhepatic sau chirurgie deschisă) — Corect: 70%, colecistectomia ulterioară și căile de decompresie sunt citate.\n\nERCP cu sfincterotomie extrage calculii din CBP cu succes >90% și complicații circa 5–10% — Corect: Succesul >90% și complicațiile 5–10% sunt de pe pagina următoare.\n\nDecompresia se amână 6 săptămâni la toți, antibioticele fiind suficiente în șoc — Incorect: Decompresia nu se amână în non-responderi.\n\nSuccesul ERCP este sub 20%, sfincterotomia fiind abandonată — Incorect: Succesul ERCP este >90%, nu sub 20%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 249, 250, Colangita supurată — Decompresie (pagini PDF: 161, 162).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    249,
    250
   ],
   "pdfPages": [
    161,
    162
   ],
   "section": "Colangita supurată — Decompresie"
  },
  "learningObjective": "Aplicarea algoritmului reechilibrare → 70% răspuns → colecistectomie versus decompresie urgentă, plus performanța ERCP.",
  "optionRationales": [
   "Resuscitarea, UTI, spectrul Gram-negativ și corectarea coagulării sunt explicite.",
   "70%, colecistectomia ulterioară și căile de decompresie sunt citate.",
   "Succesul >90% și complicațiile 5–10% sunt de pe pagina următoare.",
   "Decompresia nu se amână în non-responderi.",
   "Succesul ERCP este >90%, nu sub 20%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amână decompresia la non-responderi și coboară succesul ERCP de la >90% sub 20%."
  },
  "textbookExpressions": [
   "Peste 70%",
   ">90%"
  ]
 },
 {
  "id": "biliar-adv-017",
  "topicId": "biliar",
  "type": "CS",
  "stem": "Identificați afirmația corectă privind cancerul veziculei biliare:",
  "options": [
   "Diagnosticul preoperator corect se stabilește în doar 10% din cazuri; adenocarcinomul mucinos incipient, limitat la perete, descoperit după colecistectomie laparoscopică, are supraviețuire la 5 ani până la 80% cu colecistectomie și margini negative (inclusiv cisticul)",
   "Diagnosticul preoperator este corect în 90% din cazuri, colecistectomia laparoscopică fiind inutilă",
   "Supraviețuirea la 5 ani a formelor incipiente este <5%, identică tumorilor avansate",
   "Vezicula de porțelan nu are corelat imagistic, CT-ul fiind superfluu",
   "Limfadenectomia de hil este standardizată identic altor viscere, mezenterul fiind mobil"
  ],
  "correct": [
   0
  ],
  "explanation": "Diagnosticul preoperator corect se stabilește în doar 10% din cazuri; adenocarcinomul mucinos incipient, limitat la perete, descoperit după colecistectomie laparoscopică, are supraviețuire la 5 ani până la 80% cu colecistectomie și margini negative (inclusiv cisticul) — Corect: 10% diagnostic preoperator și 80% la 5 ani după colecistectomie cu margini negative sunt explicite.\n\nDiagnosticul preoperator este corect în 90% din cazuri, colecistectomia laparoscopică fiind inutilă — Incorect: 10%, nu 90%, este cifra de diagnostic preoperator.\n\nSupraviețuirea la 5 ani a formelor incipiente este <5%, identică tumorilor avansate — Incorect: <5% la 5 ani descrie tumorile avansate, nu incipientele.\n\nVezicula de porțelan nu are corelat imagistic, CT-ul fiind superfluu — Incorect: Calcificările difuze de veziculă de porțelan sunt un aspect ecografic sugestiv.\n\nLimfadenectomia de hil este standardizată identic altor viscere, mezenterul fiind mobil — Incorect: Limfadenectomiei de hil îi lipsește standardizarea.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 252, 253, Cancerul veziculei biliare (pagini PDF: 164, 165).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    252,
    253
   ],
   "pdfPages": [
    164,
    165
   ],
   "section": "Cancerul veziculei biliare"
  },
  "learningObjective": "Contrastarea diagnosticului preoperator de 10% cu supraviețuirea de 80% a formelor incipiente incidente.",
  "optionRationales": [
   "10% diagnostic preoperator și 80% la 5 ani după colecistectomie cu margini negative sunt explicite.",
   "10%, nu 90%, este cifra de diagnostic preoperator.",
   "<5% la 5 ani descrie tumorile avansate, nu incipientele.",
   "Calcificările difuze de veziculă de porțelan sunt un aspect ecografic sugestiv.",
   "Limfadenectomiei de hil îi lipsește standardizarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 10% (diagnostic preoperator) cu 80% (supraviețuire incipientă) și cu <5% (avansat)."
  },
  "textbookExpressions": [
   "l 0% din cazuri",
   "până la 80%"
  ]
 },
 {
  "id": "biliar-adv-018",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Colangiocarcinomul extrahepatic se caracterizează prin:",
  "options": [
   "Reprezintă cancerul de căi; extrahepaticul este de departe cel mai frecvent: 50% perihilar, 40% distal, intrahepaticul doar 10%",
   "Apare egal la ambele sexe, la 50–70 de ani; riscul e crescut în CSP (asociată CU), chisturi de coledoc, Opisthorchis/Clonorchis",
   "Icterul este progresiv, spre deosebire de icterul fluctuant al litiazei de CBP; angiocolita este rară",
   "Intrahepaticul reprezintă 80%, perihilarul fiind excepțional",
   "Icterul fluctuează identic coledocolitiazei, angiocolita fiind regula de prezentare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Reprezintă cancerul de căi; extrahepaticul este de departe cel mai frecvent: 50% perihilar, 40% distal, intrahepaticul doar 10% — Corect: Distribuția 50% perihilar / 40% distal / 10% intrahepatic este explicită.\n\nApare egal la ambele sexe, la 50–70 de ani; riscul e crescut în CSP (asociată CU), chisturi de coledoc, Opisthorchis/Clonorchis — Corect: Sexul egal, vârsta 50–70 și lista de risc (CSP, chisturi, trematode) sunt citate.\n\nIcterul este progresiv, spre deosebire de icterul fluctuant al litiazei de CBP; angiocolita este rară — Corect: Icterul progresiv versus fluctuant și raritatea angiocolitei sunt descrise.\n\nIntrahepaticul reprezintă 80%, perihilarul fiind excepțional — Incorect: Intrahepaticul este 10%, nu 80%.\n\nIcterul fluctuează identic coledocolitiazei, angiocolita fiind regula de prezentare — Incorect: Icterul nu fluctuează ca litiaza; angiocolita este rară.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 253, Colangiocarcinomul — Clasificare și risc (pagini PDF: 165).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    253
   ],
   "pdfPages": [
    165
   ],
   "section": "Colangiocarcinomul — Clasificare și risc"
  },
  "learningObjective": "Aplicarea distribuției 50/40/10 și a contrastului icter progresiv versus fluctuant litiazic.",
  "optionRationales": [
   "Distribuția 50% perihilar / 40% distal / 10% intrahepatic este explicită.",
   "Sexul egal, vârsta 50–70 și lista de risc (CSP, chisturi, trematode) sunt citate.",
   "Icterul progresiv versus fluctuant și raritatea angiocolitei sunt descrise.",
   "Intrahepaticul este 10%, nu 80%.",
   "Icterul nu fluctuează ca litiaza; angiocolita este rară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează 10% intrahepatic cu 80% și confundă icterul progresiv cu cel fluctuant litiazic."
  },
  "textbookExpressions": [
   "50% din cazuri",
   "40% din cazuri"
  ]
 },
 {
  "id": "biliar-adv-019",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Tumorile Klatskin (perihilare) și leziunile distale de CBP:",
  "options": [
   "Klatskin se tratează prin rezecție și hepatico-jejunoanastomoză Roux-en-Y, adesea cu rezecție hepatică; supraviețuirea la 5 ani după rezecția treimii medii ≈10%",
   "Leziunile distale rezecabile cer operație Whipple; supraviețuirea la 5 ani ≈12–25%",
   "Prognosticul global la 5 ani este doar 5–10%; chirurgia este unicul tratament curativ",
   "Stentarea înlocuiește Whipple ca tratament curativ al leziunilor distale rezecabile",
   "Rezecția intrahepatică obține margini negative la peste 90% dintre pacienți"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Klatskin se tratează prin rezecție și hepatico-jejunoanastomoză Roux-en-Y, adesea cu rezecție hepatică; supraviețuirea la 5 ani după rezecția treimii medii ≈10% — Corect: Rezecția plus Roux și cifra ≈10% sunt explicite.\n\nLeziunile distale rezecabile cer operație Whipple; supraviețuirea la 5 ani ≈12–25% — Corect: Whipple și intervalul 12–25% sunt citate.\n\nPrognosticul global la 5 ani este doar 5–10%; chirurgia este unicul tratament curativ — Corect: 5–10% global și unicitatea chirurgiei curative sunt enunțate.\n\nStentarea înlocuiește Whipple ca tratament curativ al leziunilor distale rezecabile — Incorect: Stentul este paliativ, nu curativ, pentru distalele nerezecabile.\n\nRezecția intrahepatică obține margini negative la peste 90% dintre pacienți — Incorect: Marginile negative intrahepatice se obțin la <30%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 253, Klatskin și Whipple (pagini PDF: 165).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    253
   ],
   "pdfPages": [
    165
   ],
   "section": "Klatskin și Whipple"
  },
  "learningObjective": "Diferențierea reconstrucției Roux pentru Klatskin de Whipple pentru distale, cu cifrele de supraviețuire 10% versus 12–25%.",
  "optionRationales": [
   "Rezecția plus Roux și cifra ≈10% sunt explicite.",
   "Whipple și intervalul 12–25% sunt citate.",
   "5–10% global și unicitatea chirurgiei curative sunt enunțate.",
   "Stentul este paliativ, nu curativ, pentru distalele nerezecabile.",
   "Marginile negative intrahepatice se obțin la <30%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă Whipple cu stentul palativ și supraestimează marginile intrahepatice de la <30% la 90%."
  },
  "textbookExpressions": [
   "tumori Klatskin",
   "operaţia Whipple"
  ]
 },
 {
  "id": "biliar-adv-020",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Chisturile coledociene congenitale:",
  "options": [
   "Sunt mai frecvente la femei (raport 4:1) și la populația asiatică",
   "Se recomandă rezecția pentru simptome și pentru riscul de colangiocarcinom, de 20–30 de ori mai mare decât în populația generală",
   "După rezecție se face hepatico-jejunoanastomoză Roux-en-Y; urmărirea continuă este importantă (stenoze, neoplazie)",
   "Raportul este 1:4 în favoarea bărbaților, rezecția fiind evitată din cauza riscului oncologic nul",
   "Anastomoza Roux este contraindicată, chistul lăsându-se pe loc"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sunt mai frecvente la femei (raport 4:1) și la populația asiatică — Corect: Raportul 4:1 și predilecția asiatică sunt explicite.\n\nSe recomandă rezecția pentru simptome și pentru riscul de colangiocarcinom, de 20–30 de ori mai mare decât în populația generală — Corect: Rezecția și riscul ×20–30 sunt citate.\n\nDupă rezecție se face hepatico-jejunoanastomoză Roux-en-Y; urmărirea continuă este importantă (stenoze, neoplazie) — Corect: Roux-en-Y și urmărirea pentru stenoze/neoplazie sunt descrise.\n\nRaportul este 1:4 în favoarea bărbaților, rezecția fiind evitată din cauza riscului oncologic nul — Incorect: Raportul este 4:1 femei, nu invers; riscul oncologic justifică rezecția.\n\nAnastomoza Roux este contraindicată, chistul lăsându-se pe loc — Incorect: Anastomoza Roux restabilește fluxul după rezecție.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 254, 253, Chisturile coledociene (pagini PDF: 166, 165).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    254,
    253
   ],
   "pdfPages": [
    166,
    165
   ],
   "section": "Chisturile coledociene"
  },
  "learningObjective": "Aplicarea predilecției feminine 4:1, a riscului oncologic ×20–30 și a reconstrucției Roux.",
  "optionRationales": [
   "Raportul 4:1 și predilecția asiatică sunt explicite.",
   "Rezecția și riscul ×20–30 sunt citate.",
   "Roux-en-Y și urmărirea pentru stenoze/neoplazie sunt descrise.",
   "Raportul este 4:1 femei, nu invers; riscul oncologic justifică rezecția.",
   "Anastomoza Roux restabilește fluxul după rezecție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează raportul 4:1 și anulează indicația oncologică de rezecție."
  },
  "textbookExpressions": [
   "4: 1",
   "20-30 de ori"
  ]
 },
 {
  "id": "biliar-adv-021",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Leziunile iatrogene de cale biliară se caracterizează prin:",
  "options": [
   "Aproximativ 75% apar după colecistectomie simplă, cu secțiune a căii și a vascularizației lângă ficat",
   "Incidența după laparoscopie (0,4–0,6%) este circa 4 ori mai mare decât după tehnica deschisă și e mai mare în colecistita acută decât în electiv",
   "Canalele accesorii <3 mm care drenează o porțiune mică pot fi ligaturate; altfel se convertește și se repară",
   "Leziunea <50% din circumferință, fără devascularizare, poate fi reparată primar, cu tub T decompresiv",
   "Orice leziune <50% cere Whipple de principiu, ligatura canalelor accesorii fiind interzisă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Aproximativ 75% apar după colecistectomie simplă, cu secțiune a căii și a vascularizației lângă ficat — Corect: 75% după colecistectomie simplă este explicit.\n\nIncidența după laparoscopie (0,4–0,6%) este circa 4 ori mai mare decât după tehnica deschisă și e mai mare în colecistita acută decât în electiv — Corect: 0,4–0,6% și factorul ×4, plus riscul din acut, sunt citate.\n\nCanalele accesorii <3 mm care drenează o porțiune mică pot fi ligaturate; altfel se convertește și se repară — Corect: Regula <3 mm pentru ligatură este enunțată.\n\nLeziunea <50% din circumferință, fără devascularizare, poate fi reparată primar, cu tub T decompresiv — Corect: Pragul <50% cu tub T este descris.\n\nOrice leziune <50% cere Whipple de principiu, ligatura canalelor accesorii fiind interzisă — Incorect: <50% fără devascularizare se repară primar, nu prin Whipple.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 254, Leziuni iatrogene de cale biliară (pagini PDF: 166).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    254
   ],
   "pdfPages": [
    166
   ],
   "section": "Leziuni iatrogene de cale biliară"
  },
  "learningObjective": "Aplicarea cifrelor 75% / 0,4–0,6% (×4) și a pragului de 50% circumferință pentru reparația primară versus Roux.",
  "optionRationales": [
   "75% după colecistectomie simplă este explicit.",
   "0,4–0,6% și factorul ×4, plus riscul din acut, sunt citate.",
   "Regula <3 mm pentru ligatură este enunțată.",
   "Pragul <50% cu tub T este descris.",
   "<50% fără devascularizare se repară primar, nu prin Whipple."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează pragul de 50% circumferință cu indicația de Whipple și ignoră regula celor 3 mm."
  },
  "textbookExpressions": [
   "0,4-0,6%",
   "<50% din circumferinţa"
  ]
 },
 {
  "id": "biliar-adv-022",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Scurgerea biliară postoperatorie precoce:",
  "options": [
   "Se manifestă prin durere, icter, bilă pe dren sau plagă, abdomen acut sau sepsis; US/CT caută bilomul",
   "Scurgerea minoră dintr-un canal accesoriu poate avea doar drenaj percutan; scurgerea din cistic se stentază prin ERCP",
   "Reconstrucția unei leziuni majore se amână până la cartografierea anatomiei, remisia sepsisului și scăderea inflamației de fistulă",
   "Reconstrucția majoră se face imediat, în sepsis, fără imagistică",
   "Bilomul se ignoră, ERCP fiind contraindicat în scurgerea din cistic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se manifestă prin durere, icter, bilă pe dren sau plagă, abdomen acut sau sepsis; US/CT caută bilomul — Corect: Tabloul clinic și bilomul imagistic sunt explicite.\n\nScurgerea minoră dintr-un canal accesoriu poate avea doar drenaj percutan; scurgerea din cistic se stentază prin ERCP — Corect: Cele două conduite (percutan versus stent) sunt distinse.\n\nReconstrucția unei leziuni majore se amână până la cartografierea anatomiei, remisia sepsisului și scăderea inflamației de fistulă — Corect: Amânarea reconstrucției majore până la controlul sepsisului este cerută.\n\nReconstrucția majoră se face imediat, în sepsis, fără imagistică — Incorect: Reconstrucția imediată în sepsis este descurajată.\n\nBilomul se ignoră, ERCP fiind contraindicat în scurgerea din cistic — Incorect: Bilomul se caută imagistic; ERCP stentază cisticul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 254, Fistula biliară precoce (pagini PDF: 166).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    254
   ],
   "pdfPages": [
    166
   ],
   "section": "Fistula biliară precoce"
  },
  "learningObjective": "Diferențierea drenajului percutan (accesoriu) / stent ERCP (cistic) de amânarea reconstrucției majore.",
  "optionRationales": [
   "Tabloul clinic și bilomul imagistic sunt explicite.",
   "Cele două conduite (percutan versus stent) sunt distinse.",
   "Amânarea reconstrucției majore până la controlul sepsisului este cerută.",
   "Reconstrucția imediată în sepsis este descurajată.",
   "Bilomul se caută imagistic; ERCP stentază cisticul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Forțează reconstrucția majoră în sepsis și contraindică ERCP-ul, inversul algoritmului din paragraf."
  },
  "textbookExpressions": [
   "colecţie intra-abdominală de bilă",
   "stent prin ERCP"
  ]
 },
 {
  "id": "biliar-adv-023",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Strictura biliară tardivă nediagnosticată poate duce la:",
  "options": [
   "Icter obstructiv și angiocolită recurentă; netratată, la ciroză biliară și hipertensiune portală",
   "Diagnostic confirmat prin MRC, ERCP sau PTC; angiocolita se tratează cu antibiotice, iar strictura prin derivație proximală pe ansă jejunală",
   "Este o entitate benignă, fără risc de ciroză, imagistica fiind superfluă",
   "Hipertensiunea portală exclude orice derivație biliară",
   "PTC nu are rol, doar radiografia simplă confirmând strictura"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Icter obstructiv și angiocolită recurentă; netratată, la ciroză biliară și hipertensiune portală — Corect: Icterul, angiocolita recurentă și evoluția spre ciroză/HTP sunt explicite.\n\nDiagnostic confirmat prin MRC, ERCP sau PTC; angiocolita se tratează cu antibiotice, iar strictura prin derivație proximală pe ansă jejunală — Corect: MRC/ERCP/PTC și derivația jejunală sunt descrise.\n\nEste o entitate benignă, fără risc de ciroză, imagistica fiind superfluă — Incorect: Netratarea duce la ciroză, deci nu este benignă.\n\nHipertensiunea portală exclude orice derivație biliară — Incorect: HTP este o consecință, nu o contraindicație absolută enunțată.\n\nPTC nu are rol, doar radiografia simplă confirmând strictura — Incorect: PTC este una dintre metodele de confirmare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 254, Stricturi biliare tardive (pagini PDF: 166).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    254
   ],
   "pdfPages": [
    166
   ],
   "section": "Stricturi biliare tardive"
  },
  "learningObjective": "Recunoașterea secvenței angiocolită recurentă → ciroză biliară/HTP și a derivației pe ansă jejunală.",
  "optionRationales": [
   "Icterul, angiocolita recurentă și evoluția spre ciroză/HTP sunt explicite.",
   "MRC/ERCP/PTC și derivația jejunală sunt descrise.",
   "Netratarea duce la ciroză, deci nu este benignă.",
   "HTP este o consecință, nu o contraindicație absolută enunțată.",
   "PTC este una dintre metodele de confirmare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează evoluția spre ciroză biliară, miza clinică a stricturii nediagnosticate."
  },
  "textbookExpressions": [
   "ciroză biliară",
   "hipertensiune portală"
  ]
 },
 {
  "id": "biliar-adv-024",
  "topicId": "biliar",
  "type": "CM",
  "stem": "În colecistita acută, examenul clinic relevă frecvent:",
  "options": [
   "Semnul Murphy (oprirea respirației la palpare profundă în HD, peritoneul veziculei fiind inflamat)",
   "Masă sensibilă în HD, reprezentând vezicula inflamată, când inflamația este avansată",
   "Apărare localizată și sensibilitate la decompresie, odată ce inflamația atinge peritoneul parietal",
   "Semnul Courvoisier (veziculă destinsă nedureroasă cu icter) ca echivalent al Murphy",
   "Abdomen perfect suplu, fără sensibilitate între crize, identic colicii reminse, chiar în plină inflamație"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Semnul Murphy (oprirea respirației la palpare profundă în HD, peritoneul veziculei fiind inflamat) — Corect: Definiția Murphy este explicită.\n\nMasă sensibilă în HD, reprezentând vezicula inflamată, când inflamația este avansată — Corect: Masa sensibilă din HD este descrisă.\n\nApărare localizată și sensibilitate la decompresie, odată ce inflamația atinge peritoneul parietal — Corect: Apărarea și decompresia apar la extinderea parietală.\n\nSemnul Courvoisier (veziculă destinsă nedureroasă cu icter) ca echivalent al Murphy — Incorect: Courvoisier este veziculă destinsă nedureroasă cu icter, nu echivalent Murphy.\n\nAbdomen perfect suplu, fără sensibilitate între crize, identic colicii reminse, chiar în plină inflamație — Incorect: Abdomenul suplul între crize descrie colica, nu colecistita acută.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 244, Colecistita acută — Semne fizice (pagini PDF: 156).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    244
   ],
   "pdfPages": [
    156
   ],
   "section": "Colecistita acută — Semne fizice"
  },
  "learningObjective": "Ierarhia Murphy → masă sensibilă → peritonism local, distinctă de Courvoisier.",
  "optionRationales": [
   "Definiția Murphy este explicită.",
   "Masa sensibilă din HD este descrisă.",
   "Apărarea și decompresia apar la extinderea parietală.",
   "Courvoisier este veziculă destinsă nedureroasă cu icter, nu echivalent Murphy.",
   "Abdomenul suplul între crize descrie colica, nu colecistita acută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Egalizează Murphy cu Courvoisier, două semne din același paragraf, ușor de superpus."
  },
  "textbookExpressions": [
   "semnul Murphy",
   "masă sensibilă"
  ]
 },
 {
  "id": "biliar-adv-025",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații despre CT în patologia biliară sunt adevărate?",
  "options": [
   "Nu este investigația de elecție pentru litiază, din cauza sensibilității reduse, costului și iradierii, față de ecografie",
   "Poate fi util în afecțiuni biliare acute severe, pentru a exclude alte obstacole sau un diagnostic alternativ",
   "Colangiografia CT poate relua detalii anatomice; CT-ul poate ghida drenajul percutan sau puncția-biopsie",
   "CT-ul înlocuiește ecografia ca prim test în colica necomplicată, fără iradiere",
   "Sensibilitatea CT pentru calculii veziculari depășește 95%, identic ecografiei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Nu este investigația de elecție pentru litiază, din cauza sensibilității reduse, costului și iradierii, față de ecografie — Corect: Inferioritatea față de eco pentru litiază este explicită.\n\nPoate fi util în afecțiuni biliare acute severe, pentru a exclude alte obstacole sau un diagnostic alternativ — Corect: Rolul în cazurile acute severe este citat.\n\nColangiografia CT poate relua detalii anatomice; CT-ul poate ghida drenajul percutan sau puncția-biopsie — Corect: Colangio-CT și ghidajul percutan sunt menționate.\n\nCT-ul înlocuiește ecografia ca prim test în colica necomplicată, fără iradiere — Incorect: Ecografia rămâne primul test; CT iradiază.\n\nSensibilitatea CT pentru calculii veziculari depășește 95%, identic ecografiei — Incorect: 95% este performanța ecografiei, nu a CT-ului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 245, Tomografia computerizată (pagini PDF: 157).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    245
   ],
   "pdfPages": [
    157
   ],
   "section": "Tomografia computerizată"
  },
  "learningObjective": "Poziționarea CT ca instrument de urgență/anatomie/intervenție, nu ca prim test de litiază.",
  "optionRationales": [
   "Inferioritatea față de eco pentru litiază este explicită.",
   "Rolul în cazurile acute severe este citat.",
   "Colangio-CT și ghidajul percutan sunt menționate.",
   "Ecografia rămâne primul test; CT iradiază.",
   "95% este performanța ecografiei, nu a CT-ului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune CT înaintea ecografiei în colică și îi atribuie sensibilitatea de 95% a ultrasunetelor."
  },
  "textbookExpressions": [
   "Tomografia computerizată",
   "sensibilităţii reduse"
  ]
 },
 {
  "id": "biliar-adv-026",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Calculii pigmentari bruni se deosebesc de cei negri prin faptul că:",
  "options": [
   "Apar în context de infecție a bilei, primitiv în căile biliare, și sunt moi",
   "Negrii (≈20%) se formează în bila sterilă din colecist, asociați hemolizei și cirozei",
   "Brunii conțin adesea suficient calciu cât să fie radioopaci",
   "Brunii sunt 75% din calculi și se formează doar în colecistul steril",
   "Negrii apar primitiv în căi infectate, fiind moi și radiotransparenți"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Apar în context de infecție a bilei, primitiv în căile biliare, și sunt moi — Corect: Infecția, originea primitivă în căi și consistența moale definesc brunii.\n\nNegrii (≈20%) se formează în bila sterilă din colecist, asociați hemolizei și cirozei — Corect: 20%, bila sterilă și hemoliza/ciroza definesc negrii.\n\nBrunii conțin adesea suficient calciu cât să fie radioopaci — Corect: Radioopacitatea prin calciu este atribuită pigmentarilor, în special relevanți la bruni.\n\nBrunii sunt 75% din calculi și se formează doar în colecistul steril — Incorect: 75% sunt micștii, nu brunii; brunii nu sunt din colecist steril.\n\nNegrii apar primitiv în căi infectate, fiind moi și radiotransparenți — Incorect: Atributele sunt inversate față de text.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 243, Calculi pigmentari negri versus bruni (pagini PDF: 155).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    243
   ],
   "pdfPages": [
    155
   ],
   "section": "Calculi pigmentari negri versus bruni"
  },
  "learningObjective": "Contrastarea mediului steril/colecist/hemoliză (negri) cu bila infectată/căi/moi (bruni).",
  "optionRationales": [
   "Infecția, originea primitivă în căi și consistența moale definesc brunii.",
   "20%, bila sterilă și hemoliza/ciroza definesc negrii.",
   "Radioopacitatea prin calciu este atribuită pigmentarilor, în special relevanți la bruni.",
   "75% sunt micștii, nu brunii; brunii nu sunt din colecist steril.",
   "Atributele sunt inversate față de text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sediul (colecist steril versus căi infectate) între negri și bruni."
  },
  "textbookExpressions": [
   "Calculii pigmentari bruni",
   "Calculii pigmentari negri"
  ]
 },
 {
  "id": "biliar-adv-027",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Litiaza veziculară asimptomatică, la adult:",
  "options": [
   "Anual, circa 1–2% dintre asimptomatici dezvoltă simptome sau complicații; două treimi rămân fără simptome sau complicații timp de 20 de ani",
   "Colecistectomia profilactică nu este indicată la adulții asimptomatici, riscul de carcinom fiind prea scăzut pentru a o justifica",
   "Riscul de carcinom este mai mare la vezicula de porțelan (calcificarea peretelui)",
   "Profilaxia chirurgicală se impune la toți adulții cu calculi, chiar fără colică",
   "Rata de simptome este 50% pe an, deci așteptarea 20 de ani este inutilă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Anual, circa 1–2% dintre asimptomatici dezvoltă simptome sau complicații; două treimi rămân fără simptome sau complicații timp de 20 de ani — Corect: Cifrele 1–2% și două treimi/20 de ani sunt explicite.\n\nColecistectomia profilactică nu este indicată la adulții asimptomatici, riscul de carcinom fiind prea scăzut pentru a o justifica — Corect: Absența indicației profilactice la adult este citată.\n\nRiscul de carcinom este mai mare la vezicula de porțelan (calcificarea peretelui) — Corect: Porțelanul crește riscul de carcinom față de calculii simpli.\n\nProfilaxia chirurgicală se impune la toți adulții cu calculi, chiar fără colică — Incorect: Profilaxia nu se impune la asimptomaticul adult.\n\nRata de simptome este 50% pe an, deci așteptarea 20 de ani este inutilă — Incorect: 1–2%/an, nu 50%, este rata citată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 246, Litiază veziculară asimptomatică (pagini PDF: 158).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    246
   ],
   "pdfPages": [
    158
   ],
   "section": "Litiază veziculară asimptomatică"
  },
  "learningObjective": "Aplicarea cifrelor 1–2%/an și 2/3 la 20 de ani și a absenței indicației de colecistectomie profilactică la adultul asimptomatic.",
  "optionRationales": [
   "Cifrele 1–2% și două treimi/20 de ani sunt explicite.",
   "Absența indicației profilactice la adult este citată.",
   "Porțelanul crește riscul de carcinom față de calculii simpli.",
   "Profilaxia nu se impune la asimptomaticul adult.",
   "1–2%/an, nu 50%, este rata citată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Ridică conversia simptomatică de la 1–2%/an la 50% și impune profilaxie la toți adulții cu calculi."
  },
  "textbookExpressions": [
   "1-2% vor dezvolta",
   "20 de ani"
  ]
 },
 {
  "id": "biliar-adv-028",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Conform algoritmului de evaluare a icterului (Figura 16-3):",
  "options": [
   "Bilirubina directă (conjugată) crescută, cu FA și GGT mult crescute față de aminotransferaze, orientează spre obstrucția arborelui biliar (ecografie ± PTC, ERCP, MRCP)",
   "Bilirubina indirectă (neconjugată) crescută orientează spre tulburare de glucuronil-transferază (nou-născut, Crigler-Najjar), absorbție (Gilbert) sau producție excesivă (hemoliză)",
   "Aminotransferazele (AST, ALT) mult peste FA/GGT orientează spre boală hepatocelulară",
   "Obstrucția biliară se recunoaște după bilirubină indirectă izolată, fără creștere de FA",
   "Gilbert produce conjugare excesivă, cu FA de trei ori peste transaminaze"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Bilirubina directă (conjugată) crescută, cu FA și GGT mult crescute față de aminotransferaze, orientează spre obstrucția arborelui biliar (ecografie ± PTC, ERCP, MRCP) — Corect: Ramura conjugată + FA/GGT către obstrucție este desenată.\n\nBilirubina indirectă (neconjugată) crescută orientează spre tulburare de glucuronil-transferază (nou-născut, Crigler-Najjar), absorbție (Gilbert) sau producție excesivă (hemoliză) — Corect: Ramura neconjugată către Crigler-Najjar, Gilbert și hemoliză este listată.\n\nAminotransferazele (AST, ALT) mult peste FA/GGT orientează spre boală hepatocelulară — Corect: Ierarhia transaminaze >> FA definește hepatocelularul.\n\nObstrucția biliară se recunoaște după bilirubină indirectă izolată, fără creștere de FA — Incorect: Obstrucția este conjugată, cu FA crescută.\n\nGilbert produce conjugare excesivă, cu FA de trei ori peste transaminaze — Incorect: Gilbert este pe ramura neconjugată, nu colestatică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 247, Figura 16-3 — Algoritmul icterului (pagini PDF: 159).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    247
   ],
   "pdfPages": [
    159
   ],
   "section": "Figura 16-3 — Algoritmul icterului"
  },
  "learningObjective": "Diferențierea colestazei (FA/GGT) de hepatocelular (AST/ALT) și a icterului neconjugat (Crigler-Najjar, Gilbert, hemoliză).",
  "optionRationales": [
   "Ramura conjugată + FA/GGT către obstrucție este desenată.",
   "Ramura neconjugată către Crigler-Najjar, Gilbert și hemoliză este listată.",
   "Ierarhia transaminaze >> FA definește hepatocelularul.",
   "Obstrucția este conjugată, cu FA crescută.",
   "Gilbert este pe ramura neconjugată, nu colestatică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută Gilbert/Crigler-Najjar pe ramura colestatică și inversează FA versus transaminaze."
  },
  "textbookExpressions": [
   "Crigler-Najjar",
   "Gilbert"
  ]
 },
 {
  "id": "biliar-adv-029",
  "topicId": "biliar",
  "type": "CS",
  "stem": "Hipercarotenemia se deosebește de icter prin:",
  "options": [
   "Bilirubină serică normală și sclere albe, adesea cu istoric de consum de medicamente",
   "Tegumente icterice, sclere icterice și bilirubină serică crescută, identic obstacolului extrahepatic",
   "Scaune decolorate și urină ca ceaiul, cu FA foarte crescută",
   "Bilirubină conjugată crescută izolat, cu dilatație de CBP la ecografie",
   "Necesitatea ERCP de primă intenție, ca în coledocolitiază"
  ],
  "correct": [
   0
  ],
  "explanation": "Bilirubină serică normală și sclere albe, adesea cu istoric de consum de medicamente — Corect: Algoritmul o plasează la bilirubină normală și sclere albe.\n\nTegumente icterice, sclere icterice și bilirubină serică crescută, identic obstacolului extrahepatic — Incorect: Tegumente și sclere icterice cu bilirubină crescută definesc icterul.\n\nScaune decolorate și urină ca ceaiul, cu FA foarte crescută — Incorect: Scaunele decolorate țin de obstacol extrahepatic.\n\nBilirubină conjugată crescută izolat, cu dilatație de CBP la ecografie — Incorect: CBP dilatată nu face parte din ramura hipercarotenemiei.\n\nNecesitatea ERCP de primă intenție, ca în coledocolitiază — Incorect: ERCP nu este primul gest în hipercarotenemie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 247, Diagnostic diferențial — Hipercarotenemia (pagini PDF: 159).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    247
   ],
   "pdfPages": [
    159
   ],
   "section": "Diagnostic diferențial — Hipercarotenemia"
  },
  "learningObjective": "Recunoașterea hipercarotenemiei (bilirubină normală, sclere albe) față de icterul adevărat.",
  "optionRationales": [
   "Algoritmul o plasează la bilirubină normală și sclere albe.",
   "Tegumente și sclere icterice cu bilirubină crescută definesc icterul.",
   "Scaunele decolorate țin de obstacol extrahepatic.",
   "CBP dilatată nu face parte din ramura hipercarotenemiei.",
   "ERCP nu este primul gest în hipercarotenemie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează hipercarotenemia ca obstacol extrahepatic (sclere icterice, ERCP), deși algoritmul o desparte prin sclere albe."
  },
  "textbookExpressions": [
   "Hipercarotenemia",
   "Sclere albe"
  ]
 },
 {
  "id": "biliar-adv-030",
  "topicId": "biliar",
  "type": "CM",
  "stem": "PTC (colangiografia percutană transhepatică) se caracterizează prin:",
  "options": [
   "Succes de peste 95% când ductele sunt dilatate și de doar 70–80% la calibru normal; este utilă mai ales pentru arborele biliar proximal",
   "Permite diagnostic citologic, extragerea calculilor și plasarea unui tub de dren pe canalele obstruate",
   "Coagulopatia trebuie corectată înaintea PTC sau ERCP",
   "Succesul este sub 20% pe ducte dilatate, citologia fiind imposibilă",
   "PTC vizualizează doar pancreasul, nu arborele biliar proximal"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Succes de peste 95% când ductele sunt dilatate și de doar 70–80% la calibru normal; este utilă mai ales pentru arborele biliar proximal — Corect: Cifrele >95% versus 70–80% și utilitatea proximală sunt explicite.\n\nPermite diagnostic citologic, extragerea calculilor și plasarea unui tub de dren pe canalele obstruate — Corect: Citologia, extracția și drenul sunt listate.\n\nCoagulopatia trebuie corectată înaintea PTC sau ERCP — Corect: Corectarea coagulopatiei înainte de PTC/ERCP este cerută.\n\nSuccesul este sub 20% pe ducte dilatate, citologia fiind imposibilă — Incorect: Succesul pe dilatate este >95%, nu sub 20%.\n\nPTC vizualizează doar pancreasul, nu arborele biliar proximal — Incorect: PTC vizează arborele biliar proximal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 246, PTC — Succes 95% versus 70–80% (pagini PDF: 158).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    246
   ],
   "pdfPages": [
    158
   ],
   "section": "PTC — Succes 95% versus 70–80%"
  },
  "learningObjective": "Aplicarea ratelor de succes după calibru și a rolului terapeutic (citologie, extracție, dren), cu corectarea coagulopatiei.",
  "optionRationales": [
   "Cifrele >95% versus 70–80% și utilitatea proximală sunt explicite.",
   "Citologia, extracția și drenul sunt listate.",
   "Corectarea coagulopatiei înainte de PTC/ERCP este cerută.",
   "Succesul pe dilatate este >95%, nu sub 20%.",
   "PTC vizează arborele biliar proximal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează 95% (ducte dilatate) cu 70–80% (calibru normal) și mută PTC pe pancreas."
  },
  "textbookExpressions": [
   "peste 95%",
   "70-80%"
  ]
 },
 {
  "id": "biliar-adv-031",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Tratamentul inițial al colecistitei acute include:",
  "options": [
   "Oprirea aportului oral, lichide intravenoase și antibiotice pe Gram-negative aerobe și enterococ (E. coli, Klebsiella pneumoniae, Streptococcus faecalis)",
   "Colecistectomie precoce, la câteva zile de la prezentare, după hidratare și antibiotice, pentru a preveni gangrena, perforația și sepsisul",
   "Întârziere dacă trebuie gestionate alte probleme medicale majore, sau intervenție mai devreme dacă se suspectează perforație sau abces",
   "Colecistostomie percutană ecoghidată (tub prin ficat în vezică) la pacientul prea grav pentru colecistectomie",
   "Antibiotice doar pe anaerobi, fără acoperire Gram-negativă, și amânare sistematică 6 săptămâni"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Oprirea aportului oral, lichide intravenoase și antibiotice pe Gram-negative aerobe și enterococ (E. coli, Klebsiella pneumoniae, Streptococcus faecalis) — Corect: Bacteriile și spectrul antibiotic sunt explicite.\n\nColecistectomie precoce, la câteva zile de la prezentare, după hidratare și antibiotice, pentru a preveni gangrena, perforația și sepsisul — Corect: Fereastra de câteva zile și prevenția complicațiilor sunt citate.\n\nÎntârziere dacă trebuie gestionate alte probleme medicale majore, sau intervenție mai devreme dacă se suspectează perforație sau abces — Corect: Excepțiile (comorbidități versus perforație) sunt descrise.\n\nColecistostomie percutană ecoghidată (tub prin ficat în vezică) la pacientul prea grav pentru colecistectomie — Corect: Colecistostomia percutană prin ficat este indicația pentru cel prea grav.\n\nAntibiotice doar pe anaerobi, fără acoperire Gram-negativă, și amânare sistematică 6 săptămâni — Incorect: Spectrul țintește Gram-negativi și enterococ; amânarea 6 săptămâni nu e regula.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 248, Colecistita acută — Antibiotice și timing (pagini PDF: 160).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    248
   ],
   "pdfPages": [
    160
   ],
   "section": "Colecistita acută — Antibiotice și timing"
  },
  "learningObjective": "Ierarhia NPO/IV/antibiotice → colecistectomie precoce versus colecistostomie la pacientul instabil.",
  "optionRationales": [
   "Bacteriile și spectrul antibiotic sunt explicite.",
   "Fereastra de câteva zile și prevenția complicațiilor sunt citate.",
   "Excepțiile (comorbidități versus perforație) sunt descrise.",
   "Colecistostomia percutană prin ficat este indicația pentru cel prea grav.",
   "Spectrul țintește Gram-negativi și enterococ; amânarea 6 săptămâni nu e regula."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amână sistematic 6 săptămâni și schimbă spectrul antibiotic, inversul algoritmului precoce."
  },
  "textbookExpressions": [
   "Escherichia coli",
   "colecistostomie"
  ]
 },
 {
  "id": "biliar-adv-032",
  "topicId": "biliar",
  "type": "CS",
  "stem": "O femeie de 82 de ani, instabilă, cu colecistită acută, prea gravă pentru colecistectomie. Decompresia acceptată este:",
  "options": [
   "Colecistostomie percutană sub ghidaj ecografic, cu tub de dren prin ficat în vezica biliară",
   "Whipple de urgență, vezicula neputând fi decompresată izolat",
   "ESWL extracorporeală, ca substitut al drenajului",
   "Doar acid ursodeoxicolic oral, fără dren",
   "ERCP cu sfincterotomie, fără abordarea veziculei"
  ],
  "correct": [
   0
  ],
  "explanation": "Colecistostomie percutană sub ghidaj ecografic, cu tub de dren prin ficat în vezica biliară — Corect: Plasarea percutană ecoghidată prin ficat este explicită.\n\nWhipple de urgență, vezicula neputând fi decompresată izolat — Incorect: Whipple nu este tratamentul colecistitei.\n\nESWL extracorporeală, ca substitut al drenajului — Incorect: ESWL nu decomprimează vezicula inflamată.\n\nDoar acid ursodeoxicolic oral, fără dren — Incorect: Ursodeoxicolicul ține de dizolvarea electivă, nu de acutul instabil.\n\nERCP cu sfincterotomie, fără abordarea veziculei — Incorect: ERCP decomprimează CBP, nu vezicula obstruată pe cistic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 248, Colecistostomia percutană (pagini PDF: 160).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    248
   ],
   "pdfPages": [
    160
   ],
   "section": "Colecistostomia percutană"
  },
  "learningObjective": "Recunoașterea colecistostomiei percutane transhepatice ca decompresie la pacientul inoperabil.",
  "optionRationales": [
   "Plasarea percutană ecoghidată prin ficat este explicită.",
   "Whipple nu este tratamentul colecistitei.",
   "ESWL nu decomprimează vezicula inflamată.",
   "Ursodeoxicolicul ține de dizolvarea electivă, nu de acutul instabil.",
   "ERCP decomprimează CBP, nu vezicula obstruată pe cistic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește colecistostomia percutană cu Whipple sau ESWL, două gesturi din alte capitole ale căii biliare."
  },
  "textbookExpressions": [
   "plasarea percutană",
   "ghidaj ecografic"
  ]
 },
 {
  "id": "biliar-adv-033",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Colecistita gangrenoasă și cea emfizematoasă se deosebesc prin:",
  "options": [
   "Gangrenoasa asociază morbiditate 15–25% și mortalitate 20–25%; pacienții sunt mai vârstnici, cu comorbidități și hiperleucocitoză; tratamentul e stabilizare, antibiotice cu spectru larg și colecistostomie de urgență sau colecistectomie, după toleranță",
   "Emfizematoasa rezultă din bacterii producătoare de gaze, cu risc mai mare de gangrenă și perforație; 20–50% asociază diabet; aer în perete, lumen, țesuturi pericolecistice sau nivel hidro-aeric",
   "Emfizematoasa cere antibiotice cu acoperire anaerobă și colecistectomie de urgență",
   "Gangrenoasa are mortalitate sub 1%, emfizematoasa fiind limitată la tineri nediabetici",
   "Aerul parietal contraindică antibioticele, colecistectomia fiind amânată electiv"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Gangrenoasa asociază morbiditate 15–25% și mortalitate 20–25%; pacienții sunt mai vârstnici, cu comorbidități și hiperleucocitoză; tratamentul e stabilizare, antibiotice cu spectru larg și colecistostomie de urgență sau colecistectomie, după toleranță — Corect: Cifrele de morbiditate/mortalitate și conduita sunt explicite.\n\nEmfizematoasa rezultă din bacterii producătoare de gaze, cu risc mai mare de gangrenă și perforație; 20–50% asociază diabet; aer în perete, lumen, țesuturi pericolecistice sau nivel hidro-aeric — Corect: Gazul, diabetul 20–50% și semnele radiologice sunt citate.\n\nEmfizematoasa cere antibiotice cu acoperire anaerobă și colecistectomie de urgență — Corect: Acoperirea anaerobă și urgența operatorie închid paragraful emfizematos.\n\nGangrenoasa are mortalitate sub 1%, emfizematoasa fiind limitată la tineri nediabetici — Incorect: Mortalitatea gangrenei nu e sub 1%; emfizematoasa e a vârstnicului, adesea diabetic.\n\nAerul parietal contraindică antibioticele, colecistectomia fiind amânată electiv — Incorect: Aerul impune urgență, nu amânare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 248, Gangrenă versus emfizematoasă (pagini PDF: 160).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    248
   ],
   "pdfPages": [
    160
   ],
   "section": "Gangrenă versus emfizematoasă"
  },
  "learningObjective": "Contrastarea prognosticului 15–25%/20–25% al gangrenei cu aerul parietal și diabetul 20–50% ale formei emfizematoase.",
  "optionRationales": [
   "Cifrele de morbiditate/mortalitate și conduita sunt explicite.",
   "Gazul, diabetul 20–50% și semnele radiologice sunt citate.",
   "Acoperirea anaerobă și urgența operatorie închid paragraful emfizematos.",
   "Mortalitatea gangrenei nu e sub 1%; emfizematoasa e a vârstnicului, adesea diabetic.",
   "Aerul impune urgență, nu amânare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează mortalitatea 20–25% sub 1% și transformă aerul parietal într-o indicație electivă."
  },
  "textbookExpressions": [
   "15-25%",
   "20-50% dintre pacienţi"
  ]
 },
 {
  "id": "biliar-adv-034",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Un pacient din ATI, pe nutriție parenterală și ventilație, dezvoltă distensie veziculară fără calculi. Colecistita alitiazică:",
  "options": [
   "Poate complica evoluția pacientului internat, adesea cu NPT, ventilație și imunosupresie; diagnosticul e dificil, istoricul fiind necoerent",
   "HIDA are adesea fals-pozitive și specificitate de doar 38% în astfel de cazuri; după diagnostic, tratamentul e similar litiazicei",
   "HIDA are specificitate 98% aici, calculii fiind vizibili în toate cazurile",
   "NPT protejează de alitiazică, ventilația fiind un factor protector",
   "Tratamentul diferă radical, colecistectomia fiind abandonată"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Poate complica evoluția pacientului internat, adesea cu NPT, ventilație și imunosupresie; diagnosticul e dificil, istoricul fiind necoerent — Corect: Terenul și dificultatea diagnosticului sunt explicite.\n\nHIDA are adesea fals-pozitive și specificitate de doar 38% în astfel de cazuri; după diagnostic, tratamentul e similar litiazicei — Corect: Fals-pozitivele și 38% specificitate sunt citate; tratamentul e similar.\n\nHIDA are specificitate 98% aici, calculii fiind vizibili în toate cazurile — Incorect: 38%, nu 98%, este specificitatea; calculii lipsesc prin definiție.\n\nNPT protejează de alitiazică, ventilația fiind un factor protector — Incorect: NPT și ventilația predispun, nu protejează.\n\nTratamentul diferă radical, colecistectomia fiind abandonată — Incorect: Tratamentul este similar litiazicei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 248, Colecistita acută alitiazică (pagini PDF: 160).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    248
   ],
   "pdfPages": [
    160
   ],
   "section": "Colecistita acută alitiazică"
  },
  "learningObjective": "Recunoașterea terenului (NPT, ventilație, imunosupresie) și a specificității HIDA de doar 38% în alitiazică.",
  "optionRationales": [
   "Terenul și dificultatea diagnosticului sunt explicite.",
   "Fals-pozitivele și 38% specificitate sunt citate; tratamentul e similar.",
   "38%, nu 98%, este specificitatea; calculii lipsesc prin definiție.",
   "NPT și ventilația predispun, nu protejează.",
   "Tratamentul este similar litiazicei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Ridică specificitatea HIDA din alitiazică de la 38% la 98% și transformă NPT-ul în factor protector."
  },
  "textbookExpressions": [
   "specificitate de doar 38%",
   "Colecistita acută alitiazică"
  ]
 },
 {
  "id": "biliar-adv-035",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Colecistita cronică se caracterizează prin:",
  "options": [
   "Este cea mai frecventă formă de litiază colecistică simptomatică, prin episoade minore repetate de obstrucție a cisticului, cu inflamație și fibroză parietală",
   "Colica (HD/epigastru) durează de la 30 de minute până la câteva ore, adesea la câteva ore după masă; febra și frisoanele lipsesc",
   "Dispepsia (intoleranță la grăsimi, flatulență, eructații, indigestie) este nespecifică; icterul nu este produs prin obstrucția cisticului",
   "Febra înaltă și icterul prin cistic sunt regula, identic angiocolitei",
   "Examenul fizic rămâne peritonitic între crize, ca în colecistita acută"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este cea mai frecventă formă de litiază colecistică simptomatică, prin episoade minore repetate de obstrucție a cisticului, cu inflamație și fibroză parietală — Corect: Frecvența maximă și mecanismul (obstrucții minore repetate) sunt explicite.\n\nColica (HD/epigastru) durează de la 30 de minute până la câteva ore, adesea la câteva ore după masă; febra și frisoanele lipsesc — Corect: Fereastra 30 min–ore și absența febrei sunt citate.\n\nDispepsia (intoleranță la grăsimi, flatulență, eructații, indigestie) este nespecifică; icterul nu este produs prin obstrucția cisticului — Corect: Nespecificitatea dispepsiei și originea extra-cistică a icterului sunt enunțate.\n\nFebra înaltă și icterul prin cistic sunt regula, identic angiocolitei — Incorect: Febra/icterul prin cistic țin de acut/angiocolită, nu de cronică.\n\nExamenul fizic rămâne peritonitic între crize, ca în colecistita acută — Incorect: Între crize abdomenul nu are modificări specifice.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 248, Colecistita cronică (pagini PDF: 160).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    248
   ],
   "pdfPages": [
    160
   ],
   "section": "Colecistita cronică"
  },
  "learningObjective": "Contrastarea colicii prelungite fără febră a cronicei față de angiocolită și de peritonismul acutului.",
  "optionRationales": [
   "Frecvența maximă și mecanismul (obstrucții minore repetate) sunt explicite.",
   "Fereastra 30 min–ore și absența febrei sunt citate.",
   "Nespecificitatea dispepsiei și originea extra-cistică a icterului sunt enunțate.",
   "Febra/icterul prin cistic țin de acut/angiocolită, nu de cronică.",
   "Între crize abdomenul nu are modificări specifice."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie cronicei febra și icterul angiocolitei, deși textul le neagă explicit."
  },
  "textbookExpressions": [
   "Colecistita cronică",
   "30 de minute"
  ]
 },
 {
  "id": "biliar-adv-036",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Epidemiologia litiazei, dincolo de cifra de 15% la adulți:",
  "options": [
   "Peste 800.000 de colecistectomii sunt practicate anual în SUA",
   "La femeile caucaziene, prevalența este 5–15% sub 50 de ani și circa 25% la vârste mai înaintate",
   "La bărbații caucazieni, prevalența este 4–10% sub 50 de ani și 10–15% ulterior",
   "Prevalența scade cu vârsta, bărbații fiind afectați de 3 ori mai frecvent",
   "Colecistectomia deschisă a înlocuit laparoscopia ca operație de elecție"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Peste 800.000 de colecistectomii sunt practicate anual în SUA — Corect: Cifra de 800.000 este explicită.\n\nLa femeile caucaziene, prevalența este 5–15% sub 50 de ani și circa 25% la vârste mai înaintate — Corect: 5–15% și 25% la femei sunt citate.\n\nLa bărbații caucazieni, prevalența este 4–10% sub 50 de ani și 10–15% ulterior — Corect: 4–10% și 10–15% la bărbați completează tabelul.\n\nPrevalența scade cu vârsta, bărbații fiind afectați de 3 ori mai frecvent — Incorect: Incidența crește cu vârsta; femeile sunt afectate de circa 3 ori mai frecvent.\n\nColecistectomia deschisă a înlocuit laparoscopia ca operație de elecție — Incorect: Laparoscopia a înlocuit deschisul, nu invers.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 242, Epidemiologie — Prevalență pe vârstă și sex (pagini PDF: 154).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    242
   ],
   "pdfPages": [
    154
   ],
   "section": "Epidemiologie — Prevalență pe vârstă și sex"
  },
  "learningObjective": "Aplicarea prevalențelor pe decade la caucazieni și a volumului de 800.000 de colecistectomii, față de inversarea de sex/vârstă.",
  "optionRationales": [
   "Cifra de 800.000 este explicită.",
   "5–15% și 25% la femei sunt citate.",
   "4–10% și 10–15% la bărbați completează tabelul.",
   "Incidența crește cu vârsta; femeile sunt afectate de circa 3 ori mai frecvent.",
   "Laparoscopia a înlocuit deschisul, nu invers."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează predilecția de sex și direcția vârstei, pe fondul a patru procente din același paragraf."
  },
  "textbookExpressions": [
   "800.000 de colecistectomii",
   "5-15%"
  ]
 },
 {
  "id": "biliar-adv-037",
  "topicId": "biliar",
  "type": "CS",
  "stem": "„Nămolul” biliar (sludge) se caracterizează prin:",
  "options": [
   "Material amorf cu mucoproteine, cristale de colesterol și bilirubinat de calciu; apare la NPT prelungită, înfometare și scădere ponderală rapidă și poate precede calculii",
   "Este un calcul pigmentar brun, primitiv în căi infectate, radioopac",
   "Nu conține cristale de colesterol și nu se asociază nutriției parenterale",
   "Se formează doar în CBP sterilă, identic calculilor negri",
   "Impune ERCP de urgență, fiind echivalentul colangitei supurate"
  ],
  "correct": [
   0
  ],
  "explanation": "Material amorf cu mucoproteine, cristale de colesterol și bilirubinat de calciu; apare la NPT prelungită, înfometare și scădere ponderală rapidă și poate precede calculii — Corect: Compoziția, terenul și rolul de precursor sunt explicite.\n\nEste un calcul pigmentar brun, primitiv în căi infectate, radioopac — Incorect: Brunii infectați din căi sunt altă entitate.\n\nNu conține cristale de colesterol și nu se asociază nutriției parenterale — Incorect: Sludge-ul conține tocmai cristale de colesterol și se leagă de NPT.\n\nSe formează doar în CBP sterilă, identic calculilor negri — Incorect: Negrii sunt din colecist steril, nu sludge-ul.\n\nImpune ERCP de urgență, fiind echivalentul colangitei supurate — Incorect: Nu este echivalentul colangitei supurate.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 243, Sludge biliar (pagini PDF: 155).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    243
   ],
   "pdfPages": [
    155
   ],
   "section": "Sludge biliar"
  },
  "learningObjective": "Recunoașterea compoziției sludge-ului și a terenului (NPT, înfometare, scădere ponderală) ca precursor al calculilor.",
  "optionRationales": [
   "Compoziția, terenul și rolul de precursor sunt explicite.",
   "Brunii infectați din căi sunt altă entitate.",
   "Sludge-ul conține tocmai cristale de colesterol și se leagă de NPT.",
   "Negrii sunt din colecist steril, nu sludge-ul.",
   "Nu este echivalentul colangitei supurate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă sludge-ul (precursor amorf) cu calculul pigmentar brun din căile infectate."
  },
  "textbookExpressions": [
   "Nămolul\" biliar",
   "bilirubinat de calciu"
  ]
 },
 {
  "id": "biliar-adv-038",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Cancerul veziculei biliare — epidemiologie și factori de risc:",
  "options": [
   "Este cel mai frecvent cancer al tractului biliar și al șaselea al tractului gastrointestinal; vârful e în a șaptea decadă, raport 3:1 femei",
   "Litiaza este cel mai frecvent factor de risc (până la 75% dintre pacienți); polipii ≥1,5 cm au prevalență a cancerului de 46–70%",
   "Vezicula de porțelan (calcificarea peretelui) asociază carcinom în circa 20%; colecistectomia profilactică este recomandată când se constată calcificări parietale",
   "Alți factori: joncțiune pancreaticobiliară anormală (~10%), CSP, infecție cu E. coli/Salmonella, solvenți industriali",
   "Incidența maximă e în a treia decadă, la bărbați, litiaza fiind protectivă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este cel mai frecvent cancer al tractului biliar și al șaselea al tractului gastrointestinal; vârful e în a șaptea decadă, raport 3:1 femei — Corect: Frecvența, decada a șaptea și 3:1 sunt explicite.\n\nLitiaza este cel mai frecvent factor de risc (până la 75% dintre pacienți); polipii ≥1,5 cm au prevalență a cancerului de 46–70% — Corect: 75% și 46–70% la polipi ≥1,5 cm sunt citate.\n\nVezicula de porțelan (calcificarea peretelui) asociază carcinom în circa 20%; colecistectomia profilactică este recomandată când se constată calcificări parietale — Corect: 20% și indicația profilactică pe calcificări sunt enunțate.\n\nAlți factori: joncțiune pancreaticobiliară anormală (~10%), CSP, infecție cu E. coli/Salmonella, solvenți industriali — Corect: Joncțiunea, CSP, infecțiile și toxinele completează lista.\n\nIncidența maximă e în a treia decadă, la bărbați, litiaza fiind protectivă — Incorect: Vârful nu e în tinerețe; litiaza e factor de risc, nu protecție.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 251, Cancer de veziculă — 3:1, 75%, porțelan 20% (pagini PDF: 163).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    251
   ],
   "pdfPages": [
    163
   ],
   "section": "Cancer de veziculă — 3:1, 75%, porțelan 20%"
  },
  "learningObjective": "Reținerea triadului 3:1 / 75% litiază / 20% porțelan și a pragului de 1,5 cm pentru polipi.",
  "optionRationales": [
   "Frecvența, decada a șaptea și 3:1 sunt explicite.",
   "75% și 46–70% la polipi ≥1,5 cm sunt citate.",
   "20% și indicația profilactică pe calcificări sunt enunțate.",
   "Joncțiunea, CSP, infecțiile și toxinele completează lista.",
   "Vârful nu e în tinerețe; litiaza e factor de risc, nu protecție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează raportul 3:1 și tratează litiaza ca protectivă, pe trei procente din același paragraf."
  },
  "textbookExpressions": [
   "3: 1",
   "aproximativ 20%"
  ]
 },
 {
  "id": "biliar-adv-039",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Diagnosticul incidental al cancerului de veziculă:",
  "options": [
   "Treizeci la sută dintre tumori sunt diagnosticate incidental în timpul colecistectomiei; cancerul se regăsește în 0,3–1% din piesele de colecistectomie",
   "Simptomele incipiente sunt adesea cauzate de litiază, nu de neoplazie; durerea în HD e similară colicii, dar mai persistentă",
   "90% sunt diagnosticate preoperator, piesele de colecistectomie fiind negative",
   "Formele incipiente se prezintă cu scădere ponderală și astenie, fără durere",
   "Incidentalul este excepțional (sub 0,01% din piese)"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Treizeci la sută dintre tumori sunt diagnosticate incidental în timpul colecistectomiei; cancerul se regăsește în 0,3–1% din piesele de colecistectomie — Corect: 30% incidental și 0,3–1% din piese sunt explicite.\n\nSimptomele incipiente sunt adesea cauzate de litiază, nu de neoplazie; durerea în HD e similară colicii, dar mai persistentă — Corect: Originea litiazică a simptomelor incipiente este citată.\n\n90% sunt diagnosticate preoperator, piesele de colecistectomie fiind negative — Incorect: Diagnosticul preoperator corect e scăzut (capitolul citează 10% în altă secțiune), nu 90%.\n\nFormele incipiente se prezintă cu scădere ponderală și astenie, fără durere — Incorect: Scăderea ponderală și astenia țin de boala avansată.\n\nIncidentalul este excepțional (sub 0,01% din piese) — Incorect: 0,3–1%, nu 0,01%, este cifra din piese.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 251, Cancer incidental — 30% și 0,3–1% (pagini PDF: 163).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    251
   ],
   "pdfPages": [
    163
   ],
   "section": "Cancer incidental — 30% și 0,3–1%"
  },
  "learningObjective": "Contrastarea diagnosticului incidental (30%; 0,3–1% din piese) cu simptomele litiazice ale bolii incipiente.",
  "optionRationales": [
   "30% incidental și 0,3–1% din piese sunt explicite.",
   "Originea litiazică a simptomelor incipiente este citată.",
   "Diagnosticul preoperator corect e scăzut (capitolul citează 10% în altă secțiune), nu 90%.",
   "Scăderea ponderală și astenia țin de boala avansată.",
   "0,3–1%, nu 0,01%, este cifra din piese."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 30% (incidental) cu 90% preoperator și coboară 0,3–1% sub 0,01%."
  },
  "textbookExpressions": [
   "Treizeci la sută",
   "0,3-1%"
  ]
 },
 {
  "id": "biliar-adv-040",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Ileusul biliar, după confirmarea CT, se gestionează astfel:",
  "options": [
   "Inițial ca o ocluzie intestinală înaltă: tub nazogastric și hidratare intravenoasă",
   "Urmează laparotomie (sau laparoscopie) exploratorie și îndepărtarea calculului, mobilizat retrograd către o enterotomie în intestin sănătos",
   "Întregul intestin trebuie explorat pentru alți calculi; la selectați, fără comorbidități, se pot adăuga colecistectomia și corectarea fistulei",
   "Reconstrucția fistulei și colecistectomia se impun de principiu la vârsta înaintată, înaintea enterotomiei",
   "Sonda nazogastrică este contraindicată, calculul lăsându-se pe loc"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Inițial ca o ocluzie intestinală înaltă: tub nazogastric și hidratare intravenoasă — Corect: NG și hidratarea ca ocluzie înaltă sunt explicite.\n\nUrmează laparotomie (sau laparoscopie) exploratorie și îndepărtarea calculului, mobilizat retrograd către o enterotomie în intestin sănătos — Corect: Enterotomia după mobilizare retrogradă este citată.\n\nÎntregul intestin trebuie explorat pentru alți calculi; la selectați, fără comorbidități, se pot adăuga colecistectomia și corectarea fistulei — Corect: Explorarea întregului intestin și selecția pentru fistulă sunt descrise.\n\nReconstrucția fistulei și colecistectomia se impun de principiu la vârsta înaintată, înaintea enterotomiei — Incorect: Mulți vârstnici nu tolerează operații prelungite; fistulă nu precede enterotomia.\n\nSonda nazogastrică este contraindicată, calculul lăsându-se pe loc — Incorect: NG este primul gest, nu o contraindicație.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 251, Ileus biliar — Enterotomie și explorarea intestinului (pagini PDF: 163).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    251
   ],
   "pdfPages": [
    163
   ],
   "section": "Ileus biliar — Enterotomie și explorarea intestinului"
  },
  "learningObjective": "Ierarhia decompresie/hidratare → enterotomie în intestin sănătos → explorarea întregului intestin, cu fistulă doar la selectați.",
  "optionRationales": [
   "NG și hidratarea ca ocluzie înaltă sunt explicite.",
   "Enterotomia după mobilizare retrogradă este citată.",
   "Explorarea întregului intestin și selecția pentru fistulă sunt descrise.",
   "Mulți vârstnici nu tolerează operații prelungite; fistulă nu precede enterotomia.",
   "NG este primul gest, nu o contraindicație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ordinea enterotomie versus reconstrucția fistulei și contraindică sonda nazogastrică."
  },
  "textbookExpressions": [
   "enterotomie",
   "Întregul intestin"
  ]
 },
 {
  "id": "biliar-adv-041",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Tubul în T după explorarea deschisă a CBP:",
  "options": [
   "Se menține de obicei 3 săptămâni, apoi se injectează contrast; dacă curge liber în duoden, fără defecte de umplere, se suprimă",
   "În general, tuburile în T se scot după asigurarea patenței (3–6 săptămâni)",
   "La calcul restant pe colangiografia pe tub, circa 20% se evacuează spontan dacă sunt mici; tubul se lasă 4–6 săptămâni și se repetă colangiografia",
   "Tubul se extrage în primele 24 de ore, patența nefiind verificată",
   "Calculii restanți nu trec spontan, ERCP-ul fiind inutil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se menține de obicei 3 săptămâni, apoi se injectează contrast; dacă curge liber în duoden, fără defecte de umplere, se suprimă — Corect: Cele 3 săptămâni și condiția de extragere sunt explicite.\n\nÎn general, tuburile în T se scot după asigurarea patenței (3–6 săptămâni) — Corect: Intervalul 3–6 săptămâni este citat.\n\nLa calcul restant pe colangiografia pe tub, circa 20% se evacuează spontan dacă sunt mici; tubul se lasă 4–6 săptămâni și se repetă colangiografia — Corect: 20% și fereastra 4–6 săptămâni sunt descrise.\n\nTubul se extrage în primele 24 de ore, patența nefiind verificată — Incorect: Drenajul peritoneal, nu tubul în T, se suprimă la 24–48 de ore după clampare.\n\nCalculii restanți nu trec spontan, ERCP-ul fiind inutil — Incorect: 20% se evacuează spontan; ERCP rămâne o opțiune.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 255, Tubul în T — 3 săptămâni și 20% spontan (pagini PDF: 167).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    255
   ],
   "pdfPages": [
    167
   ],
   "section": "Tubul în T — 3 săptămâni și 20% spontan"
  },
  "learningObjective": "Aplicarea ferestrelor 3 săptămâni / 3–6 săptămâni și a evacuării spontane la 20% din calculii restanți mici.",
  "optionRationales": [
   "Cele 3 săptămâni și condiția de extragere sunt explicite.",
   "Intervalul 3–6 săptămâni este citat.",
   "20% și fereastra 4–6 săptămâni sunt descrise.",
   "Drenajul peritoneal, nu tubul în T, se suprimă la 24–48 de ore după clampare.",
   "20% se evacuează spontan; ERCP rămâne o opțiune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extrage tubul în T la 24 de ore și neagă evacuarea spontană de 20%, două ferestre din același paragraf."
  },
  "textbookExpressions": [
   "3 săptămâni",
   "4-6 săptămâni"
  ]
 },
 {
  "id": "biliar-adv-042",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Complicațiile ERCP cu sfincterotomie și manipulare de calcul includ:",
  "options": [
   "Pancreatită postprocedură, sângerare GI (1–2%) și perforație duodenală sau de CBP (0,3%)",
   "Coagulopatia trebuie corectată înainte de procedură; dacă un calcul nu poate fi extras, un stent decomprima până la o nouă ERCP sau chirurgie",
   "Sângerarea atinge 50%, perforația fiind regula (peste 30%)",
   "Stentul este contraindicat când extracția eșuează",
   "ERCP electiv nu se face în ambulator, coagulopatia neavând relevanță"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Pancreatită postprocedură, sângerare GI (1–2%) și perforație duodenală sau de CBP (0,3%) — Corect: Cele trei complicații și cifrele sunt explicite.\n\nCoagulopatia trebuie corectată înainte de procedură; dacă un calcul nu poate fi extras, un stent decomprima până la o nouă ERCP sau chirurgie — Corect: Corectarea coagulării și stentul paliativ sunt citate.\n\nSângerarea atinge 50%, perforația fiind regula (peste 30%) — Incorect: 1–2% și 0,3%, nu 50%/30%.\n\nStentul este contraindicat când extracția eșuează — Incorect: Stentul este tocmai soluția când extracția eșuează.\n\nERCP electiv nu se face în ambulator, coagulopatia neavând relevanță — Incorect: ERCP electiv este de obicei ambulatoriu.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 255, ERCP — Sângerare 1–2%, perforație 0,3% (pagini PDF: 167).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    255
   ],
   "pdfPages": [
    167
   ],
   "section": "ERCP — Sângerare 1–2%, perforație 0,3%"
  },
  "learningObjective": "Reținerea procentelor 1–2% (sângerare) și 0,3% (perforație) și a stentului de decomprimare când extracția eșuează.",
  "optionRationales": [
   "Cele trei complicații și cifrele sunt explicite.",
   "Corectarea coagulării și stentul paliativ sunt citate.",
   "1–2% și 0,3%, nu 50%/30%.",
   "Stentul este tocmai soluția când extracția eșuează.",
   "ERCP electiv este de obicei ambulatoriu."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Ridică sângerarea de la 1–2% la 50% și perforația de la 0,3% la 30%."
  },
  "textbookExpressions": [
   "1-2%",
   "0,3%"
  ]
 },
 {
  "id": "biliar-adv-043",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Explorarea deschisă a CBP se caracterizează prin:",
  "options": [
   "Indicații absolute: palparea unui calcul în cale sau vizualizarea lui preoperator ori pe colangiografia intraoperatorie",
   "Indicații relative: icter, pancreatită acută biliară, dilatație de cale și microlitiază veziculară; atunci colangiografia intraoperatorie confirmă sau infirmă calculii",
   "Tehnica include manevra Kocher, incizie longitudinală mică, irigare, catetere cu balon, coledocoscop, penses/coșulețe, apoi tub în T",
   "Indicația absolută este dispepsia izolată, Kocher-ul fiind evitat",
   "Tubul în T se omite, breșa lăsându-se deschisă în peritoneu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Indicații absolute: palparea unui calcul în cale sau vizualizarea lui preoperator ori pe colangiografia intraoperatorie — Corect: Absolutele sunt enumerate.\n\nIndicații relative: icter, pancreatită acută biliară, dilatație de cale și microlitiază veziculară; atunci colangiografia intraoperatorie confirmă sau infirmă calculii — Corect: Relativele și rolul colangiografiei sunt citate.\n\nTehnica include manevra Kocher, incizie longitudinală mică, irigare, catetere cu balon, coledocoscop, penses/coșulețe, apoi tub în T — Corect: Kocher, incizia, instrumentele și tubul în T sunt descrise.\n\nIndicația absolută este dispepsia izolată, Kocher-ul fiind evitat — Incorect: Dispepsia nu este indicație absolută.\n\nTubul în T se omite, breșa lăsându-se deschisă în peritoneu — Incorect: Tubul în T închide breșa, nu se lasă deschis.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 255, Explorarea CBP — Absolute versus relative (pagini PDF: 167).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    255
   ],
   "pdfPages": [
    167
   ],
   "section": "Explorarea CBP — Absolute versus relative"
  },
  "learningObjective": "Contrastarea indicațiilor absolute (calcul văzut/palpat) cu cele relative (icter, pancreatită, dilatație, microlitiază) și a manevrei Kocher.",
  "optionRationales": [
   "Absolutele sunt enumerate.",
   "Relativele și rolul colangiografiei sunt citate.",
   "Kocher, incizia, instrumentele și tubul în T sunt descrise.",
   "Dispepsia nu este indicație absolută.",
   "Tubul în T închide breșa, nu se lasă deschis."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă dispepsia în indicație absolută și omite tubul în T, doi piloni ai explorării deschise."
  },
  "textbookExpressions": [
   "manevra Kocher",
   "Indicaţiile absolute"
  ]
 },
 {
  "id": "biliar-adv-044",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Patogenia calculilor micști de colesterol include:",
  "options": [
   "Precipitarea cristalelor dacă bila e litogenică și suprasaturată; factorii de nucleație aglomerează cristalele cu bilirubină, mucus și calciu",
   "Majoritatea micștilor nu conțin suficient calciu pentru a fi radioopaci; ocazional se formează un calcul „solitar” aproape în întregime din colesterol",
   "Evacuarea incompletă a veziculei asigură condițiile de conglomerare, deci majoritatea calculilor se formează în colecist, nu în căi",
   "Micștii sunt 20% și se formează primitiv în căile infectate",
   "Toți micștii sunt radioopaci, nucleația neavând rol"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Precipitarea cristalelor dacă bila e litogenică și suprasaturată; factorii de nucleație aglomerează cristalele cu bilirubină, mucus și calciu — Corect: Litogenia, suprasaturarea și nucleația sunt explicite.\n\nMajoritatea micștilor nu conțin suficient calciu pentru a fi radioopaci; ocazional se formează un calcul „solitar” aproape în întregime din colesterol — Corect: Radiotransparența și calculul solitar de colesterol sunt citate.\n\nEvacuarea incompletă a veziculei asigură condițiile de conglomerare, deci majoritatea calculilor se formează în colecist, nu în căi — Corect: Staza veziculară ca loc principal de formare este enunțată.\n\nMicștii sunt 20% și se formează primitiv în căile infectate — Incorect: 20% și căile infectate definesc pigmentarii, nu micștii (circa 75%).\n\nToți micștii sunt radioopaci, nucleația neavând rol — Incorect: Majoritatea nu sunt radioopaci; nucleația este centrală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 243, Patogenie — Micști, nucleație, solitar (pagini PDF: 155).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    243
   ],
   "pdfPages": [
    155
   ],
   "section": "Patogenie — Micști, nucleație, solitar"
  },
  "learningObjective": "Legarea suprasaturării/nucleației de radiotransparență și de formarea în veziculă prin stază.",
  "optionRationales": [
   "Litogenia, suprasaturarea și nucleația sunt explicite.",
   "Radiotransparența și calculul solitar de colesterol sunt citate.",
   "Staza veziculară ca loc principal de formare este enunțată.",
   "20% și căile infectate definesc pigmentarii, nu micștii (circa 75%).",
   "Majoritatea nu sunt radioopaci; nucleația este centrală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie micștilor cifrele și sediul pigmentarilor (20%, căi infectate) și îi face pe toți radioopaci."
  },
  "textbookExpressions": [
   "colesterol „solitar\"",
   "factorilor de nucleaţie"
  ]
 },
 {
  "id": "biliar-adv-045",
  "topicId": "biliar",
  "type": "CM",
  "stem": "La pacientul icteric, semnele de obstacol extrahepatic includ:",
  "options": [
   "Scaune decolorate și urină hipercromă, ca ceaiul",
   "Prurit prin concentrații tisulare crescute de acizi biliari conjugați reabsorbiți din intestin",
   "Urină incoloră și scaune hipercrome, pruritul lipsind în obstacol",
   "Pruritul e cauzat de bilirubină neconjugată, scaunele rămânând normale",
   "Urina hipercromă exclude obstacolul, indicând doar hemoliză"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Scaune decolorate și urină hipercromă, ca ceaiul — Corect: Scaunele decolorate și urina ca ceaiul sunt explicite.\n\nPrurit prin concentrații tisulare crescute de acizi biliari conjugați reabsorbiți din intestin — Corect: Mecanismul pruritului (acizi biliari conjugați) este citat.\n\nUrină incoloră și scaune hipercrome, pruritul lipsind în obstacol — Incorect: Direcția culorilor este inversată.\n\nPruritul e cauzat de bilirubină neconjugată, scaunele rămânând normale — Incorect: Pruritul ține de acizi biliari conjugați, nu de neconjugată.\n\nUrina hipercromă exclude obstacolul, indicând doar hemoliză — Incorect: Urina hipercromă susține obstacolul, nu hemoliza (neconjugată).\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 244, Icter obstructiv — Scaune, urină, prurit (pagini PDF: 156).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    244
   ],
   "pdfPages": [
    156
   ],
   "section": "Icter obstructiv — Scaune, urină, prurit"
  },
  "learningObjective": "Recunoașterea triadului scaune decolorate / urină ca ceaiul / prurit prin acizi biliari conjugați.",
  "optionRationales": [
   "Scaunele decolorate și urina ca ceaiul sunt explicite.",
   "Mecanismul pruritului (acizi biliari conjugați) este citat.",
   "Direcția culorilor este inversată.",
   "Pruritul ține de acizi biliari conjugați, nu de neconjugată.",
   "Urina hipercromă susține obstacolul, nu hemoliza (neconjugată)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează culorile scaun/urină și atribuie pruritul bilirubinei neconjugate."
  },
  "textbookExpressions": [
   "scaunelor decolorate",
   "urine hipercrome"
  ]
 },
 {
  "id": "biliar-adv-046",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Embriologia arborelui biliar, potrivit capitolului:",
  "options": [
   "Arborele biliar își are originea într-un diverticul al proenteronului; din cei trei muguri iau naștere ficatul, pancreasul ventral și vezicula biliară",
   "Vezicula se localizează în hipocondrul drept, sub diviziunea anatomică a lobilor drept și stâng",
   "Originea este din diverticulul hindgut, mugurii dând doar splina și rinichiul",
   "Pancreasul ventral nu derivă din acești muguri, vezicula formându-se în hipocondrul stâng",
   "Proenteronul nu participă, calea biliară fiind un derivat neural"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Arborele biliar își are originea într-un diverticul al proenteronului; din cei trei muguri iau naștere ficatul, pancreasul ventral și vezicula biliară — Corect: Diverticulul proenteronului și cei trei muguri sunt explicite.\n\nVezicula se localizează în hipocondrul drept, sub diviziunea anatomică a lobilor drept și stâng — Corect: Localizarea în HD sub scizura interlobară este citată.\n\nOriginea este din diverticulul hindgut, mugurii dând doar splina și rinichiul — Incorect: Nu este hindgut; splina și rinichiul nu sunt mugurii listați.\n\nPancreasul ventral nu derivă din acești muguri, vezicula formându-se în hipocondrul stâng — Incorect: Pancreasul ventral este unul dintre muguri; vezicula e în HD.\n\nProenteronul nu participă, calea biliară fiind un derivat neural — Incorect: Originea este endodermică din proenteron, nu neurală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 242, Embriologie — Trei muguri (pagini PDF: 154).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    242
   ],
   "pdfPages": [
    154
   ],
   "section": "Embriologie — Trei muguri"
  },
  "learningObjective": "Recunoașterea originii din diverticulul proenteronului și a celor trei muguri (ficat, pancreas ventral, veziculă).",
  "optionRationales": [
   "Diverticulul proenteronului și cei trei muguri sunt explicite.",
   "Localizarea în HD sub scizura interlobară este citată.",
   "Nu este hindgut; splina și rinichiul nu sunt mugurii listați.",
   "Pancreasul ventral este unul dintre muguri; vezicula e în HD.",
   "Originea este endodermică din proenteron, nu neurală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută originea pe hindgut și înlocuiește cei trei muguri (ficat/pancreas ventral/veziculă) cu splină și rinichi."
  },
  "textbookExpressions": [
   "proenteronului",
   "trei muguri"
  ]
 },
 {
  "id": "biliar-adv-047",
  "topicId": "biliar",
  "type": "CM",
  "stem": "CBP, înainte de a se deschide în duoden, se caracterizează prin:",
  "options": [
   "Trece prin capul pancreasului și, de regulă, se unește cu ductul pancreatic la circa 1 cm de peretele duodenal, formând un canal comun care se deschide prin ampula Vater",
   "Fluxul biliar în duoden este reglat de sfincterul Oddi, care manșonează acest canal comun",
   "Se unește cu ductul pancreatic la 10 cm de duoden, Oddi lipsind ca sfincter",
   "Ampula Vater se deschide în prima porțiune duodenală, fără canal comun",
   "CBP evită capul pancreasului, unindu-se cu canalul cistic în duoden"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Trece prin capul pancreasului și, de regulă, se unește cu ductul pancreatic la circa 1 cm de peretele duodenal, formând un canal comun care se deschide prin ampula Vater — Corect: Traiectul prin capul pancreasului, unirea la circa 1 cm și ampula Vater sunt explicite.\n\nFluxul biliar în duoden este reglat de sfincterul Oddi, care manșonează acest canal comun — Corect: Manșonarea canalului comun de către Oddi este citată.\n\nSe unește cu ductul pancreatic la 10 cm de duoden, Oddi lipsind ca sfincter — Incorect: Distanța citată este 1 cm, nu 10 cm; Oddi există.\n\nAmpula Vater se deschide în prima porțiune duodenală, fără canal comun — Incorect: Deschiderea este în a doua porțiune duodenală.\n\nCBP evită capul pancreasului, unindu-se cu canalul cistic în duoden — Incorect: CBP trece prin capul pancreasului; cisticul se unește mai proximal, formând CBP.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 242, Anatomie — Ampula Vater și Oddi (pagini PDF: 154).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    242
   ],
   "pdfPages": [
    154
   ],
   "section": "Anatomie — Ampula Vater și Oddi"
  },
  "learningObjective": "Recunoașterea unirii CBP–Wirsung la circa 1 cm de duoden și a rolului sfincterului Oddi pe canalul comun.",
  "optionRationales": [
   "Traiectul prin capul pancreasului, unirea la circa 1 cm și ampula Vater sunt explicite.",
   "Manșonarea canalului comun de către Oddi este citată.",
   "Distanța citată este 1 cm, nu 10 cm; Oddi există.",
   "Deschiderea este în a doua porțiune duodenală.",
   "CBP trece prin capul pancreasului; cisticul se unește mai proximal, formând CBP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 1 cm cu 10 cm și anulează Oddi, două repere de la sfârșitul paragrafului de anatomie."
  },
  "textbookExpressions": [
   "circa 1 cm",
   "sfincterul lui Oddi"
  ]
 },
 {
  "id": "biliar-adv-048",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Formarea de calculi biliari poate fi prevenită, potrivit capitolului, prin:",
  "options": [
   "Evitarea obezității",
   "Dietă bogată în fibre, pentru inhibarea circuitului enterohepatic al acizilor biliari dehidroxilați",
   "Mese la intervale regulate, pentru scăderea timpului de stocare a bilei în veziculă, și alimente sărace în acizi grași saturați, pentru reducerea nucleației bilei litogene",
   "Dietă hipercalorică, mese unice zilnice și grăsimi saturate în exces, pentru a accelera evacuarea veziculei",
   "Creșterea stocării bilei în colecist, nucleația fiind independentă de dietă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Evitarea obezității — Corect: Evitarea obezității deschide lista de prevenție.\n\nDietă bogată în fibre, pentru inhibarea circuitului enterohepatic al acizilor biliari dehidroxilați — Corect: Fibrele și circuitul enterohepatic al acizilor dehidroxilați sunt citate.\n\nMese la intervale regulate, pentru scăderea timpului de stocare a bilei în veziculă, și alimente sărace în acizi grași saturați, pentru reducerea nucleației bilei litogene — Corect: Mesele regulate și reducerea grăsimilor saturate închid paragraful.\n\nDietă hipercalorică, mese unice zilnice și grăsimi saturate în exces, pentru a accelera evacuarea veziculei — Incorect: Hipercaloric, masă unică și saturate cresc, nu scad, riscul.\n\nCreșterea stocării bilei în colecist, nucleația fiind independentă de dietă — Incorect: Stocarea prelungită favorizează nucleația; dieta o influențează.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 242, 243, Prevenția litiazei — Dietă și ritm alimentar (pagini PDF: 154, 155).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    242,
    243
   ],
   "pdfPages": [
    154,
    155
   ],
   "section": "Prevenția litiazei — Dietă și ritm alimentar"
  },
  "learningObjective": "Aplicarea triadului evitare obezitate / fibre / mese regulate + grăsimi nesaturate ca prevenție a nucleației.",
  "optionRationales": [
   "Evitarea obezității deschide lista de prevenție.",
   "Fibrele și circuitul enterohepatic al acizilor dehidroxilați sunt citate.",
   "Mesele regulate și reducerea grăsimilor saturate închid paragraful.",
   "Hipercaloric, masă unică și saturate cresc, nu scad, riscul.",
   "Stocarea prelungită favorizează nucleația; dieta o influențează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sfaturile dietetice (fibre, mese regulate) în stază și grăsimi saturate, exact ce textul cere evitat."
  },
  "textbookExpressions": [
   "conţinut bogat în fibre",
   "acizi graşi saturaţi"
  ]
 },
 {
  "id": "biliar-adv-049",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Amilaza și lipaza serice, în patologia biliară acută:",
  "options": [
   "Pot fi ușor crescute atât în colecistita acută, cât și în colangita acută",
   "Creșterea marcată sugerează pancreatită acută",
   "O creștere ușoară în colecistită este echivalentă diagnosticului de pancreatită necrotico-hemoragică",
   "Lipaza rămâne normală în pancreatita biliară, amilaza crescând doar în colica necomplicată",
   "Enzimele pancreatice nu se dozează în icterul obstructiv, fiind specifice ulcerului perforat"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Pot fi ușor crescute atât în colecistita acută, cât și în colangita acută — Corect: Creșterea ușoară în ambele infecții biliare este explicită.\n\nCreșterea marcată sugerează pancreatită acută — Corect: Creșterea marcată ca indicator de pancreatită este citată.\n\nO creștere ușoară în colecistită este echivalentă diagnosticului de pancreatită necrotico-hemoragică — Incorect: Creșterea ușoară nu echivalează pancreatita severă.\n\nLipaza rămâne normală în pancreatita biliară, amilaza crescând doar în colica necomplicată — Incorect: Ambele enzime cresc marcat în pancreatită, nu doar amilaza în colică.\n\nEnzimele pancreatice nu se dozează în icterul obstructiv, fiind specifice ulcerului perforat — Incorect: Textul le plasează tocmai în bilanțul biliar acut.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 244, Laborator — Amilază și lipază (pagini PDF: 156).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    244
   ],
   "pdfPages": [
    156
   ],
   "section": "Laborator — Amilază și lipază"
  },
  "learningObjective": "Contrastarea creșterii ușoare din colecistită/colangită cu creșterea marcată care orientează spre pancreatită.",
  "optionRationales": [
   "Creșterea ușoară în ambele infecții biliare este explicită.",
   "Creșterea marcată ca indicator de pancreatită este citată.",
   "Creșterea ușoară nu echivalează pancreatita severă.",
   "Ambele enzime cresc marcat în pancreatită, nu doar amilaza în colică.",
   "Textul le plasează tocmai în bilanțul biliar acut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Egalizează creșterea ușoară din colecistită cu pancreatita necrotico-hemoragică."
  },
  "textbookExpressions": [
   "Amilaza serică şi lipaza",
   "pancreatită acută"
  ]
 },
 {
  "id": "biliar-adv-050",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Ecografia în colecistita acută, dincolo de vizualizarea calculilor, arată frecvent:",
  "options": [
   "Distensie veziculară, îngroșarea peretelui (>3–4 mm) și lichid pericolecistic",
   "Semnul Murphy ecografic: cel mai sensibil punct la sondă corespunde proiecției colecistului, prezent la 98% dintre pacienții cu colecistită acută",
   "Dacă vezicula e destinsă și canalele sunt dilatate, obstacolul e probabil distal de joncțiunea cistic–hepatic comun",
   "Peretele sub 1 mm și absența lichidului pericolecistic sunt patognomonice pentru gangrenă",
   "Murphy ecografic e prezent la 10% din cazuri, obstacolul distal dilatând doar cisticul, nu hepaticul"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Distensie veziculară, îngroșarea peretelui (>3–4 mm) și lichid pericolecistic — Corect: Distensia, pragul >3–4 mm și lichidul pericolecistic sunt explicite.\n\nSemnul Murphy ecografic: cel mai sensibil punct la sondă corespunde proiecției colecistului, prezent la 98% dintre pacienții cu colecistită acută — Corect: Definiția Murphy ecografic și cifra 98% sunt citate.\n\nDacă vezicula e destinsă și canalele sunt dilatate, obstacolul e probabil distal de joncțiunea cistic–hepatic comun — Corect: Regula veziculă destinsă + căi dilatate → obstacol distal de joncțiune este de pe pagina anterioară.\n\nPeretele sub 1 mm și absența lichidului pericolecistic sunt patognomonice pentru gangrenă — Incorect: Peretele subțire fără lichid nu definește gangrena.\n\nMurphy ecografic e prezent la 10% din cazuri, obstacolul distal dilatând doar cisticul, nu hepaticul — Incorect: 98%, nu 10%; obstacolul distal dilată și hepaticul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 246, 245, Ecografie — Perete >3–4 mm și Murphy 98% (pagini PDF: 158, 157).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    246,
    245
   ],
   "pdfPages": [
    158,
    157
   ],
   "section": "Ecografie — Perete >3–4 mm și Murphy 98%"
  },
  "learningObjective": "Aplicarea semnelor de inflamație (>3–4 mm, lichid) și a Murphy ecografic (98%), plus localizarea obstacolului distal de joncțiune.",
  "optionRationales": [
   "Distensia, pragul >3–4 mm și lichidul pericolecistic sunt explicite.",
   "Definiția Murphy ecografic și cifra 98% sunt citate.",
   "Regula veziculă destinsă + căi dilatate → obstacol distal de joncțiune este de pe pagina anterioară.",
   "Peretele subțire fără lichid nu definește gangrena.",
   "98%, nu 10%; obstacolul distal dilată și hepaticul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Coboară Murphy ecografic de la 98% la 10% și inversează pragul de îngroșare parietală."
  },
  "textbookExpressions": [
   ">3-4 mm",
   "98% dintre pacienţii"
  ]
 },
 {
  "id": "biliar-adv-051",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Scintigrafia HIDA, dincolo de criteriile de colecistită, se caracterizează prin:",
  "options": [
   "Presupune injectarea IV a unui derivat de acid iminodiacetic marcat cu 99m-tehnețiu, excretat de ficat în bilă în concentrații mari",
   "Este utilă și în identificarea unei posibile fistule biliare postoperatorii, dar în prezent este rar folosită în acest scop",
   "Este investigația de elecție pentru calculii veziculari și ai CBP, înlocuind ecografia",
   "Trasorul nu ajunge în bilă, fiind reținut doar renal",
   "Fistula postoperatorie se diagnostichează doar prin radiografie simplă, HIDA fiind abandonată de la introducere"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Presupune injectarea IV a unui derivat de acid iminodiacetic marcat cu 99m-tehnețiu, excretat de ficat în bilă în concentrații mari — Corect: Marcajul cu 99m-tehnețiu și excreția hepatică în bilă sunt explicite.\n\nEste utilă și în identificarea unei posibile fistule biliare postoperatorii, dar în prezent este rar folosită în acest scop — Corect: Utilitatea istorică pentru fistulă și folosirea rară actuală sunt citate.\n\nEste investigația de elecție pentru calculii veziculari și ai CBP, înlocuind ecografia — Incorect: HIDA nu identifică calculii veziculari sau ai CBP.\n\nTrasorul nu ajunge în bilă, fiind reținut doar renal — Incorect: Trasorul este excretat în bilă, nu reținut renal.\n\nFistula postoperatorie se diagnostichează doar prin radiografie simplă, HIDA fiind abandonată de la introducere — Incorect: Textul îi recunoaște încă un rol, deși rar, în fistulă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 246, HIDA — 99mTc și fistula postoperatorie (pagini PDF: 158).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    246
   ],
   "pdfPages": [
    158
   ],
   "section": "HIDA — 99mTc și fistula postoperatorie"
  },
  "learningObjective": "Recunoașterea trasorului 99mTc-iminodiacetic și a rolului rar, actual, în fistula biliară postoperatorie.",
  "optionRationales": [
   "Marcajul cu 99m-tehnețiu și excreția hepatică în bilă sunt explicite.",
   "Utilitatea istorică pentru fistulă și folosirea rară actuală sunt citate.",
   "HIDA nu identifică calculii veziculari sau ai CBP.",
   "Trasorul este excretat în bilă, nu reținut renal.",
   "Textul îi recunoaște încă un rol, deși rar, în fistulă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă HIDA în testul de elecție pentru calculi și îi neagă excreția biliară."
  },
  "textbookExpressions": [
   "99\"'techneţiu",
   "fistule biliare postoperatorii"
  ]
 },
 {
  "id": "biliar-adv-052",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Tratamentul inițial și momentul colecistectomiei în colecistita acută includ:",
  "options": [
   "Oprirea aportului oral, lichide IV și antibiotice care acoperă Gram-negativele aerobe și enterococul (E. coli, Klebsiella pneumoniae, Streptococcus faecalis)",
   "Cel mai mare beneficiu îl aduce colecistectomia precoce, la câteva zile de la prezentare, după hidratare și antibiotice",
   "Sonda nazogastrică este rareori necesară, dar e recomandată în caz de vărsături",
   "Colecistectomia se amână 6 luni de principiu, antibioticele fără Gram-negative fiind suficiente",
   "Sonda nazogastrică se montează de rutină, chiar fără vărsături, înlocuind antibioticele"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Oprirea aportului oral, lichide IV și antibiotice care acoperă Gram-negativele aerobe și enterococul (E. coli, Klebsiella pneumoniae, Streptococcus faecalis) — Corect: NPO, lichidele și spectrul bacterian sunt explicite.\n\nCel mai mare beneficiu îl aduce colecistectomia precoce, la câteva zile de la prezentare, după hidratare și antibiotice — Corect: Colecistectomia precoce la câteva zile, după resuscitare, este cerută.\n\nSonda nazogastrică este rareori necesară, dar e recomandată în caz de vărsături — Corect: NG rareori, exceptând vărsăturile, este citată.\n\nColecistectomia se amână 6 luni de principiu, antibioticele fără Gram-negative fiind suficiente — Incorect: Amânarea de 6 luni crește inflamația și complicațiile.\n\nSonda nazogastrică se montează de rutină, chiar fără vărsături, înlocuind antibioticele — Incorect: NG nu înlocuiește antibioticele și nu e de rutină.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 248, Colecistita acută — Antibiotice și colecistectomie precoce (pagini PDF: 160).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    248
   ],
   "pdfPages": [
    160
   ],
   "section": "Colecistita acută — Antibiotice și colecistectomie precoce"
  },
  "learningObjective": "Aplicarea spectrului E. coli/Klebsiella/enterococ, a ferestrei de câteva zile și a NG doar la vărsături.",
  "optionRationales": [
   "NPO, lichidele și spectrul bacterian sunt explicite.",
   "Colecistectomia precoce la câteva zile, după resuscitare, este cerută.",
   "NG rareori, exceptând vărsăturile, este citată.",
   "Amânarea de 6 luni crește inflamația și complicațiile.",
   "NG nu înlocuiește antibioticele și nu e de rutină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amână colecistectomia 6 luni și golește antibioticele de Gram-negative, inversul algoritmului precoce."
  },
  "textbookExpressions": [
   "Escherichia coli",
   "câteva zile de la prezentare"
  ]
 },
 {
  "id": "biliar-adv-053",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Momentul operației în colecistita acută trebuie întârziat, respectiv avansat, când:",
  "options": [
   "Se amână dacă trebuie gestionate alte probleme medicale majore",
   "Se practică mai devreme dacă se suspicionează perforație sau abces",
   "Intervențiile de urgență au mortalitate și morbiditate ușor mai ridicate decât electivele, adesea prin boli cardiovasculare, pulmonare sau metabolice",
   "Se amână până la gangrenă, urgența fiind rezervată colicii necomplicate",
   "Mortalitatea de urgență este mai mică decât a electivei, comorbiditățile neavând rol"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se amână dacă trebuie gestionate alte probleme medicale majore — Corect: Amânarea pentru probleme medicale majore este explicită.\n\nSe practică mai devreme dacă se suspicionează perforație sau abces — Corect: Avansarea la perforație sau abces este citată.\n\nIntervențiile de urgență au mortalitate și morbiditate ușor mai ridicate decât electivele, adesea prin boli cardiovasculare, pulmonare sau metabolice — Corect: Excesul de mortalitate/morbiditate al urgenței și cauzele (CV, pulmonar, metabolic) sunt descrise.\n\nSe amână până la gangrenă, urgența fiind rezervată colicii necomplicate — Incorect: Gangrena e tocmai o complicație de evitat prin operație precoce.\n\nMortalitatea de urgență este mai mică decât a electivei, comorbiditățile neavând rol — Incorect: Urgența are risc ușor mai mare, nu mai mic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 248, Colecistita acută — Amânare versus urgență (pagini PDF: 160).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    248
   ],
   "pdfPages": [
    160
   ],
   "section": "Colecistita acută — Amânare versus urgență"
  },
  "learningObjective": "Contrastarea amânării pentru comorbidități majore cu avansarea la suspiciune de perforație/abces și cu excesul de risc al urgenței.",
  "optionRationales": [
   "Amânarea pentru probleme medicale majore este explicită.",
   "Avansarea la perforație sau abces este citată.",
   "Excesul de mortalitate/morbiditate al urgenței și cauzele (CV, pulmonar, metabolic) sunt descrise.",
   "Gangrena e tocmai o complicație de evitat prin operație precoce.",
   "Urgența are risc ușor mai mare, nu mai mic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează amânarea (comorbidități) cu avansarea (perforație) și declară urgența mai sigură decât electiva."
  },
  "textbookExpressions": [
   "perforaţiei sau abcesului",
   "mortalitate şi morbiditate"
  ]
 },
 {
  "id": "biliar-adv-054",
  "topicId": "biliar",
  "type": "CM",
  "stem": "După un episod de pancreatită biliară, colecistectomia și sfincterotomia se poziționează astfel:",
  "options": [
   "În forme ușoare/moderate, colecistectomia laparoscopică se poate face în primele 48–72 de ore, când durerea s-a remis și amilaza a revenit la normal",
   "Amânarea este justificată în pancreatita acută severă; ERCP cu sfincterotomie endoscopică poate reduce recidiva la 2–5% pentru următorii 2 ani",
   "Sfincterotomia de urgență cu extracție poate fi salvatoare în forma severă dacă evoluția nu se îmbunătățește în 24–36 de ore, la resuscitare adecvată, cu suspiciune înaltă de coledocolitiază",
   "Colecistectomia se amână 6 luni după orice formă ușoară, sfincterotomia crescând recidiva la 60%",
   "Fereastra 24–36 de ore contraindică ERCP-ul, amilaza normală interzicând colecistectomia precoce"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În forme ușoare/moderate, colecistectomia laparoscopică se poate face în primele 48–72 de ore, când durerea s-a remis și amilaza a revenit la normal — Corect: 48–72 de ore, remisia durerii și normalizarea amilazei sunt explicite.\n\nAmânarea este justificată în pancreatita acută severă; ERCP cu sfincterotomie endoscopică poate reduce recidiva la 2–5% pentru următorii 2 ani — Corect: Amânarea în severă și cifra 2–5% la 2 ani sunt citate.\n\nSfincterotomia de urgență cu extracție poate fi salvatoare în forma severă dacă evoluția nu se îmbunătățește în 24–36 de ore, la resuscitare adecvată, cu suspiciune înaltă de coledocolitiază — Corect: Fereastra 24–36 de ore pentru ES de urgență este descrisă.\n\nColecistectomia se amână 6 luni după orice formă ușoară, sfincterotomia crescând recidiva la 60% — Incorect: 60%/6 luni este recidiva FĂRĂ colecistectomie, nu un protocol după forma ușoară.\n\nFereastra 24–36 de ore contraindică ERCP-ul, amilaza normală interzicând colecistectomia precoce — Incorect: ES de urgență este tocmai indicată la 24–36 de ore dacă nu se ameliorează.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 250, Pancreatită biliară — 48–72 h versus 24–36 h (pagini PDF: 162).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    250
   ],
   "pdfPages": [
    162
   ],
   "section": "Pancreatită biliară — 48–72 h versus 24–36 h"
  },
  "learningObjective": "Diferențierea ferestrei 48–72 h pentru colecistectomia formelor ușoare de fereastra 24–36 h a sfincterotomiei de urgență și de reducerea recidivei la 2–5%.",
  "optionRationales": [
   "48–72 de ore, remisia durerii și normalizarea amilazei sunt explicite.",
   "Amânarea în severă și cifra 2–5% la 2 ani sunt citate.",
   "Fereastra 24–36 de ore pentru ES de urgență este descrisă.",
   "60%/6 luni este recidiva FĂRĂ colecistectomie, nu un protocol după forma ușoară.",
   "ES de urgență este tocmai indicată la 24–36 de ore dacă nu se ameliorează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 48–72 h (colecistectomie ușoară) cu 24–36 h (ES de urgență) și inversează efectul sfincterotomiei asupra recidivei."
  },
  "textbookExpressions": [
   "2-5%",
   "24--36 de ore"
  ]
 },
 {
  "id": "biliar-adv-055",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Colangiografia intraoperatorie în pancreatita biliară, la momentul colecistectomiei:",
  "options": [
   "Trebuie efectuată pentru a confirma absența calculilor din calea biliară",
   "Antibioterapia se administrează în formele severe și pentru complicațiile septice; în colecistita acută asociată se poate face mai întâi colecistostomie",
   "IOC-ul se omite de principiu, calculii reziduali fiind inofensivi după pancreatită",
   "Antibioticele se dau de rutină în toate formele ușoare, colecistostomia înlocuind colecistectomia la tânărul fără comorbidități",
   "Confirmarea absenței calculilor se face doar prin radiografie abdominală simplă, fără contrast"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Trebuie efectuată pentru a confirma absența calculilor din calea biliară — Corect: IOC-ul pentru confirmarea absenței calculilor este explicit.\n\nAntibioterapia se administrează în formele severe și pentru complicațiile septice; în colecistita acută asociată se poate face mai întâi colecistostomie — Corect: Antibioticele în severă/sepsis și colecistostomia ca punte sunt citate.\n\nIOC-ul se omite de principiu, calculii reziduali fiind inofensivi după pancreatită — Incorect: IOC-ul este cerut, nu omis.\n\nAntibioticele se dau de rutină în toate formele ușoare, colecistostomia înlocuind colecistectomia la tânărul fără comorbidități — Incorect: Antibioticele nu sunt de rutină în ușoare; colecistostomia e pentru grav, nu pentru tânărul fără comorbidități.\n\nConfirmarea absenței calculilor se face doar prin radiografie abdominală simplă, fără contrast — Incorect: Confirmarea se face prin colangiografie cu contrast, nu prin radiografie simplă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 250, Pancreatită biliară — IOC și antibiotice (pagini PDF: 162).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    250
   ],
   "pdfPages": [
    162
   ],
   "section": "Pancreatită biliară — IOC și antibiotice"
  },
  "learningObjective": "Recunoașterea IOC-ului ca verificare a CBP la colecistectomie și a rezervării antibioticelor/colecistostomiei pentru formele severe.",
  "optionRationales": [
   "IOC-ul pentru confirmarea absenței calculilor este explicit.",
   "Antibioticele în severă/sepsis și colecistostomia ca punte sunt citate.",
   "IOC-ul este cerut, nu omis.",
   "Antibioticele nu sunt de rutină în ușoare; colecistostomia e pentru grav, nu pentru tânărul fără comorbidități.",
   "Confirmarea se face prin colangiografie cu contrast, nu prin radiografie simplă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Omit IOC-ul și generalizează antibioticele asupra formelor ușoare, două gesturi din același paragraf de închidere."
  },
  "textbookExpressions": [
   "Colangiografia intraoperatorie",
   "Terapia antibiotică"
  ]
 },
 {
  "id": "biliar-adv-056",
  "topicId": "biliar",
  "type": "CS",
  "stem": "Icterul în cancerul avansat de veziculă biliară este prezent la:",
  "options": [
   "Aproximativ 50% dintre acești pacienți, prin diseminare precoce directă la ficat și structurile hilului hepatic și prin metastaze în ganglionii regionali",
   "Sub 1% dintre cazuri, cancerul rămânând strict intramural",
   "90% din formele incidente, descoperite pe piesa de colecistectomie pentru colică",
   "Doar în vezicula de porțelan, fără extensie hilară",
   "Pacienții cu durere persistentă în HD, dar fără scădere ponderală, icterul fiind excepțional"
  ],
  "correct": [
   0
  ],
  "explanation": "Aproximativ 50% dintre acești pacienți, prin diseminare precoce directă la ficat și structurile hilului hepatic și prin metastaze în ganglionii regionali — Corect: Cifra de aproximativ 50% și căile de diseminare (ficat, hil, ganglioni) sunt explicite.\n\nSub 1% dintre cazuri, cancerul rămânând strict intramural — Incorect: Formele avansate nu rămân intramurale.\n\n90% din formele incidente, descoperite pe piesa de colecistectomie pentru colică — Incorect: Formele incidente au adesea simptome litiazice, nu icterul a 90%.\n\nDoar în vezicula de porțelan, fără extensie hilară — Incorect: Porțelanul e factor de risc, nu unica situație de icter.\n\nPacienții cu durere persistentă în HD, dar fără scădere ponderală, icterul fiind excepțional — Incorect: Boala avansată asociază durere, scădere ponderală, astenie și frecvent icter.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 252, Cancer de veziculă avansat — Icter 50% (pagini PDF: 164).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    252
   ],
   "pdfPages": [
    164
   ],
   "section": "Cancer de veziculă avansat — Icter 50%"
  },
  "learningObjective": "Recunoașterea prevalenței de circa 50% a icterului prin extensie hilară precoce, nu a formelor incidente intramurale.",
  "optionRationales": [
   "Cifra de aproximativ 50% și căile de diseminare (ficat, hil, ganglioni) sunt explicite.",
   "Formele avansate nu rămân intramurale.",
   "Formele incidente au adesea simptome litiazice, nu icterul a 90%.",
   "Porțelanul e factor de risc, nu unica situație de icter.",
   "Boala avansată asociază durere, scădere ponderală, astenie și frecvent icter."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Coboară icterul de la 50% sub 1% și îl rezervă formelor incidente, inversul paragrafului de boală avansată."
  },
  "textbookExpressions": [
   "aproximativ 50%",
   "hitul hepatic"
  ]
 },
 {
  "id": "biliar-adv-057",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Tumorile mai mari de veziculă, adiacente sau extinse în parenchimul hepatic, se tratează prin:",
  "options": [
   "Rezecție hepatică cuneiformă a patului colecistic și limfadenectomie regională",
   "Tumorile avansate pot necesita o rezecție hepatică formală",
   "Limfadenectomiei de hil îi lipsește standardizarea, din cauza proximității cu structuri vitale și a absenței unui mezenter mobil",
   "Rata de supraviețuire la 5 ani rămâne <5% la 5 ani, exceptând cancerul incipient descoperit incidental",
   "Sempla colecistectomie laparoscopică cu margini pozitive asigură 80% supraviețuire la 5 ani și în formele avansate"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Rezecție hepatică cuneiformă a patului colecistic și limfadenectomie regională — Corect: Rezecția cuneiformă a patului și limfadenectomia regională sunt explicite.\n\nTumorile avansate pot necesita o rezecție hepatică formală — Corect: Rezecția hepatică formală pentru avansate este citată.\n\nLimfadenectomiei de hil îi lipsește standardizarea, din cauza proximității cu structuri vitale și a absenței unui mezenter mobil — Corect: Lipsa de standardizare a limfadenectomiei hilare este enunțată.\n\nRata de supraviețuire la 5 ani rămâne <5% la 5 ani, exceptând cancerul incipient descoperit incidental — Corect: <5% la 5 ani, exceptând incidentalul incipient, este cifra de prognostic.\n\nSempla colecistectomie laparoscopică cu margini pozitive asigură 80% supraviețuire la 5 ani și în formele avansate — Incorect: 80% la 5 ani ține de adenocarcinomul mucinos incipient cu margini negative, nu de avansat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 253, 252, Cancer de veziculă — Rezecție cuneiformă versus formală (pagini PDF: 165, 164).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    253,
    252
   ],
   "pdfPages": [
    165,
    164
   ],
   "section": "Cancer de veziculă — Rezecție cuneiformă versus formală"
  },
  "learningObjective": "Contrastarea rezecției cuneiforme plus limfadenectomie cu rezecția hepatică formală și cu supraviețuirea <5% a formelor avansate.",
  "optionRationales": [
   "Rezecția cuneiformă a patului și limfadenectomia regională sunt explicite.",
   "Rezecția hepatică formală pentru avansate este citată.",
   "Lipsa de standardizare a limfadenectomiei hilare este enunțată.",
   "<5% la 5 ani, exceptând incidentalul incipient, este cifra de prognostic.",
   "80% la 5 ani ține de adenocarcinomul mucinos incipient cu margini negative, nu de avansat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde supraviețuirea de 80% a incidentalului incipient asupra tumorilor avansate care cer rezecție hepatică."
  },
  "textbookExpressions": [
   "rezecţie hepatică cuneiformă",
   "<5% la 5 ani"
  ]
 },
 {
  "id": "biliar-adv-058",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Colangiocarcinomul, dincolo de clasificarea anatomică, se caracterizează prin:",
  "options": [
   "Histologic sunt de obicei adenocarcinoame mucinoase; sunt tumori local-avansate, cu dezvoltare lentă, care metastazează rar la distanță",
   "Rezecția curativă este mai degrabă excepție decât regulă, din cauza relațiilor cu ficatul, vena portă și artera hepatică",
   "PTC facilitează evaluarea leziunilor proximale și accesul anterograd pentru stentare",
   "Metastazele pulmonare multiple sunt regula de prezentare, rezecția fiind posibilă la peste 90%",
   "PTC este inutilă proximal, stentarea anterogradă fiind imposibilă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Histologic sunt de obicei adenocarcinoame mucinoase; sunt tumori local-avansate, cu dezvoltare lentă, care metastazează rar la distanță — Corect: Adenocarcinomul mucinos, creșterea lentă și raritatea metastazelor distante sunt explicite.\n\nRezecția curativă este mai degrabă excepție decât regulă, din cauza relațiilor cu ficatul, vena portă și artera hepatică — Corect: Excepția rezecției curative din cauza vecinătăților vitale este citată.\n\nPTC facilitează evaluarea leziunilor proximale și accesul anterograd pentru stentare — Corect: Rolul PTC proximal și stentarea anterogradă sunt descrise.\n\nMetastazele pulmonare multiple sunt regula de prezentare, rezecția fiind posibilă la peste 90% — Incorect: Metastazele distante sunt rare, nu regula; rezecția curativă e excepția.\n\nPTC este inutilă proximal, stentarea anterogradă fiind imposibilă — Incorect: PTC este tocmai utilă proximal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 253, Colangiocarcinom — Biologie și PTC proximal (pagini PDF: 165).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    253
   ],
   "pdfPages": [
    165
   ],
   "section": "Colangiocarcinom — Biologie și PTC proximal"
  },
  "learningObjective": "Recunoașterea biologiei local-avansate (metastaze distante rare) și a rolului PTC în leziunile proximale.",
  "optionRationales": [
   "Adenocarcinomul mucinos, creșterea lentă și raritatea metastazelor distante sunt explicite.",
   "Excepția rezecției curative din cauza vecinătăților vitale este citată.",
   "Rolul PTC proximal și stentarea anterogradă sunt descrise.",
   "Metastazele distante sunt rare, nu regula; rezecția curativă e excepția.",
   "PTC este tocmai utilă proximal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă colangiocarcinomul într-o boală cu metastaze distante de rutină și neagă PTC-ul proximal."
  },
  "textbookExpressions": [
   "metastazează la distanţă",
   "PTC facilitează"
  ]
 },
 {
  "id": "biliar-adv-059",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Colecistectomia laparoscopică electivă, la pacientul altfel sănătos, se caracterizează prin:",
  "options": [
   "Majoritatea intervențiilor se pot efectua cu externarea în aceeași zi",
   "Chiar cu comorbidități grave sau pentru colecistită acută, spitalizarea este de obicei de numai 24–48 de ore",
   "Avantajele includ durere postoperatorie redusă, mai puține complicații de plagă și pulmonare și reluarea precoce a activităților",
   "Scăderea durerii postoperatorii față de colecistectomia deschisă explică toleranța la spitalizarea scurtă",
   "Complicațiile de plagă și pulmonare cresc față de abordul deschis, recuperarea fiind mai lentă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Majoritatea intervențiilor se pot efectua cu externarea în aceeași zi — Corect: Externarea în aceeași zi la electivul sănătos este explicită.\n\nChiar cu comorbidități grave sau pentru colecistită acută, spitalizarea este de obicei de numai 24–48 de ore — Corect: Fereastra 24–48 de ore pentru comorbidități/acut este citată.\n\nAvantajele includ durere postoperatorie redusă, mai puține complicații de plagă și pulmonare și reluarea precoce a activităților — Corect: Durerea redusă, complicațiile de plagă/pulmonare și reluarea precoce sunt listate.\n\nScăderea durerii postoperatorii față de colecistectomia deschisă explică toleranța la spitalizarea scurtă — Corect: Textul leagă toleranța la spitalizarea scurtă de scăderea semnificativă a durerii față de abordul deschis.\n\nComplicațiile de plagă și pulmonare cresc față de abordul deschis, recuperarea fiind mai lentă — Incorect: Complicațiile de plagă și pulmonare scad, nu cresc.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 254, Colecistectomia laparoscopică — Externare în aceeași zi (pagini PDF: 166).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    254
   ],
   "pdfPages": [
    166
   ],
   "section": "Colecistectomia laparoscopică — Externare în aceeași zi"
  },
  "learningObjective": "Aplicarea externării în aceeași zi (electiv sănătos) versus 24–48 de ore (comorbidități/acut) și a avantajelor de durere/plagă/pulmonar.",
  "optionRationales": [
   "Externarea în aceeași zi la electivul sănătos este explicită.",
   "Fereastra 24–48 de ore pentru comorbidități/acut este citată.",
   "Durerea redusă, complicațiile de plagă/pulmonare și reluarea precoce sunt listate.",
   "Textul leagă toleranța la spitalizarea scurtă de scăderea semnificativă a durerii față de abordul deschis.",
   "Complicațiile de plagă și pulmonare scad, nu cresc."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește externarea în aceeași zi cu internarea de 14 zile și inversează avantajul de plagă/pulmonar."
  },
  "textbookExpressions": [
   "aceeaşi zi",
   "24-48 de ore"
  ]
 },
 {
  "id": "biliar-adv-060",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Riscurile specifice abordului laparoscopic al colecistectomiei includ:",
  "options": [
   "Leziuni ale căilor biliare, ale intestinului și ale vaselor principale, de obicei prin inserția trocarului în orb sau utilizarea abuzivă a electrocauterului",
   "Dacă reperele anatomice sunt dificil de identificat sau apar dificultăți tehnice, procedura trebuie convertită la abord deschis",
   "Majoritatea chirurgilor folosesc o abordare selectivă a colangiografiei intraoperatorii, nu de rutină",
   "Trocarul în orb și electrocauterul abolesc riscul de leziune, conversia fiind interzisă",
   "Colangiografia de rutină înlocuiește conversia, anatomia dificilă nemaicerând abord deschis"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Leziuni ale căilor biliare, ale intestinului și ale vaselor principale, de obicei prin inserția trocarului în orb sau utilizarea abuzivă a electrocauterului — Corect: Leziunile de cale, intestin și vase prin trocar orb/electrocauter sunt explicite.\n\nDacă reperele anatomice sunt dificil de identificat sau apar dificultăți tehnice, procedura trebuie convertită la abord deschis — Corect: Conversia la anatomie dificilă este cerută.\n\nMajoritatea chirurgilor folosesc o abordare selectivă a colangiografiei intraoperatorii, nu de rutină — Corect: Abordarea selectivă a IOC este practica majorității.\n\nTrocarul în orb și electrocauterul abolesc riscul de leziune, conversia fiind interzisă — Incorect: Trocarul orb și electrocauterul sunt tocmai sursele de risc.\n\nColangiografia de rutină înlocuiește conversia, anatomia dificilă nemaicerând abord deschis — Incorect: Controversa rutină versus selectivă se încheie cu selectivul; conversia rămâne o opțiune.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 254, Laparoscopie — Trocar, electrocauter, conversie (pagini PDF: 166).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    254
   ],
   "pdfPages": [
    166
   ],
   "section": "Laparoscopie — Trocar, electrocauter, conversie"
  },
  "learningObjective": "Recunoașterea mecanismelor de leziune (trocar orb, electrocauter) și a regulii de conversie plus IOC selectivă.",
  "optionRationales": [
   "Leziunile de cale, intestin și vase prin trocar orb/electrocauter sunt explicite.",
   "Conversia la anatomie dificilă este cerută.",
   "Abordarea selectivă a IOC este practica majorității.",
   "Trocarul orb și electrocauterul sunt tocmai sursele de risc.",
   "Controversa rutină versus selectivă se încheie cu selectivul; conversia rămâne o opțiune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Interzice conversia și declară trocarul orb inofensiv, inversul paragrafului de complicații."
  },
  "textbookExpressions": [
   "inserţia trocarului în orb",
   "electrocauterului"
  ]
 },
 {
  "id": "biliar-adv-061",
  "topicId": "biliar",
  "type": "CM",
  "stem": "După explorarea deschisă a CBP, drenajul peritoneal și clamparea tubului în T:",
  "options": [
   "Drenajul peritoneal este suprimat la 24–48 de ore după ce tubul în T a fost clampat",
   "Drenajul unor cantități semnificative de sânge sau bilă necesită investigații suplimentare",
   "Tubul în T se extrage odată cu drenajul peritoneal, în primele 12 ore, fără clampare",
   "Sângele sau bila pe dren se ignoră, fiind așteptate fără investigație",
   "Clamparea tubului în T este contraindicată, drenajul peritoneal rămânând pe termen nedefinit"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Drenajul peritoneal este suprimat la 24–48 de ore după ce tubul în T a fost clampat — Corect: Fereastra 24–48 de ore după clampare este explicită.\n\nDrenajul unor cantități semnificative de sânge sau bilă necesită investigații suplimentare — Corect: Indicația de investigație la sânge sau bilă semnificative este citată.\n\nTubul în T se extrage odată cu drenajul peritoneal, în primele 12 ore, fără clampare — Incorect: Tubul în T se menține săptămâni, nu se extrage odată cu drenul la 12 ore.\n\nSângele sau bila pe dren se ignoră, fiind așteptate fără investigație — Incorect: Cantitățile semnificative cer investigație.\n\nClamparea tubului în T este contraindicată, drenajul peritoneal rămânând pe termen nedefinit — Incorect: Clamparea precede suprimarea drenului, nu este contraindicată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 255, Tub în T — Clampare și dren peritoneal (pagini PDF: 167).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    255
   ],
   "pdfPages": [
    167
   ],
   "section": "Tub în T — Clampare și dren peritoneal"
  },
  "learningObjective": "Secvența clampare → suprimarea drenului peritoneal la 24–48 de ore și investigarea sângerării/bilei semnificative.",
  "optionRationales": [
   "Fereastra 24–48 de ore după clampare este explicită.",
   "Indicația de investigație la sânge sau bilă semnificative este citată.",
   "Tubul în T se menține săptămâni, nu se extrage odată cu drenul la 12 ore.",
   "Cantitățile semnificative cer investigație.",
   "Clamparea precede suprimarea drenului, nu este contraindicată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extrage tubul în T odată cu drenul la 12 ore, invertind fereastra 24–48 de ore de după clampare."
  },
  "textbookExpressions": [
   "24--48 de ore",
   "tubul în T"
  ]
 },
 {
  "id": "biliar-adv-062",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Când persistă calculi restanți sau sunt numeroși în CBP, opțiunile după explorarea deschisă includ:",
  "options": [
   "Efectuarea unei derivații biliare (coledoco-duodeno-anastomoză sau coledoco-jejuno-anastomoză), astfel încât calculii restanți să poată trece în intestin",
   "Extracția prin ERCP; alternativ, avansarea unei sonde cu coșuleț de sârmă prin tubul în T, sub control fluoroscopic",
   "Reexplorarea chirurgicală a CBP, în rarele situații în care aceste metode eșuează",
   "Derivația biliară este contraindicată tocmai când calculii sunt numeroși",
   "Coșulețul prin tubul în T se evită, fluoroscopia fiind inutilă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Efectuarea unei derivații biliare (coledoco-duodeno-anastomoză sau coledoco-jejuno-anastomoză), astfel încât calculii restanți să poată trece în intestin — Corect: Derivația coledoco-duodenală sau jejunală pentru calculi numeroși/suspecți restanți este explicită.\n\nExtracția prin ERCP; alternativ, avansarea unei sonde cu coșuleț de sârmă prin tubul în T, sub control fluoroscopic — Corect: ERCP și coșulețul pe tub T sub fluoroscopie sunt citate.\n\nReexplorarea chirurgicală a CBP, în rarele situații în care aceste metode eșuează — Corect: Reexplorarea ca ultimă soluție este descrisă.\n\nDerivația biliară este contraindicată tocmai când calculii sunt numeroși — Incorect: Derivația este tocmai indicată când calculii sunt numeroși.\n\nCoșulețul prin tubul în T se evită, fluoroscopia fiind inutilă — Incorect: Coșulețul sub fluoroscopie este o alternativă recunoscută.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 255, Calculi restanți — Derivație, ERCP, coșuleț pe tub T (pagini PDF: 167).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    255
   ],
   "pdfPages": [
    167
   ],
   "section": "Calculi restanți — Derivație, ERCP, coșuleț pe tub T"
  },
  "learningObjective": "Ierarhia derivație biliară / ERCP / coșuleț pe tub T / reexplorare rară, când persistă calculi după explorarea deschisă.",
  "optionRationales": [
   "Derivația coledoco-duodenală sau jejunală pentru calculi numeroși/suspecți restanți este explicită.",
   "ERCP și coșulețul pe tub T sub fluoroscopie sunt citate.",
   "Reexplorarea ca ultimă soluție este descrisă.",
   "Derivația este tocmai indicată când calculii sunt numeroși.",
   "Coșulețul sub fluoroscopie este o alternativă recunoscută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Contraindică derivația tocmai la calculii numeroși și anulează coșulețul pe tub T, două ieșiri din impasul restantului."
  },
  "textbookExpressions": [
   "derivaţie biliară",
   "coşuleţ de sârmă"
  ]
 },
 {
  "id": "biliar-adv-063",
  "topicId": "biliar",
  "type": "CS",
  "stem": "Identificați afirmația corectă privind ecografia ca explorare inițială în afecțiunile biliare:",
  "options": [
   "A înlocuit colecistografia orală pentru explorarea de rutină a pacienților cu colici; este non-invazivă, rapidă, relativ ieftină și nu iradiază",
   "Colecistografia orală rămâne testul de primă intenție, ecografia fiind abandonată din cauza iradierii",
   "Ecografia este rezervată doar pancreatitei necrotico-hemoragice, colica cerând de primă intenție ERCP",
   "Iradierea ecografică depășește CT-ul, deci se evită la tineri",
   "Rapiditatea este inferioară colecistografiei orale, care nu necesită contrast"
  ],
  "correct": [
   0
  ],
  "explanation": "A înlocuit colecistografia orală pentru explorarea de rutină a pacienților cu colici; este non-invazivă, rapidă, relativ ieftină și nu iradiază — Corect: Înlocuirea colecistografiei orale și calitățile (non-invaziv, rapid, ieftin, fără iradiere) sunt explicite.\n\nColecistografia orală rămâne testul de primă intenție, ecografia fiind abandonată din cauza iradierii — Incorect: Ecografia, nu colecistografia orală, este explorarea inițială de elecție.\n\nEcografia este rezervată doar pancreatitei necrotico-hemoragice, colica cerând de primă intenție ERCP — Incorect: ERCP nu este primul test în colica necomplicată.\n\nIradierea ecografică depășește CT-ul, deci se evită la tineri — Incorect: Ecografia nu iradiază, spre deosebire de CT.\n\nRapiditatea este inferioară colecistografiei orale, care nu necesită contrast — Incorect: Rapiditatea este un avantaj al ecografiei, nu un dezavantaj.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 244, 245, Ecografie versus colecistografie orală (pagini PDF: 156, 157).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    244,
    245
   ],
   "pdfPages": [
    156,
    157
   ],
   "section": "Ecografie versus colecistografie orală"
  },
  "learningObjective": "Recunoașterea înlocuirii colecistografiei orale de către ecografia non-invazivă, rapidă și neiradiantă.",
  "optionRationales": [
   "Înlocuirea colecistografiei orale și calitățile (non-invaziv, rapid, ieftin, fără iradiere) sunt explicite.",
   "Ecografia, nu colecistografia orală, este explorarea inițială de elecție.",
   "ERCP nu este primul test în colica necomplicată.",
   "Ecografia nu iradiază, spre deosebire de CT.",
   "Rapiditatea este un avantaj al ecografiei, nu un dezavantaj."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Readuce colecistografia orală ca prim test și atribuie ecografiei iradiere, inversul paragrafului de deschidere imagistică."
  },
  "textbookExpressions": [
   "colecistografia orală",
   "nu iradiază"
  ]
 },
 {
  "id": "biliar-adv-064",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Un pacient cu scădere ponderală rapidă după chirurgie bariatrică, privind riscul litogenic:",
  "options": [
   "Se poate confrunta cu apariția calculilor biliari; scăderea ponderală rapidă crește indexul de saturație biliară și staza în veziculă",
   "Medicamentele hipocolesterolemiante predispun prin alterarea biosintezei de acizi biliari și colesterol",
   "Scăderea ponderală rapidă protejează de calculi, saturarea bilei scăzând",
   "Chirurgia bariatrică aboleste staza veziculară, calculii fiind imposibili ulterior",
   "Hipocolesterolemiantele dizolvă calculii existenți, similar ursodeoxicolicului, fără risc litogenic"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Se poate confrunta cu apariția calculilor biliari; scăderea ponderală rapidă crește indexul de saturație biliară și staza în veziculă — Corect: Apariția calculilor după bariatric și mecanismul (saturație + stază) sunt explicite.\n\nMedicamentele hipocolesterolemiante predispun prin alterarea biosintezei de acizi biliari și colesterol — Corect: Alterarea biosintezei de acizi biliari și colesterol de către hipocolesterolemiante este citată.\n\nScăderea ponderală rapidă protejează de calculi, saturarea bilei scăzând — Incorect: Scăderea ponderală rapidă predispune, nu protejează.\n\nChirurgia bariatrică aboleste staza veziculară, calculii fiind imposibili ulterior — Incorect: Staza veziculară este tocmai crescută.\n\nHipocolesterolemiantele dizolvă calculii existenți, similar ursodeoxicolicului, fără risc litogenic — Incorect: Hipocolesterolemiantele predispun la calculi, nu îi dizolvă ca ursodeoxicolicul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 242, 243, Litogeneză — Bariatric și hipocolesterolemiante (pagini PDF: 154, 155).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    242,
    243
   ],
   "pdfPages": [
    154,
    155
   ],
   "section": "Litogeneză — Bariatric și hipocolesterolemiante"
  },
  "learningObjective": "Recunoașterea stazei și a saturației crescute după scădere ponderală rapidă (inclusiv bariatric) și a rolului hipocolesterolemianelor.",
  "optionRationales": [
   "Apariția calculilor după bariatric și mecanismul (saturație + stază) sunt explicite.",
   "Alterarea biosintezei de acizi biliari și colesterol de către hipocolesterolemiante este citată.",
   "Scăderea ponderală rapidă predispune, nu protejează.",
   "Staza veziculară este tocmai crescută.",
   "Hipocolesterolemiantele predispun la calculi, nu îi dizolvă ca ursodeoxicolicul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă scăderea ponderală rapidă și hipocolesterolemiantele în factori protectori, inversul listei de predispoziție."
  },
  "textbookExpressions": [
   "scădere ponderală rapidă",
   "medicamente hipocolesterolemiante"
  ]
 },
 {
  "id": "biliar-adv-065",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Conform Tabelului 16-1, ileusul biliar se recunoaște prin:",
  "options": [
   "Pacient vârstnic, tarat, cu ocluzie intestinală incompletă",
   "Radiografia poate arăta ocluzie (de obicei intestin subțire distal), aer în căile biliare și un calcul mare obstructiv",
   "CT-ul reunește aceste elemente; ecografia poate arăta ± litiază veziculară și aer în arborele biliar",
   "Este o colică de 1–4 ore la tânăr, fără ocluzie și fără aerobilie",
   "Radiografia exclude aerobilia, CT-ul fiind superfluu la vârstnicul tarat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pacient vârstnic, tarat, cu ocluzie intestinală incompletă — Corect: Profilul vârstnic tarat și ocluzia incompletă sunt tabelate.\n\nRadiografia poate arăta ocluzie (de obicei intestin subțire distal), aer în căile biliare și un calcul mare obstructiv — Corect: Triada radiologică (ocluzie distală, aerobilie, calcul) este citată.\n\nCT-ul reunește aceste elemente; ecografia poate arăta ± litiază veziculară și aer în arborele biliar — Corect: CT-ul ca sumă și eco ± litiază/aerobilie închid rândul.\n\nEste o colică de 1–4 ore la tânăr, fără ocluzie și fără aerobilie — Incorect: Colica de 1–4 ore este alt sindrom tabelat, la pacientul ne-ocluziv.\n\nRadiografia exclude aerobilia, CT-ul fiind superfluu la vârstnicul tarat — Incorect: Aerobilia este un semn căutat, nu exclus; CT-ul este investigația de elecție în text.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 252, Tabelul 16-1 — Ileus biliar (pagini PDF: 164).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    252
   ],
   "pdfPages": [
    164
   ],
   "section": "Tabelul 16-1 — Ileus biliar"
  },
  "learningObjective": "Reținerea profilului vârstnic tarat / ocluzie incompletă / aerobilie + calcul obstructiv, ca rând tabelat distinct de colică.",
  "optionRationales": [
   "Profilul vârstnic tarat și ocluzia incompletă sunt tabelate.",
   "Triada radiologică (ocluzie distală, aerobilie, calcul) este citată.",
   "CT-ul ca sumă și eco ± litiază/aerobilie închid rândul.",
   "Colica de 1–4 ore este alt sindrom tabelat, la pacientul ne-ocluziv.",
   "Aerobilia este un semn căutat, nu exclus; CT-ul este investigația de elecție în text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce ileusul tabelat la o colică de 1–4 ore și neagă aerobilia, două rânduri alăturate din Tabelul 16-1."
  },
  "textbookExpressions": [
   "Pacient vârstnic, tarat",
   "aer în cai le bi lare"
  ]
 },
 {
  "id": "biliar-adv-066",
  "topicId": "biliar",
  "type": "CM",
  "stem": "Operația Whipple pentru colangiocarcinomul distal al CBP presupune:",
  "options": [
   "Rezecția CBP distale (inclusiv tumora), a capului pancreasului și a duodenului",
   "Trei anastomoze care conectează, consecutiv, pancreasul restant, ductul hepatic și duodenul la o ansă jejunală mobilizată",
   "Dacă leziunile distale sunt nerezecabile, se practică bypass chirurgical sau stent biliar paliativ",
   "O singură anastomoză pancreatico-gastrică, fără reconstrucție biliară sau duodenală",
   "Rezecția se limitează la veziculă, duodenul și pancreasul fiind conservate de principiu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Rezecția CBP distale (inclusiv tumora), a capului pancreasului și a duodenului — Corect: Cele trei structuri rezecate sunt explicite.\n\nTrei anastomoze care conectează, consecutiv, pancreasul restant, ductul hepatic și duodenul la o ansă jejunală mobilizată — Corect: Cele trei anastomoze pe ansă jejunală sunt descrise.\n\nDacă leziunile distale sunt nerezecabile, se practică bypass chirurgical sau stent biliar paliativ — Corect: Bypass-ul sau stentul paliativ pentru nerezecabile sunt citate.\n\nO singură anastomoză pancreatico-gastrică, fără reconstrucție biliară sau duodenală — Incorect: Reconstrucția are trei, nu o singură, anastomoze.\n\nRezecția se limitează la veziculă, duodenul și pancreasul fiind conservate de principiu — Incorect: Duodenul și capul pancreatic fac parte din piesă, nu se conservă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 16, p. 253, Whipple — Trei anastomoze (pagini PDF: 165).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 16,
   "printedPages": [
    253
   ],
   "pdfPages": [
    165
   ],
   "section": "Whipple — Trei anastomoze"
  },
  "learningObjective": "Recunoașterea piesei de rezecție (CBP distală, cap pancreatic, duoden) și a celor trei anastomoze pe ansă jejunală, plus paliativul.",
  "optionRationales": [
   "Cele trei structuri rezecate sunt explicite.",
   "Cele trei anastomoze pe ansă jejunală sunt descrise.",
   "Bypass-ul sau stentul paliativ pentru nerezecabile sunt citate.",
   "Reconstrucția are trei, nu o singură, anastomoze.",
   "Duodenul și capul pancreatic fac parte din piesă, nu se conservă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce Whipple-ul la o colecistectomie sau la o singură anastomoză, anulând triada de reconstrucție."
  },
  "textbookExpressions": [
   "operaţia Whipple",
   "Trei anastomoze"
  ]
 }
];
