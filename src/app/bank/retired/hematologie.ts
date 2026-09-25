import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_HEMATOLOGIE:Question[]=[
 {
  "id": "hematologie-adv-021",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "Care asociere descrie corect cele două reacții dependente de cobalamină prezentate în bibliografie?",
  "options": [
   "Metilcobalamină — metilmalonil-CoA în succinil-CoA; deoxiadenosilcobalamină — homocisteină în metionină",
   "Metilcobalamină — homocisteină în metionină; deoxiadenosilcobalamină — demetilarea metil-THF",
   "Deoxiadenosilcobalamină — metilmalonil-CoA în succinil-CoA; metilcobalamină — homocisteină în metionină",
   "Deoxiadenosilcobalamină — homocisteină în metionină; metilcobalamină — donator direct de metil în sinteza deoxitimidin-monofosfatului",
   "Metilcobalamină — donator direct de metil în sinteza deoxitimidin-monofosfatului; deoxiadenosilcobalamină — metilmalonil-CoA în succinil-CoA"
  ],
  "correct": [
   2
  ],
  "explanation": "Metilcobalamină — metilmalonil-CoA în succinil-CoA; deoxiadenosilcobalamină — homocisteină în metionină — Incorect: Coenzimele sunt inversate între reacții.\n\nMetilcobalamină — homocisteină în metionină; deoxiadenosilcobalamină — demetilarea metil-THF — Incorect: Prima relație este corectă; demetilarea metil-THF este cuplată cu reacția dependentă de metilcobalamină.\n\nDeoxiadenosilcobalamină — metilmalonil-CoA în succinil-CoA; metilcobalamină — homocisteină în metionină — Corect: Ambele asocieri sunt descrise în text; metilarea homocisteinei folosește și metil-THF.\n\nDeoxiadenosilcobalamină — homocisteină în metionină; metilcobalamină — donator direct de metil în sinteza deoxitimidin-monofosfatului — Incorect: Metilarea homocisteinei folosește metilcobalamină; donatorul pentru sinteza dTMP este metilen-THF.\n\nMetilcobalamină — donator direct de metil în sinteza deoxitimidin-monofosfatului; deoxiadenosilcobalamină — metilmalonil-CoA în succinil-CoA — Incorect: A doua relație este corectă; donatorul direct pentru sinteza dTMP este metilen-THF, nu metilcobalamina.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 334, 333, 335, Vitamina B12; Acidul folic — Metabolism (pagini PDF: 59, 58, 60).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    334,
    333,
    335
   ],
   "pdfPages": [
    59,
    58,
    60
   ],
   "section": "Vitamina B12; Acidul folic — Metabolism"
  },
  "learningObjective": "Asocierea formei de cobalamină cu substratul și sensul reacției.",
  "optionRationales": [
   "Coenzimele sunt inversate între reacții.",
   "Prima relație este corectă; demetilarea metil-THF este cuplată cu reacția dependentă de metilcobalamină.",
   "Ambele asocieri sunt descrise în text; metilarea homocisteinei folosește și metil-THF.",
   "Metilarea homocisteinei folosește metilcobalamină; donatorul pentru sinteza dTMP este metilen-THF.",
   "A doua relație este corectă; donatorul direct pentru sinteza dTMP este metilen-THF, nu metilcobalamina."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Variantele permută forme active ale aceleiași vitamine și sensuri ale reacțiilor înrudite; sunt necesare două asocieri biochimice exacte."
  },
  "textbookExpressions": [
   "deoxiadenosilcobalamina",
   "metilmalonil CoA în succinil CoA",
   "metilarea homocisteinei la metionină"
  ]
 },
 {
  "id": "hematologie-adv-022",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "Pentru fierul transportat de transferina plasmatică, care combinație între sursa majoritară, forma fierului și capacitatea unei molecule de transferină este corectă?",
  "options": [
   "Macrofagele sistemului reticuloendotelial — fier feros — doi atomi de fier",
   "Absorbția intestinală — fier feric — doi atomi de fier",
   "Macrofagele sistemului reticuloendotelial — fier feric — un atom de fier",
   "Absorbția intestinală — fier feros — un atom de fier",
   "Macrofagele sistemului reticuloendotelial — fier feric — doi atomi de fier"
  ],
  "correct": [
   4
  ],
  "explanation": "Macrofagele sistemului reticuloendotelial — fier feros — doi atomi de fier — Incorect: Sursa și numărul sunt corecte; transferina leagă fier feric, nu feros.\n\nAbsorbția intestinală — fier feric — doi atomi de fier — Incorect: Forma și numărul sunt corecte; majoritatea fierului provine din reciclarea prin macrofage.\n\nMacrofagele sistemului reticuloendotelial — fier feric — un atom de fier — Incorect: Sursa și forma sunt corecte; fiecare moleculă leagă doi atomi.\n\nAbsorbția intestinală — fier feros — un atom de fier — Incorect: Sursa majoritară, forma legată și numărul nu corespund descrierii transferinei.\n\nMacrofagele sistemului reticuloendotelial — fier feric — doi atomi de fier — Corect: Toate cele trei elemente sunt descrise în paragraful despre transport.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 330, Transportul fierului în sânge (pagini PDF: 55).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    330
   ],
   "pdfPages": [
    55
   ],
   "section": "Transportul fierului în sânge"
  },
  "learningObjective": "Separarea reciclării fierului de absorbție și a formei transportate de forma absorbită.",
  "optionRationales": [
   "Sursa și numărul sunt corecte; transferina leagă fier feric, nu feros.",
   "Forma și numărul sunt corecte; majoritatea fierului provine din reciclarea prin macrofage.",
   "Sursa și forma sunt corecte; fiecare moleculă leagă doi atomi.",
   "Sursa majoritară, forma legată și numărul nu corespund descrierii transferinei.",
   "Toate cele trei elemente sunt descrise în paragraful despre transport."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere trei detalii independente; distractorii apropiați păstrează câte două elemente și confundă fierul absorbit cu cel transportat."
  },
  "textbookExpressions": [
   "macrofagele sistemului reticuloendotelial",
   "doi atomi de fier feric",
   "fierul legat de transferină"
  ]
 },
 {
  "id": "hematologie-adv-001",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "În anemia microcitară asociată unei boli inflamatorii și pierderilor de sânge, CTLF este scăzută, feritina serică este normală, iar receptorii solubili ai transferinei sunt crescuți. Care interpretare integrează aceste rezultate?",
  "options": [
   "Anemie din bolile cronice cu depozite de fier suficiente",
   "Deficit de fier asociat anemiei din bolile cronice",
   "Deficit de fier simplu cu răspuns de fază acută absent",
   "Anemie sideroblastică dobândită cu supraîncărcare cu fier",
   "Talasemie cu depozite de fier normale și CTLF nemodificată"
  ],
  "correct": [
   1
  ],
  "explanation": "Anemie din bolile cronice cu depozite de fier suficiente — Incorect: În profilul necomplicat din tabel, receptorii solubili sunt normali; creșterea lor susține carența asociată.\n\nDeficit de fier asociat anemiei din bolile cronice — Corect: Feritina, reactant de fază acută, poate fi normală în deficitul de fier; CTLF scăzută susține componenta inflamatorie.\n\nDeficit de fier simplu cu răspuns de fază acută absent — Incorect: În deficitul simplu CTLF crește și feritina scade.\n\nAnemie sideroblastică dobândită cu supraîncărcare cu fier — Incorect: Tabelul descrie fier seric și feritină crescute, cu CTLF normală; acesta nu este profilul prezentat.\n\nTalasemie cu depozite de fier normale și CTLF nemodificată — Incorect: CTLF normală caracterizează talasemia necomplicată din tabel, nu profilul inflamator descris.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 331, Investigații; Cadranul 16.4 (pagini PDF: 56).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    331
   ],
   "pdfPages": [
    56
   ],
   "section": "Investigații; Cadranul 16.4"
  },
  "learningObjective": "Interpretarea simultană a markerilor marțiali modificați de inflamație.",
  "optionRationales": [
   "În profilul necomplicat din tabel, receptorii solubili sunt normali; creșterea lor susține carența asociată.",
   "Feritina, reactant de fază acută, poate fi normală în deficitul de fier; CTLF scăzută susține componenta inflamatorie.",
   "În deficitul simplu CTLF crește și feritina scade.",
   "Tabelul descrie fier seric și feritină crescute, cu CTLF normală; acesta nu este profilul prezentat.",
   "CTLF normală caracterizează talasemia necomplicată din tabel, nu profilul inflamator descris."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Necesită reconcilierea a trei markeri; nici microcitoza, nici feritina izolată nu rezolvă diferențialul."
  },
  "textbookExpressions": [
   "reactant de fază acută",
   "receptorii solubili ai transferinei",
   "anemia din bolile cronice"
  ],
  "replaces": "hematologie-ext-001"
 },
 {
  "id": "hematologie-adv-003",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "În diagnosticul anemiei pernicioase, care relație între anticorpii împotriva celulelor parietale și anticorpii anti-factor intrinsec corespunde bibliografiei?",
  "options": [
   "Anti-celulă parietală: sensibilitate mai mare, specificitate mai mică; anti-factor intrinsec: sensibilitate mai mică, specificitate mai mare",
   "Anti-celulă parietală: sensibilitate mai mică, specificitate mai mare; anti-factor intrinsec: sensibilitate mai mare, specificitate mai mică",
   "Anti-celulă parietală: sensibilitate și specificitate mai mari decât anti-factor intrinsec",
   "Anti-factor intrinsec: sensibilitate și specificitate mai mari decât anti-celulă parietală",
   "Cele două teste au specificitate similară, diferența fiind sensibilitatea"
  ],
  "correct": [
   0
  ],
  "explanation": "Anti-celulă parietală: sensibilitate mai mare, specificitate mai mică; anti-factor intrinsec: sensibilitate mai mică, specificitate mai mare — Corect: Anticorpii parietali apar la 90% dintre pacienți și la 10% dintre indivizii normali; anti-factor intrinsec apar la aproximativ 50% dintre pacienți, dar sunt specifici.\n\nAnti-celulă parietală: sensibilitate mai mică, specificitate mai mare; anti-factor intrinsec: sensibilitate mai mare, specificitate mai mică — Incorect: Sunt inversate ambele relații dintre teste.\n\nAnti-celulă parietală: sensibilitate și specificitate mai mari decât anti-factor intrinsec — Incorect: Sensibilitatea mai mare nu implică specificitate mai mare; anticorpii parietali apar și la indivizi normali.\n\nAnti-factor intrinsec: sensibilitate și specificitate mai mari decât anti-celulă parietală — Incorect: Specificitatea anti-factor intrinsec este mai mare, dar sensibilitatea este mai mică.\n\nCele două teste au specificitate similară, diferența fiind sensibilitatea — Incorect: Prezența anticorpilor parietali la indivizi normali diferențiază specificitatea celor două teste.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 334, 335, Anemia pernicioasă — Patogeneză; Diagnostic diferențial (pagini PDF: 59, 60).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    334,
    335
   ],
   "pdfPages": [
    59,
    60
   ],
   "section": "Anemia pernicioasă — Patogeneză; Diagnostic diferențial"
  },
  "learningObjective": "Separarea frecvenței anticorpilor la bolnavi de specificitatea diagnosticului.",
  "optionRationales": [
   "Anticorpii parietali apar la 90% dintre pacienți și la 10% dintre indivizii normali; anti-factor intrinsec apar la aproximativ 50% dintre pacienți, dar sunt specifici.",
   "Sunt inversate ambele relații dintre teste.",
   "Sensibilitatea mai mare nu implică specificitate mai mare; anticorpii parietali apar și la indivizi normali.",
   "Specificitatea anti-factor intrinsec este mai mare, dar sensibilitatea este mai mică.",
   "Prezența anticorpilor parietali la indivizi normali diferențiază specificitatea celor două teste."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Alternativele permută aceleași două proprietăți ale acelorași teste; trebuie cunoscute simultan ambele relații."
  },
  "textbookExpressions": [
   "anticorpii împotriva celulelor parietale",
   "anticorpii anti-factor intrinsec"
  ],
  "replaces": "hematologie-ext-003"
 },
 {
  "id": "hematologie-adv-006",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Conform diagnosticului diferențial al anemiei microcitare, sunt corecte asocierile:",
  "options": [
   "Deficit de fier — CTLF crescută, receptori solubili ai transferinei crescuți, fier medular absent",
   "Anemia din bolile cronice — CTLF scăzută, receptori solubili ai transferinei crescuți, fier medular prezent",
   "Talasemie — CTLF normală, receptori solubili ai transferinei normali sau crescuți, fier medular absent",
   "Anemia din bolile cronice — feritină normală sau crescută, fier medular prezent, fier eritroblastic absent sau scăzut",
   "Anemie sideroblastică — feritină crescută, CTLF crescută, fier eritroblastic în forme inelare"
  ],
  "correct": [
   0,
   3
  ],
  "explanation": "Deficit de fier — CTLF crescută, receptori solubili ai transferinei crescuți, fier medular absent — Corect: Toate cele trei elemente corespund deficitului de fier din tabel.\n\nAnemia din bolile cronice — CTLF scăzută, receptori solubili ai transferinei crescuți, fier medular prezent — Incorect: Receptorii solubili sunt normali; celelalte două elemente sunt corecte.\n\nTalasemie — CTLF normală, receptori solubili ai transferinei normali sau crescuți, fier medular absent — Incorect: Fierul medular este prezent; celelalte două elemente sunt corecte.\n\nAnemia din bolile cronice — feritină normală sau crescută, fier medular prezent, fier eritroblastic absent sau scăzut — Corect: Tabelul distinge fierul medular prezent de fierul absent sau scăzut în eritroblaști.\n\nAnemie sideroblastică — feritină crescută, CTLF crescută, fier eritroblastic în forme inelare — Incorect: CTLF este normală; feritina și formele inelare sunt corect asociate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 331, Cadranul 16.4 — Anemia microcitară: diagnostic diferențial (pagini PDF: 56).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    331
   ],
   "pdfPages": [
    56
   ],
   "section": "Cadranul 16.4 — Anemia microcitară: diagnostic diferențial"
  },
  "learningObjective": "Compararea rezervelor și distribuției fierului cu markerii de transport.",
  "optionRationales": [
   "Toate cele trei elemente corespund deficitului de fier din tabel.",
   "Receptorii solubili sunt normali; celelalte două elemente sunt corecte.",
   "Fierul medular este prezent; celelalte două elemente sunt corecte.",
   "Tabelul distinge fierul medular prezent de fierul absent sau scăzut în eritroblaști.",
   "CTLF este normală; feritina și formele inelare sunt corect asociate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fiecare distractor păstrează două date corecte și schimbă un singur marker; cere diferențierea fierului medular de cel eritroblastic."
  },
  "textbookExpressions": [
   "fier medular",
   "fier în eritroblaști",
   "forme inelare"
  ],
  "replaces": "hematologie-ext-006"
 },
 {
  "id": "hematologie-adv-008",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Referitor la reglarea absorbției fierului, sunt corecte următoarele asocieri:",
  "options": [
   "Hepcidină — sinteză hepatică și internalizarea transportorului apical DMT1",
   "Eritroferon — producție în eritroblaste și stimularea sintezei hepatice de hepcidină",
   "Hepcidină — legare de feroportină și scăderea efluxului de fier în plasmă",
   "IL-6 — stimularea hepcidinei și creșterea exportului de fier prin feroportină",
   "Eritropoieză ineficientă — scăderea hepcidinei sub acțiunea eritroferonului și absorbție excesivă a fierului"
  ],
  "correct": [
   2,
   4
  ],
  "explanation": "Hepcidină — sinteză hepatică și internalizarea transportorului apical DMT1 — Incorect: Sinteza hepatică este corectă; ținta internalizată este feroportina, nu DMT1.\n\nEritroferon — producție în eritroblaste și stimularea sintezei hepatice de hepcidină — Incorect: Originea eritroblastică este corectă; eritroferonul scade hepcidina.\n\nHepcidină — legare de feroportină și scăderea efluxului de fier în plasmă — Corect: Legarea provoacă internalizarea și degradarea feroportinei, reducând efluxul de fier.\n\nIL-6 — stimularea hepcidinei și creșterea exportului de fier prin feroportină — Incorect: IL-6 stimulează hepcidina, dar exportul prin feroportină scade.\n\nEritropoieză ineficientă — scăderea hepcidinei sub acțiunea eritroferonului și absorbție excesivă a fierului — Corect: Această cale explică absorbția excesivă netransfuzională în anemiile cu eritropoieză ineficientă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 330, Absorbția fierului — Hepcidină; eritroferon (pagini PDF: 55).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    330
   ],
   "pdfPages": [
    55
   ],
   "section": "Absorbția fierului — Hepcidină; eritroferon"
  },
  "learningObjective": "Identificarea mediatorului, transportorului și sensului reglării în inflamație și eritropoieză ineficientă.",
  "optionRationales": [
   "Sinteza hepatică este corectă; ținta internalizată este feroportina, nu DMT1.",
   "Originea eritroblastică este corectă; eritroferonul scade hepcidina.",
   "Legarea provoacă internalizarea și degradarea feroportinei, reducând efluxul de fier.",
   "IL-6 stimulează hepcidina, dar exportul prin feroportină scade.",
   "Această cale explică absorbția excesivă netransfuzională în anemiile cu eritropoieză ineficientă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Fiecare alternativă eronată păstrează originea sau primul pas corect, dar atribuie greșit ținta ori consecința următoare."
  },
  "textbookExpressions": [
   "internalizarea și degradarea",
   "efluxului de fier",
   "eritroblastele în curs de dezvoltare"
  ],
  "replaces": "hematologie-ext-008"
 },
 {
  "id": "hematologie-adv-010",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "În absorbția și transportul vitaminei B12 sunt corecte următoarele relații:",
  "options": [
   "Liantul R — derivat din salivă, eliberează B12 sub acțiunea enzimelor pancreatice",
   "Factorul intrinsec — secretat de celulele parietale, transportă B12 de la enterocite la măduva osoasă",
   "Cubilina — receptor de pe mucoasa ileonului, recunoaște complexul B12–transcobalamină II",
   "Transcobalamina II — leagă fracția B12 activă preluată de celule",
   "Transcobalamina I — leagă fracția plasmatică majoritară, denumită holotranscobalamină"
  ],
  "correct": [
   0,
   3
  ],
  "explanation": "Liantul R — derivat din salivă, eliberează B12 sub acțiunea enzimelor pancreatice — Corect: Ambele elemente sunt descrise în succesiunea absorbției.\n\nFactorul intrinsec — secretat de celulele parietale, transportă B12 de la enterocite la măduva osoasă — Incorect: Originea este corectă; transportul enterocit–țesuturi revine transcobalaminei II.\n\nCubilina — receptor de pe mucoasa ileonului, recunoaște complexul B12–transcobalamină II — Incorect: Localizarea este corectă; complexul recunoscut conține factor intrinsec.\n\nTranscobalamina II — leagă fracția B12 activă preluată de celule — Corect: Complexul B12–TCII este holotranscobalamina, fracția preluată de celule.\n\nTranscobalamina I — leagă fracția plasmatică majoritară, denumită holotranscobalamină — Incorect: TCI leagă majoritatea B12 plasmatice; holotranscobalamina desemnează complexul cu TCII.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 334, Vitamina B12 — Absorbție și transport (pagini PDF: 59).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    334
   ],
   "pdfPages": [
    59
   ],
   "section": "Vitamina B12 — Absorbție și transport"
  },
  "learningObjective": "Urmărirea ligandului și compartimentului pentru fiecare proteină de transport.",
  "optionRationales": [
   "Ambele elemente sunt descrise în succesiunea absorbției.",
   "Originea este corectă; transportul enterocit–țesuturi revine transcobalaminei II.",
   "Localizarea este corectă; complexul recunoscut conține factor intrinsec.",
   "Complexul B12–TCII este holotranscobalamina, fracția preluată de celule.",
   "TCI leagă majoritatea B12 plasmatice; holotranscobalamina desemnează complexul cu TCII."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate proteinele aparțin aceleiași căi; distractorii schimbă numai ligandul, destinația sau denumirea fracției."
  },
  "textbookExpressions": [
   "liantul R",
   "mucoasei ileonului, cubilina",
   "holotranscobalamină"
  ],
  "replaces": "hematologie-ext-010"
 },
 {
  "id": "hematologie-adv-016",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Despre formele și transformările folaților sunt corecte afirmațiile:",
  "options": [
   "Folații alimentari se găsesc ca poliglutamați în forme reduse de dihidrofolat sau tetrahidrofolat",
   "Poliglutamații sunt degradați în monoglutamați în tractul gastrointestinal superior",
   "Monoglutamatul metil-THF este forma principală din ser",
   "Metilarea homocisteinei la metionină necesită metil-THF și deoxiadenosilcobalamină",
   "Poliglutamații intracelulari acționează ca forme active în transferul unităților cu un atom de carbon"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Folații alimentari se găsesc ca poliglutamați în forme reduse de dihidrofolat sau tetrahidrofolat — Corect: Acestea sunt formele alimentare descrise.\n\nPoliglutamații sunt degradați în monoglutamați în tractul gastrointestinal superior — Corect: Transformarea precedă absorbția și conversia în metil-THF monoglutamat.\n\nMonoglutamatul metil-THF este forma principală din ser — Corect: Aceasta este forma circulantă principală descrisă.\n\nMetilarea homocisteinei la metionină necesită metil-THF și deoxiadenosilcobalamină — Incorect: Reacția necesită metilcobalamină; deoxiadenosilcobalamina participă la transformarea metilmalonil-CoA în succinil-CoA.\n\nPoliglutamații intracelulari acționează ca forme active în transferul unităților cu un atom de carbon — Corect: Aceste forme sunt coenzime în metabolismul aminoacizilor și sinteza ADN.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 335, 334, Acidul folic — Metabolism (pagini PDF: 60, 59).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    335,
    334
   ],
   "pdfPages": [
    60,
    59
   ],
   "section": "Acidul folic — Metabolism"
  },
  "learningObjective": "Distingerea formelor de folat și a celor două coenzime cobalaminice.",
  "optionRationales": [
   "Acestea sunt formele alimentare descrise.",
   "Transformarea precedă absorbția și conversia în metil-THF monoglutamat.",
   "Aceasta este forma circulantă principală descrisă.",
   "Reacția necesită metilcobalamină; deoxiadenosilcobalamina participă la transformarea metilmalonil-CoA în succinil-CoA.",
   "Aceste forme sunt coenzime în metabolismul aminoacizilor și sinteza ADN."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul folosește o coenzimă reală a aceleiași vitamine; recunoașterea numelui B12 nu rezolvă reacția."
  },
  "textbookExpressions": [
   "monoglutamat metil THF",
   "poliglutamații intracelulari",
   "metilarea homocisteinei la metionină"
  ],
  "replaces": "hematologie-ext-016"
 },
 {
  "id": "hematologie-adv-023",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "O creștere a volumului plasmatic, ca în sarcină, produce, potrivit Figurii 16.6:",
  "options": [
   "O hemoglobină fals crescută, similar deshidratării",
   "O anemie falsă, chiar și atunci când este combinată cu o creștere mică a volumului de eritrocite",
   "Policitemie aparentă, prin contracția plasmei",
   "Scăderea volumului eritrocitar cu hemoglobină neschimbată",
   "Creșterea hematocritului disproporționat față de hemoglobină"
  ],
  "correct": [
   1
  ],
  "explanation": "O hemoglobină fals crescută, similar deshidratării — Incorect: Hemoglobina fals crescută corespunde reducerii volumului plasmatic (deshidratare, policitemie aparentă), nu sarcinii.\n\nO anemie falsă, chiar și atunci când este combinată cu o creștere mică a volumului de eritrocite — Corect: Textul descrie anemia falsă din sarcină, posibilă chiar și cu o ușoară creștere a masei eritrocitare.\n\nPolicitemie aparentă, prin contracția plasmei — Incorect: Policitemia aparentă ține de plasma redusă, nu de hipervolemia sarcinii.\n\nScăderea volumului eritrocitar cu hemoglobină neschimbată — Incorect: În sarcină volumul eritrocitar poate fi ușor crescut, nu scăzut.\n\nCreșterea hematocritului disproporționat față de hemoglobină — Incorect: Figura plasează hemoglobina scăzută pe seama plasmei expandate, nu a unui hematocrit crescut.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 327, Anemia: introducere — Figura 16.6 (pagini PDF: 52).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    327
   ],
   "pdfPages": [
    52
   ],
   "section": "Anemia: introducere — Figura 16.6"
  },
  "learningObjective": "Separarea anemiei de diluție din sarcină de hemoconcentrația deshidratării și de policitemia aparentă.",
  "optionRationales": [
   "Hemoglobina fals crescută corespunde reducerii volumului plasmatic (deshidratare, policitemie aparentă), nu sarcinii.",
   "Textul descrie anemia falsă din sarcină, posibilă chiar și cu o ușoară creștere a masei eritrocitare.",
   "Policitemia aparentă ține de plasma redusă, nu de hipervolemia sarcinii.",
   "În sarcină volumul eritrocitar poate fi ușor crescut, nu scăzut.",
   "Figura plasează hemoglobina scăzută pe seama plasmei expandate, nu a unui hematocrit crescut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută cele trei stări din Figura 16.6 (sarcină, deshidratare, policitemie aparentă) păstrând câte un element corect."
  },
  "textbookExpressions": [
   "anemie falsă",
   "volumul plasmatic"
  ]
 },
 {
  "id": "hematologie-adv-024",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Compensarea și tabloul clinic al anemiei, în descrierea introductivă, includ:",
  "options": [
   "O creștere a 2,3-BPG deplasează curba de disociere a oxigenului spre dreapta, astfel încât oxigenul este eliberat mai ușor în țesuturi",
   "Simptomele sunt nespecifice: dispnee, astenie, fatigabilitate, cefalee, palpitații și lipotimie",
   "Anemia agravează problemele cardiorespiratorii; angina sau claudicația intermitentă pot fi precipitate, mai ales la vârstnici",
   "Un nivel ușor scăzut de hemoglobină nu permite nicio compensare hemodinamică",
   "Deplasarea curbei de disociere spre stânga este mecanismul care facilitează cedarea oxigenului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "O creștere a 2,3-BPG deplasează curba de disociere a oxigenului spre dreapta, astfel încât oxigenul este eliberat mai ușor în țesuturi — Corect: Creșterea 2,3-BPG și deplasarea spre dreapta sunt mecanismul compensator citat.\n\nSimptomele sunt nespecifice: dispnee, astenie, fatigabilitate, cefalee, palpitații și lipotimie — Corect: Lista de simptome nespecifice este cea din paragraf.\n\nAnemia agravează problemele cardiorespiratorii; angina sau claudicația intermitentă pot fi precipitate, mai ales la vârstnici — Corect: Precipitarea anginei sau a claudicației la vârstnici este exemplul dat.\n\nUn nivel ușor scăzut de hemoglobină nu permite nicio compensare hemodinamică — Incorect: Textul precizează că un nivel ușor scăzut permite compensarea hemodinamică și îmbunătățirea cedării oxigenului.\n\nDeplasarea curbei de disociere spre stânga este mecanismul care facilitează cedarea oxigenului — Incorect: Deplasarea care facilitează eliberarea este spre dreapta, nu spre stânga.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 327, Anemia: introducere — Tablou clinic (pagini PDF: 52).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    327
   ],
   "pdfPages": [
    52
   ],
   "section": "Anemia: introducere — Tablou clinic"
  },
  "learningObjective": "Integrarea deplasării drepte a curbei oxihemoglobinei cu simptomele nespecifice și cu precipitarea ischemiei la vârstnici.",
  "optionRationales": [
   "Creșterea 2,3-BPG și deplasarea spre dreapta sunt mecanismul compensator citat.",
   "Lista de simptome nespecifice este cea din paragraf.",
   "Precipitarea anginei sau a claudicației la vârstnici este exemplul dat.",
   "Textul precizează că un nivel ușor scăzut permite compensarea hemodinamică și îmbunătățirea cedării oxigenului.",
   "Deplasarea care facilitează eliberarea este spre dreapta, nu spre stânga."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează sensul deplasării curbei (stânga versus dreapta) și neagă compensarea pe care textul o descrie la anemii ușoare."
  },
  "textbookExpressions": [
   "2,3-BPG",
   "spre dreapta"
  ]
 },
 {
  "id": "hematologie-adv-025",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Macrocitoza cu eritropoieză normoblastică, nu megaloblastică, se asociază în bibliografie cu:",
  "options": [
   "Excesul de alcool, VEM-ul putând servi ca marker de monitorizare a consumului",
   "Un număr crescut de reticulocite, care cresc VEM-ul datorită dimensiunii lor",
   "Deficitul de cobalamină, cu megaloblaști medulari",
   "Carența marțială microcitară, care ridică VEM-ul mediu",
   "Măduvă megaloblastică, cu cromatină nucleară fin dispersată"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Excesul de alcool, VEM-ul putând servi ca marker de monitorizare a consumului — Corect: Alcoolul este o cauză frecventă de VEM crescut, utilă și ca marker de consum.\n\nUn număr crescut de reticulocite, care cresc VEM-ul datorită dimensiunii lor — Corect: Reticulocitele, mai mari decât hematiile mature, cresc VEM-ul.\n\nDeficitul de cobalamină, cu megaloblaști medulari — Incorect: Deficitul de cobalamină produce megaloblastoză, nu simplă macrocitoză normoblastică.\n\nCarența marțială microcitară, care ridică VEM-ul mediu — Incorect: Carența marțială scade VEM-ul, nu îl crește.\n\nMăduvă megaloblastică, cu cromatină nucleară fin dispersată — Incorect: Megaloblastoza cu cromatină fină definește anemia megaloblastică, categoria din care aceste cauze sunt explicit separate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 336, Macrocitoza fără modificări megaloblastice (pagini PDF: 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    336
   ],
   "pdfPages": [
    61
   ],
   "section": "Macrocitoza fără modificări megaloblastice"
  },
  "learningObjective": "Separarea cauzelor de macrocitoză normoblastică (alcool, reticulocite) de megaloblastoză și de microcitoză.",
  "optionRationales": [
   "Alcoolul este o cauză frecventă de VEM crescut, utilă și ca marker de consum.",
   "Reticulocitele, mai mari decât hematiile mature, cresc VEM-ul.",
   "Deficitul de cobalamină produce megaloblastoză, nu simplă macrocitoză normoblastică.",
   "Carența marțială scade VEM-ul, nu îl crește.",
   "Megaloblastoza cu cromatină fină definește anemia megaloblastică, categoria din care aceste cauze sunt explicit separate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reintroduc cele două cauze megaloblastice/microcitare din care textul tocmai a scos această listă de macrocitoze normoblastice."
  },
  "textbookExpressions": [
   "excesul de alcool",
   "număr crescut de reticulocite"
  ]
 },
 {
  "id": "hematologie-adv-026",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Tehnicile de obținere a măduvei osoase se diferențiază prin:",
  "options": [
   "Aspiratul (ac Salah, de obicei creasta iliacă) oferă frotiuri pentru morfologie și probă lichidă pentru imunofenotipare, citogenetică sau cultură microbiologică",
   "Colorația Perls (acid ferocianură) evidențiază fierul pe aspirat",
   "Biopsia osteomedulară (ac Jamshidi, mai lung și mai gros) evaluează arhitectura, celularitatea și infiltratele; decalcifierea poate dura câteva zile",
   "Biopsia este inferioară aspiratului pentru evaluarea celularității în anemia aplastică",
   "Aspiratul nu poate fi folosit pentru investigații citogenetice sau markeri moleculari"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Aspiratul (ac Salah, de obicei creasta iliacă) oferă frotiuri pentru morfologie și probă lichidă pentru imunofenotipare, citogenetică sau cultură microbiologică — Corect: Sediul, acul Salah și utilizările probei lichide sunt cele din cadran.\n\nColorația Perls (acid ferocianură) evidențiază fierul pe aspirat — Corect: Perls cu acid ferocianură este colorația citată pentru fier pe aspirat.\n\nBiopsia osteomedulară (ac Jamshidi, mai lung și mai gros) evaluează arhitectura, celularitatea și infiltratele; decalcifierea poate dura câteva zile — Corect: Acul Jamshidi, decalcifierea de câteva zile și evaluarea arhitecturii caracterizează biopsia.\n\nBiopsia este inferioară aspiratului pentru evaluarea celularității în anemia aplastică — Incorect: Cadranul indică biopsia ca evaluare superioară a celularității, de exemplu în aplazie.\n\nAspiratul nu poate fi folosit pentru investigații citogenetice sau markeri moleculari — Incorect: Proba lichidă din aspirat este explicit utilizabilă pentru citogenetică și markeri moleculari.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 328, Cadranul 16.2 — Tehnici pentru a obține măduvă osoasă (pagini PDF: 53).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    328
   ],
   "pdfPages": [
    53
   ],
   "section": "Cadranul 16.2 — Tehnici pentru a obține măduvă osoasă"
  },
  "learningObjective": "Asocierea acului (Salah versus Jamshidi) cu tipul de informație (citologie versus arhitectură) și cu timpul de decalcifiere.",
  "optionRationales": [
   "Sediul, acul Salah și utilizările probei lichide sunt cele din cadran.",
   "Perls cu acid ferocianură este colorația citată pentru fier pe aspirat.",
   "Acul Jamshidi, decalcifierea de câteva zile și evaluarea arhitecturii caracterizează biopsia.",
   "Cadranul indică biopsia ca evaluare superioară a celularității, de exemplu în aplazie.",
   "Proba lichidă din aspirat este explicit utilizabilă pentru citogenetică și markeri moleculari."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează superioritatea biopsiei în aplazie și neagă utilizările probei lichide enumerate în același cadran."
  },
  "textbookExpressions": [
   "ac special pentru aspirat",
   "Jamshidi"
  ]
 },
 {
  "id": "hematologie-adv-027",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "O cauză fiziologică frecventă de macrocitoză cu măduvă normoblastică este:",
  "options": [
   "Deficitul de vitamină B12",
   "Deficitul de folat",
   "Sarcina",
   "Anemia aplastică ca stare fiziologică de trimestrul III",
   "Talasemia minoră"
  ],
  "correct": [
   2
  ],
  "explanation": "Deficitul de vitamină B12 — Incorect: Deficitul de B12 produce megaloblastoză, nu macrocitoză fiziologică normoblastică.\n\nDeficitul de folat — Incorect: Deficitul de folat este de asemenea o cauză megaloblastică.\n\nSarcina — Corect: Sarcina este numită cauză fiziologică frecventă; macrocitoza poate apărea și la nou-născut.\n\nAnemia aplastică ca stare fiziologică de trimestrul III — Incorect: Anemia aplastică figurează între cauzele patologice, nu ca adaptare fiziologică de trimestrul III.\n\nTalasemia minoră — Incorect: Talasemia produce microcitoză, nu macrocitoză.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 336, Macrocitoza fără modificări megaloblastice (pagini PDF: 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    336
   ],
   "pdfPages": [
    61
   ],
   "section": "Macrocitoza fără modificări megaloblastice"
  },
  "learningObjective": "Identificarea sarcinii (și a nou-născutului) ca macrocitoză fiziologică, distinctă de cauzele megaloblastice și hematologice patologice.",
  "optionRationales": [
   "Deficitul de B12 produce megaloblastoză, nu macrocitoză fiziologică normoblastică.",
   "Deficitul de folat este de asemenea o cauză megaloblastică.",
   "Sarcina este numită cauză fiziologică frecventă; macrocitoza poate apărea și la nou-născut.",
   "Anemia aplastică figurează între cauzele patologice, nu ca adaptare fiziologică de trimestrul III.",
   "Talasemia produce microcitoză, nu macrocitoză."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt cauze reale de anemie din același capitol, dar fie megaloblastice, fie microcitare, nu fiziologic normoblastice."
  },
  "textbookExpressions": [
   "cauză fiziologică frecventă",
   "sarcina"
  ]
 },
 {
  "id": "hematologie-adv-028",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Anemia aplastică, în definiția și patogeneza din capitol, se caracterizează prin:",
  "options": [
   "Pancitopenie cu hipocelularitate a măduvei, fără celule leucemice, canceroase sau alte celule anormale în sânge sau măduvă",
   "Scăderea numărului de celule stem pluripotente, cu disfuncție a celor rămase sau cu o reacție imună îndreptată împotriva lor",
   "Celule T citotoxice activate din sânge și măduvă, responsabile pentru insuficiența medulară în multe cazuri dobândite",
   "Aplazia pură eritrocitară, care afectează simultan toate liniile hematopoietice",
   "Imposibilitatea evoluției spre mielodisplazie, hemoglobinurie paroxistică nocturnă sau leucemie mieloidă acută"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pancitopenie cu hipocelularitate a măduvei, fără celule leucemice, canceroase sau alte celule anormale în sânge sau măduvă — Corect: Definiția prin pancitopenie hipocelulară, fără celule anormale, este cea de deschidere.\n\nScăderea numărului de celule stem pluripotente, cu disfuncție a celor rămase sau cu o reacție imună îndreptată împotriva lor — Corect: Mecanismul stem plus disfuncție sau reacție imună este enunțat explicit.\n\nCelule T citotoxice activate din sânge și măduvă, responsabile pentru insuficiența medulară în multe cazuri dobândite — Corect: Rolul limfocitelor T citotoxice activate este precizat pentru cazurile dobândite.\n\nAplazia pură eritrocitară, care afectează simultan toate liniile hematopoietice — Incorect: Aplazia pură eritrocitară este insuficiența unei singure linii, nu a tuturor.\n\nImposibilitatea evoluției spre mielodisplazie, hemoglobinurie paroxistică nocturnă sau leucemie mieloidă acută — Incorect: Textul menționează posibila evoluție spre mielodisplazie, HPN sau LMA.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 336, Anemia datorată insuficienței medulare (anemia aplastică) (pagini PDF: 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    336
   ],
   "pdfPages": [
    61
   ],
   "section": "Anemia datorată insuficienței medulare (anemia aplastică)"
  },
  "learningObjective": "Definirea aplaziei ca pancitopenie hipocelulară fără infiltrate și atribuirea ei celulelor T citotoxice, distinct de aplazia de linie unică.",
  "optionRationales": [
   "Definiția prin pancitopenie hipocelulară, fără celule anormale, este cea de deschidere.",
   "Mecanismul stem plus disfuncție sau reacție imună este enunțat explicit.",
   "Rolul limfocitelor T citotoxice activate este precizat pentru cazurile dobândite.",
   "Aplazia pură eritrocitară este insuficiența unei singure linii, nu a tuturor.",
   "Textul menționează posibila evoluție spre mielodisplazie, HPN sau LMA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă aplazia de linie unică cu pancitopenia și neagă evoluția clonală pe care textul o admite."
  },
  "textbookExpressions": [
   "pancitopenie cu hipocelularitate",
   "Celulele T citotoxice"
  ]
 },
 {
  "id": "hematologie-adv-029",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Anemia hemolitică autoimună „la cald\" se caracterizează prin:",
  "options": [
   "Clasificare a AHAI în forme „la cald\" (65%), „la rece\" (30%) și „mixte\" (5%)",
   "Răspuns la prednison 1 mg/kg zilnic, cu remisiune la 80% dintre pacienți",
   "Origine primară în 50% din cazuri și secundară în 50%, cel mai des limfoproliferări",
   "Predominanța anticorpilor IgM, complementul rămânând singurul detectat pe eritrocit",
   "Splenectomia ca terapie de linia a doua ineficientă, inferioară alchilanților"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Clasificare a AHAI în forme „la cald\" (65%), „la rece\" (30%) și „mixte\" (5%) — Corect: Proporțiile 65%, 30% și 5% sunt cele din clasificarea după temperatura de legare.\n\nRăspuns la prednison 1 mg/kg zilnic, cu remisiune la 80% dintre pacienți — Corect: Doza de 1 mg/kg și rata de remisiune de 80% sunt cifrele citate.\n\nOrigine primară în 50% din cazuri și secundară în 50%, cel mai des limfoproliferări — Corect: Splitul 50/50 și predominanța limfoproliferărilor în forma secundară sunt din text.\n\nPredominanța anticorpilor IgM, complementul rămânând singurul detectat pe eritrocit — Incorect: În forma la cald predomină IgG; IgM caracterizează forma la rece.\n\nSplenectomia ca terapie de linia a doua ineficientă, inferioară alchilanților — Incorect: Splenectomia este descrisă ca cea mai eficientă terapie de linia a doua, nu ca ineficientă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 352, 351, 353, Anemiile hemolitice autoimune cu anticorpi „la cald\"; Cadranul 16.16 (pagini PDF: 63, 62, 64).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    352,
    351,
    353
   ],
   "pdfPages": [
    63,
    62,
    64
   ],
   "section": "Anemiile hemolitice autoimune cu anticorpi „la cald\"; Cadranul 16.16"
  },
  "learningObjective": "Reținerea proporțiilor 65/30/5, a ratei de răspuns de 80% la prednison și a bilanțului primar/secundar 50/50.",
  "optionRationales": [
   "Proporțiile 65%, 30% și 5% sunt cele din clasificarea după temperatura de legare.",
   "Doza de 1 mg/kg și rata de remisiune de 80% sunt cifrele citate.",
   "Splitul 50/50 și predominanța limfoproliferărilor în forma secundară sunt din text.",
   "În forma la cald predomină IgG; IgM caracterizează forma la rece.",
   "Splenectomia este descrisă ca cea mai eficientă terapie de linia a doua, nu ca ineficientă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută izotipul IgM și ineficiența splenectomiei din forma la rece asupra formei la cald, unde prednisonul și splenectomia sunt tocmai armele descrise."
  },
  "textbookExpressions": [
   "65%",
   "1 mg/kg zilnic"
  ]
 },
 {
  "id": "hematologie-adv-030",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "În investigarea AHAI la cald, sunt corecte:",
  "options": [
   "Trombocitopenia autoimună și/sau neutropenia pot să apară (sindromul Evans)",
   "Autoanticorpii pot avea afinitate pentru sistemul Rh al grupelor sanguine, de exemplu pentru antigenul e",
   "Testul Coombs este pozitiv numai pentru complement, IgG fiind absentă de pe eritrocit",
   "Steroizii reduc doar distrucția splenică, fără a influența producția de autoanticorpi",
   "CT-ul abdominal este superfluu, limfoamele abdominale neintrând în diagnosticul diferențial"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Trombocitopenia autoimună și/sau neutropenia pot să apară (sindromul Evans) — Corect: Asocierea cu trombocitopenie și/sau neutropenie autoimună este denumită sindromul Evans.\n\nAutoanticorpii pot avea afinitate pentru sistemul Rh al grupelor sanguine, de exemplu pentru antigenul e — Corect: Afinitatea pentru sistemul Rh, exemplificată prin antigenul e, este menționată explicit.\n\nTestul Coombs este pozitiv numai pentru complement, IgG fiind absentă de pe eritrocit — Incorect: Coombs-ul este pozitiv doar cu IgG (35%), cu IgG și complement (56%) sau doar complement (9%), deci IgG este frecvent prezentă.\n\nSteroizii reduc doar distrucția splenică, fără a influența producția de autoanticorpi — Incorect: Steroizii reduc atât producția de autoanticorpi, cât și distrucția celulelor acoperite.\n\nCT-ul abdominal este superfluu, limfoamele abdominale neintrând în diagnosticul diferențial — Incorect: CT-ul abdominal este indicat pentru decelarea unui posibil limfom abdominal.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 352, AHAI la cald — Investigații; Tratament (pagini PDF: 63).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    352
   ],
   "pdfPages": [
    63
   ],
   "section": "AHAI la cald — Investigații; Tratament"
  },
  "learningObjective": "Recunoașterea sindromului Evans și a specificității Rh (antigen e), plus rolul CT-ului în căutarea limfomului.",
  "optionRationales": [
   "Asocierea cu trombocitopenie și/sau neutropenie autoimună este denumită sindromul Evans.",
   "Afinitatea pentru sistemul Rh, exemplificată prin antigenul e, este menționată explicit.",
   "Coombs-ul este pozitiv doar cu IgG (35%), cu IgG și complement (56%) sau doar complement (9%), deci IgG este frecvent prezentă.",
   "Steroizii reduc atât producția de autoanticorpi, cât și distrucția celulelor acoperite.",
   "CT-ul abdominal este indicat pentru decelarea unui posibil limfom abdominal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii folosesc profilul Coombs al formei la rece (doar C3d) și neagă cele două efecte ale steroizilor descrise în același paragraf."
  },
  "textbookExpressions": [
   "Sindromul Evans",
   "antigenul e"
  ]
 },
 {
  "id": "hematologie-adv-031",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Boala hemolitică a nou-născutului se caracterizează prin:",
  "options": [
   "Doar anticorpii IgG sunt capabili de pasajul transplacentar de la mamă la făt",
   "Cel mai des întâlnit tip este incompatibilitatea ABO (mamă de grup O, făt de grup A), de obicei o formă ușoară",
   "Icterul nuclear apare când bilirubina neconjugată depășește 250 µmol/L, cu depunere în ganglionii bazali",
   "Anti-D 500 UI intramuscular se administrează în primele 72 de ore dacă mama este RhD-negativă, fătul RhD-pozitiv și nu se detectează anti-D maternal",
   "Sensibilizarea la naștere face ca prima sarcină să fie, de regulă, cea mai grav afectată"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Doar anticorpii IgG sunt capabili de pasajul transplacentar de la mamă la făt — Corect: Pasajul transplacentar este rezervat IgG, nu altor izotipuri.\n\nCel mai des întâlnit tip este incompatibilitatea ABO (mamă de grup O, făt de grup A), de obicei o formă ușoară — Corect: Perechea mamă O / făt A este tipul cel mai frecvent, de obicei ușor.\n\nIcterul nuclear apare când bilirubina neconjugată depășește 250 µmol/L, cu depunere în ganglionii bazali — Corect: Pragul de 250 µmol/L și depunerea în ganglionii bazali definesc icterul nuclear.\n\nAnti-D 500 UI intramuscular se administrează în primele 72 de ore dacă mama este RhD-negativă, fătul RhD-pozitiv și nu se detectează anti-D maternal — Corect: Cele trei condiții (mamă RhD-negativă, făt RhD-pozitiv, absența anti-D) și doza de 500 UI în 72 de ore sunt schema postnatală.\n\nSensibilizarea la naștere face ca prima sarcină să fie, de regulă, cea mai grav afectată — Incorect: Prima sarcină este rar afectată; sensibilizarea se produce de obicei la naștere.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 354, 353, Boala hemolitică a nou-născutului; Prevenția imunizării RhD (pagini PDF: 65, 64).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    354,
    353
   ],
   "pdfPages": [
    65,
    64
   ],
   "section": "Boala hemolitică a nou-născutului; Prevenția imunizării RhD"
  },
  "learningObjective": "Integrarea izotipului care trece placenta, a predominanței ABO, a pragului de kernicterus și a schemei postnatale anti-D 500 UI / 72 ore.",
  "optionRationales": [
   "Pasajul transplacentar este rezervat IgG, nu altor izotipuri.",
   "Perechea mamă O / făt A este tipul cel mai frecvent, de obicei ușor.",
   "Pragul de 250 µmol/L și depunerea în ganglionii bazali definesc icterul nuclear.",
   "Cele trei condiții (mamă RhD-negativă, făt RhD-pozitiv, absența anti-D) și doza de 500 UI în 72 de ore sunt schema postnatală.",
   "Prima sarcină este rar afectată; sensibilizarea se produce de obicei la naștere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează epidemiologia (prima sarcină gravă), în timp ce celelalte opțiuni cer simultan izotip, perechea ABO, 250 µmol/L și 500 UI."
  },
  "textbookExpressions": [
   "250",
   "500 Ul"
  ]
 },
 {
  "id": "hematologie-adv-032",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Evaluarea antenatală și sângele pentru exsanguinotransfuzie în BHNN includ:",
  "options": [
   "Severitatea anemiei fetale se determină prin măsurarea Doppler a vitezei de curgere în artera cerebrală mijlocie fetală",
   "Sângele trebuie să fie compatibil ABO atât pentru mamă cât și pentru făt, să nu conțină antigenul vizat de anticorpul maternal, să fie proaspăt (nu mai vechi de 5 zile) și iradiat",
   "Testul Kleihauer cuantifică eritrocitele fetale în circulația maternă; HbF este rezistentă la tratamentul acid, spre deosebire de HbA",
   "Profilaxia antenatală se poate face în două doze de 500 UI (săptămânile 28 și 34) sau ca doză unică de 1.500 UI în săptămâna 28 sau între săptămânile 28 și 30",
   "Măsurarea pigmenților biliari în lichidul amniotic rămâne metoda de rutină pentru aprecierea severității"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Severitatea anemiei fetale se determină prin măsurarea Doppler a vitezei de curgere în artera cerebrală mijlocie fetală — Corect: Doppler-ul arterei cerebrale mijlocii a înlocuit măsurarea pigmenților biliari ca metodă de rutină.\n\nSângele trebuie să fie compatibil ABO atât pentru mamă cât și pentru făt, să nu conțină antigenul vizat de anticorpul maternal, să fie proaspăt (nu mai vechi de 5 zile) și iradiat — Corect: Cele patru condiții (compatibilitate ABO dublă, antigen-negativ, ≤5 zile, iradiat) sunt lista din text.\n\nTestul Kleihauer cuantifică eritrocitele fetale în circulația maternă; HbF este rezistentă la tratamentul acid, spre deosebire de HbA — Corect: Rezistența HbF la acid, cu vizualizare după eozină, stă la baza testului Kleihauer.\n\nProfilaxia antenatală se poate face în două doze de 500 UI (săptămânile 28 și 34) sau ca doză unică de 1.500 UI în săptămâna 28 sau între săptămânile 28 și 30 — Corect: Cele două scheme (2×500 UI sau 1×1500 UI) sunt cele implementate în Marea Britanie.\n\nMăsurarea pigmenților biliari în lichidul amniotic rămâne metoda de rutină pentru aprecierea severității — Incorect: Textul precizează că măsurarea pigmenților biliari în lichidul amniotic nu mai este folosită de rutină.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 354, Evaluarea și tratamentul antenatal; Abordarea postnatală; Prevenția (pagini PDF: 65).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    354
   ],
   "pdfPages": [
    65
   ],
   "section": "Evaluarea și tratamentul antenatal; Abordarea postnatală; Prevenția"
  },
  "learningObjective": "Înlocuirea spectrofotometriei lichidului amniotic cu Doppler MCA și reținerea celor patru cerințe ale unității de sânge plus schema antenatală anti-D.",
  "optionRationales": [
   "Doppler-ul arterei cerebrale mijlocii a înlocuit măsurarea pigmenților biliari ca metodă de rutină.",
   "Cele patru condiții (compatibilitate ABO dublă, antigen-negativ, ≤5 zile, iradiat) sunt lista din text.",
   "Rezistența HbF la acid, cu vizualizare după eozină, stă la baza testului Kleihauer.",
   "Cele două scheme (2×500 UI sau 1×1500 UI) sunt cele implementate în Marea Britanie.",
   "Textul precizează că măsurarea pigmenților biliari în lichidul amniotic nu mai este folosită de rutină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul reînvie o metodă pe care textul o declară abandonată; celelalte opțiuni combină Doppler MCA, patru criterii de unitate și două scheme de doze."
  },
  "textbookExpressions": [
   "arterei cerebrale mijlocii",
   "Kleihauer"
  ]
 },
 {
  "id": "hematologie-adv-033",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Policitemia (eritrocitoza), în distincțiile din capitol, se caracterizează prin:",
  "options": [
   "Hematocritul este un indicator mai de încredere decât hemoglobina, care poate să scadă disproporționat în deficitul de fier",
   "Policitemia Chuvash, autozomal recesivă, se datorează unei mutații în gena von Hippel–Lindau, cu creșterea producției de eritropoietină",
   "Fumatul intensiv poate produce până la 10% carboxihemoglobină și policitemie prin reducerea capacității de transport a oxigenului",
   "Eritropoietina serică este scăzută în policitemia secundară, similar policitemiei vera",
   "Eritrocitoza relativă înseamnă volum eritrocitar crescut cu volum plasmatic normal"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hematocritul este un indicator mai de încredere decât hemoglobina, care poate să scadă disproporționat în deficitul de fier — Corect: Superioritatea hematocritului când hemoglobina scade prin carență marțială este enunțată explicit.\n\nPolicitemia Chuvash, autozomal recesivă, se datorează unei mutații în gena von Hippel–Lindau, cu creșterea producției de eritropoietină — Corect: Defectul VHL cu EPO crescută este mecanismul Chuvash.\n\nFumatul intensiv poate produce până la 10% carboxihemoglobină și policitemie prin reducerea capacității de transport a oxigenului — Corect: Cifra de până la 10% carboxihemoglobină explică policitemia fumătorului.\n\nEritropoietina serică este scăzută în policitemia secundară, similar policitemiei vera — Incorect: În policitemia secundară, EPO este normală sau crescută, nu scăzută.\n\nEritrocitoza relativă înseamnă volum eritrocitar crescut cu volum plasmatic normal — Incorect: Eritrocitoza relativă are volum eritrocitar normal și volum plasmatic scăzut.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 355, Policitemia — Policitemiile secundare; Cadranul 16.17 (pagini PDF: 66).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    355
   ],
   "pdfPages": [
    66
   ],
   "section": "Policitemia — Policitemiile secundare; Cadranul 16.17"
  },
  "learningObjective": "Separarea hematocritului de hemoglobină, a căii VHL din policitemia Chuvash și a carboxihemoglobinei de 10% a fumătorului de profilul EPO al policitemiei vera.",
  "optionRationales": [
   "Superioritatea hematocritului când hemoglobina scade prin carență marțială este enunțată explicit.",
   "Defectul VHL cu EPO crescută este mecanismul Chuvash.",
   "Cifra de până la 10% carboxihemoglobină explică policitemia fumătorului.",
   "În policitemia secundară, EPO este normală sau crescută, nu scăzută.",
   "Eritrocitoza relativă are volum eritrocitar normal și volum plasmatic scăzut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică EPO-ul scăzut al policitemiei vera asupra formei secundare și inversează definiția eritrocitozei relative."
  },
  "textbookExpressions": [
   "Hematocritul",
   "10% carboxihemoglobină"
  ]
 },
 {
  "id": "hematologie-adv-034",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "Cea mai des întâlnită cauză a policitemiei secundare descrisă în text este:",
  "options": [
   "Hemangioblastomul cerebelos",
   "Carcinomul renal secretant de eritropoietină",
   "Fumatul intensiv",
   "Policitemia vera",
   "Mutația receptorului eritropoietinei"
  ],
  "correct": [
   2
  ],
  "explanation": "Hemangioblastomul cerebelos — Incorect: Hemangioblastomul figurează printre cauzele patologice de EPO, nu ca cea mai frecventă.\n\nCarcinomul renal secretant de eritropoietină — Incorect: Carcinomul renal este o cauză patologică, nu cea mai comună.\n\nFumatul intensiv — Corect: Textul numește fumatul intensiv cea mai des întâlnită cauză.\n\nPolicitemia vera — Incorect: Policitemia vera este forma primară neoplazică, nu o policitemie secundară.\n\nMutația receptorului eritropoietinei — Incorect: Mutațiile receptorului EPO sunt cauze congenitale rare, nu etiologia cea mai frecventă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 355, Policitemiile secundare — Tratament (pagini PDF: 66).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    355
   ],
   "pdfPages": [
    66
   ],
   "section": "Policitemiile secundare — Tratament"
  },
  "learningObjective": "Identificarea fumatului intensiv, nu a tumorilor rare secretante de EPO, ca cea mai frecventă cauză secundară citată.",
  "optionRationales": [
   "Hemangioblastomul figurează printre cauzele patologice de EPO, nu ca cea mai frecventă.",
   "Carcinomul renal este o cauză patologică, nu cea mai comună.",
   "Textul numește fumatul intensiv cea mai des întâlnită cauză.",
   "Policitemia vera este forma primară neoplazică, nu o policitemie secundară.",
   "Mutațiile receptorului EPO sunt cauze congenitale rare, nu etiologia cea mai frecventă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt cauze reale din Cadranul 16.17, dar rare sau primare; textul rezervă superlativul fumatului intensiv."
  },
  "textbookExpressions": [
   "cea mai des întâlnită cauză",
   "Fumatul intensiv"
  ]
 },
 {
  "id": "hematologie-adv-035",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Anemia, în definiția și clasificarea introductivă după VEM:",
  "options": [
   "Este definită de scăderea hemoglobinei sub nivelul de referință pentru vârsta și sexul individului",
   "Anemiile sunt descrise obișnuit ca hipocrome microcitare (VEM scăzut), normocrome normocitare (VEM normal) sau macrocitare (VEM crescut)",
   "Unele tipuri de anemie pot fi încadrate în mai multe categorii, deși există o justificare biologică a clasificării",
   "Anemia se definește prin hematocrit crescut, independent de vârstă și sex",
   "Toate anemiile se încadrează într-o singură categorie VEM, fără suprapuneri"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este definită de scăderea hemoglobinei sub nivelul de referință pentru vârsta și sexul individului — Corect: Definiția prin hemoglobină sub referința de vârstă și sex este cea de deschidere.\n\nAnemiile sunt descrise obișnuit ca hipocrome microcitare (VEM scăzut), normocrome normocitare (VEM normal) sau macrocitare (VEM crescut) — Corect: Cele trei categorii după VEM sunt enumerate explicit.\n\nUnele tipuri de anemie pot fi încadrate în mai multe categorii, deși există o justificare biologică a clasificării — Corect: Posibilitatea încadrării în mai multe categorii este precizată.\n\nAnemia se definește prin hematocrit crescut, independent de vârstă și sex — Incorect: Hematocritul crescut descrie policitemia, nu anemia.\n\nToate anemiile se încadrează într-o singură categorie VEM, fără suprapuneri — Incorect: Textul admite încadrări multiple.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 327, 328, Anemia: introducere — Definiție și clasificare (pagini PDF: 52, 53).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    327,
    328
   ],
   "pdfPages": [
    52,
    53
   ],
   "section": "Anemia: introducere — Definiție și clasificare"
  },
  "learningObjective": "Aplicarea definiției raportate la vârstă/sex și a celor trei categorii VEM, cu admiterea suprapunerilor.",
  "optionRationales": [
   "Definiția prin hemoglobină sub referința de vârstă și sex este cea de deschidere.",
   "Cele trei categorii după VEM sunt enumerate explicit.",
   "Posibilitatea încadrării în mai multe categorii este precizată.",
   "Hematocritul crescut descrie policitemia, nu anemia.",
   "Textul admite încadrări multiple."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii înlocuiesc hemoglobina scăzută cu hematocrit crescut și neagă suprapunerile pe care textul le admite."
  },
  "textbookExpressions": [
   "vârsta şi sexul",
   "VEM-ul"
  ]
 },
 {
  "id": "hematologie-adv-036",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "Durata de viață a eritrocitului matur, în Figura 16.5, este de aproximativ:",
  "options": [
   "120 de zile",
   "40 de zile",
   "7 zile",
   "365 de zile",
   "12 ore"
  ],
  "correct": [
   0
  ],
  "explanation": "120 de zile — Corect: 120 de zile este cifra din figură.\n\n40 de zile — Incorect: 40 de zile este prea scurtă pentru hematia normală.\n\n7 zile — Incorect: 7 zile este apropiat reticulocitului, nu eritrocitului matur.\n\n365 de zile — Incorect: Un an depășește durata citată.\n\n12 ore — Incorect: 12 ore nu este durata de viață a hematiei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 327, Producția și distrucția eritrocitelor — Figura 16.5 (pagini PDF: 52).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    327
   ],
   "pdfPages": [
    52
   ],
   "section": "Producția și distrucția eritrocitelor — Figura 16.5"
  },
  "learningObjective": "Reținerea duratei de 120 de zile a eritrocitului matur.",
  "optionRationales": [
   "120 de zile este cifra din figură.",
   "40 de zile este prea scurtă pentru hematia normală.",
   "7 zile este apropiat reticulocitului, nu eritrocitului matur.",
   "Un an depășește durata citată.",
   "12 ore nu este durata de viață a hematiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reciclează intervale hematologice plauzibile (reticulocit, săptămâni) în locul celor 120 de zile din figură."
  },
  "textbookExpressions": [
   "120 zile",
   "Eritrocit matur"
  ]
 },
 {
  "id": "hematologie-adv-037",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Semnele specifice observate în anumite tipuri de anemie includ:",
  "options": [
   "Koilonichia — unghii concave, în anemia feriprivă de lungă durată",
   "Icterul — în anemia hemolitică; deformări osoase — în talasemia majoră; ulcere la membrele inferioare — în siclemie",
   "Paloarea, tahicardia, suflul sistolic și insuficiența cardiacă ca semne generale",
   "Koilonichia este semnul siclemiei, icterul fiind rezervat carenței marțiale",
   "Deformările osoase definesc anemia feriprivă, nu talasemia"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Koilonichia — unghii concave, în anemia feriprivă de lungă durată — Corect: Koilonichia feriprivă este primul semn specific citat.\n\nIcterul — în anemia hemolitică; deformări osoase — în talasemia majoră; ulcere la membrele inferioare — în siclemie — Corect: Cele trei perechi hemoliză/talasemie/siclemie completează lista.\n\nPaloarea, tahicardia, suflul sistolic și insuficiența cardiacă ca semne generale — Corect: Paloarea, tahicardia, suflul și ICC sunt semnele generale enumerate.\n\nKoilonichia este semnul siclemiei, icterul fiind rezervat carenței marțiale — Incorect: Perechile sunt inversate.\n\nDeformările osoase definesc anemia feriprivă, nu talasemia — Incorect: Deformările osoase aparțin talasemiei majore.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 327, Anemia — Semne (pagini PDF: 52).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    327
   ],
   "pdfPages": [
    52
   ],
   "section": "Anemia — Semne"
  },
  "learningObjective": "Asocierea koilonichie–feriprivă, icter–hemoliză, oase–talasemie și ulcere–siclemie, distinct de semnele generale.",
  "optionRationales": [
   "Koilonichia feriprivă este primul semn specific citat.",
   "Cele trei perechi hemoliză/talasemie/siclemie completează lista.",
   "Paloarea, tahicardia, suflul și ICC sunt semnele generale enumerate.",
   "Perechile sunt inversate.",
   "Deformările osoase aparțin talasemiei majore."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută semnele specifice (koilonichie, oase, ulcere) între feriprivă, talasemie și siclemie."
  },
  "textbookExpressions": [
   "koilonichia",
   "talasemia majoră"
  ]
 },
 {
  "id": "hematologie-adv-038",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "O hemoglobină scăzută se evaluează, potrivit capitolului, împreună cu:",
  "options": [
   "Indicii eritrocitari, numărul leucocitelor și al trombocitelor",
   "Numărul reticulocitelor, care indică activitatea măduvei",
   "Frotiul de sânge periferic, morfologia anormală putând indica diagnosticul",
   "Doar VEM-ul izolat, celelalte linii fiind superflue",
   "Reticulocitele, care măsoară depozitele de fier, nu activitatea medulară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Indicii eritrocitari, numărul leucocitelor și al trombocitelor — Corect: Indicii și celelalte două linii sunt cerute explicit.\n\nNumărul reticulocitelor, care indică activitatea măduvei — Corect: Reticulocitele ca marker de activitate medulară sunt enunțate.\n\nFrotiul de sânge periferic, morfologia anormală putând indica diagnosticul — Corect: Frotiul pentru morfologie completează lista.\n\nDoar VEM-ul izolat, celelalte linii fiind superflue — Incorect: Textul cere pachetul, nu VEM-ul singur.\n\nReticulocitele, care măsoară depozitele de fier, nu activitatea medulară — Incorect: Reticulocitele indică activitatea măduvei, nu depozitele de fier.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 328, Investigații — Sângele periferic (pagini PDF: 53).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    328
   ],
   "pdfPages": [
    53
   ],
   "section": "Investigații — Sângele periferic"
  },
  "learningObjective": "Reținerea pachetului minim (indici, leucocite, trombocite, reticulocite, frotiu), nu a unui indice izolat.",
  "optionRationales": [
   "Indicii și celelalte două linii sunt cerute explicit.",
   "Reticulocitele ca marker de activitate medulară sunt enunțate.",
   "Frotiul pentru morfologie completează lista.",
   "Textul cere pachetul, nu VEM-ul singur.",
   "Reticulocitele indică activitatea măduvei, nu depozitele de fier."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reduc pachetul la VEM izolat și mută reticulocitul pe teritoriul feritinei."
  },
  "textbookExpressions": [
   "indicii eritrocitari",
   "numărul reticulocitelor"
  ]
 },
 {
  "id": "hematologie-adv-039",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Dismorfismul eritrocitar pe frotiu, în exemplul din capitol, poate apărea:",
  "options": [
   "Când se observă două populații de celule roșii",
   "De exemplu în „deficiențe duble”, cum este deficitul combinat de fier și folat în boala celiacă, sau după tratament cu preparate hematinice la anemici",
   "Doar în policitemia vera, ca semn patognomonic",
   "Când există o singură populație uniform microcitară",
   "Frotiul normal exclude orice deficit combinat"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Când se observă două populații de celule roșii — Corect: Definiția prin două populații este cea din text.\n\nDe exemplu în „deficiențe duble”, cum este deficitul combinat de fier și folat în boala celiacă, sau după tratament cu preparate hematinice la anemici — Corect: Celiacă și tratamentul hematinic sunt exemplele date.\n\nDoar în policitemia vera, ca semn patognomonic — Incorect: Policitemia vera nu este exemplul de dismorfism citat.\n\nCând există o singură populație uniform microcitară — Incorect: O singură populație nu este dismorfism.\n\nFrotiul normal exclude orice deficit combinat — Incorect: Dismorfismul tocmai semnalează deficite combinate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 328, Frotiul periferic — Dismorfism eritrocitar (pagini PDF: 53).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    328
   ],
   "pdfPages": [
    53
   ],
   "section": "Frotiul periferic — Dismorfism eritrocitar"
  },
  "learningObjective": "Recunoașterea celor două populații ca marker al deficitului combinat fier–folat sau al răspunsului la hematinice.",
  "optionRationales": [
   "Definiția prin două populații este cea din text.",
   "Celiacă și tratamentul hematinic sunt exemplele date.",
   "Policitemia vera nu este exemplul de dismorfism citat.",
   "O singură populație nu este dismorfism.",
   "Dismorfismul tocmai semnalează deficite combinate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută dismorfismul pe policitemie și neagă exemplul fier–folat din boala celiacă."
  },
  "textbookExpressions": [
   "dismorfism eritrocitar",
   "deficienţe duble"
  ]
 },
 {
  "id": "hematologie-adv-040",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Cauzele anemiei aplastice, conform Cadranului 16.7, includ:",
  "options": [
   "Forma moștenită (anemia Fanconi) și forma idiopatică dobândită (circa 67% din cazuri)",
   "Produse chimice (benzen, toluen, adeziv) și radiații ionizante",
   "Medicamente: chimioterapice, cloramfenicol, săruri de aur, penicilamină, fenitoină, carbamazepină, carbimazol, azatioprină",
   "Infecții virale (hepatită, EBV, HIV, eritrovirus) și tuberculoza",
   "Deficitul de fier ca mecanism primar al pancitopeniei hipocelulare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Forma moștenită (anemia Fanconi) și forma idiopatică dobândită (circa 67% din cazuri) — Corect: Fanconi și 67% idiopatic sunt rândurile primare.\n\nProduse chimice (benzen, toluen, adeziv) și radiații ionizante — Corect: Benzenul/toluenul/adezivul și iradierea sunt secundare chimice/fizice.\n\nMedicamente: chimioterapice, cloramfenicol, săruri de aur, penicilamină, fenitoină, carbamazepină, carbimazol, azatioprină — Corect: Lista de medicamente este cea din cadran.\n\nInfecții virale (hepatită, EBV, HIV, eritrovirus) și tuberculoza — Corect: Virusurile citate și tuberculoza încheie etiologiile infecțioase.\n\nDeficitul de fier ca mecanism primar al pancitopeniei hipocelulare — Incorect: Carența marțială produce microcitoză, nu aplazie hipocelulară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 336, Cadranul 16.7 — Cauzele anemiei aplastice (pagini PDF: 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    336
   ],
   "pdfPages": [
    61
   ],
   "section": "Cadranul 16.7 — Cauzele anemiei aplastice"
  },
  "learningObjective": "Reținerea predominanței idiopatice (67%) și a listelor toxică/medicamentoasă/infecțioasă, distinct de carența marțială.",
  "optionRationales": [
   "Fanconi și 67% idiopatic sunt rândurile primare.",
   "Benzenul/toluenul/adezivul și iradierea sunt secundare chimice/fizice.",
   "Lista de medicamente este cea din cadran.",
   "Virusurile citate și tuberculoza încheie etiologiile infecțioase.",
   "Carența marțială produce microcitoză, nu aplazie hipocelulară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul reintroduce carența marțială, în timp ce cadranul listează Fanconi, idiopatic 67% și toxice."
  },
  "textbookExpressions": [
   "67% din cazuri",
   "cloramfenicol"
  ]
 },
 {
  "id": "hematologie-adv-041",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Anemia hemolitică dobândită se clasifică etiologic în:",
  "options": [
   "Cauze imune: autoanticorpi, anticorpi induși de medicamente și aloanticorpi",
   "Cauze non-imune: defecte membranare dobândite (HPN), factori mecanici (proteze, microangiopatie) și patologii sistemice (renale, hepatice)",
   "Cauze variate: toxine (arsenic, Clostridium perfringens), malarie, hipersplenism, arsuri extinse și hemoliză oxidativă (dapsonă, sulfasalazină, clorat de sodiu)",
   "Doar deficitul de B12, ca unică cauză dobândită de hemoliză",
   "Hemoliza dobândită exclude cauzele mecanice și toxice"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cauze imune: autoanticorpi, anticorpi induși de medicamente și aloanticorpi — Corect: Cele trei categorii imune sunt lista de deschidere.\n\nCauze non-imune: defecte membranare dobândite (HPN), factori mecanici (proteze, microangiopatie) și patologii sistemice (renale, hepatice) — Corect: HPN, protezele/microangiopatia și bolile de sistem sunt non-imunele citate.\n\nCauze variate: toxine (arsenic, Clostridium perfringens), malarie, hipersplenism, arsuri extinse și hemoliză oxidativă (dapsonă, sulfasalazină, clorat de sodiu) — Corect: Toxinele, malaria, hipersplenismul, arsurile și Heinz-urile medicamentoase sunt cauzele variate.\n\nDoar deficitul de B12, ca unică cauză dobândită de hemoliză — Incorect: B12 produce megaloblastoză, nu este clasificată aici ca hemoliză dobândită.\n\nHemoliza dobândită exclude cauzele mecanice și toxice — Incorect: Cauzele mecanice și toxice sunt explicit incluse.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 351, Anemia hemolitică dobândită — Etiologie (pagini PDF: 62).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    351
   ],
   "pdfPages": [
    62
   ],
   "section": "Anemia hemolitică dobândită — Etiologie"
  },
  "learningObjective": "Separarea celor trei pachete (imun, non-imun, variat toxic/infecțios) de cauzele megaloblastice.",
  "optionRationales": [
   "Cele trei categorii imune sunt lista de deschidere.",
   "HPN, protezele/microangiopatia și bolile de sistem sunt non-imunele citate.",
   "Toxinele, malaria, hipersplenismul, arsurile și Heinz-urile medicamentoase sunt cauzele variate.",
   "B12 produce megaloblastoză, nu este clasificată aici ca hemoliză dobândită.",
   "Cauzele mecanice și toxice sunt explicit incluse."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reintroduc B12 și exclud mecanicul/toxicul, cele două pachete din aceeași listă."
  },
  "textbookExpressions": [
   "autoanticorpi",
   "Clostridium perfringens"
  ]
 },
 {
  "id": "hematologie-adv-042",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Testele antiglobulinice (Coombs), în Figura 16.26, se deosebesc prin:",
  "options": [
   "Testul direct evidențiază eritrocitele pacientului sensibilizate in vivo prin IgG (AHAI, reacții transfuzionale, BHNN, hemoliză post-medicament)",
   "Testul indirect evidențiază eritrocitele normale sensibilizate in vitro de aloanticorpi iregulari din ser, util la depistarea anticorpilor neregulați și la proba de compatibilitate",
   "Testul direct folosește eritrocite normale incubate cu serul pacientului, iar indirectul detectează sensibilizarea in vivo",
   "Coombs indirect este rezervat doar policitemiei, nu probei de compatibilitate",
   "Anti-globulina umană nu produce aglutinare vizibilă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Testul direct evidențiază eritrocitele pacientului sensibilizate in vivo prin IgG (AHAI, reacții transfuzionale, BHNN, hemoliză post-medicament) — Corect: Lista AHAI/transfuzie/BHNN/medicament este a testului direct.\n\nTestul indirect evidențiază eritrocitele normale sensibilizate in vitro de aloanticorpi iregulari din ser, util la depistarea anticorpilor neregulați și la proba de compatibilitate — Corect: Aloanticorpii in vitro și proba de compatibilitate definesc indirectul.\n\nTestul direct folosește eritrocite normale incubate cu serul pacientului, iar indirectul detectează sensibilizarea in vivo — Incorect: Sensurile in vivo/in vitro sunt inversate.\n\nCoombs indirect este rezervat doar policitemiei, nu probei de compatibilitate — Incorect: Indirectul este tocmai al compatibilității.\n\nAnti-globulina umană nu produce aglutinare vizibilă — Incorect: Anti-globulina formează punți și aglutinare vizibilă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 351, Figura 16.26 — Testele antiglobulinice (Coombs) (pagini PDF: 62).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    351
   ],
   "pdfPages": [
    62
   ],
   "section": "Figura 16.26 — Testele antiglobulinice (Coombs)"
  },
  "learningObjective": "Contrastarea sensibilizării in vivo (direct) de cea in vitro pe eritrocite normale (indirect, compatibilitate).",
  "optionRationales": [
   "Lista AHAI/transfuzie/BHNN/medicament este a testului direct.",
   "Aloanticorpii in vitro și proba de compatibilitate definesc indirectul.",
   "Sensurile in vivo/in vitro sunt inversate.",
   "Indirectul este tocmai al compatibilității.",
   "Anti-globulina formează punți și aglutinare vizibilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează in vivo versus in vitro, distincția centrală a figurii Coombs."
  },
  "textbookExpressions": [
   "Testul antiglobulinic direct",
   "proba de compatibilitate"
  ]
 },
 {
  "id": "hematologie-adv-043",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Distrugerea imună a eritrocitelor, după izotip, se caracterizează prin:",
  "options": [
   "IgG, de cele mai multe ori fără activarea complementului, produce hemoliză extravasculară: fagocitoză splenică prin receptori Fc sau sferocite după fagocitoză parțială",
   "IgM care activează parțial complementul determină aderarea la receptorii C3b ai macrofagelor, mai ales hepatice, mecanism ineficient; celulele sunt eliberate cu C3d la suprafață",
   "IgM fără afinitate pentru complement sunt rare și au efect scăzut sau deloc asupra supraviețuirii eritrocitelor",
   "IgG produce hemoliză intravasculară hepatică, splina neparticipând",
   "IgM fără complement este mecanismul cel mai eficient de hemoliză splenică"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "IgG, de cele mai multe ori fără activarea complementului, produce hemoliză extravasculară: fagocitoză splenică prin receptori Fc sau sferocite după fagocitoză parțială — Corect: Fagocitoza splenică Fc și sferocitele sunt ale IgG.\n\nIgM care activează parțial complementul determină aderarea la receptorii C3b ai macrofagelor, mai ales hepatice, mecanism ineficient; celulele sunt eliberate cu C3d la suprafață — Corect: Calea C3b hepatică ineficientă și C3d sunt ale IgM parțial activator.\n\nIgM fără afinitate pentru complement sunt rare și au efect scăzut sau deloc asupra supraviețuirii eritrocitelor — Corect: IgM fără complement are efect scăzut.\n\nIgG produce hemoliză intravasculară hepatică, splina neparticipând — Incorect: IgG este extravascular splenic, nu intravascular hepatic.\n\nIgM fără complement este mecanismul cel mai eficient de hemoliză splenică — Incorect: IgM fără complement este tocmai calea ineficientă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 352, Distrugerea imună a eritrocitelor (pagini PDF: 63).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    352
   ],
   "pdfPages": [
    63
   ],
   "section": "Distrugerea imună a eritrocitelor"
  },
  "learningObjective": "Separarea căii Fc splenice a IgG de aderarea C3b hepatică ineficientă a IgM, cu C3d rezidual.",
  "optionRationales": [
   "Fagocitoza splenică Fc și sferocitele sunt ale IgG.",
   "Calea C3b hepatică ineficientă și C3d sunt ale IgM parțial activator.",
   "IgM fără complement are efect scăzut.",
   "IgG este extravascular splenic, nu intravascular hepatic.",
   "IgM fără complement este tocmai calea ineficientă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută IgG pe calea hepatică intravasculară și transformă IgM fără complement în mecanismul cel mai eficient."
  },
  "textbookExpressions": [
   "receptorii Fc",
   "C3d"
  ]
 },
 {
  "id": "hematologie-adv-044",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Boala cronică a hemaglutinării la rece (CHAD) se caracterizează prin:",
  "options": [
   "Apariție de obicei la vârstnici, cu debut gradual, prin aglutinine IgM monoclonale la rece",
   "Acrocianoză similară Raynaud după expunere la frig, prin autoaglutinare",
   "Titrul aglutininelor la rece peste 1:512 și Coombs pozitiv doar pentru C3d; specificitate de obicei pentru antigenul I, ocazional i",
   "Predominanța IgG la 37°C, cu Coombs pozitiv doar pentru IgG, ca în forma la cald",
   "Răspuns constant la prednison 1 mg/kg, splenectomia fiind de primă intenție"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Apariție de obicei la vârstnici, cu debut gradual, prin aglutinine IgM monoclonale la rece — Corect: Vârsta, debutul gradual și IgM monoclonal sunt din deschidere.\n\nAcrocianoză similară Raynaud după expunere la frig, prin autoaglutinare — Corect: Acrocianoza de tip Raynaud după frig este tabloul clinic.\n\nTitrul aglutininelor la rece peste 1:512 și Coombs pozitiv doar pentru C3d; specificitate de obicei pentru antigenul I, ocazional i — Corect: 1:512, C3d și antigenul I (sau i) sunt investigațiile.\n\nPredominanța IgG la 37°C, cu Coombs pozitiv doar pentru IgG, ca în forma la cald — Incorect: IgG la 37°C este forma la cald.\n\nRăspuns constant la prednison 1 mg/kg, splenectomia fiind de primă intenție — Incorect: Steroizii și splenectomia sunt descrise ca de obicei ineficiente.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 353, Boala cronică a hemaglutinării la rece (pagini PDF: 64).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    353
   ],
   "pdfPages": [
    64
   ],
   "section": "Boala cronică a hemaglutinării la rece"
  },
  "learningObjective": "Recunoașterea fenotipului vârstnic monoclonal IgM, a titrului >1:512, a C3d și a antigenului I, distinct de forma la cald.",
  "optionRationales": [
   "Vârsta, debutul gradual și IgM monoclonal sunt din deschidere.",
   "Acrocianoza de tip Raynaud după frig este tabloul clinic.",
   "1:512, C3d și antigenul I (sau i) sunt investigațiile.",
   "IgG la 37°C este forma la cald.",
   "Steroizii și splenectomia sunt descrise ca de obicei ineficiente."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică izotipul, Coombs-ul și prednisonul formei la cald asupra CHAD, unde textul cere IgM/C3d și eșecul steroizilor."
  },
  "textbookExpressions": [
   "1:512",
   "antigenul I"
  ]
 },
 {
  "id": "hematologie-adv-045",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Tratamentul AHAI la rece, potrivit capitolului, include:",
  "options": [
   "Evitarea expunerii la frig",
   "Steroizii, alchilanții și splenectomia sunt de obicei ineficiente",
   "Rituximabul (anti-CD20) s-a dovedit eficient în unele cazuri",
   "Dacă este nevoie de transfuzie, pacientul trebuie să se afle într-un spațiu cald; compatibilitatea poate fi dificilă din cauza aglutininelor",
   "Splenectomia și prednisonul sunt de primă intenție, ca în forma la cald"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Evitarea expunerii la frig — Corect: Evitarea frigului este prima măsură.\n\nSteroizii, alchilanții și splenectomia sunt de obicei ineficiente — Corect: Ineficiența steroizi/alchilanți/splenectomie este explicită.\n\nRituximabul (anti-CD20) s-a dovedit eficient în unele cazuri — Corect: Rituximabul este excepția citată.\n\nDacă este nevoie de transfuzie, pacientul trebuie să se afle într-un spațiu cald; compatibilitatea poate fi dificilă din cauza aglutininelor — Corect: Spațiul cald și dificultatea compatibilității completează conduita transfuzională.\n\nSplenectomia și prednisonul sunt de primă intenție, ca în forma la cald — Incorect: Aceste măsuri sunt ale formei la cald, nu ale celei la rece.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 353, AHAI la rece — Tratament (pagini PDF: 64).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    353
   ],
   "pdfPages": [
    64
   ],
   "section": "AHAI la rece — Tratament"
  },
  "learningObjective": "Contrastarea evită-frigul / rituximab / transfuzie la cald de ineficiența steroizilor, alchilanților și splenectomiei.",
  "optionRationales": [
   "Evitarea frigului este prima măsură.",
   "Ineficiența steroizi/alchilanți/splenectomie este explicită.",
   "Rituximabul este excepția citată.",
   "Spațiul cald și dificultatea compatibilității completează conduita transfuzională.",
   "Aceste măsuri sunt ale formei la cald, nu ale celei la rece."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul transplantează prednisonul și splenectomia formei la cald asupra formei la rece, unde textul le numește ineficiente."
  },
  "textbookExpressions": [
   "expunerea la frig",
   "Rituximab"
  ]
 },
 {
  "id": "hematologie-adv-046",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Hemoglobinuria paroxistică la rece (PCH) se caracterizează prin:",
  "options": [
   "Afecțiune rară asociată infecțiilor comune ale copilului (pojar, oreion, varicelă)",
   "Anticorpi IgG bifazici, cu afinitate pentru complement și specificitate pentru antigenul P",
   "Testul Donath–Landsteiner: incubare la 4°C apoi încălzire la 37°C; hemoliza este autolimitantă",
   "Anticorpi IgM monoclonali anti-I, ca în CHAD a vârstnicului",
   "Splenectomia de primă intenție, hemoliza fiind cronică și progresivă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Afecțiune rară asociată infecțiilor comune ale copilului (pojar, oreion, varicelă) — Corect: Contextul pediatric post-pojar/oreion/varicelă este etiologia citată.\n\nAnticorpi IgG bifazici, cu afinitate pentru complement și specificitate pentru antigenul P — Corect: IgG bifazic, complementul și antigenul P sunt serologia.\n\nTestul Donath–Landsteiner: incubare la 4°C apoi încălzire la 37°C; hemoliza este autolimitantă — Corect: Protocolul 4°C→37°C poartă numele Donath–Landsteiner.\n\nAnticorpi IgM monoclonali anti-I, ca în CHAD a vârstnicului — Incorect: IgM anti-I este al CHAD, nu al PCH.\n\nSplenectomia de primă intenție, hemoliza fiind cronică și progresivă — Incorect: Hemoliza este autolimitantă; splenectomia nu este conduita descrisă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 353, Hemoglobinuria paroxistică la rece (pagini PDF: 64).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    353
   ],
   "pdfPages": [
    64
   ],
   "section": "Hemoglobinuria paroxistică la rece"
  },
  "learningObjective": "Separarea PCH (IgG bifazic anti-P, Donath–Landsteiner, copil post-infecțios) de CHAD (IgM anti-I).",
  "optionRationales": [
   "Contextul pediatric post-pojar/oreion/varicelă este etiologia citată.",
   "IgG bifazic, complementul și antigenul P sunt serologia.",
   "Protocolul 4°C→37°C poartă numele Donath–Landsteiner.",
   "IgM anti-I este al CHAD, nu al PCH.",
   "Hemoliza este autolimitantă; splenectomia nu este conduita descrisă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică serologia CHAD (IgM anti-I) și splenectomia asupra PCH pediatrică Donath–Landsteiner."
  },
  "textbookExpressions": [
   "Donath-Landsteiner",
   "antigenul eritrocitar P"
  ]
 },
 {
  "id": "hematologie-adv-047",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la anemia hemolitică imună iatrogenă:",
  "options": [
   "Testarea uzuală a anticorpilor eritrocitari cu afinitate pentru medicament nu se face, iar reintroducerea medicației pentru a proba cauzalitatea nu se recomandă; diagnosticul cere asociere temporală, DAT pozitiv și remisiune după oprire",
   "Reintroducerea de rutină a medicamentului este necesară pentru a confirma diagnosticul",
   "Testul antiglobulinic direct este superfluu, asocierea temporală fiind suficientă",
   "Remisiunea după oprire infirmă cauzalitatea, motiv pentru care medicamentul se reia imediat",
   "Anticorpii față de medicament se dozează uzual înaintea oricărui DAT"
  ],
  "correct": [
   0
  ],
  "explanation": "Testarea uzuală a anticorpilor eritrocitari cu afinitate pentru medicament nu se face, iar reintroducerea medicației pentru a proba cauzalitatea nu se recomandă; diagnosticul cere asociere temporală, DAT pozitiv și remisiune după oprire — Corect: Cele două interdicții și triada diagnostică sunt din paragraf.\n\nReintroducerea de rutină a medicamentului este necesară pentru a confirma diagnosticul — Incorect: Reintroducerea nu se recomandă.\n\nTestul antiglobulinic direct este superfluu, asocierea temporală fiind suficientă — Incorect: DAT pozitiv face parte din confirmare.\n\nRemisiunea după oprire infirmă cauzalitatea, motiv pentru care medicamentul se reia imediat — Incorect: Remisiunea după oprire susține, nu infirmă, cauzalitatea.\n\nAnticorpii față de medicament se dozează uzual înaintea oricărui DAT — Incorect: Testarea anticorpilor medicamentoși nu se face uzual.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 353, Anemia hemolitică imună iatrogenă (pagini PDF: 64).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    353
   ],
   "pdfPages": [
    64
   ],
   "section": "Anemia hemolitică imună iatrogenă"
  },
  "learningObjective": "Recunoașterea interdicției de reintroducere și a absenței testării uzuale a anticorpilor medicamentoși, plus triada temporalitate–DAT–remisiune.",
  "optionRationales": [
   "Cele două interdicții și triada diagnostică sunt din paragraf.",
   "Reintroducerea nu se recomandă.",
   "DAT pozitiv face parte din confirmare.",
   "Remisiunea după oprire susține, nu infirmă, cauzalitatea.",
   "Testarea anticorpilor medicamentoși nu se face uzual."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă cele două interdicții (reintroducere, testare uzuală) în criterii obligatorii de diagnostic."
  },
  "textbookExpressions": [
   "asociere temporală",
   "întreruperea tratamentului"
  ]
 },
 {
  "id": "hematologie-adv-048",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Printre cauzele variate de hemoliză dobândită non-autoimună se numără:",
  "options": [
   "Arsurile extinse, care denaturează proteinele membranare și scurtează supraviețuirea eritrocitară",
   "Dapsona și sulfasalazina, care produc hemoliză oxidativă cu corpi Heinz",
   "Cloratul de sodiu (erbicid), care poate cauza hemoliză oxidativă severă urmată de insuficiență renală acută",
   "Koilonichia feriprivă ca mecanism de hemoliză intravasculară",
   "Deficitul de folat ca unică toxină membranară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Arsurile extinse, care denaturează proteinele membranare și scurtează supraviețuirea eritrocitară — Corect: Denaturarea membranară din arsuri este exemplul dat.\n\nDapsona și sulfasalazina, care produc hemoliză oxidativă cu corpi Heinz — Corect: Dapsona/sulfasalazina și corpii Heinz sunt perechea citată.\n\nCloratul de sodiu (erbicid), care poate cauza hemoliză oxidativă severă urmată de insuficiență renală acută — Corect: Cloratul urmat de IRA încheie lista chimică.\n\nKoilonichia feriprivă ca mecanism de hemoliză intravasculară — Incorect: Koilonichia este semn de feriprivă, nu mecanism hemolitic.\n\nDeficitul de folat ca unică toxină membranară — Incorect: Folatul nu este toxină membranară în această listă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 351, Cauze variate de hemoliză dobândită (pagini PDF: 62).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    351
   ],
   "pdfPages": [
    62
   ],
   "section": "Cauze variate de hemoliză dobândită"
  },
  "learningObjective": "Recunoașterea arsurilor, a Heinz-urilor (dapsonă/sulfasalazină) și a cloratului cu IRA, distinct de carențele megaloblastice/marțiale.",
  "optionRationales": [
   "Denaturarea membranară din arsuri este exemplul dat.",
   "Dapsona/sulfasalazina și corpii Heinz sunt perechea citată.",
   "Cloratul urmat de IRA încheie lista chimică.",
   "Koilonichia este semn de feriprivă, nu mecanism hemolitic.",
   "Folatul nu este toxină membranară în această listă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reintroduc semne de carență (koilonichie, folat) într-o listă de hemolize toxice/oxidative."
  },
  "textbookExpressions": [
   "corpi Heinz",
   "cloratul de sodiu"
  ]
 },
 {
  "id": "hematologie-adv-049",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Eculizumabul în hemoglobinuria paroxistică nocturnă:",
  "options": [
   "Este un anticorp monoclonal recombinant care împiedică clivarea C5, prevenind formarea complexului de atac al membranei",
   "Se administrează intravenos la fiecare 7 zile în primele 5 săptămâni, apoi la fiecare două săptămâni",
   "Reduce hemoliza intravasculară, hemoglobinuria și necesarul transfuzional și scade riscul trombotic",
   "Vaccinarea anti-Neisseria meningitidis se recomandă cu două săptămâni înaintea inițierii, infecția meningococică fiind riscul blocării complete a complementului",
   "Reactivează măduva aplazică, înlocuind transplantul la vârstnici"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este un anticorp monoclonal recombinant care împiedică clivarea C5, prevenind formarea complexului de atac al membranei — Corect: Blocarea C5 și a MAC este mecanismul.\n\nSe administrează intravenos la fiecare 7 zile în primele 5 săptămâni, apoi la fiecare două săptămâni — Corect: Schema 7 zile apoi 14 zile este cea din text.\n\nReduce hemoliza intravasculară, hemoglobinuria și necesarul transfuzional și scade riscul trombotic — Corect: Reducerea hemolizei/transfuziei și a trombozei este beneficiul citat.\n\nVaccinarea anti-Neisseria meningitidis se recomandă cu două săptămâni înaintea inițierii, infecția meningococică fiind riscul blocării complete a complementului — Corect: Vaccinul meningococic cu 2 săptămâni înainte este precauția.\n\nReactivează măduva aplazică, înlocuind transplantul la vârstnici — Incorect: Textul precizează că eculizumabul nu determină reactivarea medulară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 355, HPN — Tratament cu eculizumab (pagini PDF: 66).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    355
   ],
   "pdfPages": [
    66
   ],
   "section": "HPN — Tratament cu eculizumab"
  },
  "learningObjective": "Integrarea țintei C5, a schemei 7 zile/5 săptămâni apoi la 14 zile, a beneficiului trombotic și a vaccinării meningococice cu 2 săptămâni înainte.",
  "optionRationales": [
   "Blocarea C5 și a MAC este mecanismul.",
   "Schema 7 zile apoi 14 zile este cea din text.",
   "Reducerea hemolizei/transfuziei și a trombozei este beneficiul citat.",
   "Vaccinul meningococic cu 2 săptămâni înainte este precauția.",
   "Textul precizează că eculizumabul nu determină reactivarea medulară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul atribuie eculizumabului reactivarea medulară, pe care textul o neagă explicit, păstrând totodată schema C5 și vaccinul."
  },
  "textbookExpressions": [
   "clivarea C5",
   "N. meningitidis"
  ]
 },
 {
  "id": "hematologie-adv-050",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Aportul și absorbția fierului din dieta obișnuită din Marea Britanie, în datele capitolului, sunt:",
  "options": [
   "Dieta zilnică obișnuită conține 15-20 mg de fier, din care, în mod normal, se absoarbe doar 10%",
   "Absorbția poate fi crescută la 20-30% în deficiența de fier și sarcină",
   "Majoritatea fierului din organism este sub forma ferică insolubilă (Fe3+), cu biodisponibilitate slabă; fierul feros (Fe2+) este absorbit mai ușor",
   "Dieta zilnică furnizează 150-200 mg, absorbiți în totalitate ca Fe3+",
   "Absorbția scade sub 1% în sarcină, forma ferică fiind cea mai bine absorbită"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Dieta zilnică obișnuită conține 15-20 mg de fier, din care, în mod normal, se absoarbe doar 10% — Corect: Cifrele 15-20 mg și 10% sunt cele de deschidere.\n\nAbsorbția poate fi crescută la 20-30% în deficiența de fier și sarcină — Corect: Creșterea la 20-30% în carență și sarcină este explicită.\n\nMajoritatea fierului din organism este sub forma ferică insolubilă (Fe3+), cu biodisponibilitate slabă; fierul feros (Fe2+) este absorbit mai ușor — Corect: Predominanța Fe3+ insolubil și absorbția superioară a Fe2+ sunt din același paragraf.\n\nDieta zilnică furnizează 150-200 mg, absorbiți în totalitate ca Fe3+ — Incorect: 150-200 mg este un ordin de mărime prea mare; absorbția totală ca Fe3+ contrazice textul.\n\nAbsorbția scade sub 1% în sarcină, forma ferică fiind cea mai bine absorbită — Incorect: În sarcină absorbția crește, iar Fe2+ este forma mai bine absorbită.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 329, Anemia microcitară — Aportul dietetic (pagini PDF: 54).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    329
   ],
   "pdfPages": [
    54
   ],
   "section": "Anemia microcitară — Aportul dietetic"
  },
  "learningObjective": "Reținerea cifrelor 15-20 mg / 10% / 20-30% și a biodisponibilității Fe2+ versus Fe3+.",
  "optionRationales": [
   "Cifrele 15-20 mg și 10% sunt cele de deschidere.",
   "Creșterea la 20-30% în carență și sarcină este explicită.",
   "Predominanța Fe3+ insolubil și absorbția superioară a Fe2+ sunt din același paragraf.",
   "150-200 mg este un ordin de mărime prea mare; absorbția totală ca Fe3+ contrazice textul.",
   "În sarcină absorbția crește, iar Fe2+ este forma mai bine absorbită."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii umflă de zece ori aportul zilnic și inversează Fe2+ versus Fe3+."
  },
  "textbookExpressions": [
   "15-20 mg de fier",
   "Fierul feros (Fe2+)"
  ]
 },
 {
  "id": "hematologie-adv-051",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Factorii care influențează absorbția fierului, conform Cadranului 16.3 și textului adiacent, includ:",
  "options": [
   "Fierul heminic este absorbit mai bine decât fierul non-heminic; fierul feros este absorbit mai bine decât fierul feric",
   "Aciditatea gastrică ajută la păstrarea fierului în stare feroasă și solubilă în intestinul superior",
   "Absorbția este crescută la depozite scăzute și la activitate eritropoietică crescută (sângerare, hemoliză, altitudine mare) și scăzută în supraîncărcare, cu excepția hemocromatozei ereditare",
   "Filatul sau fosfatul cresc absorbția prin formarea de complexe solubile",
   "HCP1, transportorul de hem, este exprimat predominant în ileonul terminal, nu în duoden"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Fierul heminic este absorbit mai bine decât fierul non-heminic; fierul feros este absorbit mai bine decât fierul feric — Corect: Cele două ierarhii heminic>non-heminic și feros>feric deschid cadranul.\n\nAciditatea gastrică ajută la păstrarea fierului în stare feroasă și solubilă în intestinul superior — Corect: Rolul acidității gastrice este un rând separat.\n\nAbsorbția este crescută la depozite scăzute și la activitate eritropoietică crescută (sângerare, hemoliză, altitudine mare) și scăzută în supraîncărcare, cu excepția hemocromatozei ereditare — Corect: Creșterea la depozite/eritropoieză și excepția hemocromatozei închid lista.\n\nFilatul sau fosfatul cresc absorbția prin formarea de complexe solubile — Incorect: Fitatul/fosfatul formează complexe insolubile și scad absorbția.\n\nHCP1, transportorul de hem, este exprimat predominant în ileonul terminal, nu în duoden — Incorect: HCP1 este foarte bine exprimat în duoden.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 329, 330, Cadranul 16.3 — Absorbția fierului (pagini PDF: 54, 55).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    329,
    330
   ],
   "pdfPages": [
    54,
    55
   ],
   "section": "Cadranul 16.3 — Absorbția fierului"
  },
  "learningObjective": "Integrarea heminic/feros, a acidității gastrice și a reglatorilor de depozit/eritropoieză, distinct de fitat și de sediul HCP1.",
  "optionRationales": [
   "Cele două ierarhii heminic>non-heminic și feros>feric deschid cadranul.",
   "Rolul acidității gastrice este un rând separat.",
   "Creșterea la depozite/eritropoieză și excepția hemocromatozei închid lista.",
   "Fitatul/fosfatul formează complexe insolubile și scad absorbția.",
   "HCP1 este foarte bine exprimat în duoden."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează efectul fitatului și mută HCP1 de pe duoden pe ileon."
  },
  "textbookExpressions": [
   "Fierul heminic",
   "HCP1"
  ]
 },
 {
  "id": "hematologie-adv-052",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Hepcidina, în reglarea absorbției fierului, se caracterizează prin:",
  "options": [
   "Este o peptidă de 25 de aminoacizi sintetizată în ficat",
   "Se leagă de feroportină, provocând internalizarea și degradarea ei, deci scăderea efluxului de fier în plasmă",
   "Valorile crescute (inflamație, IL-6) limitează absorbția; nivelurile scăzute (anemie, depozite scăzute, hipoxie) o stimulează",
   "Eritroferonul, produs de eritroblaste, scade hepcidina și crește feroportina în eritropoieza ineficientă (ex. talasemie)",
   "Hepcidina este un hormon duodenal de 150 de aminoacizi care activează feroportina în inflamație"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este o peptidă de 25 de aminoacizi sintetizată în ficat — Corect: Originea hepatică și lungimea de 25 AA sunt definiția.\n\nSe leagă de feroportină, provocând internalizarea și degradarea ei, deci scăderea efluxului de fier în plasmă — Corect: Internalizarea feroportinei este mecanismul.\n\nValorile crescute (inflamație, IL-6) limitează absorbția; nivelurile scăzute (anemie, depozite scăzute, hipoxie) o stimulează — Corect: Perechea IL-6 versus anemie/hipoxie este direcția de reglare.\n\nEritroferonul, produs de eritroblaste, scade hepcidina și crește feroportina în eritropoieza ineficientă (ex. talasemie) — Corect: Eritroferonul explică supraabsorbția din talasemie.\n\nHepcidina este un hormon duodenal de 150 de aminoacizi care activează feroportina în inflamație — Incorect: Hepcidina este hepatică, de 25 AA, și distruge feroportina, nu o activează.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 330, Hepcidina și feroportina (pagini PDF: 55).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    330
   ],
   "pdfPages": [
    55
   ],
   "section": "Hepcidina și feroportina"
  },
  "learningObjective": "Asocierea peptidei hepatice de 25 AA, a internalizării feroportinei, a IL-6 și a eritroferonului.",
  "optionRationales": [
   "Originea hepatică și lungimea de 25 AA sunt definiția.",
   "Internalizarea feroportinei este mecanismul.",
   "Perechea IL-6 versus anemie/hipoxie este direcția de reglare.",
   "Eritroferonul explică supraabsorbția din talasemie.",
   "Hepcidina este hepatică, de 25 AA, și distruge feroportina, nu o activează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru fapte din același paragraf; distractorul mută hepcidina în duoden și inversează efectul pe feroportină."
  },
  "textbookExpressions": [
   "25 aminoacizi",
   "eritroferon"
  ]
 },
 {
  "id": "hematologie-adv-053",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Transportul fierului în plasmă, potrivit capitolului, se recunoaște prin:",
  "options": [
   "Nivelul normal al fierului seric este de aproximativ 13-32 µmol/L, cu ritm diurn (mai crescut dimineața); valoarea este de mică utilitate clinică pentru depozite",
   "Fierul este transportat legat de transferină; fiecare moleculă leagă doi atomi de fier feric și este saturată în mod normal în proporție de o treime",
   "Fierul seric este markerul de elecție al depozitelor, transferina legând un singur atom de Fe2+ la saturație 90%",
   "Cea mai mare parte a fierului de pe transferină provine din absorbția intestinală imediată, nu din reciclarerea macrofagică",
   "La adultul bărbat se reciclează 2 mg/zi, fără participarea sistemului reticuloendotelial"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Nivelul normal al fierului seric este de aproximativ 13-32 µmol/L, cu ritm diurn (mai crescut dimineața); valoarea este de mică utilitate clinică pentru depozite — Corect: Intervalul, ritmul diurn și utilitatea redusă sunt din deschidere.\n\nFierul este transportat legat de transferină; fiecare moleculă leagă doi atomi de fier feric și este saturată în mod normal în proporție de o treime — Corect: Doi atomi de Fe3+ și saturația de o treime definesc transferina.\n\nFierul seric este markerul de elecție al depozitelor, transferina legând un singur atom de Fe2+ la saturație 90% — Incorect: Textul spune că fierul seric are mică utilitate; saturația uzuală este o treime, nu 90%.\n\nCea mai mare parte a fierului de pe transferină provine din absorbția intestinală imediată, nu din reciclarerea macrofagică — Incorect: Cea mai mare parte provine din macrofagele SRE, nu din intestin.\n\nLa adultul bărbat se reciclează 2 mg/zi, fără participarea sistemului reticuloendotelial — Incorect: La bărbatul adult se reciclează 20 mg/zi din descompunerea hematiilor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 330, Transportul în sânge (pagini PDF: 55).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    330
   ],
   "pdfPages": [
    55
   ],
   "section": "Transportul în sânge"
  },
  "learningObjective": "Separarea ferestrei 13-32 µmol/L și a saturației de o treime de supraestimarea valorii fierului seric.",
  "optionRationales": [
   "Intervalul, ritmul diurn și utilitatea redusă sunt din deschidere.",
   "Doi atomi de Fe3+ și saturația de o treime definesc transferina.",
   "Textul spune că fierul seric are mică utilitate; saturația uzuală este o treime, nu 90%.",
   "Cea mai mare parte provine din macrofagele SRE, nu din intestin.",
   "La bărbatul adult se reciclează 20 mg/zi din descompunerea hematiilor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează originea fierului de pe transferină (intestin versus SRE) și înlocuiesc 20 mg cu 2 mg."
  },
  "textbookExpressions": [
   "13-32",
   "o treime"
  ]
 },
 {
  "id": "hematologie-adv-054",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Diagnosticul de laborator al carenței marțiale, în investigațiile din capitol, include:",
  "options": [
   "Eritrocite microcitare (VEM <80 fL) și hipocrome (HEM <27 pg), cu poikilocitoză și anizocitoză",
   "Saturația transferinei scade în mod regulat sub 19% în deficitul de fier; fierul seric nu ajută la evaluarea clinică a statusului marțial",
   "Feritina serică: 30-300 µg/L la bărbați și 15-200 µg/L la femei; feritina scăzută confirmă deficitul simplu, dar ca proteină de fază acută poate fi normală sau ușor crescută în inflamație",
   "VEM >96 fL și HEM >40 pg definesc carența marțială",
   "Saturația transferinei peste 80% este criteriul de deficit, feritina fiind independentă de inflamație"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Eritrocite microcitare (VEM <80 fL) și hipocrome (HEM <27 pg), cu poikilocitoză și anizocitoză — Corect: Pragurile microcitoză/hipocromie și variațiile de formă/mărime sunt din frotiu.\n\nSaturația transferinei scade în mod regulat sub 19% în deficitul de fier; fierul seric nu ajută la evaluarea clinică a statusului marțial — Corect: <19% este cifra cadranului; fierul seric este de mică utilitate.\n\nFeritina serică: 30-300 µg/L la bărbați și 15-200 µg/L la femei; feritina scăzută confirmă deficitul simplu, dar ca proteină de fază acută poate fi normală sau ușor crescută în inflamație — Corect: Intervalele pe sexe și limita feritinei de fază acută sunt explicitate.\n\nVEM >96 fL și HEM >40 pg definesc carența marțială — Incorect: VEM >96 fL descrie macrocitoza, nu microcitoza feriprivă.\n\nSaturația transferinei peste 80% este criteriul de deficit, feritina fiind independentă de inflamație — Incorect: Pragul de deficit este sub 19%, nu peste 80%; feritina crește în inflamație.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 331, Investigații — Deficitul de fier (pagini PDF: 56).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    331
   ],
   "pdfPages": [
    56
   ],
   "section": "Investigații — Deficitul de fier"
  },
  "learningObjective": "Reținerea VEM <80 / HEM <27, a pragului de saturație <19% și a feritinei ca reactant de fază acută.",
  "optionRationales": [
   "Pragurile microcitoză/hipocromie și variațiile de formă/mărime sunt din frotiu.",
   "<19% este cifra cadranului; fierul seric este de mică utilitate.",
   "Intervalele pe sexe și limita feritinei de fază acută sunt explicitate.",
   "VEM >96 fL descrie macrocitoza, nu microcitoza feriprivă.",
   "Pragul de deficit este sub 19%, nu peste 80%; feritina crește în inflamație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică pragurile de macrocitoză și de saturație înaltă asupra carenței marțiale."
  },
  "textbookExpressions": [
   "VEM <80 fl",
   "sub 19%"
  ]
 },
 {
  "id": "hematologie-adv-055",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la receptorii solubili ai transferinei în evaluarea depozitelor de fier:",
  "options": [
   "Numărul de receptori eliberați în ser de eritroblaști crește în deficitul de fier; rezultatele sunt comparabile cu aspiratul medular și pot distinge carența de anemia din boli cronice, dar analiza nu este de obicei disponibilă în practica de rutină",
   "Scad specific în anemia din boli cronice și înlocuiesc feritina ca test de primă linie în toate cabinetele",
   "Rămân neschimbați în carența marțială, fiind utili doar în hemocromatoză",
   "Sunt identici CTLF-ului, crescând în inflamație similar feritinei",
   "Punția medulară este superfluă în toate cazurile, receptorii fiind disponibili universal"
  ],
  "correct": [
   0
  ],
  "explanation": "Numărul de receptori eliberați în ser de eritroblaști crește în deficitul de fier; rezultatele sunt comparabile cu aspiratul medular și pot distinge carența de anemia din boli cronice, dar analiza nu este de obicei disponibilă în practica de rutină — Corect: Creșterea, comparația cu aspiratul, distincția de anemia inflamatorie și limita de disponibilitate sunt din paragraf.\n\nScad specific în anemia din boli cronice și înlocuiesc feritina ca test de primă linie în toate cabinetele — Incorect: În anemia din boli cronice receptorii sunt normali, nu scăzuți specific; testul nu este de primă linie universală.\n\nRămân neschimbați în carența marțială, fiind utili doar în hemocromatoză — Incorect: Cresc, nu rămân neschimbați, în deficitul de fier.\n\nSunt identici CTLF-ului, crescând în inflamație similar feritinei — Incorect: Cadranul 16.4 îi arată crescuți în carență și normali în anemia inflamatorie, opus feritinei de fază acută.\n\nPunția medulară este superfluă în toate cazurile, receptorii fiind disponibili universal — Incorect: Textul spune că de obicei nu este disponibilă în practica de rutină.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 331, Receptori solubili ai transferinei (pagini PDF: 56).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    331
   ],
   "pdfPages": [
    56
   ],
   "section": "Receptori solubili ai transferinei"
  },
  "learningObjective": "Recunoașterea creșterii în carență, a echivalenței cu aspiratul și a indisponibilității de rutină.",
  "optionRationales": [
   "Creșterea, comparația cu aspiratul, distincția de anemia inflamatorie și limita de disponibilitate sunt din paragraf.",
   "În anemia din boli cronice receptorii sunt normali, nu scăzuți specific; testul nu este de primă linie universală.",
   "Cresc, nu rămân neschimbați, în deficitul de fier.",
   "Cadranul 16.4 îi arată crescuți în carență și normali în anemia inflamatorie, opus feritinei de fază acută.",
   "Textul spune că de obicei nu este disponibilă în practica de rutină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează direcția markerului și îl transformă într-un test universal de primă linie."
  },
  "textbookExpressions": [
   "receptori ai transferinei",
   "puncţii medulare"
  ]
 },
 {
  "id": "hematologie-adv-056",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Tratamentul oral al deficitului de fier, în detaliile de protocol, include:",
  "options": [
   "Hemoglobina crește cu aproximativ 10 g/L pe săptămână, în absența altor factori (ex. sângerare persistentă)",
   "Cel mai eficient preparat este sulfatul feros; un comprimat de 200 mg furnizează 60 mg de fier elementar",
   "Optimizarea absorbției: suc de portocale (vitamina C reduce Fe3+ la Fe2+); taninurile din ceai inhibă absorbția și trebuie evitate; durata poate ajunge la 6 luni",
   "Doza standard de 200 mg × 3/zi nu asociază reacții digestive, complianța fiind aproape completă",
   "Răspunsul hematologic la fierul parenteral este mai rapid decât la cel oral, depozitele reîncărcându-se mai lent"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hemoglobina crește cu aproximativ 10 g/L pe săptămână, în absența altor factori (ex. sângerare persistentă) — Corect: 10 g/L pe săptămână este ritmul citat.\n\nCel mai eficient preparat este sulfatul feros; un comprimat de 200 mg furnizează 60 mg de fier elementar — Corect: Sulfatul feros 200 mg = 60 mg elementar este preparatul de referință.\n\nOptimizarea absorbției: suc de portocale (vitamina C reduce Fe3+ la Fe2+); taninurile din ceai inhibă absorbția și trebuie evitate; durata poate ajunge la 6 luni — Corect: Sucul de portocale, taninurile și cele 6 luni completează protocolul.\n\nDoza standard de 200 mg × 3/zi nu asociază reacții digestive, complianța fiind aproape completă — Incorect: Efectele digestive sunt extrem de frecvente, iar complianța este redusă.\n\nRăspunsul hematologic la fierul parenteral este mai rapid decât la cel oral, depozitele reîncărcându-se mai lent — Incorect: Depozitele se reîncarcă mai repede parenteral, dar răspunsul hematologic nu este mai rapid.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 332, Tratament — Fier oral (pagini PDF: 57).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    332
   ],
   "pdfPages": [
    57
   ],
   "section": "Tratament — Fier oral"
  },
  "learningObjective": "Reținerea ritmului 10 g/L/săptămână, a sulfatului feros 200/60 mg și a ferestrei vitamina C versus ceai, pe 6 luni.",
  "optionRationales": [
   "10 g/L pe săptămână este ritmul citat.",
   "Sulfatul feros 200 mg = 60 mg elementar este preparatul de referință.",
   "Sucul de portocale, taninurile și cele 6 luni completează protocolul.",
   "Efectele digestive sunt extrem de frecvente, iar complianța este redusă.",
   "Depozitele se reîncarcă mai repede parenteral, dar răspunsul hematologic nu este mai rapid."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii neagă reacțiile digestive și inversează viteza hematologică parenteral versus oral."
  },
  "textbookExpressions": [
   "10 g/L pe săptămână",
   "sulfatul feros"
  ]
 },
 {
  "id": "hematologie-adv-057",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Anemia din bolile cronice, în mecanismul și profilul de laborator din capitol, se caracterizează prin:",
  "options": [
   "Scăderea eliberării fierului din depozitele medulare, răspuns inadecvat al eritropoietinei și scurtarea supraviețuirii hematiilor; hepcidina crescută (IL-6) sechestrează fierul",
   "Fier seric și CTLF scăzute, feritină normală sau crescută, receptori solubili ai transferinei normali; pacienții nu răspund la fier oral",
   "Fier seric crescut, CTLF crescută, feritină scăzută, ca în carența marțială simplă",
   "Răspuns prompt la sulfat feros oral, hepcidina fiind scăzută în inflamație",
   "Colorația medulară arată absența completă a fierului, identic carenței marțiale"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Scăderea eliberării fierului din depozitele medulare, răspuns inadecvat al eritropoietinei și scurtarea supraviețuirii hematiilor; hepcidina crescută (IL-6) sechestrează fierul — Corect: Cele trei mecanisme plus IL-6/hepcidină sunt din paragraf.\n\nFier seric și CTLF scăzute, feritină normală sau crescută, receptori solubili ai transferinei normali; pacienții nu răspund la fier oral — Corect: Profilul de laborator și absența răspunsului oral sunt din închidere.\n\nFier seric crescut, CTLF crescută, feritină scăzută, ca în carența marțială simplă — Incorect: Acesta este profilul carenței marțiale, nu al anemiei inflamatorii.\n\nRăspuns prompt la sulfat feros oral, hepcidina fiind scăzută în inflamație — Incorect: Hepcidina crește în inflamație; răspunsul oral lipsește.\n\nColorația medulară arată absența completă a fierului, identic carenței marțiale — Incorect: Fierul este prezent în frotiul medular, dar absent din eritroblaști.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 332, Anemia din bolile cronice (pagini PDF: 57).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    332
   ],
   "pdfPages": [
    57
   ],
   "section": "Anemia din bolile cronice"
  },
  "learningObjective": "Contrastarea triadei hepcidină/EPO/supraviețuire și a profilului CTLF↓/feritină N-↑ de carența marțială.",
  "optionRationales": [
   "Cele trei mecanisme plus IL-6/hepcidină sunt din paragraf.",
   "Profilul de laborator și absența răspunsului oral sunt din închidere.",
   "Acesta este profilul carenței marțiale, nu al anemiei inflamatorii.",
   "Hepcidina crește în inflamație; răspunsul oral lipsește.",
   "Fierul este prezent în frotiul medular, dar absent din eritroblaști."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică profilul feripriv (CTLF↑, feritină↓, răspuns oral) asupra anemiei inflamatorii."
  },
  "textbookExpressions": [
   "hepcidinei",
   "CTLF"
  ]
 },
 {
  "id": "hematologie-adv-058",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Anemia megaloblastică, în investigațiile de deschidere, se recunoaște prin:",
  "options": [
   "VEM de cele mai multe ori peste 96 fL, exceptând coexistența unei microcitoze, când poate exista dismorfism cu VEM mediu normal",
   "Frotiul: macro-ovalocite și neutrofile hipersegmentate (șase sau mai mulți lobi)",
   "LDH de obicei crescută, uneori extrem, reflectând eritropoieza ineficientă; în forme severe pot apărea leucopenie și trombocitopenie",
   "Mecanismul comun B12/folat: blocarea metilării deoxiuridil-monofosfatului la deoxitimidil-monofosfat",
   "VEM sub 80 fL cu neutrofile binucleate, LDH scăzută și eritropoieză eficientă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "VEM de cele mai multe ori peste 96 fL, exceptând coexistența unei microcitoze, când poate exista dismorfism cu VEM mediu normal — Corect: Pragul 96 fL și excepția dismorfismului sunt din listă.\n\nFrotiul: macro-ovalocite și neutrofile hipersegmentate (șase sau mai mulți lobi) — Corect: Macro-ovalocitele și cei ≥6 lobi sunt descrierea frotiului.\n\nLDH de obicei crescută, uneori extrem, reflectând eritropoieza ineficientă; în forme severe pot apărea leucopenie și trombocitopenie — Corect: LDH și citopeniile completează gravitatea.\n\nMecanismul comun B12/folat: blocarea metilării deoxiuridil-monofosfatului la deoxitimidil-monofosfat — Corect: Blocul de metilare este baza biochimică.\n\nVEM sub 80 fL cu neutrofile binucleate, LDH scăzută și eritropoieză eficientă — Incorect: VEM <80 fL este al microcitozei; LDH este crescută, nu scăzută.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 333, Anemia megaloblastică — Investigații (pagini PDF: 58).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    333
   ],
   "pdfPages": [
    58
   ],
   "section": "Anemia megaloblastică — Investigații"
  },
  "learningObjective": "Integrarea VEM >96 fL, a hipersegmentării cu ≥6 lobi, a LDH și a blocului dUMP→dTMP.",
  "optionRationales": [
   "Pragul 96 fL și excepția dismorfismului sunt din listă.",
   "Macro-ovalocitele și cei ≥6 lobi sunt descrierea frotiului.",
   "LDH și citopeniile completează gravitatea.",
   "Blocul de metilare este baza biochimică.",
   "VEM <80 fL este al microcitozei; LDH este crescută, nu scăzută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul aplică pragul de microcitoză și inversează LDH-ul asupra megaloblastozei."
  },
  "textbookExpressions": [
   "peste 96 fL",
   "şase sau mai mulţi lobi"
  ]
 },
 {
  "id": "hematologie-adv-059",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Absorbția și transportul vitaminei B12, în detaliile din capitol, includ:",
  "options": [
   "După eliberarea din alimente și de pe liantul R (prin enzime pancreatice), B12 se leagă de factorul intrinsc (glicoproteină 45 kDa a celulelor parietale) și este transportată la cubilină, pe mucoasa ileală",
   "Transportul ulterior se face prin transcobalamina II (holotranscobalamină, „B12 activă”); totuși, 70-90% din B12 plasmatică este legată de TCI",
   "Aproximativ 1% din doza orală se absoarbe pasiv, fără factor intrinsc",
   "Factorul intrinsc este secretat de ileon, cubilina fiind un receptor gastric",
   "TCI este singurul transportor esențial, holotranscobalamina fiind forma inactivă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "După eliberarea din alimente și de pe liantul R (prin enzime pancreatice), B12 se leagă de factorul intrinsc (glicoproteină 45 kDa a celulelor parietale) și este transportată la cubilină, pe mucoasa ileală — Corect: Secvența pancreatică, FI 45 kDa și cubilina ileală sunt din paragraf.\n\nTransportul ulterior se face prin transcobalamina II (holotranscobalamină, „B12 activă”); totuși, 70-90% din B12 plasmatică este legată de TCI — Corect: TCII ca formă activă și 70-90% pe TCI sunt explicitate.\n\nAproximativ 1% din doza orală se absoarbe pasiv, fără factor intrinsc — Corect: Absorbția pasivă de 1% este cifra de închidere.\n\nFactorul intrinsc este secretat de ileon, cubilina fiind un receptor gastric — Incorect: FI este gastric parietal; cubilina este ileală.\n\nTCI este singurul transportor esențial, holotranscobalamina fiind forma inactivă — Incorect: TCII este transportorul esențial, deși cantitativ minor; holotranscobalamina este forma activă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 334, Vitamina B12 — Absorbție și transport (pagini PDF: 59).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    334
   ],
   "pdfPages": [
    59
   ],
   "section": "Vitamina B12 — Absorbție și transport"
  },
  "learningObjective": "Secvența liant R → FI 45 kDa → cubilină ileală → TCII, cu predominanța cantitativă a TCI (70-90%).",
  "optionRationales": [
   "Secvența pancreatică, FI 45 kDa și cubilina ileală sunt din paragraf.",
   "TCII ca formă activă și 70-90% pe TCI sunt explicitate.",
   "Absorbția pasivă de 1% este cifra de închidere.",
   "FI este gastric parietal; cubilina este ileală.",
   "TCII este transportorul esențial, deși cantitativ minor; holotranscobalamina este forma activă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează sediul FI/cubilină (gastric versus ileal) și rolul TCI versus TCII."
  },
  "textbookExpressions": [
   "cubilina",
   "holotranscobalamină"
  ]
 },
 {
  "id": "hematologie-adv-060",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Anemia pernicioasă, în datele serologice și de risc din capitol, se caracterizează prin:",
  "options": [
   "Anticorpi anti-celulă parietală la 90% dintre pacienți (dar și la 10% dintre indivizii normali); anticorpii anti-factor intrinsc, deși prezenți doar la 50%, sunt specifici diagnosticului",
   "Asociere cu boli autoimune (tiroidă, Addison, vitiligo); circa 50% au anticorpi antitiroidieni; incidența carcinomului gastric este 1-3%",
   "Este rară la vârstnici (1 din 80 000 peste 60 de ani), predominantă la bărbați, fără asociere autoimună",
   "Anticorpii anti-FI sunt prezenți la 90% și nespecifici, cei anti-parietali fiind patognomonici la 10%",
   "Carcinomul gastric este absent, riscul fiind identic populației generale"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Anticorpi anti-celulă parietală la 90% dintre pacienți (dar și la 10% dintre indivizii normali); anticorpii anti-factor intrinsc, deși prezenți doar la 50%, sunt specifici diagnosticului — Corect: Perechea 90%/10% versus 50% specifici este din paragraf.\n\nAsociere cu boli autoimune (tiroidă, Addison, vitiligo); circa 50% au anticorpi antitiroidieni; incidența carcinomului gastric este 1-3% — Corect: Asocierile autoimune, 50% antitiroidieni și 1-3% cancer gastric completează riscul.\n\nEste rară la vârstnici (1 din 80 000 peste 60 de ani), predominantă la bărbați, fără asociere autoimună — Incorect: Textul dă 1 din 8 000 peste 60 de ani și predominanță feminină.\n\nAnticorpii anti-FI sunt prezenți la 90% și nespecifici, cei anti-parietali fiind patognomonici la 10% — Incorect: Sensibilitatea și specificitatea celor doi anticorpi sunt inversate.\n\nCarcinomul gastric este absent, riscul fiind identic populației generale — Incorect: Incidența gastrică este mai mare (1-3%) decât în populația generală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 334, Anemia pernicioasă — Patogeneză (pagini PDF: 59).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    334
   ],
   "pdfPages": [
    59
   ],
   "section": "Anemia pernicioasă — Patogeneză"
  },
  "learningObjective": "Contrastarea sensibilității 90% a anti-parietalilor de specificitatea anti-FI de 50%, plus riscul gastric 1-3%.",
  "optionRationales": [
   "Perechea 90%/10% versus 50% specifici este din paragraf.",
   "Asocierile autoimune, 50% antitiroidieni și 1-3% cancer gastric completează riscul.",
   "Textul dă 1 din 8 000 peste 60 de ani și predominanță feminină.",
   "Sensibilitatea și specificitatea celor doi anticorpi sunt inversate.",
   "Incidența gastrică este mai mare (1-3%) decât în populația generală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează 90% versus 50% între anti-parietal și anti-FI și anulează riscul de carcinom gastric."
  },
  "textbookExpressions": [
   "90% dintre pacienţii",
   "1-3%"
  ]
 },
 {
  "id": "hematologie-adv-061",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "Pragul de folat seric care indică deficitul, potrivit investigațiilor bioumorale, este:",
  "options": [
   "Sub 3 µg/L (7 nmol/L)",
   "Sub 150 µg/L la nivel seric, identic folatului eritrocitar",
   "Peste 30 µg/L, ca marker de supraîncărcare",
   "Identic pragului de B12 (160 ng/L)",
   "Folatul seric nu se dozează, fiind înlocuit de MMA"
  ],
  "correct": [
   0
  ],
  "explanation": "Sub 3 µg/L (7 nmol/L) — Corect: <3 µg/L (7 nmol/L) este cifra de deficit seric.\n\nSub 150 µg/L la nivel seric, identic folatului eritrocitar — Incorect: 150 µg/L (340 nmol/L) este pragul din hematie, nu din ser.\n\nPeste 30 µg/L, ca marker de supraîncărcare — Incorect: Peste 30 µg/L nu este pragul de deficit.\n\nIdentic pragului de B12 (160 ng/L) — Incorect: 160 ng/L este limita inferioară a B12, nu a folatului.\n\nFolatul seric nu se dozează, fiind înlocuit de MMA — Incorect: Folatul seric este de obicei suficient pentru diagnostic; MMA ține de B12.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 335, Deficitul de folat — Investigații (pagini PDF: 60).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    335
   ],
   "pdfPages": [
    60
   ],
   "section": "Deficitul de folat — Investigații"
  },
  "learningObjective": "Reținerea pragului seric <3 µg/L (7 nmol/L), distinct de folatul eritrocitar <150 µg/L.",
  "optionRationales": [
   "<3 µg/L (7 nmol/L) este cifra de deficit seric.",
   "150 µg/L (340 nmol/L) este pragul din hematie, nu din ser.",
   "Peste 30 µg/L nu este pragul de deficit.",
   "160 ng/L este limita inferioară a B12, nu a folatului.",
   "Folatul seric este de obicei suficient pentru diagnostic; MMA ține de B12."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută pragul eritrocitar 150 µg/L sau pe cel de B12 asupra folatului seric."
  },
  "textbookExpressions": [
   "sub 3 µg/L",
   "7 nmol/L"
  ]
 },
 {
  "id": "hematologie-adv-062",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Tratamentul deficitului de vitamină B12 cu hidroxicobalamină, în schema din capitol, include:",
  "options": [
   "1 000 µg intramuscular, cu un maxim de 5-6 mg în 2 săptămâni, apoi 1 000 µg la fiecare 3 luni, pe viață",
   "Reticulocitoză la circa 2-3 zile, maxim la 5-7 zile; ameliorare clinică posibilă în 48 de ore",
   "Polineuropatia se poate ameliora în 6-12 luni, dar afectarea îndelungată a măduvei este ireversibilă; pot apărea hipokaliemie și deficit de fier în primele săptămâni",
   "Doza unică orală de 50 µg înlocuiește schema intramusculară la toți pacienții cu AP",
   "Reticulocitoza lipsește, neuropatia rezolvându-se în 48 de ore, fără risc de hipokaliemie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "1 000 µg intramuscular, cu un maxim de 5-6 mg în 2 săptămâni, apoi 1 000 µg la fiecare 3 luni, pe viață — Corect: Dozele și ritmul pe viață sunt protocolul.\n\nReticulocitoză la circa 2-3 zile, maxim la 5-7 zile; ameliorare clinică posibilă în 48 de ore — Corect: Cinetica 48 ore / 2-3 zile / 5-7 zile este din supraveghere.\n\nPolineuropatia se poate ameliora în 6-12 luni, dar afectarea îndelungată a măduvei este ireversibilă; pot apărea hipokaliemie și deficit de fier în primele săptămâni — Corect: Fereastra 6-12 luni, ireversibilitatea medulară și hipokaliemia/fierul completează.\n\nDoza unică orală de 50 µg înlocuiește schema intramusculară la toți pacienții cu AP — Incorect: Schema IM pe viață este cea detaliată; 50 µg oral nu o înlocuiește în AP.\n\nReticulocitoza lipsește, neuropatia rezolvându-se în 48 de ore, fără risc de hipokaliemie — Incorect: Reticulocitoza este așteptată; 48 de ore nu vindecă neuropatia.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 336, Tratamentul deficitului de vitamină B12 (pagini PDF: 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    336
   ],
   "pdfPages": [
    61
   ],
   "section": "Tratamentul deficitului de vitamină B12"
  },
  "learningObjective": "Reținerea schemei 1 000 µg / 5-6 mg / 3 luni și a cineticii reticulocitare 2-3 apoi 5-7 zile.",
  "optionRationales": [
   "Dozele și ritmul pe viață sunt protocolul.",
   "Cinetica 48 ore / 2-3 zile / 5-7 zile este din supraveghere.",
   "Fereastra 6-12 luni, ireversibilitatea medulară și hipokaliemia/fierul completează.",
   "Schema IM pe viață este cea detaliată; 50 µg oral nu o înlocuiește în AP.",
   "Reticulocitoza este așteptată; 48 de ore nu vindecă neuropatia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii comprimă schema IM la 50 µg oral și mută rezoluția neuropatiei la 48 de ore."
  },
  "textbookExpressions": [
   "Hidroxicobalamina",
   "5-7 zile"
  ]
 },
 {
  "id": "hematologie-adv-063",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Hemoglobinuria paroxistică nocturnă, în mecanismul molecular, se caracterizează prin:",
  "options": [
   "Mutații PIG-A X-linkate, cu sinteză defectuoasă a ancorei GPI",
   "Absența CD55 (DAF) și CD59 (MIRL), care degradează complementul la C3 și C5",
   "Hemoliză intravasculară, tromboză venoasă (Budd-Chiari, vene cerebrale/mezenterice) și hemoglobinurie, adesea precipitată de infecții, fier sau chirurgie",
   "Flow-citometrie cu anti-CD55/CD59; măduva poate fi hipoplazică sau aplazică, în ciuda hemolizei",
   "Defect al spectrinei, cu sferocitoză ereditară și complement intact"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Mutații PIG-A X-linkate, cu sinteză defectuoasă a ancorei GPI — Corect: PIG-A X-linkat și GPI sunt defectul primar.\n\nAbsența CD55 (DAF) și CD59 (MIRL), care degradează complementul la C3 și C5 — Corect: CD55 și CD59 lipsesc de pe membrană.\n\nHemoliză intravasculară, tromboză venoasă (Budd-Chiari, vene cerebrale/mezenterice) și hemoglobinurie, adesea precipitată de infecții, fier sau chirurgie — Corect: Triada clinică și precipitanții sunt din tabloul clinic.\n\nFlow-citometrie cu anti-CD55/CD59; măduva poate fi hipoplazică sau aplazică, în ciuda hemolizei — Corect: Flow-citometria și hipoplazia medulară sunt investigațiile.\n\nDefect al spectrinei, cu sferocitoză ereditară și complement intact — Incorect: Spectrina ține de sferocitoza ereditară, nu de HPN.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 354, 355, HPN — Mecanism și clinică (pagini PDF: 65, 66).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    354,
    355
   ],
   "pdfPages": [
    65,
    66
   ],
   "section": "HPN — Mecanism și clinică"
  },
  "learningObjective": "Asocierea PIG-A/GPI, a CD55/CD59, a triadei hemoliză-tromboză-hemoglobinurie și a flow-citometriei.",
  "optionRationales": [
   "PIG-A X-linkat și GPI sunt defectul primar.",
   "CD55 și CD59 lipsesc de pe membrană.",
   "Triada clinică și precipitanții sunt din tabloul clinic.",
   "Flow-citometria și hipoplazia medulară sunt investigațiile.",
   "Spectrina ține de sferocitoza ereditară, nu de HPN."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul mută defectul pe spectrină, în timp ce celelalte opțiuni cer simultan PIG-A, CD55/59 și siturile atipice de tromboză."
  },
  "textbookExpressions": [
   "PIG-A",
   "CD59"
  ]
 },
 {
  "id": "hematologie-adv-064",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Cauzele anemiei hemolitice mecanice, enumerate în capitol, includ:",
  "options": [
   "Valve cardiace artificiale disfuncționale",
   "Hemoglobinuria de maraton, prin distrugere eritrocitară la nivelul membrelor inferioare asociată alergării",
   "Anemia hemolitică microangiopatică (MAHA) din hipertensiune malignă, eclampsie, SUH, PTT, vasculită sau CID",
   "Deficitul de G6PD ca leziune mecanică de valvă",
   "Koilonichia feriprivă ca fragmentare intravasculară de maraton"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Valve cardiace artificiale disfuncționale — Corect: Valvele disfuncționale deschid lista.\n\nHemoglobinuria de maraton, prin distrugere eritrocitară la nivelul membrelor inferioare asociată alergării — Corect: Hemoglobinuria de maraton este al doilea exemplu.\n\nAnemia hemolitică microangiopatică (MAHA) din hipertensiune malignă, eclampsie, SUH, PTT, vasculită sau CID — Corect: Lista MAHA (malignă, eclampsie, SUH, PTT, vasculită, CID) o închide.\n\nDeficitul de G6PD ca leziune mecanică de valvă — Incorect: G6PD este enzimopatie, nu traumă mecanică.\n\nKoilonichia feriprivă ca fragmentare intravasculară de maraton — Incorect: Koilonichia este semn de carență marțială, nu mecanism de fragmentare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 355, Anemia hemolitică mecanică (pagini PDF: 66).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    355
   ],
   "pdfPages": [
    66
   ],
   "section": "Anemia hemolitică mecanică"
  },
  "learningObjective": "Recunoașterea triadei valvă / maraton / MAHA, distinct de enzimopatii și de semnele feriprive.",
  "optionRationales": [
   "Valvele disfuncționale deschid lista.",
   "Hemoglobinuria de maraton este al doilea exemplu.",
   "Lista MAHA (malignă, eclampsie, SUH, PTT, vasculită, CID) o închide.",
   "G6PD este enzimopatie, nu traumă mecanică.",
   "Koilonichia este semn de carență marțială, nu mecanism de fragmentare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reintroduc G6PD și koilonichia într-o listă de hemolize prin traumă fizică."
  },
  "textbookExpressions": [
   "hemoglobinurie de maraton",
   "microangiopatică"
  ]
 },
 {
  "id": "hematologie-adv-065",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "Pragul de prevalență mondială a carenței de fier, descris ca cea mai frecventă cauză de anemie, este de aproximativ:",
  "options": [
   "30% din populația lumii",
   "3% din populația lumii",
   "90% din populația lumii",
   "0,5% din populația lumii",
   "Carența de fier este rară la nivel global, talasemia fiind cauza dominantă"
  ],
  "correct": [
   0
  ],
  "explanation": "30% din populația lumii — Corect: Textul precizează că deficitul de fier afectează 30% din populația lumii și este cea mai frecventă cauză de anemie.\n\n3% din populația lumii — Incorect: 3% subestimează cu un ordin de mărime prevalența citată.\n\n90% din populația lumii — Incorect: 90% depășește cifra din paragraf.\n\n0,5% din populația lumii — Incorect: 0,5% este un ordin de mărime prea mic.\n\nCarența de fier este rară la nivel global, talasemia fiind cauza dominantă — Incorect: Talasemia este o cauză de microcitoză, nu cauza globală dominantă a anemiei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 328, Anemia microcitară — Epidemiologie (pagini PDF: 53).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    328
   ],
   "pdfPages": [
    53
   ],
   "section": "Anemia microcitară — Epidemiologie"
  },
  "learningObjective": "Reținerea cifrei de 30% și a statutului de cauză globală dominantă a anemiei, distinct de talasemie.",
  "optionRationales": [
   "Textul precizează că deficitul de fier afectează 30% din populația lumii și este cea mai frecventă cauză de anemie.",
   "3% subestimează cu un ordin de mărime prevalența citată.",
   "90% depășește cifra din paragraf.",
   "0,5% este un ordin de mărime prea mic.",
   "Talasemia este o cauză de microcitoză, nu cauza globală dominantă a anemiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută 30% spre 3% sau 90% și înlocuiesc carența marțială cu talasemia ca etiologia mondială."
  },
  "textbookExpressions": [
   "30% din populaţia lumii",
   "cea mai frecventă cauză de anemie"
  ]
 },
 {
  "id": "hematologie-adv-066",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Clasificarea anemiei după VEM, ilustrată în Figura 16.7, include următoarele asocieri:",
  "options": [
   "Microcite (VEM <80 fL): deficit de fier, talasemie, anemie din boli cronice și anemie sideroblastică",
   "Macrocite (VEM >96 fL) megaloblastice: deficit de vitamină B12 sau folat; normoblastice: alcool, reticulocitoză, boală hepatică, hipotiroidism, azatioprină",
   "Normocite (VEM normal): hemoragie acută, anemie din boli cronice, boală cronică de rinichi, boli autoimune reumatice, infiltrare/fibroză, boli endocrine, hemoliză",
   "Microcitele sunt rezervate deficitului de B12, iar VEM >96 fL definește doar sideroblastoza ereditară",
   "Hemoragia acută produce constant macrocitoză megaloblastică, nu normocitoză"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Microcite (VEM <80 fL): deficit de fier, talasemie, anemie din boli cronice și anemie sideroblastică — Corect: Rândul de microcitoză al figurii enumeră fierul, talasemia, anemia inflamatorie și sideroblastoza.\n\nMacrocite (VEM >96 fL) megaloblastice: deficit de vitamină B12 sau folat; normoblastice: alcool, reticulocitoză, boală hepatică, hipotiroidism, azatioprină — Corect: Bifurcația megaloblastică versus normoblastică a macrocitozei este cea din figură.\n\nNormocite (VEM normal): hemoragie acută, anemie din boli cronice, boală cronică de rinichi, boli autoimune reumatice, infiltrare/fibroză, boli endocrine, hemoliză — Corect: Lista de normocitoză deschide cu hemoragia acută și include hemoliza.\n\nMicrocitele sunt rezervate deficitului de B12, iar VEM >96 fL definește doar sideroblastoza ereditară — Incorect: B12 produce macrocitoză megaloblastică; sideroblastoza ereditară este microcitară.\n\nHemoragia acută produce constant macrocitoză megaloblastică, nu normocitoză — Incorect: Hemoragia acută figurează la normocite, nu la megaloblastoză.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 328, Figura 16.7 — Clasificarea anemiei (pagini PDF: 53).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    328
   ],
   "pdfPages": [
    53
   ],
   "section": "Figura 16.7 — Clasificarea anemiei"
  },
  "learningObjective": "Perecherea celor trei categorii VEM cu listele etiologice din figură, fără a muta B12 pe microcitoză.",
  "optionRationales": [
   "Rândul de microcitoză al figurii enumeră fierul, talasemia, anemia inflamatorie și sideroblastoza.",
   "Bifurcația megaloblastică versus normoblastică a macrocitozei este cea din figură.",
   "Lista de normocitoză deschide cu hemoragia acută și include hemoliza.",
   "B12 produce macrocitoză megaloblastică; sideroblastoza ereditară este microcitară.",
   "Hemoragia acută figurează la normocite, nu la megaloblastoză."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută B12 pe microcitoză și hemoragia acută pe megaloblastoză, inversând două rânduri vecine ale figurii."
  },
  "textbookExpressions": [
   "VEM scăzut",
   ">961L"
  ]
 },
 {
  "id": "hematologie-adv-067",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Fierul heminic versus non-heminic din dietă, în datele de absorbție, se caracterizează prin:",
  "options": [
   "Fierul non-heminic se găsește în principal în cereale, de obicei fortificate, și constituie partea principală a fierului alimentar",
   "Fierul heminic, derivat din hemoglobină și mioglobină din carnea roșie sau organe, este absorbit mai bine decât cel non-heminic",
   "Absorbția se face predominant în ileonul terminal, biodisponibilitatea heminică fiind mai influențată de ceilalți constituenți alimentari",
   "Gătitul distruge complet fierul heminic, cerealele nefiind o sursă relevantă",
   "Fierul non-heminic este absorbit mai rapid decât cel heminic, independent de pH-ul gastric"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Fierul non-heminic se găsește în principal în cereale, de obicei fortificate, și constituie partea principală a fierului alimentar — Corect: Cerealele fortificate ca partea principală a fierului alimentar deschid paragraful.\n\nFierul heminic, derivat din hemoglobină și mioglobină din carnea roșie sau organe, este absorbit mai bine decât cel non-heminic — Corect: Originea din Hb/Mb și absorbția superioară a hemului sunt explicitate.\n\nAbsorbția se face predominant în ileonul terminal, biodisponibilitatea heminică fiind mai influențată de ceilalți constituenți alimentari — Incorect: Absorbția scade distal; biodisponibilitatea non-heminică, nu heminică, este mai influențată de dietă.\n\nGătitul distruge complet fierul heminic, cerealele nefiind o sursă relevantă — Incorect: Textul nu descrie distrugerea completă prin gătire; cerealele sunt sursa principală.\n\nFierul non-heminic este absorbit mai rapid decât cel heminic, independent de pH-ul gastric — Incorect: Ierarhia este heminic > non-heminic, nu invers.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 329, Aportul dietetic — Heminic versus non-heminic (pagini PDF: 54).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    329
   ],
   "pdfPages": [
    54
   ],
   "section": "Aportul dietetic — Heminic versus non-heminic"
  },
  "learningObjective": "Contrastarea cerealelor fortificate ca sursă principală de cea a hemului din carne/organe, cu absorbție superioară heminică.",
  "optionRationales": [
   "Cerealele fortificate ca partea principală a fierului alimentar deschid paragraful.",
   "Originea din Hb/Mb și absorbția superioară a hemului sunt explicitate.",
   "Absorbția scade distal; biodisponibilitatea non-heminică, nu heminică, este mai influențată de dietă.",
   "Textul nu descrie distrugerea completă prin gătire; cerealele sunt sursa principală.",
   "Ierarhia este heminic > non-heminic, nu invers."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută absorbția pe ileonul terminal și inversează ierarhia heminic versus non-heminic."
  },
  "textbookExpressions": [
   "Fierul non-heminic",
   "Fierul heminic"
  ]
 },
 {
  "id": "hematologie-adv-068",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Depozitele și pierderile zilnice de fier, potrivit capitolului, includ:",
  "options": [
   "Aproximativ două treimi din fierul total circulă ca hemoglobină (2,5-3 g la bărbatul adult)",
   "Restul (500-1.500 mg) stă în celule reticuloendoteliale, hepatocite și mușchi scheletic; circa două treimi ca feritină și o treime ca hemosiderină",
   "În fiecare zi se pierd 0,5-1,0 mg prin materii fecale, urină și transpirație",
   "Femeile pierd 30-40 ml de sânge menstrual pe lună (0,5-0,7 mg fier/zi); pierderea peste 100 ml duce de obicei la deficit",
   "Plasma conține circa 400 mg de fier, pierderile zilnice fiind nule la femeie"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Aproximativ două treimi din fierul total circulă ca hemoglobină (2,5-3 g la bărbatul adult) — Corect: Fracția de două treimi și 2,5-3 g sunt cifrele de deschidere.\n\nRestul (500-1.500 mg) stă în celule reticuloendoteliale, hepatocite și mușchi scheletic; circa două treimi ca feritină și o treime ca hemosiderină — Corect: Intervalul 500-1.500 mg și raportul 2/3–1/3 completează depozitele.\n\nÎn fiecare zi se pierd 0,5-1,0 mg prin materii fecale, urină și transpirație — Corect: 0,5-1,0 mg/zi este pierderea bazală citată.\n\nFemeile pierd 30-40 ml de sânge menstrual pe lună (0,5-0,7 mg fier/zi); pierderea peste 100 ml duce de obicei la deficit — Corect: 30-40 ml, 0,5-0,7 mg/zi și pragul de 100 ml sunt ale menstruației.\n\nPlasma conține circa 400 mg de fier, pierderile zilnice fiind nule la femeie — Incorect: Plasma conține aproximativ 4 mg, nu 400 mg; femeile au pierderi menstruale suplimentare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 330, Depozitele de fier; Necesarul de fier (pagini PDF: 55).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    330
   ],
   "pdfPages": [
    55
   ],
   "section": "Depozitele de fier; Necesarul de fier"
  },
  "learningObjective": "Integrarea masei de 2,5-3 g ca Hb, a raportului feritină/hemosiderină și a pierderilor 0,5-1 mg versus menstra >100 ml.",
  "optionRationales": [
   "Fracția de două treimi și 2,5-3 g sunt cifrele de deschidere.",
   "Intervalul 500-1.500 mg și raportul 2/3–1/3 completează depozitele.",
   "0,5-1,0 mg/zi este pierderea bazală citată.",
   "30-40 ml, 0,5-0,7 mg/zi și pragul de 100 ml sunt ale menstruației.",
   "Plasma conține aproximativ 4 mg, nu 400 mg; femeile au pierderi menstruale suplimentare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul umflă fierul plasmatic de la 4 mg la 400 mg și anulează pierderea menstruală."
  },
  "textbookExpressions": [
   "2,5-3 g",
   "0,5-1,0 mg"
  ]
 },
 {
  "id": "hematologie-adv-069",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "Numărul de absorbante sau tampoane sanitare considerat normal pe zi, în anamneza menometroragiei din capitol, este:",
  "options": [
   "3-5",
   "10-15",
   "1",
   "20-25",
   "Nu se întreabă numărul, ci doar culoarea sângelui"
  ],
  "correct": [
   0
  ],
  "explanation": "3-5 — Corect: 3-5 pe zi este cifra citată ca normală.\n\n10-15 — Incorect: 10-15 depășește reperul din text.\n\n1 — Incorect: Un singur absorbant subestimează uzul normal.\n\n20-25 — Incorect: 20-25 sugerează menometroragie, nu normalul.\n\nNu se întreabă numărul, ci doar culoarea sângelui — Incorect: Textul cere explicit durata, cheagurile și numărul de absorbante.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 331, Anamneza — Menstruația (pagini PDF: 56).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    331
   ],
   "pdfPages": [
    56
   ],
   "section": "Anamneza — Menstruația"
  },
  "learningObjective": "Reținerea ferestrei 3-5 absorbante/tampoane pe zi ca reper de normalitate.",
  "optionRationales": [
   "3-5 pe zi este cifra citată ca normală.",
   "10-15 depășește reperul din text.",
   "Un singur absorbant subestimează uzul normal.",
   "20-25 sugerează menometroragie, nu normalul.",
   "Textul cere explicit durata, cheagurile și numărul de absorbante."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii înlocuiesc fereastra 3-5 cu extreme plauzibile de hipo- sau hipermenoree."
  },
  "textbookExpressions": [
   "3-5 pe zi este normal",
   "tampoane sanitare"
  ]
 },
 {
  "id": "hematologie-adv-070",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Manifestările clinice ale carenței marțiale foarte îndelungate, dincolo de simptomele generale de anemie, includ:",
  "options": [
   "Unghii fragile, koilonichie, atrofierea papilelor linguale, stomatită angulară și păr fragil",
   "Sindrom de disfagie și glosită (Plummer-Vinson sau Paterson-Brown-Kelly)",
   "La sugari: prematuritate sau întârzierea alimentației diversificate; anamneza cere AINS și sânge în scaun",
   "Koilonichia este semnul siclemiei, iar Plummer-Vinson ține de deficitul de B12",
   "Prematuritatea protejează de carența marțială, AINS-urile neinfluențând sângerarea digestivă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Unghii fragile, koilonichie, atrofierea papilelor linguale, stomatită angulară și păr fragil — Corect: Lista epitelială (unghii, limbă, comisuri, păr) deschide caracteristicile îndelungate.\n\nSindrom de disfagie și glosită (Plummer-Vinson sau Paterson-Brown-Kelly) — Corect: Perechea disfagie-glosită cu cele două eponime este explicită.\n\nLa sugari: prematuritate sau întârzierea alimentației diversificate; anamneza cere AINS și sânge în scaun — Corect: Prematuritatea/diversificarea întârziată și AINS/sângele fecal completează contextul.\n\nKoilonichia este semnul siclemiei, iar Plummer-Vinson ține de deficitul de B12 — Incorect: Koilonichia este feriprivă; Plummer-Vinson nu este atribuit B12.\n\nPrematuritatea protejează de carența marțială, AINS-urile neinfluențând sângerarea digestivă — Incorect: Prematuritatea crește, nu scade, riscul; AINS pot produce sângerare digestivă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 331, Tablou clinic — Deficitul de fier (pagini PDF: 56).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    331
   ],
   "pdfPages": [
    56
   ],
   "section": "Tablou clinic — Deficitul de fier"
  },
  "learningObjective": "Asocierea semnelor epiteliale și a sindromului Plummer-Vinson de contextul pediatric și de anamneza AINS.",
  "optionRationales": [
   "Lista epitelială (unghii, limbă, comisuri, păr) deschide caracteristicile îndelungate.",
   "Perechea disfagie-glosită cu cele două eponime este explicită.",
   "Prematuritatea/diversificarea întârziată și AINS/sângele fecal completează contextul.",
   "Koilonichia este feriprivă; Plummer-Vinson nu este atribuit B12.",
   "Prematuritatea crește, nu scade, riscul; AINS pot produce sângerare digestivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută koilonichia pe siclemie și Plummer-Vinson pe B12, semne din alte secțiuni ale capitolului."
  },
  "textbookExpressions": [
   "koilonichie",
   "Plummer-Vinson"
  ]
 },
 {
  "id": "hematologie-adv-071",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Cele mai frecvente cauze ale eșecului tratamentului cu fier oral, înainte de a trece la calea parenterală, sunt:",
  "options": [
   "Lipsa complianței",
   "Pierderi continue de sânge",
   "Diagnostic incorect, de exemplu talasemie",
   "Creșterea hepcidinei după o doză orală, care stimulează absorbția dozelor următoare",
   "Răspunsul hematologic parenteral este constant mai rapid, deci calea orală se abandonează din prima zi"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Lipsa complianței — Corect: Complianța redusă deschide lista de eșec.\n\nPierderi continue de sânge — Corect: Sângerarea continuă este a doua cauză citată.\n\nDiagnostic incorect, de exemplu talasemie — Corect: Talasemia ca diagnostic incorect închide triada.\n\nCreșterea hepcidinei după o doză orală, care stimulează absorbția dozelor următoare — Incorect: Hepcidina crescută după o doză suprimă, nu stimulează, absorbția ulterioară.\n\nRăspunsul hematologic parenteral este constant mai rapid, deci calea orală se abandonează din prima zi — Incorect: Depozitele se reîncarcă mai repede parenteral, dar răspunsul hematologic nu este mai rapid.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 332, Tratament — Eșecul fierului oral (pagini PDF: 57).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    332
   ],
   "pdfPages": [
    57
   ],
   "section": "Tratament — Eșecul fierului oral"
  },
  "learningObjective": "Reținerea triadei complianță / sângerare persistentă / talasemie, distinct de cinetica hepcidinei și de viteza hematologică.",
  "optionRationales": [
   "Complianța redusă deschide lista de eșec.",
   "Sângerarea continuă este a doua cauză citată.",
   "Talasemia ca diagnostic incorect închide triada.",
   "Hepcidina crescută după o doză suprimă, nu stimulează, absorbția ulterioară.",
   "Depozitele se reîncarcă mai repede parenteral, dar răspunsul hematologic nu este mai rapid."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează efectul hepcidinei post-doză și viteza hematologică parenteral versus oral."
  },
  "textbookExpressions": [
   "lipsa complianţei",
   "talasemie"
  ]
 },
 {
  "id": "hematologie-adv-072",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Anemia sideroblastică, în definiția și etiologia din capitol, se caracterizează prin:",
  "options": [
   "Anemie refractară la suplimentarea hematinică simplă, cu celule hipocrome variabile și exces de fier plus sideroblaști inelari în măduvă",
   "Inelele sunt acumulări mitocondriale de fier în jurul nucleului, vizibile cu reacția Perls",
   "Forma X-linkată are un defect al δ-ALA-sintetazei, enzimă dependentă de piridoxină, din prima etapă a sintezei hemului",
   "Forma dobândită a adultului este, în majoritate, un sindrom mielodisplazic; cauze: izoniazidă, alcool, plumb",
   "Transmiterea este constant autozomal dominantă, Perls fiind negativ în măduvă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Anemie refractară la suplimentarea hematinică simplă, cu celule hipocrome variabile și exces de fier plus sideroblaști inelari în măduvă — Corect: Refractaritatea, hipocromia și sideroblaștii inelari definesc entitatea.\n\nInelele sunt acumulări mitocondriale de fier în jurul nucleului, vizibile cu reacția Perls — Corect: Sediul mitocondrial și Perls sunt descrierea inelului.\n\nForma X-linkată are un defect al δ-ALA-sintetazei, enzimă dependentă de piridoxină, din prima etapă a sintezei hemului — Corect: δ-ALA-sintetaza piridoxin-dependentă este defectul X-linkat.\n\nForma dobândită a adultului este, în majoritate, un sindrom mielodisplazic; cauze: izoniazidă, alcool, plumb — Corect: MDS, izoniazida, alcoolul și plumbul sunt cauzele dobândite citate.\n\nTransmiterea este constant autozomal dominantă, Perls fiind negativ în măduvă — Incorect: Există și formă autozomal recesivă; Perls evidențiază tocmai inelele.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 332, Anemia sideroblastică (pagini PDF: 57).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    332
   ],
   "pdfPages": [
    57
   ],
   "section": "Anemia sideroblastică"
  },
  "learningObjective": "Asocierea inelului mitocondrial Perls, a ALA-sintetazei X-linkate și a MDS-ului ca forma adultă dominantă.",
  "optionRationales": [
   "Refractaritatea, hipocromia și sideroblaștii inelari definesc entitatea.",
   "Sediul mitocondrial și Perls sunt descrierea inelului.",
   "δ-ALA-sintetaza piridoxin-dependentă este defectul X-linkat.",
   "MDS, izoniazida, alcoolul și plumbul sunt cauzele dobândite citate.",
   "Există și formă autozomal recesivă; Perls evidențiază tocmai inelele."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul transformă Perls-ul pozitiv și heterogenitatea genetică într-o boală autozomal dominantă Perls-negativă."
  },
  "textbookExpressions": [
   "sideroblaşti inelari",
   "izoniazidă"
  ]
 },
 {
  "id": "hematologie-adv-073",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Aportul, stocarea și pierderile de vitamină B12, în cifrele de deschidere, includ:",
  "options": [
   "Este sintetizată de microorganisme; omul depinde de surse animale (carne, pește, ouă, lapte), nu de plante; gătitul nu o distruge de obicei",
   "Dieta zilnică obișnuită conține 5-30 µg, din care se absorb 2-3 µg",
   "Adultul stochează circa 2-3 mg, mai ales hepatic; deficitul după malabsorbție poate întârzia 2 ani sau mai mult, pierderile zilnice fiind 1-2 µg",
   "Plantele sunt sursa principală, gătitul inactivând complet cobalamina",
   "Depozitele hepatice de 2-3 µg se epuizează în 2 săptămâni"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este sintetizată de microorganisme; omul depinde de surse animale (carne, pește, ouă, lapte), nu de plante; gătitul nu o distruge de obicei — Corect: Originea microbiană/animală și rezistența la gătire deschid paragraful.\n\nDieta zilnică obișnuită conține 5-30 µg, din care se absorb 2-3 µg — Corect: Cifrele 5-30 µg și 2-3 µg absorbiți sunt ale dietei.\n\nAdultul stochează circa 2-3 mg, mai ales hepatic; deficitul după malabsorbție poate întârzia 2 ani sau mai mult, pierderile zilnice fiind 1-2 µg — Corect: 2-3 mg, 2 ani și 1-2 µg/zi închid bilanțul.\n\nPlantele sunt sursa principală, gătitul inactivând complet cobalamina — Incorect: Plantele nu conțin B12; gătitul nu o distruge de obicei.\n\nDepozitele hepatice de 2-3 µg se epuizează în 2 săptămâni — Incorect: Depozitul este de 2-3 mg, nu µg, iar latența este de ani, nu de săptămâni.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 334, Vitamina B12 — Surse și depozite (pagini PDF: 59).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    334
   ],
   "pdfPages": [
    59
   ],
   "section": "Vitamina B12 — Surse și depozite"
  },
  "learningObjective": "Reținerea ferestrei 5-30 / 2-3 µg, a depozitului 2-3 mg și a latenței de ≥2 ani, distinct de originea vegetală.",
  "optionRationales": [
   "Originea microbiană/animală și rezistența la gătire deschid paragraful.",
   "Cifrele 5-30 µg și 2-3 µg absorbiți sunt ale dietei.",
   "2-3 mg, 2 ani și 1-2 µg/zi închid bilanțul.",
   "Plantele nu conțin B12; gătitul nu o distruge de obicei.",
   "Depozitul este de 2-3 mg, nu µg, iar latența este de ani, nu de săptămâni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută originea pe plante și comprimă depozitul de 2-3 mg la 2-3 µg epuizabili în 2 săptămâni."
  },
  "textbookExpressions": [
   "5-30 pg",
   "2-3 mg"
  ]
 },
 {
  "id": "hematologie-adv-074",
  "topicId": "hematologie",
  "type": "CS",
  "stem": "Anomaliile neurologice din deficitul de vitamină B12 apar, potrivit capitolului, numai la niveluri serice:",
  "options": [
   "Foarte scăzute, sub 60 ng/L (50 pmol/L), ocazional fără semne clinice de anemie",
   "Sub 160 ng/L, dar numai dacă există și anemie severă",
   "Peste 1 000 ng/L, ca efect toxic al cobalaminei",
   "Identice pragului de folat seric (<3 µg/L)",
   "Doar după epuizarea folatului eritrocitar, independent de B12"
  ],
  "correct": [
   0
  ],
  "explanation": "Foarte scăzute, sub 60 ng/L (50 pmol/L), ocazional fără semne clinice de anemie — Corect: <60 ng/L (50 pmol/L) și posibila absență a anemiei clinice sunt fraza din paragraf.\n\nSub 160 ng/L, dar numai dacă există și anemie severă — Incorect: 160 ng/L este limita inferioară de laborator, nu pragul neurologic; textul admite forme fără anemie.\n\nPeste 1 000 ng/L, ca efect toxic al cobalaminei — Incorect: 1 000 ng/L nu este un prag toxic descris aici.\n\nIdentice pragului de folat seric (<3 µg/L) — Incorect: <3 µg/L este al folatului seric, nu al B12 neurologice.\n\nDoar după epuizarea folatului eritrocitar, independent de B12 — Incorect: Neuropatia este a deficitului de B12, nu a folatului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 334, Anemia pernicioasă — Tablou neurologic (pagini PDF: 59).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    334
   ],
   "pdfPages": [
    59
   ],
   "section": "Anemia pernicioasă — Tablou neurologic"
  },
  "learningObjective": "Reținerea pragului neurologic <60 ng/L (50 pmol/L), distinct de limita inferioară uzuală de 160 ng/L și de posibila absență a anemiei.",
  "optionRationales": [
   "<60 ng/L (50 pmol/L) și posibila absență a anemiei clinice sunt fraza din paragraf.",
   "160 ng/L este limita inferioară de laborator, nu pragul neurologic; textul admite forme fără anemie.",
   "1 000 ng/L nu este un prag toxic descris aici.",
   "<3 µg/L este al folatului seric, nu al B12 neurologice.",
   "Neuropatia este a deficitului de B12, nu a folatului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă pragul neurologic <60 ng/L cu limita de laborator 160 ng/L sau cu pragul de folat."
  },
  "textbookExpressions": [
   "<60 ng/L",
   "50 pmol/L"
  ]
 },
 {
  "id": "hematologie-adv-075",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Acidul folic, în metabolismul, aportul și tabloul clinic din capitol, se caracterizează prin:",
  "options": [
   "Nu există în natură ca monoglutamat, ci ca poliglutamați (dihidro- sau tetrahidrofolat), transformați la absorbție în metil-THF, forma serică principală",
   "Gătitul pierde 60-90% din folat; minimul zilnic necesar este circa 100 µg; depozitele sunt de aproximativ 10 mg",
   "După o dietă necorespunzătoare, deficitul se dezvoltă în circa 4 luni",
   "Spre deosebire de deficitul de B12, în deficitul de folat nu apare neuropatia",
   "Depozitele de 10 mg durează 2 ani, iar neuropatia este identică celei din carența de B12"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Nu există în natură ca monoglutamat, ci ca poliglutamați (dihidro- sau tetrahidrofolat), transformați la absorbție în metil-THF, forma serică principală — Corect: Originea poliglutamată și metil-THF seric deschid biochimia.\n\nGătitul pierde 60-90% din folat; minimul zilnic necesar este circa 100 µg; depozitele sunt de aproximativ 10 mg — Corect: 60-90%, 100 µg și 10 mg sunt cifrele de aport/depozit.\n\nDupă o dietă necorespunzătoare, deficitul se dezvoltă în circa 4 luni — Corect: Cele 4 luni sunt latența după dietă săracă.\n\nSpre deosebire de deficitul de B12, în deficitul de folat nu apare neuropatia — Corect: Absența neuropatiei, spre deosebire de B12, este explicită.\n\nDepozitele de 10 mg durează 2 ani, iar neuropatia este identică celei din carența de B12 — Incorect: Latența de 2 ani și neuropatia sunt ale B12, nu ale folatului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 335, Acidul folic — Aport și deficit (pagini PDF: 60).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    335
   ],
   "pdfPages": [
    60
   ],
   "section": "Acidul folic — Aport și deficit"
  },
  "learningObjective": "Integrarea poliglutamaților, a pierderii 60-90% la gătire, a depozitului 10 mg/4 luni și a absenței neuropatiei.",
  "optionRationales": [
   "Originea poliglutamată și metil-THF seric deschid biochimia.",
   "60-90%, 100 µg și 10 mg sunt cifrele de aport/depozit.",
   "Cele 4 luni sunt latența după dietă săracă.",
   "Absența neuropatiei, spre deosebire de B12, este explicită.",
   "Latența de 2 ani și neuropatia sunt ale B12, nu ale folatului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul aplică latența de 2 ani și neuropatia cobalaminei asupra folatului, unde textul dă 4 luni fără neuropatie."
  },
  "textbookExpressions": [
   "60-90%",
   "10 mg"
  ]
 },
 {
  "id": "hematologie-adv-076",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "În tratamentul anemiei megaloblastice, capitolul precizează că:",
  "options": [
   "Transfuzia nu este de obicei indicată în anemia cronică; la vârstnici poate precipita insuficiența cardiacă",
   "Acidul folic poate produce răspuns hematologic în deficitul de B12, dar poate agrava neuropatia; doze mari de folat singure nu se folosesc decât dacă B12 serică este normală",
   "Transfuzia de rutină precede orice substituție vitaminică, inclusiv la tânărul compensat",
   "Dozele mari de folat sunt de primă intenție în toate megaloblastozele, B12 fiind superfluă",
   "Vegetarienii nu necesită suplimentare orală de B12"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Transfuzia nu este de obicei indicată în anemia cronică; la vârstnici poate precipita insuficiența cardiacă — Corect: Absența indicației uzuale și precipitatea ICC la vârstnic sunt din deschidere.\n\nAcidul folic poate produce răspuns hematologic în deficitul de B12, dar poate agrava neuropatia; doze mari de folat singure nu se folosesc decât dacă B12 serică este normală — Corect: Răspunsul hematologic paradoxal și agravarea neuropatiei, plus condiția B12 normale, sunt fraza următoare.\n\nTransfuzia de rutină precede orice substituție vitaminică, inclusiv la tânărul compensat — Incorect: Textul evită transfuzia de rutină în forma cronică.\n\nDozele mari de folat sunt de primă intenție în toate megaloblastozele, B12 fiind superfluă — Incorect: Folatul singur, în doze mari, este interzis dacă B12 nu este documentat normal.\n\nVegetarienii nu necesită suplimentare orală de B12 — Incorect: Vegetarienii pot necesita suplimentare orală de B12.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 336, Tratamentul anemiei megaloblastice — Principii (pagini PDF: 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    336
   ],
   "pdfPages": [
    61
   ],
   "section": "Tratamentul anemiei megaloblastice — Principii"
  },
  "learningObjective": "Separarea interdicției transfuziei de rutină (mai ales la vârstnic) de riscul folatului asupra neuropatiei din carența de B12.",
  "optionRationales": [
   "Absența indicației uzuale și precipitatea ICC la vârstnic sunt din deschidere.",
   "Răspunsul hematologic paradoxal și agravarea neuropatiei, plus condiția B12 normale, sunt fraza următoare.",
   "Textul evită transfuzia de rutină în forma cronică.",
   "Folatul singur, în doze mari, este interzis dacă B12 nu este documentat normal.",
   "Vegetarienii pot necesita suplimentare orală de B12."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă folatul din risc neurologic într-o primă intenție universală și impun transfuzia de rutină."
  },
  "textbookExpressions": [
   "Transfuzia de sânge nu este",
   "poate agrava neuropatia"
  ]
 },
 {
  "id": "hematologie-adv-077",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Tratamentul și profilaxia deficitului de folat, în schemele din capitol, includ:",
  "options": [
   "Corecția cu 5 mg acid folic zilnic, circa 4 luni, pentru reumplerea depozitelor",
   "Profilactic, 400 µg zilnic tuturor femeilor care planifică sau sunt la început de sarcină, pentru a reduce defectele de tub neural",
   "Femeile cu un copil anterior cu defect de tub neural: 5 mg zilnic înainte și în timpul unei sarcini ulterioare",
   "400 µg zilnic înlocuiesc schema de 5 mg la bolile hematologice cronice și la dializă",
   "Cei 5 mg sunt evitați după un defect de tub neural anterior, 400 µg fiind suficienți"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Corecția cu 5 mg acid folic zilnic, circa 4 luni, pentru reumplerea depozitelor — Corect: 5 mg/zi și cele 4 luni sunt schema de reumplere.\n\nProfilactic, 400 µg zilnic tuturor femeilor care planifică sau sunt la început de sarcină, pentru a reduce defectele de tub neural — Corect: 400 µg la planificare/început de sarcină este profilaxia generală.\n\nFemeile cu un copil anterior cu defect de tub neural: 5 mg zilnic înainte și în timpul unei sarcini ulterioare — Corect: 5 mg înainte și în timpul sarcinii următoare este schema după NTD.\n\n400 µg zilnic înlocuiesc schema de 5 mg la bolile hematologice cronice și la dializă — Incorect: În boli hematologice cronice și dializă se dau tot 5 mg zilnic sau săptămânal, nu 400 µg.\n\nCei 5 mg sunt evitați după un defect de tub neural anterior, 400 µg fiind suficienți — Incorect: După NTD anterior doza este 5 mg, nu 400 µg.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 336, Tratamentul deficitului de folat; Profilaxie (pagini PDF: 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    336
   ],
   "pdfPages": [
    61
   ],
   "section": "Tratamentul deficitului de folat; Profilaxie"
  },
  "learningObjective": "Contrastarea ferestrelor 5 mg / 4 luni, 400 µg de concepție și 5 mg după un NTD anterior.",
  "optionRationales": [
   "5 mg/zi și cele 4 luni sunt schema de reumplere.",
   "400 µg la planificare/început de sarcină este profilaxia generală.",
   "5 mg înainte și în timpul sarcinii următoare este schema după NTD.",
   "În boli hematologice cronice și dializă se dau tot 5 mg zilnic sau săptămânal, nu 400 µg.",
   "După NTD anterior doza este 5 mg, nu 400 µg."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută 400 µg pe teritoriul celor 5 mg (NTD anterior, dializă), cele două trepte ale aceluiași paragraf."
  },
  "textbookExpressions": [
   "5 mg de acid folie",
   "400 µg zilnic"
  ]
 },
 {
  "id": "hematologie-adv-078",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Macrocitoza cu măduvă normoblastică, nu megaloblastică, se asociază, printre cauzele patologice frecvente, cu:",
  "options": [
   "Excesul de alcool",
   "Afecțiuni hepatice, reticulocitoză (de exemplu după hemoliză) și hipotiroidism",
   "Aplazie, mielodisplazie, aplazie eritroidă pură, mielom; hidroxicarbamidă și azatioprină",
   "Aglutinine la rece: VEM scade la normal după încălzirea probei la 37°C",
   "Niveluri constant scăzute de B12 și folat, fără care macrocitoza nu apare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Excesul de alcool — Corect: Alcoolul deschide cauzele patologice frecvente.\n\nAfecțiuni hepatice, reticulocitoză (de exemplu după hemoliză) și hipotiroidism — Corect: Ficatul, reticulocitele și hipotiroidismul continuă lista.\n\nAplazie, mielodisplazie, aplazie eritroidă pură, mielom; hidroxicarbamidă și azatioprină — Corect: Aplazia/MDS/mielomul și cele două medicamente închid hematologicul.\n\nAglutinine la rece: VEM scade la normal după încălzirea probei la 37°C — Corect: Normalizarea VEM la 37°C distinge aglutininele la rece.\n\nNiveluri constant scăzute de B12 și folat, fără care macrocitoza nu apare — Incorect: În aceste afecțiuni B12 și folatul sunt normale.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 336, Macrocitoza fără modificări megaloblastice (pagini PDF: 61).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    336
   ],
   "pdfPages": [
    61
   ],
   "section": "Macrocitoza fără modificări megaloblastice"
  },
  "learningObjective": "Reținerea listei normoblastice (alcool, ficat, tiroidă, aplazie/MDS, citostatice) și a artefactului de aglutinine la 37°C.",
  "optionRationales": [
   "Alcoolul deschide cauzele patologice frecvente.",
   "Ficatul, reticulocitele și hipotiroidismul continuă lista.",
   "Aplazia/MDS/mielomul și cele două medicamente închid hematologicul.",
   "Normalizarea VEM la 37°C distinge aglutininele la rece.",
   "În aceste afecțiuni B12 și folatul sunt normale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul impune carență de B12/folat unei liste din care textul tocmai a exclus megaloblastoza."
  },
  "textbookExpressions": [
   "măduvă normoblastică",
   "37°C"
  ]
 },
 {
  "id": "hematologie-adv-079",
  "topicId": "hematologie",
  "type": "CM",
  "stem": "Hemoglobinuria paroxistică nocturnă, în detaliile clinice și de prognostic care depășesc mecanismul GPI, se recunoaște prin:",
  "options": [
   "Caracteristic, doar micțiunile nocturne și prima urină de dimineață sunt închise la culoare (motivul este neclar); în forme severe, toate micțiunile; pierderile urinare de fier pot produce deficit marțial",
   "Mediana de supraviețuire este 10-15 ani; clona HPN poate dispărea; transplantul s-a făcut cu donori înrudiți HLA-compatibili sub 50 de ani sau neînrudiți sub 25 de ani",
   "Eculizumabul reactivează constant măduva aplazică, transplantul fiind inutil sub 50 de ani",
   "Urina este deschisă la culoare noaptea și se închide doar seara",
   "Clona HPN rămâne permanentă, mediana de supraviețuire fiind sub 12 luni"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Caracteristic, doar micțiunile nocturne și prima urină de dimineață sunt închise la culoare (motivul este neclar); în forme severe, toate micțiunile; pierderile urinare de fier pot produce deficit marțial — Corect: Patternul nocturn/matinal, formele severe și fierul urinar sunt din tabloul clinic.\n\nMediana de supraviețuire este 10-15 ani; clona HPN poate dispărea; transplantul s-a făcut cu donori înrudiți HLA-compatibili sub 50 de ani sau neînrudiți sub 25 de ani — Corect: 10-15 ani, dispariția clonei și pragurile 50/25 de ani sunt din prognostic/tratament.\n\nEculizumabul reactivează constant măduva aplazică, transplantul fiind inutil sub 50 de ani — Incorect: Textul precizează că eculizumabul nu reactivează măduva.\n\nUrina este deschisă la culoare noaptea și se închide doar seara — Incorect: Sensul nictemer al culorii urinii este inversat.\n\nClona HPN rămâne permanentă, mediana de supraviețuire fiind sub 12 luni — Incorect: Clona poate dispărea; mediana nu este sub un an.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 16, p. 354, 355, HPN — Clinică și prognostic (pagini PDF: 65, 66).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 16,
   "printedPages": [
    354,
    355
   ],
   "pdfPages": [
    65,
    66
   ],
   "section": "HPN — Clinică și prognostic"
  },
  "learningObjective": "Separarea patternului nictemer al urinii și a pierderii urinare de fier de mediana 10-15 ani și de ferestrele de vârstă ale transplantului.",
  "optionRationales": [
   "Patternul nocturn/matinal, formele severe și fierul urinar sunt din tabloul clinic.",
   "10-15 ani, dispariția clonei și pragurile 50/25 de ani sunt din prognostic/tratament.",
   "Textul precizează că eculizumabul nu reactivează măduva.",
   "Sensul nictemer al culorii urinii este inversat.",
   "Clona poate dispărea; mediana nu este sub un an."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează nictemera urinii și atribuie eculizumabului reactivarea medulară, pe care textul o neagă."
  },
  "textbookExpressions": [
   "prima urină de dimineaţă",
   "10-15 ani"
  ]
 }
];
