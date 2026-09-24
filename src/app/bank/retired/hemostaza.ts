import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_HEMOSTAZA:Question[]=[
 {
  "id": "hemostaza-adv-001",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații despre hemofilia A și boala von Willebrand sunt adevărate?",
  "options": [
   "Hemofilia A se transmite X-linkat și afectează doar pacienții de sex masculin",
   "Boala von Willebrand se transmite autosomal-dominant și afectează ambele sexe",
   "În hemofilia A, sângerările tipice sunt articulare și intramusculare, pe când în boala von Willebrand predomină sângerarea muco-cutanată",
   "În ambele boli, aPTT este tipic prelungit, iar PT este normal",
   "Funcția trombocitară este anormală în hemofilia A și normală în boala von Willebrand"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Hemofilia A se transmite X-linkat și afectează doar pacienții de sex masculin — Corect: Transmiterea X-linkată și afectarea doar a sexului masculin sunt explicite pentru hemofilia A.\n\nBoala von Willebrand se transmite autosomal-dominant și afectează ambele sexe — Corect: Transmiterea autosomal-dominantă și afectarea ambelor sexe sunt explicite pentru vWD.\n\nÎn hemofilia A, sângerările tipice sunt articulare și intramusculare, pe când în boala von Willebrand predomină sângerarea muco-cutanată — Corect: Localizarea articulară/intramusculară versus muco-cutanată este tabelată.\n\nÎn ambele boli, aPTT este tipic prelungit, iar PT este normal — Corect: În ambele, aPTT este prelungit și PT este normal.\n\nFuncția trombocitară este anormală în hemofilia A și normală în boala von Willebrand — Incorect: Funcția trombocitară este normală în hemofilia A și anormală în vWD, nu invers.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 39, Tulburări congenitale ale hemostazei — Hemofilia A și boala von Willebrand (pagini PDF: 13).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    39
   ],
   "pdfPages": [
    13
   ],
   "section": "Tulburări congenitale ale hemostazei — Hemofilia A și boala von Willebrand"
  },
  "learningObjective": "Diferențierea transmiterii, a localizării sângerării și a profilului de laborator dintre hemofilia A și boala von Willebrand.",
  "optionRationales": [
   "Transmiterea X-linkată și afectarea doar a sexului masculin sunt explicite pentru hemofilia A.",
   "Transmiterea autosomal-dominantă și afectarea ambelor sexe sunt explicite pentru vWD.",
   "Localizarea articulară/intramusculară versus muco-cutanată este tabelată.",
   "În ambele, aPTT este prelungit și PT este normal.",
   "Funcția trombocitară este normală în hemofilia A și anormală în vWD, nu invers."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul final inversează profilul funcției trombocitare între cele două boli."
  },
  "textbookExpressions": [
   "X-linkat",
   "muco-cutanat"
  ]
 },
 {
  "id": "hemostaza-adv-002",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la tulburările dobândite ale hemostazei și la medicamentele care le induc:",
  "options": [
   "Bolile hepatice avansate, terapia anticoagulantă, trombocitopenia dobândită și uremia sunt cauze dobândite enumerate",
   "Aspirina și clopidogrelul provoacă inhibarea ireversibilă a funcției plachetare",
   "Inhibitorii direcți ai trombinei, precum argatrobanul, sunt utilizați în special la pacienții cu trombocitopenie indusă de heparină",
   "Warfarina acționează prin potențarea antitrombinei III, la fel ca heparina nefracționată",
   "Medicația fără prescripție, precum suplimentele din plante, nu poate altera hemostaza"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Bolile hepatice avansate, terapia anticoagulantă, trombocitopenia dobândită și uremia sunt cauze dobândite enumerate — Corect: Lista cauzelor dobândite include explicit aceste entități.\n\nAspirina și clopidogrelul provoacă inhibarea ireversibilă a funcției plachetare — Corect: Inhibarea ireversibilă plachetară de către aspirină și clopidogrel este menționată.\n\nInhibitorii direcți ai trombinei, precum argatrobanul, sunt utilizați în special la pacienții cu trombocitopenie indusă de heparină — Corect: Argatrobanul/bivalirudina sunt indicate în special în HIT.\n\nWarfarina acționează prin potențarea antitrombinei III, la fel ca heparina nefracționată — Incorect: Warfarina este antagonist al vitaminei K; heparina acționează prin antitrombină.\n\nMedicația fără prescripție, precum suplimentele din plante, nu poate altera hemostaza — Incorect: Suplimentele din plante sunt listate explicit ca o cauză posibilă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 40, Tulburări dobândite ale hemostazei; Anticoagulante și antiplachetare (pagini PDF: 14).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    40
   ],
   "pdfPages": [
    14
   ],
   "section": "Tulburări dobândite ale hemostazei; Anticoagulante și antiplachetare"
  },
  "learningObjective": "Recunoașterea cauzelor dobândite și a profilului de acțiune al aspirinei, clopidogrelului și al inhibitorilor direcți ai trombinei.",
  "optionRationales": [
   "Lista cauzelor dobândite include explicit aceste entități.",
   "Inhibarea ireversibilă plachetară de către aspirină și clopidogrel este menționată.",
   "Argatrobanul/bivalirudina sunt indicate în special în HIT.",
   "Warfarina este antagonist al vitaminei K; heparina acționează prin antitrombină.",
   "Suplimentele din plante sunt listate explicit ca o cauză posibilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă mecanismul warfarinei cu al heparinei și exclud greșit o cauză listată (plantele)."
  },
  "textbookExpressions": [
   "inhibarea ireversibilă",
   "trombocitopenie indusă de heparină"
  ]
 },
 {
  "id": "hemostaza-adv-003",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Sunt adevărate următoarele afirmații despre hemoragia masivă și resuscitarea de control lezional:",
  "options": [
   "Hemoragia masivă poate fi definită prin necesitatea a cel puțin 10 unități MER în 24 de ore sau ≥4 unități pe oră",
   "Raportul optim plasma:trombocite:MER în protocoalele de transfuzie masivă este 1:1:1",
   "Calciu suplimentar trebuie administrat la fiecare 2 unități de MER",
   "Resuscitarea volemică agresivă precoce cu cristaloide este preferată față de hipotensiunea permisivă",
   "Coagulopatia traumatică acută rezultă în principal din consumul exagerat de factori de coagulare circulanți, nu din perfuzia tisulară inadecvată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hemoragia masivă poate fi definită prin necesitatea a cel puțin 10 unități MER în 24 de ore sau ≥4 unități pe oră — Corect: Pragurile de 10 U/24 h și ≥4 U/oră sunt explicite.\n\nRaportul optim plasma:trombocite:MER în protocoalele de transfuzie masivă este 1:1:1 — Corect: Raportul 1:1:1 este standardul citat.\n\nCalciu suplimentar trebuie administrat la fiecare 2 unități de MER — Corect: Calciul la fiecare 2 U MER este recomandat.\n\nResuscitarea volemică agresivă precoce cu cristaloide este preferată față de hipotensiunea permisivă — Incorect: Textul promovează hipotensiunea permisivă și evitarea hemodiluției cu cristaloide.\n\nCoagulopatia traumatică acută rezultă în principal din consumul exagerat de factori de coagulare circulanți, nu din perfuzia tisulară inadecvată — Incorect: CAT rezultă din perfuzia tisulară inadecvată, nu din consumul exagerat de factori.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 40, 41, Hemoragia masivă și resuscitarea de control lezional (pagini PDF: 14, 15).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    40,
    41
   ],
   "pdfPages": [
    14,
    15
   ],
   "section": "Hemoragia masivă și resuscitarea de control lezional"
  },
  "learningObjective": "Aplicarea definițiilor de hemoragie masivă, a raportului 1:1:1 și a principiului hipotensiunii permisive.",
  "optionRationales": [
   "Pragurile de 10 U/24 h și ≥4 U/oră sunt explicite.",
   "Raportul 1:1:1 este standardul citat.",
   "Calciul la fiecare 2 U MER este recomandat.",
   "Textul promovează hipotensiunea permisivă și evitarea hemodiluției cu cristaloide.",
   "CAT rezultă din perfuzia tisulară inadecvată, nu din consumul exagerat de factori."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează două principii centrale ale RCL (hipotensiune permisivă și mecanismul CAT)."
  },
  "textbookExpressions": [
   "1:1:1",
   "hipotensiune permisivă"
  ]
 },
 {
  "id": "hemostaza-adv-004",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Chirurgia de control lezional:",
  "options": [
   "Implică o intervenție inițială abreviată menită să oprească sângerarea și contaminarea bacteriană în desfășurare",
   "După resuscitare și stabilizare în terapie intensivă urmează proceduri definitive în serie",
   "Este standardul actual de îngrijire pentru leziuni severe abdominale, toracice, pelvine sau ale extremităților",
   "Scopul intervenției inițiale este reconstrucția anatomică completă într-o singură etapă",
   "Hipotermia și hemodiluția trebuie acceptate ca inevitabile în faza inițială de resuscitare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Implică o intervenție inițială abreviată menită să oprească sângerarea și contaminarea bacteriană în desfășurare — Corect: Intervenția abreviată pentru stoparea sângerării/contaminării este definiția.\n\nDupă resuscitare și stabilizare în terapie intensivă urmează proceduri definitive în serie — Corect: Procedurile definitive urmează după stabilizare în UTI.\n\nEste standardul actual de îngrijire pentru leziuni severe abdominale, toracice, pelvine sau ale extremităților — Corect: Standardul pentru leziuni severe multi-site este explicit.\n\nScopul intervenției inițiale este reconstrucția anatomică completă într-o singură etapă — Incorect: Reconstrucția completă într-o etapă contrazice principiul abrevierei.\n\nHipotermia și hemodiluția trebuie acceptate ca inevitabile în faza inițială de resuscitare — Incorect: Strategiile RCL urmăresc evitarea hipotermiei și a hemodiluției.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 41, Chirurgia de control lezional (pagini PDF: 15).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    41
   ],
   "pdfPages": [
    15
   ],
   "section": "Chirurgia de control lezional"
  },
  "learningObjective": "Diferențierea intervenției abreviate de control lezional de chirurgia definitivă într-o singură etapă.",
  "optionRationales": [
   "Intervenția abreviată pentru stoparea sângerării/contaminării este definiția.",
   "Procedurile definitive urmează după stabilizare în UTI.",
   "Standardul pentru leziuni severe multi-site este explicit.",
   "Reconstrucția completă într-o etapă contrazice principiul abrevierei.",
   "Strategiile RCL urmăresc evitarea hipotermiei și a hemodiluției."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii restabilesc greșit paradigma chirurgiei definitive imediate și acceptă complicațiile pe care RCL le evită."
  },
  "textbookExpressions": [
   "intervenție inițială abreviată",
   "hipotermiei"
  ]
 },
 {
  "id": "hemostaza-adv-005",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Indicați afirmațiile corecte privind transfuzia de masă trombocitară:",
  "options": [
   "Este indicată la sângerări clinice asociate cu trombocitopenie absolută sau cu disfuncție plachetară",
   "Pacienții cu funcție trombocitară normală sângerează de obicei abia sub 30.000–50.000 trombocite/µL",
   "La o transfuzie obișnuită de 6 unități se așteaptă o creștere de aproximativ 50.000–100.000 trombocite/µL",
   "Pacienții cu disfuncție trombocitară sângerează doar când numărul de trombocite scade sub 10.000/µL",
   "Suspensiile trombocitare nu conțin plasma și nu pot conține eritrocite sau leucocite"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este indicată la sângerări clinice asociate cu trombocitopenie absolută sau cu disfuncție plachetară — Corect: Indicația pe sângerare plus trombocitopenie/disfuncție este explicită.\n\nPacienții cu funcție trombocitară normală sângerează de obicei abia sub 30.000–50.000 trombocite/µL — Corect: Pragul 30.000–50.000 la funcție normală este citat.\n\nLa o transfuzie obișnuită de 6 unități se așteaptă o creștere de aproximativ 50.000–100.000 trombocite/µL — Corect: Creșterea de 50.000–100.000 după 6 unități este așteptarea tipică.\n\nPacienții cu disfuncție trombocitară sângerează doar când numărul de trombocite scade sub 10.000/µL — Incorect: Cu disfuncție, sângerarea apare adesea la număr normal de trombocite, nu doar sub 10.000.\n\nSuspensiile trombocitare nu conțin plasma și nu pot conține eritrocite sau leucocite — Incorect: Suspensiile conțin o cantitate de plasma și câteva eritrocite sau leucocite.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 44, Transfuzia de masă trombocitară (pagini PDF: 18).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    44
   ],
   "pdfPages": [
    18
   ],
   "section": "Transfuzia de masă trombocitară"
  },
  "learningObjective": "Aplicarea pragurilor de sângerare și a răspunsului cantitativ așteptat după transfuzia de trombocite.",
  "optionRationales": [
   "Indicația pe sângerare plus trombocitopenie/disfuncție este explicită.",
   "Pragul 30.000–50.000 la funcție normală este citat.",
   "Creșterea de 50.000–100.000 după 6 unități este așteptarea tipică.",
   "Cu disfuncție, sângerarea apare adesea la număr normal de trombocite, nu doar sub 10.000.",
   "Suspensiile conțin o cantitate de plasma și câteva eritrocite sau leucocite."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează relația disfuncție–prag numeric și compoziția suspensiei trombocitare."
  },
  "textbookExpressions": [
   "30.000-50.000",
   "50.000-100.000"
  ]
 },
 {
  "id": "hemostaza-adv-006",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații despre triada letală din trauma hemoragică sunt adevărate?",
  "options": [
   "Triada letală constă în acidoză, hipotermie și coagulopatie",
   "Hipotermia este definită ca temperatură centrală sub 35°C",
   "Hipotermia alterează funcția trombocitară, inhibă factorii de coagulare și activează inadecvat cascada coagulării",
   "Triada letală include hipernatremia ca al patrulea element constitutiv",
   "Încălzirea fluidelor și a produselor sanguine înainte de transfuzie nu influențează temperatura corporală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Triada letală constă în acidoză, hipotermie și coagulopatie — Corect: Cele trei componente sunt enumerate și ilustrate.\n\nHipotermia este definită ca temperatură centrală sub 35°C — Corect: Pragul <35°C este definiția citată.\n\nHipotermia alterează funcția trombocitară, inhibă factorii de coagulare și activează inadecvat cascada coagulării — Corect: Efectele asupra trombocitelor și a factorilor de coagulare sunt explicite.\n\nTriada letală include hipernatremia ca al patrulea element constitutiv — Incorect: Triada are trei elemente; hipernatremia nu face parte din ea.\n\nÎncălzirea fluidelor și a produselor sanguine înainte de transfuzie nu influențează temperatura corporală — Incorect: Încălzirea fluidelor este o strategie importantă împotriva hipotermiei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 44, Complicații ale transfuziei — Triada letală (pagini PDF: 18).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    44
   ],
   "pdfPages": [
    18
   ],
   "section": "Complicații ale transfuziei — Triada letală"
  },
  "learningObjective": "Recunoașterea celor trei componente ale triadei letale și a efectelor hipotermiei asupra hemostazei.",
  "optionRationales": [
   "Cele trei componente sunt enumerate și ilustrate.",
   "Pragul <35°C este definiția citată.",
   "Efectele asupra trombocitelor și a factorilor de coagulare sunt explicite.",
   "Triada are trei elemente; hipernatremia nu face parte din ea.",
   "Încălzirea fluidelor este o strategie importantă împotriva hipotermiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Adaugă un element fals la triadă și neagă o măsură preventivă explicită (încălzirea fluidelor)."
  },
  "textbookExpressions": [
   "Triada letală",
   "<35"
  ]
 },
 {
  "id": "hemostaza-adv-007",
  "topicId": "hemostaza",
  "type": "CS",
  "stem": "Care dintre următoarele caracterizează corect leziunea pulmonară acută asociată transfuziei (LPAT/TRALI)?",
  "options": [
   "Edem pulmonar noncardiogen apărut după transfuzie, cel mai frecvent după produse care conțin plasmă",
   "Edem pulmonar cardiogen prin supraîncărcare volemică izolată, fără legătură cu plasma donată",
   "Hemoliză intravasculară imediată prin incompatibilitate ABO, cu hemoglobinurie",
   "Boală grefă-contra-gazdă cu debut la câteva săptămâni, prin leucocite donatoare",
   "Contaminare bacteriană a unității, tratată prin cultură și antibiotice sistemice"
  ],
  "correct": [
   0
  ],
  "explanation": "Edem pulmonar noncardiogen apărut după transfuzie, cel mai frecvent după produse care conțin plasmă — Corect: LPAT este caracterizată ca edem pulmonar noncardiogen post-transfuzie, mai frecvent după PPC/trombocite.\n\nEdem pulmonar cardiogen prin supraîncărcare volemică izolată, fără legătură cu plasma donată — Incorect: Edemul cardiogen prin supraîncărcare este o entitate distinctă, nu definiția LPAT.\n\nHemoliză intravasculară imediată prin incompatibilitate ABO, cu hemoglobinurie — Incorect: Hemoliza ABO descrie reacția hemolitică acută, nu LPAT.\n\nBoală grefă-contra-gazdă cu debut la câteva săptămâni, prin leucocite donatoare — Incorect: GVHD are debut insidios la săptămâni și alt mecanism.\n\nContaminare bacteriană a unității, tratată prin cultură și antibiotice sistemice — Incorect: Contaminarea bacteriană este o complicație infecțioasă distinctă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 45, Complicații ale transfuziei — LPAT (pagini PDF: 19).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    45
   ],
   "pdfPages": [
    19
   ],
   "section": "Complicații ale transfuziei — LPAT"
  },
  "learningObjective": "Diferențierea LPAT de supraîncărcarea volemică, de reacția hemolitică, de GVHD și de contaminarea bacteriană.",
  "optionRationales": [
   "LPAT este caracterizată ca edem pulmonar noncardiogen post-transfuzie, mai frecvent după PPC/trombocite.",
   "Edemul cardiogen prin supraîncărcare este o entitate distinctă, nu definiția LPAT.",
   "Hemoliza ABO descrie reacția hemolitică acută, nu LPAT.",
   "GVHD are debut insidios la săptămâni și alt mecanism.",
   "Contaminarea bacteriană este o complicație infecțioasă distinctă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate opțiunile sunt complicații reale ale transfuziei din capitol; doar una corespunde definiției LPAT."
  },
  "textbookExpressions": [
   "noncardiogen",
   "PPC"
  ]
 },
 {
  "id": "hemostaza-adv-008",
  "topicId": "hemostaza",
  "type": "CS",
  "stem": "Tulburările preexistente ale hemostazei trebuie suspectate atunci când:",
  "options": [
   "Există episoade anterioare de sângerare sau hemoragia anormală se instalează în primele 30 de minute ale intervenției",
   "Sângerarea apare doar după a treia zi, fără istoric hemoragic",
   "Coagulograma preoperatorie este normală, deci defectul congenital este exclus",
   "Hemoragia difuză după bypass cardiopulmonar exclude o tulburare preexistentă",
   "Timpul de sângerare normal infirmă orice defect plachetar dobândit"
  ],
  "correct": [
   0
  ],
  "explanation": "Există episoade anterioare de sângerare sau hemoragia anormală se instalează în primele 30 de minute ale intervenției — Corect: Textul leagă antecedentele hemoragice și sângerarea din primele 30 de minute de o tulburare preexistentă.\n\nSângerarea apare doar după a treia zi, fără istoric hemoragic — Incorect: Sângerarea tardivă (3–5 zile) evocă deficitul de factor XIII, nu coagulopatia preexistentă tipică.\n\nCoagulograma preoperatorie este normală, deci defectul congenital este exclus — Incorect: Coagulograma poate fi normală la majoritatea pacienților; istoricul rămâne esențial.\n\nHemoragia difuză după bypass cardiopulmonar exclude o tulburare preexistentă — Incorect: Bypass-ul, chirurgia aortică și transplantul hepatic sunt operații cu pierderi mari, nu exclud un defect preexistent.\n\nTimpul de sângerare normal infirmă orice defect plachetar dobândit — Incorect: Timpul de sângerare este mai puțin utilizat; funcția plachetară integrală îl înlocuiește.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 39, Tulburări preexistente ale hemostazei (pagini PDF: 13).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    39
   ],
   "pdfPages": [
    13
   ],
   "section": "Tulburări preexistente ale hemostazei"
  },
  "learningObjective": "Recunoașterea ferestrei de 30 de minute și a istoricului hemoragic ca indicii de coagulopatie preexistentă.",
  "optionRationales": [
   "Textul leagă antecedentele hemoragice și sângerarea din primele 30 de minute de o tulburare preexistentă.",
   "Sângerarea tardivă (3–5 zile) evocă deficitul de factor XIII, nu coagulopatia preexistentă tipică.",
   "Coagulograma poate fi normală la majoritatea pacienților; istoricul rămâne esențial.",
   "Bypass-ul, chirurgia aortică și transplantul hepatic sunt operații cu pierderi mari, nu exclud un defect preexistent.",
   "Timpul de sângerare este mai puțin utilizat; funcția plachetară integrală îl înlocuiește."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă fereastra de 30 de minute cu sângerarea tardivă de factor XIII de două pagini mai jos."
  },
  "textbookExpressions": [
   "primele 30 de",
   "tulburări preexistente"
  ]
 },
 {
  "id": "hemostaza-adv-009",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Comparând datele epidemiologice din Tabelul 4-2:",
  "options": [
   "Hemofilia A are o incidență de 25 la 100.000 de locuitori în SUA",
   "Boala von Willebrand afectează circa 1% din populația SUA",
   "În hemofilia A moleculele de factor VIII sunt prezente, dar activitatea este redusă sau absentă",
   "Incidența hemofiliei A este 1% din populație, identică bolii von Willebrand",
   "Boala von Willebrand nu reduce activitatea factorului VIII"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hemofilia A are o incidență de 25 la 100.000 de locuitori în SUA — Corect: Cifra 25 la 100.000 este tabelată.\n\nBoala von Willebrand afectează circa 1% din populația SUA — Corect: Proporția de 1% pentru vWD este tabelată.\n\nÎn hemofilia A moleculele de factor VIII sunt prezente, dar activitatea este redusă sau absentă — Corect: Moleculele de factor VIII prezente, cu activitate redusă/absentă, definesc hemofilia A.\n\nIncidența hemofiliei A este 1% din populație, identică bolii von Willebrand — Incorect: 1% este prevalența vWD, nu a hemofiliei A.\n\nBoala von Willebrand nu reduce activitatea factorului VIII — Incorect: vWD reduce atât activitatea factorului VIII, cât și pe cea a vWF.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 39, Tabelul 4-2 — Hemofilia A versus boala von Willebrand (pagini PDF: 13).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    39
   ],
   "pdfPages": [
    13
   ],
   "section": "Tabelul 4-2 — Hemofilia A versus boala von Willebrand"
  },
  "learningObjective": "Contrastarea incidenței (25/100.000 versus 1%) și a prezenței moleculelor de factor VIII în hemofilia A.",
  "optionRationales": [
   "Cifra 25 la 100.000 este tabelată.",
   "Proporția de 1% pentru vWD este tabelată.",
   "Moleculele de factor VIII prezente, cu activitate redusă/absentă, definesc hemofilia A.",
   "1% este prevalența vWD, nu a hemofiliei A.",
   "vWD reduce atât activitatea factorului VIII, cât și pe cea a vWF."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 25/100.000 cu 1% și neagă prezența moleculelor de FVIII din același tabel."
  },
  "textbookExpressions": [
   "25 la 100.000",
   "1% din populaţia"
  ]
 },
 {
  "id": "hemostaza-adv-010",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Hemoragia masivă, în definițiile și predictorii din capitol, include:",
  "options": [
   "Înlocuirea întregului volum circulator în 24 de ore sau a >50% în 4 ore",
   "O rată a sângerării >150 mL/minut cu instabilitate hemodinamică",
   "Predictorii din camera de gardă: TAS ≤90 mm Hg, FC ≥120/min, FAST pozitivă, plagă penetrantă",
   "CAT este prezentă la internarea a circa 25% dintre traumatismele majore și asociază mortalitate de 4 ori mai mare",
   "CAT rezultă din consumul exagerat de factori circulanți, independent de perfuzia tisulară"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Înlocuirea întregului volum circulator în 24 de ore sau a >50% în 4 ore — Corect: Criteriile de înlocuire a volumului sunt enumerate pe lângă pragurile de unități.\n\nO rată a sângerării >150 mL/minut cu instabilitate hemodinamică — Corect: Rata >150 mL/min cu instabilitate este o variantă de definiție.\n\nPredictorii din camera de gardă: TAS ≤90 mm Hg, FC ≥120/min, FAST pozitivă, plagă penetrantă — Corect: Cei patru predictori de cameră de gardă sunt listați.\n\nCAT este prezentă la internarea a circa 25% dintre traumatismele majore și asociază mortalitate de 4 ori mai mare — Corect: Prevalența de 25% și mortalitatea ×4 sunt explicite.\n\nCAT rezultă din consumul exagerat de factori circulanți, independent de perfuzia tisulară — Incorect: CAT rezultă din perfuzia tisulară inadecvată, nu din consumul exagerat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 40, Hemoragia masivă — Definiții și CAT (pagini PDF: 14).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    40
   ],
   "pdfPages": [
    14
   ],
   "section": "Hemoragia masivă — Definiții și CAT"
  },
  "learningObjective": "Completarea definiției (volum, 50%/4 h, 150 mL/min) cu predictorii de cameră și epidemiologia CAT.",
  "optionRationales": [
   "Criteriile de înlocuire a volumului sunt enumerate pe lângă pragurile de unități.",
   "Rata >150 mL/min cu instabilitate este o variantă de definiție.",
   "Cei patru predictori de cameră de gardă sunt listați.",
   "Prevalența de 25% și mortalitatea ×4 sunt explicite.",
   "CAT rezultă din perfuzia tisulară inadecvată, nu din consumul exagerat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Adaugă praguri (150 mL/min, 50%/4 h) ușor de omis pe lângă 10 U/24 h, cu inversarea mecanismului CAT."
  },
  "textbookExpressions": [
   "> 150 mL/minut",
   "aproximativ 25%"
  ]
 },
 {
  "id": "hemostaza-adv-011",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Adjuvanții protocoalelor de transfuzie masivă se caracterizează prin:",
  "options": [
   "TXA este recomandat condiționat în primele 3 ore de la leziune, la traume severe cu hemoragie masivă",
   "rFVIIa poate reduce necesarul transfuzional, dar fără beneficiu semnificativ de mortalitate",
   "50% din sângerările postoperatorii sunt cauzate de hemostaza necorespunzătoare intraoperatorie",
   "TXA se administrează după 12 ore, când fibrinoliza primară s-a epuizat",
   "rFVIIa înlocuiește raportul 1:1:1 ca strategie de primă linie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "TXA este recomandat condiționat în primele 3 ore de la leziune, la traume severe cu hemoragie masivă — Corect: Fereastra de 3 ore și indicația condiționată sunt explicite.\n\nrFVIIa poate reduce necesarul transfuzional, dar fără beneficiu semnificativ de mortalitate — Corect: Reducerea transfuziilor fără impact pe mortalitate este citată.\n\n50% din sângerările postoperatorii sunt cauzate de hemostaza necorespunzătoare intraoperatorie — Corect: Proporția de 50% prin hemostază necorespunzătoare este enunțată.\n\nTXA se administrează după 12 ore, când fibrinoliza primară s-a epuizat — Incorect: Textul cere administrarea în primele 3 ore, nu după 12.\n\nrFVIIa înlocuiește raportul 1:1:1 ca strategie de primă linie — Incorect: Raportul 1:1:1 rămâne standardul PTM; rFVIIa este adjuvant.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 41, RCL — TXA, rFVIIa și hemoragia postoperatorie (pagini PDF: 15).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    41
   ],
   "pdfPages": [
    15
   ],
   "section": "RCL — TXA, rFVIIa și hemoragia postoperatorie"
  },
  "learningObjective": "Diferențierea ferestrei de 3 ore a TXA de absența beneficiului de mortalitate al rFVIIa și de cauza tehnică a jumătății de sângerări.",
  "optionRationales": [
   "Fereastra de 3 ore și indicația condiționată sunt explicite.",
   "Reducerea transfuziilor fără impact pe mortalitate este citată.",
   "Proporția de 50% prin hemostază necorespunzătoare este enunțată.",
   "Textul cere administrarea în primele 3 ore, nu după 12.",
   "Raportul 1:1:1 rămâne standardul PTM; rFVIIa este adjuvant."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută TXA după 12 ore și promovează rFVIIa ca substitut al 1:1:1, două erori de protocol."
  },
  "textbookExpressions": [
   "primele 3 ore",
   "50% din sângerările"
  ]
 },
 {
  "id": "hemostaza-adv-012",
  "topicId": "hemostaza",
  "type": "CS",
  "stem": "Deficitul dobândit de factor XIII se recunoaște prin:",
  "options": [
   "Sângerare postoperatorie întârziată, apărută la 3–5 zile după intervenție, confirmată prin dozarea factorului XIII",
   "Hemoragie difuză în primele 30 de minute, cu aPTT izolat prelungit",
   "Hematurie și oligurie sub anestezie, ca în reacția hemolitică",
   "Necroză cutanată la inițierea warfarinei, ca în deficitul de proteină C",
   "Răspuns prompt la vitamina K, identic deficitului de factori II, VII, IX și X"
  ],
  "correct": [
   0
  ],
  "explanation": "Sângerare postoperatorie întârziată, apărută la 3–5 zile după intervenție, confirmată prin dozarea factorului XIII — Corect: Textul plasează sângerarea la 3–5 zile și cere evaluarea factorului XIII.\n\nHemoragie difuză în primele 30 de minute, cu aPTT izolat prelungit — Incorect: Primele 30 de minute evocă tulburarea preexistentă, nu FXIII.\n\nHematurie și oligurie sub anestezie, ca în reacția hemolitică — Incorect: Hemoglobinuria/oliguria țin de CID post-transfuzie incompatibilă.\n\nNecroză cutanată la inițierea warfarinei, ca în deficitul de proteină C — Incorect: Necroza cutanată ține de warfarină în deficitul de proteină C.\n\nRăspuns prompt la vitamina K, identic deficitului de factori II, VII, IX și X — Incorect: FXIII nu este K-dependent; vitamina K corectează II, VII, IX și X.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 41, Hemoragii postoperatorii — Factorul XIII (pagini PDF: 15).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    41
   ],
   "pdfPages": [
    15
   ],
   "section": "Hemoragii postoperatorii — Factorul XIII"
  },
  "learningObjective": "Separarea ferestrei 3–5 zile a deficitului de FXIII de sângerarea precoce și de deficitul K-dependent.",
  "optionRationales": [
   "Textul plasează sângerarea la 3–5 zile și cere evaluarea factorului XIII.",
   "Primele 30 de minute evocă tulburarea preexistentă, nu FXIII.",
   "Hemoglobinuria/oliguria țin de CID post-transfuzie incompatibilă.",
   "Necroza cutanată ține de warfarină în deficitul de proteină C.",
   "FXIII nu este K-dependent; vitamina K corectează II, VII, IX și X."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă fereastra 3–5 zile a FXIII cu sângerarea din primele 30 de minute și cu deficitul K-dependent."
  },
  "textbookExpressions": [
   "factor Xlll",
   "3-5 zile"
  ]
 },
 {
  "id": "hemostaza-adv-013",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "În stările de hipercoagulabilitate, potrivit Tabelului 4-5 și textului:",
  "options": [
   "Cauza frecventă de tromboză venoasă este factorul V Leiden; sindromul antifosfolipidic este cauza frecventă arterială",
   "La deficitul de proteină C, warfarina fără suprapunere prelungită cu heparină poate produce necroză cutanată indusă de Coumadin",
   "Factorul V Leiden este cauza frecventă a trombozei arteriale, iar sindromul antifosfolipidic a TEV",
   "Heparina 5.000 UI subcutanat compromite hemostaza chirurgicală și este evitată perioperator",
   "Antecedentele familiale nu ghidează evaluarea factorilor ereditari de hipercoagulabilitate"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Cauza frecventă de tromboză venoasă este factorul V Leiden; sindromul antifosfolipidic este cauza frecventă arterială — Corect: Tabelul plasează V Leiden la TEV și sindromul antifosfolipidic la tromboza arterială.\n\nLa deficitul de proteină C, warfarina fără suprapunere prelungită cu heparină poate produce necroză cutanată indusă de Coumadin — Corect: Necroza cutanată fără overlapping heparinic este explicită.\n\nFactorul V Leiden este cauza frecventă a trombozei arteriale, iar sindromul antifosfolipidic a TEV — Incorect: Atribuirea este inversată față de tabel.\n\nHeparina 5.000 UI subcutanat compromite hemostaza chirurgicală și este evitată perioperator — Incorect: Heparina 5.000 UI s.c. asigură protecție fără a compromite hemostaza.\n\nAntecedentele familiale nu ghidează evaluarea factorilor ereditari de hipercoagulabilitate — Incorect: Istoricul familial ghidează evaluarea factorilor ereditari.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 42, Hipercoagulabilitate — Tabelul 4-5 și warfarina (pagini PDF: 16).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    42
   ],
   "pdfPages": [
    16
   ],
   "section": "Hipercoagulabilitate — Tabelul 4-5 și warfarina"
  },
  "learningObjective": "Contrastarea sediului (V Leiden venos versus antifosfolipidic arterial) cu riscul de necroză Coumadin.",
  "optionRationales": [
   "Tabelul plasează V Leiden la TEV și sindromul antifosfolipidic la tromboza arterială.",
   "Necroza cutanată fără overlapping heparinic este explicită.",
   "Atribuirea este inversată față de tabel.",
   "Heparina 5.000 UI s.c. asigură protecție fără a compromite hemostaza.",
   "Istoricul familial ghidează evaluarea factorilor ereditari."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează V Leiden și sindromul antifosfolipidic pe coloanele arterial/venos ale aceluiași tabel."
  },
  "textbookExpressions": [
   "FactorV Leiden",
   "necroză cutanată"
  ]
 },
 {
  "id": "hemostaza-adv-014",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Transfuzia de masă eritrocitară, în parametrii din capitol:",
  "options": [
   "Pungile de MER se conservă la 1–6°C, cu durată de viață de aproximativ 42 de zile",
   "O unitate conține circa 200 mL eritrocite și 30 mL plasmă, într-un volum total de 310 mL, hematocrit ≈57%",
   "La un adult de 70 kg, o unitate crește hematocritul cu 3% și hemoglobina cu 1 g/dL",
   "Incompatibilitățile ABO sunt cele mai frecvente cauze ale reacțiilor transfuzionale fatale",
   "Sângele integral este indicația de primă intenție la anemia cronică izolată, fără sângerare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Pungile de MER se conservă la 1–6°C, cu durată de viață de aproximativ 42 de zile — Corect: Temperatura 1–6°C și durata 42 de zile sunt citate.\n\nO unitate conține circa 200 mL eritrocite și 30 mL plasmă, într-un volum total de 310 mL, hematocrit ≈57% — Corect: Compoziția 200/30/310 mL și Ht 57% sunt explicite.\n\nLa un adult de 70 kg, o unitate crește hematocritul cu 3% și hemoglobina cu 1 g/dL — Corect: Creșterea de 3% Ht și 1 g/dL Hb la 70 kg este așteptarea tipică.\n\nIncompatibilitățile ABO sunt cele mai frecvente cauze ale reacțiilor transfuzionale fatale — Corect: ABO este cauza principală a reacțiilor fatale.\n\nSângele integral este indicația de primă intenție la anemia cronică izolată, fără sângerare — Incorect: Sângele integral nu are indicații ferme, exceptând volumul masiv sau indisponibilitatea componentelor.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 43, Transfuzia de eritrocite (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    43
   ],
   "pdfPages": [
    17
   ],
   "section": "Transfuzia de eritrocite"
  },
  "learningObjective": "Aplicarea cifrelor de conservare (42 zile, 200/30/310 mL, +3%/+1 g/dL) și a gravității ABO.",
  "optionRationales": [
   "Temperatura 1–6°C și durata 42 de zile sunt citate.",
   "Compoziția 200/30/310 mL și Ht 57% sunt explicite.",
   "Creșterea de 3% Ht și 1 g/dL Hb la 70 kg este așteptarea tipică.",
   "ABO este cauza principală a reacțiilor fatale.",
   "Sângele integral nu are indicații ferme, exceptând volumul masiv sau indisponibilitatea componentelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru cifre de produs (temperatură, volum, ΔHt, ΔHb) ușor de permutat, plus mitul sângelui integral."
  },
  "textbookExpressions": [
   "42 de zile",
   "1 g/dL"
  ]
 },
 {
  "id": "hemostaza-adv-015",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Reacțiile imunologice transfuzionale se caracterizează prin:",
  "options": [
   "Reacțiile febrile sunt cele mai frecvente, de obicei prin anticorpi antileucocitari, cu febră, frisoane și tahicardie",
   "Reacția hemolitică acută poate debuta după doar 50 mL de sânge incompatibil ABO, cu dureri lombare, hemoglobinurie și hipotensiune",
   "Reacțiile febrile sunt cele mai rare și se tratează prin continuarea transfuziei cu viteză crescută",
   "Hemoliza acută apare doar după 2–3 săptămâni, identic bolii grefă-contra-gazdă",
   "Manitolul și furosemidul sunt contraindicate, diureza trebuind suprimată în hemoliză"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Reacțiile febrile sunt cele mai frecvente, de obicei prin anticorpi antileucocitari, cu febră, frisoane și tahicardie — Corect: Predominanța reacțiilor febrile și mecanismul antileucocitar sunt explicite.\n\nReacția hemolitică acută poate debuta după doar 50 mL de sânge incompatibil ABO, cu dureri lombare, hemoglobinurie și hipotensiune — Corect: Pragul de 50 mL și semnele (lombare, hemoglobinurie, hipotensiune) sunt descrise.\n\nReacțiile febrile sunt cele mai rare și se tratează prin continuarea transfuziei cu viteză crescută — Incorect: Febrilele sunt cele mai frecvente; transfuzia se oprește.\n\nHemoliza acută apare doar după 2–3 săptămâni, identic bolii grefă-contra-gazdă — Incorect: Debutul la săptămâni descrie GVHD, nu hemoliza acută.\n\nManitolul și furosemidul sunt contraindicate, diureza trebuind suprimată în hemoliză — Incorect: Unii clinicieni recomandă manitol și/sau furosemid pentru a menține diureza.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 45, 44, Complicații imunologice — Febrile și hemolitice (pagini PDF: 19, 18).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    45,
    44
   ],
   "pdfPages": [
    19,
    18
   ],
   "section": "Complicații imunologice — Febrile și hemolitice"
  },
  "learningObjective": "Diferențierea reacției febrile (cea mai frecventă, antileucocitară) de hemoliza ABO precoce (50 mL).",
  "optionRationales": [
   "Predominanța reacțiilor febrile și mecanismul antileucocitar sunt explicite.",
   "Pragul de 50 mL și semnele (lombare, hemoglobinurie, hipotensiune) sunt descrise.",
   "Febrilele sunt cele mai frecvente; transfuzia se oprește.",
   "Debutul la săptămâni descrie GVHD, nu hemoliza acută.",
   "Unii clinicieni recomandă manitol și/sau furosemid pentru a menține diureza."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează frecvența febrilelor și mută hemoliza acută în fereastra GVHD de săptămâni."
  },
  "textbookExpressions": [
   "50 mL de sânge",
   "Reacţiile feb1ile"
  ]
 },
 {
  "id": "hemostaza-adv-016",
  "topicId": "hemostaza",
  "type": "CS",
  "stem": "Identificați afirmația corectă privind indicația transfuziei de masă eritrocitară:",
  "options": [
   "Anemia izolată nu este, în majoritatea populației, o indicație de transfuzie; simptomele asociate anemiei și nevoile fiziologice individuale ghidează decizia, transfuzia fiind un transplant tisular",
   "Orice hemoglobină sub 12 g/dL la adultul stabil impune o unitate de MER de principiu",
   "Sângele integral este indicația de primă intenție în anemia cronică izolată, fără sângerare",
   "Decizia de transfuzie ignoră comorbiditățile cardiace, pulmonare sau renale",
   "Eritrocitele deplasmatizate sunt rezervate hemoragiei masive, nu reacțiilor febrile anterioare"
  ],
  "correct": [
   0
  ],
  "explanation": "Anemia izolată nu este, în majoritatea populației, o indicație de transfuzie; simptomele asociate anemiei și nevoile fiziologice individuale ghidează decizia, transfuzia fiind un transplant tisular — Corect: Textul precizează explicit că anemia izolată nu este o indicație și că transfuzia este un transplant tisular.\n\nOrice hemoglobină sub 12 g/dL la adultul stabil impune o unitate de MER de principiu — Incorect: Un prag neselectiv de 12 g/dL nu figurează; decizia este multifactorială.\n\nSângele integral este indicația de primă intenție în anemia cronică izolată, fără sângerare — Incorect: Sângele integral nu are indicații ferme, exceptând volumul masiv sau indisponibilitatea componentelor.\n\nDecizia de transfuzie ignoră comorbiditățile cardiace, pulmonare sau renale — Incorect: Comorbiditățile cardiace, pulmonare și renale sunt printre factorii listați.\n\nEritrocitele deplasmatizate sunt rezervate hemoragiei masive, nu reacțiilor febrile anterioare — Incorect: Deplasmatizate/deleucocitate sunt pentru hipersensibilitate, reacții febrile sau transplantați.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 43, Transfuzia de eritrocite — Anemia izolată nu este indicație (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    43
   ],
   "pdfPages": [
    17
   ],
   "section": "Transfuzia de eritrocite — Anemia izolată nu este indicație"
  },
  "learningObjective": "Recunoașterea faptului că anemia izolată nu dictează transfuzia, aceasta fiind un transplant tisular individualizat.",
  "optionRationales": [
   "Textul precizează explicit că anemia izolată nu este o indicație și că transfuzia este un transplant tisular.",
   "Un prag neselectiv de 12 g/dL nu figurează; decizia este multifactorială.",
   "Sângele integral nu are indicații ferme, exceptând volumul masiv sau indisponibilitatea componentelor.",
   "Comorbiditățile cardiace, pulmonare și renale sunt printre factorii listați.",
   "Deplasmatizate/deleucocitate sunt pentru hipersensibilitate, reacții febrile sau transplantați."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă anemia izolată într-o indicație neselectivă și promovează sângele integral, contrar paragrafului despre transplantul tisular."
  },
  "textbookExpressions": [
   "anemia izolată",
   "transplant tisular"
  ]
 },
 {
  "id": "hemostaza-adv-017",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Conform Tabelului 4-4, monitorizarea anticoagulantelor include:",
  "options": [
   "Heparina nefracționată (inhibare Xa și trombină) se urmărește prin aPTT sau activitatea anti-Xa",
   "HGMM, apixaban, edoxaban, rivaroxaban și fondaparina (inhibare Xa) se urmăresc prin activitatea anti-Xa",
   "Warfarina (factori inactivi II, VII, IX, X — „1972”) se urmărește prin PT/INR; argatroban, dabigatran și bivalirudina prin aPTT/TT",
   "Warfarina se monitorizează prin anti-Xa, identic HGMM",
   "Heparina nefracționată se urmărește doar prin PT, fără aPTT"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Heparina nefracționată (inhibare Xa și trombină) se urmărește prin aPTT sau activitatea anti-Xa — Corect: Rândul HNF: aPTT sau anti-Xa este tabelat.\n\nHGMM, apixaban, edoxaban, rivaroxaban și fondaparina (inhibare Xa) se urmăresc prin activitatea anti-Xa — Corect: Rândul inhibitorilor de Xa, inclusiv fondaparina, cere anti-Xa.\n\nWarfarina (factori inactivi II, VII, IX, X — „1972”) se urmărește prin PT/INR; argatroban, dabigatran și bivalirudina prin aPTT/TT — Corect: Mnemotehnica 1972 și PT/INR pentru warfarină, plus aPTT/TT pentru DTI, sunt tabelate.\n\nWarfarina se monitorizează prin anti-Xa, identic HGMM — Incorect: Anti-Xa aparține HGMM/Xa-inhibitorilor, nu warfarinei.\n\nHeparina nefracționată se urmărește doar prin PT, fără aPTT — Incorect: HNF se urmărește prin aPTT sau anti-Xa, nu prin PT.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 40, Tabelul 4-4 — Mecanism și teste de monitorizare (pagini PDF: 14).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    40
   ],
   "pdfPages": [
    14
   ],
   "section": "Tabelul 4-4 — Mecanism și teste de monitorizare"
  },
  "learningObjective": "Diferențierea aPTT/anti-Xa (HNF), anti-Xa (HGMM și Xa-inhibitori) și PT/INR (warfarină) de aPTT/TT (DTI).",
  "optionRationales": [
   "Rândul HNF: aPTT sau anti-Xa este tabelat.",
   "Rândul inhibitorilor de Xa, inclusiv fondaparina, cere anti-Xa.",
   "Mnemotehnica 1972 și PT/INR pentru warfarină, plus aPTT/TT pentru DTI, sunt tabelate.",
   "Anti-Xa aparține HGMM/Xa-inhibitorilor, nu warfarinei.",
   "HNF se urmărește prin aPTT sau anti-Xa, nu prin PT."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează PT/INR al warfarinei cu anti-Xa al HGMM, două coloane alăturate din același tabel."
  },
  "textbookExpressions": [
   "fondaparină (Arixtra)",
   "1972"
  ]
 },
 {
  "id": "hemostaza-adv-018",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Diagnosticul și substituția în CID perioperatorie se caracterizează prin:",
  "options": [
   "aPTT și PT prelungite, hipofibrinogenemie, trombocitopenie, produși de degradare a fibrinei și D-dimeri pozitivi",
   "Cel mai important aspect al tratamentului este eliminarea factorilor etiologici (de exemplu tratarea septicemiei)",
   "Crioprecipitatul este cea mai bună metodă de compensare a unui deficit important de fibrinogen",
   "PPC este utilă pentru suplinirea altor deficite identificate, cu prudență dacă supraîncărcarea volemică este o problemă",
   "Vitamina K izolată corectează CID, crioprecipitatul fiind inutil"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "aPTT și PT prelungite, hipofibrinogenemie, trombocitopenie, produși de degradare a fibrinei și D-dimeri pozitivi — Corect: Cele cinci probe (aPTT, PT, fibrinogen, trombocite, FDP/D-dimeri) sunt enumerate.\n\nCel mai important aspect al tratamentului este eliminarea factorilor etiologici (de exemplu tratarea septicemiei) — Corect: Eliminarea cauzei (septicemie) este descrisă ca cel mai important aspect.\n\nCrioprecipitatul este cea mai bună metodă de compensare a unui deficit important de fibrinogen — Corect: Crioprecipitatul ca cea mai bună metodă pentru fibrinogen este explicit.\n\nPPC este utilă pentru suplinirea altor deficite identificate, cu prudență dacă supraîncărcarea volemică este o problemă — Corect: Textul menționează PPC pentru celelalte deficite, cu atenție la supraîncărcarea volemică.\n\nVitamina K izolată corectează CID, crioprecipitatul fiind inutil — Incorect: Vitamina K corectează factorii II, VII, IX, X; crioprecipitatul este metoda citată pentru fibrinogen.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 41, CID — Probe de laborator și crioprecipitat (pagini PDF: 15).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    41
   ],
   "pdfPages": [
    15
   ],
   "section": "CID — Probe de laborator și crioprecipitat"
  },
  "learningObjective": "Aplicarea panelului de laborator al CID și a crioprecipitatului ca sursă de fibrinogen, plus tratarea cauzei.",
  "optionRationales": [
   "Cele cinci probe (aPTT, PT, fibrinogen, trombocite, FDP/D-dimeri) sunt enumerate.",
   "Eliminarea cauzei (septicemie) este descrisă ca cel mai important aspect.",
   "Crioprecipitatul ca cea mai bună metodă pentru fibrinogen este explicit.",
   "Textul menționează PPC pentru celelalte deficite, cu atenție la supraîncărcarea volemică.",
   "Vitamina K corectează factorii II, VII, IX, X; crioprecipitatul este metoda citată pentru fibrinogen."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează D-dimerii/fibrinogenul și înlocuiește crioprecipitatul cu vitamina K, două erori de substituție din același paragraf."
  },
  "textbookExpressions": [
   "hipofibrinogenemie",
   "Crioprecipitatul"
  ]
 },
 {
  "id": "hemostaza-adv-019",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Fibrinoliza primară, spre deosebire de cea secundară, se recunoaște prin:",
  "options": [
   "Apare după terapie cu tPA, după chirurgie prostatică (organ bogat în urokinază) sau în insuficiență hepatică severă; t½ al agenților litici este de minute, sângerarea oprindu-se rapid la întrerupere",
   "EACA poate fi folosit dacă fibrinoliza primară devine severă, dar blochează cascada fibrinolitică și poate predispone la tromboză",
   "Este răspunsul uzual la CID și se remite doar după corectarea coagulării, fără legătură cu prostata",
   "tPA prelungește sângerarea zile întregi după oprire, t½ fiind de 48 de ore",
   "EACA este inofensiv trombotic și se dă de primă intenție în orice CID"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Apare după terapie cu tPA, după chirurgie prostatică (organ bogat în urokinază) sau în insuficiență hepatică severă; t½ al agenților litici este de minute, sângerarea oprindu-se rapid la întrerupere — Corect: Cauzele (tPA, prostată/urokinază, ficat) și t½ de minute sunt explicite.\n\nEACA poate fi folosit dacă fibrinoliza primară devine severă, dar blochează cascada fibrinolitică și poate predispone la tromboză — Corect: EACA ca terapie de rezervă, cu risc trombotic, este enunțat.\n\nEste răspunsul uzual la CID și se remite doar după corectarea coagulării, fără legătură cu prostata — Incorect: Răspunsul la CID definește fibrinoliza secundară, nu pe cea primară.\n\ntPA prelungește sângerarea zile întregi după oprire, t½ fiind de 48 de ore — Incorect: Textul precizează t½ de minute, nu 48 de ore.\n\nEACA este inofensiv trombotic și se dă de primă intenție în orice CID — Incorect: EACA se folosește cu atenție, nu neselectiv în CID.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 42, Fibrinoliza primară — Urokinază prostatică și EACA (pagini PDF: 16).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    42
   ],
   "pdfPages": [
    16
   ],
   "section": "Fibrinoliza primară — Urokinază prostatică și EACA"
  },
  "learningObjective": "Contrastarea fibrinolizei primare (tPA, prostată, t½ scurt, EACA cu risc trombotic) de fibrinoliza secundară din CID.",
  "optionRationales": [
   "Cauzele (tPA, prostată/urokinază, ficat) și t½ de minute sunt explicite.",
   "EACA ca terapie de rezervă, cu risc trombotic, este enunțat.",
   "Răspunsul la CID definește fibrinoliza secundară, nu pe cea primară.",
   "Textul precizează t½ de minute, nu 48 de ore.",
   "EACA se folosește cu atenție, nu neselectiv în CID."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă fibrinoliza primară (prostată, t½ minute) cu cea secundară din CID și ignoră riscul trombotic al EACA."
  },
  "textbookExpressions": [
   "urokinază",
   "timpul de înjumătăţire"
  ]
 },
 {
  "id": "hemostaza-adv-020",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Hemostaza la gravida chirurgicală se caracterizează prin:",
  "options": [
   "Creșterea volumului circulant cu anemie relativă și niveluri crescute de factor VIII, fibrinogen și alți factori",
   "Tromboza și embolia pulmonară sunt principalele cauze de deces; riscul este maxim în trimestrul al treilea și după naștere",
   "HGMM și heparina nefracționată reprezintă tratamentul anticoagulant electiv la gravide",
   "Warfarina este anticoagulantul de primă intenție pe tot parcursul sarcinii",
   "Riscul trombotic este maxim în primul trimestru și dispare imediat după naștere"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Creșterea volumului circulant cu anemie relativă și niveluri crescute de factor VIII, fibrinogen și alți factori — Corect: Creșterea FVIII, fibrinogenului și anemia relativă sunt explicite.\n\nTromboza și embolia pulmonară sunt principalele cauze de deces; riscul este maxim în trimestrul al treilea și după naștere — Corect: EP/tromboza ca principale cauze de deces și vârful din trimestrul III/postpartum sunt citate.\n\nHGMM și heparina nefracționată reprezintă tratamentul anticoagulant electiv la gravide — Corect: HGMM și HNF ca tratament electiv sunt enunțate.\n\nWarfarina este anticoagulantul de primă intenție pe tot parcursul sarcinii — Incorect: Warfarina nu este listată ca electivă în sarcină; heparinele sunt.\n\nRiscul trombotic este maxim în primul trimestru și dispare imediat după naștere — Incorect: Textul plasează maximul în trimestrul III și după naștere, nu în primul trimestru.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 42, Cazuri particulare — Gravida: FVIII, trimestrul III, heparină (pagini PDF: 16).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    42
   ],
   "pdfPages": [
    16
   ],
   "section": "Cazuri particulare — Gravida: FVIII, trimestrul III, heparină"
  },
  "learningObjective": "Recunoașterea stării procoagulante (FVIII, fibrinogen), a vârfului de risc din trimestrul III/postpartum și a heparinei ca electiv.",
  "optionRationales": [
   "Creșterea FVIII, fibrinogenului și anemia relativă sunt explicite.",
   "EP/tromboza ca principale cauze de deces și vârful din trimestrul III/postpartum sunt citate.",
   "HGMM și HNF ca tratament electiv sunt enunțate.",
   "Warfarina nu este listată ca electivă în sarcină; heparinele sunt.",
   "Textul plasează maximul în trimestrul III și după naștere, nu în primul trimestru."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută vârful trombotic în primul trimestru și promovează warfarina în locul heparinei, două erori obstetricale din același paragraf."
  },
  "textbookExpressions": [
   "factor VIII, fibrinogen",
   "al treilea trimestru"
  ]
 },
 {
  "id": "hemostaza-adv-021",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Coagulopatia din disfuncția hepatică, potrivit capitolului, se caracterizează prin:",
  "options": [
   "INR monitorizează funcția de sinteză hepatică; bilirubina, amoniemia și transaminazele nu sunt măsurători utile ale coagulopatiei",
   "Pacienții hepatici pot prezenta hemoragie, hipercoagulabilitate sau ambele simultan, prin dezechilibru dublu al proceselor anti- și procoagulante",
   "Transaminazele și amoniemia cuantifică precis deficitul de factori, INR-ul fiind superfluu",
   "Hipercoagulabilitatea este exclusă la cirotic, sângerarea fiind singura manifestare",
   "Dializa hepatică corectează complet coagulopatia, analog dializei renale"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "INR monitorizează funcția de sinteză hepatică; bilirubina, amoniemia și transaminazele nu sunt măsurători utile ale coagulopatiei — Corect: INR ca monitor al sintezei și inutilitatea bilirubinei/amoniemiei/transaminazelor sunt explicite.\n\nPacienții hepatici pot prezenta hemoragie, hipercoagulabilitate sau ambele simultan, prin dezechilibru dublu al proceselor anti- și procoagulante — Corect: Paradoxul hemoragie plus hipercoagulabilitate este enunțat.\n\nTransaminazele și amoniemia cuantifică precis deficitul de factori, INR-ul fiind superfluu — Incorect: Textul neagă utilitatea transaminazelor/amoniemiei pentru coagulopatie.\n\nHipercoagulabilitatea este exclusă la cirotic, sângerarea fiind singura manifestare — Incorect: Hipercoagulabilitatea este descrisă ca posibilă concomitent.\n\nDializa hepatică corectează complet coagulopatia, analog dializei renale — Incorect: Dializa hepatică nu figurează ca corecție; paragraful următor privește dializa renală și trombocitele.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 42, Cazuri particulare — Ficat: INR versus transaminaze (pagini PDF: 16).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    42
   ],
   "pdfPages": [
    16
   ],
   "section": "Cazuri particulare — Ficat: INR versus transaminaze"
  },
  "learningObjective": "Diferențierea INR-ului ca marker de sinteză de markerii non-hemostatici (bilirubină, amoniu, transaminaze) și recunoașterea paradoxului hemoragie/tromboză.",
  "optionRationales": [
   "INR ca monitor al sintezei și inutilitatea bilirubinei/amoniemiei/transaminazelor sunt explicite.",
   "Paradoxul hemoragie plus hipercoagulabilitate este enunțat.",
   "Textul neagă utilitatea transaminazelor/amoniemiei pentru coagulopatie.",
   "Hipercoagulabilitatea este descrisă ca posibilă concomitent.",
   "Dializa hepatică nu figurează ca corecție; paragraful următor privește dializa renală și trombocitele."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește INR-ul cu transaminaze/amoniemie și neagă hipercoagulabilitatea paradoxală a ciroticului."
  },
  "textbookExpressions": [
   "Măsurarea INR",
   "amoniemiei"
  ]
 },
 {
  "id": "hemostaza-adv-022",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Complicațiile metabolice ale transfuziei masive și triada letală includ:",
  "options": [
   "Cele mai frecvente complicații metabolice sunt hipocalcemia, hiperkaliemia, hipokaliemia și hipotermia",
   "Hipotermia este observată la 50% dintre pacienții cu traumatisme la prezentare",
   "Acidoza este definită ca pH <7,35; serul fiziologic are pH 5,5 și contribuie la coagulopatia de diluție",
   "Coagulopatia la traumatizați asociază o creștere de 4 ori a mortalității",
   "Hipotermia lipsește la prezentare, iar cristaloidele au pH 7,40, fără efect asupra coagulării"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Cele mai frecvente complicații metabolice sunt hipocalcemia, hiperkaliemia, hipokaliemia și hipotermia — Corect: Cele patru tulburări metabolice sunt enumerate.\n\nHipotermia este observată la 50% dintre pacienții cu traumatisme la prezentare — Corect: Cifra de 50% la prezentare este explicită.\n\nAcidoza este definită ca pH <7,35; serul fiziologic are pH 5,5 și contribuie la coagulopatia de diluție — Corect: pH <7,35 și pH 5,5 al serului fiziologic sunt citate.\n\nCoagulopatia la traumatizați asociază o creștere de 4 ori a mortalității — Corect: Mortalitatea ×4 a coagulopatiei este enunțată.\n\nHipotermia lipsește la prezentare, iar cristaloidele au pH 7,40, fără efect asupra coagulării — Incorect: Hipotermia este frecventă la prezentare; cristaloidele au pH scăzut.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 44, Triada letală — Hipotermie 50%, pH 7,35, cristaloid 5,5 (pagini PDF: 18).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    44
   ],
   "pdfPages": [
    18
   ],
   "section": "Triada letală — Hipotermie 50%, pH 7,35, cristaloid 5,5"
  },
  "learningObjective": "Integrarea complicațiilor metabolice, a prevalenței hipotermiei de 50%, a pragului pH <7,35 și a pH-ului 5,5 al serului fiziologic.",
  "optionRationales": [
   "Cele patru tulburări metabolice sunt enumerate.",
   "Cifra de 50% la prezentare este explicită.",
   "pH <7,35 și pH 5,5 al serului fiziologic sunt citate.",
   "Mortalitatea ×4 a coagulopatiei este enunțată.",
   "Hipotermia este frecventă la prezentare; cristaloidele au pH scăzut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă hipotermia de 50% și atribuie serului fiziologic pH 7,40, două cifre din același paragraf de triadă letală."
  },
  "textbookExpressions": [
   "50% dintre pacienţii",
   "pH <7,35"
  ]
 },
 {
  "id": "hemostaza-adv-023",
  "topicId": "hemostaza",
  "type": "CS",
  "stem": "Leziunea pulmonară acută asociată transfuziei (LPAT) survine:",
  "options": [
   "La circa 1 din 5.000 de transfuzii, mai frecvent după produse cu plasmă (PPC, trombocite); edemul apare de obicei în 1–2 ore, până la 6 ore, cu formă întârziată până la 72 de ore",
   "La 1 din 50 de unități MER, doar după masă eritrocitară deleucocitată, fără plasmă",
   "Doar după 2–3 săptămâni, identic bolii grefă-contra-gazdă",
   "Prin hemoliză ABO după 50 mL, cu hemoglobinurie, fără edem pulmonar",
   "Prin supraîncărcare volemică cardiogenă izolată, tratată prin creșterea vitezei de transfuzie"
  ],
  "correct": [
   0
  ],
  "explanation": "La circa 1 din 5.000 de transfuzii, mai frecvent după produse cu plasmă (PPC, trombocite); edemul apare de obicei în 1–2 ore, până la 6 ore, cu formă întârziată până la 72 de ore — Corect: Incidența 1/5.000, predilecția pentru PPC/trombocite și ferestrele temporale sunt explicite.\n\nLa 1 din 50 de unități MER, doar după masă eritrocitară deleucocitată, fără plasmă — Incorect: LPAT este mai frecventă după plasmă, nu după MER deleucocitată izolată.\n\nDoar după 2–3 săptămâni, identic bolii grefă-contra-gazdă — Incorect: Debutul la săptămâni descrie GVHD, nu LPAT.\n\nPrin hemoliză ABO după 50 mL, cu hemoglobinurie, fără edem pulmonar — Incorect: Hemoliza ABO cu hemoglobinurie este reacția hemolitică acută.\n\nPrin supraîncărcare volemică cardiogenă izolată, tratată prin creșterea vitezei de transfuzie — Incorect: Edemul LPAT este noncardiogen; creșterea vitezei agravează, nu tratează.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 45, Complicații pulmonare — LPAT 1/5.000 și fereastra 1–6 ore (pagini PDF: 19).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    45
   ],
   "pdfPages": [
    19
   ],
   "section": "Complicații pulmonare — LPAT 1/5.000 și fereastra 1–6 ore"
  },
  "learningObjective": "Fixarea incidenței 1/5.000, a predilecției pentru plasmă și a ferestrelor 1–2 / 6 / 72 de ore, distinct de GVHD, hemoliză și TACO.",
  "optionRationales": [
   "Incidența 1/5.000, predilecția pentru PPC/trombocite și ferestrele temporale sunt explicite.",
   "LPAT este mai frecventă după plasmă, nu după MER deleucocitată izolată.",
   "Debutul la săptămâni descrie GVHD, nu LPAT.",
   "Hemoliza ABO cu hemoglobinurie este reacția hemolitică acută.",
   "Edemul LPAT este noncardiogen; creșterea vitezei agravează, nu tratează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 1/5.000 și fereastra 1–6 ore cu GVHD-ul de săptămâni sau cu hemoliza de 50 mL, trei complicații din același capitol."
  },
  "textbookExpressions": [
   "5.000 de transfuzii",
   "1-2 ore"
  ]
 },
 {
  "id": "hemostaza-adv-024",
  "topicId": "hemostaza",
  "type": "CS",
  "stem": "Conform Tabelului 4-1, probele de laborator ale hemostazei (aPTT, PT, timp de sângerare sau funcție plachetară integrală, timp de trombină) se recoltează:",
  "options": [
   "La pacienții cu tulburări de sângerare evidente sau la care hemoragia excesivă este anticipată prin natura intervenției",
   "Ca screening neselectiv la fiecare adult asimptomatic înaintea herniei inghinale",
   "Doar postoperator, istoricul preoperator fiind superfluu",
   "Numai dacă PT este deja cunoscut ca prelungit, aPTT fiind inutil",
   "Ca substitut al examenului fizic, anamneza fiind omisă"
  ],
  "correct": [
   0
  ],
  "explanation": "La pacienții cu tulburări de sângerare evidente sau la care hemoragia excesivă este anticipată prin natura intervenției — Corect: Tabelul limitează probele la tulburarea evidentă sau la hemoragia anticipată prin natura operației.\n\nCa screening neselectiv la fiecare adult asimptomatic înaintea herniei inghinale — Incorect: Screeningul neselectiv la hernia curată nu figurează; istoricul rămâne de rutină.\n\nDoar postoperator, istoricul preoperator fiind superfluu — Incorect: Probele sunt preoperatorii, când sunt indicate.\n\nNumai dacă PT este deja cunoscut ca prelungit, aPTT fiind inutil — Incorect: aPTT și PT sunt listate împreună, nu condiționate una de alta.\n\nCa substitut al examenului fizic, anamneza fiind omisă — Incorect: Istoricul și examenul fizic se fac de rutină; probele nu le înlocuiesc.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 39, Evaluarea preoperatorie — Tabelul 4-1, indicația de probe (pagini PDF: 13).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    39
   ],
   "pdfPages": [
    13
   ],
   "section": "Evaluarea preoperatorie — Tabelul 4-1, indicația de probe"
  },
  "learningObjective": "Recunoașterea indicației selective a panelului de laborator, distinctă de istoricul și examenul fizic de rutină.",
  "optionRationales": [
   "Tabelul limitează probele la tulburarea evidentă sau la hemoragia anticipată prin natura operației.",
   "Screeningul neselectiv la hernia curată nu figurează; istoricul rămâne de rutină.",
   "Probele sunt preoperatorii, când sunt indicate.",
   "aPTT și PT sunt listate împreună, nu condiționate una de alta.",
   "Istoricul și examenul fizic se fac de rutină; probele nu le înlocuiesc."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde panelul de laborator la screening neselectiv, contrar coloanei „momentul efectuării” din Tabelul 4-1."
  },
  "textbookExpressions": [
   "tulburări de sângerare",
   "Probe de laborator"
  ]
 },
 {
  "id": "hemostaza-adv-025",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Operațiile cu pierderi mari de sânge și hemostaza locală intraoperatorie includ:",
  "options": [
   "Bypass cardiopulmonar, chirurgie aortică, transplant hepatic, chirurgie prostatică, șunturi portocave și traumatisme se asociază frecvent cu pierderi mari",
   "Agenții hemostatici locali includ bureți de gelatină (Gelfoam), celuloză oxidată (Surgicel), burete de colagen, colagen microfibrilar (Avitene), trombină topică, EACA topic și aprotinin topic",
   "Sângerarea din punctele de sutură, liniile vasculare sau disecția extinsă poate fi controlată prin acești agenți locali",
   "Reacțiile hemolitice acute la transfuzia de sânge pot produce CID",
   "Chirurgia prostatică și șuntul portocav sunt operații fără risc hemoragic, spre deosebire de hernia inghinală"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Bypass cardiopulmonar, chirurgie aortică, transplant hepatic, chirurgie prostatică, șunturi portocave și traumatisme se asociază frecvent cu pierderi mari — Corect: Lista de operații (bypass, aortă, transplant, prostată, șunt portocav, traumă) este explicită.\n\nAgenții hemostatici locali includ bureți de gelatină (Gelfoam), celuloză oxidată (Surgicel), burete de colagen, colagen microfibrilar (Avitene), trombină topică, EACA topic și aprotinin topic — Corect: Paleta de agenți locali, cu denumirile comerciale, este enumerată.\n\nSângerarea din punctele de sutură, liniile vasculare sau disecția extinsă poate fi controlată prin acești agenți locali — Corect: Indicația pe puncte de sutură/linii vasculare/disecție este enunțată.\n\nReacțiile hemolitice acute la transfuzia de sânge pot produce CID — Corect: Textul leagă reacția hemolitică acută de producerea CID.\n\nChirurgia prostatică și șuntul portocav sunt operații fără risc hemoragic, spre deosebire de hernia inghinală — Incorect: Prostata și șuntul portocav sunt pe lista de pierderi mari.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 40, 39, Complicații intraoperatorii — Operații cu pierderi mari și agenți locali (pagini PDF: 14, 13).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    40,
    39
   ],
   "pdfPages": [
    14,
    13
   ],
   "section": "Complicații intraoperatorii — Operații cu pierderi mari și agenți locali"
  },
  "learningObjective": "Recunoașterea listei de operații cu pierderi mari și a paletei de agenți topici (Gelfoam, Surgicel, Avitene).",
  "optionRationales": [
   "Lista de operații (bypass, aortă, transplant, prostată, șunt portocav, traumă) este explicită.",
   "Paleta de agenți locali, cu denumirile comerciale, este enumerată.",
   "Indicația pe puncte de sutură/linii vasculare/disecție este enunțată.",
   "Textul leagă reacția hemolitică acută de producerea CID.",
   "Prostata și șuntul portocav sunt pe lista de pierderi mari."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Scoate prostata și șuntul portocav de pe lista de pierderi mari și rezervă Gelfoam/Surgicel pentru CID."
  },
  "textbookExpressions": [
   "Gelfoam",
   "Surgicel"
  ]
 },
 {
  "id": "hemostaza-adv-026",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Un pacient sub anestezie generală primește sânge incompatibil. Sunt adevărate afirmațiile:",
  "options": [
   "Agitația și durerile de spate, simptome obișnuite ale incompatibilității, nu sunt evidente sub anestezie generală",
   "Manifestarea poate fi sângerarea generalizată prin CID",
   "Hemoglobinuria și oliguria oferă dovezi clinice suplimentare de CID",
   "Frisonul și durerea lombară rămân evidente sub anestezie, CID fiind exclusă",
   "Hemoglobinuria infirmă CID-ul, oliguria fiind un semn de supraîncărcare volemică izolată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Agitația și durerile de spate, simptome obișnuite ale incompatibilității, nu sunt evidente sub anestezie generală — Corect: Textul precizează că simptomele obișnuite nu sunt evidente sub anestezie generală.\n\nManifestarea poate fi sângerarea generalizată prin CID — Corect: Sângerarea generalizată prin CID este manifestarea descrisă.\n\nHemoglobinuria și oliguria oferă dovezi clinice suplimentare de CID — Corect: Hemoglobinuria și oliguria sunt probele clinice suplimentare.\n\nFrisonul și durerea lombară rămân evidente sub anestezie, CID fiind exclusă — Incorect: Sub AG aceste simptome lipsesc; CID este tocmai consecința.\n\nHemoglobinuria infirmă CID-ul, oliguria fiind un semn de supraîncărcare volemică izolată — Incorect: Perechea hemoglobinurie-oligurie susține, nu infirmă, CID-ul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 40, Transfuzia incompatibilă sub anestezie — CID fără simptome clasice (pagini PDF: 14).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    40
   ],
   "pdfPages": [
    14
   ],
   "section": "Transfuzia incompatibilă sub anestezie — CID fără simptome clasice"
  },
  "learningObjective": "Recunoașterea faptului că, sub AG, incompatibilitatea se demască prin sângerare difuză, hemoglobinurie și oligurie, nu prin agitație.",
  "optionRationales": [
   "Textul precizează că simptomele obișnuite nu sunt evidente sub anestezie generală.",
   "Sângerarea generalizată prin CID este manifestarea descrisă.",
   "Hemoglobinuria și oliguria sunt probele clinice suplimentare.",
   "Sub AG aceste simptome lipsesc; CID este tocmai consecința.",
   "Perechea hemoglobinurie-oligurie susține, nu infirmă, CID-ul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Așteaptă frisonul și durerea lombară sub anestezie și neagă CID-ul, contrar paragrafului despre transfuzia incompatibilă."
  },
  "textbookExpressions": [
   "Hemoglobinuria",
   "oliguria"
  ]
 },
 {
  "id": "hemostaza-adv-027",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Hemoragia postoperatorie după bypass sau hepatectomie se caracterizează prin:",
  "options": [
   "Heparina reziduală după bypass cardiopulmonar sau chirurgie vasculară periferică poate cauza hemoragii cu debit scăzut, progresive, sau hemoragii evidente",
   "După hepatectomie parțială extinsă, țesutul restant poate avea nevoie de 3–5 zile pentru a crește producția de factori suficient pentru hemostază",
   "Un deficit dobândit de factori dependenți de vitamina K (II, VII, IX și X) poate apărea la pacienții hrăniți insuficient care primesc antibiotice",
   "Deficitul de factor XIII se corectează în 3–5 zile prin heparină reziduală",
   "Hepatectomia scurtează sinteza factorilor la sub o oră, analog fibrinolizei primare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Heparina reziduală după bypass cardiopulmonar sau chirurgie vasculară periferică poate cauza hemoragii cu debit scăzut, progresive, sau hemoragii evidente — Corect: Heparina reziduală ca și cauză de sângerare progresivă post-bypass/vascular este explicită.\n\nDupă hepatectomie parțială extinsă, țesutul restant poate avea nevoie de 3–5 zile pentru a crește producția de factori suficient pentru hemostază — Corect: Fereastra 3–5 zile a producției de factori după hepatectomie este citată.\n\nUn deficit dobândit de factori dependenți de vitamina K (II, VII, IX și X) poate apărea la pacienții hrăniți insuficient care primesc antibiotice — Corect: Deficitul K-dependent (II, VII, IX, X) la malnutriți cu antibiotice este enunțat.\n\nDeficitul de factor XIII se corectează în 3–5 zile prin heparină reziduală — Incorect: FXIII se confirmă prin dozare, nu prin heparină.\n\nHepatectomia scurtează sinteza factorilor la sub o oră, analog fibrinolizei primare — Incorect: Textul cere zile, nu o oră, până la producția adecvată de factori.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 41, Hemoragii postoperatorii — Heparină reziduală și fereastra 3–5 zile hepatică (pagini PDF: 15).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    41
   ],
   "pdfPages": [
    15
   ],
   "section": "Hemoragii postoperatorii — Heparină reziduală și fereastra 3–5 zile hepatică"
  },
  "learningObjective": "Diferențierea heparinei reziduale post-bypass de fereastra de 3–5 zile a ficatului restant, versus FXIII din același interval.",
  "optionRationales": [
   "Heparina reziduală ca și cauză de sângerare progresivă post-bypass/vascular este explicită.",
   "Fereastra 3–5 zile a producției de factori după hepatectomie este citată.",
   "Deficitul K-dependent (II, VII, IX, X) la malnutriți cu antibiotice este enunțat.",
   "FXIII se confirmă prin dozare, nu prin heparină.",
   "Textul cere zile, nu o oră, până la producția adecvată de factori."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă fereastra hepatică de 3–5 zile cu heparina reziduală și cu FXIII, trei cauze din același paragraf de sângerare tardivă."
  },
  "textbookExpressions": [
   "3-5 zile",
   "bypass"
  ]
 },
 {
  "id": "hemostaza-adv-028",
  "topicId": "hemostaza",
  "type": "CS",
  "stem": "Cel mai important prim pas în evaluarea riscului de TEV este istoricul. Alertează către hipercoagulabilitate:",
  "options": [
   "Un episod de TEV înainte de 40 de ani sau un TEV neprovocat la orice vârstă, un episod recurent, ori tromboză cu sediu neobișnuit (ex. vene mezenterice)",
   "Un TEV post-fractură de femur la 70 de ani, fără recurență și fără istoric familial",
   "Un INR terapeutic sub warfarină, fără evenimente anterioare",
   "O hernie inghinală electivă la tânărul fără antecedente",
   "Un timp de sângerare prelungit, fără tromboză în antecedente"
  ],
  "correct": [
   0
  ],
  "explanation": "Un episod de TEV înainte de 40 de ani sau un TEV neprovocat la orice vârstă, un episod recurent, ori tromboză cu sediu neobișnuit (ex. vene mezenterice) — Corect: Cele patru elemente — vârstă <40, neprovocat, recurență, sediu neobișnuit/mezenteric — sunt enumerate ca primul pas.\n\nUn TEV post-fractură de femur la 70 de ani, fără recurență și fără istoric familial — Incorect: TEV-ul provocat de fractură la vârstnic, fără recurență, nu este clusterul citat.\n\nUn INR terapeutic sub warfarină, fără evenimente anterioare — Incorect: INR-ul terapeutic nu înlocuiește anamneza de TEV.\n\nO hernie inghinală electivă la tânărul fără antecedente — Incorect: Hernia curată fără antecedente nu alertează.\n\nUn timp de sângerare prelungit, fără tromboză în antecedente — Incorect: Timpul de sângerare privește hemostaza hemoragică, nu riscul trombotic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 42, Hipercoagulabilitate — Istoricul: <40 de ani și sediu mezenteric (pagini PDF: 16).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    42
   ],
   "pdfPages": [
    16
   ],
   "section": "Hipercoagulabilitate — Istoricul: <40 de ani și sediu mezenteric"
  },
  "learningObjective": "Recunoașterea clusterului anamnestic (TEV <40 de ani, neprovocat, recurent, mezenteric) ca semnal de hipercoagulabilitate.",
  "optionRationales": [
   "Cele patru elemente — vârstă <40, neprovocat, recurență, sediu neobișnuit/mezenteric — sunt enumerate ca primul pas.",
   "TEV-ul provocat de fractură la vârstnic, fără recurență, nu este clusterul citat.",
   "INR-ul terapeutic nu înlocuiește anamneza de TEV.",
   "Hernia curată fără antecedente nu alertează.",
   "Timpul de sângerare privește hemostaza hemoragică, nu riscul trombotic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește TEV-ul <40 de ani/mezenteric cu un eveniment provocat la vârstnic, capcana clasică a anamnezei de hipercoagulabilitate."
  },
  "textbookExpressions": [
   "40 de ani",
   "venelor mezenterice"
  ]
 },
 {
  "id": "hemostaza-adv-029",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Indicațiile transfuziei de plasmă proaspăt congelată includ:",
  "options": [
   "Deficite multiple de factori (PT sau aPTT anormal crescute) cu sângerare clinică sau înaintea unei proceduri invazive",
   "Cauze posibile: coagulopatie de diluție după transfuzie masivă, defecte congenitale de sinteză, warfarină sau heparină, afecțiuni hepatice, malnutriție",
   "PPC este inutilă în coagulopatia de diluție, fiind rezervată anemiei cronice izolate",
   "O unitate de PPC crește hematocritul cu 3%, identic MER",
   "PPC înlocuiește masa trombocitară la pragul 30.000–50.000/µL"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Deficite multiple de factori (PT sau aPTT anormal crescute) cu sângerare clinică sau înaintea unei proceduri invazive — Corect: Indicația PT/aPTT crescute plus sângerare sau procedură invazivă este explicită.\n\nCauze posibile: coagulopatie de diluție după transfuzie masivă, defecte congenitale de sinteză, warfarină sau heparină, afecțiuni hepatice, malnutriție — Corect: Lista cauzelor (diluție, congenital, warfarină/heparină, ficat, malnutriție) este enumerată.\n\nPPC este inutilă în coagulopatia de diluție, fiind rezervată anemiei cronice izolate — Incorect: Diluția după transfuzie masivă este tocmai o indicație, nu o contraindicație.\n\nO unitate de PPC crește hematocritul cu 3%, identic MER — Incorect: Creșterea Ht cu 3% aparține MER, nu PPC.\n\nPPC înlocuiește masa trombocitară la pragul 30.000–50.000/µL — Incorect: Pragul 30.000–50.000 este al trombocitelor, nu al plasmei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 43, Transfuzia de PPC — PT/aPTT și procedură invazivă (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    43
   ],
   "pdfPages": [
    17
   ],
   "section": "Transfuzia de PPC — PT/aPTT și procedură invazivă"
  },
  "learningObjective": "Aplicarea indicației pe deficite multiple cu sângerare sau gest invaziv, plus lista etiologică, versus confuzia cu MER/trombocite.",
  "optionRationales": [
   "Indicația PT/aPTT crescute plus sângerare sau procedură invazivă este explicită.",
   "Lista cauzelor (diluție, congenital, warfarină/heparină, ficat, malnutriție) este enumerată.",
   "Diluția după transfuzie masivă este tocmai o indicație, nu o contraindicație.",
   "Creșterea Ht cu 3% aparține MER, nu PPC.",
   "Pragul 30.000–50.000 este al trombocitelor, nu al plasmei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie PPC efectul de hematocrit al MER și pragul trombocitar, două cifre din pagini alăturate."
  },
  "textbookExpressions": [
   "Transfuzia de PPC",
   "proceduri invazive"
  ]
 },
 {
  "id": "hemostaza-adv-030",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Reacțiile febrile transfuzionale și boala grefă-contra-gazdă se caracterizează prin:",
  "options": [
   "Reacțiile febrile sunt cele mai frecvente reacții imunologice, de obicei prin anticorpi antileucocitari (febră, frisoane, tahicardie); transfuzia se oprește, terapia este suportivă",
   "GVHD apare la imunodeprimați prin leucocite donatoare, cu debut insidios la câteva săptămâni (febră, eritem, disfuncție hepatică, diaree) și se previne prin MER deleucocitată și/sau eritrocite iradiate",
   "Reacțiile febrile sunt cele mai rare, GVHD debutând în 1–2 ore ca LPAT",
   "Iradierea eritrocitelor precipită GVHD, anticorpii antileucocitari fiind protectori",
   "GVHD se tratează prin creșterea vitezei de transfuzie, identic supraîncărcării volemice"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Reacțiile febrile sunt cele mai frecvente reacții imunologice, de obicei prin anticorpi antileucocitari (febră, frisoane, tahicardie); transfuzia se oprește, terapia este suportivă — Corect: Frecvența maximă, anticorpii antileucocitari și conduita (oprire, suport) sunt explicite pe pagina anterioară.\n\nGVHD apare la imunodeprimați prin leucocite donatoare, cu debut insidios la câteva săptămâni (febră, eritem, disfuncție hepatică, diaree) și se previne prin MER deleucocitată și/sau eritrocite iradiate — Corect: Mecanismul, fereastra de săptămâni, tabloul și prevenția prin deleucocitare/iradiere sunt enunțate.\n\nReacțiile febrile sunt cele mai rare, GVHD debutând în 1–2 ore ca LPAT — Incorect: Febrilele sunt cele mai frecvente; 1–2 ore este fereastra LPAT, nu a GVHD.\n\nIradierea eritrocitelor precipită GVHD, anticorpii antileucocitari fiind protectori — Incorect: Iradierea previne, nu precipită, GVHD.\n\nGVHD se tratează prin creșterea vitezei de transfuzie, identic supraîncărcării volemice — Incorect: Creșterea vitezei agravează supraîncărcarea, nu tratează GVHD.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 45, 44, Reacții imunologice — Febrile (antileucocitare) versus GVHD iradiat (pagini PDF: 19, 18).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    45,
    44
   ],
   "pdfPages": [
    19,
    18
   ],
   "section": "Reacții imunologice — Febrile (antileucocitare) versus GVHD iradiat"
  },
  "learningObjective": "Contrastarea reacției febrile (cea mai frecventă, antileucocitară) de GVHD-ul tardiv prevenit prin deleucocitare/iradiere.",
  "optionRationales": [
   "Frecvența maximă, anticorpii antileucocitari și conduita (oprire, suport) sunt explicite pe pagina anterioară.",
   "Mecanismul, fereastra de săptămâni, tabloul și prevenția prin deleucocitare/iradiere sunt enunțate.",
   "Febrilele sunt cele mai frecvente; 1–2 ore este fereastra LPAT, nu a GVHD.",
   "Iradierea previne, nu precipită, GVHD.",
   "Creșterea vitezei agravează supraîncărcarea, nu tratează GVHD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează fereastra de săptămâni a GVHD cu 1–2 ore ale LPAT și inversează rolul iradierii."
  },
  "textbookExpressions": [
   "reacţii febrile",
   "eritrocite iradiate"
  ]
 },
 {
  "id": "hemostaza-adv-031",
  "topicId": "hemostaza",
  "type": "CM",
  "stem": "Reacția hemolitică acută transfuzională se caracterizează prin:",
  "options": [
   "Poate debuta rapid după doar 50 mL de sânge de la donator",
   "Transfuzia se oprește imediat; restul unității și o probă a pacientului se trimit pentru ABO/Rh, compatibilitate și culturi (diagnostic diferențial de contaminare)",
   "Unii clinicieni recomandă manitol și/sau furosemid pentru a menține diureza; IRA severă poate necesita hemodializă",
   "Simptomele includ senzație de cald sau rece, eritem facial, dureri precordiale și lombare; semnele: febră, hipotensiune, tahicardie, hematurie, hemoglobinurie, sângerare",
   "Se continuă transfuzia cu viteză crescută, manitolul fiind contraindicat, pragul de 50 mL fiind inofensiv"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Poate debuta rapid după doar 50 mL de sânge de la donator — Corect: Pragul de doar 50 mL este explicit.\n\nTransfuzia se oprește imediat; restul unității și o probă a pacientului se trimit pentru ABO/Rh, compatibilitate și culturi (diagnostic diferențial de contaminare) — Corect: Oprirea, retrimiterea pentru ABO/compatibilitate și culturile sunt listate.\n\nUnii clinicieni recomandă manitol și/sau furosemid pentru a menține diureza; IRA severă poate necesita hemodializă — Corect: Manitolul/furosemidul și hemodializa sunt enunțate.\n\nSimptomele includ senzație de cald sau rece, eritem facial, dureri precordiale și lombare; semnele: febră, hipotensiune, tahicardie, hematurie, hemoglobinurie, sângerare — Corect: Simptomele și semnele, inclusiv hemoglobinuria, sunt enumerate.\n\nSe continuă transfuzia cu viteză crescută, manitolul fiind contraindicat, pragul de 50 mL fiind inofensiv — Incorect: Textul cere oprirea imediată, nu accelerarea; 50 mL poate declanșa reacția.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 4, p. 45, Reacția hemolitică acută — 50 mL, oprire și manitol (pagini PDF: 19).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 4,
   "printedPages": [
    45
   ],
   "pdfPages": [
    19
   ],
   "section": "Reacția hemolitică acută — 50 mL, oprire și manitol"
  },
  "learningObjective": "Fixarea pragului de 50 mL, a opririi imediate cu retrimitere la laborator și a manitolului/furosemidului pentru diureză.",
  "optionRationales": [
   "Pragul de doar 50 mL este explicit.",
   "Oprirea, retrimiterea pentru ABO/compatibilitate și culturile sunt listate.",
   "Manitolul/furosemidul și hemodializa sunt enunțate.",
   "Simptomele și semnele, inclusiv hemoglobinuria, sunt enumerate.",
   "Textul cere oprirea imediată, nu accelerarea; 50 mL poate declanșa reacția."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Continuă transfuzia după 50 mL și interzice manitolul, două gesturi inversate din algoritmul hemolitic."
  },
  "textbookExpressions": [
   "50 mL de sânge",
   "manito"
  ]
 }
];
