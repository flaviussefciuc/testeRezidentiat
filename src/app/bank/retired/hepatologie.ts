import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_HEPATOLOGIE:(Question&Record<string,unknown>)[]=[
 {
  "id": "hepatologie-adv-001",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Sistemele de scor histologic utilizate în hepatita cronică:",
  "options": [
   "Scorul Knodell (indexul de activitate histologică) însumează patru factori, incluzând inflamația portală și fibroza",
   "Scorul Ishak stadializează fibroza de la 0 (absentă) la 6 (ciroză)",
   "Scorul Brunt este rezervat hepatitei C, iar sistemul METAVIR este aplicat de obicei în NAFLD",
   "Sistemul METAVIR are patru grade și este rezervat de obicei hepatitei C",
   "Scorurile reprezintă măsuri cantitative ale fibrozei, aplicabile identic indiferent de etiologia bolii hepatice"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Scorul Knodell (indexul de activitate histologică) însumează patru factori, incluzând inflamația portală și fibroza — Corect: Textul precizează că scorul Knodell utilizează suma a patru factori: necroza periportală sau în punte, degenerescența intralobulară și necroza focală, inflamația portală și fibroza.\n\nScorul Ishak stadializează fibroza de la 0 (absentă) la 6 (ciroză) — Corect: Scorul Ishak stadializează fibroza de la 0 (absentă) la 6 (ciroză), conform textului.\n\nScorul Brunt este rezervat hepatitei C, iar sistemul METAVIR este aplicat de obicei în NAFLD — Incorect: Textul indică inversul: scorul Brunt este aplicat în mod obișnuit pentru NAFLD, iar METAVIR este rezervat hepatitei C.\n\nSistemul METAVIR are patru grade și este rezervat de obicei hepatitei C — Corect: Sistemul METAVIR are patru grade și, conform textului, este rezervat pentru hepatita C.\n\nScorurile reprezintă măsuri cantitative ale fibrozei, aplicabile identic indiferent de etiologia bolii hepatice — Incorect: Textul subliniază că scorurile nu sunt măsuri cantitative ale fibrozei și că pentru boli diferite se folosesc sisteme diferite.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Hepatita cronică: morfopatologie și scoruri histologice (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Hepatita cronică: morfopatologie și scoruri histologice"
  },
  "learningObjective": "Diferențierea sistemelor de scor histologic (Knodell, Ishak, METAVIR, Brunt) după componentele evaluate și bolile în care se aplică.",
  "optionRationales": [
   "Textul precizează că scorul Knodell utilizează suma a patru factori: necroza periportală sau în punte, degenerescența intralobulară și necroza focală, inflamația portală și fibroza.",
   "Scorul Ishak stadializează fibroza de la 0 (absentă) la 6 (ciroză), conform textului.",
   "Textul indică inversul: scorul Brunt este aplicat în mod obișnuit pentru NAFLD, iar METAVIR este rezervat hepatitei C.",
   "Sistemul METAVIR are patru grade și, conform textului, este rezervat pentru hepatita C.",
   "Textul subliniază că scorurile nu sunt măsuri cantitative ale fibrozei și că pentru boli diferite se folosesc sisteme diferite."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere memorarea corespondenței exacte scor–boală și a intervalului de stadializare Ishak, cu un distractor care inversează Brunt și METAVIR."
  },
  "textbookExpressions": [
   "stadializează fibroza",
   "scorul Brunt este aplicat"
  ]
 },
 {
  "id": "hepatologie-adv-002",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la terapia antivirală cu acțiune directă în infecția cu virusul hepatitei C:",
  "options": [
   "Sofosbuvir este un inhibitor nucleotidic al polimerazei virale",
   "Combinația sofosbuvir/ledipasvir este pangenotipică, iar sofosbuvir/velpatasvir este specifică genotipurilor 1 și 4",
   "Glecaprevir/pibrentasvir se administrează 8 săptămâni la pacienții fără ciroză și 12 săptămâni la cei cu ciroză",
   "După clearance-ul viral, riscul de cancer hepatic persistă la pacienții cu ciroză, deși la un nivel scăzut",
   "Terapia de succes este definită ca virus nedetectabil la 12 săptămâni de la terminarea tratamentului"
  ],
  "correct": [
   0,
   2,
   3,
   4
  ],
  "explanation": "Sofosbuvir este un inhibitor nucleotidic al polimerazei virale — Corect: Textul descrie sofosbuvir drept inhibitor nucleotidic al polimerazei, combinat cu un inhibitor NS5a.\n\nCombinația sofosbuvir/ledipasvir este pangenotipică, iar sofosbuvir/velpatasvir este specifică genotipurilor 1 și 4 — Incorect: Textul indică inversul: sofosbuvir/velpatasvir este combinația pangenotipică, iar sofosbuvir/ledipasvir este specifică genotipurilor 1 și 4.\n\nGlecaprevir/pibrentasvir se administrează 8 săptămâni la pacienții fără ciroză și 12 săptămâni la cei cu ciroză — Corect: Glecaprevir/pibrentasvir implică trei tablete pe zi timp de 8 săptămâni fără ciroză sau 12 săptămâni la pacienții cu ciroză.\n\nDupă clearance-ul viral, riscul de cancer hepatic persistă la pacienții cu ciroză, deși la un nivel scăzut — Corect: După clearance-ul viral progresia fibrozei se oprește, dar la cirotici riscul pentru cancer hepatic persistă, deși la un nivel scăzut.\n\nTerapia de succes este definită ca virus nedetectabil la 12 săptămâni de la terminarea tratamentului — Corect: Terapia de succes este definită ca virus nedetectabil la 12 săptămâni de la terminarea terapiei, după care pacienții fără ciroză pot fi absolviți de urmărire.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1284, Hepatita virală C — Agenții antivirali (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1284
   ],
   "pdfPages": [
    314
   ],
   "section": "Hepatita virală C — Agenții antivirali"
  },
  "learningObjective": "Cunoașterea țintelor, duratelor și spectrului genotipic al regimurilor antivirale orale pentru VHC și a semnificației răspunsului virusologic susținut.",
  "optionRationales": [
   "Textul descrie sofosbuvir drept inhibitor nucleotidic al polimerazei, combinat cu un inhibitor NS5a.",
   "Textul indică inversul: sofosbuvir/velpatasvir este combinația pangenotipică, iar sofosbuvir/ledipasvir este specifică genotipurilor 1 și 4.",
   "Glecaprevir/pibrentasvir implică trei tablete pe zi timp de 8 săptămâni fără ciroză sau 12 săptămâni la pacienții cu ciroză.",
   "După clearance-ul viral progresia fibrozei se oprește, dar la cirotici riscul pentru cancer hepatic persistă, deși la un nivel scăzut.",
   "Terapia de succes este definită ca virus nedetectabil la 12 săptămâni de la terminarea terapiei, după care pacienții fără ciroză pot fi absolviți de urmărire."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează spectrul genotipic al două combinații cu același inhibitor de polimerază, iar restul opțiunilor cer durate și praguri exacte."
  },
  "textbookExpressions": [
   "nucleotidic al polimerazei",
   "progresia fibrozei hepatice este oprită"
  ]
 },
 {
  "id": "hepatologie-adv-003",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații privind infecția cu virusul hepatitei E sunt adevărate?",
  "options": [
   "Mortalitatea prin insuficiență hepatică fulminantă este de 1-2% și crește la 20% la femeile însărcinate",
   "Infecția nu progresează spre boală hepatică cronică, cu excepția unor pacienți imunosupresați",
   "Este un virus ADN din familia Hepadnaviridae, similar virusului hepatitei B",
   "Diagnosticul se bazează pe biopsia hepatică, testele serologice nefiind disponibile",
   "Ribavirina este tratamentul de primă intenție la imunocompetenții cu hepatită E acută"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Mortalitatea prin insuficiență hepatică fulminantă este de 1-2% și crește la 20% la femeile însărcinate — Corect: Textul precizează o mortalitate de 1-2% prin insuficiență hepatică fulminantă, care crește la 20% la femeile însărcinate.\n\nInfecția nu progresează spre boală hepatică cronică, cu excepția unor pacienți imunosupresați — Corect: Textul afirmă că nu există status de purtător și că infecția nu progresează spre boală cronică, cu excepția unor pacienți imunosupresați.\n\nEste un virus ADN din familia Hepadnaviridae, similar virusului hepatitei B — Incorect: VHE este un virus ARN din familia Hepeviridae; Hepadnaviridae caracterizează VHB.\n\nDiagnosticul se bazează pe biopsia hepatică, testele serologice nefiind disponibile — Incorect: Textul descrie un test ELISA pentru anticorpi anti-VHE de tip IgG sau IgM și evidențierea ARN VHE în ser sau scaun prin PCR.\n\nRibavirina este tratamentul de primă intenție la imunocompetenții cu hepatită E acută — Incorect: La imunocompromiși infecția cronică se tratează prin reducerea imunosupresiei și/sau ribavirină; aceasta nu este linia întâi la imunocompetenți cu infecție acută.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1284, Hepatita virală E — Evoluție, diagnostic și particularități (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1284
   ],
   "pdfPages": [
    314
   ],
   "section": "Hepatita virală E — Evoluție, diagnostic și particularități"
  },
  "learningObjective": "Recunoașterea gravității VHE la gravide, a absenței cronicizării la imunocompetenți și a naturii de virus ARN, distinct de VHB.",
  "optionRationales": [
   "Textul precizează o mortalitate de 1-2% prin insuficiență hepatică fulminantă, care crește la 20% la femeile însărcinate.",
   "Textul afirmă că nu există status de purtător și că infecția nu progresează spre boală cronică, cu excepția unor pacienți imunosupresați.",
   "VHE este un virus ARN din familia Hepeviridae; Hepadnaviridae caracterizează VHB.",
   "Textul descrie un test ELISA pentru anticorpi anti-VHE de tip IgG sau IgM și evidențierea ARN VHE în ser sau scaun prin PCR.",
   "La imunocompromiși infecția cronică se tratează prin reducerea imunosupresiei și/sau ribavirină; aceasta nu este linia întâi la imunocompetenți cu infecție acută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie VHE familia și genomul VHB și extind ribavirina de la imunosupresați la toate hepatitele E acute."
  },
  "textbookExpressions": [
   "20% la femeile însărcinate",
   "Familia Hepeviridae"
  ]
 },
 {
  "id": "hepatologie-adv-004",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Un bărbat de 58 de ani cu ciroză hepatică prezintă bilirubină serică 45 µmol/L, albumină serică 30 g/L, timp de protrombină prelungit cu 5 secunde peste valoarea normală, ascită mică și fără encefalopatie. Conform clasificării Child-Pugh modificate, pacientul se încadrează în:",
  "options": [
   "Clasa Child A, cu 6 puncte",
   "Clasa Child B, cu 8 puncte",
   "Clasa Child B, cu 9 puncte",
   "Clasa Child C, cu 10 puncte",
   "Clasa Child A, cu 5 puncte"
  ],
  "correct": [
   2
  ],
  "explanation": "Clasa Child A, cu 6 puncte — Incorect: Cu 9 puncte pacientul depășește pragul clasei A (<7 puncte); 6 puncte ar cere valori mai favorabile la cel puțin trei parametri.\n\nClasa Child B, cu 8 puncte — Incorect: Clasa este corectă, dar suma este 9, nu 8: fiecare dintre bilirubină (34-50), albumină (28-35), TP (4-6 s) și ascita mică primește 2 puncte, encefalopatia absentă 1 punct.\n\nClasa Child B, cu 9 puncte — Corect: Tabelul 34.16 indică 2 puncte pentru fiecare dintre bilirubină 34-50 µmol/L, albumină 28-35 g/L, TP prelungit 4-6 s și ascită mică, plus 1 punct pentru absența encefalopatiei: total 9, deci Child B (7-9 puncte).\n\nClasa Child C, cu 10 puncte — Incorect: Clasa C necesită cel puțin 10 puncte; niciun parametru al pacientului nu atinge pragul de 3 puncte.\n\nClasa Child A, cu 5 puncte — Incorect: 5 puncte reprezintă minimul posibil și ar cere valori normale la toți cei cinci parametri.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1291, Ciroza hepatică — Prognostic: clasificarea Child-Pugh modificată (pagini PDF: 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1291
   ],
   "pdfPages": [
    318
   ],
   "section": "Ciroza hepatică — Prognostic: clasificarea Child-Pugh modificată"
  },
  "learningObjective": "Aplicarea punctajului Child-Pugh pe cei cinci parametri la un caz concret și încadrarea în clasa prognostică corespunzătoare.",
  "optionRationales": [
   "Cu 9 puncte pacientul depășește pragul clasei A (<7 puncte); 6 puncte ar cere valori mai favorabile la cel puțin trei parametri.",
   "Clasa este corectă, dar suma este 9, nu 8: fiecare dintre bilirubină (34-50), albumină (28-35), TP (4-6 s) și ascita mică primește 2 puncte, encefalopatia absentă 1 punct.",
   "Tabelul 34.16 indică 2 puncte pentru fiecare dintre bilirubină 34-50 µmol/L, albumină 28-35 g/L, TP prelungit 4-6 s și ascită mică, plus 1 punct pentru absența encefalopatiei: total 9, deci Child B (7-9 puncte).",
   "Clasa C necesită cel puțin 10 puncte; niciun parametru al pacientului nu atinge pragul de 3 puncte.",
   "5 puncte reprezintă minimul posibil și ar cere valori normale la toți cei cinci parametri."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Necesită calculul exact al punctajului din cinci parametri cu praguri numerice și cunoașterea limitelor de clasă, distractorii oferind clasa corectă cu scor greșit."
  },
  "textbookExpressions": [
   "Child B (7-9 puncte)",
   "62% la 1 an"
  ]
 },
 {
  "id": "hepatologie-adv-005",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Următoarele afirmații despre transplantul hepatic sunt adevărate:",
  "options": [
   "Sepsisul activ în alt teritoriu decât arborele hepatobiliar reprezintă o contraindicație absolută",
   "Metastazele hepatice constituie o contraindicație absolută, cu excepția celor neuroendocrine",
   "Donatorul trebuie să fie compatibil atât ABO, cât și HLA cu primitorul",
   "Rejetul acut celular apare de obicei la 5-10 zile după transplant și răspunde bine la terapia imunosupresivă",
   "Rejetul cronic ductopenic se observă între 6 săptămâni și 9 luni, cu rărirea și dispariția căilor biliare"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "Sepsisul activ în alt teritoriu decât arborele hepatobiliar reprezintă o contraindicație absolută — Corect: Textul enumeră sepsisul activ extrahepatic, în afara arborelui hepatobiliar, printre contraindicațiile absolute.\n\nMetastazele hepatice constituie o contraindicație absolută, cu excepția celor neuroendocrine — Corect: Metastazele hepatice sunt contraindicație absolută, cu excepția celor neuroendocrine, conform textului.\n\nDonatorul trebuie să fie compatibil atât ABO, cât și HLA cu primitorul — Incorect: Textul precizează că donatorul trebuie să fie compatibil ABO, dar compatibilitatea HLA nu este necesară.\n\nRejetul acut celular apare de obicei la 5-10 zile după transplant și răspunde bine la terapia imunosupresivă — Corect: Respingerea acută sau celulară apare la 5-10 zile, cu infiltrat pleomorf portal dominat de eozinofile, și răspunde bine la imunosupresie.\n\nRejetul cronic ductopenic se observă între 6 săptămâni și 9 luni, cu rărirea și dispariția căilor biliare — Corect: Respingerea cronică ductopenică apare între 6 săptămâni și 9 luni, cu sindromul dispariției canalelor biliare și arteriopatie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1292, Ciroza hepatică — Transplantul hepatic: contraindicații, donatorul și rejetul grefei (pagini PDF: 319).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1292
   ],
   "pdfPages": [
    319
   ],
   "section": "Ciroza hepatică — Transplantul hepatic: contraindicații, donatorul și rejetul grefei"
  },
  "learningObjective": "Diferențierea contraindicațiilor absolute de cele relative, a cerințelor de compatibilitate a donatorului și a celor două tipuri de rejet al grefei hepatice.",
  "optionRationales": [
   "Textul enumeră sepsisul activ extrahepatic, în afara arborelui hepatobiliar, printre contraindicațiile absolute.",
   "Metastazele hepatice sunt contraindicație absolută, cu excepția celor neuroendocrine, conform textului.",
   "Textul precizează că donatorul trebuie să fie compatibil ABO, dar compatibilitatea HLA nu este necesară.",
   "Respingerea acută sau celulară apare la 5-10 zile, cu infiltrat pleomorf portal dominat de eozinofile, și răspunde bine la imunosupresie.",
   "Respingerea cronică ductopenică apare între 6 săptămâni și 9 luni, cu sindromul dispariției canalelor biliare și arteriopatie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Combină excepția neuroendocrină de la o contraindicație absolută cu o capcană privind compatibilitatea HLA și cronologia celor două tipuri de rejet."
  },
  "textbookExpressions": [
   "compatibil ABO",
   "infiltrat pleomorf portal"
  ]
 },
 {
  "id": "hepatologie-adv-006",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Insuficiența hepatică acută survenită pe o hepatopatie cronică (ACLF) se caracterizează prin:",
  "options": [
   "Se referă la pacienții internați pentru o complicație acută a cirozei însoțită de insuficiențe de organ",
   "Se estimează că apare la 31% dintre pacienții internați cu o complicație acută a cirozei",
   "Evenimentele precipitante frecvente includ infecțiile bacteriene și consumul excesiv de alcool",
   "Este superpozabilă cirozei decompensate tradiționale, fără particularități de vârstă sau de inflamație",
   "Dispozitivele extracorporeale de susținere a ficatului sunt disponibile de rutină în această indicație"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se referă la pacienții internați pentru o complicație acută a cirozei însoțită de insuficiențe de organ — Corect: Textul definește ACLF ca starea pacienților internați pentru o complicație acută a cirozei însoțită de insuficiențe de organ, cu mortalitate mare pe termen scurt.\n\nSe estimează că apare la 31% dintre pacienții internați cu o complicație acută a cirozei — Corect: Textul estimează apariția la 31% dintre pacienții internați cu o complicație acută a cirozei.\n\nEvenimentele precipitante frecvente includ infecțiile bacteriene și consumul excesiv de alcool — Corect: Printre particularități se numără prevalența mai mare a infecțiilor bacteriene sau a consumului excesiv de alcool ca evenimente precipitante.\n\nEste superpozabilă cirozei decompensate tradiționale, fără particularități de vârstă sau de inflamație — Incorect: Textul consideră ACLF diferită de ciroza decompensată tradițională, fiind caracterizată și de vârste tinere, etiologie alcoolică și inflamație sistemică mai înaltă.\n\nDispozitivele extracorporeale de susținere a ficatului sunt disponibile de rutină în această indicație — Incorect: Textul precizează că, în prezent, niciun dispozitiv extracorporeal nu este disponibil de rutină.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1291, Ciroza hepatică — Insuficiența hepatică acută survenită pe hepatopatie cronică (pagini PDF: 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1291
   ],
   "pdfPages": [
    318
   ],
   "section": "Ciroza hepatică — Insuficiența hepatică acută survenită pe hepatopatie cronică"
  },
  "learningObjective": "Recunoașterea ACLF ca sindrom distinct de decompensarea tradițională, cu mortalitate mare, precipitanți infecțioși sau alcoolici și absența dispozitivelor de rutină.",
  "optionRationales": [
   "Textul definește ACLF ca starea pacienților internați pentru o complicație acută a cirozei însoțită de insuficiențe de organ, cu mortalitate mare pe termen scurt.",
   "Textul estimează apariția la 31% dintre pacienții internați cu o complicație acută a cirozei.",
   "Printre particularități se numără prevalența mai mare a infecțiilor bacteriene sau a consumului excesiv de alcool ca evenimente precipitante.",
   "Textul consideră ACLF diferită de ciroza decompensată tradițională, fiind caracterizată și de vârste tinere, etiologie alcoolică și inflamație sistemică mai înaltă.",
   "Textul precizează că, în prezent, niciun dispozitiv extracorporeal nu este disponibil de rutină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii identifică ACLF cu decompensarea obișnuită și presupun disponibilitatea de rutină a suportului extracorporeal, pe care textul o neagă."
  },
  "textbookExpressions": [
   "insuficienţe de organ",
   "31% dintre pacienţii"
  ]
 },
 {
  "id": "hepatologie-adv-007",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Un bărbat de 54 de ani cu ciroză alcoolică se prezintă cu hematemeză, TA 90/60 mmHg și hemoglobină 68 g/L; endoscopia de urgență confirmă varice esofagiene sângerânde. În managementul acestui pacient sunt adevărate:",
  "options": [
   "Sevrajul alcoolic se tratează preferențial cu clordiazepoxid, al cărui timp de înjumătățire scade în boala hepatică avansată",
   "Antibioterapia profilactică tratează și previne infecția, reducând resângerarea precoce și mortalitatea",
   "O hemoglobină țintă de 80 g/L este suficientă, atingerea acestui obiectiv scăzând probabilitatea resângerării precoce",
   "Somatostatina este vasoconstrictorul cu dovezi de reducere a mortalității și se preferă terlipresinei",
   "Terlipresina se administrează 2 mg la 6 ore și nu trebuie dată pacienților cu boală cardiacă ischemică"
  ],
  "correct": [
   1,
   2,
   4
  ],
  "explanation": "Sevrajul alcoolic se tratează preferențial cu clordiazepoxid, al cărui timp de înjumătățire scade în boala hepatică avansată — Incorect: Textul recomandă lorazepam sau oxazepam, deoarece timpul de înjumătățire al clordiazepoxidului crește (nu scade) în boala hepatică avansată.\n\nAntibioterapia profilactică tratează și previne infecția, reducând resângerarea precoce și mortalitatea — Corect: Antibioterapia profilactică tratează și previne infecția și reduce resângerarea precoce și mortalitatea.\n\nO hemoglobină țintă de 80 g/L este suficientă, atingerea acestui obiectiv scăzând probabilitatea resângerării precoce — Corect: O hemoglobină țintă de 80 g/L este suficientă și atingerea ei scade probabilitatea resângerării precoce.\n\nSomatostatina este vasoconstrictorul cu dovezi de reducere a mortalității și se preferă terlipresinei — Incorect: Terlipresina, nu somatostatina, este vasoconstrictorul cu dovezi de reducere a mortalității; somatostatina este rezervată celor cu contraindicații la terlipresină.\n\nTerlipresina se administrează 2 mg la 6 ore și nu trebuie dată pacienților cu boală cardiacă ischemică — Corect: Doza de terlipresină este de 2 mg la 6 ore, iar medicamentul nu trebuie administrat pacienților cu boală cardiacă ischemică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1294, 1293, Ciroza hepatică — Hemoragia variceală: tratamentul inițial al sângerării acute (pagini PDF: 321, 320).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1294,
    1293
   ],
   "pdfPages": [
    321,
    320
   ],
   "section": "Ciroza hepatică — Hemoragia variceală: tratamentul inițial al sângerării acute"
  },
  "learningObjective": "Aplicarea măsurilor de resuscitare și a terapiei vasoconstrictoare în hemoragia variceală acută, cu evitarea capcanelor privind ținta transfuzională și sevrajul alcoolic.",
  "optionRationales": [
   "Textul recomandă lorazepam sau oxazepam, deoarece timpul de înjumătățire al clordiazepoxidului crește (nu scade) în boala hepatică avansată.",
   "Antibioterapia profilactică tratează și previne infecția și reduce resângerarea precoce și mortalitatea.",
   "O hemoglobină țintă de 80 g/L este suficientă și atingerea ei scade probabilitatea resângerării precoce.",
   "Terlipresina, nu somatostatina, este vasoconstrictorul cu dovezi de reducere a mortalității; somatostatina este rezervată celor cu contraindicații la terlipresină.",
   "Doza de terlipresină este de 2 mg la 6 ore, iar medicamentul nu trebuie administrat pacienților cu boală cardiacă ischemică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează relația farmacocinetică a clordiazepoxidului și atribuie somatostatinei beneficiul de mortalitate al terlipresinei, într-un scenariu clinic cu praguri numerice."
  },
  "textbookExpressions": [
   "Doza este de 2 mg la 6 ore",
   "reduce resângerarea precoce şi mortalitatea"
  ]
 },
 {
  "id": "hepatologie-adv-008",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Profilaxia secundară a hemoragiei variceale:",
  "options": [
   "Ligaturile elastice repetate se efectuează la intervale de 3 luni până la obliterarea varicelor",
   "Beta-blocantele neselective se dozează astfel încât să reducă frecvența pulsului de repaus cu 25%",
   "Terapia combinată (beta-blocant și ligatură) îmbunătățește semnificativ mortalitatea comparativ cu terapia endoscopică singură",
   "Reducerea gradientului de presiune venoasă hepatică sub 12 mmHg se asociază cu rate foarte mici de resângerare",
   "Procedurile de devascularizare produc encefalopatie mai frecvent decât șunturile portosistemice chirurgicale"
  ],
  "correct": [
   1,
   3
  ],
  "explanation": "Ligaturile elastice repetate se efectuează la intervale de 3 luni până la obliterarea varicelor — Incorect: Textul precizează că ligaturile elastice se repetă la intervale de 2 săptămâni, nu de 3 luni.\n\nBeta-blocantele neselective se dozează astfel încât să reducă frecvența pulsului de repaus cu 25% — Corect: Propranololul sau carvedilolul se dozează pentru a reduce frecvența pulsului de repaus cu 25%, ceea ce scade presiunea portală.\n\nTerapia combinată (beta-blocant și ligatură) îmbunătățește semnificativ mortalitatea comparativ cu terapia endoscopică singură — Incorect: Terapia combinată reduce sângerarea comparativ cu terapia endoscopică singură, dar fără o îmbunătățire generală a mortalității.\n\nReducerea gradientului de presiune venoasă hepatică sub 12 mmHg se asociază cu rate foarte mici de resângerare — Corect: O reducere semnificativă a HVPG, în special sub 12 mmHg, este asociată cu rate foarte mici de resângerare.\n\nProcedurile de devascularizare produc encefalopatie mai frecvent decât șunturile portosistemice chirurgicale — Incorect: Textul indică inversul: șunturile chirurgicale au encefalopatia drept complicație semnificativă, iar procedurile de devascularizare nu produc encefalopatie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1295, Ciroza hepatică — Prevenirea sângerării variceale recurente (profilaxia secundară) (pagini PDF: 322).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1295
   ],
   "pdfPages": [
    322
   ],
   "section": "Ciroza hepatică — Prevenirea sângerării variceale recurente (profilaxia secundară)"
  },
  "learningObjective": "Cunoașterea țintelor hemodinamice ale beta-blocadei, a ritmului ligaturilor și a efectului real al terapiei combinate și al opțiunilor chirurgicale asupra encefalopatiei.",
  "optionRationales": [
   "Textul precizează că ligaturile elastice se repetă la intervale de 2 săptămâni, nu de 3 luni.",
   "Propranololul sau carvedilolul se dozează pentru a reduce frecvența pulsului de repaus cu 25%, ceea ce scade presiunea portală.",
   "Terapia combinată reduce sângerarea comparativ cu terapia endoscopică singură, dar fără o îmbunătățire generală a mortalității.",
   "O reducere semnificativă a HVPG, în special sub 12 mmHg, este asociată cu rate foarte mici de resângerare.",
   "Textul indică inversul: șunturile chirurgicale au encefalopatia drept complicație semnificativă, iar procedurile de devascularizare nu produc encefalopatie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere diferențierea între reducerea sângerării și reducerea mortalității și inversează profilul de encefalopatie al două opțiuni chirurgicale."
  },
  "textbookExpressions": [
   "frecvenţei pulsului de repaus cu 25%",
   "sub 12 mmHg"
  ]
 },
 {
  "id": "hepatologie-adv-009",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "În tratamentul ascitei din ciroză se recomandă:",
  "options": [
   "Restricția aportului de sodiu la 40 mmol în 24 de ore, cu menținerea unui aport adecvat de proteine și calorii",
   "Restricția hidrică de rutină, inclusiv la pacienții cu sodiu seric normal",
   "Spironolactona ca diuretic de elecție, începând cu 100 mg pe zi",
   "O pierdere netă de lichid de aproximativ 700 ml în 24 de ore, adică o scădere ponderală de 0,7 kg în absența edemelor",
   "Vaptanii de rutină, deoarece reduc mortalitatea și complicațiile cirozei"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "explanation": "Restricția aportului de sodiu la 40 mmol în 24 de ore, cu menținerea unui aport adecvat de proteine și calorii — Corect: Textul precizează că aportul de sodiu se poate reduce la 40 mmol în 24 de ore, menținând un aport adecvat de proteine și calorii.\n\nRestricția hidrică de rutină, inclusiv la pacienții cu sodiu seric normal — Incorect: Restricția hidrică nu este necesară decât dacă sodiul seric este <128 mmol/L.\n\nSpironolactona ca diuretic de elecție, începând cu 100 mg pe zi — Corect: Diureticul de elecție este antagonistul aldosteronului spironolactona, începând cu 100 mg pe zi.\n\nO pierdere netă de lichid de aproximativ 700 ml în 24 de ore, adică o scădere ponderală de 0,7 kg în absența edemelor — Corect: Scopul terapiei diuretice este o pierdere netă apropiată de 700 ml în 24 de ore, adică 0,7 kg (sau 1 kg dacă există edeme periferice).\n\nVaptanii de rutină, deoarece reduc mortalitatea și complicațiile cirozei — Incorect: Vaptanii au un mic efect asupra hiponatremiei și ascitei, dar nu influențează mortalitatea sau complicațiile cirozei, iar utilizarea de rutină nu poate fi recomandată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1296, Ciroza hepatică — Ascita: tratament (pagini PDF: 323).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1296
   ],
   "pdfPages": [
    323
   ],
   "section": "Ciroza hepatică — Ascita: tratament"
  },
  "learningObjective": "Stabilirea măsurilor dietetice și diuretice corecte în ascita cirotică, inclusiv țintele numerice și indicațiile reale ale restricției hidrice și ale vaptanilor.",
  "optionRationales": [
   "Textul precizează că aportul de sodiu se poate reduce la 40 mmol în 24 de ore, menținând un aport adecvat de proteine și calorii.",
   "Restricția hidrică nu este necesară decât dacă sodiul seric este <128 mmol/L.",
   "Diureticul de elecție este antagonistul aldosteronului spironolactona, începând cu 100 mg pe zi.",
   "Scopul terapiei diuretice este o pierdere netă apropiată de 700 ml în 24 de ore, adică 0,7 kg (sau 1 kg dacă există edeme periferice).",
   "Vaptanii au un mic efect asupra hiponatremiei și ascitei, dar nu influențează mortalitatea sau complicațiile cirozei, iar utilizarea de rutină nu poate fi recomandată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Testează praguri numerice precise (40 mmol, 100 mg, 0,7 kg) și două capcane de management frecvent supraestimate: restricția hidrică și vaptanii."
  },
  "textbookExpressions": [
   "începând cu 100 mg pe zi",
   "40 mmol în 24 de ore"
  ]
 },
 {
  "id": "hepatologie-adv-010",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "O femeie de 61 de ani cu ciroză decompensată și ascită, aflată sub tratament cu propranolol, este internată pentru deteriorarea stării generale, fără febră sau durere abdominală. Paracenteza diagnostică evidențiază 480 neutrofile/mm³. Care dintre următoarele afirmații sunt adevărate?",
  "options": [
   "Tratamentul antibiotic trebuie amânat până la identificarea germenului în cultura lichidului de ascită",
   "Absența febrei și a durerii abdominale nu infirmă diagnosticul de peritonită bacteriană spontană",
   "Propranololul ar trebui oprit, deoarece continuarea sa crește riscul de insuficiență renală",
   "Riscul de recurență în primul an este redus (sub 10%), astfel că profilaxia secundară nu este justificată",
   "Peritonita bacteriană spontană nu constituie o indicație pentru transplantul hepatic"
  ],
  "correct": [
   1,
   2
  ],
  "explanation": "Tratamentul antibiotic trebuie amânat până la identificarea germenului în cultura lichidului de ascită — Incorect: Un număr crescut de neutrofile în lichidul de ascită este o dovadă suficientă pentru a începe imediat tratamentul cu antibiotic cu spectru larg.\n\nAbsența febrei și a durerii abdominale nu infirmă diagnosticul de peritonită bacteriană spontană — Corect: Textul precizează că durerea și febra sunt frecvent absente, boala trebuind suspectată la orice pacient cu ascită a cărui stare se deteriorează.\n\nPropranololul ar trebui oprit, deoarece continuarea sa crește riscul de insuficiență renală — Corect: Există dovezi că beta-blocantele nonselective ar trebui oprite după diagnosticul de PBS, deoarece continuarea lor crește riscul de insuficiență renală.\n\nRiscul de recurență în primul an este redus (sub 10%), astfel că profilaxia secundară nu este justificată — Incorect: Reapariția este frecventă (70% într-un an), iar prevenția secundară cu norfloxacin 400 mg pe zi prelungește supraviețuirea.\n\nPeritonita bacteriană spontană nu constituie o indicație pentru transplantul hepatic — Incorect: Textul descrie PBS drept complicație gravă care reprezintă o indicație pentru transplant hepatic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1297, 1296, Ciroza hepatică — Peritonita bacteriană spontană (pagini PDF: 324, 323).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1297,
    1296
   ],
   "pdfPages": [
    324,
    323
   ],
   "section": "Ciroza hepatică — Peritonita bacteriană spontană"
  },
  "learningObjective": "Recunoașterea prezentării paucisimptomatice a peritonitei bacteriene spontane și aplicarea deciziilor terapeutice imediate, inclusiv oprirea beta-blocantelor.",
  "optionRationales": [
   "Un număr crescut de neutrofile în lichidul de ascită este o dovadă suficientă pentru a începe imediat tratamentul cu antibiotic cu spectru larg.",
   "Textul precizează că durerea și febra sunt frecvent absente, boala trebuind suspectată la orice pacient cu ascită a cărui stare se deteriorează.",
   "Există dovezi că beta-blocantele nonselective ar trebui oprite după diagnosticul de PBS, deoarece continuarea lor crește riscul de insuficiență renală.",
   "Reapariția este frecventă (70% într-un an), iar prevenția secundară cu norfloxacin 400 mg pe zi prelungește supraviețuirea.",
   "Textul descrie PBS drept complicație gravă care reprezintă o indicație pentru transplant hepatic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Scenariul atipic (fără febră, fără durere) și decizia contraintuitivă de a opri un beta-blocant profilactic testează cunoștințe nuanțate de management."
  },
  "textbookExpressions": [
   "durerea şi febra sunt frecvent absente",
   "prescrierea lor în continuare creşte"
  ]
 },
 {
  "id": "hepatologie-adv-011",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Precizați enunțul corect privind tratamentul encefalopatiei portosistemice:",
  "options": [
   "Lactuloza este un purgativ osmotic care reduce pH-ul colonic și limitează absorbția amoniacului",
   "Restricția proteică trebuie menținută peste 48 de ore pentru a limita producția de amoniac",
   "Neomicina este antibioticul preferat pentru profilaxia secundară a episoadelor de encefalopatie",
   "Terapia diuretică trebuie intensificată pentru a favoriza eliminarea metaboliților toxici",
   "Metronidazolul nu are eficacitate în episodul acut, fiind rezervat profilaxiei secundare"
  ],
  "correct": [
   0
  ],
  "explanation": "Lactuloza este un purgativ osmotic care reduce pH-ul colonic și limitează absorbția amoniacului — Corect: Textul descrie lactuloza (10-30 ml de trei ori pe zi) ca purgativ osmotic care reduce pH-ul colonic și limitează absorbția amoniacului.\n\nRestricția proteică trebuie menținută peste 48 de ore pentru a limita producția de amoniac — Incorect: Textul recomandă să nu se restricționeze proteinele mai mult de 48 de ore și să se crească aportul proteic pe măsură ce encefalopatia se ameliorează.\n\nNeomicina este antibioticul preferat pentru profilaxia secundară a episoadelor de encefalopatie — Incorect: Rifaximina are efect benefic în profilaxia secundară a EPS, în timp ce neomicina trebuie evitată.\n\nTerapia diuretică trebuie intensificată pentru a favoriza eliminarea metaboliților toxici — Incorect: Textul recomandă oprirea sau reducerea terapiei diuretice, dezechilibrul electrolitic prin diureză excesivă fiind un factor precipitant.\n\nMetronidazolul nu are eficacitate în episodul acut, fiind rezervat profilaxiei secundare — Incorect: Metronidazolul (200 mg de patru ori pe zi) poate fi eficient în episodul acut; rifaximina este cea indicată în profilaxia secundară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1298, Ciroza hepatică — Encefalopatia portosistemică: tratament (pagini PDF: 325).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1298
   ],
   "pdfPages": [
    325
   ],
   "section": "Ciroza hepatică — Encefalopatia portosistemică: tratament"
  },
  "learningObjective": "Identificarea mecanismului lactulozei și evitarea erorilor frecvente de management (restricție proteică prelungită, neomicină, intensificarea diureticelor).",
  "optionRationales": [
   "Textul descrie lactuloza (10-30 ml de trei ori pe zi) ca purgativ osmotic care reduce pH-ul colonic și limitează absorbția amoniacului.",
   "Textul recomandă să nu se restricționeze proteinele mai mult de 48 de ore și să se crească aportul proteic pe măsură ce encefalopatia se ameliorează.",
   "Rifaximina are efect benefic în profilaxia secundară a EPS, în timp ce neomicina trebuie evitată.",
   "Textul recomandă oprirea sau reducerea terapiei diuretice, dezechilibrul electrolitic prin diureză excesivă fiind un factor precipitant.",
   "Metronidazolul (200 mg de patru ori pe zi) poate fi eficient în episodul acut; rifaximina este cea indicată în profilaxia secundară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează durata restricției proteice, schimbă rolurile rifaximinei, neomicinei și metronidazolului și propun intensificarea diureticelor, un factor precipitant."
  },
  "textbookExpressions": [
   "purgativ osmotic",
   "profilaxia secundară a EPS"
  ]
 },
 {
  "id": "hepatologie-adv-012",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la boala Wilson:",
  "options": [
   "Gena care codifică o ATPază transportatoare de cupru este situată pe cromozomul 13, iar transmiterea este autozomal recesivă",
   "Scăderea ceruloplasminei serice este alterarea responsabilă pentru depunerile tisulare de cupru",
   "O concentrație hepatică de cupru >180 µg/g greutate uscată la biopsie confirmă diagnosticul",
   "Inelul Kayser-Fleischer este constant prezent la copiii mici, fiind cel mai precoce semn al bolii",
   "Tratamentul cu penicilamină se întrerupe după 2-3 ani, odată cu normalizarea cupruriei"
  ],
  "correct": [
   0
  ],
  "explanation": "Gena care codifică o ATPază transportatoare de cupru este situată pe cromozomul 13, iar transmiterea este autozomal recesivă — Corect: Textul precizează defectul unei ATPaze transportatoare de cupru codificată de o genă situată pe cromozomul 13, cu transmitere autozomal recesivă.\n\nScăderea ceruloplasminei serice este alterarea responsabilă pentru depunerile tisulare de cupru — Incorect: Scăderea ceruloplasminei este prezentă la peste 80% dintre pacienți, dar textul precizează că nu aceasta este alterarea responsabilă pentru depunerile de cupru.\n\nO concentrație hepatică de cupru >180 µg/g greutate uscată la biopsie confirmă diagnosticul — Incorect: Pragul diagnostic este >250 µg/g greutate uscată; 180 µmol/g este pragul concentrației hepatice de fier din hemocromatoză.\n\nInelul Kayser-Fleischer este constant prezent la copiii mici, fiind cel mai precoce semn al bolii — Incorect: Inelul Kayser-Fleischer necesită adesea lampa cu fantă și poate să lipsească la copiii mici.\n\nTratamentul cu penicilamină se întrerupe după 2-3 ani, odată cu normalizarea cupruriei — Incorect: Tratamentul cu penicilamină este pe toată durata vieții; doar doza se reduce după 2-3 ani, sub monitorizarea cuprului urinar.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1302, 1301, Ciroza hepatică — Tipuri de ciroză: boala Wilson (pagini PDF: 329, 328).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1302,
    1301
   ],
   "pdfPages": [
    329,
    328
   ],
   "section": "Ciroza hepatică — Tipuri de ciroză: boala Wilson"
  },
  "learningObjective": "Cunoașterea bazei genetice a bolii Wilson și diferențierea ei de capcanele privind ceruloplasmina, pragul cuprului hepatic, inelul Kayser-Fleischer și durata chelării.",
  "optionRationales": [
   "Textul precizează defectul unei ATPaze transportatoare de cupru codificată de o genă situată pe cromozomul 13, cu transmitere autozomal recesivă.",
   "Scăderea ceruloplasminei este prezentă la peste 80% dintre pacienți, dar textul precizează că nu aceasta este alterarea responsabilă pentru depunerile de cupru.",
   "Pragul diagnostic este >250 µg/g greutate uscată; 180 µmol/g este pragul concentrației hepatice de fier din hemocromatoză.",
   "Inelul Kayser-Fleischer necesită adesea lampa cu fantă și poate să lipsească la copiii mici.",
   "Tratamentul cu penicilamină este pe toată durata vieții; doar doza se reduce după 2-3 ani, sub monitorizarea cuprului urinar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii folosesc pragul de fier al hemocromatozei drept prag de cupru și confundă reducerea dozei de penicilamină cu oprirea tratamentului."
  },
  "textbookExpressions": [
   "cromozomul 13",
   "membrana lui Descemet"
  ]
 },
 {
  "id": "hepatologie-adv-013",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la hepatita cronică:",
  "options": [
   "Este definită prin inflamație hepatică de 6 luni sau mai mult și se clasifică după etiologie",
   "Este definită prin orice creștere a transaminazelor peste 48 de ore",
   "Necroza este maximală în zona 1, indiferent de etiologie",
   "Scorurile histologice sunt măsuri cantitative identice ale fibrozei, aplicabile oricărei etiologii",
   "Hepatita E nu figurează printre cauzele de hepatită cronică, nici la imunocompromiși"
  ],
  "correct": [
   0
  ],
  "explanation": "Este definită prin inflamație hepatică de 6 luni sau mai mult și se clasifică după etiologie — Corect: Textul definește hepatita cronică prin durată de 6 luni sau mai mult, clasificată după etiologie (Cadranul 34.6).\n\nEste definită prin orice creștere a transaminazelor peste 48 de ore — Incorect: Pragul este de luni, nu de 48 de ore.\n\nNecroza este maximală în zona 1, indiferent de etiologie — Incorect: Necroza este de obicei maximală în zona 3, nu în zona 1.\n\nScorurile histologice sunt măsuri cantitative identice ale fibrozei, aplicabile oricărei etiologii — Incorect: Textul precizează că scorurile nu sunt măsuri cantitative identice și că se folosesc sisteme diferite după boală.\n\nHepatita E nu figurează printre cauzele de hepatită cronică, nici la imunocompromiși — Incorect: Cadranul 34.6 include hepatita E la imunocompromiși.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Hepatita cronică: definiție și etiologie (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Hepatita cronică: definiție și etiologie"
  },
  "learningObjective": "Recunoașterea pragului de 6 luni care definește hepatita cronică și a clasificării etiologice din Cadranul 34.6.",
  "optionRationales": [
   "Textul definește hepatita cronică prin durată de 6 luni sau mai mult, clasificată după etiologie (Cadranul 34.6).",
   "Pragul este de luni, nu de 48 de ore.",
   "Necroza este de obicei maximală în zona 3, nu în zona 1.",
   "Textul precizează că scorurile nu sunt măsuri cantitative identice și că se folosesc sisteme diferite după boală.",
   "Cadranul 34.6 include hepatita E la imunocompromiși."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută pragul temporal, zona de necroză și excepția VHE la imunocompromiși, toate din același paragraf."
  },
  "textbookExpressions": [
   "6 luni sau mai mult",
   "Cadranul 34.6"
  ]
 },
 {
  "id": "hepatologie-adv-014",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Morfopatologia hepatitei acute și cronice se caracterizează prin:",
  "options": [
   "Hepatocitele prezintă degenerescență (balonizare, vacuolizare) și necroză, inclusiv corpi eozinofili Councilman",
   "Necroza este de obicei maximală în zona 3, cu forme de la necroza focală până la necroza hepatică masivă",
   "Hepatita de interfață înseamnă pierderea definiției plăcii de delimitare portală/periportală, prin apoptoză mai degrabă decât necroză",
   "Colestaza în zona 3 și încărcarea grasă sunt evidente mai ales în hepatita alcoolică sau medicamentoasă",
   "Infiltratul portal este format predominant din neutrofile, limfocitele fiind absente în hepatita virală"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Hepatocitele prezintă degenerescență (balonizare, vacuolizare) și necroză, inclusiv corpi eozinofili Councilman — Corect: Textul descrie balonizarea, vacuolizarea, necroza și corpii eozinofili Councilman.\n\nNecroza este de obicei maximală în zona 3, cu forme de la necroza focală până la necroza hepatică masivă — Corect: Distribuția este maximală în zona 3, de la necroza pătată/focală până la necroza multiacinară masivă.\n\nHepatita de interfață înseamnă pierderea definiției plăcii de delimitare portală/periportală, prin apoptoză mai degrabă decât necroză — Corect: Hepatita de interfață este definită prin pierderea plăcii de delimitare, distrucția fiind prin apoptoză mai degrabă decât necroză.\n\nColestaza în zona 3 și încărcarea grasă sunt evidente mai ales în hepatita alcoolică sau medicamentoasă — Corect: Colestaza în zona 3 și încărcarea grasă sunt citate în hepatita alcoolică sau medicamentoasă.\n\nInfiltratul portal este format predominant din neutrofile, limfocitele fiind absente în hepatita virală — Incorect: Infiltratul portal și lobular este format în principal din limfocite, nu din neutrofile.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Morfopatologie: necroză, interfață, zona 3 (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Morfopatologie: necroză, interfață, zona 3"
  },
  "learningObjective": "Corelarea corpilor Councilman, a predilecției pentru zona 3 și a hepatitei de interfață (apoptoză) cu patternul inflamator limfocitar.",
  "optionRationales": [
   "Textul descrie balonizarea, vacuolizarea, necroza și corpii eozinofili Councilman.",
   "Distribuția este maximală în zona 3, de la necroza pătată/focală până la necroza multiacinară masivă.",
   "Hepatita de interfață este definită prin pierderea plăcii de delimitare, distrucția fiind prin apoptoză mai degrabă decât necroză.",
   "Colestaza în zona 3 și încărcarea grasă sunt citate în hepatita alcoolică sau medicamentoasă.",
   "Infiltratul portal și lobular este format în principal din limfocite, nu din neutrofile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Capcana este atribuirea infiltratului neutrofilic (marca hepatitei alcoolice) hepatitei virale, plus confuzia zonă 1 versus 3."
  },
  "textbookExpressions": [
   "zona 3",
   "corpi eozinofiliei Councilman"
  ]
 },
 {
  "id": "hepatologie-adv-015",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Cauzele hepatitelor cronice (Cadranul 34.6) includ:",
  "options": [
   "Cauze metabolice, precum steatoza hepatică non-alcoolică, și forma alcool-indusă",
   "Cauze virale: hepatita B ± D, hepatita C și hepatita E la imunocompromiși",
   "Cauze autoimune și ereditare (boala Wilson, hemocromatoză)",
   "Medicamente precum metildopa, izoniazid, ketoconazol și nitrofurantoin",
   "Cauza principală la nivel mondial este deficitul de α1-antitripsină, virusurile fiind rare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Cauze metabolice, precum steatoza hepatică non-alcoolică, și forma alcool-indusă — Corect: Cadranul listează NAFLD și forma alcool-indusă.\n\nCauze virale: hepatita B ± D, hepatita C și hepatita E la imunocompromiși — Corect: Sunt enumerate VHB ± D, VHC și VHE la imunocompromiși.\n\nCauze autoimune și ereditare (boala Wilson, hemocromatoză) — Corect: Autoimună, Wilson și hemocromatoză figurează explicit.\n\nMedicamente precum metildopa, izoniazid, ketoconazol și nitrofurantoin — Corect: Metildopa, izoniazid, ketoconazol și nitrofurantoin sunt exemplele medicamentoase.\n\nCauza principală la nivel mondial este deficitul de α1-antitripsină, virusurile fiind rare — Incorect: Textul identifică hepatita cronică virală drept cauza principală de boală hepatică cronică, ciroză și HCC la nivel mondial.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Cadranul 34.6: cauzele hepatitelor cronice (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Cadranul 34.6: cauzele hepatitelor cronice"
  },
  "learningObjective": "Recunoașterea spectrului etiologic (metabolic, viral inclusiv VHE la imunocompromiși, medicamentos, autoimun, ereditar).",
  "optionRationales": [
   "Cadranul listează NAFLD și forma alcool-indusă.",
   "Sunt enumerate VHB ± D, VHC și VHE la imunocompromiși.",
   "Autoimună, Wilson și hemocromatoză figurează explicit.",
   "Metildopa, izoniazid, ketoconazol și nitrofurantoin sunt exemplele medicamentoase.",
   "Textul identifică hepatita cronică virală drept cauza principală de boală hepatică cronică, ciroză și HCC la nivel mondial."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează ierarhia etiologică mondială (viral versus α1-AT) din același paragraf introductiv."
  },
  "textbookExpressions": [
   "Steatoza hepatica non-alcoolica",
   "ketoconazol"
  ]
 },
 {
  "id": "hepatologie-adv-016",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Dincolo de combinațiile sofosbuvir/ledipasvir și glecaprevir/pibrentasvir deja consacrate, terapia VHC mai include:",
  "options": [
   "Grazoprevir/elbasvir se administrează ca o singură tabletă pe zi, 12 săptămâni, la genotipurile 1 și 4",
   "Toate regimurile elimină virusul la peste 95% dintre pacienți",
   "Tratamentul de salvare cu sofosbuvir/velpatasvir plus voxilaprevir elimină virusul la peste 90% dintre non-responderi",
   "OMS are ca scop eliminarea VHC până în 2030, fără a depinde de un vaccin eficient",
   "Grazoprevir/elbasvir este pangenotipic și se dă 8 săptămâni indiferent de ciroză"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Grazoprevir/elbasvir se administrează ca o singură tabletă pe zi, 12 săptămâni, la genotipurile 1 și 4 — Corect: Textul descrie grazoprevir+elbasvir ca o tabletă pe zi, 12 săptămâni, eficientă la genotipurile 1 și 4.\n\nToate regimurile elimină virusul la peste 95% dintre pacienți — Corect: Eliminarea la peste 95% este explicită.\n\nTratamentul de salvare cu sofosbuvir/velpatasvir plus voxilaprevir elimină virusul la peste 90% dintre non-responderi — Corect: Salvarea cu sofosbuvir/velpatasvir și voxilaprevir are rată >90%.\n\nOMS are ca scop eliminarea VHC până în 2030, fără a depinde de un vaccin eficient — Corect: OMS urmărește eliminarea până în 2030, prima infecție virală controlată fără vaccin eficient.\n\nGrazoprevir/elbasvir este pangenotipic și se dă 8 săptămâni indiferent de ciroză — Incorect: Pangenotipică și 8/12 săptămâni după ciroză este glecaprevir/pibrentasvir, nu grazoprevir/elbasvir.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1284, Hepatita virală C — Regimuri alternative, salvare și obiectivul OMS (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1284
   ],
   "pdfPages": [
    314
   ],
   "section": "Hepatita virală C — Regimuri alternative, salvare și obiectivul OMS"
  },
  "learningObjective": "Completarea hărții DAA cu grazoprevir/elbasvir (1 și 4, 12 săptămâni), ratele >95%/>90% și ținta OMS 2030.",
  "optionRationales": [
   "Textul descrie grazoprevir+elbasvir ca o tabletă pe zi, 12 săptămâni, eficientă la genotipurile 1 și 4.",
   "Eliminarea la peste 95% este explicită.",
   "Salvarea cu sofosbuvir/velpatasvir și voxilaprevir are rată >90%.",
   "OMS urmărește eliminarea până în 2030, prima infecție virală controlată fără vaccin eficient.",
   "Pangenotipică și 8/12 săptămâni după ciroză este glecaprevir/pibrentasvir, nu grazoprevir/elbasvir."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează spectrul genotipic și durata dintre două regimuri bazate pe inhibitori de protează."
  },
  "textbookExpressions": [
   "voxilaprevir",
   "până în 2030"
  ]
 },
 {
  "id": "hepatologie-adv-017",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Virusul hepatitei E, dincolo de mortalitatea la gravide:",
  "options": [
   "Determină o boală clinic foarte asemănătoare hepatitei A și se transmite enteral, de obicei prin apă contaminată",
   "Aproximativ 30% dintre câini, porci și rozătoare poartă virusul",
   "Genomul este ARN monocatenar, cu ORF1 (non-structurale) și ORF2 (structurale)",
   "Diagnosticul folosește ELISA pentru anti-VHE IgG sau IgM și evidențierea ARN VHE în ser sau scaun",
   "Este un virus ADN din familia Hepadnaviridae, transmis parenteral ca VHB"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Determină o boală clinic foarte asemănătoare hepatitei A și se transmite enteral, de obicei prin apă contaminată — Corect: Textul o descrie ca foarte asemănătoare hepatitei A, cu transmitere enterală prin apă.\n\nAproximativ 30% dintre câini, porci și rozătoare poartă virusul — Corect: 30% din câini, porci și rozătoare poartă virusul.\n\nGenomul este ARN monocatenar, cu ORF1 (non-structurale) și ORF2 (structurale) — Corect: Figura genomului indică ARN monocatenar cu ORF1 și ORF2.\n\nDiagnosticul folosește ELISA pentru anti-VHE IgG sau IgM și evidențierea ARN VHE în ser sau scaun — Corect: ELISA IgG/IgM și PCR pentru ARN în ser sau scaun sunt descrise.\n\nEste un virus ADN din familia Hepadnaviridae, transmis parenteral ca VHB — Incorect: VHE este ARN din Hepeviridae, nu ADN Hepadnaviridae.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1284, Hepatita virală E — Transmitere, rezervor animal și genom (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1284
   ],
   "pdfPages": [
    314
   ],
   "section": "Hepatita virală E — Transmitere, rezervor animal și genom"
  },
  "learningObjective": "Recunoașterea analogiei cu VHA, a rezervorului animal (~30%) și a genomului ARN cu ORF, distinct de VHB.",
  "optionRationales": [
   "Textul o descrie ca foarte asemănătoare hepatitei A, cu transmitere enterală prin apă.",
   "30% din câini, porci și rozătoare poartă virusul.",
   "Figura genomului indică ARN monocatenar cu ORF1 și ORF2.",
   "ELISA IgG/IgM și PCR pentru ARN în ser sau scaun sunt descrise.",
   "VHE este ARN din Hepeviridae, nu ADN Hepadnaviridae."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul reia capcana VHB (ADN, Hepadnaviridae, parenteral) pe un virus enteric ARN."
  },
  "textbookExpressions": [
   "30% din câini",
   "Familia Hepeviridae"
  ]
 },
 {
  "id": "hepatologie-adv-018",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Aproximativ 10–15% din hepatitele acute virale nu pot fi clasificate. În acest context sunt adevărate:",
  "options": [
   "O proporție de 10–15% rămâne neclasificată după testele uzuale",
   "Mononucleoza infecțioasă, datorată EBV, poate produce hepatită",
   "Alte cauze virale de afectare parenchimatoasă acută includ CMV și virusul febrei galbene",
   "Cauze non-virale din aceeași figură includ Toxoplasma, Leptospira și Coxiella (febra Q)",
   "Toate hepatitele acute virale sunt azi etichetabile serologic, procentul de 10–15% fiind depășit"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "O proporție de 10–15% rămâne neclasificată după testele uzuale — Corect: Textul citează 10-15% hepatite acute virale neclasificate.\n\nMononucleoza infecțioasă, datorată EBV, poate produce hepatită — Corect: Mononucleoza EBV este menționată ca hepatită.\n\nAlte cauze virale de afectare parenchimatoasă acută includ CMV și virusul febrei galbene — Corect: CMV și virusul febrei galbene figurează la infecțiile virale din figura de pe pagina de hepatită acută.\n\nCauze non-virale din aceeași figură includ Toxoplasma, Leptospira și Coxiella (febra Q) — Corect: Toxoplasma, Leptospira icterohaemorrhagiae și Coxiella burnetii (febra Q) sunt listate la non-virale.\n\nToate hepatitele acute virale sunt azi etichetabile serologic, procentul de 10–15% fiind depășit — Incorect: Textul păstrează cota de 10-15% neclasificate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1284, 1275, Hepatita — Hepatite neclasificate și cauze non-A–E (pagini PDF: 314, 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1284,
    1275
   ],
   "pdfPages": [
    314,
    313
   ],
   "section": "Hepatita — Hepatite neclasificate și cauze non-A–E"
  },
  "learningObjective": "Reținerea cotei de 10–15% neclasificate și a listei de agenți (EBV, CMV, febra galbenă, Leptospira, Coxiella) din figura cauzelor acute.",
  "optionRationales": [
   "Textul citează 10-15% hepatite acute virale neclasificate.",
   "Mononucleoza EBV este menționată ca hepatită.",
   "CMV și virusul febrei galbene figurează la infecțiile virale din figura de pe pagina de hepatită acută.",
   "Toxoplasma, Leptospira icterohaemorrhagiae și Coxiella burnetii (febra Q) sunt listate la non-virale.",
   "Textul păstrează cota de 10-15% neclasificate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cota 10–15% este ușor de negat, iar distractorii trebuie deosebiți de lista reală de zoonoze hepatitice."
  },
  "textbookExpressions": [
   "10-15%",
   "Mononucleoza infectioasa"
  ]
 },
 {
  "id": "hepatologie-adv-019",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Etiologia și morfologia cirozei:",
  "options": [
   "Alcoolul rămâne cea mai frecventă cauză în Occident, dar este probabil să fie înlocuit de NAFLD",
   "Infecția virală este cel mai frecvent factor etiologic la nivel mondial",
   "Ciroza micronodulară are noduli de obicei <3 mm, uniformi, adesea din alcool sau boli ale arborelui biliar",
   "Ciroza macronodulară are noduli de dimensiuni variabile, adesea după hepatită cronică virală",
   "Ciroza micronodulară este tipică hepatitelor virale, iar cea macronodulară alcoolului"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Alcoolul rămâne cea mai frecventă cauză în Occident, dar este probabil să fie înlocuit de NAFLD — Corect: Textul păstrează alcoolul ca cea mai frecventă cauză occidentală, cu NAFLD pe cale să îl înlocuiască.\n\nInfecția virală este cel mai frecvent factor etiologic la nivel mondial — Corect: Infecția virală este cel mai frecvent factor mondial.\n\nCiroza micronodulară are noduli de obicei <3 mm, uniformi, adesea din alcool sau boli ale arborelui biliar — Corect: Micronodular: <3 mm, uniform, alcool sau arbore biliar.\n\nCiroza macronodulară are noduli de dimensiuni variabile, adesea după hepatită cronică virală — Corect: Macronodular: dimensiuni variabile, adesea viral.\n\nCiroza micronodulară este tipică hepatitelor virale, iar cea macronodulară alcoolului — Incorect: Relația este inversă față de distractor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1289, Ciroza hepatică — Etiologie și tipuri micronodular/macronodular (pagini PDF: 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1289
   ],
   "pdfPages": [
    316
   ],
   "section": "Ciroza hepatică — Etiologie și tipuri micronodular/macronodular"
  },
  "learningObjective": "Contrastul Occident (alcool/NAFLD) versus mondial (viral) și corespondența micro- versus macronodulară.",
  "optionRationales": [
   "Textul păstrează alcoolul ca cea mai frecventă cauză occidentală, cu NAFLD pe cale să îl înlocuiască.",
   "Infecția virală este cel mai frecvent factor mondial.",
   "Micronodular: <3 mm, uniform, alcool sau arbore biliar.",
   "Macronodular: dimensiuni variabile, adesea viral.",
   "Relația este inversă față de distractor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează cuplajul etiologie–morfologie (alcool/micro versus viral/macro), o asociere clasică de manual."
  },
  "textbookExpressions": [
   "<3 mm",
   "cel mai frecvent factor etio"
  ]
 },
 {
  "id": "hepatologie-adv-020",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Patogeneza fibrozei hepatice:",
  "options": [
   "Lezarea activează celulele stelate și macrofagele prin axa CCL2–CCR2",
   "Miofibroblastele proliferă sub PDGF, iar TGF-β favorizează diferențierea stelată",
   "TIMP-urile inhibă MMP-urile, perpetuând depunerea de colagen",
   "Dacă cauza este eliminată, fibroza incipientă poate rezolva; în ciroza constituită poate exista regresie, nu restitutio ad integrum",
   "Transplantul hepatic nu are rol, terapiile antifibrotice fiind deja standardul de îngrijire"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Lezarea activează celulele stelate și macrofagele prin axa CCL2–CCR2 — Corect: Axa CCL2-CCR2 activează stelatele și macrofagele.\n\nMiofibroblastele proliferă sub PDGF, iar TGF-β favorizează diferențierea stelată — Corect: TGF-β diferențiază stelatele în miofibroblaste; PDGF le proliferă.\n\nTIMP-urile inhibă MMP-urile, perpetuând depunerea de colagen — Corect: TIMP-urile inhibă degradarea matricei de către MMP.\n\nDacă cauza este eliminată, fibroza incipientă poate rezolva; în ciroza constituită poate exista regresie, nu restitutio ad integrum — Corect: Rezoluția fibrozei incipiente și regresia (nu restitutio) în ciroza constituită sunt distinse explicit.\n\nTransplantul hepatic nu are rol, terapiile antifibrotice fiind deja standardul de îngrijire — Incorect: Antifibroticele sunt în dezvoltare; transplantul rămâne singurul tratament disponibil pentru insuficiența hepatică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1289, Ciroza hepatică — Patogeneza fibrozei și reversibilitatea (pagini PDF: 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1289
   ],
   "pdfPages": [
    316
   ],
   "section": "Ciroza hepatică — Patogeneza fibrozei și reversibilitatea"
  },
  "learningObjective": "Urmărirea cascadei stelată–TGF-β–PDGF–TIMP și nuanța reversibilitate versus regresie, cu absența antifibroticelor de rutină.",
  "optionRationales": [
   "Axa CCL2-CCR2 activează stelatele și macrofagele.",
   "TGF-β diferențiază stelatele în miofibroblaste; PDGF le proliferă.",
   "TIMP-urile inhibă degradarea matricei de către MMP.",
   "Rezoluția fibrozei incipiente și regresia (nu restitutio) în ciroza constituită sunt distinse explicit.",
   "Antifibroticele sunt în dezvoltare; transplantul rămâne singurul tratament disponibil pentru insuficiența hepatică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează stadiul clinic al terapiilor antifibrotice și rolul transplantului, contrazicând fraza finală a paragrafului."
  },
  "textbookExpressions": [
   "celulele stelate",
   "restitutio ad integrum"
  ]
 },
 {
  "id": "hepatologie-adv-021",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Cel mai bun indicator de laborator al funcției hepatice, asociat cu prognostic nefavorabil sub pragul citat, este:",
  "options": [
   "ALT de trei ori normalul",
   "Albumina serică <28 g/L",
   "GGT izolat crescută",
   "Feritina <50 µg/L",
   "Sodiul seric >145 mmol/L"
  ],
  "correct": [
   1
  ],
  "explanation": "ALT de trei ori normalul — Incorect: ALT reflectă necroza, nu este citat ca cel mai bun indicator funcțional.\n\nAlbumina serică <28 g/L — Corect: Textul precizează că albumina și TP sunt cei mai buni indicatori; prognostic nefavorabil dacă albumina este <28 g/L.\n\nGGT izolat crescută — Incorect: GGT nu este folosită astfel în acest paragraf.\n\nFeritina <50 µg/L — Incorect: Feritina scăzută nu este markerul de prognostic hepatic citat.\n\nSodiul seric >145 mmol/L — Incorect: Hiponatremia <125 mmol/L, nu hipernatremia, figurează la indicatorii nefavorabili.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1289, Ciroza hepatică — Investigații: albumină și prognostic (pagini PDF: 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1289
   ],
   "pdfPages": [
    316
   ],
   "section": "Ciroza hepatică — Investigații: albumină și prognostic"
  },
  "learningObjective": "Identificarea albuminei <28 g/L (și a TP) ca cei mai buni indicatori funcționali, cu pragul de prognostic nefavorabil.",
  "optionRationales": [
   "ALT reflectă necroza, nu este citat ca cel mai bun indicator funcțional.",
   "Textul precizează că albumina și TP sunt cei mai buni indicatori; prognostic nefavorabil dacă albumina este <28 g/L.",
   "GGT nu este folosită astfel în acest paragraf.",
   "Feritina scăzută nu este markerul de prognostic hepatic citat.",
   "Hiponatremia <125 mmol/L, nu hipernatremia, figurează la indicatorii nefavorabili."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pragul 28 g/L trebuie deosebit de alte cut-off-uri de pe aceeași pagină (creatinină 130, AFP 200)."
  },
  "textbookExpressions": [
   "<28 g/L",
   "cei mai buni indica"
  ]
 },
 {
  "id": "hepatologie-adv-022",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Elastografia (Fibroscan) în ciroză:",
  "options": [
   "O valoare <7,7 indică absența bolii sau boală ușoară",
   "Intervalul 7,7–9,8 corespunde bolii moderate, iar ≥9,8 bolii severe",
   "Peste 25 kPa, hipertensiunea portală este foarte probabilă",
   "Biopsia rămâne primul pas de rutină, elastografia neavând rol în evitarea ei",
   "Valorile sub 5 kPa definesc ciroza constituită cu hipertensiune portală certă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "O valoare <7,7 indică absența bolii sau boală ușoară — Corect: Textul dă <7,7 ca absență sau boală ușoară.\n\nIntervalul 7,7–9,8 corespunde bolii moderate, iar ≥9,8 bolii severe — Corect: 7,7-9,8 moderată, ≥9,8 severă.\n\nPeste 25 kPa, hipertensiunea portală este foarte probabilă — Corect: >25 kPa face hipertensiunea portală foarte probabilă.\n\nBiopsia rămâne primul pas de rutină, elastografia neavând rol în evitarea ei — Incorect: Elastografia este din ce în ce mai folosită pentru a evita biopsia.\n\nValorile sub 5 kPa definesc ciroza constituită cu hipertensiune portală certă — Incorect: Ciroza/HTP se asociază valorilor înalte (25 kPa), nu celor sub 5.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1290, 1289, Ciroza hepatică — Elastografie: praguri de fibroză și de hipertensiune portală (pagini PDF: 317, 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1290,
    1289
   ],
   "pdfPages": [
    317,
    316
   ],
   "section": "Ciroza hepatică — Elastografie: praguri de fibroză și de hipertensiune portală"
  },
  "learningObjective": "Memorarea cut-off-urilor 7,7 / 9,8 pentru severitatea fibrozei și 25 kPa pentru hipertensiunea portală.",
  "optionRationales": [
   "Textul dă <7,7 ca absență sau boală ușoară.",
   "7,7-9,8 moderată, ≥9,8 severă.",
   ">25 kPa face hipertensiunea portală foarte probabilă.",
   "Elastografia este din ce în ce mai folosită pentru a evita biopsia.",
   "Ciroza/HTP se asociază valorilor înalte (25 kPa), nu celor sub 5."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Trei praguri numerice învecinate (7,7, 9,8, 25) sunt concepute să fie permutate."
  },
  "textbookExpressions": [
   "7,7-9,8",
   ">25 kPa"
  ]
 },
 {
  "id": "hepatologie-adv-023",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Screeningul și măsurile generale la cirotic:",
  "options": [
   "α-fetoproteina serică >200 ng/ml este puternic sugestivă pentru HCC",
   "Ecografia la 6 luni este metoda de screening pentru depistarea precoce a HCC",
   "Aportul de sodiu se reduce (≤2 g sodiu pe zi); se evită alcoolul, aspirina și AINS",
   "Screeningul HCC se face anual cu RMN, AFP-ul neavând nicio valoare",
   "Restricția de sodiu este inutilă, pacienții cirotici având nevoie de 6 g sare zilnic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "α-fetoproteina serică >200 ng/ml este puternic sugestivă pentru HCC — Corect: Textul consideră AFP >200 ng/ml puternic sugestivă pentru HCC.\n\nEcografia la 6 luni este metoda de screening pentru depistarea precoce a HCC — Corect: Screeningul ecografic la 6 luni este indicat pentru HCC precoce.\n\nAportul de sodiu se reduce (≤2 g sodiu pe zi); se evită alcoolul, aspirina și AINS — Corect: Sodiul ≤2 g/zi și evitarea alcoolului, aspirinei și AINS sunt recomandate.\n\nScreeningul HCC se face anual cu RMN, AFP-ul neavând nicio valoare — Incorect: Metoda citată este ecografia la 6 luni, iar AFP are valoare peste 200 ng/ml.\n\nRestricția de sodiu este inutilă, pacienții cirotici având nevoie de 6 g sare zilnic — Incorect: Restricția de sodiu este explicită, nu un aport de 6 g.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1290, 1289, Ciroza hepatică — Screening HCC și măsuri igienice (pagini PDF: 317, 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1290,
    1289
   ],
   "pdfPages": [
    317,
    316
   ],
   "section": "Ciroza hepatică — Screening HCC și măsuri igienice"
  },
  "learningObjective": "Reținerea pragului AFP >200 ng/ml, a ecografiei la 6 luni și a țintei de sodiu ≤2 g/zi.",
  "optionRationales": [
   "Textul consideră AFP >200 ng/ml puternic sugestivă pentru HCC.",
   "Screeningul ecografic la 6 luni este indicat pentru HCC precoce.",
   "Sodiul ≤2 g/zi și evitarea alcoolului, aspirinei și AINS sunt recomandate.",
   "Metoda citată este ecografia la 6 luni, iar AFP are valoare peste 200 ng/ml.",
   "Restricția de sodiu este explicită, nu un aport de 6 g."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Intervalul de screening (6 luni versus anual) și pragul AFP 200 sunt ușor de deplasat."
  },
  "textbookExpressions": [
   ">200 ng/ml",
   "6 luni"
  ]
 },
 {
  "id": "hepatologie-adv-024",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Indicatorii de prognostic nefavorabil în ciroză (Cadranul 34.15) includ:",
  "options": [
   "Albumină <28 g/L și sodiu seric <125 mmol/L",
   "Timp de protrombină prelungit >6 secunde peste normal",
   "Creatinină >130 µmol/L",
   "Ascită, hemoragie variceală, ficat mic și hipotensiune persistentă",
   "Sodiu seric >145 mmol/L și albumină >40 g/L, ca markeri de hipervolemie"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Albumină <28 g/L și sodiu seric <125 mmol/L — Corect: Cadranul listează albumina <28 g/L și Na <125 mmol/L.\n\nTimp de protrombină prelungit >6 secunde peste normal — Corect: TP >6 s peste normal este criteriu.\n\nCreatinină >130 µmol/L — Corect: Creatinina >130 µmol/L este listată.\n\nAscită, hemoragie variceală, ficat mic și hipotensiune persistentă — Corect: Ascita, hemoragia variceală, ficatul mic și hipotensiunea persistentă figurează la semnele clinice.\n\nSodiu seric >145 mmol/L și albumină >40 g/L, ca markeri de hipervolemie — Incorect: Valorile „înalte” de Na și albumină sunt opusul criteriilor de prognostic nefavorabil.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1291, Ciroza hepatică — Cadranul 34.15: prognostic nefavorabil (pagini PDF: 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1291
   ],
   "pdfPages": [
    318
   ],
   "section": "Ciroza hepatică — Cadranul 34.15: prognostic nefavorabil"
  },
  "learningObjective": "Aplicarea pragurilor biochimice (albumină 28, Na 125, TP >6 s, creatinină 130) și a semnelor clinice de prognostic prost.",
  "optionRationales": [
   "Cadranul listează albumina <28 g/L și Na <125 mmol/L.",
   "TP >6 s peste normal este criteriu.",
   "Creatinina >130 µmol/L este listată.",
   "Ascita, hemoragia variceală, ficatul mic și hipotensiunea persistentă figurează la semnele clinice.",
   "Valorile „înalte” de Na și albumină sunt opusul criteriilor de prognostic nefavorabil."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate pragurile numerice au un „invers” plauzibil (hipernatremie, albumină mare) ca distractor unic."
  },
  "textbookExpressions": [
   "<125 mmol/L",
   ">130 µmol/l"
  ]
 },
 {
  "id": "hepatologie-adv-025",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Scorul MELD (Cadranul 34.17):",
  "options": [
   "Se bazează pe bilirubină, creatinină și INR (cu un termen constant +6,4)",
   "Conversia bilirubinei din µmol/L în mg/dl se face prin împărțire la 17, a creatininei la 88,4",
   "Un scor <10 se asociază cu supraviețuire de 97% la 1 an; scorul 30–40 cu 70% la 1 an",
   "Există un MELD modificat (ex. UKELD) folosit în alocare",
   "MELD înlocuiește complet Child-Pugh, clasele A/B/C nemaifiind citate în prognosticul la 1 și 5 ani"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Se bazează pe bilirubină, creatinină și INR (cu un termen constant +6,4) — Corect: Formula din cadran folosește bilirubină, creatinină, INR și +6,4.\n\nConversia bilirubinei din µmol/L în mg/dl se face prin împărțire la 17, a creatininei la 88,4 — Corect: Împărțire la 17 (bilirubină) și 88,4 (creatinină).\n\nUn scor <10 se asociază cu supraviețuire de 97% la 1 an; scorul 30–40 cu 70% la 1 an — Corect: <10: 97% la 1 an; 30-40: 70% la 1 an.\n\nExistă un MELD modificat (ex. UKELD) folosit în alocare — Corect: UKELD este menționat ca MELD modificat.\n\nMELD înlocuiește complet Child-Pugh, clasele A/B/C nemaifiind citate în prognosticul la 1 și 5 ani — Incorect: Child-Pugh rămâne prezentat cu supraviețuiri la 1, 5 și 10 ani; MELD nu îl „șterge”.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1291, Ciroza hepatică — Scorul MELD și UKELD (pagini PDF: 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1291
   ],
   "pdfPages": [
    318
   ],
   "section": "Ciroza hepatică — Scorul MELD și UKELD"
  },
  "learningObjective": "Reținerea formulei (bilirubină, creatinină, INR), a factorilor de conversie și a supraviețuirii pe benzi de scor.",
  "optionRationales": [
   "Formula din cadran folosește bilirubină, creatinină, INR și +6,4.",
   "Împărțire la 17 (bilirubină) și 88,4 (creatinină).",
   "<10: 97% la 1 an; 30-40: 70% la 1 an.",
   "UKELD este menționat ca MELD modificat.",
   "Child-Pugh rămâne prezentat cu supraviețuiri la 1, 5 și 10 ani; MELD nu îl „șterge”."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Benzile de supraviețuire MELD (97% versus 70%) și factorii 17/88,4 sunt ușor de permutat."
  },
  "textbookExpressions": [
   "împarte cu 17",
   "UKELD"
  ]
 },
 {
  "id": "hepatologie-adv-026",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Indicațiile de transplant hepatic, dincolo de contraindicațiile absolute:",
  "options": [
   "Ciroza în stadiu final (Child C; MELD ≥20; UKELD ≥49) și simptomele debilitante justifică evaluarea",
   "În PBC, bilirubina serică crescută constant >100 µmol/L este un reper",
   "Criteriile Milan pentru HCC: trei leziuni <3 cm sau un nodul solitar <5 cm",
   "Donatorii sub 50 de ani oferă o grefă de calitate superioară; conservarea pe gheață poate ajunge la 20 de ore",
   "Compatibilitatea HLA este cerută ca la transplantul renal, iar donatorii peste 50 de ani sunt sistematic excluși"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Ciroza în stadiu final (Child C; MELD ≥20; UKELD ≥49) și simptomele debilitante justifică evaluarea — Corect: Textul cere evaluarea la Child C, MELD ≥20, UKELD ≥49 și simptome debilitante.\n\nÎn PBC, bilirubina serică crescută constant >100 µmol/L este un reper — Corect: Bilirubina >100 µmol/L constantă este reper în PBC.\n\nCriteriile Milan pentru HCC: trei leziuni <3 cm sau un nodul solitar <5 cm — Corect: Milan: trei leziuni <3 cm sau un nodul <5 cm.\n\nDonatorii sub 50 de ani oferă o grefă de calitate superioară; conservarea pe gheață poate ajunge la 20 de ore — Corect: Donatorii <50 de ani și conservarea până la 20 de ore sunt citate.\n\nCompatibilitatea HLA este cerută ca la transplantul renal, iar donatorii peste 50 de ani sunt sistematic excluși — Incorect: Compatibilitatea HLA nu este necesară (banca anterioară); donatorii mai în vârstă (criterii extinse) sunt folosiți, nu excluși sistematic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1292, Ciroza hepatică — Transplantul: indicații, Milan, donatorul (pagini PDF: 319).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1292
   ],
   "pdfPages": [
    319
   ],
   "section": "Ciroza hepatică — Transplantul: indicații, Milan, donatorul"
  },
  "learningObjective": "Aplicarea pragurilor Child C / MELD 20 / UKELD 49, a bilirubinei 100 în PBC și a criteriilor Milan, plus fereastra de conservare de 20 de ore.",
  "optionRationales": [
   "Textul cere evaluarea la Child C, MELD ≥20, UKELD ≥49 și simptome debilitante.",
   "Bilirubina >100 µmol/L constantă este reper în PBC.",
   "Milan: trei leziuni <3 cm sau un nodul <5 cm.",
   "Donatorii <50 de ani și conservarea până la 20 de ore sunt citate.",
   "Compatibilitatea HLA nu este necesară (banca anterioară); donatorii mai în vârstă (criterii extinse) sunt folosiți, nu excluși sistematic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pragurile MELD/UKELD și cele două brațe Milan (3×3 cm versus 1×5 cm) sunt concepute pentru permutare."
  },
  "textbookExpressions": [
   "nodul solitar",
   "20 de ore"
  ]
 },
 {
  "id": "hepatologie-adv-027",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "După transplantul hepatic, pe lângă cele două tipuri de rejet deja descrise:",
  "options": [
   "Operația durează aproximativ 8 ore și rareori necesită o transfuzie mare",
   "Supraviețuirea este de ~90% la 1 an și 70–85% la 5 ani",
   "Sepsisul și hemoragia sunt complicații postoperatorii în primele 3 luni",
   "Imunosupresia de obicei combină un calcineurinic cu azatioprină sau micofenolat, plus steroizi",
   "Mortalitatea operatorie este de 50%, iar imunosupresia se oprește la 3 luni"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Operația durează aproximativ 8 ore și rareori necesită o transfuzie mare — Corect: Durata de aproximativ 8 ore, cu transfuzie mare rară, este din text.\n\nSupraviețuirea este de ~90% la 1 an și 70–85% la 5 ani — Corect: 90% la 1 an și 70-85% la 5 ani.\n\nSepsisul și hemoragia sunt complicații postoperatorii în primele 3 luni — Corect: Sepsisul și hemoragia apar în primele 3 luni.\n\nImunosupresia de obicei combină un calcineurinic cu azatioprină sau micofenolat, plus steroizi — Corect: Combinația calcineurinic ± azatioprină/MMF + steroizi este descrisă.\n\nMortalitatea operatorie este de 50%, iar imunosupresia se oprește la 3 luni — Incorect: Imunosupresia este de durată, nu se oprește la 3 luni; mortalitatea 50% nu este cifra operației.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1292, Ciroza hepatică — Transplantul: perioperator și supraviețuire (pagini PDF: 319).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1292
   ],
   "pdfPages": [
    319
   ],
   "section": "Ciroza hepatică — Transplantul: perioperator și supraviețuire"
  },
  "learningObjective": "Reținerea duratei (~8 h), a supraviețuirii 90%/70–85% și a ferestrei de 3 luni pentru sepsis/hemoragie.",
  "optionRationales": [
   "Durata de aproximativ 8 ore, cu transfuzie mare rară, este din text.",
   "90% la 1 an și 70-85% la 5 ani.",
   "Sepsisul și hemoragia apar în primele 3 luni.",
   "Combinația calcineurinic ± azatioprină/MMF + steroizi este descrisă.",
   "Imunosupresia este de durată, nu se oprește la 3 luni; mortalitatea 50% nu este cifra operației."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Supraviețuirea 90%/70–85% este ușor de inversat cu o mortalitate operatorie imaginară de 50%."
  },
  "textbookExpressions": [
   "aproximativ 8 ore",
   "70-85% la 5 ani"
  ]
 },
 {
  "id": "hepatologie-adv-028",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Hipertensiunea portală și varicele:",
  "options": [
   "Presiunea portală normală este 5–8 mmHg; peste 10–12 mmHg se deschid colateralele",
   "Aproximativ 90% dintre cirotici dezvoltă varice în 10 ani, dar numai o treime sângeră",
   "Mortalitatea generală prin hemoragie variceală la 6 săptămâni este 15–25%, ajungând la 50% în clasa Child C",
   "Varicele rectale sunt frecvente (~30%) dacă sunt căutate și se deosebesc de hemoroizi",
   "Varicele apar la sub 10% dintre cirotici, iar mortalitatea la 6 săptămâni este sub 2% în Child C"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Presiunea portală normală este 5–8 mmHg; peste 10–12 mmHg se deschid colateralele — Corect: Normal 5-8 mmHg; peste 10-12 mmHg se deschid colateralele.\n\nAproximativ 90% dintre cirotici dezvoltă varice în 10 ani, dar numai o treime sângeră — Corect: 90% varice în 10 ani, o treime sângeră.\n\nMortalitatea generală prin hemoragie variceală la 6 săptămâni este 15–25%, ajungând la 50% în clasa Child C — Corect: 15-25% la 6 săptămâni, 50% în Child C.\n\nVaricele rectale sunt frecvente (~30%) dacă sunt căutate și se deosebesc de hemoroizi — Corect: Varice rectale ~30%, distincte de hemoroizi.\n\nVaricele apar la sub 10% dintre cirotici, iar mortalitatea la 6 săptămâni este sub 2% în Child C — Incorect: Cifrele reale sunt 90% și 15-25%/50%, nu 10% și 2%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1293, Ciroza hepatică — Hipertensiunea portală: praguri și istorie naturală (pagini PDF: 320).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1293
   ],
   "pdfPages": [
    320
   ],
   "section": "Ciroza hepatică — Hipertensiunea portală: praguri și istorie naturală"
  },
  "learningObjective": "Fixarea pragului 10–12 mmHg, a riscului 90%/10 ani versus 1/3 sângerări și a mortalității 15–25% (50% în Child C).",
  "optionRationales": [
   "Normal 5-8 mmHg; peste 10-12 mmHg se deschid colateralele.",
   "90% varice în 10 ani, o treime sângeră.",
   "15-25% la 6 săptămâni, 50% în Child C.",
   "Varice rectale ~30%, distincte de hemoroizi.",
   "Cifrele reale sunt 90% și 15-25%/50%, nu 10% și 2%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Trei procente (90, 30, 15–25) din același paragraf sunt ușor de coborât spre valori „benigne”."
  },
  "textbookExpressions": [
   "10-12 mmHg",
   "15-25%"
  ]
 },
 {
  "id": "hepatologie-adv-029",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "În hemoragia variceală acută, dincolo de terlipresină și ținta de hemoglobină 80 g/L:",
  "options": [
   "Între 15% și 20% din sângerări provin din varice gastrice, cu mortalitate până la 40%",
   "Hemostaza endoscopică se realizează la 80–90% dintre pacienți; ideal sub anestezie",
   "Somatostatina 250–500 µg/oră reduce sângerarea și este rezervată contraindicațiilor la terlipresină",
   "Terlipresina se reduce la 1 mg la 4 ore după 48 de ore, dacă este nevoie de un regim până la 5 zile",
   "Somatostatina înlocuiește terlipresina la toți pacienții, având dovezi superioare de reducere a mortalității"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Între 15% și 20% din sângerări provin din varice gastrice, cu mortalitate până la 40% — Corect: 15-20% din sângerări sunt gastrice, mortalitate până la 40%.\n\nHemostaza endoscopică se realizează la 80–90% dintre pacienți; ideal sub anestezie — Corect: Hemostaza endoscopică 80-90%, preferabil sub anestezie.\n\nSomatostatina 250–500 µg/oră reduce sângerarea și este rezervată contraindicațiilor la terlipresină — Corect: Somatostatina 250-500 µg/oră este rezervată contraindicațiilor la terlipresină.\n\nTerlipresina se reduce la 1 mg la 4 ore după 48 de ore, dacă este nevoie de un regim până la 5 zile — Corect: După 48 de ore doza de terlipresină poate scădea la 1 mg la 4 ore, până la 5 zile.\n\nSomatostatina înlocuiește terlipresina la toți pacienții, având dovezi superioare de reducere a mortalității — Incorect: Terlipresina, nu somatostatina, are dovezile de mortalitate; somatostatina este de rezervă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1294, Ciroza hepatică — Hemoragia variceală: varice gastrice și somatostatină (pagini PDF: 321).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1294
   ],
   "pdfPages": [
    321
   ],
   "section": "Ciroza hepatică — Hemoragia variceală: varice gastrice și somatostatină"
  },
  "learningObjective": "Completarea managementului acut cu ponderea varicelor gastrice (15–20%, mortalitate 40%) și doza de somatostatină 250–500 µg/oră.",
  "optionRationales": [
   "15-20% din sângerări sunt gastrice, mortalitate până la 40%.",
   "Hemostaza endoscopică 80-90%, preferabil sub anestezie.",
   "Somatostatina 250-500 µg/oră este rezervată contraindicațiilor la terlipresină.",
   "După 48 de ore doza de terlipresină poate scădea la 1 mg la 4 ore, până la 5 zile.",
   "Terlipresina, nu somatostatina, are dovezile de mortalitate; somatostatina este de rezervă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Doza de somatostatină și ponderea varicelor gastrice completează itemul existent despre terlipresină, fără a-l relua."
  },
  "textbookExpressions": [
   "250-500 µg/oră",
   "până la 40%"
  ]
 },
 {
  "id": "hepatologie-adv-030",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Tamponada cu balon și stentul esofagian în sângerarea variceală refractară:",
  "options": [
   "Balonul se lasă pe loc cel mult 12 ore și se extrage în laboratorul de endoscopie imediat înaintea endoscopiei",
   "Stentul metalic acoperit autoexpandabil (Danis) se îndepărtează la 7 zile după introducere",
   "Hemostaza cu balon se realizează în până la 90% din cazuri, dar cu complicații grave (pneumonie de aspirație, ruptură, ulcerație)",
   "Sucralfatul 1 g de patru ori pe zi poate reduce ulcerațiile după bandare",
   "Balonul se menține 7 zile, iar stentul Danis se lasă 12 ore, rapoartele fiind inversate"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Balonul se lasă pe loc cel mult 12 ore și se extrage în laboratorul de endoscopie imediat înaintea endoscopiei — Corect: Textul limitează balonul la cel mult 12 ore, extras imediat înaintea endoscopiei.\n\nStentul metalic acoperit autoexpandabil (Danis) se îndepărtează la 7 zile după introducere — Corect: Stentul Danis se îndepărtează la 7 zile.\n\nHemostaza cu balon se realizează în până la 90% din cazuri, dar cu complicații grave (pneumonie de aspirație, ruptură, ulcerație) — Corect: Hemostază până la 90%, cu complicații grave listate.\n\nSucralfatul 1 g de patru ori pe zi poate reduce ulcerațiile după bandare — Corect: Sucralfat 1 g ×4/zi poate reduce ulcerațiile după bandare.\n\nBalonul se menține 7 zile, iar stentul Danis se lasă 12 ore, rapoartele fiind inversate — Incorect: Ferestrele sunt inversate în distractor: 12 ore balon, 7 zile stent.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1295, 1294, Ciroza hepatică — Tamponadă cu balon și stent Danis (pagini PDF: 322, 321).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1295,
    1294
   ],
   "pdfPages": [
    322,
    321
   ],
   "section": "Ciroza hepatică — Tamponadă cu balon și stent Danis"
  },
  "learningObjective": "Diferențierea ferestrelor 12 ore (balon) versus 7 zile (stent Danis) și recunoașterea complicațiilor tamponadei.",
  "optionRationales": [
   "Textul limitează balonul la cel mult 12 ore, extras imediat înaintea endoscopiei.",
   "Stentul Danis se îndepărtează la 7 zile.",
   "Hemostază până la 90%, cu complicații grave listate.",
   "Sucralfat 1 g ×4/zi poate reduce ulcerațiile după bandare.",
   "Ferestrele sunt inversate în distractor: 12 ore balon, 7 zile stent."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele două dispozitive diferă doar prin durată (12 ore versus 7 zile), o capcană de permutare."
  },
  "textbookExpressions": [
   "cel mult 12 ore",
   "Danis"
  ]
 },
 {
  "id": "hepatologie-adv-031",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "TIPS și profilaxia primară a sângerării variceale:",
  "options": [
   "TIPS reduce presiunea sinusoidală; un studiu pe 671 de pacienți a validat beneficiul de supraviețuire al TIPS „preventiv” în 72 de ore, mai ales la Child C",
   "Fără profilaxie, riscul de resângerare este 60–80% la 2 ani, cu mortalitate ~20% pe episod",
   "Beta-blocantele neselective reduc sângerarea gastrointestinală superioară cu aproximativ 50%, pot crește supraviețuirea și sunt cost-eficiente",
   "Ligaturile se repetă la 2 săptămâni; 30–40% din varice se refac pe an, cu control la 1–3 luni apoi la 6–12 luni",
   "TIPS crește presiunea portală și este rezervat Child A, fără beneficiu de supraviețuire"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "TIPS reduce presiunea sinusoidală; un studiu pe 671 de pacienți a validat beneficiul de supraviețuire al TIPS „preventiv” în 72 de ore, mai ales la Child C — Corect: TIPS preventiv în 72 de ore, cu beneficiu mai ales la Child C, este citat.\n\nFără profilaxie, riscul de resângerare este 60–80% la 2 ani, cu mortalitate ~20% pe episod — Corect: 60-80% resângerare la 2 ani, ~20% mortalitate pe episod.\n\nBeta-blocantele neselective reduc sângerarea gastrointestinală superioară cu aproximativ 50%, pot crește supraviețuirea și sunt cost-eficiente — Corect: NSBB reduc sângerarea superioară cu ~50% și pot crește supraviețuirea.\n\nLigaturile se repetă la 2 săptămâni; 30–40% din varice se refac pe an, cu control la 1–3 luni apoi la 6–12 luni — Corect: Intervalele 2 săptămâni, 30-40% recurență/an, control 1-3 luni apoi 6-12 luni.\n\nTIPS crește presiunea portală și este rezervat Child A, fără beneficiu de supraviețuire — Incorect: TIPS scade presiunea, nu o crește; beneficiul de supraviețuire este descris la Child C.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1295, Ciroza hepatică — TIPS preventiv și profilaxia primară (pagini PDF: 322).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1295
   ],
   "pdfPages": [
    322
   ],
   "section": "Ciroza hepatică — TIPS preventiv și profilaxia primară"
  },
  "learningObjective": "Reținerea ferestrei de 72 de ore pentru TIPS preventiv, a riscului 60–80%/2 ani fără profilaxie și a reducerii cu 50% a sângerării prin NSBB.",
  "optionRationales": [
   "TIPS preventiv în 72 de ore, cu beneficiu mai ales la Child C, este citat.",
   "60-80% resângerare la 2 ani, ~20% mortalitate pe episod.",
   "NSBB reduc sângerarea superioară cu ~50% și pot crește supraviețuirea.",
   "Intervalele 2 săptămâni, 30-40% recurență/an, control 1-3 luni apoi 6-12 luni.",
   "TIPS scade presiunea, nu o crește; beneficiul de supraviețuire este descris la Child C."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fereastra 72 de ore și reducerea de 50% a sângerării prin NSBB sunt ușor de atribuit greșit Child A sau TIPS ca măsură care crește presiunea."
  },
  "textbookExpressions": [
   "72",
   "60-80% la 2 ani"
  ]
 },
 {
  "id": "hepatologie-adv-032",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Fiziopatologia ascitei cirotice, dincolo de dozele de spironolactonă:",
  "options": [
   "Excreția urinară de sodiu depășește rar 5 mmol/24 h, iar pierderea extrarenală este ~30 mmol/24 h",
   "Un aport obișnuit de 120–200 mmol Na duce la un bilanț pozitiv de ~90–170 mmol/24 h (600–1300 ml lichid)",
   "SAAG >11 g/L sugerează hipertensiune portală; SAAG <11 g/L se asociază afecțiunilor peritoneale (neoplazie)",
   "Un număr de neutrofile >250/mm³ în ascită definește pragul de PBS",
   "SAAG >11 g/L exclude hipertensiunea portală și impune laparotomie imediată"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Excreția urinară de sodiu depășește rar 5 mmol/24 h, iar pierderea extrarenală este ~30 mmol/24 h — Corect: Na urinar rar >5 mmol/24 h; pierdere extrarenală ~30 mmol.\n\nUn aport obișnuit de 120–200 mmol Na duce la un bilanț pozitiv de ~90–170 mmol/24 h (600–1300 ml lichid) — Corect: Aport 120-200 mmol → bilanț +90-170 mmol (600-1300 ml).\n\nSAAG >11 g/L sugerează hipertensiune portală; SAAG <11 g/L se asociază afecțiunilor peritoneale (neoplazie) — Corect: SAAG >11 g/L = HTP; <11 g/L = peritoneal/neoplazie.\n\nUn număr de neutrofile >250/mm³ în ascită definește pragul de PBS — Corect: Neutrofile >250/mm³ este pragul citat.\n\nSAAG >11 g/L exclude hipertensiunea portală și impune laparotomie imediată — Incorect: SAAG >11 g/L susține HTP, nu o exclude.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1296, Ciroza hepatică — Ascita: bilanțul sodiului și SAAG (pagini PDF: 323).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1296
   ],
   "pdfPages": [
    323
   ],
   "section": "Ciroza hepatică — Ascita: bilanțul sodiului și SAAG"
  },
  "learningObjective": "Aplicarea cifrelor de bilanț Na (5 / 30 / 90–170 mmol) și a pragurilor SAAG 11 g/L și neutrofile 250/mm³.",
  "optionRationales": [
   "Na urinar rar >5 mmol/24 h; pierdere extrarenală ~30 mmol.",
   "Aport 120-200 mmol → bilanț +90-170 mmol (600-1300 ml).",
   "SAAG >11 g/L = HTP; <11 g/L = peritoneal/neoplazie.",
   "Neutrofile >250/mm³ este pragul citat.",
   "SAAG >11 g/L susține HTP, nu o exclude."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pragurile 5 mmol, 11 g/L și 250/mm³ coexistă pe aceeași pagină și sunt ușor de inversat."
  },
  "textbookExpressions": [
   ">11 g/L",
   ">250/mm3"
  ]
 },
 {
  "id": "hepatologie-adv-033",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Paracenteza în ascita tensionată sau refractară:",
  "options": [
   "Complicațiile principale sunt hipovolemia și disfuncția renală (disfuncție circulatorie post-paracenteză), mai ales peste 5 L evacuați",
   "Se perfuzionează albumină 8 g/L de lichid ascitic eliminat",
   "În practică se pot evacua până la 20 L în 4–6 ore",
   "TIPS poate trata ascita refractară, aceasta fiind o indicație de transplant",
   "Albumina se evită, iar evacuarea a 20 L fără substituție este preferată pentru a scurta spitalizarea"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Complicațiile principale sunt hipovolemia și disfuncția renală (disfuncție circulatorie post-paracenteză), mai ales peste 5 L evacuați — Corect: Disfuncția circulatorie post-paracenteză este mai probabilă peste 5 L.\n\nSe perfuzionează albumină 8 g/L de lichid ascitic eliminat — Corect: Albumina 8 g/L lichid eliminat este schema.\n\nÎn practică se pot evacua până la 20 L în 4–6 ore — Corect: Până la 20 L în 4-6 ore este practica citată.\n\nTIPS poate trata ascita refractară, aceasta fiind o indicație de transplant — Corect: TIPS pentru refractară; indicație de transplant.\n\nAlbumina se evită, iar evacuarea a 20 L fără substituție este preferată pentru a scurta spitalizarea — Incorect: Albumina este tocmai măsura care limitează hipovolemia; evitarea ei este opusul recomandării.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1297, 1296, Ciroza hepatică — Paracenteza de volum mare (pagini PDF: 324, 323).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1297,
    1296
   ],
   "pdfPages": [
    324,
    323
   ],
   "section": "Ciroza hepatică — Paracenteza de volum mare"
  },
  "learningObjective": "Reținerea pragului >5 L, a dozei de albumină 8 g/L și a volumului practic de până la 20 L în 4–6 ore.",
  "optionRationales": [
   "Disfuncția circulatorie post-paracenteză este mai probabilă peste 5 L.",
   "Albumina 8 g/L lichid eliminat este schema.",
   "Până la 20 L în 4-6 ore este practica citată.",
   "TIPS pentru refractară; indicație de transplant.",
   "Albumina este tocmai măsura care limitează hipovolemia; evitarea ei este opusul recomandării."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Doza 8 g/L și pragul 5 L versus volumul 20 L sunt ușor de permutat într-o schemă „fără albumină”."
  },
  "textbookExpressions": [
   "8 g/L",
   "mai mult de 5 litri"
  ]
 },
 {
  "id": "hepatologie-adv-034",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Profilaxia peritonitei bacteriene spontane, dincolo de oprirea beta-blocantului:",
  "options": [
   "Mortalitatea unui episod este 10–15%",
   "Profilaxia primară se consideră la pacienții cu proteine în ascită sub 10 g/L sau cu boală hepatică avansată",
   "Norfloxacina 400 mg/zi este exemplul de prevenție secundară care prelungește supraviețuirea",
   "Recurența este frecventă (70% într-un an)",
   "Profilaxia primară se adresează doar ascitei cu proteine peste 30 g/L, recurența fiind rară sub 5%"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Mortalitatea unui episod este 10–15% — Corect: Mortalitatea 10-15% este citată.\n\nProfilaxia primară se consideră la pacienții cu proteine în ascită sub 10 g/L sau cu boală hepatică avansată — Corect: Profilaxia primară: proteine <10 g/L sau boală avansată.\n\nNorfloxacina 400 mg/zi este exemplul de prevenție secundară care prelungește supraviețuirea — Corect: Norfloxacin 400 mg/zi prelungește supraviețuirea în prevenția secundară.\n\nRecurența este frecventă (70% într-un an) — Corect: Recurența 70% într-un an.\n\nProfilaxia primară se adresează doar ascitei cu proteine peste 30 g/L, recurența fiind rară sub 5% — Incorect: Pragul este <10 g/L, nu >30 g/L; recurența nu este rară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1297, Ciroza hepatică — PBS: mortalitate și profilaxie primară versus secundară (pagini PDF: 324).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1297
   ],
   "pdfPages": [
    324
   ],
   "section": "Ciroza hepatică — PBS: mortalitate și profilaxie primară versus secundară"
  },
  "learningObjective": "Completarea itemului existent cu mortalitatea 10–15%, pragul de proteine <10 g/L pentru profilaxia primară și norfloxacina 400 mg.",
  "optionRationales": [
   "Mortalitatea 10-15% este citată.",
   "Profilaxia primară: proteine <10 g/L sau boală avansată.",
   "Norfloxacin 400 mg/zi prelungește supraviețuirea în prevenția secundară.",
   "Recurența 70% într-un an.",
   "Pragul este <10 g/L, nu >30 g/L; recurența nu este rară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pragul proteic <10 g/L versus >30 g/L și recurența 70% versus 5% sunt capcane de ordin de mărime."
  },
  "textbookExpressions": [
   "sub 10 g/L",
   "norfloxacin 400 mg"
  ]
 },
 {
  "id": "hepatologie-adv-035",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Encefalopatia portosistemică, diagnostice adjuvante:",
  "options": [
   "EEG arată scăderea frecvenței undelor α (8–13 Hz) la 1,5–3 Hz, modificări care preced coma",
   "Potențialele evocate vizuale pot detecta encefalopatia subclinică",
   "Factorii precipitanți includ infecția, hemoragia, diureticele, TIPS și șunturile chirurgicale",
   "Lactitolul 30 g zilnic este comparabil ca eficacitate cu lactuloza",
   "EEG cu unde de 8–13 Hz care se accelerează la 20 Hz este markerul de comă hepatică, iar proteinele se restricționează peste 2 săptămâni"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "EEG arată scăderea frecvenței undelor α (8–13 Hz) la 1,5–3 Hz, modificări care preced coma — Corect: Scăderea de la 8-13 Hz la 1,5-3 Hz precede coma.\n\nPotențialele evocate vizuale pot detecta encefalopatia subclinică — Corect: PEV detectează forma subclinică.\n\nFactorii precipitanți includ infecția, hemoragia, diureticele, TIPS și șunturile chirurgicale — Corect: Cadranul 34.22 include infecție, hemoragie, diuretice, TIPS.\n\nLactitolul 30 g zilnic este comparabil ca eficacitate cu lactuloza — Corect: Lactitol 30 g zilnic este comparabil cu lactuloza.\n\nEEG cu unde de 8–13 Hz care se accelerează la 20 Hz este markerul de comă hepatică, iar proteinele se restricționează peste 2 săptămâni — Incorect: Coma se asociază încetinirii, nu accelerării; proteinele nu se restricționează peste 48 de ore.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1297, 1298, Ciroza hepatică — Encefalopatia: EEG și precipitanți (pagini PDF: 324, 325).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1297,
    1298
   ],
   "pdfPages": [
    324,
    325
   ],
   "section": "Ciroza hepatică — Encefalopatia: EEG și precipitanți"
  },
  "learningObjective": "Reținerea încetinirii EEG la 1,5–3 Hz înaintea comei și a listei de precipitanți (inclusiv TIPS), plus echivalența lactitol 30 g.",
  "optionRationales": [
   "Scăderea de la 8-13 Hz la 1,5-3 Hz precede coma.",
   "PEV detectează forma subclinică.",
   "Cadranul 34.22 include infecție, hemoragie, diuretice, TIPS.",
   "Lactitol 30 g zilnic este comparabil cu lactuloza.",
   "Coma se asociază încetinirii, nu accelerării; proteinele nu se restricționează peste 48 de ore."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează direcția modificării EEG (încetinire versus accelerare) și durata restricției proteice."
  },
  "textbookExpressions": [
   "1,5-3 Hz",
   "Lactilolul"
  ]
 },
 {
  "id": "hepatologie-adv-036",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Sindromul hepatorenal și sindromul hepatopulmonar:",
  "options": [
   "Mecanismul HRS este vasodilatație periferică extremă, cu scăderea volumului efectiv și hipotensiune",
   "Transplantul hepatic este cea mai bună opțiune în HRS; fără el mortalitatea este mare (cifra de ~50% este invocată în context)",
   "Sindromul hepatopulmonar apare la 1–2% dintre pacienții cu ciroză și HTP și poate răspunde la epoprostenol i.v.",
   "Dispozitivele extracorporeale nu sunt disponibile de rutină în ACLF, context înrudit",
   "HRS se tratează de primă intenție prin creșterea dozei de spironolactonă, vasodilatația fiind benefic"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Mecanismul HRS este vasodilatație periferică extremă, cu scăderea volumului efectiv și hipotensiune — Corect: Vasodilatația periferică extremă cu hipotensiune este mecanismul.\n\nTransplantul hepatic este cea mai bună opțiune în HRS; fără el mortalitatea este mare (cifra de ~50% este invocată în context) — Corect: Transplantul este cea mai bună opțiune.\n\nSindromul hepatopulmonar apare la 1–2% dintre pacienții cu ciroză și HTP și poate răspunde la epoprostenol i.v. — Corect: 1-2% dintre ciroticii cu HTP; epoprostenol i.v. este menționat.\n\nDispozitivele extracorporeale nu sunt disponibile de rutină în ACLF, context înrudit — Corect: Niciun dispozitiv extracorporeal de rutină (pasaj ACLF înrudit).\n\nHRS se tratează de primă intenție prin creșterea dozei de spironolactonă, vasodilatația fiind benefic — Incorect: Intensificarea diureticelor precipită HRS/encefalopatia; nu este tratamentul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1298, 1291, Ciroza hepatică — Sindromul hepatorenal și hepatopulmonar (pagini PDF: 325, 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1298,
    1291
   ],
   "pdfPages": [
    325,
    318
   ],
   "section": "Ciroza hepatică — Sindromul hepatorenal și hepatopulmonar"
  },
  "learningObjective": "Contrastul HRS (vasodilatație, transplant) cu sindromul hepatopulmonar (prevalență 1–2%, epoprostenol).",
  "optionRationales": [
   "Vasodilatația periferică extremă cu hipotensiune este mecanismul.",
   "Transplantul este cea mai bună opțiune.",
   "1-2% dintre ciroticii cu HTP; epoprostenol i.v. este menționat.",
   "Niciun dispozitiv extracorporeal de rutină (pasaj ACLF înrudit).",
   "Intensificarea diureticelor precipită HRS/encefalopatia; nu este tratamentul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul propune intensificarea diureticelor, un precipitant, în locul transplantului."
  },
  "textbookExpressions": [
   "1-2%",
   "epoprostenol"
  ]
 },
 {
  "id": "hepatologie-adv-037",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Colangita biliară primitivă — epidemiologie și autoimunitate:",
  "options": [
   "Femeile de 40–50 de ani reprezintă 90% dintre pacienți; prevalența ~7,5/100.000, cu creștere 1–6% la rudele de gradul întâi",
   "AMA sunt prezenți la aproape toți; antigenul M2 este specific, cu cinci antigene M2",
   "Anti-gp210 sunt prezenți la 50% și se corelează cu progresia spre insuficiență hepatică",
   "Titrul AMA nu se leagă de tabloul clinic sau histologic",
   "PBC predomină la bărbații tineri, AMA fiind negativi la peste 90%, diagnosticul bazându-se pe pANCA"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Femeile de 40–50 de ani reprezintă 90% dintre pacienți; prevalența ~7,5/100.000, cu creștere 1–6% la rudele de gradul întâi — Corect: 90% femei 40-50 ani; 7,5/100.000; 1-6% la rude.\n\nAMA sunt prezenți la aproape toți; antigenul M2 este specific, cu cinci antigene M2 — Corect: AMA la aproape toți, M2 specific, cinci antigene M2.\n\nAnti-gp210 sunt prezenți la 50% și se corelează cu progresia spre insuficiență hepatică — Corect: Anti-gp210 la 50%, corelat cu progresia.\n\nTitrul AMA nu se leagă de tabloul clinic sau histologic — Corect: Titrul AMA nu se leagă de clinică/histologie.\n\nPBC predomină la bărbații tineri, AMA fiind negativi la peste 90%, diagnosticul bazându-se pe pANCA — Incorect: Predominanța este feminină; pANCA este al PSC, nu al PBC.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1298, 1299, Ciroza hepatică — PBC: epidemiologie și serologie (pagini PDF: 325, 326).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1298,
    1299
   ],
   "pdfPages": [
    325,
    326
   ],
   "section": "Ciroza hepatică — PBC: epidemiologie și serologie"
  },
  "learningObjective": "Fixarea predilecției feminine (90%, 40–50 ani), a specificității M2 și a valorii prognostice a anti-gp210 (50%).",
  "optionRationales": [
   "90% femei 40-50 ani; 7,5/100.000; 1-6% la rude.",
   "AMA la aproape toți, M2 specific, cinci antigene M2.",
   "Anti-gp210 la 50%, corelat cu progresia.",
   "Titrul AMA nu se leagă de clinică/histologie.",
   "Predominanța este feminină; pANCA este al PSC, nu al PBC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sexul și serologia (AMA versus pANCA) între PBC și PSC, două colangiopatii consecutive în text."
  },
  "textbookExpressions": [
   "90% dintre",
   "anti-gp210"
  ]
 },
 {
  "id": "hepatologie-adv-038",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Investigațiile și tratamentul în PBC:",
  "options": [
   "AMA ELISA în titru >1:160 la peste 95% dintre pacienți; M2 este 98% specific",
   "Fosfataza alcalină crescută este adesea singura anomalie biochimică; colesterolul și IgM pot fi mari",
   "Biopsia arată infiltrat portal limfo-plasmocitar; granuloame în ~40%; modificările precoce sunt în zona 1",
   "Acidul ursodeoxicolic 10–15 mg/kg îmbunătățește bilirubina și aminotransferazele",
   "PBC se asociază cu un risc cardiovascular foarte crescut din cauza hiperlipidemiei, iar UDCA este inactiv pe bilirubină"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "AMA ELISA în titru >1:160 la peste 95% dintre pacienți; M2 este 98% specific — Corect: ELISA >1:160 la >95%; M2 98% specific.\n\nFosfataza alcalină crescută este adesea singura anomalie biochimică; colesterolul și IgM pot fi mari — Corect: FA crescută adesea izolat; colesterol și IgM mari.\n\nBiopsia arată infiltrat portal limfo-plasmocitar; granuloame în ~40%; modificările precoce sunt în zona 1 — Corect: Infiltrat limfo-plasmocitar, granuloame ~40%, zona 1.\n\nAcidul ursodeoxicolic 10–15 mg/kg îmbunătățește bilirubina și aminotransferazele — Corect: UDCA 10-15 mg/kg ameliorează bilirubina și aminotransferazele.\n\nPBC se asociază cu un risc cardiovascular foarte crescut din cauza hiperlipidemiei, iar UDCA este inactiv pe bilirubină — Incorect: Textul precizează că, în ciuda lipidelor crescute, PBC nu se asociază cu risc CV crescut.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1299, Ciroza hepatică — PBC: laborator, histologie și UDCA (pagini PDF: 326).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1299
   ],
   "pdfPages": [
    326
   ],
   "section": "Ciroza hepatică — PBC: laborator, histologie și UDCA"
  },
  "learningObjective": "Reținerea titrului AMA >1:160, a specificității M2 98%, a granuloamelor 40% în zona 1 și a dozei UDCA 10–15 mg/kg.",
  "optionRationales": [
   "ELISA >1:160 la >95%; M2 98% specific.",
   "FA crescută adesea izolat; colesterol și IgM mari.",
   "Infiltrat limfo-plasmocitar, granuloame ~40%, zona 1.",
   "UDCA 10-15 mg/kg ameliorează bilirubina și aminotransferazele.",
   "Textul precizează că, în ciuda lipidelor crescute, PBC nu se asociază cu risc CV crescut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Capcana este disocierea hiperlipidemie–risc CV, contraintuitivă, plus doza UDCA ușor de înjumătățit."
  },
  "textbookExpressions": [
   "98% specific",
   "10-15 mg/kg"
  ]
 },
 {
  "id": "hepatologie-adv-039",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Prognosticul PBC și momentul transplantului:",
  "options": [
   "Pacienții care se confruntă doar cu prurit pot supraviețui peste 20 de ani",
   "Cei cu icter evoluează prin insuficiență hepatică sau sângerare variceală în termen de 5 ani",
   "Transplantul se consideră când bilirubina serică este persistent peste 100 µmol/L",
   "Keratoconjunctivita sicca apare în 70% din cazuri",
   "Pruritul izolat impune transplant în primele 6 luni, supraviețuirea fără grefă fiind sub 2 ani"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Pacienții care se confruntă doar cu prurit pot supraviețui peste 20 de ani — Corect: Doar prurit: >20 de ani.\n\nCei cu icter evoluează prin insuficiență hepatică sau sângerare variceală în termen de 5 ani — Corect: Icter: insuficiență sau varice în 5 ani.\n\nTransplantul se consideră când bilirubina serică este persistent peste 100 µmol/L — Corect: Bilirubină persistentă >100 µmol/L.\n\nKeratoconjunctivita sicca apare în 70% din cazuri — Corect: Sicca în 70%.\n\nPruritul izolat impune transplant în primele 6 luni, supraviețuirea fără grefă fiind sub 2 ani — Incorect: Pruritul izolat are prognostic lung, nu indicație urgentă de transplant.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1299, Ciroza hepatică — PBC: evoluție naturală și pragul bilirubinei (pagini PDF: 326).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1299
   ],
   "pdfPages": [
    326
   ],
   "section": "Ciroza hepatică — PBC: evoluție naturală și pragul bilirubinei"
  },
  "learningObjective": "Contrastul prurit izolat (>20 ani) versus icter (decompensare în 5 ani) și pragul de bilirubină 100 µmol/L pentru transplant.",
  "optionRationales": [
   "Doar prurit: >20 de ani.",
   "Icter: insuficiență sau varice în 5 ani.",
   "Bilirubină persistentă >100 µmol/L.",
   "Sicca în 70%.",
   "Pruritul izolat are prognostic lung, nu indicație urgentă de transplant."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele două orizonturi (20 de ani versus 5 ani) sunt ușor de inversat, iar pragul 100 µmol/L este comun PBC și indicației de transplant."
  },
  "textbookExpressions": [
   "mai mult de 20 de ani",
   "peste 100"
  ]
 },
 {
  "id": "hepatologie-adv-040",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Colangita sclerozantă primitivă:",
  "options": [
   "La 75% se asociază cu o BII, de obicei colită ulcerativă",
   "70% dintre pacienți sunt bărbați, vârsta medie de debut ~40 de ani",
   "pANCA este prezent în 60% din cazuri; susceptibilitatea se asociază haplotipului HLA-A1-B8-DR3",
   "MRCP/colangiograma arată neregularități de calibru intra- și extrahepatice",
   "PSC predomină la femei de 40–50 de ani, cu AMA M2 pozitiv, identic PBC"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "La 75% se asociază cu o BII, de obicei colită ulcerativă — Corect: 75% au BII, de obicei CU.\n\n70% dintre pacienți sunt bărbați, vârsta medie de debut ~40 de ani — Corect: 70% bărbați, debut ~40 de ani.\n\npANCA este prezent în 60% din cazuri; susceptibilitatea se asociază haplotipului HLA-A1-B8-DR3 — Corect: pANCA 60%; HLA-A1-B8-DR3.\n\nMRCP/colangiograma arată neregularități de calibru intra- și extrahepatice — Corect: Neregularități de calibru intra- și extrahepatice.\n\nPSC predomină la femei de 40–50 de ani, cu AMA M2 pozitiv, identic PBC — Incorect: Descrierea distractorului este a PBC, nu a PSC.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1299, Ciroza hepatică — PSC: asocierea cu BII, sex și pANCA (pagini PDF: 326).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1299
   ],
   "pdfPages": [
    326
   ],
   "section": "Ciroza hepatică — PSC: asocierea cu BII, sex și pANCA"
  },
  "learningObjective": "Fixarea triadei 75% BII / 70% bărbați / 60% pANCA și deosebirea de PBC (femei, AMA).",
  "optionRationales": [
   "75% au BII, de obicei CU.",
   "70% bărbați, debut ~40 de ani.",
   "pANCA 60%; HLA-A1-B8-DR3.",
   "Neregularități de calibru intra- și extrahepatice.",
   "Descrierea distractorului este a PBC, nu a PSC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează sexul și autoanticorpul (AMA versus pANCA) între PBC și PSC."
  },
  "textbookExpressions": [
   "75% dintre pacienţi",
   "HLA-A1-B8-DR3"
  ]
 },
 {
  "id": "hepatologie-adv-041",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Evoluția și tratamentul PSC:",
  "options": [
   "Este lent progresivă spre ciroză; colangiocarcinomul apare în până la 15% din cazuri",
   "UDCA în doze mari (30 mg/kg) nu are dovezi de beneficiu",
   "Stricturile dominante pot fi tratate endoscopic (dilatare cu balon și stent temporar)",
   "PSC secundară se vede în HIV cu Cryptosporidium și după injurii biliare",
   "UDCA 30 mg/kg reduce mortalitatea și înlocuiește transplantul ca tratament curativ"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este lent progresivă spre ciroză; colangiocarcinomul apare în până la 15% din cazuri — Corect: Lent progresivă; colangiocarcinom până la 15%.\n\nUDCA în doze mari (30 mg/kg) nu are dovezi de beneficiu — Corect: Dozele mari 30 mg/kg fără beneficiu demonstrat.\n\nStricturile dominante pot fi tratate endoscopic (dilatare cu balon și stent temporar) — Corect: Dilatare cu balon și stent temporar.\n\nPSC secundară se vede în HIV cu Cryptosporidium și după injurii biliare — Corect: PSC secundară: HIV/Cryptosporidium și trauma biliară.\n\nUDCA 30 mg/kg reduce mortalitatea și înlocuiește transplantul ca tratament curativ — Incorect: UDCA în doză mare nu are dovezi de beneficiu și nu înlocuiește transplantul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1300, Ciroza hepatică — PSC: colangiocarcinom și endoscopie (pagini PDF: 327).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1300
   ],
   "pdfPages": [
    327
   ],
   "section": "Ciroza hepatică — PSC: colangiocarcinom și endoscopie"
  },
  "learningObjective": "Reținerea riscului de colangiocarcinom (~15%), a lipsei de beneficiu a UDCA în doză mare și a opțiunii endoscopice pe stricturi.",
  "optionRationales": [
   "Lent progresivă; colangiocarcinom până la 15%.",
   "Dozele mari 30 mg/kg fără beneficiu demonstrat.",
   "Dilatare cu balon și stent temporar.",
   "PSC secundară: HIV/Cryptosporidium și trauma biliară.",
   "UDCA în doză mare nu are dovezi de beneficiu și nu înlocuiește transplantul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Doza 30 mg/kg, inactivă în PSC, este ușor de confudat cu UDCA 10–15 mg/kg utilă în PBC."
  },
  "textbookExpressions": [
   "30 mg/kg",
   "până la 15%"
  ]
 },
 {
  "id": "hepatologie-adv-042",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Hemocromatoza ereditară — genetică:",
  "options": [
   "Tipul 1 (HFE, mutația C282Y) este cel mai frecvent și se află pe cromozomul 6",
   "Tipurile 1, 2 și 3 se transmit autozomal recesiv; tipul 4 (ferroportină, SLC40A1) are exces de ferroportină",
   "85–90% dintre pacienți sunt homozigoți C282Y; H63D apare la ~25% din populație",
   "Prevalența homozigoților caucazieni este 1 din 400, cu heterozigoți ~1 din 10",
   "Tipul 1 se transmite autozomal dominant, C282Y fiind rară la caucazieni (<1%)"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Tipul 1 (HFE, mutația C282Y) este cel mai frecvent și se află pe cromozomul 6 — Corect: HFE tip 1, C282Y, cromozomul 6.\n\nTipurile 1, 2 și 3 se transmit autozomal recesiv; tipul 4 (ferroportină, SLC40A1) are exces de ferroportină — Corect: Tipurile 1-3 AR; tipul 4 ferroportină.\n\n85–90% dintre pacienți sunt homozigoți C282Y; H63D apare la ~25% din populație — Corect: 85-90% homozigoți C282Y; H63D la 25%.\n\nPrevalența homozigoților caucazieni este 1 din 400, cu heterozigoți ~1 din 10 — Corect: 1 din 400 homozigoți, ~1 din 10 heterozigoți.\n\nTipul 1 se transmite autozomal dominant, C282Y fiind rară la caucazieni (<1%) — Incorect: Tipul 1 este AR și frecvent la caucazieni, nu dominant și rar.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1300, Ciroza hepatică — Hemocromatoza: clasificarea genetică HFE (pagini PDF: 327).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1300
   ],
   "pdfPages": [
    327
   ],
   "section": "Ciroza hepatică — Hemocromatoza: clasificarea genetică HFE"
  },
  "learningObjective": "Maparea C282Y/cromozom 6, a transmiterii AR versus tipul 4 și a prevalenței 1/400 versus 1/10.",
  "optionRationales": [
   "HFE tip 1, C282Y, cromozomul 6.",
   "Tipurile 1-3 AR; tipul 4 ferroportină.",
   "85-90% homozigoți C282Y; H63D la 25%.",
   "1 din 400 homozigoți, ~1 din 10 heterozigoți.",
   "Tipul 1 este AR și frecvent la caucazieni, nu dominant și rar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează modelul de transmitere și prevalența (1/400 versus <1%), plus confuzia cu tipul 4 dominant-like."
  },
  "textbookExpressions": [
   "C282Y",
   "cromozomul 6"
  ]
 },
 {
  "id": "hepatologie-adv-043",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Diagnosticul hemocromatozei:",
  "options": [
   "Fierul seric este crescut (>30 µmol/L) în 90% din cazuri, cu saturație a transferinei >45%",
   "Feritina este de obicei >500 µg/L",
   "Concentrația hepatică de fier >180 µmol/g greutate uscată indică supraîncărcare",
   "RMN T2 detectează supraîncărcările relevante (>60 µmol/g ficat)",
   "Un fier seric scăzut cu saturație <15% confirmă diagnosticul de HE tip 1"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Fierul seric este crescut (>30 µmol/L) în 90% din cazuri, cu saturație a transferinei >45% — Corect: Fier >30 µmol/L în 90%, saturație >45%.\n\nFeritina este de obicei >500 µg/L — Corect: Feritina de obicei >500 µg/L.\n\nConcentrația hepatică de fier >180 µmol/g greutate uscată indică supraîncărcare — Corect: >180 µmol/g greutate uscată.\n\nRMN T2 detectează supraîncărcările relevante (>60 µmol/g ficat) — Corect: RMN T2 pentru >60 µmol/g.\n\nUn fier seric scăzut cu saturație <15% confirmă diagnosticul de HE tip 1 — Incorect: Diagnosticul cere supraîncărcare, nu deficit de fier.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1301, Ciroza hepatică — Hemocromatoza: laborator, biopsie și RMN (pagini PDF: 328).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1301
   ],
   "pdfPages": [
    328
   ],
   "section": "Ciroza hepatică — Hemocromatoza: laborator, biopsie și RMN"
  },
  "learningObjective": "Aplicarea pragurilor fier >30, saturație >45%, feritină >500, fier hepatic >180 și pragul RMN >60 µmol/g.",
  "optionRationales": [
   "Fier >30 µmol/L în 90%, saturație >45%.",
   "Feritina de obicei >500 µg/L.",
   ">180 µmol/g greutate uscată.",
   "RMN T2 pentru >60 µmol/g.",
   "Diagnosticul cere supraîncărcare, nu deficit de fier."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pragurile 45%, 180 și 60 µmol/g sunt permutabile; distractorul descrie un profil de deficit, nu de supraîncărcare."
  },
  "textbookExpressions": [
   ">45%",
   ">180"
  ]
 },
 {
  "id": "hepatologie-adv-044",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la flebotomia din hemocromatoză:",
  "options": [
   "Se obține prin emisie de 500 ml de două ori pe săptămână până la 2 ani, adică ~160 de unități × 250 mg fier ≈ 40 g eliminate",
   "Se fac 50 ml o dată pe an, suficiente pentru a elimina 3–4 g, stocul normal",
   "Deferoxamina orală înlocuiește flebotomia la toți homozigoții C282Y",
   "Flebotomia este contraindicată, fierul hepatic scăzând spontan după 40 de ani",
   "Se vizează un stoc de 20–40 g de fier, identic persoanei sănătoase"
  ],
  "correct": [
   0
  ],
  "explanation": "Se obține prin emisie de 500 ml de două ori pe săptămână până la 2 ani, adică ~160 de unități × 250 mg fier ≈ 40 g eliminate — Corect: Textul descrie 500 ml de două ori pe săptămână până la 2 ani, 160 de unități a 250 mg = 40 g.\n\nSe fac 50 ml o dată pe an, suficiente pentru a elimina 3–4 g, stocul normal — Incorect: Stocul normal este 3-4 g, nu ținta de eliminare anuală.\n\nDeferoxamina orală înlocuiește flebotomia la toți homozigoții C282Y — Incorect: Flebotomia, nu chelarea orală de rutină, este metoda descrisă.\n\nFlebotomia este contraindicată, fierul hepatic scăzând spontan după 40 de ani — Incorect: Nu este contraindicată; este tratamentul.\n\nSe vizează un stoc de 20–40 g de fier, identic persoanei sănătoase — Incorect: 20-40 g este stocul bolnavului înainte de tratament, nu al sănătosului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1301, Ciroza hepatică — Hemocromatoza: tratamentul prin flebotomie (pagini PDF: 328).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1301
   ],
   "pdfPages": [
    328
   ],
   "section": "Ciroza hepatică — Hemocromatoza: tratamentul prin flebotomie"
  },
  "learningObjective": "Calculul schemei 500 ml ×2/săptămână × până la 2 ani (~40 g fier), contrastat cu stocul normal de 3–4 g.",
  "optionRationales": [
   "Textul descrie 500 ml de două ori pe săptămână până la 2 ani, 160 de unități a 250 mg = 40 g.",
   "Stocul normal este 3-4 g, nu ținta de eliminare anuală.",
   "Flebotomia, nu chelarea orală de rutină, este metoda descrisă.",
   "Nu este contraindicată; este tratamentul.",
   "20-40 g este stocul bolnavului înainte de tratament, nu al sănătosului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Aritmetica 160×250 mg=40 g versus stocul normal 3–4 g este capcana cantitativă a paginii."
  },
  "textbookExpressions": [
   "500 ml",
   "40 g fier"
  ]
 },
 {
  "id": "hepatologie-adv-045",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Screeningul familiei în hemocromatoză:",
  "options": [
   "Toate rudele de gradul întâi trebuie examinate pentru a detecta boala precoce, asimptomatică",
   "Analiza mutației HFE se face împreună cu saturația transferinei",
   "Aproximativ 30% dintre persoanele cu ciroză prin HE vor dezvolta carcinom hepatocelular",
   "Screeningul se limitează la simptomaticii de peste 70 de ani, genetica fiind inutilă",
   "HCC nu apare în ciroza prin hemocromatoză, spre deosebire de VHC"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Toate rudele de gradul întâi trebuie examinate pentru a detecta boala precoce, asimptomatică — Corect: Toate rudele de gradul întâi trebuie examinate în stadiul asimptomatic.\n\nAnaliza mutației HFE se face împreună cu saturația transferinei — Corect: Mutația HFE se asociază măsurării saturației.\n\nAproximativ 30% dintre persoanele cu ciroză prin HE vor dezvolta carcinom hepatocelular — Corect: ~30% dintre ciroticii cu HE dezvoltă HCC.\n\nScreeningul se limitează la simptomaticii de peste 70 de ani, genetica fiind inutilă — Incorect: Screeningul vizează și asimptomaticii, nu doar vârstnicii simptomatici.\n\nHCC nu apare în ciroza prin hemocromatoză, spre deosebire de VHC — Incorect: HCC este o complicație citată a cirozei prin HE.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1302, 1301, Ciroza hepatică — Hemocromatoza: screening familial și HCC (pagini PDF: 329, 328).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1302,
    1301
   ],
   "pdfPages": [
    329,
    328
   ],
   "section": "Ciroza hepatică — Hemocromatoza: screening familial și HCC"
  },
  "learningObjective": "Indicarea screeningului rudelor de gradul I cu HFE plus saturație și a riscului de HCC (~30%) după ciroză.",
  "optionRationales": [
   "Toate rudele de gradul întâi trebuie examinate în stadiul asimptomatic.",
   "Mutația HFE se asociază măsurării saturației.",
   "~30% dintre ciroticii cu HE dezvoltă HCC.",
   "Screeningul vizează și asimptomaticii, nu doar vârstnicii simptomatici.",
   "HCC este o complicație citată a cirozei prin HE."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Procentul 30% HCC este ușor de negat, iar distractorul amână screeningul până la vârste tardive."
  },
  "textbookExpressions": [
   "gradul întâi",
   "mutaţiei HFE"
  ]
 },
 {
  "id": "hepatologie-adv-046",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Boala Wilson, dincolo de cromozomul 13 și de pragul hepatic de cupru:",
  "options": [
   "Mutația cea mai frecventă la caucazieni este H1069Q, prezentă la ~50%; este rară în India și Asia",
   "Cupruria este de obicei 100–1000 µg/24 h (normal <40 µg)",
   "Trientina 1,2–1,8 g/zi și acetatul de zinc 150 mg/zi sunt alternative la penicilamină",
   "Penicilamina 1–1,5 g/zi este pe viață; reacții adverse grave în ~10%",
   "Penicilamina se oprește după 2–3 luni, cupruria normală făcând chelarea inutilă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Mutația cea mai frecventă la caucazieni este H1069Q, prezentă la ~50%; este rară în India și Asia — Corect: H1069Q la ~50% dintre caucazieni, rară în India/Asia.\n\nCupruria este de obicei 100–1000 µg/24 h (normal <40 µg) — Corect: Cuprurie 100-1000 µg/24 h, normal <40 µg.\n\nTrientina 1,2–1,8 g/zi și acetatul de zinc 150 mg/zi sunt alternative la penicilamină — Corect: Trientina 1,2-1,8 g/zi și zinc 150 mg/zi.\n\nPenicilamina 1–1,5 g/zi este pe viață; reacții adverse grave în ~10% — Corect: Penicilamină 1-1,5 g/zi pe viață, RA grave ~10%.\n\nPenicilamina se oprește după 2–3 luni, cupruria normală făcând chelarea inutilă — Incorect: Doza se reduce după 2-3 ani, tratamentul nu se oprește.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1302, Ciroza hepatică — Boala Wilson: mutația H1069Q, cuprurie și alternative (pagini PDF: 329).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1302
   ],
   "pdfPages": [
    329
   ],
   "section": "Ciroza hepatică — Boala Wilson: mutația H1069Q, cuprurie și alternative"
  },
  "learningObjective": "Completarea itemului genetic existent cu H1069Q (~50% caucazieni), intervalul de cuprurie și alternativele trientină/zinc.",
  "optionRationales": [
   "H1069Q la ~50% dintre caucazieni, rară în India/Asia.",
   "Cuprurie 100-1000 µg/24 h, normal <40 µg.",
   "Trientina 1,2-1,8 g/zi și zinc 150 mg/zi.",
   "Penicilamină 1-1,5 g/zi pe viață, RA grave ~10%.",
   "Doza se reduce după 2-3 ani, tratamentul nu se oprește."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Capcana clasică rămâne oprirea versus reducerea penicilaminei; se adaugă mutația H1069Q și intervalul de cuprurie."
  },
  "textbookExpressions": [
   "H1069Q",
   "1,2-1,8 g/zi"
  ]
 },
 {
  "id": "hepatologie-adv-047",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Deficitul de α1-antitripsină cu afectare hepatică:",
  "options": [
   "Gena este pe cromozomul 14; homozigotul Z este PiZZ, heterozigoții PiMZ și PiSZ",
   "α1-AT serică scade la 10% din normal în PiZZ și la 60% din normal în varianta S",
   "Globulele sunt PAS-negative și sensibile la diastază, ca glicogenul",
   "PiZZ are α1-AT serică crescută de zece ori",
   "Ciroza apare la toți homozigoții în primul an de viață, transplantul fiind inutil"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Gena este pe cromozomul 14; homozigotul Z este PiZZ, heterozigoții PiMZ și PiSZ — Corect: Gena este pe cromozomul 14; PiZZ, PiMZ și PiSZ sunt descrise.\n\nα1-AT serică scade la 10% din normal în PiZZ și la 60% din normal în varianta S — Corect: Scădere la 10% din normal în PiZZ și 60% în varianta S.\n\nGlobulele sunt PAS-negative și sensibile la diastază, ca glicogenul — Incorect: Textul descrie globule rezistente la diastază, PAS-pozitive, nu invers.\n\nPiZZ are α1-AT serică crescută de zece ori — Incorect: Nivelul este scăzut, nu crescut.\n\nCiroza apare la toți homozigoții în primul an de viață, transplantul fiind inutil — Incorect: Doar 10-15% dintre adulți dezvoltă ciroză, de obicei după 50 de ani; transplantul se evaluează la decompensare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1302, 1303, Ciroza hepatică — Deficitul de α1-antitripsină: genetică și histologie (pagini PDF: 329, 330).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1302,
    1303
   ],
   "pdfPages": [
    329,
    330
   ],
   "section": "Ciroza hepatică — Deficitul de α1-antitripsină: genetică și histologie"
  },
  "learningObjective": "Corelarea locusului (cromozom 14, PiZZ) cu nivelurile serice 10%/60% și cu globulele PAS-pozitive rezistente la diastază.",
  "optionRationales": [
   "Gena este pe cromozomul 14; PiZZ, PiMZ și PiSZ sunt descrise.",
   "Scădere la 10% din normal în PiZZ și 60% în varianta S.",
   "Textul descrie globule rezistente la diastază, PAS-pozitive, nu invers.",
   "Nivelul este scăzut, nu crescut.",
   "Doar 10-15% dintre adulți dezvoltă ciroză, de obicei după 50 de ani; transplantul se evaluează la decompensare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează direcția α1-AT serice (scăzut versus crescut) și negativitatea PAS, două detalii histochimice din aceeași frază."
  },
  "textbookExpressions": [
   "cromozomul 14",
   "PiZZ"
  ]
 },
 {
  "id": "hepatologie-adv-048",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre evoluția adultului cu PiZZ:",
  "options": [
   "Aproximativ 10–15% dezvoltă ciroză, de obicei peste 50 de ani",
   "Aproximativ 75% au probleme respiratorii, iar ~5% mor prin boală hepatică",
   "Augmentarea cu α1-AT intravenos vindecă ciroza constituită în peste 90% din cazuri",
   "Ciroza este universală la homozigoți încă din copilărie, fără afectare pulmonară",
   "Fumatul este încurajat, transplantul fiind contraindicat în PiZZ"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Aproximativ 10–15% dezvoltă ciroză, de obicei peste 50 de ani — Corect: 10-15% ciroză, de obicei peste 50 de ani.\n\nAproximativ 75% au probleme respiratorii, iar ~5% mor prin boală hepatică — Corect: 75% probleme respiratorii; ~5% mor prin boală hepatică.\n\nAugmentarea cu α1-AT intravenos vindecă ciroza constituită în peste 90% din cazuri — Incorect: Textul nu descrie vindecarea cirozei prin augmentare i.v.; nu există tratament al cauzei.\n\nCiroza este universală la homozigoți încă din copilărie, fără afectare pulmonară — Incorect: Ciroza nu este universală; afectarea pulmonară predomină.\n\nFumatul este încurajat, transplantul fiind contraindicat în PiZZ — Incorect: Fumatul trebuie oprit, iar decompensațiile se evaluează pentru transplant.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1302, 1303, Ciroza hepatică — Deficitul de α1-antitripsină: prognostic adult (pagini PDF: 329, 330).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1302,
    1303
   ],
   "pdfPages": [
    329,
    330
   ],
   "section": "Ciroza hepatică — Deficitul de α1-antitripsină: prognostic adult"
  },
  "learningObjective": "Reținerea cotelor 10–15% ciroză, 75% afectare respiratorie și 5% deces hepatic, plus absența unui tratament etiologic.",
  "optionRationales": [
   "10-15% ciroză, de obicei peste 50 de ani.",
   "75% probleme respiratorii; ~5% mor prin boală hepatică.",
   "Textul nu descrie vindecarea cirozei prin augmentare i.v.; nu există tratament al cauzei.",
   "Ciroza nu este universală; afectarea pulmonară predomină.",
   "Fumatul trebuie oprit, iar decompensațiile se evaluează pentru transplant."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cotele 10–15%, 75% și 5% sunt ușor de permutat, iar distractorul transformă o boală fără tratament etiologic într-o vindecare."
  },
  "textbookExpressions": [
   "10-15%",
   "75% vor avea"
  ]
 },
 {
  "id": "hepatologie-adv-049",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Boala hepatică alcoolică — mecanisme:",
  "options": [
   "Etanolul crește raportul NADH/NAD, sporind sinteza de acizi grași și scăzând oxidarea lor, cu acumulare de gliceride",
   "Doar 10–20% dintre persoanele cu consum excesiv dezvoltă ciroză, recunoscându-se o predispoziție genetică",
   "Infiltrarea cu neutrofile, atrasă de IL-8, este o caracteristică a hepatitei alcoolice",
   "MEOS indus de alcool poate potența toxicitatea metaboliților (ex. paracetamol)",
   "Ciroza alcoolică apare la peste 90% dintre băutori, fără componentă genetică"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Etanolul crește raportul NADH/NAD, sporind sinteza de acizi grași și scăzând oxidarea lor, cu acumulare de gliceride — Corect: Creșterea NADH/NAD duce la sinteză crescută și oxidare scăzută a acizilor grași.\n\nDoar 10–20% dintre persoanele cu consum excesiv dezvoltă ciroză, recunoscându-se o predispoziție genetică — Corect: Doar 10-20% dezvoltă ciroză, cu predispoziție genetică.\n\nInfiltrarea cu neutrofile, atrasă de IL-8, este o caracteristică a hepatitei alcoolice — Corect: IL-8 atrage neutrofilele, caracteristice hepatitei alcoolice.\n\nMEOS indus de alcool poate potența toxicitatea metaboliților (ex. paracetamol) — Corect: MEOS induce metabolism microsomal și potențează paracetamolul.\n\nCiroza alcoolică apare la peste 90% dintre băutori, fără componentă genetică — Incorect: Cota reală este 10-20%, nu peste 90%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1303, Boala hepatică alcoolică — Redox, IL-8 și MEOS (pagini PDF: 330).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1303
   ],
   "pdfPages": [
    330
   ],
   "section": "Boala hepatică alcoolică — Redox, IL-8 și MEOS"
  },
  "learningObjective": "Corelarea redox NADH/NAD, a cotei 10–20% care progresează și a infiltratului neutrofilic IL-8, plus interacțiunea MEOS–paracetamol.",
  "optionRationales": [
   "Creșterea NADH/NAD duce la sinteză crescută și oxidare scăzută a acizilor grași.",
   "Doar 10-20% dezvoltă ciroză, cu predispoziție genetică.",
   "IL-8 atrage neutrofilele, caracteristice hepatitei alcoolice.",
   "MEOS induce metabolism microsomal și potențează paracetamolul.",
   "Cota reală este 10-20%, nu peste 90%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cota 10–20% versus „aproape toți băutorii” este capcana epidemiologică a capitolului."
  },
  "textbookExpressions": [
   "10-20%",
   "IL-8"
  ]
 },
 {
  "id": "hepatologie-adv-050",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Precizați enunțul corect privind morfologia ficatului gras alcoolic:",
  "options": [
   "Metabolizarea alcoolului produce grăsimi în ficat, în principal în zona 3",
   "Steatoza predomină în zona 1, identic PBC precoce",
   "Corpii Mallory sunt absenți în hepatita alcoolică, fiind specifici PBC",
   "Neutrofilele lipsesc, infiltratul fiind strict limfocitar de interfață",
   "Steatoza alcoolică nu se vede histologie, diagnosticul fiind doar serologic"
  ],
  "correct": [
   0
  ],
  "explanation": "Metabolizarea alcoolului produce grăsimi în ficat, în principal în zona 3 — Corect: Textul plasează încărcarea grasă în principal în zona 3.\n\nSteatoza predomină în zona 1, identic PBC precoce — Incorect: Zona 1 este a modificărilor precoce din PBC, nu a steatozei alcoolice.\n\nCorpii Mallory sunt absenți în hepatita alcoolică, fiind specifici PBC — Incorect: Hepatita alcoolică asociază infiltrat polimorfonuclear și necroză, tot în zona 3; corpii hialini alcoolici sunt din spectrul bolii, nu absenți.\n\nNeutrofilele lipsesc, infiltratul fiind strict limfocitar de interfață — Incorect: Infiltratul caracteristic este cu neutrofile, nu strict limfocitar.\n\nSteatoza alcoolică nu se vede histologie, diagnosticul fiind doar serologic — Incorect: Steatoza este demonstrată histologic (figura 34.29).\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1303, Boala hepatică alcoolică — Steatoza de zonă 3 (pagini PDF: 330).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1303
   ],
   "pdfPages": [
    330
   ],
   "section": "Boala hepatică alcoolică — Steatoza de zonă 3"
  },
  "learningObjective": "Localizarea steatozei alcoolice în zona 3, distinctă de leziunile de zonă 1 din PBC.",
  "optionRationales": [
   "Textul plasează încărcarea grasă în principal în zona 3.",
   "Zona 1 este a modificărilor precoce din PBC, nu a steatozei alcoolice.",
   "Hepatita alcoolică asociază infiltrat polimorfonuclear și necroză, tot în zona 3; corpii hialini alcoolici sunt din spectrul bolii, nu absenți.",
   "Infiltratul caracteristic este cu neutrofile, nu strict limfocitar.",
   "Steatoza este demonstrată histologic (figura 34.29)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confuzia zonă 1 (PBC) versus zonă 3 (alcool) este firul roșu al ultimelor pagini de capitol."
  },
  "textbookExpressions": [
   "zona 3",
   "Ficatul gras"
  ]
 },
 {
  "id": "hepatologie-adv-051",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Un bărbat de 54 de ani, consumator cronic de alcool, are transaminaze moderate, leucocitoză și durere în hipocondrul drept. Hepatita alcoolică se caracterizează prin:",
  "options": [
   "Infiltrat cu leucocite polimorfonucleare și necroză hepatocitară, în principal în zona 3",
   "Predispoziție genetică, de vreme ce numai 10–20% dintre marii băutori fac ciroză",
   "TNF-α din celulele Kupffer eliberează specii reactive de oxigen, cu leziuni și fibroză",
   "Infiltrat portal strict plasmocitar de zonă 1, cu AMA M2 pozitiv, ca în PBC",
   "Absența oricărei necroze, leziunea fiind doar macroveziculară de zonă 1"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Infiltrat cu leucocite polimorfonucleare și necroză hepatocitară, în principal în zona 3 — Corect: Textul descrie infiltrat polimorfonuclear și necroză în principal în zona 3.\n\nPredispoziție genetică, de vreme ce numai 10–20% dintre marii băutori fac ciroză — Corect: Cota 10-20% și predispoziția genetică sunt reafirmate.\n\nTNF-α din celulele Kupffer eliberează specii reactive de oxigen, cu leziuni și fibroză — Corect: TNF-α din Kupffer, cu ROS, duce la leziuni și fibroză.\n\nInfiltrat portal strict plasmocitar de zonă 1, cu AMA M2 pozitiv, ca în PBC — Incorect: Descrierea este a PBC (zonă 1, plasmocite, AMA), nu a hepatitei alcoolice.\n\nAbsența oricărei necroze, leziunea fiind doar macroveziculară de zonă 1 — Incorect: Necroza centrolobulară/zona 3 este tipică, nu absentă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1303, Boala hepatică alcoolică — Hepatita alcoolică (pagini PDF: 330).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1303
   ],
   "pdfPages": [
    330
   ],
   "section": "Boala hepatică alcoolică — Hepatita alcoolică"
  },
  "learningObjective": "Recunoașterea infiltratului neutrofilic de zonă 3 și a axei Kupffer–TNF-α, distincte de histologia PBC.",
  "optionRationales": [
   "Textul descrie infiltrat polimorfonuclear și necroză în principal în zona 3.",
   "Cota 10-20% și predispoziția genetică sunt reafirmate.",
   "TNF-α din Kupffer, cu ROS, duce la leziuni și fibroză.",
   "Descrierea este a PBC (zonă 1, plasmocite, AMA), nu a hepatitei alcoolice.",
   "Necroza centrolobulară/zona 3 este tipică, nu absentă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vigneta împinge spre PBC (durere, FA), dar histologia și IL-8/neutrofilele definesc hepatita alcoolică."
  },
  "textbookExpressions": [
   "infiltrat cu leucocite",
   "zona 3"
  ]
 },
 {
  "id": "hepatologie-adv-052",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Cauze neobișnuite de hepatită cronică și de afectare parenchimatoasă acută, alături de virusuri, includ:",
  "options": [
   "Medicamente (paracetamol în forma acută; metildopa, izoniazid, ketoconazol, nitrofurantoin în forma cronică)",
   "Toxice precum Amanita phalloides și tetraclorura de carbon",
   "Boala Wilson, atât ca hepatită acută cât și cronică/ereditară",
   "Insuficiența circulatorie și aflatoxina, printre cauzele de afectare acută",
   "Cauza unică de hepatită acută este VHC, celelalte agenți fiind eliminați din clasificare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Medicamente (paracetamol în forma acută; metildopa, izoniazid, ketoconazol, nitrofurantoin în forma cronică) — Corect: Paracetamolul figurează la cauzele acute, iar metildopa/izoniazid/ketoconazol/nitrofurantoin la cronice.\n\nToxice precum Amanita phalloides și tetraclorura de carbon — Corect: Amanita phalloides și tetraclorura de carbon sunt listate.\n\nBoala Wilson, atât ca hepatită acută cât și cronică/ereditară — Corect: Wilson apare și la hepatita acută, și la cauzele ereditare cronice.\n\nInsuficiența circulatorie și aflatoxina, printre cauzele de afectare acută — Corect: Insuficiența circulatorie și aflatoxina sunt în figura cauzelor acute.\n\nCauza unică de hepatită acută este VHC, celelalte agenți fiind eliminați din clasificare — Incorect: Figura și cadranul enumeră numeroși agenți, nu un singur virus.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Cauze acute și cronice non-virale (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Cauze acute și cronice non-virale"
  },
  "learningObjective": "Recunoașterea listei din Fig. 34.11 și Cadranul 34.6 (paracetamol, Amanita, Wilson, insuficiență circulatorie).",
  "optionRationales": [
   "Paracetamolul figurează la cauzele acute, iar metildopa/izoniazid/ketoconazol/nitrofurantoin la cronice.",
   "Amanita phalloides și tetraclorura de carbon sunt listate.",
   "Wilson apare și la hepatita acută, și la cauzele ereditare cronice.",
   "Insuficiența circulatorie și aflatoxina sunt în figura cauzelor acute.",
   "Figura și cadranul enumeră numeroși agenți, nu un singur virus."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul reduce un tabel etiologic bogat la un singur virus, ignorând toxicele și Wilson din aceeași figură."
  },
  "textbookExpressions": [
   "Amanita phalloides",
   "Paracetamol"
  ]
 },
 {
  "id": "hepatologie-adv-053",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Biochimia hepatică în hepatită versus obstrucția biliară extrahepatică:",
  "options": [
   "În hepatită, AST și ALT tind să crească precoce, cu o creștere numai ușoară a FA",
   "În obstrucțiile extrahepatice, FA este mult crescută, cu o creștere mai mică a aminotransferazelor",
   "Aceste descoperiri nu pot reprezenta singure baza diagnosticului într-un caz individual",
   "Într-o boală hepatică de durată, TP este de obicei prelungit, iar albumina serică este scăzută",
   "În hepatită, FA este maximal crescută, iar AST/ALT rămân normale"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "În hepatită, AST și ALT tind să crească precoce, cu o creștere numai ușoară a FA — Corect: Textul descrie creșterea precoce AST/ALT, cu FA numai ușor crescută, în hepatită.\n\nÎn obstrucțiile extrahepatice, FA este mult crescută, cu o creștere mai mică a aminotransferazelor — Corect: Obstrucția extrahepatică inversează acest raport.\n\nAceste descoperiri nu pot reprezenta singure baza diagnosticului într-un caz individual — Corect: Textul avertizează că patternul nu diagnostichează singur un caz individual.\n\nÎntr-o boală hepatică de durată, TP este de obicei prelungit, iar albumina serică este scăzută — Corect: TP prelungit și albumina scăzută caracterizează boala de durată.\n\nÎn hepatită, FA este maximal crescută, iar AST/ALT rămân normale — Incorect: Patternul „FA maximală, transaminaze normale” este al obstrucției, nu al hepatitei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Biochimie: aminotransferaze versus fosfatază alcalină (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Biochimie: aminotransferaze versus fosfatază alcalină"
  },
  "learningObjective": "Contrastul patternului AST/ALT versus FA și recunoașterea TP/albuminei ca markeri de durată.",
  "optionRationales": [
   "Textul descrie creșterea precoce AST/ALT, cu FA numai ușor crescută, în hepatită.",
   "Obstrucția extrahepatică inversează acest raport.",
   "Textul avertizează că patternul nu diagnostichează singur un caz individual.",
   "TP prelungit și albumina scăzută caracterizează boala de durată.",
   "Patternul „FA maximală, transaminaze normale” este al obstrucției, nu al hepatitei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Capcana este inversarea raportului transaminaze/FA între hepatită și obstacol extrahepatic."
  },
  "textbookExpressions": [
   "AST şi ALT serice",
   "obstrucţiile biliare extrahepatice"
  ]
 },
 {
  "id": "hepatologie-adv-054",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Testele hematologice în icter și hepatita acută:",
  "options": [
   "Leucocitele pot fi crescute, indicând infecție (de exemplu colangită)",
   "Leucopenia poate apărea în hepatitele virale",
   "Anomalii ale celulelor mononucleare exclud EBV, Monospot-ul neavând loc",
   "Statusul HIV nu trebuie stabilit în hepatita acută",
   "Leucocitoza neutrofilică definește hepatita virală, Monospot-ul fiind inutil"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Leucocitele pot fi crescute, indicând infecție (de exemplu colangită) — Corect: Leucocitoza poate indica infecție/colangită.\n\nLeucopenia poate apărea în hepatitele virale — Corect: Leucopenia este citată în hepatitele virale.\n\nAnomalii ale celulelor mononucleare exclud EBV, Monospot-ul neavând loc — Incorect: Celulele mononucleare anormale sugerează mononucleoza EBV și justifică Monospot.\n\nStatusul HIV nu trebuie stabilit în hepatita acută — Incorect: Textul cere să se stabilească și statusul HIV.\n\nLeucocitoza neutrofilică definește hepatita virală, Monospot-ul fiind inutil — Incorect: Hepatita virală asociază mai degrabă leucopenie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Hematologie: leucopenie versus leucocitoză (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Hematologie: leucopenie versus leucocitoză"
  },
  "learningObjective": "Deosebirea leucocitozei de infecție/colangită de leucopenia hepatitelor virale.",
  "optionRationales": [
   "Leucocitoza poate indica infecție/colangită.",
   "Leucopenia este citată în hepatitele virale.",
   "Celulele mononucleare anormale sugerează mononucleoza EBV și justifică Monospot.",
   "Textul cere să se stabilească și statusul HIV.",
   "Hepatita virală asociază mai degrabă leucopenie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează leucopenie versus leucocitoză și anulează Monospot-ul din același paragraf."
  },
  "textbookExpressions": [
   "Leucopenia",
   "test Monospot"
  ]
 },
 {
  "id": "hepatologie-adv-055",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Extinderea necrozei hepatice, între extremele descrise, include:",
  "options": [
   "Necroză pătată sau focală, cu grupuri mici și unice de hepatocite moarte",
   "Necroză multiacinară care cuprinde o mare parte din ficat (necroză hepatică masivă), ducând la insuficiență hepatică acută",
   "Necroză confluentă limitată cu colaps de reticulină și punți (bridging) între vene centrolobulare, între vene și spații porte și între spații porte",
   "Infiltratul portal și lobular este format în principal din limfocite",
   "Necroza este maximală în zona 1, punțile fiind absente în hepatita acută"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Necroză pătată sau focală, cu grupuri mici și unice de hepatocite moarte — Corect: Necroza pătată/focală este o extremă.\n\nNecroză multiacinară care cuprinde o mare parte din ficat (necroză hepatică masivă), ducând la insuficiență hepatică acută — Corect: Necroza hepatică masivă multiacinară este cealaltă extremă.\n\nNecroză confluentă limitată cu colaps de reticulină și punți (bridging) între vene centrolobulare, între vene și spații porte și între spații porte — Corect: Bridging-ul centrolobular-portal și portal-portal este descris între extreme.\n\nInfiltratul portal și lobular este format în principal din limfocite — Corect: Infiltratul este în principal limfocitar.\n\nNecroza este maximală în zona 1, punțile fiind absente în hepatita acută — Incorect: Necroza este de obicei maximală în zona 3, nu în zona 1.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Morfopatologie: bridging și extremele necrozei (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Morfopatologie: bridging și extremele necrozei"
  },
  "learningObjective": "Plasarea necrozei focale, a celei masive și a punților de reticulină pe același continuum, cu predilecție zonală 3.",
  "optionRationales": [
   "Necroza pătată/focală este o extremă.",
   "Necroza hepatică masivă multiacinară este cealaltă extremă.",
   "Bridging-ul centrolobular-portal și portal-portal este descris între extreme.",
   "Infiltratul este în principal limfocitar.",
   "Necroza este de obicei maximală în zona 3, nu în zona 1."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Zona 1 versus 3 și negarea punților sunt capcane pe un paragraf care tocmai descrie bridging-ul."
  },
  "textbookExpressions": [
   "necroză pătată sau focală",
   "bridging"
  ]
 },
 {
  "id": "hepatologie-adv-056",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Cauze neobișnuite de hepatită cronică, alături de cele din Cadranul 34.6, includ:",
  "options": [
   "Infecții precum sifilisul, tuberculoza și diverse infecții tropicale",
   "Boli infiltrative, inclusiv amiloidoză și limfom",
   "Ingestia de toxine nu figurează, fiind rezervată doar litiazei biliare",
   "Hepatita E nu apare la imunocompromiși, spre deosebire de VHA",
   "Cauza unică recunoscută rămâne deficitul de α1-antitripsină, restul fiind abandonate"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Infecții precum sifilisul, tuberculoza și diverse infecții tropicale — Corect: Sifilisul, tuberculoza și infecțiile tropicale sunt citate ca neobișnuite.\n\nBoli infiltrative, inclusiv amiloidoză și limfom — Corect: Amiloidoza și limfomul figurează la infiltrație.\n\nIngestia de toxine nu figurează, fiind rezervată doar litiazei biliare — Incorect: Ingestia de toxine este menționată printre cauzele neobișnuite.\n\nHepatita E nu apare la imunocompromiși, spre deosebire de VHA — Incorect: Cadranul 34.6 include hepatita E la imunocompromiși.\n\nCauza unică recunoscută rămâne deficitul de α1-antitripsină, restul fiind abandonate — Incorect: Textul identifică hepatita virală cronică drept cauza principală mondială, nu α1-AT.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Cauze neobișnuite: infecții și infiltrație (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Cauze neobișnuite: infecții și infiltrație"
  },
  "learningObjective": "Completarea cadranului cu sifilis/TB și amiloid/limfom, fără a reduce etiologia la α1-AT.",
  "optionRationales": [
   "Sifilisul, tuberculoza și infecțiile tropicale sunt citate ca neobișnuite.",
   "Amiloidoza și limfomul figurează la infiltrație.",
   "Ingestia de toxine este menționată printre cauzele neobișnuite.",
   "Cadranul 34.6 include hepatita E la imunocompromiși.",
   "Textul identifică hepatita virală cronică drept cauza principală mondială, nu α1-AT."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul reinstaurează α1-AT ca etiologie unică, contrazicând ierarhia virală a aceluiași paragraf."
  },
  "textbookExpressions": [
   "sifilis",
   "amiloidoza"
  ]
 },
 {
  "id": "hepatologie-adv-057",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "După un răspuns virusologic susținut la VHC, urmărirea ulterioară:",
  "options": [
   "Pacienții fără ciroză pot fi absolviți de urmărire după virus nedetectabil la 12 săptămâni de la terminarea terapiei",
   "La cirotici, riscul de cancer hepatic persistă, deși la un nivel scăzut, chiar după clearance",
   "Progresia fibrozei este oprită și poate chiar regresa după clearance",
   "Pacienții fără ciroză rămân la risc identic de HCC și necesită RMN lunar tot restul vieții",
   "Clearance-ul viral nu influențează fibroza, urmărirea fiind identică indiferent de ciroză"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pacienții fără ciroză pot fi absolviți de urmărire după virus nedetectabil la 12 săptămâni de la terminarea terapiei — Corect: Absolvirea de urmărire după SVR12 la non-cirotici este explicită.\n\nLa cirotici, riscul de cancer hepatic persistă, deși la un nivel scăzut, chiar după clearance — Corect: Riscul de HCC persistă la cirotici, la nivel scăzut.\n\nProgresia fibrozei este oprită și poate chiar regresa după clearance — Corect: Oprirea și posibila regresie a fibrozei sunt din text.\n\nPacienții fără ciroză rămân la risc identic de HCC și necesită RMN lunar tot restul vieții — Incorect: Non-ciroticii pot fi absolviți de urmărire, nu supravegheați lunar prin RMN.\n\nClearance-ul viral nu influențează fibroza, urmărirea fiind identică indiferent de ciroză — Incorect: Fibroza se oprește/poate regresa; urmărirea depinde de prezența cirozei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1284, Hepatita virală C — SVR12 și urmărirea post-terapie (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1284
   ],
   "pdfPages": [
    314
   ],
   "section": "Hepatita virală C — SVR12 și urmărirea post-terapie"
  },
  "learningObjective": "Disocierea urmăririi: ieșire din dispensar fără ciroză versus persistența riscului de HCC la cirotici.",
  "optionRationales": [
   "Absolvirea de urmărire după SVR12 la non-cirotici este explicită.",
   "Riscul de HCC persistă la cirotici, la nivel scăzut.",
   "Oprirea și posibila regresie a fibrozei sunt din text.",
   "Non-ciroticii pot fi absolviți de urmărire, nu supravegheați lunar prin RMN.",
   "Fibroza se oprește/poate regresa; urmărirea depinde de prezența cirozei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Capcana este menținerea screeningului HCC la non-cirotici după SVR12, deși textul îi absolvă."
  },
  "textbookExpressions": [
   "absolviti de urmărire",
   "12 săptămâni"
  ]
 },
 {
  "id": "hepatologie-adv-058",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Virusul hepatitei E, dincolo de analogia cu VHA și de mortalitatea la gravide:",
  "options": [
   "Un vaccin a fost dezvoltat și utilizat cu succes în China",
   "Infecția acută cu VHE este acum cea mai comună cauză de hepatită virală acută în Marea Britanie și în multe țări din UE",
   "Infecția derivată de la animale (în special porc) este de obicei mai puțin agresivă decât cea prin apă din subcontinentul Indian",
   "O mare parte din populația adultă din Anglia are markeri de infecție, sugerând infecție subclinică frecventă",
   "VHE a dispărut din Europa, vaccinul chinezesc fiind inactiv, iar porcul nefiind rezervor"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Un vaccin a fost dezvoltat și utilizat cu succes în China — Corect: Vaccinul utilizat cu succes în China este citat.\n\nInfecția acută cu VHE este acum cea mai comună cauză de hepatită virală acută în Marea Britanie și în multe țări din UE — Corect: VHE este cea mai comună cauză de hepatită virală acută în UK și multe țări UE.\n\nInfecția derivată de la animale (în special porc) este de obicei mai puțin agresivă decât cea prin apă din subcontinentul Indian — Corect: Zoonoza de la porc este mai puțin agresivă decât forma hidrică indiană.\n\nO mare parte din populația adultă din Anglia are markeri de infecție, sugerând infecție subclinică frecventă — Corect: Markerii la adulții din Anglia sugerează infecție subclinică comună.\n\nVHE a dispărut din Europa, vaccinul chinezesc fiind inactiv, iar porcul nefiind rezervor — Incorect: Textul o descrie ca frecventă în UK/UE, cu rezervor porcin.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1284, Hepatita virală E — Vaccin China, zoonoză și epidemiologie UK (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1284
   ],
   "pdfPages": [
    314
   ],
   "section": "Hepatita virală E — Vaccin China, zoonoză și epidemiologie UK"
  },
  "learningObjective": "Reținerea vaccinului chinezesc, a întâietății VHE ca hepatită acută în UK/UE și a formei zoonotice mai blânde.",
  "optionRationales": [
   "Vaccinul utilizat cu succes în China este citat.",
   "VHE este cea mai comună cauză de hepatită virală acută în UK și multe țări UE.",
   "Zoonoza de la porc este mai puțin agresivă decât forma hidrică indiană.",
   "Markerii la adulții din Anglia sugerează infecție subclinică comună.",
   "Textul o descrie ca frecventă în UK/UE, cu rezervor porcin."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Întâietatea VHE în UK este contraintuitivă față de VHA/VHB; distractorul o neagă complet."
  },
  "textbookExpressions": [
   "utilizat cu succes în China",
   "Marea Britanie"
  ]
 },
 {
  "id": "hepatologie-adv-059",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Precizați enunțul corect privind hepatitele non-A–E:",
  "options": [
   "Aproximativ 10–15% din hepatitele acute virale nu pot fi clasificate (non-A–E)",
   "Agentul GB (VHG) și TTV sunt cauzele principale de ciroză la nivel mondial",
   "Biochimia hepatică alterată din infecțiile acute este invariabil gravă și definește insuficiența fulminantă",
   "VHG și TTV înlocuiesc VHB ca principală cauză de ciroză mondială",
   "Procentul de 10–15% a fost eliminat, toate hepatitele acute fiind azi etichetabile"
  ],
  "correct": [
   0
  ],
  "explanation": "Aproximativ 10–15% din hepatitele acute virale nu pot fi clasificate (non-A–E) — Corect: Cota 10-15% este reafirmată.\n\nAgentul GB (VHG) și TTV sunt cauzele principale de ciroză la nivel mondial — Incorect: VHG și TTV nu au fost documentați ca factori cauzatori de boală la oameni.\n\nBiochimia hepatică alterată din infecțiile acute este invariabil gravă și definește insuficiența fulminantă — Incorect: Modificările biochimice din alte infecții acute sunt de obicei ușoare și fără semnificație clinică.\n\nVHG și TTV înlocuiesc VHB ca principală cauză de ciroză mondială — Incorect: Cauza principală mondială de ciroză rămâne hepatita virală clasică, nu GB/TTV.\n\nProcentul de 10–15% a fost eliminat, toate hepatitele acute fiind azi etichetabile — Incorect: Textul păstrează cota de neclasificate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1284, Hepatita — Non-A–E: cota 10–15% (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1284
   ],
   "pdfPages": [
    314
   ],
   "section": "Hepatita — Non-A–E: cota 10–15%"
  },
  "learningObjective": "Reținerea cotei de hepatite acute virale neclasificate, fără a atribui patogenitate VHG/TTV.",
  "optionRationales": [
   "Cota 10-15% este reafirmată.",
   "VHG și TTV nu au fost documentați ca factori cauzatori de boală la oameni.",
   "Modificările biochimice din alte infecții acute sunt de obicei ușoare și fără semnificație clinică.",
   "Cauza principală mondială de ciroză rămâne hepatita virală clasică, nu GB/TTV.",
   "Textul păstrează cota de neclasificate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Capcana este promovarea VHG/TTV la rangul VHB, deși textul le neagă patogenitatea umană."
  },
  "textbookExpressions": [
   "virusul hepatitei G",
   "T TV"
  ]
 },
 {
  "id": "hepatologie-adv-060",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "La pacienții imunocompromiși, infecția cronică cu VHE:",
  "options": [
   "Poate conduce la infecție cronică",
   "Se tratează prin reducerea imunosupresiei și/sau ribavirină",
   "Nu există status de purtător la imunocompetenți, iar infecția nu progresează spre cronicizare decât la unii imunosupresați",
   "Ribavirina este linia întâi la toți imunocompetenții cu hepatită E acută hidrică",
   "Cronicizarea VHE este regula la imunocompetenți, ribavirina fiind inutilă la transplantați"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Poate conduce la infecție cronică — Corect: Cronicizarea la imunosupresați este explicită.\n\nSe tratează prin reducerea imunosupresiei și/sau ribavirină — Corect: Reducerea imunosupresiei și/sau ribavirina sunt tratamentul citat.\n\nNu există status de purtător la imunocompetenți, iar infecția nu progresează spre cronicizare decât la unii imunosupresați — Corect: Absența statusului de purtător la imunocompetenți este din text.\n\nRibavirina este linia întâi la toți imunocompetenții cu hepatită E acută hidrică — Incorect: Ribavirina nu este linia întâi a hepatitei E acute la imunocompetenți.\n\nCronicizarea VHE este regula la imunocompetenți, ribavirina fiind inutilă la transplantați — Incorect: Relația este inversă: cronicizarea ține de imunosupresați.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1284, Hepatita virală E — Infecția cronică a imunocompromisului (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1284
   ],
   "pdfPages": [
    314
   ],
   "section": "Hepatita virală E — Infecția cronică a imunocompromisului"
  },
  "learningObjective": "Limitarea ribavirinei și a reducerii imunosupresiei la forma cronică a imunocompromisului.",
  "optionRationales": [
   "Cronicizarea la imunosupresați este explicită.",
   "Reducerea imunosupresiei și/sau ribavirina sunt tratamentul citat.",
   "Absența statusului de purtător la imunocompetenți este din text.",
   "Ribavirina nu este linia întâi a hepatitei E acute la imunocompetenți.",
   "Relația este inversă: cronicizarea ține de imunosupresați."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinderea ribavirinei de la transplantați la toate hepatitele E acute este capcana terapeutică."
  },
  "textbookExpressions": [
   "ribavirina",
   "imunocompromişi"
  ]
 },
 {
  "id": "hepatologie-adv-061",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Pe lângă axa CCL2–CCR2 deja consacrată, fibrogeneza hepatică este favorizată de:",
  "options": [
   "Permeabilitatea crescută a tubului digestiv și activarea receptorului hepatic LPS–TLR4",
   "Lezarea și inflamația repetitivă sau cronică, care perpetuează procesul",
   "Terapii antifibrotice (inclusiv strategii de transplant de celule stem) aflate în dezvoltare, transplantul rămânând singurul tratament disponibil pentru insuficiența hepatică",
   "Activarea TLR4 care înlocuiește complet celulele stelate, MMP-urile nemaifiind citate",
   "Antifibroticele orale sunt deja standardul, transplantul fiind abandonat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Permeabilitatea crescută a tubului digestiv și activarea receptorului hepatic LPS–TLR4 — Corect: LPS-TLR4 și permeabilitatea digestivă favorizează fibrogeneza.\n\nLezarea și inflamația repetitivă sau cronică, care perpetuează procesul — Corect: Lezarea repetitivă perpetuează procesul.\n\nTerapii antifibrotice (inclusiv strategii de transplant de celule stem) aflate în dezvoltare, transplantul rămânând singurul tratament disponibil pentru insuficiența hepatică — Corect: Antifibroticele (inclusiv celule stem) sunt în dezvoltare; transplantul rămâne singurul tratament al insuficienței.\n\nActivarea TLR4 care înlocuiește complet celulele stelate, MMP-urile nemaifiind citate — Incorect: Celulele stelate și MMP/TIMP rămân centrale; TLR4 le completează, nu le înlocuiește.\n\nAntifibroticele orale sunt deja standardul, transplantul fiind abandonat — Incorect: Transplantul nu este abandonat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1289, Ciroza hepatică — LPS–TLR4 și terapii antifibrotice în dezvoltare (pagini PDF: 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1289
   ],
   "pdfPages": [
    316
   ],
   "section": "Ciroza hepatică — LPS–TLR4 și terapii antifibrotice în dezvoltare"
  },
  "learningObjective": "Adăugarea axei intestin–LPS–TLR4 la cascada stelată și recunoașterea stadiului experimental al antifibroticelor.",
  "optionRationales": [
   "LPS-TLR4 și permeabilitatea digestivă favorizează fibrogeneza.",
   "Lezarea repetitivă perpetuează procesul.",
   "Antifibroticele (inclusiv celule stem) sunt în dezvoltare; transplantul rămâne singurul tratament al insuficienței.",
   "Celulele stelate și MMP/TIMP rămân centrale; TLR4 le completează, nu le înlocuiește.",
   "Transplantul nu este abandonat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "TLR4 este un adjuvant al cascadei stelate, nu un înlocuitor; distractorul transformă cercetarea în standard."
  },
  "textbookExpressions": [
   "TLR4",
   "celule stern"
  ]
 },
 {
  "id": "hepatologie-adv-062",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Toți pacienții cu ciroză trebuie investigați pentru a exclude cauze tratabile. Printre acestea textul citează:",
  "options": [
   "Hepatita virală",
   "Boala Wilson",
   "Alcoolul, încă cea mai frecventă cauză occidentală, probabil înlocuit de NAFLD",
   "Infecția virală, cel mai frecvent factor etiologic la nivel mondial",
   "Ciroza nu se investighează etiologic, fiind considerată ireversibilă indiferent de cauză"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Hepatita virală — Corect: Hepatita virală este exemplu de cauză tratabilă.\n\nBoala Wilson — Corect: Boala Wilson este explicit menționată.\n\nAlcoolul, încă cea mai frecventă cauză occidentală, probabil înlocuit de NAFLD — Corect: Alcoolul rămâne prima cauză occidentală, cu NAFLD pe cale să îl înlocuiască.\n\nInfecția virală, cel mai frecvent factor etiologic la nivel mondial — Corect: Infecția virală este cel mai frecvent factor mondial.\n\nCiroza nu se investighează etiologic, fiind considerată ireversibilă indiferent de cauză — Incorect: Textul cere investigarea cauzelor tratabile, nu resemnarea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1289, Ciroza hepatică — Cauze tratabile de exclus la diagnostic (pagini PDF: 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1289
   ],
   "pdfPages": [
    316
   ],
   "section": "Ciroza hepatică — Cauze tratabile de exclus la diagnostic"
  },
  "learningObjective": "Reținerea mandatului de a căuta cauze tratabile (viral, Wilson) alături de ierarhia alcool/NAFLD versus viral mondial.",
  "optionRationales": [
   "Hepatita virală este exemplu de cauză tratabilă.",
   "Boala Wilson este explicit menționată.",
   "Alcoolul rămâne prima cauză occidentală, cu NAFLD pe cale să îl înlocuiască.",
   "Infecția virală este cel mai frecvent factor mondial.",
   "Textul cere investigarea cauzelor tratabile, nu resemnarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mandatul „exclude cauze tratabile” este ușor de negat prin dogma ireversibilității cirozei."
  },
  "textbookExpressions": [
   "cauze tratabile",
   "boala Wilson"
  ]
 },
 {
  "id": "hepatologie-adv-063",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la forma mixtă de ciroză:",
  "options": [
   "Ocazional se poate întâlni o formă mixtă, cu noduli mici și mari",
   "Ciroza nu interferează cu circulația sanguină, funcțiile ficatului rămânând intacte",
   "Trăsăturile specifice sunt absența nodulilor și păstrarea arhitecturii lobulare",
   "Forma mixtă înlocuiește complet celelalte două tipuri în hepatita virală",
   "Ciroza nu alterează arhitectura, nodulii fiind absenți prin definiție"
  ],
  "correct": [
   0
  ],
  "explanation": "Ocazional se poate întâlni o formă mixtă, cu noduli mici și mari — Corect: Forma mixtă cu noduli mici și mari este citată ocazional.\n\nCiroza nu interferează cu circulația sanguină, funcțiile ficatului rămânând intacte — Incorect: Ciroza interferează cu circulația și cu funcțiile ficatului, ducând la HTP și insuficiență.\n\nTrăsăturile specifice sunt absența nodulilor și păstrarea arhitecturii lobulare — Incorect: Trăsăturile specifice sunt nodulii de regenerare separați prin septe și pierderea arhitecturii lobulare.\n\nForma mixtă înlocuiește complet celelalte două tipuri în hepatita virală — Incorect: Mixta nu înlocuiește micro/macro; viralul rămâne adesea macronodular.\n\nCiroza nu alterează arhitectura, nodulii fiind absenți prin definiție — Incorect: Ciroza este definită tocmai prin alterarea arhitecturii cu noduli.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1289, Ciroza hepatică — Forma mixtă (pagini PDF: 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1289
   ],
   "pdfPages": [
    316
   ],
   "section": "Ciroza hepatică — Forma mixtă"
  },
  "learningObjective": "Recunoașterea formei mixte (noduli mici și mari) ca variantă ocazională alături de micro- și macronodulară.",
  "optionRationales": [
   "Forma mixtă cu noduli mici și mari este citată ocazional.",
   "Ciroza interferează cu circulația și cu funcțiile ficatului, ducând la HTP și insuficiență.",
   "Trăsăturile specifice sunt nodulii de regenerare separați prin septe și pierderea arhitecturii lobulare.",
   "Mixta nu înlocuiește micro/macro; viralul rămâne adesea macronodular.",
   "Ciroza este definită tocmai prin alterarea arhitecturii cu noduli."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Forma mixtă este detaliul nefolosit; distractorii neagă definiția arhitecturală a cirozei."
  },
  "textbookExpressions": [
   "formă mixtă",
   "septe fibroase"
  ]
 },
 {
  "id": "hepatologie-adv-064",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "La ciroticii tineri, investigațiile etiologice trebuie să includă:",
  "options": [
   "Cuprul seric și α1-antitripsina, determinate de rutină la ciroticii tineri",
   "TIBC și feritina, pentru a exclude hemocromatoza ereditară; sunt disponibili și markeri genetici",
   "Ultrasonografia, care poate arăta nodularitate marginală și distorsiunea arhitecturii arteriale în ciroza constituită",
   "Cuprul seric este inutil sub 40 de ani, α1-AT măsurându-se doar după 70 de ani",
   "Feritina scăzută confirmă hemocromatoza, TIBC neavând rol"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cuprul seric și α1-antitripsina, determinate de rutină la ciroticii tineri — Corect: Cuprul și α1-AT trebuie determinate la ciroticii tineri.\n\nTIBC și feritina, pentru a exclude hemocromatoza ereditară; sunt disponibili și markeri genetici — Corect: TIBC, feritina și markerii genetici vizează hemocromatoza.\n\nUltrasonografia, care poate arăta nodularitate marginală și distorsiunea arhitecturii arteriale în ciroza constituită — Corect: Ecografia descrie nodularitatea și distorsiunea vasculară.\n\nCuprul seric este inutil sub 40 de ani, α1-AT măsurându-se doar după 70 de ani — Incorect: Panelul este cerut tocmai la tineri, nu după 70 de ani.\n\nFeritina scăzută confirmă hemocromatoza, TIBC neavând rol — Incorect: Hemocromatoza asociază feritină crescută, nu scăzută.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1290, Ciroza hepatică — Cupru, α1-AT și feritină la tânărul cirrhotic (pagini PDF: 317).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1290
   ],
   "pdfPages": [
    317
   ],
   "section": "Ciroza hepatică — Cupru, α1-AT și feritină la tânărul cirrhotic"
  },
  "learningObjective": "Aplicarea panelului obligatoriu al tânărului cirrhotic (cupru, α1-AT, TIBC/feritină).",
  "optionRationales": [
   "Cuprul și α1-AT trebuie determinate la ciroticii tineri.",
   "TIBC, feritina și markerii genetici vizează hemocromatoza.",
   "Ecografia descrie nodularitatea și distorsiunea vasculară.",
   "Panelul este cerut tocmai la tineri, nu după 70 de ani.",
   "Hemocromatoza asociază feritină crescută, nu scăzută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează vârsta țintă a panelului Wilson/α1-AT și direcția feritinei din hemocromatoză."
  },
  "textbookExpressions": [
   "Cuprul seric",
   "a1-antitripsina"
  ]
 },
 {
  "id": "hepatologie-adv-065",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Limitările elastografiei (Fibroscan) și locul endoscopiei pentru varice:",
  "options": [
   "Limitările tehnice împiedică folosirea la pacienții cu ascită sau obezitate morbidă, dar în majoritatea cazurilor rămâne utilizabilă",
   "Dacă valoarea este >25 kPa, hipertensiunea portală este foarte probabilă",
   "Unii experți recomandă ca endoscopia pentru varice să fie restrânsă numai la cei cu scoruri înalte la Fibroscan",
   "Fibroscan-ul este inutil în ascită, dar înlocuiește complet endoscopia la toți ciroticii, indiferent de valoare",
   "Valorile sub 5 kPa fac hipertensiunea portală certă și impun TIPS de primă intenție"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Limitările tehnice împiedică folosirea la pacienții cu ascită sau obezitate morbidă, dar în majoritatea cazurilor rămâne utilizabilă — Corect: Ascita și obezitatea morbidă sunt limitările citate.\n\nDacă valoarea este >25 kPa, hipertensiunea portală este foarte probabilă — Corect: Pragul >25 kPa face HTP foarte probabilă.\n\nUnii experți recomandă ca endoscopia pentru varice să fie restrânsă numai la cei cu scoruri înalte la Fibroscan — Corect: Restrângerea endoscopiei la scoruri înalte este poziția unor experți.\n\nFibroscan-ul este inutil în ascită, dar înlocuiește complet endoscopia la toți ciroticii, indiferent de valoare — Incorect: Nu înlocuiește endoscopia la toți; este limitat tehnic în ascită.\n\nValorile sub 5 kPa fac hipertensiunea portală certă și impun TIPS de primă intenție — Incorect: HTP certă se leagă de valori înalte (25 kPa), nu de cele sub 5.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1290, Ciroza hepatică — Fibroscan: ascită, obezitate și triaj endoscopic (pagini PDF: 317).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1290
   ],
   "pdfPages": [
    317
   ],
   "section": "Ciroza hepatică — Fibroscan: ascită, obezitate și triaj endoscopic"
  },
  "learningObjective": "Reținerea limitărilor (ascită, obezitate) și a strategiei de a rezerva endoscopia scorurilor înalte (>25 kPa).",
  "optionRationales": [
   "Ascita și obezitatea morbidă sunt limitările citate.",
   "Pragul >25 kPa face HTP foarte probabilă.",
   "Restrângerea endoscopiei la scoruri înalte este poziția unor experți.",
   "Nu înlocuiește endoscopia la toți; este limitat tehnic în ascită.",
   "HTP certă se leagă de valori înalte (25 kPa), nu de cele sub 5."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pragul 25 kPa este ușor de mutat sub 5; distractorul transformă un triaj expert în înlocuirea totală a endoscopiei."
  },
  "textbookExpressions": [
   "obezitate morbidă",
   ">25 kPa"
  ]
 },
 {
  "id": "hepatologie-adv-066",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Biopsia hepatică în ciroză, dincolo de elastografie:",
  "options": [
   "Rămâne standardul de aur pentru confirmarea tipului și gravității bolii",
   "În ciroza macronodulară, miezul nodulului se poate fragmenta, provocând erori de eșantionare",
   "Determinarea cantitativă a fierului și a cuprului este necesară pentru hemocromatoză sau Wilson",
   "Analiza digitală a colorației cu roșu picrosirius poate cuantifica colagenul",
   "Biopsia este abandonată, picrosiriusul pe ser înlocuind orice fragment tisular"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Rămâne standardul de aur pentru confirmarea tipului și gravității bolii — Corect: Standardul de aur este explicit.\n\nÎn ciroza macronodulară, miezul nodulului se poate fragmenta, provocând erori de eșantionare — Corect: Eroarea de eșantionare prin fragmentare este specifică formei macronodulare.\n\nDeterminarea cantitativă a fierului și a cuprului este necesară pentru hemocromatoză sau Wilson — Corect: Fierul și cuprul cantitative confirmă HE/Wilson.\n\nAnaliza digitală a colorației cu roșu picrosirius poate cuantifica colagenul — Corect: Picrosiriusul digital cuantifică colagenul.\n\nBiopsia este abandonată, picrosiriusul pe ser înlocuind orice fragment tisular — Incorect: Biopsia nu este abandonată; picrosiriusul se aplică pe eșantionul de biopsie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1290, Ciroza hepatică — Biopsie: eroare de eșantionare și picrosirius (pagini PDF: 317).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1290
   ],
   "pdfPages": [
    317
   ],
   "section": "Ciroza hepatică — Biopsie: eroare de eșantionare și picrosirius"
  },
  "learningObjective": "Păstrarea biopsiei ca standard, cu recunoașterea fragmentării macronodulare și a cuantificării prin picrosirius.",
  "optionRationales": [
   "Standardul de aur este explicit.",
   "Eroarea de eșantionare prin fragmentare este specifică formei macronodulare.",
   "Fierul și cuprul cantitative confirmă HE/Wilson.",
   "Picrosiriusul digital cuantifică colagenul.",
   "Biopsia nu este abandonată; picrosiriusul se aplică pe eșantionul de biopsie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fragmentarea macronodulară este detaliul tehnic nefolosit; distractorul mută picrosiriusul din țesut în ser."
  },
  "textbookExpressions": [
   "roşu picrosirius",
   "erori de eşantionare"
  ]
 },
 {
  "id": "hepatologie-adv-067",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Măsurile generale la ciroticul compensat, dincolo de sodiul ≤2 g/zi:",
  "options": [
   "Pacienții cu ciroză compensată pot să ducă o viață normală",
   "Cei expuși riscului trebuie vaccinați împotriva hepatitei A și B",
   "Tratamentul cauzei de bază poate opri sau face să regreseze modificările cirozei",
   "Alcoolul, aspirina și AINS se evită, putând precipita sângerare sau afectare renală",
   "Vaccinarea VHA/VHB este contraindicată, ciroza compensată impunând repaus la pat permanent"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Pacienții cu ciroză compensată pot să ducă o viață normală — Corect: Viața normală în forma compensată este explicită.\n\nCei expuși riscului trebuie vaccinați împotriva hepatitei A și B — Corect: Vaccinarea VHA și VHB este cerută la cei la risc.\n\nTratamentul cauzei de bază poate opri sau face să regreseze modificările cirozei — Corect: Tratamentul cauzei poate opri sau regressa ciroza.\n\nAlcoolul, aspirina și AINS se evită, putând precipita sângerare sau afectare renală — Corect: Alcoolul, aspirina și AINS sunt de evitat.\n\nVaccinarea VHA/VHB este contraindicată, ciroza compensată impunând repaus la pat permanent — Incorect: Vaccinarea este recomandată, nu contraindicată; repausul permanent nu este cerut.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1290, 1291, Ciroza hepatică — Viață normală, vaccinare VHA/VHB (pagini PDF: 317, 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1290,
    1291
   ],
   "pdfPages": [
    317,
    318
   ],
   "section": "Ciroza hepatică — Viață normală, vaccinare VHA/VHB"
  },
  "learningObjective": "Completarea măsurilor igienice cu vaccinarea VHA/VHB și cu posibilitatea unei vieți normale în forma compensată.",
  "optionRationales": [
   "Viața normală în forma compensată este explicită.",
   "Vaccinarea VHA și VHB este cerută la cei la risc.",
   "Tratamentul cauzei poate opri sau regressa ciroza.",
   "Alcoolul, aspirina și AINS sunt de evitat.",
   "Vaccinarea este recomandată, nu contraindicată; repausul permanent nu este cerut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vaccinarea VHA/VHB a ciroticului la risc este ușor de omis printre restricțiile de sodiu deja consacrate."
  },
  "textbookExpressions": [
   "vaccinaţi împotriva",
   "viaţă normală"
  ]
 },
 {
  "id": "hepatologie-adv-068",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Conform clasificării Child-Pugh modificate (Cadranul 34.16), supraviețuirile citate sunt:",
  "options": [
   "Child A (<7 puncte): 82% la 1 an, 45% la 5 ani, 25% la 10 ani",
   "Child B (7–9 puncte): 62% la 1 an, 20% la 5 ani, 7% la 10 ani",
   "Child C (10+ puncte): 42% la 1 an, 20% la 5 ani, 0% la 10 ani",
   "Supraviețuirea generală la 5 ani în ciroză este de aproximativ 50%",
   "Child C are supraviețuire de 97% la 1 an, identică MELD <10"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Child A (<7 puncte): 82% la 1 an, 45% la 5 ani, 25% la 10 ani — Corect: Tripletul Child A este din cadran.\n\nChild B (7–9 puncte): 62% la 1 an, 20% la 5 ani, 7% la 10 ani — Corect: Tripletul Child B este din cadran.\n\nChild C (10+ puncte): 42% la 1 an, 20% la 5 ani, 0% la 10 ani — Corect: Tripletul Child C, inclusiv 0% la 10 ani, este din cadran.\n\nSupraviețuirea generală la 5 ani în ciroză este de aproximativ 50% — Corect: ~50% la 5 ani este cifra generală din text.\n\nChild C are supraviețuire de 97% la 1 an, identică MELD <10 — Incorect: 97% la 1 an aparține MELD <10, nu Child C.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1291, Ciroza hepatică — Child-Pugh: supraviețuiri la 1, 5 și 10 ani (pagini PDF: 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1291
   ],
   "pdfPages": [
    318
   ],
   "section": "Ciroza hepatică — Child-Pugh: supraviețuiri la 1, 5 și 10 ani"
  },
  "learningObjective": "Memorarea tripletului 82/45/25 versus 62/20/7 versus 42/20/0 și a supraviețuirii generale de ~50% la 5 ani.",
  "optionRationales": [
   "Tripletul Child A este din cadran.",
   "Tripletul Child B este din cadran.",
   "Tripletul Child C, inclusiv 0% la 10 ani, este din cadran.",
   "~50% la 5 ani este cifra generală din text.",
   "97% la 1 an aparține MELD <10, nu Child C."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 97% (MELD <10) pe Child C, a cărui supraviețuire la 1 an este 42%."
  },
  "textbookExpressions": [
   "82% la 1 an",
   "0% la 10 ani"
  ]
 },
 {
  "id": "hepatologie-adv-069",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Indicatorii clinici de prognostic nefavorabil (Cadranul 34.15), dincolo de albumină/Na/TP/creatinină:",
  "options": [
   "Icter persistent",
   "Eșecul răspunsului la terapie",
   "Complicații neuropsihiatrice după insuficiență hepatică progresivă",
   "Etiologie de ciroză alcoolică, dacă pacientul continuă să consume alcool",
   "Icterul fugace și abstinența de alcool, ca markeri de prognostic excelent identic Child A"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Icter persistent — Corect: Icterul persistent figurează la semnele clinice.\n\nEșecul răspunsului la terapie — Corect: Eșecul răspunsului la terapie este listat.\n\nComplicații neuropsihiatrice după insuficiență hepatică progresivă — Corect: Complicațiile neuropsihiatrice sunt citate.\n\nEtiologie de ciroză alcoolică, dacă pacientul continuă să consume alcool — Corect: Ciroza alcoolică cu consum continuat este exemplu de etiologie nefavorabilă.\n\nIcterul fugace și abstinența de alcool, ca markeri de prognostic excelent identic Child A — Incorect: Continuarea alcoolului și icterul persistent agravează, nu ameliorează, prognosticul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1291, Ciroza hepatică — Cadranul 34.15: icter, alcool, neuropsihiatrie (pagini PDF: 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1291
   ],
   "pdfPages": [
    318
   ],
   "section": "Ciroza hepatică — Cadranul 34.15: icter, alcool, neuropsihiatrie"
  },
  "learningObjective": "Completarea cadranului cu icterul persistent, eșecul terapeutic, complicațiile neuropsihiatrice și alcoolul continuat.",
  "optionRationales": [
   "Icterul persistent figurează la semnele clinice.",
   "Eșecul răspunsului la terapie este listat.",
   "Complicațiile neuropsihiatrice sunt citate.",
   "Ciroza alcoolică cu consum continuat este exemplu de etiologie nefavorabilă.",
   "Continuarea alcoolului și icterul persistent agravează, nu ameliorează, prognosticul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Alcoolul continuat ca indicator nefavorabil este ușor de transformat într-un marker „de Child A”."
  },
  "textbookExpressions": [
   "Icter persistent",
   "continuă să consume alcool"
  ]
 },
 {
  "id": "hepatologie-adv-070",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Indicații de transplant hepatic mai puțin abordate anterior:",
  "options": [
   "Sindromul hepatopulmonar și hipertensiunea porto-pulmonară pot justifica transplantul chiar dacă funcția hepatică este păstrată",
   "În PBC, bilirubina persistent >100 µmol/L sau pruritul intratabil sunt repere",
   "După DAA, rata transplantelor pentru VHC în UK a scăzut de la 10,5% (2013) la 4,7% (2016)",
   "Ciroza NASH este foarte probabil să devină cea mai frecventă indicație, dat fiind obezitatea",
   "VHC rămâne indicația în creștere, DAA neinfluențând listele de așteptare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Sindromul hepatopulmonar și hipertensiunea porto-pulmonară pot justifica transplantul chiar dacă funcția hepatică este păstrată — Corect: Complicațiile extrahepatice cu funcție păstrată sunt explicitate.\n\nÎn PBC, bilirubina persistent >100 µmol/L sau pruritul intratabil sunt repere — Corect: Bilirubina >100 și pruritul intratabil sunt din PBC.\n\nDupă DAA, rata transplantelor pentru VHC în UK a scăzut de la 10,5% (2013) la 4,7% (2016) — Corect: Cifrele 10,5% și 4,7% sunt din text.\n\nCiroza NASH este foarte probabil să devină cea mai frecventă indicație, dat fiind obezitatea — Corect: NASH este prognozată ca cea mai frecventă indicație.\n\nVHC rămâne indicația în creștere, DAA neinfluențând listele de așteptare — Incorect: Rata VHC a scăzut după DAA, nu a crescut.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1292, Ciroza hepatică — Transplant: hepatopulmonar, VHC 10,5→4,7%, NASH (pagini PDF: 319).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1292
   ],
   "pdfPages": [
    319
   ],
   "section": "Ciroza hepatică — Transplant: hepatopulmonar, VHC 10,5→4,7%, NASH"
  },
  "learningObjective": "Reținerea indicațiilor extrahepatice (hepatopulmonar, porto-pulmonar), a căderii VHC pe liste și a ascensiunii NASH.",
  "optionRationales": [
   "Complicațiile extrahepatice cu funcție păstrată sunt explicitate.",
   "Bilirubina >100 și pruritul intratabil sunt din PBC.",
   "Cifrele 10,5% și 4,7% sunt din text.",
   "NASH este prognozată ca cea mai frecventă indicație.",
   "Rata VHC a scăzut după DAA, nu a crescut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Căderea 10,5→4,7% a VHC este contraintuitivă față de „epidemia VHC”; distractorul o inversează."
  },
  "textbookExpressions": [
   "10,5% în 2013",
   "4,7% în 2016"
  ]
 },
 {
  "id": "hepatologie-adv-071",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Transplantul în boala hepatică alcoolică, dincolo de Child C:",
  "options": [
   "Se oferă pacienților bine motivați care au încetat alcoolul fără ameliorarea funcției, cu consiliere frecventă",
   "A fost demonstrat ca tratament de salvare în hepatita alcoolică severă neresponsivă, dar sunt necesare studii suplimentare",
   "După transplant, pacienții „înalt selectați” au supraviețuire comparabilă la 1 și 3 ani cu cei cu boală cronică",
   "Nu toți specialiștii sunt de acord să abandoneze așteptarea abstinenței dovedite pre-transplant",
   "Abstinența pre-transplant este considerată inutilă de toți autorii, transplantul fiind oferit în plin sevrajul necontrolat"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Se oferă pacienților bine motivați care au încetat alcoolul fără ameliorarea funcției, cu consiliere frecventă — Corect: Motivația, oprirea alcoolului și consilierea sunt din text.\n\nA fost demonstrat ca tratament de salvare în hepatita alcoolică severă neresponsivă, dar sunt necesare studii suplimentare — Corect: Salvarea în hepatita alcoolică severă este menționată cu rezervă.\n\nDupă transplant, pacienții „înalt selectați” au supraviețuire comparabilă la 1 și 3 ani cu cei cu boală cronică — Corect: Supraviețuirea comparabilă la 1 și 3 ani a selecționaților este citată.\n\nNu toți specialiștii sunt de acord să abandoneze așteptarea abstinenței dovedite pre-transplant — Corect: Dezacordul privind abandonarea ferestrei de abstinență este explicit.\n\nAbstinența pre-transplant este considerată inutilă de toți autorii, transplantul fiind oferit în plin sevrajul necontrolat — Incorect: Textul păstrează controversa, nu un consens de transplant în sevrajul necontrolat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1292, Ciroza hepatică — Transplantul în hepatita alcoolică severă (pagini PDF: 319).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1292
   ],
   "pdfPages": [
    319
   ],
   "section": "Ciroza hepatică — Transplantul în hepatita alcoolică severă"
  },
  "learningObjective": "Nuanțarea transplantului precoce la „înalt selectați” versus persistența cerinței de abstinență la o parte dintre specialiști.",
  "optionRationales": [
   "Motivația, oprirea alcoolului și consilierea sunt din text.",
   "Salvarea în hepatita alcoolică severă este menționată cu rezervă.",
   "Supraviețuirea comparabilă la 1 și 3 ani a selecționaților este citată.",
   "Dezacordul privind abandonarea ferestrei de abstinență este explicit.",
   "Textul păstrează controversa, nu un consens de transplant în sevrajul necontrolat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Controversa abstinenței pre-transplant este detaliul nefolosit; distractorul o transformă în consens fals."
  },
  "textbookExpressions": [
   "înalt selectaţi",
   "abstinenţei dovedite"
  ]
 },
 {
  "id": "hepatologie-adv-072",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Pregătirea pre-transplant hepatic include:",
  "options": [
   "Confirmarea diagnosticului, imagistică ecografică și secțională",
   "Studiul radiologic al circulației hepatice arteriale și al arborelui biliar",
   "Evaluarea stării cardiorespiratorii și renale",
   "Sprijin psihosocial și, eventual, psihiatric regulat, date fiind implicațiile etice și financiare",
   "Pregătirea se rezumă la un grupaj ABO, evaluarea cardiorespiratorie fiind inutilă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Confirmarea diagnosticului, imagistică ecografică și secțională — Corect: Confirmarea și imagistica sunt din text.\n\nStudiul radiologic al circulației hepatice arteriale și al arborelui biliar — Corect: Circulația arterială și arborele biliar sunt studiate radiologic.\n\nEvaluarea stării cardiorespiratorii și renale — Corect: Evaluarea cardiorespiratorie și renală este cerută.\n\nSprijin psihosocial și, eventual, psihiatric regulat, date fiind implicațiile etice și financiare — Corect: Sprijinul psihosocial/psihiatric este calificat drept vital.\n\nPregătirea se rezumă la un grupaj ABO, evaluarea cardiorespiratorie fiind inutilă — Incorect: Evaluarea cardiorespiratorie este parte a pregătirii, nu este inutilă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1292, Ciroza hepatică — Pregătirea pre-transplant (pagini PDF: 319).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1292
   ],
   "pdfPages": [
    319
   ],
   "section": "Ciroza hepatică — Pregătirea pre-transplant"
  },
  "learningObjective": "Recunoașterea pachetului imagistic vascular/biliar, cardiorespirator-renal și psihosocial.",
  "optionRationales": [
   "Confirmarea și imagistica sunt din text.",
   "Circulația arterială și arborele biliar sunt studiate radiologic.",
   "Evaluarea cardiorespiratorie și renală este cerută.",
   "Sprijinul psihosocial/psihiatric este calificat drept vital.",
   "Evaluarea cardiorespiratorie este parte a pregătirii, nu este inutilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pachetul pre-transplant este mai larg decât ABO; distractorul îl reduce la un grupaj."
  },
  "textbookExpressions": [
   "cardiorespirato￾rii şi renale",
   "psihosocial"
  ]
 },
 {
  "id": "hepatologie-adv-073",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Contraindicațiile relative și vârsta în transplantul hepatic:",
  "options": [
   "Sunt legate în principal de considerente anatomice, cum ar fi tromboza venoasă splanhnică extinsă",
   "Cu unele excepții, pacienții peste 70 de ani nu sunt candidați de regulă",
   "Contraindicațiile absolute includ lipsa angajamentului psihologic din partea pacientului",
   "Tromboza splanhnică extinsă face actul chirurgical mai dificil, nu îl indică de primă intenție",
   "Vârsta peste 70 de ani este o indicație absolută, tromboza splanhnică fiind ignorată"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Sunt legate în principal de considerente anatomice, cum ar fi tromboza venoasă splanhnică extinsă — Corect: Tromboza splanhnică extinsă este exemplul de contraindicație relativă.\n\nCu unele excepții, pacienții peste 70 de ani nu sunt candidați de regulă — Corect: Pragul de 70 de ani, cu excepții, este explicit.\n\nContraindicațiile absolute includ lipsa angajamentului psihologic din partea pacientului — Corect: Lipsa angajamentului psihologic figurează la absolute.\n\nTromboza splanhnică extinsă face actul chirurgical mai dificil, nu îl indică de primă intenție — Corect: Dificultatea chirurgicală, nu indicația, definește relativa.\n\nVârsta peste 70 de ani este o indicație absolută, tromboza splanhnică fiind ignorată — Incorect: Peste 70 de ani este de regulă non-candidat, nu indicație absolută.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1292, Ciroza hepatică — Transplant: vârstă >70 și tromboză splanhnică (pagini PDF: 319).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1292
   ],
   "pdfPages": [
    319
   ],
   "section": "Ciroza hepatică — Transplant: vârstă >70 și tromboză splanhnică"
  },
  "learningObjective": "Deosebirea contraindicației relative anatomice (tromboză splanhnică) de pragul de vârstă ~70 de ani.",
  "optionRationales": [
   "Tromboza splanhnică extinsă este exemplul de contraindicație relativă.",
   "Pragul de 70 de ani, cu excepții, este explicit.",
   "Lipsa angajamentului psihologic figurează la absolute.",
   "Dificultatea chirurgicală, nu indicația, definește relativa.",
   "Peste 70 de ani este de regulă non-candidat, nu indicație absolută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează relativa (anatomie) și absoluta (angajament) și transformă vârsta >70 într-o indicație."
  },
  "textbookExpressions": [
   "peste 70 de ani",
   "tromboza venoasă splanhnică"
  ]
 },
 {
  "id": "hepatologie-adv-074",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Resângerarea variceală acută, după controlul inițial:",
  "options": [
   "Survine la aproximativ 15–20% din cazuri în primele 5 zile",
   "Sursa trebuie căutată endoscopic și uneori este ulcerația sau alunecarea unei benzi de ligatură",
   "Endoscopia trebuie efectuată o singură dată pentru a controla resângerarea; dacă hemostaza eșuează, este necesar TIPS",
   "Ranitidina poate fi preferabilă IPP, riscul de infecție cu Clostridium difficile fiind mai mic; sucralfatul 1 g ×4/zi poate reduce ulcerațiile după bandare",
   "Resângerarea este excepțională sub 2% în 5 zile, TIPS fiind contraindicat"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Survine la aproximativ 15–20% din cazuri în primele 5 zile — Corect: Cota 15-20% în 5 zile este din text.\n\nSursa trebuie căutată endoscopic și uneori este ulcerația sau alunecarea unei benzi de ligatură — Corect: Ulcerația sau alunecarea benzii sunt surse citate.\n\nEndoscopia trebuie efectuată o singură dată pentru a controla resângerarea; dacă hemostaza eșuează, este necesar TIPS — Corect: O singură endoscopie de control, apoi TIPS.\n\nRanitidina poate fi preferabilă IPP, riscul de infecție cu Clostridium difficile fiind mai mic; sucralfatul 1 g ×4/zi poate reduce ulcerațiile după bandare — Corect: Ranitidina, C. difficile și sucralfatul 1 g ×4/zi sunt explicite.\n\nResângerarea este excepțională sub 2% în 5 zile, TIPS fiind contraindicat — Incorect: Cifra reală este 15-20%, nu sub 2%; TIPS este pasul următor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1295, 1294, Ciroza hepatică — Resângerare 15–20% în 5 zile și ranitidină versus IPP (pagini PDF: 322, 321).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1295,
    1294
   ],
   "pdfPages": [
    322,
    321
   ],
   "section": "Ciroza hepatică — Resângerare 15–20% în 5 zile și ranitidină versus IPP"
  },
  "learningObjective": "Fixarea ferestrei 15–20%/5 zile, a unei singure re-endoscopii și a preferinței ranitidinei față de IPP pentru C. difficile.",
  "optionRationales": [
   "Cota 15-20% în 5 zile este din text.",
   "Ulcerația sau alunecarea benzii sunt surse citate.",
   "O singură endoscopie de control, apoi TIPS.",
   "Ranitidina, C. difficile și sucralfatul 1 g ×4/zi sunt explicite.",
   "Cifra reală este 15-20%, nu sub 2%; TIPS este pasul următor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 15–20% cu mortalitatea Child C (50%) sau cu o cotă minimală; ranitidina versus IPP este detaliul nefolosit."
  },
  "textbookExpressions": [
   "15-20% din cazuri",
   "Clostridium difficile"
  ]
 },
 {
  "id": "hepatologie-adv-075",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "TIPS, dincolo de studiul pe 671 de pacienți și de fereastra de 72 de ore:",
  "options": [
   "Crește riscul de encefalopatie portală",
   "Stenoza sau tromboza de stent sunt mai puțin frecvente cu stenturi acoperite decât cu „metal gol”",
   "Colateralele din venele splenice sau portale pot fi embolizate selectiv",
   "Un RCT pe 28 de pacienți a sugerat eficacitate mai mare și evenimente adverse mai puține pentru stentul esofagian versus tamponada cu balon",
   "Stenturile acoperite cresc tromboza față de metalul gol, encefalopatia fiind absentă după TIPS"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Crește riscul de encefalopatie portală — Corect: Encefalopatia portală crește după TIPS.\n\nStenoza sau tromboza de stent sunt mai puțin frecvente cu stenturi acoperite decât cu „metal gol” — Corect: Stenturile acoperite reduc stenoza/tromboza față de metalul gol.\n\nColateralele din venele splenice sau portale pot fi embolizate selectiv — Corect: Embolizarea selectivă a colateralelor este menționată.\n\nUn RCT pe 28 de pacienți a sugerat eficacitate mai mare și evenimente adverse mai puține pentru stentul esofagian versus tamponada cu balon — Corect: Studiul pe 28 de pacienți compară stentul esofagian cu balonul.\n\nStenturile acoperite cresc tromboza față de metalul gol, encefalopatia fiind absentă după TIPS — Incorect: Relația acoperit versus gol este inversă; encefalopatia este un risc, nu este absentă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1295, Ciroza hepatică — TIPS: stent acoperit versus metal gol (pagini PDF: 322).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1295
   ],
   "pdfPages": [
    322
   ],
   "section": "Ciroza hepatică — TIPS: stent acoperit versus metal gol"
  },
  "learningObjective": "Contrastul stenturilor acoperite versus metal gol și recunoașterea encefalopatiei ca preț al șuntului.",
  "optionRationales": [
   "Encefalopatia portală crește după TIPS.",
   "Stenturile acoperite reduc stenoza/tromboza față de metalul gol.",
   "Embolizarea selectivă a colateralelor este menționată.",
   "Studiul pe 28 de pacienți compară stentul esofagian cu balonul.",
   "Relația acoperit versus gol este inversă; encefalopatia este un risc, nu este absentă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează avantajul stentului acoperit și neagă encefalopatia, două consecințe consecutive ale aceluiași paragraf."
  },
  "textbookExpressions": [
   "stenturi „acoperite\"",
   "metal gol"
  ]
 },
 {
  "id": "hepatologie-adv-076",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Confirmarea clinică a ascitei și factorii precipitanți:",
  "options": [
   "Matitatea deplasabilă în flancuri confirmă prezența lichidului",
   "Mulți pacienți au edeme periferice; revărsatul pleural, de obicei drept, poate trece prin defecte diafragmatice congenitale",
   "Factorii precipitanți includ continuarea alcoolului, infecția/sepsisul, HCC sau tromboza venelor splanhnice",
   "Durerea abdominală severă trebuie să ridice suspiciunea de PBS",
   "Matitatea deplasabilă exclude ascita, revărsatul pleural drept fiind patognomonic pentru TBC"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Matitatea deplasabilă în flancuri confirmă prezența lichidului — Corect: Matitatea deplasabilă este semnul clinic citat.\n\nMulți pacienți au edeme periferice; revărsatul pleural, de obicei drept, poate trece prin defecte diafragmatice congenitale — Corect: Edemele și revărsatul drept prin defecte congenitale sunt din text.\n\nFactorii precipitanți includ continuarea alcoolului, infecția/sepsisul, HCC sau tromboza venelor splanhnice — Corect: Lista de precipitanți este explicită.\n\nDurerea abdominală severă trebuie să ridice suspiciunea de PBS — Corect: Durerea mai severă ridică suspiciunea de PBS.\n\nMatitatea deplasabilă exclude ascita, revărsatul pleural drept fiind patognomonic pentru TBC — Incorect: Matitatea deplasabilă confirmă lichidul, nu îl exclude.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1296, Ciroza hepatică — Ascita: matitate deplasabilă, hidrotorax drept (pagini PDF: 323).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1296
   ],
   "pdfPages": [
    323
   ],
   "section": "Ciroza hepatică — Ascita: matitate deplasabilă, hidrotorax drept"
  },
  "learningObjective": "Reținerea semnului de matitate deplasabilă, a hidrotoraxului drept prin defect diafragmatic și a precipitanților (alcool, HCC, tromboză).",
  "optionRationales": [
   "Matitatea deplasabilă este semnul clinic citat.",
   "Edemele și revărsatul drept prin defecte congenitale sunt din text.",
   "Lista de precipitanți este explicită.",
   "Durerea mai severă ridică suspiciunea de PBS.",
   "Matitatea deplasabilă confirmă lichidul, nu îl exclude."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Hidrotoraxul drept prin defect diafragmatic este ușor de etichetat TBC; matitatea deplasabilă este semnul clasic."
  },
  "textbookExpressions": [
   "deplasabile în flancuri",
   "partea dreaptă"
  ]
 },
 {
  "id": "hepatologie-adv-077",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Paracenteza diagnostică a ascitei cere 10–20 ml pentru:",
  "options": [
   "Numărătoarea celulelor (neutrofile >250/mm³ sugerează PBS)",
   "Colorație Gram și culturi",
   "Proteine și gradient albumină ser–ascită; citologie pentru celule maligne; amilază pentru ascites pancreatică",
   "SAAG >11 g/L sugerează hipertensiune portală; SAAG <11 g/L, afecțiuni peritoneale (neoplazie)",
   "Amilaza în ascită confirmă PBS, SAAG >11 g/L excluzând hipertensiunea portală"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Numărătoarea celulelor (neutrofile >250/mm³ sugerează PBS) — Corect: Volumul 10-20 ml și pragul 250/mm³ sunt din text.\n\nColorație Gram și culturi — Corect: Gram și culturile figurează.\n\nProteine și gradient albumină ser–ascită; citologie pentru celule maligne; amilază pentru ascites pancreatică — Corect: Citolgia și amilaza completează proteinele/SAAG.\n\nSAAG >11 g/L sugerează hipertensiune portală; SAAG <11 g/L, afecțiuni peritoneale (neoplazie) — Corect: SAAG >11 versus <11 este în Cadranul 34.20.\n\nAmilaza în ascită confirmă PBS, SAAG >11 g/L excluzând hipertensiunea portală — Incorect: Amilaza țintește ascita pancreatică, nu PBS; SAAG >11 sugerează HTP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1296, Ciroza hepatică — Paracenteza diagnostică: pachetul de 10–20 ml (pagini PDF: 323).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1296
   ],
   "pdfPages": [
    323
   ],
   "section": "Ciroza hepatică — Paracenteza diagnostică: pachetul de 10–20 ml"
  },
  "learningObjective": "Listarea pachetului complet (celule, Gram, SAAG, citologie, amilază) pe volumul 10–20 ml.",
  "optionRationales": [
   "Volumul 10-20 ml și pragul 250/mm³ sunt din text.",
   "Gram și culturile figurează.",
   "Citolgia și amilaza completează proteinele/SAAG.",
   "SAAG >11 versus <11 este în Cadranul 34.20.",
   "Amilaza țintește ascita pancreatică, nu PBS; SAAG >11 sugerează HTP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amilaza este mutat de la pancreatită la PBS; pragurile SAAG sunt inversate în distractor."
  },
  "textbookExpressions": [
   "10-20 ml",
   "Amilaza"
  ]
 },
 {
  "id": "hepatologie-adv-078",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Pentru ascita refractară, dincolo de TIPS și de albumina 8 g/L:",
  "options": [
   "Un conduct peritoneo-vezical cu pompă cu baterie implantabilă reîncărcabilă (pompa Alfa) transferă ascita în vezică",
   "Studii mai vechi au arătat scăderea paracentezelor de volum mare, cu complicații precum durere locală și infecție",
   "La pacienții ante finem, un drenaj abdominal pe termen lung (LTAD) poate permite controlul ascitei la domiciliu",
   "TIPS se montează cu condiția să nu existe encefalopatie portosistemică sau perturbare importantă a funcției renale",
   "Pompa Alfa înlocuiește transplantul, TIPS fiind contraindicat în ascita refractară"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Un conduct peritoneo-vezical cu pompă cu baterie implantabilă reîncărcabilă (pompa Alfa) transferă ascita în vezică — Corect: Pompa Alfa este descrisă cu transfer peritoneo-vezical.\n\nStudii mai vechi au arătat scăderea paracentezelor de volum mare, cu complicații precum durere locală și infecție — Corect: Reducerea paracentezelor și complicațiile locale sunt citate.\n\nLa pacienții ante finem, un drenaj abdominal pe termen lung (LTAD) poate permite controlul ascitei la domiciliu — Corect: LTAD la domiciliu pentru ante finem este menționat.\n\nTIPS se montează cu condiția să nu existe encefalopatie portosistemică sau perturbare importantă a funcției renale — Corect: Condițiile TIPS (fără EPS, fără perturbare renală importantă) sunt explicite.\n\nPompa Alfa înlocuiește transplantul, TIPS fiind contraindicat în ascita refractară — Incorect: TIPS rămâne o opțiune; pompa nu înlocuiește transplantul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1297, Ciroza hepatică — Pompa Alfa și LTAD în ascita refractară (pagini PDF: 324).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1297
   ],
   "pdfPages": [
    324
   ],
   "section": "Ciroza hepatică — Pompa Alfa și LTAD în ascita refractară"
  },
  "learningObjective": "Recunoașterea pompei peritoneo-vezicale Alfa și a LTAD paliativ, cu rezerva TIPS față de encefalopatie/funcție renală.",
  "optionRationales": [
   "Pompa Alfa este descrisă cu transfer peritoneo-vezical.",
   "Reducerea paracentezelor și complicațiile locale sunt citate.",
   "LTAD la domiciliu pentru ante finem este menționat.",
   "Condițiile TIPS (fără EPS, fără perturbare renală importantă) sunt explicite.",
   "TIPS rămâne o opțiune; pompa nu înlocuiește transplantul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pompa Alfa și LTAD sunt dispozitive nefolosite anterior; distractorul le urcă peste TIPS/transplant."
  },
  "textbookExpressions": [
   "pompa Alfa",
   "LTAD"
  ]
 },
 {
  "id": "hepatologie-adv-079",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Peritonita bacteriană spontană, dincolo de pragul de 250 neutrofile:",
  "options": [
   "Apare la până la 18% dintre pacienții cu ascită care au suferit decompensare",
   "Organismele ajung hematogen; majoritatea sunt Escherichia coli, Klebsiella sau enterococi",
   "Este o indicație pentru transplant hepatic",
   "Antibioticul cu spectru larg se asociază perfuziilor de albumină umană",
   "PBS este o colonizare cutanată inocentă, fără indicație de transplant, germenii fiind anaerobi stricti"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Apare la până la 18% dintre pacienții cu ascită care au suferit decompensare — Corect: Cota de până la 18% este din text.\n\nOrganismele ajung hematogen; majoritatea sunt Escherichia coli, Klebsiella sau enterococi — Corect: Calea hematogenă și cei trei germeni sunt explicite.\n\nEste o indicație pentru transplant hepatic — Corect: PBS este indicație de transplant.\n\nAntibioticul cu spectru larg se asociază perfuziilor de albumină umană — Corect: Albumina se asociază antibioticului.\n\nPBS este o colonizare cutanată inocentă, fără indicație de transplant, germenii fiind anaerobi stricti — Incorect: Nu este inocentă; germenii citați sunt enterobacterii și enterococi, nu anaerobi stricti.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1297, Ciroza hepatică — PBS: 18%, germeni și albumină (pagini PDF: 324).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1297
   ],
   "pdfPages": [
    324
   ],
   "section": "Ciroza hepatică — PBS: 18%, germeni și albumină"
  },
  "learningObjective": "Fixarea prevalenței ~18%, a tridentului E. coli/Klebsiella/enterococ și a asocierii antibiotic–albumină.",
  "optionRationales": [
   "Cota de până la 18% este din text.",
   "Calea hematogenă și cei trei germeni sunt explicite.",
   "PBS este indicație de transplant.",
   "Albumina se asociază antibioticului.",
   "Nu este inocentă; germenii citați sunt enterobacterii și enterococi, nu anaerobi stricti."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cota 18% completează mortalitatea 10–15% și recurența 70% deja consacrate; distractorul banalizează indicația de transplant."
  },
  "textbookExpressions": [
   "până la 18%",
   "enterococi"
  ]
 },
 {
  "id": "hepatologie-adv-080",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Tratamentul encefalopatiei portosistemice, dincolo de lactuloză:",
  "options": [
   "Lactuloza se dă 10–30 ml de trei ori pe zi",
   "Rifaximina, antibiotic semisintetic cu absorbție foarte redusă, are efect benefic în profilaxia secundară",
   "Metronidazolul 200 mg de patru ori pe zi poate fi eficient în episodul acut; neomicina trebuie evitată",
   "Embolizarea colateralelor care ocolesc ficatul poate reduce encefalopatia la cazuri selectate",
   "Neomicina înlocuiește rifaximina în profilaxia secundară, lactuloza fiind contraindicată"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Lactuloza se dă 10–30 ml de trei ori pe zi — Corect: Doza 10-30 ml ×3/zi este din text.\n\nRifaximina, antibiotic semisintetic cu absorbție foarte redusă, are efect benefic în profilaxia secundară — Corect: Rifaximina este citată pentru profilaxia secundară.\n\nMetronidazolul 200 mg de patru ori pe zi poate fi eficient în episodul acut; neomicina trebuie evitată — Corect: Metronidazolul acut și evitarea neomicinei sunt explicite.\n\nEmbolizarea colateralelor care ocolesc ficatul poate reduce encefalopatia la cazuri selectate — Corect: Embolizarea colateralelor este o opțiune la selecționați.\n\nNeomicina înlocuiește rifaximina în profilaxia secundară, lactuloza fiind contraindicată — Incorect: Neomicina trebuie evitată, nu promovată; lactuloza rămâne baza.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1298, Ciroza hepatică — EPS: rifaximină, metronidazol, embolizare (pagini PDF: 325).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1298
   ],
   "pdfPages": [
    325
   ],
   "section": "Ciroza hepatică — EPS: rifaximină, metronidazol, embolizare"
  },
  "learningObjective": "Ierarhizarea rifaximinei de profilaxie secundară, a metronidazolului acut și a evitării neomicinei.",
  "optionRationales": [
   "Doza 10-30 ml ×3/zi este din text.",
   "Rifaximina este citată pentru profilaxia secundară.",
   "Metronidazolul acut și evitarea neomicinei sunt explicite.",
   "Embolizarea colateralelor este o opțiune la selecționați.",
   "Neomicina trebuie evitată, nu promovată; lactuloza rămâne baza."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează locul neomicinei (de evitat) cu al rifaximinei (profilaxie secundară)."
  },
  "textbookExpressions": [
   "Rifaximina",
   "Neomicina"
  ]
 },
 {
  "id": "hepatologie-adv-081",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Sindromul hepatorenal, dincolo de vasodilatația periferică:",
  "options": [
   "Diureza este scăzută, sodiul urinar redus, capacitatea de concentrare păstrată (tubi intacți), histologia aproape normală",
   "Este adesea precipitat de diuretice excesive, AINS, diaree, paracenteză sau infecție, în special PBS",
   "Terlipresina sau noradrenalina plus albumină i.v. ameliorează funcția renală în aproximativ 50% din cazuri",
   "La candidații de transplant, hemodializa poate fi o punte, adesea dificil de efectuat",
   "HRS se tratează prin creșterea spironolactonei, histologia arătând necroză tubulară acută difuză"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Diureza este scăzută, sodiul urinar redus, capacitatea de concentrare păstrată (tubi intacți), histologia aproape normală — Corect: Profilul urinar și histologia aproape normală definesc forma funcțională.\n\nEste adesea precipitat de diuretice excesive, AINS, diaree, paracenteză sau infecție, în special PBS — Corect: Lista de precipitanți include PBS.\n\nTerlipresina sau noradrenalina plus albumină i.v. ameliorează funcția renală în aproximativ 50% din cazuri — Corect: Cota de ~50% pentru terlipresină/noradrenalină plus albumină este explicită.\n\nLa candidații de transplant, hemodializa poate fi o punte, adesea dificil de efectuat — Corect: Dializa-punte este menționată cu rezerve.\n\nHRS se tratează prin creșterea spironolactonei, histologia arătând necroză tubulară acută difuză — Incorect: Spironolactona excesivă precipită HRS; histologia nu este NTA difuză.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1298, Ciroza hepatică — HRS: precipitanți și terlipresină plus albumină 50% (pagini PDF: 325).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1298
   ],
   "pdfPages": [
    325
   ],
   "section": "Ciroza hepatică — HRS: precipitanți și terlipresină plus albumină 50%"
  },
  "learningObjective": "Recunoașterea caracterului „funcțional” (Na urinar scăzut, tubi intacți) și a răspunsului ~50% la vasopresor plus albumină.",
  "optionRationales": [
   "Profilul urinar și histologia aproape normală definesc forma funcțională.",
   "Lista de precipitanți include PBS.",
   "Cota de ~50% pentru terlipresină/noradrenalină plus albumină este explicită.",
   "Dializa-punte este menționată cu rezerve.",
   "Spironolactona excesivă precipită HRS; histologia nu este NTA difuză."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cota 50% vasopresor+albumină și precipitanții (AINS, PBS) sunt ușor de înlocuit cu o NTA „anatomică”."
  },
  "textbookExpressions": [
   "aproximativ 50% din cazuri",
   "funcţie tubulară intactă"
  ]
 },
 {
  "id": "hepatologie-adv-082",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Encefalopatia cronică din ciroză poate evolua, rar, cu:",
  "options": [
   "Un sindrom organic cu semne cerebeloase sau coreoatetozice",
   "O mielopatie care duce la parapareză spastică prin demielinizare",
   "Necesitatea transplantului hepatic la acești pacienți",
   "Encefalopatia acută din insuficiența hepatică acută, care are un prognostic foarte rău",
   "Mielopatia spastică este reversibilă în 48 de ore cu o singură doză de neomicină, transplantul fiind inutil"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Un sindrom organic cu semne cerebeloase sau coreoatetozice — Corect: Semnele cerebeloase sau coreoatetozice sunt din text.\n\nO mielopatie care duce la parapareză spastică prin demielinizare — Corect: Mielopatia cu parapareză spastică prin demielinizare este citată.\n\nNecesitatea transplantului hepatic la acești pacienți — Corect: Acești pacienți necesită transplant.\n\nEncefalopatia acută din insuficiența hepatică acută, care are un prognostic foarte rău — Corect: Prognosticul foarte rău al EPS din IHA este distins.\n\nMielopatia spastică este reversibilă în 48 de ore cu o singură doză de neomicină, transplantul fiind inutil — Incorect: Neomicina trebuie evitată; mielopatia nu se rezolvă în 48 de ore.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1298, Ciroza hepatică — EPS cronică: mielopatie și coreoatetoza (pagini PDF: 325).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1298
   ],
   "pdfPages": [
    325
   ],
   "section": "Ciroza hepatică — EPS cronică: mielopatie și coreoatetoza"
  },
  "learningObjective": "Recunoașterea formei rare cerebeloase/coreoatetozice și a mielopatiei prin demielinizare ca indicație de transplant.",
  "optionRationales": [
   "Semnele cerebeloase sau coreoatetozice sunt din text.",
   "Mielopatia cu parapareză spastică prin demielinizare este citată.",
   "Acești pacienți necesită transplant.",
   "Prognosticul foarte rău al EPS din IHA este distins.",
   "Neomicina trebuie evitată; mielopatia nu se rezolvă în 48 de ore."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mielopatia demielinizantă este un detaliu neurologic nefolosit; distractorul o „vindecă” cu neomicină."
  },
  "textbookExpressions": [
   "parapareză spastică",
   "coreoatetozice"
  ]
 },
 {
  "id": "hepatologie-adv-083",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Manifestările asociate PBC, dincolo de AMA M2 și UDCA:",
  "options": [
   "Keratoconjunctivita sicca este observată în 70% din cazuri",
   "Se asociază sindrom Sjögren, sclerodermie, tiroidită",
   "Pot fi asociate acidoza tubulară renală, glomerulonefrita membranoasă, boala celiacă și pneumonia interstițială",
   "Xantelasma pigmentată a pleoapelor sau depozite de colesterol în pliurile mâinilor pot fi constatate",
   "PBC nu are manifestări extrahepatice, sicca fiind specifică PSC"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Keratoconjunctivita sicca este observată în 70% din cazuri — Corect: Cota 70% pentru sicca este explicită.\n\nSe asociază sindrom Sjögren, sclerodermie, tiroidită — Corect: Sjögren, sclerodermia și tiroidita sunt citate.\n\nPot fi asociate acidoza tubulară renală, glomerulonefrita membranoasă, boala celiacă și pneumonia interstițială — Corect: ATR, membranoasa, celiaca și pneumonia interstițială figurează.\n\nXantelasma pigmentată a pleoapelor sau depozite de colesterol în pliurile mâinilor pot fi constatate — Corect: Xantelasma și depozitele din pliuri sunt din tabloul clinic.\n\nPBC nu are manifestări extrahepatice, sicca fiind specifică PSC — Incorect: Sicca 70% este a PBC, nu a PSC.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1299, Ciroza hepatică — PBC: sicca 70% și asocieri autoimune (pagini PDF: 326).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1299
   ],
   "pdfPages": [
    326
   ],
   "section": "Ciroza hepatică — PBC: sicca 70% și asocieri autoimune"
  },
  "learningObjective": "Completarea serologiei PBC cu sicca 70% și cu lista de asocieri (Sjögren, ATR, membranoasă, celiacă).",
  "optionRationales": [
   "Cota 70% pentru sicca este explicită.",
   "Sjögren, sclerodermia și tiroidita sunt citate.",
   "ATR, membranoasa, celiaca și pneumonia interstițială figurează.",
   "Xantelasma și depozitele din pliuri sunt din tabloul clinic.",
   "Sicca 70% este a PBC, nu a PSC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Lista extrahepatică (ATR, membranoasă, celiacă) este nefolosită; distractorul mută sicca pe PSC."
  },
  "textbookExpressions": [
   "70% din cazuri",
   "Keratoconjunctivita sicca"
  ]
 },
 {
  "id": "hepatologie-adv-084",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Patogeneza PBC, dincolo de AMA:",
  "options": [
   "Un factor de mediu acționează pe o gazdă predispusă, prin mimetică moleculară",
   "Anticorpii E. coli și Novosphingobium aromaticivorans sunt prezenți în titru ridicat",
   "Sinteza IgM este crescută prin eșecul comutării de la IgM la IgG",
   "Nu s-au găsit loci specifici MHC de clasă II",
   "PBC este o infecție hidrică cu VHE, IgM scăzut definind vindecarea"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Un factor de mediu acționează pe o gazdă predispusă, prin mimetică moleculară — Corect: Mimetica moleculară este formularea din text.\n\nAnticorpii E. coli și Novosphingobium aromaticivorans sunt prezenți în titru ridicat — Corect: Cei doi microbi sunt citați cu titru ridicat.\n\nSinteza IgM este crescută prin eșecul comutării de la IgM la IgG — Corect: Eșecul comutării IgM→IgG explică IgM-ul crescut.\n\nNu s-au găsit loci specifici MHC de clasă II — Corect: Absența locusurilor MHC II specifice este explicită.\n\nPBC este o infecție hidrică cu VHE, IgM scăzut definind vindecarea — Incorect: PBC nu este hepatită E; IgM este crescut, nu scăzut.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1298, 1299, Ciroza hepatică — PBC: Novosphingobium și comutarea IgM (pagini PDF: 325, 326).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1298,
    1299
   ],
   "pdfPages": [
    325,
    326
   ],
   "section": "Ciroza hepatică — PBC: Novosphingobium și comutarea IgM"
  },
  "learningObjective": "Reținerea mimetismului molecular (E. coli, Novosphingobium) și a eșecului class-switch IgM→IgG.",
  "optionRationales": [
   "Mimetica moleculară este formularea din text.",
   "Cei doi microbi sunt citați cu titru ridicat.",
   "Eșecul comutării IgM→IgG explică IgM-ul crescut.",
   "Absența locusurilor MHC II specifice este explicită.",
   "PBC nu este hepatită E; IgM este crescut, nu scăzut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Novosphingobium este un detaliu ușor de înlocuit cu VHE; class-switch-ul IgM este mecanismul nefolosit."
  },
  "textbookExpressions": [
   "Novosphingobium",
   "lgM la anticorpi lgG"
  ]
 },
 {
  "id": "hepatologie-adv-085",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Diagnosticul diferențial al granuloamelor hepatice, alături de PBC (~40% din biopsii):",
  "options": [
   "Sarcoidoză",
   "Tuberculoză și schistosomiază",
   "Reacții medicamentoase și bruceloză",
   "Infestare parazitară, de exemplu strongiloidoză",
   "Granuloamele hepatice apar doar în PBC, restul etiologiilor fiind pulmonare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Sarcoidoză — Corect: Sarcoidoza figurează în lista de DD.\n\nTuberculoză și schistosomiază — Corect: TB și schistosomiaza sunt citate.\n\nReacții medicamentoase și bruceloză — Corect: Medicamentele și bruceloza sunt menționate.\n\nInfestare parazitară, de exemplu strongiloidoză — Corect: Strongiloidoza este exemplul parazitar.\n\nGranuloamele hepatice apar doar în PBC, restul etiologiilor fiind pulmonare — Incorect: Lista arată tocmai că granuloamele hepatice au multiple cauze.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1299, Ciroza hepatică — Granuloame hepatice: DD dincolo de PBC (pagini PDF: 326).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1299
   ],
   "pdfPages": [
    326
   ],
   "section": "Ciroza hepatică — Granuloame hepatice: DD dincolo de PBC"
  },
  "learningObjective": "Recunoașterea spectrului granulomatos (sarcoid, TB, schistosomiază, brucelă, strongiloidoză) versus PBC.",
  "optionRationales": [
   "Sarcoidoza figurează în lista de DD.",
   "TB și schistosomiaza sunt citate.",
   "Medicamentele și bruceloza sunt menționate.",
   "Strongiloidoza este exemplul parazitar.",
   "Lista arată tocmai că granuloamele hepatice au multiple cauze."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Granuloamele din PBC (~40%) sunt ușor de crezut patognomonice; textul oferă o listă lungă de DD."
  },
  "textbookExpressions": [
   "strongiloidoză",
   "bruceloză"
  ]
 },
 {
  "id": "hepatologie-adv-086",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Hemocromatoza ereditară, dincolo de C282Y și de flebotomie:",
  "options": [
   "Hepcidina hepatică ocupă o poziție centrală în controlul absorbției fierului",
   "Expresia hepcidinei este scăzută în hemocromatoza HFE, facilitând supraîncărcarea",
   "Conținutul total de fier la simptomatici este 20–40 g, față de 3–4 g la o persoană normală; ficatul și pancreasul 50–100 de ori normalul",
   "Triada clasică (pigmentare bronzantă, hepatomegalie, diabet) apare doar în supraîncărcarea importantă",
   "Hepcidina crescută blochează fierul, triada clasică fiind prezentă încă din copilărie la toți heterozigoții"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Hepcidina hepatică ocupă o poziție centrală în controlul absorbției fierului — Corect: Poziția centrală a hepcidinei este din text.\n\nExpresia hepcidinei este scăzută în hemocromatoza HFE, facilitând supraîncărcarea — Corect: Expresia scăzută în HFE facilitează supraîncărcarea.\n\nConținutul total de fier la simptomatici este 20–40 g, față de 3–4 g la o persoană normală; ficatul și pancreasul 50–100 de ori normalul — Corect: 20-40 g versus 3-4 g și 50-100× în ficat/pancreas sunt explicite.\n\nTriada clasică (pigmentare bronzantă, hepatomegalie, diabet) apare doar în supraîncărcarea importantă — Corect: Triada apare doar în supraîncărcarea importantă, de obicei în deceniul al cincilea.\n\nHepcidina crescută blochează fierul, triada clasică fiind prezentă încă din copilărie la toți heterozigoții — Incorect: Hepcidina este scăzută, nu crescută; heterozigoții nu au triada din copilărie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1301, Ciroza hepatică — Hemocromatoza: hepcidină, stoc 20–40 g, triadă (pagini PDF: 328).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1301
   ],
   "pdfPages": [
    328
   ],
   "section": "Ciroza hepatică — Hemocromatoza: hepcidină, stoc 20–40 g, triadă"
  },
  "learningObjective": "Corelarea hepcidinei scăzute HFE cu stocul 20–40 g și cu triada tardivă (pigment, ficat, diabet).",
  "optionRationales": [
   "Poziția centrală a hepcidinei este din text.",
   "Expresia scăzută în HFE facilitează supraîncărcarea.",
   "20-40 g versus 3-4 g și 50-100× în ficat/pancreas sunt explicite.",
   "Triada apare doar în supraîncărcarea importantă, de obicei în deceniul al cincilea.",
   "Hepcidina este scăzută, nu crescută; heterozigoții nu au triada din copilărie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Direcția hepcidinei (scăzută în HFE) este capcana; stocul 20–40 g versus 3–4 g completează aritmetica flebotomiei."
  },
  "textbookExpressions": [
   "Hepcidina",
   "20-40 g"
  ]
 },
 {
  "id": "hepatologie-adv-087",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Morfologia și tabloul endocrin-articular al hemocromatozei constituite:",
  "options": [
   "În stadiile precoce, fierul se depune în hepatocitele periportale (lizozomi pericanaliculari)",
   "Hipogonadismul secundar disfuncției hipofizare este cea mai frecventă tulburare endocrină",
   "Manifestările cardiace (insuficiență, aritmii) sunt frecvente, mai ales la tineri",
   "Pirofosfatul de calciu se depune asimetric (condrocalcinoză), cu artropatie",
   "Fierul precoce este strict Kupffer, hipogonadismul fiind cea mai rară endocrinopatie"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "În stadiile precoce, fierul se depune în hepatocitele periportale (lizozomi pericanaliculari) — Corect: Depunerea periportală precoce în lizozomi pericanaliculari este din text.\n\nHipogonadismul secundar disfuncției hipofizare este cea mai frecventă tulburare endocrină — Corect: Hipogonadismul hipofizar este cea mai frecventă endocrinopatie.\n\nManifestările cardiace (insuficiență, aritmii) sunt frecvente, mai ales la tineri — Corect: Afectarea cardiacă la tineri este citată.\n\nPirofosfatul de calciu se depune asimetric (condrocalcinoză), cu artropatie — Corect: Condrocalcinoza asimetrică duce la artropatie.\n\nFierul precoce este strict Kupffer, hipogonadismul fiind cea mai rară endocrinopatie — Incorect: Precoce este hepatocitar periportal, nu strict Kupffer; hipogonadismul este cea mai frecventă, nu cea mai rară, endocrinopatie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1301, Ciroza hepatică — Hemocromatoza: periportal precoce, hipofiză, condrocalcinoză (pagini PDF: 328).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1301
   ],
   "pdfPages": [
    328
   ],
   "section": "Ciroza hepatică — Hemocromatoza: periportal precoce, hipofiză, condrocalcinoză"
  },
  "learningObjective": "Secvența depozitului periportal precoce, a hipogonadismului hipofizar și a condrocalcinozei asimetrice.",
  "optionRationales": [
   "Depunerea periportală precoce în lizozomi pericanaliculari este din text.",
   "Hipogonadismul hipofizar este cea mai frecventă endocrinopatie.",
   "Afectarea cardiacă la tineri este citată.",
   "Condrocalcinoza asimetrică duce la artropatie.",
   "Precoce este hepatocitar periportal, nu strict Kupffer; hipogonadismul este cea mai frecventă, nu cea mai rară, endocrinopatie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sediul precoce (hepatocit versus Kupffer) și frecvența hipogonadismului, două detalii din același tablou."
  },
  "textbookExpressions": [
   "periportale",
   "condrocalcinoză"
  ]
 },
 {
  "id": "hepatologie-adv-088",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Hepatita cronică, dincolo de definiția de ≥6 luni, se caracterizează histologic prin:",
  "options": [
   "Infiltrate portale cronice cu limfocite, plasmocite și, uneori, foliculi limfoizi",
   "Hepatită de interfață: pierderea definiției plăcii portal/periportal, prin apoptoză mai degrabă decât necroză",
   "Fibroză ușoară, în punte (porto-centrală, centro-centrală, porto-portală) sau ciroză",
   "Infiltrat portal strict neutrofilic, fără limfocite, patognomonic VHA",
   "Interfața se datorează necrozei de zonă 1, apoptoza fiind absentă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Infiltrate portale cronice cu limfocite, plasmocite și, uneori, foliculi limfoizi — Corect: Limfocitele, plasmocitele și foliculii limfoizi sunt din text.\n\nHepatită de interfață: pierderea definiției plăcii portal/periportal, prin apoptoză mai degrabă decât necroză — Corect: Interfața este definită prin apoptoză, nu necroză.\n\nFibroză ușoară, în punte (porto-centrală, centro-centrală, porto-portală) sau ciroză — Corect: Spectrul fibrozei până la punți/ciroză este explicit.\n\nInfiltrat portal strict neutrofilic, fără limfocite, patognomonic VHA — Incorect: Infiltratul este limfocitar, nu strict neutrofilic.\n\nInterfața se datorează necrozei de zonă 1, apoptoza fiind absentă — Incorect: Textul atribuie distrucția de interfață apoptozei, nu necrozei de zonă 1.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Cronică: foliculi limfoizi și interfață apoptotică (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Cronică: foliculi limfoizi și interfață apoptotică"
  },
  "learningObjective": "Recunoașterea infiltratei portale limfo-plasmocitare cu foliculi și a interfeței ca apoptoză, nu necroză.",
  "optionRationales": [
   "Limfocitele, plasmocitele și foliculii limfoizi sunt din text.",
   "Interfața este definită prin apoptoză, nu necroză.",
   "Spectrul fibrozei până la punți/ciroză este explicit.",
   "Infiltratul este limfocitar, nu strict neutrofilic.",
   "Textul atribuie distrucția de interfață apoptozei, nu necrozei de zonă 1."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Apoptoza de interfață versus necroza acută de zonă 3 este capcana de pe aceeași pagină."
  },
  "textbookExpressions": [
   "foliculi limfoizi",
   "de interfaţă"
  ]
 },
 {
  "id": "hepatologie-adv-089",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Precizați enunțul corect privind cauza principală mondială de boală hepatică cronică, ciroză și HCC:",
  "options": [
   "Deficitul de α1-antitripsină",
   "Alcoolul, în toate regiunile, depășind virusurile",
   "Hepatita cronică virală",
   "Steatoza non-alcoolică, unica cauză recunoscută în Asia",
   "VHE la imunocompetenți, ca status de purtător universal"
  ],
  "correct": [
   2
  ],
  "explanation": "Deficitul de α1-antitripsină — Incorect: α1-AT este o cauză ereditară, nu principala mondială.\n\nAlcoolul, în toate regiunile, depășind virusurile — Incorect: Alcoolul predomină în Occident, nu mondial.\n\nHepatita cronică virală — Corect: Textul identifică hepatita cronică virală drept cauza principală mondială.\n\nSteatoza non-alcoolică, unica cauză recunoscută în Asia — Incorect: NAFLD nu este unica cauză în Asia.\n\nVHE la imunocompetenți, ca status de purtător universal — Incorect: VHE nu cronicizează la imunocompetenți.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Cauza principală mondială: hepatita virală cronică (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Cauza principală mondială: hepatita virală cronică"
  },
  "learningObjective": "Reținerea hepatitei virale cronice ca principală cauză mondială de ciroză și HCC.",
  "optionRationales": [
   "α1-AT este o cauză ereditară, nu principala mondială.",
   "Alcoolul predomină în Occident, nu mondial.",
   "Textul identifică hepatita cronică virală drept cauza principală mondială.",
   "NAFLD nu este unica cauză în Asia.",
   "VHE nu cronicizează la imunocompetenți."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Capcana este substituirea cauzei mondiale (virus) cu alcoolul occidental sau cu α1-AT."
  },
  "textbookExpressions": [
   "cauza principală",
   "carcinom hepatocelular"
  ]
 },
 {
  "id": "hepatologie-adv-090",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Severitatea hepatitei cronice se judecă după:",
  "options": [
   "Gradul necrozei hepatocitare și al inflamației (grading)",
   "Severitatea fibrozei sau a cirozei (staging)",
   "Adițional pot apărea necroză confluentă, modificare lobulară, necroză litică focală, apoptoză și inflamație focală",
   "Grading-ul care înlocuiește etiologia, staging-ul fiind abandonat",
   "Un singur scor cantitativ identic, aplicabil oricărei etiologii fără nuanță"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Gradul necrozei hepatocitare și al inflamației (grading) — Corect: Grading-ul vizează necroza și inflamația.\n\nSeveritatea fibrozei sau a cirozei (staging) — Corect: Staging-ul vizează fibroza sau ciroza.\n\nAdițional pot apărea necroză confluentă, modificare lobulară, necroză litică focală, apoptoză și inflamație focală — Corect: Lista de leziuni adiționale (confluentă, litică, focală) este din paragraful de hepatită cronică.\n\nGrading-ul care înlocuiește etiologia, staging-ul fiind abandonat — Incorect: Cele două dimensiuni coexistă; etiologia rămâne criteriul de clasificare.\n\nUn singur scor cantitativ identic, aplicabil oricărei etiologii fără nuanță — Incorect: Textul nu reduce evaluarea la un scor unic independent de etiologie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Grading versus staging în hepatita cronică (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Grading versus staging în hepatita cronică"
  },
  "learningObjective": "Deosebirea grading (necroză/inflamație) de staging (fibroză/ciroză), plus leziunile adiționale (confluentă, litică, focală).",
  "optionRationales": [
   "Grading-ul vizează necroza și inflamația.",
   "Staging-ul vizează fibroza sau ciroza.",
   "Lista de leziuni adiționale (confluentă, litică, focală) este din paragraful de hepatită cronică.",
   "Cele două dimensiuni coexistă; etiologia rămâne criteriul de clasificare.",
   "Textul nu reduce evaluarea la un scor unic independent de etiologie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Grading versus staging sunt ușor de fuzionat într-un „scor unic etiologic”."
  },
  "textbookExpressions": [
   "grading",
   "staging"
  ]
 },
 {
  "id": "hepatologie-adv-091",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "În icterul hemolitic și în testele hematologice adjuvante ale hepatitei:",
  "options": [
   "Bilirubina este crescută, iar celelalte teste biochimice sunt normale",
   "Printre alte teste din sânge figurează AMA pentru CBP",
   "Statusul HIV este irelevant în evaluarea hepatitei acute",
   "Leucocitoza neutrofilică definește hepatita virală, AMA fiind rezervat PSC",
   "Bilirubina hemolitică se însoțește de FA maximală, identic obstacolului extrahepatic"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Bilirubina este crescută, iar celelalte teste biochimice sunt normale — Corect: Patternul „doar bilirubină” al hemolizei este din text.\n\nPrintre alte teste din sânge figurează AMA pentru CBP — Corect: AMA pentru CBP figurează printre testele etiologice.\n\nStatusul HIV este irelevant în evaluarea hepatitei acute — Incorect: Textul cere, dimpotrivă, stabilirea statusului HIV.\n\nLeucocitoza neutrofilică definește hepatita virală, AMA fiind rezervat PSC — Incorect: Hepatita virală asociază mai degrabă leucopenie; AMA este al CBP, nu al PSC.\n\nBilirubina hemolitică se însoțește de FA maximală, identic obstacolului extrahepatic — Incorect: FA maximală este a obstacolului extrahepatic, nu a hemolizei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Icter hemolitic și AMA pentru CBP (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Icter hemolitic și AMA pentru CBP"
  },
  "learningObjective": "Deosebirea icterului hemolitic (doar bilirubină) de colestază și recunoașterea AMA ca test pentru CBP.",
  "optionRationales": [
   "Patternul „doar bilirubină” al hemolizei este din text.",
   "AMA pentru CBP figurează printre testele etiologice.",
   "Textul cere, dimpotrivă, stabilirea statusului HIV.",
   "Hepatita virală asociază mai degrabă leucopenie; AMA este al CBP, nu al PSC.",
   "FA maximală este a obstacolului extrahepatic, nu a hemolizei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Icterul hemolitic (biochimie altfel normală) este ușor de citit ca obstacol extrahepatic."
  },
  "textbookExpressions": [
   "icterul hemolitic",
   "AMA pentru CBP"
  ]
 },
 {
  "id": "hepatologie-adv-092",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Caracteristici histologice variabile ale hepatitei acute, alături de necroza de zonă 3, includ:",
  "options": [
   "Colestază în zona 3",
   "Încărcare grasă, evidentă mai ales în hepatita alcoolică sau medicamentoasă",
   "Corpi eozinofili Councilman, cu balonizare și vacuolizare hepatocitară",
   "Colestază maximală de zonă 1, identică PBC precoce, fără steatoză",
   "Councilman-ul este patognomonic PBC, steatoza fiind absentă în hepatita medicamentoasă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Colestază în zona 3 — Corect: Colestaza în zona 3 este citată ca trăsătură variabilă.\n\nÎncărcare grasă, evidentă mai ales în hepatita alcoolică sau medicamentoasă — Corect: Încărcarea grasă în hepatita alcoolică sau medicamentoasă este explicită.\n\nCorpi eozinofili Councilman, cu balonizare și vacuolizare hepatocitară — Corect: Councilman, balonizarea și vacuolizarea sunt din paragraful de patologie acută.\n\nColestază maximală de zonă 1, identică PBC precoce, fără steatoză — Incorect: Zona 1 colestatică este a PBC, nu a hepatitei acute tipice.\n\nCouncilman-ul este patognomonic PBC, steatoza fiind absentă în hepatita medicamentoasă — Incorect: Councilman nu este al PBC; steatoza medicamentoasă este menționată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Colestază de zonă 3 și corpi Councilman (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Colestază de zonă 3 și corpi Councilman"
  },
  "learningObjective": "Plasarea colestazei și steatozei pe zona 3, alături de corpii Councilman, distincte de PBC de zonă 1.",
  "optionRationales": [
   "Colestaza în zona 3 este citată ca trăsătură variabilă.",
   "Încărcarea grasă în hepatita alcoolică sau medicamentoasă este explicită.",
   "Councilman, balonizarea și vacuolizarea sunt din paragraful de patologie acută.",
   "Zona 1 colestatică este a PBC, nu a hepatitei acute tipice.",
   "Councilman nu este al PBC; steatoza medicamentoasă este menționată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Zona 3 (colestază/steatoză acută) versus zona 1 (PBC) este firul roșu al histologiei."
  },
  "textbookExpressions": [
   "zona 3",
   "corpi eozinofiliei Councilman"
  ]
 },
 {
  "id": "hepatologie-adv-093",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la țintele moleculare ale DAA în VHC:",
  "options": [
   "Medicamentele țintesc enzime din interiorul virusului, de obicei polimeraza, proteina NS5A sau proteaza NS3/4",
   "Sofosbuvirul este un inhibitor nucleotidic al polimerazei, combinat cu un inhibitor NS5A",
   "Combinația poate fi o singură tabletă 8–12 săptămâni",
   "Sofosbuvir/velpatasvir este pangenotipică, iar sofosbuvir/ledipasvir este specifică genotipurilor 1 și 4",
   "Sofosbuvir/ledipasvir este pangenotipică, iar velpatasvir este rezervat genotipurilor 1 și 4"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Medicamentele țintesc enzime din interiorul virusului, de obicei polimeraza, proteina NS5A sau proteaza NS3/4 — Corect: Cele trei ținte sunt din text.\n\nSofosbuvirul este un inhibitor nucleotidic al polimerazei, combinat cu un inhibitor NS5A — Corect: Sofosbuvir ca inhibitor nucleotidic de polimerază este explicit.\n\nCombinația poate fi o singură tabletă 8–12 săptămâni — Corect: Schema o tabletă 8-12 săptămâni este citată.\n\nSofosbuvir/velpatasvir este pangenotipică, iar sofosbuvir/ledipasvir este specifică genotipurilor 1 și 4 — Corect: Velpatasvir pangenotipic versus ledipasvir GT1/4 este distincția paginii.\n\nSofosbuvir/ledipasvir este pangenotipică, iar velpatasvir este rezervat genotipurilor 1 și 4 — Incorect: Perechea este inversă: ledipasvir este GT1/4, velpatasvir este pangenotipic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1284, Hepatita virală C — Ținte: polimerază, NS5A, NS3/4 (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1284
   ],
   "pdfPages": [
    314
   ],
   "section": "Hepatita virală C — Ținte: polimerază, NS5A, NS3/4"
  },
  "learningObjective": "Maparea celor trei ținte enzimatice și a perechii pangenotipică (velpatasvir) versus GT1/4 (ledipasvir).",
  "optionRationales": [
   "Cele trei ținte sunt din text.",
   "Sofosbuvir ca inhibitor nucleotidic de polimerază este explicit.",
   "Schema o tabletă 8-12 săptămâni este citată.",
   "Velpatasvir pangenotipic versus ledipasvir GT1/4 este distincția paginii.",
   "Perechea este inversă: ledipasvir este GT1/4, velpatasvir este pangenotipic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversarea velpatasvir/ledipasvir pe genotipuri este capcana clasică a paginii de DAA."
  },
  "textbookExpressions": [
   "NS5a",
   "proteaza NS3/4"
  ]
 },
 {
  "id": "hepatologie-adv-094",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la histologia hepatitei acute:",
  "options": [
   "Majoritatea modificărilor sunt specifice etiologic, biopsia înlocuind serologia",
   "Deși anumite caracteristici histologice sunt sugestive pentru factorul etiologic, majoritatea modificărilor sunt nespecifice",
   "Necroza este maximală în zona 1, indiferent de agent",
   "Extinderea necrozei este identică la toți pacienții infectați cu același agent",
   "Hepatocitele rămân intacte, fără degenerescență sau necroză"
  ],
  "correct": [
   1
  ],
  "explanation": "Majoritatea modificărilor sunt specifice etiologic, biopsia înlocuind serologia — Incorect: Textul nu atribuie specificitate etiologică majorității leziunilor.\n\nDeși anumite caracteristici histologice sunt sugestive pentru factorul etiologic, majoritatea modificărilor sunt nespecifice — Corect: Formularea despre caracteristici sugestive, dar modificări în principal nespecifice, este din paragraf.\n\nNecroza este maximală în zona 1, indiferent de agent — Incorect: Necroza este de obicei maximală în zona 3.\n\nExtinderea necrozei este identică la toți pacienții infectați cu același agent — Incorect: Extinderea necrozei variază interindividual, chiar la același agent.\n\nHepatocitele rămân intacte, fără degenerescență sau necroză — Incorect: Hepatocitele prezintă degenerescență și necroză.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1275, Hepatita — Histologie acută: modificări în principal nespecifice (pagini PDF: 313).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1275
   ],
   "pdfPages": [
    313
   ],
   "section": "Hepatita — Histologie acută: modificări în principal nespecifice"
  },
  "learningObjective": "Reținerea că, deși unele trăsături sugerează etiologia, majoritatea modificărilor histologice sunt nespecifice.",
  "optionRationales": [
   "Textul nu atribuie specificitate etiologică majorității leziunilor.",
   "Formularea despre caracteristici sugestive, dar modificări în principal nespecifice, este din paragraf.",
   "Necroza este de obicei maximală în zona 3.",
   "Extinderea necrozei variază interindividual, chiar la același agent.",
   "Hepatocitele prezintă degenerescență și necroză."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Nespecificitatea histologică versus tentația de a citi etiologia pe biopsie este capcana de morfopatologie."
  },
  "textbookExpressions": [
   "sugestive pentru",
   "nespecifice"
  ]
 },
 {
  "id": "hepatologie-adv-095",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Genomul VHE (Fig. 34.19) și diagnosticul de laborator:",
  "options": [
   "Este un genom ARN monocatenar cu trei cadre de citire libere (ORF)",
   "ORF1 codifică proteine non-structurale, ORF2 proteine structurale, ORF3 fiind nedeterminat",
   "ELISA detectează anti-VHE IgG sau IgM; ARN VHE poate fi evidențiat în ser sau scaun prin PCR",
   "Este un ADN din Hepadnaviridae, ORF3 codificând HBsAg",
   "Diagnosticul se bazează doar pe biopsie, testele serologice nefiind disponibile"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este un genom ARN monocatenar cu trei cadre de citire libere (ORF) — Corect: ARN monocatenar cu trei ORF este din figură.\n\nORF1 codifică proteine non-structurale, ORF2 proteine structurale, ORF3 fiind nedeterminat — Corect: Atribuirea ORF1/ORF2 și caracterul nedeterminat al ORF3 sunt explicite.\n\nELISA detectează anti-VHE IgG sau IgM; ARN VHE poate fi evidențiat în ser sau scaun prin PCR — Corect: ELISA IgG/IgM și PCR în ser sau scaun sunt citate.\n\nEste un ADN din Hepadnaviridae, ORF3 codificând HBsAg — Incorect: Hepadnaviridae/HBsAg aparțin VHB, nu VHE.\n\nDiagnosticul se bazează doar pe biopsie, testele serologice nefiind disponibile — Incorect: Testele serologice și PCR sunt disponibile.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1284, Hepatita virală E — ORF1–3 și PCR în ser/scaun (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1284
   ],
   "pdfPages": [
    314
   ],
   "section": "Hepatita virală E — ORF1–3 și PCR în ser/scaun"
  },
  "learningObjective": "Citirea celor trei ORF (ORF3 nedeterminat) și a pachetului ELISA plus PCR în ser sau scaun.",
  "optionRationales": [
   "ARN monocatenar cu trei ORF este din figură.",
   "Atribuirea ORF1/ORF2 și caracterul nedeterminat al ORF3 sunt explicite.",
   "ELISA IgG/IgM și PCR în ser sau scaun sunt citate.",
   "Hepadnaviridae/HBsAg aparțin VHB, nu VHE.",
   "Testele serologice și PCR sunt disponibile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "ORF3 „nedeterminat” este detaliul de genom ușor de înlocuit cu HBsAg."
  },
  "textbookExpressions": [
   "ORF 3",
   "ARN VHE"
  ]
 },
 {
  "id": "hepatologie-adv-096",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la agentul GB (VHG) și la virusul transmis prin transfuzie (TTV):",
  "options": [
   "Nu au fost documentați ca factori cauzatori de boală la oameni",
   "Sunt cauzele principale de ciroză la nivel mondial, înlocuind VHB",
   "TTV este vaccinul chinezesc anti-VHE, aplicat de rutină în UE",
   "Biochimia hepatică alterată din aceste infecții definește insuficiența fulminantă la toți purtătorii",
   "Sunt virusuri ADN din Hepadnaviridae, identice VHB"
  ],
  "correct": [
   0
  ],
  "explanation": "Nu au fost documentați ca factori cauzatori de boală la oameni — Corect: Textul precizează că nu au fost documentați ca factori cauzatori de boală la oameni.\n\nSunt cauzele principale de ciroză la nivel mondial, înlocuind VHB — Incorect: Nu înlocuiesc VHB ca principală cauză de ciroză.\n\nTTV este vaccinul chinezesc anti-VHE, aplicat de rutină în UE — Incorect: TTV nu este un vaccin.\n\nBiochimia hepatică alterată din aceste infecții definește insuficiența fulminantă la toți purtătorii — Incorect: Nu definesc insuficiența fulminantă.\n\nSunt virusuri ADN din Hepadnaviridae, identice VHB — Incorect: Hepadnaviridae aparține VHB, nu acestor agenți.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1284, Hepatita — VHG/TTV: fără cauzalitate umană documentată (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1284
   ],
   "pdfPages": [
    314
   ],
   "section": "Hepatita — VHG/TTV: fără cauzalitate umană documentată"
  },
  "learningObjective": "Recunoașterea absenței cauzalității documentate pentru VHG și TTV, distinctă de cota non-A–E.",
  "optionRationales": [
   "Textul precizează că nu au fost documentați ca factori cauzatori de boală la oameni.",
   "Nu înlocuiesc VHB ca principală cauză de ciroză.",
   "TTV nu este un vaccin.",
   "Nu definesc insuficiența fulminantă.",
   "Hepadnaviridae aparține VHB, nu acestor agenți."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Absența cauzalității VHG/TTV este ușor de citit ca noile cauze majore de ciroză."
  },
  "textbookExpressions": [
   "Agentul GB",
   "T TV"
  ]
 },
 {
  "id": "hepatologie-adv-097",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Prevenția și epidemiologia VHE, dincolo de vaccinul chinezesc:",
  "options": [
   "Prevenția și controlul depind de respectarea regulilor de igienă și de calitatea sistemului de sănătate",
   "În țările în curs de dezvoltare, epidemiile sunt întâlnite; în cele dezvoltate, cazurile sunt sporadice, după contact cu animale de fermă sau călătorii",
   "Contaminarea cărnii nu este rară; infecția derivată de la animale este de obicei mai puțin agresivă decât cea hidrică din subcontinentul Indian",
   "VHE a dispărut din Europa, carnea nefiind rezervor, igiena fiind inutilă",
   "Infecția hidrică indiană este mai blândă decât zoonoza europeană, fără epidemii în țările în dezvoltare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Prevenția și controlul depind de respectarea regulilor de igienă și de calitatea sistemului de sănătate — Corect: Igiena și sistemul de sănătate sunt pârghiile de prevenție.\n\nÎn țările în curs de dezvoltare, epidemiile sunt întâlnite; în cele dezvoltate, cazurile sunt sporadice, după contact cu animale de fermă sau călătorii — Corect: Epidemii în țările în dezvoltare versus sporadice în cele dezvoltate sunt din text.\n\nContaminarea cărnii nu este rară; infecția derivată de la animale este de obicei mai puțin agresivă decât cea hidrică din subcontinentul Indian — Corect: Contaminarea cărnii și agresivitatea mai mică a zoonozei versus apa indiană sunt explicite.\n\nVHE a dispărut din Europa, carnea nefiind rezervor, igiena fiind inutilă — Incorect: VHE este comun în UE; carnea este rezervor.\n\nInfecția hidrică indiană este mai blândă decât zoonoza europeană, fără epidemii în țările în dezvoltare — Incorect: Relația de agresivitate este inversă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1284, Hepatita virală E — Igienă, carne contaminată și zoonoză (pagini PDF: 314).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1284
   ],
   "pdfPages": [
    314
   ],
   "section": "Hepatita virală E — Igienă, carne contaminată și zoonoză"
  },
  "learningObjective": "Contrastul epidemii hidrice versus cazuri sporadice zoonotice și afirmația că contaminarea cărnii nu este rară.",
  "optionRationales": [
   "Igiena și sistemul de sănătate sunt pârghiile de prevenție.",
   "Epidemii în țările în dezvoltare versus sporadice în cele dezvoltate sunt din text.",
   "Contaminarea cărnii și agresivitatea mai mică a zoonozei versus apa indiană sunt explicite.",
   "VHE este comun în UE; carnea este rezervor.",
   "Relația de agresivitate este inversă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "„Contaminarea cărnii nu este rară” este detaliul zoonotic ușor de negat."
  },
  "textbookExpressions": [
   "Contaminarea",
   "cărnii"
  ]
 },
 {
  "id": "hepatologie-adv-098",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Ciroza, ca definiție morfologică și funcțională, înseamnă:",
  "options": [
   "Arhitectura hepatică difuz alterată, ceea ce interferează cu circulația sanguină și cu funcțiile ficatului",
   "Manifestări clinice de hipertensiune portală și de insuficiență hepatică",
   "Noduli de regenerare separați prin septe fibroase, cu pierderea arhitecturii lobulare în interiorul nodulilor",
   "Păstrarea arhitecturii lobulare, fără noduli, circulația rămânând intactă",
   "Ciroza nu interferează cu circulația, funcțiile ficatului rămânând intacte"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Arhitectura hepatică difuz alterată, ceea ce interferează cu circulația sanguină și cu funcțiile ficatului — Corect: Alterarea difuză cu interferența circulației și funcțiilor este definiția din text.\n\nManifestări clinice de hipertensiune portală și de insuficiență hepatică — Corect: HTP și insuficiența hepatică sunt consecințele clinice citate.\n\nNoduli de regenerare separați prin septe fibroase, cu pierderea arhitecturii lobulare în interiorul nodulilor — Corect: Nodulii de regenerare cu septe și pierderea arhitecturii lobulare sunt trăsăturile specifice.\n\nPăstrarea arhitecturii lobulare, fără noduli, circulația rămânând intactă — Incorect: Arhitectura lobulară este pierdută, nu păstrată.\n\nCiroza nu interferează cu circulația, funcțiile ficatului rămânând intacte — Incorect: Textul afirmă tocmai interferența cu circulația și funcțiile.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1289, Ciroza hepatică — Definiție: arhitectură, septe și HTP (pagini PDF: 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1289
   ],
   "pdfPages": [
    316
   ],
   "section": "Ciroza hepatică — Definiție: arhitectură, septe și HTP"
  },
  "learningObjective": "Fixarea triadei arhitectură alterată–circulație interferată–noduli cu septe, ca sursă a HTP și a insuficienței.",
  "optionRationales": [
   "Alterarea difuză cu interferența circulației și funcțiilor este definiția din text.",
   "HTP și insuficiența hepatică sunt consecințele clinice citate.",
   "Nodulii de regenerare cu septe și pierderea arhitecturii lobulare sunt trăsăturile specifice.",
   "Arhitectura lobulară este pierdută, nu păstrată.",
   "Textul afirmă tocmai interferența cu circulația și funcțiile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Definiția prin interferența circulatorie este ușor de înlocuit cu „ficat nodular dar funcțional”."
  },
  "textbookExpressions": [
   "arhitectura hepatică",
   "sepie fibroase"
  ]
 },
 {
  "id": "hepatologie-adv-099",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Cauze mai puțin uzuale de ciroză din Cadranul 34.14 includ:",
  "options": [
   "Fibroza chistică și galactozemia",
   "Glicogenozele și boala veno-ocluzivă",
   "Medicamente precum metotrexatul; sindromul Budd-Chiari",
   "Congestia venoasă hepatică și forma idiopatică (criptogenetică)",
   "Cauza unică rămâne VHE la imunocompetenți, restul fiind abandonate"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Fibroza chistică și galactozemia — Corect: Fibroza chistică și galactozemia figurează la „altele”.\n\nGlicogenozele și boala veno-ocluzivă — Corect: Glicogenozele și boala veno-ocluzivă sunt citate.\n\nMedicamente precum metotrexatul; sindromul Budd-Chiari — Corect: Metotrexatul și Budd-Chiari sunt în cadran.\n\nCongestia venoasă hepatică și forma idiopatică (criptogenetică) — Corect: Congestia venoasă și criptogenetica completează lista.\n\nCauza unică rămâne VHE la imunocompetenți, restul fiind abandonate — Incorect: Cadranul enumeră numeroase cauze, nu un singur virus.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1289, Ciroza hepatică — Cadranul 34.14: metotrexat, Budd-Chiari, glicogenoze (pagini PDF: 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1289
   ],
   "pdfPages": [
    316
   ],
   "section": "Ciroza hepatică — Cadranul 34.14: metotrexat, Budd-Chiari, glicogenoze"
  },
  "learningObjective": "Completarea listei rare (CF, galactozemie, glicogenoze, VOD, metotrexat, Budd-Chiari).",
  "optionRationales": [
   "Fibroza chistică și galactozemia figurează la „altele”.",
   "Glicogenozele și boala veno-ocluzivă sunt citate.",
   "Metotrexatul și Budd-Chiari sunt în cadran.",
   "Congestia venoasă și criptogenetica completează lista.",
   "Cadranul enumeră numeroase cauze, nu un singur virus."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Metotrexatul și Budd-Chiari sunt detalii de cadran ușor de omis în favoarea virusurilor uzuale."
  },
  "textbookExpressions": [
   "metotrexat",
   "Budd-Chiari"
  ]
 },
 {
  "id": "hepatologie-adv-100",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Dacă cauza fibrozei este eliminată, textul distinge:",
  "options": [
   "Rezoluția fibrozei incipiente: inversare completă, cu arhitectură aproape normală",
   "Regresia cirozei constituite: ameliorare, nu restitutio ad integrum, care totuși îmbunătățește evoluția clinică",
   "Terapii antifibrotice, inclusiv strategii de transplant de celule stem, aflate în dezvoltare",
   "Transplantul hepatic ca singurul tratament disponibil pentru insuficiența hepatică",
   "Restitutio ad integrum în ciroza constituită, antifibroticele orale fiind deja standardul"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Rezoluția fibrozei incipiente: inversare completă, cu arhitectură aproape normală — Corect: Rezoluția cu arhitectură aproape normală este din text.\n\nRegresia cirozei constituite: ameliorare, nu restitutio ad integrum, care totuși îmbunătățește evoluția clinică — Corect: Regresia fără restitutio ad integrum este explicită.\n\nTerapii antifibrotice, inclusiv strategii de transplant de celule stem, aflate în dezvoltare — Corect: Celulele stem (OCR: stern) sunt menționate printre strategiile în dezvoltare.\n\nTransplantul hepatic ca singurul tratament disponibil pentru insuficiența hepatică — Corect: Transplantul rămâne singurul tratament al insuficienței.\n\nRestitutio ad integrum în ciroza constituită, antifibroticele orale fiind deja standardul — Incorect: Restitutio este negat pentru ciroza constituită; antifibroticele nu sunt standard.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1289, Ciroza hepatică — Rezoluție versus regresie, celule stem (pagini PDF: 316).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1289
   ],
   "pdfPages": [
    316
   ],
   "section": "Ciroza hepatică — Rezoluție versus regresie, celule stem"
  },
  "learningObjective": "Deosebirea rezoluției fibrozei incipiente de regresia (nu restitutio) a cirozei constituite.",
  "optionRationales": [
   "Rezoluția cu arhitectură aproape normală este din text.",
   "Regresia fără restitutio ad integrum este explicită.",
   "Celulele stem (OCR: stern) sunt menționate printre strategiile în dezvoltare.",
   "Transplantul rămâne singurul tratament al insuficienței.",
   "Restitutio este negat pentru ciroza constituită; antifibroticele nu sunt standard."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Rezoluție (incipientă) versus regresie (constituită) sunt două trepte ușor de fuzionat."
  },
  "textbookExpressions": [
   "restitutio ad integrum",
   "celule stern"
  ]
 },
 {
  "id": "hepatologie-adv-101",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Imagistica în ciroză, dincolo de Fibroscan și de biopsia cu picrosirius:",
  "options": [
   "Ecografia arată ecogenitate difuz crescută prin încărcare grasă și fibroză; evaluează sistemul porte și venele hepatice",
   "CT cu contrast în faza arterială este util pentru depistarea HCC",
   "Endoscopia detectează și tratează varicele și gastropatia portal-hipertensivă, prin ligatură sau scleroterapie",
   "Colonoscopia este efectuată ocazional pentru colopatie; RMN distinge tumori maligne și benigne, cum ar fi hemangioamele",
   "Ecografia nu vizualizează vena portă, colonoscopia înlocuind endoscopia variceală"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Ecografia arată ecogenitate difuz crescută prin încărcare grasă și fibroză; evaluează sistemul porte și venele hepatice — Corect: Ecogenitatea crescută și evaluarea porte/hepatice sunt din text.\n\nCT cu contrast în faza arterială este util pentru depistarea HCC — Corect: Faza arterială CT pentru HCC este explicită.\n\nEndoscopia detectează și tratează varicele și gastropatia portal-hipertensivă, prin ligatură sau scleroterapie — Corect: Gastropatia portal-hipertensivă cu ligatură/scleroterapie este citată.\n\nColonoscopia este efectuată ocazional pentru colopatie; RMN distinge tumori maligne și benigne, cum ar fi hemangioamele — Corect: Colopatia și hemangioamele RMN sunt menționate.\n\nEcografia nu vizualizează vena portă, colonoscopia înlocuind endoscopia variceală — Incorect: Vena portă se evaluează ecografic; colonoscopia nu înlocuiește endoscopia variceală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1290, Ciroza hepatică — CT arterial, colopatie și hemangioame (pagini PDF: 317).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1290
   ],
   "pdfPages": [
    317
   ],
   "section": "Ciroza hepatică — CT arterial, colopatie și hemangioame"
  },
  "learningObjective": "Completarea pachetului imagistic cu faza arterială CT, colopatia colonoscopică și hemangioamele RMN.",
  "optionRationales": [
   "Ecogenitatea crescută și evaluarea porte/hepatice sunt din text.",
   "Faza arterială CT pentru HCC este explicită.",
   "Gastropatia portal-hipertensivă cu ligatură/scleroterapie este citată.",
   "Colopatia și hemangioamele RMN sunt menționate.",
   "Vena portă se evaluează ecografic; colonoscopia nu înlocuiește endoscopia variceală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Colopatia și hemangioamele RMN sunt detalii imagistice nefolosite, ușor de negat."
  },
  "textbookExpressions": [
   "colopatie",
   "hemangioamele"
  ]
 },
 {
  "id": "hepatologie-adv-102",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Pentru diagnosticul și stadializarea hepatitei cronice virale, biopsia cere:",
  "options": [
   "Eșantioane adecvate ca lungime a fragmentului și ca număr de spații porte complete",
   "Teste imunocitochimice care pot identifica virusuri, ducte biliare, structuri angiogenice și markeri oncogeni",
   "În ciroza macronodulară, miezul nodulului se poate fragmenta, provocând erori de eșantionare",
   "Un fragment scurt, fără spații porte, suficient dacă elastografia este >25 kPa",
   "Imunocitochimia este inutilă, markerii oncogeni neavând loc pe biopsie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Eșantioane adecvate ca lungime a fragmentului și ca număr de spații porte complete — Corect: Lungimea și spațiile porte complete sunt din text.\n\nTeste imunocitochimice care pot identifica virusuri, ducte biliare, structuri angiogenice și markeri oncogeni — Corect: Imunocitochimia pentru virusuri, ducte, angiogeneză și oncogene este citată.\n\nÎn ciroza macronodulară, miezul nodulului se poate fragmenta, provocând erori de eșantionare — Corect: Eroarea de eșantionare prin fragmentarea nodulului macronodular este explicită.\n\nUn fragment scurt, fără spații porte, suficient dacă elastografia este >25 kPa — Incorect: Fragmentul scurt este inadecvat.\n\nImunocitochimia este inutilă, markerii oncogeni neavând loc pe biopsie — Incorect: Imunocitochimia are loc explicit.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1290, Ciroza hepatică — Biopsie: lungime, spații porte, imunocitochimie (pagini PDF: 317).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1290
   ],
   "pdfPages": [
    317
   ],
   "section": "Ciroza hepatică — Biopsie: lungime, spații porte, imunocitochimie"
  },
  "learningObjective": "Cerința de lungime și de spații porte complete, plus spectrul imunocitochimic (virus, ducte, angiogeneză, oncogene).",
  "optionRationales": [
   "Lungimea și spațiile porte complete sunt din text.",
   "Imunocitochimia pentru virusuri, ducte, angiogeneză și oncogene este citată.",
   "Eroarea de eșantionare prin fragmentarea nodulului macronodular este explicită.",
   "Fragmentul scurt este inadecvat.",
   "Imunocitochimia are loc explicit."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Spațiile porte complete și markerii oncogeni sunt criterii de calitate ușor de ignorat în favoarea Fibroscan-ului."
  },
  "textbookExpressions": [
   "spaţii porte complete",
   "markeri oncogeni"
  ]
 },
 {
  "id": "hepatologie-adv-103",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Punctajul Child-Pugh pentru bilirubină (µmol/L), albumină (g/L) și prelungirea TP (secunde) atribuie:",
  "options": [
   "Bilirubină: <34, 34–50 și >50 µmol/L pentru 1, 2 și 3 puncte",
   "Albumină: >35, 28–35 și <28 g/L",
   "Timp de protrombină: <4, 4–6 și >6 secunde peste normal",
   "Bilirubină: <10, 10–20 și >100 µmol/L, identic pragului de transplant din PBC",
   "Albumină >40 g/L primește 3 puncte, TP <4 secunde primind 3 puncte"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Bilirubină: <34, 34–50 și >50 µmol/L pentru 1, 2 și 3 puncte — Corect: Cut-off-urile 34 și 50 µmol/L sunt din cadran.\n\nAlbumină: >35, 28–35 și <28 g/L — Corect: Albumina 35 și 28 g/L sunt explicite.\n\nTimp de protrombină: <4, 4–6 și >6 secunde peste normal — Corect: TP 4 și 6 secunde peste normal sunt citate.\n\nBilirubină: <10, 10–20 și >100 µmol/L, identic pragului de transplant din PBC — Incorect: >100 µmol/L este reperul de transplant din PBC, nu punctajul Child.\n\nAlbumină >40 g/L primește 3 puncte, TP <4 secunde primind 3 puncte — Incorect: Direcțiile sunt inverse: albumina joasă și TP lung primesc punctajul mare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1291, Ciroza hepatică — Child-Pugh: cut-off-uri bilirubină, albumină, TP (pagini PDF: 318).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1291
   ],
   "pdfPages": [
    318
   ],
   "section": "Ciroza hepatică — Child-Pugh: cut-off-uri bilirubină, albumină, TP"
  },
  "learningObjective": "Memorarea pragurilor 34/50 µmol/L, 35/28 g/L și 4/6 secunde, distincte de bilirubina >100 a PBC.",
  "optionRationales": [
   "Cut-off-urile 34 și 50 µmol/L sunt din cadran.",
   "Albumina 35 și 28 g/L sunt explicite.",
   "TP 4 și 6 secunde peste normal sunt citate.",
   ">100 µmol/L este reperul de transplant din PBC, nu punctajul Child.",
   "Direcțiile sunt inverse: albumina joasă și TP lung primesc punctajul mare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 34/50 (Child) cu 100 (PBC-transplant) și inversează direcția albuminei."
  },
  "textbookExpressions": [
   "<34",
   "28-35"
  ]
 },
 {
  "id": "hepatologie-adv-104",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Indicații de transplant hepatic mai puțin abordate, alături de Child C/MELD ≥20:",
  "options": [
   "Insuficiența hepatică acută de orice cauză",
   "Hepatita cronică B, dacă ADN VHB este negativ sau scade sub analogi; recurența se previne cu imunoglobulină B plus analogi nucleozidici",
   "Hepatita autoimună neresponsivă, cu risc de reapariție după grefă",
   "PSC, boala polichistică a ficatului și oxaluria primară",
   "VHB cu ADN în creștere, fără analogi, recurența fiind de nedorit a fi prevenită"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Insuficiența hepatică acută de orice cauză — Corect: IHA de orice cauză figurează la indicații.\n\nHepatita cronică B, dacă ADN VHB este negativ sau scade sub analogi; recurența se previne cu imunoglobulină B plus analogi nucleozidici — Corect: HBIG plus analogi nucleozidici previn recurența VHB.\n\nHepatita autoimună neresponsivă, cu risc de reapariție după grefă — Corect: AIH poate reapărea.\n\nPSC, boala polichistică a ficatului și oxaluria primară — Corect: PSC, ficatul polichistic și oxaluria primară sunt citate.\n\nVHB cu ADN în creștere, fără analogi, recurența fiind de nedorit a fi prevenită — Incorect: ADN în creștere fără analogi nu este scenariul de listă; prevenția recurenței este tocmai scopul HBIG.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1292, Ciroza hepatică — Transplant: VHB cu HBIG, AIH, oxalurie (pagini PDF: 319).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1292
   ],
   "pdfPages": [
    319
   ],
   "section": "Ciroza hepatică — Transplant: VHB cu HBIG, AIH, oxalurie"
  },
  "learningObjective": "Completarea listei cu IHA de orice cauză, pachetul HBIG+analogi în VHB și indicațiile metabolice (oxalurie, ficat polichistic).",
  "optionRationales": [
   "IHA de orice cauză figurează la indicații.",
   "HBIG plus analogi nucleozidici previn recurența VHB.",
   "AIH poate reapărea.",
   "PSC, ficatul polichistic și oxaluria primară sunt citate.",
   "ADN în creștere fără analogi nu este scenariul de listă; prevenția recurenței este tocmai scopul HBIG."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "HBIG plus analogii post-VHB și oxaluria primară sunt detalii de listă nefolosite."
  },
  "textbookExpressions": [
   "imunoglobulină",
   "oxaluria"
  ]
 },
 {
  "id": "hepatologie-adv-105",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "O femeie de 44 de ani cu PBC și bilirubină persistent 120 µmol/L este discutată pentru grefă. Momentul transplantului:",
  "options": [
   "Depinde de disponibilitatea donatorului",
   "Toți pacienții cu ciroză în stadiu final (Child C; MELD ≥20; UKELD ≥49) și cei cu simptome debilitante trebuie îndrumați către un centru de transplant",
   "În PBC, bilirubina constant >100 µmol/L sau pruritul intratabil sunt repere",
   "Disponibilitatea donatorului este irelevantă, listarea făcându-se la Child A",
   "Bilirubina >100 µmol/L contraindică transplantul în PBC"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Depinde de disponibilitatea donatorului — Corect: Disponibilitatea donatorului condiționează momentul.\n\nToți pacienții cu ciroză în stadiu final (Child C; MELD ≥20; UKELD ≥49) și cei cu simptome debilitante trebuie îndrumați către un centru de transplant — Corect: Child C, MELD ≥20 și UKELD ≥49 plus simptomele debilitante cer îndrumare.\n\nÎn PBC, bilirubina constant >100 µmol/L sau pruritul intratabil sunt repere — Corect: >100 µmol/L sau pruritul intratabil sunt reperele PBC.\n\nDisponibilitatea donatorului este irelevantă, listarea făcându-se la Child A — Incorect: Listarea nu se face la Child A ca regulă.\n\nBilirubina >100 µmol/L contraindică transplantul în PBC — Incorect: Bilirubina >100 este indicație, nu contraindicație, în PBC.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1292, Ciroza hepatică — Timing: donator, Child C și bilirubină PBC >100 (pagini PDF: 319).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1292
   ],
   "pdfPages": [
    319
   ],
   "section": "Ciroza hepatică — Timing: donator, Child C și bilirubină PBC >100"
  },
  "learningObjective": "Aplicarea pragurilor Child C/MELD ≥20/UKELD ≥49 și a bilirubinei PBC >100, cu constrângerea donatorului.",
  "optionRationales": [
   "Disponibilitatea donatorului condiționează momentul.",
   "Child C, MELD ≥20 și UKELD ≥49 plus simptomele debilitante cer îndrumare.",
   ">100 µmol/L sau pruritul intratabil sunt reperele PBC.",
   "Listarea nu se face la Child A ca regulă.",
   "Bilirubina >100 este indicație, nu contraindicație, în PBC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vigneta PBC testează >100 µmol/L ca indicație, nu ca prag de excludere."
  },
  "textbookExpressions": [
   "disponibilitatea donatorului",
   "UKELD"
  ]
 },
 {
  "id": "hepatologie-adv-106",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "În hemoragia variceală acută, măsuri adjuvante din algoritmul Fig. 34.23 includ:",
  "options": [
   "Montarea unui robinet pentru ascită",
   "Administrarea de tiamină intravenos",
   "Dacă TIPS nu este disponibil, intervenție chirurgicală sau injectare cu substanțe adezive sau trombină",
   "Octreotidul figurează alături de terlipresină și somatostatină în schema vasoconstrictoare",
   "Tiamina este contraindicată, robinetul de ascită înlocuind resuscitarea"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Montarea unui robinet pentru ascită — Corect: Robinetul pentru ascită este un pas din text.\n\nAdministrarea de tiamină intravenos — Corect: Tiamina i.v. este cerută.\n\nDacă TIPS nu este disponibil, intervenție chirurgicală sau injectare cu substanțe adezive sau trombină — Corect: Adezivul sau trombina, ori chirurgia, sunt alternativele fără TIPS.\n\nOctreotidul figurează alături de terlipresină și somatostatină în schema vasoconstrictoare — Corect: Octreotidul apare în figură alături de terlipresină/somatostatină.\n\nTiamina este contraindicată, robinetul de ascită înlocuind resuscitarea — Incorect: Tiamina nu este contraindicată; resuscitarea rămâne primul pas.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1294, Ciroza hepatică — Hemoragia variceală: tiamină, robinet, adeziv (pagini PDF: 321).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1294
   ],
   "pdfPages": [
    321
   ],
   "section": "Ciroza hepatică — Hemoragia variceală: tiamină, robinet, adeziv"
  },
  "learningObjective": "Completarea algoritmului cu tiamina i.v., paracenteza (robinet) și alternativa adeziv/trombină când TIPS lipsește.",
  "optionRationales": [
   "Robinetul pentru ascită este un pas din text.",
   "Tiamina i.v. este cerută.",
   "Adezivul sau trombina, ori chirurgia, sunt alternativele fără TIPS.",
   "Octreotidul apare în figură alături de terlipresină/somatostatină.",
   "Tiamina nu este contraindicată; resuscitarea rămâne primul pas."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tiamina și injectarea cu adeziv/trombină sunt detalii de algoritm nefolosite."
  },
  "textbookExpressions": [
   "tiamină intravenos",
   "substanţe adezive"
  ]
 },
 {
  "id": "hepatologie-adv-107",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Sevrajul alcoolic la ciroticul care sângerează se tratează preferențial cu:",
  "options": [
   "Clordiazepoxid, al cărui timp de înjumătățire scade în boala avansată",
   "Lorazepam sau oxazepam, timpul de înjumătățire al clordiazepoxidului crescând în boala hepatică avansată",
   "Haloperidol ca unică linie, benzodiazepinele fiind interzise",
   "Fenobarbital de primă intenție, fără tiamină",
   "Clordiazepoxid în doze mari, timpul de înjumătățire fiind neschimbat"
  ],
  "correct": [
   1
  ],
  "explanation": "Clordiazepoxid, al cărui timp de înjumătățire scade în boala avansată — Incorect: Direcția t1/2 a clordiazepoxidului este inversă, deci nu este preferat.\n\nLorazepam sau oxazepam, timpul de înjumătățire al clordiazepoxidului crescând în boala hepatică avansată — Corect: Textul recomandă lorazepam sau oxazepam tocmai pentru că t1/2 al clordiazepoxidului crește.\n\nHaloperidol ca unică linie, benzodiazepinele fiind interzise — Incorect: Benzodiazepinele (lorazepam/oxazepam) sunt linia citată.\n\nFenobarbital de primă intenție, fără tiamină — Incorect: Tiamina i.v. este asociată, nu omisă.\n\nClordiazepoxid în doze mari, timpul de înjumătățire fiind neschimbat — Incorect: t1/2 al clordiazepoxidului crește, nu rămâne neschimbat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1294, Ciroza hepatică — Sevraj: lorazepam/oxazepam versus clordiazepoxid (pagini PDF: 321).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1294
   ],
   "pdfPages": [
    321
   ],
   "section": "Ciroza hepatică — Sevraj: lorazepam/oxazepam versus clordiazepoxid"
  },
  "learningObjective": "Alegerea lorazepam/oxazepam deoarece t1/2 al clordiazepoxidului crește, nu scade, în boala avansată.",
  "optionRationales": [
   "Direcția t1/2 a clordiazepoxidului este inversă, deci nu este preferat.",
   "Textul recomandă lorazepam sau oxazepam tocmai pentru că t1/2 al clordiazepoxidului crește.",
   "Benzodiazepinele (lorazepam/oxazepam) sunt linia citată.",
   "Tiamina i.v. este asociată, nu omisă.",
   "t1/2 al clordiazepoxidului crește, nu rămâne neschimbat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Direcția timpului de înjumătățire al clordiazepoxidului (crește) selectează lorazepam/oxazepam."
  },
  "textbookExpressions": [
   "lorazepam",
   "clordiazepoxidului"
  ]
 },
 {
  "id": "hepatologie-adv-108",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Morfopatologia PSC include aspectul clasic de:",
  "options": [
   "„Coajă de ceapă” — inflamație a ramurilor biliare mici intrahepatice asociată cu țesut cicatricial",
   "Modificări care variază de la infiltrate inflamatorii minore până la ciroză constituită",
   "Granuloame AMA-pozitive de zonă 1, identic PBC, fără stricturi",
   "Steatoză de zonă 3 cu corpi Mallory, fără leziune biliară",
   "Absența oricărei inflamații biliare, diagnosticul fiind doar serologic"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "„Coajă de ceapă” — inflamație a ramurilor biliare mici intrahepatice asociată cu țesut cicatricial — Corect: Aspectul de coajă de ceapă este descrierea clasică.\n\nModificări care variază de la infiltrate inflamatorii minore până la ciroză constituită — Corect: Spectrul de la infiltrat minor la ciroză este explicit.\n\nGranuloame AMA-pozitive de zonă 1, identic PBC, fără stricturi — Incorect: Granuloamele AMA sunt ale PBC, nu ale PSC.\n\nSteatoză de zonă 3 cu corpi Mallory, fără leziune biliară — Incorect: Steatoza de zonă 3 este a alcoolului.\n\nAbsența oricărei inflamații biliare, diagnosticul fiind doar serologic — Incorect: Histologia poate fi contributivă, inflamația biliară fiind prezentă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1300, Ciroza hepatică — PSC: coajă de ceapă (pagini PDF: 327).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1300
   ],
   "pdfPages": [
    327
   ],
   "section": "Ciroza hepatică — PSC: coajă de ceapă"
  },
  "learningObjective": "Recunoașterea leziunii „coajă de ceapă” a ductelor mici, pe spectrul până la ciroză.",
  "optionRationales": [
   "Aspectul de coajă de ceapă este descrierea clasică.",
   "Spectrul de la infiltrat minor la ciroză este explicit.",
   "Granuloamele AMA sunt ale PBC, nu ale PSC.",
   "Steatoza de zonă 3 este a alcoolului.",
   "Histologia poate fi contributivă, inflamația biliară fiind prezentă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "„Coaja de ceapă” biliară este ușor de mutat pe PBC (granuloame) sau pe alcool (Mallory)."
  },
  "textbookExpressions": [
   "coajă de ceapă",
   "ramurilor biliare mici"
  ]
 },
 {
  "id": "hepatologie-adv-109",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Tratamentul PSC, dincolo de UDCA 30 mg/kg fără beneficiu:",
  "options": [
   "Singurul tratament dovedit a fi eficient este transplantul hepatic",
   "Dozele mari de UDCA (30 mg/kg) pot fi chiar dăunătoare",
   "Colangita recurentă poate fi întâlnită înainte de debutul cirozei",
   "Stricturile extrahepatice dominante se tratează endoscopic (dilatare cu balon și stent temporar)",
   "UDCA 30 mg/kg înlocuiește transplantul, colangita recurentă fiind excepțională"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Singurul tratament dovedit a fi eficient este transplantul hepatic — Corect: Transplantul este singurul tratament dovedit eficient.\n\nDozele mari de UDCA (30 mg/kg) pot fi chiar dăunătoare — Corect: Dozele mari pot fi dăunătoare.\n\nColangita recurentă poate fi întâlnită înainte de debutul cirozei — Corect: Colangita recurentă pre-ciroză este citată.\n\nStricturile extrahepatice dominante se tratează endoscopic (dilatare cu balon și stent temporar) — Corect: Dilatarea cu balon și stentul temporar sunt pentru stricturile dominante extrahepatice.\n\nUDCA 30 mg/kg înlocuiește transplantul, colangita recurentă fiind excepțională — Incorect: UDCA în doză mare nu înlocuiește transplantul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1300, Ciroza hepatică — PSC: transplant ca unică terapie dovedită (pagini PDF: 327).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1300
   ],
   "pdfPages": [
    327
   ],
   "section": "Ciroza hepatică — PSC: transplant ca unică terapie dovedită"
  },
  "learningObjective": "Ierarhizarea transplantului ca unică terapie dovedită, cu avertismentul că UDCA în doză mare poate dăuna.",
  "optionRationales": [
   "Transplantul este singurul tratament dovedit eficient.",
   "Dozele mari pot fi dăunătoare.",
   "Colangita recurentă pre-ciroză este citată.",
   "Dilatarea cu balon și stentul temporar sunt pentru stricturile dominante extrahepatice.",
   "UDCA în doză mare nu înlocuiește transplantul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "„Poate fi chiar dăunător” la 30 mg/kg este nuanța nefolosită, dincolo de simpla ineficiență."
  },
  "textbookExpressions": [
   "dăunătoare",
   "transplantul hepatic"
  ]
 },
 {
  "id": "hepatologie-adv-110",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Ciroza biliară secundară rezultă din:",
  "options": [
   "Obstrucția prelungită (luni de zile) a ductelor biliare mari",
   "Cauze precum stenozele căii biliare principale, calculii biliari și colangita sclerozantă",
   "Ecografie și MRCP, urmate uneori de ERCP sau, dacă abordarea endoscopică este dificilă, de colangiografie transhepatică percutană",
   "Orice obstacol identificat trebuie rezolvat",
   "Obstrucția de câteva ore a unui duct de ordinul 5, fără indicație de decomprimare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Obstrucția prelungită (luni de zile) a ductelor biliare mari — Corect: Durata de luni de zile este din text.\n\nCauze precum stenozele căii biliare principale, calculii biliari și colangita sclerozantă — Corect: Stenozele, calculii și PSC sunt cauzele citate.\n\nEcografie și MRCP, urmate uneori de ERCP sau, dacă abordarea endoscopică este dificilă, de colangiografie transhepatică percutană — Corect: PTC sub ghidaj ecografic este alternativa când ERCP este dificil.\n\nOrice obstacol identificat trebuie rezolvat — Corect: Obstacolul trebuie rezolvat.\n\nObstrucția de câteva ore a unui duct de ordinul 5, fără indicație de decomprimare — Incorect: Ore de obstacol pe un duct mic nu definesc entitatea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1300, Ciroza hepatică — Ciroza biliară secundară: luni de obstacol și PTC (pagini PDF: 327).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1300
   ],
   "pdfPages": [
    327
   ],
   "section": "Ciroza hepatică — Ciroza biliară secundară: luni de obstacol și PTC"
  },
  "learningObjective": "Reținerea duratei (luni) și a algoritmului eco/MRCP → ERCP sau PTC, cu rezolvarea obstacolului identificat.",
  "optionRationales": [
   "Durata de luni de zile este din text.",
   "Stenozele, calculii și PSC sunt cauzele citate.",
   "PTC sub ghidaj ecografic este alternativa când ERCP este dificil.",
   "Obstacolul trebuie rezolvat.",
   "Ore de obstacol pe un duct mic nu definesc entitatea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fereastra „luni de zile” și PTC-ul ca alternativă la ERCP sunt detaliile de cale biliară nefolosite."
  },
  "textbookExpressions": [
   "luni de zile",
   "colangiografie transhe"
  ]
 },
 {
  "id": "hepatologie-adv-111",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Tipurile rare de hemocromatoză, dincolo de HFE/C282Y:",
  "options": [
   "Tipul 2A: gena HJV juvenilă (mutația G320V); tipul 2B: gena HAMP (93delG)",
   "Tipul 3: TfR2 (mutația Y250X), descris în sudul Europei",
   "Tipul 4: ferroportină (SLC40A1, V162del), cu transmitere autozomal dominantă",
   "Aportul alimentar de fier și agenții chelatori (acid ascorbic) pot fi relevanți; exces de alcool în istoricul a 25% dintre pacienți",
   "Tipul 4 este autozomal recesiv, HAMP fiind mutația C282Y de pe cromozomul 6"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Tipul 2A: gena HJV juvenilă (mutația G320V); tipul 2B: gena HAMP (93delG) — Corect: HJV G320V și HAMP 93delG sunt din listă.\n\nTipul 3: TfR2 (mutația Y250X), descris în sudul Europei — Corect: TfR2 Y250X în sudul Europei este explicit.\n\nTipul 4: ferroportină (SLC40A1, V162del), cu transmitere autozomal dominantă — Corect: Ferroportina SLC40A1 cu transmitere AD este citată.\n\nAportul alimentar de fier și agenții chelatori (acid ascorbic) pot fi relevanți; exces de alcool în istoricul a 25% dintre pacienți — Corect: Acidul ascorbic și cota de 25% alcool sunt din text.\n\nTipul 4 este autozomal recesiv, HAMP fiind mutația C282Y de pe cromozomul 6 — Incorect: Tipul 4 este AD; C282Y este a tipului 1, nu HAMP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1300, Ciroza hepatică — HE: HJV, HAMP, TfR2 și ferroportină (pagini PDF: 327).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1300
   ],
   "pdfPages": [
    327
   ],
   "section": "Ciroza hepatică — HE: HJV, HAMP, TfR2 și ferroportină"
  },
  "learningObjective": "Maparea tipurilor 2A/2B/3/4 (HJV, HAMP, TfR2, SLC40A1) și a cotei de 25% cu alcool.",
  "optionRationales": [
   "HJV G320V și HAMP 93delG sunt din listă.",
   "TfR2 Y250X în sudul Europei este explicit.",
   "Ferroportina SLC40A1 cu transmitere AD este citată.",
   "Acidul ascorbic și cota de 25% alcool sunt din text.",
   "Tipul 4 este AD; C282Y este a tipului 1, nu HAMP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru locusuri (HJV, HAMP, TfR2, SLC40A1) sunt concepute să fie amestecate cu C282Y."
  },
  "textbookExpressions": [
   "HAMP",
   "25% dintre pacienţi"
  ]
 },
 {
  "id": "hepatologie-adv-112",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Hepcidina, în fiziologia fierului și în HFE:",
  "options": [
   "Este sintetizată hepatic și ocupă o poziție centrală în controlul absorbției fierului",
   "Nivelul ei crește în deficitul de fier și scade odată cu supraîncărcarea",
   "Expresia hepatică a genei hepcidinei este scăzută în hemocromatoza HFE, facilitând supraîncărcarea",
   "Hepcidina blochează eliberarea fierului din eritrocite și macrofage, degradând exportatorul ferroportină",
   "Hepcidina crescută în HFE blochează fierul, expresia fiind maximală la homozigoții C282Y"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este sintetizată hepatic și ocupă o poziție centrală în controlul absorbției fierului — Corect: Sinteza hepatică și poziția centrală sunt din text.\n\nNivelul ei crește în deficitul de fier și scade odată cu supraîncărcarea — Corect: Creșterea în deficit și scăderea la supraîncărcare sunt explicite.\n\nExpresia hepatică a genei hepcidinei este scăzută în hemocromatoza HFE, facilitând supraîncărcarea — Corect: Expresia scăzută în HFE facilitează supraîncărcarea.\n\nHepcidina blochează eliberarea fierului din eritrocite și macrofage, degradând exportatorul ferroportină — Corect: Degradarea ferroportinei este mecanismul citat.\n\nHepcidina crescută în HFE blochează fierul, expresia fiind maximală la homozigoții C282Y — Incorect: În HFE hepcidina este scăzută, nu crescută.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1301, 1300, Ciroza hepatică — Hepcidină: direcția în deficit versus HFE (pagini PDF: 328, 327).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1301,
    1300
   ],
   "pdfPages": [
    328,
    327
   ],
   "section": "Ciroza hepatică — Hepcidină: direcția în deficit versus HFE"
  },
  "learningObjective": "Direcția hepcidinei (crește în deficit, scade în supraîncărcare/HFE) și degradarea ferroportinei.",
  "optionRationales": [
   "Sinteza hepatică și poziția centrală sunt din text.",
   "Creșterea în deficit și scăderea la supraîncărcare sunt explicite.",
   "Expresia scăzută în HFE facilitează supraîncărcarea.",
   "Degradarea ferroportinei este mecanismul citat.",
   "În HFE hepcidina este scăzută, nu crescută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Direcția hepcidinei (scăzută în HFE, crescută în deficit) este capcana fiziologică a capitolului."
  },
  "textbookExpressions": [
   "Hepcidina",
   "ferroportina"
  ]
 },
 {
  "id": "hepatologie-adv-113",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Heterozigoții HFE și distincția RMN față de hemosideroza secundară:",
  "options": [
   "Pot avea teste biochimice normale sau creșteri ușoare ale saturației transferinei (>45%) ori ale feritinei (de obicei >400 µg/L)",
   "Tehnica GRE, puternic ponderată T2, detectează supraîncărcările hepatice relevante (>60 µmol/g)",
   "În supraîncărcarea secundară (hemosideroză), care implică celulele reticuloendoteliale, pancreasul este cruțat",
   "Biochimia hepatică este adesea normală la homozigoți, chiar în prezența cirozei",
   "Heterozigoții au feritină <50 µg/L, iar pancreasul este cel mai afectat în hemosideroza secundară"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Pot avea teste biochimice normale sau creșteri ușoare ale saturației transferinei (>45%) ori ale feritinei (de obicei >400 µg/L) — Corect: Saturația >45% sau feritina >400 la heterozigoți sunt din text.\n\nTehnica GRE, puternic ponderată T2, detectează supraîncărcările hepatice relevante (>60 µmol/g) — Corect: GRE T2 pentru >60 µmol/g este explicit.\n\nÎn supraîncărcarea secundară (hemosideroză), care implică celulele reticuloendoteliale, pancreasul este cruțat — Corect: Pancreasul cruțat deosebește hemosideroza secundară de HE.\n\nBiochimia hepatică este adesea normală la homozigoți, chiar în prezența cirozei — Corect: Biochimia hepatică adesea normală chiar cu ciroză este citată la homozigoți.\n\nHeterozigoții au feritină <50 µg/L, iar pancreasul este cel mai afectat în hemosideroza secundară — Incorect: Feritina heterozigoților nu este <50; pancreasul este cruțat, nu maxim afectat, în forma secundară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1301, Ciroza hepatică — Heterozigoți, GRE T2 și pancreas cruțat (pagini PDF: 328).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1301
   ],
   "pdfPages": [
    328
   ],
   "section": "Ciroza hepatică — Heterozigoți, GRE T2 și pancreas cruțat"
  },
  "learningObjective": "Pragurile heterozigoților (>45%, feritină >400) și semnul RMN: pancreas cruțat în hemosideroza secundară.",
  "optionRationales": [
   "Saturația >45% sau feritina >400 la heterozigoți sunt din text.",
   "GRE T2 pentru >60 µmol/g este explicit.",
   "Pancreasul cruțat deosebește hemosideroza secundară de HE.",
   "Biochimia hepatică adesea normală chiar cu ciroză este citată la homozigoți.",
   "Feritina heterozigoților nu este <50; pancreasul este cruțat, nu maxim afectat, în forma secundară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pancreasul cruțat (hemosideroză RE) versus încărcat (HE) este distincția RMN nefolosită."
  },
  "textbookExpressions": [
   ">400",
   "pancreasul este cruţat"
  ]
 },
 {
  "id": "hepatologie-adv-114",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Carcinomul hepatocelular în hemocromatoză, dincolo de cota ~30% la cirotici:",
  "options": [
   "HCC a fost descris foarte rar la non-cirotici la care s-au putut îndepărta depozitele de fier",
   "Diagnosticul precoce este vital",
   "Riscul pentru HCC persistă dacă ciroza este prezentă, chiar după flebotomie",
   "HCC este regula la heterozigoții fără ciroză, flebotomia anulând riscul la cirotici",
   "Flebotomia elimină riscul de HCC în ciroza constituită"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "HCC a fost descris foarte rar la non-cirotici la care s-au putut îndepărta depozitele de fier — Corect: Raritatea la non-ciroticul depletat este din text.\n\nDiagnosticul precoce este vital — Corect: Diagnosticul precoce este subliniat.\n\nRiscul pentru HCC persistă dacă ciroza este prezentă, chiar după flebotomie — Corect: Persistența riscului dacă ciroza este prezentă este explicită.\n\nHCC este regula la heterozigoții fără ciroză, flebotomia anulând riscul la cirotici — Incorect: HCC nu este regula heterozigoților fără ciroză.\n\nFlebotomia elimină riscul de HCC în ciroza constituită — Incorect: Flebotomia nu anulează riscul odată ce ciroza există.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1301, Ciroza hepatică — HCC în HE: rar fără ciroză, persistă după flebotomie (pagini PDF: 328).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1301
   ],
   "pdfPages": [
    328
   ],
   "section": "Ciroza hepatică — HCC în HE: rar fără ciroză, persistă după flebotomie"
  },
  "learningObjective": "Disocierea riscului de HCC (persistă în ciroză post-flebotomie) de raritatea la non-ciroticul depletat.",
  "optionRationales": [
   "Raritatea la non-ciroticul depletat este din text.",
   "Diagnosticul precoce este subliniat.",
   "Persistența riscului dacă ciroza este prezentă este explicită.",
   "HCC nu este regula heterozigoților fără ciroză.",
   "Flebotomia nu anulează riscul odată ce ciroza există."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Persistența riscului de HCC după depleție, dacă există ciroză, este mesajul contraintuitiv."
  },
  "textbookExpressions": [
   "non-cirotici",
   "riscul pentru HCC persistă"
  ]
 },
 {
  "id": "hepatologie-adv-115",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Mecanismul molecular HFE, dincolo de C282Y:",
  "options": [
   "Proteina genei HFE interacționează cu receptorul 1 al transferinei, mediator al absorbției intestinale a fierului",
   "Fierul este preluat în exces de celulele mucoasei, depășind capacitatea de legare a transferinei",
   "Aproximativ 1–2 g de fier sunt absorbiți din intestin și circulă legați de transferină",
   "HFE blochează TfR1, absorbția intestinală fiind nulă la homozigoți",
   "Absorbția intestinală este 20–40 g/zi, identică stocului corporal al simptomaticului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Proteina genei HFE interacționează cu receptorul 1 al transferinei, mediator al absorbției intestinale a fierului — Corect: Interacțiunea HFE–TfR1 este din text.\n\nFierul este preluat în exces de celulele mucoasei, depășind capacitatea de legare a transferinei — Corect: Preluarea excesivă mucoasă, peste capacitatea transferinei, este citată.\n\nAproximativ 1–2 g de fier sunt absorbiți din intestin și circulă legați de transferină — Corect: 1-2 g absorbiți, circulând pe transferină, sunt din figura 34.27.\n\nHFE blochează TfR1, absorbția intestinală fiind nulă la homozigoți — Incorect: HFE perturbat crește, nu anulează, absorbția.\n\nAbsorbția intestinală este 20–40 g/zi, identică stocului corporal al simptomaticului — Incorect: 20-40 g este stocul corporal simptomatic, nu absorbția zilnică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1300, 1301, Ciroza hepatică — HFE–TfR1 și absorbția 1–2 g (pagini PDF: 327, 328).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1300,
    1301
   ],
   "pdfPages": [
    327,
    328
   ],
   "section": "Ciroza hepatică — HFE–TfR1 și absorbția 1–2 g"
  },
  "learningObjective": "Legarea HFE de TfR1 și a cifrei 1–2 g absorbite, distincte de stocul 20–40 g al bolnavului.",
  "optionRationales": [
   "Interacțiunea HFE–TfR1 este din text.",
   "Preluarea excesivă mucoasă, peste capacitatea transferinei, este citată.",
   "1-2 g absorbiți, circulând pe transferină, sunt din figura 34.27.",
   "HFE perturbat crește, nu anulează, absorbția.",
   "20-40 g este stocul corporal simptomatic, nu absorbția zilnică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 1–2 g (absorbție zilnică) cu 20–40 g (stocul bolnavului)."
  },
  "textbookExpressions": [
   "receptorul 1 al transferinei",
   "1-2 g de fier"
  ]
 },
 {
  "id": "hepatologie-adv-116",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Boala Wilson, dincolo de H1069Q și de penicilamină: absorbția și ceruloplasmina:",
  "options": [
   "Cuprul alimentar este absorbit în stomac și în intestinul subțire proximal, transportat la ficat legat de albumină",
   "În ficat este încorporat în apoceruloplasmină, formând ceruloplasmina, secretată în sânge; restul se excretă biliar",
   "Scăderea ceruloplasminei serice este prezentă la peste 80% dintre pacienți, dar nu este alterarea responsabilă pentru depunerile de cupru",
   "Afectează între 1 din 30.000 și 1 din 100.000; au fost identificate peste 300 de mutații",
   "Ceruloplasmina scăzută este cauza depunerilor, absorbția fiind nulă, prevalența 1/400 ca în HFE"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Cuprul alimentar este absorbit în stomac și în intestinul subțire proximal, transportat la ficat legat de albumină — Corect: Absorbția gastrică/jejunală proximală și transportul pe albumină sunt din text.\n\nÎn ficat este încorporat în apoceruloplasmină, formând ceruloplasmina, secretată în sânge; restul se excretă biliar — Corect: Incorporarea în apoceruloplasmină și excreția biliară sunt explicite.\n\nScăderea ceruloplasminei serice este prezentă la peste 80% dintre pacienți, dar nu este alterarea responsabilă pentru depunerile de cupru — Corect: >80% cu ceruloplasmină scăzută, fără ca aceasta să explice depunerile, este nuanța cheie.\n\nAfectează între 1 din 30.000 și 1 din 100.000; au fost identificate peste 300 de mutații — Corect: 1/30.000-1/100.000 și >300 mutații sunt citate.\n\nCeruloplasmina scăzută este cauza depunerilor, absorbția fiind nulă, prevalența 1/400 ca în HFE — Incorect: Ceruloplasmina scăzută nu este cauza depunerilor; prevalența nu este 1/400.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1302, Ciroza hepatică — Wilson: apoceruloplasmină și 1/30.000 (pagini PDF: 329).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1302
   ],
   "pdfPages": [
    329
   ],
   "section": "Ciroza hepatică — Wilson: apoceruloplasmină și 1/30.000"
  },
  "learningObjective": "Disocierea ceruloplasminei scăzute (>80%) de mecanismul depunerilor și reținerea prevalenței 1/30.000–1/100.000.",
  "optionRationales": [
   "Absorbția gastrică/jejunală proximală și transportul pe albumină sunt din text.",
   "Incorporarea în apoceruloplasmină și excreția biliară sunt explicite.",
   ">80% cu ceruloplasmină scăzută, fără ca aceasta să explice depunerile, este nuanța cheie.",
   "1/30.000-1/100.000 și >300 mutații sunt citate.",
   "Ceruloplasmina scăzută nu este cauza depunerilor; prevalența nu este 1/400."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "„Ceruloplasmina scăzută nu cauzează depunerile” este capcana de mecanism a paginii."
  },
  "textbookExpressions": [
   "peste 80%",
   "apoceruloplasmină"
  ]
 },
 {
  "id": "hepatologie-adv-117",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Tabloul Wilson după vârstă și inelul Kayser–Fleischer:",
  "options": [
   "Copiii se prezintă de obicei cu probleme hepatice; adulții tineri au mai frecvent manifestări neurologice (tremor, disartrie, mișcări involuntare, demență)",
   "Inelul Kayser–Fleischer este depunere de cupru în membrana lui Descemet, pigment brun-verzui la joncțiunea sclerocorneană, adesea vizibil doar la lampa cu fantă",
   "Poate să lipsească la copiii mici",
   "Hemoliza și anemia pot fi prezente",
   "Inelul Kayser–Fleischer este constant la sugar, fiind cel mai precoce semn, fără nicio formă hepatică pediatrică"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Copiii se prezintă de obicei cu probleme hepatice; adulții tineri au mai frecvent manifestări neurologice (tremor, disartrie, mișcări involuntare, demență) — Corect: Dicotomia copil hepatic / adult neurologic este din text.\n\nInelul Kayser–Fleischer este depunere de cupru în membrana lui Descemet, pigment brun-verzui la joncțiunea sclerocorneană, adesea vizibil doar la lampa cu fantă — Corect: Descemet, pigmentul brun-verzui și lampa cu fantă sunt explicite.\n\nPoate să lipsească la copiii mici — Corect: Absența posibilă la copiii mici este citată.\n\nHemoliza și anemia pot fi prezente — Corect: Hemoliza și anemia figurează la investigații.\n\nInelul Kayser–Fleischer este constant la sugar, fiind cel mai precoce semn, fără nicio formă hepatică pediatrică — Incorect: Inelul poate lipsi la copiii mici; forma hepatică pediatrică este tocmai prezentarea uzuală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1302, Ciroza hepatică — Wilson: copil hepatic vs adult neurologic, Descemet (pagini PDF: 329).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1302
   ],
   "pdfPages": [
    329
   ],
   "section": "Ciroza hepatică — Wilson: copil hepatic vs adult neurologic, Descemet"
  },
  "learningObjective": "Contrastul prezentării (copil-ficat, adult-neurologie) și al inelului KF (Descemet, poate lipsi la copiii mici).",
  "optionRationales": [
   "Dicotomia copil hepatic / adult neurologic este din text.",
   "Descemet, pigmentul brun-verzui și lampa cu fantă sunt explicite.",
   "Absența posibilă la copiii mici este citată.",
   "Hemoliza și anemia figurează la investigații.",
   "Inelul poate lipsi la copiii mici; forma hepatică pediatrică este tocmai prezentarea uzuală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Absența KF la copiii mici este contraintuitivă; distractorul o face „constantă la sugar”."
  },
  "textbookExpressions": [
   "Descemet",
   "copiii mici"
  ]
 },
 {
  "id": "hepatologie-adv-118",
  "topicId": "hepatologie",
  "type": "CS",
  "stem": "Pragul de cupru hepatic care sprijină diagnosticul de Wilson este:",
  "options": [
   ">60 µmol/g, identic pragului RMN din hemocromatoză",
   ">180 µmol/g greutate uscată, identic fierului din HE",
   ">250 µg/g greutate uscată, deși niveluri ridicate apar și în colestaza cronică",
   "<40 µg/24 h urinar, identic normalului de cuprurie",
   "Nedozabil, diagnosticul bazându-se doar pe KF"
  ],
  "correct": [
   2
  ],
  "explanation": ">60 µmol/g, identic pragului RMN din hemocromatoză — Incorect: 60 µmol/g este pragul RMN al fierului, nu al cuprului Wilson.\n\n>180 µmol/g greutate uscată, identic fierului din HE — Incorect: 180 µmol/g este fierul hepatic din HE.\n\n>250 µg/g greutate uscată, deși niveluri ridicate apar și în colestaza cronică — Corect: Textul cere >250 µg/g, cu rezerva colestazei cronice.\n\n<40 µg/24 h urinar, identic normalului de cuprurie — Incorect: <40 µg/24 h este normalul de cuprurie, nu pragul de boală.\n\nNedozabil, diagnosticul bazându-se doar pe KF — Incorect: Biopsia cu dozare de cupru aduce un aport diagnostic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1302, Ciroza hepatică — Wilson: cupru hepatic >250 µg/g (pagini PDF: 329).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1302
   ],
   "pdfPages": [
    329
   ],
   "section": "Ciroza hepatică — Wilson: cupru hepatic >250 µg/g"
  },
  "learningObjective": "Reținerea pragului >250 µg/g greutate uscată, distinct de 180 µmol/g (fier HE) și de cupruria normală <40 µg/24 h.",
  "optionRationales": [
   "60 µmol/g este pragul RMN al fierului, nu al cuprului Wilson.",
   "180 µmol/g este fierul hepatic din HE.",
   "Textul cere >250 µg/g, cu rezerva colestazei cronice.",
   "<40 µg/24 h este normalul de cuprurie, nu pragul de boală.",
   "Biopsia cu dozare de cupru aduce un aport diagnostic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 250 µg/g (Wilson) cu 180 µmol/g (fier HE) și cu 60 µmol/g (RMN)."
  },
  "textbookExpressions": [
   ">250",
   "colestaza cronică"
  ]
 },
 {
  "id": "hepatologie-adv-119",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Tratamentul și screeningul familial în Wilson, dincolo de dozele de penicilamină/trientină:",
  "options": [
   "Dietă săracă în cupru, cu excluderea ciocolatei și a arahidelor",
   "Toți frații și copiii pacienților trebuie investigați; analiza mutației ATP7B este utilă",
   "Zinc se administrează chiar și la asimptomatici, dacă există dovezi de acumulare de cupru",
   "Afectarea neurologică este permanentă; IHA sau ciroza decompensată se tratează prin transplant",
   "Dieta include ciocolată și arahide, screeningul familial fiind inutil, zincul fiind interzis la asimptomatici"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Dietă săracă în cupru, cu excluderea ciocolatei și a arahidelor — Corect: Excluderea ciocolatei și arahidelor este din text.\n\nToți frații și copiii pacienților trebuie investigați; analiza mutației ATP7B este utilă — Corect: Screeningul fraților și copiilor, cu ATP7B, este explicit.\n\nZinc se administrează chiar și la asimptomatici, dacă există dovezi de acumulare de cupru — Corect: Zincul la asimptomaticii cu acumulare este citat.\n\nAfectarea neurologică este permanentă; IHA sau ciroza decompensată se tratează prin transplant — Corect: Ireversibilitatea neurologică și transplantul în IHA/decompensare sunt menționate.\n\nDieta include ciocolată și arahide, screeningul familial fiind inutil, zincul fiind interzis la asimptomatici — Incorect: Dieta și screeningul merg în direcția opusă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1302, Ciroza hepatică — Wilson: ciocolată/arahide, zinc la asimptomatici (pagini PDF: 329).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1302
   ],
   "pdfPages": [
    329
   ],
   "section": "Ciroza hepatică — Wilson: ciocolată/arahide, zinc la asimptomatici"
  },
  "learningObjective": "Completarea chelării cu dieta (ciocolată, arahide), zincul la asimptomatici și caracterul ireversibil neurologic.",
  "optionRationales": [
   "Excluderea ciocolatei și arahidelor este din text.",
   "Screeningul fraților și copiilor, cu ATP7B, este explicit.",
   "Zincul la asimptomaticii cu acumulare este citat.",
   "Ireversibilitatea neurologică și transplantul în IHA/decompensare sunt menționate.",
   "Dieta și screeningul merg în direcția opusă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Ciocolata/arahidele și zincul la ruda asimptomatică sunt detalii de viață reală nefolosite."
  },
  "textbookExpressions": [
   "ciocolata",
   "arahidele"
  ]
 },
 {
  "id": "hepatologie-adv-120",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Etanolul, dincolo de NADH/NAD și de cota 10–20% care fac ciroză:",
  "options": [
   "Modificările redox afectează metabolismul carbohidraților și proteinelor și cauzează necroza centrolobulară tipică",
   "Acetaldehida formată prin oxidarea etanolului poate contribui, prin efectul asupra proteinelor hepatice, la leziunea celulară",
   "Alcoolul afectează direct celulele stelate, transformându-le în miofibroblaste producătoare de colagen",
   "Fibroza perivenulară din jurul venelor centrolobulare poate progresa spre ciroză fără a fi precedată de hepatită",
   "Necroza este de zonă 1, stelatele fiind inerte, fibroza perivenulară neputând ocoli hepatita"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Modificările redox afectează metabolismul carbohidraților și proteinelor și cauzează necroza centrolobulară tipică — Corect: Necroza centrolobulară prin redox pe carbohidrați/proteine este din text.\n\nAcetaldehida formată prin oxidarea etanolului poate contribui, prin efectul asupra proteinelor hepatice, la leziunea celulară — Corect: Acetaldehida ca factor contributiv este citată.\n\nAlcoolul afectează direct celulele stelate, transformându-le în miofibroblaste producătoare de colagen — Corect: Transformarea stelată în miofibroblast este explicită.\n\nFibroza perivenulară din jurul venelor centrolobulare poate progresa spre ciroză fără a fi precedată de hepatită — Corect: Progresia perivenulară fără hepatită prealabilă este menționată.\n\nNecroza este de zonă 1, stelatele fiind inerte, fibroza perivenulară neputând ocoli hepatita — Incorect: Necroza este centrolobulară/zona 3, nu zona 1; stelatele nu sunt inerte.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1303, Boala hepatică alcoolică — Acetaldehidă, stelate și fibroză perivenulară (pagini PDF: 330).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1303
   ],
   "pdfPages": [
    330
   ],
   "section": "Boala hepatică alcoolică — Acetaldehidă, stelate și fibroză perivenulară"
  },
  "learningObjective": "Legarea redox-ului de necroza centrolobulară, a acetaldehidei și a căii stelate–fibroză perivenulară care sare peste hepatită.",
  "optionRationales": [
   "Necroza centrolobulară prin redox pe carbohidrați/proteine este din text.",
   "Acetaldehida ca factor contributiv este citată.",
   "Transformarea stelată în miofibroblast este explicită.",
   "Progresia perivenulară fără hepatită prealabilă este menționată.",
   "Necroza este centrolobulară/zona 3, nu zona 1; stelatele nu sunt inerte."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Calea perivenulară care ocolește hepatita este detaliul natural-istoric ușor de negat."
  },
  "textbookExpressions": [
   "Acetaldehida",
   "fibroza perivenulară"
  ]
 },
 {
  "id": "hepatologie-adv-121",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Corpusculii Mallory din hepatita alcoolică:",
  "options": [
   "Sunt incluziuni citoplasmatice dense, observate uneori în hepatocite",
   "Mitocondriile uriașe sunt, de asemenea, caracteristice hepatitei alcoolice",
   "Sunt sugestivi, dar nu specifici pentru leziunile alcoolice, regăsindu-se și în Wilson și în PBC",
   "Dacă consumul continuă, hepatita alcoolică poate progresa spre ciroză",
   "Sunt patognomonici alcoolului, fiind absenți în Wilson și PBC, mitocondriile uriașe nefigurând"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Sunt incluziuni citoplasmatice dense, observate uneori în hepatocite — Corect: Incluziunile citoplasmatice dense sunt din text.\n\nMitocondriile uriașe sunt, de asemenea, caracteristice hepatitei alcoolice — Corect: Mitocondriile uriașe sunt caracteristice.\n\nSunt sugestivi, dar nu specifici pentru leziunile alcoolice, regăsindu-se și în Wilson și în PBC — Corect: Nespecificitatea, cu Wilson și PBC ca exemple, este explicită.\n\nDacă consumul continuă, hepatita alcoolică poate progresa spre ciroză — Corect: Progresia spre ciroză dacă se continuă alcoolul este citată.\n\nSunt patognomonici alcoolului, fiind absenți în Wilson și PBC, mitocondriile uriașe nefigurând — Incorect: Nu sunt patognomonici; se găsesc și în Wilson/PBC.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1303, Boala hepatică alcoolică — Mallory nespecifici și mitocondrii uriașe (pagini PDF: 330).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1303
   ],
   "pdfPages": [
    330
   ],
   "section": "Boala hepatică alcoolică — Mallory nespecifici și mitocondrii uriașe"
  },
  "learningObjective": "Recunoașterea Mallory ca sugestivi dar nespecifici (și în Wilson/PBC) plus mitocondriile uriașe.",
  "optionRationales": [
   "Incluziunile citoplasmatice dense sunt din text.",
   "Mitocondriile uriașe sunt caracteristice.",
   "Nespecificitatea, cu Wilson și PBC ca exemple, este explicită.",
   "Progresia spre ciroză dacă se continuă alcoolul este citată.",
   "Nu sunt patognomonici; se găsesc și în Wilson/PBC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Nespecificitatea Mallory (Wilson, PBC) este capcana de specificitate a ultimei pagini."
  },
  "textbookExpressions": [
   "Corpusculii Mallory",
   "mitocondriile uriaşe"
  ]
 },
 {
  "id": "hepatologie-adv-122",
  "topicId": "hepatologie",
  "type": "CM",
  "stem": "Un bărbat cu hepatomegalie marcată, fără icter, consumator de alcool, are steatoză la biopsie. Ficatul gras alcoolic:",
  "options": [
   "De multe ori nu există simptome sau semne",
   "Simptomele abdominale vagi (greață, vărsături, diaree) se datorează mai degrabă efectelor alcoolului asupra tubului digestiv",
   "Poate exista hepatomegalie, uneori foarte exprimată, împreună cu alte manifestări de boală hepatică cronică",
   "Grăsimile dispar la oprirea consumului; nu există distrugere de celule hepatice",
   "Steatoza este ireversibilă după o singură expunere, cu necroză de zonă 1 și AMA M2 pozitiv"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "De multe ori nu există simptome sau semne — Corect: Absența frecventă a simptomelor este din text.\n\nSimptomele abdominale vagi (greață, vărsături, diaree) se datorează mai degrabă efectelor alcoolului asupra tubului digestiv — Corect: Simptomele GI vagi țin de efectul alcoolului pe tubul digestiv.\n\nPoate exista hepatomegalie, uneori foarte exprimată, împreună cu alte manifestări de boală hepatică cronică — Corect: Hepatomegalia uneori foarte exprimată este citată.\n\nGrăsimile dispar la oprirea consumului; nu există distrugere de celule hepatice — Corect: Dispariția grăsimilor la oprire, fără distrugere celulară, este explicită.\n\nSteatoza este ireversibilă după o singură expunere, cu necroză de zonă 1 și AMA M2 pozitiv — Incorect: Steatoza este reversibilă; nu este PBC de zonă 1.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 34, p. 1303, Boala hepatică alcoolică — Steatoza: clinic silențioasă, reversibilă (pagini PDF: 330).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 34,
   "printedPages": [
    1303
   ],
   "pdfPages": [
    330
   ],
   "section": "Boala hepatică alcoolică — Steatoza: clinic silențioasă, reversibilă"
  },
  "learningObjective": "Recunoașterea formei adesea asimptomatice, a hepatomegaliei marcate și a dispariției grăsimilor la abstinență.",
  "optionRationales": [
   "Absența frecventă a simptomelor este din text.",
   "Simptomele GI vagi țin de efectul alcoolului pe tubul digestiv.",
   "Hepatomegalia uneori foarte exprimată este citată.",
   "Dispariția grăsimilor la oprire, fără distrugere celulară, este explicită.",
   "Steatoza este reversibilă; nu este PBC de zonă 1."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reversibilitatea steatozei la abstinență este contraintuitivă față de o hepatomegalie „foarte exprimată”."
  },
  "textbookExpressions": [
   "nu există simptome",
   "Grăsimile dispar"
  ]
 }
];
