import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_VASCULAR:(Question&Record<string,unknown>)[]=[
 {
  "id": "vascular-adv-001",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Disecția de aortă Stanford se caracterizează prin:",
  "options": [
   "Tipul A interesează aorta toracică ascendentă și se tratează chirurgical în urgență",
   "Tipul B interesează aorta descendentă, distal de artera subclaviculară stângă",
   "Tratamentul tipului B include scăderea tensiunii arteriale, a frecvenței cardiace și a velocității contracției ventriculului stâng (dp/dt)",
   "Tipul B necomplicat se operează de urgență, similar tipului A",
   "Diagnosticul se confirmă doar prin radiografie toracică simplă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tipul A interesează aorta toracică ascendentă și se tratează chirurgical în urgență — Corect: Interesarea aortei ascendente și indicația de chirurgie în urgență sunt explicite.\n\nTipul B interesează aorta descendentă, distal de artera subclaviculară stângă — Corect: Originea distal de subclaviculara stângă definește tipul B.\n\nTratamentul tipului B include scăderea tensiunii arteriale, a frecvenței cardiace și a velocității contracției ventriculului stâng (dp/dt) — Corect: Scăderea TA, a frecvenței și a dp/dt este strategia medicală a tipului B.\n\nTipul B necomplicat se operează de urgență, similar tipului A — Incorect: Tipul B necomplicat se tratează medical; chirurgia se rezervă rupturii, ischemiei de organ sau anevrismului cu risc de ruptură.\n\nDiagnosticul se confirmă doar prin radiografie toracică simplă — Incorect: Diagnosticul se confirmă prin ecocardiografie transesofagiană, CT sau angiografie, nu prin radiografie simplă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 520, Disecția de aortă (pagini PDF: 205).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    520
   ],
   "pdfPages": [
    205
   ],
   "section": "Disecția de aortă"
  },
  "learningObjective": "Diferențierea tipului A (chirurgie de urgență) de tipul B (control tensional și dp/dt) după clasificarea Stanford.",
  "optionRationales": [
   "Interesarea aortei ascendente și indicația de chirurgie în urgență sunt explicite.",
   "Originea distal de subclaviculara stângă definește tipul B.",
   "Scăderea TA, a frecvenței și a dp/dt este strategia medicală a tipului B.",
   "Tipul B necomplicat se tratează medical; chirurgia se rezervă rupturii, ischemiei de organ sau anevrismului cu risc de ruptură.",
   "Diagnosticul se confirmă prin ecocardiografie transesofagiană, CT sau angiografie, nu prin radiografie simplă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează indicația de urgență între tipul A și B, pe o clasificare Stanford ușor de oglindit."
  },
  "textbookExpressions": [
   "tip A Stanford",
   "tip B Stanford"
  ]
 },
 {
  "id": "vascular-adv-002",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Localizarea cea mai frecventă a bolii ocluzive femuro-popliteale este:",
  "options": [
   "Artera femurală superficială, în canalul adductorilor (Hunter)",
   "Artera femurală profundă, la emergența din iliaca externă",
   "Trifurcația poplitee, la adultul tânăr fără diabet",
   "Aorta infrarenală, ca unică localizare la diabetici",
   "Artera tibială anterioară, la pacienții de 45–65 de ani fără factori de risc"
  ],
  "correct": [
   0
  ],
  "explanation": "Artera femurală superficială, în canalul adductorilor (Hunter) — Corect: Textul identifică AFS în canalul adductorilor (Hunter) ca localizarea cea mai frecventă.\n\nArtera femurală profundă, la emergența din iliaca externă — Incorect: Artera femurală profundă poate asigura colaterale în repaus, nu este sediul predilect.\n\nTrifurcația poplitee, la adultul tânăr fără diabet — Incorect: Boala ocluzivă tibială (sub trifurcație) este tipică diabetului, insuficienței renale terminale și vârstei înaintate.\n\nAorta infrarenală, ca unică localizare la diabetici — Incorect: Boala aorto-iliacă predilectă la 45–65 de ani nu este localizarea femuro-popliteală.\n\nArtera tibială anterioară, la pacienții de 45–65 de ani fără factori de risc — Incorect: Arterele tibiale definesc boala ocluzivă tibială, nu sediul femuro-popliteal clasic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 520, Boala arterială periferică — Localizare (pagini PDF: 205).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    520
   ],
   "pdfPages": [
    205
   ],
   "section": "Boala arterială periferică — Localizare"
  },
  "learningObjective": "Recunoașterea arterei femurale superficiale în canalul Hunter ca sediu predilect al bolii femuro-popliteale.",
  "optionRationales": [
   "Textul identifică AFS în canalul adductorilor (Hunter) ca localizarea cea mai frecventă.",
   "Artera femurală profundă poate asigura colaterale în repaus, nu este sediul predilect.",
   "Boala ocluzivă tibială (sub trifurcație) este tipică diabetului, insuficienței renale terminale și vârstei înaintate.",
   "Boala aorto-iliacă predilectă la 45–65 de ani nu este localizarea femuro-popliteală.",
   "Arterele tibiale definesc boala ocluzivă tibială, nu sediul femuro-popliteal clasic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută sediul clasic Hunter către AFP, tibiale sau aorto-iliac, entități învecinate din aceeași pagină."
  },
  "textbookExpressions": [
   "arterei femurale",
   "canalul adductorilor"
  ]
 },
 {
  "id": "vascular-adv-003",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Indicele gleznă-braț (IGB) în boala arterială periferică:",
  "options": [
   "Un IGB >0,9 este, în general, normal",
   "Un IGB <0,8 este în concordanță cu stadiul de claudicație, iar un IGB <0,4 cu durerea de repaus sau leziunile tisulare",
   "Semnalul Doppler normal este monofazic, iar stenoza îl face trifazic",
   "IGB nu scade la efort pe bandă la pacienții cu claudicație",
   "Semnul Buerger constă în paloare în declivitate și eritroză la ridicarea piciorului"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Un IGB >0,9 este, în general, normal — Corect: Pragul >0,9 ca valoare normală este citat.\n\nUn IGB <0,8 este în concordanță cu stadiul de claudicație, iar un IGB <0,4 cu durerea de repaus sau leziunile tisulare — Corect: Corespondența <0,8–claudicație și <0,4–durere de repaus/leziuni este explicită.\n\nSemnalul Doppler normal este monofazic, iar stenoza îl face trifazic — Incorect: Unda normală este trifazică; stenoza o face bifazică, apoi monofazică.\n\nIGB nu scade la efort pe bandă la pacienții cu claudicație — Incorect: La claudicație, IGB scade când apar simptomele pe bandă.\n\nSemnul Buerger constă în paloare în declivitate și eritroză la ridicarea piciorului — Incorect: În declivitate piciorul devine roșu (rubor), iar la ridicare palid — inversul enunțului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 522, Evaluarea BAP — IGB și Doppler (pagini PDF: 207).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    522
   ],
   "pdfPages": [
    207
   ],
   "section": "Evaluarea BAP — IGB și Doppler"
  },
  "learningObjective": "Aplicarea pragurilor IGB (0,9 / 0,8 / 0,4) față de morfologia undei Doppler și de semnul Buerger.",
  "optionRationales": [
   "Pragul >0,9 ca valoare normală este citat.",
   "Corespondența <0,8–claudicație și <0,4–durere de repaus/leziuni este explicită.",
   "Unda normală este trifazică; stenoza o face bifazică, apoi monofazică.",
   "La claudicație, IGB scade când apar simptomele pe bandă.",
   "În declivitate piciorul devine roșu (rubor), iar la ridicare palid — inversul enunțului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează secvența trifazic→monofazic și semnul Buerger, pe pragurile IGB care se memorează greșit."
  },
  "textbookExpressions": [
   "1GB >0.9",
   "1GB <0.4"
  ]
 },
 {
  "id": "vascular-adv-004",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre revascularizarea în BAP:",
  "options": [
   "Endarterectomia este tratamentul chirurgical standard pentru ateroscleroza bifurcației carotidiene, dar are utilitate limitată la membrele inferioare",
   "Bypassul aortofemural are o rată de patență la 5 ani de peste 90%",
   "După o intervenție endovasculară, clopidogrelul împreună cu aspirina se administrează cel puțin 6 săptămâni, urmat de aspirină pe termen nelimitat",
   "Intervențiile iliace cu stentare și angioplastie prezintă 70–90% patență primară la 1 an",
   "Angioplastia infrapopliteală este prima opțiune la claudicația ușoară a adultului tânăr fără comorbidități"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Endarterectomia este tratamentul chirurgical standard pentru ateroscleroza bifurcației carotidiene, dar are utilitate limitată la membrele inferioare — Corect: Contrastul carotidă versus membre inferioare (leziuni extinse, fără zone clare de început/sfârșit) este explicit.\n\nBypassul aortofemural are o rată de patență la 5 ani de peste 90% — Corect: Patența >90% la 5 ani a bypassului aortofemural este citată.\n\nDupă o intervenție endovasculară, clopidogrelul împreună cu aspirina se administrează cel puțin 6 săptămâni, urmat de aspirină pe termen nelimitat — Corect: Schema clopidogrel+aspirină ≥6 săptămâni, apoi aspirină nelimitat, este descrisă.\n\nIntervențiile iliace cu stentare și angioplastie prezintă 70–90% patență primară la 1 an — Corect: Patența iliaca 70–90% la 1 an este menționată.\n\nAngioplastia infrapopliteală este prima opțiune la claudicația ușoară a adultului tânăr fără comorbidități — Incorect: Angioplastia infrapopliteală este rezervată pacienților cu risc chirurgical, bypass limitat sau ulcer limitat al piciorului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 525, Tratamentul BAP — Endovascular și chirurgical (pagini PDF: 210).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    525
   ],
   "pdfPages": [
    210
   ],
   "section": "Tratamentul BAP — Endovascular și chirurgical"
  },
  "learningObjective": "Diferențierea rolului endarterectomiei carotidiene de limitele ei în BAP, cu patența aortofemurală și dual antiplachetar post-PTA.",
  "optionRationales": [
   "Contrastul carotidă versus membre inferioare (leziuni extinse, fără zone clare de început/sfârșit) este explicit.",
   "Patența >90% la 5 ani a bypassului aortofemural este citată.",
   "Schema clopidogrel+aspirină ≥6 săptămâni, apoi aspirină nelimitat, este descrisă.",
   "Patența iliaca 70–90% la 1 an este menționată.",
   "Angioplastia infrapopliteală este rezervată pacienților cu risc chirurgical, bypass limitat sau ulcer limitat al piciorului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Împerechează patențe (90% la 5 ani vs 70–90% la 1 an) cu indicația carotidă a endarterectomiei, ușor de generalizat la membru."
  },
  "textbookExpressions": [
   "peste 90%",
   "Clopidogrelul"
  ]
 },
 {
  "id": "vascular-adv-005",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Ischemia mezenterică cronică se caracterizează prin:",
  "options": [
   "Simptomatologia este frecventă atunci când două din cele trei artere viscerale principale sunt obstruate",
   "Tabloul include durere abdominală postprandială (de obicei în prima oră după masă) și scădere ponderală cu frică alimentară",
   "Patența la 3 ani este circa 70% pentru angioplastia cu balon, față de peste 90% pentru bypass",
   "Un singur vas stenozat produce infarct mezenteric imediat, colateralele fiind absente",
   "Bypassul este preferat vârstnicilor malnutriți, deoarece morbiditatea imediată este mai mică decât a stentării"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Simptomatologia este frecventă atunci când două din cele trei artere viscerale principale sunt obstruate — Corect: Textul leagă simptomele de ocluzia a 2 din 3 artere principale.\n\nTabloul include durere abdominală postprandială (de obicei în prima oră după masă) și scădere ponderală cu frică alimentară — Corect: Durerea postprandială precoce și frica alimentară cu scădere ponderală sunt descrise.\n\nPatența la 3 ani este circa 70% pentru angioplastia cu balon, față de peste 90% pentru bypass — Corect: Cifrele ~70% PTA versus >90% bypass la 3 ani sunt citate.\n\nUn singur vas stenozat produce infarct mezenteric imediat, colateralele fiind absente — Incorect: Celelalte două artere compensează prin gastroduodenală și arcada marginală; infarctul nu urmează stenozei unui singur vas.\n\nBypassul este preferat vârstnicilor malnutriți, deoarece morbiditatea imediată este mai mică decât a stentării — Incorect: Deși patența PTA este inferioară, morbiditatea imediată este mai mică, deci stentarea este preferată la vârstnici malnutriți.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 527, 526, Ischemia mezenterică cronică (pagini PDF: 212, 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    527,
    526
   ],
   "pdfPages": [
    212,
    211
   ],
   "section": "Ischemia mezenterică cronică"
  },
  "learningObjective": "Recunoașterea pragului de două vase, a anginei intestinale cronice și a compromisului patență versus morbiditate PTA/bypass.",
  "optionRationales": [
   "Textul leagă simptomele de ocluzia a 2 din 3 artere principale.",
   "Durerea postprandială precoce și frica alimentară cu scădere ponderală sunt descrise.",
   "Cifrele ~70% PTA versus >90% bypass la 3 ani sunt citate.",
   "Celelalte două artere compensează prin gastroduodenală și arcada marginală; infarctul nu urmează stenozei unui singur vas.",
   "Deși patența PTA este inferioară, morbiditatea imediată este mai mică, deci stentarea este preferată la vârstnici malnutriți."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează alegerea PTA versus bypass la vârstnicul malnutrit și neagă circulația colaterală între cele trei trunchiuri."
  },
  "textbookExpressions": [
   "2 din cele 3",
   "pentru bypass la 3 ani"
  ]
 },
 {
  "id": "vascular-adv-006",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Identificați afirmația corectă privind sindromul de furt subclavicular:",
  "options": [
   "Fluxul se inversează în artera vertebrală în timpul efortului membrului superior, scăzând perfuzia bazilară",
   "Este mai frecvent pe dreapta, artera subclaviculară dreaptă fiind mai lungă",
   "Diferența tensională brahială ipsilaterală tipică este sub 5 mmHg",
   "Endarterectomia carotidă nu poate ameliora simptomele insuficienței bazilare, chiar asociată unei stenoze carotidiene",
   "Angioplastia subclaviculară agravează fluxul anterograd în artera vertebrală"
  ],
  "correct": [
   0
  ],
  "explanation": "Fluxul se inversează în artera vertebrală în timpul efortului membrului superior, scăzând perfuzia bazilară — Corect: Textul descrie scăderea rezistenței la efort, inversarea fluxului vertebral și scăderea perfuziei bazilare.\n\nEste mai frecvent pe dreapta, artera subclaviculară dreaptă fiind mai lungă — Incorect: Incidența este de 3–4 ori mai mare pe stânga, artera subclaviculară stângă fiind mai lungă.\n\nDiferența tensională brahială ipsilaterală tipică este sub 5 mmHg — Incorect: Presiunea brahială ipsilaterală este redusă cu cel puțin 15 mmHg.\n\nEndarterectomia carotidă nu poate ameliora simptomele insuficienței bazilare, chiar asociată unei stenoze carotidiene — Incorect: La stenoza carotidă asociată, endarterectomia carotidă singură poate ameliora simptomele prin colaterale.\n\nAngioplastia subclaviculară agravează fluxul anterograd în artera vertebrală — Incorect: Angioplastia subclaviculară, bypassul carotido-subclavicular și reimplantarea restabilesc fluxul anterograd vertebral.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 534, Boala vertebro-bazilară — Sindromul de furt subclavicular (pagini PDF: 213).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    534
   ],
   "pdfPages": [
    213
   ],
   "section": "Boala vertebro-bazilară — Sindromul de furt subclavicular"
  },
  "learningObjective": "Recunoașterea inversării de flux vertebral la efortul brațului ca mecanism al furtului subclavicular.",
  "optionRationales": [
   "Textul descrie scăderea rezistenței la efort, inversarea fluxului vertebral și scăderea perfuziei bazilare.",
   "Incidența este de 3–4 ori mai mare pe stânga, artera subclaviculară stângă fiind mai lungă.",
   "Presiunea brahială ipsilaterală este redusă cu cel puțin 15 mmHg.",
   "La stenoza carotidă asociată, endarterectomia carotidă singură poate ameliora simptomele prin colaterale.",
   "Angioplastia subclaviculară, bypassul carotido-subclavicular și reimplantarea restabilesc fluxul anterograd vertebral."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează predilecția stânga/dreapta și pragul de 15 mmHg, pe un mecanism de furt ușor de oglindit."
  },
  "textbookExpressions": [
   "cel puţin 15 mmHg",
   "3--4 ori mai mare"
  ]
 },
 {
  "id": "vascular-adv-007",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Anevrismele de arteră femurală, comparativ cu cele poplitee:",
  "options": [
   "Au morbiditate redusă, embolizează și se trombozează mai rar; tratamentul este bypass cu interpoziție de grefă, graft-stentul nefiind recomandat în zona de mobilitate (risc de tromboză și ruptură)",
   "Se tratează de principiu cu graft-stent, mobilitatea regiunii crescând patența",
   "Embolizează mai frecvent decât cele poplitee, bypass-ul fiind evitat",
   "Sunt identice anevrismelor aortice, EVAR fiind prima linie",
   "Nu se operează, riscul trombotic fiind nul"
  ],
  "correct": [
   0
  ],
  "explanation": "Au morbiditate redusă, embolizează și se trombozează mai rar; tratamentul este bypass cu interpoziție de grefă, graft-stentul nefiind recomandat în zona de mobilitate (risc de tromboză și ruptură) — Corect: Morbiditatea redusă, embolizarea rară și bypass-ul (nu stent-graft) sunt explicite.\n\nSe tratează de principiu cu graft-stent, mobilitatea regiunii crescând patența — Incorect: Stent-graftul este nrecomandat tocmai din cauza mobilității.\n\nEmbolizează mai frecvent decât cele poplitee, bypass-ul fiind evitat — Incorect: Popliteele, nu femuralele, embolizează/trombozează mai des.\n\nSunt identice anevrismelor aortice, EVAR fiind prima linie — Incorect: EVAR ține de aorta abdominală.\n\nNu se operează, riscul trombotic fiind nul — Incorect: Tratamentul implică bypass cu interpoziție.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 520, Anevrismul arterei femurale (pagini PDF: 205).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    520
   ],
   "pdfPages": [
    205
   ],
   "section": "Anevrismul arterei femurale"
  },
  "learningObjective": "Contrastarea riscului mai mic față de popliteu și a contraindicației de stent-graft în zona de flexie.",
  "optionRationales": [
   "Morbiditatea redusă, embolizarea rară și bypass-ul (nu stent-graft) sunt explicite.",
   "Stent-graftul este nrecomandat tocmai din cauza mobilității.",
   "Popliteele, nu femuralele, embolizează/trombozează mai des.",
   "EVAR ține de aorta abdominală.",
   "Tratamentul implică bypass cu interpoziție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune stent-graftul — contraindicat în zona de flexie — ca tratament de elecție al anevrismului femural."
  },
  "textbookExpressions": [
   "arteră femurală",
   "graft-stent"
  ]
 },
 {
  "id": "vascular-adv-008",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Legea Poiseuille aplicată stenozei arteriale:",
  "options": [
   "Căderea de presiune este direct proporțională cu fluxul și lungimea, dar invers proporțională cu pătratul razei; reducerea razei are efectul cel mai mare",
   "ΔP rămâne mică până la îngustarea diametrului cu 50% sau a ariei cu 75%; apoi presiunea și fluxul distal scad exponențial",
   "Vasul se adaptează inițial mărindu-și diametrul total (remodelare Glagov); după stenoza >40% adaptarea se epuizează",
   "ΔP scade când raza scade, stenoza de 20% prăbușind fluxul",
   "Aria trebuie redusă cu 10% pentru a egala o stenoză de diametru de 50%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Căderea de presiune este direct proporțională cu fluxul și lungimea, dar invers proporțională cu pătratul razei; reducerea razei are efectul cel mai mare — Corect: Proporționalitățile și predominanța razei sunt explicite.\n\nΔP rămâne mică până la îngustarea diametrului cu 50% sau a ariei cu 75%; apoi presiunea și fluxul distal scad exponențial — Corect: Pragurile 50% diametru și 75% arie sunt citate.\n\nVasul se adaptează inițial mărindu-și diametrul total (remodelare Glagov); după stenoza >40% adaptarea se epuizează — Corect: Remodelarea compensatorie până la >40% este pe pagina următoare.\n\nΔP scade când raza scade, stenoza de 20% prăbușind fluxul — Incorect: ΔP crește când raza scade.\n\nAria trebuie redusă cu 10% pentru a egala o stenoză de diametru de 50% — Incorect: 75% arie, nu 10%, corespunde stenozei de 50% diametru.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 520, 521, Fiziologie — Poiseuille și pragul de stenoză (pagini PDF: 205, 206).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    520,
    521
   ],
   "pdfPages": [
    205,
    206
   ],
   "section": "Fiziologie — Poiseuille și pragul de stenoză"
  },
  "learningObjective": "Aplicarea relației ΔP ∝ 1/r² și a pragurilor 50% diametru / 75% arie, plus remodelarea până la 40%.",
  "optionRationales": [
   "Proporționalitățile și predominanța razei sunt explicite.",
   "Pragurile 50% diametru și 75% arie sunt citate.",
   "Remodelarea compensatorie până la >40% este pe pagina următoare.",
   "ΔP crește când raza scade.",
   "75% arie, nu 10%, corespunde stenozei de 50% diametru."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 50% diametru cu 75% arie și inversează relația rază–ΔP."
  },
  "textbookExpressions": [
   "50%",
   "75%"
  ]
 },
 {
  "id": "vascular-adv-009",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Evoluția naturală a claudicației netratate, în studiul Framingham:",
  "options": [
   "Riscul de amputație a fost de numai 5% la 5 ani dacă claudicația a fost tratată conservator",
   "Renunțarea la fumat și exercițiile supravegheate ameliorează sau dispar simptomele la 50% dintre pacienți; cea mai frecventă cauză de deces este ateroscleroza sistemică (evenimente cardiace sau cerebrale)",
   "Amputația survine la 50% în primul an, decesul fiind prin ischemie de membru, nu cardiacă",
   "Exercițiile agravează claudicația și sunt evitate",
   "Fumatul nu influențează simptomele, mortalitatea fiind independentă de ateroscleroza sistemică"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Riscul de amputație a fost de numai 5% la 5 ani dacă claudicația a fost tratată conservator — Corect: Cifra Framingham 5% la 5 ani este explicită.\n\nRenunțarea la fumat și exercițiile supravegheate ameliorează sau dispar simptomele la 50% dintre pacienți; cea mai frecventă cauză de deces este ateroscleroza sistemică (evenimente cardiace sau cerebrale) — Corect: 50% ameliorare și decesul cardiac/cerebral sunt citate.\n\nAmputația survine la 50% în primul an, decesul fiind prin ischemie de membru, nu cardiacă — Incorect: 5%, nu 50% în primul an, este riscul de amputație; decesul este sistemic.\n\nExercițiile agravează claudicația și sunt evitate — Incorect: Exercițiile supravegheate ameliorează.\n\nFumatul nu influențează simptomele, mortalitatea fiind independentă de ateroscleroza sistemică — Incorect: Fumatul și ateroscleroza sistemică sunt centrali.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 521, Claudicația — Framingham și prognostic (pagini PDF: 206).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    521
   ],
   "pdfPages": [
    206
   ],
   "section": "Claudicația — Framingham și prognostic"
  },
  "learningObjective": "Contrastarea amputației de 5%/5 ani cu ameliorarea de 50% prin fumat/exercițiu și cu decesul cardio-cerebral.",
  "optionRationales": [
   "Cifra Framingham 5% la 5 ani este explicită.",
   "50% ameliorare și decesul cardiac/cerebral sunt citate.",
   "5%, nu 50% în primul an, este riscul de amputație; decesul este sistemic.",
   "Exercițiile supravegheate ameliorează.",
   "Fumatul și ateroscleroza sistemică sunt centrali."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 5% (amputație) cu 50% (ameliorare) și mută cauza decesului de pe cord/creier pe membru."
  },
  "textbookExpressions": [
   "5% la",
   "50% din pacienţii"
  ]
 },
 {
  "id": "vascular-adv-010",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Localizarea simptomelor în funcție de nivelul ocluziei:",
  "options": [
   "Ocluzia aorto-iliacă determină sindromul Leriche: impotență, claudicație a extremităților inferioare și atrofie fesieră",
   "Ocluzia AFS provoacă claudicație de gambă, nu de coapsă, coapsa fiind alimentată de AFP",
   "Grupele musculare afectate de claudicație se află distal de obstrucția arterială; articulațiile și piciorul sunt scutite, masa musculară fiind redusă",
   "Ocluzia AFS claudică la coapsă, AFP neavând rol",
   "Leriche asociază doar durere de repaus nocturnă, fără impotență"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ocluzia aorto-iliacă determină sindromul Leriche: impotență, claudicație a extremităților inferioare și atrofie fesieră — Corect: Triada Leriche este explicită.\n\nOcluzia AFS provoacă claudicație de gambă, nu de coapsă, coapsa fiind alimentată de AFP — Corect: Gamba, nu coapsa, și rolul AFP sunt citate.\n\nGrupele musculare afectate de claudicație se află distal de obstrucția arterială; articulațiile și piciorul sunt scutite, masa musculară fiind redusă — Corect: Regula „distal de obstrucție” și scutirea piciorului sunt descrise.\n\nOcluzia AFS claudică la coapsă, AFP neavând rol — Incorect: AFS nu claudică la coapsă.\n\nLeriche asociază doar durere de repaus nocturnă, fără impotență — Incorect: Leriche include impotența, nu doar durerea de repaus.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 521, Claudicație — Leriche și AFS (pagini PDF: 206).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    521
   ],
   "pdfPages": [
    206
   ],
   "section": "Claudicație — Leriche și AFS"
  },
  "learningObjective": "Maparea Leriche (aorto-iliac) versus claudicația de gambă din AFS, cu scutirea piciorului.",
  "optionRationales": [
   "Triada Leriche este explicită.",
   "Gamba, nu coapsa, și rolul AFP sunt citate.",
   "Regula „distal de obstrucție” și scutirea piciorului sunt descrise.",
   "AFS nu claudică la coapsă.",
   "Leriche include impotența, nu doar durerea de repaus."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută claudicația AFS pe coapsă și golește Leriche de impotență, două localizări din același paragraf."
  },
  "textbookExpressions": [
   "sindromul Leriche",
   "arterei femurale profunde"
  ]
 },
 {
  "id": "vascular-adv-011",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Durerea ischemică de repaus se caracterizează prin:",
  "options": [
   "Dureri la degete și epifizele distale metatarsiene, mai ales noaptea; alinarea temporară prin poziție declivă sau câțiva pași, presiunea hidrostatică crescând aportul de oxigen",
   "Crampe nocturne de gambă, fără modificări ischemice cutanate, identice ca mecanism",
   "Paloare de declivitate și eritroză la ridicare, inversul semnului Buerger",
   "Dispariție la ridicarea piciorului, hidrostatica neavând rol",
   "Este un echivalent de claudicație de gambă, articulațiile fiind sediul tipic"
  ],
  "correct": [
   0
  ],
  "explanation": "Dureri la degete și epifizele distale metatarsiene, mai ales noaptea; alinarea temporară prin poziție declivă sau câțiva pași, presiunea hidrostatică crescând aportul de oxigen — Corect: Sediul, nocturnul și alinarea declivă prin presiune hidrostatică sunt explicite.\n\nCrampe nocturne de gambă, fără modificări ischemice cutanate, identice ca mecanism — Incorect: Crampele de gambă se diferențiază tocmai prin localizare și absența ischemiei cutanate.\n\nPaloare de declivitate și eritroză la ridicare, inversul semnului Buerger — Incorect: În Buerger, declivitatea produce rubor, ridicarea paloare.\n\nDispariție la ridicarea piciorului, hidrostatica neavând rol — Incorect: Ridicarea scade presiunea hidrostatică și agravează ischemia.\n\nEste un echivalent de claudicație de gambă, articulațiile fiind sediul tipic — Incorect: Piciorul distal, nu gamba/articulațiile, este sediul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 521, Durerea de repaus ischemică (pagini PDF: 206).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    521
   ],
   "pdfPages": [
    206
   ],
   "section": "Durerea de repaus ischemică"
  },
  "learningObjective": "Recunoașterea sediului distal (degete/metatarsiene), a predilecției nocturne și a alinării prin declivitate.",
  "optionRationales": [
   "Sediul, nocturnul și alinarea declivă prin presiune hidrostatică sunt explicite.",
   "Crampele de gambă se diferențiază tocmai prin localizare și absența ischemiei cutanate.",
   "În Buerger, declivitatea produce rubor, ridicarea paloare.",
   "Ridicarea scade presiunea hidrostatică și agravează ischemia.",
   "Piciorul distal, nu gamba/articulațiile, este sediul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă durerea de repaus (degete) cu crampele de gambă, distincția din același paragraf."
  },
  "textbookExpressions": [
   "Durerea de repaus",
   "poziţionarea declivă"
  ]
 },
 {
  "id": "vascular-adv-012",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Ulcerele de gambă/picior și prognosticul ischemiei avansate:",
  "options": [
   "Ulcerele arteriale sunt dureroase (exceptând diabeticul neuropat), circumscrise, cu bază palidă sau necrotică, la degete, călcâie sau fața dorsală",
   "Ulcerele venoase apar de obicei imediat deasupra maleolelor, în treimea inferioară a gambei",
   "Ulcerele diabetice sunt nedureroase, plantare sau laterale, în zone de presiune, pe fond de picior Charcot",
   "Netratată, durerea de repaus duce la amputație la aproape 50%; diabeticul cu membru amputat are supraviețuire la 2 ani de 50%",
   "Ulcerele arteriale sunt nedureroase și maleolare, identic celor venoase"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Ulcerele arteriale sunt dureroase (exceptând diabeticul neuropat), circumscrise, cu bază palidă sau necrotică, la degete, călcâie sau fața dorsală — Corect: Caracterele ulcerului arterial sunt explicite.\n\nUlcerele venoase apar de obicei imediat deasupra maleolelor, în treimea inferioară a gambei — Corect: Sediul maleolar venos este citat.\n\nUlcerele diabetice sunt nedureroase, plantare sau laterale, în zone de presiune, pe fond de picior Charcot — Corect: Sediul plantar/lateral diabetic și Charcot sunt descrise.\n\nNetratată, durerea de repaus duce la amputație la aproape 50%; diabeticul cu membru amputat are supraviețuire la 2 ani de 50% — Corect: Cele două cifre de 50% (amputație; supraviețuire la 2 ani) sunt pe pagina următoare.\n\nUlcerele arteriale sunt nedureroase și maleolare, identic celor venoase — Incorect: Maleolarul nedureros descrie venosul, nu arterialul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 521, 522, Ulcere arteriale, venoase, diabetice (pagini PDF: 206, 207).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    521,
    522
   ],
   "pdfPages": [
    206,
    207
   ],
   "section": "Ulcere arteriale, venoase, diabetice"
  },
  "learningObjective": "Contrastarea sediului (digital/maleolar/plantar) și a prognosticului 50%/50%.",
  "optionRationales": [
   "Caracterele ulcerului arterial sunt explicite.",
   "Sediul maleolar venos este citat.",
   "Sediul plantar/lateral diabetic și Charcot sunt descrise.",
   "Cele două cifre de 50% (amputație; supraviețuire la 2 ani) sunt pe pagina următoare.",
   "Maleolarul nedureros descrie venosul, nu arterialul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Egalizează cele trei ulcere pe maleolă și pierde cele două prognostice de 50%."
  },
  "textbookExpressions": [
   "maleolelor",
   "rata de supravieţuire la 2 ani"
  ]
 },
 {
  "id": "vascular-adv-013",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Gangrena uscată și umedă, plus amputația:",
  "options": [
   "Gangrena uscată înseamnă mumificare fără drenaj purulent sau celulită; umeda asociază infecție activă, miros și secreție purulentă",
   "Cea mai frecventă cauză de amputație este diabetul",
   "Prognosticul gangrenei umede este nefavorabil, cu sepsis și pierderea imediată a membrului, dacă nu se elimină necroza și nu se revascularizează",
   "Gangrena uscată este mai septicemică decât umeda și se tratează doar cu antibiotice, fără debridare",
   "Diabetul protejează de amputație, cauza principală fiind claudicația Framingham"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Gangrena uscată înseamnă mumificare fără drenaj purulent sau celulită; umeda asociază infecție activă, miros și secreție purulentă — Corect: Contrastul uscat/umed este explicit.\n\nCea mai frecventă cauză de amputație este diabetul — Corect: Diabetul ca principală cauză de amputație este citat.\n\nPrognosticul gangrenei umede este nefavorabil, cu sepsis și pierderea imediată a membrului, dacă nu se elimină necroza și nu se revascularizează — Corect: Sepsisul și nevoia de debridare plus revascularizare sunt descrise.\n\nGangrena uscată este mai septicemică decât umeda și se tratează doar cu antibiotice, fără debridare — Incorect: Umeda, nu uscata, este forma septicemică.\n\nDiabetul protejează de amputație, cauza principală fiind claudicația Framingham — Incorect: Framingham arată amputație rară în claudicație; diabetul conduce amputațiile.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 522, Gangrenă și amputație (pagini PDF: 207).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    522
   ],
   "pdfPages": [
    207
   ],
   "section": "Gangrenă și amputație"
  },
  "learningObjective": "Diferențierea mumificării uscate de infecția umedă și recunoașterea diabetului ca principală cauză de amputație.",
  "optionRationales": [
   "Contrastul uscat/umed este explicit.",
   "Diabetul ca principală cauză de amputație este citat.",
   "Sepsisul și nevoia de debridare plus revascularizare sunt descrise.",
   "Umeda, nu uscata, este forma septicemică.",
   "Framingham arată amputație rară în claudicație; diabetul conduce amputațiile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează uscat versus umed și atribuie amputația claudicației, nu diabetului."
  },
  "textbookExpressions": [
   "Gangrena uscată",
   "Gangrena umedă"
  ]
 },
 {
  "id": "vascular-adv-014",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Alegerea stentului în PTA, potrivit capitolului:",
  "options": [
   "Stenturile din oțel inoxidabil expandabile pe balon, cu forță radială ridicată, sunt indicate leziunilor focale calcificate de la originea vaselor majore (iliacă comună, renală)",
   "Stenturile auto-expandabile din nitinol sunt mai flexibile, pentru leziuni lungi sau sinuoase (iliacă externă, AFS), dar cu forță radială mai mică; precauție la flexia șoldului/genunchiului (fractură)",
   "Nitinolul, cu forță radială maximă, este de elecție la originea iliacă comună calcificată",
   "Stenturile expandabile pe balon se evită la originea vaselor, fiind rezervate fosei poplitee în flexie",
   "Fractura de stent este imposibilă, flexia articulară neinfluențând dispozitivul"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Stenturile din oțel inoxidabil expandabile pe balon, cu forță radială ridicată, sunt indicate leziunilor focale calcificate de la originea vaselor majore (iliacă comună, renală) — Corect: Indicația oțel-balon pe origini calcificate este explicită.\n\nStenturile auto-expandabile din nitinol sunt mai flexibile, pentru leziuni lungi sau sinuoase (iliacă externă, AFS), dar cu forță radială mai mică; precauție la flexia șoldului/genunchiului (fractură) — Corect: Nitinolul flexibil, forța mai mică și riscul de fractură la flexie sunt citate.\n\nNitinolul, cu forță radială maximă, este de elecție la originea iliacă comună calcificată — Incorect: Nitinolul are forță radială mai mică, nu maximă.\n\nStenturile expandabile pe balon se evită la originea vaselor, fiind rezervate fosei poplitee în flexie — Incorect: Expandabilele pe balon sunt tocmai pentru origini.\n\nFractura de stent este imposibilă, flexia articulară neinfluențând dispozitivul — Incorect: Fractura este un risc recunoscut la flexie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 524, Stenturi expandabile versus nitinol (pagini PDF: 209).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    524
   ],
   "pdfPages": [
    209
   ],
   "section": "Stenturi expandabile versus nitinol"
  },
  "learningObjective": "Contrastarea forței radiale (oțel pe balon, origini calcificate) cu flexibilitatea nitinolului pe vase lungi/sinuoase.",
  "optionRationales": [
   "Indicația oțel-balon pe origini calcificate este explicită.",
   "Nitinolul flexibil, forța mai mică și riscul de fractură la flexie sunt citate.",
   "Nitinolul are forță radială mai mică, nu maximă.",
   "Expandabilele pe balon sunt tocmai pentru origini.",
   "Fractura este un risc recunoscut la flexie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează forța radială și sediul (origine calcificată versus AFS sinuoasă) între cele două stenturi."
  },
  "textbookExpressions": [
   "oţel inoxidabil",
   "nitinol"
  ]
 },
 {
  "id": "vascular-adv-015",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Restenoza după intervenția endovasculară:",
  "options": [
   "Apare de obicei între 6 luni și 1 an, prin remodelare și hiperplazie neointimală (proliferare, invazie monocitară, migrare de celule musculare netede, colagen)",
   "Clasificarea TASC ghidează tratamentul după localizare, grad de stenoză și lungime",
   "Patența iliaca cu stent/angioplastie este 70–90% la 1 an; infrainghinal, restenoză/eșec 20–50% la 1 an",
   "Restenoza este excepțională după 6 luni, hiperplazia neointimală fiind protectivă",
   "TASC clasifică doar venele superficiale, fără aplicare arterială"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Apare de obicei între 6 luni și 1 an, prin remodelare și hiperplazie neointimală (proliferare, invazie monocitară, migrare de celule musculare netede, colagen) — Corect: Fereastra 6 luni–1 an și mecanismul inflamator sunt explicite.\n\nClasificarea TASC ghidează tratamentul după localizare, grad de stenoză și lungime — Corect: TASC după localizare, stenoză și lungime este citat.\n\nPatența iliaca cu stent/angioplastie este 70–90% la 1 an; infrainghinal, restenoză/eșec 20–50% la 1 an — Corect: 70–90% iliac versus 20–50% eșec infrainghinal sunt menționate.\n\nRestenoza este excepțională după 6 luni, hiperplazia neointimală fiind protectivă — Incorect: Hiperplazia limitează eficacitatea, nu protejează.\n\nTASC clasifică doar venele superficiale, fără aplicare arterială — Incorect: TASC este o clasificare arterială.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 525, Restenoză, hiperplazie neointimală și TASC (pagini PDF: 210).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    525
   ],
   "pdfPages": [
    210
   ],
   "section": "Restenoză, hiperplazie neointimală și TASC"
  },
  "learningObjective": "Aplicarea ferestrei 6 luni–1 an, a mecanismului neointimal și a contrastului de patență iliac versus infrainghinal.",
  "optionRationales": [
   "Fereastra 6 luni–1 an și mecanismul inflamator sunt explicite.",
   "TASC după localizare, stenoză și lungime este citat.",
   "70–90% iliac versus 20–50% eșec infrainghinal sunt menționate.",
   "Hiperplazia limitează eficacitatea, nu protejează.",
   "TASC este o clasificare arterială."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează hiperplazia neointimală și permutează patențele iliac/infrainghinal."
  },
  "textbookExpressions": [
   "6 luni şi 1 an",
   "TASC"
  ]
 },
 {
  "id": "vascular-adv-016",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Bypassurile extra-anatomice se caracterizează prin:",
  "options": [
   "Sunt opțiuni în abdomen ostil (risc abdominal înalt, laparotomii multiple, infecție): axilo-femural și femuro-femural, cu proteză tunelizată subcutanat, posibil sub anestezie locală plus sedare",
   "Patența este acceptabilă, dar mai redusă decât a aortofemuralului; ocluziile țin de hiperplazie anastomotică, progresie distală, lungime, compresie/unghi în tunel; anticoagularea sistemică crește de obicei patența",
   "Patența depășește aortofemuralul (>90% la 5 ani), anticoagularea fiind inutilă",
   "Se realizează doar transperitoneal, anestezia locală fiind interzisă",
   "Abdomenul ostil contraindică orice bypass, inclusiv extra-anatomic"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sunt opțiuni în abdomen ostil (risc abdominal înalt, laparotomii multiple, infecție): axilo-femural și femuro-femural, cu proteză tunelizată subcutanat, posibil sub anestezie locală plus sedare — Corect: Indicația de abdomen ostil, traseul subcutanat și anestezia locală sunt explicite.\n\nPatența este acceptabilă, dar mai redusă decât a aortofemuralului; ocluziile țin de hiperplazie anastomotică, progresie distală, lungime, compresie/unghi în tunel; anticoagularea sistemică crește de obicei patența — Corect: Patența inferioară, mecanismele de ocluzie și rolul anticoagulării sunt citate.\n\nPatența depășește aortofemuralul (>90% la 5 ani), anticoagularea fiind inutilă — Incorect: Aortofemuralul are >90% la 5 ani; extra-anatomicul este inferior.\n\nSe realizează doar transperitoneal, anestezia locală fiind interzisă — Incorect: Tunelizarea este subcutanată, nu transperitoneală de principiu.\n\nAbdomenul ostil contraindică orice bypass, inclusiv extra-anatomic — Incorect: Extra-anatomicul există tocmai pentru abdomenul ostil.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 525, Bypass extra-anatomic (pagini PDF: 210).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    525
   ],
   "pdfPages": [
    210
   ],
   "section": "Bypass extra-anatomic"
  },
  "learningObjective": "Poziționarea axilo-/femuro-femuralului în abdomenul ostil, cu patență inferioară aortofemuralului.",
  "optionRationales": [
   "Indicația de abdomen ostil, traseul subcutanat și anestezia locală sunt explicite.",
   "Patența inferioară, mecanismele de ocluzie și rolul anticoagulării sunt citate.",
   "Aortofemuralul are >90% la 5 ani; extra-anatomicul este inferior.",
   "Tunelizarea este subcutanată, nu transperitoneală de principiu.",
   "Extra-anatomicul există tocmai pentru abdomenul ostil."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Supraestimează patența extra-anatomică peste aortofemural și cere abord transperitoneal."
  },
  "textbookExpressions": [
   "abdomen ostil",
   "axilo-femurale"
  ]
 },
 {
  "id": "vascular-adv-017",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Bypassul infrainghinal, alegerea grefonului:",
  "options": [
   "Deasupra genunchiului, vena autologă și proteza sintetică au rezultate inițiale comparabile",
   "Sub genunchi, protezele sintetice funcționează mai slab; se preferă grefon venos autolog",
   "Safena poate fi inversată (valvele în sensul fluxului) sau in situ (valvulotom, potrivire de calibru, incizii minime; risc de leziune endotelială)",
   "Sub genunchi, proteza sintetică este superioară venei",
   "Tehnica in situ păstrează valvele intacte, inversarea fiind abandonată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Deasupra genunchiului, vena autologă și proteza sintetică au rezultate inițiale comparabile — Corect: Echivalența inițială supra-genunchi este explicită.\n\nSub genunchi, protezele sintetice funcționează mai slab; se preferă grefon venos autolog — Corect: Inferioritatea sinteticei sub genunchi este citată.\n\nSafena poate fi inversată (valvele în sensul fluxului) sau in situ (valvulotom, potrivire de calibru, incizii minime; risc de leziune endotelială) — Corect: Inversarea versus in situ, cu avantaje/dezavantaje, este descrisă.\n\nSub genunchi, proteza sintetică este superioară venei — Incorect: Sub genunchi vena este superioară.\n\nTehnica in situ păstrează valvele intacte, inversarea fiind abandonată — Incorect: In situ distruge valvele cu valvulotomul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 525, 526, Bypass infrainghinal — Venă versus proteză (pagini PDF: 210, 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    525,
    526
   ],
   "pdfPages": [
    210,
    211
   ],
   "section": "Bypass infrainghinal — Venă versus proteză"
  },
  "learningObjective": "Contrastarea echivalenței deasupra genunchiului cu superioritatea venei sub genunchi și a opțiunii in situ.",
  "optionRationales": [
   "Echivalența inițială supra-genunchi este explicită.",
   "Inferioritatea sinteticei sub genunchi este citată.",
   "Inversarea versus in situ, cu avantaje/dezavantaje, este descrisă.",
   "Sub genunchi vena este superioară.",
   "In situ distruge valvele cu valvulotomul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ierarhia venă/proteză sub genunchi și păstrează greșit valvele în tehnica in situ."
  },
  "textbookExpressions": [
   "deasupra genunchiului",
   "grefon venos autolog"
  ]
 },
 {
  "id": "vascular-adv-018",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Vena „femurală superficială” a fost redenumită „femurală” pentru a:",
  "options": [
   "Evita confuzia și a recunoaște riscul de embolie pulmonară dacă această venă profundă dezvoltă tromboză",
   "Sublinia că este o venă superficială, fără risc emboligen",
   "O alinia nomenclaturii arterei femurale profunde, fără implicație embolică",
   "Exclude tromboza acestei vene din definiția TVP",
   "Justifica stripping-ul de rutină, fiind fără rol în întoarcerea venoasă"
  ],
  "correct": [
   0
  ],
  "explanation": "Evita confuzia și a recunoaște riscul de embolie pulmonară dacă această venă profundă dezvoltă tromboză — Corect: Textul explică redenumirea prin confuzie și risc de EP.\n\nSublinia că este o venă superficială, fără risc emboligen — Incorect: Nu este o venă superficială.\n\nO alinia nomenclaturii arterei femurale profunde, fără implicație embolică — Incorect: Motivația este emboligenă, nu alinierea la AFP.\n\nExclude tromboza acestei vene din definiția TVP — Incorect: TVP a acestei vene este relevantă embolic.\n\nJustifica stripping-ul de rutină, fiind fără rol în întoarcerea venoasă — Incorect: 85–90% din întoarcere e profundă; stripping-ul superficial e permis doar dacă profundul e patent.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 534, Nomenclatură — Vena femurală (pagini PDF: 213).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    534
   ],
   "pdfPages": [
    213
   ],
   "section": "Nomenclatură — Vena femurală"
  },
  "learningObjective": "Recunoașterea redenumirii menite să evidențieze caracterul profund și riscul de EP.",
  "optionRationales": [
   "Textul explică redenumirea prin confuzie și risc de EP.",
   "Nu este o venă superficială.",
   "Motivația este emboligenă, nu alinierea la AFP.",
   "TVP a acestei vene este relevantă embolic.",
   "85–90% din întoarcere e profundă; stripping-ul superficial e permis doar dacă profundul e patent."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează vena femurală (ex-superficială) ca venă superficială neemboligenă, capcana nomenclaturii."
  },
  "textbookExpressions": [
   "femurală superficială",
   "embolie pulmonară"
  ]
 },
 {
  "id": "vascular-adv-019",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Epidemiologia bolii venoase cronice:",
  "options": [
   "Aproximativ 40% dintre adulți vor avea o formă de boală venoasă (varice, post-trombotic, ulcere, telangiectazii)",
   "Adulții au o probabilitate de 6% de ulcer venos în viață; 70% dintre cei peste 70 de ani au o formă de boală venoasă cronică",
   "TVP este responsabilă de multe decese neașteptate la spitalizați, mai ales postoperator",
   "Boala venoasă este rară sub 5% la adulți, ulcerele fiind excepționale după 70 de ani",
   "Profilaxia TVP nu se ia în considerare la pacientul chirurgical"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Aproximativ 40% dintre adulți vor avea o formă de boală venoasă (varice, post-trombotic, ulcere, telangiectazii) — Corect: 40% este explicit.\n\nAdulții au o probabilitate de 6% de ulcer venos în viață; 70% dintre cei peste 70 de ani au o formă de boală venoasă cronică — Corect: 6% ulcer lifetime și 70% după 70 de ani sunt citate.\n\nTVP este responsabilă de multe decese neașteptate la spitalizați, mai ales postoperator — Corect: Decesul postoperator prin TVP și apelul la profilaxie sunt descrise.\n\nBoala venoasă este rară sub 5% la adulți, ulcerele fiind excepționale după 70 de ani — Incorect: 40%, nu 5%; vârsta crește incidența.\n\nProfilaxia TVP nu se ia în considerare la pacientul chirurgical — Incorect: La toți pacienții chirurgicali cu risc trebuie avută în vedere o formă de profilaxie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 534, Boala venoasă — Epidemiologie (pagini PDF: 213).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    534
   ],
   "pdfPages": [
    213
   ],
   "section": "Boala venoasă — Epidemiologie"
  },
  "learningObjective": "Reținerea triadului 40% / 6% ulcer / 70% după 70 de ani și a apelului la profilaxia TVP.",
  "optionRationales": [
   "40% este explicit.",
   "6% ulcer lifetime și 70% după 70 de ani sunt citate.",
   "Decesul postoperator prin TVP și apelul la profilaxie sunt descrise.",
   "40%, nu 5%; vârsta crește incidența.",
   "La toți pacienții chirurgicali cu risc trebuie avută în vedere o formă de profilaxie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Coboară 40% sub 5% și anulează profilaxia TVP, pe trei procente memorabile."
  },
  "textbookExpressions": [
   "40% dintre",
   "6% de a dezvolta"
  ]
 },
 {
  "id": "vascular-adv-020",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Anatomia venelor profunde ale gambei:",
  "options": [
   "Venele tibiale anterioare, posterioare și peroniere sunt aproape constant pereche; gamba are șase vene profunde principale, față de trei artere",
   "Sistemul superficial al membrului inferior cuprinde safena mare, safena mică și afluenții",
   "Venele gambei sunt unice, câte una de arteră, fără perechi",
   "Safena mare este o venă profundă, paralelă cu artera femurală",
   "Perforantele drenează din profund spre superficial, valvele încurajând refluxul"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Venele tibiale anterioare, posterioare și peroniere sunt aproape constant pereche; gamba are șase vene profunde principale, față de trei artere — Corect: Perechile și totalul de șase vene versus trei artere sunt explicite.\n\nSistemul superficial al membrului inferior cuprinde safena mare, safena mică și afluenții — Corect: Safena mare, mică și afluenții definesc superficialul.\n\nVenele gambei sunt unice, câte una de arteră, fără perechi — Incorect: Textul precizează că sunt aproape întotdeauna pereche.\n\nSafena mare este o venă profundă, paralelă cu artera femurală — Incorect: Safena mare este superficială.\n\nPerforantele drenează din profund spre superficial, valvele încurajând refluxul — Incorect: Perforantele dirijează sângele din superficial spre profund; incompetența permite refluxul invers.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 534, Anatomie venoasă — Șase vene de gambă (pagini PDF: 213).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    534
   ],
   "pdfPages": [
    213
   ],
   "section": "Anatomie venoasă — Șase vene de gambă"
  },
  "learningObjective": "Recunoașterea dublării venelor tibiale/peroniere (6 versus 3 artere) și a conținutului sistemului superficial.",
  "optionRationales": [
   "Perechile și totalul de șase vene versus trei artere sunt explicite.",
   "Safena mare, mică și afluenții definesc superficialul.",
   "Textul precizează că sunt aproape întotdeauna pereche.",
   "Safena mare este superficială.",
   "Perforantele dirijează sângele din superficial spre profund; incompetența permite refluxul invers."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce cele șase vene pereche la trei vene unice și mută safena în compartimentul profund."
  },
  "textbookExpressions": [
   "şase vene profunde",
   "trei at1ere"
  ]
 },
 {
  "id": "vascular-adv-021",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Fiziopatologia bolii venoase, după Virchow și consecințe:",
  "options": [
   "Triada: stază, leziune endotelială venoasă și hipercoagulabilitate; trauma osoasă/de părți moi a membrului este o cauză frecventă de leziune endotelială și TVP",
   "Valvele deteriorate de TVP cresc presiunea în ortostatism, cu exudat proteic și inflamație interstițială, finalul fiind lipodermatoscleroza de gambă",
   "Compartimentele musculare pompează sângele profund spre inimă; venele superficiale nu beneficiază de această pompă",
   "Triada Virchow include doar hipertensiunea arterială, fără stază",
   "Lipodermatoscleroza apare la membrul superior, unde presiunea ortostatică este maximă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Triada: stază, leziune endotelială venoasă și hipercoagulabilitate; trauma osoasă/de părți moi a membrului este o cauză frecventă de leziune endotelială și TVP — Corect: Cele trei elemente și trauma ca leziune endotelială sunt explicite.\n\nValvele deteriorate de TVP cresc presiunea în ortostatism, cu exudat proteic și inflamație interstițială, finalul fiind lipodermatoscleroza de gambă — Corect: Cascada presiune–exudat–fibroză de gambă este descrisă.\n\nCompartimentele musculare pompează sângele profund spre inimă; venele superficiale nu beneficiază de această pompă — Corect: Contrastul pompă musculară profundă versus superficial fără pompă este citat.\n\nTriada Virchow include doar hipertensiunea arterială, fără stază — Incorect: Triada nu este HTA.\n\nLipodermatoscleroza apare la membrul superior, unde presiunea ortostatică este maximă — Incorect: Sediul este gamba, unde presiunea ortostatică e maximă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 535, Virchow și lipodermatoscleroza (pagini PDF: 214).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    535
   ],
   "pdfPages": [
    214
   ],
   "section": "Virchow și lipodermatoscleroza"
  },
  "learningObjective": "Aplicarea triadei, a pompării musculare și a lipodermatosclerozei ca stadiu final de gambă.",
  "optionRationales": [
   "Cele trei elemente și trauma ca leziune endotelială sunt explicite.",
   "Cascada presiune–exudat–fibroză de gambă este descrisă.",
   "Contrastul pompă musculară profundă versus superficial fără pompă este citat.",
   "Triada nu este HTA.",
   "Sediul este gamba, unde presiunea ortostatică e maximă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută lipodermatoscleroza pe membrul superior și golește triada Virchow de stază."
  },
  "textbookExpressions": [
   "staza, leziunile endoteliale",
   "lipodermatoscleroza"
  ]
 },
 {
  "id": "vascular-adv-022",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Conform Tabelului 26-4, tabloul clinic al emboliei pulmonare include:",
  "options": [
   "Durere toracică pleuritică (70%)",
   "Dispnee și tahipnee (80%)",
   "Tahicardie (45%)",
   "Hemoptizie (25–30%)",
   "Radiografia pulmonară este constant diagnostică, imaginea de „pană” fiind regula"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Durere toracică pleuritică (70%) — Corect: 70% durere pleuritică este tabelat.\n\nDispnee și tahipnee (80%) — Corect: 80% dispnee/tahipnee este tabelat.\n\nTahicardie (45%) — Corect: 45% tahicardie este tabelat.\n\nHemoptizie (25–30%) — Corect: 25–30% hemoptizie este tabelat.\n\nRadiografia pulmonară este constant diagnostică, imaginea de „pană” fiind regula — Incorect: Radiografia este rareori diagnostică; pana de atelectazie este rară.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 539, Tabelul 26-4 — Embolia pulmonară (pagini PDF: 218).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    539
   ],
   "pdfPages": [
    218
   ],
   "section": "Tabelul 26-4 — Embolia pulmonară"
  },
  "learningObjective": "Reținerea celor patru procente (70/80/45/25–30) față de raritatea semnelor radiografice clasice.",
  "optionRationales": [
   "70% durere pleuritică este tabelat.",
   "80% dispnee/tahipnee este tabelat.",
   "45% tahicardie este tabelat.",
   "25–30% hemoptizie este tabelat.",
   "Radiografia este rareori diagnostică; pana de atelectazie este rară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru procente din tabel versus mitul radiografiei „în pană”, ușor de memorat greșit."
  },
  "textbookExpressions": [
   "70%",
   "80%"
  ]
 },
 {
  "id": "vascular-adv-023",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Diagnosticul definitiv al emboliei pulmonare este dat de:",
  "options": [
   "Tomografie computerizată toracică, scintigrafie ventilație-perfuzie sau angiografie pulmonară; angiografia are specificitate și sensibilitate >98%, dar este invazivă",
   "Radiografie simplă patognomonică în toate cazurile",
   "Doar D-dimeri, fără imagistică",
   "Ecografie abdominală, artera pulmonară nefiind vizibilă CT",
   "Scintigrafia este abandonată, angiografia având sensibilitate sub 50%"
  ],
  "correct": [
   0
  ],
  "explanation": "Tomografie computerizată toracică, scintigrafie ventilație-perfuzie sau angiografie pulmonară; angiografia are specificitate și sensibilitate >98%, dar este invazivă — Corect: Cele trei modalități și cifra >98% sunt explicite.\n\nRadiografie simplă patognomonică în toate cazurile — Incorect: Radiografia este rareori diagnostică.\n\nDoar D-dimeri, fără imagistică — Incorect: D-dimerii nu sunt menționați ca substitut al imagisticii de confirmare.\n\nEcografie abdominală, artera pulmonară nefiind vizibilă CT — Incorect: CT-ul toracic evidențiază trombul pulmonar.\n\nScintigrafia este abandonată, angiografia având sensibilitate sub 50% — Incorect: Angiografia are >98%, nu sub 50%; scintigrafia rămâne o opțiune.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 539, Diagnosticul emboliei pulmonare (pagini PDF: 218).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    539
   ],
   "pdfPages": [
    218
   ],
   "section": "Diagnosticul emboliei pulmonare"
  },
  "learningObjective": "Recunoașterea triadului CT / V/Q / angiografie, cu performanța >98% a angiografiei invazive.",
  "optionRationales": [
   "Cele trei modalități și cifra >98% sunt explicite.",
   "Radiografia este rareori diagnostică.",
   "D-dimerii nu sunt menționați ca substitut al imagisticii de confirmare.",
   "CT-ul toracic evidențiază trombul pulmonar.",
   "Angiografia are >98%, nu sub 50%; scintigrafia rămâne o opțiune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește CT/V/Q/angiografia cu radiografia simplă și coboară sensibilitatea angiografică de la >98% sub 50%."
  },
  "textbookExpressions": [
   ">98%",
   "angiografia pulmonară"
  ]
 },
 {
  "id": "vascular-adv-024",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Tratamentul emboliei pulmonare include:",
  "options": [
   "Anticoagularea inițială, pentru a preveni emboli noi și propagarea; suport inotrop dacă instabilitatea persistă",
   "Tromboliza se ia în considerare la pacientul stabil, dar simptomatic din cauza embolului",
   "Filtrul cav (jugular intern sau femural, permanent sau provizoriu) la contraindicație de anticoagulant sau EP sub tratament; se îndepărtează când nu mai e util",
   "Mărimea trombului se corelează liniar cu supraviețuirea, embolii mici fiind inofensivi",
   "Filtrele cave se lasă pe viață, migrarea și perforația nefiind descrise"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Anticoagularea inițială, pentru a preveni emboli noi și propagarea; suport inotrop dacă instabilitatea persistă — Corect: Anticoagularea și inotopia sunt prima linie.\n\nTromboliza se ia în considerare la pacientul stabil, dar simptomatic din cauza embolului — Corect: Tromboliza la stabilul simptomatic este citată.\n\nFiltrul cav (jugular intern sau femural, permanent sau provizoriu) la contraindicație de anticoagulant sau EP sub tratament; se îndepărtează când nu mai e util — Corect: Indicațiile, căile de implantare și explantarea filtrului sunt descrise.\n\nMărimea trombului se corelează liniar cu supraviețuirea, embolii mici fiind inofensivi — Incorect: Nu există corelație directă mărime–supraviețuire; embolii mici multipli pot cauza colaps.\n\nFiltrele cave se lasă pe viață, migrarea și perforația nefiind descrise — Incorect: Textul cere îndepărtarea pentru a preveni migrare, perforație, ocluzie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 539, EP — Anticoagulare, tromboliză, filtru cav (pagini PDF: 218).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    539
   ],
   "pdfPages": [
    218
   ],
   "section": "EP — Anticoagulare, tromboliză, filtru cav"
  },
  "learningObjective": "Ierarhia anticoagulant → tromboliză la simptomaticul stabil → filtru cav la contraindicație/recidivă.",
  "optionRationales": [
   "Anticoagularea și inotopia sunt prima linie.",
   "Tromboliza la stabilul simptomatic este citată.",
   "Indicațiile, căile de implantare și explantarea filtrului sunt descrise.",
   "Nu există corelație directă mărime–supraviețuire; embolii mici multipli pot cauza colaps.",
   "Textul cere îndepărtarea pentru a preveni migrare, perforație, ocluzie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie prognosticul exclusiv mărimii trombului și lasă filtrul cav permanent, contrar paragrafului de explantare."
  },
  "textbookExpressions": [
   "filtru cav",
   "trombolitic"
  ]
 },
 {
  "id": "vascular-adv-025",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Tratamentul varicelor, în raport cu sistemul profund:",
  "options": [
   "85–90% din întoarcerea venoasă e asigurată de sistemul profund; îndepărtarea superficialelor are impact minim dacă profundul e patent",
   "Ligaturarea safenei la joncțiunea safeno-femurală este mai ales pentru safene proximale >1,5 cm; recidiva e mai mare decât după stripping",
   "ARF, laser endovenos, scleroterapie cu spumă sau închidere mecano-chimică se fac prin puncție ecoghidată sub genunchi",
   "Stripping-ul este mai puțin dureros decât tehnicile minim-invazive și s-a impus ca standard actual",
   "Ablatia superficială este contraindicată dacă profundul e patent, 10% din întoarcere depinzând de safenă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "85–90% din întoarcerea venoasă e asigurată de sistemul profund; îndepărtarea superficialelor are impact minim dacă profundul e patent — Corect: 85–90% și condiția de patență profundă sunt explicite.\n\nLigaturarea safenei la joncțiunea safeno-femurală este mai ales pentru safene proximale >1,5 cm; recidiva e mai mare decât după stripping — Corect: Pragul >1,5 cm și recidiva superioară stripping-ului sunt citate.\n\nARF, laser endovenos, scleroterapie cu spumă sau închidere mecano-chimică se fac prin puncție ecoghidată sub genunchi — Corect: Tehnicile endovenoase prin puncție sub genunchi sunt listate.\n\nStripping-ul este mai puțin dureros decât tehnicile minim-invazive și s-a impus ca standard actual — Incorect: Stripping-ul are recuperare mai lungă și durere mai mare decât minim-invazivul.\n\nAblatia superficială este contraindicată dacă profundul e patent, 10% din întoarcere depinzând de safenă — Incorect: Ablația superficială e permisă tocmai când profundul e patent.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 540, 539, Varice — 85–90% profund și tehnici (pagini PDF: 219, 218).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    540,
    539
   ],
   "pdfPages": [
    219,
    218
   ],
   "section": "Varice — 85–90% profund și tehnici"
  },
  "learningObjective": "Aplicarea ponderii de 85–90% a sistemului profund și a pragului >1,5 cm pentru ligatură versus ablație.",
  "optionRationales": [
   "85–90% și condiția de patență profundă sunt explicite.",
   "Pragul >1,5 cm și recidiva superioară stripping-ului sunt citate.",
   "Tehnicile endovenoase prin puncție sub genunchi sunt listate.",
   "Stripping-ul are recuperare mai lungă și durere mai mare decât minim-invazivul.",
   "Ablația superficială e permisă tocmai când profundul e patent."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează 85–90% (profund) cu dependența de safenă și reabilitează stripping-ul ca mai puțin dureros."
  },
  "textbookExpressions": [
   "85-90%",
   "> 1,5 cm"
  ]
 },
 {
  "id": "vascular-adv-026",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Insuficiența venoasă cronică se caracterizează prin:",
  "options": [
   "Este consecința hipertensiunii venoase locale prin incompetență valvulară profundă, obstrucție sau reflux din perforante",
   "Clinic: edem cronic, hiperpigmentare și ulcere; piciorul este edemațiat și hiperpigmentat maleolar",
   "Este o arteriopatie de trifurcație, hiperpigmentarea lipsind",
   "Ulcerele venoase stau pe pulpa digitală, identic celor arteriale",
   "Compresia și elevația agravează hipertensiunea venoasă, fiind evitate"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este consecința hipertensiunii venoase locale prin incompetență valvulară profundă, obstrucție sau reflux din perforante — Corect: Cele trei cauze de hipertensiune venoasă sunt explicite.\n\nClinic: edem cronic, hiperpigmentare și ulcere; piciorul este edemațiat și hiperpigmentat maleolar — Corect: Edemul, hiperpigmentarea și ulcerele, cu sediu maleolar, sunt descrise.\n\nEste o arteriopatie de trifurcație, hiperpigmentarea lipsind — Incorect: Nu este o arteriopatie.\n\nUlcerele venoase stau pe pulpa digitală, identic celor arteriale — Incorect: Ulcerele venoase sunt maleolare, nu digitale.\n\nCompresia și elevația agravează hipertensiunea venoasă, fiind evitate — Incorect: Fiziopatologia este hipertensiunea; compresia și elevația o combat, nu o agravează.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 540, Insuficiența venoasă cronică (pagini PDF: 219).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    540
   ],
   "pdfPages": [
    219
   ],
   "section": "Insuficiența venoasă cronică"
  },
  "learningObjective": "Legarea hipertensiunii venoase (valve/obstrucție/perforante) de edemul și hiperpigmentarea maleolară.",
  "optionRationales": [
   "Cele trei cauze de hipertensiune venoasă sunt explicite.",
   "Edemul, hiperpigmentarea și ulcerele, cu sediu maleolar, sunt descrise.",
   "Nu este o arteriopatie.",
   "Ulcerele venoase sunt maleolare, nu digitale.",
   "Fiziopatologia este hipertensiunea; compresia și elevația o combat, nu o agravează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută ulcerul venos pe degete (sediul arterial) și neagă hipertensiunea venoasă ca mecanism."
  },
  "textbookExpressions": [
   "hipertensiunii venoase",
   "hiperpigmentarea"
  ]
 },
 {
  "id": "vascular-adv-027",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Complicațiile angiografiei (tehnica Seldinger) includ:",
  "options": [
   "Sângerare sau tromboză la locul puncției, pseudoanevrism, fistulă arterio-venoasă iatrogenă, hipersensibilitate și toxicitate renală la contrast, cea din urmă mai frecventă la diabetici",
   "Tromboza apare de obicei în primele 6 ore de la puncție, dar poate apărea și după câteva zile",
   "Pseudoanevrismele pot fi închise prin compresie sub ghidaj ecografic, mai ales la cei fără anticoagulare; altfel, sutură chirurgicală a orificiului",
   "Hidratarea înainte și după angiografie este importantă, în special la insuficiența renală",
   "Tromboza este imposibilă după 2 ore, contrastul neavând toxicitate renală la diabetic"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Sângerare sau tromboză la locul puncției, pseudoanevrism, fistulă arterio-venoasă iatrogenă, hipersensibilitate și toxicitate renală la contrast, cea din urmă mai frecventă la diabetici — Corect: Lista de complicații și predilecția diabeticului pentru nefropatia de contrast sunt explicite.\n\nTromboza apare de obicei în primele 6 ore de la puncție, dar poate apărea și după câteva zile — Corect: Fereastra de 6 ore (și posibilitatea tardivă) este citată.\n\nPseudoanevrismele pot fi închise prin compresie sub ghidaj ecografic, mai ales la cei fără anticoagulare; altfel, sutură chirurgicală a orificiului — Corect: Compresia US versus sutura chirurgicală sunt descrise.\n\nHidratarea înainte și după angiografie este importantă, în special la insuficiența renală — Corect: Hidratarea, mai ales la IR, este cerută.\n\nTromboza este imposibilă după 2 ore, contrastul neavând toxicitate renală la diabetic — Incorect: Tromboza poate apărea și după zile; diabeticul e tocmai la risc renal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 523, Angiografie — Complicații Seldinger (pagini PDF: 208).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    523
   ],
   "pdfPages": [
    208
   ],
   "section": "Angiografie — Complicații Seldinger"
  },
  "learningObjective": "Listarea complicațiilor de puncție și a ferestrei de tromboză de 6 ore, plus compresia ecografică a pseudoanevrismului.",
  "optionRationales": [
   "Lista de complicații și predilecția diabeticului pentru nefropatia de contrast sunt explicite.",
   "Fereastra de 6 ore (și posibilitatea tardivă) este citată.",
   "Compresia US versus sutura chirurgicală sunt descrise.",
   "Hidratarea, mai ales la IR, este cerută.",
   "Tromboza poate apărea și după zile; diabeticul e tocmai la risc renal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează fereastra de 6 ore și toxicitatea renală a diabeticului, două capcane din același paragraf."
  },
  "textbookExpressions": [
   "primele 6 ore",
   "pseudoanevrism"
  ]
 },
 {
  "id": "vascular-adv-028",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Cauza principală de deces la pacienții cu BAP este:",
  "options": [
   "Infarctul miocardic; terapia medicală (dietă, exercițiu, stop fumat, antiplachetare, betablocant, control HTA, dislipidemie, diabet) scade evenimentele cardiovasculare",
   "Amputația de coapsă, evenimentele coronariene fiind excepționale",
   "Embolia pulmonară, fără legătură cu ateroscleroza sistemică",
   "Ischemia mezenterică acută, ca unica cauză de mortalitate",
   "Ruptura de anevrism popliteu, IM-ul neavând rol"
  ],
  "correct": [
   0
  ],
  "explanation": "Infarctul miocardic; terapia medicală (dietă, exercițiu, stop fumat, antiplachetare, betablocant, control HTA, dislipidemie, diabet) scade evenimentele cardiovasculare — Corect: IM-ul ca cauză principală și pachetul de terapie medicală sunt explicite.\n\nAmputația de coapsă, evenimentele coronariene fiind excepționale — Incorect: Amputația nu este cauza principală de deces citată.\n\nEmbolia pulmonară, fără legătură cu ateroscleroza sistemică — Incorect: Decesul e cardiac, pe fond aterosclerotic sistemic.\n\nIschemia mezenterică acută, ca unica cauză de mortalitate — Incorect: Ischemia mezenterică nu înlocuiește IM-ul.\n\nRuptura de anevrism popliteu, IM-ul neavând rol — Incorect: Popliteul embolizează/trombozează, dar mortalitatea BAP e coronariană.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 523, BAP — Terapie medicală și mortalitate (pagini PDF: 208).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    523
   ],
   "pdfPages": [
    208
   ],
   "section": "BAP — Terapie medicală și mortalitate"
  },
  "learningObjective": "Recunoașterea infarctului miocardic ca principală cauză de deces în BAP, nu a evenimentului de membru.",
  "optionRationales": [
   "IM-ul ca cauză principală și pachetul de terapie medicală sunt explicite.",
   "Amputația nu este cauza principală de deces citată.",
   "Decesul e cardiac, pe fond aterosclerotic sistemic.",
   "Ischemia mezenterică nu înlocuiește IM-ul.",
   "Popliteul embolizează/trombozează, dar mortalitatea BAP e coronariană."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută cauza decesului din BAP de pe infarct pe amputație, inversul explicit al paragrafului de terapie medicală."
  },
  "textbookExpressions": [
   "infarctul miocardic",
   "Terapia medicală"
  ]
 },
 {
  "id": "vascular-adv-029",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Angio-RM și angio-CT, comparativ cu arteriografia, se caracterizează prin:",
  "options": [
   "Nu necesită puncție femurală, deci evită complicațiile de la locul puncției; contrastul e injectat într-o venă centrală, cu sincronizare critică a imaginilor",
   "Gadolinium poate provoca rar fibroză subcutanată (sistemică nefrogene) la insuficiența renală; majoritatea agenților de angio-CT pot exacerba IR",
   "Sunt superioare pentru că permit PTA în aceeași ședință, fără risc de contrast",
   "Gadolinium e inofensiv în IR, puncția femurală rămânând necesară ca la Seldinger",
   "Arteriografia nu folosește puncție, angio-RM-ul fiind calea Seldinger"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Nu necesită puncție femurală, deci evită complicațiile de la locul puncției; contrastul e injectat într-o venă centrală, cu sincronizare critică a imaginilor — Corect: Absența puncției și injectarea venoasă centrală sunt explicite.\n\nGadolinium poate provoca rar fibroză subcutanată (sistemică nefrogene) la insuficiența renală; majoritatea agenților de angio-CT pot exacerba IR — Corect: Gadolinium/NSF și exacerbarea IR sunt citate.\n\nSunt superioare pentru că permit PTA în aceeași ședință, fără risc de contrast — Incorect: PTA în aceeași ședință ține de arteriografia cu puncție.\n\nGadolinium e inofensiv în IR, puncția femurală rămânând necesară ca la Seldinger — Incorect: Gadoliniumul are risc în IR; puncția nu e cerută.\n\nArteriografia nu folosește puncție, angio-RM-ul fiind calea Seldinger — Incorect: Seldinger descrie arteriografia, nu angio-RM.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 523, Angio-RM/CT versus arteriografie (pagini PDF: 208).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    523
   ],
   "pdfPages": [
    208
   ],
   "section": "Angio-RM/CT versus arteriografie"
  },
  "learningObjective": "Contrastarea absenței puncției femurale cu riscul de fibroză nefrogene a gadoliniumului și de exacerbarea IR la iod.",
  "optionRationales": [
   "Absența puncției și injectarea venoasă centrală sunt explicite.",
   "Gadolinium/NSF și exacerbarea IR sunt citate.",
   "PTA în aceeași ședință ține de arteriografia cu puncție.",
   "Gadoliniumul are risc în IR; puncția nu e cerută.",
   "Seldinger descrie arteriografia, nu angio-RM."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează puncția (RM/CT versus Seldinger) și declară gadoliniumul inofensiv în IR."
  },
  "textbookExpressions": [
   "Gadolinium",
   "fibroză subcutanată"
  ]
 },
 {
  "id": "vascular-adv-030",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Tehnici adjuvante PTA, dincolo de stentul de oțel sau nitinol:",
  "options": [
   "Recanalizarea subintimală creează un pasaj nou între straturile peretelui, dilatat apoi cu balon, fără bypass",
   "Baloanele și stenturile farmacologic active (antineoplazice, citotoxice, imunosupresoare) au arătat patență promițătoare în studii inițiale",
   "Aterectomia (lame rotative/orbitale sau laser) restabilește lumenul maximal și poate evita un corp străin, dar creează suprafețe denudate cu restenoză ridicată",
   "Stenturile acoperite sunt inferioare metalului neacoperit, mai ales la restenoză",
   "Recanalizarea subintimală impune bypass de principiu, aterectomia fiind abandonată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Recanalizarea subintimală creează un pasaj nou între straturile peretelui, dilatat apoi cu balon, fără bypass — Corect: Pasajul subintimal fără bypass este explicit.\n\nBaloanele și stenturile farmacologic active (antineoplazice, citotoxice, imunosupresoare) au arătat patență promițătoare în studii inițiale — Corect: Acoperirea farmacologică și rezultatele inițiale sunt citate.\n\nAterectomia (lame rotative/orbitale sau laser) restabilește lumenul maximal și poate evita un corp străin, dar creează suprafețe denudate cu restenoză ridicată — Corect: Lamele/laserul, lumenul maximal și restenoza prin denudare sunt descrise.\n\nStenturile acoperite sunt inferioare metalului neacoperit, mai ales la restenoză — Incorect: Stenturile acoperite au rezultate favorabile față de neacoperite, mai ales la restenoză.\n\nRecanalizarea subintimală impune bypass de principiu, aterectomia fiind abandonată — Incorect: Subintimala evită bypass-ul; aterectomia rămâne o alternativă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 524, PTA — Subintimal, DES, aterectomie (pagini PDF: 209).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    524
   ],
   "pdfPages": [
    209
   ],
   "section": "PTA — Subintimal, DES, aterectomie"
  },
  "learningObjective": "Recunoașterea recanalizării subintimale, a stenturilor farmacologic active și a costului restenoic al aterectomiei.",
  "optionRationales": [
   "Pasajul subintimal fără bypass este explicit.",
   "Acoperirea farmacologică și rezultatele inițiale sunt citate.",
   "Lamele/laserul, lumenul maximal și restenoza prin denudare sunt descrise.",
   "Stenturile acoperite au rezultate favorabile față de neacoperite, mai ales la restenoză.",
   "Subintimala evită bypass-ul; aterectomia rămâne o alternativă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Declară stentul acoperit inferior neacoperitului și transformă subintimala în indicație de bypass."
  },
  "textbookExpressions": [
   "recanalizare subintimală",
   "Aterectomia"
  ]
 },
 {
  "id": "vascular-adv-031",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Conform Tabelului 26-3, patența la 2 ani a bypassului infrainghinal este de ordinul:",
  "options": [
   "Femuro-popliteu deasupra genunchiului: PTFE 75%, venă 80%",
   "Femuro-popliteu sub genunchi: PTFE 60%, venă 75–80% (secundară 90%)",
   "Femuro-tibial: PTFE 30%, venă 70–75% (secundară 80–90%)",
   "La 4 ani, femuro-tibialul pe PTFE rămâne 20%, vena 60–70%/75–80%",
   "Deasupra genunchiului, PTFE depășește vena (90% versus 30%)"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Femuro-popliteu deasupra genunchiului: PTFE 75%, venă 80% — Corect: Rândul supra-genunchi 75/80 la 2 ani este tabelat.\n\nFemuro-popliteu sub genunchi: PTFE 60%, venă 75–80% (secundară 90%) — Corect: Sub-genunchi 60 versus 75–80/90 este tabelat.\n\nFemuro-tibial: PTFE 30%, venă 70–75% (secundară 80–90%) — Corect: Tibialul 30 versus 70–75/80–90 este tabelat.\n\nLa 4 ani, femuro-tibialul pe PTFE rămâne 20%, vena 60–70%/75–80% — Corect: Coloana de 4 ani confirmă 20% PTFE tibial.\n\nDeasupra genunchiului, PTFE depășește vena (90% versus 30%) — Incorect: Deasupra genunchiului vena (80%) rămâne cel puțin egală, nu inferioară PTFE.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 526, Tabelul 26-3 — Patențe PTFE versus venă (pagini PDF: 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    526
   ],
   "pdfPages": [
    211
   ],
   "section": "Tabelul 26-3 — Patențe PTFE versus venă"
  },
  "learningObjective": "Contrastarea prăbușirii PTFE sub genunchi și tibial (60% / 30%) față de venă (75–80% / 70–75%).",
  "optionRationales": [
   "Rândul supra-genunchi 75/80 la 2 ani este tabelat.",
   "Sub-genunchi 60 versus 75–80/90 este tabelat.",
   "Tibialul 30 versus 70–75/80–90 este tabelat.",
   "Coloana de 4 ani confirmă 20% PTFE tibial.",
   "Deasupra genunchiului vena (80%) rămâne cel puțin egală, nu inferioară PTFE."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează vena cu PTFE deasupra genunchiului și ignoră prăbușirea tibială a sinteticei la 30%."
  },
  "textbookExpressions": [
   "Femuro-popliteu deasupra",
   "Bypass femuro-tibial"
  ]
 },
 {
  "id": "vascular-adv-032",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Când safena ipsilaterală lipsește, alternativele de grefon includ:",
  "options": [
   "Safena contralaterală, cu precauție pentru circulația celuilalt picior",
   "Venele cefalice și bazilice, suturate cap la cap într-o grefă combinată",
   "Proteză sintetică până la tibial, cu petec venos sau „manșetă” (cuff) distală; în gangrenă fără venă autologă, criovenă sau venă ombilicală, cu patență mai redusă, dar suficientă pentru a vindeca un ulcer",
   "Safena contralaterală se recoltează de principiu, fără a evalua celălalt membru",
   "Criovena depășește patența venei autologe și înlocuiește urmărirea Doppler"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Safena contralaterală, cu precauție pentru circulația celuilalt picior — Corect: Contralaterala cu precauție este explicită.\n\nVenele cefalice și bazilice, suturate cap la cap într-o grefă combinată — Corect: Cefalica/bazilica cap-la-cap sunt citate.\n\nProteză sintetică până la tibial, cu petec venos sau „manșetă” (cuff) distală; în gangrenă fără venă autologă, criovenă sau venă ombilicală, cu patență mai redusă, dar suficientă pentru a vindeca un ulcer — Corect: Cuff-ul, criovena și patența redusă dar utilă pentru ulcer sunt descrise.\n\nSafena contralaterală se recoltează de principiu, fără a evalua celălalt membru — Incorect: Textul cere precauție pentru celălalt picior.\n\nCriovena depășește patența venei autologe și înlocuiește urmărirea Doppler — Incorect: Patența criovenei e mult mai redusă decât a autologului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 526, Grefon alternativ — Safenă, braț, criovenă (pagini PDF: 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    526
   ],
   "pdfPages": [
    211
   ],
   "section": "Grefon alternativ — Safenă, braț, criovenă"
  },
  "learningObjective": "Ierarhia contralaterală → vene de braț → PTFE cu cuff → criovenă/ombilicală, cu patență inferioară autologului.",
  "optionRationales": [
   "Contralaterala cu precauție este explicită.",
   "Cefalica/bazilica cap-la-cap sunt citate.",
   "Cuff-ul, criovena și patența redusă dar utilă pentru ulcer sunt descrise.",
   "Textul cere precauție pentru celălalt picior.",
   "Patența criovenei e mult mai redusă decât a autologului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Supraestimează criovena peste autolog și recoltează contralateralul fără a gândi celălalt membru."
  },
  "textbookExpressions": [
   "criovena",
   "manşete"
  ]
 },
 {
  "id": "vascular-adv-033",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Urmărirea Doppler a bypassului venos safenian arată că:",
  "options": [
   "Identificarea și corectarea stenozelor (angioplastie sau revizie) duc la patență „asistată” de circa 90% la 2 ani",
   "Dacă stenoza e lăsată să ocludă înainte de corecție, patența la 2 ani este de doar 30%",
   "Patența asistată este 30%, ocluzia netratată urcând la 90%",
   "Doppler-ul e inutil, stenozele anastomotice neexistând",
   "Angioplastia stenozei scade patența față de expectativă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Identificarea și corectarea stenozelor (angioplastie sau revizie) duc la patență „asistată” de circa 90% la 2 ani — Corect: 90% asistată prin Doppler + PTA/revizie este explicită.\n\nDacă stenoza e lăsată să ocludă înainte de corecție, patența la 2 ani este de doar 30% — Corect: 30% după ocluzie netratată este citată.\n\nPatența asistată este 30%, ocluzia netratată urcând la 90% — Incorect: Cifrele sunt inversate față de text.\n\nDoppler-ul e inutil, stenozele anastomotice neexistând — Incorect: Doppler-ul e util tocmai pentru stenoze anastomotice și de grefon.\n\nAngioplastia stenozei scade patența față de expectativă — Incorect: Corecția crește, nu scade, patența.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 526, Patență asistată — 90% versus 30% (pagini PDF: 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    526
   ],
   "pdfPages": [
    211
   ],
   "section": "Patență asistată — 90% versus 30%"
  },
  "learningObjective": "Contrastarea patenței asistate de 90% la 2 ani cu 30% după ocluzia stenozelor netratate.",
  "optionRationales": [
   "90% asistată prin Doppler + PTA/revizie este explicită.",
   "30% după ocluzie netratată este citată.",
   "Cifrele sunt inversate față de text.",
   "Doppler-ul e util tocmai pentru stenoze anastomotice și de grefon.",
   "Corecția crește, nu scade, patența."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 90% (asistată) cu 30% (după ocluzie), perechea de prognostic a urmăririi Doppler."
  },
  "textbookExpressions": [
   "90% la 2 ani",
   "doar 30%"
  ]
 },
 {
  "id": "vascular-adv-034",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Nivelul amputației, când revascularizarea nu e posibilă:",
  "options": [
   "Cu cât amputația e mai distală, cu atât potențialul de reabilitare e mai bun; distalele includ degete, transmetatarsiană și Syme (gleznă)",
   "Păstrarea genunchiului (transtibială) e importantă, proteza de coapsă cerând semnificativ mai multă energie",
   "Amputația de coapsă e indicată când ischemia e profundă, gangrena ajunge la genunchi, sau la imobilizații/risc chirurgical înalt",
   "Syme se rezervă ischemiei de coapsă, genunchiul fiind sacrificat de principiu",
   "Amputația de coapsă are potențial de reabilitare superior celei de degete"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cu cât amputația e mai distală, cu atât potențialul de reabilitare e mai bun; distalele includ degete, transmetatarsiană și Syme (gleznă) — Corect: Regula „mai distal, mai bun” și lista Syme sunt explicite.\n\nPăstrarea genunchiului (transtibială) e importantă, proteza de coapsă cerând semnificativ mai multă energie — Corect: Energia crescută a protezei de coapsă este citată.\n\nAmputația de coapsă e indicată când ischemia e profundă, gangrena ajunge la genunchi, sau la imobilizații/risc chirurgical înalt — Corect: Cele trei indicații de coapsă sunt descrise.\n\nSyme se rezervă ischemiei de coapsă, genunchiul fiind sacrificat de principiu — Incorect: Syme este distal (gleznă), nu de coapsă.\n\nAmputația de coapsă are potențial de reabilitare superior celei de degete — Incorect: Degetele, nu coapsa, maximizează reabilitarea.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 527, Amputație — Syme, gambă, coapsă (pagini PDF: 212).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    527
   ],
   "pdfPages": [
    212
   ],
   "section": "Amputație — Syme, gambă, coapsă"
  },
  "learningObjective": "Ierarhia distal → proximal (reabilitare) și costul energetic al protezei de coapsă, plus indicațiile amputației de coapsă.",
  "optionRationales": [
   "Regula „mai distal, mai bun” și lista Syme sunt explicite.",
   "Energia crescută a protezei de coapsă este citată.",
   "Cele trei indicații de coapsă sunt descrise.",
   "Syme este distal (gleznă), nu de coapsă.",
   "Degetele, nu coapsa, maximizează reabilitarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Sacrifică genunchiul de principiu și declară coapsa superioară degetelor, inversul energiei de deplasare."
  },
  "textbookExpressions": [
   "Syme",
   "proteză de coapsă"
  ]
 },
 {
  "id": "vascular-adv-035",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Epidemiologia TVP, potrivit capitolului:",
  "options": [
   "Aproximativ 900.000 de pacienți pe an dezvoltă TVP; dacă apare embolia pulmonară, mortalitatea în spital depășește 10%",
   "Circa 50% din episoadele de TVP dobândite în spital sunt asimptomatice",
   "TVP spitalicească e simptomatică în 95% din cazuri, mortalitatea prin EP fiind sub 1%",
   "Incidența anuală e sub 9.000, EP-ul neinfluențând mortalitatea",
   "Asimptomaticii spitalizați nu dezvoltă TVP, screening-ul fiind superfluu"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Aproximativ 900.000 de pacienți pe an dezvoltă TVP; dacă apare embolia pulmonară, mortalitatea în spital depășește 10% — Corect: 900.000 și >10% sunt explicite.\n\nCirca 50% din episoadele de TVP dobândite în spital sunt asimptomatice — Corect: 50% asimptomatice spitalicești sunt citate.\n\nTVP spitalicească e simptomatică în 95% din cazuri, mortalitatea prin EP fiind sub 1% — Incorect: 50%, nu 95%; mortalitatea nu e sub 1%.\n\nIncidența anuală e sub 9.000, EP-ul neinfluențând mortalitatea — Incorect: 900.000, nu 9.000.\n\nAsimptomaticii spitalizați nu dezvoltă TVP, screening-ul fiind superfluu — Incorect: Jumătate din TVP spitalicească e tăcută.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 536, TVP — 900.000 și mortalitate >10% (pagini PDF: 215).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    536
   ],
   "pdfPages": [
    215
   ],
   "section": "TVP — 900.000 și mortalitate >10%"
  },
  "learningObjective": "Reținerea volumului de 900.000/an, a mortalității >10% prin EP și a ponderii de 50% asimptomatice spitalicești.",
  "optionRationales": [
   "900.000 și >10% sunt explicite.",
   "50% asimptomatice spitalicești sunt citate.",
   "50%, nu 95%; mortalitatea nu e sub 1%.",
   "900.000, nu 9.000.",
   "Jumătate din TVP spitalicească e tăcută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Coboară 900.000 la 9.000 și mortalitatea prin EP sub 1%, două ordine de mărime din același paragraf."
  },
  "textbookExpressions": [
   "900.000 de pacienţi",
   "depăşeşte 10%"
  ]
 },
 {
  "id": "vascular-adv-036",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Tromboflebita superficială se tratează astfel:",
  "options": [
   "Antiinflamatoare nesteroidiene și comprese calde",
   "Heparine cu greutate moleculară mică timp de 4–6 săptămâni, pentru ameliorarea simptomelor",
   "Uneori, excizia trombului după incizia venei ameliorază imediat durerea, aspectul cosmetic și reduce pigmentarea",
   "Anticoagularea prelungită cu warfarină INR 4–5 e prima linie, compresele calde fiind evitate",
   "Excizia trombului agravează pigmentarea și se evită din considerente cosmetice"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Antiinflamatoare nesteroidiene și comprese calde — Corect: AINS și compresele calde sunt prima linie.\n\nHeparine cu greutate moleculară mică timp de 4–6 săptămâni, pentru ameliorarea simptomelor — Corect: HGMM 4–6 săptămâni este citată.\n\nUneori, excizia trombului după incizia venei ameliorază imediat durerea, aspectul cosmetic și reduce pigmentarea — Corect: Excizia pentru durere, cosmetic și pigmentare este descrisă.\n\nAnticoagularea prelungită cu warfarină INR 4–5 e prima linie, compresele calde fiind evitate — Incorect: Warfarina INR 4–5 nu e tratamentul flebitei superficiale.\n\nExcizia trombului agravează pigmentarea și se evită din considerente cosmetice — Incorect: Excizia reduce, nu agravează, pigmentarea.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 536, Tromboflebită superficială (pagini PDF: 215).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    536
   ],
   "pdfPages": [
    215
   ],
   "section": "Tromboflebită superficială"
  },
  "learningObjective": "Ierarhia AINS/comprese → HGMM 4–6 săptămâni → trombectomie superficială pentru durere și pigmentare.",
  "optionRationales": [
   "AINS și compresele calde sunt prima linie.",
   "HGMM 4–6 săptămâni este citată.",
   "Excizia pentru durere, cosmetic și pigmentare este descrisă.",
   "Warfarina INR 4–5 nu e tratamentul flebitei superficiale.",
   "Excizia reduce, nu agravează, pigmentarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește AINS/HGMM cu warfarină la INR 4–5 și inversează efectul cosmetic al trombectomiei."
  },
  "textbookExpressions": [
   "4-6 săptămâni",
   "comprese calde"
  ]
 },
 {
  "id": "vascular-adv-037",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Diagnosticul TVP de membru inferior:",
  "options": [
   "TVP de iliac stâng e mai frecventă (sindrom May-Thurner: compresia venei iliace stângi de bifurcația aortică și artera iliacă dreaptă)",
   "Semnul Homan (durere la flexia dorsală) e prezent în mai puțin de 50% din cazuri; acuratețea clinică izolată e de numai 50%",
   "Sensibilitatea Doppler e >95%; D-dimerii sunt sensibili dar nespecifici și, dacă pozitivi, trebuie urmați de ecografie",
   "Venografia e rară pentru diagnostic, dar frecventă înainte de tromboliză",
   "Homan pozitiv în 95% înlocuiește Doppler-ul, May-Thurner ținând de artera poplitee"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "TVP de iliac stâng e mai frecventă (sindrom May-Thurner: compresia venei iliace stângi de bifurcația aortică și artera iliacă dreaptă) — Corect: May-Thurner și predilecția iliacului stâng sunt explicite.\n\nSemnul Homan (durere la flexia dorsală) e prezent în mai puțin de 50% din cazuri; acuratețea clinică izolată e de numai 50% — Corect: Homan <50% și acuratețea clinică 50% sunt citate.\n\nSensibilitatea Doppler e >95%; D-dimerii sunt sensibili dar nespecifici și, dacă pozitivi, trebuie urmați de ecografie — Corect: Doppler >95% și D-dimerii sensibili/nespecifici sunt descrise.\n\nVenografia e rară pentru diagnostic, dar frecventă înainte de tromboliză — Corect: Rolul venografiei înainte de tromboliză este enunțat.\n\nHoman pozitiv în 95% înlocuiește Doppler-ul, May-Thurner ținând de artera poplitee — Incorect: Homan nu înlocuiește Doppler-ul; May-Thurner e iliac, nu popliteu.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 537, TVP — May-Thurner, Homan, Doppler (pagini PDF: 216).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    537
   ],
   "pdfPages": [
    216
   ],
   "section": "TVP — May-Thurner, Homan, Doppler"
  },
  "learningObjective": "Aplicarea predilecției stângi (May-Thurner), a sensibilității Homan <50% și a Doppler >95%, cu D-dimerii ca screening.",
  "optionRationales": [
   "May-Thurner și predilecția iliacului stâng sunt explicite.",
   "Homan <50% și acuratețea clinică 50% sunt citate.",
   "Doppler >95% și D-dimerii sensibili/nespecifici sunt descrise.",
   "Rolul venografiei înainte de tromboliză este enunțat.",
   "Homan nu înlocuiește Doppler-ul; May-Thurner e iliac, nu popliteu."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Ridică Homan la 95% ca substitut al Doppler-ului și mută May-Thurner pe popliteu."
  },
  "textbookExpressions": [
   "May-Thurner",
   ">95%"
  ]
 },
 {
  "id": "vascular-adv-038",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Evaluarea hipercoagulabilității în TVP spontană (idiopatică) include:",
  "options": [
   "Proteina C, proteina S, antitrombina III, factorul V Leiden, mutația genei protrombinei și anticorpii anticardiolipină",
   "Doar D-dimerii, restul testelor fiind inutile în TVP idiopatică",
   "Numai grupul sanguin ABO, fără factori ereditari",
   "Antitrombina III se dozează doar după 6 luni de warfarină, celelalte teste fiind abandonate",
   "Factorul V Leiden exclude restul panelului, mutația protrombinei neexistând"
  ],
  "correct": [
   0
  ],
  "explanation": "Proteina C, proteina S, antitrombina III, factorul V Leiden, mutația genei protrombinei și anticorpii anticardiolipină — Corect: Cele șase categorii sunt enumerate explicit.\n\nDoar D-dimerii, restul testelor fiind inutile în TVP idiopatică — Incorect: D-dimerii sunt screening de TVP, nu substitut al panelului de trombofilie.\n\nNumai grupul sanguin ABO, fără factori ereditari — Incorect: ABO nu înlocuiește panelul.\n\nAntitrombina III se dozează doar după 6 luni de warfarină, celelalte teste fiind abandonate — Incorect: Panelul se cere la idiopatică, nu după 6 luni de warfarină ca unică fereastră.\n\nFactorul V Leiden exclude restul panelului, mutația protrombinei neexistând — Incorect: FV Leiden nu anulează celelalte teste.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 537, Hipercoagulabilitate — Panelul idiopatic (pagini PDF: 216).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    537
   ],
   "pdfPages": [
    216
   ],
   "section": "Hipercoagulabilitate — Panelul idiopatic"
  },
  "learningObjective": "Recunoașterea panelului complet (C, S, ATIII, FV Leiden, protrombină, anticardiolipină) în TVP spontană.",
  "optionRationales": [
   "Cele șase categorii sunt enumerate explicit.",
   "D-dimerii sunt screening de TVP, nu substitut al panelului de trombofilie.",
   "ABO nu înlocuiește panelul.",
   "Panelul se cere la idiopatică, nu după 6 luni de warfarină ca unică fereastră.",
   "FV Leiden nu anulează celelalte teste."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce panelul de trombofilie la D-dimeri, deși textul listează șase determinări la TVP idiopatică."
  },
  "textbookExpressions": [
   "proteină C",
   "factor V Leiden"
  ]
 },
 {
  "id": "vascular-adv-039",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Anticoagularea clasică a TVP cu heparină și warfarină:",
  "options": [
   "După heparinizare adecvată se începe warfarina, cu INR țintă 2–3",
   "Warfarina inhibă factorii II, VII, IX, X și proteinele C și S; timpii de înjumătățire ai C/S fiind mai scurți, există o fereastră hipercoagulabilă",
   "Necroza cutanată warfarinică e o complicație rară dar catastrofală a acestei ferestre; de aceea heparina se menține la începutul warfarinei",
   "INR-ul țintă e 5–6, heparina oprindu-se înaintea primei doze de warfarină",
   "Proteinele C și S au timp de înjumătățire mai lung decât II/VII/IX/X, fereastra hipercoagulabilă lipsind"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "După heparinizare adecvată se începe warfarina, cu INR țintă 2–3 — Corect: Succesiunea heparină → warfarină și INR 2–3 sunt explicite.\n\nWarfarina inhibă factorii II, VII, IX, X și proteinele C și S; timpii de înjumătățire ai C/S fiind mai scurți, există o fereastră hipercoagulabilă — Corect: Inhibarea dublă și timpii mai scurți ai C/S sunt citați.\n\nNecroza cutanată warfarinică e o complicație rară dar catastrofală a acestei ferestre; de aceea heparina se menține la începutul warfarinei — Corect: Necroza cutanată și menținerea heparinei sunt descrise.\n\nINR-ul țintă e 5–6, heparina oprindu-se înaintea primei doze de warfarină — Incorect: Ținta nu e 5–6; heparina nu se oprește înainte.\n\nProteinele C și S au timp de înjumătățire mai lung decât II/VII/IX/X, fereastra hipercoagulabilă lipsind — Incorect: C/S au timpi mai scurți, nu mai lungi.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 538, Warfarină — INR 2–3 și necroza cutanată (pagini PDF: 217).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    538
   ],
   "pdfPages": [
    217
   ],
   "section": "Warfarină — INR 2–3 și necroza cutanată"
  },
  "learningObjective": "Aplicarea INR 2–3 și a overlap-ului de heparină din cauza ferestrei hipercoagulabile (C/S versus II/VII/IX/X).",
  "optionRationales": [
   "Succesiunea heparină → warfarină și INR 2–3 sunt explicite.",
   "Inhibarea dublă și timpii mai scurți ai C/S sunt citați.",
   "Necroza cutanată și menținerea heparinei sunt descrise.",
   "Ținta nu e 5–6; heparina nu se oprește înainte.",
   "C/S au timpi mai scurți, nu mai lungi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oprește heparina înaintea warfarinei și urcă INR-ul la 5–6, tocmai scenariul necrozei cutanate."
  },
  "textbookExpressions": [
   "INR între 2 şi 3",
   "Necroza cutanată warfarinică"
  ]
 },
 {
  "id": "vascular-adv-040",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Indicațiile clare de tromboliză venoasă, plus criteriile ACCP pentru TVP iliofemurală, sunt:",
  "options": [
   "Tromboza venei subclavii, a venei renale și ocluzia acută trombotică a venei mezenterice superioare; ACCP: TVP iliofemurală, simptome <14 zile, stare bună, speranță de viață >1 an și risc scăzut de sângerare",
   "Orice TVP surală de peste 6 luni, fără criterii de risc hemoragic",
   "Doar TVP tibiale asimptomatice, ACCP contraindicând iliofemurala",
   "Speranța de viață <3 luni e criteriul principal ACCP",
   "Subclavia și vena renală contraindică tromboliza, rezervată claudicației Framingham"
  ],
  "correct": [
   0
  ],
  "explanation": "Tromboza venei subclavii, a venei renale și ocluzia acută trombotică a venei mezenterice superioare; ACCP: TVP iliofemurală, simptome <14 zile, stare bună, speranță de viață >1 an și risc scăzut de sângerare — Corect: Cele trei indicații clare și criteriile ACCP sunt explicite.\n\nOrice TVP surală de peste 6 luni, fără criterii de risc hemoragic — Incorect: TVP surală cronică nu e indicația citată.\n\nDoar TVP tibiale asimptomatice, ACCP contraindicând iliofemurala — Incorect: ACCP vizează tocmai iliofemurala simptomatică recentă.\n\nSperanța de viață <3 luni e criteriul principal ACCP — Incorect: Speranța >1 an, nu <3 luni.\n\nSubclavia și vena renală contraindică tromboliza, rezervată claudicației Framingham — Incorect: Subclavia și renală sunt indicații clare, nu contraindicații.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 538, Tromboliză — Subclavie, renală, AMS, ACCP (pagini PDF: 217).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    538
   ],
   "pdfPages": [
    217
   ],
   "section": "Tromboliză — Subclavie, renală, AMS, ACCP"
  },
  "learningObjective": "Recunoașterea triadului subclavie/renală/AMS și a ferestrei ACCP <14 zile / >1 an.",
  "optionRationales": [
   "Cele trei indicații clare și criteriile ACCP sunt explicite.",
   "TVP surală cronică nu e indicația citată.",
   "ACCP vizează tocmai iliofemurala simptomatică recentă.",
   "Speranța >1 an, nu <3 luni.",
   "Subclavia și renală sunt indicații clare, nu contraindicații."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută tromboliza de pe subclavie/AMS pe TVP surală cronică și inversează fereastra ACCP de 14 zile / 1 an."
  },
  "textbookExpressions": [
   "< 14 zile",
   "speranţă de viaţă> I an"
  ]
 },
 {
  "id": "vascular-adv-041",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Phlegmasia și trombectomia în TVP iliofemurală masivă:",
  "options": [
   "Chiar în tromboza iliofemurală completă cu edem masiv (phlegmasia cerulea dolens sau phlegmasia alba dolens), dispozitivele de trombectomie mecanică sau tromboliza sunt modalitățile primare",
   "Trombectomia chirurgicală e rară, rezervată de obicei ischemiei care pune în pericol membrul",
   "Trombectomia mecanică are mai puține contraindicații, agentul trombolitic fiind izolat în vena trombozată",
   "Chirurgia deschisă e prima linie în orice phlegmasia, tromboliza fiind abandonată",
   "Phlegmasia se tratează doar cu ciorapi elastici, fără recanalizare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Chiar în tromboza iliofemurală completă cu edem masiv (phlegmasia cerulea dolens sau phlegmasia alba dolens), dispozitivele de trombectomie mecanică sau tromboliza sunt modalitățile primare — Corect: Phlegmasia cerulea/alba și întâietatea mecanică/trombolitică sunt explicite.\n\nTrombectomia chirurgicală e rară, rezervată de obicei ischemiei care pune în pericol membrul — Corect: Raritatea chirurgiei și rezerva pentru ischemia de membru sunt citate.\n\nTrombectomia mecanică are mai puține contraindicații, agentul trombolitic fiind izolat în vena trombozată — Corect: Izolarea agentului și contraindicațiile mai puține sunt descrise.\n\nChirurgia deschisă e prima linie în orice phlegmasia, tromboliza fiind abandonată — Incorect: Chirurgia nu e prima linie.\n\nPhlegmasia se tratează doar cu ciorapi elastici, fără recanalizare — Incorect: Ciorapii nu recanalizează iliofemurala oclusă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 538, Phlegmasia — Mecanică versus chirurgicală (pagini PDF: 217).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    538
   ],
   "pdfPages": [
    217
   ],
   "section": "Phlegmasia — Mecanică versus chirurgicală"
  },
  "learningObjective": "Poziționarea trombectomiei mecanice/trombolizei ca primă linie chiar în phlegmasia, chirurgia fiind rezervată ischemiei de membru.",
  "optionRationales": [
   "Phlegmasia cerulea/alba și întâietatea mecanică/trombolitică sunt explicite.",
   "Raritatea chirurgiei și rezerva pentru ischemia de membru sunt citate.",
   "Izolarea agentului și contraindicațiile mai puține sunt descrise.",
   "Chirurgia nu e prima linie.",
   "Ciorapii nu recanalizează iliofemurala oclusă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune chirurgia deschisă înaintea trombectomiei mecanice în phlegmasia, inversul ierarhiei din paragraf."
  },
  "textbookExpressions": [
   "phlegmasia cerulea dolens",
   "trombectomie mecanică"
  ]
 },
 {
  "id": "vascular-adv-042",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Traumatismele vasculare se caracterizează prin:",
  "options": [
   "Mecanisme: penetrant (înjunghiere, împușcare), contuzie (cel mai frecvent prin fractura oaselor lungi) sau iatrogen; în accidente, decelerare/accelerare",
   "Hemoragia poate fi ocultă (părți moi, intracavitar); fistule AV cu triluri/sufluri; deficite neurologice prin hematom; ischemie de organ (ex. AVC carotidian)",
   "Pulsul distal diminuat sau absent apare doar dacă trauma restricționează fluxul; flapul intimal poate tromboza doar după ore sau zile",
   "Diagnosticul și tratamentul imediat evită șocul hipovolemic; complicații tardive: pseudoanevrisme, fistule AV cu IC prin suprasolicitare, tromboză pe leziuni intimale",
   "Pulsul distal prezent exclude trauma vasculară, flapul intimal trombozând doar intraoperator"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Mecanisme: penetrant (înjunghiere, împușcare), contuzie (cel mai frecvent prin fractura oaselor lungi) sau iatrogen; în accidente, decelerare/accelerare — Corect: Cele trei mecanisme și decelerația sunt explicite.\n\nHemoragia poate fi ocultă (părți moi, intracavitar); fistule AV cu triluri/sufluri; deficite neurologice prin hematom; ischemie de organ (ex. AVC carotidian) — Corect: Hemoragia ocultă, fistulele și ischemia de organ sunt citate.\n\nPulsul distal diminuat sau absent apare doar dacă trauma restricționează fluxul; flapul intimal poate tromboza doar după ore sau zile — Corect: Limitarea semnului de puls absent și latența ore–zile sunt descrise.\n\nDiagnosticul și tratamentul imediat evită șocul hipovolemic; complicații tardive: pseudoanevrisme, fistule AV cu IC prin suprasolicitare, tromboză pe leziuni intimale — Corect: Complicațiile tardive sunt listate.\n\nPulsul distal prezent exclude trauma vasculară, flapul intimal trombozând doar intraoperator — Incorect: Pulsul prezent nu exclude leziunea; tromboza poate fi tardivă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 541, Traumatism vascular — Flap intimal tardiv (pagini PDF: 220).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    541
   ],
   "pdfPages": [
    220
   ],
   "section": "Traumatism vascular — Flap intimal tardiv"
  },
  "learningObjective": "Recunoașterea pulsațiilor păstrate și a trombozei tardive pe flap intimal, plus mecanismele penetrant/contuzie/decelerație.",
  "optionRationales": [
   "Cele trei mecanisme și decelerația sunt explicite.",
   "Hemoragia ocultă, fistulele și ischemia de organ sunt citate.",
   "Limitarea semnului de puls absent și latența ore–zile sunt descrise.",
   "Complicațiile tardive sunt listate.",
   "Pulsul prezent nu exclude leziunea; tromboza poate fi tardivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează pulsul distal prezent ca excludere a traumei, deși flapul intimal poate tromboza după ore sau zile."
  },
  "textbookExpressions": [
   "flapul intimai",
   "ore sau zile"
  ]
 },
 {
  "id": "vascular-adv-043",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Când se suspicionează traumatism vascular de extremitate:",
  "options": [
   "Dacă IGB este 1, cu extremitate viabilă, diagnosticul de traumatism vascular e improbabil; vasele adiacente se examinează prin Doppler și ecografie de părți moi",
   "Dacă membrul e ischemic, e indicată arteriografia cu contrast",
   "IGB 1 cu membru viabil impune arteriografie de urgență, Doppler-ul fiind superfluu",
   "Arteriografia e contraindicată în ischemia de membru, IGB 1 confirmând leziunea",
   "Ecografia de părți moi e evitată când IGB e 1"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Dacă IGB este 1, cu extremitate viabilă, diagnosticul de traumatism vascular e improbabil; vasele adiacente se examinează prin Doppler și ecografie de părți moi — Corect: IGB 1 și viabilitatea ca argument împotriva traumei semnificative sunt explicite.\n\nDacă membrul e ischemic, e indicată arteriografia cu contrast — Corect: Arteriografia în ischemia de membru este citată.\n\nIGB 1 cu membru viabil impune arteriografie de urgență, Doppler-ul fiind superfluu — Incorect: IGB 1 nu impune arteriografie de urgență.\n\nArteriografia e contraindicată în ischemia de membru, IGB 1 confirmând leziunea — Incorect: Direcția e inversă: arteriografia e pentru ischemic, nu contraindicată.\n\nEcografia de părți moi e evitată când IGB e 1 — Incorect: Ecografia e tocmai următorul pas la IGB 1.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 541, Traumă vasculară — IGB 1 versus arteriografie (pagini PDF: 220).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    541
   ],
   "pdfPages": [
    220
   ],
   "section": "Traumă vasculară — IGB 1 versus arteriografie"
  },
  "learningObjective": "Contrastarea IGB 1 + membru viabil (traumă improbabilă, Doppler) cu ischemia (arteriografie cu contrast).",
  "optionRationales": [
   "IGB 1 și viabilitatea ca argument împotriva traumei semnificative sunt explicite.",
   "Arteriografia în ischemia de membru este citată.",
   "IGB 1 nu impune arteriografie de urgență.",
   "Direcția e inversă: arteriografia e pentru ischemic, nu contraindicată.",
   "Ecografia e tocmai următorul pas la IGB 1."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Impune arteriografie la IGB 1 cu membru viabil, inversul triajului din ultimele rânduri ale capitolului."
  },
  "textbookExpressions": [
   "indice gleznă-braţ",
   "extremitate viabilă"
  ]
 },
 {
  "id": "vascular-adv-044",
  "topicId": "vascular",
  "type": "CS",
  "stem": "La pacientul observat pe banda de alergare, IGB:",
  "options": [
   "Scade la cei cu claudicație atunci când apar simptomele, în timp ce alte cauze de durere de membru nu modifică măsurătorile de presiune",
   "Rămâne neschimbat la claudicanți, scăderea diagnosticând artroza de șold",
   "Crește la claudicație, stenoza diluând gradientul",
   "Nu se măsoară la efort, banda fiind contraindicată în BAP",
   "Scade doar în durerea venoasă maleolară, nu în claudicație"
  ],
  "correct": [
   0
  ],
  "explanation": "Scade la cei cu claudicație atunci când apar simptomele, în timp ce alte cauze de durere de membru nu modifică măsurătorile de presiune — Corect: Scăderea IGB la apariția simptomelor versus absența modificării în alte cauze este explicită.\n\nRămâne neschimbat la claudicanți, scăderea diagnosticând artroza de șold — Incorect: Neschimbarea ar pune diagnosticul de cauză nevasculară, nu de claudicație.\n\nCrește la claudicație, stenoza diluând gradientul — Incorect: IGB scade, nu crește, la stenoză simptomatică.\n\nNu se măsoară la efort, banda fiind contraindicată în BAP — Incorect: Banda e tocmai testul descris.\n\nScade doar în durerea venoasă maleolară, nu în claudicație — Incorect: Sediul maleolar venei nu definește răspunsul IGB la efort.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 523, IGB la efort — Banda de alergare (pagini PDF: 208).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    523
   ],
   "pdfPages": [
    208
   ],
   "section": "IGB la efort — Banda de alergare"
  },
  "learningObjective": "Recunoașterea scăderii IGB la efort ca discriminator al claudicației față de alte dureri de membru.",
  "optionRationales": [
   "Scăderea IGB la apariția simptomelor versus absența modificării în alte cauze este explicită.",
   "Neschimbarea ar pune diagnosticul de cauză nevasculară, nu de claudicație.",
   "IGB scade, nu crește, la stenoză simptomatică.",
   "Banda e tocmai testul descris.",
   "Sediul maleolar venei nu definește răspunsul IGB la efort."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Declară IGB neschimbat la efort în claudicație, deși textul îl folosește tocmai ca discriminator."
  },
  "textbookExpressions": [
   "bandă de alergare",
   "IGB va scădea"
  ]
 },
 {
  "id": "vascular-adv-045",
  "topicId": "vascular",
  "type": "CM",
  "stem": "PTA poate fi complicată acut prin:",
  "options": [
   "Ocluzie acută, de obicei prin ruptură de placă sau disecție intimală; restenoză prin recul elastic; pierderea continuității vasului — evenimente care cer în general stentare sau, mai rar, chirurgie imediată",
   "Tehnica s-a extins la stenoze complexe, segmente lungi și ocluzii totale, odată cu profilele reduse și baloanele mai lungi",
   "Ocluzia acută e excepțională, stentarea fiind inutilă după disecție",
   "Reculul elastic protejează de restenoză",
   "Ocluziile totale rămân inabordabile endovascular, indiferent de profilul dispozitivului"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Ocluzie acută, de obicei prin ruptură de placă sau disecție intimală; restenoză prin recul elastic; pierderea continuității vasului — evenimente care cer în general stentare sau, mai rar, chirurgie imediată — Corect: Cele trei evenimente și conduita (stent ± chirurgie) sunt explicite.\n\nTehnica s-a extins la stenoze complexe, segmente lungi și ocluzii totale, odată cu profilele reduse și baloanele mai lungi — Corect: Extinderea la leziuni lungi și ocluzii totale este citată.\n\nOcluzia acută e excepțională, stentarea fiind inutilă după disecție — Incorect: Ocluzia acută e complicația descrisă, nu o excepție.\n\nReculul elastic protejează de restenoză — Incorect: Reculul cauzează restenoză, nu protejează.\n\nOcluziile totale rămân inabordabile endovascular, indiferent de profilul dispozitivului — Incorect: Ocluziile totale pot fi abordate, inclusiv subintimal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 524, PTA — Ocluzie acută și recul elastic (pagini PDF: 209).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    524
   ],
   "pdfPages": [
    209
   ],
   "section": "PTA — Ocluzie acută și recul elastic"
  },
  "learningObjective": "Recunoașterea triadului ocluzie acută (ruptură/disecție) / recul elastic / pierdere de continuitate ca indicații de stent.",
  "optionRationales": [
   "Cele trei evenimente și conduita (stent ± chirurgie) sunt explicite.",
   "Extinderea la leziuni lungi și ocluzii totale este citată.",
   "Ocluzia acută e complicația descrisă, nu o excepție.",
   "Reculul cauzează restenoză, nu protejează.",
   "Ocluziile totale pot fi abordate, inclusiv subintimal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează ocluzia acută post-PTA și tratează reculul elastic ca protector, inversul indicației de stent."
  },
  "textbookExpressions": [
   "ocluzia acută",
   "reculul elastic"
  ]
 },
 {
  "id": "vascular-adv-046",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Anticoagulantele orale noi, față de warfarină, se caracterizează prin:",
  "options": [
   "Permit anticoagulare imediată, fără heparinizare prealabilă",
   "Nu necesită monitorizare, având biodisponibilitate stabilă; riscuri similare de sângerare ca warfarina, dar în prezent doar unul are antidot",
   "Reversia rapidă (traumă, chirurgie de urgență) poate cere plasmă proaspătă înghețată sau concentrate de complex protrombinic",
   "Toate au antidot specific, heparina rămânând necesară înaintea oricărui oral",
   "Biodisponibilitatea instabilă impune INR săptămânal, identic warfarinei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Permit anticoagulare imediată, fără heparinizare prealabilă — Corect: Absența heparinizării prealabile este explicită.\n\nNu necesită monitorizare, având biodisponibilitate stabilă; riscuri similare de sângerare ca warfarina, dar în prezent doar unul are antidot — Corect: Lipsa monitorizării, sângerarea similară și unicul antidot sunt citate.\n\nReversia rapidă (traumă, chirurgie de urgență) poate cere plasmă proaspătă înghețată sau concentrate de complex protrombinic — Corect: PPC și concentratele de complex protrombinic sunt descrise pentru reversie.\n\nToate au antidot specific, heparina rămânând necesară înaintea oricărui oral — Incorect: Doar unul are antidot; heparina nu e cerută înainte.\n\nBiodisponibilitatea instabilă impune INR săptămânal, identic warfarinei — Incorect: Avantajul e tocmai biodisponibilitatea stabilă, fără INR.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 538, DOAC — Fără punte de heparină, un antidot (pagini PDF: 217).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    538
   ],
   "pdfPages": [
    217
   ],
   "section": "DOAC — Fără punte de heparină, un antidot"
  },
  "learningObjective": "Contrastarea debutului imediat fără heparină și a absenței monitorizării cu limita unui singur antidot.",
  "optionRationales": [
   "Absența heparinizării prealabile este explicită.",
   "Lipsa monitorizării, sângerarea similară și unicul antidot sunt citate.",
   "PPC și concentratele de complex protrombinic sunt descrise pentru reversie.",
   "Doar unul are antidot; heparina nu e cerută înainte.",
   "Avantajul e tocmai biodisponibilitatea stabilă, fără INR."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie tuturor DOAC-urilor antidot și reintroduce heparina/INR-ul, inversul avantajelor listate."
  },
  "textbookExpressions": [
   "nu necesită heparinizare",
   "doar unul dintre aceste medicamente"
  ]
 },
 {
  "id": "vascular-adv-047",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Aorta cu „lumen dublu” (double-barreled) din disecție se caracterizează prin:",
  "options": [
   "Lumenul fals reprezintă 50% sau mai mult din circumferința aortei",
   "Lumenul fals ocupă sub 10% din circumferință, fără impact hemodinamic",
   "Double-barreled descrie doar anevrismul popliteu trombozat",
   "Nu există lumen fals, dilacerarea oprindu-se în intimă",
   "Circumferința falsă e limitată la 5%, ramurile viscerale fiind ocrotite"
  ],
  "correct": [
   0
  ],
  "explanation": "Lumenul fals reprezintă 50% sau mai mult din circumferința aortei — Corect: Textul definește lumenul fals ca 50% sau mai mult din circumferință.\n\nLumenul fals ocupă sub 10% din circumferință, fără impact hemodinamic — Incorect: Pragul citat este ≥50%, nu sub 10%.\n\nDouble-barreled descrie doar anevrismul popliteu trombozat — Incorect: Double-barreled ține de disecția aortică, nu de popliteu.\n\nNu există lumen fals, dilacerarea oprindu-se în intimă — Incorect: Dilacerarea trece din intimă în medie, creând lumen fals.\n\nCircumferința falsă e limitată la 5%, ramurile viscerale fiind ocrotite — Incorect: Ramurile critice pot fi compromise tocmai de acest lumen fals.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 520, Disecție — Double-barreled aorta (pagini PDF: 205).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    520
   ],
   "pdfPages": [
    205
   ],
   "section": "Disecție — Double-barreled aorta"
  },
  "learningObjective": "Recunoașterea lumenului fals ≥50% din circumferință ca geometrie a aortei cu lumen dublu.",
  "optionRationales": [
   "Textul definește lumenul fals ca 50% sau mai mult din circumferință.",
   "Pragul citat este ≥50%, nu sub 10%.",
   "Double-barreled ține de disecția aortică, nu de popliteu.",
   "Dilacerarea trece din intimă în medie, creând lumen fals.",
   "Ramurile critice pot fi compromise tocmai de acest lumen fals."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Coboară lumenul fals sub 10%, deși paragraful îl plasează la ≥50% din circumferință."
  },
  "textbookExpressions": [
   "double-barreled aorta",
   "50% sau mai mult"
  ]
 },
 {
  "id": "vascular-adv-048",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la etiologia și propagarea disecției de aortă:",
  "options": [
   "Sindroamele Marfan și Ehlers-Danlos predispun la degenerarea mediei și ruptură",
   "Dilacerarea murală urmează hipertensiunii, aterosclerozei sau leziunii traumatice",
   "Disecția se poate propaga proximal sau distal, ca o coloană sanguină pulsatilă prin medie",
   "Marfan protejează media, disecția ținând doar de venele safene",
   "Propagarea e imposibilă distal, lumenul fals oprindu-se la valva aortică"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sindroamele Marfan și Ehlers-Danlos predispun la degenerarea mediei și ruptură — Corect: Predispoziția Marfan și Ehlers-Danlos este explicită.\n\nDilacerarea murală urmează hipertensiunii, aterosclerozei sau leziunii traumatice — Corect: HTA, ateroscleroza și trauma sunt citate ca leziuni murale.\n\nDisecția se poate propaga proximal sau distal, ca o coloană sanguină pulsatilă prin medie — Corect: Propagarea proximală sau distală prin medie este descrisă.\n\nMarfan protejează media, disecția ținând doar de venele safene — Incorect: Marfan predispun, nu protejează; sediul e aortic, nu safenian.\n\nPropagarea e imposibilă distal, lumenul fals oprindu-se la valva aortică — Incorect: Textul admite atât propagarea proximală, cât și pe cea distală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 520, Disecție — Marfan, Ehlers-Danlos, propagare (pagini PDF: 205).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    520
   ],
   "pdfPages": [
    205
   ],
   "section": "Disecție — Marfan, Ehlers-Danlos, propagare"
  },
  "learningObjective": "Legarea fragilizării mediei (Marfan/ED, HTA, aterom, traumă) de propagarea proximală sau distală prin medie.",
  "optionRationales": [
   "Predispoziția Marfan și Ehlers-Danlos este explicită.",
   "HTA, ateroscleroza și trauma sunt citate ca leziuni murale.",
   "Propagarea proximală sau distală prin medie este descrisă.",
   "Marfan predispun, nu protejează; sediul e aortic, nu safenian.",
   "Textul admite atât propagarea proximală, cât și pe cea distală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează Marfan din factor de ruptură în protecție și blochează propagarea distală."
  },
  "textbookExpressions": [
   "Marfan şi Ehlers-Danlos",
   "propaga"
  ]
 },
 {
  "id": "vascular-adv-049",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Complicațiile disecției de aortă ascendentă, după direcția de propagare, sunt:",
  "options": [
   "Disecția retrogradă spre valva aortică poate obstrua originile coronarelor, cu ischemie miocardică acută",
   "Extensia la cuspele aortice produce insuficiență valvulară aortică acută secundară",
   "Extensia proximală spre rădăcină, cu ruptură liberă în sacul pericardic, instalează tamponada cardiacă",
   "Extensia spre vasele brahiocefalice poate determina accident vascular",
   "Disecția ascendentă se oprește la istm, coronarele și pericardul fiind ocrotite"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Disecția retrogradă spre valva aortică poate obstrua originile coronarelor, cu ischemie miocardică acută — Corect: Obstrucția ostiilor coronare și ischemia acută sunt explicite.\n\nExtensia la cuspele aortice produce insuficiență valvulară aortică acută secundară — Corect: Insuficiența aortică prin extensia la cuspe este citată.\n\nExtensia proximală spre rădăcină, cu ruptură liberă în sacul pericardic, instalează tamponada cardiacă — Corect: Tamponada prin ruptură pericardică este complicația majoră descrisă.\n\nExtensia spre vasele brahiocefalice poate determina accident vascular — Corect: Extensia brahiocefalică cu AVC este enunțată.\n\nDisecția ascendentă se oprește la istm, coronarele și pericardul fiind ocrotite — Incorect: Ascendența interesează tocmai rădăcina, coronarele și pericardul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 520, Disecție — Coronare, IA, tamponadă, AVC (pagini PDF: 205).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    520
   ],
   "pdfPages": [
    205
   ],
   "section": "Disecție — Coronare, IA, tamponadă, AVC"
  },
  "learningObjective": "Maparea celor patru complicații retrograde/anterograde ale disecției ascendente.",
  "optionRationales": [
   "Obstrucția ostiilor coronare și ischemia acută sunt explicite.",
   "Insuficiența aortică prin extensia la cuspe este citată.",
   "Tamponada prin ruptură pericardică este complicația majoră descrisă.",
   "Extensia brahiocefalică cu AVC este enunțată.",
   "Ascendența interesează tocmai rădăcina, coronarele și pericardul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Declară rădăcina, coronarele și pericardul ocrotite, inversul listei de complicații ale tipului A."
  },
  "textbookExpressions": [
   "tamponadei cardiace",
   "arterelor coronare"
  ]
 },
 {
  "id": "vascular-adv-050",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Indicația majoră de chirurgie reparatorie electivă în disecția de tip B este:",
  "options": [
   "Lărgirea disecției cronice de aortă cu anevrism asociat",
   "Orice tip B în primele 6 ore, identic urgenței de tip A",
   "Hipertensiunea controlată medical, fără dilatare anevrismală",
   "Disecția scurtă, sub 2 cm, fără risc de ruptură",
   "Tipul B necomplicat, ca substituție de urgență a controlului dp/dt"
  ],
  "correct": [
   0
  ],
  "explanation": "Lărgirea disecției cronice de aortă cu anevrism asociat — Corect: Textul numește lărgirea cronică cu anevrism indicația majoră electivă.\n\nOrice tip B în primele 6 ore, identic urgenței de tip A — Incorect: Urgența de 6 ore definește tipul A, nu B-ul necomplicat.\n\nHipertensiunea controlată medical, fără dilatare anevrismală — Incorect: Controlul tensional fără anevrism ține de tratamentul medical.\n\nDisecția scurtă, sub 2 cm, fără risc de ruptură — Incorect: Indicația electivă este dilatarea anevrismală cu risc de ruptură, nu leziunea scurtă.\n\nTipul B necomplicat, ca substituție de urgență a controlului dp/dt — Incorect: dp/dt rămâne strategia medicală a tipului B necomplicat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 520, Disecție tip B — Chirurgie electivă (pagini PDF: 205).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    520
   ],
   "pdfPages": [
    205
   ],
   "section": "Disecție tip B — Chirurgie electivă"
  },
  "learningObjective": "Recunoașterea lărgirii cronice cu anevrism ca indicație majoră electivă, distinctă de urgența ischemiei/rupturii.",
  "optionRationales": [
   "Textul numește lărgirea cronică cu anevrism indicația majoră electivă.",
   "Urgența de 6 ore definește tipul A, nu B-ul necomplicat.",
   "Controlul tensional fără anevrism ține de tratamentul medical.",
   "Indicația electivă este dilatarea anevrismală cu risc de ruptură, nu leziunea scurtă.",
   "dp/dt rămâne strategia medicală a tipului B necomplicat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută chirurgia electivă de tip B pe urgența de 6 ore a tipului A, deși paragraful o rezervă anevrismului cronic."
  },
  "textbookExpressions": [
   "disecţiei cronice",
   "chirurgie reparatorie electivă"
  ]
 },
 {
  "id": "vascular-adv-051",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Conform Figurii 26-10, reducerea fluxului arterial apare la scăderea diametrului cu:",
  "options": [
   "60–70%",
   "10%, orice placă prăbușind debitul",
   "20% arie, independent de diametru",
   "100%, stenozele parțiale neinfluențând fluxul",
   "5%, înaintea oricărei turbulențe"
  ],
  "correct": [
   0
  ],
  "explanation": "60–70% — Corect: Legenda figurii plasează reducerea fluxului la 60–70% scădere de diametru.\n\n10%, orice placă prăbușind debitul — Incorect: 10% nu este pragul citat.\n\n20% arie, independent de diametru — Incorect: Figura vorbește de diametru, nu de 20% arie.\n\n100%, stenozele parțiale neinfluențând fluxul — Incorect: Stenozele parțiale de 60–70% reduc deja fluxul.\n\n5%, înaintea oricărei turbulențe — Incorect: Turbulența precede placa; 5% nu e pragul de flux.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 521, Figura 26-10 — Prag 60–70% (pagini PDF: 206).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    521
   ],
   "pdfPages": [
    206
   ],
   "section": "Figura 26-10 — Prag 60–70%"
  },
  "learningObjective": "Aplicarea pragului figurii (reducerea fluxului la 60–70% scădere de diametru), distinct de remodelarea Glagov.",
  "optionRationales": [
   "Legenda figurii plasează reducerea fluxului la 60–70% scădere de diametru.",
   "10% nu este pragul citat.",
   "Figura vorbește de diametru, nu de 20% arie.",
   "Stenozele parțiale de 60–70% reduc deja fluxul.",
   "Turbulența precede placa; 5% nu e pragul de flux."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 60–70% cu praguri de 5–20%, pe o legendă de figură ușor de confudat cu 50%/75% Poiseuille."
  },
  "textbookExpressions": [
   "60-70%",
   "reducerea fluxului"
  ]
 },
 {
  "id": "vascular-adv-052",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Claudicația intermitentă, ca mecanism și definiție, se caracterizează prin:",
  "options": [
   "Termenul vine din latinescul claudatio (a șchiopăta); durerea e precipitată de efort și ameliorată de repaus",
   "Mecanismul este conversia la metabolism anaerob și acidoză metabolică, ocluziile împiedicând creșterea de flux cerută de mușchi",
   "Articulațiile și piciorul sunt scutite, masa musculară fiind redusă",
   "Durerea e prezentă în repaus, identic crampelor nocturne de gambă",
   "Piciorul și articulațiile sunt sediul tipic, masa musculară fiind maximă acolo"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Termenul vine din latinescul claudatio (a șchiopăta); durerea e precipitată de efort și ameliorată de repaus — Corect: Etimologia claudatio și precipitarea de efort sunt explicite.\n\nMecanismul este conversia la metabolism anaerob și acidoză metabolică, ocluziile împiedicând creșterea de flux cerută de mușchi — Corect: Conversia anaerobă cu acidoză este mecanismul citat.\n\nArticulațiile și piciorul sunt scutite, masa musculară fiind redusă — Corect: Scutirea articulațiilor și a piciorului este descrisă.\n\nDurerea e prezentă în repaus, identic crampelor nocturne de gambă — Incorect: Prezența în repaus definește ischemia avansată sau crampele, nu claudicația.\n\nPiciorul și articulațiile sunt sediul tipic, masa musculară fiind maximă acolo — Incorect: Masa musculară redusă scutește piciorul, nu îl face sediu.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 521, Claudicație — claudatio și acidoză (pagini PDF: 206).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    521
   ],
   "pdfPages": [
    206
   ],
   "section": "Claudicație — claudatio și acidoză"
  },
  "learningObjective": "Legarea etimologiei și a definiției efort/repaus de metabolismul anaerob și de scutirea piciorului.",
  "optionRationales": [
   "Etimologia claudatio și precipitarea de efort sunt explicite.",
   "Conversia anaerobă cu acidoză este mecanismul citat.",
   "Scutirea articulațiilor și a piciorului este descrisă.",
   "Prezența în repaus definește ischemia avansată sau crampele, nu claudicația.",
   "Masa musculară redusă scutește piciorul, nu îl face sediu."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută claudicația pe repaus și pe picior, inversul definiției efort/acidoză din același paragraf."
  },
  "textbookExpressions": [
   "claudatio",
   "metabolismul anaerob"
  ]
 },
 {
  "id": "vascular-adv-053",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații diferențiază corect durerea din stenoza de canal medular de claudicația ischemică?",
  "options": [
   "Durerea din stenoza de canal medular este ameliorată prin aplecarea înainte în timpul mersului; adesea radiază de-a lungul membrului și nu se remite imediat în repaus",
   "Durerea neurogenă nu este de obicei localizată la grupele musculare majore și este rar declanșată prin exerciții",
   "Stenoza de canal se aliniază imediat la oprirea mersului, identic claudicației, fără iradiere",
   "Aplecarea înainte agravează stenoza de canal, alinierea ținând de declivitatea Buerger",
   "Durerea musculo-scheletală lipsește în repaus, fiind precipitată doar de ischemie"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Durerea din stenoza de canal medular este ameliorată prin aplecarea înainte în timpul mersului; adesea radiază de-a lungul membrului și nu se remite imediat în repaus — Corect: Aplecarea înainte, iradierea și neremitearea imediată sunt explicite.\n\nDurerea neurogenă nu este de obicei localizată la grupele musculare majore și este rar declanșată prin exerciții — Corect: Localizarea extra-musculară și raritatea precipitării de efort sunt citate.\n\nStenoza de canal se aliniază imediat la oprirea mersului, identic claudicației, fără iradiere — Incorect: Textul precizează că nu se remite imediat în repaus.\n\nAplecarea înainte agravează stenoza de canal, alinierea ținând de declivitatea Buerger — Incorect: Aplecarea ameliorează, nu agravează, stenoza de canal.\n\nDurerea musculo-scheletală lipsește în repaus, fiind precipitată doar de ischemie — Incorect: Durerea musculo-scheletală este adesea prezentă în repaus.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 522, Diagnostic diferențial — Stenoza de canal medular (pagini PDF: 207).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    522
   ],
   "pdfPages": [
    207
   ],
   "section": "Diagnostic diferențial — Stenoza de canal medular"
  },
  "learningObjective": "Contrastarea alinării prin aplecare înainte și a neremiterii imediate, față de claudicația de grup muscular.",
  "optionRationales": [
   "Aplecarea înainte, iradierea și neremitearea imediată sunt explicite.",
   "Localizarea extra-musculară și raritatea precipitării de efort sunt citate.",
   "Textul precizează că nu se remite imediat în repaus.",
   "Aplecarea ameliorează, nu agravează, stenoza de canal.",
   "Durerea musculo-scheletală este adesea prezentă în repaus."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează stenoza de canal ca pe claudicația care cedează imediat la repaus, inversul alinării prin aplecare."
  },
  "textbookExpressions": [
   "stenozei de canal medular",
   "aplecarea înainte"
  ]
 },
 {
  "id": "vascular-adv-054",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Sonda Doppler portabilă cu undă continuă emite ultrasunete cu lungime de undă cuprinsă între:",
  "options": [
   "2 și 10 MHz, reflectate de globulele roșii; variația de frecvență e proporțională cu viteza particulelor",
   "20–50 MHz, reflectate de peretele arterial, independent de viteză",
   "0,2–0,5 kHz, fără interacțiune cu hematiile",
   "100–200 kHz, utile doar pentru venele cave",
   "Doar lumină infraroșie, ultrasunetele fiind abandonate"
  ],
  "correct": [
   0
  ],
  "explanation": "2 și 10 MHz, reflectate de globulele roșii; variația de frecvență e proporțională cu viteza particulelor — Corect: Intervalul 2–10 MHz, reflexia pe hematii și proporționalitatea cu viteza sunt explicite.\n\n20–50 MHz, reflectate de peretele arterial, independent de viteză — Incorect: 20–50 MHz nu este fereastra citată; semnalul depinde de viteză.\n\n0,2–0,5 kHz, fără interacțiune cu hematiile — Incorect: kHz-ul jos nu descrie sonda portabilă.\n\n100–200 kHz, utile doar pentru venele cave — Incorect: Fereastra e în MHz, nu 100–200 kHz, și nu e rezervată cavzelor.\n\nDoar lumină infraroșie, ultrasunetele fiind abandonate — Incorect: Instrumentul este ultrasonografic, nu optic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 522, Doppler — 2–10 MHz (pagini PDF: 207).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    522
   ],
   "pdfPages": [
    207
   ],
   "section": "Doppler — 2–10 MHz"
  },
  "learningObjective": "Recunoașterea ferestrei 2–10 MHz și a dependenței deplasării de frecvență de viteza hematiilor.",
  "optionRationales": [
   "Intervalul 2–10 MHz, reflexia pe hematii și proporționalitatea cu viteza sunt explicite.",
   "20–50 MHz nu este fereastra citată; semnalul depinde de viteză.",
   "kHz-ul jos nu descrie sonda portabilă.",
   "Fereastra e în MHz, nu 100–200 kHz, și nu e rezervată cavzelor.",
   "Instrumentul este ultrasonografic, nu optic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută 2–10 MHz pe decade vecine și rupe legătura hematii–viteză, capcana ferestrei de frecvență."
  },
  "textbookExpressions": [
   "2 şi 10 MHz",
   "globulele roşii"
  ]
 },
 {
  "id": "vascular-adv-055",
  "topicId": "vascular",
  "type": "CM",
  "stem": "În prevenția reacțiilor la contrast și a ulcerului diabetic se recomandă:",
  "options": [
   "La hipersensibilitatea cunoscută la contrast, steroizi și antihistaminice înainte de procedură, pentru a reduce incidența și gravitatea reacțiilor",
   "Chestionarea atentă a statusului alergic înainte de angio-CT, RM, arteriografie sau venografie",
   "La diabetic, program regulat de îngrijire a piciorului: tăierea unghiilor, încălțăminte ortopedică și îndepărtarea calusurilor",
   "Steroizii se evită la alergic, contrastul necerând anamneză",
   "Îngrijirea piciorului diabetic e superfluă, calusul protejând de ulcerație"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "La hipersensibilitatea cunoscută la contrast, steroizi și antihistaminice înainte de procedură, pentru a reduce incidența și gravitatea reacțiilor — Corect: Premedicația steroizi plus antihistaminice este explicită.\n\nChestionarea atentă a statusului alergic înainte de angio-CT, RM, arteriografie sau venografie — Corect: Chestionarea alergică înaintea celor patru imagistici este cerută.\n\nLa diabetic, program regulat de îngrijire a piciorului: tăierea unghiilor, încălțăminte ortopedică și îndepărtarea calusurilor — Corect: Triada unghii/încălțăminte/calus este descrisă.\n\nSteroizii se evită la alergic, contrastul necerând anamneză — Incorect: Steroizii se dau tocmai alergicilor cunoscuți.\n\nÎngrijirea piciorului diabetic e superfluă, calusul protejând de ulcerație — Incorect: Calusul se îndepărtează pentru a preveni ulcerația, nu se păstrează.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 523, Contrast — Steroizi; piciorul diabetic (pagini PDF: 208).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    523
   ],
   "pdfPages": [
    208
   ],
   "section": "Contrast — Steroizi; piciorul diabetic"
  },
  "learningObjective": "Cuplarea premedicației steroizi/antihistaminice cu îngrijirea piciorului diabetic (unghii, ortopedie, calus).",
  "optionRationales": [
   "Premedicația steroizi plus antihistaminice este explicită.",
   "Chestionarea alergică înaintea celor patru imagistici este cerută.",
   "Triada unghii/încălțăminte/calus este descrisă.",
   "Steroizii se dau tocmai alergicilor cunoscuți.",
   "Calusul se îndepărtează pentru a preveni ulcerația, nu se păstrează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Interzice steroizii la alergic și transformă calusul în protecție, inversul celor două paragrafe de prevenție."
  },
  "textbookExpressions": [
   "steroizi şi antihistaminice",
   "îndepă1iarea calusurilor"
  ]
 },
 {
  "id": "vascular-adv-056",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Endarterectomia de arteră femurală comună, în BAP, se caracterizează prin:",
  "options": [
   "Puțini pacienți cu boală aorto-iliacă sunt candidați pentru endarterectomie",
   "Mulți chirurgi folosesc endarterectomia locală a arterelor femurale comune și profunde pentru a îmbunătăți fluxul unei proteze aortofemurale sau al unui bypass infrainghinal",
   "Devine tot mai importantă în procedurile combinate, asociată cu stentarea iliacă sau cu aterectomia/stentarea AFS",
   "Abordarea hibridă face întreaga intervenție mult mai puțin invazivă",
   "Endarterectomia femurală înlocuiește de principiu bypassul, hibridul fiind abandonat"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Puțini pacienți cu boală aorto-iliacă sunt candidați pentru endarterectomie — Corect: Raritatea candidaților aorto-iliaci este explicită.\n\nMulți chirurgi folosesc endarterectomia locală a arterelor femurale comune și profunde pentru a îmbunătăți fluxul unei proteze aortofemurale sau al unui bypass infrainghinal — Corect: Rolul de îmbunătățire a fluxului de proteză/bypass este citat.\n\nDevine tot mai importantă în procedurile combinate, asociată cu stentarea iliacă sau cu aterectomia/stentarea AFS — Corect: Asocierea cu stent iliac sau aterectomie/stent AFS este descrisă.\n\nAbordarea hibridă face întreaga intervenție mult mai puțin invazivă — Corect: Reducerea invazivității prin hibrid este enunțată.\n\nEndarterectomia femurală înlocuiește de principiu bypassul, hibridul fiind abandonat — Incorect: Hibridul completează, nu înlocuiește, reconstrucția; textul îl consideră tot mai important.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 525, Endarterectomie femurală — Abord hibrid (pagini PDF: 210).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    525
   ],
   "pdfPages": [
    210
   ],
   "section": "Endarterectomie femurală — Abord hibrid"
  },
  "learningObjective": "Poziționarea endarterectomiei CFA/PFA ca adjuvant de descărcare și ca piesă a hibridului iliac/AFS.",
  "optionRationales": [
   "Raritatea candidaților aorto-iliaci este explicită.",
   "Rolul de îmbunătățire a fluxului de proteză/bypass este citat.",
   "Asocierea cu stent iliac sau aterectomie/stent AFS este descrisă.",
   "Reducerea invazivității prin hibrid este enunțată.",
   "Hibridul completează, nu înlocuiește, reconstrucția; textul îl consideră tot mai important."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Declară endarterectomia femurală substitut al bypassului și abandon al hibridului, inversul paragrafului de proceduri combinate."
  },
  "textbookExpressions": [
   "abordare hibridă",
   "stentarea iliacă"
  ]
 },
 {
  "id": "vascular-adv-057",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Profundoplastia, combinată cu endarterectomia femurală:",
  "options": [
   "La durere ischemică de repaus, ocluzie AFS și stenoză proximală AFP, poate crește perfuzia prin colaterale și ameliora majoritatea simptomelor",
   "Dacă ischemia a progresat la leziuni tisulare sau gangrenă, e puțin probabil ca profundoplastia singură să vindece ulcerațiile; e necesar un bypass arterial",
   "Înlocuiește bypassul în gangrena de picior, colateralele AFP fiind suficiente",
   "Este inutilă în durerea de repaus, fiind rezervată claudicației Framingham fără stenoză AFP",
   "Leziunile tisulare se vindecă mai bine cu profundoplastie decât cu bypass"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "La durere ischemică de repaus, ocluzie AFS și stenoză proximală AFP, poate crește perfuzia prin colaterale și ameliora majoritatea simptomelor — Corect: Indicația (repaus + ocluzie AFS + stenoză AFP) și ameliorarea sunt explicite.\n\nDacă ischemia a progresat la leziuni tisulare sau gangrenă, e puțin probabil ca profundoplastia singură să vindece ulcerațiile; e necesar un bypass arterial — Corect: Insuficiența la ulcerație/gangrenă și nevoia de bypass sunt citate.\n\nÎnlocuiește bypassul în gangrena de picior, colateralele AFP fiind suficiente — Incorect: La gangrenă textul cere bypass, nu substitutul prin profundoplastie.\n\nEste inutilă în durerea de repaus, fiind rezervată claudicației Framingham fără stenoză AFP — Incorect: Indicația citată este tocmai durerea de repaus, nu claudicația benignă.\n\nLeziunile tisulare se vindecă mai bine cu profundoplastie decât cu bypass — Incorect: Ulcerațiile cer bypass, nu profundoplastie izolată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 525, Profundoplastie — Repaus versus gangrenă (pagini PDF: 210).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    525
   ],
   "pdfPages": [
    210
   ],
   "section": "Profundoplastie — Repaus versus gangrenă"
  },
  "learningObjective": "Contrastarea utilității în durerea de repaus (colaterale AFP) cu insuficiența ei la pierderea de țesut.",
  "optionRationales": [
   "Indicația (repaus + ocluzie AFS + stenoză AFP) și ameliorarea sunt explicite.",
   "Insuficiența la ulcerație/gangrenă și nevoia de bypass sunt citate.",
   "La gangrenă textul cere bypass, nu substitutul prin profundoplastie.",
   "Indicația citată este tocmai durerea de repaus, nu claudicația benignă.",
   "Ulcerațiile cer bypass, nu profundoplastie izolată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune profundoplastia înaintea bypassului în gangrenă, inversul limitei de flux către picior."
  },
  "textbookExpressions": [
   "profundoplastia",
   "leziuni tisulare sau gangrenă"
  ]
 },
 {
  "id": "vascular-adv-058",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Complicațiile imediate ale intervenției de bypass arterial includ:",
  "options": [
   "Sângerare postoperatorie de la nivelul anastomozelor",
   "Tromboza grefonului",
   "Infecția plăgilor",
   "Limforagie cu formare de limfocel (colecție de lichid limfatic)",
   "Complicațiile cardiopulmonare lipsesc, pacienții cu BAP neavând boală coronariană sau BPOC"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Sângerare postoperatorie de la nivelul anastomozelor — Corect: Sângerarea anastomotică este explicită.\n\nTromboza grefonului — Corect: Tromboza grefonului este citată.\n\nInfecția plăgilor — Corect: Infecția plăgilor este listată.\n\nLimforagie cu formare de limfocel (colecție de lichid limfatic) — Corect: Limforagia cu limfocel este descrisă.\n\nComplicațiile cardiopulmonare lipsesc, pacienții cu BAP neavând boală coronariană sau BPOC — Incorect: Textul menționează tocmai complicații cardiopulmonare pe fond de BCI, IR sau BPOC.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 526, Bypass — Complicații imediate (pagini PDF: 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    526
   ],
   "pdfPages": [
    211
   ],
   "section": "Bypass — Complicații imediate"
  },
  "learningObjective": "Listarea tetradei imediate (sângerare, tromboză, infecție, limfocel) față de comorbiditatea cardiopulmonară asociată.",
  "optionRationales": [
   "Sângerarea anastomotică este explicită.",
   "Tromboza grefonului este citată.",
   "Infecția plăgilor este listată.",
   "Limforagia cu limfocel este descrisă.",
   "Textul menționează tocmai complicații cardiopulmonare pe fond de BCI, IR sau BPOC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează tetrada chirurgicală imediată și neagă comorbiditatea cardiopulmonară, deși ambele stau în același paragraf."
  },
  "textbookExpressions": [
   "limfocel",
   "tromboza grefonului"
  ]
 },
 {
  "id": "vascular-adv-059",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Când AFS este ocluzată concomitent, descărcarea bypassului aortofemural:",
  "options": [
   "Vasul principal de descărcare este artera femurală profundă (AFP)",
   "Ocluzia protezei aortofemurale e de obicei cauzată de progresia bolii distale, care limitează descărcarea și fluxul prin proteză",
   "Descărcarea se face prin AFS oclusă, AFP neavând rol",
   "Ocluzia protezei ține de infecția de limfocel, nu de boala distală",
   "Patența la 5 ani sub 30% face procedura abandonată, indiferent de AFP"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Vasul principal de descărcare este artera femurală profundă (AFP) — Corect: AFP ca vas principal de descărcare este explicită.\n\nOcluzia protezei aortofemurale e de obicei cauzată de progresia bolii distale, care limitează descărcarea și fluxul prin proteză — Corect: Progresia distală cu limitarea outflow-ului este mecanismul citat.\n\nDescărcarea se face prin AFS oclusă, AFP neavând rol — Incorect: AFS oclusă nu poate descărca; textul mută rolul pe AFP.\n\nOcluzia protezei ține de infecția de limfocel, nu de boala distală — Incorect: Mecanismul ocluziei de proteză e boala distală, nu limfocelul.\n\nPatența la 5 ani sub 30% face procedura abandonată, indiferent de AFP — Incorect: Patența citată a aortofemuralului e >90% la 5 ani, nu sub 30%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 525, Aortofemural — Descărcare pe AFP (pagini PDF: 210).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    525
   ],
   "pdfPages": [
    210
   ],
   "section": "Aortofemural — Descărcare pe AFP"
  },
  "learningObjective": "Recunoașterea AFP ca outflow când AFS e oclusă și a progresiei distale ca mecanism de ocluzie a protezei.",
  "optionRationales": [
   "AFP ca vas principal de descărcare este explicită.",
   "Progresia distală cu limitarea outflow-ului este mecanismul citat.",
   "AFS oclusă nu poate descărca; textul mută rolul pe AFP.",
   "Mecanismul ocluziei de proteză e boala distală, nu limfocelul.",
   "Patența citată a aortofemuralului e >90% la 5 ani, nu sub 30%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută outflow-ul pe AFS oclusă și coboară patența sub 30%, două capcane ale aceluiași paragraf de bypass."
  },
  "textbookExpressions": [
   "principal de descărcare",
   "progresia bolii"
  ]
 },
 {
  "id": "vascular-adv-060",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Revascularizarea la claudicant versus ischemia care pune în pericol membrul:",
  "options": [
   "Claudicația poate fi tratată prin modificarea factorilor de risc, în special renunțarea la fumat și exerciții fizice; intervențiile se justifică de simptome debilitante care restricționează activitățile zilnice",
   "Terapia endovasculară poate fi prima linie, rezervând procedurile invazive stadiilor mai avansate",
   "Pentru durere de repaus, pierdere de țesuturi sau gangrenă, bypassul este adesea cea mai bună opțiune; tehnicile intervenționale se folosesc la riscul chirurgical ridicat",
   "Bypassul deschis e prima linie la claudicația ușoară, fumatul neinfluențând indicația",
   "Endovascularul e evitat în ischemia critică chiar la riscul chirurgical înalt, claudicația cerând de principiu bypass"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Claudicația poate fi tratată prin modificarea factorilor de risc, în special renunțarea la fumat și exerciții fizice; intervențiile se justifică de simptome debilitante care restricționează activitățile zilnice — Corect: Modificarea factorilor de risc și pragul simptomelor debilitante sunt explicite.\n\nTerapia endovasculară poate fi prima linie, rezervând procedurile invazive stadiilor mai avansate — Corect: Endovascularul ca primă linie, cu rezerva invazivă, este citat.\n\nPentru durere de repaus, pierdere de țesuturi sau gangrenă, bypassul este adesea cea mai bună opțiune; tehnicile intervenționale se folosesc la riscul chirurgical ridicat — Corect: Bypassul la pericolul de membru și endovascularul la riscul înalt sunt descrise.\n\nBypassul deschis e prima linie la claudicația ușoară, fumatul neinfluențând indicația — Incorect: Claudicația ușoară nu cere bypass de primă linie; fumatul e central.\n\nEndovascularul e evitat în ischemia critică chiar la riscul chirurgical înalt, claudicația cerând de principiu bypass — Incorect: Textul rezervă endovascularul tocmai pacientului cu risc înalt în ischemia critică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 527, 526, Claudicație versus pericol de membru (pagini PDF: 212, 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    527,
    526
   ],
   "pdfPages": [
    212,
    211
   ],
   "section": "Claudicație versus pericol de membru"
  },
  "learningObjective": "Ierarhia conservator/endovascular la claudicant versus bypass la ischemia care amenință membrul.",
  "optionRationales": [
   "Modificarea factorilor de risc și pragul simptomelor debilitante sunt explicite.",
   "Endovascularul ca primă linie, cu rezerva invazivă, este citat.",
   "Bypassul la pericolul de membru și endovascularul la riscul înalt sunt descrise.",
   "Claudicația ușoară nu cere bypass de primă linie; fumatul e central.",
   "Textul rezervă endovascularul tocmai pacientului cu risc înalt în ischemia critică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ierarhia (bypass la claudicație ușoară, endovascular interzis în ischemia critică)."
  },
  "textbookExpressions": [
   "renunţarea la fumat",
   "pun în pericol membrele"
  ]
 },
 {
  "id": "vascular-adv-061",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Ecografia Doppler în ischemia mezenterică cronică:",
  "options": [
   "Este non-invazivă, evaluează fluxul visceral și evidențiază stenozele de la emergența vaselor principale",
   "Este limitată de aerocolia marcată sau de calcificările semnificative; de aceea angio-CT sau angio-RM sunt cele mai indicate",
   "Înlocuiește angiografia terapeutică, aerocolia îmbunătățind fereastra acustică",
   "Calcificările cresc acuratețea Doppler, CT-ul fiind superfluu",
   "Angiografia e abandonată, Doppler-ul recanalizând trunchiul celiac"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este non-invazivă, evaluează fluxul visceral și evidențiază stenozele de la emergența vaselor principale — Corect: Caracterul non-invaziv și vizualizarea stenozelor de emergență sunt explicite.\n\nEste limitată de aerocolia marcată sau de calcificările semnificative; de aceea angio-CT sau angio-RM sunt cele mai indicate — Corect: Limitele aerocolie/calcificare și preferința CT/RM sunt citate.\n\nÎnlocuiește angiografia terapeutică, aerocolia îmbunătățind fereastra acustică — Incorect: Aerocolia limitează, nu îmbunătățește, Doppler-ul; angiografia rămâne pentru intervenții.\n\nCalcificările cresc acuratețea Doppler, CT-ul fiind superfluu — Incorect: Calcificările reduc acuratețea.\n\nAngiografia e abandonată, Doppler-ul recanalizând trunchiul celiac — Incorect: Angiografia este folosită pentru intervenții, nu e abandonată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 527, Mezenteric — Doppler versus angio-CT/RM (pagini PDF: 212).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    527
   ],
   "pdfPages": [
    212
   ],
   "section": "Mezenteric — Doppler versus angio-CT/RM"
  },
  "learningObjective": "Contrastarea utilității Doppler la emergențe cu limitele aerocolie/calcificare care trimit spre CT/RM.",
  "optionRationales": [
   "Caracterul non-invaziv și vizualizarea stenozelor de emergență sunt explicite.",
   "Limitele aerocolie/calcificare și preferința CT/RM sunt citate.",
   "Aerocolia limitează, nu îmbunătățește, Doppler-ul; angiografia rămâne pentru intervenții.",
   "Calcificările reduc acuratețea.",
   "Angiografia este folosită pentru intervenții, nu e abandonată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă aerocolia și calcificările în avantaje Doppler și abandonează angiografia, inversul indicației de CT/RM."
  },
  "textbookExpressions": [
   "aerocoliei marcate",
   "calcificărilor"
  ]
 },
 {
  "id": "vascular-adv-062",
  "topicId": "vascular",
  "type": "CS",
  "stem": "Precizați enunțul corect privind revascularizarea chirurgicală mezenterică:",
  "options": [
   "Chirurgii cu experiență revascularizează de rutină cel puțin două vase viscerale pentru o patență mai bună pe termen lung; grefa venoasă autologă se folosește când există risc crescut de infecție",
   "Un singur vas e suficient, vena autologă înlocuind de principiu proteza, chiar fără risc infecțios",
   "Endarterectomia proximală e abandonată, grefele sintetice fiind interzise",
   "Revascularizarea unui singur vas maximizează patența, al doilea vas crescând infarctul",
   "Vena autologă e evitată tocmai la riscul de infecție, sinteticele fiind rezervate sepsisului"
  ],
  "correct": [
   0
  ],
  "explanation": "Chirurgii cu experiență revascularizează de rutină cel puțin două vase viscerale pentru o patență mai bună pe termen lung; grefa venoasă autologă se folosește când există risc crescut de infecție — Corect: Cele două reguli (≥2 vase; venă doar la risc infecțios) sunt explicite.\n\nUn singur vas e suficient, vena autologă înlocuind de principiu proteza, chiar fără risc infecțios — Incorect: Un singur vas nu e strategia citată; vena nu înlocuiește de principiu sinteticele.\n\nEndarterectomia proximală e abandonată, grefele sintetice fiind interzise — Incorect: Endarterectomia proximală și bypassul cu grefe sintetice rămân opțiuni.\n\nRevascularizarea unui singur vas maximizează patența, al doilea vas crescând infarctul — Incorect: Al doilea vas e pentru patență, nu pentru infarct.\n\nVena autologă e evitată tocmai la riscul de infecție, sinteticele fiind rezervate sepsisului — Incorect: Vena e tocmai pentru riscul de infecție, nu invers.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 527, Mezenteric — Două vase și venă autologă (pagini PDF: 212).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    527
   ],
   "pdfPages": [
    212
   ],
   "section": "Mezenteric — Două vase și venă autologă"
  },
  "learningObjective": "Recunoașterea revascularizării a cel puțin două vase și a venei autologe rezervate riscului infecțios.",
  "optionRationales": [
   "Cele două reguli (≥2 vase; venă doar la risc infecțios) sunt explicite.",
   "Un singur vas nu e strategia citată; vena nu înlocuiește de principiu sinteticele.",
   "Endarterectomia proximală și bypassul cu grefe sintetice rămân opțiuni.",
   "Al doilea vas e pentru patență, nu pentru infarct.",
   "Vena e tocmai pentru riscul de infecție, nu invers."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce revascularizarea la un singur vas și inversează indicația venei autologe la infecție."
  },
  "textbookExpressions": [
   "cel puţin două vase viscerale",
   "Grefa venoasă autologă"
  ]
 },
 {
  "id": "vascular-adv-063",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre anatomia venoasă și apelul din 2008:",
  "options": [
   "În 2008, chirurgul general al SUA a emis un „apel la acțiune” pentru reducerea deceselor prin TVP prevenibile",
   "Sistemul venos central include venele cave inferioară și superioară, venele iliace și venele subclaviculare",
   "Fluxul unidirecțional e asigurat de valve venoase bicuspide, care previn refluxul în ortostatism",
   "Sistemul central e format doar din safene, valvele bicuspide lipind",
   "Apelul din 2008 viza doar varicele estetice, fără profilaxie la pacientul chirurgical"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În 2008, chirurgul general al SUA a emis un „apel la acțiune” pentru reducerea deceselor prin TVP prevenibile — Corect: Apelul la acțiune din 2008 este explicit.\n\nSistemul venos central include venele cave inferioară și superioară, venele iliace și venele subclaviculare — Corect: Cele patru teritorii ale sistemului central sunt listate.\n\nFluxul unidirecțional e asigurat de valve venoase bicuspide, care previn refluxul în ortostatism — Corect: Valvele bicuspide și prevenirea refluxului ortostatic sunt descrise.\n\nSistemul central e format doar din safene, valvele bicuspide lipind — Incorect: Safenele țin de sistemul superficial periferic, nu de central.\n\nApelul din 2008 viza doar varicele estetice, fără profilaxie la pacientul chirurgical — Incorect: Apelul vizează TVP prevenibilă la pacientul chirurgical, nu estetica varicelor.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 534, Vene — Apel 2008, sistem central, bicuspide (pagini PDF: 213).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    534
   ],
   "pdfPages": [
    213
   ],
   "section": "Vene — Apel 2008, sistem central, bicuspide"
  },
  "learningObjective": "Cuplarea apelului din 2008 cu definiția sistemului central și cu rolul valvelor bicuspide în ortostatism.",
  "optionRationales": [
   "Apelul la acțiune din 2008 este explicit.",
   "Cele patru teritorii ale sistemului central sunt listate.",
   "Valvele bicuspide și prevenirea refluxului ortostatic sunt descrise.",
   "Safenele țin de sistemul superficial periferic, nu de central.",
   "Apelul vizează TVP prevenibilă la pacientul chirurgical, nu estetica varicelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută apelul din 2008 pe varicele estetice și golește sistemul central de cave/iliace, două ancore de pagină."
  },
  "textbookExpressions": [
   "apel la acţiune",
   "valve venoase bicuspide"
  ]
 },
 {
  "id": "vascular-adv-064",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Următoarele afirmații despre diagnosticul TVP sunt adevărate:",
  "options": [
   "În mod normal, fluxul venos al membrelor inferioare scade cu inspirația, prin creșterea presiunii intraabdominale",
   "Acuratețea Doppler e redusă la venele tibiale, din cauza dificultății de vizualizare a acestor vene mici în compartimentele musculare",
   "CT de abdomen și pelvis cu contrast IV poate ajuta diagnosticul trombozei pelvine și a venei cave",
   "Diagnosticul diferențial al edemului acut include traumatismele, ruptura de tendon plantar, infecția, limfangita, hematomul muscular și chistul Baker rupt",
   "Inspirația crește fluxul venos de membru, venele tibiale având acuratețe Doppler superioară iliacei"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "În mod normal, fluxul venos al membrelor inferioare scade cu inspirația, prin creșterea presiunii intraabdominale — Corect: Scăderea fluxului cu inspirația prin presiune intraabdominală este explicită.\n\nAcuratețea Doppler e redusă la venele tibiale, din cauza dificultății de vizualizare a acestor vene mici în compartimentele musculare — Corect: Reducerea acurateții la tibiale este citată.\n\nCT de abdomen și pelvis cu contrast IV poate ajuta diagnosticul trombozei pelvine și a venei cave — Corect: Rolul CT abdomino-pelvin pentru pelvină/cavă este descris.\n\nDiagnosticul diferențial al edemului acut include traumatismele, ruptura de tendon plantar, infecția, limfangita, hematomul muscular și chistul Baker rupt — Corect: Lista de diagnostic diferențial, inclusiv chistul Baker rupt, este enunțată.\n\nInspirația crește fluxul venos de membru, venele tibiale având acuratețe Doppler superioară iliacei — Incorect: Direcția e inversă: inspirația scade fluxul; tibialele sunt mai greu de văzut.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 537, TVP — Inspirație, tibiale, CT, Baker (pagini PDF: 216).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    537
   ],
   "pdfPages": [
    216
   ],
   "section": "TVP — Inspirație, tibiale, CT, Baker"
  },
  "learningObjective": "Aplicarea scăderii inspiratorii a fluxului, a limitei tibiale a Doppler-ului, a CT-ului pelvin/cav și a diagnosticului diferențial.",
  "optionRationales": [
   "Scăderea fluxului cu inspirația prin presiune intraabdominală este explicită.",
   "Reducerea acurateții la tibiale este citată.",
   "Rolul CT abdomino-pelvin pentru pelvină/cavă este descris.",
   "Lista de diagnostic diferențial, inclusiv chistul Baker rupt, este enunțată.",
   "Direcția e inversă: inspirația scade fluxul; tibialele sunt mai greu de văzut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează răspunsul inspirator al fluxului și supraestimează Doppler-ul tibial, două capcane de fiziologie/acuratețe."
  },
  "textbookExpressions": [
   "scade cu inspiraţia",
   "chistul Baker rupt"
  ]
 },
 {
  "id": "vascular-adv-065",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Profilaxia TVP perioperatorie și contraindicațiile anticoagulării includ:",
  "options": [
   "Măsuri mecanice (dispozitive de compresie segmentară intermitentă), mobilizare precoce și terapie farmacologică (heparină subcutanat sau warfarină)",
   "Risc crescut: vârstă avansată, proceduri îndelungate, antecedente de TVP sau cancer",
   "Contraindicații: diateze hemoragice, ulcere digestive, AVC recent, malformații arterio-venoase cerebrale, chirurgie recentă, hemofilie, supresie medulară post-chimioterapie",
   "Profilaxia mecanică e superfluă, warfarina fiind inofensivă imediat postoperator, fără contraindicații",
   "Cancerul și vârsta protejează de TVP, heparina subcutanată fiind evitată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Măsuri mecanice (dispozitive de compresie segmentară intermitentă), mobilizare precoce și terapie farmacologică (heparină subcutanat sau warfarină) — Corect: Cele trei măsuri profilactice sunt explicite.\n\nRisc crescut: vârstă avansată, proceduri îndelungate, antecedente de TVP sau cancer — Corect: Cei patru factori de vulnerabilitate sunt citați.\n\nContraindicații: diateze hemoragice, ulcere digestive, AVC recent, malformații arterio-venoase cerebrale, chirurgie recentă, hemofilie, supresie medulară post-chimioterapie — Corect: Lista de contraindicații (diatheză, ulcer, AVC, MAV, chirurgie, hemofilie, mielosupresie) este descrisă.\n\nProfilaxia mecanică e superfluă, warfarina fiind inofensivă imediat postoperator, fără contraindicații — Incorect: Mecanicul e parte din profilaxie; contraindicațiile există.\n\nCancerul și vârsta protejează de TVP, heparina subcutanată fiind evitată — Incorect: Cancerul și vârsta cresc, nu scad, riscul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 538, TVP — Profilaxie și contraindicații (pagini PDF: 217).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    538
   ],
   "pdfPages": [
    217
   ],
   "section": "TVP — Profilaxie și contraindicații"
  },
  "learningObjective": "Reținerea triadului mecanic/mobilizare/farmacologic, a stratificării de risc și a listei de contraindicații.",
  "optionRationales": [
   "Cele trei măsuri profilactice sunt explicite.",
   "Cei patru factori de vulnerabilitate sunt citați.",
   "Lista de contraindicații (diatheză, ulcer, AVC, MAV, chirurgie, hemofilie, mielosupresie) este descrisă.",
   "Mecanicul e parte din profilaxie; contraindicațiile există.",
   "Cancerul și vârsta cresc, nu scad, riscul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează stratificarea de risc și lista de contraindicații, deși stau în paragrafele de profilaxie și de warfarină."
  },
  "textbookExpressions": [
   "compresie segmentară intermitentă",
   "ulcerere gastrointestinale"
  ]
 },
 {
  "id": "vascular-adv-066",
  "topicId": "vascular",
  "type": "CM",
  "stem": "Tratamentul inițial al insuficienței venoase cronice cu lipodermatoscleroză:",
  "options": [
   "Ciorapi de contenție elastică; complianța e adesea slabă (lipsa beneficiului imediat, preț, discomfort)",
   "La ulcerații, îngrijirea locală a plăgii și pansamente din trei sau patru straturi ca element compresiv",
   "Dacă plaga nu se vindecă, dar refluxul și edemul sunt controlate, plastia cu piele liberă despicată poate conduce la vindecare",
   "Ciorapii produc beneficiu imediat, complianța fiind maximă fără cost",
   "Plastia cu piele se face înaintea controlului refluxului, pansamentele cu straturi fiind evitate"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ciorapi de contenție elastică; complianța e adesea slabă (lipsa beneficiului imediat, preț, discomfort) — Corect: Ciorapii ca tratament inițial și cauzele complianței slabe sunt explicite.\n\nLa ulcerații, îngrijirea locală a plăgii și pansamente din trei sau patru straturi ca element compresiv — Corect: Pansamentele din trei sau patru straturi sunt citate.\n\nDacă plaga nu se vindecă, dar refluxul și edemul sunt controlate, plastia cu piele liberă despicată poate conduce la vindecare — Corect: Condiția (reflux și edem controlate) a plastiei cu piele despicată este descrisă.\n\nCiorapii produc beneficiu imediat, complianța fiind maximă fără cost — Incorect: Textul leagă complianța slabă tocmai de absența beneficiului imediat și de cost/discomfort.\n\nPlastia cu piele se face înaintea controlului refluxului, pansamentele cu straturi fiind evitate — Incorect: Pielea despicată urmează controlului refluxului, nu îl precede.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 26, p. 541, CVI — Ciorapi, pansamente, piele despicată (pagini PDF: 220).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 26,
   "printedPages": [
    541
   ],
   "pdfPages": [
    220
   ],
   "section": "CVI — Ciorapi, pansamente, piele despicată"
  },
  "learningObjective": "Ierarhia ciorapi (cu complianță slabă) → pansamente 3–4 straturi → piele despicată după controlul refluxului/edemului.",
  "optionRationales": [
   "Ciorapii ca tratament inițial și cauzele complianței slabe sunt explicite.",
   "Pansamentele din trei sau patru straturi sunt citate.",
   "Condiția (reflux și edem controlate) a plastiei cu piele despicată este descrisă.",
   "Textul leagă complianța slabă tocmai de absența beneficiului imediat și de cost/discomfort.",
   "Pielea despicată urmează controlului refluxului, nu îl precede."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează complianța ciorapilor și pune grefa de piele înaintea controlului refluxului."
  },
  "textbookExpressions": [
   "trei sau patru straturi",
   "piele liberă despicată"
  ]
 }
];
