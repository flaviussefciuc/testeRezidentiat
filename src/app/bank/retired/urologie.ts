import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_UROLOGIE:(Question&Record<string,unknown>)[]=[
 {
  "id": "urologie-adv-001",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Originea a aproximativ 90% dintre cancerele de prostată este:",
  "options": [
   "Zona periferică",
   "Zona tranzițională",
   "Zona centrală",
   "Stroma fibromusculară anterioară",
   "Verumontanum"
  ],
  "correct": [
   0
  ],
  "explanation": "Zona periferică — Corect: Textul precizează că zona periferică reprezintă originea a aproximativ 90% dintre cazurile de cancer de prostată.\n\nZona tranzițională — Incorect: Zona tranzițională crește în volum în hiperplazia benignă, nu este originea tipică a cancerului.\n\nZona centrală — Incorect: Zona centrală este descrisă anatomic, fără a fi sediul a 90% dintre carcinoame.\n\nStroma fibromusculară anterioară — Incorect: Stroma fibromusculară anterioară este un compartiment anatomic, nu originea statistică a cancerului.\n\nVerumontanum — Incorect: Verumontanum este locul de deschidere a ductelor ejaculatorii în uretra prostatică, nu originea carcinomului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 635, Prostata — Anatomie și zone (pagini PDF: 306).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    635
   ],
   "pdfPages": [
    306
   ],
   "section": "Prostata — Anatomie și zone"
  },
  "learningObjective": "Recunoașterea zonei periferice ca sediu al marii majorități a carcinoamelor, distinct de zona tranzițională a HBP.",
  "optionRationales": [
   "Textul precizează că zona periferică reprezintă originea a aproximativ 90% dintre cazurile de cancer de prostată.",
   "Zona tranzițională crește în volum în hiperplazia benignă, nu este originea tipică a cancerului.",
   "Zona centrală este descrisă anatomic, fără a fi sediul a 90% dintre carcinoame.",
   "Stroma fibromusculară anterioară este un compartiment anatomic, nu originea statistică a cancerului.",
   "Verumontanum este locul de deschidere a ductelor ejaculatorii în uretra prostatică, nu originea carcinomului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează zona periferică (cancer) cu zona tranzițională (HBP), perechea clasică de confuzie din același paragraf."
  },
  "textbookExpressions": [
   "zona periferică",
   "verumontanum"
  ]
 },
 {
  "id": "urologie-adv-002",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la prostatita acută:",
  "options": [
   "Agentul este, de obicei, o bacterie Gram-negativă, cel mai adesea Escherichia coli",
   "Antibioticele se continuă câteva săptămâni, din cauza penetranței reduse în prostată",
   "Retenția urinară se drenează prin cateter suprapubian, nu transuretral",
   "Abcesul se evacuează prin drenaj perineal deschis, ca metodă cea mai frecventă",
   "Prostatita bacteriană și cea non-bacteriană se diferențiază corect doar pe simptomatologie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Agentul este, de obicei, o bacterie Gram-negativă, cel mai adesea Escherichia coli — Corect: Textul identifică E. coli ca agentul cel mai adesea incriminat.\n\nAntibioticele se continuă câteva săptămâni, din cauza penetranței reduse în prostată — Corect: Penetranța redusă impune continuarea tratamentului câteva săptămâni.\n\nRetenția urinară se drenează prin cateter suprapubian, nu transuretral — Corect: Cateterul transuretral poate exacerba infecția; se recomandă cateterul suprapubian.\n\nAbcesul se evacuează prin drenaj perineal deschis, ca metodă cea mai frecventă — Incorect: Tratamentul cel mai frecvent al abcesului este incizia transuretrală cu rezectoscopul sau aspirația ghidată TRUS.\n\nProstatita bacteriană și cea non-bacteriană se diferențiază corect doar pe simptomatologie — Incorect: Textul precizează că cele două forme nu pot fi diferențiate corect doar pe simptomatologie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 636, 635, Prostatita acută (pagini PDF: 307, 306).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    636,
    635
   ],
   "pdfPages": [
    307,
    306
   ],
   "section": "Prostatita acută"
  },
  "learningObjective": "Aplicarea etiologiei E. coli, a duratei antibioterapiei și a drenajului suprapubian, față de calea transuretrală a abcesului.",
  "optionRationales": [
   "Textul identifică E. coli ca agentul cel mai adesea incriminat.",
   "Penetranța redusă impune continuarea tratamentului câteva săptămâni.",
   "Cateterul transuretral poate exacerba infecția; se recomandă cateterul suprapubian.",
   "Tratamentul cel mai frecvent al abcesului este incizia transuretrală cu rezectoscopul sau aspirația ghidată TRUS.",
   "Textul precizează că cele două forme nu pot fi diferențiate corect doar pe simptomatologie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Promovează drenajul perineal deschis în locul rezecției transuretrale și pretinde diferențierea clinică pe care textul o neagă."
  },
  "textbookExpressions": [
   "Escherichia coli",
   "cateter suprapubian"
  ]
 },
 {
  "id": "urologie-adv-003",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Prostatita cronică bacteriană se caracterizează prin:",
  "options": [
   "Lichid prostatic cu peste 10 leucocite pe câmp, după masaj digital",
   "Culturi de lichid prostatic pozitive, necesare pentru diagnostic",
   "Antecedente de prostatită acută la marea majoritate a pacienților",
   "Lichid prostatic constant anormal în forma non-bacteriană",
   "Cura antibiotică de 3 zile, identică cistitei necomplicate"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Lichid prostatic cu peste 10 leucocite pe câmp, după masaj digital — Corect: Textul descrie caracteristic peste 10 globule albe pe câmp în lichidul prostatic.\n\nCulturi de lichid prostatic pozitive, necesare pentru diagnostic — Corect: Culturile pozitive sunt cerute explicit pentru diagnosticul formei bacteriene cronice.\n\nAntecedente de prostatită acută la marea majoritate a pacienților — Incorect: De obicei nu există antecedente de prostatită acută.\n\nLichid prostatic constant anormal în forma non-bacteriană — Incorect: În forma non-bacteriană lichidul prostatic este frecvent normal la microscop.\n\nCura antibiotică de 3 zile, identică cistitei necomplicate — Incorect: Tratamentul oral cu spectru larg durează adesea 6 săptămâni, nu 3 zile.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 636, Prostatita cronică și non-bacteriană (pagini PDF: 307).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    636
   ],
   "pdfPages": [
    307
   ],
   "section": "Prostatita cronică și non-bacteriană"
  },
  "learningObjective": "Diferențierea criteriului de cultură și a pragului de 10 leucocite de forma non-bacteriană cu lichid microscopic normal.",
  "optionRationales": [
   "Textul descrie caracteristic peste 10 globule albe pe câmp în lichidul prostatic.",
   "Culturile pozitive sunt cerute explicit pentru diagnosticul formei bacteriene cronice.",
   "De obicei nu există antecedente de prostatită acută.",
   "În forma non-bacteriană lichidul prostatic este frecvent normal la microscop.",
   "Tratamentul oral cu spectru larg durează adesea 6 săptămâni, nu 3 zile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează antecedentele de prostatită acută și atribuie formei non-bacteriene un lichid microscopic patologic."
  },
  "textbookExpressions": [
   "6 săptămâni",
   "trimetoprim-sulfametoxazol"
  ]
 },
 {
  "id": "urologie-adv-004",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Tabloul clinic și evaluarea hiperplaziei benigne de prostată:",
  "options": [
   "Debitmetria arată, de obicei, un debit sub 15 mL/secundă la simptomatici",
   "Caracteristice sunt conturul neted și consistența moale la tușeu",
   "Urografia intravenoasă este investigația de rutină a HBP necomplicate",
   "Semnul ureterelor în crosă de hochei reflectă deplasarea cranială a ureterelor distale",
   "Prostata mărită, chiar asimptomatică, impune de la sine consult urologic"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Debitmetria arată, de obicei, un debit sub 15 mL/secundă la simptomatici — Corect: Pragul <15 mL/secundă este citat pentru pacienții simptomatici.\n\nCaracteristice sunt conturul neted și consistența moale la tușeu — Corect: Conturul neted și consistența moale sunt descrise ca și caracteristici ale HBP.\n\nUrografia intravenoasă este investigația de rutină a HBP necomplicate — Incorect: UIV nu este indicată uzual în evaluarea HBP necomplicate.\n\nSemnul ureterelor în crosă de hochei reflectă deplasarea cranială a ureterelor distale — Corect: Deplasarea cranială a ureterelor distale de către prostata mărită produce semnul în crosă de hochei.\n\nProstata mărită, chiar asimptomatică, impune de la sine consult urologic — Incorect: Creșterea semnificativă asimptomatică nu indică, prin ea însăși, evaluare și consult urologic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 637, 636, HBP — Tablou clinic și evaluare (pagini PDF: 308, 307).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    637,
    636
   ],
   "pdfPages": [
    308,
    307
   ],
   "section": "HBP — Tablou clinic și evaluare"
  },
  "learningObjective": "Aplicarea pragului debitmetric și a semnelor de tușeu, față de limita urografiei de rutină și de prostata mare asimptomatică.",
  "optionRationales": [
   "Pragul <15 mL/secundă este citat pentru pacienții simptomatici.",
   "Conturul neted și consistența moale sunt descrise ca și caracteristici ale HBP.",
   "UIV nu este indicată uzual în evaluarea HBP necomplicate.",
   "Deplasarea cranială a ureterelor distale de către prostata mărită produce semnul în crosă de hochei.",
   "Creșterea semnificativă asimptomatică nu indică, prin ea însăși, evaluare și consult urologic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă o observație radiologică ocazională în indicație de rutină și leagă volumul palpabil de indicația de consult."
  },
  "textbookExpressions": [
   "mL/secundă",
   "crosă de hochei"
  ]
 },
 {
  "id": "urologie-adv-005",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Tratamentul medicamentos al HBP include:",
  "options": [
   "Blocanții α-adrenergici sunt, de obicei, agenții de primă linie, cu răspuns posibil în 24 de ore",
   "Inhibitorii de 5α-reductază scad dimensiunea prostatei cu 20–30% și impun dublarea PSA-ului seric interpretat",
   "Finasterida este mai puțin eficientă decât α-blocantele când volumul prostatic este sub 50 cm³",
   "Răspunsul la α-blocante apare abia după câteva luni de administrare",
   "PSA-ul seric rămâne neschimbat sub finasteridă sau dutasteridă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Blocanții α-adrenergici sunt, de obicei, agenții de primă linie, cu răspuns posibil în 24 de ore — Corect: Prima linie și posibilitatea răspunsului în 24 de ore sunt explicite.\n\nInhibitorii de 5α-reductază scad dimensiunea prostatei cu 20–30% și impun dublarea PSA-ului seric interpretat — Corect: Reducerea modestă 20–30% și dublarea PSA-ului pentru o valoare relativă sunt descrise.\n\nFinasterida este mai puțin eficientă decât α-blocantele când volumul prostatic este sub 50 cm³ — Corect: Inferioritatea finasteridei față de α-blocante la volum <50 cm³ este citată din studiile comparative.\n\nRăspunsul la α-blocante apare abia după câteva luni de administrare — Incorect: Răspunsul rapid în 24 de ore aparține α-blocantelor; întârzierea de luni este a finasteridei.\n\nPSA-ul seric rămâne neschimbat sub finasteridă sau dutasteridă — Incorect: Finasterida și dutasterida scad de obicei nivelul seric al PSA.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 637, HBP — Tratament medicamentos (pagini PDF: 308).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    637
   ],
   "pdfPages": [
    308
   ],
   "section": "HBP — Tratament medicamentos"
  },
  "learningObjective": "Ierarhizarea α-blocant versus 5α-reductază după volum și corectarea interpretării PSA-ului sub inhibitori.",
  "optionRationales": [
   "Prima linie și posibilitatea răspunsului în 24 de ore sunt explicite.",
   "Reducerea modestă 20–30% și dublarea PSA-ului pentru o valoare relativă sunt descrise.",
   "Inferioritatea finasteridei față de α-blocante la volum <50 cm³ este citată din studiile comparative.",
   "Răspunsul rapid în 24 de ore aparține α-blocantelor; întârzierea de luni este a finasteridei.",
   "Finasterida și dutasterida scad de obicei nivelul seric al PSA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează cinetica de răspuns α-blocant versus finasteridă și anulează regula de dublare a PSA."
  },
  "textbookExpressions": [
   "dihidrotestosteron",
   "<50 cm3"
  ]
 },
 {
  "id": "urologie-adv-006",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre tratamentul chirurgical al HBP:",
  "options": [
   "Abordul deschis sau robotic este ales, de obicei, pentru prostate peste 100 g",
   "Capsula prostatică nu este îndepărtată, iar continuitatea uretrală nu este afectată",
   "TURP rezecă țesutul obstructiv cu ansa de electrocauter până la capsulă",
   "Incizia transuretrală se poate practica la pacienții cu volum prostatic mic",
   "Continuitatea uretrală trebuie întreruptă pentru a enuclea adenomul"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Abordul deschis sau robotic este ales, de obicei, pentru prostate peste 100 g — Corect: Pragul >100 g pentru abord deschis/robotic este explicit.\n\nCapsula prostatică nu este îndepărtată, iar continuitatea uretrală nu este afectată — Corect: Textul precizează că respectiva capsulă nu se îndepărtează și că uretra rămâne continuă.\n\nTURP rezecă țesutul obstructiv cu ansa de electrocauter până la capsulă — Corect: Ansa de electrocauter până la capsulă definește TURP.\n\nIncizia transuretrală se poate practica la pacienții cu volum prostatic mic — Corect: Incizia transuretrală este rezervată volumului mic.\n\nContinuitatea uretrală trebuie întreruptă pentru a enuclea adenomul — Incorect: Textul afirmă opusul: continuitatea uretrală nu este afectată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 637, 638, HBP — Tratament chirurgical (pagini PDF: 308, 309).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    637,
    638
   ],
   "pdfPages": [
    308,
    309
   ],
   "section": "HBP — Tratament chirurgical"
  },
  "learningObjective": "Diferențierea enucleării cu păstrarea capsulei de rezecția transuretrală și de incizia pentru glande mici.",
  "optionRationales": [
   "Pragul >100 g pentru abord deschis/robotic este explicit.",
   "Textul precizează că respectiva capsulă nu se îndepărtează și că uretra rămâne continuă.",
   "Ansa de electrocauter până la capsulă definește TURP.",
   "Incizia transuretrală este rezervată volumului mic.",
   "Textul afirmă opusul: continuitatea uretrală nu este afectată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul final întrerupe uretra, deși enuclearea HBP păstrează capsula și continuitatea."
  },
  "textbookExpressions": [
   "100 g",
   "capsula prostatică"
  ]
 },
 {
  "id": "urologie-adv-007",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații privind epidemiologia carcinomului prostatic și antigenul specific prostatic sunt adevărate?",
  "options": [
   "Peste 95% dintre neoplaziile prostatice sunt adenocarcinoame acinare",
   "La autopsie, adenocarcinomul este identificat la 30% dintre bărbații peste 50 de ani și la 70% peste 80 de ani",
   "PSA-ul este specific prostatei, dar nu este specific cancerului de prostată",
   "HBP și carcinomul prostatic au o relație cauzală demonstrată",
   "Screening-ul a crescut mortalitatea prin cancer de prostată cu aproximativ 40%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Peste 95% dintre neoplaziile prostatice sunt adenocarcinoame acinare — Corect: Proporția de peste 95% adenocarcinoame acinare este explicită.\n\nLa autopsie, adenocarcinomul este identificat la 30% dintre bărbații peste 50 de ani și la 70% peste 80 de ani — Corect: Cifrele de autopsie 30% și 70% sunt citate.\n\nPSA-ul este specific prostatei, dar nu este specific cancerului de prostată — Corect: Textul disociază specificitatea de organ de specificitatea de cancer.\n\nHBP și carcinomul prostatic au o relație cauzală demonstrată — Incorect: Cancerul și HBP pot coexista, dar aparent nu există relație de cauzalitate.\n\nScreening-ul a crescut mortalitatea prin cancer de prostată cu aproximativ 40% — Incorect: Decesele au scăzut cu aproximativ 40% după răspândirea screening-ului, nu au crescut.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 638, Carcinom prostatic — Epidemiologie și PSA (pagini PDF: 309).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    638
   ],
   "pdfPages": [
    309
   ],
   "section": "Carcinom prostatic — Epidemiologie și PSA"
  },
  "learningObjective": "Recunoașterea discrepanței autopsie versus boală clinică și a lipsei de specificitate oncologică a PSA.",
  "optionRationales": [
   "Proporția de peste 95% adenocarcinoame acinare este explicită.",
   "Cifrele de autopsie 30% și 70% sunt citate.",
   "Textul disociază specificitatea de organ de specificitatea de cancer.",
   "Cancerul și HBP pot coexista, dar aparent nu există relație de cauzalitate.",
   "Decesele au scăzut cu aproximativ 40% după răspândirea screening-ului, nu au crescut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează direcția efectului screening-ului asupra mortalității și inventează cauzalitatea HBP–cancer."
  },
  "textbookExpressions": [
   "adenocarcinoame",
   "zona periferică"
  ]
 },
 {
  "id": "urologie-adv-008",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Un scor Gleason de 9 este clasificat drept carcinom:",
  "options": [
   "Bine diferențiat",
   "Slab diferențiat",
   "Moderat diferențiat",
   "Echivalent al scorurilor 2–4 din screening",
   "Carcinom in situ, fără invazie stromală"
  ],
  "correct": [
   1
  ],
  "explanation": "Bine diferențiat — Incorect: Intervalul 2–4 definește forma bine diferențiată, nu scorul 9.\n\nSlab diferențiat — Corect: Textul încadrează scorurile 8–10 ca slab diferențiate.\n\nModerat diferențiat — Incorect: Intervalul 5–7 (și, în screening, 4–6) corespunde formei moderat diferențiate.\n\nEchivalent al scorurilor 2–4 din screening — Incorect: Screeningul descoperă mai ales scoruri 4–6, nu echivalează 9 cu această categorie.\n\nCarcinom in situ, fără invazie stromală — Incorect: Gleason descrie adenocarcinom invaziv gradat, nu carcinom in situ.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 639, Carcinom prostatic — Scorul Gleason (pagini PDF: 310).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    639
   ],
   "pdfPages": [
    310
   ],
   "section": "Carcinom prostatic — Scorul Gleason"
  },
  "learningObjective": "Încadrarea intervalelor Gleason 2–4 / 5–7 / 8–10, fără confuzia cu scorurile 4–6 descoperite la screening.",
  "optionRationales": [
   "Intervalul 2–4 definește forma bine diferențiată, nu scorul 9.",
   "Textul încadrează scorurile 8–10 ca slab diferențiate.",
   "Intervalul 5–7 (și, în screening, 4–6) corespunde formei moderat diferențiate.",
   "Screeningul descoperă mai ales scoruri 4–6, nu echivalează 9 cu această categorie.",
   "Gleason descrie adenocarcinom invaziv gradat, nu carcinom in situ."
  ],
  "difficulty": {
   "score": 9,
   "kind": "editorial-estimate",
   "reason": "Amestecă intervalul 8–10 cu 4–6 din screening și cu 2–4 „bine diferențiat”, trei benzi numerice alăturate."
  },
  "textbookExpressions": [
   "scorul Gleason",
   "slab diferenţiat"
  ]
 },
 {
  "id": "urologie-adv-009",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Cancerul de prostată în stadiu localizat:",
  "options": [
   "La speranță de viață sub 10 ani, monitorizarea fără tratament activ („watchful waiting”) poate fi indicată",
   "Supravegherea activă este preferată la risc scăzut (Gleason ≤6) și speranță de viață mai mare",
   "Crioterapia oferă rezultate superioare metodelor curative pentru tumorile intracapsulare",
   "Brahiterapia cu iod-125 sau paladiu-103 este rezervată doar riscului înalt",
   "Prezervarea bandeletelor neuro-vasculare nu poate menține potența"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "La speranță de viață sub 10 ani, monitorizarea fără tratament activ („watchful waiting”) poate fi indicată — Corect: Pragul <10 ani pentru watchful waiting este explicit.\n\nSupravegherea activă este preferată la risc scăzut (Gleason ≤6) și speranță de viață mai mare — Corect: Active surveillance este descrisă pentru Gleason ≤6, cu PSA, tușeu și biopsii la nevoie.\n\nCrioterapia oferă rezultate superioare metodelor curative pentru tumorile intracapsulare — Incorect: Crioterapia oferă rezultate inferioare metodelor anterioare pentru tumorile localizate.\n\nBrahiterapia cu iod-125 sau paladiu-103 este rezervată doar riscului înalt — Incorect: Brahiterapia este o opțiune la risc scăzut și intermediar.\n\nPrezervarea bandeletelor neuro-vasculare nu poate menține potența — Incorect: Potența poate fi păstrată în aproximativ două treimi din cazuri prin prezervarea bandeletelor.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 640, Cancer de prostată localizat — Opțiuni (pagini PDF: 311).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    640
   ],
   "pdfPages": [
    311
   ],
   "section": "Cancer de prostată localizat — Opțiuni"
  },
  "learningObjective": "Diferențierea watchful waiting de active surveillance și recunoașterea limitei crioterapiei față de brahiterapie.",
  "optionRationales": [
   "Pragul <10 ani pentru watchful waiting este explicit.",
   "Active surveillance este descrisă pentru Gleason ≤6, cu PSA, tușeu și biopsii la nevoie.",
   "Crioterapia oferă rezultate inferioare metodelor anterioare pentru tumorile localizate.",
   "Brahiterapia este o opțiune la risc scăzut și intermediar.",
   "Potența poate fi păstrată în aproximativ două treimi din cazuri prin prezervarea bandeletelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Promovează crioterapia ca superioară și limitează greșit brahiterapia la riscul înalt."
  },
  "textbookExpressions": [
   "watchful waiting",
   "iod-125"
  ]
 },
 {
  "id": "urologie-adv-010",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Următoarele afirmații despre cancerul de prostată metastatic sunt adevărate:",
  "options": [
   "Tratamentul principal este deprivarea androgenică",
   "Supresia testosteronului se obține prin orhidectomie bilaterală sau analogi de LHRH",
   "Estrogenii reduc testosteronul, dar asociază efecte cardiovasculare la aproximativ 20% dintre pacienți",
   "Peste jumătate din androgenii circulanți provin din glandele suprarenale",
   "Răspunsul hormonal durează, de regulă, 5–7 ani înainte de progresie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tratamentul principal este deprivarea androgenică — Corect: Dependența de androgeni și deprivarea ca tratament principal sunt explicite.\n\nSupresia testosteronului se obține prin orhidectomie bilaterală sau analogi de LHRH — Corect: Cele două căi de supresie sunt enumerate.\n\nEstrogenii reduc testosteronul, dar asociază efecte cardiovasculare la aproximativ 20% dintre pacienți — Corect: Rata de aproximativ 20% a efectelor cardiovasculare ale estrogenilor este citată.\n\nPeste jumătate din androgenii circulanți provin din glandele suprarenale — Incorect: Textul precizează că mai puțin de 10% din androgenii circulanți sunt produși suprarenal.\n\nRăspunsul hormonal durează, de regulă, 5–7 ani înainte de progresie — Incorect: Durata tipică de răspuns este 18–24 de luni, nu 5–7 ani.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 641, Cancer de prostată — Stadiul metastatic (pagini PDF: 312).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    641
   ],
   "pdfPages": [
    312
   ],
   "section": "Cancer de prostată — Stadiul metastatic"
  },
  "learningObjective": "Aplicarea castrării chirurgicale sau chimice și a duratei de răspuns 18–24 de luni, față de ponderea androgenilor suprarenali.",
  "optionRationales": [
   "Dependența de androgeni și deprivarea ca tratament principal sunt explicite.",
   "Cele două căi de supresie sunt enumerate.",
   "Rata de aproximativ 20% a efectelor cardiovasculare ale estrogenilor este citată.",
   "Textul precizează că mai puțin de 10% din androgenii circulanți sunt produși suprarenal.",
   "Durata tipică de răspuns este 18–24 de luni, nu 5–7 ani."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă contribuția suprarenală de la <10% la peste jumătate și prelungește fereastra hormonală de la 18–24 de luni."
  },
  "textbookExpressions": [
   "18-24 de luni",
   "castrare chimică"
  ]
 },
 {
  "id": "urologie-adv-011",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Rinichiul normal se caracterizează prin:",
  "options": [
   "Este situat retroperitoneal, paralel cu ultima vertebră toracică și cu L1–L3",
   "Rinichiul stâng este situat puțin mai cranial decât cel drept",
   "Rinichiul drept este situat cranial față de cel stâng, sub splină",
   "Are circa 11 cm lungime, 6 cm lățime, 3 cm grosime, cu 150 g la bărbat și 135 g la femeie",
   "Este lipsit de capsulă fibroasă, fiind acoperit doar de peritoneu"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Este situat retroperitoneal, paralel cu ultima vertebră toracică și cu L1–L3 — Corect: Localizarea retroperitoneală și nivelul vertebral sunt descrise.\n\nRinichiul stâng este situat puțin mai cranial decât cel drept — Corect: Textul precizează că rinichiul stâng este puțin mai cranial.\n\nRinichiul drept este situat cranial față de cel stâng, sub splină — Incorect: Rinichiul drept are raport cu ficatul și duodenul; cel stâng, nu dreptul, este mai cranial.\n\nAre circa 11 cm lungime, 6 cm lățime, 3 cm grosime, cu 150 g la bărbat și 135 g la femeie — Corect: Cifrele 11×6×3 cm și greutățile 150/135 g sunt explicite.\n\nEste lipsit de capsulă fibroasă, fiind acoperit doar de peritoneu — Incorect: Rinichiul este acoperit de o capsulă fibroasă în contact intim cu corticala.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 641, Rinichii — Anatomie (pagini PDF: 312).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    641
   ],
   "pdfPages": [
    312
   ],
   "section": "Rinichii — Anatomie"
  },
  "learningObjective": "Fixarea poziției relative stâng-drept și a dimensiunilor, față de capsula fibroasă intimă cu corticala.",
  "optionRationales": [
   "Localizarea retroperitoneală și nivelul vertebral sunt descrise.",
   "Textul precizează că rinichiul stâng este puțin mai cranial.",
   "Rinichiul drept are raport cu ficatul și duodenul; cel stâng, nu dreptul, este mai cranial.",
   "Cifrele 11×6×3 cm și greutățile 150/135 g sunt explicite.",
   "Rinichiul este acoperit de o capsulă fibroasă în contact intim cu corticala."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează asimetria cranio-caudală stâng/drept, capcană anatomică frecventă."
  },
  "textbookExpressions": [
   "150 g la bărbaţi",
   "135 g la femei"
  ]
 },
 {
  "id": "urologie-adv-012",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Indicațiile imagisticii în traumatismul renal închis:",
  "options": [
   "Traumatismele închise însumează 70–80% din traumatismele renale",
   "La adultul cu microhematurie, fără decelerare importantă și fără hipotensiune, imagistica poate să nu fie necesară",
   "La copilul cu decelerare importantă, examenul de urină normal exclude avulsia joncțiunii pielo-ureterale",
   "Hematuria macroscopică la adult nu justifică imagistica dacă tensiunea este păstrată",
   "Mecanismul tipic este traumatismul penetrant, nu cel închis"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Traumatismele închise însumează 70–80% din traumatismele renale — Corect: Ponderea 70–80% a traumatismelor închise este explicită.\n\nLa adultul cu microhematurie, fără decelerare importantă și fără hipotensiune, imagistica poate să nu fie necesară — Corect: Textul scutește de imagistică adultul cu microhematurie fără decelerare importantă și fără hipotensiune.\n\nLa copilul cu decelerare importantă, examenul de urină normal exclude avulsia joncțiunii pielo-ureterale — Incorect: Avulsia joncțiunii pielo-ureterale la copil poate coexistă cu examen de urină normal.\n\nHematuria macroscopică la adult nu justifică imagistica dacă tensiunea este păstrată — Incorect: Hematuria macroscopică, hipotensiunea sau decelerarea importantă impun imagistică.\n\nMecanismul tipic este traumatismul penetrant, nu cel închis — Incorect: Forma închisă, nu cea penetrantă, reprezintă 70–80% din total.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 642, Traumatisme renale — Evaluare (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    642
   ],
   "pdfPages": [
    313
   ],
   "section": "Traumatisme renale — Evaluare"
  },
  "learningObjective": "Aplicarea criteriilor de imagistică (macrohematurie, hipotensiune, decelerare) și a excepției pediatrice cu urină normală.",
  "optionRationales": [
   "Ponderea 70–80% a traumatismelor închise este explicită.",
   "Textul scutește de imagistică adultul cu microhematurie fără decelerare importantă și fără hipotensiune.",
   "Avulsia joncțiunii pielo-ureterale la copil poate coexistă cu examen de urină normal.",
   "Hematuria macroscopică, hipotensiunea sau decelerarea importantă impun imagistică.",
   "Forma închisă, nu cea penetrantă, reprezintă 70–80% din total."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Folosește urina „normală” ca argument fals de liniștire în avulsia pediatrică de joncțiune."
  },
  "textbookExpressions": [
   "70-80%",
   "hematurie macroscopică"
  ]
 },
 {
  "id": "urologie-adv-013",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Identificați afirmațiile corecte privind clasificarea și explorarea traumatismelor renale:",
  "options": [
   "În lacerațiile minore leziunea nu depășește corticala, fără extravazare urinară sau hematom important",
   "Lacerațiile majore interesează capsula și joncțiunea corticomedulară, adesea cu extravazare și hematom voluminos",
   "Pacientul instabil hemodinamic necesită laparotomie; UIV „dintr-o filmare” folosește 2 mL/kg contrast și un film la 10 minute",
   "Vasele renale se izolează înaintea mobilizării colonului, pentru a limita exsanguinarea",
   "Pacientul stabil cu traumatism închis se explorează chirurgical de principiu, indiferent de CT"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "În lacerațiile minore leziunea nu depășește corticala, fără extravazare urinară sau hematom important — Corect: Criteriile laceratiei minore sunt enumerate explicit.\n\nLacerațiile majore interesează capsula și joncțiunea corticomedulară, adesea cu extravazare și hematom voluminos — Corect: Interesarea capsulei și a joncțiunii corticomedulare definește forma majoră.\n\nPacientul instabil hemodinamic necesită laparotomie; UIV „dintr-o filmare” folosește 2 mL/kg contrast și un film la 10 minute — Corect: Doza 2 mL/kg și filmul la 10 minute sunt protocolul UIV la instabil.\n\nVasele renale se izolează înaintea mobilizării colonului, pentru a limita exsanguinarea — Corect: Izolarea vaselor înaintea mobilizării colonului este descrisă ca protecție împotriva hemoragiei.\n\nPacientul stabil cu traumatism închis se explorează chirurgical de principiu, indiferent de CT — Incorect: Tendința este tratamentul conservator cât timp pacientul rămâne stabil hemodinamic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 643, Traumatisme renale — Clasificare și tratament (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    643
   ],
   "pdfPages": [
    314
   ],
   "section": "Traumatisme renale — Clasificare și tratament"
  },
  "learningObjective": "Separarea laceratiei minore de cea majoră și a algoritmului instabil (UIV 2 mL/kg) de conservatorismul la pacientul stabil.",
  "optionRationales": [
   "Criteriile laceratiei minore sunt enumerate explicit.",
   "Interesarea capsulei și a joncțiunii corticomedulare definește forma majoră.",
   "Doza 2 mL/kg și filmul la 10 minute sunt protocolul UIV la instabil.",
   "Izolarea vaselor înaintea mobilizării colonului este descrisă ca protecție împotriva hemoragiei.",
   "Tendința este tratamentul conservator cât timp pacientul rămâne stabil hemodinamic."
  ],
  "difficulty": {
   "score": 9,
   "kind": "editorial-estimate",
   "reason": "Combină pragul de contrast al UIV intraoperatorii cu secvența vasculară înaintea colonului, două detalii ușor de oglindit."
  },
  "textbookExpressions": [
   "2 mL/kg",
   "hematomul retroperitoneal"
  ]
 },
 {
  "id": "urologie-adv-014",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Malformațiile congenitale reno-ureterale:",
  "options": [
   "Rinichiul în potcoavă are incidența 1:400–1:1.800, este cea mai frecventă anomalie de fuziune și afectează precumpănitor polul inferior",
   "În copilărie, stenoza de joncțiune pielo-ureterală este cauzată cel mai frecvent de obstrucție intrinsecă prin dezvoltare incompletă",
   "La adolescent și adult, cauza mai probabilă este un vas aberant care comprimă joncțiunea",
   "Rinichiul în potcoavă fuzionează aproape constant la polul superior",
   "Afectarea bilaterală a joncțiunii pielo-ureterale apare în 80–90% din cazuri"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Rinichiul în potcoavă are incidența 1:400–1:1.800, este cea mai frecventă anomalie de fuziune și afectează precumpănitor polul inferior — Corect: Intervalul 1:400–1:1.800, caracterul de fuziune cea mai frecventă și polul inferior sunt explicite.\n\nÎn copilărie, stenoza de joncțiune pielo-ureterală este cauzată cel mai frecvent de obstrucție intrinsecă prin dezvoltare incompletă — Corect: Obstrucția intrinsecă prin dezvoltare incompletă este cauza pediatrică principală.\n\nLa adolescent și adult, cauza mai probabilă este un vas aberant care comprimă joncțiunea — Corect: Vasul aberant este cauza mai probabilă la adolescent și adult.\n\nRinichiul în potcoavă fuzionează aproape constant la polul superior — Incorect: Textul precizează afectarea precumpănitoare a polului inferior, nu a celui superior.\n\nAfectarea bilaterală a joncțiunii pielo-ureterale apare în 80–90% din cazuri — Incorect: Afectarea bilaterală apare în 10–40% din cazuri, nu în 80–90%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 643, Malformații — Rinichi în potcoavă și stenoza de joncțiune (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    643
   ],
   "pdfPages": [
    314
   ],
   "section": "Malformații — Rinichi în potcoavă și stenoza de joncțiune"
  },
  "learningObjective": "Diferențierea cauzei intrinseci pediatrice de vasul aberant al adultului și recunoașterea fuziunii la polul inferior.",
  "optionRationales": [
   "Intervalul 1:400–1:1.800, caracterul de fuziune cea mai frecventă și polul inferior sunt explicite.",
   "Obstrucția intrinsecă prin dezvoltare incompletă este cauza pediatrică principală.",
   "Vasul aberant este cauza mai probabilă la adolescent și adult.",
   "Textul precizează afectarea precumpănitoare a polului inferior, nu a celui superior.",
   "Afectarea bilaterală apare în 10–40% din cazuri, nu în 80–90%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută fuziunea la polul superior și umflă bilateritatea de la 10–40% la 80–90%."
  },
  "textbookExpressions": [
   "Rinichiul în potcoavă",
   "joncţiunii pielo-ureterale"
  ]
 },
 {
  "id": "urologie-adv-015",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Un pacient febril, cu durere de flanc și calcul ureteral obstructiv. Conduita inițială corectă este:",
  "options": [
   "Antibioterapie plus dezobstrucție prin stent dublu J sau nefrostomie; extracția calculului nu este manevra inițială",
   "Ureteroscopie cu extracția imediată a calculului, pentru a înlătura focarul",
   "Antibiotice orale în ambulatoriu, ca în pielonefrita necomplicată",
   "Nefrectomie de urgență, ca în forma emfizematoasă",
   "Litotriție extracorporeală în faza septică, urmată de antibiotice"
  ],
  "correct": [
   0
  ],
  "explanation": "Antibioterapie plus dezobstrucție prin stent dublu J sau nefrostomie; extracția calculului nu este manevra inițială — Corect: Textul impune drenaj rapid (stent sau nefrostomie) și contraindică extracția ca tratament inițial.\n\nUreteroscopie cu extracția imediată a calculului, pentru a înlătura focarul — Incorect: Manevrele de extragere pot agrava starea septică și sunt contraindicate inițial.\n\nAntibiotice orale în ambulatoriu, ca în pielonefrita necomplicată — Incorect: Forma necomplicată, nu cea obstructivă, se tratează oral în ambulatoriu.\n\nNefrectomie de urgență, ca în forma emfizematoasă — Incorect: Nefrectomia de urgență aparține pielonefritei emfizematoase, nu obstructivității litiazice.\n\nLitotriție extracorporeală în faza septică, urmată de antibiotice — Incorect: ESWL nu este tratamentul fazei septice obstructive.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 644, 647, Pielonefrita acută obstructivă (pagini PDF: 315, 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    644,
    647
   ],
   "pdfPages": [
    315,
    318
   ],
   "section": "Pielonefrita acută obstructivă"
  },
  "learningObjective": "Recunoașterea urgenței de drenaj, nu de extracție, în „puroiul sub presiune” al pielonefritei obstructive.",
  "optionRationales": [
   "Textul impune drenaj rapid (stent sau nefrostomie) și contraindică extracția ca tratament inițial.",
   "Manevrele de extragere pot agrava starea septică și sunt contraindicate inițial.",
   "Forma necomplicată, nu cea obstructivă, se tratează oral în ambulatoriu.",
   "Nefrectomia de urgență aparține pielonefritei emfizematoase, nu obstructivității litiazice.",
   "ESWL nu este tratamentul fazei septice obstructive."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oferă extracția endoscopică „ca să scoți focarul”, inversul explicit al textului."
  },
  "textbookExpressions": [
   "stent ureteral",
   "pielonefrită acută obstructivă"
  ]
 },
 {
  "id": "urologie-adv-016",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la pielonefrita emfizematoasă și la forma xantogranulomatoasă:",
  "options": [
   "Forma emfizematoasă produce gaz în parenchim, are ca factor de risc diabetul necontrolat, iar nefrectomia de urgență rămâne opțiunea de primă intenție",
   "PXG afectează precumpănitor femeile (75%) în decadele 5–7; rinichiul este de obicei nefuncțional, iar tratamentul este cel mai frecvent nefrectomia",
   "Drenajul percutanat a înlocuit nefrectomia ca tratament de primă intenție în forma emfizematoasă",
   "PXG este o boală predominant masculină a decadei a treia",
   "Rinichiul din PXG păstrează, de regulă, o funcție aproape normală"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Forma emfizematoasă produce gaz în parenchim, are ca factor de risc diabetul necontrolat, iar nefrectomia de urgență rămâne opțiunea de primă intenție — Corect: Gazul, diabetul necontrolat și nefrectomia de urgență ca primă intenție sunt explicite.\n\nPXG afectează precumpănitor femeile (75%) în decadele 5–7; rinichiul este de obicei nefuncțional, iar tratamentul este cel mai frecvent nefrectomia — Corect: Predominanța feminină 75%, decadele 5–7, rinichiul nefuncțional și nefrectomia sunt citate.\n\nDrenajul percutanat a înlocuit nefrectomia ca tratament de primă intenție în forma emfizematoasă — Incorect: Drenajul percutanat a fost sugerat ca alternativă, dar nefrectomia rămâne opțiunea de primă intenție.\n\nPXG este o boală predominant masculină a decadei a treia — Incorect: Textul indică 75% femei, nu predominanță masculină tânără.\n\nRinichiul din PXG păstrează, de regulă, o funcție aproape normală — Incorect: Rinichiul afectat este, de obicei, nefuncțional.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 645, 644, Pielonefrita emfizematoasă și xantogranulomatoasă (pagini PDF: 316, 315).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    645,
    644
   ],
   "pdfPages": [
    316,
    315
   ],
   "section": "Pielonefrita emfizematoasă și xantogranulomatoasă"
  },
  "learningObjective": "Separarea urgenței nefrectomiei din forma gazoasă de nefrectomia tehnic dificilă din PXG a femeii de vârstă mijlocie.",
  "optionRationales": [
   "Gazul, diabetul necontrolat și nefrectomia de urgență ca primă intenție sunt explicite.",
   "Predominanța feminină 75%, decadele 5–7, rinichiul nefuncțional și nefrectomia sunt citate.",
   "Drenajul percutanat a fost sugerat ca alternativă, dar nefrectomia rămâne opțiunea de primă intenție.",
   "Textul indică 75% femei, nu predominanță masculină tânără.",
   "Rinichiul afectat este, de obicei, nefuncțional."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sexul și funcția renală în PXG și promovează drenajul ca înlocuitor al nefrectomiei emfizematoase."
  },
  "textbookExpressions": [
   "nefrectomia de urgenţă",
   "75% din cazuri"
  ]
 },
 {
  "id": "urologie-adv-017",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Tuberculoza genito-urinară:",
  "options": [
   "Polakiuria nedureroasă, în special nocturnă, este frecvent întâlnită",
   "Piuria sterilă trebuie să ridice suspiciunea de tuberculoză",
   "Diagnosticul definitiv se stabilește prin urocultură cu izolare de Mycobacterium tuberculosis",
   "Un test cutanat PPD pozitiv confirmă boala activă",
   "Tratamentul începe cu nefrectomie, urmată de antituberculoase doar dacă persistă piuria"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Polakiuria nedureroasă, în special nocturnă, este frecvent întâlnită — Corect: Polakiuria nedureroasă nocturnă este descrisă ca frecventă.\n\nPiuria sterilă trebuie să ridice suspiciunea de tuberculoză — Corect: Textul cere suspiciune la pacientul cu piurie sterilă.\n\nDiagnosticul definitiv se stabilește prin urocultură cu izolare de Mycobacterium tuberculosis — Corect: Izolarea de M. tuberculosis din urină este diagnosticul definitiv.\n\nUn test cutanat PPD pozitiv confirmă boala activă — Incorect: Un test PPD pozitiv nu indică neapărat boală activă.\n\nTratamentul începe cu nefrectomie, urmată de antituberculoase doar dacă persistă piuria — Incorect: Gestionarea începe cu tratamentul medicamentos antituberculos; nefrectomia este ulterioară, selectivă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 645, Tuberculoza genito-urinară (pagini PDF: 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    645
   ],
   "pdfPages": [
    316
   ],
   "section": "Tuberculoza genito-urinară"
  },
  "learningObjective": "Recunoașterea piuriei sterile și a culturii ca diagnostic definitiv, față de PPD și de prioritatea medicală.",
  "optionRationales": [
   "Polakiuria nedureroasă nocturnă este descrisă ca frecventă.",
   "Textul cere suspiciune la pacientul cu piurie sterilă.",
   "Izolarea de M. tuberculosis din urină este diagnosticul definitiv.",
   "Un test PPD pozitiv nu indică neapărat boală activă.",
   "Gestionarea începe cu tratamentul medicamentos antituberculos; nefrectomia este ulterioară, selectivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă PPD-ul pozitiv în dovadă de boală activă și inversează ordinea medical-chirurgicală."
  },
  "textbookExpressions": [
   "Mycobacterium tuberculosis",
   "antituberculos"
  ]
 },
 {
  "id": "urologie-adv-018",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Tumorile renale:",
  "options": [
   "Chistul simplu este leziunea tisulară renală cea mai des întâlnită (70% din cazuri)",
   "Carcinomul cu celule clare reprezintă peste 85% dintre cancerele renale primare la adult",
   "Triada clasică (durere în flanc, masă, hematurie) este prezentă rar în întregime",
   "Angiomiolipomul este recunoscut tomografic prin grăsimea care apare neagră",
   "Arteriografia rămâne investigația preoperatorie standard la toți pacienții cu masă renală"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Chistul simplu este leziunea tisulară renală cea mai des întâlnită (70% din cazuri) — Corect: Ponderea de 70% a chistului simplu este explicită.\n\nCarcinomul cu celule clare reprezintă peste 85% dintre cancerele renale primare la adult — Corect: Pragul >85% pentru CRCC este citat.\n\nTriada clasică (durere în flanc, masă, hematurie) este prezentă rar în întregime — Corect: Textul precizează că pacienții prezintă rareori toate cele trei semne.\n\nAngiomiolipomul este recunoscut tomografic prin grăsimea care apare neagră — Corect: Grăsimea neagră pe CT într-o masă renală indică aproape sigur angiomiolipom.\n\nArteriografia rămâne investigația preoperatorie standard la toți pacienții cu masă renală — Incorect: Arteriografia este recomandată doar în cazuri selectate, nu ca standard universal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 645, Tumori renale — Evaluare și leziuni benigne (pagini PDF: 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    645
   ],
   "pdfPages": [
    316
   ],
   "section": "Tumori renale — Evaluare și leziuni benigne"
  },
  "learningObjective": "Ierarhizarea chistului simplu, a CRCC și a criteriului de grăsime al angiomiolipomului, față de arteriografia rezervată cazurilor selectate.",
  "optionRationales": [
   "Ponderea de 70% a chistului simplu este explicită.",
   "Pragul >85% pentru CRCC este citat.",
   "Textul precizează că pacienții prezintă rareori toate cele trei semne.",
   "Grăsimea neagră pe CT într-o masă renală indică aproape sigur angiomiolipom.",
   "Arteriografia este recomandată doar în cazuri selectate, nu ca standard universal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează arteriografia ca „standard” din era anterioară, deși textul o limitează la cazuri incerte sau cu vase aberante."
  },
  "textbookExpressions": [
   "chistul simplu",
   "Angiomiolipomul"
  ]
 },
 {
  "id": "urologie-adv-019",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Carcinomul renal cu celule clare — tratament și diseminare:",
  "options": [
   "Tratamentul formei localizate este nefrectomia radicală sau parțială",
   "Nefrectomia parțială este preferată pentru tumorile mici, chiar și cu rinichi contralateral normal",
   "Metastazează cel mai adesea în plămâni, os și creier, în această ordine",
   "Supraviețuirea la 5 ani în stadiile III–IV este de 80–90%",
   "Nefrectomia radicală păstrează fascia Gerota și suprarenala ipsilaterală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tratamentul formei localizate este nefrectomia radicală sau parțială — Corect: Ambele tipuri de nefrectomie sunt indicate pentru forma localizată.\n\nNefrectomia parțială este preferată pentru tumorile mici, chiar și cu rinichi contralateral normal — Corect: Preferința pentru tumorile mici, independent de rinichiul contralateral, este explicită.\n\nMetastazează cel mai adesea în plămâni, os și creier, în această ordine — Corect: Ordinea plămân–os–creier este citată.\n\nSupraviețuirea la 5 ani în stadiile III–IV este de 80–90% — Incorect: 80–90% este supraviețuirea stadiilor I–II; III–IV au 40–60%.\n\nNefrectomia radicală păstrează fascia Gerota și suprarenala ipsilaterală — Incorect: Radicala îndepărtează rinichiul, grăsimea perirenală, fascia Gerota, suprarenala și ganglionii ipsilaterali.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 646, CRCC — Tratament și metastaze (pagini PDF: 317).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    646
   ],
   "pdfPages": [
    317
   ],
   "section": "CRCC — Tratament și metastaze"
  },
  "learningObjective": "Aplicarea ordinii de diseminare și a preferinței pentru nefrectomie parțială, față de cifrele de supraviețuire inversate pe stadii.",
  "optionRationales": [
   "Ambele tipuri de nefrectomie sunt indicate pentru forma localizată.",
   "Preferința pentru tumorile mici, independent de rinichiul contralateral, este explicită.",
   "Ordinea plămân–os–creier este citată.",
   "80–90% este supraviețuirea stadiilor I–II; III–IV au 40–60%.",
   "Radicala îndepărtează rinichiul, grăsimea perirenală, fascia Gerota, suprarenala și ganglionii ipsilaterali."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează supraviețuirile I–II versus III–IV și transformă piesa radicală într-o rezecție care păstrează fascia."
  },
  "textbookExpressions": [
   "80-90%",
   "Gerata"
  ]
 },
 {
  "id": "urologie-adv-020",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Compoziția și factorii de risc ai calculilor urinari:",
  "options": [
   "Majoritatea calculilor sunt compuși din oxalat de calciu",
   "Calculii de cistină apar în cistinurie, cu defect de reabsorbție a cistinei, ornitinei, lizinei și argininei",
   "Calculii de acid uric se asociază unui aport scăzut de purine și urinei alcaline",
   "Calculii de struvit (fosfat amonico-magnezian) se formează în urină sterilă, fără infecție",
   "Incidența maximă este după 70 de ani, cu predominanță feminină"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Majoritatea calculilor sunt compuși din oxalat de calciu — Corect: Predominanța oxalatului de calciu este explicită.\n\nCalculii de cistină apar în cistinurie, cu defect de reabsorbție a cistinei, ornitinei, lizinei și argininei — Corect: Cei patru aminoacizi ai cistinuriei sunt enumerați.\n\nCalculii de acid uric se asociază unui aport scăzut de purine și urinei alcaline — Incorect: Factorii pentru acid uric includ aportul ridicat de purine, guta, deshidratarea și hiperuricozuria.\n\nCalculii de struvit (fosfat amonico-magnezian) se formează în urină sterilă, fără infecție — Incorect: Struvitul este calculul de infecție, la pacienți cu ITU cronice sau catetere.\n\nIncidența maximă este după 70 de ani, cu predominanță feminină — Incorect: Predominanța este masculină, cu vârf între 30 și 50 de ani.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 647, Litiaza urinară — Tipuri de calculi (pagini PDF: 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    647
   ],
   "pdfPages": [
    318
   ],
   "section": "Litiaza urinară — Tipuri de calculi"
  },
  "learningObjective": "Potrivirea oxalatului ca majoritate și a tetralogiei COLA din cistinurie, față de struvitul infecțios și de vârful 30–50 de ani.",
  "optionRationales": [
   "Predominanța oxalatului de calciu este explicită.",
   "Cei patru aminoacizi ai cistinuriei sunt enumerați.",
   "Factorii pentru acid uric includ aportul ridicat de purine, guta, deshidratarea și hiperuricozuria.",
   "Struvitul este calculul de infecție, la pacienți cu ITU cronice sau catetere.",
   "Predominanța este masculină, cu vârf între 30 și 50 de ani."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie acidului uric dieta săracă în purine și struvitului urina sterilă, două inversiuni metabolice din același paragraf."
  },
  "textbookExpressions": [
   "oxalat de calciu",
   "fosfat amonico-magnezian"
  ]
 },
 {
  "id": "urologie-adv-021",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Investigația imagistică optimă pentru litiaza tractului urinar superior este:",
  "options": [
   "Tomografia computerizată fără substanță de contrast",
   "Radiografia renală simplă, care vizualizează și calculii de acid uric",
   "Ecografia renală, superioară CT-ului în vizualizarea ureterelor",
   "Urografia intravenoasă, înlocuitoarea actuală a CT-ului",
   "Rezonanța magnetică ca investigație de primă intenție la camera de gardă"
  ],
  "correct": [
   0
  ],
  "explanation": "Tomografia computerizată fără substanță de contrast — Corect: Textul numește CT-ul fără contrast investigația optimă.\n\nRadiografia renală simplă, care vizualizează și calculii de acid uric — Incorect: Calculul de acid uric este transparent pe radiografia simplă.\n\nEcografia renală, superioară CT-ului în vizualizarea ureterelor — Incorect: Ecografia este lipsită de precizia anatomică a CT-ului, mai ales pe uretere.\n\nUrografia intravenoasă, înlocuitoarea actuală a CT-ului — Incorect: UIV este un test folosit în trecut, nu înlocuitorul actual al CT-ului.\n\nRezonanța magnetică ca investigație de primă intenție la camera de gardă — Incorect: IRM nu este descrisă ca investigație de primă intenție pentru colica litiazică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 647, Litiaza — Evaluare imagistică (pagini PDF: 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    647
   ],
   "pdfPages": [
    318
   ],
   "section": "Litiaza — Evaluare imagistică"
  },
  "learningObjective": "Recunoașterea CT-ului nativ ca standard, cu trucul calculului de acid uric radiotransparent dar alb pe CT.",
  "optionRationales": [
   "Textul numește CT-ul fără contrast investigația optimă.",
   "Calculul de acid uric este transparent pe radiografia simplă.",
   "Ecografia este lipsită de precizia anatomică a CT-ului, mai ales pe uretere.",
   "UIV este un test folosit în trecut, nu înlocuitorul actual al CT-ului.",
   "IRM nu este descrisă ca investigație de primă intenție pentru colica litiazică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Folosește radiotransparența de pe radiografia simplă ca și cum ar vizualiza acidul uric, deși CT-ul îl arată alb strălucitor."
  },
  "textbookExpressions": [
   "CT fără substanţă",
   "acid uric"
  ]
 },
 {
  "id": "urologie-adv-022",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Managementul litiazei urinare:",
  "options": [
   "Calculii ureterali sub 5 mm se elimină, de obicei, spontan",
   "Pielonefrita obstructivă se drenează de urgență; extracția calculului nu se încearcă în faza septică",
   "Laserul Holmium este tehnologia cea mai frecvent folosită pentru fragmentarea endoscopică",
   "Calculii de acid uric se pot dizolva prin alcalinizare urinară și aport crescut de lichide",
   "Chirurgia deschisă rămâne tratamentul de primă intenție al calculilor din bazinet"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Calculii ureterali sub 5 mm se elimină, de obicei, spontan — Corect: Pragul <5 mm pentru eliminarea spontană este explicit.\n\nPielonefrita obstructivă se drenează de urgență; extracția calculului nu se încearcă în faza septică — Corect: Drenajul fără manipulare a calculului în faza septică este reluat în capitolul de litiază.\n\nLaserul Holmium este tehnologia cea mai frecvent folosită pentru fragmentarea endoscopică — Corect: Holmium este numit tehnologia cea mai frecvent folosită la fragmentarea endoscopică.\n\nCalculii de acid uric se pot dizolva prin alcalinizare urinară și aport crescut de lichide — Corect: Acidul uric se dizolvă la pH crescut, cu alcalinizare și lichide.\n\nChirurgia deschisă rămâne tratamentul de primă intenție al calculilor din bazinet — Incorect: Chirurgia deschisă, frecventă în trecut, este rar indicată astăzi.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 647, 648, Litiaza — Tratament (pagini PDF: 318, 319).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    647,
    648
   ],
   "pdfPages": [
    318,
    319
   ],
   "section": "Litiaza — Tratament"
  },
  "learningObjective": "Ierarhizarea pasajului spontan, a drenajului septic, a laserului Holmium și a alcalinizării uratului, față de chirurgia deschisă rar indicată.",
  "optionRationales": [
   "Pragul <5 mm pentru eliminarea spontană este explicit.",
   "Drenajul fără manipulare a calculului în faza septică este reluat în capitolul de litiază.",
   "Holmium este numit tehnologia cea mai frecvent folosită la fragmentarea endoscopică.",
   "Acidul uric se dizolvă la pH crescut, cu alcalinizare și lichide.",
   "Chirurgia deschisă, frecventă în trecut, este rar indicată astăzi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Repune chirurgia deschisă ca primă intenție, deși textul o descrie ca rar indicată."
  },
  "textbookExpressions": [
   "laserul Holmium",
   "<5 mm"
  ]
 },
 {
  "id": "urologie-adv-023",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Anatomia ureterului intramural și prevenirea refluxului:",
  "options": [
   "Fiecare ureter parcurge oblic circa 1,5 cm prin peretele vezical",
   "Porțiunea inferioară este ancorată de teaca lui Waldeyer",
   "În absența contracției ureterale, presiunea vezicală comprimă lumenul submucos și previne refluxul",
   "Fibrele musculare din porțiunea intramurală sunt dispuse circular, concentric pe lumen",
   "CT și UIV sunt investigații slabe pentru diagnosticul obstrucției ureterale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Fiecare ureter parcurge oblic circa 1,5 cm prin peretele vezical — Corect: Traiectul oblic de 1,5 cm este explicit.\n\nPorțiunea inferioară este ancorată de teaca lui Waldeyer — Corect: Teaca lui Waldeyer este numită țesutul de susținere.\n\nÎn absența contracției ureterale, presiunea vezicală comprimă lumenul submucos și previne refluxul — Corect: Mecanismul de comprimare a submucoasei împotriva musculaturii vezicale este descris.\n\nFibrele musculare din porțiunea intramurală sunt dispuse circular, concentric pe lumen — Incorect: În apropierea vezicii și intramural, fibrele sunt dispuse paralel cu lumenul, nu circular.\n\nCT și UIV sunt investigații slabe pentru diagnosticul obstrucției ureterale — Incorect: Atât CT, cât și UIV sunt investigații excelente pentru obstrucția ureterală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 648, Ureterele — Anatomie și anti-reflux (pagini PDF: 319).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    648
   ],
   "pdfPages": [
    319
   ],
   "section": "Ureterele — Anatomie și anti-reflux"
  },
  "learningObjective": "Aplicarea lungimii intramurale și a mecanismului de comprimare submucoasă, față de dispoziția longitudinală a fibrelor distale.",
  "optionRationales": [
   "Traiectul oblic de 1,5 cm este explicit.",
   "Teaca lui Waldeyer este numită țesutul de susținere.",
   "Mecanismul de comprimare a submucoasei împotriva musculaturii vezicale este descris.",
   "În apropierea vezicii și intramural, fibrele sunt dispuse paralel cu lumenul, nu circular.",
   "Atât CT, cât și UIV sunt investigații excelente pentru obstrucția ureterală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește dispoziția paralelă a fibrelor intramurale cu un model circular, capcană de histologie ureterală."
  },
  "textbookExpressions": [
   "1,5 cm",
   "teaca lui Waldeyer"
  ]
 },
 {
  "id": "urologie-adv-024",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Nevoia de a urina este resimțită prima dată, la vezica normală, la un volum de:",
  "options": [
   "350–500 mL",
   "350–450 mL",
   "150–250 mL",
   "20–25 mL",
   "80–100 mL"
  ],
  "correct": [
   2
  ],
  "explanation": "350–500 mL — Incorect: 350–500 mL este volumul pe care vezica îl poate acumula fără creștere semnificativă a presiunii.\n\n350–450 mL — Incorect: 350–450 mL este volumul la care este sesizată umplerea certă.\n\n150–250 mL — Corect: Textul plasează prima nevoie de a urina la 150–250 mL.\n\n20–25 mL — Incorect: 20–25 mL/secundă este debitul maxim masculin, nu un volum vezical.\n\n80–100 mL — Incorect: 80–100 mL nu figurează ca prag al primei nevoi.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 650, Evaluare urodinamică — Volume vezicale (pagini PDF: 321).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    650
   ],
   "pdfPages": [
    321
   ],
   "section": "Evaluare urodinamică — Volume vezicale"
  },
  "learningObjective": "Separarea primului impuls (150–250 mL) de plenitudinea certă (350–450 mL) și de capacitatea fără creștere de presiune (350–500 mL).",
  "optionRationales": [
   "350–500 mL este volumul pe care vezica îl poate acumula fără creștere semnificativă a presiunii.",
   "350–450 mL este volumul la care este sesizată umplerea certă.",
   "Textul plasează prima nevoie de a urina la 150–250 mL.",
   "20–25 mL/secundă este debitul maxim masculin, nu un volum vezical.",
   "80–100 mL nu figurează ca prag al primei nevoi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Trei intervale volumetrice din același paragraf sunt ușor de permutat (capacitate, plenitudine, primul impuls)."
  },
  "textbookExpressions": [
   "150-250 mL",
   "350-500 mL"
  ]
 },
 {
  "id": "urologie-adv-025",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Refluxul vezico-ureteral primar:",
  "options": [
   "Rezultă dintr-un traiect intramural anormal de scurt, prin implantare laterală a mugurelui ureteral",
   "Gradele I și II se remit, de obicei, odată cu creșterea copilului",
   "Cistouretrografia micțională este investigația principală de diagnostic",
   "Prevalența la copiii evaluați pentru ITU este de circa 29–50%",
   "Ecografia renală și UIV sunt suficiente, singure, pentru diagnosticul RVU"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Rezultă dintr-un traiect intramural anormal de scurt, prin implantare laterală a mugurelui ureteral — Corect: Mecanismul de implantare laterală și tunelul scurt sunt explicite.\n\nGradele I și II se remit, de obicei, odată cu creșterea copilului — Corect: Remisia gradelor I–II odată cu maturizarea joncțiunii este descrisă.\n\nCistouretrografia micțională este investigația principală de diagnostic — Corect: CUGM este numită investigația principală.\n\nPrevalența la copiii evaluați pentru ITU este de circa 29–50% — Corect: Intervalul 29–50% este citat pentru copiii evaluați pentru ITU.\n\nEcografia renală și UIV sunt suficiente, singure, pentru diagnosticul RVU — Incorect: Ecografia și UIV arată dilatații, dar nu pot fi unica metodă de diagnostic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 650, Reflux vezico-ureteral — Diagnostic (pagini PDF: 321).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    650
   ],
   "pdfPages": [
    321
   ],
   "section": "Reflux vezico-ureteral — Diagnostic"
  },
  "learningObjective": "Legarea anatomiei de tunelul scurt de CUGM ca test principal și de remisia gradelor mici, față de limita ecografiei.",
  "optionRationales": [
   "Mecanismul de implantare laterală și tunelul scurt sunt explicite.",
   "Remisia gradelor I–II odată cu maturizarea joncțiunii este descrisă.",
   "CUGM este numită investigația principală.",
   "Intervalul 29–50% este citat pentru copiii evaluați pentru ITU.",
   "Ecografia și UIV arată dilatații, dar nu pot fi unica metodă de diagnostic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie ecografiei și UIV rolul de test diagnostic unic, pe care textul îl neagă."
  },
  "textbookExpressions": [
   "29-50%",
   "Cistouretrografia micţională"
  ]
 },
 {
  "id": "urologie-adv-026",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Corecția chirurgicală și endoscopică a refluxului vezico-ureteral:",
  "options": [
   "Reimplantarea urmărește un tunel intramural de 4–5 ori diametrul ureterului",
   "Injectarea de Deflux vindecă 70–91% dintre pacienții cu grade II–IV după o singură injecție",
   "Extrofia vezicală are incidența 1:1.000, cu predominanță feminină 3:1",
   "Deflux-ul vindecă sub 20% dintre refluxurile de grad II–IV",
   "Tunelul intramural trebuie scurtat sub diametrul ureterului pentru a reduce rezistența"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Reimplantarea urmărește un tunel intramural de 4–5 ori diametrul ureterului — Corect: Alungirea intramurală de 4–5 ori diametrul este obiectivul explicit al reimplantării.\n\nInjectarea de Deflux vindecă 70–91% dintre pacienții cu grade II–IV după o singură injecție — Corect: Intervalul 70–91% după o singură injecție la gradele II–IV este citat.\n\nExtrofia vezicală are incidența 1:1.000, cu predominanță feminină 3:1 — Incorect: Extrofia apare la 1:30.000 de nașteri, cu preponderență masculină 3:1.\n\nDeflux-ul vindecă sub 20% dintre refluxurile de grad II–IV — Incorect: Rata citată este 70–91%, nu sub 20%.\n\nTunelul intramural trebuie scurtat sub diametrul ureterului pentru a reduce rezistența — Incorect: Obiectivul este alungirea, nu scurtarea tunelului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 651, RVU — Reimplantare și Deflux (pagini PDF: 322).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    651
   ],
   "pdfPages": [
    322
   ],
   "section": "RVU — Reimplantare și Deflux"
  },
  "learningObjective": "Aplicarea raportului 4–5× diametru și a ratei Deflux, față de epidemiologia extrofiei (1:30.000, bărbați 3:1).",
  "optionRationales": [
   "Alungirea intramurală de 4–5 ori diametrul este obiectivul explicit al reimplantării.",
   "Intervalul 70–91% după o singură injecție la gradele II–IV este citat.",
   "Extrofia apare la 1:30.000 de nașteri, cu preponderență masculină 3:1.",
   "Rata citată este 70–91%, nu sub 20%.",
   "Obiectivul este alungirea, nu scurtarea tunelului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Importă epidemiologia extrofiei cu sex și incidență inversate, lângă un raport de tunel ușor de oglindit."
  },
  "textbookExpressions": [
   "4-5 ori diametrul",
   "Deflux"
  ]
 },
 {
  "id": "urologie-adv-027",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Ruptura vezicii urinare:",
  "options": [
   "Rupturile mici extraperitoneale se pot trata prin sondă Foley 1–2 săptămâni",
   "Rupturile intraperitoneale sau cele extraperitoneale mari/complicate necesită sutură cu fire resorbabile",
   "Filmul după golirea contrastului diagnostichează aproximativ 15% dintre rupturi",
   "Uretrografia retrogradă se face după cateterizare, dacă există sânge la meat",
   "Sutura vezicală se practică cu fire neresorbabile, pentru a preveni dehiscența"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Rupturile mici extraperitoneale se pot trata prin sondă Foley 1–2 săptămâni — Corect: Intervalul 1–2 săptămâni de Foley pentru rupturile mici extraperitoneale este explicit.\n\nRupturile intraperitoneale sau cele extraperitoneale mari/complicate necesită sutură cu fire resorbabile — Corect: Indicația chirurgicală și firele resorbabile sunt descrise.\n\nFilmul după golirea contrastului diagnostichează aproximativ 15% dintre rupturi — Corect: Filmul după îndepărtarea drenajului ajută la circa 15% dintre diagnostice.\n\nUretrografia retrogradă se face după cateterizare, dacă există sânge la meat — Incorect: Dacă se suspectează leziune uretrală (sânge la meat), uretrografia precede cateterizarea.\n\nSutura vezicală se practică cu fire neresorbabile, pentru a preveni dehiscența — Incorect: Textul cere fire resorbabile, nu neresorbabile.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 654, 653, Traumatismele vezicii — Tratament și cistografie (pagini PDF: 325, 324).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    654,
    653
   ],
   "pdfPages": [
    325,
    324
   ],
   "section": "Traumatismele vezicii — Tratament și cistografie"
  },
  "learningObjective": "Separarea tratamentului conservator extraperitoneal de sutura resorbabilă și de filmul post-golire care salvează 15% din diagnostice.",
  "optionRationales": [
   "Intervalul 1–2 săptămâni de Foley pentru rupturile mici extraperitoneale este explicit.",
   "Indicația chirurgicală și firele resorbabile sunt descrise.",
   "Filmul după îndepărtarea drenajului ajută la circa 15% dintre diagnostice.",
   "Dacă se suspectează leziune uretrală (sânge la meat), uretrografia precede cateterizarea.",
   "Textul cere fire resorbabile, nu neresorbabile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ordinea uretrografie–cateter la sângele de meat și materialul de sutură."
  },
  "textbookExpressions": [
   "15%",
   "1-2 săptămâni"
  ]
 },
 {
  "id": "urologie-adv-028",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Cistita bacteriană:",
  "options": [
   "Escherichia coli cauzează peste 80% din toate infecțiile de tract urinar",
   "Febra este neobișnuită în cistita necomplicată și poate indica infecția tractului superior",
   "Este mai frecventă la bărbați, din cauza uretrei lungi care favorizează ascenșiunea",
   "Simptomele dispar, cu terapie adecvată, abia după 3 săptămâni",
   "La femei, cauza tipică este golirea incompletă a vezicii, nu uretra scurtă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Escherichia coli cauzează peste 80% din toate infecțiile de tract urinar — Corect: Pragul de peste 80% pentru E. coli este explicit.\n\nFebra este neobișnuită în cistita necomplicată și poate indica infecția tractului superior — Corect: Textul leagă febra de posibila infecție a tractului superior.\n\nEste mai frecventă la bărbați, din cauza uretrei lungi care favorizează ascenșiunea — Incorect: Cistita este mult mai frecventă la femei, prin uretra mai scurtă.\n\nSimptomele dispar, cu terapie adecvată, abia după 3 săptămâni — Incorect: Simptomele ar trebui să dispară în 3–5 zile, nu în 3 săptămâni.\n\nLa femei, cauza tipică este golirea incompletă a vezicii, nu uretra scurtă — Incorect: Golirea incompletă explică cistita la bărbați; la femei calea este ascendentă prin uretra scurtă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 654, Cistita bacteriană (pagini PDF: 325).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    654
   ],
   "pdfPages": [
    325
   ],
   "section": "Cistita bacteriană"
  },
  "learningObjective": "Aplicarea ponderii E. coli și a febrei ca semnal de tract superior, față de patogenia diferită femeie/bărbat.",
  "optionRationales": [
   "Pragul de peste 80% pentru E. coli este explicit.",
   "Textul leagă febra de posibila infecție a tractului superior.",
   "Cistita este mult mai frecventă la femei, prin uretra mai scurtă.",
   "Simptomele ar trebui să dispară în 3–5 zile, nu în 3 săptămâni.",
   "Golirea incompletă explică cistita la bărbați; la femei calea este ascendentă prin uretra scurtă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sexul predilect și durată de răspuns 3–5 zile versus 3 săptămâni."
  },
  "textbookExpressions": [
   "Enterobacteriaceae",
   "80%"
  ]
 },
 {
  "id": "urologie-adv-029",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Cistita interstițială și fistulele vezicale:",
  "options": [
   "Cistita interstițială este un diagnostic de excludere, cu glomerulații și, rar, ulcerații Hunner",
   "Fistula entero-vezicală apare cel mai frecvent în diverticulită, neoplasme, Crohn și traumatisme penetrante",
   "Incontinența totală, cu scurgere continuă, este caracteristică unei fistule (de exemplu vezico-vaginale)",
   "Uroculturile din cistita interstițială sunt, în mod tipic, pozitive pentru bacterii",
   "Aerul vezical pe CT se caută după cateterizarea vezicii, care produce pneumaturia de diagnostic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cistita interstițială este un diagnostic de excludere, cu glomerulații și, rar, ulcerații Hunner — Corect: Diagnosticul de excludere, glomerulațiile și ulcerațiile Hunner sunt explicite.\n\nFistula entero-vezicală apare cel mai frecvent în diverticulită, neoplasme, Crohn și traumatisme penetrante — Corect: Cele patru situații etiologice sunt enumerate.\n\nIncontinența totală, cu scurgere continuă, este caracteristică unei fistule (de exemplu vezico-vaginale) — Corect: Incontinența totală este definită ca scurgere continuă, caracteristică fistulei.\n\nUroculturile din cistita interstițială sunt, în mod tipic, pozitive pentru bacterii — Incorect: Uroculturile pentru bacterii, virusuri și fungi sunt negative.\n\nAerul vezical pe CT se caută după cateterizarea vezicii, care produce pneumaturia de diagnostic — Incorect: CT-ul se face fără cateterizarea vezicii; aerul din vezică confirmă diagnosticul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 655, Cistita interstițială și fistula vezicală (pagini PDF: 326).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    655
   ],
   "pdfPages": [
    326
   ],
   "section": "Cistita interstițială și fistula vezicală"
  },
  "learningObjective": "Recunoașterea leziunilor Hunner, a etiologiilor fistulei entero-vezicale și a incontinenței totale ca semn de fistulă.",
  "optionRationales": [
   "Diagnosticul de excludere, glomerulațiile și ulcerațiile Hunner sunt explicite.",
   "Cele patru situații etiologice sunt enumerate.",
   "Incontinența totală este definită ca scurgere continuă, caracteristică fistulei.",
   "Uroculturile pentru bacterii, virusuri și fungi sunt negative.",
   "CT-ul se face fără cateterizarea vezicii; aerul din vezică confirmă diagnosticul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pozitivează urocultura din cistita interstițială și produce iatrogen „pneumaturia” prin cateter."
  },
  "textbookExpressions": [
   "leziuni Hunner",
   "pneumaturie"
  ]
 },
 {
  "id": "urologie-adv-030",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Tratamentul incontinenței urinare:",
  "options": [
   "Instabilitatea detrusorului fără obstrucție, malignitate, infecție sau cauză neurologică răspunde la oxibutinină",
   "Procedura Marshall-Marchetti-Krantz repoziționează colul și uretra pe fața posterioară a simfizei",
   "La bărbat, tonusul uretral scăzut se tratează prin sfincter urinar artificial",
   "În procedura Stamey se plasează o grefă Dacron lângă colul vezical",
   "Tractul urinar superior se evaluează de rutină la toate pacientele cu incontinență de efort"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Instabilitatea detrusorului fără obstrucție, malignitate, infecție sau cauză neurologică răspunde la oxibutinină — Corect: Oxibutinina este citată pentru relaxarea detrusorului instabil.\n\nProcedura Marshall-Marchetti-Krantz repoziționează colul și uretra pe fața posterioară a simfizei — Corect: Ancorarea pe simfiza pubiană definește MMK.\n\nLa bărbat, tonusul uretral scăzut se tratează prin sfincter urinar artificial — Corect: Proteza cu manșetă bulbară, rezervor și pompă scrotală este descrisă la bărbat.\n\nÎn procedura Stamey se plasează o grefă Dacron lângă colul vezical — Corect: Grefa vasculară Dacron din Stamey este explicită.\n\nTractul urinar superior se evaluează de rutină la toate pacientele cu incontinență de efort — Incorect: Tractul superior se evaluează doar dacă există o indicație, nu de rutină.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 656, Incontinența — Tratament chirurgical și medical (pagini PDF: 327).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    656
   ],
   "pdfPages": [
    327
   ],
   "section": "Incontinența — Tratament chirurgical și medical"
  },
  "learningObjective": "Potrivirea anticolinergicelor, a MMK, a sfincterului artificial masculin și a grefei Dacron din Stamey, față de imagistica superioară neselectivă.",
  "optionRationales": [
   "Oxibutinina este citată pentru relaxarea detrusorului instabil.",
   "Ancorarea pe simfiza pubiană definește MMK.",
   "Proteza cu manșetă bulbară, rezervor și pompă scrotală este descrisă la bărbat.",
   "Grefa vasculară Dacron din Stamey este explicită.",
   "Tractul superior se evaluează doar dacă există o indicație, nu de rutină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde evaluarea tractului superior la toate incontinențele de efort, deși textul o rezervă indicațiilor."
  },
  "textbookExpressions": [
   "Marshall-Marchetti-Krantz",
   "sfincter urinar"
  ]
 },
 {
  "id": "urologie-adv-031",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Inervația vezicii și vezica neurologică neinhibată:",
  "options": [
   "Detrusorul are inervație parasimpatică, mai ales din S3 și o parte din S4",
   "Trigonul și colul vezical sunt sub control simpatic T11–L2",
   "Sfincterul extern este inervat în principal de la S2, prin nervul rușinos",
   "Vezica neinhibată se asociază cu accidentul vascular, paralizia cerebrală, demența și scleroza multiplă",
   "Micțiunea normală începe cu contracția detrusorului, sfincterul rămânând contractat până la golirea completă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Detrusorul are inervație parasimpatică, mai ales din S3 și o parte din S4 — Corect: Originea parasimpatică S3 și parțial S4 este explicită.\n\nTrigonul și colul vezical sunt sub control simpatic T11–L2 — Corect: Controlul simpatic T11–L2 al trigonului și colului este citat.\n\nSfincterul extern este inervat în principal de la S2, prin nervul rușinos — Corect: S2 prin nervul rușinos este inervația sfincterului extern.\n\nVezica neinhibată se asociază cu accidentul vascular, paralizia cerebrală, demența și scleroza multiplă — Corect: Lista de leziuni cerebrale ale vezicii neinhibate este enumerată.\n\nMicțiunea normală începe cu contracția detrusorului, sfincterul rămânând contractat până la golirea completă — Incorect: Micțiunea începe cu relaxarea sfincterului extern, apoi a colului, urmată de contracția detrusorului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 657, 656, Vezica neurogenă — Inervație și clasificare Lapides (pagini PDF: 328, 327).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    657,
    656
   ],
   "pdfPages": [
    328,
    327
   ],
   "section": "Vezica neurogenă — Inervație și clasificare Lapides"
  },
  "learningObjective": "Maparea S3/S4, T11–L2 și S2 și recunoașterea cauzelor vezicii neinhibate, față de secvența reală sfincter → col → detrusor.",
  "optionRationales": [
   "Originea parasimpatică S3 și parțial S4 este explicită.",
   "Controlul simpatic T11–L2 al trigonului și colului este citat.",
   "S2 prin nervul rușinos este inervația sfincterului extern.",
   "Lista de leziuni cerebrale ale vezicii neinhibate este enumerată.",
   "Micțiunea începe cu relaxarea sfincterului extern, apoi a colului, urmată de contracția detrusorului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează secvența micțională, o eroare urodinamică clasică lângă trepte medulare corecte."
  },
  "textbookExpressions": [
   "nervul ruşinos",
   "S3"
  ]
 },
 {
  "id": "urologie-adv-032",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Carcinomul vezical:",
  "options": [
   "Este de 2,5 ori mai frecvent la bărbați; prevalența la fumători este de cinci ori mai mare; 85–90% sunt carcinoame tranziționale",
   "Stadiile Ta și T1 se tratează adesea prin rezecție transuretrală; BCG este eficient în Tis",
   "Tumorile musculo-invazive se tratează prin cistectomie radicală",
   "Schistosomiaza și sonda Foley cronică se asociază adenocarcinomului, nu carcinomului scuamos",
   "Rata de recidivă la 5 ani rămâne sub 10%, fără a necesita supraveghere endoscopică"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este de 2,5 ori mai frecvent la bărbați; prevalența la fumători este de cinci ori mai mare; 85–90% sunt carcinoame tranziționale — Corect: Raportul 2,5×, riscul de 5× al fumătorilor și ponderea 85–90% TCC sunt explicite.\n\nStadiile Ta și T1 se tratează adesea prin rezecție transuretrală; BCG este eficient în Tis — Corect: TURBT pentru Ta/T1 și eficacitatea BCG în Tis sunt descrise.\n\nTumorile musculo-invazive se tratează prin cistectomie radicală — Corect: Cistectomia radicală este recomandarea pentru musculo-invazie.\n\nSchistosomiaza și sonda Foley cronică se asociază adenocarcinomului, nu carcinomului scuamos — Incorect: Inflamația cronică (Foley, Schistosoma) se asociază carcinomului scuamos; adenocarcinomul ține de uraca patentă și de dom.\n\nRata de recidivă la 5 ani rămâne sub 10%, fără a necesita supraveghere endoscopică — Incorect: Rata de recidivă la 5 ani poate ajunge până la 50%; controalele periodice sunt necesare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 659, Carcinomul de vezică — Epidemiologie și tratament (pagini PDF: 330).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    659
   ],
   "pdfPages": [
    330
   ],
   "section": "Carcinomul de vezică — Epidemiologie și tratament"
  },
  "learningObjective": "Potrivirea histologiei (TCC versus scuamos pe inflamație cronică) și a BCG în Tis, față de recidiva de până la 50% la 5 ani.",
  "optionRationales": [
   "Raportul 2,5×, riscul de 5× al fumătorilor și ponderea 85–90% TCC sunt explicite.",
   "TURBT pentru Ta/T1 și eficacitatea BCG în Tis sunt descrise.",
   "Cistectomia radicală este recomandarea pentru musculo-invazie.",
   "Inflamația cronică (Foley, Schistosoma) se asociază carcinomului scuamos; adenocarcinomul ține de uraca patentă și de dom.",
   "Rata de recidivă la 5 ani poate ajunge până la 50%; controalele periodice sunt necesare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă histologia inflamației cronice (scuamos ↔ adenocarcinom) și minimizează recidiva de 50%."
  },
  "textbookExpressions": [
   "85-90%",
   "Bacillus Calmette-Guerin"
  ]
 },
 {
  "id": "urologie-adv-033",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Un bărbat raportează un sunet de fisurare în timpul actului sexual, urmat de durere și tumefacție peniană. Sunt adevărate:",
  "options": [
   "Fractura presupune ruptura tunicii albuginee a corpului cavernos și se explorează chirurgical imediat",
   "Uretrografia retrogradă este indicată când mecanismul sugerează leziune uretrală",
   "Cateterizarea uretrală prelungită peste 72 de ore este preferată drenajului suprapubian",
   "Avulsia circumferențială păstrează tegumentul distal, pentru a nu întrerupe limfaticile",
   "Amputația completă nu poate fi reimplantată, chiar dacă piesa a fost ținută în ser rece"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Fractura presupune ruptura tunicii albuginee a corpului cavernos și se explorează chirurgical imediat — Corect: Ruptura albugineei în timpul actului sexual și explorarea cu sutura tunicii sunt explicite.\n\nUretrografia retrogradă este indicată când mecanismul sugerează leziune uretrală — Corect: Uretrografia retrogradă este cerută la suspiciunea de leziune uretrală.\n\nCateterizarea uretrală prelungită peste 72 de ore este preferată drenajului suprapubian — Incorect: Peste 72 de ore se recomandă cateterul suprapubian, pentru a evita ischemia uretrală.\n\nAvulsia circumferențială păstrează tegumentul distal, pentru a nu întrerupe limfaticile — Incorect: Avulsia circumferențială impune excizia tegumentului distal până la șanțul coronar și grefă despicată.\n\nAmputația completă nu poate fi reimplantată, chiar dacă piesa a fost ținută în ser rece — Incorect: Reimplantarea microchirurgicală este posibilă dacă penisul a fost conservat în soluție salină rece.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 660, Traumatisme peniene — Fractură și evaluare (pagini PDF: 331).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    660
   ],
   "pdfPages": [
    331
   ],
   "section": "Traumatisme peniene — Fractură și evaluare"
  },
  "learningObjective": "Recunoașterea fracturii de albuginee ca indicație de explorare imediată și a uretrografiei când uretra este suspectă.",
  "optionRationales": [
   "Ruptura albugineei în timpul actului sexual și explorarea cu sutura tunicii sunt explicite.",
   "Uretrografia retrogradă este cerută la suspiciunea de leziune uretrală.",
   "Peste 72 de ore se recomandă cateterul suprapubian, pentru a evita ischemia uretrală.",
   "Avulsia circumferențială impune excizia tegumentului distal până la șanțul coronar și grefă despicată.",
   "Reimplantarea microchirurgicală este posibilă dacă penisul a fost conservat în soluție salină rece."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează Foley-ul peste 72 de ore și tegumentul distal avulsionat, două decizii pe care textul le interzice."
  },
  "textbookExpressions": [
   "tunicii albuginee",
   "fascia lui Buck"
  ]
 },
 {
  "id": "urologie-adv-034",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Carcinomul scuamos al penisului:",
  "options": [
   "Este extrem de rar la bărbații circumciși la naștere și apare cel mai frecvent în decada a șasea",
   "Penectomia parțială cu marjă de cel puțin 2 cm este folosită pentru leziuni distale de 2–5 cm",
   "Adenopatiile inghinale se reevaluează la 4–6 săptămâni de antibiotice, înainte de a decide limfadenectomia",
   "Limfadenectomia profilactică este indicată de indată ce adenopatiile dispar sub antibiotice",
   "Radioterapia oferă un control oncologic superior exciziei pentru leziunile mici"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este extrem de rar la bărbații circumciși la naștere și apare cel mai frecvent în decada a șasea — Corect: Raritatea după circumcizia neonatală și decada a șasea sunt explicite.\n\nPenectomia parțială cu marjă de cel puțin 2 cm este folosită pentru leziuni distale de 2–5 cm — Corect: Marja ≥2 cm pentru leziuni distale de 2–5 cm este citată.\n\nAdenopatiile inghinale se reevaluează la 4–6 săptămâni de antibiotice, înainte de a decide limfadenectomia — Corect: Reevaluarea la 4–6 săptămâni sub antibiotice precede decizia de limfadenectomie.\n\nLimfadenectomia profilactică este indicată de indată ce adenopatiile dispar sub antibiotice — Incorect: Dacă adenopatiile dispar, limfadenectomia profilactică nu este necesară.\n\nRadioterapia oferă un control oncologic superior exciziei pentru leziunile mici — Incorect: Ratele de control oncologic ale radioterapiei sunt mai reduse decât după excizie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 661, 662, Neoplasmul penian (pagini PDF: 332, 333).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    661,
    662
   ],
   "pdfPages": [
    332,
    333
   ],
   "section": "Neoplasmul penian"
  },
  "learningObjective": "Aplicarea marjei de 2 cm și a ferestrei de 4–6 săptămâni pentru adenopatii infecțioase, față de falsa superioritate a iradierii.",
  "optionRationales": [
   "Raritatea după circumcizia neonatală și decada a șasea sunt explicite.",
   "Marja ≥2 cm pentru leziuni distale de 2–5 cm este citată.",
   "Reevaluarea la 4–6 săptămâni sub antibiotice precede decizia de limfadenectomie.",
   "Dacă adenopatiile dispar, limfadenectomia profilactică nu este necesară.",
   "Ratele de control oncologic ale radioterapiei sunt mai reduse decât după excizie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Operează ganglionii care au dispărut sub antibiotice și declară radioterapia superioară chirurgiei."
  },
  "textbookExpressions": [
   "2 cm",
   "Penectomia parţială"
  ]
 },
 {
  "id": "urologie-adv-035",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Priapismul:",
  "options": [
   "Spre deosebire de erecția fiziologică, sunt turgescenți doar corpii cavernoși; corpul spongios și glandul sunt flasce",
   "Forma cu flux redus se asociază anemiei falciforme, leucemiei, metastazelor și injecțiilor vasoactive",
   "În priapismul cu flux crescut, PO2 în sângele cavernos este scăzută, similar ischemiei",
   "Procedura Winter creează o comunicare între corpii cavernoși și corpul spongios, prin gland",
   "Priapismul cu flux crescut se tratează prin arteriografia arterei rușinoase și embolizarea fistulei"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "Spre deosebire de erecția fiziologică, sunt turgescenți doar corpii cavernoși; corpul spongios și glandul sunt flasce — Corect: Turgescența limitată la cavernoși, cu spongios și gland flasce, este explicită.\n\nForma cu flux redus se asociază anemiei falciforme, leucemiei, metastazelor și injecțiilor vasoactive — Corect: Lista etiologică a formei cu flux redus este enumerată.\n\nÎn priapismul cu flux crescut, PO2 în sângele cavernos este scăzută, similar ischemiei — Incorect: În fluxul scăzut PO2 este scăzută; în fluxul înalt PO2 este crescută.\n\nProcedura Winter creează o comunicare între corpii cavernoși și corpul spongios, prin gland — Corect: Șuntul Winter prin ac de biopsie din gland către cavernoși este descris.\n\nPriapismul cu flux crescut se tratează prin arteriografia arterei rușinoase și embolizarea fistulei — Corect: Arteriografia rușinoasei cu embolizare selectivă este tratamentul formei cu flux înalt.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 662, Priapismul — Flux redus versus flux crescut (pagini PDF: 333).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    662
   ],
   "pdfPages": [
    333
   ],
   "section": "Priapismul — Flux redus versus flux crescut"
  },
  "learningObjective": "Disocierea glandului flasc de cavernoși și a PO2 (scăzută în flux redus, crescută în flux înalt) de embolizarea rușinoasei.",
  "optionRationales": [
   "Turgescența limitată la cavernoși, cu spongios și gland flasce, este explicită.",
   "Lista etiologică a formei cu flux redus este enumerată.",
   "În fluxul scăzut PO2 este scăzută; în fluxul înalt PO2 este crescută.",
   "Șuntul Winter prin ac de biopsie din gland către cavernoși este descris.",
   "Arteriografia rușinoasei cu embolizare selectivă este tratamentul formei cu flux înalt."
  ],
  "difficulty": {
   "score": 9,
   "kind": "editorial-estimate",
   "reason": "Inversează gazele cavernosului între flux redus și flux înalt, discriminatorul de la care atârnă embolizarea."
  },
  "textbookExpressions": [
   "corpilor cavernoşi",
   "fenilefrină"
  ]
 },
 {
  "id": "urologie-adv-036",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Imposibilitatea de a readuce prepuțul peste gland, cu inel constrictiv proximal de șanțul coronal, definește:",
  "options": [
   "Parafimoza, urgență urologică; se încearcă mai întâi compresia manuală a glandului",
   "Fimoza simplă, tratată doar prin circumcizie electivă la rece",
   "Boala Peyronie în faza imatură, cu indicație chirurgicală imediată",
   "Priapismul cu flux crescut, care cere embolizare",
   "Balanita xerotică obliterantă, tratată doar topic cu steroizi"
  ],
  "correct": [
   0
  ],
  "explanation": "Parafimoza, urgență urologică; se încearcă mai întâi compresia manuală a glandului — Corect: Definiția, caracterul de urgență și compresia manuală urmată la nevoie de incizie sunt explicite.\n\nFimoza simplă, tratată doar prin circumcizie electivă la rece — Incorect: Fimoza este contractura care nu permite retracția; nu este inelul ireductibil de după retragere forțată.\n\nBoala Peyronie în faza imatură, cu indicație chirurgicală imediată — Incorect: În faza imatură a bolii Peyronie chirurgia este contraindicată.\n\nPriapismul cu flux crescut, care cere embolizare — Incorect: Priapismul nu se definește prin inel prepuțial.\n\nBalanita xerotică obliterantă, tratată doar topic cu steroizi — Incorect: BXO este o leziune atrofică a glandului/prepuțului, nu urgența de inel constrictiv.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 663, Parafimoza (pagini PDF: 334).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    663
   ],
   "pdfPages": [
    334
   ],
   "section": "Parafimoza"
  },
  "learningObjective": "Recunoașterea inelului prepuțial ireductibil ca urgență, distinctă de fimoza neredusă și de Peyronie-ul imatur în care chirurgia este contraindicată.",
  "optionRationales": [
   "Definiția, caracterul de urgență și compresia manuală urmată la nevoie de incizie sunt explicite.",
   "Fimoza este contractura care nu permite retracția; nu este inelul ireductibil de după retragere forțată.",
   "În faza imatură a bolii Peyronie chirurgia este contraindicată.",
   "Priapismul nu se definește prin inel prepuțial.",
   "BXO este o leziune atrofică a glandului/prepuțului, nu urgența de inel constrictiv."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oferă circumcizia electivă a fimozei și chirurgia imediată a Peyronie-ului imatur în locul urgenței de reducere."
  },
  "textbookExpressions": [
   "parafimoză",
   "urgenţă urologică"
  ]
 },
 {
  "id": "urologie-adv-037",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Leziunile uretrale traumatice:",
  "options": [
   "Ruptura parțială arată extravazare de contrast și pasaj spre vezică; ruptura completă arată extravazare fără umplerea vezicii",
   "Rupturile posterioare cu fractură de bazin se drenează suprapubian cel puțin 3 luni, apoi se reconstruiesc",
   "Carcinomul uretral masculin este, în circa 80% din cazuri, scuamos și apare de obicei după 60 de ani",
   "Cancerul uretral este mai frecvent la bărbați decât la femei, ca restul malignităților genito-urinare",
   "Ruptura incompletă anterioară se tratează identic cu cea posterioară, cu reconstrucție abia la 3 luni"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ruptura parțială arată extravazare de contrast și pasaj spre vezică; ruptura completă arată extravazare fără umplerea vezicii — Corect: Cele două tipare uretrografice sunt descrise explicit.\n\nRupturile posterioare cu fractură de bazin se drenează suprapubian cel puțin 3 luni, apoi se reconstruiesc — Corect: Drenajul suprapubian minim 3 luni urmat de reconstrucție perineală este protocolul rupturii posterioare.\n\nCarcinomul uretral masculin este, în circa 80% din cazuri, scuamos și apare de obicei după 60 de ani — Corect: Ponderea de 80% scuamo-celular și vârsta peste 60 de ani sunt citate.\n\nCancerul uretral este mai frecvent la bărbați decât la femei, ca restul malignităților genito-urinare — Incorect: Cancerul uretral este singura malignitate genito-urinară mai frecventă la femei.\n\nRuptura incompletă anterioară se tratează identic cu cea posterioară, cu reconstrucție abia la 3 luni — Incorect: Rupturile mici incomplete anterioare, cu extravazare limitată de fascia lui Buck, se tratează inițial prin cateter sau cistostomie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 665, 664, Uretra — Traumatism și carcinom (pagini PDF: 336, 335).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    665,
    664
   ],
   "pdfPages": [
    336,
    335
   ],
   "section": "Uretra — Traumatism și carcinom"
  },
  "learningObjective": "Citirea uretrografiei (parțial versus complet) și a ferestrei de 3 luni pentru uretra posterioară, față de excepția feminină a carcinomului uretral.",
  "optionRationales": [
   "Cele două tipare uretrografice sunt descrise explicit.",
   "Drenajul suprapubian minim 3 luni urmat de reconstrucție perineală este protocolul rupturii posterioare.",
   "Ponderea de 80% scuamo-celular și vârsta peste 60 de ani sunt citate.",
   "Cancerul uretral este singura malignitate genito-urinară mai frecventă la femei.",
   "Rupturile mici incomplete anterioare, cu extravazare limitată de fascia lui Buck, se tratează inițial prin cateter sau cistostomie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează excepția epidemiologică feminină și aplică fereastra de 3 luni a uretrei posterioare și leziunilor anterioare minore."
  },
  "textbookExpressions": [
   "3 luni",
   "80%"
  ]
 },
 {
  "id": "urologie-adv-038",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Valvele de uretră posterioară:",
  "options": [
   "Tipul I constă în pliuri mucoase de la extremitatea distală a verumontanum, care se întâlnesc anterior în uretra membranoasă",
   "Diagnosticul antenatal asociază distensie vezicală, hidronefroză și oligohidramnios; inițial se plasează un tub 8 French sau o cistostomie",
   "Hipospadiasul plasează meatul pe fața dorsală a penisului, distal de gland",
   "Rezecția endoscopică a valvelor se face înaintea oricărei stabilizări hidroelectrolitice",
   "Hipospadiasul se corectează de principiu după pubertate, pentru a folosi un prepuț matur"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Tipul I constă în pliuri mucoase de la extremitatea distală a verumontanum, care se întâlnesc anterior în uretra membranoasă — Corect: Anatomia tipului I de la verumontanum este explicită.\n\nDiagnosticul antenatal asociază distensie vezicală, hidronefroză și oligohidramnios; inițial se plasează un tub 8 French sau o cistostomie — Corect: Triada antenatală și calibrul 8 French (sau cistostomia) sunt descrise.\n\nHipospadiasul plasează meatul pe fața dorsală a penisului, distal de gland — Incorect: Meatul hipospadic este pe fața ventrală, proximal de vârful glandului.\n\nRezecția endoscopică a valvelor se face înaintea oricărei stabilizări hidroelectrolitice — Incorect: Mai întâi se stabilizează statusul hidroelectrolitic și acidobazic, apoi se rezecă valvele.\n\nHipospadiasul se corectează de principiu după pubertate, pentru a folosi un prepuț matur — Incorect: Intervenția pentru hipospadias se recomandă înaintea vârstei de 1 an.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 666, 667, 668, Valve uretrale posterioare (pagini PDF: 337, 338, 339).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    666,
    667,
    668
   ],
   "pdfPages": [
    337,
    338,
    339
   ],
   "section": "Valve uretrale posterioare"
  },
  "learningObjective": "Recunoașterea originii de la verumontanum și a drenajului inițial 8 French, față de hipospadiasul ventral corectat înainte de 1 an.",
  "optionRationales": [
   "Anatomia tipului I de la verumontanum este explicită.",
   "Triada antenatală și calibrul 8 French (sau cistostomia) sunt descrise.",
   "Meatul hipospadic este pe fața ventrală, proximal de vârful glandului.",
   "Mai întâi se stabilizează statusul hidroelectrolitic și acidobazic, apoi se rezecă valvele.",
   "Intervenția pentru hipospadias se recomandă înaintea vârstei de 1 an."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută meatul hipospadic pe fața dorsală și inversează momentul rezecției față de stabilizarea metabolică."
  },
  "textbookExpressions": [
   "8 French",
   "verumontanum prostatic"
  ]
 },
 {
  "id": "urologie-adv-039",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Tratamentul de elecție al uretritei gonococice este:",
  "options": [
   "Ceftriaxonă 250 mg intramuscular, doză unică",
   "Azitromicină 1 g oral, ca monoterapie a gonococului",
   "Doxiciclină 100 mg oral, de două ori pe zi, 7 zile, ca singur agent pentru Neisseria",
   "Ceftriaxonă 250 mg oral, 7 zile",
   "Penicilină G benzatină, doză unică intramusculară"
  ],
  "correct": [
   0
  ],
  "explanation": "Ceftriaxonă 250 mg intramuscular, doză unică — Corect: Textul numește ceftriaxona 250 mg IM în doză unică tratamentul de elecție.\n\nAzitromicină 1 g oral, ca monoterapie a gonococului — Incorect: Azitromicina 1 g este tratamentul de elecție al uretritei non-gonococice, nu monoterapia gonococului.\n\nDoxiciclină 100 mg oral, de două ori pe zi, 7 zile, ca singur agent pentru Neisseria — Incorect: Doxiciclina 7 zile vizează C. trachomatis și Ureaplasma, nu este agentul de elecție al gonoreei.\n\nCeftriaxonă 250 mg oral, 7 zile — Incorect: Calea este intramusculară, nu orală, și doza este unică.\n\nPenicilină G benzatină, doză unică intramusculară — Incorect: Penicilina benzatină nu este schema citată pentru N. gonorrhoeae.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 668, Uretritele gonococice (pagini PDF: 339).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    668
   ],
   "pdfPages": [
    339
   ],
   "section": "Uretritele gonococice"
  },
  "learningObjective": "Fixarea dozei unice intramusculare de ceftriaxonă 250 mg, distinctă de azitromicina (non-gonococică) și de doxiciclină.",
  "optionRationales": [
   "Textul numește ceftriaxona 250 mg IM în doză unică tratamentul de elecție.",
   "Azitromicina 1 g este tratamentul de elecție al uretritei non-gonococice, nu monoterapia gonococului.",
   "Doxiciclina 7 zile vizează C. trachomatis și Ureaplasma, nu este agentul de elecție al gonoreei.",
   "Calea este intramusculară, nu orală, și doza este unică.",
   "Penicilina benzatină nu este schema citată pentru N. gonorrhoeae."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Substituie doza IM unică cu schemele orale ale uretritei non-gonococice din același paragraf."
  },
  "textbookExpressions": [
   "Ceftriaxona 250 mg",
   "Neisseria gonorrhoeae"
  ]
 },
 {
  "id": "urologie-adv-040",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Criptorhidismul și patența procesului vaginal:",
  "options": [
   "Incidența testiculului nepalpabil scade de la 3,4% la nou-născutul la termen la 0,7% la sugarul de 9 luni",
   "Testiculul intraabdominal are un risc de malignizare de 48 de ori mai mare; orhidopexia nu reduce riscul, dar permite depistarea precoce",
   "Procesul vaginal patent are incidența 4,4% la termen și până la 13% la prematuri; hidrocelul persistent după 1 an se tratează chirurgical",
   "CT și ecografia sunt investigațiile de primă intenție pentru localizarea testiculului nepalpabil",
   "Orhidopexia anulează riscul de malignizare al testiculului necoborât"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Incidența testiculului nepalpabil scade de la 3,4% la nou-născutul la termen la 0,7% la sugarul de 9 luni — Corect: Scăderea 3,4% → 0,7% este explicită.\n\nTesticulul intraabdominal are un risc de malignizare de 48 de ori mai mare; orhidopexia nu reduce riscul, dar permite depistarea precoce — Corect: Riscul 48 de ori și faptul că orhidopexia nu reduce riscul, dar permite supravegherea, sunt citate.\n\nProcesul vaginal patent are incidența 4,4% la termen și până la 13% la prematuri; hidrocelul persistent după 1 an se tratează chirurgical — Corect: Cifrele 4,4% și 13% și pragul de 1 an pentru hidrocel sunt descrise.\n\nCT și ecografia sunt investigațiile de primă intenție pentru localizarea testiculului nepalpabil — Incorect: CT și ecografia nu sunt utile, în general, în localizarea testiculului nepalpabil; laparoscopia este adesea utilă.\n\nOrhidopexia anulează riscul de malignizare al testiculului necoborât — Incorect: Textul precizează că orhidopexia nu reduce riscul de malignizare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 669, Criptorhidismul și procesul vaginal (pagini PDF: 340).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    669
   ],
   "pdfPages": [
    340
   ],
   "section": "Criptorhidismul și procesul vaginal"
  },
  "learningObjective": "Aplicarea cifrelor de incidență și a riscului 48×, cu limita orhidopexiei (nu reduce riscul) și a imagisticii inutile.",
  "optionRationales": [
   "Scăderea 3,4% → 0,7% este explicită.",
   "Riscul 48 de ori și faptul că orhidopexia nu reduce riscul, dar permite supravegherea, sunt citate.",
   "Cifrele 4,4% și 13% și pragul de 1 an pentru hidrocel sunt descrise.",
   "CT și ecografia nu sunt utile, în general, în localizarea testiculului nepalpabil; laparoscopia este adesea utilă.",
   "Textul precizează că orhidopexia nu reduce riscul de malignizare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Declară orhidopexia protectoare oncologic și promovează CT-ul pentru un testicul pe care textul îl caută laparoscopic."
  },
  "textbookExpressions": [
   "3,4%",
   "48 de ori"
  ]
 },
 {
  "id": "urologie-adv-041",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Un adolescent cu scrot acut, dureros, fără piurie. Enunțurile corecte sunt:",
  "options": [
   "La nou-născut torsiunea este extravaginală; la adolescent este, de obicei, intravaginală (deformarea „clopotului\")",
   "Pierderea reflexului cremasteric se observă la 95% dintre pacienții cu torsiune testiculară",
   "Torsiunea peste 6 ore poate produce leziuni ireversibile; se practică și orhidopexie contralaterală",
   "Fasceita necrozantă (gangrena Fournier) cere debridare largă și antibiotice cu spectru larg",
   "Orhiepididimita este diagnosticul cel mai probabil la adolescentul fără piurie și înlocuiește explorarea"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "La nou-născut torsiunea este extravaginală; la adolescent este, de obicei, intravaginală (deformarea „clopotului\") — Corect: Cele două forme după vârstă sunt descrise, inclusiv analogia limbii de clopot.\n\nPierderea reflexului cremasteric se observă la 95% dintre pacienții cu torsiune testiculară — Corect: Pragul de 95% pentru absența reflexului cremasteric este explicit.\n\nTorsiunea peste 6 ore poate produce leziuni ireversibile; se practică și orhidopexie contralaterală — Corect: Fereastra >6 ore și orhidopexia contralaterală sunt indicate.\n\nFasceita necrozantă (gangrena Fournier) cere debridare largă și antibiotice cu spectru larg — Corect: Debridarea largă și antibioticele cu spectru larg sunt esențiale în Fournier.\n\nOrhiepididimita este diagnosticul cel mai probabil la adolescentul fără piurie și înlocuiește explorarea — Incorect: Orhiepididimita este extrem de rară la adolescenți și, în absența piuriei, nu trebuie luată în considerare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 670, 669, Torsiunea de cordon și infecțiile scrotale (pagini PDF: 341, 340).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    670,
    669
   ],
   "pdfPages": [
    341,
    340
   ],
   "section": "Torsiunea de cordon și infecțiile scrotale"
  },
  "learningObjective": "Separarea torsiunii extra- versus intravaginale, a pragului de 6 ore și a Fournier-ului de falsa orhiepididimită adolescentină fără piurie.",
  "optionRationales": [
   "Cele două forme după vârstă sunt descrise, inclusiv analogia limbii de clopot.",
   "Pragul de 95% pentru absența reflexului cremasteric este explicit.",
   "Fereastra >6 ore și orhidopexia contralaterală sunt indicate.",
   "Debridarea largă și antibioticele cu spectru larg sunt esențiale în Fournier.",
   "Orhiepididimita este extrem de rară la adolescenți și, în absența piuriei, nu trebuie luată în considerare."
  ],
  "difficulty": {
   "score": 9,
   "kind": "editorial-estimate",
   "reason": "Oferă orhiepididimita ca prim diagnostic la adolescentul fără piurie, exact ce textul interzice, lângă pragul ischemic de 6 ore."
  },
  "textbookExpressions": [
   "6 ore",
   "orhidopexia contralaterală"
  ]
 },
 {
  "id": "urologie-adv-042",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Masa testiculară la un bărbat de 25 de ani:",
  "options": [
   "Cancerul testicular este cea mai frecventă malignitate solidă între 18 și 35 de ani",
   "Incizia scrotală este contraindicată; abordul este inghinal, cu clamparea cordonului înaintea mobilizării",
   "Transiluminarea masei confirmă malignitatea și scutește de explorare inghinală",
   "AFP nu crește în seminomul pur; timpul de înjumătățire este de 5–7 zile",
   "β-hCG poate fi crescută în 30–40% dintre seminoame"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "Cancerul testicular este cea mai frecventă malignitate solidă între 18 și 35 de ani — Corect: Intervalul 18–35 de ani este explicit.\n\nIncizia scrotală este contraindicată; abordul este inghinal, cu clamparea cordonului înaintea mobilizării — Corect: Contraindicația inciziei scrotale și pensarea atraumatică a cordonului sunt descrise.\n\nTransiluminarea masei confirmă malignitatea și scutește de explorare inghinală — Incorect: Transiluminarea sugerează lichid (hidrocel, spermatocel), nu malignitate.\n\nAFP nu crește în seminomul pur; timpul de înjumătățire este de 5–7 zile — Corect: AFP, produsă de sacul vitelin, nu crește într-un seminom pur; timpul de înjumătățire este 5–7 zile.\n\nβ-hCG poate fi crescută în 30–40% dintre seminoame — Corect: β-hCG poate fi crescută în 30–40% dintre seminoame.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 670, 671, Cancerul testicular — Diagnostic și markeri (pagini PDF: 341, 342).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    670,
    671
   ],
   "pdfPages": [
    341,
    342
   ],
   "section": "Cancerul testicular — Diagnostic și markeri"
  },
  "learningObjective": "Recunoașterea abordului inghinal și a profilului de markeri (AFP absentă în seminomul pur, β-hCG prezentă în 30–40%).",
  "optionRationales": [
   "Intervalul 18–35 de ani este explicit.",
   "Contraindicația inciziei scrotale și pensarea atraumatică a cordonului sunt descrise.",
   "Transiluminarea sugerează lichid (hidrocel, spermatocel), nu malignitate.",
   "AFP, produsă de sacul vitelin, nu crește într-un seminom pur; timpul de înjumătățire este 5–7 zile.",
   "β-hCG poate fi crescută în 30–40% dintre seminoame."
  ],
  "difficulty": {
   "score": 9,
   "kind": "editorial-estimate",
   "reason": "Folosește transiluminarea ca „dovadă” de cancer și uită că AFP nu aparține seminomului pur."
  },
  "textbookExpressions": [
   "18-35 de ani",
   "incizia scrotală"
  ]
 },
 {
  "id": "urologie-adv-043",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Raportul PSA liber/PSA total sub 20–25%, la un bărbat cu PSA total moderat crescut, se asociază mai frecvent cu:",
  "options": [
   "Carcinomul prostatic, față de HBP, în care predomină fracția liberă",
   "HBP izolată, fără risc de carcinom",
   "Prostatita acută cu E. coli, care scade PSA-ul total",
   "Un nivel <4,0 ng/mL, considerat normal indiferent de vârstă",
   "Scorul Gleason 2–4, bine diferențiat, descoperit doar la autopsie"
  ],
  "correct": [
   0
  ],
  "explanation": "Carcinomul prostatic, față de HBP, în care predomină fracția liberă — Corect: Textul asociază un raport procentual PSA-liber/PSA-total <20–25% mai frecvent cu carcinomul, comparativ cu HBP.\n\nHBP izolată, fără risc de carcinom — Incorect: În HBP, proporția componentei libere este mai mare.\n\nProstatita acută cu E. coli, care scade PSA-ul total — Incorect: Prostatita nu este interpretarea acestui raport.\n\nUn nivel <4,0 ng/mL, considerat normal indiferent de vârstă — Incorect: Un PSA <4 ng/mL este „normal” convențional, dar 20–25% dintre cancere au PSA în acest interval; pragul se ajustează după vârstă.\n\nScorul Gleason 2–4, bine diferențiat, descoperit doar la autopsie — Incorect: Gleason 2–4 nu este concluzia raportului liber/total.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 639, PSA — Fracția liberă versus totală (pagini PDF: 310).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    639
   ],
   "pdfPages": [
    310
   ],
   "section": "PSA — Fracția liberă versus totală"
  },
  "learningObjective": "Interpretarea raportului liber/total <20–25% ca orientare către carcinom, față de fracția liberă mai mare din HBP.",
  "optionRationales": [
   "Textul asociază un raport procentual PSA-liber/PSA-total <20–25% mai frecvent cu carcinomul, comparativ cu HBP.",
   "În HBP, proporția componentei libere este mai mare.",
   "Prostatita nu este interpretarea acestui raport.",
   "Un PSA <4 ng/mL este „normal” convențional, dar 20–25% dintre cancere au PSA în acest interval; pragul se ajustează după vârstă.",
   "Gleason 2–4 nu este concluzia raportului liber/total."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează direcția raportului liber/total (carcinom versus HBP) și ignoră cancerele cu PSA <4 ng/mL (20–25%)."
  },
  "textbookExpressions": [
   "20-25%",
   "PSA-liber"
  ]
 },
 {
  "id": "urologie-adv-044",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Ultrasonografia transrectală și biopsia de prostată:",
  "options": [
   "Carcinoamele sunt localizate, de regulă, în zona periferică și au un tipar clasic hipoecogen",
   "TRUS nu este metodă de screening, din cauza lipsei de sensibilitate și specificitate; ghidează biopsia",
   "Se recoltează, de regulă, 10–14 fragmente, după clismă și premedicație cu o fluorochinolonă 1–2 zile",
   "TRUS înlocuiește tușeul rectal și PSA-ul ca screening de primă intenție",
   "Biopsia se face fără antibiotic, riscul infecțios fiind neglijabil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Carcinoamele sunt localizate, de regulă, în zona periferică și au un tipar clasic hipoecogen — Corect: Sediul periferic și aspectul hipoecogen sunt explicite.\n\nTRUS nu este metodă de screening, din cauza lipsei de sensibilitate și specificitate; ghidează biopsia — Corect: TRUS nu este screening; ghidează puncția la tușeu sau PSA anormal.\n\nSe recoltează, de regulă, 10–14 fragmente, după clismă și premedicație cu o fluorochinolonă 1–2 zile — Corect: Numărul 10–14, clisma și fluorochinolona 1–2 zile sunt descrise.\n\nTRUS înlocuiește tușeul rectal și PSA-ul ca screening de primă intenție — Incorect: Screening-ul rămâne clinic și biochimic; TRUS nu le înlocuiește.\n\nBiopsia se face fără antibiotic, riscul infecțios fiind neglijabil — Incorect: Premedicația antibiotică este necesară.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 639, Carcinom prostatic — TRUS și biopsie (pagini PDF: 310).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    639
   ],
   "pdfPages": [
    310
   ],
   "section": "Carcinom prostatic — TRUS și biopsie"
  },
  "learningObjective": "Recunoașterea pattern-ului hipoecogen periferic, a limitei de screening a TRUS și a protocolului 10–14 fragmente plus fluorochinolonă.",
  "optionRationales": [
   "Sediul periferic și aspectul hipoecogen sunt explicite.",
   "TRUS nu este screening; ghidează puncția la tușeu sau PSA anormal.",
   "Numărul 10–14, clisma și fluorochinolona 1–2 zile sunt descrise.",
   "Screening-ul rămâne clinic și biochimic; TRUS nu le înlocuiește.",
   "Premedicația antibiotică este necesară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă TRUS-ul din ghid de biopsie în test de screening și omite antibioterapia peri-puncție."
  },
  "textbookExpressions": [
   "hipoecogen",
   "fluorochinolonă"
  ]
 },
 {
  "id": "urologie-adv-045",
  "topicId": "urologie",
  "type": "CS",
  "stem": "În clasificarea traumatismelor renale, gradele I și II sunt considerate:",
  "options": [
   "Minore; gradele III, IV și V sunt majore",
   "Majore, cu indicație de nefrectomie de principiu",
   "Echivalente avulsiei pediculului (gradul V)",
   "Prezente doar în traumatismul penetrant, nu în cel închis",
   "Diagnosticate clinic, fără CT, chiar la macrohematurie"
  ],
  "correct": [
   0
  ],
  "explanation": "Minore; gradele III, IV și V sunt majore — Corect: Figura și textul consideră gradele I și II minore, iar III–V majore.\n\nMajore, cu indicație de nefrectomie de principiu — Incorect: Nefrectomia nu este regula gradelor minore.\n\nEchivalente avulsiei pediculului (gradul V) — Incorect: Avulsia pediculului definește un pattern de grad V.\n\nPrezente doar în traumatismul penetrant, nu în cel închis — Incorect: Clasificarea se aplică și traumatismului închis.\n\nDiagnosticate clinic, fără CT, chiar la macrohematurie — Incorect: Imagistica (adesea CT) stadializează leziunea.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 644, Traumatisme renale — Gradele I–II versus III–V (pagini PDF: 315).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    644
   ],
   "pdfPages": [
    315
   ],
   "section": "Traumatisme renale — Gradele I–II versus III–V"
  },
  "learningObjective": "Separarea gradelor I–II (minore: contuzie, hematom subcapsular, lacerație <1 cm fără extravazare) de gradele III–V majore.",
  "optionRationales": [
   "Figura și textul consideră gradele I și II minore, iar III–V majore.",
   "Nefrectomia nu este regula gradelor minore.",
   "Avulsia pediculului definește un pattern de grad V.",
   "Clasificarea se aplică și traumatismului închis.",
   "Imagistica (adesea CT) stadializează leziunea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă gradele I–II la nivelul avulsiei de pedicul (grad V), confuzie de scară din aceeași figură."
  },
  "textbookExpressions": [
   "Gradele I şi li",
   "majore"
  ]
 },
 {
  "id": "urologie-adv-046",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Pielonefrita acută necomplicată versus forma obstructivă:",
  "options": [
   "În 80% din cazuri, microorganismul implicat este Escherichia coli",
   "Forma necomplicată se tratează, de elecție, cu antibioterapie orală în ambulatoriu",
   "Forma obstructivă (de exemplu calcul ureteral) este urgență urologică: imagistică imediată și drenaj prin stent dublu J sau nefrostomie percutanată",
   "Febra și durerea lombară dispar în câteva ore sub oral, deci CT-ul de control este inutil dacă persistă zile",
   "Obstrucția septică sub presiune este mai benignă decât un abces, nefiind nevoie de drenaj"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În 80% din cazuri, microorganismul implicat este Escherichia coli — Corect: Ponderea de 80% a E. coli este explicită.\n\nForma necomplicată se tratează, de elecție, cu antibioterapie orală în ambulatoriu — Corect: Antibioterapia orală ambulatorie este tratamentul de elecție al formei necomplicate.\n\nForma obstructivă (de exemplu calcul ureteral) este urgență urologică: imagistică imediată și drenaj prin stent dublu J sau nefrostomie percutanată — Corect: Stentul dublu J sau nefrostomia percutanată de urgență sunt cerute în obstrucție.\n\nFebra și durerea lombară dispar în câteva ore sub oral, deci CT-ul de control este inutil dacă persistă zile — Incorect: Febra și durerea pot persista câteva zile sub antibiotic; persistența mai lungă impune reimagistică pentru abces.\n\nObstrucția septică sub presiune este mai benignă decât un abces, nefiind nevoie de drenaj — Incorect: Obstrucția infectată sub presiune este asemănătoare unui abces, dar mai gravă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 644, 645, Pielonefrita — E. coli, ambulatoriu și urgența obstructivă (pagini PDF: 315, 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    644,
    645
   ],
   "pdfPages": [
    315,
    316
   ],
   "section": "Pielonefrita — E. coli, ambulatoriu și urgența obstructivă"
  },
  "learningObjective": "Aplicarea etiologică (E. coli 80%), a tratamentului oral ambulatoriu și a drenajului de urgență în obstrucție, versus persistența febrilă de zile.",
  "optionRationales": [
   "Ponderea de 80% a E. coli este explicită.",
   "Antibioterapia orală ambulatorie este tratamentul de elecție al formei necomplicate.",
   "Stentul dublu J sau nefrostomia percutanată de urgență sunt cerute în obstrucție.",
   "Febra și durerea pot persista câteva zile sub antibiotic; persistența mai lungă impune reimagistică pentru abces.",
   "Obstrucția infectată sub presiune este asemănătoare unui abces, dar mai gravă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Minimizează urgența pielonefritei obstructive și tratează febra de câteva zile ca eșec care cere CT imediat."
  },
  "textbookExpressions": [
   "E. coli",
   "stent ureteral"
  ]
 },
 {
  "id": "urologie-adv-047",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Tratamentul carcinomului cu celule tranziționale al sistemului pielo-caliceal este:",
  "options": [
   "Nefroureterectomia, cu îndepărtarea unei porțiuni de vezică la orificiul ureteral",
   "Nefrectomia parțială, analog tumorilor mici de celule clare",
   "Rezecția transuretrală vezicală izolată, ca în Ta/T1",
   "Instilații cu BCG, fără abordarea căii superioare",
   "Observație, citologia urinară negativă excluzând diagnosticul"
  ],
  "correct": [
   0
  ],
  "explanation": "Nefroureterectomia, cu îndepărtarea unei porțiuni de vezică la orificiul ureteral — Corect: Textul numește nefroureterectomia, cu îndepărtarea unei porțiuni de vezică la orificiul ureteral, tratamentul acestor leziuni.\n\nNefrectomia parțială, analog tumorilor mici de celule clare — Incorect: Nefrectomia parțială este opțiunea CRCC-ului mic, nu a carcinomului tranzițional de cale superioară.\n\nRezecția transuretrală vezicală izolată, ca în Ta/T1 — Incorect: TURBT vizează tumorile vezicale superficiale, nu pielo-calicealul.\n\nInstilații cu BCG, fără abordarea căii superioare — Incorect: BCG este descris la Tis vezical, nu ca unică terapie a căii superioare.\n\nObservație, citologia urinară negativă excluzând diagnosticul — Incorect: Citologia poate fi negativă; ureteroscopia este de obicei necesară pentru diagnostic definitiv.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 646, 647, Carcinomul cu celule tranziționale — Nefroureterectomie (pagini PDF: 317, 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    646,
    647
   ],
   "pdfPages": [
    317,
    318
   ],
   "section": "Carcinomul cu celule tranziționale — Nefroureterectomie"
  },
  "learningObjective": "Recunoașterea nefroureterectomiei cu manșon vezical, impusă de implicarea orificiului ureteral ipsilateral.",
  "optionRationales": [
   "Textul numește nefroureterectomia, cu îndepărtarea unei porțiuni de vezică la orificiul ureteral, tratamentul acestor leziuni.",
   "Nefrectomia parțială este opțiunea CRCC-ului mic, nu a carcinomului tranzițional de cale superioară.",
   "TURBT vizează tumorile vezicale superficiale, nu pielo-calicealul.",
   "BCG este descris la Tis vezical, nu ca unică terapie a căii superioare.",
   "Citologia poate fi negativă; ureteroscopia este de obicei necesară pentru diagnostic definitiv."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă nefroureterectomia de cale superioară cu nefrectomia parțială a CRCC sau cu TURBT/BCG vezical."
  },
  "textbookExpressions": [
   "Ureteroscopia",
   "celule tranziţionale"
  ]
 },
 {
  "id": "urologie-adv-048",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Hipospadiasul se caracterizează prin:",
  "options": [
   "Este una dintre cele mai frecvente anomalii congenitale, întâlnită la 1 din 300 de nou-născuți",
   "Meatul uretral este localizat pe fața ventrală a penisului, proximal de poziția normală din vârful glandului",
   "Clasificarea se bazează pe localizarea meatului, care poate fi perineal, penoscrotal, penian, coronal sau glandular",
   "Meatul este pe fața dorsală, distal de gland",
   "Prepuțul este complet circular, identic penisului normal"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este una dintre cele mai frecvente anomalii congenitale, întâlnită la 1 din 300 de nou-născuți — Corect: Incidența 1 din 300 și caracterul de anomalie congenitală frecventă sunt explicite.\n\nMeatul uretral este localizat pe fața ventrală a penisului, proximal de poziția normală din vârful glandului — Corect: Localizarea ventrală, proximal de vârful glandului, este descrisă.\n\nClasificarea se bazează pe localizarea meatului, care poate fi perineal, penoscrotal, penian, coronal sau glandular — Corect: Cele cinci sedii ale meatului definesc clasificarea.\n\nMeatul este pe fața dorsală, distal de gland — Incorect: Meatul hipospadic nu este dorsal.\n\nPrepuțul este complet circular, identic penisului normal — Incorect: Prepuțul este incomplet dezvoltat, prezent ca un șorț pe fața dorsală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 667, Hipospadiasul — Incidență și clasificare (pagini PDF: 338).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    667
   ],
   "pdfPages": [
    338
   ],
   "section": "Hipospadiasul — Incidență și clasificare"
  },
  "learningObjective": "Potrivirea incidenței 1:300, a meatului ventral și a celor cinci nivele de clasificare, față de prepuțul incomplet dorsal.",
  "optionRationales": [
   "Incidența 1 din 300 și caracterul de anomalie congenitală frecventă sunt explicite.",
   "Localizarea ventrală, proximal de vârful glandului, este descrisă.",
   "Cele cinci sedii ale meatului definesc clasificarea.",
   "Meatul hipospadic nu este dorsal.",
   "Prepuțul este incomplet dezvoltat, prezent ca un șorț pe fața dorsală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută meatul pe fața dorsală și descrie un prepuț circular, două inversiuni anatomice din același paragraf."
  },
  "textbookExpressions": [
   "Hipospadiasul",
   "Clasificarea hipospadiasului"
  ]
 },
 {
  "id": "urologie-adv-049",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Leziunea iatrogenă a ureterului distal, recunoscută intraoperator, se repară de elecție prin:",
  "options": [
   "Reimplantare ureterală",
   "Anastomoză termino-terminală pe ureterul lombar, fără reimplantare",
   "Nefrectomie de principiu, ureterul distal neputând fi reconstruit",
   "Ligatură simplă, refluxul fiind de dorit",
   "Uretrostomie perineală, ca în penectomia totală"
  ],
  "correct": [
   0
  ],
  "explanation": "Reimplantare ureterală — Corect: Textul numește reimplantarea ureterală intervenția de elecție când este lezat ureterul distal.\n\nAnastomoză termino-terminală pe ureterul lombar, fără reimplantare — Incorect: Anastomoza primară termino-terminală plus stent este pentru leziuni care permit sutura cap-la-cap, nu regula distalui.\n\nNefrectomie de principiu, ureterul distal neputând fi reconstruit — Incorect: Nefrectomia nu este reparația de primă intenție.\n\nLigatură simplă, refluxul fiind de dorit — Incorect: Ligatura nu restabilește continuitatea.\n\nUretrostomie perineală, ca în penectomia totală — Incorect: Uretrostomia perineală ține de penectomia totală, nu de ureterul distal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 649, Leziuni iatrogene ureterale — Reimplantarea distală (pagini PDF: 320).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    649
   ],
   "pdfPages": [
    320
   ],
   "section": "Leziuni iatrogene ureterale — Reimplantarea distală"
  },
  "learningObjective": "Diferențierea reimplantării (lezare distală) de anastomoza termino-terminală (lezare mai proximală) și de nefrostomia din câmp contaminat.",
  "optionRationales": [
   "Textul numește reimplantarea ureterală intervenția de elecție când este lezat ureterul distal.",
   "Anastomoza primară termino-terminală plus stent este pentru leziuni care permit sutura cap-la-cap, nu regula distalui.",
   "Nefrectomia nu este reparația de primă intenție.",
   "Ligatura nu restabilește continuitatea.",
   "Uretrostomia perineală ține de penectomia totală, nu de ureterul distal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă reimplantarea distală cu anastomoza T-T sau cu nefrostomia din câmp contaminat, trei opțiuni din același paragraf."
  },
  "textbookExpressions": [
   "reimplantarea ureterală",
   "Leziunile iatrogene"
  ]
 },
 {
  "id": "urologie-adv-050",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la evaluarea rupturii vezicale:",
  "options": [
   "Cistografia este investigația imagistică cu mare acuratețe; la adult se introduc circa 350 mL de contrast steril",
   "Se introduc doar 50 mL de contrast, analog cistografiei de reflux a sugarului",
   "Contuziile vezicii nu produc hematurie, spre deosebire de rupturi",
   "La inconștient, suspiciunea clinică este superfluă, hematuria lipsind constant",
   "Ecografia renală izolată înlocuiește cistografia ca test de elecție"
  ],
  "correct": [
   0
  ],
  "explanation": "Cistografia este investigația imagistică cu mare acuratețe; la adult se introduc circa 350 mL de contrast steril — Corect: Textul numește cistografia investigația cu mare acuratețe și precizează circa 350 mL contrast la adult.\n\nSe introduc doar 50 mL de contrast, analog cistografiei de reflux a sugarului — Incorect: Volumul citat la adult este circa 350 mL, nu 50 mL.\n\nContuziile vezicii nu produc hematurie, spre deosebire de rupturi — Incorect: Contuziile provoacă cel mai des hematurie.\n\nLa inconștient, suspiciunea clinică este superfluă, hematuria lipsind constant — Incorect: La inconștient este esențial un grad ridicat de suspiciune.\n\nEcografia renală izolată înlocuiește cistografia ca test de elecție — Incorect: Cistografia, nu ecografia renală izolată, este testul citat pentru ruptură.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 653, 654, Ruptura vezicală — Cistografie și uretrografie (pagini PDF: 324, 325).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    653,
    654
   ],
   "pdfPages": [
    324,
    325
   ],
   "section": "Ruptura vezicală — Cistografie și uretrografie"
  },
  "learningObjective": "Recunoașterea cistografiei (circa 350 mL) ca investigație de elecție și a uretrografiei înaintea sondei când există sânge la meat.",
  "optionRationales": [
   "Textul numește cistografia investigația cu mare acuratețe și precizează circa 350 mL contrast la adult.",
   "Volumul citat la adult este circa 350 mL, nu 50 mL.",
   "Contuziile provoacă cel mai des hematurie.",
   "La inconștient este esențial un grad ridicat de suspiciune.",
   "Cistografia, nu ecografia renală izolată, este testul citat pentru ruptură."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează volumul de 350 mL al cistografiei de adult cu 50 mL și anulează hematuria contuziei."
  },
  "textbookExpressions": [
   "cistografia",
   "350 mL"
  ]
 },
 {
  "id": "urologie-adv-051",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Cauze urologice care trebuie tratate în infecțiile urinare recurente, conform tabelului 29-1, includ:",
  "options": [
   "Hipertrofia prostatei, strictura de uretră și litiaza",
   "Prostatita cronică bacteriană și refluxul vezico-ureteral",
   "Corpii străini, fistula vezico-vaginală sau vezico-intestinală și chistul de uracă",
   "Rinita alergică și polipoza nazală, prin picătură postnazală",
   "Hernia de disc L4–L5, în absența retenției"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hipertrofia prostatei, strictura de uretră și litiaza — Corect: HBP, strictura și litiaza figurează în tabel.\n\nProstatita cronică bacteriană și refluxul vezico-ureteral — Corect: Prostatita cronică bacteriană și RVU figurează în tabel.\n\nCorpii străini, fistula vezico-vaginală sau vezico-intestinală și chistul de uracă — Corect: Corpii străini, fistulele și chistul de uracă figurează în tabel.\n\nRinita alergică și polipoza nazală, prin picătură postnazală — Incorect: Patologia nazală nu este o cauză urologică din tabel.\n\nHernia de disc L4–L5, în absența retenției — Incorect: Hernia de disc nu figurează ca atare în tabelul 29-1.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 655, ITU recurente — Tabelul 29-1 (pagini PDF: 326).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    655
   ],
   "pdfPages": [
    326
   ],
   "section": "ITU recurente — Tabelul 29-1"
  },
  "learningObjective": "Recunoașterea listei de cauze anatomice corectabile (obstrucție, litiază, reflux, fistulă, uracă), versus cauze extra-urinare.",
  "optionRationales": [
   "HBP, strictura și litiaza figurează în tabel.",
   "Prostatita cronică bacteriană și RVU figurează în tabel.",
   "Corpii străini, fistulele și chistul de uracă figurează în tabel.",
   "Patologia nazală nu este o cauză urologică din tabel.",
   "Hernia de disc nu figurează ca atare în tabelul 29-1."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amestecă lista urologică a tabelului 29-1 cu cauze ORL sau ortopedice din alte capitole."
  },
  "textbookExpressions": [
   "Hipertrofia prostatei",
   "Chistul de uracă"
  ]
 },
 {
  "id": "urologie-adv-052",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Vezica neurologică autonomă (lezare sacrală, con, coadă de cal sau plex) se caracterizează prin:",
  "options": [
   "Contracții detrusoriene voluntare sau involuntare ineficiente pe cistomanometrie",
   "Volum rezidual postmicțional de obicei crescut, micțiunea putând fi susținută prin creșterea presiunii abdominale",
   "Senzație micțională scăzută sau absentă, cu complianță variabilă",
   "Acest tip de vezică rezultă din leziuni medulare sacrate, ale conului medular, ale cozii de cal sau ale plexului sacrat",
   "Disreflexie autonomă cu hipertensiune severă, tipică leziunilor deasupra T6, nu leziunii sacrale"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Contracții detrusoriene voluntare sau involuntare ineficiente pe cistomanometrie — Corect: CMG-ul cu contracții ineficiente este explicit.\n\nVolum rezidual postmicțional de obicei crescut, micțiunea putând fi susținută prin creșterea presiunii abdominale — Corect: PVR crescut și micțiunea prin presă abdominală sunt descrise.\n\nSenzație micțională scăzută sau absentă, cu complianță variabilă — Corect: Senzația scăzută/absentă și complianța variabilă sunt enunțate.\n\nAcest tip de vezică rezultă din leziuni medulare sacrate, ale conului medular, ale cozii de cal sau ale plexului sacrat — Corect: Originea sacrală, conul, coada de cal și plexul sunt enumerate.\n\nDisreflexie autonomă cu hipertensiune severă, tipică leziunilor deasupra T6, nu leziunii sacrale — Incorect: Disreflexia autonomă figurează la leziunile deasupra T6.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 658, Vezica neurogenă — Tipul autonom (tabelul 29-2) (pagini PDF: 329).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    658
   ],
   "pdfPages": [
    329
   ],
   "section": "Vezica neurogenă — Tipul autonom (tabelul 29-2)"
  },
  "learningObjective": "Separarea vezicii autonome (contracții ineficiente, PVR crescut) de hiperreflexia cu dissinergie a leziunii deasupra S2 și de disreflexia de peste T6.",
  "optionRationales": [
   "CMG-ul cu contracții ineficiente este explicit.",
   "PVR crescut și micțiunea prin presă abdominală sunt descrise.",
   "Senzația scăzută/absentă și complianța variabilă sunt enunțate.",
   "Originea sacrală, conul, coada de cal și plexul sunt enumerate.",
   "Disreflexia autonomă figurează la leziunile deasupra T6."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă vezica autonomă sacrală cu dissinergia de deasupra S2 și cu disreflexia T6, trei linii vecine din tabel."
  },
  "textbookExpressions": [
   "Disreflexie autonomă",
   "conului medular"
  ]
 },
 {
  "id": "urologie-adv-053",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Vezica neurologică senzorială (tabes dorsal, diabet, siringomielie, anemie pernicioasă) se recunoaște prin:",
  "options": [
   "Scăderea sau lipsa senzației de micțiune, fără hiperreflexie detrusoriană, cu capacitate vezicală mare",
   "Pareza motorie izolată, cu senzație păstrată, ca în poliomielită",
   "Detrusor hiperreflex și incontinență de imperiozitate, ca în Parkinson",
   "Contracții neinhibate cu sfincter striat dissinergic, ca în leziunea medulară deasupra S2",
   "Necesitatea de a urina la 350–500 mL, identică vezicii normale"
  ],
  "correct": [
   0
  ],
  "explanation": "Scăderea sau lipsa senzației de micțiune, fără hiperreflexie detrusoriană, cu capacitate vezicală mare — Corect: Textul definește astfel vezica neurologică senzorială și enumeră tabesul, diabetul, siringomielia și anemia pernicioasă.\n\nPareza motorie izolată, cu senzație păstrată, ca în poliomielită — Incorect: Pareza motorie cu senzație prezentă este un alt tip (motor).\n\nDetrusor hiperreflex și incontinență de imperiozitate, ca în Parkinson — Incorect: Parkinson produce detrusor hiperreflex.\n\nContracții neinhibate cu sfincter striat dissinergic, ca în leziunea medulară deasupra S2 — Incorect: Dissinergia striată este a leziunii deasupra S2.\n\nNecesitatea de a urina la 350–500 mL, identică vezicii normale — Incorect: 350–500 mL este umplerea normală fără creștere de presiune, nu tabloul senzorial.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 658, Vezica neurogenă senzorială (pagini PDF: 329).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    658
   ],
   "pdfPages": [
    329
   ],
   "section": "Vezica neurogenă senzorială"
  },
  "learningObjective": "Identificarea absenței senzației fără hiperreflexie și a capacității mari, distincte de vezica motorie și de hiperreflexia cerebrală.",
  "optionRationales": [
   "Textul definește astfel vezica neurologică senzorială și enumeră tabesul, diabetul, siringomielia și anemia pernicioasă.",
   "Pareza motorie cu senzație prezentă este un alt tip (motor).",
   "Parkinson produce detrusor hiperreflex.",
   "Dissinergia striată este a leziunii deasupra S2.",
   "350–500 mL este umplerea normală fără creștere de presiune, nu tabloul senzorial."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă vezica senzorială (capacitate mare, fără hiperreflexie) cu hiperreflexia Parkinson sau cu dissinergia medulară."
  },
  "textbookExpressions": [
   "tabesului dorsal",
   "capacitate vezicală mare"
  ]
 },
 {
  "id": "urologie-adv-054",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Disreflexia autonomă, cu transpirație, cefalee, hipertensiune severă sau spasticitate, apare tipic în leziunile neurologice:",
  "options": [
   "Deasupra T6",
   "Deasupra trunchiului cerebral, ca tumorile cerebrale",
   "Doar în diabetul zaharat, prin neuropatie autonomă periferică",
   "În mielodisplazie, cu detrusor areflex izolat",
   "După chirurgie pelvină radicală, cu retenție prin areflexie"
  ],
  "correct": [
   0
  ],
  "explanation": "Deasupra T6 — Corect: Tabelul 29-2 plasează disreflexia autonomă la leziunile deasupra T6.\n\nDeasupra trunchiului cerebral, ca tumorile cerebrale — Incorect: Leziunile deasupra trunchiului produc contracții involuntare, fără a fi linia disreflexiei T6.\n\nDoar în diabetul zaharat, prin neuropatie autonomă periferică — Incorect: Diabetul figurează cu senzație alterată și contractilitate scăzută.\n\nÎn mielodisplazie, cu detrusor areflex izolat — Incorect: Mielodisplazia asociază retenție și disfuncție vezicală, nu disreflexie T6.\n\nDupă chirurgie pelvină radicală, cu retenție prin areflexie — Incorect: Chirurgia pelvină radicală produce retenție, nu disreflexie de T6.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 658, Disreflexia autonomă — Pragul T6 (pagini PDF: 329).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    658
   ],
   "pdfPages": [
    329
   ],
   "section": "Disreflexia autonomă — Pragul T6"
  },
  "learningObjective": "Fixarea pragului T6 pentru disreflexia autonomă, distinct de hiperreflexia cerebrală și de areflexia sacrală.",
  "optionRationales": [
   "Tabelul 29-2 plasează disreflexia autonomă la leziunile deasupra T6.",
   "Leziunile deasupra trunchiului produc contracții involuntare, fără a fi linia disreflexiei T6.",
   "Diabetul figurează cu senzație alterată și contractilitate scăzută.",
   "Mielodisplazia asociază retenție și disfuncție vezicală, nu disreflexie T6.",
   "Chirurgia pelvină radicală produce retenție, nu disreflexie de T6."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută disreflexia de la T6 la leziunile cerebrale sau sacrale din același tabel."
  },
  "textbookExpressions": [
   "Disreflexie autonomă",
   "T6"
  ]
 },
 {
  "id": "urologie-adv-055",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Eritroplazia Queyrat, leziune premalignă peniană, se caracterizează prin:",
  "options": [
   "Leziune roșiatică, în relief, la nivelul glandului sau șanțului coronal, histologie de carcinom in situ; tratament prin fulgurație laser, excizie sau 5-fluorouracil topic",
   "Placă albicioasă cu acantoză și hiperkeratoză, tratată doar prin observație",
   "Condilom acuminat gigant, fără invazie în țesuturile subiacente",
   "Placă roșie solitară pe corpul penian (boala Bowen), care nu este carcinom in situ",
   "Balanită xerotică obliterantă, fără opțiune de steroizi topici sau excizie"
  ],
  "correct": [
   0
  ],
  "explanation": "Leziune roșiatică, în relief, la nivelul glandului sau șanțului coronal, histologie de carcinom in situ; tratament prin fulgurație laser, excizie sau 5-fluorouracil topic — Corect: Tabelul descrie exact morfologia, sediul, CIS și tratamentul (laser, excizie, 5-FU).\n\nPlacă albicioasă cu acantoză și hiperkeratoză, tratată doar prin observație — Incorect: Placa albicioasă cu acantoză este leukoplakia, tratată prin excizie.\n\nCondilom acuminat gigant, fără invazie în țesuturile subiacente — Incorect: Condiloamele gigante prezintă invazie în țesuturile subiacente.\n\nPlacă roșie solitară pe corpul penian (boala Bowen), care nu este carcinom in situ — Incorect: Bowen este CIS pe corpul penian, nu „non-CIS”.\n\nBalanită xerotică obliterantă, fără opțiune de steroizi topici sau excizie — Incorect: BXO se tratează prin excizie și steroizi topici.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 661, Leziuni peniene premaligne — Tabelul 29-3 (pagini PDF: 332).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    661
   ],
   "pdfPages": [
    332
   ],
   "section": "Leziuni peniene premaligne — Tabelul 29-3"
  },
  "learningObjective": "Diferențierea eritroplaziei Queyrat (CIS de gland/șanț, 5-FU) de leukoplakie, Bowen de corp și BXO.",
  "optionRationales": [
   "Tabelul descrie exact morfologia, sediul, CIS și tratamentul (laser, excizie, 5-FU).",
   "Placa albicioasă cu acantoză este leukoplakia, tratată prin excizie.",
   "Condiloamele gigante prezintă invazie în țesuturile subiacente.",
   "Bowen este CIS pe corpul penian, nu „non-CIS”.",
   "BXO se tratează prin excizie și steroizi topici."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează liniile tabelului 29-3 (Queyrat, Bowen, leukoplakie, BXO), toate CIS sau premaligne ale penisului."
  },
  "textbookExpressions": [
   "Eritroplazia Queyrat",
   "5-fluorou"
  ]
 },
 {
  "id": "urologie-adv-056",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Boala Peyronie în faza imatură (de obicei peste 6 luni, cu erecții dureroase și încurbare progresivă):",
  "options": [
   "Chirurgia este contraindicată; managementul este conservator (colagenază, vitamina E, eventual potaba sau colchicină)",
   "Faza matură, cu încurbare staționară 6 luni și remiterea durerii, permite corecție chirurgicală dacă deviația împiedică actul sexual",
   "Placa este mai frecvent dorsală, pe tunica albuginee a corpilor cavernoși",
   "Chirurgia imediată a plăcii, în faza dureroasă progresivă, este tratamentul de primă intenție",
   "Toate tratamentele medicale au rată înaltă de succes, deci observația este inutilă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Chirurgia este contraindicată; managementul este conservator (colagenază, vitamina E, eventual potaba sau colchicină) — Corect: Contraindicația chirurgicală și lista conservatoare sunt explicite.\n\nFaza matură, cu încurbare staționară 6 luni și remiterea durerii, permite corecție chirurgicală dacă deviația împiedică actul sexual — Corect: Definiția bolii mature și indicația de corecție sunt enunțate.\n\nPlaca este mai frecvent dorsală, pe tunica albuginee a corpilor cavernoși — Corect: Predilecția dorsală pe albuginee este descrisă.\n\nChirurgia imediată a plăcii, în faza dureroasă progresivă, este tratamentul de primă intenție — Incorect: Chirurgia imediată în faza imatură este contraindicată.\n\nToate tratamentele medicale au rată înaltă de succes, deci observația este inutilă — Incorect: Textul precizează că niciun tratament medical nu are rată semnificativă de succes; adesea există rezoluție spontană.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 663, Boala Peyronie — Faza imatură versus matură (pagini PDF: 334).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    663
   ],
   "pdfPages": [
    334
   ],
   "section": "Boala Peyronie — Faza imatură versus matură"
  },
  "learningObjective": "Recunoașterea contraindicației chirurgicale în faza imatură (>6 luni dureroasă) și a ferestrei de maturitate (staționar 6 luni, fără durere).",
  "optionRationales": [
   "Contraindicația chirurgicală și lista conservatoare sunt explicite.",
   "Definiția bolii mature și indicația de corecție sunt enunțate.",
   "Predilecția dorsală pe albuginee este descrisă.",
   "Chirurgia imediată în faza imatură este contraindicată.",
   "Textul precizează că niciun tratament medical nu are rată semnificativă de succes; adesea există rezoluție spontană."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Operează placa în faza dureroasă imatură și supraestimează succesul medical, două erori de timing."
  },
  "textbookExpressions": [
   "Peyronie",
   "6 luni"
  ]
 },
 {
  "id": "urologie-adv-057",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Contraindicațiile circumciziei includ:",
  "options": [
   "Mielodisplazia și hipospadiasul, deoarece prepuțul poate fi folosit pentru plastia uretrei",
   "Fimoza simptomatică, care este o indicație, nu o contraindicație",
   "Decizia parentală, listată ca indicație în SUA",
   "Balanita recurentă, care constituie o indicație",
   "Parafimoza ireductibilă după eșecul compresiei, care poate necesita incizie și circumcizie ulterioară"
  ],
  "correct": [
   0
  ],
  "explanation": "Mielodisplazia și hipospadiasul, deoarece prepuțul poate fi folosit pentru plastia uretrei — Corect: Textul numește mielodisplazia și hipospadiasul contraindicații, prepuțul putând fi folosit la plastia uretrei.\n\nFimoza simptomatică, care este o indicație, nu o contraindicație — Incorect: Fimoza este o indicație.\n\nDecizia parentală, listată ca indicație în SUA — Incorect: Decizia parentală figurează printre indicații.\n\nBalanita recurentă, care constituie o indicație — Incorect: Balanitele/infecțiile locale sunt context de indicație, nu contraindicație de principiu.\n\nParafimoza ireductibilă după eșecul compresiei, care poate necesita incizie și circumcizie ulterioară — Incorect: După reducerea parafimozei, circumcizia se practică după remisia edemului, deci nu este contraindicație absolută.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 664, Circumcizia — Contraindicații (pagini PDF: 335).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    664
   ],
   "pdfPages": [
    335
   ],
   "section": "Circumcizia — Contraindicații"
  },
  "learningObjective": "Recunoașterea mielodisplaziei și a hipospadiasului ca situații în care prepuțul trebuie păstrat pentru reconstrucție uretrală.",
  "optionRationales": [
   "Textul numește mielodisplazia și hipospadiasul contraindicații, prepuțul putând fi folosit la plastia uretrei.",
   "Fimoza este o indicație.",
   "Decizia parentală figurează printre indicații.",
   "Balanitele/infecțiile locale sunt context de indicație, nu contraindicație de principiu.",
   "După reducerea parafimozei, circumcizia se practică după remisia edemului, deci nu este contraindicație absolută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă indicațiile (fimoza, decizia parentală) în contraindicații și pierde salvarea prepuțului pentru hipospadias."
  },
  "textbookExpressions": [
   "mielodisplazia",
   "hipospadiasul"
  ]
 },
 {
  "id": "urologie-adv-058",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Seminomul în stadiile I și IIa se tratează, de obicei, cu:",
  "options": [
   "Doze moderate de radioterapie retroperitoneală",
   "Limfodisecție retroperitoneală de primă intenție, ca în non-seminomul stadiul I",
   "Chimioterapie de salvare doar după eșecul supravegherii fără imagistică",
   "Orhidectomie scrotală, fără clamparea cordonului",
   "Instilații endovezicale cu BCG, ca în Tis vezical"
  ],
  "correct": [
   0
  ],
  "explanation": "Doze moderate de radioterapie retroperitoneală — Corect: Textul atribuie stadiilor I și IIa doze moderate de radioterapie retroperitoneală.\n\nLimfodisecție retroperitoneală de primă intenție, ca în non-seminomul stadiul I — Incorect: RPLND este o opțiune bună pentru non-seminomul stadiul I.\n\nChimioterapie de salvare doar după eșecul supravegherii fără imagistică — Incorect: Boala metastatică voluminoasă sau la distanță primește platină ca primă linie.\n\nOrhidectomie scrotală, fără clamparea cordonului — Incorect: Abordul este inghinal, cu clamparea cordonului, nu scrotal.\n\nInstilații endovezicale cu BCG, ca în Tis vezical — Incorect: BCG este terapia Tis vezical, nu a seminomului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 671, Seminomul — Radiosensibilitate (pagini PDF: 342).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    671
   ],
   "pdfPages": [
    342
   ],
   "section": "Seminomul — Radiosensibilitate"
  },
  "learningObjective": "Recunoașterea radiosensibilității seminomului I/IIa, distinctă de RPLND-ul non-seminomului și de chimioterapia cu platină a bolii voluminoase.",
  "optionRationales": [
   "Textul atribuie stadiilor I și IIa doze moderate de radioterapie retroperitoneală.",
   "RPLND este o opțiune bună pentru non-seminomul stadiul I.",
   "Boala metastatică voluminoasă sau la distanță primește platină ca primă linie.",
   "Abordul este inghinal, cu clamparea cordonului, nu scrotal.",
   "BCG este terapia Tis vezical, nu a seminomului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Aplică RPLND-ul non-seminomului pe seminomul radiosensibil I/IIa."
  },
  "textbookExpressions": [
   "radiosensibilă",
   "Stadiile I şi Ila"
  ]
 },
 {
  "id": "urologie-adv-059",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Pentru tumorile testiculare non-seminomatoase avansate sau metastatice, chimioterapia pe bază de săruri de platină obține o supraviețuire la 5 ani care:",
  "options": [
   "Depășește 70%, chiar și în boala metastatică",
   "Rămâne sub 10%, analog recidivei carcinomului vezical netratat endoscopic",
   "Este nulă fără limfodisecție scrotală",
   "Depinde de radioterapia retroperitoneală, seminomul fiind chemo-rezistent",
   "Impune BCG endovezical concomitent"
  ],
  "correct": [
   0
  ],
  "explanation": "Depășește 70%, chiar și în boala metastatică — Corect: Textul citează o rată de supraviețuire la 5 ani care depășește 70%, chiar în boala metastatică.\n\nRămâne sub 10%, analog recidivei carcinomului vezical netratat endoscopic — Incorect: Sub 10% nu este cifra acestui paragraf.\n\nEste nulă fără limfodisecție scrotală — Incorect: Limfodisecția este retroperitoneală, nu scrotală, și nu este condiția unică a supraviețuirii.\n\nDepinde de radioterapia retroperitoneală, seminomul fiind chemo-rezistent — Incorect: Seminomul este radiosensibil; platina este prima linie a bolii voluminoase.\n\nImpune BCG endovezical concomitent — Incorect: BCG nu are rol în GCT testicular.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 671, Non-seminomul metastatic — Platină (pagini PDF: 342).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    671
   ],
   "pdfPages": [
    342
   ],
   "section": "Non-seminomul metastatic — Platină"
  },
  "learningObjective": "Memorarea supraviețuirii >70% la 5 ani sub platină, inclusiv în boala metastatică, urmată de rezecția maselor reziduale.",
  "optionRationales": [
   "Textul citează o rată de supraviețuire la 5 ani care depășește 70%, chiar în boala metastatică.",
   "Sub 10% nu este cifra acestui paragraf.",
   "Limfodisecția este retroperitoneală, nu scrotală, și nu este condiția unică a supraviețuirii.",
   "Seminomul este radiosensibil; platina este prima linie a bolii voluminoase.",
   "BCG nu are rol în GCT testicular."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește pragul >70% cu recidiva de 50% a vezicii sau cu radiosensibilitatea seminomului."
  },
  "textbookExpressions": [
   "70%",
   "săruri de platină"
  ]
 },
 {
  "id": "urologie-adv-060",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Dificultățile de concepție ale cuplurilor recent căsătorite:",
  "options": [
   "Afectează 15% dintre cupluri",
   "60% dintre cuplurile fertile concep în primele 3 luni fără contracepție; procentul crește la 90% la 1 an",
   "Cauza este, în peste 85% din cazuri, o disfuncție erectilă psihologică izolată",
   "Volumul redus de ejaculat nu are relevanță, densitatea spermei fiind singurul parametru",
   "Fructoza din ejaculat este produsă de prostată, nu de veziculele seminale"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Afectează 15% dintre cupluri — Corect: Procentul de 15% este explicit.\n\n60% dintre cuplurile fertile concep în primele 3 luni fără contracepție; procentul crește la 90% la 1 an — Corect: 60% la 3 luni și 90% la 1 an sunt citate.\n\nCauza este, în peste 85% din cazuri, o disfuncție erectilă psihologică izolată — Incorect: Peste 85% organic privește disfuncția erectilă, nu infertilitatea de cuplu.\n\nVolumul redus de ejaculat nu are relevanță, densitatea spermei fiind singurul parametru — Incorect: Volumul redus este o cauză recunoscută de probleme de fertilitate.\n\nFructoza din ejaculat este produsă de prostată, nu de veziculele seminale — Incorect: Fructoza este produsă de veziculele seminale.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 671, 672, Infertilitatea masculină — Epidemiologie (pagini PDF: 342, 343).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    671,
    672
   ],
   "pdfPages": [
    342,
    343
   ],
   "section": "Infertilitatea masculină — Epidemiologie"
  },
  "learningObjective": "Aplicarea cifrelor 15%, 60% la 3 luni și 90% la 1 an, înaintea evaluării de laborator a ejaculatului.",
  "optionRationales": [
   "Procentul de 15% este explicit.",
   "60% la 3 luni și 90% la 1 an sunt citate.",
   "Peste 85% organic privește disfuncția erectilă, nu infertilitatea de cuplu.",
   "Volumul redus este o cauză recunoscută de probleme de fertilitate.",
   "Fructoza este produsă de veziculele seminale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amestecă 15% (infertilitate) cu 85% (DE organică) și mută fructoza din vezicule în prostată."
  },
  "textbookExpressions": [
   "15%",
   "90%"
  ]
 },
 {
  "id": "urologie-adv-061",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Ejacularea retrogradă și obstrucția ductelor ejaculatoare:",
  "options": [
   "Diagnosticul ejaculării retrograde se pune prin spermă în prima urină după ejaculare; tratamentul inițial este un simpatomimetic (pseudoefedrină)",
   "Absența fructozei în ejaculat indică lipsa lichidului din veziculele seminale",
   "Ecografia transrectală evaluează obstrucția ductului, adesea tratabilă prin rezecție transuretrală a stenozei",
   "Dacă simpatomimeticele eșuează, spermatozoizii pot fi recoltați din vezică, spălați și folosiți pentru inseminare intrauterină",
   "Simpatomimeticele sunt contraindicate, recolta vezicală fiind primul gest"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Diagnosticul ejaculării retrograde se pune prin spermă în prima urină după ejaculare; tratamentul inițial este un simpatomimetic (pseudoefedrină) — Corect: Spermă în urina post-ejaculare și pseudoefedrina sunt explicite.\n\nAbsența fructozei în ejaculat indică lipsa lichidului din veziculele seminale — Corect: Absența fructozei ca semn de lipsă a lichidului din vezicule este enunțată.\n\nEcografia transrectală evaluează obstrucția ductului, adesea tratabilă prin rezecție transuretrală a stenozei — Corect: TRUS și rezecția transuretrală a stenozei sunt descrise.\n\nDacă simpatomimeticele eșuează, spermatozoizii pot fi recoltați din vezică, spălați și folosiți pentru inseminare intrauterină — Corect: Recolta vezicală după eșecul simpatomimeticelor este descrisă.\n\nSimpatomimeticele sunt contraindicate, recolta vezicală fiind primul gest — Incorect: Medicația simpatomimetică este primul pas; recolta vezicală urmează dacă eșuează.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 672, Infertilitatea — Ejaculare retrogradă și fructoză (pagini PDF: 343).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    672
   ],
   "pdfPages": [
    343
   ],
   "section": "Infertilitatea — Ejaculare retrogradă și fructoză"
  },
  "learningObjective": "Înlănțuirea urinei post-ejaculare, a pseudoefedrinei, a fructozei ca marker al veziculelor și a TUR a stenozei de duct.",
  "optionRationales": [
   "Spermă în urina post-ejaculare și pseudoefedrina sunt explicite.",
   "Absența fructozei ca semn de lipsă a lichidului din vezicule este enunțată.",
   "TRUS și rezecția transuretrală a stenozei sunt descrise.",
   "Recolta vezicală după eșecul simpatomimeticelor este descrisă.",
   "Medicația simpatomimetică este primul pas; recolta vezicală urmează dacă eșuează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ordinea pseudoefedrină–recoltă vezicală și atribuie fructozei o origine hipotalamică."
  },
  "textbookExpressions": [
   "fructozei",
   "pseudoefedrina"
  ]
 },
 {
  "id": "urologie-adv-062",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Inhibitorii de PDE-5 în disfuncția erectilă:",
  "options": [
   "Sunt extrem de eficienți la majoritatea pacienților; alternativele se iau în considerare numai dacă eșuează",
   "Peste 85% dintre bărbații cu DE au o afectare organică, nu doar psihologică",
   "Sunt rezervați cazurilor psihogene, organicul cerând proteză de la prima consultație",
   "Vacuum-ul și alprostadilul intrauretral preced de principiu orice PDE-5",
   "Heparina și warfarina sunt adjuvante de primă intenție ale PDE-5, înaintea oricărei alte măsuri"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sunt extrem de eficienți la majoritatea pacienților; alternativele se iau în considerare numai dacă eșuează — Corect: Eficiența la majoritatea și rezervarea alternativelor după eșec sunt explicite.\n\nPeste 85% dintre bărbații cu DE au o afectare organică, nu doar psihologică — Corect: Ponderea organică de peste 85% este citată pe pagina anterioară.\n\nSunt rezervați cazurilor psihogene, organicul cerând proteză de la prima consultație — Incorect: Organicul nu sare peste PDE-5 la proteză.\n\nVacuum-ul și alprostadilul intrauretral preced de principiu orice PDE-5 — Incorect: Vacuum-ul, alprostadilul și injecțiile sunt opțiuni ulterioare.\n\nHeparina și warfarina sunt adjuvante de primă intenție ale PDE-5, înaintea oricărei alte măsuri — Incorect: Anticoagularea nu face parte din algoritmul PDE-5.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 673, 672, Disfuncția erectilă — PDE-5 ca primă linie (pagini PDF: 344, 343).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    673,
    672
   ],
   "pdfPages": [
    344,
    343
   ],
   "section": "Disfuncția erectilă — PDE-5 ca primă linie"
  },
  "learningObjective": "Recunoașterea predominanței organice (>85%) și a PDE-5 ca primă linie, înaintea vacuum-ului, alprostadilului sau protezei.",
  "optionRationales": [
   "Eficiența la majoritatea și rezervarea alternativelor după eșec sunt explicite.",
   "Ponderea organică de peste 85% este citată pe pagina anterioară.",
   "Organicul nu sare peste PDE-5 la proteză.",
   "Vacuum-ul, alprostadilul și injecțiile sunt opțiuni ulterioare.",
   "Anticoagularea nu face parte din algoritmul PDE-5."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune proteza sau vacuum-ul înaintea PDE-5 și inversează ponderea 85% organic versus psihogen."
  },
  "textbookExpressions": [
   "PDE-5",
   "85%"
  ]
 },
 {
  "id": "urologie-adv-063",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la vascularizația și ancorarea prostatei:",
  "options": [
   "Vascularizația provine, în primul rând, din ramuri ale arterei hipogastrice care pătrund postero-lateral",
   "Artera spermatică internă, cu origine sub arterele renale, este pediculul principal al prostatei",
   "Ligamentele puboprostatice ancorează glanda posterior, de rect, nu de pube",
   "Complexul venos dorsal de pe fața anterioară drenează splina, nu circulația peniană",
   "Uretra membranoasă, cu sfincterul extern, este proximală de uretra prostatică"
  ],
  "correct": [
   0
  ],
  "explanation": "Vascularizația provine, în primul rând, din ramuri ale arterei hipogastrice care pătrund postero-lateral — Corect: Textul precizează că vascularizația provine în primul rând din ramuri ale arterei hipogastrice care intră postero-lateral.\n\nArtera spermatică internă, cu origine sub arterele renale, este pediculul principal al prostatei — Incorect: Artera spermatică internă vascularizează testiculul, nu prostata.\n\nLigamentele puboprostatice ancorează glanda posterior, de rect, nu de pube — Incorect: Ligamentele puboprostatice ancorează glanda anterior la osul pubian.\n\nComplexul venos dorsal de pe fața anterioară drenează splina, nu circulația peniană — Incorect: Complexul venos dorsal de pe fața anterioară drenează circulația de la nivelul penisului.\n\nUretra membranoasă, cu sfincterul extern, este proximală de uretra prostatică — Incorect: Uretra membranoasă, împrejmuită de sfincterul extern, este distală de uretra prostatică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 635, Prostata — Vascularizație și ligamente (pagini PDF: 306).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    635
   ],
   "pdfPages": [
    306
   ],
   "section": "Prostata — Vascularizație și ligamente"
  },
  "learningObjective": "Recunoașterea pediculului hipogastric postero-lateral și a ligamentelor puboprostatice, distincte de arterele testiculare.",
  "optionRationales": [
   "Textul precizează că vascularizația provine în primul rând din ramuri ale arterei hipogastrice care intră postero-lateral.",
   "Artera spermatică internă vascularizează testiculul, nu prostata.",
   "Ligamentele puboprostatice ancorează glanda anterior la osul pubian.",
   "Complexul venos dorsal de pe fața anterioară drenează circulația de la nivelul penisului.",
   "Uretra membranoasă, împrejmuită de sfincterul extern, este distală de uretra prostatică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează pediculul hipogastric prostatic cu artera spermatică testiculară și inversează raportul uretră membranoasă–prostatică."
  },
  "textbookExpressions": [
   "arterei hipogastrice",
   "Ligamentele puboprostatice"
  ]
 },
 {
  "id": "urologie-adv-064",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații privind tușeul rectal și antigenul specific prostatic sunt adevărate?",
  "options": [
   "Prostata normală este netedă, simetrică, cu consistența musculaturii eminenței tenare",
   "80% dintre cancere se dezvoltă în zona periferică și, la dimensiune suficientă, sunt palpabile ca indurație sau noduli",
   "PSA-ul este o serin-protează care clivează proteinele din sperma postejaculatorie",
   "Veziculele seminale se palpează constant la un tușeu normal",
   "Screening-ul PSA la pacienții cu risc crescut se amână, de principiu, după 70 de ani"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Prostata normală este netedă, simetrică, cu consistența musculaturii eminenței tenare — Corect: Textul compară consistența prostatei normale cu musculatura eminenței tenare.\n\n80% dintre cancere se dezvoltă în zona periferică și, la dimensiune suficientă, sunt palpabile ca indurație sau noduli — Corect: Ponderea de 80% în zona periferică și palparea ca indurație sau noduli sunt explicite.\n\nPSA-ul este o serin-protează care clivează proteinele din sperma postejaculatorie — Corect: Funcția de serin-protează asupra proteinelor postejaculatorii este enunțată.\n\nVeziculele seminale se palpează constant la un tușeu normal — Incorect: În mod normal, veziculele seminale nu se pot palpa.\n\nScreening-ul PSA la pacienții cu risc crescut se amână, de principiu, după 70 de ani — Incorect: Pentru afroamericani și istoric familial, screening-ul poate fi considerat de la 40 de ani.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 638, Carcinom prostatic — Tușeu și PSA ca serin-protează (pagini PDF: 309).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    638
   ],
   "pdfPages": [
    309
   ],
   "section": "Carcinom prostatic — Tușeu și PSA ca serin-protează"
  },
  "learningObjective": "Potrivirea consistenței tenare, a palpabilității periferice de 80% și a funcției de serin-protează, față de veziculele nepalpabile.",
  "optionRationales": [
   "Textul compară consistența prostatei normale cu musculatura eminenței tenare.",
   "Ponderea de 80% în zona periferică și palparea ca indurație sau noduli sunt explicite.",
   "Funcția de serin-protează asupra proteinelor postejaculatorii este enunțată.",
   "În mod normal, veziculele seminale nu se pot palpa.",
   "Pentru afroamericani și istoric familial, screening-ul poate fi considerat de la 40 de ani."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă veziculele nepalpabile în semn „normal” și mută screening-ul de risc înalt de la 40 de ani la decadele tardive."
  },
  "textbookExpressions": [
   "eminenţei tenare",
   "serin-protează"
  ]
 },
 {
  "id": "urologie-adv-065",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Pragul de PSA sub care metastazele osoase sunt relativ rar întâlnite este:",
  "options": [
   "<20 ng/mL",
   "<4,0 ng/mL, prag sub care metastazele osoase sunt absente",
   "0,5 ng/mL, valoarea care dovedește eradicarea după prostatectomie",
   "100 ng/mL, singurul prag care justifică scintigrafia",
   "1,0 ng/mL, identic țintei de după radioterapie"
  ],
  "correct": [
   0
  ],
  "explanation": "<20 ng/mL — Corect: Textul precizează că metastazele osoase sunt relativ rar întâlnite la pacienții cu PSA <20 ng/mL.\n\n<4,0 ng/mL, prag sub care metastazele osoase sunt absente — Incorect: Un PSA <4 ng/mL este convențional „normal”, dar 20–25% dintre cancere se află în acest interval; nu exclude metastazele prin sine.\n\n0,5 ng/mL, valoarea care dovedește eradicarea după prostatectomie — Incorect: 0,5 ng/mL este o țintă discutată după radioterapie, nu pragul metastazelor osoase.\n\n100 ng/mL, singurul prag care justifică scintigrafia — Incorect: Scintigrafia osoasă este cea mai sensibilă metodă de detecție, fără a aștepta 100 ng/mL.\n\n1,0 ng/mL, identic țintei de după radioterapie — Incorect: <1,0 ng/mL este ținta post-radioterapie, nu pragul metastazelor.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 639, Carcinom prostatic — Metastaze osoase și PSA (pagini PDF: 310).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    639
   ],
   "pdfPages": [
    310
   ],
   "section": "Carcinom prostatic — Metastaze osoase și PSA"
  },
  "learningObjective": "Memorarea pragului PSA <20 ng/mL, sub care metastazele osoase sunt relativ rare, scintigrafia rămânând metoda cea mai sensibilă.",
  "optionRationales": [
   "Textul precizează că metastazele osoase sunt relativ rar întâlnite la pacienții cu PSA <20 ng/mL.",
   "Un PSA <4 ng/mL este convențional „normal”, dar 20–25% dintre cancere se află în acest interval; nu exclude metastazele prin sine.",
   "0,5 ng/mL este o țintă discutată după radioterapie, nu pragul metastazelor osoase.",
   "Scintigrafia osoasă este cea mai sensibilă metodă de detecție, fără a aștepta 100 ng/mL.",
   "<1,0 ng/mL este ținta post-radioterapie, nu pragul metastazelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amestecă pragul <20 ng/mL al metastazelor cu 4 ng/mL (screening) și cu 0,5–1,0 ng/mL (răspuns terapeutic)."
  },
  "textbookExpressions": [
   "20 ng/mL",
   "Scintigrafia osoasă"
  ]
 },
 {
  "id": "urologie-adv-066",
  "topicId": "urologie",
  "type": "CM",
  "stem": "După tratamentul cu viză curativă al cancerului de prostată și în stadiul metastatic:",
  "options": [
   "Valorile PSA trebuie să scadă post-prostatectomie până la nedetectabile, celulele producătoare fiind îndepărtate odată cu piesa",
   "După radioterapie, rezultate superioare se obțin când PSA scade sub 1,0 ng/mL sau chiar sub 0,5 ng/mL",
   "Durata răspunsului hormonal în boala metastatică este, de regulă, 18–24 de luni, înainte de progresie",
   "Peste jumătate din androgenii circulanți provin din glandele suprarenale",
   "Analogii de LHRH nu produc manifestări vasomotorii"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Valorile PSA trebuie să scadă post-prostatectomie până la nedetectabile, celulele producătoare fiind îndepărtate odată cu piesa — Corect: Textul cere scăderea PSA-ului postoperator până la valori nedetectabile.\n\nDupă radioterapie, rezultate superioare se obțin când PSA scade sub 1,0 ng/mL sau chiar sub 0,5 ng/mL — Corect: Pragurile <1,0 ng/mL și chiar <0,5 ng/mL după radioterapie sunt explicite.\n\nDurata răspunsului hormonal în boala metastatică este, de regulă, 18–24 de luni, înainte de progresie — Corect: Răspunsul hormonal durează, de regulă, 18–24 de luni.\n\nPeste jumătate din androgenii circulanți provin din glandele suprarenale — Incorect: Mai puțin de 10% din androgenii circulanți sunt produși de suprarenale.\n\nAnalogii de LHRH nu produc manifestări vasomotorii — Incorect: Analogii de LHRH produc bufeuri în aproximativ două treimi din cazuri.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 641, Cancer de prostată — PSA post-tratament și hormonoterapie (pagini PDF: 312).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    641
   ],
   "pdfPages": [
    312
   ],
   "section": "Cancer de prostată — PSA post-tratament și hormonoterapie"
  },
  "learningObjective": "Fixarea PSA-ului nedetectabil post-prostatectomie, a țintei <1,0/0,5 ng/mL post-RT și a ferestrei hormonale 18–24 de luni.",
  "optionRationales": [
   "Textul cere scăderea PSA-ului postoperator până la valori nedetectabile.",
   "Pragurile <1,0 ng/mL și chiar <0,5 ng/mL după radioterapie sunt explicite.",
   "Răspunsul hormonal durează, de regulă, 18–24 de luni.",
   "Mai puțin de 10% din androgenii circulanți sunt produși de suprarenale.",
   "Analogii de LHRH produc bufeuri în aproximativ două treimi din cazuri."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă cota androgenilor suprarenali peste 50% și neagă bufeurile LHRH, două erori din același paragraf hormonal."
  },
  "textbookExpressions": [
   "nedetectabile",
   "18-24 de luni"
  ]
 },
 {
  "id": "urologie-adv-067",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Fascia Gerota și vascularizația renală:",
  "options": [
   "Superior, foițele se unesc acoperind complet suprarenala; inferior rămân separate și se continuă de-a lungul ureterului",
   "Aproximativ 20% din debitul cardiac este direcționat către rinichi; pediculul vascular este anterior de pelvisul renal",
   "Circa 65% dintre rinichi prezintă cel puțin un vas aberant; ramurile arteriale sunt vase terminale",
   "Pediculul vascular pătrunde posterior de pelvisul renal",
   "Foițele mediale nu fuzionează, deci extravazarea de urină sau sânge nu este limitată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Superior, foițele se unesc acoperind complet suprarenala; inferior rămân separate și se continuă de-a lungul ureterului — Corect: Dispoziția foițelor superioare și inferioare este descrisă explicit, inclusiv acoperirea suprarenalei.\n\nAproximativ 20% din debitul cardiac este direcționat către rinichi; pediculul vascular este anterior de pelvisul renal — Corect: Fracția de 20% din debitul cardiac și poziția anterioară a pediculului față de pelvis sunt enunțate.\n\nCirca 65% dintre rinichi prezintă cel puțin un vas aberant; ramurile arteriale sunt vase terminale — Corect: Ponderea de circa 65% a vaselor aberante și caracterul terminal, cu infarct și hipertensiune ulterioară, sunt citate.\n\nPediculul vascular pătrunde posterior de pelvisul renal — Incorect: Pediculul pătrunde prin hil anterior de pelvisul renal, nu posterior.\n\nFoițele mediale nu fuzionează, deci extravazarea de urină sau sânge nu este limitată — Incorect: Medial, foițele fuzionează și aderă la vase și pelvis, limitând extravazarea.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 642, Rinichiul — Fascia Gerota și vase aberante (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    642
   ],
   "pdfPages": [
    313
   ],
   "section": "Rinichiul — Fascia Gerota și vase aberante"
  },
  "learningObjective": "Potrivirea foițelor Gerota (unire superioară, separare inferioară), a celor 20% din debitul cardiac și a vaselor terminale aberante.",
  "optionRationales": [
   "Dispoziția foițelor superioare și inferioare este descrisă explicit, inclusiv acoperirea suprarenalei.",
   "Fracția de 20% din debitul cardiac și poziția anterioară a pediculului față de pelvis sunt enunțate.",
   "Ponderea de circa 65% a vaselor aberante și caracterul terminal, cu infarct și hipertensiune ulterioară, sunt citate.",
   "Pediculul pătrunde prin hil anterior de pelvisul renal, nu posterior.",
   "Medial, foițele fuzionează și aderă la vase și pelvis, limitând extravazarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează pediculul față de pelvis și neagă fuziunea medială care limitează extravazarea, două detalii din același paragraf."
  },
  "textbookExpressions": [
   "fascia renală Gerata",
   "20% din debitul cardiac"
  ]
 },
 {
  "id": "urologie-adv-068",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Diagnosticul stenozei de joncțiune pielo-ureterală se stabilește prin:",
  "options": [
   "Doar tușeu rectal, analog evaluării HBP",
   "Scintigrafie renală (renografie Lasix)",
   "PSA seric, ca în carcinomul prostatic",
   "Cistoscopie de rutină, considerată suficientă fără scintigrafie",
   "Arteriografie ca investigație de primă intenție, în locul renografiei Lasix"
  ],
  "correct": [
   1
  ],
  "explanation": "Doar tușeu rectal, analog evaluării HBP — Incorect: Tușeul rectal nu diagnostichează stenoza de joncțiune.\n\nScintigrafie renală (renografie Lasix) — Corect: Textul numește scintigrafia renală (renografia Lasix) investigația de diagnostic.\n\nPSA seric, ca în carcinomul prostatic — Incorect: PSA-ul nu are rol în obstrucția de joncțiune.\n\nCistoscopie de rutină, considerată suficientă fără scintigrafie — Incorect: Cistoscopia nu înlocuiește renografia.\n\nArteriografie ca investigație de primă intenție, în locul renografiei Lasix — Incorect: Diagnosticul antenatal este ecografic; arteriografia nu este testul citat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 643, Stenoza de joncțiune pielo-ureterală — Renografie Lasix (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    643
   ],
   "pdfPages": [
    314
   ],
   "section": "Stenoza de joncțiune pielo-ureterală — Renografie Lasix"
  },
  "learningObjective": "Recunoașterea renografiei Lasix ca test de diagnostic, distinct de screening-ul antenatal ecografic.",
  "optionRationales": [
   "Tușeul rectal nu diagnostichează stenoza de joncțiune.",
   "Textul numește scintigrafia renală (renografia Lasix) investigația de diagnostic.",
   "PSA-ul nu are rol în obstrucția de joncțiune.",
   "Cistoscopia nu înlocuiește renografia.",
   "Diagnosticul antenatal este ecografic; arteriografia nu este testul citat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește renografia Lasix cu tușeul, PSA-ul sau arteriografia, trei investigații din alte secțiuni ale capitolului."
  },
  "textbookExpressions": [
   "renografie Lasix",
   "scintigrafie renală"
  ]
 },
 {
  "id": "urologie-adv-069",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Un pacient diabetic febril, cu colecție renală pe CT. Enunțurile corecte sunt:",
  "options": [
   "Traumatismul de grad III presupune lacerație corticală >1 cm, fără extravazare urinară",
   "Abcesul renal se tratează, de obicei, prin antibioterapie asociată drenajului percutanat",
   "Gradul I asociază lacerație parenchimatoasă profundă cu extravazare în sistemul colector",
   "Extracția calculului este manevra inițială în pielonefrita obstructivă septică",
   "Gradul II se definește prin avulsia pediculului vascular"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Traumatismul de grad III presupune lacerație corticală >1 cm, fără extravazare urinară — Corect: Figura 29-11 descrie gradul III ca lacerație corticală >1 cm, fără extravazare urinară.\n\nAbcesul renal se tratează, de obicei, prin antibioterapie asociată drenajului percutanat — Corect: Textul asociază antibioterapia cu drenajul percutanat al abcesului renal.\n\nGradul I asociază lacerație parenchimatoasă profundă cu extravazare în sistemul colector — Incorect: Gradul I este contuzie sau hematom subcapsular, fără lacerație parenchimatoasă.\n\nExtracția calculului este manevra inițială în pielonefrita obstructivă septică — Incorect: Extragerea calculului este contraindicată ca tratament inițial al pielonefritei obstructive.\n\nGradul II se definește prin avulsia pediculului vascular — Incorect: Avulsia pediculului definește un pattern de grad V.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 644, 645, Traumatism renal grad III și abcesul renal (pagini PDF: 315, 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    644,
    645
   ],
   "pdfPages": [
    315,
    316
   ],
   "section": "Traumatism renal grad III și abcesul renal"
  },
  "learningObjective": "Separarea lacerației de grad III (>1 cm, fără extravazare) de drenajul percutanat al abcesului, față de extracția septică interzisă.",
  "optionRationales": [
   "Figura 29-11 descrie gradul III ca lacerație corticală >1 cm, fără extravazare urinară.",
   "Textul asociază antibioterapia cu drenajul percutanat al abcesului renal.",
   "Gradul I este contuzie sau hematom subcapsular, fără lacerație parenchimatoasă.",
   "Extragerea calculului este contraindicată ca tratament inițial al pielonefritei obstructive.",
   "Avulsia pediculului definește un pattern de grad V."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă gradul III la avulsia de pedicul (grad V) și promovează extracția calculului în faza septică."
  },
  "textbookExpressions": [
   "drenajul percutanat",
   "laceraţia corticalei"
  ]
 },
 {
  "id": "urologie-adv-070",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Carcinomul renal cu celule clare se caracterizează prin:",
  "options": [
   "Origine, de obicei, în tubii contorți proximali; raport bărbați/femei de 2:1",
   "Bilateral doar în circa 5% din cazuri; leziune sferică înconjurată de o pseudocapsulă",
   "Triada clasică este raportată în doar 4–17% din cazuri; hematuria apare în 29–60%",
   "LDH-ul și fosfataza alcalină sunt markeri tumorali specifici de certitudine",
   "Chisturile simple se găsesc la sub 1% dintre adulți și impun nefrectomie de principiu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Origine, de obicei, în tubii contorți proximali; raport bărbați/femei de 2:1 — Corect: Originea în tubii contorți proximali și raportul 2:1 sunt explicite.\n\nBilateral doar în circa 5% din cazuri; leziune sferică înconjurată de o pseudocapsulă — Corect: Bilateralitatea de 5% și pseudocapsula sunt descrise.\n\nTriada clasică este raportată în doar 4–17% din cazuri; hematuria apare în 29–60% — Corect: Hematuria 29–60% și triada completă în 4–17% sunt citate.\n\nLDH-ul și fosfataza alcalină sunt markeri tumorali specifici de certitudine — Incorect: Textul precizează că nu există markeri tumorali specifici pentru CRCC.\n\nChisturile simple se găsesc la sub 1% dintre adulți și impun nefrectomie de principiu — Incorect: Chisturi simple se regăsesc la 33% dintre adulți și se urmăresc periodic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 645, CRCC — Epidemiologie și triada clasică (pagini PDF: 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    645
   ],
   "pdfPages": [
    316
   ],
   "section": "CRCC — Epidemiologie și triada clasică"
  },
  "learningObjective": "Aplicarea originii în tubul proximal, a raportului 2:1, a bilateralității de 5% și a triadei rare (4–17%), față de absența markerilor.",
  "optionRationales": [
   "Originea în tubii contorți proximali și raportul 2:1 sunt explicite.",
   "Bilateralitatea de 5% și pseudocapsula sunt descrise.",
   "Hematuria 29–60% și triada completă în 4–17% sunt citate.",
   "Textul precizează că nu există markeri tumorali specifici pentru CRCC.",
   "Chisturi simple se regăsesc la 33% dintre adulți și se urmăresc periodic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inventă markeri „specifici” pe care textul îi neagă și transformă chistul simplu (33%) în indicație de nefrectomie."
  },
  "textbookExpressions": [
   "2: I",
   "4-17%"
  ]
 },
 {
  "id": "urologie-adv-071",
  "topicId": "urologie",
  "type": "CS",
  "stem": "În nefrectomia radicală pentru carcinomul cu celule clare se îndepărtează:",
  "options": [
   "Rinichiul, grăsimea perirenală, fascia Gerota, suprarenala ipsilaterală și ganglionii limfatici regionali ipsilaterali",
   "Doar polul inferior, cu păstrarea fasciei Gerota și a suprarenalei",
   "Vezica, prostata și ganglionii pelvini, analog cistectomiei radicale",
   "Ureterul până la orificiul vezical, ca în nefroureterectomia tranzițională",
   "Tumora enucleată izolat, fără grăsime perirenală și fără control vascular prealabil"
  ],
  "correct": [
   0
  ],
  "explanation": "Rinichiul, grăsimea perirenală, fascia Gerota, suprarenala ipsilaterală și ganglionii limfatici regionali ipsilaterali — Corect: Textul enumeră rinichiul, grăsimea perirenală, fascia Gerota, suprarenala ipsilaterală și ganglionii regionali ipsilaterali.\n\nDoar polul inferior, cu păstrarea fasciei Gerota și a suprarenalei — Incorect: Păstrarea fasciei și a suprarenalei contrazice definiția nefrectomiei radicale din text.\n\nVezica, prostata și ganglionii pelvini, analog cistectomiei radicale — Incorect: Cistectomia radicală vizează vezica, nu piesa renală.\n\nUreterul până la orificiul vezical, ca în nefroureterectomia tranzițională — Incorect: Nefroureterectomia cu manșon vezical este tratamentul carcinomului tranzițional de cale superioară.\n\nTumora enucleată izolat, fără grăsime perirenală și fără control vascular prealabil — Incorect: Vascularizația trebuie controlată înainte de manipulare; enuclearea izolată nu este nefrectomie radicală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 646, CRCC — Conținutul nefrectomiei radicale (pagini PDF: 317).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    646
   ],
   "pdfPages": [
    317
   ],
   "section": "CRCC — Conținutul nefrectomiei radicale"
  },
  "learningObjective": "Recunoașterea piesei de nefrectomie radicală (rinichi, grăsime, Gerota, suprarenală, ganglioni) și a controlului vascular înaintea disecției.",
  "optionRationales": [
   "Textul enumeră rinichiul, grăsimea perirenală, fascia Gerota, suprarenala ipsilaterală și ganglionii regionali ipsilaterali.",
   "Păstrarea fasciei și a suprarenalei contrazice definiția nefrectomiei radicale din text.",
   "Cistectomia radicală vizează vezica, nu piesa renală.",
   "Nefroureterectomia cu manșon vezical este tratamentul carcinomului tranzițional de cale superioară.",
   "Vascularizația trebuie controlată înainte de manipulare; enuclearea izolată nu este nefrectomie radicală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă piesa radicală (Gerota + suprarenală) cu nefrectomia parțială sau cu nefroureterectomia tranzițională."
  },
  "textbookExpressions": [
   "fascia Gerata",
   "nefrectomiei radicale"
  ]
 },
 {
  "id": "urologie-adv-072",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Litiaza urinară — epidemiologie și tipuri de calculi:",
  "options": [
   "Peste 500.000 de persoane sunt afectate anual, cu predominanță masculină și vârf la 30–50 de ani",
   "Calculii de acid uric se asociază aportului ridicat de purine, gutei, deshidratării și hiperuricozuriei",
   "Calculii de struvit (fosfat amonico-magnezian) apar în ITU cronice; când ocupă tot sistemul colector se numesc coraliformi",
   "Calculii de acid uric se asociază urinei alcaline și unui aport scăzut de purine",
   "Incidența maximă este după 70 de ani, cu predominanță feminină"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Peste 500.000 de persoane sunt afectate anual, cu predominanță masculină și vârf la 30–50 de ani — Corect: Cifra de peste 500.000, predominanța masculină și vârful 30–50 de ani sunt explicite.\n\nCalculii de acid uric se asociază aportului ridicat de purine, gutei, deshidratării și hiperuricozuriei — Corect: Lista de risc a calculilor de acid uric include purinele, guta, deshidratarea și hiperuricozuria.\n\nCalculii de struvit (fosfat amonico-magnezian) apar în ITU cronice; când ocupă tot sistemul colector se numesc coraliformi — Corect: Struvitul din ITU cronice și denumirea de coraliform când ocupă tot sistemul colector sunt enunțate.\n\nCalculii de acid uric se asociază urinei alcaline și unui aport scăzut de purine — Incorect: Urina alcalină dizolvă acidul uric; factorul de risc este aportul ridicat de purine, nu cel scăzut.\n\nIncidența maximă este după 70 de ani, cu predominanță feminină — Incorect: Vârful de vârstă citat este 30–50 de ani, cu predominanță masculină.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 647, Litiază — Incidență, uric acid și coraliformi (pagini PDF: 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    647
   ],
   "pdfPages": [
    318
   ],
   "section": "Litiază — Incidență, uric acid și coraliformi"
  },
  "learningObjective": "Potrivirea vârfului 30–50 de ani, a factorilor de uric acid (purine, gută) și a definiției calculului coraliform de struvit.",
  "optionRationales": [
   "Cifra de peste 500.000, predominanța masculină și vârful 30–50 de ani sunt explicite.",
   "Lista de risc a calculilor de acid uric include purinele, guta, deshidratarea și hiperuricozuria.",
   "Struvitul din ITU cronice și denumirea de coraliform când ocupă tot sistemul colector sunt enunțate.",
   "Urina alcalină dizolvă acidul uric; factorul de risc este aportul ridicat de purine, nu cel scăzut.",
   "Vârful de vârstă citat este 30–50 de ani, cu predominanță masculină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează factorii de uric acid (purine scăzute, urină alcalină) și mută vârful epidemiologic după 70 de ani."
  },
  "textbookExpressions": [
   "500.000",
   "coraliformi"
  ]
 },
 {
  "id": "urologie-adv-073",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Gestionarea calculilor din sistemul colector renal:",
  "options": [
   "Se realizează, de obicei, prin litotriție extracorporeală cu unde de șoc",
   "Îndepărtarea percutanată este o opțiune alternativă, în special pentru litiaza multiplă",
   "Chirurgia deschisă rămâne regula actuală de primă intenție",
   "Calculii de acid uric nu se dizolvă prin alcalinizare urinară",
   "Unda de șoc se focalizează pe rinichiul contralateral, nu pe calculul din F2"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Se realizează, de obicei, prin litotriție extracorporeală cu unde de șoc — Corect: Textul atribuie gestionarea obișnuită litotriției extracorporeale cu unde de șoc.\n\nÎndepărtarea percutanată este o opțiune alternativă, în special pentru litiaza multiplă — Corect: Percutana este opțiunea alternativă, mai ales în litiaza multiplă.\n\nChirurgia deschisă rămâne regula actuală de primă intenție — Incorect: Chirurgia deschisă, frecventă în trecut, este rar indicată astăzi.\n\nCalculii de acid uric nu se dizolvă prin alcalinizare urinară — Incorect: Calculii de acid uric se dizolvă la pH crescut, prin alcalinizare și aport de lichide.\n\nUnda de șoc se focalizează pe rinichiul contralateral, nu pe calculul din F2 — Incorect: Calculul se plasează în al doilea punct focal F2 al semi-elipsoidului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 648, Litiază — ESWL și abordul percutanat (pagini PDF: 319).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    648
   ],
   "pdfPages": [
    319
   ],
   "section": "Litiază — ESWL și abordul percutanat"
  },
  "learningObjective": "Recunoașterea ESWL ca metodă obișnuită a calculilor din sistemul colector și a percutanei pentru litiaza multiplă.",
  "optionRationales": [
   "Textul atribuie gestionarea obișnuită litotriției extracorporeale cu unde de șoc.",
   "Percutana este opțiunea alternativă, mai ales în litiaza multiplă.",
   "Chirurgia deschisă, frecventă în trecut, este rar indicată astăzi.",
   "Calculii de acid uric se dizolvă la pH crescut, prin alcalinizare și aport de lichide.",
   "Calculul se plasează în al doilea punct focal F2 al semi-elipsoidului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Repune chirurgia deschisă ca regulă și mută focarul F2 pe rinichiul sănătos."
  },
  "textbookExpressions": [
   "Indepărtarea percutanată",
   "litotriţie"
  ]
 },
 {
  "id": "urologie-adv-074",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la obstrucția ureterală „din aval” și la leziunile iatrogene:",
  "options": [
   "În obstrucția evacuării vezicii (HBP, cancer de prostată, strictură uretrală), ecografia arată hidronefroză și hidroureter bilaterale; inițial se cateterizează vezica",
   "Leziunile iatrogene apar, în general, în chirurgia vasculară și ginecologică",
   "În câmp contaminat, derivația proximală prin nefrostomie percutanată sau deschisă devine necesară",
   "Reimplantarea ureterală este intervenția de elecție pentru orice leziune a ureterului lombar",
   "În repararea anevrismului aortic, leziunea ureterală se lasă nereparată până la o a doua operație"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În obstrucția evacuării vezicii (HBP, cancer de prostată, strictură uretrală), ecografia arată hidronefroză și hidroureter bilaterale; inițial se cateterizează vezica — Corect: Hidronefroza și hidroureterul bilaterale, cu cateterizarea vezicii ca prim gest, sunt explicite.\n\nLeziunile iatrogene apar, în general, în chirurgia vasculară și ginecologică — Corect: Contextul vascular și ginecologic al leziunilor iatrogene este enunțat.\n\nÎn câmp contaminat, derivația proximală prin nefrostomie percutanată sau deschisă devine necesară — Corect: Nefrostomia percutanată sau deschisă este cerută în câmp contaminat.\n\nReimplantarea ureterală este intervenția de elecție pentru orice leziune a ureterului lombar — Incorect: Reimplantarea este de elecție când este lezat ureterul distal, nu regula leziunii lombare.\n\nÎn repararea anevrismului aortic, leziunea ureterală se lasă nereparată până la o a doua operație — Incorect: La anevrismul aortic se repară mai întâi ureterul, apoi se acoperă cu epiploon.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 649, Ureter — Obstrucție din aval și iatrogenie (pagini PDF: 320).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    649
   ],
   "pdfPages": [
    320
   ],
   "section": "Ureter — Obstrucție din aval și iatrogenie"
  },
  "learningObjective": "Diferentierea cateterizării vezicii în obstrucția din aval de nefrostomia din câmp contaminat și de reimplantarea rezervată distalului.",
  "optionRationales": [
   "Hidronefroza și hidroureterul bilaterale, cu cateterizarea vezicii ca prim gest, sunt explicite.",
   "Contextul vascular și ginecologic al leziunilor iatrogene este enunțat.",
   "Nefrostomia percutanată sau deschisă este cerută în câmp contaminat.",
   "Reimplantarea este de elecție când este lezat ureterul distal, nu regula leziunii lombare.",
   "La anevrismul aortic se repară mai întâi ureterul, apoi se acoperă cu epiploon."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Aplică reimplantarea distală pe ureterul lombar și amână repararea din anevrism, două erori din același paragraf iatrogen."
  },
  "textbookExpressions": [
   "nefrostomie percutanată",
   "ginecolo"
  ]
 },
 {
  "id": "urologie-adv-075",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Debitmetria și evoluția refluxului vezico-ureteral de grad mic:",
  "options": [
   "Debitul maxim este de 20–25 mL/s la bărbați și 20–30 mL/s la femei, cu curbă în formă de clopot",
   "Gradele I și II se pot remite în 20–30% din cazuri la fiecare 2 ani de creștere; 80% ajung la remisie completă",
   "Cistoscopia este investigația de primă intenție, de rutină, la copilul cu reflux",
   "Ecografia renală și UIV sunt suficiente, singure, pentru diagnosticul RVU",
   "Debitul maxim normal la bărbat este sub 10 mL/s, identic pragului simptomatic al HBP"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Debitul maxim este de 20–25 mL/s la bărbați și 20–30 mL/s la femei, cu curbă în formă de clopot — Corect: Valorile 20–25 mL/s (bărbați) și 20–30 mL/s (femei), cu curbă în clopot, sunt explicite.\n\nGradele I și II se pot remite în 20–30% din cazuri la fiecare 2 ani de creștere; 80% ajung la remisie completă — Corect: Remisia 20–30% la fiecare 2 ani și ponderea finală de 80% sunt citate.\n\nCistoscopia este investigația de primă intenție, de rutină, la copilul cu reflux — Incorect: Cistoscopia nu este indicată de rutină la copiii cu reflux.\n\nEcografia renală și UIV sunt suficiente, singure, pentru diagnosticul RVU — Incorect: Ecografia și UIV evidențiază dilatații, dar nu diagnostichează singure RVU.\n\nDebitul maxim normal la bărbat este sub 10 mL/s, identic pragului simptomatic al HBP — Incorect: Pragul debitmetric al HBP simptomatice (<15 mL/s) nu este debitul maxim normal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 650, Urodinamică — Debit maxim și remisia RVU I–II (pagini PDF: 321).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    650
   ],
   "pdfPages": [
    321
   ],
   "section": "Urodinamică — Debit maxim și remisia RVU I–II"
  },
  "learningObjective": "Memorarea curbei în clopot (20–25 / 20–30 mL/s) și a remisiei 20–30% la 2 ani (80% completă) a gradelor I–II.",
  "optionRationales": [
   "Valorile 20–25 mL/s (bărbați) și 20–30 mL/s (femei), cu curbă în clopot, sunt explicite.",
   "Remisia 20–30% la fiecare 2 ani și ponderea finală de 80% sunt citate.",
   "Cistoscopia nu este indicată de rutină la copiii cu reflux.",
   "Ecografia și UIV evidențiază dilatații, dar nu diagnostichează singure RVU.",
   "Pragul debitmetric al HBP simptomatice (<15 mL/s) nu este debitul maxim normal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează debitul maxim normal (20–25 mL/s) cu pragul obstructiv al HBP și anulează remisia de 80% a gradelor I–II."
  },
  "textbookExpressions": [
   "20-25 mL/secundă",
   "80%"
  ]
 },
 {
  "id": "urologie-adv-076",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Extrofia vezicală se caracterizează prin:",
  "options": [
   "Incidență de circa 1:30.000 de nașteri, preponderență masculină 3:1 și risc crescut de adenocarcinom, cu supraveghere urologică pe tot parcursul vieții",
   "Incidență 1:1.000, cu predominanță feminină 3:1",
   "Absența dehiscenței simfizei pubiene, peretele abdominal fiind intact",
   "Lipsa oricărui risc oncologic ulterior, monitorizarea fiind inutilă",
   "Tratament prin observație, reconstrucția colului fiind contraindicată"
  ],
  "correct": [
   0
  ],
  "explanation": "Incidență de circa 1:30.000 de nașteri, preponderență masculină 3:1 și risc crescut de adenocarcinom, cu supraveghere urologică pe tot parcursul vieții — Corect: Cifra 1:30.000, preponderența masculină 3:1 și riscul de adenocarcinom cu monitorizare de-a lungul vieții sunt explicite.\n\nIncidență 1:1.000, cu predominanță feminină 3:1 — Incorect: 1:1.000 cu predominanță feminină inversează atât incidența, cât și sexul.\n\nAbsența dehiscenței simfizei pubiene, peretele abdominal fiind intact — Incorect: Malformația include dehiscența simfizei pubiene și expunerea peretelui posterior vezical.\n\nLipsa oricărui risc oncologic ulterior, monitorizarea fiind inutilă — Incorect: Riscul de adenocarcinom impune supraveghere urologică continuă.\n\nTratament prin observație, reconstrucția colului fiind contraindicată — Incorect: Reconstrucția cu augmentare și refacerea colului este adesea necesară pentru continență și funcție renală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 651, Extrofia vezicală — Incidență și adenocarcinom (pagini PDF: 322).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    651
   ],
   "pdfPages": [
    322
   ],
   "section": "Extrofia vezicală — Incidență și adenocarcinom"
  },
  "learningObjective": "Fixarea incidenței 1:30.000, a raportului masculin 3:1 și a riscului de adenocarcinom cu supraveghere pe viață.",
  "optionRationales": [
   "Cifra 1:30.000, preponderența masculină 3:1 și riscul de adenocarcinom cu monitorizare de-a lungul vieții sunt explicite.",
   "1:1.000 cu predominanță feminină inversează atât incidența, cât și sexul.",
   "Malformația include dehiscența simfizei pubiene și expunerea peretelui posterior vezical.",
   "Riscul de adenocarcinom impune supraveghere urologică continuă.",
   "Reconstrucția cu augmentare și refacerea colului este adesea necesară pentru continență și funcție renală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sexul (3:1 masculin) și incidența (1:30.000 versus 1:1.000) din același paragraf de malformație rară."
  },
  "textbookExpressions": [
   "I :30.000",
   "adenocarcinom"
  ]
 },
 {
  "id": "urologie-adv-077",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre reimplantarea ureterală, uracă și diverticulii vezicali:",
  "options": [
   "Procedura Cohen este avansarea încrucișată trigonală a ureterului",
   "Tehnica Politano-Leadbetter creează un nou hiatus supero-lateral, cu stent ureteral",
   "Vestigiile uracăi (diverticul la dom sau fistulă vezico-ombilicală) se tratează cel mai bine prin excizie simplă; persistența se asociază modificărilor adenocarcinomatoase",
   "Prezența mușchiului în perete rămâne criteriul actual de diferențiere a diverticulilor congenitali de cei dobândiți",
   "Diverticulul simptomatic se tratează doar medicamentos, fără excizie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Procedura Cohen este avansarea încrucișată trigonală a ureterului — Corect: Legenda figurii 29-17 numește procedura Cohen avansare încrucișată trigonală.\n\nTehnica Politano-Leadbetter creează un nou hiatus supero-lateral, cu stent ureteral — Corect: Legenda figurii 29-18 descrie noul hiatus supero-lateral și stentul ureteral.\n\nVestigiile uracăi (diverticul la dom sau fistulă vezico-ombilicală) se tratează cel mai bine prin excizie simplă; persistența se asociază modificărilor adenocarcinomatoase — Corect: Excizia simplă și asocierea adenocarcinomatoasă a vestigiilor de uracă sunt explicite.\n\nPrezența mușchiului în perete rămâne criteriul actual de diferențiere a diverticulilor congenitali de cei dobândiți — Incorect: Ipoteza mușchiului din perete ca marker congenital nu mai este valabilă.\n\nDiverticulul simptomatic se tratează doar medicamentos, fără excizie — Incorect: Excizia diverticulului simptomatic este tratamentul de elecție în majoritatea situațiilor.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 652, 651, Vezică — Cohen, Politano-Leadbetter, uracă și diverticuli (pagini PDF: 323, 322).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    652,
    651
   ],
   "pdfPages": [
    323,
    322
   ],
   "section": "Vezică — Cohen, Politano-Leadbetter, uracă și diverticuli"
  },
  "learningObjective": "Citirea legendelor Cohen (încrucișare trigonală) și Politano-Leadbetter (hiatus supero-lateral), plus excizia simplă a vestigiilor de uracă.",
  "optionRationales": [
   "Legenda figurii 29-17 numește procedura Cohen avansare încrucișată trigonală.",
   "Legenda figurii 29-18 descrie noul hiatus supero-lateral și stentul ureteral.",
   "Excizia simplă și asocierea adenocarcinomatoasă a vestigiilor de uracă sunt explicite.",
   "Ipoteza mușchiului din perete ca marker congenital nu mai este valabilă.",
   "Excizia diverticulului simptomatic este tratamentul de elecție în majoritatea situațiilor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează criteriul „mușchi = congenital”, pe care textul îl respinge, și refuză excizia diverticulului simptomatic."
  },
  "textbookExpressions": [
   "Procedura Cohen",
   "excizie simplă"
  ]
 },
 {
  "id": "urologie-adv-078",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Un politraumatizat conștient, după accident rutier cu fractură de bazin, acuză durere severă suprapubiană și imposibilitatea de a micționa. Afirmația corectă este:",
  "options": [
   "Rupturile vezicale cauzează aproape inevitabil hematurie; asocierea cu fractura de bazin impune și suspiciunea unei rupturi uretrale",
   "Contuziile vezicii nu produc hematurie, spre deosebire de rupturi",
   "Cistografia de adult se face cu circa 50 mL de contrast",
   "Uretrografia retrogradă se practică după cateterizare, chiar dacă există sânge la meat",
   "Diagnosticul se pune doar clinic, imagistica fiind superfluă la conștient"
  ],
  "correct": [
   0
  ],
  "explanation": "Rupturile vezicale cauzează aproape inevitabil hematurie; asocierea cu fractura de bazin impune și suspiciunea unei rupturi uretrale — Corect: Textul leagă ruptura de hematurie aproape inevitabilă și cere suspiciunea de ruptură uretrală la fractura de bazin.\n\nContuziile vezicii nu produc hematurie, spre deosebire de rupturi — Incorect: Contuziile provoacă cel mai des hematurie.\n\nCistografia de adult se face cu circa 50 mL de contrast — Incorect: La adult se introduc circa 350 mL de contrast steril.\n\nUretrografia retrogradă se practică după cateterizare, chiar dacă există sânge la meat — Incorect: Dacă există sânge la meat, uretrografia precede cateterizarea.\n\nDiagnosticul se pune doar clinic, imagistica fiind superfluă la conștient — Incorect: Cistografia este investigația cu mare acuratețe; la inconștient este esențial un grad ridicat de suspiciune.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 653, 654, Ruptura vezicală — Clinică și fractura de bazin (pagini PDF: 324, 325).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    653,
    654
   ],
   "pdfPages": [
    324,
    325
   ],
   "section": "Ruptura vezicală — Clinică și fractura de bazin"
  },
  "learningObjective": "Recunoașterea hematuriei aproape inevitabile și a asocierii fractură de bazin–ruptură uretrală, înaintea cistografiei.",
  "optionRationales": [
   "Textul leagă ruptura de hematurie aproape inevitabilă și cere suspiciunea de ruptură uretrală la fractura de bazin.",
   "Contuziile provoacă cel mai des hematurie.",
   "La adult se introduc circa 350 mL de contrast steril.",
   "Dacă există sânge la meat, uretrografia precede cateterizarea.",
   "Cistografia este investigația cu mare acuratețe; la inconștient este esențial un grad ridicat de suspiciune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează hematuria contuziei și inversează ordinea uretrografie–cateter când există sânge la meat."
  },
  "textbookExpressions": [
   "fracturi de bazin",
   "imposibilitatea de a micţiona"
  ]
 },
 {
  "id": "urologie-adv-079",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Cistita bacteriană:",
  "options": [
   "Orificiul vaginal extern se colonizează cu organisme din tubul digestiv înaintea apariției cistitei",
   "La bărbați rezultă, în general, din evacuarea incompletă a vezicii",
   "Cele mai frecvente patogene sunt bacili Gram-negativi din familia Enterobacteriaceae",
   "Cu terapie adecvată, simptomele ar trebui să dispară în 3–5 zile",
   "Febra este simptomul dominant al cistitei necomplicate și exclude infecția de tract superior"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Orificiul vaginal extern se colonizează cu organisme din tubul digestiv înaintea apariției cistitei — Corect: Colonizarea orificiului vaginal extern cu floră digestivă înaintea cistitei este explicită.\n\nLa bărbați rezultă, în general, din evacuarea incompletă a vezicii — Corect: La bărbați, cistita urmează, în general, golirii incomplete.\n\nCele mai frecvente patogene sunt bacili Gram-negativi din familia Enterobacteriaceae — Corect: Enterobacteriaceae, cu E. coli peste 80% din ITU, sunt cele mai frecvente patogene.\n\nCu terapie adecvată, simptomele ar trebui să dispară în 3–5 zile — Corect: Simptomele ar trebui să dispară în 3–5 zile sub terapie adecvată.\n\nFebra este simptomul dominant al cistitei necomplicate și exclude infecția de tract superior — Incorect: Febra este neobișnuită în cistita necomplicată și poate indica infecția tractului superior.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 654, Cistită — Colonizare vaginală, Enterobacteriaceae și 3–5 zile (pagini PDF: 325).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    654
   ],
   "pdfPages": [
    325
   ],
   "section": "Cistită — Colonizare vaginală, Enterobacteriaceae și 3–5 zile"
  },
  "learningObjective": "Înlănțuirea colonizării introitului, a retenției la bărbat, a Enterobacteriaceae și a ferestrei simptomatice de 3–5 zile.",
  "optionRationales": [
   "Colonizarea orificiului vaginal extern cu floră digestivă înaintea cistitei este explicită.",
   "La bărbați, cistita urmează, în general, golirii incomplete.",
   "Enterobacteriaceae, cu E. coli peste 80% din ITU, sunt cele mai frecvente patogene.",
   "Simptomele ar trebui să dispară în 3–5 zile sub terapie adecvată.",
   "Febra este neobișnuită în cistita necomplicată și poate indica infecția tractului superior."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă febra — semnul de alarmă al tractului superior — în „simptom dominant” al cistitei necomplicate."
  },
  "textbookExpressions": [
   "3-5 zile",
   "Enterobacteriaceae"
  ]
 },
 {
  "id": "urologie-adv-080",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Următoarele afirmații despre cistita interstițială și fistulele vezicale sunt adevărate:",
  "options": [
   "Instilațiile endovezicale pot include sulfoxid de dimetil, heparină și amitriptilină",
   "Fistulele vezico-vaginale mici se pot evidenția prin instilare de albastru de metilen și tampon vaginal",
   "Uroculturile din cistita interstițială sunt, în mod tipic, pozitive pentru bacterii",
   "Fistula entero-vezicală se tratează doar cu antibiotice, fără rezecția ansei afectate",
   "Albastrul de metilen se instilează după cistectomie totală, ca test de etanșeitate a neovezicii"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Instilațiile endovezicale pot include sulfoxid de dimetil, heparină și amitriptilină — Corect: Cele trei substanțe de instilație sunt enumerate explicit.\n\nFistulele vezico-vaginale mici se pot evidenția prin instilare de albastru de metilen și tampon vaginal — Corect: Instilarea de albastru de metilen urmată de tampon vaginal este descrisă pentru fistulele mici.\n\nUroculturile din cistita interstițială sunt, în mod tipic, pozitive pentru bacterii — Incorect: Uroculturile pentru bacterii, virusuri și fungi sunt, în mod tipic, negative.\n\nFistula entero-vezicală se tratează doar cu antibiotice, fără rezecția ansei afectate — Incorect: Tratamentul fistulei entero-vezicale include rezecția porțiunii de intestin afectat.\n\nAlbastrul de metilen se instilează după cistectomie totală, ca test de etanșeitate a neovezicii — Incorect: Testul cu albastru de metilen vizează fistula vezico-vaginală, nu neovezica.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 655, Cistită interstițială — DMSO și testul cu albastru de metilen (pagini PDF: 326).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    655
   ],
   "pdfPages": [
    326
   ],
   "section": "Cistită interstițială — DMSO și testul cu albastru de metilen"
  },
  "learningObjective": "Recunoașterea instilațiilor (DMSO, heparină, amitriptilină) și a testului cu albastru de metilen plus tampon în fistula vezico-vaginală mică.",
  "optionRationales": [
   "Cele trei substanțe de instilație sunt enumerate explicit.",
   "Instilarea de albastru de metilen urmată de tampon vaginal este descrisă pentru fistulele mici.",
   "Uroculturile pentru bacterii, virusuri și fungi sunt, în mod tipic, negative.",
   "Tratamentul fistulei entero-vezicale include rezecția porțiunii de intestin afectat.",
   "Testul cu albastru de metilen vizează fistula vezico-vaginală, nu neovezica."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Declară uroculturile interstițiale pozitive și tratează fistula entero-vezicală doar medicamentos, două inversiuni din aceeași pagină."
  },
  "textbookExpressions": [
   "sulfoxidul de dimetil",
   "albastru de metilen"
  ]
 },
 {
  "id": "urologie-adv-081",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Precizați enunțul corect privind sfincterul urinar artificial la bărbat:",
  "options": [
   "Este rezervat incontinenței de efort feminine, analog bandeletei transvaginale comerciale",
   "Include o manșetă pe uretra bulbară, un rezervor cu lichid și o pompă scrotală; pompa transferă lichidul din manșetă în rezervor la micțiune",
   "Firele se leagă pe fața posterioară a simfizei, ca în procedura Marshall-Marchetti-Krantz",
   "Se montează endoscopic, analog injectării de Deflux sub orificiul ureteral",
   "Înlocuiește de primă intenție anticolinergicele din instabilitatea detrusorului fără obstrucție"
  ],
  "correct": [
   1
  ],
  "explanation": "Este rezervat incontinenței de efort feminine, analog bandeletei transvaginale comerciale — Incorect: Bandeletele transvaginale sunt preferate incontinenței de efort la femei, nu sfincterului masculin.\n\nInclude o manșetă pe uretra bulbară, un rezervor cu lichid și o pompă scrotală; pompa transferă lichidul din manșetă în rezervor la micțiune — Corect: Textul descrie manșeta pe uretra bulbară, rezervorul și pompa scrotală, cu transferul lichidului la micțiune.\n\nFirele se leagă pe fața posterioară a simfizei, ca în procedura Marshall-Marchetti-Krantz — Incorect: Marshall-Marchetti-Krantz fixează colul pe fața posterioară a simfizei la femeie.\n\nSe montează endoscopic, analog injectării de Deflux sub orificiul ureteral — Incorect: Deflux-ul este terapia endoscopică a refluxului, nu a incontinenței masculine.\n\nÎnlocuiește de primă intenție anticolinergicele din instabilitatea detrusorului fără obstrucție — Incorect: Instabilitatea detrusorului fără obstrucție răspunde la oxibutinină, nu la sfincter artificial.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 656, Incontinență masculină — Sfincterul artificial (pagini PDF: 327).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    656
   ],
   "pdfPages": [
    327
   ],
   "section": "Incontinență masculină — Sfincterul artificial"
  },
  "learningObjective": "Recunoașterea celor trei componente (manșetă bulbară, rezervor, pompă scrotală) ale sfincterului artificial, distinct de MMK și de bandeletă.",
  "optionRationales": [
   "Bandeletele transvaginale sunt preferate incontinenței de efort la femei, nu sfincterului masculin.",
   "Textul descrie manșeta pe uretra bulbară, rezervorul și pompa scrotală, cu transferul lichidului la micțiune.",
   "Marshall-Marchetti-Krantz fixează colul pe fața posterioară a simfizei la femeie.",
   "Deflux-ul este terapia endoscopică a refluxului, nu a incontinenței masculine.",
   "Instabilitatea detrusorului fără obstrucție răspunde la oxibutinină, nu la sfincter artificial."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune sfincterul masculin pe algoritmul feminin (MMK, bandeletă, Deflux) sau pe instabilitatea tratată medicamentos."
  },
  "textbookExpressions": [
   "sfincter urinar artificial",
   "uretra bulbară"
  ]
 },
 {
  "id": "urologie-adv-082",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Vezica neinhibată reflexă (lezare medulară suprasacrată) se caracterizează prin:",
  "options": [
   "Contracții necontrolate, fazice, declanșate de stimulare intrinsică sau extrinsecă",
   "În leziunile toracice înalte sau cervicale, sfincterul este frecvent dissinergic (dissinergism sfincter-detrusor)",
   "Senzația și coordonarea sfincteriană rămân intacte, ca în vezica cerebrală neinhibată",
   "Capacitatea de umplere este păstrată, fără golire incompletă",
   "Rezultă din lezarea conului medular sau a plexului sacrat, analog vezicii autonome"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Contracții necontrolate, fazice, declanșate de stimulare intrinsică sau extrinsecă — Corect: Contracțiile fazice necontrolate, declanșate intrinsic sau extrinsec, sunt explicite.\n\nÎn leziunile toracice înalte sau cervicale, sfincterul este frecvent dissinergic (dissinergism sfincter-detrusor) — Corect: Dissinergismul sfincter-detrusor al leziunilor toracice înalte sau cervicale este numit ca atare.\n\nSenzația și coordonarea sfincteriană rămân intacte, ca în vezica cerebrală neinhibată — Incorect: Senzația normală și coordonarea sfincteriană țin de vezica neinhibată cerebrală, nu de forma reflexă.\n\nCapacitatea de umplere este păstrată, fără golire incompletă — Incorect: Contracțiile pot fi ineficiente, cu golire incompletă.\n\nRezultă din lezarea conului medular sau a plexului sacrat, analog vezicii autonome — Incorect: Leziunea sacrală, a conului sau a plexului produce vezica autonomă, nu pe cea reflexă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 657, Vezică neurogenă — Tipul reflex cu dissinergie (pagini PDF: 328).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    657
   ],
   "pdfPages": [
    328
   ],
   "section": "Vezică neurogenă — Tipul reflex cu dissinergie"
  },
  "learningObjective": "Separarea vezicii reflexe suprasacrate cu dissinergie sfincter-detrusor de vezica cerebrală neinhibată (sfincter coordonat) și de cea autonomă sacrală.",
  "optionRationales": [
   "Contracțiile fazice necontrolate, declanșate intrinsic sau extrinsec, sunt explicite.",
   "Dissinergismul sfincter-detrusor al leziunilor toracice înalte sau cervicale este numit ca atare.",
   "Senzația normală și coordonarea sfincteriană țin de vezica neinhibată cerebrală, nu de forma reflexă.",
   "Contracțiile pot fi ineficiente, cu golire incompletă.",
   "Leziunea sacrală, a conului sau a plexului produce vezica autonomă, nu pe cea reflexă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă dissinergia medulară înaltă cu sfincterul coordonat cerebral și cu areflexia sacrală, trei linii vecine de clasificare."
  },
  "textbookExpressions": [
   "dissinergism",
   "sfincter-detrusor"
  ]
 },
 {
  "id": "urologie-adv-083",
  "topicId": "urologie",
  "type": "CM",
  "stem": "În disfuncția vezicală neurologică se recomandă:",
  "options": [
   "Anticolinergice (tolterodină, oxibutinină) pentru a suprima contracțiile neinhibate și a îmbunătăți complianța",
   "Autocateterizare intermitentă, preferată drenajului uretral sau suprapubian permanent din cauza ratei reduse de infecții",
   "Cistoplastie de augmentare cu ansă intestinală dacă presiunile de umplere rămân înalte sub tratament medical",
   "Sfincterotomie endoscopică, care favorizează incontinența gestionabilă cu un drenaj extern tip prezervativ urinar",
   "Cateter transuretral cronic de primă intenție, rata infecțioasă fiind mai mică decât la autocateterizare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Anticolinergice (tolterodină, oxibutinină) pentru a suprima contracțiile neinhibate și a îmbunătăți complianța — Corect: Tolterodina și oxibutinina sunt citate pentru contracții neinhibate și complianță.\n\nAutocateterizare intermitentă, preferată drenajului uretral sau suprapubian permanent din cauza ratei reduse de infecții — Corect: Autocateterizarea intermitentă este preferată drenajului permanent, prin rata redusă de infecții.\n\nCistoplastie de augmentare cu ansă intestinală dacă presiunile de umplere rămân înalte sub tratament medical — Corect: Augmentarea cu ansă intestinală urmează eșecului medical la presiuni înalte.\n\nSfincterotomie endoscopică, care favorizează incontinența gestionabilă cu un drenaj extern tip prezervativ urinar — Corect: Sfincterotomia produce incontinență gestionată cu prezervativ urinar.\n\nCateter transuretral cronic de primă intenție, rata infecțioasă fiind mai mică decât la autocateterizare — Incorect: Drenajul uretral sau suprapubian cronic are rata infecțioasă mai mare; nu este prima linie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 658, Vezică neurogenă — CIC, augmentare și sfincterotomie (pagini PDF: 329).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    658
   ],
   "pdfPages": [
    329
   ],
   "section": "Vezică neurogenă — CIC, augmentare și sfincterotomie"
  },
  "learningObjective": "Ierarhizarea anticolinergicelor și a CIC, cu augmentarea sau sfincterotomia ca salvare a presiunilor înalte, față de Foley-ul cronic evitat.",
  "optionRationales": [
   "Tolterodina și oxibutinina sunt citate pentru contracții neinhibate și complianță.",
   "Autocateterizarea intermitentă este preferată drenajului permanent, prin rata redusă de infecții.",
   "Augmentarea cu ansă intestinală urmează eșecului medical la presiuni înalte.",
   "Sfincterotomia produce incontinență gestionată cu prezervativ urinar.",
   "Drenajul uretral sau suprapubian cronic are rata infecțioasă mai mare; nu este prima linie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune Foley-ul cronic înaintea autocateterizării, inversând argumentul infecțios al textului."
  },
  "textbookExpressions": [
   "Autocateterizarea intermitentă",
   "sfincterotomie"
  ]
 },
 {
  "id": "urologie-adv-084",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Carcinomul vezical — BCG, progresie și reconstrucție:",
  "options": [
   "BCG-ul începe cu o cură de inducție de 6 săptămâni, urmată de întreținere 2–3 ani",
   "Riscul de progresie musculo-invazivă este relativ redus (<10%) în Ta, dar crește în T1 sau la leziunile de grad înalt",
   "La bărbat, cistectomia radicală îndepărtează vezica, prostata, grăsimea perivezicală și ganglionii pelvini",
   "Neovezica ortotopică din intestin detubularizat se anastomozează direct la uretră, evitând derivația cutanată",
   "Supraviețuirea la 5 ani după cistectomie pentru T3 este sub 10%"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "BCG-ul începe cu o cură de inducție de 6 săptămâni, urmată de întreținere 2–3 ani — Corect: Cura de 6 săptămâni urmată de întreținere 2–3 ani este explicită.\n\nRiscul de progresie musculo-invazivă este relativ redus (<10%) în Ta, dar crește în T1 sau la leziunile de grad înalt — Corect: Pragul <10% în Ta, cu creștere în T1 sau la grad înalt, este citat.\n\nLa bărbat, cistectomia radicală îndepărtează vezica, prostata, grăsimea perivezicală și ganglionii pelvini — Corect: Conținutul cistectomiei radicale la bărbat este enumerat.\n\nNeovezica ortotopică din intestin detubularizat se anastomozează direct la uretră, evitând derivația cutanată — Corect: Anastomoza intestinului detubularizat la uretră evită stoma și cateterizarea.\n\nSupraviețuirea la 5 ani după cistectomie pentru T3 este sub 10% — Incorect: Rata de supraviețuire la 5 ani după cistectomie pentru T3 este de aproximativ 60%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 659, Carcinom vezical — Protocol BCG și neovezică (pagini PDF: 330).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    659
   ],
   "pdfPages": [
    330
   ],
   "section": "Carcinom vezical — Protocol BCG și neovezică"
  },
  "learningObjective": "Memorarea inducției BCG de 6 săptămâni, a progresiei <10% în Ta, a piesei de cistectomie masculină și a neovezicii ortotopice.",
  "optionRationales": [
   "Cura de 6 săptămâni urmată de întreținere 2–3 ani este explicită.",
   "Pragul <10% în Ta, cu creștere în T1 sau la grad înalt, este citat.",
   "Conținutul cistectomiei radicale la bărbat este enumerat.",
   "Anastomoza intestinului detubularizat la uretră evită stoma și cateterizarea.",
   "Rata de supraviețuire la 5 ani după cistectomie pentru T3 este de aproximativ 60%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește supraviețuirea de 60% din T3 cu recidiva de 50% a tumorilor superficiale sau cu un prag sub 10%."
  },
  "textbookExpressions": [
   "6 săptămâni",
   "neovezică ortotopică"
  ]
 },
 {
  "id": "urologie-adv-085",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Anatomia uretrei masculine și feminine:",
  "options": [
   "Uretra prostatică este căptușită de epiteliu de tranziție; membranoasa, bulbară și peniană de epiteliu columnar pseudostratificat sau stratificat; meatul de epiteliu scuamos",
   "Uretra feminină are circa 4 cm; treimea proximală este tranzițională, cele două treimi distale scuamoase",
   "Glandele Cowper se deschid în uretra prostatică, nu în cea bulbară",
   "Uretra anterioară include prostatica și membranoasa, nu peniana și bulbară",
   "Drenajul limfatic al uretrei posterioare se face prin ganglionii inghinali superficiali, nu iliaci"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Uretra prostatică este căptușită de epiteliu de tranziție; membranoasa, bulbară și peniană de epiteliu columnar pseudostratificat sau stratificat; meatul de epiteliu scuamos — Corect: Harta epitelială (tranziție prostatică, columnar membranos/bulbar/penian, scuamos la meat) este explicită.\n\nUretra feminină are circa 4 cm; treimea proximală este tranzițională, cele două treimi distale scuamoase — Corect: Cei 4 cm și împărțirea 1/3–2/3 sunt descrise.\n\nGlandele Cowper se deschid în uretra prostatică, nu în cea bulbară — Incorect: Glandele bulbouretrale (Cowper) se secretă în uretra bulbară.\n\nUretra anterioară include prostatica și membranoasa, nu peniana și bulbară — Incorect: Segmentul posterior cuprinde prostatica și membranoasa; anteriorul include meatul, fosa naviculară, peniana și bulbară.\n\nDrenajul limfatic al uretrei posterioare se face prin ganglionii inghinali superficiali, nu iliaci — Incorect: Uretra posterioară drenează în ganglionii obturatori și iliaci.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 664, Uretră — Epiteliu, lungime feminină și glande Cowper (pagini PDF: 335).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    664
   ],
   "pdfPages": [
    335
   ],
   "section": "Uretră — Epiteliu, lungime feminină și glande Cowper"
  },
  "learningObjective": "Potrivirea hartii epiteliale masculine și a uretrei feminine de 4 cm (1/3 tranziție, 2/3 scuamos), față de deschiderea Cowper în bulbară.",
  "optionRationales": [
   "Harta epitelială (tranziție prostatică, columnar membranos/bulbar/penian, scuamos la meat) este explicită.",
   "Cei 4 cm și împărțirea 1/3–2/3 sunt descrise.",
   "Glandele bulbouretrale (Cowper) se secretă în uretra bulbară.",
   "Segmentul posterior cuprinde prostatica și membranoasa; anteriorul include meatul, fosa naviculară, peniana și bulbară.",
   "Uretra posterioară drenează în ganglionii obturatori și iliaci."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută Cowper din bulbară în prostatică și inversează anterior/posterior, două erori de hartă din aceeași figură."
  },
  "textbookExpressions": [
   "4 cm",
   "Glandele bulbouretrale"
  ]
 },
 {
  "id": "urologie-adv-086",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Stricturile uretrale:",
  "options": [
   "Cauzele cele mai comune actuale sunt leziunile prin cădere „călare” pe perineu și instrumentarea uretrei",
   "Pentru o strictură <1 cm, limitată la mucoasă, dilatarea sau uretrotomia optică internă pot fi soluții curative",
   "Reconstrucția deschisă a unei stricturi bulbare scurte prin excizie și anastomoză primară are rată de succes permanent >98%",
   "Stricturile lungi se dilată fără evaluare imagistică prealabilă, ca în practica istorică considerată suficientă",
   "Grefele de mucoasă bucală sunt rezervate stricturilor mucoase scurte, nu celor lungi sau distale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cauzele cele mai comune actuale sunt leziunile prin cădere „călare” pe perineu și instrumentarea uretrei — Corect: Textul înlocuiește gonoreea istorică cu traumatismul călare și instrumentarea.\n\nPentru o strictură <1 cm, limitată la mucoasă, dilatarea sau uretrotomia optică internă pot fi soluții curative — Corect: Pragul <1 cm, limitat la mucoasă, pentru dilatare sau uretrotomie optică internă, este explicit.\n\nReconstrucția deschisă a unei stricturi bulbare scurte prin excizie și anastomoză primară are rată de succes permanent >98% — Corect: Rata >98% după excizie și anastomoză primară a stricturii bulbare scurte este citată.\n\nStricturile lungi se dilată fără evaluare imagistică prealabilă, ca în practica istorică considerată suficientă — Incorect: Managementul modern cere imagistică retrogradă și anterogradă plus uretroscopie înaintea tratamentului.\n\nGrefele de mucoasă bucală sunt rezervate stricturilor mucoase scurte, nu celor lungi sau distale — Incorect: Mucoasa bucală (sau prepuțul) servește stricturilor lungi sau distale, nu pe cele scurte mucoase.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 666, Strictură uretrală — Cauze actuale, VIU și succes >98% (pagini PDF: 337).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    666
   ],
   "pdfPages": [
    337
   ],
   "section": "Strictură uretrală — Cauze actuale, VIU și succes >98%"
  },
  "learningObjective": "Actualizarea etiologiei (cădere călare, instrumentare), a ferestrei <1 cm pentru VIU și a succesului >98% al anastomozei bulbare scurte.",
  "optionRationales": [
   "Textul înlocuiește gonoreea istorică cu traumatismul călare și instrumentarea.",
   "Pragul <1 cm, limitat la mucoasă, pentru dilatare sau uretrotomie optică internă, este explicit.",
   "Rata >98% după excizie și anastomoză primară a stricturii bulbare scurte este citată.",
   "Managementul modern cere imagistică retrogradă și anterogradă plus uretroscopie înaintea tratamentului.",
   "Mucoasa bucală (sau prepuțul) servește stricturilor lungi sau distale, nu pe cele scurte mucoase."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează dilatațiile „orbe” istorice și atribuie grefa bucală stricturii scurte, exact invers algoritmului modern."
  },
  "textbookExpressions": [
   ">98%",
   "uretrotomia optică internă"
  ]
 },
 {
  "id": "urologie-adv-087",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Un bărbat prezintă secreție uretrală galben-verzuie la o săptămână după un contact sexual neprotejat. Sunt adevărate:",
  "options": [
   "După o incubație de 2–14 zile, majoritatea bărbaților cu gonoree au secreție galben-verzuie; circa 25% rămân asimptomatici",
   "Diagnosticul se sprijină pe culturi pe mediu Thayer-Martin; pacientul și partenerii se tratează înaintea rezultatului bacteriologic",
   "În practică, la suspiciune de BTS cu gonococ sau chlamydia se asociază ceftriaxona și azitromicina",
   "Azitromicina 1 g oral este monoterapia de elecție a gonococului, fără ceftriaxonă",
   "Incubația uretritei non-gonococice este de 2–14 zile, identică gonoreei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "După o incubație de 2–14 zile, majoritatea bărbaților cu gonoree au secreție galben-verzuie; circa 25% rămân asimptomatici — Corect: Incubația 2–14 zile, secreția galben-verzuie și ponderea de 25% asimptomatici sunt explicite.\n\nDiagnosticul se sprijină pe culturi pe mediu Thayer-Martin; pacientul și partenerii se tratează înaintea rezultatului bacteriologic — Corect: Mediul Thayer-Martin și tratamentul înaintea rezultatului sunt descrise.\n\nÎn practică, la suspiciune de BTS cu gonococ sau chlamydia se asociază ceftriaxona și azitromicina — Corect: Asocierea ceftriaxonă plus azitromicină în suspiciunea de BTS mixtă este enunțată.\n\nAzitromicina 1 g oral este monoterapia de elecție a gonococului, fără ceftriaxonă — Incorect: Azitromicina 1 g este tratamentul de elecție al uretritei non-gonococice, nu monoterapia gonococului.\n\nIncubația uretritei non-gonococice este de 2–14 zile, identică gonoreei — Incorect: Uretrita non-gonococică are incubație de 1–3 săptămâni.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 668, Uretrite — Incubație, 25% asimptomatici și dublă terapie (pagini PDF: 339).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    668
   ],
   "pdfPages": [
    339
   ],
   "section": "Uretrite — Incubație, 25% asimptomatici și dublă terapie"
  },
  "learningObjective": "Înlănțuirea incubației 2–14 zile, a celor 25% asimptomatici, a mediului Thayer-Martin și a asocierii ceftriaxonă–azitromicină.",
  "optionRationales": [
   "Incubația 2–14 zile, secreția galben-verzuie și ponderea de 25% asimptomatici sunt explicite.",
   "Mediul Thayer-Martin și tratamentul înaintea rezultatului sunt descrise.",
   "Asocierea ceftriaxonă plus azitromicină în suspiciunea de BTS mixtă este enunțată.",
   "Azitromicina 1 g este tratamentul de elecție al uretritei non-gonococice, nu monoterapia gonococului.",
   "Uretrita non-gonococică are incubație de 1–3 săptămâni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Substituie doza IM de ceftriaxonă cu azitromicina orală a nongonococului și aliniază incubațiile (2–14 zile versus 1–3 săptămâni)."
  },
  "textbookExpressions": [
   "Thayer-Mattin",
   "25%"
  ]
 },
 {
  "id": "urologie-adv-088",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Anorhidia și patența procesului vaginal:",
  "options": [
   "Anorhidia reprezintă 3–5% dintre testiculele nepalpabile; majoritatea urmează torsiunii prenatale sau accidentelor vasculare",
   "Semnul „mănușii de mătase” la rularea cordonului sugerează sac peritoneal; hidrocelul persistent după 1 an se tratează prin ligatură înaltă la inelul intern",
   "Testiculul retractil rămâne blocat extra-scrotal și impune orhidopexie imediată",
   "CT-ul este investigația de primă intenție pentru localizarea testiculului nepalpabil",
   "Anorhia bilaterală nu necesită substituție hormonală la pubertate"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Anorhidia reprezintă 3–5% dintre testiculele nepalpabile; majoritatea urmează torsiunii prenatale sau accidentelor vasculare — Corect: Ponderea 3–5% și mecanismul (torsiune prenatală sau accident vascular, rar agenezie) sunt explicite.\n\nSemnul „mănușii de mătase” la rularea cordonului sugerează sac peritoneal; hidrocelul persistent după 1 an se tratează prin ligatură înaltă la inelul intern — Corect: Semnul mănușii de mătase și ligatura înaltă la inelul intern după 1 an sunt descrise.\n\nTesticulul retractil rămâne blocat extra-scrotal și impune orhidopexie imediată — Incorect: Testiculele retractile coboară, de obicei, în scrot la pubertate.\n\nCT-ul este investigația de primă intenție pentru localizarea testiculului nepalpabil — Incorect: CT și ecografia nu sunt utile, în general, în localizare; laparoscopia este adesea utilă.\n\nAnorhia bilaterală nu necesită substituție hormonală la pubertate — Incorect: Anorhia bilaterală conduce la sterilitate și necesită terapie de suplinire hormonală la pubertate.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 669, Anorhidie 3–5% și semnul mănușii de mătase (pagini PDF: 340).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    669
   ],
   "pdfPages": [
    340
   ],
   "section": "Anorhidie 3–5% și semnul mănușii de mătase"
  },
  "learningObjective": "Separarea anorhidiei (3–5%, torsiune prenatală) de semnul mănușii de mătase și de ligatura înaltă a hidrocelului după 1 an.",
  "optionRationales": [
   "Ponderea 3–5% și mecanismul (torsiune prenatală sau accident vascular, rar agenezie) sunt explicite.",
   "Semnul mănușii de mătase și ligatura înaltă la inelul intern după 1 an sunt descrise.",
   "Testiculele retractile coboară, de obicei, în scrot la pubertate.",
   "CT și ecografia nu sunt utile, în general, în localizare; laparoscopia este adesea utilă.",
   "Anorhia bilaterală conduce la sterilitate și necesită terapie de suplinire hormonală la pubertate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Operează de urgență testiculul retractil (care coboară la pubertate) și promovează CT-ul pe care textul îl consideră inutil."
  },
  "textbookExpressions": [
   "3-5%",
   "mănuşii de mătase"
  ]
 },
 {
  "id": "urologie-adv-089",
  "topicId": "urologie",
  "type": "CS",
  "stem": "La palparea scrotului, o masă adiacentă cordonului, percepută „ca un sac de râme”, sugerează:",
  "options": [
   "Varicocel, prezent la circa 15–20% dintre bărbați, cu predilecție stângă; se corectează dacă asociază durere ipsilaterală, atrofie testiculară sau subfertilitate",
   "Cancer testicular, cu indicație de orhidectomie scrotală imediată",
   "Spermatocel care transiluminează prin testicul",
   "Hidrocel prin exces de absorbție la foița parietală a vaginalei",
   "Indicație de limfodisecție retroperitoneală de principiu, fără alte criterii"
  ],
  "correct": [
   0
  ],
  "explanation": "Varicocel, prezent la circa 15–20% dintre bărbați, cu predilecție stângă; se corectează dacă asociază durere ipsilaterală, atrofie testiculară sau subfertilitate — Corect: Analogia „sac de râme”, ponderea 15–20%, predilecția stângă și criteriile (durere, atrofie, subfertilitate) sunt explicite.\n\nCancer testicular, cu indicație de orhidectomie scrotală imediată — Incorect: Masa testiculară are probabilitate înaltă de malignitate; abordul este inghinal, nu scrotal.\n\nSpermatocel care transiluminează prin testicul — Incorect: Spermatocelul transiluminează deasupra sau sub testicul, nu palpează ca un sac de râme pe cordon.\n\nHidrocel prin exces de absorbție la foița parietală a vaginalei — Incorect: Hidrocelul transiluminează prin testicul, prin scăderea absorbției (nu exces) la foița parietală.\n\nIndicație de limfodisecție retroperitoneală de principiu, fără alte criterii — Incorect: RPLND ține de tumorile germinale după orhidectomie inghinală, nu de varicocel.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 670, Varicocelul — Sac de râme, 15–20% și indicații (pagini PDF: 341).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    670
   ],
   "pdfPages": [
    341
   ],
   "section": "Varicocelul — Sac de râme, 15–20% și indicații"
  },
  "learningObjective": "Recunoașterea varicocelului (15–20%, stânga, valvele venei testiculare) și a celor trei indicații de corecție, distinct de masa testiculară malignă.",
  "optionRationales": [
   "Analogia „sac de râme”, ponderea 15–20%, predilecția stângă și criteriile (durere, atrofie, subfertilitate) sunt explicite.",
   "Masa testiculară are probabilitate înaltă de malignitate; abordul este inghinal, nu scrotal.",
   "Spermatocelul transiluminează deasupra sau sub testicul, nu palpează ca un sac de râme pe cordon.",
   "Hidrocelul transiluminează prin testicul, prin scăderea absorbției (nu exces) la foița parietală.",
   "RPLND ține de tumorile germinale după orhidectomie inghinală, nu de varicocel."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează varicocelul ca cancer (orhidectomie scrotală, RPLND) și inversează mecanismul hidrocelului (scăderea absorbției)."
  },
  "textbookExpressions": [
   "15-20%",
   "sac de râme"
  ]
 },
 {
  "id": "urologie-adv-090",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Evaluarea de laborator a infertilității masculine:",
  "options": [
   "Factorul masculin este responsabil în 40% din cazuri și parțial responsabil în încă 20%",
   "Se examinează trei probe, după minim 24 de ore de abstinență, la mai puțin de o oră de la colectare",
   "Standardele WHO includ volum 1,5–5,0 mL, densitate >20 milioane/mL, mobilitate >60% și morfologie >60% normali",
   "Ejaculatul se colectează într-un borcan de sticlă cu gură largă, plasticul putând fi spermicid",
   "O singură probă, imediat după ejaculare într-un prezervativ lubrifiat, este suficientă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Factorul masculin este responsabil în 40% din cazuri și parțial responsabil în încă 20% — Corect: Cotele 40% (cauză unică) și încă 20% (parțial) sunt explicite.\n\nSe examinează trei probe, după minim 24 de ore de abstinență, la mai puțin de o oră de la colectare — Corect: Trei probe, abstinență minim 24 de ore și examinare sub o oră sunt cerute.\n\nStandardele WHO includ volum 1,5–5,0 mL, densitate >20 milioane/mL, mobilitate >60% și morfologie >60% normali — Corect: Tabelul 29-5 listează 1,5–5,0 mL, >20 milioane/mL, mobilitate >60% și morfologie >60%.\n\nEjaculatul se colectează într-un borcan de sticlă cu gură largă, plasticul putând fi spermicid — Corect: Borcanul de sticlă cu gură largă este precizat; plasticul poate fi spermicid.\n\nO singură probă, imediat după ejaculare într-un prezervativ lubrifiat, este suficientă — Incorect: O singură probă este insuficientă; lubrifianții pot avea efect spermicid.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 671, Infertilitate — Factor masculin 40%+20% și spermograma WHO (pagini PDF: 342).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    671
   ],
   "pdfPages": [
    342
   ],
   "section": "Infertilitate — Factor masculin 40%+20% și spermograma WHO"
  },
  "learningObjective": "Aplicarea ponderii 40%+20%, a protocolului cu trei probe și a standardelor WHO (volum, densitate, mobilitate, morfologie).",
  "optionRationales": [
   "Cotele 40% (cauză unică) și încă 20% (parțial) sunt explicite.",
   "Trei probe, abstinență minim 24 de ore și examinare sub o oră sunt cerute.",
   "Tabelul 29-5 listează 1,5–5,0 mL, >20 milioane/mL, mobilitate >60% și morfologie >60%.",
   "Borcanul de sticlă cu gură largă este precizat; plasticul poate fi spermicid.",
   "O singură probă este insuficientă; lubrifianții pot avea efect spermicid."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce evaluarea la o singură probă în prezervativ lubrifiat, exact ce textul interzice prin protocolul de trei probe în sticlă."
  },
  "textbookExpressions": [
   "1.5-5.0 ml",
   "20 milioane/ml"
  ]
 },
 {
  "id": "urologie-adv-091",
  "topicId": "urologie",
  "type": "CM",
  "stem": "După eșecul unui Foley 16 French la un bărbat cu prostată mărită, afirmațiile corecte sunt:",
  "options": [
   "Un cateter cu vârf cudat (18–20 French) se avansează păstrând portul de balon orientat în sus",
   "Dacă urina nu apare, lumenul poate fi blocat de lubrifiant, care se dizolvă de obicei într-un minut; se poate iriga cu 60 mL ser cu seringa Toomey, fără a umfla balonul",
   "Balonul se umflă de îndată ce vârful a trecut meatul, chiar fără scurgere de urină",
   "Forțarea manevrei este metoda de elecție când lobul median opune rezistență",
   "Strictura se trece, de regulă, cu un cateter 24 French, mai gros decât cel standard"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Un cateter cu vârf cudat (18–20 French) se avansează păstrând portul de balon orientat în sus — Corect: Calibrul 18–20 French, vârful curbat în sus și orientarea portului de balon sunt explicite.\n\nDacă urina nu apare, lumenul poate fi blocat de lubrifiant, care se dizolvă de obicei într-un minut; se poate iriga cu 60 mL ser cu seringa Toomey, fără a umfla balonul — Corect: Blocajul temporar de lubrifiant (circa un minut) și irigația cu 60 mL prin seringa Toomey, fără umflarea balonului, sunt descrise.\n\nBalonul se umflă de îndată ce vârful a trecut meatul, chiar fără scurgere de urină — Incorect: Balonul nu se umflă până când cateterul avansează pe tot traiectul și urina devine vizibilă.\n\nForțarea manevrei este metoda de elecție când lobul median opune rezistență — Incorect: Forțarea riscă o leziune uretrală sau o cale falsă; se injectează lubrifiant adițional și se schimbă cateterul.\n\nStrictura se trece, de regulă, cu un cateter 24 French, mai gros decât cel standard — Incorect: La strictură poate fi indicat un calibru mai mic (12–14 French), nu unul mai gros.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 674, 673, Cateterism — Vârf cudat 18–20 Fr și seringa Toomey (pagini PDF: 345, 344).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    674,
    673
   ],
   "pdfPages": [
    345,
    344
   ],
   "section": "Cateterism — Vârf cudat 18–20 Fr și seringa Toomey"
  },
  "learningObjective": "Aplicarea cateterului cudat 18–20 Fr cu portul în sus și a irigației Toomey cu 60 mL, fără umflarea balonului înaintea urinei.",
  "optionRationales": [
   "Calibrul 18–20 French, vârful curbat în sus și orientarea portului de balon sunt explicite.",
   "Blocajul temporar de lubrifiant (circa un minut) și irigația cu 60 mL prin seringa Toomey, fără umflarea balonului, sunt descrise.",
   "Balonul nu se umflă până când cateterul avansează pe tot traiectul și urina devine vizibilă.",
   "Forțarea riscă o leziune uretrală sau o cale falsă; se injectează lubrifiant adițional și se schimbă cateterul.",
   "La strictură poate fi indicat un calibru mai mic (12–14 French), nu unul mai gros."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă balonul în uretră, forțează lobul median și trece strictura cu un cateter mai gros — trei erori din același algoritm practic."
  },
  "textbookExpressions": [
   "18-20 French",
   "seringa Toomey"
  ]
 },
 {
  "id": "urologie-adv-092",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la secrețiile și evoluția prostatei:",
  "options": [
   "Secrețiile glandei prostatice reprezintă aproximativ 20% din volumul ejaculatului normal și furnizează substanțe nutritive pentru motilitatea spermatozoizilor",
   "Prostata înconjoară uretra pe o distanță de 8–10 cm, analog uretrei feminine",
   "Glanda rămâne latentă până în a șaptea decadă, când începe secreția exocrină",
   "Lichidul prostatic inhibă motilitatea spermatozoizilor, reducând volumul ejaculatului sub 5%",
   "Creșterea în volum începe din prima decadă de viață și nu conduce la hiperplazie"
  ],
  "correct": [
   0
  ],
  "explanation": "Secrețiile glandei prostatice reprezintă aproximativ 20% din volumul ejaculatului normal și furnizează substanțe nutritive pentru motilitatea spermatozoizilor — Corect: Textul precizează că secrețiile reprezintă aproximativ 20% din volumul ejaculatului și hrănesc motilitatea spermatozoizilor.\n\nProstata înconjoară uretra pe o distanță de 8–10 cm, analog uretrei feminine — Incorect: Uretra prostatică măsoară 2–3 cm, nu 8–10 cm.\n\nGlanda rămâne latentă până în a șaptea decadă, când începe secreția exocrină — Incorect: Prostata rămâne latentă de la naștere până la pubertate, apoi funcționează ca glandă exocrină.\n\nLichidul prostatic inhibă motilitatea spermatozoizilor, reducând volumul ejaculatului sub 5% — Incorect: Lichidul prostatic susține motilitatea, nu o inhibă.\n\nCreșterea în volum începe din prima decadă de viață și nu conduce la hiperplazie — Incorect: Creșterea în volum începe din a patra decadă și poate conduce la HBP.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 635, Prostata — Secreții (20% din ejaculat) și lag-ul pubertar (pagini PDF: 306).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    635
   ],
   "pdfPages": [
    306
   ],
   "section": "Prostata — Secreții (20% din ejaculat) și lag-ul pubertar"
  },
  "learningObjective": "Recunoașterea cotei de 20% din ejaculat și a latenței până la pubertate, distincte de uretra prostatică de 2–3 cm.",
  "optionRationales": [
   "Textul precizează că secrețiile reprezintă aproximativ 20% din volumul ejaculatului și hrănesc motilitatea spermatozoizilor.",
   "Uretra prostatică măsoară 2–3 cm, nu 8–10 cm.",
   "Prostata rămâne latentă de la naștere până la pubertate, apoi funcționează ca glandă exocrină.",
   "Lichidul prostatic susține motilitatea, nu o inhibă.",
   "Creșterea în volum începe din a patra decadă și poate conduce la HBP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează cota de 20% din ejaculat cu lungimea uretrei și mută debutul creșterii din decada a patra în copilărie."
  },
  "textbookExpressions": [
   "20% din volumul ejaculatului",
   "a patra decadă"
  ]
 },
 {
  "id": "urologie-adv-093",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Hiperplazia benignă de prostată se caracterizează prin:",
  "options": [
   "Combină hiperplazia (proliferarea numărului de celule) cu hipertrofia (creșterea în volum a celulelor) în zona tranzițională",
   "Procesul poate fi demonstrat histologic încă din a treia decadă a vieții; simptomele sunt mai puțin întâlnite înainte de 50 de ani",
   "Nu există o corelație directă între mărimea prostatei și simptomatologie",
   "Simptomele HBP sunt tipice înainte de 30 de ani, zona centrală fiind sediul proliferării",
   "HBP cauzează, demonstrat, carcinomul prostatic, prin aceeași hipertrofie acinară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Combină hiperplazia (proliferarea numărului de celule) cu hipertrofia (creșterea în volum a celulelor) în zona tranzițională — Corect: Definiția prin hiperplazie și hipertrofie, în zona tranzițională, este explicită.\n\nProcesul poate fi demonstrat histologic încă din a treia decadă a vieții; simptomele sunt mai puțin întâlnite înainte de 50 de ani — Corect: Dovada histologică din a treia decadă și rarisimitatea simptomelor înainte de 50 de ani sunt citate.\n\nNu există o corelație directă între mărimea prostatei și simptomatologie — Corect: Absența corelației directe mărime–simptomatologie este enunțată.\n\nSimptomele HBP sunt tipice înainte de 30 de ani, zona centrală fiind sediul proliferării — Incorect: Simptomele sunt mai puțin întâlnite înainte de 50 de ani; sediul este zona tranzițională, nu cea centrală.\n\nHBP cauzează, demonstrat, carcinomul prostatic, prin aceeași hipertrofie acinară — Incorect: Textul neagă o asociere cauzală între HBP și cancer.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 636, HBP — Hiperplazie plus hipertrofie din decada a treia (pagini PDF: 307).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    636
   ],
   "pdfPages": [
    307
   ],
   "section": "HBP — Hiperplazie plus hipertrofie din decada a treia"
  },
  "learningObjective": "Potrivirea dublului mecanism celular, a debutului histologic din decada a treia și a lipsei de corelație volum–simptom.",
  "optionRationales": [
   "Definiția prin hiperplazie și hipertrofie, în zona tranzițională, este explicită.",
   "Dovada histologică din a treia decadă și rarisimitatea simptomelor înainte de 50 de ani sunt citate.",
   "Absența corelației directe mărime–simptomatologie este enunțată.",
   "Simptomele sunt mai puțin întâlnite înainte de 50 de ani; sediul este zona tranzițională, nu cea centrală.",
   "Textul neagă o asociere cauzală între HBP și cancer."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută debutul histologic din decada a treia înainte de 30 de ani și inventează cauzalitatea HBP–cancer din același paragraf epidemiologic."
  },
  "textbookExpressions": [
   "zona tranziţională",
   "a treia decadă"
  ]
 },
 {
  "id": "urologie-adv-094",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre cuantificarea simptomelor și chirurgia transuretrală a HBP:",
  "options": [
   "Cistoscopia dezvăluie hiperplazia trilobară și, nu de puține ori, un lob median cu mecanism de „valvă cu bilă”",
   "Riscul de incontinență după TURP este scăzut (1–2%)",
   "Pacientul rămâne internat 7–10 zile după TURP, micțiunea fiind amânată până la controlul de o lună",
   "Simptomele sunt cuantificate adesea cu chestionarul Asociației Urologice Americane, îmbunătățirea scorului măsurând răspunsul",
   "Disfuncția sexuală asociată TURP apare la peste jumătate dintre pacienți"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Cistoscopia dezvăluie hiperplazia trilobară și, nu de puține ori, un lob median cu mecanism de „valvă cu bilă” — Corect: Hiperplazia trilobară și analogia „valvă cu bilă” a lobului median sunt explicite.\n\nRiscul de incontinență după TURP este scăzut (1–2%) — Corect: Pragul de incontinență 1–2% este citat la finalul paginii.\n\nPacientul rămâne internat 7–10 zile după TURP, micțiunea fiind amânată până la controlul de o lună — Incorect: Internarea este de una sau două nopți, cu micțiune adecvată la externare.\n\nSimptomele sunt cuantificate adesea cu chestionarul Asociației Urologice Americane, îmbunătățirea scorului măsurând răspunsul — Corect: Chestionarul AUA și folosirea scorului ca măsură obiectivă sunt descrise.\n\nDisfuncția sexuală asociată TURP apare la peste jumătate dintre pacienți — Incorect: Disfuncția sexuală asociată procedurii apare la <5% dintre pacienți, pe pagina următoare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 637, 638, HBP — Valva cu bilă, scor AUA și incontinența 1–2% (pagini PDF: 308, 309).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    637,
    638
   ],
   "pdfPages": [
    308,
    309
   ],
   "section": "HBP — Valva cu bilă, scor AUA și incontinența 1–2%"
  },
  "learningObjective": "Citirea cistoscopiei cu lob median „valvă cu bilă”, a internării scurte și a incontinenței de 1–2%, față de disfuncția sexuală <5%.",
  "optionRationales": [
   "Hiperplazia trilobară și analogia „valvă cu bilă” a lobului median sunt explicite.",
   "Pragul de incontinență 1–2% este citat la finalul paginii.",
   "Internarea este de una sau două nopți, cu micțiune adecvată la externare.",
   "Chestionarul AUA și folosirea scorului ca măsură obiectivă sunt descrise.",
   "Disfuncția sexuală asociată procedurii apare la <5% dintre pacienți, pe pagina următoare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă internarea de 1–2 nopți la o săptămână și disfuncția sexuală de sub 5% la peste 50%."
  },
  "textbookExpressions": [
   "valvă cu bilă",
   "1-2%"
  ]
 },
 {
  "id": "urologie-adv-095",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Procedura cel mai frecvent utilizată, în afară de TURP, pentru simptomele de tract urinar inferior este:",
  "options": [
   "Termoterapia transuretrală cu microunde, încă folosită pe scară largă pentru ameliorare majoră",
   "Tratamentul cu laser GreenLight, prin vaporizarea țesutului prostatic, cu hemoragie mai redusă decât electrorezecția",
   "Ablația transuretrală cu ac, superioară electrorezecției pentru controlul oncologic",
   "Prostatectomia radicală deschisă, ca tratament de primă intenție al HBP",
   "Crioterapia prostatică, cu rezultate superioare TURP pentru adenom"
  ],
  "correct": [
   1
  ],
  "explanation": "Termoterapia transuretrală cu microunde, încă folosită pe scară largă pentru ameliorare majoră — Incorect: Termoterapia cu microunde și ablația cu ac nu mai sunt folosite pe scară largă, din cauza ameliorării modeste.\n\nTratamentul cu laser GreenLight, prin vaporizarea țesutului prostatic, cu hemoragie mai redusă decât electrorezecția — Corect: Textul numește laserul GreenLight procedura cel mai frecvent utilizată în afară de TURP, cu hemoragie mai redusă.\n\nAblația transuretrală cu ac, superioară electrorezecției pentru controlul oncologic — Incorect: Ablația cu ac nu este superioară electrorezecției și nu are viză oncologică în HBP.\n\nProstatectomia radicală deschisă, ca tratament de primă intenție al HBP — Incorect: Prostatectomia radicală vizează cancerul, nu enuclearea HBP.\n\nCrioterapia prostatică, cu rezultate superioare TURP pentru adenom — Incorect: Crioterapia este discutată la cancerul localizat, cu rezultate inferioare metodelor curative.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 638, HBP — Laser GreenLight versus TUMT/TUNA (pagini PDF: 309).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    638
   ],
   "pdfPages": [
    309
   ],
   "section": "HBP — Laser GreenLight versus TUMT/TUNA"
  },
  "learningObjective": "Recunoașterea vaporizării GreenLight ca alternativă actuală la TURP, TUMT și TUNA nemaifiind folosite pe scară largă.",
  "optionRationales": [
   "Termoterapia cu microunde și ablația cu ac nu mai sunt folosite pe scară largă, din cauza ameliorării modeste.",
   "Textul numește laserul GreenLight procedura cel mai frecvent utilizată în afară de TURP, cu hemoragie mai redusă.",
   "Ablația cu ac nu este superioară electrorezecției și nu are viză oncologică în HBP.",
   "Prostatectomia radicală vizează cancerul, nu enuclearea HBP.",
   "Crioterapia este discutată la cancerul localizat, cu rezultate inferioare metodelor curative."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Repune TUMT/TUNA — abandonate pentru ameliorare modestă — ca standard și confundă GreenLight-ul HBP cu crioterapia oncologică."
  },
  "textbookExpressions": [
   "GreenLight",
   "Termoterapia transuretrală"
  ]
 },
 {
  "id": "urologie-adv-096",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații privind IRM-ul prostatic, formele PSA și metastazele osoase sunt adevărate?",
  "options": [
   "PSA-ul seric se regăsește sub două forme dominante, una conjugată cu α1-antichimotripsina și una liberă",
   "Pentru standardizarea interpretării IRM s-a adoptat scorul PI-RADS în majoritatea centrelor",
   "Metastazele osoase sunt tipic osteoblastice, pe scheletul axial; cele de părți moi fără leziuni osoase concomitente sunt rare",
   "TRUS este principalul instrument de stadializare locală, tușeul rectal fiind superfluu",
   "Un PSA de 3,9 ng/mL este considerat scăzut pentru un bărbat în decada a 6-a"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "PSA-ul seric se regăsește sub două forme dominante, una conjugată cu α1-antichimotripsina și una liberă — Corect: Cele două forme (conjugată cu α1-antichimotripsina și liberă) sunt explicite.\n\nPentru standardizarea interpretării IRM s-a adoptat scorul PI-RADS în majoritatea centrelor — Corect: Adoptarea PI-RADS pentru IRM-ul pre-biopsie este enunțată.\n\nMetastazele osoase sunt tipic osteoblastice, pe scheletul axial; cele de părți moi fără leziuni osoase concomitente sunt rare — Corect: Tiparul osteoblastic axial și rarisimitatea metastazelor de părți moi izolate sunt citate.\n\nTRUS este principalul instrument de stadializare locală, tușeul rectal fiind superfluu — Incorect: Modalitatea principală de stadializare locală este tușeul; TRUS are valoare limitată în stadializare.\n\nUn PSA de 3,9 ng/mL este considerat scăzut pentru un bărbat în decada a 6-a — Incorect: Un PSA de 3,9 ng/mL este considerat mărit pentru un bărbat în decada a 6-a.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 639, Carcinom prostatic — PI-RADS, antichimotripsină și osteoblaste (pagini PDF: 310).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    639
   ],
   "pdfPages": [
    310
   ],
   "section": "Carcinom prostatic — PI-RADS, antichimotripsină și osteoblaste"
  },
  "learningObjective": "Potrivirea dublei forme a PSA, a scorului PI-RADS și a pattern-ului osteoblastic axial, față de valoarea 3,9 „scăzută” în decada a 6-a.",
  "optionRationales": [
   "Cele două forme (conjugată cu α1-antichimotripsina și liberă) sunt explicite.",
   "Adoptarea PI-RADS pentru IRM-ul pre-biopsie este enunțată.",
   "Tiparul osteoblastic axial și rarisimitatea metastazelor de părți moi izolate sunt citate.",
   "Modalitatea principală de stadializare locală este tușeul; TRUS are valoare limitată în stadializare.",
   "Un PSA de 3,9 ng/mL este considerat mărit pentru un bărbat în decada a 6-a."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează pragul de vârstă al PSA-ului 3,9 ng/mL și pune TRUS-ul deasupra tușeului în stadializarea locală."
  },
  "textbookExpressions": [
   "Pl-RADS",
   "antichimotripsina"
  ]
 },
 {
  "id": "urologie-adv-097",
  "topicId": "urologie",
  "type": "CM",
  "stem": "În prostatectomia radicală retropubică și limfodisecția pelvină se recomandă:",
  "options": [
   "Limitele limfodisecției: bifurcația arterei iliace comune (proximal), vena iliacă circumflexă (distal), porțiunea mijlocie a arterei iliace externe (lateral) și peretele vezical (medial)",
   "Piesa include prostata în întregime, capsula, veziculele seminale și porțiunea ampulară a ductelor deferente",
   "După îndepărtare se realizează anastomoza dintre uretră și colul vezical",
   "Prezervarea bandeletelor neuro-vasculare postero-laterale poate menține potența în aproximativ două treimi din cazuri",
   "Marjele negative asociază o rată de supraviețuire fără boală la 15 ani de sub 10%"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Limitele limfodisecției: bifurcația arterei iliace comune (proximal), vena iliacă circumflexă (distal), porțiunea mijlocie a arterei iliace externe (lateral) și peretele vezical (medial) — Corect: Cele patru limite anatomice ale limfodisecției sunt enumerate explicit.\n\nPiesa include prostata în întregime, capsula, veziculele seminale și porțiunea ampulară a ductelor deferente — Corect: Conținutul piesei, inclusiv ampula deferentelor, este descris.\n\nDupă îndepărtare se realizează anastomoza dintre uretră și colul vezical — Corect: Anastomoza uretră–col vezical este pasul reconstructiv citat.\n\nPrezervarea bandeletelor neuro-vasculare postero-laterale poate menține potența în aproximativ două treimi din cazuri — Corect: Păstrarea potenței în aproximativ două treimi, prin bandeletele postero-laterale, este enunțată.\n\nMarjele negative asociază o rată de supraviețuire fără boală la 15 ani de sub 10% — Incorect: Rata de supraviețuire fără boală la 15 ani, la marje negative, este de aproximativ 50%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 640, Prostatectomie radicală — Limite limfatice, ampula și NVB (pagini PDF: 311).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    640
   ],
   "pdfPages": [
    311
   ],
   "section": "Prostatectomie radicală — Limite limfatice, ampula și NVB"
  },
  "learningObjective": "Memorarea reperelor de limfodisecție, a piesei (vezicule, ampula deferentelor) și a anastomozei uretro-vezicale, cu potența în 2/3.",
  "optionRationales": [
   "Cele patru limite anatomice ale limfodisecției sunt enumerate explicit.",
   "Conținutul piesei, inclusiv ampula deferentelor, este descris.",
   "Anastomoza uretră–col vezical este pasul reconstructiv citat.",
   "Păstrarea potenței în aproximativ două treimi, prin bandeletele postero-laterale, este enunțată.",
   "Rata de supraviețuire fără boală la 15 ani, la marje negative, este de aproximativ 50%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește supraviețuirea fără boală de 50% la 15 ani cu un prag sub 10%, păstrând corect restul piesei radicale."
  },
  "textbookExpressions": [
   "bandeletelor neuro-vasculare",
   "15 ani"
  ]
 },
 {
  "id": "urologie-adv-098",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Următoarele afirmații despre prostatectomia minim invazivă și boala rezistentă la castrare sunt adevărate:",
  "options": [
   "În prezent, aproximativ 90% dintre prostatectomii se realizează laparoscopic sau robotic",
   "Abordurile minim invazive asociază aspect estetic superior, risc transfuzional mai mic, recuperare mai scurtă și continență mai rapidă",
   "Terapiile de linia a doua (abirateronă, enzalutamidă, apalutamidă) și chimioterapia cu taxani au eficacitate moderată în boala rezistentă la castrare",
   "Supraviețuirea medie, în era PSA, la cancerul refractar hormonal este sub 6 luni",
   "Rezultatele oncologice pe termen scurt ale tehnicilor minim invazive sunt inferioare abordului deschis"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În prezent, aproximativ 90% dintre prostatectomii se realizează laparoscopic sau robotic — Corect: Cota de aproximativ 90% laparoscopic/robotic este explicită.\n\nAbordurile minim invazive asociază aspect estetic superior, risc transfuzional mai mic, recuperare mai scurtă și continență mai rapidă — Corect: Cele patru avantaje față de abordul deschis sunt listate.\n\nTerapiile de linia a doua (abirateronă, enzalutamidă, apalutamidă) și chimioterapia cu taxani au eficacitate moderată în boala rezistentă la castrare — Corect: Abiraterona, enzalutamida, apalutamida și taxanii sunt numite terapii de linia a doua.\n\nSupraviețuirea medie, în era PSA, la cancerul refractar hormonal este sub 6 luni — Incorect: Supraviețuirea medie citată este de aproximativ 53 de luni.\n\nRezultatele oncologice pe termen scurt ale tehnicilor minim invazive sunt inferioare abordului deschis — Incorect: Rezultatele oncologice pe termen scurt sunt echivalente intervenției deschise.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 641, Prostatectomie robotică 90% și linia a doua (abirateronă) (pagini PDF: 312).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    641
   ],
   "pdfPages": [
    312
   ],
   "section": "Prostatectomie robotică 90% și linia a doua (abirateronă)"
  },
  "learningObjective": "Fixarea cotei de 90% minim invaziv, a celor patru avantaje perioperatorii și a tripletului abirateronă–enzalutamidă–apalutamidă plus taxani.",
  "optionRationales": [
   "Cota de aproximativ 90% laparoscopic/robotic este explicită.",
   "Cele patru avantaje față de abordul deschis sunt listate.",
   "Abiraterona, enzalutamida, apalutamida și taxanii sunt numite terapii de linia a doua.",
   "Supraviețuirea medie citată este de aproximativ 53 de luni.",
   "Rezultatele oncologice pe termen scurt sunt echivalente intervenției deschise."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce supraviețuirea din era PSA de la 53 de luni sub 6 luni și declară mini-invazivul oncologic inferior."
  },
  "textbookExpressions": [
   "90%",
   "abirateronă"
  ]
 },
 {
  "id": "urologie-adv-099",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Un pacient dezvoltă hiponatremie după TURP, iar altul acidoză după derivație urinară cu intestin. Sunt adevărate:",
  "options": [
   "Hiponatremia prin absorbția lichidului de irigație definește sindromul post-TURP",
   "Derivațiile care utilizează segmente intestinale pot produce acidoză metabolică hipercloremică",
   "Vasul aberant polar superior, nu cel inferior, se asociază stenozei congenitale de joncțiune pielo-ureterală",
   "Capsula fibroasă renală nu poate fi disecată de pe parenchim",
   "Doar 5% din debitul cardiac este direcționat către rinichi"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Hiponatremia prin absorbția lichidului de irigație definește sindromul post-TURP — Corect: Sindromul post-TURP prin absorbția lichidului de irigație este exemplul citat de hiponatremie.\n\nDerivațiile care utilizează segmente intestinale pot produce acidoză metabolică hipercloremică — Corect: Acidoza metabolică hipercloremică după derivații cu intestin este enunțată.\n\nVasul aberant polar superior, nu cel inferior, se asociază stenozei congenitale de joncțiune pielo-ureterală — Incorect: Vasul aberant polar inferior, nu cel superior, se asociază stenozei de joncțiune.\n\nCapsula fibroasă renală nu poate fi disecată de pe parenchim — Incorect: Capsula fibroasă poate fi ușor disecată de pe suprafața parenchimului.\n\nDoar 5% din debitul cardiac este direcționat către rinichi — Incorect: Aproximativ 20% din debitul cardiac este direcționat către rinichi.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 642, Fiziologie renală — Sindrom post-TURP și acidoza intestinală (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    642
   ],
   "pdfPages": [
    313
   ],
   "section": "Fiziologie renală — Sindrom post-TURP și acidoza intestinală"
  },
  "learningObjective": "Legarea hiponatremiei de irigația TURP și a acidozei hipercloremice de conduitele intestinale, distincte de vasul polar inferior.",
  "optionRationales": [
   "Sindromul post-TURP prin absorbția lichidului de irigație este exemplul citat de hiponatremie.",
   "Acidoza metabolică hipercloremică după derivații cu intestin este enunțată.",
   "Vasul aberant polar inferior, nu cel superior, se asociază stenozei de joncțiune.",
   "Capsula fibroasă poate fi ușor disecată de pe suprafața parenchimului.",
   "Aproximativ 20% din debitul cardiac este direcționat către rinichi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută vasul polar inferior (stenoză de joncțiune) pe polul superior și reduce debitul renal de la 20% la 5%."
  },
  "textbookExpressions": [
   "sindrom post TURP",
   "acidoza metabolică hipercloremică"
  ]
 },
 {
  "id": "urologie-adv-100",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Corecția chirurgicală a rinichiului în potcoavă, când este necesară, presupune:",
  "options": [
   "Incizia istmului care unește cei doi rinichi (simfiziotomie), uneori asociată refacerii joncțiunii pielo-ureterale",
   "Nefrectomie bilaterală de principiu, istmul neputând fi abordat",
   "Doar stent ureteral intern, fără simfiziotomie",
   "Embolizarea arterei renale principale, analog traumatismului de grad V",
   "Transplant renal ca gest inițial, înaintea oricărei simfiziotomii"
  ],
  "correct": [
   0
  ],
  "explanation": "Incizia istmului care unește cei doi rinichi (simfiziotomie), uneori asociată refacerii joncțiunii pielo-ureterale — Corect: Textul numește incizia istmului (simfiziotomie) și posibila refacere a joncțiunii pielo-ureterale.\n\nNefrectomie bilaterală de principiu, istmul neputând fi abordat — Incorect: Nefrectomia bilaterală nu este reparația de elecție.\n\nDoar stent ureteral intern, fără simfiziotomie — Incorect: Stentul izolat nu înlocuiește simfiziotomia când operația este necesară.\n\nEmbolizarea arterei renale principale, analog traumatismului de grad V — Incorect: Embolizarea ține de pattern-uri traumatice, nu de potcoavă.\n\nTransplant renal ca gest inițial, înaintea oricărei simfiziotomii — Incorect: Transplantul nu este gestul inițial al anomaliei de fuziune.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 643, Rinichi în potcoavă — Simfiziotomia istmului (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    643
   ],
   "pdfPages": [
    314
   ],
   "section": "Rinichi în potcoavă — Simfiziotomia istmului"
  },
  "learningObjective": "Recunoașterea simfiziotomiei istmului, eventual cuplată cu plastia joncțiunii, ca gestul chirurgical al potcoavei simptomatice.",
  "optionRationales": [
   "Textul numește incizia istmului (simfiziotomie) și posibila refacere a joncțiunii pielo-ureterale.",
   "Nefrectomia bilaterală nu este reparația de elecție.",
   "Stentul izolat nu înlocuiește simfiziotomia când operația este necesară.",
   "Embolizarea ține de pattern-uri traumatice, nu de potcoavă.",
   "Transplantul nu este gestul inițial al anomaliei de fuziune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește simfiziotomia istmului cu nefrectomia, embolizarea de grad V sau transplantul."
  },
  "textbookExpressions": [
   "istmului",
   "simfiziotornie"
  ]
 },
 {
  "id": "urologie-adv-101",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Clasificarea traumatismelor renale din figura 29-11:",
  "options": [
   "Gradul IV presupune lacerația corticalei și a medularei, afectând inclusiv sistemul colector; se pot asocia lacerații ale vaselor segmentare",
   "Un pattern de grad IV este tromboza unei artere segmentare, cu ischemie teritorială, fără lacerație parenchimatoasă",
   "Gradul V include tromboza ramului arterial principal, rinichiul fragmentat prin lacerații multiple și avulsia arterei sau venei principale",
   "Gradul I asociază lacerație parenchimatoasă profundă cu extravazare în sistemul colector",
   "Gradele I și II sunt considerate majore, iar III–V minore"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Gradul IV presupune lacerația corticalei și a medularei, afectând inclusiv sistemul colector; se pot asocia lacerații ale vaselor segmentare — Corect: Lacerația corticală și medulară cu sistem colector și vase segmentare definește un pattern de grad IV.\n\nUn pattern de grad IV este tromboza unei artere segmentare, cu ischemie teritorială, fără lacerație parenchimatoasă — Corect: Tromboza arterei segmentare fără lacerație este celălalt pattern de grad IV din figură.\n\nGradul V include tromboza ramului arterial principal, rinichiul fragmentat prin lacerații multiple și avulsia arterei sau venei principale — Corect: Cele trei pattern-uri de grad V (tromboză de ram principal, rinichi fragmentat, avulsie) sunt descrise.\n\nGradul I asociază lacerație parenchimatoasă profundă cu extravazare în sistemul colector — Incorect: Gradul I este contuzie sau hematom subcapsular, fără lacerație parenchimatoasă.\n\nGradele I și II sunt considerate majore, iar III–V minore — Incorect: Gradele I–II sunt minore, iar III–V majore.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 644, Traumatism renal — Pattern-urile de grad IV și V (pagini PDF: 315).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    644
   ],
   "pdfPages": [
    315
   ],
   "section": "Traumatism renal — Pattern-urile de grad IV și V"
  },
  "learningObjective": "Separarea lacerației cortico-medulare de grad IV și a trombozei segmentare de triada de grad V (arteră principală, rinichi spart, avulsie).",
  "optionRationales": [
   "Lacerația corticală și medulară cu sistem colector și vase segmentare definește un pattern de grad IV.",
   "Tromboza arterei segmentare fără lacerație este celălalt pattern de grad IV din figură.",
   "Cele trei pattern-uri de grad V (tromboză de ram principal, rinichi fragmentat, avulsie) sunt descrise.",
   "Gradul I este contuzie sau hematom subcapsular, fără lacerație parenchimatoasă.",
   "Gradele I–II sunt minore, iar III–V majore."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă gradul I la lacerația cu extravazare și inversează scara minor/major din aceeași figură."
  },
  "textbookExpressions": [
   "sistemul colector renal",
   "avulsia"
  ]
 },
 {
  "id": "urologie-adv-102",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la PXG, chisturile complexe și etiologia CRCC:",
  "options": [
   "Când urocultura este pozitivă în PXG, speciile E. coli și Proteus sunt cel mai frecvent incriminate",
   "Nitrozaminele și substanțele cancerigene din fumul de țigară sunt implicate în apariția CRCC",
   "Un chist renal complex (septuri, pereți îngroșați, calcificări) este considerat, de obicei, malign până la proba contrarie",
   "Biopsia sau aspirația chistului exclude cu certitudine malignitatea, rezultatul negativ fiind definitiv",
   "PXG afectează precumpănitor bărbații din decada a treia, rinichiul rămânând funcțional"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Când urocultura este pozitivă în PXG, speciile E. coli și Proteus sunt cel mai frecvent incriminate — Corect: E. coli și Proteus sunt speciile citate când urocultura obiectivează ITU în PXG.\n\nNitrozaminele și substanțele cancerigene din fumul de țigară sunt implicate în apariția CRCC — Corect: Nitrozaminele și carcinogenii din fumul de țigară sunt implicate etiologic în CRCC.\n\nUn chist renal complex (septuri, pereți îngroșați, calcificări) este considerat, de obicei, malign până la proba contrarie — Corect: Chistul complex este considerat malign până la proba contrarie, putând indica nefrectomie parțială sau radicală.\n\nBiopsia sau aspirația chistului exclude cu certitudine malignitatea, rezultatul negativ fiind definitiv — Incorect: Biopsia sau aspirația au valoare diagnostică redusă, cu rezultate fals negative.\n\nPXG afectează precumpănitor bărbații din decada a treia, rinichiul rămânând funcțional — Incorect: PXG afectează precumpănitor femeile (75%) în decadele 5–7, cu rinichi de obicei nefuncțional.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 645, PXG — Proteus; CRCC — nitrozamine; chistul complex (pagini PDF: 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    645
   ],
   "pdfPages": [
    316
   ],
   "section": "PXG — Proteus; CRCC — nitrozamine; chistul complex"
  },
  "learningObjective": "Potrivirea cuplului E. coli/Proteus din PXG, a nitrozaminelor din fumul de țigară și a chistului complex tratat ca malign.",
  "optionRationales": [
   "E. coli și Proteus sunt speciile citate când urocultura obiectivează ITU în PXG.",
   "Nitrozaminele și carcinogenii din fumul de țigară sunt implicate etiologic în CRCC.",
   "Chistul complex este considerat malign până la proba contrarie, putând indica nefrectomie parțială sau radicală.",
   "Biopsia sau aspirația au valoare diagnostică redusă, cu rezultate fals negative.",
   "PXG afectează precumpănitor femeile (75%) în decadele 5–7, cu rinichi de obicei nefuncțional."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Declară aspirația chistului „certă” și inversează sexul/decadele PXG (femei 5–7 versus bărbați tineri)."
  },
  "textbookExpressions": [
   "Proteus",
   "nitrozaminele"
  ]
 },
 {
  "id": "urologie-adv-103",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Bilanțul preoperator și prognosticul carcinomului renal cu celule clare:",
  "options": [
   "Ratele de supraviețuire la 5 ani sunt de 80–90% în stadiile I–II și de 40–60% în stadiile III–IV",
   "Bilanțul preoperator include radiografie toracică și evaluarea funcției hepatice",
   "Scintigrafia osoasă este necesară în prezența durerilor osoase sau a fosfatazei alcaline crescute",
   "Metastazele hepatice apar, de regulă, înaintea celor pulmonare",
   "Complicațiile postoperatorii nu includ hemoragia, abcesul retroperitoneal sau ileusul paralitic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ratele de supraviețuire la 5 ani sunt de 80–90% în stadiile I–II și de 40–60% în stadiile III–IV — Corect: Cifrele de supraviețuire la 5 ani pe stadii sunt explicite.\n\nBilanțul preoperator include radiografie toracică și evaluarea funcției hepatice — Corect: Radiografia toracică și testele hepatice fac parte din bilanț.\n\nScintigrafia osoasă este necesară în prezența durerilor osoase sau a fosfatazei alcaline crescute — Corect: Scintigrafia osoasă este cerută la durere osoasă sau fosfatază alcalină crescută.\n\nMetastazele hepatice apar, de regulă, înaintea celor pulmonare — Incorect: Metastazele urmează ordinul plămân, os, creier; ficatul poate fi tardiv.\n\nComplicațiile postoperatorii nu includ hemoragia, abcesul retroperitoneal sau ileusul paralitic — Incorect: Hemoragia, abcesul retroperitoneal, ileusul și embolia pulmonară sunt complicații citate.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 646, CRCC — Supraviețuire I–II versus III–IV și scintigrafia (pagini PDF: 317).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    646
   ],
   "pdfPages": [
    317
   ],
   "section": "CRCC — Supraviețuire I–II versus III–IV și scintigrafia"
  },
  "learningObjective": "Memorarea intervalelor 80–90% / 40–60% și a indicației de scintigrafie (durere osoasă sau fosfatază alcalină), față de ordinul plămân–os–creier.",
  "optionRationales": [
   "Cifrele de supraviețuire la 5 ani pe stadii sunt explicite.",
   "Radiografia toracică și testele hepatice fac parte din bilanț.",
   "Scintigrafia osoasă este cerută la durere osoasă sau fosfatază alcalină crescută.",
   "Metastazele urmează ordinul plămân, os, creier; ficatul poate fi tardiv.",
   "Hemoragia, abcesul retroperitoneal, ileusul și embolia pulmonară sunt complicații citate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ordinul metastatic (ficat înaintea plămânului) și neagă complicațiile enumerate în același paragraf chirurgical."
  },
  "textbookExpressions": [
   "80-90%",
   "fosfatazei alcaline"
  ]
 },
 {
  "id": "urologie-adv-104",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Un adult cu colică de flanc iradiată spre organele genitale, greață și microhematurie. Evaluarea corectă include:",
  "options": [
   "Durerea este cauzată, de obicei, de obstrucție pe măsură ce calculul trece prin ureter, nu de calculul în sine",
   "Calculul de acid uric este transparent pe radiografia renală simplă, dar alb strălucitor pe CT fără contrast",
   "Evaluarea metabolică se face, de obicei, după eliminarea calculilor, când pacientul urmează o dietă obișnuită",
   "Testele includ calciu seric, PTH, electroliți, pH urinar și colectarea urinei pe 24 de ore",
   "Ecografia renală este superioară CT-ului în vizualizarea ureterelor și oferă date funcționale"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Durerea este cauzată, de obicei, de obstrucție pe măsură ce calculul trece prin ureter, nu de calculul în sine — Corect: Textul atribuie durerea obstrucției ureterale, nu calculului în sine; iradierea genitală, greața și vărsăturile sunt descrise.\n\nCalculul de acid uric este transparent pe radiografia renală simplă, dar alb strălucitor pe CT fără contrast — Corect: Acidul uric transparent pe radiografia simplă și alb strălucitor pe CT fără contrast este explicit.\n\nEvaluarea metabolică se face, de obicei, după eliminarea calculilor, când pacientul urmează o dietă obișnuită — Corect: Momentul post-eliminare, pe dieta obișnuită, este precizat.\n\nTestele includ calciu seric, PTH, electroliți, pH urinar și colectarea urinei pe 24 de ore — Corect: Lista de laborator (calciu, PTH, electroliți, pH, urină 24 h) este enumerată.\n\nEcografia renală este superioară CT-ului în vizualizarea ureterelor și oferă date funcționale — Incorect: Ecografia este lipsită de precizia anatomică a CT-ului, mai ales pe uretere, și nu oferă informații funcționale.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 647, Litiază — Colică, uric acid pe CT și bilanț metabolic (pagini PDF: 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    647
   ],
   "pdfPages": [
    318
   ],
   "section": "Litiază — Colică, uric acid pe CT și bilanț metabolic"
  },
  "learningObjective": "Înlănțuirea mecanismului colicii, a contrastului radiologic al acidului uric și a ferestrei metabolice post-eliminare pe dietă obișnuită.",
  "optionRationales": [
   "Textul atribuie durerea obstrucției ureterale, nu calculului în sine; iradierea genitală, greața și vărsăturile sunt descrise.",
   "Acidul uric transparent pe radiografia simplă și alb strălucitor pe CT fără contrast este explicit.",
   "Momentul post-eliminare, pe dieta obișnuită, este precizat.",
   "Lista de laborator (calciu, PTH, electroliți, pH, urină 24 h) este enumerată.",
   "Ecografia este lipsită de precizia anatomică a CT-ului, mai ales pe uretere, și nu oferă informații funcționale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Declară ecografia superioară CT-ului pe uretere, exact limita pe care textul o subliniază."
  },
  "textbookExpressions": [
   "alb strălucitor",
   "hormonului paratiroidian"
  ]
 },
 {
  "id": "urologie-adv-105",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Anatomia ureterului intramural și diagnosticul obstrucției:",
  "options": [
   "În prima jumătate a traiectului intramural, ureterul traversează musculara vezicală; în a doua jumătate se situează submucos",
   "În porțiunile superioare, musculara are un model helicoidal neregulat; aproape de vezică fibrele sunt paralele cu lumenul",
   "Atât CT, cât și UIV sunt investigații excelente pentru obstrucția ureterală, oferind informații anatomice și funcționale",
   "Fibrele musculare din porțiunea intramurală sunt dispuse circular, concentric pe lumen",
   "CT și UIV sunt investigații slabe pentru diagnosticul obstrucției ureterale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În prima jumătate a traiectului intramural, ureterul traversează musculara vezicală; în a doua jumătate se situează submucos — Corect: Traversarea muscularei în prima jumătate și poziția submucoasă în a doua sunt explicite.\n\nÎn porțiunile superioare, musculara are un model helicoidal neregulat; aproape de vezică fibrele sunt paralele cu lumenul — Corect: Modelul helicoidal neregulat proximal și fibrele paralele cu lumenul lângă vezică sunt descrise.\n\nAtât CT, cât și UIV sunt investigații excelente pentru obstrucția ureterală, oferind informații anatomice și funcționale — Corect: CT și UIV sunt numite investigații excelente, anatomice și funcționale.\n\nFibrele musculare din porțiunea intramurală sunt dispuse circular, concentric pe lumen — Incorect: Lângă vezică și intramural, fibrele sunt paralele cu lumenul, nu circulare concentrice.\n\nCT și UIV sunt investigații slabe pentru diagnosticul obstrucției ureterale — Incorect: Textul afirmă opusul: CT și UIV sunt excelente pentru obstrucție.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 648, Ureter — Jumătăți intramurale, helicoidal și CT/UIV (pagini PDF: 319).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    648
   ],
   "pdfPages": [
    319
   ],
   "section": "Ureter — Jumătăți intramurale, helicoidal și CT/UIV"
  },
  "learningObjective": "Citirea împărțirii intramurale (musculară apoi submucoasă) și a modelului helicoidal proximal versus fibre paralele distale.",
  "optionRationales": [
   "Traversarea muscularei în prima jumătate și poziția submucoasă în a doua sunt explicite.",
   "Modelul helicoidal neregulat proximal și fibrele paralele cu lumenul lângă vezică sunt descrise.",
   "CT și UIV sunt numite investigații excelente, anatomice și funcționale.",
   "Lângă vezică și intramural, fibrele sunt paralele cu lumenul, nu circulare concentrice.",
   "Textul afirmă opusul: CT și UIV sunt excelente pentru obstrucție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează dispoziția „circular concentrică” respinsă de text și transformă CT/UIV din excelente în slabe."
  },
  "textbookExpressions": [
   "helicoidal",
   "fibroza retroperitoneală"
  ]
 },
 {
  "id": "urologie-adv-106",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Anatomia vezicii urinare:",
  "options": [
   "Trigonul are două straturi musculare, unul superficial care fuzionează cu musculatura ureterală și unul profund, nedistinct de detrusor",
   "La femei, condensările fasciei pelvine se numesc ligamente pubovezicale; ligamentul ombilical median (rămășița uracăi) fixează vezica de peretele abdominal anterior",
   "Detrusorul corpului vezical este organizat în trei straturi circulare distincte pe toată circumferința",
   "Vascularizația vezicală provine din artera spermatică internă, analog testiculului",
   "Limfa vezicală drenează în ganglionii inghinali superficiali, nu în iliaci, hipogastrici, iliaci comuni și sacrali"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Trigonul are două straturi musculare, unul superficial care fuzionează cu musculatura ureterală și unul profund, nedistinct de detrusor — Corect: Cele două straturi ale trigonului, cu fuziunea superficială ureterală, sunt explicite.\n\nLa femei, condensările fasciei pelvine se numesc ligamente pubovezicale; ligamentul ombilical median (rămășița uracăi) fixează vezica de peretele abdominal anterior — Corect: Denumirea feminină pubovezicală și ligamentul ombilical median ca rămășiță a uracăi sunt descrise.\n\nDetrusorul corpului vezical este organizat în trei straturi circulare distincte pe toată circumferința — Incorect: Detrusorul corpului este din fascicule intercalate, fără delimitarea unor straturi distincte.\n\nVascularizația vezicală provine din artera spermatică internă, analog testiculului — Incorect: Arterele vezicale superioare, medii și inferioare sunt ramuri ale arterei hipogastrice.\n\nLimfa vezicală drenează în ganglionii inghinali superficiali, nu în iliaci, hipogastrici, iliaci comuni și sacrali — Incorect: Drenajul limfatic citat este spre iliaci externi, hipogastrici, iliaci comuni și sacrali.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 649, Vezică — Trigonul bistratificat și ligamentele pubovezicale (pagini PDF: 320).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    649
   ],
   "pdfPages": [
    320
   ],
   "section": "Vezică — Trigonul bistratificat și ligamentele pubovezicale"
  },
  "learningObjective": "Diferențierea trigonului bistratificat de detrusorul fără straturi distincte și a ligamentelor pubovezicale de cele puboprostatice.",
  "optionRationales": [
   "Cele două straturi ale trigonului, cu fuziunea superficială ureterală, sunt explicite.",
   "Denumirea feminină pubovezicală și ligamentul ombilical median ca rămășiță a uracăi sunt descrise.",
   "Detrusorul corpului este din fascicule intercalate, fără delimitarea unor straturi distincte.",
   "Arterele vezicale superioare, medii și inferioare sunt ramuri ale arterei hipogastrice.",
   "Drenajul limfatic citat este spre iliaci externi, hipogastrici, iliaci comuni și sacrali."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inventă trei straturi circulare ale detrusorului și mută limfa vezicală pe ganglionii inghinali ai uretrei anterioare."
  },
  "textbookExpressions": [
   "ligamentele pubovezicale",
   "ligamentul ombilical median"
  ]
 },
 {
  "id": "urologie-adv-107",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Refluxul vezico-ureteral secundar și supravegherea copilului:",
  "options": [
   "Refluxul secundar poate urma rezecției tumorilor de lângă orificiu, inciziei endoscopice pentru calculi, transplantului renal sau dilatării orificiului pentru ureteroscopie",
   "Cistografia cu radionuclid necesită o doză mai mică de iradiere și detectează grade mici, dar detaliile anatomice sunt inferioare CUGM",
   "Scintigrafia renală are sensibilitate superioară ecografiei pentru cicatricile parenchimatoase nou apărute",
   "Creatinina serică, ureea, înălțimea, greutatea și tensiunea arterială ar trebui verificate anual",
   "Cistoscopia este indicată de rutină la copiii cu reflux, înlocuind CUGM"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Refluxul secundar poate urma rezecției tumorilor de lângă orificiu, inciziei endoscopice pentru calculi, transplantului renal sau dilatării orificiului pentru ureteroscopie — Corect: Cele patru contexte de reflux secundar sunt enumerate.\n\nCistografia cu radionuclid necesită o doză mai mică de iradiere și detectează grade mici, dar detaliile anatomice sunt inferioare CUGM — Corect: Avantajul dozei și limita anatomică a cistografiei cu radionuclid sunt explicite.\n\nScintigrafia renală are sensibilitate superioară ecografiei pentru cicatricile parenchimatoase nou apărute — Corect: Superioritatea scintigrafiei față de ecografie pentru cicatrici noi este citată.\n\nCreatinina serică, ureea, înălțimea, greutatea și tensiunea arterială ar trebui verificate anual — Corect: Verificarea anuală a creatininei, ureei, taliei, greutății și TA este cerută.\n\nCistoscopia este indicată de rutină la copiii cu reflux, înlocuind CUGM — Incorect: Cistoscopia nu este indicată de rutină la copiii cu reflux.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 650, RVU — Secundar, cistografie cu radionuclid și cicatrici (pagini PDF: 321).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    650
   ],
   "pdfPages": [
    321
   ],
   "section": "RVU — Secundar, cistografie cu radionuclid și cicatrici"
  },
  "learningObjective": "Recunoașterea cauzelor iatrogene de reflux secundar, a cistografiei izotopice (iradiere mică, anatomie inferioară) și a DMSA pentru cicatrici.",
  "optionRationales": [
   "Cele patru contexte de reflux secundar sunt enumerate.",
   "Avantajul dozei și limita anatomică a cistografiei cu radionuclid sunt explicite.",
   "Superioritatea scintigrafiei față de ecografie pentru cicatrici noi este citată.",
   "Verificarea anuală a creatininei, ureei, taliei, greutății și TA este cerută.",
   "Cistoscopia nu este indicată de rutină la copiii cu reflux."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune cistoscopia de rutină în locul CUGM și al cistografiei izotopice, inversând ierarhia diagnostică a paginii."
  },
  "textbookExpressions": [
   "cistografie cu radionuclid",
   "scintigrafia renală"
  ]
 },
 {
  "id": "urologie-adv-108",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Precizați enunțul corect privind tehnica Glenn-Anderson de reimplantare ureterală:",
  "options": [
   "Se folosește când orificiul este suficient de înalt și lateral pentru un tunel submucos lung, fără a apropia noul meat de colul vezical",
   "Este avansarea încrucișată trigonală, rezervată spațiului insuficient dintre hiatus și col",
   "Creează un hiatus nou supero-lateral, fiind tehnica de reintervenție Politano-Leadbetter",
   "Constă în injectarea de Deflux sub orificiu, procedura durând peste două ore fără anestezie",
   "Urmărește scurtarea tunelului intramural sub diametrul ureterului, pentru a reduce rezistența"
  ],
  "correct": [
   0
  ],
  "explanation": "Se folosește când orificiul este suficient de înalt și lateral pentru un tunel submucos lung, fără a apropia noul meat de colul vezical — Corect: Textul rezervă Glenn-Anderson orificiului suficient de înalt și lateral, cu tunel submucos lung, fără meat prea aproape de col.\n\nEste avansarea încrucișată trigonală, rezervată spațiului insuficient dintre hiatus și col — Incorect: Avansarea încrucișată trigonală definește procedura Cohen.\n\nCreează un hiatus nou supero-lateral, fiind tehnica de reintervenție Politano-Leadbetter — Incorect: Hiatusul nou supero-lateral este al tehnicii Politano-Leadbetter.\n\nConstă în injectarea de Deflux sub orificiu, procedura durând peste două ore fără anestezie — Incorect: Deflux-ul este o injecție endoscopică de sub 30 de minute, sub anestezie generală.\n\nUrmărește scurtarea tunelului intramural sub diametrul ureterului, pentru a reduce rezistența — Incorect: Obiectivul reimplantării este un tunel de 4–5 ori diametrul ureterului, nu scurtarea lui.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 651, Reimplantare — Glenn-Anderson (orificiu înalt lateral) (pagini PDF: 322).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    651
   ],
   "pdfPages": [
    322
   ],
   "section": "Reimplantare — Glenn-Anderson (orificiu înalt lateral)"
  },
  "learningObjective": "Separarea avansării Glenn-Anderson (orificiu înalt/lateral, tunel lung) de Cohen (încrucișare trigonală) și de Politano-Leadbetter (hiatus nou).",
  "optionRationales": [
   "Textul rezervă Glenn-Anderson orificiului suficient de înalt și lateral, cu tunel submucos lung, fără meat prea aproape de col.",
   "Avansarea încrucișată trigonală definește procedura Cohen.",
   "Hiatusul nou supero-lateral este al tehnicii Politano-Leadbetter.",
   "Deflux-ul este o injecție endoscopică de sub 30 de minute, sub anestezie generală.",
   "Obiectivul reimplantării este un tunel de 4–5 ori diametrul ureterului, nu scurtarea lui."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează cele trei eponime de reimplantare (Glenn-Anderson, Cohen, Politano-Leadbetter) din paragrafe consecutive."
  },
  "textbookExpressions": [
   "tunel submucos",
   "Gle1m-Anderson"
  ]
 },
 {
  "id": "urologie-adv-109",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Un adult cu ruptură vezicală confirmată cistografic și, separat, un bărbat cu cistită acută. Enunțurile corecte sunt:",
  "options": [
   "Filmul radiologic după îndepărtarea drenajului ajută la diagnosticarea a aproximativ 15% dintre rupturile vezicale",
   "Rupturile intraperitoneale sau cele extraperitoneale mari/complicate se explorează prin incizie mediană, evitând hematomul pelvin, cu sutură cu fire resorbabile",
   "Manipularea tractului urinar trebuie temporizată până la vindecarea infecției acute, pentru a preveni bacteriemia",
   "Rupturile intraperitoneale se tratează doar cu sondă Foley 1–2 săptămâni, fără sutură",
   "Carcinomul nu trebuie considerat când simptomele iritative persistă după sterilizarea urinei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Filmul radiologic după îndepărtarea drenajului ajută la diagnosticarea a aproximativ 15% dintre rupturile vezicale — Corect: Contribuția de aproximativ 15% a filmului după îndepărtarea drenajului este explicită.\n\nRupturile intraperitoneale sau cele extraperitoneale mari/complicate se explorează prin incizie mediană, evitând hematomul pelvin, cu sutură cu fire resorbabile — Corect: Incizia mediană, evitarea hematomului pelvin și firele resorbabile sunt descrise pentru rupturile care cer chirurgie.\n\nManipularea tractului urinar trebuie temporizată până la vindecarea infecției acute, pentru a preveni bacteriemia — Corect: Temporizarea manipulării până la vindecarea infecției, pentru a preveni bacteriemia, este cerută.\n\nRupturile intraperitoneale se tratează doar cu sondă Foley 1–2 săptămâni, fără sutură — Incorect: Foley 1–2 săptămâni este rezervat rupturilor mici extraperitoneale, nu celor intraperitoneale.\n\nCarcinomul nu trebuie considerat când simptomele iritative persistă după sterilizarea urinei — Incorect: Carcinomul trebuie luat în considerare dacă simptomele iritative persistă după sterilizarea urinei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 654, Ruptură vezicală — Filmul post-drenaj 15% și fire resorbabile (pagini PDF: 325).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    654
   ],
   "pdfPages": [
    325
   ],
   "section": "Ruptură vezicală — Filmul post-drenaj 15% și fire resorbabile"
  },
  "learningObjective": "Adăugarea filmului după golire (15%) și a suturii resorbabile pe linia mediană, plus temporizarea instrumentării în cistita acută.",
  "optionRationales": [
   "Contribuția de aproximativ 15% a filmului după îndepărtarea drenajului este explicită.",
   "Incizia mediană, evitarea hematomului pelvin și firele resorbabile sunt descrise pentru rupturile care cer chirurgie.",
   "Temporizarea manipulării până la vindecarea infecției, pentru a preveni bacteriemia, este cerută.",
   "Foley 1–2 săptămâni este rezervat rupturilor mici extraperitoneale, nu celor intraperitoneale.",
   "Carcinomul trebuie luat în considerare dacă simptomele iritative persistă după sterilizarea urinei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Aplică protocolul Foley al rupturii mici extraperitoneale pe ruptura intraperitoneală, care cere sutură."
  },
  "textbookExpressions": [
   "15%",
   "fire resorbabile"
  ]
 },
 {
  "id": "urologie-adv-110",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Cistita interstițială și fistula entero-vezicală se caracterizează prin:",
  "options": [
   "Examenul histologic evidențiază inflamație cronică; biopsia arată frecvent fibroză și infiltrație mastocitară",
   "Cistoscopia poate evidenția ulcerații Hunner sau glomerulații după hidrodistensia vezicală",
   "CT-ul fără cateterizarea vezicii poate confirma fistula: aerul vezical susține diagnosticul",
   "Uroculturile pentru bacterii, virusuri și fungi sunt, în mod tipic, pozitive",
   "Fistula entero-vezicală se tratează doar cu antibiotice, fără rezecția ansei afectate"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Examenul histologic evidențiază inflamație cronică; biopsia arată frecvent fibroză și infiltrație mastocitară — Corect: Inflamația cronică, fibroza și infiltrația mastocitară sunt explicite.\n\nCistoscopia poate evidenția ulcerații Hunner sau glomerulații după hidrodistensia vezicală — Corect: Ulcerațiile Hunner și glomerulațiile după hidrodistensie sunt descrise.\n\nCT-ul fără cateterizarea vezicii poate confirma fistula: aerul vezical susține diagnosticul — Corect: CT-ul fără cateter, cu aer vezical, confirmă diagnosticul de fistulă.\n\nUroculturile pentru bacterii, virusuri și fungi sunt, în mod tipic, pozitive — Incorect: Uroculturile sunt, în mod tipic, negative.\n\nFistula entero-vezicală se tratează doar cu antibiotice, fără rezecția ansei afectate — Incorect: Tratamentul include rezecția porțiunii de intestin afectat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 655, Cistită interstițială — Mastocite, Hunner; aer vezical pe CT (pagini PDF: 326).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    655
   ],
   "pdfPages": [
    326
   ],
   "section": "Cistită interstițială — Mastocite, Hunner; aer vezical pe CT"
  },
  "learningObjective": "Potrivirea infiltratului mastocitar și a ulcerațiilor Hunner după hidrodistensie cu semnul aerului vezical pe CT necaterizat.",
  "optionRationales": [
   "Inflamația cronică, fibroza și infiltrația mastocitară sunt explicite.",
   "Ulcerațiile Hunner și glomerulațiile după hidrodistensie sunt descrise.",
   "CT-ul fără cateter, cu aer vezical, confirmă diagnosticul de fistulă.",
   "Uroculturile sunt, în mod tipic, negative.",
   "Tratamentul include rezecția porțiunii de intestin afectat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Declară uroculturile interstițiale pozitive și tratează fistula entero-vezicală doar medicamentos."
  },
  "textbookExpressions": [
   "Hunner",
   "infiltraţie mastocitară"
  ]
 },
 {
  "id": "urologie-adv-111",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Mecanismul principal al micțiunii normale este:",
  "options": [
   "Relaxarea sfincterului extern, urmată de relaxarea și deschiderea colului vezical și de contracția detrusorului",
   "Contracția detrusorului, sfincterul rămânând contractat până la golirea completă",
   "Creșterea tonusului sfincterian concomitent cu contracția detrusorului",
   "Relaxarea detrusorului și contracția sfincterului extern, analog umplerii",
   "Doar presă abdominală, fără coordonare sfincter–detrusor"
  ],
  "correct": [
   0
  ],
  "explanation": "Relaxarea sfincterului extern, urmată de relaxarea și deschiderea colului vezical și de contracția detrusorului — Corect: Textul descrie micțiunea voluntară ca începând cu relaxarea sfincterului extern, apoi colul, apoi detrusorul.\n\nContracția detrusorului, sfincterul rămânând contractat până la golirea completă — Incorect: Contracția detrusorului cu sfincterul contractat inversează coordonarea descrisă.\n\nCreșterea tonusului sfincterian concomitent cu contracția detrusorului — Incorect: Pe parcursul umplerii tonusul sfincterian este crescut; la micțiune el scade.\n\nRelaxarea detrusorului și contracția sfincterului extern, analog umplerii — Incorect: Relaxarea detrusorului ține de umplere (complianță), nu de golire.\n\nDoar presă abdominală, fără coordonare sfincter–detrusor — Incorect: Presa abdominală poate susține golirea în vezica autonomă, nu definește micțiunea normală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 656, Micțiune normală — Relaxarea sfincterului înaintea detrusorului (pagini PDF: 327).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    656
   ],
   "pdfPages": [
    327
   ],
   "section": "Micțiune normală — Relaxarea sfincterului înaintea detrusorului"
  },
  "learningObjective": "Fixarea secvenței: sfincter extern → col vezical → detrusor, distinctă de contracția detrusorului cu sfincterul încă închis.",
  "optionRationales": [
   "Textul descrie micțiunea voluntară ca începând cu relaxarea sfincterului extern, apoi colul, apoi detrusorul.",
   "Contracția detrusorului cu sfincterul contractat inversează coordonarea descrisă.",
   "Pe parcursul umplerii tonusul sfincterian este crescut; la micțiune el scade.",
   "Relaxarea detrusorului ține de umplere (complianță), nu de golire.",
   "Presa abdominală poate susține golirea în vezica autonomă, nu definește micțiunea normală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pornește micțiunea cu detrusorul contractat și sfincterul închis, inversul secvenței din ultimul paragraf."
  },
  "textbookExpressions": [
   "relaxarea sfincterului extern",
   "complianţă"
  ]
 },
 {
  "id": "urologie-adv-112",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Pareza vezicală de tip motor se recunoaște prin:",
  "options": [
   "Absența activității detrusoriene, cu senzație micțională prezentă și capacitate normală sau crescută",
   "Cauze posibile: poliomielită, traumatisme, mielomeningocel sau alte anomalii congenitale",
   "Scăderea sau lipsa senzației, fără hiperreflexie, cu capacitate vezicală mare, ca în tabesul dorsal",
   "Contracții neinhibate cu sfincter striat dissinergic, ca în leziunea medulară deasupra S2",
   "Necesitatea de a urina la 150–250 mL, identică primei senzații a vezicii normale"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Absența activității detrusoriene, cu senzație micțională prezentă și capacitate normală sau crescută — Corect: Absența activității detrusoriene cu senzație prezentă și capacitate normală/crescută definește tipul motor.\n\nCauze posibile: poliomielită, traumatisme, mielomeningocel sau alte anomalii congenitale — Corect: Poliomielita, traumatismele, mielomeningocelul și anomaliile congenitale sunt enumerate.\n\nScăderea sau lipsa senzației, fără hiperreflexie, cu capacitate vezicală mare, ca în tabesul dorsal — Incorect: Absența senzației fără hiperreflexie este vezica senzorială (tabes, diabet).\n\nContracții neinhibate cu sfincter striat dissinergic, ca în leziunea medulară deasupra S2 — Incorect: Dissinergia striată este a leziunii deasupra S2.\n\nNecesitatea de a urina la 150–250 mL, identică primei senzații a vezicii normale — Incorect: 150–250 mL este prima senzație a vezicii normale, nu tabloul parezei motorii.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 658, Vezică neurogenă — Pareza motorie (poliomielită) (pagini PDF: 329).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    658
   ],
   "pdfPages": [
    329
   ],
   "section": "Vezică neurogenă — Pareza motorie (poliomielită)"
  },
  "learningObjective": "Separarea parezei motorii (fără contracție, senzație păstrată) de vezica senzorială (fără senzație, capacitate mare) și de dissinergia suprasacrată.",
  "optionRationales": [
   "Absența activității detrusoriene cu senzație prezentă și capacitate normală/crescută definește tipul motor.",
   "Poliomielita, traumatismele, mielomeningocelul și anomaliile congenitale sunt enumerate.",
   "Absența senzației fără hiperreflexie este vezica senzorială (tabes, diabet).",
   "Dissinergia striată este a leziunii deasupra S2.",
   "150–250 mL este prima senzație a vezicii normale, nu tabloul parezei motorii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă pareza motorie (senzație păstrată) cu vezica senzorială sau cu dissinergia medulară din același tabel."
  },
  "textbookExpressions": [
   "poliomielită",
   "mielomeningocel"
  ]
 },
 {
  "id": "urologie-adv-113",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Carcinomul vezical — epidemiologie, histologie a domului și cistectomie la femeie:",
  "options": [
   "Este al cincilea cel mai frecvent cancer în America și de 2,5 ori mai frecvent la bărbați",
   "Este asociat și cu carcinogeni din industria materialelor plastice și a prelucrării petrolului",
   "Adenocarcinoamele se asociază frecvent cu uracă patentă și tumori ale domului vezical",
   "La femeie, cistectomia radicală îndepărtează vezica, peretele anterior vaginal, uterul și ganglionii limfatici",
   "Stadiul T2 înseamnă carcinom in situ, fără invazia mușchiului detrusor"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este al cincilea cel mai frecvent cancer în America și de 2,5 ori mai frecvent la bărbați — Corect: Rangul al cincilea și raportul 2,5:1 masculin sunt explicite.\n\nEste asociat și cu carcinogeni din industria materialelor plastice și a prelucrării petrolului — Corect: Industria materialelor plastice și a petrolului este citată alături de fumat.\n\nAdenocarcinoamele se asociază frecvent cu uracă patentă și tumori ale domului vezical — Corect: Asocierea adenocarcinom–uracă patentă–dom vezical este enunțată.\n\nLa femeie, cistectomia radicală îndepărtează vezica, peretele anterior vaginal, uterul și ganglionii limfatici — Corect: Conținutul cistectomiei radicale la femeie este enumerat.\n\nStadiul T2 înseamnă carcinom in situ, fără invazia mușchiului detrusor — Incorect: T2 este invazia detrusorului; Tis este carcinomul in situ.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 659, Carcinom vezical — Plastice/petrol, uracă și piesa feminină (pagini PDF: 330).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    659
   ],
   "pdfPages": [
    330
   ],
   "section": "Carcinom vezical — Plastice/petrol, uracă și piesa feminină"
  },
  "learningObjective": "Adăugarea rangului al cincilea, a carcinogenilor industriali, a adenocarcinomului de uracă/dom și a piesei de cistectomie feminină.",
  "optionRationales": [
   "Rangul al cincilea și raportul 2,5:1 masculin sunt explicite.",
   "Industria materialelor plastice și a petrolului este citată alături de fumat.",
   "Asocierea adenocarcinom–uracă patentă–dom vezical este enunțată.",
   "Conținutul cistectomiei radicale la femeie este enumerat.",
   "T2 este invazia detrusorului; Tis este carcinomul in situ."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Etichetează T2 ca in situ, confundând linia de stadializare cu piesa de cistectomie feminină."
  },
  "textbookExpressions": [
   "al cincilea",
   "mate1ialelor plastice"
  ]
 },
 {
  "id": "urologie-adv-114",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Vascularizația și drenajul limfatic ale penisului:",
  "options": [
   "Arterele provin din ramuri ale arterei rușinoase interne, ramură a iliacei interne",
   "Drenajul limfatic al glandului, corpului spongios și porțiunii distale a cavernoșilor se face către ganglionii iliaci externi, superficiali și inghinali profunzi",
   "Porțiunea proximală a cavernoșilor și uretra posterioară drenează către ganglionii iliaci interni",
   "Limfa glandului drenează direct în ganglionii preaortici, analog testiculului",
   "Venele dorsale conduc sângele către vena spermatică internă, nu către iliace"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Arterele provin din ramuri ale arterei rușinoase interne, ramură a iliacei interne — Corect: Originea din artera rușinoasă internă, ramură a iliacei interne, este explicită.\n\nDrenajul limfatic al glandului, corpului spongios și porțiunii distale a cavernoșilor se face către ganglionii iliaci externi, superficiali și inghinali profunzi — Corect: Tinta limfatică distală (iliaci externi, superficiali și inghinali profunzi) este descrisă.\n\nPorțiunea proximală a cavernoșilor și uretra posterioară drenează către ganglionii iliaci interni — Corect: Etajul proximal (cavernoși proximali și uretra posterioară) drenează în iliaci interni.\n\nLimfa glandului drenează direct în ganglionii preaortici, analog testiculului — Incorect: Ganglionii preaortici țin de drenajul testicular, nu de gland.\n\nVenele dorsale conduc sângele către vena spermatică internă, nu către iliace — Incorect: Venele dorsale superficiale și profunde conduc fluxul către venele iliace.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 659, Penis — Artera rușinoasă internă și etajele limfatice (pagini PDF: 330).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    659
   ],
   "pdfPages": [
    330
   ],
   "section": "Penis — Artera rușinoasă internă și etajele limfatice"
  },
  "learningObjective": "Potrivirea pediculului din rușinoasa internă cu etajul distal (iliaci externi/inghinali) versus proximal (iliaci interni).",
  "optionRationales": [
   "Originea din artera rușinoasă internă, ramură a iliacei interne, este explicită.",
   "Tinta limfatică distală (iliaci externi, superficiali și inghinali profunzi) este descrisă.",
   "Etajul proximal (cavernoși proximali și uretra posterioară) drenează în iliaci interni.",
   "Ganglionii preaortici țin de drenajul testicular, nu de gland.",
   "Venele dorsale superficiale și profunde conduc fluxul către venele iliace."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută limfa glandului pe preaorticii testiculului și venele dorsale pe spermatica internă."
  },
  "textbookExpressions": [
   "ruşinoase interne",
   "iliaci interni"
  ]
 },
 {
  "id": "urologie-adv-115",
  "topicId": "urologie",
  "type": "CS",
  "stem": "Rata de vindecare la 5 ani după penectomia parțială pentru carcinomul scuamos penian este:",
  "options": [
   "70–80%; leziunile distale mai mari sau cele proximale cer penectomie totală și uretrostomie perineală",
   "Sub 10%, analog progresiei musculo-invazive a tumorilor vezicale Ta",
   "15–20%, identică prevalenței varicocelului",
   "Aproximativ 50%, analog marjelor negative la 15 ani după prostatectomie",
   "Peste 95%, analog ponderii adenocarcinoamelor acinare prostatice"
  ],
  "correct": [
   0
  ],
  "explanation": "70–80%; leziunile distale mai mari sau cele proximale cer penectomie totală și uretrostomie perineală — Corect: Textul citează 70–80% vindecare la 5 ani după penectomie parțială și trece leziunile mai mari/proximale pe penectomie totală cu uretrostomie perineală.\n\nSub 10%, analog progresiei musculo-invazive a tumorilor vezicale Ta — Incorect: Sub 10% este pragul de progresie al Ta vezical, nu al penectomiei.\n\n15–20%, identică prevalenței varicocelului — Incorect: 15–20% este prevalența varicocelului.\n\nAproximativ 50%, analog marjelor negative la 15 ani după prostatectomie — Incorect: 50% la 15 ani ține de prostatectomia cu marje negative.\n\nPeste 95%, analog ponderii adenocarcinoamelor acinare prostatice — Incorect: Peste 95% este ponderea adenocarcinoamelor prostatice, nu rata de vindecare peniană.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 662, Carcinom penian — Vindecare 70–80% după penectomie parțială (pagini PDF: 333).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    662
   ],
   "pdfPages": [
    333
   ],
   "section": "Carcinom penian — Vindecare 70–80% după penectomie parțială"
  },
  "learningObjective": "Memorarea intervalului 70–80% la 5 ani după penectomie parțială și a saltului la penectomie totală plus uretrostomie perineală.",
  "optionRationales": [
   "Textul citează 70–80% vindecare la 5 ani după penectomie parțială și trece leziunile mai mari/proximale pe penectomie totală cu uretrostomie perineală.",
   "Sub 10% este pragul de progresie al Ta vezical, nu al penectomiei.",
   "15–20% este prevalența varicocelului.",
   "50% la 15 ani ține de prostatectomia cu marje negative.",
   "Peste 95% este ponderea adenocarcinoamelor prostatice, nu rata de vindecare peniană."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește 70–80% după penectomie parțială cu praguri din prostată, vezică sau varicocel."
  },
  "textbookExpressions": [
   "70-80%",
   "metrostomie perineală"
  ]
 },
 {
  "id": "urologie-adv-116",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Un bărbat cu anemie falciformă prezintă erecție prelungită. Enunțurile corecte sunt:",
  "options": [
   "Tratamentul vizează cauza subiacentă: hidratare, alcalinizare, analgezice și transfuzii",
   "După injecție intracorporeală de vasoactive, dacă durata este sub 6 ore, se poate răspunde la fenilefrină intracorporeală",
   "Fimoza este contractura fibrotică a prepuțului care nu permite retracția peste gland; diabetul este factor predispozant",
   "Priapismul cu flux crescut are PO2 cavernos scăzută, identică ischemiei",
   "Fimoza se tratează doar topic, circumcizia electivă fiind contraindicată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tratamentul vizează cauza subiacentă: hidratare, alcalinizare, analgezice și transfuzii — Corect: Hidratarea, alcalinizarea, analgezicele și transfuziile sunt protocolul citat în anemia falciformă.\n\nDupă injecție intracorporeală de vasoactive, dacă durata este sub 6 ore, se poate răspunde la fenilefrină intracorporeală — Corect: Fereastra <6 ore pentru fenilefrină după injecție vasoactivă este explicită.\n\nFimoza este contractura fibrotică a prepuțului care nu permite retracția peste gland; diabetul este factor predispozant — Corect: Definiția fimozei și diabetul ca factor predispozant sunt enunțate.\n\nPriapismul cu flux crescut are PO2 cavernos scăzută, identică ischemiei — Incorect: În fluxul înalt PO2 este crescută, nu scăzută.\n\nFimoza se tratează doar topic, circumcizia electivă fiind contraindicată — Incorect: Fimoza se tratează prin igienă și, de multe ori, prin circumcizie electivă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 662, 663, Priapism falciform — Alcalinizare; fimoza diabetică (pagini PDF: 333, 334).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    662,
    663
   ],
   "pdfPages": [
    333,
    334
   ],
   "section": "Priapism falciform — Alcalinizare; fimoza diabetică"
  },
  "learningObjective": "Ierarhizarea protocolului din falciformă (hidratare, alcalinizare, transfuzie) și a ferestrei <6 ore pentru fenilefrină, plus fimoza diabetică.",
  "optionRationales": [
   "Hidratarea, alcalinizarea, analgezicele și transfuziile sunt protocolul citat în anemia falciformă.",
   "Fereastra <6 ore pentru fenilefrină după injecție vasoactivă este explicită.",
   "Definiția fimozei și diabetul ca factor predispozant sunt enunțate.",
   "În fluxul înalt PO2 este crescută, nu scăzută.",
   "Fimoza se tratează prin igienă și, de multe ori, prin circumcizie electivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează gazele cavernosului (PO2 scăzută în flux înalt) și interzice circumcizia electivă a fimozei."
  },
  "textbookExpressions": [
   "falciformă",
   "alcalinizare"
  ]
 },
 {
  "id": "urologie-adv-117",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Circumcizia la nou-născut și la adult:",
  "options": [
   "La nou-născuți se pot folosi cleme Gomco sau Plastibell, fără anestezie",
   "La adulți, un bloc penian permite circumcizia ca procedură ambulatorie",
   "Se recomandă cauterul împreună cu clema Gomco, pentru hemostaza glandului",
   "Incizia dorsală se oprește la 5 cm de șanțul coronal",
   "Artera frenului nu sângerează și nu necesită ligatură"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "La nou-născuți se pot folosi cleme Gomco sau Plastibell, fără anestezie — Corect: Gomco sau Plastibell, fără anestezie, sunt descrise la nou-născut.\n\nLa adulți, un bloc penian permite circumcizia ca procedură ambulatorie — Corect: Blocul penian și caracterul ambulator la adult sunt explicite.\n\nSe recomandă cauterul împreună cu clema Gomco, pentru hemostaza glandului — Incorect: Cauterul cu Gomco sau pense metalice similare riscă lezarea glandului.\n\nIncizia dorsală se oprește la 5 cm de șanțul coronal — Incorect: Incizia dorsală ajunge până la aproximativ 1 cm de șanțul coronal.\n\nArtera frenului nu sângerează și nu necesită ligatură — Incorect: Sângerarea arterei frenului necesită uneori ligatură.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 664, Circumcizie — Gomco/Plastibell și blocul penian (pagini PDF: 335).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    664
   ],
   "pdfPages": [
    335
   ],
   "section": "Circumcizie — Gomco/Plastibell și blocul penian"
  },
  "learningObjective": "Recunoașterea clemelor neonatale fără anestezie și a blocului penian ambulator la adult, față de cauterul interzis pe Gomco.",
  "optionRationales": [
   "Gomco sau Plastibell, fără anestezie, sunt descrise la nou-născut.",
   "Blocul penian și caracterul ambulator la adult sunt explicite.",
   "Cauterul cu Gomco sau pense metalice similare riscă lezarea glandului.",
   "Incizia dorsală ajunge până la aproximativ 1 cm de șanțul coronal.",
   "Sângerarea arterei frenului necesită uneori ligatură."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Asociază cauterul cu Gomco — exact combinația pe care textul o interzice din cauza leziunii de gland."
  },
  "textbookExpressions": [
   "Gomco sau Plastibell",
   "bloc penian"
  ]
 },
 {
  "id": "urologie-adv-118",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Glandele uretrale și traumatismul uretrei posterioare:",
  "options": [
   "Glandele Littre, producătoare de fluid pre-ejaculator, sunt localizate în uretra peniană",
   "Glandele periuretrale Skene se deschid în uretra distală feminină",
   "Leziunile uretrei prostatomembranoase apar la circa 10% dintre pacienții cu fracturi pelvine",
   "Meatul feminin se deschide la 8 cm posterior de clitoris",
   "Uretra distală feminină drenează limfa în ganglionii preaortici"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Glandele Littre, producătoare de fluid pre-ejaculator, sunt localizate în uretra peniană — Corect: Sediul glandelor Littre în uretra peniană este explicit.\n\nGlandele periuretrale Skene se deschid în uretra distală feminină — Corect: Deschiderea glandelor Skene în uretra distală feminină este descrisă.\n\nLeziunile uretrei prostatomembranoase apar la circa 10% dintre pacienții cu fracturi pelvine — Corect: Cifra de aproximativ 10% dintre fracturile pelvine este citată.\n\nMeatul feminin se deschide la 8 cm posterior de clitoris — Incorect: Meatul feminin se deschide la 2 cm posterior de clitoris.\n\nUretra distală feminină drenează limfa în ganglionii preaortici — Incorect: Porțiunea distală feminină drenează în ganglionii inghinali, nu preaortici.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 664, Uretră — Littre, Skene și 10% din fracturile pelvine (pagini PDF: 335).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    664
   ],
   "pdfPages": [
    335
   ],
   "section": "Uretră — Littre, Skene și 10% din fracturile pelvine"
  },
  "learningObjective": "Potrivirea glandelor Littre (peniană) și Skene (distal feminin) cu ponderea de 10% a leziunilor prostatomembranoase din fractura de bazin.",
  "optionRationales": [
   "Sediul glandelor Littre în uretra peniană este explicit.",
   "Deschiderea glandelor Skene în uretra distală feminină este descrisă.",
   "Cifra de aproximativ 10% dintre fracturile pelvine este citată.",
   "Meatul feminin se deschide la 2 cm posterior de clitoris.",
   "Porțiunea distală feminină drenează în ganglionii inghinali, nu preaortici."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută meatul feminin de la 2 cm la 8 cm și limfa distală pe preaorticii testiculului."
  },
  "textbookExpressions": [
   "Glandele Littre",
   "Skene"
  ]
 },
 {
  "id": "urologie-adv-119",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Vascularizația și drenajul limfatic ale testiculului:",
  "options": [
   "Artera spermatică internă are originea în aortă, sub emergența arterelor renale",
   "Vena spermatică internă stângă drenează în vena renală stângă, iar dreapta în vena cavă inferioară",
   "Limfa testiculară drenează în ganglionii preaortici și precavi, esențial pentru înțelegerea diseminării cancerului",
   "Vena spermatică stângă drenează direct în vena cavă inferioară, analog dreptei",
   "Artera deferențială provine din artera renală, nu din vezicala inferioară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Artera spermatică internă are originea în aortă, sub emergența arterelor renale — Corect: Originea aortică sub arterele renale este explicită.\n\nVena spermatică internă stângă drenează în vena renală stângă, iar dreapta în vena cavă inferioară — Corect: Asimetria venoasă stânga–vena renală versus dreapta–VCI este descrisă.\n\nLimfa testiculară drenează în ganglionii preaortici și precavi, esențial pentru înțelegerea diseminării cancerului — Corect: Drenajul preaortic și precav este numit esențial pentru diseminarea cancerului testicular.\n\nVena spermatică stângă drenează direct în vena cavă inferioară, analog dreptei — Incorect: Stânga drenează în vena renală stângă, nu direct în VCI.\n\nArtera deferențială provine din artera renală, nu din vezicala inferioară — Incorect: Artera deferențială este ramură din artera vezicală inferioară.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 669, Testicul — Pedicul aortic, vena renală stângă și preaortici (pagini PDF: 340).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    669
   ],
   "pdfPages": [
    340
   ],
   "section": "Testicul — Pedicul aortic, vena renală stângă și preaortici"
  },
  "learningObjective": "Fixarea originii sub-renale a arterei spermatice, a asimetrei venoase (stânga–renală, dreapta–VCI) și a țintei preaortice/precave.",
  "optionRationales": [
   "Originea aortică sub arterele renale este explicită.",
   "Asimetria venoasă stânga–vena renală versus dreapta–VCI este descrisă.",
   "Drenajul preaortic și precav este numit esențial pentru diseminarea cancerului testicular.",
   "Stânga drenează în vena renală stângă, nu direct în VCI.",
   "Artera deferențială este ramură din artera vezicală inferioară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Simetrizează venele spermatice ambele spre VCI și mută artera deferențială pe pediculul renal."
  },
  "textbookExpressions": [
   "vena renală stângă",
   "preaortici"
  ]
 },
 {
  "id": "urologie-adv-120",
  "topicId": "urologie",
  "type": "CM",
  "stem": "Cateterismul vezical la adult:",
  "options": [
   "La bărbat se folosește, de obicei, un cateter 16 French; se injectează 10 mL lubrifiant în uretră; se avansează până la bifurcația Foley; balonul se umflă cu 7–10 mL apă sterilă",
   "La femeie, cateterul se avansează doar jumătate din lungime înainte de umflarea balonului",
   "Avansarea la bărbat se oprește la prima apariție a urinei, fără a ajunge la bifurcație",
   "Balonul se umflă cu 60 mL ser, analog irigației prin seringa Toomey",
   "O mână nu trebuie să țină penisul, ambele fiind libere pentru câmpul steril"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "La bărbat se folosește, de obicei, un cateter 16 French; se injectează 10 mL lubrifiant în uretră; se avansează până la bifurcația Foley; balonul se umflă cu 7–10 mL apă sterilă — Corect: Calibrul 16 French, cei 10 mL de lubrifiant uretral, avansarea până la bifurcație și balonul de 7–10 mL sunt explicite.\n\nLa femeie, cateterul se avansează doar jumătate din lungime înainte de umflarea balonului — Corect: La femeie avansarea pe jumătate din lungime înainte de umflarea balonului este precizată.\n\nAvansarea la bărbat se oprește la prima apariție a urinei, fără a ajunge la bifurcație — Incorect: Textul cere să nu se oprească la prima vedere a urinei, ci să se ajungă la bifurcația sondei.\n\nBalonul se umflă cu 60 mL ser, analog irigației prin seringa Toomey — Incorect: 60 mL prin seringa Toomey este irigația de verificare, nu volumul balonului.\n\nO mână nu trebuie să țină penisul, ambele fiind libere pentru câmpul steril — Incorect: O mână ține permanent penisul odată ce procedura a început.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 29, p. 673, Cateterism — 16 French, 10 mL lubrifiant și balon 7–10 mL (pagini PDF: 344).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 29,
   "printedPages": [
    673
   ],
   "pdfPages": [
    344
   ],
   "section": "Cateterism — 16 French, 10 mL lubrifiant și balon 7–10 mL"
  },
  "learningObjective": "Aplicarea protocolului masculin (16 Fr, 10 mL lubrifiant, avansare până la bifurcație, balon 7–10 mL) și a avansării pe jumătate la femeie.",
  "optionRationales": [
   "Calibrul 16 French, cei 10 mL de lubrifiant uretral, avansarea până la bifurcație și balonul de 7–10 mL sunt explicite.",
   "La femeie avansarea pe jumătate din lungime înainte de umflarea balonului este precizată.",
   "Textul cere să nu se oprească la prima vedere a urinei, ci să se ajungă la bifurcația sondei.",
   "60 mL prin seringa Toomey este irigația de verificare, nu volumul balonului.",
   "O mână ține permanent penisul odată ce procedura a început."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oprește cateterul la prima picătură de urină și umflă balonul cu 60 mL, două erori din același algoritm practic."
  },
  "textbookExpressions": [
   "16 French",
   "7-10 mL"
  ]
 }
];
