import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_PSIHIATRIE:Question[]=[
 {
  "id": "psihiatrie-adv-001",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Schizofrenia:",
  "options": [
   "Diagnosticul cere două sau mai multe simptome caracteristice cel puțin o lună, dintr-un interval de 6 luni, cu afectarea funcționării peste 6 luni",
   "Antipsihoticele atipice sunt medicamente de primă linie în tratamentul de întreținere",
   "Clozapina este rezervată psihozei refractare din cauza riscului de agranulocitoză",
   "Neurolepticele cu potență crescută au mai multe efecte extrapiramidale și mai puține efecte anticolinergice",
   "Simptomele negative, dacă predomină, asociază un prognostic mai bun"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Diagnosticul cere două sau mai multe simptome caracteristice cel puțin o lună, dintr-un interval de 6 luni, cu afectarea funcționării peste 6 luni — Corect: Criteriul a două simptome o lună din 6, cu disfuncție >6 luni, este explicit.\n\nAntipsihoticele atipice sunt medicamente de primă linie în tratamentul de întreținere — Corect: Atipicele sunt citate ca primă linie de întreținere.\n\nClozapina este rezervată psihozei refractare din cauza riscului de agranulocitoză — Corect: Clozapina este cel mai eficace, dar rezervată formelor refractare prin agranulocitoză.\n\nNeurolepticele cu potență crescută au mai multe efecte extrapiramidale și mai puține efecte anticolinergice — Corect: Textul contrastează potența crescută (mai multe extrapiramidale, mai puține anticolinergice) cu cea redusă.\n\nSimptomele negative, dacă predomină, asociază un prognostic mai bun — Incorect: Predominanța simptomelor negative asociază prognostic mai prost.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 319, Tulburări psihotice — Schizofrenia (pagini PDF: 97).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    319
   ],
   "pdfPages": [
    97
   ],
   "section": "Tulburări psihotice — Schizofrenia"
  },
  "learningObjective": "Aplicarea criteriului temporal de 6 luni și a ierarhiei antipsihoticelor, inclusiv a clozapinei.",
  "optionRationales": [
   "Criteriul a două simptome o lună din 6, cu disfuncție >6 luni, este explicit.",
   "Atipicele sunt citate ca primă linie de întreținere.",
   "Clozapina este cel mai eficace, dar rezervată formelor refractare prin agranulocitoză.",
   "Textul contrastează potența crescută (mai multe extrapiramidale, mai puține anticolinergice) cu cea redusă.",
   "Predominanța simptomelor negative asociază prognostic mai prost."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează prognosticul formelor cu simptome negative predominante."
  },
  "textbookExpressions": [
   "agranulocitoză",
   "Medicamente de primă linie"
  ]
 },
 {
  "id": "psihiatrie-adv-002",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații diferențiază corect tulburările psihotice după durată?",
  "options": [
   "Tulburarea schizofreniformă durează cel puțin o lună, dar nu depășește 6 luni",
   "Tulburarea psihotică scurtă durează cel puțin o zi, dar nu depășește o lună, fără a include simptomele negative între criteriile de definire",
   "În tulburarea schizoafectivă, halucinațiile și delirurile trebuie să fie prezente și separat de episodul afectiv",
   "Tulburarea delirantă întrunește criteriile complete de schizofrenie, cu dezorganizare marcată a vorbirii",
   "Tulburarea schizofreniformă cere simptome peste 6 luni, identic cu schizofrenia"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tulburarea schizofreniformă durează cel puțin o lună, dar nu depășește 6 luni — Corect: Intervalul 1–6 luni definește schizofreniforma.\n\nTulburarea psihotică scurtă durează cel puțin o zi, dar nu depășește o lună, fără a include simptomele negative între criteriile de definire — Corect: Intervalul 1 zi–1 lună, fără simptomele negative între criterii, definește psihoza scurtă.\n\nÎn tulburarea schizoafectivă, halucinațiile și delirurile trebuie să fie prezente și separat de episodul afectiv — Corect: Disocierea psihozei de episodul afectiv este criteriul schizoafectivei.\n\nTulburarea delirantă întrunește criteriile complete de schizofrenie, cu dezorganizare marcată a vorbirii — Incorect: Tulburarea delirantă nu întrunește criteriile de schizofrenie și nu afectează funcția în afara consecințelor delirului.\n\nTulburarea schizofreniformă cere simptome peste 6 luni, identic cu schizofrenia — Incorect: Peste 6 luni cu disfuncție este criteriul schizofreniei, nu al schizofreniformei.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 320, Tulburări psihotice — Alte tulburări psihotice (pagini PDF: 98).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    320
   ],
   "pdfPages": [
    98
   ],
   "section": "Tulburări psihotice — Alte tulburări psihotice"
  },
  "learningObjective": "Separarea schizofreniformei, a psihozei scurte și a schizoafectivei după durată și după relația cu dispoziția.",
  "optionRationales": [
   "Intervalul 1–6 luni definește schizofreniforma.",
   "Intervalul 1 zi–1 lună, fără simptomele negative între criterii, definește psihoza scurtă.",
   "Disocierea psihozei de episodul afectiv este criteriul schizoafectivei.",
   "Tulburarea delirantă nu întrunește criteriile de schizofrenie și nu afectează funcția în afara consecințelor delirului.",
   "Peste 6 luni cu disfuncție este criteriul schizofreniei, nu al schizofreniformei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii lungesc schizofreniforma până la criteriul schizofreniei și atribuie delirantei dezorganizarea schizofrenă."
  },
  "textbookExpressions": [
   "fără să depăşească 6 luni",
   "fără a depăşi o lună"
  ]
 },
 {
  "id": "psihiatrie-adv-003",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea depresivă majoră:",
  "options": [
   "Diagnosticul cere cinci simptome, incluzând dispoziția depresivă sau anhedonia, peste 2 săptămâni",
   "După remisiune, rata de recurență a episoadelor este de 50%",
   "Subtipul cu simptome atipice este cel mai frecvent",
   "TEC este contraindicată în formele severe, rezistente la tratament",
   "Fototerapia este tratamentul subtipului cu simptome psihotice, nu al celui sezonier"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Diagnosticul cere cinci simptome, incluzând dispoziția depresivă sau anhedonia, peste 2 săptămâni — Corect: Cele cinci simptome cu dispoziție sau anhedonie >2 săptămâni sunt criteriile din text.\n\nDupă remisiune, rata de recurență a episoadelor este de 50% — Corect: Recurența de 50% este explicită.\n\nSubtipul cu simptome atipice este cel mai frecvent — Corect: Nota identifică forma atipică drept cel mai frecvent subtip.\n\nTEC este contraindicată în formele severe, rezistente la tratament — Incorect: TEC este indicată tocmai în cazurile rezistente sau severe.\n\nFototerapia este tratamentul subtipului cu simptome psihotice, nu al celui sezonier — Incorect: Fototerapia tratează forma cu ritmicitate sezonieră, nu pe cea psihotică.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 321, Tulburări afective — Tulburarea depresivă majoră (pagini PDF: 99).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    321
   ],
   "pdfPages": [
    99
   ],
   "section": "Tulburări afective — Tulburarea depresivă majoră"
  },
  "learningObjective": "Aplicarea pragului de 2 săptămâni, a recurenței de 50% și a ierarhiei subtipurilor.",
  "optionRationales": [
   "Cele cinci simptome cu dispoziție sau anhedonie >2 săptămâni sunt criteriile din text.",
   "Recurența de 50% este explicită.",
   "Nota identifică forma atipică drept cel mai frecvent subtip.",
   "TEC este indicată tocmai în cazurile rezistente sau severe.",
   "Fototerapia tratează forma cu ritmicitate sezonieră, nu pe cea psihotică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii interzic TEC acolo unde textul o indică și mută fototerapia de pe forma sezonieră pe cea psihotică."
  },
  "textbookExpressions": [
   "rata de recurenţă de 50%",
   "simptome atipice"
  ]
 },
 {
  "id": "psihiatrie-adv-004",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "Medicamentul de primă linie citat pentru tratamentul de lungă durată al maniei este:",
  "options": [
   "Litiul, cu risc de anomalie Ebstein, diabet insipid nefrogen și hipotiroidism",
   "Valproatul, fără risc teratogen",
   "Carbamazepina ca unică opțiune, fără asociere cu antipsihotice atipice",
   "Benzodiazepinele ca stabilizator unic de întreținere",
   "SSRI în monoterapie, fără stabilizator de dispoziție"
  ],
  "correct": [
   0
  ],
  "explanation": "Litiul, cu risc de anomalie Ebstein, diabet insipid nefrogen și hipotiroidism — Corect: Litiul este frecvent prima linie de lungă durată; efectele adverse includ Ebstein, diabet insipid nefrogen și hipotiroidism.\n\nValproatul, fără risc teratogen — Incorect: Valproatul este un stabilizator, dar textul nu îl scutește de teratogenitate și nu îl pune ca răspuns al acestei descrieri.\n\nCarbamazepina ca unică opțiune, fără asociere cu antipsihotice atipice — Incorect: Atipicele pot fi asociate; carbamazepina nu este unica opțiune.\n\nBenzodiazepinele ca stabilizator unic de întreținere — Incorect: Benzodiazepinele nu sunt stabilizatorul de întreținere citat.\n\nSSRI în monoterapie, fără stabilizator de dispoziție — Incorect: SSRI fără stabilizator pot induce manie.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 323, Tulburări afective — Tulburarea bipolară (pagini PDF: 101).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    323
   ],
   "pdfPages": [
    101
   ],
   "section": "Tulburări afective — Tulburarea bipolară"
  },
  "learningObjective": "Identificarea litiului ca primă linie de întreținere și a reacțiilor adverse specifice, inclusiv teratogenitatea.",
  "optionRationales": [
   "Litiul este frecvent prima linie de lungă durată; efectele adverse includ Ebstein, diabet insipid nefrogen și hipotiroidism.",
   "Valproatul este un stabilizator, dar textul nu îl scutește de teratogenitate și nu îl pune ca răspuns al acestei descrieri.",
   "Atipicele pot fi asociate; carbamazepina nu este unica opțiune.",
   "Benzodiazepinele nu sunt stabilizatorul de întreținere citat.",
   "SSRI fără stabilizator pot induce manie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii propun monoterapii (SSRI, benzodiazepine) pe care textul le leagă de viraj maniacal sau de alt scop terapeutic."
  },
  "textbookExpressions": [
   "Litiul este folosit frecvent",
   "anomalia Ebstein"
  ]
 },
 {
  "id": "psihiatrie-adv-005",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea bipolară:",
  "options": [
   "Tipul I cere cel puțin un episod maniacal; depresia majoră este frecventă, dar nu necesară pentru diagnostic",
   "Tipul II asociază cel puțin un episod hipomaniacal și cel puțin un episod de depresie majoră",
   "Episodul maniacal durează cel puțin 4 zile și nu afectează funcționarea",
   "Tipul II se definește prin episoade maniacale recurente, fără depresie",
   "Hipomania durează cel puțin o săptămână și produce dezorganizare funcțională identică maniei"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Tipul I cere cel puțin un episod maniacal; depresia majoră este frecventă, dar nu necesară pentru diagnostic — Corect: Criteriul de cel puțin un episod maniacal pentru tipul I este explicit.\n\nTipul II asociază cel puțin un episod hipomaniacal și cel puțin un episod de depresie majoră — Corect: Tipul II cere hipomanie plus depresie majoră.\n\nEpisodul maniacal durează cel puțin 4 zile și nu afectează funcționarea — Incorect: Durata de 4 zile fără afectare funcțională definește hipomania, nu mania.\n\nTipul II se definește prin episoade maniacale recurente, fără depresie — Incorect: Episoadele maniacale definesc tipul I, nu II.\n\nHipomania durează cel puțin o săptămână și produce dezorganizare funcțională identică maniei — Incorect: Hipomania durează cel puțin 4 zile și nu produce afectare semnificativă a funcționării.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 322, 323, Tulburări afective — Tulburarea bipolară (pagini PDF: 100, 101).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    322,
    323
   ],
   "pdfPages": [
    100,
    101
   ],
   "section": "Tulburări afective — Tulburarea bipolară"
  },
  "learningObjective": "Separarea bipolarului I de II după prezența maniei versus hipomaniei și a depresiei majore.",
  "optionRationales": [
   "Criteriul de cel puțin un episod maniacal pentru tipul I este explicit.",
   "Tipul II cere hipomanie plus depresie majoră.",
   "Durata de 4 zile fără afectare funcțională definește hipomania, nu mania.",
   "Episoadele maniacale definesc tipul I, nu II.",
   "Hipomania durează cel puțin 4 zile și nu produce afectare semnificativă a funcționării."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează mania/hipomania între tipurile I și II și lungesc hipomania până la criteriul maniei."
  },
  "textbookExpressions": [
   "Tipul I",
   "Tipul II"
  ]
 },
 {
  "id": "psihiatrie-adv-006",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea de panică:",
  "options": [
   "Atacurile durează până la maximum 30 de minute și asociază teama de moarte, palpitații și dispnee",
   "SSRI și SNRI sunt folosite în tratamentul de lungă durată",
   "Benzodiazepinele pot fi folosite pentru tratamentul de moment al atacului",
   "Buspirona înlocuiește SSRI ca primă linie a atacurilor acute",
   "Diagnosticul se pune după un singur atac, fără teamă anticipatorie și fără modificare de comportament"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Atacurile durează până la maximum 30 de minute și asociază teama de moarte, palpitații și dispnee — Corect: Plafonul de 30 de minute și simptomele vegetative sunt explicite.\n\nSSRI și SNRI sunt folosite în tratamentul de lungă durată — Corect: SSRI și SNRI sunt tratamentul de lungă durată.\n\nBenzodiazepinele pot fi folosite pentru tratamentul de moment al atacului — Corect: Benzodiazepinele sunt rezervate momentului atacului; alprazolamul are debut rapid.\n\nBuspirona înlocuiește SSRI ca primă linie a atacurilor acute — Incorect: Buspirona este citată pentru anxietatea cronică cu risc de abuz, nu ca salvare a atacului acut.\n\nDiagnosticul se pune după un singur atac, fără teamă anticipatorie și fără modificare de comportament — Incorect: Diagnosticul cere recurență plus teamă persistentă sau evitare maladaptativă.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 323, Tulburări anxioase — Tulburarea de panică (pagini PDF: 101).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    323
   ],
   "pdfPages": [
    101
   ],
   "section": "Tulburări anxioase — Tulburarea de panică"
  },
  "learningObjective": "Corelarea duratei atacului cu tratamentul de fond (SSRI/SNRI) versus cel de moment (benzodiazepine).",
  "optionRationales": [
   "Plafonul de 30 de minute și simptomele vegetative sunt explicite.",
   "SSRI și SNRI sunt tratamentul de lungă durată.",
   "Benzodiazepinele sunt rezervate momentului atacului; alprazolamul are debut rapid.",
   "Buspirona este citată pentru anxietatea cronică cu risc de abuz, nu ca salvare a atacului acut.",
   "Diagnosticul cere recurență plus teamă persistentă sau evitare maladaptativă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută buspirona pe atacul acut și permit diagnosticul după un episod izolat."
  },
  "textbookExpressions": [
   "maximum 30 de minute",
   "Benzodiazepinele"
  ]
 },
 {
  "id": "psihiatrie-adv-007",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Supradoza de benzodiazepine:",
  "options": [
   "Doza letală este de peste 1.000 de ori mai mare decât doza terapeutică, ceea ce face suicidul prin această cale foarte dificil",
   "Flumazenilul este antagonistul care poate anula efectele supradozei",
   "Doza letală este apropiată de cea terapeutică, similar antidepresivelor triciclice",
   "Naloxona este antidotul specific",
   "Flumazenilul este contraindicat, deoarece crește toxicitatea benzodiazepinelor"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Doza letală este de peste 1.000 de ori mai mare decât doza terapeutică, ceea ce face suicidul prin această cale foarte dificil — Corect: Nota „De reținut” citează raportul >1.000 între doza letală și cea terapeutică.\n\nFlumazenilul este antagonistul care poate anula efectele supradozei — Corect: Flumazenilul este antagonistul citat.\n\nDoza letală este apropiată de cea terapeutică, similar antidepresivelor triciclice — Incorect: Indexul terapeutic îngust aparține ADT (supradoză la de 5 ori doza terapeutică), nu benzodiazepinelor.\n\nNaloxona este antidotul specific — Incorect: Naloxona este antagonist opioid, nu benzodiazepinic.\n\nFlumazenilul este contraindicat, deoarece crește toxicitatea benzodiazepinelor — Incorect: Textul prezintă flumazenilul ca antidot, nu ca factor de toxicitate.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 324, Tulburări anxioase — Medicația anxiolitică (pagini PDF: 102).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    324
   ],
   "pdfPages": [
    102
   ],
   "section": "Tulburări anxioase — Medicația anxiolitică"
  },
  "learningObjective": "Recunoașterea indexului terapeutic larg al benzodiazepinelor și a rolului flumazenilului.",
  "optionRationales": [
   "Nota „De reținut” citează raportul >1.000 între doza letală și cea terapeutică.",
   "Flumazenilul este antagonistul citat.",
   "Indexul terapeutic îngust aparține ADT (supradoză la de 5 ori doza terapeutică), nu benzodiazepinelor.",
   "Naloxona este antagonist opioid, nu benzodiazepinic.",
   "Textul prezintă flumazenilul ca antidot, nu ca factor de toxicitate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică toxicitatea ADT și antidotul opioidelor asupra benzodiazepinelor."
  },
  "textbookExpressions": [
   "I.OOO ori",
   "Flumazenilul"
  ]
 },
 {
  "id": "psihiatrie-adv-008",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "Tulburarea acută de stres se caracterizează prin:",
  "options": [
   "Debut în prima lună după eveniment și remisiune într-o lună",
   "Debut în primele 3 luni și remisiune în 6 luni de la dispariția stresorului",
   "Simptome care durează cel puțin o lună, definind astfel PTSD",
   "Debut la peste un an de la stresor",
   "Evoluție cronică prin definiție, identică tulburării de adaptare"
  ],
  "correct": [
   0
  ],
  "explanation": "Debut în prima lună după eveniment și remisiune într-o lună — Corect: Nota „De reținut” plasează debutul și remisiunea în prima lună.\n\nDebut în primele 3 luni și remisiune în 6 luni de la dispariția stresorului — Incorect: Fereastra 3 luni / 6 luni definește tulburarea de adaptare.\n\nSimptome care durează cel puțin o lună, definind astfel PTSD — Incorect: Durata de cel puțin o lună este criteriul PTSD.\n\nDebut la peste un an de la stresor — Incorect: Debutul tardiv, peste un an, nu este descris pentru stresul acut.\n\nEvoluție cronică prin definiție, identică tulburării de adaptare — Incorect: Adaptarea se remite în 6 luni și nu este cronică prin definiție.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 325, Tulburări legate de traumă — Tulburarea acută de stres (pagini PDF: 103).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    325
   ],
   "pdfPages": [
    103
   ],
   "section": "Tulburări legate de traumă — Tulburarea acută de stres"
  },
  "learningObjective": "Identificarea ferestrei de o lună care separă stresul acut de adaptare și de PTSD.",
  "optionRationales": [
   "Nota „De reținut” plasează debutul și remisiunea în prima lună.",
   "Fereastra 3 luni / 6 luni definește tulburarea de adaptare.",
   "Durata de cel puțin o lună este criteriul PTSD.",
   "Debutul tardiv, peste un an, nu este descris pentru stresul acut.",
   "Adaptarea se remite în 6 luni și nu este cronică prin definiție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt ferestrele temporale reale ale adaptării și PTSD, ușor de permutat."
  },
  "textbookExpressions": [
   "prima lună",
   "se remite într-o lună"
  ]
 },
 {
  "id": "psihiatrie-adv-009",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Identificați afirmațiile corecte privind tulburarea conversivă și entitățile înrudite:",
  "options": [
   "Tulburarea conversivă produce deficite senzoriale sau motorii fără o condiție neurologică identificată, adesea cu „la belle indifférence”",
   "În tulburarea cu simptome somatice, pacienții sunt foarte afectați psihologic de simptomele lor, spre deosebire de conversie",
   "Tulburările factice nu au un beneficiu secundar evident, spre deosebire de simularea premeditată",
   "Simularea premeditată urmărește un beneficiu (scutire de muncă, narcotice) și este mai frecventă la bărbați",
   "Tulburarea conversivă se caracterizează prin preocuparea de a avea o boală gravă în absența simptomelor somatice"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Tulburarea conversivă produce deficite senzoriale sau motorii fără o condiție neurologică identificată, adesea cu „la belle indifférence” — Corect: Deficitele inexplicabile și „la belle indifférence” definesc conversia.\n\nÎn tulburarea cu simptome somatice, pacienții sunt foarte afectați psihologic de simptomele lor, spre deosebire de conversie — Corect: Contrastul cu preocuparea intensă din tulburarea cu simptome somatice este explicit.\n\nTulburările factice nu au un beneficiu secundar evident, spre deosebire de simularea premeditată — Corect: Absența beneficiului secundar distinge facticele de simulare.\n\nSimularea premeditată urmărește un beneficiu (scutire de muncă, narcotice) și este mai frecventă la bărbați — Corect: Beneficiul și predominanța masculină sunt citate pentru malingering.\n\nTulburarea conversivă se caracterizează prin preocuparea de a avea o boală gravă în absența simptomelor somatice — Incorect: Preocuparea de boală fără simptome semnificative definește tulburarea nosofobică, nu conversia.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 326, Tulburări somatice — Conversie, factice, simulare (pagini PDF: 104).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    326
   ],
   "pdfPages": [
    104
   ],
   "section": "Tulburări somatice — Conversie, factice, simulare"
  },
  "learningObjective": "Diferențierea conversiei, a simptomelor somatice, a tulburărilor factice și a simulării după motiv și insight afectiv.",
  "optionRationales": [
   "Deficitele inexplicabile și „la belle indifférence” definesc conversia.",
   "Contrastul cu preocuparea intensă din tulburarea cu simptome somatice este explicit.",
   "Absența beneficiului secundar distinge facticele de simulare.",
   "Beneficiul și predominanța masculină sunt citate pentru malingering.",
   "Preocuparea de boală fără simptome semnificative definește tulburarea nosofobică, nu conversia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul atribuie conversiei criteriul nosofobiei, cele trei entități fiind definite pe aceeași pagină."
  },
  "textbookExpressions": [
   "La belle indifference",
   "beneficiu secundar"
  ]
 },
 {
  "id": "psihiatrie-adv-010",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Anorexia nervosa și bulimia nervosa:",
  "options": [
   "În anorexie, greutatea este în general sub 85% din greutatea ideală, cu lanugo, bradicardie și amenoree",
   "Anorexia are o rată de mortalitate pe 10 ani de 6%, prin complicații sau suicid",
   "Fluoxetina este medicația aprobată pentru bulimie; în anorexie, farmacoterapia nu și-a dovedit utilitatea ca tratament de fond",
   "Pacientele cu bulimie au, în general, greutate corporală scăzută, similar anorexiei",
   "Sindromul de realimentare se caracterizează prin hiperfosfatemie și nu are risc cardiovascular"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În anorexie, greutatea este în general sub 85% din greutatea ideală, cu lanugo, bradicardie și amenoree — Corect: Pragul <85% și semnele de înfometare sunt explicite.\n\nAnorexia are o rată de mortalitate pe 10 ani de 6%, prin complicații sau suicid — Corect: Mortalitatea de 6% pe 10 ani este din notă.\n\nFluoxetina este medicația aprobată pentru bulimie; în anorexie, farmacoterapia nu și-a dovedit utilitatea ca tratament de fond — Corect: Fluoxetina este citată pentru bulimie; farmacoterapia anorexiei nu și-a dovedit utilitatea.\n\nPacientele cu bulimie au, în general, greutate corporală scăzută, similar anorexiei — Incorect: În bulimie greutatea este în general normală, nu scăzută.\n\nSindromul de realimentare se caracterizează prin hiperfosfatemie și nu are risc cardiovascular — Incorect: Realimentarea produce hipofosfatemie, hipomagneziemie și hipocalcemie, cu risc de colaps cardiovascular.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 327, Tulburări alimentare — Anorexia și bulimia (pagini PDF: 105).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    327
   ],
   "pdfPages": [
    105
   ],
   "section": "Tulburări alimentare — Anorexia și bulimia"
  },
  "learningObjective": "Separarea anorexiei de bulimie după greutate, mortalitate și locul fluoxetinei.",
  "optionRationales": [
   "Pragul <85% și semnele de înfometare sunt explicite.",
   "Mortalitatea de 6% pe 10 ani este din notă.",
   "Fluoxetina este citată pentru bulimie; farmacoterapia anorexiei nu și-a dovedit utilitatea.",
   "În bulimie greutatea este în general normală, nu scăzută.",
   "Realimentarea produce hipofosfatemie, hipomagneziemie și hipocalcemie, cu risc de colaps cardiovascular."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie bulimiei cașexia anorexiei și inversează tulburările ionice ale realimentării."
  },
  "textbookExpressions": [
   "<85% din greutatea",
   "Fluoxetină"
  ]
 },
 {
  "id": "psihiatrie-adv-011",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea de anxietate generalizată:",
  "options": [
   "Presupune anxietate excesivă în majoritatea zilelor, peste 6 luni, cu afectarea funcționării",
   "Diagnosticul cere trei dintre simptomele: neliniște, oboseală, deficit de concentrare, iritabilitate, tensiune musculară, tulburări de somn",
   "Buspirona este considerată mai sigură pe termen lung decât benzodiazepinele, din cauza riscului de dependență",
   "Riscul femeilor de a fi afectate este dublu comparativ cu bărbații",
   "Se definește prin atacuri care durează maximum 30 de minute, fără anxietate intercritică"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Presupune anxietate excesivă în majoritatea zilelor, peste 6 luni, cu afectarea funcționării — Corect: Durata >6 luni cu afectare funcțională este explicită.\n\nDiagnosticul cere trei dintre simptomele: neliniște, oboseală, deficit de concentrare, iritabilitate, tensiune musculară, tulburări de somn — Corect: Cele șase simptome, dintre care trei, sunt enumerate.\n\nBuspirona este considerată mai sigură pe termen lung decât benzodiazepinele, din cauza riscului de dependență — Corect: Buspirona versus benzodiazepine în tratamentul cronic este citată.\n\nRiscul femeilor de a fi afectate este dublu comparativ cu bărbații — Corect: Dublarea riscului la femei este epidemiologia citată.\n\nSe definește prin atacuri care durează maximum 30 de minute, fără anxietate intercritică — Incorect: Plafonul de 30 de minute definește atacul de panică.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 324, Tulburări anxioase — Anxietatea generalizată (pagini PDF: 102).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    324
   ],
   "pdfPages": [
    102
   ],
   "section": "Tulburări anxioase — Anxietatea generalizată"
  },
  "learningObjective": "Aplicarea pragului de 6 luni, a celor trei simptome, a buspironei și a predominanței feminine duble.",
  "optionRationales": [
   "Durata >6 luni cu afectare funcțională este explicită.",
   "Cele șase simptome, dintre care trei, sunt enumerate.",
   "Buspirona versus benzodiazepine în tratamentul cronic este citată.",
   "Dublarea riscului la femei este epidemiologia citată.",
   "Plafonul de 30 de minute definește atacul de panică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă durata atacului de panică și fototerapia depresiei sezoniere."
  },
  "textbookExpressions": [
   ">6 luni",
   "Buspirona"
  ]
 },
 {
  "id": "psihiatrie-adv-012",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "Obsesiile și compulsiile din TOC sunt descrise ca:",
  "options": [
   "Nedorite și supărătoare (ego-distonice)",
   "Dezirabile, legate de control și perfecționism (ego-sintonice)",
   "Absente prin definiție, diagnosticul cerând doar ticurile vocale",
   "Identice criteriilor de personalitate antisocială",
   "Un deficit de distrofină, ca în Duchenne"
  ],
  "correct": [
   0
  ],
  "explanation": "Nedorite și supărătoare (ego-distonice) — Corect: Nota definește TOC ca ego-distonică.\n\nDezirabile, legate de control și perfecționism (ego-sintonice) — Incorect: Ego-sintonicul caracterizează TPOC, nu TOC.\n\nAbsente prin definiție, diagnosticul cerând doar ticurile vocale — Incorect: Ticurile vocale țin de Tourette, nu înlocuiesc obsesiile.\n\nIdentice criteriilor de personalitate antisocială — Incorect: Personalitatea antisocială are alte criterii.\n\nUn deficit de distrofină, ca în Duchenne — Incorect: Distrofina este irelevantă.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 324, TOC — Distincția de personalitatea obsesiv-compulsivă (pagini PDF: 102).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    324
   ],
   "pdfPages": [
    102
   ],
   "section": "TOC — Distincția de personalitatea obsesiv-compulsivă"
  },
  "learningObjective": "Separarea TOC ego-distonice de personalitatea obsesiv-compulsivă ego-sintonică.",
  "optionRationales": [
   "Nota definește TOC ca ego-distonică.",
   "Ego-sintonicul caracterizează TPOC, nu TOC.",
   "Ticurile vocale țin de Tourette, nu înlocuiesc obsesiile.",
   "Personalitatea antisocială are alte criterii.",
   "Distrofina este irelevantă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Nota contrastează explicit ego-distonic versus ego-sintonic; distractorul principal este TPOC."
  },
  "textbookExpressions": [
   "ego-DIStonice",
   "TOC"
  ]
 },
 {
  "id": "psihiatrie-adv-013",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea de stres post-traumatic:",
  "options": [
   "Simptomele trebuie să dureze cel puțin o lună",
   "Evenimentul poate fi trăit direct, ca martor sau de o persoană apropiată",
   "Debutul și remisiunea se înscriu ambele în prima lună, definind astfel stresul acut",
   "Durata minimă este de o zi, ca în psihoza scurtă",
   "Buspirona înlocuiește expunerea la traumă ca unic criteriu diagnostic"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Simptomele trebuie să dureze cel puțin o lună — Corect: Durata de cel puțin o lună este explicită.\n\nEvenimentul poate fi trăit direct, ca martor sau de o persoană apropiată — Corect: Cele trei modalități de expunere sunt citate.\n\nDebutul și remisiunea se înscriu ambele în prima lună, definind astfel stresul acut — Incorect: Fereastra de o lună debut–remisiune definește stresul acut, din notă.\n\nDurata minimă este de o zi, ca în psihoza scurtă — Incorect: O zi este criteriul psihozei scurte.\n\nBuspirona înlocuiește expunerea la traumă ca unic criteriu diagnostic — Incorect: Buspirona nu este criteriu diagnostic.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 325, Tulburări legate de traumă — PTSD (pagini PDF: 103).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    325
   ],
   "pdfPages": [
    103
   ],
   "section": "Tulburări legate de traumă — PTSD"
  },
  "learningObjective": "Aplicarea duratei de cel puțin o lună și a modalităților de expunere, distinct de stresul acut.",
  "optionRationales": [
   "Durata de cel puțin o lună este explicită.",
   "Cele trei modalități de expunere sunt citate.",
   "Fereastra de o lună debut–remisiune definește stresul acut, din notă.",
   "O zi este criteriul psihozei scurte.",
   "Buspirona nu este criteriu diagnostic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Nota de pe aceeași pagină pune stresul acut în prima lună; distractorul mută PTSD pe acea fereastră."
  },
  "textbookExpressions": [
   "cel puţin 1 lună",
   "flashback-uri"
  ]
 },
 {
  "id": "psihiatrie-adv-014",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Clasificarea tulburărilor de personalitate pe grupe:",
  "options": [
   "Grupul A (excentric) include tipurile schizoid, schizotipal și paranoid",
   "Grupul B (extravagant) include histrionic, narcisist, borderline și antisocial",
   "Grupul C (ezitant) include evitant, dependent și obsesiv-compulsiv",
   "Grupul A include borderline și antisocial",
   "Grupul C include paranoid și schizotipal"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Grupul A (excentric) include tipurile schizoid, schizotipal și paranoid — Corect: Schizoid, schizotipal, paranoid = A.\n\nGrupul B (extravagant) include histrionic, narcisist, borderline și antisocial — Corect: Histrionic, narcisist, borderline, antisocial = B.\n\nGrupul C (ezitant) include evitant, dependent și obsesiv-compulsiv — Corect: Evitant, dependent, obsesiv-compulsiv = C.\n\nGrupul A include borderline și antisocial — Incorect: Borderline și antisocial sunt în B.\n\nGrupul C include paranoid și schizotipal — Incorect: Paranoid și schizotipal sunt în A.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 329, Tulburări de personalitate — Grupele A, B, C (pagini PDF: 107).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    329
   ],
   "pdfPages": [
    107
   ],
   "section": "Tulburări de personalitate — Grupele A, B, C"
  },
  "learningObjective": "Memorarea conținutului celor trei clustere, fără a muta borderline în A sau paranoid în C.",
  "optionRationales": [
   "Schizoid, schizotipal, paranoid = A.",
   "Histrionic, narcisist, borderline, antisocial = B.",
   "Evitant, dependent, obsesiv-compulsiv = C.",
   "Borderline și antisocial sunt în B.",
   "Paranoid și schizotipal sunt în A."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mutarea unui tip peste cluster este capcana clasică a tabelului 14-5."
  },
  "textbookExpressions": [
   "Grupul A",
   "Grupul C"
  ]
 },
 {
  "id": "psihiatrie-adv-015",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "Tulburarea de personalitate antisocială cere, printre altele:",
  "options": [
   "Vârsta peste 18 ani și istoric de tulburare de conduită înainte de 15 ani",
   "Debut după 40 de ani, fără antecedente de conduită",
   "Simptome negative predominante, cu prognostic bun",
   "La belle indifférence ca semn cardinal al diagnosticului",
   "Greutate sub 85% din cea ideală, cu lanugo"
  ],
  "correct": [
   0
  ],
  "explanation": "Vârsta peste 18 ani și istoric de tulburare de conduită înainte de 15 ani — Corect: Vârsta >18 ani cu conduită înainte de 15 ani este din tabel.\n\nDebut după 40 de ani, fără antecedente de conduită — Incorect: Debutul tardiv fără conduită nu îndeplinește criteriul.\n\nSimptome negative predominante, cu prognostic bun — Incorect: Simptomele negative țin de schizofrenie.\n\nLa belle indifférence ca semn cardinal al diagnosticului — Incorect: La belle indifférence caracterizează conversia.\n\nGreutate sub 85% din cea ideală, cu lanugo — Incorect: Pragul ponderal 85% este al anorexiei.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 328, Tulburări de personalitate — Antisocială (pagini PDF: 106).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    328
   ],
   "pdfPages": [
    106
   ],
   "section": "Tulburări de personalitate — Antisocială"
  },
  "learningObjective": "Aplicarea pragurilor de 18 ani (diagnostic) și 15 ani (conduită prealabilă).",
  "optionRationales": [
   "Vârsta >18 ani cu conduită înainte de 15 ani este din tabel.",
   "Debutul tardiv fără conduită nu îndeplinește criteriul.",
   "Simptomele negative țin de schizofrenie.",
   "La belle indifférence caracterizează conversia.",
   "Pragul ponderal 85% este al anorexiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pragurile 15 și 18 ani sunt ușor de inversat; distractorii importă semne din conversie și anorexie."
  },
  "textbookExpressions": [
   ">18 ani",
   "15 ani"
  ]
 },
 {
  "id": "psihiatrie-adv-016",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Intoxicația și sevrajul alcoolic:",
  "options": [
   "Intoxicația include scăderea inhibiției, vorbire neclară și afectarea coordonării",
   "Sevrajul poate include delirium tremens (convulsii, stare confuzională) și halucinații tactile",
   "Naltrexona reduce stările de nevoie imperioasă; disulfiramul produce greață dacă se consumă alcool",
   "Benzodiazepinele previn delirium-ul tremens în cursul sevrajului",
   "Antidotul specific al intoxicației este flumazenilul, ca în supradoza de benzodiazepine"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Intoxicația include scăderea inhibiției, vorbire neclară și afectarea coordonării — Corect: Semnele de intoxicație sunt din tabel.\n\nSevrajul poate include delirium tremens (convulsii, stare confuzională) și halucinații tactile — Corect: DT și halucinațiile tactile sunt la sevraj.\n\nNaltrexona reduce stările de nevoie imperioasă; disulfiramul produce greață dacă se consumă alcool — Corect: Naltrexona și disulfiramul sunt tratamentul citat.\n\nBenzodiazepinele previn delirium-ul tremens în cursul sevrajului — Corect: Benzodiazepinele previn DT.\n\nAntidotul specific al intoxicației este flumazenilul, ca în supradoza de benzodiazepine — Incorect: Flumazenilul este antagonistul benzodiazepinelor, nu al alcoolului.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 329, Abuzul de substanțe — Alcoolul (pagini PDF: 107).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    329
   ],
   "pdfPages": [
    107
   ],
   "section": "Abuzul de substanțe — Alcoolul"
  },
  "learningObjective": "Corelarea DT și a halucinațiilor tactile cu naltrexonă, disulfiram și benzodiazepinele de sevraj.",
  "optionRationales": [
   "Semnele de intoxicație sunt din tabel.",
   "DT și halucinațiile tactile sunt la sevraj.",
   "Naltrexona și disulfiramul sunt tratamentul citat.",
   "Benzodiazepinele previn DT.",
   "Flumazenilul este antagonistul benzodiazepinelor, nu al alcoolului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul aplică antidotul benzodiazepinelor asupra alcoolului, o confuzie de sevraj."
  },
  "textbookExpressions": [
   "delirium",
   "disulfiramul"
  ]
 },
 {
  "id": "psihiatrie-adv-017",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea de anxietate socială:",
  "options": [
   "β-blocantele pot fi folosite în cazurile ușoare pentru a preveni tahicardia",
   "SSRI sunt frecvent eficace în reducerea anxietății sociale",
   "Este identică fobiei specifice de animale, fără componentă evaluativă",
   "Se tratează de primă linie cu lithium, ca mania",
   "Diagnosticul cere simptome negative și dezorganizare peste 6 luni"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "β-blocantele pot fi folosite în cazurile ușoare pentru a preveni tahicardia — Corect: β-blocantele pentru tahicardie în situații anxiogene sunt citate.\n\nSSRI sunt frecvent eficace în reducerea anxietății sociale — Corect: SSRI sunt descrise ca frecvent eficace.\n\nEste identică fobiei specifice de animale, fără componentă evaluativă — Incorect: Fobia socială ține de evaluarea celorlalți, nu de un obiect anume.\n\nSe tratează de primă linie cu lithium, ca mania — Incorect: Litiul este al maniei.\n\nDiagnosticul cere simptome negative și dezorganizare peste 6 luni — Incorect: Criteriul de 6 luni cu simptome negative este al schizofreniei.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 324, Tulburări anxioase — Fobia socială (pagini PDF: 102).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    324
   ],
   "pdfPages": [
    102
   ],
   "section": "Tulburări anxioase — Fobia socială"
  },
  "learningObjective": "Recunoașterea β-blocantelor situaționale și a SSRI, distinct de fobia specifică și de schizofrenie.",
  "optionRationales": [
   "β-blocantele pentru tahicardie în situații anxiogene sunt citate.",
   "SSRI sunt descrise ca frecvent eficace.",
   "Fobia socială ține de evaluarea celorlalți, nu de un obiect anume.",
   "Litiul este al maniei.",
   "Criteriul de 6 luni cu simptome negative este al schizofreniei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută litiul și criteriile schizofreniei asupra fobiei sociale."
  },
  "textbookExpressions": [
   "P-blocantele",
   "SSRI"
  ]
 },
 {
  "id": "psihiatrie-adv-018",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "În tulburarea dismorfică corporală, textul recomandă:",
  "options": [
   "Evitarea efectuării operațiilor inutile",
   "Enucleerea de primă intenție, ca în retinoblastom",
   "Ham Pavlik sub 6 luni",
   "Fototerapia ca în depresia sezonieră",
   "Clozapina ca primă linie, înaintea psihoterapiei"
  ],
  "correct": [
   0
  ],
  "explanation": "Evitarea efectuării operațiilor inutile — Corect: „De evitat efectuarea operațiilor inutile” este explicit.\n\nEnucleerea de primă intenție, ca în retinoblastom — Incorect: Enucleerea este a retinoblastomului.\n\nHam Pavlik sub 6 luni — Incorect: Pavlik este al displaziei de șold.\n\nFototerapia ca în depresia sezonieră — Incorect: Fototerapia este a depresiei sezoniere.\n\nClozapina ca primă linie, înaintea psihoterapiei — Incorect: Clozapina este rezervată psihozei refractare.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 325, Tulburări înrudite TOC — Dismorfia corporală (pagini PDF: 103).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    325
   ],
   "pdfPages": [
    103
   ],
   "section": "Tulburări înrudite TOC — Dismorfia corporală"
  },
  "learningObjective": "Recunoașterea recomandării de a evita chirurgia estetică inutilă.",
  "optionRationales": [
   "„De evitat efectuarea operațiilor inutile” este explicit.",
   "Enucleerea este a retinoblastomului.",
   "Pavlik este al displaziei de șold.",
   "Fototerapia este a depresiei sezoniere.",
   "Clozapina este rezervată psihozei refractare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pacientul cere adesea chirurgie; textul o interzice ca tratament al distorsiunii perceptuale."
  },
  "textbookExpressions": [
   "operaţiilor inutile",
   "dermatolog"
  ]
 },
 {
  "id": "psihiatrie-adv-019",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea de personalitate borderline:",
  "options": [
   "Include relații instabile, frică de abandon, impulsivitate și gândire de tip „alb și negru”",
   "Este mai frecventă la femei",
   "Tratamentul combină psihoterapie extensivă cu doze mici de antipsihotice, SSRI sau stabilizatori",
   "Cere vârsta peste 18 ani și tulburare de conduită înainte de 15 ani",
   "Face parte din grupul A, alături de paranoid"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Include relații instabile, frică de abandon, impulsivitate și gândire de tip „alb și negru” — Corect: Instabilitatea, abandonul și gândirea alb-negru sunt din tabel.\n\nEste mai frecventă la femei — Corect: Predominanța la femei este citată.\n\nTratamentul combină psihoterapie extensivă cu doze mici de antipsihotice, SSRI sau stabilizatori — Corect: Psihoterapia plus doze mici de antipsihotice/SSRI/stabilizatori este schema.\n\nCere vârsta peste 18 ani și tulburare de conduită înainte de 15 ani — Incorect: Criteriile 18/15 ani definesc forma antisocială.\n\nFace parte din grupul A, alături de paranoid — Incorect: Borderline este în grupul B, nu A.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 328, Tulburări de personalitate — Borderline (pagini PDF: 106).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    328
   ],
   "pdfPages": [
    106
   ],
   "section": "Tulburări de personalitate — Borderline"
  },
  "learningObjective": "Recunoașterea splitting-ului, a predominanței feminine și a tratamentului combinat, distinct de antisocială.",
  "optionRationales": [
   "Instabilitatea, abandonul și gândirea alb-negru sunt din tabel.",
   "Predominanța la femei este citată.",
   "Psihoterapia plus doze mici de antipsihotice/SSRI/stabilizatori este schema.",
   "Criteriile 18/15 ani definesc forma antisocială.",
   "Borderline este în grupul B, nu A."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută criteriile antisocialei și clusterul A asupra borderline, mai frecventă la femei."
  },
  "textbookExpressions": [
   "alb şi negru",
   "femei"
  ]
 },
 {
  "id": "psihiatrie-adv-020",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Chestionarul CAGE pentru depistarea abuzului de alcool cuprinde:",
  "options": [
   "Dorința de a reduce consumul (Cut down)",
   "Frustrarea provocată de sugestia altora de a opri consumul (Annoyance)",
   "Vinovăția legată de consum (Guilt) și utilizarea dimineața la trezire (Eye-opener)",
   "Numărul de ticuri vocale pe zi, ca în Tourette",
   "Scorul Bishop al colului uterin"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Dorința de a reduce consumul (Cut down) — Corect: Cut down este primul item.\n\nFrustrarea provocată de sugestia altora de a opri consumul (Annoyance) — Corect: Annoyance este al doilea.\n\nVinovăția legată de consum (Guilt) și utilizarea dimineața la trezire (Eye-opener) — Corect: Guilt și Eye-opener completează acronimul.\n\nNumărul de ticuri vocale pe zi, ca în Tourette — Incorect: Ticurile vocale țin de Tourette.\n\nScorul Bishop al colului uterin — Incorect: Bishop este scor obstetrical.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 329, Abuzul de substanțe — Screening CAGE (pagini PDF: 107).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    329
   ],
   "pdfPages": [
    107
   ],
   "section": "Abuzul de substanțe — Screening CAGE"
  },
  "learningObjective": "Reconstituirea celor patru itemi CAGE, distinct de alte scoruri clinice.",
  "optionRationales": [
   "Cut down este primul item.",
   "Annoyance este al doilea.",
   "Guilt și Eye-opener completează acronimul.",
   "Ticurile vocale țin de Tourette.",
   "Bishop este scor obstetrical."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Acronimul CAGE este ușor de înlocuit cu alte scale memorabile (ticuri, Bishop)."
  },
  "textbookExpressions": [
   "CAGE",
   "Eye￾opener"
  ]
 },
 {
  "id": "psihiatrie-adv-021",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "Intoxicația cu opioizi se caracterizează prin:",
  "options": [
   "Mioză, scăderea vigilității și depresie respiratorie",
   "Midriază, tahicardie și HTA, ca amfetaminele",
   "Nistagmus vertical și orizontal, ca PCP",
   "Conjunctive injectate și apetit crescut, ca marijuana",
   "Halucinații cu flashback-uri, ca LSD"
  ],
  "correct": [
   0
  ],
  "explanation": "Mioză, scăderea vigilității și depresie respiratorie — Corect: Mioza, vigilitatea scăzută și depresia respiratorie sunt din tabel.\n\nMidriază, tahicardie și HTA, ca amfetaminele — Incorect: Midriaza cu tahicardie/HTA este a amfetaminelor.\n\nNistagmus vertical și orizontal, ca PCP — Incorect: Nistagmusul bidirecțional este al PCP.\n\nConjunctive injectate și apetit crescut, ca marijuana — Incorect: Conjunctivele injectate și apetitul țin de marijuana.\n\nHalucinații cu flashback-uri, ca LSD — Incorect: Flashback-urile sunt ale halucinogenelor.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 330, Abuzul de substanțe — Opioizi (pagini PDF: 108).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    330
   ],
   "pdfPages": [
    108
   ],
   "section": "Abuzul de substanțe — Opioizi"
  },
  "learningObjective": "Identificarea triadei mioză–sedare–depresie respiratorie, distinct de simpatomimetice și PCP.",
  "optionRationales": [
   "Mioza, vigilitatea scăzută și depresia respiratorie sunt din tabel.",
   "Midriaza cu tahicardie/HTA este a amfetaminelor.",
   "Nistagmusul bidirecțional este al PCP.",
   "Conjunctivele injectate și apetitul țin de marijuana.",
   "Flashback-urile sunt ale halucinogenelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fiecare distractor este semnul-cheie al altei substanțe din același tabel."
  },
  "textbookExpressions": [
   "Mioză",
   "depresie respiratorie"
  ]
 },
 {
  "id": "psihiatrie-adv-022",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "Etapele schimbării la pacienții care își modifică obiceiurile de consum, conform textului, încep de la:",
  "options": [
   "Precontemplare și contemplare, urmate de pregătire, acțiune și menținere",
   "Enucleere, apoi radioterapie",
   "Ham Pavlik, apoi reducție deschisă",
   "Doar histerectomie, fără consiliere",
   "Inducție cu oxitocină, apoi stadiul 3 al travaliului"
  ],
  "correct": [
   0
  ],
  "explanation": "Precontemplare și contemplare, urmate de pregătire, acțiune și menținere — Corect: Textul enumeră această succesiune de etape ale schimbării.\n\nEnucleere, apoi radioterapie — Incorect: Enucleerea este tratamentul retinoblastomului.\n\nHam Pavlik, apoi reducție deschisă — Incorect: Pavlik este al DDH.\n\nDoar histerectomie, fără consiliere — Incorect: Histerectomia nu este etapa schimbării comportamentale.\n\nInducție cu oxitocină, apoi stadiul 3 al travaliului — Incorect: Inducția obstetricală nu descrie stadiile motivaționale.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 330, Abuzul de substanțe — Etapele schimbării (pagini PDF: 108).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    330
   ],
   "pdfPages": [
    108
   ],
   "section": "Abuzul de substanțe — Etapele schimbării"
  },
  "learningObjective": "Identificarea secvenței precontemplare–contemplare–pregătire–acțiune–menținere.",
  "optionRationales": [
   "Textul enumeră această succesiune de etape ale schimbării.",
   "Enucleerea este tratamentul retinoblastomului.",
   "Pavlik este al DDH.",
   "Histerectomia nu este etapa schimbării comportamentale.",
   "Inducția obstetricală nu descrie stadiile motivaționale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt secvențe terapeutice reale din alte capitole Sinopsis, nu modelul schimbării."
  },
  "textbookExpressions": [
   "etapele schimbării",
   "contemplare"
  ]
 },
 {
  "id": "psihiatrie-adv-023",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "Identificați afirmația corectă privind sindromul neuroleptic malign, conform tabelului 14-2:",
  "options": [
   "Este declanșat de antipsihotice care blochează D2; debutul este progresiv mai degrabă decât abrupt, cu rigiditate de tip plastic „țeavă de plumb” și reflexe scăzute",
   "Este declanșat de SSRI, SNRI, ADT sau IMAO, cu mioclonii și hipertonii la extremitățile inferioare, și se tratează cu ciproheptadină",
   "Asociază piele uscată, midriază „orb ca liliacul” și se tratează cu fizostigmină",
   "Este declanșat de anestezice volatile și succinil-colină, cu rigiditate de tip „rigor mortis”",
   "Evoluția este rapid rezolutivă, identică sindromului serotoninergic"
  ],
  "correct": [
   0
  ],
  "explanation": "Este declanșat de antipsihotice care blochează D2; debutul este progresiv mai degrabă decât abrupt, cu rigiditate de tip plastic „țeavă de plumb” și reflexe scăzute — Corect: Tabelul atribuie SNM blocanților D2, debutului progresiv, țevii de plumb și reflexelor scăzute.\n\nEste declanșat de SSRI, SNRI, ADT sau IMAO, cu mioclonii și hipertonii la extremitățile inferioare, și se tratează cu ciproheptadină — Incorect: Aceasta este descrierea sindromului serotoninergic.\n\nAsociază piele uscată, midriază „orb ca liliacul” și se tratează cu fizostigmină — Incorect: Pielea uscată și fizostigmina definesc sindromul toxic anticolinergic.\n\nEste declanșat de anestezice volatile și succinil-colină, cu rigiditate de tip „rigor mortis” — Incorect: Anestezicele volatile, succinil-colina și dantrolenul definesc hipertermia malignă.\n\nEvoluția este rapid rezolutivă, identică sindromului serotoninergic — Incorect: Evoluția prelungită (zile până la săptămâni) caracterizează SNM, nu rezoluția rapidă.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 320, Tulburări psihotice — Sindromul neuroleptic malign (pagini PDF: 98).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    320
   ],
   "pdfPages": [
    98
   ],
   "section": "Tulburări psihotice — Sindromul neuroleptic malign"
  },
  "learningObjective": "Diferențierea SNM de sindromul serotoninergic, de intoxicația anticolinergică și de hipertermia malignă.",
  "optionRationales": [
   "Tabelul atribuie SNM blocanților D2, debutului progresiv, țevii de plumb și reflexelor scăzute.",
   "Aceasta este descrierea sindromului serotoninergic.",
   "Pielea uscată și fizostigmina definesc sindromul toxic anticolinergic.",
   "Anestezicele volatile, succinil-colina și dantrolenul definesc hipertermia malignă.",
   "Evoluția prelungită (zile până la săptămâni) caracterizează SNM, nu rezoluția rapidă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fiecare distractor este un rând real din tabelul 14-2, permutat pe SNM."
  },
  "textbookExpressions": [
   "ţeavă de plumb",
   "Ciproheptadină"
  ]
 },
 {
  "id": "psihiatrie-adv-024",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la clasele de antidepresive din tabelul 14-3:",
  "options": [
   "Supradozarea ADT de 5 ori doza terapeutică poate fi fatală, prin alungirea intervalului QTc",
   "Consumul de alimente cu tiramină (brânză, carne maturată, bere) în timpul tratamentului cu IMAO poate provoca crize hipertensive",
   "Bupropionul nu produce disfuncție sexuală, dar scade pragul convulsivant",
   "SSRI își ating efectul în 24 de ore, fără risc de sindrom serotoninergic",
   "Mirtazapina este rezervată depresiei cu oboseală și ADHD, identic bupropionului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Supradozarea ADT de 5 ori doza terapeutică poate fi fatală, prin alungirea intervalului QTc — Corect: Fatalitatea la 5× doză prin QTc este din tabel.\n\nConsumul de alimente cu tiramină (brânză, carne maturată, bere) în timpul tratamentului cu IMAO poate provoca crize hipertensive — Corect: Restricția de tiramină la IMAO este explicită.\n\nBupropionul nu produce disfuncție sexuală, dar scade pragul convulsivant — Corect: Absența disfuncției sexuale și scăderea pragului convulsivant sunt ale bupropionului.\n\nSSRI își ating efectul în 24 de ore, fără risc de sindrom serotoninergic — Incorect: SSRI cer 3-4 săptămâni și au risc de sindrom serotoninergic.\n\nMirtazapina este rezervată depresiei cu oboseală și ADHD, identic bupropionului — Incorect: Mirtazapina este indicată în depresia cu insomnie și/sau anorexie, nu în ADHD.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 322, Tulburări afective — Antidepresive (pagini PDF: 100).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    322
   ],
   "pdfPages": [
    100
   ],
   "section": "Tulburări afective — Antidepresive"
  },
  "learningObjective": "Asocierea toxicității QTc a ADT, a crizei hipertensive la IMAO și a profilului sexual/convulsivant al bupropionului.",
  "optionRationales": [
   "Fatalitatea la 5× doză prin QTc este din tabel.",
   "Restricția de tiramină la IMAO este explicită.",
   "Absența disfuncției sexuale și scăderea pragului convulsivant sunt ale bupropionului.",
   "SSRI cer 3-4 săptămâni și au risc de sindrom serotoninergic.",
   "Mirtazapina este indicată în depresia cu insomnie și/sau anorexie, nu în ADHD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii comprimă latența SSRI și permută indicația mirtazapinei cu cea a bupropionului."
  },
  "textbookExpressions": [
   "intervalului QTc",
   "tiramină"
  ]
 },
 {
  "id": "psihiatrie-adv-025",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Episodul maniacal, spre deosebire de cel hipomaniacal:",
  "options": [
   "Are dispoziție elevată, expansivă sau iritabilă cu durată de cel puțin o săptămână și afectează semnificativ funcționarea",
   "Episodul hipomaniacal durează cel puțin 4 zile și nu produce o afectare semnificativă a capacității de funcționare",
   "Ambele cer o durată minimă de 2 ani, ca tulburarea depresivă persistentă",
   "Hipomania durează cel puțin o săptămână și impune internare de principiu",
   "Mania se definește prin atacuri de maximum 30 de minute, ca panica"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Are dispoziție elevată, expansivă sau iritabilă cu durată de cel puțin o săptămână și afectează semnificativ funcționarea — Corect: Durata de o săptămână cu disfuncție definește mania.\n\nEpisodul hipomaniacal durează cel puțin 4 zile și nu produce o afectare semnificativă a capacității de funcționare — Corect: Cele 4 zile fără disfuncție semnificativă definesc hipomania.\n\nAmbele cer o durată minimă de 2 ani, ca tulburarea depresivă persistentă — Incorect: Pragul de 2 ani este al distimiei/ciclotimiei.\n\nHipomania durează cel puțin o săptămână și impune internare de principiu — Incorect: O săptămână cu disfuncție este mania, nu hipomania.\n\nMania se definește prin atacuri de maximum 30 de minute, ca panica — Incorect: Plafonul de 30 de minute definește atacul de panică.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 322, Tulburări afective — Manie și hipomanie (pagini PDF: 100).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    322
   ],
   "pdfPages": [
    100
   ],
   "section": "Tulburări afective — Manie și hipomanie"
  },
  "learningObjective": "Aplicarea pragurilor de o săptămână versus 4 zile și a prezenței versus absenței disfuncției.",
  "optionRationales": [
   "Durata de o săptămână cu disfuncție definește mania.",
   "Cele 4 zile fără disfuncție semnificativă definesc hipomania.",
   "Pragul de 2 ani este al distimiei/ciclotimiei.",
   "O săptămână cu disfuncție este mania, nu hipomania.",
   "Plafonul de 30 de minute definește atacul de panică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută pragul de 2 ani al distimiei și durata atacului de panică pe mania/hipomanie."
  },
  "textbookExpressions": [
   "cel puţin 4 zile",
   "episod maniacal"
  ]
 },
 {
  "id": "psihiatrie-adv-026",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "Tulburarea bipolară de tip I se definește prin:",
  "options": [
   "Cel puțin un episod maniacal; episoadele de depresie majoră sunt frecvente, dar nu sunt necesare pentru diagnostic",
   "Cel puțin un episod hipomaniacal și cel puțin un episod de depresie majoră, fără manie",
   "Cicluri rapide de simptome maniacale și depresive ușoare peste 2 ani, fără perioadă de dispoziție normală peste 2 luni",
   "Un singur episod depresiv de 2 săptămâni, fără manie sau hipomanie",
   "Atacuri de panică recurente de maximum 30 de minute"
  ],
  "correct": [
   0
  ],
  "explanation": "Cel puțin un episod maniacal; episoadele de depresie majoră sunt frecvente, dar nu sunt necesare pentru diagnostic — Corect: Definiția tipului I este explicită.\n\nCel puțin un episod hipomaniacal și cel puțin un episod de depresie majoră, fără manie — Incorect: Aceasta este definiția tipului II.\n\nCicluri rapide de simptome maniacale și depresive ușoare peste 2 ani, fără perioadă de dispoziție normală peste 2 luni — Incorect: Aceasta este ciclotimia, de pe pagina următoare.\n\nUn singur episod depresiv de 2 săptămâni, fără manie sau hipomanie — Incorect: Un episod depresiv izolat definește TDM, nu bipolarul I.\n\nAtacuri de panică recurente de maximum 30 de minute — Incorect: Atacurile de 30 de minute definesc panica.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 322, 323, Tulburări afective — Bipolar tip I versus II (pagini PDF: 100, 101).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    322,
    323
   ],
   "pdfPages": [
    100,
    101
   ],
   "section": "Tulburări afective — Bipolar tip I versus II"
  },
  "learningObjective": "Separarea tipului I (manie necesară, depresia nu) de tipul II (hipomanie plus depresie).",
  "optionRationales": [
   "Definiția tipului I este explicită.",
   "Aceasta este definiția tipului II.",
   "Aceasta este ciclotimia, de pe pagina următoare.",
   "Un episod depresiv izolat definește TDM, nu bipolarul I.",
   "Atacurile de 30 de minute definesc panica."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt definițiile tipului II, ale ciclotimiei, ale TDM și ale panicii, alăturate în capitol."
  },
  "textbookExpressions": [
   "Tipul I",
   "episod maniacal"
  ]
 },
 {
  "id": "psihiatrie-adv-027",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea ciclotimică:",
  "options": [
   "Alternă simptome maniacale ușoare și depresive ușoare, cu durată peste 2 ani, fără perioadă de dispoziție normală peste 2 luni",
   "Simptomele afectează funcționarea, dar nu întrunesc criteriile pentru depresie majoră, manie sau hipomanie",
   "Cere cel puțin un episod maniacal complet, ca bipolarul I",
   "Se tratează de primă intenție cu flumazenil, ca supradoza de benzodiazepine",
   "Durata minimă este de 4 zile, identică hipomaniei"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Alternă simptome maniacale ușoare și depresive ușoare, cu durată peste 2 ani, fără perioadă de dispoziție normală peste 2 luni — Corect: Ciclurile ușoare >2 ani fără interval normal >2 luni sunt explicite.\n\nSimptomele afectează funcționarea, dar nu întrunesc criteriile pentru depresie majoră, manie sau hipomanie — Corect: Neîndeplinirea criteriilor complete, cu afectare funcțională, este citată.\n\nCere cel puțin un episod maniacal complet, ca bipolarul I — Incorect: Episodul maniacal complet definește bipolarul I, nu ciclotimia.\n\nSe tratează de primă intenție cu flumazenil, ca supradoza de benzodiazepine — Incorect: Flumazenilul este antagonistul benzodiazepinelor.\n\nDurata minimă este de 4 zile, identică hipomaniei — Incorect: Cele 4 zile definesc hipomania.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 323, Tulburări afective — Ciclotimia (pagini PDF: 101).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    323
   ],
   "pdfPages": [
    101
   ],
   "section": "Tulburări afective — Ciclotimia"
  },
  "learningObjective": "Aplicarea ferestrei de peste 2 ani și a absenței criteriilor complete de manie/depresie.",
  "optionRationales": [
   "Ciclurile ușoare >2 ani fără interval normal >2 luni sunt explicite.",
   "Neîndeplinirea criteriilor complete, cu afectare funcțională, este citată.",
   "Episodul maniacal complet definește bipolarul I, nu ciclotimia.",
   "Flumazenilul este antagonistul benzodiazepinelor.",
   "Cele 4 zile definesc hipomania."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii ridică ciclotimia la criteriul de manie și importă flumazenilul de pe pagina de anxiolitice."
  },
  "textbookExpressions": [
   ">2 ani",
   ">2 luni"
  ]
 },
 {
  "id": "psihiatrie-adv-028",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea de panică:",
  "options": [
   "Atacurile pot dura până la maximum 30 de minute, cu anxietate extremă, durere toracică, dispnee, palpitații și frică de moarte",
   "Diagnosticul cere episoade recurente plus frică persistentă de recurență sau modificare maladaptativă a comportamentului",
   "Alprazolamul, cu debut rapid și timp de înjumătățire scurt, este util mai ales în tratamentul atacurilor de panică",
   "Buspirona este antidotul supradozei, ca flumazenilul",
   "Atacul izolat de 6 luni, fără frică de recurență, definește tulburarea"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Atacurile pot dura până la maximum 30 de minute, cu anxietate extremă, durere toracică, dispnee, palpitații și frică de moarte — Corect: Plafonul de 30 de minute și simptomele sunt explicite.\n\nDiagnosticul cere episoade recurente plus frică persistentă de recurență sau modificare maladaptativă a comportamentului — Corect: Recurența plus frica sau evitarea maladaptativă sunt criteriile.\n\nAlprazolamul, cu debut rapid și timp de înjumătățire scurt, este util mai ales în tratamentul atacurilor de panică — Corect: Nota din tabel despre alprazolam este explicită.\n\nBuspirona este antidotul supradozei, ca flumazenilul — Incorect: Buspirona este anxiolitic; antidotul benzodiazepinelor este flumazenilul.\n\nAtacul izolat de 6 luni, fără frică de recurență, definește tulburarea — Incorect: Fără frică de recurență nu se întrunește diagnosticul; 6 luni este fereastra GAD.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 323, Tulburări anxioase — Panica (pagini PDF: 101).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    323
   ],
   "pdfPages": [
    101
   ],
   "section": "Tulburări anxioase — Panica"
  },
  "learningObjective": "Corelarea duratei de 30 de minute, a criteriului de recurență/evitare și a alprazolamului.",
  "optionRationales": [
   "Plafonul de 30 de minute și simptomele sunt explicite.",
   "Recurența plus frica sau evitarea maladaptativă sunt criteriile.",
   "Nota din tabel despre alprazolam este explicită.",
   "Buspirona este anxiolitic; antidotul benzodiazepinelor este flumazenilul.",
   "Fără frică de recurență nu se întrunește diagnosticul; 6 luni este fereastra GAD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii substituie flumazenilul cu buspirona și mută pragul GAD de 6 luni pe panică."
  },
  "textbookExpressions": [
   "30 de minute",
   "Alprazolamul"
  ]
 },
 {
  "id": "psihiatrie-adv-029",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Fobia specifică:",
  "options": [
   "Apare în mod tipic în copilărie și constă în frică de un obiect, activitate sau situație anume, cu evitare",
   "Confruntarea cu obiectul fricii poate induce atac de panică; unii pacienți au reacție vasovagală (leșin)",
   "Tratamentul implică desensibilizare sistematică prin expuneri repetate, tehnici de relaxare, hipnoză sau instruire",
   "β-blocantele sunt prima linie, ca în anxietatea socială ușoară",
   "Diagnosticul cere trei simptome de GAD peste 6 luni, fără obiect fobic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Apare în mod tipic în copilărie și constă în frică de un obiect, activitate sau situație anume, cu evitare — Corect: Debutul din copilărie și evitarea obiectului sunt explicite.\n\nConfruntarea cu obiectul fricii poate induce atac de panică; unii pacienți au reacție vasovagală (leșin) — Corect: Atacul de panică la confruntare și leșinul vasovagal sunt citați.\n\nTratamentul implică desensibilizare sistematică prin expuneri repetate, tehnici de relaxare, hipnoză sau instruire — Corect: Desensibilizarea sistematică este tratamentul citat.\n\nβ-blocantele sunt prima linie, ca în anxietatea socială ușoară — Incorect: β-blocantele sunt menționate la anxietatea socială ușoară, nu ca primă linie aici.\n\nDiagnosticul cere trei simptome de GAD peste 6 luni, fără obiect fobic — Incorect: Cele trei simptome peste 6 luni definesc GAD.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 324, Tulburări anxioase — Fobia specifică (pagini PDF: 102).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    324
   ],
   "pdfPages": [
    102
   ],
   "section": "Tulburări anxioase — Fobia specifică"
  },
  "learningObjective": "Recunoașterea debutului din copilărie, a leșinului vasovagal și a desensibilizării, distinct de fobia socială.",
  "optionRationales": [
   "Debutul din copilărie și evitarea obiectului sunt explicite.",
   "Atacul de panică la confruntare și leșinul vasovagal sunt citați.",
   "Desensibilizarea sistematică este tratamentul citat.",
   "β-blocantele sunt menționate la anxietatea socială ușoară, nu ca primă linie aici.",
   "Cele trei simptome peste 6 luni definesc GAD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă β-blocantul fobiei sociale și criteriile GAD asupra fobiei specifice."
  },
  "textbookExpressions": [
   "desensibilizare sistematică",
   "copilărie"
  ]
 },
 {
  "id": "psihiatrie-adv-030",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "Tulburările comorbide asociate TOC, conform textului, includ:",
  "options": [
   "Tulburări de dispoziție afectivă în circa 70% din cazuri, tulburare de personalitate obsesiv-compulsivă și ticuri în circa 30%",
   "Schizofrenie rezistentă, care impune clozapină de primă intenție",
   "Greutate sub 85% din cea ideală, cu lanugo",
   "Delirium tremens și halucinații tactile",
   "Anomalia Ebstein, ca la litiu"
  ],
  "correct": [
   0
  ],
  "explanation": "Tulburări de dispoziție afectivă în circa 70% din cazuri, tulburare de personalitate obsesiv-compulsivă și ticuri în circa 30% — Corect: Cifrele ~70% și ~30% sunt explicite.\n\nSchizofrenie rezistentă, care impune clozapină de primă intenție — Incorect: Clozapina este a psihozei refractare, nu a TOC.\n\nGreutate sub 85% din cea ideală, cu lanugo — Incorect: Pragul ponderal 85% și lanugo sunt ale anorexiei.\n\nDelirium tremens și halucinații tactile — Incorect: Delirium tremens ține de sevrajul alcoolic.\n\nAnomalia Ebstein, ca la litiu — Incorect: Ebstein este al litiului.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 324, TOC — Comorbidități (pagini PDF: 102).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    324
   ],
   "pdfPages": [
    102
   ],
   "section": "TOC — Comorbidități"
  },
  "learningObjective": "Memorarea ponderilor de circa 70% (dispoziție) și circa 30% (ticuri/TPOC).",
  "optionRationales": [
   "Cifrele ~70% și ~30% sunt explicite.",
   "Clozapina este a psihozei refractare, nu a TOC.",
   "Pragul ponderal 85% și lanugo sunt ale anorexiei.",
   "Delirium tremens ține de sevrajul alcoolic.",
   "Ebstein este al litiului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă comorbidități și tratamente din schizofrenie, anorexie, alcool și litiu."
  },
  "textbookExpressions": [
   "dispoziţie afectivă",
   "ticurile"
  ]
 },
 {
  "id": "psihiatrie-adv-031",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea de adaptare:",
  "options": [
   "Simptomele apar în primele 3 luni de la evenimentul stresant",
   "Simptomele încetează după 6 luni de la dispariția evenimentului stresant",
   "Poate fi descrisă cu dispoziție depresivă, cu anxietate, cu ambele sau cu tulburări de conduită",
   "Debutul și remisiunea se înscriu ambele în prima lună, definind PTSD",
   "Durata minimă a simptomelor este de 2 ani, ca distimia"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Simptomele apar în primele 3 luni de la evenimentul stresant — Corect: Debutul în 3 luni este explicit, inclusiv în notă.\n\nSimptomele încetează după 6 luni de la dispariția evenimentului stresant — Corect: Remisiunea în 6 luni de la dispariția stresorului este citată.\n\nPoate fi descrisă cu dispoziție depresivă, cu anxietate, cu ambele sau cu tulburări de conduită — Corect: Subtipurile depresie/anxietate/conduită sunt enumerate.\n\nDebutul și remisiunea se înscriu ambele în prima lună, definind PTSD — Incorect: Fereastra de o lună definește stresul acut; PTSD cere cel puțin o lună, nu remisiune în prima lună.\n\nDurata minimă a simptomelor este de 2 ani, ca distimia — Incorect: Pragul de 2 ani este al tulburării depresive persistente.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 325, Tulburări legate de stres — Adaptarea (pagini PDF: 103).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    325
   ],
   "pdfPages": [
    103
   ],
   "section": "Tulburări legate de stres — Adaptarea"
  },
  "learningObjective": "Aplicarea ferestrelor 3 luni (debut) și 6 luni (remisiune), distinct de stresul acut și de PTSD.",
  "optionRationales": [
   "Debutul în 3 luni este explicit, inclusiv în notă.",
   "Remisiunea în 6 luni de la dispariția stresorului este citată.",
   "Subtipurile depresie/anxietate/conduită sunt enumerate.",
   "Fereastra de o lună definește stresul acut; PTSD cere cel puțin o lună, nu remisiune în prima lună.",
   "Pragul de 2 ani este al tulburării depresive persistente."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii comprimă adaptarea pe fereastra de o lună a stresului acut sau o lungesc la distimie."
  },
  "textbookExpressions": [
   "primele 3 luni",
   "6 luni"
  ]
 },
 {
  "id": "psihiatrie-adv-032",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "În PTSD, textul menționează că prazosinul:",
  "options": [
   "Este un antagonist al receptorilor α-1, util în ameliorarea coșmarurilor și a stării de alertă",
   "Poate fi asociat terapiei cognitiv-comportamentale, singure sau cu SSRI/SNRI",
   "Înlocuiește expunerea la traumă ca unic criteriu diagnostic",
   "Este antidotul supradozei de benzodiazepine",
   "Se indică doar în fobia specifică din copilărie"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este un antagonist al receptorilor α-1, util în ameliorarea coșmarurilor și a stării de alertă — Corect: Mecanismul α-1 și țintele (coșmaruri, alertă) sunt explicite.\n\nPoate fi asociat terapiei cognitiv-comportamentale, singure sau cu SSRI/SNRI — Corect: TCC ± SSRI/SNRI este cadrul terapeutic în care se înscrie.\n\nÎnlocuiește expunerea la traumă ca unic criteriu diagnostic — Incorect: Expunerea la traumă rămâne criteriul, nu un medicament.\n\nEste antidotul supradozei de benzodiazepine — Incorect: Antidotul benzodiazepinelor este flumazenilul.\n\nSe indică doar în fobia specifică din copilărie — Incorect: Fobia specifică se tratează prin desensibilizare, nu cu prazosin.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 326, Tulburări legate de traumă — Prazosinul (pagini PDF: 104).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    326
   ],
   "pdfPages": [
    104
   ],
   "section": "Tulburări legate de traumă — Prazosinul"
  },
  "learningObjective": "Identificarea prazosinului ca antagonist α-1 pentru coșmaruri și hipervigilență.",
  "optionRationales": [
   "Mecanismul α-1 și țintele (coșmaruri, alertă) sunt explicite.",
   "TCC ± SSRI/SNRI este cadrul terapeutic în care se înscrie.",
   "Expunerea la traumă rămâne criteriul, nu un medicament.",
   "Antidotul benzodiazepinelor este flumazenilul.",
   "Fobia specifică se tratează prin desensibilizare, nu cu prazosin."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă prazosinul în criteriu diagnostic sau în antidot/anxiolitic de fobie."
  },
  "textbookExpressions": [
   "Prazosin",
   "coşmarurilor"
  ]
 },
 {
  "id": "psihiatrie-adv-033",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Simularea premeditată și tulburările factice:",
  "options": [
   "Simularea (malingering) este prefăcarea bolii pentru un beneficiu (scutire de muncă sau școală, urmărire penală, narcotice) și este mai frecventă la bărbați",
   "În tulburările factice nu există un beneficiu evident sau un beneficiu secundar pentru pacient",
   "Sindromul Münchausen prin transfer, în care părinții fac copilul să pară bolnav, este considerat abuz și trebuie raportat",
   "Pacienții cu conversie sunt foarte afectați psihologic de simptome, identic celor cu simptome somatice",
   "La belle indifférence caracterizează simularea, nu conversia"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Simularea (malingering) este prefăcarea bolii pentru un beneficiu (scutire de muncă sau școală, urmărire penală, narcotice) și este mai frecventă la bărbați — Corect: Definiția, exemplele de beneficiu și predominanța masculină sunt din notă.\n\nÎn tulburările factice nu există un beneficiu evident sau un beneficiu secundar pentru pacient — Corect: Absența beneficiului secundar diferențiază facticele.\n\nSindromul Münchausen prin transfer, în care părinții fac copilul să pară bolnav, este considerat abuz și trebuie raportat — Corect: Münchausen by proxy ca abuz de raportat este din pasul următor.\n\nPacienții cu conversie sunt foarte afectați psihologic de simptome, identic celor cu simptome somatice — Incorect: Nota contrastează conversia (indiferență) cu simptomele somatice (afectare psihologică marcată).\n\nLa belle indifférence caracterizează simularea, nu conversia — Incorect: La belle indifférence caracterizează conversia.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 326, Tulburări somatice — Simulare versus factice (pagini PDF: 104).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    326
   ],
   "pdfPages": [
    104
   ],
   "section": "Tulburări somatice — Simulare versus factice"
  },
  "learningObjective": "Separarea malingering-ului (beneficiu secundar) de factice (fără beneficiu) și recunoașterea Münchausen by proxy ca abuz.",
  "optionRationales": [
   "Definiția, exemplele de beneficiu și predominanța masculină sunt din notă.",
   "Absența beneficiului secundar diferențiază facticele.",
   "Münchausen by proxy ca abuz de raportat este din pasul următor.",
   "Nota contrastează conversia (indiferență) cu simptomele somatice (afectare psihologică marcată).",
   "La belle indifférence caracterizează conversia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează indiferența conversiei cu afectarea din tulburarea cu simptome somatice."
  },
  "textbookExpressions": [
   "Simularea premeditată",
   "beneficiu secundar"
  ]
 },
 {
  "id": "psihiatrie-adv-034",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Anorexia nervosa, dincolo de criteriile diagnostice deja folosite în bancă:",
  "options": [
   "Are o rată de mortalitate pe 10 ani de 6%, prin complicațiile bolii sau suicid",
   "Sindromul de realimentare, prin comutarea metabolismului de la lipide spre glucide, asociază hipofosfatemie, hipomagneziemie și hipocalcemie",
   "Complicațiile realimentării includ colaps cardiovascular, rabdomioliză, confuzie și convulsii",
   "90% din cazuri sunt femei; osteoporoza poate fi prezentă",
   "Terapia farmacologică este superioară spitalizării și este de primă intenție"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Are o rată de mortalitate pe 10 ani de 6%, prin complicațiile bolii sau suicid — Corect: Cifra de 6% pe 10 ani este din notă.\n\nSindromul de realimentare, prin comutarea metabolismului de la lipide spre glucide, asociază hipofosfatemie, hipomagneziemie și hipocalcemie — Corect: Comutarea lipid–glucid și triada electrolitică sunt explicite.\n\nComplicațiile realimentării includ colaps cardiovascular, rabdomioliză, confuzie și convulsii — Corect: Colapsul, rabdomioliza, confuzia și convulsiile sunt complicațiile citate.\n\n90% din cazuri sunt femei; osteoporoza poate fi prezentă — Corect: 90% femei și osteoporoza sunt din textul clinic.\n\nTerapia farmacologică este superioară spitalizării și este de primă intenție — Incorect: Textul precizează că terapia farmacologică nu și-a dovedit utilitatea; spitalizarea este frecvent necesară.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 327, Tulburări alimentare — Anorexia: complicații (pagini PDF: 105).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    327
   ],
   "pdfPages": [
    105
   ],
   "section": "Tulburări alimentare — Anorexia: complicații"
  },
  "learningObjective": "Aplicarea mortalității de 6%, a triadei electrolitice a realimentării și a predominanței feminine.",
  "optionRationales": [
   "Cifra de 6% pe 10 ani este din notă.",
   "Comutarea lipid–glucid și triada electrolitică sunt explicite.",
   "Colapsul, rabdomioliza, confuzia și convulsiile sunt complicațiile citate.",
   "90% femei și osteoporoza sunt din textul clinic.",
   "Textul precizează că terapia farmacologică nu și-a dovedit utilitatea; spitalizarea este frecvent necesară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează ierarhia: textul neagă utilitatea farmacoterapiei și cere adesea spitalizare."
  },
  "textbookExpressions": [
   "6%",
   "hipofosfatemie"
  ]
 },
 {
  "id": "psihiatrie-adv-035",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "Medicația aprobată de FDA pentru bulimie, citată în text, este:",
  "options": [
   "Fluoxetina",
   "Litiul, ca în mania de întreținere",
   "Clozapina, ca în psihoza refractară",
   "Metadonă, ca în dependența de opioizi",
   "Prazosin, ca în coșmarurile din PTSD"
  ],
  "correct": [
   0
  ],
  "explanation": "Fluoxetina — Corect: Fluoxetina este numită explicit ca medicație aprobată de FDA.\n\nLitiul, ca în mania de întreținere — Incorect: Litiul este stabilizatorul maniei.\n\nClozapina, ca în psihoza refractară — Incorect: Clozapina este a psihozei refractare.\n\nMetadonă, ca în dependența de opioizi — Incorect: Metadona este a opioizilor.\n\nPrazosin, ca în coșmarurile din PTSD — Incorect: Prazosinul este al coșmarurilor din PTSD.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 327, Tulburări alimentare — Bulimia (pagini PDF: 105).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    327
   ],
   "pdfPages": [
    105
   ],
   "section": "Tulburări alimentare — Bulimia"
  },
  "learningObjective": "Identificarea fluoxetinei ca unicul agent FDA citat pentru bulimie.",
  "optionRationales": [
   "Fluoxetina este numită explicit ca medicație aprobată de FDA.",
   "Litiul este stabilizatorul maniei.",
   "Clozapina este a psihozei refractare.",
   "Metadona este a opioizilor.",
   "Prazosinul este al coșmarurilor din PTSD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fiecare distractor este un medicament-cheie din alt capitol de psihiatrie, nu agentul FDA al bulimiei."
  },
  "textbookExpressions": [
   "Fluoxetină",
   "bulimie"
  ]
 },
 {
  "id": "psihiatrie-adv-036",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Caracteristicile din tabelul 14-5 includ:",
  "options": [
   "Personalitatea paranoidă: neîncredere persistentă, interpretarea acțiunilor altora ca vătămătoare, suspiciuni de infidelitate",
   "Personalitatea schizoidă: incapacitatea de a lega relații apropiate, detaşare socială, răceală afectivă, anhedonie",
   "Personalitatea narcisică: grandiozitate, nevoie de admirație, lipsă de empatie, invidie",
   "Personalitatea evitantă: agresivitate față de oameni și animale, minciună patologică și vârstă peste 18 ani",
   "Personalitatea dependentă face parte din grupul A, alături de paranoid"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Personalitatea paranoidă: neîncredere persistentă, interpretarea acțiunilor altora ca vătămătoare, suspiciuni de infidelitate — Corect: Neîncrederea și infidelitatea sunt rândul paranoidei.\n\nPersonalitatea schizoidă: incapacitatea de a lega relații apropiate, detaşare socială, răceală afectivă, anhedonie — Corect: Detașarea și anhedonia sunt ale schizoidei.\n\nPersonalitatea narcisică: grandiozitate, nevoie de admirație, lipsă de empatie, invidie — Corect: Grandiozitatea și lipsa empatiei sunt ale narcisicului.\n\nPersonalitatea evitantă: agresivitate față de oameni și animale, minciună patologică și vârstă peste 18 ani — Incorect: Agresivitatea, minciuna și pragul de 18 ani definesc antisociala.\n\nPersonalitatea dependentă face parte din grupul A, alături de paranoid — Incorect: Dependentă este în grupul C, nu în A.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 328, Tulburări de personalitate — Paranoidă, schizoidă, narcisică (pagini PDF: 106).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    328
   ],
   "pdfPages": [
    106
   ],
   "section": "Tulburări de personalitate — Paranoidă, schizoidă, narcisică"
  },
  "learningObjective": "Asocierea fiecărui tip cu descrierea sa de tabel, fără a muta criteriile antisociale pe evitant.",
  "optionRationales": [
   "Neîncrederea și infidelitatea sunt rândul paranoidei.",
   "Detașarea și anhedonia sunt ale schizoidei.",
   "Grandiozitatea și lipsa empatiei sunt ale narcisicului.",
   "Agresivitatea, minciuna și pragul de 18 ani definesc antisociala.",
   "Dependentă este în grupul C, nu în A."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică criteriile antisocialei pe evitant și mută dependentul din C în A."
  },
  "textbookExpressions": [
   "Neîncredere persistentă",
   "Grandiozitate"
  ]
 },
 {
  "id": "psihiatrie-adv-037",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Intoxicația cu fenciclidină și tratamentul opioizilor:",
  "options": [
   "PCP produce euforie, impulsivitate, comportament agresiv, nistagmus vertical și orizontal și hiperreflectivitate",
   "Tratamentul PCP include izolare și contenționare până la remitere, benzodiazepine, antipsihotice și acid ascorbic",
   "Naloxona este antagonistul opioizilor folosit în supradoza acută cu depresie respiratorie semnificativă",
   "Naltrexona poate preveni euforia în timpul utilizării opioizilor; metadona este folosită în tratament",
   "Naloxona este tratamentul de întreținere de primă intenție, iar PCP se tratează cu flumazenil"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "PCP produce euforie, impulsivitate, comportament agresiv, nistagmus vertical și orizontal și hiperreflectivitate — Corect: Nistagmusul vertical și orizontal plus agresivitatea sunt din tabel.\n\nTratamentul PCP include izolare și contenționare până la remitere, benzodiazepine, antipsihotice și acid ascorbic — Corect: Izolarea, benzodiazepinele, antipsihoticele și acidul ascorbic sunt tratamentul citat.\n\nNaloxona este antagonistul opioizilor folosit în supradoza acută cu depresie respiratorie semnificativă — Corect: Naloxona în supradoza cu depresie respiratorie este explicită.\n\nNaltrexona poate preveni euforia în timpul utilizării opioizilor; metadona este folosită în tratament — Corect: Naltrexona anti-euforie și metadona de tratament sunt citate.\n\nNaloxona este tratamentul de întreținere de primă intenție, iar PCP se tratează cu flumazenil — Incorect: Naloxona este acută, nu de întreținere; flumazenilul este al benzodiazepinelor.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 330, Abuzul de substanțe — PCP și opioizi (pagini PDF: 108).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    330
   ],
   "pdfPages": [
    108
   ],
   "section": "Abuzul de substanțe — PCP și opioizi"
  },
  "learningObjective": "Recunoașterea nistagmusului bidirecțional al PCP și a rolurilor distincte naloxonă versus naltrexonă versus metadonă.",
  "optionRationales": [
   "Nistagmusul vertical și orizontal plus agresivitatea sunt din tabel.",
   "Izolarea, benzodiazepinele, antipsihoticele și acidul ascorbic sunt tratamentul citat.",
   "Naloxona în supradoza cu depresie respiratorie este explicită.",
   "Naltrexona anti-euforie și metadona de tratament sunt citate.",
   "Naloxona este acută, nu de întreținere; flumazenilul este al benzodiazepinelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează rolul acut al naloxonei cu întreținerea și atribuie flumazenilul PCP."
  },
  "textbookExpressions": [
   "nistagmus",
   "naloxona"
  ]
 },
 {
  "id": "psihiatrie-adv-038",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Neurolepticele cu potență redusă versus cele cu potență ridicată, conform tabelului 14-1:",
  "options": [
   "Cele cu potență redusă (clorpromazină, tioridazină) blochează D2, sunt utile în simptome pozitive intense și asociază efecte anticolinergice (confuzie, constipație, retenție urinară, hipotensiune)",
   "Cele cu potență ridicată (flufenazină, haloperidol, loxapină, tiotixen, trifluoperazină) sunt folosite și pentru controlul de urgență al psihozei sau agitației",
   "Cele cu potență ridicată asociază distonie, parkinsonism, akinezie, akatizie, diskinezie tardivă, hiperprolactinemie și sindrom neuroleptic malign",
   "Atât potența redusă, cât și cea ridicată sunt descrise ca medicamente de linia a 2-a în tratamentul de întreținere",
   "Haloperidolul blochează doar serotonina, fără efect pe D2"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Cele cu potență redusă (clorpromazină, tioridazină) blochează D2, sunt utile în simptome pozitive intense și asociază efecte anticolinergice (confuzie, constipație, retenție urinară, hipotensiune) — Corect: Clorpromazina/tioridazina, blocarea D2, simptomele pozitive și clusterul anticolinergic sunt din tabel.\n\nCele cu potență ridicată (flufenazină, haloperidol, loxapină, tiotixen, trifluoperazină) sunt folosite și pentru controlul de urgență al psihozei sau agitației — Corect: Controlul de urgență al psihozei/agitației este al potenței ridicate.\n\nCele cu potență ridicată asociază distonie, parkinsonism, akinezie, akatizie, diskinezie tardivă, hiperprolactinemie și sindrom neuroleptic malign — Corect: Lista EPS plus diskinezie, prolactină și SNM este a potenței ridicate.\n\nAtât potența redusă, cât și cea ridicată sunt descrise ca medicamente de linia a 2-a în tratamentul de întreținere — Corect: Ambele rânduri de potență clasică sunt plasate ca linia a 2-a de întreținere.\n\nHaloperidolul blochează doar serotonina, fără efect pe D2 — Incorect: Haloperidolul blochează D2, ca celelalte cu potență ridicată.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 319, Tulburări psihotice — Potență redusă versus ridicată (pagini PDF: 97).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    319
   ],
   "pdfPages": [
    97
   ],
   "section": "Tulburări psihotice — Potență redusă versus ridicată"
  },
  "learningObjective": "Separarea profilului anticolinergic al potenței reduse de indicația de urgență și de EPS ale potenței ridicate.",
  "optionRationales": [
   "Clorpromazina/tioridazina, blocarea D2, simptomele pozitive și clusterul anticolinergic sunt din tabel.",
   "Controlul de urgență al psihozei/agitației este al potenței ridicate.",
   "Lista EPS plus diskinezie, prolactină și SNM este a potenței ridicate.",
   "Ambele rânduri de potență clasică sunt plasate ca linia a 2-a de întreținere.",
   "Haloperidolul blochează D2, ca celelalte cu potență ridicată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul scoate haloperidolul de pe D2, restul fiind rânduri reale din tabelul 14-1."
  },
  "textbookExpressions": [
   "clorpromazină",
   "controlul de urgenţă"
  ]
 },
 {
  "id": "psihiatrie-adv-039",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "Tulburarea delirantă se definește prin:",
  "options": [
   "Unul sau mai multe deliruri de cel puțin o lună, fără a întruni criteriile de schizofrenie; funcționarea este păstrată, cu excepția consecințelor delirului",
   "Cel puțin două simptome de schizofrenie peste 6 luni, cu simptome negative cerute între criterii",
   "Psihoză de cel puțin o zi și cel mult o lună, fără simptome negative între criterii",
   "Psihoză de cel puțin o lună și cel mult 6 luni, identică schizofreniformei",
   "Halucinații și deliruri doar în interiorul episodului afectiv, identic TDM psihotic"
  ],
  "correct": [
   0
  ],
  "explanation": "Unul sau mai multe deliruri de cel puțin o lună, fără a întruni criteriile de schizofrenie; funcționarea este păstrată, cu excepția consecințelor delirului — Corect: Durata de o lună, absența criteriilor de schizofrenie și funcționarea păstrată sunt explicite.\n\nCel puțin două simptome de schizofrenie peste 6 luni, cu simptome negative cerute între criterii — Incorect: Criteriile complete peste 6 luni definesc schizofrenia.\n\nPsihoză de cel puțin o zi și cel mult o lună, fără simptome negative între criterii — Incorect: Fereastra o zi–o lună, fără simptome negative, este a psihozei scurte.\n\nPsihoză de cel puțin o lună și cel mult 6 luni, identică schizofreniformei — Incorect: Fereastra 1–6 luni este a schizofreniformei.\n\nHalucinații și deliruri doar în interiorul episodului afectiv, identic TDM psihotic — Incorect: Psihoza doar intra-episod afectiv este a TDM/maniei, nu a delirantei.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 320, Tulburări psihotice — Tulburarea delirantă (pagini PDF: 98).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    320
   ],
   "pdfPages": [
    98
   ],
   "section": "Tulburări psihotice — Tulburarea delirantă"
  },
  "learningObjective": "Separarea delirului izolat ≥1 lună, fără criterii complete de schizofrenie, de schizofreniformă, psihoza scurtă și schizoafectivă.",
  "optionRationales": [
   "Durata de o lună, absența criteriilor de schizofrenie și funcționarea păstrată sunt explicite.",
   "Criteriile complete peste 6 luni definesc schizofrenia.",
   "Fereastra o zi–o lună, fără simptome negative, este a psihozei scurte.",
   "Fereastra 1–6 luni este a schizofreniformei.",
   "Psihoza doar intra-episod afectiv este a TDM/maniei, nu a delirantei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt ferestrele reale ale schizofreniei, psihozei scurte și schizofreniformei, mutate pe delirantă."
  },
  "textbookExpressions": [
   "cel puţin o lună",
   "nu întruneşte criteriile"
  ]
 },
 {
  "id": "psihiatrie-adv-040",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Sindromul serotoninergic și sindromul toxic anticolinergic, conform tabelului 14-2:",
  "options": [
   "Sindromul serotoninergic este declanșat de SSRI, SNRI, ADT sau IMAO, cu debut abrupt, mioclonii și hipertonii la extremitățile inferioare, și se tratează cu ciproheptadină sau metisergid",
   "Sindromul toxic anticolinergic asociază piele uscată, midriază „orb ca liliacul”, tonus normal sau relaxat și se tratează cu fizostigmină",
   "Hipertermia malignă este declanșată de SSRI, cu rigiditate de țeavă de plumb și ciproheptadină",
   "Sindromul serotoninergic are piele uscată și ileus, identic anticolinergicelor",
   "Fizostigmina este antidotul hipertermiei maligne, nu dantrolenul"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sindromul serotoninergic este declanșat de SSRI, SNRI, ADT sau IMAO, cu debut abrupt, mioclonii și hipertonii la extremitățile inferioare, și se tratează cu ciproheptadină sau metisergid — Corect: Declanșatorii, debutul abrupt, miocloniile și ciproheptadina sunt din rândul SS.\n\nSindromul toxic anticolinergic asociază piele uscată, midriază „orb ca liliacul”, tonus normal sau relaxat și se tratează cu fizostigmină — Corect: Pielea uscată, „orb ca liliacul” și fizostigmina definesc SDA.\n\nHipertermia malignă este declanșată de SSRI, cu rigiditate de țeavă de plumb și ciproheptadină — Incorect: Hipertermia malignă este declanșată de volatile și succinil-colină, cu rigor mortis și dantrolen.\n\nSindromul serotoninergic are piele uscată și ileus, identic anticolinergicelor — Incorect: Pielea uscată și ileusul sunt ale SDA, nu ale SS (transpirații, zgomote intestinale crescute).\n\nFizostigmina este antidotul hipertermiei maligne, nu dantrolenul — Incorect: Dantrolenul, nu fizostigmina, este al hipertermiei maligne.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 320, Tulburări psihotice — SS versus anticolinergic (pagini PDF: 98).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    320
   ],
   "pdfPages": [
    98
   ],
   "section": "Tulburări psihotice — SS versus anticolinergic"
  },
  "learningObjective": "Maparea declanșatorilor, a pielii (transpirații versus uscată) și a antidoturilor ciproheptadină versus fizostigmină.",
  "optionRationales": [
   "Declanșatorii, debutul abrupt, miocloniile și ciproheptadina sunt din rândul SS.",
   "Pielea uscată, „orb ca liliacul” și fizostigmina definesc SDA.",
   "Hipertermia malignă este declanșată de volatile și succinil-colină, cu rigor mortis și dantrolen.",
   "Pielea uscată și ileusul sunt ale SDA, nu ale SS (transpirații, zgomote intestinale crescute).",
   "Dantrolenul, nu fizostigmina, este al hipertermiei maligne."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută rândurile SNM/SS/SDA/HM din același tabel 14-2."
  },
  "textbookExpressions": [
   "Ciproheptadină",
   "Fizostigmină"
  ]
 },
 {
  "id": "psihiatrie-adv-041",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea depresivă majoră cu simptome atipice:",
  "options": [
   "Asociază reactivitate afectivă, hiperfagie cu creștere ponderală, hipersomnie, lentoare psihomotorie („membre de plumb”) și hipersensibilitate la rejecție",
   "Este descrisă ca cel mai frecvent subtip al depresiei majore",
   "Se tratează cu fototerapie, identic subtipului cu ritmicitate sezonieră",
   "Cere debut în primele 4 săptămâni după naștere, definind forma peripartum",
   "Exclude anhedonia din criteriile de TDM"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Asociază reactivitate afectivă, hiperfagie cu creștere ponderală, hipersomnie, lentoare psihomotorie („membre de plumb”) și hipersensibilitate la rejecție — Corect: Cele cinci trăsături atipice sunt enumerate.\n\nEste descrisă ca cel mai frecvent subtip al depresiei majore — Corect: Nota precizează că este cel mai frecvent subtip.\n\nSe tratează cu fototerapie, identic subtipului cu ritmicitate sezonieră — Incorect: Fototerapia este a formei sezoniere, nu a celei atipice.\n\nCere debut în primele 4 săptămâni după naștere, definind forma peripartum — Incorect: Fereastra de 4 săptămâni postpartum definește forma peripartum.\n\nExclude anhedonia din criteriile de TDM — Incorect: TDM cere dispoziție depresivă sau anhedonie, inclusiv în forma atipică.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 321, Tulburări afective — Depresia atipică (pagini PDF: 99).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    321
   ],
   "pdfPages": [
    99
   ],
   "section": "Tulburări afective — Depresia atipică"
  },
  "learningObjective": "Recunoașterea clusterului atipic (reactivitate, hiperfagie, membre de plumb) și a notei că este cel mai frecvent subtip.",
  "optionRationales": [
   "Cele cinci trăsături atipice sunt enumerate.",
   "Nota precizează că este cel mai frecvent subtip.",
   "Fototerapia este a formei sezoniere, nu a celei atipice.",
   "Fereastra de 4 săptămâni postpartum definește forma peripartum.",
   "TDM cere dispoziție depresivă sau anhedonie, inclusiv în forma atipică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută fototerapia sezonieră și fereastra peripartum pe subtipul atipic."
  },
  "textbookExpressions": [
   "membre de plumb",
   "cel mai frecvent subtip"
  ]
 },
 {
  "id": "psihiatrie-adv-042",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea depresivă persistentă:",
  "options": [
   "Cere disforie plus cel puțin două alte simptome depresive, în majoritatea zilelor, peste 2 ani",
   "Poate include atât depresia majoră cronică, cât și depresia ușoară cronică care nu întrunește criteriile de TDM",
   "Cere cel puțin un episod maniacal, ca bipolarul I",
   "Durata minimă este de 4 zile, identică hipomaniei",
   "Se tratează de primă intenție cu flumazenil"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Cere disforie plus cel puțin două alte simptome depresive, în majoritatea zilelor, peste 2 ani — Corect: Disforia plus două simptome peste 2 ani este criteriul.\n\nPoate include atât depresia majoră cronică, cât și depresia ușoară cronică care nu întrunește criteriile de TDM — Corect: Includerea TDM cronic și a formei ușoare sub prag este explicită.\n\nCere cel puțin un episod maniacal, ca bipolarul I — Incorect: Mania definește bipolarul I, nu distimia.\n\nDurata minimă este de 4 zile, identică hipomaniei — Incorect: 4 zile este hipomania.\n\nSe tratează de primă intenție cu flumazenil — Incorect: Flumazenilul este antagonistul benzodiazepinelor.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 321, Tulburări afective — Depresia persistentă (pagini PDF: 99).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    321
   ],
   "pdfPages": [
    99
   ],
   "section": "Tulburări afective — Depresia persistentă"
  },
  "learningObjective": "Aplicarea pragului de 2 ani și a dublei forme (TDM cronic versus depresie ușoară sub pragul de TDM).",
  "optionRationales": [
   "Disforia plus două simptome peste 2 ani este criteriul.",
   "Includerea TDM cronic și a formei ușoare sub prag este explicită.",
   "Mania definește bipolarul I, nu distimia.",
   "4 zile este hipomania.",
   "Flumazenilul este antagonistul benzodiazepinelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută mania, hipomania și flumazenilul pe distimie."
  },
  "textbookExpressions": [
   ">2 ani",
   "disforiei"
  ]
 },
 {
  "id": "psihiatrie-adv-043",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Cauze iatrogene și medicale care pot mima depresia, conform textului:",
  "options": [
   "Substanțe: alcool, benzodiazepine, antihistaminice, neuroleptice convenționale, glucocorticoizi și interferon α",
   "Condiții medicale: hipotiroidism, hiperparatiroidism, boala Parkinson, accident vascular cerebral și tumori cerebrale",
   "Patologic, depresia ar fi cauzată de activitate scăzută în SNC a serotoninei, norepinefrinei și dopaminei",
   "Cauza principală este excesul de serotonină, identic sindromului serotoninergic",
   "Interferonul α este tratamentul de primă linie al TDM, nu o cauză"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Substanțe: alcool, benzodiazepine, antihistaminice, neuroleptice convenționale, glucocorticoizi și interferon α — Corect: Lista de substanțe este explicită.\n\nCondiții medicale: hipotiroidism, hiperparatiroidism, boala Parkinson, accident vascular cerebral și tumori cerebrale — Corect: Lista de condiții medicale este citată.\n\nPatologic, depresia ar fi cauzată de activitate scăzută în SNC a serotoninei, norepinefrinei și dopaminei — Corect: Hipoactivitatea serotoninei, norepinefrinei și dopaminei este enunțată.\n\nCauza principală este excesul de serotonină, identic sindromului serotoninergic — Incorect: Textul descrie activitate scăzută, nu exces de serotonină.\n\nInterferonul α este tratamentul de primă linie al TDM, nu o cauză — Incorect: Interferonul α este cauză de simptome depresive, nu tratament.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 321, Tulburări afective — Mimici ale TDM (pagini PDF: 99).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    321
   ],
   "pdfPages": [
    99
   ],
   "section": "Tulburări afective — Mimici ale TDM"
  },
  "learningObjective": "Listarea substanțelor și a bolilor care produc simptome depresive, plus hipoactivitatea monoaminelor.",
  "optionRationales": [
   "Lista de substanțe este explicită.",
   "Lista de condiții medicale este citată.",
   "Hipoactivitatea serotoninei, norepinefrinei și dopaminei este enunțată.",
   "Textul descrie activitate scăzută, nu exces de serotonină.",
   "Interferonul α este cauză de simptome depresive, nu tratament."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează hipoactivitatea monoaminelor și transformă interferonul din cauză în tratament."
  },
  "textbookExpressions": [
   "interferonul a",
   "hipotiroidismul"
  ]
 },
 {
  "id": "psihiatrie-adv-044",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "Mecanismul de acțiune cel mai probabil al litiului, conform textului, implică:",
  "options": [
   "Activitatea inozitoltrifosfatului",
   "Blocarea receptorilor D2, identic haloperidolului",
   "Inhibarea recaptării serotoninei, identic SSRI",
   "Antagonismul GABA, identic flumazenilului",
   "Blocarea receptorilor α-1, identic prazosinului"
  ],
  "correct": [
   0
  ],
  "explanation": "Activitatea inozitoltrifosfatului — Corect: Textul precizează că mecanismul este necunoscut, dar cel mai probabil implică inozitoltrifosfatul.\n\nBlocarea receptorilor D2, identic haloperidolului — Incorect: Blocarea D2 este a neurolepticelor.\n\nInhibarea recaptării serotoninei, identic SSRI — Incorect: Inhibarea recaptării serotoninei este a SSRI.\n\nAntagonismul GABA, identic flumazenilului — Incorect: Flumazenilul antagonizează benzodiazepinele pe GABA, nu litiul.\n\nBlocarea receptorilor α-1, identic prazosinului — Incorect: Prazosinul este antagonist α-1 pentru coșmarurile din PTSD.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 323, Tulburări afective — Mecanismul litiului (pagini PDF: 101).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    323
   ],
   "pdfPages": [
    101
   ],
   "section": "Tulburări afective — Mecanismul litiului"
  },
  "learningObjective": "Identificarea inozitoltrifosfatului ca mecanism propus, distinct de D2, SERT, GABA și α-1.",
  "optionRationales": [
   "Textul precizează că mecanismul este necunoscut, dar cel mai probabil implică inozitoltrifosfatul.",
   "Blocarea D2 este a neurolepticelor.",
   "Inhibarea recaptării serotoninei este a SSRI.",
   "Flumazenilul antagonizează benzodiazepinele pe GABA, nu litiul.",
   "Prazosinul este antagonist α-1 pentru coșmarurile din PTSD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate distractoarele sunt mecanisme reale din capitol, mutate pe litiu."
  },
  "textbookExpressions": [
   "inozitoltrifosfatului",
   "mecanismul său de acţiune"
  ]
 },
 {
  "id": "psihiatrie-adv-045",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Clasele de antidepresive din tabelul 14-3, altele decât ADT, IMAO și bupropion:",
  "options": [
   "SNRI (desvenlafaxină, duloxetină, venlafaxină) sunt de primă linie în depresia comorbidă cu durere neuropată și de linia a doua după eșecul SSRI",
   "Modulatorii serotoninei (nefazodonă, trazodonă, vilazodonă) sunt indicați în depresia cu insomnie semnificativă; trazodona asociază priapism",
   "Sunătoarea (Hypericum perforatum) este agent de primă linie în Europa, considerată alternativă în SUA",
   "SSRI își ating efectul în 24 de ore, fără risc de ideație suicidară la adolescenți",
   "Mirtazapina este rezervată ADHD și renunțării la fumat, identic bupropionului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "SNRI (desvenlafaxină, duloxetină, venlafaxină) sunt de primă linie în depresia comorbidă cu durere neuropată și de linia a doua după eșecul SSRI — Corect: Indicația de primă linie în depresie plus durere neuropată este din tabel.\n\nModulatorii serotoninei (nefazodonă, trazodonă, vilazodonă) sunt indicați în depresia cu insomnie semnificativă; trazodona asociază priapism — Corect: Insomnia semnificativă și priapismul sunt ale modulatorilor/trazodonei.\n\nSunătoarea (Hypericum perforatum) este agent de primă linie în Europa, considerată alternativă în SUA — Corect: Statutul european versus alternativa SUA este explicit.\n\nSSRI își ating efectul în 24 de ore, fără risc de ideație suicidară la adolescenți — Incorect: SSRI cer 3-4 săptămâni și pot crește ideația suicidară la adolescenți.\n\nMirtazapina este rezervată ADHD și renunțării la fumat, identic bupropionului — Incorect: ADHD și renunțarea la fumat sunt ale bupropionului; mirtazapina este pentru insomnie și/sau anorexie.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 322, Tulburări afective — SNRI, trazodonă, sunătoare (pagini PDF: 100).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    322
   ],
   "pdfPages": [
    100
   ],
   "section": "Tulburări afective — SNRI, trazodonă, sunătoare"
  },
  "learningObjective": "Extragerea indicației SNRI în durerea neuropată, a priapismului trazodonei și a statutului european al sunătoarei.",
  "optionRationales": [
   "Indicația de primă linie în depresie plus durere neuropată este din tabel.",
   "Insomnia semnificativă și priapismul sunt ale modulatorilor/trazodonei.",
   "Statutul european versus alternativa SUA este explicit.",
   "SSRI cer 3-4 săptămâni și pot crește ideația suicidară la adolescenți.",
   "ADHD și renunțarea la fumat sunt ale bupropionului; mirtazapina este pentru insomnie și/sau anorexie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii comprimă latența SSRI și permută indicația mirtazapinei cu cea a bupropionului."
  },
  "textbookExpressions": [
   "durere neuro",
   "priapism"
  ]
 },
 {
  "id": "psihiatrie-adv-046",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Înainte de a prescrie un antidepresiv și profilul advers al litiului:",
  "options": [
   "Istoricul de manie trebuie exclus, deoarece antidepresivele fără stabilizator pot induce un episod maniacal la bipolar",
   "Efectele adverse ale litiului includ tremor, diabet insipid nefrogen, hipotiroidism, insuficiență renală și creștere ponderală",
   "Litiul este folosit frecvent ca primă linie în tratamentul de lungă durată al maniei",
   "Antidepresivele în monoterapie sunt tratamentul de întreținere al maniei, fără stabilizator",
   "Litiul este lipsit de efecte renale și tiroidiene"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Istoricul de manie trebuie exclus, deoarece antidepresivele fără stabilizator pot induce un episod maniacal la bipolar — Corect: Nota „Pasul următor” cere excluderea maniei înainte de antidepresiv.\n\nEfectele adverse ale litiului includ tremor, diabet insipid nefrogen, hipotiroidism, insuficiență renală și creștere ponderală — Corect: Lista de efecte adverse, inclusiv NDI și hipotiroidism, este explicită.\n\nLitiul este folosit frecvent ca primă linie în tratamentul de lungă durată al maniei — Corect: Statutul de primă linie în întreținerea maniei este citat.\n\nAntidepresivele în monoterapie sunt tratamentul de întreținere al maniei, fără stabilizator — Incorect: Stabilizatorii, nu antidepresivele singure, controlează mania.\n\nLitiul este lipsit de efecte renale și tiroidiene — Incorect: Textul enumeră tocmai efectele renale și tiroidiene.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 323, Tulburări afective — Switch maniacal și litiu (pagini PDF: 101).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    323
   ],
   "pdfPages": [
    101
   ],
   "section": "Tulburări afective — Switch maniacal și litiu"
  },
  "learningObjective": "Corelarea riscului de switch maniacal cu clusterul advers renal-tiroidian-ponderal al litiului.",
  "optionRationales": [
   "Nota „Pasul următor” cere excluderea maniei înainte de antidepresiv.",
   "Lista de efecte adverse, inclusiv NDI și hipotiroidism, este explicită.",
   "Statutul de primă linie în întreținerea maniei este citat.",
   "Stabilizatorii, nu antidepresivele singure, controlează mania.",
   "Textul enumeră tocmai efectele renale și tiroidiene."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă antidepresivul în tratament de întreținere al maniei și neagă toxicitatea litiului."
  },
  "textbookExpressions": [
   "induce un episod maniacal",
   "diabetul insipid nefrogen"
  ]
 },
 {
  "id": "psihiatrie-adv-047",
  "topicId": "psihiatrie",
  "type": "CS",
  "stem": "Epidemiologia tulburării obsesiv-compulsive, conform notei, include:",
  "options": [
   "Componentă genetică importantă, vârstă de debut la 20 de ani și prevalență egală între femei și bărbați",
   "Predominanță feminină dublă, identică GAD",
   "Debut în copilăria precoce, identic fobiei specifice",
   "Absența oricărei componente genetice, spre deosebire de schizofrenie",
   "Prevalență limitată la bărbații peste 18 ani cu tulburare de conduită"
  ],
  "correct": [
   0
  ],
  "explanation": "Componentă genetică importantă, vârstă de debut la 20 de ani și prevalență egală între femei și bărbați — Corect: Cele trei elemente epidemiologice sunt din notă.\n\nPredominanță feminină dublă, identică GAD — Incorect: Riscul dublu la femei aparține GAD.\n\nDebut în copilăria precoce, identic fobiei specifice — Incorect: Debutul în copilărie este al fobiei specifice.\n\nAbsența oricărei componente genetice, spre deosebire de schizofrenie — Incorect: Textul afirmă componenta genetică importantă.\n\nPrevalență limitată la bărbații peste 18 ani cu tulburare de conduită — Incorect: Criteriul >18 ani cu conduită înainte de 15 este al personalității antisociale.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 324, TOC — Epidemiologie (pagini PDF: 102).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    324
   ],
   "pdfPages": [
    102
   ],
   "section": "TOC — Epidemiologie"
  },
  "learningObjective": "Recunoașterea triadei genetică–debut la 20 de ani–sex-ratio egal, distinctă de GAD și de personalitatea antisocială.",
  "optionRationales": [
   "Cele trei elemente epidemiologice sunt din notă.",
   "Riscul dublu la femei aparține GAD.",
   "Debutul în copilărie este al fobiei specifice.",
   "Textul afirmă componenta genetică importantă.",
   "Criteriul >18 ani cu conduită înainte de 15 este al personalității antisociale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă sex-ratio-ul GAD, vârsta fobiei și criteriul antisocial pe TOC."
  },
  "textbookExpressions": [
   "20 de ani",
   "prevalentă egală"
  ]
 },
 {
  "id": "psihiatrie-adv-048",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea de acumulare (colecționarismul patologic):",
  "options": [
   "Pacientul are dificultăți de a arunca obiecte fără valoare; renunțarea produce disconfort semnificativ și dezordine potențial periculoasă",
   "Tratamentul este terapie cognitiv-comportamentală țintită pe acumulare; tulburarea este în general foarte dificil de tratat",
   "Se tratează de primă intenție cu enucleere, ca dismorfia corporală nerezolvată chirurgical",
   "Diagnosticul cere greutate sub 85% din cea ideală, cu lanugo",
   "Obiectele acumulate sunt ego-sintonice doar dacă există ticuri vocale"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Pacientul are dificultăți de a arunca obiecte fără valoare; renunțarea produce disconfort semnificativ și dezordine potențial periculoasă — Corect: Dificultatea de a arunca, disconfortul și dezordinea periculoasă sunt explicite.\n\nTratamentul este terapie cognitiv-comportamentală țintită pe acumulare; tulburarea este în general foarte dificil de tratat — Corect: TCC țintită și dificultatea terapeutică sunt citate.\n\nSe tratează de primă intenție cu enucleere, ca dismorfia corporală nerezolvată chirurgical — Incorect: Enucleerea nu aparține capitolului; la dismorfie se evită operațiile inutile.\n\nDiagnosticul cere greutate sub 85% din cea ideală, cu lanugo — Incorect: <85% cu lanugo definește anorexia.\n\nObiectele acumulate sunt ego-sintonice doar dacă există ticuri vocale — Incorect: Ticurile și distincția ego-sinton/diston sunt ale TOC versus TPOC.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 325, Tulburări înrudite TOC — Acumularea (pagini PDF: 103).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    325
   ],
   "pdfPages": [
    103
   ],
   "section": "Tulburări înrudite TOC — Acumularea"
  },
  "learningObjective": "Separarea colecționarismului (disconfort la discard, TCC țintită, greu de tratat) de dismorfie și anorexie.",
  "optionRationales": [
   "Dificultatea de a arunca, disconfortul și dezordinea periculoasă sunt explicite.",
   "TCC țintită și dificultatea terapeutică sunt citate.",
   "Enucleerea nu aparține capitolului; la dismorfie se evită operațiile inutile.",
   "<85% cu lanugo definește anorexia.",
   "Ticurile și distincția ego-sinton/diston sunt ale TOC versus TPOC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă evitatea chirurgicală greșit transformată, anorexia și distincția TOC/TPOC."
  },
  "textbookExpressions": [
   "arunca sau a împărţi",
   "foarte dificil de tratat"
  ]
 },
 {
  "id": "psihiatrie-adv-049",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea conversivă (simptome neurologice funcționale):",
  "options": [
   "Produce deficite senzoriale sau motorii acute fără condiție neurologic identificată; simptomele pot include paralizie, distonie, disfonie, crize non-epileptice sau tulburări de văz/auz",
   "Prezentarea diagnosticului și educarea asupra naturii psihogene duc la dispariție spontană în 40-50% din cazuri",
   "Linia a doua include TCC, fizioterapie și, uneori, SSRI/SNRI",
   "Pacienții sunt foarte afectați psihologic de simptome, identic tulburării cu simptome somatice",
   "Preocuparea de a avea o boală gravă fără simptome somatice definește entitatea, ca nosofobia"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Produce deficite senzoriale sau motorii acute fără condiție neurologic identificată; simptomele pot include paralizie, distonie, disfonie, crize non-epileptice sau tulburări de văz/auz — Corect: Deficitele inexplicabile și lista de simptome sunt explicite.\n\nPrezentarea diagnosticului și educarea asupra naturii psihogene duc la dispariție spontană în 40-50% din cazuri — Corect: Remisiunea 40-50% după educare este citată.\n\nLinia a doua include TCC, fizioterapie și, uneori, SSRI/SNRI — Corect: TCC, fizioterapia și SSRI/SNRI sunt linia a doua.\n\nPacienții sunt foarte afectați psihologic de simptome, identic tulburării cu simptome somatice — Incorect: Afectarea psihologică intensă definește tulburarea cu simptome somatice, contrastată explicit cu conversia.\n\nPreocuparea de a avea o boală gravă fără simptome somatice definește entitatea, ca nosofobia — Incorect: Nosofobia este preocuparea de boală fără simptome semnificative.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 326, Tulburări somatice — Conversia: tratament (pagini PDF: 104).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    326
   ],
   "pdfPages": [
    104
   ],
   "section": "Tulburări somatice — Conversia: tratament"
  },
  "learningObjective": "Aplicarea ratei de remisiune 40–50% după educare și a liniei a doua TCC/fizioterapie, distinct de simptome somatice și nosofobie.",
  "optionRationales": [
   "Deficitele inexplicabile și lista de simptome sunt explicite.",
   "Remisiunea 40-50% după educare este citată.",
   "TCC, fizioterapia și SSRI/SNRI sunt linia a doua.",
   "Afectarea psihologică intensă definește tulburarea cu simptome somatice, contrastată explicit cu conversia.",
   "Nosofobia este preocuparea de boală fără simptome semnificative."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie conversiei insight-ul din simptomele somatice și criteriul nosofobiei."
  },
  "textbookExpressions": [
   "40-50% din cazuri",
   "simptome neurologice funcţionale"
  ]
 },
 {
  "id": "psihiatrie-adv-050",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea nosofobică:",
  "options": [
   "Este preocuparea de a avea sau contracta o boală gravă, în absența simptomelor somatice semnificative, cu anxietate ridicată și verificări repetitive",
   "Tratamentul include vizite regulate la medic, terapie cognitiv-comportamentală și SSRI",
   "Cere deficite motorii cu la belle indifférence, identic conversiei",
   "Se definește prin falsificarea semnelor pentru un beneficiu (scutire de muncă), identic simulării",
   "Durata minimă a simptomelor neurologice este de 2 ani, ca distimia"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este preocuparea de a avea sau contracta o boală gravă, în absența simptomelor somatice semnificative, cu anxietate ridicată și verificări repetitive — Corect: Preocuparea fără simptome semnificative, plus verificările, este definiția.\n\nTratamentul include vizite regulate la medic, terapie cognitiv-comportamentală și SSRI — Corect: Vizitele regulate, TCC și SSRI sunt tratamentul.\n\nCere deficite motorii cu la belle indifférence, identic conversiei — Incorect: La belle indifférence și deficitele motorii definesc conversia.\n\nSe definește prin falsificarea semnelor pentru un beneficiu (scutire de muncă), identic simulării — Incorect: Beneficiul secundar definește simularea.\n\nDurata minimă a simptomelor neurologice este de 2 ani, ca distimia — Incorect: Pragul de 2 ani este al depresiei persistente.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 326, Tulburări somatice — Nosofobia (pagini PDF: 104).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    326
   ],
   "pdfPages": [
    104
   ],
   "section": "Tulburări somatice — Nosofobia"
  },
  "learningObjective": "Separarea anxietății de boală fără simptome de conversie, simulare și distimie.",
  "optionRationales": [
   "Preocuparea fără simptome semnificative, plus verificările, este definiția.",
   "Vizitele regulate, TCC și SSRI sunt tratamentul.",
   "La belle indifférence și deficitele motorii definesc conversia.",
   "Beneficiul secundar definește simularea.",
   "Pragul de 2 ani este al depresiei persistente."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută conversia, simularea și distimia pe nosofobie."
  },
  "textbookExpressions": [
   "boală gravă",
   "Vizite regulate"
  ]
 },
 {
  "id": "psihiatrie-adv-051",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Tulburarea de alimentație compulsivă, spre deosebire de bulimie:",
  "options": [
   "Episoade necontrolate de alimentație compulsivă fără comportamente compensatorii inadecvate",
   "Episoadele apar cel puțin o dată pe săptămână, peste 3 luni; pacientele sunt adesea supraponderale sau obeze",
   "Psihoterapia (TCC și terapie interpersonală) este de primă linie și în general mai eficace decât farmacoterapia; SSRI pot fi folosite",
   "Greutatea este în general sub 85% din cea ideală, cu lanugo, ca în anorexie",
   "Comportamentele compensatorii (purgație, exercițiu excesiv) definesc diagnosticul, ca în bulimie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Episoade necontrolate de alimentație compulsivă fără comportamente compensatorii inadecvate — Corect: Absența compensării este criteriul de diferențiere.\n\nEpisoadele apar cel puțin o dată pe săptămână, peste 3 luni; pacientele sunt adesea supraponderale sau obeze — Corect: Frecvența ≥1/săptămână peste 3 luni și excesul ponderal sunt explicite.\n\nPsihoterapia (TCC și terapie interpersonală) este de primă linie și în general mai eficace decât farmacoterapia; SSRI pot fi folosite — Corect: Prioritatea psihoterapiei față de farmacoterapie este citată.\n\nGreutatea este în general sub 85% din cea ideală, cu lanugo, ca în anorexie — Incorect: <85% cu lanugo definește anorexia.\n\nComportamentele compensatorii (purgație, exercițiu excesiv) definesc diagnosticul, ca în bulimie — Incorect: Compensarea definește bulimia, nu binge eating.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 327, Tulburări alimentare — Binge eating (pagini PDF: 105).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    327
   ],
   "pdfPages": [
    105
   ],
   "section": "Tulburări alimentare — Binge eating"
  },
  "learningObjective": "Contrastul binge eating (fără compensare, exces ponderal, TCC > farmacoterapie) cu anorexia și bulimia.",
  "optionRationales": [
   "Absența compensării este criteriul de diferențiere.",
   "Frecvența ≥1/săptămână peste 3 luni și excesul ponderal sunt explicite.",
   "Prioritatea psihoterapiei față de farmacoterapie este citată.",
   "<85% cu lanugo definește anorexia.",
   "Compensarea definește bulimia, nu binge eating."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică cașexia anorexiei și compensarea bulimiei pe binge eating."
  },
  "textbookExpressions": [
   "fără comportamente compensatorii",
   "o dată pe săptămână"
  ]
 },
 {
  "id": "psihiatrie-adv-052",
  "topicId": "psihiatrie",
  "type": "CM",
  "stem": "Personalitățile schizotipală, histrionică și obsesiv-compulsivă, conform tabelului 14-5:",
  "options": [
   "Schizotipală (grup A): paranoia, idei de referință, comportament excentric, anxietate socială, vorbire dezorganizată, convingeri bizare",
   "Histrionică (grup B): caută atenția, comportament seducător sau teatral, labilitate emoțională, relații superficiale, sugestibilitate",
   "Obsesiv-compulsivă (grup C): preocupare pentru detalii, perfecționism, devotament excesiv muncii, inflexibilitate, zgârcenie, încăpățânare",
   "Tratamentul histrionicului este psihoterapie pe termen lung, orientată pe dezvoltarea relațiilor și pe stabilirea de limite",
   "Schizotipalul cere vârstă peste 18 ani și tulburare de conduită înainte de 15 ani, identic antisocialului"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Schizotipală (grup A): paranoia, idei de referință, comportament excentric, anxietate socială, vorbire dezorganizată, convingeri bizare — Corect: Clusterul excentric al schizotipalului este din tabel.\n\nHistrionică (grup B): caută atenția, comportament seducător sau teatral, labilitate emoțională, relații superficiale, sugestibilitate — Corect: Clusterul teatral al histrionicului este citat.\n\nObsesiv-compulsivă (grup C): preocupare pentru detalii, perfecționism, devotament excesiv muncii, inflexibilitate, zgârcenie, încăpățânare — Corect: Clusterul perfecționist al TPOC este explicit.\n\nTratamentul histrionicului este psihoterapie pe termen lung, orientată pe dezvoltarea relațiilor și pe stabilirea de limite — Corect: Coloana de tratament a histrionicului precizează psihoterapia pe termen lung cu limite.\n\nSchizotipalul cere vârstă peste 18 ani și tulburare de conduită înainte de 15 ani, identic antisocialului — Incorect: Conduita înainte de 15 ani și vârsta >18 definesc antisocialul, nu schizotipalul.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 14, p. 328, Tulburări de personalitate — Schizotipal, histrionic, TPOC (pagini PDF: 106).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 14,
   "printedPages": [
    328
   ],
   "pdfPages": [
    106
   ],
   "section": "Tulburări de personalitate — Schizotipal, histrionic, TPOC"
  },
  "learningObjective": "Maparea a trei rânduri nefolosite din tabelul 14-5, plus coloana de tratament a histrionicului.",
  "optionRationales": [
   "Clusterul excentric al schizotipalului este din tabel.",
   "Clusterul teatral al histrionicului este citat.",
   "Clusterul perfecționist al TPOC este explicit.",
   "Coloana de tratament a histrionicului precizează psihoterapia pe termen lung cu limite.",
   "Conduita înainte de 15 ani și vârsta >18 definesc antisocialul, nu schizotipalul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul aplică criteriile antisocialului pe schizotipal, restul fiind rânduri reale din tabel."
  },
  "textbookExpressions": [
   "idei de referinţă",
   "comportament seducător"
  ]
 }
];
