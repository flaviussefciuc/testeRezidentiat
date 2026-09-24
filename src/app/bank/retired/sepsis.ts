import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_SEPSIS:Question[]=[
 {
  "id": "sepsis-adv-001",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "La un pacient febril întors dintr-o zonă endemică, evaluarea etiologiilor tropicale include:",
  "options": [
   "Febra hemoragică virală, la cei cu febră în primele 21 de zile de la întoarcerea dintr-o regiune endemică",
   "Coronavirusul sindromului respirator al Orientului Mijlociu (MERS-CoV), la simptome respiratorii în primele 14 zile de la întoarcere",
   "Hemoculturi și screening al malariei printre investigațiile minime, alături de analizele sanguine de rutină",
   "Fereastra de 21 de zile se aplică identic MERS-CoV și febrelor hemoragice virale",
   "Profilaxia malariei face inutil screening-ul, diagnosticul de malarie fiind astfel exclus"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Febra hemoragică virală, la cei cu febră în primele 21 de zile de la întoarcerea dintr-o regiune endemică — Corect: Textul indică evaluarea febrei hemoragice virale în primele 21 de zile de la întoarcerea dintr-o regiune endemică.\n\nCoronavirusul sindromului respirator al Orientului Mijlociu (MERS-CoV), la simptome respiratorii în primele 14 zile de la întoarcere — Corect: Textul indică evaluarea MERS-CoV la debutul simptomelor respiratorii în primele 14 zile de la întoarcere.\n\nHemoculturi și screening al malariei printre investigațiile minime, alături de analizele sanguine de rutină — Corect: Investigațiile minime includ hemoculturi și screening al malariei, pe lângă analizele sanguine de rutină.\n\nFereastra de 21 de zile se aplică identic MERS-CoV și febrelor hemoragice virale — Incorect: Fereastra de 21 de zile privește febrele hemoragice; pentru MERS-CoV intervalul citat este de 14 zile.\n\nProfilaxia malariei face inutil screening-ul, diagnosticul de malarie fiind astfel exclus — Incorect: Textul cere chestionarea asupra profilaxiei malariei, nu excluderea diagnosticului; screening-ul rămâne printre investigațiile minime.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 156, Sepsisul în situații speciale — Pacienții întorși din călătorii (pagini PDF: 10).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    156
   ],
   "pdfPages": [
    10
   ],
   "section": "Sepsisul în situații speciale — Pacienții întorși din călătorii"
  },
  "learningObjective": "Recunoașterea ferestrelor temporale distincte pentru febrele hemoragice virale și MERS-CoV și a investigațiilor minime la întoarcerea din zone endemice.",
  "optionRationales": [
   "Textul indică evaluarea febrei hemoragice virale în primele 21 de zile de la întoarcerea dintr-o regiune endemică.",
   "Textul indică evaluarea MERS-CoV la debutul simptomelor respiratorii în primele 14 zile de la întoarcere.",
   "Investigațiile minime includ hemoculturi și screening al malariei, pe lângă analizele sanguine de rutină.",
   "Fereastra de 21 de zile privește febrele hemoragice; pentru MERS-CoV intervalul citat este de 14 zile.",
   "Textul cere chestionarea asupra profilaxiei malariei, nu excluderea diagnosticului; screening-ul rămâne printre investigațiile minime."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ferestrele temporale 14 față de 21 de zile, ușor de confundat, și transformă o întrebare anamnestică (profilaxia malariei) într-o excludere diagnostică nesusținută."
  },
  "textbookExpressions": [
   "primele 21 de zile",
   "MERS-CoV"
  ]
 },
 {
  "id": "sepsis-adv-002",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "Care dintre următoarele afirmații diferențiază corect sepsisul dobândit comunitar de cel nosocomial?",
  "options": [
   "Endocardita infecțioasă și meningita reprezintă cele mai frecvente origini ale sepsisului dobândit comunitar",
   "Stenotrophomonas maltophilia și Acinetobacter baumannii sunt exemple tipice de patogeni ai sepsisului dobândit comunitar",
   "Patogenii comunitari sunt de regulă virulenți, dar mai degrabă sensibili la antibiotice, spre deosebire de cei nosocomiali, mai puțin virulenți, dar adesea multirezistenți",
   "Infecțiile nosocomiale sunt mai ușor de tratat, deoarece microorganismele implicate au virulență redusă",
   "Neisseria meningitidis și Klebsiella pneumoniae sunt citate ca exemple de patogeni nosocomiali multirezistenți"
  ],
  "correct": [
   2
  ],
  "explanation": "Endocardita infecțioasă și meningita reprezintă cele mai frecvente origini ale sepsisului dobândit comunitar — Incorect: Endocardita și meningita sunt origini rare; cele mai frecvente sunt tractul urinar, tractul biliar și tractul respirator inferior.\n\nStenotrophomonas maltophilia și Acinetobacter baumannii sunt exemple tipice de patogeni ai sepsisului dobândit comunitar — Incorect: Stenotrophomonas maltophilia și Acinetobacter baumannii sunt exemplele date pentru infecțiile nosocomiale, nu pentru cele comunitare.\n\nPatogenii comunitari sunt de regulă virulenți, dar mai degrabă sensibili la antibiotice, spre deosebire de cei nosocomiali, mai puțin virulenți, dar adesea multirezistenți — Corect: Textul descrie patogenii comunitari ca virulenți, dar mai degrabă sensibili la antibiotice, iar pe cei nosocomiali ca mai puțin virulenți, dar adeseori multirezistenți.\n\nInfecțiile nosocomiale sunt mai ușor de tratat, deoarece microorganismele implicate au virulență redusă — Incorect: Deși mai puțin virulente, microorganismele nosocomiale sunt adeseori multirezistente și, prin urmare, mai dificil de tratat.\n\nNeisseria meningitidis și Klebsiella pneumoniae sunt citate ca exemple de patogeni nosocomiali multirezistenți — Incorect: N. meningitidis și K. pneumoniae figurează printre exemplele de patogeni comunitari virulenți, nu nosocomiali.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 155, Recunoașterea sepsisului — Originea sepsisului (pagini PDF: 9).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    155
   ],
   "pdfPages": [
    9
   ],
   "section": "Recunoașterea sepsisului — Originea sepsisului"
  },
  "learningObjective": "Contrastarea profilului de virulență și de sensibilitate la antibiotice al patogenilor comunitari față de cei nosocomiali, cu exemplele din text.",
  "optionRationales": [
   "Endocardita și meningita sunt origini rare; cele mai frecvente sunt tractul urinar, tractul biliar și tractul respirator inferior.",
   "Stenotrophomonas maltophilia și Acinetobacter baumannii sunt exemplele date pentru infecțiile nosocomiale, nu pentru cele comunitare.",
   "Textul descrie patogenii comunitari ca virulenți, dar mai degrabă sensibili la antibiotice, iar pe cei nosocomiali ca mai puțin virulenți, dar adeseori multirezistenți.",
   "Deși mai puțin virulente, microorganismele nosocomiale sunt adeseori multirezistente și, prin urmare, mai dificil de tratat.",
   "N. meningitidis și K. pneumoniae figurează printre exemplele de patogeni comunitari virulenți, nu nosocomiali."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere reținerea simultană a exemplelor de patogeni din fiecare categorie și a relației inverse între virulență și dificultatea tratamentului."
  },
  "textbookExpressions": [
   "adeseori multirezistente",
   "Stenotrophomonas"
  ]
 },
 {
  "id": "sepsis-adv-003",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Conform instrumentului NICE de stratificare a riscului (Cadranul 8.3), criteriile de risc înalt la adultul cu suspiciune de sepsis includ:",
  "options": [
   "Alură ventriculară de 91-130 bătăi/min",
   "Frecvență respiratorie de 25 respirații/min sau mai mare",
   "Tensiune arterială sistolică de 90 mmHg sau mai mică, ori cu peste 40 mmHg sub valorile normale",
   "Absența diurezei în ultimele 18 ore",
   "Temperatură timpanică sub 36°C"
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "explanation": "Alură ventriculară de 91-130 bătăi/min — Incorect: Alura ventriculară de 91-130 bătăi/min este criteriu de risc moderat spre crescut; riscul înalt necesită peste 130 bătăi/min.\n\nFrecvență respiratorie de 25 respirații/min sau mai mare — Corect: Tabelul indică frecvența respiratorie de 25 respirații/min sau mai mare drept criteriu de risc înalt (21-24 fiind risc moderat).\n\nTensiune arterială sistolică de 90 mmHg sau mai mică, ori cu peste 40 mmHg sub valorile normale — Corect: Tensiunea sistolică de 90 mmHg sau mai mică, ori cu peste 40 mmHg sub valorile normale, este criteriu de risc înalt.\n\nAbsența diurezei în ultimele 18 ore — Corect: Absența diurezei în ultimele 18 ore este criteriu de risc înalt, spre deosebire de intervalul 12-18 ore, care este risc moderat.\n\nTemperatură timpanică sub 36°C — Corect: Temperatura timpanică sub 36°C figurează la categoria temperatură drept criteriu de risc înalt.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 156, Recunoașterea sepsisului — Cadranul 8.3: Instrument de stratificare a riscului (pagini PDF: 10).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    156
   ],
   "pdfPages": [
    10
   ],
   "section": "Recunoașterea sepsisului — Cadranul 8.3: Instrument de stratificare a riscului"
  },
  "learningObjective": "Aplicarea pragurilor numerice care separă criteriile de risc înalt de cele de risc moderat spre crescut din instrumentul NICE.",
  "optionRationales": [
   "Alura ventriculară de 91-130 bătăi/min este criteriu de risc moderat spre crescut; riscul înalt necesită peste 130 bătăi/min.",
   "Tabelul indică frecvența respiratorie de 25 respirații/min sau mai mare drept criteriu de risc înalt (21-24 fiind risc moderat).",
   "Tensiunea sistolică de 90 mmHg sau mai mică, ori cu peste 40 mmHg sub valorile normale, este criteriu de risc înalt.",
   "Absența diurezei în ultimele 18 ore este criteriu de risc înalt, spre deosebire de intervalul 12-18 ore, care este risc moderat.",
   "Temperatura timpanică sub 36°C figurează la categoria temperatură drept criteriu de risc înalt."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate pragurile numerice au un echivalent apropiat în coloana de risc moderat, astfel încât singurul distractor este un interval real, dar din categoria inferioară."
  },
  "textbookExpressions": [
   "Criterii de risc înalt",
   "Temperatura timpanică <36°C"
  ]
 },
 {
  "id": "sepsis-adv-004",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Fusidatul de sodiu:",
  "options": [
   "Are structură asemănătoare sărurilor biliare și inhibă potent sinteza proteică bacteriană",
   "Trebuie administrat în combinație cu un alt agent antistafilococic, pentru a preveni instalarea rapidă a rezistenței",
   "Asigură o concentrație osoasă slabă, motiv pentru care este evitat în osteomielită",
   "Utilizarea concomitentă a statinelor este preferată, pentru protecție hepatică",
   "Preparatele topice sunt recomandate de rutină în impetigo, pentru a reduce rezistența sistemică"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Are structură asemănătoare sărurilor biliare și inhibă potent sinteza proteică bacteriană — Corect: Textul descrie structura asemănătoare sărurilor biliare și inhibarea potentă a sintezei proteice.\n\nTrebuie administrat în combinație cu un alt agent antistafilococic, pentru a preveni instalarea rapidă a rezistenței — Corect: Textul precizează administrarea în combinație cu un alt agent antistafilococic pentru a preveni rezistența care poate apărea rapid.\n\nAsigură o concentrație osoasă slabă, motiv pentru care este evitat în osteomielită — Incorect: Textul indică opusul: asigură o concentrație bună la nivel osos și este folosit în osteomielită.\n\nUtilizarea concomitentă a statinelor este preferată, pentru protecție hepatică — Incorect: Textul precizează că utilizarea concomitentă a statinelor trebuie evitată.\n\nPreparatele topice sunt recomandate de rutină în impetigo, pentru a reduce rezistența sistemică — Incorect: Textul indică opusul: preparatele topice pentru afecțiuni tegumentare minore trebuie evitate pentru a limita riscul rezistenței.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 166, Terapiile antibiotice — Fusidatul de sodiu (pagini PDF: 20).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    166
   ],
   "pdfPages": [
    20
   ],
   "section": "Terapiile antibiotice — Fusidatul de sodiu"
  },
  "learningObjective": "Corelarea mecanismului și a indicațiilor osoase ale fusidatului cu necesitatea asocierii și cu restricțiile (statine, uz topic).",
  "optionRationales": [
   "Textul descrie structura asemănătoare sărurilor biliare și inhibarea potentă a sintezei proteice.",
   "Textul precizează administrarea în combinație cu un alt agent antistafilococic pentru a preveni rezistența care poate apărea rapid.",
   "Textul indică opusul: asigură o concentrație bună la nivel osos și este folosit în osteomielită.",
   "Textul precizează că utilizarea concomitentă a statinelor trebuie evitată.",
   "Textul indică opusul: preparatele topice pentru afecțiuni tegumentare minore trebuie evitate pentru a limita riscul rezistenței."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează două indicații reale (concentrația osoasă utilă, evitarea topicelor) și transformă o interacțiune de evitat (statinele) într-o asociere protectoare."
  },
  "textbookExpressions": [
   "sărurilor biliare",
   "Utilizarea comcomitentă a slatinelor"
  ]
 },
 {
  "id": "sepsis-adv-005",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Următoarele afirmații despre recomandările Campaniei „Surviving Sepsis\" și dovezile privind tratamentul timpuriu al sepsisului sunt adevărate:",
  "options": [
   "Soluțiile de hidroxietil amidon reprezintă fluidul de primă intenție recomandat pentru resuscitare",
   "Se recomandă infuzia a cel puțin 30 ml/kg de soluții cristaloide în primele 3 ore de la stabilirea diagnosticului",
   "După instalarea hipotensiunii, riscul de deces a crescut cu câte 7,6% pentru fiecare oră de întârziere a antibioterapiei",
   "Dispozitivele de acces vascular infectate se îndepărtează numai după finalizarea curei de antibiotice",
   "Două studii de înaltă calitate din țări cu venituri mici au arătat că resuscitarea volemică a crescut mortalitatea"
  ],
  "correct": [
   1,
   2,
   4
  ],
  "explanation": "Soluțiile de hidroxietil amidon reprezintă fluidul de primă intenție recomandat pentru resuscitare — Incorect: Cristaloidele sunt fluidul de primă intenție, iar soluțiile de hidroxietil amidon trebuie evitate conform Cadranului 8.5.\n\nSe recomandă infuzia a cel puțin 30 ml/kg de soluții cristaloide în primele 3 ore de la stabilirea diagnosticului — Corect: SSC recomandă cel puțin 30 ml/kg de cristaloide în primele 3 ore de la stabilirea diagnosticului.\n\nDupă instalarea hipotensiunii, riscul de deces a crescut cu câte 7,6% pentru fiecare oră de întârziere a antibioterapiei — Corect: Studiul retrospectiv citat a arătat o creștere a riscului de deces cu 7,6% pentru fiecare oră de întârziere după instalarea hipotensiunii.\n\nDispozitivele de acces vascular infectate se îndepărtează numai după finalizarea curei de antibiotice — Incorect: Cadranul 8.5 recomandă îndepărtarea dispozitivelor infectate cât de repede după montarea unui nou acces vascular, nu după terminarea antibioterapiei.\n\nDouă studii de înaltă calitate din țări cu venituri mici au arătat că resuscitarea volemică a crescut mortalitatea — Corect: Textul menționează două studii de înaltă calitate din țări cu venituri mici în care resuscitarea volemică a crescut mortalitatea, în ciuda ameliorării inițiale a indicilor de perfuzie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 157, Tratamentul sepsisului — Ghidurile campaniei „Surviving Sepsis\" (pagini PDF: 11).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    157
   ],
   "pdfPages": [
    11
   ],
   "section": "Tratamentul sepsisului — Ghidurile campaniei „Surviving Sepsis\""
  },
  "learningObjective": "Reținerea pragurilor cantitative din recomandările SSC și a nuanțelor din dovezi (efectul întârzierii antibioticului, rezultatele neașteptate ale resuscitării în bolus).",
  "optionRationales": [
   "Cristaloidele sunt fluidul de primă intenție, iar soluțiile de hidroxietil amidon trebuie evitate conform Cadranului 8.5.",
   "SSC recomandă cel puțin 30 ml/kg de cristaloide în primele 3 ore de la stabilirea diagnosticului.",
   "Studiul retrospectiv citat a arătat o creștere a riscului de deces cu 7,6% pentru fiecare oră de întârziere după instalarea hipotensiunii.",
   "Cadranul 8.5 recomandă îndepărtarea dispozitivelor infectate cât de repede după montarea unui nou acces vascular, nu după terminarea antibioterapiei.",
   "Textul menționează două studii de înaltă calitate din țări cu venituri mici în care resuscitarea volemică a crescut mortalitatea, în ciuda ameliorării inițiale a indicilor de perfuzie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Combină praguri numerice exacte cu un rezultat contraintuitiv din studii (resuscitarea în bolus poate crește mortalitatea) și inversează două recomandări din Cadranul 8.5."
  },
  "textbookExpressions": [
   "30 ml/kg",
   "Evitaţi soluţiile de hidroxietil amidon"
  ]
 },
 {
  "id": "sepsis-adv-006",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "Un bărbat de 19 ani este adus în departamentul de urgență cu febră, hipotensiune și o erupție purpurică rapid extensivă, sugestivă pentru septicemie meningococică. Referitor la recoltarea probelor microbiologice, care este conduita corectă?",
  "options": [
   "Antibioticul se temporizează până la recoltarea a minim 5 ml de sânge în flacoane aerobe și anaerobe, ca la orice pacient cu sepsis acut",
   "Se recoltează tampoane superficiale de la nivelul leziunilor cutanate, acestea fiind probele preferate",
   "Se așteaptă pozitivarea hemoculturilor (în general în jur de 24 de ore) pentru a alege un antibiotic țintit",
   "Administrarea antibioticului nu trebuie întârziată, aceasta fiind singura excepție de la regula recoltării hemoculturilor înaintea antibioterapiei empirice",
   "Antibioterapia administrată înaintea recoltării nu influențează rezultatul hemoculturilor, iar PCR pentru ADN bacterian devine inutil"
  ],
  "correct": [
   3
  ],
  "explanation": "Antibioticul se temporizează până la recoltarea a minim 5 ml de sânge în flacoane aerobe și anaerobe, ca la orice pacient cu sepsis acut — Incorect: Regula recoltării prealabile a minim 5 ml de sânge se aplică în general, dar septicemia meningococică este excepția în care antibioticul nu se întârzie.\n\nSe recoltează tampoane superficiale de la nivelul leziunilor cutanate, acestea fiind probele preferate — Incorect: Tampoanele superficiale sunt utilizate rar și pot compromite decizia; nu sunt probele preferate.\n\nSe așteaptă pozitivarea hemoculturilor (în general în jur de 24 de ore) pentru a alege un antibiotic țintit — Incorect: Pozitivarea culturilor durează în jur de 24 de ore, iar în sepsis așteptarea rezultatelor de laborator este contraproductivă.\n\nAdministrarea antibioticului nu trebuie întârziată, aceasta fiind singura excepție de la regula recoltării hemoculturilor înaintea antibioterapiei empirice — Corect: Textul indică suspiciunea de septicemie meningococică drept singura excepție de la recoltarea hemoculturilor înaintea antibioterapiei, administrarea antibioticului neputând fi întârziată.\n\nAntibioterapia administrată înaintea recoltării nu influențează rezultatul hemoculturilor, iar PCR pentru ADN bacterian devine inutil — Incorect: Antibioterapia înainte de recoltare poate duce la hemoculturi negative, situație în care PCR pentru ADN bacterian poate totuși detecta patogenul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 158, Tratamentul sepsisului — Probe biologice utile și examinarea în laborator (pagini PDF: 12).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    158
   ],
   "pdfPages": [
    12
   ],
   "section": "Tratamentul sepsisului — Probe biologice utile și examinarea în laborator"
  },
  "learningObjective": "Aplicarea excepției unice de la regula recoltării hemoculturilor înaintea antibioterapiei și cunoașterea alternativei moleculare când culturile devin negative.",
  "optionRationales": [
   "Regula recoltării prealabile a minim 5 ml de sânge se aplică în general, dar septicemia meningococică este excepția în care antibioticul nu se întârzie.",
   "Tampoanele superficiale sunt utilizate rar și pot compromite decizia; nu sunt probele preferate.",
   "Pozitivarea culturilor durează în jur de 24 de ore, iar în sepsis așteptarea rezultatelor de laborator este contraproductivă.",
   "Textul indică suspiciunea de septicemie meningococică drept singura excepție de la recoltarea hemoculturilor înaintea antibioterapiei, administrarea antibioticului neputând fi întârziată.",
   "Antibioterapia înainte de recoltare poate duce la hemoculturi negative, situație în care PCR pentru ADN bacterian poate totuși detecta patogenul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vigneta pune în conflict regula generală (hemoculturi înaintea antibioticului) cu excepția ei unică, iar distractorii extind regula și la acest caz."
  },
  "textbookExpressions": [
   "septicemie meningococică",
   "minim 5 ml de sânge"
  ]
 },
 {
  "id": "sepsis-adv-007",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Enterobacteriile rezistente la carbapeneme (CRE) se caracterizează prin:",
  "options": [
   "Tulpinile producătoare de NDM tind să fie rezistente la antibioticele obișnuite, cu excepția colistinului, fosfomicinei și tigeciclinei",
   "Rezistența la ceftazidimă/avibactam este frecventă la tulpinile producătoare de KPC și OXA-48",
   "În Marea Britanie, cele mai frecvente tipuri de carbapenemaze sunt OXA-48, NDM și KPC",
   "Meropenemul rămâne util ca terapie țintită când sensibilitatea este intermediară, cu MIC de 8-16 mg/L",
   "Tulpinile producătoare de OXA-48 sau KPC sunt de regulă rezistente la chinolone și aminoglicozide"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "explanation": "Tulpinile producătoare de NDM tind să fie rezistente la antibioticele obișnuite, cu excepția colistinului, fosfomicinei și tigeciclinei — Corect: Textul precizează că tulpinile producătoare de NDM tind să fie rezistente la antibioticele obișnuite, cu excepția colistinului, fosfomicinei și tigeciclinei.\n\nRezistența la ceftazidimă/avibactam este frecventă la tulpinile producătoare de KPC și OXA-48 — Incorect: Rezistența la ceftazidimă/avibactam a bacteriilor producătoare de KPC și OXA-48 rămâne rară, nu frecventă.\n\nÎn Marea Britanie, cele mai frecvente tipuri de carbapenemaze sunt OXA-48, NDM și KPC — Corect: În Marea Britanie, cele mai frecvente tipuri de CRE sunt OXA-48, NDM și KPC.\n\nMeropenemul rămâne util ca terapie țintită când sensibilitatea este intermediară, cu MIC de 8-16 mg/L — Corect: Meropenemul, în bolus sau infuzie, este util ca terapie țintită când microorganismele prezintă sensibilitate intermediară, cu MIC de 8-16 mg/L.\n\nTulpinile producătoare de OXA-48 sau KPC sunt de regulă rezistente la chinolone și aminoglicozide — Incorect: Tulpinile producătoare de OXA-48 sau KPC sunt susceptibile la chinolone și aminoglicozide, ceea ce oferă mai multe opțiuni terapeutice.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 167, 168, Tratamentul infecțiilor cauzate de organisme multirezistente — Enterobacterii rezistente la carbapeneme (pagini PDF: 21, 22).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    167,
    168
   ],
   "pdfPages": [
    21,
    22
   ],
   "section": "Tratamentul infecțiilor cauzate de organisme multirezistente — Enterobacterii rezistente la carbapeneme"
  },
  "learningObjective": "Corelarea tipului de carbapenemază (OXA-48/KPC față de NDM) cu opțiunile terapeutice rămase și cu rolul rezidual al meropenemului.",
  "optionRationales": [
   "Textul precizează că tulpinile producătoare de NDM tind să fie rezistente la antibioticele obișnuite, cu excepția colistinului, fosfomicinei și tigeciclinei.",
   "Rezistența la ceftazidimă/avibactam a bacteriilor producătoare de KPC și OXA-48 rămâne rară, nu frecventă.",
   "În Marea Britanie, cele mai frecvente tipuri de CRE sunt OXA-48, NDM și KPC.",
   "Meropenemul, în bolus sau infuzie, este util ca terapie țintită când microorganismele prezintă sensibilitate intermediară, cu MIC de 8-16 mg/L.",
   "Tulpinile producătoare de OXA-48 sau KPC sunt susceptibile la chinolone și aminoglicozide, ceea ce oferă mai multe opțiuni terapeutice."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere diferențierea profilului de susceptibilitate al carbapenemazelor de tip serinic (KPC, OXA-48) de cel al metalo-β-lactamazei NDM și cunoașterea unui prag MIC precis."
  },
  "textbookExpressions": [
   "OXA-48",
   "fosfomicinei şi a tigeciclinei"
  ]
 },
 {
  "id": "sepsis-adv-008",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la chemoprofilaxia antibiotică (Cadranul 8.7 și ghidurile NICE):",
  "options": [
   "La contacții adulți ai unui caz de meningită meningococică se administrează rifampicină 600 mg de două ori pe zi timp de 2 zile",
   "Ciprofloxacina 500 mg p.o. în doză unică este o alternativă pentru profilaxia contacților de meningococ",
   "La contacții adulți ai unui caz de meningită cu Haemophilus influenzae tip B se administrează rifampicină 600 mg zilnic timp de 4 zile",
   "Profilaxia antibiotică este recomandată pacienților cu proteze valvulare cardiace înaintea procedurilor dentare",
   "La pacienții splenectomizați, profilaxia se face cu fenoximetilpenicilină 500 mg de două ori pe zi"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "La contacții adulți ai unui caz de meningită meningococică se administrează rifampicină 600 mg de două ori pe zi timp de 2 zile — Corect: Cadranul 8.7 indică pentru adulți rifampicină 600 mg doză dublă zilnică pentru 2 zile în profilaxia contacților de meningococ.\n\nCiprofloxacina 500 mg p.o. în doză unică este o alternativă pentru profilaxia contacților de meningococ — Corect: Alternativa în doză unică este ciprofloxacină 500 mg p.o. sau ceftriaxonă 250 mg i.m.\n\nLa contacții adulți ai unui caz de meningită cu Haemophilus influenzae tip B se administrează rifampicină 600 mg zilnic timp de 4 zile — Corect: Pentru H. influenzae tip B, adulții primesc rifampicină 600 mg zilnic timp de 4 zile, durată diferită față de cea pentru meningococ.\n\nProfilaxia antibiotică este recomandată pacienților cu proteze valvulare cardiace înaintea procedurilor dentare — Incorect: Conform NICE, profilaxia antibiotică nu este recomandată pentru prevenirea endocarditei la pacienții care urmează proceduri dentare, nici la cei cu „risc înalt\".\n\nLa pacienții splenectomizați, profilaxia se face cu fenoximetilpenicilină 500 mg de două ori pe zi — Corect: În splenectomie/disfuncție splenică, regimul este fenoximetilpenicilină 500 mg doză dublă zilnică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 161, Chemoprofilaxia antibiotică — Cadranul 8.7 (pagini PDF: 15).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    161
   ],
   "pdfPages": [
    15
   ],
   "section": "Chemoprofilaxia antibiotică — Cadranul 8.7"
  },
  "learningObjective": "Reținerea regimurilor profilactice din Cadranul 8.7 (meningococ, Haemophilus influenzae b, splenectomie) și a poziției NICE privind endocardita.",
  "optionRationales": [
   "Cadranul 8.7 indică pentru adulți rifampicină 600 mg doză dublă zilnică pentru 2 zile în profilaxia contacților de meningococ.",
   "Alternativa în doză unică este ciprofloxacină 500 mg p.o. sau ceftriaxonă 250 mg i.m.",
   "Pentru H. influenzae tip B, adulții primesc rifampicină 600 mg zilnic timp de 4 zile, durată diferită față de cea pentru meningococ.",
   "Conform NICE, profilaxia antibiotică nu este recomandată pentru prevenirea endocarditei la pacienții care urmează proceduri dentare, nici la cei cu „risc înalt\".",
   "În splenectomie/disfuncție splenică, regimul este fenoximetilpenicilină 500 mg doză dublă zilnică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele două regimuri cu rifampicină diferă doar prin frecvență și durată (2 zile de două ori pe zi față de 4 zile o dată pe zi), iar distractorul contrazice o recomandare NICE contraintuitivă."
  },
  "textbookExpressions": [
   "doză unică la inducţie",
   "rifampicină 600 mg"
  ]
 },
 {
  "id": "sepsis-adv-009",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Precizați afirmațiile adevărate referitoare la peniciline:",
  "options": [
   "Ticarcilina, penicilină cu spectru extins, nu are activitate împotriva infecțiilor cu Pseudomonas",
   "Pivmecilinamul acționează inclusiv asupra E. coli producător de ESBL, dar nu și asupra Pseudomonas aeruginosa",
   "Temocilina este considerată tratament de elecție al infecțiilor cu Pseudomonas și Acinetobacter spp.",
   "Benzilpenicilina se utilizează empiric în infecțiile severe, fără confirmarea de laborator a sensibilității",
   "Temocilina este activă doar pe bacterii Gram-negative, inclusiv multe producătoare de ESBL, și favorizează mai puțin infecția cu C. difficile"
  ],
  "correct": [
   1,
   4
  ],
  "explanation": "Ticarcilina, penicilină cu spectru extins, nu are activitate împotriva infecțiilor cu Pseudomonas — Incorect: Ticarcilina este activă împotriva infecțiilor cu Pseudomonas, la fel ca piperacilina în combinație cu tazobactam.\n\nPivmecilinamul acționează inclusiv asupra E. coli producător de ESBL, dar nu și asupra Pseudomonas aeruginosa — Corect: Pivmecilinamul acționează pe Gram-negativi, inclusiv E. coli producător de ESBL, Klebsiella, Enterobacter și Salmonella spp., dar nu pe P. aeruginosa.\n\nTemocilina este considerată tratament de elecție al infecțiilor cu Pseudomonas și Acinetobacter spp. — Incorect: Temocilina nu este activă împotriva Pseudomonas sau Acinetobacter spp.\n\nBenzilpenicilina se utilizează empiric în infecțiile severe, fără confirmarea de laborator a sensibilității — Incorect: Textul precizează că, în infecțiile severe, benzilpenicilinele nu trebuie utilizate empiric fără confirmarea de laborator a sensibilității, din cauza creșterii rezistenței.\n\nTemocilina este activă doar pe bacterii Gram-negative, inclusiv multe producătoare de ESBL, și favorizează mai puțin infecția cu C. difficile — Corect: Temocilina este activă doar pe Gram-negativi, inclusiv multe tulpini producătoare de ESBL, favorizează mai puțin infecția cu C. difficile și este folosită pentru a proteja carbapenemele.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 163, Terapiile antibiotice — Penicilinele (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    163
   ],
   "pdfPages": [
    17
   ],
   "section": "Terapiile antibiotice — Penicilinele"
  },
  "learningObjective": "Diferențierea spectrului Gram-negativ al penicilinelor mai puțin cunoscute (pivmecilinam, temocilină, ticarcilină) și a regulii de utilizare a benzilpenicilinei în infecțiile severe.",
  "optionRationales": [
   "Ticarcilina este activă împotriva infecțiilor cu Pseudomonas, la fel ca piperacilina în combinație cu tazobactam.",
   "Pivmecilinamul acționează pe Gram-negativi, inclusiv E. coli producător de ESBL, Klebsiella, Enterobacter și Salmonella spp., dar nu pe P. aeruginosa.",
   "Temocilina nu este activă împotriva Pseudomonas sau Acinetobacter spp.",
   "Textul precizează că, în infecțiile severe, benzilpenicilinele nu trebuie utilizate empiric fără confirmarea de laborator a sensibilității, din cauza creșterii rezistenței.",
   "Temocilina este activă doar pe Gram-negativi, inclusiv multe tulpini producătoare de ESBL, favorizează mai puțin infecția cu C. difficile și este folosită pentru a proteja carbapenemele."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează spectrul anti-Pseudomonas al ticarcilinei și temocilinei și contrazic regula neintuitivă că benzilpenicilina nu se folosește empiric în infecțiile severe."
  },
  "textbookExpressions": [
   "Pivmecilina",
   "Temocilina"
  ]
 },
 {
  "id": "sepsis-adv-010",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Care dintre următoarele mecanisme de rezistență antibiotică sau de evitare a acesteia sunt corect descrise?",
  "options": [
   "Amikacina este mai rezistentă decât gentamicina la enzimele bacteriene care modifică aminoglicozidele prin fosforilare, adenilare sau acetilare",
   "Tigeciclina rămâne activă pe numeroase organisme rezistente la tetraciclină deoarece evită pompele de eflux bacterian",
   "Eșecul eradicării nazale a MRSA cu mupirocin se poate datora enzimei FosA codate plasmidic",
   "ESBL conferă rezistență la majoritatea β-lactaminelor, inclusiv peniciline, cefalosporine și aztreonam",
   "Rezistența la fosfomicină a unor bacterii Gram-negative se datorează enzimei MupA"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Amikacina este mai rezistentă decât gentamicina la enzimele bacteriene care modifică aminoglicozidele prin fosforilare, adenilare sau acetilare — Corect: Amikacina are spectru similar gentamicinei, dar este mai rezistentă la enzimele care modifică aminoglicozidele (fosforilare, adenilare sau acetilare), produse mai ales de Enterobacteriile producătoare de ESBL.\n\nTigeciclina rămâne activă pe numeroase organisme rezistente la tetraciclină deoarece evită pompele de eflux bacterian — Corect: Tigeciclina este activă împotriva a numeroase organisme rezistente la tetraciclină deoarece evită pompele de eflux bacterian.\n\nEșecul eradicării nazale a MRSA cu mupirocin se poate datora enzimei FosA codate plasmidic — Incorect: Rezistența MRSA la mupirocin este datorată MupA codată plasmidic; FosA este enzima care distruge fosfomicina.\n\nESBL conferă rezistență la majoritatea β-lactaminelor, inclusiv peniciline, cefalosporine și aztreonam — Corect: Textul precizează că ESBL conferă rezistență la majoritatea antibioticelor β-lactamice, inclusiv peniciline, cefalosporine și aztreonam.\n\nRezistența la fosfomicină a unor bacterii Gram-negative se datorează enzimei MupA — Incorect: Fosfomicina este distrusă de enzima FosA produsă de alte bacterii Gram-negative; MupA privește rezistența la mupirocin.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 167, 164, 165, 166, Terapiile antibiotice — Aminoglicozidele; Tetraciclinele; Fosfomicina; Enterobacterii producătoare de β-lactamază cu spectru extins (pagini PDF: 21, 18, 19, 20).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    167,
    164,
    165,
    166
   ],
   "pdfPages": [
    21,
    18,
    19,
    20
   ],
   "section": "Terapiile antibiotice — Aminoglicozidele; Tetraciclinele; Fosfomicina; Enterobacterii producătoare de β-lactamază cu spectru extins"
  },
  "learningObjective": "Asocierea corectă a fiecărui antibiotic cu mecanismul de rezistență relevant sau cu proprietatea care îi permite să evite rezistența.",
  "optionRationales": [
   "Amikacina are spectru similar gentamicinei, dar este mai rezistentă la enzimele care modifică aminoglicozidele (fosforilare, adenilare sau acetilare), produse mai ales de Enterobacteriile producătoare de ESBL.",
   "Tigeciclina este activă împotriva a numeroase organisme rezistente la tetraciclină deoarece evită pompele de eflux bacterian.",
   "Rezistența MRSA la mupirocin este datorată MupA codată plasmidic; FosA este enzima care distruge fosfomicina.",
   "Textul precizează că ESBL conferă rezistență la majoritatea antibioticelor β-lactamice, inclusiv peniciline, cefalosporine și aztreonam.",
   "Fosfomicina este distrusă de enzima FosA produsă de alte bacterii Gram-negative; MupA privește rezistența la mupirocin."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele două enzime de rezistență (FosA și MupA) sunt interschimbate între antibioticele lor, iar celelalte opțiuni cer detalii de mecanism din patru clase diferite."
  },
  "textbookExpressions": [
   "FosA",
   "inclusiv peniciline, cefalosporine şi aztreonam"
  ]
 },
 {
  "id": "sepsis-adv-011",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Sepsisul, în datele epidemiologice și de urgență din capitol:",
  "options": [
   "Se estimează că 49 de milioane de oameni dezvoltă anual sepsis și 11 milioane decedează din cauza acestuia",
   "Antibioterapia empirică trebuie prescrisă în interval de o oră de la prezentare și revizuită la 72 de ore, când devin disponibile rezultatele antibiogramei",
   "Abordarea cazurilor se bazează pe pachetul de îngrijiri Sepsis Six",
   "Diagnosticul de sepsis se rezervă infecțiilor localizate fără disfuncție de organ",
   "Antibioterapia se temporizează până la rezultatele de laborator, pentru a evita spectrul larg inutil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se estimează că 49 de milioane de oameni dezvoltă anual sepsis și 11 milioane decedează din cauza acestuia — Corect: Cifrele 49 și 11 milioane sunt cele din deschiderea capitolului.\n\nAntibioterapia empirică trebuie prescrisă în interval de o oră de la prezentare și revizuită la 72 de ore, când devin disponibile rezultatele antibiogramei — Corect: Fereastra de o oră pentru empiric și revizuirea la 72 de ore sunt enunțate explicit.\n\nAbordarea cazurilor se bazează pe pachetul de îngrijiri Sepsis Six — Corect: Pachetul Sepsis Six structurează tratamentul și investigațiile de urgență.\n\nDiagnosticul de sepsis se rezervă infecțiilor localizate fără disfuncție de organ — Incorect: Sepsisul este rezervat răspunsului inadecvat cu disfuncție de organ, nu infecției simple.\n\nAntibioterapia se temporizează până la rezultatele de laborator, pentru a evita spectrul larg inutil — Incorect: Textul cere inițiere fără întârziere; așteptarea laboratorului este contraproductivă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 151, Introducere — Abilități clinice în infecții și sepsis (pagini PDF: 5).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    151
   ],
   "pdfPages": [
    5
   ],
   "section": "Introducere — Abilități clinice în infecții și sepsis"
  },
  "learningObjective": "Reținerea magnitudinii globale și a ferestrelor de o oră / 72 de ore, plus pachetul Sepsis Six.",
  "optionRationales": [
   "Cifrele 49 și 11 milioane sunt cele din deschiderea capitolului.",
   "Fereastra de o oră pentru empiric și revizuirea la 72 de ore sunt enunțate explicit.",
   "Pachetul Sepsis Six structurează tratamentul și investigațiile de urgență.",
   "Sepsisul este rezervat răspunsului inadecvat cu disfuncție de organ, nu infecției simple.",
   "Textul cere inițiere fără întârziere; așteptarea laboratorului este contraproductivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Combină două praguri temporale ușor de inversat (1 oră față de 72 de ore) cu o cifră epidemiologică și un pachet de îngrijiri."
  },
  "textbookExpressions": [
   "49 de milioane",
   "Sepsis Six"
  ]
 },
 {
  "id": "sepsis-adv-012",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la definiția Sepsis-3:",
  "options": [
   "SIRS rămâne criteriul de definire a sepsisului, după revizuirea din 2001",
   "Termenul de urosepsis este preferat pentru infecția de tract urinar, pentru a uniformiza statisticile",
   "Sepsisul este o disfuncție de organ amenințătoare de viață provocată de un răspuns anormal al gazdei la infecție",
   "Biomarkerii propuși au specificitate suficientă pentru a înlocui evaluarea clinică",
   "qSOFA și NEWS 2 stabilesc singure diagnosticul de sepsis, fără evaluare ulterioară"
  ],
  "correct": [
   2
  ],
  "explanation": "SIRS rămâne criteriul de definire a sepsisului, după revizuirea din 2001 — Incorect: SIRS nu mai este utilizat pentru definirea sepsisului.\n\nTermenul de urosepsis este preferat pentru infecția de tract urinar, pentru a uniformiza statisticile — Incorect: Folosirea necorespunzătoare a termenului urosepsis pentru ITU distorsionează statisticile.\n\nSepsisul este o disfuncție de organ amenințătoare de viață provocată de un răspuns anormal al gazdei la infecție — Corect: Aceasta este definiția publicată în 2016 sub denumirea Sepsis-3.\n\nBiomarkerii propuși au specificitate suficientă pentru a înlocui evaluarea clinică — Incorect: Niciun biomarker nu are suficientă specificitate diagnostică.\n\nqSOFA și NEWS 2 stabilesc singure diagnosticul de sepsis, fără evaluare ulterioară — Incorect: qSOFA și NEWS 2 indică risc, nu pun diagnosticul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 154, Definiția (consensul Sepsis-3) (pagini PDF: 8).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    154
   ],
   "pdfPages": [
    8
   ],
   "section": "Definiția (consensul Sepsis-3)"
  },
  "learningObjective": "Separarea definiției Sepsis-3 de SIRS, de utilizarea improprie a termenului urosepsis și de instrumentele de screening.",
  "optionRationales": [
   "SIRS nu mai este utilizat pentru definirea sepsisului.",
   "Folosirea necorespunzătoare a termenului urosepsis pentru ITU distorsionează statisticile.",
   "Aceasta este definiția publicată în 2016 sub denumirea Sepsis-3.",
   "Niciun biomarker nu are suficientă specificitate diagnostică.",
   "qSOFA și NEWS 2 indică risc, nu pun diagnosticul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reînvie SIRS și transformă instrumentele de screening în teste diagnostice, contrar paragrafului Sepsis-3."
  },
  "textbookExpressions": [
   "Sepsis-3",
   "urosepsis"
  ]
 },
 {
  "id": "sepsis-adv-013",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "În recunoașterea riscului de sepsis în Marea Britanie sunt adevărate:",
  "options": [
   "Colegiul Regal al Medicilor recomandă screening la o valoare NEWS 2 de 5 sau mai mare",
   "Nici qSOFA, nici NEWS 2 nu au rol diagnostic; indică doar risc ridicat și necesitatea evaluării",
   "Nivelul lactatului are valoare prognostică; o valoare ridicată este semn de insuficiență organică, chiar și la pacienții care aparent evoluează bine",
   "Stopul cardiac apare de regulă fără alterări fiziologice prealabile, scorul NEWS 2 fiind astfel superfluu",
   "Diagnosticul se amână până la rezultatele de laborator complete, pentru a crește specificitatea"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Colegiul Regal al Medicilor recomandă screening la o valoare NEWS 2 de 5 sau mai mare — Corect: Pragul NEWS 2 ≥5 este recomandarea citată pentru risc ridicat.\n\nNici qSOFA, nici NEWS 2 nu au rol diagnostic; indică doar risc ridicat și necesitatea evaluării — Corect: Textul precizează explicit absența rolului diagnostic al ambelor scoruri.\n\nNivelul lactatului are valoare prognostică; o valoare ridicată este semn de insuficiență organică, chiar și la pacienții care aparent evoluează bine — Corect: Lactatul POC nu trebuie ignorat, chiar dacă pacientul pare stabil.\n\nStopul cardiac apare de regulă fără alterări fiziologice prealabile, scorul NEWS 2 fiind astfel superfluu — Incorect: Stopul cardiac este de obicei precedat de alterări fiziologice progresive reflectate de NEWS 2.\n\nDiagnosticul se amână până la rezultatele de laborator complete, pentru a crește specificitatea — Incorect: Așteptarea laboratorului este descrisă ca fiind contraproductivă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 154, 155, Recunoașterea sepsisului — NEWS 2 și lactat (pagini PDF: 8, 9).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    154,
    155
   ],
   "pdfPages": [
    8,
    9
   ],
   "section": "Recunoașterea sepsisului — NEWS 2 și lactat"
  },
  "learningObjective": "Contrastarea screeningului NEWS 2 / qSOFA cu valoarea prognostică a lactatului la patul bolnavului.",
  "optionRationales": [
   "Pragul NEWS 2 ≥5 este recomandarea citată pentru risc ridicat.",
   "Textul precizează explicit absența rolului diagnostic al ambelor scoruri.",
   "Lactatul POC nu trebuie ignorat, chiar dacă pacientul pare stabil.",
   "Stopul cardiac este de obicei precedat de alterări fiziologice progresive reflectate de NEWS 2.",
   "Așteptarea laboratorului este descrisă ca fiind contraproductivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii anulează valoarea prognostică a lactatului la pacientul „aparent bine” și transformă screeningul în diagnostic."
  },
  "textbookExpressions": [
   "NEWS 2",
   "valoare prognostică"
  ]
 },
 {
  "id": "sepsis-adv-014",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Grupele cu risc crescut de a dezvolta sepsis includ:",
  "options": [
   "Vârstnicii peste 65 de ani și nou-născuții",
   "Pacienții cu sepsis în antecedente",
   "Pacienții cu HIV, asplenism, ciroză sau boli autoimune, precum și cei pe corticoizi sistemici",
   "Pacienții cu dispozitive medicale permanente, gravidele și dependenții de alcool sau droguri intravenoase",
   "Adulții tineri sănătoși, fără factor de gazdă identificat, reprezintă grupul cu cea mai mare incidență citată"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Vârstnicii peste 65 de ani și nou-născuții — Corect: Cele două extreme de vârstă sunt enumerate explicit.\n\nPacienții cu sepsis în antecedente — Corect: Antecedentele de sepsis figurează printre factorii de risc.\n\nPacienții cu HIV, asplenism, ciroză sau boli autoimune, precum și cei pe corticoizi sistemici — Corect: Imunosupresia medicală și cea iatrogenă (inclusiv corticoizi) sunt ambele listate.\n\nPacienții cu dispozitive medicale permanente, gravidele și dependenții de alcool sau droguri intravenoase — Corect: Dispozitivele, sarcina și dependențele sunt ultimele grupe din listă.\n\nAdulții tineri sănătoși, fără factor de gazdă identificat, reprezintă grupul cu cea mai mare incidență citată — Incorect: Textul leagă progresia de virulență, încărcătură, sediu și răspunsul gazdei; adulții tineri sănătoși nu sunt grupul de risc citat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 155, Recunoașterea sepsisului — Grupele aflate la risc (pagini PDF: 9).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    155
   ],
   "pdfPages": [
    9
   ],
   "section": "Recunoașterea sepsisului — Grupele aflate la risc"
  },
  "learningObjective": "Recunoașterea listei de gazde vulnerabile, distinct de virulența patogenului.",
  "optionRationales": [
   "Cele două extreme de vârstă sunt enumerate explicit.",
   "Antecedentele de sepsis figurează printre factorii de risc.",
   "Imunosupresia medicală și cea iatrogenă (inclusiv corticoizi) sunt ambele listate.",
   "Dispozitivele, sarcina și dependențele sunt ultimele grupe din listă.",
   "Textul leagă progresia de virulență, încărcătură, sediu și răspunsul gazdei; adulții tineri sănătoși nu sunt grupul de risc citat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru categorii reale trebuie ținute împreună; distractorul inversează ierarhia de risc către gazda sănătoasă."
  },
  "textbookExpressions": [
   ">65 de ani",
   "gravidele"
  ]
 },
 {
  "id": "sepsis-adv-015",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "La un pacient cu leziune a măduvei spinării, o infecție situată sub nivelul leziunii nervoase se manifestă de regulă prin:",
  "options": [
   "Semne inflamatorii locale floride, identice celor de deasupra leziunii",
   "Febră înaltă cu leucocitoză ca semn constant de însoțire",
   "Meningism și redoare de ceafă ca semne-ghid",
   "Semne și simptome de disautonomie, mai degrabă decât de infecție",
   "Absența manifestărilor, motiv pentru care screeningul este inutil"
  ],
  "correct": [
   3
  ],
  "explanation": "Semne inflamatorii locale floride, identice celor de deasupra leziunii — Incorect: Sub nivelul leziunii, semnele clasice de infecție sunt înlocuite de disautonomie.\n\nFebră înaltă cu leucocitoză ca semn constant de însoțire — Incorect: Textul nu cere febră și leucocitoză ca trăsături definitorii în acest context.\n\nMeningism și redoare de ceafă ca semne-ghid — Incorect: Meningismul nu este semnul descris pentru infecția sublezională.\n\nSemne și simptome de disautonomie, mai degrabă decât de infecție — Corect: Aceasta este formularea din paragraf.\n\nAbsența manifestărilor, motiv pentru care screeningul este inutil — Incorect: Screeningul și pachetele de îngrijire a dispozitivelor rămân esențiale la imobilizați.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 157, Sepsisul în situații speciale — Pacienții imobilizați (pagini PDF: 11).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    157
   ],
   "pdfPages": [
    11
   ],
   "section": "Sepsisul în situații speciale — Pacienții imobilizați"
  },
  "learningObjective": "Recunoașterea disautonomiei ca mască a infecției sub nivelul leziunii medulare.",
  "optionRationales": [
   "Sub nivelul leziunii, semnele clasice de infecție sunt înlocuite de disautonomie.",
   "Textul nu cere febră și leucocitoză ca trăsături definitorii în acest context.",
   "Meningismul nu este semnul descris pentru infecția sublezională.",
   "Aceasta este formularea din paragraf.",
   "Screeningul și pachetele de îngrijire a dispozitivelor rămân esențiale la imobilizați."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vigneta inversează așteptarea de semne inflamatorii floride; răspunsul corect este contraintuitiv (disautonomie)."
  },
  "textbookExpressions": [
   "disautonomie",
   "măduvei spinării"
  ]
 },
 {
  "id": "sepsis-adv-016",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Sepsisul la neutropenici și la pacienții imobilizați:",
  "options": [
   "La hemato-oncologici, după chimioterapie, riscul crescut de infecții cu bacil piocianic motivează piperacilină/tazobactam, cu sau fără un aminoglicozid",
   "La imobilizați, cel mai mare risc îl reprezintă dispozitivele (catetere venoase centrale, urinare și sonde endotraheale)",
   "Escarele se previn cu saltele potrivite și rotirea periodică a pacientului",
   "Antibioterapia empirică a neutropenicului se limitează la un glicopeptid, Pseudomonas fiind neimplicat",
   "La imobilizați, dispozitivele medicale reduc riscul de organisme multirezistente și pot fi ignorate"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "La hemato-oncologici, după chimioterapie, riscul crescut de infecții cu bacil piocianic motivează piperacilină/tazobactam, cu sau fără un aminoglicozid — Corect: Regimul tazocin ± aminoglicozid este cel citat pentru riscul de piocianic.\n\nLa imobilizați, cel mai mare risc îl reprezintă dispozitivele (catetere venoase centrale, urinare și sonde endotraheale) — Corect: Cele trei dispozitive sunt exemplele de risc maxim.\n\nEscarele se previn cu saltele potrivite și rotirea periodică a pacientului — Corect: Prevenția escarilor prin saltea și rotație este enunțată explicit.\n\nAntibioterapia empirică a neutropenicului se limitează la un glicopeptid, Pseudomonas fiind neimplicat — Incorect: Spectrul empiric vizează Pseudomonas, nu un glicopeptid izolat.\n\nLa imobilizați, dispozitivele medicale reduc riscul de organisme multirezistente și pot fi ignorate — Incorect: Dispozitivele cresc, nu reduc, riscul de organisme greu de tratat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 157, Sepsisul în situații speciale — Neutropenici; Imobilizați (pagini PDF: 11).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    157
   ],
   "pdfPages": [
    11
   ],
   "section": "Sepsisul în situații speciale — Neutropenici; Imobilizați"
  },
  "learningObjective": "Asocierea piperacilină/tazobactam ± aminoglicozid cu riscul de Pseudomonas și a dispozitivelor cu infecția nosocomială a imobilizatului.",
  "optionRationales": [
   "Regimul tazocin ± aminoglicozid este cel citat pentru riscul de piocianic.",
   "Cele trei dispozitive sunt exemplele de risc maxim.",
   "Prevenția escarilor prin saltea și rotație este enunțată explicit.",
   "Spectrul empiric vizează Pseudomonas, nu un glicopeptid izolat.",
   "Dispozitivele cresc, nu reduc, riscul de organisme greu de tratat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută empiricul neutropenic de pe piocianic pe glicopeptid și neagă rolul dispozitivelor la imobilizat."
  },
  "textbookExpressions": [
   "piperacilină/ tazobactam",
   "bacil piocianic"
  ]
 },
 {
  "id": "sepsis-adv-017",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la Sepsis Six și la țintele hemodinamice din campania Surviving Sepsis:",
  "options": [
   "Sepsis Six include oxigen pentru SpO2 >94%, hemoculturi, antibiotic cu spectru larg, lichide rapid, măsurarea lactatului și monitorizarea diurezei orare",
   "Se menține tensiunea arterială medie la 65 mmHg",
   "Resuscitarea este ghidată spre normalizarea lactatului la pacienții cu valori ridicate",
   "Albumina umană este interzisă, chiar și când sunt necesare volume mari de lichid",
   "Prima treaptă este vasopresorul, lichidele fiind rezervate șocului refractar"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sepsis Six include oxigen pentru SpO2 >94%, hemoculturi, antibiotic cu spectru larg, lichide rapid, măsurarea lactatului și monitorizarea diurezei orare — Corect: Cele șase componente sunt lista din Cadranul 8.4.\n\nSe menține tensiunea arterială medie la 65 mmHg — Corect: PAM 65 mmHg este ținta din Cadranul 8.5.\n\nResuscitarea este ghidată spre normalizarea lactatului la pacienții cu valori ridicate — Corect: Ghidarea după lactat este o recomandare principală.\n\nAlbumina umană este interzisă, chiar și când sunt necesare volume mari de lichid — Incorect: Albumina poate fi luată în calcul când sunt necesare volume mari.\n\nPrima treaptă este vasopresorul, lichidele fiind rezervate șocului refractar — Incorect: Resuscitarea volemică este primul pas pentru menținerea perfuziei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 157, Cadranul 8.4 Sepsis Six; Cadranul 8.5 Surviving Sepsis (pagini PDF: 11).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    157
   ],
   "pdfPages": [
    11
   ],
   "section": "Cadranul 8.4 Sepsis Six; Cadranul 8.5 Surviving Sepsis"
  },
  "learningObjective": "Reținerea celor șase elemente ale pachetului și a țintelor PAM 65 mmHg și lactat, distinct de alegerea fluidului de primă intenție.",
  "optionRationales": [
   "Cele șase componente sunt lista din Cadranul 8.4.",
   "PAM 65 mmHg este ținta din Cadranul 8.5.",
   "Ghidarea după lactat este o recomandare principală.",
   "Albumina poate fi luată în calcul când sunt necesare volume mari.",
   "Resuscitarea volemică este primul pas pentru menținerea perfuziei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează locul albuminei și al vasopresorului față de cristaloide, două nuanțe din același cadran."
  },
  "textbookExpressions": [
   "Sp02 >94%",
   "65 mmHg"
  ]
 },
 {
  "id": "sepsis-adv-018",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "La o femeie cu sepsis fără focar evident, examinarea genitală trebuie să caute, printre altele:",
  "options": [
   "Tampoane rămase în vagin, care pot provoca sindromul șocului toxic",
   "Orhiepididimită, ca focar tipic feminin",
   "Sensibilitate limitată la flancul stâng, patognomonică pentru pielonefrită",
   "Suflu nou, care exclude un focar pelvin",
   "Ulcere plantare, care fac inutilă examinarea pelvină"
  ],
  "correct": [
   0
  ],
  "explanation": "Tampoane rămase în vagin, care pot provoca sindromul șocului toxic — Corect: Textul cere luarea în considerare a tampoanelor rămase, cauză de sindrom al șocului toxic.\n\nOrhiepididimită, ca focar tipic feminin — Incorect: Orhiepididimita este semnul descris la bărbați.\n\nSensibilitate limitată la flancul stâng, patognomonică pentru pielonefrită — Incorect: Sensibilitatea în flancul stâng este comună în diverticulită; pielonefrita este legată de sensibilitatea în flancuri, nu ca semn genital feminin.\n\nSuflu nou, care exclude un focar pelvin — Incorect: Un suflu nou poate indica endocardită, nu exclude un focar pelvin.\n\nUlcere plantare, care fac inutilă examinarea pelvină — Incorect: Ulcerele de picioare nu înlocuiesc examinarea genitală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 153, Examenul obiectiv — Examinarea genitală (pagini PDF: 7).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    153
   ],
   "pdfPages": [
    7
   ],
   "section": "Examenul obiectiv — Examinarea genitală"
  },
  "learningObjective": "Identificarea tamponului vaginal reținut ca cauză de sindrom al șocului toxic, distinct de focarele masculine sau abdominale.",
  "optionRationales": [
   "Textul cere luarea în considerare a tampoanelor rămase, cauză de sindrom al șocului toxic.",
   "Orhiepididimita este semnul descris la bărbați.",
   "Sensibilitatea în flancul stâng este comună în diverticulită; pielonefrita este legată de sensibilitatea în flancuri, nu ca semn genital feminin.",
   "Un suflu nou poate indica endocardită, nu exclude un focar pelvin.",
   "Ulcerele de picioare nu înlocuiesc examinarea genitală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reciclează semne reale din aceeași figură (orhiepididimită, diverticulită, suflu, ulcere) atribuite greșit contextului feminin."
  },
  "textbookExpressions": [
   "tampoane rămase",
   "şocului toxic"
  ]
 },
 {
  "id": "sepsis-adv-019",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Controlul sursei în sepsis poate include:",
  "options": [
   "Stent biliar, cateter urinar sau nefrostomă în obstrucțiile biliare și urinare",
   "Drenajul colecțiilor intraabdominale, al empiemului și al colecțiilor paraspinale",
   "Lavaj artroscopic în infecția intraarticulară și debridare cu ablația endoprotezei când aceasta este infectată",
   "Valvectomie tot mai folosită în endocardita acută cu S. aureus și debridare în fasceita necrozantă sau gangrena Fournier",
   "Menținerea cateterelor blocate, deoarece îndepărtarea agravează bacteriemia"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Stent biliar, cateter urinar sau nefrostomă în obstrucțiile biliare și urinare — Corect: Decompresiunea căilor biliare și urinare este exemplul dat.\n\nDrenajul colecțiilor intraabdominale, al empiemului și al colecțiilor paraspinale — Corect: Cele trei tipuri de colecții sunt enumerate.\n\nLavaj artroscopic în infecția intraarticulară și debridare cu ablația endoprotezei când aceasta este infectată — Corect: Conduita articulară nativă versus protezată este distinsă explicit.\n\nValvectomie tot mai folosită în endocardita acută cu S. aureus și debridare în fasceita necrozantă sau gangrena Fournier — Corect: Valvectomia și debridarea din fasceită/Fournier completează lista.\n\nMenținerea cateterelor blocate, deoarece îndepărtarea agravează bacteriemia — Incorect: Cateterele infectate, mai ales blocate, trebuie îndepărtate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 158, Controlul sursei (pagini PDF: 12).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    158
   ],
   "pdfPages": [
    12
   ],
   "section": "Controlul sursei"
  },
  "learningObjective": "Recunoașterea manevrelor anatomice de control al sursei, de la obstrucție și colecții până la valvă și fascie.",
  "optionRationales": [
   "Decompresiunea căilor biliare și urinare este exemplul dat.",
   "Cele trei tipuri de colecții sunt enumerate.",
   "Conduita articulară nativă versus protezată este distinsă explicit.",
   "Valvectomia și debridarea din fasceită/Fournier completează lista.",
   "Cateterele infectate, mai ales blocate, trebuie îndepărtate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru manevre reale din lista de control al sursei; distractorul inversează regula cateterului blocat."
  },
  "textbookExpressions": [
   "nefrostomă",
   "gangrenei Fournier"
  ]
 },
 {
  "id": "sepsis-adv-020",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Spectroscopia de masă MALDI-TOF se caracterizează prin:",
  "options": [
   "Tulpinile sunt fixate într-o matrice fragmentată, fiecare fragment proteic generând un profil spectral unic de specie",
   "Uneori genele de rezistență sunt detectate: MRSA produce un profil spectral diferit de MSSA",
   "Oferă o antibiogramă fenotipică completă, înlocuind testarea de susceptibilitate",
   "Identifică bacteriile prin secvențierea regiunilor hipervariabile ale ARNr 16S",
   "Necesită pozitivarea prealabilă a hemoculturii timp de 48 de ore, ca PCR 16S"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Tulpinile sunt fixate într-o matrice fragmentată, fiecare fragment proteic generând un profil spectral unic de specie — Corect: Mecanismul matrice–profil spectral este cel din cadran.\n\nUneori genele de rezistență sunt detectate: MRSA produce un profil spectral diferit de MSSA — Corect: Exemplul MRSA versus MSSA este dat explicit.\n\nOferă o antibiogramă fenotipică completă, înlocuind testarea de susceptibilitate — Incorect: MALDI-TOF nu înlocuiește antibiograma; doar uneori detectează gene de rezistență.\n\nIdentifică bacteriile prin secvențierea regiunilor hipervariabile ale ARNr 16S — Incorect: Secvențierea 16S aparține PCR, nu MALDI-TOF.\n\nNecesită pozitivarea prealabilă a hemoculturii timp de 48 de ore, ca PCR 16S — Incorect: Avantajul metodelor moleculare este tocmai identificarea fără a aștepta cultura clasică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 158, Cadranul 8.6 — MALDI-TOF (pagini PDF: 12).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    158
   ],
   "pdfPages": [
    12
   ],
   "section": "Cadranul 8.6 — MALDI-TOF"
  },
  "learningObjective": "Diferențierea profilului proteic MALDI-TOF de PCR 16S și recunoașterea distincției spectrale MRSA/MSSA.",
  "optionRationales": [
   "Mecanismul matrice–profil spectral este cel din cadran.",
   "Exemplul MRSA versus MSSA este dat explicit.",
   "MALDI-TOF nu înlocuiește antibiograma; doar uneori detectează gene de rezistență.",
   "Secvențierea 16S aparține PCR, nu MALDI-TOF.",
   "Avantajul metodelor moleculare este tocmai identificarea fără a aștepta cultura clasică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie MALDI-TOF proprietățile PCR 16S (secvențiere, absența antibiogramei inversată) din același cadran."
  },
  "textbookExpressions": [
   "MALDI-TOF",
   "profil spectral"
  ]
 },
 {
  "id": "sepsis-adv-021",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Obiectivele CQUIN și alegerea antibioterapiei empirice în NHS:",
  "options": [
   "Indicatorii vizează reducerea prescrierii de antibiotice, mai ales a carbapenemelor și a piperacilină-tazobactamului, și revizuirea la 72 de ore",
   "Rezultatele microbiologice anterioare, cum sunt colonizările cu Enterobacteriacee producătoare de ESBL, sunt utile în alegerea empiricului",
   "Parametrii de ales includ calea, frecvența, durata, toxicitatea, nivelurile terapeutice (gentamicină sau amikacină) și ajustarea hepatică/renală",
   "Politica empirică este identică în toate spitalele, prevalența locală a rezistenței neinfluențând schema",
   "Terapia adjuvantă (rifampicină sau acid fusidic) este inutilă în infecția severă cu S. aureus"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Indicatorii vizează reducerea prescrierii de antibiotice, mai ales a carbapenemelor și a piperacilină-tazobactamului, și revizuirea la 72 de ore — Corect: Cele două clase vizate și revizuirea la 72 de ore sunt KPI-urile citate.\n\nRezultatele microbiologice anterioare, cum sunt colonizările cu Enterobacteriacee producătoare de ESBL, sunt utile în alegerea empiricului — Corect: Colonizarea ESBL anterioară poate justifica o carbapenemă.\n\nParametrii de ales includ calea, frecvența, durata, toxicitatea, nivelurile terapeutice (gentamicină sau amikacină) și ajustarea hepatică/renală — Corect: Lista de parametri (inclusiv niveluri de aminoglicozid) este cea din paragraf.\n\nPolitica empirică este identică în toate spitalele, prevalența locală a rezistenței neinfluențând schema — Incorect: Politica diferă după prevalența locală a rezistenței.\n\nTerapia adjuvantă (rifampicină sau acid fusidic) este inutilă în infecția severă cu S. aureus — Incorect: Textul menționează rifampicina sau acidul fusidic ca terapie adjuvantă când este necesar.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 159, Obiective specifice în Marea Britanie; Antibioterapia empirică (pagini PDF: 13).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    159
   ],
   "pdfPages": [
    13
   ],
   "section": "Obiective specifice în Marea Britanie; Antibioterapia empirică"
  },
  "learningObjective": "Corelarea KPI-urilor CQUIN (carbapeneme, tazocin, 72 de ore) cu rolul colonizării ESBL și al parametrilor de prescriere.",
  "optionRationales": [
   "Cele două clase vizate și revizuirea la 72 de ore sunt KPI-urile citate.",
   "Colonizarea ESBL anterioară poate justifica o carbapenemă.",
   "Lista de parametri (inclusiv niveluri de aminoglicozid) este cea din paragraf.",
   "Politica diferă după prevalența locală a rezistenței.",
   "Textul menționează rifampicina sau acidul fusidic ca terapie adjuvantă când este necesar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii anulează două nuanțe de stewardship (ecologia locală, adjuvantul antistafilococic) din același paragraf."
  },
  "textbookExpressions": [
   "CQUIN",
   "piperacilina-tazobactamului"
  ]
 },
 {
  "id": "sepsis-adv-022",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Serviciile de antibioterapie parenterală în ambulatoriu (OPAT):",
  "options": [
   "Exemple de antibiotice în doză unică zilnică sunt ceftriaxona, ertapenemul, amikacina, teicoplanina și daptomicina",
   "Pentru tratament peste 7 zile se preferă un cateter Hickman sau un PICC",
   "Utilizatorii de droguri intravenoase și pacienții cu afecțiuni psihiatrice severe nu sunt eligibili",
   "Hemograma, ureea, electroliții, CRP și probele hepatice se monitorizează cel puțin săptămânal",
   "OPAT este rezervat doar celulitei, endocardita și osteomielita fiind excluse după stabilizare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Exemple de antibiotice în doză unică zilnică sunt ceftriaxona, ertapenemul, amikacina, teicoplanina și daptomicina — Corect: Cele cinci exemple de doză unică zilnică sunt lista din text.\n\nPentru tratament peste 7 zile se preferă un cateter Hickman sau un PICC — Corect: Pragul >7 zile pentru Hickman/PICC este explicit.\n\nUtilizatorii de droguri intravenoase și pacienții cu afecțiuni psihiatrice severe nu sunt eligibili — Corect: Non-complianța (IVDU, psihiatrie severă) exclude OPAT.\n\nHemograma, ureea, electroliții, CRP și probele hepatice se monitorizează cel puțin săptămânal — Corect: Monitorizarea săptămânală a pachetului de analize este cerută.\n\nOPAT este rezervat doar celulitei, endocardita și osteomielita fiind excluse după stabilizare — Incorect: După stabilizare, osteomielita, endocardita, empiemul și abcesele pot fi potrivite.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 160, 159, Antibioterapia parenterală în ambulatoriu (pagini PDF: 14, 13).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    160,
    159
   ],
   "pdfPages": [
    14,
    13
   ],
   "section": "Antibioterapia parenterală în ambulatoriu"
  },
  "learningObjective": "Reținerea schemei o dată pe zi, a căii venoase de lungă durată, a ineligibilității IVDU și a monitorizării săptămânale.",
  "optionRationales": [
   "Cele cinci exemple de doză unică zilnică sunt lista din text.",
   "Pragul >7 zile pentru Hickman/PICC este explicit.",
   "Non-complianța (IVDU, psihiatrie severă) exclude OPAT.",
   "Monitorizarea săptămânală a pachetului de analize este cerută.",
   "După stabilizare, osteomielita, endocardita, empiemul și abcesele pot fi potrivite."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru reguli operaționale distincte; distractorul restrânge greșit indicațiile pe care textul tocmai le lărgește."
  },
  "textbookExpressions": [
   "cateter Hickman",
   "daptomicina"
  ]
 },
 {
  "id": "sepsis-adv-023",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Următoarele afirmații despre alergia raportată la penicilină sunt adevărate:",
  "options": [
   "În jur de 10% din populație relatează alergie, dar valoarea reală este doar în jur de 1%",
   "În alergia de tip 1 (IgE-mediată) și în alte alergii severe trebuie evitate și cefalosporinele și carbapenemele",
   "În alergia non-severă (erupție blândă) cefalosporinele, carbapenemele și monobactamii pot fi utilizați cu prudență",
   "Desensibilizarea cu doze progresive este imposibilă odată ce alergia a fost declarată",
   "Toți pacienții care declară alergie trebuie îndrumați de rutină către alergologie, fără selecție"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În jur de 10% din populație relatează alergie, dar valoarea reală este doar în jur de 1% — Corect: Raportul 10% versus 1% este cifra din paragraf.\n\nÎn alergia de tip 1 (IgE-mediată) și în alte alergii severe trebuie evitate și cefalosporinele și carbapenemele — Corect: Evitarea cefalosporinelor și carbapenemelor în tipul 1 este explicită.\n\nÎn alergia non-severă (erupție blândă) cefalosporinele, carbapenemele și monobactamii pot fi utilizați cu prudență — Corect: Utilizarea prudentă în erupția blândă non-IgE este permisă.\n\nDesensibilizarea cu doze progresive este imposibilă odată ce alergia a fost declarată — Incorect: Desensibilizarea cu doze progresive este descrisă ca posibilă (exemplu cotrimoxazol).\n\nToți pacienții care declară alergie trebuie îndrumați de rutină către alergologie, fără selecție — Incorect: Doar pacienții selectați (plurialergici, fără alternativă, gold-standard, etc.) se îndrumă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 160, Evaluarea riscului alergic (pagini PDF: 14).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    160
   ],
   "pdfPages": [
    14
   ],
   "section": "Evaluarea riscului alergic"
  },
  "learningObjective": "Contrastarea prevalenței declarate față de cea reală și a conduitei în alergia severă versus non-severă.",
  "optionRationales": [
   "Raportul 10% versus 1% este cifra din paragraf.",
   "Evitarea cefalosporinelor și carbapenemelor în tipul 1 este explicită.",
   "Utilizarea prudentă în erupția blândă non-IgE este permisă.",
   "Desensibilizarea cu doze progresive este descrisă ca posibilă (exemplu cotrimoxazol).",
   "Doar pacienții selectați (plurialergici, fără alternativă, gold-standard, etc.) se îndrumă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă selecția către alergologie și desensibilizarea posibilă în interdicții absolute."
  },
  "textbookExpressions": [
   "10% din populaţie",
   "doar în jur de 1%"
  ]
 },
 {
  "id": "sepsis-adv-024",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "Profilaxia antibiotică perioperatorie, pentru majoritatea intervențiilor:",
  "options": [
   "O doză unică la inducție este suficientă, iar durata nu trebuie să depășească 24 de ore postprocedural",
   "Se prelungește de rutină 7 zile, pentru a acoperi bacteriemia de procedură",
   "Este identică, ca durată, profilaxiei meningococice de 2 zile",
   "Se omite în chirurgia colonului, unde riscul infecțios este neglijabil",
   "Gargara cu clorhexidină înlocuiește antibioticul la pacienții cu proteze valvulare"
  ],
  "correct": [
   0
  ],
  "explanation": "O doză unică la inducție este suficientă, iar durata nu trebuie să depășească 24 de ore postprocedural — Corect: Doza unică la inducție și limita de 24 de ore sunt enunțate pentru majoritatea operațiilor.\n\nSe prelungește de rutină 7 zile, pentru a acoperi bacteriemia de procedură — Incorect: Prelungirea de rutină la 7 zile contrazice regula de 24 de ore.\n\nEste identică, ca durată, profilaxiei meningococice de 2 zile — Incorect: Regimul de 2 zile aparține profilaxiei contacților de meningococ, nu chirurgiei.\n\nSe omite în chirurgia colonului, unde riscul infecțios este neglijabil — Incorect: Chirurgia colonului este tocmai un exemplu în care profilaxia rămâne recomandată.\n\nGargara cu clorhexidină înlocuiește antibioticul la pacienții cu proteze valvulare — Incorect: NICE nu recomandă profilaxie antibiotică sau clorhexidină pentru endocardită la proceduri dentare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 161, Chemoprofilaxia antibiotică (pagini PDF: 15).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    161
   ],
   "pdfPages": [
    15
   ],
   "section": "Chemoprofilaxia antibiotică"
  },
  "learningObjective": "Reținerea regulii dozei unice la inducție și a plafonului de 24 de ore, distinct de indicațiile speciale (colon, transplant).",
  "optionRationales": [
   "Doza unică la inducție și limita de 24 de ore sunt enunțate pentru majoritatea operațiilor.",
   "Prelungirea de rutină la 7 zile contrazice regula de 24 de ore.",
   "Regimul de 2 zile aparține profilaxiei contacților de meningococ, nu chirurgiei.",
   "Chirurgia colonului este tocmai un exemplu în care profilaxia rămâne recomandată.",
   "NICE nu recomandă profilaxie antibiotică sau clorhexidină pentru endocardită la proceduri dentare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică durate din Cadranul 8.7 (2 zile, 7 zile) sau interdicția dentară asupra profilaxiei chirurgicale de 24 de ore."
  },
  "textbookExpressions": [
   "doză unică la inducţie",
   "24 de ore"
  ]
 },
 {
  "id": "sepsis-adv-025",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Penicilinele antistafilococice și reacțiile lor cutaneo-hepatice:",
  "options": [
   "Flucloxacilina rămâne alegerea de primă intenție în infecțiile severe cauzate de MSSA",
   "Amoxicilina și ampicilina produc o erupție la 90% din pacienții cu mononucleoză infecțioasă care primesc acest tratament",
   "Amoxicilina/acid clavulanic produce icter colestatic de șase ori mai frecvent decât amoxicilina, la fel de des ca flucloxacilina",
   "Flucloxacilina este inactivă pe streptococii producători de penicilinaze, motiv pentru care se evită în MSSA",
   "Icterul colestatic al co-amoxiclavului este mai rar decât al amoxicilinei simple"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Flucloxacilina rămâne alegerea de primă intenție în infecțiile severe cauzate de MSSA — Corect: Prima intenție în MSSA sever este flucloxacilina.\n\nAmoxicilina și ampicilina produc o erupție la 90% din pacienții cu mononucleoză infecțioasă care primesc acest tratament — Corect: Proporția de 90% în mononucleoză este cifra din text.\n\nAmoxicilina/acid clavulanic produce icter colestatic de șase ori mai frecvent decât amoxicilina, la fel de des ca flucloxacilina — Corect: Raportul de șase ori și echivalența cu flucloxacilina sunt enunțate.\n\nFlucloxacilina este inactivă pe streptococii producători de penicilinaze, motiv pentru care se evită în MSSA — Incorect: Flucloxacilina este folosită tocmai în infecțiile cu streptococi producători de penicilinaze și în MSSA.\n\nIcterul colestatic al co-amoxiclavului este mai rar decât al amoxicilinei simple — Incorect: Co-amoxiclavul produce icter mai frecvent, nu mai rar, decât amoxicilina.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 163, Terapiile antibiotice — Penicilinele (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    163
   ],
   "pdfPages": [
    17
   ],
   "section": "Terapiile antibiotice — Penicilinele"
  },
  "learningObjective": "Asocierea flucloxacilinei cu MSSA, a erupției din mononucleoză (90%) și a icterului colestatic de 6 ori mai frecvent al co-amoxiclavului.",
  "optionRationales": [
   "Prima intenție în MSSA sever este flucloxacilina.",
   "Proporția de 90% în mononucleoză este cifra din text.",
   "Raportul de șase ori și echivalența cu flucloxacilina sunt enunțate.",
   "Flucloxacilina este folosită tocmai în infecțiile cu streptococi producători de penicilinaze și în MSSA.",
   "Co-amoxiclavul produce icter mai frecvent, nu mai rar, decât amoxicilina."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere simultan 90% și factorul 6; distractorii inversează indicația MSSA și direcția icterului colestatic."
  },
  "textbookExpressions": [
   "90% din pacienţii",
   "de şase ori mai frecvent"
  ]
 },
 {
  "id": "sepsis-adv-026",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Avibactamul și combinația ceftazidimă/avibactam:",
  "options": [
   "Avibactamul este primul inhibitor non-β-lactamic al enzimelor β-lactamice, combinat cu ceftazidima",
   "Combinația pare neafectată de majoritatea ESBL și de unele carbapenemaze (KPC, OXA-48) ale Enterobacteriaceae",
   "Avibactamul este un inhibitor clasic de tip acid clavulanic, hidrolizat ca moleculă suicidară β-lactamică",
   "Combinația este inactivă pe ESBL, fiind rezervată streptococilor",
   "Ceftazidima/avibactam înlocuiește colistinul în toate infecțiile cu NDM"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Avibactamul este primul inhibitor non-β-lactamic al enzimelor β-lactamice, combinat cu ceftazidima — Corect: Caracterul de prim inhibitor non-β-lactamic este explicit.\n\nCombinația pare neafectată de majoritatea ESBL și de unele carbapenemaze (KPC, OXA-48) ale Enterobacteriaceae — Corect: Acoperirea ESBL și a KPC/OXA-48 este cea descrisă.\n\nAvibactamul este un inhibitor clasic de tip acid clavulanic, hidrolizat ca moleculă suicidară β-lactamică — Incorect: Inhibitorii clasici (clavulanat, sulbactam, tazobactam) sunt β-lactamici suicidari; avibactamul este non-β-lactamic.\n\nCombinația este inactivă pe ESBL, fiind rezervată streptococilor — Incorect: Textul o descrie ca neafectată de majoritatea ESBL.\n\nCeftazidima/avibactam înlocuiește colistinul în toate infecțiile cu NDM — Incorect: NDM tinde să rămână rezistent la antibioticele obișnuite, cu excepția colistinului, fosfomicinei și tigeciclinei, nu a avibactamului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 164, Combinații β-lactamice / inhibitori de β-lactamază (pagini PDF: 18).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    164
   ],
   "pdfPages": [
    18
   ],
   "section": "Combinații β-lactamice / inhibitori de β-lactamază"
  },
  "learningObjective": "Distingerea avibactamului ca prim inhibitor non-β-lactamic de inhibitorii clasici suicidari (clavulanat, tazobactam).",
  "optionRationales": [
   "Caracterul de prim inhibitor non-β-lactamic este explicit.",
   "Acoperirea ESBL și a KPC/OXA-48 este cea descrisă.",
   "Inhibitorii clasici (clavulanat, sulbactam, tazobactam) sunt β-lactamici suicidari; avibactamul este non-β-lactamic.",
   "Textul o descrie ca neafectată de majoritatea ESBL.",
   "NDM tinde să rămână rezistent la antibioticele obișnuite, cu excepția colistinului, fosfomicinei și tigeciclinei, nu a avibactamului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă avibactamul cu BLI clasici suicidari și extind spectrul asupra NDM, tratat în alt paragraf."
  },
  "textbookExpressions": [
   "Avibactam",
   "non-p-lactamic"
  ]
 },
 {
  "id": "sepsis-adv-027",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Chinolonele se caracterizează prin:",
  "options": [
   "Inhibă topoizomeraza IV și ADN-giraza, enzimele superhelixului ADN",
   "Pot produce leziuni ale tendoanelor, inclusiv ruptură, în primele 48 de ore de utilizare",
   "Utilizarea se evită în sarcină, la copii și la pacienții tratați cu corticosteroizi, dacă beneficiul nu depășește riscul",
   "Există îngrijorări privind prelungirea QT; asocierea cu alte medicamente care prelungesc QT se evită când este posibil",
   "Sunt antibioticele de primă intenție în sarcină, având profil teratogen absent"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Inhibă topoizomeraza IV și ADN-giraza, enzimele superhelixului ADN — Corect: Cele două enzime sunt țintele enunțate.\n\nPot produce leziuni ale tendoanelor, inclusiv ruptură, în primele 48 de ore de utilizare — Corect: Fereastra de 48 de ore pentru ruptură tendinoasă este explicită.\n\nUtilizarea se evită în sarcină, la copii și la pacienții tratați cu corticosteroizi, dacă beneficiul nu depășește riscul — Corect: Cele trei populații de evitat sunt listate.\n\nExistă îngrijorări privind prelungirea QT; asocierea cu alte medicamente care prelungesc QT se evită când este posibil — Corect: Prelungirea QT și interacțiunea sunt avertismentele finale.\n\nSunt antibioticele de primă intenție în sarcină, având profil teratogen absent — Incorect: Sarcina este un context de evitare, nu de primă intenție.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 164, Chinolonele (pagini PDF: 18).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    164
   ],
   "pdfPages": [
    18
   ],
   "section": "Chinolonele"
  },
  "learningObjective": "Integrarea mecanismului (girază/topoizomeraza IV) cu toxicitățile de 48 de ore, steroizi și QT.",
  "optionRationales": [
   "Cele două enzime sunt țintele enunțate.",
   "Fereastra de 48 de ore pentru ruptură tendinoasă este explicită.",
   "Cele trei populații de evitat sunt listate.",
   "Prelungirea QT și interacțiunea sunt avertismentele finale.",
   "Sarcina este un context de evitare, nu de primă intenție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru fapte din același paragraf (mecanism, 48 de ore, steroizi, QT); distractorul inversează regula din sarcină."
  },
  "textbookExpressions": [
   "primele 48 de ore",
   "intervalului QT"
  ]
 },
 {
  "id": "sepsis-adv-028",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Administrarea aminoglicozidelor, dincolo de toxicitățile clasice, include:",
  "options": [
   "Mutația m.1555A>G, asociată ototoxicității la gentamicină, apare la mai puțin de 1% din populație",
   "În majoritatea cazurilor este indicată doza unică zilnică, cu nivel seric la 6-14 ore și nomogramă pentru intervalul 24 sau 48 de ore",
   "În endocardită se prescriu doze mici la fiecare 12 ore, cu ținte pre- și post-doză diferite față de schema o dată pe zi",
   "Doza unică zilnică este interzisă, aminoglicozidele administrându-se doar în trei prize egale",
   "Mutația m.1555A>G este prezentă la peste jumătate din populație, motiv pentru care gentamicina s-a abandonat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mutația m.1555A>G, asociată ototoxicității la gentamicină, apare la mai puțin de 1% din populație — Corect: Prevalența <1% a mutației este cifra din text.\n\nÎn majoritatea cazurilor este indicată doza unică zilnică, cu nivel seric la 6-14 ore și nomogramă pentru intervalul 24 sau 48 de ore — Corect: Algoritmul 6-14 ore plus nomogramă este cel descris.\n\nÎn endocardită se prescriu doze mici la fiecare 12 ore, cu ținte pre- și post-doză diferite față de schema o dată pe zi — Corect: Schema de endocardită (12 ore, ținte diferite) este distinsă de doza unică zilnică.\n\nDoza unică zilnică este interzisă, aminoglicozidele administrându-se doar în trei prize egale — Incorect: Doza unică zilnică este, dimpotrivă, indicată în majoritatea cazurilor.\n\nMutația m.1555A>G este prezentă la peste jumătate din populație, motiv pentru care gentamicina s-a abandonat — Incorect: Mutația este rară (<1%), nu majoritară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 164, Aminoglicozidele — Dozare (pagini PDF: 18).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    164
   ],
   "pdfPages": [
    18
   ],
   "section": "Aminoglicozidele — Dozare"
  },
  "learningObjective": "Reținerea mutației mitocondriale rare, a ferestrei 6-14 ore și a schemei de 12 ore din endocardită.",
  "optionRationales": [
   "Prevalența <1% a mutației este cifra din text.",
   "Algoritmul 6-14 ore plus nomogramă este cel descris.",
   "Schema de endocardită (12 ore, ținte diferite) este distinsă de doza unică zilnică.",
   "Doza unică zilnică este, dimpotrivă, indicată în majoritatea cazurilor.",
   "Mutația este rară (<1%), nu majoritară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează prevalența mutației și interzic schema o dată pe zi pe care textul o recomandă."
  },
  "textbookExpressions": [
   "m.1555A>G",
   "6-14 ore"
  ]
 },
 {
  "id": "sepsis-adv-029",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "Teicoplanina, comparativ cu vancomicina, se caracterizează prin:",
  "options": [
   "Este mai puțin nefrotoxică și permite administrarea în doză unică zilnică sau de trei ori pe săptămână",
   "Are nefrotoxicitate superioară vancomicinei, motiv pentru care se evită",
   "Se administrează doar oral, ca vancomicina în C. difficile",
   "Nu necesită nicio monitorizare a nivelurilor serice",
   "Este inactivă pe Gram-pozitivi, fiind rezervată bacililor Gram-negativi"
  ],
  "correct": [
   0
  ],
  "explanation": "Este mai puțin nefrotoxică și permite administrarea în doză unică zilnică sau de trei ori pe săptămână — Corect: Nefrotoxicitatea mai mică și cele două scheme (zilnic sau de trei ori pe săptămână) sunt enunțate.\n\nAre nefrotoxicitate superioară vancomicinei, motiv pentru care se evită — Incorect: Relația de nefrotoxicitate este inversă.\n\nSe administrează doar oral, ca vancomicina în C. difficile — Incorect: Teicoplanina se administrează intravenos.\n\nNu necesită nicio monitorizare a nivelurilor serice — Incorect: Nivelurile pre-doză sunt monitorizate pentru eficiență.\n\nEste inactivă pe Gram-pozitivi, fiind rezervată bacililor Gram-negativi — Incorect: Glicopeptidele sunt active pe Gram-pozitivi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 164, Glicopeptidele — Teicoplanina (pagini PDF: 18).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    164
   ],
   "pdfPages": [
    18
   ],
   "section": "Glicopeptidele — Teicoplanina"
  },
  "learningObjective": "Contrastarea nefrotoxicității mai reduse și a posologiei o dată pe zi sau de trei ori pe săptămână față de vancomicină.",
  "optionRationales": [
   "Nefrotoxicitatea mai mică și cele două scheme (zilnic sau de trei ori pe săptămână) sunt enunțate.",
   "Relația de nefrotoxicitate este inversă.",
   "Teicoplanina se administrează intravenos.",
   "Nivelurile pre-doză sunt monitorizate pentru eficiență.",
   "Glicopeptidele sunt active pe Gram-pozitivi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează nefrotoxicitatea relativă și calea de administrare, două atribute alăturate în același paragraf."
  },
  "textbookExpressions": [
   "mai puţin nefrotoxică",
   "trei ori pe săptămână"
  ]
 },
 {
  "id": "sepsis-adv-030",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Lipopeptidele utilizate în infecțiile de piele și țesuturi moi:",
  "options": [
   "Daptomicina are un spectru similar vancomicinei, se administrează intravenos și este folosită în SSTI complicate, inclusiv MRSA, precum și ca alternativă în endocardită, infecții osteoarticulare și septicemii Gram-pozitive",
   "Lipopeptidele cu timp de eliminare prelungit, precum dalbavancina, sunt folosite ca tratament în doză unică pentru infecțiile tegumentare și ale țesuturilor moi",
   "Daptomicina se administrează oral, biodisponibilitatea fiind completă",
   "Dalbavancina înlocuiește carbapenemele în infecțiile cu Pseudomonas",
   "Daptomicina este inactivă pe MRSA, fiind rezervată enterobacteriilor"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Daptomicina are un spectru similar vancomicinei, se administrează intravenos și este folosită în SSTI complicate, inclusiv MRSA, precum și ca alternativă în endocardită, infecții osteoarticulare și septicemii Gram-pozitive — Corect: Spectrul similar vancomicinei și indicațiile listate sunt cele din paragraf.\n\nLipopeptidele cu timp de eliminare prelungit, precum dalbavancina, sunt folosite ca tratament în doză unică pentru infecțiile tegumentare și ale țesuturilor moi — Corect: Doza unică de dalbavancină pentru SSTI este explicită.\n\nDaptomicina se administrează oral, biodisponibilitatea fiind completă — Incorect: Daptomicina este administrată intravenos.\n\nDalbavancina înlocuiește carbapenemele în infecțiile cu Pseudomonas — Incorect: Dalbavancina vizează infecții tegumentare Gram-pozitive, nu Pseudomonas.\n\nDaptomicina este inactivă pe MRSA, fiind rezervată enterobacteriilor — Incorect: MRSA figurează printre indicațiile daptomicinei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 164, Lipopeptidele (pagini PDF: 18).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    164
   ],
   "pdfPages": [
    18
   ],
   "section": "Lipopeptidele"
  },
  "learningObjective": "Separarea daptomicinei (SSTI/MRSA, endocardită) de dalbavancina în doză unică.",
  "optionRationales": [
   "Spectrul similar vancomicinei și indicațiile listate sunt cele din paragraf.",
   "Doza unică de dalbavancină pentru SSTI este explicită.",
   "Daptomicina este administrată intravenos.",
   "Dalbavancina vizează infecții tegumentare Gram-pozitive, nu Pseudomonas.",
   "MRSA figurează printre indicațiile daptomicinei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută daptomicina pe cale orală sau pe spectru Gram-negativ, inversând clasa lipopeptidelor."
  },
  "textbookExpressions": [
   "Daptomicina",
   "dalbavancina"
  ]
 },
 {
  "id": "sepsis-adv-031",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Tedizolidul, față de linezolid:",
  "options": [
   "Este mai puțin medulotoxic și poate fi administrat în doză unică zilnică, spre deosebire de doza dublă zilnică a linezolidului",
   "A fost aprobat pentru tratamentul infecțiilor tegumentare",
   "Monitorizarea săptămânală a hemogramei rămâne necesară pentru citopenie",
   "Tedizolidul se administrează de două ori pe zi, linezolidul o dată pe zi",
   "Medulotoxicitatea superioară face tedizolidul impropriu infecțiilor tegumentare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este mai puțin medulotoxic și poate fi administrat în doză unică zilnică, spre deosebire de doza dublă zilnică a linezolidului — Corect: Comparația medulotoxicitate și doză unică versus dublă este explicită.\n\nA fost aprobat pentru tratamentul infecțiilor tegumentare — Corect: Aprobarea pentru infecții tegumentare este menționată.\n\nMonitorizarea săptămânală a hemogramei rămâne necesară pentru citopenie — Corect: Monitorizarea săptămânală a hemogramei este cerută pentru clasă.\n\nTedizolidul se administrează de două ori pe zi, linezolidul o dată pe zi — Incorect: Frecvențele sunt inversate.\n\nMedulotoxicitatea superioară face tedizolidul impropriu infecțiilor tegumentare — Incorect: Tedizolidul este tocmai mai puțin medulotoxic și aprobat pentru tegument.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 165, Oxazolidinonele — Tedizolid (pagini PDF: 19).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    165
   ],
   "pdfPages": [
    19
   ],
   "section": "Oxazolidinonele — Tedizolid"
  },
  "learningObjective": "Contrastarea posologiei o dată pe zi și a medulotoxicității mai reduse ale tedizolidului față de linezolid.",
  "optionRationales": [
   "Comparația medulotoxicitate și doză unică versus dublă este explicită.",
   "Aprobarea pentru infecții tegumentare este menționată.",
   "Monitorizarea săptămânală a hemogramei este cerută pentru clasă.",
   "Frecvențele sunt inversate.",
   "Tedizolidul este tocmai mai puțin medulotoxic și aprobat pentru tegument."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează frecvența de administrare dintre cele două oxazolidinone din același paragraf."
  },
  "textbookExpressions": [
   "Tedizolid",
   "doză unică zilnică"
  ]
 },
 {
  "id": "sepsis-adv-032",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Macrolidele în infecțiile severe și particularitățile azitromicinei:",
  "options": [
   "Nu sunt utilizate curent pentru infecții severe sau amenințătoare de viață, cum sunt endocardita sau meningita",
   "Biodisponibilitatea serică scăzută face problematică utilizarea azitromicinei în bacteriemii",
   "Prelungirea QT poate duce la torsada vârfurilor; asocierea cu alte medicamente care prelungesc QT se evită când nu este absolut necesară",
   "Azitromicina este antibioticul de primă intenție în bacteriemia meningococică, datorită nivelurilor serice ridicate",
   "Eritromicina este preferată intravenos în endocardită, fiind lipsită de iritație venoasă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Nu sunt utilizate curent pentru infecții severe sau amenințătoare de viață, cum sunt endocardita sau meningita — Corect: Endocardita și meningita sunt exemplele de infecții în care macrolidele nu se folosesc curent.\n\nBiodisponibilitatea serică scăzută face problematică utilizarea azitromicinei în bacteriemii — Corect: Nivelurile serice scăzute contraindică azitromicina în bacteriemii.\n\nPrelungirea QT poate duce la torsada vârfurilor; asocierea cu alte medicamente care prelungesc QT se evită când nu este absolut necesară — Corect: Torsada și interacțiunea QT sunt avertismentele cardiace.\n\nAzitromicina este antibioticul de primă intenție în bacteriemia meningococică, datorită nivelurilor serice ridicate — Incorect: Azitromicina are biodisponibilitate serică scăzută, problematică în bacteriemii.\n\nEritromicina este preferată intravenos în endocardită, fiind lipsită de iritație venoasă — Incorect: Administrarea i.v. a eritromicinei este iritantă și cauzează flebită.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 165, Macrolidele (pagini PDF: 19).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    165
   ],
   "pdfPages": [
    19
   ],
   "section": "Macrolidele"
  },
  "learningObjective": "Recunoașterea limitei macrolidelor în endocardită/meningită, a biodisponibilității serice slabe a azitromicinei și a riscului de torsadă.",
  "optionRationales": [
   "Endocardita și meningita sunt exemplele de infecții în care macrolidele nu se folosesc curent.",
   "Nivelurile serice scăzute contraindică azitromicina în bacteriemii.",
   "Torsada și interacțiunea QT sunt avertismentele cardiace.",
   "Azitromicina are biodisponibilitate serică scăzută, problematică în bacteriemii.",
   "Administrarea i.v. a eritromicinei este iritantă și cauzează flebită."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă tocmai limitele (bacteriemie, flebită, endocardită) în indicații de primă intenție."
  },
  "textbookExpressions": [
   "biodisponibilitatea serică scăzută",
   "torsadei vârfurilor"
  ]
 },
 {
  "id": "sepsis-adv-033",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Polimixinele (colistimetat sodic) se caracterizează prin:",
  "options": [
   "Colistimetatul sodic este un prodrog inactiv metabolizat in vivo în colistinul activ, ceea ce complică dozarea",
   "Mecanismul bactericid este ruperea membranei prin legare de LPS",
   "Sunt active împotriva majorității bacililor Gram-negativi, cu excepția Proteus și Providencia spp.",
   "A fost descrisă rezistență plasmidică prin enzima fosfoetanolamină MCR-1, care modifică LPS",
   "Sunt antibiotice de primă linie în infecțiile comunitare necomplicate, toxicitatea fiind neglijabilă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Colistimetatul sodic este un prodrog inactiv metabolizat in vivo în colistinul activ, ceea ce complică dozarea — Corect: Statutul de prodrog și implicația asupra dozării sunt enunțate.\n\nMecanismul bactericid este ruperea membranei prin legare de LPS — Corect: Legarea de LPS cu ruperea membranei este mecanismul citat.\n\nSunt active împotriva majorității bacililor Gram-negativi, cu excepția Proteus și Providencia spp. — Corect: Excepțiile Proteus și Providencia sunt explicite.\n\nA fost descrisă rezistență plasmidică prin enzima fosfoetanolamină MCR-1, care modifică LPS — Corect: MCR-1 și modificarea LPS apar la pagina următoare.\n\nSunt antibiotice de primă linie în infecțiile comunitare necomplicate, toxicitatea fiind neglijabilă — Incorect: Clasa a fost puțin folosită din cauza neuro- și nefrotoxicității; a revenit ca ultimă alegere.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 165, 166, Polimixinele (pagini PDF: 19, 20).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    165,
    166
   ],
   "pdfPages": [
    19,
    20
   ],
   "section": "Polimixinele"
  },
  "learningObjective": "Integrarea statutului de prodrog al CMS, a țintei LPS, a excepțiilor Proteus/Providencia și a MCR-1.",
  "optionRationales": [
   "Statutul de prodrog și implicația asupra dozării sunt enunțate.",
   "Legarea de LPS cu ruperea membranei este mecanismul citat.",
   "Excepțiile Proteus și Providencia sunt explicite.",
   "MCR-1 și modificarea LPS apar la pagina următoare.",
   "Clasa a fost puțin folosită din cauza neuro- și nefrotoxicității; a revenit ca ultimă alegere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru detalii de clasă (prodrog, LPS, excepții, MCR-1); distractorul anulează toxicitatea care a limitat uzul."
  },
  "textbookExpressions": [
   "prodrog inactiv",
   "MCR-1"
  ]
 },
 {
  "id": "sepsis-adv-034",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Metronidazolul:",
  "options": [
   "Este tratamentul de elecție în infecția moderată cu C. difficile, amibiază, giardiază și infecția cu Trichomonas vaginalis",
   "Poate produce o reacție de tip disulfiram cu etanolul și intensifică efectul anticoagulant al warfarinei",
   "Provoacă gust metalic și polineuropatie în tratamentul de lungă durată",
   "Se evită ca profilaxie în chirurgia colonului, anaerobii nefiind o țintă",
   "Absorbția rectală este neglijabilă, supozitorul fiind ineficace"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este tratamentul de elecție în infecția moderată cu C. difficile, amibiază, giardiază și infecția cu Trichomonas vaginalis — Corect: Lista de indicații de elecție este cea din paragraf.\n\nPoate produce o reacție de tip disulfiram cu etanolul și intensifică efectul anticoagulant al warfarinei — Corect: Reacția disulfiram și potențarea warfarinei sunt avertismentele.\n\nProvoacă gust metalic și polineuropatie în tratamentul de lungă durată — Corect: Gustul metalic și polineuropatia țin de tratamentul prelungit.\n\nSe evită ca profilaxie în chirurgia colonului, anaerobii nefiind o țintă — Incorect: Este folosit ca profilaxie în chirurgia colonului.\n\nAbsorbția rectală este neglijabilă, supozitorul fiind ineficace — Incorect: Supozitorul are absorbție bună și este ieftin, spre deosebire de calea i.v. mai scumpă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 166, Nitroimidazolii — Metronidazol (pagini PDF: 20).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    166
   ],
   "pdfPages": [
    20
   ],
   "section": "Nitroimidazolii — Metronidazol"
  },
  "learningObjective": "Reținerea indicațiilor (C. difficile moderat, protozoare), a reacției disulfiram/warfarină și a neuropatiei de lungă durată.",
  "optionRationales": [
   "Lista de indicații de elecție este cea din paragraf.",
   "Reacția disulfiram și potențarea warfarinei sunt avertismentele.",
   "Gustul metalic și polineuropatia țin de tratamentul prelungit.",
   "Este folosit ca profilaxie în chirurgia colonului.",
   "Supozitorul are absorbție bună și este ieftin, spre deosebire de calea i.v. mai scumpă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii neagă profilaxia colonică și absorbția rectală, două fapte alăturate indicațiilor de elecție."
  },
  "textbookExpressions": [
   "reacţie de tip disulfiram",
   "gust metalic"
  ]
 },
 {
  "id": "sepsis-adv-035",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Clindamicina este utilă în infecțiile stafilococice/streptococice severe deoarece:",
  "options": [
   "Inhibă toxina 1 a sindromului șocului toxic stafilococic (TSST-1) și producția de toxină alfa și joacă un rol în infecțiile cu S. aureus secretor de PVL",
   "Asigură concentrație ridicată la nivel osos și este folosită în osteomielită",
   "Este antibioticul de primă intenție de rutină, asocierea cu C. difficile fiind infirmată",
   "Este inactivă pe anaerobi, în special pe Bacteroides",
   "Concentrația osoasă este neglijabilă, motiv pentru care se evită osteomielita"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Inhibă toxina 1 a sindromului șocului toxic stafilococic (TSST-1) și producția de toxină alfa și joacă un rol în infecțiile cu S. aureus secretor de PVL — Corect: Inhibarea TSST-1, a toxinei alfa și rolul în infecțiile PVL sunt enunțate.\n\nAsigură concentrație ridicată la nivel osos și este folosită în osteomielită — Corect: Concentrația osoasă și uzul în osteomielită sunt explicite.\n\nEste antibioticul de primă intenție de rutină, asocierea cu C. difficile fiind infirmată — Incorect: Nu este folosită pe scară largă tocmai din cauza asocierii cu C. difficile.\n\nEste inactivă pe anaerobi, în special pe Bacteroides — Incorect: Este activă împotriva anaerobilor, mai ales Bacteroides.\n\nConcentrația osoasă este neglijabilă, motiv pentru care se evită osteomielita — Incorect: Textul afirmă concentrație osoasă ridicată, nu neglijabilă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 166, Alte antibiotice — Clindamicina (pagini PDF: 20).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    166
   ],
   "pdfPages": [
    20
   ],
   "section": "Alte antibiotice — Clindamicina"
  },
  "learningObjective": "Corelarea inhibării TSST-1/PVL cu concentrația osoasă, distinct de limita impusă de C. difficile.",
  "optionRationales": [
   "Inhibarea TSST-1, a toxinei alfa și rolul în infecțiile PVL sunt enunțate.",
   "Concentrația osoasă și uzul în osteomielită sunt explicite.",
   "Nu este folosită pe scară largă tocmai din cauza asocierii cu C. difficile.",
   "Este activă împotriva anaerobilor, mai ales Bacteroides.",
   "Textul afirmă concentrație osoasă ridicată, nu neglijabilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează motivul restricției (C. difficile) și activitatea pe Bacteroides/os din același paragraf."
  },
  "textbookExpressions": [
   "TSST-1",
   "leucocidină Panton Valentine"
  ]
 },
 {
  "id": "sepsis-adv-036",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "Scorul qSOFA este considerat pozitiv dacă se întrunesc minim două dintre:",
  "options": [
   "Scor de comă Glasgow sub 15, frecvență respiratorie ≥22/min și tensiune arterială sistolică ≤100 mmHg",
   "Febră peste 38,5°C, leucocitoză și PCR crescută, ca în vechea definiție SIRS",
   "Lactat peste 4 mmol/L, MAP sub 50 mmHg și anurie de 24 de ore",
   "Doar un GCS de 15 cu tahicardie sinusală",
   "Trei criterii SOFA complete, qSOFA nefiind un scor de la pat"
  ],
  "correct": [
   0
  ],
  "explanation": "Scor de comă Glasgow sub 15, frecvență respiratorie ≥22/min și tensiune arterială sistolică ≤100 mmHg — Corect: Cele trei criterii și regula „minim două” sunt enunțate explicit.\n\nFebră peste 38,5°C, leucocitoză și PCR crescută, ca în vechea definiție SIRS — Incorect: SIRS nu mai definește sepsisul; qSOFA nu cere febră/leucocite.\n\nLactat peste 4 mmol/L, MAP sub 50 mmHg și anurie de 24 de ore — Incorect: Lactatul și MAP 65 țin de definiția șocului septic, nu de qSOFA.\n\nDoar un GCS de 15 cu tahicardie sinusală — Incorect: GCS 15 este normal, nu un criteriu pozitiv.\n\nTrei criterii SOFA complete, qSOFA nefiind un scor de la pat — Incorect: qSOFA este tocmai instrumentul rapid de la pat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 154, Definiția Sepsis-3 — qSOFA (pagini PDF: 8).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    154
   ],
   "pdfPages": [
    8
   ],
   "section": "Definiția Sepsis-3 — qSOFA"
  },
  "learningObjective": "Reținerea triadei qSOFA (GCS <15, FR ≥22, TAS ≤100), distinct de SIRS și de SOFA de ATI.",
  "optionRationales": [
   "Cele trei criterii și regula „minim două” sunt enunțate explicit.",
   "SIRS nu mai definește sepsisul; qSOFA nu cere febră/leucocite.",
   "Lactatul și MAP 65 țin de definiția șocului septic, nu de qSOFA.",
   "GCS 15 este normal, nu un criteriu pozitiv.",
   "qSOFA este tocmai instrumentul rapid de la pat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reciclează SIRS sau pragurile de șoc (lactat, MAP) în locul triadei qSOFA din același paragraf."
  },
  "textbookExpressions": [
   "qSOFA",
   "2:22 respiraţii/min"
  ]
 },
 {
  "id": "sepsis-adv-037",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "În fiziopatologia sepsisului, răspunsul înnăscut include:",
  "options": [
   "PAMP (componente bacteriene, fungice, virale) activează macrofage, monocite, granulocite, NK și celule dendritice prin receptori Toll-like, lectină tip C, NOD-like și RIG-I",
   "Urmează producția de TNF-α, IL-1 și IL-6, proteine de fază acută, microparticule procoagulante și capcane neutrofile extracelulare (NETs)",
   "Imunotromboza prinde microbii în microtrombi; peste un prag, disfuncția mitocondrială, CID-ul și catabolismul autoîntrețin sindromul",
   "Răspunsul se limitează la limfocitele T citotoxice, fără rol al receptorilor Toll-like",
   "NETs inhibă coagularea, CID-ul fiind absent în sepsisul descris"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "PAMP (componente bacteriene, fungice, virale) activează macrofage, monocite, granulocite, NK și celule dendritice prin receptori Toll-like, lectină tip C, NOD-like și RIG-I — Corect: PAMP și receptorii listați sunt din deschidere.\n\nUrmează producția de TNF-α, IL-1 și IL-6, proteine de fază acută, microparticule procoagulante și capcane neutrofile extracelulare (NETs) — Corect: Citokinele, faza acută, microparticulele și NETs sunt consecutive.\n\nImunotromboza prinde microbii în microtrombi; peste un prag, disfuncția mitocondrială, CID-ul și catabolismul autoîntrețin sindromul — Corect: Imunotromboza, apoi mitocondriile/CID/catabolismul, sunt pragul de automenținere.\n\nRăspunsul se limitează la limfocitele T citotoxice, fără rol al receptorilor Toll-like — Incorect: Răspunsul descris este înnăscut, nu T-citotoxic izolat.\n\nNETs inhibă coagularea, CID-ul fiind absent în sepsisul descris — Incorect: NETs și microparticulele promovează imunotromboza, nu o inhibă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 154, Fiziopatologie — PAMP, citokine, imunotromboză (pagini PDF: 8).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    154
   ],
   "pdfPages": [
    8
   ],
   "section": "Fiziopatologie — PAMP, citokine, imunotromboză"
  },
  "learningObjective": "Integrarea lanțului PAMP–receptori–citokine–NETs cu trecerea de la imunotromboză locală la CID difuz.",
  "optionRationales": [
   "PAMP și receptorii listați sunt din deschidere.",
   "Citokinele, faza acută, microparticulele și NETs sunt consecutive.",
   "Imunotromboza, apoi mitocondriile/CID/catabolismul, sunt pragul de automenținere.",
   "Răspunsul descris este înnăscut, nu T-citotoxic izolat.",
   "NETs și microparticulele promovează imunotromboza, nu o inhibă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută fiziopatologia pe imunitatea adaptativă și inversează rolul procoagulant al NETs."
  },
  "textbookExpressions": [
   "imunotromboză",
   "NETs"
  ]
 },
 {
  "id": "sepsis-adv-038",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Disfuncția de organ în sepsis se caracterizează prin:",
  "options": [
   "Vasoplegia reduce rezistența periferică; extravazarea capilară de plasmă bogată în proteine produce edem care scade livrarea de oxigen",
   "La plămâni poate apărea leziune pulmonară acută și SDRA; lezarea epiteliului intestinal duce la malabsorbție și translocare bacteriană",
   "Afectarea renală acută este frecventă și se asociază cu creșterea mortalității; disfuncția cerebrală este encefalopatie septică (somnolență–comă)",
   "Solicitarea fiziologică cere creșterea debitului cardiac după repleție, dar sindromul și acidoza pot fi inotrop negative",
   "Vasoplegia crește rezistența periferică, iar translocarea intestinală este infirmată"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Vasoplegia reduce rezistența periferică; extravazarea capilară de plasmă bogată în proteine produce edem care scade livrarea de oxigen — Corect: Vasoplegia și edemul capilar sunt enunțate.\n\nLa plămâni poate apărea leziune pulmonară acută și SDRA; lezarea epiteliului intestinal duce la malabsorbție și translocare bacteriană — Corect: SDRA și translocarea intestinală sunt explicite.\n\nAfectarea renală acută este frecventă și se asociază cu creșterea mortalității; disfuncția cerebrală este encefalopatie septică (somnolență–comă) — Corect: AKI cu mortalitate și encefalopatia completează lista.\n\nSolicitarea fiziologică cere creșterea debitului cardiac după repleție, dar sindromul și acidoza pot fi inotrop negative — Corect: Debitul crescut versus inotropismul negativ este contrastul cardiac.\n\nVasoplegia crește rezistența periferică, iar translocarea intestinală este infirmată — Incorect: Vasoplegia reduce, nu crește, rezistența; translocarea este descrisă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 154, Disfuncția de organ (pagini PDF: 8).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    154
   ],
   "pdfPages": [
    8
   ],
   "section": "Disfuncția de organ"
  },
  "learningObjective": "Recunoașterea clusterului vasoplegie–edem–SDRA–translocare–AKI–encefalopatie, cu nuanța inotrop-negativă.",
  "optionRationales": [
   "Vasoplegia și edemul capilar sunt enunțate.",
   "SDRA și translocarea intestinală sunt explicite.",
   "AKI cu mortalitate și encefalopatia completează lista.",
   "Debitul crescut versus inotropismul negativ este contrastul cardiac.",
   "Vasoplegia reduce, nu crește, rezistența; translocarea este descrisă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru consecințe de organ reale; distractorul inversează vasoplegia și neagă translocarea din același paragraf."
  },
  "textbookExpressions": [
   "Vasoplegia",
   "encefalopatie septică"
  ]
 },
 {
  "id": "sepsis-adv-039",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "Clinic, șocul septic este rezervat pacienților care, după resuscitare volemică adecvată:",
  "options": [
   "Necesită vasopresor pentru a menține o tensiune arterială medie de cel puțin 65 mmHg și au lactat seric peste 2 mmol/L",
   "Au doar febră și leucocitoză, fără disfuncție circulatorie",
   "Au qSOFA 1 punct, suficient pentru diagnosticul de șoc",
   "Au lactat sub 1 mmol/L sub vasopresor, MAP-ul fiind irelevant",
   "Se definesc prin SIRS, independent de lactat și de MAP"
  ],
  "correct": [
   0
  ],
  "explanation": "Necesită vasopresor pentru a menține o tensiune arterială medie de cel puțin 65 mmHg și au lactat seric peste 2 mmol/L — Corect: Cele două condiții după resuscitare adecvată sunt definiția clinică.\n\nAu doar febră și leucocitoză, fără disfuncție circulatorie — Incorect: Febra/leucocitoza țin de infecție/SIRS, nu de șocul septic.\n\nAu qSOFA 1 punct, suficient pentru diagnosticul de șoc — Incorect: qSOFA indică risc, nu definește șocul.\n\nAu lactat sub 1 mmol/L sub vasopresor, MAP-ul fiind irelevant — Incorect: Lactatul trebuie să fie crescut (>2), nu scăzut.\n\nSe definesc prin SIRS, independent de lactat și de MAP — Incorect: SIRS nu mai definește sepsisul/șocul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 154, Șocul septic (pagini PDF: 8).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    154
   ],
   "pdfPages": [
    8
   ],
   "section": "Șocul septic"
  },
  "learningObjective": "Reținerea conjuncției vasopresor pentru MAP ≥65 mmHg și lactat >2 mmol/L după volemie.",
  "optionRationales": [
   "Cele două condiții după resuscitare adecvată sunt definiția clinică.",
   "Febra/leucocitoza țin de infecție/SIRS, nu de șocul septic.",
   "qSOFA indică risc, nu definește șocul.",
   "Lactatul trebuie să fie crescut (>2), nu scăzut.",
   "SIRS nu mai definește sepsisul/șocul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii despart cele două brațe ale definiției (MAP 65 și lactat >2) sau reînvie SIRS."
  },
  "textbookExpressions": [
   "65 mmHg",
   ">2 mmol/L"
  ]
 },
 {
  "id": "sepsis-adv-040",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Originea sepsisului, după momentul instalării, se definește astfel:",
  "options": [
   "Dobândit comunitar: în primele 48 de ore de la internare; dobândit în spital: după peste 48 de ore",
   "Sepsisul asociat asistenței medicale (subgrup comunitar) include externare în ultimele 30 de zile, îngrijiri cronice (nu comunități închise) și tratament ambulator (ex. hemodializă)",
   "Sepsisul nosocomial se instalează în prima oră de la internare, comunitarul după o săptămână",
   "Hemodializa exclude sepsisul asociat asistenței, fiind considerată infecție strictly comunitară",
   "Pragul de 48 de ore distinge doar pneumonia, nu sepsisul"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Dobândit comunitar: în primele 48 de ore de la internare; dobândit în spital: după peste 48 de ore — Corect: Splitul 48 de ore este definiția explicită.\n\nSepsisul asociat asistenței medicale (subgrup comunitar) include externare în ultimele 30 de zile, îngrijiri cronice (nu comunități închise) și tratament ambulator (ex. hemodializă) — Corect: Cele trei situații HCA, inclusiv 30 de zile și hemodializa, sunt listate.\n\nSepsisul nosocomial se instalează în prima oră de la internare, comunitarul după o săptămână — Incorect: Sensul pragului 48 de ore este inversat.\n\nHemodializa exclude sepsisul asociat asistenței, fiind considerată infecție strictly comunitară — Incorect: Hemodializa este tocmai exemplu de HCA.\n\nPragul de 48 de ore distinge doar pneumonia, nu sepsisul — Incorect: Pragul se aplică sepsisului, nu doar pneumoniei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 155, Originea sepsisului — Comunitar, nosocomial, HCA (pagini PDF: 9).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    155
   ],
   "pdfPages": [
    9
   ],
   "section": "Originea sepsisului — Comunitar, nosocomial, HCA"
  },
  "learningObjective": "Aplicarea pragului de 48 de ore și a criteriilor HCA (30 de zile, dializă), distinct de lista de patogeni deja acoperită.",
  "optionRationales": [
   "Splitul 48 de ore este definiția explicită.",
   "Cele trei situații HCA, inclusiv 30 de zile și hemodializa, sunt listate.",
   "Sensul pragului 48 de ore este inversat.",
   "Hemodializa este tocmai exemplu de HCA.",
   "Pragul se aplică sepsisului, nu doar pneumoniei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează fereastra de 48 de ore și scot dializa din subgrupul HCA."
  },
  "textbookExpressions": [
   "48 de ore",
   "ultimele 30 de zile"
  ]
 },
 {
  "id": "sepsis-adv-041",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "La examenul obiectiv al pacientului cu sepsis, semnele hemodinamice și de deteriorare includ:",
  "options": [
   "Tahipneea este semn-cheie al deteriorării clinice; hipoxia poate sugera infecție de tract respirator inferior",
   "Pulsul poate fi amplu prin vasodilatație sau de volum scăzut dacă „periferia este închisă” prin hipovolemie relativă",
   "Un suflu nou sau modificat poate indica endocardită; sensibilitatea în flancul stâng este comună în diverticulită",
   "Tahipneea lipsește în sepsis, semnul-cheie fiind bradicardia",
   "Pulsul amplu infirmă vasodilatația, fiind patognomonic pentru hipovolemie pură"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tahipneea este semn-cheie al deteriorării clinice; hipoxia poate sugera infecție de tract respirator inferior — Corect: Tahipneea ca semn-cheie și hipoxia respiratorie sunt din lista de parametri.\n\nPulsul poate fi amplu prin vasodilatație sau de volum scăzut dacă „periferia este închisă” prin hipovolemie relativă — Corect: Cele două aspecte de puls sunt explicite.\n\nUn suflu nou sau modificat poate indica endocardită; sensibilitatea în flancul stâng este comună în diverticulită — Corect: Suflul de endocardită și diverticulita de flanc stâng sunt din figură.\n\nTahipneea lipsește în sepsis, semnul-cheie fiind bradicardia — Incorect: Textul numește tahipneea semn-cheie, nu o neagă.\n\nPulsul amplu infirmă vasodilatația, fiind patognomonic pentru hipovolemie pură — Incorect: Pulsul amplu este atribuit vasodilatației, nu hipovolemiei pure.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 153, Examenul obiectiv — Parametri și semne de focar (pagini PDF: 7).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    153
   ],
   "pdfPages": [
    7
   ],
   "section": "Examenul obiectiv — Parametri și semne de focar"
  },
  "learningObjective": "Contrastarea tahipneei ca semn-cheie cu cele două profiluri de puls (amplu vs închis) și cu focarele (suflu, flanc stâng).",
  "optionRationales": [
   "Tahipneea ca semn-cheie și hipoxia respiratorie sunt din lista de parametri.",
   "Cele două aspecte de puls sunt explicite.",
   "Suflul de endocardită și diverticulita de flanc stâng sunt din figură.",
   "Textul numește tahipneea semn-cheie, nu o neagă.",
   "Pulsul amplu este atribuit vasodilatației, nu hipovolemiei pure."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează tahipneea (semn-cheie) și atribuirea pulsului amplu vasodilatației."
  },
  "textbookExpressions": [
   "semn cheie",
   "vasodilataţiei"
  ]
 },
 {
  "id": "sepsis-adv-042",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "În supravegherea intraspitalicească, recunoașterea deteriorării include:",
  "options": [
   "Stopul cardiac este de obicei precedat de alterări fiziologice progresive reflectate de NEWS 2; multe spitale autorizează apelul la un prag NEWS 5 sau 2 din 5, semnele clinice primând față de scor",
   "Nu există test binar pentru sepsis; screeningul este evaluarea unui clinician experimentat, iar diagnosticul se bazează pe observații și teste POC, fără a aștepta laboratorul",
   "Stopul cardiac survine fără prodrom fiziologic, NEWS 2 fiind superfluu",
   "Diagnosticul se amână până la antibiogramă, POC-ul lactatului neavând loc",
   "SBAR este interzis, apelul făcându-se doar după CT"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Stopul cardiac este de obicei precedat de alterări fiziologice progresive reflectate de NEWS 2; multe spitale autorizează apelul la un prag NEWS 5 sau 2 din 5, semnele clinice primând față de scor — Corect: Prodromul până la stop și pragurile de apel sunt enunțate.\n\nNu există test binar pentru sepsis; screeningul este evaluarea unui clinician experimentat, iar diagnosticul se bazează pe observații și teste POC, fără a aștepta laboratorul — Corect: Absența testului binar și urgența fără așteptarea laboratorului sunt explicite.\n\nStopul cardiac survine fără prodrom fiziologic, NEWS 2 fiind superfluu — Incorect: Textul leagă stopul de alterările progresive NEWS.\n\nDiagnosticul se amână până la antibiogramă, POC-ul lactatului neavând loc — Incorect: Așteptarea laboratorului este descrisă ca și contraproductivă.\n\nSBAR este interzis, apelul făcându-se doar după CT — Incorect: SBAR este exemplul de exprimare a nevoii de asistență.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 155, Supravegherea intraspitalicească — NEWS 2 (pagini PDF: 9).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    155
   ],
   "pdfPages": [
    9
   ],
   "section": "Supravegherea intraspitalicească — NEWS 2"
  },
  "learningObjective": "Reținerea prodromului NEWS, a pragurilor 5 / 2-din-5 și a absenței testului binar, cu prioritatea clinicii și POC.",
  "optionRationales": [
   "Prodromul până la stop și pragurile de apel sunt enunțate.",
   "Absența testului binar și urgența fără așteptarea laboratorului sunt explicite.",
   "Textul leagă stopul de alterările progresive NEWS.",
   "Așteptarea laboratorului este descrisă ca și contraproductivă.",
   "SBAR este exemplul de exprimare a nevoii de asistență."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii anulează prodromul NEWS și reintroduc așteptarea laboratorului, contrar paragrafului de screening."
  },
  "textbookExpressions": [
   "NEWS 2",
   "test binar"
  ]
 },
 {
  "id": "sepsis-adv-043",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "După instalarea hipotensiunii, un studiu retrospectiv citat arată că riscul de deces crește, pentru fiecare oră de întârziere a antibioticului cu spectru larg, cu circa:",
  "options": [
   "7,6%",
   "1%",
   "50%",
   "0,1%, întârzierea fiind fără impact",
   "30 ml/kg, cifră de mortalitate, nu de fluid"
  ],
  "correct": [
   0
  ],
  "explanation": "7,6% — Corect: 7,6% pe oră este cifra studiului retrospectiv; datele din New York confirmă gradientul temporal.\n\n1% — Incorect: 1% nu este cifra citată aici.\n\n50% — Incorect: 50% nu este incrementul orar.\n\n0,1%, întârzierea fiind fără impact — Incorect: Textul leagă întârzierea de mortalitate.\n\n30 ml/kg, cifră de mortalitate, nu de fluid — Incorect: 30 ml/kg este volumul de cristaloid din primele 3 ore, nu mortalitatea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 157, Terapia antimicrobiană — Fereastra orară (pagini PDF: 11).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    157
   ],
   "pdfPages": [
    11
   ],
   "section": "Terapia antimicrobiană — Fereastra orară"
  },
  "learningObjective": "Reținerea cifrei de 7,6% mortalitate suplimentară pe oră de întârziere după hipotensiune.",
  "optionRationales": [
   "7,6% pe oră este cifra studiului retrospectiv; datele din New York confirmă gradientul temporal.",
   "1% nu este cifra citată aici.",
   "50% nu este incrementul orar.",
   "Textul leagă întârzierea de mortalitate.",
   "30 ml/kg este volumul de cristaloid din primele 3 ore, nu mortalitatea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reciclează 30 ml/kg (resuscitare) sau alte procente din capitol în locul incrementului orar 7,6%."
  },
  "textbookExpressions": [
   "7,6%",
   "fiecare oră"
  ]
 },
 {
  "id": "sepsis-adv-044",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Resuscitarea volemică timpurie în sepsis, potrivit SSC și studiilor citate:",
  "options": [
   "SSC recomandă cel puțin 30 ml/kg cristaloide în primele 3 ore de la diagnostic",
   "Două trialuri din țări cu venituri mici au arătat că resuscitarea în bolus poate crește mortalitatea, în ciuda ameliorării inițiale a perfuziei",
   "Explicațiile propuse includ lipsa tratamentului efectelor nocive ale volumelor mari și leziunea de reperfuzie la prezentare tardivă",
   "Bolusul volemic scade mortalitatea în toate populațiile, trialurile africane fiind ignorate",
   "Cristaloidele sunt interzise, albumina fiind unica soluție din prima oră"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "SSC recomandă cel puțin 30 ml/kg cristaloide în primele 3 ore de la diagnostic — Corect: Volumul 30 ml/kg în 3 ore este recomandarea SSC.\n\nDouă trialuri din țări cu venituri mici au arătat că resuscitarea în bolus poate crește mortalitatea, în ciuda ameliorării inițiale a perfuziei — Corect: Cele două trialuri și creșterea mortalității sunt enunțate.\n\nExplicațiile propuse includ lipsa tratamentului efectelor nocive ale volumelor mari și leziunea de reperfuzie la prezentare tardivă — Corect: Reperfuzia și lipsa contramăsurilor sunt explicațiile propuse.\n\nBolusul volemic scade mortalitatea în toate populațiile, trialurile africane fiind ignorate — Incorect: Textul tocmai nuanțează că bolusul nu este benefic tuturor.\n\nCristaloidele sunt interzise, albumina fiind unica soluție din prima oră — Incorect: Cristaloidele sunt prima linie SSC; albumina poate fi luată în calcul la volume mari, nu ca unică soluție.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 157, Resuscitarea volemică — 30 ml/kg și evidențele adverse (pagini PDF: 11).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    157
   ],
   "pdfPages": [
    11
   ],
   "section": "Resuscitarea volemică — 30 ml/kg și evidențele adverse"
  },
  "learningObjective": "Contrastarea recomandării SSC 30 ml/kg/3 h cu trialurile din venituri mici care au crescut mortalitatea.",
  "optionRationales": [
   "Volumul 30 ml/kg în 3 ore este recomandarea SSC.",
   "Cele două trialuri și creșterea mortalității sunt enunțate.",
   "Reperfuzia și lipsa contramăsurilor sunt explicațiile propuse.",
   "Textul tocmai nuanțează că bolusul nu este benefic tuturor.",
   "Cristaloidele sunt prima linie SSC; albumina poate fi luată în calcul la volume mari, nu ca unică soluție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii anulează nuanța trialurilor din venituri mici și înlocuiesc cristaloidele cu albumină de primă intenție."
  },
  "textbookExpressions": [
   "30 ml/kg",
   "primele 3 ore"
  ]
 },
 {
  "id": "sepsis-adv-045",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Recoltarea hemoculturilor la adultul cu sepsis:",
  "options": [
   "Se recoltează minim 5 ml de sânge în flacoane aerob și anaerob; există timp pentru hemoculturi înaintea empiricului, inclusiv la pacientul acut, cu excepția suspiciunii de septicemie meningococică",
   "Antibioterapia înainte de recoltare poate negativiza culturile; PCR pentru ADN bacterian din sânge poate totuși detecta patogenul",
   "Hemoculturile se omit la adult, 5 ml fiind doza pediatrică inutilă",
   "PCR 16S înlocuiește hemocultura de la prezentare, fără flacoane",
   "În meningococemie, antibioticele se amână până la două seturi de hemoculturi"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Se recoltează minim 5 ml de sânge în flacoane aerob și anaerob; există timp pentru hemoculturi înaintea empiricului, inclusiv la pacientul acut, cu excepția suspiciunii de septicemie meningococică — Corect: Minimul 5 ml, aerob/anaerob și excepția meningococică sunt din deschidere.\n\nAntibioterapia înainte de recoltare poate negativiza culturile; PCR pentru ADN bacterian din sânge poate totuși detecta patogenul — Corect: Negativizarea și PCR-ul de salvare sunt explicite.\n\nHemoculturile se omit la adult, 5 ml fiind doza pediatrică inutilă — Incorect: 5 ml este regula adultului, nu se omite.\n\nPCR 16S înlocuiește hemocultura de la prezentare, fără flacoane — Incorect: Metodele moleculare completează, nu înlocuiesc de la triaj, culturile.\n\nÎn meningococemie, antibioticele se amână până la două seturi de hemoculturi — Incorect: Excepția este tocmai a nu întârzia antibioticul în suspiciunea meningococică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 158, Probe biologice — Hemoculturi; Excepția meningococică (pagini PDF: 12).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    158
   ],
   "pdfPages": [
    12
   ],
   "section": "Probe biologice — Hemoculturi; Excepția meningococică"
  },
  "learningObjective": "Reținerea volumului de 5 ml, a excepției meningococice și a rolului PCR când culturile sunt negativizate.",
  "optionRationales": [
   "Minimul 5 ml, aerob/anaerob și excepția meningococică sunt din deschidere.",
   "Negativizarea și PCR-ul de salvare sunt explicite.",
   "5 ml este regula adultului, nu se omite.",
   "Metodele moleculare completează, nu înlocuiesc de la triaj, culturile.",
   "Excepția este tocmai a nu întârzia antibioticul în suspiciunea meningococică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează excepția meningococică (a nu întârzia antibioticul) și volumul de 5 ml al adultului."
  },
  "textbookExpressions": [
   "minim 5 ml",
   "septicemie meningococică"
  ]
 },
 {
  "id": "sepsis-adv-046",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Aztreonamul, ca monobactam, se caracterizează prin:",
  "options": [
   "Este un β-lactamic sintetic fără alt inel decât cel β-lactamic; spectrul este limitat la bacilii Gram-negativi aerobi",
   "Este alternativă la aminoglicozide în combinații, mai ales în sepsisul abdominal, și activ pe unele tulpini cu rezistență la carbapeneme producătoare de metalo-β-lactamază",
   "Este folosit și în infecțiile cu P. aeruginosa, inclusiv pulmonare din fibroza chistică",
   "Are spectru pe MRSA și anaerobi, identic carbapenemelor",
   "Inelul dublu (cephem) îl face o cefalosporină de generația a cincea, inactivă pe Pseudomonas"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este un β-lactamic sintetic fără alt inel decât cel β-lactamic; spectrul este limitat la bacilii Gram-negativi aerobi — Corect: Definiția de monobactam și spectrul GNA sunt din paragraf.\n\nEste alternativă la aminoglicozide în combinații, mai ales în sepsisul abdominal, și activ pe unele tulpini cu rezistență la carbapeneme producătoare de metalo-β-lactamază — Corect: Alternativa la aminoglicozid și activitatea pe MBL sunt explicite.\n\nEste folosit și în infecțiile cu P. aeruginosa, inclusiv pulmonare din fibroza chistică — Corect: Pseudomonas, inclusiv CF, completează indicațiile.\n\nAre spectru pe MRSA și anaerobi, identic carbapenemelor — Incorect: MRSA și anaerobii nu sunt în spectrul descris.\n\nInelul dublu (cephem) îl face o cefalosporină de generația a cincea, inactivă pe Pseudomonas — Incorect: Un singur inel îl deosebește de cefalosporine; este activ pe Pseudomonas.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 163, Monobactami — Aztreonam (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    163
   ],
   "pdfPages": [
    17
   ],
   "section": "Monobactami — Aztreonam"
  },
  "learningObjective": "Distingerea monobactamului (un singur inel, doar GNA) de carbapeneme și de uzul în MBL/Pseudomonas/CF.",
  "optionRationales": [
   "Definiția de monobactam și spectrul GNA sunt din paragraf.",
   "Alternativa la aminoglicozid și activitatea pe MBL sunt explicite.",
   "Pseudomonas, inclusiv CF, completează indicațiile.",
   "MRSA și anaerobii nu sunt în spectrul descris.",
   "Un singur inel îl deosebește de cefalosporine; este activ pe Pseudomonas."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie aztreonamului spectrul carbapenemelor sau structura cephem, inversând tocmai particularitatea clasei."
  },
  "textbookExpressions": [
   "monobactam",
   "metalo-p-lactamază"
  ]
 },
 {
  "id": "sepsis-adv-047",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Carbapenemele, ca clasă, se caracterizează prin:",
  "options": [
   "Au cel mai larg spectru, active pe majoritatea Gram-pozitivilor, Gram-negativilor și anaerobilor, dar nu pe MRSA",
   "Ertapenemul, spre deosebire de celelalte, nu este activ împotriva Pseudomonas sau Acinetobacter spp.",
   "Imipenemul este parțial inactivat enzimatic în rinichi, de aceea se asociază cilastatin",
   "Clasa include imipenem, meropenem, doripenem și ertapenem",
   "Ertapenemul este anti-Pseudomonas de elecție, imipenemul neavând nevoie de cilastatin"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Au cel mai larg spectru, active pe majoritatea Gram-pozitivilor, Gram-negativilor și anaerobilor, dar nu pe MRSA — Corect: Spectrul și excepția MRSA sunt enunțate.\n\nErtapenemul, spre deosebire de celelalte, nu este activ împotriva Pseudomonas sau Acinetobacter spp. — Corect: Limita ertapenemului este explicită.\n\nImipenemul este parțial inactivat enzimatic în rinichi, de aceea se asociază cilastatin — Corect: Cilastatinul pentru imipenem este motivat enzimatic renal.\n\nClasa include imipenem, meropenem, doripenem și ertapenem — Corect: Cele patru molecule sunt enumerate.\n\nErtapenemul este anti-Pseudomonas de elecție, imipenemul neavând nevoie de cilastatin — Incorect: Relațiile ertapenem–Pseudomonas și imipenem–cilastatin sunt inverse.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 163, Carbapenemele (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    163
   ],
   "pdfPages": [
    17
   ],
   "section": "Carbapenemele"
  },
  "learningObjective": "Contrastarea spectrului larg (fără MRSA), a golului Pseudomonas/Acinetobacter al ertapenemului și a perechii imipenem–cilastatin.",
  "optionRationales": [
   "Spectrul și excepția MRSA sunt enunțate.",
   "Limita ertapenemului este explicită.",
   "Cilastatinul pentru imipenem este motivat enzimatic renal.",
   "Cele patru molecule sunt enumerate.",
   "Relațiile ertapenem–Pseudomonas și imipenem–cilastatin sunt inverse."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru atribute de clasă; distractorul inversează golul de spectru al ertapenemului și nevoia de cilastatin."
  },
  "textbookExpressions": [
   "cel mai larg spec￾tru",
   "cilastatin"
  ]
 },
 {
  "id": "sepsis-adv-048",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Toxicitatea cefalosporinelor, comparativ cu penicilinele, include observația că:",
  "options": [
   "Este similară, dar mai rară; circa 10% dintre pacienții alergici la o clasă sunt alergici și la restul claselor",
   "Cefalosporinele timpurii au cauzat leziuni de tub proximal, derivații mai noi având mai puține efecte nefrotoxice",
   "Alergia încrucișată este de 90%, identică erupției din mononucleoză",
   "Nefrotoxicitatea lipsește la derivații vechi, fiind o problemă doar a generației a cincea",
   "10% este rata de icter colestatic al ceftazidimei, nu de alergie încrucișată"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este similară, dar mai rară; circa 10% dintre pacienții alergici la o clasă sunt alergici și la restul claselor — Corect: Similaritatea, raritatea și 10% încrucișare sunt din paragraf.\n\nCefalosporinele timpurii au cauzat leziuni de tub proximal, derivații mai noi având mai puține efecte nefrotoxice — Corect: Contrastul tub proximal vechi versus derivați noi este explicit.\n\nAlergia încrucișată este de 90%, identică erupției din mononucleoză — Incorect: 90% este erupția amoxicilinei în mononucleoză, nu alergia încrucișată.\n\nNefrotoxicitatea lipsește la derivații vechi, fiind o problemă doar a generației a cincea — Incorect: Nefrotoxicitatea era a derivaților timpurii.\n\n10% este rata de icter colestatic al ceftazidimei, nu de alergie încrucișată — Incorect: Icterul colestatic de 6× ține de co-amoxiclav, nu de ceftazidimă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 163, Cefalosporinele — Toxicitate (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    163
   ],
   "pdfPages": [
    17
   ],
   "section": "Cefalosporinele — Toxicitate"
  },
  "learningObjective": "Reținerea alergiei încrucișate de 10% și a nefrotoxicității mai reduse a derivaților noi.",
  "optionRationales": [
   "Similaritatea, raritatea și 10% încrucișare sunt din paragraf.",
   "Contrastul tub proximal vechi versus derivați noi este explicit.",
   "90% este erupția amoxicilinei în mononucleoză, nu alergia încrucișată.",
   "Nefrotoxicitatea era a derivaților timpurii.",
   "Icterul colestatic de 6× ține de co-amoxiclav, nu de ceftazidimă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică 90% (mononucleoză) sau icterul co-amoxiclavului asupra alergiei încrucișate de 10%."
  },
  "textbookExpressions": [
   "10% dintre pacienţii",
   "tub proxima"
  ]
 },
 {
  "id": "sepsis-adv-049",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Temocilina și pivmecilinamul, ca peniciline cu spectru îngust Gram-negativ:",
  "options": [
   "Pivmecilinamul se folosește în ITU și acționează pe Gram-negativi, inclusiv E. coli ESBL, Klebsiella, Enterobacter și Salmonella, dar nu pe P. aeruginosa",
   "Temocilina este activă doar pe Gram-negativi, inclusiv mulți ESBL; favorizează în mai mică măsură C. difficile și protejează carbapenemele; nu este activă pe Pseudomonas sau Acinetobacter",
   "Ticarcilina și piperacilina (cu tazobactam) sunt active pe Pseudomonas",
   "Temocilina este anti-Pseudomonas de primă intenție, pivmecilinamul acoperind MRSA",
   "Ambele înlocuiesc carbapenemele în infecțiile cu Acinetobacter"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pivmecilinamul se folosește în ITU și acționează pe Gram-negativi, inclusiv E. coli ESBL, Klebsiella, Enterobacter și Salmonella, dar nu pe P. aeruginosa — Corect: Spectrul pivmecilinamului și excepția Pseudomonas sunt din paragraf.\n\nTemocilina este activă doar pe Gram-negativi, inclusiv mulți ESBL; favorizează în mai mică măsură C. difficile și protejează carbapenemele; nu este activă pe Pseudomonas sau Acinetobacter — Corect: Temocilina, C. difficile și protecția carbapenemelor sunt explicite.\n\nTicarcilina și piperacilina (cu tazobactam) sunt active pe Pseudomonas — Corect: Ticarcilina și tazocinul completează ramura antipseudomonală.\n\nTemocilina este anti-Pseudomonas de primă intenție, pivmecilinamul acoperind MRSA — Incorect: Temocilina nu este activă pe Pseudomonas; pivmecilinamul nu vizează MRSA.\n\nAmbele înlocuiesc carbapenemele în infecțiile cu Acinetobacter — Incorect: Acinetobacter este tocmai în afara spectrului temocilinei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 163, Penicilinele — Pivmecilinam; Temocilină; Ureidopeniciline (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    163
   ],
   "pdfPages": [
    17
   ],
   "section": "Penicilinele — Pivmecilinam; Temocilină; Ureidopeniciline"
  },
  "learningObjective": "Contrastarea golului Pseudomonas/Acinetobacter al temocilinei/pivmecilinamului cu ureidopenicilinele antipseudomonale.",
  "optionRationales": [
   "Spectrul pivmecilinamului și excepția Pseudomonas sunt din paragraf.",
   "Temocilina, C. difficile și protecția carbapenemelor sunt explicite.",
   "Ticarcilina și tazocinul completează ramura antipseudomonală.",
   "Temocilina nu este activă pe Pseudomonas; pivmecilinamul nu vizează MRSA.",
   "Acinetobacter este tocmai în afara spectrului temocilinei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie temocilinei activitatea antipseudomonală a tazocinului, inversând golul de spectru."
  },
  "textbookExpressions": [
   "Temocilina",
   "Pivmecilina"
  ]
 },
 {
  "id": "sepsis-adv-050",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "MRSA, în mecanism și diseminare:",
  "options": [
   "Rezistența la meticilină este mediată de modificări ale PBP2a, pe care meticilina sau flucloxacilina nu o pot inhiba",
   "Infecțiile necomplicate țin adesea de catetere/dispozitive; în circa 5% din cazuri infecția diseminează hematogen spre oase, articulații și valve",
   "PBP2a crește sensibilitatea la flucloxacilină, vancomicina fiind inutilă",
   "Diseminarea hematogenă lipsește, 5% fiind rata de colonizare cutanată inofensivă",
   "Meticilina inhibă PBP2a mai bine decât flucloxacilina, rezistența fiind doar fenotipică"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Rezistența la meticilină este mediată de modificări ale PBP2a, pe care meticilina sau flucloxacilina nu o pot inhiba — Corect: Mecanismul PBP2a este fraza de deschidere.\n\nInfecțiile necomplicate țin adesea de catetere/dispozitive; în circa 5% din cazuri infecția diseminează hematogen spre oase, articulații și valve — Corect: 5% diseminare hematogenă este explicită.\n\nPBP2a crește sensibilitatea la flucloxacilină, vancomicina fiind inutilă — Incorect: PBP2a împiedică inhibiția, nu o crește.\n\nDiseminarea hematogenă lipsește, 5% fiind rata de colonizare cutanată inofensivă — Incorect: 5% este diseminarea, nu o colonizare inofensivă.\n\nMeticilina inhibă PBP2a mai bine decât flucloxacilina, rezistența fiind doar fenotipică — Incorect: Nici meticilina, nici flucloxacilina nu inhibă PBP2a.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 167, Staphylococcus aureus rezistent la meticilină (pagini PDF: 21).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    167
   ],
   "pdfPages": [
    21
   ],
   "section": "Staphylococcus aureus rezistent la meticilină"
  },
  "learningObjective": "Corelarea PBP2a cu diseminarea hematogenă de 5% către os, articulație și valvă.",
  "optionRationales": [
   "Mecanismul PBP2a este fraza de deschidere.",
   "5% diseminare hematogenă este explicită.",
   "PBP2a împiedică inhibiția, nu o crește.",
   "5% este diseminarea, nu o colonizare inofensivă.",
   "Nici meticilina, nici flucloxacilina nu inhibă PBP2a."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează mecanismul PBP2a și transformă cifra de 5% diseminare într-o colonizare banală."
  },
  "textbookExpressions": [
   "proteinei 2a",
   "5% dintre cazuri"
  ]
 },
 {
  "id": "sepsis-adv-051",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Linezolidul, ca alternativă la vancomicina i.v. în MRSA:",
  "options": [
   "Avantajul major este administrarea per os și lipsa nefrotoxicității",
   "Poate cauza mielosupresie reversibilă, mai ales trombocitopenie, deci hemogramă săptămânală; pe termen lung există risc de neuropatie periferică sau nevrită optică",
   "Vancomicina i.v. rămâne prima intenție clasică, cu niveluri 15-20 mg/L și durată minimă de două săptămâni",
   "Linezolidul este nefrotoxic, motiv pentru care se evită la administrare orală",
   "Trombocitopenia lipsește, monitorizarea hemogramei fiind superfluă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Avantajul major este administrarea per os și lipsa nefrotoxicității — Corect: Calea orală și absența nefrotoxicității sunt avantajele citate.\n\nPoate cauza mielosupresie reversibilă, mai ales trombocitopenie, deci hemogramă săptămânală; pe termen lung există risc de neuropatie periferică sau nevrită optică — Corect: Mielosupresia, trombocitopenia, hemograma săptămânală și neuropatiile sunt explicite.\n\nVancomicina i.v. rămâne prima intenție clasică, cu niveluri 15-20 mg/L și durată minimă de două săptămâni — Corect: Nivelurile 15-20 mg/L și minim două săptămâni sunt ale vancomicinei.\n\nLinezolidul este nefrotoxic, motiv pentru care se evită la administrare orală — Incorect: Linezolidul este evidențiat tocmai prin lipsa nefrotoxicității.\n\nTrombocitopenia lipsește, monitorizarea hemogramei fiind superfluă — Incorect: Monitorizarea săptămânală este cerută.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 167, MRSA — Vancomicină; Linezolid (pagini PDF: 21).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    167
   ],
   "pdfPages": [
    21
   ],
   "section": "MRSA — Vancomicină; Linezolid"
  },
  "learningObjective": "Contrastarea vancomicinei (15-20 mg/L, 2 săptămâni, nefrotoxică) cu linezolidul oral, mielosupresia și neuropatia.",
  "optionRationales": [
   "Calea orală și absența nefrotoxicității sunt avantajele citate.",
   "Mielosupresia, trombocitopenia, hemograma săptămânală și neuropatiile sunt explicite.",
   "Nivelurile 15-20 mg/L și minim două săptămâni sunt ale vancomicinei.",
   "Linezolidul este evidențiat tocmai prin lipsa nefrotoxicității.",
   "Monitorizarea săptămânală este cerută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie linezolidului nefrotoxicitatea vancomicinei și anulează mielosupresia pentru care se cere hemograma săptămânală."
  },
  "textbookExpressions": [
   "lipsa nefrotoxicităţii",
   "15-20 mg/L"
  ]
 },
 {
  "id": "sepsis-adv-052",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Enterococul rezistent la vancomicină (VRE):",
  "options": [
   "Rezistența e mediată de schimbarea precursorilor de peptidoglican de la D-Ala-D-Ala la D-Ala-D-Lac, care împiedică legarea glicopeptidelor",
   "Multe infecții sunt nosocomiale, cu virulență scăzută; sediile frecvente sunt urinar și biliar; oral se folosește linezolid, i.v. daptomicină și tigeciclină",
   "VRE este comunitar hipervirulent, de primă intenție fiind vancomicina orală",
   "D-Ala-D-Lac crește afinitatea pentru vancomicină, rezistența fiind infirmată",
   "Tigeciclina este inactivă, singura cale fiind ertapenemul"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Rezistența e mediată de schimbarea precursorilor de peptidoglican de la D-Ala-D-Ala la D-Ala-D-Lac, care împiedică legarea glicopeptidelor — Corect: Mecanismul D-Ala-D-Lac este explicit.\n\nMulte infecții sunt nosocomiale, cu virulență scăzută; sediile frecvente sunt urinar și biliar; oral se folosește linezolid, i.v. daptomicină și tigeciclină — Corect: Nosocomial, virulență scăzută, sedii și schemele sunt din paragraf.\n\nVRE este comunitar hipervirulent, de primă intenție fiind vancomicina orală — Incorect: Virulența este descrisă ca scăzută, nu comunitar invazivă.\n\nD-Ala-D-Lac crește afinitatea pentru vancomicină, rezistența fiind infirmată — Incorect: Substituția scade, nu crește, legarea glicopeptidului.\n\nTigeciclina este inactivă, singura cale fiind ertapenemul — Incorect: Tigeciclina figurează printre opțiunile i.v.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 167, Enterococi rezistenți la vancomicină (pagini PDF: 21).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    167
   ],
   "pdfPages": [
    21
   ],
   "section": "Enterococi rezistenți la vancomicină"
  },
  "learningObjective": "Reținerea substituției D-Ala-D-Lac și a pachetului terapeutic linezolid oral / daptomicină–tigeciclină i.v.",
  "optionRationales": [
   "Mecanismul D-Ala-D-Lac este explicit.",
   "Nosocomial, virulență scăzută, sedii și schemele sunt din paragraf.",
   "Virulența este descrisă ca scăzută, nu comunitar invazivă.",
   "Substituția scade, nu crește, legarea glicopeptidului.",
   "Tigeciclina figurează printre opțiunile i.v."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează mecanismul D-Ala-D-Lac și mută VRE pe un profil hipervirulent comunitar."
  },
  "textbookExpressions": [
   "O-Ala-O￾lac",
   "linezolid"
  ]
 },
 {
  "id": "sepsis-adv-053",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Enterobacteriile producătoare de ESBL, în epidemiologie și tratament:",
  "options": [
   "În Marea Britanie, E. coli CTX-M-15 a apărut în 2004; circa 15% din tulpinile de E. coli sunt acum ESBL; sediul cel mai frecvent este urinar",
   "Tratamentul principal este o carbapenemă (meropenem i.v. de trei ori pe zi sau ertapenem o dată pe zi dacă se vizează OPAT)",
   "Piperacilină/tazobactam este inferioară carbapenemelor, chiar dacă organismul pare sensibil la peniciline după MIC; se asociază totuși o carbapenemă",
   "Ciprofloxacina orală este de elecție, ESBL fiind invariabil sensibile la chinolone",
   "CTX-M-15 lipsește din Marea Britanie, 15% fiind ponderea KPC"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În Marea Britanie, E. coli CTX-M-15 a apărut în 2004; circa 15% din tulpinile de E. coli sunt acum ESBL; sediul cel mai frecvent este urinar — Corect: 2004, 15% și sediul urinar sunt din paragraf.\n\nTratamentul principal este o carbapenemă (meropenem i.v. de trei ori pe zi sau ertapenem o dată pe zi dacă se vizează OPAT) — Corect: Meropenem x3 sau ertapenem OD (OPAT) sunt schemele.\n\nPiperacilină/tazobactam este inferioară carbapenemelor, chiar dacă organismul pare sensibil la peniciline după MIC; se asociază totuși o carbapenemă — Corect: Inferioritatea pip/tazo față de carbapenemă este explicită.\n\nCiprofloxacina orală este de elecție, ESBL fiind invariabil sensibile la chinolone — Incorect: Tulpinile sunt adesea rezistente la cipro, cotrimoxazol și gentamicină.\n\nCTX-M-15 lipsește din Marea Britanie, 15% fiind ponderea KPC — Incorect: CTX-M-15 este tocmai enzima britanică citată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 167, Enterobacterii producătoare de ESBL (pagini PDF: 21).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    167
   ],
   "pdfPages": [
    21
   ],
   "section": "Enterobacterii producătoare de ESBL"
  },
  "learningObjective": "Integrarea CTX-M-15 / 15% cu carbapenema de primă linie și inferioritatea pip/tazo chiar la MIC „sensibil”.",
  "optionRationales": [
   "2004, 15% și sediul urinar sunt din paragraf.",
   "Meropenem x3 sau ertapenem OD (OPAT) sunt schemele.",
   "Inferioritatea pip/tazo față de carbapenemă este explicită.",
   "Tulpinile sunt adesea rezistente la cipro, cotrimoxazol și gentamicină.",
   "CTX-M-15 este tocmai enzima britanică citată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă pip/tazo sau cipro în elecție, deși textul cere carbapenemă și notează rezistențe asociate."
  },
  "textbookExpressions": [
   "15%",
   "CTX-M-15"
  ]
 },
 {
  "id": "sepsis-adv-054",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "În infecțiile cu CRE, când standardizarea testării este limitată, capitolul plasează ca tratament principal:",
  "options": [
   "Colistinul, cu tigeciclină și uneori fosfomicină ca adjuvant după susceptibilitate; meropenemul (bolus sau infuzie) poate fi util la sensibilitate intermediară, MIC 8-16 mg/L",
   "Ertapenemul oral, colistinul fiind abandonat",
   "Vancomicina, CRE fiind Gram-pozitive",
   "Flucloxacilina, PBP2a nefiind implicată",
   "Cipro singură, KPC fiind invariabil sensibilă"
  ],
  "correct": [
   0
  ],
  "explanation": "Colistinul, cu tigeciclină și uneori fosfomicină ca adjuvant după susceptibilitate; meropenemul (bolus sau infuzie) poate fi util la sensibilitate intermediară, MIC 8-16 mg/L — Corect: Colistinul principal, tigeciclina/fosfomicina adjuvante și MIC 8-16 mg/L sunt din paragraf.\n\nErtapenemul oral, colistinul fiind abandonat — Incorect: Ertapenemul oral nu este schema CRE.\n\nVancomicina, CRE fiind Gram-pozitive — Incorect: CRE sunt enterobacterii Gram-negative.\n\nFlucloxacilina, PBP2a nefiind implicată — Incorect: Flucloxacilina privește MSSA, nu carbapenemazele.\n\nCipro singură, KPC fiind invariabil sensibilă — Incorect: KPC inactivează carbapenemele și majoritatea β-lactamilor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 168, Enterobacterii rezistente la carbapeneme — Tratament (pagini PDF: 22).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    168
   ],
   "pdfPages": [
    22
   ],
   "section": "Enterobacterii rezistente la carbapeneme — Tratament"
  },
  "learningObjective": "Identificarea colistinului ca piatră de temelie, cu adjuvanți și fereastra MIC 8-16 mg/L pentru meropenem.",
  "optionRationales": [
   "Colistinul principal, tigeciclina/fosfomicina adjuvante și MIC 8-16 mg/L sunt din paragraf.",
   "Ertapenemul oral nu este schema CRE.",
   "CRE sunt enterobacterii Gram-negative.",
   "Flucloxacilina privește MSSA, nu carbapenemazele.",
   "KPC inactivează carbapenemele și majoritatea β-lactamilor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută elecția pe ertapenem, vancomicină sau flucloxacilină, departe de colistinul și de fereastra MIC 8-16 mg/L."
  },
  "textbookExpressions": [
   "colistinul",
   "8-16 mg/L"
  ]
 },
 {
  "id": "sepsis-adv-055",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "La un utilizator de droguri injectabile cu febră, focarul și etiologia tipice descrise sunt:",
  "options": [
   "Majoritatea episoadelor țin de tromboflebite infectate sau abcese la locul injecției",
   "Cei mai frecvenți patogeni sunt MSSA sau MRSA și Streptococcus pyogenes",
   "Infecțiile stafilococice pot uneori disemina",
   "Focarul tipic este meningita pneumococică, stafilococul fiind neimplicat",
   "Streptococcus pyogenes lipsește, etiologia fiind doar Pseudomonas de mediu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Majoritatea episoadelor țin de tromboflebite infectate sau abcese la locul injecției — Corect: Tromboflebita și abcesul local sunt originea descrisă.\n\nCei mai frecvenți patogeni sunt MSSA sau MRSA și Streptococcus pyogenes — Corect: Cei trei patogeni sunt lista de frecvență.\n\nInfecțiile stafilococice pot uneori disemina — Corect: Diseminarea stafilococică este menționată.\n\nFocarul tipic este meningita pneumococică, stafilococul fiind neimplicat — Incorect: Meningita pneumococică nu este focarul acestui paragraf.\n\nStreptococcus pyogenes lipsește, etiologia fiind doar Pseudomonas de mediu — Incorect: S. pyogenes figurează alături de S. aureus.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 156, Sepsisul în situații speciale — Dependenții de droguri injectabile (pagini PDF: 10).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    156
   ],
   "pdfPages": [
    10
   ],
   "section": "Sepsisul în situații speciale — Dependenții de droguri injectabile"
  },
  "learningObjective": "Recunoașterea tromboflebitei/abcesului de injecție și a triadei MSSA/MRSA/S. pyogenes.",
  "optionRationales": [
   "Tromboflebita și abcesul local sunt originea descrisă.",
   "Cei trei patogeni sunt lista de frecvență.",
   "Diseminarea stafilococică este menționată.",
   "Meningita pneumococică nu este focarul acestui paragraf.",
   "S. pyogenes figurează alături de S. aureus."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vigneta cere focarul de injecție; distractorii mută etiologia pe pneumococ sau Pseudomonas, în afara listei din text."
  },
  "textbookExpressions": [
   "tromboflebite infec￾tate",
   "Streptococcus pyogenes"
  ]
 },
 {
  "id": "sepsis-adv-056",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Conform Cadranului 8.1, localizarea simptomelor care orientează sediul infecției include:",
  "options": [
   "Torace: tuse, spută, dispnee; tract urinar: disurie, incontinență, durere în flancuri",
   "Sistem nervos central: cefalee, meningism; tract biliar: durere în abdomenul superior, icter, vărsături",
   "Tegumente și țesuturi moi: semne de celulită, durere",
   "Disuria orientează spre meningită, icterul fiind un semn de celulită",
   "Tusea și sputa definesc sepsisul biliar, fără valoare toracică"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Torace: tuse, spută, dispnee; tract urinar: disurie, incontinență, durere în flancuri — Corect: Clusterul toracic și urinar este din cadran.\n\nSistem nervos central: cefalee, meningism; tract biliar: durere în abdomenul superior, icter, vărsături — Corect: SNC și biliarul completează lista.\n\nTegumente și țesuturi moi: semne de celulită, durere — Corect: Celulita/durerea tegumentară este ultimul item de localizare.\n\nDisuria orientează spre meningită, icterul fiind un semn de celulită — Incorect: Disuria este urinară, nu meningitică.\n\nTusea și sputa definesc sepsisul biliar, fără valoare toracică — Incorect: Tusea/sputa sunt toracice, nu biliare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 152, Cadranul 8.1 — Anamneza orientativă (pagini PDF: 6).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    152
   ],
   "pdfPages": [
    6
   ],
   "section": "Cadranul 8.1 — Anamneza orientativă"
  },
  "learningObjective": "Reținerea clusterelor torace/urinar/SNC/biliar/tegument, distinct de invertirea sediilor.",
  "optionRationales": [
   "Clusterul toracic și urinar este din cadran.",
   "SNC și biliarul completează lista.",
   "Celulita/durerea tegumentară este ultimul item de localizare.",
   "Disuria este urinară, nu meningitică.",
   "Tusea/sputa sunt toracice, nu biliare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută disuria pe meningită și tusea pe sepsisul biliar, exact perechile din același cadran anamnestic."
  },
  "textbookExpressions": [
   "Durata",
   "Tract urinar"
  ]
 },
 {
  "id": "sepsis-adv-057",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "În Fig. 8.1, printre criteriile de disfuncție de organ care susțin suspiciunea de sepsis se numără:",
  "options": [
   "Creatinină serică >170 µmol/L sau diureză <0,5 ml/kg pe oră timp de 2 ore succesive",
   "INR >1,5 sau PTT >60 sec; trombocite <100×10⁹/L",
   "Bilirubină ≥32 µmol/L; PaO2/FiO2 <300 mmHg (39,9 kPa) sau infiltrate pulmonare bilaterale cu nevoie nouă de oxigen pentru saturații >90%",
   "Creatinina <70 µmol/L și trombocite >400×10⁹/L ca markeri de gravitate",
   "PaO2/FiO2 >500 mmHg exclude disfuncția, INR-ul 1,0 fiind criteriul de CID"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Creatinină serică >170 µmol/L sau diureză <0,5 ml/kg pe oră timp de 2 ore succesive — Corect: Pragurile renale 170 µmol/L și 0,5 ml/kg ×2 ore sunt din figură.\n\nINR >1,5 sau PTT >60 sec; trombocite <100×10⁹/L — Corect: Coagularea (INR/PTT) și trombocitele <100 completează lista.\n\nBilirubină ≥32 µmol/L; PaO2/FiO2 <300 mmHg (39,9 kPa) sau infiltrate pulmonare bilaterale cu nevoie nouă de oxigen pentru saturații >90% — Corect: Bilirubina 32 și PaO2/FiO2 <300 cu infiltratele sunt explicite.\n\nCreatinina <70 µmol/L și trombocite >400×10⁹/L ca markeri de gravitate — Incorect: Gravitatea este creatinină crescută și trombocitopenie, nu invers.\n\nPaO2/FiO2 >500 mmHg exclude disfuncția, INR-ul 1,0 fiind criteriul de CID — Incorect: PaO2/FiO2 <300, nu >500, marchează disfuncția.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 152, Fig. 8.1 — Praguri de disfuncție de organ (pagini PDF: 6).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    152
   ],
   "pdfPages": [
    6
   ],
   "section": "Fig. 8.1 — Praguri de disfuncție de organ"
  },
  "learningObjective": "Memorarea pragurilor creatinină 170, diureză 0,5 ml/kg, INR 1,5, trombocite 100 și PaO2/FiO2 300.",
  "optionRationales": [
   "Pragurile renale 170 µmol/L și 0,5 ml/kg ×2 ore sunt din figură.",
   "Coagularea (INR/PTT) și trombocitele <100 completează lista.",
   "Bilirubina 32 și PaO2/FiO2 <300 cu infiltratele sunt explicite.",
   "Gravitatea este creatinină crescută și trombocitopenie, nu invers.",
   "PaO2/FiO2 <300, nu >500, marchează disfuncția."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează direcția creatininei/trombocitelor și înlocuiesc pragul PaO2/FiO2 300 cu 500."
  },
  "textbookExpressions": [
   ">170 µmol/L",
   "<300 mmHg"
  ]
 },
 {
  "id": "sepsis-adv-058",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Conform Cadranului 8.2, o creștere a scorului SOFA cu ≥2 puncte identifică disfuncția de organ; itemii includ:",
  "options": [
   "Coagulare: trombocite ≥150 (0 puncte), <150 (1), <100 (2), <50 (3), <20 (4)",
   "Hepatic: bilirubină <20, 20-32, 33-101, 102-204, >204 µmol/L pe treptele 0-4",
   "SNC: Glasgow 15, 13-14, 10-12, 6-9, <6; renal: creatinină <110, 110-170, 171-299, 300-440, >440 µmol/L",
   "Trombocitele >400 valorează 4 puncte, bilirubină <20 fiind treapta maximă",
   "Glasgow 15 valorează 4 puncte de disfuncție, creatinina <110 fiind treapta 4"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Coagulare: trombocite ≥150 (0 puncte), <150 (1), <100 (2), <50 (3), <20 (4) — Corect: Scara trombocitelor 150/100/50/20 este din tabel.\n\nHepatic: bilirubină <20, 20-32, 33-101, 102-204, >204 µmol/L pe treptele 0-4 — Corect: Benzile de bilirubină sunt explicite.\n\nSNC: Glasgow 15, 13-14, 10-12, 6-9, <6; renal: creatinină <110, 110-170, 171-299, 300-440, >440 µmol/L — Corect: GCS și creatinina pe cinci trepte completează cadranul.\n\nTrombocitele >400 valorează 4 puncte, bilirubină <20 fiind treapta maximă — Incorect: Trombocitoza nu punctează; bilirubina <20 este treapta 0.\n\nGlasgow 15 valorează 4 puncte de disfuncție, creatinina <110 fiind treapta 4 — Incorect: GCS 15 și creatinina <110 sunt trepte 0, nu 4.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 155, Cadranul 8.2 — Scorul SOFA (pagini PDF: 9).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    155
   ],
   "pdfPages": [
    9
   ],
   "section": "Cadranul 8.2 — Scorul SOFA"
  },
  "learningObjective": "Reținerea treptelor trombocite/bilirubină/GCS/creatinină și a regulii ΔSOFA ≥2.",
  "optionRationales": [
   "Scara trombocitelor 150/100/50/20 este din tabel.",
   "Benzile de bilirubină sunt explicite.",
   "GCS și creatinina pe cinci trepte completează cadranul.",
   "Trombocitoza nu punctează; bilirubina <20 este treapta 0.",
   "GCS 15 și creatinina <110 sunt trepte 0, nu 4."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează treptele 0 și 4 ale GCS/creatininei, capcana clasică a tabelului SOFA."
  },
  "textbookExpressions": [
   "22 puncte",
   "Trombocite"
  ]
 },
 {
  "id": "sepsis-adv-059",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "În supravegherea de secție, pragul care autorizează solicitarea ajutorului, dincolo de NEWS 2 ≥5 ca screening, este descris astfel:",
  "options": [
   "În multe cazuri se bazează pe un scor NEWS total de 5 sau mai mare, sau pe semne clinice care primează față de scorurile numerice; necesitatea asistenței (ex. SBAR) trebuie să declanșeze reevaluare de urgență, inclusiv screening pentru sepsis",
   "Ajutorul se cere doar la stop cardiac, NEWS fiind ignorat dacă pacientul „arată bine”",
   "SBAR se folosește după 72 de ore de antibiotic, nu la deteriorare",
   "Semnele clinice nu pot prevala asupra unui NEWS 2",
   "Stopul cardiac nu este precedat de alterări fiziologice, deci pragul este inutil"
  ],
  "correct": [
   0
  ],
  "explanation": "În multe cazuri se bazează pe un scor NEWS total de 5 sau mai mare, sau pe semne clinice care primează față de scorurile numerice; necesitatea asistenței (ex. SBAR) trebuie să declanșeze reevaluare de urgență, inclusiv screening pentru sepsis — Corect: Pragul 5 sau semnele care primează, plus SBAR, sunt din paragraf.\n\nAjutorul se cere doar la stop cardiac, NEWS fiind ignorat dacă pacientul „arată bine” — Incorect: Stopul este de obicei precedat de alterări NEWS; ajutorul nu se amână.\n\nSBAR se folosește după 72 de ore de antibiotic, nu la deteriorare — Incorect: SBAR este pentru deteriorarea acută, nu după 72 de ore.\n\nSemnele clinice nu pot prevala asupra unui NEWS 2 — Incorect: Textul spune că semnele clinice primează.\n\nStopul cardiac nu este precedat de alterări fiziologice, deci pragul este inutil — Incorect: Stopul este precedat de alterări progresive.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 155, Supravegherea intraspitalicească — SBAR și pragul NEWS (pagini PDF: 9).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    155
   ],
   "pdfPages": [
    9
   ],
   "section": "Supravegherea intraspitalicească — SBAR și pragul NEWS"
  },
  "learningObjective": "Legarea pragului NEWS 5 (sau semne clinice prioritare) de SBAR și de reevaluarea de urgență pentru sepsis.",
  "optionRationales": [
   "Pragul 5 sau semnele care primează, plus SBAR, sunt din paragraf.",
   "Stopul este de obicei precedat de alterări NEWS; ajutorul nu se amână.",
   "SBAR este pentru deteriorarea acută, nu după 72 de ore.",
   "Textul spune că semnele clinice primează.",
   "Stopul este precedat de alterări progresive."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii amână ajutorul până la stop și anulează prioritatea semnelor clinice față de scorul numeric."
  },
  "textbookExpressions": [
   "SBAR",
   "5 sau mai mare"
  ]
 },
 {
  "id": "sepsis-adv-060",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Tabloul clinic precoce al sepsisului, dincolo de qSOFA, se caracterizează prin:",
  "options": [
   "Nu există simptome patognomonice; în general rigiditate, dispnee, mialgii, vărsături, tegumente marmorate și senzație de rău, pe lângă simptomele infecției",
   "Unii pacienți se deteriorează abrupt, în câteva ore, de la simptome minore la disfuncție multiplă de organ",
   "Imunodeprimații pot avea puține semne de inflamație, deși răspunsul fiziologic ar trebui să fie prezent",
   "Simptomele patognomonice (doar febră intermitentă tertiană) permit diagnosticul fără disfuncție de organ",
   "Imunodeprimații au inflamație floridă, deteriorarea abruptă fiind infirmată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Nu există simptome patognomonice; în general rigiditate, dispnee, mialgii, vărsături, tegumente marmorate și senzație de rău, pe lângă simptomele infecției — Corect: Lista nespecifică și absența patognomonicului sunt enunțate.\n\nUnii pacienți se deteriorează abrupt, în câteva ore, de la simptome minore la disfuncție multiplă de organ — Corect: Deteriorarea în câteva ore este explicită.\n\nImunodeprimații pot avea puține semne de inflamație, deși răspunsul fiziologic ar trebui să fie prezent — Corect: Puținele semne inflamatorii la imunodeprimat sunt avertismentul.\n\nSimptomele patognomonice (doar febră intermitentă tertiană) permit diagnosticul fără disfuncție de organ — Incorect: Nu există simptome patognomonice.\n\nImunodeprimații au inflamație floridă, deteriorarea abruptă fiind infirmată — Incorect: Imunodeprimații au puține, nu floride, semne inflamatorii.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 156, Tablou clinic (pagini PDF: 10).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    156
   ],
   "pdfPages": [
    10
   ],
   "section": "Tablou clinic"
  },
  "learningObjective": "Recunoașterea absenței patognomonicului, a deteriorării în ore și a sărăciei semnelor la imunodeprimat.",
  "optionRationales": [
   "Lista nespecifică și absența patognomonicului sunt enunțate.",
   "Deteriorarea în câteva ore este explicită.",
   "Puținele semne inflamatorii la imunodeprimat sunt avertismentul.",
   "Nu există simptome patognomonice.",
   "Imunodeprimații au puține, nu floride, semne inflamatorii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inventează un patognomonic și inversează sărăcia semnelor de la imunodeprimat."
  },
  "textbookExpressions": [
   "patognomonice",
   "câteva ore"
  ]
 },
 {
  "id": "sepsis-adv-061",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "La 72 de ore, când culturile sunt disponibile, cele cinci decizii posibile sunt:",
  "options": [
   "Oprirea antibioticului dacă, după reevaluare, se consideră că nu a existat infecție (confuzia putând avea multe cauze)",
   "Dezescaladarea la oral în infecții necomplicate (pneumonie, pielonefrită) după 2-3 zile, dacă pacientul e stabil și se ameliorează",
   "Schimbarea schemei (sediu neanticipat, ex. endocardită; sau rezistență, ex. ESBL care cere carbapenem i.v.)",
   "Continuarea i.v. (meningită, artrită septică) sau externarea pe OPAT",
   "Dezescaladarea se face spre spectru cât mai larg, pentru a acoperi C. difficile; cele cinci decizii se iau la 1 oră, înaintea oricărei culturi"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Oprirea antibioticului dacă, după reevaluare, se consideră că nu a existat infecție (confuzia putând avea multe cauze) — Corect: Oprirea după reevaluare este prima decizie.\n\nDezescaladarea la oral în infecții necomplicate (pneumonie, pielonefrită) după 2-3 zile, dacă pacientul e stabil și se ameliorează — Corect: Switch-ul oral la 2-3 zile în necomplicate este a doua.\n\nSchimbarea schemei (sediu neanticipat, ex. endocardită; sau rezistență, ex. ESBL care cere carbapenem i.v.) — Corect: Schimbarea schemei completează lista.\n\nContinuarea i.v. (meningită, artrită septică) sau externarea pe OPAT — Corect: Continuarea i.v. și OPAT sunt ultimele două decizii.\n\nDezescaladarea se face spre spectru cât mai larg, pentru a acoperi C. difficile; cele cinci decizii se iau la 1 oră, înaintea oricărei culturi — Incorect: Dezescaladarea urmărește spectrul îngust; cele cinci decizii sunt la 72 de ore, nu la 1 oră.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 159, Antibioterapia după 72 de ore — Cinci decizii (pagini PDF: 13).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    159
   ],
   "pdfPages": [
    13
   ],
   "section": "Antibioterapia după 72 de ore — Cinci decizii"
  },
  "learningObjective": "Reținerea celor cinci opțiuni (stop, oral, schimbare, i.v. continuu, OPAT) și a ferestrei 2-3 zile pentru switch.",
  "optionRationales": [
   "Oprirea după reevaluare este prima decizie.",
   "Switch-ul oral la 2-3 zile în necomplicate este a doua.",
   "Schimbarea schemei completează lista.",
   "Continuarea i.v. și OPAT sunt ultimele două decizii.",
   "Dezescaladarea urmărește spectrul îngust; cele cinci decizii sunt la 72 de ore, nu la 1 oră."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează spectrul îngust al dezescaladării și mută cele cinci decizii pe fereastra de 1 oră a empiricului."
  },
  "textbookExpressions": [
   "72 de ore",
   "2-3 zile"
  ]
 },
 {
  "id": "sepsis-adv-062",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "În medicina de familie din Marea Britanie, indicatorii de prescriere pentru ITU joasă necomplicată prevăd:",
  "options": [
   "Prescrierea de nitrofurantoină în loc de trimetoprim, fiind mai eficientă împotriva patogenilor urinari, inclusiv E. coli multirezistent",
   "Reducerea utilizării de ciprofloxacină și de amoxicilină/acid clavulanic",
   "Nitrofurantoina înlocuiește carbapenemul i.v. în pielonefrita ESBL",
   "Trimetoprimul este preferat nitrofurantoinei în ITU joasă, ciprofloxacina fiind KPI de crescut",
   "Co-amoxiclavul este prima linie de ITU joasă, nitrofurantoina fiind rezervată meningitei"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Prescrierea de nitrofurantoină în loc de trimetoprim, fiind mai eficientă împotriva patogenilor urinari, inclusiv E. coli multirezistent — Corect: Substituția nitrofurantoină–trimetoprim și eficacitatea pe E. coli rezistent sunt explicite.\n\nReducerea utilizării de ciprofloxacină și de amoxicilină/acid clavulanic — Corect: Reducerea cipro și co-amoxiclav este KPI-ul de practică generală.\n\nNitrofurantoina înlocuiește carbapenemul i.v. în pielonefrita ESBL — Incorect: Nitrofurantoina nu înlocuiește carbapenemul în pielonefrită ESBL.\n\nTrimetoprimul este preferat nitrofurantoinei în ITU joasă, ciprofloxacina fiind KPI de crescut — Incorect: Direcția KPI este inversă.\n\nCo-amoxiclavul este prima linie de ITU joasă, nitrofurantoina fiind rezervată meningitei — Incorect: Co-amoxiclavul se reduce, nu se promovează ca primă linie de ITU joasă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 159, Obiective specifice în Marea Britanie — Nitrofurantoină (pagini PDF: 13).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    159
   ],
   "pdfPages": [
    13
   ],
   "section": "Obiective specifice în Marea Britanie — Nitrofurantoină"
  },
  "learningObjective": "Contrastarea KPI-ului nitrofurantoină versus trimetoprim în ITU joasă cu reducerea cipro/co-amoxiclav.",
  "optionRationales": [
   "Substituția nitrofurantoină–trimetoprim și eficacitatea pe E. coli rezistent sunt explicite.",
   "Reducerea cipro și co-amoxiclav este KPI-ul de practică generală.",
   "Nitrofurantoina nu înlocuiește carbapenemul în pielonefrită ESBL.",
   "Direcția KPI este inversă.",
   "Co-amoxiclavul se reduce, nu se promovează ca primă linie de ITU joasă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută nitrofurantoina pe pielonefrită/ESBL i.v. și inversează KPI-ul trimetoprim versus nitrofurantoină."
  },
  "textbookExpressions": [
   "nitrofurantoină",
   "trimetoprim"
  ]
 },
 {
  "id": "sepsis-adv-063",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "La examenul obiectiv al sepsisului fără focar evident, sediile mai puțin acoperite anterior includ:",
  "options": [
   "Sensibilitate localizată spinală (discită sau abces) și sensibilitate în flancuri (pielonefrită)",
   "Suflu nou sau modificat (endocardită) și semne la dispozitive (Hickman: scurgere, indurație), cu culturi de la cateter",
   "La femei, tampoane rămase în vagin care pot provoca sindromul șocului toxic; flancul stâng comun în diverticulită",
   "Discita se exclude dacă există febră, suflul nou infirmând endocardita",
   "Tampoanele vaginale protejează de șocul toxic, Hickman-ul nefiind o poartă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sensibilitate localizată spinală (discită sau abces) și sensibilitate în flancuri (pielonefrită) — Corect: Discita/abcesul și flancurile de pielonefrită sunt din schemă.\n\nSuflu nou sau modificat (endocardită) și semne la dispozitive (Hickman: scurgere, indurație), cu culturi de la cateter — Corect: Suflul nou și dispozitivul Hickman sunt explicite.\n\nLa femei, tampoane rămase în vagin care pot provoca sindromul șocului toxic; flancul stâng comun în diverticulită — Corect: Tampoanele (TSS) și diverticulita stângă completează lista.\n\nDiscita se exclude dacă există febră, suflul nou infirmând endocardita — Incorect: Febra nu exclude discita; suflul nou o sugerează, nu o infirmă.\n\nTampoanele vaginale protejează de șocul toxic, Hickman-ul nefiind o poartă — Incorect: Tampoanele pot provoca TSS; Hickman-ul este poartă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 153, Examenul obiectiv — Sedii și semne (pagini PDF: 7).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    153
   ],
   "pdfPages": [
    7
   ],
   "section": "Examenul obiectiv — Sedii și semne"
  },
  "learningObjective": "Recunoașterea discitei, a suflului de endocardită, a Hickman-ului, a tamponului (TSS) și a diverticulitei de flanc stâng.",
  "optionRationales": [
   "Discita/abcesul și flancurile de pielonefrită sunt din schemă.",
   "Suflul nou și dispozitivul Hickman sunt explicite.",
   "Tampoanele (TSS) și diverticulita stângă completează lista.",
   "Febra nu exclude discita; suflul nou o sugerează, nu o infirmă.",
   "Tampoanele pot provoca TSS; Hickman-ul este poartă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează valoarea suflului nou și transformă tamponul (cauză de TSS) într-un factor protector."
  },
  "textbookExpressions": [
   "discită",
   "şocului toxic"
  ]
 },
 {
  "id": "sepsis-adv-064",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Betalactaminele, ca clasă folosită în sepsis:",
  "options": [
   "Blochează sinteza peretelui prin legarea de proteinele de legare a penicilinei (peptidaze) din ultima etapă a formării peretelui și a diviziunii",
   "Sunt în general bactericide pentru celulele susceptibile, într-o manieră dependentă de timp",
   "Modificări ale nucleului β-lactamic și/sau ale lanțului adiacent pot extinde spectrul la Gram-negativi și Gram-pozitivi",
   "Sunt bacteriostatice dependente de concentrație, fără țintă pe perete",
   "Nucleul β-lactamic nu poate fi modificat, spectrul rămânând identic penicilinei G"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Blochează sinteza peretelui prin legarea de proteinele de legare a penicilinei (peptidaze) din ultima etapă a formării peretelui și a diviziunii — Corect: Ținta PBP/peptidaze este explicită.\n\nSunt în general bactericide pentru celulele susceptibile, într-o manieră dependentă de timp — Corect: Bactericidia dependentă de timp este enunțată.\n\nModificări ale nucleului β-lactamic și/sau ale lanțului adiacent pot extinde spectrul la Gram-negativi și Gram-pozitivi — Corect: Modificările de nucleu/lanț extind spectrul.\n\nSunt bacteriostatice dependente de concentrație, fără țintă pe perete — Incorect: Nu sunt bacteriostatice concentration-dependent.\n\nNucleul β-lactamic nu poate fi modificat, spectrul rămânând identic penicilinei G — Incorect: Ingineria nucleului este tocmai baza generațiilor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 163, Antibiotice betalactamice — Mecanism (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    163
   ],
   "pdfPages": [
    17
   ],
   "section": "Antibiotice betalactamice — Mecanism"
  },
  "learningObjective": "Reținerea țintei PBP, a bactericidiei time-dependent și a ingineriei de nucleu/lanț.",
  "optionRationales": [
   "Ținta PBP/peptidaze este explicită.",
   "Bactericidia dependentă de timp este enunțată.",
   "Modificările de nucleu/lanț extind spectrul.",
   "Nu sunt bacteriostatice concentration-dependent.",
   "Ingineria nucleului este tocmai baza generațiilor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă betalactaminele în bacteriostatice concentration-dependent, inversând PK/PD din același paragraf."
  },
  "textbookExpressions": [
   "dependentă de timp",
   "proteinelor specifice legate de penicilină"
  ]
 },
 {
  "id": "sepsis-adv-065",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "Dintre cefalosporine, activitatea pe Pseudomonas aeruginosa este atribuită:",
  "options": [
   "Doar anumitor agenți, de exemplu ceftazidimă și cefepim",
   "Tuturor cefalosporinelor de generația a doua, enterococul fiind acoperit",
   "Cefalexinei orale, identic flucloxacilinei pe MSSA",
   "Nicio cefalosporină nu atinge Pseudomonas, aztreonamul fiind inutil",
   "Ceftazidima este inactivă pe Pseudomonas, cefepimul fiind rezervat anaerobilor"
  ],
  "correct": [
   0
  ],
  "explanation": "Doar anumitor agenți, de exemplu ceftazidimă și cefepim — Corect: Fraza „doar anumite cefalosporine (ex. ceftazidima și cefepim)” este explicită.\n\nTuturor cefalosporinelor de generația a doua, enterococul fiind acoperit — Incorect: Generația a doua nu acoperă Pseudomonas; enterococul este exceptat din spectru.\n\nCefalexinei orale, identic flucloxacilinei pe MSSA — Incorect: Cefalexina nu este agentul anti-Pseudomonas citat.\n\nNicio cefalosporină nu atinge Pseudomonas, aztreonamul fiind inutil — Incorect: Aztreonamul este folosit inclusiv în infecții cu P. aeruginosa.\n\nCeftazidima este inactivă pe Pseudomonas, cefepimul fiind rezervat anaerobilor — Incorect: Ceftazidima este exemplul anti-Pseudomonas.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 163, Cefalosporinele — Pseudomonas (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    163
   ],
   "pdfPages": [
    17
   ],
   "section": "Cefalosporinele — Pseudomonas"
  },
  "learningObjective": "Identificarea ceftazidimei și cefepimului ca excepțiile anti-Pseudomonas, celelalte cefalosporine neacoperind acest bacil.",
  "optionRationales": [
   "Fraza „doar anumite cefalosporine (ex. ceftazidima și cefepim)” este explicită.",
   "Generația a doua nu acoperă Pseudomonas; enterococul este exceptat din spectru.",
   "Cefalexina nu este agentul anti-Pseudomonas citat.",
   "Aztreonamul este folosit inclusiv în infecții cu P. aeruginosa.",
   "Ceftazidima este exemplul anti-Pseudomonas."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii extind anti-Pseudomonas la toată generația a doua sau îl neagă la ceftazidimă, exact excepția din paragraf."
  },
  "textbookExpressions": [
   "ceftazidima",
   "cefepim"
  ]
 },
 {
  "id": "sepsis-adv-066",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Efectele neurologice ale carbapenemelor, dincolo de spectrul de clasă deja consacrat, se caracterizează prin:",
  "options": [
   "Greața, vărsăturile și diareea sunt prezente în mai puțin de 5% din cazuri",
   "Imipenemul și ertapenemul pot produce convulsii și nu trebuie administrate în tratamentul meningitei, alternativa fiind meropenemul",
   "Convulsiile apar la peste 50% din tratați, meropenemul fiind interzis în meningită",
   "Diareea lipsește, clasa fiind fără efecte digestive",
   "Ertapenemul este macrolidul de elecție al meningitei, fără risc convulsiv"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Greața, vărsăturile și diareea sunt prezente în mai puțin de 5% din cazuri — Corect: Rata <5% pentru greață/vărsături/diaree este explicită.\n\nImipenemul și ertapenemul pot produce convulsii și nu trebuie administrate în tratamentul meningitei, alternativa fiind meropenemul — Corect: Convulsiile celor două molecule și meropenemul ca alternativă sunt din același paragraf.\n\nConvulsiile apar la peste 50% din tratați, meropenemul fiind interzis în meningită — Incorect: Textul nu descrie convulsii la 50%; meropenemul este alternativa, nu interdicția.\n\nDiareea lipsește, clasa fiind fără efecte digestive — Incorect: Diareea figurează printre efectele <5%.\n\nErtapenemul este macrolidul de elecție al meningitei, fără risc convulsiv — Incorect: Ertapenemul se evită în meningită; nu este macrolid.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 163, Carbapenemele — Convulsii și meningită (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    163
   ],
   "pdfPages": [
    17
   ],
   "section": "Carbapenemele — Convulsii și meningită"
  },
  "learningObjective": "Reținerea GI <5% și a perechii imipenem/ertapenem convulsivante versus meropenem în meningită.",
  "optionRationales": [
   "Rata <5% pentru greață/vărsături/diaree este explicită.",
   "Convulsiile celor două molecule și meropenemul ca alternativă sunt din același paragraf.",
   "Textul nu descrie convulsii la 50%; meropenemul este alternativa, nu interdicția.",
   "Diareea figurează printre efectele <5%.",
   "Ertapenemul se evită în meningită; nu este macrolid."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează meropenemul (alternativa de meningită) și umflă convulsiile de la un avertisment la 50%."
  },
  "textbookExpressions": [
   "convulsii",
   "meropenem"
  ]
 },
 {
  "id": "sepsis-adv-067",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Tigeciclina și tetraciclinele, dincolo de evitarea pompelor de eflux, se caracterizează prin:",
  "options": [
   "Tigeciclina este activă pe VRE, MRSA și Acinetobacter baumannii, dar nu pe Pseudomonas sau Proteus; indicațiile acceptate sunt SSTI complicate și sepsis intraabdominal",
   "Un avertisment FDA din 2010 slăbește eficiența în infecții severe, mai ales pneumonia asociată ventilației",
   "Tetraciclinele colorează maroniu dinții în dezvoltare, deci se evită la copii și gravide; fotosensibilitatea apare la 1 din 20; doxiciclina este mai sigură în insuficiență renală",
   "Tigeciclina este de primă intenție în pneumonia de ventilație și pe Pseudomonas",
   "Colorarea dentară lipsește, tetraciclinele fiind de elecție în sarcină"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tigeciclina este activă pe VRE, MRSA și Acinetobacter baumannii, dar nu pe Pseudomonas sau Proteus; indicațiile acceptate sunt SSTI complicate și sepsis intraabdominal — Corect: Spectrul cu excepțiile Pseudomonas/Proteus și indicațiile SSTI/intraabdominal sunt din paragraf.\n\nUn avertisment FDA din 2010 slăbește eficiența în infecții severe, mai ales pneumonia asociată ventilației — Corect: Avertismentul FDA 2010 pe VAP este explicit.\n\nTetraciclinele colorează maroniu dinții în dezvoltare, deci se evită la copii și gravide; fotosensibilitatea apare la 1 din 20; doxiciclina este mai sigură în insuficiență renală — Corect: Dinții, gravidele, 1/20 și doxiciclina renală completează toxicitatea.\n\nTigeciclina este de primă intenție în pneumonia de ventilație și pe Pseudomonas — Incorect: FDA slăbește tocmai VAP; Pseudomonas este exceptat.\n\nColorarea dentară lipsește, tetraciclinele fiind de elecție în sarcină — Incorect: Colorarea dentară contraindică copiii/gravidele.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 165, Tetraciclinele; Tigeciclina (pagini PDF: 19).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    165
   ],
   "pdfPages": [
    19
   ],
   "section": "Tetraciclinele; Tigeciclina"
  },
  "learningObjective": "Integrarea spectrului (fără Pseudomonas/Proteus), a avertismentului FDA pe VAP și a colorării dentare/fotosensibilității 1/20.",
  "optionRationales": [
   "Spectrul cu excepțiile Pseudomonas/Proteus și indicațiile SSTI/intraabdominal sunt din paragraf.",
   "Avertismentul FDA 2010 pe VAP este explicit.",
   "Dinții, gravidele, 1/20 și doxiciclina renală completează toxicitatea.",
   "FDA slăbește tocmai VAP; Pseudomonas este exceptat.",
   "Colorarea dentară contraindică copiii/gravidele."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă avertismentul FDA pe VAP într-o indicație de primă intenție și neagă colorarea dentară."
  },
  "textbookExpressions": [
   "tigeciclinei",
   "1 din 20"
  ]
 },
 {
  "id": "sepsis-adv-068",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Azitromicina, comparativ cu eritromicina:",
  "options": [
   "Penetrabilitate tisulară și intracelulară ridicate și timp de înjumătățire mai lung, care permite administrarea zilnică în doză unică",
   "Biodisponibilitate serică scăzută, care face problematică utilizarea în bacteriemii",
   "Este de primă intenție în endocardită și meningită, concentrația serică fiind maximă",
   "t½ scurt impune șase prize pe zi, identic eritromicinei i.v. iritante",
   "Penetrarea tisulară nulă o face inutilă în trahom sau holeră"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Penetrabilitate tisulară și intracelulară ridicate și timp de înjumătățire mai lung, care permite administrarea zilnică în doză unică — Corect: PK superioară și doza unică zilnică sunt explicite.\n\nBiodisponibilitate serică scăzută, care face problematică utilizarea în bacteriemii — Corect: Biodisponibilitatea serică scăzută și problema din bacteriemii sunt enunțate.\n\nEste de primă intenție în endocardită și meningită, concentrația serică fiind maximă — Incorect: Macrolidele nu sunt folosite curent în endocardită sau meningită.\n\nt½ scurt impune șase prize pe zi, identic eritromicinei i.v. iritante — Incorect: t½ lung permite o doză zilnică, nu șase.\n\nPenetrarea tisulară nulă o face inutilă în trahom sau holeră — Incorect: Este folosită în trahom, holeră și unele BTS.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 165, Macrolidele — Azitromicina (pagini PDF: 19).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    165
   ],
   "pdfPages": [
    19
   ],
   "section": "Macrolidele — Azitromicina"
  },
  "learningObjective": "Contrastarea t½ lung și a penetrării tisulare cu limita serică care o face problematică în bacteriemie.",
  "optionRationales": [
   "PK superioară și doza unică zilnică sunt explicite.",
   "Biodisponibilitatea serică scăzută și problema din bacteriemii sunt enunțate.",
   "Macrolidele nu sunt folosite curent în endocardită sau meningită.",
   "t½ lung permite o doză zilnică, nu șase.",
   "Este folosită în trahom, holeră și unele BTS."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează limita serică (bacteriemie) și o promovează în endocardită/meningită, pe care textul le exclude."
  },
  "textbookExpressions": [
   "doză unică",
   "bacteriemii"
  ]
 },
 {
  "id": "sepsis-adv-069",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Prelungirea QT la macrolide și colistimetatul sodic (CMS) se caracterizează prin:",
  "options": [
   "Prelungirea QT este un efect cardiac recunoscut al macrolidelor și poate duce la torsada vârfurilor; asocierea cu alte prelungitoare de QT se evită când nu este absolut necesară",
   "CMS este un prodrog inactiv, metabolizat in vivo în colistinul activ, ceea ce complică dozarea și crește potențialul de toxicitate",
   "Polimixinele rup membrana prin legare de LPS și sunt active pe majoritatea bacililor Gram-negativi, cu excepția Proteus și Providencia",
   "Macrolidele scurtează QT, CMS fiind forma activă orală fără metabolizare",
   "Colistinul oral înlocuiește meropenemul în meningită, QT-ul macrolidelor fiind protector"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Prelungirea QT este un efect cardiac recunoscut al macrolidelor și poate duce la torsada vârfurilor; asocierea cu alte prelungitoare de QT se evită când nu este absolut necesară — Corect: QT și torsada, plus evitarea asocierilor, sunt din paragraful macrolidelor.\n\nCMS este un prodrog inactiv, metabolizat in vivo în colistinul activ, ceea ce complică dozarea și crește potențialul de toxicitate — Corect: Prodrogul CMS și toxicitatea de dozare sunt explicite.\n\nPolimixinele rup membrana prin legare de LPS și sunt active pe majoritatea bacililor Gram-negativi, cu excepția Proteus și Providencia — Corect: LPS și excepțiile Proteus/Providencia completează mecanismul.\n\nMacrolidele scurtează QT, CMS fiind forma activă orală fără metabolizare — Incorect: Macrolidele prelungesc, nu scurtează, QT; CMS este prodrog.\n\nColistinul oral înlocuiește meropenemul în meningită, QT-ul macrolidelor fiind protector — Incorect: Colistinul nu este alternativa de meningită; meropenemul este.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 165, 166, Macrolide — QT; Polimixine — CMS (pagini PDF: 19, 20).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    165,
    166
   ],
   "pdfPages": [
    19,
    20
   ],
   "section": "Macrolide — QT; Polimixine — CMS"
  },
  "learningObjective": "Legarea torsadei de macrolide de statutul de prodrog al CMS și de excepțiile Proteus/Providencia.",
  "optionRationales": [
   "QT și torsada, plus evitarea asocierilor, sunt din paragraful macrolidelor.",
   "Prodrogul CMS și toxicitatea de dozare sunt explicite.",
   "LPS și excepțiile Proteus/Providencia completează mecanismul.",
   "Macrolidele prelungesc, nu scurtează, QT; CMS este prodrog.",
   "Colistinul nu este alternativa de meningită; meropenemul este."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează QT-ul macrolidelor și transformă CMS-ul (prodrog i.v.) în formă orală activă de meningită."
  },
  "textbookExpressions": [
   "torsadei vârfurilor",
   "prodrog inactiv"
  ]
 },
 {
  "id": "sepsis-adv-070",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "Dezescaladarea către un antibiotic cu spectru îngust, când culturile sunt disponibile, urmărește:",
  "options": [
   "Reducerea riscului de infecție cu Clostridioides difficile și a colonizării cu organisme multirezistente, în condiții de siguranță și de cost",
   "Păstrarea spectrului cât mai larg până la externare, C. difficile fiind prevenit de carbapeneme",
   "Oprirea oricărui oral, OPAT-ul fiind interzis după dezescaladare",
   "Înlocuirea de rutină a îngustului cu piperacilină-tazobactam, conform CQUIN",
   "Nicio schimbare la 72 de ore, cele cinci decizii fiind doar teoretice"
  ],
  "correct": [
   0
  ],
  "explanation": "Reducerea riscului de infecție cu Clostridioides difficile și a colonizării cu organisme multirezistente, în condiții de siguranță și de cost — Corect: C. difficile, MDR, siguranța și costul sunt fraza de închidere.\n\nPăstrarea spectrului cât mai larg până la externare, C. difficile fiind prevenit de carbapeneme — Incorect: Spectrul îngust, nu larg, este scopul; carbapenemele sunt tocmai țintele de redus.\n\nOprirea oricărui oral, OPAT-ul fiind interzis după dezescaladare — Incorect: OPAT este una dintre cele cinci decizii, nu o interdicție.\n\nÎnlocuirea de rutină a îngustului cu piperacilină-tazobactam, conform CQUIN — Incorect: CQUIN cere reducerea, nu creșterea, piperacilină-tazobactamului.\n\nNicio schimbare la 72 de ore, cele cinci decizii fiind doar teoretice — Incorect: Cele cinci decizii se aplică concret la 72 de ore.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 159, Administrarea prudentă — Spectru îngust (pagini PDF: 13).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    159
   ],
   "pdfPages": [
    13
   ],
   "section": "Administrarea prudentă — Spectru îngust"
  },
  "learningObjective": "Identificarea obiectivului dezescaladării: C. difficile ↓ și MDR ↓, nu păstrarea spectrului larg.",
  "optionRationales": [
   "C. difficile, MDR, siguranța și costul sunt fraza de închidere.",
   "Spectrul îngust, nu larg, este scopul; carbapenemele sunt tocmai țintele de redus.",
   "OPAT este una dintre cele cinci decizii, nu o interdicție.",
   "CQUIN cere reducerea, nu creșterea, piperacilină-tazobactamului.",
   "Cele cinci decizii se aplică concret la 72 de ore."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează dezescaladarea în conservarea spectrului larg, contrar obiectivului C. difficile/MDR din același paragraf."
  },
  "textbookExpressions": [
   "Clostrid￾ium difficile",
   "spectru îngust"
  ]
 },
 {
  "id": "sepsis-adv-071",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Conform Cadranului 8.7, dincolo de meningococ și Haemophilus, chemoprofilaxia include:",
  "options": [
   "Reumatism articular acut: fenoximetilpenicilină 250 mg doză dublă zilnică sau sulfadiazină 1 g la alergie la penicilină",
   "Tuberculoză: izoniazidă oral 300 mg zilnic 6 luni (copii 5-10 mg/kg zilnic) la contacți tuberculin-negativi, copii cu mame infectate și imunosupresați",
   "Splenectomia folosește 250 mg, identic reumatismului, izoniazida fiind de 2 zile ca rifampicina meningococică",
   "Sulfadiazina 1 g este de elecție la toți splenectomizații, fără alternativă de penicilină",
   "Izoniazida de 6 luni se dă ca doză unică de 500 mg ciprofloxacină"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Reumatism articular acut: fenoximetilpenicilină 250 mg doză dublă zilnică sau sulfadiazină 1 g la alergie la penicilină — Corect: 250 mg ×2/zi sau sulfadiazină 1 g sunt din rândul RAA.\n\nTuberculoză: izoniazidă oral 300 mg zilnic 6 luni (copii 5-10 mg/kg zilnic) la contacți tuberculin-negativi, copii cu mame infectate și imunosupresați — Corect: 300 mg ×6 luni și populațiile-țintă sunt din rândul TB.\n\nSplenectomia folosește 250 mg, identic reumatismului, izoniazida fiind de 2 zile ca rifampicina meningococică — Incorect: Splenectomia este 500 mg, nu 250 mg; izoniazida nu este 2 zile.\n\nSulfadiazina 1 g este de elecție la toți splenectomizații, fără alternativă de penicilină — Incorect: Sulfadiazina este alternativa de alergie din RAA, nu de elecție la splenectomie.\n\nIzoniazida de 6 luni se dă ca doză unică de 500 mg ciprofloxacină — Incorect: Ciprofloxacina 500 mg unică este alternativa meningococică, nu izoniazida.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 161, Cadranul 8.7 — Reumatism articular acut; Tuberculoză (pagini PDF: 15).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    161
   ],
   "pdfPages": [
    15
   ],
   "section": "Cadranul 8.7 — Reumatism articular acut; Tuberculoză"
  },
  "learningObjective": "Contrastarea 250 mg (RAA) versus 500 mg (splenectomie) și a izoniazidei 300 mg ×6 luni.",
  "optionRationales": [
   "250 mg ×2/zi sau sulfadiazină 1 g sunt din rândul RAA.",
   "300 mg ×6 luni și populațiile-țintă sunt din rândul TB.",
   "Splenectomia este 500 mg, nu 250 mg; izoniazida nu este 2 zile.",
   "Sulfadiazina este alternativa de alergie din RAA, nu de elecție la splenectomie.",
   "Ciprofloxacina 500 mg unică este alternativa meningococică, nu izoniazida."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută 250 mg (RAA) cu 500 mg (splenectomie) și izoniazida de 6 luni cu doza unică de ciprofloxacină."
  },
  "textbookExpressions": [
   "250 mg",
   "300 mg zilnic"
  ]
 },
 {
  "id": "sepsis-adv-072",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "În infecțiile severe streptococice, benzilpenicilina:",
  "options": [
   "Rămâne de primă intenție în anumite infecții severe, inclusiv endocardita streptococică și infecțiile cu streptococ de grup A care produc fasceită necrozantă sau gangrenă gazoasă, în general combinate cu alte antibiotice",
   "Nu trebuie folosită empiric în infecțiile severe fără confirmarea sensibilității, din cauza creșterii rezistenței",
   "Se dă empiric la orice sepsis comunitar, fără cultură, fiind inactivă pe S. pyogenes",
   "Înlocuiește debridarea în fasceita necrozantă, combinațiile fiind inutile",
   "Este rezervată ITU joase, ca nitrofurantoina"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Rămâne de primă intenție în anumite infecții severe, inclusiv endocardita streptococică și infecțiile cu streptococ de grup A care produc fasceită necrozantă sau gangrenă gazoasă, în general combinate cu alte antibiotice — Corect: Indicațiile severe și combinațiile sunt din paragraf.\n\nNu trebuie folosită empiric în infecțiile severe fără confirmarea sensibilității, din cauza creșterii rezistenței — Corect: Regula „nu empiric fără laborator” este explicită.\n\nSe dă empiric la orice sepsis comunitar, fără cultură, fiind inactivă pe S. pyogenes — Incorect: Este activă pe S. pyogenes; empiricul fără sensibilitate este descurajat.\n\nÎnlocuiește debridarea în fasceita necrozantă, combinațiile fiind inutile — Incorect: Debridarea rămâne controlul sursei; antibioticul se asociază.\n\nEste rezervată ITU joase, ca nitrofurantoina — Incorect: ITU joasă nu este indicația benzilpenicilinei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 163, Penicilinele — Benzilpenicilina în infecții severe (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    163
   ],
   "pdfPages": [
    17
   ],
   "section": "Penicilinele — Benzilpenicilina în infecții severe"
  },
  "learningObjective": "Reținerea indicațiilor (EI streptococică, fasceită/gangrenă gazoasă, de regulă în combinație) și a interdicției empirice fără sensibilitate.",
  "optionRationales": [
   "Indicațiile severe și combinațiile sunt din paragraf.",
   "Regula „nu empiric fără laborator” este explicită.",
   "Este activă pe S. pyogenes; empiricul fără sensibilitate este descurajat.",
   "Debridarea rămâne controlul sursei; antibioticul se asociază.",
   "ITU joasă nu este indicația benzilpenicilinei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă interdicția empirică într-un empiric universal și anulează debridarea din fasceită."
  },
  "textbookExpressions": [
   "fasceită necrozantă",
   "gangrenă gazoasă"
  ]
 },
 {
  "id": "sepsis-adv-073",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "Cefalosporinele de generația a doua și a treia sunt rezervate anumitor infecții severe deoarece:",
  "options": [
   "Tratamentul empiric al infecțiilor Gram-negative poate deveni ineficient din cauza ESBL și se asociază cu risc crescut de infecție cu C. difficile",
   "Sunt inactivate de toate penicilinazele stafilococice, spre deosebire de peniciline",
   "Enterococul și anaerobii Gram-negativi sunt acoperiți predictibil, ESBL-ul fiind irelevant",
   "C. difficile este prevenit de aceste generații, ESBL-ul neafectând cefalosporinele",
   "Se preferă empiric larg la ITU joasă, în loc de nitrofurantoină"
  ],
  "correct": [
   0
  ],
  "explanation": "Tratamentul empiric al infecțiilor Gram-negative poate deveni ineficient din cauza ESBL și se asociază cu risc crescut de infecție cu C. difficile — Corect: ESBL și C. difficile sunt cele două argumente de rezervare.\n\nSunt inactivate de toate penicilinazele stafilococice, spre deosebire de peniciline — Incorect: Textul spune că NU sunt inactivate de penicilinazele stafilococice (cu nuanța generației a cincea).\n\nEnterococul și anaerobii Gram-negativi sunt acoperiți predictibil, ESBL-ul fiind irelevant — Incorect: Enterococul și anaerobii Gram-negativi sunt excepții de spectru.\n\nC. difficile este prevenit de aceste generații, ESBL-ul neafectând cefalosporinele — Incorect: Relația cu C. difficile și ESBL este inversă.\n\nSe preferă empiric larg la ITU joasă, în loc de nitrofurantoină — Incorect: KPI-ul de ITU joasă promovează nitrofurantoina, nu cefalosporina empirică largă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 163, Cefalosporinele — Generațiile II-III (pagini PDF: 17).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    163
   ],
   "pdfPages": [
    17
   ],
   "section": "Cefalosporinele — Generațiile II-III"
  },
  "learningObjective": "Identificarea dublului motiv de rezervare: ESBL (ineficacitate empirică) și riscul de C. difficile.",
  "optionRationales": [
   "ESBL și C. difficile sunt cele două argumente de rezervare.",
   "Textul spune că NU sunt inactivate de penicilinazele stafilococice (cu nuanța generației a cincea).",
   "Enterococul și anaerobii Gram-negativi sunt excepții de spectru.",
   "Relația cu C. difficile și ESBL este inversă.",
   "KPI-ul de ITU joasă promovează nitrofurantoina, nu cefalosporina empirică largă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează avantajul față de penicilinaze și neagă riscul de C. difficile, cele două axe ale paragrafului."
  },
  "textbookExpressions": [
   "C. diffici/e",
   "generaţia a doua şi a treia"
  ]
 },
 {
  "id": "sepsis-adv-074",
  "topicId": "sepsis",
  "type": "CM",
  "stem": "Conform Cadranului 8.8, schemele de doză uzuale în sepsis includ:",
  "options": [
   "Piperacilină/tazobactam: (4 g + 0,5 g) ×3 i.v. standard, până la ×4 i.v. ca doză maximă",
   "Gentamicină 5 mg/kg ×1 i.v. (maxim 7 mg/kg); amikacină 20 mg/kg ×1 i.v. (maxim 30 mg/kg)",
   "Fosfomicină orală 3 g în doză unică",
   "Meropenemul în meningită: 2 g ×3 i.v. în 30 min (sau 3 ore)",
   "Gentamicina se administrează 3 g oral o dată, identic fosfomicinei de ITU"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Piperacilină/tazobactam: (4 g + 0,5 g) ×3 i.v. standard, până la ×4 i.v. ca doză maximă — Corect: Schema 4+0,5 g ×3 și maximul ×4 sunt din tabel.\n\nGentamicină 5 mg/kg ×1 i.v. (maxim 7 mg/kg); amikacină 20 mg/kg ×1 i.v. (maxim 30 mg/kg) — Corect: 5 mg/kg (max 7) versus 20 mg/kg (max 30) deosebesc gentamicina de amikacină.\n\nFosfomicină orală 3 g în doză unică — Corect: 3 g doză unică orală este fosfomicina.\n\nMeropenemul în meningită: 2 g ×3 i.v. în 30 min (sau 3 ore) — Corect: 2 g ×3 i.v. în 30 min (sau 3 ore) este nota de meningită a meropenemului.\n\nGentamicina se administrează 3 g oral o dată, identic fosfomicinei de ITU — Incorect: 3 g unică este fosfomicina, nu gentamicina.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 162, Cadranul 8.8 — Doze uzuale în sepsis (pagini PDF: 16).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    162
   ],
   "pdfPages": [
    16
   ],
   "section": "Cadranul 8.8 — Doze uzuale în sepsis"
  },
  "learningObjective": "Reținerea tazocinului 4+0,5 g ×3/×4, a aminoglicozidelor 5 versus 20 mg/kg, a fosfomicinei 3 g unică și a meropenemului 2 g ×3 în meningită.",
  "optionRationales": [
   "Schema 4+0,5 g ×3 și maximul ×4 sunt din tabel.",
   "5 mg/kg (max 7) versus 20 mg/kg (max 30) deosebesc gentamicina de amikacină.",
   "3 g doză unică orală este fosfomicina.",
   "2 g ×3 i.v. în 30 min (sau 3 ore) este nota de meningită a meropenemului.",
   "3 g unică este fosfomicina, nu gentamicina."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul permută 3 g de fosfomicină pe gentamicină, în timp ce celelalte opțiuni sunt doze din același cadran."
  },
  "textbookExpressions": [
   "4 g piperacilină",
   "3 g x 1 p.o."
  ]
 },
 {
  "id": "sepsis-adv-075",
  "topicId": "sepsis",
  "type": "CS",
  "stem": "La un pacient cu pneumonia asociată ventilației și o Acinetobacter producătoare de carbapenemază, capitolul plasează tigeciclina astfel:",
  "options": [
   "Este folosită tot mai mult în combinație (ex. cu polimixine) pentru Gram-negativi foarte rezistenți producători de carbapenemază, dar avertismentul FDA din 2010 cere îndrumare de specialist în infecții severe, mai ales VAP",
   "Este monoterapia de elecție a VAP, superioară combinațiilor, fără avertisment de eficacitate",
   "Este inactivă pe Acinetobacter, fiind rezervată Pseudomonas",
   "Antiacidele și fierul îi cresc eficiența în VAP",
   "Fotosensibilitatea de 1/20 o contraindică doar la ventilați, nu la SSTI"
  ],
  "correct": [
   0
  ],
  "explanation": "Este folosită tot mai mult în combinație (ex. cu polimixine) pentru Gram-negativi foarte rezistenți producători de carbapenemază, dar avertismentul FDA din 2010 cere îndrumare de specialist în infecții severe, mai ales VAP — Corect: Combinația cu polimixine și avertismentul FDA pe VAP sunt din același paragraf.\n\nEste monoterapia de elecție a VAP, superioară combinațiilor, fără avertisment de eficacitate — Incorect: FDA slăbește, nu promovează, monoterapia în VAP.\n\nEste inactivă pe Acinetobacter, fiind rezervată Pseudomonas — Incorect: Acinetobacter este inclus; Pseudomonas este exceptat.\n\nAntiacidele și fierul îi cresc eficiența în VAP — Incorect: Antiacidele și fierul reduc eficiența tetraciclinelor.\n\nFotosensibilitatea de 1/20 o contraindică doar la ventilați, nu la SSTI — Incorect: Fotosensibilitatea 1/20 este a clasei, nu o regulă doar de VAP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 8, p. 165, Tigeciclina — Combinații și VAP (pagini PDF: 19).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 8,
   "printedPages": [
    165
   ],
   "pdfPages": [
    19
   ],
   "section": "Tigeciclina — Combinații și VAP"
  },
  "learningObjective": "Aplicarea dublei nuanțe: uz în combinație pe carbapenemaze versus slăbirea FDA în VAP.",
  "optionRationales": [
   "Combinația cu polimixine și avertismentul FDA pe VAP sunt din același paragraf.",
   "FDA slăbește, nu promovează, monoterapia în VAP.",
   "Acinetobacter este inclus; Pseudomonas este exceptat.",
   "Antiacidele și fierul reduc eficiența tetraciclinelor.",
   "Fotosensibilitatea 1/20 este a clasei, nu o regulă doar de VAP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vigneta cere coexistența uzului pe carbapenemaze cu avertismentul FDA pe VAP, două mesaje opuse din același paragraf."
  },
  "textbookExpressions": [
   "pneumonia asociată",
   "polimixine"
  ]
 }
];
