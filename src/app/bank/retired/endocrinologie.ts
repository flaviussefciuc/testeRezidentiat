import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_ENDOCRINOLOGIE:(Question&Record<string,unknown>)[]=[
 {
  "id": "endocrinologie-adv-001",
  "topicId": "endocrinologie",
  "type": "CS",
  "stem": "Care asociere explică modificările testelor tiroidiene la persoane eutiroidiene în cele două contexte descrise?",
  "options": [
   "Contraceptive orale — creșterea TBG și T4 totale; amiodaronă — reducerea conversiei T4 în T3, cu posibilă creștere a fT4",
   "Contraceptive orale — creșterea TBG și fT4; amiodaronă — reducerea conversiei T4 în T3, cu scăderea raportului T4:T3",
   "Contraceptive orale — reducerea TBG și creșterea T4 totale; amiodaronă — creșterea conversiei T4 în T3",
   "Contraceptive orale — creșterea TBG și T4 totale; amiodaronă — creșterea conversiei T4 în T3, cu posibilă creștere a fT4",
   "Contraceptive orale — creșterea T4 totale prin stimularea receptorului TSH; amiodaronă — reducerea conversiei T4 în T3"
  ],
  "correct": [
   0
  ],
  "explanation": "Contraceptive orale — creșterea TBG și T4 totale; amiodaronă — reducerea conversiei T4 în T3, cu posibilă creștere a fT4 — Corect: Ambele mecanisme sunt descrise; fT4 rămâne de regulă normală sub contraceptive.\n\nContraceptive orale — creșterea TBG și fT4; amiodaronă — reducerea conversiei T4 în T3, cu scăderea raportului T4:T3 — Incorect: Creșterea TBG modifică mai ales T4 totală; inhibarea conversiei crește, nu scade, raportul T4:T3.\n\nContraceptive orale — reducerea TBG și creșterea T4 totale; amiodaronă — creșterea conversiei T4 în T3 — Incorect: TBG crește, iar amiodarona reduce conversia.\n\nContraceptive orale — creșterea TBG și T4 totale; amiodaronă — creșterea conversiei T4 în T3, cu posibilă creștere a fT4 — Incorect: Primul mecanism este corect; conversia sub amiodaronă este redusă.\n\nContraceptive orale — creșterea T4 totale prin stimularea receptorului TSH; amiodaronă — reducerea conversiei T4 în T3 — Incorect: Contraceptivele modifică TBG; stimularea receptorului TSH este discutată pentru HCG.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 611, 615, 617, Sarcina și contraceptivele orale; Medicamentele (pagini PDF: 88, 92, 94).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    611,
    615,
    617
   ],
   "pdfPages": [
    88,
    92,
    94
   ],
   "section": "Sarcina și contraceptivele orale; Medicamentele"
  },
  "learningObjective": "Distingerea modificării proteinei de transport de modificarea conversiei periferice.",
  "optionRationales": [
   "Ambele mecanisme sunt descrise; fT4 rămâne de regulă normală sub contraceptive.",
   "Creșterea TBG modifică mai ales T4 totală; inhibarea conversiei crește, nu scade, raportul T4:T3.",
   "TBG crește, iar amiodarona reduce conversia.",
   "Primul mecanism este corect; conversia sub amiodaronă este redusă.",
   "Contraceptivele modifică TBG; stimularea receptorului TSH este discutată pentru HCG."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Perechi de mecanisme cu diferențe între hormon total, liber și raportul T4:T3; un singur profil izolat nu este suficient."
  },
  "textbookExpressions": [
   "globulina de legare a tiroxinei",
   "conversia T4 în T3"
  ]
 },
 {
  "id": "endocrinologie-adv-002",
  "topicId": "endocrinologie",
  "type": "CS",
  "stem": "Care relație între autoanticorpii tiroidieni, ținta și efectul lor corespunde bibliografiei?",
  "options": [
   "Anti-TPO — receptor TSH, efect distructiv; TRAb — peroxidază tiroidiană, efect stimulator",
   "Anti-TPO — peroxidază tiroidiană, asociere cu distrucția; TRAb — receptor TSH, stimulare obișnuită și blocare ocazională",
   "Anti-TPO — tiroglobulină, efect distructiv; TRAb — receptor TSH, efect stimulator",
   "Anti-TPO — peroxidază tiroidiană, stimulare a sintezei; TRAb — receptor TSH, blocare obișnuită și stimulare ocazională",
   "Anti-TPO — peroxidază tiroidiană, asociere cu distrucția; TRAb — tiroglobulină, efect stimulator"
  ],
  "correct": [
   1
  ],
  "explanation": "Anti-TPO — receptor TSH, efect distructiv; TRAb — peroxidază tiroidiană, efect stimulator — Incorect: Țintele sunt inversate.\n\nAnti-TPO — peroxidază tiroidiană, asociere cu distrucția; TRAb — receptor TSH, stimulare obișnuită și blocare ocazională — Corect: TPO este antigenul microzomal; TRAb au de obicei efect stimulator, uneori blocant.\n\nAnti-TPO — tiroglobulină, efect distructiv; TRAb — receptor TSH, efect stimulator — Incorect: Anticorpii anti-TPO nu sunt anticorpi anti-tiroglobulină.\n\nAnti-TPO — peroxidază tiroidiană, stimulare a sintezei; TRAb — receptor TSH, blocare obișnuită și stimulare ocazională — Incorect: Efectul atribuit anti-TPO și frecvența efectelor TRAb nu corespund descrierii.\n\nAnti-TPO — peroxidază tiroidiană, asociere cu distrucția; TRAb — tiroglobulină, efect stimulator — Incorect: Ținta TRAb este receptorul TSH, nu tiroglobulina.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 611, Anticorpii anti-tiroidieni (pagini PDF: 88).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    611
   ],
   "pdfPages": [
    88
   ],
   "section": "Anticorpii anti-tiroidieni"
  },
  "learningObjective": "Asocierea autoanticorpului cu antigenul și diferențierea anticorpilor receptoriali stimulatori de cei blocanți.",
  "optionRationales": [
   "Țintele sunt inversate.",
   "TPO este antigenul microzomal; TRAb au de obicei efect stimulator, uneori blocant.",
   "Anticorpii anti-TPO nu sunt anticorpi anti-tiroglobulină.",
   "Efectul atribuit anti-TPO și frecvența efectelor TRAb nu corespund descrierii.",
   "Ținta TRAb este receptorul TSH, nu tiroglobulina."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate alternativele combină antigene reale; trebuie cunoscute ținta și tipul funcțional al anticorpului."
  },
  "textbookExpressions": [
   "peroxidaza tiroidiană",
   "anticorpi IgG anti-receptor TSH"
  ]
 },
 {
  "id": "endocrinologie-adv-003",
  "topicId": "endocrinologie",
  "type": "CS",
  "stem": "Care comparație între cele două tipuri de tirotoxicoză indusă de amiodaronă este corectă?",
  "options": [
   "Tip I — tiroidită distructivă pe glandă anterior normală; tip II — sinteză stimulată de iod pe gușă nodulară",
   "Tip I — sinteză stimulată de iod pe gușă nodulară; tip II — stimulare prin TRAb fără distrucție foliculară",
   "Tip I — sinteză stimulată de iod în boală tiroidiană preexistentă; tip II — efect folicular direct cu tiroidită distructivă",
   "Tip I — distrucție foliculară cu raport T4:T3 crescut; tip II — sinteză stimulată de iod cu raport T4:T3 scăzut",
   "Tip I — boală Graves preexistentă cu distrucție foliculară; tip II — gușă multinodulară cu exces de sinteză"
  ],
  "correct": [
   2
  ],
  "explanation": "Tip I — tiroidită distructivă pe glandă anterior normală; tip II — sinteză stimulată de iod pe gușă nodulară — Incorect: Tipurile sunt inversate.\n\nTip I — sinteză stimulată de iod pe gușă nodulară; tip II — stimulare prin TRAb fără distrucție foliculară — Incorect: Tipul II este distructiv, nu stimulat prin TRAb.\n\nTip I — sinteză stimulată de iod în boală tiroidiană preexistentă; tip II — efect folicular direct cu tiroidită distructivă — Corect: Aceasta este distincția dintre tipul I și tipul II din text.\n\nTip I — distrucție foliculară cu raport T4:T3 crescut; tip II — sinteză stimulată de iod cu raport T4:T3 scăzut — Incorect: Raportul T4:T3 poate fi crescut în ambele tipuri; mecanismele sunt greșit atribuite.\n\nTip I — boală Graves preexistentă cu distrucție foliculară; tip II — gușă multinodulară cu exces de sinteză — Incorect: Tipul I este legat de excesul de sinteză indus de iod; tipul II nu este forma pe gușă multinodulară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 615, Tirotoxicoza indusă de amiodaronă (pagini PDF: 92).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    615
   ],
   "pdfPages": [
    92
   ],
   "section": "Tirotoxicoza indusă de amiodaronă"
  },
  "learningObjective": "Separarea contextului tiroidian de mecanismul excesului hormonal în AIT.",
  "optionRationales": [
   "Tipurile sunt inversate.",
   "Tipul II este distructiv, nu stimulat prin TRAb.",
   "Aceasta este distincția dintre tipul I și tipul II din text.",
   "Raportul T4:T3 poate fi crescut în ambele tipuri; mecanismele sunt greșit atribuite.",
   "Tipul I este legat de excesul de sinteză indus de iod; tipul II nu este forma pe gușă multinodulară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Comparație cu trei dimensiuni: teren, mecanism și conversie; toate variantele folosesc mecanisme tiroidiene apropiate."
  },
  "textbookExpressions": [
   "tiroidită distructivă",
   "boala Graves preexistentă",
   "raporturi T4:T3"
  ]
 },
 {
  "id": "endocrinologie-adv-005",
  "topicId": "endocrinologie",
  "type": "CS",
  "stem": "De ce regimul de blocare și substituție pentru hipertiroidism este contraindicat în sarcină, potrivit explicației din bibliografie?",
  "options": [
   "Levotiroxina traversează placenta mai ușor decât antitiroidienele, inducând hipertiroidism fetal",
   "Antitiroidienele blochează tiroida maternă, dar nu ajung la tiroida fetală",
   "Tiroxina și antitiroidienele traversează placenta în proporții similare, menținând blocarea fetală",
   "TRAb sunt reținuți în circulația maternă, în timp ce tiroxina stimulează tiroida fetală",
   "Antitiroidienele traversează placenta mai ușor decât tiroxina, iar substituția maternă poate să nu compenseze blocarea tiroidei fetale"
  ],
  "correct": [
   4
  ],
  "explanation": "Levotiroxina traversează placenta mai ușor decât antitiroidienele, inducând hipertiroidism fetal — Incorect: Relația de transfer este inversată.\n\nAntitiroidienele blochează tiroida maternă, dar nu ajung la tiroida fetală — Incorect: Antitiroidienele traversează placenta.\n\nTiroxina și antitiroidienele traversează placenta în proporții similare, menținând blocarea fetală — Incorect: Transferul tiroxinei este comparativ mai slab; proporțiile nu sunt echivalente.\n\nTRAb sunt reținuți în circulația maternă, în timp ce tiroxina stimulează tiroida fetală — Incorect: TRAb pot traversa placenta și stimula tiroida fetală; nu sunt reținuți matern.\n\nAntitiroidienele traversează placenta mai ușor decât tiroxina, iar substituția maternă poate să nu compenseze blocarea tiroidei fetale — Corect: Diferența de pasaj explică riscul fetal în pofida eutiroidiei materne.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 616, 617, 618, Regimul blocare și substituție (pagini PDF: 93, 94, 95).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    616,
    617,
    618
   ],
   "pdfPages": [
    93,
    94,
    95
   ],
   "section": "Regimul blocare și substituție"
  },
  "learningObjective": "Corelarea transferului transplacentar diferit cu riscul de blocare fetală.",
  "optionRationales": [
   "Relația de transfer este inversată.",
   "Antitiroidienele traversează placenta.",
   "Transferul tiroxinei este comparativ mai slab; proporțiile nu sunt echivalente.",
   "TRAb pot traversa placenta și stimula tiroida fetală; nu sunt reținuți matern.",
   "Diferența de pasaj explică riscul fetal în pofida eutiroidiei materne."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere diferențierea efectelor materne și fetale și a transferului a trei categorii de molecule."
  },
  "textbookExpressions": [
   "pasajul transplacentar al tiroxinei",
   "blocare și substituție"
  ]
 },
 {
  "id": "endocrinologie-adv-006",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "În interpretarea rezultatelor tiroidiene discordante sunt corecte afirmațiile:",
  "options": [
   "Boala sistemică severă poate asocia T4/T3 scăzute cu TSH bazal normal sau scăzut",
   "TSH normal cu fT4 scăzută diferențiază singur deficitul hipofizar de modificările din boala sistemică",
   "Rezistența la hormonii tiroidieni poate asocia T4/T3 crescute cu TSH normal",
   "T4 crescută cu TSH nesupresat diferențiază singură rezistența hormonală de adenomul secretant de TSH",
   "T4 totală crescută sub contraceptive orale indică același mecanism ca T4 liberă crescută în rezistența hormonală"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Boala sistemică severă poate asocia T4/T3 scăzute cu TSH bazal normal sau scăzut — Corect: Acesta este profilul descris în euthyroid sick syndrome.\n\nTSH normal cu fT4 scăzută diferențiază singur deficitul hipofizar de modificările din boala sistemică — Incorect: Profilul se poate suprapune; contextul și reevaluarea după boala sistemică sunt necesare.\n\nRezistența la hormonii tiroidieni poate asocia T4/T3 crescute cu TSH normal — Corect: Feedbackul poate necesita concentrații mai mari pentru același efect.\n\nT4 crescută cu TSH nesupresat diferențiază singură rezistența hormonală de adenomul secretant de TSH — Incorect: Diferențialul include adenomul secretant și interferențele de laborator.\n\nT4 totală crescută sub contraceptive orale indică același mecanism ca T4 liberă crescută în rezistența hormonală — Incorect: Contraceptivele cresc TBG; rezistența hormonală privește răspunsul receptorial.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 611, 613, 618, Boala sistemică; Rezistența la hormonii tiroidieni (pagini PDF: 88, 90, 95).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    611,
    613,
    618
   ],
   "pdfPages": [
    88,
    90,
    95
   ],
   "section": "Boala sistemică; Rezistența la hormonii tiroidieni"
  },
  "learningObjective": "Recunoașterea suprapunerii profilelor și a limitelor unui rezultat izolat.",
  "optionRationales": [
   "Acesta este profilul descris în euthyroid sick syndrome.",
   "Profilul se poate suprapune; contextul și reevaluarea după boala sistemică sunt necesare.",
   "Feedbackul poate necesita concentrații mai mari pentru același efect.",
   "Diferențialul include adenomul secretant și interferențele de laborator.",
   "Contraceptivele cresc TBG; rezistența hormonală privește răspunsul receptorial."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Două profile biochimice aparent contradictorii trebuie integrate fără diagnostic printr-un singur test."
  },
  "textbookExpressions": [
   "TSH bazal normal sau scăzut",
   "interferențele măsurătorilor de laborator"
  ]
 },
 {
  "id": "endocrinologie-adv-007",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Care asocieri între forma hipotiroidismului și particularitățile sale sunt corecte?",
  "options": [
   "Sindrom Pendred — defect al pendrinei, gușă și surditate senzorială",
   "Tiroidită Hashimoto — gușă și anti-TPO în titru înalt, cu absența unei faze toxice inițiale",
   "Tiroidită postpartum — inflamație limfocitară și posibilă succesiune hiper–hipotiroidism",
   "Hipotiroidism atrofic autoimun — infiltrare limfoidă cu regenerare care produce gușă ca trăsătură definitorie",
   "Dishormonogeneză — defect genetic de sinteză, cu atrofie glandulară în loc de gușă"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Sindrom Pendred — defect al pendrinei, gușă și surditate senzorială — Corect: Aceste elemente sunt asociate în forma familială descrisă.\n\nTiroidită Hashimoto — gușă și anti-TPO în titru înalt, cu absența unei faze toxice inițiale — Incorect: Primele două elemente sunt corecte, dar poate exista Hashi-toxicoză inițială.\n\nTiroidită postpartum — inflamație limfocitară și posibilă succesiune hiper–hipotiroidism — Corect: Pot apărea ambele faze secvențial; histologia este limfocitară.\n\nHipotiroidism atrofic autoimun — infiltrare limfoidă cu regenerare care produce gușă ca trăsătură definitorie — Incorect: Forma atrofică evoluează spre atrofie și fibroză; regenerarea cu gușă este descrisă în Hashimoto.\n\nDishormonogeneză — defect genetic de sinteză, cu atrofie glandulară în loc de gușă — Incorect: Defectul genetic este corect, dar bolnavii dezvoltă hipotiroidism cu gușă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 612, 611, Tiroidite autoimune; Dishormonogeneza (pagini PDF: 89, 88).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    612,
    611
   ],
   "pdfPages": [
    89,
    88
   ],
   "section": "Tiroidite autoimune; Dishormonogeneza"
  },
  "learningObjective": "Diferențierea arhitecturii glandulare și a evoluției în formele primare.",
  "optionRationales": [
   "Aceste elemente sunt asociate în forma familială descrisă.",
   "Primele două elemente sunt corecte, dar poate exista Hashi-toxicoză inițială.",
   "Pot apărea ambele faze secvențial; histologia este limfocitară.",
   "Forma atrofică evoluează spre atrofie și fibroză; regenerarea cu gușă este descrisă în Hashimoto.",
   "Defectul genetic este corect, dar bolnavii dezvoltă hipotiroidism cu gușă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fiecare distractor păstrează etiologia corectă și schimbă un singur atribut evolutiv sau morfologic."
  },
  "textbookExpressions": [
   "transportorul pendrina",
   "tiroidită limfocitară",
   "Hashi-toxicoza"
  ]
 },
 {
  "id": "endocrinologie-adv-008",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "În hipotiroidism, sunt corecte asocierile dintre anomalia paraclinică și mecanismul ori contextul ei:",
  "options": [
   "Anemie microcitară — pierderi menstruale sau boală celiacă asociată",
   "Anemie macrocitară — depleție marțială prin menoragie ca mecanism uzual",
   "Hiponatremie — ADH crescut și eliminare deficitară a apei libere",
   "Creatinkinază crescută — marker al hemolizei, în absența contribuției musculare",
   "Aspartat-transferază crescută — origine hepatică ce exclude contribuția musculară"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Anemie microcitară — pierderi menstruale sau boală celiacă asociată — Corect: Ambele cauze ale microcitozei sunt enumerate.\n\nAnemie macrocitară — depleție marțială prin menoragie ca mecanism uzual — Incorect: Macrocitoza poate reflecta anemia pernicioasă asociată; depleția de fier produce microcitoză.\n\nHiponatremie — ADH crescut și eliminare deficitară a apei libere — Corect: Acesta este mecanismul hiponatremiei descris.\n\nCreatinkinază crescută — marker al hemolizei, în absența contribuției musculare — Incorect: Creșterea CK este asociată miopatiei.\n\nAspartat-transferază crescută — origine hepatică ce exclude contribuția musculară — Incorect: Textul admite origine musculară și/sau hepatică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 613, Investigarea hipotiroidismului primar (pagini PDF: 90).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    613
   ],
   "pdfPages": [
    90
   ],
   "section": "Investigarea hipotiroidismului primar"
  },
  "learningObjective": "Distingerea anomaliilor asociate de cele produse prin mecanisme diferite.",
  "optionRationales": [
   "Ambele cauze ale microcitozei sunt enumerate.",
   "Macrocitoza poate reflecta anemia pernicioasă asociată; depleția de fier produce microcitoză.",
   "Acesta este mecanismul hiponatremiei descris.",
   "Creșterea CK este asociată miopatiei.",
   "Textul admite origine musculară și/sau hepatică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate constatările pot apărea în hipotiroidism; eroarea este în atribuirea mecanismului, nu în prezența manifestării."
  },
  "textbookExpressions": [
   "eliminarea defectuoasă a apei libere",
   "miopatie asociată",
   "anemia pernicioasă"
  ]
 },
 {
  "id": "endocrinologie-adv-009",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "În monitorizarea hipotiroidismului primar tratat cu levotiroxină, sunt corecte afirmațiile:",
  "options": [
   "Evaluarea substituției după minimum șase săptămâni de doză constantă ține cont de stabilizarea răspunsului",
   "Persistența simptomelor după două săptămâni demonstrează absorbția ineficientă, chiar dacă TSH se normalizează ulterior",
   "Preparatele de fier, compușii de calciu și inhibitorii pompei de protoni pot explica dificultatea normalizării TSH",
   "Normalizarea fT4 cu TSH complet supresat reprezintă ținta obișnuită a substituției pentru hipotiroidism primar",
   "Creșterea rapidă a dozei previne simptomele de tip tirotoxic la pacienții cu deficit sever și de lungă durată"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Evaluarea substituției după minimum șase săptămâni de doză constantă ține cont de stabilizarea răspunsului — Corect: Acesta este intervalul minim de doză constantă cerut în text.\n\nPersistența simptomelor după două săptămâni demonstrează absorbția ineficientă, chiar dacă TSH se normalizează ulterior — Incorect: Ameliorarea poate debuta după două săptămâni sau mai târziu, iar rezoluția completă poate dura luni.\n\nPreparatele de fier, compușii de calciu și inhibitorii pompei de protoni pot explica dificultatea normalizării TSH — Corect: Aceste medicamente pot interfera cu absorbția; se verifică și complianța și boala celiacă.\n\nNormalizarea fT4 cu TSH complet supresat reprezintă ținta obișnuită a substituției pentru hipotiroidism primar — Incorect: Supresia completă trebuie evitată din cauza fibrilației atriale și osteoporozei.\n\nCreșterea rapidă a dozei previne simptomele de tip tirotoxic la pacienții cu deficit sever și de lungă durată — Incorect: Creșterea prea rapidă poate produce simptome tirotoxice chiar cu fT4 normală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 613, Terapia de substituție; Monitorizarea (pagini PDF: 90).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    613
   ],
   "pdfPages": [
    90
   ],
   "section": "Terapia de substituție; Monitorizarea"
  },
  "learningObjective": "Separarea răspunsului clinic întârziat, expunerii insuficiente și suprasubstituției.",
  "optionRationales": [
   "Acesta este intervalul minim de doză constantă cerut în text.",
   "Ameliorarea poate debuta după două săptămâni sau mai târziu, iar rezoluția completă poate dura luni.",
   "Aceste medicamente pot interfera cu absorbția; se verifică și complianța și boala celiacă.",
   "Supresia completă trebuie evitată din cauza fibrilației atriale și osteoporozei.",
   "Creșterea prea rapidă poate produce simptome tirotoxice chiar cu fT4 normală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Decizia depinde de timpul de la modificarea dozei, absorbție și diferența dintre interval normal și supresie."
  },
  "textbookExpressions": [
   "doză constantă",
   "compușii de calciu",
   "supresia completă a TSH"
  ]
 },
 {
  "id": "endocrinologie-adv-010",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Privind semnele oculare și orbitopatia Graves, sunt corecte afirmațiile:",
  "options": [
   "Retracția palpebrală și privirea fixă se pot întâlni în hipertiroidism de orice cauză",
   "Limitarea mișcărilor oculare prin edem muscular este explicată prin același mecanism ca retracția palpebrală din orice tirotoxicoză",
   "Orbitopatia poate apărea și la persoane eutiroidiene sau hipotiroidiene cu boală Graves",
   "Severitatea oculară urmărește proporțional nivelul fT4 și necesarul de antitiroidiene",
   "Boala unilaterală exclude mecanismul orbital imun descris pentru Graves"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Retracția palpebrală și privirea fixă se pot întâlni în hipertiroidism de orice cauză — Corect: Aceste două semne sunt descrise la p. 615 ca nespecifice Graves.\n\nLimitarea mișcărilor oculare prin edem muscular este explicată prin același mecanism ca retracția palpebrală din orice tirotoxicoză — Incorect: Limitarea prin edem retro-orbital aparține răspunsului imun, nu simplei retracții palpebrale.\n\nOrbitopatia poate apărea și la persoane eutiroidiene sau hipotiroidiene cu boală Graves — Corect: Funcția tiroidiană și boala oculară nu sunt echivalente.\n\nSeveritatea oculară urmărește proporțional nivelul fT4 și necesarul de antitiroidiene — Incorect: Manifestările oculare nu evoluează în paralel cu tirotoxicoza biochimică.\n\nBoala unilaterală exclude mecanismul orbital imun descris pentru Graves — Incorect: Protruzia este de obicei bilaterală, dar poate fi unilaterală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 618, 615, Orbitopatia Graves — Fiziopatologie; Tablou clinic (pagini PDF: 95, 92).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    618,
    615
   ],
   "pdfPages": [
    95,
    92
   ],
   "section": "Orbitopatia Graves — Fiziopatologie; Tablou clinic"
  },
  "learningObjective": "Separarea semnelor adrenergice nespecifice de boala orbitală imună.",
  "optionRationales": [
   "Aceste două semne sunt descrise la p. 615 ca nespecifice Graves.",
   "Limitarea prin edem retro-orbital aparține răspunsului imun, nu simplei retracții palpebrale.",
   "Funcția tiroidiană și boala oculară nu sunt echivalente.",
   "Manifestările oculare nu evoluează în paralel cu tirotoxicoza biochimică.",
   "Protruzia este de obicei bilaterală, dar poate fi unilaterală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distinge mecanisme oculare apropiate și disocierea dintre activitatea glandulară și orbitală."
  },
  "textbookExpressions": [
   "inflamație retro-orbitală",
   "edemul mușchilor extraoculari"
  ]
 },
 {
  "id": "endocrinologie-adv-012",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "În diagnosticul diferențial al tirotoxicozei, sunt corecte asocierile:",
  "options": [
   "Graves — captare difuză a trasorului și TRAb în titru ridicat",
   "Nodul toxic — captare focală, cu captare redusă în restul glandei",
   "Tiroidită subacută — markeri inflamatori crescuți și captare difuză intensă",
   "Tiroidită de Quervain — tirotoxicoză inițială, urmată posibil de hipotiroidism tranzitoriu",
   "Gușă multinodulară toxică — captare focală, cu remisiune de regulă durabilă după un ciclu de antitiroidiene"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Graves — captare difuză a trasorului și TRAb în titru ridicat — Corect: Captarea și serologia sunt concordante cu Graves.\n\nNodul toxic — captare focală, cu captare redusă în restul glandei — Corect: Acesta este modelul nodular descris.\n\nTiroidită subacută — markeri inflamatori crescuți și captare difuză intensă — Incorect: Markerii sunt crescuți, dar captarea este minimă în faza acută.\n\nTiroidită de Quervain — tirotoxicoză inițială, urmată posibil de hipotiroidism tranzitoriu — Corect: Succesiunea este descrisă după câteva săptămâni.\n\nGușă multinodulară toxică — captare focală, cu remisiune de regulă durabilă după un ciclu de antitiroidiene — Incorect: Antitiroidienele controlează excesul hormonal, dar induc rar rezoluția gușii toxice.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 614, Cadranul 21.29; Tiroidita de Quervain (pagini PDF: 91).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    614
   ],
   "pdfPages": [
    91
   ],
   "section": "Cadranul 21.29; Tiroidita de Quervain"
  },
  "learningObjective": "Combinarea scintigramei cu mecanismul și evoluția, nu doar cu TSH supresat.",
  "optionRationales": [
   "Captarea și serologia sunt concordante cu Graves.",
   "Acesta este modelul nodular descris.",
   "Markerii sunt crescuți, dar captarea este minimă în faza acută.",
   "Succesiunea este descrisă după câteva săptămâni.",
   "Antitiroidienele controlează excesul hormonal, dar induc rar rezoluția gușii toxice."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Profile hormonale similare sunt diferențiate prin distribuția captării și probabilitatea remisiunii."
  },
  "textbookExpressions": [
   "captare focală",
   "captare minimă",
   "hipotiroidism tranzitoriu"
  ]
 },
 {
  "id": "endocrinologie-adv-013",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Privind tratamentul antitiroidian de sinteză, sunt corecte afirmațiile:",
  "options": [
   "Tiamazolul este metabolitul activ al carbimazolului",
   "Propiltiouracilul inhibă suplimentar conversia T4 în T3",
   "Întârzierea beneficiului clinic după scăderea sintezei hormonale reflectă timpul lung de înjumătățire al T4",
   "Normalizarea precoce a fT4 impune ca TSH să fi revenit deja în intervalul normal",
   "În primele săptămâni, doza se titrează după TSH izolat pentru a evita variațiile fT4 și fT3"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tiamazolul este metabolitul activ al carbimazolului — Corect: Această relație farmacologică este descrisă.\n\nPropiltiouracilul inhibă suplimentar conversia T4 în T3 — Corect: PTU are acest efect suplimentar.\n\nÎntârzierea beneficiului clinic după scăderea sintezei hormonale reflectă timpul lung de înjumătățire al T4 — Corect: T4 are un timp de înjumătățire de aproximativ șapte zile, ceea ce întârzie beneficiul.\n\nNormalizarea precoce a fT4 impune ca TSH să fi revenit deja în intervalul normal — Incorect: TSH poate rămâne supresat luni după normalizarea hormonilor.\n\nÎn primele săptămâni, doza se titrează după TSH izolat pentru a evita variațiile fT4 și fT3 — Incorect: La început se folosesc starea clinică și fT4/fT3, deoarece TSH poate rămâne supresat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 616, Medicația antitiroidiană; Regimuri de dozare (pagini PDF: 93).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    616
   ],
   "pdfPages": [
    93
   ],
   "section": "Medicația antitiroidiană; Regimuri de dozare"
  },
  "learningObjective": "Distingerea efectului de sinteză, conversiei periferice și recuperării axului TSH.",
  "optionRationales": [
   "Această relație farmacologică este descrisă.",
   "PTU are acest efect suplimentar.",
   "T4 are un timp de înjumătățire de aproximativ șapte zile, ceea ce întârzie beneficiul.",
   "TSH poate rămâne supresat luni după normalizarea hormonilor.",
   "La început se folosesc starea clinică și fT4/fT3, deoarece TSH poate rămâne supresat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Solicită separarea a trei ritmuri de răspuns și a mecanismelor apropiate ale celor două medicamente."
  },
  "textbookExpressions": [
   "metabolitul activ",
   "conversia T4 în T3",
   "TSH rămâne adeseori suprimat"
  ]
 },
 {
  "id": "endocrinologie-adv-014",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "În raport cu iodul radioactiv și tratamentul medicamentos, sunt corecte afirmațiile din bibliografie:",
  "options": [
   "PTU se întrerupe mai devreme decât carbimazolul înaintea iodului radioactiv, datorită efectului radioprotector",
   "Efectul complet al iodului radioactiv se instalează după câteva luni",
   "După iod radioactiv, funcția tiroidiană necesită supraveghere pe termen lung",
   "Agravarea oculară după iod radioactiv este mai puțin frecventă decât după medicația antitiroidiană",
   "Eutiroidizarea inițială după iod radioactiv face improbabilă instalarea tardivă a hipotiroidismului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "PTU se întrerupe mai devreme decât carbimazolul înaintea iodului radioactiv, datorită efectului radioprotector — Corect: Textul distinge efectul radioprotector al PTU.\n\nEfectul complet al iodului radioactiv se instalează după câteva luni — Corect: Distrugerea glandulară nu produce efect complet imediat.\n\nDupă iod radioactiv, funcția tiroidiană necesită supraveghere pe termen lung — Corect: Hipotiroidismul tardiv justifică monitorizarea continuă.\n\nAgravarea oculară după iod radioactiv este mai puțin frecventă decât după medicația antitiroidiană — Incorect: Agravarea orbitopatiei este mai frecventă după iod radioactiv.\n\nEutiroidizarea inițială după iod radioactiv face improbabilă instalarea tardivă a hipotiroidismului — Incorect: Hipotiroidismul se poate instala ulterior, inclusiv după eutiroidizare inițială.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 617, Iodul radioactiv; Supravegherea pe termen lung (pagini PDF: 94).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    617
   ],
   "pdfPages": [
    94
   ],
   "section": "Iodul radioactiv; Supravegherea pe termen lung"
  },
  "learningObjective": "Separarea protecției față de iradiere, răspunsului întârziat și evoluției tardive.",
  "optionRationales": [
   "Textul distinge efectul radioprotector al PTU.",
   "Distrugerea glandulară nu produce efect complet imediat.",
   "Hipotiroidismul tardiv justifică monitorizarea continuă.",
   "Agravarea orbitopatiei este mai frecventă după iod radioactiv.",
   "Hipotiroidismul se poate instala ulterior, inclusiv după eutiroidizare inițială."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distincția între cele două antitiroidiene trebuie integrată cu răspunsul precoce, orbital și tardiv."
  },
  "textbookExpressions": [
   "acțiune radioprotectoare",
   "supravegherea pe termen lung"
  ]
 },
 {
  "id": "endocrinologie-adv-016",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "În rezistența la hormonii tiroidieni sunt descrise următoarele:",
  "options": [
   "Anomalii ale receptorului TRβ pot impune concentrații hormonale mai mari pentru același efect intracelular",
   "T4/T3 crescute cu TSH normal pot apărea la un pacient clinic eutiroidian",
   "Sensibilitatea diferită a țesuturilor poate permite manifestări tirotoxice cardiace în pofida TSH normal",
   "Diagnosticul diferențial include adenomul secretant de TSH și interferențe de laborator",
   "În rezistența parțială, concentrațiile necesare eutiroidismului în inimă și os pot fi mai mari decât cele necesare eutiroidismului hipofizar"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Anomalii ale receptorului TRβ pot impune concentrații hormonale mai mari pentru același efect intracelular — Corect: Aceasta este consecința mutațiilor receptorului descris.\n\nT4/T3 crescute cu TSH normal pot apărea la un pacient clinic eutiroidian — Corect: Concentrațiile crescute pot compensa rezistența.\n\nSensibilitatea diferită a țesuturilor poate permite manifestări tirotoxice cardiace în pofida TSH normal — Corect: Unele țesuturi pot avea activitate receptorială normală și pot fi expuse excesiv.\n\nDiagnosticul diferențial include adenomul secretant de TSH și interferențe de laborator — Corect: Ambele alternative sunt enumerate.\n\nÎn rezistența parțială, concentrațiile necesare eutiroidismului în inimă și os pot fi mai mari decât cele necesare eutiroidismului hipofizar — Incorect: Relația descrisă este inversă: nivelurile necesare eutiroidismului central pot depăși necesarul unor țesuturi periferice sensibile.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 618, Rezistența la hormonii tiroidieni (pagini PDF: 95).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    618
   ],
   "pdfPages": [
    95
   ],
   "section": "Rezistența la hormonii tiroidieni"
  },
  "learningObjective": "Integrarea feedbackului central cu sensibilitatea tisulară neuniformă.",
  "optionRationales": [
   "Aceasta este consecința mutațiilor receptorului descris.",
   "Concentrațiile crescute pot compensa rezistența.",
   "Unele țesuturi pot avea activitate receptorială normală și pot fi expuse excesiv.",
   "Ambele alternative sunt enumerate.",
   "Relația descrisă este inversă: nivelurile necesare eutiroidismului central pot depăși necesarul unor țesuturi periferice sensibile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul reproduce un rezultat real de laborator, dar îi atribuie o echivalență tisulară falsă."
  },
  "textbookExpressions": [
   "același efect intracelular",
   "rezistență parțială la hormonii tiroidieni"
  ]
 },
 {
  "id": "endocrinologie-adv-018",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "După tratamentul cancerului tiroidian diferențiat, sunt corecte afirmațiile privind tiroglobulina:",
  "options": [
   "Este folosită ca marker tumoral după ablația țesutului tiroidian",
   "Sensibilitatea măsurării crește când TSH este ridicat",
   "TSH recombinant permite stimularea tiroglobulinei fără întreruperea levotiroxinei",
   "Anticorpii anti-tiroglobulină pot face dozarea neinterpretabilă",
   "Un rezultat de tiroglobulină nedetectabilă în prezența anti-Tg se interpretează la fel ca unul fără acești anticorpi"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este folosită ca marker tumoral după ablația țesutului tiroidian — Corect: Tg este markerul de urmărire descris pentru tumorile diferențiate.\n\nSensibilitatea măsurării crește când TSH este ridicat — Corect: Stimularea prin TSH crește sensibilitatea.\n\nTSH recombinant permite stimularea tiroglobulinei fără întreruperea levotiroxinei — Corect: rhTSH oferă această posibilitate.\n\nAnticorpii anti-tiroglobulină pot face dozarea neinterpretabilă — Corect: Interferența este precizată la p. 622.\n\nUn rezultat de tiroglobulină nedetectabilă în prezența anti-Tg se interpretează la fel ca unul fără acești anticorpi — Incorect: Anti-Tg pot compromite interpretarea; rezultatele nu sunt echivalente.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 621, 622, Carcinoamele papilare și foliculare — Monitorizare (pagini PDF: 96, 97).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    621,
    622
   ],
   "pdfPages": [
    96,
    97
   ],
   "section": "Carcinoamele papilare și foliculare — Monitorizare"
  },
  "learningObjective": "Interpretarea markerului în funcție de stimularea TSH și interferența imunologică.",
  "optionRationales": [
   "Tg este markerul de urmărire descris pentru tumorile diferențiate.",
   "Stimularea prin TSH crește sensibilitatea.",
   "rhTSH oferă această posibilitate.",
   "Interferența este precizată la p. 622.",
   "Anti-Tg pot compromite interpretarea; rezultatele nu sunt echivalente."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Un rezultat aparent liniștitor trebuie condiționat simultan de stimulare și de validitatea metodei."
  },
  "textbookExpressions": [
   "TSH recombinant",
   "anticorpii anti-Tg",
   "marker tumoral post-ablație"
  ]
 },
 {
  "id": "endocrinologie-adv-021",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Conform Cadranului 21.25, efectele fiziologice ale hormonilor tiroidieni includ:",
  "options": [
   "Creșterea ritmului și debitului cardiac; creșterea sensibilității la catecolamine și a numărului de receptori β-adrenergici în inimă, mușchi, adipocite și limfocite, cu scăderea receptorilor α-adrenergici cardiaci",
   "Menținerea stimulării hipoxice și hipercapnice a centrului respirator și creșterea motilității intestinale",
   "Creșterea 2,3-BPG eritrocitar, facilitând eliberarea de oxigen către țesuturi, plus creșterea gluconeogenezei/glicolizei hepatice și a absorbției intestinale de glucoză",
   "Creșterea lipolizei și a sintezei/degradării colesterolului, a ratei de remodelare osoasă și a vitezei de contracție/relaxare musculară",
   "Scăderea debitului cardiac, blocarea 2,3-BPG și creșterea receptorilor α-adrenergici cardiaci, cu scăderea celor β"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Creșterea ritmului și debitului cardiac; creșterea sensibilității la catecolamine și a numărului de receptori β-adrenergici în inimă, mușchi, adipocite și limfocite, cu scăderea receptorilor α-adrenergici cardiaci — Corect: Perechea CV plus β↑/α↓ este din rândurile cardiovascular și simpatic.\n\nMenținerea stimulării hipoxice și hipercapnice a centrului respirator și creșterea motilității intestinale — Corect: Centrul respirator și motilitatea GI sunt două rânduri consecutive.\n\nCreșterea 2,3-BPG eritrocitar, facilitând eliberarea de oxigen către țesuturi, plus creșterea gluconeogenezei/glicolizei hepatice și a absorbției intestinale de glucoză — Corect: 2,3-BPG și metabolismul glucidic completează sângele și carbohidrații.\n\nCreșterea lipolizei și a sintezei/degradării colesterolului, a ratei de remodelare osoasă și a vitezei de contracție/relaxare musculară — Corect: Lipidele, osul și mușchiul închid tabelul.\n\nScăderea debitului cardiac, blocarea 2,3-BPG și creșterea receptorilor α-adrenergici cardiaci, cu scăderea celor β — Incorect: Profilul inversat (debit↓, α↑, β↓) contrazice cadranul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 611, Cadranul 21.25 — Efectele fiziologice ale hormonilor tiroidieni (pagini PDF: 88).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    611
   ],
   "pdfPages": [
    88
   ],
   "section": "Cadranul 21.25 — Efectele fiziologice ale hormonilor tiroidieni"
  },
  "learningObjective": "Integrarea efectelor CV (β↑/α↓), respiratorii, eritrocitare (2,3-BPG) și metabolice, distinct de profilul inversat.",
  "optionRationales": [
   "Perechea CV plus β↑/α↓ este din rândurile cardiovascular și simpatic.",
   "Centrul respirator și motilitatea GI sunt două rânduri consecutive.",
   "2,3-BPG și metabolismul glucidic completează sângele și carbohidrații.",
   "Lipidele, osul și mușchiul închid tabelul.",
   "Profilul inversat (debit↓, α↑, β↓) contrazice cadranul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru rânduri reale ale tabelului trebuie ținute împreună; distractorul inversează β versus α și soarta 2,3-BPG."
  },
  "textbookExpressions": [
   "2,3-BPG",
   "receptori β-adrenergici"
  ]
 },
 {
  "id": "endocrinologie-adv-022",
  "topicId": "endocrinologie",
  "type": "CS",
  "stem": "Profilul din Cadranul 21.26 care definește T3-toxicoza este:",
  "options": [
   "TSH supresat (<0,05 mU/L), fT4 normală, fT3 crescută",
   "TSH crescut (>10 mU/L), fT4 scăzută, fT3 scăzută",
   "TSH 5-10 mU/L, fT4 și fT3 normale",
   "TSH supresat, fT4 crescută, fT3 crescută, ca tirotoxicoza obișnuită",
   "TSH normal, fT4 crescută, fT3 scăzută"
  ],
  "correct": [
   0
  ],
  "explanation": "TSH supresat (<0,05 mU/L), fT4 normală, fT3 crescută — Corect: Acesta este rândul „T3 Toxicoza” din tabel, cu analizele informative îngroșate.\n\nTSH crescut (>10 mU/L), fT4 scăzută, fT3 scăzută — Incorect: Profilul descrie hipotiroidismul primar.\n\nTSH 5-10 mU/L, fT4 și fT3 normale — Incorect: TSH 5-10 cu hormoni liberi normali este eutiroidismul compensat.\n\nTSH supresat, fT4 crescută, fT3 crescută, ca tirotoxicoza obișnuită — Incorect: Tirotoxicoza obișnuită are și fT4 crescută.\n\nTSH normal, fT4 crescută, fT3 scăzută — Incorect: Acest amestec nu figurează în cadran.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 611, Cadranul 21.26 — T3 toxicoza (pagini PDF: 88).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    611
   ],
   "pdfPages": [
    88
   ],
   "section": "Cadranul 21.26 — T3 toxicoza"
  },
  "learningObjective": "Separarea T3-toxicozei (TSH↓, fT4 N, fT3↑) de tirotoxicoza clasică și de eutiroidismul compensat.",
  "optionRationales": [
   "Acesta este rândul „T3 Toxicoza” din tabel, cu analizele informative îngroșate.",
   "Profilul descrie hipotiroidismul primar.",
   "TSH 5-10 cu hormoni liberi normali este eutiroidismul compensat.",
   "Tirotoxicoza obișnuită are și fT4 crescută.",
   "Acest amestec nu figurează în cadran."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt celelalte rânduri reale ale aceluiași tabel (hipotiroidism, compensat, tirotoxicoză clasică)."
  },
  "textbookExpressions": [
   "T3 Toxicoza",
   "<0.05mU/L"
  ]
 },
 {
  "id": "endocrinologie-adv-023",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Eutiroidismul compensat, în Cadranul 21.26, se recunoaște prin:",
  "options": [
   "TSH ușor ridicat (5-10 mU/L)",
   "fT4 normală și fT3 normală",
   "TSH supresat cu fT3 izolat crescută",
   "TSH >10 mU/L cu fT4 scăzută",
   "TSH nedetectabil cu ambii hormoni liberi crescuți"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "TSH ușor ridicat (5-10 mU/L) — Corect: Intervalul 5-10 mU/L este cel al rândului compensat.\n\nfT4 normală și fT3 normală — Corect: Ambii hormoni liberi normali completează profilul.\n\nTSH supresat cu fT3 izolat crescută — Incorect: TSH supresat + fT3↑ este T3-toxicoza.\n\nTSH >10 mU/L cu fT4 scăzută — Incorect: TSH >10 cu fT4 scăzută este hipotiroidismul primar.\n\nTSH nedetectabil cu ambii hormoni liberi crescuți — Incorect: TSH nedetectabil cu T4/T3 crescute este tirotoxicoza.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 611, Cadranul 21.26 — Eutiroidism compensat (pagini PDF: 88).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    611
   ],
   "pdfPages": [
    88
   ],
   "section": "Cadranul 21.26 — Eutiroidism compensat"
  },
  "learningObjective": "Reținerea ferestrei TSH 5-10 mU/L cu hormoni liberi normali, distinct de T3-toxicoză și de hipotiroidismul primar.",
  "optionRationales": [
   "Intervalul 5-10 mU/L este cel al rândului compensat.",
   "Ambii hormoni liberi normali completează profilul.",
   "TSH supresat + fT3↑ este T3-toxicoza.",
   "TSH >10 cu fT4 scăzută este hipotiroidismul primar.",
   "TSH nedetectabil cu T4/T3 crescute este tirotoxicoza."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt rândurile vecine ale tabelului, cu TSH mutată cu o treaptă."
  },
  "textbookExpressions": [
   "5-10mU/L",
   "Eutiroidism compensat"
  ]
 },
 {
  "id": "endocrinologie-adv-024",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Deficitul alimentar de iod, în datele de la sfârșitul secolului XX:",
  "options": [
   "Există ca „gușă endemică” în zone unde gușa, uneori masivă, este întâlnită cu frecvență înaltă",
   "Pacienții sunt eu- sau hipotiroidieni, în raport cu severitatea deficitului; mecanismul este hipotiroidismul de graniță cu stimulare TSH și creșterea tiroidei",
   "Din cele 500 de milioane de cazuri cu deficit de iod din India, aproximativ 2 milioane prezentau cretinism",
   "Deficitul de iod a dispărut complet după iodarea sării, inclusiv în India",
   "Cretinismul a fost documentat la 500 de milioane de indieni, gușa endemică fiind rară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Există ca „gușă endemică” în zone unde gușa, uneori masivă, este întâlnită cu frecvență înaltă — Corect: Gușa endemică masivă este cadrul epidemiologic.\n\nPacienții sunt eu- sau hipotiroidieni, în raport cu severitatea deficitului; mecanismul este hipotiroidismul de graniță cu stimulare TSH și creșterea tiroidei — Corect: Eu-/hipotiroidismul proporțional cu deficitul și stimularea TSH sunt mecanismul.\n\nDin cele 500 de milioane de cazuri cu deficit de iod din India, aproximativ 2 milioane prezentau cretinism — Corect: Cifrele 500 de milioane și 2 milioane sunt din închidere.\n\nDeficitul de iod a dispărut complet după iodarea sării, inclusiv în India — Incorect: Textul spune că iodarea are succes incomplet.\n\nCretinismul a fost documentat la 500 de milioane de indieni, gușa endemică fiind rară — Incorect: Cifrele sunt inversate: 500 de milioane au deficit, 2 milioane cretinism.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 612, Deficitul de iod (pagini PDF: 89).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    612
   ],
   "pdfPages": [
    89
   ],
   "section": "Deficitul de iod"
  },
  "learningObjective": "Reținerea magnitudinii indiene (500 de milioane / 2 milioane cretinism) și a mecanismului TSH-gușă.",
  "optionRationales": [
   "Gușa endemică masivă este cadrul epidemiologic.",
   "Eu-/hipotiroidismul proporțional cu deficitul și stimularea TSH sunt mecanismul.",
   "Cifrele 500 de milioane și 2 milioane sunt din închidere.",
   "Textul spune că iodarea are succes incomplet.",
   "Cifrele sunt inversate: 500 de milioane au deficit, 2 milioane cretinism."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează 500 de milioane versus 2 milioane și neagă persistența problemei după iodarea sării."
  },
  "textbookExpressions": [
   "500 de milioane",
   "2 milioane"
  ]
 },
 {
  "id": "endocrinologie-adv-025",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Diagnosticul diferențial al hipertiroidismului cu anxietatea se sprijină pe:",
  "options": [
   "Markeri clinici pozitivi: semne oculare, gușă difuză, miopatie proximală și scădere ponderală",
   "Circulația hiperdinamică cu tegumente periferice calde, în contrast cu mâinile reci și umede din anxietate",
   "Mâinile reci și umede ca semn de hipertiroidism, gușa fiind rară în Graves",
   "Pierderea în greutate cu apetit scăzut ca singurul marker de anxietate",
   "Absența semnelor oculare și a gușii ca argument pentru Graves"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Markeri clinici pozitivi: semne oculare, gușă difuză, miopatie proximală și scădere ponderală — Corect: Cei patru markeri pozitivi sunt lista din paragraf.\n\nCirculația hiperdinamică cu tegumente periferice calde, în contrast cu mâinile reci și umede din anxietate — Corect: Contrastul cald versus rece-umed este fraza-cheie.\n\nMâinile reci și umede ca semn de hipertiroidism, gușa fiind rară în Graves — Incorect: Mâinile reci umede sunt ale anxietății, nu ale hipertiroidismului.\n\nPierderea în greutate cu apetit scăzut ca singurul marker de anxietate — Incorect: Pierderea în greutate cu apetit păstrat/crescut este utilă pentru hipertiroidism.\n\nAbsența semnelor oculare și a gușii ca argument pentru Graves — Incorect: Semnele oculare și gușa sunt tocmai markerii pozitivi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 616, Diagnostic diferențial — Anxietate versus hipertiroidism (pagini PDF: 93).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    616
   ],
   "pdfPages": [
    93
   ],
   "section": "Diagnostic diferențial — Anxietate versus hipertiroidism"
  },
  "learningObjective": "Contrastarea tegumentelor calde hiperdinamice și a pachetului ocular/gușă/miopatie/scădere ponderală de mâinile reci umede ale anxietății.",
  "optionRationales": [
   "Cei patru markeri pozitivi sunt lista din paragraf.",
   "Contrastul cald versus rece-umed este fraza-cheie.",
   "Mâinile reci umede sunt ale anxietății, nu ale hipertiroidismului.",
   "Pierderea în greutate cu apetit păstrat/crescut este utilă pentru hipertiroidism.",
   "Semnele oculare și gușa sunt tocmai markerii pozitivi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează mâinile calde versus reci-umede, distincția centrală a paragrafului."
  },
  "textbookExpressions": [
   "mâini reci şi umede",
   "tegumente periferice calde"
  ]
 },
 {
  "id": "endocrinologie-adv-026",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "În confirmarea biochimică a hipertiroidismului sunt adevărate:",
  "options": [
   "TSH este suprimat (<0,05 mU/L), cu excepția cazurilor foarte rare de hipersecreție de TSH",
   "T3 este mai sensibilă, existând cazuri ocazionale de T3-toxicoză izolată; un nivel ridicat de fT4 sau fT3 confirmă diagnosticul",
   "TRAb de generația a treia sunt 97-99% specifice pentru boala Graves",
   "Anti-TPO și anti-Tg, prezenți în 80% din Graves, sunt 97-99% specifici și înlocuiesc TRAb",
   "Tratamentul se începe pe baza tabloului clinic, fără confirmare biochimică"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "TSH este suprimat (<0,05 mU/L), cu excepția cazurilor foarte rare de hipersecreție de TSH — Corect: Pragul <0,05 mU/L și excepția de hipersecreție TSH sunt enunțate.\n\nT3 este mai sensibilă, existând cazuri ocazionale de T3-toxicoză izolată; un nivel ridicat de fT4 sau fT3 confirmă diagnosticul — Corect: Sensibilitatea superioară a T3 și confirmarea prin fT4/fT3 sunt din listă.\n\nTRAb de generația a treia sunt 97-99% specifice pentru boala Graves — Corect: 97-99% este specificitatea TRAb de generația a treia.\n\nAnti-TPO și anti-Tg, prezenți în 80% din Graves, sunt 97-99% specifici și înlocuiesc TRAb — Incorect: Anti-TPO/Tg apar și la persoane fără patologie confirmată; specificitatea 97-99% este a TRAb.\n\nTratamentul se începe pe baza tabloului clinic, fără confirmare biochimică — Incorect: Textul cere confirmare biochimică înaintea tratamentului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 616, 611, Investigații — Hipertiroidism (pagini PDF: 93, 88).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    616,
    611
   ],
   "pdfPages": [
    93,
    88
   ],
   "section": "Investigații — Hipertiroidism"
  },
  "learningObjective": "Integrarea TSH suprimat, a sensibilității T3 și a specificității 97-99% a TRAb, distinct de anti-TPO nespecifici.",
  "optionRationales": [
   "Pragul <0,05 mU/L și excepția de hipersecreție TSH sunt enunțate.",
   "Sensibilitatea superioară a T3 și confirmarea prin fT4/fT3 sunt din listă.",
   "97-99% este specificitatea TRAb de generația a treia.",
   "Anti-TPO/Tg apar și la persoane fără patologie confirmată; specificitatea 97-99% este a TRAb.",
   "Textul cere confirmare biochimică înaintea tratamentului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută specificitatea 97-99% de pe TRAb pe anti-TPO și autorizează tratamentul fără laborator."
  },
  "textbookExpressions": [
   "97-99%",
   "T3 toxicoză"
  ]
 },
 {
  "id": "endocrinologie-adv-027",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Beta-blocantele în hipertiroidism, potrivit capitolului:",
  "options": [
   "Sunt utile pentru control simptomatic parțial rapid, multe manifestări fiind mediate simpatic; scad și conversia periferică T4→T3",
   "Se preferă preparatele fără activitate simpatomimetică intrinsică, de exemplu propranolol; nu se folosesc ca monoterapie decât în evoluția autolimitantă (tiroidită subacută)",
   "Sunt monoterapia de primă intenție în Graves, în locul antitiroidienelor",
   "Se preferă preparatele cu activitate simpatomimetică intrinsică, propranololul fiind evitat",
   "Nu influențează conversia T4 în T3"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sunt utile pentru control simptomatic parțial rapid, multe manifestări fiind mediate simpatic; scad și conversia periferică T4→T3 — Corect: Controlul simptomatic rapid și scăderea conversiei sunt cele două efecte.\n\nSe preferă preparatele fără activitate simpatomimetică intrinsică, de exemplu propranolol; nu se folosesc ca monoterapie decât în evoluția autolimitantă (tiroidită subacută) — Corect: Fără ISA, exemplul propranolol și excepția subacută sunt explicitate.\n\nSunt monoterapia de primă intenție în Graves, în locul antitiroidienelor — Incorect: Antitiroidienele, nu beta-blocantul, sunt terapia de fond a Graves.\n\nSe preferă preparatele cu activitate simpatomimetică intrinsică, propranololul fiind evitat — Incorect: Textul preferă absența ISA.\n\nNu influențează conversia T4 în T3 — Incorect: Scăderea conversiei T4→T3 este enunțată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 616, Beta-blocantele — Control simptomatic (pagini PDF: 93).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    616
   ],
   "pdfPages": [
    93
   ],
   "section": "Beta-blocantele — Control simptomatic"
  },
  "learningObjective": "Reținerea preferinței pentru absența ISA (propranolol) și a interdicției de monoterapie, exceptând tiroidita subacută.",
  "optionRationales": [
   "Controlul simptomatic rapid și scăderea conversiei sunt cele două efecte.",
   "Fără ISA, exemplul propranolol și excepția subacută sunt explicitate.",
   "Antitiroidienele, nu beta-blocantul, sunt terapia de fond a Graves.",
   "Textul preferă absența ISA.",
   "Scăderea conversiei T4→T3 este enunțată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează ISA versus non-ISA și transformă adjuvantul simptomatic în monoterapie a Graves."
  },
  "textbookExpressions": [
   "activitate simpaticomimetică",
   "tiroidita subacută"
  ]
 },
 {
  "id": "endocrinologie-adv-028",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Administrarea iodului radioactiv 131I, în detaliile de protocol, include:",
  "options": [
   "Doza empirică este de obicei 400-550 MBq, ținând seama de captarea și radiosensibilitatea variabilă",
   "Antitiroidianul se sistează cu cel puțin 4 zile înainte și nu se reîncepe mai devreme de 3 zile după",
   "Eutiroidismul se instalează de regulă în 2-3 luni; hipotiroidismul apare la majoritatea în următorii 20 de ani, circa 75% eutiroidizându-se pe termen scurt",
   "Nu există risc neoplazic crescut după IRA",
   "Doza standard este 50 MBq, antitiroidienele continuându-se fără întrerupere până în ziua administrării"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Doza empirică este de obicei 400-550 MBq, ținând seama de captarea și radiosensibilitatea variabilă — Corect: 400-550 MBq este doza empirică citată.\n\nAntitiroidianul se sistează cu cel puțin 4 zile înainte și nu se reîncepe mai devreme de 3 zile după — Corect: Cele două ferestre 4 zile și 3 zile sunt protocolul.\n\nEutiroidismul se instalează de regulă în 2-3 luni; hipotiroidismul apare la majoritatea în următorii 20 de ani, circa 75% eutiroidizându-se pe termen scurt — Corect: 2-3 luni, 75% pe termen scurt și hipotiroidismul pe 20 de ani sunt din supraveghere.\n\nNu există risc neoplazic crescut după IRA — Corect: Absența riscului neoplazic este enunțată.\n\nDoza standard este 50 MBq, antitiroidienele continuându-se fără întrerupere până în ziua administrării — Incorect: 50 MBq și continuarea ATD contrazic protocolul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 617, Iodul radioactiv — Protocol (pagini PDF: 94).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    617
   ],
   "pdfPages": [
    94
   ],
   "section": "Iodul radioactiv — Protocol"
  },
  "learningObjective": "Reținerea dozei 400-550 MBq, a ferestrelor 4 zile / 3 zile, a eutiroidiei la 2-3 luni și a hipotiroidismului pe 20 de ani.",
  "optionRationales": [
   "400-550 MBq este doza empirică citată.",
   "Cele două ferestre 4 zile și 3 zile sunt protocolul.",
   "2-3 luni, 75% pe termen scurt și hipotiroidismul pe 20 de ani sunt din supraveghere.",
   "Absența riscului neoplazic este enunțată.",
   "50 MBq și continuarea ATD contrazic protocolul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul coboară doza de zece ori și anulează fereastra de întrerupere a antitiroidienelor."
  },
  "textbookExpressions": [
   "400-550 MBq",
   "2-3 luni"
  ]
 },
 {
  "id": "endocrinologie-adv-029",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Pregătirea preoperatorie a tiroidectomiei, potrivit capitolului:",
  "options": [
   "Se realizează doar la pacienți eutiroidieni",
   "Antitiroidianul se sistează uzual cu 10-14 zile înainte",
   "Se administrează iodură de potasiu 60 mg de 3 ori pe zi, care reduce vascularizația și sinteza hormonală prin inhibarea organificării (efect Wolff–Chaikoff)",
   "Intervenția se face de preferință în tirotoxicoză necontrolată, iodura fiind inutilă",
   "Iodura de potasiu crește vascularizația, fiind evitată preoperator"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se realizează doar la pacienți eutiroidieni — Corect: Condiția eutiroidiană este prima frază.\n\nAntitiroidianul se sistează uzual cu 10-14 zile înainte — Corect: 10-14 zile este fereastra de oprire a ATD.\n\nSe administrează iodură de potasiu 60 mg de 3 ori pe zi, care reduce vascularizația și sinteza hormonală prin inhibarea organificării (efect Wolff–Chaikoff) — Corect: 60 mg × 3 și Wolff–Chaikoff sunt schema de iodură.\n\nIntervenția se face de preferință în tirotoxicoză necontrolată, iodura fiind inutilă — Incorect: Textul cere eutiroidie, nu operație pe tirotoxicoză.\n\nIodura de potasiu crește vascularizația, fiind evitată preoperator — Incorect: Iodura reduce, nu crește, vascularizația.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 617, Tratamentul chirurgical — Pregătire (pagini PDF: 94).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    617
   ],
   "pdfPages": [
    94
   ],
   "section": "Tratamentul chirurgical — Pregătire"
  },
  "learningObjective": "Asocierea eutiroidiei, a ferestrei 10-14 zile și a iodurii 60 mg × 3 (Wolff–Chaikoff) ca reducători de vascularizație.",
  "optionRationales": [
   "Condiția eutiroidiană este prima frază.",
   "10-14 zile este fereastra de oprire a ATD.",
   "60 mg × 3 și Wolff–Chaikoff sunt schema de iodură.",
   "Textul cere eutiroidie, nu operație pe tirotoxicoză.",
   "Iodura reduce, nu crește, vascularizația."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează efectul iodurii asupra vascularizației și autorizează chirurgia pe tirotoxicoză necontrolată."
  },
  "textbookExpressions": [
   "60 mg",
   "Wolff-Chaikoff"
  ]
 },
 {
  "id": "endocrinologie-adv-030",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Complicațiile tiroidectomiei, în cifrele din capitol, includ:",
  "options": [
   "Pareza de nerv laringeu în 1% din cazuri; preoperator se verifică mobilitatea corzilor vocale",
   "Hipocalcemia tranzitorie în maxim 10% din cazuri, hipoparatiroidismul permanent la mai puțin de 1%",
   "Sângerarea precoce cu compresie traheală ca urgență rară care impune suprimarea imediată a clipsurilor",
   "Pareza de nerv laringeu în 25% din cazuri, hipoparatiroidismul permanent în 30%",
   "Hipocalcemia tranzitorie lipsește, fiind înlocuită de hipertiroidism de rebound"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pareza de nerv laringeu în 1% din cazuri; preoperator se verifică mobilitatea corzilor vocale — Corect: 1% și verificarea corzilor sunt din listă.\n\nHipocalcemia tranzitorie în maxim 10% din cazuri, hipoparatiroidismul permanent la mai puțin de 1% — Corect: Maxim 10% și <1% sunt cifrele calciului.\n\nSângerarea precoce cu compresie traheală ca urgență rară care impune suprimarea imediată a clipsurilor — Corect: Sângerarea cu decompresie de urgență este prima complicație.\n\nPareza de nerv laringeu în 25% din cazuri, hipoparatiroidismul permanent în 30% — Incorect: 25% și 30% exagerează de un ordin de mărime.\n\nHipocalcemia tranzitorie lipsește, fiind înlocuită de hipertiroidism de rebound — Incorect: Hipocalcemia tranzitorie este tocmai complicația citată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 617, Complicațiile tiroidectomiei (pagini PDF: 94).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    617
   ],
   "pdfPages": [
    94
   ],
   "section": "Complicațiile tiroidectomiei"
  },
  "learningObjective": "Reținerea cifrelor 1% (laringeu), ≤10% (hipocalcemie tranzitorie) și <1% (hipoparatiroidism permanent).",
  "optionRationales": [
   "1% și verificarea corzilor sunt din listă.",
   "Maxim 10% și <1% sunt cifrele calciului.",
   "Sângerarea cu decompresie de urgență este prima complicație.",
   "25% și 30% exagerează de un ordin de mărime.",
   "Hipocalcemia tranzitorie este tocmai complicația citată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii umflă 1% și 10% la 25–30% și neagă hipocalcemia tranzitorie din aceeași listă."
  },
  "textbookExpressions": [
   "1% din cazuri",
   "maxim 10%"
  ]
 },
 {
  "id": "endocrinologie-adv-031",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Tiroidectomia „subtotală” versus „cvasitotală” în Graves sau gușa multinodulară:",
  "options": [
   "Tehnica subtotală tradițională, menită să păstreze eutiroidia fără tratament, se soldează cu recurența hipertiroidismului la 1-3% în primul an, apoi încă 1% pe an, și cu hipotiroidism la circa 10% în primul an, procent care crește în timp",
   "De aceea, tiroidectomia cvasitotală este tehnica preferată, cu hipotiroidism inevitabil dar cu risc de recidivă mult diminuat",
   "Pentru nodulul toxic unic, excizia leziunii este curativă",
   "Subtotala garantează eutiroidia definitivă, cvasitotala fiind abandonată",
   "Recurența după subtotală este nulă, hipotiroidismul apărând la 90% din prima săptămână"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tehnica subtotală tradițională, menită să păstreze eutiroidia fără tratament, se soldează cu recurența hipertiroidismului la 1-3% în primul an, apoi încă 1% pe an, și cu hipotiroidism la circa 10% în primul an, procent care crește în timp — Corect: Cifrele 1-3%, 1%/an și 10% sunt ale subtotalei.\n\nDe aceea, tiroidectomia cvasitotală este tehnica preferată, cu hipotiroidism inevitabil dar cu risc de recidivă mult diminuat — Corect: Preferința pentru cvasitotală și hipotiroidismul inevitabil sunt concluzia.\n\nPentru nodulul toxic unic, excizia leziunii este curativă — Corect: Excizia nodulului unic este curativă.\n\nSubtotala garantează eutiroidia definitivă, cvasitotala fiind abandonată — Incorect: Subtotala tocmai nu garantează eutiroidia.\n\nRecurența după subtotală este nulă, hipotiroidismul apărând la 90% din prima săptămână — Incorect: Recurența nu este nulă, iar 90% în prima săptămână nu este cifra din text.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 617, Tehnica chirurgicală — Subtotală versus cvasitotală (pagini PDF: 94).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    617
   ],
   "pdfPages": [
    94
   ],
   "section": "Tehnica chirurgicală — Subtotală versus cvasitotală"
  },
  "learningObjective": "Contrastarea recurenței 1-3% apoi 1%/an și a hipotiroidismului 10% ale subtotalei de opțiunea cvasitotală cu hipotiroidism inevitabil.",
  "optionRationales": [
   "Cifrele 1-3%, 1%/an și 10% sunt ale subtotalei.",
   "Preferința pentru cvasitotală și hipotiroidismul inevitabil sunt concluzia.",
   "Excizia nodulului unic este curativă.",
   "Subtotala tocmai nu garantează eutiroidia.",
   "Recurența nu este nulă, iar 90% în prima săptămână nu este cifra din text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă recurența 1-3% a subtotalei în zero și mută hipotiroidismul de la 10%/an la 90% în prima săptămână."
  },
  "textbookExpressions": [
   "1-3%",
   "cvasitotală"
  ]
 },
 {
  "id": "endocrinologie-adv-032",
  "topicId": "endocrinologie",
  "type": "CS",
  "stem": "Criza tiroidiană („furtuna tiroidiană”), în descrierea capitolului, se caracterizează prin:",
  "options": [
   "Agravare rapidă rară, cu mortalitate de 10%, hiperpirexie, tahicardie severă, agitație extremă, insuficiență cardiacă și disfuncție hepatică; tratament de urgență cu propranolol în doză completă, iodură de potasiu, antitiroidian, corticosteroizi și reechilibrare",
   "O formă ușoară de anxietate, fără risc vital, tratată doar prin odihnă",
   "Mortalitate de 90%, iodura de potasiu fiind contraindicată",
   "Absența tahicardiei, diagnosticul cerând doar T4 scăzută",
   "Monoterapie cu levotiroxină, corticosteroizii fiind evitați"
  ],
  "correct": [
   0
  ],
  "explanation": "Agravare rapidă rară, cu mortalitate de 10%, hiperpirexie, tahicardie severă, agitație extremă, insuficiență cardiacă și disfuncție hepatică; tratament de urgență cu propranolol în doză completă, iodură de potasiu, antitiroidian, corticosteroizi și reechilibrare — Corect: Tabloul, mortalitatea 10% și cele patru clase plus reechilibrarea sunt din paragraf.\n\nO formă ușoară de anxietate, fără risc vital, tratată doar prin odihnă — Incorect: Textul o descrie ca urgență cu mortalitate 10%, nu ca anxietate.\n\nMortalitate de 90%, iodura de potasiu fiind contraindicată — Incorect: Mortalitatea citată este 10%, nu 90%; iodura face parte din tratament.\n\nAbsența tahicardiei, diagnosticul cerând doar T4 scăzută — Incorect: Tahicardia severă este cardinală.\n\nMonoterapie cu levotiroxină, corticosteroizii fiind evitați — Incorect: Levotiroxina nu este terapia furtunii; corticosteroizii inhibă manifestările.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 617, Criza tiroidiană (pagini PDF: 94).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    617
   ],
   "pdfPages": [
    94
   ],
   "section": "Criza tiroidiană"
  },
  "learningObjective": "Reținerea mortalității de 10% și a pachetului propranolol + iodură + antitiroidian + corticoid.",
  "optionRationales": [
   "Tabloul, mortalitatea 10% și cele patru clase plus reechilibrarea sunt din paragraf.",
   "Textul o descrie ca urgență cu mortalitate 10%, nu ca anxietate.",
   "Mortalitatea citată este 10%, nu 90%; iodura face parte din tratament.",
   "Tahicardia severă este cardinală.",
   "Levotiroxina nu este terapia furtunii; corticosteroizii inhibă manifestările."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii umflă mortalitatea la 90% sau o reduc la anxietate și scot iodura/corticoidul din pachetul de urgență."
  },
  "textbookExpressions": [
   "mortalitate de 10%",
   "furtuna tiroidiană"
  ]
 },
 {
  "id": "endocrinologie-adv-033",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Prevalența hipotiroidismului primar, în datele epidemiologice din capitol, este descrisă astfel:",
  "options": [
   "Peste 2% la femei în Marea Britanie, sub 0,1% la bărbați",
   "Prevalența pe parcursul vieții poate ajunge la 9% la femei și 1% la bărbați, cu vârsta medie la diagnostic în jur de 60 de ani",
   "Prevalența mondială a hipotiroidismului subclinic variază între 1% și 10%",
   "Este identică la cele două sexe (circa 20%), cu diagnostic median la 20 de ani",
   "Forma secundară hipofizară depășește 99% din cazuri, forma primară fiind rară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Peste 2% la femei în Marea Britanie, sub 0,1% la bărbați — Corect: Cifrele de prevalență UK pe sexe deschid paragraful.\n\nPrevalența pe parcursul vieții poate ajunge la 9% la femei și 1% la bărbați, cu vârsta medie la diagnostic în jur de 60 de ani — Corect: 9%, 1% și 60 de ani completează riscul pe viață.\n\nPrevalența mondială a hipotiroidismului subclinic variază între 1% și 10% — Corect: Intervalul 1-10% al formei subclinice este explicit.\n\nEste identică la cele două sexe (circa 20%), cu diagnostic median la 20 de ani — Incorect: Textul dă disociere majoră pe sexe, nu 20% identic, și diagnostic la ~60 de ani.\n\nForma secundară hipofizară depășește 99% din cazuri, forma primară fiind rară — Incorect: Hipofuncția este de obicei primară; cauza hipofizară este secundară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 611, Hipotiroidism — Epidemiologie (pagini PDF: 88).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    611
   ],
   "pdfPages": [
    88
   ],
   "section": "Hipotiroidism — Epidemiologie"
  },
  "learningObjective": "Reținerea disocierii pe sexe (>2% versus <0,1%), a riscului pe viață 9%/1% și a vârstei mediane de 60 de ani.",
  "optionRationales": [
   "Cifrele de prevalență UK pe sexe deschid paragraful.",
   "9%, 1% și 60 de ani completează riscul pe viață.",
   "Intervalul 1-10% al formei subclinice este explicit.",
   "Textul dă disociere majoră pe sexe, nu 20% identic, și diagnostic la ~60 de ani.",
   "Hipofuncția este de obicei primară; cauza hipofizară este secundară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii unifică prevalența pe sexe la 20% și inversează primar versus secundar."
  },
  "textbookExpressions": [
   "peste 2% la femei",
   "vârsta medie la diagnosticare"
  ]
 },
 {
  "id": "endocrinologie-adv-034",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Tiroidita Hashimoto, în descrierea capitolului, se caracterizează prin:",
  "options": [
   "Este mai frecventă la femei, în etapa avansată a vârstei mijlocii; produce atrofie cu regenerare și gușă, glanda fiind de obicei fermă, cauciucată",
   "Anticorpii anti-TPO sunt adesea în titruri foarte înalte (>1 000 UI/L)",
   "Pacienții sunt hipo- sau eutiroidieni, deși poate exista o fază toxică inițială („Hashi-toxicoza”); levotiroxina poate reduce gușa chiar la eutiroidieni",
   "Glanda este constant lichidă, anti-TPO lipsind, fără fază toxică posibilă",
   "Levotiroxina este inutilă dacă TSH este normal, gușa neputând regresiona"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este mai frecventă la femei, în etapa avansată a vârstei mijlocii; produce atrofie cu regenerare și gușă, glanda fiind de obicei fermă, cauciucată — Corect: Demografia, regenerarea cu gușă și consistența cauciucată sunt din deschidere.\n\nAnticorpii anti-TPO sunt adesea în titruri foarte înalte (>1 000 UI/L) — Corect: >1 000 UI/L este titrul citat.\n\nPacienții sunt hipo- sau eutiroidieni, deși poate exista o fază toxică inițială („Hashi-toxicoza”); levotiroxina poate reduce gușa chiar la eutiroidieni — Corect: Eu-/hipotiroidismul, faza toxică și regresia gușii completează.\n\nGlanda este constant lichidă, anti-TPO lipsind, fără fază toxică posibilă — Incorect: Consistența variază de la moale la dură, anti-TPO sunt înalți, Hashi-toxicoza este numită.\n\nLevotiroxina este inutilă dacă TSH este normal, gușa neputând regresiona — Incorect: Textul precizează reducerea gușii chiar fără hipotiroidism.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 612, Tiroidita Hashimoto (pagini PDF: 89).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    612
   ],
   "pdfPages": [
    89
   ],
   "section": "Tiroidita Hashimoto"
  },
  "learningObjective": "Asocierea gușii cauciucate, a titrului TPO >1 000 UI/L și a Hashi-toxicozei, plus regresia gușii sub levotiroxină.",
  "optionRationales": [
   "Demografia, regenerarea cu gușă și consistența cauciucată sunt din deschidere.",
   ">1 000 UI/L este titrul citat.",
   "Eu-/hipotiroidismul, faza toxică și regresia gușii completează.",
   "Consistența variază de la moale la dură, anti-TPO sunt înalți, Hashi-toxicoza este numită.",
   "Textul precizează reducerea gușii chiar fără hipotiroidism."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii neagă titrul TPO înalt și Hashi-toxicoza, trăsăturile centrale ale paragrafului."
  },
  "textbookExpressions": [
   ">1.000 UI/L",
   "Hashi-toxicoza"
  ]
 },
 {
  "id": "endocrinologie-adv-035",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Doza inițială de levotiroxină în hipotiroidismul primar, potrivit capitolului, este:",
  "options": [
   "100 µg zilnic la pacienții tineri și apți",
   "50 µg, crescând la 100 µg după 2-4 săptămâni, la cei cu greutate redusă, vârstnici sau fragili",
   "La boala cardiacă ischemică, mai ales dacă deficitul e sever și îndelungat, majoritatea medicilor încep cu 25 µg zilnic, crescând la 3-4 săptămâni dacă angina/ECG nu se agravează",
   "Doza uzuală de întreținere este 100-150 µg în priză unică zilnică; se evită supresia completă a TSH (risc de FA și osteoporoză)",
   "Se începe de rutină cu 300 µg la vârstnicul ischemic, ținta fiind TSH nedetectabil"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "100 µg zilnic la pacienții tineri și apți — Corect: 100 µg la tânărul apt este prima treaptă.\n\n50 µg, crescând la 100 µg după 2-4 săptămâni, la cei cu greutate redusă, vârstnici sau fragili — Corect: 50→100 µg la 2-4 săptămâni este treapta intermediară.\n\nLa boala cardiacă ischemică, mai ales dacă deficitul e sever și îndelungat, majoritatea medicilor încep cu 25 µg zilnic, crescând la 3-4 săptămâni dacă angina/ECG nu se agravează — Corect: 25 µg și intervalul 3-4 săptămâni sunt ale ischemicului.\n\nDoza uzuală de întreținere este 100-150 µg în priză unică zilnică; se evită supresia completă a TSH (risc de FA și osteoporoză) — Corect: 100-150 µg și avertismentul FA/osteoporoză închid monitorizarea.\n\nSe începe de rutină cu 300 µg la vârstnicul ischemic, ținta fiind TSH nedetectabil — Incorect: 300 µg și TSH nedetectabil contrazic prudența cardiacă și interdicția supresiei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 613, Terapia de substituție — Doze (pagini PDF: 90).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    613
   ],
   "pdfPages": [
    90
   ],
   "section": "Terapia de substituție — Doze"
  },
  "learningObjective": "Ierarhizarea 100 / 50 / 25 µg după vârstă și ischemie, plus întreținerea 100-150 µg fără supresie TSH.",
  "optionRationales": [
   "100 µg la tânărul apt este prima treaptă.",
   "50→100 µg la 2-4 săptămâni este treapta intermediară.",
   "25 µg și intervalul 3-4 săptămâni sunt ale ischemicului.",
   "100-150 µg și avertismentul FA/osteoporoză închid monitorizarea.",
   "300 µg și TSH nedetectabil contrazic prudența cardiacă și interdicția supresiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul înlocuiește 25 µg la ischemic cu 300 µg și transformă supresia TSH din risc în țintă."
  },
  "textbookExpressions": [
   "100 µg zilnic",
   "25 µg zilnic"
  ]
 },
 {
  "id": "endocrinologie-adv-036",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Hipotiroidismul de graniță sau „eutiroidismul compensat”, în conduita din capitol:",
  "options": [
   "Tratamentul cu levotiroxină este recomandat dacă TSH se păstrează constant peste 10 mU/L sau dacă există simptome, titruri înalte anti-tiroidiene ori anomalii lipidice",
   "Dacă TSH este crescut marginal, testele se repetă la 3-6 luni, o proporție semnificativă normalizându-se; evoluția spre hipotiroidism este mai frecventă la bărbați sau la anti-TPO în titru crescut",
   "Se tratează imediat orice TSH de 5,5 mU/L, retestarea fiind superfluă",
   "Proba terapeutică este inutilă, simptomele vagi de la TSH <10 mU/L răspunzând constant substituției",
   "În sarcină TSH-ul crescut poate fi lăsat netratat, fătul fiind independent de substituția maternă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Tratamentul cu levotiroxină este recomandat dacă TSH se păstrează constant peste 10 mU/L sau dacă există simptome, titruri înalte anti-tiroidiene ori anomalii lipidice — Corect: Pragul >10 și cele trei indicații suplimentare sunt din prima frază.\n\nDacă TSH este crescut marginal, testele se repetă la 3-6 luni, o proporție semnificativă normalizându-se; evoluția spre hipotiroidism este mai frecventă la bărbați sau la anti-TPO în titru crescut — Corect: 3-6 luni, normalizarea și riscul la bărbați/anti-TPO sunt din a doua.\n\nSe tratează imediat orice TSH de 5,5 mU/L, retestarea fiind superfluă — Incorect: Textul cere retestare, nu tratament imediat al valorii marginale.\n\nProba terapeutică este inutilă, simptomele vagi de la TSH <10 mU/L răspunzând constant substituției — Incorect: Simptomele vagi sub 10 mU/L răspund rar; proba terapeutică este tocmai pentru a infirma originea tiroidiană.\n\nÎn sarcină TSH-ul crescut poate fi lăsat netratat, fătul fiind independent de substituția maternă — Incorect: Se impune normalizarea TSH în sarcină pentru făt.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 613, Eutiroidismul compensat — Conduită (pagini PDF: 90).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    613
   ],
   "pdfPages": [
    90
   ],
   "section": "Eutiroidismul compensat — Conduită"
  },
  "learningObjective": "Separarea pragului TSH >10 mU/L (sau simptome/anticorpi/lipide) de retestarea la 3-6 luni a valorilor marginale.",
  "optionRationales": [
   "Pragul >10 și cele trei indicații suplimentare sunt din prima frază.",
   "3-6 luni, normalizarea și riscul la bărbați/anti-TPO sunt din a doua.",
   "Textul cere retestare, nu tratament imediat al valorii marginale.",
   "Simptomele vagi sub 10 mU/L răspund rar; proba terapeutică este tocmai pentru a infirma originea tiroidiană.",
   "Se impune normalizarea TSH în sarcină pentru făt."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă valoarea marginală într-o indicație imediată și lasă sarcina fără substituție."
  },
  "textbookExpressions": [
   "peste 10 mU/L",
   "3-6 luni mai târziu"
  ]
 },
 {
  "id": "endocrinologie-adv-037",
  "topicId": "endocrinologie",
  "type": "CS",
  "stem": "În coma mixedematoasă, doza de T3 recomandată de majoritatea medicilor, potrivit capitolului, este:",
  "options": [
   "2,5-5 µg oral sau intravenos la fiecare 8 ore, apoi creștere treptată; nu se folosesc doze mari intravenoase",
   "100 µg T4 în bolus IV unic, fără T3",
   "300 µg T3 în bolus IV, fără hidrocortizon",
   "Levotiroxină 100 µg la tânăr, T3 fiind evitată",
   "Doar reîncălzire rapidă, fără hormon tiroidian"
  ],
  "correct": [
   0
  ],
  "explanation": "2,5-5 µg oral sau intravenos la fiecare 8 ore, apoi creștere treptată; nu se folosesc doze mari intravenoase — Corect: 2,5-5 µg la 8 ore și interdicția dozelor mari IV sunt fraza de tratament.\n\n100 µg T4 în bolus IV unic, fără T3 — Incorect: Textul preferă T3 în doze mici, nu un bolus mare de T4.\n\n300 µg T3 în bolus IV, fără hidrocortizon — Incorect: Dozele mari IV sunt explicit interzise; hidrocortizonul 100 mg la 8 ore face parte din măsurile suplimentare.\n\nLevotiroxină 100 µg la tânăr, T3 fiind evitată — Incorect: Coma mixedematoasă nu urmează schema ambulatorie de 100 µg.\n\nDoar reîncălzire rapidă, fără hormon tiroidian — Incorect: Hormonul tiroidian este central; reîncălzirea este treptată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 613, Coma mixedematoasă (pagini PDF: 90).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    613
   ],
   "pdfPages": [
    90
   ],
   "section": "Coma mixedematoasă"
  },
  "learningObjective": "Reținerea ferestrei 2,5-5 µg T3 la 8 ore și a interdicției bolusului mare IV.",
  "optionRationales": [
   "2,5-5 µg la 8 ore și interdicția dozelor mari IV sunt fraza de tratament.",
   "Textul preferă T3 în doze mici, nu un bolus mare de T4.",
   "Dozele mari IV sunt explicit interzise; hidrocortizonul 100 mg la 8 ore face parte din măsurile suplimentare.",
   "Coma mixedematoasă nu urmează schema ambulatorie de 100 µg.",
   "Hormonul tiroidian este central; reîncălzirea este treptată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii înlocuiesc 2,5-5 µg la 8 ore cu boluri de 100-300 µg, pe care textul le interzice."
  },
  "textbookExpressions": [
   "2,5-5µ9",
   "hidrocortizon 100 mg"
  ]
 },
 {
  "id": "endocrinologie-adv-038",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Screeningul hipotiroidismului congenital, în datele din capitol, include:",
  "options": [
   "Incidența este de aproximativ 1 la 3 500 de nașteri",
   "Netratat și sever, produce deteriorare neurologică și intelectuală permanentă (cretinism)",
   "Screeningul neonatal prin picătură de sânge (test Guthrie) pentru TSH ridicat este eficient; terapia cu T4 inițiată în primele luni previne cretinismul",
   "Screeningul vârstnicului confuziv este abandonat, litiul și amiodarona necerând nicio monitorizare",
   "Incidența este 1 la 50 de nașteri, screeningul Guthrie fiind inutil după vârsta de 2 ani"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Incidența este de aproximativ 1 la 3 500 de nașteri — Corect: 1 la 3 500 este incidența citată.\n\nNetratat și sever, produce deteriorare neurologică și intelectuală permanentă (cretinism) — Corect: Cretinismul ca sechelă netratată este explicit.\n\nScreeningul neonatal prin picătură de sânge (test Guthrie) pentru TSH ridicat este eficient; terapia cu T4 inițiată în primele luni previne cretinismul — Corect: Guthrie și inițierea T4 în primele luni închid prevenția.\n\nScreeningul vârstnicului confuziv este abandonat, litiul și amiodarona necerând nicio monitorizare — Incorect: Screeningul vârstnicului este nerecomandat exceptând confuzia; litiul și amiodarona cer testare regulată.\n\nIncidența este 1 la 50 de nașteri, screeningul Guthrie fiind inutil după vârsta de 2 ani — Incorect: 1 la 50 exagerează incidența; fereastra utilă este în primele luni.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 613, Screening-ul hipotiroidismului (pagini PDF: 90).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    613
   ],
   "pdfPages": [
    90
   ],
   "section": "Screening-ul hipotiroidismului"
  },
  "learningObjective": "Reținerea cifrei 1/3 500, a cretinismului și a ferestrei terapeutice din primele luni de viață.",
  "optionRationales": [
   "1 la 3 500 este incidența citată.",
   "Cretinismul ca sechelă netratată este explicit.",
   "Guthrie și inițierea T4 în primele luni închid prevenția.",
   "Screeningul vârstnicului este nerecomandat exceptând confuzia; litiul și amiodarona cer testare regulată.",
   "1 la 50 exagerează incidența; fereastra utilă este în primele luni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii umflă incidența la 1/50 și anulează monitorizarea sub litiu/amiodaronă."
  },
  "textbookExpressions": [
   "1 la 3.500",
   "testul Guthrie"
  ]
 },
 {
  "id": "endocrinologie-adv-039",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Hipertiroidismul, în epidemiologia de deschidere, se caracterizează prin:",
  "options": [
   "Afectează probabil 2-5% dintre femei la un moment dat, cu raport pe sexe 5:1, cel mai adesea între 20 și 40 de ani",
   "Peste 99% din cazuri sunt cauzate de boala tiroidiană intrinscă; cauza hipofizară este extrem de rară",
   "Predomină la bărbați peste 70 de ani, cu raport 1:10, cauza hipofizară fiind >50%",
   "Boala Graves lipsește dintre cauzele frecvente, nodulul toxic acoperind 99%",
   "Forma secundară TSH-secretoare este regula la femeia tânără"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Afectează probabil 2-5% dintre femei la un moment dat, cu raport pe sexe 5:1, cel mai adesea între 20 și 40 de ani — Corect: Cifrele 2-5%, 5:1 și 20-40 de ani deschid paragraful.\n\nPeste 99% din cazuri sunt cauzate de boala tiroidiană intrinscă; cauza hipofizară este extrem de rară — Corect: >99% intrinsc versus hipofizar rar este fraza următoare.\n\nPredomină la bărbați peste 70 de ani, cu raport 1:10, cauza hipofizară fiind >50% — Incorect: Textul dă predominanță feminină 20-40 de ani, nu masculină peste 70.\n\nBoala Graves lipsește dintre cauzele frecvente, nodulul toxic acoperind 99% — Incorect: Graves, gușa multinodulară toxică și nodulul solitar sunt cauzele frecvente.\n\nForma secundară TSH-secretoare este regula la femeia tânără — Incorect: Cauza hipofizară este extrem de rară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 614, Hipertiroidismul — Epidemiologie (pagini PDF: 91).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    614
   ],
   "pdfPages": [
    91
   ],
   "section": "Hipertiroidismul — Epidemiologie"
  },
  "learningObjective": "Reținerea ferestrei 2-5% / 5:1 / 20-40 ani și a originii intrinsci >99%.",
  "optionRationales": [
   "Cifrele 2-5%, 5:1 și 20-40 de ani deschid paragraful.",
   ">99% intrinsc versus hipofizar rar este fraza următoare.",
   "Textul dă predominanță feminină 20-40 de ani, nu masculină peste 70.",
   "Graves, gușa multinodulară toxică și nodulul solitar sunt cauzele frecvente.",
   "Cauza hipofizară este extrem de rară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează sexul/vârsta și mută etiologia de la >99% intrinsc la hipofizar."
  },
  "textbookExpressions": [
   "2-5% din toate femeile",
   "raport pe sexe de 5:1"
  ]
 },
 {
  "id": "endocrinologie-adv-040",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Tirotoxicoza indusă de inhibitorii punctului de control imun, în datele din capitol, include:",
  "options": [
   "Ipilimumab, pembrolizumab și nivolumab provoacă irAE endocrine: tiroidită 15%, hipofizită 9%, adrenalită 1%, diabet zaharat tip 1 <1%",
   "Tiroidita este cea mai frecventă irAE endocrină și apare între 3 și 12 săptămâni de la inițiere",
   "Tratamentul: beta-blocante, analgezice și, mai rar, antitiroidiene dacă tirotoxicoza persistă, mai ales la simptomatici",
   "Diabetul de tip 1 este irAE-ul endocrin dominant (15%), tiroidita fiind rară (<1%)",
   "Debutul este după 5 ani, fără tratament simptomatic posibil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ipilimumab, pembrolizumab și nivolumab provoacă irAE endocrine: tiroidită 15%, hipofizită 9%, adrenalită 1%, diabet zaharat tip 1 <1% — Corect: Cele patru procente irAE sunt din listă.\n\nTiroidita este cea mai frecventă irAE endocrină și apare între 3 și 12 săptămâni de la inițiere — Corect: 15% și 3-12 săptămâni definesc tiroidita ca cea mai frecventă.\n\nTratamentul: beta-blocante, analgezice și, mai rar, antitiroidiene dacă tirotoxicoza persistă, mai ales la simptomatici — Corect: Beta-blocant, analgezic și ATD ocazional sunt conduita.\n\nDiabetul de tip 1 este irAE-ul endocrin dominant (15%), tiroidita fiind rară (<1%) — Incorect: Cifrele sunt inversate: tiroidita 15%, DZ1 <1%.\n\nDebutul este după 5 ani, fără tratament simptomatic posibil — Incorect: Fereastra este 3-12 săptămâni, nu 5 ani.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 615, Tirotoxicoza indusă de imunoterapie (pagini PDF: 92).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    615
   ],
   "pdfPages": [
    92
   ],
   "section": "Tirotoxicoza indusă de imunoterapie"
  },
  "learningObjective": "Reținerea ierarhiei 15/9/1/<1% și a ferestrei 3-12 săptămâni, plus conduita simptomatică.",
  "optionRationales": [
   "Cele patru procente irAE sunt din listă.",
   "15% și 3-12 săptămâni definesc tiroidita ca cea mai frecventă.",
   "Beta-blocant, analgezic și ATD ocazional sunt conduita.",
   "Cifrele sunt inversate: tiroidita 15%, DZ1 <1%.",
   "Fereastra este 3-12 săptămâni, nu 5 ani."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează 15% (tiroidită) cu <1% (DZ1) și mută debutul la 5 ani."
  },
  "textbookExpressions": [
   "tiroidită (15%)",
   "3 și 12 săptămâni"
  ]
 },
 {
  "id": "endocrinologie-adv-041",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Carbimazolul în hipertiroidism, potrivit Cadranului 21.30 și textului, se caracterizează prin:",
  "options": [
   "Doza inițială uzuală este 20-40 mg zilnic (la 8 ore sau în priză unică); metabolitul activ este tiamazolul (metimazolul)",
   "Agranulocitoza apare la 0,1%; pacienții trebuie avertizați să se prezinte și să-și controleze leucograma la febră sau disfagie nejustificată",
   "Sinteza hormonală scade rapid, dar T4 are timp de înjumătățire de 7 zile, deci beneficiul clinic apare abia la 10-20 de zile",
   "Erupțiile cutanate sunt mai frecvente și necesită de obicei schimbarea medicamentului; la toxicitate sub carbimazol se poate trece pe PTU și vice-versa",
   "Doza inițială este 2 mg/săptămână, agranulocitoza lipsind, tiamazolul fiind un metabolit inactiv"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Doza inițială uzuală este 20-40 mg zilnic (la 8 ore sau în priză unică); metabolitul activ este tiamazolul (metimazolul) — Corect: 20-40 mg și tiamazolul ca metabolit activ sunt din cadran.\n\nAgranulocitoza apare la 0,1%; pacienții trebuie avertizați să se prezinte și să-și controleze leucograma la febră sau disfagie nejustificată — Corect: 0,1% și avertismentul febră/disfagie sunt din textul de siguranță.\n\nSinteza hormonală scade rapid, dar T4 are timp de înjumătățire de 7 zile, deci beneficiul clinic apare abia la 10-20 de zile — Corect: 7 zile și 10-20 de zile explică latența clinică.\n\nErupțiile cutanate sunt mai frecvente și necesită de obicei schimbarea medicamentului; la toxicitate sub carbimazol se poate trece pe PTU și vice-versa — Corect: Schimbarea preparatului la erupție/toxicitate este conduita de la începutul paginii următoare.\n\nDoza inițială este 2 mg/săptămână, agranulocitoza lipsind, tiamazolul fiind un metabolit inactiv — Incorect: 2 mg/săptămână și absența agranulocitozei contrazic cadranul; tiamazolul este metabolitul activ.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 616, 617, Cadranul 21.30 — Carbimazol (pagini PDF: 93, 94).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    616,
    617
   ],
   "pdfPages": [
    93,
    94
   ],
   "section": "Cadranul 21.30 — Carbimazol"
  },
  "learningObjective": "Integrarea dozei 20-40 mg, a agranulocitozei 0,1%, a latenței 10-20 zile și a substituirii PTU la toxicitate.",
  "optionRationales": [
   "20-40 mg și tiamazolul ca metabolit activ sunt din cadran.",
   "0,1% și avertismentul febră/disfagie sunt din textul de siguranță.",
   "7 zile și 10-20 de zile explică latența clinică.",
   "Schimbarea preparatului la erupție/toxicitate este conduita de la începutul paginii următoare.",
   "2 mg/săptămână și absența agranulocitozei contrazic cadranul; tiamazolul este metabolitul activ."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul coboară doza la 2 mg și neagă agranulocitoza 0,1% din același cadran."
  },
  "textbookExpressions": [
   "20-40 mg",
   "agranulocitoză (0,1%)"
  ]
 },
 {
  "id": "endocrinologie-adv-042",
  "topicId": "endocrinologie",
  "type": "CS",
  "stem": "La fătul unei mame cu antecedente de Graves, un ritm cardiac persistent peste:",
  "options": [
   "160/minut este înalt sugestiv pentru hipertiroidism fetal, caz în care mamei i se aplică PTU și/sau propranolol",
   "120/minut impune iod radioactiv matern",
   "90/minut definește hipotiroidismul fetal și contraindică PTU",
   "200/minut este pragul de eutiroidie fetală",
   "Ritmul fetal nu se monitorizează, TSI neputând traversa placenta"
  ],
  "correct": [
   0
  ],
  "explanation": "160/minut este înalt sugestiv pentru hipertiroidism fetal, caz în care mamei i se aplică PTU și/sau propranolol — Corect: >160/min și PTU/propranolol sunt fraza din paragraf.\n\n120/minut impune iod radioactiv matern — Incorect: IRA este absolut contraindicat în sarcină.\n\n90/minut definește hipotiroidismul fetal și contraindică PTU — Incorect: 90/min nu este pragul citat; PTU este tocmai tratamentul hipertiroidismului fetal.\n\n200/minut este pragul de eutiroidie fetală — Incorect: 200/min nu este definit ca eutiroidie.\n\nRitmul fetal nu se monitorizează, TSI neputând traversa placenta — Incorect: TSI persistă și stimulează tiroida fetală; ritmul se monitorizează lunar.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 618, Fătul și boala Graves maternă (pagini PDF: 95).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    618
   ],
   "pdfPages": [
    95
   ],
   "section": "Fătul și boala Graves maternă"
  },
  "learningObjective": "Reținerea pragului >160/min ca indicator de hipertiroidism fetal și a conduitei PTU/propranolol.",
  "optionRationales": [
   ">160/min și PTU/propranolol sunt fraza din paragraf.",
   "IRA este absolut contraindicat în sarcină.",
   "90/min nu este pragul citat; PTU este tocmai tratamentul hipertiroidismului fetal.",
   "200/min nu este definit ca eutiroidie.",
   "TSI persistă și stimulează tiroida fetală; ritmul se monitorizează lunar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută pragul 160/min spre 90 sau 200 și reintroduc iodul radioactiv, contraindicat în sarcină."
  },
  "textbookExpressions": [
   "160/minut",
   "PTU"
  ]
 },
 {
  "id": "endocrinologie-adv-043",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Evaluarea nodulului tiroidian, în cifrele de risc din capitol, include:",
  "options": [
   "Riscul de malignitate este de 5% la persoanele cu nodul solitar sau nodul dominant într-o gușă multinodulară",
   "FNA are o rată de 5% rezultate fals-negative; nodulul presupus benign neexcizat necesită urmărire periodică",
   "Un nodul cald la scintigrafie este doar rareori malign; un nodul rece este malign în doar 10% din cazuri, FNA înlocuind practic scintigrafia diagnostică",
   "Un nodul rece confirmă carcinomul în 90% din cazuri, FNA fiind superfluă",
   "Rata de fals-negativ FNA este nulă, urmărirea fiind inutilă după o citologie benignă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Riscul de malignitate este de 5% la persoanele cu nodul solitar sau nodul dominant într-o gușă multinodulară — Corect: 5% este riscul citat pentru nodulul solitar/dominant.\n\nFNA are o rată de 5% rezultate fals-negative; nodulul presupus benign neexcizat necesită urmărire periodică — Corect: 5% fals-negativ și urmărirea sunt precizate.\n\nUn nodul cald la scintigrafie este doar rareori malign; un nodul rece este malign în doar 10% din cazuri, FNA înlocuind practic scintigrafia diagnostică — Corect: Nodulul cald rar malign și 10% la cel rece, cu FNA dominantă, închid paragraful.\n\nUn nodul rece confirmă carcinomul în 90% din cazuri, FNA fiind superfluă — Incorect: Doar 10% dintre nodulii reci sunt maligni; FNA este centrală.\n\nRata de fals-negativ FNA este nulă, urmărirea fiind inutilă după o citologie benignă — Incorect: Rata de 5% fals-negativ impune consiliere și urmărire.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 621, Gușa — FNA și scintigrafie (pagini PDF: 96).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    621
   ],
   "pdfPages": [
    96
   ],
   "section": "Gușa — FNA și scintigrafie"
  },
  "learningObjective": "Separarea riscului 5%, a fals-negativelor 5% și a malignității de 10% a nodulului rece.",
  "optionRationales": [
   "5% este riscul citat pentru nodulul solitar/dominant.",
   "5% fals-negativ și urmărirea sunt precizate.",
   "Nodulul cald rar malign și 10% la cel rece, cu FNA dominantă, închid paragraful.",
   "Doar 10% dintre nodulii reci sunt maligni; FNA este centrală.",
   "Rata de 5% fals-negativ impune consiliere și urmărire."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă nodulul rece din risc 10% în confirmare 90% și anulează fals-negativul FNA."
  },
  "textbookExpressions": [
   "risc de malignitate de 5%",
   "10% din cazuri"
  ]
 },
 {
  "id": "endocrinologie-adv-044",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Carcinomul medular tiroidian, în datele genetice din capitol:",
  "options": [
   "Aproximativ 25% dintre pacienții diagnosticați prezintă o mutație RET, chiar în absența altor manifestări MEN 2, de unde consilierea genetică și screeningul familial",
   "Persoanele cu mutații în cadrul MEN 2 sunt sfătuite să se supună tiroidectomiei profilactice încă de la vârsta de 5 ani, pentru a preveni CMT",
   "Mutația RET este absentă în CMT sporadic, screeningul familial fiind inutil după 25%",
   "Tiroidectomia profilactică se amână până după 50 de ani, mutația RET neavând impact în copilărie",
   "Vandetanibul și cabozantinibul sunt inutile în formele avansate, chirurgia fiind evitată"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Aproximativ 25% dintre pacienții diagnosticați prezintă o mutație RET, chiar în absența altor manifestări MEN 2, de unde consilierea genetică și screeningul familial — Corect: 25% RET fără alte manifestări MEN 2 și screeningul familial sunt din deschidere.\n\nPersoanele cu mutații în cadrul MEN 2 sunt sfătuite să se supună tiroidectomiei profilactice încă de la vârsta de 5 ani, pentru a preveni CMT — Corect: Vârsta de 5 ani pentru tiroidectomia profilactică este explicită.\n\nMutația RET este absentă în CMT sporadic, screeningul familial fiind inutil după 25% — Incorect: Mutația poate exista fără alte manifestări MEN 2; screeningul rămâne relevant.\n\nTiroidectomia profilactică se amână până după 50 de ani, mutația RET neavând impact în copilărie — Incorect: Profilaxia este de la 5 ani, nu de la 50.\n\nVandetanibul și cabozantinibul sunt inutile în formele avansate, chirurgia fiind evitată — Incorect: Textul citează beneficiu al vandetanibului/cabozantinibului în CMT avansat; chirurgia (totală + evidare) rămâne metoda uzuală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 622, Carcinomul medular — Genetică (pagini PDF: 97).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    622
   ],
   "pdfPages": [
    97
   ],
   "section": "Carcinomul medular — Genetică"
  },
  "learningObjective": "Reținerea cifrei 25% RET și a tiroidectomiei profilactice de la 5 ani în MEN 2.",
  "optionRationales": [
   "25% RET fără alte manifestări MEN 2 și screeningul familial sunt din deschidere.",
   "Vârsta de 5 ani pentru tiroidectomia profilactică este explicită.",
   "Mutația poate exista fără alte manifestări MEN 2; screeningul rămâne relevant.",
   "Profilaxia este de la 5 ani, nu de la 50.",
   "Textul citează beneficiu al vandetanibului/cabozantinibului în CMT avansat; chirurgia (totală + evidare) rămâne metoda uzuală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii amână profilaxia de la 5 ani la 50 de ani și anulează relevanța RET fără fenotip MEN 2 complet."
  },
  "textbookExpressions": [
   "25% dintre pacienţii",
   "vârsta de 5 ani"
  ]
 },
 {
  "id": "endocrinologie-adv-045",
  "topicId": "endocrinologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la hipotiroidismul atrofic autoimun, în epidemiologia din capitol:",
  "options": [
   "Este cea mai frecventă cauză de hipotiroidism; forma atrofică este de șase ori mai frecventă la femei, iar incidența crește cu vârsta",
   "Predomină la bărbații tineri, raportul pe sexe fiind 1:6 în favoarea bărbaților",
   "Este aproape totdeauna secundar hipofizar, fără autoanticorpi",
   "Incidența scade odată cu vârsta, forma atrofică fiind rară la femei",
   "Nu se asociază cu anemia pernicioasă, vitiligo sau alte insuficiențe endocrine"
  ],
  "correct": [
   0
  ],
  "explanation": "Este cea mai frecventă cauză de hipotiroidism; forma atrofică este de șase ori mai frecventă la femei, iar incidența crește cu vârsta — Corect: Șase ori mai frecvent la femei, creșterea cu vârsta și asocierea autoimună sunt din paragraf.\n\nPredomină la bărbații tineri, raportul pe sexe fiind 1:6 în favoarea bărbaților — Incorect: Raportul 6:1 este în favoarea femeilor, nu a bărbaților.\n\nEste aproape totdeauna secundar hipofizar, fără autoanticorpi — Incorect: Hipofuncția este de obicei primară tiroidiană, nu hipofizară.\n\nIncidența scade odată cu vârsta, forma atrofică fiind rară la femei — Incorect: Incidența crește, nu scade, cu vârsta.\n\nNu se asociază cu anemia pernicioasă, vitiligo sau alte insuficiențe endocrine — Incorect: Textul asociază explicit pernicioasa, vitiligo și alte insuficiențe endocrine.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 611, Hipotiroidismul atrofic autoimun (pagini PDF: 88).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    611
   ],
   "pdfPages": [
    88
   ],
   "section": "Hipotiroidismul atrofic autoimun"
  },
  "learningObjective": "Reținerea statutului de cauză cea mai frecventă și a predominanței feminine de 6:1, cu creșterea incidenței la vârstă.",
  "optionRationales": [
   "Șase ori mai frecvent la femei, creșterea cu vârsta și asocierea autoimună sunt din paragraf.",
   "Raportul 6:1 este în favoarea femeilor, nu a bărbaților.",
   "Hipofuncția este de obicei primară tiroidiană, nu hipofizară.",
   "Incidența crește, nu scade, cu vârsta.",
   "Textul asociază explicit pernicioasa, vitiligo și alte insuficiențe endocrine."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează raportul 6:1 pe sexe și mută etiologia de la autoimun primar la hipofizar."
  },
  "textbookExpressions": [
   "de şase ori mai frecventă",
   "anemia pernicioasă"
  ]
 },
 {
  "id": "endocrinologie-adv-046",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Anticorpii anti-tiroidieni, în datele serologice de deschidere, se caracterizează prin:",
  "options": [
   "Antigenul anticorpilor microsomali este peroxidaza tiroidiană (TPO); anti-TPO se găsesc la până la 20% din populația normală, mai ales femei în vârstă",
   "Doar 10-20% dintre purtătorii de anti-TPO din populația generală dezvoltă hipotiroidism manifest",
   "Ocazional, hipotiroidismul este intermitent, cu recuperare; anticorpii blocanți ai receptorului TSH sunt uneori implicați",
   "Anti-TPO sunt absenți la eutiroidieni, iar 90% dintre purtători evoluează rapid spre mixedem",
   "TRAb sunt nespecifici, fiind prezenți identic în populația generală și în Hashimoto"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Antigenul anticorpilor microsomali este peroxidaza tiroidiană (TPO); anti-TPO se găsesc la până la 20% din populația normală, mai ales femei în vârstă — Corect: Cei 20% din populația normală și TPO ca antigen microsomal sunt din listă.\n\nDoar 10-20% dintre purtătorii de anti-TPO din populația generală dezvoltă hipotiroidism manifest — Corect: Doar 10-20% dintre aceste femei/purtători dezvoltă hipotiroidism manifest.\n\nOcazional, hipotiroidismul este intermitent, cu recuperare; anticorpii blocanți ai receptorului TSH sunt uneori implicați — Corect: Forma intermitentă cu TRAb blocanți este din paragraful atrofic.\n\nAnti-TPO sunt absenți la eutiroidieni, iar 90% dintre purtători evoluează rapid spre mixedem — Incorect: Textul dă anti-TPO la eutiroidieni și progresie doar la 10-20%, nu la 90%.\n\nTRAb sunt nespecifici, fiind prezenți identic în populația generală și în Hashimoto — Incorect: TRAb sunt descriși ca specifici pentru Graves.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 611, Anticorpii anti-tiroidieni; Hipotiroidismul atrofic (pagini PDF: 88).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    611
   ],
   "pdfPages": [
    88
   ],
   "section": "Anticorpii anti-tiroidieni; Hipotiroidismul atrofic"
  },
  "learningObjective": "Separarea prevalenței de 20% a anti-TPO de rata de 10-20% de progresie și de rolul ocazional al TRAb blocanți.",
  "optionRationales": [
   "Cei 20% din populația normală și TPO ca antigen microsomal sunt din listă.",
   "Doar 10-20% dintre aceste femei/purtători dezvoltă hipotiroidism manifest.",
   "Forma intermitentă cu TRAb blocanți este din paragraful atrofic.",
   "Textul dă anti-TPO la eutiroidieni și progresie doar la 10-20%, nu la 90%.",
   "TRAb sunt descriși ca specifici pentru Graves."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii umflă progresia de la 10-20% la 90% și fac din TRAb un marker nespecific de Hashimoto."
  },
  "textbookExpressions": [
   "până la 20%",
   "10-20% dintre acestea"
  ]
 },
 {
  "id": "endocrinologie-adv-047",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Tiroidita postpartum, în descrierea capitolului, se recunoaște prin:",
  "options": [
   "Fenomen de obicei tranzitoriu după sarcină, care poate produce hiper-, hipotiroidism sau pe ambele, secvențial; histologic este o tiroidită limfocitară",
   "Procesul este în mod normal autolimitant; dacă se pozitivează anticorpii convenționali, riscul de hipotiroidism permanent este mare",
   "Poate fi diagnosticată eronat ca depresie postnatală, de unde necesitatea evaluării funcției tiroidiene în această situație",
   "Este o tiroidită granulomatoasă virală, fără risc de hipotiroidism ulterior",
   "Depresia postnatală exclude disfuncția tiroidiană, testarea TSH fiind superfluă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Fenomen de obicei tranzitoriu după sarcină, care poate produce hiper-, hipotiroidism sau pe ambele, secvențial; histologic este o tiroidită limfocitară — Corect: Tranzitoriul, secvența și limfocitele deschid definiția.\n\nProcesul este în mod normal autolimitant; dacă se pozitivează anticorpii convenționali, riscul de hipotiroidism permanent este mare — Corect: Autolimitarea versus permanența la anticorpi pozitivi este fraza următoare.\n\nPoate fi diagnosticată eronat ca depresie postnatală, de unde necesitatea evaluării funcției tiroidiene în această situație — Corect: Confuzia cu depresia postnatală este avertismentul clinic.\n\nEste o tiroidită granulomatoasă virală, fără risc de hipotiroidism ulterior — Incorect: Granulomatoza virală este a tiroiditei De Quervain, nu postpartum.\n\nDepresia postnatală exclude disfuncția tiroidiană, testarea TSH fiind superfluă — Incorect: Textul cere tocmai testarea tiroidiană când tabloul mimează depresia.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 612, Tiroidita postpartum (pagini PDF: 89).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    612
   ],
   "pdfPages": [
    89
   ],
   "section": "Tiroidita postpartum"
  },
  "learningObjective": "Asocierea secvenței hiper/hipo, a histologiei limfocitare și a capcanei de depresie postnatală, plus riscul de permanență dacă se pozitivează anticorpii.",
  "optionRationales": [
   "Tranzitoriul, secvența și limfocitele deschid definiția.",
   "Autolimitarea versus permanența la anticorpi pozitivi este fraza următoare.",
   "Confuzia cu depresia postnatală este avertismentul clinic.",
   "Granulomatoza virală este a tiroiditei De Quervain, nu postpartum.",
   "Textul cere tocmai testarea tiroidiană când tabloul mimează depresia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută entitatea pe De Quervain viral și anulează screeningul tiroidian din depresia postnatală."
  },
  "textbookExpressions": [
   "Tiroidita postpartum",
   "depresie postnatală"
  ]
 },
 {
  "id": "endocrinologie-adv-048",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Sindromul Pendred, ca formă familială de dishormonogeneză, se caracterizează prin:",
  "options": [
   "Asociere cu surditate senzorială printr-o deleție pe cromozomul 7, care produce un defect al transportorului pendrina",
   "Hipotiroidism cu gușă, în cadrul defectelor genetice rare de sinteză hormonală",
   "Mutație RET, identică carcinomului medular familial",
   "Deleție pe cromozomul 21, fără afectare auditivă",
   "Gușa lipsește, surditatea fiind de conducere, nu senzorială"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Asociere cu surditate senzorială printr-o deleție pe cromozomul 7, care produce un defect al transportorului pendrina — Corect: Deleția de cromozom 7 și pendrina sunt mecanismul citat.\n\nHipotiroidism cu gușă, în cadrul defectelor genetice rare de sinteză hormonală — Corect: Hipotiroidismul cu gușă este cadrul dishormonogenezei.\n\nMutație RET, identică carcinomului medular familial — Incorect: RET ține de CMT/MEN 2, nu de Pendred.\n\nDeleție pe cromozomul 21, fără afectare auditivă — Incorect: Locusul citat este cromozomul 7, nu 21.\n\nGușa lipsește, surditatea fiind de conducere, nu senzorială — Incorect: Surditatea este senzorială; gușa face parte din fenotip.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 612, Dishormonogeneza — Sindromul Pendred (pagini PDF: 89).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    612
   ],
   "pdfPages": [
    89
   ],
   "section": "Dishormonogeneza — Sindromul Pendred"
  },
  "learningObjective": "Reținerea perechii cromozom 7 / pendrină / surditate senzorială, distinct de RET și de surditatea de conducere.",
  "optionRationales": [
   "Deleția de cromozom 7 și pendrina sunt mecanismul citat.",
   "Hipotiroidismul cu gușă este cadrul dishormonogenezei.",
   "RET ține de CMT/MEN 2, nu de Pendred.",
   "Locusul citat este cromozomul 7, nu 21.",
   "Surditatea este senzorială; gușa face parte din fenotip."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută defectul pe RET sau cromozomul 21 și transformă surditatea senzorială în una de conducere."
  },
  "textbookExpressions": [
   "cromozomului 7",
   "pendrina"
  ]
 },
 {
  "id": "endocrinologie-adv-049",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Anomaliile de laborator asociate hipotiroidismului primar, dincolo de TSH/fT4, includ:",
  "options": [
   "Anemie de obicei normocromă-normocitară, dar care poate fi macrocitară (uneori prin anemie pernicioasă asociată) sau microcitară (menoragie sau boală celiacă nediagnosticată)",
   "Creșterea AST (mușchi și/sau ficat) și a creatinkinazei, cu miopatie asociată",
   "Hipercolesterolemie și hipertrigliceridemie",
   "Hiponatremie prin creșterea ADH și eliminare defectuoasă a apei libere",
   "Poliglobulie cu hipokaliemie, AST și CK fiind constant scăzute"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Anemie de obicei normocromă-normocitară, dar care poate fi macrocitară (uneori prin anemie pernicioasă asociată) sau microcitară (menoragie sau boală celiacă nediagnosticată) — Corect: Spectrul normo/macro/micro al anemiei este enumerat explicit.\n\nCreșterea AST (mușchi și/sau ficat) și a creatinkinazei, cu miopatie asociată — Corect: AST și CK cu miopatie sunt rânduri consecutive.\n\nHipercolesterolemie și hipertrigliceridemie — Corect: Perechea lipidică este un rând separat.\n\nHiponatremie prin creșterea ADH și eliminare defectuoasă a apei libere — Corect: Mecanismul ADH/apă liberă închide lista.\n\nPoliglobulie cu hipokaliemie, AST și CK fiind constant scăzute — Incorect: Textul descrie anemie, nu poliglobulie, și enzime crescute, nu scăzute.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 613, Investigarea hipotiroidismului primar — Anomalii asociate (pagini PDF: 90).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    613
   ],
   "pdfPages": [
    90
   ],
   "section": "Investigarea hipotiroidismului primar — Anomalii asociate"
  },
  "learningObjective": "Integrarea celor trei tipuri de anemie, a AST/CK, a dislipidemiei și a hiponatremiei prin ADH.",
  "optionRationales": [
   "Spectrul normo/macro/micro al anemiei este enumerat explicit.",
   "AST și CK cu miopatie sunt rânduri consecutive.",
   "Perechea lipidică este un rând separat.",
   "Mecanismul ADH/apă liberă închide lista.",
   "Textul descrie anemie, nu poliglobulie, și enzime crescute, nu scăzute."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează anemia în poliglobulie și AST/CK din creștere în scădere."
  },
  "textbookExpressions": [
   "creatin kinază",
   "Hiponatremie"
  ]
 },
 {
  "id": "endocrinologie-adv-050",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Monitorizarea levotiroxinei și situațiile speciale din capitol includ:",
  "options": [
   "În sarcină, doza de T4 se crește adesea cu 25-50 µg, pentru a menține TSH în intervalul mai strict 0,3-2,5 mU/L",
   "Dificultățile de normalizare a TSH impun gândirea la complianță, la fier, calciu și inhibitori de pompă de protoni (interferă cu absorbția) și la boala celiacă nediagnosticată",
   "Studiile randomizate nu au evidențiat un beneficiu constant al combinației T4+T3 asupra calității vieții",
   "Se scade T4 în sarcină, ținta fiind TSH >10 mU/L, PPI-urile crescând absorbția",
   "Combinația T4+T3 este superioară T4 în toate RCT-urile de calitate a vieții"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În sarcină, doza de T4 se crește adesea cu 25-50 µg, pentru a menține TSH în intervalul mai strict 0,3-2,5 mU/L — Corect: 25-50 µg și fereastra 0,3-2,5 mU/L sunt ale sarcinii.\n\nDificultățile de normalizare a TSH impun gândirea la complianță, la fier, calciu și inhibitori de pompă de protoni (interferă cu absorbția) și la boala celiacă nediagnosticată — Corect: Fierul, calciul, IPP și celiaca sunt cauzele de TSH greu de normalizat.\n\nStudiile randomizate nu au evidențiat un beneficiu constant al combinației T4+T3 asupra calității vieții — Corect: Absența beneficiului constant T4+T3 este concluzia RCT.\n\nSe scade T4 în sarcină, ținta fiind TSH >10 mU/L, PPI-urile crescând absorbția — Incorect: În sarcină doza crește, nu scade; TSH-ul se strânge în jos, nu peste 10.\n\nCombinația T4+T3 este superioară T4 în toate RCT-urile de calitate a vieții — Incorect: RCT-urile nu arată beneficiu constant al T3.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 613, Monitorizarea; Sarcina; Combinația T4+T3 (pagini PDF: 90).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    613
   ],
   "pdfPages": [
    90
   ],
   "section": "Monitorizarea; Sarcina; Combinația T4+T3"
  },
  "learningObjective": "Contrastarea creșterii 25-50 µg / TSH 0,3-2,5 din sarcină de interferențele de absorbție și de absența beneficiului T3 adjunct.",
  "optionRationales": [
   "25-50 µg și fereastra 0,3-2,5 mU/L sunt ale sarcinii.",
   "Fierul, calciul, IPP și celiaca sunt cauzele de TSH greu de normalizat.",
   "Absența beneficiului constant T4+T3 este concluzia RCT.",
   "În sarcină doza crește, nu scade; TSH-ul se strânge în jos, nu peste 10.",
   "RCT-urile nu arată beneficiu constant al T3."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează titrarea din sarcină (creștere versus scădere) și transformă eșecul T4+T3 în superioritate."
  },
  "textbookExpressions": [
   "25-50µg",
   "0,3-2,5 mU/L"
  ]
 },
 {
  "id": "endocrinologie-adv-051",
  "topicId": "endocrinologie",
  "type": "CS",
  "stem": "Adenomul sau nodulul toxic solitar, ca etiologie a hipertiroidismului, reprezintă aproximativ:",
  "options": [
   "5% din cazuri; hipertiroidismul poate fi controlat medicamentos, dar afecțiunea nu remite, de regulă, după antitiroidiene",
   "50% din cazuri, cu remisiune constantă după 6 săptămâni de carbimazol",
   ">99% din cazuri, cauza hipofizară fiind superpozabilă",
   "1 din 3.500 de nașteri, ca screening neonatal",
   "0,1% din cazuri, remisiunea după ATD fiind regula"
  ],
  "correct": [
   0
  ],
  "explanation": "5% din cazuri; hipertiroidismul poate fi controlat medicamentos, dar afecțiunea nu remite, de regulă, după antitiroidiene — Corect: Cei 5% și eșecul remisiunii după ATD sunt fraza din paragraf.\n\n50% din cazuri, cu remisiune constantă după 6 săptămâni de carbimazol — Incorect: 50% și remisiunea rapidă nu sunt ale nodulului toxic.\n\n>99% din cazuri, cauza hipofizară fiind superpozabilă — Incorect: >99% descrie originea tiroidiană intrinsecă a hipertiroidismului, nu ponderea adenomului.\n\n1 din 3.500 de nașteri, ca screening neonatal — Incorect: 1/3.500 este incidența hipotiroidismului congenital.\n\n0,1% din cazuri, remisiunea după ATD fiind regula — Incorect: Remisiunea după ATD este tocmai ceea ce textul neagă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 614, Adenomul/nodulul toxic solitar (pagini PDF: 91).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    614
   ],
   "pdfPages": [
    91
   ],
   "section": "Adenomul/nodulul toxic solitar"
  },
  "learningObjective": "Reținerea ponderii de 5% și a absenței remisiunii după antitiroidiene, distinct de Graves.",
  "optionRationales": [
   "Cei 5% și eșecul remisiunii după ATD sunt fraza din paragraf.",
   "50% și remisiunea rapidă nu sunt ale nodulului toxic.",
   ">99% descrie originea tiroidiană intrinsecă a hipertiroidismului, nu ponderea adenomului.",
   "1/3.500 este incidența hipotiroidismului congenital.",
   "Remisiunea după ATD este tocmai ceea ce textul neagă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii umflă 5% spre 50% sau >99% și transformă eșecul remisiunii în regulă."
  },
  "textbookExpressions": [
   "aproximativ 5%",
   "nu remite"
  ]
 },
 {
  "id": "endocrinologie-adv-052",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Tiroidita De Quervain, în tabloul din capitol:",
  "options": [
   "Tirotoxicoză tranzitorie dintr-un proces inflamator acut, probabil viral, cu febră, stare de rău, durere cervicală, tahicardie și sensibilitate tiroidiană",
   "Testele arată tirotoxicoză inițială, VSH și vâscozitate plasmatică crescute, scintigramă cu captare suprimată în faza acută",
   "Hipotiroidism, de obicei tranzitoriu, după câteva săptămâni",
   "Tratamentul fazei acute: aspirină; prednisolon pe termen scurt în cazurile simptomatice grave",
   "Captarea scintigrafică este difuz crescută, ca în Graves, steroizii fiind evitată, iar hipotiroidismul ulterior fiind imposibil"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Tirotoxicoză tranzitorie dintr-un proces inflamator acut, probabil viral, cu febră, stare de rău, durere cervicală, tahicardie și sensibilitate tiroidiană — Corect: Clinica virală (febră, durere, sensibilitate) definește faza acută.\n\nTestele arată tirotoxicoză inițială, VSH și vâscozitate plasmatică crescute, scintigramă cu captare suprimată în faza acută — Corect: VSH/vâscozitatea și captarea suprimată sunt investigațiile.\n\nHipotiroidism, de obicei tranzitoriu, după câteva săptămâni — Corect: Hipotiroidismul tranzitoriu după săptămâni este evoluția.\n\nTratamentul fazei acute: aspirină; prednisolon pe termen scurt în cazurile simptomatice grave — Corect: Aspirina și prednisolonul scurt sunt conduita.\n\nCaptarea scintigrafică este difuz crescută, ca în Graves, steroizii fiind evitată, iar hipotiroidismul ulterior fiind imposibil — Incorect: Captarea crescută este a Graves; steroizii scurți sunt tocmai opțiunea din cazurile grave.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 614, Tiroidita De Quervain (pagini PDF: 91).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    614
   ],
   "pdfPages": [
    91
   ],
   "section": "Tiroidita De Quervain"
  },
  "learningObjective": "Asocierea febrei/VSH/captării nule de faza hipotiroidiană tardivă și de aspirină/prednisolonul scurt.",
  "optionRationales": [
   "Clinica virală (febră, durere, sensibilitate) definește faza acută.",
   "VSH/vâscozitatea și captarea suprimată sunt investigațiile.",
   "Hipotiroidismul tranzitoriu după săptămâni este evoluția.",
   "Aspirina și prednisolonul scurt sunt conduita.",
   "Captarea crescută este a Graves; steroizii scurți sunt tocmai opțiunea din cazurile grave."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul aplică scintigrama Graves (captare difuză) și interzice steroizii, inversând două trăsături ale De Quervain."
  },
  "textbookExpressions": [
   "Tiroidita De Quervain",
   "captării în faza acută"
  ]
 },
 {
  "id": "endocrinologie-adv-053",
  "topicId": "endocrinologie",
  "type": "CS",
  "stem": "La vârstnicul cu fibrilație atrială de novo, fără alte semne de tirotoxicoză, capitolul recomandă:",
  "options": [
   "Testele tiroidiene se impun, deoarece la vârstnici hipertiroidismul se prezintă frecvent prin FA, alte tahicardii și/sau insuficiență cardiacă, adesea cu estomparea celorlalte semne",
   "Ignorarea TSH, FA-ul vârstnicului fiind independent de tiroidă",
   "Iod radioactiv imediat, fără confirmare biochimică",
   "Carbimazol 2 mg săptămânal, ca screening",
   "Doar ecografie cervicală, testele hormonale fiind superflue după 70 de ani"
  ],
  "correct": [
   0
  ],
  "explanation": "Testele tiroidiene se impun, deoarece la vârstnici hipertiroidismul se prezintă frecvent prin FA, alte tahicardii și/sau insuficiență cardiacă, adesea cu estomparea celorlalte semne — Corect: FA/tahicardie/ICC cu semne estompate și testele obligatorii în orice FA sunt fraza din paragraf.\n\nIgnorarea TSH, FA-ul vârstnicului fiind independent de tiroidă — Incorect: Textul cere teste, nu ignorarea TSH.\n\nIod radioactiv imediat, fără confirmare biochimică — Incorect: IRA fără confirmare biochimică este interzisă în general, nu doar la vârstnic.\n\nCarbimazol 2 mg săptămânal, ca screening — Incorect: 2 mg/săptămână nu este o doză de screening.\n\nDoar ecografie cervicală, testele hormonale fiind superflue după 70 de ani — Incorect: Ecografia nu înlocuiește testele funcționale în FA.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 615, Hipertiroidismul la vârstnici — Fibrilația atrială (pagini PDF: 92).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    615
   ],
   "pdfPages": [
    92
   ],
   "section": "Hipertiroidismul la vârstnici — Fibrilația atrială"
  },
  "learningObjective": "Recunoașterea FA ca prezentare oligosimptomatică la vârstnic și a obligației de a doza hormonii tiroidieni.",
  "optionRationales": [
   "FA/tahicardie/ICC cu semne estompate și testele obligatorii în orice FA sunt fraza din paragraf.",
   "Textul cere teste, nu ignorarea TSH.",
   "IRA fără confirmare biochimică este interzisă în general, nu doar la vârstnic.",
   "2 mg/săptămână nu este o doză de screening.",
   "Ecografia nu înlocuiește testele funcționale în FA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii anulează testarea tiroidiană obligatorie din FA, mesajul central al paragrafului geriatrie."
  },
  "textbookExpressions": [
   "fibrilație atrială",
   "Testele tiroidiene sunt obligatorii"
  ]
 },
 {
  "id": "endocrinologie-adv-054",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Recidiva după o cură de carbimazol sau PTU, în datele de prognostic, se caracterizează prin:",
  "options": [
   "Aproximativ 50% recidivează, cei mai mulți în cei 2 ani de după încheiere, ocazional mai târziu",
   "Ciclul uzual de tratament este de 18 luni (unii folosesc 6-24 de luni)",
   "La gușile nodulare sau multinodulare voluminoase remisiunea după o cură de ATD este puțin probabilă, fiind nevoie în general de tratament radical; riscul de recidivă este mai înalt și în hipertiroidismul biochimic sever",
   "Recidiva este rară (<5%) după 18 luni, gușa multinodulară remițând constant medicamentos",
   "Severitatea biochimică inițială protejează de recidivă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Aproximativ 50% recidivează, cei mai mulți în cei 2 ani de după încheiere, ocazional mai târziu — Corect: 50% și predominanța în primii 2 ani deschid prognosticul.\n\nCiclul uzual de tratament este de 18 luni (unii folosesc 6-24 de luni) — Corect: 18 luni (6-24) este durata citată a titrării.\n\nLa gușile nodulare sau multinodulare voluminoase remisiunea după o cură de ATD este puțin probabilă, fiind nevoie în general de tratament radical; riscul de recidivă este mai înalt și în hipertiroidismul biochimic sever — Corect: Gușa nodulară voluminoasă și severitatea biochimică ca factori de recidivă închid paragraful.\n\nRecidiva este rară (<5%) după 18 luni, gușa multinodulară remițând constant medicamentos — Incorect: Textul dă ~50%, nu <5%; gușa nodulară mare nu remite medicamentos.\n\nSeveritatea biochimică inițială protejează de recidivă — Incorect: Severitatea biochimică crește, nu scade, riscul de recidivă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 616, 617, Recidiva; Durata curei de ATD (pagini PDF: 93, 94).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    616,
    617
   ],
   "pdfPages": [
    93,
    94
   ],
   "section": "Recidiva; Durata curei de ATD"
  },
  "learningObjective": "Reținerea ratei de 50% / 2 ani, a ferestrei 18 luni și a eșecului remisiunii la gușa nodulară voluminoasă.",
  "optionRationales": [
   "50% și predominanța în primii 2 ani deschid prognosticul.",
   "18 luni (6-24) este durata citată a titrării.",
   "Gușa nodulară voluminoasă și severitatea biochimică ca factori de recidivă închid paragraful.",
   "Textul dă ~50%, nu <5%; gușa nodulară mare nu remite medicamentos.",
   "Severitatea biochimică crește, nu scade, riscul de recidivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii comprimă recidiva de la 50% la <5% și transformă gușa nodulară din indicație radicală în succes medicamentos."
  },
  "textbookExpressions": [
   "În jur de 50%",
   "18 luni"
  ]
 },
 {
  "id": "endocrinologie-adv-055",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Următoarele afirmații despre fătul/neonatul din Graves maternă și despre rezistența la hormonii tiroidieni sunt adevărate:",
  "options": [
   "Hipertiroidismul neonatal se poate dezvolta deoarece TSI au un timp de înjumătățire de aproximativ 3 săptămâni; clinic: iritabilitate, absența creșterii ponderale, diaree, semne oculare",
   "Rezistența la hormonii tiroidieni, prin mutații TRβ, produce T4/T3 crescute cu TSH normal, la un pacient eutiroidian care nu necesită tratament",
   "Orbitopatia Graves este mai frecventă și evoluează mai sever la fumători",
   "Exacerbarea bolii oculare după iod radioactiv este de 15%, versus 3% sub medicație antitiroidiană; vederea este amenințată în 5-10% din cazuri",
   "TSI nu persistă după naștere, rezistența TRβ impunând ATD de rutină, iar fumatul protejând de orbitopatie"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Hipertiroidismul neonatal se poate dezvolta deoarece TSI au un timp de înjumătățire de aproximativ 3 săptămâni; clinic: iritabilitate, absența creșterii ponderale, diaree, semne oculare — Corect: Cele 3 săptămâni și tabloul neonatal deschid paragraful de neonat.\n\nRezistența la hormonii tiroidieni, prin mutații TRβ, produce T4/T3 crescute cu TSH normal, la un pacient eutiroidian care nu necesită tratament — Corect: Mutațiile receptorului și profilul eutiroidian fără tratament definesc rezistența.\n\nOrbitopatia Graves este mai frecventă și evoluează mai sever la fumători — Corect: Fumatul ca factor de severitate este explicit.\n\nExacerbarea bolii oculare după iod radioactiv este de 15%, versus 3% sub medicație antitiroidiană; vederea este amenințată în 5-10% din cazuri — Corect: 15% versus 3% și 5-10% pentru vedere închid orbitopatia.\n\nTSI nu persistă după naștere, rezistența TRβ impunând ATD de rutină, iar fumatul protejând de orbitopatie — Incorect: TSI persistă; rezistența nu se tratează de rutină cu ATD; fumatul agravează, nu protejează.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 618, Fătul; Rezistența la hormoni; Orbitopatia Graves (pagini PDF: 95).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    618
   ],
   "pdfPages": [
    95
   ],
   "section": "Fătul; Rezistența la hormoni; Orbitopatia Graves"
  },
  "learningObjective": "Integrarea t½ TSI de 3 săptămâni, a profilului T4 crescut/TSH normal din rezistență și a cifrelor 15%/3% și 5-10% ale orbitopatiei.",
  "optionRationales": [
   "Cele 3 săptămâni și tabloul neonatal deschid paragraful de neonat.",
   "Mutațiile receptorului și profilul eutiroidian fără tratament definesc rezistența.",
   "Fumatul ca factor de severitate este explicit.",
   "15% versus 3% și 5-10% pentru vedere închid orbitopatia.",
   "TSI persistă; rezistența nu se tratează de rutină cu ATD; fumatul agravează, nu protejează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru cifre/mecanisme din aceeași pagină; distractorul inversează t½ TSI, indicația de tratament a rezistenței și rolul fumatului."
  },
  "textbookExpressions": [
   "3 săptămâni",
   "15% versus 3%"
  ]
 },
 {
  "id": "endocrinologie-adv-056",
  "topicId": "endocrinologie",
  "type": "CM",
  "stem": "Carcinoamele papilare și foliculare, în epidemiologia și urmărirea din capitol, se recunosc prin:",
  "options": [
   "Papilarul reprezintă circa 70% și folicularul circa 20% din cancerele tiroidiene; peste 75% din cazuri apar la femei",
   "După ablație, TSH recombinant (tirotropina alfa, rhTSH) 900 µg în 2 doze pe 48 de ore stimulează tiroglobulina fără a întrerupe levotiroxina",
   "Papilarul este <5%, identic anaplasticului, rhTSH-ul înlocuind chirurgia",
   "Folicularul predomină la 70%, femeile fiind scutite",
   "Doza de rhTSH este 25 µg unic, după oprirea definitivă a T4"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Papilarul reprezintă circa 70% și folicularul circa 20% din cancerele tiroidiene; peste 75% din cazuri apar la femei — Corect: 70%, 20% și predominanța feminină >75% sunt din cadran/epidemiologie.\n\nDupă ablație, TSH recombinant (tirotropina alfa, rhTSH) 900 µg în 2 doze pe 48 de ore stimulează tiroglobulina fără a întrerupe levotiroxina — Corect: 900 µg, două doze în 48 de ore, fără oprirea T4, este protocolul de stimulare.\n\nPapilarul este <5%, identic anaplasticului, rhTSH-ul înlocuind chirurgia — Incorect: <5% este al anaplasticului, nu al papilarului; chirurgia rămâne de elecție.\n\nFolicularul predomină la 70%, femeile fiind scutite — Incorect: Raportul 70/20 este inversat; femeile sunt majoritare, nu scutite.\n\nDoza de rhTSH este 25 µg unic, după oprirea definitivă a T4 — Incorect: Doza citată este 900 µg × 2, tocmai pentru a evita oprirea T4.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 21, p. 621, 622, Cadranul 21.33; Urmărirea Tg cu rhTSH (pagini PDF: 96, 97).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 21,
   "printedPages": [
    621,
    622
   ],
   "pdfPages": [
    96,
    97
   ],
   "section": "Cadranul 21.33; Urmărirea Tg cu rhTSH"
  },
  "learningObjective": "Contrastarea ponderilor 70%/20% și a schemei rhTSH 900 µg × 2/48 h de anaplastic și de oprirea T4 ca unică metodă de stimulare.",
  "optionRationales": [
   "70%, 20% și predominanța feminină >75% sunt din cadran/epidemiologie.",
   "900 µg, două doze în 48 de ore, fără oprirea T4, este protocolul de stimulare.",
   "<5% este al anaplasticului, nu al papilarului; chirurgia rămâne de elecție.",
   "Raportul 70/20 este inversat; femeile sunt majoritare, nu scutite.",
   "Doza citată este 900 µg × 2, tocmai pentru a evita oprirea T4."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează 70% papilar versus 20% folicular și comprimă rhTSH-ul de 900 µg la 25 µg după oprirea T4."
  },
  "textbookExpressions": [
   "70%",
   "900µg"
  ]
 }
];
