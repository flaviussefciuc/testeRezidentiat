import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_REUMATOLOGIE:(Question&Record<string,unknown>)[]=[
 {
  "id": "reumatologie-adv-013",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Care corespondență între blocanții TNF-α și structura lor moleculară este corectă?",
  "options": [
   "Etanercept — anticorp monoclonal IgG1; certolizumab — fragment Fab pegilat; golimumab — proteină de fuziune p75–IgG1",
   "Etanercept — proteină de fuziune p75–IgG1; certolizumab — fragment Fab pegilat fără porțiune Fc; golimumab — anticorp monoclonal IgG1 uman",
   "Etanercept — proteină de fuziune CTLA4–IgG1; certolizumab — fragment Fab pegilat; golimumab — anticorp monoclonal IgG1 uman",
   "Etanercept — proteină de fuziune p75–IgG1; certolizumab — anticorp IgG1 pegilat cu porțiune Fc; golimumab — anticorp monoclonal IgG1 uman",
   "Etanercept — proteină de fuziune p75–IgG1; certolizumab — fragment Fab pegilat fără porțiune Fc; golimumab — fragment Fab uman fără porțiune Fc"
  ],
  "correct": [
   1
  ],
  "explanation": "Etanercept — anticorp monoclonal IgG1; certolizumab — fragment Fab pegilat; golimumab — proteină de fuziune p75–IgG1 — Incorect: Structurile etanerceptului și golimumabului sunt inversate.\n\nEtanercept — proteină de fuziune p75–IgG1; certolizumab — fragment Fab pegilat fără porțiune Fc; golimumab — anticorp monoclonal IgG1 uman — Corect: Toate cele trei structuri corespund descrierii din bibliografie.\n\nEtanercept — proteină de fuziune CTLA4–IgG1; certolizumab — fragment Fab pegilat; golimumab — anticorp monoclonal IgG1 uman — Incorect: Componenta etanerceptului este receptorul p75; CTLA4 aparține abataceptului.\n\nEtanercept — proteină de fuziune p75–IgG1; certolizumab — anticorp IgG1 pegilat cu porțiune Fc; golimumab — anticorp monoclonal IgG1 uman — Incorect: Certolizumab este fragment Fab și nu conține porțiunea Fc.\n\nEtanercept — proteină de fuziune p75–IgG1; certolizumab — fragment Fab pegilat fără porțiune Fc; golimumab — fragment Fab uman fără porțiune Fc — Incorect: Golimumab este anticorp IgG1 uman, nu fragment Fab fără Fc.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 445, 447, Terapii biologice — Blocanții TNF-α (pagini PDF: 75, 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    445,
    447
   ],
   "pdfPages": [
    75,
    77
   ],
   "section": "Terapii biologice — Blocanții TNF-α"
  },
  "learningObjective": "Diferențierea structurilor moleculare între medicamente care au aceeași țintă.",
  "optionRationales": [
   "Structurile etanerceptului și golimumabului sunt inversate.",
   "Toate cele trei structuri corespund descrierii din bibliografie.",
   "Componenta etanerceptului este receptorul p75; CTLA4 aparține abataceptului.",
   "Certolizumab este fragment Fab și nu conține porțiunea Fc.",
   "Golimumab este anticorp IgG1 uman, nu fragment Fab fără Fc."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Aceeași țintă pentru toate medicamentele; variantele diferă numai prin domeniul receptorului, fragmentul Fab și prezența Fc."
  },
  "textbookExpressions": [
   "proteină de fuziune",
   "fragment Fab",
   "lipsa porțiunii Fc"
  ]
 },
 {
  "id": "reumatologie-adv-001",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Care asociere între moleculele exprimate de fibroblastele sinoviale și rolurile lor în sinovita reumatoidă este corectă?",
  "options": [
   "VCAM-1 — prevenirea lizei prin complement; DAF — supraviețuirea limfocitelor B; caderina 11 — interacțiuni intercelulare",
   "VCAM-1 — supraviețuirea limfocitelor B; DAF — interacțiuni intercelulare; caderina 11 — prevenirea lizei prin complement",
   "VCAM-1 — supraviețuirea și diferențierea limfocitelor B; DAF — prevenirea lizei prin complement; caderina 11 — interacțiuni intercelulare",
   "VCAM-1 — interacțiuni intercelulare; DAF — supraviețuirea limfocitelor B; caderina 11 — prevenirea lizei prin complement",
   "VCAM-1 — prevenirea lizei prin complement; DAF — interacțiuni intercelulare; caderina 11 — supraviețuirea limfocitelor B"
  ],
  "correct": [
   2
  ],
  "explanation": "VCAM-1 — prevenirea lizei prin complement; DAF — supraviețuirea limfocitelor B; caderina 11 — interacțiuni intercelulare — Incorect: Rolurile VCAM-1 și DAF sunt inversate.\n\nVCAM-1 — supraviețuirea limfocitelor B; DAF — interacțiuni intercelulare; caderina 11 — prevenirea lizei prin complement — Incorect: Rolurile DAF și caderinei 11 sunt inversate.\n\nVCAM-1 — supraviețuirea și diferențierea limfocitelor B; DAF — prevenirea lizei prin complement; caderina 11 — interacțiuni intercelulare — Corect: Succesiunea corespunde celor trei funcții din text.\n\nVCAM-1 — interacțiuni intercelulare; DAF — supraviețuirea limfocitelor B; caderina 11 — prevenirea lizei prin complement — Incorect: Funcțiile atribuite DAF și caderinei 11 nu corespund; suportul limfocitelor B este atribuit VCAM-1.\n\nVCAM-1 — prevenirea lizei prin complement; DAF — interacțiuni intercelulare; caderina 11 — supraviețuirea limfocitelor B — Incorect: Prevenirea lizei revine DAF, iar suportul limfocitelor B revine VCAM-1.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 438, Artrita reumatoidă — Imunologie (pagini PDF: 68).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    438
   ],
   "pdfPages": [
    68
   ],
   "section": "Artrita reumatoidă — Imunologie"
  },
  "learningObjective": "Asocierea fiecărei molecule sinoviale cu funcția descrisă.",
  "optionRationales": [
   "Rolurile VCAM-1 și DAF sunt inversate.",
   "Rolurile DAF și caderinei 11 sunt inversate.",
   "Succesiunea corespunde celor trei funcții din text.",
   "Funcțiile atribuite DAF și caderinei 11 nu corespund; suportul limfocitelor B este atribuit VCAM-1.",
   "Prevenirea lizei revine DAF, iar suportul limfocitelor B revine VCAM-1."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate variantele folosesc aceleași trei molecule și funcții reale; trebuie păstrată corespondența completă."
  },
  "textbookExpressions": [
   "supraviețuirea și diferențierea limfocitelor B",
   "liza celulară indusă de complement",
   "interacțiunile intercelulare"
  ]
 },
 {
  "id": "reumatologie-adv-002",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Care asociere între terapia utilizată în artrita reumatoidă, structura sa și ținta funcțională este corectă?",
  "options": [
   "Abatacept — proteină de fuziune CTLA4–Fc IgG1, blocarea costimulării limfocitelor T",
   "Etanercept — proteină de fuziune CTLA4–Fc IgG1, neutralizarea TNF-α",
   "Rituximab — anticorp monoclonal anti-CD20, blocarea costimulării limfocitelor T",
   "Tocilizumab — anticorp monoclonal anti-IL-6, blocarea receptorului CD20",
   "Abatacept — proteină de fuziune receptor p75–Fc IgG1, neutralizarea TNF-α"
  ],
  "correct": [
   0
  ],
  "explanation": "Abatacept — proteină de fuziune CTLA4–Fc IgG1, blocarea costimulării limfocitelor T — Corect: Structura și blocarea costimulării sunt descrise pentru abatacept.\n\nEtanercept — proteină de fuziune CTLA4–Fc IgG1, neutralizarea TNF-α — Incorect: Etanercept neutralizează TNF, dar componenta receptorului este p75, nu CTLA4.\n\nRituximab — anticorp monoclonal anti-CD20, blocarea costimulării limfocitelor T — Incorect: Rituximab are ținta CD20, însă efectul descris privește limfocitele B.\n\nTocilizumab — anticorp monoclonal anti-IL-6, blocarea receptorului CD20 — Incorect: Tocilizumab se leagă de receptorul IL-6, nu de CD20.\n\nAbatacept — proteină de fuziune receptor p75–Fc IgG1, neutralizarea TNF-α — Incorect: Structura și ținta din opțiune descriu etanerceptul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 447, 445, Alți agenți biologici (pagini PDF: 77, 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    447,
    445
   ],
   "pdfPages": [
    77,
    75
   ],
   "section": "Alți agenți biologici"
  },
  "learningObjective": "Diferențierea proteinelor de fuziune de anticorpii monoclonali și a țintelor acestora.",
  "optionRationales": [
   "Structura și blocarea costimulării sunt descrise pentru abatacept.",
   "Etanercept neutralizează TNF, dar componenta receptorului este p75, nu CTLA4.",
   "Rituximab are ținta CD20, însă efectul descris privește limfocitele B.",
   "Tocilizumab se leagă de receptorul IL-6, nu de CD20.",
   "Structura și ținta din opțiune descriu etanerceptul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Diferențierea necesită atât structura moleculei, cât și etapa imunologică țintită; numele clasei nu este suficient."
  },
  "textbookExpressions": [
   "proteină de fuziune recombinantă",
   "blocarea costimulării",
   "receptorului de IL-6"
  ]
 },
 {
  "id": "reumatologie-adv-003",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "În artrita reumatoidă, care asociere descrie corect leziunea locală și consecința ei funcțională?",
  "options": [
   "Tenosinovita flexorilor — subluxație dorsală a stiloidei ulnare — ruptura extensorilor degetelor 4 și 5",
   "Subluxația dorsală a stiloidei ulnare — ruptura tendoanelor extensorilor — afectarea degetelor 4 și 5",
   "Subluxația palmară a articulațiilor MCF — ruptura tendoanelor flexorilor — afectarea degetelor 4 și 5",
   "Tenosinovita flexorilor — compresie în tunelul carpian — deformare fixă în hiperextensie a IFP",
   "Subluxația dorsală a stiloidei ulnare — compresie în tunelul carpian — deformare fixă în flexie a IFP"
  ],
  "correct": [
   1
  ],
  "explanation": "Tenosinovita flexorilor — subluxație dorsală a stiloidei ulnare — ruptura extensorilor degetelor 4 și 5 — Incorect: Textul leagă tenosinovita flexorilor de tunelul carpian; ruptura extensorilor este asociată stiloidei ulnare.\n\nSubluxația dorsală a stiloidei ulnare — ruptura tendoanelor extensorilor — afectarea degetelor 4 și 5 — Corect: Această succesiune este descrisă pentru tumefacția și subluxația dorsală a stiloidei ulnare.\n\nSubluxația palmară a articulațiilor MCF — ruptura tendoanelor flexorilor — afectarea degetelor 4 și 5 — Incorect: Subluxația MCF este descrisă împreună cu devierea ulnară; nu este mecanismul rupturii extensorilor.\n\nTenosinovita flexorilor — compresie în tunelul carpian — deformare fixă în hiperextensie a IFP — Incorect: Tunelul carpian este posibil, dar hiperextensia fixă a IFP este o deformare articulară distinctă.\n\nSubluxația dorsală a stiloidei ulnare — compresie în tunelul carpian — deformare fixă în flexie a IFP — Incorect: Sunt reunite mecanisme diferite: leziunea extensorilor, tunelul carpian și deformarea în butonieră.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 441, Afectarea articulară — Articulațiile mâinilor și carpul (pagini PDF: 71).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    441
   ],
   "pdfPages": [
    71
   ],
   "section": "Afectarea articulară — Articulațiile mâinilor și carpul"
  },
  "learningObjective": "Distingerea leziunii tendinoase de neuropatia de compresie și deformarea articulară.",
  "optionRationales": [
   "Textul leagă tenosinovita flexorilor de tunelul carpian; ruptura extensorilor este asociată stiloidei ulnare.",
   "Această succesiune este descrisă pentru tumefacția și subluxația dorsală a stiloidei ulnare.",
   "Subluxația MCF este descrisă împreună cu devierea ulnară; nu este mecanismul rupturii extensorilor.",
   "Tunelul carpian este posibil, dar hiperextensia fixă a IFP este o deformare articulară distinctă.",
   "Sunt reunite mecanisme diferite: leziunea extensorilor, tunelul carpian și deformarea în butonieră."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate elementele provin din afectarea aceleiași regiuni; relația cauzală și tendonul implicat trebuie cunoscute precis."
  },
  "textbookExpressions": [
   "subluxația dorsală a stiloidei ulnare",
   "ruptura tendoanelor extensorilor",
   "degetelor 4 și 5"
  ]
 },
 {
  "id": "reumatologie-adv-004",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "În imunopatogenia artritei reumatoide sunt corecte următoarele afirmații:",
  "options": [
   "Factorii reumatoizi de tip IgM și IgA leagă porțiunea Fc a IgG și pot forma complexe imune în membrana sinovială",
   "Complexele imune stimulează macrofagele prin receptorii Fc IgG și pot amplifica producția de citokine",
   "TNF-α stimulează sinteza IL-6, iar factorii reumatoizi recunosc porțiunea Fab a IgG",
   "Limfocitele B sinoviale produc autoanticorpi, iar DAF susține diferențierea acestor limfocite",
   "Sinoviocitele asemănătoare fibroblastelor produc citokine, iar caderina 11 previne liza prin complement"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Factorii reumatoizi de tip IgM și IgA leagă porțiunea Fc a IgG și pot forma complexe imune în membrana sinovială — Corect: Ambele clase și ținta Fc sunt descrise.\n\nComplexele imune stimulează macrofagele prin receptorii Fc IgG și pot amplifica producția de citokine — Corect: Această stimulare întreține producția de IL-1, IL-8, TNF și alte citokine.\n\nTNF-α stimulează sinteza IL-6, iar factorii reumatoizi recunosc porțiunea Fab a IgG — Incorect: Inducerea IL-6 este corectă; ținta factorului reumatoid este Fc, nu Fab.\n\nLimfocitele B sinoviale produc autoanticorpi, iar DAF susține diferențierea acestor limfocite — Incorect: Producția de autoanticorpi este corectă; suportul diferențierii B este atribuit VCAM-1.\n\nSinoviocitele asemănătoare fibroblastelor produc citokine, iar caderina 11 previne liza prin complement — Incorect: Producția de citokine este corectă; protecția față de complement revine DAF.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 438, Artrita reumatoidă — Imunologie (pagini PDF: 68).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    438
   ],
   "pdfPages": [
    68
   ],
   "section": "Artrita reumatoidă — Imunologie"
  },
  "learningObjective": "Legarea autoanticorpilor de bucla de amplificare și separarea moleculelor de suprafață.",
  "optionRationales": [
   "Ambele clase și ținta Fc sunt descrise.",
   "Această stimulare întreține producția de IL-1, IL-8, TNF și alte citokine.",
   "Inducerea IL-6 este corectă; ținta factorului reumatoid este Fc, nu Fab.",
   "Producția de autoanticorpi este corectă; suportul diferențierii B este atribuit VCAM-1.",
   "Producția de citokine este corectă; protecția față de complement revine DAF."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii conservă o afirmație imunologică adevărată și schimbă ținta sau rolul moleculei asociate."
  },
  "textbookExpressions": [
   "porțiunea Fc",
   "complexelor imune în membrana sinovială",
   "sinoviocite asemănătoare fibroblastelor"
  ]
 },
 {
  "id": "reumatologie-adv-005",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Care asocieri privind afectarea extraarticulară în artrita reumatoidă corespund bibliografiei?",
  "options": [
   "Mononevrită multiplex — vasculită a vasa nervorum; sindrom de tunel carpian — neuropatie de compresie prin sinovită",
   "Proteinurie cu amiloidoză secundară — depunere AL; poliartrită care mimează AR — depunere AA",
   "Noduli pulmonari cu pneumoconioză — sindrom Caplan; splenomegalie cu neutropenie — sindrom Felty",
   "Neuropatie periferică simetrică — subluxație atlanto-axială; compresie medulară — vasculită a vasa nervorum",
   "Boală inflamatorie activă — trombocitopenie reactivă; hipersplenism în sindrom Felty — trombocitoză"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Mononevrită multiplex — vasculită a vasa nervorum; sindrom de tunel carpian — neuropatie de compresie prin sinovită — Corect: Ambele mecanisme sunt enumerate în afectarea neurologică.\n\nProteinurie cu amiloidoză secundară — depunere AL; poliartrită care mimează AR — depunere AA — Incorect: Tipurile sunt inversate: AA este amiloidoza secundară AR, iar AL poate mima distribuția poliartritei.\n\nNoduli pulmonari cu pneumoconioză — sindrom Caplan; splenomegalie cu neutropenie — sindrom Felty — Corect: Ambele asocieri sunt descrise.\n\nNeuropatie periferică simetrică — subluxație atlanto-axială; compresie medulară — vasculită a vasa nervorum — Incorect: Compresia medulară ține de subluxația atlanto-axială; vasculita produce neuropatiile periferice descrise.\n\nBoală inflamatorie activă — trombocitopenie reactivă; hipersplenism în sindrom Felty — trombocitoză — Incorect: Boala activă poate produce trombocitoză, iar hipersplenismul poate produce pancitopenie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 443, 441, Manifestări extraarticulare; Sistemul nervos; Rinichi; Sânge (pagini PDF: 73, 71).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    443,
    441
   ],
   "pdfPages": [
    73,
    71
   ],
   "section": "Manifestări extraarticulare; Sistemul nervos; Rinichi; Sânge"
  },
  "learningObjective": "Compararea mecanismelor neurologice, tipurilor de amiloid și sindroamelor sistemice.",
  "optionRationales": [
   "Ambele mecanisme sunt enumerate în afectarea neurologică.",
   "Tipurile sunt inversate: AA este amiloidoza secundară AR, iar AL poate mima distribuția poliartritei.",
   "Ambele asocieri sunt descrise.",
   "Compresia medulară ține de subluxația atlanto-axială; vasculita produce neuropatiile periferice descrise.",
   "Boala activă poate produce trombocitoză, iar hipersplenismul poate produce pancitopenie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Sunt cerute perechi complete de asocieri apropiate; distractorii permută mecanisme și tipuri de afectare care apar toate în capitol."
  },
  "textbookExpressions": [
   "vasculitei vasa nervorum",
   "pneumoconioză",
   "splenomegalie și neutropenie"
  ]
 },
 {
  "id": "reumatologie-adv-006",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Despre medicamentele antireumatice modificatoare de boală descrise în bibliografie sunt corecte afirmațiile:",
  "options": [
   "Leflunomida blochează dihidro-orotat-dehidrogenaza și împiedică expansiunea clonală a limfocitelor T",
   "Abatacept blochează costimularea limfocitelor T prin inhibarea sintezei pirimidinelor",
   "Rituximab țintește CD20 de pe limfocitele pre-B și B mature; administrările repetate pot scădea imunoglobulinele",
   "Tocilizumab și sarilumab sunt anticorpi împotriva receptorului IL-6",
   "Tofacitinib și baricitinib sunt inhibitori JAK administrați oral, încadrați ca DMARD biologice"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "explanation": "Leflunomida blochează dihidro-orotat-dehidrogenaza și împiedică expansiunea clonală a limfocitelor T — Corect: Acesta este mecanismul leflunomidei descris la p. 445.\n\nAbatacept blochează costimularea limfocitelor T prin inhibarea sintezei pirimidinelor — Incorect: Blocarea costimulării este corectă; inhibarea sintezei pirimidinelor aparține leflunomidei.\n\nRituximab țintește CD20 de pe limfocitele pre-B și B mature; administrările repetate pot scădea imunoglobulinele — Corect: Ținta și motivul monitorizării imunoglobulinelor sunt descrise pentru rituximab.\n\nTocilizumab și sarilumab sunt anticorpi împotriva receptorului IL-6 — Corect: Ambele medicamente țintesc receptorul IL-6.\n\nTofacitinib și baricitinib sunt inhibitori JAK administrați oral, încadrați ca DMARD biologice — Incorect: Ținta și calea sunt corecte; încadrarea este DMARD sintetice țintite, nu biologice.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 447, 445, Alți agenți biologici; DMARD sintetice țintite (pagini PDF: 77, 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    447,
    445
   ],
   "pdfPages": [
    77,
    75
   ],
   "section": "Alți agenți biologici; DMARD sintetice țintite"
  },
  "learningObjective": "Separarea țintei, structurii și clasei terapiilor cu efecte imune apropiate.",
  "optionRationales": [
   "Acesta este mecanismul leflunomidei descris la p. 445.",
   "Blocarea costimulării este corectă; inhibarea sintezei pirimidinelor aparține leflunomidei.",
   "Ținta și motivul monitorizării imunoglobulinelor sunt descrise pentru rituximab.",
   "Ambele medicamente țintesc receptorul IL-6.",
   "Ținta și calea sunt corecte; încadrarea este DMARD sintetice țintite, nu biologice."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fiecare distractor păstrează ținta sau efectul corect și greșește un atribut apropiat: mecanismul intermediar ori clasificarea."
  },
  "textbookExpressions": [
   "expansiunea clonală a limfocitelor T",
   "limfocitele pre-B",
   "DMARD sintetice țintite"
  ]
 },
 {
  "id": "reumatologie-adv-007",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "La pierderea răspunsului la blocanții TNF-α în artrita reumatoidă, bibliografia descrie următoarele:",
  "options": [
   "Concentrație terapeutică de medicament — preferință pentru un preparat non-anti-TNF-α",
   "Concentrație subterapeutică — investigarea non-complianței sau a anticorpilor anti-medicament neutralizanți",
   "Anticorpi anti-medicament neutralizanți — argument pentru excluderea non-complianței ca altă explicație posibilă a nivelului scăzut",
   "Concentrație subterapeutică — posibilitatea trecerii la alt blocant TNF-α sau la altă clasă de bDMARD",
   "Concentrație terapeutică — dovadă a neutralizării medicamentului, cu preferință pentru repetarea aceleiași clase"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Concentrație terapeutică de medicament — preferință pentru un preparat non-anti-TNF-α — Corect: Aceasta este preferința formulată pentru un nivel terapeutic la pierderea răspunsului.\n\nConcentrație subterapeutică — investigarea non-complianței sau a anticorpilor anti-medicament neutralizanți — Corect: Textul menționează ambele explicații pentru nivelul subterapeutic.\n\nAnticorpi anti-medicament neutralizanți — argument pentru excluderea non-complianței ca altă explicație posibilă a nivelului scăzut — Incorect: Identificarea unei explicații nu exclude non-complianța asociată; textul nu stabilește o asemenea excludere.\n\nConcentrație subterapeutică — posibilitatea trecerii la alt blocant TNF-α sau la altă clasă de bDMARD — Corect: Ambele alternative sunt descrise pentru acest context.\n\nConcentrație terapeutică — dovadă a neutralizării medicamentului, cu preferință pentru repetarea aceleiași clase — Incorect: Nivelul terapeutic nu dovedește neutralizarea; textul preferă un preparat non-anti-TNF.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 447, Schimbarea terapiilor DMARD și taperingul (pagini PDF: 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    447
   ],
   "pdfPages": [
    77
   ],
   "section": "Schimbarea terapiilor DMARD și taperingul"
  },
  "learningObjective": "Interpretarea nivelului de medicament în eșecul secundar fără confundarea farmacocineticii cu ținta terapeutică.",
  "optionRationales": [
   "Aceasta este preferința formulată pentru un nivel terapeutic la pierderea răspunsului.",
   "Textul menționează ambele explicații pentru nivelul subterapeutic.",
   "Identificarea unei explicații nu exclude non-complianța asociată; textul nu stabilește o asemenea excludere.",
   "Ambele alternative sunt descrise pentru acest context.",
   "Nivelul terapeutic nu dovedește neutralizarea; textul preferă un preparat non-anti-TNF."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Se schimbă conduita după concentrația medicamentului, iar opțiunile disting eșecul de țintă de expunerea insuficientă."
  },
  "textbookExpressions": [
   "non-responderi secundari",
   "anticorpilor anti-medicament",
   "nivelul de medicament este terapeutic"
  ]
 },
 {
  "id": "reumatologie-adv-008",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "În spondilartrita axială sunt corecte următoarele relații patogenice și anatomice:",
  "options": [
   "Prezentarea peptidului de către HLA-B27 — participarea limfocitelor T CD8+",
   "Entezita — eroziune la inserția ligamentelor, urmată de formare de os nou sub formă de sindesmofite",
   "Afectarea articulațiilor costovertebrale — reducerea măsurabilă a expansiunii toracelui",
   "Plierea necorespunzătoare HLA-B27 — producere de IL-23 și răspuns al limfocitelor T rezidente în enteze",
   "Formarea sindesmofitelor — depunere de os nou în centrul cartilajului articular, după sinovită fără afectarea inserțiilor ligamentare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Prezentarea peptidului de către HLA-B27 — participarea limfocitelor T CD8+ — Corect: Aceasta este calea propusă în ipoteza peptidului artritogenic din text.\n\nEntezita — eroziune la inserția ligamentelor, urmată de formare de os nou sub formă de sindesmofite — Corect: Eroziunea la inserție se vindecă prin formare osoasă.\n\nAfectarea articulațiilor costovertebrale — reducerea măsurabilă a expansiunii toracelui — Corect: Expansiunea toracică redusă este legată de aceste articulații.\n\nPlierea necorespunzătoare HLA-B27 — producere de IL-23 și răspuns al limfocitelor T rezidente în enteze — Corect: Este una dintre căile patogenice prezentate.\n\nFormarea sindesmofitelor — depunere de os nou în centrul cartilajului articular, după sinovită fără afectarea inserțiilor ligamentare — Incorect: Textul localizează procesul la inserțiile ligamentare; alternativa transferă sediul în cartilaj.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 448, Spondilita anchilozantă — Etiologie; Tablou clinic (pagini PDF: 78).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    448
   ],
   "pdfPages": [
    78
   ],
   "section": "Spondilita anchilozantă — Etiologie; Tablou clinic"
  },
  "learningObjective": "Integrarea prezentării antigenice cu sediul inflamației și repararea osoasă.",
  "optionRationales": [
   "Aceasta este calea propusă în ipoteza peptidului artritogenic din text.",
   "Eroziunea la inserție se vindecă prin formare osoasă.",
   "Expansiunea toracică redusă este legată de aceste articulații.",
   "Este una dintre căile patogenice prezentate.",
   "Textul localizează procesul la inserțiile ligamentare; alternativa transferă sediul în cartilaj."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere conexiunea exactă între mecanismul imun, enteză, reparare și anatomie; alternativa eronată păstrează osteogeneza, dar schimbă sediul."
  },
  "textbookExpressions": [
   "limfocitelor T CD8+",
   "inserției ligamentelor",
   "formarea de os nou"
  ]
 },
 {
  "id": "reumatologie-adv-009",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Despre formele clinice ale artritei psoriazice sunt corecte afirmațiile:",
  "options": [
   "Artrita interfalangiană distală se poate asocia cu distrofie unghială prin entezită extinsă la rădăcina unghiei",
   "Dactilita reprezintă tumefierea unui deget întreg, cu afectare articulară și a tecii tendonului",
   "Forma mutilantă produce scurtarea degetelor prin fibroză capsulară, cu păstrarea lungimii osoase",
   "Aspectul de toc în călimară este legat în descriere de eroziunile centrale și osteoliză",
   "Poliartrita începe frecvent asimetric, iar trecerea la simetrie o reîncadrează în artrită reumatoidă"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Artrita interfalangiană distală se poate asocia cu distrofie unghială prin entezită extinsă la rădăcina unghiei — Corect: Această continuitate anatomică este descrisă.\n\nDactilita reprezintă tumefierea unui deget întreg, cu afectare articulară și a tecii tendonului — Corect: Nu este o tumefacție limitată la o singură articulație.\n\nForma mutilantă produce scurtarea degetelor prin fibroză capsulară, cu păstrarea lungimii osoase — Incorect: Forma mutilantă produce osteoliză periarticulară și scurtare osoasă.\n\nAspectul de toc în călimară este legat în descriere de eroziunile centrale și osteoliză — Corect: Textul și figura leagă aspectul de eroziunea centrală și osteoliză.\n\nPoliartrita începe frecvent asimetric, iar trecerea la simetrie o reîncadrează în artrită reumatoidă — Incorect: Poliartrita psoriazică poate deveni simetrică și greu de distins clinic de AR; simetria nu schimbă singură diagnosticul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 450, Artrita psoriazică — Tablou clinic (pagini PDF: 80).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    450
   ],
   "pdfPages": [
    80
   ],
   "section": "Artrita psoriazică — Tablou clinic"
  },
  "learningObjective": "Diferențierea mecanismelor deformărilor și a distribuției care poate mima AR.",
  "optionRationales": [
   "Această continuitate anatomică este descrisă.",
   "Nu este o tumefacție limitată la o singură articulație.",
   "Forma mutilantă produce osteoliză periarticulară și scurtare osoasă.",
   "Textul și figura leagă aspectul de eroziunea centrală și osteoliză.",
   "Poliartrita psoriazică poate deveni simetrică și greu de distins clinic de AR; simetria nu schimbă singură diagnosticul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii păstrează manifestarea recognoscibilă, dar schimbă mecanismul deformării ori interpretarea distribuției."
  },
  "textbookExpressions": [
   "entezita care se extinde în rădăcina unghiilor",
   "degete telescopate",
   "toc în călimară"
  ]
 },
 {
  "id": "reumatologie-adv-010",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "În artrita reactivă, care asocieri clinice și cutaneo-mucoase sunt corecte?",
  "options": [
   "Balanită circinată la bărbat necircumcis — ulcerații superficiale nedureroase ale glandului",
   "Balanită circinată la bărbat circumcis — leziune proeminentă, eritematoasă și scuamoasă",
   "Keratoderma blennorragică — plăci și pustule similare histologic psoriazisului pustular",
   "Uveită anterioară în boala severă sau recurentă — evoluție sincronă cu artrita",
   "Entezită — fasciită plantară sau afectarea tendonului lui Ahile"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Balanită circinată la bărbat necircumcis — ulcerații superficiale nedureroase ale glandului — Corect: Acesta este aspectul descris la bărbatul necircumcis.\n\nBalanită circinată la bărbat circumcis — leziune proeminentă, eritematoasă și scuamoasă — Corect: Acesta este aspectul descris după circumcizie.\n\nKeratoderma blennorragică — plăci și pustule similare histologic psoriazisului pustular — Corect: Asemănarea histologică este precizată în text.\n\nUveită anterioară în boala severă sau recurentă — evoluție sincronă cu artrita — Incorect: Uveita poate complica boala severă sau recurentă, dar nu este sincronă cu artrita.\n\nEntezită — fasciită plantară sau afectarea tendonului lui Ahile — Corect: Ambele localizări sunt descrise pentru entezită.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 451, Artrita reactivă — Tablou clinic (pagini PDF: 81).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    451
   ],
   "pdfPages": [
    81
   ],
   "section": "Artrita reactivă — Tablou clinic"
  },
  "learningObjective": "Distingerea aspectului leziunilor după context și a relației temporale oculo-articulare.",
  "optionRationales": [
   "Acesta este aspectul descris la bărbatul necircumcis.",
   "Acesta este aspectul descris după circumcizie.",
   "Asemănarea histologică este precizată în text.",
   "Uveita poate complica boala severă sau recurentă, dar nu este sincronă cu artrita.",
   "Ambele localizări sunt descrise pentru entezită."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere distincția morfologică dependentă de circumcizie și independența evoluției oculare, dincolo de triada uzuală."
  },
  "textbookExpressions": [
   "ulcerații superficiale nedureroase",
   "eritematoasă și scuamoasă",
   "nu este sincronă cu artrita"
  ]
 },
 {
  "id": "reumatologie-adv-011",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Privind terapiile țintite menționate pentru artrita psoriazică, sunt corecte asocierile:",
  "options": [
   "Secukinumab și ixekizumab — inhibitori de IL-17",
   "Ustekinumab — inhibitor al receptorului IL-6",
   "Apremilast — inhibitor oral al PDE4",
   "Tofacitinib — inhibitor oral JAK",
   "Golimumab — proteină de fuziune cu receptorul p75 pentru TNF"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "explanation": "Secukinumab și ixekizumab — inhibitori de IL-17 — Corect: Ambele sunt încadrate ca inhibitori IL-17.\n\nUstekinumab — inhibitor al receptorului IL-6 — Incorect: Ustekinumab țintește IL-12/23; receptorul IL-6 este ținta tocilizumabului și sarilumabului.\n\nApremilast — inhibitor oral al PDE4 — Corect: Apremilast este inhibitor PDE4.\n\nTofacitinib — inhibitor oral JAK — Corect: Tofacitinib este inhibitor JAK.\n\nGolimumab — proteină de fuziune cu receptorul p75 pentru TNF — Incorect: Golimumab este anticorp monoclonal; proteina de fuziune p75 este etanerceptul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 450, 445, 447, Artrita psoriazică — Tratament și prognostic (pagini PDF: 80, 75, 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    450,
    445,
    447
   ],
   "pdfPages": [
    80,
    75,
    77
   ],
   "section": "Artrita psoriazică — Tratament și prognostic"
  },
  "learningObjective": "Diferențierea țintelor biologice de enzimele intracelulare și a structurii anti-TNF.",
  "optionRationales": [
   "Ambele sunt încadrate ca inhibitori IL-17.",
   "Ustekinumab țintește IL-12/23; receptorul IL-6 este ținta tocilizumabului și sarilumabului.",
   "Apremilast este inhibitor PDE4.",
   "Tofacitinib este inhibitor JAK.",
   "Golimumab este anticorp monoclonal; proteina de fuziune p75 este etanerceptul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate variantele sunt terapii reale pentru boli inflamatorii apropiate; două schimbă o țintă sau structură din aceeași familie terapeutică."
  },
  "textbookExpressions": [
   "inhibitori de IL-17",
   "inhibitor oral al PDE4",
   "inhibitor JAK"
  ]
 },
 {
  "id": "reumatologie-adv-014",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Cele trei subtipuri principale de afecțiuni articulare inflamatoare sunt:",
  "options": [
   "Artrita reumatoidă (asociată cu autoanticorpi), spondilartrita (asociată cu HLA-B27) și artrita metabolică/microcristalină",
   "Artroza, polimialgia reumatică și febra reumatică",
   "Artrita septică, hemartroza și tumora juxta-articulară",
   "Doar AR și spondilartrita, cristalele fiind excluse din clasificare",
   "Spondilartrita asociată MHC de clasă II și AR asociată HLA-B27"
  ],
  "correct": [
   0
  ],
  "explanation": "Artrita reumatoidă (asociată cu autoanticorpi), spondilartrita (asociată cu HLA-B27) și artrita metabolică/microcristalină — Corect: Cele trei subtipuri și asocierile (autoanticorpi, HLA-B27, cristale) sunt cele din Cadranul 18.24.\n\nArtroza, polimialgia reumatică și febra reumatică — Incorect: Artroza este mecanică, nu un subtip inflamator principal din cadran.\n\nArtrita septică, hemartroza și tumora juxta-articulară — Incorect: Acestea sunt cauze de monoartrită, nu subtipurile principale.\n\nDoar AR și spondilartrita, cristalele fiind excluse din clasificare — Incorect: Artrita microcristalină este al treilea subtip.\n\nSpondilartrita asociată MHC de clasă II și AR asociată HLA-B27 — Incorect: Asocierile MHC sunt inverse: AR cu clasa II, spondilartrita cu B27 (clasa I).\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 437, Afecțiuni articulare inflamatoare — Cadranul 18.24 (pagini PDF: 67).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    437
   ],
   "pdfPages": [
    67
   ],
   "section": "Afecțiuni articulare inflamatoare — Cadranul 18.24"
  },
  "learningObjective": "Identificarea triadei AR / spondilartrită / microcristalină și a markerilor genetici inversați în distractor.",
  "optionRationales": [
   "Cele trei subtipuri și asocierile (autoanticorpi, HLA-B27, cristale) sunt cele din Cadranul 18.24.",
   "Artroza este mecanică, nu un subtip inflamator principal din cadran.",
   "Acestea sunt cauze de monoartrită, nu subtipurile principale.",
   "Artrita microcristalină este al treilea subtip.",
   "Asocierile MHC sunt inverse: AR cu clasa II, spondilartrita cu B27 (clasa I)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reciclează cauze reale de artrită din același capitol, dar schimbă nivelul de clasificare sau markerul genetic."
  },
  "textbookExpressions": [
   "Cele trei subtipuri",
   "HLA-827"
  ]
 },
 {
  "id": "reumatologie-adv-015",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Caracteristicile prognostice negative pentru poliartrita nediferențiată includ:",
  "options": [
   "Debut poliarticular",
   "ACPA pozitivi și factor reumatoid pozitiv",
   "Eroziuni articulare radiografice la prezentare",
   "Durată a bolii mai mare de 3-6 luni",
   "Monoartrită de scurtă durată, seronegativă, fără eroziuni"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Debut poliarticular — Corect: Debutul poliarticular figurează în listă.\n\nACPA pozitivi și factor reumatoid pozitiv — Corect: Atât ACPA, cât și FR sunt enumerați.\n\nEroziuni articulare radiografice la prezentare — Corect: Eroziunile la prezentare sunt un factor negativ.\n\nDurată a bolii mai mare de 3-6 luni — Corect: Durata peste 3-6 luni completează lista.\n\nMonoartrită de scurtă durată, seronegativă, fără eroziuni — Incorect: Profilul mono, scurt și seronegativ nu este cel de rău prognostic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 437, Poliartrită inflamatorie precoce (pagini PDF: 67).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    437
   ],
   "pdfPages": [
    67
   ],
   "section": "Poliartrită inflamatorie precoce"
  },
  "learningObjective": "Reținerea clusterului de rău prognostic care impune trimiterea urgentă și DMARD precoce.",
  "optionRationales": [
   "Debutul poliarticular figurează în listă.",
   "Atât ACPA, cât și FR sunt enumerați.",
   "Eroziunile la prezentare sunt un factor negativ.",
   "Durata peste 3-6 luni completează lista.",
   "Profilul mono, scurt și seronegativ nu este cel de rău prognostic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru elemente reale de prognostic; distractorul descrie tocmai profilul favorabil din același paragraf."
  },
  "textbookExpressions": [
   "debutul poliarticular",
   "3-6 luni"
  ]
 },
 {
  "id": "reumatologie-adv-016",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre autoanticorpii din artrita reumatoidă:",
  "options": [
   "Factorii reumatoizi se găsesc la 75-80% dintre pacienții cu AR",
   "Spre deosebire de FR, ACPA sunt mai specifici și au sensibilitate mai mare pentru diagnostic",
   "Fumatul este un potențial declanșator, în special în AR ACPA-pozitivă",
   "FR au valoare predictivă mare în populația generală, fiind suficienți pentru screeningul de masă",
   "Antigenul declanșator al ACPA este, cu dovezi solide, colagenul de tip II la om"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Factorii reumatoizi se găsesc la 75-80% dintre pacienții cu AR — Corect: Intervalul 75-80% este cifra din text.\n\nSpre deosebire de FR, ACPA sunt mai specifici și au sensibilitate mai mare pentru diagnostic — Corect: Comparația de specificitate/sensibilitate este explicită.\n\nFumatul este un potențial declanșator, în special în AR ACPA-pozitivă — Corect: Fumatul este legat de forma ACPA-pozitivă.\n\nFR au valoare predictivă mare în populația generală, fiind suficienți pentru screeningul de masă — Incorect: FR au valoare predictivă mică în populația generală.\n\nAntigenul declanșator al ACPA este, cu dovezi solide, colagenul de tip II la om — Incorect: Textul precizează că există puține dovezi că antigenul ar fi colagenul de tip II la om.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 438, 439, Artrita reumatoidă — Autoanticorpi; Imunologie (pagini PDF: 68, 69).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    438,
    439
   ],
   "pdfPages": [
    68,
    69
   ],
   "section": "Artrita reumatoidă — Autoanticorpi; Imunologie"
  },
  "learningObjective": "Contrastarea prevalenței FR (75-80%) cu specificitatea superioară a ACPA și cu rolul fumatului.",
  "optionRationales": [
   "Intervalul 75-80% este cifra din text.",
   "Comparația de specificitate/sensibilitate este explicită.",
   "Fumatul este legat de forma ACPA-pozitivă.",
   "FR au valoare predictivă mică în populația generală.",
   "Textul precizează că există puține dovezi că antigenul ar fi colagenul de tip II la om."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează valoarea predictivă a FR și atribuie colagenului II un rol pe care textul îl slăbește."
  },
  "textbookExpressions": [
   "75-80%",
   "ACPA"
  ]
 },
 {
  "id": "reumatologie-adv-017",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Pannusul sinovial și momentul eroziunilor în AR:",
  "options": [
   "Sinovita hiperplazică se răspândește de la marginile articulare pe cartilaj, blocând nutriția și acționând prin citokine asupra condrocitelor",
   "IRM arată procesul în primele 3-6 luni de la debut, înainte ca eroziunile prost definite să apară pe radiografii, justificând DMARD în acest interval",
   "Eroziunile radiografice precedă de regulă cu ani modificările IRM, motiv pentru care DMARD se amână",
   "Pannusul protejează cartilajul prin hipertrofie nutritivă",
   "Osteoporoza juxta-articulară lipsește în sinovita activă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sinovita hiperplazică se răspândește de la marginile articulare pe cartilaj, blocând nutriția și acționând prin citokine asupra condrocitelor — Corect: Definiția și mecanismul pannusului sunt cele din paragraf.\n\nIRM arată procesul în primele 3-6 luni de la debut, înainte ca eroziunile prost definite să apară pe radiografii, justificând DMARD în acest interval — Corect: Fereastra 3-6 luni și indicația de DMARD precoce sunt explicite.\n\nEroziunile radiografice precedă de regulă cu ani modificările IRM, motiv pentru care DMARD se amână — Incorect: Relația IRM–radiografie este inversă.\n\nPannusul protejează cartilajul prin hipertrofie nutritivă — Incorect: Pannusul subțiază cartilajul, nu îl protejează.\n\nOsteoporoza juxta-articulară lipsește în sinovita activă — Incorect: Osteoporoza juxta-articulară apare în sinovita activă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 439, Artrita reumatoidă — Patologie (pagini PDF: 69).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    439
   ],
   "pdfPages": [
    69
   ],
   "section": "Artrita reumatoidă — Patologie"
  },
  "learningObjective": "Legarea pannusului de fereastra IRM de 3-6 luni care justifică DMARD înaintea eroziunilor radiografice.",
  "optionRationales": [
   "Definiția și mecanismul pannusului sunt cele din paragraf.",
   "Fereastra 3-6 luni și indicația de DMARD precoce sunt explicite.",
   "Relația IRM–radiografie este inversă.",
   "Pannusul subțiază cartilajul, nu îl protejează.",
   "Osteoporoza juxta-articulară apare în sinovita activă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează succesiunea IRM versus radiografie, exact argumentul pentru DMARD precoce."
  },
  "textbookExpressions": [
   "primele 3-6 luni",
   "pannus"
  ]
 },
 {
  "id": "reumatologie-adv-018",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Conform criteriilor ACR/EULAR 2010, un pacient se clasifică drept AR la un scor de:",
  "options": [
   "cel puțin 6 puncte",
   "cel puțin 3 puncte",
   "cel puțin 10 puncte",
   "1 punct pentru o articulație medie/mare, suficient singur",
   "0 puncte, dacă există redoare matinală"
  ],
  "correct": [
   0
  ],
  "explanation": "cel puțin 6 puncte — Corect: Textul precizează clasificarea drept AR la ≥6 puncte.\n\ncel puțin 3 puncte — Incorect: 3 puncte pot proveni din serologie sau din articulații mici, dar nu ating pragul.\n\ncel puțin 10 puncte — Incorect: 10 puncte depășesc pragul; nu este pragul de clasificare.\n\n1 punct pentru o articulație medie/mare, suficient singur — Incorect: O articulație medie/mare valorează 0 puncte, nu 1.\n\n0 puncte, dacă există redoare matinală — Incorect: Redoarea nu este un domeniu punctat în Cadranul 18.28.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 440, Cadranul 18.28 — Criteriile ACR/EULAR 2010 (pagini PDF: 70).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    440
   ],
   "pdfPages": [
    70
   ],
   "section": "Cadranul 18.28 — Criteriile ACR/EULAR 2010"
  },
  "learningObjective": "Reținerea pragului de clasificare ≥6 puncte, distinct de punctajele parțiale ale domeniilor.",
  "optionRationales": [
   "Textul precizează clasificarea drept AR la ≥6 puncte.",
   "3 puncte pot proveni din serologie sau din articulații mici, dar nu ating pragul.",
   "10 puncte depășesc pragul; nu este pragul de clasificare.",
   "O articulație medie/mare valorează 0 puncte, nu 1.",
   "Redoarea nu este un domeniu punctat în Cadranul 18.28."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reciclează punctaje reale din același tabel (0, 2, 3, 5) în locul pragului de 6."
  },
  "textbookExpressions": [
   "e:6 puncte",
   "ACR/EULAR 2010"
  ]
 },
 {
  "id": "reumatologie-adv-019",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Afectarea tipică în AR se caracterizează prin:",
  "options": [
   "Prezentare obișnuită (~70%) ca poliartrită periferică simetrică, progresivă, pe săptămâni sau luni, între 30 și 50 de ani",
   "Mai rar (~15%), debut rapid în câteva zile, cu poliartrită simetrică severă, mai ales la vârstnici",
   "Durere și redoare a articulațiilor mici ale mâinilor (MCF, IFP) și picioarelor (MTF); articulațiile IFD sunt de obicei cruțate",
   "10% prezintă monoartrită de genunchi sau umăr, ori sindrom de tunel carpian",
   "Articulațiile IFD sunt sediul de debut cel mai frecvent, MCF fiind cruțate"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Prezentare obișnuită (~70%) ca poliartrită periferică simetrică, progresivă, pe săptămâni sau luni, între 30 și 50 de ani — Corect: Profilul de 70% este cel din paragraf.\n\nMai rar (~15%), debut rapid în câteva zile, cu poliartrită simetrică severă, mai ales la vârstnici — Corect: Debutul exploziv de ~15% la vârstnici este al doilea tipar.\n\nDurere și redoare a articulațiilor mici ale mâinilor (MCF, IFP) și picioarelor (MTF); articulațiile IFD sunt de obicei cruțate — Corect: Cruțarea IFD este explicită.\n\n10% prezintă monoartrită de genunchi sau umăr, ori sindrom de tunel carpian — Corect: Cele 10% cu monoartrită sau tunel carpian completează spectrul.\n\nArticulațiile IFD sunt sediul de debut cel mai frecvent, MCF fiind cruțate — Incorect: IFD sunt cruțate; MCF și IFP sunt afectate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 440, Tablou clinic — Afectarea tipică în AR (pagini PDF: 70).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    440
   ],
   "pdfPages": [
    70
   ],
   "section": "Tablou clinic — Afectarea tipică în AR"
  },
  "learningObjective": "Integrarea proporțiilor 70% și 15% cu distribuția MCF/IFP/MTF și cruțarea IFD.",
  "optionRationales": [
   "Profilul de 70% este cel din paragraf.",
   "Debutul exploziv de ~15% la vârstnici este al doilea tipar.",
   "Cruțarea IFD este explicită.",
   "Cele 10% cu monoartrită sau tunel carpian completează spectrul.",
   "IFD sunt cruțate; MCF și IFP sunt afectate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru date de prezentare; distractorul inversează IFD și MCF, confuzia clasică cu artroza nodulară."
  },
  "textbookExpressions": [
   "Articulaţiile IFD",
   "a:70%"
  ]
 },
 {
  "id": "reumatologie-adv-020",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Deformările degetelor din AR constituită includ:",
  "options": [
   "Flexie fixă a IFP (deformare în butonieră) sau hiperextensie fixă a IFP (deformare în gât de lebădă)",
   "Combinație de deviere ulnară și subluxație palmară a articulațiilor MCF",
   "Ruptura extensorilor 4 și 5 prin tenosinovita flexorilor, fără legătură cu stiloida ulnară",
   "Deformarea în gât de lebădă este flexia fixă a IFP",
   "MCF rămân aliniate; devierea ulnară este o deformare a IFD"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Flexie fixă a IFP (deformare în butonieră) sau hiperextensie fixă a IFP (deformare în gât de lebădă) — Corect: Cele două deformări IFP sunt descrise astfel.\n\nCombinație de deviere ulnară și subluxație palmară a articulațiilor MCF — Corect: Devierea ulnară cu subluxație palmară MCF este combinația citată.\n\nRuptura extensorilor 4 și 5 prin tenosinovita flexorilor, fără legătură cu stiloida ulnară — Incorect: Ruptura extensorilor 4 și 5 este legată de subluxația dorsală a stiloidei ulnare, nu de tenosinovita flexorilor (care dă tunel carpian).\n\nDeformarea în gât de lebădă este flexia fixă a IFP — Incorect: Flexia fixă este butoniera; gâtul de lebădă este hiperextensia.\n\nMCF rămân aliniate; devierea ulnară este o deformare a IFD — Incorect: Devierea ulnară privește MCF, nu IFD.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 441, Afectarea articulară — Articulațiile mâinilor și carpul (pagini PDF: 71).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    441
   ],
   "pdfPages": [
    71
   ],
   "section": "Afectarea articulară — Articulațiile mâinilor și carpul"
  },
  "learningObjective": "Diferențierea butonierei (flexie IFP) de gâtul de lebădă (hiperextensie IFP) și a devierii ulnare MCF.",
  "optionRationales": [
   "Cele două deformări IFP sunt descrise astfel.",
   "Devierea ulnară cu subluxație palmară MCF este combinația citată.",
   "Ruptura extensorilor 4 și 5 este legată de subluxația dorsală a stiloidei ulnare, nu de tenosinovita flexorilor (care dă tunel carpian).",
   "Flexia fixă este butoniera; gâtul de lebădă este hiperextensia.",
   "Devierea ulnară privește MCF, nu IFD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează butoniera și gâtul de lebădă și atribuie ruptura extensorilor tenosinovitei flexorilor."
  },
  "textbookExpressions": [
   "în butonieră",
   "gât de lebădă"
  ]
 },
 {
  "id": "reumatologie-adv-021",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Afectarea picioarelor în AR include:",
  "options": [
   "Una dintre primele manifestări este tumefierea dureroasă a articulațiilor MTF",
   "Piciorul se lățește și se dezvoltă deforme de degete în ciocan",
   "Migrarea anterioară a pernei fibro-adipoase expune capetele metatarsiene la presiune",
   "Glezna se deformează frecvent în valg",
   "Prima manifestare este protruzia acetabulară, MTF fiind cruțate"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Una dintre primele manifestări este tumefierea dureroasă a articulațiilor MTF — Corect: MTF dureroase sunt printre primele semne.\n\nPiciorul se lățește și se dezvoltă deforme de degete în ciocan — Corect: Lățirea și degetele în ciocan sunt descrise.\n\nMigrarea anterioară a pernei fibro-adipoase expune capetele metatarsiene la presiune — Corect: Migrarea pernei și expunerea capetelor apar în figură și text.\n\nGlezna se deformează frecvent în valg — Corect: Valgul de gleznă este frecvent.\n\nPrima manifestare este protruzia acetabulară, MTF fiind cruțate — Incorect: Protruzia acetabulară privește șoldul, nu piciorul precoce.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 441, 442, Afectarea articulară — Picioarele (pagini PDF: 71, 72).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    441,
    442
   ],
   "pdfPages": [
    71,
    72
   ],
   "section": "Afectarea articulară — Picioarele"
  },
  "learningObjective": "Succesiunea MTF – degete în ciocan – expunerea capetelor metatarsiene – valg de gleznă.",
  "optionRationales": [
   "MTF dureroase sunt printre primele semne.",
   "Lățirea și degetele în ciocan sunt descrise.",
   "Migrarea pernei și expunerea capetelor apar în figură și text.",
   "Valgul de gleznă este frecvent.",
   "Protruzia acetabulară privește șoldul, nu piciorul precoce."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru elemente ale piciorului reumatoid; distractorul mută o leziune de șold (protrusio) asupra debutului MTF."
  },
  "textbookExpressions": [
   "degete „în ciocan\"",
   "capetelor metatarsiene"
  ]
 },
 {
  "id": "reumatologie-adv-022",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Afectarea coloanei cervicale în AR:",
  "options": [
   "Sinovita C1-C2 și a burselor odontoidului poate produce instabilitate atlanto-axială",
   "IRM este imagistica de primă intenție; radiografiile în flexie și extensie pot obiectiva instabilitatea",
   "Dificultatea de mers neexplicată, slăbiciunea picioarelor sau pierderea controlului sfincterian sunt urgențe neurochirurgicale",
   "Imagistica în flexie/extensie este recomandată înainte de chirurgie sau endoscopie digestivă superioară",
   "Compresia medulară se exclude clinic dacă durerea de gât este musculară, fără imagistică"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Sinovita C1-C2 și a burselor odontoidului poate produce instabilitate atlanto-axială — Corect: Mecanismul sinovitei superioare este enunțat.\n\nIRM este imagistica de primă intenție; radiografiile în flexie și extensie pot obiectiva instabilitatea — Corect: IRM prima intenție și radiografiile dinamice sunt explicite.\n\nDificultatea de mers neexplicată, slăbiciunea picioarelor sau pierderea controlului sfincterian sunt urgențe neurochirurgicale — Corect: Semnele piramidale/sfincteriene definesc urgența.\n\nImagistica în flexie/extensie este recomandată înainte de chirurgie sau endoscopie digestivă superioară — Corect: Verificarea preoperatorie/pre-endoscopică este recomandarea.\n\nCompresia medulară se exclude clinic dacă durerea de gât este musculară, fără imagistică — Incorect: Durerea musculară este frecventă, dar nu exclude instabilitatea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 442, Afectarea articulară — Coloana cervicală (pagini PDF: 72).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    442
   ],
   "pdfPages": [
    72
   ],
   "section": "Afectarea articulară — Coloana cervicală"
  },
  "learningObjective": "Recunoașterea instabilității atlanto-axiale, a IRM ca primă intenție și a semnelor de urgență sfincteriană.",
  "optionRationales": [
   "Mecanismul sinovitei superioare este enunțat.",
   "IRM prima intenție și radiografiile dinamice sunt explicite.",
   "Semnele piramidale/sfincteriene definesc urgența.",
   "Verificarea preoperatorie/pre-endoscopică este recomandarea.",
   "Durerea musculară este frecventă, dar nu exclude instabilitatea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru reguli de imagistică și urgență; distractorul transformă durerea musculară comună într-o excludere a compresiei."
  },
  "textbookExpressions": [
   "instabilitate atlanto-axială",
   "urgenţă neurochirurgicală"
  ]
 },
 {
  "id": "reumatologie-adv-023",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Afectarea cardiovasculară descrisă în AR include:",
  "options": [
   "AR slab controlată, cu PCR crescut persistent și hipercolesterolemie, este un factor de risc cardiovascular independent de factorii tradiționali",
   "Pericardita este rareori simptomatică",
   "Endocardita și boala miocardică, rareori simptomatice, sunt evidențiate postmortem în aproximativ 20% din cazuri",
   "Riscul cardiovascular dispare odată ce diagnosticul de AR este stabilit, independent de controlul bolii",
   "Pericardita este manifestarea dominantă, prezentă simptomatic la majoritatea pacienților"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "AR slab controlată, cu PCR crescut persistent și hipercolesterolemie, este un factor de risc cardiovascular independent de factorii tradiționali — Corect: Riscul independent de factorii tradiționali este enunțat.\n\nPericardita este rareori simptomatică — Corect: Pericardita rar simptomatică este listată.\n\nEndocardita și boala miocardică, rareori simptomatice, sunt evidențiate postmortem în aproximativ 20% din cazuri — Corect: Cifra de aproximativ 20% postmortem este din text.\n\nRiscul cardiovascular dispare odată ce diagnosticul de AR este stabilit, independent de controlul bolii — Incorect: Textul cere gestionarea agresivă a riscului, nu dispariția lui.\n\nPericardita este manifestarea dominantă, prezentă simptomatic la majoritatea pacienților — Incorect: Pericardita este rareori simptomatică, nu dominantă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 443, Manifestări extraarticulare — Cordul și vasele periferice (pagini PDF: 73).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    443
   ],
   "pdfPages": [
    73
   ],
   "section": "Manifestări extraarticulare — Cordul și vasele periferice"
  },
  "learningObjective": "Separarea riscului CV independent de leziunile postmortem de 20% și de pericardita rar simptomatică.",
  "optionRationales": [
   "Riscul independent de factorii tradiționali este enunțat.",
   "Pericardita rar simptomatică este listată.",
   "Cifra de aproximativ 20% postmortem este din text.",
   "Textul cere gestionarea agresivă a riscului, nu dispariția lui.",
   "Pericardita este rareori simptomatică, nu dominantă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează caracterul silențios al pericarditei și anulează riscul CV independent."
  },
  "textbookExpressions": [
   "factor de risc cardiovascular",
   "aproximativ 20%"
  ]
 },
 {
  "id": "reumatologie-adv-024",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Scorul DAS28, utilizat pentru activitatea AR, se interpretează astfel:",
  "options": [
   "Peste 5,1 — activitate înaltă; sub 3,2 — activitate scăzută; sub 2,6 — remisiune",
   "Peste 2,6 — activitate înaltă; sub 5,1 — remisiune",
   "Sub 5,1 — remisiune; peste 3,2 — inactivitate",
   "Pragurile 5,1 / 3,2 / 2,6 privesc VSH-ul izolat, nu scorul compozit",
   "DAS28 nu include evaluarea pacientului, ci doar numărul de articulații"
  ],
  "correct": [
   0
  ],
  "explanation": "Peste 5,1 — activitate înaltă; sub 3,2 — activitate scăzută; sub 2,6 — remisiune — Corect: Cele trei praguri sunt enunțate explicit.\n\nPeste 2,6 — activitate înaltă; sub 5,1 — remisiune — Incorect: 2,6 este remisiunea, nu activitatea înaltă.\n\nSub 5,1 — remisiune; peste 3,2 — inactivitate — Incorect: Remisiunea este sub 2,6, nu sub 5,1.\n\nPragurile 5,1 / 3,2 / 2,6 privesc VSH-ul izolat, nu scorul compozit — Incorect: Pragurile se aplică scorului compozit.\n\nDAS28 nu include evaluarea pacientului, ci doar numărul de articulații — Incorect: Scorul include și evaluarea globală pe scala analogică vizuală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 444, Terapia medicamentoasă — DAS28 (pagini PDF: 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    444
   ],
   "pdfPages": [
    74
   ],
   "section": "Terapia medicamentoasă — DAS28"
  },
  "learningObjective": "Reținerea celor trei praguri numerice ale DAS28 (5,1 / 3,2 / 2,6).",
  "optionRationales": [
   "Cele trei praguri sunt enunțate explicit.",
   "2,6 este remisiunea, nu activitatea înaltă.",
   "Remisiunea este sub 2,6, nu sub 5,1.",
   "Pragurile se aplică scorului compozit.",
   "Scorul include și evaluarea globală pe scala analogică vizuală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută cele trei praguri reale 5,1, 3,2 și 2,6 între activitate înaltă, scăzută și remisiune."
  },
  "textbookExpressions": [
   "DAS28",
   "mai mică de 2,6"
  ]
 },
 {
  "id": "reumatologie-adv-025",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Strategia treat-to-target în AR nou diagnosticată:",
  "options": [
   "Începe de obicei cu o combinație de csDMARD cu acțiune lentă și glucocorticoizi cu acțiune rapidă, în doză/durată limitată",
   "Dacă nu se atinge activitate scăzută sau remisiune cu csDMARD, se prescriu bDMARD",
   "tsDMARD (inhibitori JAK) au biodisponibilitate orală, debut rapid și eficacitate similară cu bDMARD",
   "Tratamentul se limitează la AINS, DMARD fiind rezervate eroziunilor radiografice tardive",
   "Glucocorticoizii se folosesc nelimitat ca monoterapie de fond, fără csDMARD"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Începe de obicei cu o combinație de csDMARD cu acțiune lentă și glucocorticoizi cu acțiune rapidă, în doză/durată limitată — Corect: Combinația csDMARD + GC limitați este startul descris.\n\nDacă nu se atinge activitate scăzută sau remisiune cu csDMARD, se prescriu bDMARD — Corect: Eșecul csDMARD duce la bDMARD.\n\ntsDMARD (inhibitori JAK) au biodisponibilitate orală, debut rapid și eficacitate similară cu bDMARD — Corect: Proprietățile tsDMARD sunt cele din paragraf.\n\nTratamentul se limitează la AINS, DMARD fiind rezervate eroziunilor radiografice tardive — Incorect: Diagnosticarea precoce și T2T precedă așteptarea eroziunilor tardive.\n\nGlucocorticoizii se folosesc nelimitat ca monoterapie de fond, fără csDMARD — Incorect: GC au doză/durată limitată, nu sunt monoterapie de fond nelimitată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 444, Terapia medicamentoasă — Treat to target (pagini PDF: 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    444
   ],
   "pdfPages": [
    74
   ],
   "section": "Terapia medicamentoasă — Treat to target"
  },
  "learningObjective": "Ierarhizarea csDMARD plus glucocorticoizi, apoi bDMARD, cu locul tsDMARD orale.",
  "optionRationales": [
   "Combinația csDMARD + GC limitați este startul descris.",
   "Eșecul csDMARD duce la bDMARD.",
   "Proprietățile tsDMARD sunt cele din paragraf.",
   "Diagnosticarea precoce și T2T precedă așteptarea eroziunilor tardive.",
   "GC au doză/durată limitată, nu sunt monoterapie de fond nelimitată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii amână DMARD până la eroziuni tardive, inversând logica T2T din același paragraf."
  },
  "textbookExpressions": [
   "treat to target",
   "tsDMARDs"
  ]
 },
 {
  "id": "reumatologie-adv-026",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Metotrexatul în AR:",
  "options": [
   "Doza săptămânală inițială de 7,5-10 mg oral se crește până la 15-25 mg, conform T2T",
   "Acidul folic oral reduce efectele secundare; se monitorizează hemograma și biochimia hepatică",
   "Screeningul include radiografie toracică și IGRA la cei cu risc, plus vaccinare antipneumococică și antigripală anuală",
   "Nu trebuie utilizat în sarcină; la greață sau absorbție slabă se poate trece pe subcutanat",
   "Doza zilnică de 25 mg este schema standard, acidul folic fiind contraindicat"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Doza săptămânală inițială de 7,5-10 mg oral se crește până la 15-25 mg, conform T2T — Corect: Eșalonarea săptămânală este cea din text.\n\nAcidul folic oral reduce efectele secundare; se monitorizează hemograma și biochimia hepatică — Corect: Folatul și monitorizarea sunt explicite.\n\nScreeningul include radiografie toracică și IGRA la cei cu risc, plus vaccinare antipneumococică și antigripală anuală — Corect: Pachetul TB/vaccinuri este cerut.\n\nNu trebuie utilizat în sarcină; la greață sau absorbție slabă se poate trece pe subcutanat — Corect: Sarcina și calea s.c. sunt precizate.\n\nDoza zilnică de 25 mg este schema standard, acidul folic fiind contraindicat — Incorect: Administrarea este săptămânală, nu zilnică; folatul se administrează.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 445, Medicamente antireumatice — Metotrexat (pagini PDF: 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    445
   ],
   "pdfPages": [
    75
   ],
   "section": "Medicamente antireumatice — Metotrexat"
  },
  "learningObjective": "Reținerea schemei săptămânale 7,5-10→15-25 mg, a folatului, a IGRA și a interdicției din sarcină.",
  "optionRationales": [
   "Eșalonarea săptămânală este cea din text.",
   "Folatul și monitorizarea sunt explicite.",
   "Pachetul TB/vaccinuri este cerut.",
   "Sarcina și calea s.c. sunt precizate.",
   "Administrarea este săptămânală, nu zilnică; folatul se administrează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru reguli de prescriere; distractorul transformă doza săptămânală într-una zilnică de 25 mg."
  },
  "textbookExpressions": [
   "7,5-10 mg",
   "15-25 mg"
  ]
 },
 {
  "id": "reumatologie-adv-027",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Sulfasalazina și hidroxiclorochina în AR:",
  "options": [
   "Sulfasalazina poate fi utilizată în sarcină; doza crește de la 500 mg/zi la 2-3 g/zi, cu răspuns la circa 50% în 3-6 luni",
   "Hidroxiclorochina (200-400 mg zilnic) se folosește în boala ușoară sau ca adjuvant; screening oftalmologic în primul an, apoi anual, din cauza retinopatiei",
   "Sulfasalazina este contraindicată în sarcină, similar metotrexatului",
   "Hidroxiclorochina nu necesită supraveghere oftalmologică",
   "Doza de întreținere a sulfasalazinei este de 200-400 mg, identică hidroxiclorochinei"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sulfasalazina poate fi utilizată în sarcină; doza crește de la 500 mg/zi la 2-3 g/zi, cu răspuns la circa 50% în 3-6 luni — Corect: Sarcina, eșalonarea 500 mg→2-3 g și rata de 50% sunt din paragraf.\n\nHidroxiclorochina (200-400 mg zilnic) se folosește în boala ușoară sau ca adjuvant; screening oftalmologic în primul an, apoi anual, din cauza retinopatiei — Corect: Doza 200-400 mg și screeningul oftalmologic sunt explicite.\n\nSulfasalazina este contraindicată în sarcină, similar metotrexatului — Incorect: Sulfasalazina poate fi folosită în sarcină.\n\nHidroxiclorochina nu necesită supraveghere oftalmologică — Incorect: Screeningul oftalmologic este recomandat.\n\nDoza de întreținere a sulfasalazinei este de 200-400 mg, identică hidroxiclorochinei — Incorect: 200-400 mg este doza hidroxiclorochinei, nu a sulfasalazinei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 445, Sulfasalazină; Hidroxiclorochină (pagini PDF: 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    445
   ],
   "pdfPages": [
    75
   ],
   "section": "Sulfasalazină; Hidroxiclorochină"
  },
  "learningObjective": "Contrastarea uzului în sarcină și a dozelor (2-3 g versus 200-400 mg) plus regula de screening retinian.",
  "optionRationales": [
   "Sarcina, eșalonarea 500 mg→2-3 g și rata de 50% sunt din paragraf.",
   "Doza 200-400 mg și screeningul oftalmologic sunt explicite.",
   "Sulfasalazina poate fi folosită în sarcină.",
   "Screeningul oftalmologic este recomandat.",
   "200-400 mg este doza hidroxiclorochinei, nu a sulfasalazinei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează siguranța în sarcină și permută dozele 2-3 g versus 200-400 mg între cele două csDMARD."
  },
  "textbookExpressions": [
   "2-3 g pe zi",
   "200-400"
  ]
 },
 {
  "id": "reumatologie-adv-028",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Blocanții TNF-α, dincolo de structura moleculară, se caracterizează prin:",
  "options": [
   "Se folosesc după eșecul a cel puțin două csDMARD (de obicei metotrexat și sulfasalazină), de regulă asociați cu metotrexat",
   "Reactivarea tuberculozei poate apărea; se recomandă radiografie toracică, IGRA și tratarea TB înaintea bDMARD",
   "Nu trebuie utilizați la pacienții cu insuficiență cardiacă severă",
   "Se inițiază ca primă linie, înaintea oricărui csDMARD, la toți pacienții cu AR",
   "Insuficiența cardiacă severă este o indicație preferențială de anti-TNF"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se folosesc după eșecul a cel puțin două csDMARD (de obicei metotrexat și sulfasalazină), de regulă asociați cu metotrexat — Corect: Secvența după două csDMARD și asocierea cu MTX sunt explicite.\n\nReactivarea tuberculozei poate apărea; se recomandă radiografie toracică, IGRA și tratarea TB înaintea bDMARD — Corect: Pachetul TB (Rx, IGRA, tratament/profilaxie) este descris.\n\nNu trebuie utilizați la pacienții cu insuficiență cardiacă severă — Corect: IC severă este o contraindicație.\n\nSe inițiază ca primă linie, înaintea oricărui csDMARD, la toți pacienții cu AR — Incorect: Anti-TNF vin după eșecul csDMARD, nu ca primă linie.\n\nInsuficiența cardiacă severă este o indicație preferențială de anti-TNF — Incorect: IC severă contraindică, nu indică, anti-TNF.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 445, 447, Blocanții TNF-α (pagini PDF: 75, 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    445,
    447
   ],
   "pdfPages": [
    75,
    77
   ],
   "section": "Blocanții TNF-α"
  },
  "learningObjective": "Aplicarea regulii „după două csDMARD”, a screeningului TB și a contraindicației din IC severă.",
  "optionRationales": [
   "Secvența după două csDMARD și asocierea cu MTX sunt explicite.",
   "Pachetul TB (Rx, IGRA, tratament/profilaxie) este descris.",
   "IC severă este o contraindicație.",
   "Anti-TNF vin după eșecul csDMARD, nu ca primă linie.",
   "IC severă contraindică, nu indică, anti-TNF."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută anti-TNF înaintea csDMARD și transformă contraindicația din IC într-o indicație."
  },
  "textbookExpressions": [
   "cel puţin două csDMARD",
   "insuficienţă cardiacă severă"
  ]
 },
 {
  "id": "reumatologie-adv-029",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "La pacienții cu AR care obțin remisiune susținută peste un an, bibliografia descrie ca obișnuită:",
  "options": [
   "Reducerea dozei de DMARD sau prelungirea intervalului dintre administrări",
   "Creșterea imediată a dozei de bDMARD, independent de remisiune",
   "Oprirea tuturor csDMARD în prima lună de remisiune clinică",
   "Înlocuirea de rutină a csDMARD cu chimioterapie citotoxică",
   "Inițierea anti-TNF la toți pacienții aflați în remisiune"
  ],
  "correct": [
   0
  ],
  "explanation": "Reducerea dozei de DMARD sau prelungirea intervalului dintre administrări — Corect: Reducerea dozei sau prelungirea intervalului este conduita descrisă după >1 an.\n\nCreșterea imediată a dozei de bDMARD, independent de remisiune — Incorect: Creșterea dozei contrazice logica remisiunii.\n\nOprirea tuturor csDMARD în prima lună de remisiune clinică — Incorect: Taperingul este gradual, nu oprire în prima lună.\n\nÎnlocuirea de rutină a csDMARD cu chimioterapie citotoxică — Incorect: Chimioterapia citotoxică nu este strategia de tapering.\n\nInițierea anti-TNF la toți pacienții aflați în remisiune — Incorect: Anti-TNF se adaugă la eșec, nu la remisiune.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 447, Schimbarea terapiilor DMARD și taperingul (pagini PDF: 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    447
   ],
   "pdfPages": [
    77
   ],
   "section": "Schimbarea terapiilor DMARD și taperingul"
  },
  "learningObjective": "Identificarea taperingului (doză sau interval) după remisiune susținută >1 an.",
  "optionRationales": [
   "Reducerea dozei sau prelungirea intervalului este conduita descrisă după >1 an.",
   "Creșterea dozei contrazice logica remisiunii.",
   "Taperingul este gradual, nu oprire în prima lună.",
   "Chimioterapia citotoxică nu este strategia de tapering.",
   "Anti-TNF se adaugă la eșec, nu la remisiune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează taperingul în intensificare sau oprire bruscă, două extreme față de reducerea descrisă."
  },
  "textbookExpressions": [
   ">1 an",
   "reducerea dozei"
  ]
 },
 {
  "id": "reumatologie-adv-030",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Spondilartrita, ca grup, cuprinde:",
  "options": [
   "Spondilartrita axială (inclusiv spondilita anchilozantă), artrita psoriazică, artrita reactivă (sexuală sau post-dizenterică) și artrita enteropatică",
   "Doar spondilita anchilozantă, celelalte fiind seropozitive",
   "AR seropozitivă și guta tofacee",
   "Polimialgia reumatică și arterita temporală",
   "Artroza nodulară și periartrita calcifiantă"
  ],
  "correct": [
   0
  ],
  "explanation": "Spondilartrita axială (inclusiv spondilita anchilozantă), artrita psoriazică, artrita reactivă (sexuală sau post-dizenterică) și artrita enteropatică — Corect: Cele cinci entități sunt lista din Cadranul 18.34.\n\nDoar spondilita anchilozantă, celelalte fiind seropozitive — Incorect: Grupul nu se reduce la SA.\n\nAR seropozitivă și guta tofacee — Incorect: AR seropozitivă și guta nu fac parte din SpA.\n\nPolimialgia reumatică și arterita temporală — Incorect: PMR și arterita temporală sunt alte boli.\n\nArtroza nodulară și periartrita calcifiantă — Incorect: Artroza și FCB nu sunt SpA.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 447, Cadranul 18.34 — Spondilartrita (pagini PDF: 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    447
   ],
   "pdfPages": [
    77
   ],
   "section": "Cadranul 18.34 — Spondilartrita"
  },
  "learningObjective": "Recunoașterea listei de entități SpA, distinct de AR seropozitivă și de artropatiile cristaline.",
  "optionRationales": [
   "Cele cinci entități sunt lista din Cadranul 18.34.",
   "Grupul nu se reduce la SA.",
   "AR seropozitivă și guta nu fac parte din SpA.",
   "PMR și arterita temporală sunt alte boli.",
   "Artroza și FCB nu sunt SpA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii propun boli inflamatoare sau cristaline reale din capitol, dar din afara grupului HLA de clasă I."
  },
  "textbookExpressions": [
   "Spondilartrita axială",
   "Artrită enteropatică"
  ]
 },
 {
  "id": "reumatologie-adv-031",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "În spondilita anchilozantă, evaluarea, extra-articularul și prognosticul includ:",
  "options": [
   "HLA-B27 nu este diagnostic, din cauza frecvenței ridicate în populație, dar poate consolida un diagnostic suspectat",
   "Anomalii de conducere cardiacă la aproximativ 5% și aortită/insuficiență aortică la circa 1% dintre cei cu SA constituită",
   "Cu exerciții și ameliorarea durerii, peste 80% își păstrează activitatea profesională",
   "HLA-B27 pozitiv confirmă singur diagnosticul de SA la un adult tânăr cu durere lombară",
   "Anomaliile de conducere lipsesc în SA, interesul cardiac fiind doar pericardic, ca în AR"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "HLA-B27 nu este diagnostic, din cauza frecvenței ridicate în populație, dar poate consolida un diagnostic suspectat — Corect: Limitarea diagnostică a HLA-B27 este explicită.\n\nAnomalii de conducere cardiacă la aproximativ 5% și aortită/insuficiență aortică la circa 1% dintre cei cu SA constituită — Corect: Cifrele 5% (conducere) și 1% (aortită) sunt din text.\n\nCu exerciții și ameliorarea durerii, peste 80% își păstrează activitatea profesională — Corect: Peste 80% păstrează activitatea profesională.\n\nHLA-B27 pozitiv confirmă singur diagnosticul de SA la un adult tânăr cu durere lombară — Incorect: Frecvența populațională împiedică confirmarea izolată.\n\nAnomaliile de conducere lipsesc în SA, interesul cardiac fiind doar pericardic, ca în AR — Incorect: Anomaliile de conducere sunt citate; pericardita este extra-articularul AR.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 449, 450, Spondilita anchilozantă — Investigații; Extra-articular; Prognostic (pagini PDF: 79, 80).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    449,
    450
   ],
   "pdfPages": [
    79,
    80
   ],
   "section": "Spondilita anchilozantă — Investigații; Extra-articular; Prognostic"
  },
  "learningObjective": "Separarea valorii non-diagnostice a HLA-B27 de cifrele cardiace 1% / 5% și de prognosticul ocupațional de 80%.",
  "optionRationales": [
   "Limitarea diagnostică a HLA-B27 este explicită.",
   "Cifrele 5% (conducere) și 1% (aortită) sunt din text.",
   "Peste 80% păstrează activitatea profesională.",
   "Frecvența populațională împiedică confirmarea izolată.",
   "Anomaliile de conducere sunt citate; pericardita este extra-articularul AR."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă un test de consolidare (HLA-B27) în criteriu suficient și neagă afectarea de conducere."
  },
  "textbookExpressions": [
   "nu este diagnostic",
   "peste 80%"
  ]
 },
 {
  "id": "reumatologie-adv-032",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Artrita psoriazică, în epidemiologie și tratament (dincolo de formele lezionale deja consacrate):",
  "options": [
   "Prevalența psoriazisului este 2-3%; circa 10% dezvoltă APs, care precede pielea în aproximativ 15% din cazuri",
   "În forma spondilitică, doar 50% au HLA-B27",
   "Hidroxiclorochina se evită (reacții cutanate psoriazice); glucocorticoizii orali pot destabiliza psoriazisul",
   "APs urmează afectarea cutanată în toate cazurile, fără excepție de precedență articulară",
   "Hidroxiclorochina este csDMARD-ul de primă intenție, iar prednisonul oral stabilizează pielea"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Prevalența psoriazisului este 2-3%; circa 10% dezvoltă APs, care precede pielea în aproximativ 15% din cazuri — Corect: Cele trei procente epidemiologice sunt din deschidere.\n\nÎn forma spondilitică, doar 50% au HLA-B27 — Corect: 50% HLA-B27 în spondilită este cifra dată.\n\nHidroxiclorochina se evită (reacții cutanate psoriazice); glucocorticoizii orali pot destabiliza psoriazisul — Corect: Evitarea HCQ și a GC orali este explicită.\n\nAPs urmează afectarea cutanată în toate cazurile, fără excepție de precedență articulară — Incorect: Artrita precede pielea în ~15% din cazuri.\n\nHidroxiclorochina este csDMARD-ul de primă intenție, iar prednisonul oral stabilizează pielea — Incorect: HCQ și GC orali sunt tocmai de evitat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 450, Artrita psoriazică — Epidemiologie; Tratament (pagini PDF: 80).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    450
   ],
   "pdfPages": [
    80
   ],
   "section": "Artrita psoriazică — Epidemiologie; Tratament"
  },
  "learningObjective": "Reținerea proporțiilor 2-3% / 10% / 15% și 50% HLA-B27, plus evitarea HCQ și a steroizilor orali.",
  "optionRationales": [
   "Cele trei procente epidemiologice sunt din deschidere.",
   "50% HLA-B27 în spondilită este cifra dată.",
   "Evitarea HCQ și a GC orali este explicită.",
   "Artrita precede pielea în ~15% din cazuri.",
   "HCQ și GC orali sunt tocmai de evitat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează regula HCQ/steroid și neagă precedența cutanată de 15%."
  },
  "textbookExpressions": [
   "2-3%",
   "aproximativ 15%"
  ]
 },
 {
  "id": "reumatologie-adv-033",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Artrita reactivă, în epidemiologie și evoluție (fără leziunile cutaneo-mucoase clasice):",
  "options": [
   "Spondilartrita se dezvoltă la 1-2% după dizenterie sau infecție sexuală (uretrită/cervicită nespecifică)",
   "La bărbați, HLA-B27 crește riscul după o astfel de infecție de 30-50 de ori",
   "70% se recuperează complet în 6 luni; conjunctivita sterilă apare în 30% din cazuri",
   "Femeile sunt afectate mai frecvent decât bărbații",
   "Toți pacienții cu artrită reactivă sunt HLA-B27 pozitivi"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Spondilartrita se dezvoltă la 1-2% după dizenterie sau infecție sexuală (uretrită/cervicită nespecifică) — Corect: Proporția 1-2% este cea de deschidere.\n\nLa bărbați, HLA-B27 crește riscul după o astfel de infecție de 30-50 de ori — Corect: Multiplicatorul 30-50 de ori la bărbați este explicit.\n\n70% se recuperează complet în 6 luni; conjunctivita sterilă apare în 30% din cazuri — Corect: 70% la 6 luni și conjunctivita 30% sunt din tabloul clinic.\n\nFemeile sunt afectate mai frecvent decât bărbații — Incorect: Femeile sunt mai rar afectate.\n\nToți pacienții cu artrită reactivă sunt HLA-B27 pozitivi — Incorect: Nu toți pacienții sunt HLA-B27 pozitivi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 450, 451, Artrita reactivă — Epidemiologie; Tablou clinic (pagini PDF: 80, 81).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    450,
    451
   ],
   "pdfPages": [
    80,
    81
   ],
   "section": "Artrita reactivă — Epidemiologie; Tablou clinic"
  },
  "learningObjective": "Integrarea riscului 1-2%, a multiplicatorului 30-50× la bărbați și a ratelor 70% / 30%.",
  "optionRationales": [
   "Proporția 1-2% este cea de deschidere.",
   "Multiplicatorul 30-50 de ori la bărbați este explicit.",
   "70% la 6 luni și conjunctivita 30% sunt din tabloul clinic.",
   "Femeile sunt mai rar afectate.",
   "Nu toți pacienții sunt HLA-B27 pozitivi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere simultan patru procente distincte; distractorii inversează sexul și absolutizează HLA-B27."
  },
  "textbookExpressions": [
   "30-50 de ori",
   "70% dintre pacienţi"
  ]
 },
 {
  "id": "reumatologie-adv-034",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Artrita enteropatică asociată BII:",
  "options": [
   "Sinovita apare la până la 10-15% dintre pacienții cu colită ulcerativă sau Crohn, asimetric, predominant la membrele inferioare",
   "Remisiunea colitei ulcerative și colectomia totală duc de obicei la remisiunea articulară, dar artrita poate persista în Crohn bine controlat",
   "bDMARD comune artritei și BII includ infliximab, adalimumab, certolizumab și ustekinumab",
   "Colectomia nu influențează artrita din CU, spre deosebire de Crohn, unde vindecă articulațiile",
   "AINS ameliorează simptomele fără risc de agrava diareea"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sinovita apare la până la 10-15% dintre pacienții cu colită ulcerativă sau Crohn, asimetric, predominant la membrele inferioare — Corect: Prevalența 10-15% și distribuția sunt din paragraf.\n\nRemisiunea colitei ulcerative și colectomia totală duc de obicei la remisiunea articulară, dar artrita poate persista în Crohn bine controlat — Corect: Diferența CU (colectomie) versus Crohn este explicită.\n\nbDMARD comune artritei și BII includ infliximab, adalimumab, certolizumab și ustekinumab — Corect: Cele patru bDMARD sunt enumerate.\n\nColectomia nu influențează artrita din CU, spre deosebire de Crohn, unde vindecă articulațiile — Incorect: Relația colectomie–CU versus Crohn este inversată.\n\nAINS ameliorează simptomele fără risc de agrava diareea — Incorect: AINS pot agrava diareea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 451, Artrită enteropatică (pagini PDF: 81).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    451
   ],
   "pdfPages": [
    81
   ],
   "section": "Artrită enteropatică"
  },
  "learningObjective": "Contrastarea remisiunii după colectomie în CU versus persistența în Crohn și lista bDMARD comune.",
  "optionRationales": [
   "Prevalența 10-15% și distribuția sunt din paragraf.",
   "Diferența CU (colectomie) versus Crohn este explicită.",
   "Cele patru bDMARD sunt enumerate.",
   "Relația colectomie–CU versus Crohn este inversată.",
   "AINS pot agrava diareea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează efectul colectomiei asupra CU versus Crohn, distincția centrală a paragrafului."
  },
  "textbookExpressions": [
   "10-15%",
   "colectomia totală"
  ]
 },
 {
  "id": "reumatologie-adv-035",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Guta și hiperuricemia, în epidemiologie și patogenie:",
  "options": [
   "Prevalența a crescut la 2,5% în Marea Britanie și 3,9% în SUA; raportul bărbați:femei este 5:1",
   "Aproximativ 85-90% din cazuri sunt idiopatice; 90% au reducerea excreției acidului uric",
   "Hiperuricemia patologică este un AUS de 408 µmol/L, valoare peste care se formează cristale in vitro la pH și temperatură fiziologică",
   "Cristalele activează inflamazomul NLRP3, cu recrutarea caspazei 1 și activarea IL-1β",
   "Majoritatea cazurilor se datorează unei erori enzimatice înnăscute, excreția fiind păstrată"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Prevalența a crescut la 2,5% în Marea Britanie și 3,9% în SUA; raportul bărbați:femei este 5:1 — Corect: Cifrele UK/SUA și raportul 5:1 sunt din epidemiologie.\n\nAproximativ 85-90% din cazuri sunt idiopatice; 90% au reducerea excreției acidului uric — Corect: 85-90% idiopatice și 90% underexcreție sunt din patogenie.\n\nHiperuricemia patologică este un AUS de 408 µmol/L, valoare peste care se formează cristale in vitro la pH și temperatură fiziologică — Corect: Pragul 408 µmol/L este definiția in vitro.\n\nCristalele activează inflamazomul NLRP3, cu recrutarea caspazei 1 și activarea IL-1β — Corect: NLRP3–caspaza 1–IL-1β este cascada autoinflamatorie.\n\nMajoritatea cazurilor se datorează unei erori enzimatice înnăscute, excreția fiind păstrată — Incorect: Eroarea enzimatică este <1%; 90% au underexcreție.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 452, Gută și hiperuricemie — Epidemiologie; Patogeneză (pagini PDF: 82).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    452
   ],
   "pdfPages": [
    82
   ],
   "section": "Gută și hiperuricemie — Epidemiologie; Patogeneză"
  },
  "learningObjective": "Integrarea prevalenței 2,5%/3,9%, a raportului 5:1, a underexcreției de 90% și a pragului 408 µmol/L cu calea NLRP3.",
  "optionRationales": [
   "Cifrele UK/SUA și raportul 5:1 sunt din epidemiologie.",
   "85-90% idiopatice și 90% underexcreție sunt din patogenie.",
   "Pragul 408 µmol/L este definiția in vitro.",
   "NLRP3–caspaza 1–IL-1β este cascada autoinflamatorie.",
   "Eroarea enzimatică este <1%; 90% au underexcreție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru fapte cantitative; distractorul umflă eroarea enzimatică rară (<1%) la cauza majoritară."
  },
  "textbookExpressions": [
   "2,5%",
   "408"
  ]
 },
 {
  "id": "reumatologie-adv-036",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Tratamentul atacului de gută și al hiperuricemiei:",
  "options": [
   "Naproxen 750 mg imediat, apoi 500 mg la 8-12 ore; după 24-48 de ore doze reduse încă o săptămână",
   "Ținta AUS este sub 360 µmol/L la toți, și sub 300 µmol/L la gută severă (tofi, atacuri frecvente)",
   "Alopurinolul nu se începe în termen de o lună de la un atac și se asociază AINS sau colchicină 2-4 săptămâni înainte și 4 după",
   "Febuxostatul este mai sigur în insuficiența renală (metabolizare hepatică), dar alopurinolul rămâne prima alegere",
   "Alopurinolul se inițiază în plin atac, fără acoperire, pentru a dizolva cristalele mai rapid"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Naproxen 750 mg imediat, apoi 500 mg la 8-12 ore; după 24-48 de ore doze reduse încă o săptămână — Corect: Schema naproxen 750 apoi 500 mg este cea din text.\n\nȚinta AUS este sub 360 µmol/L la toți, și sub 300 µmol/L la gută severă (tofi, atacuri frecvente) — Corect: Cele două ținte 360 și 300 µmol/L sunt explicite.\n\nAlopurinolul nu se începe în termen de o lună de la un atac și se asociază AINS sau colchicină 2-4 săptămâni înainte și 4 după — Corect: Regula de o lună plus acoperirea AINS/colchicină este enunțată.\n\nFebuxostatul este mai sigur în insuficiența renală (metabolizare hepatică), dar alopurinolul rămâne prima alegere — Corect: Metabolizarea hepatică și statutul de primă alegere al alopurinolului sunt din paragraful despre febuxostat.\n\nAlopurinolul se inițiază în plin atac, fără acoperire, pentru a dizolva cristalele mai rapid — Incorect: Inițierea în atac, fără acoperire, este tocmai ceea ce textul interzice.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 453, Gută — Tratament; Alopurinol; Febuxostat (pagini PDF: 83).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    453
   ],
   "pdfPages": [
    83
   ],
   "section": "Gută — Tratament; Alopurinol; Febuxostat"
  },
  "learningObjective": "Reținerea schemei de naproxen, a țintelor 360/300 µmol/L și a ferestrei de o lună a alopurinolului.",
  "optionRationales": [
   "Schema naproxen 750 apoi 500 mg este cea din text.",
   "Cele două ținte 360 și 300 µmol/L sunt explicite.",
   "Regula de o lună plus acoperirea AINS/colchicină este enunțată.",
   "Metabolizarea hepatică și statutul de primă alegere al alopurinolului sunt din paragraful despre febuxostat.",
   "Inițierea în atac, fără acoperire, este tocmai ceea ce textul interzice."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru praguri (750 mg, 360, 300, o lună); distractorul încalcă regula de a nu începe alopurinolul în atac."
  },
  "textbookExpressions": [
   "750 mg imediat",
   "360 pmol/L"
  ]
 },
 {
  "id": "reumatologie-adv-037",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Artropatia prin depunere de pirofosfat de calciu (PFCD):",
  "options": [
   "Este a treia cea mai frecventă artrită inflamatorie; atacul mimează guta, dar este mai frecvent la femei în vârstă și afectează de obicei genunchiul sau carpul",
   "Diagnosticul se face prin cristale romboidale cu birefringență pozitivă slabă sau prin calcificarea cartilajului",
   "Este mai frecventă la bărbații tineri și afectează tipic MTF1, ca guta clasică",
   "Cristalele sunt aciculare, cu birefringență negativă puternică, identice uratului",
   "Există un tratament specific care elimină cristalele de PFCD, de primă intenție"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este a treia cea mai frecventă artrită inflamatorie; atacul mimează guta, dar este mai frecvent la femei în vârstă și afectează de obicei genunchiul sau carpul — Corect: Terenul și sediile genunchi/carp sunt din paragraf.\n\nDiagnosticul se face prin cristale romboidale cu birefringență pozitivă slabă sau prin calcificarea cartilajului — Corect: Morfologia și calcificarea sunt criteriile diagnostice.\n\nEste mai frecventă la bărbații tineri și afectează tipic MTF1, ca guta clasică — Incorect: MTF1 la bărbatul tânăr este guta, nu PFCD.\n\nCristalele sunt aciculare, cu birefringență negativă puternică, identice uratului — Incorect: Acicular negativ este uratul; PFCD este romboidal slab pozitiv.\n\nExistă un tratament specific care elimină cristalele de PFCD, de primă intenție — Incorect: Nu există tratament de eliminare a cristalelor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 454, Artropatie prin depunere de PFCD (pagini PDF: 84).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    454
   ],
   "pdfPages": [
    84
   ],
   "section": "Artropatie prin depunere de PFCD"
  },
  "learningObjective": "Diferențierea terenului (femeie vârstnică, genunchi/carp) și a cristalului romboidal slab pozitiv de uratul acicular.",
  "optionRationales": [
   "Terenul și sediile genunchi/carp sunt din paragraf.",
   "Morfologia și calcificarea sunt criteriile diagnostice.",
   "MTF1 la bărbatul tânăr este guta, nu PFCD.",
   "Acicular negativ este uratul; PFCD este romboidal slab pozitiv.",
   "Nu există tratament de eliminare a cristalelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie PFCD epidemiologia și morfologia cristalului de urat din pagina anterioară."
  },
  "textbookExpressions": [
   "birefringeţă pozitivă slabă",
   "femeile în vârstă"
  ]
 },
 {
  "id": "reumatologie-adv-038",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la investigațiile din LES:",
  "options": [
   "VSH-ul este crescut în raport cu activitatea bolii, pe când PCR este de obicei normală, putând crește în pleurezie lupică, peritonită, artrită sau infecție coexistentă",
   "PCR urmărește liniar activitatea lupică, iar VSH-ul rămâne normal în puseu",
   "Leucocitoza cu neutrofilie este hemograma tipică de puseu, limfopenia fiind rară",
   "C3 și C4 cresc în boala activă, ca reactanți de fază acută",
   "ANA lipsește de regulă; diagnosticul se bazează doar pe anti-ADNdc"
  ],
  "correct": [
   0
  ],
  "explanation": "VSH-ul este crescut în raport cu activitatea bolii, pe când PCR este de obicei normală, putând crește în pleurezie lupică, peritonită, artrită sau infecție coexistentă — Corect: Disociația VSH/PCR și excepțiile sunt enunțate explicit.\n\nPCR urmărește liniar activitatea lupică, iar VSH-ul rămâne normal în puseu — Incorect: Relația este inversă: PCR nu urmărește liniar puseul.\n\nLeucocitoza cu neutrofilie este hemograma tipică de puseu, limfopenia fiind rară — Incorect: Hemograma poate arăta leucopenie, limfopenie și/sau trombocitopenie.\n\nC3 și C4 cresc în boala activă, ca reactanți de fază acută — Incorect: C3 și C4 sunt adesea scăzute în boala activă.\n\nANA lipsește de regulă; diagnosticul se bazează doar pe anti-ADNdc — Incorect: ANA și anti-ADNdc, anti-Ro, anti-Sm, anti-La sunt semnificativi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 457, Lupus eritematos sistemic — Investigații (pagini PDF: 87).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    457
   ],
   "pdfPages": [
    87
   ],
   "section": "Lupus eritematos sistemic — Investigații"
  },
  "learningObjective": "Contrastarea VSH crescut / PCR de obicei normală, cu excepțiile (serozită, artrită, infecție).",
  "optionRationales": [
   "Disociația VSH/PCR și excepțiile sunt enunțate explicit.",
   "Relația este inversă: PCR nu urmărește liniar puseul.",
   "Hemograma poate arăta leucopenie, limfopenie și/sau trombocitopenie.",
   "C3 și C4 sunt adesea scăzute în boala activă.",
   "ANA și anti-ADNdc, anti-Ro, anti-Sm, anti-La sunt semnificativi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează disociația VSH/PCR și direcția complementului, două capcane clasice din același paragraf."
  },
  "textbookExpressions": [
   "PCR este de obicei normală",
   "anti-ADNdc"
  ]
 },
 {
  "id": "reumatologie-adv-039",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la evaluarea artritei inflamatoare precoce:",
  "options": [
   "Diagnosticul este ajutat de numărul și tipul articulațiilor (simetric/asimetric, mari/mici), de boala non-articulară, de antecedentele personale sau familiale și de periodicitate (unică acută, recurentă, cronică progresivă)",
   "Diagnosticul se bazează doar pe eroziunile radiografice tardive, fără evaluarea periodicității",
   "Markerii inflamatori VSH și PCR sunt de obicei normali în sinovita inflamatoare, spre deosebire de artroză",
   "Durerea inflamatoare se ameliorează la repaus și se agravează imediat la efort, identic artrozei",
   "Separarea genetică MHC dispare odată ce artrita a devenit simetrică"
  ],
  "correct": [
   0
  ],
  "explanation": "Diagnosticul este ajutat de numărul și tipul articulațiilor (simetric/asimetric, mari/mici), de boala non-articulară, de antecedentele personale sau familiale și de periodicitate (unică acută, recurentă, cronică progresivă) — Corect: Cele patru axe de evaluare sunt enumerate explicit.\n\nDiagnosticul se bazează doar pe eroziunile radiografice tardive, fără evaluarea periodicității — Incorect: Textul precizează că în artrita precoce diagnosticul specific poate lipsi până la evoluție; eroziunile nu sunt criteriul de start.\n\nMarkerii inflamatori VSH și PCR sunt de obicei normali în sinovita inflamatoare, spre deosebire de artroză — Incorect: VSH și PCR sunt de obicei crescuți în afecțiunile inflamatoare.\n\nDurerea inflamatoare se ameliorează la repaus și se agravează imediat la efort, identic artrozei — Incorect: Durerea și redoarea inflamatoare sunt mai accentuate dimineața, durând adesea câteva ore, și se ameliorează cu activitatea.\n\nSepararea genetică MHC dispare odată ce artrita a devenit simetrică — Incorect: Separarea MHC (clasa II în AR, B27/clasa I în SpA) este descrisă ca distinctă, independent de simetrie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 437, Afecțiuni articulare inflamatoare — Evaluare diagnostică (pagini PDF: 67).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    437
   ],
   "pdfPages": [
    67
   ],
   "section": "Afecțiuni articulare inflamatoare — Evaluare diagnostică"
  },
  "learningObjective": "Reținerea pachetului de evaluare (număr/tip, extra-articular, familie, periodicitate), distinct de eroziunile tardive.",
  "optionRationales": [
   "Cele patru axe de evaluare sunt enumerate explicit.",
   "Textul precizează că în artrita precoce diagnosticul specific poate lipsi până la evoluție; eroziunile nu sunt criteriul de start.",
   "VSH și PCR sunt de obicei crescuți în afecțiunile inflamatoare.",
   "Durerea și redoarea inflamatoare sunt mai accentuate dimineața, durând adesea câteva ore, și se ameliorează cu activitatea.",
   "Separarea MHC (clasa II în AR, B27/clasa I în SpA) este descrisă ca distinctă, independent de simetrie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută diagnosticul pe eroziuni tardive și inversează redoarea inflamatoare versus mecanică din același paragraf."
  },
  "textbookExpressions": [
   "numărului şi tipului",
   "periodicităţii artritei"
  ]
 },
 {
  "id": "reumatologie-adv-040",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la indiciile extra-articulare și la redoarea matinală:",
  "options": [
   "Psoriazisul, iridociclita, bolile inflamatorii intestinale, uretrita nespecifică sau dizenteria recentă sugerează spondilartrită",
   "Pot exista dovezi de boală virală recentă (rubeolă, hepatită B sau eritrovirus), febră reumatică sau mușcătură de căpușă cu erupție (boala Lyme)",
   "Durerea și redoarea inflamatoare sunt mai accentuate dimineața, adesea durând câteva ore și îmbunătățindu-se odată cu activitatea, spre deosebire de redoarea scurtă și durerea mecanică din OA",
   "Iridociclita și BII orientează către artrita microcristalină, nu către SpA",
   "Redoarea matinală de câteva ore este tipică artrozei, nu sinovitei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Psoriazisul, iridociclita, bolile inflamatorii intestinale, uretrita nespecifică sau dizenteria recentă sugerează spondilartrită — Corect: Lista extra-articulară de SpA este cea din paragraf.\n\nPot exista dovezi de boală virală recentă (rubeolă, hepatită B sau eritrovirus), febră reumatică sau mușcătură de căpușă cu erupție (boala Lyme) — Corect: Cele trei etiologii virale, febra reumatică și Lyme sunt enumerate.\n\nDurerea și redoarea inflamatoare sunt mai accentuate dimineața, adesea durând câteva ore și îmbunătățindu-se odată cu activitatea, spre deosebire de redoarea scurtă și durerea mecanică din OA — Corect: Contrastul cu OA (redoare scurtă, durere mecanică) este explicit.\n\nIridociclita și BII orientează către artrita microcristalină, nu către SpA — Incorect: Psoriazisul, iridociclita și BII sugerează SpA, nu cristale.\n\nRedoarea matinală de câteva ore este tipică artrozei, nu sinovitei — Incorect: Redoarea de câteva ore caracterizează inflamatorul, nu OA.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 437, Afecțiuni articulare inflamatoare — Indicii extra-articulare (pagini PDF: 67).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    437
   ],
   "pdfPages": [
    67
   ],
   "section": "Afecțiuni articulare inflamatoare — Indicii extra-articulare"
  },
  "learningObjective": "Contrastarea indiciilor de SpA și a etiologiilor virale/Lyme cu redoarea matinală prelungită versus OA.",
  "optionRationales": [
   "Lista extra-articulară de SpA este cea din paragraf.",
   "Cele trei etiologii virale, febra reumatică și Lyme sunt enumerate.",
   "Contrastul cu OA (redoare scurtă, durere mecanică) este explicit.",
   "Psoriazisul, iridociclita și BII sugerează SpA, nu cristale.",
   "Redoarea de câteva ore caracterizează inflamatorul, nu OA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută iridociclita/BII pe cristale și atribuie redoarea prelungită artrozei, inversând contrastul din text."
  },
  "textbookExpressions": [
   "iridociclita",
   "câteva ore"
  ]
 },
 {
  "id": "reumatologie-adv-041",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "În imunopatogenia AR, dincolo de VCAM-1/DAF deja consacrate, sunt adevărate:",
  "options": [
   "Producerea în exces de TNF-α, determinată de interacțiunea macrofagelor cu limfocitele T și B, duce la sinovită și distrugerea articulațiilor; TNF-α stimulează sinteza în exces de IL-6",
   "Osteoclastele cauzează distrugerea osului și cartilajului",
   "Celulele sinoviale predominante sunt condrocitele hialine, osteoclastul fiind absent din leziune",
   "TNF-α inhibă IL-6, motiv pentru care anti-TNF agravează sinovita",
   "Limfocitele Th17 sunt suprimate de TGF-β, iar T reglatoarele se dezvoltă nestingherit"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Producerea în exces de TNF-α, determinată de interacțiunea macrofagelor cu limfocitele T și B, duce la sinovită și distrugerea articulațiilor; TNF-α stimulează sinteza în exces de IL-6 — Corect: Excesul de TNF-α și inducerea IL-6 sunt enunțate.\n\nOsteoclastele cauzează distrugerea osului și cartilajului — Corect: Rolul osteoclastelor este listat printre disfuncțiile celulare.\n\nCelulele sinoviale predominante sunt condrocitele hialine, osteoclastul fiind absent din leziune — Incorect: Sinoviocitele asemănătoare fibroblastelor și macrofagelor predomină; osteoclastul este prezent și distructiv.\n\nTNF-α inhibă IL-6, motiv pentru care anti-TNF agravează sinovita — Incorect: TNF-α stimulează, nu inhibă, IL-6.\n\nLimfocitele Th17 sunt suprimate de TGF-β, iar T reglatoarele se dezvoltă nestingherit — Incorect: Textul precizează că T reglatoarele normale sunt suprimate, permițând Th17 să se dezvolte.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 438, 439, Artrita reumatoidă — Imunologie (pagini PDF: 68, 69).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    438,
    439
   ],
   "pdfPages": [
    68,
    69
   ],
   "section": "Artrita reumatoidă — Imunologie"
  },
  "learningObjective": "Plasarea excesului de TNF-α/IL-6 și a osteoclastului în lanțul distructiv, distinct de moleculele de adeziune deja acoperite.",
  "optionRationales": [
   "Excesul de TNF-α și inducerea IL-6 sunt enunțate.",
   "Rolul osteoclastelor este listat printre disfuncțiile celulare.",
   "Sinoviocitele asemănătoare fibroblastelor și macrofagelor predomină; osteoclastul este prezent și distructiv.",
   "TNF-α stimulează, nu inhibă, IL-6.",
   "Textul precizează că T reglatoarele normale sunt suprimate, permițând Th17 să se dezvolte."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează inducerea IL-6 de către TNF-α și soarta Th17/Treg din același paragraf."
  },
  "textbookExpressions": [
   "TNF-a",
   "Osteoclastele"
  ]
 },
 {
  "id": "reumatologie-adv-042",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre FR de tip IgM și despre ACPA, dincolo de prevalența 75-80%:",
  "options": [
   "Cele mai frecvente teste clinice detectează FR de tip IgM; „AR seronegativă” se folosește când testele standard pentru FR IgM sunt persistent negative, acești pacienți având un tip mai limitat de sinovită",
   "FR IgM nu sunt diagnostici pentru AR și absența lor nu exclude boala; un titru persistent ridicat în boala precoce implică sinovită persistent activă și mai multe leziuni, justificând DMARD precoce",
   "ACPA sunt factori predictivi mai puternici pentru tranziția de la artrita inflamatorie tranzitorie precoce la sinovita persistentă; prezența asociată FR și ACPA este și mai specifică",
   "FR IgM negativ infirmă definitiv AR, indiferent de clinică",
   "ACPA sunt mai slabi predictori de persistență decât FR IgM izolat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cele mai frecvente teste clinice detectează FR de tip IgM; „AR seronegativă” se folosește când testele standard pentru FR IgM sunt persistent negative, acești pacienți având un tip mai limitat de sinovită — Corect: Definiția seronegativității și sinovita mai limitată sunt explicite.\n\nFR IgM nu sunt diagnostici pentru AR și absența lor nu exclude boala; un titru persistent ridicat în boala precoce implică sinovită persistent activă și mai multe leziuni, justificând DMARD precoce — Corect: Absența valorii diagnostice și rolul prognostic al titrului înalt sunt enunțate.\n\nACPA sunt factori predictivi mai puternici pentru tranziția de la artrita inflamatorie tranzitorie precoce la sinovita persistentă; prezența asociată FR și ACPA este și mai specifică — Corect: Puterea predictivă a ACPA și specificitatea combinației sunt din închiderea paragrafului.\n\nFR IgM negativ infirmă definitiv AR, indiferent de clinică — Incorect: Absența FR IgM nu exclude boala.\n\nACPA sunt mai slabi predictori de persistență decât FR IgM izolat — Incorect: Textul atribuie ACPA predicția mai puternică, nu mai slabă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 439, Factorii reumatoizi și ACPA (pagini PDF: 69).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    439
   ],
   "pdfPages": [
    69
   ],
   "section": "Factorii reumatoizi și ACPA"
  },
  "learningObjective": "Separarea valorii non-diagnostice a FR IgM de puterea predictivă superioară a ACPA și de specificitatea combinației.",
  "optionRationales": [
   "Definiția seronegativității și sinovita mai limitată sunt explicite.",
   "Absența valorii diagnostice și rolul prognostic al titrului înalt sunt enunțate.",
   "Puterea predictivă a ACPA și specificitatea combinației sunt din închiderea paragrafului.",
   "Absența FR IgM nu exclude boala.",
   "Textul atribuie ACPA predicția mai puternică, nu mai slabă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă un marker prognostic (FR IgM) într-un test de excludere și inversează ierarhia ACPA versus FR."
  },
  "textbookExpressions": [
   "AR seronegativă",
   "mai puternici"
  ]
 },
 {
  "id": "reumatologie-adv-043",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "La un pacient cu poliartrită inflamatorie de 8 săptămâni, un test ACPA pozitiv, fără psoriazis personal sau familial, combinat cu cel puțin o articulație tumefiată peste 6 săptămâni, reprezintă, potrivit capitolului:",
  "options": [
   "Cel mai bun mod de a selecta pacienții pentru tratament precoce, pentru a evita leziunile articulare",
   "Un motiv de a amâna DMARD până apar eroziunile radiografice clasice",
   "O indicație de a clasifica imediat cazul ca spondilartrită, independent de ACPA",
   "Un argument că criteriile 2010 sunt inferioare celor vechi, deoarece cer extra-articularul tardiv",
   "O contraindicație de tratament, ACPA având valoare doar retrospectivă"
  ],
  "correct": [
   0
  ],
  "explanation": "Cel mai bun mod de a selecta pacienții pentru tratament precoce, pentru a evita leziunile articulare — Corect: Această combinație este descrisă ca cel mai bun mod de selecție; abordarea reduce riscul de leziuni permanente.\n\nUn motiv de a amâna DMARD până apar eroziunile radiografice clasice — Incorect: Criteriile 2010 tocmai evită așteptarea eroziunilor tardive.\n\nO indicație de a clasifica imediat cazul ca spondilartrită, independent de ACPA — Incorect: Absența terenului de SpA și ACPA orientează către AR, nu către SpA.\n\nUn argument că criteriile 2010 sunt inferioare celor vechi, deoarece cer extra-articularul tardiv — Incorect: Textul spune că criteriile 2010 sunt mai potrivite pentru artrita precoce decât versiunile anterioare.\n\nO contraindicație de tratament, ACPA având valoare doar retrospectivă — Incorect: ACPA pot preceda clinic boala și ghidează tratamentul precoce.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 440, Artrita reumatoidă — Selecția pentru tratament precoce (pagini PDF: 70).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    440
   ],
   "pdfPages": [
    70
   ],
   "section": "Artrita reumatoidă — Selecția pentru tratament precoce"
  },
  "learningObjective": "Reținerea combinației ≥1 articulație tumefiată >6 săptămâni + ACPA, fără teren de SpA, ca selector de tratament precoce.",
  "optionRationales": [
   "Această combinație este descrisă ca cel mai bun mod de selecție; abordarea reduce riscul de leziuni permanente.",
   "Criteriile 2010 tocmai evită așteptarea eroziunilor tardive.",
   "Absența terenului de SpA și ACPA orientează către AR, nu către SpA.",
   "Textul spune că criteriile 2010 sunt mai potrivite pentru artrita precoce decât versiunile anterioare.",
   "ACPA pot preceda clinic boala și ghidează tratamentul precoce."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii amână tratamentul până la eroziuni, inversând tocmai argumentul criteriilor 2010 din același paragraf."
  },
  "textbookExpressions": [
   "mai mult de 6 săptămâni",
   "test ACPA pozitiv"
  ]
 },
 {
  "id": "reumatologie-adv-044",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Conform Cadranului 18.26, factorii care prezic un prognostic negativ pentru progresia AR precoce includ:",
  "options": [
   "Vârstă înaintată și sexul feminin",
   "Afectarea simetrică a articulațiilor mici și redoarea matinală peste 30 de minute",
   "Peste 4 articulații tumefiate și fumatul",
   "FR și ACPA pozitivi, plus comorbidități",
   "Debut exploziv la bărbat tânăr, monoarticular, fără redoare matinală"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Vârstă înaintată și sexul feminin — Corect: Vârsta și sexul feminin figurează în cadran.\n\nAfectarea simetrică a articulațiilor mici și redoarea matinală peste 30 de minute — Corect: Simetria articulațiilor mici și redoarea >30 de minute sunt listate.\n\nPeste 4 articulații tumefiate și fumatul — Corect: Pragul >4 articulații tumefiate și fumatul completează lista.\n\nFR și ACPA pozitivi, plus comorbidități — Corect: FR/ACPA și comorbiditățile sunt ultimele rânduri.\n\nDebut exploziv la bărbat tânăr, monoarticular, fără redoare matinală — Incorect: Profilul exploziv monoarticular masculin nu este clusterul de rău prognostic al cadranului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 440, Cadranul 18.26 — Prognostic negativ în AR precoce (pagini PDF: 70).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    440
   ],
   "pdfPages": [
    70
   ],
   "section": "Cadranul 18.26 — Prognostic negativ în AR precoce"
  },
  "learningObjective": "Recunoașterea clusterului de rău prognostic (vârstă, sex, simetrie, redoare >30 min, >4 articulații, fumat, serologie).",
  "optionRationales": [
   "Vârsta și sexul feminin figurează în cadran.",
   "Simetria articulațiilor mici și redoarea >30 de minute sunt listate.",
   "Pragul >4 articulații tumefiate și fumatul completează lista.",
   "FR/ACPA și comorbiditățile sunt ultimele rânduri.",
   "Profilul exploziv monoarticular masculin nu este clusterul de rău prognostic al cadranului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru elemente reale din același cadran; distractorul descrie tocmai reversul (bărbat tânăr, mono, fără redoare)."
  },
  "textbookExpressions": [
   ">30 de minute",
   ">4 articulaţii tumefiate"
  ]
 },
 {
  "id": "reumatologie-adv-045",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "În Cadranul 18.28 (ACR/EULAR 2010), punctajele de domeniu, dincolo de pragul ≥6, includ:",
  "options": [
   "O articulație medie/mare valorează 0 puncte; 2-10 articulații medii/mari valorează 1 punct",
   "FR sau ACPA pozitivi în titru mare valorează 3 puncte; reactanții de fază acută anormali valorează 1 punct",
   "Durata simptomelor ≥6 săptămâni valorează 1 punct; sub 6 săptămâni valorează 0",
   "O articulație medie/mare valorează 5 puncte, suficientă singură pentru clasificare",
   "Durata sub 6 săptămâni valorează 3 puncte, identic serologiei în titru mare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "O articulație medie/mare valorează 0 puncte; 2-10 articulații medii/mari valorează 1 punct — Corect: Perechea 0 / 1 pentru articulații mari este din tabel.\n\nFR sau ACPA pozitivi în titru mare valorează 3 puncte; reactanții de fază acută anormali valorează 1 punct — Corect: 3 puncte pentru titru mare și 1 pentru PCR/VSH anormal sunt explicite.\n\nDurata simptomelor ≥6 săptămâni valorează 1 punct; sub 6 săptămâni valorează 0 — Corect: Durata ≥6 săptămâni = 1, <6 = 0.\n\nO articulație medie/mare valorează 5 puncte, suficientă singură pentru clasificare — Incorect: 5 puncte revin a >10 articulații cu cel puțin o articulație mică, nu unei singure articulații mari.\n\nDurata sub 6 săptămâni valorează 3 puncte, identic serologiei în titru mare — Incorect: Durata scurtă valorează 0, nu 3.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 440, Cadranul 18.28 — Punctajele ACR/EULAR 2010 (pagini PDF: 70).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    440
   ],
   "pdfPages": [
    70
   ],
   "section": "Cadranul 18.28 — Punctajele ACR/EULAR 2010"
  },
  "learningObjective": "Reținerea punctajelor de domeniu (0 pentru o articulație mare, 3 pentru serologie înaltă, 1 pentru durată ≥6 săptămâni), nu doar a pragului de 6.",
  "optionRationales": [
   "Perechea 0 / 1 pentru articulații mari este din tabel.",
   "3 puncte pentru titru mare și 1 pentru PCR/VSH anormal sunt explicite.",
   "Durata ≥6 săptămâni = 1, <6 = 0.",
   "5 puncte revin a >10 articulații cu cel puțin o articulație mică, nu unei singure articulații mari.",
   "Durata scurtă valorează 0, nu 3."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută punctajele reale 0, 1, 3 și 5 între domenii, capcana clasică a tabelului de clasificare."
  },
  "textbookExpressions": [
   "2-10 articulaţii",
   "e:6 săptămâni"
  ]
 },
 {
  "id": "reumatologie-adv-046",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Un pacient de 78 de ani tratat ca polimialgie reumatică observă reaparția sinovitei pe măsură ce se scade doza de glucocorticoizi. Capitolul descrie acest scenariu ca:",
  "options": [
   "AR a vârstnicului, care poate imita polimialgia reumatică, sinovita devenind evidentă la reducerea glucocorticoizilor",
   "Artroză nodulară acutizată, fără sinovită demascabilă la scăderea steroizilor",
   "Spondilartrită axială de novo, tipică decadei a opta",
   "Gută tofacee, deoarece PMR exclude AR",
   "O reacție la hidroxiclorochină, nu o formă de AR"
  ],
  "correct": [
   0
  ],
  "explanation": "AR a vârstnicului, care poate imita polimialgia reumatică, sinovita devenind evidentă la reducerea glucocorticoizilor — Corect: Fraza despre AR a vârstnicului care imită PMR este explicită.\n\nArtroză nodulară acutizată, fără sinovită demascabilă la scăderea steroizilor — Incorect: Cadranul 18.27 listează PMR și acutizarea artrozei printre diagnosticele diferențiale, dar scenariul descris este AR.\n\nSpondilartrită axială de novo, tipică decadei a opta — Incorect: AxSpA privește adultul tânăr, nu debutul octogenar tipic PMR.\n\nGută tofacee, deoarece PMR exclude AR — Incorect: Guta nu este explicația dată pentru acest mimetism.\n\nO reacție la hidroxiclorochină, nu o formă de AR — Incorect: Hidroxiclorochina nu este invocată în acest paragraf.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 440, Alte tipuri de prezentare — AR a vârstnicului (pagini PDF: 70).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    440
   ],
   "pdfPages": [
    70
   ],
   "section": "Alte tipuri de prezentare — AR a vârstnicului"
  },
  "learningObjective": "Recunoașterea mimetismului PMR la vârstnic, cu demascarea sinovitei la taperingul glucocorticoizilor.",
  "optionRationales": [
   "Fraza despre AR a vârstnicului care imită PMR este explicită.",
   "Cadranul 18.27 listează PMR și acutizarea artrozei printre diagnosticele diferențiale, dar scenariul descris este AR.",
   "AxSpA privește adultul tânăr, nu debutul octogenar tipic PMR.",
   "Guta nu este explicația dată pentru acest mimetism.",
   "Hidroxiclorochina nu este invocată în acest paragraf."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vigneta cere recunoașterea demascării AR la scăderea steroizilor, nu a PMR „pură” sau a artrozei din același diagnostic diferențial."
  },
  "textbookExpressions": [
   "polimialgia reumatică",
   "glucocorticoizi"
  ]
 },
 {
  "id": "reumatologie-adv-047",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Reumatismul palindromic, în datele de prevalență și conversie:",
  "options": [
   "Este rar (circa 5%) și constă din episoade de 24-48 de ore de monoartrită acută, cu remisiune completă între atacuri",
   "Aproximativ 50% dezvoltă sinovită reumatoidă cronică tipică după luni sau ani; detectarea FR sau ACPA prezice conversia",
   "Este forma cea mai frecventă de AR (peste 70%), cu sinovită continuă între episoade",
   "Conversia la sinovită cronică este infirmată de prezența FR sau ACPA",
   "Atacurile durează 6-12 luni, identic formei tranzitorii"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este rar (circa 5%) și constă din episoade de 24-48 de ore de monoartrită acută, cu remisiune completă între atacuri — Corect: Prevalența 5% și durata 24-48 de ore sunt din paragraf.\n\nAproximativ 50% dezvoltă sinovită reumatoidă cronică tipică după luni sau ani; detectarea FR sau ACPA prezice conversia — Corect: Rata 50% și valoarea predictivă a FR/ACPA sunt explicite.\n\nEste forma cea mai frecventă de AR (peste 70%), cu sinovită continuă între episoade — Incorect: Forma palindromică este rară, nu majoritară.\n\nConversia la sinovită cronică este infirmată de prezența FR sau ACPA — Incorect: FR/ACPA prezic, nu infirmă, conversia.\n\nAtacurile durează 6-12 luni, identic formei tranzitorii — Incorect: 6-12 luni definește forma tranzitorie, nu palindromică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 441, Cadranul 18.29 — Reumatism palindromic (pagini PDF: 71).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    441
   ],
   "pdfPages": [
    71
   ],
   "section": "Cadranul 18.29 — Reumatism palindromic"
  },
  "learningObjective": "Reținerea rarității de 5%, a ferestrei 24-48 de ore și a ratei de conversie de 50% prezise de FR/ACPA.",
  "optionRationales": [
   "Prevalența 5% și durata 24-48 de ore sunt din paragraf.",
   "Rata 50% și valoarea predictivă a FR/ACPA sunt explicite.",
   "Forma palindromică este rară, nu majoritară.",
   "FR/ACPA prezic, nu infirmă, conversia.",
   "6-12 luni definește forma tranzitorie, nu palindromică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă palindromicul (ore, 5%) cu forma tranzitorie (<12 luni) și inversează semnificația serologiei."
  },
  "textbookExpressions": [
   "5%",
   "24-48 de ore"
  ]
 },
 {
  "id": "reumatologie-adv-048",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Complicațiile AR necontrolate, dincolo de extra-articularul clasic, includ:",
  "options": [
   "Artrita septică are morbiditate și mortalitate semnificativă; la imunodeprimați, articulațiile afectate pot să nu genereze semnele tipice de inflamație cu febră",
   "AR este cea mai frecventă cauză a amiloidozei de tip AA secundare",
   "Amiloidoza AL provoacă o poliartrită care seamănă cu AR în distribuție și se asociază adesea cu tunel carpian și noduli subcutanați",
   "Amiloidoza AA este cauza majoritară de AR seropozitivă, nu o complicație rară",
   "La imunodeprimați, febra înaltă și semnele locale floride sunt constante, screeningul fiind superfluu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Artrita septică are morbiditate și mortalitate semnificativă; la imunodeprimați, articulațiile afectate pot să nu genereze semnele tipice de inflamație cu febră — Corect: Absența semnelor tipice la imunodeprimați este avertismentul citat.\n\nAR este cea mai frecventă cauză a amiloidozei de tip AA secundare — Corect: AR ca cea mai frecventă cauză de AA este explicită.\n\nAmiloidoza AL provoacă o poliartrită care seamănă cu AR în distribuție și se asociază adesea cu tunel carpian și noduli subcutanați — Corect: AL cu tunel carpian și noduli este distincția de diagnostic diferențial.\n\nAmiloidoza AA este cauza majoritară de AR seropozitivă, nu o complicație rară — Incorect: AA este o complicație rară a AR necontrolate, nu cauza AR.\n\nLa imunodeprimați, febra înaltă și semnele locale floride sunt constante, screeningul fiind superfluu — Incorect: Textul precizează tocmai că semnele pot lipsi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 441, Complicații — Artrita septică; Amiloidoza (pagini PDF: 71).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    441
   ],
   "pdfPages": [
    71
   ],
   "section": "Complicații — Artrita septică; Amiloidoza"
  },
  "learningObjective": "Contrastarea artritei septice silențioase a imunodeprimatului cu AA secundară AR versus AL care mimează AR.",
  "optionRationales": [
   "Absența semnelor tipice la imunodeprimați este avertismentul citat.",
   "AR ca cea mai frecventă cauză de AA este explicită.",
   "AL cu tunel carpian și noduli este distincția de diagnostic diferențial.",
   "AA este o complicație rară a AR necontrolate, nu cauza AR.",
   "Textul precizează tocmai că semnele pot lipsi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează direcția AA (complicație versus cauză) și anulează silențiozitatea infecției la imunodeprimat."
  },
  "textbookExpressions": [
   "amiloidozei de tip AA",
   "imunodeprimaţi"
  ]
 },
 {
  "id": "reumatologie-adv-049",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Inițial, afectarea umărului în AR imită de regulă:",
  "options": [
   "Tendinoza calotei rotatorilor, cu sindrom de arc dureros și durere în partea superioară a brațelor pe timp de noapte",
   "Instabilitatea atlanto-axială, ca primă manifestare scapulară",
   "Protruzia acetabulară, umărul fiind cruțat până în stadiul terminal",
   "Ruptura extensorilor 4 și 5, prin subluxația stiloidei ulnare",
   "Bursita poplitee, cu chist Baker scapular"
  ],
  "correct": [
   0
  ],
  "explanation": "Tendinoza calotei rotatorilor, cu sindrom de arc dureros și durere în partea superioară a brațelor pe timp de noapte — Corect: Imitarea tendinozei calotei, arcul dureros și durerea nocturnă sunt fraza de deschidere.\n\nInstabilitatea atlanto-axială, ca primă manifestare scapulară — Incorect: Instabilitatea atlanto-axială privește coloana cervicală.\n\nProtruzia acetabulară, umărul fiind cruțat până în stadiul terminal — Incorect: Protrusio este o leziune de șold.\n\nRuptura extensorilor 4 și 5, prin subluxația stiloidei ulnare — Incorect: Ruptura extensorilor 4-5 este o leziune de stiloidă ulnară.\n\nBursita poplitee, cu chist Baker scapular — Incorect: Chistul popliteu privește genunchiul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 441, Afectarea articulară — Umerii (pagini PDF: 71).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    441
   ],
   "pdfPages": [
    71
   ],
   "section": "Afectarea articulară — Umerii"
  },
  "learningObjective": "Recunoașterea mimetismului de calotă rotatorilor înaintea rigidizării globale și a rupturii de cuff.",
  "optionRationales": [
   "Imitarea tendinozei calotei, arcul dureros și durerea nocturnă sunt fraza de deschidere.",
   "Instabilitatea atlanto-axială privește coloana cervicală.",
   "Protrusio este o leziune de șold.",
   "Ruptura extensorilor 4-5 este o leziune de stiloidă ulnară.",
   "Chistul popliteu privește genunchiul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reciclează leziuni reale din aceleași pagini (C1-C2, protrusio, stiloidă, Baker) atribuite greșit umărului precoce."
  },
  "textbookExpressions": [
   "calotei rotatorilor",
   "arc dureros"
  ]
 },
 {
  "id": "reumatologie-adv-050",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Afectarea genunchilor și a șoldurilor în AR constituită se caracterizează prin:",
  "options": [
   "Sinovita masivă și revărsatul genunchiului răspund bine la aspirație și injecție cu glucocorticoizi; lichidul persistent crește riscul de chist popliteal și ruptură",
   "Eroziunea duce la pierderea spațiului articular pe compartimentele medial, lateral și/sau retropatelar, cu deformare în varus sau valgus și gonartroză secundară",
   "Șoldurile sunt afectate ocazional în AR precoce, dar mai puțin frecvent decât genunchii; osteoporoza juxta-articulară poate permite protrusio acetabulae",
   "Șoldul este sediul cel mai precoce și cel mai frecvent, genunchiul fiind cruțat",
   "Chistul popliteal este o leziune de bursă olecraniană, fără legătură cu genunchiul"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sinovita masivă și revărsatul genunchiului răspund bine la aspirație și injecție cu glucocorticoizi; lichidul persistent crește riscul de chist popliteal și ruptură — Corect: Aspirația, injecția și riscul de chist popliteal sunt enunțate.\n\nEroziunea duce la pierderea spațiului articular pe compartimentele medial, lateral și/sau retropatelar, cu deformare în varus sau valgus și gonartroză secundară — Corect: Cele trei compartimente și varus/valgus sunt din paragraf.\n\nȘoldurile sunt afectate ocazional în AR precoce, dar mai puțin frecvent decât genunchii; osteoporoza juxta-articulară poate permite protrusio acetabulae — Corect: Frecvența mai mică a șoldului și protrusio sunt explicite.\n\nȘoldul este sediul cel mai precoce și cel mai frecvent, genunchiul fiind cruțat — Incorect: Relația de frecvență este inversă.\n\nChistul popliteal este o leziune de bursă olecraniană, fără legătură cu genunchiul — Incorect: Chistul popliteal este al genunchiului, nu al cotului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 442, Afectarea articulară — Genunchii; Șoldurile (pagini PDF: 72).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    442
   ],
   "pdfPages": [
    72
   ],
   "section": "Afectarea articulară — Genunchii; Șoldurile"
  },
  "learningObjective": "Contrastarea frecvenței genunchi versus șold și recunoașterea chistului popliteal versus protrusio.",
  "optionRationales": [
   "Aspirația, injecția și riscul de chist popliteal sunt enunțate.",
   "Cele trei compartimente și varus/valgus sunt din paragraf.",
   "Frecvența mai mică a șoldului și protrusio sunt explicite.",
   "Relația de frecvență este inversă.",
   "Chistul popliteal este al genunchiului, nu al cotului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează ierarhia genunchi/șold și mută chistul Baker pe bursa olecraniană din aceeași secțiune."
  },
  "textbookExpressions": [
   "chistului popliteal",
   "protrusio acetabulae"
  ]
 },
 {
  "id": "reumatologie-adv-051",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Manifestările non-articulare de țesut moale și extra-articulare mai puțin acoperite anterior includ:",
  "options": [
   "Nodulii reumatoizi subcutanați sunt fermi, intradermici, la puncte de presiune (coate, degete, Ahile) la pacienții cu boală erozivă seropozitivă și tind să recidiveze după excizie",
   "Tenosinovita flexorilor poate provoca un deget în resort; tumefierea tecii extensorilor pe fața dorsală a pumnului este frecventă",
   "Sindromul Felty asociază splenomegalie și neutropenie; HLA-DR4 se găsește la 95% dintre acești pacienți, față de 50-75% în AR fără Felty",
   "Sclerita și episclerita apar în boala severă seropozitivă, ca ochi roșii dureroși",
   "Nodulii apar tipic în AR seronegativă non-erozivă și nu recidivează după excizie"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Nodulii reumatoizi subcutanați sunt fermi, intradermici, la puncte de presiune (coate, degete, Ahile) la pacienții cu boală erozivă seropozitivă și tind să recidiveze după excizie — Corect: Sediile de presiune, terenul eroziv seropozitiv și recidiva sunt din paragraf.\n\nTenosinovita flexorilor poate provoca un deget în resort; tumefierea tecii extensorilor pe fața dorsală a pumnului este frecventă — Corect: Degetul în resort și tenosinovita extensorilor sunt explicite.\n\nSindromul Felty asociază splenomegalie și neutropenie; HLA-DR4 se găsește la 95% dintre acești pacienți, față de 50-75% în AR fără Felty — Corect: Cifrele HLA-DR4 95% versus 50-75% sunt din pagina următoare.\n\nSclerita și episclerita apar în boala severă seropozitivă, ca ochi roșii dureroși — Corect: Sclerita/episclerita din boala severă seropozitivă completează extra-articularul.\n\nNodulii apar tipic în AR seronegativă non-erozivă și nu recidivează după excizie — Incorect: Nodulii țin de boala erozivă seropozitivă și recidivează.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 442, 443, Țesuturi moi; Sindromul Felty; Ochii (pagini PDF: 72, 73).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    442,
    443
   ],
   "pdfPages": [
    72,
    73
   ],
   "section": "Țesuturi moi; Sindromul Felty; Ochii"
  },
  "learningObjective": "Integrarea nodulilor de presiune, a degetului în resort, a HLA-DR4 din Felty (95% vs 50-75%) și a scleritei.",
  "optionRationales": [
   "Sediile de presiune, terenul eroziv seropozitiv și recidiva sunt din paragraf.",
   "Degetul în resort și tenosinovita extensorilor sunt explicite.",
   "Cifrele HLA-DR4 95% versus 50-75% sunt din pagina următoare.",
   "Sclerita/episclerita din boala severă seropozitivă completează extra-articularul.",
   "Nodulii țin de boala erozivă seropozitivă și recidivează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru asocieri reale; distractorul inversează terenul seropozitiv al nodulilor și neagă recidiva post-excizie."
  },
  "textbookExpressions": [
   "Nodulii reumatoizi",
   "95%"
  ]
 },
 {
  "id": "reumatologie-adv-052",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Un pacient cu artrită persistentă a articulațiilor mici ale mâinilor, de 14 săptămâni, ar trebui, potrivit capitolului, trimis urgent la reumatolog deoarece:",
  "options": [
   "Trimiterea se impune dacă sunt afectate articulațiile mici ale mâinilor sau picioarelor, dacă este afectată mai mult de o articulație sau dacă a existat deja o întârziere de mai mult de 3 luni de la debut",
   "Trimiterea se amână până la eroziuni radiografice, independent de durata simptomelor",
   "Doar monoartrita de șold, sub 2 săptămâni, justifică urgența",
   "Terapia precoce în primele 3 luni reduce șansa remisiunii, deci se așteaptă forma constituită",
   "Taperingul este imposibil dacă remisiunea a fost indusă precoce"
  ],
  "correct": [
   0
  ],
  "explanation": "Trimiterea se impune dacă sunt afectate articulațiile mici ale mâinilor sau picioarelor, dacă este afectată mai mult de o articulație sau dacă a existat deja o întârziere de mai mult de 3 luni de la debut — Corect: Cele trei condiții de trimitere sunt enumerate explicit; terapia în primele 3 luni crește șansa remisiunii susținute cu tapering ulterior.\n\nTrimiterea se amână până la eroziuni radiografice, independent de durata simptomelor — Incorect: Așteptarea eroziunilor contrazice urgența descrisă.\n\nDoar monoartrita de șold, sub 2 săptămâni, justifică urgența — Incorect: Monoartrita scurtă de șold nu este criteriul de trimitere al paragrafului.\n\nTerapia precoce în primele 3 luni reduce șansa remisiunii, deci se așteaptă forma constituită — Incorect: Textul spune că terapia precoce face remisiunea mai probabilă, nu mai puțin.\n\nTaperingul este imposibil dacă remisiunea a fost indusă precoce — Incorect: Taperingul este tocmai obiectivul după remisiune indusă precoce.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 443, Diagnostic și investigații — Trimiterea urgentă (pagini PDF: 73).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    443
   ],
   "pdfPages": [
    73
   ],
   "section": "Diagnostic și investigații — Trimiterea urgentă"
  },
  "learningObjective": "Reținerea celor trei praguri de trimitere (mâini/picioare, >1 articulație, >3 luni) și a ferestrei de 3 luni pentru remisiune.",
  "optionRationales": [
   "Cele trei condiții de trimitere sunt enumerate explicit; terapia în primele 3 luni crește șansa remisiunii susținute cu tapering ulterior.",
   "Așteptarea eroziunilor contrazice urgența descrisă.",
   "Monoartrita scurtă de șold nu este criteriul de trimitere al paragrafului.",
   "Textul spune că terapia precoce face remisiunea mai probabilă, nu mai puțin.",
   "Taperingul este tocmai obiectivul după remisiune indusă precoce."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vigneta aplică pragul de 3 luni; distractorii amână trimiterea până la eroziuni, inversând fereastra de remisiune."
  },
  "textbookExpressions": [
   "mai mult de 3 luni",
   "primele 3 luni"
  ]
 },
 {
  "id": "reumatologie-adv-053",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "În managementul non-farmacologic și simptomatic al AR sunt adevărate:",
  "options": [
   "Pacienții trebuie ajutați să rămână la locul de muncă, deoarece 30% își pierd locul de muncă în termen de 2 ani de la diagnostic",
   "Cei mai mulți pacienți necesită un AINS pentru durerea nocturnă și redoarea matinală, pe lângă DMARD; dacă efectele digestive sunt pronunțate sau vârsta depășește 65 de ani, se adaugă un inhibitor de pompă de protoni",
   "AINS înlocuiesc DMARD la toți pacienții tineri, IPP fiind inutil după 65 de ani",
   "Pierderea locului de muncă este rară, sub 2% la 10 ani",
   "Paracetamolul este interzis, singurul analgezic permis fiind un opioid de treaptă înaltă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Pacienții trebuie ajutați să rămână la locul de muncă, deoarece 30% își pierd locul de muncă în termen de 2 ani de la diagnostic — Corect: Cifra 30% în 2 ani este explicită.\n\nCei mai mulți pacienți necesită un AINS pentru durerea nocturnă și redoarea matinală, pe lângă DMARD; dacă efectele digestive sunt pronunțate sau vârsta depășește 65 de ani, se adaugă un inhibitor de pompă de protoni — Corect: AINS pentru noapte/redoare și IPP la >65 ani sau GI sunt din paragraful despre AINS.\n\nAINS înlocuiesc DMARD la toți pacienții tineri, IPP fiind inutil după 65 de ani — Incorect: AINS sunt adjuvante, nu înlocuitori de DMARD; IPP se adaugă tocmai după 65 de ani.\n\nPierderea locului de muncă este rară, sub 2% la 10 ani — Incorect: 30% nu este o raritate.\n\nParacetamolul este interzis, singurul analgezic permis fiind un opioid de treaptă înaltă — Incorect: Textul permite un analgezic simplu (paracetamol sau combinație cu codeină/dihidrocodeină).\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 444, Tratamentul AR — Muncă; AINS (pagini PDF: 74).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    444
   ],
   "pdfPages": [
    74
   ],
   "section": "Tratamentul AR — Muncă; AINS"
  },
  "learningObjective": "Reținerea cifrei de 30% la 2 ani și a regulii AINS plus IPP după 65 de ani sau la toxicitate digestivă.",
  "optionRationales": [
   "Cifra 30% în 2 ani este explicită.",
   "AINS pentru noapte/redoare și IPP la >65 ani sau GI sunt din paragraful despre AINS.",
   "AINS sunt adjuvante, nu înlocuitori de DMARD; IPP se adaugă tocmai după 65 de ani.",
   "30% nu este o raritate.",
   "Textul permite un analgezic simplu (paracetamol sau combinație cu codeină/dihidrocodeină)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează cifra ocupațională 30%/2 ani și regula IPP după 65 de ani din același capitol de tratament."
  },
  "textbookExpressions": [
   "30%",
   "peste 65 de ani"
  ]
 },
 {
  "id": "reumatologie-adv-054",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Glucocorticoizii în AR, dincolo de startul T2T, se caracterizează prin:",
  "options": [
   "Injecțiile intramusculare de depozit (40-120 mg metilprednisolon) ajută la inducerea remisiunii până acționează csDMARD și la controlul puseelor severe",
   "Osteoporoza se poate dezvolta în 3 luni la doze peste 7,5 mg pe zi; se asociază vitamina D și bifosfonați dacă se anticipează tratament peste 3 luni",
   "Injecțiile intra-articulare cu preparate semicristaline au efect puternic, uneori de scurtă durată",
   "Glucocorticoizii orali pe termen lung sunt de preferat ca monoterapie de fond, fără csDMARD",
   "Osteoporoza glucocorticoidă apare doar după 10 ani, profilaxia fiind inutilă sub 3 luni"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Injecțiile intramusculare de depozit (40-120 mg metilprednisolon) ajută la inducerea remisiunii până acționează csDMARD și la controlul puseelor severe — Corect: Schema IM de depozit este enunțată.\n\nOsteoporoza se poate dezvolta în 3 luni la doze peste 7,5 mg pe zi; se asociază vitamina D și bifosfonați dacă se anticipează tratament peste 3 luni — Corect: Pragurile 3 luni și 7,5 mg/zi plus profilaxia sunt din cadran.\n\nInjecțiile intra-articulare cu preparate semicristaline au efect puternic, uneori de scurtă durată — Corect: Efectul puternic, uneori scurt, al IA este explicit.\n\nGlucocorticoizii orali pe termen lung sunt de preferat ca monoterapie de fond, fără csDMARD — Incorect: Oralele pe termen lung sunt cel mai bine evitate; efectele adverse sunt inevitabile.\n\nOsteoporoza glucocorticoidă apare doar după 10 ani, profilaxia fiind inutilă sub 3 luni — Incorect: Osteoporoza poate apărea în 3 luni, nu după 10 ani.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 444, 445, Glucocorticoizi; Cadranul 18.31 (pagini PDF: 74, 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    444,
    445
   ],
   "pdfPages": [
    74,
    75
   ],
   "section": "Glucocorticoizi; Cadranul 18.31"
  },
  "learningObjective": "Reținerea dozei IM 40-120 mg, a pragului 7,5 mg/zi în 3 luni și a locului injecțiilor IA, distinct de monoterapia orală cronică.",
  "optionRationales": [
   "Schema IM de depozit este enunțată.",
   "Pragurile 3 luni și 7,5 mg/zi plus profilaxia sunt din cadran.",
   "Efectul puternic, uneori scurt, al IA este explicit.",
   "Oralele pe termen lung sunt cel mai bine evitate; efectele adverse sunt inevitabile.",
   "Osteoporoza poate apărea în 3 luni, nu după 10 ani."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă GC orali cronici în fond terapeutic și anulează fereastra de 3 luni/7,5 mg a osteoporozei."
  },
  "textbookExpressions": [
   "40-120 mg",
   "7,5 mg"
  ]
 },
 {
  "id": "reumatologie-adv-055",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Leflunomida, ca csDMARD, se caracterizează prin:",
  "options": [
   "Blochează dihidro-orotat-dehidrogenaza, împiedicând expansiunea clonală a limfocitelor T; timpul de înjumătățire este lung, 4-28 de zile",
   "Doza este 20 mg pe zi (10 mg dacă diareea este o problemă); debutul acțiunii este după 4 săptămâni, cu îmbunătățiri suplimentare la 2 ani",
   "Timpul de înjumătățire scurt (2 ore) o face preferată la femeile care planifică sarcina",
   "Nu necesită monitorizare de laborator, spre deosebire de metotrexat",
   "Este inactivă la non-responderii la metotrexat, fiind rezervată spondilitei"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Blochează dihidro-orotat-dehidrogenaza, împiedicând expansiunea clonală a limfocitelor T; timpul de înjumătățire este lung, 4-28 de zile — Corect: Mecanismul și t½ 4-28 de zile sunt din paragraf.\n\nDoza este 20 mg pe zi (10 mg dacă diareea este o problemă); debutul acțiunii este după 4 săptămâni, cu îmbunătățiri suplimentare la 2 ani — Corect: Doza 20 mg (10 mg la diaree) și ferestrele 4 săptămâni/2 ani sunt explicite.\n\nTimpul de înjumătățire scurt (2 ore) o face preferată la femeile care planifică sarcina — Incorect: t½ lung face ca leflunomida să fie evitată la femeile care planifică să procreeze.\n\nNu necesită monitorizare de laborator, spre deosebire de metotrexat — Incorect: Monitorizarea (hemogramă, trombocite, biochimie hepatică) este cerută.\n\nEste inactivă la non-responderii la metotrexat, fiind rezervată spondilitei — Incorect: Textul o descrie ca eficientă la unii non-responderi la metotrexat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 445, Leflunomidă (pagini PDF: 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    445
   ],
   "pdfPages": [
    75
   ],
   "section": "Leflunomidă"
  },
  "learningObjective": "Integrarea mecanismului DHODH cu t½ 4-28 de zile și doza 20/10 mg, plus interdicția la planificarea sarcinii.",
  "optionRationales": [
   "Mecanismul și t½ 4-28 de zile sunt din paragraf.",
   "Doza 20 mg (10 mg la diaree) și ferestrele 4 săptămâni/2 ani sunt explicite.",
   "t½ lung face ca leflunomida să fie evitată la femeile care planifică să procreeze.",
   "Monitorizarea (hemogramă, trombocite, biochimie hepatică) este cerută.",
   "Textul o descrie ca eficientă la unii non-responderi la metotrexat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică un t½ de 2 ore (cinetica DOAC) asupra leflunomidei, al cărei t½ lung interzice concepția."
  },
  "textbookExpressions": [
   "4-28 de zile",
   "20 mg pe zi"
  ]
 },
 {
  "id": "reumatologie-adv-056",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Particularitățile unor blocanți TNF, dincolo de regula „după două csDMARD”, includ:",
  "options": [
   "Etanerceptul este proteină de fuziune p75–IgG1; circa 65% dintre pacienți răspund bine",
   "Certolizumab pegol este fragment Fab pegilat, fără porțiune Fc, cu transfer minim în placentă și lapte matern",
   "Golimumabul se administrează subcutanat o dată pe lună; există biosimilare pentru etanercept, infliximab și adalimumab",
   "Etanerceptul se administrează doar intravenos lunar, fără răspuns clinic descris",
   "Porțiunea Fc a certolizumabului explică pasajul transplacentar masiv, contraindicând orice sarcină monitorizată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Etanerceptul este proteină de fuziune p75–IgG1; circa 65% dintre pacienți răspund bine — Corect: Structura p75 și rata 65% sunt din listă.\n\nCertolizumab pegol este fragment Fab pegilat, fără porțiune Fc, cu transfer minim în placentă și lapte matern — Corect: PEG, lipsa Fc și transferul minim sunt explicite.\n\nGolimumabul se administrează subcutanat o dată pe lună; există biosimilare pentru etanercept, infliximab și adalimumab — Corect: Posologia lunară și biosimilarele ETN/IFX/ADA sunt enunțate.\n\nEtanerceptul se administrează doar intravenos lunar, fără răspuns clinic descris — Incorect: Etanerceptul este s.c., cu ~65% răspuns.\n\nPorțiunea Fc a certolizumabului explică pasajul transplacentar masiv, contraindicând orice sarcină monitorizată — Incorect: Lipsa Fc reduce transferul; textul spune că nu există dovezi convingătoare de efect advers pe sarcină, dar monitorizarea este esențială.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 445, 447, Blocanții TNF-α — Structuri și posologie (pagini PDF: 75, 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    445,
    447
   ],
   "pdfPages": [
    75,
    77
   ],
   "section": "Blocanții TNF-α — Structuri și posologie"
  },
  "learningObjective": "Contrastarea etanercept 65%, a absenței Fc la certolizumab (transfer minim) și a golimumabului lunar, plus biosimilarele.",
  "optionRationales": [
   "Structura p75 și rata 65% sunt din listă.",
   "PEG, lipsa Fc și transferul minim sunt explicite.",
   "Posologia lunară și biosimilarele ETN/IFX/ADA sunt enunțate.",
   "Etanerceptul este s.c., cu ~65% răspuns.",
   "Lipsa Fc reduce transferul; textul spune că nu există dovezi convingătoare de efect advers pe sarcină, dar monitorizarea este esențială."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează calea etanerceptului și atribuie certolizumabului un Fc pe care textul tocmai îl neagă."
  },
  "textbookExpressions": [
   "aproximativ 65%",
   "lipsa porţiunii Fc"
  ]
 },
 {
  "id": "reumatologie-adv-057",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Rituximabul în AR seropozitivă, dincolo de ținta CD20:",
  "options": [
   "Produce îmbunătățire semnificativă timp de 8 luni până la câțiva ani; limfopenia B durează 6-9 luni, recăderea însoțind adesea revenirea limfocitelor B și creșterea PCR",
   "Aproximativ 80% dintre pacienții FR pozitivi răspund, 50-60% cu control persistent; imunoglobulinele trebuie monitorizate la administrări repetate",
   "Răspunsul este nul la seropozitivi, medicamentul fiind rezervat AR seronegative",
   "Limfopenia B este permanentă și interzice orice readministrare",
   "Imunoglobulinele cresc predictibil, monitorizarea fiind superfluă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Produce îmbunătățire semnificativă timp de 8 luni până la câțiva ani; limfopenia B durează 6-9 luni, recăderea însoțind adesea revenirea limfocitelor B și creșterea PCR — Corect: Durata răspunsului și limfopenia 6-9 luni sunt din paragraf.\n\nAproximativ 80% dintre pacienții FR pozitivi răspund, 50-60% cu control persistent; imunoglobulinele trebuie monitorizate la administrări repetate — Corect: 80% răspuns și 50-60% control persistent, plus monitorizarea Ig, sunt explicite.\n\nRăspunsul este nul la seropozitivi, medicamentul fiind rezervat AR seronegative — Incorect: Rituximabul este folosit tocmai în AR seropozitivă.\n\nLimfopenia B este permanentă și interzice orice readministrare — Incorect: Readministrarea la recădere este bine tolerată.\n\nImunoglobulinele cresc predictibil, monitorizarea fiind superfluă — Incorect: Ig pot scădea la administrări repetate, deci se monitorizează.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 447, Alți agenți biologici — Rituximab (pagini PDF: 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    447
   ],
   "pdfPages": [
    77
   ],
   "section": "Alți agenți biologici — Rituximab"
  },
  "learningObjective": "Reținerea ferestrei 8 luni–câțiva ani, a limfopeniei B de 6-9 luni și a ratelor 80% / 50-60% la FR pozitivi.",
  "optionRationales": [
   "Durata răspunsului și limfopenia 6-9 luni sunt din paragraf.",
   "80% răspuns și 50-60% control persistent, plus monitorizarea Ig, sunt explicite.",
   "Rituximabul este folosit tocmai în AR seropozitivă.",
   "Readministrarea la recădere este bine tolerată.",
   "Ig pot scădea la administrări repetate, deci se monitorizează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează indicația (sero+ versus sero−) și transformă limfopenia reversibilă de 6-9 luni într-una permanentă."
  },
  "textbookExpressions": [
   "6-9 luni",
   "80% dintre pacienţii"
  ]
 },
 {
  "id": "reumatologie-adv-058",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Spondilartrita axială și spondilita anchilozantă, în epidemiologie:",
  "options": [
   "AxSpA apare la 1% din populația generală și afectează articulațiile sacroiliace sau articulațiile fibroase și sinoviale ale coloanei, detectabile pe IRM; termenul SA se folosește când există modificări radiografice sacroiliace",
   "Prevalența SA este circa 0,2-0,5% în Europa de Nord și circa 0,5% în SUA, la adulți tineri, cu raport bărbați:femei 3:1; femeile prezintă boala mai târziu și sunt subdiagnosticate",
   "La albi cu SA, 95% au HLA-B27, față de 8% în majoritatea populațiilor albe; concordanța la gemeni monozigoți B27 ajunge până la 70%, versus 20-25% la dizigoți",
   "Frecvența AxSpA este paralelă cu incidența HLA-B27 (scăzută în Africa și Japonia, ridicată la indienii Haida)",
   "SA este o boală a femeii vârstnice, cu raport femei:bărbați 9:1, independentă de HLA-B27"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "AxSpA apare la 1% din populația generală și afectează articulațiile sacroiliace sau articulațiile fibroase și sinoviale ale coloanei, detectabile pe IRM; termenul SA se folosește când există modificări radiografice sacroiliace — Corect: Definiția AxSpA 1% și distincția radiografică SA sunt din paragraf.\n\nPrevalența SA este circa 0,2-0,5% în Europa de Nord și circa 0,5% în SUA, la adulți tineri, cu raport bărbați:femei 3:1; femeile prezintă boala mai târziu și sunt subdiagnosticate — Corect: Cifrele europene/SUA și raportul 3:1 sunt explicite.\n\nLa albi cu SA, 95% au HLA-B27, față de 8% în majoritatea populațiilor albe; concordanța la gemeni monozigoți B27 ajunge până la 70%, versus 20-25% la dizigoți — Corect: 95% versus 8% și 70% versus 20-25% sunt din etiologia genetică.\n\nFrecvența AxSpA este paralelă cu incidența HLA-B27 (scăzută în Africa și Japonia, ridicată la indienii Haida) — Corect: Paralela populațională Africa/Japonia versus Haida este enunțată.\n\nSA este o boală a femeii vârstnice, cu raport femei:bărbați 9:1, independentă de HLA-B27 — Incorect: Raportul 3:1 este masculin, nu feminin 9:1 (cifră de LES).\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 448, Spondilartrita axială — Epidemiologie; Etiologie (pagini PDF: 78).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    448
   ],
   "pdfPages": [
    78
   ],
   "section": "Spondilartrita axială — Epidemiologie; Etiologie"
  },
  "learningObjective": "Integrarea prevalențelor 1% / 0,2-0,5%, a raportului 3:1 și a HLA-B27 95% versus 8%, plus concordanța gemenilor.",
  "optionRationales": [
   "Definiția AxSpA 1% și distincția radiografică SA sunt din paragraf.",
   "Cifrele europene/SUA și raportul 3:1 sunt explicite.",
   "95% versus 8% și 70% versus 20-25% sunt din etiologia genetică.",
   "Paralela populațională Africa/Japonia versus Haida este enunțată.",
   "Raportul 3:1 este masculin, nu feminin 9:1 (cifră de LES)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru trepte epidemiologice; distractorul aplică sex-ratio-ul LES (9:1 feminin) asupra SA, al cărei raport este 3:1 masculin."
  },
  "textbookExpressions": [
   "1% din populaţia",
   "3:1"
  ]
 },
 {
  "id": "reumatologie-adv-059",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Criteriile lombalgiei inflamatoare și măsurarea rigidității în AxSpA/SA includ:",
  "options": [
   "Cadranul 18.35 cere vârstă de debut sub 45 de ani, debut insidios, ameliorare la efort, lipsa ameliorării la repaus și durere nocturnă cu ameliorare la ridicare; 4 din 5 criterii sugerează SA cu sensibilitate de 80%",
   "Testul Schober marchează pielea la 5 cm sub și 10 cm deasupra interliniei crestelor iliace; o creștere sub 5 cm la flexia anterioară implică rigiditate spinală",
   "Uveita anterioară acută apare la circa 30% dintre pacienții cu AxSpA și poate fi manifestarea de prezentare, fiind urgență (durere, fotofobie, vedere încețoșată)",
   "Ameliorarea la repaus și absența durerii nocturne definesc lombalgia inflamatoare",
   "Schober pozitiv înseamnă o creștere peste 15 cm, specifică artrozei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cadranul 18.35 cere vârstă de debut sub 45 de ani, debut insidios, ameliorare la efort, lipsa ameliorării la repaus și durere nocturnă cu ameliorare la ridicare; 4 din 5 criterii sugerează SA cu sensibilitate de 80% — Corect: Cele cinci criterii și sensibilitatea 80% sunt din cadran.\n\nTestul Schober marchează pielea la 5 cm sub și 10 cm deasupra interliniei crestelor iliace; o creștere sub 5 cm la flexia anterioară implică rigiditate spinală — Corect: Marcajele 5/10 cm și pragul <5 cm sunt procedura descrisă.\n\nUveita anterioară acută apare la circa 30% dintre pacienții cu AxSpA și poate fi manifestarea de prezentare, fiind urgență (durere, fotofobie, vedere încețoșată) — Corect: 30% și caracterul de urgență sunt explicite.\n\nAmeliorarea la repaus și absența durerii nocturne definesc lombalgia inflamatoare — Incorect: Inflamatorul se ameliorează la efort, nu la repaus.\n\nSchober pozitiv înseamnă o creștere peste 15 cm, specifică artrozei — Incorect: Pragul este o creștere <5 cm, nu >15 cm.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 448, Cadranul 18.35 — Lombalgie inflamatoare; Schober; Uveită (pagini PDF: 78).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    448
   ],
   "pdfPages": [
    78
   ],
   "section": "Cadranul 18.35 — Lombalgie inflamatoare; Schober; Uveită"
  },
  "learningObjective": "Aplicarea pragului 4/5 criterii (sensibilitate 80%), a pragului Schober <5 cm și a uveitei de 30%.",
  "optionRationales": [
   "Cele cinci criterii și sensibilitatea 80% sunt din cadran.",
   "Marcajele 5/10 cm și pragul <5 cm sunt procedura descrisă.",
   "30% și caracterul de urgență sunt explicite.",
   "Inflamatorul se ameliorează la efort, nu la repaus.",
   "Pragul este o creștere <5 cm, nu >15 cm."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează ameliorarea efort/repaus și înlocuiesc pragul Schober <5 cm cu o valoare absurd de mare."
  },
  "textbookExpressions": [
   "4 dintre cele 5",
   "testul Schober"
  ]
 },
 {
  "id": "reumatologie-adv-060",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "În tratamentul spondilitei anchilozante, după eșecul AINS, sunt adevărate:",
  "options": [
   "Sulfasalazina poate fi utilă pentru artrita periferică, dar nu și pentru afectarea spinală",
   "Blocanții TNF reduc substanțial simptomele spinale și periferice și îmbunătățesc funcția și calitatea vieții, dar nu s-au găsit dovezi convingătoare de reducere a progresiei radiografice în formele vechi; recăderea la întrerupere poate fi întârziată cu luni, permițând tratament intermitent",
   "Sulfasalazina este csDMARD-ul de elecție al coloanei, anti-TNF fiind inutili pe periferic",
   "Anti-TNF opresc convingător progresia radiografică în boala veche, recăderea la stop fiind inexistentă",
   "Exercițiile se evită, cifoza dorsală fiind preventivă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sulfasalazina poate fi utilă pentru artrita periferică, dar nu și pentru afectarea spinală — Corect: Limita spinală a sulfasalazinei este explicită.\n\nBlocanții TNF reduc substanțial simptomele spinale și periferice și îmbunătățesc funcția și calitatea vieții, dar nu s-au găsit dovezi convingătoare de reducere a progresiei radiografice în formele vechi; recăderea la întrerupere poate fi întârziată cu luni, permițând tratament intermitent — Corect: Beneficiul simptomatic fără dovezi convingătoare pe radiografie și recăderea întârziată sunt din pagina următoare.\n\nSulfasalazina este csDMARD-ul de elecție al coloanei, anti-TNF fiind inutili pe periferic — Incorect: Relația SSZ–coloană versus periferic este inversată.\n\nAnti-TNF opresc convingător progresia radiografică în boala veche, recăderea la stop fiind inexistentă — Incorect: Textul neagă dovezile convingătoare de haltare radiografică în formele vechi.\n\nExercițiile se evită, cifoza dorsală fiind preventivă — Incorect: Cheia managementului este tocmai regimul de exerciții înaintea sindesmofitelor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 449, 450, Spondilita anchilozantă — Tratament (pagini PDF: 79, 80).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    449,
    450
   ],
   "pdfPages": [
    79,
    80
   ],
   "section": "Spondilita anchilozantă — Tratament"
  },
  "learningObjective": "Contrastarea sulfasalazinei (doar periferic) cu anti-TNF (simptom, nu progresie radiografică convingătoare în boala veche).",
  "optionRationales": [
   "Limita spinală a sulfasalazinei este explicită.",
   "Beneficiul simptomatic fără dovezi convingătoare pe radiografie și recăderea întârziată sunt din pagina următoare.",
   "Relația SSZ–coloană versus periferic este inversată.",
   "Textul neagă dovezile convingătoare de haltare radiografică în formele vechi.",
   "Cheia managementului este tocmai regimul de exerciții înaintea sindesmofitelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează indicația sulfasalazinei (periferic versus spinal) și pretind haltare radiografică pe care textul o slăbește."
  },
  "textbookExpressions": [
   "nu şi pentru afectarea spinală",
   "progresiei radiografice"
  ]
 },
 {
  "id": "reumatologie-adv-061",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Atacul de gută, în tabloul clinic și în investigații (dincolo de epidemiologia 2,5%/3,9%):",
  "options": [
   "Atacurile netratate durează aproximativ 7 zile; recuperarea se asociază de obicei cu descuamarea pielii adiacente",
   "În 25% din atacuri este afectată o articulație diferită de MTF1; celulita microcristalină face distincția de celulita infecțioasă dificilă",
   "Acidul uric seric este de obicei crescut (>600 µmol/L); dacă nu, se recontrolează la câteva săptămâni, uricemia scăzând imediat după atac",
   "Atacul durează de regulă 24 de ore și nu recade în următorii 10 ani",
   "Uricemia nu scade după atac, deci un AUS normal în plin puseu infirmă guta"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Atacurile netratate durează aproximativ 7 zile; recuperarea se asociază de obicei cu descuamarea pielii adiacente — Corect: Cele 7 zile și descuamarea sunt din deschiderea paginii.\n\nÎn 25% din atacuri este afectată o articulație diferită de MTF1; celulita microcristalină face distincția de celulita infecțioasă dificilă — Corect: 25% non-MTF1 și mimetismul de celulită sunt explicite.\n\nAcidul uric seric este de obicei crescut (>600 µmol/L); dacă nu, se recontrolează la câteva săptămâni, uricemia scăzând imediat după atac — Corect: Pragul >600 µmol/L și scăderea post-atac sunt din investigații.\n\nAtacul durează de regulă 24 de ore și nu recade în următorii 10 ani — Incorect: Al doilea atac apare probabil în 2 ani, nu după 10 ani fără recădere.\n\nUricemia nu scade după atac, deci un AUS normal în plin puseu infirmă guta — Incorect: Textul cere recontrol tocmai pentru că uricemia scade imediat după atac.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 453, Gută — Atacul acut; Investigații (pagini PDF: 83).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    453
   ],
   "pdfPages": [
    83
   ],
   "section": "Gută — Atacul acut; Investigații"
  },
  "learningObjective": "Reținerea duratei de 7 zile, a proporției 25% non-MTF1 și a capcanei AUS scăzut intra-critic, cu recontrol ulterior.",
  "optionRationales": [
   "Cele 7 zile și descuamarea sunt din deschiderea paginii.",
   "25% non-MTF1 și mimetismul de celulită sunt explicite.",
   "Pragul >600 µmol/L și scăderea post-atac sunt din investigații.",
   "Al doilea atac apare probabil în 2 ani, nu după 10 ani fără recădere.",
   "Textul cere recontrol tocmai pentru că uricemia scade imediat după atac."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii comprimă atacul la 24 de ore și transformă scăderea AUS intra-critică într-un test de excludere."
  },
  "textbookExpressions": [
   "7 zile",
   ">600 pmol/L"
  ]
 },
 {
  "id": "reumatologie-adv-062",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "La un hipertensiv cu gută, losartanul este menționat în capitol deoarece:",
  "options": [
   "Este un antagonist al receptorilor angiotensinei I și este uricozuric, putând reduce riscul de gută la pacienții cu sindrom metabolic",
   "Este un inhibitor de xantin-oxidază, înlocuind alopurinolul ca primă linie",
   "Este un analog non-purinic identic febuxostatului, cu metabolizare doar renală",
   "Nu are efect pe urat, fiind evitat în sindromul metabolic",
   "Înlocuiește pegloticaza intravenoasă în guta tofacee refractară"
  ],
  "correct": [
   0
  ],
  "explanation": "Este un antagonist al receptorilor angiotensinei I și este uricozuric, putând reduce riscul de gută la pacienții cu sindrom metabolic — Corect: Statutul de antagonist AT1 uricozuric și potențialul de a reduce riscul în sindromul metabolic sunt enunțate.\n\nEste un inhibitor de xantin-oxidază, înlocuind alopurinolul ca primă linie — Incorect: Inhibitorii de xantin-oxidază sunt alopurinolul și febuxostatul.\n\nEste un analog non-purinic identic febuxostatului, cu metabolizare doar renală — Incorect: Febuxostatul este analogul non-purinic hepatic; losartanul nu este din această clasă.\n\nNu are efect pe urat, fiind evitat în sindromul metabolic — Incorect: Textul îi atribuie tocmai efect uricozuric.\n\nÎnlocuiește pegloticaza intravenoasă în guta tofacee refractară — Incorect: Pegloticaza este uricază pegilată i.v., rezervată gutei severe refractare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 453, Losartan; Agenți uricozurici (pagini PDF: 83).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    453
   ],
   "pdfPages": [
    83
   ],
   "section": "Losartan; Agenți uricozurici"
  },
  "learningObjective": "Identificarea efectului uricozuric al losartanului la hipertensivul cu gută, distinct de xantin-oxidază și uricază.",
  "optionRationales": [
   "Statutul de antagonist AT1 uricozuric și potențialul de a reduce riscul în sindromul metabolic sunt enunțate.",
   "Inhibitorii de xantin-oxidază sunt alopurinolul și febuxostatul.",
   "Febuxostatul este analogul non-purinic hepatic; losartanul nu este din această clasă.",
   "Textul îi atribuie tocmai efect uricozuric.",
   "Pegloticaza este uricază pegilată i.v., rezervată gutei severe refractare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă losartanul uricozuric cu xantin-oxidaza sau cu uricaza pegilată din aceleași paragrafe de tratament."
  },
  "textbookExpressions": [
   "Losartanul",
   "uricozuric"
  ]
 },
 {
  "id": "reumatologie-adv-063",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Tabloul clinic al LES, în datele de frecvență din figura și textul paginii 458:",
  "options": [
   "Afectarea articulară este cea mai frecventă manifestare clinică (>90%); articulațiile sunt dureroase dar au aspect clinic adesea normal; rar apare artropatia Jaccoud",
   "Mialgia este prezentă la circa 50%, dar miozita adevărată la mai puțin de 5%; tegumentul este afectat în 85%, cu eritem în fluture și fotosensibilitate la 40-50% (mai ales anti-Ro)",
   "Afectarea pulmonară apare la până la 50% (pleurezii/revărsate adesea bilaterale); inima în 25%; nefrita clinică doar în 30%, deși histologia postmortem este foarte frecventă",
   "Sistemul nervos este interesat în până la 60%; sindromul Sjögren secundar în 15%",
   "Eroziunile osoase sunt regula, identic AR, iar miozita adevărată depășește 50%"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Afectarea articulară este cea mai frecventă manifestare clinică (>90%); articulațiile sunt dureroase dar au aspect clinic adesea normal; rar apare artropatia Jaccoud — Corect: >90% articular, aspectul clinic normal și Jaccoud sunt din paragraf.\n\nMialgia este prezentă la circa 50%, dar miozita adevărată la mai puțin de 5%; tegumentul este afectat în 85%, cu eritem în fluture și fotosensibilitate la 40-50% (mai ales anti-Ro) — Corect: Mialgie 50% versus miozită <5%, tegument 85% și fotosensibilitate 40-50% sunt explicite.\n\nAfectarea pulmonară apare la până la 50% (pleurezii/revărsate adesea bilaterale); inima în 25%; nefrita clinică doar în 30%, deși histologia postmortem este foarte frecventă — Corect: Pulmonar 50%, cord 25% și nefrită clinică 30% versus histologie frecventă completează spectrul.\n\nSistemul nervos este interesat în până la 60%; sindromul Sjögren secundar în 15% — Corect: 60% neurologic și 15% Sjögren secundar sunt din închidere.\n\nEroziunile osoase sunt regula, identic AR, iar miozita adevărată depășește 50% — Incorect: Eroziunile sunt rare; miozita adevărată este <5%, nu >50%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 458, LES — Tablou clinic; Fig. 18.36 (pagini PDF: 86).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    458
   ],
   "pdfPages": [
    86
   ],
   "section": "LES — Tablou clinic; Fig. 18.36"
  },
  "learningObjective": "Integrarea frecvențelor 90%/50%/<5%/85%/50%/25%/30%/60%/15% și a artropatiei Jaccoud non-erozive.",
  "optionRationales": [
   ">90% articular, aspectul clinic normal și Jaccoud sunt din paragraf.",
   "Mialgie 50% versus miozită <5%, tegument 85% și fotosensibilitate 40-50% sunt explicite.",
   "Pulmonar 50%, cord 25% și nefrită clinică 30% versus histologie frecventă completează spectrul.",
   "60% neurologic și 15% Sjögren secundar sunt din închidere.",
   "Eroziunile sunt rare; miozita adevărată este <5%, nu >50%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru clustere de prevalență; distractorul atribuie LES eroziunile AR și umflă miozita de la <5% la >50%."
  },
  "textbookExpressions": [
   ">90%",
   "artropatia Jaccoud"
  ]
 },
 {
  "id": "reumatologie-adv-064",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la epidemiologia artritei reumatoide:",
  "options": [
   "Afectează 0,5-1% din populație, cu preponderență feminină de 3:1; prevalența este scăzută la negrii din Africa și la chinezi, iar vârsta de debut cea mai frecventă este între 30 și 50 de ani",
   "Prevalența este 10-15%, identică artrozei, cu raport bărbați:femei 5:1",
   "Boala lipsește după 50 de ani și este limitată la copilăria timpurie",
   "Pe lista globală a cauzelor de handicap, AR se plasează deasupra malariei, fără preponderență de sex",
   "Incidența este în creștere, cu prevalență maximă la negrii din Africa"
  ],
  "correct": [
   0
  ],
  "explanation": "Afectează 0,5-1% din populație, cu preponderență feminină de 3:1; prevalența este scăzută la negrii din Africa și la chinezi, iar vârsta de debut cea mai frecventă este între 30 și 50 de ani — Corect: Cifrele 0,5-1%, 3:1, vârful 30-50 de ani și prevalența scăzută la negrii din Africa și chinezi sunt din paragraf.\n\nPrevalența este 10-15%, identică artrozei, cu raport bărbați:femei 5:1 — Incorect: 10-15% și 5:1 țin de alte artropatii din capitol, nu de AR.\n\nBoala lipsește după 50 de ani și este limitată la copilăria timpurie — Incorect: Poate apărea din copilăria timpurie până la vârste înaintate.\n\nPe lista globală a cauzelor de handicap, AR se plasează deasupra malariei, fără preponderență de sex — Incorect: AR este pe locul 42, chiar sub malarie, cu preponderență feminină.\n\nIncidența este în creștere, cu prevalență maximă la negrii din Africa — Incorect: Textul notează o scădere a incidenței și prevalență scăzută, nu maximă, la negrii din Africa.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 437, Artrita reumatoidă — Epidemiologie (pagini PDF: 67).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    437
   ],
   "pdfPages": [
    67
   ],
   "section": "Artrita reumatoidă — Epidemiologie"
  },
  "learningObjective": "Reținerea prevalenței 0,5-1%, a raportului 3:1 și a vârfului 30-50 de ani, cu prevalență scăzută africană/chineză.",
  "optionRationales": [
   "Cifrele 0,5-1%, 3:1, vârful 30-50 de ani și prevalența scăzută la negrii din Africa și chinezi sunt din paragraf.",
   "10-15% și 5:1 țin de alte artropatii din capitol, nu de AR.",
   "Poate apărea din copilăria timpurie până la vârste înaintate.",
   "AR este pe locul 42, chiar sub malarie, cu preponderență feminină.",
   "Textul notează o scădere a incidenței și prevalență scăzută, nu maximă, la negrii din Africa."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reciclează procente din gută/psoriazis și inversează locul 42 sub malarie."
  },
  "textbookExpressions": [
   "0,5-1%",
   "preponderenţă feminină de 3:1"
  ]
 },
 {
  "id": "reumatologie-adv-065",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Următoarele afirmații despre factorii genetici din AR sunt adevărate:",
  "options": [
   "Există concordanță ridicată între gemenii monozigoți, de până la 15%, și peste 100 de locusuri asociate cu riscul și progresia",
   "HLA-DR4 apare la 50-75% dintre pacienți și se corelează cu un prognostic slab, la fel ca alelele HLA-DRB1*04",
   "Un GWAS în AR ACPA-pozitivă a asociat locusuri lângă HLA-DRB1 și PTPN22 la persoanele de origine europeană; PADI4 este printre țintele ACPA",
   "Markerul principal este HLA-B27, prezent la 95% dintre bolnavii cu AR",
   "Concordanța la gemenii monozigoți atinge 70%, ca în spondilita anchilozantă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Există concordanță ridicată între gemenii monozigoți, de până la 15%, și peste 100 de locusuri asociate cu riscul și progresia — Corect: Concordanța de până la 15% și cele peste 100 de locusuri sunt enunțate.\n\nHLA-DR4 apare la 50-75% dintre pacienți și se corelează cu un prognostic slab, la fel ca alelele HLA-DRB1*04 — Corect: HLA-DR4 50-75% cu prognostic slab și DRB1*04 sunt explicite.\n\nUn GWAS în AR ACPA-pozitivă a asociat locusuri lângă HLA-DRB1 și PTPN22 la persoanele de origine europeană; PADI4 este printre țintele ACPA — Corect: GWAS-ul european HLA-DRB1/PTPN22 și PADI4 ca țintă ACPA completează etiologia.\n\nMarkerul principal este HLA-B27, prezent la 95% dintre bolnavii cu AR — Incorect: HLA-B27 este markerul SpA, nu al AR.\n\nConcordanța la gemenii monozigoți atinge 70%, ca în spondilita anchilozantă — Incorect: 70% este concordanța monozigoților B27 din SA, nu din AR.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 437, Artrita reumatoidă — Factorii genetici (pagini PDF: 67).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    437
   ],
   "pdfPages": [
    67
   ],
   "section": "Artrita reumatoidă — Factorii genetici"
  },
  "learningObjective": "Contrastarea pachetului HLA-DR4 50-75% / gemeni 15% / PTPN22 cu markerii de SpA (B27, 70%).",
  "optionRationales": [
   "Concordanța de până la 15% și cele peste 100 de locusuri sunt enunțate.",
   "HLA-DR4 50-75% cu prognostic slab și DRB1*04 sunt explicite.",
   "GWAS-ul european HLA-DRB1/PTPN22 și PADI4 ca țintă ACPA completează etiologia.",
   "HLA-B27 este markerul SpA, nu al AR.",
   "70% este concordanța monozigoților B27 din SA, nu din AR."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută HLA-B27 și concordanța de 70% din spondilită asupra AR, al cărei pachet este DR4 și 15%."
  },
  "textbookExpressions": [
   "HLA-DR4",
   "PTPN22"
  ]
 },
 {
  "id": "reumatologie-adv-066",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la factorii de mediu care predispun la AR ACPA-pozitivă:",
  "options": [
   "Fumatul și alte forme de stres bronșic cresc riscul de AR în prezența HLA-DR4 și acționează sinergic cu HLA-DRB1 pentru a crește riscul de ACPA",
   "Modificările microbiomului (cavitate bucală, tract respirator, intestin), inclusiv asocierea bolii parodontale, pot facilita imunitatea care predispune la AR",
   "Fumatul este protector față de ACPA la purtătorii de HLA-DR4",
   "Microbiomul este irelevant, citrulinarea ținând doar de traumatismul articular",
   "Boala parodontală scade riscul de AR prin consumul local de autoantigene"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Fumatul și alte forme de stres bronșic cresc riscul de AR în prezența HLA-DR4 și acționează sinergic cu HLA-DRB1 pentru a crește riscul de ACPA — Corect: Sinergia fumat/stres bronșic cu HLA-DR4/DRB1 pentru ACPA este fraza-cheie.\n\nModificările microbiomului (cavitate bucală, tract respirator, intestin), inclusiv asocierea bolii parodontale, pot facilita imunitatea care predispune la AR — Corect: Microbiomul mucoselor și boala parodontală sunt listate ca facilitatori.\n\nFumatul este protector față de ACPA la purtătorii de HLA-DR4 — Incorect: Fumatul crește, nu scade, riscul de ACPA.\n\nMicrobiomul este irelevant, citrulinarea ținând doar de traumatismul articular — Incorect: Textul leagă microbiomul de imunitatea înnăscută și adaptativă.\n\nBoala parodontală scade riscul de AR prin consumul local de autoantigene — Incorect: Asocierea parodontală este de predispoziție, nu de protecție.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 437, 438, Artrita reumatoidă — Factorii de mediu (pagini PDF: 67, 68).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    437,
    438
   ],
   "pdfPages": [
    67,
    68
   ],
   "section": "Artrita reumatoidă — Factorii de mediu"
  },
  "learningObjective": "Legarea sinergiei fumat–HLA-DRB1 pentru ACPA de microbiomul mucoselor și de parodontită.",
  "optionRationales": [
   "Sinergia fumat/stres bronșic cu HLA-DR4/DRB1 pentru ACPA este fraza-cheie.",
   "Microbiomul mucoselor și boala parodontală sunt listate ca facilitatori.",
   "Fumatul crește, nu scade, riscul de ACPA.",
   "Textul leagă microbiomul de imunitatea înnăscută și adaptativă.",
   "Asocierea parodontală este de predispoziție, nu de protecție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează sinergia fumat–HLA și transformă parodontita din factor de risc în protecție."
  },
  "textbookExpressions": [
   "HLA-DR4",
   "bolii parodontale"
  ]
 },
 {
  "id": "reumatologie-adv-067",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Conform Cadranului 18.27, diagnosticul diferențial al AR precoce include:",
  "options": [
   "Artrite postvirale: rubeolă, hepatită B sau eritrovirus",
   "Spondilartrita și polimialgia reumatică",
   "Acutizarea artrozei nodulare, cu afectarea IFP și IFD",
   "Guta tofacee a MTF1 la bărbatul tânăr, ca primă linie de DD",
   "Amiloidoza AL, fără artrită virală sau spondilartrită"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Artrite postvirale: rubeolă, hepatită B sau eritrovirus — Corect: Cele trei etiologii virale sunt din cadran.\n\nSpondilartrita și polimialgia reumatică — Corect: SpA și PMR figurează explicit.\n\nAcutizarea artrozei nodulare, cu afectarea IFP și IFD — Corect: Acutizarea artrozei nodulare cu IFP și IFD completează lista.\n\nGuta tofacee a MTF1 la bărbatul tânăr, ca primă linie de DD — Incorect: Guta tofacee nu este în Cadranul 18.27.\n\nAmiloidoza AL, fără artrită virală sau spondilartrită — Incorect: Amiloidoza AL este o complicație/mimetism ulterior, nu itemul de DD precoce.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 440, Cadranul 18.27 — Diagnosticul diferențial al AR precoce (pagini PDF: 70).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    440
   ],
   "pdfPages": [
    70
   ],
   "section": "Cadranul 18.27 — Diagnosticul diferențial al AR precoce"
  },
  "learningObjective": "Reținerea listei virale (rubeolă/VHB/eritrovirus), SpA/PMR și a artrozei nodulare IFP-IFD.",
  "optionRationales": [
   "Cele trei etiologii virale sunt din cadran.",
   "SpA și PMR figurează explicit.",
   "Acutizarea artrozei nodulare cu IFP și IFD completează lista.",
   "Guta tofacee nu este în Cadranul 18.27.",
   "Amiloidoza AL este o complicație/mimetism ulterior, nu itemul de DD precoce."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reciclează guta și amiloidoza AL din paginile vecine în locul cadranului de DD precoce."
  },
  "textbookExpressions": [
   "eritrovirus",
   "artrozei nodulare"
  ]
 },
 {
  "id": "reumatologie-adv-068",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "La o femeie cu poliartrită seronegativă, predominant carpiană, puțin simetrică, capitolul descrie acest tipar ca:",
  "options": [
   "AR seronegativă, care afectează inițial carpul mai des decât degetele, are un model mai puțin simetric, prognostic mai bun pe termen lung, dar poate fi confundată cu artropatia psoriazică",
   "AR seropozitivă rapid progresivă, cu FR și ACPA pozitivi din start",
   "Reumatism palindromic, cu episoade de 24-48 de ore și remisiune completă între atacuri",
   "Spondilartrită axială, carpul fiind sediul sacroiliitei",
   "Gută cronica tofacee, seronegativitatea infirmând AR"
  ],
  "correct": [
   0
  ],
  "explanation": "AR seronegativă, care afectează inițial carpul mai des decât degetele, are un model mai puțin simetric, prognostic mai bun pe termen lung, dar poate fi confundată cu artropatia psoriazică — Corect: Distribuția, simetria redusă, prognosticul mai bun și confuzia cu APs sunt fraza de deschidere.\n\nAR seropozitivă rapid progresivă, cu FR și ACPA pozitivi din start — Incorect: Forma rapid progresivă este de obicei FR/ACPA pozitivă.\n\nReumatism palindromic, cu episoade de 24-48 de ore și remisiune completă între atacuri — Incorect: Palindromicul este monoartrită de ore, nu poliartrită carpiană persistentă.\n\nSpondilartrită axială, carpul fiind sediul sacroiliitei — Incorect: Sacroiliita nu se situează la carp.\n\nGută cronica tofacee, seronegativitatea infirmând AR — Incorect: Seronegativitatea nu infirmă AR; textul o descrie ca formă de AR.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 441, AR seronegativă — Distribuție și prognostic (pagini PDF: 71).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    441
   ],
   "pdfPages": [
    71
   ],
   "section": "AR seronegativă — Distribuție și prognostic"
  },
  "learningObjective": "Recunoașterea tiparului carp > degete, mai puțin simetric, cu prognostic mai bun și confuzie cu APs.",
  "optionRationales": [
   "Distribuția, simetria redusă, prognosticul mai bun și confuzia cu APs sunt fraza de deschidere.",
   "Forma rapid progresivă este de obicei FR/ACPA pozitivă.",
   "Palindromicul este monoartrită de ore, nu poliartrită carpiană persistentă.",
   "Sacroiliita nu se situează la carp.",
   "Seronegativitatea nu infirmă AR; textul o descrie ca formă de AR."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vigneta cere tiparul seronegativ carpian, nu palindromicul de 24-48 de ore sau forma rapid progresivă seropozitivă din același cadran."
  },
  "textbookExpressions": [
   "AR seronegativă",
   "mai puţin simetric"
  ]
 },
 {
  "id": "reumatologie-adv-069",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Afectarea coatelor și a altor articulații sinoviale în AR constituită se caracterizează prin:",
  "options": [
   "Sinovita coatelor produce tumefiere și deformare dureroasă în flexie fixă; pierderea extensiei poate îngreuna sever hrănirea, mai ales dacă se asociază deformări de umăr, carp și degete",
   "Pot fi afectate articulația temporo-mandibulară, acromio-claviculară, sterno-claviculară, crico-aritenoidă și orice altă articulație sinovială",
   "Cotul rămâne cruțat până în stadiul terminal, flexia fixă fiind o leziune de șold",
   "Articulația crico-aritenoidă este exclusă, fiind cartilaginoasă fără sinovială",
   "Hrănirea este ușurată de flexia fixă de cot, care compensează umărul rigid"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sinovita coatelor produce tumefiere și deformare dureroasă în flexie fixă; pierderea extensiei poate îngreuna sever hrănirea, mai ales dacă se asociază deformări de umăr, carp și degete — Corect: Deformarea în flexie fixă și impactul pe hrănire sunt din paragraf.\n\nPot fi afectate articulația temporo-mandibulară, acromio-claviculară, sterno-claviculară, crico-aritenoidă și orice altă articulație sinovială — Corect: Lista TMJ, acromio-claviculară, sterno-claviculară și crico-aritenoidă este explicită.\n\nCotul rămâne cruțat până în stadiul terminal, flexia fixă fiind o leziune de șold — Incorect: Cotul este afectat frecvent, nu cruțat.\n\nArticulația crico-aritenoidă este exclusă, fiind cartilaginoasă fără sinovială — Incorect: Textul include crico-aritenoida printre articulațiile sinoviale.\n\nHrănirea este ușurată de flexia fixă de cot, care compensează umărul rigid — Incorect: Flexia fixă îngreunează, nu ușurează, hrănirea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 441, 442, Afectarea articulară — Coatele; Alte articulații (pagini PDF: 71, 72).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    441,
    442
   ],
   "pdfPages": [
    71,
    72
   ],
   "section": "Afectarea articulară — Coatele; Alte articulații"
  },
  "learningObjective": "Legarea flexiei fixe de cot de dificultatea de hrănire și de lista TMJ/AC/SC/crico-aritenoid.",
  "optionRationales": [
   "Deformarea în flexie fixă și impactul pe hrănire sunt din paragraf.",
   "Lista TMJ, acromio-claviculară, sterno-claviculară și crico-aritenoidă este explicită.",
   "Cotul este afectat frecvent, nu cruțat.",
   "Textul include crico-aritenoida printre articulațiile sinoviale.",
   "Flexia fixă îngreunează, nu ușurează, hrănirea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută flexia fixă pe șold (protrusio) și scot crico-aritenoida din lista de articulații sinoviale."
  },
  "textbookExpressions": [
   "flexie fixă",
   "crico-aritenoidă"
  ]
 },
 {
  "id": "reumatologie-adv-070",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Afectarea pulmonară din AR, dincolo de sindromul Caplan deja consacrat, include:",
  "options": [
   "Afectarea căilor aeriene, de la bronșiectazie (tuse și spută) până la bronșiolită obliterantă (dispnee progresivă)",
   "Afectare pleurală (pleurezie, îngroșare) și boală interstițială cu inflamație și fibroză pulmonară bazală",
   "Leziuni infecțioase, de exemplu tuberculoză la pacienții cu DMARD biologice",
   "Bronșiolita obliterantă este infirmată, AR cruțând căile aeriene mici",
   "Tuberculoza este prevenită de bDMARD, screeningul IGRA fiind superfluu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Afectarea căilor aeriene, de la bronșiectazie (tuse și spută) până la bronșiolită obliterantă (dispnee progresivă) — Corect: Polul bronșiectazie–bronșiolită obliterantă este enumerat.\n\nAfectare pleurală (pleurezie, îngroșare) și boală interstițială cu inflamație și fibroză pulmonară bazală — Corect: Pleura și fibroza bazală completează lista.\n\nLeziuni infecțioase, de exemplu tuberculoză la pacienții cu DMARD biologice — Corect: TB la biologice este avertismentul infecțios.\n\nBronșiolita obliterantă este infirmată, AR cruțând căile aeriene mici — Incorect: Bronșiolita obliterantă este inclusă, nu infirmată.\n\nTuberculoza este prevenită de bDMARD, screeningul IGRA fiind superfluu — Incorect: bDMARD cresc riscul de TB, nu îl previn.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 443, Manifestări extra-articulare — Plămâni (pagini PDF: 73).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    443
   ],
   "pdfPages": [
    73
   ],
   "section": "Manifestări extra-articulare — Plămâni"
  },
  "learningObjective": "Recunoașterea spectrului căi aeriene–pleură–interstițiu și a TB de bDMARD, distinct de nodulii Caplan.",
  "optionRationales": [
   "Polul bronșiectazie–bronșiolită obliterantă este enumerat.",
   "Pleura și fibroza bazală completează lista.",
   "TB la biologice este avertismentul infecțios.",
   "Bronșiolita obliterantă este inclusă, nu infirmată.",
   "bDMARD cresc riscul de TB, nu îl previn."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii neagă bronșiolita obliterantă și inversează riscul de TB al biologicelor din aceeași listă pulmonară."
  },
  "textbookExpressions": [
   "bronşiolită obliterantă",
   "tuberculoză"
  ]
 },
 {
  "id": "reumatologie-adv-071",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Anemia și celelalte modificări hematologice din AR se caracterizează prin:",
  "options": [
   "Anemia este prezentă aproape constant și este de obicei normocromă și normocitară",
   "Se poate produce un deficit de fier prin pierdere gastrointestinală după AINS sau, rar, anemie hemolitică cu test Coombs pozitiv",
   "Poate exista pancitopenie din hipersplenismul Felty sau ca o complicație a DMARD",
   "Trombocitoza apare în cazurile de boală activă",
   "Trombocitopenia reactivă este regula bolii active, anemia fiind rară și macrocitară"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Anemia este prezentă aproape constant și este de obicei normocromă și normocitară — Corect: Anemia aproape constantă normocromă/normocitară este fraza de deschidere.\n\nSe poate produce un deficit de fier prin pierdere gastrointestinală după AINS sau, rar, anemie hemolitică cu test Coombs pozitiv — Corect: Fierul de AINS și hemoliza Coombs sunt explicite.\n\nPoate exista pancitopenie din hipersplenismul Felty sau ca o complicație a DMARD — Corect: Pancitopenia Felty sau de DMARD este listată.\n\nTrombocitoza apare în cazurile de boală activă — Corect: Trombocitoza din boala activă închide paragraful.\n\nTrombocitopenia reactivă este regula bolii active, anemia fiind rară și macrocitară — Incorect: Textul descrie trombocitoză, nu trombocitopenie, în boala activă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 443, Splina, ganglionii limfatici și sângele (pagini PDF: 73).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    443
   ],
   "pdfPages": [
    73
   ],
   "section": "Splina, ganglionii limfatici și sângele"
  },
  "learningObjective": "Integrarea anemiei normocrome aproape constante cu fierul de AINS, Coombs, pancitopenia Felty/DMARD și trombocitoza de activitate.",
  "optionRationales": [
   "Anemia aproape constantă normocromă/normocitară este fraza de deschidere.",
   "Fierul de AINS și hemoliza Coombs sunt explicite.",
   "Pancitopenia Felty sau de DMARD este listată.",
   "Trombocitoza din boala activă închide paragraful.",
   "Textul descrie trombocitoză, nu trombocitopenie, în boala activă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru modificări reale; distractorul inversează trombocitoza de activitate în trombocitopenie și face anemia rară."
  },
  "textbookExpressions": [
   "normocromă şi normocitară",
   "Trombocitoza"
  ]
 },
 {
  "id": "reumatologie-adv-072",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Precizați enunțul corect privind serologia și ecografia din investigațiile AR:",
  "options": [
   "ACPA pot fi prezenți la începutul bolii și o pot precede cu mulți ani; FR este prezent în circa 75-80% din cazuri, iar ANA în titru scăzut în 30%; ecografia musculoscheletală evidențiază sinovita persistentă când se decide inițierea sau eficacitatea DMARD",
   "ANA în titru înalt este prezent la 90%, ACPA apărând doar după eroziuni",
   "FR lipsește în 75-80% din cazuri, fiind inutil în prognostic",
   "Ecografia este inferioară radiografiei pentru sinovita precoce și nu ghidează DMARD",
   "ACPA apar doar după eroziunile radiografice, fiind un marker tardiv de leziune"
  ],
  "correct": [
   0
  ],
  "explanation": "ACPA pot fi prezenți la începutul bolii și o pot precede cu mulți ani; FR este prezent în circa 75-80% din cazuri, iar ANA în titru scăzut în 30%; ecografia musculoscheletală evidențiază sinovita persistentă când se decide inițierea sau eficacitatea DMARD — Corect: Precedența ACPA, FR 75-80%, ANA 30% și ecografia pentru sinovită/DMARD sunt din listă.\n\nANA în titru înalt este prezent la 90%, ACPA apărând doar după eroziuni — Incorect: ANA în titru scăzut este 30%, nu 90% înalt.\n\nFR lipsește în 75-80% din cazuri, fiind inutil în prognostic — Incorect: FR este prezent, nu absent, în 75-80%.\n\nEcografia este inferioară radiografiei pentru sinovita precoce și nu ghidează DMARD — Incorect: Ecografia este descrisă ca foarte eficientă pentru sinovita persistentă.\n\nACPA apar doar după eroziunile radiografice, fiind un marker tardiv de leziune — Incorect: Textul spune că ACPA pot precede boala cu mulți ani.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 443, Diagnostic și investigații — Serologie; Ecografie (pagini PDF: 73).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    443
   ],
   "pdfPages": [
    73
   ],
   "section": "Diagnostic și investigații — Serologie; Ecografie"
  },
  "learningObjective": "Reținerea precedenței de ani a ACPA, a ANA 30% și a rolului ecografiei în decizia de DMARD.",
  "optionRationales": [
   "Precedența ACPA, FR 75-80%, ANA 30% și ecografia pentru sinovită/DMARD sunt din listă.",
   "ANA în titru scăzut este 30%, nu 90% înalt.",
   "FR este prezent, nu absent, în 75-80%.",
   "Ecografia este descrisă ca foarte eficientă pentru sinovita persistentă.",
   "Textul spune că ACPA pot precede boala cu mulți ani."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută 30% ANA cu 90% și transformă ACPA din marker precoce în marker tardiv de eroziune."
  },
  "textbookExpressions": [
   "30% din cazuri",
   "ecografia musculoscheletică"
  ]
 },
 {
  "id": "reumatologie-adv-073",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Începutul efectului csDMARD și combinațiile precoce se caracterizează prin:",
  "options": [
   "Efectul benefic nu este imediat, necesitând 2-3 luni pentru a deveni evident",
   "Ca monoterapie, csDMARD au adesea doar un efect parțial, obținând o îmbunătățire între 20% și 50% conform criteriilor ACR",
   "Pot fi utilizate combinații de până la patru medicamente (glucocorticoizi, sulfasalazină, metotrexat și hidroxiclorochină), numărul fiind redus odată ce s-a obținut remisiunea",
   "Efectul clinic apare în 24 de ore, combinațiile fiind interzise",
   "Monoterapia atinge ACR70 la peste 90% din pacienți în prima săptămână"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Efectul benefic nu este imediat, necesitând 2-3 luni pentru a deveni evident — Corect: Fereastra 2-3 luni este explicită.\n\nCa monoterapie, csDMARD au adesea doar un efect parțial, obținând o îmbunătățire între 20% și 50% conform criteriilor ACR — Corect: Intervalul 20-50% ACR ca monoterapie este din același paragraf.\n\nPot fi utilizate combinații de până la patru medicamente (glucocorticoizi, sulfasalazină, metotrexat și hidroxiclorochină), numărul fiind redus odată ce s-a obținut remisiunea — Corect: Cele patru medicamente și reducerea după remisiune sunt enunțate.\n\nEfectul clinic apare în 24 de ore, combinațiile fiind interzise — Incorect: Efectul nu este imediat.\n\nMonoterapia atinge ACR70 la peste 90% din pacienți în prima săptămână — Incorect: 20-50% nu este ACR70 la 90% în o săptămână.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 445, Medicamente antireumatice — Debut și combinații (pagini PDF: 75).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    445
   ],
   "pdfPages": [
    75
   ],
   "section": "Medicamente antireumatice — Debut și combinații"
  },
  "learningObjective": "Reținerea ferestrei 2-3 luni, a ACR 20-50% în monoterapie și a pachetului de până la patru (GC+SSZ+MTX+HCQ).",
  "optionRationales": [
   "Fereastra 2-3 luni este explicită.",
   "Intervalul 20-50% ACR ca monoterapie este din același paragraf.",
   "Cele patru medicamente și reducerea după remisiune sunt enunțate.",
   "Efectul nu este imediat.",
   "20-50% nu este ACR70 la 90% în o săptămână."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii comprimă debutul la 24 de ore și umflă răspunsul de monoterapie de la 20-50% la ACR70 de 90%."
  },
  "textbookExpressions": [
   "2-3 luni",
   "20% şi 50%"
  ]
 },
 {
  "id": "reumatologie-adv-074",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Conform Cadranului 18.32, schemele de doze ale blocanților TNF includ:",
  "options": [
   "Etanercept: 25 mg subcutanat de două ori pe săptămână sau 50 mg săptămânal",
   "Adalimumab: 40 mg subcutanat la 2 săptămâni",
   "Infliximab: 3-10 mg/kg intravenos la fiecare 4-8 săptămâni, cu metotrexat",
   "Golimumab: 50 mg subcutanat lunar",
   "Etanerceptul se administrează 400 mg intravenos în săptămânile 0, 2 și 4, ca doză de încărcare a certolizumabului"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Etanercept: 25 mg subcutanat de două ori pe săptămână sau 50 mg săptămânal — Corect: Cele două scheme s.c. ale etanerceptului sunt din tabel.\n\nAdalimumab: 40 mg subcutanat la 2 săptămâni — Corect: 40 mg la 2 săptămâni este doza adalimumabului.\n\nInfliximab: 3-10 mg/kg intravenos la fiecare 4-8 săptămâni, cu metotrexat — Corect: 3-10 mg/kg la 4-8 săptămâni este infliximabul.\n\nGolimumab: 50 mg subcutanat lunar — Corect: 50 mg lunar este golimumabul.\n\nEtanerceptul se administrează 400 mg intravenos în săptămânile 0, 2 și 4, ca doză de încărcare a certolizumabului — Incorect: 400 mg în săptămânile 0, 2, 4 este încărcarea certolizumabului, nu a etanerceptului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 446, Cadranul 18.32 — Dozele blocanților TNF-α (pagini PDF: 76).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    446
   ],
   "pdfPages": [
    76
   ],
   "section": "Cadranul 18.32 — Dozele blocanților TNF-α"
  },
  "learningObjective": "Memorarea posologiilor ETN 25×2 sau 50 mg, ADA 40 mg/2 săptămâni, IFX 3-10 mg/kg la 4-8 săptămâni și GOL 50 mg lunar.",
  "optionRationales": [
   "Cele două scheme s.c. ale etanerceptului sunt din tabel.",
   "40 mg la 2 săptămâni este doza adalimumabului.",
   "3-10 mg/kg la 4-8 săptămâni este infliximabul.",
   "50 mg lunar este golimumabul.",
   "400 mg în săptămânile 0, 2, 4 este încărcarea certolizumabului, nu a etanerceptului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru doze reale din același tabel; distractorul atribuie etanerceptului încărcarea i.v. de 400 mg a certolizumabului."
  },
  "textbookExpressions": [
   "25 mg x 2",
   "50 mg"
  ]
 },
 {
  "id": "reumatologie-adv-075",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Dozele tsDMARD și ale altor bDMARD din Cadranul 18.32 sunt corect perecheate în:",
  "options": [
   "Tofacitinib: 5 mg oral de două ori pe zi",
   "Baricitinib: 4 mg oral o dată pe zi la adulți de 18-74 de ani și 2 mg o dată pe zi la adulți ≥75 de ani",
   "Sarilumab: 200 mg subcutanat la 2 săptămâni",
   "Rituximab: 20 mg oral zilnic, identic leflunomidei",
   "Abataceptul se administrează doar 50 mg subcutanat lunar, ca golimumabul"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tofacitinib: 5 mg oral de două ori pe zi — Corect: 5 mg de două ori pe zi este doza tofacitinibului.\n\nBaricitinib: 4 mg oral o dată pe zi la adulți de 18-74 de ani și 2 mg o dată pe zi la adulți ≥75 de ani — Corect: Reducerea de la 4 mg la 2 mg după 75 de ani este explicită.\n\nSarilumab: 200 mg subcutanat la 2 săptămâni — Corect: 200 mg la 2 săptămâni este sarilumab.\n\nRituximab: 20 mg oral zilnic, identic leflunomidei — Incorect: 20 mg zilnic este leflunomida; rituximabul este 500-1000 mg i.v.\n\nAbataceptul se administrează doar 50 mg subcutanat lunar, ca golimumabul — Incorect: Abataceptul este 10 mg/kg i.v. în zilele 1, 15, 30, apoi lunar.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 446, Cadranul 18.32 — Inhibitori JAK și alte bDMARD (pagini PDF: 76).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    446
   ],
   "pdfPages": [
    76
   ],
   "section": "Cadranul 18.32 — Inhibitori JAK și alte bDMARD"
  },
  "learningObjective": "Contrastarea tofacitinib 5 mg ×2, baricitinib 4 versus 2 mg după 75 de ani și sarilumab 200 mg/2 săptămâni.",
  "optionRationales": [
   "5 mg de două ori pe zi este doza tofacitinibului.",
   "Reducerea de la 4 mg la 2 mg după 75 de ani este explicită.",
   "200 mg la 2 săptămâni este sarilumab.",
   "20 mg zilnic este leflunomida; rituximabul este 500-1000 mg i.v.",
   "Abataceptul este 10 mg/kg i.v. în zilele 1, 15, 30, apoi lunar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută doza orală de 20 mg a leflunomidei pe rituximab și schema lunară a golimumabului pe abatacept."
  },
  "textbookExpressions": [
   "5 mg oral",
   "2 mg oral"
  ]
 },
 {
  "id": "reumatologie-adv-076",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Datele de siguranță ale blocanților TNF, dincolo de contraindicația din insuficiența cardiacă severă, includ:",
  "options": [
   "Ratele de infecție sunt crescute în special în primele câteva luni de tratament, dar frecvența scade ulterior",
   "Registrele nu au indicat, în general, un risc crescut de limfom non-Hodgkin la tratații cu anti-TNF, deși există o asociere cunoscută între AR și LNH",
   "Reactivarea tuberculozei este probabil mai puțin frecventă cu etanercept; infecția VHB/VHC cere analiză de risc și monitorizarea transaminazelor",
   "Infecțiile cresc continuu după primul an, LNH fiind cauzat demonstrat de anti-TNF",
   "Etanerceptul reactivează TB mai des decât ceilalți agenți, VHB fiind o indicație de anti-TNF"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ratele de infecție sunt crescute în special în primele câteva luni de tratament, dar frecvența scade ulterior — Corect: Excesul infecțios din primele luni, apoi scăderea, este enunțat.\n\nRegistrele nu au indicat, în general, un risc crescut de limfom non-Hodgkin la tratații cu anti-TNF, deși există o asociere cunoscută între AR și LNH — Corect: Asocierea AR–LNH fără semnal de registru la anti-TNF este explicită.\n\nReactivarea tuberculozei este probabil mai puțin frecventă cu etanercept; infecția VHB/VHC cere analiză de risc și monitorizarea transaminazelor — Corect: TB mai puțin frecventă cu etanercept și monitorizarea VHB/VHC completează siguranța.\n\nInfecțiile cresc continuu după primul an, LNH fiind cauzat demonstrat de anti-TNF — Incorect: Textul spune că frecvența infecțiilor scade ulterior, iar registrele nu indică LNH crescut.\n\nEtanerceptul reactivează TB mai des decât ceilalți agenți, VHB fiind o indicație de anti-TNF — Incorect: Relația etanercept–TB este inversă; VHB cere monitorizare, nu este indicație.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 445, 447, Blocanții TNF-α — Date privind siguranța (pagini PDF: 75, 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    445,
    447
   ],
   "pdfPages": [
    75,
    77
   ],
   "section": "Blocanții TNF-α — Date privind siguranța"
  },
  "learningObjective": "Separarea excesului infecțios din primele luni, a absenței semnalului de LNH din registre și a TB mai rare cu etanercept.",
  "optionRationales": [
   "Excesul infecțios din primele luni, apoi scăderea, este enunțat.",
   "Asocierea AR–LNH fără semnal de registru la anti-TNF este explicită.",
   "TB mai puțin frecventă cu etanercept și monitorizarea VHB/VHC completează siguranța.",
   "Textul spune că frecvența infecțiilor scade ulterior, iar registrele nu indică LNH crescut.",
   "Relația etanercept–TB este inversă; VHB cere monitorizare, nu este indicație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează fereastra infecțioasă și atribuie etanerceptului cel mai mare risc de TB, contrar textului."
  },
  "textbookExpressions": [
   "primele câteva luni",
   "etanercept"
  ]
 },
 {
  "id": "reumatologie-adv-077",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Conform Cadranului 18.33, remisiunea AR în studiile clinice (ACR/EULAR 2011) cere:",
  "options": [
   "Număr de articulații dureroase ≤1 (inclusiv picioarele și gleznele) și număr de articulații tumefiate ≤1 (inclusiv picioare și glezne)",
   "PCR ≤1 mg/L și evaluarea globală a pacientului ≤1 pe o scală analogică vizuală de 10 cm",
   "DAS28 sub 5,1, fără numărarea picioarelor",
   "PCR ≥10 mg/L ca dovadă de activitate stinsă",
   "Gleznele și picioarele sunt excluse din numărare, spre deosebire de DAS28"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Număr de articulații dureroase ≤1 (inclusiv picioarele și gleznele) și număr de articulații tumefiate ≤1 (inclusiv picioare și glezne) — Corect: Cele două numărători ≤1, inclusiv picioarele, sunt din cadran.\n\nPCR ≤1 mg/L și evaluarea globală a pacientului ≤1 pe o scală analogică vizuală de 10 cm — Corect: PCR ≤1 mg/L și PGA ≤1 pe 10 cm completează definiția.\n\nDAS28 sub 5,1, fără numărarea picioarelor — Incorect: DAS28 <5,1 este activitate înaltă, nu această definiție de remisiune.\n\nPCR ≥10 mg/L ca dovadă de activitate stinsă — Incorect: PCR trebuie ≤1, nu ≥10.\n\nGleznele și picioarele sunt excluse din numărare, spre deosebire de DAS28 — Incorect: Picioarele și gleznele sunt incluse, nu excluse.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 447, Cadranul 18.33 — Remisiunea ACR/EULAR 2011 (pagini PDF: 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    447
   ],
   "pdfPages": [
    77
   ],
   "section": "Cadranul 18.33 — Remisiunea ACR/EULAR 2011"
  },
  "learningObjective": "Reținerea pragurilor ≤1 pentru dureroase/tumefiate (cu picioare) și PCR ≤1 mg/L plus PGA ≤1.",
  "optionRationales": [
   "Cele două numărători ≤1, inclusiv picioarele, sunt din cadran.",
   "PCR ≤1 mg/L și PGA ≤1 pe 10 cm completează definiția.",
   "DAS28 <5,1 este activitate înaltă, nu această definiție de remisiune.",
   "PCR trebuie ≤1, nu ≥10.",
   "Picioarele și gleznele sunt incluse, nu excluse."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă remisiunea Booleană ≤1 cu pragul DAS28 de 5,1 și exclud picioarele pe care cadranul tocmai le include."
  },
  "textbookExpressions": [
   "PCR Sl mg/L",
   "scară analogică vizuală"
  ]
 },
 {
  "id": "reumatologie-adv-078",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Prognosticul negativ al AR și locul chirurgiei, după ce T2T a redus nevoia operatorie, includ:",
  "options": [
   "Tablou cu debut insidios mai degrabă decât exploziv, sex feminin, număr crescut de articulații periferice și nivel de invaliditate la debut",
   "Analize cu PCR/VSH ridicat, anemie normocromă normocitară și titruri ridicate de ACPA și FR; eroziuni precoce pe radiografie",
   "Opțiunile chirurgicale includ sinovectomie, refacerea tendoanelor, osteotomie, fuziune, artroplastie de implant MCF, excizia capetelor metatarsiene și artroplastie totală",
   "Debutul exploziv are prognostic mai prost decât cel insidios, chirurgia devenind mai frecventă pe măsură ce DMARD se îmbunătățesc",
   "Eroziunile precoce pe radiografie ameliorează prognosticul, IRM-ul fiind inutil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tablou cu debut insidios mai degrabă decât exploziv, sex feminin, număr crescut de articulații periferice și nivel de invaliditate la debut — Corect: Clusterul clinic insidios/feminin/articulații/invaliditate este din listă.\n\nAnalize cu PCR/VSH ridicat, anemie normocromă normocitară și titruri ridicate de ACPA și FR; eroziuni precoce pe radiografie — Corect: Pachetul inflamator-serologic și eroziunile precoce sunt explicite.\n\nOpțiunile chirurgicale includ sinovectomie, refacerea tendoanelor, osteotomie, fuziune, artroplastie de implant MCF, excizia capetelor metatarsiene și artroplastie totală — Corect: Lista de gesturi chirurgicale este enumerată.\n\nDebutul exploziv are prognostic mai prost decât cel insidios, chirurgia devenind mai frecventă pe măsură ce DMARD se îmbunătățesc — Incorect: Textul atribuie prognosticul negativ debutului insidios, nu exploziv; chirurgia este acum mai puțin frecventă.\n\nEroziunile precoce pe radiografie ameliorează prognosticul, IRM-ul fiind inutil — Incorect: Eroziunile precoce sunt marker negativ; US/IRM pot obiectiva leziunea înaintea radiografiei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 447, Prognostic; Chirurgie (pagini PDF: 77).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    447
   ],
   "pdfPages": [
    77
   ],
   "section": "Prognostic; Chirurgie"
  },
  "learningObjective": "Contrastarea debutului insidios (nu exploziv) ca marker negativ cu lista de gesturi chirurgicale rămase după T2T.",
  "optionRationales": [
   "Clusterul clinic insidios/feminin/articulații/invaliditate este din listă.",
   "Pachetul inflamator-serologic și eroziunile precoce sunt explicite.",
   "Lista de gesturi chirurgicale este enumerată.",
   "Textul atribuie prognosticul negativ debutului insidios, nu exploziv; chirurgia este acum mai puțin frecventă.",
   "Eroziunile precoce sunt marker negativ; US/IRM pot obiectiva leziunea înaintea radiografiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează prognosticul insidios versus exploziv și pretind că chirurgia crește odată cu DMARD, contrar textului."
  },
  "textbookExpressions": [
   "debut insidios",
   "sinovectomie chirurgicală"
  ]
 },
 {
  "id": "reumatologie-adv-079",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "Spondilartrita, față de AR, se caracterizează prin:",
  "options": [
   "Se poate clasifica după manifestarea predominantă: axială (sacroiliace și/sau coloană) sau periferică (artrită, entezită și/sau dactilită), cu posibile suprapuneri; histologic, sinovita este similară AR dar fără FR și ACPA, iar inflamația entezei și anchiloza sunt mai frecvente",
   "Sinovita produce FR și ACPA în titruri diagnostice, entezita fiind rară",
   "Clasificarea exclude dactilita, rezervată AR seropozitive",
   "Forma axială cruță sacroiliacele, interesând doar IFD",
   "Anchiloza articulară este mai rară decât în AR, FR fiind constant pozitiv"
  ],
  "correct": [
   0
  ],
  "explanation": "Se poate clasifica după manifestarea predominantă: axială (sacroiliace și/sau coloană) sau periferică (artrită, entezită și/sau dactilită), cu posibile suprapuneri; histologic, sinovita este similară AR dar fără FR și ACPA, iar inflamația entezei și anchiloza sunt mai frecvente — Corect: Cele două forme, suprapunerile, absența FR/ACPA și predominanța entezei/anchilozei sunt din deschidere.\n\nSinovita produce FR și ACPA în titruri diagnostice, entezita fiind rară — Incorect: SpA nu produce FR/ACPA; entezita este mai frecventă.\n\nClasificarea exclude dactilita, rezervată AR seropozitive — Incorect: Dactilita este inclusă în forma periferică.\n\nForma axială cruță sacroiliacele, interesând doar IFD — Incorect: Forma axială interesează sacroiliacele.\n\nAnchiloza articulară este mai rară decât în AR, FR fiind constant pozitiv — Incorect: Anchiloza este mai frecventă decât în AR.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 448, Spondilartrita — Clasificare axială versus periferică (pagini PDF: 78).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    448
   ],
   "pdfPages": [
    78
   ],
   "section": "Spondilartrita — Clasificare axială versus periferică"
  },
  "learningObjective": "Separarea axului SI/coloană de perifericul artrită–entezită–dactilită și a sinovitei fără FR/ACPA.",
  "optionRationales": [
   "Cele două forme, suprapunerile, absența FR/ACPA și predominanța entezei/anchilozei sunt din deschidere.",
   "SpA nu produce FR/ACPA; entezita este mai frecventă.",
   "Dactilita este inclusă în forma periferică.",
   "Forma axială interesează sacroiliacele.",
   "Anchiloza este mai frecventă decât în AR."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie SpA serologia AR și neagă entezita, exact contrastul paragrafului de deschidere."
  },
  "textbookExpressions": [
   "entezită",
   "fără producere de FR"
  ]
 },
 {
  "id": "reumatologie-adv-080",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Manifestările extra-spinale și evaluarea activității în SA constituită, dincolo de aortita de 1% și conducerea de 5%, includ:",
  "options": [
   "Afectarea respiratorie este rară: rigiditatea peretelui toracic se poate asocia cu boală pulmonară interstițială",
   "Insuficiența renală este raportată la 10-35% dintre pacienții cu SA, cel mai frecvent legată de utilizarea cronică a AINS",
   "Osteoporoza axială apare în aproximativ 25%, cu fractură vertebrală în 10% din cazuri",
   "Activitatea se evaluează prin BASDAI, cu scoruri 1-10 pentru oboseală, durere spinală, artralgie, tumefacție, sensibilitate, entezită și redoare matinală",
   "Insuficiența renală lipsește în SA, AINS-urile fiind renoprotectoare; osteoporoza axială este infirmată"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Afectarea respiratorie este rară: rigiditatea peretelui toracic se poate asocia cu boală pulmonară interstițială — Corect: Asocierea rigiditate toracică–interstițiu este enunțată.\n\nInsuficiența renală este raportată la 10-35% dintre pacienții cu SA, cel mai frecvent legată de utilizarea cronică a AINS — Corect: Intervalul 10-35% legat de AINS este explicit.\n\nOsteoporoza axială apare în aproximativ 25%, cu fractură vertebrală în 10% din cazuri — Corect: 25% osteoporoză și 10% fractură completează extra-spinalul.\n\nActivitatea se evaluează prin BASDAI, cu scoruri 1-10 pentru oboseală, durere spinală, artralgie, tumefacție, sensibilitate, entezită și redoare matinală — Corect: Itemii BASDAI 1-10 sunt listați.\n\nInsuficiența renală lipsește în SA, AINS-urile fiind renoprotectoare; osteoporoza axială este infirmată — Incorect: Textul raportează tocmai insuficiența renală de AINS și osteoporoza axială.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 449, Spondilita anchilozantă — Extra-articular; BASDAI (pagini PDF: 79).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    449
   ],
   "pdfPages": [
    79
   ],
   "section": "Spondilita anchilozantă — Extra-articular; BASDAI"
  },
  "learningObjective": "Integrarea clusterului respirator rar, renal 10-35% (AINS), osteoporoză 25%/fractură 10% și a BASDAI.",
  "optionRationales": [
   "Asocierea rigiditate toracică–interstițiu este enunțată.",
   "Intervalul 10-35% legat de AINS este explicit.",
   "25% osteoporoză și 10% fractură completează extra-spinalul.",
   "Itemii BASDAI 1-10 sunt listați.",
   "Textul raportează tocmai insuficiența renală de AINS și osteoporoza axială."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru cifre extra-spinale; distractorul neagă nefropatia de AINS și osteoporoza de 25% din același paragraf."
  },
  "textbookExpressions": [
   "10-35%",
   "BASDAI"
  ]
 },
 {
  "id": "reumatologie-adv-081",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "În managementul precoce al SA, înaintea sindesmofitelor, se recomandă:",
  "options": [
   "Un regim de exerciții preventive, cu exerciții matinale pentru mobilitate spinală, postură și expansiunea toracelui, adesea sprijinite de AINS regulate",
   "Când durerea și redoarea matinală sunt prea severe pentru exerciții eficiente, un AINS cu acțiune lungă seara sau un supozitor cu AINS îmbunătățesc somnul, controlul durerii și efectuarea exercițiilor",
   "Exercițiile se amână până după formarea sindesmofitelor, AINS-urile fiind evitate seara",
   "Supozitorul cu AINS agravează redoarea matinală și interzice kinetoterapia",
   "Cifoza dorsală ireversibilă previne atrofia paraspinală, deci exercițiile sunt superfluе"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Un regim de exerciții preventive, cu exerciții matinale pentru mobilitate spinală, postură și expansiunea toracelui, adesea sprijinite de AINS regulate — Corect: Diagnosticul precoce și exercițiile înaintea sindesmofitelor, plus AINS regulate, sunt cheia descrisă.\n\nCând durerea și redoarea matinală sunt prea severe pentru exerciții eficiente, un AINS cu acțiune lungă seara sau un supozitor cu AINS îmbunătățesc somnul, controlul durerii și efectuarea exercițiilor — Corect: AINS-ul de seară sau supozitorul pentru a permite exercițiile este explicit.\n\nExercițiile se amână până după formarea sindesmofitelor, AINS-urile fiind evitate seara — Incorect: Eșecul exercițiilor duce la cifoză ireversibilă; nu se amână după sindesmofite.\n\nSupozitorul cu AINS agravează redoarea matinală și interzice kinetoterapia — Incorect: Supozitorul îmbunătățește, nu agravează, controlul nocturn.\n\nCifoza dorsală ireversibilă previne atrofia paraspinală, deci exercițiile sunt superfluе — Incorect: Cifoza și atrofia sunt consecințele eșecului, nu obiective terapeutice.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 449, Spondilita anchilozantă — Exerciții și AINS de seară (pagini PDF: 79).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    449
   ],
   "pdfPages": [
    79
   ],
   "section": "Spondilita anchilozantă — Exerciții și AINS de seară"
  },
  "learningObjective": "Legarea exercițiilor matinale de AINS-ul cu acțiune lungă sau supozitorul de seară, înaintea sindesmofitelor.",
  "optionRationales": [
   "Diagnosticul precoce și exercițiile înaintea sindesmofitelor, plus AINS regulate, sunt cheia descrisă.",
   "AINS-ul de seară sau supozitorul pentru a permite exercițiile este explicit.",
   "Eșecul exercițiilor duce la cifoză ireversibilă; nu se amână după sindesmofite.",
   "Supozitorul îmbunătățește, nu agravează, controlul nocturn.",
   "Cifoza și atrofia sunt consecințele eșecului, nu obiective terapeutice."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii amână exercițiile după sindesmofite și inversează rolul AINS-ului de seară din același paragraf de tratament."
  },
  "textbookExpressions": [
   "exerciţii preventive",
   "supozitor cu AINS"
  ]
 },
 {
  "id": "reumatologie-adv-082",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Microorganismele declanșatoare și mecanismul artritei reactive, dincolo de riscul 1-2% și de HLA-B27, includ:",
  "options": [
   "Tulpinile de Salmonella sau Shigella în dizenteria bacilară și Yersinia enterocolitica (diaree și artrită reactivă)",
   "În uretrita nespecifică la bărbat, Chlamydia trachomatis sau Ureaplasma urealyticum",
   "Antigeni bacterieni sau ADN bacterian au fost identificate în sinoviala inflamată, sugerând material antigenic persistent",
   "Artrita reactivă este produsă doar de streptococ, Chlamydia fiind exclusă",
   "Sinoviala este sterilă și lipsită de orice material antigenic bacterian, mecanismul fiind doar toxic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tulpinile de Salmonella sau Shigella în dizenteria bacilară și Yersinia enterocolitica (diaree și artrită reactivă) — Corect: Salmonella, Shigella și Yersinia sunt enumerate.\n\nÎn uretrita nespecifică la bărbat, Chlamydia trachomatis sau Ureaplasma urealyticum — Corect: Chlamydia și Ureaplasma sunt agenții uretritei nespecifice.\n\nAntigeni bacterieni sau ADN bacterian au fost identificate în sinoviala inflamată, sugerând material antigenic persistent — Corect: Antigenul/ADN-ul din sinovială este argumentul de persistență.\n\nArtrita reactivă este produsă doar de streptococ, Chlamydia fiind exclusă — Incorect: Streptococul este discutat separat (artrită post-streptococică), nu ca unic agent.\n\nSinoviala este sterilă și lipsită de orice material antigenic bacterian, mecanismul fiind doar toxic — Incorect: Textul descrie material antigenic persistent în sinovială.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 450, 451, Artrita reactivă — Etiologie (pagini PDF: 80, 81).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    450,
    451
   ],
   "pdfPages": [
    80,
    81
   ],
   "section": "Artrita reactivă — Etiologie"
  },
  "learningObjective": "Recunoașterea pachetului enterobacterian (Salmonella/Shigella/Yersinia) și urogenital (Chlamydia/Ureaplasma) plus antigenul din sinovială.",
  "optionRationales": [
   "Salmonella, Shigella și Yersinia sunt enumerate.",
   "Chlamydia și Ureaplasma sunt agenții uretritei nespecifice.",
   "Antigenul/ADN-ul din sinovială este argumentul de persistență.",
   "Streptococul este discutat separat (artrită post-streptococică), nu ca unic agent.",
   "Textul descrie material antigenic persistent în sinovială."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reduc etiologia la streptococ și neagă antigenul sinovial, exact evidența de persistență din paragraf."
  },
  "textbookExpressions": [
   "Yersinia enterocolitica",
   "Chlamydia trachomatis"
  ]
 },
 {
  "id": "reumatologie-adv-083",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Parcursul renal și intestinal al uratului, plus transportorii implicați, se caracterizează prin:",
  "options": [
   "Eliminarea uratului se face de către rinichi (66%) și intestin (33%); net, circa 5-10% din cantitatea filtrată glomerular este excretată în urină",
   "Moleculele de reabsorbție includ URAT1/SLC22A12 și GLUT9/SLC2A9; ABCG2 este transportor secretor prezent semnificativ în intestin",
   "GWAS au identificat loci predominanți care codifică SLC2A9 și ABCG2",
   "Cauzele de hiperuricemie prin afectarea excreției includ tiazidele, aspirina în doze mici, hipertensiunea și saturnismul",
   "Uratul se elimină 100% renal, ABCG2 fiind un reabsorbant glomerular, iar tiazidele cresc excreția"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Eliminarea uratului se face de către rinichi (66%) și intestin (33%); net, circa 5-10% din cantitatea filtrată glomerular este excretată în urină — Corect: Proporțiile 66/33 și 5-10% sunt din text și legendă.\n\nMoleculele de reabsorbție includ URAT1/SLC22A12 și GLUT9/SLC2A9; ABCG2 este transportor secretor prezent semnificativ în intestin — Corect: URAT1, GLUT9 și ABCG2 intestinal sunt numite.\n\nGWAS au identificat loci predominanți care codifică SLC2A9 și ABCG2 — Corect: Locii SLC2A9 și ABCG2 sunt primii citați de GWAS.\n\nCauzele de hiperuricemie prin afectarea excreției includ tiazidele, aspirina în doze mici, hipertensiunea și saturnismul — Corect: Tiazidele, aspirina în doze mici, HTA și saturnismul sunt în Cadranul 18.37.\n\nUratul se elimină 100% renal, ABCG2 fiind un reabsorbant glomerular, iar tiazidele cresc excreția — Incorect: Eliminarea este duală; ABCG2 este secretor intestinal, iar tiazidele afectează excreția.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 452, Fig. 18.34; Transportori; Cadranul 18.37 (pagini PDF: 82).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    452
   ],
   "pdfPages": [
    82
   ],
   "section": "Fig. 18.34; Transportori; Cadranul 18.37"
  },
  "learningObjective": "Integrarea bilanțului 66%/33% și 5-10% excretat cu URAT1/GLUT9/ABCG2 și cu lista tiazide–aspirină–saturnism.",
  "optionRationales": [
   "Proporțiile 66/33 și 5-10% sunt din text și legendă.",
   "URAT1, GLUT9 și ABCG2 intestinal sunt numite.",
   "Locii SLC2A9 și ABCG2 sunt primii citați de GWAS.",
   "Tiazidele, aspirina în doze mici, HTA și saturnismul sunt în Cadranul 18.37.",
   "Eliminarea este duală; ABCG2 este secretor intestinal, iar tiazidele afectează excreția."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru fapte de transport; distractorul face uratul 100% renal și inversează ABCG2/tiazidele."
  },
  "textbookExpressions": [
   "66%",
   "ABCG2"
  ]
 },
 {
  "id": "reumatologie-adv-084",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Formarea cristalelor de urat la temperatură mai joasă și faza inter-critică se caracterizează prin:",
  "options": [
   "În articulațiile periferice cu pH și temperatură mai joasă, cristalele pot apărea la 360 µmol/L (35°C) și 300 µmol/L (30°C)",
   "Colchicina inhibă formarea microtubulilor necesari procesului inflamazomal",
   "După un atac, un al doilea atac apare probabil în decurs de 2 ani; modificările dietetice pot reduce AUS cu 15%",
   "Cristalizarea cere AUS peste 800 µmol/L la 40°C, colchicina stimulând microtubulii",
   "Al doilea atac este improbabil timp de 10 ani, dieta neinfluențând AUS"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În articulațiile periferice cu pH și temperatură mai joasă, cristalele pot apărea la 360 µmol/L (35°C) și 300 µmol/L (30°C) — Corect: Perechile 360/35°C și 300/30°C sunt din paragraf.\n\nColchicina inhibă formarea microtubulilor necesari procesului inflamazomal — Corect: Inhibarea microtubulilor de către colchicină este explicită.\n\nDupă un atac, un al doilea atac apare probabil în decurs de 2 ani; modificările dietetice pot reduce AUS cu 15% — Corect: Fereastra de 2 ani și reducerea dietetică de 15% sunt din pagina următoare.\n\nCristalizarea cere AUS peste 800 µmol/L la 40°C, colchicina stimulând microtubulii — Incorect: Pragurile sunt mai joase la temperatură mai mică, nu 800 la 40°C.\n\nAl doilea atac este improbabil timp de 10 ani, dieta neinfluențând AUS — Incorect: Al doilea atac este probabil în 2 ani; dieta poate scădea AUS cu 15%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 452, 453, Gută — Saturatione termică; Colchicină; Recădere (pagini PDF: 82, 83).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    452,
    453
   ],
   "pdfPages": [
    82,
    83
   ],
   "section": "Gută — Saturatione termică; Colchicină; Recădere"
  },
  "learningObjective": "Reținerea pragurilor 360 µmol/L la 35°C și 300 µmol/L la 30°C, a microtubulilor și a ferestrei de 2 ani / 15%.",
  "optionRationales": [
   "Perechile 360/35°C și 300/30°C sunt din paragraf.",
   "Inhibarea microtubulilor de către colchicină este explicită.",
   "Fereastra de 2 ani și reducerea dietetică de 15% sunt din pagina următoare.",
   "Pragurile sunt mai joase la temperatură mai mică, nu 800 la 40°C.",
   "Al doilea atac este probabil în 2 ani; dieta poate scădea AUS cu 15%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii umflă pragul de saturație și inversează fereastra de recădere de 2 ani din același capitol de gută."
  },
  "textbookExpressions": [
   "360",
   "2 ani"
  ]
 },
 {
  "id": "reumatologie-adv-085",
  "topicId": "reumatologie",
  "type": "CS",
  "stem": "În atacul de gută, schema de diclofenac și alternativa de colchicină, distincte de naproxenul 750/500 mg deja consacrat, sunt:",
  "options": [
   "Diclofenac 75-100 mg imediat, apoi 50 mg la 6-8 ore; după 24-48 de ore, doze reduse încă o săptămână; colchicina 500 µg de 2-3 ori pe zi este de obicei suficientă, dozele de încărcare putând produce diaree sau colici",
   "Diclofenac 750 mg imediat, identic naproxenului, colchicina fiind interzisă la afectare renală în favoarea AINS în doze mari",
   "Colchicina se administrează în doză unică de 10 mg, diclofenacul fiind rezervat tofilor",
   "Schema de diclofenac este 10 mg săptămânal, ca metotrexatul",
   "AINS-urile nu au risc renal, deci se preferă dozele de încărcare de colchicină la ulcerul peptic"
  ],
  "correct": [
   0
  ],
  "explanation": "Diclofenac 75-100 mg imediat, apoi 50 mg la 6-8 ore; după 24-48 de ore, doze reduse încă o săptămână; colchicina 500 µg de 2-3 ori pe zi este de obicei suficientă, dozele de încărcare putând produce diaree sau colici — Corect: Dozele de diclofenac, fereastra 24-48 de ore și colchicina 500 µg 2-3/zi fără încărcare sunt din paragraf.\n\nDiclofenac 750 mg imediat, identic naproxenului, colchicina fiind interzisă la afectare renală în favoarea AINS în doze mari — Incorect: 750 mg este naproxenul, nu diclofenacul; la ulcer/rinichi se evită AINS-urile în doze mari.\n\nColchicina se administrează în doză unică de 10 mg, diclofenacul fiind rezervat tofilor — Incorect: 10 mg nu este schema de colchicină.\n\nSchema de diclofenac este 10 mg săptămânal, ca metotrexatul — Incorect: 10 mg săptămânal este o confuzie cu metotrexatul.\n\nAINS-urile nu au risc renal, deci se preferă dozele de încărcare de colchicină la ulcerul peptic — Incorect: AINS pot provoca insuficiență renală; încărcarea de colchicină dă diaree.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 453, Gută — Diclofenac; Colchicină (pagini PDF: 83).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    453
   ],
   "pdfPages": [
    83
   ],
   "section": "Gută — Diclofenac; Colchicină"
  },
  "learningObjective": "Contrastarea diclofenacului 75-100 apoi 50 mg la 6-8 ore cu colchicina 500 µg ×2-3/zi, fără încărcare diareigenă.",
  "optionRationales": [
   "Dozele de diclofenac, fereastra 24-48 de ore și colchicina 500 µg 2-3/zi fără încărcare sunt din paragraf.",
   "750 mg este naproxenul, nu diclofenacul; la ulcer/rinichi se evită AINS-urile în doze mari.",
   "10 mg nu este schema de colchicină.",
   "10 mg săptămânal este o confuzie cu metotrexatul.",
   "AINS pot provoca insuficiență renală; încărcarea de colchicină dă diaree."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută 750 mg de naproxen pe diclofenac și transformă 500 µg ×2-3 într-o încărcare de 10 mg."
  },
  "textbookExpressions": [
   "75-100 mg",
   "500 r1g"
  ]
 },
 {
  "id": "reumatologie-adv-086",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Febuxostatul, pegloticaza și guta tofacee, dincolo de ținta 360/300 µmol/L, se caracterizează prin:",
  "options": [
   "Febuxostatul (80-120 mg/zi) este analog non-purinic al xantin-oxidazei; mortalitatea de toate cauzele și cea cardiovasculară sunt mai mari decât cu alopurinol, care rămâne prima alegere",
   "Pegloticaza, uricază recombinantă pegilată i.v., este rezervată gutei severe refractare și se folosește și pentru prevenirea lizei tumorale la chimioterapie",
   "Tofii produc halo radioopac și chisturi osoase „perforate”; diureticele se schimbă, când este posibil, cu agenți cu mai puțină retenție de urat, cum ar fi bumetanida",
   "Febuxostatul reduce mortalitatea cardiovasculară față de alopurinol și înlocuiește pegloticaza ca uricază orală",
   "Chisturile „perforate” sunt patognomonice pentru PFCD, bumetanida crescând retenția de urat mai mult decât tiazidele"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Febuxostatul (80-120 mg/zi) este analog non-purinic al xantin-oxidazei; mortalitatea de toate cauzele și cea cardiovasculară sunt mai mari decât cu alopurinol, care rămâne prima alegere — Corect: Doza 80-120 mg și mortalitatea mai mare versus alopurinol sunt explicite.\n\nPegloticaza, uricază recombinantă pegilată i.v., este rezervată gutei severe refractare și se folosește și pentru prevenirea lizei tumorale la chimioterapie — Corect: Uricaza pegilată i.v. în gută refractară și în liza tumorală este din pagina următoare.\n\nTofii produc halo radioopac și chisturi osoase „perforate”; diureticele se schimbă, când este posibil, cu agenți cu mai puțină retenție de urat, cum ar fi bumetanida — Corect: Halo-ul, chisturile perforate și bumetanida sunt din paragraful tofaceu.\n\nFebuxostatul reduce mortalitatea cardiovasculară față de alopurinol și înlocuiește pegloticaza ca uricază orală — Incorect: Textul raportează mortalitate CV mai mare, nu mai mică, cu febuxostat.\n\nChisturile „perforate” sunt patognomonice pentru PFCD, bumetanida crescând retenția de urat mai mult decât tiazidele — Incorect: Chisturile perforate sunt ale gutei tofacee; bumetanida reține mai puțin urat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 453, 454, Febuxostat; Pegloticază; Gută tofacee (pagini PDF: 83, 84).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    453,
    454
   ],
   "pdfPages": [
    83,
    84
   ],
   "section": "Febuxostat; Pegloticază; Gută tofacee"
  },
  "learningObjective": "Contrastarea semnalului de mortalitate al febuxostatului 80-120 mg cu pegloticaza i.v. și cu chisturile perforate/bumetanida.",
  "optionRationales": [
   "Doza 80-120 mg și mortalitatea mai mare versus alopurinol sunt explicite.",
   "Uricaza pegilată i.v. în gută refractară și în liza tumorală este din pagina următoare.",
   "Halo-ul, chisturile perforate și bumetanida sunt din paragraful tofaceu.",
   "Textul raportează mortalitate CV mai mare, nu mai mică, cu febuxostat.",
   "Chisturile perforate sunt ale gutei tofacee; bumetanida reține mai puțin urat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează semnalul de mortalitate al febuxostatului și mută chisturile perforate pe PFCD."
  },
  "textbookExpressions": [
   "80-120 mg/zi",
   "bumetanida"
  ]
 },
 {
  "id": "reumatologie-adv-087",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Boala prin depunere de fosfat de calciu bazic (FCB) se caracterizează prin:",
  "options": [
   "Cristalele includ hidroxiapatita, fosfatul tricalcic și fosfatul octacalcic; depozitele periarticulare pot produce periartrită calcifiantă acută, mai ales în tendonul supraspinos",
   "Artropatia cronică extrem de distructivă a vârstnicului apare cel mai adesea la umeri (umărul Milwaukee) sau la alte articulații mari; colorația alizarin roșu S nu este specifică pentru FCB",
   "FCB este identică uratului acicular, umărul Milwaukee fiind o formă de gută tofacee a MTF1",
   "Alizarin roșu S distinge specific FCB de orice alt particul calcic",
   "Periartrita calcifiantă cruță supraspinosul, interesând doar MTF1 la bărbatul tânăr"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Cristalele includ hidroxiapatita, fosfatul tricalcic și fosfatul octacalcic; depozitele periarticulare pot produce periartrită calcifiantă acută, mai ales în tendonul supraspinos — Corect: Cele trei cristale și periartrita de supraspinos sunt din paragraf.\n\nArtropatia cronică extrem de distructivă a vârstnicului apare cel mai adesea la umeri (umărul Milwaukee) sau la alte articulații mari; colorația alizarin roșu S nu este specifică pentru FCB — Corect: Umărul Milwaukee și limita alizarinului sunt explicite.\n\nFCB este identică uratului acicular, umărul Milwaukee fiind o formă de gută tofacee a MTF1 — Incorect: FCB nu este urat; Milwaukee nu este gută de MTF1.\n\nAlizarin roșu S distinge specific FCB de orice alt particul calcic — Incorect: Alizarinul colorează și alte particule cu calciu.\n\nPeriartrita calcifiantă cruță supraspinosul, interesând doar MTF1 la bărbatul tânăr — Incorect: Supraspinosul este sediul tipic, nu MTF1.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 454, Boala prin depunere de fosfat de calciu bazic (pagini PDF: 84).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    454
   ],
   "pdfPages": [
    84
   ],
   "section": "Boala prin depunere de fosfat de calciu bazic"
  },
  "learningObjective": "Recunoașterea triadei hidroxiapatită/tricalcic/octacalcic, a umărului Milwaukee și a nespecificității alizarinului.",
  "optionRationales": [
   "Cele trei cristale și periartrita de supraspinos sunt din paragraf.",
   "Umărul Milwaukee și limita alizarinului sunt explicite.",
   "FCB nu este urat; Milwaukee nu este gută de MTF1.",
   "Alizarinul colorează și alte particule cu calciu.",
   "Supraspinosul este sediul tipic, nu MTF1."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă FCB cu uratul de MTF1 și transformă alizarinul nespecific într-un test patognomonic."
  },
  "textbookExpressions": [
   "umărul Milwaukee",
   "alizarin roşu S"
  ]
 },
 {
  "id": "reumatologie-adv-088",
  "topicId": "reumatologie",
  "type": "CM",
  "stem": "Tratamentul, prognosticul și sarcina în LES, dincolo de disociația VSH/PCR, includ:",
  "options": [
   "Hidroxiclorochina poate produce modificări retiniene la până la 7,5% din tratații pe termen lung, cu risc mai mare peste 5 mg/kgc pe zi",
   "În formele severe, micofenolatul de mofetil a înlocuit la scară largă ciclofosfamida; rituximabul și belimumabul țintesc limfocitul B",
   "Supraviețuirea la 10 ani este de 90%; micofenolatul se oprește în sarcină, pe când azatioprina, hidroxiclorochina și dozele mici de corticoizi sunt sigure",
   "Femeile cu anti-Ro și anti-La au un risc de 2% de lupus neonatal (erupții, hepatită și bloc cardiac fetal)",
   "Hidroxiclorochina este lipsită de toxicitate retiniană, micofenolatul fiind medicamentul de elecție în sarcină, iar supraviețuirea la 10 ani sub 50%"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Hidroxiclorochina poate produce modificări retiniene la până la 7,5% din tratații pe termen lung, cu risc mai mare peste 5 mg/kgc pe zi — Corect: 7,5% și pragul 5 mg/kgc sunt din paragraful antimalaricelor.\n\nÎn formele severe, micofenolatul de mofetil a înlocuit la scară largă ciclofosfamida; rituximabul și belimumabul țintesc limfocitul B — Corect: Înlocuirea ciclofosfamidei de către MMF și țintele B sunt explicite.\n\nSupraviețuirea la 10 ani este de 90%; micofenolatul se oprește în sarcină, pe când azatioprina, hidroxiclorochina și dozele mici de corticoizi sunt sigure — Corect: 90% la 10 ani și pachetul de sarcină (stop MMF, AZA/HCQ/CS mici) sunt din închidere.\n\nFemeile cu anti-Ro și anti-La au un risc de 2% de lupus neonatal (erupții, hepatită și bloc cardiac fetal) — Corect: Riscul de 2% cu anti-Ro/La este cifra de sarcină.\n\nHidroxiclorochina este lipsită de toxicitate retiniană, micofenolatul fiind medicamentul de elecție în sarcină, iar supraviețuirea la 10 ani sub 50% — Incorect: Textul descrie toxicitate retiniană, interzice MMF în sarcină și citează 90%, nu <50%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 18, p. 457, LES — Tratament; Prognostic; Sarcină (pagini PDF: 87).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 18,
   "printedPages": [
    457
   ],
   "pdfPages": [
    87
   ],
   "section": "LES — Tratament; Prognostic; Sarcină"
  },
  "learningObjective": "Integrarea retinopatiei 7,5%/>5 mg/kg, a MMF versus ciclofosfamidă, a supraviețuirii 90% și a riscului neonatal 2%.",
  "optionRationales": [
   "7,5% și pragul 5 mg/kgc sunt din paragraful antimalaricelor.",
   "Înlocuirea ciclofosfamidei de către MMF și țintele B sunt explicite.",
   "90% la 10 ani și pachetul de sarcină (stop MMF, AZA/HCQ/CS mici) sunt din închidere.",
   "Riscul de 2% cu anti-Ro/La este cifra de sarcină.",
   "Textul descrie toxicitate retiniană, interzice MMF în sarcină și citează 90%, nu <50%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru praguri (7,5%, 5 mg/kg, 90%, 2%); distractorul face HCQ inofensivă și MMF-ul de elecție în sarcină."
  },
  "textbookExpressions": [
   "7,5%",
   "2%"
  ]
 }
];
