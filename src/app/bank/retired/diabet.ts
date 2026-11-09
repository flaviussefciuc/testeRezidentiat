import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_DIABET:(Question&Record<string,unknown>)[]=[
 {
  "id": "diabet-adv-001",
  "topicId": "diabet",
  "type": "CS",
  "stem": "În structura insulinei glulizină, care pereche de substituții diferențiază analogul de insulina umană?",
  "options": [
   "B3: asparagină → lizină; B29: lizină → acid glutamic",
   "B3: asparagină → lizină; B29: lizină → acid aspartic",
   "B28: prolină → acid aspartic; B29: lizină → acid glutamic",
   "B3: asparagină → lizină; B28: prolină → acid aspartic",
   "B28: prolină → lizină; B29: lizină → prolină"
  ],
  "correct": [
   0
  ],
  "explanation": "B3: asparagină → lizină; B29: lizină → acid glutamic — Corect: Acestea sunt cele două substituții din figură și legendă.\n\nB3: asparagină → lizină; B29: lizină → acid aspartic — Incorect: La B3 este introdusă lizina; la B29 este introdus acidul glutamic, nu acidul aspartic.\n\nB28: prolină → acid aspartic; B29: lizină → acid glutamic — Incorect: Substituția prolinei B28 cu acid aspartic aparține aspartului.\n\nB3: asparagină → lizină; B28: prolină → acid aspartic — Incorect: Prima substituție aparține glulizinei, a doua aspartului.\n\nB28: prolină → lizină; B29: lizină → prolină — Incorect: Inversarea B28–B29 aparține lispro.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 703, Figura 23.2 — Analogii de insulină cu acțiune scurtă (pagini PDF: 102).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    703
   ],
   "pdfPages": [
    102
   ],
   "section": "Figura 23.2 — Analogii de insulină cu acțiune scurtă"
  },
  "learningObjective": "Identificarea simultană a pozițiilor și aminoacizilor modificați în glulizină.",
  "optionRationales": [
   "Acestea sunt cele două substituții din figură și legendă.",
   "La B3 este introdusă lizina; la B29 este introdus acidul glutamic, nu acidul aspartic.",
   "Substituția prolinei B28 cu acid aspartic aparține aspartului.",
   "Prima substituție aparține glulizinei, a doua aspartului.",
   "Inversarea B28–B29 aparține lispro."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Alternativele combină modificări reale ale analogilor rapizi; sunt necesare atât poziția, cât și identitatea reziduului."
  },
  "textbookExpressions": [
   "asparagina în poziția B3",
   "acid glutamic"
  ]
 },
 {
  "id": "diabet-adv-002",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Despre modificările structurale ale analogilor bazali de insulină sunt corecte afirmațiile:",
  "options": [
   "Glargina înlocuiește asparagina A21 cu glicină",
   "Detemirul leagă lanțul de acid gras de lizina B29 printr-un intermediar de acid glutamic",
   "Glargina adaugă două reziduuri de arginină la capătul lanțului B",
   "Degludecul elimină treonina B30 și leagă acidul gras de lizina B29 printr-un intermediar de acid glutamic",
   "Detemirul elimină treonina B30 și adaugă un lanț de acid gras la lizina B29"
  ],
  "correct": [
   0,
   2,
   3,
   4
  ],
  "explanation": "Glargina înlocuiește asparagina A21 cu glicină — Corect: Substituția A21 este redată în figură.\n\nDetemirul leagă lanțul de acid gras de lizina B29 printr-un intermediar de acid glutamic — Incorect: Poziția B29 este corectă; intermediarul de acid glutamic este reprezentat pentru degludec, nu pentru detemir.\n\nGlargina adaugă două reziduuri de arginină la capătul lanțului B — Corect: Cele două arginine sunt adăugate la extremitatea lanțului B.\n\nDegludecul elimină treonina B30 și leagă acidul gras de lizina B29 printr-un intermediar de acid glutamic — Corect: Figura și legenda descriu eliminarea B30 și legătura prin acid glutamic.\n\nDetemirul elimină treonina B30 și adaugă un lanț de acid gras la lizina B29 — Corect: Aceasta este structura detemirului descrisă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 703, Figura 23.2 — Analogii de insulină cu acțiune lungă (pagini PDF: 102).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    703
   ],
   "pdfPages": [
    102
   ],
   "section": "Figura 23.2 — Analogii de insulină cu acțiune lungă"
  },
  "learningObjective": "Distingerea modificărilor lanțurilor A/B și a legării acidului gras în analogii bazali.",
  "optionRationales": [
   "Substituția A21 este redată în figură.",
   "Poziția B29 este corectă; intermediarul de acid glutamic este reprezentat pentru degludec, nu pentru detemir.",
   "Cele două arginine sunt adăugate la extremitatea lanțului B.",
   "Figura și legenda descriu eliminarea B30 și legătura prin acid glutamic.",
   "Aceasta este structura detemirului descrisă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul păstrează poziția corectă de acilare, dar transferă între analogi structura legăturii; sunt comparate trei structuri apropiate."
  },
  "textbookExpressions": [
   "treonina din poziția 30",
   "lizina în poziția B29"
  ]
 },
 {
  "id": "diabet-adv-003",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În aprecierea secreției endogene de insulină, sunt corecte afirmațiile:",
  "options": [
   "Eliberarea echimolară a insulinei și peptidului C implică aceeași extracție hepatică la primul pasaj",
   "Peptidul C este degradat în principal în rinichi și poate fi folosit ca indice al secreției endogene",
   "Prezența peptidului C la diagnosticul unui diabet autoimun indică mai curând reclasificarea ca diabet de tip 2",
   "Aproximativ jumătate din insulina portală este extrasă hepatic, spre deosebire de extracția hepatică doar parțială a peptidului C",
   "Utilitatea peptidului C pentru diferențierea tipului de diabet este mai mare imediat la debut decât după peste cinci ani de evoluție"
  ],
  "correct": [
   1,
   3
  ],
  "explanation": "Eliberarea echimolară a insulinei și peptidului C implică aceeași extracție hepatică la primul pasaj — Incorect: Echimolaritatea secreției nu egalizează extracția sau concentrațiile circulante.\n\nPeptidul C este degradat în principal în rinichi și poate fi folosit ca indice al secreției endogene — Corect: Eliminarea predominant renală și utilizarea ca indice sunt descrise la p. 702.\n\nPrezența peptidului C la diagnosticul unui diabet autoimun indică mai curând reclasificarea ca diabet de tip 2 — Incorect: Peptidul C poate fi încă prezent la diagnosticul tipului 1.\n\nAproximativ jumătate din insulina portală este extrasă hepatic, spre deosebire de extracția hepatică doar parțială a peptidului C — Corect: Textul diferențiază explicit cele două extracții hepatice.\n\nUtilitatea peptidului C pentru diferențierea tipului de diabet este mai mare imediat la debut decât după peste cinci ani de evoluție — Incorect: Bibliografia indică utilitate mai mare după o durată a diabetului de peste cinci ani.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 702, 704, 711, Secreția și metabolismul insulinei; Alte investigații (pagini PDF: 101, 103, 110).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    702,
    704,
    711
   ],
   "pdfPages": [
    101,
    103,
    110
   ],
   "section": "Secreția și metabolismul insulinei; Alte investigații"
  },
  "learningObjective": "Separarea raportului secretor de clearance și a utilității peptidului C la debut față de evoluția îndelungată.",
  "optionRationales": [
   "Echimolaritatea secreției nu egalizează extracția sau concentrațiile circulante.",
   "Eliminarea predominant renală și utilizarea ca indice sunt descrise la p. 702.",
   "Peptidul C poate fi încă prezent la diagnosticul tipului 1.",
   "Textul diferențiază explicit cele două extracții hepatice.",
   "Bibliografia indică utilitate mai mare după o durată a diabetului de peste cinci ani."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Sunt necesare trei distincții: secreție versus concentrație, eliminare hepatică versus renală și debut versus evoluție."
  },
  "textbookExpressions": [
   "secreția endogenă de insulină",
   "peptidul C"
  ]
 },
 {
  "id": "diabet-adv-004",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În succesiunea secreției și acțiunii insulinei descrisă în bibliografie, sunt corecte afirmațiile:",
  "options": [
   "Creșterea ATP în celula β închide canalul K+-ATP și favorizează depolarizarea",
   "Legarea insulinei de subunitățile β extracelulare activează tirozin-kinaza subunităților α transmembranare",
   "Depolarizarea celulei β favorizează influxul de calciu implicat în exocitoza granulelor",
   "În mușchi și țesut adipos, insulina favorizează transferul GLUT4 din compartimentul intracelular spre membrană",
   "Sulfonilureele stimulează exocitoza prin deschiderea canalului K+-ATP, înaintea influxului de calciu"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "explanation": "Creșterea ATP în celula β închide canalul K+-ATP și favorizează depolarizarea — Corect: Închiderea canalului reduce efluxul de potasiu și depolarizează celula.\n\nLegarea insulinei de subunitățile β extracelulare activează tirozin-kinaza subunităților α transmembranare — Incorect: Subunitățile α sunt extracelulare și leagă insulina; subunitățile β sunt transmembranare.\n\nDepolarizarea celulei β favorizează influxul de calciu implicat în exocitoza granulelor — Corect: Creșterea calciului intracelular participă la eliberarea granulelor.\n\nÎn mușchi și țesut adipos, insulina favorizează transferul GLUT4 din compartimentul intracelular spre membrană — Corect: GLUT4 este transportorul insulinodependent mobilizat spre membrană.\n\nSulfonilureele stimulează exocitoza prin deschiderea canalului K+-ATP, înaintea influxului de calciu — Incorect: Sulfonilureele închid canalul; influxul ulterior de calciu este corect menționat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 705, 702, 704, 717, Figurile 23.4 și 23.6 (pagini PDF: 104, 101, 103, 116).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    705,
    702,
    704,
    717
   ],
   "pdfPages": [
    104,
    101,
    103,
    116
   ],
   "section": "Figurile 23.4 și 23.6"
  },
  "learningObjective": "Separarea senzorului secretor β-celular de receptorul periferic și de translocarea transportorului.",
  "optionRationales": [
   "Închiderea canalului reduce efluxul de potasiu și depolarizează celula.",
   "Subunitățile α sunt extracelulare și leagă insulina; subunitățile β sunt transmembranare.",
   "Creșterea calciului intracelular participă la eliberarea granulelor.",
   "GLUT4 este transportorul insulinodependent mobilizat spre membrană.",
   "Sulfonilureele închid canalul; influxul ulterior de calciu este corect menționat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Opțiunile intercalează două căi diferite și păstrează partea distală corectă în distractori."
  },
  "textbookExpressions": [
   "canalul K+-ATP",
   "subunitățile α",
   "GLUT4"
  ]
 },
 {
  "id": "diabet-adv-006",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În susceptibilitatea genetică pentru diabet, sunt corecte asocierile:",
  "options": [
   "HLA-DR3-DQ2 și HLA-DR4-DQ8 — susceptibilitate crescută pentru diabetul de tip 1",
   "DQB1*0602 — efect protector față de diabetul de tip 1",
   "TCF7-L2 — varianta evidențiată în bibliografie la europeni cu diabet de tip 2",
   "KCNQ1 — autoantigen insular din aceeași categorie cu ZnT8 în diabetul de tip 1",
   "IA-2/ICA512 — canal de potasiu dependent de voltaj asociat diabetului de tip 2 la asiatici"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "HLA-DR3-DQ2 și HLA-DR4-DQ8 — susceptibilitate crescută pentru diabetul de tip 1 — Corect: Aceste haplotipuri sunt asociate susceptibilității pentru tipul 1.\n\nDQB1*0602 — efect protector față de diabetul de tip 1 — Corect: Alela este exemplul de protecție din text.\n\nTCF7-L2 — varianta evidențiată în bibliografie la europeni cu diabet de tip 2 — Corect: TCF7-L2 este exemplul european pentru tipul 2.\n\nKCNQ1 — autoantigen insular din aceeași categorie cu ZnT8 în diabetul de tip 1 — Incorect: KCNQ1 este locusul asociat tipului 2 menționat pentru asiatici, nu autoantigen insular.\n\nIA-2/ICA512 — canal de potasiu dependent de voltaj asociat diabetului de tip 2 la asiatici — Incorect: IA-2 este proteina tirozin-fosfatază autoantigenică; descrierea canalului aparține KCNQ1.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 707, 706, 708, Sistemul antigenic leucocitar uman; Susceptibilitatea genetică (pagini PDF: 106, 105, 107).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    707,
    706,
    708
   ],
   "pdfPages": [
    106,
    105,
    107
   ],
   "section": "Sistemul antigenic leucocitar uman; Susceptibilitatea genetică"
  },
  "learningObjective": "Separarea haplotipurilor de risc/protecție, a autoantigenelor și a locilor de susceptibilitate.",
  "optionRationales": [
   "Aceste haplotipuri sunt asociate susceptibilității pentru tipul 1.",
   "Alela este exemplul de protecție din text.",
   "TCF7-L2 este exemplul european pentru tipul 2.",
   "KCNQ1 este locusul asociat tipului 2 menționat pentru asiatici, nu autoantigen insular.",
   "IA-2 este proteina tirozin-fosfatază autoantigenică; descrierea canalului aparține KCNQ1."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Necesită clasificarea unor denumiri moleculare apropiate în trei roluri etiologice diferite."
  },
  "textbookExpressions": [
   "DQB1*0602",
   "proteina tirozin-fosfatază"
  ]
 },
 {
  "id": "diabet-adv-007",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Care asociere între forma diabetului neonatal și mecanismul genetic corespunde bibliografiei?",
  "options": [
   "Tranzitoriu — KCNJ11, Kir6.2; permanent — ZAC și HYMAI, cromozomul 6q",
   "Tranzitoriu — ZAC și HYMAI, cromozomul 6q; permanent — KCNQ1, transportorul cationic ZnT8",
   "Tranzitoriu — ZAC și HYMAI, cromozomul 6q; permanent — KCNJ11, subunitatea Kir6.2 a canalului K+-ATP",
   "Tranzitoriu — HNF-1α, cromozomul 12q; permanent — KCNJ11, subunitatea Kir6.2 a canalului K+-ATP",
   "Tranzitoriu — ZAC și HYMAI, cromozomul 6q; permanent — HNF-1β, subunitatea Kir6.2 a canalului K+-ATP"
  ],
  "correct": [
   2
  ],
  "explanation": "Tranzitoriu — KCNJ11, Kir6.2; permanent — ZAC și HYMAI, cromozomul 6q — Incorect: Asocierile dintre forme și gene sunt inversate.\n\nTranzitoriu — ZAC și HYMAI, cromozomul 6q; permanent — KCNQ1, transportorul cationic ZnT8 — Incorect: Forma tranzitorie este corectă; pentru forma permanentă textul indică KCNJ11/Kir6.2.\n\nTranzitoriu — ZAC și HYMAI, cromozomul 6q; permanent — KCNJ11, subunitatea Kir6.2 a canalului K+-ATP — Corect: Aceasta este perechea descrisă în paragraful despre diabetul neonatal.\n\nTranzitoriu — HNF-1α, cromozomul 12q; permanent — KCNJ11, subunitatea Kir6.2 a canalului K+-ATP — Incorect: HNF-1α este o cauză MODY; nu este mecanismul tranzitoriu descris aici.\n\nTranzitoriu — ZAC și HYMAI, cromozomul 6q; permanent — HNF-1β, subunitatea Kir6.2 a canalului K+-ATP — Incorect: HNF-1β este factor de transcripție, nu subunitatea Kir6.2.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 709, Diabetul zaharat monogenic (pagini PDF: 108).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    709
   ],
   "pdfPages": [
    108
   ],
   "section": "Diabetul zaharat monogenic"
  },
  "learningObjective": "Distingerea anomaliilor de expresie genetică din forma tranzitorie de canalopatia formei permanente.",
  "optionRationales": [
   "Asocierile dintre forme și gene sunt inversate.",
   "Forma tranzitorie este corectă; pentru forma permanentă textul indică KCNJ11/Kir6.2.",
   "Aceasta este perechea descrisă în paragraful despre diabetul neonatal.",
   "HNF-1α este o cauză MODY; nu este mecanismul tranzitoriu descris aici.",
   "HNF-1β este factor de transcripție, nu subunitatea Kir6.2."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Perechi de gene reale cu o jumătate corectă în majoritatea distractorilor; diferențiere KCNQ1/KCNJ11 și factor de transcripție/canal."
  },
  "textbookExpressions": [
   "ZAC și HYMAI",
   "subunitatea Kir6.2"
  ]
 },
 {
  "id": "diabet-adv-008",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În cauzele monogenice de diabet din Cadranul 23.6, sunt corecte asocierile:",
  "options": [
   "HNF-1α — hiperglicemie progresivă, prag scăzut de glicozurie și HDL crescut",
   "Glucokinază — hiperglicemie prezentă de la naștere, cu deteriorare minimă în timp",
   "HNF-1β — chisturi renale, proteinurie și boală renală cronică",
   "HNF-4α — greutate mică la naștere, hipoglicemie neonatală și HDL crescut",
   "HNF-1α — debut adolescentin, cu chisturi renale ca particularitate extrapancreatică din tabel"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "HNF-1α — hiperglicemie progresivă, prag scăzut de glicozurie și HDL crescut — Corect: Toate cele trei particularități apar în coloana HNF-1α.\n\nGlucokinază — hiperglicemie prezentă de la naștere, cu deteriorare minimă în timp — Corect: Glucokinaza este asociată acestui profil stabil.\n\nHNF-1β — chisturi renale, proteinurie și boală renală cronică — Corect: Acestea sunt manifestările renale asociate HNF-1β.\n\nHNF-4α — greutate mică la naștere, hipoglicemie neonatală și HDL crescut — Incorect: HNF-4α este asociat greutății crescute la naștere și HDL scăzut; hipoglicemia neonatală este corectă.\n\nHNF-1α — debut adolescentin, cu chisturi renale ca particularitate extrapancreatică din tabel — Incorect: Vârsta este compatibilă, dar chisturile sunt atribuite HNF-1β.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 709, Cadranul 23.6 — Cauze monogenice de diabet (pagini PDF: 108).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    709
   ],
   "pdfPages": [
    108
   ],
   "section": "Cadranul 23.6 — Cauze monogenice de diabet"
  },
  "learningObjective": "Compararea evoluției și particularităților extrapancreatice ale formelor MODY.",
  "optionRationales": [
   "Toate cele trei particularități apar în coloana HNF-1α.",
   "Glucokinaza este asociată acestui profil stabil.",
   "Acestea sunt manifestările renale asociate HNF-1β.",
   "HNF-4α este asociat greutății crescute la naștere și HDL scăzut; hipoglicemia neonatală este corectă.",
   "Vârsta este compatibilă, dar chisturile sunt atribuite HNF-1β."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii păstrează vârsta sau hipoglicemia neonatală corecte și transferă alte trăsături între subtipuri."
  },
  "textbookExpressions": [
   "prag scăzut de glicozurie",
   "hipoglicemie neonatală",
   "chisturi renale"
  ]
 },
 {
  "id": "diabet-adv-009",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În mecanismele diabetului de tip 2, sunt corecte afirmațiile:",
  "options": [
   "Acumularea trigliceridelor intracelulare împiedică fosforilarea IRS-1, în timp ce activarea căii MAP poate persista",
   "Pierderea primei faze a secreției de insulină este compatibilă cu o concentrație totală circulantă încă crescută",
   "Reducerea insulinei intrainsulare determină scăderea glucagonului, în pofida creșterii producției hepatice de glucoză",
   "Rezistența metabolică la insulină presupune reducerea în aceeași măsură a activării MAP și IRS-1",
   "Creșterea inițială a insulinemiei indică o capacitate secretorie adecvată necesarului, deficitul apărând după normalizarea insulinemiei"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Acumularea trigliceridelor intracelulare împiedică fosforilarea IRS-1, în timp ce activarea căii MAP poate persista — Corect: Textul descrie afectarea IRS-1 și păstrarea activării MAP implicate în inflamație și proliferare.\n\nPierderea primei faze a secreției de insulină este compatibilă cu o concentrație totală circulantă încă crescută — Corect: Defectul fazei precoce coexistă cu hipersecreția compensatorie insuficientă.\n\nReducerea insulinei intrainsulare determină scăderea glucagonului, în pofida creșterii producției hepatice de glucoză — Incorect: Glucagonul este crescut, probabil prin diminuarea insulinei intrainsulare.\n\nRezistența metabolică la insulină presupune reducerea în aceeași măsură a activării MAP și IRS-1 — Incorect: Cele două căi nu sunt descrise ca egal afectate.\n\nCreșterea inițială a insulinemiei indică o capacitate secretorie adecvată necesarului, deficitul apărând după normalizarea insulinemiei — Incorect: Insulinemia crescută poate fi deja inadecvată nevoii crescute.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 708, 709, Anomalii ale acțiunii și secreției insulinei; Alte anomalii hormonale (pagini PDF: 107, 108).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    708,
    709
   ],
   "pdfPages": [
    107,
    108
   ],
   "section": "Anomalii ale acțiunii și secreției insulinei; Alte anomalii hormonale"
  },
  "learningObjective": "Distingerea rezistenței selective de deficitul secretor relativ și de dereglarea glucagonului.",
  "optionRationales": [
   "Textul descrie afectarea IRS-1 și păstrarea activării MAP implicate în inflamație și proliferare.",
   "Defectul fazei precoce coexistă cu hipersecreția compensatorie insuficientă.",
   "Glucagonul este crescut, probabil prin diminuarea insulinei intrainsulare.",
   "Cele două căi nu sunt descrise ca egal afectate.",
   "Insulinemia crescută poate fi deja inadecvată nevoii crescute."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distincțiile nu urmează o creștere/scădere uniformă: unele căi rămân active, iar hiperinsulinemia coexistă cu deficitul relativ."
  },
  "textbookExpressions": [
   "fosforilarea substratului post-receptor",
   "curba Starling"
  ]
 },
 {
  "id": "diabet-adv-011",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Pentru categoriile glicemice intermediare descrise în bibliografie, sunt corecte afirmațiile:",
  "options": [
   "Glicemia bazală de 5,8 mmol/L îndeplinește pragul inferior ADA pentru GBM, dar nu pragul OMS",
   "La o glicemie bazală de 6,4 mmol/L, valoarea de la două ore nu mai este necesară pentru a afirma și scăderea toleranței la glucoză",
   "O glicemie bazală de 6,4 mmol/L și o valoare de 8,6 mmol/L la două ore după 75 g glucoză sunt compatibile cu asocierea GBM și STG",
   "O valoare bazală de 6,4 mmol/L și una de 11,4 mmol/L la două ore se încadrează în STG, deoarece glicemia bazală nu atinge 7,0 mmol/L",
   "Pragul inferior OMS pentru GBM este 5,6 mmol/L, iar cel ADA este 6,1 mmol/L"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Glicemia bazală de 5,8 mmol/L îndeplinește pragul inferior ADA pentru GBM, dar nu pragul OMS — Corect: ADA folosește 5,6 mmol/L, OMS 6,1 mmol/L ca prag inferior.\n\nLa o glicemie bazală de 6,4 mmol/L, valoarea de la două ore nu mai este necesară pentru a afirma și scăderea toleranței la glucoză — Incorect: GBM nu stabilește STG; aceasta necesită testul de toleranță.\n\nO glicemie bazală de 6,4 mmol/L și o valoare de 8,6 mmol/L la două ore după 75 g glucoză sunt compatibile cu asocierea GBM și STG — Corect: 6,4 este în intervalul GBM OMS, iar 8,6 la două ore în intervalul STG.\n\nO valoare bazală de 6,4 mmol/L și una de 11,4 mmol/L la două ore se încadrează în STG, deoarece glicemia bazală nu atinge 7,0 mmol/L — Incorect: Valoarea la două ore depășește pragul diabetului de 11,1 mmol/L; confirmarea diagnosticului depinde de context.\n\nPragul inferior OMS pentru GBM este 5,6 mmol/L, iar cel ADA este 6,1 mmol/L — Incorect: Pragurile sunt inversate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 710, 711, Cadranul 23.8; Diagnostic și investigații (pagini PDF: 109, 110).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    710,
    711
   ],
   "pdfPages": [
    109,
    110
   ],
   "section": "Cadranul 23.8; Diagnostic și investigații"
  },
  "learningObjective": "Aplicarea separată a criteriilor OMS/ADA pentru GBM și a criteriului postîncărcare pentru STG.",
  "optionRationales": [
   "ADA folosește 5,6 mmol/L, OMS 6,1 mmol/L ca prag inferior.",
   "GBM nu stabilește STG; aceasta necesită testul de toleranță.",
   "6,4 este în intervalul GBM OMS, iar 8,6 la două ore în intervalul STG.",
   "Valoarea la două ore depășește pragul diabetului de 11,1 mmol/L; confirmarea diagnosticului depinde de context.",
   "Pragurile sunt inversate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Sunt integrate două sisteme de praguri și două momente de recoltare, fără valori-limită ambigue."
  },
  "textbookExpressions": [
   "glicemia bazală modificată",
   "scăderea toleranței la glucoză"
  ]
 },
 {
  "id": "diabet-adv-013",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În alterarea conștientizării hipoglicemiei sunt corecte afirmațiile:",
  "options": [
   "După hipoglicemii repetate, simptomele autonome pot apărea la glicemii mai mici decât pragul simptomelor neuroglicopenice",
   "Deplasarea pragului autonom spre valori mai mici oferă un interval mai lung pentru corectare înaintea afectării cognitive",
   "Evitarea hipoglicemiei pentru un timp poate îmbunătăți conștientizarea",
   "Răspunsul glucagonului poate fi afectat în contextul nivelului scăzut al insulinei intra-insulare",
   "Insulina injectată este redusă prin aceeași inhibiție rapidă a secreției β-celulare care constituie prima apărare fiziologică"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "explanation": "După hipoglicemii repetate, simptomele autonome pot apărea la glicemii mai mici decât pragul simptomelor neuroglicopenice — Corect: Inversarea ordinii pragurilor este descrisă în hipoglicemia recurentă și diabetul de lungă durată.\n\nDeplasarea pragului autonom spre valori mai mici oferă un interval mai lung pentru corectare înaintea afectării cognitive — Incorect: Afectarea cognitivă poate preceda avertizarea autonomă; intervalul protector este pierdut.\n\nEvitarea hipoglicemiei pentru un timp poate îmbunătăți conștientizarea — Corect: Recunoașterea simptomelor se poate ameliora prin evitarea episoadelor.\n\nRăspunsul glucagonului poate fi afectat în contextul nivelului scăzut al insulinei intra-insulare — Corect: Textul leagă răspunsul glucagonului de mediul intra-insular anormal.\n\nInsulina injectată este redusă prin aceeași inhibiție rapidă a secreției β-celulare care constituie prima apărare fiziologică — Incorect: Acțiunea insulinei deja injectate nu poate fi oprită prin inhibarea secreției endogene.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 716, 717, Hipoglicemia — Mecanisme; Simptome și semne (pagini PDF: 115, 116).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    716,
    717
   ],
   "pdfPages": [
    115,
    116
   ],
   "section": "Hipoglicemia — Mecanisme; Simptome și semne"
  },
  "learningObjective": "Corelarea ordinii pragurilor simptomatice cu cele trei niveluri de apărare împotriva hipoglicemiei.",
  "optionRationales": [
   "Inversarea ordinii pragurilor este descrisă în hipoglicemia recurentă și diabetul de lungă durată.",
   "Afectarea cognitivă poate preceda avertizarea autonomă; intervalul protector este pierdut.",
   "Recunoașterea simptomelor se poate ameliora prin evitarea episoadelor.",
   "Textul leagă răspunsul glucagonului de mediul intra-insular anormal.",
   "Acțiunea insulinei deja injectate nu poate fi oprită prin inhibarea secreției endogene."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Necesită ordonarea a două praguri și separarea reglării intra-insulare de insulina exogenă."
  },
  "textbookExpressions": [
   "simptome autonome",
   "simptome neuroglicopenice",
   "hormoni de contrareglare"
  ]
 },
 {
  "id": "diabet-adv-015",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Comparând sulfonilureele și meglitinidele, sunt corecte afirmațiile:",
  "options": [
   "Ambele închid canalul K+-ATP β-celular, dar meglitinidele au o durată de acțiune sub trei ore în descrierea bibliografică",
   "Meglitinidele au fost concepute pentru eliberarea precoce postprandială de insulină, limitând stimularea în postul ulterior",
   "Durata scurtă a meglitinidelor reflectă deschiderea canalului K+-ATP, față de închiderea sa sub sulfoniluree",
   "Scăderea eficacității sulfonilureelor pe termen lung se corectează prin meglitinide deoarece acestea nu depind de masa β-celulară funcțională",
   "Meglitinidele vizează în special hiperglicemia bazală cu glicemie postprandială normală"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Ambele închid canalul K+-ATP β-celular, dar meglitinidele au o durată de acțiune sub trei ore în descrierea bibliografică — Corect: Canalul este închis de ambele clase, dar meglitinidele sunt rapid metabolizate.\n\nMeglitinidele au fost concepute pentru eliberarea precoce postprandială de insulină, limitând stimularea în postul ulterior — Corect: Acesta este obiectivul farmacologic descris.\n\nDurata scurtă a meglitinidelor reflectă deschiderea canalului K+-ATP, față de închiderea sa sub sulfoniluree — Incorect: Sensul acțiunii pe canal este același; diferă durata.\n\nScăderea eficacității sulfonilureelor pe termen lung se corectează prin meglitinide deoarece acestea nu depind de masa β-celulară funcțională — Incorect: Ambele sunt secretagoge și necesită celule β funcționale.\n\nMeglitinidele vizează în special hiperglicemia bazală cu glicemie postprandială normală — Incorect: Textul indică profilul invers: hiperglicemie postprandială cu glicemie bazală normală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 718, 717, Sulfonilureele; Meglitinidele (pagini PDF: 117, 116).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    718,
    717
   ],
   "pdfPages": [
    117,
    116
   ],
   "section": "Sulfonilureele; Meglitinidele"
  },
  "learningObjective": "Distingerea duratei și țintei prandiale în două clase cu mecanism ionic comun.",
  "optionRationales": [
   "Canalul este închis de ambele clase, dar meglitinidele sunt rapid metabolizate.",
   "Acesta este obiectivul farmacologic descris.",
   "Sensul acțiunii pe canal este același; diferă durata.",
   "Ambele sunt secretagoge și necesită celule β funcționale.",
   "Textul indică profilul invers: hiperglicemie postprandială cu glicemie bazală normală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie diferența de durată altui mecanism ionic sau independenței β-celulare, păstrând clasa terapeutică apropiată."
  },
  "textbookExpressions": [
   "insulinosecretagoge post-prandiale",
   "canalul K+-ATP"
  ]
 },
 {
  "id": "diabet-adv-016",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Despre tiazolidindione și metformin sunt corecte afirmațiile:",
  "options": [
   "Tiazolidindionele interacționează cu PPAR-γ, un receptor nuclear care reglează gene ale metabolismului lipidic și acțiunii insulinei",
   "Metforminul și tiazolidindionele reduc producția hepatică de glucoză, fără a fi secretagoge β-celulare",
   "Efectul maxim al tiazolidindionelor poate necesita până la trei luni, potrivit bibliografiei",
   "Efectul sinergic hepatic al celor două clase se explică prin legarea lor de același receptor PPAR-γ",
   "Tiazolidindionele potențează insulina endogenă, dar nu și efectul insulinei injectate, spre deosebire de metformin"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tiazolidindionele interacționează cu PPAR-γ, un receptor nuclear care reglează gene ale metabolismului lipidic și acțiunii insulinei — Corect: PPAR-γ este ținta nucleară descrisă.\n\nMetforminul și tiazolidindionele reduc producția hepatică de glucoză, fără a fi secretagoge β-celulare — Corect: Ambele reduc producția hepatică; metforminul nu stimulează secreția de insulină.\n\nEfectul maxim al tiazolidindionelor poate necesita până la trei luni, potrivit bibliografiei — Corect: Efectul indirect poate întârzia atingerea maximului până la trei luni.\n\nEfectul sinergic hepatic al celor două clase se explică prin legarea lor de același receptor PPAR-γ — Incorect: Mecanismul metforminului este distinct, fiind discutată AMP-kinaza.\n\nTiazolidindionele potențează insulina endogenă, dar nu și efectul insulinei injectate, spre deosebire de metformin — Incorect: Ambele potențează efectele insulinei endogene sau administrate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 718, 717, Tiazolidindionele — Mecanism de acțiune; Utilizare clinică (pagini PDF: 117, 116).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    718,
    717
   ],
   "pdfPages": [
    117,
    116
   ],
   "section": "Tiazolidindionele — Mecanism de acțiune; Utilizare clinică"
  },
  "learningObjective": "Separarea țintei moleculare de efectul metabolic convergent al sensibilizantelor la insulină.",
  "optionRationales": [
   "PPAR-γ este ținta nucleară descrisă.",
   "Ambele reduc producția hepatică; metforminul nu stimulează secreția de insulină.",
   "Efectul indirect poate întârzia atingerea maximului până la trei luni.",
   "Mecanismul metforminului este distinct, fiind discutată AMP-kinaza.",
   "Ambele potențează efectele insulinei endogene sau administrate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Alternativele păstrează sinergia și sensibilizarea corecte, dar modifică ținta comună presupusă sau sursa insulinei."
  },
  "textbookExpressions": [
   "receptor nuclear",
   "PPAR-γ",
   "efect sinergic"
  ]
 },
 {
  "id": "diabet-adv-017",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În comparația inhibitorilor DPP-4 cu agoniștii receptorilor GLP-1 sunt corecte afirmațiile:",
  "options": [
   "Inhibitorii DPP-4 împiedică inactivarea rapidă a GLP-1 și restabilesc niveluri fiziologice",
   "Agoniștii receptorilor GLP-1 produc o stimulare farmacologică mai puternică decât inhibitorii DPP-4",
   "Asocierea celor două clase nu aduce beneficiul suplimentar așteptat de la inhibarea DPP-4",
   "Rezistența exendinului la clivajul prin DPP-4 explică potențarea sa suplimentară printr-un inhibitor DPP-4",
   "Agoniștii GLP-1 cu acțiune scurtă încetinesc golirea gastrică, pe lângă efectele pancreatice"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Inhibitorii DPP-4 împiedică inactivarea rapidă a GLP-1 și restabilesc niveluri fiziologice — Corect: DPP-4 inactivează rapid GLP-1; inhibarea sa conservă incretina endogenă.\n\nAgoniștii receptorilor GLP-1 produc o stimulare farmacologică mai puternică decât inhibitorii DPP-4 — Corect: Textul opune nivelul fiziologic celui farmacologic.\n\nAsocierea celor două clase nu aduce beneficiul suplimentar așteptat de la inhibarea DPP-4 — Corect: Bibliografia precizează lipsa beneficiului suplimentar al inhibitorului DPP-4.\n\nRezistența exendinului la clivajul prin DPP-4 explică potențarea sa suplimentară printr-un inhibitor DPP-4 — Incorect: Rezistența la clivaj nu justifică potențarea prin blocarea enzimei față de care molecula este deja rezistentă.\n\nAgoniștii GLP-1 cu acțiune scurtă încetinesc golirea gastrică, pe lângă efectele pancreatice — Corect: Încetinirea golirii este explicit atribuită analogilor cu acțiune scurtă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 719, 718, 720, Agoniștii receptorilor de GLP-1 — Mecanism; Utilizare clinică (pagini PDF: 118, 117, 119).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    719,
    718,
    720
   ],
   "pdfPages": [
    118,
    117,
    119
   ],
   "section": "Agoniștii receptorilor de GLP-1 — Mecanism; Utilizare clinică"
  },
  "learningObjective": "Integrarea degradării incretinelor, amplitudinii stimulării și lipsei utilității asocierii.",
  "optionRationales": [
   "DPP-4 inactivează rapid GLP-1; inhibarea sa conservă incretina endogenă.",
   "Textul opune nivelul fiziologic celui farmacologic.",
   "Bibliografia precizează lipsa beneficiului suplimentar al inhibitorului DPP-4.",
   "Rezistența la clivaj nu justifică potențarea prin blocarea enzimei față de care molecula este deja rezistentă.",
   "Încetinirea golirii este explicit atribuită analogilor cu acțiune scurtă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul folosește o proprietate moleculară adevărată pentru a deduce greșit o asociere terapeutică."
  },
  "textbookExpressions": [
   "niveluri fiziologice",
   "niveluri farmacologice",
   "rezistent la clivaj"
  ]
 },
 {
  "id": "diabet-adv-018",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Privind inhibitorii SGLT2, sunt corecte afirmațiile:",
  "options": [
   "Reduc pragul renal pentru glucoză, favorizând eliminarea urinară a glucozei și caloriilor",
   "Reducerea efectului hipoglicemiant la RFGe mică presupune dispariția în aceeași măsură a beneficiului renoprotector",
   "Cetoacidoza asociată poate evolua cu glicemii normale sau doar ușor crescute",
   "Locul de acțiune este transportul insulinodependent prin GLUT4 din epiteliul tubular proximal",
   "Beneficiul renal se explică în bibliografie prin creșterea pragului de glicozurie concomitent cu natriureza"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Reduc pragul renal pentru glucoză, favorizând eliminarea urinară a glucozei și caloriilor — Corect: Scăderea pragului determină glicozurie și pierdere calorică.\n\nReducerea efectului hipoglicemiant la RFGe mică presupune dispariția în aceeași măsură a beneficiului renoprotector — Incorect: Bibliografia distinge dependența efectului glicemic de funcția renală de persistența renoprotecției la RFGe redusă.\n\nCetoacidoza asociată poate evolua cu glicemii normale sau doar ușor crescute — Corect: Acesta este avertismentul diagnostic din secțiunea efectelor adverse.\n\nLocul de acțiune este transportul insulinodependent prin GLUT4 din epiteliul tubular proximal — Incorect: SGLT2 este cotransportorul sodiu-glucoză proximal; GLUT4 este transportorul insulinodependent muscular/adipos.\n\nBeneficiul renal se explică în bibliografie prin creșterea pragului de glicozurie concomitent cu natriureza — Incorect: Pragul scade; textul discută modificarea hemodinamicii glomerulare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 719, 704, 709, Inhibitorii transportorului de sodiu-glucoză 2 (pagini PDF: 118, 103, 108).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    719,
    704,
    709
   ],
   "pdfPages": [
    118,
    103,
    108
   ],
   "section": "Inhibitorii transportorului de sodiu-glucoză 2"
  },
  "learningObjective": "Separarea efectului glicemic dependent de funcția renală de protecția renală și capcana cetoacidozei euglicemice.",
  "optionRationales": [
   "Scăderea pragului determină glicozurie și pierdere calorică.",
   "Bibliografia distinge dependența efectului glicemic de funcția renală de persistența renoprotecției la RFGe redusă.",
   "Acesta este avertismentul diagnostic din secțiunea efectelor adverse.",
   "SGLT2 este cotransportorul sodiu-glucoză proximal; GLUT4 este transportorul insulinodependent muscular/adipos.",
   "Pragul scade; textul discută modificarea hemodinamicii glomerulare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Necesită diferențierea a trei efecte renale/metabolice și a doi transportori cu nume apropiate."
  },
  "textbookExpressions": [
   "pragul renal pentru glucoză",
   "hemodinamica glomerulară"
  ]
 },
 {
  "id": "diabet-adv-019",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Care asociere între tratamentul non-insulinic și ținta sau mecanismul descris este corectă?",
  "options": [
   "Colesevelam — resetarea ritmului circadian al dopaminei; bromocriptină — legarea acizilor biliari",
   "Pramlintidă — inhibarea DPP-4; colesevelam — legarea acizilor biliari",
   "Bromocriptină cu eliberare rapidă — ritmul dopaminei hipotalamice; pramlintidă — analog al amilinei",
   "Acarboză — blocarea SGLT2; pramlintidă — analog al amilinei",
   "Colesevelam — agonist GLP-1; acarboză — inhibarea descompunerii dizaharidelor"
  ],
  "correct": [
   2
  ],
  "explanation": "Colesevelam — resetarea ritmului circadian al dopaminei; bromocriptină — legarea acizilor biliari — Incorect: Cele două mecanisme sunt inversate.\n\nPramlintidă — inhibarea DPP-4; colesevelam — legarea acizilor biliari — Incorect: Pramlintida este analog al amilinei, nu inhibitor DPP-4.\n\nBromocriptină cu eliberare rapidă — ritmul dopaminei hipotalamice; pramlintidă — analog al amilinei — Corect: Ambele asocieri sunt descrise în aceste secțiuni.\n\nAcarboză — blocarea SGLT2; pramlintidă — analog al amilinei — Incorect: Acarboza inhibă alfa-glucozidaza, nu cotransportorul renal.\n\nColesevelam — agonist GLP-1; acarboză — inhibarea descompunerii dizaharidelor — Incorect: Colesevelamul leagă acizii biliari; mecanismul acarbozei este corect.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 719, 720, Alte terapii orale; Analogii de amilină (pagini PDF: 118, 119).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    719,
    720
   ],
   "pdfPages": [
    118,
    119
   ],
   "section": "Alte terapii orale; Analogii de amilină"
  },
  "learningObjective": "Diferențierea mecanismelor tratamentelor mai puțin uzuale de mecanismele incretinice și renale.",
  "optionRationales": [
   "Cele două mecanisme sunt inversate.",
   "Pramlintida este analog al amilinei, nu inhibitor DPP-4.",
   "Ambele asocieri sunt descrise în aceste secțiuni.",
   "Acarboza inhibă alfa-glucozidaza, nu cotransportorul renal.",
   "Colesevelamul leagă acizii biliari; mecanismul acarbozei este corect."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Perechi cu un atribut corect solicită diferențierea unor terapii apropiate ca efect glicemic, dar cu ținte distincte."
  },
  "textbookExpressions": [
   "dopaminei hipotalamice",
   "rășină de legare a acizilor biliari",
   "analog al amilinei"
  ]
 },
 {
  "id": "diabet-adv-021",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Care asociere între marker, substratul glicării și intervalul de evaluare corespunde bibliografiei?",
  "options": [
   "HbA1c — valina terminală a lanțului α; fructozamină — albumină glicată, ultimele 2–3 săptămâni",
   "HbA1c — valina terminală a lanțului β; fructozamină — albumină glicată, ultimele 2–3 săptămâni",
   "HbA1c — valina terminală a lanțului β; fructozamină — albumină glicată, ultimele 6–8 săptămâni",
   "HbA1c — lizina terminală a lanțului β; fructozamină — albumină glicată, ultimele 2–3 săptămâni",
   "HbA1c — valina terminală a lanțului β; fructozamină — hemoglobină glicată, ultimele 2–3 săptămâni"
  ],
  "correct": [
   1
  ],
  "explanation": "HbA1c — valina terminală a lanțului α; fructozamină — albumină glicată, ultimele 2–3 săptămâni — Incorect: Pentru HbA1c este implicat lanțul β, nu α.\n\nHbA1c — valina terminală a lanțului β; fructozamină — albumină glicată, ultimele 2–3 săptămâni — Corect: Textul descrie valina terminală β și albumina glicată ca marker al ultimelor 2–3 săptămâni.\n\nHbA1c — valina terminală a lanțului β; fructozamină — albumină glicată, ultimele 6–8 săptămâni — Incorect: Intervalul de 6–8 săptămâni este cel atribuit HbA1c în această ediție.\n\nHbA1c — lizina terminală a lanțului β; fructozamină — albumină glicată, ultimele 2–3 săptămâni — Incorect: Aminoacidul terminal implicat este valina.\n\nHbA1c — valina terminală a lanțului β; fructozamină — hemoglobină glicată, ultimele 2–3 săptămâni — Incorect: Fructozamina măsoară glicarea proteinelor serice, predominant albumina, nu hemoglobina.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 721, Evaluarea pe termen lung a controlului metabolic (pagini PDF: 120).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    721
   ],
   "pdfPages": [
    120
   ],
   "section": "Evaluarea pe termen lung a controlului metabolic"
  },
  "learningObjective": "Diferențierea situsului molecular al HbA1c și a substratului și intervalului fructozaminei.",
  "optionRationales": [
   "Pentru HbA1c este implicat lanțul β, nu α.",
   "Textul descrie valina terminală β și albumina glicată ca marker al ultimelor 2–3 săptămâni.",
   "Intervalul de 6–8 săptămâni este cel atribuit HbA1c în această ediție.",
   "Aminoacidul terminal implicat este valina.",
   "Fructozamina măsoară glicarea proteinelor serice, predominant albumina, nu hemoglobina."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fiecare alternativă păstrează două repere corecte; trebuie recunoscute simultan situsul, substratul și intervalul."
  },
  "textbookExpressions": [
   "valina terminală",
   "albumina glicată"
  ]
 },
 {
  "id": "diabet-adv-022",
  "topicId": "diabet",
  "type": "CM",
  "stem": "La o medie glicemică similară, sunt corecte afirmațiile despre interpretarea markerilor de glicare:",
  "options": [
   "Hemoliza poate determina o HbA1c mai mică prin scurtarea duratei de viață eritrocitare",
   "Deficitul de fier poate determina o HbA1c mai mare decât ar sugera glicemia",
   "Standardizarea metodei HbA1c corectează diferențele induse de durata de viață eritrocitară",
   "Fructozamina elimină influența duratei de viață eritrocitare deoarece măsoară aceeași valină terminală prin altă metodă",
   "O hemoragie recentă poate crește HbA1c prin creșterea proporției eritrocitelor tinere"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Hemoliza poate determina o HbA1c mai mică prin scurtarea duratei de viață eritrocitare — Corect: Scurtarea supraviețuirii eritrocitelor poate reduce rezultatul HbA1c.\n\nDeficitul de fier poate determina o HbA1c mai mare decât ar sugera glicemia — Corect: Deficitul de fier figurează între cauzele rezultatelor fals crescute.\n\nStandardizarea metodei HbA1c corectează diferențele induse de durata de viață eritrocitară — Incorect: Standardizarea privește metoda; nu normalizează durata de viață a eritrocitelor.\n\nFructozamina elimină influența duratei de viață eritrocitare deoarece măsoară aceeași valină terminală prin altă metodă — Incorect: Fructozamina privește albumina glicată, nu situsul hemoglobinei.\n\nO hemoragie recentă poate crește HbA1c prin creșterea proporției eritrocitelor tinere — Incorect: Hemoragia poate reduce HbA1c; eritrocitele tinere au avut mai puțin timp pentru glicare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 721, Cadranul 23.16 — Limitările HbA1c; Fructozamina (pagini PDF: 120).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    721
   ],
   "pdfPages": [
    120
   ],
   "section": "Cadranul 23.16 — Limitările HbA1c; Fructozamina"
  },
  "learningObjective": "Separarea variabilității analitice de interferența biologică a turnoverului eritrocitar.",
  "optionRationales": [
   "Scurtarea supraviețuirii eritrocitelor poate reduce rezultatul HbA1c.",
   "Deficitul de fier figurează între cauzele rezultatelor fals crescute.",
   "Standardizarea privește metoda; nu normalizează durata de viață a eritrocitelor.",
   "Fructozamina privește albumina glicată, nu situsul hemoglobinei.",
   "Hemoragia poate reduce HbA1c; eritrocitele tinere au avut mai puțin timp pentru glicare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă corectarea analitică, schimbarea substratului și sensul efectului turnoverului, păstrând contextul biologic relevant."
  },
  "textbookExpressions": [
   "variabilitate analitică",
   "durata de viață a eritrocitelor"
  ]
 },
 {
  "id": "diabet-adv-025",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În evoluția biochimică a cetoacidozei diabetice sunt corecte afirmațiile:",
  "options": [
   "O potasemie inițial crescută poate coexista cu deficitul global de potasiu",
   "Creșterea cloremiei, bicarbonatul încă scăzut și normalizarea găurii anionice pot indica acidoză hipercloremică în cursul tratamentului",
   "Normalizarea glicemiei și persistența cetonemiei indică încheierea necesarului de insulină intravenoasă",
   "Acidoza hipercloremică de recuperare se caracterizează prin menținerea aceleiași găuri anionice mari ca în acumularea corpilor cetonici",
   "Scăderea potasemiei după insulină reflectă în primul rând corectarea deficitului corporal, nu redistribuția intracelulară"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "O potasemie inițial crescută poate coexista cu deficitul global de potasiu — Corect: Pierderile urinare și digestive determină deficit global chiar când potasemia este crescută.\n\nCreșterea cloremiei, bicarbonatul încă scăzut și normalizarea găurii anionice pot indica acidoză hipercloremică în cursul tratamentului — Corect: Cadranul 23.20 descrie acest profil cu revenirea găurii anionice la normal.\n\nNormalizarea glicemiei și persistența cetonemiei indică încheierea necesarului de insulină intravenoasă — Incorect: Insulina este continuată până la rezolvarea cetozei; glucoza poate fi adăugată pentru a evita hipoglicemia.\n\nAcidoza hipercloremică de recuperare se caracterizează prin menținerea aceleiași găuri anionice mari ca în acumularea corpilor cetonici — Incorect: În acidoza hipercloremică descrisă, gaura anionică revine la normal.\n\nScăderea potasemiei după insulină reflectă în primul rând corectarea deficitului corporal, nu redistribuția intracelulară — Incorect: Insulina favorizează intrarea potasiului în celule; o concentrație în scădere nu demonstrează refacerea stocului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 724, 723, 725, Substituția pierderilor de electroliți; Substituția insulinică (pagini PDF: 123, 122, 124).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    724,
    723,
    725
   ],
   "pdfPages": [
    123,
    122,
    124
   ],
   "section": "Substituția pierderilor de electroliți; Substituția insulinică"
  },
  "learningObjective": "Separarea concentrației serice de stocul corporal și a acidozei reziduale hipercloremice de cetoză.",
  "optionRationales": [
   "Pierderile urinare și digestive determină deficit global chiar când potasemia este crescută.",
   "Cadranul 23.20 descrie acest profil cu revenirea găurii anionice la normal.",
   "Insulina este continuată până la rezolvarea cetozei; glucoza poate fi adăugată pentru a evita hipoglicemia.",
   "În acidoza hipercloremică descrisă, gaura anionică revine la normal.",
   "Insulina favorizează intrarea potasiului în celule; o concentrație în scădere nu demonstrează refacerea stocului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Trei indicatori aparent favorabili pot ascunde procese diferite; distractorii confundă concentrația, stocul și obiectivul metabolic."
  },
  "textbookExpressions": [
   "acidoză hipercloremică",
   "deficit global de potasiu"
  ]
 },
 {
  "id": "diabet-adv-027",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În mecanismele microvasculare descrise în diabet, sunt corecte asocierile:",
  "options": [
   "Produși finali de glicare avansată — stimularea complementului și citokinelor proinflamatorii",
   "Leziune endotelială — eliberare de endoteline și factori trombogeni, cu posibilă ocluzie microvasculară",
   "Reducerea insulinei portale — generare hepatică redusă de IGF-I și hipersecreție hipofizară de hormon de creștere",
   "Reducerea insulinei portale — creșterea IGF-I hepatic ca mecanism al hipersecreției de hormon de creștere",
   "Depășirea autoreglării fluxului — protejarea capilarelor de presiunea crescută prin diminuarea fluxului tisular"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Produși finali de glicare avansată — stimularea complementului și citokinelor proinflamatorii — Corect: Aceste sisteme inflamatorii sunt stimulate de produșii de glicare.\n\nLeziune endotelială — eliberare de endoteline și factori trombogeni, cu posibilă ocluzie microvasculară — Corect: Endotelinele și factorii trombogeni pot contribui la ocluzie.\n\nReducerea insulinei portale — generare hepatică redusă de IGF-I și hipersecreție hipofizară de hormon de creștere — Corect: Textul descrie generarea hepatică deficitară de IGF-I și hipersecreția de GH.\n\nReducerea insulinei portale — creșterea IGF-I hepatic ca mecanism al hipersecreției de hormon de creștere — Incorect: IGF-I hepatic este redus, nu crescut, în mecanismul prezentat.\n\nDepășirea autoreglării fluxului — protejarea capilarelor de presiunea crescută prin diminuarea fluxului tisular — Incorect: Depășirea autoreglării permite flux crescut și leziune, accentuate de hipertensiune.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 726, Morfopatologia complicațiilor microvasculare (pagini PDF: 125).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    726
   ],
   "pdfPages": [
    125
   ],
   "section": "Morfopatologia complicațiilor microvasculare"
  },
  "learningObjective": "Integrarea căilor inflamatorii, hemodinamice și a axului GH–IGF-I.",
  "optionRationales": [
   "Aceste sisteme inflamatorii sunt stimulate de produșii de glicare.",
   "Endotelinele și factorii trombogeni pot contribui la ocluzie.",
   "Textul descrie generarea hepatică deficitară de IGF-I și hipersecreția de GH.",
   "IGF-I hepatic este redus, nu crescut, în mecanismul prezentat.",
   "Depășirea autoreglării permite flux crescut și leziune, accentuate de hipertensiune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Asociază trei căi cu direcții diferite; un profil hormonal și efectul autoreglării trebuie diferențiate precis."
  },
  "textbookExpressions": [
   "produși finali de glicare avansată",
   "endoteline",
   "concentrației portale de insulină"
  ]
 },
 {
  "id": "diabet-adv-028",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Privind aspectul și substratul leziunilor retiniene sunt corecte afirmațiile:",
  "options": [
   "Exsudatele dure reprezintă depozite proteice și lipidice rămase după drenarea fluidului extravazat",
   "Petele de vată sunt legate de microinfarcte și de întreruperea transportului axoplasmatic",
   "Exsudatele dure sunt alb-gălbui, lucioase și cu margini bine definite",
   "Petele de vată au margini bine definite și luciu datorită concentrației lipidice a depozitului",
   "Exsudatele dure reflectă acumularea de reziduuri axoplasmatice în fibrele nervoase ischemice"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Exsudatele dure reprezintă depozite proteice și lipidice rămase după drenarea fluidului extravazat — Corect: Proteinele și lipidele extravazate alcătuiesc exsudatele dure.\n\nPetele de vată sunt legate de microinfarcte și de întreruperea transportului axoplasmatic — Corect: Microischemia produce acumulare axoplasmatică și edem al fibrelor nervoase.\n\nExsudatele dure sunt alb-gălbui, lucioase și cu margini bine definite — Corect: Acesta este aspectul comparativ descris în nota tabelului.\n\nPetele de vată au margini bine definite și luciu datorită concentrației lipidice a depozitului — Incorect: Petele de vată sunt albe-gri, mate, cu margini nedefinite; descrierea lucioasă aparține exsudatelor dure.\n\nExsudatele dure reflectă acumularea de reziduuri axoplasmatice în fibrele nervoase ischemice — Incorect: Mecanismul axoplasmatic aparține petelor de vată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 728, Cadranul 23.21; Modificări precoce fără pierderea vederii (pagini PDF: 127).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    728
   ],
   "pdfPages": [
    127
   ],
   "section": "Cadranul 23.21; Modificări precoce fără pierderea vederii"
  },
  "learningObjective": "Separarea originii exsudative de cea ischemică și asocierea cu aspectul oftalmoscopic.",
  "optionRationales": [
   "Proteinele și lipidele extravazate alcătuiesc exsudatele dure.",
   "Microischemia produce acumulare axoplasmatică și edem al fibrelor nervoase.",
   "Acesta este aspectul comparativ descris în nota tabelului.",
   "Petele de vată sunt albe-gri, mate, cu margini nedefinite; descrierea lucioasă aparține exsudatelor dure.",
   "Mecanismul axoplasmatic aparține petelor de vată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Aspectul optic și substratul histologic sunt schimbate între două leziuni albe plauzibil confundabile."
  },
  "textbookExpressions": [
   "reziduuri axoplasmatice",
   "depozite proteice și lipidice"
  ]
 },
 {
  "id": "diabet-adv-029",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Care grupare corespunde retinopatiei preproliferative în clasificarea bibliografică?",
  "options": [
   "Anse venoase, anomalii microvasculare intraretinale, hemoragii rotunde multiple profunde",
   "Microanevrisme, exsudate dure, hemoragii subhialoide",
   "Anomalii microvasculare intraretinale, vase noi pe disc, dilatări venoase",
   "Anse venoase, hemoragii în vitros, fibroză retiniană",
   "Exsudate dure, microanevrisme, dezlipire de retină prin tracțiune"
  ],
  "correct": [
   0
  ],
  "explanation": "Anse venoase, anomalii microvasculare intraretinale, hemoragii rotunde multiple profunde — Corect: Toate trei sunt încadrate la retinopatia preproliferativă.\n\nMicroanevrisme, exsudate dure, hemoragii subhialoide — Incorect: Hemoragia subhialoidă aparține stadiului proliferativ.\n\nAnomalii microvasculare intraretinale, vase noi pe disc, dilatări venoase — Incorect: Vasele noi pe disc indică proliferare; celelalte două sunt preproliferative.\n\nAnse venoase, hemoragii în vitros, fibroză retiniană — Incorect: Hemoragia în vitros poate apărea în retinopatia proliferativă; fibroza din această grupare aparține stadiului avansat.\n\nExsudate dure, microanevrisme, dezlipire de retină prin tracțiune — Incorect: Dezlipirea prin tracțiune este o leziune avansată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 728, Cadranul 23.21 — Gradele retinopatiei (pagini PDF: 127).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    728
   ],
   "pdfPages": [
    127
   ],
   "section": "Cadranul 23.21 — Gradele retinopatiei"
  },
  "learningObjective": "Încadrarea unui grup complet de leziuni în stadiul preproliferativ.",
  "optionRationales": [
   "Toate trei sunt încadrate la retinopatia preproliferativă.",
   "Hemoragia subhialoidă aparține stadiului proliferativ.",
   "Vasele noi pe disc indică proliferare; celelalte două sunt preproliferative.",
   "Hemoragia în vitros poate apărea în retinopatia proliferativă; fibroza din această grupare aparține stadiului avansat.",
   "Dezlipirea prin tracțiune este o leziune avansată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fiecare alternativă reunește semne retiniene reale, cu transferul uneia sau a două leziuni între stadii vecine."
  },
  "textbookExpressions": [
   "anomalii microvasculare intraretinale",
   "hemoragii rotunde"
  ]
 },
 {
  "id": "diabet-adv-030",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În retinopatia proliferativă și avansată sunt corecte relațiile:",
  "options": [
   "Ariile de non-perfuzie capilară favorizează eliberarea VEGF și neovascularizația",
   "Benzile fibroase care însoțesc vasele noi pot produce dezlipire de retină prin tracțiune",
   "Vasele noi de la marginea pupilei și din unghiul camerei anterioare pot produce glaucom rubeotic",
   "Hemoragia în vitros produce pierdere lentă a vederii centrale prin îngroșarea stratului macular",
   "Hemoragiile preretinale în formă de barcă reprezintă depozite lipidice circinate după resorbția fluidului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ariile de non-perfuzie capilară favorizează eliberarea VEGF și neovascularizația — Corect: Ischemia stimulează factorii de creștere vasculară.\n\nBenzile fibroase care însoțesc vasele noi pot produce dezlipire de retină prin tracțiune — Corect: Contracția țesutului fibros poate trage retina.\n\nVasele noi de la marginea pupilei și din unghiul camerei anterioare pot produce glaucom rubeotic — Corect: Neovascularizația iriană și a unghiului poate crește presiunea intraoculară.\n\nHemoragia în vitros produce pierdere lentă a vederii centrale prin îngroșarea stratului macular — Incorect: Hemoragia în vitros poate cauza pierdere bruscă; îngroșarea maculei aparține edemului macular.\n\nHemoragiile preretinale în formă de barcă reprezintă depozite lipidice circinate după resorbția fluidului — Incorect: Forma de barcă descrie sânge preretinal, nu exsudate lipidice.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 728, Retinopatia care poate cauza pierderea vederii (pagini PDF: 127).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    728
   ],
   "pdfPages": [
    127
   ],
   "section": "Retinopatia care poate cauza pierderea vederii"
  },
  "learningObjective": "Asocierea compartimentului ocular și a mecanismului cu tipul pierderii vederii.",
  "optionRationales": [
   "Ischemia stimulează factorii de creștere vasculară.",
   "Contracția țesutului fibros poate trage retina.",
   "Neovascularizația iriană și a unghiului poate crește presiunea intraoculară.",
   "Hemoragia în vitros poate cauza pierdere bruscă; îngroșarea maculei aparține edemului macular.",
   "Forma de barcă descrie sânge preretinal, nu exsudate lipidice."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii păstrează consecința vizuală sau aspectul leziunii, dar transferă mecanismul și compartimentul."
  },
  "textbookExpressions": [
   "hemoragii preretinale",
   "benzi fibroase",
   "glaucom rubeotic"
  ]
 },
 {
  "id": "diabet-adv-031",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Despre maculopatia diabetică sunt corecte afirmațiile:",
  "options": [
   "Retinopatia neproliferativă poate compromite vederea prin localizarea maculară",
   "Ocluzia capilară maculară și edemul macular pot ambele reduce vederea centrală",
   "Exsudatele dure apropiate de maculă demonstrează că pierderea vederii este produsă de vase nou formate pe disc",
   "Tomografia în coerență optică urmărește tranzitul fluoresceinei pentru a măsura grosimea retinei",
   "Pierderea centrală din edem rezultă din contracția benzilor fibroase de la marginea vaselor noi"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Retinopatia neproliferativă poate compromite vederea prin localizarea maculară — Corect: Localizarea centrală poate produce deficit vizual fără stadiu proliferativ.\n\nOcluzia capilară maculară și edemul macular pot ambele reduce vederea centrală — Corect: Sunt descrise ambele mecanisme de pierdere centrală.\n\nExsudatele dure apropiate de maculă demonstrează că pierderea vederii este produsă de vase nou formate pe disc — Incorect: Exsudatele maculare nu stabilesc neovascularizația pe disc.\n\nTomografia în coerență optică urmărește tranzitul fluoresceinei pentru a măsura grosimea retinei — Incorect: TCO vizualizează straturile și grosimea; tranzitul fluoresceinei este studiat angiografic.\n\nPierderea centrală din edem rezultă din contracția benzilor fibroase de la marginea vaselor noi — Incorect: Edemul deformează și îngroașă macula; benzile fibroase produc tracțiune.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 728, Maculopatia (pagini PDF: 127).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    728
   ],
   "pdfPages": [
    127
   ],
   "section": "Maculopatia"
  },
  "learningObjective": "Separarea afectării centrale exsudative/ischemice de proliferarea vasculară și a metodelor imagistice.",
  "optionRationales": [
   "Localizarea centrală poate produce deficit vizual fără stadiu proliferativ.",
   "Sunt descrise ambele mecanisme de pierdere centrală.",
   "Exsudatele maculare nu stabilesc neovascularizația pe disc.",
   "TCO vizualizează straturile și grosimea; tranzitul fluoresceinei este studiat angiografic.",
   "Edemul deformează și îngroașă macula; benzile fibroase produc tracțiune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Opțiunile folosesc mecanisme retiniene concurente și confundă două investigații reale, fără boli din afara contextului."
  },
  "textbookExpressions": [
   "edem macular",
   "tomografia în coerență optică"
  ]
 },
 {
  "id": "diabet-adv-032",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În tratamentul complicațiilor oculare diabetice sunt corecte afirmațiile:",
  "options": [
   "Fotocoagularea panretinală reduce stimulul ischemic pentru neovascularizație prin distrugerea retinei periferice",
   "Îngustarea permanentă a câmpului vizual și reducerea adaptării la întuneric pot rezulta din fotocoagulare",
   "Chirurgia vitreo-retiniană poate fi utilizată pentru dezlipirea prin tracțiune fibrotică sau hemoragia intravitreană care nu se elimină",
   "Beneficiul panfotocoagulării rezultă din creșterea perfuziei retinei periferice, cu păstrarea adaptării la întuneric",
   "Hemoragia recurentă care împiedică terapia laser este indicația din text pentru fotocoagulare maculară localizată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Fotocoagularea panretinală reduce stimulul ischemic pentru neovascularizație prin distrugerea retinei periferice — Corect: Principiul este reducerea stimulului ischemic prin ablația țesutului periferic.\n\nÎngustarea permanentă a câmpului vizual și reducerea adaptării la întuneric pot rezulta din fotocoagulare — Corect: Sunt consecințe ale distrugerii retinei periferice.\n\nChirurgia vitreo-retiniană poate fi utilizată pentru dezlipirea prin tracțiune fibrotică sau hemoragia intravitreană care nu se elimină — Corect: Acestea sunt indicații descrise pentru chirurgie.\n\nBeneficiul panfotocoagulării rezultă din creșterea perfuziei retinei periferice, cu păstrarea adaptării la întuneric — Incorect: Procedura distruge țesut periferic; nu restabilește perfuzia sa și poate reduce adaptarea la întuneric.\n\nHemoragia recurentă care împiedică terapia laser este indicația din text pentru fotocoagulare maculară localizată — Incorect: Hemoragia care împiedică laserul este o indicație pentru chirurgie vitreoretiniană.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 729, Fotocoagularea laser; Chirurgia vitreo-retiniană (pagini PDF: 128).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    729
   ],
   "pdfPages": [
    128
   ],
   "section": "Fotocoagularea laser; Chirurgia vitreo-retiniană"
  },
  "learningObjective": "Distingerea țintei și compromisului funcțional al laserului de indicațiile chirurgiei vitreoretiniene.",
  "optionRationales": [
   "Principiul este reducerea stimulului ischemic prin ablația țesutului periferic.",
   "Sunt consecințe ale distrugerii retinei periferice.",
   "Acestea sunt indicații descrise pentru chirurgie.",
   "Procedura distruge țesut periferic; nu restabilește perfuzia sa și poate reduce adaptarea la întuneric.",
   "Hemoragia care împiedică laserul este o indicație pentru chirurgie vitreoretiniană."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confuzia testată privește scopul biologic versus consecința funcțională și alegerea între intervenții oftalmologice apropiate."
  },
  "textbookExpressions": [
   "stimul ischemic",
   "vederea periferică",
   "tracțiune fibrotică"
  ]
 },
 {
  "id": "diabet-adv-033",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Care succesiune hemodinamică explică hiperfiltrarea glomerulară precoce din nefropatia diabetică descrisă în bibliografie?",
  "options": [
   "Dilatare aferentă mai mare decât eferentă → presiune intraglomerulară crescută → stres mecanic mezangial crescut",
   "Dilatare eferentă mai mare decât aferentă → presiune intraglomerulară crescută → stres mecanic mezangial crescut",
   "Dilatare aferentă mai mare decât eferentă → presiune intraglomerulară scăzută → producție crescută de matrice",
   "Dilatare eferentă mai mare decât aferentă → presiune intraglomerulară scăzută → hiperfiltrare precoce",
   "Constricție aferentă și dilatare eferentă → presiune intraglomerulară crescută → hipertrofie renală"
  ],
  "correct": [
   0
  ],
  "explanation": "Dilatare aferentă mai mare decât eferentă → presiune intraglomerulară crescută → stres mecanic mezangial crescut — Corect: Aceasta este succesiunea din text, care contribuie ulterior la glomeruloscleroză.\n\nDilatare eferentă mai mare decât aferentă → presiune intraglomerulară crescută → stres mecanic mezangial crescut — Incorect: Dilatarea eferentă relativ mai mare ar reduce presiunea intraglomerulară.\n\nDilatare aferentă mai mare decât eferentă → presiune intraglomerulară scăzută → producție crescută de matrice — Incorect: Presiunea crește în condițiile descrise.\n\nDilatare eferentă mai mare decât aferentă → presiune intraglomerulară scăzută → hiperfiltrare precoce — Incorect: Presiunea scăzută nu explică hiperfiltrarea din mecanismul bibliografic.\n\nConstricție aferentă și dilatare eferentă → presiune intraglomerulară crescută → hipertrofie renală — Incorect: Ambele modificări de tonus tind să reducă presiunea glomerulară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 730, Nefropatia diabetică — Fiziopatologie (pagini PDF: 129).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    730
   ],
   "pdfPages": [
    129
   ],
   "section": "Nefropatia diabetică — Fiziopatologie"
  },
  "learningObjective": "Integrarea tonusului arteriolar diferențial cu presiunea de filtrare și răspunsul mezangial.",
  "optionRationales": [
   "Aceasta este succesiunea din text, care contribuie ulterior la glomeruloscleroză.",
   "Dilatarea eferentă relativ mai mare ar reduce presiunea intraglomerulară.",
   "Presiunea crește în condițiile descrise.",
   "Presiunea scăzută nu explică hiperfiltrarea din mecanismul bibliografic.",
   "Ambele modificări de tonus tind să reducă presiunea glomerulară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate opțiunile modifică doar raportul aferent/eferent și consecințele sale; trebuie urmărită întreaga succesiune."
  },
  "textbookExpressions": [
   "presiunea de filtrare intraglomerulară",
   "matrice extracelulară mezangială"
  ]
 },
 {
  "id": "diabet-adv-034",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În evoluția nefropatiei diabetice sunt corecte afirmațiile:",
  "options": [
   "Hipertrofia renală cu hiperfiltrare poate preceda scăderea progresivă a RFGe",
   "În forma clasică, creșterea creatininei poate apărea după instalarea proteinuriei persistente",
   "În forma non-clasică, RFGe poate scădea cu albuminurie redusă sau absentă",
   "În forma clasică, momentul apariției proteinuriei persistente coincide cu începutul creșterii creatininei serice",
   "Glomeruloscleroza nodulară Kimmelstiel–Wilson reprezintă anomalia funcțională care precedă hiperfiltrarea"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hipertrofia renală cu hiperfiltrare poate preceda scăderea progresivă a RFGe — Corect: Hiperfiltrarea este descrisă precoce, înaintea deteriorării funcției.\n\nÎn forma clasică, creșterea creatininei poate apărea după instalarea proteinuriei persistente — Corect: Creșterea creatininei este un semn tardiv în succesiunea clasică.\n\nÎn forma non-clasică, RFGe poate scădea cu albuminurie redusă sau absentă — Corect: Acesta este profilul non-clasic descris.\n\nÎn forma clasică, momentul apariției proteinuriei persistente coincide cu începutul creșterii creatininei serice — Incorect: Proteinuria persistentă poate fi prezentă cu creatinină încă normală; creșterea creatininei este tardivă.\n\nGlomeruloscleroza nodulară Kimmelstiel–Wilson reprezintă anomalia funcțională care precedă hiperfiltrarea — Incorect: Leziunea nodulară este structurală și nu precedă anomalia funcțională precoce descrisă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 730, Fiziopatologie; Albuminuria (pagini PDF: 129).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    730
   ],
   "pdfPages": [
    129
   ],
   "section": "Fiziopatologie; Albuminuria"
  },
  "learningObjective": "Separarea evoluției funcționale de leziunile structurale și a formei clasice de cea non-albuminurică.",
  "optionRationales": [
   "Hiperfiltrarea este descrisă precoce, înaintea deteriorării funcției.",
   "Creșterea creatininei este un semn tardiv în succesiunea clasică.",
   "Acesta este profilul non-clasic descris.",
   "Proteinuria persistentă poate fi prezentă cu creatinină încă normală; creșterea creatininei este tardivă.",
   "Leziunea nodulară este structurală și nu precedă anomalia funcțională precoce descrisă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Sunt combinate cronologia markerilor, o excepție clinică reală și decalajul dintre proteinurie și creșterea creatininei."
  },
  "textbookExpressions": [
   "nefropatie non-clasică",
   "leziuni Kimmelstiel-Wilson"
  ]
 },
 {
  "id": "diabet-adv-036",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În neuropatia autonomă digestivă, sunt corecte asocierile:",
  "options": [
   "Dismotilitate a intestinului subțire — suprapopulare bacteriană, deconjugarea sărurilor biliare și malabsorbție lipidică",
   "Afectare vagală — gastropareză, uneori cu vărsături incoercibile",
   "Diaree autonomă caracteristică — predominant nocturnă, imperioasă, cu incontinență",
   "Suprapopulare bacteriană — malabsorbție lipidică prin creșterea conjugării sărurilor biliare",
   "Gastropareză — golire gastrică accelerată prin denervare vagală, cu hiperglicemie postprandială precoce"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Dismotilitate a intestinului subțire — suprapopulare bacteriană, deconjugarea sărurilor biliare și malabsorbție lipidică — Corect: Acesta este lanțul mecanistic descris pentru dismotilitate și suprapopulare.\n\nAfectare vagală — gastropareză, uneori cu vărsături incoercibile — Corect: Leziunea vagală poate întârzia golirea gastrică.\n\nDiaree autonomă caracteristică — predominant nocturnă, imperioasă, cu incontinență — Corect: Aceste trăsături definesc tabloul caracteristic din text.\n\nSuprapopulare bacteriană — malabsorbție lipidică prin creșterea conjugării sărurilor biliare — Incorect: Suprapopularea duce la deconjugare, nu la conjugare crescută.\n\nGastropareză — golire gastrică accelerată prin denervare vagală, cu hiperglicemie postprandială precoce — Incorect: Gastropareza presupune întârzierea, nu accelerarea golirii.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 732, Neuropatia autonomă — Tractul gastrointestinal (pagini PDF: 131).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    732
   ],
   "pdfPages": [
    131
   ],
   "section": "Neuropatia autonomă — Tractul gastrointestinal"
  },
  "learningObjective": "Distingerea consecințelor denervării gastrice de mecanismele diareei autonome și bacteriene.",
  "optionRationales": [
   "Acesta este lanțul mecanistic descris pentru dismotilitate și suprapopulare.",
   "Leziunea vagală poate întârzia golirea gastrică.",
   "Aceste trăsături definesc tabloul caracteristic din text.",
   "Suprapopularea duce la deconjugare, nu la conjugare crescută.",
   "Gastropareza presupune întârzierea, nu accelerarea golirii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Diferențiere între sediu, tip de dismotilitate și transformarea sărurilor biliare, cu manifestări digestive comune."
  },
  "textbookExpressions": [
   "deconjugarea sărurilor biliare",
   "creșteri bacteriene excesive",
   "diaree nocturnă"
  ]
 },
 {
  "id": "diabet-adv-037",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Care asociere între manifestarea cardiovasculară autonomă și mecanism este corectă?",
  "options": [
   "Tahicardie de repaus — neuropatie vagală; hipotensiune posturală — pierderea tonusului simpatic arteriolar",
   "Tahicardie de repaus — neuropatie simpatică cardiacă; hipotensiune posturală — pierderea tonusului vagal arteriolar",
   "Pierderea aritmiei sinusale — neuropatie simpatică; picior cald — creșterea tonusului simpatic periferic",
   "Tahicardie de repaus — neuropatie vagală; hipotensiune posturală — creșterea vasoconstricției periferice",
   "Pierderea aritmiei sinusale — neuropatie vagală; picior cald cu puls amplu — vasoconstricție arteriolară"
  ],
  "correct": [
   0
  ],
  "explanation": "Tahicardie de repaus — neuropatie vagală; hipotensiune posturală — pierderea tonusului simpatic arteriolar — Corect: Textul atribuie tahicardia neuropatiei vagale, iar hipotensiunea pierderii tonusului simpatic.\n\nTahicardie de repaus — neuropatie simpatică cardiacă; hipotensiune posturală — pierderea tonusului vagal arteriolar — Incorect: Sistemele implicate sunt greșit atribuite.\n\nPierderea aritmiei sinusale — neuropatie simpatică; picior cald — creșterea tonusului simpatic periferic — Incorect: Aritmia sinusală depinde de modularea vagală; căldura periferică este legată de vasodilatație.\n\nTahicardie de repaus — neuropatie vagală; hipotensiune posturală — creșterea vasoconstricției periferice — Incorect: Hipotensiunea apare prin pierderea tonusului vasoconstrictor.\n\nPierderea aritmiei sinusale — neuropatie vagală; picior cald cu puls amplu — vasoconstricție arteriolară — Incorect: Primul mecanism este corect; piciorul cald reflectă vasodilatație.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 732, Neuropatia autonomă — Sistemul cardiovascular (pagini PDF: 131).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    732
   ],
   "pdfPages": [
    131
   ],
   "section": "Neuropatia autonomă — Sistemul cardiovascular"
  },
  "learningObjective": "Separarea denervării parasimpatice cardiace de denervarea simpatică vasculară.",
  "optionRationales": [
   "Textul atribuie tahicardia neuropatiei vagale, iar hipotensiunea pierderii tonusului simpatic.",
   "Sistemele implicate sunt greșit atribuite.",
   "Aritmia sinusală depinde de modularea vagală; căldura periferică este legată de vasodilatație.",
   "Hipotensiunea apare prin pierderea tonusului vasoconstrictor.",
   "Primul mecanism este corect; piciorul cald reflectă vasodilatație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Perechi de efecte din același sistem necesită localizarea exactă a ramurii autonome și a sensului modificării vasculare."
  },
  "textbookExpressions": [
   "neuropatie vagală",
   "tonusul simpatic al arteriolelor periferice"
  ]
 },
 {
  "id": "diabet-adv-038",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În comparația neuropatiei acute dureroase cu amiotrofia diabetică sunt corecte afirmațiile:",
  "options": [
   "Neuropatia acută dureroasă poate debuta după ameliorarea rapidă a controlului glicemic și poate avea semne obiective minime",
   "Amiotrofia se poate manifesta prin atrofie dureroasă asimetrică a cvadricepsului și diminuarea reflexului rotulian",
   "Durerea nocturnă accentuată de contactul cu așternuturile, fără atrofie musculară, este compatibilă cu neuropatia acută dureroasă",
   "Atrofia cvadricepsului cu reflex rotulian abolit reprezintă profilul tipic al neuropatiei acute dureroase fără amiotrofie",
   "În amiotrofie, intensitatea durerii implică păstrarea masei musculare, spre deosebire de neuropatia acută dureroasă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Neuropatia acută dureroasă poate debuta după ameliorarea rapidă a controlului glicemic și poate avea semne obiective minime — Corect: Acest debut și discrepanța durere–semne sunt descrise.\n\nAmiotrofia se poate manifesta prin atrofie dureroasă asimetrică a cvadricepsului și diminuarea reflexului rotulian — Corect: Acesta este tabloul proximal tipic din bibliografie.\n\nDurerea nocturnă accentuată de contactul cu așternuturile, fără atrofie musculară, este compatibilă cu neuropatia acută dureroasă — Corect: Hiperestezia nocturnă fără atrofie este caracteristică formei acute dureroase.\n\nAtrofia cvadricepsului cu reflex rotulian abolit reprezintă profilul tipic al neuropatiei acute dureroase fără amiotrofie — Incorect: Atrofia proximală și reflexul rotulian afectat indică tabloul de amiotrofie.\n\nÎn amiotrofie, intensitatea durerii implică păstrarea masei musculare, spre deosebire de neuropatia acută dureroasă — Incorect: Amiotrofia poate asocia durere și atrofie importantă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 732, Neuropatia acută dureroasă; Amiotrofia diabetică (pagini PDF: 131).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    732
   ],
   "pdfPages": [
    131
   ],
   "section": "Neuropatia acută dureroasă; Amiotrofia diabetică"
  },
  "learningObjective": "Separarea unui sindrom dureros cu deficit obiectiv mic de neuropatia proximală cu atrofie.",
  "optionRationales": [
   "Acest debut și discrepanța durere–semne sunt descrise.",
   "Acesta este tabloul proximal tipic din bibliografie.",
   "Hiperestezia nocturnă fără atrofie este caracteristică formei acute dureroase.",
   "Atrofia proximală și reflexul rotulian afectat indică tabloul de amiotrofie.",
   "Amiotrofia poate asocia durere și atrofie importantă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Aceeași durere apare în ambele forme; discriminarea cere topografie, masă musculară și reflex, nu prezența durerii."
  },
  "textbookExpressions": [
   "atrofii dureroase",
   "cvadriceps",
   "semne obiective minime"
  ]
 },
 {
  "id": "diabet-adv-039",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În apariția deformărilor și ulcerelor piciorului diabetic sunt corecte relațiile:",
  "options": [
   "Atrofia mușchilor mici și tracțiunea inegală a flexorilor lungi pot produce boltă înaltă și degete în gheară",
   "Deformarea schimbă distribuția presiunilor și poate favoriza calozități în zonele de sprijin",
   "Neuropatia autonomă poate reduce transpirația, favorizând pielea uscată și fisurile",
   "Bolta înaltă și degetele în gheară sunt consecințe ale afectării senzitive izolate, cu inervația mușchilor mici păstrată",
   "Denervarea autonomă asociază reducerea transpirației cu răcirea piciorului prin creșterea tonusului vasoconstrictor"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Atrofia mușchilor mici și tracțiunea inegală a flexorilor lungi pot produce boltă înaltă și degete în gheară — Corect: Acesta este mecanismul deformării descris.\n\nDeformarea schimbă distribuția presiunilor și poate favoriza calozități în zonele de sprijin — Corect: Presiunile anormale favorizează calozități și leziuni.\n\nNeuropatia autonomă poate reduce transpirația, favorizând pielea uscată și fisurile — Corect: Reducerea sudorației este atribuită neuropatiei autonome.\n\nBolta înaltă și degetele în gheară sunt consecințe ale afectării senzitive izolate, cu inervația mușchilor mici păstrată — Incorect: Deformarea descrisă implică afectare motorie și atrofia mușchilor mici, nu doar pierdere senzitivă.\n\nDenervarea autonomă asociază reducerea transpirației cu răcirea piciorului prin creșterea tonusului vasoconstrictor — Incorect: Sudorația redusă este corectă; pierderea tonusului simpatic poate produce vasodilatație și un picior cald.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 732, 733, Polineuropatia simetrică distală; Piciorul diabetic (pagini PDF: 131, 132).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    732,
    733
   ],
   "pdfPages": [
    131,
    132
   ],
   "section": "Polineuropatia simetrică distală; Piciorul diabetic"
  },
  "learningObjective": "Diferențierea contribuțiilor motorii, senzitive și autonome la leziunile piciorului.",
  "optionRationales": [
   "Acesta este mecanismul deformării descris.",
   "Presiunile anormale favorizează calozități și leziuni.",
   "Reducerea sudorației este atribuită neuropatiei autonome.",
   "Deformarea descrisă implică afectare motorie și atrofia mușchilor mici, nu doar pierdere senzitivă.",
   "Sudorația redusă este corectă; pierderea tonusului simpatic poate produce vasodilatație și un picior cald."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Opțiunile cer asocierea fiecărei leziuni cu componenta neurologică și separarea mecanismelor de presiune de ischemie."
  },
  "textbookExpressions": [
   "atrofie musculară interosoasă",
   "distribuție anormală a presiunii"
  ]
 },
 {
  "id": "diabet-adv-040",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Despre neuroartropatia Charcot sunt corecte afirmațiile:",
  "options": [
   "Poate apărea într-un picior bine perfuzat, în context de neuropatie severă",
   "Prezentarea acută cu picior fierbinte și edemațiat poate mima celulita, guta sau tromboza venoasă profundă",
   "Pulsul periferic prezent orientează împotriva neuroartropatiei și către o cauză inflamatorie fără leziuni osoase",
   "Durerea este prezentă la majoritatea pacienților în faza acută a neuroartropatiei Charcot",
   "Dispariția edemului permite întreruperea imobilizării chiar dacă temperatura piciorului rămâne crescută"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Poate apărea într-un picior bine perfuzat, în context de neuropatie severă — Corect: Perfuzia păstrată este parte a descrierii acestei complicații.\n\nPrezentarea acută cu picior fierbinte și edemațiat poate mima celulita, guta sau tromboza venoasă profundă — Corect: Aceste diagnostice sunt menționate ca mimice ale fazei acute.\n\nPulsul periferic prezent orientează împotriva neuroartropatiei și către o cauză inflamatorie fără leziuni osoase — Incorect: Perfuzia bună este compatibilă cu Charcot.\n\nDurerea este prezentă la majoritatea pacienților în faza acută a neuroartropatiei Charcot — Incorect: Bibliografia descrie durere la aproximativ o treime, nu la majoritatea pacienților.\n\nDispariția edemului permite întreruperea imobilizării chiar dacă temperatura piciorului rămâne crescută — Incorect: Imobilizarea se continuă până la ameliorarea completă atât a edemului, cât și a temperaturii crescute, conform p. 734.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 733, 734, Neuroartropatia Charcot (pagini PDF: 132, 133).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    733,
    734
   ],
   "pdfPages": [
    132,
    133
   ],
   "section": "Neuroartropatia Charcot"
  },
  "learningObjective": "Diferențierea bolii neuropate cu perfuzie păstrată de mimice și recunoașterea criteriilor de imobilizare.",
  "optionRationales": [
   "Perfuzia păstrată este parte a descrierii acestei complicații.",
   "Aceste diagnostice sunt menționate ca mimice ale fazei acute.",
   "Perfuzia bună este compatibilă cu Charcot.",
   "Bibliografia descrie durere la aproximativ o treime, nu la majoritatea pacienților.",
   "Imobilizarea se continuă până la ameliorarea completă atât a edemului, cât și a temperaturii crescute, conform p. 734."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Semnele vasculare păstrate și durerea variabilă nu permit excludere rapidă; trebuie diferențiate și criteriile clinice de încheiere a imobilizării."
  },
  "textbookExpressions": [
   "picior bine perfuzat",
   "consolidare radiologică"
  ]
 },
 {
  "id": "diabet-adv-042",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În clasificarea formelor clinice de neuropatie diabetică, sunt corecte asocierile:",
  "options": [
   "Polineuropatie simetrică distală — dezechilibru în întuneric prin alterarea propriocepției",
   "Neuropatie autonomă — vezică nedureroasă destinsă, cu golire incompletă și stază",
   "Neuropatie autonomă — ejaculare retrogradă și hiperhidroză gustatorie",
   "Amiotrofie — afectare senzitivă distală simetrică fără atrofie proximală, cu reflexe rotuliene păstrate",
   "Polineuropatie simetrică distală tipică — afectare precoce predominantă a mâinilor înaintea picioarelor"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Polineuropatie simetrică distală — dezechilibru în întuneric prin alterarea propriocepției — Corect: Pierderea reperelor vizuale accentuează dezechilibrul proprioceptiv.\n\nNeuropatie autonomă — vezică nedureroasă destinsă, cu golire incompletă și stază — Corect: Atonia și staza vezicală sunt manifestări autonome.\n\nNeuropatie autonomă — ejaculare retrogradă și hiperhidroză gustatorie — Corect: Ejacularea retrogradă este descrisă la p. 733, iar hiperhidroza gustatorie în figura 23.17.\n\nAmiotrofie — afectare senzitivă distală simetrică fără atrofie proximală, cu reflexe rotuliene păstrate — Incorect: Amiotrofia implică atrofie proximală și reflexe rotuliene diminuate sau absente.\n\nPolineuropatie simetrică distală tipică — afectare precoce predominantă a mâinilor înaintea picioarelor — Incorect: Implicarea precoce a mâinilor este neobișnuită și justifică investigarea altor cauze.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 732, 731, 733, Polineuropatia simetrică distală; Neuropatia autonomă (pagini PDF: 131, 130, 132).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    732,
    731,
    733
   ],
   "pdfPages": [
    131,
    130,
    132
   ],
   "section": "Polineuropatia simetrică distală; Neuropatia autonomă"
  },
  "learningObjective": "Încadrarea semnelor somatice și autonome și recunoașterea distribuțiilor care cer reconsiderarea formei clinice.",
  "optionRationales": [
   "Pierderea reperelor vizuale accentuează dezechilibrul proprioceptiv.",
   "Atonia și staza vezicală sunt manifestări autonome.",
   "Ejacularea retrogradă este descrisă la p. 733, iar hiperhidroza gustatorie în figura 23.17.",
   "Amiotrofia implică atrofie proximală și reflexe rotuliene diminuate sau absente.",
   "Implicarea precoce a mâinilor este neobișnuită și justifică investigarea altor cauze."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Combină topografia somatică cu manifestări autonome în organe diferite; trebuie recunoscute două distribuții neurologice apropiate, dar nepotrivite."
  },
  "textbookExpressions": [
   "propriocepție alterată",
   "vezică atonă",
   "hiperhidroză gustatorie"
  ]
 },
 {
  "id": "diabet-adv-043",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Impactul epidemiologic al diabetului zaharat, conform datelor din text:",
  "options": [
   "Federația Internațională de Diabet estima 425 de milioane de persoane afectate în 2017, cu proiecție la 693 de milioane până în 2045",
   "Diabetul a fost responsabil pentru circa 4 milioane de decese în 2017, depășind HIV/SIDA, tuberculoză și malarie luate împreună",
   "Boala coronariană reprezintă două treimi din decesele persoanelor cu diabet de 65 de ani sau mai mult",
   "Diagnosticul la 55 de ani prelungește speranța de viață cu 5–6 ani față de populația generală",
   "Diabetul de tip 2 diagnosticat după 80 de ani scurtează speranța de viață în aceeași măsură ca diagnosticul la 55 de ani"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Federația Internațională de Diabet estima 425 de milioane de persoane afectate în 2017, cu proiecție la 693 de milioane până în 2045 — Corect: Cifrele 425 și 693 de milioane sunt cele ale Federației Internaționale de Diabet.\n\nDiabetul a fost responsabil pentru circa 4 milioane de decese în 2017, depășind HIV/SIDA, tuberculoză și malarie luate împreună — Corect: Cele 4 milioane de decese (10,7%) depășesc suma HIV, TBC și malarie.\n\nBoala coronariană reprezintă două treimi din decesele persoanelor cu diabet de 65 de ani sau mai mult — Corect: Ponderea de două treimi a bolii coronariene la ≥65 de ani este explicită.\n\nDiagnosticul la 55 de ani prelungește speranța de viață cu 5–6 ani față de populația generală — Incorect: Diagnosticul la 55 de ani reduce speranța de viață cu 5 ani (bărbați) și 6 ani (femei), nu o prelungește.\n\nDiabetul de tip 2 diagnosticat după 80 de ani scurtează speranța de viață în aceeași măsură ca diagnosticul la 55 de ani — Incorect: Textul precizează că diagnosticul după 80 de ani are un efect limitat asupra speranței de viață.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 702, Introducere — Povara epidemiologică (pagini PDF: 101).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    702
   ],
   "pdfPages": [
    101
   ],
   "section": "Introducere — Povara epidemiologică"
  },
  "learningObjective": "Cuantificarea prevalenței globale, a mortalității și a contribuției bolii coronariene, distinct de efectul vârstei la diagnostic.",
  "optionRationales": [
   "Cifrele 425 și 693 de milioane sunt cele ale Federației Internaționale de Diabet.",
   "Cele 4 milioane de decese (10,7%) depășesc suma HIV, TBC și malarie.",
   "Ponderea de două treimi a bolii coronariene la ≥65 de ani este explicită.",
   "Diagnosticul la 55 de ani reduce speranța de viață cu 5 ani (bărbați) și 6 ani (femei), nu o prelungește.",
   "Textul precizează că diagnosticul după 80 de ani are un efect limitat asupra speranței de viață."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sensul impactului asupra speranței de viață la 55 versus 80 de ani, două cifre alăturate în același paragraf."
  },
  "textbookExpressions": [
   "425 de milioane",
   "4 milioane de decese"
  ]
 },
 {
  "id": "diabet-adv-044",
  "topicId": "diabet",
  "type": "CS",
  "stem": "La persoanele sănătoase, glicemia se situează rar în afara intervalului:",
  "options": [
   "2,0–4,0 mmol/L",
   "3,5–8,0 mmol/L",
   "7,0–11,1 mmol/L",
   "10–15 mmol/L",
   "Sub 2 mmol/L în post și peste 15 mmol/L după masă"
  ],
  "correct": [
   1
  ],
  "explanation": "2,0–4,0 mmol/L — Incorect: Intervalul este prea jos față de homeostazia descrisă.\n\n3,5–8,0 mmol/L — Corect: Textul citează limitele 3,5–8,0 mmol/L.\n\n7,0–11,1 mmol/L — Incorect: 7,0 și 11,1 mmol/L sunt praguri de diagnostic, nu intervalul fiziologic.\n\n10–15 mmol/L — Incorect: 10–15 mmol/L este deja hiperglicemic.\n\nSub 2 mmol/L în post și peste 15 mmol/L după masă — Incorect: Creierul depinde de glucoză; textul descrie un control strâns, nu oscilații atât de ample.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 702, Metabolismul glucozei (pagini PDF: 101).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    702
   ],
   "pdfPages": [
    101
   ],
   "section": "Metabolismul glucozei"
  },
  "learningObjective": "Reținerea intervalului fiziologic 3,5–8,0 mmol/L, distinct de pragurile de diagnostic.",
  "optionRationales": [
   "Intervalul este prea jos față de homeostazia descrisă.",
   "Textul citează limitele 3,5–8,0 mmol/L.",
   "7,0 și 11,1 mmol/L sunt praguri de diagnostic, nu intervalul fiziologic.",
   "10–15 mmol/L este deja hiperglicemic.",
   "Creierul depinde de glucoză; textul descrie un control strâns, nu oscilații atât de ample."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt praguri de diagnostic sau valori patologic extreme din același capitol."
  },
  "textbookExpressions": [
   "3,5-8,0 mmol/L",
   "strict controlate"
  ]
 },
 {
  "id": "diabet-adv-045",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În organizarea îngrijirii diabetului sunt adevărate:",
  "options": [
   "Aproximativ 15% din toți pacienții internați au diabet",
   "Diabetul afectează circa 10% din populația adultă din majoritatea țărilor",
   "Majoritatea persoanelor cu diabet sunt internate permanent pentru pompă de insulină, nu văzute în ambulator",
   "Doar pacienții internați pentru cetoacidoză au diabet, ceilalți internați fiind euglicemici",
   "Diabetologii consultanți se formează doar în chirurgie bariatrică, fără medicină internă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Aproximativ 15% din toți pacienții internați au diabet — Corect: Ponderea de 15% dintre internați este citată explicit.\n\nDiabetul afectează circa 10% din populația adultă din majoritatea țărilor — Corect: Prevalența de circa 10% la adulți deschide capitolul.\n\nMajoritatea persoanelor cu diabet sunt internate permanent pentru pompă de insulină, nu văzute în ambulator — Incorect: Textul plasează majoritatea îngrijirii în ambulator, nu internarea permanentă.\n\nDoar pacienții internați pentru cetoacidoză au diabet, ceilalți internați fiind euglicemici — Incorect: Mulți sunt internați din alte motive, diabetul putând complica evoluția.\n\nDiabetologii consultanți se formează doar în chirurgie bariatrică, fără medicină internă — Incorect: Consultanții sunt instruiți în diabet, endocrinologie și medicină internă generală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 699, Introducere — Abilități clinice (pagini PDF: 98).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    699
   ],
   "pdfPages": [
    98
   ],
   "section": "Introducere — Abilități clinice"
  },
  "learningObjective": "Recunoașterea ponderii de 10% în populație și de 15% printre internați.",
  "optionRationales": [
   "Ponderea de 15% dintre internați este citată explicit.",
   "Prevalența de circa 10% la adulți deschide capitolul.",
   "Textul plasează majoritatea îngrijirii în ambulator, nu internarea permanentă.",
   "Mulți sunt internați din alte motive, diabetul putând complica evoluția.",
   "Consultanții sunt instruiți în diabet, endocrinologie și medicină internă generală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde diabetul internat doar la CAD și distorsionează formarea specialistului, contrar primelor paragrafe."
  },
  "textbookExpressions": [
   "15% din",
   "10% din populaţia adultă"
  ]
 },
 {
  "id": "diabet-adv-046",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Evaluările anuale recomandate persoanelor cu diabet includ:",
  "options": [
   "Screening oftalmologic, ideal prin fotografie retiniană, și acuitate vizuală",
   "Raport albumină/creatinină urinară, uree, electroliți și RFGe",
   "Examen de picior pentru afectare neuropată sau vasculară",
   "Înlocuirea profilului lipidic cu un singur TSH, suficient pentru riscul cardiovascular",
   "Omiterea HbA1c dacă pacientul se simte bine clinic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Screening oftalmologic, ideal prin fotografie retiniană, și acuitate vizuală — Corect: Fotografia retiniană și acuitatea vizuală figurează în cadran.\n\nRaport albumină/creatinină urinară, uree, electroliți și RFGe — Corect: RAC, ureea/electroliții și RFGe sunt listate.\n\nExamen de picior pentru afectare neuropată sau vasculară — Corect: Examenul de picior este o rubrică distinctă a evaluării anuale.\n\nÎnlocuirea profilului lipidic cu un singur TSH, suficient pentru riscul cardiovascular — Incorect: Profilul lipidic și calculul de risc (ex. QRISK) rămân parte a evaluării cardiovasculare; TSH-ul nu le înlocuiește.\n\nOmiterea HbA1c dacă pacientul se simte bine clinic — Incorect: HbA1c este listată la controlul glicemic anual.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 700, Cadranul 23.2 — Evaluări anuale (pagini PDF: 99).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    700
   ],
   "pdfPages": [
    99
   ],
   "section": "Cadranul 23.2 — Evaluări anuale"
  },
  "learningObjective": "Reținerea triadei ochi–rinichi–picior din screeningul anual, alături de markeri metabolici.",
  "optionRationales": [
   "Fotografia retiniană și acuitatea vizuală figurează în cadran.",
   "RAC, ureea/electroliții și RFGe sunt listate.",
   "Examenul de picior este o rubrică distinctă a evaluării anuale.",
   "Profilul lipidic și calculul de risc (ex. QRISK) rămân parte a evaluării cardiovasculare; TSH-ul nu le înlocuiește.",
   "HbA1c este listată la controlul glicemic anual."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii scot din cadran tocmai markerii de risc cardiovascular și HbA1c, păstrând restul listei plauzibil."
  },
  "textbookExpressions": [
   "fotografie retiniană",
   "Raport albumină/creatinină urinară"
  ]
 },
 {
  "id": "diabet-adv-047",
  "topicId": "diabet",
  "type": "CM",
  "stem": "La examenul obiectiv, semnele care orientează spre insulinorezistență sau autoimunitate asociată sunt:",
  "options": [
   "Acanthosis nigricans axilar (pigmentare) în context de insulinorezistență",
   "Vitiligo, ca boală autoimună întâlnită uneori în diabetul de tip 1",
   "Lipohipertrofia la locurile de injectare a insulinei, prin suprautilizarea aceluiași sit",
   "Acanthosis nigricans este patognomonică pentru deficit absolut de insulină de tip 1",
   "Vitiligo exclude diabetul de tip 1, fiind specific tipului 2"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Acanthosis nigricans axilar (pigmentare) în context de insulinorezistență — Corect: Figura și legenda leagă pigmentarea axilară de insulinorezistență.\n\nVitiligo, ca boală autoimună întâlnită uneori în diabetul de tip 1 — Corect: Vitiligo este citat ca asociere autoimună a tipului 1.\n\nLipohipertrofia la locurile de injectare a insulinei, prin suprautilizarea aceluiași sit — Corect: Lipohipertrofia este semnul local de injectare descris.\n\nAcanthosis nigricans este patognomonică pentru deficit absolut de insulină de tip 1 — Incorect: Acanthosis orientează spre rezistență, nu spre deficit absolut de tip 1.\n\nVitiligo exclude diabetul de tip 1, fiind specific tipului 2 — Incorect: Vitiligo se asociază tipului 1, nu îl exclude.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 701, 700, Abilități clinice — Examenul obiectiv (pagini PDF: 100, 99).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    701,
    700
   ],
   "pdfPages": [
    100,
    99
   ],
   "section": "Abilități clinice — Examenul obiectiv"
  },
  "learningObjective": "Separarea acanthosis (insulinorezistență) de vitiligo (autoimunitate tip 1) și de lipohipertrofie.",
  "optionRationales": [
   "Figura și legenda leagă pigmentarea axilară de insulinorezistență.",
   "Vitiligo este citat ca asociere autoimună a tipului 1.",
   "Lipohipertrofia este semnul local de injectare descris.",
   "Acanthosis orientează spre rezistență, nu spre deficit absolut de tip 1.",
   "Vitiligo se asociază tipului 1, nu îl exclude."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ținta clinică a acanthosis (rezistență versus deficit absolut) și a vitiligoului între tipurile de diabet."
  },
  "textbookExpressions": [
   "acantosis nigricans",
   "Vitiligo"
  ]
 },
 {
  "id": "diabet-adv-048",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Un bărbat de 22 de ani descrie poliurie, polidipsie și scădere ponderală de 4 săptămâni. Debutul acut al diabetului:",
  "options": [
   "Durează adesea 2–6 săptămâni la copii și adulți tineri",
   "Poliuria reflectă diureza osmotică peste pragul renal al glucozei",
   "Scăderea ponderală rezultă din depleție lichidiană și catabolism adipos și muscular",
   "Cetonuria lipsește sistematic la tineri, fiind rezervată vârstnicilor cu tip 2",
   "Simptomele de 2–6 săptămâni exclud cetoacidoza ulterioară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Durează adesea 2–6 săptămâni la copii și adulți tineri — Corect: Intervalul 2–6 săptămâni este cel al debutului acut la tineri.\n\nPoliuria reflectă diureza osmotică peste pragul renal al glucozei — Corect: Mecanismul osmotic al poliuriei este explicit.\n\nScăderea ponderală rezultă din depleție lichidiană și catabolism adipos și muscular — Corect: Cele două componente ale scăderii ponderale sunt descrise.\n\nCetonuria lipsește sistematic la tineri, fiind rezervată vârstnicilor cu tip 2 — Incorect: Cetonuria este adesea prezentă la tineri și poate progresa spre cetoacidoză.\n\nSimptomele de 2–6 săptămâni exclud cetoacidoza ulterioară — Incorect: Nerecunoașterea simptomelor precoce permite progresia spre cetoacidoză.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 710, Abordarea clinică — Debutul acut (pagini PDF: 109).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    710
   ],
   "pdfPages": [
    109
   ],
   "section": "Abordarea clinică — Debutul acut"
  },
  "learningObjective": "Recunoașterea triadei clasice a debutului acut și a ferestrei de 2–6 săptămâni.",
  "optionRationales": [
   "Intervalul 2–6 săptămâni este cel al debutului acut la tineri.",
   "Mecanismul osmotic al poliuriei este explicit.",
   "Cele două componente ale scăderii ponderale sunt descrise.",
   "Cetonuria este adesea prezentă la tineri și poate progresa spre cetoacidoză.",
   "Nerecunoașterea simptomelor precoce permite progresia spre cetoacidoză."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă cetonuria tinerilor — exact semnul care anunță riscul de cetoacidoză din același paragraf."
  },
  "textbookExpressions": [
   "triadei simptomelor clasice",
   "diurezei osmotice"
  ]
 },
 {
  "id": "diabet-adv-049",
  "topicId": "diabet",
  "type": "CS",
  "stem": "În prezența simptomelor clasice, diagnosticul de diabet se poate pune pe o singură valoare de:",
  "options": [
   "Glicemie bazală 6,4 mmol/L",
   "Glicemie în orice moment ≥11,1 mmol/L (200 mg/dl) sau bazală ≥7,0 mmol/L, sau HbA1c ≥48 mmol/mol (6,5%)",
   "Glicozurie izolată, fără glicemie",
   "HbA1c 42 mmol/mol (6,0%)",
   "O singură glicemie de 5,5 mmol/L a jeun"
  ],
  "correct": [
   1
  ],
  "explanation": "Glicemie bazală 6,4 mmol/L — Incorect: 6,4 mmol/L a jeun este în zona GBM, sub pragul de diabet.\n\nGlicemie în orice moment ≥11,1 mmol/L (200 mg/dl) sau bazală ≥7,0 mmol/L, sau HbA1c ≥48 mmol/mol (6,5%) — Corect: Acestea sunt criteriile din cadran; la simptomatici este suficient un test.\n\nGlicozurie izolată, fără glicemie — Incorect: Glicozuria nu poate fi folosită pentru diagnostic.\n\nHbA1c 42 mmol/mol (6,0%) — Incorect: 42 mmol/mol este sub pragul de 48 mmol/mol.\n\nO singură glicemie de 5,5 mmol/L a jeun — Incorect: 5,5 mmol/L a jeun este sub pragul de diabet.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 710, Cadranul 23.7 — Criterii de diagnostic (pagini PDF: 109).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    710
   ],
   "pdfPages": [
    109
   ],
   "section": "Cadranul 23.7 — Criterii de diagnostic"
  },
  "learningObjective": "Aplicarea pragurilor OMS de diagnostic și a regulii „un test la simptomatic”.",
  "optionRationales": [
   "6,4 mmol/L a jeun este în zona GBM, sub pragul de diabet.",
   "Acestea sunt criteriile din cadran; la simptomatici este suficient un test.",
   "Glicozuria nu poate fi folosită pentru diagnostic.",
   "42 mmol/mol este sub pragul de 48 mmol/mol.",
   "5,5 mmol/L a jeun este sub pragul de diabet."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt praguri reale de pre-diabet sau de glicozurie, ușor de confundat cu diagnosticul de diabet."
  },
  "textbookExpressions": [
   "11,1 mmol/l",
   "48 mmol/mol"
  ]
 },
 {
  "id": "diabet-adv-050",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Categoriile glicemice intermediare și glicozuria:",
  "options": [
   "Scăderea toleranței la glucoză se diagnostichează doar cu testul de toleranță orală (valoarea la 2 ore)",
   "Glicozuria nu poate diagnostica diabetul, dar impune investigații; poate apărea prin prag renal modificat la vârstnici",
   "Glicozuria renală familială afectează SGLT2 și se întâlnește la circa 1:400 din populație",
   "Persoanele cu STG dezvoltă complicații microvasculare identice diabetului, dar fără risc cardiovascular",
   "GBM și STG sunt entități clinice autonome, cu evoluție certă spre diabet la toți cei identificați"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Scăderea toleranței la glucoză se diagnostichează doar cu testul de toleranță orală (valoarea la 2 ore) — Corect: Textul precizează că STG se diagnostichează doar cu testul de toleranță.\n\nGlicozuria nu poate diagnostica diabetul, dar impune investigații; poate apărea prin prag renal modificat la vârstnici — Corect: Glicozuria cere investigații, fără a stabili diabetul.\n\nGlicozuria renală familială afectează SGLT2 și se întâlnește la circa 1:400 din populație — Corect: Frecvența 1:400 și implicarea SGLT2 sunt citate.\n\nPersoanele cu STG dezvoltă complicații microvasculare identice diabetului, dar fără risc cardiovascular — Incorect: STG are risc cardiovascular similar diabetului, dar nu dezvoltă complicații microvasculare.\n\nGBM și STG sunt entități clinice autonome, cu evoluție certă spre diabet la toți cei identificați — Incorect: Termenul „pre-diabet” nu este strict exact: majoritatea nu vor dezvolta diabet.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 711, 710, Diagnostic — GBM, STG, glicozuria (pagini PDF: 110, 109).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    711,
    710
   ],
   "pdfPages": [
    110,
    109
   ],
   "section": "Diagnostic — GBM, STG, glicozuria"
  },
  "learningObjective": "Separarea STG (doar TTGO) de glicozuria non-diagnostică și de forma familială SGLT2.",
  "optionRationales": [
   "Textul precizează că STG se diagnostichează doar cu testul de toleranță.",
   "Glicozuria cere investigații, fără a stabili diabetul.",
   "Frecvența 1:400 și implicarea SGLT2 sunt citate.",
   "STG are risc cardiovascular similar diabetului, dar nu dezvoltă complicații microvasculare.",
   "Termenul „pre-diabet” nu este strict exact: majoritatea nu vor dezvolta diabet."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează profilul de risc al STG (macro versus micro) și transformă categoriile intermediare în entități cu progresie certă."
  },
  "textbookExpressions": [
   "1:400 din populaţie",
   "glicozuria renală familială"
  ]
 },
 {
  "id": "diabet-adv-051",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Prevenția diabetului de tip 2:",
  "options": [
   "Intervențiile asupra stilului de viață (greutate, grăsimi saturate, fibre, 30 de minute de activitate pe zi) pot preveni sau întârzia tipul 2 la persoane cu STG",
   "Metforminul și orlistatul reduc incidența, dar sunt mai puțin eficiente decât schimbarea stilului de viață",
   "Chirurgia bariatrică poate normaliza glicemia; efectul asupra glucozei precede scăderea în greutate",
   "Farmacoterapia este superioară stilului de viață și se inițiază la toți cei cu STG înaintea oricărei diete",
   "Efectul metabolic al chirurgiei bariatrice apare abia după pierderea completă în greutate, fără contribuție hormonală intestinală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Intervențiile asupra stilului de viață (greutate, grăsimi saturate, fibre, 30 de minute de activitate pe zi) pot preveni sau întârzia tipul 2 la persoane cu STG — Corect: Pachetul de stil de viață, inclusiv 30 de minute pe zi, este descris ca eficient.\n\nMetforminul și orlistatul reduc incidența, dar sunt mai puțin eficiente decât schimbarea stilului de viață — Corect: Rezervarea medicamentelor celor care nu își pot schimba stilul de viață este explicită.\n\nChirurgia bariatrică poate normaliza glicemia; efectul asupra glucozei precede scăderea în greutate — Corect: Precedența efectului glicemic față de scăderea ponderală, posibil mediată de hormoni intestinali, este subliniată.\n\nFarmacoterapia este superioară stilului de viață și se inițiază la toți cei cu STG înaintea oricărei diete — Incorect: Textul plasează stilul de viață deasupra medicamentelor.\n\nEfectul metabolic al chirurgiei bariatrice apare abia după pierderea completă în greutate, fără contribuție hormonală intestinală — Incorect: Efectul glicemic precede scăderea ponderală, nu o urmează.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 711, Prevenția diabetului de tip 2 (pagini PDF: 110).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    711
   ],
   "pdfPages": [
    110
   ],
   "section": "Prevenția diabetului de tip 2"
  },
  "learningObjective": "Ierarhizarea stil de viață > farmacoterapie și recunoașterea efectului metabolic precoce al chirurgiei bariatrice.",
  "optionRationales": [
   "Pachetul de stil de viață, inclusiv 30 de minute pe zi, este descris ca eficient.",
   "Rezervarea medicamentelor celor care nu își pot schimba stilul de viață este explicită.",
   "Precedența efectului glicemic față de scăderea ponderală, posibil mediată de hormoni intestinali, este subliniată.",
   "Textul plasează stilul de viață deasupra medicamentelor.",
   "Efectul glicemic precede scăderea ponderală, nu o urmează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ierarhia stil de viață versus medicament și cronologia efectului bariatric asupra glicemiei."
  },
  "textbookExpressions": [
   "30 de minute pe zi",
   "precede scăderea în greu"
  ]
 },
 {
  "id": "diabet-adv-052",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Studiile DCCT și UKPDS arată că:",
  "options": [
   "În DCCT, terapia intensivă a redus riscul de progresie primară spre retinopatie cu 60%, nefropatie cu 30% și neuropatie cu 20%",
   "Beneficiile DCCT au persistat după studiu, deși controlul ulterior a fost similar între grupuri",
   "UKPDS a redus evenimentele microvasculare cu 25%; controlul tensiunii arteriale este important, dar fără „efect de moștenire”",
   "UKPDS a arătat că tensiunea arterială poate fi relaxată după 1 an, beneficiul persisting autonom",
   "DCCT a normalizat complet glicemia, fără nicio diferență față de nediabetici"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În DCCT, terapia intensivă a redus riscul de progresie primară spre retinopatie cu 60%, nefropatie cu 30% și neuropatie cu 20% — Corect: Cele trei procente 60/30/20 sunt cifrele DCCT de prevenție primară.\n\nBeneficiile DCCT au persistat după studiu, deși controlul ulterior a fost similar între grupuri — Corect: Persistența beneficiului post-studiu este descrisă.\n\nUKPDS a redus evenimentele microvasculare cu 25%; controlul tensiunii arteriale este important, dar fără „efect de moștenire” — Corect: Reducerea de 25% și lipsa efectului de moștenire al tensiunii sunt explicite.\n\nUKPDS a arătat că tensiunea arterială poate fi relaxată după 1 an, beneficiul persisting autonom — Incorect: Controlul tensional trebuie menținut pe termen lung, fără moștenire.\n\nDCCT a normalizat complet glicemia, fără nicio diferență față de nediabetici — Incorect: Chiar intensiv, glicemiile au rămas cu 40% peste valorile nediabeticilor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 711, 712, Tratament — Obiective terapeutice; DCCT; UKPDS (pagini PDF: 110, 111).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    711,
    712
   ],
   "pdfPages": [
    110,
    111
   ],
   "section": "Tratament — Obiective terapeutice; DCCT; UKPDS"
  },
  "learningObjective": "Contrastul dintre moștenirea glicemică (DCCT/UKPDS) și absența moștenirii pentru tensiunea arterială.",
  "optionRationales": [
   "Cele trei procente 60/30/20 sunt cifrele DCCT de prevenție primară.",
   "Persistența beneficiului post-studiu este descrisă.",
   "Reducerea de 25% și lipsa efectului de moștenire al tensiunii sunt explicite.",
   "Controlul tensional trebuie menținut pe termen lung, fără moștenire.",
   "Chiar intensiv, glicemiile au rămas cu 40% peste valorile nediabeticilor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie tensiunii arteriale un efect de moștenire pe care textul îl rezervă glicemiei."
  },
  "textbookExpressions": [
   "60%",
   "UK Prospective Diabetes Study"
  ]
 },
 {
  "id": "diabet-adv-053",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Individualizarea țintelor glicemice:",
  "options": [
   "Cele mai multe ghiduri susțin ținte HbA1c între 48 și 58 mmol/mol (6,5–7,5%)",
   "În ACCORD, mai multe persoane au decedat în brațul tratat intensiv decât în cel standard",
   "Ținte mai puțin stricte se justifică la istoric de hipoglicemie severă, durată lungă de boală sau comorbidități importante",
   "ACCORD a demonstrat că normoglicemia reduce mortalitatea cardiovasculară sub nivelul nediabeticilor",
   "Toate persoanele vârstnice trebuie aduse sub 48 mmol/mol, indiferent de prognostic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cele mai multe ghiduri susțin ținte HbA1c între 48 și 58 mmol/mol (6,5–7,5%) — Corect: Intervalul 48–58 mmol/mol este cel susținut de majoritatea ghidurilor.\n\nÎn ACCORD, mai multe persoane au decedat în brațul tratat intensiv decât în cel standard — Corect: Excesul de decese din brațul intensiv ACCORD este citat.\n\nȚinte mai puțin stricte se justifică la istoric de hipoglicemie severă, durată lungă de boală sau comorbidități importante — Corect: Cadranul 23.9 listează hipoglicemia severă, durata lungă și comorbiditățile pentru un control mai puțin strict.\n\nACCORD a demonstrat că normoglicemia reduce mortalitatea cardiovasculară sub nivelul nediabeticilor — Incorect: ACCORD nu a îmbunătățit mortalitatea cardiovasculară; brațul intensiv a avut mai multe decese.\n\nToate persoanele vârstnice trebuie aduse sub 48 mmol/mol, indiferent de prognostic — Incorect: La vârstnici și prognostic limitat, țintele trebuie individualizate, nu forțate sub 48 mmol/mol.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 712, Cadranul 23.9 — Țintele glicemice (pagini PDF: 111).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    712
   ],
   "pdfPages": [
    111
   ],
   "section": "Cadranul 23.9 — Țintele glicemice"
  },
  "learningObjective": "Aplicarea intervalului 48–58 mmol/mol, a semnalului de mortalitate din ACCORD și a criteriilor pentru ținte mai puțin stricte.",
  "optionRationales": [
   "Intervalul 48–58 mmol/mol este cel susținut de majoritatea ghidurilor.",
   "Excesul de decese din brațul intensiv ACCORD este citat.",
   "Cadranul 23.9 listează hipoglicemia severă, durata lungă și comorbiditățile pentru un control mai puțin strict.",
   "ACCORD nu a îmbunătățit mortalitatea cardiovasculară; brațul intensiv a avut mai multe decese.",
   "La vârstnici și prognostic limitat, țintele trebuie individualizate, nu forțate sub 48 mmol/mol."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reunește ținta 48–58 cu semnalul ACCORD; distractorii extind intensificarea la vârstnici și inversează mortalitatea."
  },
  "textbookExpressions": [
   "48 mmol/mol",
   "ACCORD"
  ]
 },
 {
  "id": "diabet-adv-054",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Dieta și remisia diabetului de tip 2:",
  "options": [
   "Programele structurate de tip DAFNE îmbunătățesc cunoștințele, calitatea vieții, controlul glicemic și reduc mortalitatea",
   "Persoanele supraponderale cu tip 2 ar trebui sprijinite să piardă cel puțin 5% din greutate",
   "Pierderea a 10–15 kg prin stil de viață, farmacologie sau chirurgie poate induce remisie",
   "O singură dietă identică este eficientă la toate persoanele cu diabet, fără individualizare culturală",
   "Numărarea carbohidraților este inutilă la tipul 1 tratat intensiv"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Programele structurate de tip DAFNE îmbunătățesc cunoștințele, calitatea vieții, controlul glicemic și reduc mortalitatea — Corect: DAFNE este dat ca standard de aur al educației structurate.\n\nPersoanele supraponderale cu tip 2 ar trebui sprijinite să piardă cel puțin 5% din greutate — Corect: Pragul de cel puțin 5% apare în ghidul nutrițional.\n\nPierderea a 10–15 kg prin stil de viață, farmacologie sau chirurgie poate induce remisie — Corect: Intervalul 10–15 kg este cel legat de remisie.\n\nO singură dietă identică este eficientă la toate persoanele cu diabet, fără individualizare culturală — Incorect: Textul cere abordare individualizată; nicio dietă unică nu este eficientă la toți.\n\nNumărarea carbohidraților este inutilă la tipul 1 tratat intensiv — Incorect: La tipul 1, adaptarea dozei de insulină la carbohidrați este esențială.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 712, 713, Educație; Dietă; Scăderea în greutate (pagini PDF: 111, 112).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    712,
    713
   ],
   "pdfPages": [
    111,
    112
   ],
   "section": "Educație; Dietă; Scăderea în greutate"
  },
  "learningObjective": "Articularea educației DAFNE cu pragurile ponderale de 5% și 10–15 kg pentru remisie.",
  "optionRationales": [
   "DAFNE este dat ca standard de aur al educației structurate.",
   "Pragul de cel puțin 5% apare în ghidul nutrițional.",
   "Intervalul 10–15 kg este cel legat de remisie.",
   "Textul cere abordare individualizată; nicio dietă unică nu este eficientă la toți.",
   "La tipul 1, adaptarea dozei de insulină la carbohidrați este esențială."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă individualizarea dietei și numărarea carbohidraților, două piese centrale ale aceluiași subcapitol."
  },
  "textbookExpressions": [
   "DAFNE",
   "10-15 kg"
  ]
 },
 {
  "id": "diabet-adv-055",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Chirurgia bariatrică la diabetul de tip 2:",
  "options": [
   "NICE recomandă luarea în considerare la IMC >40 kg/m² sau la IMC >35 kg/m² cu comorbidități precum diabetul",
   "Pierderea medie în greutate este de circa 30%, cu remisia diabetului la până la 70% din pacienți, în funcție de durată",
   "Mortalitatea perioperatorie este scăzută (1 din 1.000), dar există consecințe nutriționale, osoase și risc de suicid",
   "Intervenția se rezervă IMC <25 kg/m², unde remisia este certă la toți",
   "Bypass-ul gastric este interzis, singura tehnică fiind inelul gastric ajustabil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "NICE recomandă luarea în considerare la IMC >40 kg/m² sau la IMC >35 kg/m² cu comorbidități precum diabetul — Corect: Cele două praguri IMC sunt cele NICE.\n\nPierderea medie în greutate este de circa 30%, cu remisia diabetului la până la 70% din pacienți, în funcție de durată — Corect: Cifrele 30% și până la 70% sunt explicitate.\n\nMortalitatea perioperatorie este scăzută (1 din 1.000), dar există consecințe nutriționale, osoase și risc de suicid — Corect: Mortalitatea 1 din 1.000 și consecințele pe termen lung sunt alăturate.\n\nIntervenția se rezervă IMC <25 kg/m², unde remisia este certă la toți — Incorect: Pragurile sunt 35–40 kg/m², nu <25.\n\nBypass-ul gastric este interzis, singura tehnică fiind inelul gastric ajustabil — Incorect: Tehnicile citate sunt bypass-ul gastric și gastrectomia verticală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 713, Importanța scăderii în greutate — Chirurgia bariatrică (pagini PDF: 112).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    713
   ],
   "pdfPages": [
    112
   ],
   "section": "Importanța scăderii în greutate — Chirurgia bariatrică"
  },
  "learningObjective": "Reținerea pragurilor NICE de IMC, a ratelor de scădere/remisie și a mortalității 1/1000.",
  "optionRationales": [
   "Cele două praguri IMC sunt cele NICE.",
   "Cifrele 30% și până la 70% sunt explicitate.",
   "Mortalitatea 1 din 1.000 și consecințele pe termen lung sunt alăturate.",
   "Pragurile sunt 35–40 kg/m², nu <25.",
   "Tehnicile citate sunt bypass-ul gastric și gastrectomia verticală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută indicația sub IMC 25 și înlocuiește tehnicile reale cu inelul gastric, absent din paragraf."
  },
  "textbookExpressions": [
   "40 kg/m2",
   "1 din 1.000"
  ]
 },
 {
  "id": "diabet-adv-056",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Activitatea fizică la persoanele cu diabet:",
  "options": [
   "Se recomandă cel puțin 150 de minute de exerciții aerobice și de rezistență pe săptămână, distribuite pe cel puțin 3 zile",
   "La tipul 1, efortul poate reduce necesarul de insulină și poate fi urmat de hipoglicemie severă tardivă",
   "Înainte de efort trebuie identificate complicațiile macro- sau microvasculare, care pot fi exacerbate la neantrenați",
   "Efortul este interzis în tipul 1, deoarece crește invariabil glicemia post-efort",
   "Cele 150 de minute trebuie concentrate într-o singură zi, pentru a evita hipoglicemia"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se recomandă cel puțin 150 de minute de exerciții aerobice și de rezistență pe săptămână, distribuite pe cel puțin 3 zile — Corect: Doza de 150 de minute pe cel puțin 3 zile este explicită.\n\nLa tipul 1, efortul poate reduce necesarul de insulină și poate fi urmat de hipoglicemie severă tardivă — Corect: Reducerea necesarului de insulină și hipoglicemia ulterioară sunt descrise la tipul 1.\n\nÎnainte de efort trebuie identificate complicațiile macro- sau microvasculare, care pot fi exacerbate la neantrenați — Corect: Screeningul complicațiilor macro- și microvasculare înainte de efort este cerut.\n\nEfortul este interzis în tipul 1, deoarece crește invariabil glicemia post-efort — Incorect: Efortul nu este interzis în tipul 1; hipoglicemia, nu hiperglicemia invariabilă, este riscul descris.\n\nCele 150 de minute trebuie concentrate într-o singură zi, pentru a evita hipoglicemia — Incorect: Cele 150 de minute se distribuie pe cel puțin 3 zile, nu se concentrează într-o singură zi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 713, Activitatea fizică (pagini PDF: 112).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    713
   ],
   "pdfPages": [
    112
   ],
   "section": "Activitatea fizică"
  },
  "learningObjective": "Aplicarea dozei de 150 de minute/3 zile, a riscului de hipoglicemie tardivă la tipul 1 și a screeningului complicațiilor înainte de efort.",
  "optionRationales": [
   "Doza de 150 de minute pe cel puțin 3 zile este explicită.",
   "Reducerea necesarului de insulină și hipoglicemia ulterioară sunt descrise la tipul 1.",
   "Screeningul complicațiilor macro- și microvasculare înainte de efort este cerut.",
   "Efortul nu este interzis în tipul 1; hipoglicemia, nu hiperglicemia invariabilă, este riscul descris.",
   "Cele 150 de minute se distribuie pe cel puțin 3 zile, nu se concentrează într-o singură zi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Combină doza de 150 de minute cu hipoglicemia tardivă; distractorii interzic efortul în tipul 1 și comprimă doza într-o zi."
  },
  "textbookExpressions": [
   "150 de minute",
   "hipoglicemie severă"
  ]
 },
 {
  "id": "diabet-adv-057",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Insulina umană solubilă administrată subcutanat:",
  "options": [
   "Atinge un vârf la 60–90 de minute, deoarece hexamerii trebuie să se disocieze în monomeri sau dimeri",
   "Trebuie injectată cu 20–30 de minute înainte de masă",
   "Acțiunea tinde să persiste după mese, predispunând la hipoglicemie",
   "Intră în circulație mai rapid decât analogii lispro, aspart și glulizină",
   "Nu formează hexameri; absorbția este instantanee"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Atinge un vârf la 60–90 de minute, deoarece hexamerii trebuie să se disocieze în monomeri sau dimeri — Corect: Vârful 60–90 minute și mecanismul hexameric sunt explicite.\n\nTrebuie injectată cu 20–30 de minute înainte de masă — Corect: Fereastra 20–30 minute înainte de masă este consecința întârzierii.\n\nAcțiunea tinde să persiste după mese, predispunând la hipoglicemie — Corect: Persistența postprandială și riscul de hipoglicemie sunt descrise.\n\nIntră în circulație mai rapid decât analogii lispro, aspart și glulizină — Incorect: Analogii disociază mai rapid decât insulina solubilă, nu invers.\n\nNu formează hexameri; absorbția este instantanee — Incorect: Formarea de hexameri în jurul zincului este cauza întârzierii.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 713, 714, Insulinele cu acțiune scurtă (pagini PDF: 112, 113).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    713,
    714
   ],
   "pdfPages": [
    112,
    113
   ],
   "section": "Insulinele cu acțiune scurtă"
  },
  "learningObjective": "Legarea cineticii 60–90 minute de disocierea hexamerilor și de injecția cu 20–30 minute înainte de masă.",
  "optionRationales": [
   "Vârful 60–90 minute și mecanismul hexameric sunt explicite.",
   "Fereastra 20–30 minute înainte de masă este consecința întârzierii.",
   "Persistența postprandială și riscul de hipoglicemie sunt descrise.",
   "Analogii disociază mai rapid decât insulina solubilă, nu invers.",
   "Formarea de hexameri în jurul zincului este cauza întârzierii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează viteza analogilor rapizi față de insulina solubilă, păstrând restul cineticii reale."
  },
  "textbookExpressions": [
   "60-90 minute",
   "20-30 minute"
  ]
 },
 {
  "id": "diabet-adv-058",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Mecanismul de prelungire a acțiunii insulinei glargin este:",
  "options": [
   "Adăugarea de protamină, ca în NPH",
   "Formarea de multihexameri legați de albumină, identic degludec",
   "Solubilitatea acidă (pH 4) în flacon, cu precipitare la pH-ul subcutanat",
   "Eliminarea lanțului B și înlocuirea cu glucagon",
   "Administrarea intramusculară, nu subcutanată"
  ],
  "correct": [
   2
  ],
  "explanation": "Adăugarea de protamină, ca în NPH — Incorect: Protamina caracterizează NPH, nu glargina.\n\nFormarea de multihexameri legați de albumină, identic degludec — Incorect: Multihexamerii și albumina țin de degludec/detemir.\n\nSolubilitatea acidă (pH 4) în flacon, cu precipitare la pH-ul subcutanat — Corect: Textul descrie forma ușor acidă (pH 4) care precipită subcutanat.\n\nEliminarea lanțului B și înlocuirea cu glucagon — Incorect: Structura nu este înlocuită cu glucagon.\n\nAdministrarea intramusculară, nu subcutanată — Incorect: Calea rămâne subcutanată; pH-ul flaconului explică durata.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 714, Insulinele cu durată intermediară și lungă de acțiune (pagini PDF: 113).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    714
   ],
   "pdfPages": [
    113
   ],
   "section": "Insulinele cu durată intermediară și lungă de acțiune"
  },
  "learningObjective": "Identificarea precipitației la pH subcutanat ca mecanism al glarginei, distinct de NPH și degludec.",
  "optionRationales": [
   "Protamina caracterizează NPH, nu glargina.",
   "Multihexamerii și albumina țin de degludec/detemir.",
   "Textul descrie forma ușor acidă (pH 4) care precipită subcutanat.",
   "Structura nu este înlocuită cu glucagon.",
   "Calea rămâne subcutanată; pH-ul flaconului explică durata."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate opțiunile sunt mecanisme reale ale altor analogi bazali; trebuie recunoscut pH 4 al glarginei."
  },
  "textbookExpressions": [
   "pH 4",
   "precipită la pH subcutanat"
  ]
 },
 {
  "id": "diabet-adv-059",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Comparând NPH cu analogii bazali:",
  "options": [
   "NPH are variabilitate de la o injecție la alta, necesită resuspendare și un vârf de obicei la mijlocul nopții",
   "Analogii cu durată lungă au risc mai mic de hipoglicemie, în special nocturnă, în tipul 1 și 2",
   "NICE rezervă analogii bazali, în tipul 2, persoanelor care nu răspund bine la NPH",
   "NPH nu trebuie resuspendat, fiind o soluție acidă clară ca glargina",
   "Modul de utilizare a insulinei are un impact mai mic decât diferențele dintre analogi, conform consensului EASD/ADA"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "NPH are variabilitate de la o injecție la alta, necesită resuspendare și un vârf de obicei la mijlocul nopții — Corect: Cele trei dezavantaje ale NPH sunt enumerate.\n\nAnalogii cu durată lungă au risc mai mic de hipoglicemie, în special nocturnă, în tipul 1 și 2 — Corect: Reducerea hipoglicemiei, mai ales nocturne, este atribuită analogilor.\n\nNICE rezervă analogii bazali, în tipul 2, persoanelor care nu răspund bine la NPH — Corect: Rezervarea analogilor după eșecul NPH în tipul 2 este poziția NICE.\n\nNPH nu trebuie resuspendat, fiind o soluție acidă clară ca glargina — Incorect: NPH trebuie resuspendat; soluția acidă este glargina.\n\nModul de utilizare a insulinei are un impact mai mic decât diferențele dintre analogi, conform consensului EASD/ADA — Incorect: Consensul subliniază că modul de utilizare are un impact mai mare, nu mai mic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 714, NPH versus analogi bazali (pagini PDF: 113).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    714
   ],
   "pdfPages": [
    113
   ],
   "section": "NPH versus analogi bazali"
  },
  "learningObjective": "Contrastul vârfului nocturn al NPH cu reducerea hipoglicemiei analogilor și poziția NICE în tipul 2.",
  "optionRationales": [
   "Cele trei dezavantaje ale NPH sunt enumerate.",
   "Reducerea hipoglicemiei, mai ales nocturne, este atribuită analogilor.",
   "Rezervarea analogilor după eșecul NPH în tipul 2 este poziția NICE.",
   "NPH trebuie resuspendat; soluția acidă este glargina.",
   "Consensul subliniază că modul de utilizare are un impact mai mare, nu mai mic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transferă proprietatea de soluție acidă a glarginei asupra NPH și inversează ponderea „modului de utilizare”."
  },
  "textbookExpressions": [
   "mijlocul nopţii",
   "NICE"
  ]
 },
 {
  "id": "diabet-adv-060",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Concentrațiile de insulină U200/U300/U500:",
  "options": [
   "Dispozitivele (penurile) indică numărul de unități; extragerea din pen cu o seringă de insulină riscă supradoza",
   "U500 permite injectarea aceleiași doze într-o cincime din volumul obișnuit, la rezistență severă",
   "Majoritatea preparatelor sunt U100, iar glargina există și ca U300",
   "U500 se extrage de rutină din pen cu seringă U100, pentru titrare mai fină",
   "U200 degludec se dozează în mililitri, nu în unități"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Dispozitivele (penurile) indică numărul de unități; extragerea din pen cu o seringă de insulină riscă supradoza — Corect: Avertismentele împotriva extragerii din pen sunt explicite.\n\nU500 permite injectarea aceleiași doze într-o cincime din volumul obișnuit, la rezistență severă — Corect: Raportul 1/5 pentru U500 este citat.\n\nMajoritatea preparatelor sunt U100, iar glargina există și ca U300 — Corect: U100 ca standard și U300 pentru glargină sunt menționate.\n\nU500 se extrage de rutină din pen cu seringă U100, pentru titrare mai fină — Incorect: Practica interzisă este tocmai extragerea cu seringă.\n\nU200 degludec se dozează în mililitri, nu în unități — Incorect: Penurile indică unități, nu mililitri, tocmai pentru a evita eroarea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 714, Concentrația preparatelor de insulină (pagini PDF: 113).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    714
   ],
   "pdfPages": [
    113
   ],
   "section": "Concentrația preparatelor de insulină"
  },
  "learningObjective": "Recunoașterea riscului de supradoză la extragerea analogilor concentrați și a rațiunii U500 (1/5 volum).",
  "optionRationales": [
   "Avertismentele împotriva extragerii din pen sunt explicite.",
   "Raportul 1/5 pentru U500 este citat.",
   "U100 ca standard și U300 pentru glargină sunt menționate.",
   "Practica interzisă este tocmai extragerea cu seringă.",
   "Penurile indică unități, nu mililitri, tocmai pentru a evita eroarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reia practica periculoasă (seringă din pen) ca și cum ar fi metoda de titrare recomandată."
  },
  "textbookExpressions": [
   "300 unităţi/ml",
   "o cincime din volumul"
  ]
 },
 {
  "id": "diabet-adv-061",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Regimurile de insulină:",
  "options": [
   "Bazal-bolusul este tratamentul de primă alegere în tipul 1, fiecare injecție putând fi ajustată individual",
   "Premixul de două ori pe zi nu oferă bolus la prânz și menține niveluri bazale mai mari între mese, crescând hipoglicemia",
   "Întreruperea fluxului unei pompe (PCIS) riscă cetoacidoză, deoarece nu există rezervă de insulină bazală injectată",
   "Premixul este mai flexibil decât bazal-bolusul pentru munca în schimburi",
   "Pompa elimină riscul de cetoacidoză, insulina bazală depozitată acoperind 48 de ore"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Bazal-bolusul este tratamentul de primă alegere în tipul 1, fiecare injecție putând fi ajustată individual — Corect: Prima alegere în tipul 1 și ajustarea individuală sunt explicite.\n\nPremixul de două ori pe zi nu oferă bolus la prânz și menține niveluri bazale mai mari între mese, crescând hipoglicemia — Corect: Lipsa bolusului de prânz și hipoglicemia interprandială sunt dezavantajele premixului.\n\nÎntreruperea fluxului unei pompe (PCIS) riscă cetoacidoză, deoarece nu există rezervă de insulină bazală injectată — Corect: Absența rezervei bazale injectate explică CAD-ul la întreruperea fluxului.\n\nPremixul este mai flexibil decât bazal-bolusul pentru munca în schimburi — Incorect: Flexibilitatea pentru schimburi aparține bazal-bolusului, nu premixului.\n\nPompa elimină riscul de cetoacidoză, insulina bazală depozitată acoperind 48 de ore — Incorect: Întreruperea fluxului crește, nu elimină, riscul de CAD.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 715, 714, Regimuri de insulină; Pompele de insulină (pagini PDF: 114, 113).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    715,
    714
   ],
   "pdfPages": [
    114,
    113
   ],
   "section": "Regimuri de insulină; Pompele de insulină"
  },
  "learningObjective": "Contrastul flexibilității bazal-bolus cu limitele premixului și cu riscul de CAD la întreruperea pompei.",
  "optionRationales": [
   "Prima alegere în tipul 1 și ajustarea individuală sunt explicite.",
   "Lipsa bolusului de prânz și hipoglicemia interprandială sunt dezavantajele premixului.",
   "Absența rezervei bazale injectate explică CAD-ul la întreruperea fluxului.",
   "Flexibilitatea pentru schimburi aparține bazal-bolusului, nu premixului.",
   "Întreruperea fluxului crește, nu elimină, riscul de CAD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie premixului flexibilitatea bazal-bolusului și neagă CAD-ul prin deconectarea pompei."
  },
  "textbookExpressions": [
   "Principalul dezavantaj",
   "fluxul de insulină este întrerupt"
  ]
 },
 {
  "id": "diabet-adv-062",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Terapia cu pompă de insulină (PCIS):",
  "options": [
   "Până la 40% dintre persoanele cu tip 1 folosesc pompe în SUA, comparativ cu 12,2% în Marea Britanie",
   "Acele stilourilor moderne au 4–5 mm și reduc durerea față de seringile clasice",
   "Pompa îmbunătățește controlul, reduce hipoglicemiile și crește calitatea vieții față de injecțiile multiple",
   "Utilizarea PCIS a atins 90% în Marea Britanie, fiind superioară SUA",
   "Acele de 12–16 mm rămân standardul stilourilor actuale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Până la 40% dintre persoanele cu tip 1 folosesc pompe în SUA, comparativ cu 12,2% în Marea Britanie — Corect: Cele două procente naționale sunt juxtapuse în text.\n\nAcele stilourilor moderne au 4–5 mm și reduc durerea față de seringile clasice — Corect: Lungimea 4–5 mm este specificată pentru stilouri.\n\nPompa îmbunătățește controlul, reduce hipoglicemiile și crește calitatea vieții față de injecțiile multiple — Corect: Beneficiile față de injecțiile multiple sunt enumerate.\n\nUtilizarea PCIS a atins 90% în Marea Britanie, fiind superioară SUA — Incorect: Raportul este invers: 12,2% în Marea Britanie versus până la 40% în SUA.\n\nAcele de 12–16 mm rămân standardul stilourilor actuale — Incorect: Acele moderne sunt de 4–5 mm, nu 12–16 mm.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 715, Administrarea insulinei; Pompele (pagini PDF: 114).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    715
   ],
   "pdfPages": [
    114
   ],
   "section": "Administrarea insulinei; Pompele"
  },
  "learningObjective": "Reținerea contrastului 40% versus 12,2% și a lungimii acelor de 4–5 mm.",
  "optionRationales": [
   "Cele două procente naționale sunt juxtapuse în text.",
   "Lungimea 4–5 mm este specificată pentru stilouri.",
   "Beneficiile față de injecțiile multiple sunt enumerate.",
   "Raportul este invers: 12,2% în Marea Britanie versus până la 40% în SUA.",
   "Acele moderne sunt de 4–5 mm, nu 12–16 mm."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează prevalența PCIS între SUA și Marea Britanie, o pereche numerică de pe aceeași linie."
  },
  "textbookExpressions": [
   "40%",
   "12,2%"
  ]
 },
 {
  "id": "diabet-adv-063",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Complicațiile locale ale injectării insulinei:",
  "options": [
   "Lipohipertrofia (noduli grăsoși) apare prin suprautilizarea aceluiași loc, la orice tip de insulină",
   "Lipoatrofia poate rezulta din complexe IgG anti-insulină; insulina modernă foarte purificată face alergia rară",
   "Atât lipohipertrofia, cât și lipoatrofia interferează cu absorbția insulinei",
   "Prima insulină inhalatorie a fost retrasă în 2007, din cerere limitată și îngrijorări legate de cancerul pulmonar",
   "Lipohipertrofia îmbunătățește absorbția, deci rotația locurilor este superfluă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Lipohipertrofia (noduli grăsoși) apare prin suprautilizarea aceluiași loc, la orice tip de insulină — Corect: Mecanismul prin suprautilizarea unui sit este explicit.\n\nLipoatrofia poate rezulta din complexe IgG anti-insulină; insulina modernă foarte purificată face alergia rară — Corect: IgG și rarisimitatea alergiei la insulină purificată sunt descrise.\n\nAtât lipohipertrofia, cât și lipoatrofia interferează cu absorbția insulinei — Corect: Interferența cu absorbția este consecința comună.\n\nPrima insulină inhalatorie a fost retrasă în 2007, din cerere limitată și îngrijorări legate de cancerul pulmonar — Corect: Retragerea din 2007 și motivele (cerere, cancer pulmonar) sunt citate.\n\nLipohipertrofia îmbunătățește absorbția, deci rotația locurilor este superfluă — Incorect: Rotația locurilor previne nodulii care compromit absorbția.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 715, Lipohipertrofia și lipoatrofia; Insulina inhalatorie (pagini PDF: 114).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    715
   ],
   "pdfPages": [
    114
   ],
   "section": "Lipohipertrofia și lipoatrofia; Insulina inhalatorie"
  },
  "learningObjective": "Diferențierea hipertrofiei prin suprautilizare de atrofia imună și recunoașterea interferenței cu absorbția.",
  "optionRationales": [
   "Mecanismul prin suprautilizarea unui sit este explicit.",
   "IgG și rarisimitatea alergiei la insulină purificată sunt descrise.",
   "Interferența cu absorbția este consecința comună.",
   "Retragerea din 2007 și motivele (cerere, cancer pulmonar) sunt citate.",
   "Rotația locurilor previne nodulii care compromit absorbția."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează efectul lipohipertrofiei asupra absorbției, exact motivul pentru care rotația siturilor este cerută."
  },
  "textbookExpressions": [
   "lipohipertrofie",
   "lipoatrofie"
  ]
 },
 {
  "id": "diabet-adv-064",
  "topicId": "diabet",
  "type": "CS",
  "stem": "După optimizarea stilului de viață, tratamentul de primă linie la majoritatea persoanelor cu diabet zaharat tip 2 ale căror glicemii rămân peste țintă este:",
  "options": [
   "Metforminul",
   "O sulfoniluree ca monoterapie inițială la toți",
   "Insulina U500 de la diagnostic",
   "O tiazolidindionă înaintea oricărei diete",
   "Un agonist GLP-1 combinat de la început cu un inhibitor DPP-4"
  ],
  "correct": [
   0
  ],
  "explanation": "Metforminul — Corect: Toate ghidurile citate recomandă metforminul ca primă linie în această situație.\n\nO sulfoniluree ca monoterapie inițială la toți — Incorect: Sulfonilureele nu înlocuiesc metforminul ca primă linie universală.\n\nInsulina U500 de la diagnostic — Incorect: U500 este rezervată rezistenței severe, nu diagnosticului de tip 2.\n\nO tiazolidindionă înaintea oricărei diete — Incorect: Stilul de viață precede farmacoterapia; TZD nu o antecedează.\n\nUn agonist GLP-1 combinat de la început cu un inhibitor DPP-4 — Incorect: Asocierea GLP-1 cu DPP-4 nu aduce beneficiu suplimentar (pagina de incretine).\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 720, Ce medicament și când? (pagini PDF: 119).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    720
   ],
   "pdfPages": [
    119
   ],
   "section": "Ce medicament și când?"
  },
  "learningObjective": "Identificarea metforminului ca primă linie după stilul de viață în tipul 2.",
  "optionRationales": [
   "Toate ghidurile citate recomandă metforminul ca primă linie în această situație.",
   "Sulfonilureele nu înlocuiesc metforminul ca primă linie universală.",
   "U500 este rezervată rezistenței severe, nu diagnosticului de tip 2.",
   "Stilul de viață precede farmacoterapia; TZD nu o antecedează.",
   "Asocierea GLP-1 cu DPP-4 nu aduce beneficiu suplimentar (pagina de incretine)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt clase reale de linia a doua, promovate greșit înaintea metforminului."
  },
  "textbookExpressions": [
   "metforminul ca tratament de primă linie",
   "stilului de viaţă"
  ]
 },
 {
  "id": "diabet-adv-065",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Transplantul de insule și de pancreas:",
  "options": [
   "Circa 50–70% dintre primitorii de insule obțin control glicemic fără insulinoterapie la 5 ani",
   "La nivel mondial s-au efectuat peste 42.000 de transplanturi de pancreas",
   "Cel mai adesea, pancreasul se transplantează la tipul 1 cu boală renală terminală, odată cu rinichiul",
   "Transplantul de pancreas se face de rutină la tipul 2 nou diagnosticat, fără imunosupresie",
   "Insulele nu influențează hipoglicemia severă, scopul fiind doar scăderea ponderală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Circa 50–70% dintre primitorii de insule obțin control glicemic fără insulinoterapie la 5 ani — Corect: Intervalul 50–70% fără insulină la 5 ani este citat.\n\nLa nivel mondial s-au efectuat peste 42.000 de transplanturi de pancreas — Corect: Cifra de peste 42.000 este explicită.\n\nCel mai adesea, pancreasul se transplantează la tipul 1 cu boală renală terminală, odată cu rinichiul — Corect: Asocierea cu transplantul renal în tipul 1 ESKD este indicația obișnuită.\n\nTransplantul de pancreas se face de rutină la tipul 2 nou diagnosticat, fără imunosupresie — Incorect: Imunosupresia pe termen lung este costul, iar indicația nu este tipul 2 recent.\n\nInsulele nu influențează hipoglicemia severă, scopul fiind doar scăderea ponderală — Incorect: Scopul tratamentului cu insule este prevenirea hipoglicemiei severe.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 722, 721, Transplantul de pancreas și de insule pancreatice (pagini PDF: 121, 120).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    722,
    721
   ],
   "pdfPages": [
    121,
    120
   ],
   "section": "Transplantul de pancreas și de insule pancreatice"
  },
  "learningObjective": "Reținerea ratelor 50–70% la 5 ani, a volumului de 42.000 și a indicației pancreas+rinichi.",
  "optionRationales": [
   "Intervalul 50–70% fără insulină la 5 ani este citat.",
   "Cifra de peste 42.000 este explicită.",
   "Asocierea cu transplantul renal în tipul 1 ESKD este indicația obișnuită.",
   "Imunosupresia pe termen lung este costul, iar indicația nu este tipul 2 recent.",
   "Scopul tratamentului cu insule este prevenirea hipoglicemiei severe."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută indicația de la tipul 1 uremic la tipul 2 recent și neagă obiectivul anti-hipoglicemic."
  },
  "textbookExpressions": [
   "50-70%",
   "42.000"
  ]
 },
 {
  "id": "diabet-adv-066",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Un tânăr cu tip 1 reduce insulina din cauza vărsăturilor. Referitor la cetoacidoza diabetică:",
  "options": [
   "Mortalitatea este circa 1%; incidența 5–8 episoade anuale la 1.000 de pacienți",
   "10–20% din cazuri sunt diabet nou diagnosticat; 15–30% urmează întreruperii insulinei; 30–40% unei afecțiuni intercurente",
   "Reducerea sau oprirea insulinei pentru inapetență sau vărsături contribuie la cel puțin 25% din spitalizări",
   "Insulina trebuie oprită cât persistă greața, pentru a evita hipoglicemia",
   "CAD apare doar la tipul 2 vârstnic, nu la tipul 1"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mortalitatea este circa 1%; incidența 5–8 episoade anuale la 1.000 de pacienți — Corect: Cifrele de mortalitate și de incidență deschid secțiunea.\n\n10–20% din cazuri sunt diabet nou diagnosticat; 15–30% urmează întreruperii insulinei; 30–40% unei afecțiuni intercurente — Corect: Cele trei procente 10–20 / 15–30 / 30–40 sunt lista circumstanțelor.\n\nReducerea sau oprirea insulinei pentru inapetență sau vărsături contribuie la cel puțin 25% din spitalizări — Corect: Contribuția de cel puțin 25% a reducerii insulinei la vărsături este explicită.\n\nInsulina trebuie oprită cât persistă greața, pentru a evita hipoglicemia — Incorect: Administrarea insulinei nu trebuie oprită; dozele se ajustează.\n\nCAD apare doar la tipul 2 vârstnic, nu la tipul 1 — Incorect: CAD apare mai ales la tipul 1, ocazional și la tipul 2.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 722, Cetoacidoza diabetică — Epidemiologie; Circumstanțe (pagini PDF: 121).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    722
   ],
   "pdfPages": [
    121
   ],
   "section": "Cetoacidoza diabetică — Epidemiologie; Circumstanțe"
  },
  "learningObjective": "Cuantificarea circumstanțelor precipitante și a erorii de a reduce insulina în vărsături.",
  "optionRationales": [
   "Cifrele de mortalitate și de incidență deschid secțiunea.",
   "Cele trei procente 10–20 / 15–30 / 30–40 sunt lista circumstanțelor.",
   "Contribuția de cel puțin 25% a reducerii insulinei la vărsături este explicită.",
   "Administrarea insulinei nu trebuie oprită; dozele se ajustează.",
   "CAD apare mai ales la tipul 1, ocazional și la tipul 2."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reia tocmai eroarea (oprirea insulinei la vărsături) pe care textul o identifică ca cea mai frecventă cauză evitabilă."
  },
  "textbookExpressions": [
   "25% din spitalizări",
   "5-8 episoade"
  ]
 },
 {
  "id": "diabet-adv-067",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Cetoacidoza diabetică este definită ca urgență metabolică în care hiperglicemia se asociază cu acidoză prin corpi cetonici peste:",
  "options": [
   "0,3 mmol/L",
   "1 mmol/L",
   "3 mmol/L",
   "10 mmol/L",
   "Corpii cetonici urinari în post, fără acidoză"
  ],
  "correct": [
   2
  ],
  "explanation": "0,3 mmol/L — Incorect: 0,3 mmol/L nu atinge pragul de CAD.\n\n1 mmol/L — Incorect: 1 mmol/L este sub pragul citat.\n\n3 mmol/L — Corect: Textul definește CAD prin nivel foarte crescut (>3 mmol/L) de corpi cetonici.\n\n10 mmol/L — Incorect: 10 mmol/L depășește pragul definițional, dar nu este cifra din cadran.\n\nCorpii cetonici urinari în post, fără acidoză — Incorect: Cetonuria de post, fără acidoză, este definită separat și nu constituie CAD.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 722, Cadranul 23.17 — Termeni (pagini PDF: 121).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    722
   ],
   "pdfPages": [
    121
   ],
   "section": "Cadranul 23.17 — Termeni"
  },
  "learningObjective": "Reținerea pragului de >3 mmol/L al cetonemiei care definește CAD, distinct de cetonurie de post.",
  "optionRationales": [
   "0,3 mmol/L nu atinge pragul de CAD.",
   "1 mmol/L este sub pragul citat.",
   "Textul definește CAD prin nivel foarte crescut (>3 mmol/L) de corpi cetonici.",
   "10 mmol/L depășește pragul definițional, dar nu este cifra din cadran.",
   "Cetonuria de post, fără acidoză, este definită separat și nu constituie CAD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt trepte cetonice plauzibile; doar >3 mmol/L este pragul din cadran."
  },
  "textbookExpressions": [
   ">3 mmol/L",
   "cetoacidoză"
  ]
 },
 {
  "id": "diabet-adv-068",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În prima oră de tratament al CAD, conform cadranului 23.19:",
  "options": [
   "Se inițiază NaCl 0,9%: 1 L în prima oră, exceptând hipotensiunea care cere corecție mai rapidă",
   "Se adaugă 40 mmol/L KCl dacă potasiul este <5,5 mmol/L; sub 3,5 mmol/L sunt necesare evaluări suplimentare",
   "Insulina i.v. se începe la 0,1 U/kg/oră; insulina bazală de lungă durată se continuă",
   "Insulina bazală se oprește la internare, pentru a evita hipoglicemia",
   "Potasiul se adaugă de la început dacă kaliemia rămâne peste 5,5 mmol/L"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se inițiază NaCl 0,9%: 1 L în prima oră, exceptând hipotensiunea care cere corecție mai rapidă — Corect: Ritmul de 1 L/oră și excepția hipotensivă sunt pașii 3a.\n\nSe adaugă 40 mmol/L KCl dacă potasiul este <5,5 mmol/L; sub 3,5 mmol/L sunt necesare evaluări suplimentare — Corect: Pragurile 5,5 și 3,5 mmol/L sunt cele din pasul 3b.\n\nInsulina i.v. se începe la 0,1 U/kg/oră; insulina bazală de lungă durată se continuă — Corect: Rata 0,1 U/kg/oră și continuarea bazalei sunt pașii 4–5.\n\nInsulina bazală se oprește la internare, pentru a evita hipoglicemia — Incorect: Bazala se continuă la doza și ora obișnuită, nu se oprește.\n\nPotasiul se adaugă de la început dacă kaliemia rămâne peste 5,5 mmol/L — Incorect: Potasiul nu se adaugă dacă kaliemia rămâne peste 5,5 mmol/L.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 724, Cadranul 23.19 — Tratamentul CAD (pagini PDF: 123).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    724
   ],
   "pdfPages": [
    123
   ],
   "section": "Cadranul 23.19 — Tratamentul CAD"
  },
  "learningObjective": "Aplicarea simultană a litrului de NaCl, a pragurilor de potasiu și a ratei 0,1 U/kg/oră cu continuarea bazalei.",
  "optionRationales": [
   "Ritmul de 1 L/oră și excepția hipotensivă sunt pașii 3a.",
   "Pragurile 5,5 și 3,5 mmol/L sunt cele din pasul 3b.",
   "Rata 0,1 U/kg/oră și continuarea bazalei sunt pașii 4–5.",
   "Bazala se continuă la doza și ora obișnuită, nu se oprește.",
   "Potasiul nu se adaugă dacă kaliemia rămâne peste 5,5 mmol/L."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oprirea bazalei și administrarea de K+ la hiperpotasemie sunt inversările celor două precauții din aceeași oră."
  },
  "textbookExpressions": [
   "0,1 U/kg/oră",
   "40 mmol/L KCI"
  ]
 },
 {
  "id": "diabet-adv-069",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Pe parcursul tratamentului CAD:",
  "options": [
   "Când glicemia scade sub 14 mmol/L (250 mg/dl) se adaugă glucoză 10% cu 125 ml/oră, alături de NaCl 0,9%",
   "Bicarbonatul este rar indicat (implicat în edem cerebral și acidoză paradoxală a LCR) și se rezervă pH <7,0, preferabil izoton 1,26%",
   "Țintele orare sunt: cetone −0,5 mmol/L, bicarbonat +3 mmol/L, glicemie −3 mmol/L, potasiu 4–5,5 mmol/L",
   "Bicarbonatul hiperton se administrează de rutină la orice pH <7,3",
   "Glucoza 10% se oprește când glicemia scade sub 14 mmol/L, pentru a grăbi rezoluția cetozei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Când glicemia scade sub 14 mmol/L (250 mg/dl) se adaugă glucoză 10% cu 125 ml/oră, alături de NaCl 0,9% — Corect: Pasul 3d al cadranului introduce glucoza 10% sub 14 mmol/L.\n\nBicarbonatul este rar indicat (implicat în edem cerebral și acidoză paradoxală a LCR) și se rezervă pH <7,0, preferabil izoton 1,26% — Corect: Rezerva la pH <7,0 și concentrația 1,26% sunt explicite.\n\nȚintele orare sunt: cetone −0,5 mmol/L, bicarbonat +3 mmol/L, glicemie −3 mmol/L, potasiu 4–5,5 mmol/L — Corect: Cele trei ținte orare plus intervalul potasiului sunt enumerate.\n\nBicarbonatul hiperton se administrează de rutină la orice pH <7,3 — Incorect: Bicarbonatul de rutină la pH 7,3 este contrar textului.\n\nGlucoza 10% se oprește când glicemia scade sub 14 mmol/L, pentru a grăbi rezoluția cetozei — Incorect: Glucoza se adaugă sub 14 mmol/L, nu se oprește, tocmai pentru a continua insulina până la dispariția cetozei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 724, Substituția insulinică; Echilibrul acido-bazic (pagini PDF: 123).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    724
   ],
   "pdfPages": [
    123
   ],
   "section": "Substituția insulinică; Echilibrul acido-bazic"
  },
  "learningObjective": "Articularea pragului de 14 mmol/L pentru glucoză 10% cu rezerva bicarbonatului la pH <7,0.",
  "optionRationales": [
   "Pasul 3d al cadranului introduce glucoza 10% sub 14 mmol/L.",
   "Rezerva la pH <7,0 și concentrația 1,26% sunt explicite.",
   "Cele trei ținte orare plus intervalul potasiului sunt enumerate.",
   "Bicarbonatul de rutină la pH 7,3 este contrar textului.",
   "Glucoza se adaugă sub 14 mmol/L, nu se oprește, tocmai pentru a continua insulina până la dispariția cetozei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează momentul glucozei 10% și banalizează bicarbonatul, două decizii de reanimare alăturate."
  },
  "textbookExpressions": [
   "14 mmol/L",
   "pH-ul este <7.0"
  ]
 },
 {
  "id": "diabet-adv-070",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Complicațiile tratamentului CAD includ:",
  "options": [
   "Edemul cerebral, rar dar sever, mai ales la copii și adulți tineri; substituția prea rapidă de fluide îl poate precipita",
   "Tromboprofilaxia cu HGMM la vârstnici sau cu risc crescut, din cauza hipervâscozității și hipercoagulabilității",
   "Hipotermia severă poate fi omisă dacă nu se măsoară temperatura rectală cu un termometru pentru valori joase",
   "Edemul cerebral este regula la vârstnici și se previne cu bicarbonat de rutină",
   "Febra înaltă este constantă în CAD, iar absența ei exclude infecția precipitantă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Edemul cerebral, rar dar sever, mai ales la copii și adulți tineri; substituția prea rapidă de fluide îl poate precipita — Corect: Populația tânără și rolul substituției prea rapide sunt explicite.\n\nTromboprofilaxia cu HGMM la vârstnici sau cu risc crescut, din cauza hipervâscozității și hipercoagulabilității — Corect: HGMM la vârstnici/risc crescut este recomandarea din deschiderea paginii.\n\nHipotermia severă poate fi omisă dacă nu se măsoară temperatura rectală cu un termometru pentru valori joase — Corect: Avertismentul privind termometrul rectal pentru <33°C este specific.\n\nEdemul cerebral este regula la vârstnici și se previne cu bicarbonat de rutină — Incorect: Edemul cerebral este rar, la tineri; bicarbonatul este implicat în apariția sa, nu în prevenție.\n\nFebra înaltă este constantă în CAD, iar absența ei exclude infecția precipitantă — Incorect: Febra este neobișnuită chiar în infecție; leucocitoza poate exista fără infecție.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 725, 724, Complicațiile CAD; Alte măsuri (pagini PDF: 124, 123).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    725,
    724
   ],
   "pdfPages": [
    124,
    123
   ],
   "section": "Complicațiile CAD; Alte măsuri"
  },
  "learningObjective": "Asocierea edemului cerebral al tânărului, a tromboprofilaxiei și a capcanei hipotermiei rectale.",
  "optionRationales": [
   "Populația tânără și rolul substituției prea rapide sunt explicite.",
   "HGMM la vârstnici/risc crescut este recomandarea din deschiderea paginii.",
   "Avertismentul privind termometrul rectal pentru <33°C este specific.",
   "Edemul cerebral este rar, la tineri; bicarbonatul este implicat în apariția sa, nu în prevenție.",
   "Febra este neobișnuită chiar în infecție; leucocitoza poate exista fără infecție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie edemul cerebral vârstnicului și transformă absența febrei în criteriu de excludere a infecției, pe care textul o descrie ca nesigură."
  },
  "textbookExpressions": [
   "Edemul cerebral",
   "heparină cu greutate moleculară mică"
  ]
 },
 {
  "id": "diabet-adv-071",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În starea hiperosmolară hiperglicemică, pentru a limita leziunea cerebrală:",
  "options": [
   "Scăderea sodiului plasmatic nu trebuie să depășească 10 mmol/L în 24 de ore",
   "Scăderea glicemiei nu trebuie să fie mai mare de 5 mmol/L/oră (90 mg/dl/oră)",
   "Insulina, dacă este necesară, se folosește la 0,05 U/kg/oră, pacienții fiind adesea foarte sensibili",
   "Sodiul trebuie scăzut cu cel puțin 20 mmol/L în primele 6 ore",
   "Insulina se începe la 1 U/kg/oră la toți, înaintea oricărui fluid"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Scăderea sodiului plasmatic nu trebuie să depășească 10 mmol/L în 24 de ore — Corect: Plafonul de 10 mmol/L/24 h pentru sodiu este explicit.\n\nScăderea glicemiei nu trebuie să fie mai mare de 5 mmol/L/oră (90 mg/dl/oră) — Corect: Plafonul de 5 mmol/L/oră pentru glucoză este alăturat.\n\nInsulina, dacă este necesară, se folosește la 0,05 U/kg/oră, pacienții fiind adesea foarte sensibili — Corect: Rata 0,05 U/kg/oră și hipersensibilitatea sunt descrise.\n\nSodiul trebuie scăzut cu cel puțin 20 mmol/L în primele 6 ore — Incorect: O scădere atât de rapidă a sodiului este tocmai ceea ce trebuie evitat.\n\nInsulina se începe la 1 U/kg/oră la toți, înaintea oricărui fluid — Incorect: Fluidele sunt primul pas; insulina este de 0,05, nu 1 U/kg/oră.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 725, Starea hiperosmolară hiperglicemică — Tratament (pagini PDF: 124).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    725
   ],
   "pdfPages": [
    124
   ],
   "section": "Starea hiperosmolară hiperglicemică — Tratament"
  },
  "learningObjective": "Reținerea celor două plafoane (Na 10 mmol/L/24 h; glucoză 5 mmol/L/oră) și a ratei reduse de insulină.",
  "optionRationales": [
   "Plafonul de 10 mmol/L/24 h pentru sodiu este explicit.",
   "Plafonul de 5 mmol/L/oră pentru glucoză este alăturat.",
   "Rata 0,05 U/kg/oră și hipersensibilitatea sunt descrise.",
   "O scădere atât de rapidă a sodiului este tocmai ceea ce trebuie evitat.",
   "Fluidele sunt primul pas; insulina este de 0,05, nu 1 U/kg/oră."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ordinele de mărime ale corecției (Na și insulină), exact plafoanele menite să protejeze creierul."
  },
  "textbookExpressions": [
   "10 mmol/L în 24 ore",
   "5 mmol/L/oră"
  ]
 },
 {
  "id": "diabet-adv-072",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Epidemiologia diabetului de tip 2:",
  "options": [
   "Reprezintă circa 90% din toate cazurile de diabet",
   "Aproximativ trei sferturi dintre cei cu tip 2 trăiesc în țări cu venituri mici și medii; două treimi trăiesc urban",
   "Gemenii identici au peste 50% șanse de a dezvolta tip 2; frații circa 25%",
   "Obezitatea crește riscul de 80–100 de ori și reprezintă 80–85% din riscul general de tip 2",
   "Tipul 2 este aproape absent în India și China, fiind limitat la Europa de Vest"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Reprezintă circa 90% din toate cazurile de diabet — Corect: Ponderea de 90% deschide secțiunea.\n\nAproximativ trei sferturi dintre cei cu tip 2 trăiesc în țări cu venituri mici și medii; două treimi trăiesc urban — Corect: Cele două fracții (trei sferturi LMIC, două treimi urban) sunt juxtapuse.\n\nGemenii identici au peste 50% șanse de a dezvolta tip 2; frații circa 25% — Corect: 50% versus 25% este contrastul gemeni identici/frați.\n\nObezitatea crește riscul de 80–100 de ori și reprezintă 80–85% din riscul general de tip 2 — Corect: Multiplicatorul 80–100 și ponderea 80–85% sunt cifrele obezității.\n\nTipul 2 este aproape absent în India și China, fiind limitat la Europa de Vest — Incorect: Cea mai rapidă creștere este tocmai în economii ca India și China.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 708, Diabetul zaharat de tip 2 — Epidemiologie; Obezitatea (pagini PDF: 107).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    708
   ],
   "pdfPages": [
    107
   ],
   "section": "Diabetul zaharat de tip 2 — Epidemiologie; Obezitatea"
  },
  "learningObjective": "Integrarea ponderii de 90%, a distribuției LMIC/urban, a eredității gemelare și a contribuției obezității.",
  "optionRationales": [
   "Ponderea de 90% deschide secțiunea.",
   "Cele două fracții (trei sferturi LMIC, două treimi urban) sunt juxtapuse.",
   "50% versus 25% este contrastul gemeni identici/frați.",
   "Multiplicatorul 80–100 și ponderea 80–85% sunt cifrele obezității.",
   "Cea mai rapidă creștere este tocmai în economii ca India și China."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă povara din țările emergente, deși textul o plasează acolo ca motor al epidemiei."
  },
  "textbookExpressions": [
   "90% din toate cazurile",
   "80-85% din riscul"
  ]
 },
 {
  "id": "diabet-adv-073",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În etiologia diabetului de tip 1 sunt adevărate:",
  "options": [
   "80–90% dintre persoanele recent diagnosticate nu au istoric familial de diabet",
   "Doar circa 10% dintre purtătorii de gene HLA de susceptibilitate dezvoltă tip 1",
   "Printre factorii de mediu citați se numără enterovirusuri (Coxsackie B4), laptele de vacă timpuriu și deficitul de vitamină D",
   "Haplotipurile HLA explică singure boala, factorii de mediu fiind irelevanți",
   "Istoricul familial este prezent la aproape toți cei cu tip 1 recent"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "80–90% dintre persoanele recent diagnosticate nu au istoric familial de diabet — Corect: Absența istoricului familial la 80–90% este explicită.\n\nDoar circa 10% dintre purtătorii de gene HLA de susceptibilitate dezvoltă tip 1 — Corect: Doar 10% dintre purtătorii HLA fac boala.\n\nPrintre factorii de mediu citați se numără enterovirusuri (Coxsackie B4), laptele de vacă timpuriu și deficitul de vitamină D — Corect: Lista de factori de mediu include Coxsackie B4 și vitamina D.\n\nHaplotipurile HLA explică singure boala, factorii de mediu fiind irelevanți — Incorect: Textul concluzionează că genele nu sunt în totalitate responsabile.\n\nIstoricul familial este prezent la aproape toți cei cu tip 1 recent — Incorect: Majoritatea cazurilor noi nu au istoric familial.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 707, 708, Diabetul de tip 1 — Factori de mediu (pagini PDF: 106, 107).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    707,
    708
   ],
   "pdfPages": [
    106,
    107
   ],
   "section": "Diabetul de tip 1 — Factori de mediu"
  },
  "learningObjective": "Reconcilierea susceptibilității HLA cu absența istoricului familial la 80–90% din cazurile noi.",
  "optionRationales": [
   "Absența istoricului familial la 80–90% este explicită.",
   "Doar 10% dintre purtătorii HLA fac boala.",
   "Lista de factori de mediu include Coxsackie B4 și vitamina D.",
   "Textul concluzionează că genele nu sunt în totalitate responsabile.",
   "Majoritatea cazurilor noi nu au istoric familial."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie HLA o suficiență pe care textul o neagă prin cifrele 80–90% și 10%."
  },
  "textbookExpressions": [
   "80-90%",
   "Coxsackie B4"
  ]
 },
 {
  "id": "diabet-adv-074",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Comparând tipul 1 cu tipul 2 în cadranul de spectru, sunt adevărate:",
  "options": [
   "În tipul 1, peptidul C dispare; în tipul 2 persistă",
   "Ketonuria este caracteristică tipului 1 și absentă sau minimă în tipul 2",
   "HLA-DR3 sau DR4 sunt prezente la >90% din tipul 1, fără legătură HLA în tipul 2",
   "Peptidul C dispare în tipul 2 și persistă în tipul 1",
   "Ketonuria definește tipul 2 al vârstnicului, nu tipul 1"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În tipul 1, peptidul C dispare; în tipul 2 persistă — Corect: Dispariția versus persistența peptidului C este linia de biochimie a cadranului.\n\nKetonuria este caracteristică tipului 1 și absentă sau minimă în tipul 2 — Corect: Ketonuria „da” versus „nu sau minimă” este contrastul.\n\nHLA-DR3 sau DR4 sunt prezente la >90% din tipul 1, fără legătură HLA în tipul 2 — Corect: >90% HLA-DR3/DR4 în tipul 1 versus absența legăturii HLA în tipul 2.\n\nPeptidul C dispare în tipul 2 și persistă în tipul 1 — Incorect: Sensul peptidului C este inversat față de cadran.\n\nKetonuria definește tipul 2 al vârstnicului, nu tipul 1 — Incorect: Ketonuria aparține tipului 1, nu tipului 2.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 707, Cadranul 23.5 — Spectrul diabetului (pagini PDF: 106).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    707
   ],
   "pdfPages": [
    106
   ],
   "section": "Cadranul 23.5 — Spectrul diabetului"
  },
  "learningObjective": "Citirea coloanelor de peptid C, ketonurie și HLA din tabloul comparativ.",
  "optionRationales": [
   "Dispariția versus persistența peptidului C este linia de biochimie a cadranului.",
   "Ketonuria „da” versus „nu sau minimă” este contrastul.",
   ">90% HLA-DR3/DR4 în tipul 1 versus absența legăturii HLA în tipul 2.",
   "Sensul peptidului C este inversat față de cadran.",
   "Ketonuria aparține tipului 1, nu tipului 2."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează cele două coloane (peptid C și ketonurie) ale aceluiași tabel comparativ."
  },
  "textbookExpressions": [
   "Dispariţia peptidului-C",
   "HLA-DR3 sau DR4"
  ]
 },
 {
  "id": "diabet-adv-075",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Țintele cardiovasculare ideale la persoanele cu diabet includ:",
  "options": [
   "Tensiune arterială <130/80 mmHg",
   "LDL-colesterol <2,0 mmol/L",
   "Trigliceride <1,7 mmol/L",
   "Tensiune arterială <180/110 mmHg ca țintă ideală",
   "LDL <5,0 mmol/L ca țintă ideală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tensiune arterială <130/80 mmHg — Corect: <130/80 este valoarea ideală din cadran.\n\nLDL-colesterol <2,0 mmol/L — Corect: <2,0 mmol/L este LDL-ul ideal.\n\nTrigliceride <1,7 mmol/L — Corect: <1,7 mmol/L este ținta ideală a trigliceridelor.\n\nTensiune arterială <180/110 mmHg ca țintă ideală — Incorect: 180/110 nu este ținta; coloana rezonabilă este <140/85.\n\nLDL <5,0 mmol/L ca țintă ideală — Incorect: 5,0 mmol/L este pragul rezonabil al colesterolului total, nu LDL-ul ideal.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 734, 735, Cadranul 23.26 — Țintele factorilor de risc cardiovascular (pagini PDF: 133, 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    734,
    735
   ],
   "pdfPages": [
    133,
    134
   ],
   "section": "Cadranul 23.26 — Țintele factorilor de risc cardiovascular"
  },
  "learningObjective": "Reținerea triadei ideale TA 130/80, LDL <2,0 și trigliceride <1,7, distinct de coloana „rezonabil”.",
  "optionRationales": [
   "<130/80 este valoarea ideală din cadran.",
   "<2,0 mmol/L este LDL-ul ideal.",
   "<1,7 mmol/L este ținta ideală a trigliceridelor.",
   "180/110 nu este ținta; coloana rezonabilă este <140/85.",
   "5,0 mmol/L este pragul rezonabil al colesterolului total, nu LDL-ul ideal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă coloana „ideal” cu valori din coloana „rezonabil” sau cu praguri net terapeutice."
  },
  "textbookExpressions": [
   "<130/80",
   "LDLc <2,0"
  ]
 },
 {
  "id": "diabet-adv-076",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Prevenția cardiovasculară medicamentoasă în diabet:",
  "options": [
   "IECA (sau BRA la intoleranță) reduc infarctul, AVC-ul, nefropatia manifestă și mortalitatea cardiovasculară cu 25–35% la cei cu cel puțin un factor major de risc",
   "Statinele sunt recomandate peste 40 de ani sau după 10 ani de evoluție dacă există complicații microvasculare; evenimentele scad cu 20% pentru fiecare 1 mmol/L de LDL",
   "Aspirina în doze mici este utilă în prevenția secundară; în Europa nu este recomandată în prevenția primară",
   "Aspirina se recomandă în prevenția primară europeană, riscul hemoragic fiind neglijabil",
   "Statinele se evită după 40 de ani, beneficiul apărând doar la adolescenți"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "IECA (sau BRA la intoleranță) reduc infarctul, AVC-ul, nefropatia manifestă și mortalitatea cardiovasculară cu 25–35% la cei cu cel puțin un factor major de risc — Corect: Reducerea 25–35% cu IECA la cei cu un factor major este explicită.\n\nStatinele sunt recomandate peste 40 de ani sau după 10 ani de evoluție dacă există complicații microvasculare; evenimentele scad cu 20% pentru fiecare 1 mmol/L de LDL — Corect: Regula vârstei/duratei și cei 20% per mmol/L de LDL sunt alăturate.\n\nAspirina în doze mici este utilă în prevenția secundară; în Europa nu este recomandată în prevenția primară — Corect: Distincția prevenție secundară versus primară (Europa) este clară.\n\nAspirina se recomandă în prevenția primară europeană, riscul hemoragic fiind neglijabil — Incorect: Textul nu recomandă aspirina în prevenția primară în Europa, tocmai din cauza hemoragiilor.\n\nStatinele se evită după 40 de ani, beneficiul apărând doar la adolescenți — Incorect: Statinele se recomandă tocmai după 40 de ani (sau 10 ani de boală cu microangiopatie).\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 734, 735, Complicațiile macrovasculare — Tratament (pagini PDF: 133, 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    734,
    735
   ],
   "pdfPages": [
    133,
    134
   ],
   "section": "Complicațiile macrovasculare — Tratament"
  },
  "learningObjective": "Separarea beneficiului IECA 25–35% de regula statinelor (>40 ani sau 10 ani) și de restricția europeană a aspirinei.",
  "optionRationales": [
   "Reducerea 25–35% cu IECA la cei cu un factor major este explicită.",
   "Regula vârstei/duratei și cei 20% per mmol/L de LDL sunt alăturate.",
   "Distincția prevenție secundară versus primară (Europa) este clară.",
   "Textul nu recomandă aspirina în prevenția primară în Europa, tocmai din cauza hemoragiilor.",
   "Statinele se recomandă tocmai după 40 de ani (sau 10 ani de boală cu microangiopatie)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează locul aspirinei (primară versus secundară) și al statinelor după 40 de ani."
  },
  "textbookExpressions": [
   "25-35%",
   "20% pentru fiecare reducere"
  ]
 },
 {
  "id": "diabet-adv-077",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Insuficiența cardiacă în diabet:",
  "options": [
   "Este mai frecventă decât boala cardiovasculară aterosclerotică; atât forma cu fracție păstrată, cât și cea redusă apar mai des",
   "Aproximativ două treimi dintre pacienții cu tip 2 au caractere de disfuncție ventriculară stângă la 5 ani de la diagnostic",
   "După instalare, doar circa 10% supraviețuiesc la 5 ani",
   "Prognosticul este benign, cu supraviețuire de 90% la 5 ani",
   "Inhibitorii SGLT2 cresc riscul de insuficiență cardiacă, spre deosebire de pioglitazonă care îl reduce"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este mai frecventă decât boala cardiovasculară aterosclerotică; atât forma cu fracție păstrată, cât și cea redusă apar mai des — Corect: Predominanța față de ASCVD și cele două fenotipuri sunt explicite.\n\nAproximativ două treimi dintre pacienții cu tip 2 au caractere de disfuncție ventriculară stângă la 5 ani de la diagnostic — Corect: Fracția de două treimi la 5 ani este cifra de disfuncție VS.\n\nDupă instalare, doar circa 10% supraviețuiesc la 5 ani — Corect: Supraviețuirea de 10% la 5 ani definește prognosticul rezervat.\n\nPrognosticul este benign, cu supraviețuire de 90% la 5 ani — Incorect: 10%, nu 90%, este supraviețuirea la 5 ani.\n\nInhibitorii SGLT2 cresc riscul de insuficiență cardiacă, spre deosebire de pioglitazonă care îl reduce — Incorect: Pioglitazona crește riscul; SGLT2 îl reduc — sensurile sunt inversate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 734, 735, Insuficiența cardiacă (pagini PDF: 133, 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    734,
    735
   ],
   "pdfPages": [
    133,
    134
   ],
   "section": "Insuficiența cardiacă"
  },
  "learningObjective": "Cuantificarea prevalenței precoce (2/3 la 5 ani) și a prognosticului rezervat (10% la 5 ani).",
  "optionRationales": [
   "Predominanța față de ASCVD și cele două fenotipuri sunt explicite.",
   "Fracția de două treimi la 5 ani este cifra de disfuncție VS.",
   "Supraviețuirea de 10% la 5 ani definește prognosticul rezervat.",
   "10%, nu 90%, este supraviețuirea la 5 ani.",
   "Pioglitazona crește riscul; SGLT2 îl reduc — sensurile sunt inversate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează cifra de supraviețuire 10%/90% și direcția efectului SGLT2 versus pioglitazonă asupra insuficienței cardiace."
  },
  "textbookExpressions": [
   "două treimi",
   "10% pacienţi"
  ]
 },
 {
  "id": "diabet-adv-078",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Steatoza hepatică non-alcoolică și diabetul:",
  "options": [
   "Este întâlnită la aproape o cincime din populația generală, cu prevalență crescută în tipul 2",
   "Peste o treime dintre pacienții cu steatoză hepatică non-alcoolică au diabet; este predictor independent pentru diabet și boală cardiovasculară",
   "Pioglitazona poate reduce țesutul adipos intrahepatic; tratamentul de bază rămâne scăderea ponderală și efortul",
   "Este absentă în tipul 2, fiind specifică tipului 1 autoimun",
   "Doar 1% din funcția pancreatică exocrină este suficientă pentru digestie normală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este întâlnită la aproape o cincime din populația generală, cu prevalență crescută în tipul 2 — Corect: Cincimea din populația generală și excesul din tipul 2 sunt explicite.\n\nPeste o treime dintre pacienții cu steatoză hepatică non-alcoolică au diabet; este predictor independent pentru diabet și boală cardiovasculară — Corect: Peste o treime și rolul de predictor independent sunt citate.\n\nPioglitazona poate reduce țesutul adipos intrahepatic; tratamentul de bază rămâne scăderea ponderală și efortul — Corect: Pioglitazona și măsurile de stil de viață sunt tratamentul descris.\n\nEste absentă în tipul 2, fiind specifică tipului 1 autoimun — Incorect: Prevalența crescută este în tipul 2, nu în tipul 1.\n\nDoar 1% din funcția pancreatică exocrină este suficientă pentru digestie normală — Incorect: Textul citează 10% din funcția exocrină, nu 1%, ca suficientă pentru digestie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 735, Afectarea hepatică non-alcoolică (pagini PDF: 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    735
   ],
   "pdfPages": [
    134
   ],
   "section": "Afectarea hepatică non-alcoolică"
  },
  "learningObjective": "Articularea prevalenței (1/5 populație, >1/3 cu diabet) cu rolul pioglitazonei asupra grăsimii hepatice.",
  "optionRationales": [
   "Cincimea din populația generală și excesul din tipul 2 sunt explicite.",
   "Peste o treime și rolul de predictor independent sunt citate.",
   "Pioglitazona și măsurile de stil de viață sunt tratamentul descris.",
   "Prevalența crescută este în tipul 2, nu în tipul 1.",
   "Textul citează 10% din funcția exocrină, nu 1%, ca suficientă pentru digestie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută steatoza spre tipul 1 și distorsionează pragul de 10% al funcției exocrine, de pe aceeași pagină."
  },
  "textbookExpressions": [
   "o cincime",
   "Peste o treime"
  ]
 },
 {
  "id": "diabet-adv-079",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Asocierea diabetului de tip 2 cu neoplasmul:",
  "options": [
   "Riscul de carcinom uterin și pancreatic este aproximativ dublu",
   "Există o creștere cu 20–50% a riscului de cancer colorectal și de sân",
   "Pacienții tratați cu metformin au un risc mai scăzut de cancer față de cei tratați cu alți agenți",
   "Riscul de cancer pancreatic este redus la jumătate, hiperglicemia fiind protectoare",
   "Metforminul crește riscul neoplazic față de sulfoniluree"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Riscul de carcinom uterin și pancreatic este aproximativ dublu — Corect: Dublarea riscului uterin și pancreatic este explicită.\n\nExistă o creștere cu 20–50% a riscului de cancer colorectal și de sân — Corect: Intervalul 20–50% pentru colorectal și sân este alăturat.\n\nPacienții tratați cu metformin au un risc mai scăzut de cancer față de cei tratați cu alți agenți — Corect: Observația privind metforminul și studiile antitumorale sunt menționate.\n\nRiscul de cancer pancreatic este redus la jumătate, hiperglicemia fiind protectoare — Incorect: Carcinomul pancreatic este crescut, cu element de cauzalitate inversă, nu redus.\n\nMetforminul crește riscul neoplazic față de sulfoniluree — Incorect: Metforminul este cel cu risc mai scăzut, nu mai crescut.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 735, Cancerul (pagini PDF: 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    735
   ],
   "pdfPages": [
    134
   ],
   "section": "Cancerul"
  },
  "learningObjective": "Reținerea dublării riscului uterin/pancreatic, a plusului 20–50% colorectal/sân și a semnalului protector al metforminului.",
  "optionRationales": [
   "Dublarea riscului uterin și pancreatic este explicită.",
   "Intervalul 20–50% pentru colorectal și sân este alăturat.",
   "Observația privind metforminul și studiile antitumorale sunt menționate.",
   "Carcinomul pancreatic este crescut, cu element de cauzalitate inversă, nu redus.",
   "Metforminul este cel cu risc mai scăzut, nu mai crescut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează direcția asocierii pancreatice și a semnalului metforminului, două observații din același paragraf."
  },
  "textbookExpressions": [
   "de două ori mai crescut",
   "20-50%"
  ]
 },
 {
  "id": "diabet-adv-080",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Infecțiile la persoanele cu diabet:",
  "options": [
   "Hiperglicemia favorizează infecțiile prin tulburări ale imunității înnăscute; imunitatea umorală pare relativ neafectată",
   "Otita externă malignă, pielonefrita emfizematoasă și fasceita necrozantă pot fi agravate de boala microvasculară",
   "Infecțiile urinare, micotice genitale, cutanate și tuberculoza sunt mai frecvente",
   "Imunitatea umorală este abolită, vaccinarea fiind inutilă",
   "Riscul de tuberculoză este redus, hiperglicemia fiind protectoare față de micobacterii"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hiperglicemia favorizează infecțiile prin tulburări ale imunității înnăscute; imunitatea umorală pare relativ neafectată — Corect: Contrastul înnăscut versus umoral este explicit.\n\nOtita externă malignă, pielonefrita emfizematoasă și fasceita necrozantă pot fi agravate de boala microvasculară — Corect: Cele trei infecții severe sunt listate.\n\nInfecțiile urinare, micotice genitale, cutanate și tuberculoza sunt mai frecvente — Corect: ITU, micoticele, pielea și TBC-ul sunt enumerate ca mai frecvente.\n\nImunitatea umorală este abolită, vaccinarea fiind inutilă — Incorect: Umoralul relativ păstrat nu susține inutilitatea vaccinării.\n\nRiscul de tuberculoză este redus, hiperglicemia fiind protectoare față de micobacterii — Incorect: Riscul de TBC este crescut, nu redus.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 735, Infecțiile (pagini PDF: 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    735
   ],
   "pdfPages": [
    134
   ],
   "section": "Infecțiile"
  },
  "learningObjective": "Separarea imunității înnăscute afectate de cea umorală relativ păstrată și recunoașterea infecțiilor severe specifice.",
  "optionRationales": [
   "Contrastul înnăscut versus umoral este explicit.",
   "Cele trei infecții severe sunt listate.",
   "ITU, micoticele, pielea și TBC-ul sunt enumerate ca mai frecvente.",
   "Umoralul relativ păstrat nu susține inutilitatea vaccinării.",
   "Riscul de TBC este crescut, nu redus."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde defectul imun la umoral (contrar textului) și inversează riscul de tuberculoză."
  },
  "textbookExpressions": [
   "otita externă malignă",
   "fasceita necrozantă"
  ]
 },
 {
  "id": "diabet-adv-081",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Alte asocieri digestive ale diabetului:",
  "options": [
   "Pacienții cu tip 1 au o prevalență mai crescută a bolii celiace",
   "Insuficiența pancreatică exocrină poate cauza malabsorbție; totuși doar 10% din funcție este necesară pentru digestie normală",
   "Tratamentul insuficienței exocrine se face cu insulină inhalatorie, nu cu enzime pancreatice",
   "Boala celiacă este aproape absentă în tipul 1, fiind specifică tipului 2",
   "Digestia normală cere 90% din funcția exocrină; 10% este incompatibil cu absorbția"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Pacienții cu tip 1 au o prevalență mai crescută a bolii celiace — Corect: Prevalența crescută a celiaciei în tipul 1 este explicită.\n\nInsuficiența pancreatică exocrină poate cauza malabsorbție; totuși doar 10% din funcție este necesară pentru digestie normală — Corect: Pragul de 10% explică de ce malabsorbția exocrină este neobișnuită.\n\nTratamentul insuficienței exocrine se face cu insulină inhalatorie, nu cu enzime pancreatice — Incorect: Textul recomandă enzime pancreatice, nu insulină inhalatorie.\n\nBoala celiacă este aproape absentă în tipul 1, fiind specifică tipului 2 — Incorect: Asocierea autoimună este cu tipul 1, nu cu tipul 2.\n\nDigestia normală cere 90% din funcția exocrină; 10% este incompatibil cu absorbția — Incorect: Textul precizează că 10% din funcție ajunge pentru digestie normală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 735, Manifestări gastrointestinale (pagini PDF: 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    735
   ],
   "pdfPages": [
    134
   ],
   "section": "Manifestări gastrointestinale"
  },
  "learningObjective": "Asocierea bolii celiace cu tipul 1 și a pragului de 10% al funcției exocrine.",
  "optionRationales": [
   "Prevalența crescută a celiaciei în tipul 1 este explicită.",
   "Pragul de 10% explică de ce malabsorbția exocrină este neobișnuită.",
   "Textul recomandă enzime pancreatice, nu insulină inhalatorie.",
   "Asocierea autoimună este cu tipul 1, nu cu tipul 2.",
   "Textul precizează că 10% din funcție ajunge pentru digestie normală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează asocierea celiacă (tip 1 versus 2) și pragul de 10% al funcției exocrine."
  },
  "textbookExpressions": [
   "bolii celiace",
   "10% din func"
  ]
 },
 {
  "id": "diabet-adv-082",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Conversia de la insulina intravenoasă la cea subcutanată după CAD se face când pacientul:",
  "options": [
   "Este stabil biochimic (cetonemie sub 0,6 mmol/L, pH peste 7,3) și capabil să se alimenteze",
   "Primește un bolus subcutanat la masă; dacă bazala a fost continuată, infuzia se oprește la 30 de minute după masă",
   "Dacă bazala a fost oprită, infuzia i.v. continuă până se administrează o insulină bazală",
   "Se oprește orice insulină timp de 24 de ore după prima masă",
   "Cetonemia de 3 mmol/L și pH 7,1 permit deja oprirea infuziei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este stabil biochimic (cetonemie sub 0,6 mmol/L, pH peste 7,3) și capabil să se alimenteze — Corect: Aceste praguri biochimice și capacitatea de a mânca sunt condițiile de conversie.\n\nPrimește un bolus subcutanat la masă; dacă bazala a fost continuată, infuzia se oprește la 30 de minute după masă — Corect: Fereastra de 30 de minute după masă, dacă bazala a rulat, este explicită.\n\nDacă bazala a fost oprită, infuzia i.v. continuă până se administrează o insulină bazală — Corect: Reluarea bazalei înainte de oprirea infuziei evită golul de insulină.\n\nSe oprește orice insulină timp de 24 de ore după prima masă — Incorect: Oprirea oricărei insuline reprecipită CAD.\n\nCetonemia de 3 mmol/L și pH 7,1 permit deja oprirea infuziei — Incorect: Cetonemia de 3 mmol/L și pH 7,1 definesc încă CAD, nu conversia.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 724, 725, Conversia la administrarea subcutanată de insulină (pagini PDF: 123, 124).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    724,
    725
   ],
   "pdfPages": [
    123,
    124
   ],
   "section": "Conversia la administrarea subcutanată de insulină"
  },
  "learningObjective": "Aplicarea pragurilor cetonemie <0,6 mmol/L și pH >7,3 plus regula celor 30 de minute după bolusul prandial.",
  "optionRationales": [
   "Aceste praguri biochimice și capacitatea de a mânca sunt condițiile de conversie.",
   "Fereastra de 30 de minute după masă, dacă bazala a rulat, este explicită.",
   "Reluarea bazalei înainte de oprirea infuziei evită golul de insulină.",
   "Oprirea oricărei insuline reprecipită CAD.",
   "Cetonemia de 3 mmol/L și pH 7,1 definesc încă CAD, nu conversia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Folosește pragurile de diagnostic ale CAD ca și criterii de oprire a infuziei, inversul condițiilor de conversie."
  },
  "textbookExpressions": [
   "0,6 mmol/L",
   "30 minute după masă"
  ]
 },
 {
  "id": "diabet-adv-083",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Diabetul zaharat, ca tulburare endocrină, este descris în text ca:",
  "options": [
   "Cea mai răspândită și importantă din punct de vedere clinic, afectând aproximativ 10% din populația adultă din majoritatea țărilor",
   "O urgență rar întâlnită, fără internări",
   "O boală limitată la copii, fără complicații cardiovasculare",
   "O afecțiune acută autolimitată, fără echipă multidisciplinară",
   "O specialitate chirurgicală, fără medicină internă"
  ],
  "correct": [
   0
  ],
  "explanation": "Cea mai răspândită și importantă din punct de vedere clinic, afectând aproximativ 10% din populația adultă din majoritatea țărilor — Corect: Aceasta este fraza de deschidere a capitolului.\n\nO urgență rar întâlnită, fără internări — Incorect: Urgențele diabetice sunt cauze frecvente de internare.\n\nO boală limitată la copii, fără complicații cardiovasculare — Incorect: Complicațiile CV, renale, oculare și neurologice limitează speranța de viață.\n\nO afecțiune acută autolimitată, fără echipă multidisciplinară — Incorect: Textul subliniază caracterul cronic și rolul echipei multidisciplinare.\n\nO specialitate chirurgicală, fără medicină internă — Incorect: Consultanții sunt instruiți în diabet, endocrinologie și medicină internă generală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 699, Introducere — Aptitudini și noțiuni de bază (pagini PDF: 98).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    699
   ],
   "pdfPages": [
    98
   ],
   "section": "Introducere — Aptitudini și noțiuni de bază"
  },
  "learningObjective": "Reținerea formulării de „cea mai răspândită tulburare endocrină” și a prevalenței de circa 10% la adulți.",
  "optionRationales": [
   "Aceasta este fraza de deschidere a capitolului.",
   "Urgențele diabetice sunt cauze frecvente de internare.",
   "Complicațiile CV, renale, oculare și neurologice limitează speranța de viață.",
   "Textul subliniază caracterul cronic și rolul echipei multidisciplinare.",
   "Consultanții sunt instruiți în diabet, endocrinologie și medicină internă generală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Preluarea cifrei de 10% din prima frază, cu distractori care neagă internarea și caracterul cronic."
  },
  "textbookExpressions": [
   "10% din populaţia adultă",
   "tulburarea endocrină"
  ]
 },
 {
  "id": "diabet-adv-084",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Anamneza din cadranul 23.1 include, printre altele:",
  "options": [
   "Dacă pacientul este conducător auto sau are activități cu risc crescut în caz de hipoglicemie",
   "Dacă își monitorizează glicemia capilară sau glucoza interstițială și ține un jurnal",
   "Lungimea acelor folosite pentru injectarea insulinei și rotația locurilor",
   "Omiterea oricărei întrebări despre hipoglicemie, aceasta nefiind relevantă",
   "Înlocuirea istoricului de urgențe cu un singur IMC, suficient pentru tot riscul"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Dacă pacientul este conducător auto sau are activități cu risc crescut în caz de hipoglicemie — Corect: Conducerea și activitățile cu risc figurează explicit.\n\nDacă își monitorizează glicemia capilară sau glucoza interstițială și ține un jurnal — Corect: Monitorizarea capilară/interstițială și jurnalul sunt rubrici distincte.\n\nLungimea acelor folosite pentru injectarea insulinei și rotația locurilor — Corect: Lungimea acelor și rotația locurilor sunt întrebări de tratament.\n\nOmiterea oricărei întrebări despre hipoglicemie, aceasta nefiind relevantă — Incorect: Episoadele de hipoglicemie și nevoia de ajutor extern sunt itemi centrali.\n\nÎnlocuirea istoricului de urgențe cu un singur IMC, suficient pentru tot riscul — Incorect: IMC-ul ține de evaluarea anuală; anamneza rămâne multidimensională.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 700, Cadranul 23.1 — Anamneza în diabet (pagini PDF: 99).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    700
   ],
   "pdfPages": [
    99
   ],
   "section": "Cadranul 23.1 — Anamneza în diabet"
  },
  "learningObjective": "Recunoașterea itemilor de siguranță (conducere, jurnal, ace) din anamneza standard.",
  "optionRationales": [
   "Conducerea și activitățile cu risc figurează explicit.",
   "Monitorizarea capilară/interstițială și jurnalul sunt rubrici distincte.",
   "Lungimea acelor și rotația locurilor sunt întrebări de tratament.",
   "Episoadele de hipoglicemie și nevoia de ajutor extern sunt itemi centrali.",
   "IMC-ul ține de evaluarea anuală; anamneza rămâne multidimensională."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Taie din cadran tocmai itemii de siguranță (conducere, hipoglicemie), păstrând restul plauzibil."
  },
  "textbookExpressions": [
   "conducători auto",
   "lungime au acele"
  ]
 },
 {
  "id": "diabet-adv-085",
  "topicId": "diabet",
  "type": "CM",
  "stem": "La examenul de picior (cadranul 23.3), semnele de boală vasculară periferică includ:",
  "options": [
   "Paloare sau decolorare și pierderea părului",
   "Tegumente reci și pulsuri periferice absente",
   "Timp redus de reumplere capilară și semne de gangrenă sau infecție",
   "Tegumente calde, cu pulsuri vizibile, ca în neuropatia pură",
   "Piele uscată hiperemică, fără evaluare a pulsurilor"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Paloare sau decolorare și pierderea părului — Corect: Paloarea și pierderea părului sunt primele caracteristici listate.\n\nTegumente reci și pulsuri periferice absente — Corect: Tegumentele reci și absența pulsurilor continuă lista.\n\nTimp redus de reumplere capilară și semne de gangrenă sau infecție — Corect: Reumplerea capilară redusă și gangrena/infecția închid rubricile vasculare.\n\nTegumente calde, cu pulsuri vizibile, ca în neuropatia pură — Incorect: Tegumentele calde cu pulsuri vizibile caracterizează piciorul neuropat, nu ischemia.\n\nPiele uscată hiperemică, fără evaluare a pulsurilor — Incorect: Evaluarea pulsurilor, începând de la picior, este cerută explicit.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 700, Cadranul 23.3 — Examenul de picior (pagini PDF: 99).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    700
   ],
   "pdfPages": [
    99
   ],
   "section": "Cadranul 23.3 — Examenul de picior"
  },
  "learningObjective": "Reținerea constellationii ischemice (paloare, tegumente reci, pulsuri absente, reumplere redusă).",
  "optionRationales": [
   "Paloarea și pierderea părului sunt primele caracteristici listate.",
   "Tegumentele reci și absența pulsurilor continuă lista.",
   "Reumplerea capilară redusă și gangrena/infecția închid rubricile vasculare.",
   "Tegumentele calde cu pulsuri vizibile caracterizează piciorul neuropat, nu ischemia.",
   "Evaluarea pulsurilor, începând de la picior, este cerută explicit."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează tabloul ischemic cu cel neuropat din cadranul de diferențiere de mai târziu."
  },
  "textbookExpressions": [
   "Paloare, decolorare",
   "Timp redus de reumplere"
  ]
 },
 {
  "id": "diabet-adv-086",
  "topicId": "diabet",
  "type": "CM",
  "stem": "La examenul obiectiv, semnele cutanate și osteoarticulare asociate diabetului includ:",
  "options": [
   "Contractură Dupuytren și limitarea mobilității articulare",
   "Granuloame anulare și buloza diabetică",
   "Vitiligo și acanthosis nigricans axilar",
   "Eritem nodos ca semn patognomonic de tip 1",
   "Psoriazis palmoplantar ca marker de deficit absolut de insulină"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Contractură Dupuytren și limitarea mobilității articulare — Corect: Dupuytren și limitarea mobilității articulare figurează la mâini.\n\nGranuloame anulare și buloza diabetică — Corect: Granuloamele anulare și buloza diabetică sunt listate la tegumente.\n\nVitiligo și acanthosis nigricans axilar — Corect: Vitiligo (autoimun, tip 1) și acanthosis (insulinorezistență) sunt juxtapuse.\n\nEritem nodos ca semn patognomonic de tip 1 — Incorect: Eritemul nodos nu este semnul cutanat din această figură.\n\nPsoriazis palmoplantar ca marker de deficit absolut de insulină — Incorect: Psoriazisul nu orientează spre deficitul absolut de insulină.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 701, 700, Examenul obiectiv — Tegumente; Mâini (pagini PDF: 100, 99).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    701,
    700
   ],
   "pdfPages": [
    100,
    99
   ],
   "section": "Examenul obiectiv — Tegumente; Mâini"
  },
  "learningObjective": "Separarea semnelor autoimune (vitiligo) de cele de rezistență (acanthosis) și de Dupuytren/buloza.",
  "optionRationales": [
   "Dupuytren și limitarea mobilității articulare figurează la mâini.",
   "Granuloamele anulare și buloza diabetică sunt listate la tegumente.",
   "Vitiligo (autoimun, tip 1) și acanthosis (insulinorezistență) sunt juxtapuse.",
   "Eritemul nodos nu este semnul cutanat din această figură.",
   "Psoriazisul nu orientează spre deficitul absolut de insulină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește Dupuytren/buloza cu dermatoze din alte capitole, păstrând registrul cutanat."
  },
  "textbookExpressions": [
   "Contractură Dupuytren",
   "Buloza diabetică"
  ]
 },
 {
  "id": "diabet-adv-087",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Secreția de insulină la nivelul celulei beta este declanșată astfel:",
  "options": [
   "Glucoza intră prin GLUT-2, strâns asociat cu glucokinaza",
   "ATP-ul rezultat închide canalele de potasiu, cu depolarizare și influx de calciu",
   "Creșterea calciului activează protein-kinaza dependentă de Ca2+ și exocitoza granulelor de insulină",
   "Glucoza iese prin GLUT-4 al celulei beta, fără glucokinază",
   "Canalele de potasiu se deschid sub ATP, hiperpolarizând membrana și blocând calciul"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Glucoza intră prin GLUT-2, strâns asociat cu glucokinaza — Corect: Intrarea prin GLUT-2 și cuplajul cu glucokinaza deschid figura.\n\nATP-ul rezultat închide canalele de potasiu, cu depolarizare și influx de calciu — Corect: Închiderea canalelor de K+ și influxul de Ca2+ sunt pașii a și b.\n\nCreșterea calciului activează protein-kinaza dependentă de Ca2+ și exocitoza granulelor de insulină — Corect: Protein-kinaza dependentă de calciu duce la fuziunea granulelor.\n\nGlucoza iese prin GLUT-4 al celulei beta, fără glucokinază — Incorect: GLUT-4 este transportorul periferic (mușchi/adipos), nu al celulei beta.\n\nCanalele de potasiu se deschid sub ATP, hiperpolarizând membrana și blocând calciul — Incorect: ATP închide, nu deschide, canalele de K+.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 705, Fig. 23.4 — Reglarea secreției de insulină (pagini PDF: 104).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    705
   ],
   "pdfPages": [
    104
   ],
   "section": "Fig. 23.4 — Reglarea secreției de insulină"
  },
  "learningObjective": "Succesiunea GLUT-2 → glucokinază → ATP → închiderea K+ → Ca2+ → exocitoză.",
  "optionRationales": [
   "Intrarea prin GLUT-2 și cuplajul cu glucokinaza deschid figura.",
   "Închiderea canalelor de K+ și influxul de Ca2+ sunt pașii a și b.",
   "Protein-kinaza dependentă de calciu duce la fuziunea granulelor.",
   "GLUT-4 este transportorul periferic (mușchi/adipos), nu al celulei beta.",
   "ATP închide, nu deschide, canalele de K+."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează GLUT-2/GLUT-4 și sensul efectului ATP asupra canalelor de K+."
  },
  "textbookExpressions": [
   "GLUT-2",
   "glucokinază"
  ]
 },
 {
  "id": "diabet-adv-088",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Diabetul de tip 1, conform datelor din 2017:",
  "options": [
   "Peste un milion de copii și adolescenți aveau tip 1, cu circa 132.600 de cazuri noi pe an",
   "Incidența maximă este în jurul pubertății, dar se poate întâlni la orice vârstă",
   "Cele mai mari rate sunt în nordul Europei și în Orientul Mijlociu",
   "LADA este varianta cu progresie lentă a deficitului de insulină, apărută mai târziu în viață",
   "Tipul 1B (non-mediat imun) reprezintă marea majoritate în țările occidentale"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Peste un milion de copii și adolescenți aveau tip 1, cu circa 132.600 de cazuri noi pe an — Corect: Cifrele 1 milion și 132.600 sunt explicite.\n\nIncidența maximă este în jurul pubertății, dar se poate întâlni la orice vârstă — Corect: Vârful pubertar cu posibilitate la orice vârstă este descris.\n\nCele mai mari rate sunt în nordul Europei și în Orientul Mijlociu — Corect: Geografia nord-europeană și a Orientului Mijlociu este citată.\n\nLADA este varianta cu progresie lentă a deficitului de insulină, apărută mai târziu în viață — Corect: Definiția LADA este dată în încheiere.\n\nTipul 1B (non-mediat imun) reprezintă marea majoritate în țările occidentale — Incorect: Marea majoritate în Occident au tipul 1A (mediat imun), nu 1B.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 705, Diabetul de tip 1 — Epidemiologie; LADA (pagini PDF: 104).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    705
   ],
   "pdfPages": [
    104
   ],
   "section": "Diabetul de tip 1 — Epidemiologie; LADA"
  },
  "learningObjective": "Cuantificarea poverii pediatrice 2017 și recunoașterea LADA ca progresie lentă, distinctă de 1A dominant occidental.",
  "optionRationales": [
   "Cifrele 1 milion și 132.600 sunt explicite.",
   "Vârful pubertar cu posibilitate la orice vârstă este descris.",
   "Geografia nord-europeană și a Orientului Mijlociu este citată.",
   "Definiția LADA este dată în încheiere.",
   "Marea majoritate în Occident au tipul 1A (mediat imun), nu 1B."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ponderea 1A/1B occidentală, deși textul o precizează imediat după clasificare."
  },
  "textbookExpressions": [
   "un milion de copii",
   "LADA"
  ]
 },
 {
  "id": "diabet-adv-089",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Ghidul nutrițional din cadranul 23.10 încurajează, printre altele:",
  "options": [
   "Reducerea consumului de sare la <6 g/zi",
   "Consumul a două porții de pește gras pe săptămână",
   "Limitarea alcoolului la ≤14 unități/săptămână",
   "Creșterea cărnii roșii procesate și a băuturilor îndulcite",
   "Sarea nerestricționată, alcoolul fără plafon săptămânal"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Reducerea consumului de sare la <6 g/zi — Corect: Pragul <6 g/zi de sare este o caracteristică esențială a dietei mediteraneene citate.\n\nConsumul a două porții de pește gras pe săptămână — Corect: Cele două porții de pește gras pe săptămână sunt listate.\n\nLimitarea alcoolului la ≤14 unități/săptămână — Corect: Plafonul ≤14 unități/săptămână închide lista.\n\nCreșterea cărnii roșii procesate și a băuturilor îndulcite — Incorect: Textul cere reducerea cărnii roșii procesate și a băuturilor îndulcite.\n\nSarea nerestricționată, alcoolul fără plafon săptămânal — Incorect: Atât sarea cât și alcoolul au plafoane explicite.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 713, Cadranul 23.10 — Ghiduri nutriționale (pagini PDF: 112).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    713
   ],
   "pdfPages": [
    112
   ],
   "section": "Cadranul 23.10 — Ghiduri nutriționale"
  },
  "learningObjective": "Reținerea triadei sare <6 g, două porții de pește gras și ≤14 unități de alcool.",
  "optionRationales": [
   "Pragul <6 g/zi de sare este o caracteristică esențială a dietei mediteraneene citate.",
   "Cele două porții de pește gras pe săptămână sunt listate.",
   "Plafonul ≤14 unități/săptămână închide lista.",
   "Textul cere reducerea cărnii roșii procesate și a băuturilor îndulcite.",
   "Atât sarea cât și alcoolul au plafoane explicite."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele trei praguri numerice stau în aceeași listă; distractorii inversează direcția alimentelor „de evitat”."
  },
  "textbookExpressions": [
   "<6 g/zi",
   "14 unită"
  ]
 },
 {
  "id": "diabet-adv-090",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Tratamentul imediat al hipoglicemiei conștiente se face cu:",
  "options": [
   "15–20 g glucoză orală, repetate după 15 minute dacă glicemia nu a crescut peste 4,0 mmol/L",
   "2 g de sucroză, o singură dată, fără reevaluare",
   "500 ml glucoză 50% oral, pentru a evita recurența",
   "Insulină rapidă, pentru a „echilibra” evenimentul",
   "Oprirea oricărui aport de carbohidrați până a doua zi"
  ],
  "correct": [
   0
  ],
  "explanation": "15–20 g glucoză orală, repetate după 15 minute dacă glicemia nu a crescut peste 4,0 mmol/L — Corect: Doza, intervalul și pragul 4,0 mmol/L sunt explicite; nu se dau mai mulți carbohidrați decât este necesar.\n\n2 g de sucroză, o singură dată, fără reevaluare — Incorect: 2 g este sub doza citată.\n\n500 ml glucoză 50% oral, pentru a evita recurența — Incorect: Excesul de carbohidrați este descurajat, pentru a preveni rebound-ul hiperglicemic.\n\nInsulină rapidă, pentru a „echilibra” evenimentul — Incorect: Insulina agravează hipoglicemia.\n\nOprirea oricărui aport de carbohidrați până a doua zi — Incorect: După recuperare se dau carbohidrați cu acțiune mai lungă, pentru glicogen.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 717, Tratamentul hipoglicemiei (pagini PDF: 116).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    717
   ],
   "pdfPages": [
    116
   ],
   "section": "Tratamentul hipoglicemiei"
  },
  "learningObjective": "Aplicarea dozei 15–20 g și a reevaluării la 15 minute față de pragul 4,0 mmol/L.",
  "optionRationales": [
   "Doza, intervalul și pragul 4,0 mmol/L sunt explicite; nu se dau mai mulți carbohidrați decât este necesar.",
   "2 g este sub doza citată.",
   "Excesul de carbohidrați este descurajat, pentru a preveni rebound-ul hiperglicemic.",
   "Insulina agravează hipoglicemia.",
   "După recuperare se dau carbohidrați cu acțiune mai lungă, pentru glicogen."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "15–20 g și 15 minute/4,0 mmol/L trebuie ținute împreună; distractorii schimbă ordinul de mărime."
  },
  "textbookExpressions": [
   "15-20 g glucoză",
   "peste 4,0 mmol/l"
  ]
 },
 {
  "id": "diabet-adv-091",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Glucagonul intramuscular în hipoglicemia severă:",
  "options": [
   "Acționează prin mobilizarea glicogenului hepatic și funcționează aproape la fel de rapid ca glucoza",
   "Poate fi administrat și acasă, de către aparținători",
   "Nu funcționează când glicogenul hepatic este scăzut, de exemplu după un post prelungit",
   "Odată revenit, pacientul trebuie să consume carbohidrați cu acțiune mai lungă, pentru a reînnoi rezervele de glicogen",
   "Este ineficace la domiciliu și se rezervă doar sălii de operație"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Acționează prin mobilizarea glicogenului hepatic și funcționează aproape la fel de rapid ca glucoza — Corect: Mecanismul și viteza comparabilă cu glucoza sunt explicite.\n\nPoate fi administrat și acasă, de către aparținători — Corect: Simplitatea administrării la domiciliu este subliniată.\n\nNu funcționează când glicogenul hepatic este scăzut, de exemplu după un post prelungit — Corect: Postul prelungit (glicogen hepatic scăzut) este excepția de ineficacitate.\n\nOdată revenit, pacientul trebuie să consume carbohidrați cu acțiune mai lungă, pentru a reînnoi rezervele de glicogen — Corect: Carbohidrații cu acțiune lungă după revenire reînnoiesc glicogenul.\n\nEste ineficace la domiciliu și se rezervă doar sălii de operație — Incorect: Textul precizează tocmai că administrarea este simplă și posibilă acasă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 717, Hipoglicemia severă — Glucagon (pagini PDF: 116).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    717
   ],
   "pdfPages": [
    116
   ],
   "section": "Hipoglicemia severă — Glucagon"
  },
  "learningObjective": "Articularea mecanismului glicogenic, a administrării la domiciliu și a eșecului după post prelungit.",
  "optionRationales": [
   "Mecanismul și viteza comparabilă cu glucoza sunt explicite.",
   "Simplitatea administrării la domiciliu este subliniată.",
   "Postul prelungit (glicogen hepatic scăzut) este excepția de ineficacitate.",
   "Carbohidrații cu acțiune lungă după revenire reînnoiesc glicogenul.",
   "Textul precizează tocmai că administrarea este simplă și posibilă acasă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă administrarea la domiciliu — avantajul practic pe care textul îl opune glucozei i.v."
  },
  "textbookExpressions": [
   "glicogenului hepatic",
   "post prelungit"
  ]
 },
 {
  "id": "diabet-adv-092",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Metforminul: mecanism, eficacitate și contraindicații:",
  "options": [
   "Poate implica activarea AMP-kinazei; reduce gluconeogeneza hepatică și crește sensibilitatea la insulină, fără a induce hipoglicemie",
   "Scade glicemia bazală cu 2–4 mmol/L, corespunzând unei scăderi HbA1c de 11–22 mmol/mol (1–2%)",
   "Nu se inițiază la RFGe <45 ml/min/1,73 m² și se oprește sub 30 ml/min/1,73 m²",
   "Se oprește înaintea contrastului iodat i.v. și se reia după 48 de ore dacă funcția renală nu s-a deteriorat",
   "Induce hipoglicemie severă de rutină și se inițiază indiferent de RFGe"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Poate implica activarea AMP-kinazei; reduce gluconeogeneza hepatică și crește sensibilitatea la insulină, fără a induce hipoglicemie — Corect: Mecanismul AMPK și absența hipoglicemiei sunt descrise.\n\nScade glicemia bazală cu 2–4 mmol/L, corespunzând unei scăderi HbA1c de 11–22 mmol/mol (1–2%) — Corect: Cifrele 2–4 mmol/L și 11–22 mmol/mol sunt cele de eficacitate.\n\nNu se inițiază la RFGe <45 ml/min/1,73 m² și se oprește sub 30 ml/min/1,73 m² — Corect: Cele două praguri RFGe sunt explicite.\n\nSe oprește înaintea contrastului iodat i.v. și se reia după 48 de ore dacă funcția renală nu s-a deteriorat — Corect: Regula contrastului iodat și a reluarii la 48 de ore este citată.\n\nInduce hipoglicemie severă de rutină și se inițiază indiferent de RFGe — Incorect: Metforminul nu induce hipoglicemie și are praguri clare de RFGe.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 717, Biguanidele: metforminul (pagini PDF: 116).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    717
   ],
   "pdfPages": [
    116
   ],
   "section": "Biguanidele: metforminul"
  },
  "learningObjective": "Integrarea pragurilor RFGe 45/30, a ferestrei de 48 de ore post-contrast și a magnitudinii 2–4 mmol/L.",
  "optionRationales": [
   "Mecanismul AMPK și absența hipoglicemiei sunt descrise.",
   "Cifrele 2–4 mmol/L și 11–22 mmol/mol sunt cele de eficacitate.",
   "Cele două praguri RFGe sunt explicite.",
   "Regula contrastului iodat și a reluarii la 48 de ore este citată.",
   "Metforminul nu induce hipoglicemie și are praguri clare de RFGe."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "45 versus 30 ml/min se inversează ușor; distractorul adaugă o hipoglicemie pe care textul o neagă."
  },
  "textbookExpressions": [
   "45 ml/min/1,73m2",
   "48 de ore"
  ]
 },
 {
  "id": "diabet-adv-093",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Metforminul reduce absorbția gastrointestinală a vitaminei:",
  "options": [
   "A",
   "D",
   "B12, dar produce rar anemie",
   "K",
   "C, cu scorbut de rutină"
  ],
  "correct": [
   2
  ],
  "explanation": "A — Incorect: Vitamina A nu este citată.\n\nD — Incorect: Vitamina D nu este citată aici.\n\nB12, dar produce rar anemie — Corect: Reducerea absorbției de B12, cu anemie rară, este precizarea din text.\n\nK — Incorect: Vitamina K nu figurează.\n\nC, cu scorbut de rutină — Incorect: Scorbutul nu este efectul descris.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 717, Metformin — Efecte adverse (pagini PDF: 116).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    717
   ],
   "pdfPages": [
    116
   ],
   "section": "Metformin — Efecte adverse"
  },
  "learningObjective": "Reținerea interferenței cu B12, distinctă de riscul (rar) de anemie.",
  "optionRationales": [
   "Vitamina A nu este citată.",
   "Vitamina D nu este citată aici.",
   "Reducerea absorbției de B12, cu anemie rară, este precizarea din text.",
   "Vitamina K nu figurează.",
   "Scorbutul nu este efectul descris."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "B12 este unica vitamină numită; distractorii sunt vitamine plauzibile din alte contexte de malabsorbție."
  },
  "textbookExpressions": [
   "vitaminei B12",
   "produce rar anemie"
  ]
 },
 {
  "id": "diabet-adv-094",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Sulfonilureele, ca efecte nedorite și supraveghere:",
  "options": [
   "Creșterea în greutate este de obicei 1–4 kg; hipoglicemia afectează circa o cincime dintre cei tratați",
   "Hipoglicemia severă indusă de sulfoniluree trebuie supravegheată în spital 48 de ore, cu glucoză până la eliminarea medicamentului",
   "Riscul de hipoglicemie crește la derivații cu acțiune mai lungă, alcool excesiv, vârstă înaintată și infecții intercurente",
   "Nu au efect la tipul 1, lipsind masa de celule beta funcționale",
   "Hipoglicemia severă se externează imediat, fără supraveghere, medicamentul fiind inactiv în 30 de minute"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Creșterea în greutate este de obicei 1–4 kg; hipoglicemia afectează circa o cincime dintre cei tratați — Corect: 1–4 kg și o cincime sunt cifrele de tolerabilitate.\n\nHipoglicemia severă indusă de sulfoniluree trebuie supravegheată în spital 48 de ore, cu glucoză până la eliminarea medicamentului — Corect: Cele 48 de ore de supraveghere sunt explicite.\n\nRiscul de hipoglicemie crește la derivații cu acțiune mai lungă, alcool excesiv, vârstă înaintată și infecții intercurente — Corect: Lista de factori care cresc riscul este enumerată.\n\nNu au efect la tipul 1, lipsind masa de celule beta funcționale — Corect: Ineficacitatea în tipul 1, prin lipsa celulelor beta, este mecanismul.\n\nHipoglicemia severă se externează imediat, fără supraveghere, medicamentul fiind inactiv în 30 de minute — Incorect: Eliminarea lentă impune tocmai supravegherea de 48 de ore, nu externarea imediată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 718, 717, Sulfonilureele — Efecte adverse (pagini PDF: 117, 116).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    718,
    717
   ],
   "pdfPages": [
    117,
    116
   ],
   "section": "Sulfonilureele — Efecte adverse"
  },
  "learningObjective": "Cuantificarea hipoglicemiei (o cincime) și a ferestrei de 48 de ore de supraveghere spitalicească.",
  "optionRationales": [
   "1–4 kg și o cincime sunt cifrele de tolerabilitate.",
   "Cele 48 de ore de supraveghere sunt explicite.",
   "Lista de factori care cresc riscul este enumerată.",
   "Ineficacitatea în tipul 1, prin lipsa celulelor beta, este mecanismul.",
   "Eliminarea lentă impune tocmai supravegherea de 48 de ore, nu externarea imediată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "48 de ore (supraveghere) se confundă cu dispariția „în 30 de minute” a unei hipoglicemii cu insulină rapidă."
  },
  "textbookExpressions": [
   "o cincime",
   "48 de ore"
  ]
 },
 {
  "id": "diabet-adv-095",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Meglitinidele (insulinosecretagoge post-prandiale):",
  "options": [
   "Închid canalul K+-ATP în celulele beta, ca sulfonilureele",
   "Sunt metabolizate rapid, cu durată de acțiune sub 3 ore",
   "Pot fi utile la vârstnicii fragili, unde evitarea hipoglicemiei este imperioasă",
   "Au durată de 24 de ore, superioară glibenclamidului",
   "Sunt mai eficiente decât celelalte orale, cu rol bine stabilit ca primă linie universală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Închid canalul K+-ATP în celulele beta, ca sulfonilureele — Corect: Mecanismul comun cu sulfonilureele este explicit.\n\nSunt metabolizate rapid, cu durată de acțiune sub 3 ore — Corect: Durata sub 3 ore este cifra cheie.\n\nPot fi utile la vârstnicii fragili, unde evitarea hipoglicemiei este imperioasă — Corect: Utilitatea la vârstnicii fragili este menționată.\n\nAu durată de 24 de ore, superioară glibenclamidului — Incorect: Durata scurtă, nu 24 de ore, le deosebește.\n\nSunt mai eficiente decât celelalte orale, cu rol bine stabilit ca primă linie universală — Incorect: Textul le consideră mai puțin eficiente, cu rol neclar.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 718, Meglitinidele (pagini PDF: 117).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    718
   ],
   "pdfPages": [
    117
   ],
   "section": "Meglitinidele"
  },
  "learningObjective": "Reținerea duratei <3 ore și a nișei geriatric-fragile, distincte de pretenția de primă linie.",
  "optionRationales": [
   "Mecanismul comun cu sulfonilureele este explicit.",
   "Durata sub 3 ore este cifra cheie.",
   "Utilitatea la vârstnicii fragili este menționată.",
   "Durata scurtă, nu 24 de ore, le deosebește.",
   "Textul le consideră mai puțin eficiente, cu rol neclar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde durata scurtă la 24 de ore și le promovează ca primă linie, contrar evaluării din text."
  },
  "textbookExpressions": [
   "mai mică de 3 ore",
   "persoanele în vârstă, fragile"
  ]
 },
 {
  "id": "diabet-adv-096",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Pioglitazona (tiazolidindione):",
  "options": [
   "Reduce rezistența la insulină prin PPAR-γ; efectul maxim pe glucoză poate dura până la 3 luni",
   "Creșterea în greutate de 5–6 kg este cel mai frecvent efect advers; retenția de fluide poate precipita insuficiența cardiacă",
   "Poate fi benefică în steatoza hepatică non-alcoolică",
   "Troglitazona rămâne de primă alegere, fără toxicitate hepatică",
   "Efectul pe glucoză este imediat, în minute, ca al analogilor rapizi"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Reduce rezistența la insulină prin PPAR-γ; efectul maxim pe glucoză poate dura până la 3 luni — Corect: Receptorul PPAR-γ și întârzierea de până la 3 luni sunt explicite.\n\nCreșterea în greutate de 5–6 kg este cel mai frecvent efect advers; retenția de fluide poate precipita insuficiența cardiacă — Corect: 5–6 kg și retenția de fluide/IC sunt efectele adverse centrale.\n\nPoate fi benefică în steatoza hepatică non-alcoolică — Corect: Beneficiul în NAFLD este menționat.\n\nTroglitazona rămâne de primă alegere, fără toxicitate hepatică — Incorect: Troglitazona a fost retrasă pentru toxicitate hepatică.\n\nEfectul pe glucoză este imediat, în minute, ca al analogilor rapizi — Incorect: Efectul este indirect, lent, nu imediat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 718, Tiazolidindionele sau „glitazonele” (pagini PDF: 117).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    718
   ],
   "pdfPages": [
    117
   ],
   "section": "Tiazolidindionele sau „glitazonele”"
  },
  "learningObjective": "Asocierea PPAR-γ și a ferestrei de 3 luni cu toxicitatea de retenție/IC și cu nișa NAFLD.",
  "optionRationales": [
   "Receptorul PPAR-γ și întârzierea de până la 3 luni sunt explicite.",
   "5–6 kg și retenția de fluide/IC sunt efectele adverse centrale.",
   "Beneficiul în NAFLD este menționat.",
   "Troglitazona a fost retrasă pentru toxicitate hepatică.",
   "Efectul este indirect, lent, nu imediat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "3 luni (maxim) versus minute (analogi rapizi) este contrastul de cinetică; distractorul reînvie troglitazona retrasă."
  },
  "textbookExpressions": [
   "până la 3 luni",
   "5-6 kg"
  ]
 },
 {
  "id": "diabet-adv-097",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Agoniștii receptorilor de GLP-1:",
  "options": [
   "Nu trebuie combinați cu inhibitori DPP-4, inhibitorul neconferind beneficiu suplimentar",
   "Studiile head-to-head arată scăderi HbA1c de 9–19 mmol/mol (0,8–1,8%) și ponderale de 0,6–4,3 kg",
   "Nu trebuie folosiți la persoane cu antecedente de pancreatită, crescând riscul de pancreatită acută",
   "Se asociază de rutină cu un DPP-4, pentru sinergie incretinică maximă",
   "Sunt contraindicate în obezitate, deoarece cresc greutatea"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Nu trebuie combinați cu inhibitori DPP-4, inhibitorul neconferind beneficiu suplimentar — Corect: Absența beneficiului DPP-4 în combinație este explicită.\n\nStudiile head-to-head arată scăderi HbA1c de 9–19 mmol/mol (0,8–1,8%) și ponderale de 0,6–4,3 kg — Corect: Intervalele 9–19 mmol/mol și 0,6–4,3 kg sunt din comparațiile directe.\n\nNu trebuie folosiți la persoane cu antecedente de pancreatită, crescând riscul de pancreatită acută — Corect: Antecedentele de pancreatită contraindică clasa.\n\nSe asociază de rutină cu un DPP-4, pentru sinergie incretinică maximă — Incorect: Asocierea cu DPP-4 este tocmai cea descurajată.\n\nSunt contraindicate în obezitate, deoarece cresc greutatea — Incorect: Scăderea ponderală îi face potriviți la obezi, nu contraindicați.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 720, Agoniști GLP-1 — Utilizare clinică; Efecte adverse (pagini PDF: 119).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    720
   ],
   "pdfPages": [
    119
   ],
   "section": "Agoniști GLP-1 — Utilizare clinică; Efecte adverse"
  },
  "learningObjective": "Interdicția asocierii cu DPP-4, magnitudinea HbA1c/greutate și contraindicația după pancreatită.",
  "optionRationales": [
   "Absența beneficiului DPP-4 în combinație este explicită.",
   "Intervalele 9–19 mmol/mol și 0,6–4,3 kg sunt din comparațiile directe.",
   "Antecedentele de pancreatită contraindică clasa.",
   "Asocierea cu DPP-4 este tocmai cea descurajată.",
   "Scăderea ponderală îi face potriviți la obezi, nu contraindicați."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează regula „nu se asociază cu DPP-4” și direcția ponderală."
  },
  "textbookExpressions": [
   "inhibitori de DPP-4",
   "pancreatită"
  ]
 },
 {
  "id": "diabet-adv-098",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Pramlintida, analog de amilină:",
  "options": [
   "Este aprobată în SUA pentru tipul 1 sau 2 tratat cu insulină",
   "Amilina este co-secretată cu insulina, întârzie golirea gastrică, suprimă glucagonul post-prandial și crește sațietatea",
   "Nu este utilizată pe scară largă",
   "Înlocuiește insulina bazală ca monoterapie universală în Europa",
   "Accelerează golirea gastrică și stimulează glucagonul"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este aprobată în SUA pentru tipul 1 sau 2 tratat cu insulină — Corect: Aprobarea FDA pentru T1/T2 insulinat este explicită.\n\nAmilina este co-secretată cu insulina, întârzie golirea gastrică, suprimă glucagonul post-prandial și crește sațietatea — Corect: Cele trei acțiuni (golire, glucagon, sațietate) sunt enumerate.\n\nNu este utilizată pe scară largă — Corect: Utilizarea limitată este precizată.\n\nÎnlocuiește insulina bazală ca monoterapie universală în Europa — Incorect: Nu înlocuiește insulina; este adjuvant.\n\nAccelerează golirea gastrică și stimulează glucagonul — Incorect: Acțiunile sunt întârzierea golirii și supresia glucagonului, nu opusul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 720, Analogii de amilină (pagini PDF: 119).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    720
   ],
   "pdfPages": [
    119
   ],
   "section": "Analogii de amilină"
  },
  "learningObjective": "Recunoașterea indicației americane pe lângă insulină și a celor trei acțiuni fiziologice ale amilinei.",
  "optionRationales": [
   "Aprobarea FDA pentru T1/T2 insulinat este explicită.",
   "Cele trei acțiuni (golire, glucagon, sațietate) sunt enumerate.",
   "Utilizarea limitată este precizată.",
   "Nu înlocuiește insulina; este adjuvant.",
   "Acțiunile sunt întârzierea golirii și supresia glucagonului, nu opusul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează efectele asupra golirii gastrice și glucagonului — tocmai mecanismul clasei."
  },
  "textbookExpressions": [
   "Pramlintida",
   "co-secretată împreună cu insulina"
  ]
 },
 {
  "id": "diabet-adv-099",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Auto-monitorizarea glicemiei capilare și MCG:",
  "options": [
   "Sângele se obține din partea laterală a pulpei degetului, nu din partea superioară, dens inervată",
   "Senzorii MCG pot fi purtați, la unele dispozitive, până la 14 zile",
   "Dezavantajul principal al MCG este intervalul de 15–20 de minute între modificările glicemiei și glucoza interstițială",
   "La simptome de hipoglicemie se testează glucoza capilară, chiar dacă citirea MCG este normală",
   "Puncția se face din vârful degetului, zona cea mai puțin inervată"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Sângele se obține din partea laterală a pulpei degetului, nu din partea superioară, dens inervată — Corect: Partea laterală versus superioară (dens inervată) este instrucțiunea de recoltare.\n\nSenzorii MCG pot fi purtați, la unele dispozitive, până la 14 zile — Corect: Cele 14 zile sunt durata maximală citată.\n\nDezavantajul principal al MCG este intervalul de 15–20 de minute între modificările glicemiei și glucoza interstițială — Corect: Lag-ul 15–20 de minute este dezavantajul principal.\n\nLa simptome de hipoglicemie se testează glucoza capilară, chiar dacă citirea MCG este normală — Corect: Testul capilar la simptome, indiferent de MCG, este regula de prudență.\n\nPuncția se face din vârful degetului, zona cea mai puțin inervată — Incorect: Partea superioară este dens inervată; se evită.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 721, 720, Auto-monitorizarea; Monitorizarea continuă a glucozei (pagini PDF: 120, 119).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    721,
    720
   ],
   "pdfPages": [
    120,
    119
   ],
   "section": "Auto-monitorizarea; Monitorizarea continuă a glucozei"
  },
  "learningObjective": "Articularea locului de puncție, a duratei senzorului (14 zile) și a lag-ului 15–20 de minute.",
  "optionRationales": [
   "Partea laterală versus superioară (dens inervată) este instrucțiunea de recoltare.",
   "Cele 14 zile sunt durata maximală citată.",
   "Lag-ul 15–20 de minute este dezavantajul principal.",
   "Testul capilar la simptome, indiferent de MCG, este regula de prudență.",
   "Partea superioară este dens inervată; se evită."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "14 zile și 15–20 de minute stau pe aceeași pagină; distractorul inversează locul de puncție."
  },
  "textbookExpressions": [
   "partea laterala a pulpei",
   "15-20 de minute"
  ]
 },
 {
  "id": "diabet-adv-100",
  "topicId": "diabet",
  "type": "CS",
  "stem": "O valoare fals scăzută a HbA1c poate rezulta din:",
  "options": [
   "Deficit de fier",
   "Insuficiență renală",
   "Infecție HIV",
   "Anemie hemolitică, hemoragie acută/cronică sau sarcină (durată de viață eritrocitară scăzută)",
   "Creșterea duratei de viață a eritrocitelor"
  ],
  "correct": [
   3
  ],
  "explanation": "Deficit de fier — Incorect: Deficitul de fier dă valori fals crescute.\n\nInsuficiență renală — Incorect: Insuficiența renală figurează la fals crescut.\n\nInfecție HIV — Incorect: HIV figurează la fals crescut.\n\nAnemie hemolitică, hemoragie acută/cronică sau sarcină (durată de viață eritrocitară scăzută) — Corect: Anemia hemolitică, hemoragia și sarcina scad durata de viață și dau HbA1c fals scăzută.\n\nCreșterea duratei de viață a eritrocitelor — Incorect: Durata crescută dă fals crescut, nu scăzut.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 721, Cadranul 23.16 — Limitările HbA1c (pagini PDF: 120).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    721
   ],
   "pdfPages": [
    120
   ],
   "section": "Cadranul 23.16 — Limitările HbA1c"
  },
  "learningObjective": "Separarea cauzelor de durată scurtă (fals scăzut) de cele de durată lungă (fals crescut).",
  "optionRationales": [
   "Deficitul de fier dă valori fals crescute.",
   "Insuficiența renală figurează la fals crescut.",
   "HIV figurează la fals crescut.",
   "Anemia hemolitică, hemoragia și sarcina scad durata de viață și dau HbA1c fals scăzută.",
   "Durata crescută dă fals crescut, nu scăzut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate opțiunile sunt din același cadran; trebuie recunoscut sensul durată scurtă → fals scăzut."
  },
  "textbookExpressions": [
   "Anemia hemolitică",
   "Sarcina"
  ]
 },
 {
  "id": "diabet-adv-101",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Variabilitatea biologică a HbA1c include faptul că, la o medie glicemică de 10 mmol/L, HbA1c poate fi între:",
  "options": [
   "4,0 și 4,2% (20–22 mmol/mol)",
   "6,0 și 9,0% (42–75 mmol/mol), reflectând diferențe în rata de glicare",
   "12 și 15% la toți pacienții, fără excepție",
   "HbA1c identică la toți indivizii cu aceeași medie",
   "Valori negative, HbA1c nefiind o proteină glicată"
  ],
  "correct": [
   1
  ],
  "explanation": "4,0 și 4,2% (20–22 mmol/mol) — Incorect: 4% este prea jos față de exemplul din cadran.\n\n6,0 și 9,0% (42–75 mmol/mol), reflectând diferențe în rata de glicare — Corect: Exemplul 10 mmol/L → 6,0–9,0% (42–75 mmol/mol) este cel din text.\n\n12 și 15% la toți pacienții, fără excepție — Incorect: 12–15% nu este intervalul citat.\n\nHbA1c identică la toți indivizii cu aceeași medie — Incorect: Tocmai variabilitatea inter-individuală face HbA1c neidentică.\n\nValori negative, HbA1c nefiind o proteină glicată — Incorect: HbA1c este hemoglobina glicată; valorile negative nu există.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 721, Cadranul 23.16 — Variabilitate inter-individuală (pagini PDF: 120).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    721
   ],
   "pdfPages": [
    120
   ],
   "section": "Cadranul 23.16 — Variabilitate inter-individuală"
  },
  "learningObjective": "Reținerea intervalului 6,0–9,0% (42–75 mmol/mol) la aceeași medie de 10 mmol/L.",
  "optionRationales": [
   "4% este prea jos față de exemplul din cadran.",
   "Exemplul 10 mmol/L → 6,0–9,0% (42–75 mmol/mol) este cel din text.",
   "12–15% nu este intervalul citat.",
   "Tocmai variabilitatea inter-individuală face HbA1c neidentică.",
   "HbA1c este hemoglobina glicată; valorile negative nu există."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "6,0–9,0% la 10 mmol/L este exemplul numeric unic din cadran, ușor de înlocuit cu praguri de diagnostic."
  },
  "textbookExpressions": [
   "10 mmol/L",
   "6,0% şi 9,0%"
  ]
 },
 {
  "id": "diabet-adv-102",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Nefropatia diabetică clasică:",
  "options": [
   "Se manifestă de obicei la 15–25 de ani după diagnostic și afectează 25–35% dintre cei diagnosticați înainte de 30 de ani",
   "Este principala cauză de deces prematur la pacienții tineri cu diabet",
   "Leziunile nodulare sunt cunoscute ca leziuni Kimmelstiel-Wilson",
   "Odată atinsă proteinuria persistentă, boala renală terminală apare în 5–10 ani, cu rată interindividuală variabilă",
   "Apare în primele 6 săptămâni de la diagnostic, la toți pacienții cu tip 2"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Se manifestă de obicei la 15–25 de ani după diagnostic și afectează 25–35% dintre cei diagnosticați înainte de 30 de ani — Corect: Cele două intervale 15–25 ani și 25–35% sunt de deschidere.\n\nEste principala cauză de deces prematur la pacienții tineri cu diabet — Corect: Rolul de cauză principală de deces prematur la tineri este explicit.\n\nLeziunile nodulare sunt cunoscute ca leziuni Kimmelstiel-Wilson — Corect: Eponimul Kimmelstiel-Wilson este dat leziunilor nodulare.\n\nOdată atinsă proteinuria persistentă, boala renală terminală apare în 5–10 ani, cu rată interindividuală variabilă — Corect: 5–10 ani până la ESKD după proteinuria persistentă, cu variabilitate, este istoria naturală.\n\nApare în primele 6 săptămâni de la diagnostic, la toți pacienții cu tip 2 — Incorect: Debutul este tardiv (ani), nu în săptămâni, și nu universal la tipul 2.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 730, Nefropatia diabetică — Istoric natural (pagini PDF: 129).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    730
   ],
   "pdfPages": [
    129
   ],
   "section": "Nefropatia diabetică — Istoric natural"
  },
  "learningObjective": "Articularea ferestrei 15–25 de ani, a ponderii 25–35% și a intervalului 5–10 ani până la ESKD după proteinurie persistentă.",
  "optionRationales": [
   "Cele două intervale 15–25 ani și 25–35% sunt de deschidere.",
   "Rolul de cauză principală de deces prematur la tineri este explicit.",
   "Eponimul Kimmelstiel-Wilson este dat leziunilor nodulare.",
   "5–10 ani până la ESKD după proteinuria persistentă, cu variabilitate, este istoria naturală.",
   "Debutul este tardiv (ani), nu în săptămâni, și nu universal la tipul 2."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "15–25 ani versus 5–10 ani (după proteinurie) se amestecă ușor; distractorul comprimă istoria la 6 săptămâni."
  },
  "textbookExpressions": [
   "15-25 ani",
   "Kimmelstiel-Wilson"
  ]
 },
 {
  "id": "diabet-adv-103",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Raportul albumină/creatinină (RAC) din prima urină de dimineață este, la persoanele sănătoase, mai scăzut de:",
  "options": [
   "2,5 mg/mmol la bărbați și 3,5 mg/mmol la femei",
   "25 mg/mmol la ambele sexe, fără diferență",
   "0,1 mg/mmol, identic cu proteinuria nefrotică",
   "50 mg/mmol ca prag de normalitate",
   "RAC nu se folosește, stripul standard detectând microalbuminuria"
  ],
  "correct": [
   0
  ],
  "explanation": "2,5 mg/mmol la bărbați și 3,5 mg/mmol la femei — Corect: Acestea sunt pragurile din text; microalbuminuria detectată se repetă de două ori.\n\n25 mg/mmol la ambele sexe, fără diferență — Incorect: 25 mg/mmol depășește normalul citat.\n\n0,1 mg/mmol, identic cu proteinuria nefrotică — Incorect: 0,1 mg/mmol nu este pragul.\n\n50 mg/mmol ca prag de normalitate — Incorect: 50 mg/mmol nu este normalitatea.\n\nRAC nu se folosește, stripul standard detectând microalbuminuria — Incorect: Stripurile standard nu detectează microalbuminuria; de aceea se folosește RAC.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 730, Screeningul nefropatiei — RAC (pagini PDF: 129).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    730
   ],
   "pdfPages": [
    129
   ],
   "section": "Screeningul nefropatiei — RAC"
  },
  "learningObjective": "Reținerea pragurilor diferențiate pe sexe (2,5 vs 3,5 mg/mmol) și a nevoii de repetare (fals pozitive frecvente).",
  "optionRationales": [
   "Acestea sunt pragurile din text; microalbuminuria detectată se repetă de două ori.",
   "25 mg/mmol depășește normalul citat.",
   "0,1 mg/mmol nu este pragul.",
   "50 mg/mmol nu este normalitatea.",
   "Stripurile standard nu detectează microalbuminuria; de aceea se folosește RAC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "2,5 (bărbați) versus 3,5 (femei) sunt perechea ușor de inversat sau de omogenizat."
  },
  "textbookExpressions": [
   "2,5 mg/mmol",
   "3,5 mg/mmol"
  ]
 },
 {
  "id": "diabet-adv-104",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Nefropatia diabetică non-clasică:",
  "options": [
   "O proporție scăzută din tipul 1 și până la 50% din tipul 2 au scăderea progresivă a RFG cu albuminurie redusă sau absentă",
   "Anemia normocromă normocitară, VSH și CRP crescute sunt asocieri tipice",
   "Suspiciunea unei cauze non-diabetice crește în absența retinopatiei și în prezența hematiilor urinare",
   "Albuminuria masivă este condiția sine qua non a oricărei nefropatii diabetice",
   "Biopsia renală este necesară de rutină la toți cei cu microalbuminurie confirmată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "O proporție scăzută din tipul 1 și până la 50% din tipul 2 au scăderea progresivă a RFG cu albuminurie redusă sau absentă — Corect: Fracția de până la 50% din tipul 2 este explicită.\n\nAnemia normocromă normocitară, VSH și CRP crescute sunt asocieri tipice — Corect: Anemia normocromă normocitară și markerii inflamatori sunt asocieri tipice.\n\nSuspiciunea unei cauze non-diabetice crește în absența retinopatiei și în prezența hematiilor urinare — Corect: Absența retinopatiei și hematuria orientează spre altă cauză; biopsia se consideră, dar e rar necesară.\n\nAlbuminuria masivă este condiția sine qua non a oricărei nefropatii diabetice — Incorect: Forma non-clasică are tocmai albuminurie redusă sau absentă.\n\nBiopsia renală este necesară de rutină la toți cei cu microalbuminurie confirmată — Incorect: Biopsia este rareori necesară sau utilă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 730, Nefropatia non-clasică; Alte caracteristici (pagini PDF: 129).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    730
   ],
   "pdfPages": [
    129
   ],
   "section": "Nefropatia non-clasică; Alte caracteristici"
  },
  "learningObjective": "Recunoașterea fenotipului cu RFG în scădere fără albumină (până la 50% din tipul 2) și a indiciilor pentru altă cauză.",
  "optionRationales": [
   "Fracția de până la 50% din tipul 2 este explicită.",
   "Anemia normocromă normocitară și markerii inflamatori sunt asocieri tipice.",
   "Absența retinopatiei și hematuria orientează spre altă cauză; biopsia se consideră, dar e rar necesară.",
   "Forma non-clasică are tocmai albuminurie redusă sau absentă.",
   "Biopsia este rareori necesară sau utilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă forma non-clasică (fără albumină) într-o cerință de proteinurie nefrotică."
  },
  "textbookExpressions": [
   "până la 50%",
   "anemie normocromă nor­mocitară"
  ]
 },
 {
  "id": "diabet-adv-105",
  "topicId": "diabet",
  "type": "CM",
  "stem": "La testarea funcției autonome la pat, sunt anormale:",
  "options": [
   "Scăderea TA sistolice în clino-ortostatism ≥30 mmHg (normal ≤10 mmHg)",
   "Diferența FC max–min la 6 respirații profunde/min ≤10 (normal ≥15)",
   "O scădere ortostatică de 2 mmHg, în limitele variației normale",
   "Tahicardia de efort ca unică dovadă de denervare",
   "Absența oricărei modificări tensionale, interpretată ca boală autonomă certă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Scăderea TA sistolice în clino-ortostatism ≥30 mmHg (normal ≤10 mmHg) — Corect: ≥30 mmHg versus normalul de 10 mmHg este contrastul din cadran.\n\nDiferența FC max–min la 6 respirații profunde/min ≤10 (normal ≥15) — Corect: ≤10 versus ≥15 la 6 respirații/min este a doua linie.\n\nO scădere ortostatică de 2 mmHg, în limitele variației normale — Incorect: 2 mmHg este în zona normală (≤10).\n\nTahicardia de efort ca unică dovadă de denervare — Incorect: Cadranul folosește TA ortostatică și variația respiratorie, nu tahicardia de efort izolată.\n\nAbsența oricărei modificări tensionale, interpretată ca boală autonomă certă — Incorect: Absența variației tensionale nu echivalează, singură, cu diagnosticul de neuropatie autonomă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 732, Cadranul 23.23 — Testarea funcției autonome (pagini PDF: 131).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    732
   ],
   "pdfPages": [
    131
   ],
   "section": "Cadranul 23.23 — Testarea funcției autonome"
  },
  "learningObjective": "Aplicarea pragurilor ≥30 mmHg (TA) și ≤10 bătăi (variație respiratorie) care definesc răspunsul anormal.",
  "optionRationales": [
   "≥30 mmHg versus normalul de 10 mmHg este contrastul din cadran.",
   "≤10 versus ≥15 la 6 respirații/min este a doua linie.",
   "2 mmHg este în zona normală (≤10).",
   "Cadranul folosește TA ortostatică și variația respiratorie, nu tahicardia de efort izolată.",
   "Absența variației tensionale nu echivalează, singură, cu diagnosticul de neuropatie autonomă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "10 versus 30 mmHg și 15 versus 10 bătăi sunt perechile din același tabel, ușor de inversat."
  },
  "textbookExpressions": [
   "2:30",
   "6 respiraJii"
  ]
 },
 {
  "id": "diabet-adv-106",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Polineuropatia simetrică distală se caracterizează prin:",
  "options": [
   "Senzația de „a umbla pe vată” și pierderea echilibrului la spălatul pe față sau mersul în întuneric (propriocepție alterată)",
   "Implicarea timpurie a mâinilor este mai puțin frecventă și cere cauze non-diabetice",
   "Atrofia interosoasă duce la boltă înaltă și degete în gheară, cu calozități sub capul primului metatarsian",
   "Mâinile pot avea atrofii ale mușchilor mici, de diferențiat de tunelul carpian, mai frecvent în diabet",
   "Implicarea mâinilor în primele săptămâni este regula, fără a căuta altă cauză"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Senzația de „a umbla pe vată” și pierderea echilibrului la spălatul pe față sau mersul în întuneric (propriocepție alterată) — Corect: „A umbla pe vată” și pierderea echilibrului sunt simptomele de deschidere.\n\nImplicarea timpurie a mâinilor este mai puțin frecventă și cere cauze non-diabetice — Corect: Regula mâinilor tardive este explicită.\n\nAtrofia interosoasă duce la boltă înaltă și degete în gheară, cu calozități sub capul primului metatarsian — Corect: Secvența motorie interosoasă → boltă/gheară → calozități este descrisă.\n\nMâinile pot avea atrofii ale mușchilor mici, de diferențiat de tunelul carpian, mai frecvent în diabet — Corect: Frecvența crescută a tunelului carpian cere diferențiere.\n\nImplicarea mâinilor în primele săptămâni este regula, fără a căuta altă cauză — Incorect: Implicarea precoce a mâinilor nu este regula și impune altă cauză.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 732, Neuropatia diabetică — Polineuropatia simetrică (pagini PDF: 131).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    732
   ],
   "pdfPages": [
    131
   ],
   "section": "Neuropatia diabetică — Polineuropatia simetrică"
  },
  "learningObjective": "Integrarea ataxiei proprioceptive cu deformarea în boltă/gheară și cu diagnosticul diferențial de tunel carpian.",
  "optionRationales": [
   "„A umbla pe vată” și pierderea echilibrului sunt simptomele de deschidere.",
   "Regula mâinilor tardive este explicită.",
   "Secvența motorie interosoasă → boltă/gheară → calozități este descrisă.",
   "Frecvența crescută a tunelului carpian cere diferențiere.",
   "Implicarea precoce a mâinilor nu este regula și impune altă cauză."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Deformarea de picior (boltă/gheară) se confundă cu ischemia; distractorul anulează regula mâinilor tardive."
  },
  "textbookExpressions": [
   "a umbla pe vată",
   "boltă înaltă"
  ]
 },
 {
  "id": "diabet-adv-107",
  "topicId": "diabet",
  "type": "CS",
  "stem": "O caracteristică a leziunii diabetice de nerv III este că:",
  "options": [
   "Este dureroasă, cu midriază fixă, fără recuperare",
   "Este nedureroasă, cu reflexe pupilare păstrate (fibrele pupilomotorii neafectate), iar recuperarea integrală spontană în 3–6 luni este regula pentru majoritatea mononevritelor",
   "Impune decompresie chirurgicală de urgență în primele 3 ore",
   "Se asociază constant cu hemipareză contralaterală",
   "Nu atinge nervul VI, doar nervul optic"
  ],
  "correct": [
   1
  ],
  "explanation": "Este dureroasă, cu midriază fixă, fără recuperare — Incorect: Tabloul dureros cu midriază orientează spre compresie anevrismală, nu spre mononevrita diabetică.\n\nEste nedureroasă, cu reflexe pupilare păstrate (fibrele pupilomotorii neafectate), iar recuperarea integrală spontană în 3–6 luni este regula pentru majoritatea mononevritelor — Corect: Nedorința, reflexele păstrate și recuperarea 3–6 luni sunt textul.\n\nImpune decompresie chirurgicală de urgență în primele 3 ore — Incorect: Decompresia nu este tratamentul descris; recuperarea este spontană.\n\nSe asociază constant cu hemipareză contralaterală — Incorect: Hemipareza nu face parte din mononevrita de NC III.\n\nNu atinge nervul VI, doar nervul optic — Incorect: Și nervul VI este citat ca frecvent implicat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 732, Mononevrita — Nervii oculomotori (pagini PDF: 131).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    732
   ],
   "pdfPages": [
    131
   ],
   "section": "Mononevrita — Nervii oculomotori"
  },
  "learningObjective": "Reținerea sparing-ului pupilar și a ferestrei de recuperare 3–6 luni, distincte de anevrismul dureros cu midriază.",
  "optionRationales": [
   "Tabloul dureros cu midriază orientează spre compresie anevrismală, nu spre mononevrita diabetică.",
   "Nedorința, reflexele păstrate și recuperarea 3–6 luni sunt textul.",
   "Decompresia nu este tratamentul descris; recuperarea este spontană.",
   "Hemipareza nu face parte din mononevrita de NC III.",
   "Și nervul VI este citat ca frecvent implicat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Sparing-ul pupilar deosebește mononevrita de compresia de sinus cavernos/anevrism; 3–6 luni este fereastra de recuperare."
  },
  "textbookExpressions": [
   "reflexele pupilare sunt păstrate",
   "3-6 luni"
  ]
 },
 {
  "id": "diabet-adv-108",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Neuropatia acută dureroasă:",
  "options": [
   "Poate fi prezentă de la diagnostic sau după ameliorarea bruscă a controlului (ex. inițierea insulinei)",
   "Se remite de obicei spontan după 3–12 luni dacă controlul glicemic este menținut",
   "NICE recomandă duloxetină, triciclice, gabapentin, pregabalin ca primă linie",
   "Atrofia musculară masivă este regula, cu deficit motor obiectiv marcat de la început",
   "Remisiunea nu apare nici după ani de euglicemie, forma acută fiind identică celei cronice tardive"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Poate fi prezentă de la diagnostic sau după ameliorarea bruscă a controlului (ex. inițierea insulinei) — Corect: Momentul de la diagnostic sau după intensificare este explicit.\n\nSe remite de obicei spontan după 3–12 luni dacă controlul glicemic este menținut — Corect: Fereastra 3–12 luni este cea de remisiune.\n\nNICE recomandă duloxetină, triciclice, gabapentin, pregabalin ca primă linie — Corect: Cele patru clase NICE de primă linie sunt enumerate.\n\nAtrofia musculară masivă este regula, cu deficit motor obiectiv marcat de la început — Incorect: Atrofia lipsește; semnele obiective pot fi minime, cu hiperestezie.\n\nRemisiunea nu apare nici după ani de euglicemie, forma acută fiind identică celei cronice tardive — Incorect: Forma acută se remite; cea cronică tardivă este rezistentă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 732, Neuropatia acută dureroasă (pagini PDF: 131).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    732
   ],
   "pdfPages": [
    131
   ],
   "section": "Neuropatia acută dureroasă"
  },
  "learningObjective": "Separarea formei acute (3–12 luni, după intensificare) de cea cronică rezistentă și de lista NICE de primă linie.",
  "optionRationales": [
   "Momentul de la diagnostic sau după intensificare este explicit.",
   "Fereastra 3–12 luni este cea de remisiune.",
   "Cele patru clase NICE de primă linie sunt enumerate.",
   "Atrofia lipsește; semnele obiective pot fi minime, cu hiperestezie.",
   "Forma acută se remite; cea cronică tardivă este rezistentă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "3–12 luni (remisiune acută) versus rezistența formei cronice sunt contrastul din același paragraf."
  },
  "textbookExpressions": [
   "3-12 luni",
   "Duloxetina"
  ]
 },
 {
  "id": "diabet-adv-109",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Disfuncția erectilă la bărbații cu diabet:",
  "options": [
   "Prevalența globală este 35–40%, crescând la circa 60% peste 60 de ani",
   "Prima manifestare este erecția incompletă, cu posibilă ejaculare retrogradă în neuropatia autonomă",
   "Inhibitorii PDE-5 sunt prima linie la cei fără nitrați; circa 60% dintre bărbații cu diabet beneficiază",
   "Se dozează LH, FSH, testosteron, prolactină și funcția tiroidiană",
   "PDE-5 se asociază de rutină cu nitrații antianginoși, pentru sinergie vasculară"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Prevalența globală este 35–40%, crescând la circa 60% peste 60 de ani — Corect: Cele două prevalențe pe vârstă sunt juxtapuse.\n\nPrima manifestare este erecția incompletă, cu posibilă ejaculare retrogradă în neuropatia autonomă — Corect: Erecția incompletă și ejacularea retrogradă sunt descrise.\n\nInhibitorii PDE-5 sunt prima linie la cei fără nitrați; circa 60% dintre bărbații cu diabet beneficiază — Corect: PDE-5 ca primă linie, fără nitrați, cu răspuns ~60%, este explicit.\n\nSe dozează LH, FSH, testosteron, prolactină și funcția tiroidiană — Corect: Panelul LH/FSH/testosteron/prolactină/tiroidă este lista de laborator.\n\nPDE-5 se asociază de rutină cu nitrații antianginoși, pentru sinergie vasculară — Incorect: Asocierea cu nitrații este tocmai contraindicația.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 733, Disfuncția sexuală (pagini PDF: 132).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    733
   ],
   "pdfPages": [
    132
   ],
   "section": "Disfuncția sexuală"
  },
  "learningObjective": "Cuantificarea 35–40%/60% și a răspunsului PDE-5 (~60%), plus panelul hormonal înainte de tratament.",
  "optionRationales": [
   "Cele două prevalențe pe vârstă sunt juxtapuse.",
   "Erecția incompletă și ejacularea retrogradă sunt descrise.",
   "PDE-5 ca primă linie, fără nitrați, cu răspuns ~60%, este explicit.",
   "Panelul LH/FSH/testosteron/prolactină/tiroidă este lista de laborator.",
   "Asocierea cu nitrații este tocmai contraindicația."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "35–40%, 60% (vârstă) și 60% (răspuns PDE-5) sunt trei cifre alăturate, ușor de amestecat cu indicația nitraților."
  },
  "textbookExpressions": [
   "35-40%",
   "sildenafil"
  ]
 },
 {
  "id": "diabet-adv-110",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Alprostadilul intrauretral se începe, conform textului, de la 125 µg până la un maxim de:",
  "options": [
   "50 µg",
   "250 µg",
   "500 µg; dacă partenera este gravidă, este necesar un contraceptiv de tip barieră",
   "5 mg oral, ca sildenafilul",
   "Nicio prostaglandină nu se folosește uretral"
  ],
  "correct": [
   2
  ],
  "explanation": "50 µg — Incorect: 50 µg este sub doza inițială (125 µg).\n\n250 µg — Incorect: 250 µg nu este maximul citat.\n\n500 µg; dacă partenera este gravidă, este necesar un contraceptiv de tip barieră — Corect: Maximul 500 µg și contraceptivul de barieră la parteneră gravidă sunt explicite.\n\n5 mg oral, ca sildenafilul — Incorect: Calea este uretrală, nu orală ca PDE-5.\n\nNicio prostaglandină nu se folosește uretral — Incorect: Alprostadil uretral figurează ca alternativă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 733, Disfuncția sexuală — Tratamente alternative (pagini PDF: 132).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    733
   ],
   "pdfPages": [
    132
   ],
   "section": "Disfuncția sexuală — Tratamente alternative"
  },
  "learningObjective": "Reținerea plafonului 500 µg uretral și a precauției de barieră dacă partenera este gravidă, distinct de injecția 2,5–40 µg.",
  "optionRationales": [
   "50 µg este sub doza inițială (125 µg).",
   "250 µg nu este maximul citat.",
   "Maximul 500 µg și contraceptivul de barieră la parteneră gravidă sunt explicite.",
   "Calea este uretrală, nu orală ca PDE-5.",
   "Alprostadil uretral figurează ca alternativă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "500 µg (uretral) versus 40 µg (intracavernos) sunt plafoanele alăturate din aceeași listă."
  },
  "textbookExpressions": [
   "125 µg",
   "maxim de 500 µg"
  ]
 },
 {
  "id": "diabet-adv-111",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Afecțiunile piciorului diabetic:",
  "options": [
   "Până la 50% dintre vârstnicii cu tip 2 au factori de risc; 10–15% dezvoltă ulcere plantare de-a lungul vieții",
   "Sunt responsabile pentru aproape 50% din internările legate de diabet",
   "Diabetul este cea mai frecventă cauză de amputații non-traumatice de membru inferior",
   "Ulcerele plantare sunt rare (<1%) și nu justifică internarea",
   "Amputațiile diabetice nu pot fi prevenite prin autoîngrijire"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Până la 50% dintre vârstnicii cu tip 2 au factori de risc; 10–15% dezvoltă ulcere plantare de-a lungul vieții — Corect: 50% factori de risc și 10–15% ulcere sunt de deschidere.\n\nSunt responsabile pentru aproape 50% din internările legate de diabet — Corect: Cei 50% din internări sunt cifra următoare.\n\nDiabetul este cea mai frecventă cauză de amputații non-traumatice de membru inferior — Corect: Întâietatea ca cauză de amputație non-traumatică este explicită.\n\nUlcerele plantare sunt rare (<1%) și nu justifică internarea — Incorect: Ulcerele nu sunt rare; 10–15% este povara de-a lungul vieții.\n\nAmputațiile diabetice nu pot fi prevenite prin autoîngrijire — Incorect: Textul subliniază că multe amputații ar putea fi prevenite prin autoîngrijire.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 733, Piciorul diabetic — Epidemiologie (pagini PDF: 132).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    733
   ],
   "pdfPages": [
    132
   ],
   "section": "Piciorul diabetic — Epidemiologie"
  },
  "learningObjective": "Reținerea dublei cifre de 50% (risc la vârstnici; ponderea internărilor) și a intervalului 10–15% pentru ulcere.",
  "optionRationales": [
   "50% factori de risc și 10–15% ulcere sunt de deschidere.",
   "Cei 50% din internări sunt cifra următoare.",
   "Întâietatea ca cauză de amputație non-traumatică este explicită.",
   "Ulcerele nu sunt rare; 10–15% este povara de-a lungul vieții.",
   "Textul subliniază că multe amputații ar putea fi prevenite prin autoîngrijire."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele două „50%” (risc vs internări) și 10–15% (ulcere) se țin împreună; distractorii minimizează povara."
  },
  "textbookExpressions": [
   "10-15% din pacienţii",
   "aproape 50%"
  ]
 },
 {
  "id": "diabet-adv-112",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Neuroartropatia Charcot, după faza acută, se stabilizează de obicei în:",
  "options": [
   "24 de ore, fără imobilizare",
   "6–12 luni; recuperarea cere imobilizare îndelungată în orteză, uneori cu chirurgie reparatorie",
   "3 zile de mers nerestricționat",
   "O săptămână de AINS, fără orteză",
   "Nicio consolidare, distrucția continuând indefinit la toți"
  ],
  "correct": [
   1
  ],
  "explanation": "24 de ore, fără imobilizare — Incorect: 24 de ore este faza acută, nu consolidarea.\n\n6–12 luni; recuperarea cere imobilizare îndelungată în orteză, uneori cu chirurgie reparatorie — Corect: 6–12 luni, orteza și chirurgia reparatorie sunt descrierea evoluției.\n\n3 zile de mers nerestricționat — Incorect: Mersul liber agravează distrucția.\n\nO săptămână de AINS, fără orteză — Incorect: AINS-ul izolat nu înlocuiește imobilizarea.\n\nNicio consolidare, distrucția continuând indefinit la toți — Incorect: Procesul se stabilizează, nu continuă indefinit.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 733, Neuroartropatia Charcot (pagini PDF: 132).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    733
   ],
   "pdfPages": [
    132
   ],
   "section": "Neuroartropatia Charcot"
  },
  "learningObjective": "Reținerea ferestrei 6–12 luni până la consolidare și a ortezei până la dispariția edemului și a căldurii locale.",
  "optionRationales": [
   "24 de ore este faza acută, nu consolidarea.",
   "6–12 luni, orteza și chirurgia reparatorie sunt descrierea evoluției.",
   "Mersul liber agravează distrucția.",
   "AINS-ul izolat nu înlocuiește imobilizarea.",
   "Procesul se stabilizează, nu continuă indefinit."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "6–12 luni (stabilizare) se confundă cu săptămânile de distrucție rapidă din faza netratată."
  },
  "textbookExpressions": [
   "6-12 luni",
   "orteză"
  ]
 },
 {
  "id": "diabet-adv-113",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Screeningul anual al piciorului include testarea cu monofilament aplicat perpendicular, care se îndoaie la o forță de:",
  "options": [
   "1 g",
   "5 g",
   "10 g; perceperea acestui nivel conferă sensibilitate protectoare împotriva ulcerațiilor plantare",
   "100 g, rezervat ischemiei critice",
   "Monofilamentul este abandonat în favoarea radiografiei de rutină"
  ],
  "correct": [
   2
  ],
  "explanation": "1 g — Incorect: 1 g este sub pragul protector citat.\n\n5 g — Incorect: 5 g nu este forța din text.\n\n10 g; perceperea acestui nivel conferă sensibilitate protectoare împotriva ulcerațiilor plantare — Corect: 10 g și semnificația protectivă sunt explicite.\n\n100 g, rezervat ischemiei critice — Incorect: 100 g nu este testul de sensibilitate protectivă.\n\nMonofilamentul este abandonat în favoarea radiografiei de rutină — Incorect: Monofilamentul este evaluarea reproductibilă recomandată, alături de Doppler.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 734, Cadranul 23.25; Screeningul piciorului (pagini PDF: 133).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    734
   ],
   "pdfPages": [
    133
   ],
   "section": "Cadranul 23.25; Screeningul piciorului"
  },
  "learningObjective": "Reținerea pragului de 10 g care definește sensibilitatea protectivă plantară.",
  "optionRationales": [
   "1 g este sub pragul protector citat.",
   "5 g nu este forța din text.",
   "10 g și semnificația protectivă sunt explicite.",
   "100 g nu este testul de sensibilitate protectivă.",
   "Monofilamentul este evaluarea reproductibilă recomandată, alături de Doppler."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "10 g este pragul unic; distractorii sunt ordine de mărime adiacente."
  },
  "textbookExpressions": [
   "forţă de 10 g",
   "sensibilitate protectoare"
  ]
 },
 {
  "id": "diabet-adv-114",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Principiile îngrijirii piciorului (cadranul 23.25) includ:",
  "options": [
   "Inspecție zilnică, hidratarea pielii uscate și prudență la mersul desculț",
   "Verificarea încălțămintei (interior și exterior) înainte de purtare și distanța față de surse de căldură",
   "A nu se trata calozitățile fără ajutor profesional; vizite periodice la pedichiurist/podiatru",
   "Tratarea calozităților acasă cu lame, fără consult",
   "Mersul desculț pe nisip fierbinte, ca terapie de „călire”"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Inspecție zilnică, hidratarea pielii uscate și prudență la mersul desculț — Corect: Inspecția zilnică, hidratarea și mersul desculț figurează în deschidere.\n\nVerificarea încălțămintei (interior și exterior) înainte de purtare și distanța față de surse de căldură — Corect: Verificarea încălțămintei și distanța față de căldură sunt itemi expliți.\n\nA nu se trata calozitățile fără ajutor profesional; vizite periodice la pedichiurist/podiatru — Corect: Calozitățile fără ajutor profesional și vizitele la podiatru închid lista.\n\nTratarea calozităților acasă cu lame, fără consult — Incorect: Autotirajul calozităților este tocmai interzis.\n\nMersul desculț pe nisip fierbinte, ca terapie de „călire” — Incorect: Nisipul fierbinte este o sursă de căldură de evitat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 734, Cadranul 23.25 — Principiile îngrijirii piciorului (pagini PDF: 133).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    734
   ],
   "pdfPages": [
    133
   ],
   "section": "Cadranul 23.25 — Principiile îngrijirii piciorului"
  },
  "learningObjective": "Reținerea interdicției de autotiraj al calozităților și a evității surselor de căldură (nisip, sticle, radiatoare).",
  "optionRationales": [
   "Inspecția zilnică, hidratarea și mersul desculț figurează în deschidere.",
   "Verificarea încălțămintei și distanța față de căldură sunt itemi expliți.",
   "Calozitățile fără ajutor profesional și vizitele la podiatru închid lista.",
   "Autotirajul calozităților este tocmai interzis.",
   "Nisipul fierbinte este o sursă de căldură de evitat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă interdicțiile (calozități, nisip fierbinte) în „terapii”, inversul cadranului de prevenție."
  },
  "textbookExpressions": [
   "Inspecţia zilnică",
   "calozităţile"
  ]
 },
 {
  "id": "diabet-adv-115",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Infecțiile piciorului diabetic, denumite uneori „atac de picior”:",
  "options": [
   "Trebuie tratate ca urgențe medicale, cu antibiotice cu spectru larg precoce, apoi ajustate după culturi",
   "Microorganismele de la suprafața pielii pot să nu fie cele ale infecției profunde",
   "Radiografii regulate sunt necesare pentru a verifica evoluția; osul infectat poate necesita excizie în osteomielită neresponsivă",
   "Se amână antibioticul până la identificarea certă a germenului de suprafață",
   "Radiografia este superfluă, osteomielita neexistând în diabet"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Trebuie tratate ca urgențe medicale, cu antibiotice cu spectru larg precoce, apoi ajustate după culturi — Corect: Urgența și spectrul larg precoce sunt explicite.\n\nMicroorganismele de la suprafața pielii pot să nu fie cele ale infecției profunde — Corect: Neconcordanța suprafață–profund este avertismentul microbiologic.\n\nRadiografii regulate sunt necesare pentru a verifica evoluția; osul infectat poate necesita excizie în osteomielită neresponsivă — Corect: Radiografiile de control și excizia osului neresponsiv sunt pașii următori.\n\nSe amână antibioticul până la identificarea certă a germenului de suprafață — Incorect: Așteptarea culturii de suprafață întârzie un tratament care trebuie început precoce.\n\nRadiografia este superfluă, osteomielita neexistând în diabet — Incorect: Osteomielita este o complicație descrisă, nu o absență.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 734, Infecția — Piciorul diabetic (pagini PDF: 133).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    734
   ],
   "pdfPages": [
    133
   ],
   "section": "Infecția — Piciorul diabetic"
  },
  "learningObjective": "Aplicarea logicii de urgență („atac de picior”), a neîncrederii în cultura de suprafață și a urmăririi radiologice a osteomielitei.",
  "optionRationales": [
   "Urgența și spectrul larg precoce sunt explicite.",
   "Neconcordanța suprafață–profund este avertismentul microbiologic.",
   "Radiografiile de control și excizia osului neresponsiv sunt pașii următori.",
   "Așteptarea culturii de suprafață întârzie un tratament care trebuie început precoce.",
   "Osteomielita este o complicație descrisă, nu o absență."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cultura de suprafață este capcana: textul cere să nu se amâne spectrul larg pentru ea."
  },
  "textbookExpressions": [
   "atac de picior",
   "osteomielitei"
  ]
 },
 {
  "id": "diabet-adv-116",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Cheia vindecării unui ulcer de picior diabetic este:",
  "options": [
   "Purtarea continuă a greutății pe zona ulcerată, pentru „stimulare”",
   "Asigurarea faptului că piciorul afectat nu susține greutatea corpului (pantofi/branțuri/orteze de descărcare)",
   "Oprirea debridării, calozitățile protejând arhitectura plăgii",
   "Antibiotice topice ca unică măsură, fără descărcare",
   "Mersul intens imediat după închidere, fără încălțăminte specială"
  ],
  "correct": [
   1
  ],
  "explanation": "Purtarea continuă a greutății pe zona ulcerată, pentru „stimulare” — Incorect: Purtarea greutății pe ulcer împiedică vindecarea.\n\nAsigurarea faptului că piciorul afectat nu susține greutatea corpului (pantofi/branțuri/orteze de descărcare) — Corect: Descărcarea cu pantofi, branțuri sau orteze este cheia citată.\n\nOprirea debridării, calozitățile protejând arhitectura plăgii — Incorect: Debridarea chirurgicală ascuțită a calozităților este necesară, mai ales în neuropatie.\n\nAntibiotice topice ca unică măsură, fără descărcare — Incorect: Antibioticele nu înlocuiesc descărcarea.\n\nMersul intens imediat după închidere, fără încălțăminte specială — Incorect: După vindecare sunt necesari pantofi speciali pe termen lung.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 734, Ulcerațiile piciorului (pagini PDF: 133).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    734
   ],
   "pdfPages": [
    133
   ],
   "section": "Ulcerațiile piciorului"
  },
  "learningObjective": "Reținerea descărcării (off-loading) ca element central, urmată de debridare ascuțită a calozităților în piciorul neuropat.",
  "optionRationales": [
   "Purtarea greutății pe ulcer împiedică vindecarea.",
   "Descărcarea cu pantofi, branțuri sau orteze este cheia citată.",
   "Debridarea chirurgicală ascuțită a calozităților este necesară, mai ales în neuropatie.",
   "Antibioticele nu înlocuiesc descărcarea.",
   "După vindecare sunt necesari pantofi speciali pe termen lung."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Off-loading-ul este ușor de înlocuit cu „stimularea prin mers”, inversul principiului."
  },
  "textbookExpressions": [
   "nu susţine greutatea",
   "debridarea chirurgicală"
  ]
 },
 {
  "id": "diabet-adv-117",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Cataracta acută „în fulg de zăpadă” poate apărea în contextul:",
  "options": [
   "Unui control foarte slab de durată, cu un grad de cetoză",
   "Unei HbA1c de 5%, fără hiperglicemie",
   "Unei extracții de cristalin, ca efect invariabil al implantului",
   "Unui deficit de fier izolat, fără diabet",
   "Unei hipoglicemii unice, corectate oral"
  ],
  "correct": [
   0
  ],
  "explanation": "Unui control foarte slab de durată, cu un grad de cetoză — Corect: Controlul foarte slab de durată cu cetoză este contextul descris.\n\nUnei HbA1c de 5%, fără hiperglicemie — Incorect: HbA1c joasă nu produce această cataractă.\n\nUnei extracții de cristalin, ca efect invariabil al implantului — Incorect: Extracția cu implant este tratamentul, nu cauza.\n\nUnui deficit de fier izolat, fără diabet — Incorect: Deficitul de fier ține de artefactul HbA1c, nu de cataractă.\n\nUnei hipoglicemii unice, corectate oral — Incorect: O hipoglicemie unică nu este mecanismul denaturării proteinelor cristalinului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 729, Alte moduri — Cataracta (pagini PDF: 128).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    729
   ],
   "pdfPages": [
    128
   ],
   "section": "Alte moduri — Cataracta"
  },
  "learningObjective": "Asocierea cataractei acute în fulg de zăpadă cu controlul foarte slab și cetoza.",
  "optionRationales": [
   "Controlul foarte slab de durată cu cetoză este contextul descris.",
   "HbA1c joasă nu produce această cataractă.",
   "Extracția cu implant este tratamentul, nu cauza.",
   "Deficitul de fier ține de artefactul HbA1c, nu de cataractă.",
   "O hipoglicemie unică nu este mecanismul denaturării proteinelor cristalinului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Eponimul „fulg de zăpadă” este legat de cetoză/control slab, nu de tratamentul chirurgical."
  },
  "textbookExpressions": [
   "cataractă în fulg de zăpadă",
   "grad de cetoză"
  ]
 },
 {
  "id": "diabet-adv-118",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Fotocoagularea panretinală în retinopatia proliferativă:",
  "options": [
   "Se folosește când au apărut vase noi pe discul optic; rubeoza se tratează tot prin panretinală",
   "Principiul este reducerea stimulului ischemic prin distrugerea retinei periferice",
   "Câmpul vizual devine permanent mai îngust, cu reducerea adaptării la întuneric: periferia este sacrificată pentru centrul vizual",
   "Lărgește câmpul vizual și îmbunătățește vederea nocturnă",
   "Se evită pe disc, vasele de neoformație discale având prognostic bun fără laser"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se folosește când au apărut vase noi pe discul optic; rubeoza se tratează tot prin panretinală — Corect: Indicația de vase pe disc și rubeoza sunt explicite.\n\nPrincipiul este reducerea stimulului ischemic prin distrugerea retinei periferice — Corect: Distrugerea periferiei ischemice reduce stimulul de neoformație.\n\nCâmpul vizual devine permanent mai îngust, cu reducerea adaptării la întuneric: periferia este sacrificată pentru centrul vizual — Corect: Efectele adverse (câmp îngust, adaptare redusă) sunt consecința principială.\n\nLărgește câmpul vizual și îmbunătățește vederea nocturnă — Incorect: Laserul îngustează, nu lărgește, câmpul.\n\nSe evită pe disc, vasele de neoformație discale având prognostic bun fără laser — Incorect: Vasele de pe disc au cel mai nefast prognostic și cer laser de urgență.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 729, Fotocoagularea laser (pagini PDF: 128).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    729
   ],
   "pdfPages": [
    128
   ],
   "section": "Fotocoagularea laser"
  },
  "learningObjective": "Înțelegerea sacrificiului periferic (câmp îngust, adaptare nocturnă redusă) ca preț al salvării maculei.",
  "optionRationales": [
   "Indicația de vase pe disc și rubeoza sunt explicite.",
   "Distrugerea periferiei ischemice reduce stimulul de neoformație.",
   "Efectele adverse (câmp îngust, adaptare redusă) sunt consecința principială.",
   "Laserul îngustează, nu lărgește, câmpul.",
   "Vasele de pe disc au cel mai nefast prognostic și cer laser de urgență."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează prognosticul vaselor discale și direcția efectului asupra câmpului vizual."
  },
  "textbookExpressions": [
   "fotocoagulare panretinală",
   "adaptării la întuneric"
  ]
 },
 {
  "id": "diabet-adv-119",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Fenofibratul, în retinopatia diabetică:",
  "options": [
   "Încetinește progresia retinopatiei, inclusiv a edemului macular",
   "Este recomandată și oprirea fumatului",
   "O deteriorare pe termen scurt poate urma ameliorării rapide a glicemiei, sarcinii sau nefropatiei",
   "Accelerează edemul macular, fiind contraindicat oftalmologic",
   "Fumatul protejează retina și trebuie încurajat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Încetinește progresia retinopatiei, inclusiv a edemului macular — Corect: Încetinirea progresiei, inclusiv maculopatia, este atribuită fenofibratului.\n\nEste recomandată și oprirea fumatului — Corect: Oprirea fumatului este recomandată alături.\n\nO deteriorare pe termen scurt poate urma ameliorării rapide a glicemiei, sarcinii sau nefropatiei — Corect: Deteriorarea pe termen scurt după intensificare, sarcină sau nefropatie este avertismentul.\n\nAccelerează edemul macular, fiind contraindicat oftalmologic — Incorect: Fenofibratul încetinește, nu accelerează, edemul macular.\n\nFumatul protejează retina și trebuie încurajat — Incorect: Fumatul nu este protector; se recomandă oprirea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 729, Tratament — Control glicemic; Fenofibrat (pagini PDF: 128).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    729
   ],
   "pdfPages": [
    128
   ],
   "section": "Tratament — Control glicemic; Fenofibrat"
  },
  "learningObjective": "Recunoașterea rolului fenofibratului asupra edemului macular și a paradoxului deteriorării după intensificare/sarcină.",
  "optionRationales": [
   "Încetinirea progresiei, inclusiv maculopatia, este atribuită fenofibratului.",
   "Oprirea fumatului este recomandată alături.",
   "Deteriorarea pe termen scurt după intensificare, sarcină sau nefropatie este avertismentul.",
   "Fenofibratul încetinește, nu accelerează, edemul macular.",
   "Fumatul nu este protector; se recomandă oprirea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Paradoxul „mai bine glicemic → mai rău pe termen scurt la retină” este capcana; fenofibratul se confundă cu un agent dăunător."
  },
  "textbookExpressions": [
   "fenofibrat",
   "edemului macu"
  ]
 },
 {
  "id": "diabet-adv-120",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Injecțiile intravitreene anti-VEGF (bevacizumab, aflibercept, ranibizumab):",
  "options": [
   "Pot controla retinopatia proliferativă și maculopatia potențial cauzatoare de cecitate",
   "Au beneficii suplimentare față de laser în acest tip de maculopatie",
   "Efectele adverse includ infecții, glaucom, cataractă sau dezlipire de retină",
   "Triamcinolonul reduce edemul macular pe termen scurt",
   "Înlocuiesc orice laser, fără risc de infecție sau glaucom"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Pot controla retinopatia proliferativă și maculopatia potențial cauzatoare de cecitate — Corect: Controlul proliferativului și al maculopatiei amenințătoare este indicația.\n\nAu beneficii suplimentare față de laser în acest tip de maculopatie — Corect: Superioritatea față de laser în maculopatie este din studii citate.\n\nEfectele adverse includ infecții, glaucom, cataractă sau dezlipire de retină — Corect: Infecția, glaucomul, cataracta și dezlipirea sunt lista de adverse.\n\nTriamcinolonul reduce edemul macular pe termen scurt — Corect: Triamcinolonul are efect scurt, util când alte tratamente țin mai mult.\n\nÎnlocuiesc orice laser, fără risc de infecție sau glaucom — Incorect: Anti-VEGF nu anulează riscurile intraoculare și nu fac laserul superfluu în proliferativ.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 729, Injecțiile intravitreene (pagini PDF: 128).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    729
   ],
   "pdfPages": [
    128
   ],
   "section": "Injecțiile intravitreene"
  },
  "learningObjective": "Ierarhia anti-VEGF versus laser în maculopatie și recunoașterea listei de adverse intraoculare.",
  "optionRationales": [
   "Controlul proliferativului și al maculopatiei amenințătoare este indicația.",
   "Superioritatea față de laser în maculopatie este din studii citate.",
   "Infecția, glaucomul, cataracta și dezlipirea sunt lista de adverse.",
   "Triamcinolonul are efect scurt, util când alte tratamente țin mai mult.",
   "Anti-VEGF nu anulează riscurile intraoculare și nu fac laserul superfluu în proliferativ."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Lista de adverse (infecție, glaucom, cataractă, dezlipire) este ușor de omis când se reține doar beneficiul față de laser."
  },
  "textbookExpressions": [
   "bevacizumab",
   "triamcinolon"
  ]
 },
 {
  "id": "diabet-adv-121",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Anumite microorganisme sunt descrise ca mai virulente în medii hiperglicemice, printre care:",
  "options": [
   "Serotipuri de Klebsiella și Burkholderia pseudomallei",
   "Pneumocystis, ca unică etiologie a otitei externe maligne",
   "Virusul gripal, fără legătură cu hiperglicemia",
   "Saprofiți cutanați nepatogeni în orice context",
   "Mycobacterium bovis, rezistent la pirazinamidă, ca germene al fasceitei"
  ],
  "correct": [
   0
  ],
  "explanation": "Serotipuri de Klebsiella și Burkholderia pseudomallei — Corect: Aceste două exemple sunt cele din paragraf, alături de otita externă malignă, pielonefrita emfizematoasă și fasceita necrozantă.\n\nPneumocystis, ca unică etiologie a otitei externe maligne — Incorect: Pneumocystis nu este germenele otitei externe maligne din acest text.\n\nVirusul gripal, fără legătură cu hiperglicemia — Incorect: Virusurile (hepatita C, tratamentul HIV) cresc riscul de diabet, nu virulența în hiperglicemie în acest exemplu.\n\nSaprofiți cutanați nepatogeni în orice context — Incorect: Textul vorbește de virulență crescută, nu de saprofiți inofensivi.\n\nMycobacterium bovis, rezistent la pirazinamidă, ca germene al fasceitei — Incorect: M. bovis ține de capitolul de TB, nu de lista de virulență hiperglicemică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 735, Infecțiile (pagini PDF: 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    735
   ],
   "pdfPages": [
    134
   ],
   "section": "Infecțiile"
  },
  "learningObjective": "Reținerea perechii Klebsiella / B. pseudomallei ca exemple de virulență augmentată de hiperglicemie.",
  "optionRationales": [
   "Aceste două exemple sunt cele din paragraf, alături de otita externă malignă, pielonefrita emfizematoasă și fasceita necrozantă.",
   "Pneumocystis nu este germenele otitei externe maligne din acest text.",
   "Virusurile (hepatita C, tratamentul HIV) cresc riscul de diabet, nu virulența în hiperglicemie în acest exemplu.",
   "Textul vorbește de virulență crescută, nu de saprofiți inofensivi.",
   "M. bovis ține de capitolul de TB, nu de lista de virulență hiperglicemică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Klebsiella și B. pseudomallei sunt perechea de nișă; distractorii importă germeni din pneumologie."
  },
  "textbookExpressions": [
   "Klebsiella",
   "Burkho/deria pseudomallei"
  ]
 },
 {
  "id": "diabet-adv-122",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre infecții și diabet:",
  "options": [
   "Hepatita C și tratamentul pentru HIV/SIDA",
   "Imunitatea umorală pare relativ neafectată, deși hiperglicemia tulbură imunitatea înnăscută",
   "Vaccinarea antigripală anuală, ca factor etiologic major",
   "Deficitul de B12 indus de metformin, ca virus lent",
   "Otita externă malignă, ca infecție virală de primă intenție"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Hepatita C și tratamentul pentru HIV/SIDA — Corect: Hepatita C și tratamentul HIV/SIDA sunt cele două situații citate.\n\nImunitatea umorală pare relativ neafectată, deși hiperglicemia tulbură imunitatea înnăscută — Corect: Contrastul înnăscut afectat / umoral relativ păstrat deschide paragraful de infecții.\n\nVaccinarea antigripală anuală, ca factor etiologic major — Incorect: Vaccinarea antigripală nu este incriminată ca etiologie a diabetului.\n\nDeficitul de B12 indus de metformin, ca virus lent — Incorect: B12 este un efect al metforminului, nu un virus.\n\nOtita externă malignă, ca infecție virală de primă intenție — Incorect: Otita externă malignă este o infecție severă favorizată de microangiopatie, nu un virus cauzator de diabet.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 735, Infecțiile — Virusuri și risc de diabet (pagini PDF: 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    735
   ],
   "pdfPages": [
    134
   ],
   "section": "Infecțiile — Virusuri și risc de diabet"
  },
  "learningObjective": "Asocierea hepatitei C și a terapiei HIV/SIDA cu contrastul imunitate înnăscută versus umorală.",
  "optionRationales": [
   "Hepatita C și tratamentul HIV/SIDA sunt cele două situații citate.",
   "Contrastul înnăscut afectat / umoral relativ păstrat deschide paragraful de infecții.",
   "Vaccinarea antigripală nu este incriminată ca etiologie a diabetului.",
   "B12 este un efect al metforminului, nu un virus.",
   "Otita externă malignă este o infecție severă favorizată de microangiopatie, nu un virus cauzator de diabet."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Hepatita C și terapia HIV sunt ușor de înlocuit cu infecții severe listate în același paragraf (otita malignă)."
  },
  "textbookExpressions": [
   "hepatita C",
   "HIV /SIDA"
  ]
 },
 {
  "id": "diabet-adv-123",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Sub-specializările descrise pentru diabetologi includ:",
  "options": [
   "Diabetul în sarcină",
   "Tehnologie (pompe de insulină și monitorizare continuă a glucozei)",
   "Transplant de pancreas sau de celule insulare",
   "Formare limitată la chirurgie bariatrică, fără medicină internă",
   "Oprirea oricărei activități de ambulator, internarea fiind regula"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Diabetul în sarcină — Corect: Sarcina figurează ca domeniu de sub-specializare.\n\nTehnologie (pompe de insulină și monitorizare continuă a glucozei) — Corect: Pompele și MCG sunt rubrica de tehnologie.\n\nTransplant de pancreas sau de celule insulare — Corect: Transplantul de pancreas sau insule este listat.\n\nFormare limitată la chirurgie bariatrică, fără medicină internă — Incorect: Consultanții se formează și în medicină internă generală.\n\nOprirea oricărei activități de ambulator, internarea fiind regula — Incorect: Majoritatea persoanelor sunt văzute în ambulator.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 699, Introducere — Sub-specializări (pagini PDF: 98).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    699
   ],
   "pdfPages": [
    98
   ],
   "section": "Introducere — Sub-specializări"
  },
  "learningObjective": "Recunoașterea celor trei nișe (sarcină, tehnologie, transplant), distincte de formarea în medicină internă.",
  "optionRationales": [
   "Sarcina figurează ca domeniu de sub-specializare.",
   "Pompele și MCG sunt rubrica de tehnologie.",
   "Transplantul de pancreas sau insule este listat.",
   "Consultanții se formează și în medicină internă generală.",
   "Majoritatea persoanelor sunt văzute în ambulator."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Lista de sub-specializări se reduce ușor la bariatrică, deși textul o plasează alături de internă."
  },
  "textbookExpressions": [
   "diabetul în sar",
   "transplant de pancreas"
  ]
 },
 {
  "id": "diabet-adv-124",
  "topicId": "diabet",
  "type": "CM",
  "stem": "La examenul obiectiv, semnele cutanate, oculare și generale asociate diabetului includ:",
  "options": [
   "Necrobioza lipoidică la membrele inferioare",
   "Xantelasmă palpebrală și candidoză orală",
   "Respirație Kussmaul și ptoză din paralizia nervului III",
   "Eritem nodos palmoplantar, ca semn de deficit absolut de insulină",
   "Psoriazisul unghiilor, ca marker de insulinorezistență"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Necrobioza lipoidică la membrele inferioare — Corect: Necrobioza lipoidică este listată la membre.\n\nXantelasmă palpebrală și candidoză orală — Corect: Xantelasma și candidoza orală figurează la ochi/gură.\n\nRespirație Kussmaul și ptoză din paralizia nervului III — Corect: Kussmaul și ptoza de NC III sunt pe schema de examen.\n\nEritem nodos palmoplantar, ca semn de deficit absolut de insulină — Incorect: Eritemul nodos nu este semnul din această figură.\n\nPsoriazisul unghiilor, ca marker de insulinorezistență — Incorect: Psoriazisul nu orientează spre insulinorezistență aici.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 701, Examenul obiectiv — Tegumente; Ochi; Respirație (pagini PDF: 100).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    701
   ],
   "pdfPages": [
    100
   ],
   "section": "Examenul obiectiv — Tegumente; Ochi; Respirație"
  },
  "learningObjective": "Separarea necrobiózei și xantelasmei de urgența acidotică (Kussmaul) și de paralizia de NC III.",
  "optionRationales": [
   "Necrobioza lipoidică este listată la membre.",
   "Xantelasma și candidoza orală figurează la ochi/gură.",
   "Kussmaul și ptoza de NC III sunt pe schema de examen.",
   "Eritemul nodos nu este semnul din această figură.",
   "Psoriazisul nu orientează spre insulinorezistență aici."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Necrobioza și xantelasma stau pe aceeași schemă cu Dupuytren/buloza, deja folosite, și se omit ușor."
  },
  "textbookExpressions": [
   "Necrobioza lipoidică",
   "xantelasmă"
  ]
 },
 {
  "id": "diabet-adv-125",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Structura, secreția și clearance-ul insulinei, conform textului:",
  "options": [
   "Este un hormon peptidic de 51 de aminoacizi, cu lanțurile A și B, sintetizat în celulele β ale insulelor Langerhans",
   "Aproximativ 50% din insulina secretată este extrasă și degradată în ficat; restul este descompus de rinichi",
   "Peptidul C este extras doar parțial hepatic și degradat în principal de rinichi",
   "Insulina este un steroid de 21 de carboni, sintetizat în corticosuprarenală",
   "Peptidul C este extras 90% la primul pasaj hepatic, identic cu insulina"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este un hormon peptidic de 51 de aminoacizi, cu lanțurile A și B, sintetizat în celulele β ale insulelor Langerhans — Corect: Cifra de 51 de aminoacizi și originea β sunt explicite.\n\nAproximativ 50% din insulina secretată este extrasă și degradată în ficat; restul este descompus de rinichi — Corect: Jumătatea extrasă hepatic este citată.\n\nPeptidul C este extras doar parțial hepatic și degradat în principal de rinichi — Corect: Contrastul peptid C versus insulină la ficat/rinichi este precizat.\n\nInsulina este un steroid de 21 de carboni, sintetizat în corticosuprarenală — Incorect: Insulina nu este un steroid.\n\nPeptidul C este extras 90% la primul pasaj hepatic, identic cu insulina — Incorect: Peptidul C este extras doar parțial, nu 90%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 702, Fiziologia insulinei — Structură; Clearance (pagini PDF: 101).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    702
   ],
   "pdfPages": [
    101
   ],
   "section": "Fiziologia insulinei — Structură; Clearance"
  },
  "learningObjective": "Cuplarea celor 51 de aminoacizi cu extracția hepatică de 50% și clearance-ul renal al peptidului C.",
  "optionRationales": [
   "Cifra de 51 de aminoacizi și originea β sunt explicite.",
   "Jumătatea extrasă hepatic este citată.",
   "Contrastul peptid C versus insulină la ficat/rinichi este precizat.",
   "Insulina nu este un steroid.",
   "Peptidul C este extras doar parțial, nu 90%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "50% hepatic se atribuie greșit peptidului C, deși textul rezervă extracția majoră rinichiului."
  },
  "textbookExpressions": [
   "51 de aminoacizi",
   "Aproximativ 50%"
  ]
 },
 {
  "id": "diabet-adv-126",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Consumul cerebral de glucoză, la o persoană de 70 kg, este descris ca:",
  "options": [
   "1 mg/kg/min, adică aproximativ 100 g pe zi; preluarea nu depinde de insulină",
   "10 g pe zi, strict insulinodependentă prin GLUT-4",
   "500 g pe zi, acoperită doar din gluconeogeneza renală",
   "Zero în repaus, creierul oxidând numai acizi grași",
   "Identic cu necesarul muscular, ambele dependente de GLUT-4"
  ],
  "correct": [
   0
  ],
  "explanation": "1 mg/kg/min, adică aproximativ 100 g pe zi; preluarea nu depinde de insulină — Corect: Debitul și independența de insulină sunt juxtapuse.\n\n10 g pe zi, strict insulinodependentă prin GLUT-4 — Incorect: 10 g/zi nu este cifra; GLUT-4 nu mediază creierul în acest paragraf.\n\n500 g pe zi, acoperită doar din gluconeogeneza renală — Incorect: Gluconeogeneza renală este restul producției, nu tot necesarul cerebral.\n\nZero în repaus, creierul oxidând numai acizi grași — Incorect: Creierul depinde de glucoză, nu de acizi grași.\n\nIdentic cu necesarul muscular, ambele dependente de GLUT-4 — Incorect: Mușchiul, nu creierul, folosește GLUT-4 insulinodependent.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 703, Utilizarea glucozei — Creierul (pagini PDF: 102).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    703
   ],
   "pdfPages": [
    102
   ],
   "section": "Utilizarea glucozei — Creierul"
  },
  "learningObjective": "Reținerea pachetului 1 mg/kg/min ≈ 100 g/zi și a independenței de insulină.",
  "optionRationales": [
   "Debitul și independența de insulină sunt juxtapuse.",
   "10 g/zi nu este cifra; GLUT-4 nu mediază creierul în acest paragraf.",
   "Gluconeogeneza renală este restul producției, nu tot necesarul cerebral.",
   "Creierul depinde de glucoză, nu de acizi grași.",
   "Mușchiul, nu creierul, folosește GLUT-4 insulinodependent."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "100 g/zi cerebral se schimbă ușor cu 200 g/zi producție totală de pe aceeași pagină."
  },
  "textbookExpressions": [
   "1 mg/kg greutate",
   "aproximativ 100 g pe zi"
  ]
 },
 {
  "id": "diabet-adv-127",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Producția zilnică de glucoză, conform textului:",
  "options": [
   "Peste 90% din cele circa 200 g utilizate zilnic derivă din glicogenul hepatic și gluconeogeneza hepatică",
   "Restul provine din gluconeogeneza renală",
   "Ficatul stochează glucoza ca glicogen postabsorbtiv și o eliberează între mese",
   "Creierul produce 200 g/zi prin glicogen neuronal",
   "Gluconeogeneza renală acoperă peste 90% din necesar"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Peste 90% din cele circa 200 g utilizate zilnic derivă din glicogenul hepatic și gluconeogeneza hepatică — Corect: Cifrele 90% și 200 g sunt explicite.\n\nRestul provine din gluconeogeneza renală — Corect: Contribuția renală este restul.\n\nFicatul stochează glucoza ca glicogen postabsorbtiv și o eliberează între mese — Corect: Rolul bifazic al ficatului este descris.\n\nCreierul produce 200 g/zi prin glicogen neuronal — Incorect: Creierul consumă, nu produce, glucoza.\n\nGluconeogeneza renală acoperă peste 90% din necesar — Incorect: Rinichiul nu acoperă 90%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 703, Producția de glucoză (pagini PDF: 102).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    703
   ],
   "pdfPages": [
    102
   ],
   "section": "Producția de glucoză"
  },
  "learningObjective": "Ierarhia ficat (>90% din 200 g) versus rinichi (restul), distinctă de consumul cerebral de 100 g.",
  "optionRationales": [
   "Cifrele 90% și 200 g sunt explicite.",
   "Contribuția renală este restul.",
   "Rolul bifazic al ficatului este descris.",
   "Creierul consumă, nu produce, glucoza.",
   "Rinichiul nu acoperă 90%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "200 g (producție) și 100 g (creier) stau pe aceeași pagină și se inversează ca sediu."
  },
  "textbookExpressions": [
   "200 g glucoză",
   "gluconeogeneza renală"
  ]
 },
 {
  "id": "diabet-adv-128",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Transportorii GLUT și hormonii de contrareglare:",
  "options": [
   "Funcția GLUT-1–3 este independentă de insulină; insulina stimulează absorbția în mușchi și adipos prin GLUT-4",
   "Când glicemia scade sub normal, se secretă glucagon din celulele α, plus noradrenalină, cortizol și hormon de creștere",
   "Hormonii de contrareglare cresc producția hepatică de glucoză și reduc utilizarea în adipos și mușchi, independent de nivelul insulinei",
   "GLUT-4 este independent de insulină, iar GLUT-1 este translocat de insulină în neuron",
   "Glucagonul se secretă din celulele β, odată cu insulina, când glicemia scade"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Funcția GLUT-1–3 este independentă de insulină; insulina stimulează absorbția în mușchi și adipos prin GLUT-4 — Corect: Independența GLUT-1–3 și rolul GLUT-4 sunt explicite.\n\nCând glicemia scade sub normal, se secretă glucagon din celulele α, plus noradrenalină, cortizol și hormon de creștere — Corect: Răspunsul la hipoglicemie este listat.\n\nHormonii de contrareglare cresc producția hepatică de glucoză și reduc utilizarea în adipos și mușchi, independent de nivelul insulinei — Corect: Efectul hepatic/periferic independent de insulină este precizat.\n\nGLUT-4 este independent de insulină, iar GLUT-1 este translocat de insulină în neuron — Incorect: Direcția GLUT este inversată în distractor.\n\nGlucagonul se secretă din celulele β, odată cu insulina, când glicemia scade — Incorect: Glucagonul vine din celulele α, nu β.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 704, Transportul glucozei; Reglarea hormonală (pagini PDF: 103).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    704
   ],
   "pdfPages": [
    103
   ],
   "section": "Transportul glucozei; Reglarea hormonală"
  },
  "learningObjective": "Contrastul GLUT-1–3 versus GLUT-4 și lista de contrareglare (glucagon α, NA, cortizol, GH).",
  "optionRationales": [
   "Independența GLUT-1–3 și rolul GLUT-4 sunt explicite.",
   "Răspunsul la hipoglicemie este listat.",
   "Efectul hepatic/periferic independent de insulină este precizat.",
   "Direcția GLUT este inversată în distractor.",
   "Glucagonul vine din celulele α, nu β."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "GLUT-4 se mută greșit pe neuron, iar glucagonul pe celula β, două permutări din același paragraf."
  },
  "textbookExpressions": [
   "GLUT-1-3",
   "hormoni de contrareglare"
  ]
 },
 {
  "id": "diabet-adv-129",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Clasificarea diabetului primar și secundar, conform textului:",
  "options": [
   "Diabetul gestațional este intoleranța la glucoză care apare pentru prima dată în sarcină",
   "Diabetul secundar se împarte, printre altele, în defecte genetice, boli pancreatice exocrine, boli endocrine, medicamente și infecții",
   "Aproximativ 1–3% din cazurile diagnosticate înainte de 30 de ani sunt monogenice",
   "Tipul 1 reprezintă 90% din toate cazurile, fără deficit de insulină",
   "Formele primare exclud tipul 2, rezervat doar secundarului medicamentos"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Diabetul gestațional este intoleranța la glucoză care apare pentru prima dată în sarcină — Corect: Definiția gestaționalului este explicită.\n\nDiabetul secundar se împarte, printre altele, în defecte genetice, boli pancreatice exocrine, boli endocrine, medicamente și infecții — Corect: Categoriile de secundar sunt enumerate.\n\nAproximativ 1–3% din cazurile diagnosticate înainte de 30 de ani sunt monogenice — Corect: Intervalul 1–3% înainte de 30 de ani este citat.\n\nTipul 1 reprezintă 90% din toate cazurile, fără deficit de insulină — Incorect: Tipul 1 este 5–10% din cazuri, cu deficit sever.\n\nFormele primare exclud tipul 2, rezervat doar secundarului medicamentos — Incorect: Tipul 2 este primar, nu un secundar medicamentos.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 704, Clasificarea diabetului (pagini PDF: 103).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    704
   ],
   "pdfPages": [
    103
   ],
   "section": "Clasificarea diabetului"
  },
  "learningObjective": "Definirea gestaționalului, lista de secundar și ponderea 1–3% monogenic sub 30 de ani.",
  "optionRationales": [
   "Definiția gestaționalului este explicită.",
   "Categoriile de secundar sunt enumerate.",
   "Intervalul 1–3% înainte de 30 de ani este citat.",
   "Tipul 1 este 5–10% din cazuri, cu deficit sever.",
   "Tipul 2 este primar, nu un secundar medicamentos."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "1–3% monogenic se confundă cu 5–10% tip 1 de pe pagina următoare."
  },
  "textbookExpressions": [
   "1-3% din cazurile",
   "Diabetul gestaţional"
  ]
 },
 {
  "id": "diabet-adv-130",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Diabetul de tip 1, ca pondere și spectru imunologic:",
  "options": [
   "Reprezintă 5–10% din toate cazurile de diabet și se caracterizează prin deficit de insulină",
   "Este împărțit în tipul 1A (mediat imun) și 1B (non-mediat imun); marea majoritate în țările occidentale au 1A",
   "LADA este varianta cu progresie mai lentă a deficitului, apărută mai târziu în viață",
   "Este 90% din diabetul mondial, fără autoimunitate",
   "Tipul 1B reprezintă marea majoritate în Occident"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Reprezintă 5–10% din toate cazurile de diabet și se caracterizează prin deficit de insulină — Corect: 5–10% și deficitul sunt fraza de deschidere.\n\nEste împărțit în tipul 1A (mediat imun) și 1B (non-mediat imun); marea majoritate în țările occidentale au 1A — Corect: Diviziunea 1A/1B și predominanța occidentală a 1A sunt explicite.\n\nLADA este varianta cu progresie mai lentă a deficitului, apărută mai târziu în viață — Corect: LADA este definit ca progresie lentă tardivă.\n\nEste 90% din diabetul mondial, fără autoimunitate — Incorect: 90% este ponderea tipului 2, nu a tipului 1.\n\nTipul 1B reprezintă marea majoritate în Occident — Incorect: În Occident predomină 1A, nu 1B.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 705, Diabetul de tip 1 — Epidemiologie; 1A/1B; LADA (pagini PDF: 104).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    705
   ],
   "pdfPages": [
    104
   ],
   "section": "Diabetul de tip 1 — Epidemiologie; 1A/1B; LADA"
  },
  "learningObjective": "Separarea ponderii 5–10% de majoritatea 1A occidentală și de LADA.",
  "optionRationales": [
   "5–10% și deficitul sunt fraza de deschidere.",
   "Diviziunea 1A/1B și predominanța occidentală a 1A sunt explicite.",
   "LADA este definit ca progresie lentă tardivă.",
   "90% este ponderea tipului 2, nu a tipului 1.",
   "În Occident predomină 1A, nu 1B."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "5–10% (tip 1) se schimbă cu 90% (tip 2) sau cu >90% HLA-DR3/DR4 de pe pagina 707."
  },
  "textbookExpressions": [
   "5-10% din toate cazurile",
   "tipul 1B"
  ]
 },
 {
  "id": "diabet-adv-131",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În cadranul de spectru, diabetul de tip 1 se deosebește de tipul 2 prin:",
  "options": [
   "Vârstă tânără (de obicei <30 ani) și durată a simptomelor de săptămâni, cu debut sezonier",
   "HLA-DR3 sau DR4 la >90% și patogeneză autoimună, cu cetonurie",
   "Dispariția peptidului C, spre deosebire de persistența acestuia în tipul 2, monogenic și secundar",
   "HLA-DR3/DR4 și la tipul 2, cu dispariția peptidului C și în monogenic",
   "Debut sezonier identic în tipul 2 și în monogenic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Vârstă tânără (de obicei <30 ani) și durată a simptomelor de săptămâni, cu debut sezonier — Corect: Vârsta, durata scurtă și sezonierul sunt din tabel.\n\nHLA-DR3 sau DR4 la >90% și patogeneză autoimună, cu cetonurie — Corect: HLA >90%, autoimunitatea și cetonuria continuă rândurile.\n\nDispariția peptidului C, spre deosebire de persistența acestuia în tipul 2, monogenic și secundar — Corect: Dispariția peptidului C contrastează cu celelalte coloane.\n\nHLA-DR3/DR4 și la tipul 2, cu dispariția peptidului C și în monogenic — Incorect: Tipul 2 este fără legătură HLA, cu peptid C persistent.\n\nDebut sezonier identic în tipul 2 și în monogenic — Incorect: Debutul sezonier este marcat „Da” doar la tipul 1.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 707, Cadranul 23.5 — Spectrul diabetului (pagini PDF: 106).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    707
   ],
   "pdfPages": [
    106
   ],
   "section": "Cadranul 23.5 — Spectrul diabetului"
  },
  "learningObjective": "Ancorarea tripletului HLA >90% / cetonurie / dispariția peptidului C ca marcaje de tip 1.",
  "optionRationales": [
   "Vârsta, durata scurtă și sezonierul sunt din tabel.",
   "HLA >90%, autoimunitatea și cetonuria continuă rândurile.",
   "Dispariția peptidului C contrastează cu celelalte coloane.",
   "Tipul 2 este fără legătură HLA, cu peptid C persistent.",
   "Debutul sezonier este marcat „Da” doar la tipul 1."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Dispariția peptidului C se extinde greșit la monogenic, deși tabelul îi rezervă persistența."
  },
  "textbookExpressions": [
   "HLA-DR3 sau DR4",
   "Dispariţia peptidului-C"
  ]
 },
 {
  "id": "diabet-adv-132",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Factorii de mediu citați în etiologia tipului 1, dincolo de Coxsackie B4 și vitamina D, includ:",
  "options": [
   "Factori materni: infecție în sarcină și vârstă înaintată",
   "Toxine din mediu, de exemplu aloxan sau Vacor",
   "Obezitate infantilă și stres psihologic",
   "Haplotipuri HLA ca unică explicație, mediul fiind irelevant",
   "Introducerea tardivă a laptelui de vacă, ca factor protector cert"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Factori materni: infecție în sarcină și vârstă înaintată — Corect: Factorii materni deschid lista.\n\nToxine din mediu, de exemplu aloxan sau Vacor — Corect: Aloxanul și Vacor sunt exemplele de toxine.\n\nObezitate infantilă și stres psihologic — Corect: Obezitatea infantilă și stresul închid enumerarea.\n\nHaplotipuri HLA ca unică explicație, mediul fiind irelevant — Incorect: Textul subliniază că genetica nu este suficientă.\n\nIntroducerea tardivă a laptelui de vacă, ca factor protector cert — Incorect: Laptele de vacă timpuriu, nu tardiv, este incriminat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 707, Diabetul de tip 1 — Factori de mediu (pagini PDF: 106).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    707
   ],
   "pdfPages": [
    106
   ],
   "section": "Diabetul de tip 1 — Factori de mediu"
  },
  "learningObjective": "Completarea listei de mediu cu itemii mai puțin citați (aloxan/Vacor, obezitate infantilă, stres).",
  "optionRationales": [
   "Factorii materni deschid lista.",
   "Aloxanul și Vacor sunt exemplele de toxine.",
   "Obezitatea infantilă și stresul închid enumerarea.",
   "Textul subliniază că genetica nu este suficientă.",
   "Laptele de vacă timpuriu, nu tardiv, este incriminat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Aloxan/Vacor se uită lângă virusuri și vitamina D; stresul și obezitatea infantilă par „netip 1”."
  },
  "textbookExpressions": [
   "aloxan, Vacor",
   "obezitatea infantilă"
  ]
 },
 {
  "id": "diabet-adv-133",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Autoanticorpii insulari descriși în text includ:",
  "options": [
   "Anticorpi anti-celulă insulară (ICA), detectați prin imunofluorescență",
   "Anticorpi anti-GAD65 și anti-IA-2/ICA512, care explică o mare parte din colorarea ICA",
   "Transportorul cationic ZnT8 și, mai recent, tetraspanina 7",
   "Anticorpi anti-receptor TSH, ca marker de tip 2",
   "ICA care detectează doar insulina circulantă, fără GAD"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Anticorpi anti-celulă insulară (ICA), detectați prin imunofluorescență — Corect: Tehnica ICA este descrisă.\n\nAnticorpi anti-GAD65 și anti-IA-2/ICA512, care explică o mare parte din colorarea ICA — Corect: GAD65 și IA-2/ICA512 sunt principalii.\n\nTransportorul cationic ZnT8 și, mai recent, tetraspanina 7 — Corect: ZnT8 și tetraspanina 7 sunt numiți.\n\nAnticorpi anti-receptor TSH, ca marker de tip 2 — Incorect: Anti-TSHR ține de tiroidă, nu de insulă.\n\nICA care detectează doar insulina circulantă, fără GAD — Incorect: Autoanticorpii anti-insulină circulanți nu contribuie la reacția ICA.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 707, Figura 23.8 — Anticorpi anti-insule (pagini PDF: 106).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    707
   ],
   "pdfPages": [
    106
   ],
   "section": "Figura 23.8 — Anticorpi anti-insule"
  },
  "learningObjective": "Ierarhia ICA (imunofluorescență) versus GAD/IA-2 ca principali și ZnT8/tetraspanina 7 ca adiționali.",
  "optionRationales": [
   "Tehnica ICA este descrisă.",
   "GAD65 și IA-2/ICA512 sunt principalii.",
   "ZnT8 și tetraspanina 7 sunt numiți.",
   "Anti-TSHR ține de tiroidă, nu de insulă.",
   "Autoanticorpii anti-insulină circulanți nu contribuie la reacția ICA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tetraspanina 7 și ZnT8 se omit în favoarea ICA „egal anti-insulină”, deși textul le separă."
  },
  "textbookExpressions": [
   "tetraspanina 7",
   "Zn T8"
  ]
 },
 {
  "id": "diabet-adv-134",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Ajustarea dozelor de insulină și țintele capilare din cadranele 23.11–23.12:",
  "options": [
   "Ajustarea este de circa 10% din doza curentă",
   "Țintele capilare sunt 4–7 mmol/L înainte de masă și 4–10 mmol/L după mese, dacă se obțin fără hipoglicemii",
   "Cei șase pași ai administrării în siguranță sunt: persoana, insulina, doza, dispozitivul, calea și timpul potrivite",
   "Glicemia crescută înainte de micul dejun se corectează crescând analogul rapid de la cină, nu bazala de seară",
   "Ținta postprandială este 2–3 mmol/L, sub pragul de alertă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ajustarea este de circa 10% din doza curentă — Corect: Regula de 10% este nota cadranului.\n\nȚintele capilare sunt 4–7 mmol/L înainte de masă și 4–10 mmol/L după mese, dacă se obțin fără hipoglicemii — Corect: Intervalele pre- și postprandiale sunt explicite.\n\nCei șase pași ai administrării în siguranță sunt: persoana, insulina, doza, dispozitivul, calea și timpul potrivite — Corect: Cei șase pași sunt listați.\n\nGlicemia crescută înainte de micul dejun se corectează crescând analogul rapid de la cină, nu bazala de seară — Incorect: Glicemia de dimineață se ajustează pe bazala/premixul de seară.\n\nȚinta postprandială este 2–3 mmol/L, sub pragul de alertă — Incorect: 2–3 mmol/L este hipoglicemie, nu țintă postprandială.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 716, Cadranele 23.11 și 23.12 — Ajustare; Siguranță (pagini PDF: 115).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    716
   ],
   "pdfPages": [
    115
   ],
   "section": "Cadranele 23.11 și 23.12 — Ajustare; Siguranță"
  },
  "learningObjective": "Cuplarea treptei de 10% cu țintele 4–7 / 4–10 și cu cei șase pași de prescriere.",
  "optionRationales": [
   "Regula de 10% este nota cadranului.",
   "Intervalele pre- și postprandiale sunt explicite.",
   "Cei șase pași sunt listați.",
   "Glicemia de dimineață se ajustează pe bazala/premixul de seară.",
   "2–3 mmol/L este hipoglicemie, nu țintă postprandială."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "4–7 preprandial se inversează cu 4–10 postprandial; treapta de 10% se uită."
  },
  "textbookExpressions": [
   "aproximativ 10%",
   "4 şi 7 mmol/l"
  ]
 },
 {
  "id": "diabet-adv-135",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Definițiile glicemice ale hipoglicemiei, conform consensului citat:",
  "options": [
   "Hipoglicemia semnificativă este o glicemie sub 3,0 mmol/L (54 mg/dl)",
   "Orice valoare sub 4,0 mmol/L (70 mg/dl) este o valoare de alertă care necesită tratament",
   "Hipoglicemia severă este cea pentru care pacientul necesită ajutorul altei persoane",
   "Hipoglicemia semnificativă începe sub 4,0 mmol/L, iar alerta sub 3,0 mmol/L",
   "Severitatea se definește doar numeric, independent de nevoia de ajutor"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hipoglicemia semnificativă este o glicemie sub 3,0 mmol/L (54 mg/dl) — Corect: Pragul de 3,0 mmol/L este explicit.\n\nOrice valoare sub 4,0 mmol/L (70 mg/dl) este o valoare de alertă care necesită tratament — Corect: Alerta de 4,0 mmol/L impune tratament.\n\nHipoglicemia severă este cea pentru care pacientul necesită ajutorul altei persoane — Corect: Nevoia de ajutor definește severitatea.\n\nHipoglicemia semnificativă începe sub 4,0 mmol/L, iar alerta sub 3,0 mmol/L — Incorect: Direcția pragurilor este inversată în distractor.\n\nSeveritatea se definește doar numeric, independent de nevoia de ajutor — Incorect: Textul definește severitatea prin ajutor extern, nu doar numeric.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 716, Hipoglicemia — Definiții (pagini PDF: 115).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    716
   ],
   "pdfPages": [
    115
   ],
   "section": "Hipoglicemia — Definiții"
  },
  "learningObjective": "Separarea pragurilor 3,0 (semnificativă) și 4,0 (alertă) de definiția clinică a formei severe.",
  "optionRationales": [
   "Pragul de 3,0 mmol/L este explicit.",
   "Alerta de 4,0 mmol/L impune tratament.",
   "Nevoia de ajutor definește severitatea.",
   "Direcția pragurilor este inversată în distractor.",
   "Textul definește severitatea prin ajutor extern, nu doar numeric."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "3,0 și 4,0 se inversează ușor între „semnificativă” și „alertă”."
  },
  "textbookExpressions": [
   "sub 3,0 mmol/l",
   "valoare de alertă"
  ]
 },
 {
  "id": "diabet-adv-136",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Inhibitorii SGLT2, dincolo de scăderea pragului renal, se caracterizează prin:",
  "options": [
   "Scăderea HbA1c cu 7–13 mmol/mol (0,6–1,2%) și pierdere ponderală de circa 2–4 kg în 6–12 luni",
   "Ipoteze pentru beneficiul CV: natriureză cu scăderi mici ale TAS, cetone ca „combustibil” cardiac, vasodilatație prin blocarea SRAA, efecte directe pe cord",
   "Ca adjuvant la insulină în tipul 1, scad HbA1c cu 5–6 mmol/mol (0,4–0,5%) fără a crește hipoglicemia, dar cu risc mai mare de CAD și infecții fungice",
   "Creștere ponderală de 5–6 kg, identică pioglitazonei",
   "Eficacitatea hipoglicemiantă este independentă de funcția renală, fără niciun beneficiu renoprotector la RFGe scăzută"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Scăderea HbA1c cu 7–13 mmol/mol (0,6–1,2%) și pierdere ponderală de circa 2–4 kg în 6–12 luni — Corect: Cifrele de HbA1c și de greutate sunt explicite.\n\nIpoteze pentru beneficiul CV: natriureză cu scăderi mici ale TAS, cetone ca „combustibil” cardiac, vasodilatație prin blocarea SRAA, efecte directe pe cord — Corect: Cele patru ipoteze CV sunt listate.\n\nCa adjuvant la insulină în tipul 1, scad HbA1c cu 5–6 mmol/mol (0,4–0,5%) fără a crește hipoglicemia, dar cu risc mai mare de CAD și infecții fungice — Corect: Adjuvantul din tipul 1 și capcanele CAD/fungi sunt descrise.\n\nCreștere ponderală de 5–6 kg, identică pioglitazonei — Incorect: SGLT2 scad, nu cresc, greutatea.\n\nEficacitatea hipoglicemiantă este independentă de funcția renală, fără niciun beneficiu renoprotector la RFGe scăzută — Incorect: Efectul glicemic depinde de funcția renală; renoprotecția persistă și la RFGe mai mică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 719, Inhibitorii SGLT2 — Eficacitate; Tip 1 (pagini PDF: 118).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    719
   ],
   "pdfPages": [
    118
   ],
   "section": "Inhibitorii SGLT2 — Eficacitate; Tip 1"
  },
  "learningObjective": "Pachetul 7–13 mmol/mol / 2–4 kg versus adjuvantul din tipul 1 (5–6 mmol/mol, CAD, fungi).",
  "optionRationales": [
   "Cifrele de HbA1c și de greutate sunt explicite.",
   "Cele patru ipoteze CV sunt listate.",
   "Adjuvantul din tipul 1 și capcanele CAD/fungi sunt descrise.",
   "SGLT2 scad, nu cresc, greutatea.",
   "Efectul glicemic depinde de funcția renală; renoprotecția persistă și la RFGe mai mică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele două ferestre HbA1c (0,6–1,2% versus 0,4–0,5% în tipul 1) se confundă; CAD euglicemică se uită."
  },
  "textbookExpressions": [
   "2-4 kg",
   "cetoacidoză diabetică"
  ]
 },
 {
  "id": "diabet-adv-137",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Efectele nedorite ale inhibitorilor SGLT2 includ:",
  "options": [
   "Candidoză genitală și deshidratare, ca cele mai frecvente",
   "Cetoacidoză diabetică, gangrena Fournier și amputații de membru inferior, ca reacții mai rare",
   "CAD care poate evolua cu glicemii normale sau doar ușor crescute, inclusiv la persoane etichetate tip 2",
   "Creșterea absorbției de B12, cu policitemie de rutină",
   "Absența oricărui risc de infecție fungică, clasa fiind sterilizantă urinară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Candidoză genitală și deshidratare, ca cele mai frecvente — Corect: Perechea frecventă este explicită.\n\nCetoacidoză diabetică, gangrena Fournier și amputații de membru inferior, ca reacții mai rare — Corect: Triada rară este listată.\n\nCAD care poate evolua cu glicemii normale sau doar ușor crescute, inclusiv la persoane etichetate tip 2 — Corect: Glicemia normală/ușor crescută este capcana de diagnostic.\n\nCreșterea absorbției de B12, cu policitemie de rutină — Incorect: B12 ține de metformin, nu de SGLT2.\n\nAbsența oricărui risc de infecție fungică, clasa fiind sterilizantă urinară — Incorect: Candidoza genitală este tocmai efectul frecvent.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 719, Inhibitorii SGLT2 — Efecte adverse (pagini PDF: 118).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    719
   ],
   "pdfPages": [
    118
   ],
   "section": "Inhibitorii SGLT2 — Efecte adverse"
  },
  "learningObjective": "Ierarhia frecvent (candidoză, deshidratare) versus rar (CAD, Fournier, amputații) și capcana CAD euglicemice.",
  "optionRationales": [
   "Perechea frecventă este explicită.",
   "Triada rară este listată.",
   "Glicemia normală/ușor crescută este capcana de diagnostic.",
   "B12 ține de metformin, nu de SGLT2.",
   "Candidoza genitală este tocmai efectul frecvent."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Gangrena Fournier și amputațiile se omit lângă candidoză; CAD euglicemică se atribuie greșit sulfonilureelor."
  },
  "textbookExpressions": [
   "gangrena Fournier",
   "glicemiile pot fi normale"
  ]
 },
 {
  "id": "diabet-adv-138",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Inhibitorii de alfa-glucozidază (acarboza):",
  "options": [
   "Împiedică ultima enzimă a digestiei carbohidraților, descompunerea dizaharidelor în monozaharide, încetinind absorbția postprandială",
   "Nu sunt folosiți pe scară largă din cauza eficacității limitate și a efectelor gastrointestinale",
   "Efectele majore sunt flatulență, distensie și diaree, prin fermentarea carbohidraților neabsorbiți",
   "Accelerează absorbția glucozei și sunt prima linie universală, fără efecte digestive",
   "Blochează SGLT2 tubular, identic flozinelor"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Împiedică ultima enzimă a digestiei carbohidraților, descompunerea dizaharidelor în monozaharide, încetinind absorbția postprandială — Corect: Sediul enzimei și efectul postprandial sunt descrise.\n\nNu sunt folosiți pe scară largă din cauza eficacității limitate și a efectelor gastrointestinale — Corect: Utilizarea redusă este explicită.\n\nEfectele majore sunt flatulență, distensie și diaree, prin fermentarea carbohidraților neabsorbiți — Corect: Fermentația intestinală explică simptomele.\n\nAccelerează absorbția glucozei și sunt prima linie universală, fără efecte digestive — Incorect: Acarboza încetinește, nu accelerează, absorbția.\n\nBlochează SGLT2 tubular, identic flozinelor — Incorect: Sediul este intestinal, nu SGLT2 renal.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 719, Inhibitorii alfa-glucozidazei (pagini PDF: 118).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    719
   ],
   "pdfPages": [
    118
   ],
   "section": "Inhibitorii alfa-glucozidazei"
  },
  "learningObjective": "Mecanismul de ultimă enzimă dizaharidică și motivul utilizării reduse (GI + eficacitate limitată).",
  "optionRationales": [
   "Sediul enzimei și efectul postprandial sunt descrise.",
   "Utilizarea redusă este explicită.",
   "Fermentația intestinală explică simptomele.",
   "Acarboza încetinește, nu accelerează, absorbția.",
   "Sediul este intestinal, nu SGLT2 renal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Acarboza se mută pe SGLT2, iar flatulența se uită ca preț al carbohidraților neabsorbiți."
  },
  "textbookExpressions": [
   "dizaharidelor în monozaharide",
   "carbohidratii neabsor"
  ]
 },
 {
  "id": "diabet-adv-139",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Alte terapii orale și originea agoniștilor GLP-1:",
  "options": [
   "Bromocriptina cu eliberare rapidă, administrată la începutul zilei, pare să reseteze ritmul circadian al dopaminei hipotalamice și scade HbA1c cu 5–8 mmol/mol (0,5–0,7%)",
   "Colesevelamul este o rășină de legare a acizilor biliari, care scade colesterolul și poate reduce glicemiile printr-un mecanism gastrointestinal necunoscut",
   "Un grup de agoniști GLP-1 derivă din exendin (saliva unei șopârle din Arizona), cu 53% omologie cu GLP-1 uman și rezistență la DPP-4",
   "Bromocriptina crește HbA1c cu 2%, fiind rezervată tipului 1",
   "Exendinul are 100% omologie cu GLP-1 și este clivat rapid de DPP-4"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Bromocriptina cu eliberare rapidă, administrată la începutul zilei, pare să reseteze ritmul circadian al dopaminei hipotalamice și scade HbA1c cu 5–8 mmol/mol (0,5–0,7%) — Corect: Resetarea circadiană și scăderea 5–8 mmol/mol sunt explicite.\n\nColesevelamul este o rășină de legare a acizilor biliari, care scade colesterolul și poate reduce glicemiile printr-un mecanism gastrointestinal necunoscut — Corect: Natura de rășină și mecanismul necunoscut sunt citate.\n\nUn grup de agoniști GLP-1 derivă din exendin (saliva unei șopârle din Arizona), cu 53% omologie cu GLP-1 uman și rezistență la DPP-4 — Corect: Șopârla, 53% și rezistența la DPP-4 sunt descrise.\n\nBromocriptina crește HbA1c cu 2%, fiind rezervată tipului 1 — Incorect: Bromocriptina scade, nu crește, HbA1c.\n\nExendinul are 100% omologie cu GLP-1 și este clivat rapid de DPP-4 — Incorect: Omologia este 53%, nu 100%; exendinul rezistă clivajului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 719, Bromocriptină; Colesevelam; Exendin (pagini PDF: 118).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    719
   ],
   "pdfPages": [
    118
   ],
   "section": "Bromocriptină; Colesevelam; Exendin"
  },
  "learningObjective": "Nișa circadiană a bromocriptinei, rășina colesevelam și originea exendin 53%.",
  "optionRationales": [
   "Resetarea circadiană și scăderea 5–8 mmol/mol sunt explicite.",
   "Natura de rășină și mecanismul necunoscut sunt citate.",
   "Șopârla, 53% și rezistența la DPP-4 sunt descrise.",
   "Bromocriptina scade, nu crește, HbA1c.",
   "Omologia este 53%, nu 100%; exendinul rezistă clivajului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "53% omologie exendin se rotunjește greșit la 100%; bromocriptina se mută pe axa incretinică."
  },
  "textbookExpressions": [
   "53% homologie",
   "şopârle din deşertul"
  ]
 },
 {
  "id": "diabet-adv-140",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Analogii GLP-1 umani, spre deosebire de agoniștii pe bază de exendin:",
  "options": [
   "Reduc riscul de infarct, accident vascular cerebral, moarte cardiovasculară și insuficiență cardiacă",
   "Există preparate cu administrare o dată pe săptămână; formulări orale sunt în dezvoltare",
   "Agoniștii pe bază de exendin reduc aceleași evenimente CV, identic analogilor umani",
   "Se administrează doar de două ori pe zi, fără forme săptămânale",
   "Sunt contraindicate în obezitate, deoarece cresc greutatea"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Reduc riscul de infarct, accident vascular cerebral, moarte cardiovasculară și insuficiență cardiacă — Corect: Beneficiul CV al analogilor umani este explicit.\n\nExistă preparate cu administrare o dată pe săptămână; formulări orale sunt în dezvoltare — Corect: Săptămânalul și oralele în dezvoltare sunt citate.\n\nAgoniștii pe bază de exendin reduc aceleași evenimente CV, identic analogilor umani — Incorect: Textul precizează că exendin-derivații nu reduc aceleași evenimente.\n\nSe administrează doar de două ori pe zi, fără forme săptămânale — Incorect: Formele vechi erau bid; acum există săptămânale.\n\nSunt contraindicate în obezitate, deoarece cresc greutatea — Incorect: Clasa scade greutatea, nu o crește.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 719, Agoniști GLP-1 — CV; Farmacocinetică (pagini PDF: 118).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    719
   ],
   "pdfPages": [
    118
   ],
   "section": "Agoniști GLP-1 — CV; Farmacocinetică"
  },
  "learningObjective": "Contrastul CV (doar analogii umani) și trecerea de la bid la săptămânal/oral în dezvoltare.",
  "optionRationales": [
   "Beneficiul CV al analogilor umani este explicit.",
   "Săptămânalul și oralele în dezvoltare sunt citate.",
   "Textul precizează că exendin-derivații nu reduc aceleași evenimente.",
   "Formele vechi erau bid; acum există săptămânale.",
   "Clasa scade greutatea, nu o crește."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Beneficiul CV se extinde greșit la tot exendinul, deși textul îl rezervă analogilor umani."
  },
  "textbookExpressions": [
   "analogii GLP-1 umani",
   "o dată pe săptămână"
  ]
 },
 {
  "id": "diabet-adv-141",
  "topicId": "diabet",
  "type": "CS",
  "stem": "În cadranul de tratament al CAD, după prima oră, ritmul de fluide NaCl 0,9% cu potasiu este:",
  "options": [
   "1 L în 2 ore, 1 L în 2 ore, apoi 1 L în 4 ore, 1 L în 4 ore și 1 L în 6 ore",
   "500 ml/oră continuu, 48 de ore, fără potasiu",
   "100 ml în 12 ore, ca unică pungă",
   "Glucoză 10% 1 L/oră de la început, înaintea NaCl",
   "Oprirea fluidelor după primul litru, insulina fiind suficientă"
  ],
  "correct": [
   0
  ],
  "explanation": "1 L în 2 ore, 1 L în 2 ore, apoi 1 L în 4 ore, 1 L în 4 ore și 1 L în 6 ore — Corect: Succesiunea de intervale este din cadran.\n\n500 ml/oră continuu, 48 de ore, fără potasiu — Incorect: 48 de ore la 500 ml fără K nu este schema.\n\n100 ml în 12 ore, ca unică pungă — Incorect: 100 ml/12 ore este insuficient.\n\nGlucoză 10% 1 L/oră de la început, înaintea NaCl — Incorect: Glucoza 10% se adaugă când glicemia scade sub 14 mmol/L.\n\nOprirea fluidelor după primul litru, insulina fiind suficientă — Incorect: Fluidele continuă după primul litru.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 724, Cadranul 23.19 — Fluide după 60 de minute (pagini PDF: 123).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    724
   ],
   "pdfPages": [
    123
   ],
   "section": "Cadranul 23.19 — Fluide după 60 de minute"
  },
  "learningObjective": "Memorarea scării 2–2–4–4–6 ore, distinctă de primul litru din prima oră.",
  "optionRationales": [
   "Succesiunea de intervale este din cadran.",
   "48 de ore la 500 ml fără K nu este schema.",
   "100 ml/12 ore este insuficient.",
   "Glucoza 10% se adaugă când glicemia scade sub 14 mmol/L.",
   "Fluidele continuă după primul litru."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Scara 2–2–4–4–6 se aplatizează greșit la „1 L/oră tot timpul”, ca în prima oră."
  },
  "textbookExpressions": [
   "timp de 2 ore",
   "timp de 6 ore"
  ]
 },
 {
  "id": "diabet-adv-142",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Deficitele tipice de electroliți în CAD, pe kilogram, sunt de ordinul:",
  "options": [
   "Sodiu 7–10 mmol/kg, clor 3–5 mmol/kg, potasiu 3–5 mmol/kg",
   "Sodiu 1 mmol/kg, fără deficit de potasiu",
   "Potasiu 20 mmol/kg, fără deficit de sodiu",
   "Clor 30 mmol/kg, ca unică pierdere",
   "Niciun deficit, CAD fiind o stare de retenție salină"
  ],
  "correct": [
   0
  ],
  "explanation": "Sodiu 7–10 mmol/kg, clor 3–5 mmol/kg, potasiu 3–5 mmol/kg — Corect: Cele trei intervale sunt explicite.\n\nSodiu 1 mmol/kg, fără deficit de potasiu — Incorect: Deficitul de sodiu este substanțial, nu 1 mmol/kg.\n\nPotasiu 20 mmol/kg, fără deficit de sodiu — Incorect: Potasiul este 3–5, nu 20 mmol/kg.\n\nClor 30 mmol/kg, ca unică pierdere — Incorect: Clorul nu este unica pierdere.\n\nNiciun deficit, CAD fiind o stare de retenție salină — Incorect: CAD produce depleție, nu retenție.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 724, Substituția pierderilor de electroliți (pagini PDF: 123).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    724
   ],
   "pdfPages": [
    123
   ],
   "section": "Substituția pierderilor de electroliți"
  },
  "learningObjective": "Reținerea tripletului Na 7–10 / Cl 3–5 / K 3–5 mmol/kg.",
  "optionRationales": [
   "Cele trei intervale sunt explicite.",
   "Deficitul de sodiu este substanțial, nu 1 mmol/kg.",
   "Potasiul este 3–5, nu 20 mmol/kg.",
   "Clorul nu este unica pierdere.",
   "CAD produce depleție, nu retenție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele trei intervale se permută între Na, Cl și K."
  },
  "textbookExpressions": [
   "7-10 mmol/kg",
   "3-5 mmol/kg"
  ]
 },
 {
  "id": "diabet-adv-143",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Un bărbat de 22 de ani cu CAD are potasiu 5,8 mmol/L la prezentare. Conform textului:",
  "options": [
   "Potasiul se adaugă din primul litru, indiferent de valoare",
   "Potasiul nu ar trebui administrat în substituția inițială de fluide sau dacă kaliemia rămâne peste 5,5 mmol/L",
   "Hipopotasemia nu apare după insulină, potasiul crescând invariabil",
   "Hiperpotasemia inițială exclude orice deficit corporal de potasiu",
   "Monitorizarea potasiului este superfluă după prima oră"
  ],
  "correct": [
   1
  ],
  "explanation": "Potasiul se adaugă din primul litru, indiferent de valoare — Incorect: Adăugarea de rutină la 5,8 mmol/L contrazine pragul.\n\nPotasiul nu ar trebui administrat în substituția inițială de fluide sau dacă kaliemia rămâne peste 5,5 mmol/L — Corect: Regula >5,5 mmol/L și riscul de IRA prerenală sunt explicite.\n\nHipopotasemia nu apare după insulină, potasiul crescând invariabil — Incorect: Insulina împinge potasiul în celule, deci kaliemia poate cădea rapid.\n\nHiperpotasemia inițială exclude orice deficit corporal de potasiu — Incorect: Deficitul corporal coexistă cu hiperpotasemie inițială.\n\nMonitorizarea potasiului este superfluă după prima oră — Incorect: Monitorizarea frecventă este cerută.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 724, Potasiul în CAD (pagini PDF: 123).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    724
   ],
   "pdfPages": [
    123
   ],
   "section": "Potasiul în CAD"
  },
  "learningObjective": "Pragul de 5,5 mmol/L ca limită peste care K nu se adaugă, în ciuda deficitului corporal.",
  "optionRationales": [
   "Adăugarea de rutină la 5,8 mmol/L contrazine pragul.",
   "Regula >5,5 mmol/L și riscul de IRA prerenală sunt explicite.",
   "Insulina împinge potasiul în celule, deci kaliemia poate cădea rapid.",
   "Deficitul corporal coexistă cu hiperpotasemie inițială.",
   "Monitorizarea frecventă este cerută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Hiperpotasemia de prezentare maschează deficitul de 3–5 mmol/kg; pragul 5,5 se uită."
  },
  "textbookExpressions": [
   "peste 5,5 mmol/L",
   "leziune acută de rinichi"
  ]
 },
 {
  "id": "diabet-adv-144",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Acidoza hipercloremică din tratamentul CAD:",
  "options": [
   "Apare deoarece electroliții cu sarcină negativă pierduți sunt înlocuiți cu clor",
   "Rinichii o corectează de obicei spontan în câteva zile",
   "Impune bicarbonat hiperton de rutină la orice pH <7,3",
   "Este identică găurii anionice mari persistente a cetozei netratate",
   "Nu apare dacă se folosește NaCl 0,9%, acest fluid prevenind hipercloremia"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Apare deoarece electroliții cu sarcină negativă pierduți sunt înlocuiți cu clor — Corect: Înlocuirea anionilor cu clor este explicația.\n\nRinichii o corectează de obicei spontan în câteva zile — Corect: Corecția spontană în câteva zile este citată.\n\nImpune bicarbonat hiperton de rutină la orice pH <7,3 — Incorect: Bicarbonatul se rezervă pH <7,0, rar.\n\nEste identică găurii anionice mari persistente a cetozei netratate — Incorect: Gaura anionică scade când cetoza se curăță, spre deosebire de hipercloremie.\n\nNu apare dacă se folosește NaCl 0,9%, acest fluid prevenind hipercloremia — Incorect: NaCl 0,9% este tocmai contextul hipercloremiei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 724, Acidoza hipercloremică de recuperare (pagini PDF: 123).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    724
   ],
   "pdfPages": [
    123
   ],
   "section": "Acidoza hipercloremică de recuperare"
  },
  "learningObjective": "Mecanismul de substituție cu clor și corecția renală spontană în zile.",
  "optionRationales": [
   "Înlocuirea anionilor cu clor este explicația.",
   "Corecția spontană în câteva zile este citată.",
   "Bicarbonatul se rezervă pH <7,0, rar.",
   "Gaura anionică scade când cetoza se curăță, spre deosebire de hipercloremie.",
   "NaCl 0,9% este tocmai contextul hipercloremiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Hipercloremia de recuperare se confundă cu acidoza cetonemică inițială cu gaură anionică mare."
  },
  "textbookExpressions": [
   "Acidoza hipercloremică",
   "câteva zile"
  ]
 },
 {
  "id": "diabet-adv-145",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Prevalența retinopatiei la tipul 1 diagnosticat înainte de 33 de ani, după durată lungă:",
  "options": [
   "Aproape toți dezvoltă modificări de fond, iar 60% progresează către retinopatie proliferativă",
   "Sub 5% au orice retinopatie după 40 de ani de evoluție",
   "Proliferativa apare la 2%, fără forme de fond",
   "Modificările de fond exclud orice progresie proliferativă",
   "Prevalența este independentă de durata bolii"
  ],
  "correct": [
   0
  ],
  "explanation": "Aproape toți dezvoltă modificări de fond, iar 60% progresează către retinopatie proliferativă — Corect: Cele două ponderi sunt în legendă.\n\nSub 5% au orice retinopatie după 40 de ani de evoluție — Incorect: Prevalența crește cu durata, nu stă sub 5%.\n\nProliferativa apare la 2%, fără forme de fond — Incorect: 60%, nu 2%, este progresia proliferativă.\n\nModificările de fond exclud orice progresie proliferativă — Incorect: Fondul precede, nu exclude, proliferativa.\n\nPrevalența este independentă de durata bolii — Incorect: Figura este în funcție de durată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 728, Figura 23.15 — Prevalența retinopatiei (pagini PDF: 127).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    728
   ],
   "pdfPages": [
    127
   ],
   "section": "Figura 23.15 — Prevalența retinopatiei"
  },
  "learningObjective": "Cuplarea „aproape toți – fond” cu 60% proliferativă la tipul 1 cu debut <33 de ani.",
  "optionRationales": [
   "Cele două ponderi sunt în legendă.",
   "Prevalența crește cu durata, nu stă sub 5%.",
   "60%, nu 2%, este progresia proliferativă.",
   "Fondul precede, nu exclude, proliferativa.",
   "Figura este în funcție de durată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "60% proliferativă se atribuie greșit tuturor tipurilor de diabet, nu doar tipului 1 cu debut <33 de ani."
  },
  "textbookExpressions": [
   "înainte de vârsta de 33 ani",
   "60% progresează"
  ]
 },
 {
  "id": "diabet-adv-146",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În cadranul gradelor de retinopatie, hemoragiile punctiforme:",
  "options": [
   "Sunt microanevrisme capilare și deseori primele care apar, în retinopatia neproliferativă",
   "Hemoragiile în pată reflectă scurgeri în straturile retiniene mai profunde",
   "Petele de vată/corpii citoizi țin de stadiul preproliferativ, alături de anse venoase și AMIR",
   "Sunt vase de neoformație pe disc, definind proliferativa",
   "Exsudatele dure sunt reziduuri axoplasmatice, nu depozite lipidice"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sunt microanevrisme capilare și deseori primele care apar, în retinopatia neproliferativă — Corect: Microanevrismele ca prim semn sunt explicite.\n\nHemoragiile în pată reflectă scurgeri în straturile retiniene mai profunde — Corect: Scurgerea în straturile profunde definește hemoragia în pată.\n\nPetele de vată/corpii citoizi țin de stadiul preproliferativ, alături de anse venoase și AMIR — Corect: Vata, ansele și AMIR sunt ale preproliferativului.\n\nSunt vase de neoformație pe disc, definind proliferativa — Incorect: Neoformația definește proliferativa, nu punctiformele.\n\nExsudatele dure sunt reziduuri axoplasmatice, nu depozite lipidice — Incorect: Exsudatele dure sunt plasmă bogată în lipide și proteine.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 728, Cadranul 23.21 — Gradele retinopatiei (pagini PDF: 127).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    728
   ],
   "pdfPages": [
    127
   ],
   "section": "Cadranul 23.21 — Gradele retinopatiei"
  },
  "learningObjective": "Secvența punctiform (microanevrism) → pată profundă → preproliferativ (vată, anse, AMIR).",
  "optionRationales": [
   "Microanevrismele ca prim semn sunt explicite.",
   "Scurgerea în straturile profunde definește hemoragia în pată.",
   "Vata, ansele și AMIR sunt ale preproliferativului.",
   "Neoformația definește proliferativa, nu punctiformele.",
   "Exsudatele dure sunt plasmă bogată în lipide și proteine."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Punctiformele (R1) se promovează greșit la neovase (R3); petele de vată coboară în R1."
  },
  "textbookExpressions": [
   "Hemoragii punctiforme",
   "corpi citoizib"
  ]
 },
 {
  "id": "diabet-adv-147",
  "topicId": "diabet",
  "type": "CM",
  "stem": "În nefropatia diabetică, țintele tensionale și alegerea antihiperglicemiantelor includ:",
  "options": [
   "Ținta arterială este <130/80 mmHg; inhibitorii SRAA se administrează și la normotensivi cu microalbuminurie persistentă",
   "Glibenclamidul sau metforminul, parțial excretați renal, trebuie evitați",
   "Dozele de insulină sunt în general reduse, clearance-ul scăzând în boala renală avansată",
   "Inhibitorii SGLT2 încetinesc progresia nefropatiei și mențin funcția renală",
   "Metforminul se inițiază indiferent de RFGe, iar insulina se crește de rutină în BRT"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Ținta arterială este <130/80 mmHg; inhibitorii SRAA se administrează și la normotensivi cu microalbuminurie persistentă — Corect: Ținta și indicația SRAA la normotensivi sunt explicite.\n\nGlibenclamidul sau metforminul, parțial excretați renal, trebuie evitați — Corect: Cei doi agenți orali de evitat sunt numiți.\n\nDozele de insulină sunt în general reduse, clearance-ul scăzând în boala renală avansată — Corect: Reducerea dozelor de insulină este citată.\n\nInhibitorii SGLT2 încetinesc progresia nefropatiei și mențin funcția renală — Corect: Datele SGLT2 sunt menționate.\n\nMetforminul se inițiază indiferent de RFGe, iar insulina se crește de rutină în BRT — Incorect: Metforminul se evită; insulina se reduce, nu se crește.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 731, Nefropatia — Tratament (pagini PDF: 130).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    731
   ],
   "pdfPages": [
    130
   ],
   "section": "Nefropatia — Tratament"
  },
  "learningObjective": "Pachetul 130/80 + IECA la normotensivi, evitarea glibenclamid/metformin și reducerea insulinei.",
  "optionRationales": [
   "Ținta și indicația SRAA la normotensivi sunt explicite.",
   "Cei doi agenți orali de evitat sunt numiți.",
   "Reducerea dozelor de insulină este citată.",
   "Datele SGLT2 sunt menționate.",
   "Metforminul se evită; insulina se reduce, nu se crește."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "IECA-ul „doar la hipertensivi” contrazine indicația din microalbuminurie normotensivă."
  },
  "textbookExpressions": [
   "<130/80 mmHg",
   "glibenclamidul sau met"
  ]
 },
 {
  "id": "diabet-adv-148",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Tratamentul bolii renale terminale la persoanele cu diabet:",
  "options": [
   "Șunturile vasculare tind să se calcifice repede, deci dializa peritoneală cronică ambulatorie poate fi preferată hemodializei",
   "Rata de eșec a transplantelor renale este ușor mai crescută față de nediabetici",
   "Cecitatea, neuropatia autonomă și boala vasculară periferică îngreunează tratamentul",
   "Hemodializa este preferată fiindcă șunturile nu se calcifică în diabet",
   "Transplantul are rată de eșec zero, superioară nediabeticilor"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Șunturile vasculare tind să se calcifice repede, deci dializa peritoneală cronică ambulatorie poate fi preferată hemodializei — Corect: Calcificarea și preferința DPCA sunt explicite.\n\nRata de eșec a transplantelor renale este ușor mai crescută față de nediabetici — Corect: Comparația ratelor de eșec este citată.\n\nCecitatea, neuropatia autonomă și boala vasculară periferică îngreunează tratamentul — Corect: Cele trei complicații care îngreunează tratamentul sunt listate.\n\nHemodializa este preferată fiindcă șunturile nu se calcifică în diabet — Incorect: Șunturile se calcifică, deci hemodializa este mai dificilă.\n\nTransplantul are rată de eșec zero, superioară nediabeticilor — Incorect: Eșecul este ușor mai mare, nu zero.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 731, Boala renală terminală (pagini PDF: 130).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    731
   ],
   "pdfPages": [
    130
   ],
   "section": "Boala renală terminală"
  },
  "learningObjective": "Calcificarea rapidă a șunturilor ca argument pentru DPCA și eșecul ușor crescut al grefei.",
  "optionRationales": [
   "Calcificarea și preferința DPCA sunt explicite.",
   "Comparația ratelor de eșec este citată.",
   "Cele trei complicații care îngreunează tratamentul sunt listate.",
   "Șunturile se calcifică, deci hemodializa este mai dificilă.",
   "Eșecul este ușor mai mare, nu zero."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "DPCA versus hemodializă se inversează; calcificarea șunturilor se uită."
  },
  "textbookExpressions": [
   "calcifice repede",
   "dializa peritoneală"
  ]
 },
 {
  "id": "diabet-adv-149",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Infecțiile de tract urinar în diabet, ca leziune renală asociată:",
  "options": [
   "Sunt relativ mai frecvente la femei, dar nu și la bărbați",
   "Infecțiile ascendente pot urma stazei vezicale din neuropatia autonomă",
   "Infecțiile netratate pot cauza necroză papilară, complicație în prezent foarte rară",
   "Sunt mai frecvente la bărbați decât la femei, fără rol al stazei",
   "Necroza papilară este regula la orice bacteriurie asimptomatică"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sunt relativ mai frecvente la femei, dar nu și la bărbați — Corect: Diferența femei versus bărbați este explicită.\n\nInfecțiile ascendente pot urma stazei vezicale din neuropatia autonomă — Corect: Staza vezicală autonomă explică ascenșiunea.\n\nInfecțiile netratate pot cauza necroză papilară, complicație în prezent foarte rară — Corect: Necroza papilară este descrisă ca foarte rară acum.\n\nSunt mai frecvente la bărbați decât la femei, fără rol al stazei — Incorect: Textul neagă excesul la bărbați.\n\nNecroza papilară este regula la orice bacteriurie asimptomatică — Incorect: Necroza papilară nu este regula bacteriuriei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 731, Infecțiile de tract urinar; Necroza papilară (pagini PDF: 130).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    731
   ],
   "pdfPages": [
    130
   ],
   "section": "Infecțiile de tract urinar; Necroza papilară"
  },
  "learningObjective": "Asimetria de sex (femei, nu bărbați) plus staza autonomă și raritatea actuală a necrozei papilare.",
  "optionRationales": [
   "Diferența femei versus bărbați este explicită.",
   "Staza vezicală autonomă explică ascenșiunea.",
   "Necroza papilară este descrisă ca foarte rară acum.",
   "Textul neagă excesul la bărbați.",
   "Necroza papilară nu este regula bacteriuriei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Excesul de ITU se extinde greșit la bărbați; necroza papilară se tratează ca eveniment frecvent."
  },
  "textbookExpressions": [
   "nu şi la bărbaţi",
   "necroză renală papilară"
  ]
 },
 {
  "id": "diabet-adv-150",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Testarea autonomă la pat, dincolo de ortostatism și respirația profundă, include:",
  "options": [
   "Raportul dintre cel mai lung și cel mai scurt interval R–R în Valsalva (15 secunde): normal ≥1,21, anormal ≤1,20",
   "Raportul R–R clino/ortostatism al bătăilor 30 și 15: normal ≥1,04, anormal ≤1,00",
   "O scădere tensională ortostatică de 2 mmHg, suficientă pentru diagnosticul de boală autonomă",
   "Tahicardia de efort ca unică dovadă de denervare, fără ECG",
   "Valsalva normal sub 1,00, identic pragului ortostatic"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Raportul dintre cel mai lung și cel mai scurt interval R–R în Valsalva (15 secunde): normal ≥1,21, anormal ≤1,20 — Corect: Perechea 1,21 / 1,20 este din tabel.\n\nRaportul R–R clino/ortostatism al bătăilor 30 și 15: normal ≥1,04, anormal ≤1,00 — Corect: Perechea 1,04 / 1,00 este din tabel.\n\nO scădere tensională ortostatică de 2 mmHg, suficientă pentru diagnosticul de boală autonomă — Incorect: 2 mmHg este în limite normale (anormal ≥30).\n\nTahicardia de efort ca unică dovadă de denervare, fără ECG — Incorect: Testele sunt ECG de interval, nu doar tahicardie de efort.\n\nValsalva normal sub 1,00, identic pragului ortostatic — Incorect: Valsalva anormal este ≤1,20, nu sub 1,00.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 732, Cadranul 23.23 — Valsalva; R–R 30/15 (pagini PDF: 131).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    732
   ],
   "pdfPages": [
    131
   ],
   "section": "Cadranul 23.23 — Valsalva; R–R 30/15"
  },
  "learningObjective": "Cele două rapoarte R–R (Valsalva 1,21/1,20 și 30/15: 1,04/1,00), distincte de pragul tensional 30 mmHg.",
  "optionRationales": [
   "Perechea 1,21 / 1,20 este din tabel.",
   "Perechea 1,04 / 1,00 este din tabel.",
   "2 mmHg este în limite normale (anormal ≥30).",
   "Testele sunt ECG de interval, nu doar tahicardie de efort.",
   "Valsalva anormal este ≤1,20, nu sub 1,00."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele trei praguri numerice (30 mmHg, 1,21, 1,04) se amestecă între linii."
  },
  "textbookExpressions": [
   "2:1,21",
   "2:1,04"
  ]
 },
 {
  "id": "diabet-adv-151",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Amiotrofia diabetică se caracterizează prin:",
  "options": [
   "Prezentare de obicei la bărbați vârstnici, cu atrofii dureroase, adesea asimetrice, ale cvadricepsului",
   "Reflexe rotuliene diminuate sau absente; uneori răspuns extensor plantar și proteine crescute în LCR",
   "Asociere cu perioade de hiperglicemie severă; poate fi prezentă de la diagnostic și dispare odată cu ameliorarea controlului",
   "Atrofie distală simetrică a mușchilor mici, fără durere, identică polineuropatiei senzitive",
   "Remisiunea este imposibilă, forma fiind identică neuropatiei acute dureroase cronice tardive"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Prezentare de obicei la bărbați vârstnici, cu atrofii dureroase, adesea asimetrice, ale cvadricepsului — Corect: Demografia și cvadricepsul asimetric sunt explicite.\n\nReflexe rotuliene diminuate sau absente; uneori răspuns extensor plantar și proteine crescute în LCR — Corect: Reflexele, Babinski și LCR sunt citate.\n\nAsociere cu perioade de hiperglicemie severă; poate fi prezentă de la diagnostic și dispare odată cu ameliorarea controlului — Corect: Legătura cu hiperglicemia și reversibilitatea sunt descrise.\n\nAtrofie distală simetrică a mușchilor mici, fără durere, identică polineuropatiei senzitive — Incorect: Distribuția este proximală, nu distală simetrică.\n\nRemisiunea este imposibilă, forma fiind identică neuropatiei acute dureroase cronice tardive — Incorect: Textul spune că dispare cu ameliorarea controlului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 732, Amiotrofia diabetică (pagini PDF: 131).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    732
   ],
   "pdfPages": [
    131
   ],
   "section": "Amiotrofia diabetică"
  },
  "learningObjective": "Profilul vârstnic masculin, cvadriceps asimetric, rotulian abolit și LCR hiperproteinorahic.",
  "optionRationales": [
   "Demografia și cvadricepsul asimetric sunt explicite.",
   "Reflexele, Babinski și LCR sunt citate.",
   "Legătura cu hiperglicemia și reversibilitatea sunt descrise.",
   "Distribuția este proximală, nu distală simetrică.",
   "Textul spune că dispare cu ameliorarea controlului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amiotrofia (proximală, asimetrică) se confundă cu polineuropatia simetrică distală de pe aceeași pagină."
  },
  "textbookExpressions": [
   "bărbaţii vârstnici",
   "lichidului cefalorahidian"
  ]
 },
 {
  "id": "diabet-adv-152",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Țintele cardiovasculare „ideale” din cadranul 23.26 includ:",
  "options": [
   "HbA1c <7% (53 mmol/mol) și tensiune <130/80 mmHg",
   "Colesterol total <4,0 mmol/L și LDL-c <2,0 mmol/L",
   "HDL-c >1,1 mmol/L (>1,3 la femei) și trigliceride <1,7 mmol/L",
   "HbA1c <8% ca țintă ideală, identică celei „rezonabile”",
   "LDL-c <3,0 mmol/L ca țintă ideală, nu rezonabilă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "HbA1c <7% (53 mmol/mol) și tensiune <130/80 mmHg — Corect: Perechea HbA1c–TA ideală este din tabel.\n\nColesterol total <4,0 mmol/L și LDL-c <2,0 mmol/L — Corect: Perechea CT–LDL ideală continuă rândurile.\n\nHDL-c >1,1 mmol/L (>1,3 la femei) și trigliceride <1,7 mmol/L — Corect: HDL și TG ideale, cu nota pentru femei, închid lipidograma.\n\nHbA1c <8% ca țintă ideală, identică celei „rezonabile” — Incorect: <8% este coloana rezonabilă, nu ideală.\n\nLDL-c <3,0 mmol/L ca țintă ideală, nu rezonabilă — Incorect: LDL <3,0 este rezonabil, nu ideal.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 735, Cadranul 23.26 — Ținte ideale (pagini PDF: 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    735
   ],
   "pdfPages": [
    134
   ],
   "section": "Cadranul 23.26 — Ținte ideale"
  },
  "learningObjective": "Memorarea coloanei „ideal” (7% / 130/80 / CT 4 / LDL 2 / HDL 1,1 / TG 1,7), distinctă de „rezonabil”.",
  "optionRationales": [
   "Perechea HbA1c–TA ideală este din tabel.",
   "Perechea CT–LDL ideală continuă rândurile.",
   "HDL și TG ideale, cu nota pentru femei, închid lipidograma.",
   "<8% este coloana rezonabilă, nu ideală.",
   "LDL <3,0 este rezonabil, nu ideal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Coloanele ideal/rezonabil (7 vs 8%, LDL 2 vs 3) se permută ușor."
  },
  "textbookExpressions": [
   "<7% (53 mmol/mol)",
   "LDLc <2,0"
  ]
 },
 {
  "id": "diabet-adv-153",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Statinele la persoanele cu diabet, conform textului:",
  "options": [
   "Sunt recomandate peste 40 de ani sau după 10 ani de evoluție dacă există complicații microvasculare",
   "Evenimentele CV sunt reduse cu 20% pentru fiecare scădere a LDL-c cu 1 mmol/L",
   "Ezetimibul sau inhibitorii PCSK9 sunt indicați dacă statinele nu sunt tolerate sau ținta nu este atinsă",
   "Se evită după 40 de ani, beneficiul apărând doar la nediabetici",
   "Reducerea LDL nu influențează evenimentele, ezetimibul fiind de primă linie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sunt recomandate peste 40 de ani sau după 10 ani de evoluție dacă există complicații microvasculare — Corect: Cele două praguri de inițiere sunt explicite.\n\nEvenimentele CV sunt reduse cu 20% pentru fiecare scădere a LDL-c cu 1 mmol/L — Corect: Regula de 20% per mmol/L este citată.\n\nEzetimibul sau inhibitorii PCSK9 sunt indicați dacă statinele nu sunt tolerate sau ținta nu este atinsă — Corect: Ezetimib și PCSK9 sunt alternativa.\n\nSe evită după 40 de ani, beneficiul apărând doar la nediabetici — Incorect: Recomandarea începe tocmai după 40 de ani.\n\nReducerea LDL nu influențează evenimentele, ezetimibul fiind de primă linie — Incorect: Statinele sunt prima linie lipidică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 735, Prevenția CV — Statine (pagini PDF: 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    735
   ],
   "pdfPages": [
    134
   ],
   "section": "Prevenția CV — Statine"
  },
  "learningObjective": "Fereastra 40 de ani / 10 ani de boală plus regula 20% per 1 mmol/L LDL.",
  "optionRationales": [
   "Cele două praguri de inițiere sunt explicite.",
   "Regula de 20% per mmol/L este citată.",
   "Ezetimib și PCSK9 sunt alternativa.",
   "Recomandarea începe tocmai după 40 de ani.",
   "Statinele sunt prima linie lipidică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "20% per 1 mmol/L se confundă cu 25–35% al IECA de pe același paragraf."
  },
  "textbookExpressions": [
   "vârstă peste 40 ani",
   "1 mmol/L"
  ]
 },
 {
  "id": "diabet-adv-154",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Aspirina în prevenția cardiovasculară la diabet:",
  "options": [
   "În doze mici reduce riscul macrovascular, dar asociază morbiditate și mortalitate hemoragică",
   "Beneficiile depășesc riscul de sângerare în prevenția secundară",
   "În Europa nu este recomandată pentru prevenția primară",
   "Este prima linie de prevenție primară, fără risc hemoragic",
   "Înlocuiește statina după 40 de ani, ca unică măsură lipidică"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În doze mici reduce riscul macrovascular, dar asociază morbiditate și mortalitate hemoragică — Corect: Reducerea macrovasculară și prețul hemoragic sunt explicite.\n\nBeneficiile depășesc riscul de sângerare în prevenția secundară — Corect: Prevenția secundară este indicația.\n\nÎn Europa nu este recomandată pentru prevenția primară — Corect: Non-recomandarea europeană în primar este precizată.\n\nEste prima linie de prevenție primară, fără risc hemoragic — Incorect: Riscul hemoragic există; primarul nu este indicația.\n\nÎnlocuiește statina după 40 de ani, ca unică măsură lipidică — Incorect: Aspirina nu înlocuiește statina.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 735, Aspirina (pagini PDF: 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    735
   ],
   "pdfPages": [
    134
   ],
   "section": "Aspirina"
  },
  "learningObjective": "Contrastul secundar (beneficiu > risc) versus primar (nerecomandată în Europa).",
  "optionRationales": [
   "Reducerea macrovasculară și prețul hemoragic sunt explicite.",
   "Prevenția secundară este indicația.",
   "Non-recomandarea europeană în primar este precizată.",
   "Riscul hemoragic există; primarul nu este indicația.",
   "Aspirina nu înlocuiește statina."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Prevenția primară versus secundară se inversează; „Europa nu recomandă primarul” se uită."
  },
  "textbookExpressions": [
   "prevenţia secundară",
   "prevenţia primară"
  ]
 },
 {
  "id": "diabet-adv-155",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Insuficiența cardiacă în diabet, conform datelor din text:",
  "options": [
   "Este mai frecventă decât boala CV aterosclerotică; atât FE păstrată, cât și FE redusă apar mai des",
   "Aproximativ două treimi dintre cei cu tip 2 au caractere de disfuncție VS la 5 ani de la diagnostic",
   "După instalarea IC, doar 10% supraviețuiesc la 5 ani",
   "Pioglitazona și saxagliptina au crescut riscul de IC în studii; SGLT2 îl reduc; agoniștii GLP-1 nu au efect asupra IC",
   "IC este mai rară decât ateroscleroza, cu supraviețuire de 90% la 5 ani"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este mai frecventă decât boala CV aterosclerotică; atât FE păstrată, cât și FE redusă apar mai des — Corect: Comparația cu ateroscleroza și cele două fenotipuri FE sunt explicite.\n\nAproximativ două treimi dintre cei cu tip 2 au caractere de disfuncție VS la 5 ani de la diagnostic — Corect: Cifra de două treimi la 5 ani este citată.\n\nDupă instalarea IC, doar 10% supraviețuiesc la 5 ani — Corect: Supraviețuirea de 10% la 5 ani este precizată.\n\nPioglitazona și saxagliptina au crescut riscul de IC în studii; SGLT2 îl reduc; agoniștii GLP-1 nu au efect asupra IC — Corect: Efectele polarizate ale claselor sunt descrise.\n\nIC este mai rară decât ateroscleroza, cu supraviețuire de 90% la 5 ani — Incorect: Textul afirmă opusul ierarhiei și al supraviețuirii.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 735, Insuficiența cardiacă (pagini PDF: 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    735
   ],
   "pdfPages": [
    134
   ],
   "section": "Insuficiența cardiacă"
  },
  "learningObjective": "Ponderea 2/3 disfuncție VS la 5 ani, supraviețuirea 10% și polaritatea medicamentelor (pio/saxa versus SGLT2).",
  "optionRationales": [
   "Comparația cu ateroscleroza și cele două fenotipuri FE sunt explicite.",
   "Cifra de două treimi la 5 ani este citată.",
   "Supraviețuirea de 10% la 5 ani este precizată.",
   "Efectele polarizate ale claselor sunt descrise.",
   "Textul afirmă opusul ierarhiei și al supraviețuirii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "10% supraviețuire la 5 ani se inversează cu 90%; 2/3 disfuncție VS se uită."
  },
  "textbookExpressions": [
   "două treimi",
   "10% pacienţi supravieţuind"
  ]
 },
 {
  "id": "diabet-adv-156",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Infecțiile la persoana cu diabet, potrivit capitolului:",
  "options": [
   "Hiperglicemia favorizează infecțiile prin tulburări ale imunității înnăscute; imunitatea umorală pare relativ neafectată",
   "Boala microvasculară poate contribui la severitatea otitei externe maligne, a pielonefritei emfizematoase și a fasceitei necrozante",
   "ITU, bacteriuria asimptomatică, infecțiile genitale micotice, infecțiile de părți moi și riscul de tuberculoză sunt crescute",
   "Diabetul controlat crește de mai multe ori riscul infecțios, iar imunitatea umorală este abolită",
   "Otita externă malignă și fasceita necrozantă sunt independente de microangiopatie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hiperglicemia favorizează infecțiile prin tulburări ale imunității înnăscute; imunitatea umorală pare relativ neafectată — Corect: Textul leagă hiperglicemia de imunitatea înnăscută, cu umorala relativ neafectată.\n\nBoala microvasculară poate contribui la severitatea otitei externe maligne, a pielonefritei emfizematoase și a fasceitei necrozante — Corect: Otita externă malignă, pielonefrita emfizematoasă și fasceita necrozantă sunt citate.\n\nITU, bacteriuria asimptomatică, infecțiile genitale micotice, infecțiile de părți moi și riscul de tuberculoză sunt crescute — Corect: ITU, micoticele, părțile moi și TBC sunt enumerate.\n\nDiabetul controlat crește de mai multe ori riscul infecțios, iar imunitatea umorală este abolită — Incorect: Diabetul controlat nu crește predispoziția; umorala nu este abolită.\n\nOtita externă malignă și fasceita necrozantă sunt independente de microangiopatie — Incorect: Microangiopatia este invocată tocmai pentru aceste infecții severe.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 735, Alte complicații — Infecții și imunitate (pagini PDF: 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    735
   ],
   "pdfPages": [
    134
   ],
   "section": "Alte complicații — Infecții și imunitate"
  },
  "learningObjective": "Separarea imunității înnăscute perturbate de umorala relativ păstrată și a infecțiilor severe legate de microangiopatie.",
  "optionRationales": [
   "Textul leagă hiperglicemia de imunitatea înnăscută, cu umorala relativ neafectată.",
   "Otita externă malignă, pielonefrita emfizematoasă și fasceita necrozantă sunt citate.",
   "ITU, micoticele, părțile moi și TBC sunt enumerate.",
   "Diabetul controlat nu crește predispoziția; umorala nu este abolită.",
   "Microangiopatia este invocată tocmai pentru aceste infecții severe."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează umorala „abolită” și rupe microangiopatia de otita malignă/fasceită, două asocieri de pe aceeași pagină."
  },
  "textbookExpressions": [
   "imunitatea umorală",
   "fasceita necrozantă"
  ]
 },
 {
  "id": "diabet-adv-157",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Malabsorbția și boala celiacă la persoanele cu diabet:",
  "options": [
   "Malabsorbția poate urma insuficienței cronice a pancreasului exocrin",
   "Doar 10% din funcția pancreatică este necesară pentru o digestie normală; tratamentul este cu enzime pancreatice",
   "Persoanele cu tip 1 au prevalență mai crescută a bolii celiace",
   "Insuficiența exocrină este regula, 90% din funcție fiind necesară digestiei",
   "Boala celiacă este mai rară în tipul 1 decât în populația generală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Malabsorbția poate urma insuficienței cronice a pancreasului exocrin — Corect: Cauza exocrină este citată.\n\nDoar 10% din funcția pancreatică este necesară pentru o digestie normală; tratamentul este cu enzime pancreatice — Corect: Pragul de 10% și enzimele sunt explicite.\n\nPersoanele cu tip 1 au prevalență mai crescută a bolii celiace — Corect: Excesul de celiacă în tipul 1 este precizat.\n\nInsuficiența exocrină este regula, 90% din funcție fiind necesară digestiei — Incorect: Textul spune 10%, nu 90%.\n\nBoala celiacă este mai rară în tipul 1 decât în populația generală — Incorect: Prevalența celiacă este crescută, nu scăzută, în tipul 1.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 735, Malabsorbție; Boala celiacă (pagini PDF: 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    735
   ],
   "pdfPages": [
    134
   ],
   "section": "Malabsorbție; Boala celiacă"
  },
  "learningObjective": "Pragul de 10% funcție exocrină reziduală și excesul de celiacă din tipul 1.",
  "optionRationales": [
   "Cauza exocrină este citată.",
   "Pragul de 10% și enzimele sunt explicite.",
   "Excesul de celiacă în tipul 1 este precizat.",
   "Textul spune 10%, nu 90%.",
   "Prevalența celiacă este crescută, nu scăzută, în tipul 1."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "10% funcție suficientă se citește greșit ca 10% cu malabsorbție certă."
  },
  "textbookExpressions": [
   "10% din funcţia",
   "bolii celiace"
  ]
 },
 {
  "id": "diabet-adv-158",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Infecțiile cutanate, genitale și tuberculoza în diabet:",
  "options": [
   "Infecțiile genitale micotice sunt mai frecvente, în special la femei",
   "Infecțiile cutanate și ale țesuturilor moi sunt mai des întâlnite",
   "Riscul de tuberculoză este crescut",
   "Imunitatea umorală este abolită, vaccinatele fiind inutile",
   "TB este mai rară decât în populația generală, hiperglicemia fiind protectoare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Infecțiile genitale micotice sunt mai frecvente, în special la femei — Corect: Predilecția feminină a micozelor genitale este explicită.\n\nInfecțiile cutanate și ale țesuturilor moi sunt mai des întâlnite — Corect: Țesuturile moi sunt listate.\n\nRiscul de tuberculoză este crescut — Corect: Riscul de TB este citat.\n\nImunitatea umorală este abolită, vaccinatele fiind inutile — Incorect: Imunitatea umorală pare relativ neafectată.\n\nTB este mai rară decât în populația generală, hiperglicemia fiind protectoare — Incorect: TB este crescută, nu scăzută.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 735, Infecțiile — Micotice; Cutane; TB (pagini PDF: 134).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    735
   ],
   "pdfPages": [
    134
   ],
   "section": "Infecțiile — Micotice; Cutane; TB"
  },
  "learningObjective": "Triada micotice feminine / țesuturi moi / TB crescută, dincolo de Klebsiella și otita malignă deja folosite.",
  "optionRationales": [
   "Predilecția feminină a micozelor genitale este explicită.",
   "Țesuturile moi sunt listate.",
   "Riscul de TB este citat.",
   "Imunitatea umorală pare relativ neafectată.",
   "TB este crescută, nu scăzută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "TB crescută se uită lângă otita malignă; micozele se mută greșit ca predominanță masculină."
  },
  "textbookExpressions": [
   "genitale micotice",
   "Riscul de tuberculoză"
  ]
 },
 {
  "id": "diabet-adv-159",
  "topicId": "diabet",
  "type": "CM",
  "stem": "La examenul de picior, semnele neuropate din cadranul 23.3 includ:",
  "options": [
   "Pierderea arcului plantar și degete deformate în gheară",
   "Ulcere neuropate și deformarea articulației (picior Charcot)",
   "Pierderea sensibilității în mănușă sau șosetă, a vibrației, propriocepției și durerii, plus reflexul ahilian",
   "Tegumente reci și pulsuri absente, ca unică manifestare neuropată, fără deformare",
   "Paloarea și pierderea părului, fără evaluare a sensibilității"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pierderea arcului plantar și degete deformate în gheară — Corect: Arcul și gheara deschid semnele neuropate.\n\nUlcere neuropate și deformarea articulației (picior Charcot) — Corect: Ulcerul și Charcot continuă lista.\n\nPierderea sensibilității în mănușă sau șosetă, a vibrației, propriocepției și durerii, plus reflexul ahilian — Corect: Mănușa/șoseta, vibrația și ahilianul închid examenul.\n\nTegumente reci și pulsuri absente, ca unică manifestare neuropată, fără deformare — Incorect: Tegumentele reci și pulsurile absente sunt vasculare.\n\nPaloarea și pierderea părului, fără evaluare a sensibilității — Incorect: Paloarea ține de ischemia din aceeași figură.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 700, Cadranul 23.3 — Caracteristici ale neuropatiei (pagini PDF: 99).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    700
   ],
   "pdfPages": [
    99
   ],
   "section": "Cadranul 23.3 — Caracteristici ale neuropatiei"
  },
  "learningObjective": "Constelația deformare–ulcer–Charcot–mănușă/șosetă, distinctă de rubrica ischemică (paloare, pulsuri).",
  "optionRationales": [
   "Arcul și gheara deschid semnele neuropate.",
   "Ulcerul și Charcot continuă lista.",
   "Mănușa/șoseta, vibrația și ahilianul închid examenul.",
   "Tegumentele reci și pulsurile absente sunt vasculare.",
   "Paloarea ține de ischemia din aceeași figură."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Rubrica neuropată se înlocuiește cu cea ischemică din același cadran."
  },
  "textbookExpressions": [
   "piciorul Charcol",
   "în mănuşă\" sau .în şosetă"
  ]
 },
 {
  "id": "diabet-adv-160",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Evaluarea anuală din cadranul 23.2, dincolo de ochi, rinichi și picior, include:",
  "options": [
   "Hemoleucogramă completă, funcție tiroidiană și funcție hepatică",
   "Statusul de fumător, tensiunea arterială, profilul lipidic și riscul CV global (ex. QRISK)",
   "Revizuirea locurilor de injectare a insulinei",
   "Înlocuirea profilului lipidic cu un singur TSH, suficient pentru tot riscul",
   "Omiterea HbA1c dacă greutatea este stabilă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hemoleucogramă completă, funcție tiroidiană și funcție hepatică — Corect: Cele trei probe de laborator sunt listate.\n\nStatusul de fumător, tensiunea arterială, profilul lipidic și riscul CV global (ex. QRISK) — Corect: Pachetul CV, inclusiv QRISK, este explicit.\n\nRevizuirea locurilor de injectare a insulinei — Corect: Locurile de injectare figurează la medicație.\n\nÎnlocuirea profilului lipidic cu un singur TSH, suficient pentru tot riscul — Incorect: Profilul lipidic rămâne o rubrică distinctă.\n\nOmiterea HbA1c dacă greutatea este stabilă — Incorect: HbA1c este item de control glicemic, nu se omite.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 700, Cadranul 23.2 — Evaluări anuale (pagini PDF: 99).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    700
   ],
   "pdfPages": [
    99
   ],
   "section": "Cadranul 23.2 — Evaluări anuale"
  },
  "learningObjective": "Rubricile de laborator sistemic (HLG, tiroidă, ficat) și calculul QRISK, pe lângă triada ochi–rinichi–picior.",
  "optionRationales": [
   "Cele trei probe de laborator sunt listate.",
   "Pachetul CV, inclusiv QRISK, este explicit.",
   "Locurile de injectare figurează la medicație.",
   "Profilul lipidic rămâne o rubrică distinctă.",
   "HbA1c este item de control glicemic, nu se omite."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "QRISK și locurile de injectare se omit când se reține doar triada microvasculară."
  },
  "textbookExpressions": [
   "Scorul QRISK",
   "Funcţia tiroidiană"
  ]
 },
 {
  "id": "diabet-adv-161",
  "topicId": "diabet",
  "type": "CM",
  "stem": "Sinteza, împăturirea și eliberarea insulinei în celula beta:",
  "options": [
   "Ribozomii produc pre-proinsulină din ARNm; porțiunea hidrofobă „pre” permite transferul în Golgi, apoi este scindată",
   "Proinsulina din granule suferă împăturire stabilizată prin punți disulfidice; peptidul C se desparte, lăsând insulina ca două lanțuri legate",
   "Cantități echimolare de insulină și peptid C sunt eliberate pe calea reglementată; o cantitate mică iese pe calea constitutivă, ocolind granulele",
   "Pre-proinsulina este secretată direct, fără Golgi și fără peptid C",
   "Calea constitutivă este unica cale, granulele fiind absente în celula beta"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ribozomii produc pre-proinsulină din ARNm; porțiunea hidrofobă „pre” permite transferul în Golgi, apoi este scindată — Corect: Etapa pre-proinsulină/Golgi este descrisă.\n\nProinsulina din granule suferă împăturire stabilizată prin punți disulfidice; peptidul C se desparte, lăsând insulina ca două lanțuri legate — Corect: Împăturirea, punțile și scindarea peptidului C sunt explicite.\n\nCantități echimolare de insulină și peptid C sunt eliberate pe calea reglementată; o cantitate mică iese pe calea constitutivă, ocolind granulele — Corect: Cele două căi de eliberare sunt contrastate.\n\nPre-proinsulina este secretată direct, fără Golgi și fără peptid C — Incorect: Pre-proinsulina nu se secretă ca atare.\n\nCalea constitutivă este unica cale, granulele fiind absente în celula beta — Incorect: Calea reglementată prin granule este principala.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 704, Figura 23.3 — Sinteza insulinei (pagini PDF: 103).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    704
   ],
   "pdfPages": [
    103
   ],
   "section": "Figura 23.3 — Sinteza insulinei"
  },
  "learningObjective": "Secvența pre-proinsulină → proinsulină → insulină + peptid C echimolar, plus calea constitutivă minoră.",
  "optionRationales": [
   "Etapa pre-proinsulină/Golgi este descrisă.",
   "Împăturirea, punțile și scindarea peptidului C sunt explicite.",
   "Cele două căi de eliberare sunt contrastate.",
   "Pre-proinsulina nu se secretă ca atare.",
   "Calea reglementată prin granule este principala."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Calea constitutivă minoră se promovează ca unică; echimolaritatea insulină–peptid C se uită."
  },
  "textbookExpressions": [
   "pre-proinsulina",
   "ca/ea constitutivă"
  ]
 },
 {
  "id": "diabet-adv-162",
  "topicId": "diabet",
  "type": "CS",
  "stem": "Lispro, ca analog rapid, este creat prin:",
  "options": [
   "Inversarea ordinii prolinei și lizinei în pozițiile 28 și 29 ale lanțului B",
   "Înlocuirea prolinei B28 cu acid aspartic, ca la aspart",
   "Înlocuirea asparaginei A21 cu glicină, ca la glargin",
   "Adăugarea unui lanț de acid gras la B29, ca la detemir",
   "Eliminarea treoninei B30, ca la degludec"
  ],
  "correct": [
   0
  ],
  "explanation": "Inversarea ordinii prolinei și lizinei în pozițiile 28 și 29 ale lanțului B — Corect: Inversiunea 28–29 este definiția lispro.\n\nÎnlocuirea prolinei B28 cu acid aspartic, ca la aspart — Incorect: Asp B28 definește aspartul, nu lispro.\n\nÎnlocuirea asparaginei A21 cu glicină, ca la glargin — Incorect: Glicina A21 este a glarginei.\n\nAdăugarea unui lanț de acid gras la B29, ca la detemir — Incorect: Acidul gras la B29 ține de detemir/degludec.\n\nEliminarea treoninei B30, ca la degludec — Incorect: Ștergerea B30 ține de detemir/degludec.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 23, p. 703, Figura 23.2 — Lispro (pagini PDF: 102).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 23,
   "printedPages": [
    703
   ],
   "pdfPages": [
    102
   ],
   "section": "Figura 23.2 — Lispro"
  },
  "learningObjective": "Reținerea inversiunii B28–B29 (Pro–Lys) ca semnătură a lispro, distinctă de aspart (Asp B28).",
  "optionRationales": [
   "Inversiunea 28–29 este definiția lispro.",
   "Asp B28 definește aspartul, nu lispro.",
   "Glicina A21 este a glarginei.",
   "Acidul gras la B29 ține de detemir/degludec.",
   "Ștergerea B30 ține de detemir/degludec."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversiunea Pro–Lys (lispro) se confundă cu substituția Asp (aspart) de pe aceeași figură."
  },
  "textbookExpressions": [
   "Lispro este creat",
   "poziţiile 28 şi 29"
  ]
 }
];
