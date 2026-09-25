import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_TROMBOEMBOLISM:(Question&Record<string,unknown>)[]=[
 {
  "id": "tromboembolism-adv-001",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Despre patogeneza trombozei arteriale și venoase, conform triadei lui Virchow, sunt corecte afirmațiile:",
  "options": [
   "Staza fluxului sanguin și hipercoagulabilitatea sunt mai relevante pentru patogeneza trombozei venoase",
   "Turbulența fluxului sanguin și disfuncția peretelui vascular, produse de plăcile ateromatoase, sunt factori ai trombozei arteriale",
   "Coagulii arteriali sunt descriși ca trombi roșii, reflectând contribuția fibrinei și a hematiilor",
   "Coagulii venoși sunt descriși ca trombi roșii, reflectând contribuția fibrinei și a hematiilor",
   "Ruptura plăcilor ateromatoase contribuie la inițierea trombozei venoase"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Staza fluxului sanguin și hipercoagulabilitatea sunt mai relevante pentru patogeneza trombozei venoase — Corect: Staza şi hipercoagulabilitatea sunt mai relevante pentru patogeneza trombozei venoase, conform textului.\n\nTurbulența fluxului sanguin și disfuncția peretelui vascular, produse de plăcile ateromatoase, sunt factori ai trombozei arteriale — Corect: Turbulenţa şi disfuncţia peretelui vascular, produse de plăcile ateromatoase, sunt factori ai trombozei arteriale.\n\nCoagulii arteriali sunt descriși ca trombi roșii, reflectând contribuția fibrinei și a hematiilor — Incorect: Coagulii arteriali sunt descrişi ca trombi albi, nu trombi roşii; fibrina şi hematiile caracterizează trombii venoşi.\n\nCoagulii venoși sunt descriși ca trombi roșii, reflectând contribuția fibrinei și a hematiilor — Corect: Coagulii venoşi sunt descrişi ca trombi roşii, reflectând contribuţia fibrinei şi a hematiilor la formarea lor.\n\nRuptura plăcilor ateromatoase contribuie la inițierea trombozei venoase — Incorect: Ruptura plăcilor ateromatoase contribuie la iniţierea trombozei arteriale, nu a celei venoase.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1002, 1001, Patogeneza trombozei — Tromboza arterială și venoasă (pagini PDF: 192, 191).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1002,
    1001
   ],
   "pdfPages": [
    192,
    191
   ],
   "section": "Patogeneza trombozei — Tromboza arterială și venoasă"
  },
  "learningObjective": "Diferențierea contribuției relative a componentelor triadei lui Virchow și a compoziției trombilor în tromboza arterială față de cea venoasă.",
  "optionRationales": [
   "Staza şi hipercoagulabilitatea sunt mai relevante pentru patogeneza trombozei venoase, conform textului.",
   "Turbulenţa şi disfuncţia peretelui vascular, produse de plăcile ateromatoase, sunt factori ai trombozei arteriale.",
   "Coagulii arteriali sunt descrişi ca trombi albi, nu trombi roşii; fibrina şi hematiile caracterizează trombii venoşi.",
   "Coagulii venoşi sunt descrişi ca trombi roşii, reflectând contribuţia fibrinei şi a hematiilor la formarea lor.",
   "Ruptura plăcilor ateromatoase contribuie la iniţierea trombozei arteriale, nu a celei venoase."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează atribuirea culorii trombilor și extind la venos un mecanism specific arterial; trebuie recunoscute simultan două perechi de asocieri corecte."
  },
  "textbookExpressions": [
   "trombi roşii",
   "trombi albi"
  ]
 },
 {
  "id": "tromboembolism-adv-002",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "În algoritmul diagnostic NICE pentru suspiciunea de tromboză venoasă profundă (TVP), sunt corecte afirmațiile:",
  "options": [
   "La un scor Wells care indică TVP improbabilă, următorul pas este determinarea D-dimerilor",
   "La un scor Wells care indică TVP probabilă, se indică direct ultrasonografia venelor proximale, fără D-dimeri",
   "D-dimeri sub valoarea-prag, la un scor Wells improbabil, exclud complet și cu certitudine absolută TEV",
   "O ultrasonografie negativă a venelor proximale, la un pacient cu scor Wells care indică TVP probabilă, exclude prin ea însăși o TVP distală",
   "D-dimeri crescuți, la un scor Wells care indică TVP improbabilă, impun examinare imagistică de mare acuratețe"
  ],
  "correct": [
   0,
   1,
   4
  ],
  "explanation": "La un scor Wells care indică TVP improbabilă, următorul pas este determinarea D-dimerilor — Corect: La scor Wells improbabil, textul indică testarea D-dimerilor ca pas următor.\n\nLa un scor Wells care indică TVP probabilă, se indică direct ultrasonografia venelor proximale, fără D-dimeri — Corect: La scor Wells probabil, examinarea imagistică este necesară direct, prin ultrasonografia venelor proximale.\n\nD-dimeri sub valoarea-prag, la un scor Wells improbabil, exclud complet și cu certitudine absolută TEV — Incorect: Textul precizează o rată mică de eşec (<2% în 3 luni); TEV nu poate fi exclusă complet prin această abordare.\n\nO ultrasonografie negativă a venelor proximale, la un pacient cu scor Wells care indică TVP probabilă, exclude prin ea însăși o TVP distală — Incorect: O scanare negativă limitată la sistemul proximal nu exclude TVP distală atunci când scorul Wells indică probabilitate; este necesară evaluare suplimentară.\n\nD-dimeri crescuți, la un scor Wells care indică TVP improbabilă, impun examinare imagistică de mare acuratețe — Corect: Pacienţii cu D-dimeri crescuţi şi scor Wells improbabil necesită imagistică de mare acurateţe pentru confirmare sau excludere.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1004, Diagnostic — Scorul de risc și măsurarea D-dimerilor (pagini PDF: 194).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1004
   ],
   "pdfPages": [
    194
   ],
   "section": "Diagnostic — Scorul de risc și măsurarea D-dimerilor"
  },
  "learningObjective": "Aplicarea secvențială a scorului Wells și a D-dimerilor și recunoașterea limitelor fiecărui pas al algoritmului diagnostic pentru TVP.",
  "optionRationales": [
   "La scor Wells improbabil, textul indică testarea D-dimerilor ca pas următor.",
   "La scor Wells probabil, examinarea imagistică este necesară direct, prin ultrasonografia venelor proximale.",
   "Textul precizează o rată mică de eşec (<2% în 3 luni); TEV nu poate fi exclusă complet prin această abordare.",
   "O scanare negativă limitată la sistemul proximal nu exclude TVP distală atunci când scorul Wells indică probabilitate; este necesară evaluare suplimentară.",
   "Pacienţii cu D-dimeri crescuţi şi scor Wells improbabil necesită imagistică de mare acurateţe pentru confirmare sau excludere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Doi distractori exagerează în sens absolut nuanțe pe care textul le formulează cu rezerve explicite (rată mică de eșec, scanare limitată la sistemul proximal)."
  },
  "textbookExpressions": [
   "rată mică de eşec",
   "nu va exclude diagnosticul"
  ]
 },
 {
  "id": "tromboembolism-adv-003",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Despre explorarea imagistică a emboliei pulmonare (EP) sunt corecte afirmațiile:",
  "options": [
   "Angiografia pulmonară prin tomografie computerizată (CTPA) este tehnica cea mai frecvent utilizată și poate oferi un diagnostic alternativ atunci când EP este exclusă",
   "Scintigrafia pulmonară de ventilație-perfuzie are avantajul unei doze mai mici de radiații și este preferată la pacienții cu insuficiență renală sau alergie la contrast",
   "Un rezultat normal al scintigrafiei de ventilație-perfuzie exclude diagnosticul de EP",
   "Scintigrafia de ventilație-perfuzie este preferată la majoritatea pacienților, fiind mai disponibilă decât CTPA",
   "Anomaliile de perfuzie care apar concordant cu o ventilație de asemenea anormală susțin diagnosticul de EP"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Angiografia pulmonară prin tomografie computerizată (CTPA) este tehnica cea mai frecvent utilizată și poate oferi un diagnostic alternativ atunci când EP este exclusă — Corect: CTPA este descrisă drept cea mai comună tehnică imagistică şi poate identifica un diagnostic alternativ.\n\nScintigrafia pulmonară de ventilație-perfuzie are avantajul unei doze mai mici de radiații și este preferată la pacienții cu insuficiență renală sau alergie la contrast — Corect: Doza mai mică de radiaţii face scintigrafia preferată la insuficienţă renală sau alergie la contrastul intravenos.\n\nUn rezultat normal al scintigrafiei de ventilație-perfuzie exclude diagnosticul de EP — Corect: Rezultatul normal al scintigrafiei de ventilaţie-perfuzie exclude diagnosticul de EP, conform textului.\n\nScintigrafia de ventilație-perfuzie este preferată la majoritatea pacienților, fiind mai disponibilă decât CTPA — Incorect: Textul indică opusul: scintigrafia este mai puţin disponibilă decât CTPA.\n\nAnomaliile de perfuzie care apar concordant cu o ventilație de asemenea anormală susțin diagnosticul de EP — Incorect: Diagnosticul de EP se bazează pe anomalii de perfuzie care contrastează cu o ventilaţie normală; defectele concordante sunt nespecifice şi pot proveni din alte boli pulmonare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1005, Diagnostic — Examinarea imagistică a EP (pagini PDF: 195).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1005
   ],
   "pdfPages": [
    195
   ],
   "section": "Diagnostic — Examinarea imagistică a EP"
  },
  "learningObjective": "Compararea indicațiilor, avantajelor și limitelor CTPA și ale scintigrafiei de ventilație-perfuzie și interpretarea corectă a discordanței perfuzie-ventilație.",
  "optionRationales": [
   "CTPA este descrisă drept cea mai comună tehnică imagistică şi poate identifica un diagnostic alternativ.",
   "Doza mai mică de radiaţii face scintigrafia preferată la insuficienţă renală sau alergie la contrastul intravenos.",
   "Rezultatul normal al scintigrafiei de ventilaţie-perfuzie exclude diagnosticul de EP, conform textului.",
   "Textul indică opusul: scintigrafia este mai puţin disponibilă decât CTPA.",
   "Diagnosticul de EP se bazează pe anomalii de perfuzie care contrastează cu o ventilaţie normală; defectele concordante sunt nespecifice şi pot proveni din alte boli pulmonare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează disponibilitatea relativă a celor două tehnici și confundă defectul concordant, nespecific, cu tiparul discordant care susține EP."
  },
  "textbookExpressions": [
   "diagnosticul alternativ",
   "contrastând cu"
  ]
 },
 {
  "id": "tromboembolism-adv-004",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Privind sincronizarea anticoagulării cu investigațiile în suspiciunea de tromboembolism venos (TEV), sunt corecte afirmațiile:",
  "options": [
   "Se administrează o primă doză de anticoagulant dacă investigarea suspiciunii de EP va depăși un interval de o oră",
   "Se administrează o primă doză de anticoagulant dacă investigarea suspiciunii de TVP va depăși un interval de 4 ore",
   "Pragul de timp până la anticoagularea empirică este identic pentru suspiciunea de TVP și pentru cea de EP",
   "Pacienții internați și femeile gravide cu suspiciune de TEV trebuie considerați cu risc înalt și necesită o examinare imagistică adecvată",
   "Abordarea diagnostică descrisă, bazată pe scorul Wells, se aplică identic pacienților internați și gravidelor, ca și celor din ambulatoriu"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Se administrează o primă doză de anticoagulant dacă investigarea suspiciunii de EP va depăși un interval de o oră — Corect: Textul indică administrarea unei prime doze de anticoagulant dacă investigarea EP depăşeşte o oră.\n\nSe administrează o primă doză de anticoagulant dacă investigarea suspiciunii de TVP va depăși un interval de 4 ore — Corect: Pentru suspiciunea de TVP, pragul menţionat pentru prima doză de anticoagulant este de 4 ore.\n\nPragul de timp până la anticoagularea empirică este identic pentru suspiciunea de TVP și pentru cea de EP — Incorect: Pragurile diferă: o oră pentru EP şi 4 ore pentru TVP.\n\nPacienții internați și femeile gravide cu suspiciune de TEV trebuie considerați cu risc înalt și necesită o examinare imagistică adecvată — Corect: Pacienţii internaţi şi gravidele sunt consideraţi cu risc înalt şi necesită o examinare imagistică adecvată.\n\nAbordarea diagnostică descrisă, bazată pe scorul Wells, se aplică identic pacienților internați și gravidelor, ca și celor din ambulatoriu — Incorect: Textul precizează că abordarea descrisă se aplică doar pacienţilor din asistenţa primară sau din departamentele de urgenţă, nu şi pacienţilor internaţi sau gravidelor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1005, Diagnostic — Calendarul investigațiilor și prezentările speciale (pagini PDF: 195).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1005
   ],
   "pdfPages": [
    195
   ],
   "section": "Diagnostic — Calendarul investigațiilor și prezentările speciale"
  },
  "learningObjective": "Diferențierea pragurilor de timp pentru anticoagularea empirică în EP față de TVP și recunoașterea populațiilor la care algoritmul standard nu se aplică.",
  "optionRationales": [
   "Textul indică administrarea unei prime doze de anticoagulant dacă investigarea EP depăşeşte o oră.",
   "Pentru suspiciunea de TVP, pragul menţionat pentru prima doză de anticoagulant este de 4 ore.",
   "Pragurile diferă: o oră pentru EP şi 4 ore pentru TVP.",
   "Pacienţii internaţi şi gravidele sunt consideraţi cu risc înalt şi necesită o examinare imagistică adecvată.",
   "Textul precizează că abordarea descrisă se aplică doar pacienţilor din asistenţa primară sau din departamentele de urgenţă, nu şi pacienţilor internaţi sau gravidelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Necesită reținerea a două praguri numerice distincte pe boli diferite și a excepției populaționale, nu doar a unei singure valori."
  },
  "textbookExpressions": [
   "o primă doză de anticoagulant",
   "risc înalt"
  ]
 },
 {
  "id": "tromboembolism-adv-005",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Privind fazele tratamentului anticoagulant și introducerea anticoagulantelor orale directe (DOAC) în tromboembolismul venos (TEV), sunt corecte afirmațiile:",
  "options": [
   "Faza acută a tratamentului anticoagulant are durata de 5-10 zile, iar faza de menținere minimum 3 luni",
   "Edoxabanul și dabigatranul sunt precedate de anticoagulare parenterală timp de 5 zile, înaintea inițierii DOAC în monoterapie",
   "Apixabanul și rivaroxabanul necesită, la fel ca edoxabanul, 5 zile de anticoagulare parenterală înainte de inițierea DOAC",
   "Apixabanul și rivaroxabanul se administrează singure, de la începutul tratamentului, în doză inițială mai mare, timp de 7 și, respectiv, 21 de zile",
   "Toate cele patru DOAC autorizate pentru tratamentul TEV sunt inhibitori direcți ai factorului Xa"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Faza acută a tratamentului anticoagulant are durata de 5-10 zile, iar faza de menținere minimum 3 luni — Corect: Textul descrie faza acută cu durata de 5-10 zile şi faza de menţinere cu durata minimă de 3 luni.\n\nEdoxabanul și dabigatranul sunt precedate de anticoagulare parenterală timp de 5 zile, înaintea inițierii DOAC în monoterapie — Corect: Edoxabanul şi dabigatranul se introduc după 5 zile de anticoagulare parenterală, fără suprapunere.\n\nApixabanul și rivaroxabanul necesită, la fel ca edoxabanul, 5 zile de anticoagulare parenterală înainte de inițierea DOAC — Incorect: Apixabanul şi rivaroxabanul nu necesită anticoagulare parenterală; DOAC este folosit singur de la început.\n\nApixabanul și rivaroxabanul se administrează singure, de la începutul tratamentului, în doză inițială mai mare, timp de 7 și, respectiv, 21 de zile — Corect: Apixabanul şi rivaroxabanul sunt folosite singure, în doză iniţială mai mare, timp de 7, respectiv 21 de zile.\n\nToate cele patru DOAC autorizate pentru tratamentul TEV sunt inhibitori direcți ai factorului Xa — Incorect: Trei dintre cele patru DOAC sunt inhibitori ai factorului Xa; dabigatranul este inhibitor direct al trombinei (factorul IIa).\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1007, 1006, Tratament — Tratamentul inițial; Anticoagulantele orale directe (pagini PDF: 197, 196).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1007,
    1006
   ],
   "pdfPages": [
    197,
    196
   ],
   "section": "Tratament — Tratamentul inițial; Anticoagulantele orale directe"
  },
  "learningObjective": "Distingerea schemelor de inițiere a DOAC și a fazelor tratamentului anticoagulant standard al TEV.",
  "optionRationales": [
   "Textul descrie faza acută cu durata de 5-10 zile şi faza de menţinere cu durata minimă de 3 luni.",
   "Edoxabanul şi dabigatranul se introduc după 5 zile de anticoagulare parenterală, fără suprapunere.",
   "Apixabanul şi rivaroxabanul nu necesită anticoagulare parenterală; DOAC este folosit singur de la început.",
   "Apixabanul şi rivaroxabanul sunt folosite singure, în doză iniţială mai mare, timp de 7, respectiv 21 de zile.",
   "Trei dintre cele patru DOAC sunt inhibitori ai factorului Xa; dabigatranul este inhibitor direct al trombinei (factorul IIa)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele patru DOAC se împart în două scheme de inițiere diferite și un mecanism excepțional (dabigatran); confuzia dintre ele este ușor de făcut fără citire atentă."
  },
  "textbookExpressions": [
   "fără nicio suprapunere",
   "inhibitor direct al"
  ]
 },
 {
  "id": "tromboembolism-adv-006",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Privind anticoagularea în sarcină și în perioada alăptării, în tratamentul tromboembolismului venos, sunt corecte afirmațiile:",
  "options": [
   "Heparina cu greutate moleculară mică (LMWH) reprezintă tratamentul de elecție în sarcină, deoarece nu traversează placenta",
   "Warfarina produce embriopatie caracteristică între săptămâna a 6-a și a 12-a de sarcină",
   "Warfarina este sigură pentru făt până în cea de-a 6-a săptămână de sarcină",
   "Atât warfarina, cât și LMWH sunt sigure la femeile care alăptează",
   "Consecința expunerii fătului la anticoagulantele orale directe (DOAC) este, în prezent, bine stabilită ca fiind sigură"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Heparina cu greutate moleculară mică (LMWH) reprezintă tratamentul de elecție în sarcină, deoarece nu traversează placenta — Corect: LMWH nu traversează placenta, fiind tratamentul de elecţie pe toată durata sarcinii.\n\nWarfarina produce embriopatie caracteristică între săptămâna a 6-a și a 12-a de sarcină — Corect: Warfarina produce embriopatie, cu anomalii scheletice, între săptămânile 6 şi 12 de sarcină.\n\nWarfarina este sigură pentru făt până în cea de-a 6-a săptămână de sarcină — Corect: La femeile care rămân însărcinate sub warfarină, medicamentul este descris ca sigur până în această fereastră timpurie.\n\nAtât warfarina, cât și LMWH sunt sigure la femeile care alăptează — Corect: Warfarina şi LMWH sunt ambele descrise ca sigure în perioada alăptării.\n\nConsecința expunerii fătului la anticoagulantele orale directe (DOAC) este, în prezent, bine stabilită ca fiind sigură — Incorect: Textul precizează că consecinţa expunerii fetale la DOAC este, în acest moment, incertă, nu stabilită ca sigură.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1007, 1008, Tratament — Situații speciale: femeile gravide și mamele care alăptează (pagini PDF: 197, 198).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1007,
    1008
   ],
   "pdfPages": [
    197,
    198
   ],
   "section": "Tratament — Situații speciale: femeile gravide și mamele care alăptează"
  },
  "learningObjective": "Recunoașterea ferestrei de siguranță și a riscurilor specifice fiecărui anticoagulant folosit în sarcină și alăptare.",
  "optionRationales": [
   "LMWH nu traversează placenta, fiind tratamentul de elecţie pe toată durata sarcinii.",
   "Warfarina produce embriopatie, cu anomalii scheletice, între săptămânile 6 şi 12 de sarcină.",
   "La femeile care rămân însărcinate sub warfarină, medicamentul este descris ca sigur până în această fereastră timpurie.",
   "Warfarina şi LMWH sunt ambele descrise ca sigure în perioada alăptării.",
   "Textul precizează că consecinţa expunerii fetale la DOAC este, în acest moment, incertă, nu stabilită ca sigură."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Combină o fereastră temporală precisă de siguranță cu o excepție de alăptare și o afirmație fals absolută despre DOAC, ale cărei nuanțe reale (incertitudine) sunt ușor de ratat."
  },
  "textbookExpressions": [
   "nu traversează placenta",
   "incertă"
  ]
 },
 {
  "id": "tromboembolism-adv-007",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "La un pacient cu embolie pulmonară masivă și hipotensiune arterială sistolică (TAS ≤90 mmHg), ce beneficiu specific poate oferi tromboliza sistemică, comparativ cu anticoagularea singură?",
  "options": [
   "Dizolvarea trombului existent, cu restabilirea rapidă a perfuziei pulmonare",
   "Prevenirea extinderii trombului, fără dizolvarea celui deja format",
   "Un risc de hemoragie majoră mai mic decât cel al anticoagulării",
   "Eliminarea completă a necesității anticoagulării ulterioare",
   "Absența oricărui risc de hemoragie intracraniană"
  ],
  "correct": [
   0
  ],
  "explanation": "Dizolvarea trombului existent, cu restabilirea rapidă a perfuziei pulmonare — Corect: Tromboliza dizolvă trombul, spre deosebire de anticoagulante, restabilind rapid perfuzia pulmonară în EP masivă cu hipotensiune.\n\nPrevenirea extinderii trombului, fără dizolvarea celui deja format — Incorect: Prevenirea extinderii trombului este efectul anticoagulantelor; tromboliza acţionează prin dizolvarea trombului deja format.\n\nUn risc de hemoragie majoră mai mic decât cel al anticoagulării — Incorect: Tromboliza prezintă un risc mai mare de hemoragie majoră decât anticoagularea, inclusiv un risc de 2% de hemoragie intracraniană.\n\nEliminarea completă a necesității anticoagulării ulterioare — Incorect: Anticoagularea rămâne necesară şi după tromboliză, pentru prevenirea recurenţei.\n\nAbsența oricărui risc de hemoragie intracraniană — Incorect: Riscul de hemoragie intracraniană este explicit menţionat, la aproximativ 2%, nu absent.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1008, Tratament — Rolul trombolizei (pagini PDF: 198).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1008
   ],
   "pdfPages": [
    198
   ],
   "section": "Tratament — Rolul trombolizei"
  },
  "learningObjective": "Diferențierea mecanismului și a raportului risc-beneficiu al trombolizei față de anticoagulare în EP cu hipotensiune.",
  "optionRationales": [
   "Tromboliza dizolvă trombul, spre deosebire de anticoagulante, restabilind rapid perfuzia pulmonară în EP masivă cu hipotensiune.",
   "Prevenirea extinderii trombului este efectul anticoagulantelor; tromboliza acţionează prin dizolvarea trombului deja format.",
   "Tromboliza prezintă un risc mai mare de hemoragie majoră decât anticoagularea, inclusiv un risc de 2% de hemoragie intracraniană.",
   "Anticoagularea rămâne necesară şi după tromboliză, pentru prevenirea recurenţei.",
   "Riscul de hemoragie intracraniană este explicit menţionat, la aproximativ 2%, nu absent."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie trombolizei exact efectele și profilul de siguranță al anticoagulantelor, inversând un raport risc-beneficiu explicit din text."
  },
  "textbookExpressions": [
   "restabilirea rapidă a perfuziei pulmonare",
   "risc de 2% de hemoragie intracraniană"
  ]
 },
 {
  "id": "tromboembolism-adv-008",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Despre filtrele de venă cavă inferioară (VCI) în tromboembolismul venos sunt corecte afirmațiile:",
  "options": [
   "Sunt indicate, de regulă, la pacienții cu o contraindicație de anticoagulare sau cu risc major de sângerare",
   "Reduc riscul de embolie pulmonară recurentă, comparativ cu anticoagularea singură",
   "Sunt asociate, independent, cu un risc crescut de tromboză venoasă profundă",
   "Filtrele recuperabile sunt preferate față de cele permanente și ar trebui îndepărtate imediat ce anticoagularea devine sigură",
   "Anticoagularea trebuie evitată pe termen nelimitat după inserția unui filtru VCI, pentru a preveni deplasarea acestuia"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "explanation": "Sunt indicate, de regulă, la pacienții cu o contraindicație de anticoagulare sau cu risc major de sângerare — Corect: Filtrele VCI se inserează, de obicei, când există o contraindicaţie temporară de anticoagulare sau un risc major de sângerare.\n\nReduc riscul de embolie pulmonară recurentă, comparativ cu anticoagularea singură — Incorect: Textul precizează explicit că filtrele VCI nu reduc riscul de EP recurentă, comparativ cu anticoagularea singură.\n\nSunt asociate, independent, cu un risc crescut de tromboză venoasă profundă — Corect: Filtrele VCI sunt asociate, în mod independent, cu un risc crescut de TVP.\n\nFiltrele recuperabile sunt preferate față de cele permanente și ar trebui îndepărtate imediat ce anticoagularea devine sigură — Corect: Filtrele recuperabile sunt preferate celor permanente şi trebuie îndepărtate imediat ce anticoagularea este sigură.\n\nAnticoagularea trebuie evitată pe termen nelimitat după inserția unui filtru VCI, pentru a preveni deplasarea acestuia — Incorect: Tratamentul anticoagulant trebuie început imediat ce devine sigur, nu evitat pe termen nelimitat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1008, Tratament — Abordări intervenționale: filtrele de venă cavă inferioară (pagini PDF: 198).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1008
   ],
   "pdfPages": [
    198
   ],
   "section": "Tratament — Abordări intervenționale: filtrele de venă cavă inferioară"
  },
  "learningObjective": "Recunoașterea indicațiilor, limitelor și riscurilor specifice ale filtrelor de venă cavă inferioară.",
  "optionRationales": [
   "Filtrele VCI se inserează, de obicei, când există o contraindicaţie temporară de anticoagulare sau un risc major de sângerare.",
   "Textul precizează explicit că filtrele VCI nu reduc riscul de EP recurentă, comparativ cu anticoagularea singură.",
   "Filtrele VCI sunt asociate, în mod independent, cu un risc crescut de TVP.",
   "Filtrele recuperabile sunt preferate celor permanente şi trebuie îndepărtate imediat ce anticoagularea este sigură.",
   "Tratamentul anticoagulant trebuie început imediat ce devine sigur, nu evitat pe termen nelimitat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Testează o presupunere frecventă și falsă (filtrele reduc EP recurentă) alături de reguli reale despre risc și momentul reluării anticoagulării."
  },
  "textbookExpressions": [
   "nu reduc riscul de EP recurentă",
   "risc crescut de TVP"
  ]
 },
 {
  "id": "tromboembolism-adv-009",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Privind riscul de recurență și durata anticoagulării în tromboembolismul venos, sunt corecte afirmațiile:",
  "options": [
   "Riscul de recurență este mai mare la episoadele de TEV neprovocate decât la cele cu factor provocator tranzitoriu deja rezolvat",
   "O durată mai lungă de anticoagulare continuă, dincolo de 3 luni, nu pare să reducă riscul de tromboză recurentă după încetarea tratamentului",
   "În practică, majoritatea episoadelor simptomatice de TVP distală izolată sunt tratate timp de 3 luni",
   "Riscul de tromboză recurentă, la un pacient care întrerupe anticoagularea după minimum 3 luni de tratament, este de aproximativ 5% în anul următor",
   "Riscurile de recurență sunt mai mici la bărbați decât la femei"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Riscul de recurență este mai mare la episoadele de TEV neprovocate decât la cele cu factor provocator tranzitoriu deja rezolvat — Corect: TEV neprovocat are un risc de recurenţă mai mare (aproximativ 10% la 1 an, 30% la 5 ani) decât cel cu factor tranzitoriu rezolvat.\n\nO durată mai lungă de anticoagulare continuă, dincolo de 3 luni, nu pare să reducă riscul de tromboză recurentă după încetarea tratamentului — Corect: Continuarea tratamentului dincolo de 3 luni nu pare să reducă riscul de recurenţă după oprirea anticoagulării.\n\nÎn practică, majoritatea episoadelor simptomatice de TVP distală izolată sunt tratate timp de 3 luni — Corect: TVP distală simptomatică izolată este tratată, în practică, majoritar timp de 3 luni.\n\nRiscul de tromboză recurentă, la un pacient care întrerupe anticoagularea după minimum 3 luni de tratament, este de aproximativ 5% în anul următor — Corect: Riscul de recurenţă la un an, după oprirea anticoagulării la minimum 3 luni, este de aproximativ 5%.\n\nRiscurile de recurență sunt mai mici la bărbați decât la femei — Incorect: Riscurile de recurenţă sunt mai mari la bărbaţi decât la femei, conform textului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1009, 1010, Complicații — Riscul de recurență (pagini PDF: 199, 200).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1009,
    1010
   ],
   "pdfPages": [
    199,
    200
   ],
   "section": "Complicații — Riscul de recurență"
  },
  "learningObjective": "Compararea riscului de recurență în funcție de tipul factorilor de risc, sex și localizare a trombozei, și interpretarea relației dintre durata tratamentului și riscul post-tratament.",
  "optionRationales": [
   "TEV neprovocat are un risc de recurenţă mai mare (aproximativ 10% la 1 an, 30% la 5 ani) decât cel cu factor tranzitoriu rezolvat.",
   "Continuarea tratamentului dincolo de 3 luni nu pare să reducă riscul de recurenţă după oprirea anticoagulării.",
   "TVP distală simptomatică izolată este tratată, în practică, majoritar timp de 3 luni.",
   "Riscul de recurenţă la un an, după oprirea anticoagulării la minimum 3 luni, este de aproximativ 5%.",
   "Riscurile de recurenţă sunt mai mari la bărbaţi decât la femei, conform textului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reunește patru fapte cantitative distincte despre recurență și inversează o singură relație (sex), ușor de confundat cu celelalte tipare corecte."
  },
  "textbookExpressions": [
   "nu pare să reducă riscul de tromboză",
   "mai mari la bărbaţi decât la femei"
  ]
 },
 {
  "id": "tromboembolism-adv-010",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Despre trombofiliile ereditare care determină creșterea activității factorilor procoagulanți sunt corecte afirmațiile:",
  "options": [
   "Factorul V Leiden determină rezistența factorului V activat la inactivarea de către proteina C activată",
   "Mutația genei protrombinei (G20210A) determină o reducere a nivelului de protrombină",
   "Factorul V Leiden heterozigot crește riscul de TEV, de-a lungul vieții, de aproximativ cinci ori",
   "Mutația genei protrombinei crește riscul de TEV de 10-50 de ori",
   "Factorul V Leiden homozigot are un risc de tromboză similar celui al purtătorilor heterozigoți"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Factorul V Leiden determină rezistența factorului V activat la inactivarea de către proteina C activată — Corect: Factorul Va rezultat prin mutaţia Leiden devine rezistent la inactivarea de către proteina C activată, crescând generarea trombinei.\n\nMutația genei protrombinei (G20210A) determină o reducere a nivelului de protrombină — Incorect: Mutaţia G20210A determină ridicarea nivelului de protrombină, nu reducerea acestuia.\n\nFactorul V Leiden heterozigot crește riscul de TEV, de-a lungul vieții, de aproximativ cinci ori — Corect: Factorul V Leiden heterozigot creşte riscul de TEV de-a lungul vieţii de aproximativ cinci ori.\n\nMutația genei protrombinei crește riscul de TEV de 10-50 de ori — Incorect: Mutaţia genei protrombinei creşte riscul de 2-3 ori; valorile de 10-50 de ori aparţin factorilor de risc puternici, precum chirurgia majoră.\n\nFactorul V Leiden homozigot are un risc de tromboză similar celui al purtătorilor heterozigoți — Incorect: Persoanele homozigote pentru factorul V Leiden au un risc de tromboză de aproximativ 10 ori mai mare decât heterozigoţii, nu similar.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1011, Investigarea trombozei — Trombofiliile ereditare: creșterea activității factorilor procoagulanți (pagini PDF: 201).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1011
   ],
   "pdfPages": [
    201
   ],
   "section": "Investigarea trombozei — Trombofiliile ereditare: creșterea activității factorilor procoagulanți"
  },
  "learningObjective": "Diferențierea mecanismului și a magnitudinii riscului conferit de factorul V Leiden față de mutația genei protrombinei, în forma heterozigotă și homozigotă.",
  "optionRationales": [
   "Factorul Va rezultat prin mutaţia Leiden devine rezistent la inactivarea de către proteina C activată, crescând generarea trombinei.",
   "Mutaţia G20210A determină ridicarea nivelului de protrombină, nu reducerea acestuia.",
   "Factorul V Leiden heterozigot creşte riscul de TEV de-a lungul vieţii de aproximativ cinci ori.",
   "Mutaţia genei protrombinei creşte riscul de 2-3 ori; valorile de 10-50 de ori aparţin factorilor de risc puternici, precum chirurgia majoră.",
   "Persoanele homozigote pentru factorul V Leiden au un risc de tromboză de aproximativ 10 ori mai mare decât heterozigoţii, nu similar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amestecă magnitudini numerice din categorii diferite de risc (factor de risc genetic moderat vs. factor puternic) și inversează sensul unei modificări biochimice."
  },
  "textbookExpressions": [
   "rezistent la inactivarea sa",
   "ridicarea nivelului de protrombină"
  ]
 },
 {
  "id": "tromboembolism-adv-011",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Despre trombofiliile ereditare prin pierderea funcției anticoagulanților naturali sunt corecte afirmațiile:",
  "options": [
   "Deficitul heterozigot de antitrombină crește riscul de tromboembolism venos de aproximativ 10 ori",
   "Deficiențele heterozigote de proteină C și de proteină S cresc riscul de tromboză venoasă de cel puțin 5 ori",
   "Diagnosticul deficitului de antitrombină se stabilește prin testare genetică, nu prin măsurarea activității antitrombinei",
   "Persoanele cu deficit de antitrombină sunt, de regulă, mai sensibile la efectul heparinei, comparativ cu populația generală",
   "Un nivel scăzut de antitrombină dobândit, de exemplu după tratament cu heparină, exclude posibilitatea unui deficit ereditar subiacent"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Deficitul heterozigot de antitrombină crește riscul de tromboembolism venos de aproximativ 10 ori — Corect: Deficitul heterozigot de antitrombină creşte riscul de TEV de aproximativ 10 ori, conform textului.\n\nDeficiențele heterozigote de proteină C și de proteină S cresc riscul de tromboză venoasă de cel puțin 5 ori — Corect: Deficienţele heterozigote de proteină C şi proteină S cresc riscul de tromboză venoasă de cel puţin 5 ori.\n\nDiagnosticul deficitului de antitrombină se stabilește prin testare genetică, nu prin măsurarea activității antitrombinei — Incorect: Diagnosticul se stabileşte prin măsurarea activităţii antitrombinei, nu prin testare genetică, din cauza multiplelor mutaţii posibile.\n\nPersoanele cu deficit de antitrombină sunt, de regulă, mai sensibile la efectul heparinei, comparativ cu populația generală — Incorect: Persoanele cu deficit de antitrombină pot fi relativ rezistente la heparină, nu mai sensibile, deoarece antitrombina este necesară acţiunii acesteia.\n\nUn nivel scăzut de antitrombină dobândit, de exemplu după tratament cu heparină, exclude posibilitatea unui deficit ereditar subiacent — Incorect: Un nivel dobândit scăzut nu exclude un deficit ereditar subiacent; diagnosticul de laborator este de altfel dificil exact din acest motiv.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1011, Investigarea trombozei — Pierderea funcției factorilor anticoagulanți (pagini PDF: 201).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1011
   ],
   "pdfPages": [
    201
   ],
   "section": "Investigarea trombozei — Pierderea funcției factorilor anticoagulanți"
  },
  "learningObjective": "Recunoașterea magnitudinii riscului și a particularităților diagnostice și terapeutice ale deficitului de antitrombină, proteină C și proteină S.",
  "optionRationales": [
   "Deficitul heterozigot de antitrombină creşte riscul de TEV de aproximativ 10 ori, conform textului.",
   "Deficienţele heterozigote de proteină C şi proteină S cresc riscul de tromboză venoasă de cel puţin 5 ori.",
   "Diagnosticul se stabileşte prin măsurarea activităţii antitrombinei, nu prin testare genetică, din cauza multiplelor mutaţii posibile.",
   "Persoanele cu deficit de antitrombină pot fi relativ rezistente la heparină, nu mai sensibile, deoarece antitrombina este necesară acţiunii acesteia.",
   "Un nivel dobândit scăzut nu exclude un deficit ereditar subiacent; diagnosticul de laborator este de altfel dificil exact din acest motiv."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează două relații contraintuitive (metoda de diagnostic și sensul rezistenței la heparină) și testează o fallacie de excludere reciprocă."
  },
  "textbookExpressions": [
   "relativ rezistenţi la heparină",
   "nu prin testarea genetică"
  ]
 },
 {
  "id": "tromboembolism-adv-012",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "Care este mecanismul fiziopatologic principal al riscului trombotic din trombocitopenia indusă de heparină (HIT)?",
  "options": [
   "Activarea trombocitelor și a sistemului de coagulare, mediată de anticorpi IgG împotriva complexului heparină–factor 4 plachetar",
   "Distrugerea directă a trombocitelor de către heparină, fără mecanism imunologic",
   "Un deficit dobândit de proteină C, indus direct de heparină",
   "Inhibarea antitrombinei de către anticorpii IgG formați",
   "Consumul trombocitelor printr-o coagulare intravasculară diseminată de cauză virală"
  ],
  "correct": [
   0
  ],
  "explanation": "Activarea trombocitelor și a sistemului de coagulare, mediată de anticorpi IgG împotriva complexului heparină–factor 4 plachetar — Corect: HIT este mediată imunologic prin anticorpi IgG împotriva complexului heparină–factor 4 plachetar, care activează trombocitele şi sistemul de coagulare.\n\nDistrugerea directă a trombocitelor de către heparină, fără mecanism imunologic — Incorect: Mecanismul este imunologic, nu o distrugere toxică directă a trombocitelor de către heparină.\n\nUn deficit dobândit de proteină C, indus direct de heparină — Incorect: Textul nu descrie un deficit de proteină C ca mecanism al HIT.\n\nInhibarea antitrombinei de către anticorpii IgG formați — Incorect: Anticorpii din HIT se formează împotriva complexului heparină–FP4, nu împotriva antitrombinei.\n\nConsumul trombocitelor printr-o coagulare intravasculară diseminată de cauză virală — Incorect: HIT nu este descrisă ca fiind de cauză virală sau ca o coagulare intravasculară diseminată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1015, Medicația anticoagulantă — Trombocitopenia indusă de heparină (pagini PDF: 205).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1015
   ],
   "pdfPages": [
    205
   ],
   "section": "Medicația anticoagulantă — Trombocitopenia indusă de heparină"
  },
  "learningObjective": "Înțelegerea mecanismului imunologic al HIT și a caracterului său predominant protrombotic, nu hemoragic.",
  "optionRationales": [
   "HIT este mediată imunologic prin anticorpi IgG împotriva complexului heparină–factor 4 plachetar, care activează trombocitele şi sistemul de coagulare.",
   "Mecanismul este imunologic, nu o distrugere toxică directă a trombocitelor de către heparină.",
   "Textul nu descrie un deficit de proteină C ca mecanism al HIT.",
   "Anticorpii din HIT se formează împotriva complexului heparină–FP4, nu împotriva antitrombinei.",
   "HIT nu este descrisă ca fiind de cauză virală sau ca o coagulare intravasculară diseminată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii propun mecanisme fiziopatologice reale din alte contexte trombotice/hemoragice, plauzibile dar nespecifice pentru HIT."
  },
  "textbookExpressions": [
   "este mediată",
   "factorul 4 plachetar"
  ]
 },
 {
  "id": "tromboembolism-adv-013",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "În managementul trombocitopeniei induse de heparină (HIT) suspectate sau confirmate, sunt corecte afirmațiile:",
  "options": [
   "Trebuie întrerupt orice tratament cu heparină, inclusiv cel folosit pentru spălarea cateterelor",
   "Se recomandă administrarea unui anticoagulant non-heparinic, având în vedere rata ridicată a trombozei",
   "Pacientul poate fi reexpus la heparină după rezolvarea episodului acut, dacă numărul de trombocite s-a normalizat",
   "Fondaparinuxul se numără printre anticoagulantele alternative folosite în această situație",
   "Trombocitopenia din HIT este asociată predominant cu o tendință la sângerare, ca în alte trombocitopenii"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Trebuie întrerupt orice tratament cu heparină, inclusiv cel folosit pentru spălarea cateterelor — Corect: Orice tratament cu heparină, inclusiv cel folosit pentru spălarea cateterelor, trebuie întrerupt.\n\nSe recomandă administrarea unui anticoagulant non-heparinic, având în vedere rata ridicată a trombozei — Corect: Riscul ridicat de tromboză impune un anticoagulant alternativ, non-heparinic.\n\nPacientul poate fi reexpus la heparină după rezolvarea episodului acut, dacă numărul de trombocite s-a normalizat — Incorect: Pacienţii care dezvoltă HIT nu trebuie expuşi din nou la heparină pe viitor, conform textului.\n\nFondaparinuxul se numără printre anticoagulantele alternative folosite în această situație — Corect: Fondaparinuxul este listat printre anticoagulantele alternative frecvent folosite, alături de danaparoid şi argatroban.\n\nTrombocitopenia din HIT este asociată predominant cu o tendință la sângerare, ca în alte trombocitopenii — Incorect: HIT este asociată cu o tendinţă protrombotică puternică, nu cu o tendinţă la sângerare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1015, Medicația anticoagulantă — Managementul HIT (pagini PDF: 205).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1015
   ],
   "pdfPages": [
    205
   ],
   "section": "Medicația anticoagulantă — Managementul HIT"
  },
  "learningObjective": "Aplicarea principiilor de management imediat al HIT și diferențierea sa de trombocitopeniile cu tendință hemoragică.",
  "optionRationales": [
   "Orice tratament cu heparină, inclusiv cel folosit pentru spălarea cateterelor, trebuie întrerupt.",
   "Riscul ridicat de tromboză impune un anticoagulant alternativ, non-heparinic.",
   "Pacienţii care dezvoltă HIT nu trebuie expuşi din nou la heparină pe viitor, conform textului.",
   "Fondaparinuxul este listat printre anticoagulantele alternative frecvent folosite, alături de danaparoid şi argatroban.",
   "HIT este asociată cu o tendinţă protrombotică puternică, nu cu o tendinţă la sângerare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Contrazice o presupunere intuitivă (trombocitopenie = risc hemoragic) și o regulă de reexpunere pe care mulți ar considera-o sigură după normalizare."
  },
  "textbookExpressions": [
   "nu trebuie expuşi din nou",
   "tendinţă protrombotică"
  ]
 },
 {
  "id": "tromboembolism-adv-016",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Tromboembolismul venos, în datele de deschidere ale capitolului:",
  "options": [
   "Apare pe parcursul vieții la peste 5% din oameni, riscul crescând cu vârsta",
   "Embolia pulmonară este a treia cea mai frecventă cauză cardiovasculară de deces, după IMA și AVC",
   "Etiologia rămâne necunoscută în aproape 50% din cazuri",
   "EP este cea mai frecventă cauză de deces evitabilă la internare și singura cauză directă de deces în sarcină și lehuzie, în Marea Britanie",
   "TEV este o boală rară a adultului tânăr, fără recurență și fără sechele"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Apare pe parcursul vieții la peste 5% din oameni, riscul crescând cu vârsta — Corect: Cifra de peste 5% pe viață este din deschidere.\n\nEmbolia pulmonară este a treia cea mai frecventă cauză cardiovasculară de deces, după IMA și AVC — Corect: Rangul trei după IMA și AVC este explicit.\n\nEtiologia rămâne necunoscută în aproape 50% din cazuri — Corect: Aproape 50% fără etiologie identificată este enunțat.\n\nEP este cea mai frecventă cauză de deces evitabilă la internare și singura cauză directă de deces în sarcină și lehuzie, în Marea Britanie — Corect: Cele două superlative (deces evitabil spitalicesc; cauză directă obstetricală UK) sunt din listă.\n\nTEV este o boală rară a adultului tânăr, fără recurență și fără sechele — Incorect: Textul subliniază frecvența, recurența și sechelele, nu raritatea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1001, Introducere — Impactul TEV (pagini PDF: 191).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1001
   ],
   "pdfPages": [
    191
   ],
   "section": "Introducere — Impactul TEV"
  },
  "learningObjective": "Integrarea prevalenței pe viață, a rangului EP între cauzele CV de deces și a caracterului prevenibil spitalicesc/obstetrical.",
  "optionRationales": [
   "Cifra de peste 5% pe viață este din deschidere.",
   "Rangul trei după IMA și AVC este explicit.",
   "Aproape 50% fără etiologie identificată este enunțat.",
   "Cele două superlative (deces evitabil spitalicesc; cauză directă obstetricală UK) sunt din listă.",
   "Textul subliniază frecvența, recurența și sechelele, nu raritatea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru fapte epidemiologice; distractorul neagă recurența și sechelele descrise în același paragraf."
  },
  "textbookExpressions": [
   "peste 5%",
   "a treia cea mai frecventă"
  ]
 },
 {
  "id": "tromboembolism-adv-017",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Originea și extensia trombozei venoase:",
  "options": [
   "Cel mai frecvent începe în buzunarul unei valve a venelor profunde ale membrului inferior, unde fluxul poate fi turbulent",
   "Aproximativ 10% dintre episoade apar în alte sedii (membrul superior, sinusuri cerebrale, vene splanhnice)",
   "Trombul limitat la venele gambei este TVP distală; extensia la vena poplitee sau deasupra definește TVP proximală, mai predispusă la embolizare",
   "Se consideră că sunt necesare cel puțin câteva zile pentru ca trombii venoși să producă manifestări clinice",
   "TVP proximală este limitată la venele gambei, distală fiind cea de deasupra poplitei"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Cel mai frecvent începe în buzunarul unei valve a venelor profunde ale membrului inferior, unde fluxul poate fi turbulent — Corect: Originea în buzunarul valvular cu turbulență este mecanismul citat.\n\nAproximativ 10% dintre episoade apar în alte sedii (membrul superior, sinusuri cerebrale, vene splanhnice) — Corect: Proporția de 10% sedii neobișnuite este explicită.\n\nTrombul limitat la venele gambei este TVP distală; extensia la vena poplitee sau deasupra definește TVP proximală, mai predispusă la embolizare — Corect: Pragul popliteu separă distal de proximal.\n\nSe consideră că sunt necesare cel puțin câteva zile pentru ca trombii venoși să producă manifestări clinice — Corect: Fereastra de câteva zile până la simptome este enunțată.\n\nTVP proximală este limitată la venele gambei, distală fiind cea de deasupra poplitei — Incorect: Definițiile distal/proximal sunt inversate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1002, Definiție — Originea și extensia TVP (pagini PDF: 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1002
   ],
   "pdfPages": [
    192
   ],
   "section": "Definiție — Originea și extensia TVP"
  },
  "learningObjective": "Distingerea TVP distale de cea proximală (pragul popliteu) și recunoașterea originii în buzunarul valvular.",
  "optionRationales": [
   "Originea în buzunarul valvular cu turbulență este mecanismul citat.",
   "Proporția de 10% sedii neobișnuite este explicită.",
   "Pragul popliteu separă distal de proximal.",
   "Fereastra de câteva zile până la simptome este enunțată.",
   "Definițiile distal/proximal sunt inversate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează pragul popliteu, distincția centrală a paragrafului."
  },
  "textbookExpressions": [
   "vena poplitee",
   "aproximativ 10%"
  ]
 },
 {
  "id": "tromboembolism-adv-018",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Incidența anuală a TEV în comunitate:",
  "options": [
   "Este estimată, în general, la 1 la 1.000 pe an și este dependentă de vârstă",
   "Afectează aproximativ 1 la 10.000 de adulți tineri și 1 la 1.000 de adulți de vârstă medie, apropiindu-se de 1 la 100 la vârstnici",
   "Datele autopsice sugerează că aproximativ 10% dintre decesele pacienților internați s-au produs din cauza EP",
   "Clinic, aproximativ 60% dintre episoade se prezintă ca TVP, iar 40% ca EP cu sau fără TVP clinică",
   "Incidența este identică la copil și la vârstnic, în jur de 1 la 100 pe an"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este estimată, în general, la 1 la 1.000 pe an și este dependentă de vârstă — Corect: 1 la 1.000 este cifra de bază.\n\nAfectează aproximativ 1 la 10.000 de adulți tineri și 1 la 1.000 de adulți de vârstă medie, apropiindu-se de 1 la 100 la vârstnici — Corect: Cele trei trepte de vârstă sunt enumerate.\n\nDatele autopsice sugerează că aproximativ 10% dintre decesele pacienților internați s-au produs din cauza EP — Corect: 10% din decesele intra-spitalicești prin EP este cifra autopsică.\n\nClinic, aproximativ 60% dintre episoade se prezintă ca TVP, iar 40% ca EP cu sau fără TVP clinică — Corect: Splitul 60% TVP / 40% EP este clinic.\n\nIncidența este identică la copil și la vârstnic, în jur de 1 la 100 pe an — Incorect: Copilăria este descrisă ca neobișnuită, nu 1 la 100.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1002, Epidemiologie și factori de risc (pagini PDF: 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1002
   ],
   "pdfPages": [
    192
   ],
   "section": "Epidemiologie și factori de risc"
  },
  "learningObjective": "Reținerea gradientului de vârstă 1/10.000 – 1/1.000 – 1/100 și a splitului 60/40 TVP/EP.",
  "optionRationales": [
   "1 la 1.000 este cifra de bază.",
   "Cele trei trepte de vârstă sunt enumerate.",
   "10% din decesele intra-spitalicești prin EP este cifra autopsică.",
   "Splitul 60% TVP / 40% EP este clinic.",
   "Copilăria este descrisă ca neobișnuită, nu 1 la 100."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru trepte numerice; distractorul aplică incidența vârstnicului asupra copilului."
  },
  "textbookExpressions": [
   "1 la 1.000",
   "1 la 100"
  ]
 },
 {
  "id": "tromboembolism-adv-019",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Printre factorii de risc pentru TEV din Cadranul 29.1 se numără:",
  "options": [
   "Imobilizare (repaus la pat peste 3 zile), aparat gipsat și călătorii recente peste 4 ore",
   "Indice de masă corporală peste 30 kg/m², vârstă avansată și istoric de TEV",
   "Cateter venos central, tromboză venoasă superficială și neoplasme mieloproliferative",
   "Administrare de estrogeni (contraceptive combinate, hormonoterapie orală) și sarcină/lehuzie",
   "Activitatea fizică regulată și IMC sub 20 kg/m², ca factori persistenți majori"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Imobilizare (repaus la pat peste 3 zile), aparat gipsat și călătorii recente peste 4 ore — Corect: Pragurile 3 zile și 4 ore sunt din lista tranzitorie.\n\nIndice de masă corporală peste 30 kg/m², vârstă avansată și istoric de TEV — Corect: IMC >30 și vârsta/istoria sunt persistenți.\n\nCateter venos central, tromboză venoasă superficială și neoplasme mieloproliferative — Corect: Cateterul, TVS și mieloproliferativele figurează în tabel.\n\nAdministrare de estrogeni (contraceptive combinate, hormonoterapie orală) și sarcină/lehuzie — Corect: Estrogenii și sarcina sunt tranzitorii hormonali.\n\nActivitatea fizică regulată și IMC sub 20 kg/m², ca factori persistenți majori — Incorect: Exercițiul și subponderalitatea nu sunt factorii listați.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1002, Cadranul 29.1 — Factori de risc pentru TEV (pagini PDF: 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1002
   ],
   "pdfPages": [
    192
   ],
   "section": "Cadranul 29.1 — Factori de risc pentru TEV"
  },
  "learningObjective": "Recunoașterea pragurilor >3 zile, >4 ore și IMC >30, plus factorii de internare și hormonali.",
  "optionRationales": [
   "Pragurile 3 zile și 4 ore sunt din lista tranzitorie.",
   "IMC >30 și vârsta/istoria sunt persistenți.",
   "Cateterul, TVS și mieloproliferativele figurează în tabel.",
   "Estrogenii și sarcina sunt tranzitorii hormonali.",
   "Exercițiul și subponderalitatea nu sunt factorii listați."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru praguri/categorizări reale; distractorul inversează direcția IMC."
  },
  "textbookExpressions": [
   ">3 zile",
   ">30 kg/m2"
  ]
 },
 {
  "id": "tromboembolism-adv-020",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Embolia pulmonară se prezintă clinic:",
  "options": [
   "În aproximativ 65% din cazuri cu durere toracică pleuritică și dispnee, uneori hemoptizie",
   "În alte 25% cu dispnee izolată, uneori evidentă doar la efort",
   "În celelalte 10% cu sincopă, hipotensiune sau șoc și ischemie cu durere medio-toracică",
   "Cel puțin o treime dintre pacienții cu TVP au EP asimptomatică; circa 70% dintre cei cu EP simptomatică au TVP asociată",
   "Forma severă se manifestă tipic prin bradicardie și vasodilatație, fără tahipnee"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "În aproximativ 65% din cazuri cu durere toracică pleuritică și dispnee, uneori hemoptizie — Corect: 65% pleuritic este prima categorie.\n\nÎn alte 25% cu dispnee izolată, uneori evidentă doar la efort — Corect: 25% dispnee izolată este a doua.\n\nÎn celelalte 10% cu sincopă, hipotensiune sau șoc și ischemie cu durere medio-toracică — Corect: 10% instabilitate este a treia.\n\nCel puțin o treime dintre pacienții cu TVP au EP asimptomatică; circa 70% dintre cei cu EP simptomatică au TVP asociată — Corect: O treime EP mute în TVP și 70% TVP în EP simptomatică sunt cifrele de închidere.\n\nForma severă se manifestă tipic prin bradicardie și vasodilatație, fără tahipnee — Incorect: Forma severă este tahipneică, tahicardică, cu vasoconstricție.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1003, Aspecte clinice — Prezentarea EP (pagini PDF: 193).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1003
   ],
   "pdfPages": [
    193
   ],
   "section": "Aspecte clinice — Prezentarea EP"
  },
  "learningObjective": "Memorarea splitului 65/25/10 și a suprapunerii TVP–EP (o treime / 70%).",
  "optionRationales": [
   "65% pleuritic este prima categorie.",
   "25% dispnee izolată este a doua.",
   "10% instabilitate este a treia.",
   "O treime EP mute în TVP și 70% TVP în EP simptomatică sunt cifrele de închidere.",
   "Forma severă este tahipneică, tahicardică, cu vasoconstricție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru procente de prezentare; distractorul inversează semnele formei severe."
  },
  "textbookExpressions": [
   "65% din cazuri",
   "Cel puţin o treime"
  ]
 },
 {
  "id": "tromboembolism-adv-021",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Investigațiile inițiale în suspiciunea de EP:",
  "options": [
   "Aspectul ECG clasic S1Q3T3 este prezent doar la o minoritate; mai frecvent se observă tahicardie sinusală",
   "Radiografia toracică poate fi normală, dar cel mai adesea arată modificări nespecifice (atelectazie, ascensionarea hemidiafragmului, colecție)",
   "Gazometria arată tipic hipoxemie și hipocapnie, dar acestea sunt nespecifice și pot lipsi",
   "BNP/NT-proBNP și troponina pot crește prin supraîncărcarea/lezarea VD, fără a fi specifice",
   "S1Q3T3 este prezent la majoritatea pacienților și confirmă EP fără imagistică"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Aspectul ECG clasic S1Q3T3 este prezent doar la o minoritate; mai frecvent se observă tahicardie sinusală — Corect: Minoritatea S1Q3T3 versus tahicardia sinusală este explicită.\n\nRadiografia toracică poate fi normală, dar cel mai adesea arată modificări nespecifice (atelectazie, ascensionarea hemidiafragmului, colecție) — Corect: Modificările Rx nespecifice sunt lista din text.\n\nGazometria arată tipic hipoxemie și hipocapnie, dar acestea sunt nespecifice și pot lipsi — Corect: Hipoxemia/hipocapnia nespecifice sunt enunțate.\n\nBNP/NT-proBNP și troponina pot crește prin supraîncărcarea/lezarea VD, fără a fi specifice — Corect: BNP și troponina VD sunt nespecifice.\n\nS1Q3T3 este prezent la majoritatea pacienților și confirmă EP fără imagistică — Incorect: S1Q3T3 nu confirmă și nu este majoritar.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1003, Diagnostic — Investigații inițiale (pagini PDF: 193).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1003
   ],
   "pdfPages": [
    193
   ],
   "section": "Diagnostic — Investigații inițiale"
  },
  "learningObjective": "Contrastarea rarității S1Q3T3 cu tahicardia sinusală și caracterul nespecific al Rx, gazelor și biomarkerilor.",
  "optionRationales": [
   "Minoritatea S1Q3T3 versus tahicardia sinusală este explicită.",
   "Modificările Rx nespecifice sunt lista din text.",
   "Hipoxemia/hipocapnia nespecifice sunt enunțate.",
   "BNP și troponina VD sunt nespecifice.",
   "S1Q3T3 nu confirmă și nu este majoritar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul transformă un aspect minoritar într-un criteriu diagnostic suficient."
  },
  "textbookExpressions": [
   "S1Q3T3",
   "tahicardie sinusală"
  ]
 },
 {
  "id": "tromboembolism-adv-022",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "În tratamentul tradițional cu heparină plus warfarină:",
  "options": [
   "Activitatea heparinei se instalează aproape imediat, iar warfarina necesită cel puțin 5 zile pentru anticoagulare terapeutică apreciată prin INR",
   "Când INR este 2,0 sau mai mult timp de 2 zile consecutive, heparina sau fondaparinuxul se pot opri, continuând warfarina",
   "Scopul fazei acute (5-10 zile) este prevenirea extinderii trombului; ulterior se urmărește prevenirea recurenței",
   "Warfarina asigură anticoagulare terapeutică în 2 ore, similar DOAC, fără nevoie de heparină",
   "INR de 1,0 timp de o zi permite oprirea heparinei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Activitatea heparinei se instalează aproape imediat, iar warfarina necesită cel puțin 5 zile pentru anticoagulare terapeutică apreciată prin INR — Corect: Instalarea imediată versus ≥5 zile este contrastul central.\n\nCând INR este 2,0 sau mai mult timp de 2 zile consecutive, heparina sau fondaparinuxul se pot opri, continuând warfarina — Corect: Regula 2,0 două zile consecutive este explicită.\n\nScopul fazei acute (5-10 zile) este prevenirea extinderii trombului; ulterior se urmărește prevenirea recurenței — Corect: Cele două scopuri pe faze sunt din deschiderea tratamentului.\n\nWarfarina asigură anticoagulare terapeutică în 2 ore, similar DOAC, fără nevoie de heparină — Incorect: Warfarina nu acționează în 2 ore.\n\nINR de 1,0 timp de o zi permite oprirea heparinei — Incorect: INR 1,0 nu este terapeutic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1006, Tratament — Tratamentul tradițional (pagini PDF: 196).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1006
   ],
   "pdfPages": [
    196
   ],
   "section": "Tratament — Tratamentul tradițional"
  },
  "learningObjective": "Reținerea ferestrei de 5 zile a warfarinei și a regulii INR ≥2,0 două zile consecutive.",
  "optionRationales": [
   "Instalarea imediată versus ≥5 zile este contrastul central.",
   "Regula 2,0 două zile consecutive este explicită.",
   "Cele două scopuri pe faze sunt din deschiderea tratamentului.",
   "Warfarina nu acționează în 2 ore.",
   "INR 1,0 nu este terapeutic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică cinetica DOAC (2 ore) asupra warfarinei, al cărei prag este 5 zile și INR 2,0×2."
  },
  "textbookExpressions": [
   "2 zile consecutive",
   "cel puţin 5 zile"
  ]
 },
 {
  "id": "tromboembolism-adv-023",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Îngrijirea în ambulatoriu a EP și definiția instabilității:",
  "options": [
   "EP cu risc scăzut, identificată prin PESI sau PESI simplificat, poate fi gestionată ambulator sau prin externare precoce după 24-48 de ore",
   "EP cu șoc se definește prin TAS <90 mmHg sau scădere a TAS >40 mmHg peste 15 minute, fără aritmie nouă, hipovolemie sau sepsis",
   "Mulți pacienți cu TVP pot fi îngrijiți ambulator, internarea fiind rezervată tablourilor complexe",
   "Toate EP, inclusiv cele cu PESI scăzut, impun internare prelungită de rutină",
   "Scăderea TAS cu 10 mmHg timp de 2 minute definește șocul din EP"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "EP cu risc scăzut, identificată prin PESI sau PESI simplificat, poate fi gestionată ambulator sau prin externare precoce după 24-48 de ore — Corect: PESI și fereastra 24-48 de ore sunt din paragraf.\n\nEP cu șoc se definește prin TAS <90 mmHg sau scădere a TAS >40 mmHg peste 15 minute, fără aritmie nouă, hipovolemie sau sepsis — Corect: Definiția hemodinamică este nota din Fig. 29.4.\n\nMulți pacienți cu TVP pot fi îngrijiți ambulator, internarea fiind rezervată tablourilor complexe — Corect: TVP ambulatorie este enunțată.\n\nToate EP, inclusiv cele cu PESI scăzut, impun internare prelungită de rutină — Incorect: PESI scăzut permite tocmai ambulatorul.\n\nScăderea TAS cu 10 mmHg timp de 2 minute definește șocul din EP — Incorect: Pragurile 10 mmHg / 2 minute nu sunt cele din text.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1007, 1006, Îngrijirea în ambulatoriu; EP cu risc crescut (pagini PDF: 197, 196).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1007,
    1006
   ],
   "pdfPages": [
    197,
    196
   ],
   "section": "Îngrijirea în ambulatoriu; EP cu risc crescut"
  },
  "learningObjective": "Aplicarea PESI pentru ambulator și a criteriului TAS <90 sau scădere >40 mmHg >15 minute.",
  "optionRationales": [
   "PESI și fereastra 24-48 de ore sunt din paragraf.",
   "Definiția hemodinamică este nota din Fig. 29.4.",
   "TVP ambulatorie este enunțată.",
   "PESI scăzut permite tocmai ambulatorul.",
   "Pragurile 10 mmHg / 2 minute nu sunt cele din text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii înlocuiesc pragurile 90/40 mmHg și 15 minute cu valori apropiate, dar greșite."
  },
  "textbookExpressions": [
   "PESI",
   ">15 minute"
  ]
 },
 {
  "id": "tromboembolism-adv-024",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Cancerul asociat TEV (sindrom Trousseau):",
  "options": [
   "10-20% din toate episoadele de TEV sunt diagnosticate la persoane cu cancer",
   "Până la 5% dintre pacienții cu TEV aparent neprovocat sunt diagnosticați cu cancer în următoarele 12 luni",
   "Patogeneza include hipercoagulabilitate tumorală, chirurgie/chimioterapie, imobilizare și catetere centrale",
   "NICE recomandă, la peste 40 de ani cu TEV neprovocat, luarea în considerare a CT abdomino-pelvin și, la femei, a mamografiei",
   "Cancerul este o cauză rară de TEV, sub 1%, și nu justifică screening după un episod neprovocat"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "10-20% din toate episoadele de TEV sunt diagnosticate la persoane cu cancer — Corect: 10-20% este prevalența în TEV.\n\nPână la 5% dintre pacienții cu TEV aparent neprovocat sunt diagnosticați cu cancer în următoarele 12 luni — Corect: 5% cancer ocult la 12 luni este cifra dată.\n\nPatogeneza include hipercoagulabilitate tumorală, chirurgie/chimioterapie, imobilizare și catetere centrale — Corect: Cei patru piloni patogenici sunt listați.\n\nNICE recomandă, la peste 40 de ani cu TEV neprovocat, luarea în considerare a CT abdomino-pelvin și, la femei, a mamografiei — Corect: Recomandarea NICE (cu incertitudinea beneficiului de supraviețuire) este de la p. 1011.\n\nCancerul este o cauză rară de TEV, sub 1%, și nu justifică screening după un episod neprovocat — Incorect: Cancerul este comun, nu rar.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1010, 1011, Complicații — Cancerul asociat (pagini PDF: 200, 201).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1010,
    1011
   ],
   "pdfPages": [
    200,
    201
   ],
   "section": "Complicații — Cancerul asociat"
  },
  "learningObjective": "Reținerea proporțiilor 10-20% și 5% la 12 luni, plus pachetul NICE după 40 de ani.",
  "optionRationales": [
   "10-20% este prevalența în TEV.",
   "5% cancer ocult la 12 luni este cifra dată.",
   "Cei patru piloni patogenici sunt listați.",
   "Recomandarea NICE (cu incertitudinea beneficiului de supraviețuire) este de la p. 1011.",
   "Cancerul este comun, nu rar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru cifre/indicții de screening; distractorul minimizează cancerul sub 1%."
  },
  "textbookExpressions": [
   "10-20%",
   "sindromul Trousseau"
  ]
 },
 {
  "id": "tromboembolism-adv-025",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Sindromul post-trombotic și mortalitatea după TEV:",
  "options": [
   "SPT apare la aproximativ 40% după TVP proximală",
   "După diagnostic și tratament, mortalitatea la 1 lună în EP este în jur de 5%, cel puțin jumătate prin comorbidități, nu prin EP",
   "Pacienții cu TEV au mortalitate 10-20% la 1 an; cancerul este principala cauză de deces",
   "Mortalitatea pe termen scurt este mai scăzută la TVP decât la EP",
   "SPT este rar (<5%) după TVP proximală și nu afectează calitatea vieții"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "SPT apare la aproximativ 40% după TVP proximală — Corect: 40% după TVP proximală este prevalența SPT.\n\nDupă diagnostic și tratament, mortalitatea la 1 lună în EP este în jur de 5%, cel puțin jumătate prin comorbidități, nu prin EP — Corect: 5% la o lună, jumătate comorbidități, este cifra EP.\n\nPacienții cu TEV au mortalitate 10-20% la 1 an; cancerul este principala cauză de deces — Corect: 10-20% la un an cu cancer ca principală cauză este explicit.\n\nMortalitatea pe termen scurt este mai scăzută la TVP decât la EP — Corect: Mortalitatea pe termen scurt mai mică în TVP este enunțată.\n\nSPT este rar (<5%) după TVP proximală și nu afectează calitatea vieții — Incorect: 40% nu este rar; calitatea vieții este afectată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1010, Complicații — Mortalitatea; Sindromul post-trombotic (pagini PDF: 200).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1010
   ],
   "pdfPages": [
    200
   ],
   "section": "Complicații — Mortalitatea; Sindromul post-trombotic"
  },
  "learningObjective": "Contrastarea SPT de 40%, a mortalității EP la 1 lună (5%) și la 1 an (10-20%).",
  "optionRationales": [
   "40% după TVP proximală este prevalența SPT.",
   "5% la o lună, jumătate comorbidități, este cifra EP.",
   "10-20% la un an cu cancer ca principală cauză este explicit.",
   "Mortalitatea pe termen scurt mai mică în TVP este enunțată.",
   "40% nu este rar; calitatea vieții este afectată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul coboară SPT de la 40% la <5%, inversând mesajul de morbiditate pe termen lung."
  },
  "textbookExpressions": [
   "aproximativ 40%",
   "10-20% la 1 an"
  ]
 },
 {
  "id": "tromboembolism-adv-026",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Profilaxia TEV la internare:",
  "options": [
   "Între o treime și jumătate dintre episoadele de TEV sunt provocate de chirurgie și/sau internare, diagnosticate în mare parte în primele trei luni după externare",
   "Screeningul postoperator în ortopedie/oncologie majoră a raportat TVP asimptomatică de până la 50%",
   "Toți adulții internați necesită evaluare formală a riscului de TEV și de hemoragie",
   "La risc de TEV fără risc hemoragic se recomandă profilaxie farmacologică, cu sau fără măsuri mecanice",
   "Profilaxia farmacologică este indicată și când riscul hemoragic este predominant, ciorapii fiind inutili"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Între o treime și jumătate dintre episoadele de TEV sunt provocate de chirurgie și/sau internare, diagnosticate în mare parte în primele trei luni după externare — Corect: O treime–jumătate și fereastra de 3 luni sunt din deschidere.\n\nScreeningul postoperator în ortopedie/oncologie majoră a raportat TVP asimptomatică de până la 50% — Corect: Până la 50% TVP asimptomatică este cifra screeningului.\n\nToți adulții internați necesită evaluare formală a riscului de TEV și de hemoragie — Corect: Evaluarea formală a tuturor adulților internați este cerută.\n\nLa risc de TEV fără risc hemoragic se recomandă profilaxie farmacologică, cu sau fără măsuri mecanice — Corect: Algoritmul farmacologic ± mecanic este explicit.\n\nProfilaxia farmacologică este indicată și când riscul hemoragic este predominant, ciorapii fiind inutili — Incorect: La risc hemoragic, farmacologicul poate fi impropriu, mecanicul rămânând o opțiune.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1013, Profilaxia (pagini PDF: 203).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1013
   ],
   "pdfPages": [
    203
   ],
   "section": "Profilaxia"
  },
  "learningObjective": "Reținerea ferestrei de 3 luni post-externare, a TVP mute de 50% și a algoritmului risc TEV versus sângerare.",
  "optionRationales": [
   "O treime–jumătate și fereastra de 3 luni sunt din deschidere.",
   "Până la 50% TVP asimptomatică este cifra screeningului.",
   "Evaluarea formală a tuturor adulților internați este cerută.",
   "Algoritmul farmacologic ± mecanic este explicit.",
   "La risc hemoragic, farmacologicul poate fi impropriu, mecanicul rămânând o opțiune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează alegerea farmacologic versus mecanic în funcție de sângerare."
  },
  "textbookExpressions": [
   "primele trei luni",
   "până la 50%"
  ]
 },
 {
  "id": "tromboembolism-adv-027",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Profilaxia mecanică a TEV include:",
  "options": [
   "Mobilizare precoce, ridicarea membrelor inferioare și ciorapi antiembolie până la genunchi sau coapsă",
   "Ciorapii nu trebuie folosiți la boală arterială periferică, accident vascular cerebral sau când ar produce leziuni cutanate",
   "Dispozitive de compresie intermitentă, aplicabile intraoperator sau la pat",
   "Ciorapii sunt indicați precis în AVC acut, pentru a reduce EP",
   "Mobilizarea precoce este contraindicată după chirurgia majoră, ciorapii înlocuind-o"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mobilizare precoce, ridicarea membrelor inferioare și ciorapi antiembolie până la genunchi sau coapsă — Corect: Cele trei măsuri de bază sunt lista.\n\nCiorapii nu trebuie folosiți la boală arterială periferică, accident vascular cerebral sau când ar produce leziuni cutanate — Corect: Contraindicațiile ciorapilor sunt explicite.\n\nDispozitive de compresie intermitentă, aplicabile intraoperator sau la pat — Corect: IPC intraoperator/la pat este descris.\n\nCiorapii sunt indicați precis în AVC acut, pentru a reduce EP — Incorect: AVC este o contraindicație a ciorapilor, nu o indicație.\n\nMobilizarea precoce este contraindicată după chirurgia majoră, ciorapii înlocuind-o — Incorect: Mobilizarea precoce este prima măsură, nu o contraindicație.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1013, Profilaxia mecanică (pagini PDF: 203).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1013
   ],
   "pdfPages": [
    203
   ],
   "section": "Profilaxia mecanică"
  },
  "learningObjective": "Recunoașterea contraindicațiilor ciorapilor (BAP, AVC, leziuni cutanate) și a locului IPC.",
  "optionRationales": [
   "Cele trei măsuri de bază sunt lista.",
   "Contraindicațiile ciorapilor sunt explicite.",
   "IPC intraoperator/la pat este descris.",
   "AVC este o contraindicație a ciorapilor, nu o indicație.",
   "Mobilizarea precoce este prima măsură, nu o contraindicație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă contraindicația din AVC într-o indicație de ciorapi."
  },
  "textbookExpressions": [
   "accident vascular cerebral",
   "compresie intermitentă"
  ]
 },
 {
  "id": "tromboembolism-adv-028",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Heparina, ca anticoagulant indirect:",
  "options": [
   "Este un amestec de polizaharide din mucoasa intestinală porcină, distrusă în stomac, deci parenterală",
   "Se leagă printr-o secvență pentazaharidică de antitrombină, crescându-i activitatea de cel puțin 1.000 de ori",
   "Inhibă mai ales trombina (IIa) și factorul Xa",
   "UFH se administrează de obicei bolus apoi perfuzie ghidată de APTT, ținta fiind de regulă 1,5-2,5 ori controlul",
   "Heparina se absoarbe oral complet și nu necesită antitrombină"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este un amestec de polizaharide din mucoasa intestinală porcină, distrusă în stomac, deci parenterală — Corect: Originea porcină și calea parenterală sunt explicite.\n\nSe leagă printr-o secvență pentazaharidică de antitrombină, crescându-i activitatea de cel puțin 1.000 de ori — Corect: Potențarea antitrombinei de ≥1000 de ori este mecanismul.\n\nInhibă mai ales trombina (IIa) și factorul Xa — Corect: IIa și Xa sunt țintele principale.\n\nUFH se administrează de obicei bolus apoi perfuzie ghidată de APTT, ținta fiind de regulă 1,5-2,5 ori controlul — Corect: Ținta APTT 1,5-2,5 este intervalul citat.\n\nHeparina se absoarbe oral complet și nu necesită antitrombină — Incorect: Heparina este distrusă în stomac și acționează via antitrombină.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1014, Anticoagulante injectabile — Heparina (pagini PDF: 204).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1014
   ],
   "pdfPages": [
    204
   ],
   "section": "Anticoagulante injectabile — Heparina"
  },
  "learningObjective": "Corelarea originii porcine, a pentazaharidului–AT (×1000) și a țintei APTT 1,5-2,5.",
  "optionRationales": [
   "Originea porcină și calea parenterală sunt explicite.",
   "Potențarea antitrombinei de ≥1000 de ori este mecanismul.",
   "IIa și Xa sunt țintele principale.",
   "Ținta APTT 1,5-2,5 este intervalul citat.",
   "Heparina este distrusă în stomac și acționează via antitrombină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru detalii de mecanism/monitorizare; distractorul pretinde absorbție orală, contrazisă de distrugerea gastrică."
  },
  "textbookExpressions": [
   "1.000 de ori",
   "1,5-2,5"
  ]
 },
 {
  "id": "tromboembolism-adv-029",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Fondaparinuxul, spre deosebire de heparine:",
  "options": [
   "Este un pentazaharid sintetic care, prin lanțul scurt, inhibă doar factorul Xa, nu trombina",
   "Se administrează subcutanat, are timp de înjumătățire de aproximativ 18 ore și se excretă renal",
   "Efectul nu este inversat de sulfatul de protamină și nu se folosește în insuficiență renală importantă",
   "Este un amestec biologic porcin, identic UFH ca țintă IIa=Xa",
   "Protamina anulează complet fondaparinuxul, ca pe UFH"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este un pentazaharid sintetic care, prin lanțul scurt, inhibă doar factorul Xa, nu trombina — Corect: Sinteza și selectivitatea Xa sunt din paragraf.\n\nSe administrează subcutanat, are timp de înjumătățire de aproximativ 18 ore și se excretă renal — Corect: 18 ore și excreția renală sunt explicite.\n\nEfectul nu este inversat de sulfatul de protamină și nu se folosește în insuficiență renală importantă — Corect: Absența reversibilității cu protamină și limita renală sunt enunțate.\n\nEste un amestec biologic porcin, identic UFH ca țintă IIa=Xa — Incorect: Fondaparinuxul nu este biologic porcin și nu inhibă IIa.\n\nProtamina anulează complet fondaparinuxul, ca pe UFH — Incorect: Protamina nu inversează fondaparinuxul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1015, Fondaparinux (pagini PDF: 205).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1015
   ],
   "pdfPages": [
    205
   ],
   "section": "Fondaparinux"
  },
  "learningObjective": "Distingerea pentazaharidului sintetic anti-Xa, a t½ 18 ore și a absenței antidotului cu protamină.",
  "optionRationales": [
   "Sinteza și selectivitatea Xa sunt din paragraf.",
   "18 ore și excreția renală sunt explicite.",
   "Absența reversibilității cu protamină și limita renală sunt enunțate.",
   "Fondaparinuxul nu este biologic porcin și nu inhibă IIa.",
   "Protamina nu inversează fondaparinuxul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie fondaparinuxului originea și antidotul UFH, inversând tocmai particulariățile clasei."
  },
  "textbookExpressions": [
   "pentazaharid sintetic",
   "aproximativ 18 ore"
  ]
 },
 {
  "id": "tromboembolism-adv-030",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Identificați afirmația corectă referitoare la momentul și gravitatea HIT, dincolo de mecanismul IgG–FP4:",
  "options": [
   "Apare de obicei la 5-14 zile de la heparină, cu scădere peste 30% a trombocitelor în 1-2 zile; trombocitele scad rar sub 20×10⁹/L",
   "Riscul de tromboză venoasă sau arterială, fără tratament prompt, este de 50% în zilele următoare",
   "Debutul este imediat în primul minut al primei doze, cu trombocite constant sub 5×10⁹/L",
   "HIT se manifestă predominant prin hemoragii cerebrale, nu prin tromboză",
   "Scăderea trombocitelor sub 20×10⁹/L este regula, nu excepția"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Apare de obicei la 5-14 zile de la heparină, cu scădere peste 30% a trombocitelor în 1-2 zile; trombocitele scad rar sub 20×10⁹/L — Corect: Fereastra 5-14 zile, delta >30% și raritatea <20 sunt din paragraf.\n\nRiscul de tromboză venoasă sau arterială, fără tratament prompt, este de 50% în zilele următoare — Corect: Riscul de 50% este explicit.\n\nDebutul este imediat în primul minut al primei doze, cu trombocite constant sub 5×10⁹/L — Incorect: Debutul nu este în primul minut al primei expuneri naive.\n\nHIT se manifestă predominant prin hemoragii cerebrale, nu prin tromboză — Incorect: Tendința este protrombotică, nu hemoragică.\n\nScăderea trombocitelor sub 20×10⁹/L este regula, nu excepția — Incorect: Scăderea sub 20 este rară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1015, Trombocitopenia indusă de heparină (pagini PDF: 205).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1015
   ],
   "pdfPages": [
    205
   ],
   "section": "Trombocitopenia indusă de heparină"
  },
  "learningObjective": "Reținerea ferestrei 5-14 zile, a pragului >30% și a riscului trombotic de 50%, cu raritatea trombocitelor <20.",
  "optionRationales": [
   "Fereastra 5-14 zile, delta >30% și raritatea <20 sunt din paragraf.",
   "Riscul de 50% este explicit.",
   "Debutul nu este în primul minut al primei expuneri naive.",
   "Tendința este protrombotică, nu hemoragică.",
   "Scăderea sub 20 este rară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează fereastra temporală și caracterul protrombotic, două nuanțe alăturate mecanismului deja cunoscut."
  },
  "textbookExpressions": [
   "5-14 zile",
   "50%"
  ]
 },
 {
  "id": "tromboembolism-adv-031",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Warfarina, ca antagonist al vitaminei K:",
  "options": [
   "Inhibă sinteza hepatică a factorilor II, VII, IX și X și a proteinelor C și S",
   "Atingerea efectului complet durează cel puțin 5 zile; t½ al factorului VII este circa 6 ore, al protrombinei circa 60 de ore",
   "Pentru majoritatea pacienților, INR țintă este 2,0-3,0; o minoritate cu TEV recurent în țintă trece la 3,0-4,0",
   "Timpul de înjumătățire al warfarinei este de aproximativ 36 de ore",
   "Efectul maxim apare în 2 ore, similar apixabanului, fără nevoie de heparină la start"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Inhibă sinteza hepatică a factorilor II, VII, IX și X și a proteinelor C și S — Corect: Cei patru factori și PC/PS sunt țintele.\n\nAtingerea efectului complet durează cel puțin 5 zile; t½ al factorului VII este circa 6 ore, al protrombinei circa 60 de ore — Corect: 5 zile și contrastul 6 vs 60 de ore explică overlap-ul cu heparina.\n\nPentru majoritatea pacienților, INR țintă este 2,0-3,0; o minoritate cu TEV recurent în țintă trece la 3,0-4,0 — Corect: Intervalele INR 2-3 și 3-4 sunt explicite.\n\nTimpul de înjumătățire al warfarinei este de aproximativ 36 de ore — Corect: 36 de ore este t½ citat.\n\nEfectul maxim apare în 2 ore, similar apixabanului, fără nevoie de heparină la start — Incorect: 2 ore este efectul maxim al DOAC, nu al warfarinei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1016, Antagoniștii vitaminei K — Warfarina (pagini PDF: 206).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1016
   ],
   "pdfPages": [
    206
   ],
   "section": "Antagoniștii vitaminei K — Warfarina"
  },
  "learningObjective": "Integrarea țintelor II/VII/IX/X, a t½ 6 vs 60 de ore, a INR 2-3 (sau 3-4) și a t½ 36 de ore a warfarinei.",
  "optionRationales": [
   "Cei patru factori și PC/PS sunt țintele.",
   "5 zile și contrastul 6 vs 60 de ore explică overlap-ul cu heparina.",
   "Intervalele INR 2-3 și 3-4 sunt explicite.",
   "36 de ore este t½ citat.",
   "2 ore este efectul maxim al DOAC, nu al warfarinei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru date farmacologice; distractorul aplică Tmax-ul DOAC de 2 ore asupra warfarinei."
  },
  "textbookExpressions": [
   "2,0-3,0",
   "aproximativ 36 de ore"
  ]
 },
 {
  "id": "tromboembolism-adv-032",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Monitorizarea și riscurile warfarinei:",
  "options": [
   "La inițiere, INR se măsoară aproape zilnic până când este în țintă 2 zile consecutive; pe termen lung, cel puțin o dată la 8-12 săptămâni dacă este stabil",
   "Riscul de sângerare majoră este de 2% pe an, iar circa 0,25% pe an au sângerare fatală, de obicei intracraniană",
   "Warfarina nu trece în laptele matern, fiind sigură la alăptare",
   "Întreruperea pre-procedurală ține seama de t½ lung; înlocuirea cu LMWH permite oprire mai aproape de procedură",
   "Sângerarea majoră apare doar când INR depășește 5, fiind nulă în intervalul 2-3"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "La inițiere, INR se măsoară aproape zilnic până când este în țintă 2 zile consecutive; pe termen lung, cel puțin o dată la 8-12 săptămâni dacă este stabil — Corect: Aproape zilnic apoi 8-12 săptămâni este schema.\n\nRiscul de sângerare majoră este de 2% pe an, iar circa 0,25% pe an au sângerare fatală, de obicei intracraniană — Corect: 2% major și 0,25% fatal sunt cifrele.\n\nWarfarina nu trece în laptele matern, fiind sigură la alăptare — Corect: Absența pasajului în lapte este explicită.\n\nÎntreruperea pre-procedurală ține seama de t½ lung; înlocuirea cu LMWH permite oprire mai aproape de procedură — Corect: Contrastul t½ warfarină vs LMWH ghidează bridging-ul.\n\nSângerarea majoră apare doar când INR depășește 5, fiind nulă în intervalul 2-3 — Incorect: Majoritatea sângerărilor apar când INR este în intervalul terapeutic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1016, Monitorizarea tratamentului cu warfarină; Riscuri (pagini PDF: 206).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1016
   ],
   "pdfPages": [
    206
   ],
   "section": "Monitorizarea tratamentului cu warfarină; Riscuri"
  },
  "learningObjective": "Reținerea ritmului 8-12 săptămâni, a riscului 2%/0,25% și a siguranței la alăptare.",
  "optionRationales": [
   "Aproape zilnic apoi 8-12 săptămâni este schema.",
   "2% major și 0,25% fatal sunt cifrele.",
   "Absența pasajului în lapte este explicită.",
   "Contrastul t½ warfarină vs LMWH ghidează bridging-ul.",
   "Majoritatea sângerărilor apar când INR este în intervalul terapeutic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul pretinde siguranță absolută în INR 2-3, contrazisă de text (majoritatea sângerărilor sunt în țintă)."
  },
  "textbookExpressions": [
   "2% pe an",
   "0,25%"
  ]
 },
 {
  "id": "tromboembolism-adv-033",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Proprietățile comparative ale DOAC din Cadranul 29.9 includ:",
  "options": [
   "Efectul maxim al apixabanului, edoxabanului, rivaroxabanului și dabigatranului este la circa 2 ore, față de 5 zile (variabil) la warfarină",
   "Eliminarea renală este circa 25% apixaban, 50% edoxaban, 33% rivaroxaban și 80% dabigatran",
   "Antidotul dabigatranului este idarucizumab; pentru inhibitorii Xa se menționează andexanet (neautorizat în tabel)",
   "Rivaroxabanul trebuie consumat cu alimente pentru a-i crește biodisponibilitatea",
   "Dabigatranul nu are eliminare renală, fiind preferat la clearance sub 15 ml/min"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Efectul maxim al apixabanului, edoxabanului, rivaroxabanului și dabigatranului este la circa 2 ore, față de 5 zile (variabil) la warfarină — Corect: Tmax 2 ore versus 5 zile este din tabel.\n\nEliminarea renală este circa 25% apixaban, 50% edoxaban, 33% rivaroxaban și 80% dabigatran — Corect: Cele patru procente renale sunt din rândul eliminării.\n\nAntidotul dabigatranului este idarucizumab; pentru inhibitorii Xa se menționează andexanet (neautorizat în tabel) — Corect: Idarucizumab versus andexanet este distincția antidoturilor.\n\nRivaroxabanul trebuie consumat cu alimente pentru a-i crește biodisponibilitatea — Corect: Nota de subsol cere alimente pentru rivaroxaban.\n\nDabigatranul nu are eliminare renală, fiind preferat la clearance sub 15 ml/min — Incorect: Dabigatranul are 80% eliminare renală, cu limita inferioară de 30 ml/min.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1017, Cadranul 29.9 — Anticoagulante orale (pagini PDF: 207).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1017
   ],
   "pdfPages": [
    207
   ],
   "section": "Cadranul 29.9 — Anticoagulante orale"
  },
  "learningObjective": "Compararea Tmax 2 ore, a fracțiilor renale 25/50/33/80% și a antidoturilor idarucizumab/andexanet.",
  "optionRationales": [
   "Tmax 2 ore versus 5 zile este din tabel.",
   "Cele patru procente renale sunt din rândul eliminării.",
   "Idarucizumab versus andexanet este distincția antidoturilor.",
   "Nota de subsol cere alimente pentru rivaroxaban.",
   "Dabigatranul are 80% eliminare renală, cu limita inferioară de 30 ml/min."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează profilul renal al dabigatranului (80%), cel mai dependent de clearance dintre DOAC."
  },
  "textbookExpressions": [
   "80%",
   "ldarucizumab"
  ]
 },
 {
  "id": "tromboembolism-adv-034",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Situațiile speciale ale DOAC, conform textului:",
  "options": [
   "Traversează placenta și nu trebuie folosite în sarcină, la concepție sau la alăptare",
   "Sunt contraindicate la înlocuire valvulară mecanică sau stenoză mitrală moderată/severă",
   "Inhibitorii Xa sunt aprobați până la clearance 15 ml/min, dar datele sub 30 ml/min rămân limitate; dabigatranul are limita inferioară 30 ml/min",
   "În tromboza asociată cancerului, DOAC cresc riscul de sângerare digestivă, LMWH rămânând preferată când acest risc contează",
   "DOAC sunt de primă intenție la protezele mecanice, warfarina fiind abandonată"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Traversează placenta și nu trebuie folosite în sarcină, la concepție sau la alăptare — Corect: Pasajul transplacentar și alăptarea sunt interdicții.\n\nSunt contraindicate la înlocuire valvulară mecanică sau stenoză mitrală moderată/severă — Corect: Proteza mecanică și stenoza mitrală sunt contraindicații.\n\nInhibitorii Xa sunt aprobați până la clearance 15 ml/min, dar datele sub 30 ml/min rămân limitate; dabigatranul are limita inferioară 30 ml/min — Corect: Pragurile 15 și 30 ml/min sunt nuanțate.\n\nÎn tromboza asociată cancerului, DOAC cresc riscul de sângerare digestivă, LMWH rămânând preferată când acest risc contează — Corect: Sângerarea GI și preferința LMWH în cancer sunt explicite.\n\nDOAC sunt de primă intenție la protezele mecanice, warfarina fiind abandonată — Incorect: Protezele mecanice contraindică DOAC.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1017, DOAC — Situații speciale (pagini PDF: 207).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1017
   ],
   "pdfPages": [
    207
   ],
   "section": "DOAC — Situații speciale"
  },
  "learningObjective": "Recunoașterea interdicțiilor (sarcină, proteză mecanică, stenoză mitrală) și a preferinței LMWH în cancer digestiv.",
  "optionRationales": [
   "Pasajul transplacentar și alăptarea sunt interdicții.",
   "Proteza mecanică și stenoza mitrală sunt contraindicații.",
   "Pragurile 15 și 30 ml/min sunt nuanțate.",
   "Sângerarea GI și preferința LMWH în cancer sunt explicite.",
   "Protezele mecanice contraindică DOAC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează contraindicația de la proteza mecanică, o capcană clasică față de FA non-valvulară."
  },
  "textbookExpressions": [
   "valvele cardiace",
   "sângerare gastrointestinală"
  ]
 },
 {
  "id": "tromboembolism-adv-035",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Testarea trombofiliei în TEV nou:",
  "options": [
   "Trombofiliile ereditare se depistează în aproximativ 20% din cazurile de TEV, dar nu joacă un rol semnificativ în tromboza arterială",
   "Indicațiile rămân controversate",
   "Toți pacienții cu TEV neprovocată trebuie testați genetic înaintea primei doze de anticoagulant",
   "Trombofilia ereditară explică majoritatea trombozelor arteriale coronariene",
   "Testarea înlocuiește hemoleucograma, funcția renală și radiografia toracică din bilanțul inițial"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Trombofiliile ereditare se depistează în aproximativ 20% din cazurile de TEV, dar nu joacă un rol semnificativ în tromboza arterială — Corect: 20% și absența rolului arterial sunt explicite.\n\nIndicațiile rămân controversate — Corect: Controversa indicațiilor este enunțată.\n\nToți pacienții cu TEV neprovocată trebuie testați genetic înaintea primei doze de anticoagulant — Incorect: Testarea nu este un pas prealabil universal.\n\nTrombofilia ereditară explică majoritatea trombozelor arteriale coronariene — Incorect: Rolul arterial este descris ca nesemnificativ.\n\nTestarea înlocuiește hemoleucograma, funcția renală și radiografia toracică din bilanțul inițial — Incorect: Bilanțul general (hemogramă, rinichi, ficat, Rx, urină) rămâne primul pas.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1011, Investigarea cazurilor noi — Testarea trombofiliei (pagini PDF: 201).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1011
   ],
   "pdfPages": [
    201
   ],
   "section": "Investigarea cazurilor noi — Testarea trombofiliei"
  },
  "learningObjective": "Plasarea randamentului de 20% în TEV venos, cu rol nesemnificativ arterial și indicații controversate.",
  "optionRationales": [
   "20% și absența rolului arterial sunt explicite.",
   "Controversa indicațiilor este enunțată.",
   "Testarea nu este un pas prealabil universal.",
   "Rolul arterial este descris ca nesemnificativ.",
   "Bilanțul general (hemogramă, rinichi, ficat, Rx, urină) rămâne primul pas."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă un test controversat, cu randament 20%, într-un pas obligatoriu sau într-o explicație a trombozei arteriale."
  },
  "textbookExpressions": [
   "aproximativ 20%",
   "nu joacă un rol semnificativ"
  ]
 },
 {
  "id": "tromboembolism-adv-036",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Evaluarea generală a TEV neprovocat recent include:",
  "options": [
   "Hemoleucogramă, funcție renală și hepatică inclusiv calciu seric, coagulogramă, radiografie toracică și analiză de urină",
   "La peste 40 de ani, NICE propune luarea în considerare a CT abdomino-pelvin și, la femei, a mamografiei, deși beneficiul de supraviețuire este incert",
   "Bilanțul se limitează la D-dimeri, celelalte teste fiind superflue după confirmarea imagistică",
   "Calciul seric este omis intenționat, neavând loc în screeningul de cancer",
   "Mamografia este rezervată bărbaților sub 40 de ani"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Hemoleucogramă, funcție renală și hepatică inclusiv calciu seric, coagulogramă, radiografie toracică și analiză de urină — Corect: Cele cinci categorii de teste sunt lista.\n\nLa peste 40 de ani, NICE propune luarea în considerare a CT abdomino-pelvin și, la femei, a mamografiei, deși beneficiul de supraviețuire este incert — Corect: Pragul de 40 de ani și incertitudinea beneficiului sunt explicite.\n\nBilanțul se limitează la D-dimeri, celelalte teste fiind superflue după confirmarea imagistică — Incorect: D-dimerii nu înlocuiesc bilanțul general.\n\nCalciul seric este omis intenționat, neavând loc în screeningul de cancer — Incorect: Calciul seric este inclus.\n\nMamografia este rezervată bărbaților sub 40 de ani — Incorect: Mamografia este propusă la femei, nu la bărbați tineri.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1011, Investigații generale (pagini PDF: 201).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1011
   ],
   "pdfPages": [
    201
   ],
   "section": "Investigații generale"
  },
  "learningObjective": "Reținerea pachetului de laborator/Rx și a screeningului imagistic NICE după 40 de ani, cu incertitudinea de supraviețuire.",
  "optionRationales": [
   "Cele cinci categorii de teste sunt lista.",
   "Pragul de 40 de ani și incertitudinea beneficiului sunt explicite.",
   "D-dimerii nu înlocuiesc bilanțul general.",
   "Calciul seric este inclus.",
   "Mamografia este propusă la femei, nu la bărbați tineri."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii anulează calciul și inversează populația țintă a mamografiei din aceeași recomandare NICE."
  },
  "textbookExpressions": [
   "peste 40 de ani",
   "calciul seric"
  ]
 },
 {
  "id": "tromboembolism-adv-037",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "Femeilor cu sindrom antifosfolipidic în context obstetrical li se administrează, în general:",
  "options": [
   "Aspirină în doză mică și LMWH în doză profilactică, pe tot parcursul sarcinii",
   "Warfarină cu INR 3-4 pe tot parcursul sarcinii, ca în SAFL trombotic",
   "DOAC în doze terapeutice, fiind sigure în sarcină",
   "Doar aspirină după săptămâna 36, fără heparină",
   "Niciun anticoagulant, riscul obstetrical fiind independent de tromboză"
  ],
  "correct": [
   0
  ],
  "explanation": "Aspirină în doză mică și LMWH în doză profilactică, pe tot parcursul sarcinii — Corect: Asocierea aspirină + LMWH profilactic este conduita descrisă.\n\nWarfarină cu INR 3-4 pe tot parcursul sarcinii, ca în SAFL trombotic — Incorect: Warfarina este teratogenă în fereastra 6-12 săptămâni.\n\nDOAC în doze terapeutice, fiind sigure în sarcină — Incorect: DOAC traversează placenta.\n\nDoar aspirină după săptămâna 36, fără heparină — Incorect: Heparina profilactică se administrează pe tot parcursul sarcinii, nu doar tardiv.\n\nNiciun anticoagulant, riscul obstetrical fiind independent de tromboză — Incorect: Anticoagularea/antiagregarea este tocmai strategia citată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1011, Sindromul antifosfolipidic — Context obstetrical (pagini PDF: 201).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1011
   ],
   "pdfPages": [
    201
   ],
   "section": "Sindromul antifosfolipidic — Context obstetrical"
  },
  "learningObjective": "Identificarea asocierii aspirină în doză mică plus LMWH profilactic pe toată sarcina.",
  "optionRationales": [
   "Asocierea aspirină + LMWH profilactic este conduita descrisă.",
   "Warfarina este teratogenă în fereastra 6-12 săptămâni.",
   "DOAC traversează placenta.",
   "Heparina profilactică se administrează pe tot parcursul sarcinii, nu doar tardiv.",
   "Anticoagularea/antiagregarea este tocmai strategia citată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică intensitatea INR 3-4 a SAFL trombotic sau DOAC asupra sarcinii, unde textul cere aspirină + LMWH profilactic."
  },
  "textbookExpressions": [
   "doză mică",
   "doză profilactică"
  ]
 },
 {
  "id": "tromboembolism-adv-038",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "Hipertensiunea pulmonară tromboembolică cronică, ca sechelă a EP, poate beneficia de:",
  "options": [
   "Endarterectomie pulmonară, la o parte dintre pacienți, după evaluare de către specialiști în boli respiratorii",
   "Tromboliză sistemică tardivă, aplicată de rutină la luni de la episodul acut",
   "Transplant cardiac imediat, endarterectomia fiind considerată inutilă",
   "Evaluare de primă intenție de către chirurgul vascular periferic, fără expertiză respiratorie",
   "Oprirea anticoagulării de îndată ce hipertensiunea pulmonară este documentată"
  ],
  "correct": [
   0
  ],
  "explanation": "Endarterectomie pulmonară, la o parte dintre pacienți, după evaluare de către specialiști în boli respiratorii — Corect: Evaluarea de către pneumologi și endarterectomia de succes la o parte dintre pacienți sunt cele din text.\n\nTromboliză sistemică tardivă, aplicată de rutină la luni de la episodul acut — Incorect: Tromboliza sistemică privește EP acută masivă, nu sechela cronică.\n\nTransplant cardiac imediat, endarterectomia fiind considerată inutilă — Incorect: Endarterectomia poate fi de succes; nu este descrisă ca inutilă.\n\nEvaluare de primă intenție de către chirurgul vascular periferic, fără expertiză respiratorie — Incorect: Textul atribuie evaluarea specialiștilor în boli respiratorii.\n\nOprirea anticoagulării de îndată ce hipertensiunea pulmonară este documentată — Incorect: Anticoagularea rămâne parte a managementului TEV; textul nu cere oprirea ei la documentarea HTP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1011, Complicații — Hipertensiunea pulmonară cronică (pagini PDF: 201).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1011
   ],
   "pdfPages": [
    201
   ],
   "section": "Complicații — Hipertensiunea pulmonară cronică"
  },
  "learningObjective": "Identificarea endarterectomiei pulmonare ca opțiune chirurgicală selectată, după evaluare respiratorie.",
  "optionRationales": [
   "Evaluarea de către pneumologi și endarterectomia de succes la o parte dintre pacienți sunt cele din text.",
   "Tromboliza sistemică privește EP acută masivă, nu sechela cronică.",
   "Endarterectomia poate fi de succes; nu este descrisă ca inutilă.",
   "Textul atribuie evaluarea specialiștilor în boli respiratorii.",
   "Anticoagularea rămâne parte a managementului TEV; textul nu cere oprirea ei la documentarea HTP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută tromboliza acută asupra formei cronice și neagă endarterectomia descrisă."
  },
  "textbookExpressions": [
   "endarterectomie pulmonară",
   "bolilor respiratorii"
  ]
 },
 {
  "id": "tromboembolism-adv-039",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Profilaxia farmacologică a TEV:",
  "options": [
   "Presupune anticoagulante în doze mai mici decât cele terapeutice; cel mai adesea LMWH în timpul internării",
   "După chirurgie abdominală importantă pentru cancer, administrarea poate continua o perioadă după externare",
   "DOAC în doză mică au fost aprobate pentru prevenție după înlocuire majoră de șold și genunchi",
   "Dozele profilactice sunt identice celor terapeutice, pentru a dizolva trombii preexistenți",
   "LMWH profilactică se evită după chirurgia oncologică abdominală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Presupune anticoagulante în doze mai mici decât cele terapeutice; cel mai adesea LMWH în timpul internării — Corect: Dozele subterapeutice și LMWH-ul de internare sunt enunțate.\n\nDupă chirurgie abdominală importantă pentru cancer, administrarea poate continua o perioadă după externare — Corect: Prelungirea după cancer abdominal este exemplul dat.\n\nDOAC în doză mică au fost aprobate pentru prevenție după înlocuire majoră de șold și genunchi — Corect: Aprobarea DOAC după șold/genunchi este explicită.\n\nDozele profilactice sunt identice celor terapeutice, pentru a dizolva trombii preexistenți — Incorect: Profilaxia nu este doză terapeutică și nu dizolvă trombi formați.\n\nLMWH profilactică se evită după chirurgia oncologică abdominală — Incorect: Chirurgia oncologică abdominală este tocmai contextul de prelungire.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1013, Profilaxia farmacologică (pagini PDF: 203).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1013
   ],
   "pdfPages": [
    203
   ],
   "section": "Profilaxia farmacologică"
  },
  "learningObjective": "Distingerea dozei profilactice de cea terapeutică și a prelungirii post-externare în chirurgia oncologică, plus DOAC după artroplastie.",
  "optionRationales": [
   "Dozele subterapeutice și LMWH-ul de internare sunt enunțate.",
   "Prelungirea după cancer abdominal este exemplul dat.",
   "Aprobarea DOAC după șold/genunchi este explicită.",
   "Profilaxia nu este doză terapeutică și nu dizolvă trombi formați.",
   "Chirurgia oncologică abdominală este tocmai contextul de prelungire."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă doza profilactică cu cea terapeutică și neagă prelungirea post-cancer pe care textul o recomandă."
  },
  "textbookExpressions": [
   "doze mai mici",
   "înlocuire a şoldului"
  ]
 },
 {
  "id": "tromboembolism-adv-040",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Inițierea coagulării, în descrierea capitolului despre anticoagulante:",
  "options": [
   "Inițierea are loc prin legarea factorului VII circulant de factorul tisular de pe celulele subendoteliale, ducând la factor X activat (sistem extrinsec)",
   "Urmează o primă producere de trombină și amplificare prin sistemul intrinsc, cu activare suplimentară a factorului X",
   "Anticoagulantele acționează prin inhibarea producerii și/sau a activității trombinei",
   "Inițierea este independentă de factorul tisular, pornind doar din contactul cu sticla",
   "Factorul VII nu participă la inițierea descrisă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Inițierea are loc prin legarea factorului VII circulant de factorul tisular de pe celulele subendoteliale, ducând la factor X activat (sistem extrinsec) — Corect: Complexul VII–FT și denumirea de sistem extrinsec sunt explicite.\n\nUrmează o primă producere de trombină și amplificare prin sistemul intrinsc, cu activare suplimentară a factorului X — Corect: Amplificarea intrinscă este pasul următor.\n\nAnticoagulantele acționează prin inhibarea producerii și/sau a activității trombinei — Corect: Inhibarea trombinei este modul comun al anticoagulantelor.\n\nInițierea este independentă de factorul tisular, pornind doar din contactul cu sticla — Incorect: Inițierea este dependentă de factorul tisular.\n\nFactorul VII nu participă la inițierea descrisă — Incorect: Factorul VII este piesa de start.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1014, Medicația anticoagulantă — Inițierea coagulării (pagini PDF: 204).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1014
   ],
   "pdfPages": [
    204
   ],
   "section": "Medicația anticoagulantă — Inițierea coagulării"
  },
  "learningObjective": "Localizarea inițierii la complexul VII–factor tisular (extrinsec) și a amplificării prin intrinsc către trombină.",
  "optionRationales": [
   "Complexul VII–FT și denumirea de sistem extrinsec sunt explicite.",
   "Amplificarea intrinscă este pasul următor.",
   "Inhibarea trombinei este modul comun al anticoagulantelor.",
   "Inițierea este dependentă de factorul tisular.",
   "Factorul VII este piesa de start."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii neagă factorul tisular și factorul VII, exact cuplul de inițiere din paragraf."
  },
  "textbookExpressions": [
   "factorul tisular",
   "sistem extrinsec"
  ]
 },
 {
  "id": "tromboembolism-adv-041",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "Tromboza, spre deosebire de hemostaza fiziologică, constă în:",
  "options": [
   "Formarea, în interiorul unui vas, a unei mase solide din constituenți ai sângelui, atașată de perete, din care se pot desprinde emboli",
   "Formarea unui cheag bogat în fibrină situat în afara endoteliului, ca răspuns la o leziune",
   "Ocluzia arterială prin placă de aterom, fără fibrină sau trombocite",
   "Liza spontană a cheagului, fără participarea trombocitelor",
   "Un proces limitat la capilare, fără atașare de peretele vascular"
  ],
  "correct": [
   0
  ],
  "explanation": "Formarea, în interiorul unui vas, a unei mase solide din constituenți ai sângelui, atașată de perete, din care se pot desprinde emboli — Corect: Definiția trombului intramural, atașat, cu emboli este cea din paragraf.\n\nFormarea unui cheag bogat în fibrină situat în afara endoteliului, ca răspuns la o leziune — Incorect: Cheagul extraendotelial după leziune este hemostaza fiziologică, nu tromboza.\n\nOcluzia arterială prin placă de aterom, fără fibrină sau trombocite — Incorect: Placa ateromatoasă este discutată ca factor al trombozei arteriale, nu ca definiție.\n\nLiza spontană a cheagului, fără participarea trombocitelor — Incorect: Textul descrie generarea de fibrină cu participare variabilă a trombocitelor, nu liza spontană.\n\nUn proces limitat la capilare, fără atașare de peretele vascular — Incorect: Trombul se formează pe peretele vasului și este atașat de el.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1001, Patogeneza trombozei — Definiție (pagini PDF: 191).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1001
   ],
   "pdfPages": [
    191
   ],
   "section": "Patogeneza trombozei — Definiție"
  },
  "learningObjective": "Separarea trombozei (masă intramurală cu emboli) de hemostaza extravasculară de după leziune.",
  "optionRationales": [
   "Definiția trombului intramural, atașat, cu emboli este cea din paragraf.",
   "Cheagul extraendotelial după leziune este hemostaza fiziologică, nu tromboza.",
   "Placa ateromatoasă este discutată ca factor al trombozei arteriale, nu ca definiție.",
   "Textul descrie generarea de fibrină cu participare variabilă a trombocitelor, nu liza spontană.",
   "Trombul se formează pe peretele vasului și este atașat de el."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reciclează hemostaza fiziologică și placa arterială din triada de pe pagina următoare ca și cum ar fi definiția trombozei."
  },
  "textbookExpressions": [
   "masă localizată solidă",
   "în afara endoteliului"
  ]
 },
 {
  "id": "tromboembolism-adv-042",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "În triada lui Virchow, ponderea componentelor diferă astfel:",
  "options": [
   "Tromboza arterială este influențată mai ales de turbulență și de disfuncția peretelui vascular produse de plăcile ateromatoase",
   "Staza și hipercoagulabilitatea sunt mai relevante pentru patogeneza trombozei venoase",
   "Cele trei elemente sunt staza/turbulența, disfuncția peretelui și hipercoagulabilitatea",
   "Staza este determinantul principal al trombozei arteriale, placa neavând rol",
   "Hipercoagulabilitatea explică tromboza arterială, nu pe cea venoasă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tromboza arterială este influențată mai ales de turbulență și de disfuncția peretelui vascular produse de plăcile ateromatoase — Corect: Perechea turbulență–disfuncție de perete prin aterom este explicită pentru arterial.\n\nStaza și hipercoagulabilitatea sunt mai relevante pentru patogeneza trombozei venoase — Corect: Staza și hipercoagulabilitatea sunt atribuite venosului.\n\nCele trei elemente sunt staza/turbulența, disfuncția peretelui și hipercoagulabilitatea — Corect: Cele trei elemente ale triadei sunt enumerate.\n\nStaza este determinantul principal al trombozei arteriale, placa neavând rol — Incorect: Textul atribuie staza venosului, nu arterialului.\n\nHipercoagulabilitatea explică tromboza arterială, nu pe cea venoasă — Incorect: Hipercoagulabilitatea este mai relevantă venos, nu arterial.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1002, Factorii care influențează tromboza — Virchow (pagini PDF: 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1002
   ],
   "pdfPages": [
    192
   ],
   "section": "Factorii care influențează tromboza — Virchow"
  },
  "learningObjective": "Contrastarea pachetului arterial (turbulență + placă) cu cel venos (stază + hipercoagulabilitate).",
  "optionRationales": [
   "Perechea turbulență–disfuncție de perete prin aterom este explicită pentru arterial.",
   "Staza și hipercoagulabilitatea sunt atribuite venosului.",
   "Cele trei elemente ale triadei sunt enumerate.",
   "Textul atribuie staza venosului, nu arterialului.",
   "Hipercoagulabilitatea este mai relevantă venos, nu arterial."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează atribuirea stază/placă între arterial și venos, distincția centrală a paragrafului."
  },
  "textbookExpressions": [
   "triada lui Virchow",
   "plăcile ateromatoase"
  ]
 },
 {
  "id": "tromboembolism-adv-043",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Scorul Wells cu două niveluri pentru TVP (Cadranul 29.3) include printre caracteristici:",
  "options": [
   "Cancer activ (sub tratament în ultimele 6 luni sau paleație)",
   "Repaus la pat recent ≥3 zile sau chirurgie majoră în ultimele 12 săptămâni sub anestezie",
   "Gambă edemațiată cu cel puțin 3 cm mai mare decât cea asimptomatică și un diagnostic alternativ la fel de probabil (scor −2)",
   "TVP probabilă la un scor simplificat ≥2; scorul singur nu confirmă și nu exclude TEV",
   "Un scor Wells pozitiv confirmă TVP fără D-dimeri sau imagistică"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Cancer activ (sub tratament în ultimele 6 luni sau paleație) — Corect: Cancerul activ din ultimele 6 luni figurează în tabel.\n\nRepaus la pat recent ≥3 zile sau chirurgie majoră în ultimele 12 săptămâni sub anestezie — Corect: Pragurile 3 zile și 12 săptămâni sunt din listă.\n\nGambă edemațiată cu cel puțin 3 cm mai mare decât cea asimptomatică și un diagnostic alternativ la fel de probabil (scor −2) — Corect: Δ3 cm și punctajul −2 pentru diagnosticul alternativ sunt explicite.\n\nTVP probabilă la un scor simplificat ≥2; scorul singur nu confirmă și nu exclude TEV — Corect: Pragul ≥2 și absența valorii diagnostice izolate sunt din textul însoțitor.\n\nUn scor Wells pozitiv confirmă TVP fără D-dimeri sau imagistică — Incorect: Textul precizează că scorurile nu confirmă și nu exclud, fiind necesară evaluare suplimentară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1004, Cadranul 29.3 — Scorul Wells pentru TVP (pagini PDF: 194).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1004
   ],
   "pdfPages": [
    194
   ],
   "section": "Cadranul 29.3 — Scorul Wells pentru TVP"
  },
  "learningObjective": "Reținerea itemilor (cancer, imobilizare 3 zile/12 săptămâni, Δ3 cm, −2 pentru alternativ) și a pragului ≥2, cu limita că scorul nu diagnostichează singur.",
  "optionRationales": [
   "Cancerul activ din ultimele 6 luni figurează în tabel.",
   "Pragurile 3 zile și 12 săptămâni sunt din listă.",
   "Δ3 cm și punctajul −2 pentru diagnosticul alternativ sunt explicite.",
   "Pragul ≥2 și absența valorii diagnostice izolate sunt din textul însoțitor.",
   "Textul precizează că scorurile nu confirmă și nu exclud, fiind necesară evaluare suplimentară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru itemi/praguri reale; distractorul transformă un scor de predicție într-un test de confirmare."
  },
  "textbookExpressions": [
   "cel puţin 3 cm",
   "2:2"
  ]
 },
 {
  "id": "tromboembolism-adv-044",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Măsurarea D-dimerilor în algoritmul NICE se caracterizează prin:",
  "options": [
   "D-dimerii sunt produși de degradare a fibrinei; nivelurile crescute nu sunt specifice TEV, întâlnindu-se la vârstnici, în infecții, postoperator, cancer și sarcină",
   "Valoarea predictivă negativă este ridicată: TEV este foarte puțin probabilă la probabilitate pre-test scăzută (Wells) cu D-dimeri sub prag, fără imagistică suplimentară",
   "Rămâne o rată mică de eșec (<2% în 3 luni); D-dimeri crescuți sau Wells „probabil” impun imagistică",
   "D-dimerii pozitivi confirmă TEV și înlocuiesc ultrasonografia",
   "Valoarea predictivă negativă este nulă, deci D-dimerii se omit la probabilitate scăzută"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "D-dimerii sunt produși de degradare a fibrinei; nivelurile crescute nu sunt specifice TEV, întâlnindu-se la vârstnici, în infecții, postoperator, cancer și sarcină — Corect: Lista de cauze nespecifice este cea din paragraf.\n\nValoarea predictivă negativă este ridicată: TEV este foarte puțin probabilă la probabilitate pre-test scăzută (Wells) cu D-dimeri sub prag, fără imagistică suplimentară — Corect: VPN-ul ridicat și omiterea imagisticii la Wells improbabil + D-dimeri sub prag sunt explicite.\n\nRămâne o rată mică de eșec (<2% în 3 luni); D-dimeri crescuți sau Wells „probabil” impun imagistică — Corect: <2% la 3 luni și indicația de imagistică la D-dimeri crescuți sau Wells probabil sunt enunțate.\n\nD-dimerii pozitivi confirmă TEV și înlocuiesc ultrasonografia — Incorect: D-dimerii pozitivi nu confirmă; impun imagistică.\n\nValoarea predictivă negativă este nulă, deci D-dimerii se omit la probabilitate scăzută — Incorect: Algoritmul se bazează tocmai pe VPN.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1004, Măsurarea D-dimerilor (pagini PDF: 194).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1004
   ],
   "pdfPages": [
    194
   ],
   "section": "Măsurarea D-dimerilor"
  },
  "learningObjective": "Contrastarea specificității joase cu VPN-ul ridicat și cu rata de eșec <2% la 3 luni.",
  "optionRationales": [
   "Lista de cauze nespecifice este cea din paragraf.",
   "VPN-ul ridicat și omiterea imagisticii la Wells improbabil + D-dimeri sub prag sunt explicite.",
   "<2% la 3 luni și indicația de imagistică la D-dimeri crescuți sau Wells probabil sunt enunțate.",
   "D-dimerii pozitivi nu confirmă; impun imagistică.",
   "Algoritmul se bazează tocmai pe VPN."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează VPN-ul (temelia algoritmului) și transformă un test de excludere într-unul de confirmare."
  },
  "textbookExpressions": [
   "valoa￾rea lor predictivă negativă",
   "<2% în 3 luni"
  ]
 },
 {
  "id": "tromboembolism-adv-045",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Ultrasonografia în suspiciunea de TVP:",
  "options": [
   "Explorarea proximală (comprimarea poplitee și femurală) este foarte sensibilă pentru TVP proximală (>95%), dar mai puțin pentru cea distală (70%)",
   "La Wells „probabil”, o scanare negativă limitată la sistemul proximal nu exclude diagnosticul; se repetă ultrasonografia proximală după 5-7 zile sau se scanează tot membrul",
   "Sensibilitatea pentru TVP distală depășește 95%, repetarea la 5-7 zile fiind superfluă",
   "Venografia rămâne standardul de primă intenție, ultrasonografia fiind abandonată",
   "O scanare proximală negativă la Wells probabil infirmă orice TVP distală"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Explorarea proximală (comprimarea poplitee și femurală) este foarte sensibilă pentru TVP proximală (>95%), dar mai puțin pentru cea distală (70%) — Corect: Cele două sensibilități sunt cifrele din text.\n\nLa Wells „probabil”, o scanare negativă limitată la sistemul proximal nu exclude diagnosticul; se repetă ultrasonografia proximală după 5-7 zile sau se scanează tot membrul — Corect: Regula Wells probabil + scan proximal negativ și fereastra 5-7 zile sunt din paragraf și din Fig. 29.2.\n\nSensibilitatea pentru TVP distală depășește 95%, repetarea la 5-7 zile fiind superfluă — Incorect: 70% nu depășește 95%; repetarea este cerută.\n\nVenografia rămâne standardul de primă intenție, ultrasonografia fiind abandonată — Incorect: Ultrasonografia a înlocuit venografia ca standard de aur.\n\nO scanare proximală negativă la Wells probabil infirmă orice TVP distală — Incorect: Textul precizează că scanarea proximală negativă nu identifică unele TVP distale.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1004, 1005, Examinarea imagistică a TVP (pagini PDF: 194, 195).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1004,
    1005
   ],
   "pdfPages": [
    194,
    195
   ],
   "section": "Examinarea imagistică a TVP"
  },
  "learningObjective": "Reținerea sensibilităților >95% proximal / 70% distal și a ferestrei de re-scanare 5-7 zile.",
  "optionRationales": [
   "Cele două sensibilități sunt cifrele din text.",
   "Regula Wells probabil + scan proximal negativ și fereastra 5-7 zile sunt din paragraf și din Fig. 29.2.",
   "70% nu depășește 95%; repetarea este cerută.",
   "Ultrasonografia a înlocuit venografia ca standard de aur.",
   "Textul precizează că scanarea proximală negativă nu identifică unele TVP distale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează sensibilitățile 95%/70% și anulează re-scanarea de 5-7 zile din algoritm."
  },
  "textbookExpressions": [
   ">95%",
   "5-7 zile"
  ]
 },
 {
  "id": "tromboembolism-adv-046",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "Dacă imagistica diagnostică pentru TEV nu poate fi finalizată imediat, prima doză de anticoagulant se administrează când se anticipează o întârziere de peste:",
  "options": [
   "O oră în suspiciunea de EP și 4 ore în suspiciunea de TVP",
   "24 de ore atât pentru EP, cât și pentru TVP, fără doză intermediară",
   "O oră în TVP și 4 ore în EP, invers față de urgența embolică",
   "12 ore, indiferent de suspiciune",
   "Anticoagularea se amână până după imagistică, chiar dacă întârzierea depășește o zi"
  ],
  "correct": [
   0
  ],
  "explanation": "O oră în suspiciunea de EP și 4 ore în suspiciunea de TVP — Corect: Pragurile 1 oră (EP) și 4 ore (TVP) sunt enunțate explicit; investigațiile se completează în primele 24 de ore.\n\n24 de ore atât pentru EP, cât și pentru TVP, fără doză intermediară — Incorect: 24 de ore este termenul de finalizare a investigațiilor, nu pragul de start al anticoagulantului.\n\nO oră în TVP și 4 ore în EP, invers față de urgența embolică — Incorect: Sensul pragurilor este inversat.\n\n12 ore, indiferent de suspiciune — Incorect: 12 ore nu este cifra din text.\n\nAnticoagularea se amână până după imagistică, chiar dacă întârzierea depășește o zi — Incorect: Textul cere tocmai o primă doză dacă intervalul depășește pragurile.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1005, Calendarul efectuării investigațiilor (pagini PDF: 195).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1005
   ],
   "pdfPages": [
    195
   ],
   "section": "Calendarul efectuării investigațiilor"
  },
  "learningObjective": "Reținerea ferestrelor diferite: >1 oră pentru EP versus >4 ore pentru TVP, plus completarea în 24 de ore.",
  "optionRationales": [
   "Pragurile 1 oră (EP) și 4 ore (TVP) sunt enunțate explicit; investigațiile se completează în primele 24 de ore.",
   "24 de ore este termenul de finalizare a investigațiilor, nu pragul de start al anticoagulantului.",
   "Sensul pragurilor este inversat.",
   "12 ore nu este cifra din text.",
   "Textul cere tocmai o primă doză dacă intervalul depășește pragurile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută pragurile 1 oră versus 4 ore între EP și TVP, capcana temporală a aceluiași paragraf."
  },
  "textbookExpressions": [
   "o oră",
   "4 ore"
  ]
 },
 {
  "id": "tromboembolism-adv-047",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Scintigrafia de ventilație-perfuzie (V/Q) în suspiciunea de EP:",
  "options": [
   "Are o fază de perfuzie (agregate de albumină marcate cu tehnețiu i.v.) și o fază de ventilație (xenon sau tehnețiu inhalat)",
   "Diagnosticul de EP se pune pe anomalii de perfuzie cu ventilație normală; un rezultat normal exclude EP",
   "Avantajul este doza mai mică de radiații, fiind preferată în insuficiență renală și alergie la contrastul i.v.; dezavantajul este disponibilitatea mai mică și rezultatele adesea neconcludente",
   "V/Q înlocuiește CTPA ca tehnică cea mai comună, contrastul iodat fiind necesar în V/Q",
   "Un V/Q normal nu exclude EP, spre deosebire de CTPA"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Are o fază de perfuzie (agregate de albumină marcate cu tehnețiu i.v.) și o fază de ventilație (xenon sau tehnețiu inhalat) — Corect: Cele două faze și tracerii sunt din paragraf.\n\nDiagnosticul de EP se pune pe anomalii de perfuzie cu ventilație normală; un rezultat normal exclude EP — Corect: Mismatch-ul și puterea de excludere a unui rezultat normal sunt explicite.\n\nAvantajul este doza mai mică de radiații, fiind preferată în insuficiență renală și alergie la contrastul i.v.; dezavantajul este disponibilitatea mai mică și rezultatele adesea neconcludente — Corect: Doza mai mică de radiații, preferința renală/alergică și neajunsurile sunt enunțate.\n\nV/Q înlocuiește CTPA ca tehnică cea mai comună, contrastul iodat fiind necesar în V/Q — Incorect: CTPA este tehnica cea mai comună; V/Q nu folosește contrast iodat i.v.\n\nUn V/Q normal nu exclude EP, spre deosebire de CTPA — Incorect: Textul spune că rezultatul normal exclude EP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1005, Examinarea imagistică a EP — V/Q (pagini PDF: 195).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1005
   ],
   "pdfPages": [
    195
   ],
   "section": "Examinarea imagistică a EP — V/Q"
  },
  "learningObjective": "Contrastarea mismatch-ului perfuzie/ventilație și a preferinței V/Q în IRC/alergie cu caracterul adesea neconcludent.",
  "optionRationales": [
   "Cele două faze și tracerii sunt din paragraf.",
   "Mismatch-ul și puterea de excludere a unui rezultat normal sunt explicite.",
   "Doza mai mică de radiații, preferința renală/alergică și neajunsurile sunt enunțate.",
   "CTPA este tehnica cea mai comună; V/Q nu folosește contrast iodat i.v.",
   "Textul spune că rezultatul normal exclude EP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează ierarhia CTPA/V/Q și neagă puterea de excludere a V/Q normal."
  },
  "textbookExpressions": [
   "fază de perfuzie",
   "insuficienţă renală"
  ]
 },
 {
  "id": "tromboembolism-adv-048",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "La un pacient cu suspiciune de EP și hipotensiune, dacă CTPA de urgență nu este posibilă, capitolul indică:",
  "options": [
   "Ecocardiografie transtoracică la patul bolnavului, care poate arăta hipertensiune pulmonară acută și disfuncție de ventricul drept",
   "Așteptarea unei scintigrafii V/Q programate a doua zi, fără altă evaluare",
   "D-dimeri ca unică investigație, ecocardiografia fiind inutilă în șoc",
   "Venografie de membru inferior ca substitut imediat al CTPA",
   "Oprirea oricărei imagistici, mortalitatea fiind oricum mică în această minoritate"
  ],
  "correct": [
   0
  ],
  "explanation": "Ecocardiografie transtoracică la patul bolnavului, care poate arăta hipertensiune pulmonară acută și disfuncție de ventricul drept — Corect: Rolul eco-ului transtoracic (HTP acută, disfuncție VD) este explicit; mortalitatea acestei minorități este ridicată.\n\nAșteptarea unei scintigrafii V/Q programate a doua zi, fără altă evaluare — Incorect: V/Q nu este substitutul de urgență descris în șoc.\n\nD-dimeri ca unică investigație, ecocardiografia fiind inutilă în șoc — Incorect: D-dimerii nu înlocuiesc imagistica în instabilitate.\n\nVenografie de membru inferior ca substitut imediat al CTPA — Incorect: Venografia privește TVP, nu EP masivă.\n\nOprirea oricărei imagistici, mortalitatea fiind oricum mică în această minoritate — Incorect: Textul subliniază mortalitatea ridicată și nevoia de diagnostic prompt.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1005, Prezentările în urgență — EP hipotensivă (pagini PDF: 195).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1005
   ],
   "pdfPages": [
    195
   ],
   "section": "Prezentările în urgență — EP hipotensivă"
  },
  "learningObjective": "Identificarea eco-ului la pat ca substitut diagnostic când CTPA de urgență nu este disponibilă.",
  "optionRationales": [
   "Rolul eco-ului transtoracic (HTP acută, disfuncție VD) este explicit; mortalitatea acestei minorități este ridicată.",
   "V/Q nu este substitutul de urgență descris în șoc.",
   "D-dimerii nu înlocuiesc imagistica în instabilitate.",
   "Venografia privește TVP, nu EP masivă.",
   "Textul subliniază mortalitatea ridicată și nevoia de diagnostic prompt."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vigneta cere substitutul de pat (eco VD) din același paragraf care definește minoritatea hipotensivă cu mortalitate ridicată."
  },
  "textbookExpressions": [
   "ecocardiografia transtoracică",
   "disfuncţiei ventriculare drepte"
  ]
 },
 {
  "id": "tromboembolism-adv-049",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Schemele de inițiere ale DOAC în TEV, distinct de warfarina cu overlap heparinic, includ:",
  "options": [
   "Edoxabanul și dabigatranul sunt precedate de anticoagulare parenterală (LMWH) 5 zile, trecerea făcându-se în ziua a șasea fără suprapunere",
   "Apixabanul și rivaroxabanul nu necesită anticoagulant parenteral, fiind folosite de la început în doză inițială mai mare, 7 zile, respectiv 21 de zile",
   "Există trei inhibitori direcți ai factorului Xa (apixaban, edoxaban, rivaroxaban) și un inhibitor direct al trombinei (dabigatran)",
   "Dabigatranul se începe din ziua 0, fără LMWH, identic apixabanului",
   "Rivaroxabanul impune 5 zile de UFH i.v. înaintea oricărei doze orale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Edoxabanul și dabigatranul sunt precedate de anticoagulare parenterală (LMWH) 5 zile, trecerea făcându-se în ziua a șasea fără suprapunere — Corect: Puntea de 5 zile fără overlap este explicită.\n\nApixabanul și rivaroxabanul nu necesită anticoagulant parenteral, fiind folosite de la început în doză inițială mai mare, 7 zile, respectiv 21 de zile — Corect: Dozele inițiale mai mari 7 și 21 de zile sunt enunțate.\n\nExistă trei inhibitori direcți ai factorului Xa (apixaban, edoxaban, rivaroxaban) și un inhibitor direct al trombinei (dabigatran) — Corect: Cele trei anti-Xa și dabigatranul anti-IIa sunt din deschidere.\n\nDabigatranul se începe din ziua 0, fără LMWH, identic apixabanului — Incorect: Dabigatranul cere tocmai LMWH 5 zile.\n\nRivaroxabanul impune 5 zile de UFH i.v. înaintea oricărei doze orale — Incorect: Rivaroxabanul este din grupul fără parenteral.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1007, 1006, Anticoagulantele orale directe — Scheme de start (pagini PDF: 197, 196).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1007,
    1006
   ],
   "pdfPages": [
    197,
    196
   ],
   "section": "Anticoagulantele orale directe — Scheme de start"
  },
  "learningObjective": "Contrastarea punții de 5 zile (edoxaban/dabigatran) cu încărcarea 7/21 de zile (apixaban/rivaroxaban).",
  "optionRationales": [
   "Puntea de 5 zile fără overlap este explicită.",
   "Dozele inițiale mai mari 7 și 21 de zile sunt enunțate.",
   "Cele trei anti-Xa și dabigatranul anti-IIa sunt din deschidere.",
   "Dabigatranul cere tocmai LMWH 5 zile.",
   "Rivaroxabanul este din grupul fără parenteral."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută schemele 5 zile versus 7/21 de zile între cele două perechi de DOAC din același paragraf."
  },
  "textbookExpressions": [
   "ziua a şasea",
   "21 de zile"
  ]
 },
 {
  "id": "tromboembolism-adv-050",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Anticoagularea în sarcină, dincolo de interdicția transplacentară a DOAC/warfarinei ca clasă:",
  "options": [
   "Warfarina produce embriopatie între săptămânile 6 și 12 (hipoplazie nazală, epifize punctate), iar mai târziu hemoragie fetală, anomalii neurologice și risc de deces intrauterin",
   "La femeia care rămâne gravidă sub warfarină, medicamentul este sigur până în săptămâna 6; atunci se înlocuiește cu LMWH, care nu traversează placenta",
   "Warfarina și LMWH sunt sigure la alăptare; pentru DOAC acest lucru nu este bine stabilit, deci se evită",
   "Warfarina este teratogenă din ziua concepției, fără fereastră sigură până în săptămâna 6",
   "LMWH traversează placenta identic warfarinei, fiind evitată pe tot parcursul sarcinii"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Warfarina produce embriopatie între săptămânile 6 și 12 (hipoplazie nazală, epifize punctate), iar mai târziu hemoragie fetală, anomalii neurologice și risc de deces intrauterin — Corect: Embriopatia 6-12 și sechelele tardive sunt din paragraf.\n\nLa femeia care rămâne gravidă sub warfarină, medicamentul este sigur până în săptămâna 6; atunci se înlocuiește cu LMWH, care nu traversează placenta — Corect: Siguranța până în săptămâna 6 și comutarea pe LMWH sunt explicite.\n\nWarfarina și LMWH sunt sigure la alăptare; pentru DOAC acest lucru nu este bine stabilit, deci se evită — Corect: Contrastul alăptare este de la pagina următoare.\n\nWarfarina este teratogenă din ziua concepției, fără fereastră sigură până în săptămâna 6 — Incorect: Există o fereastră până în săptămâna 6.\n\nLMWH traversează placenta identic warfarinei, fiind evitată pe tot parcursul sarcinii — Incorect: LMWH nu traversează placenta și este tratamentul de elecție.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1007, 1008, Femeile gravide; Mamele care alăptează (pagini PDF: 197, 198).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1007,
    1008
   ],
   "pdfPages": [
    197,
    198
   ],
   "section": "Femeile gravide; Mamele care alăptează"
  },
  "learningObjective": "Reținerea ferestrei teratogene 6-12 săptămâni, a siguranței până în săptămâna 6 și a contrastului alăptare warfarină/LMWH versus DOAC.",
  "optionRationales": [
   "Embriopatia 6-12 și sechelele tardive sunt din paragraf.",
   "Siguranța până în săptămâna 6 și comutarea pe LMWH sunt explicite.",
   "Contrastul alăptare este de la pagina următoare.",
   "Există o fereastră până în săptămâna 6.",
   "LMWH nu traversează placenta și este tratamentul de elecție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii anulează fereastra până în săptămâna 6 și atribuie LMWH pasajul transplacentar al warfarinei."
  },
  "textbookExpressions": [
   "6-a şi a 12-a",
   "săptămâna a 6-a"
  ]
 },
 {
  "id": "tromboembolism-adv-051",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "În PESI simplificat (Cadranul 29.5), mortalitatea la 30 de zile este:",
  "options": [
   "Circa 1% (IC 0-2,1%) la 0 puncte și circa 10,9% (IC 8,5-30,2%) la ≥1 punct",
   "Identică în ambele trepte, circa 20%, independent de punctaj",
   "Nulă la ≥1 punct, clasa simplificată neavând valoare prognostică",
   "Superioară clasei V originale doar când vârsta este sub 40 de ani",
   "Calculată doar din saturația de oxigen, celelalte itemuri fiind omise"
  ],
  "correct": [
   0
  ],
  "explanation": "Circa 1% (IC 0-2,1%) la 0 puncte și circa 10,9% (IC 8,5-30,2%) la ≥1 punct — Corect: Cele două procente cu intervale de încredere sunt din tabelul versiunii simplificate.\n\nIdentică în ambele trepte, circa 20%, independent de punctaj — Incorect: Textul distinge clar cele două trepte.\n\nNulă la ≥1 punct, clasa simplificată neavând valoare prognostică — Incorect: ≥1 punct crește mortalitatea, nu o anulează.\n\nSuperioară clasei V originale doar când vârsta este sub 40 de ani — Incorect: Vârsta >80 de ani valorează 1 punct; nu este vorba de sub 40 de ani.\n\nCalculată doar din saturația de oxigen, celelalte itemuri fiind omise — Incorect: Itemurile includ vârstă, cancer, IC, BPCO, AV, TAS, nu doar saturația.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1008, Cadranul 29.5 — PESI original și simplificat (pagini PDF: 198).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1008
   ],
   "pdfPages": [
    198
   ],
   "section": "Cadranul 29.5 — PESI original și simplificat"
  },
  "learningObjective": "Reținerea splitului 0 puncte ≈1% versus ≥1 punct ≈10,9% mortalitate la 30 de zile.",
  "optionRationales": [
   "Cele două procente cu intervale de încredere sunt din tabelul versiunii simplificate.",
   "Textul distinge clar cele două trepte.",
   "≥1 punct crește mortalitatea, nu o anulează.",
   "Vârsta >80 de ani valorează 1 punct; nu este vorba de sub 40 de ani.",
   "Itemurile includ vârstă, cancer, IC, BPCO, AV, TAS, nu doar saturația."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută mortalitățile 1% și 10,9% sau anulează pragul de 1 punct al versiunii simplificate."
  },
  "textbookExpressions": [
   "1%",
   "10,9%"
  ]
 },
 {
  "id": "tromboembolism-adv-052",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Rolul trombolizei în TEV, potrivit capitolului:",
  "options": [
   "Anticoagulantele previn extensia și recurența, dar nu dizolvă trombii, spre deosebire de trombolitice",
   "Tromboliticele sunt rareori folosite din cauza riscului mai mare de hemoragie majoră, inclusiv 2% hemoragie intracraniană",
   "În EP masivă cu TAS ≤90 mmHg, tromboliza sistemică (sau ocazional pe cateter) poate salva viața prin restabilirea rapidă a perfuziei pulmonare",
   "Tromboliza este tratamentul de rutină al TVP distale, riscul hemoragic fiind neglijabil",
   "Anticoagulantele dizolvă trombul format, tromboliza fiind rezervată TVP distale asimptomatice"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Anticoagulantele previn extensia și recurența, dar nu dizolvă trombii, spre deosebire de trombolitice — Corect: Distincția prevenire versus dizolvare este fraza de deschidere.\n\nTromboliticele sunt rareori folosite din cauza riscului mai mare de hemoragie majoră, inclusiv 2% hemoragie intracraniană — Corect: Cifra de 2% ICH este explicită.\n\nÎn EP masivă cu TAS ≤90 mmHg, tromboliza sistemică (sau ocazional pe cateter) poate salva viața prin restabilirea rapidă a perfuziei pulmonare — Corect: Pragul TAS ≤90 mmHg și potențialul de salvare sunt enunțate.\n\nTromboliza este tratamentul de rutină al TVP distale, riscul hemoragic fiind neglijabil — Incorect: TVP distală nu este indicația de rutină.\n\nAnticoagulantele dizolvă trombul format, tromboliza fiind rezervată TVP distale asimptomatice — Incorect: Relația liza/anticoagulant este inversă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1008, Rolul trombolizei (pagini PDF: 198).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1008
   ],
   "pdfPages": [
    198
   ],
   "section": "Rolul trombolizei"
  },
  "learningObjective": "Contrastarea absenței lizei sub anticoagulant cu pragul TAS ≤90 mmHg și cu riscul de 2% ICH.",
  "optionRationales": [
   "Distincția prevenire versus dizolvare este fraza de deschidere.",
   "Cifra de 2% ICH este explicită.",
   "Pragul TAS ≤90 mmHg și potențialul de salvare sunt enunțate.",
   "TVP distală nu este indicația de rutină.",
   "Relația liza/anticoagulant este inversă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează cine dizolvă trombul și mută tromboliza pe TVP distală, departe de EP masivă."
  },
  "textbookExpressions": [
   "2% de hemoragie intracraniană",
   ":590 mmHg"
  ]
 },
 {
  "id": "tromboembolism-adv-053",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "Dacă anticoagularea pentru TEV este oprită după cel puțin 3 luni, riscul de tromboză recurentă în anul următor este de aproximativ:",
  "options": [
   "5%",
   "1%",
   "30%",
   "50%",
   "0%, durata peste 3 luni anulând recurența"
  ],
  "correct": [
   0
  ],
  "explanation": "5% — Corect: Cifra de aproximativ 5% în anul următor este explicită; o durată mai lungă peste 3 luni nu reduce recurența după oprire.\n\n1% — Incorect: 1% este mortalitatea PESI 0, nu recurența după oprire.\n\n30% — Incorect: 30% este recurența la 5 ani a TEV neprovocat.\n\n50% — Incorect: 50% este riscul trombotic netratat al HIT, nu recurența post-oprire.\n\n0%, durata peste 3 luni anulând recurența — Incorect: Textul neagă anularea recurenței prin prelungire peste 3 luni.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1009, Durata anticoagulării — Recurența după oprire (pagini PDF: 199).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1009
   ],
   "pdfPages": [
    199
   ],
   "section": "Durata anticoagulării — Recurența după oprire"
  },
  "learningObjective": "Reținerea cifrei de ~5% în anul de după oprirea tratamentului de ≥3 luni, independent de prelungirea anterioară.",
  "optionRationales": [
   "Cifra de aproximativ 5% în anul următor este explicită; o durată mai lungă peste 3 luni nu reduce recurența după oprire.",
   "1% este mortalitatea PESI 0, nu recurența după oprire.",
   "30% este recurența la 5 ani a TEV neprovocat.",
   "50% este riscul trombotic netratat al HIT, nu recurența post-oprire.",
   "Textul neagă anularea recurenței prin prelungire peste 3 luni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reciclează 1%, 30% și 50% din același capitol (PESI, neprovocat, HIT) în locul pragului de 5%."
  },
  "textbookExpressions": [
   "aproximativ 5%",
   "cel puţin 3 luni"
  ]
 },
 {
  "id": "tromboembolism-adv-054",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Riscul de recurență după TEV, în datele de stratificare:",
  "options": [
   "TEV neprovocat: circa 10% la 1 an și 30% la 5 ani; riscul este mai mare la bărbați, la al doilea eveniment și la EP/TVP proximală versus TVP distală",
   "Riscul de EP recurentă este mai mare dacă prezentarea inițială a fost EP, nu TVP, iar fatalitatea cazului este mai mare în EP",
   "Majoritatea TVP distale simptomatice se tratează 3 luni; la factor provocator tranzitor rezolvat, durata poate scădea la 6 săptămâni",
   "TVP de membru superior asociată cateterului se anticoagulează cel puțin 3 luni și mai mult dacă linia rămâne in situ",
   "Recurența este mai mică la bărbați și după EP decât după TVP distală, motiv pentru a opri anticoagularea la o lună"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "TEV neprovocat: circa 10% la 1 an și 30% la 5 ani; riscul este mai mare la bărbați, la al doilea eveniment și la EP/TVP proximală versus TVP distală — Corect: Cifrele 10% și 30% plus gradientul masculin/proximal sunt din deschidere.\n\nRiscul de EP recurentă este mai mare dacă prezentarea inițială a fost EP, nu TVP, iar fatalitatea cazului este mai mare în EP — Corect: Gradientul EP versus TVP și fatalitatea sunt explicite.\n\nMajoritatea TVP distale simptomatice se tratează 3 luni; la factor provocator tranzitor rezolvat, durata poate scădea la 6 săptămâni — Corect: 3 luni versus 6 săptămâni este practica distalei.\n\nTVP de membru superior asociată cateterului se anticoagulează cel puțin 3 luni și mai mult dacă linia rămâne in situ — Corect: Regula cateterului ≥3 luni este enunțată.\n\nRecurența este mai mică la bărbați și după EP decât după TVP distală, motiv pentru a opri anticoagularea la o lună — Incorect: Sensurile (bărbați, EP) sunt inverse față de text.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1010, Riscul de recurență (pagini PDF: 200).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1010
   ],
   "pdfPages": [
    200
   ],
   "section": "Riscul de recurență"
  },
  "learningObjective": "Integrarea 10%/30% neprovocat, a gradientului sex/sediu și a duratelor 3 luni versus 6 săptămâni (distal) și ≥3 luni (cateter).",
  "optionRationales": [
   "Cifrele 10% și 30% plus gradientul masculin/proximal sunt din deschidere.",
   "Gradientul EP versus TVP și fatalitatea sunt explicite.",
   "3 luni versus 6 săptămâni este practica distalei.",
   "Regula cateterului ≥3 luni este enunțată.",
   "Sensurile (bărbați, EP) sunt inverse față de text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru praguri de recurență/durată; distractorul inversează sexul și ierarhia EP versus distală."
  },
  "textbookExpressions": [
   "10% la 1 an",
   "6 săptămâni"
  ]
 },
 {
  "id": "tromboembolism-adv-055",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Sindromul post-trombotic, dincolo de prevalența de 40% după TVP proximală:",
  "options": [
   "În forma severă produce afectare cutanată permanentă (roșeață, hiperpigmentare, ectazii, lipodermatoscleroză), iar 5-10% dezvoltă ulcerație de membru inferior, recidivantă și greu de tratat",
   "Rolul ciorapilor până la genunchi cu compresie graduală de cel puțin 24 mmHg la gleznă în prevenția SPT rămâne controversat",
   "Ulcerația apare la peste 80% după orice TVP distală, ciorapii de 24 mmHg fiind inutili simptomatic",
   "SPT se datorează doar hipertensiunii arteriale sistemice, fără ocluzie venoasă sau leziune valvulară",
   "Ciorapii de 8 mmHg sunt standardul de prevenție, controversa privind 24 mmHg fiind infirmată"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "În forma severă produce afectare cutanată permanentă (roșeață, hiperpigmentare, ectazii, lipodermatoscleroză), iar 5-10% dezvoltă ulcerație de membru inferior, recidivantă și greu de tratat — Corect: Spectrul cutanat sever și 5-10% ulcerații sunt din paragraf.\n\nRolul ciorapilor până la genunchi cu compresie graduală de cel puțin 24 mmHg la gleznă în prevenția SPT rămâne controversat — Corect: Pragul ≥24 mmHg și controversa sunt explicite.\n\nUlcerația apare la peste 80% după orice TVP distală, ciorapii de 24 mmHg fiind inutili simptomatic — Incorect: 5-10% nu este 80%; unii pacienți au beneficiu simptomatic.\n\nSPT se datorează doar hipertensiunii arteriale sistemice, fără ocluzie venoasă sau leziune valvulară — Incorect: Mecanismul include ocluzie proximală, valve, colaterale, hipertensiune venoasă.\n\nCiorapii de 8 mmHg sunt standardul de prevenție, controversa privind 24 mmHg fiind infirmată — Incorect: Cifra din text este 24 mmHg, nu 8.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1010, Sindromul post-trombotic — Ulcerație; Ciorapi (pagini PDF: 200).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1010
   ],
   "pdfPages": [
    200
   ],
   "section": "Sindromul post-trombotic — Ulcerație; Ciorapi"
  },
  "learningObjective": "Reținerea ulcerației de 5-10% și a pragului controversat ≥24 mmHg, distinct de prevalența SPT deja acoperită.",
  "optionRationales": [
   "Spectrul cutanat sever și 5-10% ulcerații sunt din paragraf.",
   "Pragul ≥24 mmHg și controversa sunt explicite.",
   "5-10% nu este 80%; unii pacienți au beneficiu simptomatic.",
   "Mecanismul include ocluzie proximală, valve, colaterale, hipertensiune venoasă.",
   "Cifra din text este 24 mmHg, nu 8."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii umflă ulcerația de la 5-10% la 80% și înlocuiesc pragul controversat de 24 mmHg."
  },
  "textbookExpressions": [
   "5-10%",
   "24 mmHg"
  ]
 },
 {
  "id": "tromboembolism-adv-056",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Factorul V Leiden, în datele de prevalență și risc:",
  "options": [
   "Heterozigotul este prezent la circa 5% dintre europeni/mediteraneeni, lipsește în estul Asiei, crește riscul de TEV pe viață de cinci ori și este găsit la circa 20% din cazurile de TEV",
   "La purtătoarele heterozigote pe contraceptiv oral combinat, riscul crește de circa 30 de ori față de non-purtătoarele fără pilulă, dar riscul absolut rămâne semnificativ sub 0,5% pe an",
   "Homozigoții sunt mult mai rari, cu risc de tromboză circa de 10 ori mai mare decât heterozigoții",
   "Mutația explică majoritatea trombozelor arteriale coronariene la vârstnici",
   "Riscul absolut la tânăra pe pilulă depășește 10% pe an, contraindicând orice contraceptiv hormonal la non-purtătoare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Heterozigotul este prezent la circa 5% dintre europeni/mediteraneeni, lipsește în estul Asiei, crește riscul de TEV pe viață de cinci ori și este găsit la circa 20% din cazurile de TEV — Corect: Prevalența 5%, absența asiatică, 5× și 20% din TEV sunt din paragraf.\n\nLa purtătoarele heterozigote pe contraceptiv oral combinat, riscul crește de circa 30 de ori față de non-purtătoarele fără pilulă, dar riscul absolut rămâne semnificativ sub 0,5% pe an — Corect: 30× și plafonul <0,5%/an sunt explicite.\n\nHomozigoții sunt mult mai rari, cu risc de tromboză circa de 10 ori mai mare decât heterozigoții — Corect: Homozigotul de ~10 ori față de heterozigot este enunțat.\n\nMutația explică majoritatea trombozelor arteriale coronariene la vârstnici — Incorect: Trombofiliile ereditare nu joacă un rol semnificativ arterial.\n\nRiscul absolut la tânăra pe pilulă depășește 10% pe an, contraindicând orice contraceptiv hormonal la non-purtătoare — Incorect: Textul subliniază că absolutul rămâne sub 0,5%/an.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1011, Factorul V Leiden (pagini PDF: 201).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1011
   ],
   "pdfPages": [
    201
   ],
   "section": "Factorul V Leiden"
  },
  "learningObjective": "Integrarea 5%/5×/20%, a multiplicatorului 30× cu absolutul <0,5%/an și a homozigotului 10×.",
  "optionRationales": [
   "Prevalența 5%, absența asiatică, 5× și 20% din TEV sunt din paragraf.",
   "30× și plafonul <0,5%/an sunt explicite.",
   "Homozigotul de ~10 ori față de heterozigot este enunțat.",
   "Trombofiliile ereditare nu joacă un rol semnificativ arterial.",
   "Textul subliniază că absolutul rămâne sub 0,5%/an."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere simultan 5×, 30× și <0,5%/an; distractorul transformă riscul relativ mare într-un absolut de 10%/an."
  },
  "textbookExpressions": [
   "cinci ori",
   "0,5% pe an"
  ]
 },
 {
  "id": "tromboembolism-adv-057",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "Mutația G20210A a genei protrombinei se caracterizează prin:",
  "options": [
   "Creșterea nivelului de protrombină și a riscului de TEV de 2-3 ori pe viață; este prezentă la circa 2% din populația albă și la circa 5% dintre persoanele cu TEV",
   "Un risc de 30 de ori, identic heterozigotului FV Leiden pe pilulă",
   "Absența din TEV, fiind relevantă doar pentru tromboza arterială",
   "Homozigotia este condiția necesară pentru a avea vreun efect",
   "O prevalență de 20% în populația generală, identică FV Leiden din TEV"
  ],
  "correct": [
   0
  ],
  "explanation": "Creșterea nivelului de protrombină și a riscului de TEV de 2-3 ori pe viață; este prezentă la circa 2% din populația albă și la circa 5% dintre persoanele cu TEV — Corect: Cele trei cifre sunt enunțate explicit.\n\nUn risc de 30 de ori, identic heterozigotului FV Leiden pe pilulă — Incorect: 30× aparține interacțiunii FV Leiden–OCP.\n\nAbsența din TEV, fiind relevantă doar pentru tromboza arterială — Incorect: Rolul este venos, nu arterial.\n\nHomozigotia este condiția necesară pentru a avea vreun efect — Incorect: Textul nu cere homozigotie.\n\nO prevalență de 20% în populația generală, identică FV Leiden din TEV — Incorect: 20% este ponderea FV Leiden în TEV, nu prevalența G20210A.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1011, Mutația genei protrombinei G20210A (pagini PDF: 201).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1011
   ],
   "pdfPages": [
    201
   ],
   "section": "Mutația genei protrombinei G20210A"
  },
  "learningObjective": "Reținerea tripletului 2-3× / 2% populație albă / 5% din TEV, distinct de FV Leiden.",
  "optionRationales": [
   "Cele trei cifre sunt enunțate explicit.",
   "30× aparține interacțiunii FV Leiden–OCP.",
   "Rolul este venos, nu arterial.",
   "Textul nu cere homozigotie.",
   "20% este ponderea FV Leiden în TEV, nu prevalența G20210A."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică cifrele FV Leiden (30×, 20%) asupra mutației de protrombină 2-3×/2%/5%."
  },
  "textbookExpressions": [
   "G20210A",
   "2-3 ori"
  ]
 },
 {
  "id": "tromboembolism-adv-058",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Deficitul de antitrombină, spre deosebire de FV Leiden:",
  "options": [
   "Deficitul heterozigot este rar, crește riscul de TEV de circa 10 ori și se identifică prin activitate, nu printr-un test genetic unic",
   "Nivelul poate fi scăzut dobândit (boală acută, chirurgie, heparină, ficat, sindrom nefrotic); pacienții pot fi relativ rezistenți la heparină, antitrombina fiind necesară acțiunii ei",
   "Tratamentul fazei acute nu se schimbă după identificarea trombofiliei; testarea se face de preferință după faza acută și după ≥3 luni de anticoagulare",
   "Deficitul se diagnostichează genetic din prima zi de heparină, nivelul scăzut fiind specific mutației",
   "Heparina este mai eficientă în deficitul de AT, rezistența fiind infirmată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Deficitul heterozigot este rar, crește riscul de TEV de circa 10 ori și se identifică prin activitate, nu printr-un test genetic unic — Corect: 10× și măsurarea activității sunt din paragraf.\n\nNivelul poate fi scăzut dobândit (boală acută, chirurgie, heparină, ficat, sindrom nefrotic); pacienții pot fi relativ rezistenți la heparină, antitrombina fiind necesară acțiunii ei — Corect: Cauzele dobândite și rezistența la heparină sunt explicite.\n\nTratamentul fazei acute nu se schimbă după identificarea trombofiliei; testarea se face de preferință după faza acută și după ≥3 luni de anticoagulare — Corect: Regula de a nu testa în acut și de a aștepta ≥3 luni este de la pagina următoare.\n\nDeficitul se diagnostichează genetic din prima zi de heparină, nivelul scăzut fiind specific mutației — Incorect: Nivelul scăzut poate fi dobândit; testarea genetică nu este metoda.\n\nHeparina este mai eficientă în deficitul de AT, rezistența fiind infirmată — Incorect: Textul descrie rezistență relativă, nu eficacitate crescută.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1011, 1012, Pierderea funcției — Antitrombina (pagini PDF: 201, 202).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1011,
    1012
   ],
   "pdfPages": [
    201,
    202
   ],
   "section": "Pierderea funcției — Antitrombina"
  },
  "learningObjective": "Reținerea riscului 10×, a falsului AT scăzut sub heparină și a rezistenței relative la heparină.",
  "optionRationales": [
   "10× și măsurarea activității sunt din paragraf.",
   "Cauzele dobândite și rezistența la heparină sunt explicite.",
   "Regula de a nu testa în acut și de a aștepta ≥3 luni este de la pagina următoare.",
   "Nivelul scăzut poate fi dobândit; testarea genetică nu este metoda.",
   "Textul descrie rezistență relativă, nu eficacitate crescută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă un AT scăzut iatrogen (heparină) într-un diagnostic genetic de urgență."
  },
  "textbookExpressions": [
   "aproximativ 10 ori",
   "rezistenţi la heparină"
  ]
 },
 {
  "id": "tromboembolism-adv-059",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Proteinele C și S, ca anticoagulanți naturali dependenți de vitamina K:",
  "options": [
   "Inhibă Va și VIIIa; deficiențele heterozigote cresc riscul trombotic de cel puțin 5 ori; diagnosticul se bazează pe activitate/concentrație, nivelurile putând fi scăzute dobândit (acut, ficat, warfarină, deficit de K; proteina S și în sarcină/estrogeni)",
   "Foarte rar, deficiențele homozigote se manifestă prin purpură fulminantă neonatală",
   "Homozigoția este forma comună, cu risc arterial predominant",
   "Warfarina crește nivelurile de proteină C/S, facilitând diagnosticul în timpul tratamentului",
   "Deficiențele nu predispun la tromboză, ci doar la sângerare"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Inhibă Va și VIIIa; deficiențele heterozigote cresc riscul trombotic de cel puțin 5 ori; diagnosticul se bazează pe activitate/concentrație, nivelurile putând fi scăzute dobândit (acut, ficat, warfarină, deficit de K; proteina S și în sarcină/estrogeni) — Corect: Țintele Va/VIIIa, ≥5× și cauzele de nivel scăzut dobândit sunt din paragraf.\n\nFoarte rar, deficiențele homozigote se manifestă prin purpură fulminantă neonatală — Corect: Purpura fulminantă neonatală homozigotă este explicită.\n\nHomozigoția este forma comună, cu risc arterial predominant — Incorect: Homozigoția este foarte rară, nu comună.\n\nWarfarina crește nivelurile de proteină C/S, facilitând diagnosticul în timpul tratamentului — Incorect: Warfarina scade nivelurile, îngreunând diagnosticul.\n\nDeficiențele nu predispun la tromboză, ci doar la sângerare — Incorect: Deficiența predispune la tromboză prin generare crescută de trombină.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1012, Proteina C și proteina S (pagini PDF: 202).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1012
   ],
   "pdfPages": [
    202
   ],
   "section": "Proteina C și proteina S"
  },
  "learningObjective": "Contrastarea riscului ≥5× și a capcanei de laborator (warfarină, sarcină) cu purpura fulminantă homozigotă.",
  "optionRationales": [
   "Țintele Va/VIIIa, ≥5× și cauzele de nivel scăzut dobândit sunt din paragraf.",
   "Purpura fulminantă neonatală homozigotă este explicită.",
   "Homozigoția este foarte rară, nu comună.",
   "Warfarina scade nivelurile, îngreunând diagnosticul.",
   "Deficiența predispune la tromboză prin generare crescută de trombină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează efectul warfarinei asupra PC/PS și confundă tromboza cu diateza hemoragică."
  },
  "textbookExpressions": [
   "cel puţin 5 ori",
   "purpura fulminantă neonatală"
  ]
 },
 {
  "id": "tromboembolism-adv-060",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Diagnosticul de sindrom antifosfolipidic trebuie luat în considerare la:",
  "options": [
   "TEV la vârstă sub 50 de ani, mai ales neprovocat sau cu factor minor, și tromboza venoasă cu localizare neobișnuită",
   "Episoade venoase recurente sub anticoagulant și tromboză arterială inexplicabilă sub 50 de ani",
   "Morbiditate obstetricală: ≥3 pierderi embrionare înainte de săptămâna 10, deces fetal neexplicat după săptămâna 10 sau naștere prematură înainte de săptămâna 34 prin preeclampsie severă/insuficiență placentară",
   "APTT prelungit incidental, care în practică se asociază cu tendință protrombotică, nu hemoragică",
   "SAFL reduce recurența TEV, DOAC fiind preferate warfarinei în această situație"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "TEV la vârstă sub 50 de ani, mai ales neprovocat sau cu factor minor, și tromboza venoasă cu localizare neobișnuită — Corect: Vârsta <50 și sediul neobișnuit sunt primele indicații.\n\nEpisoade venoase recurente sub anticoagulant și tromboză arterială inexplicabilă sub 50 de ani — Corect: Recurența sub AC și arterialul tânăr completează lista.\n\nMorbiditate obstetricală: ≥3 pierderi embrionare înainte de săptămâna 10, deces fetal neexplicat după săptămâna 10 sau naștere prematură înainte de săptămâna 34 prin preeclampsie severă/insuficiență placentară — Corect: Cele trei criterii obstetricale sunt din paragraf.\n\nAPTT prelungit incidental, care în practică se asociază cu tendință protrombotică, nu hemoragică — Corect: APTT prelungit cu fenotip protrombotic este capcana de laborator.\n\nSAFL reduce recurența TEV, DOAC fiind preferate warfarinei în această situație — Incorect: SAFL crește recurența; DOAC ar putea fi mai puțin eficiente decât warfarina.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1012, Sindromul antifosfolipidic — Când se consideră diagnosticul (pagini PDF: 202).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1012
   ],
   "pdfPages": [
    202
   ],
   "section": "Sindromul antifosfolipidic — Când se consideră diagnosticul"
  },
  "learningObjective": "Recunoașterea clusterului de vârstă <50, sedii neobișnuite, recurență sub AC, arterial inexplicabil, criterii obstetricale și APTT paradoxal.",
  "optionRationales": [
   "Vârsta <50 și sediul neobișnuit sunt primele indicații.",
   "Recurența sub AC și arterialul tânăr completează lista.",
   "Cele trei criterii obstetricale sunt din paragraf.",
   "APTT prelungit cu fenotip protrombotic este capcana de laborator.",
   "SAFL crește recurența; DOAC ar putea fi mai puțin eficiente decât warfarina."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru indicații reale; distractorul inversează recurența și preferința warfarină versus DOAC din închiderea paragrafului."
  },
  "textbookExpressions": [
   "<50 de ani",
   "a 10-a săptămână"
  ]
 },
 {
  "id": "tromboembolism-adv-061",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Heparina cu greutate moleculară mică, spre deosebire de UFH, se caracterizează prin:",
  "options": [
   "Lanțuri mai scurte: inhibarea trombinei de către antitrombină cere ≥18 zaharide, deci LMWH inhibă factorul Xa într-un grad mai mare decât trombina (Xa > IIa)",
   "Administrare subcutanată, activitate maximă la 4 ore, timp de înjumătățire circa 4 ore, excreție renală",
   "Cadranul 29.7 atribuie LMWH greutate 2.000-9.000 Da, față de 3.000-30.000 Da la UFH și 1.500 Da la fondaparinux",
   "LMWH inhibă IIa mai mult decât Xa, identic UFH, și nu se excretă renal",
   "Activitatea maximă este la 18 ore, identic fondaparinuxului, fără prudență în insuficiența renală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Lanțuri mai scurte: inhibarea trombinei de către antitrombină cere ≥18 zaharide, deci LMWH inhibă factorul Xa într-un grad mai mare decât trombina (Xa > IIa) — Corect: Mecanismul ≥18 zaharide și Xa > IIa sunt din paragraf.\n\nAdministrare subcutanată, activitate maximă la 4 ore, timp de înjumătățire circa 4 ore, excreție renală — Corect: 4 ore (maxim și t½) și excreția renală sunt explicite.\n\nCadranul 29.7 atribuie LMWH greutate 2.000-9.000 Da, față de 3.000-30.000 Da la UFH și 1.500 Da la fondaparinux — Corect: Cele trei greutăți moleculare sunt din cadran.\n\nLMWH inhibă IIa mai mult decât Xa, identic UFH, și nu se excretă renal — Incorect: UFH are Xa = IIa; LMWH are Xa > IIa.\n\nActivitatea maximă este la 18 ore, identic fondaparinuxului, fără prudență în insuficiența renală — Incorect: 18 ore este t½ al fondaparinuxului, nu al LMWH.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1014, Heparina cu greutate moleculară mică; Cadranul 29.7 (pagini PDF: 204).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1014
   ],
   "pdfPages": [
    204
   ],
   "section": "Heparina cu greutate moleculară mică; Cadranul 29.7"
  },
  "learningObjective": "Corelarea pragului de 18 zaharide (Xa > IIa) cu t½/Tmax de 4 ore și cu greutățile din tabel.",
  "optionRationales": [
   "Mecanismul ≥18 zaharide și Xa > IIa sunt din paragraf.",
   "4 ore (maxim și t½) și excreția renală sunt explicite.",
   "Cele trei greutăți moleculare sunt din cadran.",
   "UFH are Xa = IIa; LMWH are Xa > IIa.",
   "18 ore este t½ al fondaparinuxului, nu al LMWH."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează raportul Xa/IIa și atribuie LMWH t½-ul de 18 ore al fondaparinuxului din același tabel."
  },
  "textbookExpressions": [
   "18 zaharide",
   "4 ore"
  ]
 },
 {
  "id": "tromboembolism-adv-062",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "Utilizarea actuală a UFH în TEV este, potrivit capitolului, în mare măsură limitată la cazuri particulare cu risc crescut deoarece:",
  "options": [
   "Timpul de înjumătățire scurt (1 oră), reversibilitatea cu protamină și lipsa excreției renale sunt proprietăți favorabile în aceste situații",
   "Se absoarbe oral complet, fără nevoie de APTT",
   "t½ de 18 ore o face impracticabilă în urgență",
   "Protamina nu o inversează, identic fondaparinuxului",
   "Este preferată tromboprofilaxiei de rutină, o singură injecție zilnică fiind suficientă"
  ],
  "correct": [
   0
  ],
  "explanation": "Timpul de înjumătățire scurt (1 oră), reversibilitatea cu protamină și lipsa excreției renale sunt proprietăți favorabile în aceste situații — Corect: Cele trei proprietăți și limitarea la cazuri particulare sunt enunțate; tromboprofilaxia cu UFH este rară din cauza injecțiilor de 2-3 ori pe zi.\n\nSe absoarbe oral complet, fără nevoie de APTT — Incorect: UFH este parenterală, ghidată de APTT.\n\nt½ de 18 ore o face impracticabilă în urgență — Incorect: t½ 18 ore aparține fondaparinuxului.\n\nProtamina nu o inversează, identic fondaparinuxului — Incorect: Protamina este antidotul UFH.\n\nEste preferată tromboprofilaxiei de rutină, o singură injecție zilnică fiind suficientă — Incorect: Textul spune că este rar utilizată pentru tromboprofilaxie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1014, Heparina nefracționată — Locul actual (pagini PDF: 204).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1014
   ],
   "pdfPages": [
    204
   ],
   "section": "Heparina nefracționată — Locul actual"
  },
  "learningObjective": "Identificarea triadei t½ 1 oră / protamină / fără excreție renală ca motiv al rezervării UFH pentru cazurile cu risc crescut.",
  "optionRationales": [
   "Cele trei proprietăți și limitarea la cazuri particulare sunt enunțate; tromboprofilaxia cu UFH este rară din cauza injecțiilor de 2-3 ori pe zi.",
   "UFH este parenterală, ghidată de APTT.",
   "t½ 18 ore aparține fondaparinuxului.",
   "Protamina este antidotul UFH.",
   "Textul spune că este rar utilizată pentru tromboprofilaxie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică t½-ul fondaparinuxului sau absența protaminei asupra UFH, al cărei loc restant este tocmai reversibilitatea renal-independentă."
  },
  "textbookExpressions": [
   "1 oră",
   "sulfat de protamină"
  ]
 },
 {
  "id": "tromboembolism-adv-063",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Conform Cadranului 29.8, la un INR >5,0 fără sângerare se procedează astfel:",
  "options": [
   "Se oprește warfarina, se reduce doza de întreținere și se investighează cauza INR-ului crescut",
   "Majoritatea sângerărilor sub warfarină apar când INR este în intervalul terapeutic, riscul major crescând odată cu INR-ul",
   "Se crește doza de warfarină pentru a „stabiliza” INR-ul peste 5",
   "Sângerarea majoră apare doar peste INR 8, fiind nulă în ținta 2-3",
   "Vitamina K se evită în orice INR crescut, chiar și la sângerare amenințătoare"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Se oprește warfarina, se reduce doza de întreținere și se investighează cauza INR-ului crescut — Corect: Cei trei pași sunt lista cadranului pentru INR >5 fără sângerare.\n\nMajoritatea sângerărilor sub warfarină apar când INR este în intervalul terapeutic, riscul major crescând odată cu INR-ul — Corect: Apariția majorității sângerărilor în intervalul terapeutic este din paragraful de riscuri.\n\nSe crește doza de warfarină pentru a „stabiliza” INR-ul peste 5 — Incorect: Doza se reduce, nu se crește.\n\nSângerarea majoră apare doar peste INR 8, fiind nulă în ținta 2-3 — Incorect: Majoritatea sângerărilor sunt în țintă; nu sunt nule.\n\nVitamina K se evită în orice INR crescut, chiar și la sângerare amenințătoare — Incorect: Cadranul tratează și sângerarea; vitamina K figurează în managementul INR crescut/sângerare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1016, Cadranul 29.8 — INR crescut; Riscurile warfarinei (pagini PDF: 206).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1016
   ],
   "pdfPages": [
    206
   ],
   "section": "Cadranul 29.8 — INR crescut; Riscurile warfarinei"
  },
  "learningObjective": "Reținerea triadei (oprire, reducere, cauză) la INR >5 fără sângerare și a faptului că majoritatea sângerărilor sunt în țintă.",
  "optionRationales": [
   "Cei trei pași sunt lista cadranului pentru INR >5 fără sângerare.",
   "Apariția majorității sângerărilor în intervalul terapeutic este din paragraful de riscuri.",
   "Doza se reduce, nu se crește.",
   "Majoritatea sângerărilor sunt în țintă; nu sunt nule.",
   "Cadranul tratează și sângerarea; vitamina K figurează în managementul INR crescut/sângerare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează reducerea dozei la INR >5 și pretind siguranță absolută în ținta 2-3, contrazisă de același paragraf."
  },
  "textbookExpressions": [
   "INR >5,0",
   "intervalul terapeutic"
  ]
 },
 {
  "id": "tromboembolism-adv-064",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Profilul hemoragic al DOAC și antidoturile, dincolo de Tmax-ul de 2 ore deja consacrat:",
  "options": [
   "Per global, risc similar sau mai scăzut de sângerare majoră, cu risc redus de hemoragie intracraniană, parțial contrabalansat de risc crescut de hemoragie gastrointestinală",
   "În hemoragie majoră se oprește DOAC-ul, se dă suport (lichide, masă eritrocitară) și se consideră o intervenție specifică (ex. endoscopie)",
   "Pentru dabigatran, idarucizumab se leagă rapid și antagonizează complet efectul; andexanet alfa pentru anti-Xa era în evaluare clinică",
   "DOAC reduc sângerarea digestivă față de warfarină, ICH fiind mai frecventă",
   "Idarucizumab este antidotul rivaroxabanului, dabigatranul neavând antagonist"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Per global, risc similar sau mai scăzut de sângerare majoră, cu risc redus de hemoragie intracraniană, parțial contrabalansat de risc crescut de hemoragie gastrointestinală — Corect: Balansul ICH versus GI este din paragraf.\n\nÎn hemoragie majoră se oprește DOAC-ul, se dă suport (lichide, masă eritrocitară) și se consideră o intervenție specifică (ex. endoscopie) — Corect: Cei trei pași de hemoragie majoră sunt lista.\n\nPentru dabigatran, idarucizumab se leagă rapid și antagonizează complet efectul; andexanet alfa pentru anti-Xa era în evaluare clinică — Corect: Idarucizumab versus andexanet este distincția antidoturilor.\n\nDOAC reduc sângerarea digestivă față de warfarină, ICH fiind mai frecventă — Incorect: Direcțiile GI și ICH sunt inverse.\n\nIdarucizumab este antidotul rivaroxabanului, dabigatranul neavând antagonist — Incorect: Idarucizumab este al dabigatranului, nu al rivaroxabanului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1017, DOAC — Sângerare; Antidoturi (pagini PDF: 207).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1017
   ],
   "pdfPages": [
    207
   ],
   "section": "DOAC — Sângerare; Antidoturi"
  },
  "learningObjective": "Contrastarea ICH↓ / GI↑ cu pachetul de suport și cu perechea idarucizumab (dabigatran) versus andexanet (anti-Xa).",
  "optionRationales": [
   "Balansul ICH versus GI este din paragraf.",
   "Cei trei pași de hemoragie majoră sunt lista.",
   "Idarucizumab versus andexanet este distincția antidoturilor.",
   "Direcțiile GI și ICH sunt inverse.",
   "Idarucizumab este al dabigatranului, nu al rivaroxabanului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează ICH versus GI și atribuie idarucizumabul unui anti-Xa din același tablou de antidoturi."
  },
  "textbookExpressions": [
   "hemoragie intracraniană",
   "ldarucizumab"
  ]
 },
 {
  "id": "tromboembolism-adv-065",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Cele trei faze tradiționale ale anticoagulării în TEV sunt:",
  "options": [
   "Faza acută de 5-10 zile, faza de menținere de minimum 3 luni și faza de lungă durată dincolo de menținere",
   "În faza acută se previne extensia (deci embolizarea); ulterior se previne recurența",
   "Faza acută durează 3 luni, menținerea 5-10 zile, fără fază extinsă",
   "Anticoagularea se limitează la 48 de ore, recurența fiind independentă de durată",
   "Faza de menținere este opțională dacă s-a făcut tromboliză"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Faza acută de 5-10 zile, faza de menținere de minimum 3 luni și faza de lungă durată dincolo de menținere — Corect: Cele trei faze și duratele sunt din deschiderea tratamentului.\n\nÎn faza acută se previne extensia (deci embolizarea); ulterior se previne recurența — Corect: Cele două scopuri pe faze sunt enunțate.\n\nFaza acută durează 3 luni, menținerea 5-10 zile, fără fază extinsă — Incorect: Duratele sunt inversate.\n\nAnticoagularea se limitează la 48 de ore, recurența fiind independentă de durată — Incorect: 48 de ore este fereastra de externare precoce PESI, nu durata anticoagulării.\n\nFaza de menținere este opțională dacă s-a făcut tromboliză — Incorect: Menținerea de minimum 3 luni rămâne standardul, tromboliza fiind rară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1006, Tratament — Cele trei faze (pagini PDF: 196).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1006
   ],
   "pdfPages": [
    196
   ],
   "section": "Tratament — Cele trei faze"
  },
  "learningObjective": "Reținerea ferestrelor 5-10 zile / ≥3 luni / extins și a scopurilor distincte (extensie versus recurență).",
  "optionRationales": [
   "Cele trei faze și duratele sunt din deschiderea tratamentului.",
   "Cele două scopuri pe faze sunt enunțate.",
   "Duratele sunt inversate.",
   "48 de ore este fereastra de externare precoce PESI, nu durata anticoagulării.",
   "Menținerea de minimum 3 luni rămâne standardul, tromboliza fiind rară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută 5-10 zile cu 3 luni și confundă faza acută cu fereastra PESI de 24-48 de ore."
  },
  "textbookExpressions": [
   "5-10 zile",
   "minimum 3 luni"
  ]
 },
 {
  "id": "tromboembolism-adv-066",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "Tromboza arterială, spre deosebire de cea venoasă, produce:",
  "options": [
   "Trombi albi, în care predomină trombocitele și fibrina, forțele de forfecare și ruptura plăcii ateromatoase fiind determinante; trombii venoși sunt roșii, din fibrină și hematii",
   "Trombi roșii în artere, din hematii, fără fibrină",
   "Doar ocluzie prin placă, fără participarea trombocitelor",
   "Emboli paradoxali sistematici, fără atașare de perete",
   "Un proces limitat la capilare, identic hemostazei extraendoteliale"
  ],
  "correct": [
   0
  ],
  "explanation": "Trombi albi, în care predomină trombocitele și fibrina, forțele de forfecare și ruptura plăcii ateromatoase fiind determinante; trombii venoși sunt roșii, din fibrină și hematii — Corect: Contrastul alb/roșu și componentele sunt din închiderea paginii.\n\nTrombi roșii în artere, din hematii, fără fibrină — Incorect: Trombii roșii sunt venoși, nu arteriali.\n\nDoar ocluzie prin placă, fără participarea trombocitelor — Incorect: Placa inițiază tromboza arterială, dar cheagul conține trombocite și fibrină.\n\nEmboli paradoxali sistematici, fără atașare de perete — Incorect: Trombii sunt atașați de perete; embolii se desprind secundar.\n\nUn proces limitat la capilare, identic hemostazei extraendoteliale — Incorect: Tromboza intramurală diferă de hemostaza extraendotelială.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1001, Patogeneza trombozei — Trombi albi versus roșii (pagini PDF: 191).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1001
   ],
   "pdfPages": [
    191
   ],
   "section": "Patogeneza trombozei — Trombi albi versus roșii"
  },
  "learningObjective": "Separarea trombului alb (plachete–fibrină, forfecare, placă) de trombul venos roșu (fibrină–hematii).",
  "optionRationales": [
   "Contrastul alb/roșu și componentele sunt din închiderea paginii.",
   "Trombii roșii sunt venoși, nu arteriali.",
   "Placa inițiază tromboza arterială, dar cheagul conține trombocite și fibrină.",
   "Trombii sunt atașați de perete; embolii se desprind secundar.",
   "Tromboza intramurală diferă de hemostaza extraendotelială."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează culoarea/compoziția și reciclează hemostaza extraendotelială din definiția de pe aceeași pagină."
  },
  "textbookExpressions": [
   "trombi albi",
   "trombi roşii"
  ]
 },
 {
  "id": "tromboembolism-adv-067",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la ponderea globală a trombozei:",
  "options": [
   "Se crede că tromboza este cauza a aproximativ 25% din totalul deceselor din întreaga lume, în fiecare an",
   "Tromboza explică sub 1% din mortalitatea globală, fiind o boală rară a adultului tânăr",
   "Toate decesele cardiovasculare sunt prin tromboză venoasă, fără componentă arterială",
   "Ponderea de 25% privește doar EP de spital, nu mortalitatea mondială",
   "Tromboza nu figurează printre cauzele de deces, fiind doar o sechelă a ateromului"
  ],
  "correct": [
   0
  ],
  "explanation": "Se crede că tromboza este cauza a aproximativ 25% din totalul deceselor din întreaga lume, în fiecare an — Corect: Cifra de aproximativ 25% este fraza de deschidere a paginii.\n\nTromboza explică sub 1% din mortalitatea globală, fiind o boală rară a adultului tânăr — Incorect: Nu este o boală rară de sub 1%.\n\nToate decesele cardiovasculare sunt prin tromboză venoasă, fără componentă arterială — Incorect: Textul distinge arterialul de venos, ambele trombotice.\n\nPonderea de 25% privește doar EP de spital, nu mortalitatea mondială — Incorect: 25% este global, nu doar EP nosocomială.\n\nTromboza nu figurează printre cauzele de deces, fiind doar o sechelă a ateromului — Incorect: Tromboza este descrisă ca proces cauzal, nu doar sechelă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1002, Factorii care influențează tromboza — Impact global (pagini PDF: 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1002
   ],
   "pdfPages": [
    192
   ],
   "section": "Factorii care influențează tromboza — Impact global"
  },
  "learningObjective": "Reținerea ordinii de mărime de 25% din decesele mondiale atribuite trombozei.",
  "optionRationales": [
   "Cifra de aproximativ 25% este fraza de deschidere a paginii.",
   "Nu este o boală rară de sub 1%.",
   "Textul distinge arterialul de venos, ambele trombotice.",
   "25% este global, nu doar EP nosocomială.",
   "Tromboza este descrisă ca proces cauzal, nu doar sechelă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii comprimă 25% la o raritate sau o limitează la EP de spital, exact contrastul frazei de deschidere."
  },
  "textbookExpressions": [
   "25% din totalul",
   "întreaga lume"
  ]
 },
 {
  "id": "tromboembolism-adv-068",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Gradul în care factorii de risc cresc probabilitatea de TEV se ierarhizează astfel:",
  "options": [
   "Factorii puternici cresc riscul de 10-50 de ori (chirurgie majoră, traumatisme, repaus absolut la pat)",
   "Factorii moderați cresc riscul de 3-10 ori (sarcină, estrogeni, chirurgie minoră sub anestezie generală; cele mai multe trombofilii ereditare)",
   "Factorii slabi cresc riscul de până la 3 ori (obezitate, călătorii pe distanțe lungi)",
   "Obezitatea crește riscul de 10-50 de ori, identic chirurgiei majore",
   "Trombofiliile ereditare sunt factori slabi, sub 1,5 ori, fără interacțiune cu estrogenii"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Factorii puternici cresc riscul de 10-50 de ori (chirurgie majoră, traumatisme, repaus absolut la pat) — Corect: Treapta 10-50× cu exemplele chirurgical-traumatice este explicită.\n\nFactorii moderați cresc riscul de 3-10 ori (sarcină, estrogeni, chirurgie minoră sub anestezie generală; cele mai multe trombofilii ereditare) — Corect: Treapta 3-10×, inclusiv trombofiliile, este din același paragraf.\n\nFactorii slabi cresc riscul de până la 3 ori (obezitate, călătorii pe distanțe lungi) — Corect: Treapta până la 3× pentru obezitate și călătorii completează ierarhia.\n\nObezitatea crește riscul de 10-50 de ori, identic chirurgiei majore — Incorect: Obezitatea este factor slab, nu puternic.\n\nTrombofiliile ereditare sunt factori slabi, sub 1,5 ori, fără interacțiune cu estrogenii — Incorect: Trombofiliile sunt treapta moderată 3-10×.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1002, Epidemiologie — Magnitudinea factorilor de risc (pagini PDF: 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1002
   ],
   "pdfPages": [
    192
   ],
   "section": "Epidemiologie — Magnitudinea factorilor de risc"
  },
  "learningObjective": "Memorarea treptelor 10-50× / 3-10× / până la 3× și a exemplelor (chirurgie versus obezitate/călătorie).",
  "optionRationales": [
   "Treapta 10-50× cu exemplele chirurgical-traumatice este explicită.",
   "Treapta 3-10×, inclusiv trombofiliile, este din același paragraf.",
   "Treapta până la 3× pentru obezitate și călătorii completează ierarhia.",
   "Obezitatea este factor slab, nu puternic.",
   "Trombofiliile sunt treapta moderată 3-10×."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii urcă obezitatea pe treapta 10-50× a chirurgiei majore și coboară trombofilia sub 1,5×."
  },
  "textbookExpressions": [
   "10-50 de ori",
   "până la 3 ori"
  ]
 },
 {
  "id": "tromboembolism-adv-069",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "Incidența TEV după etnie, potrivit capitolului, este:",
  "options": [
   "Cea mai mare la persoanele cu descendență africană și cea mai scăzută la asiatici; populația albă are o incidență intermediară",
   "Identică în toate grupurile etnice, în jur de 1 la 100 pe an din copilărie",
   "Maximă la asiatici, minimă la descendența africană",
   "Absentă la albi, fiind o boală doar a vârstnicului african",
   "Independentă de etnie, determinată doar de grupa sanguină"
  ],
  "correct": [
   0
  ],
  "explanation": "Cea mai mare la persoanele cu descendență africană și cea mai scăzută la asiatici; populația albă are o incidență intermediară — Corect: Gradientul african–alb–asiatic este fraza de închidere.\n\nIdentică în toate grupurile etnice, în jur de 1 la 100 pe an din copilărie — Incorect: Incidența variază cu vârsta și etnia, nu este 1/100 din copilărie.\n\nMaximă la asiatici, minimă la descendența africană — Incorect: Direcția african versus asiatic este inversă.\n\nAbsentă la albi, fiind o boală doar a vârstnicului african — Incorect: Albi au incidență intermediară, nu nulă.\n\nIndependentă de etnie, determinată doar de grupa sanguină — Incorect: Textul invocă etnia, nu grupa sanguină.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1002, Epidemiologie — Variația etnică (pagini PDF: 192).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1002
   ],
   "pdfPages": [
    192
   ],
   "section": "Epidemiologie — Variația etnică"
  },
  "learningObjective": "Reținerea gradientului african > alb > asiatic, din motive încă neelucidate.",
  "optionRationales": [
   "Gradientul african–alb–asiatic este fraza de închidere.",
   "Incidența variază cu vârsta și etnia, nu este 1/100 din copilărie.",
   "Direcția african versus asiatic este inversă.",
   "Albi au incidență intermediară, nu nulă.",
   "Textul invocă etnia, nu grupa sanguină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează polii african/asiatic sau anulează variația etnică descrisă în același paragraf de epidemiologie."
  },
  "textbookExpressions": [
   "descendenţă africană",
   "asiatici"
  ]
 },
 {
  "id": "tromboembolism-adv-070",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Pe ECG-ul din EP acută, dincolo de S1Q3T3 prezent doar la o minoritate, se mai pot observa:",
  "options": [
   "Suprasolicitare de ventricul drept, cu inversarea undei T în derivațiile inferioare (II, III, aVF) și precordiale drepte (V1-V4)",
   "Tahicardie și aspect de bloc de ramură dreaptă incomplet (R în aVR și V1, S în V6), ca în figura 29.1",
   "Un BAV complet cu bradicardie, patognomonic pentru infarctul pulmonar",
   "Unde T pozitive înalte în V1-V4, care confirmă EP fără imagistică",
   "Un traseu normal exclude EP, S1Q3T3 fiind prezent la majoritatea pacienților"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Suprasolicitare de ventricul drept, cu inversarea undei T în derivațiile inferioare (II, III, aVF) și precordiale drepte (V1-V4) — Corect: Inversarea T inferioară și precordial dreaptă este din paragraf.\n\nTahicardie și aspect de bloc de ramură dreaptă incomplet (R în aVR și V1, S în V6), ca în figura 29.1 — Corect: Tahicardia și BRD incomplet sunt din legenda figurii.\n\nUn BAV complet cu bradicardie, patognomonic pentru infarctul pulmonar — Incorect: BAV-ul cu bradicardie nu este descris; forma severă este tahipneică/tahicardică.\n\nUnde T pozitive înalte în V1-V4, care confirmă EP fără imagistică — Incorect: Undele T sunt inversate, nu pozitive înalte; ECG nu confirmă singur.\n\nUn traseu normal exclude EP, S1Q3T3 fiind prezent la majoritatea pacienților — Incorect: S1Q3T3 este minoritar; traseul poate fi nespecific.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1003, Diagnostic — ECG în EP (pagini PDF: 193).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1003
   ],
   "pdfPages": [
    193
   ],
   "section": "Diagnostic — ECG în EP"
  },
  "learningObjective": "Adăugarea inversării T în V1-V4 și a BRD incomplet din figură la S1Q3T3-ul minoritar deja consacrat.",
  "optionRationales": [
   "Inversarea T inferioară și precordial dreaptă este din paragraf.",
   "Tahicardia și BRD incomplet sunt din legenda figurii.",
   "BAV-ul cu bradicardie nu este descris; forma severă este tahipneică/tahicardică.",
   "Undele T sunt inversate, nu pozitive înalte; ECG nu confirmă singur.",
   "S1Q3T3 este minoritar; traseul poate fi nespecific."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă un traseu nespecific (T inversate, BRD incomplet) într-un BAV sau într-un test de confirmare."
  },
  "textbookExpressions": [
   "V1-V4",
   "bloc de ramură dreaptă incomplet"
  ]
 },
 {
  "id": "tromboembolism-adv-071",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Scorul Wells cu două niveluri pentru EP (Cadranul 29.4) include:",
  "options": [
   "Semne și simptome de TVP (cel puțin edem al piciorului și durere la palparea venelor profunde) — 3 puncte; diagnostic alternativ mai improbabil decât EP — 3 puncte",
   "Alură ventriculară >100/min, imobilizare >3 zile sau chirurgie în ultimele 4 săptămâni și istoric de TVP/EP — câte 1,5 puncte",
   "Hemoptizie — 1 punct; cancer (tratament în ultimele 6 luni sau paleație) — 1 punct",
   "EP probabilă la un scor simplificat >4",
   "Un scor >4 confirmă EP fără D-dimeri sau imagistică, imobilizarea fiind cotată pe 12 săptămâni ca în TVP"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Semne și simptome de TVP (cel puțin edem al piciorului și durere la palparea venelor profunde) — 3 puncte; diagnostic alternativ mai improbabil decât EP — 3 puncte — Corect: Cele două iteme de 3 puncte sunt din tabel.\n\nAlură ventriculară >100/min, imobilizare >3 zile sau chirurgie în ultimele 4 săptămâni și istoric de TVP/EP — câte 1,5 puncte — Corect: Triada de 1,5 puncte (AV, imobilizare 4 săptămâni, istoric) este explicită.\n\nHemoptizie — 1 punct; cancer (tratament în ultimele 6 luni sau paleație) — 1 punct — Corect: Hemoptizia și cancerul valorează 1 punct fiecare.\n\nEP probabilă la un scor simplificat >4 — Corect: Pragul >4 pentru EP probabilă este din scorul simplificat.\n\nUn scor >4 confirmă EP fără D-dimeri sau imagistică, imobilizarea fiind cotată pe 12 săptămâni ca în TVP — Incorect: Scorul nu diagnostichează singur; imobilizarea în EP este 4 săptămâni, nu 12.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1004, Cadranul 29.4 — Scorul Wells pentru EP (pagini PDF: 194).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1004
   ],
   "pdfPages": [
    194
   ],
   "section": "Cadranul 29.4 — Scorul Wells pentru EP"
  },
  "learningObjective": "Reținerea punctajelor 3/3/1,5/1 și a pragului >4, distinct de fereastra de 12 săptămâni a scorului pentru TVP.",
  "optionRationales": [
   "Cele două iteme de 3 puncte sunt din tabel.",
   "Triada de 1,5 puncte (AV, imobilizare 4 săptămâni, istoric) este explicită.",
   "Hemoptizia și cancerul valorează 1 punct fiecare.",
   "Pragul >4 pentru EP probabilă este din scorul simplificat.",
   "Scorul nu diagnostichează singur; imobilizarea în EP este 4 săptămâni, nu 12."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru itemi/praguri reale; distractorul aplică fereastra de 12 săptămâni a Wells-TVP asupra EP și transformă scorul în test de confirmare."
  },
  "textbookExpressions": [
   ">4",
   "ultimele 4 săptămâni"
  ]
 },
 {
  "id": "tromboembolism-adv-072",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "După un algoritm Wells–D-dimeri negativ la probabilitate pre-test scăzută, rata de eșec (TEV ratat) în 3 luni este:",
  "options": [
   "Sub 2%, fără a se putea exclude complet TEV",
   "Circa 25%, impunând CTPA de rutină la toți",
   "Nulă, D-dimerul negativ având valoare predictivă pozitivă de 100%",
   "Peste 50% la vârstnici, D-dimerul fiind specific",
   "Identică unui Wells de EP probabilă, imagistica nemaifiind necesară"
  ],
  "correct": [
   0
  ],
  "explanation": "Sub 2%, fără a se putea exclude complet TEV — Corect: Rata mică de eșec <2% în 3 luni este avertismentul explicit.\n\nCirca 25%, impunând CTPA de rutină la toți — Incorect: 25% ar anula utilitatea căii de excludere.\n\nNulă, D-dimerul negativ având valoare predictivă pozitivă de 100% — Incorect: Valoarea este predictivă negativă înaltă, nu pozitivă 100%.\n\nPeste 50% la vârstnici, D-dimerul fiind specific — Incorect: D-dimerii sunt nespecifici la vârstnici, nu specifici.\n\nIdentică unui Wells de EP probabilă, imagistica nemaifiind necesară — Incorect: La Wells probabil se merge direct la imagistică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1004, Măsurarea D-dimerilor — Rata de eșec (pagini PDF: 194).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1004
   ],
   "pdfPages": [
    194
   ],
   "section": "Măsurarea D-dimerilor — Rata de eșec"
  },
  "learningObjective": "Reținerea plafonului <2% în 3 luni ca limită a căii D-dimeri-negativ, nu ca excludere absolută.",
  "optionRationales": [
   "Rata mică de eșec <2% în 3 luni este avertismentul explicit.",
   "25% ar anula utilitatea căii de excludere.",
   "Valoarea este predictivă negativă înaltă, nu pozitivă 100%.",
   "D-dimerii sunt nespecifici la vârstnici, nu specifici.",
   "La Wells probabil se merge direct la imagistică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii umflă rata de eșec sau pretind excludere absolută, exact nuanța <2% din același paragraf."
  },
  "textbookExpressions": [
   "<2% în 3 luni",
   "valoare predictivă negativă"
  ]
 },
 {
  "id": "tromboembolism-adv-073",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "La pacienții internați și la gravidele cu suspiciune de TVP sau EP, capitolul indică:",
  "options": [
   "Să fie considerați ca având risc înalt și, în consecință, să beneficieze de examinare imagistică adecvată",
   "Algoritmul D-dimeri al asistenței primare/UPU nu li se aplică ca atare",
   "D-dimerul negativ le exclude TEV identic ambulatoriului, fără imagistică",
   "Gravidele se investighează doar după naștere, iradierea fiind interzisă în orice trimestru",
   "Internații așteaptă 48 de ore fără anticoagulant, scorul Wells fiind suficient"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Să fie considerați ca având risc înalt și, în consecință, să beneficieze de examinare imagistică adecvată — Corect: Încadrarea ca risc înalt și imagistica sunt enunțate.\n\nAlgoritmul D-dimeri al asistenței primare/UPU nu li se aplică ca atare — Corect: Abordările descrise se aplică doar asistenței primare sau UPU.\n\nD-dimerul negativ le exclude TEV identic ambulatoriului, fără imagistică — Incorect: Calea D-dimeri nu este transpusă ca atare.\n\nGravidele se investighează doar după naștere, iradierea fiind interzisă în orice trimestru — Incorect: Textul cere imagistică adecvată, nu amânare după naștere.\n\nInternații așteaptă 48 de ore fără anticoagulant, scorul Wells fiind suficient — Incorect: Anticoagularea se începe dacă imagistica întârzie (1 oră EP / 4 ore TVP).\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1005, Calendarul investigațiilor — Internați și gravide (pagini PDF: 195).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1005
   ],
   "pdfPages": [
    195
   ],
   "section": "Calendarul investigațiilor — Internați și gravide"
  },
  "learningObjective": "Recunoașterea că internatul și gravida sunt risc înalt, cu imagistică, în afara căii D-dimeri a UPU.",
  "optionRationales": [
   "Încadrarea ca risc înalt și imagistica sunt enunțate.",
   "Abordările descrise se aplică doar asistenței primare sau UPU.",
   "Calea D-dimeri nu este transpusă ca atare.",
   "Textul cere imagistică adecvată, nu amânare după naștere.",
   "Anticoagularea se începe dacă imagistica întârzie (1 oră EP / 4 ore TVP)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică calea ambulatorie D-dimeri asupra gravidei/internatului, pe care textul îi scoate din acest algoritm."
  },
  "textbookExpressions": [
   "risc înalt",
   "femeile gravide"
  ]
 },
 {
  "id": "tromboembolism-adv-074",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Angiografia pulmonară CT (CTPA) și scintigrafia V/Q, ca imagistică a EP, se deosebesc prin:",
  "options": [
   "CTPA este cea mai comună tehnică, sensibilă și disponibilă, și poate oferi un diagnostic alternativ când EP este exclusă",
   "V/Q are doză mai mică de radiații și este preferată în insuficiență renală și alergie la contrastul i.v.; o scintigrafie V/Q normală exclude EP",
   "Faza de perfuzie folosește agregate de albumină marcate cu tehnețiu; faza de ventilație, xenon sau tehnețiu inhalat",
   "V/Q înlocuiește CTPA la toți instabilii, fiind mai rapidă și diagnostică în toate bolile pulmonare preexistente",
   "CTPA este interzisă când se dorește un diagnostic alternativ, V/Q având radiație mai mare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "CTPA este cea mai comună tehnică, sensibilă și disponibilă, și poate oferi un diagnostic alternativ când EP este exclusă — Corect: Rolul CTPA de tehnică comună cu diagnostic alternativ este explicit.\n\nV/Q are doză mai mică de radiații și este preferată în insuficiență renală și alergie la contrastul i.v.; o scintigrafie V/Q normală exclude EP — Corect: Doza mică, preferința din IR/alergie și excluderea prin V/Q normal sunt din paragraf.\n\nFaza de perfuzie folosește agregate de albumină marcate cu tehnețiu; faza de ventilație, xenon sau tehnețiu inhalat — Corect: Cele două faze (albumină–tehnețiu versus xenon/tehnețiu) sunt descrise.\n\nV/Q înlocuiește CTPA la toți instabilii, fiind mai rapidă și diagnostică în toate bolile pulmonare preexistente — Incorect: V/Q este mai puțin disponibilă și adesea non-diagnostică în boli pulmonare preexistente.\n\nCTPA este interzisă când se dorește un diagnostic alternativ, V/Q având radiație mai mare — Incorect: CTPA tocmai poate oferi alternativa; V/Q are doză mai mică, nu mai mare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1005, Examinarea imagistică a EP — CTPA versus V/Q (pagini PDF: 195).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1005
   ],
   "pdfPages": [
    195
   ],
   "section": "Examinarea imagistică a EP — CTPA versus V/Q"
  },
  "learningObjective": "Contrastarea CTPA (alternativă diagnostică) cu V/Q (radiație mică, IR, alergie; normal = excludere).",
  "optionRationales": [
   "Rolul CTPA de tehnică comună cu diagnostic alternativ este explicit.",
   "Doza mică, preferința din IR/alergie și excluderea prin V/Q normal sunt din paragraf.",
   "Cele două faze (albumină–tehnețiu versus xenon/tehnețiu) sunt descrise.",
   "V/Q este mai puțin disponibilă și adesea non-diagnostică în boli pulmonare preexistente.",
   "CTPA tocmai poate oferi alternativa; V/Q are doză mai mică, nu mai mare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează radiația și disponibilitatea și pretind că V/Q este testul de șoc, contrar algoritmului de instabilitate."
  },
  "textbookExpressions": [
   "agenţii de contrast",
   "xenon"
  ]
 },
 {
  "id": "tromboembolism-adv-075",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Tromboza venoasă profundă a membrului superior:",
  "options": [
   "Algoritmul de diagnostic nu este atât de bine stabilit; pacienții cu durere și edem de braț necesită, de regulă, ultrasonografie",
   "Respectă, ca tratament, aceleași principii ca TVP a membrului inferior; multe episoade țin de catetere centrale, anticoagularea continuând ≥3 luni și mai mult dacă linia rămâne in situ",
   "Se confirmă prin Wells-EP >4, fără imagistică de braț",
   "Cateterul central se extrage imediat, anticoagularea fiind superfluă după 48 de ore",
   "TVP de membru superior nu embolizează și nu se anticoagulează"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Algoritmul de diagnostic nu este atât de bine stabilit; pacienții cu durere și edem de braț necesită, de regulă, ultrasonografie — Corect: Algoritmul slab codificat și US la durere/edem sunt din paragraf.\n\nRespectă, ca tratament, aceleași principii ca TVP a membrului inferior; multe episoade țin de catetere centrale, anticoagularea continuând ≥3 luni și mai mult dacă linia rămâne in situ — Corect: Principiile identice și durata legată de cateter sunt de la pagina de recurență.\n\nSe confirmă prin Wells-EP >4, fără imagistică de braț — Incorect: Wells-EP nu diagnostichează TVP de braț.\n\nCateterul central se extrage imediat, anticoagularea fiind superfluă după 48 de ore — Incorect: Anticoagularea continuă cel puțin 3 luni.\n\nTVP de membru superior nu embolizează și nu se anticoagulează — Incorect: Nu se neagă riscul embolic; se tratează ca TVP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1006, 1010, TVP a membrului superior (pagini PDF: 196, 200).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1006,
    1010
   ],
   "pdfPages": [
    196,
    200
   ],
   "section": "TVP a membrului superior"
  },
  "learningObjective": "Recunoașterea US ca prim test și a regulii ≥3 luni (prelungită cât cateterul rămâne in situ).",
  "optionRationales": [
   "Algoritmul slab codificat și US la durere/edem sunt din paragraf.",
   "Principiile identice și durata legată de cateter sunt de la pagina de recurență.",
   "Wells-EP nu diagnostichează TVP de braț.",
   "Anticoagularea continuă cel puțin 3 luni.",
   "Nu se neagă riscul embolic; se tratează ca TVP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică Wells-EP asupra brațului și scurtează anticoagularea la 48 de ore, contrar regulii de ≥3 luni/cateter."
  },
  "textbookExpressions": [
   "membrului superior",
   "3 luni"
  ]
 },
 {
  "id": "tromboembolism-adv-076",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Embriopatia warfarinică, dincolo de interdicția de clasă din sarcină, se caracterizează prin:",
  "options": [
   "Apare între săptămânile 6 și 12, cu anomalii scheletice incluzând hipoplazie nazală și epifize punctate",
   "Mai târziu, warfarina produce hemoragie fetală, anomalii neurologice și risc semnificativ de deces intrauterin",
   "La femeia care rămâne însărcinată sub warfarină, medicamentul este considerat sigur până în săptămâna 6, deci se înlocuiește atunci cu LMWH",
   "Embriopatia este maximă în săptămâna 2, warfarina fiind sigură între 6 și 12",
   "LMWH traversează placenta identic warfarinei, deci se evită până după naștere"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Apare între săptămânile 6 și 12, cu anomalii scheletice incluzând hipoplazie nazală și epifize punctate — Corect: Fereastra 6-12 și anomaliile scheletice sunt explicite.\n\nMai târziu, warfarina produce hemoragie fetală, anomalii neurologice și risc semnificativ de deces intrauterin — Corect: Hemoragia fetală tardivă și decesul intrauterin completează toxicitatea.\n\nLa femeia care rămâne însărcinată sub warfarină, medicamentul este considerat sigur până în săptămâna 6, deci se înlocuiește atunci cu LMWH — Corect: Siguranța până în săptămâna 6 și switch-ul la LMWH sunt conduita.\n\nEmbriopatia este maximă în săptămâna 2, warfarina fiind sigură între 6 și 12 — Incorect: Fereastra de teratogenitate este 6-12, nu săptămâna 2.\n\nLMWH traversează placenta identic warfarinei, deci se evită până după naștere — Incorect: LMWH nu traversează placenta și este sigură pentru făt.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1007, Situații speciale — Warfarina în sarcină (pagini PDF: 197).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1007
   ],
   "pdfPages": [
    197
   ],
   "section": "Situații speciale — Warfarina în sarcină"
  },
  "learningObjective": "Reținerea ferestrei 6-12 săptămâni (hipoplazie nazală, epifize punctate) și a siguranței până în săptămâna 6.",
  "optionRationales": [
   "Fereastra 6-12 și anomaliile scheletice sunt explicite.",
   "Hemoragia fetală tardivă și decesul intrauterin completează toxicitatea.",
   "Siguranța până în săptămâna 6 și switch-ul la LMWH sunt conduita.",
   "Fereastra de teratogenitate este 6-12, nu săptămâna 2.",
   "LMWH nu traversează placenta și este sigură pentru făt."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează fereastra 6-12 săptămâni și atribuie LMWH pasajul transplacentar al warfarinei."
  },
  "textbookExpressions": [
   "a 6-a şi a 12-a",
   "hipoplazia nazală"
  ]
 },
 {
  "id": "tromboembolism-adv-077",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Conform Cadranului 29.5, PESI original (nu varianta simplificată) stratifică mortalitatea la 30 de zile astfel:",
  "options": [
   "Clasa I: ≤65 puncte, mortalitate 0-1,6%; clasa II: 66-85 puncte, 1,7-3,5%",
   "Clasa III: 86-105 puncte, 3,2-7,1%; clasa IV: 106-125 puncte, 4,0-11,4%",
   "Clasa V: >125 puncte, 10,0-24,5%",
   "Statusul mental alterat valorează +60 de puncte, cancerul +30, TAS <100 mmHg +30, AV >110/min +20",
   "Clasa I începe de la 125 de puncte, identic PESI simplificat cu mortalitate 10,9%"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Clasa I: ≤65 puncte, mortalitate 0-1,6%; clasa II: 66-85 puncte, 1,7-3,5% — Corect: Clasele I-II și intervalele de mortalitate sunt din tabel.\n\nClasa III: 86-105 puncte, 3,2-7,1%; clasa IV: 106-125 puncte, 4,0-11,4% — Corect: Clasele III-IV completează scara.\n\nClasa V: >125 puncte, 10,0-24,5% — Corect: Clasa V >125 cu 10-24,5% închide stratificarea.\n\nStatusul mental alterat valorează +60 de puncte, cancerul +30, TAS <100 mmHg +30, AV >110/min +20 — Corect: +60 mental, +30 cancer, +30 TAS, +20 AV sunt din lista de puncte.\n\nClasa I începe de la 125 de puncte, identic PESI simplificat cu mortalitate 10,9% — Incorect: 125 de puncte este clasa V, nu I; 10,9% este PESI simplificat ≥1.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1008, Cadranul 29.5 — PESI original (pagini PDF: 198).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1008
   ],
   "pdfPages": [
    198
   ],
   "section": "Cadranul 29.5 — PESI original"
  },
  "learningObjective": "Memorarea claselor I–V (≤65 până la >125) și a itemilor grei (status mental +60, cancer +30).",
  "optionRationales": [
   "Clasele I-II și intervalele de mortalitate sunt din tabel.",
   "Clasele III-IV completează scara.",
   "Clasa V >125 cu 10-24,5% închide stratificarea.",
   "+60 mental, +30 cancer, +30 TAS, +20 AV sunt din lista de puncte.",
   "125 de puncte este clasa V, nu I; 10,9% este PESI simplificat ≥1."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru trepte numerice; distractorul confundă clasa I (≤65) cu pragul >125 și cu mortalitatea PESI simplificat."
  },
  "textbookExpressions": [
   ":565 puncte",
   "+60 puncte"
  ]
 },
 {
  "id": "tromboembolism-adv-078",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Tromboliza și filtrele de VCI, în nuanțele neacoperite de indicația de șoc, se caracterizează prin:",
  "options": [
   "Agenții trombolitici au un risc de 2% de hemoragie intracraniană, mai mare decât anticoagularea",
   "Rolul trombolizei în EP cu risc intermediar (fără hipotensiune, dar cu disfuncție VD și pro-BNP/troponină crescute) rămâne controversat",
   "Filtrele VCI nu reduc riscul de EP recurentă față de anticoagularea singură, se asociază independent cu TVP și se preferă recuperabile, îndepărtate când anticoagularea devine sigură",
   "Tromboliza este standardul EP intermediare, filtrele permanente reducând EP sub anticoagulare",
   "Hemoragia intracraniană este nulă, filtrele permanente fiind preferate celor recuperabile"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Agenții trombolitici au un risc de 2% de hemoragie intracraniană, mai mare decât anticoagularea — Corect: Cifra de 2% ICH este explicită.\n\nRolul trombolizei în EP cu risc intermediar (fără hipotensiune, dar cu disfuncție VD și pro-BNP/troponină crescute) rămâne controversat — Corect: Definiția riscului intermediar și controversa sunt din același paragraf.\n\nFiltrele VCI nu reduc riscul de EP recurentă față de anticoagularea singură, se asociază independent cu TVP și se preferă recuperabile, îndepărtate când anticoagularea devine sigură — Corect: Absența beneficiului versus AC, riscul de TVP și preferința recuperabilelor sunt enunțate.\n\nTromboliza este standardul EP intermediare, filtrele permanente reducând EP sub anticoagulare — Incorect: Tromboliza intermediară nu este standard; filtrele nu bat anticoagularea.\n\nHemoragia intracraniană este nulă, filtrele permanente fiind preferate celor recuperabile — Incorect: ICH nu este nulă; se preferă filtre recuperabile.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1008, Rolul trombolizei; Filtrele de venă cavă inferioară (pagini PDF: 198).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1008
   ],
   "pdfPages": [
    198
   ],
   "section": "Rolul trombolizei; Filtrele de venă cavă inferioară"
  },
  "learningObjective": "Contrastarea riscului de 2% ICH, a controversiei de risc intermediar și a limitelor filtrului (fără reducere a EP, plus TVP).",
  "optionRationales": [
   "Cifra de 2% ICH este explicită.",
   "Definiția riscului intermediar și controversa sunt din același paragraf.",
   "Absența beneficiului versus AC, riscul de TVP și preferința recuperabilelor sunt enunțate.",
   "Tromboliza intermediară nu este standard; filtrele nu bat anticoagularea.",
   "ICH nu este nulă; se preferă filtre recuperabile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă controversa intermediară în standard și inversează preferința pentru filtre recuperabile."
  },
  "textbookExpressions": [
   "2% de hemoragie",
   "filtrele recuperabile"
  ]
 },
 {
  "id": "tromboembolism-adv-079",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Eficacitatea și durata anticoagulării după lunile 3, dincolo de recurența de 5% în anul următor opririi, includ:",
  "options": [
   "Anticoagulantele reduc riscul relativ de tromboză recurentă cu 80-90%, cu un risc absolut de hemoragie majoră de 1-3% pe an",
   "Dacă tratamentul a durat cel puțin 3 luni, o durată mai lungă nu pare să reducă riscul de tromboză recurentă după încetarea anticoagulării",
   "Decizia de a continua ține de echilibrul recurență versus sângerare și de opinia pacientului",
   "Prelungirea de la 3 la 12 luni anulează recurența de după oprire, sângerarea majoră fiind sub 0,1% pe an",
   "Reducerea relativă de 80-90% dispare după luna 1, deci se oprește de rutină la 4 săptămâni"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Anticoagulantele reduc riscul relativ de tromboză recurentă cu 80-90%, cu un risc absolut de hemoragie majoră de 1-3% pe an — Corect: 80-90% și 1-3% pe an sunt din paragraf.\n\nDacă tratamentul a durat cel puțin 3 luni, o durată mai lungă nu pare să reducă riscul de tromboză recurentă după încetarea anticoagulării — Corect: Platoul după ≥3 luni este fraza-cheie a paginii următoare.\n\nDecizia de a continua ține de echilibrul recurență versus sângerare și de opinia pacientului — Corect: Individualizarea după risc și preferință este explicită.\n\nPrelungirea de la 3 la 12 luni anulează recurența de după oprire, sângerarea majoră fiind sub 0,1% pe an — Incorect: Textul neagă beneficiul unei durate mai lungi asupra recurenței post-oprire.\n\nReducerea relativă de 80-90% dispare după luna 1, deci se oprește de rutină la 4 săptămâni — Incorect: Menținerea minimă este 3 luni, nu 4 săptămâni.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1008, 1009, Durata tratamentului — RRR și platoul după 3 luni (pagini PDF: 198, 199).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1008,
    1009
   ],
   "pdfPages": [
    198,
    199
   ],
   "section": "Durata tratamentului — RRR și platoul după 3 luni"
  },
  "learningObjective": "Reținerea RRR 80-90%, a sângerării 1-3%/an și a platoului: prelungirea peste 3 luni nu scade recurența post-oprire.",
  "optionRationales": [
   "80-90% și 1-3% pe an sunt din paragraf.",
   "Platoul după ≥3 luni este fraza-cheie a paginii următoare.",
   "Individualizarea după risc și preferință este explicită.",
   "Textul neagă beneficiul unei durate mai lungi asupra recurenței post-oprire.",
   "Menținerea minimă este 3 luni, nu 4 săptămâni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii pretind că 12 luni anulează recurența post-oprire, exact ceea ce textul infirmă după pragul de 3 luni."
  },
  "textbookExpressions": [
   "80-90%",
   "1-3% pe an"
  ]
 },
 {
  "id": "tromboembolism-adv-080",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Măsurile asupra membrului după TVP proximală, dincolo de prevalența SPT de 40%, includ:",
  "options": [
   "Rolul ciorapilor până la genunchi cu cel puțin 24 mmHg la gleznă în prevenția SPT rămâne controversat; unii pacienți îi consideră greu de îmbrăcat",
   "5-10% dezvoltă ulcerație de membru inferior, greu de tratat și cu tendință de recădere; la ocluzie ilio-femurală reziduală se cere opinie vasculară, unii beneficiind de stent venos",
   "Ciorapii de 24 mmHg vindecă ulcerația în 48 de ore, stentul fiind interzis",
   "SPT nu ulcerează, ciorapii fiind indicați în boala arterială periferică",
   "Stentul venos înlocuiește anticoagularea, ulcerația apărând la peste 80% din TVP distale"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Rolul ciorapilor până la genunchi cu cel puțin 24 mmHg la gleznă în prevenția SPT rămâne controversat; unii pacienți îi consideră greu de îmbrăcat — Corect: Pragul 24 mmHg și controversa, plus inconfortul, sunt explicite.\n\n5-10% dezvoltă ulcerație de membru inferior, greu de tratat și cu tendință de recădere; la ocluzie ilio-femurală reziduală se cere opinie vasculară, unii beneficiind de stent venos — Corect: 5-10% ulcerație și stentul ilio-femural sunt din închidere.\n\nCiorapii de 24 mmHg vindecă ulcerația în 48 de ore, stentul fiind interzis — Incorect: Ciorapii nu vindecă rapid; stentul este o opțiune selectivă.\n\nSPT nu ulcerează, ciorapii fiind indicați în boala arterială periferică — Incorect: Ulcerația există; ciorapii antiembolie se evită în boala arterială.\n\nStentul venos înlocuiește anticoagularea, ulcerația apărând la peste 80% din TVP distale — Incorect: Anticoagularea nu este înlocuită de stent; 80% nu este cifra de ulcerație.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1010, Sindromul post-trombotic — Compresie 24 mmHg; Ulcerație (pagini PDF: 200).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1010
   ],
   "pdfPages": [
    200
   ],
   "section": "Sindromul post-trombotic — Compresie 24 mmHg; Ulcerație"
  },
  "learningObjective": "Contrastarea controversiei ciorapilor ≥24 mmHg cu ulcerația 5-10% și cu stentul ilio-femural selectiv.",
  "optionRationales": [
   "Pragul 24 mmHg și controversa, plus inconfortul, sunt explicite.",
   "5-10% ulcerație și stentul ilio-femural sunt din închidere.",
   "Ciorapii nu vindecă rapid; stentul este o opțiune selectivă.",
   "Ulcerația există; ciorapii antiembolie se evită în boala arterială.",
   "Anticoagularea nu este înlocuită de stent; 80% nu este cifra de ulcerație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă controversa 24 mmHg într-un tratament de 48 de ore și umflă ulcerația de la 5-10% la 80%."
  },
  "textbookExpressions": [
   "24 mmHg",
   "5-10%"
  ]
 },
 {
  "id": "tromboembolism-adv-081",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Conform Cadranului 29.6, printre itemii de risc hemoragic sau de internare se numără:",
  "options": [
   "Trombocite <75×10⁹/L și hipertensiune sistolică necontrolată (≥230/120 mmHg)",
   "Puncție lombară/epidurală/spinală în următoarele 12 ore sau în ultimele 4 ore",
   "Anestezie totală cu durată >90 de minute, protezare de șold sau genunchi și internare în ATI",
   "Trombocitele >400×10⁹/L contraindică profilaxia mecanică, TA 140/90 fiind pragul hemoragic",
   "Puncția lombară de acum 48 de ore rămâne o contraindicație de LMWH, independent de fereastra de 4 ore"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Trombocite <75×10⁹/L și hipertensiune sistolică necontrolată (≥230/120 mmHg) — Corect: Trombocitele <75 și 230/120 mmHg sunt din lista hemoragică.\n\nPuncție lombară/epidurală/spinală în următoarele 12 ore sau în ultimele 4 ore — Corect: Ferestrele 12 ore (viitor) și 4 ore (trecut) sunt explicite.\n\nAnestezie totală cu durată >90 de minute, protezare de șold sau genunchi și internare în ATI — Corect: >90 min, artroplastia și ATI sunt itemi de internare.\n\nTrombocitele >400×10⁹/L contraindică profilaxia mecanică, TA 140/90 fiind pragul hemoragic — Incorect: Pragul hemoragic este trombocitopenie, nu trombocitoză; 230/120, nu 140/90.\n\nPuncția lombară de acum 48 de ore rămâne o contraindicație de LMWH, independent de fereastra de 4 ore — Incorect: Fereastra relevantă este 4 ore, nu 48.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1013, Cadranul 29.6 — Risc de TEV și de sângerare (pagini PDF: 203).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1013
   ],
   "pdfPages": [
    203
   ],
   "section": "Cadranul 29.6 — Risc de TEV și de sângerare"
  },
  "learningObjective": "Reținerea pragurilor hematologic (75×10⁹), tensional (230/120) și al puncției (12 h înainte / 4 h după).",
  "optionRationales": [
   "Trombocitele <75 și 230/120 mmHg sunt din lista hemoragică.",
   "Ferestrele 12 ore (viitor) și 4 ore (trecut) sunt explicite.",
   ">90 min, artroplastia și ATI sunt itemi de internare.",
   "Pragul hemoragic este trombocitopenie, nu trombocitoză; 230/120, nu 140/90.",
   "Fereastra relevantă este 4 ore, nu 48."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii înlocuiesc 75×10⁹ și 230/120 cu valori de HTA esențială și extind fereastra de puncție de la 4 la 48 de ore."
  },
  "textbookExpressions": [
   "<75 x 109/L",
   "12 ore"
  ]
 },
 {
  "id": "tromboembolism-adv-082",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "După artroplastia majoră de șold sau genunchi, capitolul notează că aspirina:",
  "options": [
   "Reduce riscul de tromboză venoasă, deși în mod tradițional nu se credea că ar fi de folos în TEV",
   "Este inutilă, doar DOAC-urile terapeutice prevenind TEV post-artroplastie",
   "Înlocuiește LMWH-ul de internare la toți medicalii imobilizați",
   "Este contraindicată după protezare, crescând TEV de 10-50 de ori",
   "Se administrează doar dacă INR-ul warfarinei depășește 5, fără sângerare"
  ],
  "correct": [
   0
  ],
  "explanation": "Reduce riscul de tromboză venoasă, deși în mod tradițional nu se credea că ar fi de folos în TEV — Corect: Fraza despre descoperirea reducerii riscului după artroplastie este explicită.\n\nEste inutilă, doar DOAC-urile terapeutice prevenind TEV post-artroplastie — Incorect: DOAC-urile în doză mică sunt o opțiune, nu unica, și nu infirmă aspirina.\n\nÎnlocuiește LMWH-ul de internare la toți medicalii imobilizați — Incorect: Aspirina este citată după artroplastie, nu ca substitut universal la medicali.\n\nEste contraindicată după protezare, crescând TEV de 10-50 de ori — Incorect: Chirurgia majoră, nu aspirina, este factorul 10-50×.\n\nSe administrează doar dacă INR-ul warfarinei depășește 5, fără sângerare — Incorect: INR >5 privește managementul warfarinei, nu profilaxia cu aspirină.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1013, Profilaxia farmacologică — Aspirina după artroplastie (pagini PDF: 203).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1013
   ],
   "pdfPages": [
    203
   ],
   "section": "Profilaxia farmacologică — Aspirina după artroplastie"
  },
  "learningObjective": "Identificarea efectului anti-TEV al aspirinei după înlocuirea majoră de șold/genunchi, contrar prejudecății tradiționale.",
  "optionRationales": [
   "Fraza despre descoperirea reducerii riscului după artroplastie este explicită.",
   "DOAC-urile în doză mică sunt o opțiune, nu unica, și nu infirmă aspirina.",
   "Aspirina este citată după artroplastie, nu ca substitut universal la medicali.",
   "Chirurgia majoră, nu aspirina, este factorul 10-50×.",
   "INR >5 privește managementul warfarinei, nu profilaxia cu aspirină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii neagă efectul anti-TEV al aspirinei post-artroplastie sau îl mută pe treapta de risc 10-50× a chirurgiei."
  },
  "textbookExpressions": [
   "aspirina",
   "înlocuire (artroplastie)"
  ]
 },
 {
  "id": "tromboembolism-adv-083",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "DOAC în doză mică după înlocuirea majoră de șold și genunchi:",
  "options": [
   "Au fost aprobate pentru prevenirea TEV în acest context",
   "Administrarea este continuată timp de 2-5 săptămâni după operație",
   "Se dau în doză terapeutică de EP masivă, 6 luni, fără legătură cu artroplastia",
   "Durata este o singură doză intraoperatorie, identică UFH de profilaxie",
   "Sunt contraindicate după genunchi, fiind rezervate TVP distale netratate"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Au fost aprobate pentru prevenirea TEV în acest context — Corect: Aprobarea pentru prevenție după artroplastie este explicită.\n\nAdministrarea este continuată timp de 2-5 săptămâni după operație — Corect: Fereastra 2-5 săptămâni este durata citată.\n\nSe dau în doză terapeutică de EP masivă, 6 luni, fără legătură cu artroplastia — Incorect: Doza este mică (profilactică), nu terapeutică de EP masivă.\n\nDurata este o singură doză intraoperatorie, identică UFH de profilaxie — Incorect: UFH de profilaxie cere 2-3 injecții/zi; DOAC-ul nu este o doză unică intraoperatorie.\n\nSunt contraindicate după genunchi, fiind rezervate TVP distale netratate — Incorect: Indicația include genunchiul, nu îl exclude.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1013, Profilaxia farmacologică — DOAC post-artroplastie (pagini PDF: 203).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1013
   ],
   "pdfPages": [
    203
   ],
   "section": "Profilaxia farmacologică — DOAC post-artroplastie"
  },
  "learningObjective": "Reținerea aprobării și a ferestrei 2-5 săptămâni post-șold/genunchi, distinct de doza terapeutică.",
  "optionRationales": [
   "Aprobarea pentru prevenție după artroplastie este explicită.",
   "Fereastra 2-5 săptămâni este durata citată.",
   "Doza este mică (profilactică), nu terapeutică de EP masivă.",
   "UFH de profilaxie cere 2-3 injecții/zi; DOAC-ul nu este o doză unică intraoperatorie.",
   "Indicația include genunchiul, nu îl exclude."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii înlocuiesc fereastra 2-5 săptămâni cu o doză unică sau cu tratamentul de EP masivă."
  },
  "textbookExpressions": [
   "2-5 săptămâni",
   "şoldului şi a genunchiului"
  ]
 },
 {
  "id": "tromboembolism-adv-084",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "În sindromul antifosfolipidic cu tromboză, dincolo de criteriile de recunoaștere, sunt adevărate:",
  "options": [
   "Prezența SAFL la pacienții cu TEV se asociază cu risc crescut de recurență, ceea ce poate prelungi anticoagularea",
   "Există dovezi că DOAC ar putea fi mai puțin eficiente decât warfarina în prevenirea trombozei recurente în SAFL",
   "Tratamentul prezentării arteriale este controversat: warfarină cu INR 2,0-3,0 sau 3,0-4,0 și/sau antiplachetar",
   "DOAC sunt superioare warfarinei în SAFL, INR-ul arterial fiind inutil",
   "SAFL venos se tratează 6 săptămâni, ca o TVP distală cu factor tranzitoriu rezolvat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Prezența SAFL la pacienții cu TEV se asociază cu risc crescut de recurență, ceea ce poate prelungi anticoagularea — Corect: Recurența crescută și impactul pe durată sunt enunțate.\n\nExistă dovezi că DOAC ar putea fi mai puțin eficiente decât warfarina în prevenirea trombozei recurente în SAFL — Corect: Inferioritatea posibilă a DOAC versus warfarină este explicită.\n\nTratamentul prezentării arteriale este controversat: warfarină cu INR 2,0-3,0 sau 3,0-4,0 și/sau antiplachetar — Corect: Cele două intensități INR și/sau antiplachetarul sunt dezbaterea arterială.\n\nDOAC sunt superioare warfarinei în SAFL, INR-ul arterial fiind inutil — Incorect: Textul slăbește DOAC-ul, nu îl declară superior.\n\nSAFL venos se tratează 6 săptămâni, ca o TVP distală cu factor tranzitoriu rezolvat — Incorect: 6 săptămâni este opțiunea TVP distale cu factor tranzitoriu, nu a SAFL.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1012, Sindromul antifosfolipidic — Durată și intensitate (pagini PDF: 202).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1012
   ],
   "pdfPages": [
    202
   ],
   "section": "Sindromul antifosfolipidic — Durată și intensitate"
  },
  "learningObjective": "Contrastarea recurenței crescute și a slăbiciunii DOAC cu dezbaterea INR 2-3 versus 3-4 în forma arterială.",
  "optionRationales": [
   "Recurența crescută și impactul pe durată sunt enunțate.",
   "Inferioritatea posibilă a DOAC versus warfarină este explicită.",
   "Cele două intensități INR și/sau antiplachetarul sunt dezbaterea arterială.",
   "Textul slăbește DOAC-ul, nu îl declară superior.",
   "6 săptămâni este opțiunea TVP distale cu factor tranzitoriu, nu a SAFL."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează ierarhia warfarină/DOAC și aplică durata de 6 săptămâni a TVP distale asupra SAFL."
  },
  "textbookExpressions": [
   "mai puţin eficiente",
   "INR 3,0-4,0"
  ]
 },
 {
  "id": "tromboembolism-adv-085",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Interacțiunile și auto-monitorizarea warfarinei, dincolo de INR 2-3 și t½ 36 de ore, includ:",
  "options": [
   "Inductorii sau inhibitorii citocromului P450 reduc sau cresc nivelurile de warfarină și INR-ul; aspirina și clopidogrelul nu schimbă nivelul, dar sporesc riscul hemoragic prin efect antiplachetar",
   "Un număr mic de pacienți pregătiți își măsoară INR-ul acasă, cu coagulometre; înaintea procedurilor invazive warfarina se întrerupe cu câteva zile și poate fi înlocuită cu LMWH",
   "Alimentele și alcoolul nu interacționează, warfarina având indice terapeutic larg ca DOAC",
   "Aspirina scade INR-ul prin P450, clopidogrelul fiind fără efect hemoragic",
   "Auto-monitorizarea înlocuiește consilierea pre-procedurală, LMWH-ul de bridging fiind interzis"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Inductorii sau inhibitorii citocromului P450 reduc sau cresc nivelurile de warfarină și INR-ul; aspirina și clopidogrelul nu schimbă nivelul, dar sporesc riscul hemoragic prin efect antiplachetar — Corect: P450 versus aspirină/clopidogrel este distincția PK/PD.\n\nUn număr mic de pacienți pregătiți își măsoară INR-ul acasă, cu coagulometre; înaintea procedurilor invazive warfarina se întrerupe cu câteva zile și poate fi înlocuită cu LMWH — Corect: Coagulometrul de acasă și bridging-ul cu LMWH sunt explicite.\n\nAlimentele și alcoolul nu interacționează, warfarina având indice terapeutic larg ca DOAC — Incorect: Warfarina are indice îngust și interacțiuni cu dietă/alcool.\n\nAspirina scade INR-ul prin P450, clopidogrelul fiind fără efect hemoragic — Incorect: Aspirina nu scade INR-ul prin P450.\n\nAuto-monitorizarea înlocuiește consilierea pre-procedurală, LMWH-ul de bridging fiind interzis — Incorect: Consilierea pre-procedurală rămâne necesară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1016, Warfarina — Interacțiuni P450; Auto-monitorizare (pagini PDF: 206).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1016
   ],
   "pdfPages": [
    206
   ],
   "section": "Warfarina — Interacțiuni P450; Auto-monitorizare"
  },
  "learningObjective": "Separarea interacțiunilor farmacocinetice P450 de cele farmacodinamice antiplachetare și a coagulometrului de acasă.",
  "optionRationales": [
   "P450 versus aspirină/clopidogrel este distincția PK/PD.",
   "Coagulometrul de acasă și bridging-ul cu LMWH sunt explicite.",
   "Warfarina are indice îngust și interacțiuni cu dietă/alcool.",
   "Aspirina nu scade INR-ul prin P450.",
   "Consilierea pre-procedurală rămâne necesară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie warfarinei indicele larg al DOAC și transformă interacțiunea antiplachetară într-o scădere de INR via P450."
  },
  "textbookExpressions": [
   "cito￾cromului P450",
   "coagulometre"
  ]
 },
 {
  "id": "tromboembolism-adv-086",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Conform Cadranului 29.8, dincolo de INR >5 fără sângerare, managementul include:",
  "options": [
   "La INR ≥8 fără sângerare sau cu sângerare minimă: se oprește warfarina; vitamina K 1-5 mg oral dacă nu sângerează, sau 1-3 mg i.v. dacă sângerarea este minimă; se re-măsoară INR în 24 de ore",
   "La sângerare majoră: se oprește warfarina, se dă PCC 25-50 U/kg (sau plasma 15 ml/kg dacă PCC lipsește) și vitamina K 5 mg i.v.; INR se repetă după PCC",
   "Se caută o cauză anatomică locală a sângerării",
   "La sângerare majoră se crește doza de warfarină, PCC fiind rezervat INR-ului 2-3",
   "Vitamina K orală de 1-5 mg este interzisă la INR ≥8 fără sângerare, plasma 15 ml/kg înlocuind PCC-ul de primă intenție"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "La INR ≥8 fără sângerare sau cu sângerare minimă: se oprește warfarina; vitamina K 1-5 mg oral dacă nu sângerează, sau 1-3 mg i.v. dacă sângerarea este minimă; se re-măsoară INR în 24 de ore — Corect: Pașii de INR ≥8 (oral versus i.v., recontrol 24 h) sunt din tabel.\n\nLa sângerare majoră: se oprește warfarina, se dă PCC 25-50 U/kg (sau plasma 15 ml/kg dacă PCC lipsește) și vitamina K 5 mg i.v.; INR se repetă după PCC — Corect: PCC 25-50 U/kg, plasma 15 ml/kg și vitamina K 5 mg i.v. sunt lista de sângerare majoră.\n\nSe caută o cauză anatomică locală a sângerării — Corect: Căutarea cauzei anatomice este nota cadranului.\n\nLa sângerare majoră se crește doza de warfarină, PCC fiind rezervat INR-ului 2-3 — Incorect: Doza se oprește, nu se crește; PCC este pentru sângerarea majoră.\n\nVitamina K orală de 1-5 mg este interzisă la INR ≥8 fără sângerare, plasma 15 ml/kg înlocuind PCC-ul de primă intenție — Incorect: Vitamina K orală este tocmai opțiunea fără sângerare; PCC are prioritate față de plasmă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1016, Cadranul 29.8 — INR ≥8 și sângerarea majoră (pagini PDF: 206).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1016
   ],
   "pdfPages": [
    206
   ],
   "section": "Cadranul 29.8 — INR ≥8 și sângerarea majoră"
  },
  "learningObjective": "Reținerea vitaminei K 1-5 mg oral / 1-3 mg i.v. la INR ≥8 și a PCC 25-50 U/kg plus vitamina K 5 mg i.v. în sângerarea majoră.",
  "optionRationales": [
   "Pașii de INR ≥8 (oral versus i.v., recontrol 24 h) sunt din tabel.",
   "PCC 25-50 U/kg, plasma 15 ml/kg și vitamina K 5 mg i.v. sunt lista de sângerare majoră.",
   "Căutarea cauzei anatomice este nota cadranului.",
   "Doza se oprește, nu se crește; PCC este pentru sângerarea majoră.",
   "Vitamina K orală este tocmai opțiunea fără sângerare; PCC are prioritate față de plasmă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează prioritatea PCC versus plasmă și cresc doza de warfarină în sângerarea majoră."
  },
  "textbookExpressions": [
   "1-5 mg oral",
   "25-50 u/kg"
  ]
 },
 {
  "id": "tromboembolism-adv-087",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "La pacientul cu cancer activ și TEV, datele recente despre DOAC versus LMWH arată:",
  "options": [
   "DOAC pot fi cel puțin la fel de eficiente ca LMWH în prevenirea trombozei recurente, dar pot crește riscul de sângerare",
   "LMWH a fost, timp de mai mulți ani, tratamentul de elecție, fiind mai eficientă decât warfarina în acest context",
   "DOAC elimină sângerarea, warfarina rămânând superioară LMWH la cancerul activ",
   "Eficacitatea DOAC este nulă, fiind rezervate TVP distale fără cancer",
   "Sângerarea scade sub DOAC față de LMWH, deci se preferă la orice tumori digestive"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "DOAC pot fi cel puțin la fel de eficiente ca LMWH în prevenirea trombozei recurente, dar pot crește riscul de sângerare — Corect: Eficacitatea cel puțin similară și excesul hemoragic sunt din paragraf.\n\nLMWH a fost, timp de mai mulți ani, tratamentul de elecție, fiind mai eficientă decât warfarina în acest context — Corect: Superioritatea istorică LMWH versus warfarină este explicită.\n\nDOAC elimină sângerarea, warfarina rămânând superioară LMWH la cancerul activ — Incorect: DOAC nu elimină sângerarea; warfarina este inferioară LMWH aici.\n\nEficacitatea DOAC este nulă, fiind rezervate TVP distale fără cancer — Incorect: Textul nu anulează eficacitatea DOAC.\n\nSângerarea scade sub DOAC față de LMWH, deci se preferă la orice tumori digestive — Incorect: Sângerarea poate crește, nu scade, sub DOAC.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1008, Pacienții cu cancer — DOAC versus LMWH (pagini PDF: 198).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1008
   ],
   "pdfPages": [
    198
   ],
   "section": "Pacienții cu cancer — DOAC versus LMWH"
  },
  "learningObjective": "Nuanțarea: DOAC ≥ LMWH pe recurență, dar cu mai multă sângerare; LMWH rămâne referința istorică versus warfarină.",
  "optionRationales": [
   "Eficacitatea cel puțin similară și excesul hemoragic sunt din paragraf.",
   "Superioritatea istorică LMWH versus warfarină este explicită.",
   "DOAC nu elimină sângerarea; warfarina este inferioară LMWH aici.",
   "Textul nu anulează eficacitatea DOAC.",
   "Sângerarea poate crește, nu scade, sub DOAC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează semnalul hemoragic al DOAC și pretind superioritatea warfarinei asupra LMWH în cancer."
  },
  "textbookExpressions": [
   "cel puţin la fel de eficiente",
   "riscul de sângerare"
  ]
 },
 {
  "id": "tromboembolism-adv-088",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "Diagnosticul hipertensiunii pulmonare tromboembolice cronice (CTEPH) se bazează pe:",
  "options": [
   "Simptome persistente după EP, monitorizare prin scintigrafie de perfuzie, CTPA care dovedește ocluzie reziduală și ecocardiografie care sugerează hipertensiune pulmonară",
   "Un D-dimer negativ la 48 de ore de la episodul acut, fără imagistică",
   "Doar radiografia toracică normală, CTEPH fiind o diagnoză clinică de efort",
   "Tromboliza sistemică tardivă ca test diagnostic",
   "Oprirea anticoagulării pentru a demasca hipertensiunea la cateterism imediat"
  ],
  "correct": [
   0
  ],
  "explanation": "Simptome persistente după EP, monitorizare prin scintigrafie de perfuzie, CTPA care dovedește ocluzie reziduală și ecocardiografie care sugerează hipertensiune pulmonară — Corect: Cele trei modalități și contextul de simptome persistente sunt din paragraf.\n\nUn D-dimer negativ la 48 de ore de la episodul acut, fără imagistică — Incorect: D-dimerul nu diagnostichează CTEPH.\n\nDoar radiografia toracică normală, CTEPH fiind o diagnoză clinică de efort — Incorect: Radiografia normală nu exclude.\n\nTromboliza sistemică tardivă ca test diagnostic — Incorect: Tromboliza tardivă nu este un test diagnostic.\n\nOprirea anticoagulării pentru a demasca hipertensiunea la cateterism imediat — Incorect: Textul nu cere oprirea anticoagulării pentru diagnostic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1010, 1011, Complicații — CTEPH diagnostic (pagini PDF: 200, 201).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1010,
    1011
   ],
   "pdfPages": [
    200,
    201
   ],
   "section": "Complicații — CTEPH diagnostic"
  },
  "learningObjective": "Reținerea triadei scintigrafie de perfuzie – CTPA cu ocluzie reziduală – eco sugestivă, la dispnee persistentă.",
  "optionRationales": [
   "Cele trei modalități și contextul de simptome persistente sunt din paragraf.",
   "D-dimerul nu diagnostichează CTEPH.",
   "Radiografia normală nu exclude.",
   "Tromboliza tardivă nu este un test diagnostic.",
   "Textul nu cere oprirea anticoagulării pentru diagnostic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii înlocuiesc triadа imagistică (perfuzie/CTPA/eco) cu D-dimeri sau tromboliză tardivă."
  },
  "textbookExpressions": [
   "scintigrafie pulmonară de perfuzie",
   "ocluzia reziduală"
  ]
 },
 {
  "id": "tromboembolism-adv-089",
  "topicId": "tromboembolism",
  "type": "CM",
  "stem": "Dacă HIT este suspectată sau confirmată, anticoagulantele alternative menționate sunt:",
  "options": [
   "Danaparoid (heparinoid), argatroban (inhibitor direct de trombină i.v.) și fondaparinux",
   "Pacienții cu HIT nu trebuie reexpuși la heparină pe viitor, inclusiv la spălarea cateterelor",
   "Se continuă UFH în doză crescută, protamina vindecând HIT",
   "Warfarina orală se începe imediat, fără anticoagulant non-heparinic de acoperire",
   "Argatrobanul este interzis, singura opțiune fiind reintroducerea LMWH"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Danaparoid (heparinoid), argatroban (inhibitor direct de trombină i.v.) și fondaparinux — Corect: Cele trei alternative sunt enumerate.\n\nPacienții cu HIT nu trebuie reexpuși la heparină pe viitor, inclusiv la spălarea cateterelor — Corect: Interdicția de reexpunere, inclusiv spălarea cateterelor, este explicită.\n\nSe continuă UFH în doză crescută, protamina vindecând HIT — Incorect: Orice heparină se întrerupe; protamina nu tratează HIT.\n\nWarfarina orală se începe imediat, fără anticoagulant non-heparinic de acoperire — Incorect: Se cere un anticoagulant non-heparinic din cauza ratei trombotice.\n\nArgatrobanul este interzis, singura opțiune fiind reintroducerea LMWH — Incorect: Argatrobanul este tocmai o opțiune listată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1015, HIT — Anticoagulante alternative (pagini PDF: 205).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1015
   ],
   "pdfPages": [
    205
   ],
   "section": "HIT — Anticoagulante alternative"
  },
  "learningObjective": "Recunoașterea triadei danaparoid–argatroban–fondaparinux și a interdicției de reexpunere, inclusiv pe catetere.",
  "optionRationales": [
   "Cele trei alternative sunt enumerate.",
   "Interdicția de reexpunere, inclusiv spălarea cateterelor, este explicită.",
   "Orice heparină se întrerupe; protamina nu tratează HIT.",
   "Se cere un anticoagulant non-heparinic din cauza ratei trombotice.",
   "Argatrobanul este tocmai o opțiune listată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reintroduc heparina sau warfarina fără acoperire, inversând regula de stop și substituție non-heparinică."
  },
  "textbookExpressions": [
   "danaparoid",
   "argatroban"
  ]
 },
 {
  "id": "tromboembolism-adv-090",
  "topicId": "tromboembolism",
  "type": "CS",
  "stem": "Care dintre următoarele afirmații diferențiază corect ferestrele de imobilizare/chirurgie din scorurile Wells?",
  "options": [
   "Pentru TVP, chirurgia majoră cotată este în ultimele 12 săptămâni sub anestezie; pentru EP, imobilizarea >3 zile sau chirurgia sunt în ultimele 4 săptămâni",
   "Ambele scoruri cotază chirurgia pe 12 săptămâni, fără deosebire EP/TVP",
   "Wells-EP ignoră imobilizarea, cotând doar hemoptizia cu 3 puncte",
   "Fereastra de 12 săptămâni aparține EP, cea de 4 săptămâni TVP",
   "Imobilizarea nu figurează în niciunul dintre scorurile cu două niveluri"
  ],
  "correct": [
   0
  ],
  "explanation": "Pentru TVP, chirurgia majoră cotată este în ultimele 12 săptămâni sub anestezie; pentru EP, imobilizarea >3 zile sau chirurgia sunt în ultimele 4 săptămâni — Corect: 12 săptămâni la TVP versus 4 săptămâni la EP sunt valorile din cele două cadrane.\n\nAmbele scoruri cotază chirurgia pe 12 săptămâni, fără deosebire EP/TVP — Incorect: Ferestrele diferă, nu coincid.\n\nWells-EP ignoră imobilizarea, cotând doar hemoptizia cu 3 puncte — Incorect: EP cotază imobilizarea cu 1,5 puncte; hemoptizia valorează 1, nu 3.\n\nFereastra de 12 săptămâni aparține EP, cea de 4 săptămâni TVP — Incorect: Direcția 12 versus 4 este inversă.\n\nImobilizarea nu figurează în niciunul dintre scorurile cu două niveluri — Incorect: Imobilizarea figurează în ambele scoruri.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 29, p. 1004, Cadranele 29.3 și 29.4 — Ferestre temporale (pagini PDF: 194).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 29,
   "printedPages": [
    1004
   ],
   "pdfPages": [
    194
   ],
   "section": "Cadranele 29.3 și 29.4 — Ferestre temporale"
  },
  "learningObjective": "Contrastarea ferestrei de 12 săptămâni (Wells-TVP) cu cea de 4 săptămâni (Wells-EP).",
  "optionRationales": [
   "12 săptămâni la TVP versus 4 săptămâni la EP sunt valorile din cele două cadrane.",
   "Ferestrele diferă, nu coincid.",
   "EP cotază imobilizarea cu 1,5 puncte; hemoptizia valorează 1, nu 3.",
   "Direcția 12 versus 4 este inversă.",
   "Imobilizarea figurează în ambele scoruri."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Itemul cere distincția 12 versus 4 săptămâni; distractorii le permută sau le anulează din cadranele alăturate."
  },
  "textbookExpressions": [
   "12 săptămâni",
   "4 săptămâni"
  ]
 }
];
