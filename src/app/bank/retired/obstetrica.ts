import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_OBSTETRICA:(Question&Record<string,unknown>)[]=[
 {
  "id": "obstetrica-adv-001",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Vârsta gestațională și data nașterii:",
  "options": [
   "Vârsta gestațională este cu 2 săptămâni mai mare decât vârsta embrionară",
   "Regula lui Naegele estimează nașterea prin DUM + 7 zile − 3 luni + 1 an",
   "Vârsta gestațională se calculează de la momentul fertilizării",
   "Dezvoltarea de la fertilizare până la maturitatea fetală durează aproximativ 42 de săptămâni",
   "Regula lui Naegele adaugă 14 zile și 3 luni la data ultimei menstruații"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Vârsta gestațională este cu 2 săptămâni mai mare decât vârsta embrionară — Corect: Textul precizează că vârsta gestațională este cu 2 săptămâni mai mare decât cea embrionară.\n\nRegula lui Naegele estimează nașterea prin DUM + 7 zile − 3 luni + 1 an — Corect: Formula DUM + 7 zile − 3 luni + 1 an este explicită.\n\nVârsta gestațională se calculează de la momentul fertilizării — Incorect: Calculul pornește de la data ultimei menstruații, nu de la fertilizare.\n\nDezvoltarea de la fertilizare până la maturitatea fetală durează aproximativ 42 de săptămâni — Incorect: Durata citată până la maturitatea fetală este de aproximativ 38 de săptămâni de la fertilizare.\n\nRegula lui Naegele adaugă 14 zile și 3 luni la data ultimei menstruații — Incorect: Formula este inversată față de regula lui Naegele.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 295, Fiziologia sarcinii — Vârsta gestațională (pagini PDF: 73).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    295
   ],
   "pdfPages": [
    73
   ],
   "section": "Fiziologia sarcinii — Vârsta gestațională"
  },
  "learningObjective": "Aplicarea diferenței de 14 zile dintre vârsta gestațională și cea embrionară și a regulii lui Naegele.",
  "optionRationales": [
   "Textul precizează că vârsta gestațională este cu 2 săptămâni mai mare decât cea embrionară.",
   "Formula DUM + 7 zile − 3 luni + 1 an este explicită.",
   "Calculul pornește de la data ultimei menstruații, nu de la fertilizare.",
   "Durata citată până la maturitatea fetală este de aproximativ 38 de săptămâni de la fertilizare.",
   "Formula este inversată față de regula lui Naegele."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută originea calculului pe fertilizare și alterează atât durata, cât și semnele din formula lui Naegele."
  },
  "textbookExpressions": [
   "Regula lui Naegele",
   "2 săptămâni mai mare"
  ]
 },
 {
  "id": "obstetrica-adv-002",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Modificările cardiovasculare și respiratorii normale din sarcină includ:",
  "options": [
   "Debitul cardiac crește cu 40%",
   "Tensiunea arterială sistolică și diastolică scad ușor",
   "PCO2 scade până la aproximativ 30 mm Hg, realizând o alcaloză respiratorie cronică",
   "Hematocritul crește, deoarece volumul sanguin scade",
   "TSH-ul liber și T4 liber cresc marcat peste intervalul de referință"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Debitul cardiac crește cu 40% — Corect: Creșterea debitului cardiac cu 40% este din Tabelul 13-1.\n\nTensiunea arterială sistolică și diastolică scad ușor — Corect: Scăderea ușoară a TAS și TAD este explicită.\n\nPCO2 scade până la aproximativ 30 mm Hg, realizând o alcaloză respiratorie cronică — Corect: PCO2 ~30 mm Hg cu alcaloză respiratorie cronică este citată.\n\nHematocritul crește, deoarece volumul sanguin scade — Incorect: Hematocritul scade prin diluție, deși producția de eritrocite crește.\n\nTSH-ul liber și T4 liber cresc marcat peste intervalul de referință — Incorect: T4 total crește prin TBG, dar T4 liber este neschimbat, iar TSH scade doar ușor, rămânând în limite normale.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 296, Fiziologia sarcinii — Modificări materne (pagini PDF: 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    296
   ],
   "pdfPages": [
    74
   ],
   "section": "Fiziologia sarcinii — Modificări materne"
  },
  "learningObjective": "Recunoașterea hipervolemiei, a scăderii tensionale fiziologice și a alcalozei respiratorii de sarcină.",
  "optionRationales": [
   "Creșterea debitului cardiac cu 40% este din Tabelul 13-1.",
   "Scăderea ușoară a TAS și TAD este explicită.",
   "PCO2 ~30 mm Hg cu alcaloză respiratorie cronică este citată.",
   "Hematocritul scade prin diluție, deși producția de eritrocite crește.",
   "T4 total crește prin TBG, dar T4 liber este neschimbat, iar TSH scade doar ușor, rămânând în limite normale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează diluția hematocritului și confundă T4 total cu T4 liber."
  },
  "textbookExpressions": [
   "Debitul cardiac creşte cu 40%",
   "alcaloză respiratorie"
  ]
 },
 {
  "id": "obstetrica-adv-003",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Aportul caloric zilnic recomandat în timpul sarcinii este de aproximativ:",
  "options": [
   "2.500 kcal",
   "1.500 kcal",
   "3.500 kcal",
   "2.000 kcal fără supliment de folat",
   "4.000 kcal la toate gravidele, independent de IMC"
  ],
  "correct": [
   0
  ],
  "explanation": "2.500 kcal — Corect: Nota „De reținut” indică aproximativ 2.500 kcal/zi.\n\n1.500 kcal — Incorect: 1.500 kcal este insuficient față de ținta din text.\n\n3.500 kcal — Incorect: 3.500 kcal depășește valoarea citată și ar crește riscul de macrosomie.\n\n2.000 kcal fără supliment de folat — Incorect: Textul cere și supliment de folat, nu doar un aport caloric redus.\n\n4.000 kcal la toate gravidele, independent de IMC — Incorect: Creșterea ponderală se nuanțează după IMC, nu prin 4.000 kcal uniforme.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 296, Îngrijirea prenatală — Nutriția (pagini PDF: 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    296
   ],
   "pdfPages": [
    74
   ],
   "section": "Îngrijirea prenatală — Nutriția"
  },
  "learningObjective": "Memorarea țintei calorice citate pentru sarcină.",
  "optionRationales": [
   "Nota „De reținut” indică aproximativ 2.500 kcal/zi.",
   "1.500 kcal este insuficient față de ținta din text.",
   "3.500 kcal depășește valoarea citată și ar crește riscul de macrosomie.",
   "Textul cere și supliment de folat, nu doar un aport caloric redus.",
   "Creșterea ponderală se nuanțează după IMC, nu prin 4.000 kcal uniforme."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt ținte calorice plauzibile, deplasate față de valoarea unică din notă."
  },
  "textbookExpressions": [
   "2.500 kcal",
   "Cerinţele nutriţionale"
  ]
 },
 {
  "id": "obstetrica-adv-004",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Suplimentele și markerii de screening prenatal:",
  "options": [
   "Necesarul de folat este 0,4–0,8 mg/zi, început cu 4 săptămâni preconcepțional, pentru prevenirea defectelor de tub neural",
   "Necesarul de fier este 30 mg/zi",
   "α-fetoproteina serică maternă este validă în fereastra 16–18 săptămâni; valorile crescute asociază defecte de tub neural, iar cele scăzute trisomiile 21 și 18",
   "Folatul se începe abia după săptămâna 20, deoarece nu influențează închiderea tubului neural",
   "Valorile crescute de α-fetoproteină asociază trisomia 21, iar valorile scăzute defectele de tub neural"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Necesarul de folat este 0,4–0,8 mg/zi, început cu 4 săptămâni preconcepțional, pentru prevenirea defectelor de tub neural — Corect: Doza și momentul preconcepțional al folatului sunt din Tabelul 13-2.\n\nNecesarul de fier este 30 mg/zi — Corect: Cei 30 mg/zi de fier (creștere cu 100%) sunt expliciți.\n\nα-fetoproteina serică maternă este validă în fereastra 16–18 săptămâni; valorile crescute asociază defecte de tub neural, iar cele scăzute trisomiile 21 și 18 — Corect: Fereastra 16–18 săptămâni și semnul AFP crescut/scăzut sunt din nota „De reținut”.\n\nFolatul se începe abia după săptămâna 20, deoarece nu influențează închiderea tubului neural — Incorect: Folatul trebuie început preconcepțional, nu după săptămâna 20.\n\nValorile crescute de α-fetoproteină asociază trisomia 21, iar valorile scăzute defectele de tub neural — Incorect: Direcția AFP este inversată: crescut = defecte de tub neural; scăzut = trisomii.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 297, 296, Îngrijirea prenatală — Nutriție și screening (pagini PDF: 75, 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    297,
    296
   ],
   "pdfPages": [
    75,
    74
   ],
   "section": "Îngrijirea prenatală — Nutriție și screening"
  },
  "learningObjective": "Corelarea dozelor de folat și fier cu interpretarea α-fetoproteinei materne.",
  "optionRationales": [
   "Doza și momentul preconcepțional al folatului sunt din Tabelul 13-2.",
   "Cei 30 mg/zi de fier (creștere cu 100%) sunt expliciți.",
   "Fereastra 16–18 săptămâni și semnul AFP crescut/scăzut sunt din nota „De reținut”.",
   "Folatul trebuie început preconcepțional, nu după săptămâna 20.",
   "Direcția AFP este inversată: crescut = defecte de tub neural; scăzut = trisomii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează atât momentul folatului, cât și semnificația AFP crescut versus scăzut."
  },
  "textbookExpressions": [
   "0,4-0,8 mg/zi",
   "16-18 săptămâni"
  ]
 },
 {
  "id": "obstetrica-adv-005",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Diabetul zaharat gestațional:",
  "options": [
   "Este o intoleranță la glucoză cu debut după 24 de săptămâni de gestație",
   "Screening-ul se face de obicei între 24 și 28 de săptămâni, mai devreme dacă există factori de risc",
   "Apare cel mai frecvent în primul trimestru și exclude diabetul preexistent",
   "Insulina se indică pentru a menține glicemia a jeun sub 90 mg/dL când dieta eșuează",
   "Diagnosticul se pune doar pe hemoglobina glicată, fără test de toleranță"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Este o intoleranță la glucoză cu debut după 24 de săptămâni de gestație — Corect: Definiția cu debut după 24 de săptămâni este explicită.\n\nScreening-ul se face de obicei între 24 și 28 de săptămâni, mai devreme dacă există factori de risc — Corect: Intervalul 24–28 de săptămâni, cu screening mai precoce la risc, este citat.\n\nApare cel mai frecvent în primul trimestru și exclude diabetul preexistent — Incorect: Textul plasează DZG în trimestrele doi sau trei; debutul precoce sugerează diabet non-gestațional.\n\nInsulina se indică pentru a menține glicemia a jeun sub 90 mg/dL când dieta eșuează — Corect: Ținta a jeun <90 mg/dL (și postprandial <120 mg/dL la 1 oră) este explicită.\n\nDiagnosticul se pune doar pe hemoglobina glicată, fără test de toleranță — Incorect: Diagnosticul folosește glicemia a jeun >126 mg/dL sau testul de toleranță, nu HbA1c ca test unic.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 299, Complicații medicale — Diabetul gestațional (pagini PDF: 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    299
   ],
   "pdfPages": [
    77
   ],
   "section": "Complicații medicale — Diabetul gestațional"
  },
  "learningObjective": "Plasarea debutului după 24 de săptămâni și a țintelor de insulină, distinct de diabetul pregestational.",
  "optionRationales": [
   "Definiția cu debut după 24 de săptămâni este explicită.",
   "Intervalul 24–28 de săptămâni, cu screening mai precoce la risc, este citat.",
   "Textul plasează DZG în trimestrele doi sau trei; debutul precoce sugerează diabet non-gestațional.",
   "Ținta a jeun <90 mg/dL (și postprandial <120 mg/dL la 1 oră) este explicită.",
   "Diagnosticul folosește glicemia a jeun >126 mg/dL sau testul de toleranță, nu HbA1c ca test unic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută debutul în trimestrul I, unde textul suspicionează tocmai diabetul preexistent."
  },
  "textbookExpressions": [
   "după 24 de săptămâni",
   "24-28 săptămâni"
  ]
 },
 {
  "id": "obstetrica-adv-006",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Preeclampsia:",
  "options": [
   "Se dezvoltă după 20 de săptămâni de gestație, cu hipertensiune și proteinurie sau leziuni de organ țintă",
   "Criteriul tensional cere valori ≥140/90 mm Hg la două măsurători la cel puțin 4 ore distanță",
   "Nașterea este singurul remediu definitiv",
   "Inhibitorii enzimei de conversie sunt antihipertensivele de primă linie în sarcină",
   "Proteinuria diagnostică este sub 30 mg/24 ore"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se dezvoltă după 20 de săptămâni de gestație, cu hipertensiune și proteinurie sau leziuni de organ țintă — Corect: Definiția după 20 de săptămâni este pe pagina anterioară, iar nota reafirmă nașterea ca remediu.\n\nCriteriul tensional cere valori ≥140/90 mm Hg la două măsurători la cel puțin 4 ore distanță — Corect: Cele două măsurători la ≥4 ore sunt explicite.\n\nNașterea este singurul remediu definitiv — Corect: Nota „De reținut” identifică nașterea ca singurul remediu definitiv.\n\nInhibitorii enzimei de conversie sunt antihipertensivele de primă linie în sarcină — Incorect: IECA și BRA sunt teratogene și se evită în sarcină.\n\nProteinuria diagnostică este sub 30 mg/24 ore — Incorect: Pragul de proteinurie citat este ≥300 mg/24 ore sau raport proteine:creatinină >0,3.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 301, 300, Complicații medicale — Preeclampsia (pagini PDF: 79, 78).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    301,
    300
   ],
   "pdfPages": [
    79,
    78
   ],
   "section": "Complicații medicale — Preeclampsia"
  },
  "learningObjective": "Aplicarea pragului de 20 de săptămâni, a criteriului 140/90 și a nașterii ca tratament definitiv.",
  "optionRationales": [
   "Definiția după 20 de săptămâni este pe pagina anterioară, iar nota reafirmă nașterea ca remediu.",
   "Cele două măsurători la ≥4 ore sunt explicite.",
   "Nota „De reținut” identifică nașterea ca singurul remediu definitiv.",
   "IECA și BRA sunt teratogene și se evită în sarcină.",
   "Pragul de proteinurie citat este ≥300 mg/24 ore sau raport proteine:creatinină >0,3."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii recomandă exact clasa teratogenă interzisă și subestimează pragul de proteinurie."
  },
  "textbookExpressions": [
   "Singurul remediu definitiv",
   "IECA"
  ]
 },
 {
  "id": "obstetrica-adv-007",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Eclampsia și sindromul HELLP:",
  "options": [
   "Cefaleea, scotoamele și durerea din etajul abdominal superior preced frecvent convulsiile",
   "Sulfatul de magneziu se continuă 48 de ore după naștere, deoarece 25% din convulsii apar în primele 24 de ore postpartum",
   "HELLP asociază hemoliză, enzime hepatice crescute și trombocitopenie",
   "Diazepamul este ineficace asupra convulsiilor din sarcină",
   "HELLP are mortalitate maternă neglijabilă și prognostic fetal excelent"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cefaleea, scotoamele și durerea din etajul abdominal superior preced frecvent convulsiile — Corect: Prodromul cefalee–scotoame–durere abdominală superioară este explicit.\n\nSulfatul de magneziu se continuă 48 de ore după naștere, deoarece 25% din convulsii apar în primele 24 de ore postpartum — Corect: Continuarea MgSO4 48 de ore și cifra de 25% sunt citate.\n\nHELLP asociază hemoliză, enzime hepatice crescute și trombocitopenie — Corect: Triada hemoliză–enzime hepatice–trombocitopenie este redată în notă.\n\nDiazepamul este ineficace asupra convulsiilor din sarcină — Incorect: Diazepamul poate opri convulsiile, cu eficiență de 80%.\n\nHELLP are mortalitate maternă neglijabilă și prognostic fetal excelent — Incorect: HELLP are prognostic fetal prost și mortalitate maternă de 1%.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 301, Complicații medicale — Eclampsia (pagini PDF: 79).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    301
   ],
   "pdfPages": [
    79
   ],
   "section": "Complicații medicale — Eclampsia"
  },
  "learningObjective": "Recunoașterea pródromului eclamptic, a ferestrei postpartum de convulsii și a triadei HELLP.",
  "optionRationales": [
   "Prodromul cefalee–scotoame–durere abdominală superioară este explicit.",
   "Continuarea MgSO4 48 de ore și cifra de 25% sunt citate.",
   "Triada hemoliză–enzime hepatice–trombocitopenie este redată în notă.",
   "Diazepamul poate opri convulsiile, cu eficiență de 80%.",
   "HELLP are prognostic fetal prost și mortalitate maternă de 1%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii neagă rolul diazepamului, citat cu eficiență 80%, și minimizează gravitatea HELLP."
  },
  "textbookExpressions": [
   "25% din convulsii",
   "Low Platelets"
  ]
 },
 {
  "id": "obstetrica-adv-008",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Sarcina ectopică:",
  "options": [
   "Implantarea este cel mai frecvent în ampula trompei uterine",
   "Forma neruptă sub 6 săptămâni poate fi tratată cu metotrexat",
   "Localizarea cea mai frecventă este ovariană, nu tubară",
   "β-hCG-ul din sarcina intrauterină se înjumătățește la fiecare 48 de ore",
   "Metotrexatul este tratamentul de elecție al formei rupte cu hipotensiune"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Implantarea este cel mai frecvent în ampula trompei uterine — Corect: Ampula (95%) este sediul cel mai frecvent.\n\nForma neruptă sub 6 săptămâni poate fi tratată cu metotrexat — Corect: Metotrexatul este rezervat formei nerupte sub 6 săptămâni.\n\nLocalizarea cea mai frecventă este ovariană, nu tubară — Incorect: Ovarul, colul și cavitatea abdominală sunt localizări posibile, dar nu cele mai frecvente.\n\nβ-hCG-ul din sarcina intrauterină se înjumătățește la fiecare 48 de ore — Incorect: În sarcina intrauterine, β-hCG se dublează la 48 de ore, nu se înjumătățește.\n\nMetotrexatul este tratamentul de elecție al formei rupte cu hipotensiune — Incorect: Forma ruptă instabilă necesită chirurgie de urgență, nu metotrexat.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 305, Complicații obstetricale — Sarcina ectopică (pagini PDF: 83).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    305
   ],
   "pdfPages": [
    83
   ],
   "section": "Complicații obstetricale — Sarcina ectopică"
  },
  "learningObjective": "Corelarea sediului ampullar cu indicația de metotrexat versus chirurgie de urgență.",
  "optionRationales": [
   "Ampula (95%) este sediul cel mai frecvent.",
   "Metotrexatul este rezervat formei nerupte sub 6 săptămâni.",
   "Ovarul, colul și cavitatea abdominală sunt localizări posibile, dar nu cele mai frecvente.",
   "În sarcina intrauterine, β-hCG se dublează la 48 de ore, nu se înjumătățește.",
   "Forma ruptă instabilă necesită chirurgie de urgență, nu metotrexat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează cinetică β-hCG și aplică metotrexatul tocmai formei rupte."
  },
  "textbookExpressions": [
   "ampula trompei uterine",
   "metotrexat"
  ]
 },
 {
  "id": "obstetrica-adv-009",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Indexul lichidului amniotic care definește oligoamniosul este:",
  "options": [
   "Sub 5 cm",
   "Peste 25 cm",
   "Între 8 și 18 cm",
   "Peste 8 cm într-un singur buzunar, cu index total normal",
   "Sub 15 cm, dar cu un cadran de 4 cm"
  ],
  "correct": [
   0
  ],
  "explanation": "Sub 5 cm — Corect: Oligoamniosul este definit prin ILA <5 cm, fără cadran peste 2 cm.\n\nPeste 25 cm — Incorect: ILA >25 cm definește hidramniosul.\n\nÎntre 8 și 18 cm — Incorect: Intervalul 8–18 cm nu este pragul de oligoamnios.\n\nPeste 8 cm într-un singur buzunar, cu index total normal — Incorect: Buzunarul de cel puțin 8 cm aparține criteriilor de hidramnios.\n\nSub 15 cm, dar cu un cadran de 4 cm — Incorect: Pragul citat este <5 cm, nu <15 cm.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 307, Complicații obstetricale — Oligoamnios (pagini PDF: 85).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    307
   ],
   "pdfPages": [
    85
   ],
   "section": "Complicații obstetricale — Oligoamnios"
  },
  "learningObjective": "Memorarea pragurilor ILA care separă oligoamniosul de hidramnios.",
  "optionRationales": [
   "Oligoamniosul este definit prin ILA <5 cm, fără cadran peste 2 cm.",
   "ILA >25 cm definește hidramniosul.",
   "Intervalul 8–18 cm nu este pragul de oligoamnios.",
   "Buzunarul de cel puțin 8 cm aparține criteriilor de hidramnios.",
   "Pragul citat este <5 cm, nu <15 cm."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt pragurile reale de hidramnios sau valori intermediare, ușor de inversat."
  },
  "textbookExpressions": [
   "indexul lichidului amniotic <5 cm",
   ">25 cm"
  ]
 },
 {
  "id": "obstetrica-adv-010",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Ruptura prematură de membrane:",
  "options": [
   "Examinarea microscopică arată „semnul ferigii” dacă este lichid amniotic",
   "Hârtia de nitrazină virează în albastru în prezența lichidului amniotic",
   "Raportul lecitină/sfingomielină peste 2, cu fosfatidilglicerol prezent, sugerează maturitate pulmonară",
   "Tactul vaginal se repetă frecvent pentru a urmări dilatația",
   "După 34 de săptămâni se evită antibioticele și se prelungește sarcina până la 40 de săptămâni"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Examinarea microscopică arată „semnul ferigii” dacă este lichid amniotic — Corect: Semnul ferigii este explicit.\n\nHârtia de nitrazină virează în albastru în prezența lichidului amniotic — Corect: Virajul nitrazinei în albastru este citat.\n\nRaportul lecitină/sfingomielină peste 2, cu fosfatidilglicerol prezent, sugerează maturitate pulmonară — Corect: L:S >2 cu FG prezent sugerează maturitate pulmonară.\n\nTactul vaginal se repetă frecvent pentru a urmări dilatația — Incorect: Tactul vaginal se evită din cauza riscului de a introduce germeni.\n\nDupă 34 de săptămâni se evită antibioticele și se prelungește sarcina până la 40 de săptămâni — Incorect: După 34 de săptămâni se administrează antibiotice și se induce nașterea.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 308, Complicații obstetricale — PROM (pagini PDF: 86).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    308
   ],
   "pdfPages": [
    86
   ],
   "section": "Complicații obstetricale — PROM"
  },
  "learningObjective": "Recunoașterea testelor de confirmare a lichidului amniotic și a pragului de maturitate pulmonară.",
  "optionRationales": [
   "Semnul ferigii este explicit.",
   "Virajul nitrazinei în albastru este citat.",
   "L:S >2 cu FG prezent sugerează maturitate pulmonară.",
   "Tactul vaginal se evită din cauza riscului de a introduce germeni.",
   "După 34 de săptămâni se administrează antibiotice și se induce nașterea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii recomandă tactul vaginal, pe care textul îl interzice, și amână inducția după 34 de săptămâni."
  },
  "textbookExpressions": [
   "semnul ferigii",
   "L:S >2"
  ]
 },
 {
  "id": "obstetrica-adv-011",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Sângerarea vaginală din trimestrul al treilea:",
  "options": [
   "Placenta praevia produce sângerare nedureroasă",
   "Abruptio placentae produce sângerare însoțită de durere și tonus uterin crescut",
   "Nu se efectuează tact vaginal până când nu este exclusă placenta praevia",
   "Placenta praevia produce sângerare dureroasă, iar abruptio este nedureroasă",
   "Nașterea vaginală este calea de elecție în placenta praevia centrală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Placenta praevia produce sângerare nedureroasă — Corect: Sângerarea nedureroasă din trimestrul III definește placenta praevia.\n\nAbruptio placentae produce sângerare însoțită de durere și tonus uterin crescut — Corect: Durerea, hipertonia și hipotensiunea definesc abruptio.\n\nNu se efectuează tact vaginal până când nu este exclusă placenta praevia — Corect: Nota interzice examinarea vaginală până la excluderea praeviei.\n\nPlacenta praevia produce sângerare dureroasă, iar abruptio este nedureroasă — Incorect: Direcția durere/fără durere este inversată.\n\nNașterea vaginală este calea de elecție în placenta praevia centrală — Incorect: Nașterea în praevia se face prin cezariană; vaginal doar în forma jos inserată.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 309, 310, Complicații obstetricale — Placenta praevia și abruptio (pagini PDF: 87, 88).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    309,
    310
   ],
   "pdfPages": [
    87,
    88
   ],
   "section": "Complicații obstetricale — Placenta praevia și abruptio"
  },
  "learningObjective": "Diferențierea sângerării nedureroase de cea dureroasă și evitarea tactului vaginal.",
  "optionRationales": [
   "Sângerarea nedureroasă din trimestrul III definește placenta praevia.",
   "Durerea, hipertonia și hipotensiunea definesc abruptio.",
   "Nota interzice examinarea vaginală până la excluderea praeviei.",
   "Direcția durere/fără durere este inversată.",
   "Nașterea în praevia se face prin cezariană; vaginal doar în forma jos inserată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează caracterul dureros al sângerării și recomandă naștere vaginală în praevia centrală."
  },
  "textbookExpressions": [
   "sângerare vaginală nedureroasă",
   "dezlipirea prematură"
  ]
 },
 {
  "id": "obstetrica-adv-012",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Decelerațiile frecvenței cardiace fetale:",
  "options": [
   "Cele precoce coincid cu contracția și reflectă compresia capului, fără a fi semn de suferință",
   "Cele tardive încep după contracție și sugerează insuficiență uteroplacentară",
   "Cele variabile au debut, durată și amplitudine variabile și reflectă compresia cordonului",
   "Cele precoce impun naștere imediată, fiind semn de hipoxie",
   "Cele tardive se tratează doar prin schimbarea poziției mamei, ca în compresia de cordon"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cele precoce coincid cu contracția și reflectă compresia capului, fără a fi semn de suferință — Corect: Tabelul 13-10 leagă decelerațiile precoce de compresia capului, fără suferință.\n\nCele tardive încep după contracție și sugerează insuficiență uteroplacentară — Corect: Tardivele reflectă insuficiență uteroplacentară și pot indica hipoxie.\n\nCele variabile au debut, durată și amplitudine variabile și reflectă compresia cordonului — Corect: Variabilele corespund compresiei de cordon.\n\nCele precoce impun naștere imediată, fiind semn de hipoxie — Incorect: Nașterea imediată este rezervată tardivelor recurente sau hipoxiei, nu preocelor.\n\nCele tardive se tratează doar prin schimbarea poziției mamei, ca în compresia de cordon — Incorect: Schimbarea poziției este tratamentul variabilelor, nu al tardivelor.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 311, Travaliu — Monitorizarea fetală (pagini PDF: 89).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    311
   ],
   "pdfPages": [
    89
   ],
   "section": "Travaliu — Monitorizarea fetală"
  },
  "learningObjective": "Asocierea fiecărui tip de decelerație cu mecanismul și cu urgența obstetricală.",
  "optionRationales": [
   "Tabelul 13-10 leagă decelerațiile precoce de compresia capului, fără suferință.",
   "Tardivele reflectă insuficiență uteroplacentară și pot indica hipoxie.",
   "Variabilele corespund compresiei de cordon.",
   "Nașterea imediată este rezervată tardivelor recurente sau hipoxiei, nu preocelor.",
   "Schimbarea poziției este tratamentul variabilelor, nu al tardivelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică urgența tardivelor asupra preocelor și tratamentul variabilelor asupra tardivelor."
  },
  "textbookExpressions": [
   "Compresia capului fetal",
   "Compresia cordonului ombilical"
  ]
 },
 {
  "id": "obstetrica-adv-013",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Hemoragia postpartum:",
  "options": [
   "Pragul anormal este peste 500 mL/24 ore după naștere vaginală sau peste 1.000 mL/24 ore după cezariană",
   "Cauza cea mai frecventă este atonia uterină",
   "Masajul uterin și oxitocina cresc tonusul; metilergometrina este contraindicată în hipertensiune, iar carboprostul în astm",
   "Resturile placentare se evacuează prin dilatare și chiuretaj",
   "Tratamentul de primă intenție este histerectomia, înaintea uterotonicelor"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Pragul anormal este peste 500 mL/24 ore după naștere vaginală sau peste 1.000 mL/24 ore după cezariană — Corect: Cei 500 mL, respectiv 1.000 mL, sunt pragurile din text.\n\nCauza cea mai frecventă este atonia uterină — Corect: Atonia este cauza majorității cazurilor.\n\nMasajul uterin și oxitocina cresc tonusul; metilergometrina este contraindicată în hipertensiune, iar carboprostul în astm — Corect: Oxitocina, metilergometrina (evitată în HTA) și carboprostul (evitat în astm) sunt citați.\n\nResturile placentare se evacuează prin dilatare și chiuretaj — Corect: D&C elimină resturile placentare.\n\nTratamentul de primă intenție este histerectomia, înaintea uterotonicelor — Incorect: Histerectomia este rezervată cazurilor severe sau refractare, după uterotonice.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 315, Lauzia — Hemoragia postpartum (pagini PDF: 93).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    315
   ],
   "pdfPages": [
    93
   ],
   "section": "Lauzia — Hemoragia postpartum"
  },
  "learningObjective": "Aplicarea pragurilor de sânge, a atoniei ca etiologie principală și a contraindicațiilor uterotonicelor.",
  "optionRationales": [
   "Cei 500 mL, respectiv 1.000 mL, sunt pragurile din text.",
   "Atonia este cauza majorității cazurilor.",
   "Oxitocina, metilergometrina (evitată în HTA) și carboprostul (evitat în astm) sunt citați.",
   "D&C elimină resturile placentare.",
   "Histerectomia este rezervată cazurilor severe sau refractare, după uterotonice."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul sare la histerectomie, omițând masajul și uterotonicele care sunt prima linie."
  },
  "textbookExpressions": [
   ">500 mL/24 ore",
   "atoniei uterine"
  ]
 },
 {
  "id": "obstetrica-adv-014",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Mola hidatiformă:",
  "options": [
   "Forma completă are genotip 46XX sau 46XY, cu ambele seturi cromozomiale paterne",
   "Forma incompletă este 69XXY, 69XXX sau 69XYY și poate asocia un făt anormal",
   "Ecografia arată aspect de „furtună de zăpadă”",
   "β-hCG este mai mare decât cel așteptat pentru vârsta gestațională",
   "Diagnosticul de elecție este metotrexatul, fără evacuare uterină"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Forma completă are genotip 46XX sau 46XY, cu ambele seturi cromozomiale paterne — Corect: Cariotipul 46XX/46XY paternal definește mola completă.\n\nForma incompletă este 69XXY, 69XXX sau 69XYY și poate asocia un făt anormal — Corect: Triploidia 69 cu făt anormal definește forma incompletă.\n\nEcografia arată aspect de „furtună de zăpadă” — Corect: Aspectul de furtună de zăpadă este explicit.\n\nβ-hCG este mai mare decât cel așteptat pentru vârsta gestațională — Corect: β-hCG disproporționat de mare este citat.\n\nDiagnosticul de elecție este metotrexatul, fără evacuare uterină — Incorect: Tratamentul este D&C, cu supravegherea β-hCG, nu metotrexat ca primă linie a molei.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 316, Boala trofoblastică — Mola hidatiformă (pagini PDF: 94).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    316
   ],
   "pdfPages": [
    94
   ],
   "section": "Boala trofoblastică — Mola hidatiformă"
  },
  "learningObjective": "Diferențierea molei complete de cea incompletă și recunoașterea imaginii de furtună de zăpadă.",
  "optionRationales": [
   "Cariotipul 46XX/46XY paternal definește mola completă.",
   "Triploidia 69 cu făt anormal definește forma incompletă.",
   "Aspectul de furtună de zăpadă este explicit.",
   "β-hCG disproporționat de mare este citat.",
   "Tratamentul este D&C, cu supravegherea β-hCG, nu metotrexat ca primă linie a molei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul aplică chimioterapia coriocarcinomului asupra molei, a cărei evacuare este D&C."
  },
  "textbookExpressions": [
   "furtună de zăpadă",
   "46 XX"
  ]
 },
 {
  "id": "obstetrica-adv-015",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Teratogenii în sarcină:",
  "options": [
   "În primele 2 săptămâni fie ucid fătul, fie nu au niciun efect",
   "Pot determina organogeneză anormală între 2 și 12 săptămâni",
   "Produc malformații maxime după săptămâna 28, când SNC este deja matur",
   "Sunt fără efect între săptămânile 2 și 12, perioada fiind „mută”",
   "Înlocuiesc regula lui Naegele în calculul datei nașterii"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "În primele 2 săptămâni fie ucid fătul, fie nu au niciun efect — Corect: Fereastra de 2 săptămâni (moarte sau fără efect) este din notă.\n\nPot determina organogeneză anormală între 2 și 12 săptămâni — Corect: Organogeneza anormală între 2 și 12 săptămâni este explicită.\n\nProduc malformații maxime după săptămâna 28, când SNC este deja matur — Incorect: După 28 de săptămâni SNC este descris ca matur, nu ca fereastră de malformație maximă.\n\nSunt fără efect între săptămânile 2 și 12, perioada fiind „mută” — Incorect: Intervalul 2–12 săptămâni este tocmai fereastra de organogeneză.\n\nÎnlocuiesc regula lui Naegele în calculul datei nașterii — Incorect: Regula lui Naegele estimează data nașterii, independent de teratogeni.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 295, Fiziologia sarcinii — Teratogeni (pagini PDF: 73).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    295
   ],
   "pdfPages": [
    73
   ],
   "section": "Fiziologia sarcinii — Teratogeni"
  },
  "learningObjective": "Aplicarea ferestrelor: totul-sau-nimic în primele 2 săptămâni versus organogeneza 2–12 săptămâni.",
  "optionRationales": [
   "Fereastra de 2 săptămâni (moarte sau fără efect) este din notă.",
   "Organogeneza anormală între 2 și 12 săptămâni este explicită.",
   "După 28 de săptămâni SNC este descris ca matur, nu ca fereastră de malformație maximă.",
   "Intervalul 2–12 săptămâni este tocmai fereastra de organogeneză.",
   "Regula lui Naegele estimează data nașterii, independent de teratogeni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează fereastra critică 2–12 săptămâni și o mută după maturarea SNC."
  },
  "textbookExpressions": [
   "primele 2 săptă￾mâni",
   "2 şi 12"
  ]
 },
 {
  "id": "obstetrica-adv-016",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Activitățile cu risc scăzut în sarcină, conform textului, includ:",
  "options": [
   "Exerciții fizice de intensitate moderată",
   "Relații sexuale, în absența riscului crescut de avort, naștere prematură sau placentă praevia",
   "Relații sexuale în placenta praevia centrală, pentru a grăbi dilatația",
   "Efort fizic maximal de performanță, indiferent de simptome",
   "Tact vaginal repetat în suspiciunea de praevia"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Exerciții fizice de intensitate moderată — Corect: Exercițiile moderate sunt încurajate explicit.\n\nRelații sexuale, în absența riscului crescut de avort, naștere prematură sau placentă praevia — Corect: Contactul sexual este permis cu cele trei excepții.\n\nRelații sexuale în placenta praevia centrală, pentru a grăbi dilatația — Incorect: Praevia este o contraindicație citată, nu o indicație.\n\nEfort fizic maximal de performanță, indiferent de simptome — Incorect: Textul limitează la intensitate moderată.\n\nTact vaginal repetat în suspiciunea de praevia — Incorect: Tactul vaginal în praevia este evitat în capitolul de sângerare din trimestrul III.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 295, Fiziologia sarcinii — Activitate fizică și sexuală (pagini PDF: 73).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    295
   ],
   "pdfPages": [
    73
   ],
   "section": "Fiziologia sarcinii — Activitate fizică și sexuală"
  },
  "learningObjective": "Recunoașterea încurajării efortului moderat și a excepțiilor (praevia, avort, prematuritate) pentru contactul sexual.",
  "optionRationales": [
   "Exercițiile moderate sunt încurajate explicit.",
   "Contactul sexual este permis cu cele trei excepții.",
   "Praevia este o contraindicație citată, nu o indicație.",
   "Textul limitează la intensitate moderată.",
   "Tactul vaginal în praevia este evitat în capitolul de sângerare din trimestrul III."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă excepțiile (praevia) în indicații și recomandă tactul interzis."
  },
  "textbookExpressions": [
   "intensitate",
   "placentă praevia"
  ]
 },
 {
  "id": "obstetrica-adv-017",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Cea mai precisă metodă de determinare a vârstei gestaționale în primul trimestru este:",
  "options": [
   "Ultrasonografia lungimii cranio-caudale, cu acuratețe de ±3–5 zile în săptămânile 7–14",
   "Înălțimea fundului uterin, cu precizie de ±3 săptămâni",
   "Doar diametrul biparietal, fără alte măsurători",
   "Regula lui Naegele aplicată pe data fertilizării",
   "Testul de toleranță la 50 g glucoză"
  ],
  "correct": [
   0
  ],
  "explanation": "Ultrasonografia lungimii cranio-caudale, cu acuratețe de ±3–5 zile în săptămânile 7–14 — Corect: CRL este descris ca cea mai precisă metodă, ±3–5 zile.\n\nÎnălțimea fundului uterin, cu precizie de ±3 săptămâni — Incorect: Fundul uterin după 20 de săptămâni are precizie ±3 săptămâni.\n\nDoar diametrul biparietal, fără alte măsurători — Incorect: În trimestrul II se combină mai multe măsurători, nu doar DBP în trimestrul I.\n\nRegula lui Naegele aplicată pe data fertilizării — Incorect: Naegele pornește de la DUM, nu de la fertilizare.\n\nTestul de toleranță la 50 g glucoză — Incorect: Testul de 50 g este screeningul DZG, nu datarea.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 296, Evaluarea vârstei gestaționale — Primul trimestru (pagini PDF: 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    296
   ],
   "pdfPages": [
    74
   ],
   "section": "Evaluarea vârstei gestaționale — Primul trimestru"
  },
  "learningObjective": "Ierarhizarea preciziei: CRL în trimestrul I versus fundul uterin după 20 de săptămâni.",
  "optionRationales": [
   "CRL este descris ca cea mai precisă metodă, ±3–5 zile.",
   "Fundul uterin după 20 de săptămâni are precizie ±3 săptămâni.",
   "În trimestrul II se combină mai multe măsurători, nu doar DBP în trimestrul I.",
   "Naegele pornește de la DUM, nu de la fertilizare.",
   "Testul de 50 g este screeningul DZG, nu datarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt metode reale de datare sau de screening, cu precizii diferite."
  },
  "textbookExpressions": [
   "lungimii cranio-caudale",
   "±3-5 zile"
  ]
 },
 {
  "id": "obstetrica-adv-018",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "După 20 de săptămâni, înălțimea fundului uterin:",
  "options": [
   "Estimează vârsta gestațională cu o precizie de ±3 săptămâni",
   "Este afectată ca precizie de fibroame și de obezitatea maternă",
   "În trimestrul I înlocuiește lungimea cranio-caudală ca metodă cea mai precisă",
   "Are acuratețe de ±3–5 zile, identică ecografiei de trimestrul I",
   "Nu este influențată de fibroamele uterine"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Estimează vârsta gestațională cu o precizie de ±3 săptămâni — Corect: Precizia ±3 săptămâni este explicită.\n\nEste afectată ca precizie de fibroame și de obezitatea maternă — Corect: Fibroamele și obezitatea afectează măsurătoarea.\n\nÎn trimestrul I înlocuiește lungimea cranio-caudală ca metodă cea mai precisă — Incorect: Cea mai precisă în trimestrul I rămâne CRL.\n\nAre acuratețe de ±3–5 zile, identică ecografiei de trimestrul I — Incorect: ±3–5 zile este acuratețea CRL, nu a fundului uterin.\n\nNu este influențată de fibroamele uterine — Incorect: Textul precizează că fibroamele afectează precizia.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 296, Evaluarea vârstei gestaționale — Fundul uterin (pagini PDF: 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    296
   ],
   "pdfPages": [
    74
   ],
   "section": "Evaluarea vârstei gestaționale — Fundul uterin"
  },
  "learningObjective": "Recunoașterea preciziei ±3 săptămâni și a limitelor (fibroame, obezitate).",
  "optionRationales": [
   "Precizia ±3 săptămâni este explicită.",
   "Fibroamele și obezitatea afectează măsurătoarea.",
   "Cea mai precisă în trimestrul I rămâne CRL.",
   "±3–5 zile este acuratețea CRL, nu a fundului uterin.",
   "Textul precizează că fibroamele afectează precizia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie fundului uterin precizia CRL și neagă interferența fibroamelor."
  },
  "textbookExpressions": [
   "±3 săptămâni",
   "Fibroamele"
  ]
 },
 {
  "id": "obstetrica-adv-019",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Modificările renale normale din sarcină includ:",
  "options": [
   "Creșterea fluxului plasmatic renal și a ratei de filtrare glomerulară cu 40%",
   "Scăderea BUN și a creatininei",
   "Creșterea pierderii renale de bicarbonat, pentru a compensa alcaloza respiratorie",
   "Creșterea excreției renale de proteine",
   "Scăderea RFG cu 40%, cu creșterea creatininei peste intervalul de referință"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Creșterea fluxului plasmatic renal și a ratei de filtrare glomerulară cu 40% — Corect: Creșterea cu 40% a FPR și RFG este din tabel.\n\nScăderea BUN și a creatininei — Corect: Scăderea BUN și creatininei este explicită.\n\nCreșterea pierderii renale de bicarbonat, pentru a compensa alcaloza respiratorie — Corect: Pierderea de bicarbonat compensează alcaloza respiratorie.\n\nCreșterea excreției renale de proteine — Corect: Textul precizează creșterea excreției renale de proteine.\n\nScăderea RFG cu 40%, cu creșterea creatininei peste intervalul de referință — Incorect: RFG crește, nu scade; creatinina scade.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 296, Fiziologia sarcinii — Modificări renale (pagini PDF: 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    296
   ],
   "pdfPages": [
    74
   ],
   "section": "Fiziologia sarcinii — Modificări renale"
  },
  "learningObjective": "Corelarea hiperdinamicii renale (+40%) cu scăderea BUN/creatininei, pierderea de bicarbonat și proteinuria fiziologică.",
  "optionRationales": [
   "Creșterea cu 40% a FPR și RFG este din tabel.",
   "Scăderea BUN și creatininei este explicită.",
   "Pierderea de bicarbonat compensează alcaloza respiratorie.",
   "Textul precizează creșterea excreției renale de proteine.",
   "RFG crește, nu scade; creatinina scade."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează semnul modificării RFG/creatininei, o capcană clasică de „valori normale de adult”."
  },
  "textbookExpressions": [
   "40%",
   "alcaloza respiratorie"
  ]
 },
 {
  "id": "obstetrica-adv-020",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Modificările hematologice normale din sarcină includ:",
  "options": [
   "Hipercoagulabilitate",
   "Creșterea producției de eritrocite",
   "Scăderea hematocritului prin creșterea volumului sanguin",
   "Creșterea volumului sanguin și a lichidului interstițial",
   "Creșterea hematocritului, deoarece volumul sanguin scade"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Hipercoagulabilitate — Corect: Hipercoagulabilitatea este din tabel.\n\nCreșterea producției de eritrocite — Corect: Producția de eritrocite crește.\n\nScăderea hematocritului prin creșterea volumului sanguin — Corect: Hematocritul scade prin volumul crescut.\n\nCreșterea volumului sanguin și a lichidului interstițial — Corect: Creșterea volumului sanguin și a lichidului interstițial este din același tabel.\n\nCreșterea hematocritului, deoarece volumul sanguin scade — Incorect: Direcția hematocrit–volum este inversată.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 296, Fiziologia sarcinii — Modificări hematologice (pagini PDF: 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    296
   ],
   "pdfPages": [
    74
   ],
   "section": "Fiziologia sarcinii — Modificări hematologice"
  },
  "learningObjective": "Recunoașterea stării procoagulante, a expansiunii volemice și a anemiei diluționale, deși eritropoieza crește.",
  "optionRationales": [
   "Hipercoagulabilitatea este din tabel.",
   "Producția de eritrocite crește.",
   "Hematocritul scade prin volumul crescut.",
   "Creșterea volumului sanguin și a lichidului interstițial este din același tabel.",
   "Direcția hematocrit–volum este inversată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează diluția hematocritului și neagă murmurul hiperdinamic, deja folosit în itemul de CV al băncii A."
  },
  "textbookExpressions": [
   "Hipercoag ula bi litate",
   "Hematocritul scade"
  ]
 },
 {
  "id": "obstetrica-adv-021",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "La screeningul cvadruplu, trisomia 21 se asociază cu:",
  "options": [
   "α-fetoproteină scăzută",
   "Estriol scăzut",
   "hCG crescut și inhibină A crescută",
   "hCG scăzut și inhibină A scăzută, ca în trisomia 18",
   "PAPP-A crescută în primul trimestru, fără modificarea translucenței nuchale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "α-fetoproteină scăzută — Corect: Tabelul arată AFP scăzută în T21.\n\nEstriol scăzut — Corect: uE3 scăzut este citat.\n\nhCG crescut și inhibină A crescută — Corect: hCG și inhibina A crescute completează pattern-ul.\n\nhCG scăzut și inhibină A scăzută, ca în trisomia 18 — Incorect: hCG și inhibina scăzute caracterizează trisomia 18.\n\nPAPP-A crescută în primul trimestru, fără modificarea translucenței nuchale — Incorect: În primul trimestru, PAPP-A scade, iar translucența nuchală crește.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 299, Îngrijirea prenatală — Screeningul genetic (pagini PDF: 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    299
   ],
   "pdfPages": [
    77
   ],
   "section": "Îngrijirea prenatală — Screeningul genetic"
  },
  "learningObjective": "Memorarea pattern-ului Down la cvadruplu (AFP↓, uE3↓, hCG↑, InhA↑).",
  "optionRationales": [
   "Tabelul arată AFP scăzută în T21.",
   "uE3 scăzut este citat.",
   "hCG și inhibina A crescute completează pattern-ul.",
   "hCG și inhibina scăzute caracterizează trisomia 18.",
   "În primul trimestru, PAPP-A scade, iar translucența nuchală crește."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pattern-urile T21 versus T18 sunt oglindite la hCG/inhibină; distractorii le inversează."
  },
  "textbookExpressions": [
   "Trisomia 21",
   "lnhA"
  ]
 },
 {
  "id": "obstetrica-adv-022",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Diabetul zaharat pregestațional în sarcină:",
  "options": [
   "Poate asocia defecte cardiace fetale, inclusiv transpoziția marilor vase și tetralogia Fallot",
   "Complicațiile fetale includ agenezia de sacru, defecte de tub neural și agenezie renală",
   "Ecocardiografia fetală, mai ales în trimestrul III, este folosită pentru anomalii cardiace și de creștere",
   "Apare doar după 24 de săptămâni și exclude malformațiile de organogeneză",
   "Metforminul înlocuiește insulina în tot diabetul de tip I din sarcină"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Poate asocia defecte cardiace fetale, inclusiv transpoziția marilor vase și tetralogia Fallot — Corect: Transpoziția și Fallot sunt citate.\n\nComplicațiile fetale includ agenezia de sacru, defecte de tub neural și agenezie renală — Corect: Agenezia de sacru, DTN și agenezia renală sunt enumerate.\n\nEcocardiografia fetală, mai ales în trimestrul III, este folosită pentru anomalii cardiace și de creștere — Corect: US și ecocardiografia, mai ales în trimestrul III, sunt indicate.\n\nApare doar după 24 de săptămâni și exclude malformațiile de organogeneză — Incorect: DZG apare după 24 de săptămâni; malformațiile țin de diabetul preexistent.\n\nMetforminul înlocuiește insulina în tot diabetul de tip I din sarcină — Incorect: Insulina este cerută în tipul I necontrolat; textul nu înlocuiește insulina cu metformin în tot tipul I.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 300, Complicații medicale — Diabetul pregestațional (pagini PDF: 78).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    300
   ],
   "pdfPages": [
    78
   ],
   "section": "Complicații medicale — Diabetul pregestațional"
  },
  "learningObjective": "Recunoașterea spectrului malformativ (sacru, cord, tub neural) al hiperglicemiei periconcepționale.",
  "optionRationales": [
   "Transpoziția și Fallot sunt citate.",
   "Agenezia de sacru, DTN și agenezia renală sunt enumerate.",
   "US și ecocardiografia, mai ales în trimestrul III, sunt indicate.",
   "DZG apare după 24 de săptămâni; malformațiile țin de diabetul preexistent.",
   "Insulina este cerută în tipul I necontrolat; textul nu înlocuiește insulina cu metformin în tot tipul I."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută malformațiile pe DZG (debut tardiv) și scot insulina din tipul I."
  },
  "textbookExpressions": [
   "agenezie de sacru",
   "tetralogia"
  ]
 },
 {
  "id": "obstetrica-adv-023",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "La testul de toleranță de 1 oră din screeningul DZG, doza de glucoză administrată mamei este de:",
  "options": [
   "50 g",
   "75 g",
   "100 g",
   "25 g",
   "150 g"
  ],
  "correct": [
   0
  ],
  "explanation": "50 g — Corect: Figura indică 50 g la testul de 1 oră.\n\n75 g — Incorect: 75 g nu este doza citată în figură.\n\n100 g — Incorect: 100 g este doza testului de 3 ore.\n\n25 g — Incorect: 25 g este o jumătate necitata.\n\n150 g — Incorect: 150 g depășește ambele doze din protocol.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 300, Complicații medicale — Screeningul DZG (pagini PDF: 78).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    300
   ],
   "pdfPages": [
    78
   ],
   "section": "Complicații medicale — Screeningul DZG"
  },
  "learningObjective": "Diferențierea dozei de 50 g a testului de 1 oră de doza de 100 g a testului de 3 ore.",
  "optionRationales": [
   "Figura indică 50 g la testul de 1 oră.",
   "75 g nu este doza citată în figură.",
   "100 g este doza testului de 3 ore.",
   "25 g este o jumătate necitata.",
   "150 g depășește ambele doze din protocol."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "50 g versus 100 g sunt dozele reale ale celor două trepte, ușor de inversat."
  },
  "textbookExpressions": [
   "1 oră",
   "100 g"
  ]
 },
 {
  "id": "obstetrica-adv-024",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Testul de toleranță la 3 ore (100 g) este considerat anormal dacă sunt prezente cel puțin două dintre:",
  "options": [
   "Glicemia a jeun ≥95 mg/dL",
   "Valoarea la 1 oră ≥180 mg/dL",
   "Valoarea la 3 ore ≥140 mg/dL",
   "O singură valoare a jeun ≥70 mg/dL",
   "Doza folosită este de 50 g, identică testului de 1 oră"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Glicemia a jeun ≥95 mg/dL — Corect: Pragul a jeun ≥95 este din figură (OCR: <!95).\n\nValoarea la 1 oră ≥180 mg/dL — Corect: ≥180 la 1 oră este citat.\n\nValoarea la 3 ore ≥140 mg/dL — Corect: ≥140 la 3 ore este citat.\n\nO singură valoare a jeun ≥70 mg/dL — Incorect: 70 mg/dL nu este pragul de diagnostic.\n\nDoza folosită este de 50 g, identică testului de 1 oră — Incorect: Doza este 100 g, nu 50 g.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 300, Complicații medicale — Testul de 3 ore (pagini PDF: 78).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    300
   ],
   "pdfPages": [
    78
   ],
   "section": "Complicații medicale — Testul de 3 ore"
  },
  "learningObjective": "Aplicarea pragurilor 95/180/140 și a regulii a două valori anormale.",
  "optionRationales": [
   "Pragul a jeun ≥95 este din figură (OCR: <!95).",
   "≥180 la 1 oră este citat.",
   "≥140 la 3 ore este citat.",
   "70 mg/dL nu este pragul de diagnostic.",
   "Doza este 100 g, nu 50 g."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pragurile succesive 95/180/150/140 sunt ușor de amestecat, iar doza 50/100 g se inversează frecvent."
  },
  "textbookExpressions": [
   "100 g",
   "3 ore"
  ]
 },
 {
  "id": "obstetrica-adv-025",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "În preeclampsia severă, departe de termen, țintele tensionale citate sunt:",
  "options": [
   "Menținerea tensiunii sub 155/105 mm Hg, cu TAD peste 90 mm Hg",
   "Labetalolul este un antihipertensiv frecvent utilizat",
   "MgSO4 intravenos se administrează pentru profilaxia convulsiilor",
   "Inhibitorii enzimei de conversie sunt de primă linie",
   "Proteinuria diagnostică este sub 30 mg/24 ore"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Menținerea tensiunii sub 155/105 mm Hg, cu TAD peste 90 mm Hg — Corect: Ținta <155/105 cu TAD >90 este explicită.\n\nLabetalolul este un antihipertensiv frecvent utilizat — Corect: Labetalolul este citat.\n\nMgSO4 intravenos se administrează pentru profilaxia convulsiilor — Corect: MgSO4 IV pentru profilaxia convulsiilor este descris.\n\nInhibitorii enzimei de conversie sunt de primă linie — Incorect: IECA sunt evitate în sarcină (capitolul leagă teratogenitatea de alte pasaje; aici se folosesc labetalol/metildopa/BCC).\n\nProteinuria diagnostică este sub 30 mg/24 ore — Incorect: Pragul de proteinurie este ≥300 mg/24 ore, nu <30 mg.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 301, Complicații medicale — Preeclampsia (pagini PDF: 79).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    301
   ],
   "pdfPages": [
    79
   ],
   "section": "Complicații medicale — Preeclampsia"
  },
  "learningObjective": "Aplicarea țintei 155/105, a labetalolului și a magneziului, fără IECA.",
  "optionRationales": [
   "Ținta <155/105 cu TAD >90 este explicită.",
   "Labetalolul este citat.",
   "MgSO4 IV pentru profilaxia convulsiilor este descris.",
   "IECA sunt evitate în sarcină (capitolul leagă teratogenitatea de alte pasaje; aici se folosesc labetalol/metildopa/BCC).",
   "Pragul de proteinurie este ≥300 mg/24 ore, nu <30 mg."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reintroduc IECA și subestimează pragul de proteinurie, capcane din itemele băncii A."
  },
  "textbookExpressions": [
   "155/105",
   "labetalolul"
  ]
 },
 {
  "id": "obstetrica-adv-026",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Avorturile spontane:",
  "options": [
   "Se definesc ca terminarea non-electivă a sarcinii sub 20 de săptămâni",
   "Cele din primul trimestru sunt de obicei rezultatul unor anomalii cromozomiale (în special trisomii)",
   "Apar în până la 25% din sarcini",
   "Cele din trimestrul I sunt aproape tot timpul prin incontinență cervico-istmică, nu prin aneuploidie",
   "β-hCG este produs de decidua maternă, nu de sincițiotrofoblast"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se definesc ca terminarea non-electivă a sarcinii sub 20 de săptămâni — Corect: Definiția <20 săptămâni este explicită.\n\nCele din primul trimestru sunt de obicei rezultatul unor anomalii cromozomiale (în special trisomii) — Corect: Trisomiiile ca și cauză de trimestrul I sunt citate.\n\nApar în până la 25% din sarcini — Corect: Nota indică până la 25%.\n\nCele din trimestrul I sunt aproape tot timpul prin incontinență cervico-istmică, nu prin aneuploidie — Incorect: Incontinența cervico-istmică este cauză de trimestrul II, nu I.\n\nβ-hCG este produs de decidua maternă, nu de sincițiotrofoblast — Incorect: Nota precizează că β-hCG este produs de sincițiotrofoblast.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 305, Complicații obstetricale — Avortul spontan (pagini PDF: 83).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    305
   ],
   "pdfPages": [
    83
   ],
   "section": "Complicații obstetricale — Avortul spontan"
  },
  "learningObjective": "Aplicarea pragului de 20 de săptămâni, a cauzei aneuploide și a ponderii de până la 25%.",
  "optionRationales": [
   "Definiția <20 săptămâni este explicită.",
   "Trisomiiile ca și cauză de trimestrul I sunt citate.",
   "Nota indică până la 25%.",
   "Incontinența cervico-istmică este cauză de trimestrul II, nu I.",
   "Nota precizează că β-hCG este produs de sincițiotrofoblast."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează etiologia trimestrului I versus II și originea β-hCG."
  },
  "textbookExpressions": [
   "25% din sarcini",
   "<20 săptămâni"
  ]
 },
 {
  "id": "obstetrica-adv-027",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Amenințarea de avort se deosebește de iminență prin faptul că:",
  "options": [
   "Orificiul cervical este închis, iar fătul este viabil",
   "Orificiul este deschis, cu făt viabil",
   "Produsul de concepție a fost eliminat complet",
   "Fătul este neviabil, cu col închis",
   "Nu există sângerare uterină"
  ],
  "correct": [
   0
  ],
  "explanation": "Orificiul cervical este închis, iar fătul este viabil — Corect: Tabelul: amenințare = col închis, făt viabil, neeliminat.\n\nOrificiul este deschis, cu făt viabil — Incorect: Col deschis cu făt viabil definește iminența.\n\nProdusul de concepție a fost eliminat complet — Incorect: Eliminarea completă definește avortul complet.\n\nFătul este neviabil, cu col închis — Incorect: Făt neviabil cu col închis este sarcina oprită în evoluție.\n\nNu există sângerare uterină — Incorect: Sângerarea uterină este prezentă în amenințare.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 306, Complicații obstetricale — Clasificarea avortului (pagini PDF: 84).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    306
   ],
   "pdfPages": [
    84
   ],
   "section": "Complicații obstetricale — Clasificarea avortului"
  },
  "learningObjective": "Separarea colului închis (amenințare) de colul deschis (iminență) la făt viabil.",
  "optionRationales": [
   "Tabelul: amenințare = col închis, făt viabil, neeliminat.",
   "Col deschis cu făt viabil definește iminența.",
   "Eliminarea completă definește avortul complet.",
   "Făt neviabil cu col închis este sarcina oprită în evoluție.",
   "Sângerarea uterină este prezentă în amenințare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele cinci linii ale tabelului (amenințare, oprită, iminență, incomplet, complet) sunt ușor de permutat."
  },
  "textbookExpressions": [
   "închis",
   "Ameninţare de avort"
  ]
 },
 {
  "id": "obstetrica-adv-028",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Moartea fetală intrauterină:",
  "options": [
   "Reprezintă moartea fătului după 20 de săptămâni și înainte de debutul travaliului",
   "Diagnosticul ecografic arată făt neviabil, fără activitate cardiacă",
   "Complicația citată a reținerii prelungite este CID",
   "Se definește ca pierderea sarcinii sub 12 săptămâni",
   "Tratamentul este doar expectativ, fără inducție, indiferent de vârsta gestațională"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Reprezintă moartea fătului după 20 de săptămâni și înainte de debutul travaliului — Corect: Definiția după 20 de săptămâni, înainte de travaliu, este explicită.\n\nDiagnosticul ecografic arată făt neviabil, fără activitate cardiacă — Corect: US fără activitate cardiacă este criteriul.\n\nComplicația citată a reținerii prelungite este CID — Corect: CID la reținere prelungită este complicația citată.\n\nSe definește ca pierderea sarcinii sub 12 săptămâni — Incorect: Sub 12 săptămâni este avortul precoce, nu IUFD.\n\nTratamentul este doar expectativ, fără inducție, indiferent de vârsta gestațională — Incorect: Se pot administra ocitocină, misoprostol sau PGE2 pentru inducție; sub 24 de săptămâni, uneori D&E.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 306, Complicații obstetricale — Moartea fetală intrauterină (pagini PDF: 84).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    306
   ],
   "pdfPages": [
    84
   ],
   "section": "Complicații obstetricale — Moartea fetală intrauterină"
  },
  "learningObjective": "Aplicarea pragului de 20 de săptămâni, a absenței BCF și a riscului de CID.",
  "optionRationales": [
   "Definiția după 20 de săptămâni, înainte de travaliu, este explicită.",
   "US fără activitate cardiacă este criteriul.",
   "CID la reținere prelungită este complicația citată.",
   "Sub 12 săptămâni este avortul precoce, nu IUFD.",
   "Se pot administra ocitocină, misoprostol sau PGE2 pentru inducție; sub 24 de săptămâni, uneori D&E."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii comprimă definiția sub 12 săptămâni și neagă inducția, care este tratamentul citat."
  },
  "textbookExpressions": [
   "după 20 de săptămâni",
   "CID"
  ]
 },
 {
  "id": "obstetrica-adv-029",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Restricția de creștere intrauterină:",
  "options": [
   "Se definește prin creștere sub percentila 10 pentru vârsta gestațională",
   "Forma asimetrică reprezintă 80% din cazuri, cu abdomen mic și craniu relativ păstrat, tardiv în sarcină",
   "Forma simetrică (20%) apare devreme, prin infecții congenitale, anomalii cromozomiale sau droguri materne",
   "Forma simetrică este 80% și apare doar prin insuficiență uteroplacentară tardivă",
   "Primul semn US cel mai frecvent este circumferința craniană peste percentila 90"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se definește prin creștere sub percentila 10 pentru vârsta gestațională — Corect: Pragul <percentila 10 este definiția.\n\nForma asimetrică reprezintă 80% din cazuri, cu abdomen mic și craniu relativ păstrat, tardiv în sarcină — Corect: 80%, abdomen redus, tardiv, sunt ale formei asimetrice.\n\nForma simetrică (20%) apare devreme, prin infecții congenitale, anomalii cromozomiale sau droguri materne — Corect: 20%, debut precoce și cauzele citate sunt ale formei simetrice.\n\nForma simetrică este 80% și apare doar prin insuficiență uteroplacentară tardivă — Incorect: Ponderile 80/20 sunt inversate.\n\nPrimul semn US cel mai frecvent este circumferința craniană peste percentila 90 — Incorect: Nota de pe pagina următoare identifică circumferința abdominală <percentila 10 ca primul semn US, nu craniul mare.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 306, 307, Complicații obstetricale — RCIU (pagini PDF: 84, 85).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    306,
    307
   ],
   "pdfPages": [
    84,
    85
   ],
   "section": "Complicații obstetricale — RCIU"
  },
  "learningObjective": "Separarea formei asimetrice tardive (80%) de cea simetrică precoce (20%).",
  "optionRationales": [
   "Pragul <percentila 10 este definiția.",
   "80%, abdomen redus, tardiv, sunt ale formei asimetrice.",
   "20%, debut precoce și cauzele citate sunt ale formei simetrice.",
   "Ponderile 80/20 sunt inversate.",
   "Nota de pe pagina următoare identifică circumferința abdominală <percentila 10 ca primul semn US, nu craniul mare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Ponderile 80 versus 20 și sediul (abdomen versus craniu) sunt capcane simetrice."
  },
  "textbookExpressions": [
   "percentila 10",
   "80% dintre cazuri"
  ]
 },
 {
  "id": "obstetrica-adv-030",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Hidramniosul (polihidramniosul):",
  "options": [
   "Se definește prin indexul lichidului amniotic peste 25 cm sau un buzunar de cel puțin 8 cm",
   "Poate rezulta din atrezie esofagiană, diabet matern sau sarcini multiple",
   "Sub 32 de săptămâni se poate asocia amnioreducția cu indometacin",
   "Definește oligoamniosul, cu index sub 5 cm",
   "Tactul vaginal repetat este primul pas diagnostic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se definește prin indexul lichidului amniotic peste 25 cm sau un buzunar de cel puțin 8 cm — Corect: ILA >25 cm sau buzunar ≥8 cm sunt criteriile.\n\nPoate rezulta din atrezie esofagiană, diabet matern sau sarcini multiple — Corect: Atrezia esofagiană, diabetul și sarcinile multiple sunt cauzele citate.\n\nSub 32 de săptămâni se poate asocia amnioreducția cu indometacin — Corect: Indometacinul cu amnioreducție sub 32 de săptămâni este tratamentul.\n\nDefinește oligoamniosul, cu index sub 5 cm — Incorect: ILA <5 cm definește oligoamniosul.\n\nTactul vaginal repetat este primul pas diagnostic — Incorect: Tactul vaginal repetat este evitat în PROM, nu este diagnosticul hidramniosului.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 307, Complicații obstetricale — Hidramniosul (pagini PDF: 85).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    307
   ],
   "pdfPages": [
    85
   ],
   "section": "Complicații obstetricale — Hidramniosul"
  },
  "learningObjective": "Aplicarea pragului ILA >25 cm și a opțiunii indometacin plus amnioreducție sub 32 de săptămâni.",
  "optionRationales": [
   "ILA >25 cm sau buzunar ≥8 cm sunt criteriile.",
   "Atrezia esofagiană, diabetul și sarcinile multiple sunt cauzele citate.",
   "Indometacinul cu amnioreducție sub 32 de săptămâni este tratamentul.",
   "ILA <5 cm definește oligoamniosul.",
   "Tactul vaginal repetat este evitat în PROM, nu este diagnosticul hidramniosului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pragurile 5 cm versus 25 cm sunt oglindite; distractorul importă interdicția tactului din PROM."
  },
  "textbookExpressions": [
   ">25 cm",
   "indometacin"
  ]
 },
 {
  "id": "obstetrica-adv-031",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "În ultimele săptămâni de gestație, contracțiile Braxton-Hicks:",
  "options": [
   "Sunt contracții false, care nu se asociază cu travaliul",
   "Definesc faza activă a primului stadiu, cu dilatație de 1,5 cm/oră",
   "Impun operație cezariană de urgență",
   "Sunt decelerații tardive ale frecvenței cardiace fetale",
   "Apar doar după dilatația completă de 10 cm"
  ],
  "correct": [
   0
  ],
  "explanation": "Sunt contracții false, care nu se asociază cu travaliul — Corect: Nota le descrie ca false, neasociate cu travaliul.\n\nDefinesc faza activă a primului stadiu, cu dilatație de 1,5 cm/oră — Incorect: Faza activă cu 1,5 cm/oră la multipare este travaliul adevărat.\n\nImpun operație cezariană de urgență — Incorect: Cezariana nu este indicația contracțiilor false.\n\nSunt decelerații tardive ale frecvenței cardiace fetale — Incorect: Decelerațiile tardive țin de monitorizarea fetală.\n\nApar doar după dilatația completă de 10 cm — Incorect: Dilatația de 10 cm marchează începutul stadiului 2.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 311, Travaliu — Contracțiile Braxton-Hicks (pagini PDF: 89).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    311
   ],
   "pdfPages": [
    89
   ],
   "section": "Travaliu — Contracțiile Braxton-Hicks"
  },
  "learningObjective": "Identificarea contracțiilor false de la termen, distinct de travaliul adevărat.",
  "optionRationales": [
   "Nota le descrie ca false, neasociate cu travaliul.",
   "Faza activă cu 1,5 cm/oră la multipare este travaliul adevărat.",
   "Cezariana nu este indicația contracțiilor false.",
   "Decelerațiile tardive țin de monitorizarea fetală.",
   "Dilatația de 10 cm marchează începutul stadiului 2."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt etape reale ale travaliului, atribuite unor contracții pe care textul le numește false."
  },
  "textbookExpressions": [
   "Braxton-Hicks",
   "nu se asociază"
  ]
 },
 {
  "id": "obstetrica-adv-032",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Prezentația craniană:",
  "options": [
   "Este prezentă în peste 95% din sarcini în momentul nașterii",
   "Înainte de 28 de săptămâni, prezentația pelviană apare în 25% din cazuri, dar de obicei se convertește",
   "Este rară sub 5% la termen, pelviana fiind regula",
   "Impune cezariană în toate cazurile, inclusiv occipito-anterioară",
   "Este sinonimă cu prezentația facială prin hiperextensie totală"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este prezentă în peste 95% din sarcini în momentul nașterii — Corect: Peste 95% la naștere este din notă.\n\nÎnainte de 28 de săptămâni, prezentația pelviană apare în 25% din cazuri, dar de obicei se convertește — Corect: 25% pelviană înainte de 28 de săptămâni, cu conversie ulterioară, este explicită.\n\nEste rară sub 5% la termen, pelviana fiind regula — Incorect: La termen craniană este regula, nu excepția.\n\nImpune cezariană în toate cazurile, inclusiv occipito-anterioară — Incorect: Cezariana nu este regula prezentației craniene occipito-anterioare.\n\nEste sinonimă cu prezentația facială prin hiperextensie totală — Incorect: Prezentația facială este o distocie rară prin hiperextensie, nu sinonimul cranienei.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 312, Travaliu — Prezentația la naștere (pagini PDF: 90).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    312
   ],
   "pdfPages": [
    90
   ],
   "section": "Travaliu — Prezentația la naștere"
  },
  "learningObjective": "Cuantificarea celor >95% craniene la termen și a celor 25% pelviene înainte de 28 de săptămâni.",
  "optionRationales": [
   "Peste 95% la naștere este din notă.",
   "25% pelviană înainte de 28 de săptămâni, cu conversie ulterioară, este explicită.",
   "La termen craniană este regula, nu excepția.",
   "Cezariana nu este regula prezentației craniene occipito-anterioare.",
   "Prezentația facială este o distocie rară prin hiperextensie, nu sinonimul cranienei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Procentele 95% și 25% sunt ușor de inversat între termen și trimestrul II."
  },
  "textbookExpressions": [
   ">95% din sarcini",
   "28 săptămâni"
  ]
 },
 {
  "id": "obstetrica-adv-033",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Inducerea travaliului este contraindicată în:",
  "options": [
   "Uter cicatricial",
   "Herpes genital activ",
   "Placentă previa sau vasa previa",
   "Preeclampsie, care este o indicație maternă, nu o contraindicație",
   "Sarcina depășită cronologic (>40–42 de săptămâni), care este o indicație fetală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Uter cicatricial — Corect: Uterul cicatricial este contraindicație.\n\nHerpes genital activ — Corect: Herpesul genital activ este contraindicație.\n\nPlacentă previa sau vasa previa — Corect: Praevia/vasa previa sunt contraindicații.\n\nPreeclampsie, care este o indicație maternă, nu o contraindicație — Incorect: Preeclampsia este indicație maternă.\n\nSarcina depășită cronologic (>40–42 de săptămâni), care este o indicație fetală — Incorect: Post-term este indicație fetală.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 312, Travaliu — Inducerea travaliului (pagini PDF: 90).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    312
   ],
   "pdfPages": [
    90
   ],
   "section": "Travaliu — Inducerea travaliului"
  },
  "learningObjective": "Separarea contraindicațiilor (cicatrice, herpes activ, praevia) de indicațiile (preeclampsie, post-term).",
  "optionRationales": [
   "Uterul cicatricial este contraindicație.",
   "Herpesul genital activ este contraindicație.",
   "Praevia/vasa previa sunt contraindicații.",
   "Preeclampsia este indicație maternă.",
   "Post-term este indicație fetală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Listele de indicații și contraindicații stau alăturat; distractorii permută preeclampsie și post-term pe coloana interzisă."
  },
  "textbookExpressions": [
   "herpes genital activ",
   "placenta previa"
  ]
 },
 {
  "id": "obstetrica-adv-034",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Un scor Bishop sub 3 după inducere se asociază cu o rată de cezariană de circa:",
  "options": [
   "30%, față de 15% când scorul este peste 3",
   "5%, identică nașterii spontane",
   "80%, indiferent de dilatație",
   "0%, scorul neavând valoare prognostică",
   "50%, pragul mortalității hidrocefaliei netratate"
  ],
  "correct": [
   0
  ],
  "explanation": "30%, față de 15% când scorul este peste 3 — Corect: Textul citează 30% sub 3 și 15% peste 3.\n\n5%, identică nașterii spontane — Incorect: 5% nu este rata citată.\n\n80%, indiferent de dilatație — Incorect: 80% nu apare.\n\n0%, scorul neavând valoare prognostică — Incorect: Textul atribuie scorului valoare prognostică.\n\n50%, pragul mortalității hidrocefaliei netratate — Incorect: 50% este o cifră din alt capitol (hidrocefalie), nu Bishop.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 312, Travaliu — Scorul Bishop (pagini PDF: 90).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    312
   ],
   "pdfPages": [
    90
   ],
   "section": "Travaliu — Scorul Bishop"
  },
  "learningObjective": "Memorarea ratelor 30% versus 15% de cezariană după Bishop <3 versus >3.",
  "optionRationales": [
   "Textul citează 30% sub 3 și 15% peste 3.",
   "5% nu este rata citată.",
   "80% nu apare.",
   "Textul atribuie scorului valoare prognostică.",
   "50% este o cifră din alt capitol (hidrocefalie), nu Bishop."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele două procente 30 și 15 sunt ușor de inversat sau de înlocuit cu alte cifre memorabile."
  },
  "textbookExpressions": [
   "Bishop <3",
   "30%"
  ]
 },
 {
  "id": "obstetrica-adv-035",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Stadiile travaliului:",
  "options": [
   "Stadiul 2 merge de la dilatația completă (10 cm) până la expulzia fătului",
   "Stadiul 3 merge de la expulzia nou-născutului până la expulzia placentei, de obicei în primele 30 de minute",
   "Stadiul 4 este prima oră postpartum, de stabilizare hemodinamică",
   "Stadiul 1 se încheie la dilatația de 4 cm, fără fază activă ulterior",
   "Placenta se separă înaintea expulziei fătului, definind stadiul 2"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Stadiul 2 merge de la dilatația completă (10 cm) până la expulzia fătului — Corect: Stadiul 2: 10 cm → expulzia fătului.\n\nStadiul 3 merge de la expulzia nou-născutului până la expulzia placentei, de obicei în primele 30 de minute — Corect: Stadiul 3: expulzia fătului → placentă în 30 de minute.\n\nStadiul 4 este prima oră postpartum, de stabilizare hemodinamică — Corect: Stadiul 4: prima oră postpartum.\n\nStadiul 1 se încheie la dilatația de 4 cm, fără fază activă ulterior — Incorect: Stadiul 1 include faza activă până la circa 10 cm.\n\nPlacenta se separă înaintea expulziei fătului, definind stadiul 2 — Incorect: Separarea placentei urmează expulziei fătului (stadiul 3).\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 313, Travaliu — Stadiile travaliului (pagini PDF: 91).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    313
   ],
   "pdfPages": [
    91
   ],
   "section": "Travaliu — Stadiile travaliului"
  },
  "learningObjective": "Delimitarea stadiilor 2–4 după dilatația completă, placenta în 30 de minute și prima oră postpartum.",
  "optionRationales": [
   "Stadiul 2: 10 cm → expulzia fătului.",
   "Stadiul 3: expulzia fătului → placentă în 30 de minute.",
   "Stadiul 4: prima oră postpartum.",
   "Stadiul 1 include faza activă până la circa 10 cm.",
   "Separarea placentei urmează expulziei fătului (stadiul 3)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Numerotarea celor patru stadii și pragul de 10 cm sunt ușor de deplasat."
  },
  "textbookExpressions": [
   "10 cm",
   "30 de minute"
  ]
 },
 {
  "id": "obstetrica-adv-036",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Prezentația pelviană decompletă (francă):",
  "options": [
   "Reprezintă 75% dintre cazurile pelviene",
   "Are coapsele flectate pe abdomen și genunchii în extensie",
   "Este cea mai comună prezentație distocică, în ansamblu",
   "Are ambele genunchi și coapse în flexie, definind forma completă",
   "Este prezentația craniană cu bărbia în piept"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Reprezintă 75% dintre cazurile pelviene — Corect: 75% este ponderea formei decomplete.\n\nAre coapsele flectate pe abdomen și genunchii în extensie — Corect: Coapse flectate, genunchi în extensie, este descrierea.\n\nEste cea mai comună prezentație distocică, în ansamblu — Corect: Pelviana este cea mai comună distocie de prezentație.\n\nAre ambele genunchi și coapse în flexie, definind forma completă — Incorect: Flexia coapselor și genunchilor definește forma completă.\n\nEste prezentația craniană cu bărbia în piept — Incorect: Bărbia în piept este prezentația craniană normală.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 313, Travaliu — Distocii de prezentație (pagini PDF: 91).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    313
   ],
   "pdfPages": [
    91
   ],
   "section": "Travaliu — Distocii de prezentație"
  },
  "learningObjective": "Identificarea formei france (75%) după poziția coapselor și genunchilor.",
  "optionRationales": [
   "75% este ponderea formei decomplete.",
   "Coapse flectate, genunchi în extensie, este descrierea.",
   "Pelviana este cea mai comună distocie de prezentație.",
   "Flexia coapselor și genunchilor definește forma completă.",
   "Bărbia în piept este prezentația craniană normală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Formele francă/completă/incompletă se deosebesc doar prin genunchi; ponderea 75% ancorează varianta corectă."
  },
  "textbookExpressions": [
   "75% dintre cazuri",
   "genunchii în extensie"
  ]
 },
 {
  "id": "obstetrica-adv-037",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Coriocarcinomul:",
  "options": [
   "Apare secundar unei mole în 50% din cazuri, sau după avort, sarcină extrauterină ori sarcină normală",
   "Tratamentul include chimioterapia de rutină; histerectomia dacă tumora este limitată la uter",
   "Prognosticul este bun în absența metastazelor hepatice sau cerebrale",
   "Diagnosticul de elecție este doar metotrexatul, fără a măsura β-hCG ulterior",
   "Metastazează doar local, fără diseminare pulmonară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Apare secundar unei mole în 50% din cazuri, sau după avort, sarcină extrauterină ori sarcină normală — Corect: Cei 50% după molă și celelalte origini sunt explicite.\n\nTratamentul include chimioterapia de rutină; histerectomia dacă tumora este limitată la uter — Corect: Chimioterapia de rutină și histerectomia în boala limitată sunt schema.\n\nPrognosticul este bun în absența metastazelor hepatice sau cerebrale — Corect: Prognosticul bun fără metastaze hepatice/cerebrale este citat.\n\nDiagnosticul de elecție este doar metotrexatul, fără a măsura β-hCG ulterior — Incorect: β-hCG se monitorizează periodic; chimioterapia nu exclude urmărirea.\n\nMetastazează doar local, fără diseminare pulmonară — Incorect: Metastazele pulmonare, cerebrale, hepatice, renale sau GI sunt enumerate.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 316, Boala trofoblastică — Coriocarcinomul (pagini PDF: 94).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    316
   ],
   "pdfPages": [
    94
   ],
   "section": "Boala trofoblastică — Coriocarcinomul"
  },
  "learningObjective": "Recunoașterea originii post-molare (50%), a chimioterapiei și a prognosticului legat de metastazele hepatice/cerebrale.",
  "optionRationales": [
   "Cei 50% după molă și celelalte origini sunt explicite.",
   "Chimioterapia de rutină și histerectomia în boala limitată sunt schema.",
   "Prognosticul bun fără metastaze hepatice/cerebrale este citat.",
   "β-hCG se monitorizează periodic; chimioterapia nu exclude urmărirea.",
   "Metastazele pulmonare, cerebrale, hepatice, renale sau GI sunt enumerate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii neagă urmărirea β-hCG și diseminarea pulmonară, ambele explicite."
  },
  "textbookExpressions": [
   "50% din cazuri",
   "metastaze"
  ]
 },
 {
  "id": "obstetrica-adv-038",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Pseudocieza (sarcina falsă):",
  "options": [
   "Implică somatizarea stresului, cu modificare a axei hipotalamo-hipofizo-ovariene",
   "Determină semnele și simptomele sarcinii la femei care nu sunt gravide și nu sunt psihotice",
   "Este identică molei complete, cu cariotip 46XX paternal",
   "Se tratează prin D&C de primă intenție, ca mola",
   "Impune metotrexat, ca sarcina ectopică ruptă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Implică somatizarea stresului, cu modificare a axei hipotalamo-hipofizo-ovariene — Corect: Somatizarea cu modificarea axei este definiția.\n\nDetermină semnele și simptomele sarcinii la femei care nu sunt gravide și nu sunt psihotice — Corect: Femeia nu este gravidă și nu este psihotică.\n\nEste identică molei complete, cu cariotip 46XX paternal — Incorect: 46XX paternal definește mola completă.\n\nSe tratează prin D&C de primă intenție, ca mola — Incorect: D&C este tratamentul molei, nu al pseudociezei.\n\nImpune metotrexat, ca sarcina ectopică ruptă — Incorect: Metotrexatul este al ectopicii nerupte; forma ruptă cere chirurgie.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 295, Fiziologia sarcinii — Pseudocieza (pagini PDF: 73).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    295
   ],
   "pdfPages": [
    73
   ],
   "section": "Fiziologia sarcinii — Pseudocieza"
  },
  "learningObjective": "Diferențierea sarcinii false non-psihotice de boala trofoblastică și de ectopica ruptă.",
  "optionRationales": [
   "Somatizarea cu modificarea axei este definiția.",
   "Femeia nu este gravidă și nu este psihotică.",
   "46XX paternal definește mola completă.",
   "D&C este tratamentul molei, nu al pseudociezei.",
   "Metotrexatul este al ectopicii nerupte; forma ruptă cere chirurgie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică cariotipul, D&C-ul molei și metotrexatul ectopicii asupra unei entități non-gravide."
  },
  "textbookExpressions": [
   "Pseudocieza",
   "nu sunt psihotice"
  ]
 },
 {
  "id": "obstetrica-adv-039",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "În RCIU, primul semn ultrasonografic și cel mai frecvent este:",
  "options": [
   "Circumferința abdominală sub percentila 10 pentru vârsta gestațională",
   "Indexul lichidului amniotic peste 25 cm",
   "Decelerațiile precoce izolate, fără alte modificări",
   "Lungimea cranio-caudală din trimestrul I",
   "Scorul Bishop sub 3"
  ],
  "correct": [
   0
  ],
  "explanation": "Circumferința abdominală sub percentila 10 pentru vârsta gestațională — Corect: Nota identifică CA <percentila 10.\n\nIndexul lichidului amniotic peste 25 cm — Incorect: ILA >25 cm definește hidramniosul.\n\nDecelerațiile precoce izolate, fără alte modificări — Incorect: Decelerațiile precoce țin de monitorizarea din travaliu.\n\nLungimea cranio-caudală din trimestrul I — Incorect: CRL datează trimestrul I, nu diagnostichează RCIU tardiv.\n\nScorul Bishop sub 3 — Incorect: Bishop estimează succesul inducției.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 307, Complicații obstetricale — RCIU (pagini PDF: 85).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    307
   ],
   "pdfPages": [
    85
   ],
   "section": "Complicații obstetricale — RCIU"
  },
  "learningObjective": "Identificarea circumferinței abdominale <percentila 10 ca prim semn US.",
  "optionRationales": [
   "Nota identifică CA <percentila 10.",
   "ILA >25 cm definește hidramniosul.",
   "Decelerațiile precoce țin de monitorizarea din travaliu.",
   "CRL datează trimestrul I, nu diagnostichează RCIU tardiv.",
   "Bishop estimează succesul inducției."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Percentila 10 este folosită și pentru definiția RCIU; candidatul trebuie să o lege de abdomen, nu de craniu sau de lichid."
  },
  "textbookExpressions": [
   "circumferin)a abdo￾minală",
   "percentila 10"
  ]
 },
 {
  "id": "obstetrica-adv-040",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Faza activă a primului stadiu al travaliului:",
  "options": [
   "Începe când colul se dilată de la 6 cm până la circa 10 cm",
   "Progresează cu circa 1,2 cm/oră la nulipare și 1,5 cm/oră la multipare",
   "Se încheie la dilatația de 2 cm, înaintea ștergerii colului",
   "Corespunde expulziei placentei",
   "Durează prima oră postpartum"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Începe când colul se dilată de la 6 cm până la circa 10 cm — Corect: Intervalul 6–10 cm definește faza activă.\n\nProgresează cu circa 1,2 cm/oră la nulipare și 1,5 cm/oră la multipare — Corect: Vitezele 1,2 (nulipare) și 1,5 (multipare) sunt din tabel.\n\nSe încheie la dilatația de 2 cm, înaintea ștergerii colului — Incorect: 2 cm este încă faza pasivă (până la 6 cm).\n\nCorespunde expulziei placentei — Incorect: Expulzia placentei este stadiul 3.\n\nDurează prima oră postpartum — Incorect: Prima oră postpartum este stadiul 4.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 313, Travaliu — Stadiul 1, faza activă (pagini PDF: 91).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    313
   ],
   "pdfPages": [
    91
   ],
   "section": "Travaliu — Stadiul 1, faza activă"
  },
  "learningObjective": "Aplicarea pragului de 6 cm și a vitezelor 1,2 versus 1,5 cm/oră după paritate.",
  "optionRationales": [
   "Intervalul 6–10 cm definește faza activă.",
   "Vitezele 1,2 (nulipare) și 1,5 (multipare) sunt din tabel.",
   "2 cm este încă faza pasivă (până la 6 cm).",
   "Expulzia placentei este stadiul 3.",
   "Prima oră postpartum este stadiul 4."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pragul clasic de 4 cm a fost înlocuit în text cu 6 cm; vitezele 1,2/1,5 se inversează ușor după paritate."
  },
  "textbookExpressions": [
   "6 cm",
   "1,5 cm/h"
  ]
 },
 {
  "id": "obstetrica-adv-041",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "La gravida după 20 de săptămâni, distanța în centimetri de la pubis la fundul uterin:",
  "options": [
   "Ar trebui să fie identică cu vârsta gestațională măsurată în săptămâni",
   "O diferență de cel puțin 3 cm sub așteptare sugerează RCIU",
   "Este egală cu vârsta embrionară, nu cu cea gestațională",
   "Înlocuiește CRL ca metodă cea mai precisă încă din săptămâna 7",
   "Crește cu 40%, ca debitul cardiac"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Ar trebui să fie identică cu vârsta gestațională măsurată în săptămâni — Corect: Identitatea cm–săptămâni de la 20 de săptămâni este explicită.\n\nO diferență de cel puțin 3 cm sub așteptare sugerează RCIU — Corect: Deficitul ≥3 cm sugerează RCIU.\n\nEste egală cu vârsta embrionară, nu cu cea gestațională — Incorect: Măsura urmează vârsta gestațională, nu pe cea embrionară (cu 2 săptămâni mai mică).\n\nÎnlocuiește CRL ca metodă cea mai precisă încă din săptămâna 7 — Incorect: CRL rămâne cea mai precisă în trimestrul I.\n\nCrește cu 40%, ca debitul cardiac — Incorect: Cei 40% sunt ai debitului cardiac, nu ai înălțimii fundului.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 307, Complicații obstetricale — Evaluarea creșterii (pagini PDF: 85).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    307
   ],
   "pdfPages": [
    85
   ],
   "section": "Complicații obstetricale — Evaluarea creșterii"
  },
  "learningObjective": "Aplicarea regulii centimetru = săptămână și a deficitului de 3 cm ca semnal de RCIU.",
  "optionRationales": [
   "Identitatea cm–săptămâni de la 20 de săptămâni este explicită.",
   "Deficitul ≥3 cm sugerează RCIU.",
   "Măsura urmează vârsta gestațională, nu pe cea embrionară (cu 2 săptămâni mai mică).",
   "CRL rămâne cea mai precisă în trimestrul I.",
   "Cei 40% sunt ai debitului cardiac, nu ai înălțimii fundului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Regula cm = săptămână este ușor de aplicat pe vârsta embrionară sau de confunda cu +40% din fiziologie."
  },
  "textbookExpressions": [
   "3 cm mai mică",
   "săptămâna 20"
  ]
 },
 {
  "id": "obstetrica-adv-042",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Tumorile trofoblastice benigne însumează circa:",
  "options": [
   "80% din totalul cazurilor de boală gestațională trofoblastică",
   "5% din cazuri, restul fiind coriocarcinom de novo",
   "50%, identic ponderii coriocarcinomului post-molar",
   "25%, ponderea avorturilor spontane",
   "95%, ponderea prezentației craniene"
  ],
  "correct": [
   0
  ],
  "explanation": "80% din totalul cazurilor de boală gestațională trofoblastică — Corect: Cei 80% sunt explicit tumori benigne.\n\n5% din cazuri, restul fiind coriocarcinom de novo — Incorect: 5% este ponderea coriocarcinomului dintre mole, nu a bolii benigne.\n\n50%, identic ponderii coriocarcinomului post-molar — Incorect: 50% este originea post-molară a coriocarcinomului.\n\n25%, ponderea avorturilor spontane — Incorect: 25% este ponderea avorturilor.\n\n95%, ponderea prezentației craniene — Incorect: 95% este prezentația craniană.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 316, Boala trofoblastică — Mola hidatiformă (pagini PDF: 94).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    316
   ],
   "pdfPages": [
    94
   ],
   "section": "Boala trofoblastică — Mola hidatiformă"
  },
  "learningObjective": "Ierarhizarea: 80% tumori trofoblastice benigne, 20% neoplazie, 5% coriocarcinom după molă.",
  "optionRationales": [
   "Cei 80% sunt explicit tumori benigne.",
   "5% este ponderea coriocarcinomului dintre mole, nu a bolii benigne.",
   "50% este originea post-molară a coriocarcinomului.",
   "25% este ponderea avorturilor.",
   "95% este prezentația craniană."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate procentele apar în obstetrică (80, 50, 25, 95, 5); candidatul trebuie să lege 80% de molele benigne."
  },
  "textbookExpressions": [
   "80% din totalul",
   "trofoblastice benigne"
  ]
 },
 {
  "id": "obstetrica-adv-043",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "În hidramnios, lichidul amniotic în exces:",
  "options": [
   "Se reacumulează de cele mai multe ori după amnioreducție",
   "Poate fi drenat percutan (amnioreducție)",
   "Rămâne definitiv redus după o singură amnioreducție, fără recidivă",
   "Se tratează de primă intenție prin tact vaginal repetat",
   "Definește oligoamniosul când ILA depășește 25 cm"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Se reacumulează de cele mai multe ori după amnioreducție — Corect: Nota precizează reacumularea după amnioreducție.\n\nPoate fi drenat percutan (amnioreducție) — Corect: Drenajul percutan este definit în aceeași notă.\n\nRămâne definitiv redus după o singură amnioreducție, fără recidivă — Incorect: Recidiva este regula, nu excepția.\n\nSe tratează de primă intenție prin tact vaginal repetat — Incorect: Tactul vaginal repetat nu este tratamentul.\n\nDefinește oligoamniosul când ILA depășește 25 cm — Incorect: ILA >25 cm este hidramnios, nu oligoamnios.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 307, Complicații obstetricale — Hidramniosul (pagini PDF: 85).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    307
   ],
   "pdfPages": [
    85
   ],
   "section": "Complicații obstetricale — Hidramniosul"
  },
  "learningObjective": "Recunoașterea reacumulării după amnioreducția percutană.",
  "optionRationales": [
   "Nota precizează reacumularea după amnioreducție.",
   "Drenajul percutan este definit în aceeași notă.",
   "Recidiva este regula, nu excepția.",
   "Tactul vaginal repetat nu este tratamentul.",
   "ILA >25 cm este hidramnios, nu oligoamnios."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Nota avertizează tocmai asupra reacumulării, o capcană dacă se crede că o singură puncție rezolvă excesul."
  },
  "textbookExpressions": [
   "reacumulează",
   "amnio￾reducţie"
  ]
 },
 {
  "id": "obstetrica-adv-044",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "β-hCG în sarcina timpurie:",
  "options": [
   "Este produs de sincițiotrofoblast",
   "Menține secreția de progesteron până când placenta preia producția",
   "Se dublează la fiecare 48 de ore în sarcina intrauterină viabilă",
   "Este produs de decidua maternală și se înjumătățește la 48 de ore în sarcina normală",
   "Lipsa vizualizării intrauterine la un prag de 1.500 mUI/mL transvaginal exclude complet ectopica"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este produs de sincițiotrofoblast — Corect: Originea din sincițiotrofoblast este din notă.\n\nMenține secreția de progesteron până când placenta preia producția — Corect: Menținerea progesteronului până la preluarea placentară este explicită.\n\nSe dublează la fiecare 48 de ore în sarcina intrauterină viabilă — Corect: Dublarea la 48 de ore este din textul despre ectopie.\n\nEste produs de decidua maternală și se înjumătățește la 48 de ore în sarcina normală — Incorect: Decidua nu este sursa; cinetică de înjumătățire ar fi patologică.\n\nLipsa vizualizării intrauterine la un prag de 1.500 mUI/mL transvaginal exclude complet ectopica — Incorect: Absența sacului la 1.500 mUI/mL crește suspiciunea, iar valoarea se repetă în 2 zile; nu „exclude”.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 305, Complicații obstetricale — β-hCG (pagini PDF: 83).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    305
   ],
   "pdfPages": [
    83
   ],
   "section": "Complicații obstetricale — β-hCG"
  },
  "learningObjective": "Corelarea originii sincițiotrofoblastice cu dublarea la 48 de ore și cu susținerea corpului galben.",
  "optionRationales": [
   "Originea din sincițiotrofoblast este din notă.",
   "Menținerea progesteronului până la preluarea placentară este explicită.",
   "Dublarea la 48 de ore este din textul despre ectopie.",
   "Decidua nu este sursa; cinetică de înjumătățire ar fi patologică.",
   "Absența sacului la 1.500 mUI/mL crește suspiciunea, iar valoarea se repetă în 2 zile; nu „exclude”."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează cinetică (dublare versus înjumătățire) și transformă un prag de suspiciune într-o excludere."
  },
  "textbookExpressions": [
   "sinciţiotrofoblast",
   "progesteron"
  ]
 },
 {
  "id": "obstetrica-adv-045",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Analizele de screening prenatal, conform tabelului 13-3:",
  "options": [
   "Vizita inițială include HLG, grup sangvin și Rh, citologie Pap, screening pentru gonoree/chlamydia, analize urinare, RPR sau VDRL, titrarea anticorpilor pentru rubeolă și varicelă, AgHBs și screening HIV cu acordul matern",
   "Cvadruplul test se efectuează la 16-18 săptămâni, pentru trisomiile 21 și 18 și defectele de tub neural",
   "Datarea ultrasonografică a sarcinii și evaluarea anomaliilor fetale majore sunt programate la 18-20 săptămâni",
   "Screening-ul pentru streptococul de grup B se face la vizita inițială, odată cu AgHBs",
   "Testul de încărcare orală cu glucoză, cu glicemie la 1 oră, se programează la 16-18 săptămâni"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Vizita inițială include HLG, grup sangvin și Rh, citologie Pap, screening pentru gonoree/chlamydia, analize urinare, RPR sau VDRL, titrarea anticorpilor pentru rubeolă și varicelă, AgHBs și screening HIV cu acordul matern — Corect: Tabelul 13-3 enumeră aceste analize la vizita inițială.\n\nCvadruplul test se efectuează la 16-18 săptămâni, pentru trisomiile 21 și 18 și defectele de tub neural — Corect: Cvadruplul este plasat la 16-18 săptămâni.\n\nDatarea ultrasonografică a sarcinii și evaluarea anomaliilor fetale majore sunt programate la 18-20 săptămâni — Corect: Ecografia de datare și anomalii majore este la 18-20 săptămâni.\n\nScreening-ul pentru streptococul de grup B se face la vizita inițială, odată cu AgHBs — Incorect: Screening-ul GBS este programat la 32-37 săptămâni.\n\nTestul de încărcare orală cu glucoză, cu glicemie la 1 oră, se programează la 16-18 săptămâni — Incorect: Testul de încărcare la 1 oră este la 24-28 săptămâni.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 298, Îngrijirea prenatală — Calendarul analizelor (pagini PDF: 76).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    298
   ],
   "pdfPages": [
    76
   ],
   "section": "Îngrijirea prenatală — Calendarul analizelor"
  },
  "learningObjective": "Plasarea cvadruplului, a ecografiei morfologice și a screeningului GBS pe ferestrele gestaționale din tabel.",
  "optionRationales": [
   "Tabelul 13-3 enumeră aceste analize la vizita inițială.",
   "Cvadruplul este plasat la 16-18 săptămâni.",
   "Ecografia de datare și anomalii majore este la 18-20 săptămâni.",
   "Screening-ul GBS este programat la 32-37 săptămâni.",
   "Testul de încărcare la 1 oră este la 24-28 săptămâni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută GBS pe vizita inițială și testul de glucoză pe fereastra cvadruplului."
  },
  "textbookExpressions": [
   "16-18 săptămâni",
   "streptococul de grup B"
  ]
 },
 {
  "id": "obstetrica-adv-046",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la amniocenteză:",
  "options": [
   "Constă în aspirație transabdominală a lichidului amniotic după 16 săptămâni, pentru α-fetoproteină amniotică și cariotip, cu risc suplimentar de 0,5% de avort spontan",
   "Se efectuează la 9-12 săptămâni, prin aspirație transcervicală a vilozităților",
   "Este testul non-invaziv cu cea mai mică rată de rezultate fals-pozitive",
   "Colectează sânge din vena ombilicală după 18 săptămâni",
   "Înlocuiește cvadruplul ca screening de rutină la vizita inițială"
  ],
  "correct": [
   0
  ],
  "explanation": "Constă în aspirație transabdominală a lichidului amniotic după 16 săptămâni, pentru α-fetoproteină amniotică și cariotip, cu risc suplimentar de 0,5% de avort spontan — Corect: Descrierea, fereastra, țintele și riscul de 0,5% sunt din tabelul 13-4.\n\nSe efectuează la 9-12 săptămâni, prin aspirație transcervicală a vilozităților — Incorect: Fereastra 9-12 săptămâni definește biopsia de vilozități coriale.\n\nEste testul non-invaziv cu cea mai mică rată de rezultate fals-pozitive — Incorect: Cea mai mică rată de fals-pozitive aparține testului complet integrat.\n\nColectează sânge din vena ombilicală după 18 săptămâni — Incorect: Sângele ombilical după 18 săptămâni definește PPSO.\n\nÎnlocuiește cvadruplul ca screening de rutină la vizita inițială — Incorect: Cvadruplul rămâne screeningul de rutină la 16-18 săptămâni.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 298, Îngrijirea prenatală — Amniocenteza (pagini PDF: 76).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    298
   ],
   "pdfPages": [
    76
   ],
   "section": "Îngrijirea prenatală — Amniocenteza"
  },
  "learningObjective": "Recunoașterea ferestrei după 16 săptămâni, a țintelor (AFP, cariotip) și a riscului suplimentar de 0,5%.",
  "optionRationales": [
   "Descrierea, fereastra, țintele și riscul de 0,5% sunt din tabelul 13-4.",
   "Fereastra 9-12 săptămâni definește biopsia de vilozități coriale.",
   "Cea mai mică rată de fals-pozitive aparține testului complet integrat.",
   "Sângele ombilical după 18 săptămâni definește PPSO.",
   "Cvadruplul rămâne screeningul de rutină la 16-18 săptămâni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate distractoarele sunt rânduri reale din același tabel 13-4, permutate pe amniocenteză."
  },
  "textbookExpressions": [
   "după 16 săptămâni",
   "0,5% de avort"
  ]
 },
 {
  "id": "obstetrica-adv-047",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Biopsia de vilozități coriale:",
  "options": [
   "Constă în aspirație transabdominală sau transcervicală a țesutului corionic vilozitar la 9-12 săptămâni de gestație",
   "Este indicată pentru detectarea precoce a anomaliilor cromozomiale la paciente cu risc crescut (vârstă înaintată, naștere anterioară de feți cu defecte genetice)",
   "Măsoară α-fetoproteina amniotică după 16 săptămâni",
   "Colectează sânge din vena ombilicală pentru izoimunizare Rh",
   "Se efectuează de rutină la toate gravidele la 24-28 de săptămâni"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Constă în aspirație transabdominală sau transcervicală a țesutului corionic vilozitar la 9-12 săptămâni de gestație — Corect: Aspirația transabdominală sau transcervicală la 9-12 săptămâni este explicită.\n\nEste indicată pentru detectarea precoce a anomaliilor cromozomiale la paciente cu risc crescut (vârstă înaintată, naștere anterioară de feți cu defecte genetice) — Corect: Indicația de detecție precoce la risc crescut este din tabel.\n\nMăsoară α-fetoproteina amniotică după 16 săptămâni — Incorect: AFP amniotică după 16 săptămâni aparține amniocentezei.\n\nColectează sânge din vena ombilicală pentru izoimunizare Rh — Incorect: Sângele ombilical definește PPSO.\n\nSe efectuează de rutină la toate gravidele la 24-28 de săptămâni — Incorect: 24-28 de săptămâni este fereastra testului de glucoză.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 298, Îngrijirea prenatală — Biopsia de vilozități coriale (pagini PDF: 76).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    298
   ],
   "pdfPages": [
    76
   ],
   "section": "Îngrijirea prenatală — Biopsia de vilozități coriale"
  },
  "learningObjective": "Separarea ferestrei 9–12 săptămâni a CVS de amniocenteză și de PPSO.",
  "optionRationales": [
   "Aspirația transabdominală sau transcervicală la 9-12 săptămâni este explicită.",
   "Indicația de detecție precoce la risc crescut este din tabel.",
   "AFP amniotică după 16 săptămâni aparține amniocentezei.",
   "Sângele ombilical definește PPSO.",
   "24-28 de săptămâni este fereastra testului de glucoză."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică ferestrele amniocentezei, PPSO și screeningului DZG asupra CVS."
  },
  "textbookExpressions": [
   "9-12 săptămâni",
   "vilozităţi coriale"
  ]
 },
 {
  "id": "obstetrica-adv-048",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Testul complet integrat și prelevarea percutană de sânge ombilical:",
  "options": [
   "Testul integrat combină măsurarea ultrasonografică a translucenței nuchale și PAPP-A în primul trimestru cu screening-ul cvadruplu în al doilea trimestru",
   "Este descris ca având cea mai mică rată a rezultatelor fals-pozitive dintre testele non-invazive",
   "PPSO colectează sânge din vena ombilicală după 18 săptămâni, pentru defecte cromozomiale, infecție fetală și izoimunizare Rh",
   "PAPP-A se dozează în trimestrul al doilea, odată cu inhibina A",
   "PPSO se efectuează la 9-12 săptămâni, în locul biopsiei de vilozități"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Testul integrat combină măsurarea ultrasonografică a translucenței nuchale și PAPP-A în primul trimestru cu screening-ul cvadruplu în al doilea trimestru — Corect: Componenții T1 (TN, PAPP-A) și T2 (cvadruplu) sunt din tabel.\n\nEste descris ca având cea mai mică rată a rezultatelor fals-pozitive dintre testele non-invazive — Corect: Cea mai mică rată de fals-pozitive pentru testele non-invazive este explicită.\n\nPPSO colectează sânge din vena ombilicală după 18 săptămâni, pentru defecte cromozomiale, infecție fetală și izoimunizare Rh — Corect: Fereastra după 18 săptămâni și țintele PPSO sunt citate.\n\nPAPP-A se dozează în trimestrul al doilea, odată cu inhibina A — Incorect: PAPP-A aparține primului trimestru.\n\nPPSO se efectuează la 9-12 săptămâni, în locul biopsiei de vilozități — Incorect: 9-12 săptămâni este fereastra CVS, nu a PPSO.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 298, Îngrijirea prenatală — Test integrat și PPSO (pagini PDF: 76).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    298
   ],
   "pdfPages": [
    76
   ],
   "section": "Îngrijirea prenatală — Test integrat și PPSO"
  },
  "learningObjective": "Corelarea componenților testului integrat cu fereastra PPSO după 18 săptămâni.",
  "optionRationales": [
   "Componenții T1 (TN, PAPP-A) și T2 (cvadruplu) sunt din tabel.",
   "Cea mai mică rată de fals-pozitive pentru testele non-invazive este explicită.",
   "Fereastra după 18 săptămâni și țintele PPSO sunt citate.",
   "PAPP-A aparține primului trimestru.",
   "9-12 săptămâni este fereastra CVS, nu a PPSO."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează trimestrul PAPP-A și substituie PPSO pe fereastra CVS."
  },
  "textbookExpressions": [
   "Test complet integrat",
   "după 18 săptămâni"
  ]
 },
 {
  "id": "obstetrica-adv-049",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Creșterea ponderală și nutrienții citați în sarcină includ:",
  "options": [
   "Necesarul de calciu este 1.000-1.300 mg/zi, cu o creștere de 50%",
   "Necesarul de proteine este 60 g/zi, cu o creștere de 30%",
   "Ținta ponderală este 12-18 kg la IMC sub 19,8",
   "Ținta ponderală este 6-11 kg la IMC peste 26",
   "Ținta ponderală este 12-18 kg la IMC între 19,8 și 26"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Necesarul de calciu este 1.000-1.300 mg/zi, cu o creștere de 50% — Corect: Doza și creșterea de 50% a calciului sunt din tabelul 13-2.\n\nNecesarul de proteine este 60 g/zi, cu o creștere de 30% — Corect: Cei 60 g/zi (+30%) de proteine sunt expliciți.\n\nȚinta ponderală este 12-18 kg la IMC sub 19,8 — Corect: Intervalul 12-18 kg pentru IMC <19,8 este citat.\n\nȚinta ponderală este 6-11 kg la IMC peste 26 — Corect: Intervalul 6-11 kg pentru IMC >26 este citat.\n\nȚinta ponderală este 12-18 kg la IMC între 19,8 și 26 — Incorect: Pentru IMC 19,8-26 ținta este 11-15 kg, nu 12-18 kg.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 297, Îngrijirea prenatală — Nutriție și creștere ponderală (pagini PDF: 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    297
   ],
   "pdfPages": [
    75
   ],
   "section": "Îngrijirea prenatală — Nutriție și creștere ponderală"
  },
  "learningObjective": "Aplicarea dozelor de calciu și proteine și a țintelor ponderale stratificate după IMC.",
  "optionRationales": [
   "Doza și creșterea de 50% a calciului sunt din tabelul 13-2.",
   "Cei 60 g/zi (+30%) de proteine sunt expliciți.",
   "Intervalul 12-18 kg pentru IMC <19,8 este citat.",
   "Intervalul 6-11 kg pentru IMC >26 este citat.",
   "Pentru IMC 19,8-26 ținta este 11-15 kg, nu 12-18 kg."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul mută intervalul 12-18 kg pe categoria IMC 19,8-26, unde textul dă 11-15 kg."
  },
  "textbookExpressions": [
   "1.000-1.300 mg/zi",
   "60 g/zi"
  ]
 },
 {
  "id": "obstetrica-adv-050",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Conform notei, grupul cu risc de nutriție precară în sarcină este reprezentat de:",
  "options": [
   "Adolescente, femei cu statut socioeconomic scăzut, diete restrictive, subponderale, fumătoare, alcoolice sau consumatoare de droguri",
   "Doar gravidele cu IMC peste 26, fără alți factori",
   "Gravidele care au făcut deja screening cvadruplu normal",
   "Pacientele cu prezentație craniană după 37 de săptămâni",
   "Femeile care alăptează, independent de aportul din sarcină"
  ],
  "correct": [
   0
  ],
  "explanation": "Adolescente, femei cu statut socioeconomic scăzut, diete restrictive, subponderale, fumătoare, alcoolice sau consumatoare de droguri — Corect: Nota enumeră exact aceste categorii.\n\nDoar gravidele cu IMC peste 26, fără alți factori — Incorect: IMC >26 are altă țintă ponderală, nu definește singur riscul de nutriție precară.\n\nGravidele care au făcut deja screening cvadruplu normal — Incorect: Cvadruplul normal nu exclude riscul nutrițional.\n\nPacientele cu prezentație craniană după 37 de săptămâni — Incorect: Prezentația nu este criteriu nutrițional.\n\nFemeile care alăptează, independent de aportul din sarcină — Incorect: Alăptarea este discutată la lăuzie, nu în această notă.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 297, Îngrijirea prenatală — Riscul nutrițional (pagini PDF: 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    297
   ],
   "pdfPages": [
    75
   ],
   "section": "Îngrijirea prenatală — Riscul nutrițional"
  },
  "learningObjective": "Identificarea grupurilor de risc nutrițional enumerate în nota „De reținut”.",
  "optionRationales": [
   "Nota enumeră exact aceste categorii.",
   "IMC >26 are altă țintă ponderală, nu definește singur riscul de nutriție precară.",
   "Cvadruplul normal nu exclude riscul nutrițional.",
   "Prezentația nu este criteriu nutrițional.",
   "Alăptarea este discutată la lăuzie, nu în această notă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii substituie grupurile din notă cu entități obstetricale reale, dar din alte secțiuni."
  },
  "textbookExpressions": [
   "nutriţie precară",
   "adolescente"
  ]
 },
 {
  "id": "obstetrica-adv-051",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "În diabetul zaharat gestațional, țintele calorice citate după IMC sunt:",
  "options": [
   "40 kcal/kg/zi la IMC sub 22",
   "30 kcal/kg/zi la IMC între 22 și 27",
   "12-15 kcal/kg/zi la IMC peste 29",
   "40 kcal/kg/zi la IMC peste 29, identic femeilor subponderale",
   "Dieta se concentrează într-o singură masă vespertină, fără gustări"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "40 kcal/kg/zi la IMC sub 22 — Corect: Cei 40 kcal/kg/zi la IMC <22 sunt expliciți.\n\n30 kcal/kg/zi la IMC între 22 și 27 — Corect: Cei 30 kcal/kg/zi la IMC 22-27 sunt citați.\n\n12-15 kcal/kg/zi la IMC peste 29 — Corect: Intervalul 12-15 kcal/kg/zi la IMC >29 este din text.\n\n40 kcal/kg/zi la IMC peste 29, identic femeilor subponderale — Incorect: La IMC >29 țintele sunt 12-15, nu 40 kcal/kg/zi.\n\nDieta se concentrează într-o singură masă vespertină, fără gustări — Incorect: Textul cere trei mese și două-patru gustări, cu nutrienți distribuiți uniform.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 299, Complicații medicale — Dieta în DZG (pagini PDF: 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    299
   ],
   "pdfPages": [
    77
   ],
   "section": "Complicații medicale — Dieta în DZG"
  },
  "learningObjective": "Memorarea treptelor calorice pe IMC, distinct de inversarea treptei pentru obezitate.",
  "optionRationales": [
   "Cei 40 kcal/kg/zi la IMC <22 sunt expliciți.",
   "Cei 30 kcal/kg/zi la IMC 22-27 sunt citați.",
   "Intervalul 12-15 kcal/kg/zi la IMC >29 este din text.",
   "La IMC >29 țintele sunt 12-15, nu 40 kcal/kg/zi.",
   "Textul cere trei mese și două-patru gustări, cu nutrienți distribuiți uniform."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică treapta calorică a IMC scăzut asupra obezității și comprimă mesele."
  },
  "textbookExpressions": [
   "40 kcal/kg/zi",
   "12-15 kcal/kg/zi"
  ]
 },
 {
  "id": "obstetrica-adv-052",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Hyperemesis gravidarum:",
  "options": [
   "Constă în greață și vărsături severe, care afectează 1% dintre gravide",
   "Poate fi complicat de dezechilibre hidro-electrolitice, scădere în greutate și cetonurie",
   "Se tratează prin spitalizare, administrare de fluide și antiemetice",
   "Este identic grețurilor matinale care se ameliorează invariabil până la săptămâna 8",
   "Se tratează de primă intenție cu fluorochinolone, ca ITU din sarcină"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Constă în greață și vărsături severe, care afectează 1% dintre gravide — Corect: Definiția și cifra de 1% sunt din nota „De reținut”.\n\nPoate fi complicat de dezechilibre hidro-electrolitice, scădere în greutate și cetonurie — Corect: Cele trei complicații sunt enumerate.\n\nSe tratează prin spitalizare, administrare de fluide și antiemetice — Corect: Spitalizarea, fluidele și antiemeticele sunt tratamentul citat.\n\nEste identic grețurilor matinale care se ameliorează invariabil până la săptămâna 8 — Incorect: Greața matinală obișnuită se ameliorează de obicei până la trimestrul II, nu este hyperemesis.\n\nSe tratează de primă intenție cu fluorochinolone, ca ITU din sarcină — Incorect: Fluorochinolonele sunt interzise în ITU din sarcină, nu tratează hyperemesis.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 302, Complicații medicale — Hyperemesis gravidarum (pagini PDF: 80).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    302
   ],
   "pdfPages": [
    80
   ],
   "section": "Complicații medicale — Hyperemesis gravidarum"
  },
  "learningObjective": "Recunoașterea pragului de 1%, a complicațiilor metabolice și a tratamentului spitalicesc.",
  "optionRationales": [
   "Definiția și cifra de 1% sunt din nota „De reținut”.",
   "Cele trei complicații sunt enumerate.",
   "Spitalizarea, fluidele și antiemeticele sunt tratamentul citat.",
   "Greața matinală obișnuită se ameliorează de obicei până la trimestrul II, nu este hyperemesis.",
   "Fluorochinolonele sunt interzise în ITU din sarcină, nu tratează hyperemesis."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă hyperemesis-ul cu greața fiziologică și importă un antibiotic teratogen."
  },
  "textbookExpressions": [
   "Hyperemesis gravidarum",
   "cetonurie"
  ]
 },
 {
  "id": "obstetrica-adv-053",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Warfarina și fluorochinolonele în sarcină:",
  "options": [
   "Warfarina are efecte teratogene și nu trebuie utilizată în timpul sarcinii, dar prezintă siguranță în timpul alăptării",
   "Fluorochinolonele nu trebuie utilizate pentru tratamentul ITU din cauza efectelor teratogene",
   "Warfarina înlocuiește heparina ca anticoagulant de primă intenție în trimestrul I",
   "Fluorochinolonele sunt antibioticele de elecție ale ITU din sarcină, înaintea amoxicilinei",
   "Warfarina este contraindicată și la alăptare, identic trimestrului I"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Warfarina are efecte teratogene și nu trebuie utilizată în timpul sarcinii, dar prezintă siguranță în timpul alăptării — Corect: Nota despre warfarină este explicită, inclusiv siguranța la alăptare.\n\nFluorochinolonele nu trebuie utilizate pentru tratamentul ITU din cauza efectelor teratogene — Corect: Nota despre fluorochinolone în ITU este explicită.\n\nWarfarina înlocuiește heparina ca anticoagulant de primă intenție în trimestrul I — Incorect: În sarcină se folosește heparina/HGMM, nu warfarina.\n\nFluorochinolonele sunt antibioticele de elecție ale ITU din sarcină, înaintea amoxicilinei — Incorect: ITU se tratează cu amoxicilină, nitrofurantoină sau cefalexin.\n\nWarfarina este contraindicată și la alăptare, identic trimestrului I — Incorect: Textul precizează siguranța warfarinei la alăptare.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 302, Complicații medicale — Teratogeni medicamentoși (pagini PDF: 80).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    302
   ],
   "pdfPages": [
    80
   ],
   "section": "Complicații medicale — Teratogeni medicamentoși"
  },
  "learningObjective": "Aplicarea interdicției warfarinei în sarcină (cu siguranță la alăptare) și a fluorochinolonelor în ITU.",
  "optionRationales": [
   "Nota despre warfarină este explicită, inclusiv siguranța la alăptare.",
   "Nota despre fluorochinolone în ITU este explicită.",
   "În sarcină se folosește heparina/HGMM, nu warfarina.",
   "ITU se tratează cu amoxicilină, nitrofurantoină sau cefalexin.",
   "Textul precizează siguranța warfarinei la alăptare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează locul warfarinei (sarcină versus alăptare) și pun fluorochinolona ca tratament de elecție."
  },
  "textbookExpressions": [
   "Warfarina",
   "Fluorochinolonele"
  ]
 },
 {
  "id": "obstetrica-adv-054",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Tratamentul astmului preexistent în sarcină:",
  "options": [
   "Forma ușor intermitentă se tratează cu β-agoniști cu durată scurtă (de exemplu albuterol) la nevoie",
   "Forma ușor persistentă asociază un corticosteroid inhalator în doze mici",
   "Forma moderat persistentă se tratează cu corticosteroid inhalator în doză medie sau cu doze mici plus un β-agonist cu durată lungă (de exemplu salmeterol)",
   "Forma sever persistentă se tratează cu corticosteroid inhalator în doze mari plus un β-agonist cu durată lungă",
   "Forma severă se tratează doar cu teofilină orală, fără corticoid inhalator"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Forma ușor intermitentă se tratează cu β-agoniști cu durată scurtă (de exemplu albuterol) la nevoie — Corect: Albuterolul la nevoie pentru forma intermitentă este explicit.\n\nForma ușor persistentă asociază un corticosteroid inhalator în doze mici — Corect: Corticoidul inhalator în doze mici este treapta ușor persistentă.\n\nForma moderat persistentă se tratează cu corticosteroid inhalator în doză medie sau cu doze mici plus un β-agonist cu durată lungă (de exemplu salmeterol) — Corect: Doza medie sau asocierea cu salmeterol definește forma moderată.\n\nForma sever persistentă se tratează cu corticosteroid inhalator în doze mari plus un β-agonist cu durată lungă — Corect: Dozele mari plus LABA definesc forma severă.\n\nForma severă se tratează doar cu teofilină orală, fără corticoid inhalator — Incorect: Teofilina nu este treapta citată pentru forma severă.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 302, Complicații medicale — Astmul matern (pagini PDF: 80).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    302
   ],
   "pdfPages": [
    80
   ],
   "section": "Complicații medicale — Astmul matern"
  },
  "learningObjective": "Ierarhizarea treptelor de tratament ale astmului, de la intermitent la sever persistent.",
  "optionRationales": [
   "Albuterolul la nevoie pentru forma intermitentă este explicit.",
   "Corticoidul inhalator în doze mici este treapta ușor persistentă.",
   "Doza medie sau asocierea cu salmeterol definește forma moderată.",
   "Dozele mari plus LABA definesc forma severă.",
   "Teofilina nu este treapta citată pentru forma severă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul înlocuiește treapta severă (CSI doze mari + LABA) cu un bronhodilatator necitate."
  },
  "textbookExpressions": [
   "albuterol",
   "salmeterol"
  ]
 },
 {
  "id": "obstetrica-adv-055",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Tromboza venoasă profundă maternă:",
  "options": [
   "Riscul crește prin stază venoasă și prin creșterea relativă a factorilor de coagulare circulanți",
   "La diagnostic se folosește heparină IV pentru a menține PTI la dublul valorii normale, sau HGMM cu antifactor Xa 0,5-1,2 UI/mL la 4 ore după injectare",
   "Anticoagulantele se continuă postpartum 6 săptămâni (warfarină sau enoxaparină)",
   "Warfarina este anticoagulantul de primă intenție încă din trimestrul I",
   "Diagnosticul se bazează doar pe edemul gambier, fără ultrasonografie Doppler"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Riscul crește prin stază venoasă și prin creșterea relativă a factorilor de coagulare circulanți — Corect: Mecanismul stază plus factori de coagulare este explicit.\n\nLa diagnostic se folosește heparină IV pentru a menține PTI la dublul valorii normale, sau HGMM cu antifactor Xa 0,5-1,2 UI/mL la 4 ore după injectare — Corect: PTT dublu sau anti-Xa 0,5-1,2 UI/mL sunt țintele citate.\n\nAnticoagulantele se continuă postpartum 6 săptămâni (warfarină sau enoxaparină) — Corect: Cele 6 săptămâni postpartum cu warfarină sau enoxaparină sunt din text.\n\nWarfarina este anticoagulantul de primă intenție încă din trimestrul I — Incorect: Warfarina este teratogenă în sarcină; heparina/HGMM sunt de primă intenție.\n\nDiagnosticul se bazează doar pe edemul gambier, fără ultrasonografie Doppler — Incorect: Edemul este frecvent și fără TVP; US și Doppler sunt mijloacele sigure.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 302, Complicații medicale — TVP maternă (pagini PDF: 80).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    302
   ],
   "pdfPages": [
    80
   ],
   "section": "Complicații medicale — TVP maternă"
  },
  "learningObjective": "Corelarea hipercoagulabilității de sarcină cu țintele de heparină/HGMM și cu durata postpartum de 6 săptămâni.",
  "optionRationales": [
   "Mecanismul stază plus factori de coagulare este explicit.",
   "PTT dublu sau anti-Xa 0,5-1,2 UI/mL sunt țintele citate.",
   "Cele 6 săptămâni postpartum cu warfarină sau enoxaparină sunt din text.",
   "Warfarina este teratogenă în sarcină; heparina/HGMM sunt de primă intenție.",
   "Edemul este frecvent și fără TVP; US și Doppler sunt mijloacele sigure."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reintroduc warfarina în trimestrul I și transformă edemul fiziologic în criteriu diagnostic unic."
  },
  "textbookExpressions": [
   "enoxaparină",
   "6 săptămâni"
  ]
 },
 {
  "id": "obstetrica-adv-056",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Tratamentul citat al infecțiilor urinare materne necomplicate este:",
  "options": [
   "Amoxicilină, nitrofurantoină sau cefalexin, 3 până la 7 zile",
   "Fluorochinolone 14 zile, ca în pielonefrita netratată a adultului non-gravid",
   "Warfarină orală, pentru a preveni TVP asociată",
   "Doar hidratare, fără antibiotic, deoarece ITU este fiziologică",
   "Metotrexat în doză unică, ca în ectopica neruptă"
  ],
  "correct": [
   0
  ],
  "explanation": "Amoxicilină, nitrofurantoină sau cefalexin, 3 până la 7 zile — Corect: Cele trei antibiotice și durata 3-7 zile sunt explicite.\n\nFluorochinolone 14 zile, ca în pielonefrita netratată a adultului non-gravid — Incorect: Fluorochinolonele sunt interzise ca teratogene.\n\nWarfarină orală, pentru a preveni TVP asociată — Incorect: Warfarina nu tratează ITU.\n\nDoar hidratare, fără antibiotic, deoarece ITU este fiziologică — Incorect: ITU poate fi simptomatică sau asimptomatică, dar se tratează.\n\nMetotrexat în doză unică, ca în ectopica neruptă — Incorect: Metotrexatul aparține ectopicei, nu ITU.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 302, Complicații medicale — ITU maternă (pagini PDF: 80).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    302
   ],
   "pdfPages": [
    80
   ],
   "section": "Complicații medicale — ITU maternă"
  },
  "learningObjective": "Identificarea celor trei antibiotice permise și a duratei de 3–7 zile.",
  "optionRationales": [
   "Cele trei antibiotice și durata 3-7 zile sunt explicite.",
   "Fluorochinolonele sunt interzise ca teratogene.",
   "Warfarina nu tratează ITU.",
   "ITU poate fi simptomatică sau asimptomatică, dar se tratează.",
   "Metotrexatul aparține ectopicei, nu ITU."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt scheme reale din același capitol (fluorochinolone interzise, warfarină, metotrexat), aplicate greșit ITU."
  },
  "textbookExpressions": [
   "nitrofurantoină",
   "cefalexin"
  ]
 },
 {
  "id": "obstetrica-adv-057",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Consumul de cocaină în sarcină asociază, conform tabelului 13-6:",
  "options": [
   "La mamă: aritmie, infarct miocardic, hemoragie subarahnoidiană, convulsii, accident vascular cerebral și dezlipirea prematură a placentei",
   "La făt: dezlipire de placentă, RCIU, prematuritate, anomalii faciale, dezvoltare intelectuală întârziată și deces fetal",
   "Sindrom alcoolic fetal, cu retard mental și neuropatie senzorială-motorie",
   "Cancer vaginal și de col ulterior, ca dietilstilbestrolul",
   "Anomalia Ebstein, ca litiul"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "La mamă: aritmie, infarct miocardic, hemoragie subarahnoidiană, convulsii, accident vascular cerebral și dezlipirea prematură a placentei — Corect: Lista maternă din tabel include evenimentele vasculare și abruptio.\n\nLa făt: dezlipire de placentă, RCIU, prematuritate, anomalii faciale, dezvoltare intelectuală întârziată și deces fetal — Corect: Lista fetală include abruptio, RCIU, prematuritate, anomalii faciale și deces.\n\nSindrom alcoolic fetal, cu retard mental și neuropatie senzorială-motorie — Incorect: Sindromul alcoolic fetal aparține etanolului.\n\nCancer vaginal și de col ulterior, ca dietilstilbestrolul — Incorect: Adenocarcinomul vaginal/cervical ulterior aparține DES.\n\nAnomalia Ebstein, ca litiul — Incorect: Anomalia Ebstein aparține litiului.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 303, Teratogeni — Cocaina (pagini PDF: 81).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    303
   ],
   "pdfPages": [
    81
   ],
   "section": "Teratogeni — Cocaina"
  },
  "learningObjective": "Separarea complicațiilor materno-fetale ale cocainei de cele ale etanolului, DES și litiului.",
  "optionRationales": [
   "Lista maternă din tabel include evenimentele vasculare și abruptio.",
   "Lista fetală include abruptio, RCIU, prematuritate, anomalii faciale și deces.",
   "Sindromul alcoolic fetal aparține etanolului.",
   "Adenocarcinomul vaginal/cervical ulterior aparține DES.",
   "Anomalia Ebstein aparține litiului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fiecare distractor este un risc teratogen real din tabelele 13-6 și 13-7, atribuit cocainei."
  },
  "textbookExpressions": [
   "Cocaină",
   "Dezlipirea prematură"
  ]
 },
 {
  "id": "obstetrica-adv-058",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Sindromul alcoolic fetal, citat la consumul de etanol, include:",
  "options": [
   "Retard mental, RCIU, neuropatie senzorială și motorie și anomalii faciale, plus avort spontan și deces fetal intrauterin",
   "Anomalia Ebstein și diabet insipid nefrogen",
   "Kernicter prin sulfonamide",
   "Modificări de culoare dentară, ca tetraciclina",
   "Anomalii de cartilaj, ca fluorochinolonele"
  ],
  "correct": [
   0
  ],
  "explanation": "Retard mental, RCIU, neuropatie senzorială și motorie și anomalii faciale, plus avort spontan și deces fetal intrauterin — Corect: Tabelul 13-6 descrie exact această constelație la etanol.\n\nAnomalia Ebstein și diabet insipid nefrogen — Incorect: Ebstein și diabetul insipid nefrogen țin de litiu.\n\nKernicter prin sulfonamide — Incorect: Kernicterul este al sulfonamidelor.\n\nModificări de culoare dentară, ca tetraciclina — Incorect: Colorarea dentară este a tetraciclinei.\n\nAnomalii de cartilaj, ca fluorochinolonele — Incorect: Anomaliile de cartilaj sunt ale fluorochinolonelor.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 303, Teratogeni — Etanolul (pagini PDF: 81).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    303
   ],
   "pdfPages": [
    81
   ],
   "section": "Teratogeni — Etanolul"
  },
  "learningObjective": "Identificarea constellationii sindromului alcoolic fetal, distinct de alte malformații tabelate.",
  "optionRationales": [
   "Tabelul 13-6 descrie exact această constelație la etanol.",
   "Ebstein și diabetul insipid nefrogen țin de litiu.",
   "Kernicterul este al sulfonamidelor.",
   "Colorarea dentară este a tetraciclinei.",
   "Anomaliile de cartilaj sunt ale fluorochinolonelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt malformații reale din tabelul 13-7, ușor de mutat pe etanol."
  },
  "textbookExpressions": [
   "Sindromul alcoolic fetal",
   "anomalii faciale"
  ]
 },
 {
  "id": "obstetrica-adv-059",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Medicamentele teratogene din tabelul 13-7 asociază corect:",
  "options": [
   "Litiul cu anomalia Ebstein",
   "Acidul valproic cu defecte de tub neural în circa 1% din sarcini",
   "Dietilstilbestrolul cu cancer vaginal și de col uterin ulterior (adenocarcinom)",
   "Tetraciclina cu anomalii ale scheletului, ale membrelor și modificări de culoare dentară",
   "IECA cu anomalia Ebstein, nu cu anomalii renale"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Litiul cu anomalia Ebstein — Corect: Anomalia Ebstein este rândul litiului.\n\nAcidul valproic cu defecte de tub neural în circa 1% din sarcini — Corect: Defectele de tub neural (~1%) sunt ale valproatului.\n\nDietilstilbestrolul cu cancer vaginal și de col uterin ulterior (adenocarcinom) — Corect: Adenocarcinomul vaginal/cervical ulterior este al DES.\n\nTetraciclina cu anomalii ale scheletului, ale membrelor și modificări de culoare dentară — Corect: Schelet, membre și dinți sunt ale tetraciclinei.\n\nIECA cu anomalia Ebstein, nu cu anomalii renale — Incorect: IECA asociază anomalii renale și scăderea osificării craniului, nu Ebstein.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 303, Teratogeni — Medicamente uzuale (pagini PDF: 81).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    303
   ],
   "pdfPages": [
    81
   ],
   "section": "Teratogeni — Medicamente uzuale"
  },
  "learningObjective": "Asocierea fiecărui medicament cu malformația sa specifică din tabel.",
  "optionRationales": [
   "Anomalia Ebstein este rândul litiului.",
   "Defectele de tub neural (~1%) sunt ale valproatului.",
   "Adenocarcinomul vaginal/cervical ulterior este al DES.",
   "Schelet, membre și dinți sunt ale tetraciclinei.",
   "IECA asociază anomalii renale și scăderea osificării craniului, nu Ebstein."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul permută Ebstein de pe litiu pe IECA, unde tabelul pune rinichiul și craniul."
  },
  "textbookExpressions": [
   "Anomalia Ebstein",
   "Acid valproic"
  ]
 },
 {
  "id": "obstetrica-adv-060",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Toxoplasmoza congenitală:",
  "options": [
   "Poate produce hidrocefalie, calcificări intracraniene, corioretinită, microcefalie, avort spontan și convulsii",
   "Diagnosticul poate folosi PCR din lichidul amniotic pentru Toxoplasma gondii sau screening-ul anticorpilor serici",
   "Tratamentul include pirimetamină, sulfadiazină și acid folinic; mama evită grădinăritul, carnea nepreparată, laptele nepasteurizat și litierele de pisici",
   "Nașterea prin cezariană pentru leziuni active este tratamentul de primă intenție, ca în herpes",
   "Screening-ul antigenului după 34 de săptămâni definește diagnosticul, ca la streptococul de grup B"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Poate produce hidrocefalie, calcificări intracraniene, corioretinită, microcefalie, avort spontan și convulsii — Corect: Efectele fetale din tabel includ hidrocefalia, calcificările și corioretinita.\n\nDiagnosticul poate folosi PCR din lichidul amniotic pentru Toxoplasma gondii sau screening-ul anticorpilor serici — Corect: PCR amniotic și serologia sunt mijloacele citate.\n\nTratamentul include pirimetamină, sulfadiazină și acid folinic; mama evită grădinăritul, carnea nepreparată, laptele nepasteurizat și litierele de pisici — Corect: Schema și măsurile de evitare sunt explicite.\n\nNașterea prin cezariană pentru leziuni active este tratamentul de primă intenție, ca în herpes — Incorect: Cezariana pentru leziuni active aparține herpesului.\n\nScreening-ul antigenului după 34 de săptămâni definește diagnosticul, ca la streptococul de grup B — Incorect: Antigenul după 34 de săptămâni aparține streptococului de grup B.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 304, Infecții congenitale — Toxoplasmoza (pagini PDF: 82).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    304
   ],
   "pdfPages": [
    82
   ],
   "section": "Infecții congenitale — Toxoplasmoza"
  },
  "learningObjective": "Recunoașterea tetradei clasice, a PCR amniotic și a triadei terapeutice pirimetamină–sulfadiazină–folinic.",
  "optionRationales": [
   "Efectele fetale din tabel includ hidrocefalia, calcificările și corioretinita.",
   "PCR amniotic și serologia sunt mijloacele citate.",
   "Schema și măsurile de evitare sunt explicite.",
   "Cezariana pentru leziuni active aparține herpesului.",
   "Antigenul după 34 de săptămâni aparține streptococului de grup B."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă tratamentul HSV și fereastra GBS asupra toxoplasmozei."
  },
  "textbookExpressions": [
   "corioretinită",
   "Pirimetamină"
  ]
 },
 {
  "id": "obstetrica-adv-061",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "În rubeola congenitală, textul precizează că:",
  "options": [
   "Mama trebuie imunizată înainte de a încerca să rămână însărcinată; nu există tratament dacă infecția se dezvoltă în sarcină, iar imunoglobulina rubeolei nu are beneficiu dovedit",
   "Penicilina după desensibilizare este tratamentul de elecție, ca în sifilis",
   "AZT reduce semnificativ transmiterea verticală, ca în HIV",
   "Ganciclovirul reduce efectele la nou-născut, ca în CMV",
   "β-lactaminele IV în travaliu sunt profilaxia, ca la streptococul de grup B"
  ],
  "correct": [
   0
  ],
  "explanation": "Mama trebuie imunizată înainte de a încerca să rămână însărcinată; nu există tratament dacă infecția se dezvoltă în sarcină, iar imunoglobulina rubeolei nu are beneficiu dovedit — Corect: Imunizarea preconcepțională, absența tratamentului și lipsa beneficiului Ig sunt din tabel.\n\nPenicilina după desensibilizare este tratamentul de elecție, ca în sifilis — Incorect: Penicilina este tratamentul sifilisului.\n\nAZT reduce semnificativ transmiterea verticală, ca în HIV — Incorect: AZT aparține HIV.\n\nGanciclovirul reduce efectele la nou-născut, ca în CMV — Incorect: Ganciclovirul aparține CMV neonatal.\n\nβ-lactaminele IV în travaliu sunt profilaxia, ca la streptococul de grup B — Incorect: β-lactaminele IV în travaliu aparțin GBS.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 304, Infecții congenitale — Rubeola (pagini PDF: 82).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    304
   ],
   "pdfPages": [
    82
   ],
   "section": "Infecții congenitale — Rubeola"
  },
  "learningObjective": "Identificarea strategiei preconcepționale și a absenței tratamentului/Ig în rubeola de sarcină.",
  "optionRationales": [
   "Imunizarea preconcepțională, absența tratamentului și lipsa beneficiului Ig sunt din tabel.",
   "Penicilina este tratamentul sifilisului.",
   "AZT aparține HIV.",
   "Ganciclovirul aparține CMV neonatal.",
   "β-lactaminele IV în travaliu aparțin GBS."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fiecare distractor este tratamentul real al altei infecții din același tabel 13-8."
  },
  "textbookExpressions": [
   "Niciun tratament",
   "imunoglobulinei rubeolei"
  ]
 },
 {
  "id": "obstetrica-adv-062",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre infecțiile congenitale din tabelul 13-8:",
  "options": [
   "Sifilisul se diagnostichează prenatal precoce prin RPR sau VDRL, cu confirmare FTA-ABS, și se tratează cu penicilină (desensibilizare dacă alergie)",
   "Herpesul simplex impune naștere prin cezariană în cazul leziunilor active sau al unui focar primar; aciclovirul poate fi benefic la nou-născuți",
   "Streptococul de grup B se depistează prin antigen după 34 de săptămâni; în travaliu se folosesc β-lactamine sau clindamicină IV",
   "Parvovirusul B19 se tratează cu penicilină, identic sifilisului",
   "Toxoplasmoza se previne prin vaccin viu atenuat administrat în trimestrul I"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sifilisul se diagnostichează prenatal precoce prin RPR sau VDRL, cu confirmare FTA-ABS, și se tratează cu penicilină (desensibilizare dacă alergie) — Corect: RPR/VDRL, FTA-ABS și penicilina sunt rândul sifilisului.\n\nHerpesul simplex impune naștere prin cezariană în cazul leziunilor active sau al unui focar primar; aciclovirul poate fi benefic la nou-născuți — Corect: Cezariana pentru leziuni active și aciclovirul neonatal sunt ale HSV.\n\nStreptococul de grup B se depistează prin antigen după 34 de săptămâni; în travaliu se folosesc β-lactamine sau clindamicină IV — Corect: Antigenul după 34 de săptămâni și β-lactaminele/clindamicina sunt ale GBS.\n\nParvovirusul B19 se tratează cu penicilină, identic sifilisului — Incorect: Parvovirusul se monitorizează prin PPSO și transfuzie, nu cu penicilină.\n\nToxoplasmoza se previne prin vaccin viu atenuat administrat în trimestrul I — Incorect: Vaccinurile vii (rubeolă, varicelă) sunt contraindicate în sarcină; toxoplasma nu are un astfel de vaccin citat.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 304, Infecții congenitale — Sifilis, herpes, GBS (pagini PDF: 82).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    304
   ],
   "pdfPages": [
    82
   ],
   "section": "Infecții congenitale — Sifilis, herpes, GBS"
  },
  "learningObjective": "Corelarea diagnosticului și tratamentului sifilisului, HSV și GBS, fără a muta schemele între rânduri.",
  "optionRationales": [
   "RPR/VDRL, FTA-ABS și penicilina sunt rândul sifilisului.",
   "Cezariana pentru leziuni active și aciclovirul neonatal sunt ale HSV.",
   "Antigenul după 34 de săptămâni și β-lactaminele/clindamicina sunt ale GBS.",
   "Parvovirusul se monitorizează prin PPSO și transfuzie, nu cu penicilină.",
   "Vaccinurile vii (rubeolă, varicelă) sunt contraindicate în sarcină; toxoplasma nu are un astfel de vaccin citat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică penicilina sifilisului pe parvovirus și vaccinul viu pe toxoplasmă."
  },
  "textbookExpressions": [
   "FTA-ABS",
   "34 de săptămâni"
  ]
 },
 {
  "id": "obstetrica-adv-063",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Parvovirusul B19 în sarcină:",
  "options": [
   "Poate produce scăderea producției eritrocitare, anemie hemolitică și hidrops fetal",
   "Monitorizarea hemoglobinei fetale prin PPSO și transfuzia intrauterină sunt indicate în anemia severă",
   "Determină triadă hidrocefalie–calcificări–corioretinită, ca toxoplasma",
   "Se tratează cu pirimetamină, sulfadiazină și acid folinic",
   "Screening-ul AgHBs matern este testul diagnostic de elecție"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Poate produce scăderea producției eritrocitare, anemie hemolitică și hidrops fetal — Corect: Cele trei efecte hematologice sunt din tabel.\n\nMonitorizarea hemoglobinei fetale prin PPSO și transfuzia intrauterină sunt indicate în anemia severă — Corect: PPSO și transfuzia intrauterină sunt tratamentul citat.\n\nDetermină triadă hidrocefalie–calcificări–corioretinită, ca toxoplasma — Incorect: Triada hidrocefalie–calcificări–corioretinită este a toxoplasmozei.\n\nSe tratează cu pirimetamină, sulfadiazină și acid folinic — Incorect: Pirimetamina–sulfadiazina–folinicul tratează toxoplasmoza.\n\nScreening-ul AgHBs matern este testul diagnostic de elecție — Incorect: AgHBs este screeningul hepatitei B.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 304, Infecții congenitale — Parvovirus B19 (pagini PDF: 82).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    304
   ],
   "pdfPages": [
    82
   ],
   "section": "Infecții congenitale — Parvovirus B19"
  },
  "learningObjective": "Recunoașterea efectului hematologic (hidrops) și a rolului PPSO/transfuziei, distinct de toxoplasmă și VHB.",
  "optionRationales": [
   "Cele trei efecte hematologice sunt din tabel.",
   "PPSO și transfuzia intrauterină sunt tratamentul citat.",
   "Triada hidrocefalie–calcificări–corioretinită este a toxoplasmozei.",
   "Pirimetamina–sulfadiazina–folinicul tratează toxoplasmoza.",
   "AgHBs este screeningul hepatitei B."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută triada și schema toxoplasmozei, plus AgHBs, pe parvovirus."
  },
  "textbookExpressions": [
   "hidrops fetal",
   "PPSO"
  ]
 },
 {
  "id": "obstetrica-adv-064",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Lungimea colului uterin măsurată ecografic se asociază cu:",
  "options": [
   "Risc scăzut de naștere înainte de termen dacă este peste 35 mm și risc crescut de naștere prematură dacă este sub 15 mm",
   "Diagnosticul de travaliu instalat, înlocuind contracțiile",
   "Indicație absolută de cezariană, independent de dilatație",
   "Maturitate pulmonară fetală, identic raportului L:S peste 2",
   "Prezentație craniană confirmată, în locul manevrelor Leopold"
  ],
  "correct": [
   0
  ],
  "explanation": "Risc scăzut de naștere înainte de termen dacă este peste 35 mm și risc crescut de naștere prematură dacă este sub 15 mm — Corect: Nota dă exact aceste două praguri și precizează că ecografia nu pune diagnosticul de travaliu.\n\nDiagnosticul de travaliu instalat, înlocuind contracțiile — Incorect: Textul spune explicit că ecografia nu diagnostichează travaliul.\n\nIndicație absolută de cezariană, independent de dilatație — Incorect: Lungimea colului nu este indicație de cezariană.\n\nMaturitate pulmonară fetală, identic raportului L:S peste 2 — Incorect: L:S >2 cu fosfatidilglicerol măsoară maturitatea pulmonară.\n\nPrezentație craniană confirmată, în locul manevrelor Leopold — Incorect: Prezentația se confirmă prin Leopold și US, nu prin lungimea colului.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 308, Complicații obstetricale — Lungimea colului (pagini PDF: 86).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    308
   ],
   "pdfPages": [
    86
   ],
   "section": "Complicații obstetricale — Lungimea colului"
  },
  "learningObjective": "Aplicarea pragurilor 35 mm (risc scăzut) și 15 mm (risc crescut), fără a confunda ecografia cu diagnosticul de travaliu.",
  "optionRationales": [
   "Nota dă exact aceste două praguri și precizează că ecografia nu pune diagnosticul de travaliu.",
   "Textul spune explicit că ecografia nu diagnostichează travaliul.",
   "Lungimea colului nu este indicație de cezariană.",
   "L:S >2 cu fosfatidilglicerol măsoară maturitatea pulmonară.",
   "Prezentația se confirmă prin Leopold și US, nu prin lungimea colului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie lungimii de col roluri reale ale travaliului, cezarienei, L:S și Leopold."
  },
  "textbookExpressions": [
   ">35 mm",
   "<15 mm"
  ]
 },
 {
  "id": "obstetrica-adv-065",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Dacă ruptura prematură de membrane survine sub 32 de săptămâni, textul recomandă:",
  "options": [
   "Corticosteroizi pentru grăbirea maturării pulmonare fetale",
   "Antibioticoterapie profilactică pentru streptococul de grup B",
   "Sulfat de magneziu pentru neuroprotecție",
   "Inducerea imediată a nașterii, fără corticosteroizi, ca după săptămâna 34",
   "Tact vaginal repetat pentru a urmări dilatația zilnic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Corticosteroizi pentru grăbirea maturării pulmonare fetale — Corect: Corticosteroizii pentru maturare sunt expliciți.\n\nAntibioticoterapie profilactică pentru streptococul de grup B — Corect: Antibioticele profilactice anti-GBS sunt citate.\n\nSulfat de magneziu pentru neuroprotecție — Corect: MgSO4 pentru neuroprotecție este citat.\n\nInducerea imediată a nașterii, fără corticosteroizi, ca după săptămâna 34 — Incorect: Inducția imediată fără corticoid este strategia după 34 de săptămâni.\n\nTact vaginal repetat pentru a urmări dilatația zilnic — Incorect: Tactul vaginal se evită, pentru a nu introduce germeni.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 308, Complicații obstetricale — PROM sub 32 de săptămâni (pagini PDF: 86).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    308
   ],
   "pdfPages": [
    86
   ],
   "section": "Complicații obstetricale — PROM sub 32 de săptămâni"
  },
  "learningObjective": "Recunoașterea triadei corticoid–antibiotic–MgSO4 sub 32 de săptămâni, distinct de inducția după 34.",
  "optionRationales": [
   "Corticosteroizii pentru maturare sunt expliciți.",
   "Antibioticele profilactice anti-GBS sunt citate.",
   "MgSO4 pentru neuroprotecție este citat.",
   "Inducția imediată fără corticoid este strategia după 34 de săptămâni.",
   "Tactul vaginal se evită, pentru a nu introduce germeni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică conduita de după 34 de săptămâni și tactul interzis asupra PROM precoce."
  },
  "textbookExpressions": [
   "<32 de săptămâni",
   "neuroprotecţie"
  ]
 },
 {
  "id": "obstetrica-adv-066",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "În travaliul prematur sub 34 de săptămâni se recomandă, printre altele:",
  "options": [
   "Terapie tocolitică cu MgSO4, terbutalină, indometacin sau nifedipină, pentru 48 de ore",
   "Glucocorticoizi (betametazonă sau dexametazonă) pentru 48 de ore, pentru maturarea plămânilor fetali",
   "Tocoliza și glucocorticoizii ca beneficiu dovedit după 34 de săptămâni",
   "Inducție de rutină cu misoprostol, ca în sarcina depășită",
   "Masaj uterin și metilergometrină, ca în atonia postpartum"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Terapie tocolitică cu MgSO4, terbutalină, indometacin sau nifedipină, pentru 48 de ore — Corect: Agenții tocolitici și durata de 48 de ore sunt explicite.\n\nGlucocorticoizi (betametazonă sau dexametazonă) pentru 48 de ore, pentru maturarea plămânilor fetali — Corect: Betametazona/dexametazona 48 de ore sunt citate.\n\nTocoliza și glucocorticoizii ca beneficiu dovedit după 34 de săptămâni — Incorect: Textul precizează absența beneficiului dovedit după 34 de săptămâni.\n\nInducție de rutină cu misoprostol, ca în sarcina depășită — Incorect: Misoprostolul este agent de inducție, nu de tocoliză.\n\nMasaj uterin și metilergometrină, ca în atonia postpartum — Incorect: Masajul și metilergometrina țin de hemoragia postpartum.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 308, Complicații obstetricale — Travaliul prematur (pagini PDF: 86).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    308
   ],
   "pdfPages": [
    86
   ],
   "section": "Complicații obstetricale — Travaliul prematur"
  },
  "learningObjective": "Aplicarea ferestrei de 48 de ore a tocolizei și a corticoidului sub 34 de săptămâni.",
  "optionRationales": [
   "Agenții tocolitici și durata de 48 de ore sunt explicite.",
   "Betametazona/dexametazona 48 de ore sunt citate.",
   "Textul precizează absența beneficiului dovedit după 34 de săptămâni.",
   "Misoprostolul este agent de inducție, nu de tocoliză.",
   "Masajul și metilergometrina țin de hemoragia postpartum."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută tocoliza după 34 de săptămâni și importă inducția ori uterotonicele de lăuzie."
  },
  "textbookExpressions": [
   "tocolitică",
   "betametazonă"
  ]
 },
 {
  "id": "obstetrica-adv-067",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Sarcina gemelară și testul non-stress:",
  "options": [
   "Gemenii conjuncți apar doar în sarcina multiplă monozigotică",
   "Data estimată a nașterii în sarcina gemelară este, în medie, la 36 de săptămâni",
   "Un test non-stress reactiv are cel puțin două accelerații de peste 15 bpm, cu durată peste 15 secunde, la fiecare 20 de minute",
   "Frecvența cardiacă fetală normală este 80-100 bpm, identică bradicardiei de scalp",
   "Nașterea vaginală este interzisă dacă ambii feți sunt în prezentație craniană"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Gemenii conjuncți apar doar în sarcina multiplă monozigotică — Corect: Nota limitează gemenii conjuncți la monozigoți.\n\nData estimată a nașterii în sarcina gemelară este, în medie, la 36 de săptămâni — Corect: Media de 36 de săptămâni este explicită.\n\nUn test non-stress reactiv are cel puțin două accelerații de peste 15 bpm, cu durată peste 15 secunde, la fiecare 20 de minute — Corect: Criteriul 2×(>15 bpm, >15 s)/20 min definește testul reactiv.\n\nFrecvența cardiacă fetală normală este 80-100 bpm, identică bradicardiei de scalp — Incorect: Frecvența normală citată este 120-160 bpm.\n\nNașterea vaginală este interzisă dacă ambii feți sunt în prezentație craniană — Incorect: Textul permite nașterea vaginală dacă ambii sunt cranieni.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 310, Sarcina multiplă — Gemeni și testul non-stress (pagini PDF: 88).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    310
   ],
   "pdfPages": [
    88
   ],
   "section": "Sarcina multiplă — Gemeni și testul non-stress"
  },
  "learningObjective": "Corelarea notelor despre gemeni cu criteriile de reactivitate ale testului non-stress.",
  "optionRationales": [
   "Nota limitează gemenii conjuncți la monozigoți.",
   "Media de 36 de săptămâni este explicită.",
   "Criteriul 2×(>15 bpm, >15 s)/20 min definește testul reactiv.",
   "Frecvența normală citată este 120-160 bpm.",
   "Textul permite nașterea vaginală dacă ambii sunt cranieni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii coboară FCF pe domeniul bradicardic și interzic calea vaginală cranio-craniană, pe care textul o permite."
  },
  "textbookExpressions": [
   "36 săptămâni",
   "120-160 bpm"
  ]
 },
 {
  "id": "obstetrica-adv-068",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "O gravidă cu gemeni, primul făt cranian și al doilea pelvian:",
  "options": [
   "Nașterea se poate încerca pe cale vaginală",
   "Asocierile pelviană-craniană sau pelviană-pelviană necesită operație cezariană",
   "Nașterea vaginală este permisă doar dacă ambii sunt pelvieni",
   "Inducția cu oxitocină este contraindicată în sarcina gemelară craniană-craniană",
   "Testul non-stress reactiv cere o singură accelerație de 5 bpm"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Nașterea se poate încerca pe cale vaginală — Corect: Textul permite tentativa vaginală în combinația craniană-pelviană.\n\nAsocierile pelviană-craniană sau pelviană-pelviană necesită operație cezariană — Corect: Cezariana pentru pelviană-craniană sau pelviană-pelviană este explicită.\n\nNașterea vaginală este permisă doar dacă ambii sunt pelvieni — Incorect: Pelvian-pelvian impune cezariană, nu vaginal.\n\nInducția cu oxitocină este contraindicată în sarcina gemelară craniană-craniană — Incorect: Craniene-craniană poate naște vaginal; inducția nu este interzisă global.\n\nTestul non-stress reactiv cere o singură accelerație de 5 bpm — Incorect: Reactivitatea cere două accelerații de peste 15 bpm.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 310, Sarcina multiplă — Calea nașterii (pagini PDF: 88).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    310
   ],
   "pdfPages": [
    88
   ],
   "section": "Sarcina multiplă — Calea nașterii"
  },
  "learningObjective": "Aplicarea regulii de cale a nașterii după combinația de prezentații.",
  "optionRationales": [
   "Textul permite tentativa vaginală în combinația craniană-pelviană.",
   "Cezariana pentru pelviană-craniană sau pelviană-pelviană este explicită.",
   "Pelvian-pelvian impune cezariană, nu vaginal.",
   "Craniene-craniană poate naște vaginal; inducția nu este interzisă global.",
   "Reactivitatea cere două accelerații de peste 15 bpm."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează combinațiile care permit nașterea vaginală și alterează criteriul NST."
  },
  "textbookExpressions": [
   "pe cale vaginală",
   "120-160 bpm"
  ]
 },
 {
  "id": "obstetrica-adv-069",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Tipurile de incizie uterină la operația cezariană:",
  "options": [
   "Incizia verticală (clasică sau verticală joasă) se folosește în prezentație transversală, când adeziunile sau fibroamele blochează segmentul inferior, dacă urmează histerectomie, în cancer de col sau în nașterea post-mortem",
   "Incizia transversală joasă, la nivelul segmentului inferior, are risc redus de ruptură uterină, sângerare, aderențe intestinale sau infecție și este preferată",
   "După o incizie transversală, nașterea vaginală ulterioară poate fi realizată",
   "După o incizie verticală, nașterea ulterioară trebuie să fie tot prin cezariană, din cauza riscului de ruptură uterină",
   "Incizia transversală joasă este evitată, fiind rezervată doar nașterii post-mortem"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Incizia verticală (clasică sau verticală joasă) se folosește în prezentație transversală, când adeziunile sau fibroamele blochează segmentul inferior, dacă urmează histerectomie, în cancer de col sau în nașterea post-mortem — Corect: Indicațiile inciziei verticale sunt enumerate.\n\nIncizia transversală joasă, la nivelul segmentului inferior, are risc redus de ruptură uterină, sângerare, aderențe intestinale sau infecție și este preferată — Corect: Avantajele și preferința transversalei joase sunt explicite.\n\nDupă o incizie transversală, nașterea vaginală ulterioară poate fi realizată — Corect: VBAC este permisă doar după incizie transversală.\n\nDupă o incizie verticală, nașterea ulterioară trebuie să fie tot prin cezariană, din cauza riscului de ruptură uterină — Corect: Cezariana iterativă după incizie verticală este impusă de riscul de ruptură.\n\nIncizia transversală joasă este evitată, fiind rezervată doar nașterii post-mortem — Incorect: Transversala joasă este tocmai incizia preferată, nu cea evitată.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 314, Travaliu — Operația cezariană: tipuri de incizie (pagini PDF: 92).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    314
   ],
   "pdfPages": [
    92
   ],
   "section": "Travaliu — Operația cezariană: tipuri de incizie"
  },
  "learningObjective": "Diferențierea indicațiilor inciziei verticale de avantajele inciziei transversale joase și de consecințele asupra nașterilor viitoare.",
  "optionRationales": [
   "Indicațiile inciziei verticale sunt enumerate.",
   "Avantajele și preferința transversalei joase sunt explicite.",
   "VBAC este permisă doar după incizie transversală.",
   "Cezariana iterativă după incizie verticală este impusă de riscul de ruptură.",
   "Transversala joasă este tocmai incizia preferată, nu cea evitată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează ierarhia: textul preferă transversala joasă, nu o rezervă post-mortem."
  },
  "textbookExpressions": [
   "Transversală joasă",
   "ruptură uterină"
  ]
 },
 {
  "id": "obstetrica-adv-070",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Indicațiile operației cezariene, conform textului, includ:",
  "options": [
   "Materne: eclampsie, operații uterine sau cezariană în antecedente, boli cardiace, obstrucția canalului de naștere, deces matern, cancer de col, herpes genital activ, HIV",
   "Fetale: suferință fetală acută, distocii de prezentație, prolaps de cordon, făt macrosom",
   "Combinate: eșec de progres al travaliului, placenta previa, dezlipire prematură de placentă, disproporție cefalo-pelvică",
   "Riscul de moarte maternă este similar între cezariana electivă și nașterea vaginală, dar cezariana de urgență are risc mai mare",
   "Indicația fetală unică este prezentația craniană occipito-anterioară, care impune cezariană de principiu"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Materne: eclampsie, operații uterine sau cezariană în antecedente, boli cardiace, obstrucția canalului de naștere, deces matern, cancer de col, herpes genital activ, HIV — Corect: Lista maternă este explicită.\n\nFetale: suferință fetală acută, distocii de prezentație, prolaps de cordon, făt macrosom — Corect: Lista fetală este explicită.\n\nCombinate: eșec de progres al travaliului, placenta previa, dezlipire prematură de placentă, disproporție cefalo-pelvică — Corect: Lista combinată este explicită.\n\nRiscul de moarte maternă este similar între cezariana electivă și nașterea vaginală, dar cezariana de urgență are risc mai mare — Corect: Nota compară mortalitatea electivă cu vaginala și urgența.\n\nIndicația fetală unică este prezentația craniană occipito-anterioară, care impune cezariană de principiu — Incorect: Prezentația craniană este eutocică; nu impune cezariană.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 314, Travaliu — Indicațiile cezarienei (pagini PDF: 92).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    314
   ],
   "pdfPages": [
    92
   ],
   "section": "Travaliu — Indicațiile cezarienei"
  },
  "learningObjective": "Recunoașterea listelor maternă, fetală și combinată, plus nota despre mortalitatea electivă versus de urgență.",
  "optionRationales": [
   "Lista maternă este explicită.",
   "Lista fetală este explicită.",
   "Lista combinată este explicită.",
   "Nota compară mortalitatea electivă cu vaginala și urgența.",
   "Prezentația craniană este eutocică; nu impune cezariană."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul transformă prezentația normală (craniană) în indicație de cezariană."
  },
  "textbookExpressions": [
   "herpes genital activ",
   "de urgentă"
  ]
 },
 {
  "id": "obstetrica-adv-071",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Laptele matern, conform notelor de pe aceeași pagină:",
  "options": [
   "Este considerat nutrientul ideal, deoarece conține imunoglobuline de tip IgA, acoperă necesarul calitativ și cantitativ, nu costă și crește atașamentul mamă-copil",
   "Colostrul (laptele timpuriu) este bogat în proteine, lipide și minerale și conține IgA",
   "După o săptămână postpartum, laptele conține proteine, lipide, apă și lactoză",
   "Colostrul este format doar din lactoză, fără IgA",
   "Laptele matern este contraindicat după cezariana electivă, din cauza mortalității materne identice cu nașterea vaginală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este considerat nutrientul ideal, deoarece conține imunoglobuline de tip IgA, acoperă necesarul calitativ și cantitativ, nu costă și crește atașamentul mamă-copil — Corect: Nota despre IgA, necesarul, cost și atașament este explicită.\n\nColostrul (laptele timpuriu) este bogat în proteine, lipide și minerale și conține IgA — Corect: Compoziția colostrului este din a doua notă.\n\nDupă o săptămână postpartum, laptele conține proteine, lipide, apă și lactoză — Corect: Compoziția după o săptămână este explicită.\n\nColostrul este format doar din lactoză, fără IgA — Incorect: Colostrul conține IgA, nu doar lactoză.\n\nLaptele matern este contraindicat după cezariana electivă, din cauza mortalității materne identice cu nașterea vaginală — Incorect: Cezariana electivă nu contraindică alăptarea.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 314, Lăuzia — Laptele matern (pagini PDF: 92).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    314
   ],
   "pdfPages": [
    92
   ],
   "section": "Lăuzia — Laptele matern"
  },
  "learningObjective": "Diferențierea colostrului (proteine, lipide, minerale, IgA) de laptele de după o săptămână (plus apă și lactoză).",
  "optionRationales": [
   "Nota despre IgA, necesarul, cost și atașament este explicită.",
   "Compoziția colostrului este din a doua notă.",
   "Compoziția după o săptămână este explicită.",
   "Colostrul conține IgA, nu doar lactoză.",
   "Cezariana electivă nu contraindică alăptarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii golesc colostrul de IgA și contraindică alăptarea după o cezariană electivă."
  },
  "textbookExpressions": [
   "Laptele matern",
   "lgA"
  ]
 },
 {
  "id": "obstetrica-adv-072",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Versiunea cefalică externă în prezentația pelviană se poate efectua în săptămâna:",
  "options": [
   "37 de gestație, cu eficacitate de până la 75%",
   "28 de gestație, când pelviana este încă prezentă în 25% din cazuri",
   "32 de gestație, odată cu screening-ul GBS",
   "20 de gestație, odată cu măsurarea fundului uterin",
   "12 de gestație, odată cu biopsia de vilozități"
  ],
  "correct": [
   0
  ],
  "explanation": "37 de gestație, cu eficacitate de până la 75% — Corect: Textul plasează manevra în săptămâna 37, cu eficacitate de până la 75%.\n\n28 de gestație, când pelviana este încă prezentă în 25% din cazuri — Incorect: La 28 de săptămâni pelviana este încă frecventă, dar versiunea nu este citată atunci.\n\n32 de gestație, odată cu screening-ul GBS — Incorect: 32-37 de săptămâni este fereastra GBS, nu a versiunii.\n\n20 de gestație, odată cu măsurarea fundului uterin — Incorect: Săptămâna 20 este a fundului uterin, nu a versiunii.\n\n12 de gestație, odată cu biopsia de vilozități — Incorect: Săptămâna 12 este a CVS.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 314, Travaliu — Prezentația pelviană (pagini PDF: 92).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    314
   ],
   "pdfPages": [
    92
   ],
   "section": "Travaliu — Prezentația pelviană"
  },
  "learningObjective": "Memorarea săptămânii 37 și a eficacității de până la 75% a versiunii externe.",
  "optionRationales": [
   "Textul plasează manevra în săptămâna 37, cu eficacitate de până la 75%.",
   "La 28 de săptămâni pelviana este încă frecventă, dar versiunea nu este citată atunci.",
   "32-37 de săptămâni este fereastra GBS, nu a versiunii.",
   "Săptămâna 20 este a fundului uterin, nu a versiunii.",
   "Săptămâna 12 este a CVS."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt săptămâni reale din calendarul obstetric, mutate pe versiunea externă."
  },
  "textbookExpressions": [
   "versiunea cefalică externă",
   "săptămâna 37"
  ]
 },
 {
  "id": "obstetrica-adv-073",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "În lăuzia fiziologică, textul descrie:",
  "options": [
   "Scorul Apgar se calculează la 1 și la 5 minute; 7+ la 1 minut și 9+ la 5 minute se asociază cu un prognostic bun",
   "Lohiile sunt roșii în primele zile, apoi se deschid la culoare, devenind albe în circa 10 zile postpartum",
   "La mamele care nu alăptează, menstruația apare la 6-8 săptămâni postpartum",
   "Ovulația și menstruația pot lipsi câteva luni la mamele care alăptează, cu eficiență contraceptivă de 98% în primele 6 luni dacă alăptarea este constantă",
   "Scorul Apgar de 2 la 1 minut, cu culoare albastră-palidă și absența respirațiilor, definește prognosticul bun"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Scorul Apgar se calculează la 1 și la 5 minute; 7+ la 1 minut și 9+ la 5 minute se asociază cu un prognostic bun — Corect: Pragurile 7+ și 9+ sunt din text, lângă tabelul Apgar.\n\nLohiile sunt roșii în primele zile, apoi se deschid la culoare, devenind albe în circa 10 zile postpartum — Corect: Evoluția lohiilor roșu–alb în ~10 zile este explicită.\n\nLa mamele care nu alăptează, menstruația apare la 6-8 săptămâni postpartum — Corect: Fereastra 6-8 săptămâni la nealăptare este citată.\n\nOvulația și menstruația pot lipsi câteva luni la mamele care alăptează, cu eficiență contraceptivă de 98% în primele 6 luni dacă alăptarea este constantă — Corect: Cei 98% în 6 luni la alăptare constantă sunt citați.\n\nScorul Apgar de 2 la 1 minut, cu culoare albastră-palidă și absența respirațiilor, definește prognosticul bun — Incorect: Culoarea albastră-palidă și absența respirației cotate 0 nu definesc prognostic bun.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 315, Lăuzia — Apgar și modificări materne (pagini PDF: 93).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    315
   ],
   "pdfPages": [
    93
   ],
   "section": "Lăuzia — Apgar și modificări materne"
  },
  "learningObjective": "Corelarea pragurilor Apgar cu evoluția lohiilor, revenirea menstruației și lactația ca metodă contraceptivă.",
  "optionRationales": [
   "Pragurile 7+ și 9+ sunt din text, lângă tabelul Apgar.",
   "Evoluția lohiilor roșu–alb în ~10 zile este explicită.",
   "Fereastra 6-8 săptămâni la nealăptare este citată.",
   "Cei 98% în 6 luni la alăptare constantă sunt citați.",
   "Culoarea albastră-palidă și absența respirației cotate 0 nu definesc prognostic bun."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul ia rândul de 0 puncte din tabelul Apgar și îl prezintă ca prognostic bun."
  },
  "textbookExpressions": [
   "Scorul Apgar",
   "lohiile"
  ]
 },
 {
  "id": "obstetrica-adv-074",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Profilul biofizic fetal:",
  "options": [
   "Se efectuează după un test non-stress non-reactiv",
   "Fiecare componentă primește 2 puncte sau 0, fără cotă intermediară de 1 punct; un scor 8-10 sugerează risc minim de asfixie",
   "Indicele de lichid amniotic cotat cu 2 puncte este peste 25 cm, pragul hidramniosului",
   "Un scor 10 impune naștere imediată, ca decelerațiile tardive recurente",
   "Componenta respiratorie cere cel puțin 10 minute de respirații continue"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Se efectuează după un test non-stress non-reactiv — Corect: Indicația după NST non-reactiv este explicită.\n\nFiecare componentă primește 2 puncte sau 0, fără cotă intermediară de 1 punct; un scor 8-10 sugerează risc minim de asfixie — Corect: Regula 2 sau 0 și intervalul 8-10 sunt citate.\n\nIndicele de lichid amniotic cotat cu 2 puncte este peste 25 cm, pragul hidramniosului — Incorect: ILA cotat cu 2 puncte este între 5 și 23 cm, nu pragul de hidramnios.\n\nUn scor 10 impune naștere imediată, ca decelerațiile tardive recurente — Incorect: Scorul 8-10 sugerează risc minim, nu naștere imediată.\n\nComponenta respiratorie cere cel puțin 10 minute de respirații continue — Incorect: Componenta respiratorie cere un episod de 20 de secunde într-un interval de 30 de minute.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 311, Travaliu — Profilul biofizic (pagini PDF: 89).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    311
   ],
   "pdfPages": [
    89
   ],
   "section": "Travaliu — Profilul biofizic"
  },
  "learningObjective": "Aplicarea indicației după NST non-reactiv, a cotării 2-sau-0 și a pragului 8-10.",
  "optionRationales": [
   "Indicația după NST non-reactiv este explicită.",
   "Regula 2 sau 0 și intervalul 8-10 sunt citate.",
   "ILA cotat cu 2 puncte este între 5 și 23 cm, nu pragul de hidramnios.",
   "Scorul 8-10 sugerează risc minim, nu naștere imediată.",
   "Componenta respiratorie cere un episod de 20 de secunde într-un interval de 30 de minute."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii înlocuiesc pragul ILA 5–23 cm cu hidramniosul și transformă scorul bun în indicație de naștere."
  },
  "textbookExpressions": [
   "profilul biofizic",
   "8 şi 10"
  ]
 },
 {
  "id": "obstetrica-adv-075",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Teratogenii și producția de β-hCG în sarcina timpurie:",
  "options": [
   "În primele 2 săptămâni de gestație, teratogenii fie ucid fătul, fie nu au niciun efect",
   "Între 2 și 12 săptămâni, teratogenii pot determina organogeneză anormală",
   "Placenta precoce se formează din celulele trofoblastice și produce β-hCG",
   "Cronologia din figura 13-1 este raportată la vârsta gestațională, nu la cea embrionară",
   "β-hCG este secretat de decidua maternală, nu de trofoblast"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În primele 2 săptămâni de gestație, teratogenii fie ucid fătul, fie nu au niciun efect — Corect: Nota precizează că în primele 2 săptămâni teratogenii ucid fătul sau nu au efect.\n\nÎntre 2 și 12 săptămâni, teratogenii pot determina organogeneză anormală — Corect: Organogeneza anormală între 2 și 12 săptămâni este explicită.\n\nPlacenta precoce se formează din celulele trofoblastice și produce β-hCG — Corect: Figura leagă formarea placentei precoce de trofoblast și de producția de β-hCG.\n\nCronologia din figura 13-1 este raportată la vârsta gestațională, nu la cea embrionară — Incorect: Textul precizează că datele figurii sunt în funcție de vârsta embrionară, nu gestațională.\n\nβ-hCG este secretat de decidua maternală, nu de trofoblast — Incorect: Producția de β-hCG este atribuită celulelor trofoblastice, nu deciduei.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 295, Fiziologia sarcinii — Teratogeni și trofoblast (pagini PDF: 73).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    295
   ],
   "pdfPages": [
    73
   ],
   "section": "Fiziologia sarcinii — Teratogeni și trofoblast"
  },
  "learningObjective": "Separarea ferestrelor teratogene (0–2 versus 2–12 săptămâni) de originea trofoblastică a β-hCG.",
  "optionRationales": [
   "Nota precizează că în primele 2 săptămâni teratogenii ucid fătul sau nu au efect.",
   "Organogeneza anormală între 2 și 12 săptămâni este explicită.",
   "Figura leagă formarea placentei precoce de trofoblast și de producția de β-hCG.",
   "Textul precizează că datele figurii sunt în funcție de vârsta embrionară, nu gestațională.",
   "Producția de β-hCG este atribuită celulelor trofoblastice, nu deciduei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează vârsta embrionară/gestațională și mută secreția de β-hCG de pe trofoblast."
  },
  "textbookExpressions": [
   "organogeneză anormală",
   "trofoblastice"
  ]
 },
 {
  "id": "obstetrica-adv-076",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Creșterea debitului cardiac în sarcină, conform tabelului 13-1, se realizează prin:",
  "options": [
   "Creșterea volumului-bătaie cu 10-30% și a alurii ventriculare cu 12-18 bpm",
   "Scăderea volumului-bătaie cu 40%, compensată de tahicardie de 40 bpm",
   "Doar prin creșterea hematocritului, fără modificare de volum-bătaie",
   "Scăderea alurii ventriculare la 40-50 bpm, cu volum-bătaie neschimbat",
   "Creșterea tensiunii arteriale sistolice, fără modificare de debit"
  ],
  "correct": [
   0
  ],
  "explanation": "Creșterea volumului-bătaie cu 10-30% și a alurii ventriculare cu 12-18 bpm — Corect: Tabelul atribuie creșterea de 40% a debitului creșterii VB 10-30% și AV 12-18 bpm.\n\nScăderea volumului-bătaie cu 40%, compensată de tahicardie de 40 bpm — Incorect: Volumul-bătaie crește, nu scade cu 40%.\n\nDoar prin creșterea hematocritului, fără modificare de volum-bătaie — Incorect: Hematocritul scade prin diluție, iar debitul nu depinde de această cale.\n\nScăderea alurii ventriculare la 40-50 bpm, cu volum-bătaie neschimbat — Incorect: Alura crește cu 12-18 bpm, nu scade.\n\nCreșterea tensiunii arteriale sistolice, fără modificare de debit — Incorect: TAS și TAD scad ușor; debitul nu crește prin hipertensiune.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 296, Fiziologia sarcinii — Debitul cardiac (pagini PDF: 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    296
   ],
   "pdfPages": [
    74
   ],
   "section": "Fiziologia sarcinii — Debitul cardiac"
  },
  "learningObjective": "Descompunerea creșterii de 40% a debitului în componenții volum-bătaie și alură ventriculară.",
  "optionRationales": [
   "Tabelul atribuie creșterea de 40% a debitului creșterii VB 10-30% și AV 12-18 bpm.",
   "Volumul-bătaie crește, nu scade cu 40%.",
   "Hematocritul scade prin diluție, iar debitul nu depinde de această cale.",
   "Alura crește cu 12-18 bpm, nu scade.",
   "TAS și TAD scad ușor; debitul nu crește prin hipertensiune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează direcția VB/AV sau substituie diluția hematocritului mecanismului citat."
  },
  "textbookExpressions": [
   "10-30%",
   "12-18 bpm"
  ]
 },
 {
  "id": "obstetrica-adv-077",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Modificările respiratorii normale din sarcină includ:",
  "options": [
   "Consumul total de oxigen al corpului crește cu 20%",
   "Volumul respirator curent crește cu 40%, odată cu creșterea frecvenței sub acțiunea progesteronului",
   "Uterul ascensionează diafragma și scade volumul rezidual, capacitatea reziduală funcțională și volumul expirator de rezervă",
   "Volumul rezidual și capacitatea reziduală funcțională cresc prin coborârea diafragmei",
   "Progesteronul inhibă centrul respirator și scade volumul curent"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Consumul total de oxigen al corpului crește cu 20% — Corect: Creșterea consumului de O2 cu 20% este din tabel.\n\nVolumul respirator curent crește cu 40%, odată cu creșterea frecvenței sub acțiunea progesteronului — Corect: Creșterea volumului curent cu 40% sub progesteron este explicită.\n\nUterul ascensionează diafragma și scade volumul rezidual, capacitatea reziduală funcțională și volumul expirator de rezervă — Corect: Ascensionarea diafragmei cu scăderea VR, CRF și VER este citată.\n\nVolumul rezidual și capacitatea reziduală funcțională cresc prin coborârea diafragmei — Incorect: Volumele reziduale scad, nu cresc.\n\nProgesteronul inhibă centrul respirator și scade volumul curent — Incorect: Progesteronul stimulează centrul respirator, nu îl inhibă.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 296, Fiziologia sarcinii — Modificări respiratorii (pagini PDF: 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    296
   ],
   "pdfPages": [
    74
   ],
   "section": "Fiziologia sarcinii — Modificări respiratorii"
  },
  "learningObjective": "Corelarea creșterii VO2 și a volumului curent cu scăderea volumelor reziduale prin ascensionarea diafragmei.",
  "optionRationales": [
   "Creșterea consumului de O2 cu 20% este din tabel.",
   "Creșterea volumului curent cu 40% sub progesteron este explicită.",
   "Ascensionarea diafragmei cu scăderea VR, CRF și VER este citată.",
   "Volumele reziduale scad, nu cresc.",
   "Progesteronul stimulează centrul respirator, nu îl inhibă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează direcția volumelor reziduale și a efectului progesteronului pe centrul respirator."
  },
  "textbookExpressions": [
   "creşte cu 20%",
   "Volumul respirator curent"
  ]
 },
 {
  "id": "obstetrica-adv-078",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Modificările tiroidiene fiziologice din sarcină, conform tabelului 13-1:",
  "options": [
   "Cresc globulina de legare a tiroxinei (TBG) și T4 total, dar T4 liber rămâne neschimbat",
   "TSH scade ușor în sarcina incipientă, rămânând însă în limite normale",
   "T4 liber se dublează, iar TSH este suprimat sub intervalul de referință",
   "TBG scade, ceea ce reduce T4 total sub valorile din afara sarcinii",
   "Hipercoagulabilitatea este cauzată de scăderea TBG"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Cresc globulina de legare a tiroxinei (TBG) și T4 total, dar T4 liber rămâne neschimbat — Corect: Creșterea TBG și a T4 total cu T4 liber neschimbat este explicită.\n\nTSH scade ușor în sarcina incipientă, rămânând însă în limite normale — Corect: Scăderea ușoară a TSH, încă în limite normale, este citată.\n\nT4 liber se dublează, iar TSH este suprimat sub intervalul de referință — Incorect: T4 liber nu se dublează.\n\nTBG scade, ceea ce reduce T4 total sub valorile din afara sarcinii — Incorect: TBG crește, nu scade.\n\nHipercoagulabilitatea este cauzată de scăderea TBG — Incorect: Hipercoagulabilitatea este un rând hematologic separat, nu un efect al TBG.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 296, Fiziologia sarcinii — Axul tiroidian (pagini PDF: 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    296
   ],
   "pdfPages": [
    74
   ],
   "section": "Fiziologia sarcinii — Axul tiroidian"
  },
  "learningObjective": "Separarea creșterii T4 total mediată de TBG de stabilitatea T4 liber și de TSH-ul încă normal.",
  "optionRationales": [
   "Creșterea TBG și a T4 total cu T4 liber neschimbat este explicită.",
   "Scăderea ușoară a TSH, încă în limite normale, este citată.",
   "T4 liber nu se dublează.",
   "TBG crește, nu scade.",
   "Hipercoagulabilitatea este un rând hematologic separat, nu un efect al TBG."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă T4 total cu T4 liber și atribuie hipercoagulabilitatea axului tiroidian."
  },
  "textbookExpressions": [
   "TBG",
   "TSH scade uşor"
  ]
 },
 {
  "id": "obstetrica-adv-079",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Precizia datării ultrasonografice a sarcinii:",
  "options": [
   "În săptămânile 7-14, lungimea cranio-caudală estimează vârsta gestațională cu ±3-5 zile",
   "În trimestrul al doilea, circumferința abdominală, diametrul biparietal, lungimea femurului și circumferința craniană dau o precizie de ±1-2 săptămâni",
   "După 20 de săptămâni, înălțimea fundului uterin are precizie de ±3 săptămâni; fibroamele uterine și obezitatea maternă afectează măsurătoarea",
   "Lungimea cranio-caudală din primul trimestru are precizie de ±3 săptămâni, identică fundului uterin",
   "După 20 de săptămâni, precizia fundului uterin este de ±3-5 zile"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În săptămânile 7-14, lungimea cranio-caudală estimează vârsta gestațională cu ±3-5 zile — Corect: Acuratețea ±3-5 zile la 7-14 săptămâni este explicită.\n\nÎn trimestrul al doilea, circumferința abdominală, diametrul biparietal, lungimea femurului și circumferința craniană dau o precizie de ±1-2 săptămâni — Corect: Cei patru biomarkeri și precizia ±1-2 săptămâni sunt din text.\n\nDupă 20 de săptămâni, înălțimea fundului uterin are precizie de ±3 săptămâni; fibroamele uterine și obezitatea maternă afectează măsurătoarea — Corect: Precizia ±3 săptămâni a fundului uterin și interferența fibroamelor/obezității sunt citate.\n\nLungimea cranio-caudală din primul trimestru are precizie de ±3 săptămâni, identică fundului uterin — Incorect: ±3 săptămâni aparține fundului uterin după 20 de săptămâni, nu cranio-caudalei.\n\nDupă 20 de săptămâni, precizia fundului uterin este de ±3-5 zile — Incorect: Fereastra de zile aparține primului trimestru, nu măsurătorii după 20 de săptămâni.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 296, Evaluarea vârstei gestaționale — Precizia metodelor (pagini PDF: 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    296
   ],
   "pdfPages": [
    74
   ],
   "section": "Evaluarea vârstei gestaționale — Precizia metodelor"
  },
  "learningObjective": "Ierarhizarea ferestrelor de precizie: zile în T1, 1–2 săptămâni în T2, ±3 săptămâni după 20 de săptămâni.",
  "optionRationales": [
   "Acuratețea ±3-5 zile la 7-14 săptămâni este explicită.",
   "Cei patru biomarkeri și precizia ±1-2 săptămâni sunt din text.",
   "Precizia ±3 săptămâni a fundului uterin și interferența fibroamelor/obezității sunt citate.",
   "±3 săptămâni aparține fundului uterin după 20 de săptămâni, nu cranio-caudalei.",
   "Fereastra de zile aparține primului trimestru, nu măsurătorii după 20 de săptămâni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută plafoanele de precizie între trimestrul I și măsurătoarea fundului uterin."
  },
  "textbookExpressions": [
   "±3-5 zile",
   "±1-2"
  ]
 },
 {
  "id": "obstetrica-adv-080",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Doza de folat citată pentru prevenția defectelor de tub neural este:",
  "options": [
   "0,4-0,8 mg/zi, începută cu 4 săptămâni preconcepțional",
   "30 mg/zi, identică suplimentului de fier",
   "1.000-1.300 mg/zi, ca necesarul de calciu",
   "60 g/zi, ca necesarul proteic",
   "12-15 kcal/kg/zi, ca dieta DZG la IMC peste 29"
  ],
  "correct": [
   0
  ],
  "explanation": "0,4-0,8 mg/zi, începută cu 4 săptămâni preconcepțional — Corect: Tabelul 13-2 plasează folatul la 0,4-0,8 mg/zi, început cu 4 săptămâni preconcepțional.\n\n30 mg/zi, identică suplimentului de fier — Incorect: 30 mg/zi este doza de fier.\n\n1.000-1.300 mg/zi, ca necesarul de calciu — Incorect: 1.000-1.300 mg/zi este calciul.\n\n60 g/zi, ca necesarul proteic — Incorect: 60 g/zi sunt proteinele.\n\n12-15 kcal/kg/zi, ca dieta DZG la IMC peste 29 — Incorect: 12-15 kcal/kg/zi este ținta calorică DZG la IMC >29.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 297, Îngrijirea prenatală — Folatul (pagini PDF: 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    297
   ],
   "pdfPages": [
    75
   ],
   "section": "Îngrijirea prenatală — Folatul"
  },
  "learningObjective": "Recunoașterea ferestrei preconcepționale de 4 săptămâni și a intervalului 0,4–0,8 mg/zi.",
  "optionRationales": [
   "Tabelul 13-2 plasează folatul la 0,4-0,8 mg/zi, început cu 4 săptămâni preconcepțional.",
   "30 mg/zi este doza de fier.",
   "1.000-1.300 mg/zi este calciul.",
   "60 g/zi sunt proteinele.",
   "12-15 kcal/kg/zi este ținta calorică DZG la IMC >29."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate distractoarele sunt doze reale din tabelele de nutriție/DZG, mutate pe folat."
  },
  "textbookExpressions": [
   "0,4-0,8 mg/zi",
   "4 săptămâni"
  ]
 },
 {
  "id": "obstetrica-adv-081",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Limitările alimentare și consecințele creșterii ponderale necorespunzătoare în sarcină:",
  "options": [
   "Consumul de pește (contaminare cu metil-mercur) și de cofeină (risc de avort spontan) ar trebui limitat",
   "Creșterea ponderală insuficientă poate determina RCIU și naștere prematură, iar cea exagerată diabet gestațional, macrosomie și cezariană",
   "Peștele este încurajat nelimitat, deoarece metil-mercurul nu traversează placenta",
   "Creșterea ponderală insuficientă previne macrosomia și nu are efect asupra prematurității",
   "Cofeina reduce riscul de avort, identic folatului"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Consumul de pește (contaminare cu metil-mercur) și de cofeină (risc de avort spontan) ar trebui limitat — Corect: Limitarea peștelui (metil-mercur) și a cofeinei (avort) este explicită.\n\nCreșterea ponderală insuficientă poate determina RCIU și naștere prematură, iar cea exagerată diabet gestațional, macrosomie și cezariană — Corect: Cele două direcții ale creșterii ponderale necorespunzătoare sunt citate.\n\nPeștele este încurajat nelimitat, deoarece metil-mercurul nu traversează placenta — Incorect: Metil-mercurul este motivul limitării, nu un argument pentru consum nelimitat.\n\nCreșterea ponderală insuficientă previne macrosomia și nu are efect asupra prematurității — Incorect: Insuficiența ponderală crește RCIU și prematuritatea, nu protejează de macrosomie.\n\nCofeina reduce riscul de avort, identic folatului — Incorect: Cofeina crește riscul de avort, nu îl reduce.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 297, Îngrijirea prenatală — Pește, cofeină, greutate (pagini PDF: 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    297
   ],
   "pdfPages": [
    75
   ],
   "section": "Îngrijirea prenatală — Pește, cofeină, greutate"
  },
  "learningObjective": "Asocierea metil-mercurului și a cofeinei cu vectorii RCIU/prematur versus DZG/macrosomie/cezariană.",
  "optionRationales": [
   "Limitarea peștelui (metil-mercur) și a cofeinei (avort) este explicită.",
   "Cele două direcții ale creșterii ponderale necorespunzătoare sunt citate.",
   "Metil-mercurul este motivul limitării, nu un argument pentru consum nelimitat.",
   "Insuficiența ponderală crește RCIU și prematuritatea, nu protejează de macrosomie.",
   "Cofeina crește riscul de avort, nu îl reduce."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează direcția riscurilor de avort și de creștere ponderală."
  },
  "textbookExpressions": [
   "metil-mercur",
   "avort spontan"
  ]
 },
 {
  "id": "obstetrica-adv-082",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "La fiecare vizită prenatală, textul precizează evaluarea:",
  "options": [
   "Greutății materne, pentru a monitoriza creșterea ponderală",
   "Analizelor urinare, pentru a detecta ITU și diabetul zaharat gestațional",
   "Tensiunii arteriale, înălțimii fundului uterin și bătăilor cordului fetal",
   "Manevrelor Leopold, rezervate trimestrului întâi pentru datarea cranio-caudală",
   "Cvadruplului test, repetat lunar până la termen"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Greutății materne, pentru a monitoriza creșterea ponderală — Corect: Greutatea maternă este enumerată la fiecare vizită.\n\nAnalizelor urinare, pentru a detecta ITU și diabetul zaharat gestațional — Corect: Analizele urinare pentru ITU și DZG sunt explicite.\n\nTensiunii arteriale, înălțimii fundului uterin și bătăilor cordului fetal — Corect: TA, fundul uterin și BCF completează lista.\n\nManevrelor Leopold, rezervate trimestrului întâi pentru datarea cranio-caudală — Incorect: Leopold se efectuează în trimestrul al treilea, nu în primul.\n\nCvadruplului test, repetat lunar până la termen — Incorect: Cvadruplul este plasat la 16-18 săptămâni, nu lunar.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 297, Îngrijirea prenatală — Conținutul vizitei (pagini PDF: 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    297
   ],
   "pdfPages": [
    75
   ],
   "section": "Îngrijirea prenatală — Conținutul vizitei"
  },
  "learningObjective": "Recunoașterea pachetului de monitorizare de rutină, distinct de Leopold (trimestrul III) și de cvadruplu.",
  "optionRationales": [
   "Greutatea maternă este enumerată la fiecare vizită.",
   "Analizele urinare pentru ITU și DZG sunt explicite.",
   "TA, fundul uterin și BCF completează lista.",
   "Leopold se efectuează în trimestrul al treilea, nu în primul.",
   "Cvadruplul este plasat la 16-18 săptămâni, nu lunar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută Leopold pe trimestrul I și cvadruplul pe un calendar lunar."
  },
  "textbookExpressions": [
   "fiecare vizită",
   "Manevrele Leopold"
  ]
 },
 {
  "id": "obstetrica-adv-083",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Nivelul α-fetoproteinei serice materne:",
  "options": [
   "Testul este valabil numai în fereastra 16-18 săptămâni de gestație",
   "Nivelurile ridicate se asociază cu defecte de tub neural, defecte ale peretelui abdominal și gestații multiple",
   "Nivelurile scăzute se asociază cu risc crescut pentru trisomiile 21 și 18",
   "Nivelurile ridicate definesc trisomia 21, iar cele scăzute defectele de tub neural",
   "Testul rămâne valid și în primul trimestru, identic PAPP-A"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Testul este valabil numai în fereastra 16-18 săptămâni de gestație — Corect: Valabilitatea strictă în fereastra 16-18 săptămâni este din notă.\n\nNivelurile ridicate se asociază cu defecte de tub neural, defecte ale peretelui abdominal și gestații multiple — Corect: Asocierile nivelurilor ridicate sunt enumerate.\n\nNivelurile scăzute se asociază cu risc crescut pentru trisomiile 21 și 18 — Corect: Asocierile nivelurilor scăzute cu T21 și T18 sunt explicite.\n\nNivelurile ridicate definesc trisomia 21, iar cele scăzute defectele de tub neural — Incorect: Direcția markerului este inversată.\n\nTestul rămâne valid și în primul trimestru, identic PAPP-A — Incorect: PAPP-A aparține primului trimestru; AFP-ul citat nu este valid atunci.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 297, Îngrijirea prenatală — AFP serică maternă (pagini PDF: 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    297
   ],
   "pdfPages": [
    75
   ],
   "section": "Îngrijirea prenatală — AFP serică maternă"
  },
  "learningObjective": "Aplicarea ferestrei 16–18 săptămâni și a direcției AFP (crescut = NTD/perete/multipli; scăzut = T21/T18).",
  "optionRationales": [
   "Valabilitatea strictă în fereastra 16-18 săptămâni este din notă.",
   "Asocierile nivelurilor ridicate sunt enumerate.",
   "Asocierile nivelurilor scăzute cu T21 și T18 sunt explicite.",
   "Direcția markerului este inversată.",
   "PAPP-A aparține primului trimestru; AFP-ul citat nu este valid atunci."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează semnul AFP și mută testul pe fereastra PAPP-A."
  },
  "textbookExpressions": [
   "16-18 săptămâni",
   "trisomiile 21 şi 18"
  ]
 },
 {
  "id": "obstetrica-adv-084",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la testul complet integrat:",
  "options": [
   "Nu este efectuat de rutină, deoarece rezultatele anormale din primul trimestru duc frecvent la abandonarea testelor din trimestrul al doilea și la un test invaziv",
   "Înlocuiește cvadruplul la toate gravidele la vizita inițială",
   "Se efectuează după 18 săptămâni, identic PPSO",
   "Are cea mai mare rată de fals-pozitive dintre testele non-invazive",
   "Este rezervat doar screeningului pentru streptococul de grup B"
  ],
  "correct": [
   0
  ],
  "explanation": "Nu este efectuat de rutină, deoarece rezultatele anormale din primul trimestru duc frecvent la abandonarea testelor din trimestrul al doilea și la un test invaziv — Corect: Nota explică abandonarea testelor din T2 în favoarea unui test invaziv.\n\nÎnlocuiește cvadruplul la toate gravidele la vizita inițială — Incorect: Cvadruplul rămâne screeningul de rutină la 16-18 săptămâni.\n\nSe efectuează după 18 săptămâni, identic PPSO — Incorect: PPSO este după 18 săptămâni, pentru sânge ombilical.\n\nAre cea mai mare rată de fals-pozitive dintre testele non-invazive — Incorect: Textul îl descrie cu cea mai mică rată de fals-pozitive.\n\nEste rezervat doar screeningului pentru streptococul de grup B — Incorect: GBS se scriează la 32-37 săptămâni, nu prin test integrat.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 297, Îngrijirea prenatală — Limita testului integrat (pagini PDF: 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    297
   ],
   "pdfPages": [
    75
   ],
   "section": "Îngrijirea prenatală — Limita testului integrat"
  },
  "learningObjective": "Motivul pentru care testul cel mai sensibil nu este de rutină: rezultatul T1 anormal grăbește testarea invazivă.",
  "optionRationales": [
   "Nota explică abandonarea testelor din T2 în favoarea unui test invaziv.",
   "Cvadruplul rămâne screeningul de rutină la 16-18 săptămâni.",
   "PPSO este după 18 săptămâni, pentru sânge ombilical.",
   "Textul îl descrie cu cea mai mică rată de fals-pozitive.",
   "GBS se scriează la 32-37 săptămâni, nu prin test integrat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută cvadruplul, PPSO și GBS pe testul integrat și inversează rata de fals-pozitive."
  },
  "textbookExpressions": [
   "nu este efectuat de",
   "test mai invaziv"
  ]
 },
 {
  "id": "obstetrica-adv-085",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "La screeningul cvadruplu și la testul integrat, trisomia 21 se asociază cu:",
  "options": [
   "PAPP-A scăzută și translucență nuchală crescută în primul trimestru",
   "AFP și estriol (uE3) scăzute în trimestrul al doilea",
   "hCG și inhibina A crescute în trimestrul al doilea",
   "AFP și inhibina A crescute, cu hCG scăzut, identic defectelor de tub neural",
   "PAPP-A crescută și translucență nuchală scăzută"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "PAPP-A scăzută și translucență nuchală crescută în primul trimestru — Corect: PAPP-A scăzută și TN crescută sunt din coloanele de trimestru I.\n\nAFP și estriol (uE3) scăzute în trimestrul al doilea — Corect: AFP și uE3 scăzute sunt din coloanele de trimestru II.\n\nhCG și inhibina A crescute în trimestrul al doilea — Corect: hCG și inhibina A crescute completează patternul Down.\n\nAFP și inhibina A crescute, cu hCG scăzut, identic defectelor de tub neural — Incorect: AFP crescută ține de defectele de tub neural, nu de T21.\n\nPAPP-A crescută și translucență nuchală scăzută — Incorect: Direcția PAPP-A/TN este inversată.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 299, Screening genetic — Patternul trisomiei 21 (pagini PDF: 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    299
   ],
   "pdfPages": [
    77
   ],
   "section": "Screening genetic — Patternul trisomiei 21"
  },
  "learningObjective": "Citirea rândului Down din tabelul 13-5: PAPP-A↓ TN↑, apoi AFP↓ uE3↓ hCG↑ InhA↑.",
  "optionRationales": [
   "PAPP-A scăzută și TN crescută sunt din coloanele de trimestru I.",
   "AFP și uE3 scăzute sunt din coloanele de trimestru II.",
   "hCG și inhibina A crescute completează patternul Down.",
   "AFP crescută ține de defectele de tub neural, nu de T21.",
   "Direcția PAPP-A/TN este inversată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică patternul NTD și inversează săgețile PAPP-A/TN din același tabel."
  },
  "textbookExpressions": [
   "PAPP-A",
   "lnhibina A"
  ]
 },
 {
  "id": "obstetrica-adv-086",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Când dieta și efortul nu controlează diabetul zaharat gestațional, textul precizează:",
  "options": [
   "Insulina se administrează pentru a menține glicemia a jeun sub 90 mg/dL și pe cea postprandială la 1 oră sub 120 mg/dL",
   "Metforminul și glibenclamidul sunt de asemenea utilizați",
   "Ținta a jeun este sub 180 mg/dL, identică pragului de 1 oră al testului de 3 ore",
   "Insulina este contraindicată, fiind înlocuită de warfarină",
   "Cesariana este interzisă la feții macrosomi"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Insulina se administrează pentru a menține glicemia a jeun sub 90 mg/dL și pe cea postprandială la 1 oră sub 120 mg/dL — Corect: Țintele a jeun <90 și postprandial 1 oră <120 sunt explicite.\n\nMetforminul și glibenclamidul sunt de asemenea utilizați — Corect: Metforminul și glibenclamidul sunt citați.\n\nȚinta a jeun este sub 180 mg/dL, identică pragului de 1 oră al testului de 3 ore — Incorect: 180 mg/dL este pragul de 1 oră al testului de 3 ore, nu ținta terapeutică.\n\nInsulina este contraindicată, fiind înlocuită de warfarină — Incorect: Warfarina este teratogenă; insulina este tratamentul farmacologic.\n\nCesariana este interzisă la feții macrosomi — Incorect: Cesariana poate fi indicată tocmai pentru macrosomi.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 299, Complicații medicale — Ținte glicemice în DZG (pagini PDF: 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    299
   ],
   "pdfPages": [
    77
   ],
   "section": "Complicații medicale — Ținte glicemice în DZG"
  },
  "learningObjective": "Aplicarea pragurilor <90 / <120 mg/dL și recunoașterea metforminului și glibenclamidului ca alternative.",
  "optionRationales": [
   "Țintele a jeun <90 și postprandial 1 oră <120 sunt explicite.",
   "Metforminul și glibenclamidul sunt citați.",
   "180 mg/dL este pragul de 1 oră al testului de 3 ore, nu ținta terapeutică.",
   "Warfarina este teratogenă; insulina este tratamentul farmacologic.",
   "Cesariana poate fi indicată tocmai pentru macrosomi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută pragul diagnostic de 180 mg/dL pe ținta terapeutică și interzic insulina."
  },
  "textbookExpressions": [
   "<90 mg/dL",
   "glibenclamid"
  ]
 },
 {
  "id": "obstetrica-adv-087",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Complicațiile fetale ale diabetului zaharat pregestațional includ:",
  "options": [
   "Defecte cardiace, în special transpoziția marilor vase și tetralogia Fallot",
   "Agenezie de sacru și agenezie renală",
   "Polihidramnios, macrosomie, RCIU și deces fetal intrauterin",
   "Triada hidrocefalie–calcificări–corioretinită, ca în toxoplasmoză",
   "Kernicter prin sulfonamide, ca teratogenul din tabelul 13-7"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Defecte cardiace, în special transpoziția marilor vase și tetralogia Fallot — Corect: Transpoziția marilor vase și tetralogia Fallot sunt enumerate.\n\nAgenezie de sacru și agenezie renală — Corect: Agenezia de sacru și cea renală sunt citate.\n\nPolihidramnios, macrosomie, RCIU și deces fetal intrauterin — Corect: Polihidramniosul, macrosomia, RCIU și decesul fetal completează lista.\n\nTriada hidrocefalie–calcificări–corioretinită, ca în toxoplasmoză — Incorect: Triada citată aparține toxoplasmozei congenitale.\n\nKernicter prin sulfonamide, ca teratogenul din tabelul 13-7 — Incorect: Kernicterul este efectul sulfonamidelor, nu al DZ pregestațional.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 300, Complicații medicale — DZ pregestațional fetal (pagini PDF: 78).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    300
   ],
   "pdfPages": [
    78
   ],
   "section": "Complicații medicale — DZ pregestațional fetal"
  },
  "learningObjective": "Recunoașterea malformațiilor specifice (TGA, Fallot, agenezie sacrală/renală) distincte de TORCH și de teratogeni.",
  "optionRationales": [
   "Transpoziția marilor vase și tetralogia Fallot sunt enumerate.",
   "Agenezia de sacru și cea renală sunt citate.",
   "Polihidramniosul, macrosomia, RCIU și decesul fetal completează lista.",
   "Triada citată aparține toxoplasmozei congenitale.",
   "Kernicterul este efectul sulfonamidelor, nu al DZ pregestațional."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii importă triada TORCH și teratogenul sulfonamidic pe lista de malformații diabetice."
  },
  "textbookExpressions": [
   "transpoziţia marilor vase",
   "agenezie de sacru"
  ]
 },
 {
  "id": "obstetrica-adv-088",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Criteriile de laborator și tensionale ale preeclampsiei, după 20 de săptămâni:",
  "options": [
   "Apare la circa 5% din sarcini, ca HTA indusă de sarcină cu proteinurie și/sau leziuni de organ-țintă",
   "Proteinuria este 2+ pe bandeletă, peste 300 mg/24 ore sau raport proteine:creatinină peste 0,3",
   "Tensiunea ≥140/90 mm Hg la o pacientă anterior normotensivă cere două măsurători la cel puțin 4 ore distanță",
   "Formele severe asociază TAS peste 160 sau TAD peste 110, trombocite sub 100.000, creatinină peste 1,1 și creștere de transaminaze",
   "Diagnosticul se pune înainte de 12 săptămâni, identic ferestrei de organogeneză teratogenă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Apare la circa 5% din sarcini, ca HTA indusă de sarcină cu proteinurie și/sau leziuni de organ-țintă — Corect: Prevalența de 5% după 20 de săptămâni este explicită.\n\nProteinuria este 2+ pe bandeletă, peste 300 mg/24 ore sau raport proteine:creatinină peste 0,3 — Corect: Cele trei definiții ale proteinuriei sunt din laborator.\n\nTensiunea ≥140/90 mm Hg la o pacientă anterior normotensivă cere două măsurători la cel puțin 4 ore distanță — Corect: Regula ≥140/90 cu două măsurători la ≥4 ore este citată.\n\nFormele severe asociază TAS peste 160 sau TAD peste 110, trombocite sub 100.000, creatinină peste 1,1 și creștere de transaminaze — Corect: Pragurile de severitate TAS/TAD, trombocite, creatinină și transaminaze sunt enumerate.\n\nDiagnosticul se pune înainte de 12 săptămâni, identic ferestrei de organogeneză teratogenă — Incorect: Fereastra de 12 săptămâni aparține organogenezei, nu preeclampsiei (după 20 de săptămâni).\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 300, 301, Complicații medicale — Criteriile preeclampsiei (pagini PDF: 78, 79).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    300,
    301
   ],
   "pdfPages": [
    78,
    79
   ],
   "section": "Complicații medicale — Criteriile preeclampsiei"
  },
  "learningObjective": "Asamblarea prevalenței de 5%, a pragurilor de proteinurie și a regulii celor două măsurători la 4 ore.",
  "optionRationales": [
   "Prevalența de 5% după 20 de săptămâni este explicită.",
   "Cele trei definiții ale proteinuriei sunt din laborator.",
   "Regula ≥140/90 cu două măsurători la ≥4 ore este citată.",
   "Pragurile de severitate TAS/TAD, trombocite, creatinină și transaminaze sunt enumerate.",
   "Fereastra de 12 săptămâni aparține organogenezei, nu preeclampsiei (după 20 de săptămâni)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul mută diagnosticul pe fereastra teratogenă de 12 săptămâni, restul fiind praguri reale alăturate."
  },
  "textbookExpressions": [
   "după 20 de săptămâni",
   ">300 mg proteine"
  ]
 },
 {
  "id": "obstetrica-adv-089",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Eclampsia și sindromul HELLP, dincolo de definițiile deja folosite în bancă:",
  "options": [
   "HELLP are prognostic fetal prost și mortalitate maternă de 1%",
   "După naștere se continuă MgSO4 și antihipertensivele 48 de ore, deoarece 25% din convulsii apar în primele 24 de ore postpartum",
   "IECA și BRA nu se folosesc pentru stabilizarea tensională, din cauza riscului teratogen",
   "Diazepamul vindecă eclampsia fără naștere, identic epilepsiei preexistente",
   "HELLP are mortalitate maternă de 25%, identică ratei convulsiilor postpartum"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "HELLP are prognostic fetal prost și mortalitate maternă de 1% — Corect: Mortalitatea maternă de 1% și prognosticul fetal prost sunt din notă.\n\nDupă naștere se continuă MgSO4 și antihipertensivele 48 de ore, deoarece 25% din convulsii apar în primele 24 de ore postpartum — Corect: Cei 25% în primele 24 de ore și continuarea 48 de ore sunt explicite.\n\nIECA și BRA nu se folosesc pentru stabilizarea tensională, din cauza riscului teratogen — Corect: Interdicția IECA/BRA pentru efect teratogen este citată.\n\nDiazepamul vindecă eclampsia fără naștere, identic epilepsiei preexistente — Incorect: Nașterea rămâne soluția definitivă; diazepamul oprește criza, nu înlocuiește nașterea.\n\nHELLP are mortalitate maternă de 25%, identică ratei convulsiilor postpartum — Incorect: 1% este mortalitatea HELLP; 25% este rata convulsiilor precoce postpartum.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 301, Complicații medicale — HELLP și convulsii postpartum (pagini PDF: 79).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    301
   ],
   "pdfPages": [
    79
   ],
   "section": "Complicații medicale — HELLP și convulsii postpartum"
  },
  "learningObjective": "Separarea mortalității HELLP de 1% de fereastra de 48 de ore a MgSO4 și de interdicția IECA/BRA.",
  "optionRationales": [
   "Mortalitatea maternă de 1% și prognosticul fetal prost sunt din notă.",
   "Cei 25% în primele 24 de ore și continuarea 48 de ore sunt explicite.",
   "Interdicția IECA/BRA pentru efect teratogen este citată.",
   "Nașterea rămâne soluția definitivă; diazepamul oprește criza, nu înlocuiește nașterea.",
   "1% este mortalitatea HELLP; 25% este rata convulsiilor precoce postpartum."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută 1% cu 25% și transformă diazepamul în tratament definitiv, ca în epilepsie."
  },
  "textbookExpressions": [
   "mortalitate maternă 1%",
   "25% din convulsii"
  ]
 },
 {
  "id": "obstetrica-adv-090",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Greața și vărsăturile din primul trimestru (greața matinală):",
  "options": [
   "Sunt determinate cel mai probabil de creșterea hCG sau de dezechilibrul dintre progesteron și estrogen",
   "Apar de obicei în primul trimestru și se ameliorează după 16 săptămâni; hidratarea, evitarea meselor copioase și antiacidele postprandial pot ajuta",
   "Sunt identice hyperemesis gravidarum, care afectează majoritatea gravidelor",
   "Se tratează de primă intenție cu fluorochinolone, ca ITU",
   "Impun internare, fluide IV și antiemetice de la primul episod, identic hyperemesis"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sunt determinate cel mai probabil de creșterea hCG sau de dezechilibrul dintre progesteron și estrogen — Corect: Mecanismul hCG sau dezechilibrul progesteron-estrogen este explicit.\n\nApar de obicei în primul trimestru și se ameliorează după 16 săptămâni; hidratarea, evitarea meselor copioase și antiacidele postprandial pot ajuta — Corect: Ameliorarea după 16 săptămâni și măsurile igieno-dietetice sunt citate.\n\nSunt identice hyperemesis gravidarum, care afectează majoritatea gravidelor — Incorect: Hyperemesis afectează 1% și este o entitate separată.\n\nSe tratează de primă intenție cu fluorochinolone, ca ITU — Incorect: Fluorochinolonele sunt interzise pentru ITU, nu tratamentul grețurilor.\n\nImpun internare, fluide IV și antiemetice de la primul episod, identic hyperemesis — Incorect: Internarea cu fluide și antiemetice definește hyperemesis, nu greața obișnuită.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 302, Complicații medicale — Greața matinală (pagini PDF: 80).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    302
   ],
   "pdfPages": [
    80
   ],
   "section": "Complicații medicale — Greața matinală"
  },
  "learningObjective": "Diferențierea grețurilor fiziologice (hCG, ameliorare după 16 săptămâni) de hyperemesis-ul de 1%.",
  "optionRationales": [
   "Mecanismul hCG sau dezechilibrul progesteron-estrogen este explicit.",
   "Ameliorarea după 16 săptămâni și măsurile igieno-dietetice sunt citate.",
   "Hyperemesis afectează 1% și este o entitate separată.",
   "Fluorochinolonele sunt interzise pentru ITU, nu tratamentul grețurilor.",
   "Internarea cu fluide și antiemetice definește hyperemesis, nu greața obișnuită."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică tratamentul și prevalența hyperemesis pe greața matinală fiziologică."
  },
  "textbookExpressions": [
   "după 16 săptămâni",
   "progesteron şi estrogen"
  ]
 },
 {
  "id": "obstetrica-adv-091",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Medicamentele teratogene din tabelul 13-7, altele decât cele deja folosite în bancă, asociază corect:",
  "options": [
   "Aminoglicozidele cu leziuni de nerv cranian VIII, anomalii ale scheletului și defecte renale",
   "Sulfonamidele cu kernicter (encefalopatie bilirubinică)",
   "Talidomidele cu anomalii ale membrelor",
   "Litiul cu kernicter, nu cu anomalia Ebstein",
   "Tetraciclina cu anomalia Ebstein, nu cu colorarea dentară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Aminoglicozidele cu leziuni de nerv cranian VIII, anomalii ale scheletului și defecte renale — Corect: Leziunile de NC VIII, scheletul și rinichiul sunt ale aminoglicozidelor.\n\nSulfonamidele cu kernicter (encefalopatie bilirubinică) — Corect: Kernicterul este al sulfonamidelor.\n\nTalidomidele cu anomalii ale membrelor — Corect: Anomaliile de membre sunt ale talidomidelor.\n\nLitiul cu kernicter, nu cu anomalia Ebstein — Incorect: Litiul asociază anomalia Ebstein, nu kernicterul.\n\nTetraciclina cu anomalia Ebstein, nu cu colorarea dentară — Incorect: Tetraciclina asociază colorare dentară și anomalii de schelet/membre, nu Ebstein.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 303, Teratogeni — Aminoglicozide, sulfonamide, talidomidă (pagini PDF: 81).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    303
   ],
   "pdfPages": [
    81
   ],
   "section": "Teratogeni — Aminoglicozide, sulfonamide, talidomidă"
  },
  "learningObjective": "Maparea a trei rânduri nefolosite din tabelul 13-7, distincte de litiu, valproat, DES și tetraciclină.",
  "optionRationales": [
   "Leziunile de NC VIII, scheletul și rinichiul sunt ale aminoglicozidelor.",
   "Kernicterul este al sulfonamidelor.",
   "Anomaliile de membre sunt ale talidomidelor.",
   "Litiul asociază anomalia Ebstein, nu kernicterul.",
   "Tetraciclina asociază colorare dentară și anomalii de schelet/membre, nu Ebstein."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută Ebstein și kernicterul între litiu, sulfonamide și tetraciclină."
  },
  "textbookExpressions": [
   "nervul cranian",
   "Kernicter"
  ]
 },
 {
  "id": "obstetrica-adv-092",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Tutunul și opioidele în sarcină, conform tabelului 13-6:",
  "options": [
   "Tutunul asociază la mamă dezlipire de placentă, placenta previa și ruptură prematură de membrane, iar la făt avort, prematuritate, RCIU, deces fetal și infecții respiratorii neonatale",
   "Opioidele asociază la mamă infecție de la ace, sevraj narcotic și PROM, iar la făt prematuritate, RCIU, aspirație de meconiu, infecții neonatale și sevraj (poate fi fatal)",
   "Tutunul produce anomalia Ebstein, ca litiul",
   "Opioidele produc cancer vaginal ulterior, ca dietilstilbestrolul",
   "Marijuana asociază la mamă infarct miocardic și hemoragie subarahnoidiană, ca cocaina"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Tutunul asociază la mamă dezlipire de placentă, placenta previa și ruptură prematură de membrane, iar la făt avort, prematuritate, RCIU, deces fetal și infecții respiratorii neonatale — Corect: Rândul tutunului din tabel include previa, PROM și infecțiile respiratorii neonatale.\n\nOpioidele asociază la mamă infecție de la ace, sevraj narcotic și PROM, iar la făt prematuritate, RCIU, aspirație de meconiu, infecții neonatale și sevraj (poate fi fatal) — Corect: Rândul opioidelor include meconiul și sevrajul neonatal potențial fatal.\n\nTutunul produce anomalia Ebstein, ca litiul — Incorect: Anomalia Ebstein aparține litiului.\n\nOpioidele produc cancer vaginal ulterior, ca dietilstilbestrolul — Incorect: Cancerul vaginal/col ulterior aparține DES.\n\nMarijuana asociază la mamă infarct miocardic și hemoragie subarahnoidiană, ca cocaina — Incorect: Infarctul și hemoragia subarahnoidiană aparțin cocainei, nu marijuana (riscuri materne minime).\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 303, Teratogeni — Tutun și opioide (pagini PDF: 81).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    303
   ],
   "pdfPages": [
    81
   ],
   "section": "Teratogeni — Tutun și opioide"
  },
  "learningObjective": "Separarea clusterelor tutun (previa/PROM) și opioid (meconiu/sevraj neonatal) de rândurile litiu, DES și cocaină.",
  "optionRationales": [
   "Rândul tutunului din tabel include previa, PROM și infecțiile respiratorii neonatale.",
   "Rândul opioidelor include meconiul și sevrajul neonatal potențial fatal.",
   "Anomalia Ebstein aparține litiului.",
   "Cancerul vaginal/col ulterior aparține DES.",
   "Infarctul și hemoragia subarahnoidiană aparțin cocainei, nu marijuana (riscuri materne minime)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută Ebstein, DES și clusterul cocainei pe tutun, opioide și marijuana."
  },
  "textbookExpressions": [
   "placenta previa",
   "aspiraţie de meconiu"
  ]
 },
 {
  "id": "obstetrica-adv-093",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Infecțiile congenitale din tabelul 13-8, altele decât toxoplasma, rubeola, sifilisul, herpesul, GBS și parvovirusul:",
  "options": [
   "Rujeola: risc de deces neonatal de 20% la nașterea la termen și 55% la cea prematură, dacă apare transmiterea; imunoglobuline materne în infecție, vaccinul viu fiind contraindicat în sarcină",
   "HIV: transmitere in utero cu risc de 5%; AZT reduce transmiterea verticală; se evită efavirenz, didanozină, stavudină și nevirapină",
   "Virusul varicelozosterian: imunoglobulina pentru varicelă la mama neimunizată în primele 96 de ore de la expunere",
   "Hepatita B: vaccinare maternă; vaccinarea nou-născutului și imunoglobulina la scurt timp după naștere",
   "Gonoreea/chlamydia se tratează cu penicilină după desensibilizare, identic sifilisului"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Rujeola: risc de deces neonatal de 20% la nașterea la termen și 55% la cea prematură, dacă apare transmiterea; imunoglobuline materne în infecție, vaccinul viu fiind contraindicat în sarcină — Corect: Ratele 20%/55% și interdicția vaccinului viu sunt din rândul rujeolei.\n\nHIV: transmitere in utero cu risc de 5%; AZT reduce transmiterea verticală; se evită efavirenz, didanozină, stavudină și nevirapină — Corect: Riscul de 5% in utero, AZT și lista de antivirale de evitat sunt explicite.\n\nVirusul varicelozosterian: imunoglobulina pentru varicelă la mama neimunizată în primele 96 de ore de la expunere — Corect: Fereastra de 96 de ore a imunoglobulinei VZV este citată.\n\nHepatita B: vaccinare maternă; vaccinarea nou-născutului și imunoglobulina la scurt timp după naștere — Corect: Vaccinul și imunoglobulina neonatală anti-VHB sunt din tabel.\n\nGonoreea/chlamydia se tratează cu penicilină după desensibilizare, identic sifilisului — Incorect: Eritromicina, nu penicilina, este tratamentul gonoreei/chlamydiei.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 304, Infecții congenitale — Rujeolă, HIV, VZV, VHB (pagini PDF: 82).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    304
   ],
   "pdfPages": [
    82
   ],
   "section": "Infecții congenitale — Rujeolă, HIV, VZV, VHB"
  },
  "learningObjective": "Extragerea ratelor de deces din rujeolă, a riscului HIV de 5% și a ferestrei de 96 de ore a Ig VZV.",
  "optionRationales": [
   "Ratele 20%/55% și interdicția vaccinului viu sunt din rândul rujeolei.",
   "Riscul de 5% in utero, AZT și lista de antivirale de evitat sunt explicite.",
   "Fereastra de 96 de ore a imunoglobulinei VZV este citată.",
   "Vaccinul și imunoglobulina neonatală anti-VHB sunt din tabel.",
   "Eritromicina, nu penicilina, este tratamentul gonoreei/chlamydiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul aplică penicilina sifilisului pe gonoree/chlamydia, celelalte fiind rânduri reale nefolosite."
  },
  "textbookExpressions": [
   "20% în cazul",
   "primele 96 de ore"
  ]
 },
 {
  "id": "obstetrica-adv-094",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Pragurile β-hCG la care ultrasonografia trebuie să vizualizeze o sarcină sunt:",
  "options": [
   "Circa 6.500 mUI/mL transabdominal și 1.500 mUI/mL transvaginal",
   "1.500 mUI/mL transabdominal și 6.500 mUI/mL transvaginal",
   "90 mg/dL transabdominal, identic țintei a jeun din DZG",
   "300 mg/24 ore, identic proteinuriei din preeclampsie",
   "35 mm, identic lungimii de col cu risc scăzut de prematuritate"
  ],
  "correct": [
   0
  ],
  "explanation": "Circa 6.500 mUI/mL transabdominal și 1.500 mUI/mL transvaginal — Corect: Textul atribuie 6.500 transabdominal și 1.500 transvaginal.\n\n1.500 mUI/mL transabdominal și 6.500 mUI/mL transvaginal — Incorect: Valorile sunt permutare.\n\n90 mg/dL transabdominal, identic țintei a jeun din DZG — Incorect: 90 mg/dL este ținta glicemică a jeun din DZG.\n\n300 mg/24 ore, identic proteinuriei din preeclampsie — Incorect: 300 mg/24 ore este pragul de proteinurie.\n\n35 mm, identic lungimii de col cu risc scăzut de prematuritate — Incorect: 35 mm este lungimea de col cu risc scăzut.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 305, Sarcina ectopică — Praguri US și β-hCG (pagini PDF: 83).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    305
   ],
   "pdfPages": [
    83
   ],
   "section": "Sarcina ectopică — Praguri US și β-hCG"
  },
  "learningObjective": "Memorarea celor două praguri de vizualizare: 6.500 transabdominal versus 1.500 transvaginal.",
  "optionRationales": [
   "Textul atribuie 6.500 transabdominal și 1.500 transvaginal.",
   "Valorile sunt permutare.",
   "90 mg/dL este ținta glicemică a jeun din DZG.",
   "300 mg/24 ore este pragul de proteinurie.",
   "35 mm este lungimea de col cu risc scăzut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută cele două praguri US sau importă 90, 300 și 35 din capitolele vecine."
  },
  "textbookExpressions": [
   "6.500 mUI/mL",
   "1.500 mUI/mL"
  ]
 },
 {
  "id": "obstetrica-adv-095",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Sarcina oprită în evoluție, conform tabelului 13-9:",
  "options": [
   "Orificiul cervical este închis, iar conținutul uterin nu este eliminat",
   "Ultrasonografia detectează un făt intrauterin neviabil",
   "Tratamentul este expectativă, misoprostol sau D&C, plus imunoglobulină anti-D",
   "Colul este dilatat, cu făt viabil, identic iminenței de avort",
   "Repausul la pat este suficient, identic amenințării de avort cu făt viabil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Orificiul cervical este închis, iar conținutul uterin nu este eliminat — Corect: Colul închis și conținutul neeliminat sunt din tabel.\n\nUltrasonografia detectează un făt intrauterin neviabil — Corect: Fătul neviabil la US definește entitatea.\n\nTratamentul este expectativă, misoprostol sau D&C, plus imunoglobulină anti-D — Corect: Expectativa, misoprostolul, D&C și anti-D sunt tratamentul.\n\nColul este dilatat, cu făt viabil, identic iminenței de avort — Incorect: Colul deschis cu făt viabil definește iminența.\n\nRepausul la pat este suficient, identic amenințării de avort cu făt viabil — Incorect: Repausul la pat este al amenințării, unde fătul este viabil.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 306, Avortul spontan — Sarcina oprită în evoluție (pagini PDF: 84).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    306
   ],
   "pdfPages": [
    84
   ],
   "section": "Avortul spontan — Sarcina oprită în evoluție"
  },
  "learningObjective": "Separarea sarcinii oprite (col închis, făt neviabil, D&C/misoprostol) de amenințare și de iminență.",
  "optionRationales": [
   "Colul închis și conținutul neeliminat sunt din tabel.",
   "Fătul neviabil la US definește entitatea.",
   "Expectativa, misoprostolul, D&C și anti-D sunt tratamentul.",
   "Colul deschis cu făt viabil definește iminența.",
   "Repausul la pat este al amenințării, unde fătul este viabil."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică tratamentul amenințării și semnele iminenței pe sarcina oprită."
  },
  "textbookExpressions": [
   "Sarcină oprită în evoluţie",
   "imunoglobulină anti D"
  ]
 },
 {
  "id": "obstetrica-adv-096",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Restricția de creștere simetrică versus asimetrică:",
  "options": [
   "Forma simetrică reprezintă circa 20% din cazuri, apare devreme și asociază scădere globală; cauze frecvente sunt infecțiile congenitale, anomaliile cromozomiale și drogurile materne",
   "Forma asimetrică reprezintă circa 80%, apare tardiv, reduce abdomenul păstrând craniul și membrele, prin sarcină multiplă, stare maternă precară sau insuficiență uteroplacentară",
   "Rapoartele circumferință craniană/abdominală și femur/abdomen sunt crescute în forma asimetrică și normale în cea simetrică",
   "Forma simetrică este 80% și apare tardiv prin insuficiență uteroplacentară",
   "Forma asimetrică este 20% și se datorează trisomiilor din primul trimestru"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Forma simetrică reprezintă circa 20% din cazuri, apare devreme și asociază scădere globală; cauze frecvente sunt infecțiile congenitale, anomaliile cromozomiale și drogurile materne — Corect: Cei 20%, debutul precoce și cauzele infecțioase/cromozomiale/droguri sunt explicite.\n\nForma asimetrică reprezintă circa 80%, apare tardiv, reduce abdomenul păstrând craniul și membrele, prin sarcină multiplă, stare maternă precară sau insuficiență uteroplacentară — Corect: Cei 80%, debutul tardiv și cauzele uteroplacentare sunt citate.\n\nRapoartele circumferință craniană/abdominală și femur/abdomen sunt crescute în forma asimetrică și normale în cea simetrică — Corect: Creșterea rapoartelor în forma asimetrică este din pagina de continuare.\n\nForma simetrică este 80% și apare tardiv prin insuficiență uteroplacentară — Incorect: 80% tardiv este asimetrică, nu simetrică.\n\nForma asimetrică este 20% și se datorează trisomiilor din primul trimestru — Incorect: 20% precoce prin trisomii este simetrică, nu asimetrică.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 306, 307, RCIU — Tipuri simetric și asimetric (pagini PDF: 84, 85).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    306,
    307
   ],
   "pdfPages": [
    84,
    85
   ],
   "section": "RCIU — Tipuri simetric și asimetric"
  },
  "learningObjective": "Aplicarea ratelor 20/80, a momentului (devreme versus tardiv) și a rapoartelor CC/CA și FL/CA.",
  "optionRationales": [
   "Cei 20%, debutul precoce și cauzele infecțioase/cromozomiale/droguri sunt explicite.",
   "Cei 80%, debutul tardiv și cauzele uteroplacentare sunt citate.",
   "Creșterea rapoartelor în forma asimetrică este din pagina de continuare.",
   "80% tardiv este asimetrică, nu simetrică.",
   "20% precoce prin trisomii este simetrică, nu asimetrică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează procentele 20/80 și cauzele precoce versus tardive."
  },
  "textbookExpressions": [
   "20% dintre cazuri",
   "80% dintre cazuri"
  ]
 },
 {
  "id": "obstetrica-adv-097",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Oligoamniosul, în funcție de trimestru și de cadranele de lichid:",
  "options": [
   "În primul trimestru urmează frecvent avortul spontan; în al doilea poate fi determinat de anomalii renale fetale",
   "Indexul sub 5 cm se însoțește de absența oricărui cadran cu înălțime peste 2 cm",
   "În trimestrul al treilea cauza tipică este atrezia esofagiană, ca în hidramnios",
   "Tratamentul sub 32 de săptămâni este amnioreducția plus indometacin, identic hidramniosului",
   "Un buzunar de cel puțin 8 cm confirmă diagnosticul"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "În primul trimestru urmează frecvent avortul spontan; în al doilea poate fi determinat de anomalii renale fetale — Corect: Avortul din T1 și anomaliile renale din T2 sunt explicite.\n\nIndexul sub 5 cm se însoțește de absența oricărui cadran cu înălțime peste 2 cm — Corect: Regula fără cadran >2 cm completează ILA <5 cm.\n\nÎn trimestrul al treilea cauza tipică este atrezia esofagiană, ca în hidramnios — Incorect: Atrezia esofagiană produce hidramnios prin ingurgitare insuficientă, nu oligoamnios.\n\nTratamentul sub 32 de săptămâni este amnioreducția plus indometacin, identic hidramniosului — Incorect: Amnioreducția cu indometacin este a hidramniosului <32 săptămâni.\n\nUn buzunar de cel puțin 8 cm confirmă diagnosticul — Incorect: Buzunarul de 8 cm definește hidramniosul, nu oligoamniosul.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 307, Complicații obstetricale — Oligoamnios pe trimestre (pagini PDF: 85).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    307
   ],
   "pdfPages": [
    85
   ],
   "section": "Complicații obstetricale — Oligoamnios pe trimestre"
  },
  "learningObjective": "Separarea semnificației pe trimestre și a regulii „niciun cadran >2 cm” de pragurile hidramniosului.",
  "optionRationales": [
   "Avortul din T1 și anomaliile renale din T2 sunt explicite.",
   "Regula fără cadran >2 cm completează ILA <5 cm.",
   "Atrezia esofagiană produce hidramnios prin ingurgitare insuficientă, nu oligoamnios.",
   "Amnioreducția cu indometacin este a hidramniosului <32 săptămâni.",
   "Buzunarul de 8 cm definește hidramniosul, nu oligoamniosul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică mecanismul și pragurile hidramniosului pe oligoamnios."
  },
  "textbookExpressions": [
   "avortul spontan",
   "2 cm înălţime"
  ]
 },
 {
  "id": "obstetrica-adv-098",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Tratamentul hidramniosului în funcție de vârsta gestațională:",
  "options": [
   "Sarcinile sub 32 de săptămâni pot primi amnioreducție și indometacin în doze crescute treptat",
   "Sarcinile peste 32 de săptămâni pot fi supuse doar amnioreducției",
   "Un „buzunar” de cel puțin 8 cm susține diagnosticul, alături de ILA peste 25 cm",
   "Indometacinul este rezerva după 34 de săptămâni, identic tocolizei fără beneficiu",
   "Amnioreducția evită recumularea lichidului, care nu se mai reface"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sarcinile sub 32 de săptămâni pot primi amnioreducție și indometacin în doze crescute treptat — Corect: Amnioreducția plus indometacin sub 32 de săptămâni este explicită.\n\nSarcinile peste 32 de săptămâni pot fi supuse doar amnioreducției — Corect: Peste 32 de săptămâni rămâne doar amnioreducția.\n\nUn „buzunar” de cel puțin 8 cm susține diagnosticul, alături de ILA peste 25 cm — Corect: Buzunarul de cel puțin 8 cm este criteriul US alternativ.\n\nIndometacinul este rezerva după 34 de săptămâni, identic tocolizei fără beneficiu — Incorect: După 34 de săptămâni textul neagă beneficiul tocolizei în travaliul prematur, nu mută indometacinul pe hidramnios.\n\nAmnioreducția evită recumularea lichidului, care nu se mai reface — Incorect: Nota precizează că lichidul se reacumulează de cele mai multe ori după amnioreducție.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 307, Complicații obstetricale — Hidramnios: tratament (pagini PDF: 85).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    307
   ],
   "pdfPages": [
    85
   ],
   "section": "Complicații obstetricale — Hidramnios: tratament"
  },
  "learningObjective": "Maparea pragului de 32 de săptămâni (indometacin versus doar amnioreducție) și a buzunarului de 8 cm.",
  "optionRationales": [
   "Amnioreducția plus indometacin sub 32 de săptămâni este explicită.",
   "Peste 32 de săptămâni rămâne doar amnioreducția.",
   "Buzunarul de cel puțin 8 cm este criteriul US alternativ.",
   "După 34 de săptămâni textul neagă beneficiul tocolizei în travaliul prematur, nu mută indometacinul pe hidramnios.",
   "Nota precizează că lichidul se reacumulează de cele mai multe ori după amnioreducție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută indometacinul după 34 de săptămâni și neagă recumularea explicită a lichidului."
  },
  "textbookExpressions": [
   "<32 săptămâni",
   "cel puţin 8 cm"
  ]
 },
 {
  "id": "obstetrica-adv-099",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Diagnosticul de laborator al PROM și conduita după 34 de săptămâni:",
  "options": [
   "Examinarea microscopică arată „semnul ferigii” dacă lichidul amniotic este prezent",
   "Hârtia de nitrazină virează în albastru în prezența lichidului amniotic",
   "După săptămâna 34 se administrează antibiotic și se induce nașterea",
   "Raportul lecitină:sfingomielină peste 2, cu fosfatidilglicerol prezent, sugerează maturitate pulmonară",
   "Tactul vaginal repetat este metoda de elecție pentru a confirma PROM"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Examinarea microscopică arată „semnul ferigii” dacă lichidul amniotic este prezent — Corect: Semnul ferigii este explicit.\n\nHârtia de nitrazină virează în albastru în prezența lichidului amniotic — Corect: Virajul nitrazinei în albastru este citat.\n\nDupă săptămâna 34 se administrează antibiotic și se induce nașterea — Corect: Conduita după 34 de săptămâni (antibiotic plus inducție) este din text.\n\nRaportul lecitină:sfingomielină peste 2, cu fosfatidilglicerol prezent, sugerează maturitate pulmonară — Corect: L:S >2 cu fosfatidilglicerol definește maturitatea pulmonară.\n\nTactul vaginal repetat este metoda de elecție pentru a confirma PROM — Incorect: Nota interzice tactul vaginal în PROM, din cauza riscului de a introduce germeni.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 308, Complicații obstetricale — PROM: ferigă și nitrazină (pagini PDF: 86).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    308
   ],
   "pdfPages": [
    86
   ],
   "section": "Complicații obstetricale — PROM: ferigă și nitrazină"
  },
  "learningObjective": "Asamblarea ferigii, a nitrazinei albastre, a inducției după 34 de săptămâni și a pragului L:S >2.",
  "optionRationales": [
   "Semnul ferigii este explicit.",
   "Virajul nitrazinei în albastru este citat.",
   "Conduita după 34 de săptămâni (antibiotic plus inducție) este din text.",
   "L:S >2 cu fosfatidilglicerol definește maturitatea pulmonară.",
   "Nota interzice tactul vaginal în PROM, din cauza riscului de a introduce germeni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul încalcă interdicția tactului vaginal, restul fiind teste și praguri reale de pe aceeași pagină."
  },
  "textbookExpressions": [
   "semnul ferigii",
   "L:S >2"
  ]
 },
 {
  "id": "obstetrica-adv-100",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "Nașterea în placenta previa, în funcție de tip:",
  "options": [
   "Nașterea spontană poate fi realizată doar în cazul placentei jos inserate; celelalte tipuri se nasc prin cezariană",
   "Placenta previa completă se naște vaginal, deoarece nu atinge orificiul intern",
   "Tocoliza este interzisă la feții prematuri cu sângerare minimă",
   "Tactul vaginal este manevra de primă intenție în sângerarea nedureroasă din trimestrul III",
   "Imunoglobulina anti-D este inutilă la mamele Rh-negative cu sângerare"
  ],
  "correct": [
   0
  ],
  "explanation": "Nașterea spontană poate fi realizată doar în cazul placentei jos inserate; celelalte tipuri se nasc prin cezariană — Corect: Textul rezervă nașterea spontană placentei jos inserate; restul merg la cezariană.\n\nPlacenta previa completă se naște vaginal, deoarece nu atinge orificiul intern — Incorect: Completa acoperă orificiul intern și se naște prin cezariană.\n\nTocoliza este interzisă la feții prematuri cu sângerare minimă — Incorect: Tocoliza poate amâna nașterea la prematuri cu sângerare ușoară.\n\nTactul vaginal este manevra de primă intenție în sângerarea nedureroasă din trimestrul III — Incorect: Tactul vaginal nu se practică până la excluderea previei.\n\nImunoglobulina anti-D este inutilă la mamele Rh-negative cu sângerare — Incorect: Anti-D se administrează mamelor Rh-negative la orice sângerare din trimestrul III.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 309, Placenta previa — Calea nașterii (pagini PDF: 87).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    309
   ],
   "pdfPages": [
    87
   ],
   "section": "Placenta previa — Calea nașterii"
  },
  "learningObjective": "Recunoașterea excepției jos-inserate, singura care permite nașterea vaginală.",
  "optionRationales": [
   "Textul rezervă nașterea spontană placentei jos inserate; restul merg la cezariană.",
   "Completa acoperă orificiul intern și se naște prin cezariană.",
   "Tocoliza poate amâna nașterea la prematuri cu sângerare ușoară.",
   "Tactul vaginal nu se practică până la excluderea previei.",
   "Anti-D se administrează mamelor Rh-negative la orice sângerare din trimestrul III."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează calea nașterii completei și interzic tocoliza, tactul evitat și anti-D."
  },
  "textbookExpressions": [
   "jos inserată",
   "operaţie cezariană"
  ]
 },
 {
  "id": "obstetrica-adv-101",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Dezlipirea de placentă și sindromul transfuzor-transfuzat:",
  "options": [
   "Moartea fetală in utero survine în 20% din cazurile de dezlipire; ultrasonografia vizualizează separarea doar inconsecvent",
   "Dacă cordoanele ombilicale ale feților sunt conectate, poate apărea sindromul transfuzor-transfuzat, cu hipoperfuzia unuia dintre feți",
   "Sângerarea din dezlipire este nedureroasă, identică previei",
   "Moartea fetală în dezlipire este rară, sub 1%, identică decesului matern din previa",
   "Sindromul transfuzor-transfuzat apare doar la gemenii dizigoți cu cavități amniotice separate"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Moartea fetală in utero survine în 20% din cazurile de dezlipire; ultrasonografia vizualizează separarea doar inconsecvent — Corect: Cei 20% și vizualizarea inconsecventă sunt explicite.\n\nDacă cordoanele ombilicale ale feților sunt conectate, poate apărea sindromul transfuzor-transfuzat, cu hipoperfuzia unuia dintre feți — Corect: Conectarea cordoanelor și hipoperfuzia sunt din notă.\n\nSângerarea din dezlipire este nedureroasă, identică previei — Incorect: Sângerarea din abruptio este dureroasă; cea din previa este nedureroasă.\n\nMoartea fetală în dezlipire este rară, sub 1%, identică decesului matern din previa — Incorect: 1% este decesul matern din previa, nu decesul fetal din abruptio.\n\nSindromul transfuzor-transfuzat apare doar la gemenii dizigoți cu cavități amniotice separate — Incorect: TTTS ține de sarcina monozigotică cu cordoane conectate, nu de dizigoții cu cavități separate.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 310, Hemoragia din T3 — Abruptio și TTTS (pagini PDF: 88).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    310
   ],
   "pdfPages": [
    88
   ],
   "section": "Hemoragia din T3 — Abruptio și TTTS"
  },
  "learningObjective": "Aplicarea ratei de 20% de deces fetal din abruptio și a condiției de cordoane conectate pentru TTTS.",
  "optionRationales": [
   "Cei 20% și vizualizarea inconsecventă sunt explicite.",
   "Conectarea cordoanelor și hipoperfuzia sunt din notă.",
   "Sângerarea din abruptio este dureroasă; cea din previa este nedureroasă.",
   "1% este decesul matern din previa, nu decesul fetal din abruptio.",
   "TTTS ține de sarcina monozigotică cu cordoane conectate, nu de dizigoții cu cavități separate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută caracterul dureros, rata de 1% a previei și dizigocitatea pe abruptio/TTTS."
  },
  "textbookExpressions": [
   "20% din cazuri",
   "transfuzor-transfuzat"
  ]
 },
 {
  "id": "obstetrica-adv-102",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Componentele ultrasonografice ale profilului biofizic, fiecare cotată cu 2 sau 0 puncte:",
  "options": [
   "Indicele de lichid amniotic între 5 și 23 cm",
   "Cel puțin un episod de respirații ritmice de 20 de secunde într-un interval de 30 de minute",
   "Cel puțin două episoade de mișcări fetale discrete în 30 de minute și un episod de extensie cu revenire în flexie",
   "ILA peste 25 cm, pragul hidramniosului, pentru 2 puncte",
   "Zece minute de respirații continue, fără cotă pentru tonus"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Indicele de lichid amniotic între 5 și 23 cm — Corect: ILA 5-23 cm primește 2 puncte.\n\nCel puțin un episod de respirații ritmice de 20 de secunde într-un interval de 30 de minute — Corect: Episodul respirator de 20 de secunde în 30 de minute este explicit.\n\nCel puțin două episoade de mișcări fetale discrete în 30 de minute și un episod de extensie cu revenire în flexie — Corect: Cele două mișcări și extensia cu revenire în flexie completează cotarea.\n\nILA peste 25 cm, pragul hidramniosului, pentru 2 puncte — Incorect: ILA >25 cm este hidramniosul, nu cota de 2 puncte.\n\nZece minute de respirații continue, fără cotă pentru tonus — Incorect: Textul cere 20 de secunde, nu 10 minute, și cotează și tonusul.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 311, Travaliu — Criteriile de 2 puncte ale BPP (pagini PDF: 89).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    311
   ],
   "pdfPages": [
    89
   ],
   "section": "Travaliu — Criteriile de 2 puncte ale BPP"
  },
  "learningObjective": "Memorarea pragurilor ILA 5–23 cm, a respirației de 20 de secunde și a celor două mișcări plus tonus.",
  "optionRationales": [
   "ILA 5-23 cm primește 2 puncte.",
   "Episodul respirator de 20 de secunde în 30 de minute este explicit.",
   "Cele două mișcări și extensia cu revenire în flexie completează cotarea.",
   "ILA >25 cm este hidramniosul, nu cota de 2 puncte.",
   "Textul cere 20 de secunde, nu 10 minute, și cotează și tonusul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii înlocuiesc ILA 5–23 cm cu hidramniosul și 20 de secunde cu 10 minute."
  },
  "textbookExpressions": [
   "5 şi 23 cm",
   "20 secunde"
  ]
 },
 {
  "id": "obstetrica-adv-103",
  "topicId": "obstetrica",
  "type": "CS",
  "stem": "În faza activă a primului stadiu al travaliului, ritmul de dilatație citat este:",
  "options": [
   "Circa 1,2 cm/oră la nulipare și 1,5 cm/oră la multipare, de la 6 cm până la circa 10 cm",
   "Circa 3 cm/oră la nulipare, de la 0 la 3 cm, identic fazei pasive",
   "30 de minute la nulipare pentru tot stadiul 1, identic delivrenței",
   "Sub 3 ore la nulipare pentru stadiul 2, fără analgezie epidurală",
   "1 oră pentru stadiul 4, identic observării postpartum"
  ],
  "correct": [
   0
  ],
  "explanation": "Circa 1,2 cm/oră la nulipare și 1,5 cm/oră la multipare, de la 6 cm până la circa 10 cm — Corect: Tabelul 13-11 plasează faza activă de la 6 la 10 cm, cu 1,2 cm/h la nulipare și 1,5 cm/h la multipare.\n\nCirca 3 cm/oră la nulipare, de la 0 la 3 cm, identic fazei pasive — Incorect: Faza pasivă merge până la 6 cm, nu cu 3 cm/oră de la 0.\n\n30 de minute la nulipare pentru tot stadiul 1, identic delivrenței — Incorect: 30 de minute este durata stadiului 3 (delivrența).\n\nSub 3 ore la nulipare pentru stadiul 2, fără analgezie epidurală — Incorect: Sub 3 ore (nulipare) este stadiul 2, nu faza activă.\n\n1 oră pentru stadiul 4, identic observării postpartum — Incorect: 1 oră este stadiul 4 postpartum.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 313, Travaliu — Ritmul fazei active (pagini PDF: 91).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    313
   ],
   "pdfPages": [
    91
   ],
   "section": "Travaliu — Ritmul fazei active"
  },
  "learningObjective": "Aplicarea pragului de 6 cm și a vitezelor 1,2 versus 1,5 cm/oră din tabelul stadiilor.",
  "optionRationales": [
   "Tabelul 13-11 plasează faza activă de la 6 la 10 cm, cu 1,2 cm/h la nulipare și 1,5 cm/h la multipare.",
   "Faza pasivă merge până la 6 cm, nu cu 3 cm/oră de la 0.",
   "30 de minute este durata stadiului 3 (delivrența).",
   "Sub 3 ore (nulipare) este stadiul 2, nu faza activă.",
   "1 oră este stadiul 4 postpartum."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt duratele reale ale stadiilor 2–4, mutate pe ritmul de dilatație al fazei active."
  },
  "textbookExpressions": [
   "1,2 cm/h",
   "1,5 cm/h"
  ]
 },
 {
  "id": "obstetrica-adv-104",
  "topicId": "obstetrica",
  "type": "CM",
  "stem": "Agenții uterotonici din hemoragia postpartum, dincolo de oxitocină și masaj:",
  "options": [
   "Metilergometrina este contraindicată în hipertensiune arterială",
   "Carboprostul este contraindicat în astmul bronșic",
   "Resturile placentare sunt cauza celor mai abundente pierderi; D&C le poate elimina",
   "Pragul de hemoragie este 200 mL după naștere vaginală, identic ILA din oligoamnios",
   "Carboprostul este de elecție în astm, iar metilergometrina în criza hipertensivă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Metilergometrina este contraindicată în hipertensiune arterială — Corect: Contraindicația în HTA este explicită.\n\nCarboprostul este contraindicat în astmul bronșic — Corect: Contraindicația în astm este citată.\n\nResturile placentare sunt cauza celor mai abundente pierderi; D&C le poate elimina — Corect: Nota atribuie resturilor cele mai abundente pierderi; D&C este tratamentul.\n\nPragul de hemoragie este 200 mL după naștere vaginală, identic ILA din oligoamnios — Incorect: Pragurile sunt >500 mL vaginal și >1.000 mL după cezariană, nu 200 mL.\n\nCarboprostul este de elecție în astm, iar metilergometrina în criza hipertensivă — Incorect: Direcția contraindicațiilor este inversată.\n\nReferință: Sinopsis, Sinopsis de medicină, ediția pentru rezidențiat MG 2025, cap. 13, p. 315, Hemoragia postpartum — Uterotonice (pagini PDF: 93).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Sinopsis",
   "edition": "Sinopsis de medicină, ediția pentru rezidențiat MG 2025",
   "chapter": 13,
   "printedPages": [
    315
   ],
   "pdfPages": [
    93
   ],
   "section": "Hemoragia postpartum — Uterotonice"
  },
  "learningObjective": "Maparea contraindicațiilor (metilergometrină–HTA, carboprost–astm) și a resturilor placentare ca sursă a celor mai mari pierderi.",
  "optionRationales": [
   "Contraindicația în HTA este explicită.",
   "Contraindicația în astm este citată.",
   "Nota atribuie resturilor cele mai abundente pierderi; D&C este tratamentul.",
   "Pragurile sunt >500 mL vaginal și >1.000 mL după cezariană, nu 200 mL.",
   "Direcția contraindicațiilor este inversată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează contraindicațiile și înlocuiesc pragul de 500/1.000 mL cu 200 mL."
  },
  "textbookExpressions": [
   "metilergometrina",
   "carboprostul"
  ]
 }
];
