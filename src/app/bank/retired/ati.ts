import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_ATI:(Question&Record<string,unknown>)[]=[
 {
  "id": "ati-adv-010",
  "topicId": "ati",
  "type": "CM",
  "stem": "Polineuropatia bolilor critice este caracterizată în bibliografie prin următoarele asocieri:",
  "options": [
   "Leziune axonală primară — afectare motorie și, în mai mică măsură, senzitivă",
   "Dificultate de sevraj respirator — proteinorahie de obicei mult crescută",
   "Slăbiciune flască a membrelor — afectare frecventă și predominantă a nervilor cranieni",
   "Reflexe tendinoase diminuate sau absente — proteine LCR normale sau minim crescute",
   "Sepsis persistent și insuficiență multiplă de organ — leziune demielinizantă primară la studiile de conducere"
  ],
  "correct": [
   0,
   3
  ],
  "explanation": "Leziune axonală primară — afectare motorie și, în mai mică măsură, senzitivă — Corect: Leziunea este axonală și predomină componenta motorie.\n\nDificultate de sevraj respirator — proteinorahie de obicei mult crescută — Incorect: Dificultatea de sevraj este caracteristică; proteinorahia este normală sau minim crescută.\n\nSlăbiciune flască a membrelor — afectare frecventă și predominantă a nervilor cranieni — Incorect: Slăbiciunea flască este caracteristică; nervii cranieni sunt rar afectați.\n\nReflexe tendinoase diminuate sau absente — proteine LCR normale sau minim crescute — Corect: Ambele constatări corespund descrierii din capitol.\n\nSepsis persistent și insuficiență multiplă de organ — leziune demielinizantă primară la studiile de conducere — Incorect: Contextul este corect, dar studiile confirmă deteriorare axonală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 231, Slăbiciunea neuromusculară — complicație a bolilor critice (pagini PDF: 49).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    231
   ],
   "pdfPages": [
    49
   ],
   "section": "Slăbiciunea neuromusculară — complicație a bolilor critice"
  },
  "learningObjective": "Separarea profilului clinic, electrofiziologic și LCR de neuropatia demielinizantă comparată în capitol.",
  "optionRationales": [
   "Leziunea este axonală și predomină componenta motorie.",
   "Dificultatea de sevraj este caracteristică; proteinorahia este normală sau minim crescută.",
   "Slăbiciunea flască este caracteristică; nervii cranieni sunt rar afectați.",
   "Ambele constatări corespund descrierii din capitol.",
   "Contextul este corect, dar studiile confirmă deteriorare axonală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toți distractorii pornesc de la o constatare compatibilă; diferența decisivă privește distribuția, LCR sau tipul leziunii."
  },
  "textbookExpressions": [
   "neuropatie axonală primară",
   "proteine din lichidul cefalorahidian",
   "nervii cranieni sunt rar afectați"
  ],
  "replaces": "ati-ext-010"
 },
 {
  "id": "ati-adv-011",
  "topicId": "ati",
  "type": "CS",
  "stem": "Terapia precoce ghidată de obiective (early goal-directed therapy), cu intenția de a menține saturația venoasă centrală de oxigen >70% la pacienții cu sepsis sever sau șoc septic:",
  "options": [
   "Nu pare să îmbunătățească evoluția, în ciuda optimismului inițial",
   "Reduce mortalitatea în toate studiile citate din capitol",
   "Înlocuiește monitorizarea volumului-bătaie și a debitului cardiac la pacientul chirurgical",
   "Impune creșterea DO2 și VO2 peste limitele normale, cu beneficiu demonstrat",
   "Este superioară menținerii simple a oxigenării, volemiei și tensiunii arteriale adecvate"
  ],
  "correct": [
   0
  ],
  "explanation": "Nu pare să îmbunătățească evoluția, în ciuda optimismului inițial — Corect: Textul precizează că, în ciuda optimismului inițial, această strategie nu pare să îmbunătățească evoluția în sepsisul sever sau șocul septic.\n\nReduce mortalitatea în toate studiile citate din capitol — Incorect: Concluzia capitolului este absența beneficiului, nu reducerea mortalității.\n\nÎnlocuiește monitorizarea volumului-bătaie și a debitului cardiac la pacientul chirurgical — Incorect: La pacientul chirurgical cu risc, substituția volemică și inotropele trebuie ghidate de volumul-bătaie și debitul cardiac, nu înlocuite de ScvO2.\n\nImpune creșterea DO2 și VO2 peste limitele normale, cu beneficiu demonstrat — Incorect: Creșterea DO2 și VO2 peste normal nu aduce beneficiu, putând fi chiar dăunătoare.\n\nEste superioară menținerii simple a oxigenării, volemiei și tensiunii arteriale adecvate — Incorect: Menținerea oxigenării, volumului circulator și tensiunii arteriale adecvate rămâne obiectivul perioperator descris.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 224, Obiectivele hemodinamicii și transportului de oxigen (pagini PDF: 42).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    224
   ],
   "pdfPages": [
    42
   ],
   "section": "Obiectivele hemodinamicii și transportului de oxigen"
  },
  "learningObjective": "Recunoașterea eșecului EGDT cu prag ScvO2 >70% și a lipsei de beneficiu al supranormalizării DO2/VO2.",
  "optionRationales": [
   "Textul precizează că, în ciuda optimismului inițial, această strategie nu pare să îmbunătățească evoluția în sepsisul sever sau șocul septic.",
   "Concluzia capitolului este absența beneficiului, nu reducerea mortalității.",
   "La pacientul chirurgical cu risc, substituția volemică și inotropele trebuie ghidate de volumul-bătaie și debitul cardiac, nu înlocuite de ScvO2.",
   "Creșterea DO2 și VO2 peste normal nu aduce beneficiu, putând fi chiar dăunătoare.",
   "Menținerea oxigenării, volumului circulator și tensiunii arteriale adecvate rămâne obiectivul perioperator descris."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reînvie optimismul inițial al EGDT și confundă pragul ScvO2 cu supranormalizarea DO2, ambele contrazise de același paragraf."
  },
  "textbookExpressions": [
   "early goal-directed therapy",
   ">70%"
  ]
 },
 {
  "id": "ati-adv-012",
  "topicId": "ati",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații diferențiază corect insuficiența respiratorie de tip I de cea de tip II?",
  "options": [
   "Tipul I asociază PaO2 scăzută cu PaCO2 normală sau scăzută",
   "Tipul II asociază PaO2 scăzută cu PaCO2 ridicată",
   "În termeni practici, insuficiența respiratorie este prezentă când PaO2 <8 kPa (60 mmHg) sau PaCO2 >7 kPa (55 mmHg)",
   "Cea mai frecventă cauză de tip II este pneumonia comunitară",
   "Tipul I rezultă din hipoventilație alveolară globală, iar tipul II din șunt dreapta-stânga"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tipul I asociază PaO2 scăzută cu PaCO2 normală sau scăzută — Corect: Aceasta este definiția tipului I (insuficiență acută hipoxemică).\n\nTipul II asociază PaO2 scăzută cu PaCO2 ridicată — Corect: PaCO2 ridicată, alături de hipoxemie, definește tipul II (insuficiență ventilatorie).\n\nÎn termeni practici, insuficiența respiratorie este prezentă când PaO2 <8 kPa (60 mmHg) sau PaCO2 >7 kPa (55 mmHg) — Corect: Pragurile practice 8 kPa și 7 kPa sunt cele enunțate în capitol.\n\nCea mai frecventă cauză de tip II este pneumonia comunitară — Incorect: Cea mai frecventă cauză de tip II este BPOC, nu pneumonia (cauză tipică de tip I).\n\nTipul I rezultă din hipoventilație alveolară globală, iar tipul II din șunt dreapta-stânga — Incorect: Sensurile sunt inversate: tipul I ține de șunt sau de alterarea V/Q, tipul II de ventilație alveolară inadecvată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 224, 225, Insuficiența respiratorie — Clasificare și etiologie (pagini PDF: 42, 43).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    224,
    225
   ],
   "pdfPages": [
    42,
    43
   ],
   "section": "Insuficiența respiratorie — Clasificare și etiologie"
  },
  "learningObjective": "Aplicarea definiției gazometrice (8 kPa / 7 kPa) și a profilului PaCO2 care separă tipul hipoxemic de cel ventilator.",
  "optionRationales": [
   "Aceasta este definiția tipului I (insuficiență acută hipoxemică).",
   "PaCO2 ridicată, alături de hipoxemie, definește tipul II (insuficiență ventilatorie).",
   "Pragurile practice 8 kPa și 7 kPa sunt cele enunțate în capitol.",
   "Cea mai frecventă cauză de tip II este BPOC, nu pneumonia (cauză tipică de tip I).",
   "Sensurile sunt inversate: tipul I ține de șunt sau de alterarea V/Q, tipul II de ventilație alveolară inadecvată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează mecanismele șunt versus hipoventilație și atribuie pneumoniei etiologia tipului II, rezervată BPOC-ului."
  },
  "textbookExpressions": [
   "Pa02 <8 kPa",
   "insuficienţă ventilatorie"
  ]
 },
 {
  "id": "ati-adv-013",
  "topicId": "ati",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre administrarea oxigenului și toxicitatea acestuia:",
  "options": [
   "Măștile Venturi cu performanță fixă permit controlul concentrației de oxigen și sunt folosite la pacienții cu BPOC și insuficiență cronică de tip II",
   "Hipoxemia severă este mai periculoasă decât hipercapnia",
   "Saturațiile de 98-100% cu FiO2 crescut sunt ținta recomandată după infarctul miocardic",
   "O perioadă scurtă de hiperoxie după intubarea de urgență nu influențează mortalitatea",
   "Canulele nazale asigură o concentrație inspirată fixă, independent de respirația bucală"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Măștile Venturi cu performanță fixă permit controlul concentrației de oxigen și sunt folosite la pacienții cu BPOC și insuficiență cronică de tip II — Corect: Dispozitivele Venturi sunt cele indicate când controlul FiO2 contează, ca în BPOC cu insuficiență cronică de tip II.\n\nHipoxemia severă este mai periculoasă decât hipercapnia — Corect: Textul precizează că hipoxemia severă este mai periculoasă decât hipercapnia.\n\nSaturațiile de 98-100% cu FiO2 crescut sunt ținta recomandată după infarctul miocardic — Incorect: Saturațiile 90-92% sunt probabil adecvate; vizarea unor saturații mai mari, inclusiv post-IMA, poate fi dăunătoare.\n\nO perioadă scurtă de hiperoxie după intubarea de urgență nu influențează mortalitatea — Incorect: Chiar o hiperoxie scurtă, inclusiv după intubarea de urgență, poate crește mortalitatea comparativ cu normoxia.\n\nCanulele nazale asigură o concentrație inspirată fixă, independent de respirația bucală — Incorect: Canulele nazale au performanță variabilă; concentrația se diluează prin respirația bucală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 226, 227, Oxigenoterapia; Toxicitatea oxigenului (pagini PDF: 44, 45).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    226,
    227
   ],
   "pdfPages": [
    44,
    45
   ],
   "section": "Oxigenoterapia; Toxicitatea oxigenului"
  },
  "learningObjective": "Contrastarea dispozitivelor cu performanță fixă versus variabilă și a țintei 90-92% față de hiperoxie.",
  "optionRationales": [
   "Dispozitivele Venturi sunt cele indicate când controlul FiO2 contează, ca în BPOC cu insuficiență cronică de tip II.",
   "Textul precizează că hipoxemia severă este mai periculoasă decât hipercapnia.",
   "Saturațiile 90-92% sunt probabil adecvate; vizarea unor saturații mai mari, inclusiv post-IMA, poate fi dăunătoare.",
   "Chiar o hiperoxie scurtă, inclusiv după intubarea de urgență, poate crește mortalitatea comparativ cu normoxia.",
   "Canulele nazale au performanță variabilă; concentrația se diluează prin respirația bucală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează ierarhia hipoxemie–hipercapnie și transformă avertismentul de hiperoxie într-o țintă de saturație de 98-100%."
  },
  "textbookExpressions": [
   "Hipoxemia severă",
   "90-92%"
  ]
 },
 {
  "id": "ati-adv-014",
  "topicId": "ati",
  "type": "CM",
  "stem": "În insuficiența ventilatorie acută din miastenia gravis, sindromul Guillain–Barré sau leziunile medulare înalte, instituirea ventilației mecanice:",
  "options": [
   "Se face de obicei atunci când capacitatea vitală a scăzut la 10 mL/kg sau mai puțin",
   "Are ca scop evitarea atelectaziei, a infecției și a stopului respirator",
   "Găsește în PaCO2 ridicat, cu trend în creștere, o indicație de ventilație urgentă",
   "Se bazează pe volumul curent și pe frecvența respiratorie, care se modifică precoce și specific",
   "Este impusă de orice scădere a capacității vitale, independent de starea clinică"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se face de obicei atunci când capacitatea vitală a scăzut la 10 mL/kg sau mai puțin — Corect: Pragul de 10 mL/kg este cel citat pentru instituirea ventilației în aceste boli neuromusculare.\n\nAre ca scop evitarea atelectaziei, a infecției și a stopului respirator — Corect: Prevenirea atelectaziei, infecției și stopului respirator este scopul enunțat.\n\nGăsește în PaCO2 ridicat, cu trend în creștere, o indicație de ventilație urgentă — Corect: PaCO2 ridicat cu trend în creștere este indicație de ventilație urgentă.\n\nSe bazează pe volumul curent și pe frecvența respiratorie, care se modifică precoce și specific — Incorect: Volumul curent și frecvența sunt indicatori relativ nespecifici, cu modificări tardive.\n\nEste impusă de orice scădere a capacității vitale, independent de starea clinică — Incorect: Nu toți pacienții cu capacitate vitală redusă necesită ventilație; evaluarea clinică individuală rămâne esențială.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 227, Indicații pentru ventilație mecanică (pagini PDF: 45).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    227
   ],
   "pdfPages": [
    45
   ],
   "section": "Indicații pentru ventilație mecanică"
  },
  "learningObjective": "Reținerea pragului de 10 mL/kg și a valorii tardive a volumului curent/frecvenței, versus PaCO2 în creștere.",
  "optionRationales": [
   "Pragul de 10 mL/kg este cel citat pentru instituirea ventilației în aceste boli neuromusculare.",
   "Prevenirea atelectaziei, infecției și stopului respirator este scopul enunțat.",
   "PaCO2 ridicat cu trend în creștere este indicație de ventilație urgentă.",
   "Volumul curent și frecvența sunt indicatori relativ nespecifici, cu modificări tardive.",
   "Nu toți pacienții cu capacitate vitală redusă necesită ventilație; evaluarea clinică individuală rămâne esențială."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă indicatorii tardivi (Vt, frecvență) în semne precoce și fac din orice scădere a CV o indicație absolută, contrar textului."
  },
  "textbookExpressions": [
   "10 ml/kg",
   "PaC02 ridicat"
  ]
 },
 {
  "id": "ati-adv-015",
  "topicId": "ati",
  "type": "CM",
  "stem": "Referitor la sedarea pacientului ventilat mecanic, sunt adevărate:",
  "options": [
   "Minimizarea nivelului de sedare cu scoruri de sedare și „trezire zilnică\", adesea combinată cu moduri de respirație spontană, se asociază cu reducerea duratei de ventilație și cu externare mai rapidă",
   "Combinația unui opiaceu cu o benzodiazepină sau cu propofol este adesea folosită pentru a facilita ventilația",
   "Sedarea profundă continuă, fără treziri planificate, scurtează internarea în ATI",
   "Blocanții neuromusculari sunt necesari la toți pacienții ventilați, independent de severitate",
   "Evitarea totală a sedativelor prelungește durata ventilației mecanice"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Minimizarea nivelului de sedare cu scoruri de sedare și „trezire zilnică\", adesea combinată cu moduri de respirație spontană, se asociază cu reducerea duratei de ventilație și cu externare mai rapidă — Corect: Reducerea duratei de ventilație și externarea mai rapidă sunt asociate explicit cu minimizarea sedării și trezirea zilnică.\n\nCombinația unui opiaceu cu o benzodiazepină sau cu propofol este adesea folosită pentru a facilita ventilația — Corect: Asocierea opiaceu plus benzodiazepină sau propofol este regimul citat.\n\nSedarea profundă continuă, fără treziri planificate, scurtează internarea în ATI — Incorect: Sedarea profundă fără treziri nu este strategia asociată cu internare mai scurtă.\n\nBlocanții neuromusculari sunt necesari la toți pacienții ventilați, independent de severitate — Incorect: Relaxarea musculară poate fi necesară la unii pacienți, nu la toți.\n\nEvitarea totală a sedativelor prelungește durata ventilației mecanice — Incorect: Textul precizează că chiar evitarea totală a sedativelor se asociază cu reduceri ale duratei de ventilație, nu cu prelungire.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 228, Sedarea, analgezia și relaxarea musculară (pagini PDF: 46).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    228
   ],
   "pdfPages": [
    46
   ],
   "section": "Sedarea, analgezia și relaxarea musculară"
  },
  "learningObjective": "Contrastarea strategiei de sedare minimă / trezire zilnică cu sedarea profundă continuă.",
  "optionRationales": [
   "Reducerea duratei de ventilație și externarea mai rapidă sunt asociate explicit cu minimizarea sedării și trezirea zilnică.",
   "Asocierea opiaceu plus benzodiazepină sau propofol este regimul citat.",
   "Sedarea profundă fără treziri nu este strategia asociată cu internare mai scurtă.",
   "Relaxarea musculară poate fi necesară la unii pacienți, nu la toți.",
   "Textul precizează că chiar evitarea totală a sedativelor se asociază cu reduceri ale duratei de ventilație, nu cu prelungire."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează efectul trezirii zilnice și generalizează blocul neuromuscular de la excepție la regulă."
  },
  "textbookExpressions": [
   "trezire zilnică",
   "opiaceu cu o benzodiazepină"
  ]
 },
 {
  "id": "ati-adv-016",
  "topicId": "ati",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la traheostomie și la calea aeriană chirurgicală de urgență:",
  "options": [
   "Traheostomia percutanată prin dilatare, efectuată în ATI, este mai rapidă și asociată cu o rată de infecție a plăgii mult mai redusă comparativ cu traheostomia chirurgicală din sala de operație",
   "Traheostomia chirurgicală se rezervează când factorii anatomici împiedică abordarea percutanată sau există îngrijorare privind coagularea anormală",
   "Obstrucția căilor aeriene superioare care pune viața în pericol, și care nu poate fi ocolită cu o canulă endotraheală, poate fi rezolvată prin cricotiroidotomie, mai sigură, mai rapidă și mai ușor de realizat decât traheostomia clasică",
   "Traheostomia percutanată este contraindicată în ATI și rămâne o procedură de sală de operație",
   "Traheostomia nu are mortalitate asociată, complicațiile fiind doar locale și tardive"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Traheostomia percutanată prin dilatare, efectuată în ATI, este mai rapidă și asociată cu o rată de infecție a plăgii mult mai redusă comparativ cu traheostomia chirurgicală din sala de operație — Corect: Avantajul de viteză și rata mai mică de infecție a plăgii sunt cele atribuite tehnicii percutanate din ATI.\n\nTraheostomia chirurgicală se rezervează când factorii anatomici împiedică abordarea percutanată sau există îngrijorare privind coagularea anormală — Corect: Anatomia nefavorabilă și coagulopatia sunt motivele explicitate pentru abordul chirurgical.\n\nObstrucția căilor aeriene superioare care pune viața în pericol, și care nu poate fi ocolită cu o canulă endotraheală, poate fi rezolvată prin cricotiroidotomie, mai sigură, mai rapidă și mai ușor de realizat decât traheostomia clasică — Corect: Cricotiroidotomia este descrisă ca mai sigură, mai rapidă și mai ușoară decât traheostomia clasică în obstrucția care nu poate fi intubată.\n\nTraheostomia percutanată este contraindicată în ATI și rămâne o procedură de sală de operație — Incorect: Textul precizează că traheostomia se efectuează acum cel mai frecvent în ATI, percutanat.\n\nTraheostomia nu are mortalitate asociată, complicațiile fiind doar locale și tardive — Incorect: Există o rată de mortalitate mică, dar totuși semnificativă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 228, Traheostomia; Cadranul 10.15 (pagini PDF: 46).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    228
   ],
   "pdfPages": [
    46
   ],
   "section": "Traheostomia; Cadranul 10.15"
  },
  "learningObjective": "Diferențierea indicațiilor traheostomiei percutanate, chirurgicale și ale cricotiroidotomiei de urgență.",
  "optionRationales": [
   "Avantajul de viteză și rata mai mică de infecție a plăgii sunt cele atribuite tehnicii percutanate din ATI.",
   "Anatomia nefavorabilă și coagulopatia sunt motivele explicitate pentru abordul chirurgical.",
   "Cricotiroidotomia este descrisă ca mai sigură, mai rapidă și mai ușoară decât traheostomia clasică în obstrucția care nu poate fi intubată.",
   "Textul precizează că traheostomia se efectuează acum cel mai frecvent în ATI, percutanat.",
   "Există o rată de mortalitate mică, dar totuși semnificativă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută procedura percutanată înapoi în sala de operație și neagă mortalitatea recunoscută ca mică, dar semnificativă."
  },
  "textbookExpressions": [
   "dilatare percutanată",
   "cricotiroidotomie"
  ]
 },
 {
  "id": "ati-adv-017",
  "topicId": "ati",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la oxigenul nazal cu flux înalt (HFNO):",
  "options": [
   "Împiedică tusea, expectorația și alimentația, similar măștii faciale etanșe",
   "Instituirea HFNO la pacienții cu insuficiență respiratorie de tip I poate fi echivalentă și, în unele circumstanțe, mai eficientă decât ventilația non-invazivă în prevenirea deteriorării și evitarea ventilației invazive",
   "Este rezervat insuficienței de tip II hipercapnice, unde înlocuiește BiPAP",
   "Înlocuiește ECMO în hipoxemia refractară",
   "Crește spațiul mort mai mult decât masca facială, motiv pentru care este evitat în tipul I"
  ],
  "correct": [
   1
  ],
  "explanation": "Împiedică tusea, expectorația și alimentația, similar măștii faciale etanșe — Incorect: Textul subliniază că pacientul poate tuși, expectora, comunica și se poate alimenta.\n\nInstituirea HFNO la pacienții cu insuficiență respiratorie de tip I poate fi echivalentă și, în unele circumstanțe, mai eficientă decât ventilația non-invazivă în prevenirea deteriorării și evitarea ventilației invazive — Corect: Echivalența (și uneori superioritatea) față de VNI în tipul I este concluzia citată.\n\nEste rezervat insuficienței de tip II hipercapnice, unde înlocuiește BiPAP — Incorect: HFNO este discutat la insuficiența de tip I, nu ca substitut al BiPAP în tipul II.\n\nÎnlocuiește ECMO în hipoxemia refractară — Incorect: ECMO rămâne o tehnică extracorporeală pentru hipoxemia refractară, distinctă de HFNO.\n\nCrește spațiul mort mai mult decât masca facială, motiv pentru care este evitat în tipul I — Incorect: Tolerabilitatea superioară, nu creșterea spațiului mort, este argumentul în favoarea HFNO.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 229, Presiunea pozitivă continuă în căile aeriene — HFNO (pagini PDF: 47).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    229
   ],
   "pdfPages": [
    47
   ],
   "section": "Presiunea pozitivă continuă în căile aeriene — HFNO"
  },
  "learningObjective": "Plasarea HFNO ca alternativă tolerabilă a CPAP/VNI în insuficiența hipoxemică de tip I.",
  "optionRationales": [
   "Textul subliniază că pacientul poate tuși, expectora, comunica și se poate alimenta.",
   "Echivalența (și uneori superioritatea) față de VNI în tipul I este concluzia citată.",
   "HFNO este discutat la insuficiența de tip I, nu ca substitut al BiPAP în tipul II.",
   "ECMO rămâne o tehnică extracorporeală pentru hipoxemia refractară, distinctă de HFNO.",
   "Tolerabilitatea superioară, nu creșterea spațiului mort, este argumentul în favoarea HFNO."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută HFNO pe teritoriul tipului II sau al ECMO și neagă avantajul de tolerabilitate (tuse, alimentație) din același paragraf."
  },
  "textbookExpressions": [
   "high-flow nasal oxygen",
   "insuficienţă respiratorie de tip I"
  ]
 },
 {
  "id": "ati-adv-018",
  "topicId": "ati",
  "type": "CM",
  "stem": "Următoarele afirmații despre sevrajul de ventilație și miopatia bolii critice sunt adevărate:",
  "options": [
   "O miopatie cvadriplegică severă a fost asociată cu administrarea de steroizi și miorelaxante la pacienții ventilați mecanic pentru astm sever acut",
   "SIMV, ca tehnică de sevraj, implică o reducere progresivă a frecvenței respiratorii controlate, cu respirații spontane de obicei asistate prin suport de presiune",
   "Pacienții ventilați sub 24-48 de ore, de exemplu după chirurgie electivă majoră, își pot relua de regulă respirația spontană imediat, fără un proces formal de sevraj",
   "O evaluare subiectivă, de către un clinician experimentat, a răspunsului la o tentativă scurtă de respirație spontană este cel mai de încredere predictor al reușitei sau al eșecului sevrajului",
   "Indicele de respirație rapidă superficială înlocuiește necesitatea de a tuși, a înghiți și a proteja căile aeriene înainte de extubare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "O miopatie cvadriplegică severă a fost asociată cu administrarea de steroizi și miorelaxante la pacienții ventilați mecanic pentru astm sever acut — Corect: Asocierea steroizi plus miorelaxante în astmul acut sever este contextul citat al miopatiei cvadriplegice.\n\nSIMV, ca tehnică de sevraj, implică o reducere progresivă a frecvenței respiratorii controlate, cu respirații spontane de obicei asistate prin suport de presiune — Corect: Reducerea progresivă a frecvenței obligatorii, cu PSV pe respirațiile spontane, este metoda SIMV de sevraj.\n\nPacienții ventilați sub 24-48 de ore, de exemplu după chirurgie electivă majoră, își pot relua de regulă respirația spontană imediat, fără un proces formal de sevraj — Corect: Intervalul sub 24-48 de ore, exemplificat prin chirurgia electivă, permite reluarea imediată.\n\nO evaluare subiectivă, de către un clinician experimentat, a răspunsului la o tentativă scurtă de respirație spontană este cel mai de încredere predictor al reușitei sau al eșecului sevrajului — Corect: Tentativa scurtă de respirație spontană, judecată de un clinician experimentat, este numită cel mai de încredere predictor.\n\nIndicele de respirație rapidă superficială înlocuiește necesitatea de a tuși, a înghiți și a proteja căile aeriene înainte de extubare — Incorect: Extubarea cere tuse, deglutiție și protecția căii aeriene; indicele este doar un predictor condiționat, nu un substitut.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 231, Slăbiciunea neuromusculară; Tehnici de sevraj; Extubarea (pagini PDF: 49).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    231
   ],
   "pdfPages": [
    49
   ],
   "section": "Slăbiciunea neuromusculară; Tehnici de sevraj; Extubarea"
  },
  "learningObjective": "Integrarea miopatiei induse de steroizi/miorelaxante cu tehnicile de sevraj și cu valoarea tentativei de respirație spontană, fără a substitui protecția căii aeriene printr-un indice.",
  "optionRationales": [
   "Asocierea steroizi plus miorelaxante în astmul acut sever este contextul citat al miopatiei cvadriplegice.",
   "Reducerea progresivă a frecvenței obligatorii, cu PSV pe respirațiile spontane, este metoda SIMV de sevraj.",
   "Intervalul sub 24-48 de ore, exemplificat prin chirurgia electivă, permite reluarea imediată.",
   "Tentativa scurtă de respirație spontană, judecată de un clinician experimentat, este numită cel mai de încredere predictor.",
   "Extubarea cere tuse, deglutiție și protecția căii aeriene; indicele este doar un predictor condiționat, nu un substitut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru afirmații din secțiuni diferite trebuie ținute împreună; distractorul ridică indicele de respirație rapidă la rang de criteriu suficient de extubare."
  },
  "textbookExpressions": [
   "miopatie cvadriplegică",
   "24-48 de ore"
  ]
 },
 {
  "id": "ati-adv-019",
  "topicId": "ati",
  "type": "CM",
  "stem": "Sindromul de detresă respiratorie acută, potrivit definiției Berlin prezentate, se caracterizează prin:",
  "options": [
   "Aproximativ 10% din internările la terapie intensivă sunt conforme cu definiția Berlin",
   "Mortalitatea prezisă variază de la 27% (forme ușoare) la 32% (moderate) și 45% (severe)",
   "Cel mai frecvent factor predispozant este sepsisul; 20-40% dintre pacienții cu sepsis sever vor dezvolta ARDS",
   "Diagnosticul cere, printre altele, cauză non-cardiacă, cu presiune de ocluzie a arterei pulmonare <18 mmHg sau indici cardiaci normali",
   "ARDS rezultă numai din leziuni pulmonare directe, cauzele extrapulmonare fiind excluse din definiție"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Aproximativ 10% din internările la terapie intensivă sunt conforme cu definiția Berlin — Corect: Proporția de 10% din internările ATI este cifra din text.\n\nMortalitatea prezisă variază de la 27% (forme ușoare) la 32% (moderate) și 45% (severe) — Corect: Cele trei mortalități 27/32/45% corespund claselor ușor/moderat/sever.\n\nCel mai frecvent factor predispozant este sepsisul; 20-40% dintre pacienții cu sepsis sever vor dezvolta ARDS — Corect: Sepsisul este de departe cel mai frecvent factor, cu 20-40% progresie către ARDS.\n\nDiagnosticul cere, printre altele, cauză non-cardiacă, cu presiune de ocluzie a arterei pulmonare <18 mmHg sau indici cardiaci normali — Corect: POAP <18 mmHg sau ecocardiografie/indici cardiaci normali definesc originea non-cardiogenă.\n\nARDS rezultă numai din leziuni pulmonare directe, cauzele extrapulmonare fiind excluse din definiție — Incorect: Cadranul 10.17 include atât leziuni directe, cât și indirecte (sepsis, pancreatită, TRALI, politraumatism).\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 232, ARDS — Definiție și etiologie; Cadranul 10.17 (pagini PDF: 50).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    232
   ],
   "pdfPages": [
    50
   ],
   "section": "ARDS — Definiție și etiologie; Cadranul 10.17"
  },
  "learningObjective": "Reținerea epidemiologiei (10% din internările ATI, mortalitate pe clase Berlin, sepsis 20-40%) și a criteriului non-cardiogen (POAP <18 mmHg).",
  "optionRationales": [
   "Proporția de 10% din internările ATI este cifra din text.",
   "Cele trei mortalități 27/32/45% corespund claselor ușor/moderat/sever.",
   "Sepsisul este de departe cel mai frecvent factor, cu 20-40% progresie către ARDS.",
   "POAP <18 mmHg sau ecocardiografie/indici cardiaci normali definesc originea non-cardiogenă.",
   "Cadranul 10.17 include atât leziuni directe, cât și indirecte (sepsis, pancreatită, TRALI, politraumatism)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere simultaneitatea a trei procente epidemiologice și a pragului POAP <18 mmHg; distractorul restrânge ARDS la cauze pulmonare directe."
  },
  "textbookExpressions": [
   "10% din internările",
   "<18 mmHg"
  ]
 },
 {
  "id": "ati-adv-020",
  "topicId": "ati",
  "type": "CM",
  "stem": "Prognosticul ARDS, potrivit capitolului, este corect descris de:",
  "options": [
   "Majoritatea deceselor apar ca urmare a disfuncției multiple de organ și a instabilității hemodinamice, mai degrabă decât a deteriorării schimbului de gaze",
   "Când ARDS apare în asociere cu sepsisul intra-abdominal, rata mortalității rămâne foarte mare, spre deosebire de ARDS „primar\" (pneumonie, aspirație, contuzie)",
   "Steroizii în ARDS persistent îmbunătățesc rezultatele clinice, motiv pentru care sunt recomandați de rutină",
   "Pronația tardivă, de scurtă durată, este superioară pronației precoce prelungite asupra mortalității",
   "Diagnosticul diferențial radiologic exclude fibroza pulmonară și insuficiența cardiacă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Majoritatea deceselor apar ca urmare a disfuncției multiple de organ și a instabilității hemodinamice, mai degrabă decât a deteriorării schimbului de gaze — Corect: Textul atribuie majoritatea deceselor MODS și instabilității hemodinamice, nu eșecului schimbului gazos.\n\nCând ARDS apare în asociere cu sepsisul intra-abdominal, rata mortalității rămâne foarte mare, spre deosebire de ARDS „primar\" (pneumonie, aspirație, contuzie) — Corect: Contrastul mortalității foarte mari din sepsisul intra-abdominal versus mortalitatea mai mică din ARDS primar este explicit.\n\nSteroizii în ARDS persistent îmbunătățesc rezultatele clinice, motiv pentru care sunt recomandați de rutină — Incorect: Steroizii pot îmbunătăți funcția pulmonară, dar nu par să îmbunătățească rezultatele; utilizarea rămâne controversată.\n\nPronația tardivă, de scurtă durată, este superioară pronației precoce prelungite asupra mortalității — Incorect: Beneficiul asupra mortalității este asociat pronației precoce și perioadelor prelungite, nu celei tardive scurte.\n\nDiagnosticul diferențial radiologic exclude fibroza pulmonară și insuficiența cardiacă — Incorect: Diagnosticul diferențial include insuficiența cardiacă și fibroza pulmonară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 233, ARDS — Prognosticul; Tratament (pagini PDF: 51).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    233
   ],
   "pdfPages": [
    51
   ],
   "section": "ARDS — Prognosticul; Tratament"
  },
  "learningObjective": "Separarea cauzei decesului (MODS, nu hipoxemia) de impactul etiologiei (sepsis abdominal versus ARDS primar).",
  "optionRationales": [
   "Textul atribuie majoritatea deceselor MODS și instabilității hemodinamice, nu eșecului schimbului gazos.",
   "Contrastul mortalității foarte mari din sepsisul intra-abdominal versus mortalitatea mai mică din ARDS primar este explicit.",
   "Steroizii pot îmbunătăți funcția pulmonară, dar nu par să îmbunătățească rezultatele; utilizarea rămâne controversată.",
   "Beneficiul asupra mortalității este asociat pronației precoce și perioadelor prelungite, nu celei tardive scurte.",
   "Diagnosticul diferențial include insuficiența cardiacă și fibroza pulmonară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează mesajul despre steroizi și despre timingul pronației și închid un diagnostic diferențial pe care textul îl lasă deschis."
  },
  "textbookExpressions": [
   "sepsisul intra-abdominal",
   "disfuncţie multiplă de organ"
  ]
 },
 {
  "id": "ati-adv-021",
  "topicId": "ati",
  "type": "CS",
  "stem": "În limitarea edemului pulmonar din ARDS, obiectivul descris este:",
  "options": [
   "Expansiune volemică agresivă, pentru a susține debitul cardiac",
   "Obținerea unei balanțe hidrice negative semnificative, prin restricție, diuretice sau, dacă aceste măsuri eșuează, hemofiltrare",
   "Menținerea unei balanțe pozitive de 2-3 L/zi, pentru a evita hipoperfuzia",
   "Coloizi ca fluid de primă intenție, în locul restricției",
   "Doar pronația, fără intervenție asupra bilanțului hidric"
  ],
  "correct": [
   1
  ],
  "explanation": "Expansiune volemică agresivă, pentru a susține debitul cardiac — Incorect: Expansiunea agresivă contravine obiectivului de a limita formarea edemului.\n\nObținerea unei balanțe hidrice negative semnificative, prin restricție, diuretice sau, dacă aceste măsuri eșuează, hemofiltrare — Corect: Restricția, diureticele și, la eșec, hemofiltrarea pentru o balanță negativă semnificativă sunt strategia citată.\n\nMenținerea unei balanțe pozitive de 2-3 L/zi, pentru a evita hipoperfuzia — Incorect: Balanța pozitivă de 2-3 L/zi este opusul obiectivului enunțat.\n\nColoizi ca fluid de primă intenție, în locul restricției — Incorect: Nu sunt propuși coloizii ca substitut al restricției.\n\nDoar pronația, fără intervenție asupra bilanțului hidric — Incorect: Pronația este o măsură separată; limitarea edemului rămâne un obiectiv de sine stătător.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 233, Limitarea edemului pulmonar (pagini PDF: 51).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    233
   ],
   "pdfPages": [
    51
   ],
   "section": "Limitarea edemului pulmonar"
  },
  "learningObjective": "Identificarea balanței negative ca obiectiv, inclusiv rolul hemofiltrării când restricția și diureticele nu sunt suficiente.",
  "optionRationales": [
   "Expansiunea agresivă contravine obiectivului de a limita formarea edemului.",
   "Restricția, diureticele și, la eșec, hemofiltrarea pentru o balanță negativă semnificativă sunt strategia citată.",
   "Balanța pozitivă de 2-3 L/zi este opusul obiectivului enunțat.",
   "Nu sunt propuși coloizii ca substitut al restricției.",
   "Pronația este o măsură separată; limitarea edemului rămâne un obiectiv de sine stătător."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică logica șocului hipovolemic (umplere, balanță pozitivă) unui sindrom de permeabilitate în care textul cere balanță negativă."
  },
  "textbookExpressions": [
   "balanţe negative semnificative",
   "hemofiltrare"
  ]
 },
 {
  "id": "ati-adv-022",
  "topicId": "ati",
  "type": "CM",
  "stem": "Suportul circulator în terapia intensivă, dincolo de vasodilatatoarele deja discutate, include următoarele afirmații corecte:",
  "options": [
   "Intoxicația cu cianură reprezintă un risc la pacienții cu perfuzii prelungite de nitroprusiat, în doze mari",
   "Contrapulsația cu balon intra-aortic este tehnica folosită cel mai frecvent pentru suportul mecanic în insuficiența miocardică",
   "Creșterea DO2 și VO2 la nivele peste limita normală aduce beneficiu demonstrat la pacientul critic",
   "Valoarea utilizării de rutină a inodilatoarelor precum dopexamina este bine stabilită",
   "Early goal-directed therapy cu ScvO2 >70% înlocuiește contrapulsația în șocul cardiogen"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Intoxicația cu cianură reprezintă un risc la pacienții cu perfuzii prelungite de nitroprusiat, în doze mari — Corect: Riscul de intoxicație cu cianură la perfuzii prelungite, în doze mari, este enunțat pentru nitroprusiat.\n\nContrapulsația cu balon intra-aortic este tehnica folosită cel mai frecvent pentru suportul mecanic în insuficiența miocardică — Corect: BCPIA este numită tehnica cea mai frecventă de suport mecanic în insuficiența miocardică.\n\nCreșterea DO2 și VO2 la nivele peste limita normală aduce beneficiu demonstrat la pacientul critic — Incorect: Supranormalizarea DO2/VO2 nu aduce beneficiu, putând fi dăunătoare.\n\nValoarea utilizării de rutină a inodilatoarelor precum dopexamina este bine stabilită — Incorect: Valoarea dopexaminei de rutină rămâne incertă.\n\nEarly goal-directed therapy cu ScvO2 >70% înlocuiește contrapulsația în șocul cardiogen — Incorect: EGDT vizează sepsisul, nu înlocuiește suportul mecanic din șocul cardiogen.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 224, Terapia vasodilatatoare; Suportul mecanic al miocardului (pagini PDF: 42).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    224
   ],
   "pdfPages": [
    42
   ],
   "section": "Terapia vasodilatatoare; Suportul mecanic al miocardului"
  },
  "learningObjective": "Recunoașterea toxicității cianurice a nitroprusiatului și a BCPIA ca suport mecanic de primă linie, distinct de supranormalizarea DO2.",
  "optionRationales": [
   "Riscul de intoxicație cu cianură la perfuzii prelungite, în doze mari, este enunțat pentru nitroprusiat.",
   "BCPIA este numită tehnica cea mai frecventă de suport mecanic în insuficiența miocardică.",
   "Supranormalizarea DO2/VO2 nu aduce beneficiu, putând fi dăunătoare.",
   "Valoarea dopexaminei de rutină rămâne incertă.",
   "EGDT vizează sepsisul, nu înlocuiește suportul mecanic din șocul cardiogen."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reiau supranormalizarea DO2 și EGDT, deja infirmate în același capitol, ca alternative la BCPIA."
  },
  "textbookExpressions": [
   "Intoxicaţia cu cianură",
   "balon intra-aortic"
  ]
 },
 {
  "id": "ati-adv-023",
  "topicId": "ati",
  "type": "CM",
  "stem": "Conform Cadranului 10.12, pacienții cu risc perioperator de insuficiență multiplă de organ includ:",
  "options": [
   "Vârstnicii și cei cu comorbidități, în special cu rezervă cardiorespiratorie funcțională limitată",
   "Pacienții cu traumatisme în două cavități corporale care necesită transfuzii multiple",
   "Cei supuși unei disecții extensive de țesuturi (esofagectomie, pancreatectomie, anevrism aortic)",
   "Chirurgia de urgență pentru afecțiuni intra-abdominale sau intratoracice foarte grave (peritonită fecaloidă, perforație esofagiană)",
   "Adulții tineri sănătoși, operați electiv pentru hernie inghinală, ca grupul cu cel mai mare risc citat"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Vârstnicii și cei cu comorbidități, în special cu rezervă cardiorespiratorie funcțională limitată — Corect: Vârsta și rezerva cardiorespiratorie deschid cadranul.\n\nPacienții cu traumatisme în două cavități corporale care necesită transfuzii multiple — Corect: Politrauma biconpartimentală cu transfuzii este al doilea rând.\n\nCei supuși unei disecții extensive de țesuturi (esofagectomie, pancreatectomie, anevrism aortic) — Corect: Esofagectomia, pancreatectomia și anevrismul aortic exemplifică disecția extensivă.\n\nChirurgia de urgență pentru afecțiuni intra-abdominale sau intratoracice foarte grave (peritonită fecaloidă, perforație esofagiană) — Corect: Peritonita fecaloidă și perforația esofagiană sunt urgențele citate.\n\nAdulții tineri sănătoși, operați electiv pentru hernie inghinală, ca grupul cu cel mai mare risc citat — Incorect: Hernia electivă la tânărul sănătos nu figurează ca grup de risc.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 224, Cadranul 10.12 — Risc perioperator de MODS (pagini PDF: 42).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    224
   ],
   "pdfPages": [
    42
   ],
   "section": "Cadranul 10.12 — Risc perioperator de MODS"
  },
  "learningObjective": "Reținerea celor patru grupuri (vârstă/comorbiditate, politraumă transfuzată, disecție extensivă, urgență cavită) distinct de chirurgia electivă minoră.",
  "optionRationales": [
   "Vârsta și rezerva cardiorespiratorie deschid cadranul.",
   "Politrauma biconpartimentală cu transfuzii este al doilea rând.",
   "Esofagectomia, pancreatectomia și anevrismul aortic exemplifică disecția extensivă.",
   "Peritonita fecaloidă și perforația esofagiană sunt urgențele citate.",
   "Hernia electivă la tânărul sănătos nu figurează ca grup de risc."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru rânduri reale ale cadranului; distractorul inversează ierarhia de risc către chirurgia electivă minoră."
  },
  "textbookExpressions": [
   "insuficienţă multiplă de organ",
   "peritonite fecaloide"
  ]
 },
 {
  "id": "ati-adv-024",
  "topicId": "ati",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la nitroglicerină în terapia vasodilatatoare:",
  "options": [
   "În doze mici este predominant venodilatator; pe măsură ce doza crește, determină și dilatație arterială, scăzând astfel atât presarcina cât și postsarcina; reduce rezistența vasculară pulmonară, efect exploatabil în debitul scăzut secundar hipertensiunii pulmonare",
   "Este un dilatător arterial pur încă de la dozele mici, fără efect venos",
   "Nu influențează rezistența vasculară pulmonară, fiind evitată în hipertensiunea pulmonară",
   "Înlocuiește contrapulsația cu balon intra-aortic ca suport mecanic de primă linie",
   "Are risc de intoxicație cu cianură la perfuzii scurte, spre deosebire de nitroprusiat"
  ],
  "correct": [
   0
  ],
  "explanation": "În doze mici este predominant venodilatator; pe măsură ce doza crește, determină și dilatație arterială, scăzând astfel atât presarcina cât și postsarcina; reduce rezistența vasculară pulmonară, efect exploatabil în debitul scăzut secundar hipertensiunii pulmonare — Corect: Secvența venos→arterial, presarcină+postsarcină și RVP sunt din paragraf.\n\nEste un dilatător arterial pur încă de la dozele mici, fără efect venos — Incorect: La doze mici predomină venodilatația, nu dilatația arterială pură.\n\nNu influențează rezistența vasculară pulmonară, fiind evitată în hipertensiunea pulmonară — Incorect: Reducerea RVP este tocmai efectul exploatat.\n\nÎnlocuiește contrapulsația cu balon intra-aortic ca suport mecanic de primă linie — Incorect: BCPIA rămâne suportul mecanic cel mai frecvent; NTG este vasodilatator.\n\nAre risc de intoxicație cu cianură la perfuzii scurte, spre deosebire de nitroprusiat — Incorect: Intoxicația cu cianură este atribuită nitroprusiatului, nu NTG.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 224, Terapia vasodilatatoare — Nitroglicerina (pagini PDF: 42).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    224
   ],
   "pdfPages": [
    42
   ],
   "section": "Terapia vasodilatatoare — Nitroglicerina"
  },
  "learningObjective": "Recunoașterea venodilatației de doză mică, a dilatației arteriale de doză crescută și a efectului pe rezistența pulmonară.",
  "optionRationales": [
   "Secvența venos→arterial, presarcină+postsarcină și RVP sunt din paragraf.",
   "La doze mici predomină venodilatația, nu dilatația arterială pură.",
   "Reducerea RVP este tocmai efectul exploatat.",
   "BCPIA rămâne suportul mecanic cel mai frecvent; NTG este vasodilatator.",
   "Intoxicația cu cianură este atribuită nitroprusiatului, nu NTG."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează venos versus arterial, mută cianura de pe nitroprusiat pe NTG și înlocuiesc BCPIA."
  },
  "textbookExpressions": [
   "venodilatator",
   "rezistenţa vasculară pulmonară"
  ]
 },
 {
  "id": "ati-adv-025",
  "topicId": "ati",
  "type": "CM",
  "stem": "Ventilația mecanică controlată (VMC) se deosebește după variabila presetată:",
  "options": [
   "În ventilația cu volum controlat, volumul curent și frecvența sunt presetate; presiunea căilor aeriene variază cu reglajul și cu mecanica pulmonară (rezistență, complianță)",
   "În ventilația cu presiune controlată, presiunea inspiratorie și frecvența sunt presetate, iar volumul curent variază cu mecanica pulmonară",
   "În volumul controlat, presiunea este fixă, iar volumul curent oscilează liber cu complianța",
   "În presiunea controlată, volumul curent și presiunea sunt ambele fixe, independent de mecanică",
   "VMC nu are variantă de volum sau de presiune, fiind identică CPAP"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "În ventilația cu volum controlat, volumul curent și frecvența sunt presetate; presiunea căilor aeriene variază cu reglajul și cu mecanica pulmonară (rezistență, complianță) — Corect: Vt și frecvența presetate, presiunea variabilă, definesc volumul controlat.\n\nÎn ventilația cu presiune controlată, presiunea inspiratorie și frecvența sunt presetate, iar volumul curent variază cu mecanica pulmonară — Corect: Presiunea și frecvența presetate, Vt variabil, definesc presiunea controlată.\n\nÎn volumul controlat, presiunea este fixă, iar volumul curent oscilează liber cu complianța — Incorect: În volumul controlat presiunea variază, nu este fixă.\n\nÎn presiunea controlată, volumul curent și presiunea sunt ambele fixe, independent de mecanică — Incorect: În presiunea controlată Vt variază cu mecanica.\n\nVMC nu are variantă de volum sau de presiune, fiind identică CPAP — Incorect: VMC are tocmai aceste două tipuri.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 229, Ventilație mecanică controlată (pagini PDF: 47).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    229
   ],
   "pdfPages": [
    47
   ],
   "section": "Ventilație mecanică controlată"
  },
  "learningObjective": "Contrastarea variabilei fixe (Vt versus presiune inspiratorie) și a celei care variază cu mecanica pulmonară.",
  "optionRationales": [
   "Vt și frecvența presetate, presiunea variabilă, definesc volumul controlat.",
   "Presiunea și frecvența presetate, Vt variabil, definesc presiunea controlată.",
   "În volumul controlat presiunea variază, nu este fixă.",
   "În presiunea controlată Vt variază cu mecanica.",
   "VMC are tocmai aceste două tipuri."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează care variabilă este presetată și care urmează mecanica pulmonară."
  },
  "textbookExpressions": [
   "volum controlat",
   "presiune controlată"
  ]
 },
 {
  "id": "ati-adv-026",
  "topicId": "ati",
  "type": "CM",
  "stem": "Presiunea pozitivă la sfârșitul expirului (PEEP) se caracterizează prin:",
  "options": [
   "Re-expandează unitățile insuficient ventilate și redistribuie lichidul din alveole către interstițiul perivascular, reducând șuntul și crescând PaO2",
   "Creșterea presiunii intratoracice medii poate împiedica reîntoarcerea venoasă, crește rezistența vasculară pulmonară și reduce debitul cardiac",
   "Nivele scăzute (5-8 cmH2O) sunt folosite la majoritatea ventilaților pentru a menține volumul pulmonar, precum și în atelectazia bazală",
   "PEEP scade PaO2 prin creșterea șuntului și crește întoarcerea venoasă",
   "Nivelele uzuale sunt 20-30 cmH2O la toți pacienții, fără efect asupra debitului cardiac"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Re-expandează unitățile insuficient ventilate și redistribuie lichidul din alveole către interstițiul perivascular, reducând șuntul și crescând PaO2 — Corect: Re-expansarea, redistribuția lichidului și creșterea PaO2 sunt efectele pulmonare.\n\nCreșterea presiunii intratoracice medii poate împiedica reîntoarcerea venoasă, crește rezistența vasculară pulmonară și reduce debitul cardiac — Corect: Triada întoarcere venoasă↓ / RVP↑ / debit↓ este costul hemodinamic.\n\nNivele scăzute (5-8 cmH2O) sunt folosite la majoritatea ventilaților pentru a menține volumul pulmonar, precum și în atelectazia bazală — Corect: 5-8 cmH2O este intervalul uzual.\n\nPEEP scade PaO2 prin creșterea șuntului și crește întoarcerea venoasă — Incorect: PEEP reduce șuntul și crește PaO2, dar poate scădea debitul.\n\nNivelele uzuale sunt 20-30 cmH2O la toți pacienții, fără efect asupra debitului cardiac — Incorect: 20-30 cmH2O este presiunea medie citată la HFO, nu PEEP-ul uzual.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 229, Presiunea pozitivă la sfârșitul expirului (pagini PDF: 47).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    229
   ],
   "pdfPages": [
    47
   ],
   "section": "Presiunea pozitivă la sfârșitul expirului"
  },
  "learningObjective": "Integrarea beneficiului pe șunt/PaO2 cu costul de întoarcere venoasă/debit și cu intervalul uzual 5-8 cmH2O.",
  "optionRationales": [
   "Re-expansarea, redistribuția lichidului și creșterea PaO2 sunt efectele pulmonare.",
   "Triada întoarcere venoasă↓ / RVP↑ / debit↓ este costul hemodinamic.",
   "5-8 cmH2O este intervalul uzual.",
   "PEEP reduce șuntul și crește PaO2, dar poate scădea debitul.",
   "20-30 cmH2O este presiunea medie citată la HFO, nu PEEP-ul uzual."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează efectul pe șunt și atribuie PEEP-ului uzual presiunile 20-30 cmH2O ale oscilației de înaltă frecvență."
  },
  "textbookExpressions": [
   "5-8 cmH20",
   "reîntoarcerea venoasă"
  ]
 },
 {
  "id": "ati-adv-027",
  "topicId": "ati",
  "type": "CM",
  "stem": "Reducerea pneumoniei asociate ventilatorului (VAP) include, potrivit capitolului:",
  "options": [
   "Scurgerea secrețiilor orofaringiene infectate dincolo de balonul canulei este considerată în mare măsură responsabilă",
   "Multe secții folosesc canule cu porturi de aspirație subglotică, pentru a minimiza riscul",
   "Riscul poate fi redus prin nursing la 45° și prin decontaminare orofaringiană",
   "Tratamentul se face cu un antibiotic cu spectru larg, modificabil după izolarea microorganismului cauzal",
   "Poziția declivă 0° și evitarea aspirației subglotice reduc VAP, colonizarea orofaringelui fiind protectivă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Scurgerea secrețiilor orofaringiene infectate dincolo de balonul canulei este considerată în mare măsură responsabilă — Corect: Scurgerea dincolo de balon este mecanismul presupus.\n\nMulte secții folosesc canule cu porturi de aspirație subglotică, pentru a minimiza riscul — Corect: Porturile subglotice sunt măsura de dispozitiv.\n\nRiscul poate fi redus prin nursing la 45° și prin decontaminare orofaringiană — Corect: 45° și decontaminarea orofaringiană sunt măsurile de nursing.\n\nTratamentul se face cu un antibiotic cu spectru larg, modificabil după izolarea microorganismului cauzal — Corect: Antibioticul cu spectru larg, apoi de-escaladarea, este tratamentul.\n\nPoziția declivă 0° și evitarea aspirației subglotice reduc VAP, colonizarea orofaringelui fiind protectivă — Incorect: Poziția 45°, nu 0°, și aspirația subglotică reduc riscul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 229, Pneumonia asociată ventilatorului (pagini PDF: 47).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    229
   ],
   "pdfPages": [
    47
   ],
   "section": "Pneumonia asociată ventilatorului"
  },
  "learningObjective": "Asocierea scurgerii pe lângă balon, a aspirației subglotice, a poziției la 45° și a decontaminării orofaringiene.",
  "optionRationales": [
   "Scurgerea dincolo de balon este mecanismul presupus.",
   "Porturile subglotice sunt măsura de dispozitiv.",
   "45° și decontaminarea orofaringiană sunt măsurile de nursing.",
   "Antibioticul cu spectru larg, apoi de-escaladarea, este tratamentul.",
   "Poziția 45°, nu 0°, și aspirația subglotică reduc riscul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează poziția 45° și transformă colonizarea orofaringelui din factor de risc în protecție."
  },
  "textbookExpressions": [
   "aspiraţie subglotică",
   "poziţie la 45°"
  ]
 },
 {
  "id": "ati-adv-028",
  "topicId": "ati",
  "type": "CM",
  "stem": "Ventilația protectivă pulmonară, în parametrii din capitol, presupune:",
  "options": [
   "Volume curente limitate la 4-8 ml/kg greutate corporală ideală (ideal 6 ml/kg)",
   "Presiuni de platou (Pplat) care să nu depășească 30 cmH2O; hipercapnia permisivă este comună și acceptabilă, țintind evitarea acidozei severe (pH >7,2)",
   "Volume curente de 12-15 ml/kg, Pplat 40-45 cmH2O, hipercapnia fiind inacceptabilă",
   "PEEP-ul este evitat, volumul alveolar menținându-se doar prin hiperventilație",
   "Metoda este rezervată HFO, fiind contraindicată în ARDS"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Volume curente limitate la 4-8 ml/kg greutate corporală ideală (ideal 6 ml/kg) — Corect: Intervalul 4-8 ml/kg și idealul 6 ml/kg sunt cifrele de volum.\n\nPresiuni de platou (Pplat) care să nu depășească 30 cmH2O; hipercapnia permisivă este comună și acceptabilă, țintind evitarea acidozei severe (pH >7,2) — Corect: Pplat 30 cmH2O și pH >7,2 cu hipercapnie permisivă completează protocolul.\n\nVolume curente de 12-15 ml/kg, Pplat 40-45 cmH2O, hipercapnia fiind inacceptabilă — Incorect: 12-15 ml/kg și Pplat 40 sunt tocmai supradistensia evitată.\n\nPEEP-ul este evitat, volumul alveolar menținându-se doar prin hiperventilație — Incorect: Volumul alveolar se menține cu PEEP.\n\nMetoda este rezervată HFO, fiind contraindicată în ARDS — Incorect: Textul cere folosirea la aproape toți ventilații, inclusiv ARDS.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 230, Ventilația protectivă pulmonară (pagini PDF: 48).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    230
   ],
   "pdfPages": [
    48
   ],
   "section": "Ventilația protectivă pulmonară"
  },
  "learningObjective": "Reținerea Vt 4-8 (ideal 6) ml/kg, a Pplat ≤30 cmH2O și a hipercapniei permisive cu pH >7,2.",
  "optionRationales": [
   "Intervalul 4-8 ml/kg și idealul 6 ml/kg sunt cifrele de volum.",
   "Pplat 30 cmH2O și pH >7,2 cu hipercapnie permisivă completează protocolul.",
   "12-15 ml/kg și Pplat 40 sunt tocmai supradistensia evitată.",
   "Volumul alveolar se menține cu PEEP.",
   "Textul cere folosirea la aproape toți ventilații, inclusiv ARDS."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reînvie Vt 12-15 ml/kg și Pplat 40 cmH2O, parametrii pe care ventilația protectivă tocmai îi interzice."
  },
  "textbookExpressions": [
   "4-8 ml/kg",
   "30 cmH20"
  ]
 },
 {
  "id": "ati-adv-029",
  "topicId": "ati",
  "type": "CS",
  "stem": "Ventilația cu oscilație de înaltă frecvență (HFO) la adult, potrivit evidenței citate:",
  "options": [
   "Nu oferă beneficiu asupra mortalității; un trial sugerează chiar mortalitate crescută",
   "Reduce mortalitatea în toate studiile la adult, înlocuind ventilația protectivă",
   "Este superioară ECMO ca primă linie în hipoxemia ușoară",
   "Folosește volume curente de 12 ml/kg, fără PEEP",
   "Este identică SIMV, cu frecvențe de 8-12/min"
  ],
  "correct": [
   0
  ],
  "explanation": "Nu oferă beneficiu asupra mortalității; un trial sugerează chiar mortalitate crescută — Corect: Absența beneficiului și trialul cu mortalitate crescută sunt concluzia.\n\nReduce mortalitatea în toate studiile la adult, înlocuind ventilația protectivă — Incorect: Textul infirmă beneficiul de mortalitate.\n\nEste superioară ECMO ca primă linie în hipoxemia ușoară — Incorect: ECMO rămâne o tehnică extracorporeală distinctă, pentru hipoxemia refractară.\n\nFolosește volume curente de 12 ml/kg, fără PEEP — Incorect: HFO oscilează la 4-15 Hz într-un circuit CPAP, nu cu Vt 12 ml/kg.\n\nEste identică SIMV, cu frecvențe de 8-12/min — Incorect: SIMV este o tehnică de sevraj, nu HFO.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 230, Oscilația de înaltă frecvență (pagini PDF: 48).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    230
   ],
   "pdfPages": [
    48
   ],
   "section": "Oscilația de înaltă frecvență"
  },
  "learningObjective": "Recunoașterea absenței beneficiului de mortalitate (și a semnalului de harm) al HFO la adult.",
  "optionRationales": [
   "Absența beneficiului și trialul cu mortalitate crescută sunt concluzia.",
   "Textul infirmă beneficiul de mortalitate.",
   "ECMO rămâne o tehnică extracorporeală distinctă, pentru hipoxemia refractară.",
   "HFO oscilează la 4-15 Hz într-un circuit CPAP, nu cu Vt 12 ml/kg.",
   "SIMV este o tehnică de sevraj, nu HFO."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reînvie optimismul de mortalitate și confundă HFO cu Vt mare, SIMV sau ECMO."
  },
  "textbookExpressions": [
   "mortalitate crescută",
   "4-15 Hz"
  ]
 },
 {
  "id": "ati-adv-030",
  "topicId": "ati",
  "type": "CM",
  "stem": "Complicațiile imediate ale intubației traheale, în Cadranul 10.14, includ:",
  "options": [
   "Canula în esofag — hipoxie și distensie abdominală; detectată prin absența curbelor de capnografie; necesită îndepărtare imediată, ventilație pe mască cu rezervor și reinserție",
   "Canula într-o bronhie principală (de obicei dreapta) — se evită prin verificarea distensiei ambilor plămâni și radiografie toracică pentru poziție",
   "Traumatism al căii aeriene superioare — leziuni ale buzelor, dinților, gingiilor, traheei",
   "Canula esofagiană se confirmă prin capnografie alveolară normală și se lasă pe loc dacă SpO2 este păstrată",
   "Intubația selectivă dreaptă este obiectivul, radiografia fiind superfluă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Canula în esofag — hipoxie și distensie abdominală; detectată prin absența curbelor de capnografie; necesită îndepărtare imediată, ventilație pe mască cu rezervor și reinserție — Corect: Absența capnografiei și secvența mască-reinserție definesc canula esofagiană.\n\nCanula într-o bronhie principală (de obicei dreapta) — se evită prin verificarea distensiei ambilor plămâni și radiografie toracică pentru poziție — Corect: Bronhia dreaptă, auscultația bilaterală și Rx sunt al doilea rând.\n\nTraumatism al căii aeriene superioare — leziuni ale buzelor, dinților, gingiilor, traheei — Corect: Leziunile buzelor/dinților/gingiilor/traheei sunt traumatismul imediat.\n\nCanula esofagiană se confirmă prin capnografie alveolară normală și se lasă pe loc dacă SpO2 este păstrată — Incorect: Capnografia absentă, nu normală, semnalează esofagul; canula se îndepărtează.\n\nIntubația selectivă dreaptă este obiectivul, radiografia fiind superfluă — Incorect: Intubația selectivă dreaptă este complicația, nu obiectivul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 228, Cadranul 10.14 — Complicațiile intubației (pagini PDF: 46).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    228
   ],
   "pdfPages": [
    46
   ],
   "section": "Cadranul 10.14 — Complicațiile intubației"
  },
  "learningObjective": "Recunoașterea triadei esofag (fără capnografie) / bronhie dreaptă (auscultație+Rx) / traumatism local, și a conduitei de retragere imediată.",
  "optionRationales": [
   "Absența capnografiei și secvența mască-reinserție definesc canula esofagiană.",
   "Bronhia dreaptă, auscultația bilaterală și Rx sunt al doilea rând.",
   "Leziunile buzelor/dinților/gingiilor/traheei sunt traumatismul imediat.",
   "Capnografia absentă, nu normală, semnalează esofagul; canula se îndepărtează.",
   "Intubația selectivă dreaptă este complicația, nu obiectivul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă absența capnografiei într-un semn de reușită și fac din intubația selectivă dreaptă un obiectiv."
  },
  "textbookExpressions": [
   "absenţa curbelor de capnografie",
   "bronhie principală"
  ]
 },
 {
  "id": "ati-adv-031",
  "topicId": "ati",
  "type": "CM",
  "stem": "Terapia vasodilatatoare în terapia intensivă, dincolo de nitroglicerină, se caracterizează prin:",
  "options": [
   "Reducerea postsarcinii crește volumul-bătaie și scade necesarul miocardic de oxigen prin reducerea tensiunii sistolice a peretelui ventricular; vasodilatația scade și dimensiunea inimii în diastole, îmbunătățind fluxul coronarian",
   "Este deosebit de utilă când curba funcției ventriculare este aplatizată (șoc cardiogen, edem pulmonar cardiogen, regurgitare mitrală), uneori combinată cu suport inotropic",
   "Nitroprusiatul dilată arteriolele și vasele de capacitanță venoasă, plus vascularizația pulmonară, prin eliberare de NO; efectele se instalează rapid și sunt reversibile în câteva minute; intoxicația cu cianură este un risc la perfuzii prelungite, în doze mari",
   "Vasodilatatoarele sunt rezervate hipovolemiei, nitroprusiatul fiind lipsit de efect pe postsarcină",
   "Intoxicația cu cianură apare după doze unice de nitroglicerină, nu după nitroprusiat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Reducerea postsarcinii crește volumul-bătaie și scade necesarul miocardic de oxigen prin reducerea tensiunii sistolice a peretelui ventricular; vasodilatația scade și dimensiunea inimii în diastole, îmbunătățind fluxul coronarian — Corect: Reducerea postsarcinii, a tensiunii de perete și îmbunătățirea fluxului coronarian deschid paragraful.\n\nEste deosebit de utilă când curba funcției ventriculare este aplatizată (șoc cardiogen, edem pulmonar cardiogen, regurgitare mitrală), uneori combinată cu suport inotropic — Corect: Curba aplatizată, șocul cardiogen, edemul pulmonar și regurgitarea mitrală sunt indicațiile.\n\nNitroprusiatul dilată arteriolele și vasele de capacitanță venoasă, plus vascularizația pulmonară, prin eliberare de NO; efectele se instalează rapid și sunt reversibile în câteva minute; intoxicația cu cianură este un risc la perfuzii prelungite, în doze mari — Corect: NO, reversibilitatea în minute și cianura la doze mari prelungite definesc NPS.\n\nVasodilatatoarele sunt rezervate hipovolemiei, nitroprusiatul fiind lipsit de efect pe postsarcină — Incorect: Vasodilatația este pentru insuficiență cu presarcină deja crescută, nu pentru hipovolemie.\n\nIntoxicația cu cianură apare după doze unice de nitroglicerină, nu după nitroprusiat — Incorect: Cianura este atribuită nitroprusiatului, nu NTG.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 224, Terapia vasodilatatoare — NPS și indicații (pagini PDF: 42).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    224
   ],
   "pdfPages": [
    42
   ],
   "section": "Terapia vasodilatatoare — NPS și indicații"
  },
  "learningObjective": "Integrarea indicației pe curba aplatizată, a efectului biventricular al nitroprusiatului și a riscului de cianură la perfuzii prelungite.",
  "optionRationales": [
   "Reducerea postsarcinii, a tensiunii de perete și îmbunătățirea fluxului coronarian deschid paragraful.",
   "Curba aplatizată, șocul cardiogen, edemul pulmonar și regurgitarea mitrală sunt indicațiile.",
   "NO, reversibilitatea în minute și cianura la doze mari prelungite definesc NPS.",
   "Vasodilatația este pentru insuficiență cu presarcină deja crescută, nu pentru hipovolemie.",
   "Cianura este atribuită nitroprusiatului, nu NTG."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută cianura de pe nitroprusiat pe NTG și rezervă vasodilatația hipovolemiei."
  },
  "textbookExpressions": [
   "Nitroprusiatul de sodiu",
   "Intoxicaţia cu cianură"
  ]
 },
 {
  "id": "ati-adv-032",
  "topicId": "ati",
  "type": "CS",
  "stem": "Respirația paradoxală, în evaluarea clinică a insuficienței respiratorii, constă în:",
  "options": [
   "Deplasarea compartimentelor abdominal și toracic în direcții opuse",
   "O discrepanță doar temporală între momentele mișcării abdominal și toracic, fără inversarea direcției",
   "Alternarea relativă a participării intercostalilor și a diafragmei, fără inversare de direcție",
   "Puls paradoxal constant, cu creștere inspiratorie a TA",
   "Tiraj intercostal izolat, fără modificare a abdomenului"
  ],
  "correct": [
   0
  ],
  "explanation": "Deplasarea compartimentelor abdominal și toracic în direcții opuse — Corect: Definiția prin direcții opuse este cea din text.\n\nO discrepanță doar temporală între momentele mișcării abdominal și toracic, fără inversarea direcției — Incorect: Discrepanța de moment, fără inversare, definește respirația asincronă.\n\nAlternarea relativă a participării intercostalilor și a diafragmei, fără inversare de direcție — Incorect: Alternanța intercostali/diafragm este un al treilea pattern, distinct.\n\nPuls paradoxal constant, cu creștere inspiratorie a TA — Incorect: Pulsul paradoxal este rareori prezent și nu definește paradoxul toraco-abdominal.\n\nTiraj intercostal izolat, fără modificare a abdomenului — Incorect: Tirajul este un semn de efort, nu definiția paradoxului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 225, Insuficiența respiratorie — Respirația paradoxală (pagini PDF: 43).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    225
   ],
   "pdfPages": [
    43
   ],
   "section": "Insuficiența respiratorie — Respirația paradoxală"
  },
  "learningObjective": "Separarea paradoxului (direcții opuse) de asincronie (discrepanță de moment) și de alternanța respiratorie.",
  "optionRationales": [
   "Definiția prin direcții opuse este cea din text.",
   "Discrepanța de moment, fără inversare, definește respirația asincronă.",
   "Alternanța intercostali/diafragm este un al treilea pattern, distinct.",
   "Pulsul paradoxal este rareori prezent și nu definește paradoxul toraco-abdominal.",
   "Tirajul este un semn de efort, nu definiția paradoxului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt celelalte două patternuri reale din aceeași listă (asincronie, alternanță), ușor de confunda cu paradoxul."
  },
  "textbookExpressions": [
   "respiraţia paradoxală",
   "direcţii opuse"
  ]
 },
 {
  "id": "ati-adv-033",
  "topicId": "ati",
  "type": "CM",
  "stem": "Limitele pulsoximetriei și ale probei de gaze sanguine, potrivit capitolului, includ:",
  "options": [
   "O SpO2 normală la un pacient cu oxigen suplimentar nu exclude hipoventilația cu retenție de CO2; valorile pot fi inexacte la perfuzie periferică scăzută",
   "Proba de gaze trebuie analizată imediat sau seringa scufundată în apă cu gheață (metabolismul leucocitar continuu scade PO2 și crește PCO2); bulele de aer scad PCO2 și de obicei cresc PO2",
   "Pulsoximetria este un indicator sensibil al hipoventilației, bulele de aer neinfluențând gazele",
   "Gheața crește PO2-ul probei, aerul din seringă scăzând PO2 și crescând PCO2",
   "SpO2 normală pe oxigen exclude retenția de CO2, pulsoximetrul necesitând calibrare înaintea fiecărei măsurători"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "O SpO2 normală la un pacient cu oxigen suplimentar nu exclude hipoventilația cu retenție de CO2; valorile pot fi inexacte la perfuzie periferică scăzută — Corect: Falsul negativ pentru hipercapnie și inexactitatea la hipoperfuzie sunt limitele pulsoximetrului.\n\nProba de gaze trebuie analizată imediat sau seringa scufundată în apă cu gheață (metabolismul leucocitar continuu scade PO2 și crește PCO2); bulele de aer scad PCO2 și de obicei cresc PO2 — Corect: Gheața versus bulele (PCO2↓, PO2↑) sunt regulile de prelevare.\n\nPulsoximetria este un indicator sensibil al hipoventilației, bulele de aer neinfluențând gazele — Incorect: Pulsoximetria nu este sensibilă pentru hipoventilație; bulele influențează gazele.\n\nGheața crește PO2-ul probei, aerul din seringă scăzând PO2 și crescând PCO2 — Incorect: Gheața previne scăderea PO2; aerul scade PCO2 și de obicei crește PO2.\n\nSpO2 normală pe oxigen exclude retenția de CO2, pulsoximetrul necesitând calibrare înaintea fiecărei măsurători — Incorect: SpO2 normală pe oxigen nu exclude retenția de CO2; dispozitivele nu necesită calibrare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 225, Pulsoximetria; Analiza gazelor sanguine (pagini PDF: 43).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    225
   ],
   "pdfPages": [
    43
   ],
   "section": "Pulsoximetria; Analiza gazelor sanguine"
  },
  "learningObjective": "Contrastarea falsei liniștiri a SpO2 pe oxigen de artefactele de gheață versus bule de aer ale seringii.",
  "optionRationales": [
   "Falsul negativ pentru hipercapnie și inexactitatea la hipoperfuzie sunt limitele pulsoximetrului.",
   "Gheața versus bulele (PCO2↓, PO2↑) sunt regulile de prelevare.",
   "Pulsoximetria nu este sensibilă pentru hipoventilație; bulele influențează gazele.",
   "Gheața previne scăderea PO2; aerul scade PCO2 și de obicei crește PO2.",
   "SpO2 normală pe oxigen nu exclude retenția de CO2; dispozitivele nu necesită calibrare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează efectul bulelor de aer pe PO2/PCO2 și transformă SpO2 într-un garant al ventilației."
  },
  "textbookExpressions": [
   "Pulsoximetria nu este un indicator sensibil",
   "bulele de aer"
  ]
 },
 {
  "id": "ati-adv-034",
  "topicId": "ati",
  "type": "CS",
  "stem": "Raportul PaO2/FiO2, în utilizarea din capitol, este:",
  "options": [
   "O aproximare simplă a gradientului alveolo-arterial, folosită pentru a evalua severitatea insuficienței respiratorii, în special în ARDS; se calculează ca PO2 arterial în mmHg raportat la FiO2 ca fracție din 1",
   "Identic PaCO2 end-tidal, fără legătură cu ARDS",
   "Rezervat doar BPOC, calculat ca FiO2/PaO2 inversat",
   "Un substitut al capnografiei pentru confirmarea intubației",
   "Independent de FiO2, util doar în hipercapnia cronică"
  ],
  "correct": [
   0
  ],
  "explanation": "O aproximare simplă a gradientului alveolo-arterial, folosită pentru a evalua severitatea insuficienței respiratorii, în special în ARDS; se calculează ca PO2 arterial în mmHg raportat la FiO2 ca fracție din 1 — Corect: Definiția, utilitatea în ARDS și modul de calcul sunt din paragraf.\n\nIdentic PaCO2 end-tidal, fără legătură cu ARDS — Incorect: End-tidal PCO2 ține de capnografie, nu de raportul de oxigenare.\n\nRezervat doar BPOC, calculat ca FiO2/PaO2 inversat — Incorect: Raportul este PaO2/FiO2, nu inversul, și este discutat la ARDS.\n\nUn substitut al capnografiei pentru confirmarea intubației — Incorect: Confirmarea intubației este o utilizare a capnografiei.\n\nIndependent de FiO2, util doar în hipercapnia cronică — Incorect: Calculul depinde explicit de FiO2.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 225, Raportul PaO2/FiO2 (pagini PDF: 43).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    225
   ],
   "pdfPages": [
    43
   ],
   "section": "Raportul PaO2/FiO2"
  },
  "learningObjective": "Reținerea formulei PaO2(mmHg)/FiO2(fracție) ca aproximare de severitate, mai ales în ARDS.",
  "optionRationales": [
   "Definiția, utilitatea în ARDS și modul de calcul sunt din paragraf.",
   "End-tidal PCO2 ține de capnografie, nu de raportul de oxigenare.",
   "Raportul este PaO2/FiO2, nu inversul, și este discutat la ARDS.",
   "Confirmarea intubației este o utilizare a capnografiei.",
   "Calculul depinde explicit de FiO2."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă raportul de oxigenare cu capnografia sau inversează PaO2 și FiO2."
  },
  "textbookExpressions": [
   "Raportul Pa02/F;02",
   "ARDS"
  ]
 },
 {
  "id": "ati-adv-035",
  "topicId": "ati",
  "type": "CM",
  "stem": "Ventilația non-invazivă (VNI), în principiile de aplicare din capitol, se caracterizează prin:",
  "options": [
   "Este indicată pacienților conștienți, cooperanți, capabili să-și protejeze căile aeriene și să expectoreze eficient",
   "Presiunea se aplică prin mască nazo-facială sau cască; ventilatoarele furnizează BiPAP, cu IPAP și EPAP (și timpii) reglate independent, respirația spontană rămânând posibilă",
   "Avantaje: risc redus de VAP, conservarea vorbirii, înghițirii și tusei, sedare de obicei inutilă; poate reduce intubația, durata de ATI/spitalizare și, la unii, mortalitatea",
   "Este deosebit de utilă în insuficiența hipercapnică acută din BPOC, dacă pacientul nu este profund hipoxic sau obnubilat",
   "VNI se rezervă pacientului obnubilat, fără protecție a căii aeriene, masca fiind contraindicată în BPOC"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este indicată pacienților conștienți, cooperanți, capabili să-și protejeze căile aeriene și să expectoreze eficient — Corect: Conștiența, cooperarea, protecția căii și expectorația sunt criteriile de selecție.\n\nPresiunea se aplică prin mască nazo-facială sau cască; ventilatoarele furnizează BiPAP, cu IPAP și EPAP (și timpii) reglate independent, respirația spontană rămânând posibilă — Corect: Masca/casca și IPAP/EPAP independente definesc BiPAP.\n\nAvantaje: risc redus de VAP, conservarea vorbirii, înghițirii și tusei, sedare de obicei inutilă; poate reduce intubația, durata de ATI/spitalizare și, la unii, mortalitatea — Corect: VAP↓, vorbire/deglutiție/tuse și impactul pe intubație/durată/mortalitate sunt avantajele.\n\nEste deosebit de utilă în insuficiența hipercapnică acută din BPOC, dacă pacientul nu este profund hipoxic sau obnubilat — Corect: BPOC hipercapnic, fără hipoxie profundă/obnubilare, este indicația-cheie.\n\nVNI se rezervă pacientului obnubilat, fără protecție a căii aeriene, masca fiind contraindicată în BPOC — Incorect: Obnubilarea și absența protecției sunt contraindicații; BPOC-ul hipercapnic este tocmai indicația.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 230, 231, Ventilația non-invazivă (pagini PDF: 48, 49).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    230,
    231
   ],
   "pdfPages": [
    48,
    49
   ],
   "section": "Ventilația non-invazivă"
  },
  "learningObjective": "Integrarea criteriilor de conștiență/protecție, a BiPAP (IPAP/EPAP) și a beneficiului în BPOC hipercapnic neobnubilat.",
  "optionRationales": [
   "Conștiența, cooperarea, protecția căii și expectorația sunt criteriile de selecție.",
   "Masca/casca și IPAP/EPAP independente definesc BiPAP.",
   "VAP↓, vorbire/deglutiție/tuse și impactul pe intubație/durată/mortalitate sunt avantajele.",
   "BPOC hipercapnic, fără hipoxie profundă/obnubilare, este indicația-cheie.",
   "Obnubilarea și absența protecției sunt contraindicații; BPOC-ul hipercapnic este tocmai indicația."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează criteriile (obnubilat versus conștient) și mută VNI în afara BPOC-ului hipercapnic."
  },
  "textbookExpressions": [
   "Ventilaţia non-invazivă",
   "BiPAP"
  ]
 },
 {
  "id": "ati-adv-036",
  "topicId": "ati",
  "type": "CM",
  "stem": "Indicațiile și contraindicațiile VNI, conform Cadranului 10.16, includ:",
  "options": [
   "Indicații: exacerbarea acută a BPOC (H+ >44 nmol/L; pH <7,35), edem pulmonar cardiogen, deformități de perete toracic/boală neuromusculară hipercapnică, apnee obstructivă de somn",
   "Contraindicații: chirurgie facială sau a căilor aeriene superioare, nivel scăzut al conștienței, incapacitatea de protejare a căilor aeriene",
   "VNI este de asemenea utilă la imunocompromiși cu insuficiență respiratorie acută și după extubarea hipercapnicilor",
   "Indicația principală este obnubilarea profundă cu pH >7,50, chirurgia facială fiind o indicație de elecție",
   "Contraindicațiile lipsesc, VNI înlocuind intubația la pacientul fără protecție a căii aeriene"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Indicații: exacerbarea acută a BPOC (H+ >44 nmol/L; pH <7,35), edem pulmonar cardiogen, deformități de perete toracic/boală neuromusculară hipercapnică, apnee obstructivă de somn — Corect: BPOC cu pH <7,35, edemul cardiogen, neuromuscular/perete și OSA deschid cadranul.\n\nContraindicații: chirurgie facială sau a căilor aeriene superioare, nivel scăzut al conștienței, incapacitatea de protejare a căilor aeriene — Corect: Chirurgia facială, conștiența scăzută și absența protecției sunt contraindicațiile.\n\nVNI este de asemenea utilă la imunocompromiși cu insuficiență respiratorie acută și după extubarea hipercapnicilor — Corect: Imunocompromisul și post-extubarea hipercapnică sunt din textul adiacent.\n\nIndicația principală este obnubilarea profundă cu pH >7,50, chirurgia facială fiind o indicație de elecție — Incorect: pH >7,50 și obnubilarea nu sunt indicații; chirurgia facială contraindică.\n\nContraindicațiile lipsesc, VNI înlocuind intubația la pacientul fără protecție a căii aeriene — Incorect: Protecția căii aeriene este o precondiție, nu un substitut.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 231, Cadranul 10.16 — VNI (pagini PDF: 49).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    231
   ],
   "pdfPages": [
    49
   ],
   "section": "Cadranul 10.16 — VNI"
  },
  "learningObjective": "Reținerea pragului pH <7,35 / H+ >44 în BPOC și a triadei de contraindicații (față, conștiență, protecție).",
  "optionRationales": [
   "BPOC cu pH <7,35, edemul cardiogen, neuromuscular/perete și OSA deschid cadranul.",
   "Chirurgia facială, conștiența scăzută și absența protecției sunt contraindicațiile.",
   "Imunocompromisul și post-extubarea hipercapnică sunt din textul adiacent.",
   "pH >7,50 și obnubilarea nu sunt indicații; chirurgia facială contraindică.",
   "Protecția căii aeriene este o precondiție, nu un substitut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă contraindicațiile (față, obnubilare) în indicații și inversează pragul de pH al BPOC."
  },
  "textbookExpressions": [
   "pH < 7,35",
   "Chirurgie facială"
  ]
 },
 {
  "id": "ati-adv-037",
  "topicId": "ati",
  "type": "CM",
  "stem": "Polineuropatia bolilor critice se deosebește de sindromul Guillain–Barré, potrivit capitolului, prin:",
  "options": [
   "Este o neuropatie axonală primară; studiile de conducere confirmă deteriorare axonală, iar proteinele LCR sunt normale sau minim crescute",
   "În Guillain–Barré, conducerea arată de regulă demielinizare, iar proteinele LCR sunt de obicei ridicate",
   "Polineuropatia critică este demielinizantă, cu proteine LCR foarte crescute, nervii cranieni fiind constant afectați",
   "Cauza este cunoscută, iar un tratament specific scurtează sevrajul la sub 48 de ore",
   "Nervii cranieni sunt afectați constant, LCR-ul foarte crescut confirmând diagnosticul de neuropatie critică"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este o neuropatie axonală primară; studiile de conducere confirmă deteriorare axonală, iar proteinele LCR sunt normale sau minim crescute — Corect: Patternul axonal și LCR normal/minim crescut sunt ale neuropatiei critice.\n\nÎn Guillain–Barré, conducerea arată de regulă demielinizare, iar proteinele LCR sunt de obicei ridicate — Corect: Demielinizarea și proteinorahia crescută definesc GBS în același paragraf.\n\nPolineuropatia critică este demielinizantă, cu proteine LCR foarte crescute, nervii cranieni fiind constant afectați — Incorect: Aceste trăsături sunt ale GBS, nu ale neuropatiei critice.\n\nCauza este cunoscută, iar un tratament specific scurtează sevrajul la sub 48 de ore — Incorect: Cauza nu este cunoscută și nu există tratament specific.\n\nNervii cranieni sunt afectați constant, LCR-ul foarte crescut confirmând diagnosticul de neuropatie critică — Incorect: Nervii cranieni sunt rar afectați; LCR foarte crescut ține de GBS.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 231, Polineuropatia bolilor critice (pagini PDF: 49).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    231
   ],
   "pdfPages": [
    49
   ],
   "section": "Polineuropatia bolilor critice"
  },
  "learningObjective": "Contrastarea axonului cu LCR aproape normal de demielinizarea GBS cu proteinorahie crescută.",
  "optionRationales": [
   "Patternul axonal și LCR normal/minim crescut sunt ale neuropatiei critice.",
   "Demielinizarea și proteinorahia crescută definesc GBS în același paragraf.",
   "Aceste trăsături sunt ale GBS, nu ale neuropatiei critice.",
   "Cauza nu este cunoscută și nu există tratament specific.",
   "Nervii cranieni sunt rar afectați; LCR foarte crescut ține de GBS."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică profilul GBS (demielinizare, LCR crescut, cranieni) asupra neuropatiei critice axonale."
  },
  "textbookExpressions": [
   "neuropatie axonală primară",
   "proteinele LCR"
  ]
 },
 {
  "id": "ati-adv-038",
  "topicId": "ati",
  "type": "CM",
  "stem": "Măsurile adjuncte în ARDS, dincolo de ventilația protectivă și de balanța hidrică negativă, includ:",
  "options": [
   "Pronația precoce și perioadele prelungite, față de supinație, asociază beneficii substanțiale de mortalitate, prin redistribuirea densităților dependente și reducerea șuntului",
   "Oxidul nitric inhalat ameliorează oxigenarea la „responderi”, dar nu s-a dovedit creșterea supraviețuirii; prostaciclinele inhalatorii au efecte similare și sunt mai ușor de administrat",
   "Steroizii în ARDS persistent pot îmbunătăți funcția pulmonară, dar nu par să îmbunătățească rezultatele; utilizarea rămâne controversată",
   "Mortalitatea a scăzut de la circa 60% la 20-40% în două decenii, rămânând însă foarte mare în sepsisul intra-abdominal față de ARDS „primar”",
   "Pronația tardivă scurtă este superioară celei precoce; NO inhalat reduce mortalitatea în toate studiile, steroizii fiind de rutină"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Pronația precoce și perioadele prelungite, față de supinație, asociază beneficii substanțiale de mortalitate, prin redistribuirea densităților dependente și reducerea șuntului — Corect: Redistribuția densităților și mortalitatea la pronație precoce/prelungită sunt din paragraf.\n\nOxidul nitric inhalat ameliorează oxigenarea la „responderi”, dar nu s-a dovedit creșterea supraviețuirii; prostaciclinele inhalatorii au efecte similare și sunt mai ușor de administrat — Corect: NO și prostaciclinele îmbunătățesc oxigenarea, nu supraviețuirea.\n\nSteroizii în ARDS persistent pot îmbunătăți funcția pulmonară, dar nu par să îmbunătățească rezultatele; utilizarea rămâne controversată — Corect: Disocierea funcție versus outcome a steroizilor este explicită.\n\nMortalitatea a scăzut de la circa 60% la 20-40% în două decenii, rămânând însă foarte mare în sepsisul intra-abdominal față de ARDS „primar” — Corect: 60%→20-40% și contrastul abdominal versus primar închid prognosticul.\n\nPronația tardivă scurtă este superioară celei precoce; NO inhalat reduce mortalitatea în toate studiile, steroizii fiind de rutină — Incorect: Beneficiul de mortalitate este al pronației precoce prelungite; NO și steroizii nu au dovezi clare de supraviețuire.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 233, ARDS — Pronație, NO, steroizi, prognostic (pagini PDF: 51).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    233
   ],
   "pdfPages": [
    51
   ],
   "section": "ARDS — Pronație, NO, steroizi, prognostic"
  },
  "learningObjective": "Integrarea pronației precoce prelungite, a NO fără beneficiu de supraviețuire, a steroizilor controversați și a scăderii mortalității 60%→20-40%.",
  "optionRationales": [
   "Redistribuția densităților și mortalitatea la pronație precoce/prelungită sunt din paragraf.",
   "NO și prostaciclinele îmbunătățesc oxigenarea, nu supraviețuirea.",
   "Disocierea funcție versus outcome a steroizilor este explicită.",
   "60%→20-40% și contrastul abdominal versus primar închid prognosticul.",
   "Beneficiul de mortalitate este al pronației precoce prelungite; NO și steroizii nu au dovezi clare de supraviețuire."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează timingul pronației și atribuie NO/steroizilor un beneficiu de mortalitate pe care textul îl neagă."
  },
  "textbookExpressions": [
   "poziţionarea în pronaţie",
   "20-40%"
  ]
 },
 {
  "id": "ati-adv-039",
  "topicId": "ati",
  "type": "CS",
  "stem": "Cel mai sensibil indicator clinic al creșterii dificultății respiratorii, potrivit capitolului, este:",
  "options": [
   "Creșterea frecvenței respiratorii",
   "O SpO2 normală la pacientul cu oxigen suplimentar",
   "Prezența constantă a pulsului paradoxal",
   "Un VEM crescut pe pulsoximetru",
   "Normalizarea PaCO2 în hipoventilație"
  ],
  "correct": [
   0
  ],
  "explanation": "Creșterea frecvenței respiratorii — Corect: Creșterea frecvenței respiratorii este numită cel mai sensibil indicator clinic.\n\nO SpO2 normală la pacientul cu oxigen suplimentar — Incorect: SpO2 normală pe oxigen nu exclude hipoventilația cu retenție de CO2.\n\nPrezența constantă a pulsului paradoxal — Incorect: Pulsul paradoxal este rareori prezent, nu este indicatorul cel mai sensibil.\n\nUn VEM crescut pe pulsoximetru — Incorect: VEM nu se măsoară cu pulsoximetrul.\n\nNormalizarea PaCO2 în hipoventilație — Incorect: În hipoventilație PaCO2 crește, nu se normalizează.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 225, Insuficiența respiratorie — Evaluare clinică (pagini PDF: 43).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    225
   ],
   "pdfPages": [
    43
   ],
   "section": "Insuficiența respiratorie — Evaluare clinică"
  },
  "learningObjective": "Reținerea tahipneei ca semnul cel mai sensibil, distinct de pulsul paradoxal (rar) și de falsa liniștire a SpO2.",
  "optionRationales": [
   "Creșterea frecvenței respiratorii este numită cel mai sensibil indicator clinic.",
   "SpO2 normală pe oxigen nu exclude hipoventilația cu retenție de CO2.",
   "Pulsul paradoxal este rareori prezent, nu este indicatorul cel mai sensibil.",
   "VEM nu se măsoară cu pulsoximetrul.",
   "În hipoventilație PaCO2 crește, nu se normalizează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sunt limite reale ale pulsoximetriei și ale pulsului paradoxal, ușor de confunda cu „cel mai sensibil” semnal."
  },
  "textbookExpressions": [
   "Cel mai sensibil indicator clinic",
   "frecvenţei respiratorii"
  ]
 },
 {
  "id": "ati-adv-040",
  "topicId": "ati",
  "type": "CS",
  "stem": "Indicele de respirație rapidă superficială (frecvență/volum curent), ca predictor al extubării, este interpretat astfel:",
  "options": [
   "Un scor sub 100 este un predictor relativ bun al reușitei extubării, întâlnit la pacientul care respiră ușor, confortabil, cu volum curent adecvat, cu condiția să fie îndeplinite și celelalte precondiții",
   "Un scor peste 400 permite extubarea fără a verifica tusea sau protecția căii aeriene",
   "Valoarea 100 contraindică orice tentativă de respirație spontană",
   "Indicele înlocuiește gazele sanguine și mecanica pulmonară",
   "Se calculează doar la pacientul obnubilat, fără cale aeriană protejată"
  ],
  "correct": [
   0
  ],
  "explanation": "Un scor sub 100 este un predictor relativ bun al reușitei extubării, întâlnit la pacientul care respiră ușor, confortabil, cu volum curent adecvat, cu condiția să fie îndeplinite și celelalte precondiții — Corect: <100, respirația ușoară cu Vt adecvat și condiționarea de celelalte precondiții sunt fraza din text.\n\nUn scor peste 400 permite extubarea fără a verifica tusea sau protecția căii aeriene — Incorect: Un scor mare sugerează respirație rapidă superficială, nu succes; tusea și protecția rămân necesare.\n\nValoarea 100 contraindică orice tentativă de respirație spontană — Incorect: 100 nu contraindică tentativa de respirație spontană.\n\nIndicele înlocuiește gazele sanguine și mecanica pulmonară — Incorect: Gazele și mecanica rămân criterii obiective paralele.\n\nSe calculează doar la pacientul obnubilat, fără cale aeriană protejată — Incorect: Obnubilatul fără protecție nu este candidatul de extubare pe baza indicelui.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 232, Extubarea — Indicele de respirație rapidă superficială (pagini PDF: 50).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    232
   ],
   "pdfPages": [
    50
   ],
   "section": "Extubarea — Indicele de respirație rapidă superficială"
  },
  "learningObjective": "Reținerea pragului <100 ca predictor condiționat, nu ca substitut al protecției căii aeriene.",
  "optionRationales": [
   "<100, respirația ușoară cu Vt adecvat și condiționarea de celelalte precondiții sunt fraza din text.",
   "Un scor mare sugerează respirație rapidă superficială, nu succes; tusea și protecția rămân necesare.",
   "100 nu contraindică tentativa de respirație spontană.",
   "Gazele și mecanica rămân criterii obiective paralele.",
   "Obnubilatul fără protecție nu este candidatul de extubare pe baza indicelui."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii ridică indicele <100 la rang de criteriu suficient sau inversat, contrar condiționării explicite din text."
  },
  "textbookExpressions": [
   "mai mic de 100",
   "predictor relativ bun"
  ]
 },
 {
  "id": "ati-adv-041",
  "topicId": "ati",
  "type": "CM",
  "stem": "Capnografia, în utilizările din capitol, include:",
  "options": [
   "Confirmarea intubației traheale",
   "Monitorizarea continuă a PCO2 end-tidal, care aproximează PaCO2 la pacienții normali și evaluează eficacitatea ventilației",
   "Detectarea problemelor acute ale căilor aeriene (canulă/traheostomă blocate sau dislocate), esențială doar la pacientul stabil, nu la canula blocată",
   "Înlocuirea gazelor arteriale la pacientul cu BPOC, bulele de aer neinfluențând PCO2",
   "Confirmarea doar a poziției gastrice a sondei, fără rol în intubație"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Confirmarea intubației traheale — Corect: Confirmarea intubației deschide lista de utilizări.\n\nMonitorizarea continuă a PCO2 end-tidal, care aproximează PaCO2 la pacienții normali și evaluează eficacitatea ventilației — Corect: End-tidal ca aproximare a PaCO2 la normali este a doua utilizare.\n\nDetectarea problemelor acute ale căilor aeriene (canulă/traheostomă blocate sau dislocate), esențială doar la pacientul stabil, nu la canula blocată — Incorect: Detectarea canulei blocate/dislocate, inclusiv în transport, este o utilizare reală, nu una rezervată pacientului stabil.\n\nÎnlocuirea gazelor arteriale la pacientul cu BPOC, bulele de aer neinfluențând PCO2 — Incorect: Gazele arteriale rămân necesare; bulele scad PCO2-ul probei.\n\nConfirmarea doar a poziției gastrice a sondei, fără rol în intubație — Incorect: Capnografia confirmă intubația traheală, nu poziția gastrică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 225, Capnografia (pagini PDF: 43).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    225
   ],
   "pdfPages": [
    43
   ],
   "section": "Capnografia"
  },
  "learningObjective": "Reținerea perechii intubație / end-tidal, distinct de substituirea gazelor arteriale.",
  "optionRationales": [
   "Confirmarea intubației deschide lista de utilizări.",
   "End-tidal ca aproximare a PaCO2 la normali este a doua utilizare.",
   "Detectarea canulei blocate/dislocate, inclusiv în transport, este o utilizare reală, nu una rezervată pacientului stabil.",
   "Gazele arteriale rămân necesare; bulele scad PCO2-ul probei.",
   "Capnografia confirmă intubația traheală, nu poziția gastrică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută capnografia pe sondă gastrică, o rezervă pacientului stabil și o transformă într-un substitut al gazelor."
  },
  "textbookExpressions": [
   "confirmarea intubaţiei traheale",
   "end-tidal PCO2"
  ]
 },
 {
  "id": "ati-adv-042",
  "topicId": "ati",
  "type": "CM",
  "stem": "Pneumotoracele în tensiune la pacientul ventilat, în semnele din capitol, se recunoaște prin:",
  "options": [
   "Dezvoltarea sau agravarea hipoxiei, hipercapniei, detresei respiratorii și o creștere inexplicabilă a presiunii în căile aeriene",
   "Hipotensiune și tahicardie, uneori cu creșterea PVC",
   "Examen: expansiune inegală, deplasare mediastinală de partea pneumotoracelui (trahee deviată, șoc apexian deplasat) și hipersonoritate a unui hemitorace",
   "Murmur vezicular intensificat de partea leziunii, mediastinul deplasându-se contralateral",
   "TA crescută cu bradicardie, presiunea în căile aeriene scăzând inexplicabil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Dezvoltarea sau agravarea hipoxiei, hipercapniei, detresei respiratorii și o creștere inexplicabilă a presiunii în căile aeriene — Corect: Hipoxie, hipercapnie, detresă și presiune de cale inexplicabil crescută deschid semnele.\n\nHipotensiune și tahicardie, uneori cu creșterea PVC — Corect: Hipotensiunea, tahicardia și PVC-ul crescut sunt hemodinamica.\n\nExamen: expansiune inegală, deplasare mediastinală de partea pneumotoracelui (trahee deviată, șoc apexian deplasat) și hipersonoritate a unui hemitorace — Corect: Expansiunea inegală, deplasarea mediastinală și hipersonoritatea sunt ale examenului.\n\nMurmur vezicular intensificat de partea leziunii, mediastinul deplasându-se contralateral — Incorect: Textul plasează deplasarea mediastinală de partea pneumotoracelui; murmurul este frecvent diminuat, nu intensificat.\n\nTA crescută cu bradicardie, presiunea în căile aeriene scăzând inexplicabil — Incorect: Hipotensiune cu tahicardie, nu HTA cu bradicardie; presiunea de cale crește, nu scade.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 228, Complicațiile ventilației — Pneumotoracele în tensiune (pagini PDF: 46).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    228
   ],
   "pdfPages": [
    46
   ],
   "section": "Complicațiile ventilației — Pneumotoracele în tensiune"
  },
  "learningObjective": "Asocierea hipoxie/presiune de cale crescută, a hipotensiunii cu PVC crescută și a deplasării mediastinale ipsilaterale descrise în text.",
  "optionRationales": [
   "Hipoxie, hipercapnie, detresă și presiune de cale inexplicabil crescută deschid semnele.",
   "Hipotensiunea, tahicardia și PVC-ul crescut sunt hemodinamica.",
   "Expansiunea inegală, deplasarea mediastinală și hipersonoritatea sunt ale examenului.",
   "Textul plasează deplasarea mediastinală de partea pneumotoracelui; murmurul este frecvent diminuat, nu intensificat.",
   "Hipotensiune cu tahicardie, nu HTA cu bradicardie; presiunea de cale crește, nu scade."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează deplasarea mediastinală și transformă hipotensiunea/tahicardia în HTA/bradicardie."
  },
  "textbookExpressions": [
   "pneumotorace în tensiune",
   "creştere inexplicabilă a presiunii"
  ]
 },
 {
  "id": "ati-adv-043",
  "topicId": "ati",
  "type": "CM",
  "stem": "Efectele cardiovasculare și leziunile pulmonare asociate ventilației cu presiune pozitivă, potrivit capitolului, includ:",
  "options": [
   "Presiunea pozitivă împiedică întoarcerea venoasă și destinde alveolele, „întinzând” capilarele pulmonare și crescând rezistența vasculară pulmonară; ambele mecanisme pot scădea debitul cardiac",
   "Tradițional, colapsul alveolar periferic era prevenit cu volume curente de 10-12 ml/kg, dar presiunile înalte și supradistensia, plus deschiderea/închiderea repetată a căilor distale, pot distruge membrana alveolo-capilară",
   "Creșterea permeabilității microvasculare și eliberarea de mediatori produc leziuni pulmonare asociate ventilatorului (barotraumă și volutraumă), cu pneumomediastin, emfizem subcutanat, pneumotorace și pneumoperitoneu",
   "Riscul de pneumotorace este crescut în pneumonia necrotizantă, emfizem, astm sau fracturi costale",
   "Volumele de 10-12 ml/kg protejează membrana alveolo-capilară, barotrauma fiind imposibilă la pacientul ventilat"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Presiunea pozitivă împiedică întoarcerea venoasă și destinde alveolele, „întinzând” capilarele pulmonare și crescând rezistența vasculară pulmonară; ambele mecanisme pot scădea debitul cardiac — Corect: Întoarcerea venoasă, întinderea capilarelor și PVR cu scăderea DC deschid hemodinamica.\n\nTradițional, colapsul alveolar periferic era prevenit cu volume curente de 10-12 ml/kg, dar presiunile înalte și supradistensia, plus deschiderea/închiderea repetată a căilor distale, pot distruge membrana alveolo-capilară — Corect: 10-12 ml/kg și distrugerea membranei prin presiune/ciclare sunt ale VILI.\n\nCreșterea permeabilității microvasculare și eliberarea de mediatori produc leziuni pulmonare asociate ventilatorului (barotraumă și volutraumă), cu pneumomediastin, emfizem subcutanat, pneumotorace și pneumoperitoneu — Corect: Permeabilitatea, mediatorii și cele patru localizări de aer extra-alveolar definesc baro/volutrauma.\n\nRiscul de pneumotorace este crescut în pneumonia necrotizantă, emfizem, astm sau fracturi costale — Corect: Pneumonia necrotizantă, emfizemul, astmul și fracturile costale sunt grupurile cu risc.\n\nVolumele de 10-12 ml/kg protejează membrana alveolo-capilară, barotrauma fiind imposibilă la pacientul ventilat — Incorect: 10-12 ml/kg este tocmai strategia tradițională incriminată, nu una protectivă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 228, Complicații cardiovasculare și respiratorii ale VMI (pagini PDF: 46).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    228
   ],
   "pdfPages": [
    46
   ],
   "section": "Complicații cardiovasculare și respiratorii ale VMI"
  },
  "learningObjective": "Integrarea scăderii DC prin PVR/întoarcere, a Vt tradițional 10-12 ml/kg ca mecanism de VILI și a spectrului baro/volutraumă.",
  "optionRationales": [
   "Întoarcerea venoasă, întinderea capilarelor și PVR cu scăderea DC deschid hemodinamica.",
   "10-12 ml/kg și distrugerea membranei prin presiune/ciclare sunt ale VILI.",
   "Permeabilitatea, mediatorii și cele patru localizări de aer extra-alveolar definesc baro/volutrauma.",
   "Pneumonia necrotizantă, emfizemul, astmul și fracturile costale sunt grupurile cu risc.",
   "10-12 ml/kg este tocmai strategia tradițională incriminată, nu una protectivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul transformă Vt-ul tradițional 10-12 ml/kg, cauza VILI, într-o strategie protectivă."
  },
  "textbookExpressions": [
   "10-12 ml/kg",
   "barotraumă"
  ]
 },
 {
  "id": "ati-adv-044",
  "topicId": "ati",
  "type": "CM",
  "stem": "Ventilația cu suport de presiune (PSV), în parametrii din capitol, se caracterizează prin:",
  "options": [
   "Respirațiile spontane sunt amplificate cu un nivel prestabilit de presiune pozitivă, de obicei 5-20 cmH2O, declanșat de efortul pacientului",
   "Volumul curent este determinat de presiunea setată, de efortul pacientului și de mecanica pulmonară; presiunea de suport se poate reduce progresiv pe măsură ce starea se îmbunătățește",
   "PSV impune absența efortului spontan, volumul curent fiind fixat independent de mecanică, ca în VMC cu volum controlat",
   "Nivelul uzual este 40-60 cmH2O, fără posibilitate de scădere progresivă",
   "Declanșarea este independentă de efortul pacientului, PSV înlocuind PEEP-ul de 5-8 cmH2O"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Respirațiile spontane sunt amplificate cu un nivel prestabilit de presiune pozitivă, de obicei 5-20 cmH2O, declanșat de efortul pacientului — Corect: 5-20 cmH2O și declanșarea de efortul spontan sunt definiția.\n\nVolumul curent este determinat de presiunea setată, de efortul pacientului și de mecanica pulmonară; presiunea de suport se poate reduce progresiv pe măsură ce starea se îmbunătățește — Corect: Determinanții Vt și reducerea progresivă sunt conduita de sevraj.\n\nPSV impune absența efortului spontan, volumul curent fiind fixat independent de mecanică, ca în VMC cu volum controlat — Incorect: Absența efortului și Vt fix țin de VMC, nu de PSV.\n\nNivelul uzual este 40-60 cmH2O, fără posibilitate de scădere progresivă — Incorect: 40-60 cmH2O depășește fereastra citată.\n\nDeclanșarea este independentă de efortul pacientului, PSV înlocuind PEEP-ul de 5-8 cmH2O — Incorect: PSV este declanșată de efort; PEEP-ul 5-8 cmH2O este o setare separată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 229, Ventilația cu suport de presiune (pagini PDF: 47).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    229
   ],
   "pdfPages": [
    47
   ],
   "section": "Ventilația cu suport de presiune"
  },
  "learningObjective": "Reținerea ferestrei 5-20 cmH2O declanșate de efort și a Vt-ului rezultat din presiune × efort × mecanică.",
  "optionRationales": [
   "5-20 cmH2O și declanșarea de efortul spontan sunt definiția.",
   "Determinanții Vt și reducerea progresivă sunt conduita de sevraj.",
   "Absența efortului și Vt fix țin de VMC, nu de PSV.",
   "40-60 cmH2O depășește fereastra citată.",
   "PSV este declanșată de efort; PEEP-ul 5-8 cmH2O este o setare separată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă PSV (efort-declanșat, 5-20 cmH2O) cu VMC cu volum controlat sau cu PEEP-ul de 5-8 cmH2O."
  },
  "textbookExpressions": [
   "5-20 cm H20",
   "suport de presiune"
  ]
 },
 {
  "id": "ati-adv-045",
  "topicId": "ati",
  "type": "CM",
  "stem": "Schimburile gazoase extracorporeale, în distincția din capitol, includ:",
  "options": [
   "ECMO veno-venos: sângele este extras prin canulă groasă cu vârful în VCI, trece prin oxigenator cu membrană și se întoarce în VCS, complet oxigenat și cu CO2 eliminat",
   "ECCO2-R folosește debite mai mici de sânge, îndepărtând eficient CO2, dar oxigenarea este mai puțin eficientă",
   "Ambele tehnici au fost folosite pentru a reduce nevoile de ventilație și astfel leziunile pulmonare induse de ventilator",
   "ECCO2-R este mai ușor de realizat decât oxigenarea extracorporeală completă",
   "ECMO veno-venos întoarce sângele în artera femurală, fără a elimina CO2"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "ECMO veno-venos: sângele este extras prin canulă groasă cu vârful în VCI, trece prin oxigenator cu membrană și se întoarce în VCS, complet oxigenat și cu CO2 eliminat — Corect: Traiectul VCI – oxigenator – VCS este descrierea figurii 10.28.\n\nECCO2-R folosește debite mai mici de sânge, îndepărtând eficient CO2, dar oxigenarea este mai puțin eficientă — Corect: Debitele mici, eficiența pe CO2 și oxigenarea inferioară definesc ECCO2-R.\n\nAmbele tehnici au fost folosite pentru a reduce nevoile de ventilație și astfel leziunile pulmonare induse de ventilator — Corect: Reducerea ventilației și a VILI este scopul comun.\n\nECCO2-R este mai ușor de realizat decât oxigenarea extracorporeală completă — Corect: Ușurința relativă a ECCO2-R față de oxigenarea extracorporeală completă este explicită.\n\nECMO veno-venos întoarce sângele în artera femurală, fără a elimina CO2 — Incorect: Întoarcerea este venoasă în VCS, nu arterială femorală; CO2 este eliminat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 230, ECMO veno-venos; ECCO2-R (pagini PDF: 48).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    230
   ],
   "pdfPages": [
    48
   ],
   "section": "ECMO veno-venos; ECCO2-R"
  },
  "learningObjective": "Contrastarea circuitului VCI→VCS al ECMO VV de debitele mici și oxigenarea slabă ale ECCO2-R, plus scopul de a reduce VILI.",
  "optionRationales": [
   "Traiectul VCI – oxigenator – VCS este descrierea figurii 10.28.",
   "Debitele mici, eficiența pe CO2 și oxigenarea inferioară definesc ECCO2-R.",
   "Reducerea ventilației și a VILI este scopul comun.",
   "Ușurința relativă a ECCO2-R față de oxigenarea extracorporeală completă este explicită.",
   "Întoarcerea este venoasă în VCS, nu arterială femorală; CO2 este eliminat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul mută întoarcerea din VCS în artera femurală și neagă eliminarea CO2."
  },
  "textbookExpressions": [
   "oxigenator cu membrană",
   "debite mai mici de sânge"
  ]
 },
 {
  "id": "ati-adv-046",
  "topicId": "ati",
  "type": "CM",
  "stem": "Cauzele directe frecvente și mai puțin frecvente de ARDS, conform Cadranului 10.17, includ:",
  "options": [
   "Frecvente directe: pneumonie și aspirația conținutului gastric",
   "Mai puțin frecvente directe: contuzie pulmonară, leziuni prin explozie, embolie grăsoasă, înec, leziuni inhalatorii, leziune de reperfuzie după transplant/embolectomie, embolie cu lichid amniotic",
   "Indirecte frecvente: sepsis; altele: traumatism sever cu șoc și transfuzii multiple, bypass cardiopulmonar, supradozaj (heroină, barbiturice), pancreatită acută",
   "Cauza directă dominantă este pancreatita, pneumonia fiind o cauză indirectă rară",
   "Embolia cu lichid amniotic și aspirația gastrică sunt clasificate ca leziuni indirecte, sepsisul ca leziune alveolară directă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Frecvente directe: pneumonie și aspirația conținutului gastric — Corect: Pneumonia și aspirația gastrică deschid cauzele directe frecvente.\n\nMai puțin frecvente directe: contuzie pulmonară, leziuni prin explozie, embolie grăsoasă, înec, leziuni inhalatorii, leziune de reperfuzie după transplant/embolectomie, embolie cu lichid amniotic — Corect: Contuzia, explozia, grăsimea, înecul, inhalarea, reperfuzia și amnioticul sunt directe mai rare.\n\nIndirecte frecvente: sepsis; altele: traumatism sever cu șoc și transfuzii multiple, bypass cardiopulmonar, supradozaj (heroină, barbiturice), pancreatită acută — Corect: Sepsisul ca indirect frecvent și lista (traumatism, bypass, droguri, pancreatită) închid cadranul.\n\nCauza directă dominantă este pancreatita, pneumonia fiind o cauză indirectă rară — Incorect: Pancreatita este indirectă; pneumonia este directă frecventă.\n\nEmbolia cu lichid amniotic și aspirația gastrică sunt clasificate ca leziuni indirecte, sepsisul ca leziune alveolară directă — Incorect: Aspirația este directă frecventă; sepsisul este indirect.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 10, p. 232, Cadranul 10.17 — Cauze de ARDS (pagini PDF: 50).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 10,
   "printedPages": [
    232
   ],
   "pdfPages": [
    50
   ],
   "section": "Cadranul 10.17 — Cauze de ARDS"
  },
  "learningObjective": "Perecherea pneumonie/aspirație ca directe frecvente de lista rară (grăsime, amniotic, înec) și de sepsisul indirect.",
  "optionRationales": [
   "Pneumonia și aspirația gastrică deschid cauzele directe frecvente.",
   "Contuzia, explozia, grăsimea, înecul, inhalarea, reperfuzia și amnioticul sunt directe mai rare.",
   "Sepsisul ca indirect frecvent și lista (traumatism, bypass, droguri, pancreatită) închid cadranul.",
   "Pancreatita este indirectă; pneumonia este directă frecventă.",
   "Aspirația este directă frecventă; sepsisul este indirect."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută pneumonia (directă) cu pancreatita/sepsisul (indirecte), cele două coloane ale aceluiași cadran."
  },
  "textbookExpressions": [
   "Pneumonie",
   "Aspiraţia conţinutului gastric"
  ]
 }
];
