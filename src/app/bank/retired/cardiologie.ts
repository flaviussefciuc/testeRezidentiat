import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_CARDIOLOGIE:(Question&Record<string,unknown>)[]=[
 {
  "id": "cardiologie-adv-001",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Suportul vital de bază la adult și la copil:",
  "options": [
   "Fiecare respirație de salvare eficientă trebuie să dureze 3-4 secunde, pentru a asigura o expansiune toracică vizibilă",
   "Sternul este comprimat la o adâncime de 5-6 cm, cu o frecvență de 100-120 pe minut, permițând revenirea sternului după fiecare compresiune",
   "Raportul compresiuni toracice:ventilații este de 30:2 la adulți și de 15:2 la pacienții pediatrici",
   "RCP se întrerupe la fiecare 2 minute pentru reevaluarea stării victimei, chiar în absența semnelor de viață",
   "La copii, salvatorul unic aplică respirații de salvare și cel puțin un minut de RCP înainte de a solicita ajutor specializat"
  ],
  "correct": [
   1,
   2,
   4
  ],
  "explanation": "Fiecare respirație de salvare eficientă trebuie să dureze 3-4 secunde, pentru a asigura o expansiune toracică vizibilă — Incorect: Textul precizează că fiecare dintre cele două respirații eficiente durează 1 secundă, nu 3-4 secunde.\n\nSternul este comprimat la o adâncime de 5-6 cm, cu o frecvență de 100-120 pe minut, permițând revenirea sternului după fiecare compresiune — Corect: Textul indică comprimarea sternului la 5-6 cm, cu 100-120 compresiuni pe minut, cu revenirea sternului între compresiuni.\n\nRaportul compresiuni toracice:ventilații este de 30:2 la adulți și de 15:2 la pacienții pediatrici — Corect: Raportul este 30:2 la adulți și 15:2 la pacienții pediatrici, conform textului.\n\nRCP se întrerupe la fiecare 2 minute pentru reevaluarea stării victimei, chiar în absența semnelor de viață — Incorect: Textul precizează că RCP nu trebuie întreruptă pentru reevaluare, decât dacă victima prezintă semne de viață și reîncepe să respire normal.\n\nLa copii, salvatorul unic aplică respirații de salvare și cel puțin un minut de RCP înainte de a solicita ajutor specializat — Corect: La copii, stopul respirator fiind mai frecvent, salvatorul unic aplică respirații de salvare și cel puțin un minut de RCP înainte de a cere ajutor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1046, Proceduri terapeutice — Suportul vital de bază (pagini PDF: 209).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1046
   ],
   "pdfPages": [
    209
   ],
   "section": "Proceduri terapeutice — Suportul vital de bază"
  },
  "learningObjective": "Aplicarea parametrilor numerici ai compresiunilor și ventilațiilor din suportul vital de bază, cu diferențele dintre adult și copil.",
  "optionRationales": [
   "Textul precizează că fiecare dintre cele două respirații eficiente durează 1 secundă, nu 3-4 secunde.",
   "Textul indică comprimarea sternului la 5-6 cm, cu 100-120 compresiuni pe minut, cu revenirea sternului între compresiuni.",
   "Raportul este 30:2 la adulți și 15:2 la pacienții pediatrici, conform textului.",
   "Textul precizează că RCP nu trebuie întreruptă pentru reevaluare, decât dacă victima prezintă semne de viață și reîncepe să respire normal.",
   "La copii, stopul respirator fiind mai frecvent, salvatorul unic aplică respirații de salvare și cel puțin un minut de RCP înainte de a cere ajutor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Combină trei praguri numerice reale (adâncime, frecvență, raport pediatric) cu doi distractori care alterează durata ventilației și introduc o pauză de reevaluare pe care textul o interzice."
  },
  "textbookExpressions": [
   "5-6 cm",
   "hands only BLS"
  ]
 },
 {
  "id": "cardiologie-adv-002",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Un bărbat de 78 de ani cu sincope repetate prezintă pe ECG disociație atrio-ventriculară completă, ritm ventricular de 30 b.p.m. și complexe QRS cu durata de 0,16 sec. Identificați afirmația corectă:",
  "options": [
   "Ritmul de scăpare provine din fasciculul His și este relativ stabil, cu frecvență adecvată de 50-60 b.p.m.",
   "Blocul poate răspunde durabil la atropină intravenos, cardiostimularea nefiind necesară",
   "Ritmul de scăpare are originea sub fasciculul His, sediul blocului fiind distal în sistemul His-Purkinje",
   "La această vârstă, cauza cea mai probabilă este boala Lenegre, cu proces inflamator al sistemului de conducere proximal",
   "Cardiostimularea permanentă ameliorează simptomele, dar nu influențează semnificativ mortalitatea"
  ],
  "correct": [
   2
  ],
  "explanation": "Ritmul de scăpare provine din fasciculul His și este relativ stabil, cu frecvență adecvată de 50-60 b.p.m. — Incorect: Ritmul din fasciculul His are complexe înguste (<0,12 sec) și 50-60 b.p.m.; aici complexele sunt largi și ritmul este lent.\n\nBlocul poate răspunde durabil la atropină intravenos, cardiostimularea nefiind necesară — Incorect: Atropina poate fi utilă doar în BAV cu complexe înguste, debut recent și cauze tranzitorii, nu în blocul distal cu complexe largi.\n\nRitmul de scăpare are originea sub fasciculul His, sediul blocului fiind distal în sistemul His-Purkinje — Corect: Textul precizează că ritmul de scăpare cu QRS >0,12 sec are originea sub fasciculul His, cu sediul blocului distal în sistemul His-Purkinje, fiind lent (15-40 b.p.m.) și instabil.\n\nLa această vârstă, cauza cea mai probabilă este boala Lenegre, cu proces inflamator al sistemului de conducere proximal — Incorect: La vârstnici cauza frecventă este boala Lev (fibroză degenerativă distală); boala Lenegre apare la tineri.\n\nCardiostimularea permanentă ameliorează simptomele, dar nu influențează semnificativ mortalitatea — Incorect: Textul precizează că cardiostimularea permanentă este indicată întrucât reduce semnificativ mortalitatea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1055, Bradicardiile și tulburările de conducere — Bloc AV gradul III (complet) (pagini PDF: 216).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1055
   ],
   "pdfPages": [
    216
   ],
   "section": "Bradicardiile și tulburările de conducere — Bloc AV gradul III (complet)"
  },
  "learningObjective": "Localizarea sediului blocului AV complet pe baza duratei QRS și a frecvenței ritmului de scăpare, cu implicațiile etiologice și terapeutice.",
  "optionRationales": [
   "Ritmul din fasciculul His are complexe înguste (<0,12 sec) și 50-60 b.p.m.; aici complexele sunt largi și ritmul este lent.",
   "Atropina poate fi utilă doar în BAV cu complexe înguste, debut recent și cauze tranzitorii, nu în blocul distal cu complexe largi.",
   "Textul precizează că ritmul de scăpare cu QRS >0,12 sec are originea sub fasciculul His, cu sediul blocului distal în sistemul His-Purkinje, fiind lent (15-40 b.p.m.) și instabil.",
   "La vârstnici cauza frecventă este boala Lev (fibroză degenerativă distală); boala Lenegre apare la tineri.",
   "Textul precizează că cardiostimularea permanentă este indicată întrucât reduce semnificativ mortalitatea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere deducerea sediului blocului din parametrii ECG ai vignetei și inversează perechea Lev/Lenegre după vârstă, precum și efectul cardiostimulării asupra mortalității."
  },
  "textbookExpressions": [
   "sincopa Stokes-Adams",
   "Boala Lev"
  ]
 },
 {
  "id": "cardiologie-adv-003",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Următoarele afirmații despre căile accesorii din tahicardia prin reintrare atrioventriculară sunt adevărate:",
  "options": [
   "Sunt cel mai frecvent localizate pe partea stângă, dar pot apărea oriunde în apropierea șanțului atrioventricular",
   "În aproximativ 10% din cazuri pot fi prezente multiple căi accesorii la același pacient",
   "Preexcitația se traduce pe ECG printr-un interval PR prelungit și un complex QRS îngust, prin conducere lentă pe calea accesorie",
   "Căile ascunse conduc doar dinspre ventricul spre atriu și nu sunt vizibile pe ECG-ul de suprafață în ritm sinusal",
   "Fibrele Mahaim sunt fibre atriofasciculare sau nodofasciculare care pătrund în miocardul ventricular în regiunea ramurii drepte"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "Sunt cel mai frecvent localizate pe partea stângă, dar pot apărea oriunde în apropierea șanțului atrioventricular — Corect: Textul precizează că căile accesorii sunt cel mai frecvent localizate pe partea stângă, dar pot apărea oriunde în apropierea șanțului AV.\n\nÎn aproximativ 10% din cazuri pot fi prezente multiple căi accesorii la același pacient — Corect: Textul indică prezența de multiple căi accesorii în aproximativ 10% din cazuri.\n\nPreexcitația se traduce pe ECG printr-un interval PR prelungit și un complex QRS îngust, prin conducere lentă pe calea accesorie — Incorect: Textul indică opusul: preexcitația produce interval PR scurt și complex QRS larg, prin lărgirea pantei ascendente (unda delta).\n\nCăile ascunse conduc doar dinspre ventricul spre atriu și nu sunt vizibile pe ECG-ul de suprafață în ritm sinusal — Corect: Căile care conduc doar dinspre ventricul spre atriu nu sunt vizibile pe ECG în ritm sinusal, fiind denumite căi ascunse.\n\nFibrele Mahaim sunt fibre atriofasciculare sau nodofasciculare care pătrund în miocardul ventricular în regiunea ramurii drepte — Corect: Fibrele Mahaim sunt descrise ca fibre atriofasciculare sau nodofasciculare care pătrund în miocardul ventricular în regiunea ramurii drepte.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1058, Tahicardiile supraventriculare — Tahicardia prin reintrare atrioventriculară (pagini PDF: 219).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1058
   ],
   "pdfPages": [
    219
   ],
   "section": "Tahicardiile supraventriculare — Tahicardia prin reintrare atrioventriculară"
  },
  "learningObjective": "Cunoașterea anatomiei și a comportamentului electrofiziologic al căilor accesorii (localizare, multiplicitate, căi ascunse/manifeste, fibre Mahaim) și a semnelor ECG de preexcitație.",
  "optionRationales": [
   "Textul precizează că căile accesorii sunt cel mai frecvent localizate pe partea stângă, dar pot apărea oriunde în apropierea șanțului AV.",
   "Textul indică prezența de multiple căi accesorii în aproximativ 10% din cazuri.",
   "Textul indică opusul: preexcitația produce interval PR scurt și complex QRS larg, prin lărgirea pantei ascendente (unda delta).",
   "Căile care conduc doar dinspre ventricul spre atriu nu sunt vizibile pe ECG în ritm sinusal, fiind denumite căi ascunse.",
   "Fibrele Mahaim sunt descrise ca fibre atriofasciculare sau nodofasciculare care pătrund în miocardul ventricular în regiunea ramurii drepte."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru detalii electrofiziologice fine sunt adevărate, iar singurul distractor inversează ambele componente ale aspectului ECG de preexcitație."
  },
  "textbookExpressions": [
   "fascicule Kent",
   "căi ascunse"
  ]
 },
 {
  "id": "cardiologie-adv-004",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "O femeie de 68 de ani, hipertensivă, fără alte comorbidități, este diagnosticată cu fibrilație atrială non-valvulară. Alegeți afirmațiile corecte privind stratificarea riscului și profilaxia tromboembolică:",
  "options": [
   "Scorul CHA2DS2-VASc al pacientei este de 3 puncte",
   "Antiagregantele plachetare reprezintă o alternativă recomandată anticoagulării pentru prevenția accidentului vascular cerebral",
   "Riscul anual de AVC ischemic corespunzător categoriei sale este de 2,2%, cu indicație de anticoagulare orală",
   "Scorul este de 2 puncte, deoarece vârsta sub 75 de ani nu se punctează în acest scor",
   "Anticoagulantele orale directe nu necesită monitorizarea INR și au mai puține interacțiuni medicamentoase decât warfarina"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "explanation": "Scorul CHA2DS2-VASc al pacientei este de 3 puncte — Corect: Hipertensiunea (1), vârsta 65-74 ani (1) și sexul feminin (1) totalizează 3 puncte conform Cadranului 30.15.\n\nAntiagregantele plachetare reprezintă o alternativă recomandată anticoagulării pentru prevenția accidentului vascular cerebral — Incorect: Textul precizează că folosirea antiagregantelor plachetare pentru prevenția AVC nu este recomandată.\n\nRiscul anual de AVC ischemic corespunzător categoriei sale este de 2,2%, cu indicație de anticoagulare orală — Corect: Cadranul 30.15 indică pentru 2+ puncte un risc anual de 2,2% și recomandă anticoagularea orală.\n\nScorul este de 2 puncte, deoarece vârsta sub 75 de ani nu se punctează în acest scor — Incorect: Vârsta de 65-74 ani se punctează cu 1 punct, iar vârsta ≥75 ani cu 2 puncte; scorul pacientei este 3.\n\nAnticoagulantele orale directe nu necesită monitorizarea INR și au mai puține interacțiuni medicamentoase decât warfarina — Corect: Textul precizează că DOAC nu necesită monitorizarea INR și au mai puține interacțiuni medicamentoase sau alimentare comparativ cu warfarina.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1062, Tahicardiile supraventriculare — Fibrilația atrială: anticoagularea (pagini PDF: 223).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1062
   ],
   "pdfPages": [
    223
   ],
   "section": "Tahicardiile supraventriculare — Fibrilația atrială: anticoagularea"
  },
  "learningObjective": "Calcularea scorului CHA2DS2-VASc pe un caz concret și alegerea strategiei antitrombotice conform riscului estimat.",
  "optionRationales": [
   "Hipertensiunea (1), vârsta 65-74 ani (1) și sexul feminin (1) totalizează 3 puncte conform Cadranului 30.15.",
   "Textul precizează că folosirea antiagregantelor plachetare pentru prevenția AVC nu este recomandată.",
   "Cadranul 30.15 indică pentru 2+ puncte un risc anual de 2,2% și recomandă anticoagularea orală.",
   "Vârsta de 65-74 ani se punctează cu 1 punct, iar vârsta ≥75 ani cu 2 puncte; scorul pacientei este 3.",
   "Textul precizează că DOAC nu necesită monitorizarea INR și au mai puține interacțiuni medicamentoase sau alimentare comparativ cu warfarina."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Necesită aplicarea corectă a punctajului diferențiat pe vârstă și sex, iar distractorii oferă un scor plauzibil greșit și o strategie (antiagregante) explicit nerecomandată."
  },
  "textbookExpressions": [
   "INR de 2,0-3,0",
   "urechiuşei atriale"
  ]
 },
 {
  "id": "cardiologie-adv-005",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre medicamentele antiaritmice, conform clasificării Vaughan Williams:",
  "options": [
   "Antiaritmicele de clasă Ib (lidocaină, mexiletină) scurtează potențialul de acțiune",
   "Sotalolul are și acțiune betablocantă, riscul de torsadă a vârfurilor fiind redus în prezența hipopotasemiei",
   "Antiaritmicele de clasă Ic (flecainidă, propafenonă) nu afectează durata potențialului de acțiune",
   "Utilizarea agenților de clasă I ar trebui limitată la pacienții fără boală coronariană sau boală cardiacă structurală semnificativă",
   "Dronedarona scade recurența fibrilației atriale, dar este nocivă în disfuncția ventriculară stângă și contraindicată în insuficiența cardiacă"
  ],
  "correct": [
   0,
   2,
   3,
   4
  ],
  "explanation": "Antiaritmicele de clasă Ib (lidocaină, mexiletină) scurtează potențialul de acțiune — Corect: Cadranul 30.19 indică pentru clasa Ib (lidocaină, mexiletină) scurtarea potențialului de acțiune.\n\nSotalolul are și acțiune betablocantă, riscul de torsadă a vârfurilor fiind redus în prezența hipopotasemiei — Incorect: Textul indică opusul: riscul de torsadă sub sotalol este crescut dacă pacientul prezintă hipopotasemie, în special sub diuretice.\n\nAntiaritmicele de clasă Ic (flecainidă, propafenonă) nu afectează durata potențialului de acțiune — Corect: Cadranul 30.19 indică pentru clasa Ic (flecainidă, propafenonă) lipsa efectului asupra potențialului de acțiune.\n\nUtilizarea agenților de clasă I ar trebui limitată la pacienții fără boală coronariană sau boală cardiacă structurală semnificativă — Corect: După trialurile CAST, utilizarea flecainidei și a tuturor agenților de clasă I trebuie limitată la pacienții fără boală coronariană, disfuncție de VS sau boală structurală.\n\nDronedarona scade recurența fibrilației atriale, dar este nocivă în disfuncția ventriculară stângă și contraindicată în insuficiența cardiacă — Corect: Textul precizează că dronedarona scade recurența FA, dar este nocivă în disfuncția VS și contraindicată în insuficiența cardiacă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1067, Aritmiile ventriculare — Medicamentele antiaritmice: clasificarea Vaughan Williams (pagini PDF: 228).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1067
   ],
   "pdfPages": [
    228
   ],
   "section": "Aritmiile ventriculare — Medicamentele antiaritmice: clasificarea Vaughan Williams"
  },
  "learningObjective": "Diferențierea subclaselor de antiaritmice după efectul pe potențialul de acțiune și cunoașterea restricțiilor de utilizare în boala cardiacă structurală.",
  "optionRationales": [
   "Cadranul 30.19 indică pentru clasa Ib (lidocaină, mexiletină) scurtarea potențialului de acțiune.",
   "Textul indică opusul: riscul de torsadă sub sotalol este crescut dacă pacientul prezintă hipopotasemie, în special sub diuretice.",
   "Cadranul 30.19 indică pentru clasa Ic (flecainidă, propafenonă) lipsa efectului asupra potențialului de acțiune.",
   "După trialurile CAST, utilizarea flecainidei și a tuturor agenților de clasă I trebuie limitată la pacienții fără boală coronariană, disfuncție de VS sau boală structurală.",
   "Textul precizează că dronedarona scade recurența FA, dar este nocivă în disfuncția VS și contraindicată în insuficiența cardiacă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Solicită memorarea efectelor opuse ale subclaselor Ia/Ib/Ic asupra potențialului de acțiune și inversează relația dintre hipopotasemie și riscul de torsadă sub sotalol."
  },
  "textbookExpressions": [
   "trialurile CAST",
   "torsada vârfurilor"
  ]
 },
 {
  "id": "cardiologie-adv-006",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații privind medicația insuficienței cardiace cronice sunt adevărate?",
  "options": [
   "Ginecomastia sau durerea mamară apar la aproximativ 1 din 100 de bărbați tratați cu spironolactonă",
   "Nebivololul reduce mortalitatea în toate gradele de severitate ale insuficienței cardiace, indiferent de vârstă",
   "În studiul RALES, spironolactona a redus mortalitatea totală cu 30% în insuficiența cardiacă severă",
   "Sacubitril/valsartan se administrează concomitent cu un IECA, dubla inhibiție potențând efectul",
   "În studiul EPHESUS, eplerenona a redus moartea subită cardiacă cu 21%, fără apariția ginecomastiei"
  ],
  "correct": [
   2,
   4
  ],
  "explanation": "Ginecomastia sau durerea mamară apar la aproximativ 1 din 100 de bărbați tratați cu spironolactonă — Incorect: Textul precizează că ginecomastia sau durerea mamară au apărut la 1 din 10 bărbați, nu la 1 din 100.\n\nNebivololul reduce mortalitatea în toate gradele de severitate ale insuficienței cardiace, indiferent de vârstă — Incorect: Bisoprololul și carvedilolul reduc mortalitatea în toate gradele de severitate; nebivololul se utilizează în IC stabilă ușoară-moderată la pacienți peste 70 de ani.\n\nÎn studiul RALES, spironolactona a redus mortalitatea totală cu 30% în insuficiența cardiacă severă — Corect: Textul precizează că în RALES spironolactona a redus mortalitatea totală cu 30% în insuficiența cardiacă severă.\n\nSacubitril/valsartan se administrează concomitent cu un IECA, dubla inhibiție potențând efectul — Incorect: Cadranul 30.25 indică oprirea IECA cu 3 zile înainte de începerea sacubitril/valsartan, nu asocierea lor.\n\nÎn studiul EPHESUS, eplerenona a redus moartea subită cardiacă cu 21%, fără apariția ginecomastiei — Corect: Textul precizează că în EPHESUS eplerenona a redus mortalitatea totală cu 15% și moartea subită cu 21%, fără ginecomastie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1074, Insuficiența cardiacă — Tratament: antagoniștii de aldosteron și ARNI (pagini PDF: 235).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1074
   ],
   "pdfPages": [
    235
   ],
   "section": "Insuficiența cardiacă — Tratament: antagoniștii de aldosteron și ARNI"
  },
  "learningObjective": "Cunoașterea rezultatelor studiilor RALES, EPHESUS și PARADIGM-HF și a precauțiilor specifice fiecărei clase terapeutice.",
  "optionRationales": [
   "Textul precizează că ginecomastia sau durerea mamară au apărut la 1 din 10 bărbați, nu la 1 din 100.",
   "Bisoprololul și carvedilolul reduc mortalitatea în toate gradele de severitate; nebivololul se utilizează în IC stabilă ușoară-moderată la pacienți peste 70 de ani.",
   "Textul precizează că în RALES spironolactona a redus mortalitatea totală cu 30% în insuficiența cardiacă severă.",
   "Cadranul 30.25 indică oprirea IECA cu 3 zile înainte de începerea sacubitril/valsartan, nu asocierea lor.",
   "Textul precizează că în EPHESUS eplerenona a redus mortalitatea totală cu 15% și moartea subită cu 21%, fără ginecomastie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii modifică o frecvență reală a efectului advers (1/10 devine 1/100), atribuie nebivololului beneficiul bisoprololului/carvedilolului și inversează regula de tranziție IECA-ARNI."
  },
  "textbookExpressions": [
   "studiul RALES",
   "PARADIGM-HF"
  ]
 },
 {
  "id": "cardiologie-adv-007",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Un pacient de 66 de ani se prezintă cu tahipnee, ortopnee, raluri subcrepitante bilaterale, TA 80/50 mmHg, frecvență cardiacă 112 b.p.m. și diureză de 0,3 ml/kg pe oră; ecocardiografia evidențiază disfuncție sistolică severă a ventriculului stâng. Alegeți afirmațiile corecte:",
  "options": [
   "Tabloul clinic corespunde șocului cardiogen, conform sindroamelor clinice ale insuficienței cardiace acute",
   "Conform algoritmului ESC, la TAS sub 85 mmHg se indică inotrope și/sau vasopresoare (dopamină și/sau noradrenalină)",
   "Perfuzia de gliceril trinitrat reprezintă tratamentul de primă intenție la această valoare a tensiunii arteriale",
   "Anticoagularea profilactică cu heparină cu greutate moleculară mică este necesară la acest pacient",
   "O valoare a NT-proBNP peste 300 pg/ml ar exclude diagnosticul de insuficiență cardiacă acută"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Tabloul clinic corespunde șocului cardiogen, conform sindroamelor clinice ale insuficienței cardiace acute — Corect: Cadranul 30.28 definește șocul cardiogen prin TAS <90 mmHg, TA medie >30 mmHg, diureză <0,5 ml/kg/oră și frecvență cardiacă >60 b.p.m.\n\nConform algoritmului ESC, la TAS sub 85 mmHg se indică inotrope și/sau vasopresoare (dopamină și/sau noradrenalină) — Corect: Fig. 30.59 indică pentru TAS <85 mmHg inotrope și/sau vasopresoare (dopamină și/sau noradrenalină), după evaluarea încărcării de volum.\n\nPerfuzia de gliceril trinitrat reprezintă tratamentul de primă intenție la această valoare a tensiunii arteriale — Incorect: Vasodilatatoarele (NTG/nitrați) sunt rezervate pacienților cu TAS mai mare; la TAS <85 mmHg algoritmul indică inotrope/vasopresoare.\n\nAnticoagularea profilactică cu heparină cu greutate moleculară mică este necesară la acest pacient — Corect: Textul precizează că toți pacienții cu ICA necesită anticoagulare profilactică cu heparină cu greutate moleculară mică.\n\nO valoare a NT-proBNP peste 300 pg/ml ar exclude diagnosticul de insuficiență cardiacă acută — Incorect: Textul indică opusul: BNP >100 pg/ml sau NT-proBNP >300 pg/ml sunt sugestive pentru insuficiența cardiacă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1077, Insuficiența cardiacă acută — Sindroame clinice, diagnostic și tratament (pagini PDF: 238).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1077
   ],
   "pdfPages": [
    238
   ],
   "section": "Insuficiența cardiacă acută — Sindroame clinice, diagnostic și tratament"
  },
  "learningObjective": "Recunoașterea șocului cardiogen după criteriile hemodinamice și alegerea treptei terapeutice corespunzătoare tensiunii arteriale sistolice în algoritmul ESC.",
  "optionRationales": [
   "Cadranul 30.28 definește șocul cardiogen prin TAS <90 mmHg, TA medie >30 mmHg, diureză <0,5 ml/kg/oră și frecvență cardiacă >60 b.p.m.",
   "Fig. 30.59 indică pentru TAS <85 mmHg inotrope și/sau vasopresoare (dopamină și/sau noradrenalină), după evaluarea încărcării de volum.",
   "Vasodilatatoarele (NTG/nitrați) sunt rezervate pacienților cu TAS mai mare; la TAS <85 mmHg algoritmul indică inotrope/vasopresoare.",
   "Textul precizează că toți pacienții cu ICA necesită anticoagulare profilactică cu heparină cu greutate moleculară mică.",
   "Textul indică opusul: BNP >100 pg/ml sau NT-proBNP >300 pg/ml sunt sugestive pentru insuficiența cardiacă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere încadrarea vignetei în definiția hemodinamică a șocului cardiogen și aplicarea pragului de TAS din algoritm, cu un distractor care inversează semnificația peptidelor natriuretice."
  },
  "textbookExpressions": [
   "clasificarea Forrester",
   "miocardului siderat"
  ]
 },
 {
  "id": "cardiologie-adv-008",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tratamentul farmacologic al anginei stabile:",
  "options": [
   "Verapamilul produce frecvent edeme retromaleolare și tahicardie reflexă, motiv pentru care se preferă amlodipina",
   "Nitrații sunt contraindicați în asociere cu inhibitorii de fosfodiesterază 5 (sildenafil, tadalafil)",
   "Ivabradina inhibă curentul If al nodului sino-atrial și se utilizează în ritm sinusal, cu sau fără beta-blocante",
   "Nicorandilul este un activator al canalelor de potasiu sensibile la ATP, cu proprietăți de nitrat",
   "Ranolazina este metabolizată de citocromul P450 3A4 și poate prelungi intervalul QT"
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "explanation": "Verapamilul produce frecvent edeme retromaleolare și tahicardie reflexă, motiv pentru care se preferă amlodipina — Incorect: Cadranul 30.33 atribuie verapamilului constipația; edemele retromaleolare (amlodipina, diltiazem) și tahicardia reflexă (amlodipina) aparțin altor blocante de calciu.\n\nNitrații sunt contraindicați în asociere cu inhibitorii de fosfodiesterază 5 (sildenafil, tadalafil) — Corect: Cadranul 30.33 precizează contraindicația nitraților în asociere cu inhibitorii de fosfodiesterază 5.\n\nIvabradina inhibă curentul If al nodului sino-atrial și se utilizează în ritm sinusal, cu sau fără beta-blocante — Corect: Ivabradina inhibă potențialul de pacemaker If în nodul sino-atrial și se utilizează în ritm sinusal ± beta-blocante.\n\nNicorandilul este un activator al canalelor de potasiu sensibile la ATP, cu proprietăți de nitrat — Corect: Nicorandilul este descris ca activator de canale de potasiu sensibile la ATP cu proprietăți de nitrat, cu vasodilatație coronară și periferică.\n\nRanolazina este metabolizată de citocromul P450 3A4 și poate prelungi intervalul QT — Corect: Ranolazina este metabolizată de citocromul P450 3A4, iar reacțiile adverse includ QT lung.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1083, Angina — Tratamentul farmacologic al anginei stabile (Cadranul 30.33) (pagini PDF: 244).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1083
   ],
   "pdfPages": [
    244
   ],
   "section": "Angina — Tratamentul farmacologic al anginei stabile (Cadranul 30.33)"
  },
  "learningObjective": "Cunoașterea mecanismelor, precauțiilor și reacțiilor adverse specifice ale claselor de antianginoase din Cadranul 30.33.",
  "optionRationales": [
   "Cadranul 30.33 atribuie verapamilului constipația; edemele retromaleolare (amlodipina, diltiazem) și tahicardia reflexă (amlodipina) aparțin altor blocante de calciu.",
   "Cadranul 30.33 precizează contraindicația nitraților în asociere cu inhibitorii de fosfodiesterază 5.",
   "Ivabradina inhibă potențialul de pacemaker If în nodul sino-atrial și se utilizează în ritm sinusal ± beta-blocante.",
   "Nicorandilul este descris ca activator de canale de potasiu sensibile la ATP cu proprietăți de nitrat, cu vasodilatație coronară și periferică.",
   "Ranolazina este metabolizată de citocromul P450 3A4, iar reacțiile adverse includ QT lung."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru mecanisme farmacologice puțin cunoscute sunt corecte, iar distractorul atribuie verapamilului reacțiile adverse specifice dihidropiridinelor din același tabel."
  },
  "textbookExpressions": [
   "fosfene",
   "canale de potasiu sensibile la ATP"
  ]
 },
 {
  "id": "cardiologie-adv-009",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "În sindromul coronarian acut se recomandă:",
  "options": [
   "Prasugrel 300-600 mg doză de încărcare, apoi 75 mg pe zi, asociat aspirinei",
   "Ticagrelor 180 mg doză de încărcare, apoi 90 mg de două ori pe zi, asociat aspirinei",
   "Inhibitori GP IIb/IIIa ca terapie de rutină, indiferent de încărcarea trombotică de la coronarografie",
   "Fondaparinux, pentazaharid care activează antitrombina și inactivează factorul Xa, fără efect antiplachetar",
   "Bivalirudină, inhibitor direct care se leagă reversibil de trombină și îi inhibă fixarea de cheag"
  ],
  "correct": [
   1,
   3,
   4
  ],
  "explanation": "Prasugrel 300-600 mg doză de încărcare, apoi 75 mg pe zi, asociat aspirinei — Incorect: Doza de 300-600 mg apoi 75 mg pe zi aparține clopidogrelului; prasugrelul se administrează 60 mg încărcare, apoi 10 mg pe zi.\n\nTicagrelor 180 mg doză de încărcare, apoi 90 mg de două ori pe zi, asociat aspirinei — Corect: Textul precizează ticagrelor 180 mg doză de încărcare, apoi 90 mg de două ori pe zi, în cadrul dublei antiagregări.\n\nInhibitori GP IIb/IIIa ca terapie de rutină, indiferent de încărcarea trombotică de la coronarografie — Incorect: Textul restrânge utilizarea inhibitorilor GP IIb/IIIa la pacienții cu încărcare trombotică marcată la coronarografie și la complicațiile PCI.\n\nFondaparinux, pentazaharid care activează antitrombina și inactivează factorul Xa, fără efect antiplachetar — Corect: Fondaparinux este descris ca pentazaharid sintetic care activează selectiv antitrombina, inactivând factorul Xa, fără efecte antiplachetare.\n\nBivalirudină, inhibitor direct care se leagă reversibil de trombină și îi inhibă fixarea de cheag — Corect: Bivalirudina este inhibitor direct al trombinei care se leagă reversibil de aceasta și inhibă fixarea ei de cheag.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1086, Sindroamele coronariene acute — Medicația antiplachetară și anti-trombinică (pagini PDF: 247).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1086
   ],
   "pdfPages": [
    247
   ],
   "section": "Sindroamele coronariene acute — Medicația antiplachetară și anti-trombinică"
  },
  "learningObjective": "Cunoașterea dozelor de încărcare și de întreținere ale inhibitorilor P2Y12 și a mecanismelor agenților anti-trombinici din SCA.",
  "optionRationales": [
   "Doza de 300-600 mg apoi 75 mg pe zi aparține clopidogrelului; prasugrelul se administrează 60 mg încărcare, apoi 10 mg pe zi.",
   "Textul precizează ticagrelor 180 mg doză de încărcare, apoi 90 mg de două ori pe zi, în cadrul dublei antiagregări.",
   "Textul restrânge utilizarea inhibitorilor GP IIb/IIIa la pacienții cu încărcare trombotică marcată la coronarografie și la complicațiile PCI.",
   "Fondaparinux este descris ca pentazaharid sintetic care activează selectiv antitrombina, inactivând factorul Xa, fără efecte antiplachetare.",
   "Bivalirudina este inhibitor direct al trombinei care se leagă reversibil de aceasta și inhibă fixarea ei de cheag."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă dozele între doi inhibitori P2Y12 înrudiți și extinde la rutină o indicație pe care textul o restrânge la încărcarea trombotică marcată și la complicațiile PCI."
  },
  "textbookExpressions": [
   "pentazaharid",
   "inhibitor direct al trombinei"
  ]
 },
 {
  "id": "cardiologie-adv-010",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Un bărbat de 58 de ani prezintă durere toracică intensă de 40 de minute, care nu cedează la nitroglicerină sublingual. ECG evidențiază subdenivelare ST în V1-V3, cu undă R amplă, și supradenivelare ST în V5/V6. Localizarea cea mai probabilă a infarctului este:",
  "options": [
   "Anterioară, întrucât modificările interesează derivațiile V1-V3",
   "Inferioară, modificările din V5/V6 fiind în oglindă",
   "Posterioară, subdenivelarea ST din V1-V3 reprezentând modificări în oglindă",
   "Laterală, prin supradenivelarea ST izolată din V5/V6",
   "De ventricul drept, ce necesită confirmare în derivația V4R"
  ],
  "correct": [
   2
  ],
  "explanation": "Anterioară, întrucât modificările interesează derivațiile V1-V3 — Incorect: IM anterior produce supradenivelare ST în V1-V3/V4, nu subdenivelare cu undă R amplă.\n\nInferioară, modificările din V5/V6 fiind în oglindă — Incorect: IM inferior se diagnostichează prin supradenivelare ST în DII, DIII și aVF, nu prin modificări în V1-V3.\n\nPosterioară, subdenivelarea ST din V1-V3 reprezentând modificări în oglindă — Corect: Textul precizează că în IM posterior se înregistrează subdenivelare ST în V1-V3 cu undă R amplă și supradenivelare ST în V5/V6.\n\nLaterală, prin supradenivelarea ST izolată din V5/V6 — Incorect: IM lateral produce modificări ST-T în DI, aVL și V5/V6, dar nu explică subdenivelarea cu undă R amplă din V1-V3.\n\nDe ventricul drept, ce necesită confirmare în derivația V4R — Incorect: IM de ventricul drept se diagnostichează prin supradenivelare ST în V4R, nu prin acest tipar precordial.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1088, Sindroamele coronariene acute — STEMI: modificările ECG (Cadranul 30.40) (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1088
   ],
   "pdfPages": [
    249
   ],
   "section": "Sindroamele coronariene acute — STEMI: modificările ECG (Cadranul 30.40)"
  },
  "learningObjective": "Recunoașterea infarctului miocardic posterior după modificările ST în oglindă și unda R amplă din derivațiile precordiale drepte.",
  "optionRationales": [
   "IM anterior produce supradenivelare ST în V1-V3/V4, nu subdenivelare cu undă R amplă.",
   "IM inferior se diagnostichează prin supradenivelare ST în DII, DIII și aVF, nu prin modificări în V1-V3.",
   "Textul precizează că în IM posterior se înregistrează subdenivelare ST în V1-V3 cu undă R amplă și supradenivelare ST în V5/V6.",
   "IM lateral produce modificări ST-T în DI, aVL și V5/V6, dar nu explică subdenivelarea cu undă R amplă din V1-V3.",
   "IM de ventricul drept se diagnostichează prin supradenivelare ST în V4R, nu prin acest tipar precordial."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tiparul ECG al infarctului posterior este contraintuitiv (subdenivelare ca semn de infarct), iar distractorii oferă localizări justificate plauzibil prin câte o derivație din vignetă."
  },
  "textbookExpressions": [
   "modificări în oglindă",
   "undă R amplă"
  ]
 },
 {
  "id": "cardiologie-adv-011",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Valvulotomia cu balon prin puncție transseptală în stenoza mitrală:",
  "options": [
   "Necesită by-pass cardiopulmonar, la fel ca valvulotomia pe cord deschis",
   "Este preferabilă la pacienții cu valve suple, afectare minimă a aparatului subvalvular și regurgitare mitrală minimă",
   "Se efectuează cu un dilatator introdus prin apexul ventriculului stâng, ghidat digital prin urechiușa atrială stângă",
   "Este contraindicată în prezența trombozei atriale stângi, exclusă prin ecografie transesofagiană efectuată anterior",
   "Este indicată în special când coexistă o regurgitare mitrală moderată, pe care o poate ameliora"
  ],
  "correct": [
   1,
   3
  ],
  "explanation": "Necesită by-pass cardiopulmonar, la fel ca valvulotomia pe cord deschis — Incorect: Procedura se desfășoară în laboratorul de cateterism, sub anestezie locală, fără by-pass cardiopulmonar (necesar doar în valvulotomia pe cord deschis).\n\nEste preferabilă la pacienții cu valve suple, afectare minimă a aparatului subvalvular și regurgitare mitrală minimă — Corect: Textul precizează că procedura este preferabilă la valve suple, cu afectare minimă a aparatului subvalvular și regurgitare mitrală minimă.\n\nSe efectuează cu un dilatator introdus prin apexul ventriculului stâng, ghidat digital prin urechiușa atrială stângă — Incorect: Dilatatorul avansat prin apexul VS și ghidat de degetul chirurgului descrie valvulotomia pe cord închis, nu procedura cu balon.\n\nEste contraindicată în prezența trombozei atriale stângi, exclusă prin ecografie transesofagiană efectuată anterior — Corect: Textul enumeră tromboza atrială stângă printre contraindicații, ecografia transesofagiană permițând excluderea ei înaintea procedurii.\n\nEste indicată în special când coexistă o regurgitare mitrală moderată, pe care o poate ameliora — Incorect: Regurgitarea mitrală mai mult decât ușoară este o contraindicație, iar coexistența regurgitării impune protezarea mitrală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1094, Valvulopatiile — Stenoza mitrală: tratament (pagini PDF: 255).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1094
   ],
   "pdfPages": [
    255
   ],
   "section": "Valvulopatiile — Stenoza mitrală: tratament"
  },
  "learningObjective": "Diferențierea indicațiilor, contraindicațiilor și tehnicii valvulotomiei percutane cu balon de celelalte metode de corecție a stenozei mitrale.",
  "optionRationales": [
   "Procedura se desfășoară în laboratorul de cateterism, sub anestezie locală, fără by-pass cardiopulmonar (necesar doar în valvulotomia pe cord deschis).",
   "Textul precizează că procedura este preferabilă la valve suple, cu afectare minimă a aparatului subvalvular și regurgitare mitrală minimă.",
   "Dilatatorul avansat prin apexul VS și ghidat de degetul chirurgului descrie valvulotomia pe cord închis, nu procedura cu balon.",
   "Textul enumeră tromboza atrială stângă printre contraindicații, ecografia transesofagiană permițând excluderea ei înaintea procedurii.",
   "Regurgitarea mitrală mai mult decât ușoară este o contraindicație, iar coexistența regurgitării impune protezarea mitrală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie procedurii percutane elemente tehnice ale valvulotomiei pe cord închis și deschis și transformă o contraindicație (regurgitarea moderată) în indicație."
  },
  "textbookExpressions": [
   "Scorul Wilkins",
   "comisurilor mitrale fuzionate"
  ]
 },
 {
  "id": "cardiologie-adv-012",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Stenoza aortică se caracterizează prin:",
  "options": [
   "Suflu sistolic de ejecție crescendo-descrescendo, a cărui durată crește odată cu severitatea stenozei",
   "Bună corelație între intensitatea suflului și severitatea leziunii valvulare",
   "Dedublare paradoxală a zgomotului 2, cu dedublare în expir",
   "Șoc apexian deplasat inferior și lateral, difuz, prin dilatare ventriculară",
   "Zgomot 4 intens, audibil doar în prezența unei stenoze mitrale asociate"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Suflu sistolic de ejecție crescendo-descrescendo, a cărui durată crește odată cu severitatea stenozei — Corect: Textul precizează că durata suflului crescendo-descrescendo crește cu severitatea, prin creșterea timpului de ejecție sistolică.\n\nBună corelație între intensitatea suflului și severitatea leziunii valvulare — Incorect: Textul indică opusul: nu există o bună corelație între intensitatea suflului și severitate, suflul putând fi inaudibil în stenozele foarte severe.\n\nDedublare paradoxală a zgomotului 2, cu dedublare în expir — Corect: Dedublarea paradoxală a zgomotului 2 (în expir) este enumerată printre semnele stenozei aortice.\n\nȘoc apexian deplasat inferior și lateral, difuz, prin dilatare ventriculară — Incorect: Șocul apexian nu este deplasat, deoarece hipertrofia nu produce cardiomegalie semnificativă; este însă susținut și amplu.\n\nZgomot 4 intens, audibil doar în prezența unei stenoze mitrale asociate — Incorect: Zgomotul 4 intens este audibil doar în absența stenozei mitrale, nu în prezența ei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1098, Valvulopatiile — Stenoza aortică: tablou clinic (pagini PDF: 259).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1098
   ],
   "pdfPages": [
    259
   ],
   "section": "Valvulopatiile — Stenoza aortică: tablou clinic"
  },
  "learningObjective": "Interpretarea semnelor auscultatorii și palpatorii ale stenozei aortice și a relației lor cu severitatea leziunii.",
  "optionRationales": [
   "Textul precizează că durata suflului crescendo-descrescendo crește cu severitatea, prin creșterea timpului de ejecție sistolică.",
   "Textul indică opusul: nu există o bună corelație între intensitatea suflului și severitate, suflul putând fi inaudibil în stenozele foarte severe.",
   "Dedublarea paradoxală a zgomotului 2 (în expir) este enumerată printre semnele stenozei aortice.",
   "Șocul apexian nu este deplasat, deoarece hipertrofia nu produce cardiomegalie semnificativă; este însă susținut și amplu.",
   "Zgomotul 4 intens este audibil doar în absența stenozei mitrale, nu în prezența ei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează două relații reale (intensitate/severitate și zgomot 4/stenoză mitrală) și atribuie stenozei aortice șocul apexian deplasat, caracteristic regurgitării aortice de pe pagina următoare."
  },
  "textbookExpressions": [
   "diamond-shaped",
   "dilatare poststenotică"
  ]
 },
 {
  "id": "cardiologie-adv-013",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Indicațiile de tratament chirurgical în regurgitarea aortică includ:",
  "options": [
   "Regurgitarea aortică severă acută, de exemplu în endocardita infecțioasă acută",
   "Regurgitarea aortică severă cronică la pacienți simptomatici, cu dispnee clasă NYHA II-IV sau angină",
   "Pacienții asimptomatici cu fracție de ejecție a ventriculului stâng ≤50%",
   "Pacienții asimptomatici cu FEVS >50% și diametru telediastolic al VS >70 mm sau telesistolic >50 mm",
   "Pacienții asimptomatici cu FEVS >50% și ventricul stâng nedilatat, pentru prevenirea remodelării"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Regurgitarea aortică severă acută, de exemplu în endocardita infecțioasă acută — Corect: Textul enumeră regurgitarea aortică severă acută (ex. endocardită acută infecțioasă) printre indicațiile chirurgicale.\n\nRegurgitarea aortică severă cronică la pacienți simptomatici, cu dispnee clasă NYHA II-IV sau angină — Corect: Regurgitarea severă cronică la pacienți simptomatici (dispnee clasă NYHA II-IV, angină) este indicație chirurgicală.\n\nPacienții asimptomatici cu fracție de ejecție a ventriculului stâng ≤50% — Corect: Pacienții asimptomatici cu FEVS ≤50% au indicație chirurgicală conform textului.\n\nPacienții asimptomatici cu FEVS >50% și diametru telediastolic al VS >70 mm sau telesistolic >50 mm — Corect: Textul indică chirurgia la asimptomaticii cu FEVS >50% dacă VS este dilatat (diametru telediastolic >70 mm sau telesistolic >50 mm).\n\nPacienții asimptomatici cu FEVS >50% și ventricul stâng nedilatat, pentru prevenirea remodelării — Incorect: Asimptomaticii cu FEVS >50% și VS nedilatat nu îndeplinesc niciun criteriu chirurgical enumerat în text.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1100, Valvulopatiile — Regurgitarea aortică: tratament (pagini PDF: 261).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1100
   ],
   "pdfPages": [
    261
   ],
   "section": "Valvulopatiile — Regurgitarea aortică: tratament"
  },
  "learningObjective": "Cunoașterea criteriilor clinice, funcționale și dimensionale care indică înlocuirea valvei aortice în regurgitarea aortică.",
  "optionRationales": [
   "Textul enumeră regurgitarea aortică severă acută (ex. endocardită acută infecțioasă) printre indicațiile chirurgicale.",
   "Regurgitarea severă cronică la pacienți simptomatici (dispnee clasă NYHA II-IV, angină) este indicație chirurgicală.",
   "Pacienții asimptomatici cu FEVS ≤50% au indicație chirurgicală conform textului.",
   "Textul indică chirurgia la asimptomaticii cu FEVS >50% dacă VS este dilatat (diametru telediastolic >70 mm sau telesistolic >50 mm).",
   "Asimptomaticii cu FEVS >50% și VS nedilatat nu îndeplinesc niciun criteriu chirurgical enumerat în text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere reținerea pragurilor exacte de FEVS și de diametre ventriculare, distractorul fiind o variantă plauzibilă fără criteriu dimensional."
  },
  "textbookExpressions": [
   "Semnul Quincke",
   "uruitura Austin Flint"
  ]
 },
 {
  "id": "cardiologie-adv-014",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la protezele valvulare și anticoagularea în sarcină:",
  "options": [
   "Heparina cu greutate moleculară mică traversează placenta și se asociază cu embriopatii fetale",
   "Valvele mecanice sunt preferate în sarcină, deoarece sunt mai puțin trombogene și nu necesită anticoagulare",
   "Heparina nefracționată asigură o anticoagulare constantă, cu o incidență redusă (sub 5%) a trombozei valvulare",
   "Warfarina traversează bariera placentară și se asociază cu un risc de 5-12% de embriopatie în primul trimestru",
   "Degradarea valvelor biologice la femeile aflate la vârstă fertilă este de 50% la 15 ani"
  ],
  "correct": [
   3
  ],
  "explanation": "Heparina cu greutate moleculară mică traversează placenta și se asociază cu embriopatii fetale — Incorect: Heparinele (nefracționată și cu greutate moleculară mică) nu traversează placenta și nu cauzează embriopatii, conform textului.\n\nValvele mecanice sunt preferate în sarcină, deoarece sunt mai puțin trombogene și nu necesită anticoagulare — Incorect: Textul indică opusul: valvele biologice sunt preferate în sarcină fiind mai puțin trombogene; valvele mecanice necesită anticoagulare pe viață.\n\nHeparina nefracționată asigură o anticoagulare constantă, cu o incidență redusă (sub 5%) a trombozei valvulare — Incorect: Textul precizează că heparina nefracționată poate să nu ofere anticoagulare consecventă, cu o incidență ridicată (25%) a trombozei valvulare.\n\nWarfarina traversează bariera placentară și se asociază cu un risc de 5-12% de embriopatie în primul trimestru — Corect: Textul precizează că warfarina traversează bariera placentară, cu risc de 5-12% de embriopatie în primul trimestru.\n\nDegradarea valvelor biologice la femeile aflate la vârstă fertilă este de 50% la 15 ani — Incorect: Degradarea valvelor biologice este de 50% la 10 ani și de 90% la 15 ani, conform textului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1103, Valvulopatiile — Protezele valvulare: sarcina și protezele valvulare (pagini PDF: 264).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1103
   ],
   "pdfPages": [
    264
   ],
   "section": "Valvulopatiile — Protezele valvulare: sarcina și protezele valvulare"
  },
  "learningObjective": "Cunoașterea riscurilor materne și fetale ale diferitelor strategii de anticoagulare la gravidele cu proteze valvulare.",
  "optionRationales": [
   "Heparinele (nefracționată și cu greutate moleculară mică) nu traversează placenta și nu cauzează embriopatii, conform textului.",
   "Textul indică opusul: valvele biologice sunt preferate în sarcină fiind mai puțin trombogene; valvele mecanice necesită anticoagulare pe viață.",
   "Textul precizează că heparina nefracționată poate să nu ofere anticoagulare consecventă, cu o incidență ridicată (25%) a trombozei valvulare.",
   "Textul precizează că warfarina traversează bariera placentară, cu risc de 5-12% de embriopatie în primul trimestru.",
   "Degradarea valvelor biologice este de 50% la 10 ani și de 90% la 15 ani, conform textului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează proprietățile heparinei și ale tipurilor de proteze și modifică pragurile numerice reale (25% tromboză, 50%/10 ani și 90%/15 ani)."
  },
  "textbookExpressions": [
   "status hipercoagulant",
   "nivelul anti-Xa"
  ]
 },
 {
  "id": "cardiologie-adv-015",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Explorările paraclinice în endocardita infecțioasă:",
  "options": [
   "Ecocardiografia transtoracică este explorarea imagistică de primă linie, cu o sensibilitate de 60-75%",
   "Hemoculturile se recoltează într-un singur set, dintr-o venă periferică, înaintea antibioterapiei",
   "Ecocardiografia transesofagiană are sensibilitate peste 90% și este esențială în endocardita pe proteză valvulară",
   "Prelungirea intervalului PR și alte tulburări de conducere se asociază cu abcesele rădăcinii aortice",
   "Proteina C reactivă crește ca răspuns la terapia antibiotică eficientă și scade din nou în recăderi"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "explanation": "Ecocardiografia transtoracică este explorarea imagistică de primă linie, cu o sensibilitate de 60-75% — Corect: Cadranul 30.47 descrie ETT ca explorare imagistică de primă linie, cu sensibilitate de 60-75%.\n\nHemoculturile se recoltează într-un singur set, dintr-o venă periferică, înaintea antibioterapiei — Incorect: Cadranul 30.47 indică trei seturi de hemoculturi din locuri de puncție diferite, nu un singur set.\n\nEcocardiografia transesofagiană are sensibilitate peste 90% și este esențială în endocardita pe proteză valvulară — Corect: ETE este explorarea de a doua linie, cu sensibilitate >90%, utilă pentru abcesul rădăcinii aortice și esențială în endocardita pe proteză.\n\nPrelungirea intervalului PR și alte tulburări de conducere se asociază cu abcesele rădăcinii aortice — Corect: Cadranul 30.47 asociază prelungirea intervalului PR și alte tulburări de conducere cu abcesele rădăcinii aortice.\n\nProteina C reactivă crește ca răspuns la terapia antibiotică eficientă și scade din nou în recăderi — Incorect: Textul indică opusul: PCR scade ca răspuns la terapia antibiotică și crește din nou în recăderi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1106, Endocardita infecțioasă — Explorări și rezultate (Cadranul 30.47) (pagini PDF: 267).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1106
   ],
   "pdfPages": [
    267
   ],
   "section": "Endocardita infecțioasă — Explorări și rezultate (Cadranul 30.47)"
  },
  "learningObjective": "Cunoașterea performanței diagnostice a ecocardiografiei transtoracice și transesofagiene și a semnificației modificărilor ECG și inflamatorii în endocardită.",
  "optionRationales": [
   "Cadranul 30.47 descrie ETT ca explorare imagistică de primă linie, cu sensibilitate de 60-75%.",
   "Cadranul 30.47 indică trei seturi de hemoculturi din locuri de puncție diferite, nu un singur set.",
   "ETE este explorarea de a doua linie, cu sensibilitate >90%, utilă pentru abcesul rădăcinii aortice și esențială în endocardita pe proteză.",
   "Cadranul 30.47 asociază prelungirea intervalului PR și alte tulburări de conducere cu abcesele rădăcinii aortice.",
   "Textul indică opusul: PCR scade ca răspuns la terapia antibiotică și crește din nou în recăderi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Solicită valorile de sensibilitate ale celor două tehnici ecografice și inversează dinamica PCR sub tratament, plus numărul de seturi de hemoculturi."
  },
  "textbookExpressions": [
   "abces al rădăcinii aortice",
   "Febra persistentă"
  ]
 },
 {
  "id": "cardiologie-adv-016",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Cardiomiopatia aritmogenă:",
  "options": [
   "Are o prevalență de 7-12 cazuri la 100.000 de locuitori",
   "Sindromul Carvajal se datorează mutației receptorului de rianodină RyR2 cardiac",
   "Insuficiența ventriculară dreaptă este manifestarea tipică a stadiilor precoce, aritmiile apărând tardiv",
   "Afectarea ventriculului stâng a fost raportată în până la 75% din cazuri",
   "Boala Naxos (keratodermă plantară, păr lânos) se datorează mutației plakoglobinei joncționale"
  ],
  "correct": [
   3,
   4
  ],
  "explanation": "Are o prevalență de 7-12 cazuri la 100.000 de locuitori — Incorect: Prevalența de 7-12/100.000 aparține cardiomiopatiei dilatative; cardiomiopatia aritmogenă este rară, 1 la 1.000-5.000 de locuitori.\n\nSindromul Carvajal se datorează mutației receptorului de rianodină RyR2 cardiac — Incorect: Sindromul Carvajal se datorează mutației desmoplakinei; RyR2 este asociat formei autosomal dominante și TVPC.\n\nInsuficiența ventriculară dreaptă este manifestarea tipică a stadiilor precoce, aritmiile apărând tardiv — Incorect: Textul indică opusul: aritmiile ventriculare și riscul de moarte subită apar în stadiile precoce, iar insuficiența ventriculară dreaptă sau biventriculară în stadiile avansate.\n\nAfectarea ventriculului stâng a fost raportată în până la 75% din cazuri — Corect: Textul precizează că afectarea ventriculului stâng a fost raportată în până la 75% din cazuri.\n\nBoala Naxos (keratodermă plantară, păr lânos) se datorează mutației plakoglobinei joncționale — Corect: Boala Naxos, formă recesivă cu keratodermă plantară și păr lânos, se datorează mutației plakoglobinei joncționale, conform textului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1121, 1122, Bolile miocardului — Cardiomiopatia aritmogenă (pagini PDF: 270, 271).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1121,
    1122
   ],
   "pdfPages": [
    270,
    271
   ],
   "section": "Bolile miocardului — Cardiomiopatia aritmogenă"
  },
  "learningObjective": "Cunoașterea epidemiologiei, geneticii și evoluției stadiale a cardiomiopatiei aritmogene, inclusiv formele recesive sindromice.",
  "optionRationales": [
   "Prevalența de 7-12/100.000 aparține cardiomiopatiei dilatative; cardiomiopatia aritmogenă este rară, 1 la 1.000-5.000 de locuitori.",
   "Sindromul Carvajal se datorează mutației desmoplakinei; RyR2 este asociat formei autosomal dominante și TVPC.",
   "Textul indică opusul: aritmiile ventriculare și riscul de moarte subită apar în stadiile precoce, iar insuficiența ventriculară dreaptă sau biventriculară în stadiile avansate.",
   "Textul precizează că afectarea ventriculului stâng a fost raportată în până la 75% din cazuri.",
   "Boala Naxos, formă recesivă cu keratodermă plantară și păr lânos, se datorează mutației plakoglobinei joncționale, conform textului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii împrumută prevalența cardiomiopatiei dilatative din pagina următoare, schimbă genele celor două forme recesive și inversează cronologia aritmii/insuficiență cardiacă."
  },
  "textbookExpressions": [
   "boala Naxos",
   "păr lânos"
  ]
 },
 {
  "id": "cardiologie-adv-017",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Următoarele afirmații despre cardiomiopatia dilatativă sunt adevărate:",
  "options": [
   "Are o prevalență de 7-12 cazuri la 100.000 de locuitori",
   "Se caracterizează prin dilatarea cavităților ventriculare și disfuncție sistolică, cu grosime parietală prezervată",
   "Distrofina este implicată în forma autosomal dominantă, iar lamin a/c în cardiomiopatia X-linkată",
   "În forma sporadică, cauzele infecțioase se limitează la virusuri, boala Chagas nefiind implicată",
   "Forma familială este predominant autosomal dominantă și a fost asociată cu peste 20 de loci și gene anormale"
  ],
  "correct": [
   0,
   1,
   4
  ],
  "explanation": "Are o prevalență de 7-12 cazuri la 100.000 de locuitori — Corect: Textul precizează prevalența de 7-12 cazuri la 100.000 de locuitori.\n\nSe caracterizează prin dilatarea cavităților ventriculare și disfuncție sistolică, cu grosime parietală prezervată — Corect: Textul definește CMD prin dilatarea cavităților ventriculare și disfuncție sistolică, cu grosime parietală prezervată.\n\nDistrofina este implicată în forma autosomal dominantă, iar lamin a/c în cardiomiopatia X-linkată — Incorect: Textul indică opusul: distrofina este implicată în cardiomiopatia X-linkată, iar lamin a/c în CMD autosomal dominantă.\n\nÎn forma sporadică, cauzele infecțioase se limitează la virusuri, boala Chagas nefiind implicată — Incorect: Boala Chagas (paraziți) este enumerată printre cauzele de miocardită din CMD sporadică, alături de virusuri, bacterii, fungi și micobacterii.\n\nForma familială este predominant autosomal dominantă și a fost asociată cu peste 20 de loci și gene anormale — Corect: Textul precizează că CMD familială este predominant autosomal dominantă, asociată cu peste 20 de loci și gene anormale.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1122, 1121, Bolile miocardului — Cardiomiopatia dilatativă (pagini PDF: 271, 270).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1122,
    1121
   ],
   "pdfPages": [
    271,
    270
   ],
   "section": "Bolile miocardului — Cardiomiopatia dilatativă"
  },
  "learningObjective": "Cunoașterea definiției, epidemiologiei și bazelor genetice ale cardiomiopatiei dilatative, cu diferențierea formelor X-linkate de cele autosomal dominante.",
  "optionRationales": [
   "Textul precizează prevalența de 7-12 cazuri la 100.000 de locuitori.",
   "Textul definește CMD prin dilatarea cavităților ventriculare și disfuncție sistolică, cu grosime parietală prezervată.",
   "Textul indică opusul: distrofina este implicată în cardiomiopatia X-linkată, iar lamin a/c în CMD autosomal dominantă.",
   "Boala Chagas (paraziți) este enumerată printre cauzele de miocardită din CMD sporadică, alături de virusuri, bacterii, fungi și micobacterii.",
   "Textul precizează că CMD familială este predominant autosomal dominantă, asociată cu peste 20 de loci și gene anormale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează asocierea genă-mod de transmitere (distrofină/lamin a/c) și restrânge nejustificat etiologia infecțioasă, restul enunțurilor conținând cifre exacte."
  },
  "textbookExpressions": [
   "grosime parietală prezervată",
   "cardiomiopatia X-linkată"
  ]
 },
 {
  "id": "cardiologie-adv-018",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Care dintre următoarele afirmații diferențiază corect pericardita constrictivă de tamponada cardiacă?",
  "options": [
   "Pulsul paradoxal apare în tamponada cardiacă, dar lipsește în pericardita constrictivă",
   "În pericardita constrictivă, presiunea venoasă jugulară crește cu descendent y adânc (semnul Friedreich), pe când în tamponadă panta descendentă x este ascuțită",
   "Semnul Kussmaul este specific tamponadei și nu se întâlnește în pericardita constrictivă",
   "Pericardita constrictivă compromite acut circulația, în timp ce tamponada evoluează cronic, cu timp de compensare",
   "Radiografia toracică arată un cord relativ mic în tamponadă și un cord globulos în pericardita constrictivă"
  ],
  "correct": [
   1
  ],
  "explanation": "Pulsul paradoxal apare în tamponada cardiacă, dar lipsește în pericardita constrictivă — Incorect: Pulsul paradoxal este descris atât în tamponadă, cât și în pericardita constrictivă, deci nu le diferențiază.\n\nÎn pericardita constrictivă, presiunea venoasă jugulară crește cu descendent y adânc (semnul Friedreich), pe când în tamponadă panta descendentă x este ascuțită — Corect: Textul precizează că în constricție presiunea venoasă jugulară crește cu descendent y adânc (semnul Friedreich), diferit de tamponadă, unde panta descendentă x este ascuțită.\n\nSemnul Kussmaul este specific tamponadei și nu se întâlnește în pericardita constrictivă — Incorect: Semnul Kussmaul este menționat atât la tamponadă, cât și la pericardita constrictivă.\n\nPericardita constrictivă compromite acut circulația, în timp ce tamponada evoluează cronic, cu timp de compensare — Incorect: Textul indică opusul: tamponada compromite acut circulația, iar constricția este cronică, dând organismului timp să compenseze.\n\nRadiografia toracică arată un cord relativ mic în tamponadă și un cord globulos în pericardita constrictivă — Incorect: Textul indică opusul: revărsatul/tamponada produce un cord mărit, globulos, iar pericardita constrictivă un cord relativ mic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1127, Bolile pericardului — Revărsatul pericardic și pericardita constrictivă (pagini PDF: 276).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1127
   ],
   "pdfPages": [
    276
   ],
   "section": "Bolile pericardului — Revărsatul pericardic și pericardita constrictivă"
  },
  "learningObjective": "Diferențierea hemodinamică și clinică a pericarditei constrictive de tamponada cardiacă pe baza curbei venoase jugulare, a evoluției și a aspectului radiologic.",
  "optionRationales": [
   "Pulsul paradoxal este descris atât în tamponadă, cât și în pericardita constrictivă, deci nu le diferențiază.",
   "Textul precizează că în constricție presiunea venoasă jugulară crește cu descendent y adânc (semnul Friedreich), diferit de tamponadă, unde panta descendentă x este ascuțită.",
   "Semnul Kussmaul este menționat atât la tamponadă, cât și la pericardita constrictivă.",
   "Textul indică opusul: tamponada compromite acut circulația, iar constricția este cronică, dând organismului timp să compenseze.",
   "Textul indică opusul: revărsatul/tamponada produce un cord mărit, globulos, iar pericardita constrictivă un cord relativ mic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii folosesc semne comune ambelor entități ca elemente de diferențiere și inversează evoluția temporală și aspectul radiologic."
  },
  "textbookExpressions": [
   "semnul Friedreich",
   "semnul lui Ewart"
  ]
 },
 {
  "id": "cardiologie-adv-019",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "În țările occidentale, boala arterială coronariană reprezintă aproximativ:",
  "options": [
   "88% din cauzele de moarte subită",
   "50% din cauzele de moarte subită",
   "88% din decesele prin bradiaritmii severe",
   "Cauza dominantă a stopului doar când infarctul acut este evident clinic",
   "O minoritate a deceselor din primele 24 de ore de la simptomele cardiace"
  ],
  "correct": [
   0
  ],
  "explanation": "88% din cauzele de moarte subită — Corect: Textul precizează că boala arterială coronariană reprezintă aproximativ 88% din cauzele de moarte subită în țările occidentale.\n\n50% din cauzele de moarte subită — Incorect: Valoarea 50% se referă la decesele care survin rapid, nu la ponderea bolii coronariene.\n\n88% din decesele prin bradiaritmii severe — Incorect: Bradiaritmiile severe produc o proporție mai mică de decese, nu 88%.\n\nCauza dominantă a stopului doar când infarctul acut este evident clinic — Incorect: Doar o mică proporție din supraviețuitori prezintă semne evidente de infarct miocardic acut.\n\nO minoritate a deceselor din primele 24 de ore de la simptomele cardiace — Incorect: Până la 100.000 de decese în Marea Britanie se produc în primele 24 de ore; majoritatea au cauză coronariană, nu o minoritate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1045, Proceduri terapeutice — Resuscitarea cardiacă (pagini PDF: 208).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1045
   ],
   "pdfPages": [
    208
   ],
   "section": "Proceduri terapeutice — Resuscitarea cardiacă"
  },
  "learningObjective": "Cunoașterea ponderii bolii coronariene în moartea subită și a mecanismului aritmic dominant.",
  "optionRationales": [
   "Textul precizează că boala arterială coronariană reprezintă aproximativ 88% din cauzele de moarte subită în țările occidentale.",
   "Valoarea 50% se referă la decesele care survin rapid, nu la ponderea bolii coronariene.",
   "Bradiaritmiile severe produc o proporție mai mică de decese, nu 88%.",
   "Doar o mică proporție din supraviețuitori prezintă semne evidente de infarct miocardic acut.",
   "Până la 100.000 de decese în Marea Britanie se produc în primele 24 de ore; majoritatea au cauză coronariană, nu o minoritate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă ponderea 88% a bolii coronariene cu jumătatea de decese rapide și cu mecanismul bradiaritmic minor."
  },
  "textbookExpressions": [
   "88%",
   "moarte subită"
  ]
 },
 {
  "id": "cardiologie-adv-020",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Lanțul supraviețuirii și deschiderea căilor aeriene în suportul vital de bază:",
  "options": [
   "Include recunoașterea timpurie a stopului, alertarea, RCP imediată, defibrilarea rapidă și îngrijirea post-resuscitare",
   "Căile aeriene se deschid prin flexia gâtului și extensia capului, manevră nerecomandată dacă se suspectează leziune cervicală",
   "Protezele dentare mobile trebuie îndepărtate, iar obstacolele orale (sânge, mucus) eliminate",
   "Primul pas al BLS este palparea imediată a pulsului carotidian, înaintea oricărei alte măsuri",
   "Manevra Heimlich este rezervată doar obstrucției de căi aeriene inferioare, nu celei faringiene"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Include recunoașterea timpurie a stopului, alertarea, RCP imediată, defibrilarea rapidă și îngrijirea post-resuscitare — Corect: Textul enumeră cele cinci componente ale lanțului supraviețuirii.\n\nCăile aeriene se deschid prin flexia gâtului și extensia capului, manevră nerecomandată dacă se suspectează leziune cervicală — Corect: Flexia gâtului și extensia capului deschid căile aeriene, dar nu se recomandă la suspiciune de leziune a coloanei cervicale.\n\nProtezele dentare mobile trebuie îndepărtate, iar obstacolele orale (sânge, mucus) eliminate — Corect: Obstacolele din cavitatea bucală sau faringe și protezele dentare mobile trebuie îndepărtate.\n\nPrimul pas al BLS este palparea imediată a pulsului carotidian, înaintea oricărei alte măsuri — Incorect: Primul pas este evitarea pericolelor suplimentare, apoi testarea la stimuli; detectarea pulsului poate fi dificilă.\n\nManevra Heimlich este rezervată doar obstrucției de căi aeriene inferioare, nu celei faringiene — Incorect: Compresiunile abdominale și/sau toracice (Heimlich) se aplică obstrucției din cavitatea bucală posterioară sau căile aeriene superioare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1045, Proceduri terapeutice — Lanțul supraviețuirii și căile aeriene (pagini PDF: 208).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1045
   ],
   "pdfPages": [
    208
   ],
   "section": "Proceduri terapeutice — Lanțul supraviețuirii și căile aeriene"
  },
  "learningObjective": "Recunoașterea celor cinci verigi ale lanțului supraviețuirii și a manevrei de deschidere a căilor aeriene, cu excepția leziunii cervicale.",
  "optionRationales": [
   "Textul enumeră cele cinci componente ale lanțului supraviețuirii.",
   "Flexia gâtului și extensia capului deschid căile aeriene, dar nu se recomandă la suspiciune de leziune a coloanei cervicale.",
   "Obstacolele din cavitatea bucală sau faringe și protezele dentare mobile trebuie îndepărtate.",
   "Primul pas este evitarea pericolelor suplimentare, apoi testarea la stimuli; detectarea pulsului poate fi dificilă.",
   "Compresiunile abdominale și/sau toracice (Heimlich) se aplică obstrucției din cavitatea bucală posterioară sau căile aeriene superioare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ordinea BLS (puls înaintea siguranței) și limitează greșit Heimlich la căile inferioare."
  },
  "textbookExpressions": [
   "Lanţul supravieţuirii",
   "manevra Heimlich"
  ]
 },
 {
  "id": "cardiologie-adv-021",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre suportul respirator și circulator în BLS:",
  "options": [
   "Resucitarea cardiopulmonară mecanică este metoda de rutină în afara spitalului",
   "Pentru persoanele neinițiate, compresiunile izolate (hands only BLS) mențin perfuzia cerebrală și coronariană până la sosirea personalului calificat",
   "Oboseala din timpul compresiunilor scade eficiența acestora, iar calitatea resuscitării se reduce",
   "Raportul 15:2 se aplică de rutină adultului, iar 30:2 doar copilului",
   "RCP trebuie întreruptă la fiecare minut pentru verificarea pulsului, chiar fără semne de viață"
  ],
  "correct": [
   1,
   2
  ],
  "explanation": "Resucitarea cardiopulmonară mecanică este metoda de rutină în afara spitalului — Incorect: Textul precizează că RCP mecanică este posibilă, dar nu este utilizată încă de rutină.\n\nPentru persoanele neinițiate, compresiunile izolate (hands only BLS) mențin perfuzia cerebrală și coronariană până la sosirea personalului calificat — Corect: Hands only BLS este mai ușor pentru neinițiați și menține perfuzia cerebrală și coronariană.\n\nOboseala din timpul compresiunilor scade eficiența acestora, iar calitatea resuscitării se reduce — Corect: Dovezile arată că oboseala scade eficiența compresiunilor și calitatea resuscitării.\n\nRaportul 15:2 se aplică de rutină adultului, iar 30:2 doar copilului — Incorect: Raportul este 30:2 la adulți și 15:2 la pacienții pediatrici, nu invers.\n\nRCP trebuie întreruptă la fiecare minut pentru verificarea pulsului, chiar fără semne de viață — Incorect: RCP nu trebuie întreruptă pentru reevaluare decât dacă apar semne de viață și respirație normală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1046, Suportul vital de bază — Compresiuni și respirație (pagini PDF: 209).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1046
   ],
   "pdfPages": [
    209
   ],
   "section": "Suportul vital de bază — Compresiuni și respirație"
  },
  "learningObjective": "Diferențierea BLS „hands only” de RCP mecanică și recunoașterea efectului oboselii asupra calității compresiunilor.",
  "optionRationales": [
   "Textul precizează că RCP mecanică este posibilă, dar nu este utilizată încă de rutină.",
   "Hands only BLS este mai ușor pentru neinițiați și menține perfuzia cerebrală și coronariană.",
   "Dovezile arată că oboseala scade eficiența compresiunilor și calitatea resuscitării.",
   "Raportul este 30:2 la adulți și 15:2 la pacienții pediatrici, nu invers.",
   "RCP nu trebuie întreruptă pentru reevaluare decât dacă apar semne de viață și respirație normală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă o tehnică încă nedevenită rutină în standard și inversează rapoartele adult/copil deja clasice."
  },
  "textbookExpressions": [
   "hands only BLS",
   "Resucitarea cardiopulmonara mecanică"
  ]
 },
 {
  "id": "cardiologie-adv-022",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "În algoritmul suportului vital avansat la adult se recomandă:",
  "options": [
   "Pentru ritm șocabil (FV/TV fără puls), un șoc bifazic nesincronizat de 150-200 J, urmat imediat de 2 minute de RCP",
   "Pentru ritm neșocabil (asistolă/AEP), 1 mg adrenalină la intervale de minute de RCP",
   "Amiodaronă după 3 șocuri, în timpul RCP",
   "Șoc monofazic de 150 J ca standard actual, bifazicul fiind abandonat",
   "După abordarea avansată a căilor aeriene, ventilație 20/minut cu întreruperea masajului la fiecare ciclu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pentru ritm șocabil (FV/TV fără puls), un șoc bifazic nesincronizat de 150-200 J, urmat imediat de 2 minute de RCP — Corect: Textul indică șoc bifazic nesincronizat de 150-200 J (360 J monofazic), urmat imediat de 2 minute de RCP.\n\nPentru ritm neșocabil (asistolă/AEP), 1 mg adrenalină la intervale de minute de RCP — Corect: În asistolă sau AEP se administrează 1 mg adrenalină la intervale de minute de RCP.\n\nAmiodaronă după 3 șocuri, în timpul RCP — Corect: Algoritmul prevede amiodaronă după 3 șocuri.\n\nȘoc monofazic de 150 J ca standard actual, bifazicul fiind abandonat — Incorect: Defibrilatoarele bifazice necesită energie mai puțină și sunt din ce în ce mai utilizate; 150-200 J este doza bifazică, nu monofazică.\n\nDupă abordarea avansată a căilor aeriene, ventilație 20/minut cu întreruperea masajului la fiecare ciclu — Incorect: După suport respirator avansat, RCP continuă cu ventilație 10/minut fără a întrerupe masajul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1047, 1048, Suportul vital cardiac avansat — Algoritmul ACLS (pagini PDF: 210, 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1047,
    1048
   ],
   "pdfPages": [
    210,
    211
   ],
   "section": "Suportul vital cardiac avansat — Algoritmul ACLS"
  },
  "learningObjective": "Aplicarea energiilor de defibrilare, a adrenalinei în ritmurile neșocabile și a momentului amiodaronei.",
  "optionRationales": [
   "Textul indică șoc bifazic nesincronizat de 150-200 J (360 J monofazic), urmat imediat de 2 minute de RCP.",
   "În asistolă sau AEP se administrează 1 mg adrenalină la intervale de minute de RCP.",
   "Algoritmul prevede amiodaronă după 3 șocuri.",
   "Defibrilatoarele bifazice necesită energie mai puțină și sunt din ce în ce mai utilizate; 150-200 J este doza bifazică, nu monofazică.",
   "După suport respirator avansat, RCP continuă cu ventilație 10/minut fără a întrerupe masajul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă energia bifazică cu cea monofazică și dublează rata de ventilație post-intubație, două praguri adiacente din algoritm."
  },
  "textbookExpressions": [
   "150-200 J",
   "Amiodaronă după 3 şocuri"
  ]
 },
 {
  "id": "cardiologie-adv-023",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tratamentul cauzelor reversibile ale stopului („patru H și patru T”) include:",
  "options": [
   "Hipoxia, combătută prin oxigen pe mască cu rezervor, intubație sau dispozitive supraglotice, cu verificarea ventilației ambelor arii pulmonare",
   "Hipovolemia, cauză frecventă de AEP pe fond hemoragic, care impune repleție volemică",
   "Hiperpotasemia, în care clorura de calciu intravenos poate fi utilă, la fel ca în hipocalcemie",
   "Pneumotoracele în tensiune, diagnosticat clinic (deviere traheală, hipersonoritate, absența murmurului, ecografie) și tratat prin toracocenteză sau toracostomie",
   "Hipotermia, exclusă cu un termometru obișnuit de cameră, fără încălzire internă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Hipoxia, combătută prin oxigen pe mască cu rezervor, intubație sau dispozitive supraglotice, cu verificarea ventilației ambelor arii pulmonare — Corect: Hipoxia se limitează prin ventilație cu oxigen suplimentar pe mască cu rezervor, intubație sau dispozitive supraglotice.\n\nHipovolemia, cauză frecventă de AEP pe fond hemoragic, care impune repleție volemică — Corect: Hipovolemia este o cauză frecventă de AEP pe fond de hemoragie și necesită repleție volemică.\n\nHiperpotasemia, în care clorura de calciu intravenos poate fi utilă, la fel ca în hipocalcemie — Corect: Clorura de calciu i.v. poate fi utilă în hiperpotasemie sau hipocalcemie.\n\nPneumotoracele în tensiune, diagnosticat clinic (deviere traheală, hipersonoritate, absența murmurului, ecografie) și tratat prin toracocenteză sau toracostomie — Corect: Diagnosticul clinic și toracocenteza cu ac sau toracostomia sunt descrise pentru pneumotoracele în tensiune.\n\nHipotermia, exclusă cu un termometru obișnuit de cameră, fără încălzire internă — Incorect: Hipotermia se exclude cu un termometru pentru temperaturi scăzute și se tratează prin încălzire externă și internă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1048, 1047, Suportul vital avansat — Cauze reversibile (4H și 4T) (pagini PDF: 211, 210).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1048,
    1047
   ],
   "pdfPages": [
    211,
    210
   ],
   "section": "Suportul vital avansat — Cauze reversibile (4H și 4T)"
  },
  "learningObjective": "Recunoașterea tratamentului specific al hipoxiei, hipovolemiei, tulburărilor de potasiu și pneumotoracelui în tensiune.",
  "optionRationales": [
   "Hipoxia se limitează prin ventilație cu oxigen suplimentar pe mască cu rezervor, intubație sau dispozitive supraglotice.",
   "Hipovolemia este o cauză frecventă de AEP pe fond de hemoragie și necesită repleție volemică.",
   "Clorura de calciu i.v. poate fi utilă în hiperpotasemie sau hipocalcemie.",
   "Diagnosticul clinic și toracocenteza cu ac sau toracostomia sunt descrise pentru pneumotoracele în tensiune.",
   "Hipotermia se exclude cu un termometru pentru temperaturi scăzute și se tratează prin încălzire externă și internă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru măsuri specifice sunt corecte, iar distractorul înlocuiește termometrul de hipotermie și încălzirea internă cu un instrument obișnuit."
  },
  "textbookExpressions": [
   "clorura de calciu",
   "Hipovolemia"
  ]
 },
 {
  "id": "cardiologie-adv-024",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Hipotermia terapeutică post-resuscitare la adultul inconștient, după stop prin fibrilație ventriculară extraspatial, vizează:",
  "options": [
   "28-30°C timp de 48-72 de ore",
   "32-34°C timp de 12-24 de ore",
   "36-37°C ca unică țintă, hipotermia fiind interzisă",
   "40°C pentru prevenirea infecțiilor nosocomiale",
   "Normotermie strictă doar în ritmurile șocabile, nu și în cele neșocabile"
  ],
  "correct": [
   1
  ],
  "explanation": "28-30°C timp de 48-72 de ore — Incorect: Intervalul 28-30°C și durata de zile nu apar în text.\n\n32-34°C timp de 12-24 de ore — Corect: Studiile au arătat că 32-34°C pentru 12-24 de ore poate îmbunătăți prognosticul la adulții inconștienți după FV extraspatială.\n\n36-37°C ca unică țintă, hipotermia fiind interzisă — Incorect: Un studiu din 2013 a găsit rezultate similare la 33°C versus 36°C; importanța hipotermiei rămâne neclară, dar ținta clasică citată este 32-34°C.\n\n40°C pentru prevenirea infecțiilor nosocomiale — Incorect: Hipertermia nu este strategia post-resuscitare descrisă.\n\nNormotermie strictă doar în ritmurile șocabile, nu și în cele neșocabile — Incorect: Studiul din 2013 a inclus și ritmuri neșocabile, cu rezultate neurologice mai bune, nu o interdicție.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1048, Post resuscitare — Hipotermia terapeutică (pagini PDF: 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1048
   ],
   "pdfPages": [
    211
   ],
   "section": "Post resuscitare — Hipotermia terapeutică"
  },
  "learningObjective": "Reținerea intervalului termic 32-34°C și a duratei 12-24 de ore, cu nuanța studiului din 2013.",
  "optionRationales": [
   "Intervalul 28-30°C și durata de zile nu apar în text.",
   "Studiile au arătat că 32-34°C pentru 12-24 de ore poate îmbunătăți prognosticul la adulții inconștienți după FV extraspatială.",
   "Un studiu din 2013 a găsit rezultate similare la 33°C versus 36°C; importanța hipotermiei rămâne neclară, dar ținta clasică citată este 32-34°C.",
   "Hipertermia nu este strategia post-resuscitare descrisă.",
   "Studiul din 2013 a inclus și ritmuri neșocabile, cu rezultate neurologice mai bune, nu o interdicție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Alege între trei ferestre termice plauzibile; doar 32-34°C/12-24 h este cifra din paragraf."
  },
  "textbookExpressions": [
   "32-34°C",
   "12-24 ore"
  ]
 },
 {
  "id": "cardiologie-adv-025",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Cardioversia cu curent direct a tahiaritmiilor instabile hemodinamic:",
  "options": [
   "Folosește un anestezic cu acțiune scurtă; miorelaxantele nu sunt utilizate de rutină",
   "Șocul este nesincronizat, identic defibrilării fibrilației ventriculare",
   "Transmiterea șocului trebuie să coincidă cu panta descendentă a complexului QRS (sincron)",
   "Este rezervată doar tahiaritmiilor care au răspuns deja la tratamentul medicamentos",
   "Padelele se plasează doar sub scapula stângă, poziția stern-apex fiind interzisă"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Folosește un anestezic cu acțiune scurtă; miorelaxantele nu sunt utilizate de rutină — Corect: Textul precizează anestezic cu acțiune scurtă și lipsa utilizării de rutină a miorelaxantelor.\n\nȘocul este nesincronizat, identic defibrilării fibrilației ventriculare — Incorect: Între defibrilare și cardioversie există o diferență fundamentală: cardioversia este sincronă.\n\nTransmiterea șocului trebuie să coincidă cu panta descendentă a complexului QRS (sincron) — Corect: Șocul trebuie să coincidă cu panta descendentă a QRS; aparatul declanșează automat șocul sincron.\n\nEste rezervată doar tahiaritmiilor care au răspuns deja la tratamentul medicamentos — Incorect: Indicația este tocmai tahiaritmia care nu răspunde medicamentos sau este instabilă.\n\nPadelele se plasează doar sub scapula stângă, poziția stern-apex fiind interzisă — Incorect: Sunt descrise două poziții de padele, inclusiv dreapta sternului superior și apexul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1048, Cardioversia cu curent direct (pagini PDF: 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1048
   ],
   "pdfPages": [
    211
   ],
   "section": "Cardioversia cu curent direct"
  },
  "learningObjective": "Diferențierea șocului sincronizat pe panta descendentă a QRS de defibrilarea nesincronizată.",
  "optionRationales": [
   "Textul precizează anestezic cu acțiune scurtă și lipsa utilizării de rutină a miorelaxantelor.",
   "Între defibrilare și cardioversie există o diferență fundamentală: cardioversia este sincronă.",
   "Șocul trebuie să coincidă cu panta descendentă a QRS; aparatul declanșează automat șocul sincron.",
   "Indicația este tocmai tahiaritmia care nu răspunde medicamentos sau este instabilă.",
   "Sunt descrise două poziții de padele, inclusiv dreapta sternului superior și apexul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă cardioversia sincronă cu defibrilarea FV și anulează una dintre cele două poziții clasice de padele."
  },
  "textbookExpressions": [
   "panta descendentă",
   "Cardioversia cu curent direct"
  ]
 },
 {
  "id": "cardiologie-adv-026",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la balonul de contrapulsație aortică și la definițiile aritmiilor:",
  "options": [
   "Complicațiile IABP apar la aproximativ 20% dintre pacienți (disecție de aortă, ischemie de membru, embolizare, ruptură de balon)",
   "Bradicardia este frecvență <60 b.p.m. ziua sau <50 b.p.m. nocturn",
   "Tahicardia este frecvență >100 b.p.m.",
   "Complicațiile embolice ale IABP sunt frecvente chiar sub heparină",
   "Bradicardia sinusală fiziologică a sportivului se datorează tonusului simpatic crescut"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Complicațiile IABP apar la aproximativ 20% dintre pacienți (disecție de aortă, ischemie de membru, embolizare, ruptură de balon) — Corect: Textul indică complicații la aproximativ 20% (disecție, ischemie de membru, embolizare, ruptură).\n\nBradicardia este frecvență <60 b.p.m. ziua sau <50 b.p.m. nocturn — Corect: Bradicardia: <60 b.p.m. în timpul zilei sau <50 b.p.m. nocturn.\n\nTahicardia este frecvență >100 b.p.m. — Corect: Tahicardia: frecvență cardiacă rapidă (>100 b.p.m.).\n\nComplicațiile embolice ale IABP sunt frecvente chiar sub heparină — Incorect: Complicațiile embolice sunt rare dacă se utilizează anticoagulare cu heparină.\n\nBradicardia sinusală fiziologică a sportivului se datorează tonusului simpatic crescut — Incorect: La sportivi bradicardia se datorează tonusului vagal crescut, nu simpatic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1051, 1052, Aritmiile cardiace — Definiții; contrapulsația aortică (pagini PDF: 212, 213).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1051,
    1052
   ],
   "pdfPages": [
    212,
    213
   ],
   "section": "Aritmiile cardiace — Definiții; contrapulsația aortică"
  },
  "learningObjective": "Memorarea ratei de complicații a IABP și a pragurilor numerice care definesc bradi- și tahicardia.",
  "optionRationales": [
   "Textul indică complicații la aproximativ 20% (disecție, ischemie de membru, embolizare, ruptură).",
   "Bradicardia: <60 b.p.m. în timpul zilei sau <50 b.p.m. nocturn.",
   "Tahicardia: frecvență cardiacă rapidă (>100 b.p.m.).",
   "Complicațiile embolice sunt rare dacă se utilizează anticoagulare cu heparină.",
   "La sportivi bradicardia se datorează tonusului vagal crescut, nu simpatic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Modifică 20% în „embolie frecventă sub heparină” și inversează tonusul vegetativ al bradicardiei de sportiv."
  },
  "textbookExpressions": [
   "20%",
   "<60 b.p.m."
  ]
 },
 {
  "id": "cardiologie-adv-027",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Mecanismul tahicardiilor atriale din intoxicația digitalică este:",
  "options": [
   "Reintrarea în jurul unui miez cicatricial ventricular",
   "Activitatea declanșată (trigger) prin postdepolarizări",
   "Automatismul sinusului carotidian",
   "Blocul unidirecțional pe o cale accesorie Kent",
   "Creșterea izolată a pantei fazei 0 fără postpotențiale"
  ],
  "correct": [
   1
  ],
  "explanation": "Reintrarea în jurul unui miez cicatricial ventricular — Incorect: Reintrarea explică majoritatea tahicardiilor paroxistice regulate, nu specific intoxicația digitalică.\n\nActivitatea declanșată (trigger) prin postdepolarizări — Corect: Textul precizează că tahicardiile atriale din intoxicația digitalică au ca mecanism activitatea declanșată (trigger).\n\nAutomatismul sinusului carotidian — Incorect: Sinusul carotidian este implicat în sindroame mediate neural, nu în digitală.\n\nBlocul unidirecțional pe o cale accesorie Kent — Incorect: Calea Kent aparține AVRT, nu intoxicației digitalice.\n\nCreșterea izolată a pantei fazei 0 fără postpotențiale — Incorect: Post-potențialele precoce sau tardive definesc activitatea trigger, nu absența lor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1052, Mecanismele de producere a aritmiilor — Activitatea declanșată (pagini PDF: 213).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1052
   ],
   "pdfPages": [
    213
   ],
   "section": "Mecanismele de producere a aritmiilor — Activitatea declanșată"
  },
  "learningObjective": "Identificarea activității trigger ca mecanism al tahicardiei atriale digitalice, distinct de reintrare.",
  "optionRationales": [
   "Reintrarea explică majoritatea tahicardiilor paroxistice regulate, nu specific intoxicația digitalică.",
   "Textul precizează că tahicardiile atriale din intoxicația digitalică au ca mecanism activitatea declanșată (trigger).",
   "Sinusul carotidian este implicat în sindroame mediate neural, nu în digitală.",
   "Calea Kent aparține AVRT, nu intoxicației digitalice.",
   "Post-potențialele precoce sau tardive definesc activitatea trigger, nu absența lor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie digitalicei mecanismul de reintrare sau de cale accesorie, deși textul o leagă explicit de postdepolarizări."
  },
  "textbookExpressions": [
   "intoxicaţia digitalică",
   "post-potenţiale"
  ]
 },
 {
  "id": "cardiologie-adv-028",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Următoarele afirmații despre sindroamele mediate neural și boala de nod sinusal sunt adevărate:",
  "options": [
   "Sindromul de sinus carotidian apare la vârstnici și determină frecvent bradicardie",
   "POTS este o creștere acută semnificativă a frecvenței, cu TA normală sau ușor redusă la ortostatism",
   "Hipersensibilitatea carotidiană cu asistolă >3 sec, simptomatică reproductibil, poate beneficia de stimulare permanentă",
   "Sincopa vasovagală afectează doar vârstnicii, fiind rară la adulții tineri",
   "Boala de nod simptomatică se tratează doar cu ablație, stimularea DDD fiind contraindicată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sindromul de sinus carotidian apare la vârstnici și determină frecvent bradicardie — Corect: Textul situează sindromul de sinus carotidian la vârstnici, cu bradicardie frecventă.\n\nPOTS este o creștere acută semnificativă a frecvenței, cu TA normală sau ușor redusă la ortostatism — Corect: POTS este definit prin creștere acută a frecvenței cu TA normală sau ușor redusă la ortostatism.\n\nHipersensibilitatea carotidiană cu asistolă >3 sec, simptomatică reproductibil, poate beneficia de stimulare permanentă — Corect: Asistola >3 sec, cu simptome reproductibile la masaj, poate beneficia de cardiostimulare permanentă.\n\nSincopa vasovagală afectează doar vârstnicii, fiind rară la adulții tineri — Incorect: Sincopa reflexă (vasovagală) afectează mai frecvent adulții tineri, putând apărea și la vârstnici.\n\nBoala de nod simptomatică se tratează doar cu ablație, stimularea DDD fiind contraindicată — Incorect: Boala de nod simptomatică poate necesita stimulare permanentă DDD, asociată cu antiaritmice sau ablație pentru tahicardii.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1053, 1052, Bradicardiile — Sindroame mediate neural și boala de nod (pagini PDF: 214, 213).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1053,
    1052
   ],
   "pdfPages": [
    214,
    213
   ],
   "section": "Bradicardiile — Sindroame mediate neural și boala de nod"
  },
  "learningObjective": "Diferențierea sinusului carotidian, POTS și indicația de pacing la asistolă >3 sec de sincopa vasovagală a tânărului.",
  "optionRationales": [
   "Textul situează sindromul de sinus carotidian la vârstnici, cu bradicardie frecventă.",
   "POTS este definit prin creștere acută a frecvenței cu TA normală sau ușor redusă la ortostatism.",
   "Asistola >3 sec, cu simptome reproductibile la masaj, poate beneficia de cardiostimulare permanentă.",
   "Sincopa reflexă (vasovagală) afectează mai frecvent adulții tineri, putând apărea și la vârstnici.",
   "Boala de nod simptomatică poate necesita stimulare permanentă DDD, asociată cu antiaritmice sau ablație pentru tahicardii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează vârsta sincopei vasovagale și interzice stimularea DDD, deși textul o indică în boala de nod simptomatică."
  },
  "textbookExpressions": [
   "asistolă >3 sec",
   "POTS"
  ]
 },
 {
  "id": "cardiologie-adv-029",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Blocul atrioventricular de gradul II se caracterizează prin:",
  "options": [
   "Mobitz I (Wenckebach): prelungirea progresivă a PR până la o undă P blocată",
   "Mobitz II: undă P blocată fără prelungirea progresivă a PR, de obicei cu QRS >0,12 sec",
   "Conducerea 2:1 sau 3:1 nu se clasifică nici ca Mobitz I, nici ca Mobitz II",
   "Wenckebach este de obicei infranodal, iar Mobitz II la nivelul nodului AV",
   "Riscul de progresie spre BAV complet este mai mare în Mobitz II decât în Wenckebach"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Mobitz I (Wenckebach): prelungirea progresivă a PR până la o undă P blocată — Corect: Definiția Wenckebach este prelungirea progresivă a PR până la P blocată.\n\nMobitz II: undă P blocată fără prelungirea progresivă a PR, de obicei cu QRS >0,12 sec — Corect: Mobitz II nu are prelungire progresivă; QRS este de obicei larg (>0,12 sec).\n\nConducerea 2:1 sau 3:1 nu se clasifică nici ca Mobitz I, nici ca Mobitz II — Corect: Textul precizează că 2:1 sau 3:1 este o formă aparte, neîncadrată ca Mobitz I sau II.\n\nWenckebach este de obicei infranodal, iar Mobitz II la nivelul nodului AV — Incorect: Relația este inversă: Wenckebach la nivelul nodului AV, Mobitz II infranodal (fascicul His).\n\nRiscul de progresie spre BAV complet este mai mare în Mobitz II decât în Wenckebach — Corect: Riscul de progresie spre BAV complet este mai mare în Mobitz II, ritmul de scăpare fiind mai puțin eficient.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1053, Bradicardiile — BAV de gradul II (pagini PDF: 214).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1053
   ],
   "pdfPages": [
    214
   ],
   "section": "Bradicardiile — BAV de gradul II"
  },
  "learningObjective": "Localizarea nodalu versus infranodală a subtipurilor Mobitz și recunoașterea conducerii 2:1 ca formă aparte.",
  "optionRationales": [
   "Definiția Wenckebach este prelungirea progresivă a PR până la P blocată.",
   "Mobitz II nu are prelungire progresivă; QRS este de obicei larg (>0,12 sec).",
   "Textul precizează că 2:1 sau 3:1 este o formă aparte, neîncadrată ca Mobitz I sau II.",
   "Relația este inversă: Wenckebach la nivelul nodului AV, Mobitz II infranodal (fascicul His).",
   "Riscul de progresie spre BAV complet este mai mare în Mobitz II, ritmul de scăpare fiind mai puțin eficient."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sediul Wenckebach/Mobitz II, capcana clasică de localizare a blocului de grad II."
  },
  "textbookExpressions": [
   "Mobitz I",
   "conducere 2: 1"
  ]
 },
 {
  "id": "cardiologie-adv-030",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "În infarctul miocardic acut complicat cu BAV de gradul II:",
  "options": [
   "BAV II din infarctul inferior se recomandă monitorizare și cardiostimulare temporară",
   "BAV II din infarctul anterior are risc mai mare de progresie spre BAV complet și indică stimulare percutană temporară până la stimulator permanent",
   "BAV II din infarctul anterior este benign și nu necesită stimulare",
   "Blocurile 2:1 se localizează doar infranodal",
   "Atropina vindecă durabil blocul anterior cu QRS larg"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "BAV II din infarctul inferior se recomandă monitorizare și cardiostimulare temporară — Corect: Textul recomandă monitorizare și cardiostimulare temporară în BAV II din infarct inferior.\n\nBAV II din infarctul anterior are risc mai mare de progresie spre BAV complet și indică stimulare percutană temporară până la stimulator permanent — Corect: BAV II din infarct anterior are risc mai mare de progresie; se indică stimulare percutană temporară până la implant permanent.\n\nBAV II din infarctul anterior este benign și nu necesită stimulare — Incorect: Forma anterioară nu este benignă; riscul de BAV complet este mai mare.\n\nBlocurile 2:1 se localizează doar infranodal — Incorect: Blocurile 2:1 se pot localiza atât la nivelul nodului AV, cât și infranodal.\n\nAtropina vindecă durabil blocul anterior cu QRS larg — Incorect: Atropina este discutată la BAV cu complexe înguste și cauze tranzitorii, nu ca vindecare a blocului anterior distal.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1055, 1053, Bradicardiile — BAV II în infarctul miocardic (pagini PDF: 216, 214).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1055,
    1053
   ],
   "pdfPages": [
    216,
    214
   ],
   "section": "Bradicardiile — BAV II în infarctul miocardic"
  },
  "learningObjective": "Diferențierea prognosticului BAV II din infarctul inferior față de cel anterior.",
  "optionRationales": [
   "Textul recomandă monitorizare și cardiostimulare temporară în BAV II din infarct inferior.",
   "BAV II din infarct anterior are risc mai mare de progresie; se indică stimulare percutană temporară până la implant permanent.",
   "Forma anterioară nu este benignă; riscul de BAV complet este mai mare.",
   "Blocurile 2:1 se pot localiza atât la nivelul nodului AV, cât și infranodal.",
   "Atropina este discutată la BAV cu complexe înguste și cauze tranzitorii, nu ca vindecare a blocului anterior distal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează gravitatea infarctului anterior versus inferior, perechea clasică de prognostic al BAV peri-infarct."
  },
  "textbookExpressions": [
   "infarctul miocardic anterior",
   "cardiostimulare temporară"
  ]
 },
 {
  "id": "cardiologie-adv-031",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă privind BAV congenital complet:",
  "options": [
   "Nu necesită stimulare dacă este asimptomatic, spre deosebire de forma dobândită",
   "Răspunde durabil la verapamil intravenos",
   "Se asociază doar cu boala Lev a vârstnicului",
   "Cardiostimularea este recomandată pentru BAV congenitale, chiar dacă sunt asimptomatice",
   "Ritmul de scăpare este constant 15-20 b.p.m., indiferent de lățimea QRS"
  ],
  "correct": [
   3
  ],
  "explanation": "Nu necesită stimulare dacă este asimptomatic, spre deosebire de forma dobândită — Incorect: Textul recomandă cardiostimulare și pentru BAV congenitale asimptomatice.\n\nRăspunde durabil la verapamil intravenos — Incorect: Verapamilul nu este tratamentul BAV congenital.\n\nSe asociază doar cu boala Lev a vârstnicului — Incorect: Boala Lev este fibroza distală a vârstnicului, nu forma congenitală (LES matern, transpoziție).\n\nCardiostimularea este recomandată pentru BAV congenitale, chiar dacă sunt asimptomatice — Corect: Cardiostimularea este recomandată pentru BAV congenitale, chiar dacă sunt asimptomatice.\n\nRitmul de scăpare este constant 15-20 b.p.m., indiferent de lățimea QRS — Incorect: Ritmul de scăpare depinde de sediu: 50-60 b.p.m. dacă QRS îngust, 15-40 dacă QRS larg.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1055, BAV complet — Forme congenitale (pagini PDF: 216).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1055
   ],
   "pdfPages": [
    216
   ],
   "section": "BAV complet — Forme congenitale"
  },
  "learningObjective": "Recunoașterea indicației de pacing în BAV congenital chiar asimptomatic.",
  "optionRationales": [
   "Textul recomandă cardiostimulare și pentru BAV congenitale asimptomatice.",
   "Verapamilul nu este tratamentul BAV congenital.",
   "Boala Lev este fibroza distală a vârstnicului, nu forma congenitală (LES matern, transpoziție).",
   "Cardiostimularea este recomandată pentru BAV congenitale, chiar dacă sunt asimptomatice.",
   "Ritmul de scăpare depinde de sediu: 50-60 b.p.m. dacă QRS îngust, 15-40 dacă QRS larg."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde „watchful waiting” al BAV dobândit îngust asimptomatic la forma congenitală, pe care textul o pacează."
  },
  "textbookExpressions": [
   "BAV congenitale",
   "LES matern"
  ]
 },
 {
  "id": "cardiologie-adv-032",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Blocurile de ramură și hemiblocurile se caracterizează prin:",
  "options": [
   "Blocul incomplet alungește QRS până la 0,12 sec; blocul complet presupune QRS ≥0,12 sec",
   "BRD: unde S adânci în DI și V6, unde R ample tardive în V1",
   "Hemiblocul antero-superior produce deviație axială stângă",
   "BRS lasă neschimbată activarea inițială, fără unde Q anormale",
   "Hemiblocul postero-inferior orientează axul QRS inferior și spre dreapta"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Blocul incomplet alungește QRS până la 0,12 sec; blocul complet presupune QRS ≥0,12 sec — Corect: Întârzierea de ramură incompletă alungește QRS până la 0,12 sec; blocul complet are QRS ≥0,12 sec.\n\nBRD: unde S adânci în DI și V6, unde R ample tardive în V1 — Corect: BRD activează tardiv VD: S adânci în DI/V6 și R ample tardive în V1.\n\nHemiblocul antero-superior produce deviație axială stângă — Corect: Blocarea fasciculului anterior orientează activarea spre stânga-superior (deviație axială stângă).\n\nBRS lasă neschimbată activarea inițială, fără unde Q anormale — Incorect: BRS determină și unde Q anormale, fiind ramul care inițiază activarea ventriculară.\n\nHemiblocul postero-inferior orientează axul QRS inferior și spre dreapta — Corect: Fasciculul postero-inferior blochează axul inferior și spre dreapta.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1056, Blocul de ramură — ECG și hemiblocuri (pagini PDF: 217).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1056
   ],
   "pdfPages": [
    217
   ],
   "section": "Blocul de ramură — ECG și hemiblocuri"
  },
  "learningObjective": "Corelarea morfologiei QRS și a axului cu ramul sau fasciculul blocat.",
  "optionRationales": [
   "Întârzierea de ramură incompletă alungește QRS până la 0,12 sec; blocul complet are QRS ≥0,12 sec.",
   "BRD activează tardiv VD: S adânci în DI/V6 și R ample tardive în V1.",
   "Blocarea fasciculului anterior orientează activarea spre stânga-superior (deviație axială stângă).",
   "BRS determină și unde Q anormale, fiind ramul care inițiază activarea ventriculară.",
   "Fasciculul postero-inferior blochează axul inferior și spre dreapta."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă undele Q ale BRS, deși textul le leagă de inițierea stângă a activării ventriculare."
  },
  "textbookExpressions": [
   "0,12 sec",
   "deviaţie axială stângă"
  ]
 },
 {
  "id": "cardiologie-adv-033",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Etiologia blocului de ramură dreaptă:",
  "options": [
   "Poate fi anomalie congenitală izolată, prezentă la 5% din populația sănătoasă",
   "Asocierea BRD cu deviație axială stângă se întâlnește în DSA tip ostium primum",
   "BRD izolat rotește constant axul electric spre dreapta, chiar fără hipertrofie de VD",
   "BRS complet este rar asociat cu insuficiența ventriculară stângă",
   "DSA ostium secundum produce tipic BRS complet, nu BRD"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Poate fi anomalie congenitală izolată, prezentă la 5% din populația sănătoasă — Corect: BRD poate fi anomalie congenitală izolată la 5% din populația sănătoasă.\n\nAsocierea BRD cu deviație axială stângă se întâlnește în DSA tip ostium primum — Corect: Asocierea BRD cu deviație axială stângă este întâlnită în DSA ostium primum.\n\nBRD izolat rotește constant axul electric spre dreapta, chiar fără hipertrofie de VD — Incorect: BRD izolat nu afectează în general axul, decât cu HVD, suprasarcină de VD sau bloc fascicular.\n\nBRS complet este rar asociat cu insuficiența ventriculară stângă — Incorect: BRS complet este frecvent asociat cu insuficiența ventriculară stângă.\n\nDSA ostium secundum produce tipic BRS complet, nu BRD — Incorect: Ostium primum, nu secundum, este legat de BRD plus ax stâng.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1057, Bloc de ramură dreaptă — Etiologie (pagini PDF: 218).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1057
   ],
   "pdfPages": [
    218
   ],
   "section": "Bloc de ramură dreaptă — Etiologie"
  },
  "learningObjective": "Recunoașterea BRD-ului congenital la 5% din sănătoși și a asocierii ostium primum cu BRD plus ax stâng.",
  "optionRationales": [
   "BRD poate fi anomalie congenitală izolată la 5% din populația sănătoasă.",
   "Asocierea BRD cu deviație axială stângă este întâlnită în DSA ostium primum.",
   "BRD izolat nu afectează în general axul, decât cu HVD, suprasarcină de VD sau bloc fascicular.",
   "BRS complet este frecvent asociat cu insuficiența ventriculară stângă.",
   "Ostium primum, nu secundum, este legat de BRD plus ax stâng."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă BRD-ul izolat într-un determinant al axului drept și mută markerul ostium primum pe ostium secundum."
  },
  "textbookExpressions": [
   "5% din populaţia sănătoasă",
   "ostium primum"
  ]
 },
 {
  "id": "cardiologie-adv-034",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tahicardia prin reintrare în nodul atrioventricular (AVNRT):",
  "options": [
   "Este de două ori mai frecventă la femei",
   "Prevalența TSV paroxistice dependente de nodul AV este de aproximativ 2,5/1.000, cu debut uzual între 12 și 30 de ani",
   "Forma tipică „slow-fast” folosește anterograd calea lentă și retrograd calea rapidă",
   "Calea lentă are perioadă refractară lungă, iar calea rapidă perioadă scurtă",
   "Tahicardia sinusală inadecvată este diagnosticul de primă intenție la bărbatul vârstnic cu boală structurală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este de două ori mai frecventă la femei — Corect: AVNRT este de două ori mai frecventă la femei.\n\nPrevalența TSV paroxistice dependente de nodul AV este de aproximativ 2,5/1.000, cu debut uzual între 12 și 30 de ani — Corect: Debutul TSV paroxistice dependente de nod este de obicei între 12 și 30 de ani, prevalența aproximativ 2,5/1.000.\n\nForma tipică „slow-fast” folosește anterograd calea lentă și retrograd calea rapidă — Corect: În forma tipică, extrasistola cade pe calea rapidă refractară și conduce pe calea lentă, apoi retrograd pe cea rapidă (slow-fast).\n\nCalea lentă are perioadă refractară lungă, iar calea rapidă perioadă scurtă — Incorect: Textul atribuie căii lente perioada refractară scurtă și conducere lentă, căii rapide perioada lungă și conducere rapidă.\n\nTahicardia sinusală inadecvată este diagnosticul de primă intenție la bărbatul vârstnic cu boală structurală — Incorect: Tahicardia sinusală inadecvată apare mai frecvent la femeile tinere, nu la bărbatul vârstnic cu boală structurală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1057, TSV — AVNRT și tahicardia sinusală inadecvată (pagini PDF: 218).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1057
   ],
   "pdfPages": [
    218
   ],
   "section": "TSV — AVNRT și tahicardia sinusală inadecvată"
  },
  "learningObjective": "Aplicarea epidemiologiei (femei ×2, 2,5/1.000, vârsta 12-30) și a circuitului slow-fast.",
  "optionRationales": [
   "AVNRT este de două ori mai frecventă la femei.",
   "Debutul TSV paroxistice dependente de nod este de obicei între 12 și 30 de ani, prevalența aproximativ 2,5/1.000.",
   "În forma tipică, extrasistola cade pe calea rapidă refractară și conduce pe calea lentă, apoi retrograd pe cea rapidă (slow-fast).",
   "Textul atribuie căii lente perioada refractară scurtă și conducere lentă, căii rapide perioada lungă și conducere rapidă.",
   "Tahicardia sinusală inadecvată apare mai frecvent la femeile tinere, nu la bărbatul vârstnic cu boală structurală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează proprietățile electrofiziologice ale căilor lentă/rapidă, capcana clasică a AVNRT."
  },
  "textbookExpressions": [
   "2,5/1.000",
   "slow-fast"
  ]
 },
 {
  "id": "cardiologie-adv-035",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Pe ECG, AVNRT tipică se caracterizează cel mai adesea prin:",
  "options": [
   "QRS normale, regulate, 140-240/min, cu unde P absente sau imediat înainte/după QRS",
   "Unde F în dinți de fierăstrău la 300/min cu conducere 2:1",
   "Intervale RR neregulate neregulate și absența activității atriale organizate",
   "PR scurt și undă delta în tahicardie ortodromică",
   "QRS larg prin activare ventriculară pe calea Kent, ca regulă"
  ],
  "correct": [
   0
  ],
  "explanation": "QRS normale, regulate, 140-240/min, cu unde P absente sau imediat înainte/după QRS — Corect: Textul descrie QRS normale, regulate, 140-240/min; undele P lipsesc sau sunt imediat înainte/după QRS.\n\nUnde F în dinți de fierăstrău la 300/min cu conducere 2:1 — Incorect: Undele de flutter cu 300 b.p.m. aparțin flutterului atrial.\n\nIntervale RR neregulate neregulate și absența activității atriale organizate — Incorect: RR neregulate neregulate definesc fibrilația atrială.\n\nPR scurt și undă delta în tahicardie ortodromică — Incorect: PR scurt și unda delta sunt ale preexcitației în ritm sinusal, nu ale AVNRT.\n\nQRS larg prin activare ventriculară pe calea Kent, ca regulă — Incorect: AVNRT are de obicei QRS îngust; QRS largul prin Kent este al AVRT antidromice.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1058, TSV — Aspectul ECG al AVNRT (pagini PDF: 219).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1058
   ],
   "pdfPages": [
    219
   ],
   "section": "TSV — Aspectul ECG al AVNRT"
  },
  "learningObjective": "Recunoașterea QRS îngust 140-240/min cu P simultane ca tipar al AVNRT, distinct de flutter, FA și WPW.",
  "optionRationales": [
   "Textul descrie QRS normale, regulate, 140-240/min; undele P lipsesc sau sunt imediat înainte/după QRS.",
   "Undele de flutter cu 300 b.p.m. aparțin flutterului atrial.",
   "RR neregulate neregulate definesc fibrilația atrială.",
   "PR scurt și unda delta sunt ale preexcitației în ritm sinusal, nu ale AVNRT.",
   "AVNRT are de obicei QRS îngust; QRS largul prin Kent este al AVRT antidromice."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oferă tipare ECG reale ale altor TSV din același cadran ca alternative la AVNRT."
  },
  "textbookExpressions": [
   "140-240/min",
   "AVNRT"
  ]
 },
 {
  "id": "cardiologie-adv-036",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "În fibrilația atrială preexcitată din sindromul WPW:",
  "options": [
   "O cale accesorie cu perioadă refractară anterogradă <250 ms poate conduce la frecvență ventriculară foarte înaltă, cu risc de FV",
   "Incidența morții subite este 0,15-0,39% per pacient-an, putând fi prima manifestare la tineri",
   "Verapamilul sau digoxinul pot accelera conducerea pe calea accesorie și precipita FV, deci nu se folosesc",
   "Adenozina 6 mg apoi 12 mg este tratamentul de elecție al FA preexcitate cu QRS larg",
   "AVRT ortodromică produce, de regulă, tahicardie cu QRS larg"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "O cale accesorie cu perioadă refractară anterogradă <250 ms poate conduce la frecvență ventriculară foarte înaltă, cu risc de FV — Corect: Perioada refractară anterogradă <250 ms permite conducere foarte rapidă, cu risc de fibrilație ventriculară.\n\nIncidența morții subite este 0,15-0,39% per pacient-an, putând fi prima manifestare la tineri — Corect: Incidența morții subite este 0,15-0,39% per pacient-an.\n\nVerapamilul sau digoxinul pot accelera conducerea pe calea accesorie și precipita FV, deci nu se folosesc — Corect: Verapamilul sau digoxinul pot cauza conducere mai rapidă pe calea accesorie; nu se folosesc în FA asociată WPW.\n\nAdenozina 6 mg apoi 12 mg este tratamentul de elecție al FA preexcitate cu QRS larg — Incorect: Adenozina termină AVNRT/AVRT; FA preexcitată cu QRS larg nu se tratează astfel.\n\nAVRT ortodromică produce, de regulă, tahicardie cu QRS larg — Incorect: AVRT ortodromică produce de obicei QRS înguste; antidromica produce QRS largi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1059, WPW — Fibrilația atrială preexcitată (pagini PDF: 220).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1059
   ],
   "pdfPages": [
    220
   ],
   "section": "WPW — Fibrilația atrială preexcitată"
  },
  "learningObjective": "Recunoașterea pragului <250 ms, a riscului de moarte subită și a interdicției verapamil/digoxin în FA-WPW.",
  "optionRationales": [
   "Perioada refractară anterogradă <250 ms permite conducere foarte rapidă, cu risc de fibrilație ventriculară.",
   "Incidența morții subite este 0,15-0,39% per pacient-an.",
   "Verapamilul sau digoxinul pot cauza conducere mai rapidă pe calea accesorie; nu se folosesc în FA asociată WPW.",
   "Adenozina termină AVNRT/AVRT; FA preexcitată cu QRS larg nu se tratează astfel.",
   "AVRT ortodromică produce de obicei QRS înguste; antidromica produce QRS largi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde adenozina (utilă în AVNRT) la FA preexcitată și inversează lățimea QRS a AVRT ortodromice."
  },
  "textbookExpressions": [
   "<250 ms",
   "0,15-0,39%"
  ]
 },
 {
  "id": "cardiologie-adv-037",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Ablația cu cateter în tahicardiile dependente de nodul AV:",
  "options": [
   "Modificarea căii lente este eficientă la 96% dintre pacienții cu AVNRT, cu risc de 1% de BAV complet",
   "Ablația unei singure căi accesorii are succes de 95%, cu recurență de 5%",
   "Succesul în AVNRT este de circa 50%, iar BAV complet apare la 20%",
   "Verapamilul după beta-blocante este asocierea de elecție în tahicardia cu QRS >0,12 sec",
   "Adenozina este interzisă la astmatici, fără nicio posibilitate de administrare cu precauție"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Modificarea căii lente este eficientă la 96% dintre pacienții cu AVNRT, cu risc de 1% de BAV complet — Corect: Modificarea căii lente: eficiență 96%, risc 1% de bloc AV complet.\n\nAblația unei singure căi accesorii are succes de 95%, cu recurență de 5% — Corect: Ablația unei căi accesorii: succes 95%, recurență 5%.\n\nSuccesul în AVNRT este de circa 50%, iar BAV complet apare la 20% — Incorect: Cifrele 50% și 20% nu apar; succesul este net superior, iar BAV-ul este rar.\n\nVerapamilul după beta-blocante este asocierea de elecție în tahicardia cu QRS >0,12 sec — Incorect: Verapamil nu trebuie administrat după beta-blocante sau în tahicardii cu QRS >0,12 sec.\n\nAdenozina este interzisă la astmatici, fără nicio posibilitate de administrare cu precauție — Incorect: Adenozina se utilizează cu precauție la astmatici, nu ca interdicție absolută.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1059, AVNRT/AVRT — Tratament pe termen lung și ablație (pagini PDF: 220).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1059
   ],
   "pdfPages": [
    220
   ],
   "section": "AVNRT/AVRT — Tratament pe termen lung și ablație"
  },
  "learningObjective": "Memorarea ratelor de succes 96%/95% și a riscului de 1% BAV la modificarea căii lente.",
  "optionRationales": [
   "Modificarea căii lente: eficiență 96%, risc 1% de bloc AV complet.",
   "Ablația unei căi accesorii: succes 95%, recurență 5%.",
   "Cifrele 50% și 20% nu apar; succesul este net superior, iar BAV-ul este rar.",
   "Verapamil nu trebuie administrat după beta-blocante sau în tahicardii cu QRS >0,12 sec.",
   "Adenozina se utilizează cu precauție la astmatici, nu ca interdicție absolută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește 96%/1% și 95%/5% cu eșecuri de ordinul zecilor de procente, plauzibile pentru o procedură „invazivă”."
  },
  "textbookExpressions": [
   "96%",
   "risc de 1%"
  ]
 },
 {
  "id": "cardiologie-adv-038",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Epidemiologia și cauzele fibrilației atriale:",
  "options": [
   "Apare la 1-2% din populația generală și la 5-15% dintre persoanele peste 75 de ani",
   "Hipertensiunea și insuficiența cardiacă sunt cele mai frecvente cauze în țările dezvoltate",
   "Aproximativ 30-40% dintre pacienți, mai ales tineri, au cel puțin un părinte cu FA",
   "Apare la o treime dintre pacienții post-chirurgie cardiacă",
   "Cauza clasică dominantă în țările dezvoltate rămâne boala reumatică, nu hipertensiunea"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Apare la 1-2% din populația generală și la 5-15% dintre persoanele peste 75 de ani — Corect: Prevalența 1-2% în populație și 5-15% peste 75 de ani este explicită.\n\nHipertensiunea și insuficiența cardiacă sunt cele mai frecvente cauze în țările dezvoltate — Corect: Hipertensiunea și insuficiența cardiacă sunt cele mai frecvente cauze în țările dezvoltate.\n\nAproximativ 30-40% dintre pacienți, mai ales tineri, au cel puțin un părinte cu FA — Corect: Aproximativ 30-40% au cel puțin un părinte cu FA.\n\nApare la o treime dintre pacienții post-chirurgie cardiacă — Corect: FA apare la o treime din pacienții post-chirurgie cardiacă.\n\nCauza clasică dominantă în țările dezvoltate rămâne boala reumatică, nu hipertensiunea — Incorect: Boala reumatică, alcoolul și tireotoxicoza sunt cauze clasice, dar nu cele mai frecvente în țările dezvoltate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1059, 1060, Fibrilația atrială — Epidemiologie (pagini PDF: 220, 221).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1059,
    1060
   ],
   "pdfPages": [
    220,
    221
   ],
   "section": "Fibrilația atrială — Epidemiologie"
  },
  "learningObjective": "Aplicarea cifrelor 1-2%, 5-15% peste 75 de ani, 30-40% istoric parental și o treime postoperator.",
  "optionRationales": [
   "Prevalența 1-2% în populație și 5-15% peste 75 de ani este explicită.",
   "Hipertensiunea și insuficiența cardiacă sunt cele mai frecvente cauze în țările dezvoltate.",
   "Aproximativ 30-40% au cel puțin un părinte cu FA.",
   "FA apare la o treime din pacienții post-chirurgie cardiacă.",
   "Boala reumatică, alcoolul și tireotoxicoza sunt cauze clasice, dar nu cele mai frecvente în țările dezvoltate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează etiologia „clasică” reumatică ca dominantă în Occident, deși textul o înlocuiește cu HTA și IC."
  },
  "textbookExpressions": [
   "1-2%",
   "5-15%"
  ]
 },
 {
  "id": "cardiologie-adv-039",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Clasificarea clinică a fibrilației atriale include:",
  "options": [
   "Paroxistică — convertită spontan în cel mult 7 zile",
   "Persistentă — continuă, durată >7 zile",
   "Persistentă îndelungată — continuă, durată >1 an",
   "Permanentă — orice FA de peste 48 de ore, indiferent de decizia de conversie",
   "Nou diagnosticată se defineste doar dacă durata este sub 24 de ore"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Paroxistică — convertită spontan în cel mult 7 zile — Corect: Paroxistică: convertită spontan în cel mult 7 zile.\n\nPersistentă — continuă, durată >7 zile — Corect: Persistentă: continuă, durată >7 zile.\n\nPersistentă îndelungată — continuă, durată >1 an — Corect: Persistentă îndelungată: continuă, durată >1 an.\n\nPermanentă — orice FA de peste 48 de ore, indiferent de decizia de conversie — Incorect: Permanentă înseamnă decizia comună de a abandona reconversia, nu simpla durată de 48 de ore.\n\nNou diagnosticată se defineste doar dacă durata este sub 24 de ore — Incorect: Nou diagnosticată este independentă de durată sau severitatea simptomelor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1060, 1061, Fibrilația atrială — Clasificare clinică (pagini PDF: 221, 222).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1060,
    1061
   ],
   "pdfPages": [
    221,
    222
   ],
   "section": "Fibrilația atrială — Clasificare clinică"
  },
  "learningObjective": "Diferențierea pragurilor de 7 zile și 1 an și a FA permanente ca decizie comună, nu ca durată brută.",
  "optionRationales": [
   "Paroxistică: convertită spontan în cel mult 7 zile.",
   "Persistentă: continuă, durată >7 zile.",
   "Persistentă îndelungată: continuă, durată >1 an.",
   "Permanentă înseamnă decizia comună de a abandona reconversia, nu simpla durată de 48 de ore.",
   "Nou diagnosticată este independentă de durată sau severitatea simptomelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă pragul de anticoagulare al cardioversiei (48 h) cu definiția FA permanente."
  },
  "textbookExpressions": [
   "7 zile",
   ">1 an"
  ]
 },
 {
  "id": "cardiologie-adv-040",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "În vederea cardioversiei elective a fibrilației atriale cu durată peste 48 de ore:",
  "options": [
   "Anticoagularea 3 săptămâni înainte nu este necesară dacă se folosește un DOAC",
   "Se anticoagulă 3 săptămâni anterior (warfarină INR 2,0-3,0 sau DOAC) și cel puțin 4 săptămâni după",
   "Conversia electrică reușește la aproximativ 80% dintre pacienți; unda bifazică este mai eficientă",
   "Ecografia transesofagiană este inutilă dacă cardioversia este urgentă și pacientul nu este anticoagulat",
   "Metoda „pill in pocket” folosește doar digoxin oral la domiciliu, fără testare spitalicească"
  ],
  "correct": [
   1,
   2
  ],
  "explanation": "Anticoagularea 3 săptămâni înainte nu este necesară dacă se folosește un DOAC — Incorect: DOAC sau warfarina se folosesc 3 săptămâni înainte, exceptând FA <48 de ore; DOAC nu scutesc de această fereastră.\n\nSe anticoagulă 3 săptămâni anterior (warfarină INR 2,0-3,0 sau DOAC) și cel puțin 4 săptămâni după — Corect: Textul precizează 3 săptămâni anterior și cel puțin 4 săptămâni după.\n\nConversia electrică reușește la aproximativ 80% dintre pacienți; unda bifazică este mai eficientă — Corect: Conversia electrică reușește la aproximativ 80%; defibrilarea bifazică este mai eficientă.\n\nEcografia transesofagiană este inutilă dacă cardioversia este urgentă și pacientul nu este anticoagulat — Incorect: Dacă cardioversia este urgentă fără anticoagulare, ETE exclude trombii intraatriali.\n\nMetoda „pill in pocket” folosește doar digoxin oral la domiciliu, fără testare spitalicească — Incorect: Pill in pocket înseamnă flecainidă sau propafenonă orală, testate în prealabil în spital.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1061, Fibrilația atrială — Cardioversie și anticoagulare peri-procedurală (pagini PDF: 222).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1061
   ],
   "pdfPages": [
    222
   ],
   "section": "Fibrilația atrială — Cardioversie și anticoagulare peri-procedurală"
  },
  "learningObjective": "Aplicarea ferestrei 3 săptămâni înainte / 4 după și a ratei de succes de 80% a cardioversiei electrice.",
  "optionRationales": [
   "DOAC sau warfarina se folosesc 3 săptămâni înainte, exceptând FA <48 de ore; DOAC nu scutesc de această fereastră.",
   "Textul precizează 3 săptămâni anterior și cel puțin 4 săptămâni după.",
   "Conversia electrică reușește la aproximativ 80%; defibrilarea bifazică este mai eficientă.",
   "Dacă cardioversia este urgentă fără anticoagulare, ETE exclude trombii intraatriali.",
   "Pill in pocket înseamnă flecainidă sau propafenonă orală, testate în prealabil în spital."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează fereastra de 3 săptămâni sub pretextul DOAC și înlocuiește antiaritmicul de buzunar cu digoxin."
  },
  "textbookExpressions": [
   "3 săptămâni",
   "80%"
  ]
 },
 {
  "id": "cardiologie-adv-041",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Controlul ritmului versus controlul frecvenței în fibrilația atrială:",
  "options": [
   "Studiile AFFIRM (>65 ani) și AF-CHF nu au arătat o diferență netă de mortalitate între strategii",
   "La insuficiență cardiacă sau hipertrofie de VS se recomandă doar amiodarona pentru menținerea sinusului",
   "Frecvența de repaus se consideră controlată sub 110 b.p.m.; dacă simptomele persistă, ținta este 60-80 în repaus și <110 la efort moderat",
   "Ablația de vene pulmonare elimină necesitatea anticoagulării ulterioare",
   "Amiodarona este antiaritmicul de primă alegere la tânărul fără boală structurală, înaintea clasei Ic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Studiile AFFIRM (>65 ani) și AF-CHF nu au arătat o diferență netă de mortalitate între strategii — Corect: AFFIRM și AF-CHF nu arată diferență netă de mortalitate sau simptomatologie între strategii.\n\nLa insuficiență cardiacă sau hipertrofie de VS se recomandă doar amiodarona pentru menținerea sinusului — Corect: În IC sau hipertrofie de VS se recomandă doar amiodarona.\n\nFrecvența de repaus se consideră controlată sub 110 b.p.m.; dacă simptomele persistă, ținta este 60-80 în repaus și <110 la efort moderat — Corect: Controlul este FC de repaus <110; dacă persistă simptome, 60-80 în repaus și <110 la efort moderat.\n\nAblația de vene pulmonare elimină necesitatea anticoagulării ulterioare — Incorect: O ablație aparent reușită nu elimină necesitatea unei anticoagulări eficiente.\n\nAmiodarona este antiaritmicul de primă alegere la tânărul fără boală structurală, înaintea clasei Ic — Incorect: Amiodarona se rezervă cazurilor în care celelalte antiaritmice au eșuat, din cauza efectelor extracardiace.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1061, Fibrilația atrială — Controlul ritmului și al frecvenței (pagini PDF: 222).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1061
   ],
   "pdfPages": [
    222
   ],
   "section": "Fibrilația atrială — Controlul ritmului și al frecvenței"
  },
  "learningObjective": "Aplicarea rezultatelor AFFIRM/AF-CHF, a restricției amiodaronei în IC/HVS și a țintelor de frecvență <110 apoi 60-80.",
  "optionRationales": [
   "AFFIRM și AF-CHF nu arată diferență netă de mortalitate sau simptomatologie între strategii.",
   "În IC sau hipertrofie de VS se recomandă doar amiodarona.",
   "Controlul este FC de repaus <110; dacă persistă simptome, 60-80 în repaus și <110 la efort moderat.",
   "O ablație aparent reușită nu elimină necesitatea unei anticoagulări eficiente.",
   "Amiodarona se rezervă cazurilor în care celelalte antiaritmice au eșuat, din cauza efectelor extracardiace."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă ablația într-un substitut al anticoagulării și promovează amiodarona ca primă linie la cordul structural normal."
  },
  "textbookExpressions": [
   "AFFIRM",
   "sub 110 b.p.m."
  ]
 },
 {
  "id": "cardiologie-adv-042",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Un scor HAS-BLED de 3 sau mai mult corespunde unui risc anual de hemoragie majoră sub anticoagulante:",
  "options": [
   "De circa 1%, identic scorului 0",
   "Peste 5% (risc crescut)",
   "Sub 0,1%, neglijabil clinic",
   "Identic riscului de AVC al CHA2DS2-VASc 0",
   "Doar riscului de sângerare gingivală, nu de hemoragie majoră"
  ],
  "correct": [
   1
  ],
  "explanation": "De circa 1%, identic scorului 0 — Incorect: Scorul 0 are risc anual de circa 1% (risc scăzut).\n\nPeste 5% (risc crescut) — Corect: Textul precizează risc >5% la un scor de 3 sau mai mult (risc crescut).\n\nSub 0,1%, neglijabil clinic — Incorect: Valoarea <0,1% nu apare.\n\nIdentic riscului de AVC al CHA2DS2-VASc 0 — Incorect: HAS-BLED estimează sângerarea, nu AVC-ul.\n\nDoar riscului de sângerare gingivală, nu de hemoragie majoră — Incorect: Definiția este hemoragie majoră, nu sângerare minoră.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1062, Fibrilația atrială — Scorul HAS-BLED (pagini PDF: 223).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1062
   ],
   "pdfPages": [
    223
   ],
   "section": "Fibrilația atrială — Scorul HAS-BLED"
  },
  "learningObjective": "Reținerea pragului HAS-BLED ≥3 ca risc anual de hemoragie majoră >5%.",
  "optionRationales": [
   "Scorul 0 are risc anual de circa 1% (risc scăzut).",
   "Textul precizează risc >5% la un scor de 3 sau mai mult (risc crescut).",
   "Valoarea <0,1% nu apare.",
   "HAS-BLED estimează sângerarea, nu AVC-ul.",
   "Definiția este hemoragie majoră, nu sângerare minoră."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă 1% al scorului 0 cu >5% al scorului ≥3, două capete ale aceleiași scale."
  },
  "textbookExpressions": [
   "HAS-BLED",
   ">5%"
  ]
 },
 {
  "id": "cardiologie-adv-043",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Flutterul atrial tipic (dependent de istm):",
  "options": [
   "Este un ritm atrial organizat, 250-350 b.p.m., cu circuit de macro-reintrare în jurul inelului tricuspidian",
   "Modelul cel mai frecvent este antiorar, cu unde F negative în derivațiile inferioare și pozitive în V1-V2",
   "Cea mai frecventă conducere AV este 2:1, cu frecvență ventriculară 150 b.p.m.",
   "Undele F antiorare sunt pozitive inferior și negative în V1",
   "Ablația de istm cavo-tricuspidian este o opțiune de rezervă, ineficientă în flutterul tipic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este un ritm atrial organizat, 250-350 b.p.m., cu circuit de macro-reintrare în jurul inelului tricuspidian — Corect: Flutterul tipic: 250-350 b.p.m., macro-reintrare atrial dreaptă în jurul inelului tricuspidian.\n\nModelul cel mai frecvent este antiorar, cu unde F negative în derivațiile inferioare și pozitive în V1-V2 — Corect: Antiorar: F negative inferior, pozitive în V1 și V2.\n\nCea mai frecventă conducere AV este 2:1, cu frecvență ventriculară 150 b.p.m. — Corect: Cel mai frecvent, fiecare a doua undă este condusă → 150 b.p.m.\n\nUndele F antiorare sunt pozitive inferior și negative în V1 — Incorect: Orientarea descrisă este a flutterului orar, nu antiorar.\n\nAblația de istm cavo-tricuspidian este o opțiune de rezervă, ineficientă în flutterul tipic — Incorect: Ablația de istm este terapia de elecție în flutterul tipic recurent, aproape definitivă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1062, 1063, Flutterul atrial — Mecanism și ECG (pagini PDF: 223, 224).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1062,
    1063
   ],
   "pdfPages": [
    223,
    224
   ],
   "section": "Flutterul atrial — Mecanism și ECG"
  },
  "learningObjective": "Recunoașterea circuitului antiorar 250-350/min și a conducerii 2:1 la 150 b.p.m.",
  "optionRationales": [
   "Flutterul tipic: 250-350 b.p.m., macro-reintrare atrial dreaptă în jurul inelului tricuspidian.",
   "Antiorar: F negative inferior, pozitive în V1 și V2.",
   "Cel mai frecvent, fiecare a doua undă este condusă → 150 b.p.m.",
   "Orientarea descrisă este a flutterului orar, nu antiorar.",
   "Ablația de istm este terapia de elecție în flutterul tipic recurent, aproape definitivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează polaritatea undelor F antiorar/orar și degradează ablația de istm, metoda de elecție."
  },
  "textbookExpressions": [
   "250-350 b.p.m.",
   "dinţi de fierăstrău"
  ]
 },
 {
  "id": "cardiologie-adv-044",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tahicardia atrială:",
  "options": [
   "Prevalența este sub 1% din toate tipurile de aritmii",
   "Forma prin automatism crescut (125-250 b.p.m.) prezintă frecvent „warm-up” și „cool-down”",
   "Masajul sinusului carotidian oprește constant tahicardia atrială, ca pe AVNRT",
   "Tahicardia atrială cu bloc este, de obicei, extrasistolică benignă, fără legătură cu digitala",
   "Forma prin reintrare este tipic mai rapidă (peste 250 b.p.m.) decât cea automată"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Prevalența este sub 1% din toate tipurile de aritmii — Corect: Prevalența este sub 1% din toate tipurile de aritmii.\n\nForma prin automatism crescut (125-250 b.p.m.) prezintă frecvent „warm-up” și „cool-down” — Corect: Automatismul crescut: 125-250 b.p.m., cu creștere și scădere progresivă a frecvenței.\n\nMasajul sinusului carotidian oprește constant tahicardia atrială, ca pe AVNRT — Incorect: Masajul poate crește gradul de BAV și ajută diagnosticul, dar nu oprește tahicardia.\n\nTahicardia atrială cu bloc este, de obicei, extrasistolică benignă, fără legătură cu digitala — Incorect: Tahicardia atrială cu bloc este de multe ori rezultatul intoxicației digitalice.\n\nForma prin reintrare este tipic mai rapidă (peste 250 b.p.m.) decât cea automată — Incorect: Reintrarea este de obicei mai lentă (125-150 b.p.m.), nu mai rapidă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1063, Tahicardia atrială (pagini PDF: 224).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1063
   ],
   "pdfPages": [
    224
   ],
   "section": "Tahicardia atrială"
  },
  "learningObjective": "Diferențierea formei automate cu warm-up/cool-down de reintrarea mai lentă 125-150 și de efectul masajului carotidian.",
  "optionRationales": [
   "Prevalența este sub 1% din toate tipurile de aritmii.",
   "Automatismul crescut: 125-250 b.p.m., cu creștere și scădere progresivă a frecvenței.",
   "Masajul poate crește gradul de BAV și ajută diagnosticul, dar nu oprește tahicardia.",
   "Tahicardia atrială cu bloc este de multe ori rezultatul intoxicației digitalice.",
   "Reintrarea este de obicei mai lentă (125-150 b.p.m.), nu mai rapidă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie masajului carotidian oprirea AVNRT-like și inversează vitezele reintrare versus automatism."
  },
  "textbookExpressions": [
   "warm-up",
   "sub 1%"
  ]
 },
 {
  "id": "cardiologie-adv-045",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Diagnosticul diferențial ECG între tahicardia ventriculară și TSV cu aberanță este orientat spre TV dacă există:",
  "options": [
   "QRS foarte larg (>0,14 sec)",
   "Disociație atrioventriculară",
   "Concordanță QRS (aceeași polaritate în V1-V6)",
   "Undă S adâncă în V6",
   "QRS îngust (<0,10 sec) cu morphologie tipică de BRD"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "QRS foarte larg (>0,14 sec) — Corect: Cadranul 30.17 include QRS foarte larg (>0,14 sec).\n\nDisociație atrioventriculară — Corect: Disociația AV pledează pentru TV.\n\nConcordanță QRS (aceeași polaritate în V1-V6) — Corect: Concordanța QRS în precordialele V1-V6 este criteriu de TV.\n\nUndă S adâncă în V6 — Corect: Unda S adâncă în V6 este enumerată.\n\nQRS îngust (<0,10 sec) cu morphologie tipică de BRD — Incorect: QRS îngust cu morphologie tipică de bloc de ramură pledează pentru TSV cu aberanță, nu pentru TV.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1063, Aritmiile ventriculare — Criterii ECG (Cadranul 30.17) (pagini PDF: 224).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1063
   ],
   "pdfPages": [
    224
   ],
   "section": "Aritmiile ventriculare — Criterii ECG (Cadranul 30.17)"
  },
  "learningObjective": "Aplicarea criteriilor din Cadranul 30.17 și a regulii că 80% dintre tahicardiile cu QRS larg sunt ventriculare.",
  "optionRationales": [
   "Cadranul 30.17 include QRS foarte larg (>0,14 sec).",
   "Disociația AV pledează pentru TV.",
   "Concordanța QRS în precordialele V1-V6 este criteriu de TV.",
   "Unda S adâncă în V6 este enumerată.",
   "QRS îngust cu morphologie tipică de bloc de ramură pledează pentru TSV cu aberanță, nu pentru TV."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele patru criterii reale stau alături de morphologia care, dimpotrivă, susține TSV cu aberanță."
  },
  "textbookExpressions": [
   ">0,14 sec",
   "disociaţie atrioventriculară"
  ]
 },
 {
  "id": "cardiologie-adv-046",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la sindromul Brugada:",
  "options": [
   "Beta-blocantele sunt tratamentul de elecție și reduc mortalitatea",
   "Mutația SCN5A explică toate cazurile, fiind constantă",
   "Singurul tratament eficient este implantarea ICD; beta-blocantele nu sunt utile, putând fi chiar nocive",
   "Testul de provocare se face cu amiodaronă, nu cu flecainidă sau ajmalină",
   "Este mai frecvent la femei vârstnice din Europa de Nord decât la tinerii de sex masculin din Asia de Sud-Est"
  ],
  "correct": [
   2
  ],
  "explanation": "Beta-blocantele sunt tratamentul de elecție și reduc mortalitatea — Incorect: Beta-blocantele nu sunt utile, putând fi chiar nocive.\n\nMutația SCN5A explică toate cazurile, fiind constantă — Incorect: Doar în 20% din cazuri este moștenită prin mutația SCN5A; există și alte gene.\n\nSingurul tratament eficient este implantarea ICD; beta-blocantele nu sunt utile, putând fi chiar nocive — Corect: Textul precizează că singurul tratament eficient este ICD-ul; beta-blocantele pot fi nocive.\n\nTestul de provocare se face cu amiodaronă, nu cu flecainidă sau ajmalină — Incorect: Testul de provocare folosește antiaritmice de clasă I (flecainidă sau ajmalină).\n\nEste mai frecvent la femei vârstnice din Europa de Nord decât la tinerii de sex masculin din Asia de Sud-Est — Incorect: Se întâlnește mai frecvent la tineri de sex masculin și în Asia de Sud-Est.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1064, Sindromul Brugada (pagini PDF: 225).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1064
   ],
   "pdfPages": [
    225
   ],
   "section": "Sindromul Brugada"
  },
  "learningObjective": "Recunoașterea ICD ca unică terapie eficientă și a potențialului nociv al beta-blocantelor.",
  "optionRationales": [
   "Beta-blocantele nu sunt utile, putând fi chiar nocive.",
   "Doar în 20% din cazuri este moștenită prin mutația SCN5A; există și alte gene.",
   "Textul precizează că singurul tratament eficient este ICD-ul; beta-blocantele pot fi nocive.",
   "Testul de provocare folosește antiaritmice de clasă I (flecainidă sau ajmalină).",
   "Se întâlnește mai frecvent la tineri de sex masculin și în Asia de Sud-Est."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Promovează beta-blocantul — util în LQTS — ca terapie Brugada, deși textul îl consideră potențial nociv."
  },
  "textbookExpressions": [
   "SCN5A",
   "sindrom Brugada"
  ]
 },
 {
  "id": "cardiologie-adv-047",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Sindromul QT lung congenital:",
  "options": [
   "Jervell-Lange-Nielsen asociază surditate și este autozomal recesiv; Romano-Ward este autozomal dominant, fără surditate",
   "LQT1 (KCNQ1): aritmii declanșate de efort, în special înot",
   "LQT2 (KCNH2): aritmii declanșate de emoții sau stimuli acustici",
   "LQT3 (SCN5A): aritmii în efortul maximal, nu în somn",
   "Isoprenalina este tratamentul de elecție al formei congenitale, nu al celei dobândite"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Jervell-Lange-Nielsen asociază surditate și este autozomal recesiv; Romano-Ward este autozomal dominant, fără surditate — Corect: Jervell-Lange-Nielsen: autozomal recesiv cu surditate; Romano-Ward: autozomal dominant fără surditate.\n\nLQT1 (KCNQ1): aritmii declanșate de efort, în special înot — Corect: LQT1: efort, în special înot.\n\nLQT2 (KCNH2): aritmii declanșate de emoții sau stimuli acustici — Corect: LQT2: emoții sau stimuli acustici.\n\nLQT3 (SCN5A): aritmii în efortul maximal, nu în somn — Incorect: LQT3 (SCN5A): aritmii în repaus sau în timpul somnului, nu la efort maximal.\n\nIsoprenalina este tratamentul de elecție al formei congenitale, nu al celei dobândite — Incorect: Isoprenalina poate fi eficientă în QT lung dobândit și este contraindicată în forma congenitală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1065, 1064, Sindromul QT lung congenital — LQT1–3 (pagini PDF: 226, 225).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1065,
    1064
   ],
   "pdfPages": [
    226,
    225
   ],
   "section": "Sindromul QT lung congenital — LQT1–3"
  },
  "learningObjective": "Potrivirea genei cu trigger-ul (înot, stimuli acustici, somn) și a transmiterii Jervell versus Romano-Ward.",
  "optionRationales": [
   "Jervell-Lange-Nielsen: autozomal recesiv cu surditate; Romano-Ward: autozomal dominant fără surditate.",
   "LQT1: efort, în special înot.",
   "LQT2: emoții sau stimuli acustici.",
   "LQT3 (SCN5A): aritmii în repaus sau în timpul somnului, nu la efort maximal.",
   "Isoprenalina poate fi eficientă în QT lung dobândit și este contraindicată în forma congenitală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă trigger-ul LQT3 cu efortul (al LQT1) și inversează indicația isoprenalinei congenital/dobândit."
  },
  "textbookExpressions": [
   "LQT1",
   "Romano-Ward"
  ]
 },
 {
  "id": "cardiologie-adv-048",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tratamentul acut al torsadei din QT lung dobândit include:",
  "options": [
   "Sulfat de magneziu 8 mmol în 10-15 minute",
   "Isoprenalină intravenos, eficientă în forma dobândită",
   "Isoprenalină ca primă linie și în forma congenitală",
   "Prelungirea bradicardiei pentru a scurta QT",
   "Menținerea medicamentului cauzator până la dispariția aritmiei"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sulfat de magneziu 8 mmol în 10-15 minute — Corect: Textul indică sulfat de magneziu 8 mmol (Mg2+) în 10-15 min pentru QT lung dobândit.\n\nIsoprenalină intravenos, eficientă în forma dobândită — Corect: Isoprenalina i.v. poate fi eficientă în QT lung dobândit.\n\nIsoprenalină ca primă linie și în forma congenitală — Incorect: Isoprenalina este contraindicată la pacienții cu QT lung congenital.\n\nPrelungirea bradicardiei pentru a scurta QT — Incorect: Prelungirea QT și torsada sunt provocate de obicei de bradicardie; se menține frecvența prin stimulare.\n\nMenținerea medicamentului cauzator până la dispariția aritmiei — Incorect: Se sistează medicamentele care induc QT lung.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1065, QT lung dobândit — Tratament acut (pagini PDF: 226).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1065
   ],
   "pdfPages": [
    226
   ],
   "section": "QT lung dobândit — Tratament acut"
  },
  "learningObjective": "Reținerea dozei de magneziu 8 mmol și a distincției isoprenalină: utilă dobândit, contraindicată congenital.",
  "optionRationales": [
   "Textul indică sulfat de magneziu 8 mmol (Mg2+) în 10-15 min pentru QT lung dobândit.",
   "Isoprenalina i.v. poate fi eficientă în QT lung dobândit.",
   "Isoprenalina este contraindicată la pacienții cu QT lung congenital.",
   "Prelungirea QT și torsada sunt provocate de obicei de bradicardie; se menține frecvența prin stimulare.",
   "Se sistează medicamentele care induc QT lung."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde isoprenalina — legitimă în forma dobândită — la LQTS congenital, unde textul o contraindică."
  },
  "textbookExpressions": [
   "8 mmol",
   "lsoprenalină"
  ]
 },
 {
  "id": "cardiologie-adv-049",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tahicardia ventriculară nesusținută (TVNS):",
  "options": [
   "Este definită ca ≥5 bătăi ventriculare consecutive, cu durată sub 30 de secunde",
   "Poate apărea la 6% dintre pacienții cu cord structural normal, de regulă fără tratament",
   "Apare la 60-80% dintre pacienții cu boală cardiacă structurală",
   "Supresia cu antiaritmice de clasă I este necesară pentru îmbunătățirea prognosticului",
   "ICD nu aduce beneficiu la fracție de ejecție <30%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este definită ca ≥5 bătăi ventriculare consecutive, cu durată sub 30 de secunde — Corect: Definiția este o succesiune de 5 sau mai multe bătăi ventriculare, durată sub 30 de secunde.\n\nPoate apărea la 6% dintre pacienții cu cord structural normal, de regulă fără tratament — Corect: TVNS poate apărea la 6% cu cord structural normal, de regulă fără tratament.\n\nApare la 60-80% dintre pacienții cu boală cardiacă structurală — Corect: Apare la 60-80% din pacienții cu boală cardiacă structurală.\n\nSupresia cu antiaritmice de clasă I este necesară pentru îmbunătățirea prognosticului — Incorect: Supresia cu antiaritmice nu este necesară; beta-blocantele pot îmbunătăți calitatea vieții.\n\nICD nu aduce beneficiu la fracție de ejecție <30% — Incorect: ICD a îmbunătățit supraviețuirea la pacienții cu fracție de ejecție <30%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1066, Tahicardia ventriculară nesusținută (pagini PDF: 227).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1066
   ],
   "pdfPages": [
    227
   ],
   "section": "Tahicardia ventriculară nesusținută"
  },
  "learningObjective": "Aplicarea definiției ≥5 bătăi/<30 s și a prevalențelor 6% versus 60-80%.",
  "optionRationales": [
   "Definiția este o succesiune de 5 sau mai multe bătăi ventriculare, durată sub 30 de secunde.",
   "TVNS poate apărea la 6% cu cord structural normal, de regulă fără tratament.",
   "Apare la 60-80% din pacienții cu boală cardiacă structurală.",
   "Supresia cu antiaritmice nu este necesară; beta-blocantele pot îmbunătăți calitatea vieții.",
   "ICD a îmbunătățit supraviețuirea la pacienții cu fracție de ejecție <30%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează indicația ICD la FE<30% și transformă antiaritmicele de clasă I în terapie de prognostic."
  },
  "textbookExpressions": [
   "5 sau mai multe",
   "<30%"
  ]
 },
 {
  "id": "cardiologie-adv-050",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Precizați enunțul corect despre tahicardia ventriculară idiopatică pe cord structural normal:",
  "options": [
   "Are prognostic infaust, similar TV din cardiopatia ischemică",
   "Ablația cu radiofrecvență este curativă în 90% din cazuri la simptomatici",
   "Originea este constant în atriul stâng, fără posibilitate de localizare în tractul de ejecție al VD",
   "Verapamilul este contraindicat în formele idiopatice, inclusiv în varianta sensibilă la blocante de calciu",
   "Tahicardia Gallavardin este o formă scurtă, nesusținută, fără risc de cardiomiopatie"
  ],
  "correct": [
   1
  ],
  "explanation": "Are prognostic infaust, similar TV din cardiopatia ischemică — Incorect: Textul o consideră de obicei benignă, cu prognostic excelent pe termen lung.\n\nAblația cu radiofrecvență este curativă în 90% din cazuri la simptomatici — Corect: La simptomatici, ablația cu radiofrecvență este foarte eficientă, curativă în 90% din cazuri.\n\nOriginea este constant în atriul stâng, fără posibilitate de localizare în tractul de ejecție al VD — Incorect: Poate origina în tractul de ejecție al VD sau la nivelul VS septal.\n\nVerapamilul este contraindicat în formele idiopatice, inclusiv în varianta sensibilă la blocante de calciu — Incorect: Există o formă sensibilă la verapamil, care răspunde la blocantele de calciu non-dihidropiridinice.\n\nTahicardia Gallavardin este o formă scurtă, nesusținută, fără risc de cardiomiopatie — Incorect: Gallavardin este forma incesantă care, netratată, poate conduce la cardiomiopatie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1066, TV pe cord structural normal (pagini PDF: 227).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1066
   ],
   "pdfPages": [
    227
   ],
   "section": "TV pe cord structural normal"
  },
  "learningObjective": "Reținerea ratei de 90% a ablației curative și a originii RVOT/septal stâng.",
  "optionRationales": [
   "Textul o consideră de obicei benignă, cu prognostic excelent pe termen lung.",
   "La simptomatici, ablația cu radiofrecvență este foarte eficientă, curativă în 90% din cazuri.",
   "Poate origina în tractul de ejecție al VD sau la nivelul VS septal.",
   "Există o formă sensibilă la verapamil, care răspunde la blocantele de calciu non-dihidropiridinice.",
   "Gallavardin este forma incesantă care, netratată, poate conduce la cardiomiopatie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie formei idiopatice prognosticul TV ischemice și interzice verapamilul, deși există o variantă sensibilă la acesta."
  },
  "textbookExpressions": [
   "90% din cazuri",
   "tahicardia Gallavardin"
  ]
 },
 {
  "id": "cardiologie-adv-051",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Clasificarea Vaughan Williams, dincolo de subclasele Ia/Ib/Ic deja cunoscute:",
  "options": [
   "Clasa Ia (disopiramidă) prelungește potențialul de acțiune",
   "Clasa II sunt beta-blocante (atenolol, bisoprolol, propranolol, esmolol)",
   "Clasa IV (verapamil, diltiazem) scurtează potențialul de acțiune (faza de platou)",
   "Vernakalantul este un beta-blocant pur, fără efect pe canale multiple",
   "Regula generală: clasa Ic la cord structural, clasa III doar la cord normal"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Clasa Ia (disopiramidă) prelungește potențialul de acțiune — Corect: Cadranul 30.19: clasa Ia prelungește potențialul de acțiune (disopiramidă).\n\nClasa II sunt beta-blocante (atenolol, bisoprolol, propranolol, esmolol) — Corect: Clasa II: atenolol, acebutolol, bisoprolol, propranolol, esmolol.\n\nClasa IV (verapamil, diltiazem) scurtează potențialul de acțiune (faza de platou) — Corect: Clasa IV scurtează potențialul de acțiune (faza de platou): verapamil, diltiazem.\n\nVernakalantul este un beta-blocant pur, fără efect pe canale multiple — Incorect: Vernakalant este blocant al mai multor canale, aprobat i.v. pentru cardioversia FA paroxistice.\n\nRegula generală: clasa Ic la cord structural, clasa III doar la cord normal — Incorect: Regula generală este inversă: Ic la cord structural normal, III la boli structurale.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1067, Antiaritmice — Vaughan Williams (clasele II, III, IV) (pagini PDF: 228).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1067
   ],
   "pdfPages": [
    228
   ],
   "section": "Antiaritmice — Vaughan Williams (clasele II, III, IV)"
  },
  "learningObjective": "Completarea tabelului: Ia prelungește PA, II = beta-blocante, IV scurtează platoul; vernakalant pentru cardioversia FA.",
  "optionRationales": [
   "Cadranul 30.19: clasa Ia prelungește potențialul de acțiune (disopiramidă).",
   "Clasa II: atenolol, acebutolol, bisoprolol, propranolol, esmolol.",
   "Clasa IV scurtează potențialul de acțiune (faza de platou): verapamil, diltiazem.",
   "Vernakalant este blocant al mai multor canale, aprobat i.v. pentru cardioversia FA paroxistice.",
   "Regula generală este inversă: Ic la cord structural normal, III la boli structurale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează regula Ic/III pe cord normal versus structural și degradează vernakalantul la un beta-blocant pur."
  },
  "textbookExpressions": [
   "Prelungesc potenţialul de acţiune",
   "Vernakalant"
  ]
 },
 {
  "id": "cardiologie-adv-052",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Ablația cu cateter și defibrilatorul implantabil:",
  "options": [
   "Este foarte eficientă în AVNRT, AVRT/WPW, TV pe cord normal, flutter, tahicardie atrială și FA paroxistică (izolare de vene pulmonare)",
   "Pacienții simptomatici cu preexcitație (WPW) sunt sfătuiți să recurgă la ablație ca terapie de primă linie",
   "Izolarea venelor pulmonare are succes pe termen lung 70-80% la tineri cu FA paroxistică, AS normal și fără boală structurală",
   "Ablația flutterului tipic este eficientă în 90-95% din cazuri",
   "ICD-ul recunoaște TV/FV dar nu poate livra overdrive pacing, ci doar șocuri"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este foarte eficientă în AVNRT, AVRT/WPW, TV pe cord normal, flutter, tahicardie atrială și FA paroxistică (izolare de vene pulmonare) — Corect: Lista indicațiilor de înaltă eficiență include aceste tahiaritmii.\n\nPacienții simptomatici cu preexcitație (WPW) sunt sfătuiți să recurgă la ablație ca terapie de primă linie — Corect: WPW simptomatic: ablație ca terapie de primă linie, din cauza riscului de moarte subită.\n\nIzolarea venelor pulmonare are succes pe termen lung 70-80% la tineri cu FA paroxistică, AS normal și fără boală structurală — Corect: Succes 70-80% la tineri cu FA paroxistică, AS normal, fără boală structurală.\n\nAblația flutterului tipic este eficientă în 90-95% din cazuri — Corect: Ablația flutterului tipic: 90-95%.\n\nICD-ul recunoaște TV/FV dar nu poate livra overdrive pacing, ci doar șocuri — Incorect: TV poate fi suprimată și prin overdrive pacing, procedură lipsită de durere.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1068, Ablația cu cateter și ICD (pagini PDF: 229).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1068
   ],
   "pdfPages": [
    229
   ],
   "section": "Ablația cu cateter și ICD"
  },
  "learningObjective": "Reținerea ratelor de succes (PV 70-80%, flutter 90-95%) și a ablației WPW ca primă linie.",
  "optionRationales": [
   "Lista indicațiilor de înaltă eficiență include aceste tahiaritmii.",
   "WPW simptomatic: ablație ca terapie de primă linie, din cauza riscului de moarte subită.",
   "Succes 70-80% la tineri cu FA paroxistică, AS normal, fără boală structurală.",
   "Ablația flutterului tipic: 90-95%.",
   "TV poate fi suprimată și prin overdrive pacing, procedură lipsită de durere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă overdrive pacing-ul nedureros, deși textul îl opune explicit șocurilor dureroase la conștient."
  },
  "textbookExpressions": [
   "70-80%",
   "90-95%"
  ]
 },
 {
  "id": "cardiologie-adv-053",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "În prevenția primară a morții subite, ICD:",
  "options": [
   "A redus mortalitatea cu 23-31% față de tratamentul convențional în MADIT II și SCD-HeFT",
   "Poate fi indicat la IC cu FEVS ≤35% și NYHA <IV; dacă există BRS major (QRS >120 ms) se poate asocia CRT",
   "Șansele de supraviețuire a unui stop extraspatial sunt de 80%, deci prevenția primară este inutilă",
   "NYHA IV în stadiu final este indicația preferată de ICD, nu CRT-D",
   "Doar canalopatiile, nu și CMD/CMH/ARVC familiale, au indicație de prevenție primară"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "A redus mortalitatea cu 23-31% față de tratamentul convențional în MADIT II și SCD-HeFT — Corect: MADIT II și SCD-HeFT: reducere a mortalității cu 23-31% față de tratamentul convențional.\n\nPoate fi indicat la IC cu FEVS ≤35% și NYHA <IV; dacă există BRS major (QRS >120 ms) se poate asocia CRT — Corect: Grupa cu FEVS ≤35% și NYHA <IV; BRS cu QRS >120 ms aduce beneficiu adițional CRT-D.\n\nȘansele de supraviețuire a unui stop extraspatial sunt de 80%, deci prevenția primară este inutilă — Incorect: Șansele de supraviețuire a unui stop extraspatial sunt de doar 10%.\n\nNYHA IV în stadiu final este indicația preferată de ICD, nu CRT-D — Incorect: NYHA IV sau comorbidități care reduc durata de viață nu sunt, în general, candidați la ICD.\n\nDoar canalopatiile, nu și CMD/CMH/ARVC familiale, au indicație de prevenție primară — Incorect: Textul include CMD, CMH, QT lung, Brugada, canalopatii cu istoric familial și ARVD.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1068, ICD — Prevenție primară (MADIT II, SCD-HeFT) (pagini PDF: 229).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1068
   ],
   "pdfPages": [
    229
   ],
   "section": "ICD — Prevenție primară (MADIT II, SCD-HeFT)"
  },
  "learningObjective": "Aplicarea reducerii de mortalitate 23-31% și a criteriului FEVS ≤35% cu NYHA <IV.",
  "optionRationales": [
   "MADIT II și SCD-HeFT: reducere a mortalității cu 23-31% față de tratamentul convențional.",
   "Grupa cu FEVS ≤35% și NYHA <IV; BRS cu QRS >120 ms aduce beneficiu adițional CRT-D.",
   "Șansele de supraviețuire a unui stop extraspatial sunt de doar 10%.",
   "NYHA IV sau comorbidități care reduc durata de viață nu sunt, în general, candidați la ICD.",
   "Textul include CMD, CMH, QT lung, Brugada, canalopatii cu istoric familial și ARVD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește 10% supraviețuire extraspatială cu 80% și face din NYHA IV indicația preferată, contrar textului."
  },
  "textbookExpressions": [
   "23-31%",
   "35%"
  ]
 },
 {
  "id": "cardiologie-adv-054",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Epidemiologia insuficienței cardiace:",
  "options": [
   "Afectează aproximativ 26 de milioane de persoane; în Marea Britanie incidența globală este circa 2 din 1.000",
   "Rata mortalității rămâne ridicată: aproximativ 50% dintre pacienți decedează la 5 ani",
   "În țările occidentale, cea mai frecventă cauză este boala coronariană",
   "Reprezintă 25% din internările în secțiile medicale, nu 5%",
   "Prognosticul nu s-a modificat în ultimii 10 ani, terapia bazată pe dovezi fiind ineficace"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Afectează aproximativ 26 de milioane de persoane; în Marea Britanie incidența globală este circa 2 din 1.000 — Corect: Incidența mondială implică circa 26 de milioane; în UK circa 2 din 1.000.\n\nRata mortalității rămâne ridicată: aproximativ 50% dintre pacienți decedează la 5 ani — Corect: Aproximativ 50% decedează la 5 ani.\n\nÎn țările occidentale, cea mai frecventă cauză este boala coronariană — Corect: În țările occidentale cea mai frecventă cauză este boala coronariană.\n\nReprezintă 25% din internările în secțiile medicale, nu 5% — Incorect: Textul indică 5% din internările în secțiile medicale, nu 25%.\n\nPrognosticul nu s-a modificat în ultimii 10 ani, terapia bazată pe dovezi fiind ineficace — Incorect: Prognosticul s-a îmbunătățit în ultimii 10 ani datorită terapiei bazate pe dovezi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1069, Insuficiența cardiacă — Epidemiologie (pagini PDF: 230).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1069
   ],
   "pdfPages": [
    230
   ],
   "section": "Insuficiența cardiacă — Epidemiologie"
  },
  "learningObjective": "Reținerea cifrelor 26 de milioane, 2/1.000, mortalitate 50% la 5 ani și a bolii coronariene ca etiologie dominantă occidentală.",
  "optionRationales": [
   "Incidența mondială implică circa 26 de milioane; în UK circa 2 din 1.000.",
   "Aproximativ 50% decedează la 5 ani.",
   "În țările occidentale cea mai frecventă cauză este boala coronariană.",
   "Textul indică 5% din internările în secțiile medicale, nu 25%.",
   "Prognosticul s-a îmbunătățit în ultimii 10 ani datorită terapiei bazate pe dovezi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă ponderea internărilor de la 5% la 25% și neagă îmbunătățirea prognosticului din ultimul deceniu."
  },
  "textbookExpressions": [
   "26 de milioane",
   "2 din 1.000"
  ]
 },
 {
  "id": "cardiologie-adv-055",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Cauzele principale și fiziopatologia insuficienței cardiace:",
  "options": [
   "Boala ischemică 35-40%, cardiomiopatia dilatativă 30-34%, hipertensiunea 15-20%",
   "Fracția de ejecție scade precoce; tahicardia sinusală compensează scăderea volumului-bătaie",
   "Legea Laplace: tensiunea miocardică este proporțională cu presiunea ori raza cavității",
   "Activarea simpatică cronică este benefic nerestricționată, fără down-regulation de receptori-β",
   "Peptidele natriuretice compensează parțial retenția de sodiu"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Boala ischemică 35-40%, cardiomiopatia dilatativă 30-34%, hipertensiunea 15-20% — Corect: Cadranul 30.20: ischemică 35-40%, dilatativă 30-34%, HTA 15-20%.\n\nFracția de ejecție scade precoce; tahicardia sinusală compensează scăderea volumului-bătaie — Corect: FE scade precoce; tahicardia sinusală compensează volumul-bătaie scăzut.\n\nLegea Laplace: tensiunea miocardică este proporțională cu presiunea ori raza cavității — Corect: Tensiunea T este proporțională cu P × R (Laplace).\n\nActivarea simpatică cronică este benefic nerestricționată, fără down-regulation de receptori-β — Incorect: Activarea simpatică cronică este nocivă (neurohormoni, apoptoză) și e compensată prin down-regulation de receptori-β.\n\nPeptidele natriuretice compensează parțial retenția de sodiu — Corect: Retenția de sodiu este parțial compensată de peptidele natriuretice și ADH.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1070, 1069, Insuficiența cardiacă — Fiziopatologie și cauze (pagini PDF: 231, 230).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1070,
    1069
   ],
   "pdfPages": [
    231,
    230
   ],
   "section": "Insuficiența cardiacă — Fiziopatologie și cauze"
  },
  "learningObjective": "Aplicarea ponderilor etiologice și a consecințelor legii Laplace și ale activării simpatice cronice.",
  "optionRationales": [
   "Cadranul 30.20: ischemică 35-40%, dilatativă 30-34%, HTA 15-20%.",
   "FE scade precoce; tahicardia sinusală compensează volumul-bătaie scăzut.",
   "Tensiunea T este proporțională cu P × R (Laplace).",
   "Activarea simpatică cronică este nocivă (neurohormoni, apoptoză) și e compensată prin down-regulation de receptori-β.",
   "Retenția de sodiu este parțial compensată de peptidele natriuretice și ADH."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Prezintă hiperactivarea simpatică cronică ca mecanism pur protector, deși textul o descrie ca cerc vicios."
  },
  "textbookExpressions": [
   "35-40%",
   "legea Laplace"
  ]
 },
 {
  "id": "cardiologie-adv-056",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Terapiile care au redus morbiditatea și mortalitatea în insuficiența cardiacă au avut beneficii dovedite:",
  "options": [
   "Doar la pacienții cu HFrEF (fracție de ejecție <40%)",
   "Identic în HFpEF (FE >50%) și HFrEF",
   "Doar în HFmrEF (FE 40-50%)",
   "Doar în disfuncția izolată de ventricul drept",
   "Indiferent de fracția de ejecție, inclusiv în pericardita constrictivă"
  ],
  "correct": [
   0
  ],
  "explanation": "Doar la pacienții cu HFrEF (fracție de ejecție <40%) — Corect: Textul precizează că terapiile care au redus morbiditatea și mortalitatea au avut beneficii doar la grupul HFrEF (FE <40%).\n\nIdentic în HFpEF (FE >50%) și HFrEF — Incorect: HFpEF este definită simptomatic cu FE >50%; aceleași terapii nu au același nivel de dovadă.\n\nDoar în HFmrEF (FE 40-50%) — Incorect: HFmrEF (40-50%) este o zonă gri recent clasificată, nu singurul grup cu beneficiu.\n\nDoar în disfuncția izolată de ventricul drept — Incorect: DSVD are cauze proprii, fără această afirmație de mortalitate.\n\nIndiferent de fracția de ejecție, inclusiv în pericardita constrictivă — Incorect: Pericardita constrictivă nu este HFrEF.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1071, HFrEF versus HFpEF (pagini PDF: 232).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1071
   ],
   "pdfPages": [
    232
   ],
   "section": "HFrEF versus HFpEF"
  },
  "learningObjective": "Recunoașterea faptului că beneficiul de mortalitate al terapiilor clasice este demonstrat în HFrEF (FE <40%).",
  "optionRationales": [
   "Textul precizează că terapiile care au redus morbiditatea și mortalitatea au avut beneficii doar la grupul HFrEF (FE <40%).",
   "HFpEF este definită simptomatic cu FE >50%; aceleași terapii nu au același nivel de dovadă.",
   "HFmrEF (40-50%) este o zonă gri recent clasificată, nu singurul grup cu beneficiu.",
   "DSVD are cauze proprii, fără această afirmație de mortalitate.",
   "Pericardita constrictivă nu este HFrEF."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde beneficiul de mortalitate al IECA/BB/ARNI de la HFrEF la HFpEF, eroarea terapeutică clasică."
  },
  "textbookExpressions": [
   "fracţie de ejecţie <40%",
   "HFREF"
  ]
 },
 {
  "id": "cardiologie-adv-057",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Peptidele natriuretice și fenotipurile de insuficiență cardiacă:",
  "options": [
   "ANP este eliberat din miocitele atriale la întindere; induce diureză, natriureză, vasodilatație și suprimă SRAA",
   "BNP este secretat predominant de ventriculi; NT-proBNP este proteina inactivă scindată din proBNP",
   "HFpEF (FE >50%) este mai frecventă la hipertensivii vârstnici și în cardiomiopatii hipertrofice/restrictive/infiltrative",
   "Monitorizarea de rutină a BNP ghidează fiecare ajustare de doză, ca standard terapeutic",
   "CNP este secretat predominant de ventriculul stâng, identic BNP"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "ANP este eliberat din miocitele atriale la întindere; induce diureză, natriureză, vasodilatație și suprimă SRAA — Corect: ANP: miocite atriale, răspuns la stretch, diureză/natriureză/vasodilatație/supresie SRAA.\n\nBNP este secretat predominant de ventriculi; NT-proBNP este proteina inactivă scindată din proBNP — Corect: BNP: predominant ventriculi; NT-proBNP inactiv din proBNP.\n\nHFpEF (FE >50%) este mai frecventă la hipertensivii vârstnici și în cardiomiopatii hipertrofice/restrictive/infiltrative — Corect: IC diastolică/HFpEF: mai frecventă la hipertensivi vârstnici și în CMH, CMR, infiltrative.\n\nMonitorizarea de rutină a BNP ghidează fiecare ajustare de doză, ca standard terapeutic — Incorect: Nivelele se corelează cu severitatea, dar monitorizarea nu se folosește de rutină pentru ghidarea tratamentului.\n\nCNP este secretat predominant de ventriculul stâng, identic BNP — Incorect: CNP este limitat la endoteliul vascular și SNC, nu este echivalentul ventricular al BNP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1071, 1072, Peptidele natriuretice; HFpEF (pagini PDF: 232, 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1071,
    1072
   ],
   "pdfPages": [
    232,
    233
   ],
   "section": "Peptidele natriuretice; HFpEF"
  },
  "learningObjective": "Diferențierea originii ANP (atrii) versus BNP (ventriculi) și a terenului HFpEF al vârstnicului hipertensiv.",
  "optionRationales": [
   "ANP: miocite atriale, răspuns la stretch, diureză/natriureză/vasodilatație/supresie SRAA.",
   "BNP: predominant ventriculi; NT-proBNP inactiv din proBNP.",
   "IC diastolică/HFpEF: mai frecventă la hipertensivi vârstnici și în CMH, CMR, infiltrative.",
   "Nivelele se corelează cu severitatea, dar monitorizarea nu se folosește de rutină pentru ghidarea tratamentului.",
   "CNP este limitat la endoteliul vascular și SNC, nu este echivalentul ventricular al BNP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă BNP-ul de prognostic într-un ghid de rutină al dozelor și mută CNP-ul în ventricul."
  },
  "textbookExpressions": [
   "NT-proBNP",
   "HFPEF"
  ]
 },
 {
  "id": "cardiologie-adv-058",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Clasificarea NYHA a insuficienței cardiace:",
  "options": [
   "Clasa I: fără limitarea activității fizice obișnuite",
   "Clasa IV: simptome în repaus, exacerbate de orice activitate fizică",
   "Clasa II înseamnă simptome în repaus, identic clasei IV",
   "Clasa III: simptome doar la efort intens, peste activitatea obișnuită",
   "Diagnosticul HFrEF după ESC cere doar FE scăzută, fără simptome sau semne"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Clasa I: fără limitarea activității fizice obișnuite — Corect: Clasa I: fără limitare; activitatea obișnuită nu determină oboseală, dispnee sau palpitații.\n\nClasa IV: simptome în repaus, exacerbate de orice activitate fizică — Corect: Clasa IV: simptome în repaus, exacerbate de orice activitate.\n\nClasa II înseamnă simptome în repaus, identic clasei IV — Incorect: Clasa II: fără simptome în repaus, simptome la activitatea obișnuită.\n\nClasa III: simptome doar la efort intens, peste activitatea obișnuită — Incorect: Clasa III: simptome la activitate mai scăzută decât cea obișnuită, nu la efort intens.\n\nDiagnosticul HFrEF după ESC cere doar FE scăzută, fără simptome sau semne — Incorect: Diagnosticul HFrEF necesită trei condiții: simptome, semne și FE scăzută.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1072, Insuficiența cardiacă — Clasificarea NYHA (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1072
   ],
   "pdfPages": [
    233
   ],
   "section": "Insuficiența cardiacă — Clasificarea NYHA"
  },
  "learningObjective": "Fixarea extremelor NYHA I și IV și a triadei simptome-semne-FE pentru diagnosticul HFrEF.",
  "optionRationales": [
   "Clasa I: fără limitare; activitatea obișnuită nu determină oboseală, dispnee sau palpitații.",
   "Clasa IV: simptome în repaus, exacerbate de orice activitate.",
   "Clasa II: fără simptome în repaus, simptome la activitatea obișnuită.",
   "Clasa III: simptome la activitate mai scăzută decât cea obișnuită, nu la efort intens.",
   "Diagnosticul HFrEF necesită trei condiții: simptome, semne și FE scăzută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Suprapune clasa II peste IV (simptome de repaus) și anulează cerința clinică a criteriilor ESC."
  },
  "textbookExpressions": [
   "Clasa I",
   "Clasa IV"
  ]
 },
 {
  "id": "cardiologie-adv-059",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tratamentul medicamentos al insuficienței cardiace cronice — IECA, ARA și diuretice:",
  "options": [
   "IECA (CONSENSUS, SOLVD) ameliorează simptomele și reduc mortalitatea în toate clasele NYHA I-IV",
   "ARA (candesartan în CHARM alternativ) sunt linia a doua la intoleranța la IECA și nu determină tuse",
   "Dovezile privind efectul diureticelor asupra supraviețuirii sunt limitate, deși ameliorează dispneea",
   "IECA se inițiază în doză maximă, fără monitorizarea creatininei",
   "Combinația diuretic de ansă plus tiazidă este interzisă în IC severă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "IECA (CONSENSUS, SOLVD) ameliorează simptomele și reduc mortalitatea în toate clasele NYHA I-IV — Corect: CONSENSUS și SOLVD: IECA reduc mortalitatea; beneficiu în NYHA I-IV.\n\nARA (candesartan în CHARM alternativ) sunt linia a doua la intoleranța la IECA și nu determină tuse — Corect: ARA sunt linia a doua la intoleranță; nu afectează metabolismul bradikininei și nu determină tuse; CHARM alternativ.\n\nDovezile privind efectul diureticelor asupra supraviețuirii sunt limitate, deși ameliorează dispneea — Corect: Diureticele ameliorează dispneea și toleranța la efort, dar dovezile de supraviețuire sunt limitate.\n\nIECA se inițiază în doză maximă, fără monitorizarea creatininei — Incorect: IECA se inițiază în doză mică, cu creștere treptată și monitorizarea TA și funcției renale.\n\nCombinația diuretic de ansă plus tiazidă este interzisă în IC severă — Incorect: În IC severă poate fi necesară combinația ansă plus tiazidă, inclusiv metolazona.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1073, Insuficiența cardiacă — IECA, ARA, diuretice (pagini PDF: 234).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1073
   ],
   "pdfPages": [
    234
   ],
   "section": "Insuficiența cardiacă — IECA, ARA, diuretice"
  },
  "learningObjective": "Recunoașterea beneficiului IECA pe tot spectrul NYHA, a ARA ca alternativă fără tuse și a limitei de supraviețuire a diureticelor.",
  "optionRationales": [
   "CONSENSUS și SOLVD: IECA reduc mortalitatea; beneficiu în NYHA I-IV.",
   "ARA sunt linia a doua la intoleranță; nu afectează metabolismul bradikininei și nu determină tuse; CHARM alternativ.",
   "Diureticele ameliorează dispneea și toleranța la efort, dar dovezile de supraviețuire sunt limitate.",
   "IECA se inițiază în doză mică, cu creștere treptată și monitorizarea TA și funcției renale.",
   "În IC severă poate fi necesară combinația ansă plus tiazidă, inclusiv metolazona."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inițiază IECA la doză maximă fără monitorizare renală și interzice dubla diureză folosită tocmai în IC severă."
  },
  "textbookExpressions": [
   "CONSENS",
   "CHARM"
  ]
 },
 {
  "id": "cardiologie-adv-060",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Studiul SHIFT cu ivabradină în insuficiența cardiacă a arătat:",
  "options": [
   "Creșterea mortalității la pacienții în fibrilație atrială",
   "Scăderea deceselor cardiovasculare și a spitalizărilor la IC cronică cu FEVS ≤35% în ritm sinusal",
   "Absența oricărui efect dacă frecvența rămâne crescută sub beta-blocant",
   "Eficiență superioară ICD în prevenția morții subite",
   "Indicație ca substitut al diureticelor de ansă"
  ],
  "correct": [
   1
  ],
  "explanation": "Creșterea mortalității la pacienții în fibrilație atrială — Incorect: SHIFT nu vizează FA ca populație principală; ivabradina inhibă If sinoatrial.\n\nScăderea deceselor cardiovasculare și a spitalizărilor la IC cronică cu FEVS ≤35% în ritm sinusal — Corect: Studiul SHIFT a raportat scăderea deceselor cardiovasculare și a spitalizărilor la IC cronică cu disfuncție de VS (FEVS ≤35%) în ritm sinusal.\n\nAbsența oricărui efect dacă frecvența rămâne crescută sub beta-blocant — Incorect: Ivabradina poate fi folosită tocmai când FC rămâne crescută sub beta-blocante sau la intoleranță.\n\nEficiență superioară ICD în prevenția morții subite — Incorect: În SCD-HeFT, ICD a redus mortalitatea cu 23%; amiodarona nu a avut beneficiu — nu ivabradina versus ICD.\n\nIndicație ca substitut al diureticelor de ansă — Incorect: Ivabradina scade selectiv frecvența, fără să înlocuiască diureticele.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1075, Insuficiența cardiacă — Ivabradina (SHIFT) (pagini PDF: 236).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1075
   ],
   "pdfPages": [
    236
   ],
   "section": "Insuficiența cardiacă — Ivabradina (SHIFT)"
  },
  "learningObjective": "Reținerea populației SHIFT: ritm sinusal, FEVS ≤35%, reducere a deceselor CV și a spitalizărilor.",
  "optionRationales": [
   "SHIFT nu vizează FA ca populație principală; ivabradina inhibă If sinoatrial.",
   "Studiul SHIFT a raportat scăderea deceselor cardiovasculare și a spitalizărilor la IC cronică cu disfuncție de VS (FEVS ≤35%) în ritm sinusal.",
   "Ivabradina poate fi folosită tocmai când FC rămâne crescută sub beta-blocante sau la intoleranță.",
   "În SCD-HeFT, ICD a redus mortalitatea cu 23%; amiodarona nu a avut beneficiu — nu ivabradina versus ICD.",
   "Ivabradina scade selectiv frecvența, fără să înlocuiască diureticele."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută populația SHIFT din sinus cu FE≤35% în FA și o pune în competiție falsă cu ICD."
  },
  "textbookExpressions": [
   "Studiul SHIFT",
   "ritm sinusal"
  ]
 },
 {
  "id": "cardiologie-adv-061",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre digoxin, vasodilatatoare și amiodaronă în IC:",
  "options": [
   "Studiul DIG a arătat că digoxinul reduce spitalizările; o subanaliză ROCKET AF a sugerat însă mortalitate posibil crescută",
   "Hidralazină plus nitrați au redus mortalitatea la afro-americani în A-HeFT și se folosesc la intoleranța la IECA/ARA",
   "Amiodarona a redus mortalitatea cu 23% față de placebo în SCD-HeFT, superior ICD",
   "Digoxinul este inotropul de primă linie în SCA cu IC",
   "Anticoagularea orală se recomandă în IC în ritm sinusal fără tromb, anevrism sau tromboembolism anterior"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Studiul DIG a arătat că digoxinul reduce spitalizările; o subanaliză ROCKET AF a sugerat însă mortalitate posibil crescută — Corect: DIG: reducerea spitalizărilor; ROCKET AF: mortalitate posibil crescută.\n\nHidralazină plus nitrați au redus mortalitatea la afro-americani în A-HeFT și se folosesc la intoleranța la IECA/ARA — Corect: Veterans Administration și A-HeFT susțin hidralazină-nitrați, inclusiv la afro-americani.\n\nAmiodarona a redus mortalitatea cu 23% față de placebo în SCD-HeFT, superior ICD — Incorect: SCD-HeFT: amiodarona fără beneficiu versus placebo; ICD a redus mortalitatea cu 23%.\n\nDigoxinul este inotropul de primă linie în SCA cu IC — Incorect: Digoxinul se evită în SCA (cadranul de IC acută); nu este inotrop de primă linie acut coronarian.\n\nAnticoagularea orală se recomandă în IC în ritm sinusal fără tromb, anevrism sau tromboembolism anterior — Incorect: Anticoagularea orală în sinus: istoric de tromboembolism, anevrism de VS sau tromb, nu rutina.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1075, Insuficiența cardiacă — Digoxin, hidralazină-nitrați, SCD-HeFT (pagini PDF: 236).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1075
   ],
   "pdfPages": [
    236
   ],
   "section": "Insuficiența cardiacă — Digoxin, hidralazină-nitrați, SCD-HeFT"
  },
  "learningObjective": "Contrastul DIG (spitalizări) versus ROCKET AF (mortalitate) și al A-HeFT, față de absența beneficiului amiodaronei în SCD-HeFT.",
  "optionRationales": [
   "DIG: reducerea spitalizărilor; ROCKET AF: mortalitate posibil crescută.",
   "Veterans Administration și A-HeFT susțin hidralazină-nitrați, inclusiv la afro-americani.",
   "SCD-HeFT: amiodarona fără beneficiu versus placebo; ICD a redus mortalitatea cu 23%.",
   "Digoxinul se evită în SCA (cadranul de IC acută); nu este inotrop de primă linie acut coronarian.",
   "Anticoagularea orală în sinus: istoric de tromboembolism, anevrism de VS sau tromb, nu rutina."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie amiodaronei reducerea de 23% care aparține ICD în același trial SCD-HeFT."
  },
  "textbookExpressions": [
   "studiul DIG",
   "A-HeFT"
  ]
 },
 {
  "id": "cardiologie-adv-062",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Terapia de resincronizare, miocardul hibernant și transplantul:",
  "options": [
   "Miocardul hibernant este prezent la circa 33% dintre pacienții cu boală coronariană evaluați după revascularizare",
   "CRT (CARE-HF, COMPANION) ameliorează simptomele și reduce mortalitatea în NYHA III-IV cu QRS prelungit/BRS",
   "Transplantul, la recipienți selecționați, oferă supraviețuire >90% la 1 an și 75% la 5 ani",
   "NYHA IV terminal este indicația preferată de ICD izolat, fără CRT",
   "Rezistențele vasculare pulmonare crescute sunt o indicație, nu o contraindicație, de transplant"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Miocardul hibernant este prezent la circa 33% dintre pacienții cu boală coronariană evaluați după revascularizare — Corect: Hibernarea este estimată la 33% după ameliorarea cineticii post-revascularizare.\n\nCRT (CARE-HF, COMPANION) ameliorează simptomele și reduce mortalitatea în NYHA III-IV cu QRS prelungit/BRS — Corect: CARE-HF și COMPANION: ameliorare simptomatică, mai puține evenimente, mortalitate mai mică în NYHA III-IV.\n\nTransplantul, la recipienți selecționați, oferă supraviețuire >90% la 1 an și 75% la 5 ani — Corect: Speranța de supraviețuire: peste 90% la 1 an și 75% la 5 ani.\n\nNYHA IV terminal este indicația preferată de ICD izolat, fără CRT — Incorect: NYHA IV sau comorbidități care reduc durata de viață nu sunt, în general, candidați la ICD.\n\nRezistențele vasculare pulmonare crescute sunt o indicație, nu o contraindicație, de transplant — Incorect: Creșterea rezistențelor pulmonare și cancerul activ sunt contraindicații absolute.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1076, CRT, miocard hibernant și transplant cardiac (pagini PDF: 237).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1076
   ],
   "pdfPages": [
    237
   ],
   "section": "CRT, miocard hibernant și transplant cardiac"
  },
  "learningObjective": "Reținerea prevalenței 33% a hibernării, a trialurilor CARE-HF/COMPANION și a supraviețuirii post-transplant 90%/75%.",
  "optionRationales": [
   "Hibernarea este estimată la 33% după ameliorarea cineticii post-revascularizare.",
   "CARE-HF și COMPANION: ameliorare simptomatică, mai puține evenimente, mortalitate mai mică în NYHA III-IV.",
   "Speranța de supraviețuire: peste 90% la 1 an și 75% la 5 ani.",
   "NYHA IV sau comorbidități care reduc durata de viață nu sunt, în general, candidați la ICD.",
   "Creșterea rezistențelor pulmonare și cancerul activ sunt contraindicații absolute."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă contraindicația de rezistențe pulmonare crescute în indicație și promovează ICD-ul în NYHA IV terminal."
  },
  "textbookExpressions": [
   "33%",
   "CARE-HF"
  ]
 },
 {
  "id": "cardiologie-adv-063",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Insuficiența cardiacă acută — prognostic și investigații inițiale:",
  "options": [
   "Mortalitatea este aproape 10% la 60 de zile, iar mortalitatea sau respitalizarea 35% la 60 de zile",
   "În edemul pulmonar acut, mortalitatea intra-spital este 12% și crește la 30% în 12 luni",
   "BNP >100 pg/ml sau NT-proBNP >300 pg/ml sunt sugestive pentru insuficiență cardiacă",
   "PCWP >16 mmHg, hiponatremia, VS telediastolic mărit și consumul scăzut de O2 sunt indicatori nefavorabili",
   "Un BNP sub aceste praguri confirmă diagnosticul de ICA și face ETT inutilă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Mortalitatea este aproape 10% la 60 de zile, iar mortalitatea sau respitalizarea 35% la 60 de zile — Corect: Textul citează mortalitate aproape 10% la 60 de zile și mortalitate sau respitalizare 35% la 60 de zile.\n\nÎn edemul pulmonar acut, mortalitatea intra-spital este 12% și crește la 30% în 12 luni — Corect: Edem pulmonar acut: 12% intra-spital, 30% la 12 luni.\n\nBNP >100 pg/ml sau NT-proBNP >300 pg/ml sunt sugestive pentru insuficiență cardiacă — Corect: BNP >100 sau NT-proBNP >300 pg/ml sunt sugestive.\n\nPCWP >16 mmHg, hiponatremia, VS telediastolic mărit și consumul scăzut de O2 sunt indicatori nefavorabili — Corect: PCWP >16 mmHg, Na scăzut, dimensiune telediastolică crescută și consum miocardic de O2 scăzut sunt nefavorabili.\n\nUn BNP sub aceste praguri confirmă diagnosticul de ICA și face ETT inutilă — Incorect: Peptidele sugestive nu înlocuiesc ETT, care trebuie efectuată fără întârziere.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1077, 1076, Insuficiența cardiacă acută — Prognostic și diagnostic (pagini PDF: 238, 237).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1077,
    1076
   ],
   "pdfPages": [
    238,
    237
   ],
   "section": "Insuficiența cardiacă acută — Prognostic și diagnostic"
  },
  "learningObjective": "Aplicarea ratelor de mortalitate 10%/35% la 60 de zile și 12%/30% în edemul pulmonar, plus pragurile de peptide.",
  "optionRationales": [
   "Textul citează mortalitate aproape 10% la 60 de zile și mortalitate sau respitalizare 35% la 60 de zile.",
   "Edem pulmonar acut: 12% intra-spital, 30% la 12 luni.",
   "BNP >100 sau NT-proBNP >300 pg/ml sunt sugestive.",
   "PCWP >16 mmHg, Na scăzut, dimensiune telediastolică crescută și consum miocardic de O2 scăzut sunt nefavorabili.",
   "Peptidele sugestive nu înlocuiesc ETT, care trebuie efectuată fără întârziere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Folosește pragurile reale de peptide ca argument fals că ecografia ar deveni superfluă."
  },
  "textbookExpressions": [
   "10% la 60 de zile",
   "NT-proB"
  ]
 },
 {
  "id": "cardiologie-adv-064",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Terapia farmacologică în insuficiența cardiacă acută (Cadranul 30.29):",
  "options": [
   "Dopamina în doză mică (<2 µg/kg/min) acționează pe receptorii periferici dopaminergici, cu vasodilatație renală/splanhnică, fără dovezi clare de prognostic",
   "Dopamina în doză medie (>2 µg/kg/min) stimulează receptorii β, crescând contractilitatea și debitul",
   "Levosimendanul crește sensibilitatea proteinelor contractile la calciu și deschide canalele de potasiu",
   "CPAP/NIPPV ameliorează precoce dispneea față de oxigenul pe mască, dar nu afectează mortalitatea",
   "Digoxinul 0,5 mg i.v. este inotropul de primă intenție în SCA cu IC acută"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Dopamina în doză mică (<2 µg/kg/min) acționează pe receptorii periferici dopaminergici, cu vasodilatație renală/splanhnică, fără dovezi clare de prognostic — Corect: Doza mică acționează pe receptorii dopaminergici periferici; nu există dovezi de ameliorare semnificativă a prognosticului.\n\nDopamina în doză medie (>2 µg/kg/min) stimulează receptorii β, crescând contractilitatea și debitul — Corect: Doza medie acționează pe receptorii β, crescând contractilitatea și debitul.\n\nLevosimendanul crește sensibilitatea proteinelor contractile la calciu și deschide canalele de potasiu — Corect: Levosimendan: inotrop pozitiv vasodilatator prin sensibilizarea la calciu și deschiderea canalelor de K+.\n\nCPAP/NIPPV ameliorează precoce dispneea față de oxigenul pe mască, dar nu afectează mortalitatea — Corect: CPAP/NIPPV ameliorează precoce dispneea; mortalitatea nu este însă afectată.\n\nDigoxinul 0,5 mg i.v. este inotropul de primă intenție în SCA cu IC acută — Incorect: Cadranul precizează: de utilizat în FA; de evitat în SCA.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1078, Insuficiența cardiacă acută — Terapie farmacologică (pagini PDF: 239).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1078
   ],
   "pdfPages": [
    239
   ],
   "section": "Insuficiența cardiacă acută — Terapie farmacologică"
  },
  "learningObjective": "Diferențierea treptelor de doză ale dopaminei, a mecanismului levosimendanului și a efectului CPAP asupra dispneei, nu a mortalității.",
  "optionRationales": [
   "Doza mică acționează pe receptorii dopaminergici periferici; nu există dovezi de ameliorare semnificativă a prognosticului.",
   "Doza medie acționează pe receptorii β, crescând contractilitatea și debitul.",
   "Levosimendan: inotrop pozitiv vasodilatator prin sensibilizarea la calciu și deschiderea canalelor de K+.",
   "CPAP/NIPPV ameliorează precoce dispneea; mortalitatea nu este însă afectată.",
   "Cadranul precizează: de utilizat în FA; de evitat în SCA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează interdicția digoxinului în SCA și confundă beneficiul simptomatic al CPAP cu un efect de mortalitate."
  },
  "textbookExpressions": [
   "Levosimendan",
   "<2 µg/kg pe min"
  ]
 },
 {
  "id": "cardiologie-adv-065",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Dispozitivele de asistare ventriculară (VAD):",
  "options": [
   "LVAD preia sânge din ventriculul stâng și îl trimite în aortă; RVAD din ventriculul drept în artera pulmonară",
   "Complicațiile principale sunt tromboembolismul, sângerările, infecțiile și defecțiunile dispozitivului",
   "Dispozitivele extracorporale sunt destinate suportului pe termen lung ca terapie de destinație",
   "RVAD ejectează în aortă, iar LVAD în artera pulmonară",
   "VAD-urile nu au rol de punte către transplant"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "LVAD preia sânge din ventriculul stâng și îl trimite în aortă; RVAD din ventriculul drept în artera pulmonară — Corect: LVAD: VS → aortă; RVAD: VD → arteră pulmonară.\n\nComplicațiile principale sunt tromboembolismul, sângerările, infecțiile și defecțiunile dispozitivului — Corect: Principalele complicații: tromboembolism, sângerări, infecții, defecțiuni.\n\nDispozitivele extracorporale sunt destinate suportului pe termen lung ca terapie de destinație — Incorect: Extracorporalele sunt pentru asistare de scurtă durată; intracorporalele pentru termen lung, punte sau destinație.\n\nRVAD ejectează în aortă, iar LVAD în artera pulmonară — Incorect: Direcțiile de ejecție sunt inverse față de această afirmație.\n\nVAD-urile nu au rol de punte către transplant — Incorect: Textul le descrie ca punte către chirurgie/transplant sau ca terapie de destinație.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1079, Dispozitive de asistare ventriculară (pagini PDF: 240).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1079
   ],
   "pdfPages": [
    240
   ],
   "section": "Dispozitive de asistare ventriculară"
  },
  "learningObjective": "Recunoașterea circuitelor LVAD/RVAD și a complicațiilor trombotice, hemoragice și infecțioase.",
  "optionRationales": [
   "LVAD: VS → aortă; RVAD: VD → arteră pulmonară.",
   "Principalele complicații: tromboembolism, sângerări, infecții, defecțiuni.",
   "Extracorporalele sunt pentru asistare de scurtă durată; intracorporalele pentru termen lung, punte sau destinație.",
   "Direcțiile de ejecție sunt inverse față de această afirmație.",
   "Textul le descrie ca punte către chirurgie/transplant sau ca terapie de destinație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează destinațiile LVAD/RVAD și atribuie extracorporealului rolul de destinație pe termen lung."
  },
  "textbookExpressions": [
   "LVAD",
   "tromboembolismul"
  ]
 },
 {
  "id": "cardiologie-adv-066",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Fiziopatologia stenozei coronariene și prezentarea bolii:",
  "options": [
   "Reducerea cu 50% a diametrului luminal corespunde unei reduceri de circa 70% a suprafeței, cu rezervă de flux zero distal",
   "Unul din trei infarcte rămâne nerecunoscut inițial",
   "Între 30 și 40% dintre pacienții cu SCA nu au simptome precedente de alarmă",
   "După un infarct, riscul de IC sau AVC crește de 3-6 ori",
   "Rezerva coronariană rămâne intactă până la stenoze de 90% din diametru"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Reducerea cu 50% a diametrului luminal corespunde unei reduceri de circa 70% a suprafeței, cu rezervă de flux zero distal — Corect: Reducerea 50% a diametrului = circa 70% a suprafeței; arteriolele distale sunt dilatate maximal.\n\nUnul din trei infarcte rămâne nerecunoscut inițial — Corect: Unul din trei infarcte rămâne nerecunoscut inițial.\n\nÎntre 30 și 40% dintre pacienții cu SCA nu au simptome precedente de alarmă — Corect: 30-40% dintre SCA se prezintă fără simptome precedente de alarmă.\n\nDupă un infarct, riscul de IC sau AVC crește de 3-6 ori — Corect: După primul infarct, riscul de IC sau AVC este de 3-6 ori mai mare.\n\nRezerva coronariană rămâne intactă până la stenoze de 90% din diametru — Incorect: La 50% diametru rezerva de flux este deja zero, nu la 90%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1080, Boala coronariană — Stenoză critică și prezentare clinică (pagini PDF: 241).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1080
   ],
   "pdfPages": [
    241
   ],
   "section": "Boala coronariană — Stenoză critică și prezentare clinică"
  },
  "learningObjective": "Aplicarea echivalenței 50% diametru ≈ 70% arie și a ponderii infarctelor silențioase sau fără pródrom.",
  "optionRationales": [
   "Reducerea 50% a diametrului = circa 70% a suprafeței; arteriolele distale sunt dilatate maximal.",
   "Unul din trei infarcte rămâne nerecunoscut inițial.",
   "30-40% dintre SCA se prezintă fără simptome precedente de alarmă.",
   "După primul infarct, riscul de IC sau AVC este de 3-6 ori mai mare.",
   "La 50% diametru rezerva de flux este deja zero, nu la 90%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută pragul de rezervă zero de la 50% diametru la 90%, deși textul leagă ischemia de dilatarea maximală distală."
  },
  "textbookExpressions": [
   "50%",
   "70%"
  ]
 },
 {
  "id": "cardiologie-adv-067",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Doza de atorvastatină recomandată de NICE este:",
  "options": [
   "20 mg în prevenția primară la risc CV la 10 ani ≥10%; 80 mg în boala cardiovasculară confirmată, dacă nu există interacțiuni sau intoleranță",
   "80 mg în prevenția primară și 20 mg după un eveniment",
   "10 mg indiferent de context, ca doză unică",
   "Nicio statină în prevenția primară, doar ezetimib",
   "Rosuvastatină 5 mg ca înlocuitor de rutină al atorvastatinei 80 mg"
  ],
  "correct": [
   0
  ],
  "explanation": "20 mg în prevenția primară la risc CV la 10 ani ≥10%; 80 mg în boala cardiovasculară confirmată, dacă nu există interacțiuni sau intoleranță — Corect: NICE: atorvastatină 20 mg în prevenție primară la risc ≥10% la 10 ani; 80 mg în BCV confirmată, cu excepțiile citate.\n\n80 mg în prevenția primară și 20 mg după un eveniment — Incorect: Raportul 80/20 este inversat față de text.\n\n10 mg indiferent de context, ca doză unică — Incorect: Doza unică 10 mg nu este recomandarea NICE citată.\n\nNicio statină în prevenția primară, doar ezetimib — Incorect: Statinele sunt fundamentul prevenției, nu ezetimibul izolat.\n\nRosuvastatină 5 mg ca înlocuitor de rutină al atorvastatinei 80 mg — Incorect: Textul nu impune înlocuirea de rutină cu rosuvastatină 5 mg.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1081, Boala coronariană — Tratamentul cu statine (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1081
   ],
   "pdfPages": [
    242
   ],
   "section": "Boala coronariană — Tratamentul cu statine"
  },
  "learningObjective": "Diferențierea atorvastatinei 20 mg (prevenție primară QRISK ≥10%) de 80 mg (boală confirmată).",
  "optionRationales": [
   "NICE: atorvastatină 20 mg în prevenție primară la risc ≥10% la 10 ani; 80 mg în BCV confirmată, cu excepțiile citate.",
   "Raportul 80/20 este inversat față de text.",
   "Doza unică 10 mg nu este recomandarea NICE citată.",
   "Statinele sunt fundamentul prevenției, nu ezetimibul izolat.",
   "Textul nu impune înlocuirea de rutină cu rosuvastatină 5 mg."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează dozele 20 mg (primară) și 80 mg (secundară), perechea NICE cea mai ușor de confuzat."
  },
  "textbookExpressions": [
   "Atorvastatina 20 mg",
   "80 mg"
  ]
 },
 {
  "id": "cardiologie-adv-068",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Angina pectorală — epidemiologie și forme speciale:",
  "options": [
   "La femei, prevalența este 5-7% între 45-64 ani și 10-12% între 65-84 ani; la bărbați 4-7% respectiv 12-14%",
   "Angina vasospastică (Prinzmetal) apare fără declanșator, de obicei în repaus, mai frecvent la femei, cu supradenivelare ST tranzitorie",
   "Angina microvasculară: angină de efort fără stenoze semnificative; prognostic general favorabil, dar simptome adesea incomplete controlate",
   "Mortalitatea anuală a anginei stabile este 10-15%",
   "Angina clasică, după NICE, are o singură caracteristică din trei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "La femei, prevalența este 5-7% între 45-64 ani și 10-12% între 65-84 ani; la bărbați 4-7% respectiv 12-14% — Corect: Cifrele 5-7%/10-12% la femei și 4-7%/12-14% la bărbați sunt explicite.\n\nAngina vasospastică (Prinzmetal) apare fără declanșator, de obicei în repaus, mai frecvent la femei, cu supradenivelare ST tranzitorie — Corect: Prinzmetal: fără declanșator, de obicei în repaus, mai frecvent la femei, cu supradenivelare ST tranzitorie.\n\nAngina microvasculară: angină de efort fără stenoze semnificative; prognostic general favorabil, dar simptome adesea incomplete controlate — Corect: Microvasculară: fără stenoze semnificative, prognostic favorabil, răspuns incomplet.\n\nMortalitatea anuală a anginei stabile este 10-15% — Incorect: Mortalitatea anuală variază între 1,2 și 2,4%, cu deces cardiac 0,6-1,4%.\n\nAngina clasică, după NICE, are o singură caracteristică din trei — Incorect: Angina clasică are cele trei caracteristici; atipică are 2/3, non-anginoasă 1/3.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1081, Angina — Epidemiologie, Prinzmetal și forma microvasculară (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1081
   ],
   "pdfPages": [
    242
   ],
   "section": "Angina — Epidemiologie, Prinzmetal și forma microvasculară"
  },
  "learningObjective": "Reținerea prevalențelor pe sexe/vârste și a tiparului ECG al anginei Prinzmetal.",
  "optionRationales": [
   "Cifrele 5-7%/10-12% la femei și 4-7%/12-14% la bărbați sunt explicite.",
   "Prinzmetal: fără declanșator, de obicei în repaus, mai frecvent la femei, cu supradenivelare ST tranzitorie.",
   "Microvasculară: fără stenoze semnificative, prognostic favorabil, răspuns incomplet.",
   "Mortalitatea anuală variază între 1,2 și 2,4%, cu deces cardiac 0,6-1,4%.",
   "Angina clasică are cele trei caracteristici; atipică are 2/3, non-anginoasă 1/3."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă mortalitatea anuală de la 1,2-2,4% la 10-15% și degradează angina clasică la un singur criteriu NICE."
  },
  "textbookExpressions": [
   "Prinzmetal",
   "5-7%"
  ]
 },
 {
  "id": "cardiologie-adv-069",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Clasificarea CCS a anginei și rezerva fracționată de flux:",
  "options": [
   "CCS I: fără angină la activitățile zilnice obișnuite; angină la efort intens",
   "Leziunile cu FFR >0,80 pot fi tratate medicamentos, fără stent, cu prognostic bun",
   "CCS IV corespunde anginei doar la urcatul rapid al scărilor",
   "FFR sub 0,50 contraindică orice tratament medicamentos",
   "CCS III înseamnă angină doar nocturnă, fără limitare diurnă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "CCS I: fără angină la activitățile zilnice obișnuite; angină la efort intens — Corect: Clasa I: fără angină la activitățile zilnice; angină la efort intens.\n\nLeziunile cu FFR >0,80 pot fi tratate medicamentos, fără stent, cu prognostic bun — Corect: FFR >0,80: tratament medicamentos fără stent, prognostic bun.\n\nCCS IV corespunde anginei doar la urcatul rapid al scărilor — Incorect: Urcatul rapid al scărilor este exemplu de clasă II; clasa IV este angină în repaus sau la orice nivel.\n\nFFR sub 0,50 contraindică orice tratament medicamentos — Incorect: FFR >0,80 permite tratament medicamentos, nu un prag 0,50 de interdicție.\n\nCCS III înseamnă angină doar nocturnă, fără limitare diurnă — Incorect: Clasa III: angină la efort redus (50-100 m, un etaj), cu limitare marcată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1082, 1081, Angina stabilă — CCS și FFR (pagini PDF: 243, 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1082,
    1081
   ],
   "pdfPages": [
    243,
    242
   ],
   "section": "Angina stabilă — CCS și FFR"
  },
  "learningObjective": "Aplicarea CCS I versus IV și a pragului FFR >0,80 pentru tratament conservator.",
  "optionRationales": [
   "Clasa I: fără angină la activitățile zilnice; angină la efort intens.",
   "FFR >0,80: tratament medicamentos fără stent, prognostic bun.",
   "Urcatul rapid al scărilor este exemplu de clasă II; clasa IV este angină în repaus sau la orice nivel.",
   "FFR >0,80 permite tratament medicamentos, nu un prag 0,50 de interdicție.",
   "Clasa III: angină la efort redus (50-100 m, un etaj), cu limitare marcată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie clasei IV un exemplu de clasă II și inventează un prag FFR 0,50 inexistent."
  },
  "textbookExpressions": [
   "0,80",
   "Clasa I"
  ]
 },
 {
  "id": "cardiologie-adv-070",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Intervenția coronariană percutană în angina stabilă:",
  "options": [
   "Complicațiile majore includ infarct acut (2%), accident vascular cerebral (0,4%) și deces (1%)",
   "Abordul radial este preferat, reducând complicațiile de punctie",
   "DAPT (aspirină + inhibitor P2Y12) se administrează 6-12 luni după stentare",
   "BMS au restenoză 20-30% în 6-9 luni; DES de generația a doua sunt recomandate la majoritatea",
   "Stenturile metalice simple sunt preferate de rutină tuturor pacienților, DES fiind abandonate"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Complicațiile majore includ infarct acut (2%), accident vascular cerebral (0,4%) și deces (1%) — Corect: Infarct 2%, AVC 0,4%, deces 1% sunt cifrele din text.\n\nAbordul radial este preferat, reducând complicațiile de punctie — Corect: Abordul radial reduce hematoamele, disecțiile și pseudoanevrismele.\n\nDAPT (aspirină + inhibitor P2Y12) se administrează 6-12 luni după stentare — Corect: DAPT 6-12 luni după stentare.\n\nBMS au restenoză 20-30% în 6-9 luni; DES de generația a doua sunt recomandate la majoritatea — Corect: BMS: restenoză 20-30% la 6-9 luni; DES II superioare, recomandate la majoritatea.\n\nStenturile metalice simple sunt preferate de rutină tuturor pacienților, DES fiind abandonate — Incorect: DES II sunt recomandate la majoritate; BMS pot fi preferate doar dacă e nevoie de anticoagulare prelungită sau chirurgie precoce.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1082, 1083, PCI — Complicații, stenturi și DAPT (pagini PDF: 243, 244).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1082,
    1083
   ],
   "pdfPages": [
    243,
    244
   ],
   "section": "PCI — Complicații, stenturi și DAPT"
  },
  "learningObjective": "Memorarea ratelor 2%/0,4%/1% și a ferestrei DAPT 6-12 luni, cu superioritatea DES de generația a doua.",
  "optionRationales": [
   "Infarct 2%, AVC 0,4%, deces 1% sunt cifrele din text.",
   "Abordul radial reduce hematoamele, disecțiile și pseudoanevrismele.",
   "DAPT 6-12 luni după stentare.",
   "BMS: restenoză 20-30% la 6-9 luni; DES II superioare, recomandate la majoritatea.",
   "DES II sunt recomandate la majoritate; BMS pot fi preferate doar dacă e nevoie de anticoagulare prelungită sau chirurgie precoce."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ierarhia DES versus BMS, deși textul rezervă BMS doar unor nișe (anticoagulare, chirurgie precoce)."
  },
  "textbookExpressions": [
   "20-30%",
   "6-12 luni"
  ]
 },
 {
  "id": "cardiologie-adv-071",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "PCI versus CABG în boala coronariană complexă:",
  "options": [
   "Mortalitatea chirurgicală a CABG este sub 1% la funcție sistolică de VS normală",
   "Grafturile arteriale (mamare interne in situ, gastro-epiploice) funcționează mai durabil decât cele venoase",
   "PCI este preferată în boala uni- sau bivasculară fără IVA proximală sau trunchi comun",
   "CABG este preferat în boala trivasculară cu diabet sau SYNTAX >22",
   "SYNTAX scăzut (0-22) contraindică atât PCI cât și CABG în stenoza de IVA proximală"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Mortalitatea chirurgicală a CABG este sub 1% la funcție sistolică de VS normală — Corect: Mortalitatea chirurgicală <1% la FE conservată.\n\nGrafturile arteriale (mamare interne in situ, gastro-epiploice) funcționează mai durabil decât cele venoase — Corect: Arterele mamare interne și gastro-epiploice au durată mai lungă decât grafturile venoase.\n\nPCI este preferată în boala uni- sau bivasculară fără IVA proximală sau trunchi comun — Corect: PCI preferată în uni-/bivascular fără IVA sau TC.\n\nCABG este preferat în boala trivasculară cu diabet sau SYNTAX >22 — Corect: CABG preferat în trivascular + diabet sau SYNTAX >22.\n\nSYNTAX scăzut (0-22) contraindică atât PCI cât și CABG în stenoza de IVA proximală — Incorect: La SYNTAX 0-22, atât CABG cât și PCI pot fi folosite în IVA proximală, TC sau trivascular fără diabet.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1083, 1084, Revascularizare — PCI versus CABG (SYNTAX) (pagini PDF: 244, 245).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1083,
    1084
   ],
   "pdfPages": [
    244,
    245
   ],
   "section": "Revascularizare — PCI versus CABG (SYNTAX)"
  },
  "learningObjective": "Aplicarea pragului SYNTAX >22, a preferinței CABG în diabetul trivascular și a mortalității CABG <1%.",
  "optionRationales": [
   "Mortalitatea chirurgicală <1% la FE conservată.",
   "Arterele mamare interne și gastro-epiploice au durată mai lungă decât grafturile venoase.",
   "PCI preferată în uni-/bivascular fără IVA sau TC.",
   "CABG preferat în trivascular + diabet sau SYNTAX >22.",
   "La SYNTAX 0-22, atât CABG cât și PCI pot fi folosite în IVA proximală, TC sau trivascular fără diabet."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă fereastra SYNTAX 0-22 — unde ambele metode sunt posibile — într-o dublă contraindicație."
  },
  "textbookExpressions": [
   "SYNTAX",
   "sub 1%"
  ]
 },
 {
  "id": "cardiologie-adv-072",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Definiția universală a infarctului și troponina înalt sensibilă:",
  "options": [
   "Tipul 1 este IM spontan prin eveniment coronarian primar (eroziune/ruptură/fisură/disecție de placă)",
   "Tipul 2 este secundar dezechilibrului ofertă/necesar (spasm, embolie, anemie, aritmii, hiper-/hipotensiune)",
   "Tipul 4a este IM determinat de PCI, iar 4b de tromboza de stent; tipul 5 de CABG",
   "Un rezultat <5 ng/L are valoare predictivă negativă de 99,4%; dacă primul test e negativ, se repetă la 3 ore",
   "Tipul 3 este IM fără necroză, diagnosticat doar prin durere atipică"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Tipul 1 este IM spontan prin eveniment coronarian primar (eroziune/ruptură/fisură/disecție de placă) — Corect: Tipul 1: eveniment coronarian primar pe placă.\n\nTipul 2 este secundar dezechilibrului ofertă/necesar (spasm, embolie, anemie, aritmii, hiper-/hipotensiune) — Corect: Tipul 2: dezechilibru ofertă-necesar.\n\nTipul 4a este IM determinat de PCI, iar 4b de tromboza de stent; tipul 5 de CABG — Corect: 4a = PCI, 4b = tromboză de stent, 5 = CABG.\n\nUn rezultat <5 ng/L are valoare predictivă negativă de 99,4%; dacă primul test e negativ, se repetă la 3 ore — Corect: <5 ng/L: VPN 99,4%; repetare la 3 ore dacă primul test e negativ.\n\nTipul 3 este IM fără necroză, diagnosticat doar prin durere atipică — Incorect: Tipul 3 este IM cu moarte cardiacă subită, nu absența necrozei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1085, 1084, SCA — Tipurile de IM și troponina (pagini PDF: 246, 245).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1085,
    1084
   ],
   "pdfPages": [
    246,
    245
   ],
   "section": "SCA — Tipurile de IM și troponina"
  },
  "learningObjective": "Potrivirea tipurilor 1, 2, 4a/4b și 5 cu mecanismul și a NPV 99,4% la pragul <5 ng/L.",
  "optionRationales": [
   "Tipul 1: eveniment coronarian primar pe placă.",
   "Tipul 2: dezechilibru ofertă-necesar.",
   "4a = PCI, 4b = tromboză de stent, 5 = CABG.",
   "<5 ng/L: VPN 99,4%; repetare la 3 ore dacă primul test e negativ.",
   "Tipul 3 este IM cu moarte cardiacă subită, nu absența necrozei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește tipul 3 (moarte subită) cu un tablou de durere atipică fără necroză."
  },
  "textbookExpressions": [
   "5 ng/L",
   "99,4%"
  ]
 },
 {
  "id": "cardiologie-adv-073",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Scorul TIMI în NSTEMI/angină instabilă punctează, printre altele:",
  "options": [
   "Vârsta >75 ani cu 3 puncte, identic STEMI TIMI",
   "Vârsta >65 ani; >3 factori de risc; stenoze >50%; aspirină în ultimele 7 zile; angină de repaus >2 episoade/24 h; modificare ST; markeri de necroză",
   "Doar troponina, fără date clinice sau ECG",
   "Greutatea >67 kg și întârzierea tratamentului >4 ore, ca în STEMI",
   "Clasa Killip ca unic determinant"
  ],
  "correct": [
   1
  ],
  "explanation": "Vârsta >75 ani cu 3 puncte, identic STEMI TIMI — Incorect: Vârsta >75 cu 3 puncte aparține TIMI STEMI, nu NSTEMI.\n\nVârsta >65 ani; >3 factori de risc; stenoze >50%; aspirină în ultimele 7 zile; angină de repaus >2 episoade/24 h; modificare ST; markeri de necroză — Corect: Cadranul 30.35 enumeră cei 7 factori (vârstă >65, factori de risc, stenoze >50%, aspirină 7 zile, angină de repaus, ST, enzime).\n\nDoar troponina, fără date clinice sau ECG — Incorect: Scorul combină clinic, ECG și markeri, nu troponina izolată.\n\nGreutatea >67 kg și întârzierea tratamentului >4 ore, ca în STEMI — Incorect: Greutatea >67 kg și întârzierea >4 ore sunt itemi TIMI STEMI.\n\nClasa Killip ca unic determinant — Incorect: Killip intră în GRACE, nu ca unic item TIMI NSTEMI.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1085, SCA — Scorul TIMI NSTEMI/AI (pagini PDF: 246).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1085
   ],
   "pdfPages": [
    246
   ],
   "section": "SCA — Scorul TIMI NSTEMI/AI"
  },
  "learningObjective": "Recunoașterea celor 7 itemi TIMI pentru NSTEMI, distinct de itemii TIMI STEMI.",
  "optionRationales": [
   "Vârsta >75 cu 3 puncte aparține TIMI STEMI, nu NSTEMI.",
   "Cadranul 30.35 enumeră cei 7 factori (vârstă >65, factori de risc, stenoze >50%, aspirină 7 zile, angină de repaus, ST, enzime).",
   "Scorul combină clinic, ECG și markeri, nu troponina izolată.",
   "Greutatea >67 kg și întârzierea >4 ore sunt itemi TIMI STEMI.",
   "Killip intră în GRACE, nu ca unic item TIMI NSTEMI."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amestecă itemii TIMI NSTEMI cu cei STEMI (greutate, delay, vârstă >75 cu 3 puncte)."
  },
  "textbookExpressions": [
   "TIMI",
   ">65 ani"
  ]
 },
 {
  "id": "cardiologie-adv-074",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Conform scorului GRACE în NSTEMI, riscul intra-spitalicesc scăzut corespunde:",
  "options": [
   "Unui scor >140, cu mortalitate >3%",
   "Unui scor ≤108, cu mortalitate <1%",
   "Unui scor 126-154, intervalul STEMI de risc mediu",
   "Unui scor ≥200, indiferent de prezentare",
   "Lipsei oricărei stratificări, GRACE fiind rezervat STEMI"
  ],
  "correct": [
   1
  ],
  "explanation": "Unui scor >140, cu mortalitate >3% — Incorect: >140 este riscul înalt NSTEMI intra-spital (>3%).\n\nUnui scor ≤108, cu mortalitate <1% — Corect: Cadranul 30.37: NSTEMI intra-spital, risc scăzut ≤108, mortalitate <1%.\n\nUnui scor 126-154, intervalul STEMI de risc mediu — Incorect: 126-154 este riscul mediu STEMI intra-spital.\n\nUnui scor ≥200, indiferent de prezentare — Incorect: ≥200 nu este o categorie GRACE de NSTEMI intra-spital.\n\nLipsei oricărei stratificări, GRACE fiind rezervat STEMI — Incorect: GRACE se aplică atât NSTEMI cât și STEMI, cu praguri diferite.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1086, SCA — Scorul GRACE (pagini PDF: 247).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1086
   ],
   "pdfPages": [
    247
   ],
   "section": "SCA — Scorul GRACE"
  },
  "learningObjective": "Reținerea pragului GRACE ≤108 pentru mortalitate intra-spital <1% în NSTEMI.",
  "optionRationales": [
   ">140 este riscul înalt NSTEMI intra-spital (>3%).",
   "Cadranul 30.37: NSTEMI intra-spital, risc scăzut ≤108, mortalitate <1%.",
   "126-154 este riscul mediu STEMI intra-spital.",
   "≥200 nu este o categorie GRACE de NSTEMI intra-spital.",
   "GRACE se aplică atât NSTEMI cât și STEMI, cu praguri diferite."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă pragul NSTEMI ≤108 (<1%) cu pragul de risc înalt >140 sau cu benzile STEMI."
  },
  "textbookExpressions": [
   "108",
   "<1"
  ]
 },
 {
  "id": "cardiologie-adv-075",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Momentul coronarografiei în NSTEMI, după riscul ESC:",
  "options": [
   "Risc foarte înalt (angină persistentă, IC, șoc, aritmii maligne): coronarografie <2 ore",
   "Risc înalt (troponină în crescendo, ST dinamic, GRACE >140): în primele 24 de ore",
   "Risc intermediar (diabet, eRFG <60, FEVS <40%, GRACE 109-140, PCI/CABG anterior): în primele 72 de ore",
   "Risc înalt se amână la 7 zile, pentru „stabilizarea plăcii”",
   "GRACE 109-140 impune angiografie de urgență sub 2 ore, identic șocului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Risc foarte înalt (angină persistentă, IC, șoc, aritmii maligne): coronarografie <2 ore — Corect: Foarte înalt: <2 ore.\n\nRisc înalt (troponină în crescendo, ST dinamic, GRACE >140): în primele 24 de ore — Corect: Înalt, inclusiv GRACE >140: 24 de ore.\n\nRisc intermediar (diabet, eRFG <60, FEVS <40%, GRACE 109-140, PCI/CABG anterior): în primele 72 de ore — Corect: Intermediar, inclusiv GRACE 109-140: 72 de ore.\n\nRisc înalt se amână la 7 zile, pentru „stabilizarea plăcii” — Incorect: Risc înalt nu se amână o săptămână.\n\nGRACE 109-140 impune angiografie de urgență sub 2 ore, identic șocului — Incorect: GRACE 109-140 este intermediar (72 h), nu urgență de șoc.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1087, NSTEMI — Stratificarea și timing-ul angiografiei (pagini PDF: 248).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1087
   ],
   "pdfPages": [
    248
   ],
   "section": "NSTEMI — Stratificarea și timing-ul angiografiei"
  },
  "learningObjective": "Aplicarea ferestrelor <2 h / 24 h / 72 h în funcție de GRACE și de instabilitatea clinică.",
  "optionRationales": [
   "Foarte înalt: <2 ore.",
   "Înalt, inclusiv GRACE >140: 24 de ore.",
   "Intermediar, inclusiv GRACE 109-140: 72 de ore.",
   "Risc înalt nu se amână o săptămână.",
   "GRACE 109-140 este intermediar (72 h), nu urgență de șoc."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Suprapune banda intermediară GRACE 109-140 peste urgența de sub 2 ore a șocului."
  },
  "textbookExpressions": [
   "<2 ore",
   ">140"
  ]
 },
 {
  "id": "cardiologie-adv-076",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Fiziopatologia STEMI și mortalitatea intra-spitalicească:",
  "options": [
   "Necroza începe în 15-30 de minute de la ocluzie, întâi subendocardic, apoi transmural cu undă Q",
   "Mortalitatea intra-spitalicească este între 6 și 14%",
   "Reperfuzia precoce salvează miocard și reduce mortalitatea și morbiditatea",
   "Necroza transmurală este completă în sub 5 minute, fără zonă subendocardică prealabilă",
   "Mortalitatea intra-spital depășește 50% în STEMI necomplicat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Necroza începe în 15-30 de minute de la ocluzie, întâi subendocardic, apoi transmural cu undă Q — Corect: Necroza în 15-30 de minute, întâi subendocardic, apoi transmural cu undă Q.\n\nMortalitatea intra-spitalicească este între 6 și 14% — Corect: Mortalitatea intra-spital este între 6 și 14%.\n\nReperfuzia precoce salvează miocard și reduce mortalitatea și morbiditatea — Corect: Reperfuzia precoce salvează miocard și reduce mortalitatea și morbiditatea.\n\nNecroza transmurală este completă în sub 5 minute, fără zonă subendocardică prealabilă — Incorect: Primul afectat este miocardul subendocardic; transmuralul urmează pe măsură ce ischemia se prelungește.\n\nMortalitatea intra-spital depășește 50% în STEMI necomplicat — Incorect: 6-14%, nu peste 50% în forma necomplicată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1088, STEMI — Fiziopatologie și mortalitate (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1088
   ],
   "pdfPages": [
    249
   ],
   "section": "STEMI — Fiziopatologie și mortalitate"
  },
  "learningObjective": "Reținerea ferestrei 15-30 de minute până la necroză și a mortalității intra-spital 6-14%.",
  "optionRationales": [
   "Necroza în 15-30 de minute, întâi subendocardic, apoi transmural cu undă Q.",
   "Mortalitatea intra-spital este între 6 și 14%.",
   "Reperfuzia precoce salvează miocard și reduce mortalitatea și morbiditatea.",
   "Primul afectat este miocardul subendocardic; transmuralul urmează pe măsură ce ischemia se prelungește.",
   "6-14%, nu peste 50% în forma necomplicată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Comprimă necroza la 5 minute sau umflă mortalitatea peste 50%, deși textul dă 15-30 min și 6-14%."
  },
  "textbookExpressions": [
   "15-30 minute",
   "6 şi 14%"
  ]
 },
 {
  "id": "cardiologie-adv-077",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Reperfuzia în STEMI:",
  "options": [
   "PCI primară, cu ghid distal de ocluzie în primele 60 de minute de la prezentare, este metoda preferată în centre cu laborator",
   "Tromboliza este indicată dacă PCI primară nu poate fi efectuată în primele 120 de minute de la diagnostic",
   "În primele 6 ore, tromboliza poate preveni 30 de decese la 1.000 de pacienți tratați; între 7-12 ore, 20 la 1.000",
   "După 12 ore beneficiile sunt limitate, mai ales la vârstnici, prin risc crescut de AVC",
   "Tromboaspirația de rutină este recomandată în toate PCI primare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "PCI primară, cu ghid distal de ocluzie în primele 60 de minute de la prezentare, este metoda preferată în centre cu laborator — Corect: Ghidul distal în primele 60 de minute este ținta PCI primare.\n\nTromboliza este indicată dacă PCI primară nu poate fi efectuată în primele 120 de minute de la diagnostic — Corect: Liza dacă PCI nu e posibilă în 120 de minute.\n\nÎn primele 6 ore, tromboliza poate preveni 30 de decese la 1.000 de pacienți tratați; între 7-12 ore, 20 la 1.000 — Corect: Meta-analiza: 30/1000 în 6 ore, 20/1000 între 7-12 ore.\n\nDupă 12 ore beneficiile sunt limitate, mai ales la vârstnici, prin risc crescut de AVC — Corect: După 12 ore beneficiul e limitat; vârstnicii au risc mai mare de AVC.\n\nTromboaspirația de rutină este recomandată în toate PCI primare — Incorect: Tromboaspirația de rutină nu este recomandată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1089, 1088, STEMI — PCI primară și tromboliză (pagini PDF: 250, 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1089,
    1088
   ],
   "pdfPages": [
    250,
    249
   ],
   "section": "STEMI — PCI primară și tromboliză"
  },
  "learningObjective": "Aplicarea ferestrelor 60 min (PCI) și 120 min (switch la liza), plus 30 versus 20 decese evitate la 1.000.",
  "optionRationales": [
   "Ghidul distal în primele 60 de minute este ținta PCI primare.",
   "Liza dacă PCI nu e posibilă în 120 de minute.",
   "Meta-analiza: 30/1000 în 6 ore, 20/1000 între 7-12 ore.",
   "După 12 ore beneficiul e limitat; vârstnicii au risc mai mare de AVC.",
   "Tromboaspirația de rutină nu este recomandată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Adaugă tromboaspirația de rutină, pe care textul o respinge explicit în PCI primară."
  },
  "textbookExpressions": [
   "60 de minute",
   "120 minute"
  ]
 },
 {
  "id": "cardiologie-adv-078",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "În PCI primară pentru STEMI se preferă:",
  "options": [
   "Abordul radial, care reduce complicațiile arteriale și poate ameliora supraviețuirea (RIVAL, RIFLE STEACS)",
   "Stenturile farmacologic active față de stenturile metalice simple",
   "Aspirină plus prasugrel sau ticagrelor ca duală antiagregare",
   "Utilizarea de rutină a inhibitorilor GP IIb/IIIa",
   "Revascularizarea doar a leziunii culprit, completarea fiind amânată 6 luni în toate cazurile"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Abordul radial, care reduce complicațiile arteriale și poate ameliora supraviețuirea (RIVAL, RIFLE STEACS) — Corect: RIVAL și RIFLE STEACS susțin artera radială.\n\nStenturile farmacologic active față de stenturile metalice simple — Corect: DES sunt preferate față de BMS în PCI primară.\n\nAspirină plus prasugrel sau ticagrelor ca duală antiagregare — Corect: Antiagregarea preferată: aspirină plus prasugrel sau ticagrelor.\n\nUtilizarea de rutină a inhibitorilor GP IIb/IIIa — Incorect: Utilizarea de rutină a inhibitorilor GP IIb/IIIa nu mai este recomandată.\n\nRevascularizarea doar a leziunii culprit, completarea fiind amânată 6 luni în toate cazurile — Incorect: Ghidurile ESC recomandă revascularizare completă în timpul spitalizării inițiale, înainte de externare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1089, STEMI — Detalii de PCI primară (pagini PDF: 250).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1089
   ],
   "pdfPages": [
    250
   ],
   "section": "STEMI — Detalii de PCI primară"
  },
  "learningObjective": "Recunoașterea abordului radial, a DES și a dualei aspirină+prasugrel/ticagrelor, față de GP IIb/IIIa nedevenită rutină.",
  "optionRationales": [
   "RIVAL și RIFLE STEACS susțin artera radială.",
   "DES sunt preferate față de BMS în PCI primară.",
   "Antiagregarea preferată: aspirină plus prasugrel sau ticagrelor.",
   "Utilizarea de rutină a inhibitorilor GP IIb/IIIa nu mai este recomandată.",
   "Ghidurile ESC recomandă revascularizare completă în timpul spitalizării inițiale, înainte de externare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează GP IIb/IIIa ca rutină — strategie abandonată — și amână completarea revascularizării 6 luni."
  },
  "textbookExpressions": [
   "artera radială",
   "prasugrel sau ticagrelor"
  ]
 },
 {
  "id": "cardiologie-adv-079",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Clasificarea Killip post-STEMI:",
  "options": [
   "Clasa I: fără raluri și fără galop; clasa II: raluri pe < jumătate din baze sau galop; clasa III: raluri pe >50% din câmpuri; clasa IV: șoc cardiogen",
   "Contraindicațiile absolute ale trombolizei includ AVC hemoragic de orice durată, AVC ischemic în ultimele 3 luni, disecție de aortă și sângerare digestivă în luna precedentă",
   "Killip II se definește prin șoc cardiogen",
   "AVC ischemic vechi de 5 ani este contraindicație absolută identică hemoragicului",
   "Hipertensiunea refractară (TAS >180 mmHg) este contraindicație absolută, nu relativă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Clasa I: fără raluri și fără galop; clasa II: raluri pe < jumătate din baze sau galop; clasa III: raluri pe >50% din câmpuri; clasa IV: șoc cardiogen — Corect: Cele patru clase sunt descrise exact astfel.\n\nContraindicațiile absolute ale trombolizei includ AVC hemoragic de orice durată, AVC ischemic în ultimele 3 luni, disecție de aortă și sângerare digestivă în luna precedentă — Corect: Cadranul 30.41 enumeră aceste contraindicații absolute.\n\nKillip II se definește prin șoc cardiogen — Incorect: Șocul cardiogen este Killip IV, nu II.\n\nAVC ischemic vechi de 5 ani este contraindicație absolută identică hemoragicului — Incorect: AVC ischemic în ultimele 3 luni este absolut; unul vechi de 5 ani nu este listat ca atare.\n\nHipertensiunea refractară (TAS >180 mmHg) este contraindicație absolută, nu relativă — Incorect: TAS >180 mmHg refractară este contraindicație relativă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1090, STEMI — Killip și contraindicațiile trombolizei (pagini PDF: 251).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1090
   ],
   "pdfPages": [
    251
   ],
   "section": "STEMI — Killip și contraindicațiile trombolizei"
  },
  "learningObjective": "Fixarea celor patru clase Killip și a contraindicațiilor absolute de liza, distincte de cele relative.",
  "optionRationales": [
   "Cele patru clase sunt descrise exact astfel.",
   "Cadranul 30.41 enumeră aceste contraindicații absolute.",
   "Șocul cardiogen este Killip IV, nu II.",
   "AVC ischemic în ultimele 3 luni este absolut; unul vechi de 5 ani nu este listat ca atare.",
   "TAS >180 mmHg refractară este contraindicație relativă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută șocul din Killip IV în II și promovează o HTA relativă la rang de contraindicație absolută."
  },
  "textbookExpressions": [
   "Kil/ip IV",
   "Disecţia de aortă"
  ]
 },
 {
  "id": "cardiologie-adv-080",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Defectul septal ventricular post-STEMI:",
  "options": [
   "Apare la 1-2% dintre pacienți și, fără corecție chirurgicală, mortalitatea la 12 luni poate ajunge la 92%",
   "Este o complicație benignă, cu mortalitate sub 5% la 1 an fără intervenție",
   "Se tratează doar cu diuretice orale, balonul de contrapulsație fiind contraindicat",
   "Apare la peste 30% dintre STEMI reperfuzate precoce",
   "Diagnosticul se pune pe radiografia de torace, fără ecografie"
  ],
  "correct": [
   0
  ],
  "explanation": "Apare la 1-2% dintre pacienți și, fără corecție chirurgicală, mortalitatea la 12 luni poate ajunge la 92% — Corect: Textul: 1-2% dintre STEMI; mortalitate 92% la 12 luni în lipsa chirurgiei.\n\nEste o complicație benignă, cu mortalitate sub 5% la 1 an fără intervenție — Incorect: Mortalitatea este foarte mare, nu benignă.\n\nSe tratează doar cu diuretice orale, balonul de contrapulsație fiind contraindicat — Incorect: IABP și angiografia pot permite diagnosticul complet înaintea chirurgiei.\n\nApare la peste 30% dintre STEMI reperfuzate precoce — Incorect: Se asociază cu fibrinoliză tardivă sau ineficace, nu cu reperfuzia precoce.\n\nDiagnosticul se pune pe radiografia de torace, fără ecografie — Incorect: Fig. 30.72 și contextul clinic/eco ghidează diagnosticul, nu radiografia izolată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1090, Complicațiile STEMI — Defect septal ventricular (pagini PDF: 251).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1090
   ],
   "pdfPages": [
    251
   ],
   "section": "Complicațiile STEMI — Defect septal ventricular"
  },
  "learningObjective": "Reținerea incidenței 1-2% și a mortalității 92% la 12 luni fără chirurgie.",
  "optionRationales": [
   "Textul: 1-2% dintre STEMI; mortalitate 92% la 12 luni în lipsa chirurgiei.",
   "Mortalitatea este foarte mare, nu benignă.",
   "IABP și angiografia pot permite diagnosticul complet înaintea chirurgiei.",
   "Se asociază cu fibrinoliză tardivă sau ineficace, nu cu reperfuzia precoce.",
   "Fig. 30.72 și contextul clinic/eco ghidează diagnosticul, nu radiografia izolată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă o complicație cu mortalitate 92% într-o evoluție „benignă”, inversând prognosticul real."
  },
  "textbookExpressions": [
   "1-2%",
   "92%"
  ]
 },
 {
  "id": "cardiologie-adv-081",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Complicațiile mecanice și aritmice precoce ale STEMI:",
  "options": [
   "Insuficiența mitrală severă are trei mecanisme; ETE este necesară pentru etiologie",
   "Ruptura de mușchi papilar produce edem pulmonar acut și șoc, cu indicație de IABP, coronarografie și chirurgie precoce",
   "Potasiul seric trebuie menținut peste 4,5 mmol/L; TV/FV incesantă poate răspunde la magneziu 8 mmol în 15 minute",
   "Ruptura de perete liber este de obicei bine tolerată, fără risc de disociație electromecanică",
   "Bradiaritmiile nu se tratează cu atropină, ci doar cu stimulare permanentă imediată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Insuficiența mitrală severă are trei mecanisme; ETE este necesară pentru etiologie — Corect: Trei mecanisme (dilatare de inel, disfuncție de papilar inferior, ruptură); ETE precizează etiologia.\n\nRuptura de mușchi papilar produce edem pulmonar acut și șoc, cu indicație de IABP, coronarografie și chirurgie precoce — Corect: Ruptura de papilar: EPA + șoc; IABP, coronarografie și chirurgie precoce.\n\nPotasiul seric trebuie menținut peste 4,5 mmol/L; TV/FV incesantă poate răspunde la magneziu 8 mmol în 15 minute — Corect: K+ >4,5 mmol/L; magneziu IV 8 mmol în 15 minute pentru TV/FV incesantă.\n\nRuptura de perete liber este de obicei bine tolerată, fără risc de disociație electromecanică — Incorect: Ruptura de perete liber este cel mai frecvent fatală, prin disociație electromecanică.\n\nBradiaritmiile nu se tratează cu atropină, ci doar cu stimulare permanentă imediată — Incorect: Bradiaritmiile se tratează inițial cu atropină 0,5 mg i.v., repetată până la șase ori în 4 ore.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1091, STEMI — IM mitrală, ruptură și aritmii (pagini PDF: 252).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1091
   ],
   "pdfPages": [
    252
   ],
   "section": "STEMI — IM mitrală, ruptură și aritmii"
  },
  "learningObjective": "Diferențierea celor trei mecanisme de IM mitrală și a țintelor K+ >4,5 mmol/L și Mg 8 mmol.",
  "optionRationales": [
   "Trei mecanisme (dilatare de inel, disfuncție de papilar inferior, ruptură); ETE precizează etiologia.",
   "Ruptura de papilar: EPA + șoc; IABP, coronarografie și chirurgie precoce.",
   "K+ >4,5 mmol/L; magneziu IV 8 mmol în 15 minute pentru TV/FV incesantă.",
   "Ruptura de perete liber este cel mai frecvent fatală, prin disociație electromecanică.",
   "Bradiaritmiile se tratează inițial cu atropină 0,5 mg i.v., repetată până la șase ori în 4 ore."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Minimizează ruptura de perete liber — complicație de obicei fatală — și interzice atropina, primul pas al bradiaritmiei."
  },
  "textbookExpressions": [
   "4,5 mmol/L",
   "8 mmol/L"
  ]
 },
 {
  "id": "cardiologie-adv-082",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "După stentare la un pacient cu FA permanentă, strategia antithrombotică depinde de HAS-BLED:",
  "options": [
   "HAS-BLED 0-2: triplă terapie 6 luni, apoi dublă (antiagregant + AVK/DOAC)",
   "HAS-BLED >2: triplă 4 săptămâni, apoi dublă încă 11 luni",
   "HAS-BLED >2: triplă terapie 12 luni, fără de-escaladare",
   "Antagonistul de aldosteron se evită dacă FEVS <40% și există semne de IC",
   "Ținta LDL post-IMA este <3,5 mmol/L, nu <1,8 mmol/L"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "HAS-BLED 0-2: triplă terapie 6 luni, apoi dublă (antiagregant + AVK/DOAC) — Corect: HAS-BLED 0-2: triplă 6 luni, apoi dublă.\n\nHAS-BLED >2: triplă 4 săptămâni, apoi dublă încă 11 luni — Corect: HAS-BLED >2: triplă 4 săptămâni, apoi dublă 11 luni.\n\nHAS-BLED >2: triplă terapie 12 luni, fără de-escaladare — Incorect: De-escaladarea este explicită, nu tripla continuă 12 luni la risc hemoragic înalt.\n\nAntagonistul de aldosteron se evită dacă FEVS <40% și există semne de IC — Incorect: Antagonistul de aldosteron este indicat dacă există semne de IC și FEVS <40%, cu creatinine și K controlate.\n\nȚinta LDL post-IMA este <3,5 mmol/L, nu <1,8 mmol/L — Incorect: Ținta LDL este <1,8 mmol/L cu statină de potență înaltă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1091, Post-SCA — Tripla terapie și prevenție secundară (pagini PDF: 252).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1091
   ],
   "pdfPages": [
    252
   ],
   "section": "Post-SCA — Tripla terapie și prevenție secundară"
  },
  "learningObjective": "Aplicarea ferestrelor 6 luni versus 4 săptămâni de triplă terapie după HAS-BLED.",
  "optionRationales": [
   "HAS-BLED 0-2: triplă 6 luni, apoi dublă.",
   "HAS-BLED >2: triplă 4 săptămâni, apoi dublă 11 luni.",
   "De-escaladarea este explicită, nu tripla continuă 12 luni la risc hemoragic înalt.",
   "Antagonistul de aldosteron este indicat dacă există semne de IC și FEVS <40%, cu creatinine și K controlate.",
   "Ținta LDL este <1,8 mmol/L cu statină de potență înaltă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Prelungește tripla terapie la 12 luni tocmai la HAS-BLED înalt, unde textul o scurtează la 4 săptămâni."
  },
  "textbookExpressions": [
   "HAS-BLED",
   "<1.8 mmol/L"
  ]
 },
 {
  "id": "cardiologie-adv-083",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Stenoza mitrală reumatismală se caracterizează prin:",
  "options": [
   "Aria normală 4-6 cm²; stenoza severă este definită sub 1 cm²",
   "Afectează mai frecvent femeile decât bărbații",
   "Simptomele apar de obicei când aria devine <2 cm²",
   "În Europa, intervalul de la RAA la stenoză severă este de câteva decenii; în țările mai puțin dezvoltate, stenoză severă de la 10-20 de ani",
   "Aria normală este 1 cm², iar stenoza severă sub 4 cm²"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Aria normală 4-6 cm²; stenoza severă este definită sub 1 cm² — Corect: Orificiul normal 4-6 cm²; sever <1 cm².\n\nAfectează mai frecvent femeile decât bărbații — Corect: Afectează mai frecvent femeile.\n\nSimptomele apar de obicei când aria devine <2 cm² — Corect: Simptomele apar de obicei la arie <2 cm².\n\nÎn Europa, intervalul de la RAA la stenoză severă este de câteva decenii; în țările mai puțin dezvoltate, stenoză severă de la 10-20 de ani — Corect: Europa: decenii de la RAA; țări cu venituri mici-medii: stenoză severă la 10-20 de ani.\n\nAria normală este 1 cm², iar stenoza severă sub 4 cm² — Incorect: Valorile sunt inversate față de text.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1092, Stenoza mitrală — Arie valvulară și epidemiologie (pagini PDF: 253).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1092
   ],
   "pdfPages": [
    253
   ],
   "section": "Stenoza mitrală — Arie valvulară și epidemiologie"
  },
  "learningObjective": "Aplicarea pragurilor 4-6 cm² (normal), <2 cm² (simptome) și <1 cm² (sever) și a diferenței geografice de evoluție.",
  "optionRationales": [
   "Orificiul normal 4-6 cm²; sever <1 cm².",
   "Afectează mai frecvent femeile.",
   "Simptomele apar de obicei la arie <2 cm².",
   "Europa: decenii de la RAA; țări cu venituri mici-medii: stenoză severă la 10-20 de ani.",
   "Valorile sunt inversate față de text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ariile normal/sever (4-6 versus <1), capcana numerică centrală a stenozei mitrale."
  },
  "textbookExpressions": [
   "4-6 cm2",
   "sub 1 cm2"
  ]
 },
 {
  "id": "cardiologie-adv-084",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Semnele auscultatorii și ECG în stenoza mitrală:",
  "options": [
   "Zgomot 1 întărit dacă valvele sunt mobile, urmat de clacment de deschidere și uruitură diastolică la apex, în decubit lateral stâng, în expir",
   "Accentuarea presistolică apare la pacienții în ritm sinusal, prin contracție atrială stângă",
   "Suflul Graham-Steell este uruitura diastolică pulmonară a regurgitării pulmonare din hipertensiunea pulmonară",
   "Unda P bifidă (P mitral) reflectă activarea întârziată a atriului stâng",
   "Zgomotul 1 este constant diminuat, chiar la valve mobile necicatrizate"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Zgomot 1 întărit dacă valvele sunt mobile, urmat de clacment de deschidere și uruitură diastolică la apex, în decubit lateral stâng, în expir — Corect: S1 întărit la valve mobile, clacment, uruitură la apex în DDS, în expir.\n\nAccentuarea presistolică apare la pacienții în ritm sinusal, prin contracție atrială stângă — Corect: Accentuare presistolică în sinus, prin contracție atrială.\n\nSuflul Graham-Steell este uruitura diastolică pulmonară a regurgitării pulmonare din hipertensiunea pulmonară — Corect: Graham-Steell: suflu diastolic pulmonar al regurgitării pulmonare din HTP.\n\nUnda P bifidă (P mitral) reflectă activarea întârziată a atriului stâng — Corect: P bifidă prin activare întârziată a AS.\n\nZgomotul 1 este constant diminuat, chiar la valve mobile necicatrizate — Incorect: S1 este întărit dacă valvele sunt mobile; diminuarea apare la calcificare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1093, 1092, Stenoza mitrală — Auscultație și P mitral (pagini PDF: 254, 253).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1093,
    1092
   ],
   "pdfPages": [
    254,
    253
   ],
   "section": "Stenoza mitrală — Auscultație și P mitral"
  },
  "learningObjective": "Reconstituirea secvenței S1 intens – clacment – uruitură, a accentuării presistolice și a suflului Graham-Steell.",
  "optionRationales": [
   "S1 întărit la valve mobile, clacment, uruitură la apex în DDS, în expir.",
   "Accentuare presistolică în sinus, prin contracție atrială.",
   "Graham-Steell: suflu diastolic pulmonar al regurgitării pulmonare din HTP.",
   "P bifidă prin activare întârziată a AS.",
   "S1 este întărit dacă valvele sunt mobile; diminuarea apare la calcificare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează intensitatea S1 la valvele mobile, semnul clasic al stenozei mitrale încă „pliabile”."
  },
  "textbookExpressions": [
   "clacment de deschidere",
   "Graham-Steell"
  ]
 },
 {
  "id": "cardiologie-adv-085",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "La evaluarea ecografică, stenoza mitrală severă corespunde unui timp de înjumătățire a presiunii (PHT):",
  "options": [
   "40-70 ms",
   "71-139 ms",
   "140-219 ms",
   "Peste 219 ms",
   "Sub 40 ms, identic valvei normale"
  ],
  "correct": [
   3
  ],
  "explanation": "40-70 ms — Incorect: 40-70 ms este intervalul normal.\n\n71-139 ms — Incorect: 71-139 ms corespunde formei ușoare.\n\n140-219 ms — Incorect: 140-219 ms este forma moderată.\n\nPeste 219 ms — Corect: Cadranul 30.42: PHT >219 ms, gradient mediu >10 mmHg, arie <1,0 cm² = severă.\n\nSub 40 ms, identic valvei normale — Incorect: Sub 40 ms nu este categoria de severitate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1094, Stenoza mitrală — Cadranul 30.42 (PHT) (pagini PDF: 255).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1094
   ],
   "pdfPages": [
    255
   ],
   "section": "Stenoza mitrală — Cadranul 30.42 (PHT)"
  },
  "learningObjective": "Reținerea PHT >219 ms (și arie <1,0 cm²) ca prag de stenoză mitrală severă.",
  "optionRationales": [
   "40-70 ms este intervalul normal.",
   "71-139 ms corespunde formei ușoare.",
   "140-219 ms este forma moderată.",
   "Cadranul 30.42: PHT >219 ms, gradient mediu >10 mmHg, arie <1,0 cm² = severă.",
   "Sub 40 ms nu este categoria de severitate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele patru benzi PHT din același tabel sunt aproape consecutive; doar >219 ms este severă."
  },
  "textbookExpressions": [
   ">219",
   "<1,0"
  ]
 },
 {
  "id": "cardiologie-adv-086",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Indicațiile chirurgicale ESC în regurgitarea mitrală severă includ:",
  "options": [
   "Pacienți simptomatici cu FEVS >30% și diametru telediastolic al VS <55 mm",
   "Asimptomatici cu disfuncție de VS (diametru telesistolic >45 mm și/sau FEVS <60%)",
   "Asimptomatici cu FE prezervată dacă există FA și/sau hipertensiune pulmonară",
   "Urmărire conservatoare nelimitată la regurgitarea severă simptomatică cu FE 55%",
   "MitraClip-ul înlocuiește chirurgia la toți candidații operabili"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pacienți simptomatici cu FEVS >30% și diametru telediastolic al VS <55 mm — Corect: ESC: simptomatici cu FEVS >30% și DTD <55 mm.\n\nAsimptomatici cu disfuncție de VS (diametru telesistolic >45 mm și/sau FEVS <60%) — Corect: Asimptomatici cu DTS >45 mm și/sau FEVS <60%.\n\nAsimptomatici cu FE prezervată dacă există FA și/sau hipertensiune pulmonară — Corect: FA și/sau HTP la asimptomatici cu FE prezervată justifică luarea în considerare.\n\nUrmărire conservatoare nelimitată la regurgitarea severă simptomatică cu FE 55% — Incorect: RM severă simptomatică are indicație chirurgicală, nu urmărire nelimitată.\n\nMitraClip-ul înlocuiește chirurgia la toți candidații operabili — Incorect: MitraClip este o opțiune la cei neeligibili chirurgical, nu un substitut universal.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1097, Regurgitarea mitrală — Indicații chirurgicale ESC (pagini PDF: 258).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1097
   ],
   "pdfPages": [
    258
   ],
   "section": "Regurgitarea mitrală — Indicații chirurgicale ESC"
  },
  "learningObjective": "Aplicarea pragurilor FEVS >30%/LVEDD <55 mm la simptomatici și LVESD >45 mm sau FEVS <60% la asimptomatici.",
  "optionRationales": [
   "ESC: simptomatici cu FEVS >30% și DTD <55 mm.",
   "Asimptomatici cu DTS >45 mm și/sau FEVS <60%.",
   "FA și/sau HTP la asimptomatici cu FE prezervată justifică luarea în considerare.",
   "RM severă simptomatică are indicație chirurgicală, nu urmărire nelimitată.",
   "MitraClip este o opțiune la cei neeligibili chirurgical, nu un substitut universal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amână chirurgia la simptomaticul cu FE 55% — tocmai populația cu indicație clară."
  },
  "textbookExpressions": [
   ">45 mm",
   "FEVS <60%"
  ]
 },
 {
  "id": "cardiologie-adv-087",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Prolapsul de valvă mitrală (boala Barlow) și bicuspidia aortică:",
  "options": [
   "Barlow: exces de țesut, inel dilatat, cordaje alungite, degenerescență mixomatoasă; mai frecvent la femei tinere, posibil familial, asociat Marfan/Ehlers-Danlos",
   "Bicuspidia aortică afectează 1-2% dintre nou-născuți; circa 9% din cazuri au transmitere familială și se poate asocia cu coarctație, dilatare de rădăcină și disecție",
   "Barlow este mai frecvent la bărbații vârstnici decât la femeile tinere",
   "Bicuspidia este o anomalie rar familială, sub 0,1% din nou-născuți",
   "BAVC (valva calcificată a vârstnicului) este o leziune congenitală, nu un proces inflamator cu macrofage și limfocite T"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Barlow: exces de țesut, inel dilatat, cordaje alungite, degenerescență mixomatoasă; mai frecvent la femei tinere, posibil familial, asociat Marfan/Ehlers-Danlos — Corect: Descrierea histologică și epidemiologică a bolii Barlow este explicită.\n\nBicuspidia aortică afectează 1-2% dintre nou-născuți; circa 9% din cazuri au transmitere familială și se poate asocia cu coarctație, dilatare de rădăcină și disecție — Corect: BA 1-2% din nou-născuți, 9% familială, asocieri aortice.\n\nBarlow este mai frecvent la bărbații vârstnici decât la femeile tinere — Incorect: Textul: mai des la femei tinere decât la bărbați sau femei în vârstă.\n\nBicuspidia este o anomalie rar familială, sub 0,1% din nou-născuți — Incorect: 1-2% este cea mai frecventă anomalie congenitală, nu 0,1%.\n\nBAVC (valva calcificată a vârstnicului) este o leziune congenitală, nu un proces inflamator cu macrofage și limfocite T — Incorect: BAVC este proces inflamator al vârstnicului, cu macrofage și limfocite T, nu o malformație.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1097, Prolaps mitral (Barlow) și bicuspidie aortică (pagini PDF: 258).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1097
   ],
   "pdfPages": [
    258
   ],
   "section": "Prolaps mitral (Barlow) și bicuspidie aortică"
  },
  "learningObjective": "Contrastul Barlow (femei tinere, mixomatos) versus bicuspidia 1-2% cu 9% familial și risc de coarctație/disecție.",
  "optionRationales": [
   "Descrierea histologică și epidemiologică a bolii Barlow este explicită.",
   "BA 1-2% din nou-născuți, 9% familială, asocieri aortice.",
   "Textul: mai des la femei tinere decât la bărbați sau femei în vârstă.",
   "1-2% este cea mai frecventă anomalie congenitală, nu 0,1%.",
   "BAVC este proces inflamator al vârstnicului, cu macrofage și limfocite T, nu o malformație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sexul/vârsta Barlow și reduce bicuspidia de la 1-2% la o raritate de 0,1%."
  },
  "textbookExpressions": [
   "1-2%",
   "boală Barlow"
  ]
 },
 {
  "id": "cardiologie-adv-088",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Stenoza aortică severă la ecografie (Cadranul 30.43) și prognosticul după simptome:",
  "options": [
   "Velocitate maximă >4,0 m/s, gradient maxim >64 mmHg, gradient mediu >40 mmHg, arie <1,0 cm²",
   "Din momentul simptomelor, decesul survine în medie la 2-3 ani fără corecție",
   "Simptomele (sincopă de efort, angină, dispnee) apar când orificiul scade la circa o treime din normal",
   "Funcția sistolică de VS este de cele mai multe ori prezervată",
   "Velocitatea >2,0 m/s definește deja stenoza critică, cu arie >2,0 cm²"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Velocitate maximă >4,0 m/s, gradient maxim >64 mmHg, gradient mediu >40 mmHg, arie <1,0 cm² — Corect: Cadranul 30.43: Vmax >4,0, Gmax >64, Gmed >40, AVA <1,0.\n\nDin momentul simptomelor, decesul survine în medie la 2-3 ani fără corecție — Corect: Prognostic rezervat: deces în medie la 2-3 ani fără corecție.\n\nSimptomele (sincopă de efort, angină, dispnee) apar când orificiul scade la circa o treime din normal — Corect: Simptomele la reducerea orificiului la o treime.\n\nFuncția sistolică de VS este de cele mai multe ori prezervată — Corect: Funcția sistolică este de cele mai multe ori prezervată.\n\nVelocitatea >2,0 m/s definește deja stenoza critică, cu arie >2,0 cm² — Incorect: Vmax >2,0 m/s este încă în banda ușoară (1,7-2,9); aria >2,0 este normală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1098, 1099, Stenoza aortică — Severitate eco și prognostic (pagini PDF: 259, 260).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1098,
    1099
   ],
   "pdfPages": [
    259,
    260
   ],
   "section": "Stenoza aortică — Severitate eco și prognostic"
  },
  "learningObjective": "Aplicarea pragurilor eco de severitate și a ferestrei prognostice 2-3 ani de la simptome.",
  "optionRationales": [
   "Cadranul 30.43: Vmax >4,0, Gmax >64, Gmed >40, AVA <1,0.",
   "Prognostic rezervat: deces în medie la 2-3 ani fără corecție.",
   "Simptomele la reducerea orificiului la o treime.",
   "Funcția sistolică este de cele mai multe ori prezervată.",
   "Vmax >2,0 m/s este încă în banda ușoară (1,7-2,9); aria >2,0 este normală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Folosește pragul de stenoză ușoară (≈2 m/s) ca „critic”, inversând tabelul 30.43."
  },
  "textbookExpressions": [
   ">4,0",
   "2-3 ani"
  ]
 },
 {
  "id": "cardiologie-adv-089",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Implantarea transcateter a valvei aortice (TAVI) s-a dovedit:",
  "options": [
   "De succes în 86% din cazuri, cu mortalitate periprocedurală 2% și la 30 de zile 12%",
   "Ineficace (succes sub 20%) și cu mortalitate periprocedurală de 40%",
   "Echivalentă valvuloplastiei cu balon la adult, ca soluție definitivă",
   "Contraindicată la pacienții inoperabili, fiind rezervată tinerilor cu valvă necalcificată",
   "Identică valvulotomiei chirurgicale a copilului, ca punte de zeci de ani"
  ],
  "correct": [
   0
  ],
  "explanation": "De succes în 86% din cazuri, cu mortalitate periprocedurală 2% și la 30 de zile 12% — Corect: Textul: succes 86%, mortalitate periprocedurală 2%, la 30 de zile 12%.\n\nIneficace (succes sub 20%) și cu mortalitate periprocedurală de 40% — Incorect: Cifrele 20%/40% nu apar.\n\nEchivalentă valvuloplastiei cu balon la adult, ca soluție definitivă — Incorect: Valvuloplastia cu balon la adult are rezultate slabe; TAVI este alternativa inoperabililor.\n\nContraindicată la pacienții inoperabili, fiind rezervată tinerilor cu valvă necalcificată — Incorect: TAVI este tocmai pentru cei la care nu se poate interveni chirurgical.\n\nIdentică valvulotomiei chirurgicale a copilului, ca punte de zeci de ani — Incorect: Valvulotomia copilului este temporară; TAVI este o alternativă a chirurgiei clasice la inoperabili.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1099, Stenoza aortică — TAVI (pagini PDF: 260).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1099
   ],
   "pdfPages": [
    260
   ],
   "section": "Stenoza aortică — TAVI"
  },
  "learningObjective": "Reținerea triadei 86% succes, 2% mortalitate periprocedurală și 12% la 30 de zile.",
  "optionRationales": [
   "Textul: succes 86%, mortalitate periprocedurală 2%, la 30 de zile 12%.",
   "Cifrele 20%/40% nu apar.",
   "Valvuloplastia cu balon la adult are rezultate slabe; TAVI este alternativa inoperabililor.",
   "TAVI este tocmai pentru cei la care nu se poate interveni chirurgical.",
   "Valvulotomia copilului este temporară; TAVI este o alternativă a chirurgiei clasice la inoperabili."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește 86/2/12 cu un eșec de 20/40, ordine de mărime alăturate dar false."
  },
  "textbookExpressions": [
   "86%",
   "12%"
  ]
 },
 {
  "id": "cardiologie-adv-090",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Semnele circulației hiperdinamice în regurgitarea aortică includ:",
  "options": [
   "Semnul Quincke — pulsații capilare în patul unghial",
   "Semnul de Musset — mișcarea capului cu fiecare bătaie",
   "Semnul Duroziez — suflu continuu „du-te vino” pe femurale comprimate distal",
   "Uruitura Austin Flint — suflu mezodiastolic apical prin impedarea cuspei mitrale anterioare",
   "Șoc apexian nedeplasat și susținut, identic stenozei aortice"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Semnul Quincke — pulsații capilare în patul unghial — Corect: Quincke: pulsații unghiale.\n\nSemnul de Musset — mișcarea capului cu fiecare bătaie — Corect: de Musset: mișcarea capului.\n\nSemnul Duroziez — suflu continuu „du-te vino” pe femurale comprimate distal — Corect: Duroziez: suflu continuu femoral la comprimare distală, semn de RA severă.\n\nUruitura Austin Flint — suflu mezodiastolic apical prin impedarea cuspei mitrale anterioare — Corect: Austin Flint: jetul împiedică deschiderea cuspei mitrale anterioare.\n\nȘoc apexian nedeplasat și susținut, identic stenozei aortice — Incorect: Șocul apexian în RA este hiperdinamic, deplasat inferior și lateral; nedeplasat/susținut este al stenozei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1100, Regurgitarea aortică — Semne periferice (pagini PDF: 261).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1100
   ],
   "pdfPages": [
    261
   ],
   "section": "Regurgitarea aortică — Semne periferice"
  },
  "learningObjective": "Recunoașterea semnelor Quincke, de Musset, Duroziez și a uruiturii Austin Flint, distincte de apexul nedeplasat al stenozei.",
  "optionRationales": [
   "Quincke: pulsații unghiale.",
   "de Musset: mișcarea capului.",
   "Duroziez: suflu continuu femoral la comprimare distală, semn de RA severă.",
   "Austin Flint: jetul împiedică deschiderea cuspei mitrale anterioare.",
   "Șocul apexian în RA este hiperdinamic, deplasat inferior și lateral; nedeplasat/susținut este al stenozei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie regurgitării apexul nedeplasat al stenozei aortice, semnul palpator clasic de confuzie SA/RA."
  },
  "textbookExpressions": [
   "Quincke",
   "Austin Flint"
  ]
 },
 {
  "id": "cardiologie-adv-091",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Valva tricuspidă și regurgitarea pulmonară:",
  "options": [
   "Stenoza tricuspidiană este mai frecventă la femei, de obicei reumatică și asociată mitralei/aorticei; poate apărea și în carcinoid",
   "Regurgitarea tricuspidiană funcțională dispare de obicei după tratamentul medical al cauzei de dilatare a cordului drept",
   "Suflul Graham Steell al regurgitării pulmonare este protodiastolic, accentuat în inspir, dificil de diferențiat de regurgitarea aortică",
   "TR organică a consumatorului i.v. cu endocardită impune de la început proteză mecanică, fără excizia valvei",
   "ST izolată este cea mai frecventă valvulopatie unică a adultului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Stenoza tricuspidiană este mai frecventă la femei, de obicei reumatică și asociată mitralei/aorticei; poate apărea și în carcinoid — Corect: ST: femei, reumatism, asociere mitrală/aortică, carcinoid.\n\nRegurgitarea tricuspidiană funcțională dispare de obicei după tratamentul medical al cauzei de dilatare a cordului drept — Corect: TR funcțională dispare de obicei după tratamentul medicamentos.\n\nSuflul Graham Steell al regurgitării pulmonare este protodiastolic, accentuat în inspir, dificil de diferențiat de regurgitarea aortică — Corect: Graham Steell: protodiastolic SICS 2-4, accentuat în inspir, greu de deosebit de RA.\n\nTR organică a consumatorului i.v. cu endocardită impune de la început proteză mecanică, fără excizia valvei — Incorect: La CDIV cu endocardită tricuspidă se recomandă îndepărtarea chirurgicală a valvei pentru eradicarea infecției, de obicei bine tolerată pe termen scurt.\n\nST izolată este cea mai frecventă valvulopatie unică a adultului — Incorect: ST este rară și aproape nu se întâlnește ca leziune izolată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1101, 1102, Valva tricuspidă și suflul Graham Steell (pagini PDF: 262, 263).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1101,
    1102
   ],
   "pdfPages": [
    262,
    263
   ],
   "section": "Valva tricuspidă și suflul Graham Steell"
  },
  "learningObjective": "Diferențierea ST reumatică/carcinoidă de TR funcțională reversibilă și de suflul Graham Steell inspirator.",
  "optionRationales": [
   "ST: femei, reumatism, asociere mitrală/aortică, carcinoid.",
   "TR funcțională dispare de obicei după tratamentul medicamentos.",
   "Graham Steell: protodiastolic SICS 2-4, accentuat în inspir, greu de deosebit de RA.",
   "La CDIV cu endocardită tricuspidă se recomandă îndepărtarea chirurgicală a valvei pentru eradicarea infecției, de obicei bine tolerată pe termen scurt.",
   "ST este rară și aproape nu se întâlnește ca leziune izolată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește excizia valvei infectate a CDIV — strategie citată explicit — cu protezarea mecanică de primă intenție."
  },
  "textbookExpressions": [
   "Graham Steell",
   "sindromului carcinoid"
  ]
 },
 {
  "id": "cardiologie-adv-092",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Anticoagularea protezelor valvulare mecanice:",
  "options": [
   "Valve slab trombogene (Carbomedics aortic, Medtronic Hall, St Jude fără Silzone): INR 2,5 fără factori adiționali și 3,0 cu factori",
   "Valve înalt trombogene (Lillehei-Kaster, Omniscience, Starr-Edwards): INR 3,5 fără factori și 4,0 cu factori",
   "Nu există indicație pentru DOAC la protezele valvulare",
   "Biologicele se anticoagulează pe viață la INR 4,0, identic Starr-Edwards",
   "Întreruperea anticoagulării pentru extracție dentară se face cu 5 zile înainte, ca la chirurgia majoră"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Valve slab trombogene (Carbomedics aortic, Medtronic Hall, St Jude fără Silzone): INR 2,5 fără factori adiționali și 3,0 cu factori — Corect: Slab trombogene: 2,5 fără factori, 3,0 cu factori.\n\nValve înalt trombogene (Lillehei-Kaster, Omniscience, Starr-Edwards): INR 3,5 fără factori și 4,0 cu factori — Corect: Înalt trombogene: 3,5 fără factori, 4,0 cu factori.\n\nNu există indicație pentru DOAC la protezele valvulare — Corect: Nu există indicație pentru DOAC în cazul protezelor valvulare.\n\nBiologicele se anticoagulează pe viață la INR 4,0, identic Starr-Edwards — Incorect: Biologicele: anticoagulare limitată (ESC 3 luni, INR 2,5) sau aspirină 75-100 mg, apoi întrerupere dacă nu persistă alt risc.\n\nÎntreruperea anticoagulării pentru extracție dentară se face cu 5 zile înainte, ca la chirurgia majoră — Incorect: Pentru extracții dentare și endoscopie diagnostică, anticoagularea nu trebuie întreruptă; INR țintă redus la 2,0.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1103, 1102, Proteze valvulare — INR țintă și DOAC (pagini PDF: 264, 263).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1103,
    1102
   ],
   "pdfPages": [
    264,
    263
   ],
   "section": "Proteze valvulare — INR țintă și DOAC"
  },
  "learningObjective": "Aplicarea treptelor INR 2,5/3,0 versus 3,5/4,0 după trombogenitate și a absenței indicației DOAC.",
  "optionRationales": [
   "Slab trombogene: 2,5 fără factori, 3,0 cu factori.",
   "Înalt trombogene: 3,5 fără factori, 4,0 cu factori.",
   "Nu există indicație pentru DOAC în cazul protezelor valvulare.",
   "Biologicele: anticoagulare limitată (ESC 3 luni, INR 2,5) sau aspirină 75-100 mg, apoi întrerupere dacă nu persistă alt risc.",
   "Pentru extracții dentare și endoscopie diagnostică, anticoagularea nu trebuie întreruptă; INR țintă redus la 2,0."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune biologicul la INR 4,0 pe viață și tratează extracția dentară ca o chirurgie majoră cu întrerupere de 5 zile."
  },
  "textbookExpressions": [
   "INR 2,5",
   "DOAC"
  ]
 },
 {
  "id": "cardiologie-adv-093",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Incidența anuală a endocarditei infecțioase în Marea Britanie este de circa:",
  "options": [
   "6-7/100.000, iar fără tratament mortalitatea se apropie de 100%",
   "1/1.000.000, cu mortalitate spontană sub 5%",
   "50% din populația adultă, ca colonizare valvulară",
   "Identică gripei sezoniere, fără risc vital",
   "0,1/100.000, limitată la proteze"
  ],
  "correct": [
   0
  ],
  "explanation": "6-7/100.000, iar fără tratament mortalitatea se apropie de 100% — Corect: Textul: 6-7/100.000 în UK, mai mare în țările în curs de dezvoltare; fără tratament, mortalitatea se apropie de 100%.\n\n1/1.000.000, cu mortalitate spontană sub 5% — Incorect: Incidența și mortalitatea spontană sunt net superioare acestor valori.\n\n50% din populația adultă, ca colonizare valvulară — Incorect: Nu este o colonizare de masă.\n\nIdentică gripei sezoniere, fără risc vital — Incorect: Morbiditatea și mortalitatea rămân mari chiar cu tratament.\n\n0,1/100.000, limitată la proteze — Incorect: Nu este limitată la proteze; incidența citată este populațională.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1103, Endocardita infecțioasă — Epidemiologie (pagini PDF: 264).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1103
   ],
   "pdfPages": [
    264
   ],
   "section": "Endocardita infecțioasă — Epidemiologie"
  },
  "learningObjective": "Reținerea incidenței 6-7/100.000 și a mortalității aproape complete fără tratament.",
  "optionRationales": [
   "Textul: 6-7/100.000 în UK, mai mare în țările în curs de dezvoltare; fără tratament, mortalitatea se apropie de 100%.",
   "Incidența și mortalitatea spontană sunt net superioare acestor valori.",
   "Nu este o colonizare de masă.",
   "Morbiditatea și mortalitatea rămân mari chiar cu tratament.",
   "Nu este limitată la proteze; incidența citată este populațională."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Subestimează cu două ordine de mărime o infecție a cărei mortalitate netratată se apropie de 100%."
  },
  "textbookExpressions": [
   "6-7 /100.000",
   "100%"
  ]
 },
 {
  "id": "cardiologie-adv-094",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Criteriile Duke modificate și endocardita pe proteză:",
  "options": [
   "Diagnosticul clinic cert cere 2 criterii majore, sau 1 major + 3 minore, sau 5 minore",
   "Hemoculturi persistente pozitive (același germen la ≥12 ore, sau 3/≥4 seturi) sunt criteriu major",
   "Endocardita precoce pe proteză survine în primele 60 de zile, de obicei stafilococ nosocomial, cu prognostic rezervat",
   "Endocardita tardivă, după 60 de zile, este mai degrabă comunitară: viridans 50-70%, S. aureus 25%",
   "Un singur set de hemoculturi dintr-un cateter central stabilește criteriul major microbiologic"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Diagnosticul clinic cert cere 2 criterii majore, sau 1 major + 3 minore, sau 5 minore — Corect: Două majore, sau un major și trei minore, sau cinci minore.\n\nHemoculturi persistente pozitive (același germen la ≥12 ore, sau 3/≥4 seturi) sunt criteriu major — Corect: Hemoculturile persistente sunt criteriu major.\n\nEndocardita precoce pe proteză survine în primele 60 de zile, de obicei stafilococ nosocomial, cu prognostic rezervat — Corect: Precoce: primele 60 de zile, S. aureus/S. epidermidis, prognostic rezervat.\n\nEndocardita tardivă, după 60 de zile, este mai degrabă comunitară: viridans 50-70%, S. aureus 25% — Corect: Tardivă: după 60 de zile, viridans 50-70%, S. aureus 25%.\n\nUn singur set de hemoculturi dintr-un cateter central stabilește criteriul major microbiologic — Incorect: Criteriul major cere două hemoculturi tipice fără focar primar sau persistență pe multiple seturi, nu un singur set de pe cateter.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1104, Endocardita — Duke și proteza precoce/tardivă (pagini PDF: 265).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1104
   ],
   "pdfPages": [
    265
   ],
   "section": "Endocardita — Duke și proteza precoce/tardivă"
  },
  "learningObjective": "Aplicarea combinațiilor Duke și a pragului de 60 de zile care separă endocardita precoce stafilococică de cea tardivă streptococică.",
  "optionRationales": [
   "Două majore, sau un major și trei minore, sau cinci minore.",
   "Hemoculturile persistente sunt criteriu major.",
   "Precoce: primele 60 de zile, S. aureus/S. epidermidis, prognostic rezervat.",
   "Tardivă: după 60 de zile, viridans 50-70%, S. aureus 25%.",
   "Criteriul major cere două hemoculturi tipice fără focar primar sau persistență pe multiple seturi, nu un singur set de pe cateter."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce bacteriologia Duke la un singur set de pe cateter, tocmai scenariul de contaminare."
  },
  "textbookExpressions": [
   "60 de zile",
   "HACEK"
  ]
 },
 {
  "id": "cardiologie-adv-095",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Frecvența aproximativă a manifestărilor în endocardită (Cadranul 30.46):",
  "options": [
   "Pirexie circa 90%; suflu circa 90%; stare generală alterată circa 95%",
   "Degete hipocratice circa 10%; noduli Osler circa 15%; pete Roth circa 5%",
   "Hematurie circa 70%; splenomegalie circa 40%; emboli cerebrali circa 20%",
   "Insuficiență cardiacă circa 50%; artralgii circa 25%",
   "Pete Roth la 90% și hipocratism la 2% dintre pacienți"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Pirexie circa 90%; suflu circa 90%; stare generală alterată circa 95% — Corect: Pirexie 90%, suflu 90%, stare alterată 95%.\n\nDegete hipocratice circa 10%; noduli Osler circa 15%; pete Roth circa 5% — Corect: Hipocratism 10%, Osler 15%, Roth 5%.\n\nHematurie circa 70%; splenomegalie circa 40%; emboli cerebrali circa 20% — Corect: Hematurie 70%, splenomegalie 40%, emboli cerebrali 20%.\n\nInsuficiență cardiacă circa 50%; artralgii circa 25% — Corect: IC 50%, artralgii 25%.\n\nPete Roth la 90% și hipocratism la 2% dintre pacienți — Incorect: Roth este 5%, nu 90%; hipocratismul este 10%, nu 2%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1105, Endocardita — Tablou clinic (procente) (pagini PDF: 266).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1105
   ],
   "pdfPages": [
    266
   ],
   "section": "Endocardita — Tablou clinic (procente)"
  },
  "learningObjective": "Memorarea ordinelor de mărime: febră/suflu ~90%, hipocratism 10%, Roth 5%, hematurie 70%.",
  "optionRationales": [
   "Pirexie 90%, suflu 90%, stare alterată 95%.",
   "Hipocratism 10%, Osler 15%, Roth 5%.",
   "Hematurie 70%, splenomegalie 40%, emboli cerebrali 20%.",
   "IC 50%, artralgii 25%.",
   "Roth este 5%, nu 90%; hipocratismul este 10%, nu 2%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă petele Roth (5%) cu febra (90%), două procente din același tabel."
  },
  "textbookExpressions": [
   "90",
   "Pete Roth"
  ]
 },
 {
  "id": "cardiologie-adv-096",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Profilaxia antibiotică ESC (2015) a endocarditei se adresează grupurilor cu risc major:",
  "options": [
   "Proteze valvulare (inclusiv TAVI) sau material intracardiac de reparare",
   "Endocardită infecțioasă în antecedente",
   "Congenitale cianogene necorectate sau cu șunturi paliative; după corecție completă, risc crescut 6 luni",
   "Toți pacienții cu stenoza mitrală ușoară, la orice procedură digestivă",
   "AHA exclude transplantul cardiac cu valvulopatie din grupul de risc înalt, contrar ESC"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Proteze valvulare (inclusiv TAVI) sau material intracardiac de reparare — Corect: Protezele, inclusiv transcateter, și materialul de reparare.\n\nEndocardită infecțioasă în antecedente — Corect: Antecedentele de endocardită.\n\nCongenitale cianogene necorectate sau cu șunturi paliative; după corecție completă, risc crescut 6 luni — Corect: Cianogene necorectate/șunturi; 6 luni după corecție completă.\n\nToți pacienții cu stenoza mitrală ușoară, la orice procedură digestivă — Incorect: ESC limitează profilaxia la proceduri stomatologice cu manipulare gingivală/periapicală/mucoasă, la grupurile de risc major, nu la SM ușoară la orice gest digestiv.\n\nAHA exclude transplantul cardiac cu valvulopatie din grupul de risc înalt, contrar ESC — Incorect: AHA consideră că și transplantul cu boală valvulară trebuie socotit risc înalt.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1106, Endocardita — Profilaxie ESC (pagini PDF: 267).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1106
   ],
   "pdfPages": [
    267
   ],
   "section": "Endocardita — Profilaxie ESC"
  },
  "learningObjective": "Recunoașterea celor trei grupuri ESC de risc major și a ferestrei de 6 luni post-corecție congenitală.",
  "optionRationales": [
   "Protezele, inclusiv transcateter, și materialul de reparare.",
   "Antecedentele de endocardită.",
   "Cianogene necorectate/șunturi; 6 luni după corecție completă.",
   "ESC limitează profilaxia la proceduri stomatologice cu manipulare gingivală/periapicală/mucoasă, la grupurile de risc major, nu la SM ușoară la orice gest digestiv.",
   "AHA consideră că și transplantul cu boală valvulară trebuie socotit risc înalt."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde profilaxia la stenoza mitrală ușoară și orice gest digestiv, contrar restricției ESC la stomatologie de risc."
  },
  "textbookExpressions": [
   "proteze valvulare",
   "6 luni"
  ]
 },
 {
  "id": "cardiologie-adv-097",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Miocardita acută — diagnostic și evoluție:",
  "options": [
   "Serologia virală de obicei nu este utilă; VSH, PCR, troponina și CK sunt frecvent crescute în faza acută",
   "IRM: edem pe T2 și captare neuniformă de gadoliniu; biopsia este gold standard, rezervată formelor fulminante",
   "Sportul se evită 6 luni; majoritatea cazurilor se vindecă în câteva săptămâni",
   "Miocardita cu celule gigante are evoluție rapid progresivă, prognostic infaust, și se tratează imunosupresor",
   "Serologia virală înlocuiește IRM-ul ca test de confirmare de primă linie"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Serologia virală de obicei nu este utilă; VSH, PCR, troponina și CK sunt frecvent crescute în faza acută — Corect: Serologia virală de obicei nu este utilă; markerii inflamatori și de necroză cresc.\n\nIRM: edem pe T2 și captare neuniformă de gadoliniu; biopsia este gold standard, rezervată formelor fulminante — Corect: IRM confirmă; biopsia e gold standard la fulminant/agravare.\n\nSportul se evită 6 luni; majoritatea cazurilor se vindecă în câteva săptămâni — Corect: Repaus în acut; sport evitat 6 luni; vindecare în săptămâni la majoritate.\n\nMiocardita cu celule gigante are evoluție rapid progresivă, prognostic infaust, și se tratează imunosupresor — Corect: Celule gigante: progresie rapidă, prognostic infaust, imunosupresie.\n\nSerologia virală înlocuiește IRM-ul ca test de confirmare de primă linie — Incorect: Serologia nu înlocuiește IRM-ul, recomandat pentru confirmare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1119, Bolile miocardului — Miocardita acută (pagini PDF: 268).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1119
   ],
   "pdfPages": [
    268
   ],
   "section": "Bolile miocardului — Miocardita acută"
  },
  "learningObjective": "Recunoașterea inutilității serologiei virale, a IRM de confirmare și a ferestrei de 6 luni fără sport.",
  "optionRationales": [
   "Serologia virală de obicei nu este utilă; markerii inflamatori și de necroză cresc.",
   "IRM confirmă; biopsia e gold standard la fulminant/agravare.",
   "Repaus în acut; sport evitat 6 luni; vindecare în săptămâni la majoritate.",
   "Celule gigante: progresie rapidă, prognostic infaust, imunosupresie.",
   "Serologia nu înlocuiește IRM-ul, recomandat pentru confirmare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune serologia virală — explicit neutilă — în locul IRM-ului de confirmare."
  },
  "textbookExpressions": [
   "6 luni",
   "celule gigante"
  ]
 },
 {
  "id": "cardiologie-adv-098",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Cardiomiopatia hipertrofică:",
  "options": [
   "Afectează 1 din 500 de locuitori și este cea mai frecventă cauză de moarte subită cardiacă la tineri",
   "Cele mai frecvente mutații sunt MYH7 (lanțul greu al β-miozinei) și MYBPC3 (proteina C de legare a miozinei)",
   "Circa 25% au obstrucție dinamică a tractului de ejecție, prin HVS, SAM mitral și ejecție rapidă",
   "Mutațiile troponinei T se asociază cu hipertrofie marcată, dar risc scăzut de moarte subită",
   "Formele de depozit (Danon, Pompe, Fabry) sunt ușor de distins ecografic de CMH sarcomerică"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Afectează 1 din 500 de locuitori și este cea mai frecventă cauză de moarte subită cardiacă la tineri — Corect: 1 din 500; cea mai frecventă cauză de MSC la tineri.\n\nCele mai frecvente mutații sunt MYH7 (lanțul greu al β-miozinei) și MYBPC3 (proteina C de legare a miozinei) — Corect: MYH7 și MYBPC3 sunt cele mai frecvente.\n\nCirca 25% au obstrucție dinamică a tractului de ejecție, prin HVS, SAM mitral și ejecție rapidă — Corect: Aproximativ 25% au obstrucție dinamică (HVS + SAM + ejecție rapidă).\n\nMutațiile troponinei T se asociază cu hipertrofie marcată, dar risc scăzut de moarte subită — Incorect: Troponina T: hipertrofie ușoară, dar risc crescut de moarte subită; hipertrofia marcată e mai degrabă MYH7.\n\nFormele de depozit (Danon, Pompe, Fabry) sunt ușor de distins ecografic de CMH sarcomerică — Incorect: Bolile de depozit sunt dificil de diferențiat ecografic de CMH ereditară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1119, 1120, Cardiomiopatia hipertrofică — Genetică și LVOTO (pagini PDF: 268, 269).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1119,
    1120
   ],
   "pdfPages": [
    268,
    269
   ],
   "section": "Cardiomiopatia hipertrofică — Genetică și LVOTO"
  },
  "learningObjective": "Reținerea prevalenței 1/500, a genelor MYH7/MYBPC3 și a obstrucției dinamice la 25%.",
  "optionRationales": [
   "1 din 500; cea mai frecventă cauză de MSC la tineri.",
   "MYH7 și MYBPC3 sunt cele mai frecvente.",
   "Aproximativ 25% au obstrucție dinamică (HVS + SAM + ejecție rapidă).",
   "Troponina T: hipertrofie ușoară, dar risc crescut de moarte subită; hipertrofia marcată e mai degrabă MYH7.",
   "Bolile de depozit sunt dificil de diferențiat ecografic de CMH ereditară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează fenotipul troponinei T (hipertrofie ușoară, risc înalt) cu cel al MYH7 (hipertrofie marcată)."
  },
  "textbookExpressions": [
   "1 din 500",
   "25%"
  ]
 },
 {
  "id": "cardiologie-adv-099",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Factorii de risc de moarte subită în CMH includ:",
  "options": [
   "Grosime parietală >30 mm",
   "Istoric familial de MSC sub 50 de ani",
   "TV nesusținută la Holter; sincopă inexplicabilă; răspuns TA plat sau hipotensiv la efort",
   "Suflu care scade în Valsalva și crește la ghemuit",
   "ICD se discută de obicei la un singur factor minor, amiodarona fiind superioară ICD la risc înalt"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Grosime parietală >30 mm — Corect: HVS masivă >30 mm.\n\nIstoric familial de MSC sub 50 de ani — Corect: Istoric familial de MSC <50 ani.\n\nTV nesusținută la Holter; sincopă inexplicabilă; răspuns TA plat sau hipotensiv la efort — Corect: TVNS, sincopă inexplicabilă, răspuns TA anormal la efort.\n\nSuflu care scade în Valsalva și crește la ghemuit — Incorect: Suflul de obstrucție se amplifică la Valsalva/ortostatism (scade postsarcina) și se diminuează la ghemuit.\n\nICD se discută de obicei la un singur factor minor, amiodarona fiind superioară ICD la risc înalt — Incorect: ≥2 factori: evaluare pentru ICD; la risc mai mic, amiodarona este alternativă, nu superioară ICD-ului de risc înalt.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1120, CMH — Risc de moarte subită și suflu dinamic (pagini PDF: 269).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1120
   ],
   "pdfPages": [
    269
   ],
   "section": "CMH — Risc de moarte subită și suflu dinamic"
  },
  "learningObjective": "Listarea celor cinci markeri de risc și a regulii ≥2 factori pentru evaluare ICD.",
  "optionRationales": [
   "HVS masivă >30 mm.",
   "Istoric familial de MSC <50 ani.",
   "TVNS, sincopă inexplicabilă, răspuns TA anormal la efort.",
   "Suflul de obstrucție se amplifică la Valsalva/ortostatism (scade postsarcina) și se diminuează la ghemuit.",
   "≥2 factori: evaluare pentru ICD; la risc mai mic, amiodarona este alternativă, nu superioară ICD-ului de risc înalt."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează dinamica suflului la Valsalva/ghemuit, manevra clasică de obstrucție dinamică."
  },
  "textbookExpressions": [
   ">30 mm",
   "Valsalva"
  ]
 },
 {
  "id": "cardiologie-adv-100",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă privind investigațiile în cardiomiopatia aritmogenă:",
  "options": [
   "ECG-ul este constant cu BRS și unde Q inferioare, fără unde epsilon",
   "Undele epsilon (potențiale mici la sfârșitul QRS) și inversarea T în V1-V3 pot fi prezente; beta-blocantele sunt prima linie în aritmiile neamenințătoare",
   "Ecocardiografia este suficientă în toate stadiile, IRM-ul neaducând informații despre infiltrația fibro-grăsoasă",
   "Amiodarona este contraindicată, iar ICD-ul nu are loc în aritmiile refractare",
   "Boala se manifestă doar prin insuficiență de VS, fără aritmii"
  ],
  "correct": [
   1
  ],
  "explanation": "ECG-ul este constant cu BRS și unde Q inferioare, fără unde epsilon — Incorect: ECG-ul este de obicei normal; pot apărea T inversate în V1-V3, unde epsilon, BRD.\n\nUndele epsilon (potențiale mici la sfârșitul QRS) și inversarea T în V1-V3 pot fi prezente; beta-blocantele sunt prima linie în aritmiile neamenințătoare — Corect: Undele epsilon și T inversate în V1-V3 sunt descrise; beta-blocantele sunt prima linie pentru aritmii neamenințătoare.\n\nEcocardiografia este suficientă în toate stadiile, IRM-ul neaducând informații despre infiltrația fibro-grăsoasă — Incorect: Eco poate fi normală; IRM evaluează VD mai acurat și poate arăta infiltrație fibro-grăsoasă.\n\nAmiodarona este contraindicată, iar ICD-ul nu are loc în aritmiile refractare — Incorect: Amiodarona sau sotalolul se folosesc în aritmii simptomatice; ICD în cele refractare/amenințătoare.\n\nBoala se manifestă doar prin insuficiență de VS, fără aritmii — Incorect: Aritmiile și riscul de moarte subită domină stadiile precoce.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1122, 1121, Cardiomiopatia aritmogenă — ECG și tratament (pagini PDF: 271, 270).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1122,
    1121
   ],
   "pdfPages": [
    271,
    270
   ],
   "section": "Cardiomiopatia aritmogenă — ECG și tratament"
  },
  "learningObjective": "Recunoașterea undelor epsilon/T inversate precordiale drepte și a beta-blocantului ca primă linie.",
  "optionRationales": [
   "ECG-ul este de obicei normal; pot apărea T inversate în V1-V3, unde epsilon, BRD.",
   "Undele epsilon și T inversate în V1-V3 sunt descrise; beta-blocantele sunt prima linie pentru aritmii neamenințătoare.",
   "Eco poate fi normală; IRM evaluează VD mai acurat și poate arăta infiltrație fibro-grăsoasă.",
   "Amiodarona sau sotalolul se folosesc în aritmii simptomatice; ICD în cele refractare/amenințătoare.",
   "Aritmiile și riscul de moarte subită domină stadiile precoce."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă unda epsilon — semnul ECG eponim — și inversează cronologia aritmii versus insuficiență."
  },
  "textbookExpressions": [
   "unde epsilon",
   "V1-"
  ]
 },
 {
  "id": "cardiologie-adv-101",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Noncompactarea de ventricul stâng și cardiomiopatia restrictivă:",
  "options": [
   "NCVS: aspect spongiform apical; diagnostic eco/IRM/angiografic; evoluție cu IC, tromboembolism, aritmii și moarte subită",
   "Restrictiva primară: volume ventriculare normale/scăzute, dilatare biatrială, pereți și valve normale, umplere restrictivă, FE aproape normală",
   "Amiloidoza: miocard „strălucitor”, aspect de „șine de tramvai” în mod M; biopsia este frecvent utilă, spre deosebire de alte cardiomiopatii",
   "NCVS afectează predominant bazele ventriculului drept, nu apexul stâng",
   "În restrictivă, PVJ este plat, fără Friedreich sau Kussmaul"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "NCVS: aspect spongiform apical; diagnostic eco/IRM/angiografic; evoluție cu IC, tromboembolism, aritmii și moarte subită — Corect: NCVS: spongiform, predominant apical; IC, embolii, aritmii, MSC.\n\nRestrictiva primară: volume ventriculare normale/scăzute, dilatare biatrială, pereți și valve normale, umplere restrictivă, FE aproape normală — Corect: Restrictiva: VS/VD nedilatate, biatrială, pereți normali, umplere alterată, FE aproape normală.\n\nAmiloidoza: miocard „strălucitor”, aspect de „șine de tramvai” în mod M; biopsia este frecvent utilă, spre deosebire de alte cardiomiopatii — Corect: Amiloid: strălucitor, „șine/linii de tramvai”; biopsia e utilă.\n\nNCVS afectează predominant bazele ventriculului drept, nu apexul stâng — Incorect: NCVS afectează predominant segmentele apicale ale VS.\n\nÎn restrictivă, PVJ este plat, fără Friedreich sau Kussmaul — Incorect: PVJ accentuat, colaps diastolic (Friedreich) și Kussmaul sunt descrise.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1123, 1124, Noncompactare VS și cardiomiopatie restrictivă (pagini PDF: 272, 273).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1123,
    1124
   ],
   "pdfPages": [
    272,
    273
   ],
   "section": "Noncompactare VS și cardiomiopatie restrictivă"
  },
  "learningObjective": "Recunoașterea fenotipului spongiform apical și a profilului restrictiv cu semne de umplere (Friedreich, Kussmaul) și a aspectului de amiloid.",
  "optionRationales": [
   "NCVS: spongiform, predominant apical; IC, embolii, aritmii, MSC.",
   "Restrictiva: VS/VD nedilatate, biatrială, pereți normali, umplere alterată, FE aproape normală.",
   "Amiloid: strălucitor, „șine/linii de tramvai”; biopsia e utilă.",
   "NCVS afectează predominant segmentele apicale ale VS.",
   "PVJ accentuat, colaps diastolic (Friedreich) și Kussmaul sunt descrise."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută noncompactarea de la apexul stâng la bazele drepte și anulează semnele venoase clasice ale restrictivei."
  },
  "textbookExpressions": [
   "şine de tramvai",
   "spongiform"
  ]
 },
 {
  "id": "cardiologie-adv-102",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Cardiomiopatiile dobândite Tako-tsubo și peripartum:",
  "options": [
   "Tako-tsubo: durere și dispnee, ECG și biomarkeri ca în IM, coronare neobstruate, akinezie medio-apicală cu baze prezervate",
   "Este mai frecventă la femeile de vârstă medie; recuperare de obicei în 4-6 săptămâni, cu posibile recurențe",
   "Peripartum: ultimul trimestru sau primele 5 luni postpartum; mai frecventă la obeze, multipare, >30 de ani, cu preeclampsie",
   "Aproape jumătate recuperează funcția în 6 luni",
   "Tako-tsubo este mai frecventă la bărbații tineri, cu recuperare în 24 de ore și fără recurențe"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Tako-tsubo: durere și dispnee, ECG și biomarkeri ca în IM, coronare neobstruate, akinezie medio-apicală cu baze prezervate — Corect: Prezentare de SCA cu coronare libere și balonizare apicală.\n\nEste mai frecventă la femeile de vârstă medie; recuperare de obicei în 4-6 săptămâni, cu posibile recurențe — Corect: Femei de vârstă medie; recuperare 4-6 săptămâni; recurențe posibile.\n\nPeripartum: ultimul trimestru sau primele 5 luni postpartum; mai frecventă la obeze, multipare, >30 de ani, cu preeclampsie — Corect: Ultimul trimestru sau 5 luni postpartum; obezitate, multiparitate, >30 ani, preeclampsie.\n\nAproape jumătate recuperează funcția în 6 luni — Corect: Aproape jumătate recuperează în 6 luni.\n\nTako-tsubo este mai frecventă la bărbații tineri, cu recuperare în 24 de ore și fără recurențe — Incorect: Terenul și evoluția descrise sunt ale femeii de vârstă medie, nu ale bărbatului tânăr cu vindecare într-o zi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1124, Tako-tsubo și cardiomiopatia peripartum (pagini PDF: 273).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1124
   ],
   "pdfPages": [
    273
   ],
   "section": "Tako-tsubo și cardiomiopatia peripartum"
  },
  "learningObjective": "Potrivirea terenului (femei de vârstă medie versus multipare >30 ani) și a ferestrelor de recuperare 4-6 săptămâni / 6 luni.",
  "optionRationales": [
   "Prezentare de SCA cu coronare libere și balonizare apicală.",
   "Femei de vârstă medie; recuperare 4-6 săptămâni; recurențe posibile.",
   "Ultimul trimestru sau 5 luni postpartum; obezitate, multiparitate, >30 ani, preeclampsie.",
   "Aproape jumătate recuperează în 6 luni.",
   "Terenul și evoluția descrise sunt ale femeii de vârstă medie, nu ale bărbatului tânăr cu vindecare într-o zi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută Tako-tsubo pe bărbatul tânăr cu vindecare într-o zi, inversând epidemiologia și cinetica de recuperare."
  },
  "textbookExpressions": [
   "Tako-tsubo",
   "4-6 săptămâni"
  ]
 },
 {
  "id": "cardiologie-adv-103",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Pericardita acută:",
  "options": [
   "Poate explica 5% din prezentările de urgență pentru durere toracică; este mai frecventă la bărbați tineri",
   "Diagnosticul clinic cere două din patru: durere, frecătură, ST concav în sus (șa) cu PR coborât, revărsat",
   "Aspirină 750-1.000 mg ×3/zi sau ibuprofen 600-800 mg ×3/zi, 1-2 săptămâni, plus colchicină 0,5 mg ×2/zi, 3 luni",
   "Corticosteroizii se rezervă etiologiei imune, fiind asociați cu risc crescut de recurență",
   "Atleții pot relua efortul în 48 de ore, fără a aștepta normalizarea markerilor"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Poate explica 5% din prezentările de urgență pentru durere toracică; este mai frecventă la bărbați tineri — Corect: 5% din durerile toracice de urgență; predominanță masculină tânără.\n\nDiagnosticul clinic cere două din patru: durere, frecătură, ST concav în sus (șa) cu PR coborât, revărsat — Corect: Două din cele patru criterii susțin diagnosticul.\n\nAspirină 750-1.000 mg ×3/zi sau ibuprofen 600-800 mg ×3/zi, 1-2 săptămâni, plus colchicină 0,5 mg ×2/zi, 3 luni — Corect: Dozele și durata AINS plus colchicina 3 luni sunt explicite.\n\nCorticosteroizii se rezervă etiologiei imune, fiind asociați cu risc crescut de recurență — Corect: Steroiizii: etiologii imune; risc crescut de recurență.\n\nAtleții pot relua efortul în 48 de ore, fără a aștepta normalizarea markerilor — Incorect: Atleții evită efortul cel puțin 3 luni; se limitează activitatea până la normalizarea markerilor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1125, Pericardita acută — Diagnostic și tratament (pagini PDF: 274).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1125
   ],
   "pdfPages": [
    274
   ],
   "section": "Pericardita acută — Diagnostic și tratament"
  },
  "learningObjective": "Aplicarea regulii 2 din 4, a dozelor de AINS+colchicină și a rezervei de steroizi, plus interdicția sportului.",
  "optionRationales": [
   "5% din durerile toracice de urgență; predominanță masculină tânără.",
   "Două din cele patru criterii susțin diagnosticul.",
   "Dozele și durata AINS plus colchicina 3 luni sunt explicite.",
   "Steroiizii: etiologii imune; risc crescut de recurență.",
   "Atleții evită efortul cel puțin 3 luni; se limitează activitatea până la normalizarea markerilor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Comprimă interdicția de efort a atleților de la 3 luni la 48 de ore, contrar textului."
  },
  "textbookExpressions": [
   "5%",
   "colchicină"
  ]
 },
 {
  "id": "cardiologie-adv-104",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Pericardita incesantă, cronică și tuberculoasă:",
  "options": [
   "Incesantă: recurență în până la 6 săptămâni; cronică: durată >3 luni",
   "În țările în curs de dezvoltare, TB poate depăși 50% din pericardite, iar la HIV peste 90%",
   "Sindromul Dressler este o pericardită autoimună tardivă post-infarct",
   "Prednisolonul 60 mg, 2-6 săptămâni, se asociază tratamentului antituberculos",
   "Pericardita TB reprezintă >50% din cazuri în țările dezvoltate, Dressler-ul fiind o formă virală primară"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Incesantă: recurență în până la 6 săptămâni; cronică: durată >3 luni — Corect: Incesantă până la 6 săptămâni; cronică >3 luni.\n\nÎn țările în curs de dezvoltare, TB poate depăși 50% din pericardite, iar la HIV peste 90% — Corect: TB: rar <5% în țări dezvoltate; >50% în dezvoltare; >90% la HIV.\n\nSindromul Dressler este o pericardită autoimună tardivă post-infarct — Corect: Dressler: reacție autoimună tardivă post-IM.\n\nPrednisolonul 60 mg, 2-6 săptămâni, se asociază tratamentului antituberculos — Corect: Prednisolon 60 mg zilnic, 2-6 săptămâni, plus tratamentul TB.\n\nPericardita TB reprezintă >50% din cazuri în țările dezvoltate, Dressler-ul fiind o formă virală primară — Incorect: În țările dezvoltate TB este <5%; Dressler este post-injurie, nu virală primară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1126, Pericardită incesantă, TB și Dressler (pagini PDF: 275).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1126
   ],
   "pdfPages": [
    275
   ],
   "section": "Pericardită incesantă, TB și Dressler"
  },
  "learningObjective": "Diferențierea incesantă (≤6 săptămâni) versus cronică (>3 luni) și a ponderii TB >50%/>90% HIV în țările în dezvoltare.",
  "optionRationales": [
   "Incesantă până la 6 săptămâni; cronică >3 luni.",
   "TB: rar <5% în țări dezvoltate; >50% în dezvoltare; >90% la HIV.",
   "Dressler: reacție autoimună tardivă post-IM.",
   "Prednisolon 60 mg zilnic, 2-6 săptămâni, plus tratamentul TB.",
   "În țările dezvoltate TB este <5%; Dressler este post-injurie, nu virală primară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută ponderea TB >50% din țările în dezvoltare în Occident, unde textul o plasează sub 5%."
  },
  "textbookExpressions": [
   "6 săptămâni",
   "Dressler"
  ]
 },
 {
  "id": "cardiologie-adv-105",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Revărsatul pericardic cu tamponadă se caracterizează prin:",
  "options": [
   "QRS microvoltate (<0,5 mV în derivațiile membrelor), tahicardie sinusală și posibilă alternanță electrică",
   "Radiografie: cord globulos/„în pară”, cu vene pulmonare tipic nedilatate",
   "Eco: colabare telediastolică a AD, protodiastolică a VD, VCI dilatată cu colaps inspirator <50%",
   "Semnul lui Ewart: matitate sub unghiul scapulei stângi prin comprimarea bazei pulmonare stângi",
   "Cord mic, cu vene pulmonare foarte dilatate, ca în constricție"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "QRS microvoltate (<0,5 mV în derivațiile membrelor), tahicardie sinusală și posibilă alternanță electrică — Corect: Microvoltaj <0,5 mV, tahicardie, alternanță electrică.\n\nRadiografie: cord globulos/„în pară”, cu vene pulmonare tipic nedilatate — Corect: Cord globulos/pară, vene pulmonare nedilatate.\n\nEco: colabare telediastolică a AD, protodiastolică a VD, VCI dilatată cu colaps inspirator <50% — Corect: Colabare AD telediastolică, VD protodiastolică, VCI cu colaps <50%.\n\nSemnul lui Ewart: matitate sub unghiul scapulei stângi prin comprimarea bazei pulmonare stângi — Corect: Ewart: matitate sub unghiul scapulei stângi.\n\nCord mic, cu vene pulmonare foarte dilatate, ca în constricție — Incorect: Cordul mic cu constricție; tamponada produce siluetă mărită, globuloasă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1127, 1126, Revărsat pericardic și tamponadă (pagini PDF: 276, 275).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1127,
    1126
   ],
   "pdfPages": [
    276,
    275
   ],
   "section": "Revărsat pericardic și tamponadă"
  },
  "learningObjective": "Reunirea alternanței electrice, a siluetei „în pară”, a colabării AD/VD și a semnului Ewart.",
  "optionRationales": [
   "Microvoltaj <0,5 mV, tahicardie, alternanță electrică.",
   "Cord globulos/pară, vene pulmonare nedilatate.",
   "Colabare AD telediastolică, VD protodiastolică, VCI cu colaps <50%.",
   "Ewart: matitate sub unghiul scapulei stângi.",
   "Cordul mic cu constricție; tamponada produce siluetă mărită, globuloasă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie tamponadei cordul mic al constricției, inversând perechea radiologică clasică."
  },
  "textbookExpressions": [
   "semnul lui Ewart",
   "alternanţă electrică"
  ]
 },
 {
  "id": "cardiologie-adv-106",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Precizați enunțul corect despre investigațiile din pericardita constrictivă:",
  "options": [
   "Calcificări pericardice pot fi prezente în până la 50% din cazuri, dar un pericard calcificat nu înseamnă constricție",
   "Radiografia arată constant un cord globulos, ca în tamponadă",
   "ECG-ul este normal, fără microvoltaj",
   "Cateterismul arată presiuni telediastolice inegale între VS și VD",
   "Pericardectomia se amână până la atrofie miocardică maximă, pentru a reduce riscul"
  ],
  "correct": [
   0
  ],
  "explanation": "Calcificări pericardice pot fi prezente în până la 50% din cazuri, dar un pericard calcificat nu înseamnă constricție — Corect: Calcifierile pot fi prezente în până la 50%; un pericard calcificat nu înseamnă constricție.\n\nRadiografia arată constant un cord globulos, ca în tamponadă — Incorect: Radiografia: cord relativ mic în context de IC; tamponada dă siluetă globuloasă.\n\nECG-ul este normal, fără microvoltaj — Incorect: ECG: QRS microvoltate cu T aplatizate sau inversate.\n\nCateterismul arată presiuni telediastolice inegale între VS și VD — Incorect: Cateterismul: presiuni telediastolice egale în VS și VD.\n\nPericardectomia se amână până la atrofie miocardică maximă, pentru a reduce riscul — Incorect: Pericardectomia precoce este recomandată înainte de constricție severă și atrofie, procedura fiind riscantă tocmai din cauza atrofiei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1127, Pericardita constrictivă — Imagistică și cateterism (pagini PDF: 276).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1127
   ],
   "pdfPages": [
    276
   ],
   "section": "Pericardita constrictivă — Imagistică și cateterism"
  },
  "learningObjective": "Reținerea calcificărilor la până la 50% și a faptului că ele nu echivalează constricția, plus egalizarea presiunilor telediastolice.",
  "optionRationales": [
   "Calcifierile pot fi prezente în până la 50%; un pericard calcificat nu înseamnă constricție.",
   "Radiografia: cord relativ mic în context de IC; tamponada dă siluetă globuloasă.",
   "ECG: QRS microvoltate cu T aplatizate sau inversate.",
   "Cateterismul: presiuni telediastolice egale în VS și VD.",
   "Pericardectomia precoce este recomandată înainte de constricție severă și atrofie, procedura fiind riscantă tocmai din cauza atrofiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă calcificarea într-un echivalent de constricție și amână chirurgia până la atrofia care crește riscul."
  },
  "textbookExpressions": [
   "50%",
   "telediastolice"
  ]
 },
 {
  "id": "cardiologie-adv-107",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "În constricția tuberculoasă, strategia chirurgicală este:",
  "options": [
   "Dacă există calcificări (afectare cronică), pericardectomie precoce sub tratament antituberculos",
   "Fără calcificări, se încearcă mai întâi cura antituberculoasă; dacă statusul e staționar sau se deteriorează după 4-6 săptămâni, se indică pericardectomia",
   "Pericardectomia imediată, fără antituberculoase, la orice caz fără calcificări",
   "Așteptare 12 luni de terapie, indiferent de hemodinamică, înaintea oricărei chirurgii",
   "Calcificarea contraindică pericardectomia, fiind un semn de vindecare"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Dacă există calcificări (afectare cronică), pericardectomie precoce sub tratament antituberculos — Corect: Cu calcificări: pericardectomie precoce sub medicație antituberculoasă.\n\nFără calcificări, se încearcă mai întâi cura antituberculoasă; dacă statusul e staționar sau se deteriorează după 4-6 săptămâni, se indică pericardectomia — Corect: Fără calcificări: tratament medical întâi; chirurgie dacă nu se ameliorează în 4-6 săptămâni.\n\nPericardectomia imediată, fără antituberculoase, la orice caz fără calcificări — Incorect: Fără calcificări nu se operează imediat, fără tratament etiologic.\n\nAșteptare 12 luni de terapie, indiferent de hemodinamică, înaintea oricărei chirurgii — Incorect: Pragul citat este 4-6 săptămâni, nu 12 luni.\n\nCalcificarea contraindică pericardectomia, fiind un semn de vindecare — Incorect: Calcificarea marchează cronicitatea și orientează spre chirurgie precoce, nu contraindică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1127, Pericardita constrictivă — Momentul pericardectomiei în TB (pagini PDF: 276).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1127
   ],
   "pdfPages": [
    276
   ],
   "section": "Pericardita constrictivă — Momentul pericardectomiei în TB"
  },
  "learningObjective": "Diferențierea cazului calcificat (chirurgie precoce sub tuberculostatice) de cel necalcificat (probă terapeutică 4-6 săptămâni).",
  "optionRationales": [
   "Cu calcificări: pericardectomie precoce sub medicație antituberculoasă.",
   "Fără calcificări: tratament medical întâi; chirurgie dacă nu se ameliorează în 4-6 săptămâni.",
   "Fără calcificări nu se operează imediat, fără tratament etiologic.",
   "Pragul citat este 4-6 săptămâni, nu 12 luni.",
   "Calcificarea marchează cronicitatea și orientează spre chirurgie precoce, nu contraindică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează rolul calcificării: din argument de chirurgie precoce în „semn de vindecare” care ar interzice operația."
  },
  "textbookExpressions": [
   "4-6 săptămâni",
   "Calcificărilor pericardice"
  ]
 },
 {
  "id": "cardiologie-adv-108",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Febra persistentă în endocardita infecțioasă, după 48 de ore de antibiotic adecvat, impune căutarea:",
  "options": [
   "Extensiei paravalvulare și a unui posibil abces",
   "Reacției adverse medicamentoase (febra cedează la întrerupere)",
   "Infecției nosocomiale (loc de puncție, urinar) sau a emboliei pulmonare",
   "Schimbării empirice imediate a schemei, chiar cu culturi negative și fără suspiciune de alergie",
   "Colaborării cu microbiologia și a consultului de chirurgie cardio-vasculară, rezistența nouă fiind rară"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Extensiei paravalvulare și a unui posibil abces — Corect: Abcesul paravalvular este prima preocupare.\n\nReacției adverse medicamentoase (febra cedează la întrerupere) — Corect: Reacția adversă: febra cedează după întrerupere.\n\nInfecției nosocomiale (loc de puncție, urinar) sau a emboliei pulmonare — Corect: Nosocomial și embolia (mai ales endocardită dreaptă sau spitalizare lungă).\n\nSchimbării empirice imediate a schemei, chiar cu culturi negative și fără suspiciune de alergie — Incorect: Schimbarea empirică trebuie evitată, exceptând culturi noi pozitive sau alergie.\n\nColaborării cu microbiologia și a consultului de chirurgie cardio-vasculară, rezistența nouă fiind rară — Corect: Rezistența nouă este rară; se colaborează cu microbiologia și chirurgia.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1106, Endocardita — Febra persistentă (pagini PDF: 267).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1106
   ],
   "pdfPages": [
    267
   ],
   "section": "Endocardita — Febra persistentă"
  },
  "learningObjective": "Interpretarea febrei după 48 de ore ca abces, alergie, infecție nosocomială sau embolie, nu ca semnal de schimbare empirică a antibioticului.",
  "optionRationales": [
   "Abcesul paravalvular este prima preocupare.",
   "Reacția adversă: febra cedează după întrerupere.",
   "Nosocomial și embolia (mai ales endocardită dreaptă sau spitalizare lungă).",
   "Schimbarea empirică trebuie evitată, exceptând culturi noi pozitive sau alergie.",
   "Rezistența nouă este rară; se colaborează cu microbiologia și chirurgia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă febra persistentă într-un pretext de schimbare empirică, pe care textul o descurajează explicit."
  },
  "textbookExpressions": [
   "48 de ore",
   "Febra persistentă"
  ]
 },
 {
  "id": "cardiologie-adv-109",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Precizați enunțul corect privind decesele din primele 24 de ore de la simptomele cardiace, în Marea Britanie:",
  "options": [
   "Până la 100.000 de decese; aproape jumătate survin rapid, majoritatea prin fibrilație ventriculară sau tahicardie ventriculară rapidă",
   "Majoritatea sunt produse de bradiaritmii severe, FV fiind rară",
   "Ischemia tranzitorie este exclusă ca factor declanșator",
   "Supraviețuitorii prezintă, în marea lor majoritate, infarct acut evident clinic",
   "BLS se amână până la confirmarea necrozei pe markeri"
  ],
  "correct": [
   0
  ],
  "explanation": "Până la 100.000 de decese; aproape jumătate survin rapid, majoritatea prin fibrilație ventriculară sau tahicardie ventriculară rapidă — Corect: Textul: până la 100.000 de decese în primele 24 de ore; aproape jumătate survin rapid; majoritatea prin FV sau TV rapidă.\n\nMajoritatea sunt produse de bradiaritmii severe, FV fiind rară — Incorect: Bradiaritmiile severe produc o proporție mai mică de decese.\n\nIschemia tranzitorie este exclusă ca factor declanșator — Incorect: Ischemia tranzitorie este suspectată ca factor declanșator major.\n\nSupraviețuitorii prezintă, în marea lor majoritate, infarct acut evident clinic — Incorect: Doar o mică proporție dintre supraviețuitori au infarct acut evident.\n\nBLS se amână până la confirmarea necrozei pe markeri — Incorect: BLS trebuie inițiat imediat la stop, nu după markerii de necroză.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1045, Proceduri terapeutice — Resuscitarea cardiacă (pagini PDF: 208).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1045
   ],
   "pdfPages": [
    208
   ],
   "section": "Proceduri terapeutice — Resuscitarea cardiacă"
  },
  "learningObjective": "Reținerea ordinii de mărime 100.000, a ponderii deceselor rapide și a mecanismului FV/TV, nu bradiaritmic.",
  "optionRationales": [
   "Textul: până la 100.000 de decese în primele 24 de ore; aproape jumătate survin rapid; majoritatea prin FV sau TV rapidă.",
   "Bradiaritmiile severe produc o proporție mai mică de decese.",
   "Ischemia tranzitorie este suspectată ca factor declanșator major.",
   "Doar o mică proporție dintre supraviețuitori au infarct acut evident.",
   "BLS trebuie inițiat imediat la stop, nu după markerii de necroză."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează mecanismul dominant (FV/TV) cu bradiaritmia și amână BLS până la enzime."
  },
  "textbookExpressions": [
   "100.000 de decese",
   "tahicardie ventriculară rapidă"
  ]
 },
 {
  "id": "cardiologie-adv-110",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Inițierea suportului vital de bază la un pacient neresponsiv:",
  "options": [
   "Primul pas este evitarea expunerii la pericole suplimentare",
   "Urmează testarea la stimuli verbali sau dureroși; dacă nu respiră sau respiră anormal, BLS se începe imediat",
   "Cu cât durata stopului cardio-respirator este mai lungă, cu atât șansa de revenire este mai mică",
   "Primul gest este palparea prelungită a pulsului, înaintea oricărei alte măsuri",
   "Ajutorul se solicită abia după 10 minute de observație pasivă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Primul pas este evitarea expunerii la pericole suplimentare — Corect: Textul plasează evitarea pericolelor ca prim pas al BLS.\n\nUrmează testarea la stimuli verbali sau dureroși; dacă nu respiră sau respiră anormal, BLS se începe imediat — Corect: Apoi testarea la stimuli; BLS imediat dacă nu respiră sau respiră anormal.\n\nCu cât durata stopului cardio-respirator este mai lungă, cu atât șansa de revenire este mai mică — Corect: Durata mai lungă a stopului reduce șansa de revenire.\n\nPrimul gest este palparea prelungită a pulsului, înaintea oricărei alte măsuri — Incorect: Detectarea pulsului poate fi dificilă; nu este primul pas.\n\nAjutorul se solicită abia după 10 minute de observație pasivă — Incorect: Dacă nu se obține răspuns, ajutorul se solicită imediat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1045, Proceduri terapeutice — Primii pași BLS (pagini PDF: 208).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1045
   ],
   "pdfPages": [
    208
   ],
   "section": "Proceduri terapeutice — Primii pași BLS"
  },
  "learningObjective": "Ordinea: siguranța scenei, stimuli, apel, apoi BLS dacă respirația lipsește sau este anormală.",
  "optionRationales": [
   "Textul plasează evitarea pericolelor ca prim pas al BLS.",
   "Apoi testarea la stimuli; BLS imediat dacă nu respiră sau respiră anormal.",
   "Durata mai lungă a stopului reduce șansa de revenire.",
   "Detectarea pulsului poate fi dificilă; nu este primul pas.",
   "Dacă nu se obține răspuns, ajutorul se solicită imediat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune palparea pulsului înaintea siguranței scenei, inversând algoritmul BLS."
  },
  "textbookExpressions": [
   "pericole suplimentare",
   "stimuli verbali"
  ]
 },
 {
  "id": "cardiologie-adv-111",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Fiecare dintre cele două respirații de salvare eficiente, după 30 de compresiuni la adult, durează:",
  "options": [
   "3-4 secunde, pentru o expansiune toracică maximală",
   "10 secunde, identic ventilației post-intubație",
   "1 secundă",
   "30 de secunde, câte una per ciclu BLS",
   "15 secunde, ca la copilul cu salvator unic"
  ],
  "correct": [
   2
  ],
  "explanation": "3-4 secunde, pentru o expansiune toracică maximală — Incorect: 3-4 secunde este o durată excesivă față de text.\n\n10 secunde, identic ventilației post-intubație — Incorect: 10/minut este rata după abordarea avansată a căilor aeriene, nu durata insuflației BLS.\n\n1 secundă — Corect: Textul: două respirații eficiente timp de 1 secundă fiecare.\n\n30 de secunde, câte una per ciclu BLS — Incorect: 30 de secunde nu este durata unei insuflații.\n\n15 secunde, ca la copilul cu salvator unic — Incorect: La copil, salvatorul unic aplică cel puțin un minut de RCP înainte de a cere ajutor, nu insuflații de 15 secunde.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1046, Suportul vital de bază — Respirația de salvare (pagini PDF: 209).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1046
   ],
   "pdfPages": [
    209
   ],
   "section": "Suportul vital de bază — Respirația de salvare"
  },
  "learningObjective": "Reținerea duratei de 1 secundă a fiecărei respirații eficiente la adult.",
  "optionRationales": [
   "3-4 secunde este o durată excesivă față de text.",
   "10/minut este rata după abordarea avansată a căilor aeriene, nu durata insuflației BLS.",
   "Textul: două respirații eficiente timp de 1 secundă fiecare.",
   "30 de secunde nu este durata unei insuflații.",
   "La copil, salvatorul unic aplică cel puțin un minut de RCP înainte de a cere ajutor, nu insuflații de 15 secunde."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă durata de 1 secundă a insuflației cu rata 10/min post-intubație sau cu fereastra pediatrică de 1 minut."
  },
  "textbookExpressions": [
   "1 secundă",
   "Două respiraţii eficiente"
  ]
 },
 {
  "id": "cardiologie-adv-112",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Suportul vital cardiac avansat, odată ce BLS este asigurat, constă în:",
  "options": [
   "Monitorizare ECG, management avansat al căilor aeriene și abord venos periferic mare sau central",
   "Abord intraosos dacă abordul venos este imposibil",
   "Stabilirea tipului de ritm (DAE sau defibrilator standard) și aplicarea algoritmului ACLS",
   "Începerea ACLS înaintea oricărei compresiuni, fără BLS",
   "Limitarea abordului vascular la venele de pe dorsul mâinii"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Monitorizare ECG, management avansat al căilor aeriene și abord venos periferic mare sau central — Corect: Textul enumeră monitorizarea ECG, intubația/dispozitivele supraglotice și cateterele venoase.\n\nAbord intraosos dacă abordul venos este imposibil — Corect: Abordul intraosos este permis când abordul venos nu este posibil.\n\nStabilirea tipului de ritm (DAE sau defibrilator standard) și aplicarea algoritmului ACLS — Corect: Ritmul (DAE sau defibrilator standard) determină abordarea ulterioară.\n\nÎnceperea ACLS înaintea oricărei compresiuni, fără BLS — Incorect: ACLS urmează după ce BLS a fost asigurat.\n\nLimitarea abordului vascular la venele de pe dorsul mâinii — Incorect: Se vizează vene periferice mari sau o venă centrală, nu doar dorsul mâinii.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1046, Suportul vital avansat — Componente ACLS (pagini PDF: 209).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1046
   ],
   "pdfPages": [
    209
   ],
   "section": "Suportul vital avansat — Componente ACLS"
  },
  "learningObjective": "Recunoașterea triadei monitorizare–căi aeriene–acces vascular, inclusiv opțiunea intraosoasă.",
  "optionRationales": [
   "Textul enumeră monitorizarea ECG, intubația/dispozitivele supraglotice și cateterele venoase.",
   "Abordul intraosos este permis când abordul venos nu este posibil.",
   "Ritmul (DAE sau defibrilator standard) determină abordarea ulterioară.",
   "ACLS urmează după ce BLS a fost asigurat.",
   "Se vizează vene periferice mari sau o venă centrală, nu doar dorsul mâinii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ordinea BLS→ACLS și limitează accesul vascular la venele mici de la mână."
  },
  "textbookExpressions": [
   "intraosos",
   "algoritmul ACLS"
  ]
 },
 {
  "id": "cardiologie-adv-113",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tratamentul imediat după revenirea circulației spontane include:",
  "options": [
   "Algoritmul ABCDE",
   "Țintă SpO2 94-98%",
   "Țintă PaCO2 normal",
   "ECG în 12 derivații, tratamentul cauzei și controlul temperaturii",
   "Hiperventilație pentru PaCO2 foarte scăzut, fără ECG"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Algoritmul ABCDE — Corect: Algoritmul ABCDE este listat ca tratament imediat post-RCP.\n\nȚintă SpO2 94-98% — Corect: Ținta de saturație este 94-98%.\n\nȚintă PaCO2 normal — Corect: Se urmărește PaCO2 normal, nu hipocapnie indusă.\n\nECG în 12 derivații, tratamentul cauzei și controlul temperaturii — Corect: ECG în 12 derivații, cauza și temperatura sunt explicite.\n\nHiperventilație pentru PaCO2 foarte scăzut, fără ECG — Incorect: Hiperventilația agresivă și omiterea ECG nu apar în algoritm.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1047, Post-ROSC — Ținte imediate (pagini PDF: 210).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1047
   ],
   "pdfPages": [
    210
   ],
   "section": "Post-ROSC — Ținte imediate"
  },
  "learningObjective": "Aplicarea ABCDE, a ferestrei SpO2 94-98% și a PaCO2 normal după ROSC.",
  "optionRationales": [
   "Algoritmul ABCDE este listat ca tratament imediat post-RCP.",
   "Ținta de saturație este 94-98%.",
   "Se urmărește PaCO2 normal, nu hipocapnie indusă.",
   "ECG în 12 derivații, cauza și temperatura sunt explicite.",
   "Hiperventilația agresivă și omiterea ECG nu apar în algoritm."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește țintele 94-98% și PaCO2 normal cu hiperventilație, eroare clasică post-ROSC."
  },
  "textbookExpressions": [
   "94-98%",
   "Algoritmul ABCDE"
  ]
 },
 {
  "id": "cardiologie-adv-114",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "După abordarea avansată a căilor respiratorii, ventilația în timpul RCP continuă cu:",
  "options": [
   "20/minut, cu întreruperea masajului la fiecare ciclu",
   "Raport 30:2, identic BLS-ului fără cale avansată",
   "10/minut, fără a întrerupe masajul cardiac",
   "6/minut, doar în asistolă",
   "Apnee până la ROSC"
  ],
  "correct": [
   2
  ],
  "explanation": "20/minut, cu întreruperea masajului la fiecare ciclu — Incorect: 20/minut cu pauze de masaj este contrar textului.\n\nRaport 30:2, identic BLS-ului fără cale avansată — Incorect: 30:2 este raportul BLS înaintea căii avansate.\n\n10/minut, fără a întrerupe masajul cardiac — Corect: Textul: rată de ventilație de 10/minut fără a întrerupe masajul.\n\n6/minut, doar în asistolă — Incorect: 6/minut nu este rata citată.\n\nApnee până la ROSC — Incorect: Ventilația continuă; nu se așteaptă ROSC în apnee.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1048, ACLS — Ventilație după cale aeriană avansată (pagini PDF: 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1048
   ],
   "pdfPages": [
    211
   ],
   "section": "ACLS — Ventilație după cale aeriană avansată"
  },
  "learningObjective": "Reținerea ratei de 10/minut fără întreruperea compresiilor, odată calea aeriană asigurată.",
  "optionRationales": [
   "20/minut cu pauze de masaj este contrar textului.",
   "30:2 este raportul BLS înaintea căii avansate.",
   "Textul: rată de ventilație de 10/minut fără a întrerupe masajul.",
   "6/minut nu este rata citată.",
   "Ventilația continuă; nu se așteaptă ROSC în apnee."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează 30:2 sau 20/min cu pauze — tocmai ce textul abandonează după intubație."
  },
  "textbookExpressions": [
   "10/minut",
   "masajul cardiac"
  ]
 },
 {
  "id": "cardiologie-adv-115",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Pozițiile acceptate ale padelor de defibrilare sunt:",
  "options": [
   "Una la dreapta sternului superior și cealaltă deasupra apexului cardiac",
   "Una sub vârful scapulei stângi și cealaltă pe peretele anterior al hemitoracelui stâng",
   "Ambele pe abdomen, pentru a evita miocardul",
   "Doar sub scapula dreaptă, poziția stern-apex fiind abandonată",
   "Padelele monofazice sunt preferate pentru că necesită energie mai mică decât cele bifazice"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Una la dreapta sternului superior și cealaltă deasupra apexului cardiac — Corect: Prima poziție este descrisă explicit.\n\nUna sub vârful scapulei stângi și cealaltă pe peretele anterior al hemitoracelui stâng — Corect: A doua poziție (scapulă stângă + perete anterior stâng) este alternativa citată.\n\nAmbele pe abdomen, pentru a evita miocardul — Incorect: Padelele se aplică pe torace, nu pe abdomen.\n\nDoar sub scapula dreaptă, poziția stern-apex fiind abandonată — Incorect: Poziția stern-apex este una dintre cele două acceptate.\n\nPadelele monofazice sunt preferate pentru că necesită energie mai mică decât cele bifazice — Incorect: Bifazicele necesită energie mai mică și sunt din ce în ce mai utilizate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1048, Defibrilarea — Plasarea padelor (pagini PDF: 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1048
   ],
   "pdfPages": [
    211
   ],
   "section": "Defibrilarea — Plasarea padelor"
  },
  "learningObjective": "Memorarea celor două poziții (stern-apex și scapulă stângă–hemitorace stâng anterior).",
  "optionRationales": [
   "Prima poziție este descrisă explicit.",
   "A doua poziție (scapulă stângă + perete anterior stâng) este alternativa citată.",
   "Padelele se aplică pe torace, nu pe abdomen.",
   "Poziția stern-apex este una dintre cele două acceptate.",
   "Bifazicele necesită energie mai mică și sunt din ce în ce mai utilizate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ierarhia bifazic/monofazic și anulează una dintre cele două poziții clasice."
  },
  "textbookExpressions": [
   "dreapta sternului",
   "scapulei stângi"
  ]
 },
 {
  "id": "cardiologie-adv-116",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Recuperarea neurologică după stop cardiac pare mai bună la pacienții cu:",
  "options": [
   "Absența oricărei activități EEG timp de 3 săptămâni",
   "Areactie prelungită, fără mișcări voluntare",
   "Hipertermie menținută la 40°C",
   "Mișcări voluntare și activitate electroencefalografică în primele 3 zile",
   "Evitarea oricărui control al temperaturii corporale"
  ],
  "correct": [
   3
  ],
  "explanation": "Absența oricărei activități EEG timp de 3 săptămâni — Incorect: Lipsa EEG prelungită nu este markerul favorabil citat.\n\nAreactie prelungită, fără mișcări voluntare — Incorect: Areactia fără mișcări voluntare este nefavorabilă.\n\nHipertermie menținută la 40°C — Incorect: Hipertermia 40°C nu este strategia descrisă.\n\nMișcări voluntare și activitate electroencefalografică în primele 3 zile — Corect: Textul: prognostic mai bun dacă există mișcări voluntare și activitate EEG în primele 3 zile.\n\nEvitarea oricărui control al temperaturii corporale — Incorect: Controlul temperaturii face parte din îngrijirea post-ROSC.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1048, Post resuscitare — Prognostic neurologic (pagini PDF: 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1048
   ],
   "pdfPages": [
    211
   ],
   "section": "Post resuscitare — Prognostic neurologic"
  },
  "learningObjective": "Reținerea ferestrei de 3 zile (mișcări voluntare + EEG) ca marker de prognostic mai bun.",
  "optionRationales": [
   "Lipsa EEG prelungită nu este markerul favorabil citat.",
   "Areactia fără mișcări voluntare este nefavorabilă.",
   "Hipertermia 40°C nu este strategia descrisă.",
   "Textul: prognostic mai bun dacă există mișcări voluntare și activitate EEG în primele 3 zile.",
   "Controlul temperaturii face parte din îngrijirea post-ROSC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă fereastra favorabilă de 3 zile într-un argument pentru areactie prelungită sau hipertermie."
  },
  "textbookExpressions": [
   "3 zile",
   "mişcări voluntare"
  ]
 },
 {
  "id": "cardiologie-adv-117",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Funcția nodului sinusal și ritmul sinusal normal:",
  "options": [
   "Parasimpaticul predomină în mod normal, scăzând rata de descărcare de la circa 100 la circa 70 b.p.m.",
   "Undele P sunt pozitive în DI și DII și negative în aVR",
   "Frecvența sinusului este ușor mai crescută la femei",
   "Tonusul vagal crescut al sportivului produce tahicardie de efort patologică",
   "Aritmia sinusală inspiratorie (creșterea frecvenței) este patologică la copii și tineri"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Parasimpaticul predomină în mod normal, scăzând rata de descărcare de la circa 100 la circa 70 b.p.m. — Corect: Textul: parasimpaticul scade rata de la 100 la aproximativ 70 b.p.m.\n\nUndele P sunt pozitive în DI și DII și negative în aVR — Corect: P pozitive în DI/DII, negative în aVR.\n\nFrecvența sinusului este ușor mai crescută la femei — Corect: Frecvența este ușor mai crescută la femei.\n\nTonusul vagal crescut al sportivului produce tahicardie de efort patologică — Incorect: La sportivi, bradicardia fiziologică se datorează tonusului vagal crescut.\n\nAritmia sinusală inspiratorie (creșterea frecvenței) este patologică la copii și tineri — Incorect: Variația inspiratorie este normală, mai ales la copii și tineri.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1051, Aritmii — Nodul sinusal și aritmia sinusală (pagini PDF: 212).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1051
   ],
   "pdfPages": [
    212
   ],
   "section": "Aritmii — Nodul sinusal și aritmia sinusală"
  },
  "learningObjective": "Contrastul modulării vagale 100→70 b.p.m. cu polaritatea P și cu caracterul fiziologic al aritmiei sinusale.",
  "optionRationales": [
   "Textul: parasimpaticul scade rata de la 100 la aproximativ 70 b.p.m.",
   "P pozitive în DI/DII, negative în aVR.",
   "Frecvența este ușor mai crescută la femei.",
   "La sportivi, bradicardia fiziologică se datorează tonusului vagal crescut.",
   "Variația inspiratorie este normală, mai ales la copii și tineri."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Etichetează aritmia sinusală a tânărului și bradicardia sportivului drept patologie, deși textul le consideră fiziologice."
  },
  "textbookExpressions": [
   "70 b.p.m",
   "negative în AVR"
  ]
 },
 {
  "id": "cardiologie-adv-118",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Activitatea declanșată (trigger) se caracterizează prin:",
  "options": [
   "Post-potențiale precoce, de obicei la sfârșitul fazei 3, înainte ca potențialul transmembranar să atingă pragul",
   "Post-potențiale tardive care apar înainte de sfârșitul fazei 3, identic celor precoce",
   "Agravare de către catecolamine, tulburări electrolitice, hipoxie, acidoză, medicamente sau stimulare; tahicardiile atriale din intoxicația digitalică au acest mecanism",
   "Reintrare care cere un miez excitabil, fără zonă cicatricială",
   "Originea majorității tahicardiilor paroxistice regulate în automatismul sinusal izolat"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Post-potențiale precoce, de obicei la sfârșitul fazei 3, înainte ca potențialul transmembranar să atingă pragul — Corect: Definiția post-potențialelor precoce este explicită.\n\nPost-potențiale tardive care apar înainte de sfârșitul fazei 3, identic celor precoce — Incorect: Tardivele apar după ce potențialul transmembranar atinge pragul, nu înainte.\n\nAgravare de către catecolamine, tulburări electrolitice, hipoxie, acidoză, medicamente sau stimulare; tahicardiile atriale din intoxicația digitalică au acest mecanism — Corect: Oscilațiile sunt agravate de factorii citați; digitala acționează prin trigger.\n\nReintrare care cere un miez excitabil, fără zonă cicatricială — Incorect: Reintrarea se organizează în jurul unui miez inexcitabil (cicatrice).\n\nOriginea majorității tahicardiilor paroxistice regulate în automatismul sinusal izolat — Incorect: Majoritatea tahicardiilor paroxistice regulate au la bază reintrarea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1052, Mecanisme aritmogene — Post-potențiale (pagini PDF: 213).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1052
   ],
   "pdfPages": [
    213
   ],
   "section": "Mecanisme aritmogene — Post-potențiale"
  },
  "learningObjective": "Diferențierea post-potențialelor precoce (sfârșit de fază 3) de cele tardive și legătura cu digitala.",
  "optionRationales": [
   "Definiția post-potențialelor precoce este explicită.",
   "Tardivele apar după ce potențialul transmembranar atinge pragul, nu înainte.",
   "Oscilațiile sunt agravate de factorii citați; digitala acționează prin trigger.",
   "Reintrarea se organizează în jurul unui miez inexcitabil (cicatrice).",
   "Majoritatea tahicardiilor paroxistice regulate au la bază reintrarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Suprapune precocele peste tardive și atribuie tahicardiilor paroxistice automatismul sinusal, nu reintrarea."
  },
  "textbookExpressions": [
   "post-potenţiale precoce",
   "intoxicaţia digitalică"
  ]
 },
 {
  "id": "cardiologie-adv-119",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "În sincopa vasovagală se recomandă:",
  "options": [
   "Evitarea situațiilor declanșatoare, clinostatism sau poziție șezândă și manevre de contrapresiune la prodrom",
   "Aport crescut de sare, ciorapi de compresie, midodrină, beta-blocante sau disopiramidă",
   "Ablația de nod AV ca tratament de primă linie",
   "Interzicerea poziției șezânde, care ar agrava prodromul",
   "La forma „malignă” (traumatisme și asistolă documentată) stimulare bicamerală cu funcție „rate drop response”"
  ],
  "correct": [
   0,
   1,
   4
  ],
  "explanation": "Evitarea situațiilor declanșatoare, clinostatism sau poziție șezândă și manevre de contrapresiune la prodrom — Corect: Măsurile posturale și contrapresiunea sunt descrise.\n\nAport crescut de sare, ciorapi de compresie, midodrină, beta-blocante sau disopiramidă — Corect: Sarea, compresia, midodrina, beta-blocantele și disopiramida sunt listate.\n\nAblația de nod AV ca tratament de primă linie — Incorect: Ablația de nod AV nu este tratamentul sincopei vasovagale.\n\nInterzicerea poziției șezânde, care ar agrava prodromul — Incorect: Clinostatismul sau poziția șezândă sunt recomandate, nu interzise.\n\nLa forma „malignă” (traumatisme și asistolă documentată) stimulare bicamerală cu funcție „rate drop response” — Corect: Textul rezervă „rate drop response” formei maligne cu asistolă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1053, Bradicardii — Tratamentul sincopei vasovagale (pagini PDF: 214).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1053
   ],
   "pdfPages": [
    214
   ],
   "section": "Bradicardii — Tratamentul sincopei vasovagale"
  },
  "learningObjective": "Recunoașterea măsurilor non-farmacologice, a midodrinei și a stimulării cu rate-drop în forma malignă.",
  "optionRationales": [
   "Măsurile posturale și contrapresiunea sunt descrise.",
   "Sarea, compresia, midodrina, beta-blocantele și disopiramida sunt listate.",
   "Ablația de nod AV nu este tratamentul sincopei vasovagale.",
   "Clinostatismul sau poziția șezândă sunt recomandate, nu interzise.",
   "Textul rezervă „rate drop response” formei maligne cu asistolă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește contrapresiunea și midodrina cu ablația de nod AV, strategie a FA-ului „ablate and pace”."
  },
  "textbookExpressions": [
   "midodrina",
   "rate drop response"
  ]
 },
 {
  "id": "cardiologie-adv-120",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la BAV de gradul I:",
  "options": [
   "Se definește prin prelungirea PR peste 0,20 sec, fiecare depolarizare atrială fiind totuși condusă la ventriculi",
   "Nicio undă P nu este condusă",
   "PR scade progresiv până la o undă P blocată",
   "Este identic cu Mobitz II, având QRS >0,12 sec de rutină",
   "Conducerea 2:1 definește BAV de gradul I"
  ],
  "correct": [
   0
  ],
  "explanation": "Se definește prin prelungirea PR peste 0,20 sec, fiecare depolarizare atrială fiind totuși condusă la ventriculi — Corect: Textul: PR peste 0,20 sec; fiecare depolarizare atrială este condusă, dar cu întârziere.\n\nNicio undă P nu este condusă — Incorect: Absența conducerii definește BAV complet.\n\nPR scade progresiv până la o undă P blocată — Incorect: Prelungirea progresivă până la o P blocată este Mobitz I.\n\nEste identic cu Mobitz II, având QRS >0,12 sec de rutină — Incorect: Mobitz II este un subtip de BAV II, nu gradul I.\n\nConducerea 2:1 definește BAV de gradul I — Incorect: Conducerea 2:1 este o formă aparte de BAV II.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1053, 1054, BAV — Gradul I (pagini PDF: 214, 215).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1053,
    1054
   ],
   "pdfPages": [
    214,
    215
   ],
   "section": "BAV — Gradul I"
  },
  "learningObjective": "Fixarea pragului PR >0,20 sec cu conducere 1:1, distinct de Mobitz și de conducerea 2:1.",
  "optionRationales": [
   "Textul: PR peste 0,20 sec; fiecare depolarizare atrială este condusă, dar cu întârziere.",
   "Absența conducerii definește BAV complet.",
   "Prelungirea progresivă până la o P blocată este Mobitz I.",
   "Mobitz II este un subtip de BAV II, nu gradul I.",
   "Conducerea 2:1 este o formă aparte de BAV II."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă BAV I (toate P conduse, PR lung) cu Mobitz sau cu conducerea 2:1."
  },
  "textbookExpressions": [
   "0,20 sec",
   "BAV de gradul I"
  ]
 },
 {
  "id": "cardiologie-adv-121",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Cauzele blocului atrioventricular complet (Cadranul 30.13) includ:",
  "options": [
   "Boala Lev (fibroză distală progresivă la vârstnici) și boala Lenegre (fibroză proximală la tineri)",
   "Boala Lyme, boala Chagas și LES matern în forma congenitală",
   "Hipertiroidismul netratat ca etiologie dominantă a BAV complet",
   "Digoxin, beta-blocante, non-dihidropiridinice, amiodaronă; post-înlocuire de valvă aortică",
   "Doar ischemia, fără cauze infecțioase, iatrogene sau infiltrative"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Boala Lev (fibroză distală progresivă la vârstnici) și boala Lenegre (fibroză proximală la tineri) — Corect: Cadranul opune fibroza distală a vârstnicului (Lev) celei proximale a tânărului (Lenegre).\n\nBoala Lyme, boala Chagas și LES matern în forma congenitală — Corect: Lyme, Chagas și LES matern sunt listate.\n\nHipertiroidismul netratat ca etiologie dominantă a BAV complet — Incorect: Hipertiroidismul nu figurează ca etiologie dominantă a BAV complet.\n\nDigoxin, beta-blocante, non-dihidropiridinice, amiodaronă; post-înlocuire de valvă aortică — Corect: Medicamentele citate și chirurgia aortică/CABG/DSV sunt în tabel.\n\nDoar ischemia, fără cauze infecțioase, iatrogene sau infiltrative — Incorect: Cauzele includ infecții, infiltrative, iatrogene și neuromusculare, nu doar ischemia.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1055, BAV complet — Etiologie (Cadranul 30.13) (pagini PDF: 216).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1055
   ],
   "pdfPages": [
    216
   ],
   "section": "BAV complet — Etiologie (Cadranul 30.13)"
  },
  "learningObjective": "Potrivirea Lev/Lenegre cu vârsta și a cauzelor infecțioase (Lyme, Chagas) și medicamentoase.",
  "optionRationales": [
   "Cadranul opune fibroza distală a vârstnicului (Lev) celei proximale a tânărului (Lenegre).",
   "Lyme, Chagas și LES matern sunt listate.",
   "Hipertiroidismul nu figurează ca etiologie dominantă a BAV complet.",
   "Medicamentele citate și chirurgia aortică/CABG/DSV sunt în tabel.",
   "Cauzele includ infecții, infiltrative, iatrogene și neuromusculare, nu doar ischemia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce BAV complet la ischemie și ignoră perechea Lev/Lenegre și infecțiile clasice (Lyme, Chagas)."
  },
  "textbookExpressions": [
   "Boala Lev",
   "Boala Lyme"
  ]
 },
 {
  "id": "cardiologie-adv-122",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Ritmul de scăpare cu QRS larg (>0,12 sec) în BAV complet:",
  "options": [
   "Are originea în fasciculul His, cu frecvență 50-60 b.p.m. și este relativ stabil",
   "Are originea sub His, frecvență 15-40 b.p.m., este instabil și se asociază cu sincopa Stokes-Adams",
   "Cardiostimularea permanentă este indicată, întrucât reduce semnificativ mortalitatea",
   "Atropina vindecă durabil forma cronică distală, stimularea fiind superfluă",
   "Boala Lev a vârstnicului afectează sistemul His-Purkinje proximal, nu distal"
  ],
  "correct": [
   1,
   2
  ],
  "explanation": "Are originea în fasciculul His, cu frecvență 50-60 b.p.m. și este relativ stabil — Incorect: 50-60 b.p.m. și originea hisiană aparțin scăpării cu QRS îngust.\n\nAre originea sub His, frecvență 15-40 b.p.m., este instabil și se asociază cu sincopa Stokes-Adams — Corect: Textul: origine sub His, 15-40 b.p.m., instabil, Stokes-Adams.\n\nCardiostimularea permanentă este indicată, întrucât reduce semnificativ mortalitatea — Corect: Stimularea permanentă reduce semnificativ mortalitatea.\n\nAtropina vindecă durabil forma cronică distală, stimularea fiind superfluă — Incorect: Atropina poate fi încercată în BAV recent cu QRS îngust și cauză tranzitorie, nu ca vindecare a formei distale cronice.\n\nBoala Lev a vârstnicului afectează sistemul His-Purkinje proximal, nu distal — Incorect: Lev este fibroza distală a vârstnicului; Lenegre este proximală la tineri.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1055, BAV complet — Scăpare cu QRS larg (pagini PDF: 216).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1055
   ],
   "pdfPages": [
    216
   ],
   "section": "BAV complet — Scăpare cu QRS larg"
  },
  "learningObjective": "Contrastul scăpării distale lente (15-40, Stokes-Adams) față de cea hisiană 50-60.",
  "optionRationales": [
   "50-60 b.p.m. și originea hisiană aparțin scăpării cu QRS îngust.",
   "Textul: origine sub His, 15-40 b.p.m., instabil, Stokes-Adams.",
   "Stimularea permanentă reduce semnificativ mortalitatea.",
   "Atropina poate fi încercată în BAV recent cu QRS îngust și cauză tranzitorie, nu ca vindecare a formei distale cronice.",
   "Lev este fibroza distală a vârstnicului; Lenegre este proximală la tineri."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie scăpării largi frecvența hisiană 50-60 și inversează sediul Lev/Lenegre."
  },
  "textbookExpressions": [
   "15-40 b.p.m",
   "Stokes-Adams"
  ]
 },
 {
  "id": "cardiologie-adv-123",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații diferențiază corect blocul de ramură dreaptă de cel stâng?",
  "options": [
   "BRD: activare tardivă a VD, unde S adânci în DI și V6, unde R ample tardive în V1",
   "BRS: undă S adâncă în V1 și undă R amplă tardivă în DI și V6; produce și unde Q anormale",
   "BRD determină de regulă o dedublare distanțată dar fiziologică a zgomotului 2; BRS poate cauza dedublare inversată",
   "BRD lasă neschimbată activarea, fără S în DI",
   "BRS nu modifică zgomotul 2, pe când BRD produce dedublare paradoxală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "BRD: activare tardivă a VD, unde S adânci în DI și V6, unde R ample tardive în V1 — Corect: Descrierea ECG a BRD este explicită.\n\nBRS: undă S adâncă în V1 și undă R amplă tardivă în DI și V6; produce și unde Q anormale — Corect: BRS are modificări opuse și, inițiind activarea, produce unde Q anormale.\n\nBRD determină de regulă o dedublare distanțată dar fiziologică a zgomotului 2; BRS poate cauza dedublare inversată — Corect: Dedublarea distanțată fiziologică (BRD) versus inversată (BRS) este descrisă.\n\nBRD lasă neschimbată activarea, fără S în DI — Incorect: BRD produce S adânci în DI și V6.\n\nBRS nu modifică zgomotul 2, pe când BRD produce dedublare paradoxală — Incorect: Relația cu Z2 este inversată în această afirmație.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1056, Bloc de ramură — ECG și zgomotul 2 (pagini PDF: 217).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1056
   ],
   "pdfPages": [
    217
   ],
   "section": "Bloc de ramură — ECG și zgomotul 2"
  },
  "learningObjective": "Opunerea vectorilor BRD/BRS și a dedublării fiziologice largi versus paradoxale.",
  "optionRationales": [
   "Descrierea ECG a BRD este explicită.",
   "BRS are modificări opuse și, inițiind activarea, produce unde Q anormale.",
   "Dedublarea distanțată fiziologică (BRD) versus inversată (BRS) este descrisă.",
   "BRD produce S adânci în DI și V6.",
   "Relația cu Z2 este inversată în această afirmație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează dedublarea Z2 (fiziologică largă în BRD versus paradoxală în BRS)."
  },
  "textbookExpressions": [
   "dedublare distanţată",
   "unde Q anormale"
  ]
 },
 {
  "id": "cardiologie-adv-124",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tahicardia sinusală inadecvată și tahicardia sinusală secundară:",
  "options": [
   "IST: creștere persistentă a frecvenței de repaus, disproporționată față de stres; mai frecventă la femei tinere",
   "Cauze acute de tahicardie sinusală secundară: efort, durere, febră, infecții, ICA, embolie pulmonară, hipovolemie",
   "Ivabradina (blocant If) poate fi folosită când beta-blocantele nu sunt tolerate",
   "Este diagnosticul de primă intenție la bărbatul vârstnic cu boală structurală",
   "Tratamentul răspunsului compensator are prioritate față de identificarea cauzei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "IST: creștere persistentă a frecvenței de repaus, disproporționată față de stres; mai frecventă la femei tinere — Corect: Definiția și predominanța la femei tinere sunt explicite.\n\nCauze acute de tahicardie sinusală secundară: efort, durere, febră, infecții, ICA, embolie pulmonară, hipovolemie — Corect: Lista cauzelor acute este din text.\n\nIvabradina (blocant If) poate fi folosită când beta-blocantele nu sunt tolerate — Corect: Ivabradina este menționată când beta-blocantele nu sunt tolerate.\n\nEste diagnosticul de primă intenție la bărbatul vârstnic cu boală structurală — Incorect: IST nu este diagnosticul de primă intenție al vârstnicului cu boală structurală.\n\nTratamentul răspunsului compensator are prioritate față de identificarea cauzei — Incorect: Identificarea și tratarea factorului declanșator sunt preferabile tratamentului răspunsului compensator.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1057, TSV — Tahicardia sinusală inadecvată (pagini PDF: 218).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1057
   ],
   "pdfPages": [
    218
   ],
   "section": "TSV — Tahicardia sinusală inadecvată"
  },
  "learningObjective": "Recunoașterea terenului (femei tinere) și a ivabradinei ca alternativă, după tratarea cauzei secundare.",
  "optionRationales": [
   "Definiția și predominanța la femei tinere sunt explicite.",
   "Lista cauzelor acute este din text.",
   "Ivabradina este menționată când beta-blocantele nu sunt tolerate.",
   "IST nu este diagnosticul de primă intenție al vârstnicului cu boală structurală.",
   "Identificarea și tratarea factorului declanșator sunt preferabile tratamentului răspunsului compensator."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune IST pe bărbatul vârstnic structural și tratează compensarea înaintea cauzei."
  },
  "textbookExpressions": [
   "femeile tinere",
   "ivabradina"
  ]
 },
 {
  "id": "cardiologie-adv-125",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Conform Cadranului 30.14, cea mai frecventă tahicardie la pacienții peste 65 de ani este:",
  "options": [
   "AVNRT, ca la tinerii cu cord normal",
   "Fibrilația atrială",
   "Tahicardia atrială multifocală",
   "Tahicardia joncțională accelerată",
   "AVRT prin fascicul Kent"
  ],
  "correct": [
   1
  ],
  "explanation": "AVNRT, ca la tinerii cu cord normal — Incorect: AVNRT este cea mai comună cauză de palpitații la cord normal, nu tahicardia dominantă a vârstnicului.\n\nFibrilația atrială — Corect: Cadranul: FA — cea mai frecventă tahicardie la pacienții >65 ani.\n\nTahicardia atrială multifocală — Incorect: MAT este rară, asociată BPOC semnificativ.\n\nTahicardia joncțională accelerată — Incorect: Tahicardia joncțională accelerată este rară la adulți.\n\nAVRT prin fascicul Kent — Incorect: AVRT se datorează unei căi accesorii, nu este aritmia dominantă a vârstei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1058, TSV — Cadranul 30.14 (comentarii) (pagini PDF: 219).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1058
   ],
   "pdfPages": [
    219
   ],
   "section": "TSV — Cadranul 30.14 (comentarii)"
  },
  "learningObjective": "Reținerea FA ca tahicardie dominantă peste 65 de ani, distinct de AVNRT a tânărului.",
  "optionRationales": [
   "AVNRT este cea mai comună cauză de palpitații la cord normal, nu tahicardia dominantă a vârstnicului.",
   "Cadranul: FA — cea mai frecventă tahicardie la pacienții >65 ani.",
   "MAT este rară, asociată BPOC semnificativ.",
   "Tahicardia joncțională accelerată este rară la adulți.",
   "AVRT se datorează unei căi accesorii, nu este aritmia dominantă a vârstei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie vârstnicului AVNRT-ul tânărului cu cord normal, deși tabelul rezervă FA categoriei >65 ani."
  },
  "textbookExpressions": [
   ">65 ani",
   "Fibrilaţia atrială"
  ]
 },
 {
  "id": "cardiologie-adv-126",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "AVNRT atipică și alte TSV din Cadranul 30.14:",
  "options": [
   "În 5-10% din cazuri, AVNRT este „fast-slow”, cu interval AP' lung",
   "Tahicardia atrială multifocală: unde P cu ≥3 morfologii și RR neregulate, cel mai frecvent în BPOC semnificativă",
   "Flutterul nu trebuie luat în considerare la TSV regulată cu 150/min",
   "AVNRT este cea mai comună cauză de palpitații la pacienții cu cord normal",
   "Tahicardia joncțională accelerată este cea mai frecventă TSV a adultului"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "În 5-10% din cazuri, AVNRT este „fast-slow”, cu interval AP' lung — Corect: Textul: 5-10%, anterograd pe calea rapidă, retrograd pe cea lentă, AP' lung.\n\nTahicardia atrială multifocală: unde P cu ≥3 morfologii și RR neregulate, cel mai frecvent în BPOC semnificativă — Corect: MAT: P cu morfologii diferite și RR neregulate; BPOC.\n\nFlutterul nu trebuie luat în considerare la TSV regulată cu 150/min — Incorect: La TSV regulată 150/min trebuie considerat flutterul.\n\nAVNRT este cea mai comună cauză de palpitații la pacienții cu cord normal — Corect: Comentariul cadranului atribuie AVNRT palpitațiile de cord normal.\n\nTahicardia joncțională accelerată este cea mai frecventă TSV a adultului — Incorect: Tahicardia joncțională accelerată este rară la adulți.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1058, TSV — AVNRT fast-slow și MAT (pagini PDF: 219).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1058
   ],
   "pdfPages": [
    219
   ],
   "section": "TSV — AVNRT fast-slow și MAT"
  },
  "learningObjective": "Memorarea ponderii 5-10% a formei fast-slow și a asocierii MAT–BPOC.",
  "optionRationales": [
   "Textul: 5-10%, anterograd pe calea rapidă, retrograd pe cea lentă, AP' lung.",
   "MAT: P cu morfologii diferite și RR neregulate; BPOC.",
   "La TSV regulată 150/min trebuie considerat flutterul.",
   "Comentariul cadranului atribuie AVNRT palpitațiile de cord normal.",
   "Tahicardia joncțională accelerată este rară la adulți."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Omite flutterul de la 150/min — capcana clasică de TSV regulată — și umflă raritatea joncționalei."
  },
  "textbookExpressions": [
   "5-10%",
   "fast-slow"
  ]
 },
 {
  "id": "cardiologie-adv-127",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Manifestările clinice ale AVNRT și AVRT includ:",
  "options": [
   "Palpitații regulate cu debut și final brusc, adesea terminate prin Valsalva",
   "Poliurie prin eliberare de peptid natriuretic atrial, mai ales în AVNRT și fibrilație atrială",
   "Verapamilul i.v. este de primă intenție imediat după un beta-blocant, inclusiv la QRS >0,12 sec",
   "Adenozina nu influențează aceste TSV, fiind rezervată tahicardiei ventriculare",
   "Pulsații venoase jugulare proeminente în AVNRT, prin contracție atrială pe valve AV închise"
  ],
  "correct": [
   0,
   1,
   4
  ],
  "explanation": "Palpitații regulate cu debut și final brusc, adesea terminate prin Valsalva — Corect: Debut/final brusc și terminarea prin Valsalva sunt caracteristice.\n\nPoliurie prin eliberare de peptid natriuretic atrial, mai ales în AVNRT și fibrilație atrială — Corect: Poliuria prin ANP este descrisă, mai ales în AVNRT și FA.\n\nVerapamilul i.v. este de primă intenție imediat după un beta-blocant, inclusiv la QRS >0,12 sec — Incorect: Verapamilul nu se dă după beta-blocante și nici la QRS larg.\n\nAdenozina nu influențează aceste TSV, fiind rezervată tahicardiei ventriculare — Incorect: Adenozina este foarte eficientă în AVNRT/AVRT și influențează rar TV.\n\nPulsații venoase jugulare proeminente în AVNRT, prin contracție atrială pe valve AV închise — Corect: Pulsațiile jugulare din AVNRT sunt explicite.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1059, 1058, AVNRT/AVRT — Tablou clinic (pagini PDF: 220, 219).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1059,
    1058
   ],
   "pdfPages": [
    220,
    219
   ],
   "section": "AVNRT/AVRT — Tablou clinic"
  },
  "learningObjective": "Reunirea Valsalvei, a poliuriei prin ANP și a pulsațiilor jugulare din AVNRT.",
  "optionRationales": [
   "Debut/final brusc și terminarea prin Valsalva sunt caracteristice.",
   "Poliuria prin ANP este descrisă, mai ales în AVNRT și FA.",
   "Verapamilul nu se dă după beta-blocante și nici la QRS larg.",
   "Adenozina este foarte eficientă în AVNRT/AVRT și influențează rar TV.",
   "Pulsațiile jugulare din AVNRT sunt explicite."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Interzice adenozina (tocmai agentul de elecție) și asociază verapamilul cu beta-blocantul la QRS larg."
  },
  "textbookExpressions": [
   "peptid natriuretic atrial",
   "Valsalva"
  ]
 },
 {
  "id": "cardiologie-adv-128",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la tratamentul acut al AVNRT/AVRT:",
  "options": [
   "Instabilitatea hemodinamică (hipotensiune, edem pulmonar) impune cardioversie de urgență",
   "Manevrele vagale (masaj carotidian, Valsalva, imersie facială în apă rece) pot opri criza",
   "Digoxinul i.v. este antiaritmicul de elecție în WPW cu QRS larg",
   "Verapamil 5-10 mg i.v. se administrează imediat după un beta-blocant la QRS >0,12 sec",
   "Diagnosticul diferențial AVNRT versus AVRT trebuie elucidat înaintea oricărei manevre, tratamentele fiind radical diferite"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Instabilitatea hemodinamică (hipotensiune, edem pulmonar) impune cardioversie de urgență — Corect: Textul: instabilitatea impune cardioversie de urgență.\n\nManevrele vagale (masaj carotidian, Valsalva, imersie facială în apă rece) pot opri criza — Corect: Cele trei manevre vagale sunt enumerate.\n\nDigoxinul i.v. este antiaritmicul de elecție în WPW cu QRS larg — Incorect: Digoxinul (ca și verapamilul) poate accelera conducerea pe calea accesorie în FA preexcitată.\n\nVerapamil 5-10 mg i.v. se administrează imediat după un beta-blocant la QRS >0,12 sec — Incorect: Verapamilul nu se dă după beta-blocante și nici la QRS larg.\n\nDiagnosticul diferențial AVNRT versus AVRT trebuie elucidat înaintea oricărei manevre, tratamentele fiind radical diferite — Incorect: Diferențierea nu este esențială acut: ambele răspund la același tratament.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1059, AVNRT/AVRT — Tratament acut (pagini PDF: 220).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1059
   ],
   "pdfPages": [
    220
   ],
   "section": "AVNRT/AVRT — Tratament acut"
  },
  "learningObjective": "Prioritatea cardioversiei la instabil și a manevrelor vagale la stabil, înaintea adenozinei.",
  "optionRationales": [
   "Textul: instabilitatea impune cardioversie de urgență.",
   "Cele trei manevre vagale sunt enumerate.",
   "Digoxinul (ca și verapamilul) poate accelera conducerea pe calea accesorie în FA preexcitată.",
   "Verapamilul nu se dă după beta-blocante și nici la QRS larg.",
   "Diferențierea nu este esențială acut: ambele răspund la același tratament."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere diferențierea AVNRT/AVRT înaintea manevrelor, deși textul spune că tratamentul acut este comun."
  },
  "textbookExpressions": [
   "cardioversie de urgenţă",
   "imersia feţei"
  ]
 },
 {
  "id": "cardiologie-adv-129",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Fibrilația atrială — mecanism electric și prezentare:",
  "options": [
   "Activare atrială continuă, rapidă (300-600/min), adesea din focare de la venele pulmonare",
   "La circa 30% dintre pacienți este o descoperire incidentală",
   "Fără tratament, frecvența ventriculară este de obicei 120-180/min",
   "Pulsul rămâne neregulat și în timpul efortului, spre deosebire de extrasistole",
   "Undele P înalte, regulate, definesc fibrilația"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Activare atrială continuă, rapidă (300-600/min), adesea din focare de la venele pulmonare — Corect: Frecvența atrială 300-600 și originea venoasă pulmonară sunt explicite.\n\nLa circa 30% dintre pacienți este o descoperire incidentală — Corect: Aproximativ 30% sunt descoperiri incidentale.\n\nFără tratament, frecvența ventriculară este de obicei 120-180/min — Corect: Fără tratament, răspunsul ventricular este de obicei 120-180/min.\n\nPulsul rămâne neregulat și în timpul efortului, spre deosebire de extrasistole — Corect: Neregularitatea persistă la efort, spre deosebire de extrasistole sau Wenckebach.\n\nUndele P înalte, regulate, definesc fibrilația — Incorect: FA se caracterizează prin absența undelor P și oscilații fine ale liniei de bază.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1060, Fibrilația atrială — Mecanism și tablou (pagini PDF: 221).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1060
   ],
   "pdfPages": [
    221
   ],
   "section": "Fibrilația atrială — Mecanism și tablou"
  },
  "learningObjective": "Aplicarea ferestrelor 300-600/min atrial, 120-180 ventricular netratat și a ponderii 30% incidente.",
  "optionRationales": [
   "Frecvența atrială 300-600 și originea venoasă pulmonară sunt explicite.",
   "Aproximativ 30% sunt descoperiri incidentale.",
   "Fără tratament, răspunsul ventricular este de obicei 120-180/min.",
   "Neregularitatea persistă la efort, spre deosebire de extrasistole sau Wenckebach.",
   "FA se caracterizează prin absența undelor P și oscilații fine ale liniei de bază."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune unde P regulate pe FA — tocmai aritmia definită prin absența lor."
  },
  "textbookExpressions": [
   "300-600 b.p.m.",
   "120-180 b.p.m"
  ]
 },
 {
  "id": "cardiologie-adv-130",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Ca strategie primară, controlul frecvenței în fibrilația atrială:",
  "options": [
   "Se obține în general prin combinație de digoxin, beta-blocante sau non-dihidropiridinice (verapamil, diltiazem)",
   "Digoxinul în monoterapie poate fi suficient la vârstnicii inactivi; la tineri efectul vagotonic este anulat de catecolamine",
   "La vârstnici cu control slab sub terapie optimă se poate abla nodul AV și implanta un stimulator („ablate and pace”), cu anticoagulare continuă",
   "Ținta de repaus este sub 50/min la toți tinerii, fără Holter",
   "Ablația de nod AV permite oprirea anticoagulării, riscul trombotic dispărând"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se obține în general prin combinație de digoxin, beta-blocante sau non-dihidropiridinice (verapamil, diltiazem) — Corect: Combinația celor trei clase este explicită.\n\nDigoxinul în monoterapie poate fi suficient la vârstnicii inactivi; la tineri efectul vagotonic este anulat de catecolamine — Corect: Monoterapia cu digoxin la vârstnicii inactivi și limita la tineri sunt descrise.\n\nLa vârstnici cu control slab sub terapie optimă se poate abla nodul AV și implanta un stimulator („ablate and pace”), cu anticoagulare continuă — Corect: „Ablate and pace” amelioră simptomele, dar anticoagularea rămâne necesară.\n\nȚinta de repaus este sub 50/min la toți tinerii, fără Holter — Incorect: Țintele citate sunt <110 în repaus, apoi 60-80 și <110 la efort dacă simptomele persistă; tinerii au nevoie de Holter și test de efort.\n\nAblația de nod AV permite oprirea anticoagulării, riscul trombotic dispărând — Incorect: Riscul tromboembolic persistă după ablația de nod.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1061, Fibrilația atrială — Controlul frecvenței și „ablate and pace” (pagini PDF: 222).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1061
   ],
   "pdfPages": [
    222
   ],
   "section": "Fibrilația atrială — Controlul frecvenței și „ablate and pace”"
  },
  "learningObjective": "Recunoașterea combinației digoxin/BB/non-DHP și a strategiei ablate-and-pace cu anticoagulare pe viață.",
  "optionRationales": [
   "Combinația celor trei clase este explicită.",
   "Monoterapia cu digoxin la vârstnicii inactivi și limita la tineri sunt descrise.",
   "„Ablate and pace” amelioră simptomele, dar anticoagularea rămâne necesară.",
   "Țintele citate sunt <110 în repaus, apoi 60-80 și <110 la efort dacă simptomele persistă; tinerii au nevoie de Holter și test de efort.",
   "Riscul tromboembolic persistă după ablația de nod."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oprește anticoagularea după „ablate and pace”, deși textul o menține din cauza riscului trombotic persistent."
  },
  "textbookExpressions": [
   "ablate and pace",
   "Digoxinul în monoterapie"
  ]
 },
 {
  "id": "cardiologie-adv-131",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Rata complicațiilor majore (accident vascular cerebral și sângerări) ale ablației de fibrilație atrială este de circa:",
  "options": [
   "20%",
   "50%",
   "2%",
   "0,01%",
   "35%"
  ],
  "correct": [
   2
  ],
  "explanation": "20% — Incorect: 20% este cu un ordin de mărime peste text.\n\n50% — Incorect: 50% nu apare.\n\n2% — Corect: Textul: AVC și sângerări în aproximativ 2% din cazuri.\n\n0,01% — Incorect: 0,01% subestimează riscul.\n\n35% — Incorect: 35% este o altă ordine de mărime, necitată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1061, Fibrilația atrială — Riscurile ablației (pagini PDF: 222).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1061
   ],
   "pdfPages": [
    222
   ],
   "section": "Fibrilația atrială — Riscurile ablației"
  },
  "learningObjective": "Reținerea ordinii de mărime 2% pentru AVC și sângerări post-ablație.",
  "optionRationales": [
   "20% este cu un ordin de mărime peste text.",
   "50% nu apare.",
   "Textul: AVC și sângerări în aproximativ 2% din cazuri.",
   "0,01% subestimează riscul.",
   "35% este o altă ordine de mărime, necitată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă complicațiile ablației de la 2% la 20-50%, ordine de mărime alăturate dar false."
  },
  "textbookExpressions": [
   "2% din cazuri",
   "vene pulmonare"
  ]
 },
 {
  "id": "cardiologie-adv-132",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Anticoagularea orală în fibrilația atrială non-valvulară:",
  "options": [
   "Warfarină cu INR 2,0-3,0 sau un DOAC: dabigatran (inhibitor direct de trombină) ori rivaroxaban/apixaban (anti-Xa)",
   "DOAC: acțiune mai rapidă, timp de înjumătățire mai scurt, mai puține interacțiuni, fără monitorizare INR",
   "Antiagregantele plachetare sunt alternativa recomandată anticoagulării pentru prevenția AVC",
   "La contraindicație sau intoleranță se poate considera închiderea percutană a urechiușei atriale stângi",
   "Antiagregantele nu sunt recomandate pentru prevenția accidentului vascular cerebral"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "Warfarină cu INR 2,0-3,0 sau un DOAC: dabigatran (inhibitor direct de trombină) ori rivaroxaban/apixaban (anti-Xa) — Corect: INR 2,0-3,0 și cele două clase DOAC sunt explicite.\n\nDOAC: acțiune mai rapidă, timp de înjumătățire mai scurt, mai puține interacțiuni, fără monitorizare INR — Corect: Avantajele farmacocinetice față de warfarină sunt listate.\n\nAntiagregantele plachetare sunt alternativa recomandată anticoagulării pentru prevenția AVC — Incorect: Textul: antiagregantele nu sunt recomandate pentru prevenția AVC.\n\nLa contraindicație sau intoleranță se poate considera închiderea percutană a urechiușei atriale stângi — Corect: LAAO este opțiunea la contraindicație/intoleranță.\n\nAntiagregantele nu sunt recomandate pentru prevenția accidentului vascular cerebral — Corect: Afirmația E reia concluzia cadranului/textului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1062, Fibrilația atrială — DOAC, warfarină și LAAO (pagini PDF: 223).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1062
   ],
   "pdfPages": [
    223
   ],
   "section": "Fibrilația atrială — DOAC, warfarină și LAAO"
  },
  "learningObjective": "Contrastul cascadei DOAC versus warfarină și respingerea antiagregantelor ca substitut de prevenție a AVC.",
  "optionRationales": [
   "INR 2,0-3,0 și cele două clase DOAC sunt explicite.",
   "Avantajele farmacocinetice față de warfarină sunt listate.",
   "Textul: antiagregantele nu sunt recomandate pentru prevenția AVC.",
   "LAAO este opțiunea la contraindicație/intoleranță.",
   "Afirmația E reia concluzia cadranului/textului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune antiagregantul în locul anticoagulării — strategie pe care textul o respinge explicit."
  },
  "textbookExpressions": [
   "INR de 2,0-3,0",
   "urechiuşei atriale stângi"
  ]
 },
 {
  "id": "cardiologie-adv-133",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Un scor CHA2DS2-VASc de 0 puncte corespunde unui risc anual de AVC ischemic de:",
  "options": [
   "2,2%, cu anticoagulare orală imediată",
   "0%, fără profilaxie",
   "5%, identic HAS-BLED ≥3",
   "1,3%, ca la 1 punct",
   "35,9%, ca TIMI STEMI 9-16"
  ],
  "correct": [
   1
  ],
  "explanation": "2,2%, cu anticoagulare orală imediată — Incorect: 2,2% este pragul de la 2+ puncte.\n\n0%, fără profilaxie — Corect: Cadranul: 0 puncte = 0% risc, fără profilaxie.\n\n5%, identic HAS-BLED ≥3 — Incorect: >5% este riscul hemoragic HAS-BLED ≥3, nu riscul trombotic CHA2DS2-VASc 0.\n\n1,3%, ca la 1 punct — Incorect: 1,3% corespunde 1 punct.\n\n35,9%, ca TIMI STEMI 9-16 — Incorect: 35,9% aparține TIMI STEMI, nu CHA2DS2-VASc.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1062, Fibrilația atrială — CHA2DS2-VASc 0 puncte (pagini PDF: 223).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1062
   ],
   "pdfPages": [
    223
   ],
   "section": "Fibrilația atrială — CHA2DS2-VASc 0 puncte"
  },
  "learningObjective": "Reținerea perechii 0 puncte = 0% risc, fără profilaxie.",
  "optionRationales": [
   "2,2% este pragul de la 2+ puncte.",
   "Cadranul: 0 puncte = 0% risc, fără profilaxie.",
   ">5% este riscul hemoragic HAS-BLED ≥3, nu riscul trombotic CHA2DS2-VASc 0.",
   "1,3% corespunde 1 punct.",
   "35,9% aparține TIMI STEMI, nu CHA2DS2-VASc."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă 0% de la 0 puncte cu 2,2% (2+ puncte) sau cu HAS-BLED hemoragic."
  },
  "textbookExpressions": [
   "0% risc",
   "Fără profilaxie"
  ]
 },
 {
  "id": "cardiologie-adv-134",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Flutterul atrial — polaritatea undelor F și conducerea 1:1:",
  "options": [
   "În forma antiorară, undele F sunt negative în derivațiile inferioare și pozitive în V1-V2",
   "În forma orară, orientarea undelor F este inversă",
   "Conducerea 1:1 produce frecvență ventriculară de 300/min",
   "Antiorarul are F pozitive inferior și negative în V1",
   "Masajul sinusului carotidian nu poate demasca undele F"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În forma antiorară, undele F sunt negative în derivațiile inferioare și pozitive în V1-V2 — Corect: Polaritatea antiorară este descrisă astfel.\n\nÎn forma orară, orientarea undelor F este inversă — Corect: Orarul inversează orientarea F.\n\nConducerea 1:1 produce frecvență ventriculară de 300/min — Corect: Fiecare undă condusă dă 300/min ventricular.\n\nAntiorarul are F pozitive inferior și negative în V1 — Incorect: Aceasta este polaritatea orarului, nu a antiorarului.\n\nMasajul sinusului carotidian nu poate demasca undele F — Incorect: Masajul carotidian sau adenozina/verapamilul pot demasca undele F.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1062, Flutter atrial — Antiorar, orar și 1:1 (pagini PDF: 223).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1062
   ],
   "pdfPages": [
    223
   ],
   "section": "Flutter atrial — Antiorar, orar și 1:1"
  },
  "learningObjective": "Opunerea polarității F antiorar/orar și recunoașterea răspunsului 1:1 la 300/min.",
  "optionRationales": [
   "Polaritatea antiorară este descrisă astfel.",
   "Orarul inversează orientarea F.",
   "Fiecare undă condusă dă 300/min ventricular.",
   "Aceasta este polaritatea orarului, nu a antiorarului.",
   "Masajul carotidian sau adenozina/verapamilul pot demasca undele F."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează polaritatea F antiorar/orar și neagă manevra de demascare a flutterului."
  },
  "textbookExpressions": [
   "flutter antiorar",
   "300 b.p.m."
  ]
 },
 {
  "id": "cardiologie-adv-135",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tahicardia atrială prin automatism crescut:",
  "options": [
   "Are frecvențe 125-250/min și prezintă adesea „warm-up” și „cool-down”",
   "Focarul este cel mai frecvent pe crista terminalis, lângă o venă pulmonară sau în jurul unei urechiușe",
   "Masajul sinusului carotidian o oprește constant, ca pe AVNRT",
   "Poate fi incesantă și conduce la cardiomiopatie tahiaritmică",
   "Este mai lentă decât forma prin reintrare (125-150/min)"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Are frecvențe 125-250/min și prezintă adesea „warm-up” și „cool-down” — Corect: Frecvențele și fenomenele warm-up/cool-down sunt explicite.\n\nFocarul este cel mai frecvent pe crista terminalis, lângă o venă pulmonară sau în jurul unei urechiușe — Corect: Localizările focarului sunt cele trei citate.\n\nMasajul sinusului carotidian o oprește constant, ca pe AVNRT — Incorect: Masajul crește gradul de BAV și ajută diagnosticul, dar nu oprește tahicardia.\n\nPoate fi incesantă și conduce la cardiomiopatie tahiaritmică — Corect: Forma incesantă poate produce cardiomiopatie tahiaritmică.\n\nEste mai lentă decât forma prin reintrare (125-150/min) — Incorect: Forma prin reintrare este de obicei mai lentă (125-150), nu mai rapidă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1063, Tahicardia atrială — Automatism (pagini PDF: 224).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1063
   ],
   "pdfPages": [
    224
   ],
   "section": "Tahicardia atrială — Automatism"
  },
  "learningObjective": "Contrastul 125-250/min cu warm-up față de forma prin reintrare mai lentă și a riscului de cardiomiopatie.",
  "optionRationales": [
   "Frecvențele și fenomenele warm-up/cool-down sunt explicite.",
   "Localizările focarului sunt cele trei citate.",
   "Masajul crește gradul de BAV și ajută diagnosticul, dar nu oprește tahicardia.",
   "Forma incesantă poate produce cardiomiopatie tahiaritmică.",
   "Forma prin reintrare este de obicei mai lentă (125-150), nu mai rapidă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oprește tahicardia atrială cu masaj carotidian — manevră care doar crește BAV-ul — și inversează vitezele automatism/reintrare."
  },
  "textbookExpressions": [
   "warm-up",
   "cristei terminalis"
  ]
 },
 {
  "id": "cardiologie-adv-136",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Proporția tahicardiilor cu complexe largi care sunt ventriculare este de circa:",
  "options": [
   "80%, și mai mare la pacienții cu boală cardiacă structurală",
   "5%, restul fiind TSV cu aberanță",
   "50% fără boală structurală și 10% cu boală structurală",
   "Sub 1%, dacă QRS depășește 0,14 sec",
   "100%, dacă QRS este sub 0,12 sec"
  ],
  "correct": [
   0
  ],
  "explanation": "80%, și mai mare la pacienții cu boală cardiacă structurală — Corect: Textul: 80% din tahicardiile cu complexe largi sunt ventriculare; proporția e și mai mare la boală structurală.\n\n5%, restul fiind TSV cu aberanță — Incorect: 5% subestimează net.\n\n50% fără boală structurală și 10% cu boală structurală — Incorect: Raportul 50/10 este inversat față de mesajul textului.\n\nSub 1%, dacă QRS depășește 0,14 sec — Incorect: QRS >0,14 sec orientează spre TV, nu o face rară.\n\n100%, dacă QRS este sub 0,12 sec — Incorect: QRS îngust nu definește TV.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1063, TV versus TSV cu aberanță — Ponderea 80% (pagini PDF: 224).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1063
   ],
   "pdfPages": [
    224
   ],
   "section": "TV versus TSV cu aberanță — Ponderea 80%"
  },
  "learningObjective": "Reținerea regulii 80% (și mai mult la boală structurală) în fața unei tahicardii cu QRS larg.",
  "optionRationales": [
   "Textul: 80% din tahicardiile cu complexe largi sunt ventriculare; proporția e și mai mare la boală structurală.",
   "5% subestimează net.",
   "Raportul 50/10 este inversat față de mesajul textului.",
   "QRS >0,14 sec orientează spre TV, nu o face rară.",
   "QRS îngust nu definește TV."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Subestimează ponderea TV în tahicardia cu QRS larg, deși textul o plasează la 80%."
  },
  "textbookExpressions": [
   "80%",
   "complexe largi"
  ]
 },
 {
  "id": "cardiologie-adv-137",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Fibrilația ventriculară în relație cu infarctul miocardic acut:",
  "options": [
   "Dacă episodul apare în primele 1-2 zile post-IMA, terapia profilactică nu este de obicei necesară",
   "Dacă episodul nu este legat de un IMA, riscul pe termen lung de stop și moarte subită este mare",
   "ICD este tratament de primă linie la supraviețuitori în absența unei cauze reversibile",
   "Orice FV peri-infarct impune ICD înaintea externării, inclusiv în primele 24 de ore",
   "Cauzele reversibile (IMA, tulburări metabolice severe) nu modifică indicația de ICD"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Dacă episodul apare în primele 1-2 zile post-IMA, terapia profilactică nu este de obicei necesară — Corect: Textul: în primele 1-2 zile post-IMA, profilaxia nu este probabil necesară.\n\nDacă episodul nu este legat de un IMA, riscul pe termen lung de stop și moarte subită este mare — Corect: În afara infarctului, riscul pe termen lung este mare.\n\nICD este tratament de primă linie la supraviețuitori în absența unei cauze reversibile — Corect: ICD este prima linie la supraviețuitori fără cauză reversibilă.\n\nOrice FV peri-infarct impune ICD înaintea externării, inclusiv în primele 24 de ore — Incorect: FV din primele 1-2 zile nu impune de la sine ICD.\n\nCauzele reversibile (IMA, tulburări metabolice severe) nu modifică indicația de ICD — Incorect: Cauzele reversibile (IMA, metabolice) schimbă strategia.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1064, Fibrilația ventriculară — Fereastra peri-infarct (pagini PDF: 225).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1064
   ],
   "pdfPages": [
    225
   ],
   "section": "Fibrilația ventriculară — Fereastra peri-infarct"
  },
  "learningObjective": "Aplicarea ferestrei 1-2 zile: FV precoce post-IMA fără profilaxie versus FV fără cauză reversibilă cu ICD.",
  "optionRationales": [
   "Textul: în primele 1-2 zile post-IMA, profilaxia nu este probabil necesară.",
   "În afara infarctului, riscul pe termen lung este mare.",
   "ICD este prima linie la supraviețuitori fără cauză reversibilă.",
   "FV din primele 1-2 zile nu impune de la sine ICD.",
   "Cauzele reversibile (IMA, metabolice) schimbă strategia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Implantează ICD pentru FV-ul precoce post-IMA, tocmai scenariul în care textul nu cere profilaxie."
  },
  "textbookExpressions": [
   "1-2 zile",
   "Defibrilatoarele implantabile"
  ]
 },
 {
  "id": "cardiologie-adv-138",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Sindromul Brugada — genetică și modalități de prezentare:",
  "options": [
   "În 20% din cazuri este moștenit prin mutație SCN5A, cu pierderea funcției canalelor de sodiu",
   "Au fost implicate și SCN5B, GPD1L și subunități ale canalelor de calciu (CACNA1C, CACNB2)",
   "Beta-blocantele sunt tratamentul de elecție și reduc mortalitatea",
   "Este mai frecvent la femei vârstnice din Europa de Nord decât la bărbați tineri din Asia de Sud-Est",
   "Prezentări: moarte subită în somn, stop resuscitat, sincopă, sau descoperire incidentală/familială"
  ],
  "correct": [
   0,
   1,
   4
  ],
  "explanation": "În 20% din cazuri este moștenit prin mutație SCN5A, cu pierderea funcției canalelor de sodiu — Corect: 20% SCN5A cu loss-of-function este explicit.\n\nAu fost implicate și SCN5B, GPD1L și subunități ale canalelor de calciu (CACNA1C, CACNB2) — Corect: Celelalte gene sunt enumerate.\n\nBeta-blocantele sunt tratamentul de elecție și reduc mortalitatea — Incorect: Beta-blocantele nu sunt utile, putând fi chiar nocive; tratamentul eficient este ICD.\n\nEste mai frecvent la femei vârstnice din Europa de Nord decât la bărbați tineri din Asia de Sud-Est — Incorect: Predomină tinerii de sex masculin din Asia de Sud-Est.\n\nPrezentări: moarte subită în somn, stop resuscitat, sincopă, sau descoperire incidentală/familială — Corect: Somnul, stopul, sincopa și forma incidentală sunt listate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1064, Sindromul Brugada — Gene și prezentare (pagini PDF: 225).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1064
   ],
   "pdfPages": [
    225
   ],
   "section": "Sindromul Brugada — Gene și prezentare"
  },
  "learningObjective": "Reținerea ponderii 20% SCN5A și a prezentării nocturne, față de ineficiența beta-blocantelor.",
  "optionRationales": [
   "20% SCN5A cu loss-of-function este explicit.",
   "Celelalte gene sunt enumerate.",
   "Beta-blocantele nu sunt utile, putând fi chiar nocive; tratamentul eficient este ICD.",
   "Predomină tinerii de sex masculin din Asia de Sud-Est.",
   "Somnul, stopul, sincopa și forma incidentală sunt listate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează beta-blocantul ca elecție — agent pe care textul îl consideră inutil sau nociv — și inversează epidemiologia."
  },
  "textbookExpressions": [
   "20% din cazuri",
   "SCN5A"
  ]
 },
 {
  "id": "cardiologie-adv-139",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tratamentul sindromului QT lung congenital, dincolo de faza acută:",
  "options": [
   "Beta-blocante, uneori stimulator, uneori denervare simpatică cardiacă stângă",
   "LQT1 răspunde bine la beta-blocante; LQT3 mai bine la blocante ale canalelor de sodiu",
   "Isoprenalina intravenoasă este prima linie și în forma congenitală",
   "Pacienții care rămân simptomatici, cu QT marcat și istoric familial de MSC, necesită de obicei ICD",
   "Între crize, QTc măsoară de obicei peste 0,50 sec"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "Beta-blocante, uneori stimulator, uneori denervare simpatică cardiacă stângă — Corect: Strategia pe termen lung include aceste trei axe.\n\nLQT1 răspunde bine la beta-blocante; LQT3 mai bine la blocante ale canalelor de sodiu — Corect: Răspunsul diferențiat LQT1/LQT3 este explicit.\n\nIsoprenalina intravenoasă este prima linie și în forma congenitală — Incorect: Isoprenalina este contraindicată în forma congenitală (utilă în cea dobândită).\n\nPacienții care rămân simptomatici, cu QT marcat și istoric familial de MSC, necesită de obicei ICD — Corect: ICD-ul este rezervat simptomaticilor cu QT marcat sau istoric familial de MSC.\n\nÎntre crize, QTc măsoară de obicei peste 0,50 sec — Corect: QTc >0,50 sec este pragul citat între episoade.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1065, QT lung congenital — Tratament de durată (pagini PDF: 226).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1065
   ],
   "pdfPages": [
    226
   ],
   "section": "QT lung congenital — Tratament de durată"
  },
  "learningObjective": "Potrivirea LQT1–beta-blocant versus LQT3–blocant de Na+ și a pragului QTc >0,50 sec.",
  "optionRationales": [
   "Strategia pe termen lung include aceste trei axe.",
   "Răspunsul diferențiat LQT1/LQT3 este explicit.",
   "Isoprenalina este contraindicată în forma congenitală (utilă în cea dobândită).",
   "ICD-ul este rezervat simptomaticilor cu QT marcat sau istoric familial de MSC.",
   "QTc >0,50 sec este pragul citat între episoade."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Folosește isoprenalina — utilă în QT dobândit — ca primă linie în forma congenitală, unde este contraindicată."
  },
  "textbookExpressions": [
   "0,50 sec",
   "denervare simpatică"
  ]
 },
 {
  "id": "cardiologie-adv-140",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Sindromul QT scurt și extrasistolele ventriculare:",
  "options": [
   "Sunt descrise doar 2 tipuri, fără risc de moarte subită",
   "Sunt descrise 5 tipuri; pot predispune la aritmii ventriculare și MSC, ICD fiind tratamentul optim",
   "Fenomenul R pe T poate precipita fibrilația ventriculară, mai ales post-infarct",
   "Extrasistolele ventriculare se tratează de rutină cu antiaritmice de clasă Ic după un infarct",
   "După ESV nu urmează pauză compensatorie, nodul AV rămânând excitabil"
  ],
  "correct": [
   1,
   2
  ],
  "explanation": "Sunt descrise doar 2 tipuri, fără risc de moarte subită — Incorect: Nu sunt 2 tipuri fără risc.\n\nSunt descrise 5 tipuri; pot predispune la aritmii ventriculare și MSC, ICD fiind tratamentul optim — Corect: Textul: 5 tipuri, risc de MSC, ICD optim.\n\nFenomenul R pe T poate precipita fibrilația ventriculară, mai ales post-infarct — Corect: R pe T poate duce la FV, mai ales post-infarct.\n\nExtrasistolele ventriculare se tratează de rutină cu antiaritmice de clasă Ic după un infarct — Incorect: ESV se tratează doar dacă sunt simptomatice; clasa I post-IMA a crescut mortalitatea în CAST.\n\nDupă ESV nu urmează pauză compensatorie, nodul AV rămânând excitabil — Incorect: De obicei urmează o pauză compensatorie completă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1066, QT scurt și extrasistole ventriculare (pagini PDF: 227).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1066
   ],
   "pdfPages": [
    227
   ],
   "section": "QT scurt și extrasistole ventriculare"
  },
  "learningObjective": "Reținerea celor 5 tipuri de QT scurt cu indicație de ICD și a riscului R-pe-T post-IMA.",
  "optionRationales": [
   "Nu sunt 2 tipuri fără risc.",
   "Textul: 5 tipuri, risc de MSC, ICD optim.",
   "R pe T poate duce la FV, mai ales post-infarct.",
   "ESV se tratează doar dacă sunt simptomatice; clasa I post-IMA a crescut mortalitatea în CAST.",
   "De obicei urmează o pauză compensatorie completă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce QT scurt la o raritate benignă și tratează ESV post-IMA cu clasa Ic, strategia CAST nocivă."
  },
  "textbookExpressions": [
   "5 tipuri",
   "R pe T"
  ]
 },
 {
  "id": "cardiologie-adv-141",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Antiaritmicele de clasă I (blocante de sodiu):",
  "options": [
   "Reduc influxul de sodiu, pot încetini conducerea, prelungi repolarizarea și reduce automatismul",
   "CAST: clasa Ic a crescut mortalitatea la extrasistole ventriculare post-IMA; chinidina (Ia) a crescut-o la FA",
   "Utilizarea clasei I, inclusiv flecainida, se limitează la absența bolii coronariene, a disfuncției de VS sau a altei boli structurale semnificative",
   "Clasa Ib (lidocaină, mexiletină) scurtează potențialul de acțiune",
   "Clasa Ic prelungește potențialul de acțiune, identic Ia"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Reduc influxul de sodiu, pot încetini conducerea, prelungi repolarizarea și reduce automatismul — Corect: Mecanismul de clasă I este descris astfel.\n\nCAST: clasa Ic a crescut mortalitatea la extrasistole ventriculare post-IMA; chinidina (Ia) a crescut-o la FA — Corect: CAST (Ic) și datele cu chinidina (Ia) sunt citate.\n\nUtilizarea clasei I, inclusiv flecainida, se limitează la absența bolii coronariene, a disfuncției de VS sau a altei boli structurale semnificative — Corect: Limitarea la cord fără BCI/disfuncție/boală structurală este explicită.\n\nClasa Ib (lidocaină, mexiletină) scurtează potențialul de acțiune — Corect: Cadranul 30.19: Ib scurtează potențialul de acțiune.\n\nClasa Ic prelungește potențialul de acțiune, identic Ia — Incorect: Ic nu afectează durata potențialului de acțiune.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1067, Antiaritmice — Clasa I și CAST (pagini PDF: 228).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1067
   ],
   "pdfPages": [
    228
   ],
   "section": "Antiaritmice — Clasa I și CAST"
  },
  "learningObjective": "Aplicarea lecției CAST: clasa I se evită pe cord ischemic/structural; Ib scurtează PA, Ic nu-l afectează.",
  "optionRationales": [
   "Mecanismul de clasă I este descris astfel.",
   "CAST (Ic) și datele cu chinidina (Ia) sunt citate.",
   "Limitarea la cord fără BCI/disfuncție/boală structurală este explicită.",
   "Cadranul 30.19: Ib scurtează potențialul de acțiune.",
   "Ic nu afectează durata potențialului de acțiune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie clasei Ic prelungirea de PA a Ia, deși tabelul o lasă fără efect pe durata PA."
  },
  "textbookExpressions": [
   "trialurile CAST",
   "canalelor de sodiu"
  ]
 },
 {
  "id": "cardiologie-adv-142",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Mecanismul principal al antiaritmicelor de clasă III este:",
  "options": [
   "Blocarea influxului de sodiu în faza 0, ca clasa I",
   "Antagonism beta pur, fără efect pe potasiu",
   "Prelungirea potențialului de acțiune prin blocarea componentei rapide a curentului de potasiu (IKr), fără a afecta transportul de sodiu",
   "Scurtarea fazei de platou, identic verapamilului",
   "Agonism pe canalele de calciu"
  ],
  "correct": [
   2
  ],
  "explanation": "Blocarea influxului de sodiu în faza 0, ca clasa I — Incorect: Blocarea sodiului este clasa I.\n\nAntagonism beta pur, fără efect pe potasiu — Incorect: Sotalolul are și efect beta, dar clasa III nu se reduce la antagonism beta pur.\n\nPrelungirea potențialului de acțiune prin blocarea componentei rapide a curentului de potasiu (IKr), fără a afecta transportul de sodiu — Corect: Textul: prelungesc PA prin blocarea IKr, fără a afecta transportul de Na+.\n\nScurtarea fazei de platou, identic verapamilului — Incorect: Scurtarea platoului este clasa IV.\n\nAgonism pe canalele de calciu — Incorect: Agonismul calciu nu este mecanismul clasei III.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1067, Antiaritmice — Clasa III (IKr) (pagini PDF: 228).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1067
   ],
   "pdfPages": [
    228
   ],
   "section": "Antiaritmice — Clasa III (IKr)"
  },
  "learningObjective": "Reținerea blocadei IKr fără efect pe sodiu ca mecanism de clasă III.",
  "optionRationales": [
   "Blocarea sodiului este clasa I.",
   "Sotalolul are și efect beta, dar clasa III nu se reduce la antagonism beta pur.",
   "Textul: prelungesc PA prin blocarea IKr, fără a afecta transportul de Na+.",
   "Scurtarea platoului este clasa IV.",
   "Agonismul calciu nu este mecanismul clasei III."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce clasa III la un beta-blocant pur sau o confundă cu clasa I/IV, deși nucleul este IKr."
  },
  "textbookExpressions": [
   "curentului de potasiu",
   "sotalolul"
  ]
 },
 {
  "id": "cardiologie-adv-143",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Ablația căilor accesorii și a preexcitației:",
  "options": [
   "Rata de succes a ablației de AVNRT și de cale accesorie este mai mare de 95%",
   "Căile care conduc doar retrograd nu au risc crescut de moarte subită, dar pot produce AVRT",
   "Profilactic, se recomandă ablația căii accesorii la asimptomatici cu traseu ECG sugestiv WPW",
   "Riscul principal la calea stângă este blocul de ramură izolat, nu tromboembolismul",
   "TV pe cord structural normal are risc de MSC identic bolii structurale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Rata de succes a ablației de AVNRT și de cale accesorie este mai mare de 95% — Corect: Succesul >95% este explicit.\n\nCăile care conduc doar retrograd nu au risc crescut de moarte subită, dar pot produce AVRT — Corect: Căile doar retrograde: fără risc crescut de MSC, dar cu AVRT posibilă.\n\nProfilactic, se recomandă ablația căii accesorii la asimptomatici cu traseu ECG sugestiv WPW — Corect: Ablația profilactică la ECG WPW asimptomatic este recomandată.\n\nRiscul principal la calea stângă este blocul de ramură izolat, nu tromboembolismul — Incorect: La calea stângă, riscul principal este tromboembolismul.\n\nTV pe cord structural normal are risc de MSC identic bolii structurale — Incorect: TV pe cord normal nu are risc crescut de MSC și se tratează ușor prin ablație.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1068, Ablație — WPW simptomatic, ascuns și profilactic (pagini PDF: 229).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1068
   ],
   "pdfPages": [
    229
   ],
   "section": "Ablație — WPW simptomatic, ascuns și profilactic"
  },
  "learningObjective": "Contrastul căii doar retrograde (fără MSC) versus recomandarea profilactică la ECG WPW și succesul >95%.",
  "optionRationales": [
   "Succesul >95% este explicit.",
   "Căile doar retrograde: fără risc crescut de MSC, dar cu AVRT posibilă.",
   "Ablația profilactică la ECG WPW asimptomatic este recomandată.",
   "La calea stângă, riscul principal este tromboembolismul.",
   "TV pe cord normal nu are risc crescut de MSC și se tratează ușor prin ablație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă indicația profilactică la WPW-ul ECG și înlocuiește tromboembolismul căii stângi cu un BRD inofensiv."
  },
  "textbookExpressions": [
   "mai mare de 95%",
   "pre-excitaţie"
  ]
 },
 {
  "id": "cardiologie-adv-144",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "În prevenția secundară după o tahiaritmie ventriculară amenințătoare de viață, ICD:",
  "options": [
   "A îmbunătățit supraviețuirea în trialul AVID (antiaritmice versus ICD)",
   "Are baterie de litiu pentru circa 100 de șocuri de 30 J",
   "Șocurile sunt nedureroase dacă pacientul este conștient",
   "Reduce moartea subită la 40% pe an",
   "Nu poate avea sondă atrială, ci doar ventriculară"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "A îmbunătățit supraviețuirea în trialul AVID (antiaritmice versus ICD) — Corect: AVID a demonstrat beneficiu de supraviețuire.\n\nAre baterie de litiu pentru circa 100 de șocuri de 30 J — Corect: Circa 100 de șocuri de 30 J sunt cifrele din text.\n\nȘocurile sunt nedureroase dacă pacientul este conștient — Incorect: Șocurile sunt dureroase la conștient; overdrive-ul este nedureros.\n\nReduce moartea subită la 40% pe an — Incorect: Rata MSC scade la 2% pe an; 40% este mortalitatea în primul an fără strategie adecvată.\n\nNu poate avea sondă atrială, ci doar ventriculară — Incorect: Dispozitivele moderne pot avea sonde în AD și VD.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1068, ICD — AVID, energie și durere (pagini PDF: 229).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1068
   ],
   "pdfPages": [
    229
   ],
   "section": "ICD — AVID, energie și durere"
  },
  "learningObjective": "Reținerea AVID, a celor 100 de șocuri de 30 J și a caracterului dureros al șocului la conștient.",
  "optionRationales": [
   "AVID a demonstrat beneficiu de supraviețuire.",
   "Circa 100 de șocuri de 30 J sunt cifrele din text.",
   "Șocurile sunt dureroase la conștient; overdrive-ul este nedureros.",
   "Rata MSC scade la 2% pe an; 40% este mortalitatea în primul an fără strategie adecvată.",
   "Dispozitivele moderne pot avea sonde în AD și VD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă MSC sub ICD de la 2% la 40% pe an — tocmai mortalitatea netratată din primul an."
  },
  "textbookExpressions": [
   "100 şocuri",
   "30 J"
  ]
 },
 {
  "id": "cardiologie-adv-145",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Dincolo de cifrele de incidență deja cunoscute, insuficiența cardiacă:",
  "options": [
   "Este cauza principală de spitalizare după vârsta de 65 de ani",
   "Costul managementului în Marea Britanie depășește 1 miliard de lire sterline pe an",
   "Printre cauzele „alte” se numără trastuzumab/imatinib, circulația hiperdinamică (anemie, tireotoxicoză, Paget) și bolile pericardice",
   "În Occident, cauza dominantă rămâne boala reumatică",
   "Prognosticul s-a înrăutățit în ultimii 10 ani, mortalitatea la 5 ani fiind sub 5%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este cauza principală de spitalizare după vârsta de 65 de ani — Corect: Textul: cauza principală de spitalizare după 65 de ani.\n\nCostul managementului în Marea Britanie depășește 1 miliard de lire sterline pe an — Corect: Costul depășește 1 miliard de lire/an.\n\nPrintre cauzele „alte” se numără trastuzumab/imatinib, circulația hiperdinamică (anemie, tireotoxicoză, Paget) și bolile pericardice — Corect: Cadranul 30.20 include chimioterapia, stările hiperdinamice și pericardul.\n\nÎn Occident, cauza dominantă rămâne boala reumatică — Incorect: În țările occidentale cauza cea mai frecventă este boala coronariană.\n\nPrognosticul s-a înrăutățit în ultimii 10 ani, mortalitatea la 5 ani fiind sub 5% — Incorect: Prognosticul s-a îmbunătățit; mortalitatea la 5 ani rămâne circa 50%, nu sub 5%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1069, Insuficiența cardiacă — Spitalizări, cost și cauze rare (pagini PDF: 230).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1069
   ],
   "pdfPages": [
    230
   ],
   "section": "Insuficiența cardiacă — Spitalizări, cost și cauze rare"
  },
  "learningObjective": "Completarea epidemiologiei cu spitalizarea post-65 de ani, costul >1 miliard și etiologiile chimioterapice/hiperdinamice.",
  "optionRationales": [
   "Textul: cauza principală de spitalizare după 65 de ani.",
   "Costul depășește 1 miliard de lire/an.",
   "Cadranul 30.20 include chimioterapia, stările hiperdinamice și pericardul.",
   "În țările occidentale cauza cea mai frecventă este boala coronariană.",
   "Prognosticul s-a îmbunătățit; mortalitatea la 5 ani rămâne circa 50%, nu sub 5%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Repune reumatismul ca etiologie occidentală dominantă și comprimă mortalitatea la 5 ani de la 50% la 5%."
  },
  "textbookExpressions": [
   "1 miliard",
   "trastuzumab"
  ]
 },
 {
  "id": "cardiologie-adv-146",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Adaptările hemodinamice din insuficiența cardiacă severă:",
  "options": [
   "Redistribuția sângelui menține perfuzia inimii, creierului și rinichilor, în detrimentul tegumentelor și mușchilor",
   "Creșterea postsarcinii crește debitul și micșorează volumul telediastolic",
   "Activarea simpatică cronică este un mecanism pur protector, fără down-regulation de receptori-β",
   "În forma foarte severă, debitul scade și în repaus, deși presiunile venoase sunt mari",
   "În disfuncție ușoară, debitul de repaus se poate menține prin creșterea presiunii venoase"
  ],
  "correct": [
   0,
   3,
   4
  ],
  "explanation": "Redistribuția sângelui menține perfuzia inimii, creierului și rinichilor, în detrimentul tegumentelor și mușchilor — Corect: Redistribuția inimă–creier–rinichi versus tegumente/mușchi este explicită.\n\nCreșterea postsarcinii crește debitul și micșorează volumul telediastolic — Incorect: Postsarcina crescută scade debitul, crește VTD și dilată VS, mărind și mai mult postsarcina.\n\nActivarea simpatică cronică este un mecanism pur protector, fără down-regulation de receptori-β — Incorect: Activarea simpatică cronică este nocivă (neurohormoni, apoptoză) și e compensată prin down-regulation.\n\nÎn forma foarte severă, debitul scade și în repaus, deși presiunile venoase sunt mari — Corect: În IC foarte severă debitul scade și în repaus.\n\nÎn disfuncție ușoară, debitul de repaus se poate menține prin creșterea presiunii venoase — Corect: Disfuncția ușoară menține debitul prin creșterea presiunii venoase.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1070, Insuficiența cardiacă — Redistribuție și postsarcină (pagini PDF: 231).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1070
   ],
   "pdfPages": [
    231
   ],
   "section": "Insuficiența cardiacă — Redistribuție și postsarcină"
  },
  "learningObjective": "Recunoașterea redistribuției spre organele vitale și a menținerii debitului de repaus prin presiune venoasă în disfuncția ușoară.",
  "optionRationales": [
   "Redistribuția inimă–creier–rinichi versus tegumente/mușchi este explicită.",
   "Postsarcina crescută scade debitul, crește VTD și dilată VS, mărind și mai mult postsarcina.",
   "Activarea simpatică cronică este nocivă (neurohormoni, apoptoză) și e compensată prin down-regulation.",
   "În IC foarte severă debitul scade și în repaus.",
   "Disfuncția ușoară menține debitul prin creșterea presiunii venoase."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Prezintă hiperpostsarcina ca un mecanism care crește debitul, inversând cercul vicios Laplace."
  },
  "textbookExpressions": [
   "inimii, creierului şi rinichilor",
   "tegumentelor şi muşchilor"
  ]
 },
 {
  "id": "cardiologie-adv-147",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Funcția endotelială și hormonul antidiuretic în insuficiența cardiacă:",
  "options": [
   "Vasodilatația dependentă de endoteliu este afectată în vasele periferice și poate contribui la scăderea toleranței la efort",
   "Endotelina plasmatică este crescută și se corelează cu severitatea hemodinamică; antagoniștii de ET i.v. ameliorează acut tulburările hemodinamice",
   "ADH crește în IC cronică severă, mai ales sub diuretice; hiponatremia precipitată este un indicator prognostic nefavorabil",
   "Oxidul nitric este în exces și explică vasodilatația de efort",
   "CNP este secretat predominant de ventriculi, identic BNP"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Vasodilatația dependentă de endoteliu este afectată în vasele periferice și poate contribui la scăderea toleranței la efort — Corect: Textul leagă disfuncția endotelială de toleranța scăzută la efort.\n\nEndotelina plasmatică este crescută și se corelează cu severitatea hemodinamică; antagoniștii de ET i.v. ameliorează acut tulburările hemodinamice — Corect: ET crescută, corelația hemodinamică și efectul acut al antagoniștilor sunt descrise.\n\nADH crește în IC cronică severă, mai ales sub diuretice; hiponatremia precipitată este un indicator prognostic nefavorabil — Corect: ADH crescut sub diuretice și hiponatremia ca prognostic nefavorabil sunt explicite.\n\nOxidul nitric este în exces și explică vasodilatația de efort — Incorect: Activitatea NO este insuficientă, nu în exces.\n\nCNP este secretat predominant de ventriculi, identic BNP — Incorect: CNP este limitat la endoteliu și SNC, nu este echivalentul ventricular al BNP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1071, Insuficiența cardiacă — Endotelină și ADH (pagini PDF: 232).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1071
   ],
   "pdfPages": [
    232
   ],
   "section": "Insuficiența cardiacă — Endotelină și ADH"
  },
  "learningObjective": "Legarea disfuncției endoteliale și a ET crescute de hiponatremia prin ADH ca marker nefavorabil.",
  "optionRationales": [
   "Textul leagă disfuncția endotelială de toleranța scăzută la efort.",
   "ET crescută, corelația hemodinamică și efectul acut al antagoniștilor sunt descrise.",
   "ADH crescut sub diuretice și hiponatremia ca prognostic nefavorabil sunt explicite.",
   "Activitatea NO este insuficientă, nu în exces.",
   "CNP este limitat la endoteliu și SNC, nu este echivalentul ventricular al BNP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune NO-ul — descris ca insuficient — în exces și mută CNP-ul în ventricul."
  },
  "textbookExpressions": [
   "endotelina",
   "Hormonul antidiuretic"
  ]
 },
 {
  "id": "cardiologie-adv-148",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Investigațiile imagistice în insuficiența cardiacă includ:",
  "options": [
   "Radiografia, care nu evaluează liniile Kerley B sau redistribuția către lobii superiori",
   "Ecocardiografia de stres cu dobutamină, care identifică rezerva contractilă a miocardului siderat sau hibernant",
   "Biopsia endomiocardică de primă linie la toți pacienții cu HFpEF",
   "IRM-ul pentru structură, funcție și viabilitate (dobutamină sau gadoliniu tardiv, „imagistica de infarct”)",
   "Cateterismul, care nu măsoară presiunea capilară pulmonară blocată"
  ],
  "correct": [
   1,
   3
  ],
  "explanation": "Radiografia, care nu evaluează liniile Kerley B sau redistribuția către lobii superiori — Incorect: Radiografia evaluează tocmai cardiomegalia, redistribuția, scizurile, Kerley B și edemul.\n\nEcocardiografia de stres cu dobutamină, care identifică rezerva contractilă a miocardului siderat sau hibernant — Corect: Eco de stres cu dobutamină: rezervă contractilă a sideratului/hibernantului.\n\nBiopsia endomiocardică de primă linie la toți pacienții cu HFpEF — Incorect: Biopsia este pentru amiloidoză și rejet de graft, nu screening HFpEF.\n\nIRM-ul pentru structură, funcție și viabilitate (dobutamină sau gadoliniu tardiv, „imagistica de infarct”) — Corect: IRM-ul cu cele două tehnici de viabilitate este descris.\n\nCateterismul, care nu măsoară presiunea capilară pulmonară blocată — Incorect: Cateterismul măsoară PAP, presiunea atrială stângă (capilară blocată) și PTDVS.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1072, Insuficiența cardiacă — Investigații (eco de stres, IRM) (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1072
   ],
   "pdfPages": [
    233
   ],
   "section": "Insuficiența cardiacă — Investigații (eco de stres, IRM)"
  },
  "learningObjective": "Rolul dobutaminei pentru rezerva contractilă și al IRM cu gadoliniu tardiv ca „imagistică de infarct”.",
  "optionRationales": [
   "Radiografia evaluează tocmai cardiomegalia, redistribuția, scizurile, Kerley B și edemul.",
   "Eco de stres cu dobutamină: rezervă contractilă a sideratului/hibernantului.",
   "Biopsia este pentru amiloidoză și rejet de graft, nu screening HFpEF.",
   "IRM-ul cu cele două tehnici de viabilitate este descris.",
   "Cateterismul măsoară PAP, presiunea atrială stângă (capilară blocată) și PTDVS."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează liniile Kerley B — semn radiologic clasic de IC — și promovează biopsia ca screening HFpEF."
  },
  "textbookExpressions": [
   "Kerley B",
   "imagistica de infarct"
  ]
 },
 {
  "id": "cardiologie-adv-149",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Recomandările privind stilul de viață în insuficiența cardiacă cronică includ:",
  "options": [
   "Restricție de sare; în forma severă, reducerea aportului de lichide și cântărire zilnică",
   "Exerciții de anduranță de nivel scăzut (20-30 min de mers 3-5×/săptămână sau 20 min de bicicletă la 70-80% din FCmax, 5×/săptămână); efortul izometric intens se evită",
   "Vaccinare împotriva infecției pneumococice și a gripei",
   "În Marea Britanie, pacienții cu IC simptomatică sau FEVS <40% au interdicție de a conduce camioane mari și autobuze",
   "Nitrații se asociază de rutină cu sildenafil, pentru a crește toleranța la efort"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Restricție de sare; în forma severă, reducerea aportului de lichide și cântărire zilnică — Corect: Restricția de sare/lichide și cântărirea zilnică sunt explicite.\n\nExerciții de anduranță de nivel scăzut (20-30 min de mers 3-5×/săptămână sau 20 min de bicicletă la 70-80% din FCmax, 5×/săptămână); efortul izometric intens se evită — Corect: Protocolul de anduranță și interdicția efortului izometric sunt din text.\n\nVaccinare împotriva infecției pneumococice și a gripei — Corect: Vaccinarea pneumococică și gripală este recomandată.\n\nÎn Marea Britanie, pacienții cu IC simptomatică sau FEVS <40% au interdicție de a conduce camioane mari și autobuze — Corect: Interdicția UK pentru camioane/autobuze la simptome sau FEVS <40% este citată.\n\nNitrații se asociază de rutină cu sildenafil, pentru a crește toleranța la efort — Incorect: Nitrații plus inhibitori PDE5 pot induce hipotensiune severă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1073, Insuficiența cardiacă — Stil de viață, vaccin și condus (pagini PDF: 234).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1073
   ],
   "pdfPages": [
    234
   ],
   "section": "Insuficiența cardiacă — Stil de viață, vaccin și condus"
  },
  "learningObjective": "Aplicarea ferestrelor de antrenament, a vaccinării și a pragului FEVS <40% pentru vehicule grele.",
  "optionRationales": [
   "Restricția de sare/lichide și cântărirea zilnică sunt explicite.",
   "Protocolul de anduranță și interdicția efortului izometric sunt din text.",
   "Vaccinarea pneumococică și gripală este recomandată.",
   "Interdicția UK pentru camioane/autobuze la simptome sau FEVS <40% este citată.",
   "Nitrații plus inhibitori PDE5 pot induce hipotensiune severă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Asociază nitrații cu sildenafil — combinație pe care textul o interzice din cauza hipotensiunii."
  },
  "textbookExpressions": [
   "20-30 min",
   "FEVS mai mică de 40%"
  ]
 },
 {
  "id": "cardiologie-adv-150",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "La testul de efort cardiopulmonar din insuficiența cardiacă, consumul maxim de oxigen (VO2) este:",
  "options": [
   "Fără valoare prognostică",
   "Util doar pentru diagnosticul de astm",
   "Un substitut al radiografiei toracice",
   "O indicație de a opri diureticele",
   "Predictiv pentru spitalizări și mortalitate; testul de mers de 6 minute este o alternativă"
  ],
  "correct": [
   4
  ],
  "explanation": "Fără valoare prognostică — Incorect: VO2 este predictiv, nu lipsit de valoare.\n\nUtil doar pentru diagnosticul de astm — Incorect: Nu este un test de astm.\n\nUn substitut al radiografiei toracice — Incorect: Nu înlocuiește radiografia.\n\nO indicație de a opri diureticele — Incorect: Nu ghidează oprirea diureticelor.\n\nPredictiv pentru spitalizări și mortalitate; testul de mers de 6 minute este o alternativă — Corect: Textul: VO2 predictiv pentru spitalizări și mortalitate; 6 minute ca alternativă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1073, Insuficiența cardiacă — VO2 și testul de 6 minute (pagini PDF: 234).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1073
   ],
   "pdfPages": [
    234
   ],
   "section": "Insuficiența cardiacă — VO2 și testul de 6 minute"
  },
  "learningObjective": "Reținerea valorii prognostice a VO2 și a testului de 6 minute ca alternativă.",
  "optionRationales": [
   "VO2 este predictiv, nu lipsit de valoare.",
   "Nu este un test de astm.",
   "Nu înlocuiește radiografia.",
   "Nu ghidează oprirea diureticelor.",
   "Textul: VO2 predictiv pentru spitalizări și mortalitate; 6 minute ca alternativă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă valoarea prognostică a VO2, deși textul o leagă explicit de spitalizări și mortalitate."
  },
  "textbookExpressions": [
   "V02",
   "6 minute"
  ]
 },
 {
  "id": "cardiologie-adv-151",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Din Cadranul 30.25, dozele și precauțiile relevante includ:",
  "options": [
   "Ramipril 1,25-2,5 mg/zi inițial, maxim 10 mg/zi; prudență dacă creatinina >250 µmol/L sau TAS <90 mmHg",
   "Sacubitril/valsartan: oprirea IECA cu 3 zile înainte; ARA se opresc în ziua administrării",
   "Bisoprolol 1,25 mg → 10 mg/zi; de evitat în IC acută până la stabilizare cardiovasculară",
   "Digoxinul se crește peste 2,5 mg/zi de rutină când eRFG <30 ml/min/1,73 m²",
   "Metolazona este interzisă în IC severă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ramipril 1,25-2,5 mg/zi inițial, maxim 10 mg/zi; prudență dacă creatinina >250 µmol/L sau TAS <90 mmHg — Corect: Dozele de ramipril și pragurile de prudență sunt din tabel.\n\nSacubitril/valsartan: oprirea IECA cu 3 zile înainte; ARA se opresc în ziua administrării — Corect: Wash-out-ul IECA 3 zile și oprirea ARA în ziua ARNI sunt explicite.\n\nBisoprolol 1,25 mg → 10 mg/zi; de evitat în IC acută până la stabilizare cardiovasculară — Corect: Bisoprololul și precauția din acut sunt listate.\n\nDigoxinul se crește peste 2,5 mg/zi de rutină când eRFG <30 ml/min/1,73 m² — Incorect: Peste 2,5 mg/zi de digoxin sunt rar necesare; eficiența scade la eRFG <30.\n\nMetolazona este interzisă în IC severă — Incorect: Metolazona se folosește în IC severă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1074, Insuficiența cardiacă — Cadranul 30.25 (doze) (pagini PDF: 235).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1074
   ],
   "pdfPages": [
    235
   ],
   "section": "Insuficiența cardiacă — Cadranul 30.25 (doze)"
  },
  "learningObjective": "Aplicarea treptelor ramipril/bisoprolol, a ferestrei de 3 zile IECA→ARNI și a pragului de creatinină 250 µmol/L.",
  "optionRationales": [
   "Dozele de ramipril și pragurile de prudență sunt din tabel.",
   "Wash-out-ul IECA 3 zile și oprirea ARA în ziua ARNI sunt explicite.",
   "Bisoprololul și precauția din acut sunt listate.",
   "Peste 2,5 mg/zi de digoxin sunt rar necesare; eficiența scade la eRFG <30.",
   "Metolazona se folosește în IC severă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Crește digoxinul peste 2,5 mg tocmai la eRFG <30, unde tabelul cere prudență și doze mici."
  },
  "textbookExpressions": [
   "3 zile înainte",
   "250 µmol/L"
  ]
 },
 {
  "id": "cardiologie-adv-152",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Nebivololul, în insuficiența cardiacă, se utilizează:",
  "options": [
   "În forma stabilă, ușoară sau moderată, la pacienți cu vârsta peste 70 de ani",
   "Ca substitut al diureticelor de ansă la tineri",
   "Doar în NYHA IV refractar, în locul transplantului",
   "Intravenos, ca inotrop de primă linie în FA rapidă",
   "Fiind contraindicat peste 70 de ani"
  ],
  "correct": [
   0
  ],
  "explanation": "În forma stabilă, ușoară sau moderată, la pacienți cu vârsta peste 70 de ani — Corect: Textul delimitează exact această populație.\n\nCa substitut al diureticelor de ansă la tineri — Incorect: Nu înlocuiește diureticele.\n\nDoar în NYHA IV refractar, în locul transplantului — Incorect: Nu este alternativa transplantului în NYHA IV.\n\nIntravenos, ca inotrop de primă linie în FA rapidă — Incorect: Nu este inotrop i.v. pentru FA.\n\nFiind contraindicat peste 70 de ani — Incorect: Indicația citată este tocmai peste 70 de ani, nu contraindicația.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1074, Insuficiența cardiacă — Nebivolol (pagini PDF: 235).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1074
   ],
   "pdfPages": [
    235
   ],
   "section": "Insuficiența cardiacă — Nebivolol"
  },
  "learningObjective": "Reținerea nișei nebivololului: IC stabilă ușoară/moderată la >70 de ani.",
  "optionRationales": [
   "Textul delimitează exact această populație.",
   "Nu înlocuiește diureticele.",
   "Nu este alternativa transplantului în NYHA IV.",
   "Nu este inotrop i.v. pentru FA.",
   "Indicația citată este tocmai peste 70 de ani, nu contraindicația."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează nișa de vârstă: din indicație la >70 de ani în contraindicație."
  },
  "textbookExpressions": [
   "peste 70 de ani",
   "Nebivololul"
  ]
 },
 {
  "id": "cardiologie-adv-153",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Miocardul hibernant se deosebește de cel siderat prin:",
  "options": [
   "Hibernant: disfuncție reversibilă prin boală coronariană cronică, viabil la stres inotrop, recuperare după revascularizare",
   "Siderat: disfuncție reversibilă care persistă după un episod de ischemie, deși fluxul a revenit la normal (mismatch flux-funcție)",
   "Hibernarea este consecința necrozei transmurale ireversibile",
   "Hibernarea rezultă din episoade repetate de siderare, de exemplu la efort repetat",
   "Sideratul contraindică revascularizarea, fiind echivalent cicatricii"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Hibernant: disfuncție reversibilă prin boală coronariană cronică, viabil la stres inotrop, recuperare după revascularizare — Corect: Definiția hibernantului este explicită.\n\nSiderat: disfuncție reversibilă care persistă după un episod de ischemie, deși fluxul a revenit la normal (mismatch flux-funcție) — Corect: Sideratul este mismatch-ul flux-funcție după ischemie.\n\nHibernarea este consecința necrozei transmurale ireversibile — Incorect: Necroza/cicatricea nu se tratează; hibernantul și sideratul răspund la revascularizare.\n\nHibernarea rezultă din episoade repetate de siderare, de exemplu la efort repetat — Corect: Textul leagă hibernarea de episoade repetate de siderare.\n\nSideratul contraindică revascularizarea, fiind echivalent cicatricii — Incorect: Ambele entități justifică revascularizarea, spre deosebire de cicatrice.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1075, Miocard hibernant versus siderat (pagini PDF: 236).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1075
   ],
   "pdfPages": [
    236
   ],
   "section": "Miocard hibernant versus siderat"
  },
  "learningObjective": "Contrastul hipoperfuziei cronice viabile (hibernant) versus mismatch-ul post-ischemic cu flux restabilit (siderat).",
  "optionRationales": [
   "Definiția hibernantului este explicită.",
   "Sideratul este mismatch-ul flux-funcție după ischemie.",
   "Necroza/cicatricea nu se tratează; hibernantul și sideratul răspund la revascularizare.",
   "Textul leagă hibernarea de episoade repetate de siderare.",
   "Ambele entități justifică revascularizarea, spre deosebire de cicatrice."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Echivalează hibernarea cu necroza ireversibilă, inversând tocmai rațiunea revascularizării."
  },
  "textbookExpressions": [
   "Miocardul siderat",
   "mismatch"
  ]
 },
 {
  "id": "cardiologie-adv-154",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Revascularizarea chirurgicală la pacientul cu angină și disfuncție de ventricul stâng:",
  "options": [
   "Are mortalitate perioperatorie sub 0,1%",
   "Se asociază cu mortalitate chirurgicală 10-20%, dar acești pacienți au cel mai mult de câștigat ulterior (simptome și prognostic)",
   "Decizia ține cont de simptome, vârstă, comorbidități și de dovada ischemiei reversibile",
   "Rolul revascularizării în IC este pe deplin clarificat, fără incertitudini",
   "Inotropele i.v. reduc mortalitatea pe termen lung față de placebo"
  ],
  "correct": [
   1,
   2
  ],
  "explanation": "Are mortalitate perioperatorie sub 0,1% — Incorect: 0,1% subestimează net riscul citat.\n\nSe asociază cu mortalitate chirurgicală 10-20%, dar acești pacienți au cel mai mult de câștigat ulterior (simptome și prognostic) — Corect: Cifrele 10-20% și beneficiul ulterior sunt explicite.\n\nDecizia ține cont de simptome, vârstă, comorbidități și de dovada ischemiei reversibile — Corect: Factorii de decizie sunt listați.\n\nRolul revascularizării în IC este pe deplin clarificat, fără incertitudini — Incorect: Textul spune că rolul revascularizării în IC nu este clarificat.\n\nInotropele i.v. reduc mortalitatea pe termen lung față de placebo — Incorect: Inotropele ameliorează hemodinamica, dar nu s-a dovedit că scad mortalitatea pe termen lung.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1075, Insuficiența cardiacă — Revascularizare la disfuncție de VS (pagini PDF: 236).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1075
   ],
   "pdfPages": [
    236
   ],
   "section": "Insuficiența cardiacă — Revascularizare la disfuncție de VS"
  },
  "learningObjective": "Reținerea paradoxului 10-20% mortalitate chirurgicală versus cel mai mare câștig ulterior.",
  "optionRationales": [
   "0,1% subestimează net riscul citat.",
   "Cifrele 10-20% și beneficiul ulterior sunt explicite.",
   "Factorii de decizie sunt listați.",
   "Textul spune că rolul revascularizării în IC nu este clarificat.",
   "Inotropele ameliorează hemodinamica, dar nu s-a dovedit că scad mortalitatea pe termen lung."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Comprimă mortalitatea chirurgicală de la 10-20% la 0,1% și atribuie inotropelor un beneficiu de supraviețuire nedovedit."
  },
  "textbookExpressions": [
   "10-20%",
   "Miocardul „hibernant"
  ]
 },
 {
  "id": "cardiologie-adv-155",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Complicațiile și limitele transplantului cardiac includ:",
  "options": [
   "Infecții tardive (2-6 luni) cu germeni oportuniști (toxoplasmoză, CMV, fungi, Pneumocystis)",
   "Vasculopatia de alogrefă la 30-50% dintre pacienți la 5 ani, principală cauză de eșec tardiv al grefei",
   "Contraindicații: vârstă >60 de ani (variază între centre), rezistențe vasculare pulmonare crescute, cancer activ",
   "Denervarea scade frecvența de repaus și crește variabilitatea tensională diurnă",
   "NYHA IV în stadiu final este indicația preferată de ICD izolat, fără CRT"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Infecții tardive (2-6 luni) cu germeni oportuniști (toxoplasmoză, CMV, fungi, Pneumocystis) — Corect: Cadranul 30.26: oportuniștii în lunile 2-6.\n\nVasculopatia de alogrefă la 30-50% dintre pacienți la 5 ani, principală cauză de eșec tardiv al grefei — Corect: 30-50% la 5 ani, cauză principală de eșec tardiv.\n\nContraindicații: vârstă >60 de ani (variază între centre), rezistențe vasculare pulmonare crescute, cancer activ — Corect: Cadranul 30.27 include vârsta >60, RVP și cancerul.\n\nDenervarea scade frecvența de repaus și crește variabilitatea tensională diurnă — Incorect: Denervarea crește frecvența de repaus și pierde variabilitatea TA diurne.\n\nNYHA IV în stadiu final este indicația preferată de ICD izolat, fără CRT — Incorect: NYHA IV terminal nu este, în general, candidat la ICD.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1076, Transplant cardiac — Infecții, vasculopatie, contraindicații (pagini PDF: 237).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1076
   ],
   "pdfPages": [
    237
   ],
   "section": "Transplant cardiac — Infecții, vasculopatie, contraindicații"
  },
  "learningObjective": "Memorarea ferestrei 2-6 luni a oportuniștilor și a vasculopatiei 30-50% la 5 ani.",
  "optionRationales": [
   "Cadranul 30.26: oportuniștii în lunile 2-6.",
   "30-50% la 5 ani, cauză principală de eșec tardiv.",
   "Cadranul 30.27 include vârsta >60, RVP și cancerul.",
   "Denervarea crește frecvența de repaus și pierde variabilitatea TA diurne.",
   "NYHA IV terminal nu este, în general, candidat la ICD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează efectele denervării (tahicardie de repaus, pierderea variației diurne) și promovează ICD-ul în NYHA IV terminal."
  },
  "textbookExpressions": [
   "30-50%",
   "2-6 luni"
  ]
 },
 {
  "id": "cardiologie-adv-156",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Sindroamele clinice din Cadranul 30.28 (ICA) includ:",
  "options": [
   "ICA hipertensivă: tensiune crescută, funcție de VS păstrată, edem pulmonar radiologic",
   "Șoc cardiogen: TAS <90 mmHg, diureză <0,5 ml/kg pe oră, frecvență >60 b.p.m.",
   "Insuficiență cardiacă dreaptă: debit scăzut, PVJ crescută, hepatomegalie, hipotensiune",
   "Edem pulmonar acut: saturație >98% în aerul atmosferic, fără raluri",
   "IC cu debit crescut: periferie caldă, congestie pulmonară, tensiune posibil scăzută (ex. șoc septic)"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "ICA hipertensivă: tensiune crescută, funcție de VS păstrată, edem pulmonar radiologic — Corect: Definiția ICA hipertensive este din tabel.\n\nȘoc cardiogen: TAS <90 mmHg, diureză <0,5 ml/kg pe oră, frecvență >60 b.p.m. — Corect: Pragurile de șoc sunt cele din cadran.\n\nInsuficiență cardiacă dreaptă: debit scăzut, PVJ crescută, hepatomegalie, hipotensiune — Corect: IC dreaptă are acest tablou de congestie sistemică.\n\nEdem pulmonar acut: saturație >98% în aerul atmosferic, fără raluri — Incorect: Edemul pulmonar acut: tahipnee, ortopnee, raluri, saturație <90%, nu >98% fără raluri.\n\nIC cu debit crescut: periferie caldă, congestie pulmonară, tensiune posibil scăzută (ex. șoc septic) — Corect: Debitul crescut (periferie caldă, ex. septic) este listat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1077, Insuficiența cardiacă acută — Cadranul 30.28 (pagini PDF: 238).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1077
   ],
   "pdfPages": [
    238
   ],
   "section": "Insuficiența cardiacă acută — Cadranul 30.28"
  },
  "learningObjective": "Potrivirea celor patru fenotipuri (hipertensiv, șoc, drept, debit crescut) cu saturația <90% din edemul pulmonar.",
  "optionRationales": [
   "Definiția ICA hipertensive este din tabel.",
   "Pragurile de șoc sunt cele din cadran.",
   "IC dreaptă are acest tablou de congestie sistemică.",
   "Edemul pulmonar acut: tahipnee, ortopnee, raluri, saturație <90%, nu >98% fără raluri.",
   "Debitul crescut (periferie caldă, ex. septic) este listat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Definește edemul pulmonar prin saturație >98% fără raluri, inversul cadranului (<90%, raluri, ortopnee)."
  },
  "textbookExpressions": [
   "<90 mmHg",
   "Periferie caldă"
  ]
 },
 {
  "id": "cardiologie-adv-157",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Doza inițială de furosemid intravenos menționată în terapia ICA este:",
  "options": [
   "5 mg, identic atenololului i.v.",
   "500 mg bolus unic, fără reevaluare",
   "1 mg subcutanat",
   "50 mg i.v.",
   "0,125 mg, ca digoxinul de întreținere"
  ],
  "correct": [
   3
  ],
  "explanation": "5 mg, identic atenololului i.v. — Incorect: 5 mg este doza de atenolol i.v. din SCA, nu de furosemid.\n\n500 mg bolus unic, fără reevaluare — Incorect: 500 mg depășește doza inițială citată.\n\n1 mg subcutanat — Incorect: Calea este i.v., nu s.c. 1 mg.\n\n50 mg i.v. — Corect: Textul: furosemid 50 mg i.v.\n\n0,125 mg, ca digoxinul de întreținere — Incorect: 0,125 mg este doza de digoxin, nu de diuretic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1077, Insuficiența cardiacă acută — Furosemid inițial (pagini PDF: 238).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1077
   ],
   "pdfPages": [
    238
   ],
   "section": "Insuficiența cardiacă acută — Furosemid inițial"
  },
  "learningObjective": "Reținerea bolusului de 50 mg i.v. de furosemid ca terapie inițială, alături de oxigen.",
  "optionRationales": [
   "5 mg este doza de atenolol i.v. din SCA, nu de furosemid.",
   "500 mg depășește doza inițială citată.",
   "Calea este i.v., nu s.c. 1 mg.",
   "Textul: furosemid 50 mg i.v.",
   "0,125 mg este doza de digoxin, nu de diuretic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă 50 mg furosemid cu 5 mg atenolol sau 0,125 mg digoxin, doze din același capitol."
  },
  "textbookExpressions": [
   "50 mg i.v.",
   "furosemid"
  ]
 },
 {
  "id": "cardiologie-adv-158",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Monitorizarea și vasodilatatoarele în insuficiența cardiacă acută:",
  "options": [
   "Anticoagularea profilactică cu heparină cu masă moleculară mică este necesară",
   "Nitrații i.v. (gliceril trinitrat 10-200 µg/min) cer monitorizare atentă a tensiunii, de exemplu în ischemie concomitentă sau hipertensiune severă",
   "Deteriorarea hemodinamică poate necesita linie arterială, cateter venos central și cateter de arteră pulmonară",
   "Gliceril trinitratul este de primă intenție la TAS <85 mmHg, înaintea inotropelor",
   "Ecocardiografia transtoracică se amână 7 zile, până după diuretic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Anticoagularea profilactică cu heparină cu masă moleculară mică este necesară — Corect: Textul: toți pacienții necesită HGMM profilactic.\n\nNitrații i.v. (gliceril trinitrat 10-200 µg/min) cer monitorizare atentă a tensiunii, de exemplu în ischemie concomitentă sau hipertensiune severă — Corect: Doza 10-200 µg/min și indicațiile (ischemie, HTA severă) sunt explicite.\n\nDeteriorarea hemodinamică poate necesita linie arterială, cateter venos central și cateter de arteră pulmonară — Corect: Cele trei linii de monitorizare invazivă sunt listate.\n\nGliceril trinitratul este de primă intenție la TAS <85 mmHg, înaintea inotropelor — Incorect: La TAS <85 mmHg algoritmul indică inotrope/vasopresoare, nu nitratul ca primă intenție.\n\nEcocardiografia transtoracică se amână 7 zile, până după diuretic — Incorect: ETT trebuie efectuată fără întârziere.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1077, ICA — HGMM, GTN și monitorizare invazivă (pagini PDF: 238).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1077
   ],
   "pdfPages": [
    238
   ],
   "section": "ICA — HGMM, GTN și monitorizare invazivă"
  },
  "learningObjective": "Aplicarea ferestrei GTN 10-200 µg/min și a anticoagulației profilactice, nu a nitratului la TAS <85 mmHg.",
  "optionRationales": [
   "Textul: toți pacienții necesită HGMM profilactic.",
   "Doza 10-200 µg/min și indicațiile (ischemie, HTA severă) sunt explicite.",
   "Cele trei linii de monitorizare invazivă sunt listate.",
   "La TAS <85 mmHg algoritmul indică inotrope/vasopresoare, nu nitratul ca primă intenție.",
   "ETT trebuie efectuată fără întârziere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune nitratul ca primă linie la TAS <85 mmHg — pragul la care textul trece pe inotrope/vasopresoare."
  },
  "textbookExpressions": [
   "10-200 µg/min",
   "heparină cu greutate mole"
  ]
 },
 {
  "id": "cardiologie-adv-159",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Terapia inițială din Cadranul 30.29 (ICA) include:",
  "options": [
   "Oxigen inspirat în concentrație de 35-50%",
   "Morfină 2,5-5,0 mg i.v., cu metoclopramid 10 mg i.v.",
   "Enoxaparină 1 mg/kg s.c. ×2/zi în SCA sau 40 mg s.c. zilnic profilactic",
   "Dopamina în doză mare (<2 µg/kg/min) ca prim inotrop în toate formele",
   "Oxigen 100% de rutină, fără NIPPV"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Oxigen inspirat în concentrație de 35-50% — Corect: Cadranul: oxigen inspirat 35-50%.\n\nMorfină 2,5-5,0 mg i.v., cu metoclopramid 10 mg i.v. — Corect: Doza de morfină și metoclopramidul sunt explicite.\n\nEnoxaparină 1 mg/kg s.c. ×2/zi în SCA sau 40 mg s.c. zilnic profilactic — Corect: Cele două scheme de enoxaparină (SCA vs profilaxie) sunt din tabel.\n\nDopamina în doză mare (<2 µg/kg/min) ca prim inotrop în toate formele — Incorect: Doza mare de dopamină este >5 µg/kg/min, nu <2 (doza mică).\n\nOxigen 100% de rutină, fără NIPPV — Incorect: NIPPV/CPAP figurează alături de oxigen, nu este exclusă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1078, Insuficiența cardiacă acută — Oxigen, morfină, HGMM (pagini PDF: 239).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1078
   ],
   "pdfPages": [
    239
   ],
   "section": "Insuficiența cardiacă acută — Oxigen, morfină, HGMM"
  },
  "learningObjective": "Aplicarea concentrației 35-50%, a morfinei cu antiemetic și a celor două doze de enoxaparină.",
  "optionRationales": [
   "Cadranul: oxigen inspirat 35-50%.",
   "Doza de morfină și metoclopramidul sunt explicite.",
   "Cele două scheme de enoxaparină (SCA vs profilaxie) sunt din tabel.",
   "Doza mare de dopamină este >5 µg/kg/min, nu <2 (doza mică).",
   "NIPPV/CPAP figurează alături de oxigen, nu este exclusă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează treptele de dopamină și impune oxigen 100% în locul ferestrei 35-50%."
  },
  "textbookExpressions": [
   "35-50%",
   "metoclopramid 10 mg"
  ]
 },
 {
  "id": "cardiologie-adv-160",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Dobutamina și dopamina în doze mari, în ICA:",
  "options": [
   "Dobutamina se titratează 2-20 µg/kg/min; pacienții sub beta-blocante pot necesita doze mari",
   "Dopamina în doză mare (>5 µg/kg/min) acționează ca vasopresor",
   "Milrinona: bolus 25-75 µg/kg în 10-20 min, apoi 0,375-0,75 µg/kg/min",
   "Dobutamina este contraindicată dacă pacientul primea beta-blocant cronic",
   "Dopamina >5 µg/kg/min este inotropul de elecție în SCA cu IC acută, înaintea oricărei alte măsuri"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Dobutamina se titratează 2-20 µg/kg/min; pacienții sub beta-blocante pot necesita doze mari — Corect: Dozele de dobutamină și mențiunea beta-blocantelor sunt din cadran.\n\nDopamina în doză mare (>5 µg/kg/min) acționează ca vasopresor — Corect: Doza mare de dopamină este vasopresoare.\n\nMilrinona: bolus 25-75 µg/kg în 10-20 min, apoi 0,375-0,75 µg/kg/min — Corect: Bolusul și perfuzia de milrinonă sunt listate.\n\nDobutamina este contraindicată dacă pacientul primea beta-blocant cronic — Incorect: Textul spune că sub beta-blocante pot fi necesare doze mari de dobutamină, nu că este contraindicată.\n\nDopamina >5 µg/kg/min este inotropul de elecție în SCA cu IC acută, înaintea oricărei alte măsuri — Incorect: Cadranul de IC acută evită digoxinul/inotropele ca primă linie în SCA; dopamina mare nu este elecția universală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1078, ICA — Doze de dobutamină, dopamină mare, milrinonă (pagini PDF: 239).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1078
   ],
   "pdfPages": [
    239
   ],
   "section": "ICA — Doze de dobutamină, dopamină mare, milrinonă"
  },
  "learningObjective": "Memorarea ferestrelor 2-20 (dobutamină) și >5 (dopamină vasopresoare) plus bolusul de milrinonă.",
  "optionRationales": [
   "Dozele de dobutamină și mențiunea beta-blocantelor sunt din cadran.",
   "Doza mare de dopamină este vasopresoare.",
   "Bolusul și perfuzia de milrinonă sunt listate.",
   "Textul spune că sub beta-blocante pot fi necesare doze mari de dobutamină, nu că este contraindicată.",
   "Cadranul de IC acută evită digoxinul/inotropele ca primă linie în SCA; dopamina mare nu este elecția universală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Interzice dobutamina la beta-blocant — tocmai situația în care tabelul cere doze mai mari."
  },
  "textbookExpressions": [
   "2-20 µg/kg pe min",
   ">5 µg/kg pe min"
  ]
 },
 {
  "id": "cardiologie-adv-161",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Fiziopatologia sindromului coronarian acut:",
  "options": [
   "Mecanismul comun este ruptura sau eroziunea capișonului fibros al plăcii",
   "Miez lipidic abundent și capișon fibros subțire se asociază cu risc crescut de ruptură",
   "Serotonina și tromboxanul A2 eliberate din plachete produc vasoconstricție și ischemie",
   "SCA se produce doar prin stenoză progresivă lentă, fără tromb",
   "Capișonul gros și miezul sărac în lipide sunt leziunile cele mai vulnerabile"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mecanismul comun este ruptura sau eroziunea capișonului fibros al plăcii — Corect: Ruptura/eroziunea capișonului este mecanismul comun.\n\nMiez lipidic abundent și capișon fibros subțire se asociază cu risc crescut de ruptură — Corect: Asocierea miez lipidic + capișon subțire este explicită.\n\nSerotonina și tromboxanul A2 eliberate din plachete produc vasoconstricție și ischemie — Corect: Serotonina și TxA2 reduc fluxul coronarian.\n\nSCA se produce doar prin stenoză progresivă lentă, fără tromb — Incorect: Tromb local, vasoconstricție și embolizare distală sunt descrise, nu doar stenoza lentă.\n\nCapișonul gros și miezul sărac în lipide sunt leziunile cele mai vulnerabile — Incorect: Vulnerabile sunt tocmai leziunile cu capișon subțire și miez lipidic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1080, 1085, SCA — Placa vulnerabilă și tromboxanul A2 (pagini PDF: 241, 246).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1080,
    1085
   ],
   "pdfPages": [
    241,
    246
   ],
   "section": "SCA — Placa vulnerabilă și tromboxanul A2"
  },
  "learningObjective": "Recunoașterea substratului (capișon subțire, miez lipidic) și a vasoconstricției prin serotonină/TxA2.",
  "optionRationales": [
   "Ruptura/eroziunea capișonului este mecanismul comun.",
   "Asocierea miez lipidic + capișon subțire este explicită.",
   "Serotonina și TxA2 reduc fluxul coronarian.",
   "Tromb local, vasoconstricție și embolizare distală sunt descrise, nu doar stenoza lentă.",
   "Vulnerabile sunt tocmai leziunile cu capișon subțire și miez lipidic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează morfologia plăcii vulnerabile (capișon subțire/miez lipidic versus capișon gros)."
  },
  "textbookExpressions": [
   "capişonului fibros",
   "tromboxanului A2"
  ]
 },
 {
  "id": "cardiologie-adv-162",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Modificările de stil de viață pentru prevenția bolii coronariene includ:",
  "options": [
   "Cel puțin 150 de minute de activitate aerobică moderată sau 75 de minute de intensitate crescută pe săptămână",
   "IMC <25 kg/m²; în UK, sub 14 măsuri de alcool pe săptămână, distribuite în ≥3 zile",
   "Cel puțin cinci porții de fructe și legume pe zi și două porții de pește pe săptămână",
   "Colesterol alimentar nelimitat, grăsimile saturate fiind preferate celor nesaturate",
   "Efortul fizic se evită complet după 45 de ani, pentru a proteja placa"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cel puțin 150 de minute de activitate aerobică moderată sau 75 de minute de intensitate crescută pe săptămână — Corect: Recomandarea de efort săptămânal este explicită.\n\nIMC <25 kg/m²; în UK, sub 14 măsuri de alcool pe săptămână, distribuite în ≥3 zile — Corect: IMC <25 și <14 măsuri de alcool în ≥3 zile sunt din text.\n\nCel puțin cinci porții de fructe și legume pe zi și două porții de pește pe săptămână — Corect: Porțiile de fructe/legume și pește sunt listate.\n\nColesterol alimentar nelimitat, grăsimile saturate fiind preferate celor nesaturate — Incorect: Colesterolul alimentar trebuie <300 mg/zi; saturatele se înlocuiesc cu nesaturate.\n\nEfortul fizic se evită complet după 45 de ani, pentru a proteja placa — Incorect: Efortul aerobic este recomandat, nu interzis.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1081, Boala coronariană — Stil de viață (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1081
   ],
   "pdfPages": [
    242
   ],
   "section": "Boala coronariană — Stil de viață"
  },
  "learningObjective": "Aplicarea ferestrelor 150/75 minute, IMC <25 și a pragului de 14 unități de alcool.",
  "optionRationales": [
   "Recomandarea de efort săptămânal este explicită.",
   "IMC <25 și <14 măsuri de alcool în ≥3 zile sunt din text.",
   "Porțiile de fructe/legume și pește sunt listate.",
   "Colesterolul alimentar trebuie <300 mg/zi; saturatele se înlocuiesc cu nesaturate.",
   "Efortul aerobic este recomandat, nu interzis."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Interzice efortul și preferă grăsimile saturate, inversul dietei și al protocolului de 150 de minute."
  },
  "textbookExpressions": [
   "150 minute",
   "<25 kg/m2"
  ]
 },
 {
  "id": "cardiologie-adv-163",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Conform NICE, angina atipică și cea instabilă se definesc astfel:",
  "options": [
   "Atipică: durere toracică cu numai 2 dintre cele 3 caracteristici ale anginei clasice",
   "Instabilă: debut recent (<24 de ore) sau agravare a anginei stabile, adesea în repaus, suprapusă definiției de SCA",
   "Non-anginoasă: toate cele trei caracteristici, identic formei clasice",
   "Clasică: o singură caracteristică din trei",
   "Instabilă înseamnă angină doar la efort intens, identic CCS I"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Atipică: durere toracică cu numai 2 dintre cele 3 caracteristici ale anginei clasice — Corect: NICE: atipică = 2 din 3.\n\nInstabilă: debut recent (<24 de ore) sau agravare a anginei stabile, adesea în repaus, suprapusă definiției de SCA — Corect: Instabilă: <24 de ore sau agravare, adesea în repaus.\n\nNon-anginoasă: toate cele trei caracteristici, identic formei clasice — Incorect: Non-anginoasă are o singură caracteristică din trei, nu pe toate trei.\n\nClasică: o singură caracteristică din trei — Incorect: Clasică are toate cele trei caracteristici.\n\nInstabilă înseamnă angină doar la efort intens, identic CCS I — Incorect: CCS I este angina la efort intens, fără limitare zilnică, nu instabilitatea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1081, Angina — Definiții NICE și forma instabilă (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1081
   ],
   "pdfPages": [
    242
   ],
   "section": "Angina — Definiții NICE și forma instabilă"
  },
  "learningObjective": "Diferențierea 3/3 (clasică), 2/3 (atipică), 1/3 (non-anginoasă) și a ferestrei <24 de ore a instabilei.",
  "optionRationales": [
   "NICE: atipică = 2 din 3.",
   "Instabilă: <24 de ore sau agravare, adesea în repaus.",
   "Non-anginoasă are o singură caracteristică din trei, nu pe toate trei.",
   "Clasică are toate cele trei caracteristici.",
   "CCS I este angina la efort intens, fără limitare zilnică, nu instabilitatea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Degradează angina clasică la un singur criteriu și confundă instabilitatea cu CCS I."
  },
  "textbookExpressions": [
   "<24 ore",
   "2 dintre cele 3"
  ]
 },
 {
  "id": "cardiologie-adv-164",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Parcursul diagnostic al durerii toracice fără boală coronariană cunoscută:",
  "options": [
   "Angina tipică sau atipică, ori durerea non-anginoasă cu modificări ST sau unde Q, se îndrumă la angio-CT coronarian multi-slice ≥64",
   "Dacă angio-CT este neconcludent, urmează teste funcționale neinvazive (SPECT, eco de stres, IRM de stres)",
   "Pacienții trebuie informați că prognosticul vital este bun (mortalitate anuală <2%)",
   "Durerea non-anginoasă cu ECG normal se îndrumă de primă intenție la PCI primară",
   "Examenul obiectiv este suficient, gerontoxonul și stenoza aortică fiind irelevante"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Angina tipică sau atipică, ori durerea non-anginoasă cu modificări ST sau unde Q, se îndrumă la angio-CT coronarian multi-slice ≥64 — Corect: Calea către angio-CT multi-slice ≥64 este explicită.\n\nDacă angio-CT este neconcludent, urmează teste funcționale neinvazive (SPECT, eco de stres, IRM de stres) — Corect: Testele funcționale urmează unui CT neconcludent.\n\nPacienții trebuie informați că prognosticul vital este bun (mortalitate anuală <2%) — Corect: Mortalitatea anuală <2% este mesajul de consiliere.\n\nDurerea non-anginoasă cu ECG normal se îndrumă de primă intenție la PCI primară — Incorect: Durerea non-anginoasă cu ECG normal se investighează pentru diagnostice alternative, nu PCI primară.\n\nExamenul obiectiv este suficient, gerontoxonul și stenoza aortică fiind irelevante — Incorect: Examenul caută anemie, hipertiroidism, gerontoxon/xantelasme și stenoză aortică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1082, Angina stabilă — Angio-CT și prognostic <2% (pagini PDF: 243).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1082
   ],
   "pdfPages": [
    243
   ],
   "section": "Angina stabilă — Angio-CT și prognostic <2%"
  },
  "learningObjective": "Algoritmul CT ≥64 slice-uri, apoi teste funcționale, plus mesajul de mortalitate anuală <2%.",
  "optionRationales": [
   "Calea către angio-CT multi-slice ≥64 este explicită.",
   "Testele funcționale urmează unui CT neconcludent.",
   "Mortalitatea anuală <2% este mesajul de consiliere.",
   "Durerea non-anginoasă cu ECG normal se investighează pentru diagnostice alternative, nu PCI primară.",
   "Examenul caută anemie, hipertiroidism, gerontoxon/xantelasme și stenoză aortică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Trimite durerea non-anginoasă cu ECG normal la PCI primară, sărind algoritmul NICE."
  },
  "textbookExpressions": [
   "64 slice",
   "<2%"
  ]
 },
 {
  "id": "cardiologie-adv-165",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "În algoritmul NICE al anginei stabile, după un beta-blocant sau un blocant de calciu nesusținut:",
  "options": [
   "Se poate trece pe nitrat cu acțiune prelungită, ivabradină, nicorandil sau ranolazină",
   "Dacă rămâne simptomatic, se asociază beta-blocant cu blocant de calciu",
   "Sub două antianginoase, se consideră revascularizarea",
   "Se începe de la început cu triple terapie plus GPIIb/IIIa de rutină",
   "Revascularizarea se rezervă doar anginei CCS I, fără a încerca un al doilea antianginos"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se poate trece pe nitrat cu acțiune prelungită, ivabradină, nicorandil sau ranolazină — Corect: Linia a doua include cele patru agenți.\n\nDacă rămâne simptomatic, se asociază beta-blocant cu blocant de calciu — Corect: Asocierea BB + BCC este pasul următor.\n\nSub două antianginoase, se consideră revascularizarea — Corect: Revascularizarea se consideră sub două antianginoase.\n\nSe începe de la început cu triple terapie plus GPIIb/IIIa de rutină — Incorect: GPIIb/IIIa nu apar în algoritmul anginei stabile.\n\nRevascularizarea se rezervă doar anginei CCS I, fără a încerca un al doilea antianginos — Incorect: Revascularizarea se discută la simptome persistente, nu la CCS I controlată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1082, 1083, Angina stabilă — Algoritmul Fig. 30.64 (pagini PDF: 243, 244).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1082,
    1083
   ],
   "pdfPages": [
    243,
    244
   ],
   "section": "Angina stabilă — Algoritmul Fig. 30.64"
  },
  "learningObjective": "Secvența: un antianginos → schimb sau asociere → două antianginoase → revascularizare.",
  "optionRationales": [
   "Linia a doua include cele patru agenți.",
   "Asocierea BB + BCC este pasul următor.",
   "Revascularizarea se consideră sub două antianginoase.",
   "GPIIb/IIIa nu apar în algoritmul anginei stabile.",
   "Revascularizarea se discută la simptome persistente, nu la CCS I controlată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Sare la triple+GPIIb/IIIa și rezervă revascularizarea clasei I, inversând Fig. 30.64."
  },
  "textbookExpressions": [
   "Nicorandil",
   "Ranolazină"
  ]
 },
 {
  "id": "cardiologie-adv-166",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Din Cadranul 30.33, particularitățile antianginoaselor de linia a doua includ:",
  "options": [
   "Nicorandilul este activator al canalelor de K+ sensibile la ATP, cu proprietăți de nitrat; poate da ulcerații orale",
   "Ranolazina (375-750 mg ×2/zi) inhibă canalele de Na+ din cardiomiocite, e metabolizată de CYP3A4 și poate prelungi QT",
   "Ivabradina poate produce fosfene și bradicardie; se folosește în ritm sinusal",
   "Verapamilul este de elecție în BAV II-III și în staza pulmonară",
   "Nitroglicerina sublinguală se asociază de rutină cu sildenafil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Nicorandilul este activator al canalelor de K+ sensibile la ATP, cu proprietăți de nitrat; poate da ulcerații orale — Corect: Mecanismul și ulcerațiile orale sunt din tabel.\n\nRanolazina (375-750 mg ×2/zi) inhibă canalele de Na+ din cardiomiocite, e metabolizată de CYP3A4 și poate prelungi QT — Corect: Doza, CYP3A4 și QT sunt explicite.\n\nIvabradina poate produce fosfene și bradicardie; se folosește în ritm sinusal — Corect: Fosfenele, bradicardia și folosirea în sinus sunt listate.\n\nVerapamilul este de elecție în BAV II-III și în staza pulmonară — Incorect: Verapamilul și diltiazemul sunt contraindicate în BAV II-III și în IVS cu stază.\n\nNitroglicerina sublinguală se asociază de rutină cu sildenafil — Incorect: Nitrații sunt contraindicate cu inhibitorii PDE5.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1083, Angina — Nicorandil, ranolazină, ivabradină (pagini PDF: 244).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1083
   ],
   "pdfPages": [
    244
   ],
   "section": "Angina — Nicorandil, ranolazină, ivabradină"
  },
  "learningObjective": "Recunoașterea ulcerațiilor orale (nicorandil), a ferestrei 375-750 mg și a fosfenelor ivabradinei.",
  "optionRationales": [
   "Mecanismul și ulcerațiile orale sunt din tabel.",
   "Doza, CYP3A4 și QT sunt explicite.",
   "Fosfenele, bradicardia și folosirea în sinus sunt listate.",
   "Verapamilul și diltiazemul sunt contraindicate în BAV II-III și în IVS cu stază.",
   "Nitrații sunt contraindicate cu inhibitorii PDE5."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune verapamilul pe BAV II-III — contraindicație de tabel — și asociază nitratul cu sildenafil."
  },
  "textbookExpressions": [
   "ulceraţii orale",
   "375-750 mg"
  ]
 },
 {
  "id": "cardiologie-adv-167",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Ținta de colesterol LDL cu atorvastatină 80 mg în angina stabilă, conform cadranului, este:",
  "options": [
   "<3,5 mmol/L",
   "<1,8 mmol/L",
   "<5,0 mmol/L, identic prevenției primare fără risc",
   "Nicio țintă, statinele fiind interzise în angină",
   "<0,5 mmol/L, prin ezetimib izolat"
  ],
  "correct": [
   1
  ],
  "explanation": "<3,5 mmol/L — Incorect: 3,5 mmol/L nu este ținta citată.\n\n<1,8 mmol/L — Corect: Cadranul: reducerea LDL la <1,8 mmol/L.\n\n<5,0 mmol/L, identic prevenției primare fără risc — Incorect: 5,0 mmol/L nu apare.\n\nNicio țintă, statinele fiind interzise în angină — Incorect: Statinele sunt fundamentul reducerii evenimentelor.\n\n<0,5 mmol/L, prin ezetimib izolat — Incorect: Ezetimibul izolat nu înlocuiește atorvastatina 80 mg.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1083, Angina — Ținta LDL (pagini PDF: 244).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1083
   ],
   "pdfPages": [
    244
   ],
   "section": "Angina — Ținta LDL"
  },
  "learningObjective": "Reținerea țintei LDL <1,8 mmol/L sub atorvastatină 80 mg.",
  "optionRationales": [
   "3,5 mmol/L nu este ținta citată.",
   "Cadranul: reducerea LDL la <1,8 mmol/L.",
   "5,0 mmol/L nu apare.",
   "Statinele sunt fundamentul reducerii evenimentelor.",
   "Ezetimibul izolat nu înlocuiește atorvastatina 80 mg."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută ținta de la <1,8 la <3,5 mmol/L, praguri alăturate dar false."
  },
  "textbookExpressions": [
   "<1,8 mmol/L",
   "Atorvastatina 80 mg"
  ]
 },
 {
  "id": "cardiologie-adv-168",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Diferența dintre angina instabilă și NSTEMI constă în:",
  "options": [
   "Apariția trombusului ocluziv care duce la necroză și creșterea troponinei sau CK-MB în NSTEMI",
   "Faptul că AI decurge fără durere, iar NSTEMI se însoțește constant de undă Q",
   "Identitatea lor completă, markerii fiind superfluți",
   "Prezența BRS nou ca criteriu de AI, nu de STEMI",
   "NSTEMI se diagnostichează doar radiologic, fără ECG sau troponină"
  ],
  "correct": [
   0
  ],
  "explanation": "Apariția trombusului ocluziv care duce la necroză și creșterea troponinei sau CK-MB în NSTEMI — Corect: Textul: diferența este trombusul ocluziv cu necroză și creștere enzimatică în NSTEMI.\n\nFaptul că AI decurge fără durere, iar NSTEMI se însoțește constant de undă Q — Incorect: AI poate avea durere; unda Q nu definește NSTEMI.\n\nIdentitatea lor completă, markerii fiind superfluți — Incorect: Nu sunt identice; markerii definesc necroza.\n\nPrezența BRS nou ca criteriu de AI, nu de STEMI — Incorect: BRS nou orientează spre STEMI/reperfuzie, nu spre AI.\n\nNSTEMI se diagnostichează doar radiologic, fără ECG sau troponină — Incorect: Diagnosticul combină anamneză, ECG și markeri.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1084, SCA — AI versus NSTEMI (pagini PDF: 245).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1084
   ],
   "pdfPages": [
    245
   ],
   "section": "SCA — AI versus NSTEMI"
  },
  "learningObjective": "Reținerea necrozei (troponină/CK-MB) ca element care desparte NSTEMI de angina instabilă.",
  "optionRationales": [
   "Textul: diferența este trombusul ocluziv cu necroză și creștere enzimatică în NSTEMI.",
   "AI poate avea durere; unda Q nu definește NSTEMI.",
   "Nu sunt identice; markerii definesc necroza.",
   "BRS nou orientează spre STEMI/reperfuzie, nu spre AI.",
   "Diagnosticul combină anamneză, ECG și markeri."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează rolul troponinei — tocmai criteriul care desparte NSTEMI de AI."
  },
  "textbookExpressions": [
   "trombusului ocluziv",
   "CK-MB"
  ]
 },
 {
  "id": "cardiologie-adv-169",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Conform Cadranului 30.34, un nivel de troponină I >9 ng/ml în SCA corespunde unei mortalități la 42 de zile de circa:",
  "options": [
   "1,0%",
   "1,7%",
   "3,4%",
   "7,5%",
   "0,1%"
  ],
  "correct": [
   3
  ],
  "explanation": "1,0% — Incorect: 1,0% corespunde intervalului 0–<0,4 ng/ml.\n\n1,7% — Incorect: 1,7% este 0,4–<1,0.\n\n3,4% — Incorect: 3,4% este 1,0–<2,0.\n\n7,5% — Corect: Cadranul: >9,0 ng/ml → 7,5%.\n\n0,1% — Incorect: 0,1% subestimează net.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1085, SCA — Troponina I și mortalitatea la 42 de zile (pagini PDF: 246).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1085
   ],
   "pdfPages": [
    246
   ],
   "section": "SCA — Troponina I și mortalitatea la 42 de zile"
  },
  "learningObjective": "Memorarea treptei >9 ng/ml → 7,5% mortalitate la 42 de zile, versus 1% la valori nedetectabile.",
  "optionRationales": [
   "1,0% corespunde intervalului 0–<0,4 ng/ml.",
   "1,7% este 0,4–<1,0.",
   "3,4% este 1,0–<2,0.",
   "Cadranul: >9,0 ng/ml → 7,5%.",
   "0,1% subestimează net."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele cinci trepte consecutive din același tabel sunt ușor de permutat; doar >9 ng/ml dă 7,5%."
  },
  "textbookExpressions": [
   ">9,0",
   "7,5"
  ]
 },
 {
  "id": "cardiologie-adv-170",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "După externarea din NSTEMI, riscul GRACE scăzut la 6 luni corespunde:",
  "options": [
   "Unui scor >118, cu mortalitate >8%",
   "Unui scor ≤88, cu mortalitate <3%",
   "Unui scor 126-154, banda STEMI intra-spital medie",
   "Unui scor ≥200, indiferent de moment",
   "Lipsei oricărei stratificări post-externare"
  ],
  "correct": [
   1
  ],
  "explanation": "Unui scor >118, cu mortalitate >8% — Incorect: >118 este riscul înalt NSTEMI la 6 luni (>8%).\n\nUnui scor ≤88, cu mortalitate <3% — Corect: Cadranul 30.37: NSTEMI la 6 luni, scăzut ≤88, mortalitate <3%.\n\nUnui scor 126-154, banda STEMI intra-spital medie — Incorect: 126-154 este STEMI intra-spital mediu.\n\nUnui scor ≥200, indiferent de moment — Incorect: ≥200 nu este categoria de 6 luni NSTEMI.\n\nLipsei oricărei stratificări post-externare — Incorect: GRACE stratifică și post-externare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1086, SCA — GRACE la 6 luni (NSTEMI) (pagini PDF: 247).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1086
   ],
   "pdfPages": [
    247
   ],
   "section": "SCA — GRACE la 6 luni (NSTEMI)"
  },
  "learningObjective": "Reținerea pragului ≤88 (<3%) pentru NSTEMI la 6 luni, distinct de >118 (>8%) și de benzile STEMI.",
  "optionRationales": [
   ">118 este riscul înalt NSTEMI la 6 luni (>8%).",
   "Cadranul 30.37: NSTEMI la 6 luni, scăzut ≤88, mortalitate <3%.",
   "126-154 este STEMI intra-spital mediu.",
   "≥200 nu este categoria de 6 luni NSTEMI.",
   "GRACE stratifică și post-externare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă ≤88 (<3% la 6 luni) cu pragul înalt >118 sau cu benzile STEMI intra-spital."
  },
  "textbookExpressions": [
   ":S88",
   "<3"
  ]
 },
 {
  "id": "cardiologie-adv-171",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Duala antiagregare în SCA și țintele beta-blocantului:",
  "options": [
   "Aspirină 300 mg încărcare, apoi 75-100 mg/zi",
   "Prasugrel 60 mg încărcare, apoi 10 mg/zi; ticagrelor 180 mg apoi 90 mg ×2/zi",
   "Beta-blocantele se titrează către o frecvență de repaus de 50-60/min, în absența contraindicațiilor",
   "Clopidogrel 300-600 mg încărcare, apoi 75 mg/zi",
   "GPIIb/IIIa se dau de rutină, indiferent de încărcarea trombotică"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Aspirină 300 mg încărcare, apoi 75-100 mg/zi — Corect: Încărcarea și întreținerea aspirinei sunt explicite.\n\nPrasugrel 60 mg încărcare, apoi 10 mg/zi; ticagrelor 180 mg apoi 90 mg ×2/zi — Corect: Dozele de prasugrel și ticagrelor sunt din text.\n\nBeta-blocantele se titrează către o frecvență de repaus de 50-60/min, în absența contraindicațiilor — Corect: Ținta 50-60/min este citată.\n\nClopidogrel 300-600 mg încărcare, apoi 75 mg/zi — Corect: Încărcarea de clopidogrel 300-600 mg apoi 75 mg este din text.\n\nGPIIb/IIIa se dau de rutină, indiferent de încărcarea trombotică — Incorect: GPIIb/IIIa se rezervă încărcării trombotice marcate sau complicațiilor PCI.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1086, SCA — DAPT și frecvența 50-60/min (pagini PDF: 247).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1086
   ],
   "pdfPages": [
    247
   ],
   "section": "SCA — DAPT și frecvența 50-60/min"
  },
  "learningObjective": "Fixarea dozelor de încărcare (inclusiv clopidogrel 300-600 mg) și a țintei de frecvență 50-60/min.",
  "optionRationales": [
   "Încărcarea și întreținerea aspirinei sunt explicite.",
   "Dozele de prasugrel și ticagrelor sunt din text.",
   "Ținta 50-60/min este citată.",
   "Încărcarea de clopidogrel 300-600 mg apoi 75 mg este din text.",
   "GPIIb/IIIa se rezervă încărcării trombotice marcate sau complicațiilor PCI."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie prasugrelului încărcarea de clopidogrel și readuce GPIIb/IIIa ca rutină."
  },
  "textbookExpressions": [
   "50-60 pe minut",
   "60 mg"
  ]
 },
 {
  "id": "cardiologie-adv-172",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Fondaparinux și bivalirudina în SCA:",
  "options": [
   "Fondaparinux este un pentazaharid care activează antitrombina și inactivează factorul Xa, fără a inactiva trombina direct și fără efect antiplachetar",
   "Bivalirudina se leagă reversibil de trombină; în ACUITY a avut eficacitate similară heparinei+GPIIb/IIIa, cu risc hemoragic mai mic",
   "Enoxaparina este superioară heparinei nefracționate și se dă subcutanat de două ori pe zi",
   "Fondaparinux inactivează trombina direct, ca un DOAC oral",
   "HNF nu necesită monitorizare aPTT"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Fondaparinux este un pentazaharid care activează antitrombina și inactivează factorul Xa, fără a inactiva trombina direct și fără efect antiplachetar — Corect: Mecanismul fondaparinux este descris astfel.\n\nBivalirudina se leagă reversibil de trombină; în ACUITY a avut eficacitate similară heparinei+GPIIb/IIIa, cu risc hemoragic mai mic — Corect: ACUITY și legarea reversibilă sunt explicite.\n\nEnoxaparina este superioară heparinei nefracționate și se dă subcutanat de două ori pe zi — Corect: Enoxaparina s.c. ×2/zi este superioară HNF.\n\nFondaparinux inactivează trombina direct, ca un DOAC oral — Incorect: Fondaparinux nu inactivează trombina direct.\n\nHNF nu necesită monitorizare aPTT — Incorect: HNF cere aPTT la 6-12 ore.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1086, SCA — Antitrombinice (pagini PDF: 247).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1086
   ],
   "pdfPages": [
    247
   ],
   "section": "SCA — Antitrombinice"
  },
  "learningObjective": "Contrastul fondaparinux (anti-Xa via AT) versus bivalirudină (inhibitor direct reversibil) și superioritatea enoxaparinei.",
  "optionRationales": [
   "Mecanismul fondaparinux este descris astfel.",
   "ACUITY și legarea reversibilă sunt explicite.",
   "Enoxaparina s.c. ×2/zi este superioară HNF.",
   "Fondaparinux nu inactivează trombina direct.",
   "HNF cere aPTT la 6-12 ore."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă fondaparinux-ul — pentazaharid anti-Xa — într-un inhibitor direct de trombină."
  },
  "textbookExpressions": [
   "Fondaparinux",
   "bivalirudina"
  ]
 },
 {
  "id": "cardiologie-adv-173",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Din Cadranul 30.38, particularități de dozaj în SCA includ:",
  "options": [
   "Prasugrel 10 mg/zi, redus la 5 mg/zi dacă pacientul are <60 kg sau >75 de ani",
   "Fondaparinux 2,5 mg s.c. pe zi, până la 8 zile",
   "Morfina 2,5-5,0 mg i.v., asociată cu metoclopramid 10 mg i.v.",
   "Aspirina se evită în SCA, fiind înlocuită de rutină cu GPIIb/IIIa",
   "Atenololul i.v. este de primă linie în astm, IC și bradiaritmii"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Prasugrel 10 mg/zi, redus la 5 mg/zi dacă pacientul are <60 kg sau >75 de ani — Corect: Reducerea la 5 mg sub 60 kg sau peste 75 de ani este din tabel.\n\nFondaparinux 2,5 mg s.c. pe zi, până la 8 zile — Corect: 2,5 mg s.c. până la 8 zile este explicit.\n\nMorfina 2,5-5,0 mg i.v., asociată cu metoclopramid 10 mg i.v. — Corect: Morfina cu antiemetic este listată.\n\nAspirina se evită în SCA, fiind înlocuită de rutină cu GPIIb/IIIa — Incorect: Aspirina 150-300 mg mestecabilă rămâne baza.\n\nAtenololul i.v. este de primă linie în astm, IC și bradiaritmii — Incorect: Beta-blocantele sunt contraindicate în astm, IC, hipotensiune, bradiaritmii.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1087, SCA — Prasugrel 5 mg, fondaparinux 2,5 mg (pagini PDF: 248).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1087
   ],
   "pdfPages": [
    248
   ],
   "section": "SCA — Prasugrel 5 mg, fondaparinux 2,5 mg"
  },
  "learningObjective": "Aplicarea reducerii prasugrelului la vârstnici/greutate mică și a ferestrei fondaparinux 8 zile.",
  "optionRationales": [
   "Reducerea la 5 mg sub 60 kg sau peste 75 de ani este din tabel.",
   "2,5 mg s.c. până la 8 zile este explicit.",
   "Morfina cu antiemetic este listată.",
   "Aspirina 150-300 mg mestecabilă rămâne baza.",
   "Beta-blocantele sunt contraindicate în astm, IC, hipotensiune, bradiaritmii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Omite reducerea prasugrelului la >75 de ani/<60 kg — capcana de dozaj a cadranului."
  },
  "textbookExpressions": [
   "<60 kg",
   "2,5 mg s.c."
  ]
 },
 {
  "id": "cardiologie-adv-174",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Scorul TIMI în STEMI punctează, printre altele:",
  "options": [
   "Vârsta >75 ani cu 3 puncte",
   "Greutatea >67 kg și întârzierea tratamentului >4 ore",
   "TA sistolică <100 mmHg, FC >100/min, Killip II-IV, IM anterior sau BRS",
   "Doar troponina, identic NSTEMI fără date clinice",
   "Un scor 0 corespunde unei mortalități la 30 de zile de 35,9%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Vârsta >75 ani cu 3 puncte — Corect: Vârsta >75 primește 3 puncte.\n\nGreutatea >67 kg și întârzierea tratamentului >4 ore — Corect: Greutatea >67 kg și delay >4 ore sunt itemi STEMI.\n\nTA sistolică <100 mmHg, FC >100/min, Killip II-IV, IM anterior sau BRS — Corect: TAS, FC, Killip și localizarea/BRS sunt în tabel.\n\nDoar troponina, identic NSTEMI fără date clinice — Incorect: TIMI STEMI combină clinic și ECG, nu troponina izolată.\n\nUn scor 0 corespunde unei mortalități la 30 de zile de 35,9% — Incorect: Scorul 0 are mortalitate 0,8%; 35,9% este banda 9-16.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1088, STEMI — Scorul TIMI (Cadranul 30.39) (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1088
   ],
   "pdfPages": [
    249
   ],
   "section": "STEMI — Scorul TIMI (Cadranul 30.39)"
  },
  "learningObjective": "Recunoașterea itemilor STEMI (vârstă >75 cu 3 puncte, greutate, delay) distincți de TIMI NSTEMI.",
  "optionRationales": [
   "Vârsta >75 primește 3 puncte.",
   "Greutatea >67 kg și delay >4 ore sunt itemi STEMI.",
   "TAS, FC, Killip și localizarea/BRS sunt în tabel.",
   "TIMI STEMI combină clinic și ECG, nu troponina izolată.",
   "Scorul 0 are mortalitate 0,8%; 35,9% este banda 9-16."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie scorului 0 mortalitatea benzii 9-16 (35,9%) și reduce TIMI STEMI la troponină."
  },
  "textbookExpressions": [
   ">75 ani",
   ">67 kg"
  ]
 },
 {
  "id": "cardiologie-adv-175",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Electrocardiograma în STEMI — praguri și timing:",
  "options": [
   "ECG în primele 10 minute de la primul contact medical; dacă e neschimbat și durerea persistă, se repetă la 15 minute",
   "Supradenivelare ST nouă ≥0,2 mV la punctul J în V1-V3 și ≥0,1 mV în alte derivații orientează spre IM anterior",
   "Durerea tipică depășește 20 de minute și nu cedează de obicei la nitroglicerină sublinguală",
   "BRS major nou sau presupus nou nu necesită reperfuzie, diagnosticul ECG fiind imposibil",
   "Prima ECG normală exclude infarctul și face monitorizarea ritmului superfluă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "ECG în primele 10 minute de la primul contact medical; dacă e neschimbat și durerea persistă, se repetă la 15 minute — Corect: Timing-ul 10 minute și repetarea la 15 minute sunt explicite.\n\nSupradenivelare ST nouă ≥0,2 mV la punctul J în V1-V3 și ≥0,1 mV în alte derivații orientează spre IM anterior — Corect: Pragurile 0,2/0,1 mV sunt din text.\n\nDurerea tipică depășește 20 de minute și nu cedează de obicei la nitroglicerină sublinguală — Corect: Durerea >20 de minute, refractară la nitrat, este tabloul clasic.\n\nBRS major nou sau presupus nou nu necesită reperfuzie, diagnosticul ECG fiind imposibil — Incorect: BRS nou asociază ocluzie și cere reperfuzie urgentă.\n\nPrima ECG normală exclude infarctul și face monitorizarea ritmului superfluă — Incorect: ECG inițial e rar normal; monitorizarea ritmului rămâne necesară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1088, STEMI — ECG, 10 minute și 0,2 mV (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1088
   ],
   "pdfPages": [
    249
   ],
   "section": "STEMI — ECG, 10 minute și 0,2 mV"
  },
  "learningObjective": "Aplicarea ferestrei de 10/15 minute, a pragului 0,2 mV în V1-V3 și a durerii >20 de minute.",
  "optionRationales": [
   "Timing-ul 10 minute și repetarea la 15 minute sunt explicite.",
   "Pragurile 0,2/0,1 mV sunt din text.",
   "Durerea >20 de minute, refractară la nitrat, este tabloul clasic.",
   "BRS nou asociază ocluzie și cere reperfuzie urgentă.",
   "ECG inițial e rar normal; monitorizarea ritmului rămâne necesară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează reperfuzia din BRS nou — indicație explicită — și tratează prima ECG normală ca excludere."
  },
  "textbookExpressions": [
   "10 minute",
   "20 de minute"
  ]
 },
 {
  "id": "cardiologie-adv-176",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "După tromboliza sistemică în STEMI se urmărește:",
  "options": [
   "Bolusul de lytic în primele 10 minute de la diagnostic",
   "Scăderea supradenivelării ST cu >50% față de referință la 60-90 de minute; altfel, PCI de salvare",
   "Aspirină plus clopidogrel ca antiagregante; HNF, enoxaparină sau fondaparinux 5-7 zile",
   "Tromboaspirația de rutină în locul lizelor",
   "GPIIb/IIIa de rutină la toți trombolizații, fără heparină"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Bolusul de lytic în primele 10 minute de la diagnostic — Corect: Ținta de 10 minute este explicită.\n\nScăderea supradenivelării ST cu >50% față de referință la 60-90 de minute; altfel, PCI de salvare — Corect: Eșecul (ST nu scade >50% la 60-90 min) duce la PCI de salvare.\n\nAspirină plus clopidogrel ca antiagregante; HNF, enoxaparină sau fondaparinux 5-7 zile — Corect: Antiagregantele și fereastra 5-7 zile sunt din text.\n\nTromboaspirația de rutină în locul lizelor — Incorect: Tromboaspirația de rutină nu este recomandată (nici în PCI primară).\n\nGPIIb/IIIa de rutină la toți trombolizații, fără heparină — Incorect: GPIIb/IIIa de rutină nu mai este recomandată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1089, STEMI — Tromboliză, salvare și 5-7 zile (pagini PDF: 250).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1089
   ],
   "pdfPages": [
    250
   ],
   "section": "STEMI — Tromboliză, salvare și 5-7 zile"
  },
  "learningObjective": "Reținerea bolusului în 10 minute, a criteriului 50% la 60-90 min și a anticoagulației 5-7 zile.",
  "optionRationales": [
   "Ținta de 10 minute este explicită.",
   "Eșecul (ST nu scade >50% la 60-90 min) duce la PCI de salvare.",
   "Antiagregantele și fereastra 5-7 zile sunt din text.",
   "Tromboaspirația de rutină nu este recomandată (nici în PCI primară).",
   "GPIIb/IIIa de rutină nu mai este recomandată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește criteriul 50%/60-90 min de salvare cu tromboaspirație de rutină, respinsă de text."
  },
  "textbookExpressions": [
   "10 minute",
   "60-90 minute"
  ]
 },
 {
  "id": "cardiologie-adv-177",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "În Europa, boala cardiacă ischemică cauzează anual circa:",
  "options": [
   "1,8 milioane de decese",
   "18.000 de decese",
   "1,8% din populație, fără mortalitate",
   "Aceeași mortalitate ca pericardita acută (5% din durerile de urgență)",
   "Sub 1.000 de decese, limitate la STEMI neperfuzat"
  ],
  "correct": [
   0
  ],
  "explanation": "1,8 milioane de decese — Corect: Textul: aproximativ 1,8 milioane de oameni mor anual în Europa din cauza BCI.\n\n18.000 de decese — Incorect: 18.000 subestimează cu două ordine.\n\n1,8% din populație, fără mortalitate — Incorect: Nu este o prevalență de 1,8% fără mortalitate.\n\nAceeași mortalitate ca pericardita acută (5% din durerile de urgență) — Incorect: 5% este ponderea pericarditei în durerile de urgență, nu mortalitatea BCI.\n\nSub 1.000 de decese, limitate la STEMI neperfuzat — Incorect: Ordinul de mărime este de milioane, nu mii.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1088, STEMI — Epidemiologie europeană (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1088
   ],
   "pdfPages": [
    249
   ],
   "section": "STEMI — Epidemiologie europeană"
  },
  "learningObjective": "Reținerea ordinii de mărime 1,8 milioane de decese anuale prin BCI în Europa.",
  "optionRationales": [
   "Textul: aproximativ 1,8 milioane de oameni mor anual în Europa din cauza BCI.",
   "18.000 subestimează cu două ordine.",
   "Nu este o prevalență de 1,8% fără mortalitate.",
   "5% este ponderea pericarditei în durerile de urgență, nu mortalitatea BCI.",
   "Ordinul de mărime este de milioane, nu mii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Subestimează cu două-trei ordine de mărime mortalitatea europeană prin BCI."
  },
  "textbookExpressions": [
   "1,8 milioane",
   "boala cardiacă ischemică"
  ]
 },
 {
  "id": "cardiologie-adv-178",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Valvulotomia mitrală cu balon prin puncție transseptală este preferabilă când:",
  "options": [
   "Valvele sunt suple, aparatul subvalvular minim afectat și regurgitarea mitrală minimă",
   "ETE preprocedurală exclude tromboza atrială stângă",
   "Calcificările importante, RM mai mult decât ușoară sau trombul atrial sunt prezente",
   "Se asociază RM moderată, pe care balonul o ameliorează constant",
   "Nu este nevoie de ghidaj, septul nefiind puncționat"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Valvele sunt suple, aparatul subvalvular minim afectat și regurgitarea mitrală minimă — Corect: Textul rezervă procedura valvei suple cu aparat subvalvular și RM minime.\n\nETE preprocedurală exclude tromboza atrială stângă — Corect: ETE exclude trombul înaintea puncției.\n\nCalcificările importante, RM mai mult decât ușoară sau trombul atrial sunt prezente — Incorect: Calcificarea importantă, RM > ușoară și trombul sunt contraindicații.\n\nSe asociază RM moderată, pe care balonul o ameliorează constant — Incorect: RM mai mult decât ușoară contraindică, nu este un argument.\n\nNu este nevoie de ghidaj, septul nefiind puncționat — Incorect: Procedura puncționează septul din vena femurală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1094, Stenoza mitrală — Valvuloplastie cu balon (pagini PDF: 255).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1094
   ],
   "pdfPages": [
    255
   ],
   "section": "Stenoza mitrală — Valvuloplastie cu balon"
  },
  "learningObjective": "Criteriile de fezabilitate (valve suple, RM minimă) și rolul ETE de excludere a trombului.",
  "optionRationales": [
   "Textul rezervă procedura valvei suple cu aparat subvalvular și RM minime.",
   "ETE exclude trombul înaintea puncției.",
   "Calcificarea importantă, RM > ușoară și trombul sunt contraindicații.",
   "RM mai mult decât ușoară contraindică, nu este un argument.",
   "Procedura puncționează septul din vena femurală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă contraindicațiile (calcificare, RM, tromb) în indicații ale balonului."
  },
  "textbookExpressions": [
   "trombozei atriale stângi",
   "puncţie transseptală"
  ]
 },
 {
  "id": "cardiologie-adv-179",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Scorul Wilkins evaluează, pentru fezabilitatea valvuloplastiei mitrale:",
  "options": [
   "Mobilitatea, îngroșarea și calcificarea cuspelor, plus îngroșarea aparatului subvalvular",
   "Doar gradientul mediu, fără morfologie",
   "Doar prezența FA, fără ecografie",
   "Grosimea peretelui VS, identic CMH",
   "Diametrul rădăcinii aortice"
  ],
  "correct": [
   0
  ],
  "explanation": "Mobilitatea, îngroșarea și calcificarea cuspelor, plus îngroșarea aparatului subvalvular — Corect: Cei patru parametri sunt enumerați explicit.\n\nDoar gradientul mediu, fără morfologie — Incorect: Gradientul completează cadranul 30.42, dar Wilkins este morfologic.\n\nDoar prezența FA, fără ecografie — Incorect: FA influențează anticoagularea, nu scorul Wilkins.\n\nGrosimea peretelui VS, identic CMH — Incorect: Grosimea VS nu este item Wilkins.\n\nDiametrul rădăcinii aortice — Incorect: Rădăcina aortică ține de valva aortică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1094, Stenoza mitrală — Scorul Wilkins (pagini PDF: 255).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1094
   ],
   "pdfPages": [
    255
   ],
   "section": "Stenoza mitrală — Scorul Wilkins"
  },
  "learningObjective": "Reținerea celor patru itemi Wilkins (mobilitate, îngroșare, calcificare, subvalvular).",
  "optionRationales": [
   "Cei patru parametri sunt enumerați explicit.",
   "Gradientul completează cadranul 30.42, dar Wilkins este morfologic.",
   "FA influențează anticoagularea, nu scorul Wilkins.",
   "Grosimea VS nu este item Wilkins.",
   "Rădăcina aortică ține de valva aortică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește cei patru itemi morfologici Wilkins cu un gradient izolat sau cu grosimea din CMH."
  },
  "textbookExpressions": [
   "Scorul Wilkins",
   "aparatului subvalvular"
  ]
 },
 {
  "id": "cardiologie-adv-180",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Regurgitarea mitrală — cauze, Carpentier și semne:",
  "options": [
   "Cauze frecvente: degenerescență mixomatoasă, ischemie, reumatism, endocardită; medicamente: fenfluramină, cabergolină",
   "Carpentier: A mobilitate normală, B crescută/prolaps, C restricționată",
   "Șoc apexian difuz deplasat, S1 diminuat, suflu holosistolic către axilă; HVS ECG la circa 50%",
   "Tromboembolia este mai frecventă decât în stenoza mitrală, endocardita fiind rară",
   "S1 este constant întărit, ca în stenoza mitrală cu valve mobile"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cauze frecvente: degenerescență mixomatoasă, ischemie, reumatism, endocardită; medicamente: fenfluramină, cabergolină — Corect: Etiologiile și medicamentele (fenfluramină, cabergolină) sunt listate.\n\nCarpentier: A mobilitate normală, B crescută/prolaps, C restricționată — Corect: Cele trei tipuri Carpentier sunt din figură/text.\n\nȘoc apexian difuz deplasat, S1 diminuat, suflu holosistolic către axilă; HVS ECG la circa 50% — Corect: Semnele și HVS la 50% sunt explicite.\n\nTromboembolia este mai frecventă decât în stenoza mitrală, endocardita fiind rară — Incorect: Tromboembolia este mai rară decât în SM; endocardita subacută este mai frecventă.\n\nS1 este constant întărit, ca în stenoza mitrală cu valve mobile — Incorect: S1 este diminuat prin apoziție incompletă, nu întărit.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1095, 1096, Regurgitarea mitrală — Carpentier și auscultație (pagini PDF: 256, 257).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1095,
    1096
   ],
   "pdfPages": [
    256,
    257
   ],
   "section": "Regurgitarea mitrală — Carpentier și auscultație"
  },
  "learningObjective": "Potrivirea clasificării Carpentier cu suflul holosistolic axillary și HVS la 50%.",
  "optionRationales": [
   "Etiologiile și medicamentele (fenfluramină, cabergolină) sunt listate.",
   "Cele trei tipuri Carpentier sunt din figură/text.",
   "Semnele și HVS la 50% sunt explicite.",
   "Tromboembolia este mai rară decât în SM; endocardita subacută este mai frecventă.",
   "S1 este diminuat prin apoziție incompletă, nu întărit."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează S1 (diminuat în RM versus întărit în SM) și umflă riscul embolic peste pe cel al stenozei."
  },
  "textbookExpressions": [
   "fenfluramină",
   "50%"
  ]
 },
 {
  "id": "cardiologie-adv-181",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Stenoza aortică simptomatică și bicuspidia cu aortă dilatată:",
  "options": [
   "Prezența simptomelor este un bun indicator de severitate; simptomaticii trebuie să beneficieze de înlocuire valvulară",
   "La bicuspidie, chirurgia se consideră dacă aorta ascendentă depășește 50 mm sau crește cu peste 5 mm/an",
   "Asimptomaticii cu SA severă au indicație dacă apar simptome/scădere TA la efort, FEVS <50%, Vmax >5,5 m/s, PAPS >60 mmHg sau creștere Vmax >0,3 m/s/an",
   "Valvuloplastia cu balon la adult este soluția definitivă, superioară TAVI",
   "Simptomaticii se urmăresc conservator nelimitat dacă FEVS este 55%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Prezența simptomelor este un bun indicator de severitate; simptomaticii trebuie să beneficieze de înlocuire valvulară — Corect: Simptomele orientează către înlocuire.\n\nLa bicuspidie, chirurgia se consideră dacă aorta ascendentă depășește 50 mm sau crește cu peste 5 mm/an — Corect: Cele două praguri aortice sunt explicite.\n\nAsimptomaticii cu SA severă au indicație dacă apar simptome/scădere TA la efort, FEVS <50%, Vmax >5,5 m/s, PAPS >60 mmHg sau creștere Vmax >0,3 m/s/an — Corect: Lista indicațiilor la asimptomatici este din text.\n\nValvuloplastia cu balon la adult este soluția definitivă, superioară TAVI — Incorect: Valvuloplastia la adult are rezultate slabe; TAVI este alternativa inoperabililor.\n\nSimptomaticii se urmăresc conservator nelimitat dacă FEVS este 55% — Incorect: Simptomaticul are indicație de corecție, nu urmărire nelimitată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1099, 1098, Stenoza aortică — Indicații chirurgicale (pagini PDF: 260, 259).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1099,
    1098
   ],
   "pdfPages": [
    260,
    259
   ],
   "section": "Stenoza aortică — Indicații chirurgicale"
  },
  "learningObjective": "Aplicarea pragurilor 50 mm/5 mm/an la bicuspidie și a criteriilor eco (5,5 m/s, 60 mmHg, 0,3 m/s/an).",
  "optionRationales": [
   "Simptomele orientează către înlocuire.",
   "Cele două praguri aortice sunt explicite.",
   "Lista indicațiilor la asimptomatici este din text.",
   "Valvuloplastia la adult are rezultate slabe; TAVI este alternativa inoperabililor.",
   "Simptomaticul are indicație de corecție, nu urmărire nelimitată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amână chirurgia simptomaticului cu FE 55% și promovează balonul adultului ca soluție definitivă."
  },
  "textbookExpressions": [
   "50 mm",
   "5,5 m/s"
  ]
 },
 {
  "id": "cardiologie-adv-182",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Fiziopatologia regurgitării aortice cronice:",
  "options": [
   "Reflux diastolic în VS; pentru a menține debitul net, volumul ejectat în aortă trebuie să crească, dilatând VS",
   "Tensiunea diastolică scade, deci și perfuzia coronariană; VS dilatat este mai puțin eficient, cu necesar de O2 crescut și ischemie",
   "Simptomele semnificative apar târziu, odată cu insuficiența de VS; aritmiile sunt relativ rare",
   "TA diastolică crește, ameliorând perfuzia coronariană",
   "Șocul apexian este nedeplasat și susținut, identic stenozei aortice"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Reflux diastolic în VS; pentru a menține debitul net, volumul ejectat în aortă trebuie să crească, dilatând VS — Corect: Creșterea volumului ejectat și dilatarea VS sunt explicite.\n\nTensiunea diastolică scade, deci și perfuzia coronariană; VS dilatat este mai puțin eficient, cu necesar de O2 crescut și ischemie — Corect: Scăderea TA diastolice și ischemia prin ineficiență mecanică sunt descrise.\n\nSimptomele semnificative apar târziu, odată cu insuficiența de VS; aritmiile sunt relativ rare — Corect: Simptomele tardive și raritatea aritmiilor sunt din text.\n\nTA diastolică crește, ameliorând perfuzia coronariană — Incorect: TA diastolică scade, nu crește.\n\nȘocul apexian este nedeplasat și susținut, identic stenozei aortice — Incorect: Apexul este hiperdinamic, deplasat inferior și lateral.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1100, 1099, Regurgitarea aortică — Fiziopatologie (pagini PDF: 261, 260).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1100,
    1099
   ],
   "pdfPages": [
    261,
    260
   ],
   "section": "Regurgitarea aortică — Fiziopatologie"
  },
  "learningObjective": "Legarea scăderii TA diastolice de hipoperfuzia coronariană și de ischemia VS dilatat.",
  "optionRationales": [
   "Creșterea volumului ejectat și dilatarea VS sunt explicite.",
   "Scăderea TA diastolice și ischemia prin ineficiență mecanică sunt descrise.",
   "Simptomele tardive și raritatea aritmiilor sunt din text.",
   "TA diastolică scade, nu crește.",
   "Apexul este hiperdinamic, deplasat inferior și lateral."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Crește TA diastolică — inversul fiziopatologiei RA — și atribuie apexul nedeplasat al stenozei."
  },
  "textbookExpressions": [
   "perfuzia coronariană",
   "Austin Flint"
  ]
 },
 {
  "id": "cardiologie-adv-183",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Cauzele regurgitării aortice acute (Cadranul 30.44) includ:",
  "options": [
   "Reumatism articular acut, endocardită infecțioasă, disecție de aortă, anevrism de sinus Valsalva rupt, proteză disfuncțională",
   "Sifilisul și osteogenesis imperfecta ca etiologii acute de primă linie",
   "Doar stenoza aortică calcificată a vârstnicului",
   "Hipotiroidismul mixedematos",
   "Pericardita constrictivă"
  ],
  "correct": [
   0
  ],
  "explanation": "Reumatism articular acut, endocardită infecțioasă, disecție de aortă, anevrism de sinus Valsalva rupt, proteză disfuncțională — Corect: Cele cinci cauze acute sunt din cadran.\n\nSifilisul și osteogenesis imperfecta ca etiologii acute de primă linie — Incorect: Sifilisul și osteogenesis imperfecta sunt la forma cronică.\n\nDoar stenoza aortică calcificată a vârstnicului — Incorect: BAVC este o boală a stenozei vârstnicului, nu cauza RA acute.\n\nHipotiroidismul mixedematos — Incorect: Mixedemul ține de pericard, nu de RA acută.\n\nPericardita constrictivă — Incorect: Constricția nu figurează în cadran.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1100, Regurgitarea aortică — Cadranul 30.44 (acută) (pagini PDF: 261).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1100
   ],
   "pdfPages": [
    261
   ],
   "section": "Regurgitarea aortică — Cadranul 30.44 (acută)"
  },
  "learningObjective": "Listarea cauzelor acute (RAA, endocardită, disecție, Valsalva, proteză), distincte de Marfan/sifilis cronice.",
  "optionRationales": [
   "Cele cinci cauze acute sunt din cadran.",
   "Sifilisul și osteogenesis imperfecta sunt la forma cronică.",
   "BAVC este o boală a stenozei vârstnicului, nu cauza RA acute.",
   "Mixedemul ține de pericard, nu de RA acută.",
   "Constricția nu figurează în cadran."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută sifilisul/Marfan din forma cronică în cea acută, amestecând cele două coloane ale tabelului."
  },
  "textbookExpressions": [
   "Disecţie de aortă",
   "sinus Valsalva"
  ]
 },
 {
  "id": "cardiologie-adv-184",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Stenoza pulmonară se caracterizează clinic prin:",
  "options": [
   "Suflu mezosistolic rugos de ejecție, maxim în inspir, în spațiul II intercostal stâng, adesea cu freamăt",
   "P2 întârziată și diminuată; clic de ejecție dacă obstrucția este valvulară",
   "Forma ușoară impune valvulotomie imediată, identic celei critice",
   "Suflu protodiastolic Graham Steell, accentuat în inspir, ca leziune primară",
   "P2 întărită de rutină, identic hipertensiunii pulmonare din regurgitare"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Suflu mezosistolic rugos de ejecție, maxim în inspir, în spațiul II intercostal stâng, adesea cu freamăt — Corect: Suflul de ejecție inspirator în SICS II este explicit.\n\nP2 întârziată și diminuată; clic de ejecție dacă obstrucția este valvulară — Corect: P2 întârziată/diminută și clic ul valvular sunt descrise.\n\nForma ușoară impune valvulotomie imediată, identic celei critice — Incorect: Ușoara e asimptomatică; severa se tratează prin valvulotomie.\n\nSuflu protodiastolic Graham Steell, accentuat în inspir, ca leziune primară — Incorect: Graham Steell aparține regurgitării pulmonare.\n\nP2 întărită de rutină, identic hipertensiunii pulmonare din regurgitare — Incorect: P2 întărită este a regurgitării pe fond de HTP, nu a stenozei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1102, Stenoza pulmonară — Semne și tratament (pagini PDF: 263).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1102
   ],
   "pdfPages": [
    263
   ],
   "section": "Stenoza pulmonară — Semne și tratament"
  },
  "learningObjective": "Contrastul P2 diminuate din stenoză versus P2 întărite din regurgitarea pe HTP.",
  "optionRationales": [
   "Suflul de ejecție inspirator în SICS II este explicit.",
   "P2 întârziată/diminută și clic ul valvular sunt descrise.",
   "Ușoara e asimptomatică; severa se tratează prin valvulotomie.",
   "Graham Steell aparține regurgitării pulmonare.",
   "P2 întărită este a regurgitării pe fond de HTP, nu a stenozei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune P2 întărită și Graham Steell pe stenoza pulmonară, semnele regurgitării de HTP."
  },
  "textbookExpressions": [
   "spaţiul li intercostal",
   "valvulotomie pulmo"
  ]
 },
 {
  "id": "cardiologie-adv-185",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Protezele valvulare — durabilitate, INR intermediar și auscultație:",
  "options": [
   "Mecanicele sunt mai durabile; biologicele degenerează după circa 10 ani, dar sunt mai puțin trombogene",
   "Valve moderat trombogene (Björk-Shiley, alte bidisc): INR 3,0 fără factori și 3,5 cu factori",
   "Zgomotele mecanicelor sunt mai puternice, audibile la deschidere și închidere; biologicele seamănă nativelor",
   "Factorii adiționali de tromboembolism includ FA, diametrul AS >50 mm și FEVS <35%",
   "DOAC sunt de primă linie la protezele mecanice"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Mecanicele sunt mai durabile; biologicele degenerează după circa 10 ani, dar sunt mai puțin trombogene — Corect: Durabilitatea versus trombogenitatea este explicită.\n\nValve moderat trombogene (Björk-Shiley, alte bidisc): INR 3,0 fără factori și 3,5 cu factori — Corect: Treptele 3,0/3,5 pentru moderat trombogene sunt din listă.\n\nZgomotele mecanicelor sunt mai puternice, audibile la deschidere și închidere; biologicele seamănă nativelor — Corect: Contrastul auscultator mecanic/biologic este descris.\n\nFactorii adiționali de tromboembolism includ FA, diametrul AS >50 mm și FEVS <35% — Corect: Lista factorilor adiționali (inclusiv AS >50 mm și FEVS <35%) este din text.\n\nDOAC sunt de primă linie la protezele mecanice — Incorect: Nu există indicație DOAC la proteze.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1102, 1103, Proteze — Durabilitate 10 ani și INR 3,0/3,5 (pagini PDF: 263, 264).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1102,
    1103
   ],
   "pdfPages": [
    263,
    264
   ],
   "section": "Proteze — Durabilitate 10 ani și INR 3,0/3,5"
  },
  "learningObjective": "Completarea treptei intermediare INR 3,0/3,5, a degenerării la circa 10 ani și a factorilor adiționali (AS >50 mm, FEVS <35%).",
  "optionRationales": [
   "Durabilitatea versus trombogenitatea este explicită.",
   "Treptele 3,0/3,5 pentru moderat trombogene sunt din listă.",
   "Contrastul auscultator mecanic/biologic este descris.",
   "Lista factorilor adiționali (inclusiv AS >50 mm și FEVS <35%) este din text.",
   "Nu există indicație DOAC la proteze."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune biologicul la INR 4,0 pe viață — treapta Starr-Edwards — și introduce DOAC-ul interzis."
  },
  "textbookExpressions": [
   "10 ani",
   "INR 3,0"
  ]
 },
 {
  "id": "cardiologie-adv-186",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Anticoagularea protezei mecanice în sarcină:",
  "options": [
   "Warfarina traversează placenta, cu risc de 5-12% de embriopatie în primul trimestru și de hemoragie intracraniană fetală",
   "HGMM de două ori pe zi, cu anti-Xa 0,8-1,2 U/ml la 4 ore post-doză, oferă un efect mai consistent",
   "Heparina nefracționată are incidență ridicată (circa 25%) a trombozei valvulare în sarcină",
   "HGMM traversează placenta și cauzează embriopatie identică warfarinei",
   "Mortalitatea maternă asociată protezei mecanice în sarcină este neglijabilă (<0,1%)"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Warfarina traversează placenta, cu risc de 5-12% de embriopatie în primul trimestru și de hemoragie intracraniană fetală — Corect: Trecerea placentară, 5-12% și hemoragia fetală sunt explicite.\n\nHGMM de două ori pe zi, cu anti-Xa 0,8-1,2 U/ml la 4 ore post-doză, oferă un efect mai consistent — Corect: Schema HGMM și țintele anti-Xa sunt din text.\n\nHeparina nefracționată are incidență ridicată (circa 25%) a trombozei valvulare în sarcină — Corect: 25% tromboză sub UFH este cifra citată.\n\nHGMM traversează placenta și cauzează embriopatie identică warfarinei — Incorect: Heparinele nu traversează placenta și nu dau embriopatie.\n\nMortalitatea maternă asociată protezei mecanice în sarcină este neglijabilă (<0,1%) — Incorect: Mortalitatea maternă este 1-4%, nu <0,1%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1103, Proteze — Sarcină, anti-Xa și UFH 25% (pagini PDF: 264).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1103
   ],
   "pdfPages": [
    264
   ],
   "section": "Proteze — Sarcină, anti-Xa și UFH 25%"
  },
  "learningObjective": "Aplicarea ferestrei anti-Xa 0,8-1,2 și a riscului 25% de tromboză sub UFH, versus embriopatia 5-12%.",
  "optionRationales": [
   "Trecerea placentară, 5-12% și hemoragia fetală sunt explicite.",
   "Schema HGMM și țintele anti-Xa sunt din text.",
   "25% tromboză sub UFH este cifra citată.",
   "Heparinele nu traversează placenta și nu dau embriopatie.",
   "Mortalitatea maternă este 1-4%, nu <0,1%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie HGMM embriopatia warfarinei și comprimă mortalitatea maternă de la 1-4% la 0,1%."
  },
  "textbookExpressions": [
   "0,8-1,2 U / ml",
   "25%"
  ]
 },
 {
  "id": "cardiologie-adv-187",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Sursele de bacteriemie în endocardită (Fig. 30.89) includ:",
  "options": [
   "Cavitatea orală: streptococi viridans α-hemolitici, circa 1/3-1/2 din cazuri, mai multe în țările în dezvoltare",
   "Intestin/perineu: enterococi (E. faecalis); Strep. bovis legat de neoplazie intestinală",
   "CDIV: S. aureus, Candida (rar); heroina dizolvată în zeamă de lămâie contaminată",
   "Strep. bovis ca germen oral dominant, viridansul fiind intestinal",
   "Endocardita precoce pe proteză este comunitară, cu viridans 50-70%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cavitatea orală: streptococi viridans α-hemolitici, circa 1/3-1/2 din cazuri, mai multe în țările în dezvoltare — Corect: Gura: viridans, 1/3-1/2, mai multe în țările în dezvoltare.\n\nIntestin/perineu: enterococi (E. faecalis); Strep. bovis legat de neoplazie intestinală — Corect: Enterococul urinar/spitalicesc și bovis-neoplazie sunt din figură.\n\nCDIV: S. aureus, Candida (rar); heroina dizolvată în zeamă de lămâie contaminată — Corect: CDIV: S. aureus/Candida și zeama de lămâie.\n\nStrep. bovis ca germen oral dominant, viridansul fiind intestinal — Incorect: Bovis este intestinal, viridansul oral.\n\nEndocardita precoce pe proteză este comunitară, cu viridans 50-70% — Incorect: Precocele e nosocomial stafilococic în 60 de zile, nu comunitar streptococic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1104, Endocardita — Porți de intrare (pagini PDF: 265).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1104
   ],
   "pdfPages": [
    265
   ],
   "section": "Endocardita — Porți de intrare"
  },
  "learningObjective": "Potrivirea viridans oral, enterococ/bovis intestinal și S. aureus la CDIV.",
  "optionRationales": [
   "Gura: viridans, 1/3-1/2, mai multe în țările în dezvoltare.",
   "Enterococul urinar/spitalicesc și bovis-neoplazie sunt din figură.",
   "CDIV: S. aureus/Candida și zeama de lămâie.",
   "Bovis este intestinal, viridansul oral.",
   "Precocele e nosocomial stafilococic în 60 de zile, nu comunitar streptococic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează porțile viridans/bovis și tratează precocele de proteză ca infecție comunitară streptococică."
  },
  "textbookExpressions": [
   "Strep. bovis",
   "zeamă de lămâie"
  ]
 },
 {
  "id": "cardiologie-adv-188",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Cadranul 30.47 — explorări în endocardită:",
  "options": [
   "Trei seturi de hemoculturi din locuri de puncție diferite",
   "Serologie pentru Coxiella, Bartonella, Legionella, Chlamydia la culturi negative",
   "PCR scade ca răspuns la terapia eficientă și poate crește din nou în recăderi",
   "Un singur set din cateterul central înlocuiește cele trei seturi periferice",
   "Prelungirea PR este un semn de vindecare, nu de abces de rădăcină aortică"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Trei seturi de hemoculturi din locuri de puncție diferite — Corect: Trei seturi din locuri diferite sunt prima linie.\n\nSerologie pentru Coxiella, Bartonella, Legionella, Chlamydia la culturi negative — Corect: Serologia germenilor atipici este de luat în considerare la culturi negative.\n\nPCR scade ca răspuns la terapia eficientă și poate crește din nou în recăderi — Corect: PCR scade la terapie eficientă și crește în recăderi.\n\nUn singur set din cateterul central înlocuiește cele trei seturi periferice — Incorect: Un set de pe cateter nu înlocuiește protocolul.\n\nPrelungirea PR este un semn de vindecare, nu de abces de rădăcină aortică — Incorect: Prelungirea PR se asociază abceselor de rădăcină aortică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1106, 1105, Endocardita — Cadranul 30.47 (pagini PDF: 267, 266).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1106,
    1105
   ],
   "pdfPages": [
    267,
    266
   ],
   "section": "Endocardita — Cadranul 30.47"
  },
  "learningObjective": "Trei seturi, serologia culturilor negative și dinamica PCR sub tratament.",
  "optionRationales": [
   "Trei seturi din locuri diferite sunt prima linie.",
   "Serologia germenilor atipici este de luat în considerare la culturi negative.",
   "PCR scade la terapie eficientă și crește în recăderi.",
   "Un set de pe cateter nu înlocuiește protocolul.",
   "Prelungirea PR se asociază abceselor de rădăcină aortică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce bacteriologia la un set de pe cateter și interpretează PR lung ca vindecare."
  },
  "textbookExpressions": [
   "Trei seturi",
   "proteină C reactivă"
  ]
 },
 {
  "id": "cardiologie-adv-189",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Boala Chagas cardiacă:",
  "options": [
   "Este cauzată de Trypanosoma cruzi; endemică în America de Sud, cu peste 20 de milioane de infectați",
   "Faza acută: miocardită cu febră și IC congestivă; faza cronică: CMD cu tendință la blocuri și aritmii ventriculare",
   "Amiodarona este utilă pentru controlul aritmiilor ventriculare",
   "Este o boală autozomal dominantă sarcomerică, identică CMH",
   "Serologia virală o confirmă de primă intenție, IRM-ul fiind inutil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este cauzată de Trypanosoma cruzi; endemică în America de Sud, cu peste 20 de milioane de infectați — Corect: Parazitul și cifra de 20 de milioane sunt explicite.\n\nFaza acută: miocardită cu febră și IC congestivă; faza cronică: CMD cu tendință la blocuri și aritmii ventriculare — Corect: Cele două faze sunt descrise.\n\nAmiodarona este utilă pentru controlul aritmiilor ventriculare — Corect: Amiodarona este menționată pentru aritmii ventriculare.\n\nEste o boală autozomal dominantă sarcomerică, identică CMH — Incorect: Chagas este infecțioasă, nu o mutație sarcomerică.\n\nSerologia virală o confirmă de primă intenție, IRM-ul fiind inutil — Incorect: Diagnosticul nu se bazează pe serologie virală (neutilă în miocardita virală).\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1119, Miocard — Boala Chagas (pagini PDF: 268).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1119
   ],
   "pdfPages": [
    268
   ],
   "section": "Miocard — Boala Chagas"
  },
  "learningObjective": "Reținerea ordinii de 20 de milioane, a evoluției acut→CMD și a rolului amiodaronei.",
  "optionRationales": [
   "Parazitul și cifra de 20 de milioane sunt explicite.",
   "Cele două faze sunt descrise.",
   "Amiodarona este menționată pentru aritmii ventriculare.",
   "Chagas este infecțioasă, nu o mutație sarcomerică.",
   "Diagnosticul nu se bazează pe serologie virală (neutilă în miocardita virală)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă Chagas-ul parazitar sud-american într-o CMH sarcomerică."
  },
  "textbookExpressions": [
   "20 de milioane",
   "Trypanosoma cruzi"
  ]
 },
 {
  "id": "cardiologie-adv-190",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Clasificarea ESC a cardiomiopatiilor distinge fenotipurile:",
  "options": [
   "Hipertrofică, aritmogenă, dilatativă, restrictivă și neclasificate, apoi familiale versus non-familiale",
   "Doar ischemice versus hipertensive, fără fenotip morfologic",
   "O singură entitate, „cardiomiopatia nespecifică”",
   "Doar Tako-tsubo și peripartum",
   "Doar bolile de depozit (Danon, Pompe, Fabry)"
  ],
  "correct": [
   0
  ],
  "explanation": "Hipertrofică, aritmogenă, dilatativă, restrictivă și neclasificate, apoi familiale versus non-familiale — Corect: Cele cinci categorii și subdiviziunea genetică sunt explicite.\n\nDoar ischemice versus hipertensive, fără fenotip morfologic — Incorect: Ischemicul/hipertensivul sunt cauze alternative excluse din definiția CMH, nu clasificarea ESC.\n\nO singură entitate, „cardiomiopatia nespecifică” — Incorect: Există fenotipuri distincte, nu o entitate unică.\n\nDoar Tako-tsubo și peripartum — Incorect: Tako-tsubo și peripartum sunt cardiomiopatii dobândite, discutate ulterior.\n\nDoar bolile de depozit (Danon, Pompe, Fabry) — Incorect: Bolile de depozit mimează CMH, nu epuizează clasificarea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1119, Cardiomiopatii — Clasificarea ESC (pagini PDF: 268).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1119
   ],
   "pdfPages": [
    268
   ],
   "section": "Cardiomiopatii — Clasificarea ESC"
  },
  "learningObjective": "Memorarea celor cinci fenotipuri ESC și a diviziunii familial/non-familial.",
  "optionRationales": [
   "Cele cinci categorii și subdiviziunea genetică sunt explicite.",
   "Ischemicul/hipertensivul sunt cauze alternative excluse din definiția CMH, nu clasificarea ESC.",
   "Există fenotipuri distincte, nu o entitate unică.",
   "Tako-tsubo și peripartum sunt cardiomiopatii dobândite, discutate ulterior.",
   "Bolile de depozit mimează CMH, nu epuizează clasificarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce clasificarea ESC la etiologii ischemice sau la formele dobândite, ignorând cele cinci fenotipuri."
  },
  "textbookExpressions": [
   "cardiomiopatia dilatativă",
   "neclasificate"
  ]
 },
 {
  "id": "cardiologie-adv-191",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tratamentul obstrucției dinamice din cardiomiopatia hipertrofică:",
  "options": [
   "Durerea și dispneea: beta-blocante, verapamil sau ambele; disopiramida ca alternativă dacă există LVOTO",
   "Ablația septală cu alcool poate reduce obstrucția, cu risc de BAV complet și infarct",
   "Vasodilatatoarele trebuie evitate, putând agrava LVOTO sau produce hipotensiune refractară",
   "La unii simptomatici cu obstrucție semnificativă se poate implanta un stimulator bicameral",
   "Ablația cu alcool este lipsită de riscuri de conducere"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Durerea și dispneea: beta-blocante, verapamil sau ambele; disopiramida ca alternativă dacă există LVOTO — Corect: BB/verapamil/disopiramida sunt linia simptomatică.\n\nAblația septală cu alcool poate reduce obstrucția, cu risc de BAV complet și infarct — Corect: Alcoolul septal reduce obstrucția, dar poate da BAV complet și IM.\n\nVasodilatatoarele trebuie evitate, putând agrava LVOTO sau produce hipotensiune refractară — Corect: Vasodilatatoarele agravează LVOTO.\n\nLa unii simptomatici cu obstrucție semnificativă se poate implanta un stimulator bicameral — Corect: Stimulatorul bicameral este menționat la obstrucție semnificativă simptomatică.\n\nAblația cu alcool este lipsită de riscuri de conducere — Incorect: Riscurile de conducere și de IM sunt explicite.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1120, CMH — LVOTO, alcool septal și vasodilatatoare (pagini PDF: 269).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1120
   ],
   "pdfPages": [
    269
   ],
   "section": "CMH — LVOTO, alcool septal și vasodilatatoare"
  },
  "learningObjective": "Interdicția vasodilatatoarelor, riscurile ablației septale (BAV, IM) și opțiunea de stimulare bicamerală.",
  "optionRationales": [
   "BB/verapamil/disopiramida sunt linia simptomatică.",
   "Alcoolul septal reduce obstrucția, dar poate da BAV complet și IM.",
   "Vasodilatatoarele agravează LVOTO.",
   "Stimulatorul bicameral este menționat la obstrucție semnificativă simptomatică.",
   "Riscurile de conducere și de IM sunt explicite."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune vasodilatatorul — agent care agravează LVOTO — ca primă linie."
  },
  "textbookExpressions": [
   "Ablaţia cu alcool",
   "Vasodilatatoarele"
  ]
 },
 {
  "id": "cardiologie-adv-192",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Cardiomiopatia aritmogenă — epidemiologie și genetica recesivă:",
  "options": [
   "Prevalență 1 la 1.000-5.000; afectare de VS raportată la până la 75%",
   "Naxos: keratodermă plantară și păr lânos, mutație de plakoglobină joncțională",
   "Carvajal: mutație de desmoplakină",
   "RyR2 cauzează Naxos, nu CPVT",
   "Afectarea VS este excepțională, sub 5%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Prevalență 1 la 1.000-5.000; afectare de VS raportată la până la 75% — Corect: Prevalența și 75% VS sunt explicite.\n\nNaxos: keratodermă plantară și păr lânos, mutație de plakoglobină joncțională — Corect: Naxos: fenotip cutanat + plakoglobină.\n\nCarvajal: mutație de desmoplakină — Corect: Carvajal: desmoplakină.\n\nRyR2 cauzează Naxos, nu CPVT — Incorect: RyR2 este asociat formei autosomale dominante și CPVT, nu Naxos.\n\nAfectarea VS este excepțională, sub 5% — Incorect: Afectarea VS ajunge la 75%, nu 5%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1121, 1120, CMA — 1/1000-5000, Naxos, Carvajal (pagini PDF: 270, 269).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1121,
    1120
   ],
   "pdfPages": [
    270,
    269
   ],
   "section": "CMA — 1/1000-5000, Naxos, Carvajal"
  },
  "learningObjective": "Contrastul Naxos (plakoglobină) versus Carvajal (desmoplakină) și ponderea 75% a afectării de VS.",
  "optionRationales": [
   "Prevalența și 75% VS sunt explicite.",
   "Naxos: fenotip cutanat + plakoglobină.",
   "Carvajal: desmoplakină.",
   "RyR2 este asociat formei autosomale dominante și CPVT, nu Naxos.",
   "Afectarea VS ajunge la 75%, nu 5%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează genele Naxos/Carvajal și comprimă afectarea VS de la 75% la 5%."
  },
  "textbookExpressions": [
   "75% din cazuri",
   "boala Naxos"
  ]
 },
 {
  "id": "cardiologie-adv-193",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Criteriile de lucru pentru diagnosticul CMA includ:",
  "options": [
   "Anomalii structurale ale VD/tractului de ejecție pe eco sau IRM",
   "Înlocuire fibro-grăsoasă la biopsie; anomalii de repolarizare/conducere, inclusiv ECG cu semnal mediat",
   "TV sau ESV frecvente la Holter; rudă de grad I sau II cu CMA; MSC prematură (<35 de ani) prin CMA",
   "ECG-ul de efort negativ ca unic criteriu suficient",
   "Biopsia este inutilă, fibro-grăsosul nefiind un criteriu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Anomalii structurale ale VD/tractului de ejecție pe eco sau IRM — Corect: Dilatarea/cinetica VD sunt criterii.\n\nÎnlocuire fibro-grăsoasă la biopsie; anomalii de repolarizare/conducere, inclusiv ECG cu semnal mediat — Corect: Histologia și ECG-ul (inclusiv signal-averaged) sunt listate.\n\nTV sau ESV frecvente la Holter; rudă de grad I sau II cu CMA; MSC prematură (<35 de ani) prin CMA — Corect: Holterul, ruda și MSC <35 ani completează setul.\n\nECG-ul de efort negativ ca unic criteriu suficient — Incorect: Testul de efort negativ nu este criteriu unic.\n\nBiopsia este inutilă, fibro-grăsosul nefiind un criteriu — Incorect: Înlocuirea fibro-grăsoasă la biopsie este un criteriu.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1122, CMA — Criterii de diagnostic (pagini PDF: 271).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1122
   ],
   "pdfPages": [
    271
   ],
   "section": "CMA — Criterii de diagnostic"
  },
  "learningObjective": "Listarea criteriilor (structură VD, histologie, ECG/Holter, familie, MSC <35 ani).",
  "optionRationales": [
   "Dilatarea/cinetica VD sunt criterii.",
   "Histologia și ECG-ul (inclusiv signal-averaged) sunt listate.",
   "Holterul, ruda și MSC <35 ani completează setul.",
   "Testul de efort negativ nu este criteriu unic.",
   "Înlocuirea fibro-grăsoasă la biopsie este un criteriu."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Elimină histologia fibro-grăsoasă — criteriu de lucru explicit — și o înlocuiește cu un test de efort negativ."
  },
  "textbookExpressions": [
   "<35 ani",
   "fibro-grăsoasă"
  ]
 },
 {
  "id": "cardiologie-adv-194",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Cardiomiopatia dilatativă familială versus sporadică:",
  "options": [
   "Prevalență 7-12/100.000; dilatare ventriculară și disfuncție sistolică, cu grosime parietală prezervată",
   "Familială: predominant autosomal dominantă, >20 de loci; distrofina în forma X-linkată, lamin a/c în AD",
   "Sporadică: miocardită (Coxsackie, adeno, HIV, Chagas), toxice (alcool, chimio, cobalt/plumb/mercur/arsen), autoimune, endocrine, neuromusculare",
   "Distrofina explică forma AD, iar lamin a/c forma X-linkată",
   "Grosimea parietală este marcat crescută, identic CMH"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Prevalență 7-12/100.000; dilatare ventriculară și disfuncție sistolică, cu grosime parietală prezervată — Corect: Prevalența și fenotipul (dilatare, FE scăzută, pereți prezervați) sunt explicite.\n\nFamilială: predominant autosomal dominantă, >20 de loci; distrofina în forma X-linkată, lamin a/c în AD — Corect: >20 de loci, distrofina XL și lamin a/c AD sunt din text.\n\nSporadică: miocardită (Coxsackie, adeno, HIV, Chagas), toxice (alcool, chimio, cobalt/plumb/mercur/arsen), autoimune, endocrine, neuromusculare — Corect: Cauzele sporadice sunt enumerate.\n\nDistrofina explică forma AD, iar lamin a/c forma X-linkată — Incorect: Atribuirea genelor este inversată.\n\nGrosimea parietală este marcat crescută, identic CMH — Incorect: Pereții sunt prezervați ca grosime, nu hipertrofiați ca în CMH.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1122, CMD — 7-12/100.000, distrofină, toxice (pagini PDF: 271).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1122
   ],
   "pdfPages": [
    271
   ],
   "section": "CMD — 7-12/100.000, distrofină, toxice"
  },
  "learningObjective": "Potrivirea distrofinei X-linkate versus lamin a/c AD și a listei toxice/infecțioase sporadice.",
  "optionRationales": [
   "Prevalența și fenotipul (dilatare, FE scăzută, pereți prezervați) sunt explicite.",
   ">20 de loci, distrofina XL și lamin a/c AD sunt din text.",
   "Cauzele sporadice sunt enumerate.",
   "Atribuirea genelor este inversată.",
   "Pereții sunt prezervați ca grosime, nu hipertrofiați ca în CMH."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează distrofina (XL) cu lamin a/c (AD) și pune hipertrofia CMH pe CMD."
  },
  "textbookExpressions": [
   "7-12 cazuri",
   "Distrofină"
  ]
 },
 {
  "id": "cardiologie-adv-195",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Amiloidoza cardiacă, dincolo de aspectul eco:",
  "options": [
   "Biopsia endomiocardică este frecvent utilă, spre deosebire de alte cardiomiopatii, și poate confirma amiloidul",
   "Prognosticul este mai grav decât în alte forme; amiloidul reapare des după transplant cardiac",
   "Transplantul hepatic poate fi eficient în forma familială (prealbumină mutantă) și poate inversa anomaliile cardiace",
   "Cateterismul nu ajută diferențierea de constricție",
   "Nu există nicio strategie de tratament a IC sau a emboliilor"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Biopsia endomiocardică este frecvent utilă, spre deosebire de alte cardiomiopatii, și poate confirma amiloidul — Corect: Biopsia este frecvent utilă aici, spre deosebire de alte CM.\n\nPrognosticul este mai grav decât în alte forme; amiloidul reapare des după transplant cardiac — Corect: Prognosticul mai grav și recurența post-transplant sunt explicite.\n\nTransplantul hepatic poate fi eficient în forma familială (prealbumină mutantă) și poate inversa anomaliile cardiace — Corect: Transplantul hepatic în forma familială poate inversa anomaliile cardiace.\n\nCateterismul nu ajută diferențierea de constricție — Incorect: Cateterismul (uneori după încărcare volemică) ajută diferențierea de constricție.\n\nNu există nicio strategie de tratament a IC sau a emboliilor — Incorect: IC și emboliile se tratează; transplantul cardiac se discută în forme idiopatice severe.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1124, 1123, Amiloidoză — Biopsie, transplant hepatic (pagini PDF: 273, 272).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1124,
    1123
   ],
   "pdfPages": [
    273,
    272
   ],
   "section": "Amiloidoză — Biopsie, transplant hepatic"
  },
  "learningObjective": "Rolul biopsiei, al recurenței post-transplant cardiac și al transplantului hepatic în forma familială.",
  "optionRationales": [
   "Biopsia este frecvent utilă aici, spre deosebire de alte CM.",
   "Prognosticul mai grav și recurența post-transplant sunt explicite.",
   "Transplantul hepatic în forma familială poate inversa anomaliile cardiace.",
   "Cateterismul (uneori după încărcare volemică) ajută diferențierea de constricție.",
   "IC și emboliile se tratează; transplantul cardiac se discută în forme idiopatice severe."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă utilitatea biopsiei — tocmai excepția amiloidului — și a transplantului hepatic familial."
  },
  "textbookExpressions": [
   "prealbumină",
   "Biopsia endomiocardică"
  ]
 },
 {
  "id": "cardiologie-adv-196",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tahicardiomiopatia se caracterizează prin:",
  "options": [
   "Perioade lungi de tahicardie supra- sau ventriculară care conduc la CMD",
   "Cardioversia și ablația pot restabili sinusul și recupera funcția",
   "Este identică Tako-tsubo, cu coronare libere și balonizare apicală",
   "Apare doar în ultimul trimestru de sarcină",
   "Nu se tratează, funcția fiind ireversibil pierdută"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Perioade lungi de tahicardie supra- sau ventriculară care conduc la CMD — Corect: Definiția este explicită.\n\nCardioversia și ablația pot restabili sinusul și recupera funcția — Corect: Cardioversia și ablația sunt menționate pentru recuperare.\n\nEste identică Tako-tsubo, cu coronare libere și balonizare apicală — Incorect: Tako-tsubo are alt mecanism (catecolamine, balonizare).\n\nApare doar în ultimul trimestru de sarcină — Incorect: Peripartum-ul, nu tahicardiomiopatia, ține de sarcină.\n\nNu se tratează, funcția fiind ireversibil pierdută — Incorect: Funcția se poate recupera după controlul ritmului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1124, Cardiomiopatii dobândite — Tahicardiomiopatia (pagini PDF: 273).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1124
   ],
   "pdfPages": [
    273
   ],
   "section": "Cardiomiopatii dobândite — Tahicardiomiopatia"
  },
  "learningObjective": "Recunoașterea CMD-ului indus de tahicardie prelungită și a reversibilității după cardioversie/ablație.",
  "optionRationales": [
   "Definiția este explicită.",
   "Cardioversia și ablația sunt menționate pentru recuperare.",
   "Tako-tsubo are alt mecanism (catecolamine, balonizare).",
   "Peripartum-ul, nu tahicardiomiopatia, ține de sarcină.",
   "Funcția se poate recupera după controlul ritmului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Suprapune tahicardiomiopatia peste Tako-tsubo sau peripartum, trei entități consecutive pe aceeași pagină."
  },
  "textbookExpressions": [
   "Tahicardiomiopatia",
   "Cardioversia"
  ]
 },
 {
  "id": "cardiologie-adv-197",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Pericardul normal și spectrul bolilor pericardice:",
  "options": [
   "Sac fibros extern + seros intern (epicard visceral și pericard parietal); 20-49 ml de lichid lubrifiant",
   "Se prezintă ca pericardită acută/incesantă/cronică, revărsat/tamponadă, constricție sau formațiuni",
   "Etiologii: virală (Coxsackie, echo, HIV), Dressler tardiv, uremică, mixedematoasă, post-iradiere, post-pericardiotomie",
   "Cantitatea normală de lichid este 200-500 ml",
   "Pericardita acută este mai frecventă la femei vârstnice decât la bărbați tineri"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sac fibros extern + seros intern (epicard visceral și pericard parietal); 20-49 ml de lichid lubrifiant — Corect: Anatomia și volumul 20-49 ml sunt explicite.\n\nSe prezintă ca pericardită acută/incesantă/cronică, revărsat/tamponadă, constricție sau formațiuni — Corect: Cele patru prezentări sunt listate.\n\nEtiologii: virală (Coxsackie, echo, HIV), Dressler tardiv, uremică, mixedematoasă, post-iradiere, post-pericardiotomie — Corect: Cadranul 30.53 include aceste etiologii.\n\nCantitatea normală de lichid este 200-500 ml — Incorect: 20-49 ml, nu 200-500 ml (care ar fi deja revărsat mare).\n\nPericardita acută este mai frecventă la femei vârstnice decât la bărbați tineri — Incorect: Pericardita acută predomină la bărbați tineri.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1125, Pericard — Anatomie 20-49 ml și etiologii (pagini PDF: 274).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1125
   ],
   "pdfPages": [
    274
   ],
   "section": "Pericard — Anatomie 20-49 ml și etiologii"
  },
  "learningObjective": "Reținerea volumului 20-49 ml și a spectrului clinic, plus etiologiile Dressler/uremie/mixedem.",
  "optionRationales": [
   "Anatomia și volumul 20-49 ml sunt explicite.",
   "Cele patru prezentări sunt listate.",
   "Cadranul 30.53 include aceste etiologii.",
   "20-49 ml, nu 200-500 ml (care ar fi deja revărsat mare).",
   "Pericardita acută predomină la bărbați tineri."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă lichidul normal de la 20-49 ml la 200-500 ml și inversează sexul/vârsta."
  },
  "textbookExpressions": [
   "20-49 ml",
   "Sindrom Dressler"
  ]
 },
 {
  "id": "cardiologie-adv-198",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Pericardita acută — durere, ECG și formele de risc înalt:",
  "options": [
   "Durerea poate fi pleuritică, exacerbată de mișcare și ameliorată de aplecarea înainte",
   "ECG: ST concav în sus (șa), ST reciproc coborât în aVR și V1, plus subdenivelare PR",
   "Spitalizare dacă febră >38°C, debut subacut, revărsat mare, tamponadă sau lipsa de răspuns",
   "70-90% din cazuri sunt autolimitate",
   "Atleții reiau efortul în 48 de ore, fără a aștepta markerii"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Durerea poate fi pleuritică, exacerbată de mișcare și ameliorată de aplecarea înainte — Corect: Caracterul postural al durerii este descris.\n\nECG: ST concav în sus (șa), ST reciproc coborât în aVR și V1, plus subdenivelare PR — Corect: Șaua, aVR/V1 și PR coborât sunt explicite.\n\nSpitalizare dacă febră >38°C, debut subacut, revărsat mare, tamponadă sau lipsa de răspuns — Corect: Criteriile de risc înalt includ febra >38°C.\n\n70-90% din cazuri sunt autolimitate — Corect: 70-90% sunt autolimitate.\n\nAtleții reiau efortul în 48 de ore, fără a aștepta markerii — Incorect: Atleții evită efortul cel puțin 3 luni.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1125, Pericardită acută — PR, febră >38°C, 70-90% (pagini PDF: 274).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1125
   ],
   "pdfPages": [
    274
   ],
   "section": "Pericardită acută — PR, febră >38°C, 70-90%"
  },
  "learningObjective": "Completarea criteriilor cu subdenivelarea PR, ponderea 70-90% autolimitată și pragul de spitalizare >38°C.",
  "optionRationales": [
   "Caracterul postural al durerii este descris.",
   "Șaua, aVR/V1 și PR coborât sunt explicite.",
   "Criteriile de risc înalt includ febra >38°C.",
   "70-90% sunt autolimitate.",
   "Atleții evită efortul cel puțin 3 luni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Comprimă interdicția de efort a atleților de la 3 luni la 48 de ore."
  },
  "textbookExpressions": [
   "70-90%",
   ">38°C"
  ]
 },
 {
  "id": "cardiologie-adv-199",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Aproximativ 20% dintre pericarditele acute evoluează spre:",
  "options": [
   "Pericardită idiopatică recurentă, care poate fi incesantă",
   "Vindecare în 24 de ore, fără recurență posibilă",
   "Endocardită pe proteză, în toate cazurile",
   "CMH obstructivă",
   "Tamponadă cronică cu cord mic, calcificat"
  ],
  "correct": [
   0
  ],
  "explanation": "Pericardită idiopatică recurentă, care poate fi incesantă — Corect: Textul: circa 20% evoluează spre pericardită idiopatică recurentă, posibil incesantă.\n\nVindecare în 24 de ore, fără recurență posibilă — Incorect: Majoritatea sunt autolimitate în săptămâni, nu în 24 de ore fără recurență.\n\nEndocardită pe proteză, în toate cazurile — Incorect: Endocardita pe proteză este o altă entitate.\n\nCMH obstructivă — Incorect: CMH nu este o sechelă a pericarditei.\n\nTamponadă cronică cu cord mic, calcificat — Incorect: Constricția/tamponada au siluete diferite; 20% se referă la recurență.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1126, 1125, Pericardită — Recurența 20% (pagini PDF: 275, 274).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1126,
    1125
   ],
   "pdfPages": [
    275,
    274
   ],
   "section": "Pericardită — Recurența 20%"
  },
  "learningObjective": "Reținerea ponderii de 20% a recurenței idiopatice după un episod acut.",
  "optionRationales": [
   "Textul: circa 20% evoluează spre pericardită idiopatică recurentă, posibil incesantă.",
   "Majoritatea sunt autolimitate în săptămâni, nu în 24 de ore fără recurență.",
   "Endocardita pe proteză este o altă entitate.",
   "CMH nu este o sechelă a pericarditei.",
   "Constricția/tamponada au siluete diferite; 20% se referă la recurență."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește recurența de 20% cu vindecare într-o zi sau cu endocardită/CMH."
  },
  "textbookExpressions": [
   "20% din cazuri",
   "incesantă"
  ]
 },
 {
  "id": "cardiologie-adv-200",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Indicele gleznă-braț în boala arterială periferică:",
  "options": [
   "Claudicația intermitentă se asociază cu IGB 0,5-0,9",
   "Valori <0,5 se asociază cu ischemie critică de membru",
   "La artere incompresibile (diabet, boală renală) IGB este fals crescut; presiunea de la degete este mai sensibilă",
   "IGB 1,3-1,5 definește ischemia critică",
   "Duplexul are sensibilitate 50% și specificitate 40% față de angiografie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Claudicația intermitentă se asociază cu IGB 0,5-0,9 — Corect: 0,5-0,9 = claudicație.\n\nValori <0,5 se asociază cu ischemie critică de membru — Corect: <0,5 = ischemie critică.\n\nLa artere incompresibile (diabet, boală renală) IGB este fals crescut; presiunea de la degete este mai sensibilă — Corect: Calcificarea dă IGB fals crescut; degetele sunt mai sensibile.\n\nIGB 1,3-1,5 definește ischemia critică — Incorect: 1,3-1,5 sugerează incompresibilitate, nu ischemie critică.\n\nDuplexul are sensibilitate 50% și specificitate 40% față de angiografie — Incorect: Duplex: sensibilitate 87%, specificitate 95%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1128, BVP — IGB 0,5-0,9 versus <0,5 (pagini PDF: 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1128
   ],
   "pdfPages": [
    277
   ],
   "section": "BVP — IGB 0,5-0,9 versus <0,5"
  },
  "learningObjective": "Aplicarea benzilor IGB și a falsei creșteri pe artere calcificate.",
  "optionRationales": [
   "0,5-0,9 = claudicație.",
   "<0,5 = ischemie critică.",
   "Calcificarea dă IGB fals crescut; degetele sunt mai sensibile.",
   "1,3-1,5 sugerează incompresibilitate, nu ischemie critică.",
   "Duplex: sensibilitate 87%, specificitate 95%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează benzile IGB (pune 1,3-1,5 pe ischemia critică) și degradează duplexul de la 87/95% la 50/40%."
  },
  "textbookExpressions": [
   "0,5-0,9",
   "< 0,5"
  ]
 },
 {
  "id": "cardiologie-adv-201",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Boala arterială periferică — epidemiologie și Fontaine:",
  "options": [
   "Prezentă la 7% dintre bărbații și 4,5% dintre femeile de vârstă medie",
   "Fontaine: I asimptomatic, II claudicație, III durere de repaus/nocturnă, IV necroză/gangrenă",
   "Boala aorto-iliacă produce doar durere de gambă, fără disfuncție erectilă",
   "Predomină femeile tinere, fără ateroscleroză",
   "Stadiul I înseamnă gangrenă, iar IV este forma asimptomatică"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Prezentă la 7% dintre bărbații și 4,5% dintre femeile de vârstă medie — Corect: Cifrele 7% și 4,5% sunt explicite.\n\nFontaine: I asimptomatic, II claudicație, III durere de repaus/nocturnă, IV necroză/gangrenă — Corect: Cele patru stadii Fontaine sunt listate.\n\nBoala aorto-iliacă produce doar durere de gambă, fără disfuncție erectilă — Incorect: Boala aorto-iliacă poate da durere de fesă, șold sau coapsă și disfuncție erectilă, nu doar durere de gambă.\n\nPredomină femeile tinere, fără ateroscleroză — Incorect: Boala este aterosclerotică, mai frecventă la bărbații de vârstă medie.\n\nStadiul I înseamnă gangrenă, iar IV este forma asimptomatică — Incorect: Stadiile I și IV sunt inversate în această afirmație.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1128, BVP — 7%/4,5% și Fontaine (pagini PDF: 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1128
   ],
   "pdfPages": [
    277
   ],
   "section": "BVP — 7%/4,5% și Fontaine"
  },
  "learningObjective": "Reținerea prevalențelor 7/4,5% și a celor patru stadii Fontaine, plus sindromul aorto-iliac.",
  "optionRationales": [
   "Cifrele 7% și 4,5% sunt explicite.",
   "Cele patru stadii Fontaine sunt listate.",
   "Boala aorto-iliacă poate da durere de fesă, șold sau coapsă și disfuncție erectilă, nu doar durere de gambă.",
   "Boala este aterosclerotică, mai frecventă la bărbații de vârstă medie.",
   "Stadiile I și IV sunt inversate în această afirmație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează stadiile Fontaine I/IV și mută epidemiologia pe femeia tânără fără ateroscleroză."
  },
  "textbookExpressions": [
   "7%",
   "4,5%"
  ]
 },
 {
  "id": "cardiologie-adv-202",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Investigațiile imagistice în BVP:",
  "options": [
   "Ultrasonografia duplex (mod B + Doppler color) este de obicei prima linie: sensibilitate 87%, specificitate 95% versus angiografie",
   "Angio-IRM cu contrast: ambele membre, o singură injecție, fără radiație ionizantă",
   "Angio-CT este alternativă când IRM e contraindicată; calcificările extinse pot masca stenozele",
   "ASD (angiografie cu subtracție digitală) se folosește ca screening de primă intenție la toți asimptomaticii",
   "IGB fals scăzut pe artere calcificate face inutilă presiunea de la degete"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ultrasonografia duplex (mod B + Doppler color) este de obicei prima linie: sensibilitate 87%, specificitate 95% versus angiografie — Corect: 87% și 95% sunt cifrele duplexului.\n\nAngio-IRM cu contrast: ambele membre, o singură injecție, fără radiație ionizantă — Corect: Avantajele IRM sunt descrise.\n\nAngio-CT este alternativă când IRM e contraindicată; calcificările extinse pot masca stenozele — Corect: CT-ul e alternativa; calcificările maschează.\n\nASD (angiografie cu subtracție digitală) se folosește ca screening de primă intenție la toți asimptomaticii — Incorect: ASD cere canulare și contrast iodat; se folosește imediat anterior intervenției, nu ca screening.\n\nIGB fals scăzut pe artere calcificate face inutilă presiunea de la degete — Incorect: Pe artere calcificate IGB e fals crescut; degetele sunt mai sensibile.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1128, BVP — Duplex 87%/95% și angio-IRM (pagini PDF: 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1128
   ],
   "pdfPages": [
    277
   ],
   "section": "BVP — Duplex 87%/95% și angio-IRM"
  },
  "learningObjective": "Ierarhia duplex → IRM → CT, cu ASD rezervată imediat înaintea intervenției.",
  "optionRationales": [
   "87% și 95% sunt cifrele duplexului.",
   "Avantajele IRM sunt descrise.",
   "CT-ul e alternativa; calcificările maschează.",
   "ASD cere canulare și contrast iodat; se folosește imediat anterior intervenției, nu ca screening.",
   "Pe artere calcificate IGB e fals crescut; degetele sunt mai sensibile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Promovează ASD-ul invaziv ca screening și inversează direcția erorii IGB pe calcificare."
  },
  "textbookExpressions": [
   "87%",
   "95%"
  ]
 },
 {
  "id": "cardiologie-adv-203",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tratamentul medical al claudicației intermitente include:",
  "options": [
   "Control agresiv al factorilor de risc, din cauza riscului asociat de BCI și boală cerebrovasculară",
   "Program supervizat de exerciții: aerobic până la durerea maximală, cel puțin 2 ore pe săptămână",
   "La diabetici, control glicemic atent și evaluări regulate ale picioarelor",
   "Repaus la pat prelungit, fără efort, pentru a proteja placa",
   "IGB nu se folosește, diagnosticul fiind pur clinic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Control agresiv al factorilor de risc, din cauza riscului asociat de BCI și boală cerebrovasculară — Corect: Riscul de BCI/AVC justifică controlul agresiv.\n\nProgram supervizat de exerciții: aerobic până la durerea maximală, cel puțin 2 ore pe săptămână — Corect: Cele 2 ore și pragul durerii maximale sunt explicite.\n\nLa diabetici, control glicemic atent și evaluări regulate ale picioarelor — Corect: Diabetul cere control glicemic și îngrijirea picioarelor.\n\nRepaus la pat prelungit, fără efort, pentru a proteja placa — Incorect: Efortul supervizat este tratament, nu repausul.\n\nIGB nu se folosește, diagnosticul fiind pur clinic — Incorect: IGB stratifică severitatea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1128, BVP — Efort 2 ore/săptămână (pagini PDF: 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1128
   ],
   "pdfPages": [
    277
   ],
   "section": "BVP — Efort 2 ore/săptămână"
  },
  "learningObjective": "Protocolul de 2 ore/săptămână până la durerea maximală și controlul riscului CV asociat.",
  "optionRationales": [
   "Riscul de BCI/AVC justifică controlul agresiv.",
   "Cele 2 ore și pragul durerii maximale sunt explicite.",
   "Diabetul cere control glicemic și îngrijirea picioarelor.",
   "Efortul supervizat este tratament, nu repausul.",
   "IGB stratifică severitatea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește programul de 2 ore până la durere cu repaus la pat, inversul reabilitării."
  },
  "textbookExpressions": [
   "2 ore pe săptămână",
   "claudicaţie intermitentă"
  ]
 },
 {
  "id": "cardiologie-adv-204",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Diagnosticul diferențial al claudicației include:",
  "options": [
   "Claudicația de canal spinal, în care toate pulsurile sunt prezente",
   "Osteoartrita de șold/genunchi; neuropatia periferică cu amorțeală și furnicături",
   "Claudicația venoasă (tensiune la mers, TVP în antecedente) și boala Buerger (bărbați tineri, mari fumători)",
   "Canalul spinal cu pulsuri absente bilateral, ca în ischemie",
   "Buerger-ul la femei vârstnice nefumătoare, fără ischemie digitală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Claudicația de canal spinal, în care toate pulsurile sunt prezente — Corect: Canalul spinal: pulsuri prezente.\n\nOsteoartrita de șold/genunchi; neuropatia periferică cu amorțeală și furnicături — Corect: Osteoartrita și neuropatia sunt listate.\n\nClaudicația venoasă (tensiune la mers, TVP în antecedente) și boala Buerger (bărbați tineri, mari fumători) — Corect: Claudicația venoasă și Buerger-ul sunt din listă.\n\nCanalul spinal cu pulsuri absente bilateral, ca în ischemie — Incorect: Canalul spinal are pulsuri prezente, nu absente.\n\nBuerger-ul la femei vârstnice nefumătoare, fără ischemie digitală — Incorect: Buerger: bărbați tineri, mari fumători.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1128, BVP — Diagnostic diferențial (pagini PDF: 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1128
   ],
   "pdfPages": [
    277
   ],
   "section": "BVP — Diagnostic diferențial"
  },
  "learningObjective": "Opunerea pulsurilor prezente din canalul spinal față de Buerger-ul tânărului fumător.",
  "optionRationales": [
   "Canalul spinal: pulsuri prezente.",
   "Osteoartrita și neuropatia sunt listate.",
   "Claudicația venoasă și Buerger-ul sunt din listă.",
   "Canalul spinal are pulsuri prezente, nu absente.",
   "Buerger: bărbați tineri, mari fumători."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie canalului spinal pulsuri absente și mută Buerger-ul pe femeia vârstnică nefumătoare."
  },
  "textbookExpressions": [
   "canal spinal",
   "boala Buerger"
  ]
 },
 {
  "id": "cardiologie-adv-205",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Ateroscleroza prematură (sub 45 de ani) în BVP se poate asocia cu:",
  "options": [
   "Trombofilie și hiperhomocisteinemie",
   "Doar fumatul, fără alte trombofilii",
   "Hipotiroidismul mixedematos ca etiologie dominantă",
   "Pericardita familială",
   "Scor Fontaine 0, inexistent"
  ],
  "correct": [
   0
  ],
  "explanation": "Trombofilie și hiperhomocisteinemie — Corect: Textul leagă prematuritatea (<45 ani) de trombofilie și hiperhomocisteinemie.\n\nDoar fumatul, fără alte trombofilii — Incorect: Fumatul este factor de risc comun, dar nu exclude trombofiliile.\n\nHipotiroidismul mixedematos ca etiologie dominantă — Incorect: Mixedemul ține de pericard.\n\nPericardita familială — Incorect: Pericardita familială nu explică BVP prematură.\n\nScor Fontaine 0, inexistent — Incorect: Fontaine începe de la stadiul I.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1128, BVP — Ateroscleroză prematură <45 ani (pagini PDF: 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1128
   ],
   "pdfPages": [
    277
   ],
   "section": "BVP — Ateroscleroză prematură <45 ani"
  },
  "learningObjective": "Reținerea asocierii <45 de ani cu trombofilie și hiperhomocisteinemie.",
  "optionRationales": [
   "Textul leagă prematuritatea (<45 ani) de trombofilie și hiperhomocisteinemie.",
   "Fumatul este factor de risc comun, dar nu exclude trombofiliile.",
   "Mixedemul ține de pericard.",
   "Pericardita familială nu explică BVP prematură.",
   "Fontaine începe de la stadiul I."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Omite trombofilia/hiperhomocisteinemia — explicația citată a BVP sub 45 de ani."
  },
  "textbookExpressions": [
   "sub 45 ani",
   "hiperhomocisteinemie"
  ]
 },
 {
  "id": "cardiologie-adv-206",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Semnele ischemiei cronice de membru includ:",
  "options": [
   "Membre reci, piele uscată, pilozitate absentă, pulsuri diminuate sau absente",
   "Ulcerație, colorație închisă a degetelor sau gangrenă; abdomenul se palpează pentru anevrism de aortă",
   "Durerea de repaus trezește din somn și e calmată parțial de atârnarea piciorului sau de podeaua rece",
   "Membre calde, cu pulsuri săltărețe, identic regurgitării aortice",
   "Perimetrul de mers este nereproductibil, spre deosebire de claudicația adevărată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Membre reci, piele uscată, pilozitate absentă, pulsuri diminuate sau absente — Corect: Semnele cutanate și pulsurile sunt descrise.\n\nUlcerație, colorație închisă a degetelor sau gangrenă; abdomenul se palpează pentru anevrism de aortă — Corect: Ulcerația/gangrena și palparea de AAA sunt explicite.\n\nDurerea de repaus trezește din somn și e calmată parțial de atârnarea piciorului sau de podeaua rece — Corect: Caracterul nocturn și ameliorarea prin declivitate sunt din text.\n\nMembre calde, cu pulsuri săltărețe, identic regurgitării aortice — Incorect: Căldura și pulsul săltăreț sunt ale circulației hiperdinamice, nu ale ischemiei.\n\nPerimetrul de mers este nereproductibil, spre deosebire de claudicația adevărată — Incorect: Perimetrul de mers poate fi reproductibil.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1128, BVP — Semne și durere de repaus (pagini PDF: 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1128
   ],
   "pdfPages": [
    277
   ],
   "section": "BVP — Semne și durere de repaus"
  },
  "learningObjective": "Recunoașterea tegumentelor ischemic și a manevrei de atârnare a piciorului în durerea de repaus.",
  "optionRationales": [
   "Semnele cutanate și pulsurile sunt descrise.",
   "Ulcerația/gangrena și palparea de AAA sunt explicite.",
   "Caracterul nocturn și ameliorarea prin declivitate sunt din text.",
   "Căldura și pulsul săltăreț sunt ale circulației hiperdinamice, nu ale ischemiei.",
   "Perimetrul de mers poate fi reproductibil."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie ischemiei pulsul săltăreț al regurgitării aortice și neagă reproductibilitatea perimetrului de mers."
  },
  "textbookExpressions": [
   "Durere de repaus",
   "anevrism de aortă"
  ]
 },
 {
  "id": "cardiologie-adv-207",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "În Tako-tsubo, cazurile severe și gradientul ventricular:",
  "options": [
   "Se pot prezenta cu șoc cardiogen și edem pulmonar",
   "Pacienții cu gradient ventricular stâng semnificativ pot răspunde la beta-blocante, administrate cu prudență",
   "Recuperarea completă a funcției survine de obicei în 4-6 săptămâni, cu posibile recurențe",
   "Vasodilatatoarele de primă linie ameliorează gradientul, ca în CMH",
   "Coronarele sunt ocluzate proximal, identic STEMI de IVA"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se pot prezenta cu șoc cardiogen și edem pulmonar — Corect: Șocul și EPA sunt descrise în formele severe.\n\nPacienții cu gradient ventricular stâng semnificativ pot răspunde la beta-blocante, administrate cu prudență — Corect: Gradientul poate răspunde la BB cu prudență.\n\nRecuperarea completă a funcției survine de obicei în 4-6 săptămâni, cu posibile recurențe — Corect: Fereastra 4-6 săptămâni și recurențele sunt explicite.\n\nVasodilatatoarele de primă linie ameliorează gradientul, ca în CMH — Incorect: Vasodilatatoarele agravează obstrucția în CMH; textul nu le pune ca primă linie în Tako-tsubo cu gradient.\n\nCoronarele sunt ocluzate proximal, identic STEMI de IVA — Incorect: Coronarele sunt tipic neobstruate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1124, Tako-tsubo — Șoc, gradient și beta-blocant (pagini PDF: 273).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1124
   ],
   "pdfPages": [
    273
   ],
   "section": "Tako-tsubo — Șoc, gradient și beta-blocant"
  },
  "learningObjective": "Nișa beta-blocantului cu prudență la gradient VS și a prezentării cu șoc/EPA.",
  "optionRationales": [
   "Șocul și EPA sunt descrise în formele severe.",
   "Gradientul poate răspunde la BB cu prudență.",
   "Fereastra 4-6 săptămâni și recurențele sunt explicite.",
   "Vasodilatatoarele agravează obstrucția în CMH; textul nu le pune ca primă linie în Tako-tsubo cu gradient.",
   "Coronarele sunt tipic neobstruate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Ocluzează coronarele — tocmai elementul care desparte Tako-tsubo de STEMI — și pune vasodilatatorul pe gradient."
  },
  "textbookExpressions": [
   "şoc cardio",
   "4-6 săptămâni"
  ]
 },
 {
  "id": "cardiologie-adv-208",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Miocardita acută — dincolo de serologie și IRM:",
  "options": [
   "Un mic procent evoluează agravat și poate necesita transfer către un centru cu ECMO și/sau transplant",
   "Angiografia coronariană se face adesea pentru a exclude ischemia acută ca mimă",
   "Repaus la pat în faza acută; celulele gigante se asociază cu sarcoidoză, timoame și boli autoimune",
   "Serologia virală înlocuiește biopsia ca gold standard la toți pacienții",
   "Sportul se reia la 48 de ore, chiar în forma fulminantă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Un mic procent evoluează agravat și poate necesita transfer către un centru cu ECMO și/sau transplant — Corect: Minoritatea agravată și ECMO/transplantul sunt explicite.\n\nAngiografia coronariană se face adesea pentru a exclude ischemia acută ca mimă — Corect: Coronarografia de excludere a ischemiei este menționată.\n\nRepaus la pat în faza acută; celulele gigante se asociază cu sarcoidoză, timoame și boli autoimune — Corect: Repausul acut și asocierile celulelor gigante sunt din text.\n\nSerologia virală înlocuiește biopsia ca gold standard la toți pacienții — Incorect: Serologia virală de obicei nu este utilă; biopsia e gold standard la fulminant.\n\nSportul se reia la 48 de ore, chiar în forma fulminantă — Incorect: Sportul se evită 6 luni.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1119, Miocardită — ECMO, coronarografie, celule gigante (pagini PDF: 268).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1119
   ],
   "pdfPages": [
    268
   ],
   "section": "Miocardită — ECMO, coronarografie, celule gigante"
  },
  "learningObjective": "Rolul ECMO/transplantului în minoritatea agravată și al coronarografiei de excludere a ischemiei.",
  "optionRationales": [
   "Minoritatea agravată și ECMO/transplantul sunt explicite.",
   "Coronarografia de excludere a ischemiei este menționată.",
   "Repausul acut și asocierile celulelor gigante sunt din text.",
   "Serologia virală de obicei nu este utilă; biopsia e gold standard la fulminant.",
   "Sportul se evită 6 luni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune serologia virală — explicit neutilă — în locul biopsiei de la fulminant și comprimă interdicția sportului la 48 de ore."
  },
  "textbookExpressions": [
   "extracorporală",
   "celule gigante"
  ]
 },
 {
  "id": "cardiologie-adv-209",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Studiul multinațional din 2013 privind temperatura țintită după stop cardiac a arătat:",
  "options": [
   "Rezultate similare ale hipotermiei moderate (33°C) față de normotermie (36°C)",
   "Rezultate neurologice mai bune (dar nu și de mortalitate) într-un grup cu ritmuri neșocabile",
   "Că 28°C timp de 72 de ore este standardul actual, superior celor 33°C",
   "Că importanța hipotermiei terapeutice rămâne încă neclară",
   "Că hipertermia la 40°C ameliorează mortalitatea în ritmurile șocabile"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Rezultate similare ale hipotermiei moderate (33°C) față de normotermie (36°C) — Corect: Textul citează rezultate similare la 33°C versus 36°C.\n\nRezultate neurologice mai bune (dar nu și de mortalitate) într-un grup cu ritmuri neșocabile — Corect: În ritmuri neșocabile s-au raportat rezultate neurologice mai bune, fără câștig de mortalitate.\n\nCă 28°C timp de 72 de ore este standardul actual, superior celor 33°C — Incorect: 28°C/72 de ore nu este protocolul citat.\n\nCă importanța hipotermiei terapeutice rămâne încă neclară — Corect: Concluzia paragrafului: importanța hipotermiei terapeutice este încă neclară.\n\nCă hipertermia la 40°C ameliorează mortalitatea în ritmurile șocabile — Incorect: Hipertermia nu este strategia descrisă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1048, Post resuscitare — Studiul de temperatură 2013 (pagini PDF: 211).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1048
   ],
   "pdfPages": [
    211
   ],
   "section": "Post resuscitare — Studiul de temperatură 2013"
  },
  "learningObjective": "Reținerea comparației 33 versus 36°C și a nuanței că beneficiul neurologic din ritmurile neșocabile nu clarifică încă rolul hipotermiei.",
  "optionRationales": [
   "Textul citează rezultate similare la 33°C versus 36°C.",
   "În ritmuri neșocabile s-au raportat rezultate neurologice mai bune, fără câștig de mortalitate.",
   "28°C/72 de ore nu este protocolul citat.",
   "Concluzia paragrafului: importanța hipotermiei terapeutice este încă neclară.",
   "Hipertermia nu este strategia descrisă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă țintele 33/36°C cu o hipotermie profundă de 28°C, deși textul lasă importanța metodei neclară."
  },
  "textbookExpressions": [
   "33°C",
   "normotermie"
  ]
 },
 {
  "id": "cardiologie-adv-210",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Automatismul accelerat se caracterizează prin:",
  "options": [
   "Depolarizare diastolică lentă până la prag, urmată de potențialul de acțiune al celulelor pacemaker",
   "Accelerare prin creșterea pantei depolarizării diastolice sau prin modificarea potențialului prag",
   "Stimulare simpatică cu eliberare de adrenalină, producând tahicardie sinusală, ritmuri de scăpare și ritmuri joncționale accelerate",
   "Un miez inexcitabil cicatricial ca element necesar",
   "Originea majorității tahicardiilor paroxistice regulate, identic reintrării"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Depolarizare diastolică lentă până la prag, urmată de potențialul de acțiune al celulelor pacemaker — Corect: Automatismul normal este descris astfel.\n\nAccelerare prin creșterea pantei depolarizării diastolice sau prin modificarea potențialului prag — Corect: Cele două modalități de accelerare sunt explicite.\n\nStimulare simpatică cu eliberare de adrenalină, producând tahicardie sinusală, ritmuri de scăpare și ritmuri joncționale accelerate — Corect: Adrenalina leagă tahicardia sinusală de ritmurile de scăpare și joncționale accelerate.\n\nUn miez inexcitabil cicatricial ca element necesar — Incorect: Miezul inexcitabil aparține reintrării, nu automatismului.\n\nOriginea majorității tahicardiilor paroxistice regulate, identic reintrării — Incorect: Majoritatea tahicardiilor paroxistice regulate au la bază reintrarea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1051, Aritmii — Automatismul accelerat (pagini PDF: 212).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1051
   ],
   "pdfPages": [
    212
   ],
   "section": "Aritmii — Automatismul accelerat"
  },
  "learningObjective": "Diferențierea automatismului (pantă fază 4 / prag) de reintrarea în jurul unui miez inexcitabil.",
  "optionRationales": [
   "Automatismul normal este descris astfel.",
   "Cele două modalități de accelerare sunt explicite.",
   "Adrenalina leagă tahicardia sinusală de ritmurile de scăpare și joncționale accelerate.",
   "Miezul inexcitabil aparține reintrării, nu automatismului.",
   "Majoritatea tahicardiilor paroxistice regulate au la bază reintrarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie automatismului miezul cicatricial al reintrării, două mecanisme consecutive din Fig. 30.38."
  },
  "textbookExpressions": [
   "potenţialul prag",
   "ritmuri de scăpare"
  ]
 },
 {
  "id": "cardiologie-adv-211",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Cauzele extrinseci ale bradicardiei sinusale și reflexul Bezold-Jarisch includ:",
  "options": [
   "Hipotermia, hipotiroidismul, icterul colestatic și hipertensiunea intracraniană",
   "Tratamentul cu beta-blocante, digitalice sau alte antiaritmice",
   "Reflexul Bezold-Jarisch, care poate produce bradicardie (sinusală, oprire sinusală sau BAV) și vasodilatație periferică",
   "Hipertiroidismul netratat ca etiologie dominantă a bradicardiei sinusale",
   "Ischemia acută a nodului sinusal, clasată printre cauzele extrinseci, nu intrinseci"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hipotermia, hipotiroidismul, icterul colestatic și hipertensiunea intracraniană — Corect: Cele patru cauze sistemice sunt enumerate.\n\nTratamentul cu beta-blocante, digitalice sau alte antiaritmice — Corect: Medicamentele antiaritmice/beta-blocante/digitalice sunt cauze extrinseci.\n\nReflexul Bezold-Jarisch, care poate produce bradicardie (sinusală, oprire sinusală sau BAV) și vasodilatație periferică — Corect: Bezold-Jarisch produce atât bradicardie, cât și vasodilatație.\n\nHipertiroidismul netratat ca etiologie dominantă a bradicardiei sinusale — Incorect: Hipertiroidismul cauzează tahicardie, nu bradicardie.\n\nIschemia acută a nodului sinusal, clasată printre cauzele extrinseci, nu intrinseci — Incorect: Ischemia/infarctul nodului sinusal sunt cauze intrinseci.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1052, Bradicardii — Cauze extrinseci și Bezold-Jarisch (pagini PDF: 213).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1052
   ],
   "pdfPages": [
    213
   ],
   "section": "Bradicardii — Cauze extrinseci și Bezold-Jarisch"
  },
  "learningObjective": "Potrivirea listei extrinseci (inclusiv icterul colestatic) cu reflexul care asociază bradicardie și vasodilatație.",
  "optionRationales": [
   "Cele patru cauze sistemice sunt enumerate.",
   "Medicamentele antiaritmice/beta-blocante/digitalice sunt cauze extrinseci.",
   "Bezold-Jarisch produce atât bradicardie, cât și vasodilatație.",
   "Hipertiroidismul cauzează tahicardie, nu bradicardie.",
   "Ischemia/infarctul nodului sinusal sunt cauze intrinseci."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută ischemia nodului — cauză intrinsecă — în lista extrinsecă și pune hipertiroidismul pe bradicardie."
  },
  "textbookExpressions": [
   "icterul colestatic",
   "Bezold- Jarisch"
  ]
 },
 {
  "id": "cardiologie-adv-212",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Sindromul de tahicardie ortostatică posturală (POTS) și sincopa iatrogenă:",
  "options": [
   "POTS: creștere acută semnificativă a frecvenței, cu TA normală sau ușor redusă la ortostatism",
   "Mecanismul este vasoconstricția periferică insuficientă, compensată prin creșterea frecvenței",
   "Medicamentele antihipertensive, antidepresivele triciclice și neurolepticele pot cauza sincopă, mai ales la vârstnici",
   "POTS se definește prin hipotensiune severă fără creșterea frecvenței",
   "Sincopa iatrogenă se evită prin creșterea dozelor și prin asocierea a două sedative"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "POTS: creștere acută semnificativă a frecvenței, cu TA normală sau ușor redusă la ortostatism — Corect: Definiția hemodinamică este explicită.\n\nMecanismul este vasoconstricția periferică insuficientă, compensată prin creșterea frecvenței — Corect: Vasoconstricția insuficientă compensată tahicardic este mecanismul citat.\n\nMedicamentele antihipertensive, antidepresivele triciclice și neurolepticele pot cauza sincopă, mai ales la vârstnici — Corect: Cele trei clase medicamentoase sunt listate.\n\nPOTS se definește prin hipotensiune severă fără creșterea frecvenței — Incorect: TA este normală sau ușor redusă, nu hipotensiune fără tahicardie.\n\nSincopa iatrogenă se evită prin creșterea dozelor și prin asocierea a două sedative — Incorect: Textul cere adaptarea posologiei și evitarea asocierii a două medicamente care pot produce pierderea conștienței.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1052, Bradicardii — POTS și sincopa medicamentoasă (pagini PDF: 213).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1052
   ],
   "pdfPages": [
    213
   ],
   "section": "Bradicardii — POTS și sincopa medicamentoasă"
  },
  "learningObjective": "Recunoașterea vasoconstricției insuficiente ca mecanism POTS și a claselor care precipită sincopa vârstnicului.",
  "optionRationales": [
   "Definiția hemodinamică este explicită.",
   "Vasoconstricția insuficientă compensată tahicardic este mecanismul citat.",
   "Cele trei clase medicamentoase sunt listate.",
   "TA este normală sau ușor redusă, nu hipotensiune fără tahicardie.",
   "Textul cere adaptarea posologiei și evitarea asocierii a două medicamente care pot produce pierderea conștienței."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează hemodinamica POTS (tahicardie cu TA păstrată) într-o hipotensiune fără răspuns cronotrop."
  },
  "textbookExpressions": [
   "ortostatică posturală",
   "neurolep"
  ]
 },
 {
  "id": "cardiologie-adv-213",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Cardiostimularea temporară în bradicardia sinusală este indicată:",
  "options": [
   "La cauze reversibile, până la restaurarea ritmului sinusal",
   "La afectarea cronică degenerativă, până la implantarea stimulatorului permanent",
   "Ca substitut definitiv al stimulării DDD în boala de nod simptomatică",
   "Doar după eșecul ablației de nod AV",
   "În POTS, ca primă linie, înaintea oricărei măsuri de hidratare"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "La cauze reversibile, până la restaurarea ritmului sinusal — Corect: Textul rezervă stimularea temporară cauzelor reversibile până la restaurarea sinusului.\n\nLa afectarea cronică degenerativă, până la implantarea stimulatorului permanent — Corect: La degenerarea cronică, temporarul este punte către implantul permanent.\n\nCa substitut definitiv al stimulării DDD în boala de nod simptomatică — Incorect: Boala de nod simptomatică poate necesita DDD permanent, nu un temporar ca substitut definitiv.\n\nDoar după eșecul ablației de nod AV — Incorect: Ablația de nod AV nu este pasul prealabil al temporarului din bradicardia sinusală.\n\nÎn POTS, ca primă linie, înaintea oricărei măsuri de hidratare — Incorect: POTS nu are ca primă linie cardiostimularea temporară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1053, Bradicardii — Stimulare temporară (pagini PDF: 214).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1053
   ],
   "pdfPages": [
    214
   ],
   "section": "Bradicardii — Stimulare temporară"
  },
  "learningObjective": "Delimitarea ferestrei temporare: cauză reversibilă până la sinus versus punte către stimulatorul permanent.",
  "optionRationales": [
   "Textul rezervă stimularea temporară cauzelor reversibile până la restaurarea sinusului.",
   "La degenerarea cronică, temporarul este punte către implantul permanent.",
   "Boala de nod simptomatică poate necesita DDD permanent, nu un temporar ca substitut definitiv.",
   "Ablația de nod AV nu este pasul prealabil al temporarului din bradicardia sinusală.",
   "POTS nu are ca primă linie cardiostimularea temporară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă puntea temporară într-un substitut definitiv al DDD, inversând treptele de tratament."
  },
  "textbookExpressions": [
   "Cardiostimularea temporară",
   "restaurarea ritmului sinusal"
  ]
 },
 {
  "id": "cardiologie-adv-214",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Printre cauzele de BAV complet din Cadranul 30.13 se numără:",
  "options": [
   "Chirurgia cardiacă: post-înlocuire de valvă aortică, by-pass coronarian, corectarea DSV",
   "Iatrogen: ablația cu radiofrecvență a nodului AV și implantarea de stimulator",
   "Boli neuromusculare, de exemplu distrofia musculară Duchenne",
   "Hipertiroidismul ca etiologie dominantă, înaintea fibrozei idiopatice",
   "Doar ischemia, fără cauze chirurgicale sau neuromusculare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Chirurgia cardiacă: post-înlocuire de valvă aortică, by-pass coronarian, corectarea DSV — Corect: Cele trei contexte chirurgicale sunt listate.\n\nIatrogen: ablația cu radiofrecvență a nodului AV și implantarea de stimulator — Corect: Ablația de nod AV figurează la iatrogene.\n\nBoli neuromusculare, de exemplu distrofia musculară Duchenne — Corect: Duchenne este exemplul neuromuscular.\n\nHipertiroidismul ca etiologie dominantă, înaintea fibrozei idiopatice — Incorect: Hipertiroidismul nu este cauza dominantă din cadran.\n\nDoar ischemia, fără cauze chirurgicale sau neuromusculare — Incorect: Cadranul include și chirurgie, infecții, boli reumatice, nu doar ischemia.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1055, BAV complet — Chirurgie, iatrogen, Duchenne (pagini PDF: 216).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1055
   ],
   "pdfPages": [
    216
   ],
   "section": "BAV complet — Chirurgie, iatrogen, Duchenne"
  },
  "learningObjective": "Completarea cadranului cu porțile chirurgicală, iatrogenă și Duchenne, distincte de ischemia deja cunoscută.",
  "optionRationales": [
   "Cele trei contexte chirurgicale sunt listate.",
   "Ablația de nod AV figurează la iatrogene.",
   "Duchenne este exemplul neuromuscular.",
   "Hipertiroidismul nu este cauza dominantă din cadran.",
   "Cadranul include și chirurgie, infecții, boli reumatice, nu doar ischemia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce etiologia BAV complet la ischemie, deși cadranul include AVR, DSV și Duchenne."
  },
  "textbookExpressions": [
   "Duchenne",
   "By-pass coronarian"
  ]
 },
 {
  "id": "cardiologie-adv-215",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Blocul bifascicular se caracterizează prin:",
  "options": [
   "Combinația dintre blocul de ramură dreaptă și hemiblocul antero-superior sau postero-inferior",
   "Faptul că blocarea fasciculului rămas determină BAV complet",
   "Sincope prin bloc complet intermitent sau tahiaritmii ventriculare, care cer monitorizare ECG și studiu electrofiziologic",
   "Identitatea cu hemiblocul antero-superior izolat, fără BRD",
   "Un QRS constant sub 0,10 sec, fără risc de BAV complet"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Combinația dintre blocul de ramură dreaptă și hemiblocul antero-superior sau postero-inferior — Corect: Definiția combinației este explicită.\n\nFaptul că blocarea fasciculului rămas determină BAV complet — Corect: Blocul fasciculului rămas produce BAV complet.\n\nSincope prin bloc complet intermitent sau tahiaritmii ventriculare, care cer monitorizare ECG și studiu electrofiziologic — Corect: Sincopele (bloc intermitent sau TV) impun monitorizare și studiu EP.\n\nIdentitatea cu hemiblocul antero-superior izolat, fără BRD — Incorect: Hemiblocul izolat nu este bifascicular.\n\nUn QRS constant sub 0,10 sec, fără risc de BAV complet — Incorect: Blocul complet de ramură presupune QRS ≥0,12 sec; riscul de BAV există.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1056, Blocuri — Blocul bifascicular (pagini PDF: 217).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1056
   ],
   "pdfPages": [
    217
   ],
   "section": "Blocuri — Blocul bifascicular"
  },
  "learningObjective": "Recunoașterea combinației BRD + hemibloc și a riscului ca al treilea fascicul să închidă BAV-ul complet.",
  "optionRationales": [
   "Definiția combinației este explicită.",
   "Blocul fasciculului rămas produce BAV complet.",
   "Sincopele (bloc intermitent sau TV) impun monitorizare și studiu EP.",
   "Hemiblocul izolat nu este bifascicular.",
   "Blocul complet de ramură presupune QRS ≥0,12 sec; riscul de BAV există."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce bifascicularul la un hemibloc izolat și anulează riscul de BAV la blocarea fasciculului rămas."
  },
  "textbookExpressions": [
   "Blocul bifascicular",
   "hemibloc"
  ]
 },
 {
  "id": "cardiologie-adv-216",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Printre cauzele cronice de tahicardie sinusală secundară se numără:",
  "options": [
   "Sarcina, anemia, hipertiroidismul și excesul de catecolamine",
   "Doar efortul fizic acut, fără cauze persistente",
   "Blocul de ramură stângă complet, ca etiologie dominantă",
   "Hipotermia și icterul colestatic, identic bradicardiei sinusale",
   "Identificarea cauzei fiind superfluă, ivabradina înlocuind orice anchetă"
  ],
  "correct": [
   0
  ],
  "explanation": "Sarcina, anemia, hipertiroidismul și excesul de catecolamine — Corect: Cele patru cauze cronice sunt enumerate explicit.\n\nDoar efortul fizic acut, fără cauze persistente — Incorect: Efortul, durerea, febra țin de cauzele acute.\n\nBlocul de ramură stângă complet, ca etiologie dominantă — Incorect: BRS este o tulburare de conducere, nu o cauză de tahicardie sinusală.\n\nHipotermia și icterul colestatic, identic bradicardiei sinusale — Incorect: Hipotermia și icterul colestatic produc bradicardie.\n\nIdentificarea cauzei fiind superfluă, ivabradina înlocuind orice anchetă — Incorect: Identificarea factorului declanșator este preferabilă tratamentului răspunsului compensator.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1057, TSV — Cauze cronice de tahicardie sinusală (pagini PDF: 218).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1057
   ],
   "pdfPages": [
    218
   ],
   "section": "TSV — Cauze cronice de tahicardie sinusală"
  },
  "learningObjective": "Reținerea listei cronice (sarcină, anemie, tireotoxicoză, catecolamine), distinctă de cauzele acute.",
  "optionRationales": [
   "Cele patru cauze cronice sunt enumerate explicit.",
   "Efortul, durerea, febra țin de cauzele acute.",
   "BRS este o tulburare de conducere, nu o cauză de tahicardie sinusală.",
   "Hipotermia și icterul colestatic produc bradicardie.",
   "Identificarea factorului declanșator este preferabilă tratamentului răspunsului compensator."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută cauzele de bradicardie (hipotermie, icter) pe tahicardia sinusală cronică."
  },
  "textbookExpressions": [
   "hipertiroidismul",
   "excesul de catecolamine"
  ]
 },
 {
  "id": "cardiologie-adv-217",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Căile accesorii (fascicule Kent) și sindromul WPW:",
  "options": [
   "Cele mai frecvente căi Kent sunt în peretele liber sau septal",
   "Căile bidirecționale vizibile pe ECG de suprafață se numesc căi manifeste",
   "WPW asociază istoricul de palpitații cu preexcitație pe ECG (PR scurt și undă delta)",
   "Fibrele Mahaim sunt localizate constant pe inelul mitral stâng, nu în regiunea ramurii drepte",
   "Căile ascunse conduc anterograd și sunt vizibile în sinus prin undă delta"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cele mai frecvente căi Kent sunt în peretele liber sau septal — Corect: Localizarea perete liber sau septal este explicită.\n\nCăile bidirecționale vizibile pe ECG de suprafață se numesc căi manifeste — Corect: Căile bidirecționale vizibile = manifeste.\n\nWPW asociază istoricul de palpitații cu preexcitație pe ECG (PR scurt și undă delta) — Corect: WPW = palpitații + preexcitație (PR scurt, undă delta).\n\nFibrele Mahaim sunt localizate constant pe inelul mitral stâng, nu în regiunea ramurii drepte — Incorect: Mahaim pătrund în miocardul ventricular în regiunea ramurii drepte.\n\nCăile ascunse conduc anterograd și sunt vizibile în sinus prin undă delta — Incorect: Căile ascunse conduc doar ventricul→atriu și nu sunt vizibile în sinus.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1058, TSV — Fascicule Kent, căi manifeste și WPW (pagini PDF: 219).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1058
   ],
   "pdfPages": [
    219
   ],
   "section": "TSV — Fascicule Kent, căi manifeste și WPW"
  },
  "learningObjective": "Potrivirea Kent (perete liber/septal) cu definiția WPW (palpitații + preexcitație) și a căilor manifeste.",
  "optionRationales": [
   "Localizarea perete liber sau septal este explicită.",
   "Căile bidirecționale vizibile = manifeste.",
   "WPW = palpitații + preexcitație (PR scurt, undă delta).",
   "Mahaim pătrund în miocardul ventricular în regiunea ramurii drepte.",
   "Căile ascunse conduc doar ventricul→atriu și nu sunt vizibile în sinus."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează Mahaim (ramură dreaptă) cu inelul mitral și face din calea ascunsă o cale anterogradă cu undă delta."
  },
  "textbookExpressions": [
   "fascicule Kent",
   "undă delta"
  ]
 },
 {
  "id": "cardiologie-adv-218",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Adenozina în tratamentul acut al AVNRT/AVRT:",
  "options": [
   "Se dă inițial 6 mg i.v. bolus, apoi 12 mg dacă este nevoie",
   "Este o nucleozidă purinică cu acțiune scurtă, care produce BAV complet pentru o fracțiune de secundă",
   "Efectele adverse (durere toracică, senzație de moarte iminentă, bronhospasm, roșeață) sunt de scurtă durată; se folosește cu precauție la astmatici",
   "Influențează foarte rar tahicardiile ventriculare",
   "Este antiaritmicul de elecție în FA preexcitată cu QRS larg, împreună cu verapamilul"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Se dă inițial 6 mg i.v. bolus, apoi 12 mg dacă este nevoie — Corect: Schema 6 mg apoi 12 mg este explicită.\n\nEste o nucleozidă purinică cu acțiune scurtă, care produce BAV complet pentru o fracțiune de secundă — Corect: Nucleozida purinică și BAV-ul de o fracțiune de secundă sunt descrise.\n\nEfectele adverse (durere toracică, senzație de moarte iminentă, bronhospasm, roșeață) sunt de scurtă durată; se folosește cu precauție la astmatici — Corect: Lista de efecte scurte și precauția la astmatici sunt din text.\n\nInfluențează foarte rar tahicardiile ventriculare — Corect: Influențează foarte rar tahicardiile ventriculare.\n\nEste antiaritmicul de elecție în FA preexcitată cu QRS larg, împreună cu verapamilul — Incorect: Verapamilul/digoxinul sunt interzise în FA-WPW; adenozina nu este elecția QRS-ului larg preexcitat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1059, AVNRT/AVRT — Adenozina 6/12 mg (pagini PDF: 220).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1059
   ],
   "pdfPages": [
    220
   ],
   "section": "AVNRT/AVRT — Adenozina 6/12 mg"
  },
  "learningObjective": "Aplicarea dozelor 6 apoi 12 mg, a BAV-ului tranzitor și a precauției la astmatici, nu a folosirii în FA-WPW.",
  "optionRationales": [
   "Schema 6 mg apoi 12 mg este explicită.",
   "Nucleozida purinică și BAV-ul de o fracțiune de secundă sunt descrise.",
   "Lista de efecte scurte și precauția la astmatici sunt din text.",
   "Influențează foarte rar tahicardiile ventriculare.",
   "Verapamilul/digoxinul sunt interzise în FA-WPW; adenozina nu este elecția QRS-ului larg preexcitat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde adenozina — utilă în AVNRT — la FA preexcitată, unde textul interzice blocantele de nod."
  },
  "textbookExpressions": [
   "6 mg i.v.",
   "12 mg"
  ]
 },
 {
  "id": "cardiologie-adv-219",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Verapamilul, diltiazemul și beta-blocantele, ca tratament de durată al AVNRT/AVRT, s-au dovedit eficiente în circa:",
  "options": [
   "60-80% dintre cazuri",
   "10% dintre cazuri",
   "96%, identic modificării căii lente",
   "1%, identic riscului de BAV la ablație",
   "50%, identic recurenței după ablația unei căi accesorii"
  ],
  "correct": [
   0
  ],
  "explanation": "60-80% dintre cazuri — Corect: Textul: eficiență în 60-80% dintre cazuri.\n\n10% dintre cazuri — Incorect: 10% subestimează.\n\n96%, identic modificării căii lente — Incorect: 96% este succesul modificării căii lente.\n\n1%, identic riscului de BAV la ablație — Incorect: 1% este riscul de BAV complet la ablația căii lente.\n\n50%, identic recurenței după ablația unei căi accesorii — Incorect: 5% este recurența după ablația unei căi accesorii, nu 50%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1059, AVNRT/AVRT — Eficiența 60-80% (pagini PDF: 220).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1059
   ],
   "pdfPages": [
    220
   ],
   "section": "AVNRT/AVRT — Eficiența 60-80%"
  },
  "learningObjective": "Reținerea ferestrei 60-80% a blocantelor de nod, distinctă de 96%/95% ale ablației.",
  "optionRationales": [
   "Textul: eficiență în 60-80% dintre cazuri.",
   "10% subestimează.",
   "96% este succesul modificării căii lente.",
   "1% este riscul de BAV complet la ablația căii lente.",
   "5% este recurența după ablația unei căi accesorii, nu 50%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă 60-80% al medicamentelor cu 96% al ablației de cale lentă, două procente alăturate pe aceeași pagină."
  },
  "textbookExpressions": [
   "60-80%",
   "Verapamilul"
  ]
 },
 {
  "id": "cardiologie-adv-220",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Fibrilația atrială familială și forma de pe stenoză mitrală reumatismală:",
  "options": [
   "Defectele genelor de pe cromozomii 10, 6, 5 și 4 se asociază cu FA familială",
   "Când este cauzată de stenoza mitrală reumatismală, debutul FA corespunde unei agravări considerabile a insuficienței cardiace",
   "Răspunsul ventricular depinde de proprietățile nodului AV și de echilibrul simpatic–parasimpatic",
   "Genele implicate sunt doar ale canalelor de calciu, fără proteine de joncțiune gap",
   "Pe stenoza mitrală, FA ameliorează prognosticul prin scăderea presiunii venoase pulmonare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Defectele genelor de pe cromozomii 10, 6, 5 și 4 se asociază cu FA familială — Corect: Cei patru cromozomi sunt enumerați.\n\nCând este cauzată de stenoza mitrală reumatismală, debutul FA corespunde unei agravări considerabile a insuficienței cardiace — Corect: Debutul FA pe SM reumatismală agravează considerabil IC.\n\nRăspunsul ventricular depinde de proprietățile nodului AV și de echilibrul simpatic–parasimpatic — Corect: Răspunsul ventricular depinde de nodul AV și de tonusul vegetativ.\n\nGenele implicate sunt doar ale canalelor de calciu, fără proteine de joncțiune gap — Incorect: Textul menționează canale de sodiu, potasiu, proteine gap și izomerism, nu doar calciul.\n\nPe stenoza mitrală, FA ameliorează prognosticul prin scăderea presiunii venoase pulmonare — Incorect: FA pe SM agravează, nu ameliorează, insuficiența.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1060, Fibrilația atrială — Cromozomi 10/6/5/4 și SM reumatismală (pagini PDF: 221).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1060
   ],
   "pdfPages": [
    221
   ],
   "section": "Fibrilația atrială — Cromozomi 10/6/5/4 și SM reumatismală"
  },
  "learningObjective": "Potrivirea lociilor cromozomiale familiale cu deteriorarea hemodinamică de la debutul FA pe stenoza mitrală.",
  "optionRationales": [
   "Cei patru cromozomi sunt enumerați.",
   "Debutul FA pe SM reumatismală agravează considerabil IC.",
   "Răspunsul ventricular depinde de nodul AV și de tonusul vegetativ.",
   "Textul menționează canale de sodiu, potasiu, proteine gap și izomerism, nu doar calciul.",
   "FA pe SM agravează, nu ameliorează, insuficiența."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează agravarea clasică a stenozei mitrale la debutul FA și reduce genetica familială la canalele de calciu."
  },
  "textbookExpressions": [
   "cromozomii 10, 6, 5",
   "stenoză mitrală reumatismală"
  ]
 },
 {
  "id": "cardiologie-adv-221",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Un scor CHA2DS2-VASc de 1 punct corespunde unui risc anual de AVC ischemic de:",
  "options": [
   "0%, fără nicio discuție de anticoagulare",
   "1,3%, cu luarea în considerare a anticoagulării la bărbați",
   "2,2%, cu anticoagulare orală imediată, identic pragului de 2+ puncte",
   ">5%, identic HAS-BLED ≥3",
   "35,9%, ca TIMI STEMI 9-16"
  ],
  "correct": [
   1
  ],
  "explanation": "0%, fără nicio discuție de anticoagulare — Incorect: 0% este scorul 0.\n\n1,3%, cu luarea în considerare a anticoagulării la bărbați — Corect: Cadranul: 1 punct = 1,3%; se ia în considerare anticoagularea la bărbați.\n\n2,2%, cu anticoagulare orală imediată, identic pragului de 2+ puncte — Incorect: 2,2% este pragul de la 2+ puncte.\n\n>5%, identic HAS-BLED ≥3 — Incorect: >5% este riscul hemoragic HAS-BLED ≥3.\n\n35,9%, ca TIMI STEMI 9-16 — Incorect: 35,9% aparține TIMI STEMI.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1062, Fibrilația atrială — CHA2DS2-VASc 1 punct (pagini PDF: 223).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1062
   ],
   "pdfPages": [
    223
   ],
   "section": "Fibrilația atrială — CHA2DS2-VASc 1 punct"
  },
  "learningObjective": "Reținerea treptei 1,3% (1 punct, de luat în considerare la bărbați), intercalată între 0% și 2,2%.",
  "optionRationales": [
   "0% este scorul 0.",
   "Cadranul: 1 punct = 1,3%; se ia în considerare anticoagularea la bărbați.",
   "2,2% este pragul de la 2+ puncte.",
   ">5% este riscul hemoragic HAS-BLED ≥3.",
   "35,9% aparține TIMI STEMI."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă 1,3% (1 punct) cu 0% sau 2,2%, treptele adiacente ale aceluiași cadran."
  },
  "textbookExpressions": [
   "1,3% risc",
   "1 puncte"
  ]
 },
 {
  "id": "cardiologie-adv-222",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Itemii scorului HAS-BLED includ:",
  "options": [
   "Hipertensiune cu sistolică ≥160 mmHg",
   "Funcție renală sau hepatică anormală; AVC în antecedente; hemoragie; INR labil",
   "Vârstnic ≥65 de ani; medicație concomitentă; consum de alcool",
   "Diabetul zaharat și sexul feminin, identic CHA2DS2-VASc",
   "Un scor 0 corespunde unui risc hemoragic anual >5%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hipertensiune cu sistolică ≥160 mmHg — Corect: TAS ≥160 mmHg este primul item.\n\nFuncție renală sau hepatică anormală; AVC în antecedente; hemoragie; INR labil — Corect: Renal/hepatic, AVC, hemoragie și INR labil sunt listate.\n\nVârstnic ≥65 de ani; medicație concomitentă; consum de alcool — Corect: Vârsta ≥65, medicația și alcoolul completează scorul.\n\nDiabetul zaharat și sexul feminin, identic CHA2DS2-VASc — Incorect: Diabetul și sexul feminin țin de CHA2DS2-VASc.\n\nUn scor 0 corespunde unui risc hemoragic anual >5% — Incorect: Scorul 0 are risc circa 1%; >5% este la scor ≥3.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1062, Fibrilația atrială — Itemii HAS-BLED (pagini PDF: 223).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1062
   ],
   "pdfPages": [
    223
   ],
   "section": "Fibrilația atrială — Itemii HAS-BLED"
  },
  "learningObjective": "Listarea componentelor HAS-BLED (inclusiv TAS ≥160 mmHg), distincte de diabet/sexul din CHA2DS2-VASc.",
  "optionRationales": [
   "TAS ≥160 mmHg este primul item.",
   "Renal/hepatic, AVC, hemoragie și INR labil sunt listate.",
   "Vârsta ≥65, medicația și alcoolul completează scorul.",
   "Diabetul și sexul feminin țin de CHA2DS2-VASc.",
   "Scorul 0 are risc circa 1%; >5% este la scor ≥3."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Introduce diabetul/sexul din CHA2DS2-VASc în HAS-BLED și inversează riscul scorului 0 cu al scorului ≥3."
  },
  "textbookExpressions": [
   "160 mmHg",
   "INR labil"
  ]
 },
 {
  "id": "cardiologie-adv-223",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Comparativ cu warfarina, DOAC-urile:",
  "options": [
   "Blochează specific o singură treaptă a cascadei, pe când warfarina acționează pe factorii vitamina K-dependenți II, VII, IX și X",
   "Au acțiune mai rapidă, timp de înjumătățire mai scurt, mai puține interacțiuni și nu cer monitorizarea INR",
   "Datele de studii le arată la fel de eficiente și probabil mai sigure decât warfarina",
   "Inhibă simultan toți factorii II, VII, IX și X, identic AVK",
   "Antiagregantele rămân alternativa recomandată când DOAC-ul este disponibil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Blochează specific o singură treaptă a cascadei, pe când warfarina acționează pe factorii vitamina K-dependenți II, VII, IX și X — Corect: Mecanismul pe o treaptă versus cei patru factori este explicit.\n\nAu acțiune mai rapidă, timp de înjumătățire mai scurt, mai puține interacțiuni și nu cer monitorizarea INR — Corect: Farmacocinetica și absența INR sunt din text.\n\nDatele de studii le arată la fel de eficiente și probabil mai sigure decât warfarina — Corect: Eficacitatea similară și siguranța probabil superioară sunt citate.\n\nInhibă simultan toți factorii II, VII, IX și X, identic AVK — Incorect: Warfarina, nu DOAC-ul, acționează pe II, VII, IX și X.\n\nAntiagregantele rămân alternativa recomandată când DOAC-ul este disponibil — Incorect: Antiagregantele nu sunt recomandate pentru prevenția AVC.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1062, Fibrilația atrială — Factorii II, VII, IX, X versus DOAC (pagini PDF: 223).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1062
   ],
   "pdfPages": [
    223
   ],
   "section": "Fibrilația atrială — Factorii II, VII, IX, X versus DOAC"
  },
  "learningObjective": "Contrastul inhibiției pe o treaptă (DOAC) versus factorii vitamina K II/VII/IX/X (warfarină).",
  "optionRationales": [
   "Mecanismul pe o treaptă versus cei patru factori este explicit.",
   "Farmacocinetica și absența INR sunt din text.",
   "Eficacitatea similară și siguranța probabil superioară sunt citate.",
   "Warfarina, nu DOAC-ul, acționează pe II, VII, IX și X.",
   "Antiagregantele nu sunt recomandate pentru prevenția AVC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie DOAC-ului spectrul de factori vitamina K al warfarinei, inversând mecanismele."
  },
  "textbookExpressions": [
   "factorul 11, VI I, IX",
   "monitorizarea INR"
  ]
 },
 {
  "id": "cardiologie-adv-224",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Extrasistolele atriale:",
  "options": [
   "Sunt cel mai frecvent asimptomatice; uneori sunt resimțite ca bătăi neregulate sau puternice",
   "Pe ECG: unde P precoce sau cu morfologie anormală, de cele mai multe ori urmate de QRS normale",
   "Tratamentul nu este de obicei necesar; dacă precipită aritmii semnificative, beta-blocantele pot fi eficiente",
   "Impun ablație de nod AV de primă intenție",
   "Sunt urmate constant de o pauză compensatorie identică extrasistolelor ventriculare, fără QRS normal"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sunt cel mai frecvent asimptomatice; uneori sunt resimțite ca bătăi neregulate sau puternice — Corect: Simptomatologia discretă este descrisă.\n\nPe ECG: unde P precoce sau cu morfologie anormală, de cele mai multe ori urmate de QRS normale — Corect: Morfologia P precoce/anormală și QRS de obicei normale sunt explicite.\n\nTratamentul nu este de obicei necesar; dacă precipită aritmii semnificative, beta-blocantele pot fi eficiente — Incorect: Tratamentul nu este de obicei necesar; BB dacă duc la aritmii semnificative.\n\nImpun ablație de nod AV de primă intenție — Incorect: Ablația de nod nu este prima linie.\n\nSunt urmate constant de o pauză compensatorie identică extrasistolelor ventriculare, fără QRS normal — Incorect: Pauza compensatorie completă este descrisă la extrasistolele ventriculare, nu ca regulă aici.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1063, Tahiaritmii atriale — Extrasistolele atriale (pagini PDF: 224).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1063
   ],
   "pdfPages": [
    224
   ],
   "section": "Tahiaritmii atriale — Extrasistolele atriale"
  },
  "learningObjective": "Recunoașterea benignității uzuale și a opțiunii de beta-blocant doar când precipită aritmii semnificative.",
  "optionRationales": [
   "Simptomatologia discretă este descrisă.",
   "Morfologia P precoce/anormală și QRS de obicei normale sunt explicite.",
   "Tratamentul nu este de obicei necesar; BB dacă duc la aritmii semnificative.",
   "Ablația de nod nu este prima linie.",
   "Pauza compensatorie completă este descrisă la extrasistolele ventriculare, nu ca regulă aici."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Promovează ablația de nod — terapie de rezervă a FA — ca tratament al extrasistolei atriale benigne."
  },
  "textbookExpressions": [
   "Extrasistolele atriale",
   "beta-blocantele"
  ]
 },
 {
  "id": "cardiologie-adv-225",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tahicardia ventriculară susținută se caracterizează clinic și electrocardiografic prin:",
  "options": [
   "Durată >30 de secunde; frecvență 120-220 b.p.m.; unde „a” intermitente la jugulare și variabilitate a intensității zgomotului 1",
   "Pe ECG: QRS largi (frecvent ≥0,14 sec), unde P aleatorii, capturi ventriculare și bătăi de fuziune",
   "Dacă există incertitudine, tahicardia cu QRS larg se consideră ventriculară",
   "Instabilitatea (hipotensiune, edem pulmonar) impune cardioversie electrică de urgență",
   "La pacientul stabil, primul gest este ablația de istm cavo-tricuspidian, fără antiaritmice i.v."
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Durată >30 de secunde; frecvență 120-220 b.p.m.; unde „a” intermitente la jugulare și variabilitate a intensității zgomotului 1 — Corect: Definiția >30 s, fereastra 120-220 și semnele de disociație sunt explicite.\n\nPe ECG: QRS largi (frecvent ≥0,14 sec), unde P aleatorii, capturi ventriculare și bătăi de fuziune — Corect: Capturile (QRS înguste intermitente) și fuziunile sunt descrise.\n\nDacă există incertitudine, tahicardia cu QRS larg se consideră ventriculară — Corect: Textul: în caz de incertitudine se consideră ventriculară.\n\nInstabilitatea (hipotensiune, edem pulmonar) impune cardioversie electrică de urgență — Corect: Instabilul cere cardioversie de urgență.\n\nLa pacientul stabil, primul gest este ablația de istm cavo-tricuspidian, fără antiaritmice i.v. — Incorect: La stabil se pot folosi esmolol, clasa I sau amiodaronă; ablația de istm ține de flutter.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1063, TV susținută — Capturi, fuziune și 120-220/min (pagini PDF: 224).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1063
   ],
   "pdfPages": [
    224
   ],
   "section": "TV susținută — Capturi, fuziune și 120-220/min"
  },
  "learningObjective": "Reunirea semnelor de disociație AV (unde a, S1 variabil, capturi/fuziune) cu regula „la incertitudine = TV”.",
  "optionRationales": [
   "Definiția >30 s, fereastra 120-220 și semnele de disociație sunt explicite.",
   "Capturile (QRS înguste intermitente) și fuziunile sunt descrise.",
   "Textul: în caz de incertitudine se consideră ventriculară.",
   "Instabilul cere cardioversie de urgență.",
   "La stabil se pot folosi esmolol, clasa I sau amiodaronă; ablația de istm ține de flutter."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește cardioversia instabilului și antiaritmicele stabilului cu ablația de flutter, o procedură de pe pagina anterioară."
  },
  "textbookExpressions": [
   "capturi ventriculare",
   "120-220 b.p.m."
  ]
 },
 {
  "id": "cardiologie-adv-226",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Cauze dobândite de sindrom QT lung (Cadranul 30.18) includ:",
  "options": [
   "Hipopotasemia, hipomagnezemia și hipocalcemia",
   "Quinidină/disopiramidă, sotalol/amiodaronă, triciclice, fenotiazine, haloperidol, macrolide, quinolone, metadonă",
   "Organofosforice; bradicardie; prolaps de valvă mitrală; infarct acut; diabet; post prelungit; distrofie miotonică",
   "Hiperkaliemia ca etiologie dominantă, fără hipomagnezemie",
   "Beta-blocantele, care prelungesc QT identic sotalolului, fiind interzise în LQTS congenital"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hipopotasemia, hipomagnezemia și hipocalcemia — Corect: Cei trei ioni scăzuți sunt în tabel.\n\nQuinidină/disopiramidă, sotalol/amiodaronă, triciclice, fenotiazine, haloperidol, macrolide, quinolone, metadonă — Corect: Lista de medicamente este din cadran.\n\nOrganofosforice; bradicardie; prolaps de valvă mitrală; infarct acut; diabet; post prelungit; distrofie miotonică — Corect: Organofosforicele și cauzele diverse sunt enumerate.\n\nHiperkaliemia ca etiologie dominantă, fără hipomagnezemie — Incorect: Hiperkaliemia nu figurează; deficitul de K/Mg/Ca da.\n\nBeta-blocantele, care prelungesc QT identic sotalolului, fiind interzise în LQTS congenital — Incorect: Beta-blocantele sunt tratamentul de durată al formei congenitale, nu o cauză de QT lung.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1064, QT lung dobândit — Cadranul 30.18 (pagini PDF: 225).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1064
   ],
   "pdfPages": [
    225
   ],
   "section": "QT lung dobândit — Cadranul 30.18"
  },
  "learningObjective": "Listarea electrolitilor, a claselor medicamentoase și a cauzelor „diverse” (MVP, post, distrofie miotonică).",
  "optionRationales": [
   "Cei trei ioni scăzuți sunt în tabel.",
   "Lista de medicamente este din cadran.",
   "Organofosforicele și cauzele diverse sunt enumerate.",
   "Hiperkaliemia nu figurează; deficitul de K/Mg/Ca da.",
   "Beta-blocantele sunt tratamentul de durată al formei congenitale, nu o cauză de QT lung."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune hiperkaliemia — inversul hipoK din tabel — și interzice beta-blocantul, terapia LQTS congenital."
  },
  "textbookExpressions": [
   "Hipomagnezemia",
   "Metadonă"
  ]
 },
 {
  "id": "cardiologie-adv-227",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Extrasistolele ventriculare frecvente și pulsus bigeminus:",
  "options": [
   "După ESV urmează de obicei o pauză compensatorie completă, nodul AV sau ventriculul fiind refractar la impulsul sinusal următor",
   "O frecvență crescută a bătăilor premature predispone la disfuncție de ventricul stâng",
   "Dacă originea este un singur focar, ablația poate fi foarte eficientă, mai ales din ventriculul drept",
   "Pulsus bigeminus apare când după fiecare bătaie sinusală urmează regulat o extrasistolă",
   "ESV se tratează de rutină cu antiaritmice de clasă Ic după un infarct, pentru a reduce mortalitatea"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "După ESV urmează de obicei o pauză compensatorie completă, nodul AV sau ventriculul fiind refractar la impulsul sinusal următor — Corect: Pauza compensatorie completă este explicită.\n\nO frecvență crescută a bătăilor premature predispone la disfuncție de ventricul stâng — Corect: Frecvența crescută predispone la disfuncție de VS.\n\nDacă originea este un singur focar, ablația poate fi foarte eficientă, mai ales din ventriculul drept — Corect: Ablația focarului unic, mai ales drept, este foarte eficientă.\n\nPulsus bigeminus apare când după fiecare bătaie sinusală urmează regulat o extrasistolă — Corect: Definiția pulsus bigeminus este din text.\n\nESV se tratează de rutină cu antiaritmice de clasă Ic după un infarct, pentru a reduce mortalitatea — Incorect: CAST a arătat creșterea mortalității cu clasa Ic post-IMA; ESV se tratează dacă sunt simptomatice, de obicei cu beta-blocante.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1066, ESV — Bigeminism, disfuncție de VS și ablație (pagini PDF: 227).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1066
   ],
   "pdfPages": [
    227
   ],
   "section": "ESV — Bigeminism, disfuncție de VS și ablație"
  },
  "learningObjective": "Legarea încărcăturii de ESV de disfuncția de VS și a focarului drept de ablația eficientă, plus bigeminismul.",
  "optionRationales": [
   "Pauza compensatorie completă este explicită.",
   "Frecvența crescută predispone la disfuncție de VS.",
   "Ablația focarului unic, mai ales drept, este foarte eficientă.",
   "Definiția pulsus bigeminus este din text.",
   "CAST a arătat creșterea mortalității cu clasa Ic post-IMA; ESV se tratează dacă sunt simptomatice, de obicei cu beta-blocante."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reactivează clasa Ic post-infarct — tocmai situația interzisă de CAST — ca tratament de rutină al ESV."
  },
  "textbookExpressions": [
   "pulsus bigeminus",
   "ventriculul drept"
  ]
 },
 {
  "id": "cardiologie-adv-228",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Antiaritmicele de clasă II (beta-blocante):",
  "options": [
   "Acționează prin prevenirea efectelor catecolaminelor asupra potențialului de acțiune",
   "Cele cardioselective (β1) includ metoprolol, bisoprolol, atenolol și acebutolol",
   "Încetinesc conducerea în nodul AV; sunt antiischemice și antiadrenergice, cu beneficiu post-IMA (prevenția FV) și în IC congestivă",
   "Scurtează potențialul de acțiune identic clasei Ib, fără efect pe nodul AV",
   "Sunt contraindicate ca monoterapie la tahiaritmiile simptomatice cu boală coronariană"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Acționează prin prevenirea efectelor catecolaminelor asupra potențialului de acțiune — Corect: Mecanismul simpaticolitic este explicit.\n\nCele cardioselective (β1) includ metoprolol, bisoprolol, atenolol și acebutolol — Corect: Cele patru cardioselective sunt enumerate.\n\nÎncetinesc conducerea în nodul AV; sunt antiischemice și antiadrenergice, cu beneficiu post-IMA (prevenția FV) și în IC congestivă — Corect: Încetinirea nodului AV, efectul antiischemic și prevenția FV post-IMA sunt descrise.\n\nScurtează potențialul de acțiune identic clasei Ib, fără efect pe nodul AV — Incorect: Scurtarea PA aparține clasei Ib; clasa II acționează predominant pe nodul sinusal.\n\nSunt contraindicate ca monoterapie la tahiaritmiile simptomatice cu boală coronariană — Incorect: Sunt recomandate ca monoterapie sau combinație tocmai la tahiaritmiile simptomatice, mai ales ischemice.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1067, Antiaritmice — Clasa II (β1 cardioselective) (pagini PDF: 228).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1067
   ],
   "pdfPages": [
    228
   ],
   "section": "Antiaritmice — Clasa II (β1 cardioselective)"
  },
  "learningObjective": "Potrivirea listei β1 (metoprolol, bisoprolol, atenolol, acebutolol) cu prevenția FV post-infarct.",
  "optionRationales": [
   "Mecanismul simpaticolitic este explicit.",
   "Cele patru cardioselective sunt enumerate.",
   "Încetinirea nodului AV, efectul antiischemic și prevenția FV post-IMA sunt descrise.",
   "Scurtarea PA aparține clasei Ib; clasa II acționează predominant pe nodul sinusal.",
   "Sunt recomandate ca monoterapie sau combinație tocmai la tahiaritmiile simptomatice, mai ales ischemice."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie clasei II scurtarea PA a lidocainei și interzice beta-blocantul la ischemic — indicația citată."
  },
  "textbookExpressions": [
   "acebutolol",
   "fibrilaţiei ventriculare"
  ]
 },
 {
  "id": "cardiologie-adv-229",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Izolarea venelor pulmonare pentru FA paroxistică:",
  "options": [
   "Procedura durează de obicei mai mult de 4 ore",
   "În centrele experimentate, complicațiile importante totale sunt sub 2% (AVC, pericardită hemoragică, stenoză de vene pulmonare, fistule atrio-esofagiene)",
   "Succesul pe termen lung 70-80% vizează tinerii cu FA paroxistică, AS normal și fără boală structurală",
   "Fistula atrio-esofagiană este regula, apărând la peste jumătate dintre proceduri",
   "Complicațiile dispar dacă se folosește doar crioenergia, fără radiofrecvență"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Procedura durează de obicei mai mult de 4 ore — Corect: Durata peste 4 ore este explicită.\n\nÎn centrele experimentate, complicațiile importante totale sunt sub 2% (AVC, pericardită hemoragică, stenoză de vene pulmonare, fistule atrio-esofagiene) — Corect: Plafonul <2% și lista de complicații (inclusiv fistula) sunt din text.\n\nSuccesul pe termen lung 70-80% vizează tinerii cu FA paroxistică, AS normal și fără boală structurală — Corect: Populația 70-80% este cea descrisă.\n\nFistula atrio-esofagiană este regula, apărând la peste jumătate dintre proceduri — Incorect: Fistula este o complicație rară în centre experimentate, nu regula.\n\nComplicațiile dispar dacă se folosește doar crioenergia, fără radiofrecvență — Incorect: Atât radiofrecvența, cât și crioenergia sunt menționate; complicațiile nu dispar prin schimbarea energiei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1068, Ablație FA — Durata >4 ore și fistula atrio-esofagiană (pagini PDF: 229).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1068
   ],
   "pdfPages": [
    229
   ],
   "section": "Ablație FA — Durata >4 ore și fistula atrio-esofagiană"
  },
  "learningObjective": "Memorarea duratei >4 ore, a plafonului <2% de complicații majore și a listei (inclusiv fistula atrio-esofagiană).",
  "optionRationales": [
   "Durata peste 4 ore este explicită.",
   "Plafonul <2% și lista de complicații (inclusiv fistula) sunt din text.",
   "Populația 70-80% este cea descrisă.",
   "Fistula este o complicație rară în centre experimentate, nu regula.",
   "Atât radiofrecvența, cât și crioenergia sunt menționate; complicațiile nu dispar prin schimbarea energiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă fistula atrio-esofagiană — complicație rară <2% — într-o regulă de peste 50%."
  },
  "textbookExpressions": [
   "mai mult de 4 ore",
   "fistule atrio-esofagiene"
  ]
 },
 {
  "id": "cardiologie-adv-230",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Homeostazia calciului în insuficiența cardiacă:",
  "options": [
   "Excitarea membranei lasă calciul extracelular să intre rapid prin canale; acesta declanșează eliberarea din reticulul sarcoplasmic",
   "Relaxarea urmează recaptării în reticul, proces controlat de modificările oxidului nitric",
   "În IC, curentul de calciu este prelungit și se asociază cu prelungirea contracției și a relaxării",
   "Calciul nu participă la cuplajul excitație-contracție",
   "În IC, curentul de calciu este scurtat, accelerând relaxarea"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Excitarea membranei lasă calciul extracelular să intre rapid prin canale; acesta declanșează eliberarea din reticulul sarcoplasmic — Corect: Intrarea și trigger-ul de SR sunt descrise.\n\nRelaxarea urmează recaptării în reticul, proces controlat de modificările oxidului nitric — Corect: Recaptarea controlată de NO este explicită.\n\nÎn IC, curentul de calciu este prelungit și se asociază cu prelungirea contracției și a relaxării — Corect: Prelungirea curentului, a contracției și a relaxării este din text.\n\nCalciul nu participă la cuplajul excitație-contracție — Incorect: Calciul are rol esențial în reglarea funcției contractile.\n\nÎn IC, curentul de calciu este scurtat, accelerând relaxarea — Incorect: Curentul este prelungit, nu scurtat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1071, Insuficiența cardiacă — Curentul de calciu prelungit (pagini PDF: 232).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1071
   ],
   "pdfPages": [
    232
   ],
   "section": "Insuficiența cardiacă — Curentul de calciu prelungit"
  },
  "learningObjective": "Legarea curentului de Ca2+ prelungit de contracția și relaxarea prelungite, cu rolul NO în recaptare.",
  "optionRationales": [
   "Intrarea și trigger-ul de SR sunt descrise.",
   "Recaptarea controlată de NO este explicită.",
   "Prelungirea curentului, a contracției și a relaxării este din text.",
   "Calciul are rol esențial în reglarea funcției contractile.",
   "Curentul este prelungit, nu scurtat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Scurtează curentul de calciu — inversul fiziopatologiei citate — și anulează cuplajul excitație-contracție."
  },
  "textbookExpressions": [
   "reticulul sarcoplasmic",
   "oxidului nitric"
  ]
 },
 {
  "id": "cardiologie-adv-231",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Diagnosticul HFpEF, conform Cadranului 30.24, necesită:",
  "options": [
   "Simptome caracteristice de insuficiență cardiacă",
   "Semne caracteristice de insuficiență cardiacă",
   "Fracție de ejecție normală sau ușor redusă și ventricul stâng nedilatat, plus modificări structurale relevante (HVS/dilatare de AS) și/sau disfuncție diastolică",
   "Doar FE scăzută, identic celor trei condiții ale HFrEF",
   "Absența oricărei anomalii diastolice, diagnosticul fiind pur simptomatic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Simptome caracteristice de insuficiență cardiacă — Corect: Simptomele sunt prima condiție.\n\nSemne caracteristice de insuficiență cardiacă — Corect: Semnele sunt a doua.\n\nFracție de ejecție normală sau ușor redusă și ventricul stâng nedilatat, plus modificări structurale relevante (HVS/dilatare de AS) și/sau disfuncție diastolică — Corect: FE păstrată, VS nedilatat și HVS/AS sau disfuncție diastolică completează setul de patru.\n\nDoar FE scăzută, identic celor trei condiții ale HFrEF — Incorect: HFrEF cere trei condiții, inclusiv FE scăzută; HFpEF cere patru.\n\nAbsența oricărei anomalii diastolice, diagnosticul fiind pur simptomatic — Incorect: Disfuncția diastolică sau remodelarea (HVS/AS) este cerută, nu absentă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1072, Insuficiența cardiacă — Cele patru condiții HFpEF (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1072
   ],
   "pdfPages": [
    233
   ],
   "section": "Insuficiența cardiacă — Cele patru condiții HFpEF"
  },
  "learningObjective": "Contrastul a patru condiții HFpEF (inclusiv VS nedilatat și HVS/AS) versus triada HFrEF.",
  "optionRationales": [
   "Simptomele sunt prima condiție.",
   "Semnele sunt a doua.",
   "FE păstrată, VS nedilatat și HVS/AS sau disfuncție diastolică completează setul de patru.",
   "HFrEF cere trei condiții, inclusiv FE scăzută; HFpEF cere patru.",
   "Disfuncția diastolică sau remodelarea (HVS/AS) este cerută, nu absentă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce HFpEF la triada HFrEF (FE scăzută), deși cadranul cere patru condiții cu FE păstrată."
  },
  "textbookExpressions": [
   "HFPEF",
   "atriu stâng"
  ]
 },
 {
  "id": "cardiologie-adv-232",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Disfuncția sistolică a ventriculului drept poate fi:",
  "options": [
   "Secundară bolilor cronice ale cordului stâng",
   "Cauzată de hipertensiune pulmonară primară sau secundară, infarct de VD, cardiomiopatie aritmogenă de VD sau boli congenitale ale adultului",
   "Identică HFpEF, cu FE de VS >50% ca singur criteriu",
   "O contraindicație de a evalua hipertensiunea pulmonară",
   "Produsă doar de stenoza aortică calcificată, fără cauze de VD"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Secundară bolilor cronice ale cordului stâng — Corect: Secundaritatea față de cordul stâng este explicită.\n\nCauzată de hipertensiune pulmonară primară sau secundară, infarct de VD, cardiomiopatie aritmogenă de VD sau boli congenitale ale adultului — Corect: Lista HTP, infarct VD, CMA și congenitale este din text.\n\nIdentică HFpEF, cu FE de VS >50% ca singur criteriu — Incorect: HFpEF este un fenotip de VS, nu definiția DSVD.\n\nO contraindicație de a evalua hipertensiunea pulmonară — Incorect: HTP este tocmai o cauză de căutat.\n\nProdusă doar de stenoza aortică calcificată, fără cauze de VD — Incorect: Stenoza aortică ține de VS, nu epuizează DSVD.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1072, Insuficiența cardiacă — Disfuncția de ventricul drept (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1072
   ],
   "pdfPages": [
    233
   ],
   "section": "Insuficiența cardiacă — Disfuncția de ventricul drept"
  },
  "learningObjective": "Recunoașterea DSVD ca urmare a cordului stâng cronic sau a HTP/infarctului de VD/CMA/congenitalelor.",
  "optionRationales": [
   "Secundaritatea față de cordul stâng este explicită.",
   "Lista HTP, infarct VD, CMA și congenitale este din text.",
   "HFpEF este un fenotip de VS, nu definiția DSVD.",
   "HTP este tocmai o cauză de căutat.",
   "Stenoza aortică ține de VS, nu epuizează DSVD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Suprapune DSVD peste HFpEF și anulează hipertensiunea pulmonară, o cauză citată."
  },
  "textbookExpressions": [
   "ventriculului drept",
   "hipertensiunea pulmonară"
  ]
 },
 {
  "id": "cardiologie-adv-233",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Contraindicațiile IECA în insuficiența cardiacă includ:",
  "options": [
   "Stenoza de arteră renală",
   "Sarcina",
   "Antecedente de angioedem",
   "Tusea izolată, care impune oprirea fără a trece pe un ARA",
   "Inițierea în doză maximă, fără monitorizarea creatininei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Stenoza de arteră renală — Corect: Stenoza de arteră renală este contraindicație.\n\nSarcina — Corect: Sarcina este contraindicație.\n\nAntecedente de angioedem — Corect: Antecedentele de angioedem sunt contraindicație.\n\nTusea izolată, care impune oprirea fără a trece pe un ARA — Incorect: Tusea orientează către ARA, nu interzice orice blocadă a SRAA.\n\nInițierea în doză maximă, fără monitorizarea creatininei — Incorect: Se inițiază în doză mică, cu creștere treptată și monitorizare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1073, Insuficiența cardiacă — Contraindicațiile IECA (pagini PDF: 234).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1073
   ],
   "pdfPages": [
    234
   ],
   "section": "Insuficiența cardiacă — Contraindicațiile IECA"
  },
  "learningObjective": "Listarea stenozei de arteră renală, sarcinii și angioedemului, plus inițierea în doză mică.",
  "optionRationales": [
   "Stenoza de arteră renală este contraindicație.",
   "Sarcina este contraindicație.",
   "Antecedentele de angioedem sunt contraindicație.",
   "Tusea orientează către ARA, nu interzice orice blocadă a SRAA.",
   "Se inițiază în doză mică, cu creștere treptată și monitorizare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă tusea — motiv de trecere pe ARA — într-o interdicție absolută a întregii clase SRAA."
  },
  "textbookExpressions": [
   "stenoza de arteră renală",
   "angio-edem"
  ]
 },
 {
  "id": "cardiologie-adv-234",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Durata medie de internare a unei decompensări de insuficiență cardiacă este de:",
  "options": [
   "5-10 zile",
   "24 de ore, fără monitorizare ulterioară",
   "6 luni, identic interdicției de efort din miocardită",
   "3 săptămâni de terapie intensivă ca durată medie citată",
   "Sub 12 ore, diureticul oral fiind suficient"
  ],
  "correct": [
   0
  ],
  "explanation": "5-10 zile — Corect: Textul: durata medie de internare este între 5 și 10 zile.\n\n24 de ore, fără monitorizare ulterioară — Incorect: 24 de ore subestimează; spitalizările repetate sunt frecvente.\n\n6 luni, identic interdicției de efort din miocardită — Incorect: 6 luni este interdicția de sport din miocardită, nu internarea IC.\n\n3 săptămâni de terapie intensivă ca durată medie citată — Incorect: 3 săptămâni de TI nu este cifra citată.\n\nSub 12 ore, diureticul oral fiind suficient — Incorect: Decompensarea cere adesea internare, nu doar 12 ore de diuretic oral.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1073, Insuficiența cardiacă — Durata internării (pagini PDF: 234).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1073
   ],
   "pdfPages": [
    234
   ],
   "section": "Insuficiența cardiacă — Durata internării"
  },
  "learningObjective": "Reținerea ferestrei 5-10 zile ca durată medie de internare.",
  "optionRationales": [
   "Textul: durata medie de internare este între 5 și 10 zile.",
   "24 de ore subestimează; spitalizările repetate sunt frecvente.",
   "6 luni este interdicția de sport din miocardită, nu internarea IC.",
   "3 săptămâni de TI nu este cifra citată.",
   "Decompensarea cere adesea internare, nu doar 12 ore de diuretic oral."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Comprimă internarea de 5-10 zile la 24 de ore sau o dilată la 6 luni, ferestre din alte secțiuni."
  },
  "textbookExpressions": [
   "5 şi 10 zile",
   "internare"
  ]
 },
 {
  "id": "cardiologie-adv-235",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Din Cadranul 30.25, treptele de dozaj relevante includ:",
  "options": [
   "Candesartan 4 mg/zi inițial, maxim 32 mg/zi",
   "Carvedilol 3,125 mg ×2/zi → 50 mg ×2/zi",
   "Sacubitril/valsartan 24/26–49/51 mg ×2/zi, maxim 97/103 mg ×2/zi",
   "Digoxinul se crește peste 2,5 mg/zi de rutină la eRFG <30 ml/min/1,73 m²",
   "Metoprololul succinat are doză maximă de 25 mg/zi, identic spironolactonei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Candesartan 4 mg/zi inițial, maxim 32 mg/zi — Corect: Treptele candesartanului sunt din tabel.\n\nCarvedilol 3,125 mg ×2/zi → 50 mg ×2/zi — Corect: Carvedilolul 3,125×2 → 50×2 este explicit.\n\nSacubitril/valsartan 24/26–49/51 mg ×2/zi, maxim 97/103 mg ×2/zi — Corect: Fereastra ARNI până la 97/103 mg ×2/zi este listată.\n\nDigoxinul se crește peste 2,5 mg/zi de rutină la eRFG <30 ml/min/1,73 m² — Incorect: Peste 2,5 mg/zi de digoxin sunt rar necesare; eficiența scade la eRFG <30.\n\nMetoprololul succinat are doză maximă de 25 mg/zi, identic spironolactonei — Incorect: Metoprolol succinat CR/XL: 12,5-25 → 200 mg/zi, nu plafon 25 mg.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1074, Insuficiența cardiacă — Candesartan 32 mg, carvedilol, ARNI (pagini PDF: 235).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1074
   ],
   "pdfPages": [
    235
   ],
   "section": "Insuficiența cardiacă — Candesartan 32 mg, carvedilol, ARNI"
  },
  "learningObjective": "Memorarea treptelor 4→32 mg (candesartan), 3,125→50×2 (carvedilol) și 97/103 mg (ARNI).",
  "optionRationales": [
   "Treptele candesartanului sunt din tabel.",
   "Carvedilolul 3,125×2 → 50×2 este explicit.",
   "Fereastra ARNI până la 97/103 mg ×2/zi este listată.",
   "Peste 2,5 mg/zi de digoxin sunt rar necesare; eficiența scade la eRFG <30.",
   "Metoprolol succinat CR/XL: 12,5-25 → 200 mg/zi, nu plafon 25 mg."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Plafonează metoprololul la 25 mg — doza inițială — și crește digoxinul tocmai la eRFG <30."
  },
  "textbookExpressions": [
   "32 mg zilnic",
   "97/103"
  ]
 },
 {
  "id": "cardiologie-adv-236",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Studiile CIBIS, CIBIS II, MERIT-HF și COMET, în insuficiența cardiacă:",
  "options": [
   "Au evaluat efectele beta-blocantelor la grade diferite de severitate",
   "Susțin că bisoprololul și carvedilolul reduc mortalitatea în toate gradele de severitate",
   "Cer inițierea în doză mică, cu creștere treptată, monitorizând frecvența și tensiunea, în IC semnificativă",
   "Demonstrează că nebivololul înlocuiește bisoprololul la tinerii cu NYHA IV",
   "Permit inițierea beta-blocantului în IC acută instabilă, înaintea stabilizării"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Au evaluat efectele beta-blocantelor la grade diferite de severitate — Corect: Cele patru studii sunt citate pentru grade diferite de severitate.\n\nSusțin că bisoprololul și carvedilolul reduc mortalitatea în toate gradele de severitate — Corect: Bisoprololul și carvedilolul reduc mortalitatea în toate gradele.\n\nCer inițierea în doză mică, cu creștere treptată, monitorizând frecvența și tensiunea, în IC semnificativă — Corect: Inițierea în doză mică cu titrare este explicită.\n\nDemonstrează că nebivololul înlocuiește bisoprololul la tinerii cu NYHA IV — Incorect: Nebivololul este pentru IC stabilă ușoară/moderată la >70 de ani.\n\nPermit inițierea beta-blocantului în IC acută instabilă, înaintea stabilizării — Incorect: Beta-blocantele se evită în IC acută până la stabilizare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1074, Insuficiența cardiacă — CIBIS, MERIT-HF, COMET (pagini PDF: 235).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1074
   ],
   "pdfPages": [
    235
   ],
   "section": "Insuficiența cardiacă — CIBIS, MERIT-HF, COMET"
  },
  "learningObjective": "Potrivirea trialurilor de beta-blocant cu regula dozei mici în IC semnificativă, nu cu nebivololul tânărului instabil.",
  "optionRationales": [
   "Cele patru studii sunt citate pentru grade diferite de severitate.",
   "Bisoprololul și carvedilolul reduc mortalitatea în toate gradele.",
   "Inițierea în doză mică cu titrare este explicită.",
   "Nebivololul este pentru IC stabilă ușoară/moderată la >70 de ani.",
   "Beta-blocantele se evită în IC acută până la stabilizare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută nebivololul (>70 ani, IC stabilă) pe tânărul cu NYHA IV instabil, inversul nișei din același paragraf."
  },
  "textbookExpressions": [
   "CIBIS",
   "MERIT-HF"
  ]
 },
 {
  "id": "cardiologie-adv-237",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Insuficiența cardiacă se asociază cu o creștere a riscului de accident vascular cerebral de circa:",
  "options": [
   "Patru ori",
   "0,1 ori, riscul fiind neglijabil",
   "Identică riscului din CHA2DS2-VASc 0 puncte (0%)",
   "20 de ori, identic complicațiilor IABP",
   "O reducere de 23%, ca ICD în SCD-HeFT"
  ],
  "correct": [
   0
  ],
  "explanation": "Patru ori — Corect: Textul: IC se asociază cu creșterea de patru ori a riscului de AVC.\n\n0,1 ori, riscul fiind neglijabil — Incorect: 0,1 ori contrazice cifra.\n\nIdentică riscului din CHA2DS2-VASc 0 puncte (0%) — Incorect: CHA2DS2-VASc 0 are risc 0%, nu este multiplicatorul IC.\n\n20 de ori, identic complicațiilor IABP — Incorect: 20% sunt complicațiile IABP, nu multiplicatorul de AVC.\n\nO reducere de 23%, ca ICD în SCD-HeFT — Incorect: 23% este reducerea de mortalitate cu ICD în SCD-HeFT.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1075, Insuficiența cardiacă — Riscul de AVC ×4 (pagini PDF: 236).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1075
   ],
   "pdfPages": [
    236
   ],
   "section": "Insuficiența cardiacă — Riscul de AVC ×4"
  },
  "learningObjective": "Reținerea multiplicatorului de patru ori al riscului de AVC în IC.",
  "optionRationales": [
   "Textul: IC se asociază cu creșterea de patru ori a riscului de AVC.",
   "0,1 ori contrazice cifra.",
   "CHA2DS2-VASc 0 are risc 0%, nu este multiplicatorul IC.",
   "20% sunt complicațiile IABP, nu multiplicatorul de AVC.",
   "23% este reducerea de mortalitate cu ICD în SCD-HeFT."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește multiplicatorul ×4 cu 0% din CHA2DS2-VASc 0 sau cu 23% din SCD-HeFT."
  },
  "textbookExpressions": [
   "patru ori",
   "accident vascular cerebral"
  ]
 },
 {
  "id": "cardiologie-adv-238",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Epidemiologia bolii coronariene în Marea Britanie (2010) include:",
  "options": [
   "Peste 180.000 de decese prin boli cardiovasculare, cauza cea mai frecventă de mortalitate",
   "BC a produs 1 din 5 decese la bărbați și 1 din 10 la femei (circa 80.000 de decese)",
   "1 din 6 infarcte acute prezintă moartea subită ca prim, ultim și unic simptom",
   "Mortalitatea cardiovasculară a fost sub 1.000 de decese, limitată la STEMI neperfuzat",
   "Moartea subită este exclusă ca primă manifestare a infarctului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Peste 180.000 de decese prin boli cardiovasculare, cauza cea mai frecventă de mortalitate — Corect: Peste 180.000 de decese CV sunt explicite.\n\nBC a produs 1 din 5 decese la bărbați și 1 din 10 la femei (circa 80.000 de decese) — Corect: 1 din 5 bărbați și 1 din 10 femei (≈80.000) sunt din text.\n\n1 din 6 infarcte acute prezintă moartea subită ca prim, ultim și unic simptom — Corect: 1 din 6 IMA cu moarte subită ca unic simptom este citat.\n\nMortalitatea cardiovasculară a fost sub 1.000 de decese, limitată la STEMI neperfuzat — Incorect: Ordinul este de sute de mii, nu mii.\n\nMoartea subită este exclusă ca primă manifestare a infarctului — Incorect: Moartea subită poate fi primul, ultimul și unicul simptom.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1079, Boala coronariană — 180.000 de decese și 1 din 6 (pagini PDF: 240).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1079
   ],
   "pdfPages": [
    240
   ],
   "section": "Boala coronariană — 180.000 de decese și 1 din 6"
  },
  "learningObjective": "Aplicarea ordinului 180.000/80.000 și a ponderii 1 din 6 infarcte prezentate ca moarte subită.",
  "optionRationales": [
   "Peste 180.000 de decese CV sunt explicite.",
   "1 din 5 bărbați și 1 din 10 femei (≈80.000) sunt din text.",
   "1 din 6 IMA cu moarte subită ca unic simptom este citat.",
   "Ordinul este de sute de mii, nu mii.",
   "Moartea subită poate fi primul, ultimul și unicul simptom."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Subestimează cu două ordine mortalitatea britanică și neagă moartea subită ca primă manifestare."
  },
  "textbookExpressions": [
   "180.000 de decese",
   "1 din 6 infarcte"
  ]
 },
 {
  "id": "cardiologie-adv-239",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Fluxul coronarian poate fi redus, iar necesarul de oxigen crescut, prin:",
  "options": [
   "Obstrucție mecanică: ateroscleroză, tromboză supraadăugată, spasm, embolie, stenoze ostiale, vasculite (ex. LES)",
   "Scăderea sângelui oxigenat: anemie, carboxihemoglobină, hipotensiune (presiune de perfuzie scăzută)",
   "Creșterea necesarului: debit crescut (tireotoxicoză) sau hipertrofie (stenoză aortică, HTA sistemică)",
   "Doar spasmul, fără rolul plăcii aterosclerotice",
   "Anemia, care scade necesarul de oxigen și previne ischemia"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Obstrucție mecanică: ateroscleroză, tromboză supraadăugată, spasm, embolie, stenoze ostiale, vasculite (ex. LES) — Corect: Lista de obstrucții mecanice include LES.\n\nScăderea sângelui oxigenat: anemie, carboxihemoglobină, hipotensiune (presiune de perfuzie scăzută) — Corect: Anemia, carboxihemoglobina și hipotensiunea scad aportul oxigenat.\n\nCreșterea necesarului: debit crescut (tireotoxicoză) sau hipertrofie (stenoză aortică, HTA sistemică) — Corect: Tireotoxicoza și stenoza aortică/HTA cresc necesarul.\n\nDoar spasmul, fără rolul plăcii aterosclerotice — Incorect: Ateroscleroza stenozantă este cauza cea mai frecventă, nu spasmul izolat.\n\nAnemia, care scade necesarul de oxigen și previne ischemia — Incorect: Anemia scade aportul, nu necesarul, și favorizează ischemia.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1079, Boala coronariană — Aport versus necesar (pagini PDF: 240).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1079
   ],
   "pdfPages": [
    240
   ],
   "section": "Boala coronariană — Aport versus necesar"
  },
  "learningObjective": "Potrivirea celor trei axe (obstrucție, conținut de O2, hipertrofie/debit) care produc ischemia.",
  "optionRationales": [
   "Lista de obstrucții mecanice include LES.",
   "Anemia, carboxihemoglobina și hipotensiunea scad aportul oxigenat.",
   "Tireotoxicoza și stenoza aortică/HTA cresc necesarul.",
   "Ateroscleroza stenozantă este cauza cea mai frecventă, nu spasmul izolat.",
   "Anemia scade aportul, nu necesarul, și favorizează ischemia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează placa — cauza dominantă — și prezintă anemia ca protecție față de ischemie."
  },
  "textbookExpressions": [
   "carboxihemoglobinemia",
   "tireotoxicoză"
  ]
 },
 {
  "id": "cardiologie-adv-240",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Progresia leziunii aterosclerotice coronariene include:",
  "options": [
   "Stria lipidică (fatty streak) din celule spumoase încărcate cu LDL",
   "Placa de tranziție, cu lipide extracelulare subendotelial",
   "Placa fibroasă avansată, apoi placa complicată (ulcerare, tromboză, ocluzie acută)",
   "PDGF și TGF-β, care stimulează acumularea de macrofage și migrarea celulelor musculare netede din medie",
   "Stria lipidică ca leziune finală, fără progresie spre placă fibroasă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Stria lipidică (fatty streak) din celule spumoase încărcate cu LDL — Corect: Stria din celule spumoase este explicită.\n\nPlaca de tranziție, cu lipide extracelulare subendotelial — Corect: Placa de tranziție este denumită astfel.\n\nPlaca fibroasă avansată, apoi placa complicată (ulcerare, tromboză, ocluzie acută) — Corect: Placa complicată închide secvența.\n\nPDGF și TGF-β, care stimulează acumularea de macrofage și migrarea celulelor musculare netede din medie — Corect: PDGF și TGF-β sunt citate.\n\nStria lipidică ca leziune finală, fără progresie spre placă fibroasă — Incorect: Stria poate progresa, nu este stadiul final.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1079, Ateroscleroză — Strie lipidică, PDGF, placă complicată (pagini PDF: 240).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1079
   ],
   "pdfPages": [
    240
   ],
   "section": "Ateroscleroză — Strie lipidică, PDGF, placă complicată"
  },
  "learningObjective": "Secvența strie → placă de tranziție → fibroasă avansată/complicată, cu rolul PDGF/TGF-β.",
  "optionRationales": [
   "Stria din celule spumoase este explicită.",
   "Placa de tranziție este denumită astfel.",
   "Placa complicată închide secvența.",
   "PDGF și TGF-β sunt citate.",
   "Stria poate progresa, nu este stadiul final."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oprește aterogeneza la stria lipidică, deși textul o duce până la placa complicată ocluzivă."
  },
  "textbookExpressions": [
   "strii lipidice",
   "celulelor spumoase"
  ]
 },
 {
  "id": "cardiologie-adv-241",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "O reducere cu 50% a diametrului luminal coronarian corespunde unei reduceri de suprafață de circa:",
  "options": [
   "70%, cu arteriole distale dilatate maximal și rezervă de flux zero",
   "10%, fără ischemie la efort",
   "50%, identic reducerii de diametru, rezerva rămânând intactă",
   "90%, doar în vasculitele din LES",
   "0%, stenoza fiind nesemnificativă până la 90% diametru"
  ],
  "correct": [
   0
  ],
  "explanation": "70%, cu arteriole distale dilatate maximal și rezervă de flux zero — Corect: Textul: 50% diametru corespunde cca 70% din suprafață; rezerva este zero.\n\n10%, fără ischemie la efort — Incorect: 10% subestimează.\n\n50%, identic reducerii de diametru, rezerva rămânând intactă — Incorect: Reducerea de arie este mai mare decât cea de diametru; rezerva este epuizată.\n\n90%, doar în vasculitele din LES — Incorect: 90% nu este cifra de arie citată.\n\n0%, stenoza fiind nesemnificativă până la 90% diametru — Incorect: Stenoza de 50% diametru este deja hemodinamic semnificativă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1080, Boala coronariană — Stenoză 50% diametru / 70% arie (pagini PDF: 241).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1080
   ],
   "pdfPages": [
    241
   ],
   "section": "Boala coronariană — Stenoză 50% diametru / 70% arie"
  },
  "learningObjective": "Reținerea echivalenței 50% diametru ↔ 70% arie, cu rezerva coronariană epuizată.",
  "optionRationales": [
   "Textul: 50% diametru corespunde cca 70% din suprafață; rezerva este zero.",
   "10% subestimează.",
   "Reducerea de arie este mai mare decât cea de diametru; rezerva este epuizată.",
   "90% nu este cifra de arie citată.",
   "Stenoza de 50% diametru este deja hemodinamic semnificativă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Echivalează greșit 50% diametru cu 50% arie și păstrează rezerva, deși textul o pune la zero."
  },
  "textbookExpressions": [
   "50%",
   "70%"
  ]
 },
 {
  "id": "cardiologie-adv-242",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Riscul transversal al aterosclerozei și recunoașterea infarctului:",
  "options": [
   "Claudicația intermitentă asociază un risc de 2-4 ori mai mare de BC, AVC sau IC",
   "După primul infarct, riscul de IC sau AVC crește de 3-6 ori; după AVC, riscul de IC și infarct se dublează",
   "Unul din trei infarcte rămâne inițial nerecunoscut; 30-40% dintre SCA nu au simptome prealabile de alarmă",
   "Boala periferică protejează de BC, riscul fiind inversat",
   "Toate infarctele sunt recunoscute la debut, SCA având constant angină prealabilă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Claudicația intermitentă asociază un risc de 2-4 ori mai mare de BC, AVC sau IC — Corect: 2-4 ori este cifra claudicației.\n\nDupă primul infarct, riscul de IC sau AVC crește de 3-6 ori; după AVC, riscul de IC și infarct se dublează — Corect: 3-6 ori post-IMA și dublarea post-AVC sunt explicite.\n\nUnul din trei infarcte rămâne inițial nerecunoscut; 30-40% dintre SCA nu au simptome prealabile de alarmă — Corect: 1 din 3 IMA nerecunoscut și 30-40% fără alarmă sunt din text.\n\nBoala periferică protejează de BC, riscul fiind inversat — Incorect: BVP crește, nu scade, riscul de BC.\n\nToate infarctele sunt recunoscute la debut, SCA având constant angină prealabilă — Incorect: Textul subliniază tocmai infarctul tăcut și SCA-ul fără prodrom.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1080, Boala coronariană — Riscul 2-4× și infarctul tăcut (pagini PDF: 241).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1080
   ],
   "pdfPages": [
    241
   ],
   "section": "Boala coronariană — Riscul 2-4× și infarctul tăcut"
  },
  "learningObjective": "Aplicarea multiplicatorilor 2-4× / 3-6× / 2× și a ponderilor 1/3 infarct tăcut și 30-40% SCA fără prodrom.",
  "optionRationales": [
   "2-4 ori este cifra claudicației.",
   "3-6 ori post-IMA și dublarea post-AVC sunt explicite.",
   "1 din 3 IMA nerecunoscut și 30-40% fără alarmă sunt din text.",
   "BVP crește, nu scade, riscul de BC.",
   "Textul subliniază tocmai infarctul tăcut și SCA-ul fără prodrom."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează protecția falsă a BVP și neagă infarctul tăcut, deși un IMA din trei trece nerecunoscut."
  },
  "textbookExpressions": [
   "două până la de patru",
   "30 şi 40%"
  ]
 },
 {
  "id": "cardiologie-adv-243",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Prevenția primară NICE și suspiciunea de hipercolesterolemie familială:",
  "options": [
   "Scala QRISK3 identifică riscul înalt: ≥10% la 10 ani",
   "Un tablou lipidic complet include colesterol total, HDL, non-HDL și trigliceride",
   "Colesterol >7,5 mmol/L plus istoric familial de BC precoce poate indica hipercolesterolemie familială",
   "QRISK3 se folosește doar în prevenția secundară, după un STEMI",
   "Colesterolul >7,5 mmol/L infirmă orice formă familială"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Scala QRISK3 identifică riscul înalt: ≥10% la 10 ani — Corect: Definiția riscului înalt ≥10% la 10 ani este explicită.\n\nUn tablou lipidic complet include colesterol total, HDL, non-HDL și trigliceride — Corect: Componentele lipidogramei sunt listate.\n\nColesterol >7,5 mmol/L plus istoric familial de BC precoce poate indica hipercolesterolemie familială — Corect: >7,5 mmol/L cu istoric familial orientează spre forma familială.\n\nQRISK3 se folosește doar în prevenția secundară, după un STEMI — Incorect: QRISK3 este pentru prevenția primară.\n\nColesterolul >7,5 mmol/L infirmă orice formă familială — Incorect: >7,5 mmol/L plus istoric familial ridică, nu infirmă, suspiciunea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1080, Boala coronariană — QRISK3 ≥10% și 7,5 mmol/L (pagini PDF: 241).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1080
   ],
   "pdfPages": [
    241
   ],
   "section": "Boala coronariană — QRISK3 ≥10% și 7,5 mmol/L"
  },
  "learningObjective": "Aplicarea pragului QRISK3 ≥10%/10 ani și a ferestrei >7,5 mmol/L pentru forma familială.",
  "optionRationales": [
   "Definiția riscului înalt ≥10% la 10 ani este explicită.",
   "Componentele lipidogramei sunt listate.",
   ">7,5 mmol/L cu istoric familial orientează spre forma familială.",
   "QRISK3 este pentru prevenția primară.",
   ">7,5 mmol/L plus istoric familial ridică, nu infirmă, suspiciunea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută QRISK3 în prevenția secundară post-STEMI și tratează 7,5 mmol/L ca argument împotriva formei familiale."
  },
  "textbookExpressions": [
   "7,5 mmol/L",
   "QRISK"
  ]
 },
 {
  "id": "cardiologie-adv-244",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tromboza pe placa aterosclerotică se produce prin:",
  "options": [
   "Eroziune endotelială superficială: matricea subendotelială expusă, adeziune plachetară la colagen, tromb aderent la suprafața plăcii",
   "Ulcerarea/fisura capișonului peste miezul lipidic: sânge în placă, factor tisular din macrofage, extindere în lumen",
   "Doar stenoza progresivă lentă, fără tromb",
   "Eroziunea ca mecanism care ocolește plachetele, fără contact cu colagenul",
   "Miezul lipidic ca element antitrombotic, care previne ocluzia"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Eroziune endotelială superficială: matricea subendotelială expusă, adeziune plachetară la colagen, tromb aderent la suprafața plăcii — Corect: Primul mecanism (eroziune, tromb aderent) este descris.\n\nUlcerarea/fisura capișonului peste miezul lipidic: sânge în placă, factor tisular din macrofage, extindere în lumen — Corect: Al doilea (ruptură, factor tisular, extindere luminală) este descris.\n\nDoar stenoza progresivă lentă, fără tromb — Incorect: Tromb local, nu doar stenoza lentă.\n\nEroziunea ca mecanism care ocolește plachetele, fără contact cu colagenul — Incorect: Eroziunea expune colagenul și inițiază adeziunea plachetară.\n\nMiezul lipidic ca element antitrombotic, care previne ocluzia — Incorect: Miezul lipidic are potențial trombogenic major.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1080, SCA — Eroziune superficială versus ruptură profundă (pagini PDF: 241).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1080
   ],
   "pdfPages": [
    241
   ],
   "section": "SCA — Eroziune superficială versus ruptură profundă"
  },
  "learningObjective": "Contrastul celor două mecanisme din Fig. 30.61: eroziune de suprafață versus ruptură de miez lipidic.",
  "optionRationales": [
   "Primul mecanism (eroziune, tromb aderent) este descris.",
   "Al doilea (ruptură, factor tisular, extindere luminală) este descris.",
   "Tromb local, nu doar stenoza lentă.",
   "Eroziunea expune colagenul și inițiază adeziunea plachetară.",
   "Miezul lipidic are potențial trombogenic major."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează trombul — elementul comun al celor două mecanisme — și face din miezul lipidic un factor protector."
  },
  "textbookExpressions": [
   "eroziunea endotelială",
   "Miezul lipidic"
  ]
 },
 {
  "id": "cardiologie-adv-245",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Durerea anginoasă este indusă de metaboliți ischemici, inclusiv adenozina, care:",
  "options": [
   "Stimulează terminațiile nervoase libere miocardice",
   "Nu au rol în geneza durerii, angina fiind pur psihogenă",
   "Blochează nociceptorii, explicând infarctul tăcut ca regulă",
   "Acționează doar în pericard, nu în miocard",
   "Înlocuiesc nitroglicerina ca tratament de primă linie"
  ],
  "correct": [
   0
  ],
  "explanation": "Stimulează terminațiile nervoase libere miocardice — Corect: Textul leagă adenozina de stimularea terminațiilor nervoase libere.\n\nNu au rol în geneza durerii, angina fiind pur psihogenă — Incorect: Durerea este ischemică, nu pur psihogenă.\n\nBlochează nociceptorii, explicând infarctul tăcut ca regulă — Incorect: Infarctul tăcut există, dar nu pentru că adenozina ar bloca nociceptorii.\n\nAcționează doar în pericard, nu în miocard — Incorect: Terminațiile sunt miocardice.\n\nÎnlocuiesc nitroglicerina ca tratament de primă linie — Incorect: Adenozina este mediator al durerii, nu tratament antianginos.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1081, Angina — Adenozina și terminațiile nervoase (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1081
   ],
   "pdfPages": [
    242
   ],
   "section": "Angina — Adenozina și terminațiile nervoase"
  },
  "learningObjective": "Reținerea adenozinei ca metabolit care stimulează terminațiile nervoase libere și produce durerea.",
  "optionRationales": [
   "Textul leagă adenozina de stimularea terminațiilor nervoase libere.",
   "Durerea este ischemică, nu pur psihogenă.",
   "Infarctul tăcut există, dar nu pentru că adenozina ar bloca nociceptorii.",
   "Terminațiile sunt miocardice.",
   "Adenozina este mediator al durerii, nu tratament antianginos."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă adenozina — mediator al durerii — în analgezic sau antianginos, inversul fiziologiei."
  },
  "textbookExpressions": [
   "adenozina",
   "terminaţiile nervoase libere"
  ]
 },
 {
  "id": "cardiologie-adv-246",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Clasa CCS III și angina refractară se definesc astfel:",
  "options": [
   "CCS III: angină la activități de intensitate redusă, de exemplu mers 50-100 m pe plat sau urcarea unui etaj, cu limitare marcată",
   "Refractară: BC severă la care revascularizarea nu este realizabilă și simptomele nu sunt controlabile medicamentos",
   "CCS III: angină doar la efort intens, identic clasei I",
   "Refractară înseamnă angină de efort controlată de un singur beta-blocant",
   "CCS IV exclude angina de repaus"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "CCS III: angină la activități de intensitate redusă, de exemplu mers 50-100 m pe plat sau urcarea unui etaj, cu limitare marcată — Corect: Cadranul 30.31: 50-100 m sau un etaj, limitare marcată.\n\nRefractară: BC severă la care revascularizarea nu este realizabilă și simptomele nu sunt controlabile medicamentos — Corect: Definiția refractare este explicită.\n\nCCS III: angină doar la efort intens, identic clasei I — Incorect: Efortul intens fără limitare zilnică este CCS I.\n\nRefractară înseamnă angină de efort controlată de un singur beta-blocant — Incorect: Refractara presupune eșec medicamentos și imposibilitatea revascularizării.\n\nCCS IV exclude angina de repaus — Incorect: CCS IV include angina în repaus sau la orice nivel de activitate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1081, Angina — CCS III (50-100 m) și forma refractară (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1081
   ],
   "pdfPages": [
    242
   ],
   "section": "Angina — CCS III (50-100 m) și forma refractară"
  },
  "learningObjective": "Fixarea pragului 50-100 m / un etaj pentru CCS III și a definiției refractare (nerevascularizabilă, necontrolabilă).",
  "optionRationales": [
   "Cadranul 30.31: 50-100 m sau un etaj, limitare marcată.",
   "Definiția refractare este explicită.",
   "Efortul intens fără limitare zilnică este CCS I.",
   "Refractara presupune eșec medicamentos și imposibilitatea revascularizării.",
   "CCS IV include angina în repaus sau la orice nivel de activitate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Degradează CCS III la efortul intens al clasei I și golește refractara de conținutul ei (nerevascularizabilă)."
  },
  "textbookExpressions": [
   "50-100 m",
   "Angina refractară"
  ]
 },
 {
  "id": "cardiologie-adv-247",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Factori de risc potențial modificabili ai bolii coronariene (Cadranul 30.30) includ:",
  "options": [
   "Creșterea fibrinogenului și a factorului VII plasmatic; creșterea PCR; hiperhomocisteinemia",
   "Guta; duritatea redusă a apei; contraceptivele orale, analogii de nucleozide, inhibitorii COX-2, rosiglitazona",
   "Deleția DD a genei ECA, ca factor nemodificabil alături de vârstă, sex masculin și AHC",
   "Guta și apa dură ca factori protectori, care infirmă riscul",
   "Contraceptivele orale ca factor nemodificabil, identic vârstei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Creșterea fibrinogenului și a factorului VII plasmatic; creșterea PCR; hiperhomocisteinemia — Corect: Coagularea, PCR și homocisteina sunt în coloana modificabilă.\n\nGuta; duritatea redusă a apei; contraceptivele orale, analogii de nucleozide, inhibitorii COX-2, rosiglitazona — Corect: Guta, apa moale și medicamentele listate sunt din cadran.\n\nDeleția DD a genei ECA, ca factor nemodificabil alături de vârstă, sex masculin și AHC — Corect: DD a ECA este în coloana nemodificabilă.\n\nGuta și apa dură ca factori protectori, care infirmă riscul — Incorect: Guta și apa moale sunt factori de risc, nu protecție.\n\nContraceptivele orale ca factor nemodificabil, identic vârstei — Incorect: Contraceptivele sunt potențial modificabile, vârsta nu.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1081, Boala coronariană — Cadranul 30.30 (fibrinogen, gută, apă) (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1081
   ],
   "pdfPages": [
    242
   ],
   "section": "Boala coronariană — Cadranul 30.30 (fibrinogen, gută, apă)"
  },
  "learningObjective": "Recunoașterea itemilor mai puțin citați (fibrinogen/VII, PCR, homocisteină, gută, apă moale, COX-2).",
  "optionRationales": [
   "Coagularea, PCR și homocisteina sunt în coloana modificabilă.",
   "Guta, apa moale și medicamentele listate sunt din cadran.",
   "DD a ECA este în coloana nemodificabilă.",
   "Guta și apa moale sunt factori de risc, nu protecție.",
   "Contraceptivele sunt potențial modificabile, vârsta nu."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă guta și apa moale în factori protectori și mută contraceptivele lângă vârstă, în coloana nemodificabilă."
  },
  "textbookExpressions": [
   "fibrinogenului",
   "Duritatea redusă a apei"
  ]
 },
 {
  "id": "cardiologie-adv-248",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Rezerva fracționată de flux și complicațiile PCI:",
  "options": [
   "Leziunile cu FFR >0,80 pot fi tratate medicamentos, fără stent, cu prognostic bun",
   "Complicații majore: infarct acut 2%, accident vascular cerebral 0,4%, deces 1%",
   "Stenturile metalice simple au risc de restenoză de 20-30% în primele 6-9 luni",
   "FFR >0,80 impune stentare imediată, tratamentul medicamentos fiind insuficient",
   "Restenoza BMS este rară sub 1% în primul an, identică mortalității chirurgicale CABG"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Leziunile cu FFR >0,80 pot fi tratate medicamentos, fără stent, cu prognostic bun — Corect: FFR >0,80 permite tratament medicamentos cu prognostic bun.\n\nComplicații majore: infarct acut 2%, accident vascular cerebral 0,4%, deces 1% — Corect: Cele trei procente majore sunt explicite.\n\nStenturile metalice simple au risc de restenoză de 20-30% în primele 6-9 luni — Corect: 20-30% la 6-9 luni este restenoza BMS.\n\nFFR >0,80 impune stentare imediată, tratamentul medicamentos fiind insuficient — Incorect: Peste 0,80 se poate evita stentul.\n\nRestenoza BMS este rară sub 1% în primul an, identică mortalității chirurgicale CABG — Incorect: <1% este mortalitatea CABG la FE conservată, nu restenoza BMS.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1082, PCI — FFR >0,80, restenoză BMS 20-30% (pagini PDF: 243).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1082
   ],
   "pdfPages": [
    243
   ],
   "section": "PCI — FFR >0,80, restenoză BMS 20-30%"
  },
  "learningObjective": "Aplicarea pragului FFR 0,80 și a triadului 2%/0,4%/1%, plus restenoza BMS 20-30% la 6-9 luni.",
  "optionRationales": [
   "FFR >0,80 permite tratament medicamentos cu prognostic bun.",
   "Cele trei procente majore sunt explicite.",
   "20-30% la 6-9 luni este restenoza BMS.",
   "Peste 0,80 se poate evita stentul.",
   "<1% este mortalitatea CABG la FE conservată, nu restenoza BMS."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează pragul FFR (stentează tocmai leziunile >0,80) și comprimă restenoza BMS de la 20-30% la 1%."
  },
  "textbookExpressions": [
   "0,80",
   "20-30%"
  ]
 },
 {
  "id": "cardiologie-adv-249",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Stenturile farmacologic active și abordul arterial în PCI:",
  "options": [
   "Abordul radial este preferat în prezent și reduce complicațiile de la locul puncției",
   "Prima generație DES (sirolimus, paclitaxel) a redus restenoza, dar producea tromboză tardivă de stent",
   "A doua generație are rețea mai subțire și polimeri biodegradabili sau biocompatibili",
   "Abordul femural este standardul actual în Marea Britanie, radialul fiind abandonat",
   "Prima generație DES a eliminat tromboza de stent, restenoza rămânând 20-30%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Abordul radial este preferat în prezent și reduce complicațiile de la locul puncției — Corect: Radialul este tehnica standard în UK, cu mai puține complicații locale.\n\nPrima generație DES (sirolimus, paclitaxel) a redus restenoza, dar producea tromboză tardivă de stent — Corect: Sirolimus/paclitaxel: mai puțină restenoză, tromboză tardivă.\n\nA doua generație are rețea mai subțire și polimeri biodegradabili sau biocompatibili — Corect: Generația a doua: struturi subțiri, polimeri biodegradabili/biocompatibili.\n\nAbordul femural este standardul actual în Marea Britanie, radialul fiind abandonat — Incorect: Radialul, nu femuralul, este standardul citat.\n\nPrima generație DES a eliminat tromboza de stent, restenoza rămânând 20-30% — Incorect: Prima generație a redus restenoza dar a adus tromboză tardivă; 20-30% este restenoza BMS.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1082, PCI — Radial, DES de generația I/II (pagini PDF: 243).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1082
   ],
   "pdfPages": [
    243
   ],
   "section": "PCI — Radial, DES de generația I/II"
  },
  "learningObjective": "Contrastul trombozei tardive a primei generații DES cu polimerii biocompatibili ai celei de-a doua, plus preferința radială.",
  "optionRationales": [
   "Radialul este tehnica standard în UK, cu mai puține complicații locale.",
   "Sirolimus/paclitaxel: mai puțină restenoză, tromboză tardivă.",
   "Generația a doua: struturi subțiri, polimeri biodegradabili/biocompatibili.",
   "Radialul, nu femuralul, este standardul citat.",
   "Prima generație a redus restenoza dar a adus tromboză tardivă; 20-30% este restenoza BMS."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune femuralul ca standard UK — inversul textului — și atribuie primei generații DES restenoza BMS."
  },
  "textbookExpressions": [
   "sirolimus",
   "paclitaxel"
  ]
 },
 {
  "id": "cardiologie-adv-250",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Dozele din Cadranul 30.33 și dubla antiagregare după stentare:",
  "options": [
   "Nitroglicerina 0,3-1,0 mg sublingual, repetată după 5 minute dacă angina persistă",
   "Ivabradina 2,5-7,5 mg ×2/zi; nicorandil 5-30 mg ×2/zi",
   "DAPT (aspirină plus inhibitor P2Y12) 6-12 luni după stentare; BMS pot fi preferate dacă e nevoie de anticoagulare prelungită sau de chirurgie precoce",
   "Nitroglicerina 80 mg, identic atorvastatinei de prevenție secundară",
   "DAPT se limitează la 24 de ore, BMS fiind interzise înaintea oricărei anticoagulări"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Nitroglicerina 0,3-1,0 mg sublingual, repetată după 5 minute dacă angina persistă — Corect: 0,3-1,0 mg și repetarea la 5 minute sunt din tabel.\n\nIvabradina 2,5-7,5 mg ×2/zi; nicorandil 5-30 mg ×2/zi — Corect: Dozele de ivabradină și nicorandil sunt listate.\n\nDAPT (aspirină plus inhibitor P2Y12) 6-12 luni după stentare; BMS pot fi preferate dacă e nevoie de anticoagulare prelungită sau de chirurgie precoce — Corect: 6-12 luni de DAPT și nișa BMS (anticoagulare prelungită/chirurgie precoce) sunt explicite.\n\nNitroglicerina 80 mg, identic atorvastatinei de prevenție secundară — Incorect: 80 mg este atorvastatina, nu NTG.\n\nDAPT se limitează la 24 de ore, BMS fiind interzise înaintea oricărei anticoagulări — Incorect: DAPT ține luni, nu 24 de ore; BMS au tocmai nișa anticoagulării prelungite.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1083, Angina — NTG 0,3-1,0 mg, DAPT 6-12 luni (pagini PDF: 244).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1083
   ],
   "pdfPages": [
    244
   ],
   "section": "Angina — NTG 0,3-1,0 mg, DAPT 6-12 luni"
  },
  "learningObjective": "Fixarea dozei de NTG cu repetare la 5 minute, a ferestrelor ivabradină/nicorandil și a DAPT 6-12 luni.",
  "optionRationales": [
   "0,3-1,0 mg și repetarea la 5 minute sunt din tabel.",
   "Dozele de ivabradină și nicorandil sunt listate.",
   "6-12 luni de DAPT și nișa BMS (anticoagulare prelungită/chirurgie precoce) sunt explicite.",
   "80 mg este atorvastatina, nu NTG.",
   "DAPT ține luni, nu 24 de ore; BMS au tocmai nișa anticoagulării prelungite."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă 0,3-1,0 mg de NTG cu 80 mg de atorvastatină și comprimă DAPT de la 6-12 luni la 24 de ore."
  },
  "textbookExpressions": [
   "0,3-1,0 mg",
   "6-12 luni"
  ]
 },
 {
  "id": "cardiologie-adv-251",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Tahicardiile, comparativ cu bradicardiile, tind să fie mai simptomatice atunci când:",
  "options": [
   "Sunt mai rapide și mai susținute, iar funcția miocardică este depreciată",
   "Sunt lente și nesusținute, pe cord structural normal",
   "Apar doar nocturn, sub 50 b.p.m., identic definiției bradicardiei",
   "Sunt extrasistole atriale izolate, fără tahicardie susținută",
   "Prognosticul vital rămâne neinfluențat chiar la funcție miocardică depreciată"
  ],
  "correct": [
   0
  ],
  "explanation": "Sunt mai rapide și mai susținute, iar funcția miocardică este depreciată — Corect: Textul: cu cât sunt mai rapide și mai susținute, tahicardiile tind să fie mai simptomatice; la funcție depreciată influențează prognosticul.\n\nSunt lente și nesusținute, pe cord structural normal — Incorect: Pe cord normal, unele aritmii pot fi paucisimptomatice.\n\nApar doar nocturn, sub 50 b.p.m., identic definiției bradicardiei — Incorect: <50 nocturn definește bradicardia, nu tahicardia simptomatică.\n\nSunt extrasistole atriale izolate, fără tahicardie susținută — Incorect: Extrasistola atrială izolată nu este tahicardie susținută.\n\nPrognosticul vital rămâne neinfluențat chiar la funcție miocardică depreciată — Incorect: Când funcția e depreciată, aritmiile influențează prognosticul vital.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1051, Aritmii — Simptomatologia tahicardiilor (pagini PDF: 212).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1051
   ],
   "pdfPages": [
    212
   ],
   "section": "Aritmii — Simptomatologia tahicardiilor"
  },
  "learningObjective": "Reținerea relației viteză/durată și a agravării simptomelor când funcția de pompă este depreciată.",
  "optionRationales": [
   "Textul: cu cât sunt mai rapide și mai susținute, tahicardiile tind să fie mai simptomatice; la funcție depreciată influențează prognosticul.",
   "Pe cord normal, unele aritmii pot fi paucisimptomatice.",
   "<50 nocturn definește bradicardia, nu tahicardia simptomatică.",
   "Extrasistola atrială izolată nu este tahicardie susținută.",
   "Când funcția e depreciată, aritmiile influențează prognosticul vital."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie simptomatologia maximă bradicardiei nocturne, inversul paragrafului despre tahicardiile rapide susținute."
  },
  "textbookExpressions": [
   "mai rapide şi mai susţinute",
   "funcţia miocardică"
  ]
 },
 {
  "id": "cardiologie-adv-252",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Metoda „pill in pocket” pentru cardioversia FA presupune:",
  "options": [
   "Administrarea orală a flecainidei sau propafenonei, testate în prealabil în spital și considerate sigure pentru acel pacient",
   "Digoxin oral la domiciliu, fără testare spitalicească",
   "Amiodaronă i.v. de rutină, fără evaluare prealabilă",
   "Ablația de nod AV ca gest de buzunar",
   "Oprirea anticoagulării în ziua dozei, riscul trombotic dispărând"
  ],
  "correct": [
   0
  ],
  "explanation": "Administrarea orală a flecainidei sau propafenonei, testate în prealabil în spital și considerate sigure pentru acel pacient — Corect: Textul descrie antiaritmic oral (flecainidă sau propafenonă) testat în spital.\n\nDigoxin oral la domiciliu, fără testare spitalicească — Incorect: Digoxinul nu este metoda de buzunar.\n\nAmiodaronă i.v. de rutină, fără evaluare prealabilă — Incorect: Amiodarona i.v. este o altă cale de cardioversie medicamentoasă, nu pill in pocket.\n\nAblația de nod AV ca gest de buzunar — Incorect: Ablația de nod nu este un gest de buzunar.\n\nOprirea anticoagulării în ziua dozei, riscul trombotic dispărând — Incorect: Anticoagularea peri-cardioversie rămâne o problemă separată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1061, Fibrilația atrială — Pill in pocket (pagini PDF: 222).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1061
   ],
   "pdfPages": [
    222
   ],
   "section": "Fibrilația atrială — Pill in pocket"
  },
  "learningObjective": "Reținerea flecainidei/propafenonei orale, testate spitalicește, ca metodă „pill in pocket”.",
  "optionRationales": [
   "Textul descrie antiaritmic oral (flecainidă sau propafenonă) testat în spital.",
   "Digoxinul nu este metoda de buzunar.",
   "Amiodarona i.v. este o altă cale de cardioversie medicamentoasă, nu pill in pocket.",
   "Ablația de nod nu este un gest de buzunar.",
   "Anticoagularea peri-cardioversie rămâne o problemă separată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește flecainida/propafenona testate în spital cu digoxinul de domiciliu, capcana clasică a metodei."
  },
  "textbookExpressions": [
   "flecainidă",
   "propafenonă"
  ]
 },
 {
  "id": "cardiologie-adv-253",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "În tahicardia cu complexe largi, dacă persistă incertitudinea diagnostică între TV și TSV cu aberanță, se va considera:",
  "options": [
   "Tahicardie ventriculară",
   "TSV cu aberanță, până la dovada contrarie",
   "Flutter antiorar cu conducere 1:1",
   "AVNRT tipică slow-fast",
   "Extrasistolie atrială bigeminată"
  ],
  "correct": [
   0
  ],
  "explanation": "Tahicardie ventriculară — Corect: Textul: în caz de incertitudine se va considera tahicardia ca fiind ventriculară.\n\nTSV cu aberanță, până la dovada contrarie — Incorect: Asumarea TSV este tocmai eroarea interzisă.\n\nFlutter antiorar cu conducere 1:1 — Incorect: Flutterul 1:1 este o TSV particulară, nu presupunerea de primă linie.\n\nAVNRT tipică slow-fast — Incorect: AVNRT are de obicei QRS îngust.\n\nExtrasistolie atrială bigeminată — Incorect: Bigeminismul atrial nu explică o tahicardie regulată cu QRS larg.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1063, TV versus TSV — Regula incertitudinii (pagini PDF: 224).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1063
   ],
   "pdfPages": [
    224
   ],
   "section": "TV versus TSV — Regula incertitudinii"
  },
  "learningObjective": "Aplicarea regulii că, la incertitudine, tahicardia cu QRS larg se tratează ca ventriculară (80% sunt TV).",
  "optionRationales": [
   "Textul: în caz de incertitudine se va considera tahicardia ca fiind ventriculară.",
   "Asumarea TSV este tocmai eroarea interzisă.",
   "Flutterul 1:1 este o TSV particulară, nu presupunerea de primă linie.",
   "AVNRT are de obicei QRS îngust.",
   "Bigeminismul atrial nu explică o tahicardie regulată cu QRS larg."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează regula de siguranță (incertitudine = TV) în favoarea TSV cu aberanță."
  },
  "textbookExpressions": [
   "incertitudine",
   "ventriculară"
  ]
 },
 {
  "id": "cardiologie-adv-254",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Endotelina în insuficiența cardiacă: secreția este stimulată de:",
  "options": [
   "Hipoxie, catecolamine și angiotensină II",
   "Doar de peptidul natriuretic C",
   "Oxidul nitric în exces",
   "Adenozina din terminațiile nervoase ale anginei",
   "Ivabradină, care blochează If"
  ],
  "correct": [
   0
  ],
  "explanation": "Hipoxie, catecolamine și angiotensină II — Corect: Cei trei stimuli sunt enumerați explicit.\n\nDoar de peptidul natriuretic C — Incorect: CNP are efecte similare ANP/BNP, nu stimulează ET.\n\nOxidul nitric în exces — Incorect: Activitatea NO este insuficientă, nu în exces.\n\nAdenozina din terminațiile nervoase ale anginei — Incorect: Adenozina ține de durerea anginoasă, nu de secreția de ET.\n\nIvabradină, care blochează If — Incorect: Ivabradina inhibă If sinoatrial, nu secreția de ET.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1071, Insuficiența cardiacă — Stimulii endotelinei (pagini PDF: 232).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1071
   ],
   "pdfPages": [
    232
   ],
   "section": "Insuficiența cardiacă — Stimulii endotelinei"
  },
  "learningObjective": "Reținerea triadului hipoxie–catecolamine–angiotensină II ca stimuli ai secreției de ET.",
  "optionRationales": [
   "Cei trei stimuli sunt enumerați explicit.",
   "CNP are efecte similare ANP/BNP, nu stimulează ET.",
   "Activitatea NO este insuficientă, nu în exces.",
   "Adenozina ține de durerea anginoasă, nu de secreția de ET.",
   "Ivabradina inhibă If sinoatrial, nu secreția de ET."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește triadul hipoxie/catecolamine/angiotensină II cu NO-ul — descris ca insuficient — sau cu ivabradina."
  },
  "textbookExpressions": [
   "angiotensina li",
   "catecolaminele"
  ]
 },
 {
  "id": "cardiologie-adv-255",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Recomandările dietetice pentru prevenția bolii coronariene includ și:",
  "options": [
   "Grăsimi ≤30% din calorii, saturate ≤7%, colesterol <300 mg/zi; saturatele se înlocuiesc cu mono- și polinesaturate (rapiță, măsline)",
   "Limitarea zaharurilor rafinate (ex. fructoză); patru-cinci porții de nuci, semințe și legume nesărate pe săptămână",
   "Colesterol alimentar nelimitat, saturatele fiind preferate nesaturatelor",
   "Efortul se evită după 45 de ani, pentru a proteja placa",
   "IMC țintă ≥30 kg/m², ca rezervă energetică"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Grăsimi ≤30% din calorii, saturate ≤7%, colesterol <300 mg/zi; saturatele se înlocuiesc cu mono- și polinesaturate (rapiță, măsline) — Corect: Plafoanele de grăsimi și colesterol, plus rapița/măslinele, sunt explicite.\n\nLimitarea zaharurilor rafinate (ex. fructoză); patru-cinci porții de nuci, semințe și legume nesărate pe săptămână — Corect: Fructoza se limitează; 4-5 porții de nuci/semințe/legume nesărate sunt listate.\n\nColesterol alimentar nelimitat, saturatele fiind preferate nesaturatelor — Incorect: Colesterolul trebuie <300 mg/zi; saturatele se înlocuiesc.\n\nEfortul se evită după 45 de ani, pentru a proteja placa — Incorect: Efortul aerobic este recomandat.\n\nIMC țintă ≥30 kg/m², ca rezervă energetică — Incorect: IMC țintă este <25 kg/m².\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1081, Boala coronariană — Grăsimi ≤30%/≤7% și 4-5 porții de nuci (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1081
   ],
   "pdfPages": [
    242
   ],
   "section": "Boala coronariană — Grăsimi ≤30%/≤7% și 4-5 porții de nuci"
  },
  "learningObjective": "Completarea dietei cu plafoanele 30%/7%/<300 mg și cu 4-5 porții săptămânale de nuci/semințe.",
  "optionRationales": [
   "Plafoanele de grăsimi și colesterol, plus rapița/măslinele, sunt explicite.",
   "Fructoza se limitează; 4-5 porții de nuci/semințe/legume nesărate sunt listate.",
   "Colesterolul trebuie <300 mg/zi; saturatele se înlocuiesc.",
   "Efortul aerobic este recomandat.",
   "IMC țintă este <25 kg/m²."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Preferă saturatele și IMC ≥30, inversul dietei cu ≤7% saturate și IMC <25."
  },
  "textbookExpressions": [
   "300 mg/zi",
   "rapiţă"
  ]
 },
 {
  "id": "cardiologie-adv-256",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Durerea toracică non-anginoasă este probabilă dacă este:",
  "options": [
   "Continuă, nelegată de efort, accentuată de mișcările respiratorii sau asociată cu amețeli, palpitații sau disfagie",
   "Retrosternală de efort, cedează la nitrat, identic anginei clasice",
   "Doar cele trei caracteristici NICE ale anginei clasice, simultan",
   "Echivalentul CCS IV, cu indicație de PCI primară",
   "Un criteriu suficient de STEMI, fără ECG"
  ],
  "correct": [
   0
  ],
  "explanation": "Continuă, nelegată de efort, accentuată de mișcările respiratorii sau asociată cu amețeli, palpitații sau disfagie — Corect: Textul listează tocmai aceste trăsături ca durere non-anginoasă probabilă.\n\nRetrosternală de efort, cedează la nitrat, identic anginei clasice — Incorect: Retrosternalul de efort care cedează la nitrat este angina clasică.\n\nDoar cele trei caracteristici NICE ale anginei clasice, simultan — Incorect: Cele trei caracteristici definesc forma clasică, nu non-anginoasa.\n\nEchivalentul CCS IV, cu indicație de PCI primară — Incorect: Non-anginoasa cu ECG normal se investighează pentru diagnostice alternative, nu PCI primară.\n\nUn criteriu suficient de STEMI, fără ECG — Incorect: STEMI cere criterii ECG, nu acest tipar.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1082, Angina — Durerea non-anginoasă probabilă (pagini PDF: 243).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1082
   ],
   "pdfPages": [
    243
   ],
   "section": "Angina — Durerea non-anginoasă probabilă"
  },
  "learningObjective": "Recunoașterea clusterului (continuă, nerespirator-independentă, disfagie/palpitații) ca durere non-anginoasă.",
  "optionRationales": [
   "Textul listează tocmai aceste trăsături ca durere non-anginoasă probabilă.",
   "Retrosternalul de efort care cedează la nitrat este angina clasică.",
   "Cele trei caracteristici definesc forma clasică, nu non-anginoasa.",
   "Non-anginoasa cu ECG normal se investighează pentru diagnostice alternative, nu PCI primară.",
   "STEMI cere criterii ECG, nu acest tipar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Trimite durerea continuă respirator-dependentă la PCI primară, sărind algoritmul NICE."
  },
  "textbookExpressions": [
   "disfagie",
   "nelegată de efort"
  ]
 },
 {
  "id": "cardiologie-adv-257",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Reintrarea (Fig. 30.38C) apare atunci când:",
  "options": [
   "Există țesut miocardic normal dispus circular în jurul unui miez inexcitabil (ex. cicatrice)",
   "O extrasistolă găsește o cale în perioadă refractară (bloc unidirecțional), cealaltă fiind excitabilă",
   "Timpul de conducere pe circuit este mai lung decât perioadele refractare, întreținând tahicardia",
   "Miezul trebuie să fie excitabil, iar extrasistola este superfluă",
   "Majoritatea tahicardiilor paroxistice regulate au alt mecanism decât reintrarea"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Există țesut miocardic normal dispus circular în jurul unui miez inexcitabil (ex. cicatrice) — Corect: Miezul inexcitabil (cicatrice) este explicit.\n\nO extrasistolă găsește o cale în perioadă refractară (bloc unidirecțional), cealaltă fiind excitabilă — Corect: Extrasistola și blocul unidirecțional inițiază circuitul.\n\nTimpul de conducere pe circuit este mai lung decât perioadele refractare, întreținând tahicardia — Corect: Conducerea mai lentă decât refractaritatea întreține tahicardia.\n\nMiezul trebuie să fie excitabil, iar extrasistola este superfluă — Incorect: Miezul este inexcitabil, nu excitabil.\n\nMajoritatea tahicardiilor paroxistice regulate au alt mecanism decât reintrarea — Incorect: Majoritatea tahicardiilor paroxistice regulate au la bază reintrarea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1052, Aritmii — Reintrarea (miez inexcitabil) (pagini PDF: 213).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1052
   ],
   "pdfPages": [
    213
   ],
   "section": "Aritmii — Reintrarea (miez inexcitabil)"
  },
  "learningObjective": "Recunoașterea triadei miez inexcitabil – bloc unidirecțional – timp de circuit > refractaritate.",
  "optionRationales": [
   "Miezul inexcitabil (cicatrice) este explicit.",
   "Extrasistola și blocul unidirecțional inițiază circuitul.",
   "Conducerea mai lentă decât refractaritatea întreține tahicardia.",
   "Miezul este inexcitabil, nu excitabil.",
   "Majoritatea tahicardiilor paroxistice regulate au la bază reintrarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere un miez excitabil și neagă reintrarea ca mecanism dominant al tahicardiilor paroxistice regulate."
  },
  "textbookExpressions": [
   "miez",
   "inexcitabil"
  ]
 },
 {
  "id": "cardiologie-adv-258",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Dozele cronice de diuretice și vasodilatatoare din Cadranul 30.25 includ:",
  "options": [
   "Furosemid 20-40 mg/zi inițial, până la 250-500 mg/zi",
   "Bumetanid 0,5-1,0 mg/zi, maxim 5-10 mg/zi",
   "Isosorbid dinitrat 20-40 mg ×3/zi și hidralazină 37,5-75 mg ×3/zi",
   "Furosemid 50 mg i.v. ca doză cronică orală unică, fără treaptă de 20-40 mg",
   "Bumetanidul este interzis în IC, fiind rezervat edemului pulmonar acut"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Furosemid 20-40 mg/zi inițial, până la 250-500 mg/zi — Corect: Treptele 20-40 → 250-500 mg furosemid sunt din tabel.\n\nBumetanid 0,5-1,0 mg/zi, maxim 5-10 mg/zi — Corect: Bumetanidul 0,5-1,0 → 5-10 mg este explicit.\n\nIsosorbid dinitrat 20-40 mg ×3/zi și hidralazină 37,5-75 mg ×3/zi — Corect: Isosorbidul 20-40 ×3 și hidralazina 37,5-75 ×3 sunt listate.\n\nFurosemid 50 mg i.v. ca doză cronică orală unică, fără treaptă de 20-40 mg — Incorect: 50 mg i.v. este doza inițială din ICA, nu treapta cronică orală.\n\nBumetanidul este interzis în IC, fiind rezervat edemului pulmonar acut — Incorect: Bumetanidul figurează în cadranul de IC cronică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1074, Insuficiența cardiacă — Furosemid 250-500 mg, bumetanid, hidralazină (pagini PDF: 235).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1074
   ],
   "pdfPages": [
    235
   ],
   "section": "Insuficiența cardiacă — Furosemid 250-500 mg, bumetanid, hidralazină"
  },
  "learningObjective": "Memorarea treptelor orale de furosemid (până la 250-500 mg) și bumetanid (5-10 mg), plus schema hidralazină-nitrat ×3/zi.",
  "optionRationales": [
   "Treptele 20-40 → 250-500 mg furosemid sunt din tabel.",
   "Bumetanidul 0,5-1,0 → 5-10 mg este explicit.",
   "Isosorbidul 20-40 ×3 și hidralazina 37,5-75 ×3 sunt listate.",
   "50 mg i.v. este doza inițială din ICA, nu treapta cronică orală.",
   "Bumetanidul figurează în cadranul de IC cronică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă bolusul i.v. de 50 mg din ICA cu treapta cronică orală 20-40/250-500 mg."
  },
  "textbookExpressions": [
   "250-500 mg zilnic",
   "37,5-75 mg"
  ]
 },
 {
  "id": "cardiologie-adv-259",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "În STEMI, oxigenoterapia pe mască se administrează dacă saturația este sub:",
  "options": [
   "90%",
   "98%, identic țintei post-ROSC 94-98%",
   "70%, altfel oxigenul este inutil",
   "100%, de rutină la toți pacienții",
   "80%, doar în șocul cardiogen Killip IV"
  ],
  "correct": [
   0
  ],
  "explanation": "90% — Corect: Textul: oxigen pe mască dacă saturația este mai mică de 90%.\n\n98%, identic țintei post-ROSC 94-98% — Incorect: 94-98% este ținta post-ROSC, nu pragul de start al oxigenului în STEMI.\n\n70%, altfel oxigenul este inutil — Incorect: 70% este prea jos.\n\n100%, de rutină la toți pacienții — Incorect: Oxigenul 100% de rutină nu este indicat.\n\n80%, doar în șocul cardiogen Killip IV — Incorect: Pragul citat este 90%, nu doar Killip IV.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1088, STEMI — Oxigen sub 90% (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1088
   ],
   "pdfPages": [
    249
   ],
   "section": "STEMI — Oxigen sub 90%"
  },
  "learningObjective": "Reținerea pragului SpO2 <90% pentru oxigenul pe mască, distinct de țintele post-resuscitare.",
  "optionRationales": [
   "Textul: oxigen pe mască dacă saturația este mai mică de 90%.",
   "94-98% este ținta post-ROSC, nu pragul de start al oxigenului în STEMI.",
   "70% este prea jos.",
   "Oxigenul 100% de rutină nu este indicat.",
   "Pragul citat este 90%, nu doar Killip IV."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă pragul STEMI <90% cu ținta post-ROSC 94-98% sau cu oxigenul 100% de rutină."
  },
  "textbookExpressions": [
   "oxigenoterapia",
   "mască"
  ]
 },
 {
  "id": "cardiologie-adv-260",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Conform Cadranului 30.39, un scor TIMI STEMI de 5 puncte corespunde unei mortalități la 30 de zile de circa:",
  "options": [
   "0,8%",
   "4,4%",
   "12,4%",
   "35,9%",
   "1,6%"
  ],
  "correct": [
   2
  ],
  "explanation": "0,8% — Incorect: 0,8% este scorul 0.\n\n4,4% — Incorect: 4,4% este scorul 3.\n\n12,4% — Corect: Cadranul: 5 → 12,4%.\n\n35,9% — Incorect: 35,9% este banda 9-16.\n\n1,6% — Incorect: 1,6% este scorul 1.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1088, STEMI — TIMI scor 5 → 12,4% (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1088
   ],
   "pdfPages": [
    249
   ],
   "section": "STEMI — TIMI scor 5 → 12,4%"
  },
  "learningObjective": "Memorarea treptei 5 puncte → 12,4%, intercalată între 4,4% (3 puncte) și 35,9% (9-16).",
  "optionRationales": [
   "0,8% este scorul 0.",
   "4,4% este scorul 3.",
   "Cadranul: 5 → 12,4%.",
   "35,9% este banda 9-16.",
   "1,6% este scorul 1."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează treptele consecutive ale aceluiași tabel; doar scorul 5 dă 12,4%."
  },
  "textbookExpressions": [
   "12,4%",
   "30 zile"
  ]
 },
 {
  "id": "cardiologie-adv-261",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "La vârstnici sau diabetici, infarctul miocardic se poate prezenta atipic prin:",
  "options": [
   "Dispnee, astenie, presincopă sau sincopă",
   "Durere care cedează prompt la nitroglicerină sublinguală, identic anginei stabile",
   "Absența oricăror simptome vegetative",
   "Un ECG normal constant, fără indicație de repetare",
   "Localizare doar posterioară, fără alte teritorii"
  ],
  "correct": [
   0
  ],
  "explanation": "Dispnee, astenie, presincopă sau sincopă — Corect: Textul enumeră dispnee, astenie, presincopă sau sincopă.\n\nDurere care cedează prompt la nitroglicerină sublinguală, identic anginei stabile — Incorect: Durerea de STEMI nu cedează de obicei la nitratul sublingual.\n\nAbsența oricăror simptome vegetative — Incorect: Simptomele vegetative sunt frecvente.\n\nUn ECG normal constant, fără indicație de repetare — Incorect: Prima ECG e rar normală; se repetă la 15 minute dacă durerea persistă.\n\nLocalizare doar posterioară, fără alte teritorii — Incorect: Atipia se referă la simptome, nu la o localizare unică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1088, STEMI — Prezentarea atipică (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1088
   ],
   "pdfPages": [
    249
   ],
   "section": "STEMI — Prezentarea atipică"
  },
  "learningObjective": "Recunoașterea echivalentelor (dispnee, astenie, sincopă) la vârstnic și diabetic.",
  "optionRationales": [
   "Textul enumeră dispnee, astenie, presincopă sau sincopă.",
   "Durerea de STEMI nu cedează de obicei la nitratul sublingual.",
   "Simptomele vegetative sunt frecvente.",
   "Prima ECG e rar normală; se repetă la 15 minute dacă durerea persistă.",
   "Atipia se referă la simptome, nu la o localizare unică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie STEMI-ului răspunsul la nitrat al anginei stabile și anulează simptomele vegetative."
  },
  "textbookExpressions": [
   "diabetici",
   "presincopă"
  ]
 },
 {
  "id": "cardiologie-adv-262",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Evoluția electrocardiografică a STEMI (Fig. 30.70) include:",
  "options": [
   "Minute: unde T ample, ascuțite, simetrice și supradenivelare ST",
   "Ore: T se negativează, voltajul R scade, apar unde Q",
   "Zile: ST redevine izoelectric; săptămâni/luni: T se pozitivează, Q persistă",
   "Undele Q dispar în primele minute, ST-ul rămânând neschimbat luni de zile",
   "T negative din primul minut exclud infarctul"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Minute: unde T ample, ascuțite, simetrice și supradenivelare ST — Corect: Modificările din primele minute sunt descrise.\n\nOre: T se negativează, voltajul R scade, apar unde Q — Corect: Ore: T negative, R mic, Q.\n\nZile: ST redevine izoelectric; săptămâni/luni: T se pozitivează, Q persistă — Corect: Zile: ST izoelectric; tardiv T se normalizează, Q rămâne.\n\nUndele Q dispar în primele minute, ST-ul rămânând neschimbat luni de zile — Incorect: Q apar după ore, nu dispar în minute.\n\nT negative din primul minut exclud infarctul — Incorect: T hiperacute, nu negative, marchează debutul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1090, STEMI — Evoluția ECG minute–ore–zile (pagini PDF: 251).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1090
   ],
   "pdfPages": [
    251
   ],
   "section": "STEMI — Evoluția ECG minute–ore–zile"
  },
  "learningObjective": "Secvența T hiperacute → Q și T negative → ST izoelectric → T recuperat cu Q persistent.",
  "optionRationales": [
   "Modificările din primele minute sunt descrise.",
   "Ore: T negative, R mic, Q.",
   "Zile: ST izoelectric; tardiv T se normalizează, Q rămâne.",
   "Q apar după ore, nu dispar în minute.",
   "T hiperacute, nu negative, marchează debutul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează cronologia Q/ST: face Q-ul evanescent în minute și ST-ul persistent luni."
  },
  "textbookExpressions": [
   "câteva minute",
   "undele Q"
  ]
 },
 {
  "id": "cardiologie-adv-263",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Ruptura de perete liber post-STEMI:",
  "options": [
   "Este o complicație mecanică precoce, cel mai frecvent fatală",
   "Produce colaps și stop prin disociație electromecanică",
   "În forma subacută, pericardiocenteza urmată de chirurgie precoce poate fi salvatoare",
   "Anevrismul ventricular în teritoriul infarctizat este o complicație tardivă care poate cere reparare chirurgicală",
   "Este o complicație tardivă benignă, fără risc de disociație electromecanică"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este o complicație mecanică precoce, cel mai frecvent fatală — Corect: Precoce și de obicei fatală este explicit.\n\nProduce colaps și stop prin disociație electromecanică — Corect: Disociația electromecanică este mecanismul de stop.\n\nÎn forma subacută, pericardiocenteza urmată de chirurgie precoce poate fi salvatoare — Corect: Forma subacută: pericardiocenteză apoi chirurgie.\n\nAnevrismul ventricular în teritoriul infarctizat este o complicație tardivă care poate cere reparare chirurgicală — Corect: Anevrismul este complicație tardivă.\n\nEste o complicație tardivă benignă, fără risc de disociație electromecanică — Incorect: Ruptura nu este tardivă benignă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1090, STEMI — Ruptura de perete liber și anevrismul (pagini PDF: 251).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1090
   ],
   "pdfPages": [
    251
   ],
   "section": "STEMI — Ruptura de perete liber și anevrismul"
  },
  "learningObjective": "Contrastul rupturii precoce fatale (EMD) cu anevrismul tardiv și cu fereastra subacută salvabilă.",
  "optionRationales": [
   "Precoce și de obicei fatală este explicit.",
   "Disociația electromecanică este mecanismul de stop.",
   "Forma subacută: pericardiocenteză apoi chirurgie.",
   "Anevrismul este complicație tardivă.",
   "Ruptura nu este tardivă benignă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută ruptura fatală precoce în „complicație tardivă benignă”, inversând prognosticul."
  },
  "textbookExpressions": [
   "disociaţie electromecanică",
   "forma subacută"
  ]
 },
 {
  "id": "cardiologie-adv-264",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Insuficiența cardiacă ușoară post-STEMI poate răspunde la:",
  "options": [
   "Furosemid 40-80 mg în bolus i.v. și nitroglicerină în perfuzie, dacă tensiunea permite",
   "Un IECA din primele 24-48 de ore, dacă tensiunea este normală",
   "Oxigen pe mască cu monitorizare prin pulsoximetrie",
   "Digoxin i.v. de primă linie, înaintea diureticului",
   "Interzicerea IECA în primele 7 zile, indiferent de tensiune"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Furosemid 40-80 mg în bolus i.v. și nitroglicerină în perfuzie, dacă tensiunea permite — Corect: Doza 40-80 mg și nitratul condiționat de TA sunt explicite.\n\nUn IECA din primele 24-48 de ore, dacă tensiunea este normală — Corect: IECA în 24-48 de ore dacă TA e normală.\n\nOxigen pe mască cu monitorizare prin pulsoximetrie — Corect: Oxigenul cu pulsoximetrie este menționat.\n\nDigoxin i.v. de primă linie, înaintea diureticului — Incorect: Digoxinul nu este prima linie a IC ușoare post-STEMI.\n\nInterzicerea IECA în primele 7 zile, indiferent de tensiune — Incorect: Textul permite IECA precoce dacă TA e normală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1090, STEMI — IC ușoară, furosemid 40-80 mg (pagini PDF: 251).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1090
   ],
   "pdfPages": [
    251
   ],
   "section": "STEMI — IC ușoară, furosemid 40-80 mg"
  },
  "learningObjective": "Aplicarea bolusului 40-80 mg și a ferestrei IECA 24-48 de ore la tensiune normală.",
  "optionRationales": [
   "Doza 40-80 mg și nitratul condiționat de TA sunt explicite.",
   "IECA în 24-48 de ore dacă TA e normală.",
   "Oxigenul cu pulsoximetrie este menționat.",
   "Digoxinul nu este prima linie a IC ușoare post-STEMI.",
   "Textul permite IECA precoce dacă TA e normală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Interzice IECA-ul din 24-48 de ore — fereastra citată — și pune digoxinul înaintea diureticului."
  },
  "textbookExpressions": [
   "40-80 mg",
   "24-48 ore"
  ]
 },
 {
  "id": "cardiologie-adv-265",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Alte etiologii ale stenozei mitrale, dincolo de reumatism, includ:",
  "options": [
   "Stenoza congenitală și sindromul Lutembacher (SM dobândită + DSA)",
   "Calcificarea extensivă a inelului mitral, mai ales la vârstnici și în boala renală avansată",
   "Tumori carcinoide cu metastaze pulmonare sau carcinoid primar bronșic",
   "Doar bicuspidia aortică, fără DSA",
   "Lutembacher ca asociere SM + stenoza aortică, fără defect septal"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Stenoza congenitală și sindromul Lutembacher (SM dobândită + DSA) — Corect: Congenitala și Lutembacher sunt listate.\n\nCalcificarea extensivă a inelului mitral, mai ales la vârstnici și în boala renală avansată — Corect: Calcificarea de inel la vârstnici și boală renală avansată este explicită.\n\nTumori carcinoide cu metastaze pulmonare sau carcinoid primar bronșic — Corect: Carcinoidul cu metastaze pulmonare sau primar bronșic este citat.\n\nDoar bicuspidia aortică, fără DSA — Incorect: Bicuspidia ține de valva aortică.\n\nLutembacher ca asociere SM + stenoza aortică, fără defect septal — Incorect: Lutembacher asociază SM cu DSA, nu cu stenoza aortică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1092, Stenoza mitrală — Lutembacher, inel calcificat, carcinoid (pagini PDF: 253).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1092
   ],
   "pdfPages": [
    253
   ],
   "section": "Stenoza mitrală — Lutembacher, inel calcificat, carcinoid"
  },
  "learningObjective": "Recunoașterea Lutembacher (SM+DSA), a calcificării de inel la vârstnic/CKD și a carcinoidului cu metastaze pulmonare.",
  "optionRationales": [
   "Congenitala și Lutembacher sunt listate.",
   "Calcificarea de inel la vârstnici și boală renală avansată este explicită.",
   "Carcinoidul cu metastaze pulmonare sau primar bronșic este citat.",
   "Bicuspidia ține de valva aortică.",
   "Lutembacher asociază SM cu DSA, nu cu stenoza aortică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește DSA-ul din Lutembacher cu stenoza aortică, capcana eponimică clasică."
  },
  "textbookExpressions": [
   "Lutembacher",
   "calcificarea inelului mitral"
  ]
 },
 {
  "id": "cardiologie-adv-266",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "În țările cu venituri mici-medii, stenoza mitrală reumatismală afectează circa:",
  "options": [
   "20 de milioane de oameni",
   "20.000 de oameni",
   "2% din nou-născuți, identic bicuspidiei",
   "1 din 500, identic CMH",
   "Sub 1.000, fiind o raritate occidentală recentă"
  ],
  "correct": [
   0
  ],
  "explanation": "20 de milioane de oameni — Corect: Textul: aproximativ 20 de milioane de oameni.\n\n20.000 de oameni — Incorect: 20.000 subestimează cu trei ordine.\n\n2% din nou-născuți, identic bicuspidiei — Incorect: 1-2% este bicuspidia, nu SM reumatismală.\n\n1 din 500, identic CMH — Incorect: 1/500 este CMH.\n\nSub 1.000, fiind o raritate occidentală recentă — Incorect: Ordinul este de zeci de milioane, nu mii.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1092, Stenoza mitrală — 20 de milioane (pagini PDF: 253).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1092
   ],
   "pdfPages": [
    253
   ],
   "section": "Stenoza mitrală — 20 de milioane"
  },
  "learningObjective": "Reținerea ordinului 20 de milioane în țările cu venituri mici-medii.",
  "optionRationales": [
   "Textul: aproximativ 20 de milioane de oameni.",
   "20.000 subestimează cu trei ordine.",
   "1-2% este bicuspidia, nu SM reumatismală.",
   "1/500 este CMH.",
   "Ordinul este de zeci de milioane, nu mii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Subestimează cu trei ordine prevalența reumatismală din țările cu venituri mici-medii."
  },
  "textbookExpressions": [
   "20 de milioane",
   "reumatismale"
  ]
 },
 {
  "id": "cardiologie-adv-267",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Faciesul mitral (flush malar) se caracterizează prin:",
  "options": [
   "Pete roșiatice sau cianotice la pomeți, prin stază vasculară și anastomoze arterio-venoase",
   "Un puls cu amplitudine redusă; ulterior complet neregulat dacă se instalează FA",
   "Pulsație amplă parasternal stâng, corespunzând S1, prin VD dilatat care deplasează VS posterior",
   "Facies palid de anemie, fără stază malară",
   "Puls săltăreț, identic regurgitării aortice"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pete roșiatice sau cianotice la pomeți, prin stază vasculară și anastomoze arterio-venoase — Corect: Petele malare și mecanismul (stază, anastomoze) sunt explicite.\n\nUn puls cu amplitudine redusă; ulterior complet neregulat dacă se instalează FA — Corect: Pulsul de amplitudine redusă, apoi neregulat în FA, este descris.\n\nPulsație amplă parasternal stâng, corespunzând S1, prin VD dilatat care deplasează VS posterior — Corect: Pulsația parasternală de S1 prin VD dilatat este din text.\n\nFacies palid de anemie, fără stază malară — Incorect: Nu este faciesul de anemie.\n\nPuls săltăreț, identic regurgitării aortice — Incorect: Pulsul săltăreț ține de regurgitarea aortică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1092, Stenoza mitrală — Flush malar și palpare (pagini PDF: 253).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1092
   ],
   "pdfPages": [
    253
   ],
   "section": "Stenoza mitrală — Flush malar și palpare"
  },
  "learningObjective": "Potrivirea flush-ului malar cu pulsul mic și cu pulsația parasternală de VD dilatat.",
  "optionRationales": [
   "Petele malare și mecanismul (stază, anastomoze) sunt explicite.",
   "Pulsul de amplitudine redusă, apoi neregulat în FA, este descris.",
   "Pulsația parasternală de S1 prin VD dilatat este din text.",
   "Nu este faciesul de anemie.",
   "Pulsul săltăreț ține de regurgitarea aortică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie stenozei mitrale pulsul săltăreț al regurgitării aortice și anulează flush-ul malar."
  },
  "textbookExpressions": [
   "flush malar",
   "pomeţilor"
  ]
 },
 {
  "id": "cardiologie-adv-268",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Fiziopatologia regurgitării mitrale acute versus cronice:",
  "options": [
   "În forma cronică, atriul dilatat progresiv are complianță crescută, cu creștere minimă a presiunii intraatriale",
   "În forma acută, atriul de dimensiuni normale nu se dilată suficient; unda „v” este semnificativ crescută, cu edem pulmonar acut",
   "Volumul-bătaie crește progresiv pentru a menține debitul net, dilatând VS",
   "În acut, unda „v” este mică, edemul pulmonar fiind rar",
   "Complianța atriului normal previne orice creștere de presiune în regurgitarea acută"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În forma cronică, atriul dilatat progresiv are complianță crescută, cu creștere minimă a presiunii intraatriale — Corect: Complianța atriului cronic dilatat este explicită.\n\nÎn forma acută, atriul de dimensiuni normale nu se dilată suficient; unda „v” este semnificativ crescută, cu edem pulmonar acut — Corect: Unda v și EPA din acut sunt descrise.\n\nVolumul-bătaie crește progresiv pentru a menține debitul net, dilatând VS — Corect: Creșterea volumului-bătaie și dilatarea VS sunt din text.\n\nÎn acut, unda „v” este mică, edemul pulmonar fiind rar — Incorect: În acut unda v este crescută, nu mică.\n\nComplianța atriului normal previne orice creștere de presiune în regurgitarea acută — Incorect: Atriul normal tocmai nu previne creșterea de presiune.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1095, Regurgitarea mitrală — Unda v și forma acută (pagini PDF: 256).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1095
   ],
   "pdfPages": [
    256
   ],
   "section": "Regurgitarea mitrală — Unda v și forma acută"
  },
  "learningObjective": "Contrastul atriului compliant cronic versus unda v și EPA din regurgitarea acută.",
  "optionRationales": [
   "Complianța atriului cronic dilatat este explicită.",
   "Unda v și EPA din acut sunt descrise.",
   "Creșterea volumului-bătaie și dilatarea VS sunt din text.",
   "În acut unda v este crescută, nu mică.",
   "Atriul normal tocmai nu previne creșterea de presiune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează unda v (mare în acut) și neagă edemul pulmonar — tabloul clasic al RM acute."
  },
  "textbookExpressions": [
   "unda „v\"",
   "edemului pulmo"
  ]
 },
 {
  "id": "cardiologie-adv-269",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Semne auscultatorii și ECG în regurgitarea mitrală, dincolo de suflul holosistolic:",
  "options": [
   "Clic mezosistolic pe valve mixomatoase, prin prolaps brusc și tensionarea cordajelor; poate fi urmat de suflu telesistolic",
   "S3 accentuat prin umplere rapidă protodiastolică a VS dilatat; uneori uruitură mezodiastolică scurtă după S3",
   "HVS la ECG: S în V1 + R în V5/V6 >35 mm",
   "S3 lipsește, umplerea VS fiind lentă ca în stenoza mitrală",
   "Cașexia este incompatibilă cu regurgitarea mitrală avansată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Clic mezosistolic pe valve mixomatoase, prin prolaps brusc și tensionarea cordajelor; poate fi urmat de suflu telesistolic — Corect: Clicul mezosistolic și suflul telesistolic sunt descrise.\n\nS3 accentuat prin umplere rapidă protodiastolică a VS dilatat; uneori uruitură mezodiastolică scurtă după S3 — Corect: S3 și uruitura scurtă sunt explicite.\n\nHVS la ECG: S în V1 + R în V5/V6 >35 mm — Corect: Suma >35 mm este din text.\n\nS3 lipsește, umplerea VS fiind lentă ca în stenoza mitrală — Incorect: S3 este accentuat prin umplere rapidă, nu absent.\n\nCașexia este incompatibilă cu regurgitarea mitrală avansată — Incorect: Cașexia poate fi prezentă în stadiile avansate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1095, Regurgitarea mitrală — Clic mixomatos și Sokolow >35 mm (pagini PDF: 256).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1095
   ],
   "pdfPages": [
    256
   ],
   "section": "Regurgitarea mitrală — Clic mixomatos și Sokolow >35 mm"
  },
  "learningObjective": "Recunoașterea clic-ului mixomatos, a S3 de umplere rapidă și a sumei Sokolow >35 mm.",
  "optionRationales": [
   "Clicul mezosistolic și suflul telesistolic sunt descrise.",
   "S3 și uruitura scurtă sunt explicite.",
   "Suma >35 mm este din text.",
   "S3 este accentuat prin umplere rapidă, nu absent.",
   "Cașexia poate fi prezentă în stadiile avansate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă S3-ul de umplere rapidă — semnul VS dilatat — și anulează cașexia stadiilor avansate."
  },
  "textbookExpressions": [
   ">35 mm",
   "Clic mezosistolic"
  ]
 },
 {
  "id": "cardiologie-adv-270",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Stenoza tricuspidiană:",
  "options": [
   "Simptome: dureri abdominale (hepatomegalie), distensie (ascită) și edeme periferice",
   "În sinus: undă jugulară „a” proeminentă, palpată și la ficat; suflu mezodiastolic la marginea sternală stângă inferioară, accentuat în inspir",
   "Pe ECG, dilatarea AD: unde P înalte (>3 mm) în DII",
   "Este, de regulă, o leziune izolată, fără afectare mitrală/aortică reumatismală",
   "Suflul se ameliorează în inspir, identic suflurilor stângi"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Simptome: dureri abdominale (hepatomegalie), distensie (ascită) și edeme periferice — Corect: Simptomele de congestie sistemică sunt explicite.\n\nÎn sinus: undă jugulară „a” proeminentă, palpată și la ficat; suflu mezodiastolic la marginea sternală stângă inferioară, accentuat în inspir — Corect: Unda a, palparea hepatică și suflul inspirator sunt descrise.\n\nPe ECG, dilatarea AD: unde P înalte (>3 mm) în DII — Corect: P >3 mm în DII marchează dilatarea AD.\n\nEste, de regulă, o leziune izolată, fără afectare mitrală/aortică reumatismală — Incorect: Textul: pacienții au de obicei și valve stângi reumatismale; ST este rar izolată.\n\nSuflul se ameliorează în inspir, identic suflurilor stângi — Incorect: Suflul se accentuează în inspir, nu se ameliorează.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1101, Stenoza tricuspidiană — Unda a, P >3 mm (pagini PDF: 262).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1101
   ],
   "pdfPages": [
    262
   ],
   "section": "Stenoza tricuspidiană — Unda a, P >3 mm"
  },
  "learningObjective": "Potrivirea congestiei drepte cu unda a hepatică, suflul inspirator și P >3 mm în DII.",
  "optionRationales": [
   "Simptomele de congestie sistemică sunt explicite.",
   "Unda a, palparea hepatică și suflul inspirator sunt descrise.",
   "P >3 mm în DII marchează dilatarea AD.",
   "Textul: pacienții au de obicei și valve stângi reumatismale; ST este rar izolată.",
   "Suflul se accentuează în inspir, nu se ameliorează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Izolează stenoza tricuspidă de reumatismul stâng — deși textul o leagă aproape constant de valvele stângi."
  },
  "textbookExpressions": [
   ">3 mm",
   "edeme periferice"
  ]
 },
 {
  "id": "cardiologie-adv-271",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Regurgitarea tricuspidiană organică se caracterizează prin:",
  "options": [
   "Cauze: reumatism, endocardită, sindrom carcinoid, boala Ebstein și alte anomalii congenitale ale valvelor AV",
   "Semne: undă jugulară „cv” mare, ficat pulsatil sistolic, suflu holosistolic inspirator la marginea sternală stângă inferioară",
   "Forma funcțională nu dispare după tratamentul medical al cauzei de dilatare a VD",
   "Protezarea este primul gest la orice regurgitare funcțională ușoară",
   "Suflul se ameliorează în inspir, identic suflurilor stângi"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Cauze: reumatism, endocardită, sindrom carcinoid, boala Ebstein și alte anomalii congenitale ale valvelor AV — Corect: Lista organică include Ebstein și carcinoidul.\n\nSemne: undă jugulară „cv” mare, ficat pulsatil sistolic, suflu holosistolic inspirator la marginea sternală stângă inferioară — Corect: Unda cv, ficatul pulsatil și suflul inspirator sunt din figură/text.\n\nForma funcțională nu dispare după tratamentul medical al cauzei de dilatare a VD — Incorect: Forma funcțională dispare de obicei după tratamentul medical.\n\nProtezarea este primul gest la orice regurgitare funcțională ușoară — Incorect: Protezarea este rară; funcționalul se tratează medical.\n\nSuflul se ameliorează în inspir, identic suflurilor stângi — Incorect: Suflul se accentuează în inspir, nu se ameliorează.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1101, Regurgitarea tricuspidă — Ebstein și undă cv (pagini PDF: 262).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1101
   ],
   "pdfPages": [
    262
   ],
   "section": "Regurgitarea tricuspidă — Ebstein și undă cv"
  },
  "learningObjective": "Potrivirea etiologiilor organice (Ebstein, carcinoid) cu unda cv și ficatul pulsatil.",
  "optionRationales": [
   "Lista organică include Ebstein și carcinoidul.",
   "Unda cv, ficatul pulsatil și suflul inspirator sunt din figură/text.",
   "Forma funcțională dispare de obicei după tratamentul medical.",
   "Protezarea este rară; funcționalul se tratează medical.",
   "Suflul se accentuează în inspir, nu se ameliorează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă forma funcțională — care cedează medical — în indicație de proteză de primă intenție."
  },
  "textbookExpressions": [
   "Ebstein",
   "consumatorii de droguri"
  ]
 },
 {
  "id": "cardiologie-adv-272",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Stenoza pulmonară congenitală se poate asocia cu:",
  "options": [
   "Tetralogia Fallot, sindromul Noonan sau rubeola congenitală",
   "Localizare valvulară, subvalvulară sau supravalvulară",
   "Obstrucție la ejecția VD, cu hipertrofie de VD și dilatare atrială dreaptă",
   "Doar boala Barlow a femeii tinere, fără Fallot/Noonan",
   "Localizare doar infundibulară, valva fiind constant normală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tetralogia Fallot, sindromul Noonan sau rubeola congenitală — Corect: Cele trei asocieri sunt enumerate.\n\nLocalizare valvulară, subvalvulară sau supravalvulară — Corect: Cele trei etaje (valvular/sub/supra) sunt explicite.\n\nObstrucție la ejecția VD, cu hipertrofie de VD și dilatare atrială dreaptă — Corect: HVD și dilatarea AD sunt consecințele obstrucției.\n\nDoar boala Barlow a femeii tinere, fără Fallot/Noonan — Incorect: Barlow ține de mitrală.\n\nLocalizare doar infundibulară, valva fiind constant normală — Incorect: Obstrucția poate fi valvulară, nu doar infundibulară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1102, 1101, Stenoza pulmonară — Fallot, Noonan, rubeolă (pagini PDF: 263, 262).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1102,
    1101
   ],
   "pdfPages": [
    263,
    262
   ],
   "section": "Stenoza pulmonară — Fallot, Noonan, rubeolă"
  },
  "learningObjective": "Recunoașterea asocierilor congenitale (Fallot, Noonan, rubeolă) și a celor trei nivele de obstrucție.",
  "optionRationales": [
   "Cele trei asocieri sunt enumerate.",
   "Cele trei etaje (valvular/sub/supra) sunt explicite.",
   "HVD și dilatarea AD sunt consecințele obstrucției.",
   "Barlow ține de mitrală.",
   "Obstrucția poate fi valvulară, nu doar infundibulară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută stenoza pulmonară pe Barlow și neagă Fallot/Noonan, asocierile congenitale citate."
  },
  "textbookExpressions": [
   "Noonan",
   "rubeola congenitală"
  ]
 },
 {
  "id": "cardiologie-adv-273",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Criteriile Duke majore microbiologice, dincolo de S. aureus și viridans, includ:",
  "options": [
   "Abiotrophia species și Granulicatella species printre microorganismele tipice, în absența unui focar primar",
   "Un test serologic de imunofluorescență pozitiv pentru febra Q, cu anticorpi IgG de fază 1 în titru >1:800",
   "Hemoculturi persistente: același germen la interval de minimum 12 ore, sau 3 din ≥4 seturi",
   "Un singur set recoltat pe cateterul central, fără interval de 12 ore",
   "Febra Q cu IgG de fază 1 în titru 1:20, ca echivalent al hemoculturilor persistente"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Abiotrophia species și Granulicatella species printre microorganismele tipice, în absența unui focar primar — Corect: Abiotrophia și Granulicatella figurează lângă viridans, bovis, HACEK, S. aureus comunitar și enterococ.\n\nUn test serologic de imunofluorescență pozitiv pentru febra Q, cu anticorpi IgG de fază 1 în titru >1:800 — Corect: Titrul >1:800 de IgG fază 1 pentru febra Q este criteriu major.\n\nHemoculturi persistente: același germen la interval de minimum 12 ore, sau 3 din ≥4 seturi — Corect: Persistența la ≥12 ore sau 3/≥4 seturi este explicită.\n\nUn singur set recoltat pe cateterul central, fără interval de 12 ore — Incorect: Un set de pe cateter nu îndeplinește criteriul major.\n\nFebra Q cu IgG de fază 1 în titru 1:20, ca echivalent al hemoculturilor persistente — Incorect: Titrul citat este >1:800, nu 1:20.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1104, Endocardita — Duke: Abiotrophia, febra Q >1:800 (pagini PDF: 265).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1104
   ],
   "pdfPages": [
    265
   ],
   "section": "Endocardita — Duke: Abiotrophia, febra Q >1:800"
  },
  "learningObjective": "Completarea criteriului major cu Abiotrophia/Granulicatella și titrul IgG de fază 1 >1:800 pentru Coxiella.",
  "optionRationales": [
   "Abiotrophia și Granulicatella figurează lângă viridans, bovis, HACEK, S. aureus comunitar și enterococ.",
   "Titrul >1:800 de IgG fază 1 pentru febra Q este criteriu major.",
   "Persistența la ≥12 ore sau 3/≥4 seturi este explicită.",
   "Un set de pe cateter nu îndeplinește criteriul major.",
   "Titrul citat este >1:800, nu 1:20."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce bacteriologia Duke la un set de cateter și comprimă titrul Q de la >1:800 la 1:20."
  },
  "textbookExpressions": [
   "Abiotrophia",
   ">1:800"
  ]
 },
 {
  "id": "cardiologie-adv-274",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Criteriile de suspiciune clinică înaltă de endocardită includ:",
  "options": [
   "Leziune valvulară nouă sau suflu de regurgitare nou; evenimente embolice de cauză necunoscută; sepsis fără focar",
   "Hematurie/glomerulonefrită/infarct renal; febră plus material protetic, CDIV, aritmii/tulburări de conducere noi sau prima IC",
   "Leziuni Osler/Janeway/Roth sau abcese periferice (renale, splenice, spinale) fără focar",
   "Febra izolată, fără niciunul dintre elementele de mai sus, ca suspiciune înaltă",
   "O singură hemocultură negativă exclude diagnosticul și face eco-ul superfluu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Leziune valvulară nouă sau suflu de regurgitare nou; evenimente embolice de cauză necunoscută; sepsis fără focar — Corect: Suflul nou, embolia și sepsisul fără focar sunt primele criterii.\n\nHematurie/glomerulonefrită/infarct renal; febră plus material protetic, CDIV, aritmii/tulburări de conducere noi sau prima IC — Corect: Febră plus proteză/CDIV/conducere nouă/IC inaugurală sunt listate.\n\nLeziuni Osler/Janeway/Roth sau abcese periferice (renale, splenice, spinale) fără focar — Corect: Osler, Janeway, Roth și abcesele fără focar completează setul.\n\nFebra izolată, fără niciunul dintre elementele de mai sus, ca suspiciune înaltă — Incorect: Febra izolată definește suspiciunea joasă.\n\nO singură hemocultură negativă exclude diagnosticul și face eco-ul superfluu — Incorect: Eco negativă nu exclude; o cultură negativă nu închide cazul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1105, Endocardita — Suspiciune înaltă versus joasă (pagini PDF: 266).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1105
   ],
   "pdfPages": [
    266
   ],
   "section": "Endocardita — Suspiciune înaltă versus joasă"
  },
  "learningObjective": "Listarea semnalelor de alarmă (suflu nou, embolie, proteză, Roth/Osler) versus febra izolată (suspiciune joasă).",
  "optionRationales": [
   "Suflul nou, embolia și sepsisul fără focar sunt primele criterii.",
   "Febră plus proteză/CDIV/conducere nouă/IC inaugurală sunt listate.",
   "Osler, Janeway, Roth și abcesele fără focar completează setul.",
   "Febra izolată definește suspiciunea joasă.",
   "Eco negativă nu exclude; o cultură negativă nu închide cazul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Promotează febra izolată — tocmai suspiciunea joasă — ca alarmă înaltă și tratează o cultură negativă ca excludere."
  },
  "textbookExpressions": [
   "Noduli Osler",
   "Leziuni Janeway"
  ]
 },
 {
  "id": "cardiologie-adv-275",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Explorarea și durata antibioterapiei în endocardită:",
  "options": [
   "Ecocardiografia nu este un test de screening la probabilitate pre-test redusă (doar febră sau o singură hemocultură pozitivă)",
   "O eco negativă nu exclude diagnosticul; ETE și PET-CT pot ajuta, mai ales pe proteză",
   "Tratamentul durează 4-6 săptămâni; combinațiile pot fi sinergice și scad rezistența",
   "Un singur set de hemoculturi după prima doză de antibiotic înlocuiește protocolul",
   "Eco-ul negativ la febră izolată confirmă endocardita și impune chirurgie imediată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ecocardiografia nu este un test de screening la probabilitate pre-test redusă (doar febră sau o singură hemocultură pozitivă) — Corect: Textul interzice screening-ul la probabilitate joasă.\n\nO eco negativă nu exclude diagnosticul; ETE și PET-CT pot ajuta, mai ales pe proteză — Corect: Eco negativă nu exclude; ETE/PET-CT pe proteză.\n\nTratamentul durează 4-6 săptămâni; combinațiile pot fi sinergice și scad rezistența — Corect: 4-6 săptămâni și sinergia combinațiilor sunt explicite.\n\nUn singur set de hemoculturi după prima doză de antibiotic înlocuiește protocolul — Incorect: Hemoculturile se recoltează înaintea empiricului.\n\nEco-ul negativ la febră izolată confirmă endocardita și impune chirurgie imediată — Incorect: La febră izolată eco-ul nu confirmă boala.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1105, 1106, Endocardita — Eco nu e screening; 4-6 săptămâni (pagini PDF: 266, 267).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1105,
    1106
   ],
   "pdfPages": [
    266,
    267
   ],
   "section": "Endocardita — Eco nu e screening; 4-6 săptămâni"
  },
  "learningObjective": "Restrângerea eco-ului ca screening, rolul PET-CT pe proteză și fereastra 4-6 săptămâni.",
  "optionRationales": [
   "Textul interzice screening-ul la probabilitate joasă.",
   "Eco negativă nu exclude; ETE/PET-CT pe proteză.",
   "4-6 săptămâni și sinergia combinațiilor sunt explicite.",
   "Hemoculturile se recoltează înaintea empiricului.",
   "La febră izolată eco-ul nu confirmă boala."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă eco-ul negativ al febrei izolate în confirmare chirurgicală, inversul regulii de screening."
  },
  "textbookExpressions": [
   "4-6 săptămâni",
   "PET-CT"
  ]
 },
 {
  "id": "cardiologie-adv-276",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Din Cadranul 30.48, schemele empirice/țintite includ:",
  "options": [
   "Fără suspiciune de stafilococ: penicilină 1,2 g la 4 ore plus gentamicină 80 mg la 12 ore",
   "Suspiciune stafilococică (CDIV, dispozitive, chirurgie recentă): vancomicină 1 g la 12 ore plus gentamicină 80-120 mg la 8 ore",
   "Enterococ fără rezistență înaltă la gentamicină: ampicilină/amoxicilină 2 g la 4 ore plus gentamicină 80 mg la 12 ore",
   "Penicilină 1,2 g ca monoterapie orală, fără gentamicină, în suspiciunea stafilococică",
   "Vancomicina se evită la CDIV, fiind rezervată streptococului oral"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Fără suspiciune de stafilococ: penicilină 1,2 g la 4 ore plus gentamicină 80 mg la 12 ore — Corect: Schema non-stafilococică este din tabel.\n\nSuspiciune stafilococică (CDIV, dispozitive, chirurgie recentă): vancomicină 1 g la 12 ore plus gentamicină 80-120 mg la 8 ore — Corect: Vancomicina plus gentamicina q8h este linia de suspiciune stafilococică.\n\nEnterococ fără rezistență înaltă la gentamicină: ampicilină/amoxicilină 2 g la 4 ore plus gentamicină 80 mg la 12 ore — Corect: Ampicilina 2 g q4h plus gentamicina este schema enterococică.\n\nPenicilină 1,2 g ca monoterapie orală, fără gentamicină, în suspiciunea stafilococică — Incorect: Stafilococul suspectat nu se tratează cu penicilină orală izolată.\n\nVancomicina se evită la CDIV, fiind rezervată streptococului oral — Incorect: Vancomicina este tocmai linia CDIV/dispozitive.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1106, Endocardita — Cadranul 30.48 (doze) (pagini PDF: 267).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1106
   ],
   "pdfPages": [
    267
   ],
   "section": "Endocardita — Cadranul 30.48 (doze)"
  },
  "learningObjective": "Potrivirea penicilină 1,2 g q4h versus vancomicină 1 g q12h la suspiciunea stafilococică.",
  "optionRationales": [
   "Schema non-stafilococică este din tabel.",
   "Vancomicina plus gentamicina q8h este linia de suspiciune stafilococică.",
   "Ampicilina 2 g q4h plus gentamicina este schema enterococică.",
   "Stafilococul suspectat nu se tratează cu penicilină orală izolată.",
   "Vancomicina este tocmai linia CDIV/dispozitive."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează schemele: pune penicilina orală pe stafilococ și scoate vancomicina de la CDIV."
  },
  "textbookExpressions": [
   "1,2 g",
   "Vancomicină 1 g"
  ]
 },
 {
  "id": "cardiologie-adv-277",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Alergia la penicilină în endocardită:",
  "options": [
   "Penicilinele sunt fundamentale; alergia poate pune probleme serioase de alegere a schemei",
   "Trebuie investigat caracterul alergiei, ca pacientul să nu fie privat inutil de antibioticul adecvat",
   "Șocul anafilactic are altă pondere decât un simplu disconfort gastro-intestinal",
   "Un disconfort digestiv echivalează anafilaxia și interzice orice beta-lactamină fără evaluare",
   "Gentamicina și vancomicina nu se monitorizează, toxicitatea fiind neglijabilă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Penicilinele sunt fundamentale; alergia poate pune probleme serioase de alegere a schemei — Corect: Penicilinele rămân fundamentale.\n\nTrebuie investigat caracterul alergiei, ca pacientul să nu fie privat inutil de antibioticul adecvat — Corect: Investigarea caracterului alergiei este explicită.\n\nȘocul anafilactic are altă pondere decât un simplu disconfort gastro-intestinal — Corect: Anafilaxia versus disconfortul GI au ponderi diferite.\n\nUn disconfort digestiv echivalează anafilaxia și interzice orice beta-lactamină fără evaluare — Incorect: Disconfortul digestiv nu echivalează anafilaxia.\n\nGentamicina și vancomicina nu se monitorizează, toxicitatea fiind neglijabilă — Incorect: Nivelurile de gentamicină și vancomicină trebuie monitorizate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1106, Endocardita — Alergia la penicilină (pagini PDF: 267).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1106
   ],
   "pdfPages": [
    267
   ],
   "section": "Endocardita — Alergia la penicilină"
  },
  "learningObjective": "Diferențierea anafilaxiei de disconfortul digestiv înainte de a priva pacientul de penicilină.",
  "optionRationales": [
   "Penicilinele rămân fundamentale.",
   "Investigarea caracterului alergiei este explicită.",
   "Anafilaxia versus disconfortul GI au ponderi diferite.",
   "Disconfortul digestiv nu echivalează anafilaxia.",
   "Nivelurile de gentamicină și vancomicină trebuie monitorizate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Echivalează disconfortul digestiv cu anafilaxia — tocmai distincția pe care textul o cere."
  },
  "textbookExpressions": [
   "Şocul anafilactic",
   "penicilină"
  ]
 },
 {
  "id": "cardiologie-adv-278",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "IRM-ul în miocardita acută evidențiază:",
  "options": [
   "Edem miocardic pe secvențe ponderate T2",
   "Captare neuniformă de gadoliniu, în stratul mediu și epicardic",
   "Ecocardiografie, cu funcție biventriculară normală sau redusă și anomalii de cinetică regională",
   "Captare subendocardică transmură, identic infarctului în teritoriul unei coronare",
   "Serologia virală ca substitut al IRM-ului de confirmare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Edem miocardic pe secvențe ponderate T2 — Corect: Edemul T2 este explicit.\n\nCaptare neuniformă de gadoliniu, în stratul mediu și epicardic — Corect: Captarea neuniformă medio-epicardică este descrisă (Fig. 30.106).\n\nEcocardiografie, cu funcție biventriculară normală sau redusă și anomalii de cinetică regională — Corect: Eco-ul este menționat, cu funcție normală sau redusă.\n\nCaptare subendocardică transmură, identic infarctului în teritoriul unei coronare — Incorect: Pattern-ul de infarct este subendocardic/transmural coronarian, nu medio-epicardic.\n\nSerologia virală ca substitut al IRM-ului de confirmare — Incorect: Serologia virală de obicei nu este utilă; IRM confirmă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1119, Miocardită — T2, gadoliniu medio-epicardic (pagini PDF: 268).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1119
   ],
   "pdfPages": [
    268
   ],
   "section": "Miocardită — T2, gadoliniu medio-epicardic"
  },
  "learningObjective": "Contrastul captării medio-epicardice neuniforme cu pattern-ul subendocardic de infarct.",
  "optionRationales": [
   "Edemul T2 este explicit.",
   "Captarea neuniformă medio-epicardică este descrisă (Fig. 30.106).",
   "Eco-ul este menționat, cu funcție normală sau redusă.",
   "Pattern-ul de infarct este subendocardic/transmural coronarian, nu medio-epicardic.",
   "Serologia virală de obicei nu este utilă; IRM confirmă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie miocarditei captarea subendocardică de infarct, inversând localizarea gadoliniului."
  },
  "textbookExpressions": [
   "gadoliniu",
   "ponderate T2"
  ]
 },
 {
  "id": "cardiologie-adv-279",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Penetranța CMH în funcție de genă și vârstă:",
  "options": [
   "Hipertrofia poate fi absentă înainte de adolescență, ceea ce îngreunează diagnosticul la copii",
   "CMH prin mutația proteinei de legare a miozinei poate să nu se manifeste până la decada a șasea sau mai târziu",
   "Rata cea mai înaltă de moarte subită (până la 6% pe an) este la adolescenți sau adulți tineri",
   "Hipertrofia este constant vizibilă de la naștere, indiferent de genă",
   "Rata de moarte subită la adolescenți este sub 0,1% pe an, identică populației generale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hipertrofia poate fi absentă înainte de adolescență, ceea ce îngreunează diagnosticul la copii — Corect: Absența hipertrofiei înainte de adolescență este explicită.\n\nCMH prin mutația proteinei de legare a miozinei poate să nu se manifeste până la decada a șasea sau mai târziu — Corect: MYBPC poate debuta în decada a șasea.\n\nRata cea mai înaltă de moarte subită (până la 6% pe an) este la adolescenți sau adulți tineri — Corect: Până la 6% pe an la adolescenți/tineri.\n\nHipertrofia este constant vizibilă de la naștere, indiferent de genă — Incorect: Hipertrofia poate lipsi la copii.\n\nRata de moarte subită la adolescenți este sub 0,1% pe an, identică populației generale — Incorect: 6% pe an, nu 0,1%, este vârful citat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1120, CMH — Decada a șasea, adolescență, 6%/an (pagini PDF: 269).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1120
   ],
   "pdfPages": [
    269
   ],
   "section": "CMH — Decada a șasea, adolescență, 6%/an"
  },
  "learningObjective": "Potrivirea ferestrei pre-adolescență (hipertrofie absentă), a MYBPC până după 50 de ani și a vârfului de 6%/an.",
  "optionRationales": [
   "Absența hipertrofiei înainte de adolescență este explicită.",
   "MYBPC poate debuta în decada a șasea.",
   "Până la 6% pe an la adolescenți/tineri.",
   "Hipertrofia poate lipsi la copii.",
   "6% pe an, nu 0,1%, este vârful citat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Comprimă moartea subită a adolescentului de la 6%/an la 0,1% și cere hipertrofie neonatală constantă."
  },
  "textbookExpressions": [
   "6% pe an",
   "decada a şasea"
  ]
 },
 {
  "id": "cardiologie-adv-280",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Semnele CMH și impactul fibrilației atriale:",
  "options": [
   "Pulsație apicală dublă (contracție atrială puternică care produce S4)",
   "Puls carotidian sacadat, prin ejecție rapidă și obstrucție bruscă telesistolică a tractului",
   "Dacă apare FA, deteriorare rapidă prin pierderea contracției atriale și tahicardie, cu creșterea presiunii în AS și edem pulmonar acut",
   "Unde Q patologice, mai ales în derivațiile infero-laterale",
   "Apex hiperdinamic deplasat, identic regurgitării aortice, fără puls sacadat"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Pulsație apicală dublă (contracție atrială puternică care produce S4) — Corect: Apexul dublu și S4 sunt explicite.\n\nPuls carotidian sacadat, prin ejecție rapidă și obstrucție bruscă telesistolică a tractului — Corect: Pulsul sacadat este descris.\n\nDacă apare FA, deteriorare rapidă prin pierderea contracției atriale și tahicardie, cu creșterea presiunii în AS și edem pulmonar acut — Corect: FA → EPA prin pierderea contracției atriale este din text.\n\nUnde Q patologice, mai ales în derivațiile infero-laterale — Corect: Q infero-laterale sunt listate.\n\nApex hiperdinamic deplasat, identic regurgitării aortice, fără puls sacadat — Incorect: Apexul dublu și pulsul sacadat, nu apexul hiperdinamic al RA, definesc palparea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1120, CMH — Apex dublu, puls sacadat, FA cu EPA (pagini PDF: 269).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1120
   ],
   "pdfPages": [
    269
   ],
   "section": "CMH — Apex dublu, puls sacadat, FA cu EPA"
  },
  "learningObjective": "Reunirea apexului dublu, a pulsului sacadat, a Q infero-laterale și a EPA la debutul FA.",
  "optionRationales": [
   "Apexul dublu și S4 sunt explicite.",
   "Pulsul sacadat este descris.",
   "FA → EPA prin pierderea contracției atriale este din text.",
   "Q infero-laterale sunt listate.",
   "Apexul dublu și pulsul sacadat, nu apexul hiperdinamic al RA, definesc palparea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie CMH apexul hiperdinamic al regurgitării aortice și neagă EPA-ul de la debutul FA."
  },
  "textbookExpressions": [
   "Pulsaţie apicală dublă",
   "sacadat"
  ]
 },
 {
  "id": "cardiologie-adv-281",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Ecocardiografia și chirurgia septului în CMH:",
  "options": [
   "Clasic: HVS asimetrică (sept > perete posterior), SAM mitral și VS care se contractă puternic",
   "Poate exista orice tipar, inclusiv hipertrofie concentrică și apicală",
   "Uneori este indicată rezecția chirurgicală a miocardului septal",
   "Hipertrofia este constant simetrică, SAM fiind incompatibil cu diagnosticul",
   "Rezecția septală este interzisă, ablația cu alcool fiind lipsită de alternative chirurgicale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Clasic: HVS asimetrică (sept > perete posterior), SAM mitral și VS care se contractă puternic — Corect: Triada clasică eco este explicită.\n\nPoate exista orice tipar, inclusiv hipertrofie concentrică și apicală — Corect: Concentricul și apicalul sunt acceptate.\n\nUneori este indicată rezecția chirurgicală a miocardului septal — Corect: Rezecția chirurgicală este menționată.\n\nHipertrofia este constant simetrică, SAM fiind incompatibil cu diagnosticul — Incorect: SAM face parte din mecanismul obstrucției, nu o exclude.\n\nRezecția septală este interzisă, ablația cu alcool fiind lipsită de alternative chirurgicale — Incorect: Chirurgia septală este o opțiune, nu o interdicție.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1120, 1121, CMH — SAM, hipertrofie apicală, rezecție septală (pagini PDF: 269, 270).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1120,
    1121
   ],
   "pdfPages": [
    269,
    270
   ],
   "section": "CMH — SAM, hipertrofie apicală, rezecție septală"
  },
  "learningObjective": "Recunoașterea tiparelor (asimetric, concentric, apical) și a rezecției septale ca alternativă a alcoolului.",
  "optionRationales": [
   "Triada clasică eco este explicită.",
   "Concentricul și apicalul sunt acceptate.",
   "Rezecția chirurgicală este menționată.",
   "SAM face parte din mecanismul obstrucției, nu o exclude.",
   "Chirurgia septală este o opțiune, nu o interdicție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Interzice rezecția septală — opțiunea citată — și cere hipertrofie simetrică fără SAM."
  },
  "textbookExpressions": [
   "mişcare anterioară",
   "rezecţia chirurgicală"
  ]
 },
 {
  "id": "cardiologie-adv-282",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Tabloul și limita imagisticii în cardiomiopatia aritmogenă:",
  "options": [
   "Cei mai mulți pacienți sunt asimptomatici; ocazional IC dreaptă în stadiile tardive",
   "Aspectul morfologic al VD este frecvent normal, în ciuda unor aritmii semnificative",
   "Testarea genetică ar putea deveni gold standard; transplantul este ocazional indicat pentru aritmie netratabilă sau IC",
   "Eco-ul este suficient în toate stadiile, IRM-ul neaducând informații despre infiltrația fibro-grăsoasă",
   "Transplantul este interzis, aritmiile fiind constant controlate de beta-blocant"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cei mai mulți pacienți sunt asimptomatici; ocazional IC dreaptă în stadiile tardive — Corect: Asimptomaticii și IC dreaptă tardivă sunt descrise.\n\nAspectul morfologic al VD este frecvent normal, în ciuda unor aritmii semnificative — Corect: VD frecvent normal la screening, totuși aritmii semnificative.\n\nTestarea genetică ar putea deveni gold standard; transplantul este ocazional indicat pentru aritmie netratabilă sau IC — Corect: Genetica ca viitor gold standard și transplantul ocazional sunt din text.\n\nEco-ul este suficient în toate stadiile, IRM-ul neaducând informații despre infiltrația fibro-grăsoasă — Incorect: IRM evaluează VD mai acurat și poate arăta infiltrație fibro-grăsoasă.\n\nTransplantul este interzis, aritmiile fiind constant controlate de beta-blocant — Incorect: Transplantul este menționat pentru aritmie netratabilă sau IC.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1121, 1122, CMA — VD morfologic normal, transplant (pagini PDF: 270, 271).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1121,
    1122
   ],
   "pdfPages": [
    270,
    271
   ],
   "section": "CMA — VD morfologic normal, transplant"
  },
  "learningObjective": "Reținerea discordanței (aritmii severe, VD eco-normal) și a nișei de transplant.",
  "optionRationales": [
   "Asimptomaticii și IC dreaptă tardivă sunt descrise.",
   "VD frecvent normal la screening, totuși aritmii semnificative.",
   "Genetica ca viitor gold standard și transplantul ocazional sunt din text.",
   "IRM evaluează VD mai acurat și poate arăta infiltrație fibro-grăsoasă.",
   "Transplantul este menționat pentru aritmie netratabilă sau IC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează transplantul — nișa aritmiei refractare — și supraestimează eco-ul față de IRM."
  },
  "textbookExpressions": [
   "asimptomatici",
   "transplantul cardiac"
  ]
 },
 {
  "id": "cardiologie-adv-283",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "CMD familială autosomal dominantă implică, printre altele, gene pentru:",
  "options": [
   "Actină, desmină, troponină T, lanțul greu al β-miozinei, sarcoglicani, vinculină și lamin a/c",
   "Distrofină în forma X-linkată",
   "Asocieri cu miopatie scheletică sau boală a sistemului de conducere",
   "Distrofina ca genă a formei AD, lamin a/c ca formă X-linkată",
   "Grosime parietală marcat crescută, identic CMH"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Actină, desmină, troponină T, lanțul greu al β-miozinei, sarcoglicani, vinculină și lamin a/c — Corect: Lista AD este din Fig. 30.114/text.\n\nDistrofină în forma X-linkată — Corect: Distrofina este forma X-linkată.\n\nAsocieri cu miopatie scheletică sau boală a sistemului de conducere — Corect: Miopatia scheletică și boala de conducere diferențiază unele mutații.\n\nDistrofina ca genă a formei AD, lamin a/c ca formă X-linkată — Incorect: Atribuirea genelor este inversată.\n\nGrosime parietală marcat crescută, identic CMH — Incorect: Pereții sunt prezervați ca grosime, nu hipertrofiați.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1122, CMD — Actină, desmină, sarcoglicani (pagini PDF: 271).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1122
   ],
   "pdfPages": [
    271
   ],
   "section": "CMD — Actină, desmină, sarcoglicani"
  },
  "learningObjective": "Completarea listei de proteine citoscheletale AD și a asocierii cu miopatia/conducerea.",
  "optionRationales": [
   "Lista AD este din Fig. 30.114/text.",
   "Distrofina este forma X-linkată.",
   "Miopatia scheletică și boala de conducere diferențiază unele mutații.",
   "Atribuirea genelor este inversată.",
   "Pereții sunt prezervați ca grosime, nu hipertrofiați."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează distrofina XL cu lamin a/c AD și pune hipertrofia CMH pe CMD."
  },
  "textbookExpressions": [
   "Desmină",
   "sarcoglican"
  ]
 },
 {
  "id": "cardiologie-adv-284",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Investigațiile în cardiomiopatia dilatativă includ:",
  "options": [
   "Eco: aspect globulos, camere dilatate, funcție globală redusă",
   "IRM: poate arăta fibroză, inclusiv hipercaptare septală medio-miocardică",
   "Angiografie coronariană sau angio-CT la toți cei la risc (în general >40 de ani, sau mai tineri cu factori de risc/simptome)",
   "Biopsie de rutină la toți pacienții, ca în amiloidoză",
   "ECG-ul este constant normal, fără aritmii sau tulburări de conducere"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Eco: aspect globulos, camere dilatate, funcție globală redusă — Corect: Aspectul globulos este din Fig. 30.115.\n\nIRM: poate arăta fibroză, inclusiv hipercaptare septală medio-miocardică — Corect: Hipercaptarea septală medio-miocardică este descrisă.\n\nAngiografie coronariană sau angio-CT la toți cei la risc (în general >40 de ani, sau mai tineri cu factori de risc/simptome) — Corect: Pragul >40 de ani (sau mai tineri cu risc) este explicit.\n\nBiopsie de rutină la toți pacienții, ca în amiloidoză — Incorect: Biopsia nu este de rutină, spre deosebire de amiloid.\n\nECG-ul este constant normal, fără aritmii sau tulburări de conducere — Incorect: ECG-ul poate arăta ST-T difuze, tahicardie, conducere anormală, FA, ESV, TV.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1123, CMD — Cord globulos, fibroză medio-miocardică, >40 ani (pagini PDF: 272).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1123
   ],
   "pdfPages": [
    272
   ],
   "section": "CMD — Cord globulos, fibroză medio-miocardică, >40 ani"
  },
  "learningObjective": "Ierarhia eco globulos → IRM medio-miocardic → excluderea bolii coronariene peste 40 de ani, fără biopsie de rutină.",
  "optionRationales": [
   "Aspectul globulos este din Fig. 30.115.",
   "Hipercaptarea septală medio-miocardică este descrisă.",
   "Pragul >40 de ani (sau mai tineri cu risc) este explicit.",
   "Biopsia nu este de rutină, spre deosebire de amiloid.",
   "ECG-ul poate arăta ST-T difuze, tahicardie, conducere anormală, FA, ESV, TV."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Promotează biopsia de rutină — explicit nerezervată CMD — și declară ECG-ul normal."
  },
  "textbookExpressions": [
   "globulos",
   "medio-miocardică"
  ]
 },
 {
  "id": "cardiologie-adv-285",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Cardiomiopatia restrictivă primară se asociază, printre altele, cu:",
  "options": [
   "Amiloidoză (cea mai frecventă), sarcoidoză, endocardită Loeffler și fibroză endomiocardică",
   "Eozinofilie în Loeffler și fibroza endomiocardică, cu fibroză mio- și endocardică",
   "Formă idiopatică posibil familială",
   "NCVS apicală spongiformă ca echivalent restrictiv, fără dilatare biatrială",
   "PVJ plat, fără Friedreich sau Kussmaul"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Amiloidoză (cea mai frecventă), sarcoidoză, endocardită Loeffler și fibroză endomiocardică — Corect: Cele patru asocieri, amiloidul fiind cea mai frecventă, sunt listate.\n\nEozinofilie în Loeffler și fibroza endomiocardică, cu fibroză mio- și endocardică — Corect: Eozinofilia celor două fibroze este explicită.\n\nFormă idiopatică posibil familială — Corect: Idiopatica poate fi familială.\n\nNCVS apicală spongiformă ca echivalent restrictiv, fără dilatare biatrială — Incorect: NCVS este o altă entitate, apicală spongiformă.\n\nPVJ plat, fără Friedreich sau Kussmaul — Incorect: PVJ accentuat, Friedreich și Kussmaul sunt descrise.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1123, Restrictivă — Loeffler, eozinofilie, familială (pagini PDF: 272).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1123
   ],
   "pdfPages": [
    272
   ],
   "section": "Restrictivă — Loeffler, eozinofilie, familială"
  },
  "learningObjective": "Potrivirea Loeffler/fibrozei endomiocardice cu eozinofilia, distincte de noncompactarea apicală.",
  "optionRationales": [
   "Cele patru asocieri, amiloidul fiind cea mai frecventă, sunt listate.",
   "Eozinofilia celor două fibroze este explicită.",
   "Idiopatica poate fi familială.",
   "NCVS este o altă entitate, apicală spongiformă.",
   "PVJ accentuat, Friedreich și Kussmaul sunt descrise."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Suprapune restrictiva peste noncompactarea apicală și anulează semnele venoase clasice."
  },
  "textbookExpressions": [
   "Loeffler",
   "eozinofilie"
  ]
 },
 {
  "id": "cardiologie-adv-286",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Etiologii mai puțin uzuale de pericardită (Cadranul 30.53) includ:",
  "options": [
   "Medicamente: procainamidă, hidralazină, izoniazidă, doxorubicină, ciclofosfamidă",
   "Bacterii: stafilococ, streptococ, pneumococ, meningococ, H. influenzae, micoplasmă, borelioză, chlamidii",
   "Post-iradiere; post-pericardiotomie; familială/idiopatică",
   "Doar virusurile Coxsackie, fără cauze medicamentoase",
   "Hidralazina ca protecție față de pericardită, fără risc autoimun"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Medicamente: procainamidă, hidralazină, izoniazidă, doxorubicină, ciclofosfamidă — Corect: Cele cinci medicamente sunt în cadran.\n\nBacterii: stafilococ, streptococ, pneumococ, meningococ, H. influenzae, micoplasmă, borelioză, chlamidii — Corect: Spectrul bacterian este enumerat.\n\nPost-iradiere; post-pericardiotomie; familială/idiopatică — Corect: Iradierea, post-pericardiotomia și forma familială sunt listate.\n\nDoar virusurile Coxsackie, fără cauze medicamentoase — Incorect: Cadranul include și medicamente, bacterii, uremie, mixedem.\n\nHidralazina ca protecție față de pericardită, fără risc autoimun — Incorect: Hidralazina este o cauză autoimună indusă, nu protecție.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1125, Pericardită — Procainamidă, hidralazină, bacterii (pagini PDF: 274).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1125
   ],
   "pdfPages": [
    274
   ],
   "section": "Pericardită — Procainamidă, hidralazină, bacterii"
  },
  "learningObjective": "Listarea medicamentelor lupogene/citotoxice și a spectrului bacterian din cadran.",
  "optionRationales": [
   "Cele cinci medicamente sunt în cadran.",
   "Spectrul bacterian este enumerat.",
   "Iradierea, post-pericardiotomia și forma familială sunt listate.",
   "Cadranul include și medicamente, bacterii, uremie, mixedem.",
   "Hidralazina este o cauză autoimună indusă, nu protecție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă hidralazina — cauză clasică de pericardită indusă — în factor protector."
  },
  "textbookExpressions": [
   "procainamidă",
   "hidralazină"
  ]
 },
 {
  "id": "cardiologie-adv-287",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Pericardita malignă:",
  "options": [
   "Cele mai frecvente cauze: carcinom bronșic, carcinom mamar și limfom Hodgkin",
   "Leucemia și melanomul se asociază de asemenea",
   "Revărsatul mare este tipic, adesea hemoragic, prin obstrucția drenajului limfatic cardiac",
   "Radioterapia toracică poate da revărsat seros sau hemoragic și fibroză pericardică",
   "Melanomul este incompatibil cu pericardita, drenajul limfatic rămânând intact"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Cele mai frecvente cauze: carcinom bronșic, carcinom mamar și limfom Hodgkin — Corect: Cele trei cauze cele mai frecvente sunt explicite.\n\nLeucemia și melanomul se asociază de asemenea — Corect: Leucemia și melanomul sunt menționate.\n\nRevărsatul mare este tipic, adesea hemoragic, prin obstrucția drenajului limfatic cardiac — Corect: Revărsatul mare hemoragic prin obstrucție limfatică este descris.\n\nRadioterapia toracică poate da revărsat seros sau hemoragic și fibroză pericardică — Corect: Iradierea produce revărsat și fibroză.\n\nMelanomul este incompatibil cu pericardita, drenajul limfatic rămânând intact — Incorect: Melanomul este asociat, nu incompatibil.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1126, Pericardită malignă — Hodgkin, revărsat hemoragic (pagini PDF: 275).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1126
   ],
   "pdfPages": [
    275
   ],
   "section": "Pericardită malignă — Hodgkin, revărsat hemoragic"
  },
  "learningObjective": "Potrivirea triadului sân/pulmon/Hodgkin cu caracterul hemoragic prin obstrucție limfatică.",
  "optionRationales": [
   "Cele trei cauze cele mai frecvente sunt explicite.",
   "Leucemia și melanomul sunt menționate.",
   "Revărsatul mare hemoragic prin obstrucție limfatică este descris.",
   "Iradierea produce revărsat și fibroză.",
   "Melanomul este asociat, nu incompatibil."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Scoate melanomul din lista de cauze — deși textul îl leagă explicit de pericardită."
  },
  "textbookExpressions": [
   "limfomul Hodgkin",
   "hemoragic"
  ]
 },
 {
  "id": "cardiologie-adv-288",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Pericardita incesantă/cronică, dincolo de definiții:",
  "options": [
   "Tratamentul de primă linie: AINS sau aspirină plus colchicină, până la 6 luni",
   "În rezistență, corticoterapia orală poate fi eficientă; la unii, pericardectomia",
   "CT sau IRM pot arăta îngroșare (>4 mm) sau inflamație pericardică",
   "Colchicina se oprește la 48 de ore, pericardectomia fiind primul gest",
   "Îngroșarea >4 mm infirmă constricția și face imagistica superfluă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tratamentul de primă linie: AINS sau aspirină plus colchicină, până la 6 luni — Corect: AINS/aspirină + colchicină până la 6 luni este explicit.\n\nÎn rezistență, corticoterapia orală poate fi eficientă; la unii, pericardectomia — Corect: Steroiizii orali și pericardectomia sunt menționate la rezistență.\n\nCT sau IRM pot arăta îngroșare (>4 mm) sau inflamație pericardică — Corect: >4 mm pe CT/IRM este pragul citat.\n\nColchicina se oprește la 48 de ore, pericardectomia fiind primul gest — Incorect: 6 luni, nu 48 de ore; pericardectomia nu este primul gest.\n\nÎngroșarea >4 mm infirmă constricția și face imagistica superfluă — Incorect: Îngroșarea >4 mm orientează spre constricție/inflamație, nu o infirmă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1126, Pericardită incesantă — Colchicină 6 luni, >4 mm (pagini PDF: 275).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1126
   ],
   "pdfPages": [
    275
   ],
   "section": "Pericardită incesantă — Colchicină 6 luni, >4 mm"
  },
  "learningObjective": "Fereastra de până la 6 luni a colchicinei și pragul imagistic >4 mm de îngroșare.",
  "optionRationales": [
   "AINS/aspirină + colchicină până la 6 luni este explicit.",
   "Steroiizii orali și pericardectomia sunt menționate la rezistență.",
   ">4 mm pe CT/IRM este pragul citat.",
   "6 luni, nu 48 de ore; pericardectomia nu este primul gest.",
   "Îngroșarea >4 mm orientează spre constricție/inflamație, nu o infirmă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Comprimă colchicina de la 6 luni la 48 de ore și promovează pericardectomia ca primă linie."
  },
  "textbookExpressions": [
   "6 luni",
   ">4 mm"
  ]
 },
 {
  "id": "cardiologie-adv-289",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Pericardita constrictivă — particularități față de tamponadă:",
  "options": [
   "Agoniștii dopaminergici (cabergolină, pergolidă) pot produce fibroză pericardică",
   "Un clacment pericardic protodiastolic la marginea sternală stângă inferioară",
   "FA la circa 30% din cazuri, prin dilatare atrială",
   "FA este incompatibilă cu constricția, atriile rămânând mici",
   "Cabergolina protejează de fibroză, fibroza ținând doar de TB"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Agoniștii dopaminergici (cabergolină, pergolidă) pot produce fibroză pericardică — Corect: Cabergolina și pergolida sunt citate.\n\nUn clacment pericardic protodiastolic la marginea sternală stângă inferioară — Corect: Clacmentul protodiastolic la marginea sternală stângă inferioară este explicit.\n\nFA la circa 30% din cazuri, prin dilatare atrială — Corect: 30% au FA prin dilatare atrială.\n\nFA este incompatibilă cu constricția, atriile rămânând mici — Incorect: 30% au FA, atriile nu rămân mici.\n\nCabergolina protejează de fibroză, fibroza ținând doar de TB — Incorect: Cabergolina este cauză de fibroză, nu protecție.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1127, 1126, Constricție — Cabergolină, clacment, FA 30% (pagini PDF: 276, 275).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1127,
    1126
   ],
   "pdfPages": [
    276,
    275
   ],
   "section": "Constricție — Cabergolină, clacment, FA 30%"
  },
  "learningObjective": "Reținerea cabergolinei/pergolidei ca fibrizanți, a clacmentului protodiastolic și a FA la 30%.",
  "optionRationales": [
   "Cabergolina și pergolida sunt citate.",
   "Clacmentul protodiastolic la marginea sternală stângă inferioară este explicit.",
   "30% au FA prin dilatare atrială.",
   "30% au FA, atriile nu rămân mici.",
   "Cabergolina este cauză de fibroză, nu protecție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Scoate cabergolina din lista de fibrizanți — etiologia medicamentoasă citată — și neagă FA-ul de 30%."
  },
  "textbookExpressions": [
   "cabergolina",
   "30% din cazuri"
  ]
 },
 {
  "id": "cardiologie-adv-290",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Pericardiocenteza și fenestrația pericardică:",
  "options": [
   "Pericardiocenteza (aseptic, ghidaj eco) este indicată la suspiciune de revărsat tuberculos, malign sau purulent",
   "Biopsia pericardică poate fi necesară dacă se suspectează TB, iar puncția nu e diagnostică",
   "La refill neoplazic (cauza cea mai frecventă de recidivă în UK) se poate crea o fereastră pericardică, percutan sau chirurgical",
   "Cele mai multe revărsate se acumulează fatal, fără remisiune spontană posibilă",
   "Fenestrația este interzisă în neoplazii, fiind rezervată constricției calcificate"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pericardiocenteza (aseptic, ghidaj eco) este indicată la suspiciune de revărsat tuberculos, malign sau purulent — Corect: Cele trei suspiciuni de puncție sunt explicite.\n\nBiopsia pericardică poate fi necesară dacă se suspectează TB, iar puncția nu e diagnostică — Corect: Biopsia după puncție nediagnostică în TB este menționată.\n\nLa refill neoplazic (cauza cea mai frecventă de recidivă în UK) se poate crea o fereastră pericardică, percutan sau chirurgical — Corect: Fereastra pentru refill neoplazic (UK) este descrisă.\n\nCele mai multe revărsate se acumulează fatal, fără remisiune spontană posibilă — Incorect: Cele mai multe revărsate se remit spontan.\n\nFenestrația este interzisă în neoplazii, fiind rezervată constricției calcificate — Incorect: Fenestrația este tocmai pentru recidiva neoplazică, nu pentru constricția calcificată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1127, Revărsat — Pericardiocenteză TB/malign și fereastră (pagini PDF: 276).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1127
   ],
   "pdfPages": [
    276
   ],
   "section": "Revărsat — Pericardiocenteză TB/malign și fereastră"
  },
  "learningObjective": "Nișa puncției (TB, malign, purulent) și a fenestrației pentru refill-ul neoplazic britanic.",
  "optionRationales": [
   "Cele trei suspiciuni de puncție sunt explicite.",
   "Biopsia după puncție nediagnostică în TB este menționată.",
   "Fereastra pentru refill neoplazic (UK) este descrisă.",
   "Cele mai multe revărsate se remit spontan.",
   "Fenestrația este tocmai pentru recidiva neoplazică, nu pentru constricția calcificată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Interzice fenestrația neoplazică — indicația citată — și neagă remisiunea spontană a majorității revărsatelor."
  },
  "textbookExpressions": [
   "fenestrarea pericardică",
   "Pericardiocenteza"
  ]
 },
 {
  "id": "cardiologie-adv-291",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Oxalatul de naftidrofuril în claudicația intermitentă:",
  "options": [
   "Este un vasodilatator care inhibă receptorii vasculari și trombocitari 5-HT2 și poate reduce lactatul",
   "Doza 100-200 mg ×3/zi poate crește distanța de mers și calitatea vieții",
   "Se consideră o probă de 3-6 luni când pacientul evită intervenția, iar efortul supervizat nu controlează simptomele",
   "Înlocuiește controlul factorilor de risc și programul de 2 ore/săptămână",
   "Se dă de primă intenție înaintea oricărui efort, ca substitut al angioplastiei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este un vasodilatator care inhibă receptorii vasculari și trombocitari 5-HT2 și poate reduce lactatul — Corect: Mecanismul 5-HT2 și lactatul sunt explicite.\n\nDoza 100-200 mg ×3/zi poate crește distanța de mers și calitatea vieții — Corect: Doza 100-200 mg ×3/zi este din text.\n\nSe consideră o probă de 3-6 luni când pacientul evită intervenția, iar efortul supervizat nu controlează simptomele — Corect: Proba 3-6 luni după efort insuficient este citată.\n\nÎnlocuiește controlul factorilor de risc și programul de 2 ore/săptămână — Incorect: Nu înlocuiește controlul riscului și cele 2 ore de efort.\n\nSe dă de primă intenție înaintea oricărui efort, ca substitut al angioplastiei — Incorect: Nu este prima linie înaintea efortului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1128, BVP — Naftidrofuril 100-200 mg, 5-HT2 (pagini PDF: 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1128
   ],
   "pdfPages": [
    277
   ],
   "section": "BVP — Naftidrofuril 100-200 mg, 5-HT2"
  },
  "learningObjective": "Nișa 3-6 luni a naftidrofurilului 100-200 mg ×3, după eșecul efortului supervizat.",
  "optionRationales": [
   "Mecanismul 5-HT2 și lactatul sunt explicite.",
   "Doza 100-200 mg ×3/zi este din text.",
   "Proba 3-6 luni după efort insuficient este citată.",
   "Nu înlocuiește controlul riscului și cele 2 ore de efort.",
   "Nu este prima linie înaintea efortului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune naftidrofurilul înaintea efortului supervizat, deși textul îl rezervă eșecului reabilitării."
  },
  "textbookExpressions": [
   "naftidrofuril",
   "5-hidroxitriptamină2"
  ]
 },
 {
  "id": "cardiologie-adv-292",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Diagnosticul diferențial al claudicației, dincolo de canalul spinal și Buerger, include:",
  "options": [
   "Compresia arterei poplitee la tineri, care pot avea pulsuri normale",
   "Displazia fibromusculară",
   "Claudicația venoasă: tensiune la mers, TVP în antecedente",
   "Displazia fibromusculară nu figurează în diagnosticul diferențial al claudicației",
   "Compresia poplitee apare doar la vârstnici cu pulsuri absente"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Compresia arterei poplitee la tineri, care pot avea pulsuri normale — Corect: Popliteea tinerilor cu pulsuri normale este listată.\n\nDisplazia fibromusculară — Corect: Displazia fibromusculară figurează.\n\nClaudicația venoasă: tensiune la mers, TVP în antecedente — Corect: Claudicația venoasă este descrisă.\n\nDisplazia fibromusculară nu figurează în diagnosticul diferențial al claudicației — Incorect: Displazia fibromusculară este în lista DD.\n\nCompresia poplitee apare doar la vârstnici cu pulsuri absente — Incorect: Popliteea este a tinerilor, care pot avea pulsuri normale.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1128, BVP — Poplitee, displazie fibromusculară (pagini PDF: 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1128
   ],
   "pdfPages": [
    277
   ],
   "section": "BVP — Poplitee, displazie fibromusculară"
  },
  "learningObjective": "Adăugarea compresiei poplitee a tânărului cu pulsuri prezente și a displaziei fibromusculare la lista DD.",
  "optionRationales": [
   "Popliteea tinerilor cu pulsuri normale este listată.",
   "Displazia fibromusculară figurează.",
   "Claudicația venoasă este descrisă.",
   "Displazia fibromusculară este în lista DD.",
   "Popliteea este a tinerilor, care pot avea pulsuri normale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută compresia poplitee pe vârstnicul fără pulsuri și scoate displazia fibromusculară din lista DD."
  },
  "textbookExpressions": [
   "poplitee",
   "fibromusculară"
  ]
 },
 {
  "id": "cardiologie-adv-293",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Sensibilitatea indicelui gleznă-braț poate fi îmbunătățită prin:",
  "options": [
   "Urmărirea scăderii IGB după efort",
   "Înlocuirea Doppler-ului tibial cu palparea izolată a pulsului radial",
   "Măsurarea doar a presiunii brahiale, fără gleznă",
   "Ignorarea arterelor calcificate, IGB rămânând valid",
   "Interzicerea presiunii de la degete la diabeticul cu artere incompresibile"
  ],
  "correct": [
   0
  ],
  "explanation": "Urmărirea scăderii IGB după efort — Corect: Textul: sensibilitatea poate fi îmbunătățită urmărind scăderea IGB după efort.\n\nÎnlocuirea Doppler-ului tibial cu palparea izolată a pulsului radial — Incorect: Palparea radială nu înlocuiește Doppler-ul tibial.\n\nMăsurarea doar a presiunii brahiale, fără gleznă — Incorect: Raportul gleznă/braț cere ambele măsurători.\n\nIgnorarea arterelor calcificate, IGB rămânând valid — Incorect: Pe calcificare IGB e fals crescut.\n\nInterzicerea presiunii de la degete la diabeticul cu artere incompresibile — Incorect: La incompresibile, presiunea de la degete este mai sensibilă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1128, BVP — IGB după efort (pagini PDF: 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1128
   ],
   "pdfPages": [
    277
   ],
   "section": "BVP — IGB după efort"
  },
  "learningObjective": "Reținerea manevrei de efort care crește sensibilitatea IGB, distinctă de falsa creștere pe calcificare.",
  "optionRationales": [
   "Textul: sensibilitatea poate fi îmbunătățită urmărind scăderea IGB după efort.",
   "Palparea radială nu înlocuiește Doppler-ul tibial.",
   "Raportul gleznă/braț cere ambele măsurători.",
   "Pe calcificare IGB e fals crescut.",
   "La incompresibile, presiunea de la degete este mai sensibilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează manevra de efort — metoda citată de a crește sensibilitatea IGB."
  },
  "textbookExpressions": [
   "după efort",
   "1GB"
  ]
 },
 {
  "id": "cardiologie-adv-294",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Revascularizarea claudicației intermitente:",
  "options": [
   "Nu este în general recomandată, cu excepția simptomelor severe sau invalidante",
   "Angioplastia transluminală percutană este prima opțiune, pe cateter inserat în artera femurală",
   "Controlul agresiv al riscului rămâne necesar, BVP expunând la BCI și boală cerebrovasculară",
   "Angioplastia se oferă de primă intenție tuturor claudicanților CCS I, înaintea efortului",
   "ASD este screening-ul de primă linie la toți asimptomaticii Fontaine I"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Nu este în general recomandată, cu excepția simptomelor severe sau invalidante — Corect: Intervenția nu este de rutină, ci la simptome severe/invalidante.\n\nAngioplastia transluminală percutană este prima opțiune, pe cateter inserat în artera femurală — Corect: PTA pe cateter femural este prima opțiune.\n\nControlul agresiv al riscului rămâne necesar, BVP expunând la BCI și boală cerebrovasculară — Corect: Riscul de BCI/AVC justifică tratamentul medical agresiv.\n\nAngioplastia se oferă de primă intenție tuturor claudicanților CCS I, înaintea efortului — Incorect: Efortul supervizat precede intervenția la claudicația neseveră.\n\nASD este screening-ul de primă linie la toți asimptomaticii Fontaine I — Incorect: ASD se folosește imediat anterior intervenției, nu ca screening Fontaine I.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1128, BVP — PTA femurală, nu rutină (pagini PDF: 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1128
   ],
   "pdfPages": [
    277
   ],
   "section": "BVP — PTA femurală, nu rutină"
  },
  "learningObjective": "Rezervarea angioplastiei cazurilor invalidante, cu abord femural ca primă opțiune intervențională.",
  "optionRationales": [
   "Intervenția nu este de rutină, ci la simptome severe/invalidante.",
   "PTA pe cateter femural este prima opțiune.",
   "Riscul de BCI/AVC justifică tratamentul medical agresiv.",
   "Efortul supervizat precede intervenția la claudicația neseveră.",
   "ASD se folosește imediat anterior intervenției, nu ca screening Fontaine I."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oferă PTA-ul de primă intenție claudicației ușoare, sărind efortul supervizat de 2 ore."
  },
  "textbookExpressions": [
   "Angioplastia transluminală",
   "femurală"
  ]
 },
 {
  "id": "cardiologie-adv-295",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Mortalitatea asociată bolilor cardiovasculare și cerebrovasculare coexistente în BVP face ca:",
  "options": [
   "Doar o parte dintre pacienții cu BVP să ajungă la amputație",
   "Amputația să fie regula, peste 90% din cazuri",
   "Boala aorto-iliacă să fie lipsită de risc de BCI",
   "Fontaine I să însemne gangrenă",
   "IGB să fie inutil, diagnosticul fiind pur clinic"
  ],
  "correct": [
   0
  ],
  "explanation": "Doar o parte dintre pacienții cu BVP să ajungă la amputație — Corect: Textul: numai o parte ajung la amputație, din cauza mortalității CV coexistente.\n\nAmputația să fie regula, peste 90% din cazuri — Incorect: Amputația nu este regula.\n\nBoala aorto-iliacă să fie lipsită de risc de BCI — Incorect: Aorto-iliacul asociază risc de BCI.\n\nFontaine I să însemne gangrenă — Incorect: Fontaine I este forma asimptomatică.\n\nIGB să fie inutil, diagnosticul fiind pur clinic — Incorect: IGB stratifică severitatea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1128, BVP — Amputația nu este regula (pagini PDF: 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1128
   ],
   "pdfPages": [
    277
   ],
   "section": "BVP — Amputația nu este regula"
  },
  "learningObjective": "Reținerea că mortalitatea CV/cerebrovasculară coexistente „fură” pacienții înaintea amputației.",
  "optionRationales": [
   "Textul: numai o parte ajung la amputație, din cauza mortalității CV coexistente.",
   "Amputația nu este regula.",
   "Aorto-iliacul asociază risc de BCI.",
   "Fontaine I este forma asimptomatică.",
   "IGB stratifică severitatea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă amputația — evitată de mortalitatea CV competitivă — în soarta a peste 90% din BVP."
  },
  "textbookExpressions": [
   "amputaţie",
   "cerebrovasculare"
  ]
 },
 {
  "id": "cardiologie-adv-296",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "IRM-ul cardiac în CMH poate detecta:",
  "options": [
   "Atât hipertrofia, cât și fibroza miocardică",
   "Doar calcificări pericardice, fără hipertrofie",
   "Captare subendocardică transmură de infarct, ca singur pattern",
   "Absența oricărei fibroze, diagnosticul fiind pur auscultator",
   "Gradientul LVOTO, IRM-ul fiind inutil dacă eco-ul arată SAM"
  ],
  "correct": [
   0
  ],
  "explanation": "Atât hipertrofia, cât și fibroza miocardică — Corect: Textul: IRM detectează atât hipertrofia, cât și fibroza.\n\nDoar calcificări pericardice, fără hipertrofie — Incorect: Calcificările pericardice țin de constricție.\n\nCaptare subendocardică transmură de infarct, ca singur pattern — Incorect: Pattern-ul de infarct nu epuizează fibroza CMH.\n\nAbsența oricărei fibroze, diagnosticul fiind pur auscultator — Incorect: Fibroza este vizibilă pe IRM (gadoliniu).\n\nGradientul LVOTO, IRM-ul fiind inutil dacă eco-ul arată SAM — Incorect: IRM aduce informații despre fibroză, dincolo de SAM-ul eco.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1120, CMH — IRM: hipertrofie și fibroză (pagini PDF: 269).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1120
   ],
   "pdfPages": [
    269
   ],
   "section": "CMH — IRM: hipertrofie și fibroză"
  },
  "learningObjective": "Reținerea dublului rol al IRM (masă + fibroză), ilustrat în Fig. 30.109.",
  "optionRationales": [
   "Textul: IRM detectează atât hipertrofia, cât și fibroza.",
   "Calcificările pericardice țin de constricție.",
   "Pattern-ul de infarct nu epuizează fibroza CMH.",
   "Fibroza este vizibilă pe IRM (gadoliniu).",
   "IRM aduce informații despre fibroză, dincolo de SAM-ul eco."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce IRM-ul CMH la un eco de SAM și neagă fibroza — tocmai ceea ce Fig. 30.109 arată."
  },
  "textbookExpressions": [
   "fibroză",
   "hipertrofia"
  ]
 },
 {
  "id": "cardiologie-adv-297",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "CMD sporadică poate fi cauzată de:",
  "options": [
   "Miocardită: Coxsackie, adeno, eritrovirus, HIV, bacterii, fungi, micobacterii, paraziți (Chagas)",
   "Toxice: alcool, chimioterapie, metale (cobalt, plumb, mercur, arsen)",
   "Boli autoimmune, endocrine și neuromusculare",
   "Doar mutația MYH7, identic CMH sarcomerică",
   "Grosime parietală crescută, fără dilatare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Miocardită: Coxsackie, adeno, eritrovirus, HIV, bacterii, fungi, micobacterii, paraziți (Chagas) — Corect: Spectrul infecțios, inclusiv eritrovirus și Chagas, este enumerat.\n\nToxice: alcool, chimioterapie, metale (cobalt, plumb, mercur, arsen) — Corect: Toxicele includ cele patru metale.\n\nBoli autoimmune, endocrine și neuromusculare — Corect: Autoimun, endocrin și neuromuscular completează lista.\n\nDoar mutația MYH7, identic CMH sarcomerică — Incorect: MYH7 este a CMH, nu epuizează CMD sporadică.\n\nGrosime parietală crescută, fără dilatare — Incorect: Pereții sunt prezervați, cavitățile dilatate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1122, CMD sporadică — Eritrovirus, metale, autoimun (pagini PDF: 271).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1122
   ],
   "pdfPages": [
    271
   ],
   "section": "CMD sporadică — Eritrovirus, metale, autoimun"
  },
  "learningObjective": "Completarea listei sporadice cu eritrovirusul, micobacteriile și metalele (Co/Pb/Hg/As).",
  "optionRationales": [
   "Spectrul infecțios, inclusiv eritrovirus și Chagas, este enumerat.",
   "Toxicele includ cele patru metale.",
   "Autoimun, endocrin și neuromuscular completează lista.",
   "MYH7 este a CMH, nu epuizează CMD sporadică.",
   "Pereții sunt prezervați, cavitățile dilatate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce CMD sporadică la MYH7 sarcomeric și cere hipertrofie, fenotipul CMH."
  },
  "textbookExpressions": [
   "eritrovirusuri",
   "cobalt"
  ]
 },
 {
  "id": "cardiologie-adv-298",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Evaluarea rudelor în CMD permite:",
  "options": [
   "Identificarea bolii în stadii precoce, asimptomatice, înaintea complicațiilor",
   "Includerea istoricului familial și a arborelui genealogic în evaluarea clinică",
   "Manifestare prin IC, aritmii, tulburări de conducere, embolii sau moarte subită",
   "Așteptarea complicațiilor embolice înaintea oricărui screening familial",
   "Ignorarea arborelui genealogic, boala fiind strict non-familială"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Identificarea bolii în stadii precoce, asimptomatice, înaintea complicațiilor — Corect: Identificarea precoce asimptomatică este explicită.\n\nIncluderea istoricului familial și a arborelui genealogic în evaluarea clinică — Corect: Arborele genealogic face parte din evaluare.\n\nManifestare prin IC, aritmii, tulburări de conducere, embolii sau moarte subită — Corect: Spectrul de prezentare include emboliile și MSC.\n\nAșteptarea complicațiilor embolice înaintea oricărui screening familial — Incorect: Screening-ul precede, nu urmează, complicațiile.\n\nIgnorarea arborelui genealogic, boala fiind strict non-familială — Incorect: Există forma familială AD, deci arborele contează.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1122, CMD — Screening-ul rudelor (pagini PDF: 271).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1122
   ],
   "pdfPages": [
    271
   ],
   "section": "CMD — Screening-ul rudelor"
  },
  "learningObjective": "Rolul screening-ului familial înaintea complicațiilor (embolie, MSC, blocuri).",
  "optionRationales": [
   "Identificarea precoce asimptomatică este explicită.",
   "Arborele genealogic face parte din evaluare.",
   "Spectrul de prezentare include emboliile și MSC.",
   "Screening-ul precede, nu urmează, complicațiile.",
   "Există forma familială AD, deci arborele contează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amână screening-ul familial până după embolie, deși textul îl plasează înaintea complicațiilor."
  },
  "textbookExpressions": [
   "rudelor",
   "arborelui genealogic"
  ]
 },
 {
  "id": "cardiologie-adv-299",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "CRT și ICD în CMD, la clasa NYHA III-IV:",
  "options": [
   "Abordarea include tratamentul general al IC, cu opțiunea CRT și ICD",
   "Transplantul este recomandat la unii pacienți",
   "Biopsia rămâne de primă intenție, înaintea oricărei terapii de IC",
   "NYHA I este indicația preferată de CRT-D, nu III-IV",
   "Transplantul este interzis, fibroza medio-miocardică fiind o contraindicație absolută"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Abordarea include tratamentul general al IC, cu opțiunea CRT și ICD — Corect: CRT și ICD la NYHA III și IV sunt explicite.\n\nTransplantul este recomandat la unii pacienți — Corect: Transplantul la unii pacienți este menționat.\n\nBiopsia rămâne de primă intenție, înaintea oricărei terapii de IC — Incorect: Biopsia nu este de rutină.\n\nNYHA I este indicația preferată de CRT-D, nu III-IV — Incorect: Textul indică NYHA III-IV, nu I.\n\nTransplantul este interzis, fibroza medio-miocardică fiind o contraindicație absolută — Incorect: Fibroza IRM nu contraindică transplantul în acest paragraf.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1123, CMD — CRT/ICD în NYHA III-IV (pagini PDF: 272).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1123
   ],
   "pdfPages": [
    272
   ],
   "section": "CMD — CRT/ICD în NYHA III-IV"
  },
  "learningObjective": "Reținerea nișei CRT+ICD la NYHA III-IV și a transplantului la selecționați.",
  "optionRationales": [
   "CRT și ICD la NYHA III și IV sunt explicite.",
   "Transplantul la unii pacienți este menționat.",
   "Biopsia nu este de rutină.",
   "Textul indică NYHA III-IV, nu I.",
   "Fibroza IRM nu contraindică transplantul în acest paragraf."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută CRT-D de la NYHA III-IV la clasa I și interzice transplantul."
  },
  "textbookExpressions": [
   "NYHA III",
   "IV"
  ]
 },
 {
  "id": "cardiologie-adv-300",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Chilopericardul și pericardita mixedematoasă:",
  "options": [
   "Figurează ca entități distincte în Cadranul 30.53",
   "Mixedemul ține de etiologiile metabolice, alături de forma uremică",
   "Chilopericardul înlocuiește uremia ca etiologie dominantă occidentală",
   "Mixedemul este o cauză de BAV complet, nu de pericardită",
   "Chilopericardul este identic tamponadei maligne, fără linie proprie în cadran"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Figurează ca entități distincte în Cadranul 30.53 — Corect: Ambele figurează în cadran.\n\nMixedemul ține de etiologiile metabolice, alături de forma uremică — Corect: Mixedemul stă lângă uremie.\n\nChilopericardul înlocuiește uremia ca etiologie dominantă occidentală — Incorect: Uremia rămâne o cauză clasică, nu este înlocuită.\n\nMixedemul este o cauză de BAV complet, nu de pericardită — Incorect: Mixedemul este etiologie de pericardită în cadran.\n\nChilopericardul este identic tamponadei maligne, fără linie proprie în cadran — Incorect: Chilopericardul are linie proprie în cadran.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1125, Pericard — Chilopericard și mixedem (pagini PDF: 274).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1125
   ],
   "pdfPages": [
    274
   ],
   "section": "Pericard — Chilopericard și mixedem"
  },
  "learningObjective": "Recunoașterea celor două linii mai puțin citate din Cadranul 30.53 (chilopericard, mixedem).",
  "optionRationales": [
   "Ambele figurează în cadran.",
   "Mixedemul stă lângă uremie.",
   "Uremia rămâne o cauză clasică, nu este înlocuită.",
   "Mixedemul este etiologie de pericardită în cadran.",
   "Chilopericardul are linie proprie în cadran."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Scoate mixedemul din pericard — deși cadranul îl listează — și îl mută pe BAV."
  },
  "textbookExpressions": [
   "Chilopericardul",
   "mixedematoasă"
  ]
 },
 {
  "id": "cardiologie-adv-301",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Radiografia de profil în pericardita constrictivă este utilă pentru:",
  "options": [
   "Detectarea calcificărilor omise pe incidența postero-anterioară",
   "Înlocuirea ECG-ului, QRS-ul fiind constant normal",
   "Confirmarea că orice calcificare echivalează constricția",
   "Demonstrarea cordului globulos, identic tamponadei",
   "Excluderea CT/IRM-ului din evaluarea grosimii pericardului"
  ],
  "correct": [
   0
  ],
  "explanation": "Detectarea calcificărilor omise pe incidența postero-anterioară — Corect: Textul: o radiografie de profil poate fi utilă în detectarea calcificărilor omise pe PA.\n\nÎnlocuirea ECG-ului, QRS-ul fiind constant normal — Incorect: ECG-ul arată microvoltaj cu T aplatizate/inversate.\n\nConfirmarea că orice calcificare echivalează constricția — Incorect: Un pericard calcificat nu înseamnă constricție.\n\nDemonstrarea cordului globulos, identic tamponadei — Incorect: Constricția are cord relativ mic, nu globulos.\n\nExcluderea CT/IRM-ului din evaluarea grosimii pericardului — Incorect: CT și IRM evaluează grosimea pericardului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1127, Constricție — Radiografie de profil (pagini PDF: 276).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1127
   ],
   "pdfPages": [
    276
   ],
   "section": "Constricție — Radiografie de profil"
  },
  "learningObjective": "Reținerea nișei incidenței de profil pentru calcificări omise pe clişeul PA.",
  "optionRationales": [
   "Textul: o radiografie de profil poate fi utilă în detectarea calcificărilor omise pe PA.",
   "ECG-ul arată microvoltaj cu T aplatizate/inversate.",
   "Un pericard calcificat nu înseamnă constricție.",
   "Constricția are cord relativ mic, nu globulos.",
   "CT și IRM evaluează grosimea pericardului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă profilul — manevră pentru calcificări omise — într-un substitut de ECG normal sau de cord globulos."
  },
  "textbookExpressions": [
   "de profil",
   "postero-anterioară"
  ]
 },
 {
  "id": "cardiologie-adv-302",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Semnele tamponadei, pe măsură ce revărsatul crește, includ:",
  "options": [
   "Creșterea PVJ, cu ascuțirea pantei descendente X",
   "Semnul Kussmaul (turgescență jugulară crescută în inspir)",
   "Puls paradoxal: scădere a presiunii sistolice ≥10 mmHg în inspir",
   "Descendent y adânc (Friedreich), identic constricției",
   "Zgomote cardiace accentuate și apex hiperdinamic, ca în regurgitarea aortică"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Creșterea PVJ, cu ascuțirea pantei descendente X — Corect: Panta X ascuțită este explicită.\n\nSemnul Kussmaul (turgescență jugulară crescută în inspir) — Corect: Kussmaul este listat.\n\nPuls paradoxal: scădere a presiunii sistolice ≥10 mmHg în inspir — Corect: Paradoxul ≥10 mmHg este definit.\n\nDescendent y adânc (Friedreich), identic constricției — Incorect: Y adânc/Friedreich aparține constricției.\n\nZgomote cardiace accentuate și apex hiperdinamic, ca în regurgitarea aortică — Incorect: Zgomotele sunt diminuate, apexul mascat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1127, 1126, Tamponadă — Pantă X, Kussmaul, paradox ≥10 mmHg (pagini PDF: 276, 275).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1127,
    1126
   ],
   "pdfPages": [
    276,
    275
   ],
   "section": "Tamponadă — Pantă X, Kussmaul, paradox ≥10 mmHg"
  },
  "learningObjective": "Potrivirea pantei X ascuțite și a paradoxului ≥10 mmHg, distincte de y-ul constricției.",
  "optionRationales": [
   "Panta X ascuțită este explicită.",
   "Kussmaul este listat.",
   "Paradoxul ≥10 mmHg este definit.",
   "Y adânc/Friedreich aparține constricției.",
   "Zgomotele sunt diminuate, apexul mascat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie tamponadei descendentul y al constricției și apexul hiperdinamic al regurgitării aortice."
  },
  "textbookExpressions": [
   "10 mmHg",
   "Kussmaul"
  ]
 },
 {
  "id": "cardiologie-adv-303",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "Eco-semne de tamponadă, dincolo de colabarea AD/VD, includ:",
  "options": [
   "Deplasarea septului interventricular spre VS în inspir",
   "Inversarea fluxului diastolic în venele hepatice în expir",
   "Dilatarea VCI este incompatibilă cu tamponada",
   "Septul se deplasează spre VD în inspir, identic constricției fără lichid",
   "Fluxul hepatic se inversează în inspir, nu în expir"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Deplasarea septului interventricular spre VS în inspir — Corect: Deplasarea septului spre VS în inspir este explicită.\n\nInversarea fluxului diastolic în venele hepatice în expir — Corect: Inversarea hepatică expiratorie este listată.\n\nDilatarea VCI este incompatibilă cu tamponada — Incorect: VCI este dilatată, cu colaps inspirator <50%.\n\nSeptul se deplasează spre VD în inspir, identic constricției fără lichid — Incorect: Deplasarea este spre VS, nu spre VD.\n\nFluxul hepatic se inversează în inspir, nu în expir — Incorect: Inversarea hepatică este în expir, nu în inspir.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1127, Tamponadă — Sept spre VS, vene hepatice (pagini PDF: 276).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1127
   ],
   "pdfPages": [
    276
   ],
   "section": "Tamponadă — Sept spre VS, vene hepatice"
  },
  "learningObjective": "Completarea criteriilor eco cu septul inspirator către VS și inversarea hepatică expiratorie.",
  "optionRationales": [
   "Deplasarea septului spre VS în inspir este explicită.",
   "Inversarea hepatică expiratorie este listată.",
   "VCI este dilatată, cu colaps inspirator <50%.",
   "Deplasarea este spre VS, nu spre VD.",
   "Inversarea hepatică este în expir, nu în inspir."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează direcția septului (spre VS) și timing-ul fluxului hepatic (expir)."
  },
  "textbookExpressions": [
   "venele hepatice",
   "septului"
  ]
 },
 {
  "id": "cardiologie-adv-304",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "CT sau IRM-ul cardiac sunt utile în revărsatele pericardice:",
  "options": [
   "Închistate, post-chirurgie cardiacă",
   "Doar ca substitut al eco-ului la toți pacienții cu frecătură",
   "În locul pericardiocentezei, când se suspectează puroi",
   "Pentru a evita ghidajul eco al puncției",
   "Ca screening la pericardita virală autolimitată fără revărsat"
  ],
  "correct": [
   0
  ],
  "explanation": "Închistate, post-chirurgie cardiacă — Corect: Textul rezervă CT/IRM revărsatelor închistate post-chirurgie.\n\nDoar ca substitut al eco-ului la toți pacienții cu frecătură — Incorect: Eco-ul rămâne cea mai utilă tehnică de demonstrare a revărsatului.\n\nÎn locul pericardiocentezei, când se suspectează puroi — Incorect: Puroiul este o indicație de puncție, nu de a o înlocui prin CT.\n\nPentru a evita ghidajul eco al puncției — Incorect: Puncția se face sub ghidaj eco.\n\nCa screening la pericardita virală autolimitată fără revărsat — Incorect: Forma virală autolimitată fără revărsat nu cere CT/IRM.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1127, Revărsat — CT/IRM pentru loculări postoperatorii (pagini PDF: 276).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1127
   ],
   "pdfPages": [
    276
   ],
   "section": "Revărsat — CT/IRM pentru loculări postoperatorii"
  },
  "learningObjective": "Reținerea nișei CT/IRM: revărsate închistate după chirurgie cardiacă.",
  "optionRationales": [
   "Textul rezervă CT/IRM revărsatelor închistate post-chirurgie.",
   "Eco-ul rămâne cea mai utilă tehnică de demonstrare a revărsatului.",
   "Puroiul este o indicație de puncție, nu de a o înlocui prin CT.",
   "Puncția se face sub ghidaj eco.",
   "Forma virală autolimitată fără revărsat nu cere CT/IRM."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde CT/IRM-ul loculat postoperator la screening-ul pericarditei virale fără lichid."
  },
  "textbookExpressions": [
   "închistate",
   "post-chirurgie cardiacă"
  ]
 },
 {
  "id": "cardiologie-adv-305",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "În cazurile dificile de constricție versus cardiomiopatie restrictivă, poate fi utilă:",
  "options": [
   "Biopsia endomiocardică",
   "Doar palparea apexului, fără imagistică",
   "Înlocuirea CT/IRM-ului cu o radiografie de față, fără profil",
   "Cateterismul care arată presiuni telediastolice inegale VS/VD, ca și cum ar infirma egalizarea",
   "Interzicerea oricărei biopsii, diferențierea fiind imposibilă"
  ],
  "correct": [
   0
  ],
  "explanation": "Biopsia endomiocardică — Corect: Textul: biopsia poate fi utilă în cazurile dificile, pentru diferențierea de restrictivă.\n\nDoar palparea apexului, fără imagistică — Incorect: Palparea izolată nu înlocuiește imagistica.\n\nÎnlocuirea CT/IRM-ului cu o radiografie de față, fără profil — Incorect: CT/IRM evaluează grosimea; profilul completează PA.\n\nCateterismul care arată presiuni telediastolice inegale VS/VD, ca și cum ar infirma egalizarea — Incorect: Cateterismul arată presiuni telediastolice egale, nu inegale.\n\nInterzicerea oricărei biopsii, diferențierea fiind imposibilă — Incorect: Biopsia este menționată tocmai pentru diferențiere.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1127, Constricție — Biopsie versus restrictivă (pagini PDF: 276).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1127
   ],
   "pdfPages": [
    276
   ],
   "section": "Constricție — Biopsie versus restrictivă"
  },
  "learningObjective": "Reținerea biopsiei endomiocardice ca instrument de diferențiere constricție/restrictivă în cazurile dificile.",
  "optionRationales": [
   "Textul: biopsia poate fi utilă în cazurile dificile, pentru diferențierea de restrictivă.",
   "Palparea izolată nu înlocuiește imagistica.",
   "CT/IRM evaluează grosimea; profilul completează PA.",
   "Cateterismul arată presiuni telediastolice egale, nu inegale.",
   "Biopsia este menționată tocmai pentru diferențiere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează biopsia — metoda citată de a despărți constricția de restrictivă — și inversează egalizarea presiunilor."
  },
  "textbookExpressions": [
   "Biopsia endomiocardică",
   "restrictivă"
  ]
 },
 {
  "id": "cardiologie-adv-306",
  "topicId": "cardiologie",
  "type": "CM",
  "stem": "După pericardiocenteza pentru tamponadă, textul prevede și:",
  "options": [
   "Un dren poate fi lăsat temporar pe loc, pentru eliminarea suficientă a lichidului",
   "Căutarea și tratarea cauzei subiacente ori de câte ori este posibil",
   "Hemoculturi sau determinări de autoanticorpi, după caz",
   "Drenajul prelungit înlocuiește căutarea cauzei, revărsatul neputând recidiva",
   "Fenestrația este primul gest la orice revărsat viral autolimitat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Un dren poate fi lăsat temporar pe loc, pentru eliminarea suficientă a lichidului — Corect: Drenul temporar este explicit.\n\nCăutarea și tratarea cauzei subiacente ori de câte ori este posibil — Corect: Cauza subiacentă trebuie căutată și tratată.\n\nHemoculturi sau determinări de autoanticorpi, după caz — Corect: Hemoculturile și autoanticorpii sunt menționate.\n\nDrenajul prelungit înlocuiește căutarea cauzei, revărsatul neputând recidiva — Incorect: Revărsatul se poate reface; cauza rămâne esențială.\n\nFenestrația este primul gest la orice revărsat viral autolimitat — Incorect: Fenestrația este pentru refill-ul neoplazic, nu pentru forma virală autolimitată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1127, Revărsat — Dren temporar și cauza subiacentă (pagini PDF: 276).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1127
   ],
   "pdfPages": [
    276
   ],
   "section": "Revărsat — Dren temporar și cauza subiacentă"
  },
  "learningObjective": "Nișa drenului temporar post-puncție și a investigațiilor etiologice (culturi, autoanticorpi).",
  "optionRationales": [
   "Drenul temporar este explicit.",
   "Cauza subiacentă trebuie căutată și tratată.",
   "Hemoculturile și autoanticorpii sunt menționate.",
   "Revărsatul se poate reface; cauza rămâne esențială.",
   "Fenestrația este pentru refill-ul neoplazic, nu pentru forma virală autolimitată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune fenestrația pe revărsatul viral autolimitat și anulează căutarea cauzei după puncție."
  },
  "textbookExpressions": [
   "dren",
   "autoanticorpi"
  ]
 },
 {
  "id": "cardiologie-adv-307",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Conform Cadranului 30.39, un scor TIMI STEMI de 7 puncte corespunde unei mortalități la 30 de zile de circa:",
  "options": [
   "4,4%",
   "12,4%",
   "23,4%",
   "35,9%",
   "0,8%"
  ],
  "correct": [
   2
  ],
  "explanation": "4,4% — Incorect: 4,4% este scorul 3.\n\n12,4% — Incorect: 12,4% este scorul 5.\n\n23,4% — Corect: Cadranul: 7 → 23,4%.\n\n35,9% — Incorect: 35,9% este banda 9-16.\n\n0,8% — Incorect: 0,8% este scorul 0.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1088, STEMI — TIMI scor 7 → 23,4% (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1088
   ],
   "pdfPages": [
    249
   ],
   "section": "STEMI — TIMI scor 7 → 23,4%"
  },
  "learningObjective": "Memorarea treptei 7 puncte → 23,4%, intercalată între 16,1% (6 puncte) și 26,8% (8 puncte).",
  "optionRationales": [
   "4,4% este scorul 3.",
   "12,4% este scorul 5.",
   "Cadranul: 7 → 23,4%.",
   "35,9% este banda 9-16.",
   "0,8% este scorul 0."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează treptele 5/7/9-16 ale aceluiași tabel; doar scorul 7 dă 23,4%."
  },
  "textbookExpressions": [
   "23,4%",
   "30 zile"
  ]
 },
 {
  "id": "cardiologie-adv-308",
  "topicId": "cardiologie",
  "type": "CS",
  "stem": "Protezele valvulare pot avea o durabilitate de peste:",
  "options": [
   "20 de ani",
   "2 ani, după care se înlocuiesc de rutină",
   "6 luni, identic DAPT post-stent",
   "48 de ore, cât fereastra de cardioversie a FA",
   "1 an, identic degenerării biologice complete"
  ],
  "correct": [
   0
  ],
  "explanation": "20 de ani — Corect: Textul: protezele pot avea durabilitate de peste 20 de ani.\n\n2 ani, după care se înlocuiesc de rutină — Incorect: 2 ani subestimează net.\n\n6 luni, identic DAPT post-stent — Incorect: 6 luni este DAPT, nu durata protezei.\n\n48 de ore, cât fereastra de cardioversie a FA — Incorect: 48 de ore este fereastra FA.\n\n1 an, identic degenerării biologice complete — Incorect: Biologicele degenerează după circa 10 ani; >20 de ani este cifra de durabilitate citată aici.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 30, p. 1095, 1102, Proteze — Durabilitate peste 20 de ani (pagini PDF: 256, 263).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 30,
   "printedPages": [
    1095,
    1102
   ],
   "pdfPages": [
    256,
    263
   ],
   "section": "Proteze — Durabilitate peste 20 de ani"
  },
  "learningObjective": "Reținerea durabilității >20 de ani a protezelor, distinctă de degenerarea biologică la circa 10 ani.",
  "optionRationales": [
   "Textul: protezele pot avea durabilitate de peste 20 de ani.",
   "2 ani subestimează net.",
   "6 luni este DAPT, nu durata protezei.",
   "48 de ore este fereastra FA.",
   "Biologicele degenerează după circa 10 ani; >20 de ani este cifra de durabilitate citată aici."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Comprimă durabilitatea de peste 20 de ani la ferestre din SCA/FA (6 luni, 48 de ore)."
  },
  "textbookExpressions": [
   "20 de ani",
   "Protezele valvulare"
  ]
 }
];
