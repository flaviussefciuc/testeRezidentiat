import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_GASTRO:(Question&Record<string,unknown>)[]=[
 {
  "id": "gastro-adv-001",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la diagnosticul și investigațiile paraclinice din boala de reflux gastro-esofagian:",
  "options": [
   "Pacienții cu vârsta sub 45 de ani, fără semne de alarmă, pot fi tratați fără investigații de primă intenție",
   "Un scor DeMeester compozit mai mare de 14,72 indică prezența refluxului",
   "Monitorizarea pH-ului intraluminal este indicată în principal la pacienții care răspund bine la IPP",
   "Episoadele de reflux la monitorizarea pH-ului sunt definite prin scăderea pH-ului esofagian sub 4,0",
   "Capsula Bravo necesită menținerea unui tub nazogastric cu senzor timp de 24 de ore"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Pacienții cu vârsta sub 45 de ani, fără semne de alarmă, pot fi tratați fără investigații de primă intenție — Corect: Textul precizează că, în absența semnelor de alarmă (în special disfagie), pacienții sub 45 de ani pot fi tratați în deplină siguranță fără investigații de primă intenție.\n\nUn scor DeMeester compozit mai mare de 14,72 indică prezența refluxului — Corect: Scorul compozit DeMeester peste 14,72 indică prezența refluxului la monitorizarea ambulatorie a pH-ului.\n\nMonitorizarea pH-ului intraluminal este indicată în principal la pacienții care răspund bine la IPP — Incorect: Textul indică opusul: monitorizarea pH-ului este utilă dacă nu există răspuns la IPP și este recomandată pentru confirmarea refluxului înaintea chirurgiei.\n\nEpisoadele de reflux la monitorizarea pH-ului sunt definite prin scăderea pH-ului esofagian sub 4,0 — Corect: Textul cere o corelație bună între prezența refluxului, definit prin pH sub 4,0, și simptomatologie.\n\nCapsula Bravo necesită menținerea unui tub nazogastric cu senzor timp de 24 de ore — Incorect: Capsula Bravo este o sondă wireless atașată la esofagul inferior tocmai pentru a evita tubul nazogastric, detașându-se spontan și fiind eliminată prin scaun.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1163, Faringele și esofagul — Boala de reflux gastro-esofagian: diagnostic și investigații paraclinice (pagini PDF: 292).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1163
   ],
   "pdfPages": [
    292
   ],
   "section": "Faringele și esofagul — Boala de reflux gastro-esofagian: diagnostic și investigații paraclinice"
  },
  "learningObjective": "Aplicarea criteriilor de vârstă și de alarmă pentru investigarea refluxului și interpretarea corectă a parametrilor monitorizării pH-ului esofagian pe 24 de ore.",
  "optionRationales": [
   "Textul precizează că, în absența semnelor de alarmă (în special disfagie), pacienții sub 45 de ani pot fi tratați în deplină siguranță fără investigații de primă intenție.",
   "Scorul compozit DeMeester peste 14,72 indică prezența refluxului la monitorizarea ambulatorie a pH-ului.",
   "Textul indică opusul: monitorizarea pH-ului este utilă dacă nu există răspuns la IPP și este recomandată pentru confirmarea refluxului înaintea chirurgiei.",
   "Textul cere o corelație bună între prezența refluxului, definit prin pH sub 4,0, și simptomatologie.",
   "Capsula Bravo este o sondă wireless atașată la esofagul inferior tocmai pentru a evita tubul nazogastric, detașându-se spontan și fiind eliminată prin scaun."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Combină un prag numeric precis (14,72) cu inversarea indicației monitorizării pH-ului și cu o confuzie tehnică între sonda clasică și capsula wireless."
  },
  "textbookExpressions": [
   "scorul DeMeester",
   "capsulă Bravo"
  ]
 },
 {
  "id": "gastro-adv-002",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Tratamentul bolii de reflux gastro-esofagian:",
  "options": [
   "Inhibitorii pompei de protoni reduc secreția de acid gastric cu până la 90%",
   "Fundoplicatura Nissen laparoscopică are o rată de succes de peste 90% la 5 ani în cazuri bine selectate",
   "Hernia hiatală prin alunecare constituie prin ea însăși o indicație de tratament chirurgical, chiar în absența refluxului",
   "Cea mai frecventă cauză de eșec a fundoplicaturii este hernia hiatală recurentă",
   "Pacienții cu sistemul Linx in situ nu pot beneficia de examinare prin RMN"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "Inhibitorii pompei de protoni reduc secreția de acid gastric cu până la 90% — Corect: Textul precizează că IPP reduc secreția acidă gastrică cu până la 90% și sunt medicamentele de elecție în afara formelor ușoare.\n\nFundoplicatura Nissen laparoscopică are o rată de succes de peste 90% la 5 ani în cazuri bine selectate — Corect: Fundoplicatura Nissen laparoscopică are o rată de succes de peste 90% la 5 ani, cu 88% la 10 ani, în cazuri foarte bine selectate.\n\nHernia hiatală prin alunecare constituie prin ea însăși o indicație de tratament chirurgical, chiar în absența refluxului — Incorect: Textul indică opusul: intervenția chirurgicală nu trebuie efectuată numai pentru tratamentul herniei hiatale, predictorii de succes fiind refluxul acid documentat corelat cu simptomele.\n\nCea mai frecventă cauză de eșec a fundoplicaturii este hernia hiatală recurentă — Corect: Textul afirmă explicit că hernia hiatală recurentă este cea mai frecventă cauză a eșecului fundoplicaturii.\n\nPacienții cu sistemul Linx in situ nu pot beneficia de examinare prin RMN — Corect: Sistemul Linx este format dintr-un rând de magneți, iar pacienții nu pot fi examinați prin RMN cât timp dispozitivul este in situ.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1164, 1163, Faringele și esofagul — Boala de reflux gastro-esofagian: tratament medicamentos și chirurgical (pagini PDF: 293, 292).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1164,
    1163
   ],
   "pdfPages": [
    293,
    292
   ],
   "section": "Faringele și esofagul — Boala de reflux gastro-esofagian: tratament medicamentos și chirurgical"
  },
  "learningObjective": "Compararea eficacității IPP cu rezultatele și limitele tratamentului chirurgical (fundoplicatură, dispozitiv Linx) în boala de reflux.",
  "optionRationales": [
   "Textul precizează că IPP reduc secreția acidă gastrică cu până la 90% și sunt medicamentele de elecție în afara formelor ușoare.",
   "Fundoplicatura Nissen laparoscopică are o rată de succes de peste 90% la 5 ani, cu 88% la 10 ani, în cazuri foarte bine selectate.",
   "Textul indică opusul: intervenția chirurgicală nu trebuie efectuată numai pentru tratamentul herniei hiatale, predictorii de succes fiind refluxul acid documentat corelat cu simptomele.",
   "Textul afirmă explicit că hernia hiatală recurentă este cea mai frecventă cauză a eșecului fundoplicaturii.",
   "Sistemul Linx este format dintr-un rând de magneți, iar pacienții nu pot fi examinați prin RMN cât timp dispozitivul este in situ."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul transformă hernia hiatală din contraindicație relativă la chirurgia izolată într-o indicație operatorie, pe fondul unor procente reale care trebuie recunoscute."
  },
  "textbookExpressions": [
   "hernia hiatală recurentă",
   "readuc joncţiunea esogastrică"
  ]
 },
 {
  "id": "gastro-adv-003",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Riscul anual de dezvoltare a adenocarcinomului esofagian la pacienții cu esofag Barrett este de aproximativ:",
  "options": [
   "0,12-0,5%",
   "1%",
   "4,3%",
   "5-15%",
   "30-50%"
  ],
  "correct": [
   0
  ],
  "explanation": "0,12-0,5% — Corect: Textul precizează că aproximativ 0,12-0,5% dintre pacienții cu esofag Barrett dezvoltă anual adenocarcinom esofagian.\n\n1% — Incorect: Valoarea de aproape 1% reprezintă, conform datelor recente, riscul pe toată perioada vieții, nu riscul anual.\n\n4,3% — Incorect: Cifra de 4,3 corespunde creșterii riscului de esofag Barrett prin obezitate abdominală, nu riscului de adenocarcinom.\n\n5-15% — Incorect: Procentele de 5% și 15% reprezintă frecvența variantelor cu segment lung și scurt la pacienții endoscopiați pentru simptome de reflux.\n\n30-50% — Incorect: Creșterea de 30 până la 50 de ori a riscului provine din studiile inițiale și este un risc relativ, nu o incidență anuală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1165, Faringele și esofagul — Complicațiile bolii de reflux: esofagul Barrett (pagini PDF: 294).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1165
   ],
   "pdfPages": [
    294
   ],
   "section": "Faringele și esofagul — Complicațiile bolii de reflux: esofagul Barrett"
  },
  "learningObjective": "Diferențierea riscului anual de adenocarcinom din esofagul Barrett de celelalte valori numerice (risc pe viață, risc relativ, prevalență) prezentate în același context.",
  "optionRationales": [
   "Textul precizează că aproximativ 0,12-0,5% dintre pacienții cu esofag Barrett dezvoltă anual adenocarcinom esofagian.",
   "Valoarea de aproape 1% reprezintă, conform datelor recente, riscul pe toată perioada vieții, nu riscul anual.",
   "Cifra de 4,3 corespunde creșterii riscului de esofag Barrett prin obezitate abdominală, nu riscului de adenocarcinom.",
   "Procentele de 5% și 15% reprezintă frecvența variantelor cu segment lung și scurt la pacienții endoscopiați pentru simptome de reflux.",
   "Creșterea de 30 până la 50 de ori a riscului provine din studiile inițiale și este un risc relativ, nu o incidență anuală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate cele cinci valori numerice apar pe aceeași pagină în legătură cu esofagul Barrett, iar candidatul trebuie să atribuie fiecăreia semnificația corectă."
  },
  "textbookExpressions": [
   "Obezitatea abdominală creşte riscul",
   "adenocarcinom esofagian"
  ]
 },
 {
  "id": "gastro-adv-004",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații privind metodele de diagnostic ale infecției cu Helicobacter pylori sunt adevărate?",
  "options": [
   "Serologia IgG este metoda recomandată pentru confirmarea eradicării la 6 săptămâni după tratament",
   "Înaintea testului respirator cu uree marcată cu 13C pacientul nu trebuie să fi primit antibiotice în ultimele 4 săptămâni",
   "Înaintea dozării antigenului fecal IPP se întrerup timp de 2 săptămâni, dar blocanții receptorilor H2 pot fi continuați",
   "Testul rapid ureazic din biopsia gastrică poate fi fals negativ la pacienții aflați sub tratament cu IPP",
   "Sensibilitatea examenului histopatologic este mai puternic influențată de IPP decât cea a testului ureazic"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "explanation": "Serologia IgG este metoda recomandată pentru confirmarea eradicării la 6 săptămâni după tratament — Incorect: Textul precizează că reducerea cu 50% a titrului IgG poate dura până la 1 an, astfel că serologia nu este utilă pentru confirmarea eradicării.\n\nÎnaintea testului respirator cu uree marcată cu 13C pacientul nu trebuie să fi primit antibiotice în ultimele 4 săptămâni — Corect: Sensibilitatea testului respirator se îmbunătățește dacă pacientul nu a consumat antibiotice în ultimele 4 săptămâni și nici IPP în ultimele 2 săptămâni.\n\nÎnaintea dozării antigenului fecal IPP se întrerup timp de 2 săptămâni, dar blocanții receptorilor H2 pot fi continuați — Corect: Textul indică întreruperea IPP timp de 2 săptămâni înaintea dozării antigenului fecal, cu posibilitatea continuării blocanților H2.\n\nTestul rapid ureazic din biopsia gastrică poate fi fals negativ la pacienții aflați sub tratament cu IPP — Corect: Testul CLO poate fi fals negativ dacă pacientul se află sub tratament cu IPP sau antibiotice la momentul examinării.\n\nSensibilitatea examenului histopatologic este mai puternic influențată de IPP decât cea a testului ureazic — Incorect: Textul indică opusul: sensibilitatea histopatologiei este redusă sub IPP, dar mai puțin influențată decât în cazul testului cu urează.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1174, Stomacul și duodenul — Diagnosticul infecției cu Helicobacter pylori (pagini PDF: 298).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1174
   ],
   "pdfPages": [
    298
   ],
   "section": "Stomacul și duodenul — Diagnosticul infecției cu Helicobacter pylori"
  },
  "learningObjective": "Alegerea corectă a testului pentru diagnostic sau pentru confirmarea eradicării H. pylori și cunoașterea condițiilor de pregătire care influențează sensibilitatea.",
  "optionRationales": [
   "Textul precizează că reducerea cu 50% a titrului IgG poate dura până la 1 an, astfel că serologia nu este utilă pentru confirmarea eradicării.",
   "Sensibilitatea testului respirator se îmbunătățește dacă pacientul nu a consumat antibiotice în ultimele 4 săptămâni și nici IPP în ultimele 2 săptămâni.",
   "Textul indică întreruperea IPP timp de 2 săptămâni înaintea dozării antigenului fecal, cu posibilitatea continuării blocanților H2.",
   "Testul CLO poate fi fals negativ dacă pacientul se află sub tratament cu IPP sau antibiotice la momentul examinării.",
   "Textul indică opusul: sensibilitatea histopatologiei este redusă sub IPP, dar mai puțin influențată decât în cazul testului cu urează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Solicită distincția fină între efectul IPP asupra a trei teste diferite și cunoașterea comportamentului diferit al IPP față de blocanții H2 înaintea testării."
  },
  "textbookExpressions": [
   "spectrometru de masă",
   "roşu fenol"
  ]
 },
 {
  "id": "gastro-adv-005",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Terapia de eradicare a infecției cu Helicobacter pylori:",
  "options": [
   "Terapia cvadruplă cu bismut este recomandată ca primă linie din cauza creșterii rezistenței la claritromicină",
   "Rezistența la amoxicilină și la tetraciclină depășește 50% în majoritatea țărilor dezvoltate",
   "Prelungirea tratamentului la 14 zile crește rata de eradicare, dar efectele adverse pot reduce complianța",
   "Re-infecția după eradicare este frecventă, de peste 10%, în țările dezvoltate",
   "Claritromicina este eficientă în monoterapie dacă se asociază cu IPP în doză standard"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Terapia cvadruplă cu bismut este recomandată ca primă linie din cauza creșterii rezistenței la claritromicină — Corect: Textul precizează că terapia cvadruplă care conține bismut este recomandată ca tratament de primă linie datorită creșterii rezistenței la claritromicină.\n\nRezistența la amoxicilină și la tetraciclină depășește 50% în majoritatea țărilor dezvoltate — Incorect: Textul indică o rezistență scăzută la amoxicilină (1-2%) și tetraciclină (sub 1%), cu excepția țărilor în care acestea se eliberează fără prescripție.\n\nPrelungirea tratamentului la 14 zile crește rata de eradicare, dar efectele adverse pot reduce complianța — Corect: Tratamentul de două săptămâni crește rata de eradicare, însă efectele adverse pot reduce complianța, conform textului.\n\nRe-infecția după eradicare este frecventă, de peste 10%, în țările dezvoltate — Incorect: Re-infecția este foarte neobișnuită (1%) în țările dezvoltate; ea este mai frecventă în țările în curs de dezvoltare.\n\nClaritromicina este eficientă în monoterapie dacă se asociază cu IPP în doză standard — Incorect: Niciunul dintre antibiotice nu este eficient singur; regimurile includ de regulă două antibiotice și o doză dublă de IPP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1175, Stomacul și duodenul — Boala ulceroasă peptică: terapia de eradicare (pagini PDF: 299).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1175
   ],
   "pdfPages": [
    299
   ],
   "section": "Stomacul și duodenul — Boala ulceroasă peptică: terapia de eradicare"
  },
  "learningObjective": "Cunoașterea principiilor regimurilor de eradicare, a profilului de rezistență al antibioticelor utilizate și a ratelor de succes și re-infecție.",
  "optionRationales": [
   "Textul precizează că terapia cvadruplă care conține bismut este recomandată ca tratament de primă linie datorită creșterii rezistenței la claritromicină.",
   "Textul indică o rezistență scăzută la amoxicilină (1-2%) și tetraciclină (sub 1%), cu excepția țărilor în care acestea se eliberează fără prescripție.",
   "Tratamentul de două săptămâni crește rata de eradicare, însă efectele adverse pot reduce complianța, conform textului.",
   "Re-infecția este foarte neobișnuită (1%) în țările dezvoltate; ea este mai frecventă în țările în curs de dezvoltare.",
   "Niciunul dintre antibiotice nu este eficient singur; regimurile includ de regulă două antibiotice și o doză dublă de IPP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie amoxicilinei și tetraciclinei rata de rezistență a metronidazolului și inversează raritatea re-infecției, valori care trebuie diferențiate precis."
  },
  "textbookExpressions": [
   "Subcitratul de bismut",
   "Terapia cvadruplă care conţine bismut"
  ]
 },
 {
  "id": "gastro-adv-006",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Un pacient de 72 de ani cu poliartrită reumatoidă severă, care nu poate întrerupe AINS, are antecedente de ulcer duodenal complicat cu hemoragie și urmează tratament anticoagulant. Dozarea antigenului fecal Helicobacter pylori este pozitivă. Care dintre următoarele măsuri sunt recomandate?",
  "options": [
   "Inițierea terapiei de eradicare a infecției cu H. pylori",
   "Înlocuirea AINS cu un inhibitor selectiv COX-2, indiferent de riscul cardiovascular al pacientului",
   "Terapie citoprotectoare profilactică cu un inhibitor al pompei de protoni",
   "Preferarea misoprostolului față de IPP, fiind mai bine tolerat la vârstnici",
   "Utilizarea unui AINS cu efecte adverse gastrointestinale reduse, în cea mai mică doză eficientă"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "explanation": "Inițierea terapiei de eradicare a infecției cu H. pylori — Corect: Textul recomandă inițierea terapiei de eradicare la pacienții H. pylori pozitivi, infecția și AINS fiind factori de risc independenți și sinergici.\n\nÎnlocuirea AINS cu un inhibitor selectiv COX-2, indiferent de riscul cardiovascular al pacientului — Incorect: Textul limitează utilizarea inhibitorului selectiv COX-2 la pacienții fără risc cardiovascular, nu la orice pacient.\n\nTerapie citoprotectoare profilactică cu un inhibitor al pompei de protoni — Corect: Terapia citoprotectoare profilactică (IPP sau misoprostol) este indicată la pacienții cu risc ridicat: vârstă peste 65 de ani, antecedente de ulcer complicat, anticoagulante.\n\nPreferarea misoprostolului față de IPP, fiind mai bine tolerat la vârstnici — Incorect: Textul indică opusul: IPP sunt mai bine tolerate decât misoprostolul, care provoacă diaree.\n\nUtilizarea unui AINS cu efecte adverse gastrointestinale reduse, în cea mai mică doză eficientă — Corect: Când AINS nu poate fi oprit, textul recomandă un AINS cu efecte gastrointestinale reduse, în cea mai mică doză eficientă posibilă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1176, Stomacul și duodenul — Antiinflamatoarele nesteroidiene, Helicobacter pylori și boala ulceroasă (pagini PDF: 300).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1176
   ],
   "pdfPages": [
    300
   ],
   "section": "Stomacul și duodenul — Antiinflamatoarele nesteroidiene, Helicobacter pylori și boala ulceroasă"
  },
  "learningObjective": "Aplicarea măsurilor de prevenție a ulcerului indus de AINS la un pacient cu risc ridicat care nu poate întrerupe antiinflamatorul.",
  "optionRationales": [
   "Textul recomandă inițierea terapiei de eradicare la pacienții H. pylori pozitivi, infecția și AINS fiind factori de risc independenți și sinergici.",
   "Textul limitează utilizarea inhibitorului selectiv COX-2 la pacienții fără risc cardiovascular, nu la orice pacient.",
   "Terapia citoprotectoare profilactică (IPP sau misoprostol) este indicată la pacienții cu risc ridicat: vârstă peste 65 de ani, antecedente de ulcer complicat, anticoagulante.",
   "Textul indică opusul: IPP sunt mai bine tolerate decât misoprostolul, care provoacă diaree.",
   "Când AINS nu poate fi oprit, textul recomandă un AINS cu efecte gastrointestinale reduse, în cea mai mică doză eficientă posibilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vigneta cumulează mai mulți factori de risc, iar distractorii extind indicația COX-2 dincolo de restricția cardiovasculară și inversează tolerabilitatea misoprostolului față de IPP."
  },
  "textbookExpressions": [
   "analog sintetic al prostaglandinei E1",
   "factori de risc independenţi şi sinergici"
  ]
 },
 {
  "id": "gastro-adv-007",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Următoarele afirmații despre factorii de risc ai bolilor inflamatorii intestinale sunt adevărate:",
  "options": [
   "Fumatul crește riscul de colită ulcerativă, iar nicotina agravează evoluția acesteia",
   "Mutațiile genei NOD2 (CARD15) de pe cromozomul 16 cresc riscul de boală Crohn ileală",
   "Rata de concordanță pentru boala Crohn este de 10% la gemenii monozigoți și de 20-50% la cei dizigoți",
   "Istoricul familial pozitiv este cel mai mare factor de risc independent pentru dezvoltarea BII",
   "Apendicectomia efectuată înaintea vârstei de 20 de ani pare protectoare împotriva colitei ulcerative"
  ],
  "correct": [
   1,
   3,
   4
  ],
  "explanation": "Fumatul crește riscul de colită ulcerativă, iar nicotina agravează evoluția acesteia — Incorect: Textul indică opusul: riscul de colită ulcerativă este crescut la nefumători sau foști fumători, iar nicotina s-a dovedit eficientă ca tratament într-un studiu restrâns.\n\nMutațiile genei NOD2 (CARD15) de pe cromozomul 16 cresc riscul de boală Crohn ileală — Corect: Indivizii homozigoți sau heterozigoți compuși pentru mutații NOD2 (cromozomul 16) au risc semnificativ crescut de boală Crohn ileală.\n\nRata de concordanță pentru boala Crohn este de 10% la gemenii monozigoți și de 20-50% la cei dizigoți — Incorect: Textul inversează valorile: concordanța pentru boala Crohn este de 20-50% la gemenii monozigoți și de 10% la cei dizigoți.\n\nIstoricul familial pozitiv este cel mai mare factor de risc independent pentru dezvoltarea BII — Corect: Textul precizează că istoricul familial pozitiv este cel mai mare factor de risc independent pentru BII.\n\nApendicectomia efectuată înaintea vârstei de 20 de ani pare protectoare împotriva colitei ulcerative — Corect: Apendicectomia pare protectoare împotriva colitei ulcerative, în special dacă a fost realizată înaintea vârstei de 20 de ani.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1198, Bolile inflamatorii intestinale — Etiologie și patogeneză: factori genetici și de mediu (pagini PDF: 301).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1198
   ],
   "pdfPages": [
    301
   ],
   "section": "Bolile inflamatorii intestinale — Etiologie și patogeneză: factori genetici și de mediu"
  },
  "learningObjective": "Diferențierea efectelor opuse ale fumatului și apendicectomiei asupra bolii Crohn față de colita ulcerativă și cunoașterea ponderii factorilor genetici.",
  "optionRationales": [
   "Textul indică opusul: riscul de colită ulcerativă este crescut la nefumători sau foști fumători, iar nicotina s-a dovedit eficientă ca tratament într-un studiu restrâns.",
   "Indivizii homozigoți sau heterozigoți compuși pentru mutații NOD2 (cromozomul 16) au risc semnificativ crescut de boală Crohn ileală.",
   "Textul inversează valorile: concordanța pentru boala Crohn este de 20-50% la gemenii monozigoți și de 10% la cei dizigoți.",
   "Textul precizează că istoricul familial pozitiv este cel mai mare factor de risc independent pentru BII.",
   "Apendicectomia pare protectoare împotriva colitei ulcerative, în special dacă a fost realizată înaintea vârstei de 20 de ani."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează direcția efectului fumatului în colita ulcerativă și schimbă între ele ratele de concordanță la gemenii mono- și dizigoți."
  },
  "textbookExpressions": [
   "senzor intracelular al peptidoglicanului",
   "colită nedeterminată"
  ]
 },
 {
  "id": "gastro-adv-008",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații diferențiază corect boala Crohn de colita ulcerativă?",
  "options": [
   "În boala Crohn inflamația este profundă, transmurală, iar în colita ulcerativă este superficială, limitată la mucoasă",
   "Granuloamele non-cazeificante sunt prezente la 50-60% dintre pacienții cu boală Crohn și sunt rare în colita ulcerativă",
   "Abcesele criptice sunt mai frecvente în colita ulcerativă decât în boala Crohn",
   "Depleția celulelor caliciforme este caracteristică bolii Crohn, acestea fiind prezente în colita ulcerativă",
   "Anticorpii ASCA se asociază cu boala Crohn, iar pANCA cu colita ulcerativă"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "În boala Crohn inflamația este profundă, transmurală, iar în colita ulcerativă este superficială, limitată la mucoasă — Corect: Textul precizează că în boala Crohn inflamația se extinde transmural, iar în colita ulcerativă este limitată la mucoasă.\n\nGranuloamele non-cazeificante sunt prezente la 50-60% dintre pacienții cu boală Crohn și sunt rare în colita ulcerativă — Corect: Granuloamele, agregate non-cazeificante de celule epitelioide și celule gigante Langhans, apar la 50-60% dintre pacienții cu boală Crohn și sunt rare în colita ulcerativă.\n\nAbcesele criptice sunt mai frecvente în colita ulcerativă decât în boala Crohn — Corect: Tabelul 32.38 indică abcese criptice ++ în colita ulcerativă față de + în boala Crohn.\n\nDepleția celulelor caliciforme este caracteristică bolii Crohn, acestea fiind prezente în colita ulcerativă — Incorect: Tabelul indică opusul: celulele caliciforme sunt prezente în boala Crohn și au număr scăzut în colita ulcerativă.\n\nAnticorpii ASCA se asociază cu boala Crohn, iar pANCA cu colita ulcerativă — Corect: Testarea ANCA în colita ulcerativă și ASCA în boala Crohn poate fi utilă în diagnosticul diferențial, conform textului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1201, 1200, Bolile inflamatorii intestinale — Anatomie patologică: diferențe histologice și serologice între boala Crohn și colita ulcerativă (pagini PDF: 304, 303).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1201,
    1200
   ],
   "pdfPages": [
    304,
    303
   ],
   "section": "Bolile inflamatorii intestinale — Anatomie patologică: diferențe histologice și serologice între boala Crohn și colita ulcerativă"
  },
  "learningObjective": "Utilizarea criteriilor histologice (Cadranul 32.38) și serologice pentru diferențierea bolii Crohn de colita ulcerativă.",
  "optionRationales": [
   "Textul precizează că în boala Crohn inflamația se extinde transmural, iar în colita ulcerativă este limitată la mucoasă.",
   "Granuloamele, agregate non-cazeificante de celule epitelioide și celule gigante Langhans, apar la 50-60% dintre pacienții cu boală Crohn și sunt rare în colita ulcerativă.",
   "Tabelul 32.38 indică abcese criptice ++ în colita ulcerativă față de + în boala Crohn.",
   "Tabelul indică opusul: celulele caliciforme sunt prezente în boala Crohn și au număr scăzut în colita ulcerativă.",
   "Testarea ANCA în colita ulcerativă și ASCA în boala Crohn poate fi utilă în diagnosticul diferențial, conform textului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Solicită memorarea direcției fiecărei diferențe din tabelul histologic, distractorul inversând un singur rând (celulele caliciforme) într-o listă altfel corectă."
  },
  "textbookExpressions": [
   "anti-Saccharomyces cerevisiae",
   "Abcese criptice"
  ]
 },
 {
  "id": "gastro-adv-009",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la investigațiile din boala Crohn:",
  "options": [
   "Anemia megaloblastică prin deficit de vitamina B12 este frecventă, din cauza afectării ileonului terminal",
   "Prezența stricturilor intestinului subțire constituie contraindicație pentru evaluarea prin capsulă endoscopică",
   "Testele serologice relevă în mod tipic pANCA pozitiv și ASCA negativ",
   "Colonoscopia completă cu pregătire este investigația de elecție la pacienții cu boală severă",
   "Calprotectina fecală este scăzută în boala intestinală activă"
  ],
  "correct": [
   1
  ],
  "explanation": "Anemia megaloblastică prin deficit de vitamina B12 este frecventă, din cauza afectării ileonului terminal — Incorect: Textul precizează că, în ciuda implicării ileonului terminal, anemia megaloblastică prin deficit de B12 este rară, deși nivelul seric poate fi scăzut.\n\nPrezența stricturilor intestinului subțire constituie contraindicație pentru evaluarea prin capsulă endoscopică — Corect: Textul afirmă explicit că prezența stricturilor intestinului subțire constituie contraindicație pentru capsula endoscopică.\n\nTestele serologice relevă în mod tipic pANCA pozitiv și ASCA negativ — Incorect: Textul indică opusul: în boala Crohn testele serologice relevă pANCA negativ și ASCA pozitiv.\n\nColonoscopia completă cu pregătire este investigația de elecție la pacienții cu boală severă — Incorect: La pacienții cu boală severă se recomandă o sigmoidoscopie limitată, fără pregătire anterioară, nu colonoscopia completă.\n\nCalprotectina fecală este scăzută în boala intestinală activă — Incorect: Calprotectina fecală și lactoferina sunt crescute în boala intestinală activă și utile în monitorizarea BII.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1202, Bolile inflamatorii intestinale — Boala Crohn: investigații (pagini PDF: 305).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1202
   ],
   "pdfPages": [
    305
   ],
   "section": "Bolile inflamatorii intestinale — Boala Crohn: investigații"
  },
  "learningObjective": "Selectarea corectă a investigațiilor în boala Crohn și interpretarea markerilor hematologici, serologici și fecali.",
  "optionRationales": [
   "Textul precizează că, în ciuda implicării ileonului terminal, anemia megaloblastică prin deficit de B12 este rară, deși nivelul seric poate fi scăzut.",
   "Textul afirmă explicit că prezența stricturilor intestinului subțire constituie contraindicație pentru capsula endoscopică.",
   "Textul indică opusul: în boala Crohn testele serologice relevă pANCA negativ și ASCA pozitiv.",
   "La pacienții cu boală severă se recomandă o sigmoidoscopie limitată, fără pregătire anterioară, nu colonoscopia completă.",
   "Calprotectina fecală și lactoferina sunt crescute în boala intestinală activă și utile în monitorizarea BII."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii exploatează raționamentul intuitiv (ileon terminal - deficit B12) și inversează profilul serologic și comportamentul calprotectinei."
  },
  "textbookExpressions": [
   "anemie cronică simplă",
   "ulceraţii larg răspândite şi profunde"
  ]
 },
 {
  "id": "gastro-adv-010",
  "topicId": "gastro",
  "type": "CM",
  "stem": "În tratamentul bolii Crohn se recomandă:",
  "options": [
   "Budesonid în formele ileocecale ușoare spre moderate, datorită disponibilității sistemice reduse",
   "Aminosalicilați ca tratament de primă linie pentru inducerea remisiei, cu dovezi solide de eficacitate",
   "Administrarea episodică, la nevoie, a agenților anti-TNF pentru a limita formarea anticorpilor anti-agent",
   "Determinarea activității TPMT înaintea inițierii azatioprinei sau mercaptopurinei",
   "Evitarea corticosteroizilor la pacienții cu boală penetrantă intestinală sau sepsis perianal"
  ],
  "correct": [
   0,
   3,
   4
  ],
  "explanation": "Budesonid în formele ileocecale ușoare spre moderate, datorită disponibilității sistemice reduse — Corect: Textul recomandă corticosteroizii cu eliberare controlată, precum budesonid, în formele ileocecale ușoare spre moderate, datorită disponibilității sistemice reduse.\n\nAminosalicilați ca tratament de primă linie pentru inducerea remisiei, cu dovezi solide de eficacitate — Incorect: Textul precizează că există foarte puține dovezi care să sprijine eficacitatea aminosalicilaților în boala Crohn.\n\nAdministrarea episodică, la nevoie, a agenților anti-TNF pentru a limita formarea anticorpilor anti-agent — Incorect: Textul indică opusul: agenții anti-TNF sunt mai puțin eficienți și induc anticorpi dacă sunt folosiți episodic, de aceea se administrează regulat, ca terapie de menținere.\n\nDeterminarea activității TPMT înaintea inițierii azatioprinei sau mercaptopurinei — Corect: Testarea activității TPMT este disponibilă și ar trebui efectuată înainte de tratamentul cu azatioprină sau mercaptopurină.\n\nEvitarea corticosteroizilor la pacienții cu boală penetrantă intestinală sau sepsis perianal — Corect: Textul precizează că steroizii ar trebui evitați la pacienții cu boală penetrantă intestinală sau sepsis perianal.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1203, Bolile inflamatorii intestinale — Tratamentul medical al bolii Crohn: inducția și menținerea remisiei (pagini PDF: 306).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1203
   ],
   "pdfPages": [
    306
   ],
   "section": "Bolile inflamatorii intestinale — Tratamentul medical al bolii Crohn: inducția și menținerea remisiei"
  },
  "learningObjective": "Alegerea corectă a agenților de inducție și de menținere în boala Crohn, cu precauțiile specifice tiopurinelor și anti-TNF.",
  "optionRationales": [
   "Textul recomandă corticosteroizii cu eliberare controlată, precum budesonid, în formele ileocecale ușoare spre moderate, datorită disponibilității sistemice reduse.",
   "Textul precizează că există foarte puține dovezi care să sprijine eficacitatea aminosalicilaților în boala Crohn.",
   "Textul indică opusul: agenții anti-TNF sunt mai puțin eficienți și induc anticorpi dacă sunt folosiți episodic, de aceea se administrează regulat, ca terapie de menținere.",
   "Testarea activității TPMT este disponibilă și ar trebui efectuată înainte de tratamentul cu azatioprină sau mercaptopurină.",
   "Textul precizează că steroizii ar trebui evitați la pacienții cu boală penetrantă intestinală sau sepsis perianal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează două principii de tratament (rolul aminosalicilaților și modul de administrare a anti-TNF) folosind formulări plauzibile clinic."
  },
  "textbookExpressions": [
   "tiopurin metil transferaza",
   "disponibilitate sistemică redusă"
  ]
 },
 {
  "id": "gastro-adv-011",
  "topicId": "gastro",
  "type": "CS",
  "stem": "O pacientă de 28 de ani cu colită ulcerativă extensivă se prezintă cu 9 scaune sanguinolente pe zi, temperatură 38°C, puls 105/min și hemoglobină 92 g/L. Care este atitudinea terapeutică inițială corectă?",
  "options": [
   "Prednisolon oral 30-60 mg/zi în ambulator, cu reevaluare la 2 săptămâni",
   "Colonoscopie completă cu pregătire prealabilă pentru aprecierea extinderii bolii",
   "Internare, hidrocortizon i.v. 100 mg de 4 ori pe zi și heparină cu greutate moleculară mică s.c.",
   "Ciclosporină i.v. 2 mg/kg pe zi de la internare, înaintea corticoterapiei",
   "Colectomie de urgență, deoarece sunt îndeplinite criteriile de colită severă"
  ],
  "correct": [
   2
  ],
  "explanation": "Prednisolon oral 30-60 mg/zi în ambulator, cu reevaluare la 2 săptămâni — Incorect: Pacienta îndeplinește criteriile de colită severă (peste 6 scaune cu sânge, febră peste 37,5°C, tahicardie peste 90/min, Hb sub 100 g/L), care impun internarea și corticoterapia intravenoasă, nu tratamentul ambulator.\n\nColonoscopie completă cu pregătire prealabilă pentru aprecierea extinderii bolii — Incorect: Colonoscopia completă trebuie evitată în atacurile severe pentru a preveni perforația; se recomandă o sigmoidoscopie flexibilă fără pregătire.\n\nInternare, hidrocortizon i.v. 100 mg de 4 ori pe zi și heparină cu greutate moleculară mică s.c. — Corect: Cadranul 32.41 indică internarea, hidrocortizon i.v. 100 mg de 4 ori pe zi și anticoagulare profilactică cu heparină cu greutate moleculară mică.\n\nCiclosporină i.v. 2 mg/kg pe zi de la internare, înaintea corticoterapiei — Incorect: Ciclosporina i.v. este terapie de salvare, rezervată pacienților cu CRP peste 45 mg/L sau peste 8 scaune/zi după 3 zile de hidrocortizon intravenos.\n\nColectomie de urgență, deoarece sunt îndeplinite criteriile de colită severă — Incorect: Chirurgia de urgență este indicată dacă dilatarea toxică nu se remite în 48 de ore sau la eșecul tratamentului medical, nu ca primă măsură.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1206, 1205, 1207, Bolile inflamatorii intestinale — Colita ulcerativă: episodul sever (Cadranul 32.41) și tratamentul medical (pagini PDF: 309, 308, 310).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1206,
    1205,
    1207
   ],
   "pdfPages": [
    309,
    308,
    310
   ],
   "section": "Bolile inflamatorii intestinale — Colita ulcerativă: episodul sever (Cadranul 32.41) și tratamentul medical"
  },
  "learningObjective": "Recunoașterea criteriilor episodului sever de colită ulcerativă și aplicarea secvenței terapeutice corecte (corticoterapie i.v., anticoagulare, terapie de salvare, chirurgie).",
  "optionRationales": [
   "Pacienta îndeplinește criteriile de colită severă (peste 6 scaune cu sânge, febră peste 37,5°C, tahicardie peste 90/min, Hb sub 100 g/L), care impun internarea și corticoterapia intravenoasă, nu tratamentul ambulator.",
   "Colonoscopia completă trebuie evitată în atacurile severe pentru a preveni perforația; se recomandă o sigmoidoscopie flexibilă fără pregătire.",
   "Cadranul 32.41 indică internarea, hidrocortizon i.v. 100 mg de 4 ori pe zi și anticoagulare profilactică cu heparină cu greutate moleculară mică.",
   "Ciclosporina i.v. este terapie de salvare, rezervată pacienților cu CRP peste 45 mg/L sau peste 8 scaune/zi după 3 zile de hidrocortizon intravenos.",
   "Chirurgia de urgență este indicată dacă dilatarea toxică nu se remite în 48 de ore sau la eșecul tratamentului medical, nu ca primă măsură."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vigneta impune recunoașterea criteriilor de severitate și ierarhizarea corectă a pașilor terapeutici, distractorii fiind fiecare o etapă reală, dar aplicată în momentul greșit."
  },
  "textbookExpressions": [
   "sigmoidoscopie flexibilă",
   "Anticoagulare profilactică"
  ]
 },
 {
  "id": "gastro-adv-012",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Colita microscopică se caracterizează prin:",
  "options": [
   "Strat de colagen subepitelial îngroșat, peste 10 µm, în forma limfocitară",
   "Diaree apoasă cronică sau fluctuantă, cu aspect macroscopic normal al mucoasei la colonoscopie",
   "Predominanța formei colagenoase la bărbații tineri",
   "Tratament de obicei cu budesonidă, cu dovezi și pentru aminosalicilați și preparate cu bismut",
   "Incidență scăzută la pacienții cu boală celiacă, comparativ cu populația generală"
  ],
  "correct": [
   1,
   3
  ],
  "explanation": "Strat de colagen subepitelial îngroșat, peste 10 µm, în forma limfocitară — Incorect: Stratul de colagen subepitelial îngroșat peste 10 µm definește forma colagenoasă, nu cea limfocitară, care se caracterizează prin infiltrat limfocitar în epiteliul de suprafață.\n\nDiaree apoasă cronică sau fluctuantă, cu aspect macroscopic normal al mucoasei la colonoscopie — Corect: Textul precizează că pacienții prezintă diaree apoasă cronică sau fluctuantă, iar caracteristicile macroscopice ale colonoscopiei sunt normale.\n\nPredominanța formei colagenoase la bărbații tineri — Incorect: Textul indică opusul: colita colagenoasă predomină la femeile de vârstă mijlocie sau la vârstnice.\n\nTratament de obicei cu budesonidă, cu dovezi și pentru aminosalicilați și preparate cu bismut — Corect: Tratamentul colitei microscopice este de obicei cu budesonidă, existând dovezi și pentru aminosalicilați și preparate care conțin bismut.\n\nIncidență scăzută la pacienții cu boală celiacă, comparativ cu populația generală — Incorect: Textul precizează că incidența ambelor forme este crescută la pacienții cu boală celiacă, diagnostic care trebuie exclus.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1208, 1207, Bolile inflamatorii intestinale — Colita microscopică: forme histologice și tratament (pagini PDF: 311, 310).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1208,
    1207
   ],
   "pdfPages": [
    311,
    310
   ],
   "section": "Bolile inflamatorii intestinale — Colita microscopică: forme histologice și tratament"
  },
  "learningObjective": "Diferențierea formelor de colită microscopică pe criterii histologice și epidemiologice și cunoașterea asocierilor și tratamentului acestora.",
  "optionRationales": [
   "Stratul de colagen subepitelial îngroșat peste 10 µm definește forma colagenoasă, nu cea limfocitară, care se caracterizează prin infiltrat limfocitar în epiteliul de suprafață.",
   "Textul precizează că pacienții prezintă diaree apoasă cronică sau fluctuantă, iar caracteristicile macroscopice ale colonoscopiei sunt normale.",
   "Textul indică opusul: colita colagenoasă predomină la femeile de vârstă mijlocie sau la vârstnice.",
   "Tratamentul colitei microscopice este de obicei cu budesonidă, existând dovezi și pentru aminosalicilați și preparate care conțin bismut.",
   "Textul precizează că incidența ambelor forme este crescută la pacienții cu boală celiacă, diagnostic care trebuie exclus."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii atribuie trăsătura histologică definitorie formei greșite și inversează profilul demografic și asocierea cu boala celiacă."
  },
  "textbookExpressions": [
   "administrarea de colestiramină",
   "sclerodermia cutanată limitată"
  ]
 },
 {
  "id": "gastro-adv-013",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Prevalența bolii de reflux gastro-esofagian în țările dezvoltate, conform textului, este de:",
  "options": [
   "1-2%, similară Asiei",
   "5%, limitată la fumători",
   "10-20%",
   "30-50%, identică herniei hiatale prin alunecare",
   "70%, cât hernia hiatală din esofagita erozivă"
  ],
  "correct": [
   2
  ],
  "explanation": "1-2%, similară Asiei — Incorect: 1-2% nu este prevalența citată; textul o descrie ca afecțiune frecventă.\n\n5%, limitată la fumători — Incorect: 5% nu figurează ca prevalență a BAGE.\n\n10-20% — Corect: Textul indică prevalența de 10-20% în țările dezvoltate, mai mare în Occident decât în Asia.\n\n30-50%, identică herniei hiatale prin alunecare — Incorect: 30% este ponderea herniei prin alunecare la peste 50 de ani, nu prevalența BAGE.\n\n70%, cât hernia hiatală din esofagita erozivă — Incorect: 70% este asocierea herniei hiatale cu esofagita erozivă din figura de pe pagina următoare, nu prevalența BAGE.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1162, Faringele și esofagul — BAGE: epidemiologie (pagini PDF: 291).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1162
   ],
   "pdfPages": [
    291
   ],
   "section": "Faringele și esofagul — BAGE: epidemiologie"
  },
  "learningObjective": "Diferențierea prevalenței 10-20% a BAGE de valorile herniei hiatale și de contrastul Asia versus Occident.",
  "optionRationales": [
   "1-2% nu este prevalența citată; textul o descrie ca afecțiune frecventă.",
   "5% nu figurează ca prevalență a BAGE.",
   "Textul indică prevalența de 10-20% în țările dezvoltate, mai mare în Occident decât în Asia.",
   "30% este ponderea herniei prin alunecare la peste 50 de ani, nu prevalența BAGE.",
   "70% este asocierea herniei hiatale cu esofagita erozivă din figura de pe pagina următoare, nu prevalența BAGE."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează prevalența BAGE cu procente reale ale herniei hiatale din același capitol."
  },
  "textbookExpressions": [
   "10-20%",
   "pirozisul"
  ]
 },
 {
  "id": "gastro-adv-014",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Mecanismele care permit refluxul acid în BAGE includ:",
  "options": [
   "Relaxarea tranzitorie a SEI (ATSEI) apare mai frecvent la pacienții cu BAGE și este cauza principală a refluxului la circa două treimi dintre aceștia",
   "Buzunarul acid de la nivelul stomacului proximal, netamponat postprandial, servește ca rezervor de refluat, în special în hernia hiatală în clinostatism, și poate fi tratat cu antiacide-alginat",
   "Cauza principală izolată este întârzierea evacuării gastrice, SEI rămânând contractat între mese",
   "Contracția diafragmului crural la nivelul SEI crește refluxul, în loc să-l împiedice",
   "Bicarbonatul salivar prelungește contactul acidului cu mucoasa esofagiană distală"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Relaxarea tranzitorie a SEI (ATSEI) apare mai frecvent la pacienții cu BAGE și este cauza principală a refluxului la circa două treimi dintre aceștia — Corect: ATSEI mai frecventă în BAGE, cauză principală la aproximativ două treimi, este explicită.\n\nBuzunarul acid de la nivelul stomacului proximal, netamponat postprandial, servește ca rezervor de refluat, în special în hernia hiatală în clinostatism, și poate fi tratat cu antiacide-alginat — Corect: Buzunarul acid proximal și tratamentul antiacide-alginat sunt descrise.\n\nCauza principală izolată este întârzierea evacuării gastrice, SEI rămânând contractat între mese — Incorect: Evacuarea gastrică întârziată nu este cauza principală citată; SEI se relaxează tranzitoriu între mese.\n\nContracția diafragmului crural la nivelul SEI crește refluxul, în loc să-l împiedice — Incorect: Diafragmul crural acționează ca piedică împotriva refluxului, nu ca facilitator.\n\nBicarbonatul salivar prelungește contactul acidului cu mucoasa esofagiană distală — Incorect: Bicarbonatul salivar neutralizează refluatul, alături de peristaltismul secundar și gravitație.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1162, Faringele și esofagul — BAGE: fiziopatologie (ATSEI și buzunarul acid) (pagini PDF: 291).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1162
   ],
   "pdfPages": [
    291
   ],
   "section": "Faringele și esofagul — BAGE: fiziopatologie (ATSEI și buzunarul acid)"
  },
  "learningObjective": "Corelarea ATSEI ca mecanism dominant (circa 2/3) cu buzunarul acid proximal tratabil prin alginat.",
  "optionRationales": [
   "ATSEI mai frecventă în BAGE, cauză principală la aproximativ două treimi, este explicită.",
   "Buzunarul acid proximal și tratamentul antiacide-alginat sunt descrise.",
   "Evacuarea gastrică întârziată nu este cauza principală citată; SEI se relaxează tranzitoriu între mese.",
   "Diafragmul crural acționează ca piedică împotriva refluxului, nu ca facilitator.",
   "Bicarbonatul salivar neutralizează refluatul, alături de peristaltismul secundar și gravitație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează rolul barierelor antireflux (crura, saliva) și înlocuiește ATSEI cu o cauză de evacuare, pe fondul buzunarului acid ușor de omis."
  },
  "textbookExpressions": [
   "buzunarului acid",
   "două treimi din pacienţii"
  ]
 },
 {
  "id": "gastro-adv-015",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Hernia hiatală și durerea toracică de reflux:",
  "options": [
   "Hernia prin alunecare plasează joncțiunea esofago-gastrică și o parte a stomacului deasupra diafragmului; este prezentă la 30% dintre persoanele peste 50 de ani, iar simptomele țin de reflux, nu de hernie în sine",
   "În hernia para-esofagiană, SEI rămâne competent sub diafragm; ocazional apar dureri intense prin volvulus sau strangulare",
   "Circa 20% dintre cazurile care se prezintă în urgență cu durere toracică au BAGE",
   "Hernia prin alunecare produce prin ea însăși esofagită severă, independent de reflux",
   "Pneumonia de aspirație este obișnuită în BAGE, chiar fără obstacol asociat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hernia prin alunecare plasează joncțiunea esofago-gastrică și o parte a stomacului deasupra diafragmului; este prezentă la 30% dintre persoanele peste 50 de ani, iar simptomele țin de reflux, nu de hernie în sine — Corect: Definiția, prevalența de 30% peste 50 de ani și originea simptomelor în reflux sunt explicite.\n\nÎn hernia para-esofagiană, SEI rămâne competent sub diafragm; ocazional apar dureri intense prin volvulus sau strangulare — Corect: SEI competent sub diafragm și complicațiile de volvulus/strangulare sunt citate.\n\nCirca 20% dintre cazurile care se prezintă în urgență cu durere toracică au BAGE — Corect: 20% din durerile de urgență atribuite BAGE sunt pe pagina anterioară, cu Cadranul 32.13 pe aceasta.\n\nHernia prin alunecare produce prin ea însăși esofagită severă, independent de reflux — Incorect: Simptomele herniei prin alunecare țin de reflux, nu de hernie ca atare.\n\nPneumonia de aspirație este obișnuită în BAGE, chiar fără obstacol asociat — Incorect: Pneumonia de aspirație este neobișnuită fără cauză obstructivă asociată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1163, 1162, Faringele și esofagul — Hernia hiatală (Cadranul 32.12) și diagnosticul diferențial al durerii (pagini PDF: 292, 291).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1163,
    1162
   ],
   "pdfPages": [
    292,
    291
   ],
   "section": "Faringele și esofagul — Hernia hiatală (Cadranul 32.12) și diagnosticul diferențial al durerii"
  },
  "learningObjective": "Contrastarea herniei prin alunecare (frecventă, asimptomatică) cu cea para-esofagiană (SEI competent, risc de volvulus) și a ponderii de 20% a BAGE în durerea de urgență.",
  "optionRationales": [
   "Definiția, prevalența de 30% peste 50 de ani și originea simptomelor în reflux sunt explicite.",
   "SEI competent sub diafragm și complicațiile de volvulus/strangulare sunt citate.",
   "20% din durerile de urgență atribuite BAGE sunt pe pagina anterioară, cu Cadranul 32.13 pe aceasta.",
   "Simptomele herniei prin alunecare țin de reflux, nu de hernie ca atare.",
   "Pneumonia de aspirație este neobișnuită fără cauză obstructivă asociată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă hernia prin alunecare într-o cauză autonomă de esofagită și face din aspirație regula, pe fondul a două anatomii ușor de inversat."
  },
  "textbookExpressions": [
   "30% dintre persoanele",
   "para-esofagiană"
  ]
 },
 {
  "id": "gastro-adv-016",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Tratamentul medicamentos inițial al BAGE, conform textului:",
  "options": [
   "Aproximativ jumătate dintre pacienții care se adresează medicului de familie pot fi tratați cu antiacide simple, scădere ponderală și ridicarea capului patului",
   "Preparatele cu alginat (10 ml de trei ori pe zi) formează un gel sau o „plută de spumă\" cu conținutul gastric",
   "Antiacidele cu magneziu tendințial constipă, iar cele cu aluminiu produc diaree",
   "Circa 60% dintre pacienții cu BAGE devin asimptomatici după 4 săptămâni de IPP o dată pe zi",
   "Formele severe pot necesita IPP de două ori pe zi, ani de zile; osteoporoza și infecțiile cu C. difficile sunt puțin frecvente și tind să apară la pacienții cu risc"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "Aproximativ jumătate dintre pacienții care se adresează medicului de familie pot fi tratați cu antiacide simple, scădere ponderală și ridicarea capului patului — Corect: Succesul la jumătate dintre pacienții de familie cu măsuri simple este explicit.\n\nPreparatele cu alginat (10 ml de trei ori pe zi) formează un gel sau o „plută de spumă\" cu conținutul gastric — Corect: Doza de 10 ml de trei ori pe zi și pluta de spumă sunt citate.\n\nAntiacidele cu magneziu tendințial constipă, iar cele cu aluminiu produc diaree — Incorect: Textul inversează: magneziul tinde să provoace diaree, aluminiul constipație.\n\nCirca 60% dintre pacienții cu BAGE devin asimptomatici după 4 săptămâni de IPP o dată pe zi — Corect: Răspunsul de circa 60% la 4 săptămâni de IPP o dată pe zi este explicit.\n\nFormele severe pot necesita IPP de două ori pe zi, ani de zile; osteoporoza și infecțiile cu C. difficile sunt puțin frecvente și tind să apară la pacienții cu risc — Corect: Necesitatea IPP bid pe termen lung și caracterul puțin frecvent al osteoporozei/C. difficile la cei cu risc sunt descrise.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1163, Faringele și esofagul — BAGE: măsuri generale, alginat și IPP (pagini PDF: 292).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1163
   ],
   "pdfPages": [
    292
   ],
   "section": "Faringele și esofagul — BAGE: măsuri generale, alginat și IPP"
  },
  "learningObjective": "Reținerea succesului măsurilor de primă linie, a dozei de alginat și a răspunsului de 60% la 4 săptămâni de IPP, cu profilul real de efecte adverse.",
  "optionRationales": [
   "Succesul la jumătate dintre pacienții de familie cu măsuri simple este explicit.",
   "Doza de 10 ml de trei ori pe zi și pluta de spumă sunt citate.",
   "Textul inversează: magneziul tinde să provoace diaree, aluminiul constipație.",
   "Răspunsul de circa 60% la 4 săptămâni de IPP o dată pe zi este explicit.",
   "Necesitatea IPP bid pe termen lung și caracterul puțin frecvent al osteoporozei/C. difficile la cei cu risc sunt descrise."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează efectele intestinale ale cationilor din antiacide, pe fondul dozei de alginat și al procentului de 60% ușor de mutat la 4 săptămâni."
  },
  "textbookExpressions": [
   "10 ml de trei ori",
   "60% dintre aceştia"
  ]
 },
 {
  "id": "gastro-adv-017",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Clasificarea Los Angeles a esofagitei și BAGE non-erozivă:",
  "options": [
   "Gradul A înseamnă eroziuni confluente pe peste 75% din circumferința esofagului",
   "Gradul B: cel puțin o discontinuitate mucoasă mai lungă de 5 mm, limitată la pliuri, fără continuitate între vârfurile a două pliuri",
   "Pacienții fără răspuns satisfăcător la IPP și cu endoscopie normală sunt încadrați ca NERD; de obicei femei, simptome adesea funcționale sau esofag hipersensibil",
   "Antagoniștii H2 pot fi folosiți în combinație cu IPP în formele mai severe",
   "Gastroplicatura endoluminală produce o îmbunătățire de durată obiectivată prin pH-metrie esofagiană"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "explanation": "Gradul A înseamnă eroziuni confluente pe peste 75% din circumferința esofagului — Incorect: Peste 75% din circumferință definește gradul D, nu A.\n\nGradul B: cel puțin o discontinuitate mucoasă mai lungă de 5 mm, limitată la pliuri, fără continuitate între vârfurile a două pliuri — Corect: Definiția gradului B este explicită în legendă.\n\nPacienții fără răspuns satisfăcător la IPP și cu endoscopie normală sunt încadrați ca NERD; de obicei femei, simptome adesea funcționale sau esofag hipersensibil — Corect: Încadrarea NERD, predominanța feminină și esofagul hipersensibil sunt citate.\n\nAntagoniștii H2 pot fi folosiți în combinație cu IPP în formele mai severe — Corect: Combinarea H2 cu IPP în forme mai severe este menționată.\n\nGastroplicatura endoluminală produce o îmbunătățire de durată obiectivată prin pH-metrie esofagiană — Incorect: Studiile arată beneficiu clinic, dar nu îmbunătățire de durată a pH-ului esofagian.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1164, Faringele și esofagul — Clasificarea Los Angeles, NERD și tratamente adjuvante (pagini PDF: 293).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1164
   ],
   "pdfPages": [
    293
   ],
   "section": "Faringele și esofagul — Clasificarea Los Angeles, NERD și tratamente adjuvante"
  },
  "learningObjective": "Atribuirea corectă a gradelor A–D și recunoașterea NERD ca entitate cu endoscopie normală, distinctă de succesul pH-metric al gastroplicaturii.",
  "optionRationales": [
   "Peste 75% din circumferință definește gradul D, nu A.",
   "Definiția gradului B este explicită în legendă.",
   "Încadrarea NERD, predominanța feminină și esofagul hipersensibil sunt citate.",
   "Combinarea H2 cu IPP în forme mai severe este menționată.",
   "Studiile arată beneficiu clinic, dar nu îmbunătățire de durată a pH-ului esofagian."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie criteriul de 75% gradului A în loc de D și pretinde un câștig pH-metric pe care textul îl neagă gastroplicaturii."
  },
  "textbookExpressions": [
   "Grad B",
   "non-erozivă"
  ]
 },
 {
  "id": "gastro-adv-018",
  "topicId": "gastro",
  "type": "CS",
  "stem": "În clasificarea Los Angeles, eroziunile confluente care interesează peste 75% din circumferința esofagului definesc:",
  "options": [
   "Gradul A",
   "Gradul B",
   "Gradul C",
   "Gradul D",
   "Esofagul Barrett circumferețial"
  ],
  "correct": [
   3
  ],
  "explanation": "Gradul A — Incorect: Gradul A: discontinuități limitate la pliuri, care nu depășesc 5 mm.\n\nGradul B — Incorect: Gradul B: cel puțin o eroziune >5 mm, fără continuitate între pliuri.\n\nGradul C — Incorect: Gradul C: eroziuni între vârfurile pliurilor, dar nu circumferențiale.\n\nGradul D — Corect: Textul definește gradul D prin eroziuni confluente pe peste 75% din circumferință.\n\nEsofagul Barrett circumferețial — Incorect: Barrett-ul este metaplazie columnară, nu un grad Los Angeles.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1164, Faringele și esofagul — Clasificarea endoscopică Los Angeles a esofagitei (pagini PDF: 293).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1164
   ],
   "pdfPages": [
    293
   ],
   "section": "Faringele și esofagul — Clasificarea endoscopică Los Angeles a esofagitei"
  },
  "learningObjective": "Reținerea pragului de 75% ca prag al gradului D, distinct de limitele în milimetri ale gradelor A și B.",
  "optionRationales": [
   "Gradul A: discontinuități limitate la pliuri, care nu depășesc 5 mm.",
   "Gradul B: cel puțin o eroziune >5 mm, fără continuitate între pliuri.",
   "Gradul C: eroziuni între vârfurile pliurilor, dar nu circumferențiale.",
   "Textul definește gradul D prin eroziuni confluente pe peste 75% din circumferință.",
   "Barrett-ul este metaplazie columnară, nu un grad Los Angeles."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele patru grade Los Angeles diferă prin praguri ușor de permutat (5 mm versus 75%)."
  },
  "textbookExpressions": [
   "peste 75%",
   "Los Angeles"
  ]
 },
 {
  "id": "gastro-adv-019",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Strictura peptică ca o complicație a BAGE:",
  "options": [
   "A devenit mult mai puțin frecventă de la apariția IPP; survine de obicei peste 60 de ani, cu disfagie intermitentă pentru solide, care se agravează treptat",
   "Cazurile ușoare pot răspunde numai la IPP; cele severe necesită dilatare endoscopică și IPP pe termen lung; chirurgia, dacă tratamentul medical eșuează",
   "Este tipică tânărului cu obstrucție completă acută pentru lichide",
   "Chirurgia este de primă intenție, înaintea oricărei dilatări",
   "Se asociază aproape constant cu esofagul Barrett, screeningul fiind astfel impus tuturor simptomaticilor"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "A devenit mult mai puțin frecventă de la apariția IPP; survine de obicei peste 60 de ani, cu disfagie intermitentă pentru solide, care se agravează treptat — Corect: Reducerea frecvenței după IPP, vârsta peste 60 de ani și disfagia intermitentă pentru solide sunt explicite.\n\nCazurile ușoare pot răspunde numai la IPP; cele severe necesită dilatare endoscopică și IPP pe termen lung; chirurgia, dacă tratamentul medical eșuează — Corect: Secvența IPP, dilatare plus IPP, apoi chirurgie la eșec, este citată.\n\nEste tipică tânărului cu obstrucție completă acută pentru lichide — Incorect: Nu este descrisă ca obstrucție acută la tineri pentru lichide.\n\nChirurgia este de primă intenție, înaintea oricărei dilatări — Incorect: Chirurgia este rezervată eșecului medical, nu primei intenții.\n\nSe asociază aproape constant cu esofagul Barrett, screeningul fiind astfel impus tuturor simptomaticilor — Incorect: Asocierea „aproape întotdeauna\" din text privește hernia hiatală în Barrett, nu strictura; screeningul Barrett nu este recomandat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1165, Faringele și esofagul — Complicațiile BAGE: strictura peptică (pagini PDF: 294).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1165
   ],
   "pdfPages": [
    294
   ],
   "section": "Faringele și esofagul — Complicațiile BAGE: strictura peptică"
  },
  "learningObjective": "Recunoașterea profilului vârstnicului cu disfagie intermitentă pentru solide și a ierarhiei IPP → dilatare → chirurgie.",
  "optionRationales": [
   "Reducerea frecvenței după IPP, vârsta peste 60 de ani și disfagia intermitentă pentru solide sunt explicite.",
   "Secvența IPP, dilatare plus IPP, apoi chirurgie la eșec, este citată.",
   "Nu este descrisă ca obstrucție acută la tineri pentru lichide.",
   "Chirurgia este rezervată eșecului medical, nu primei intenții.",
   "Asocierea „aproape întotdeauna\" din text privește hernia hiatală în Barrett, nu strictura; screeningul Barrett nu este recomandat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută strictura peptică la tânărul cu obstrucție acută și inversează locul chirurgiei față de dilatarea endoscopică."
  },
  "textbookExpressions": [
   "Strictura peptică",
   "disfagie intermitentă"
  ]
 },
 {
  "id": "gastro-adv-020",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Esofagul Barrett — diagnostic, clasificare și risc:",
  "options": [
   "Clasificarea Praga înregistrează lungimea circumferențială (C) și lungimea maximă (M) a mucoasei columnare",
   "Obezitatea abdominală crește riscul de esofag Barrett de 4,3 ori",
   "Variantele cu segment lung (>3 cm) și scurt (<3 cm) se regăsesc la 5%, respectiv 15% dintre pacienții endoscopiați pentru simptome de reflux",
   "Screeningul endoscopic este recomandat tuturor pacienților cu pirozis, corelația simptom–Barrett fiind strânsă",
   "Este adesea diagnosticat incidental; cel mai frecvent la bărbații obezi de vârstă mijlocie"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Clasificarea Praga înregistrează lungimea circumferențială (C) și lungimea maximă (M) a mucoasei columnare — Corect: Măsurătorile C și M ale clasificării Praga sunt explicite.\n\nObezitatea abdominală crește riscul de esofag Barrett de 4,3 ori — Corect: Creșterea de 4,3 ori prin obezitate abdominală este citată.\n\nVariantele cu segment lung (>3 cm) și scurt (<3 cm) se regăsesc la 5%, respectiv 15% dintre pacienții endoscopiați pentru simptome de reflux — Corect: Prevalențele 5% (lung) și 15% (scurt) la endoscopia pentru reflux sunt din text.\n\nScreeningul endoscopic este recomandat tuturor pacienților cu pirozis, corelația simptom–Barrett fiind strânsă — Incorect: Corelația simptom–Barrett este slabă; screeningul nu este recomandat.\n\nEste adesea diagnosticat incidental; cel mai frecvent la bărbații obezi de vârstă mijlocie — Corect: Diagnosticul incidental și profilul bărbatului obez de vârstă mijlocie sunt descrise.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1165, Faringele și esofagul — Esofagul Barrett: Praga, epidemiologie și screening (pagini PDF: 294).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1165
   ],
   "pdfPages": [
    294
   ],
   "section": "Faringele și esofagul — Esofagul Barrett: Praga, epidemiologie și screening"
  },
  "learningObjective": "Aplicarea măsurătorilor C/M, a riscului 4,3× prin obezitate abdominală și a prevalențelor 5%/15%, față de absența screeningului populațional.",
  "optionRationales": [
   "Măsurătorile C și M ale clasificării Praga sunt explicite.",
   "Creșterea de 4,3 ori prin obezitate abdominală este citată.",
   "Prevalențele 5% (lung) și 15% (scurt) la endoscopia pentru reflux sunt din text.",
   "Corelația simptom–Barrett este slabă; screeningul nu este recomandat.",
   "Diagnosticul incidental și profilul bărbatului obez de vârstă mijlocie sunt descrise."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează recomandarea de screening pe care textul o neagă, pe fondul unor procente (4,3×, 5%, 15%) ușor de alocat greșit riscului de cancer."
  },
  "textbookExpressions": [
   "4,3 ori",
   "Obezitatea abdominală"
  ]
 },
 {
  "id": "gastro-adv-021",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Supravegherea și terapia endoscopică în esofagul Barrett:",
  "options": [
   "La displazie de grad scăzut, endoscopia se repetă de obicei la 6 luni, cu biopsii în cadran la fiecare 1 cm, sub IPP în doză mare",
   "Dacă displazia de grad scăzut persistă, se propune ablație endoscopică sau monitorizare la 6 luni",
   "Displazia de grad înalt pe leziune nodulară se îndepărtează prin rezecție endoscopică mucosală; fără leziune vizibilă, IPP în doze mari și biopsii nu mai târziu de 3 luni",
   "Terapia fotodinamică a înlocuit ablația prin radiofrecvență ca tehnică de elecție",
   "Ecoendoscopia este frecvent folosită pentru stadializare, pentru a exclude cancerul și limfadenopatia semnificativă"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "La displazie de grad scăzut, endoscopia se repetă de obicei la 6 luni, cu biopsii în cadran la fiecare 1 cm, sub IPP în doză mare — Corect: Protocolul de 6 luni cu biopsii la 1 cm și IPP în doză mare este explicit.\n\nDacă displazia de grad scăzut persistă, se propune ablație endoscopică sau monitorizare la 6 luni — Corect: Ablația sau supravegherea la 6 luni, dacă LGD persistă, este recomandarea ghidurilor recente din text.\n\nDisplazia de grad înalt pe leziune nodulară se îndepărtează prin rezecție endoscopică mucosală; fără leziune vizibilă, IPP în doze mari și biopsii nu mai târziu de 3 luni — Corect: EMR pentru nodul și rebiopsia la cel mult 3 luni fără leziune vizibilă sunt citate.\n\nTerapia fotodinamică a înlocuit ablația prin radiofrecvență ca tehnică de elecție — Incorect: Textul indică opusul: RFA a înlocuit terapia fotodinamică.\n\nEcoendoscopia este frecvent folosită pentru stadializare, pentru a exclude cancerul și limfadenopatia semnificativă — Corect: Rolul ecoendoscopiei de stadializare este menționat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1166, Faringele și esofagul — Barrett: supraveghere, EMR și RFA (pagini PDF: 295).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1166
   ],
   "pdfPages": [
    295
   ],
   "section": "Faringele și esofagul — Barrett: supraveghere, EMR și RFA"
  },
  "learningObjective": "Ierarhizarea intervalelor 6 luni (LGD) versus 3 luni (HGD fără leziune) și recunoașterea RFA ca înlocuitor al terapiei fotodinamice.",
  "optionRationales": [
   "Protocolul de 6 luni cu biopsii la 1 cm și IPP în doză mare este explicit.",
   "Ablația sau supravegherea la 6 luni, dacă LGD persistă, este recomandarea ghidurilor recente din text.",
   "EMR pentru nodul și rebiopsia la cel mult 3 luni fără leziune vizibilă sunt citate.",
   "Textul indică opusul: RFA a înlocuit terapia fotodinamică.",
   "Rolul ecoendoscopiei de stadializare este menționat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ierarhia RFA versus terapie fotodinamică și cere reținerea a două intervale (6 luni versus 3 luni) din același algoritm."
  },
  "textbookExpressions": [
   "Ablaţia prin radiofrecvenţă",
   "6 luni"
  ]
 },
 {
  "id": "gastro-adv-022",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Tabloul clinic al acalaziei, conform textului:",
  "options": [
   "Incidența este 1:100.000, egală la bărbați și femei; apare la orice vârstă, dar rareori în copilărie",
   "Pacienții au de obicei un lung istoric de disfagie intermitentă, caracteristic atât pentru lichide, cât și pentru solide, de la debut",
   "Scăderea ponderală este de obicei importantă, definitorie pentru diagnostic",
   "Regurgitațiile din esofagul dilatat, mai ales noaptea, pot determina pneumonie de aspirație",
   "Durerea toracică spontană lipsește, ceea ce o diferențiază de ischemia cardiacă"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Incidența este 1:100.000, egală la bărbați și femei; apare la orice vârstă, dar rareori în copilărie — Corect: Incidența 1:100.000, egalitatea pe sexe și raritatea în copilărie sunt explicite.\n\nPacienții au de obicei un lung istoric de disfagie intermitentă, caracteristic atât pentru lichide, cât și pentru solide, de la debut — Corect: Disfagia intermitentă pentru lichide și solide de la debut este caracteristică.\n\nScăderea ponderală este de obicei importantă, definitorie pentru diagnostic — Incorect: Textul precizează că scăderea ponderală este de obicei minimă.\n\nRegurgitațiile din esofagul dilatat, mai ales noaptea, pot determina pneumonie de aspirație — Corect: Regurgitațiile nocturne și pneumonia de aspirație sunt citate.\n\nDurerea toracică spontană lipsește, ceea ce o diferențiază de ischemia cardiacă — Incorect: Durerea toracică spontană prin „spasm\" poate fi eronat luată drept cardiacă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1166, Faringele și esofagul — Acalazia: tablou clinic (pagini PDF: 295).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1166
   ],
   "pdfPages": [
    295
   ],
   "section": "Faringele și esofagul — Acalazia: tablou clinic"
  },
  "learningObjective": "Recunoașterea disfagiei pentru lichide și solide de la debut, a incidenței 1:100.000 și a regurgitațiilor nocturne, cu scădere ponderală minimă.",
  "optionRationales": [
   "Incidența 1:100.000, egalitatea pe sexe și raritatea în copilărie sunt explicite.",
   "Disfagia intermitentă pentru lichide și solide de la debut este caracteristică.",
   "Textul precizează că scăderea ponderală este de obicei minimă.",
   "Regurgitațiile nocturne și pneumonia de aspirație sunt citate.",
   "Durerea toracică spontană prin „spasm\" poate fi eronat luată drept cardiacă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează magnitudinea scăderii ponderale și neagă durerea toracică, două capcane față de cancerul esofagian și ischemia cardiacă."
  },
  "textbookExpressions": [
   "1:100.000",
   "disfagie intermitentă"
  ]
 },
 {
  "id": "gastro-adv-023",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Incidența acalaziei, egală la bărbați și femei, este de:",
  "options": [
   "1:100.000",
   "1:1.000",
   "1:10.000",
   "10-20%",
   "1:100"
  ],
  "correct": [
   0
  ],
  "explanation": "1:100.000 — Corect: Textul citează 1:100.000, egală pentru bărbați și femei.\n\n1:1.000 — Incorect: 1:1.000 este ordinul transmiterii verticale HIV din alt capitol, nu acalazia.\n\n1:10.000 — Incorect: 1:10.000 nu este cifra din text.\n\n10-20% — Incorect: 10-20% este prevalența BAGE, nu incidența acalaziei.\n\n1:100 — Incorect: 1:100 ar fi o boală comună, incompatibilă cu descrierea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1166, Faringele și esofagul — Acalazia: epidemiologie (pagini PDF: 295).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1166
   ],
   "pdfPages": [
    295
   ],
   "section": "Faringele și esofagul — Acalazia: epidemiologie"
  },
  "learningObjective": "Diferențierea incidenței 1:100.000 a acalaziei de prevalența BAGE și de alte rate din capitol.",
  "optionRationales": [
   "Textul citează 1:100.000, egală pentru bărbați și femei.",
   "1:1.000 este ordinul transmiterii verticale HIV din alt capitol, nu acalazia.",
   "1:10.000 nu este cifra din text.",
   "10-20% este prevalența BAGE, nu incidența acalaziei.",
   "1:100 ar fi o boală comună, incompatibilă cu descrierea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate ordinele de mărime apar ca procente sau rate în gastroenterologie; doar 1:100.000 este al acalaziei."
  },
  "textbookExpressions": [
   "1:100.000",
   "egală pentru bărbaţi"
  ]
 },
 {
  "id": "gastro-adv-024",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Patogenia infecției cu Helicobacter pylori include:",
  "options": [
   "Ureaza convertește ureea în amoniu și clorură, cu efect citotoxic direct",
   "Ulcerele sunt cel mai frecvente când tulpina exprimă CagA și VacA, cu sinteză mai pronunțată de IL-8",
   "Polimorfismele gazdei care cresc IL-1β se asociază cu gastrită atrofică și cancer",
   "H. pylori colonizează numai epiteliul duodenal, nu pe cel gastric",
   "Majoritatea infectaților dezvoltă ulcer duodenal"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ureaza convertește ureea în amoniu și clorură, cu efect citotoxic direct — Corect: Conversia ureei în amoniu și clorură este explicită.\n\nUlcerele sunt cel mai frecvente când tulpina exprimă CagA și VacA, cu sinteză mai pronunțată de IL-8 — Corect: Asocierea CagA/VacA cu IL-8 și ulcere este citată.\n\nPolimorfismele gazdei care cresc IL-1β se asociază cu gastrită atrofică și cancer — Corect: Polimorfismele IL-1β, gastrita atrofică și cancerul sunt menționate.\n\nH. pylori colonizează numai epiteliul duodenal, nu pe cel gastric — Incorect: Textul precizează colonizarea exclusivă a epiteliului gastric.\n\nMajoritatea infectaților dezvoltă ulcer duodenal — Incorect: Doar 15% dintre infectați dezvoltă ulcere duodenale.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1173, Stomacul și duodenul — H. pylori: patogeneză (pagini PDF: 297).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1173
   ],
   "pdfPages": [
    297
   ],
   "section": "Stomacul și duodenul — H. pylori: patogeneză"
  },
  "learningObjective": "Corelarea ureazei citotoxice cu virulența CagA/VacA/IL-8 și cu genetica gazdei, față de colonizarea strict gastrică și riscul de doar 15% de UD.",
  "optionRationales": [
   "Conversia ureei în amoniu și clorură este explicită.",
   "Asocierea CagA/VacA cu IL-8 și ulcere este citată.",
   "Polimorfismele IL-1β, gastrita atrofică și cancerul sunt menționate.",
   "Textul precizează colonizarea exclusivă a epiteliului gastric.",
   "Doar 15% dintre infectați dezvoltă ulcere duodenale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută tropismul de pe epiteliul gastric pe duoden și transformă o minoritate (15%) în majoritate."
  },
  "textbookExpressions": [
   "CagA",
   "VacA"
  ]
 },
 {
  "id": "gastro-adv-025",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Boala ulceroasă peptică — epidemiologie și tablou clinic:",
  "options": [
   "UD afectează circa 10% din populația adultă și sunt de 2-3 ori mai frecvente decât UG",
   "UD se găsesc cel mai frecvent în prima porțiune a duodenului; UG, pe mica curbură lângă unghiul gastric",
   "Durerea nocturnă din UD este un argument de încredere pentru diagnosticul diferențial față de UG",
   "Indicatul cu un singur deget spre epigastru este puternic sugestiv pentru boala ulceroasă peptică",
   "Netratate, simptomele UD recidivează și remite ulterior, odată cu gastrita atrofică și scăderea acidului"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "UD afectează circa 10% din populația adultă și sunt de 2-3 ori mai frecvente decât UG — Corect: Prevalența de circa 10% și raportul 2-3:1 față de UG sunt explicite.\n\nUD se găsesc cel mai frecvent în prima porțiune a duodenului; UG, pe mica curbură lângă unghiul gastric — Corect: Topografia UD (D1) și UG (mica curbură) este citată.\n\nDurerea nocturnă din UD este un argument de încredere pentru diagnosticul diferențial față de UG — Incorect: Textul precizează că durerea nocturnă nu este un argument de încredere.\n\nIndicatul cu un singur deget spre epigastru este puternic sugestiv pentru boala ulceroasă peptică — Corect: Semnul unui singur deget este descris ca puternic sugestiv.\n\nNetratate, simptomele UD recidivează și remite ulterior, odată cu gastrita atrofică și scăderea acidului — Corect: Istoria naturală cu remisie tardivă prin gastrită atrofică este menționată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1173, Stomacul și duodenul — Boala ulceroasă peptică: epidemiologie și clinică (pagini PDF: 297).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1173
   ],
   "pdfPages": [
    297
   ],
   "section": "Stomacul și duodenul — Boala ulceroasă peptică: epidemiologie și clinică"
  },
  "learningObjective": "Cuantificarea UD (10%, 2–3× UG) și recunoașterea valorii semnelor (un deget) versus lipsa de încredere a durerii nocturne.",
  "optionRationales": [
   "Prevalența de circa 10% și raportul 2-3:1 față de UG sunt explicite.",
   "Topografia UD (D1) și UG (mica curbură) este citată.",
   "Textul precizează că durerea nocturnă nu este un argument de încredere.",
   "Semnul unui singur deget este descris ca puternic sugestiv.",
   "Istoria naturală cu remisie tardivă prin gastrită atrofică este menționată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă durerea nocturnă — explicit nefiabilă — în discriminator clasic, pe fondul procentelor 10% și 2–3×."
  },
  "textbookExpressions": [
   "10% din populaţia",
   "2-3 ori"
  ]
 },
 {
  "id": "gastro-adv-026",
  "topicId": "gastro",
  "type": "CM",
  "stem": "În investigarea infecției cu H. pylori și a ulcerului gastric:",
  "options": [
   "Cultura din biopsie este testul de primă linie la toți pacienții, înaintea testului ureazic",
   "Culturile, cu testare de sensibilitate, se folosesc de obicei în infecția refractară la eradicarea standard, nu de rutină",
   "Sensibilitatea histopatologiei este mai puternic influențată de IPP decât a testului ureazic",
   "Pacienții sub 55 de ani cu semne de alarmă pot evita endoscopia dacă antigenul fecal este pozitiv",
   "Toate ulcerele gastrice trebuie biopsiate pentru a exclude un proces malign și reevaluate endoscopic pentru vindecare"
  ],
  "correct": [
   1,
   4
  ],
  "explanation": "Cultura din biopsie este testul de primă linie la toți pacienții, înaintea testului ureazic — Incorect: Cultura nu este test de primă linie; CLO, histologia și testele neinvazive preced.\n\nCulturile, cu testare de sensibilitate, se folosesc de obicei în infecția refractară la eradicarea standard, nu de rutină — Corect: Textul rezervă cultura pacienților refractari, pentru alegerea antibioticului.\n\nSensibilitatea histopatologiei este mai puternic influențată de IPP decât a testului ureazic — Incorect: Textul indică opusul: histologia este mai puțin influențată de IPP decât testul ureazic.\n\nPacienții sub 55 de ani cu semne de alarmă pot evita endoscopia dacă antigenul fecal este pozitiv — Incorect: Semnele de alarmă impun endoscopie, indiferent de vârstă.\n\nToate ulcerele gastrice trebuie biopsiate pentru a exclude un proces malign și reevaluate endoscopic pentru vindecare — Corect: Biopsia tuturor UG și reevaluarea vindecării sunt explicite.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1174, Stomacul și duodenul — Culturi, ulcere gastrice și semne de alarmă (pagini PDF: 298).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1174
   ],
   "pdfPages": [
    298
   ],
   "section": "Stomacul și duodenul — Culturi, ulcere gastrice și semne de alarmă"
  },
  "learningObjective": "Delimitarea culturii ca metodă de salvare, nu de screening, și a biopsiei obligatorii a oricărui ulcer gastric.",
  "optionRationales": [
   "Cultura nu este test de primă linie; CLO, histologia și testele neinvazive preced.",
   "Textul rezervă cultura pacienților refractari, pentru alegerea antibioticului.",
   "Textul indică opusul: histologia este mai puțin influențată de IPP decât testul ureazic.",
   "Semnele de alarmă impun endoscopie, indiferent de vârstă.",
   "Biopsia tuturor UG și reevaluarea vindecării sunt explicite."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Ridică cultura la rang de screening și anulează biopsia UG, două reguli de laborator versus endoscopie ușor de inversat."
  },
  "textbookExpressions": [
   "Realizarea de culturi",
   "Toate ulcerele gastrice"
  ]
 },
 {
  "id": "gastro-adv-027",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre investigarea pacientului cu suspiciune de ulcer peptic:",
  "options": [
   "Sub 55 de ani, cu simptome tipice și H. pylori pozitiv, se poate începe eradicarea fără alte investigații",
   "Pacienții mai în vârstă necesită diagnostic endoscopic și excluderea unui posibil cancer",
   "Toți cei cu semne de alarmă (anemie feriprivă, scădere ponderală involuntară, anorexie, hematemeză sau melenă, vărsături persistente, masă epigastrică) necesită evaluare endoscopică",
   "Strategia „testează și tratează\" sub 55 de ani se aplică în absența semnelor de alarmă, inclusiv pierdere în greutate, anemie, disfagie, vărsături sau istoric familial de cancer digestiv",
   "Examenul obiectiv este, de obicei, diagnostic pentru ulcerul activ"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Sub 55 de ani, cu simptome tipice și H. pylori pozitiv, se poate începe eradicarea fără alte investigații — Corect: Strategia fără investigații suplimentare sub 55 de ani, H. pylori pozitiv, simptome tipice, este explicită.\n\nPacienții mai în vârstă necesită diagnostic endoscopic și excluderea unui posibil cancer — Corect: Necesitatea endoscopiei la vârstnici este citată.\n\nToți cei cu semne de alarmă (anemie feriprivă, scădere ponderală involuntară, anorexie, hematemeză sau melenă, vărsături persistente, masă epigastrică) necesită evaluare endoscopică — Corect: Lista semnelor de alarmă este reprodusă din text.\n\nStrategia „testează și tratează\" sub 55 de ani se aplică în absența semnelor de alarmă, inclusiv pierdere în greutate, anemie, disfagie, vărsături sau istoric familial de cancer digestiv — Corect: „Testează și tratează\" sub 55 de ani, fără alarmă, este descrisă.\n\nExamenul obiectiv este, de obicei, diagnostic pentru ulcerul activ — Incorect: Textul precizează că examenul obiectiv este de obicei nefolositor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1174, Stomacul și duodenul — Algoritmul de investigare a ulcerului peptic (pagini PDF: 298).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1174
   ],
   "pdfPages": [
    298
   ],
   "section": "Stomacul și duodenul — Algoritmul de investigare a ulcerului peptic"
  },
  "learningObjective": "Aplicarea pragului de 55 de ani și a listei de alarmă care impune endoscopie, față de examenul obiectiv nefolositor.",
  "optionRationales": [
   "Strategia fără investigații suplimentare sub 55 de ani, H. pylori pozitiv, simptome tipice, este explicită.",
   "Necesitatea endoscopiei la vârstnici este citată.",
   "Lista semnelor de alarmă este reprodusă din text.",
   "„Testează și tratează\" sub 55 de ani, fără alarmă, este descrisă.",
   "Textul precizează că examenul obiectiv este de obicei nefolositor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Ridică palparea la rang diagnostic și cere reținerea simultană a pragului de 55 de ani și a listei complete de alarmă."
  },
  "textbookExpressions": [
   "sub 55 de ani",
   "anemie feriprivă"
  ]
 },
 {
  "id": "gastro-adv-028",
  "topicId": "gastro",
  "type": "CS",
  "stem": "La scintigrafia de evacuare gastrică, conținutul rezidual după 4 ore este considerat patologic dacă depășește:",
  "options": [
   "1%",
   "5%",
   "10%",
   "25%",
   "50%"
  ],
  "correct": [
   2
  ],
  "explanation": "1% — Incorect: 1% nu este pragul citat.\n\n5% — Incorect: 5% nu figurează ca prag scintigrafic.\n\n10% — Corect: Textul consideră patologică o valoare de peste 10% după 4 ore.\n\n25% — Incorect: 25% este categoria tulburărilor de defecație din alt segment, nu gastropareza.\n\n50% — Incorect: 50% este ponderea leziunilor mucoase la consumatorii de AINS, nu pragul scintigrafic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1176, Stomacul și duodenul — Gastropareza: diagnostic scintigrafic (pagini PDF: 300).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1176
   ],
   "pdfPages": [
    300
   ],
   "section": "Stomacul și duodenul — Gastropareza: diagnostic scintigrafic"
  },
  "learningObjective": "Reținerea pragului de 10% rezidual la 4 ore, distinct de alte procente din aceeași pagină (30%, 50%, 70%).",
  "optionRationales": [
   "1% nu este pragul citat.",
   "5% nu figurează ca prag scintigrafic.",
   "Textul consideră patologică o valoare de peste 10% după 4 ore.",
   "25% este categoria tulburărilor de defecație din alt segment, nu gastropareza.",
   "50% este ponderea leziunilor mucoase la consumatorii de AINS, nu pragul scintigrafic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate procentele apar pe pagina gastroparezei și AINS; doar >10% la 4 ore definește evacuarea întârziată."
  },
  "textbookExpressions": [
   "peste 10%",
   "4 ore"
  ]
 },
 {
  "id": "gastro-adv-029",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Perforația ulcerului peptic:",
  "options": [
   "Frecvența este în scădere, parțial datorită eficienței terapiei medicale",
   "UG perforează mai frecvent decât UD, de obicei în retroperitoneu",
   "UD perforează mai frecvent decât UG, de obicei în cavitatea peritoneală; este posibilă și perforația în bursa omentală",
   "Tratamentul conservator (sondă nazogastrică, fluide i.v., antibiotice) nu se folosește, indiferent de teren",
   "Laparotomia deschisă este aleasă de regulă în locul abordului laparoscopic"
  ],
  "correct": [
   0,
   2
  ],
  "explanation": "Frecvența este în scădere, parțial datorită eficienței terapiei medicale — Corect: Scăderea frecvenței sub terapia medicală este explicită.\n\nUG perforează mai frecvent decât UD, de obicei în retroperitoneu — Incorect: Textul indică opusul: UD perforează mai frecvent decât UG.\n\nUD perforează mai frecvent decât UG, de obicei în cavitatea peritoneală; este posibilă și perforația în bursa omentală — Corect: Predominanța UD, peritoneul și bursa omentală sunt citate.\n\nTratamentul conservator (sondă nazogastrică, fluide i.v., antibiotice) nu se folosește, indiferent de teren — Incorect: Tratamentul conservator este folosit ocazional la vârstnici și tarați.\n\nLaparotomia deschisă este aleasă de regulă în locul abordului laparoscopic — Incorect: Chirurgia laparoscopică este de obicei aleasă pentru închidere și drenaj.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1175, Stomacul și duodenul — Complicații: perforația (pagini PDF: 299).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1175
   ],
   "pdfPages": [
    299
   ],
   "section": "Stomacul și duodenul — Complicații: perforația"
  },
  "learningObjective": "Recunoașterea predominanței perforației UD în peritoneu și a locului chirurgiei laparoscopice, cu rezerva tratamentului conservator la vârstnici tarați.",
  "optionRationales": [
   "Scăderea frecvenței sub terapia medicală este explicită.",
   "Textul indică opusul: UD perforează mai frecvent decât UG.",
   "Predominanța UD, peritoneul și bursa omentală sunt citate.",
   "Tratamentul conservator este folosit ocazional la vârstnici și tarați.",
   "Chirurgia laparoscopică este de obicei aleasă pentru închidere și drenaj."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează care ulcer perforează mai des și înlocuiește laparoscopia cu laparotomia ca regulă."
  },
  "textbookExpressions": [
   "UD perforează mai frecvent",
   "Chirurgia laparoscopică"
  ]
 },
 {
  "id": "gastro-adv-030",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Insuficiența evacuatorie gastrică din boala ulceroasă:",
  "options": [
   "Vărsătura, de obicei fără durere, este în jet, cu volum crescut și resturi din prânzuri anterioare",
   "La examen poate fi obiectivat clapotajul a jeun",
   "Vărsăturile severe persistente produc alcaloză metabolică hipokaliemică",
   "Doar circa 30% dintre pacienți pot fi tratați fără intervenție chirurgicală",
   "Vărsăturile se remit adesea sub reechilibrare, drenaj nazogastric și terapie antisecretorie energică; dilatarea endoscopică sau stentul pot fi utile"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Vărsătura, de obicei fără durere, este în jet, cu volum crescut și resturi din prânzuri anterioare — Corect: Caracterele vărsăturii (fără durere, jet, resturi vechi) sunt explicite.\n\nLa examen poate fi obiectivat clapotajul a jeun — Corect: Clapotajul a jeun este citat.\n\nVărsăturile severe persistente produc alcaloză metabolică hipokaliemică — Corect: Alcaloza metabolică hipokaliemică este consecința pierderii de acid.\n\nDoar circa 30% dintre pacienți pot fi tratați fără intervenție chirurgicală — Incorect: Textul indică 70%, nu 30%, tratați fără chirurgie.\n\nVărsăturile se remit adesea sub reechilibrare, drenaj nazogastric și terapie antisecretorie energică; dilatarea endoscopică sau stentul pot fi utile — Corect: Remisia sub măsuri medicale și rolul dilatării/stentului sunt descrise.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1175, Stomacul și duodenul — Obstrucția orificiului de evacuare (pagini PDF: 299).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1175
   ],
   "pdfPages": [
    299
   ],
   "section": "Stomacul și duodenul — Obstrucția orificiului de evacuare"
  },
  "learningObjective": "Recunoașterea alcalozei hipokaliemice și a ratei de 70% de succes non-operator, pe fondul clapotajului a jeun.",
  "optionRationales": [
   "Caracterele vărsăturii (fără durere, jet, resturi vechi) sunt explicite.",
   "Clapotajul a jeun este citat.",
   "Alcaloza metabolică hipokaliemică este consecința pierderii de acid.",
   "Textul indică 70%, nu 30%, tratați fără chirurgie.",
   "Remisia sub măsuri medicale și rolul dilatării/stentului sunt descrise."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește 70% non-operator cu 30%, pragul simptomatic al leziunilor AINS de pe pagina alăturată."
  },
  "textbookExpressions": [
   "70% dintre pacienţi",
   "clapotajul a jeun"
  ]
 },
 {
  "id": "gastro-adv-031",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Consecințele chirurgiei gastrice și asocierile H. pylori:",
  "options": [
   "Sindromul dumping: greață, distensie, transpirații, leșin, palpitații după gastrectomie parțială cu gastro-jejunoanastomoza, prin evacuare jejunală rapidă și scăderea volumului circulant; poate apărea și hipoglicemie",
   "Pe termen lung: carență de fier, deficit de folat, carență de B12 prin factor intrinsc redus, scădere ponderală prin aport redus",
   "Peste 70% dintre limfoamele gastrice MALT cu celule B au infecție cu H. pylori",
   "Dumping-ul este tipic după vagotomia gastrică proximală fără anastomoză",
   "Incidența adenocarcinomului gastric distal este independentă de prevalența H. pylori"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sindromul dumping: greață, distensie, transpirații, leșin, palpitații după gastrectomie parțială cu gastro-jejunoanastomoza, prin evacuare jejunală rapidă și scăderea volumului circulant; poate apărea și hipoglicemie — Corect: Mecanismul dumping-ului după gastrectomie parțială cu anastomoză este explicit.\n\nPe termen lung: carență de fier, deficit de folat, carență de B12 prin factor intrinsc redus, scădere ponderală prin aport redus — Corect: Cele patru consecințe nutriționale sunt enumerate.\n\nPeste 70% dintre limfoamele gastrice MALT cu celule B au infecție cu H. pylori — Corect: Asocierea de peste 70% H. pylori–MALT este citată.\n\nDumping-ul este tipic după vagotomia gastrică proximală fără anastomoză — Incorect: Dumping-ul este descris după gastrectomie parțială și gastro-jejunoanastomoză, nu după vagotomia proximală.\n\nIncidența adenocarcinomului gastric distal este independentă de prevalența H. pylori — Incorect: Incidența cancerului gastric distal este direct proporțională cu cea a H. pylori.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1176, Stomacul și duodenul — Dumping, carențe nutriționale și MALT (pagini PDF: 300).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1176
   ],
   "pdfPages": [
    300
   ],
   "section": "Stomacul și duodenul — Dumping, carențe nutriționale și MALT"
  },
  "learningObjective": "Corelarea dumping-ului cu gastrectomia/anastomoza, a carențelor postgastrectomie și a asocierii de peste 70% H. pylori–MALT.",
  "optionRationales": [
   "Mecanismul dumping-ului după gastrectomie parțială cu anastomoză este explicit.",
   "Cele patru consecințe nutriționale sunt enumerate.",
   "Asocierea de peste 70% H. pylori–MALT este citată.",
   "Dumping-ul este descris după gastrectomie parțială și gastro-jejunoanastomoză, nu după vagotomia proximală.",
   "Incidența cancerului gastric distal este direct proporțională cu cea a H. pylori."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie dumping-ul vagotomiei proximale și rupe legătura H. pylori–cancer distal, pe fondul procentului MALT de 70%."
  },
  "textbookExpressions": [
   "Sindromul dumping",
   "Peste 70%"
  ]
 },
 {
  "id": "gastro-adv-032",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Leziunile gastroduodenale induse de AINS, la evaluare endoscopică:",
  "options": [
   "Circa 50% dintre consumatorii regulați dezvoltă leziuni ale mucoasei gastrice, iar circa 30% prezintă ulcere",
   "Doar circa 5% au simptome, iar 1-2% dezvoltă o complicație majoră (hemoragie sau perforație)",
   "Inhibitorii COX-2 sunt lipsiți de risc cardiovascular, de aceea înlocuiesc orice AINS",
   "H. pylori și AINS sunt factori antagonici, nu synergici",
   "Misoprostolul este mai bine tolerat decât IPP, fără diaree"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Circa 50% dintre consumatorii regulați dezvoltă leziuni ale mucoasei gastrice, iar circa 30% prezintă ulcere — Corect: Procentele 50% și 30% sunt explicite.\n\nDoar circa 5% au simptome, iar 1-2% dezvoltă o complicație majoră (hemoragie sau perforație) — Corect: 5% simptomatici și 1-2% complicații majore sunt citate.\n\nInhibitorii COX-2 sunt lipsiți de risc cardiovascular, de aceea înlocuiesc orice AINS — Incorect: Utilizarea COX-2 este limitată de riscul cardiovascular.\n\nH. pylori și AINS sunt factori antagonici, nu synergici — Incorect: H. pylori și AINS sunt factori independenți și sinergici.\n\nMisoprostolul este mai bine tolerat decât IPP, fără diaree — Incorect: IPP sunt mai bine tolerate decât misoprostolul, care provoacă diaree.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1176, Stomacul și duodenul — AINS: frecvența leziunilor și a complicațiilor (pagini PDF: 300).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1176
   ],
   "pdfPages": [
    300
   ],
   "section": "Stomacul și duodenul — AINS: frecvența leziunilor și a complicațiilor"
  },
  "learningObjective": "Cuantificarea cascadei 50% leziuni / 30% ulcere / 5% simptome / 1-2% complicații, distinct de restricția cardiovasculară a COX-2.",
  "optionRationales": [
   "Procentele 50% și 30% sunt explicite.",
   "5% simptomatici și 1-2% complicații majore sunt citate.",
   "Utilizarea COX-2 este limitată de riscul cardiovascular.",
   "H. pylori și AINS sunt factori independenți și sinergici.",
   "IPP sunt mai bine tolerate decât misoprostolul, care provoacă diaree."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează treptele procentuale și anulează restricția cardiovasculară a COX-2, deja folosită într-o vignette din banca existentă, dar aici ca epidemiologie numerică."
  },
  "textbookExpressions": [
   "50% dintre pacienţii",
   "30% vor"
  ]
 },
 {
  "id": "gastro-adv-033",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Epidemiologia bolilor inflamatorii intestinale:",
  "options": [
   "Incidența bolii Crohn este circa 4-10/100.000 anual, cu prevalență 25-100/100.000",
   "Incidența colitei ulcerative este stabilă la 6-15/100.000 anual, cu prevalență 80-150/100.000",
   "În jumătate din colitele din spectrul BII nu se poate distinge Crohn de CU",
   "În 10% dintre colitele din spectrul BII diagnosticul rămâne de colită nedeterminată",
   "Circa 25% sunt diagnosticați înainte de 18 ani; debutul tânăr este mai extins și mai agresiv"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "Incidența bolii Crohn este circa 4-10/100.000 anual, cu prevalență 25-100/100.000 — Corect: Intervalul 4-10/100.000 și prevalența 25-100 sunt explicite.\n\nIncidența colitei ulcerative este stabilă la 6-15/100.000 anual, cu prevalență 80-150/100.000 — Corect: 6-15/100.000 și 80-150 sunt cifrele CU.\n\nÎn jumătate din colitele din spectrul BII nu se poate distinge Crohn de CU — Incorect: Ponderea nedeterminată este 10%, nu jumătate.\n\nÎn 10% dintre colitele din spectrul BII diagnosticul rămâne de colită nedeterminată — Corect: 10% colită nedeterminată este citat.\n\nCirca 25% sunt diagnosticați înainte de 18 ani; debutul tânăr este mai extins și mai agresiv — Corect: 25% înainte de 18 ani și agresivitatea debutului tânăr sunt descrise.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1198, Bolile inflamatorii intestinale — Epidemiologie (pagini PDF: 301).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1198
   ],
   "pdfPages": [
    301
   ],
   "section": "Bolile inflamatorii intestinale — Epidemiologie"
  },
  "learningObjective": "Reținerea perechilor incidență/prevalență Crohn versus CU și a ponderilor 10% nedeterminat și 25% pediatric.",
  "optionRationales": [
   "Intervalul 4-10/100.000 și prevalența 25-100 sunt explicite.",
   "6-15/100.000 și 80-150 sunt cifrele CU.",
   "Ponderea nedeterminată este 10%, nu jumătate.",
   "10% colită nedeterminată este citat.",
   "25% înainte de 18 ani și agresivitatea debutului tânăr sunt descrise."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește 10% colită nedeterminată cu 50% și cere atribuirea corectă a patru intervale numerice din același paragraf."
  },
  "textbookExpressions": [
   "4-10/100.000",
   "6-15/100.000"
  ]
 },
 {
  "id": "gastro-adv-034",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Microbiota intestinală în boala Crohn:",
  "options": [
   "Diversitatea speciilor microbiene este crescută la pacienții cu BII",
   "Concentrații mai mari de Bacteroides și E. coli și mai mici de bifidobacterii și Faecalibacterium prausnitzii sunt raportate în BC",
   "Niveluri scăzute de F. prausnitzii în specimenele rezecate prezic recăderea endoscopică",
   "PCR-ul a confirmat legătura cu Mycobacterium paratuberculosis, iar trialurile anti-TB au fost eficiente",
   "Microbiota comensală nu are rol imunoregulator în modelele animale de colită"
  ],
  "correct": [
   1,
   2
  ],
  "explanation": "Diversitatea speciilor microbiene este crescută la pacienții cu BII — Incorect: Constatarea cea mai frecventă este diversitatea redusă, nu crescută.\n\nConcentrații mai mari de Bacteroides și E. coli și mai mici de bifidobacterii și Faecalibacterium prausnitzii sunt raportate în BC — Corect: Profilul Bacteroides/E. coli crescut și bifidobacterii/F. prausnitzii scăzut este explicit.\n\nNiveluri scăzute de F. prausnitzii în specimenele rezecate prezic recăderea endoscopică — Corect: Valoarea predictivă a F. prausnitzii scăzut pe piesa de rezecție este citată.\n\nPCR-ul a confirmat legătura cu Mycobacterium paratuberculosis, iar trialurile anti-TB au fost eficiente — Incorect: PCR nu a confirmat MAP, iar trialurile anti-TB nu au fost eficiente.\n\nMicrobiota comensală nu are rol imunoregulator în modelele animale de colită — Incorect: Textul atribuie microbiotei comensale un rol imunoregulator protector în modele animale.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1199, Bolile inflamatorii intestinale — Disbioză și Faecalibacterium prausnitzii (pagini PDF: 302).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1199
   ],
   "pdfPages": [
    302
   ],
   "section": "Bolile inflamatorii intestinale — Disbioză și Faecalibacterium prausnitzii"
  },
  "learningObjective": "Recunoașterea disbiozei (diversitate redusă, F. prausnitzii scăzut ca predictor de recădere) față de eșecul pistei MAP.",
  "optionRationales": [
   "Constatarea cea mai frecventă este diversitatea redusă, nu crescută.",
   "Profilul Bacteroides/E. coli crescut și bifidobacterii/F. prausnitzii scăzut este explicit.",
   "Valoarea predictivă a F. prausnitzii scăzut pe piesa de rezecție este citată.",
   "PCR nu a confirmat MAP, iar trialurile anti-TB nu au fost eficiente.",
   "Textul atribuie microbiotei comensale un rol imunoregulator protector în modele animale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează direcția diversității microbiene și reînvie pista MAP infirmată de PCR și de trialuri."
  },
  "textbookExpressions": [
   "Faecalibacterium prausnitzii",
   "diversitatea redusă"
  ]
 },
 {
  "id": "gastro-adv-035",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Anatomia patologică macroscopică a BII:",
  "options": [
   "BC are tendință particulară pentru ileonul terminal și colonul ascendent; poate fi discontinuă (skip lesions)",
   "Ulcerele profunde și fisurile produc aspect de „piatră de pavaj\"; fistulele și abcesele reflectă caracterul penetrant",
   "CU poate fi proctită, colită stângă sau extensivă; unii au și ileită de reflux",
   "În CU inflamația este transmurală, iar în BC este limitată la mucoasă",
   "Un semn precoce în BC este ulcerația aftoidă colonoscopică"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "BC are tendință particulară pentru ileonul terminal și colonul ascendent; poate fi discontinuă (skip lesions) — Corect: Predilecția ileocolonică și skip lesions sunt explicite.\n\nUlcerele profunde și fisurile produc aspect de „piatră de pavaj\"; fistulele și abcesele reflectă caracterul penetrant — Corect: Piatra de pavaj și caracterul penetrant sunt citate.\n\nCU poate fi proctită, colită stângă sau extensivă; unii au și ileită de reflux — Corect: Cele trei extensii CU și ileita de reflux sunt descrise.\n\nÎn CU inflamația este transmurală, iar în BC este limitată la mucoasă — Incorect: Textul inversează: BC transmurală, CU limitată la mucoasă.\n\nUn semn precoce în BC este ulcerația aftoidă colonoscopică — Corect: Ulcerația aftoidă ca semn precoce este menționată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1200, Bolile inflamatorii intestinale — Distribuție, skip lesions și piatră de pavaj (pagini PDF: 303).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1200
   ],
   "pdfPages": [
    303
   ],
   "section": "Bolile inflamatorii intestinale — Distribuție, skip lesions și piatră de pavaj"
  },
  "learningObjective": "Contrastarea distribuției discontinue Crohn cu extinderea continuă CU și recunoașterea pietrei de pavaj ca marcă penetrantă.",
  "optionRationales": [
   "Predilecția ileocolonică și skip lesions sunt explicite.",
   "Piatra de pavaj și caracterul penetrant sunt citate.",
   "Cele trei extensii CU și ileita de reflux sunt descrise.",
   "Textul inversează: BC transmurală, CU limitată la mucoasă.",
   "Ulcerația aftoidă ca semn precoce este menționată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează adâncimea inflamației (transmural versus mucos), singura confuzie care face restul listei macroscopice să pară coerentă."
  },
  "textbookExpressions": [
   "skip lesions",
   "piatră de pavaj"
  ]
 },
 {
  "id": "gastro-adv-036",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Artropatiile periferice din BII:",
  "options": [
   "Tipul 1 (pauciarticular): atacuri acute auto-limitate sub 10 săptămâni, odată cu recăderile BII, asociate altor manifestări extraintestinale",
   "Tipul 2 (poliarticular): durează luni până la ani, independent de activitatea BII, de regulă asociat cu uveita",
   "HLA-B27 se asociază cu sacroiliita",
   "Tipul 1 evoluează independent de activitatea intestinală",
   "Complicațiile articulare sunt cele mai rare manifestări extraintestinale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tipul 1 (pauciarticular): atacuri acute auto-limitate sub 10 săptămâni, odată cu recăderile BII, asociate altor manifestări extraintestinale — Corect: Definiția tipului 1, inclusiv fereastra sub 10 săptămâni, este explicită.\n\nTipul 2 (poliarticular): durează luni până la ani, independent de activitatea BII, de regulă asociat cu uveita — Corect: Durata lungă, independența de BII și uveita tipului 2 sunt citate.\n\nHLA-B27 se asociază cu sacroiliita — Corect: Asocierea HLA-B27 cu sacroiliita este menționată.\n\nTipul 1 evoluează independent de activitatea intestinală — Incorect: Independența de activitatea intestinală caracterizează tipul 2, nu tipul 1.\n\nComplicațiile articulare sunt cele mai rare manifestări extraintestinale — Incorect: Complicațiile articulare sunt cele mai comune, nu cele mai rare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1201, Bolile inflamatorii intestinale — Manifestări extra-intestinale: artropatia tip 1 versus tip 2 (pagini PDF: 304).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1201
   ],
   "pdfPages": [
    304
   ],
   "section": "Bolile inflamatorii intestinale — Manifestări extra-intestinale: artropatia tip 1 versus tip 2"
  },
  "learningObjective": "Diferențierea artropatiei pauciarticulare legate de puseu de cea poliarticulară independentă, cu uveită, și a asocierii HLA-B27–sacroiliită.",
  "optionRationales": [
   "Definiția tipului 1, inclusiv fereastra sub 10 săptămâni, este explicită.",
   "Durata lungă, independența de BII și uveita tipului 2 sunt citate.",
   "Asocierea HLA-B27 cu sacroiliita este menționată.",
   "Independența de activitatea intestinală caracterizează tipul 2, nu tipul 1.",
   "Complicațiile articulare sunt cele mai comune, nu cele mai rare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă între ele relația cu activitatea intestinală a celor două tipuri de artropatie."
  },
  "textbookExpressions": [
   "Tipul 1 (pauciarticular)",
   "Tipul 2 (poliarticular)"
  ]
 },
 {
  "id": "gastro-adv-037",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Tabloul clinic al bolii Crohn:",
  "options": [
   "Simptomele majore sunt diareea, durerea abdominală și pierderea în greutate",
   "Aproximativ 50% vor necesita rezecție intestinală în primii 5 ani de la diagnostic",
   "La 15% simptomele gastrointestinale pot lipsi",
   "Diareea apare în 80% din cazuri; în boala colonică conține de obicei sânge",
   "Fistulele enterice (vezică, vagin, perete abdominal) apar la sub 5% dintre pacienți"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Simptomele majore sunt diareea, durerea abdominală și pierderea în greutate — Corect: Triada diaree–durere–scădere ponderală este explicită.\n\nAproximativ 50% vor necesita rezecție intestinală în primii 5 ani de la diagnostic — Corect: 50% rezecție în 5 ani este citat.\n\nLa 15% simptomele gastrointestinale pot lipsi — Corect: 15% fără simptome GI este menționat.\n\nDiareea apare în 80% din cazuri; în boala colonică conține de obicei sânge — Corect: 80% diaree, adesea sangvinolentă în forma colonică, este din text.\n\nFistulele enterice (vezică, vagin, perete abdominal) apar la sub 5% dintre pacienți — Incorect: Fistulele enterice apar în 20-40% din cazuri, nu sub 5%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1202, Bolile inflamatorii intestinale — Boala Crohn: clinică și complicații fistulizante (pagini PDF: 305).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1202
   ],
   "pdfPages": [
    305
   ],
   "section": "Bolile inflamatorii intestinale — Boala Crohn: clinică și complicații fistulizante"
  },
  "learningObjective": "Cuantificarea diareei (80%), a rezecției la 5 ani (50%), a absenței simptomelor GI (15%) și a fistulelor (20-40%), față de subestimarea fistulelor.",
  "optionRationales": [
   "Triada diaree–durere–scădere ponderală este explicită.",
   "50% rezecție în 5 ani este citat.",
   "15% fără simptome GI este menționat.",
   "80% diaree, adesea sangvinolentă în forma colonică, este din text.",
   "Fistulele enterice apar în 20-40% din cazuri, nu sub 5%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Subestimează fistulele (20-40%) la sub 5% și cere reținerea simultană a trei procente din același tablou."
  },
  "textbookExpressions": [
   "Diareea apare în 80%",
   "50% dintre pacienţi"
  ]
 },
 {
  "id": "gastro-adv-038",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Nutriția enterală exclusivă în boala Crohn:",
  "options": [
   "Ca unică sursă de nutriție timp de 28 de zile, ratele de inducție a remisiei sunt similare celor obținute cu steroizi",
   "Este subutilizată la adulți din cauza complianței; ratele de recidivă sunt mari, în particular la afectarea colonică",
   "Este tratamentul de primă linie la adultul cu BC colonică, înaintea oricărui steroid",
   "Aminosalicilații au dovezi solide de inducție a remisiei în BC",
   "Steroizii sunt preferați în boala penetrantă intestinală și în sepsisul perianal"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Ca unică sursă de nutriție timp de 28 de zile, ratele de inducție a remisiei sunt similare celor obținute cu steroizi — Corect: Echivalența la 28 de zile cu steroizii este explicită.\n\nEste subutilizată la adulți din cauza complianței; ratele de recidivă sunt mari, în particular la afectarea colonică — Corect: Subutilizarea la adulți și recidiva colonică sunt citate.\n\nEste tratamentul de primă linie la adultul cu BC colonică, înaintea oricărui steroid — Incorect: La adulți EEN este subutilizată, nu prima linie colonică.\n\nAminosalicilații au dovezi solide de inducție a remisiei în BC — Incorect: Textul găsește foarte puține dovezi pentru aminosalicilați în BC.\n\nSteroizii sunt preferați în boala penetrantă intestinală și în sepsisul perianal — Incorect: Steroizii trebuie evitați în boala penetrantă și sepsisul perianal.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1203, Bolile inflamatorii intestinale — Nutriție enterală exclusivă (pagini PDF: 306).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1203
   ],
   "pdfPages": [
    306
   ],
   "section": "Bolile inflamatorii intestinale — Nutriție enterală exclusivă"
  },
  "learningObjective": "Recunoașterea echivalenței EEN–steroizi la 28 de zile și a limitei (recidivă colonică, complianță adult).",
  "optionRationales": [
   "Echivalența la 28 de zile cu steroizii este explicită.",
   "Subutilizarea la adulți și recidiva colonică sunt citate.",
   "La adulți EEN este subutilizată, nu prima linie colonică.",
   "Textul găsește foarte puține dovezi pentru aminosalicilați în BC.",
   "Steroizii trebuie evitați în boala penetrantă și sepsisul perianal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă o opțiune pediatrică/de complianță dificilă în prima linie a adultului colonic și reintroduce steroizii în sepsisul perianal."
  },
  "textbookExpressions": [
   "28 de zile",
   "Nutriţie enterală exclusivă"
  ]
 },
 {
  "id": "gastro-adv-039",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Terapiile biologice noi în boala Crohn, după eșecul anti-TNF:",
  "options": [
   "Vedolizumab (anti-α4β7) reduce recrutarea leucocitară în intestinul inflamat",
   "Se folosește în BC moderat-severă activă la intoleranță, contraindicație, răspuns incomplet sau pierderea răspunsului la anti-TNF",
   "Ustekinumab (anti-IL-12/IL-23) se folosește în aceeași populație de eșec/intoleranță anti-TNF",
   "Mongersen (oligonucleotid antisense SMAD7) este prima linie, înaintea steroizilor",
   "Risankizumab țintește subunitatea p40 comună IL-12/IL-23, identic ustekinumabului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Vedolizumab (anti-α4β7) reduce recrutarea leucocitară în intestinul inflamat — Corect: Mecanismul anti-α4β7 este explicit.\n\nSe folosește în BC moderat-severă activă la intoleranță, contraindicație, răspuns incomplet sau pierderea răspunsului la anti-TNF — Corect: Indicația după eșecul/intoleranța anti-TNF este citată.\n\nUstekinumab (anti-IL-12/IL-23) se folosește în aceeași populație de eșec/intoleranță anti-TNF — Corect: Ustekinumab IL-12/IL-23 în aceeași nișă este menționat.\n\nMongersen (oligonucleotid antisense SMAD7) este prima linie, înaintea steroizilor — Incorect: Mongersen este în studii de fază 3, nu prima linie.\n\nRisankizumab țintește subunitatea p40 comună IL-12/IL-23, identic ustekinumabului — Incorect: Risankizumab țintește p19 a IL-23, nu p40.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1204, Bolile inflamatorii intestinale — Vedolizumab, ustekinumab și molecule în studiu (pagini PDF: 307).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1204
   ],
   "pdfPages": [
    307
   ],
   "section": "Bolile inflamatorii intestinale — Vedolizumab, ustekinumab și molecule în studiu"
  },
  "learningObjective": "Poziționarea vedolizumabului și ustekinumabului după anti-TNF, distinct de agenții încă în faza 3 (mongersen, risankizumab p19).",
  "optionRationales": [
   "Mecanismul anti-α4β7 este explicit.",
   "Indicația după eșecul/intoleranța anti-TNF este citată.",
   "Ustekinumab IL-12/IL-23 în aceeași nișă este menționat.",
   "Mongersen este în studii de fază 3, nu prima linie.",
   "Risankizumab țintește p19 a IL-23, nu p40."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Ridică un agent de fază 3 la rang de primă linie și confundă țintele p19 versus p40 ale anti-IL-23."
  },
  "textbookExpressions": [
   "vedolizumab",
   "ustekinumab"
  ]
 },
 {
  "id": "gastro-adv-040",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Chirurgia în boala Crohn:",
  "options": [
   "Studiile de dinaintea biologicelor arată că până la 80% vor necesita o intervenție pe parcursul bolii",
   "Recurența este circa 15% pe an, aproape inevitabilă fără terapie profilactică de menținere",
   "Se evită pe cât posibil; rezecțiile trebuie să fie limitate",
   "Pacienții cu BC sunt candidați buni pentru rezervor ileal (pouch), recurența la acest nivel fiind rară",
   "O cură de 3 luni cu metronidazol reduce recăderea; ileocolonoscopia anastomozei la 6 luni ghidează terapia ulterioară"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Studiile de dinaintea biologicelor arată că până la 80% vor necesita o intervenție pe parcursul bolii — Corect: Până la 80% în era pre-biologică este explicit.\n\nRecurența este circa 15% pe an, aproape inevitabilă fără terapie profilactică de menținere — Corect: 15% pe an fără menținere este citat.\n\nSe evită pe cât posibil; rezecțiile trebuie să fie limitate — Corect: Rezecțiile limitate și evitarea chirurgiei pe cât posibil sunt recomandate.\n\nPacienții cu BC sunt candidați buni pentru rezervor ileal (pouch), recurența la acest nivel fiind rară — Incorect: Textul precizează că pacienții cu BC nu se pretează pentru pouch, recurența fiind mare.\n\nO cură de 3 luni cu metronidazol reduce recăderea; ileocolonoscopia anastomozei la 6 luni ghidează terapia ulterioară — Corect: Metronidazolul 3 luni și ileocolonoscopia la 6 luni sunt descrise.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1205, 1204, Bolile inflamatorii intestinale — Chirurgia BC: recurență și pouch (pagini PDF: 308, 307).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1205,
    1204
   ],
   "pdfPages": [
    308,
    307
   ],
   "section": "Bolile inflamatorii intestinale — Chirurgia BC: recurență și pouch"
  },
  "learningObjective": "Cuantificarea riscului istoric de 80% și a recurenței 15%/an, cu interdicția pouch-ului și fereastra metronidazol 3 luni plus control la 6 luni.",
  "optionRationales": [
   "Până la 80% în era pre-biologică este explicit.",
   "15% pe an fără menținere este citat.",
   "Rezecțiile limitate și evitarea chirurgiei pe cât posibil sunt recomandate.",
   "Textul precizează că pacienții cu BC nu se pretează pentru pouch, recurența fiind mare.",
   "Metronidazolul 3 luni și ileocolonoscopia la 6 luni sunt descrise."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Face din BC indicație de pouch — opusul textului — pe fondul a două procente (80%, 15%/an) și a două intervale (3 luni, 6 luni)."
  },
  "textbookExpressions": [
   "până la 80%",
   "15% pe an"
  ]
 },
 {
  "id": "gastro-adv-041",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Megacolonul toxic din colita ulcerativă severă:",
  "options": [
   "Radiografia abdominală pe gol arată un colon cu pereți subțiri, dilatat, diametru peste 6 cm, plin de gaze, cu pseudopolipi (insule mucoase)",
   "Este un stadiu periculos, cu iminență de perforație și mortalitate 15-25%",
   "Chirurgia de urgență este necesară dacă dilatarea toxică nu s-a remis în 48 de ore sub terapie intensivă",
   "Pragul de diametru citat este 3 cm, ca la hematomul cerebelos",
   "Mortalitatea este sub 1% dacă se continuă numai corticoterapia"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Radiografia abdominală pe gol arată un colon cu pereți subțiri, dilatat, diametru peste 6 cm, plin de gaze, cu pseudopolipi (insule mucoase) — Corect: Aspectul radiologic și pragul de 6 cm sunt explicite.\n\nEste un stadiu periculos, cu iminență de perforație și mortalitate 15-25% — Corect: Iminența perforației și mortalitatea 15-25% sunt citate.\n\nChirurgia de urgență este necesară dacă dilatarea toxică nu s-a remis în 48 de ore sub terapie intensivă — Corect: Fereastra de 48 de ore până la chirurgia de urgență este din text.\n\nPragul de diametru citat este 3 cm, ca la hematomul cerebelos — Incorect: 3 cm nu este pragul megacolonului.\n\nMortalitatea este sub 1% dacă se continuă numai corticoterapia — Incorect: Mortalitatea citată este 15-25%, nu sub 1%; continuarea steroizilor singuri întârzie colectomia.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1205, Bolile inflamatorii intestinale — Megacolonul toxic (pagini PDF: 308).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1205
   ],
   "pdfPages": [
    308
   ],
   "section": "Bolile inflamatorii intestinale — Megacolonul toxic"
  },
  "learningObjective": "Reținerea pragului de 6 cm, a mortalității 15-25% și a ferestrei de 48 de ore până la chirurgia de urgență.",
  "optionRationales": [
   "Aspectul radiologic și pragul de 6 cm sunt explicite.",
   "Iminența perforației și mortalitatea 15-25% sunt citate.",
   "Fereastra de 48 de ore până la chirurgia de urgență este din text.",
   "3 cm nu este pragul megacolonului.",
   "Mortalitatea citată este 15-25%, nu sub 1%; continuarea steroizilor singuri întârzie colectomia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește 6 cm și 48 de ore cu praguri din alte capitole (3 cm, 1%) și subestimează mortalitatea."
  },
  "textbookExpressions": [
   "mai mare de 6 cm",
   "15-25%"
  ]
 },
 {
  "id": "gastro-adv-042",
  "topicId": "gastro",
  "type": "CM",
  "stem": "După proctocolectomie cu rezervor ileoanal pentru colita ulcerativă:",
  "options": [
   "O treime dintre pacienți vor prezenta pouchită",
   "Incidența pouchitei este de două ori mai mare la cei cu colangită sclerozantă primitivă și crescută la ANCA pozitivi cu ileită retrogradă prealabilă",
   "Două treimi din cazurile de pouchită vor reapare, acut sau cronic",
   "Prebioticul VSL #3 s-a dovedit eficient în prevenție și în menținerea remisiunii după antibiotice",
   "Colectomia rămâne excepțională: sub 5% dintre pacienții cu CU în 20 de ani de la diagnostic"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "O treime dintre pacienți vor prezenta pouchită — Corect: O treime cu pouchită este explicită.\n\nIncidența pouchitei este de două ori mai mare la cei cu colangită sclerozantă primitivă și crescută la ANCA pozitivi cu ileită retrogradă prealabilă — Corect: Dublarea în PSC și asocierea ANCA/ileită retrogradă sunt citate.\n\nDouă treimi din cazurile de pouchită vor reapare, acut sau cronic — Corect: Recurența la două treimi este menționată.\n\nPrebioticul VSL #3 s-a dovedit eficient în prevenție și în menținerea remisiunii după antibiotice — Corect: Eficacitatea VSL #3 în prevenție și menținere este din text.\n\nColectomia rămâne excepțională: sub 5% dintre pacienții cu CU în 20 de ani de la diagnostic — Incorect: O treime dintre pacienții cu CU fac colectomie în 20 de ani, nu sub 5%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1207, Bolile inflamatorii intestinale — Pouchită, VSL #3 și prognosticul CU (pagini PDF: 310).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1207
   ],
   "pdfPages": [
    310
   ],
   "section": "Bolile inflamatorii intestinale — Pouchită, VSL #3 și prognosticul CU"
  },
  "learningObjective": "Cuantificarea pouchitei (1/3, dublu în PSC, 2/3 recurență) și a evoluției CU (1/3 episod unic, 1/3 colectomie/20 ani), plus rolul VSL #3.",
  "optionRationales": [
   "O treime cu pouchită este explicită.",
   "Dublarea în PSC și asocierea ANCA/ileită retrogradă sunt citate.",
   "Recurența la două treimi este menționată.",
   "Eficacitatea VSL #3 în prevenție și menținere este din text.",
   "O treime dintre pacienții cu CU fac colectomie în 20 de ani, nu sub 5%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Subestimează colectomia la 20 de ani (o treime versus sub 5%) și cere reținerea ponderilor pouchitei din același paragraf de prognostic."
  },
  "textbookExpressions": [
   "VSL #3",
   "O treime dintre pacienţii"
  ]
 },
 {
  "id": "gastro-adv-043",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Agentul principal al cariilor dentare la om, cariogen numai în prezența zahărului, este:",
  "options": [
   "Streptococcus mutans",
   "Helicobacter pylori",
   "Clostridium difficile",
   "Enterococcus faecalis",
   "Candida albicans"
  ],
  "correct": [
   0
  ],
  "explanation": "Streptococcus mutans — Corect: Textul identifică Streptococcus mutans ca principala cauză, cariogen numai în prezența zahărului.\n\nHelicobacter pylori — Incorect: H. pylori colonizează epiteliul gastric, nu smalțul.\n\nClostridium difficile — Incorect: C. difficile este legat de infecțiile sub IPP, nu de carii.\n\nEnterococcus faecalis — Incorect: Enterococul nu este agentul citat.\n\nCandida albicans — Incorect: Candida produce candidoză orală, nu carii.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1162, Cavitatea orală — Cariile dentare (pagini PDF: 291).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1162
   ],
   "pdfPages": [
    291
   ],
   "section": "Cavitatea orală — Cariile dentare"
  },
  "learningObjective": "Identificarea streptococului mutans ca agent cariogen dependent de zahăr, distinct de patogenele digestive din același capitol.",
  "optionRationales": [
   "Textul identifică Streptococcus mutans ca principala cauză, cariogen numai în prezența zahărului.",
   "H. pylori colonizează epiteliul gastric, nu smalțul.",
   "C. difficile este legat de infecțiile sub IPP, nu de carii.",
   "Enterococul nu este agentul citat.",
   "Candida produce candidoză orală, nu carii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate speciile apar în capitolul de gastro; doar S. mutans este legat de carii și de zahăr."
  },
  "textbookExpressions": [
   "Streptococcus mutans",
   "zahărului"
  ]
 },
 {
  "id": "gastro-adv-044",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Infecția dento-alveolară și eroziunile dentare, conform textului:",
  "options": [
   "Cariile pot progresa spre pulpită, necroză pulpară și abces dento-alveolar",
   "Dacă există edem al țesuturilor moi, înaintea drenajului se prescriu antibiotice, de exemplu amoxicilină sau metronidazol",
   "Eroziunile dentare pot rezulta din expunerea la acid, de exemplu în bulimia nervoasă, sau foarte rar în BAGE severă",
   "Abcesul dentar se tratează doar cu IPP, drenajul fiind inutil",
   "Eroziunile dentare sunt patognomonice pentru infecția cu H. pylori"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cariile pot progresa spre pulpită, necroză pulpară și abces dento-alveolar — Corect: Progresia carie–pulpită–necroză–abces este explicită.\n\nDacă există edem al țesuturilor moi, înaintea drenajului se prescriu antibiotice, de exemplu amoxicilină sau metronidazol — Corect: Amoxicilina sau metronidazolul înaintea drenajului, dacă există edem, sunt citate.\n\nEroziunile dentare pot rezulta din expunerea la acid, de exemplu în bulimia nervoasă, sau foarte rar în BAGE severă — Corect: Bulimia și, foarte rar, BAGE severă sunt cauzele de eroziune.\n\nAbcesul dentar se tratează doar cu IPP, drenajul fiind inutil — Incorect: Drenajul rămâne intervenția dentară; antibioticele o precedă când există edem.\n\nEroziunile dentare sunt patognomonice pentru infecția cu H. pylori — Incorect: H. pylori nu este cauza eroziunilor dentare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1162, Cavitatea orală — Abces dentar și eroziuni (pagini PDF: 291).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1162
   ],
   "pdfPages": [
    291
   ],
   "section": "Cavitatea orală — Abces dentar și eroziuni"
  },
  "learningObjective": "Recunoașterea schemei amoxicilină/metronidazol înaintea drenajului și a eroziunilor prin acid (bulimie, rar BAGE).",
  "optionRationales": [
   "Progresia carie–pulpită–necroză–abces este explicită.",
   "Amoxicilina sau metronidazolul înaintea drenajului, dacă există edem, sunt citate.",
   "Bulimia și, foarte rar, BAGE severă sunt cauzele de eroziune.",
   "Drenajul rămâne intervenția dentară; antibioticele o precedă când există edem.",
   "H. pylori nu este cauza eroziunilor dentare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește drenajul cu IPP și atribuie eroziunile lui H. pylori, două confuzii cu teme din același capitol."
  },
  "textbookExpressions": [
   "amoxicilina sau metronidazol",
   "bulimia nervosa"
  ]
 },
 {
  "id": "gastro-adv-045",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Factorii asociați refluxului gastro-esofagian, din Cadranul 32.11, includ:",
  "options": [
   "Medicamente — antimuscarinice, blocante ale canalelor de calciu, nitrați",
   "Sclerodermia (scleroza sistemică) și tratamentul pentru acalazie",
   "Corticoterapia sistemică de scurtă durată, ca mecanism principal",
   "Deficitul de vitamină B12 prin factor intrinsc",
   "Colonizarea gastrică cu S. mutans"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Medicamente — antimuscarinice, blocante ale canalelor de calciu, nitrați — Corect: Cele trei clase medicamentoase sunt listate.\n\nSclerodermia (scleroza sistemică) și tratamentul pentru acalazie — Corect: Sclerodermia și tratamentul acalaziei sunt în cadran.\n\nCorticoterapia sistemică de scurtă durată, ca mecanism principal — Incorect: Corticoterapia nu figurează ca factor principal de reflux în cadran.\n\nDeficitul de vitamină B12 prin factor intrinsc — Incorect: Deficitul de B12 este o complicație a chirurgiei gastrice, nu un factor de BAGE.\n\nColonizarea gastrică cu S. mutans — Incorect: S. mutans este agentul cariilor, nu al refluxului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1162, BAGE — Factori asociați (Cadranul 32.11) (pagini PDF: 291).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1162
   ],
   "pdfPages": [
    291
   ],
   "section": "BAGE — Factori asociați (Cadranul 32.11)"
  },
  "learningObjective": "Recunoașterea medicamentelor care relaxează SEI (antimuscarinice, BCC, nitrați) și a sclerodermiei/acalaziei ca asocieri, distinct de cauze orale.",
  "optionRationales": [
   "Cele trei clase medicamentoase sunt listate.",
   "Sclerodermia și tratamentul acalaziei sunt în cadran.",
   "Corticoterapia nu figurează ca factor principal de reflux în cadran.",
   "Deficitul de B12 este o complicație a chirurgiei gastrice, nu un factor de BAGE.",
   "S. mutans este agentul cariilor, nu al refluxului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Importă B12 și S. mutans din paragrafele de dinți/chirurgie peste lista reală de relaxante ale SEI."
  },
  "textbookExpressions": [
   "blocante ale canalelor de calciu",
   "Sclerodermia"
  ]
 },
 {
  "id": "gastro-adv-046",
  "topicId": "gastro",
  "type": "CM",
  "stem": "În algoritmul endoscopic al simptomelor de reflux, conform figurii:",
  "options": [
   "Esofagita erozivă reprezintă 20-30% din cazuri, cu hernie hiatală în 70% și răspuns la IPP în 90%",
   "Endoscopia normală (NERD) reprezintă 60-70%, cu hernie hiatală în 30%",
   "Esofagul Barrett apare la 6-12%, cu hernie hiatală în 95%",
   "Pirozisul funcțional (stimul non-acid) are răspuns slab la IPP",
   "Esofagita erozivă este 60-70%, iar Barrett 70%, cu răspuns nul la IPP"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Esofagita erozivă reprezintă 20-30% din cazuri, cu hernie hiatală în 70% și răspuns la IPP în 90% — Corect: 20-30%, HH 70% și răspuns IPP 90% sunt din figură.\n\nEndoscopia normală (NERD) reprezintă 60-70%, cu hernie hiatală în 30% — Corect: 60-70% endoscopie normală și HH 30% sunt citate.\n\nEsofagul Barrett apare la 6-12%, cu hernie hiatală în 95% — Corect: 6-12% Barrett și HH 95% sunt din figură.\n\nPirozisul funcțional (stimul non-acid) are răspuns slab la IPP — Corect: Răspunsul slab la IPP al pirozisului funcțional este marcat.\n\nEsofagita erozivă este 60-70%, iar Barrett 70%, cu răspuns nul la IPP — Incorect: Cifrele 60-70% și 70% țin de NERD, respectiv de hernia din esofagita erozivă, nu de Barrett.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1165, 1164, BAGE — Erozivă versus NERD versus Barrett: ponderi (pagini PDF: 294, 293).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1165,
    1164
   ],
   "pdfPages": [
    294,
    293
   ],
   "section": "BAGE — Erozivă versus NERD versus Barrett: ponderi"
  },
  "learningObjective": "Atribuirea corectă a ponderilor 20-30% eroziv, 60-70% NERD și 6-12% Barrett, plus hernia 70%/30%/95%.",
  "optionRationales": [
   "20-30%, HH 70% și răspuns IPP 90% sunt din figură.",
   "60-70% endoscopie normală și HH 30% sunt citate.",
   "6-12% Barrett și HH 95% sunt din figură.",
   "Răspunsul slab la IPP al pirozisului funcțional este marcat.",
   "Cifrele 60-70% și 70% țin de NERD, respectiv de hernia din esofagita erozivă, nu de Barrett."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 20-30%, 60-70% și 6-12% între eroziv, NERD și Barrett, toate din aceeași figură."
  },
  "textbookExpressions": [
   "20-30%",
   "6-12%"
  ]
 },
 {
  "id": "gastro-adv-047",
  "topicId": "gastro",
  "type": "CS",
  "stem": "În criteriile Praga, dacă inserția endoscopului la joncțiunea esogastrică este 36 cm, limita circumferențială 33 cm și extensia maximă 29 cm, clasificarea este:",
  "options": [
   "C3 M7",
   "C7 M3",
   "C36 M29",
   "Gradul D Los Angeles",
   "Praga A5 mm"
  ],
  "correct": [
   0
  ],
  "explanation": "C3 M7 — Corect: Textul calculează explicit :36 cm−33 cm=C3 și :36 cm−29 cm=M7.\n\nC7 M3 — Incorect: C și M sunt inversate.\n\nC36 M29 — Incorect: 36 și 29 sunt inserțiile, nu valorile C și M.\n\nGradul D Los Angeles — Incorect: Gradul D Los Angeles este al esofagitei erozive, nu al metaplaziei.\n\nPraga A5 mm — Incorect: 5 mm este pragul Los Angeles A/B, nu Praga.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1166, Esofagul Barrett — Criteriile Praga C și M (pagini PDF: 295).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1166
   ],
   "pdfPages": [
    295
   ],
   "section": "Esofagul Barrett — Criteriile Praga C și M"
  },
  "learningObjective": "Aplicarea scaderilor 36−33=C3 și 36−29=M7, distinct de gradele Los Angeles și de lungimile brute de inserție.",
  "optionRationales": [
   "Textul calculează explicit :36 cm−33 cm=C3 și :36 cm−29 cm=M7.",
   "C și M sunt inversate.",
   "36 și 29 sunt inserțiile, nu valorile C și M.",
   "Gradul D Los Angeles este al esofagitei erozive, nu al metaplaziei.",
   "5 mm este pragul Los Angeles A/B, nu Praga."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate numerele (36, 33, 29, 3, 7, 5 mm) apar în capitolul esofagian; doar C3 M7 este calculul Praga."
  },
  "textbookExpressions": [
   "Praga C3 şi M7",
   "36cm - 33cm = C3"
  ]
 },
 {
  "id": "gastro-adv-048",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Criteriile Praga și măsurarea metaplaziei columnare:",
  "options": [
   "Joncțiunea esogastrică se localizează la marginea superioară a pliurilor gastrice și la orificiul sfincterian",
   "Se face distincția între joncțiunea esogastrică și hiatusul diafragmatic, pentru a identifica o hernie hiatală",
   "Lungimile se rotunjesc la centimetrul cel mai apropiat; insulele de tesut nu contribuie la măsurarea extensiei",
   "C măsoară extensia maximă, iar M pe cea circumferențială",
   "Hernia hiatală se ignoră, joncțiunea și hiatusul fiind echivalente"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Joncțiunea esogastrică se localizează la marginea superioară a pliurilor gastrice și la orificiul sfincterian — Corect: Cele două repere ale joncțiunii sunt explicite.\n\nSe face distincția între joncțiunea esogastrică și hiatusul diafragmatic, pentru a identifica o hernie hiatală — Corect: Distincția joncțiune–hiatus pentru hernie este cerută.\n\nLungimile se rotunjesc la centimetrul cel mai apropiat; insulele de tesut nu contribuie la măsurarea extensiei — Corect: Rotunjirea la cm și excluderea insulelor sunt notate.\n\nC măsoară extensia maximă, iar M pe cea circumferențială — Incorect: C este circumferențialul, M este maximul.\n\nHernia hiatală se ignoră, joncțiunea și hiatusul fiind echivalente — Incorect: Textul cere tocmai distincția de hiatus, nu echivalența.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1166, Esofagul Barrett — Praga: joncțiune versus hiatus (pagini PDF: 295).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1166
   ],
   "pdfPages": [
    295
   ],
   "section": "Esofagul Barrett — Praga: joncțiune versus hiatus"
  },
  "learningObjective": "Localizarea joncțiunii (pliuri, orificiu sfincterian), distincția de hiatus și regula de rotunjire, fără a inversa C și M.",
  "optionRationales": [
   "Cele două repere ale joncțiunii sunt explicite.",
   "Distincția joncțiune–hiatus pentru hernie este cerută.",
   "Rotunjirea la cm și excluderea insulelor sunt notate.",
   "C este circumferențialul, M este maximul.",
   "Textul cere tocmai distincția de hiatus, nu echivalența."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează C și M și anulează distincția joncțiune–hiatus, două capcane ale aceleiași figuri Praga."
  },
  "textbookExpressions": [
   "joncţiunea gastro-esofagiană",
   "hiatusul diafragmatic"
  ]
 },
 {
  "id": "gastro-adv-049",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Patogenia infecției cu Helicobacter pylori include:",
  "options": [
   "Aderența prin molecule precum BabA, care se leagă de antigenul Lewis de pe celulele mucoasei gastrice, provocând gastrită la subiecții infectați",
   "Ureaza convertește ureea în amoniu și clorură, cu efect citotoxic direct",
   "H. pylori colonizează epiteliul colic, nu pe cel gastric",
   "BabA se leagă de CEACAM6 ileal, ca E. coli din boala Crohn",
   "Ureaza inactivează amoniul, protejând epiteliul"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Aderența prin molecule precum BabA, care se leagă de antigenul Lewis de pe celulele mucoasei gastrice, provocând gastrită la subiecții infectați — Corect: BabA și antigenul Lewis, cu gastrită la infectați, sunt explicite.\n\nUreaza convertește ureea în amoniu și clorură, cu efect citotoxic direct — Corect: Conversia ureei în amoniu și clorură cu efect citotoxic este citată.\n\nH. pylori colonizează epiteliul colic, nu pe cel gastric — Incorect: H. pylori este adaptat mediului gastric și colonizează epiteliul gastric.\n\nBabA se leagă de CEACAM6 ileal, ca E. coli din boala Crohn — Incorect: CEACAM6 este al E. coli ileal din Crohn, nu al BabA.\n\nUreaza inactivează amoniul, protejând epiteliul — Incorect: Ureaza produce amoniu citotoxic, nu îl inactivează.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1173, Helicobacter pylori — BabA, Lewis și urează (pagini PDF: 297).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1173
   ],
   "pdfPages": [
    297
   ],
   "section": "Helicobacter pylori — BabA, Lewis și urează"
  },
  "learningObjective": "Corelarea adeziunii BabA–Lewis și a citotoxicității urează→amoniu, distinct de CEACAM6 al E. coli din Crohn.",
  "optionRationales": [
   "BabA și antigenul Lewis, cu gastrită la infectați, sunt explicite.",
   "Conversia ureei în amoniu și clorură cu efect citotoxic este citată.",
   "H. pylori este adaptat mediului gastric și colonizează epiteliul gastric.",
   "CEACAM6 este al E. coli ileal din Crohn, nu al BabA.",
   "Ureaza produce amoniu citotoxic, nu îl inactivează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută BabA pe CEACAM6-ul Crohn și inversează reacția ureazei, două molecule din același volum de gastro."
  },
  "textbookExpressions": [
   "BabA",
   "antigenul Lewis"
  ]
 },
 {
  "id": "gastro-adv-050",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Gastrita antrală și ulcerul duodenal în infecția cu H. pylori:",
  "options": [
   "Gastrita antrală cronică determină hipergastrinemie prin eliberarea gastrinei din celulele G antrale",
   "Creșterea ulterioară a producției de acid poate duce la ulcerații duodenale",
   "Prevalența H. pylori la pacienții cu ulcer duodenal, în țările dezvoltate, este în scădere, între 50% și 75%",
   "Ulcerele apar cel mai frecvent când tulpina exprimă CagA și VacA, cu sinteză mai pronunțată de IL-8",
   "Gastrita antrală scade gastrina și previne ulcerul duodenal, CagA fiind protector"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Gastrita antrală cronică determină hipergastrinemie prin eliberarea gastrinei din celulele G antrale — Corect: Hipergastrinemia din celulele G este explicită.\n\nCreșterea ulterioară a producției de acid poate duce la ulcerații duodenale — Corect: Creșterea acidului și ulcerațiile duodenale sunt citate.\n\nPrevalența H. pylori la pacienții cu ulcer duodenal, în țările dezvoltate, este în scădere, între 50% și 75% — Corect: Intervalul 50-75% în scădere este din text.\n\nUlcerele apar cel mai frecvent când tulpina exprimă CagA și VacA, cu sinteză mai pronunțată de IL-8 — Corect: CagA, VacA și IL-8 sunt descrise.\n\nGastrita antrală scade gastrina și previne ulcerul duodenal, CagA fiind protector — Incorect: Direcția gastrinei și rolul CagA sunt inverse.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1173, Helicobacter pylori — Gastrită antrală, CagA/VacA și UD 50-75% (pagini PDF: 297).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1173
   ],
   "pdfPages": [
    297
   ],
   "section": "Helicobacter pylori — Gastrită antrală, CagA/VacA și UD 50-75%"
  },
  "learningObjective": "Legarea hipergastrinemiei antrale de UD și a prevalenței 50-75%, plus CagA/VacA/IL-8 ca tulpini ulcerogene.",
  "optionRationales": [
   "Hipergastrinemia din celulele G este explicită.",
   "Creșterea acidului și ulcerațiile duodenale sunt citate.",
   "Intervalul 50-75% în scădere este din text.",
   "CagA, VacA și IL-8 sunt descrise.",
   "Direcția gastrinei și rolul CagA sunt inverse."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează gastrina (hipo versus hiper) și face din CagA un factor protector, pe fondul intervalului 50-75% real."
  },
  "textbookExpressions": [
   "CagA",
   "50% şi 75%"
  ]
 },
 {
  "id": "gastro-adv-051",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Sensibilitatea și specificitatea dozării antigenului fecal H. pylori, cu anticorpi monoclonali, sunt, conform textului:",
  "options": [
   "90% și 83%, ca serologia IgG",
   "90% și 96%, ca testul respirator cu 13C",
   "97,6% și 96%",
   "50% și 50%, inutil după eradicare",
   "sub 70%, de aceea a fost abandonat în favoarea serologiei"
  ],
  "correct": [
   2
  ],
  "explanation": "90% și 83%, ca serologia IgG — Incorect: 90/83 sunt valorile serologiei IgG.\n\n90% și 96%, ca testul respirator cu 13C — Incorect: 90/96 sunt valorile testului 13C.\n\n97,6% și 96% — Corect: Textul indică sensibilitate 97,6% și specificitate 96% pentru antigenul fecal monoclonal.\n\n50% și 50%, inutil după eradicare — Incorect: Antigenul fecal este util și pentru monitorizarea eradicării; 50% este scăderea titrului IgG la 1 an.\n\nsub 70%, de aceea a fost abandonat în favoarea serologiei — Incorect: Textul îl descrie ca depășind testele respiratorii, nu ca abandonat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1174, Helicobacter pylori — Antigenul fecal: performanță (pagini PDF: 298).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1174
   ],
   "pdfPages": [
    298
   ],
   "section": "Helicobacter pylori — Antigenul fecal: performanță"
  },
  "learningObjective": "Diferențierea perechii 97,6%/96% a antigenului fecal de 90%/83% (serologie) și 90%/96% (test respirator).",
  "optionRationales": [
   "90/83 sunt valorile serologiei IgG.",
   "90/96 sunt valorile testului 13C.",
   "Textul indică sensibilitate 97,6% și specificitate 96% pentru antigenul fecal monoclonal.",
   "Antigenul fecal este util și pentru monitorizarea eradicării; 50% este scăderea titrului IgG la 1 an.",
   "Textul îl descrie ca depășind testele respiratorii, nu ca abandonat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate perechile de sensibilitate/specificitate sunt de pe aceeași pagină; candidatul trebuie să le atribuie testului corect."
  },
  "textbookExpressions": [
   "97,6%",
   "specificitatea de 96%"
  ]
 },
 {
  "id": "gastro-adv-052",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Rezistența și terapia de salvare în eradicarea H. pylori:",
  "options": [
   "În țările în curs de dezvoltare rezistența la metronidazol este ridicată, peste 50%, medicamentul fiind frecvent folosit pentru parazitoze",
   "Rezistența la claritromicină s-a dublat în Europa în ultimul deceniu",
   "Chinolonele (ciprofloxacină), furazolidona și rifabutina sunt folosite când regimurile standard au eșuat (terapie de salvare)",
   "Rezistența la amoxicilină și tetraciclină depășește 50% în toate țările dezvoltate",
   "Metronidazolul oral este lipsit de reacții adverse, de aceea este monoterapia de primă linie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În țările în curs de dezvoltare rezistența la metronidazol este ridicată, peste 50%, medicamentul fiind frecvent folosit pentru parazitoze — Corect: Peste 50% rezistență la metronidazol în țările în dezvoltare este explicit.\n\nRezistența la claritromicină s-a dublat în Europa în ultimul deceniu — Corect: Dublarea rezistenței la claritromicină în Europa este citată.\n\nChinolonele (ciprofloxacină), furazolidona și rifabutina sunt folosite când regimurile standard au eșuat (terapie de salvare) — Corect: Ciprofloxacină, furazolidonă și rifabutină ca salvare sunt enumerate.\n\nRezistența la amoxicilină și tetraciclină depășește 50% în toate țările dezvoltate — Incorect: Rezistența la amoxicilină este 1-2% și la tetraciclină sub 1%, exceptând țările fără prescripție.\n\nMetronidazolul oral este lipsit de reacții adverse, de aceea este monoterapia de primă linie — Incorect: Metronidazolul oral are reacții adverse frecvente; niciun antibiotic nu este eficient singur.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1175, Helicobacter pylori — Rezistență și terapie de salvare (pagini PDF: 299).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1175
   ],
   "pdfPages": [
    299
   ],
   "section": "Helicobacter pylori — Rezistență și terapie de salvare"
  },
  "learningObjective": "Cuantificarea rezistenței la metronidazol (>50% în țările în dezvoltare) și a dublării claritromicinei în Europa, plus agenții de salvare.",
  "optionRationales": [
   "Peste 50% rezistență la metronidazol în țările în dezvoltare este explicit.",
   "Dublarea rezistenței la claritromicină în Europa este citată.",
   "Ciprofloxacină, furazolidonă și rifabutină ca salvare sunt enumerate.",
   "Rezistența la amoxicilină este 1-2% și la tetraciclină sub 1%, exceptând țările fără prescripție.",
   "Metronidazolul oral are reacții adverse frecvente; niciun antibiotic nu este eficient singur."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie amoxicilinei/tetraciclinei rata >50% a metronidazolului și transformă metronidazolul în monoterapie."
  },
  "textbookExpressions": [
   ">50%",
   "furazolidona şi rifabutina"
  ]
 },
 {
  "id": "gastro-adv-053",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Exemplele de regimuri de eradicare citate trebuie administrate:",
  "options": [
   "Omeprazol 20 mg + claritromicină 500 mg + amoxicilină 1 g, toate de două ori pe zi, 7 sau 14 zile",
   "Omeprazol 20 mg + metronidazol 400 mg + claritromicină 500 mg, toate de două ori pe zi, 7 sau 14 zile",
   "Omeprazol 20 mg în monoterapie 3 zile, suficient pentru CagA-negativi",
   "Claritromicină 500 mg o dată pe zi, 6 luni, ca în MAI",
   "Amoxicilină 1 g fără IPP, 24 de ore"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Omeprazol 20 mg + claritromicină 500 mg + amoxicilină 1 g, toate de două ori pe zi, 7 sau 14 zile — Corect: Prima triple cu dozele și ritmul bid este explicită.\n\nOmeprazol 20 mg + metronidazol 400 mg + claritromicină 500 mg, toate de două ori pe zi, 7 sau 14 zile — Corect: A doua triple (metronidazol 400 mg) este citată.\n\nOmeprazol 20 mg în monoterapie 3 zile, suficient pentru CagA-negativi — Incorect: Niciun antibiotic nu este eficient singur; IPP-ul este în doză care suprimă puternic acidul.\n\nClaritromicină 500 mg o dată pe zi, 6 luni, ca în MAI — Incorect: 6 luni de macrolid ține de MAI, nu de H. pylori.\n\nAmoxicilină 1 g fără IPP, 24 de ore — Incorect: 24 de ore fără IPP nu este un regim citat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1175, Helicobacter pylori — Regimuri exemplificative 7 sau 14 zile (pagini PDF: 299).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1175
   ],
   "pdfPages": [
    299
   ],
   "section": "Helicobacter pylori — Regimuri exemplificative 7 sau 14 zile"
  },
  "learningObjective": "Reținerea celor două triple (CLA-amox și metro-CLA) cu omeprazol 20 mg bid, 7 sau 14 zile, fără monoterapii.",
  "optionRationales": [
   "Prima triple cu dozele și ritmul bid este explicită.",
   "A doua triple (metronidazol 400 mg) este citată.",
   "Niciun antibiotic nu este eficient singur; IPP-ul este în doză care suprimă puternic acidul.",
   "6 luni de macrolid ține de MAI, nu de H. pylori.",
   "24 de ore fără IPP nu este un regim citat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Importă durate din infecții oportuniste (6 luni, 24 h) peste fereastra 7 sau 14 zile a eradicării."
  },
  "textbookExpressions": [
   "7 sau 14 zile",
   "Amoxicilina 1 g"
  ]
 },
 {
  "id": "gastro-adv-054",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Consecințele pe termen lung ale chirurgiei gastrice includ:",
  "options": [
   "Sindromul dumping: greață și distensie cu transpirații, slăbiciune/lesin și palpitații după gastrectomie parțială cu gastro-jejunoanastomoză, prin evacuare rapidă și influx de lichide spre conținutul jejunal hiperton",
   "Diareea, observată mai ales după vagotomie; episoade severe recurente la circa 1%",
   "Carențe: fier (absorbție redusă), folat (aport deficitar), B12 (deficit de factor intrinsc) și scădere ponderală prin aport redus",
   "Ulcerul recurent impune verificarea H. pylori și excluderea Zollinger-Ellison; un proces malign trebuie exclus",
   "Dumping-ul se datorează vagotomiei proximale fără ocolire, nu evacuării jejunale"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Sindromul dumping: greață și distensie cu transpirații, slăbiciune/lesin și palpitații după gastrectomie parțială cu gastro-jejunoanastomoză, prin evacuare rapidă și influx de lichide spre conținutul jejunal hiperton — Corect: Ansamblul simptomatic și mecanismul de evacuare–influx sunt explicite.\n\nDiareea, observată mai ales după vagotomie; episoade severe recurente la circa 1% — Corect: 1% după vagotomie este citat.\n\nCarențe: fier (absorbție redusă), folat (aport deficitar), B12 (deficit de factor intrinsc) și scădere ponderală prin aport redus — Corect: Cele patru consecințe nutriționale sunt enumerate.\n\nUlcerul recurent impune verificarea H. pylori și excluderea Zollinger-Ellison; un proces malign trebuie exclus — Corect: H. pylori, Zollinger-Ellison și malignitatea în ulcerul recurent sunt cerute.\n\nDumping-ul se datorează vagotomiei proximale fără ocolire, nu evacuării jejunale — Incorect: Dumping-ul este al gastrectomiei parțiale cu gastro-jejunoanastomoză, nu al vagotomiei proximale.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1176, Chirurgia gastrică — Dumping, diaree 1% și carențe (pagini PDF: 300).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1176
   ],
   "pdfPages": [
    300
   ],
   "section": "Chirurgia gastrică — Dumping, diaree 1% și carențe"
  },
  "learningObjective": "Mecanismul dumping-ului (jejun hiperton, hipovolemie), ponderea diareei post-vagotomie (1%) și carențele Fe/folat/B12.",
  "optionRationales": [
   "Ansamblul simptomatic și mecanismul de evacuare–influx sunt explicite.",
   "1% după vagotomie este citat.",
   "Cele patru consecințe nutriționale sunt enumerate.",
   "H. pylori, Zollinger-Ellison și malignitatea în ulcerul recurent sunt cerute.",
   "Dumping-ul este al gastrectomiei parțiale cu gastro-jejunoanastomoză, nu al vagotomiei proximale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută dumping-ul pe vagotomia proximală, opusul textului, pe fondul procentului 1% și al carențelor reale."
  },
  "textbookExpressions": [
   "Sindromul dumping",
   "aproximativ 1%"
  ]
 },
 {
  "id": "gastro-adv-055",
  "topicId": "gastro",
  "type": "CS",
  "stem": "După colectomia profilactică în polipoza adenomatoasă familială, cea mai frecventă cauză de deces este:",
  "options": [
   "Adenocarcinomul din adenoamele duodenale, prezente la o treime dintre pacienți",
   "Limfomul MALT gastric",
   "Megacolonul toxic",
   "Sarcomul Kaposi duodenal",
   "Carcinomul scuamos esofagian din esofagita Los Angeles A"
  ],
  "correct": [
   0
  ],
  "explanation": "Adenocarcinomul din adenoamele duodenale, prezente la o treime dintre pacienți — Corect: Textul precizează adenoame duodenale la o treime, cu evoluție spre adenocarcinom, cea mai frecventă cauză de deces după colectomie profilactică.\n\nLimfomul MALT gastric — Incorect: MALT este legat de H. pylori, nu de PAF.\n\nMegacolonul toxic — Incorect: Megacolonul toxic ține de colita ulcerativă severă.\n\nSarcomul Kaposi duodenal — Incorect: Kaposi este al HIV, nu al PAF.\n\nCarcinomul scuamos esofagian din esofagita Los Angeles A — Incorect: Los Angeles A este esofagită erozivă, nu cauza de deces din PAF.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1198, Tumori duodenale — PAF după colectomie (pagini PDF: 301).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1198
   ],
   "pdfPages": [
    301
   ],
   "section": "Tumori duodenale — PAF după colectomie"
  },
  "learningObjective": "Recunoașterea adenoamelor duodenale (o treime) ca principală cauză de deces după colectomia profilactică din PAF.",
  "optionRationales": [
   "Textul precizează adenoame duodenale la o treime, cu evoluție spre adenocarcinom, cea mai frecventă cauză de deces după colectomie profilactică.",
   "MALT este legat de H. pylori, nu de PAF.",
   "Megacolonul toxic ține de colita ulcerativă severă.",
   "Kaposi este al HIV, nu al PAF.",
   "Los Angeles A este esofagită erozivă, nu cauza de deces din PAF."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează cauze de deces din alte capitole gastro (MALT, megacolon, Kaposi) peste adenoamele duodenale ale PAF."
  },
  "textbookExpressions": [
   "polipoza adenomatoasa familiala",
   "o treime dintre pacienţi"
  ]
 },
 {
  "id": "gastro-adv-056",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Microbiota intestinală, dincolo de disbioza deja descrisă în BII:",
  "options": [
   "Intestinul este colonizat cu de 10 ori mai multe organisme bacteriene decât celule gazdă, cu 300-400 de specii distincte în fiecare intestin",
   "Numărul bacteriilor aderente de mucoasă este crescut la pacienții cu boală Crohn comparativ cu sănătoșii",
   "Pilii de tip 1 ai E. coli aderă la CEACAM6 pe celulele epiteliale ileale în BC",
   "Diversitatea speciilor este crescută în BII, F. prausnitzii fiind dominant în boala activă",
   "MAP a fost confirmat prin PCR, iar trialurile anti-TB au fost eficiente"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Intestinul este colonizat cu de 10 ori mai multe organisme bacteriene decât celule gazdă, cu 300-400 de specii distincte în fiecare intestin — Corect: Raportul 10 ori și 300-400 de specii sunt explicite.\n\nNumărul bacteriilor aderente de mucoasă este crescut la pacienții cu boală Crohn comparativ cu sănătoșii — Corect: Aderența crescută la mucoasă în BC este citată.\n\nPilii de tip 1 ai E. coli aderă la CEACAM6 pe celulele epiteliale ileale în BC — Corect: Pilii de tip 1 și CEACAM6 sunt descriși.\n\nDiversitatea speciilor este crescută în BII, F. prausnitzii fiind dominant în boala activă — Incorect: Constatarea cea mai frecventă este diversitatea redusă; F. prausnitzii este scăzut în boala activă.\n\nMAP a fost confirmat prin PCR, iar trialurile anti-TB au fost eficiente — Incorect: PCR nu a confirmat MAP, iar trialurile anti-TB nu au fost eficiente.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1199, BII — Densitatea microbiotei, CEACAM6 și E. coli (pagini PDF: 302).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1199
   ],
   "pdfPages": [
    302
   ],
   "section": "BII — Densitatea microbiotei, CEACAM6 și E. coli"
  },
  "learningObjective": "Cuantificarea 10× / 300-400 specii, a aderenței crescute în Crohn și a ligaturii pili–CEACAM6, versus disbioza (diversitate redusă) și eșecul pistei MAP.",
  "optionRationales": [
   "Raportul 10 ori și 300-400 de specii sunt explicite.",
   "Aderența crescută la mucoasă în BC este citată.",
   "Pilii de tip 1 și CEACAM6 sunt descriși.",
   "Constatarea cea mai frecventă este diversitatea redusă; F. prausnitzii este scăzut în boala activă.",
   "PCR nu a confirmat MAP, iar trialurile anti-TB nu au fost eficiente."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează diversitatea și reînvie MAP, dar păstrează cifrele 10× și 300-400 ca momeală numerică."
  },
  "textbookExpressions": [
   "300-400 specii",
   "CEACAM6"
  ]
 },
 {
  "id": "gastro-adv-057",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Citokinele pro-inflamatorii din BII, eliberate de celulele T efectoare, stimulează macrofagele să secrete în cantități mari:",
  "options": [
   "TNF-α, IL-1 și IL-6, cu creșterea moleculelor de adeziune endoteliale intestinale și recrutarea leucocitelor",
   "IL-10 și TGF-β ca unici mediatori, fără recrutare leucocitară",
   "Doar interferonul gamma, fără TNF",
   "Gastrina antrală, ca în ulcerul duodenal",
   "Ureaza H. pylori, ca mediator al fistulelor"
  ],
  "correct": [
   0
  ],
  "explanation": "TNF-α, IL-1 și IL-6, cu creșterea moleculelor de adeziune endoteliale intestinale și recrutarea leucocitelor — Corect: Textul enumeră TNF-α, IL-1 și IL-6, apoi moleculele de adeziune și recrutarea.\n\nIL-10 și TGF-β ca unici mediatori, fără recrutare leucocitară — Incorect: IL-10/TGF-β nu sunt triada citată aici.\n\nDoar interferonul gamma, fără TNF — Incorect: TNF este inclus explicit, nu exclus.\n\nGastrina antrală, ca în ulcerul duodenal — Incorect: Gastrina ține de gastrita antrală H. pylori.\n\nUreaza H. pylori, ca mediator al fistulelor — Incorect: Ureaza nu este mediatorul fistulelor din acest paragraf.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1200, BII — TNF-α, IL-1, IL-6 și recrutarea leucocitară (pagini PDF: 303).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1200
   ],
   "pdfPages": [
    303
   ],
   "section": "BII — TNF-α, IL-1, IL-6 și recrutarea leucocitară"
  },
  "learningObjective": "Identificarea triadei TNF-α/IL-1/IL-6 ca braț al cercului vicios de adeziune și recrutare, distinct de citokinele reglatoare.",
  "optionRationales": [
   "Textul enumeră TNF-α, IL-1 și IL-6, apoi moleculele de adeziune și recrutarea.",
   "IL-10/TGF-β nu sunt triada citată aici.",
   "TNF este inclus explicit, nu exclus.",
   "Gastrina ține de gastrita antrală H. pylori.",
   "Ureaza nu este mediatorul fistulelor din acest paragraf."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește triada TNF/IL-1/IL-6 cu mediatori din ulcer sau din reglarea imună, toți plauzibili în gastro."
  },
  "textbookExpressions": [
   "TNF-a",
   "IL-1 şi IL-6"
  ]
 },
 {
  "id": "gastro-adv-058",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Anatomia patologică macroscopică, dincolo de skip lesions și piatra de pavaj:",
  "options": [
   "BC poate fi pancolită/colită totală, uneori fără leziuni macroscopice ale intestinului subțire, și se asociază cu fisuri și fistule perianale",
   "CU: proctită, colită stângă sau colită extensivă; unii au și ileită de reflux",
   "Un semn precoce în BC este ulcerația aftoidă colonoscopică; în CU mucoasa este eritematoasă, friabilă, cu pseudo-polipi în formele severe",
   "În boala colonică fulminantă, de orice tip, mucoasa este distrusă în cea mai mare parte, lăsând insule de mucoasă",
   "În CU intestinul este îngroșat și îngustat transmural, iar aftoidele definesc proctita"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "BC poate fi pancolită/colită totală, uneori fără leziuni macroscopice ale intestinului subțire, și se asociază cu fisuri și fistule perianale — Corect: Pancolita Crohn fără leziuni de intestin subțire și asocierile perianale sunt explicite.\n\nCU: proctită, colită stângă sau colită extensivă; unii au și ileită de reflux — Corect: Cele trei extensii CU și ileita de reflux sunt descrise.\n\nUn semn precoce în BC este ulcerația aftoidă colonoscopică; în CU mucoasa este eritematoasă, friabilă, cu pseudo-polipi în formele severe — Corect: Aftoida precoce și friabilitatea/pseudo-polipii CU sunt citate.\n\nÎn boala colonică fulminantă, de orice tip, mucoasa este distrusă în cea mai mare parte, lăsând insule de mucoasă — Corect: Insulele de mucoasă din fulminant sunt din text.\n\nÎn CU intestinul este îngroșat și îngustat transmural, iar aftoidele definesc proctita — Incorect: Îngroșarea/îngustarea și aftoidele țin de Crohn, nu de CU.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1200, BII — Pancolită Crohn, ileită de reflux, aftoide și fulminant (pagini PDF: 303).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1200
   ],
   "pdfPages": [
    303
   ],
   "section": "BII — Pancolită Crohn, ileită de reflux, aftoide și fulminant"
  },
  "learningObjective": "Recunoașterea pancolitei Crohn fără intestin subțire, a ileitei de reflux, a aftoidei ca semn precoce și a insulelor mucoase din fulminant.",
  "optionRationales": [
   "Pancolita Crohn fără leziuni de intestin subțire și asocierile perianale sunt explicite.",
   "Cele trei extensii CU și ileita de reflux sunt descrise.",
   "Aftoida precoce și friabilitatea/pseudo-polipii CU sunt citate.",
   "Insulele de mucoasă din fulminant sunt din text.",
   "Îngroșarea/îngustarea și aftoidele țin de Crohn, nu de CU."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie CU trăsăturile transmurale/aftoide ale Crohn, pe fondul unor extensii reale (proctită, fulminant)."
  },
  "textbookExpressions": [
   "ileita de reflux",
   "ulceratia aftoida"
  ]
 },
 {
  "id": "gastro-adv-059",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Asocierea HLA cu artropatia din BII, dincolo de HLA-B27 și sacroiliită, include:",
  "options": [
   "HLA DRB7*0703 cu artrita pauciarticulară a articulațiilor mari în CU și BC, și HLA-B44 cu artrita simetrică a articulațiilor mici",
   "HLA-B51, ca în boala Behçet, pentru toate artropatiile BII",
   "HLA-B*5701, ca în hipersensibilitatea la abacavir",
   "Absența oricărei asocieri HLA în afara B27",
   "HLA-DQ2, ca în boala celiacă, pentru tipul 2 poliarticular"
  ],
  "correct": [
   0
  ],
  "explanation": "HLA DRB7*0703 cu artrita pauciarticulară a articulațiilor mari în CU și BC, și HLA-B44 cu artrita simetrică a articulațiilor mici — Corect: Cele două asocieri HLA sunt explicite.\n\nHLA-B51, ca în boala Behçet, pentru toate artropatiile BII — Incorect: HLA-B51 ține de Behçet, nu de acest paragraf.\n\nHLA-B*5701, ca în hipersensibilitatea la abacavir — Incorect: HLA-B*5701 ține de abacavir, nu de BII.\n\nAbsența oricărei asocieri HLA în afara B27 — Incorect: Textul descrie asocieri dincolo de B27.\n\nHLA-DQ2, ca în boala celiacă, pentru tipul 2 poliarticular — Incorect: HLA-DQ2 nu este asocierea citată pentru tipul 2.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1201, BII — HLA DRB7*0703 și HLA-B44 (pagini PDF: 304).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1201
   ],
   "pdfPages": [
    304
   ],
   "section": "BII — HLA DRB7*0703 și HLA-B44"
  },
  "learningObjective": "Diferențierea DRB7*0703 (pauciarticular, articulații mari) de B44 (simetric, articulații mici), distinct de B27-sacroiliită.",
  "optionRationales": [
   "Cele două asocieri HLA sunt explicite.",
   "HLA-B51 ține de Behçet, nu de acest paragraf.",
   "HLA-B*5701 ține de abacavir, nu de BII.",
   "Textul descrie asocieri dincolo de B27.",
   "HLA-DQ2 nu este asocierea citată pentru tipul 2."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează alele HLA reale din alte capitole (B51, B*5701, DQ2) peste perechea DRB7/B44 a artropatiei BII."
  },
  "textbookExpressions": [
   "HLA ORB7*0703",
   "HLA-B44"
  ]
 },
 {
  "id": "gastro-adv-060",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Tabloul clinic al bolii Crohn, dincolo de triada diaree–durere–scădere ponderală:",
  "options": [
   "Deficitul de creștere și întârzierea pubertății pot fi principalele manifestări la copii",
   "Diareea poate fi cauzată de malabsorbția acizilor biliari după rezecție ileală sau boală ileală; steatoreea poate apărea în boala de intestin subțire",
   "Poate debuta ca urgență cu durere acută în fosa iliacă dreaptă, mimând apendicita (diagnostic diferențial: Yersinia, TB); boala anală/perianală este simptomatologia de debut în 25% din cazuri",
   "Fistulele enterice apar la sub 1% dintre pacienți",
   "Simptomele GI lipsesc la 80%, diareea fiind rară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Deficitul de creștere și întârzierea pubertății pot fi principalele manifestări la copii — Corect: Creșterea și pubertatea ca prezentare pediatrică sunt explicite.\n\nDiareea poate fi cauzată de malabsorbția acizilor biliari după rezecție ileală sau boală ileală; steatoreea poate apărea în boala de intestin subțire — Corect: Malabsorbția acizilor biliari și steatoreea sunt citate.\n\nPoate debuta ca urgență cu durere acută în fosa iliacă dreaptă, mimând apendicita (diagnostic diferențial: Yersinia, TB); boala anală/perianală este simptomatologia de debut în 25% din cazuri — Corect: FID ca apendicită, Yersinia/TB și 25% debut perianal sunt din text.\n\nFistulele enterice apar la sub 1% dintre pacienți — Incorect: Fistulele enterice apar în 20-40% din cazuri.\n\nSimptomele GI lipsesc la 80%, diareea fiind rară — Incorect: Simptomele GI lipsesc la 15%; diareea apare în 80%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1202, Boala Crohn — Copil, acizi biliari, fosa iliacă dreaptă și debut perianal 25% (pagini PDF: 305).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1202
   ],
   "pdfPages": [
    305
   ],
   "section": "Boala Crohn — Copil, acizi biliari, fosa iliacă dreaptă și debut perianal 25%"
  },
  "learningObjective": "Integrarea prezentării pediatrice, a diareei prin săruri biliare, a mimic-ului apendicular și a debutului perianal la 25%.",
  "optionRationales": [
   "Creșterea și pubertatea ca prezentare pediatrică sunt explicite.",
   "Malabsorbția acizilor biliari și steatoreea sunt citate.",
   "FID ca apendicită, Yersinia/TB și 25% debut perianal sunt din text.",
   "Fistulele enterice apar în 20-40% din cazuri.",
   "Simptomele GI lipsesc la 15%; diareea apare în 80%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 15%, 25%, 80% și 20-40% între absența simptomelor, debutul perianal, diaree și fistule."
  },
  "textbookExpressions": [
   "25% dintre cazuri",
   "fosa iliaca dreapta"
  ]
 },
 {
  "id": "gastro-adv-061",
  "topicId": "gastro",
  "type": "CM",
  "stem": "În evaluarea și îngrijirea generală a bolii Crohn se recomandă:",
  "options": [
   "Calprotectina fecală și lactoferina ca markeri ieftini, non-invazivi, cu valoare și în predicția răspunsului sau eșecului la tratament",
   "Fier intravenos la intoleranța la fierul oral; profilaxia trombembolismului la toți pacienții internați",
   "Aminosalicilații ca inducție de primă linie, cu dovezi solide",
   "Colonoscopia completă cu pregătire în atacul colonic sever",
   "Continuarea fumatului, care protejează de recădere"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Calprotectina fecală și lactoferina ca markeri ieftini, non-invazivi, cu valoare și în predicția răspunsului sau eșecului la tratament — Corect: Valoarea predictivă a calprotectinei și lactoferinei este explicită.\n\nFier intravenos la intoleranța la fierul oral; profilaxia trombembolismului la toți pacienții internați — Corect: Fierul i.v. și tromboprofilaxia la toți internații sunt citate.\n\nAminosalicilații ca inducție de primă linie, cu dovezi solide — Incorect: Dovezile pentru aminosalicilați în BC sunt foarte puține.\n\nColonoscopia completă cu pregătire în atacul colonic sever — Incorect: În atacurile severe se evită colonoscopia completă.\n\nContinuarea fumatului, care protejează de recădere — Incorect: Fumatul trebuie oprit.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1203, Boala Crohn — Calprotectină, fier i.v. și tromboprofilaxie (pagini PDF: 306).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1203
   ],
   "pdfPages": [
    306
   ],
   "section": "Boala Crohn — Calprotectină, fier i.v. și tromboprofilaxie"
  },
  "learningObjective": "Poziționarea calprotectinei/lactoferinei ca predictori și a fierului i.v. plus tromboprofilaxia la internați, fără a reintroduce aminosalicilații.",
  "optionRationales": [
   "Valoarea predictivă a calprotectinei și lactoferinei este explicită.",
   "Fierul i.v. și tromboprofilaxia la toți internații sunt citate.",
   "Dovezile pentru aminosalicilați în BC sunt foarte puține.",
   "În atacurile severe se evită colonoscopia completă.",
   "Fumatul trebuie oprit."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reintroduce aminosalicilații și fumatul ca „protectoare”, opusul textului, pe fondul calprotectinei reale."
  },
  "textbookExpressions": [
   "lactoferina",
   "fier intravenos"
  ]
 },
 {
  "id": "gastro-adv-062",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Opțiuni adjuvante și molecule în studiu în boala Crohn:",
  "options": [
   "Boala perianală: drenajul chirurgical al colecțiilor septice, ciprofloxacină și metronidazol, azatioprină și anti-TNF",
   "Mongersen (oligonucleotid antisense oral) leagă și degradează ARNm SMAD7, restabilind semnalizarea TGF-β1",
   "Ozanimod, agonist oral al receptorului sfinfolipid-1-fosfat subtipurile 1 și 5, scade limfocitele circulante activate și este în faza 3",
   "IRM de intestin subțire a înlocuit în general pasajul baritat; proliferarea fibro-adipoasă se corelează cu boala cronică",
   "Mongersen este prima linie înaintea steroizilor, iar ozanimodul înlocuiește drenajul perianal"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Boala perianală: drenajul chirurgical al colecțiilor septice, ciprofloxacină și metronidazol, azatioprină și anti-TNF — Corect: Pachetul perianal este în cadranul 32.40.\n\nMongersen (oligonucleotid antisense oral) leagă și degradează ARNm SMAD7, restabilind semnalizarea TGF-β1 — Corect: Mecanismul SMAD7/TGF-β1 este explicit.\n\nOzanimod, agonist oral al receptorului sfinfolipid-1-fosfat subtipurile 1 și 5, scade limfocitele circulante activate și este în faza 3 — Corect: Ozanimodul S1P1/5 în faza 3 este citat.\n\nIRM de intestin subțire a înlocuit în general pasajul baritat; proliferarea fibro-adipoasă se corelează cu boala cronică — Corect: Înlocuirea bariului cu IRM și proliferarea fibro-adipoasă sunt din legendă.\n\nMongersen este prima linie înaintea steroizilor, iar ozanimodul înlocuiește drenajul perianal — Incorect: Mongersen și ozanimodul sunt în studii, nu prima linie și nu înlocuiesc drenajul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1204, Boala Crohn — Perianal, mongersen SMAD7 și ozanimod (pagini PDF: 307).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1204
   ],
   "pdfPages": [
    307
   ],
   "section": "Boala Crohn — Perianal, mongersen SMAD7 și ozanimod"
  },
  "learningObjective": "Poziționarea pachetului perianal (drenaj, cipro-metro, AZA, anti-TNF) și a agenților de fază 3 (mongersen SMAD7, ozanimod S1P), plus IRM-ul care înlocuiește bariul.",
  "optionRationales": [
   "Pachetul perianal este în cadranul 32.40.",
   "Mecanismul SMAD7/TGF-β1 este explicit.",
   "Ozanimodul S1P1/5 în faza 3 este citat.",
   "Înlocuirea bariului cu IRM și proliferarea fibro-adipoasă sunt din legendă.",
   "Mongersen și ozanimodul sunt în studii, nu prima linie și nu înlocuiesc drenajul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Ridică doi agenți de fază 3 la rang de primă linie și le atribuie drenajul perianal, pe fondul mecanismelor reale SMAD7/S1P."
  },
  "textbookExpressions": [
   "mongersen",
   "Ozanimod"
  ]
 },
 {
  "id": "gastro-adv-063",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Unele stricturi de intestin subțire din boala Crohn pot fi tratate prin:",
  "options": [
   "stricturoplastie (dilatare), altele necesitând rezecție și anastomoză",
   "proctocolectomie cu rezervor ileoanal de primă intenție",
   "endarterectomie, ca în stenoza carotidiană",
   "nutriție parenterală totală ca unică măsură, fără chirurgie",
   "colectomie subtotală, chiar dacă rectul este crutat și boala este doar ileală"
  ],
  "correct": [
   0
  ],
  "explanation": "stricturoplastie (dilatare), altele necesitând rezecție și anastomoză — Corect: Textul distinge stricturoplastia de rezecție-anastomoză.\n\nproctocolectomie cu rezervor ileoanal de primă intenție — Incorect: Pacienții cu BC nu se pretează pentru pouch.\n\nendarterectomie, ca în stenoza carotidiană — Incorect: Endarterectomia ține de carotidă, nu de ileon.\n\nnutriție parenterală totală ca unică măsură, fără chirurgie — Incorect: Chirurgia rămâne indicată pentru complicații; NPT nu le înlocuiește.\n\ncolectomie subtotală, chiar dacă rectul este crutat și boala este doar ileală — Incorect: Colectomia vizează boala colonică, nu strictura ileală izolată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1205, Chirurgia bolii Crohn — Stricturoplastie (pagini PDF: 308).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1205
   ],
   "pdfPages": [
    308
   ],
   "section": "Chirurgia bolii Crohn — Stricturoplastie"
  },
  "learningObjective": "Recunoașterea stricturoplastiei ca alternativă la rezecție pentru unele stricturi de intestin subțire, nu a pouch-ului ileal.",
  "optionRationales": [
   "Textul distinge stricturoplastia de rezecție-anastomoză.",
   "Pacienții cu BC nu se pretează pentru pouch.",
   "Endarterectomia ține de carotidă, nu de ileon.",
   "Chirurgia rămâne indicată pentru complicații; NPT nu le înlocuiește.",
   "Colectomia vizează boala colonică, nu strictura ileală izolată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește stricturoplastia cu pouch-ul (contraindicat în BC) sau cu tehnici din alte capitole."
  },
  "textbookExpressions": [
   "stricturoplastie",
   "rezectie şi anastomoza"
  ]
 },
 {
  "id": "gastro-adv-064",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Indicațiile chirurgiei în boala Crohn includ:",
  "options": [
   "Eșecul terapiei medicamentoase, cu simptome care alterează sănătatea",
   "Complicații: dilatare toxică, obstrucție, perforație, abcese, fistulă enterocutanată",
   "Retard de creștere la copii în ciuda tratamentului medicamentos; colecții septice perianale (consult sub anestezie, drenaj, tub de dren)",
   "Pouch-ul ileal ca procedeu de elecție, recurența la acest nivel fiind rară",
   "Menținerea fumatului postoperator, care reduce recăderea"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Eșecul terapiei medicamentoase, cu simptome care alterează sănătatea — Corect: Eșecul medicamentos este prima indicație.\n\nComplicații: dilatare toxică, obstrucție, perforație, abcese, fistulă enterocutanată — Corect: Lista de complicații este explicită.\n\nRetard de creștere la copii în ciuda tratamentului medicamentos; colecții septice perianale (consult sub anestezie, drenaj, tub de dren) — Corect: Retardul de creștere și protocolul perianal sunt citate.\n\nPouch-ul ileal ca procedeu de elecție, recurența la acest nivel fiind rară — Incorect: BC nu se pretează pentru pouch.\n\nMenținerea fumatului postoperator, care reduce recăderea — Incorect: Toți pacienții trebuie să renunțe la fumat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1205, Chirurgia bolii Crohn — Indicații și perianal (pagini PDF: 308).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1205
   ],
   "pdfPages": [
    308
   ],
   "section": "Chirurgia bolii Crohn — Indicații și perianal"
  },
  "learningObjective": "Enumerarea eșecului medical, a complicațiilor și a retardului/perianalului (EUA, drenaj, seton), fără pouch și fără fumat.",
  "optionRationales": [
   "Eșecul medicamentos este prima indicație.",
   "Lista de complicații este explicită.",
   "Retardul de creștere și protocolul perianal sunt citate.",
   "BC nu se pretează pentru pouch.",
   "Toți pacienții trebuie să renunțe la fumat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Face din pouch indicație (opusul textului) și din fumat o măsură de menținere."
  },
  "textbookExpressions": [
   "fistula enterocutanata",
   "tub de dren"
  ]
 },
 {
  "id": "gastro-adv-065",
  "topicId": "gastro",
  "type": "CM",
  "stem": "În atacul sever de colită ulcerativă, imagistica și endoscopia:",
  "options": [
   "Radiografia abdominală pe gol este esențială pentru a exclude dilatarea colonică",
   "Colonoscopia completă trebuie evitată pentru a preveni perforația; se folosește sigmoidoscopie flexibilă fără pregătire, pentru confirmare",
   "Extinderea bolii este apreciată corect doar pe radiografia pe gol, endoscopia fiind superfluă",
   "Capsulele endoscopice sunt de primă intenție, chiar cu stricturi",
   "Ecografia nu poate evidenția inflamația peretelui colonic"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Radiografia abdominală pe gol este esențială pentru a exclude dilatarea colonică — Corect: AXR esențială pentru dilatare este explicită.\n\nColonoscopia completă trebuie evitată pentru a preveni perforația; se folosește sigmoidoscopie flexibilă fără pregătire, pentru confirmare — Corect: Evitarea colonoscopiei complete și sigmoidoscopia fără pregătire sunt citate.\n\nExtinderea bolii este apreciată corect doar pe radiografia pe gol, endoscopia fiind superfluă — Incorect: Extinderea nu este apreciată corect pe radiografia pe gol; endoscopia este preferată.\n\nCapsulele endoscopice sunt de primă intenție, chiar cu stricturi — Incorect: Stricturile contraindică capsula; nu este prima intenție în CU severă.\n\nEcografia nu poate evidenția inflamația peretelui colonic — Incorect: Textul menționează că inflamația peretelui colonic este evidențiată prin ecografie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1206, Colita ulcerativă severă — AXR și sigmoidoscopie fără pregătire (pagini PDF: 309).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1206
   ],
   "pdfPages": [
    309
   ],
   "section": "Colita ulcerativă severă — AXR și sigmoidoscopie fără pregătire"
  },
  "learningObjective": "Ierarhizarea AXR (exclude dilatarea) și a sigmoidoscopiei flexibile fără pregătire, evitând colonoscopia completă.",
  "optionRationales": [
   "AXR esențială pentru dilatare este explicită.",
   "Evitarea colonoscopiei complete și sigmoidoscopia fără pregătire sunt citate.",
   "Extinderea nu este apreciată corect pe radiografia pe gol; endoscopia este preferată.",
   "Stricturile contraindică capsula; nu este prima intenție în CU severă.",
   "Textul menționează că inflamația peretelui colonic este evidențiată prin ecografie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează rolul AXR (extindere versus dilatare) și reintroduce capsula/colonoscopia completă în atacul sever."
  },
  "textbookExpressions": [
   "sigmoidoscopie flexibila",
   "radiografie abdominala pe gol"
  ]
 },
 {
  "id": "gastro-adv-066",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Aminosalicilații în colita ulcerativă ușoară-moderată:",
  "options": [
   "Pilonul principal este un aminosalicilat cu acțiune topică în lumenul colonic; gruparea activă este 5-ASA, absorbită în intestinul subțire",
   "Eliberarea colonică se face prin legătură azo la sulfapiridină (sulfasalazină), 4-aminobenzoil-β-alanină (balsalazidă) sau 5-ASA (olsalazină), acoperire pH-sensibilă sau microsfere",
   "Modul de acțiune implică probabil PPAR-γ; sunt chemopreventivi pentru cancerul colorectal asociat CU; 5-ASA poate provoca rar boli renale",
   "În proctită, supozitoarele 5-ASA sunt prima linie; steroizii topici sunt mai puțin eficienți decât 5-ASA",
   "5-ASA se absoarbe în colon și este inactiv în lumen, de aceea proctita se tratează doar cu infliximab de la debut"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Pilonul principal este un aminosalicilat cu acțiune topică în lumenul colonic; gruparea activă este 5-ASA, absorbită în intestinul subțire — Corect: Acțiunea topică și absorbția 5-ASA în intestinul subțire sunt explicite.\n\nEliberarea colonică se face prin legătură azo la sulfapiridină (sulfasalazină), 4-aminobenzoil-β-alanină (balsalazidă) sau 5-ASA (olsalazină), acoperire pH-sensibilă sau microsfere — Corect: Cele trei legături azo și celelalte formulări sunt enumerate.\n\nModul de acțiune implică probabil PPAR-γ; sunt chemopreventivi pentru cancerul colorectal asociat CU; 5-ASA poate provoca rar boli renale — Corect: PPAR-γ, chemoprevenția și nefrotoxicitatea rară sunt citate.\n\nÎn proctită, supozitoarele 5-ASA sunt prima linie; steroizii topici sunt mai puțin eficienți decât 5-ASA — Corect: Supozitoarele ca primă linie și inferioritatea steroizilor topici sunt din text.\n\n5-ASA se absoarbe în colon și este inactiv în lumen, de aceea proctita se tratează doar cu infliximab de la debut — Incorect: 5-ASA trebuie eliberat în colon; infliximabul nu este prima linie a proctitei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1206, Colita ulcerativă — 5-ASA, PPAR-γ și proctită (pagini PDF: 309).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1206
   ],
   "pdfPages": [
    309
   ],
   "section": "Colita ulcerativă — 5-ASA, PPAR-γ și proctită"
  },
  "learningObjective": "Mecanismul de eliberare azo/pH/microsfere, PPAR-γ, chemoprevenția și supozitoarele ca primă linie în proctită.",
  "optionRationales": [
   "Acțiunea topică și absorbția 5-ASA în intestinul subțire sunt explicite.",
   "Cele trei legături azo și celelalte formulări sunt enumerate.",
   "PPAR-γ, chemoprevenția și nefrotoxicitatea rară sunt citate.",
   "Supozitoarele ca primă linie și inferioritatea steroizilor topici sunt din text.",
   "5-ASA trebuie eliberat în colon; infliximabul nu este prima linie a proctitei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Declară 5-ASA inactiv în lumen și sare direct la infliximab, opusul pilonului topic și al supozitoarelor."
  },
  "textbookExpressions": [
   "balsalazida",
   "PPAR"
  ]
 },
 {
  "id": "gastro-adv-067",
  "topicId": "gastro",
  "type": "CS",
  "stem": "După răspunsul la hidrocortizonul intravenos în colita ulcerativă severă, corticoterapia se schimbă pe cale orală după aproximativ:",
  "options": [
   "24 de ore, cu oprire bruscă",
   "5 zile, apoi se reduce treptat până la oprire în 8-10 săptămâni",
   "3 luni de i.v. continuu, fără oral",
   "12 luni, ca platoul de recuperare după AVC",
   "7 zile de eradicare H. pylori, fără tapering"
  ],
  "correct": [
   1
  ],
  "explanation": "24 de ore, cu oprire bruscă — Incorect: 24 de ore este prea scurt față de text.\n\n5 zile, apoi se reduce treptat până la oprire în 8-10 săptămâni — Corect: Textul indică schimbarea după aproximativ 5 zile, cu reducere treptată în 8-10 săptămâni.\n\n3 luni de i.v. continuu, fără oral — Incorect: 3 luni i.v. nu este schema.\n\n12 luni, ca platoul de recuperare după AVC — Incorect: 12 luni este platoul AVC, nu tapering-ul steroizilor.\n\n7 zile de eradicare H. pylori, fără tapering — Incorect: 7 zile ține de eradicarea H. pylori.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1207, Colita ulcerativă severă — Trecerea pe oral și tapering 8-10 săptămâni (pagini PDF: 310).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1207
   ],
   "pdfPages": [
    310
   ],
   "section": "Colita ulcerativă severă — Trecerea pe oral și tapering 8-10 săptămâni"
  },
  "learningObjective": "Reținerea ferestrei de circa 5 zile până la oral și a reducerii în 8-10 săptămâni, distinct de pragul de 3 zile al salvării.",
  "optionRationales": [
   "24 de ore este prea scurt față de text.",
   "Textul indică schimbarea după aproximativ 5 zile, cu reducere treptată în 8-10 săptămâni.",
   "3 luni i.v. nu este schema.",
   "12 luni este platoul AVC, nu tapering-ul steroizilor.",
   "7 zile ține de eradicarea H. pylori."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 5 zile și 8-10 săptămâni cu intervale reale din AVC, H. pylori și ziua 3 a salvării."
  },
  "textbookExpressions": [
   "aproximativ 5 zile",
   "8-10 săptămâni"
  ]
 },
 {
  "id": "gastro-adv-068",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Terapia de salvare în colita ulcerativă severă (după 3 zile de hidrocortizon i.v.):",
  "options": [
   "Este necesară la CRP peste 45 mg/L sau peste 8 scaune/zi; continuarea monoterapiei corticosteroide întârzie colectomia și crește mortalitatea",
   "Opțiuni cu beneficiu dovedit: ciclosporină 2 mg/kg pe zi i.v. în perfuzie continuă sau infliximab; albumina scăzută se asociază cu rată de răspuns mai mică",
   "Corticoterapia se întrerupe rapid odată ce salvarea a început; toți internații pentru colită severă încep întreținere pe termen lung cu tiopurină",
   "Salvarea se face cu budesonid oral, infliximabul fiind contraindicat la albumina scăzută",
   "Tiopurinele se evită după internarea pentru colită severă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este necesară la CRP peste 45 mg/L sau peste 8 scaune/zi; continuarea monoterapiei corticosteroide întârzie colectomia și crește mortalitatea — Corect: Pragurile și pericolul continuării steroizilor singuri sunt explicite.\n\nOpțiuni cu beneficiu dovedit: ciclosporină 2 mg/kg pe zi i.v. în perfuzie continuă sau infliximab; albumina scăzută se asociază cu rată de răspuns mai mică — Corect: Ciclosporina 2 mg/kg, infliximabul și albumina scăzută sunt citate.\n\nCorticoterapia se întrerupe rapid odată ce salvarea a început; toți internații pentru colită severă încep întreținere pe termen lung cu tiopurină — Corect: Oprirea rapidă a steroizilor și tiopurina la toți internații sunt din text.\n\nSalvarea se face cu budesonid oral, infliximabul fiind contraindicat la albumina scăzută — Incorect: Budesonidul nu este terapia de salvare a atacului sever.\n\nTiopurinele se evită după internarea pentru colită severă — Incorect: Textul cere tiopurină de întreținere după internarea pentru colită severă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1207, Colita ulcerativă severă — Ciclosporină 2 mg/kg, infliximab și tiopurină (pagini PDF: 310).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1207
   ],
   "pdfPages": [
    310
   ],
   "section": "Colita ulcerativă severă — Ciclosporină 2 mg/kg, infliximab și tiopurină"
  },
  "learningObjective": "Aplicarea pragurilor CRP>45 / >8 scaune, a ciclosporinei 2 mg/kg sau infliximab, a opririi steroizilor și a tiopurinei de întreținere.",
  "optionRationales": [
   "Pragurile și pericolul continuării steroizilor singuri sunt explicite.",
   "Ciclosporina 2 mg/kg, infliximabul și albumina scăzută sunt citate.",
   "Oprirea rapidă a steroizilor și tiopurina la toți internații sunt din text.",
   "Budesonidul nu este terapia de salvare a atacului sever.",
   "Textul cere tiopurină de întreținere după internarea pentru colită severă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește ciclosporina/infliximab cu budesonid și interzice tiopurina, opusul paragrafului de salvare."
  },
  "textbookExpressions": [
   "2 mg/kg pe zi",
   "45 mg/L"
  ]
 },
 {
  "id": "gastro-adv-069",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Alicaforsen, inhibitor al moleculei de adeziune intracelulară-1, și-a demonstrat eficacitatea în studii clinice în:",
  "options": [
   "Colita ulcerativă distală și inflamația rezervorului ileal (pouchită)",
   "Inducția de primă linie a bolii Crohn ileale, înaintea budesonidului",
   "Eradicarea H. pylori, în locul bismutului",
   "Spasticitatea după AVC, ca baclofenul",
   "Meningita criptococică, ca flucitozina"
  ],
  "correct": [
   0
  ],
  "explanation": "Colita ulcerativă distală și inflamația rezervorului ileal (pouchită) — Corect: Textul indică eficacitate în CU distală și pouchită.\n\nInducția de primă linie a bolii Crohn ileale, înaintea budesonidului — Incorect: Budesonidul rămâne opțiunea ileocecală ușoară-moderată a Crohn, nu alicaforsenul.\n\nEradicarea H. pylori, în locul bismutului — Incorect: Eradicarea H. pylori nu este indicația citată.\n\nSpasticitatea după AVC, ca baclofenul — Incorect: Baclofenul ține de spasticitatea post-AVC.\n\nMeningita criptococică, ca flucitozina — Incorect: Flucitozina ține de criptococoză.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1207, Colita ulcerativă — Alicaforsen (ICAM-1) și pouchită (pagini PDF: 310).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1207
   ],
   "pdfPages": [
    310
   ],
   "section": "Colita ulcerativă — Alicaforsen (ICAM-1) și pouchită"
  },
  "learningObjective": "Poziționarea alicaforsenului în CU distală și pouchită, nu în Crohn, H. pylori sau patologii extra-digestive.",
  "optionRationales": [
   "Textul indică eficacitate în CU distală și pouchită.",
   "Budesonidul rămâne opțiunea ileocecală ușoară-moderată a Crohn, nu alicaforsenul.",
   "Eradicarea H. pylori nu este indicația citată.",
   "Baclofenul ține de spasticitatea post-AVC.",
   "Flucitozina ține de criptococoză."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează indicații reale din Crohn, H. pylori, neurologie și HIV peste alicaforsenul pentru CU distală/pouchită."
  },
  "textbookExpressions": [
   "Alicaforsen",
   "pouchitis"
  ]
 },
 {
  "id": "gastro-adv-070",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Colita colagenoasă microscopică se caracterizează histologic prin:",
  "options": [
   "Un strat de colagen subepitelial îngroșat, peste 10 µm, adiacent membranei bazale, cu infiltrat în lamina propria și celule epiteliale de suprafață deteriorate",
   "Infiltrat limfocitar intraepitelial fără îngroșare de colagen, care definește forma limfocitară, nu pe cea colagenoasă",
   "Granuloame non-cazeificante, ca în Crohn",
   "Abcese criptice dense cu depleție de caliciforme, ca în CU severă",
   "Un strat de colagen sub 2 µm, patognomonic pentru colita ischemică"
  ],
  "correct": [
   0
  ],
  "explanation": "Un strat de colagen subepitelial îngroșat, peste 10 µm, adiacent membranei bazale, cu infiltrat în lamina propria și celule epiteliale de suprafață deteriorate — Corect: Pragul >10 µm și infiltratele asociate sunt explicite.\n\nInfiltrat limfocitar intraepitelial fără îngroșare de colagen, care definește forma limfocitară, nu pe cea colagenoasă — Incorect: Absența îngroșării de colagen definește forma limfocitară.\n\nGranuloame non-cazeificante, ca în Crohn — Incorect: Granuloamele țin de Crohn.\n\nAbcese criptice dense cu depleție de caliciforme, ca în CU severă — Incorect: Abcesele criptice țin de CU.\n\nUn strat de colagen sub 2 µm, patognomonic pentru colita ischemică — Incorect: Pragul citat este peste 10 µm, nu sub 2 µm.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1208, Colita microscopică — Pragul de 10 µm al formei colagenoase (pagini PDF: 311).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1208
   ],
   "pdfPages": [
    311
   ],
   "section": "Colita microscopică — Pragul de 10 µm al formei colagenoase"
  },
  "learningObjective": "Reținerea pragului >10 µm ca definiție a formei colagenoase, distinct de forma limfocitară și de histologia Crohn/CU.",
  "optionRationales": [
   "Pragul >10 µm și infiltratele asociate sunt explicite.",
   "Absența îngroșării de colagen definește forma limfocitară.",
   "Granuloamele țin de Crohn.",
   "Abcesele criptice țin de CU.",
   "Pragul citat este peste 10 µm, nu sub 2 µm."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie pragul de 10 µm formei limfocitare sau îl înlocuiește cu histologii Crohn/CU."
  },
  "textbookExpressions": [
   ">10 µm",
   "Colita co/agenosa"
  ]
 },
 {
  "id": "gastro-adv-071",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Un număr mic de pacienți cu colită microscopică limfocitară sau colagenoasă au concomitent malabsorbție de acizi biliari. În acest caz, textul atribuie un prognostic favorabil administrării de:",
  "options": [
   "colestiramină",
   "co-trimoxazol",
   "ciclosporină 2 mg/kg",
   "trombectomie",
   "rifampicină"
  ],
  "correct": [
   0
  ],
  "explanation": "colestiramină — Corect: Textul precizează prognostic favorabil cu colestiramină.\n\nco-trimoxazol — Incorect: Co-trimoxazolul ține de PCP, nu de colita microscopică.\n\nciclosporină 2 mg/kg — Incorect: Ciclosporina 2 mg/kg este salvarea colitei ulcerative severe.\n\ntrombectomie — Incorect: Trombectomia ține de AVC.\n\nrifampicină — Incorect: Rifampicina ține de TBC/HIV.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1208, Colita microscopică — Colestiramină în malabsorbția biliară (pagini PDF: 311).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1208
   ],
   "pdfPages": [
    311
   ],
   "section": "Colita microscopică — Colestiramină în malabsorbția biliară"
  },
  "learningObjective": "Recunoașterea colestiraminei ca măsură cu prognostic favorabil când colita microscopică se asociază cu malabsorbție de acizi biliari.",
  "optionRationales": [
   "Textul precizează prognostic favorabil cu colestiramină.",
   "Co-trimoxazolul ține de PCP, nu de colita microscopică.",
   "Ciclosporina 2 mg/kg este salvarea colitei ulcerative severe.",
   "Trombectomia ține de AVC.",
   "Rifampicina ține de TBC/HIV."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează patru terapii reale din alte capitole peste colestiramina indicată aici."
  },
  "textbookExpressions": [
   "colestiramină",
   "malabsorbtie de acizi biliari"
  ]
 },
 {
  "id": "gastro-adv-072",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Colita colagenoasă microscopică, epidemiologic și terapeutic:",
  "options": [
   "Predomină la femeile de vârstă mijlocie sau vârstnice și se asociază cu afecțiuni autoimune (artrită, boală tiroidiană, sclerodermie cutanată limitată, ciroză biliară primară)",
   "Incidența formelor limfocitară și colagenoasă este crescută la pacienții cu boală celiacă, diagnostic care trebuie exclus",
   "Tratamentul este de obicei cu budesonidă; există dovezi și pentru aminosalicilați, bismut, iar în forme refractare prednisolon și azatioprină",
   "Predomină la bărbații tineri, iar boala celiacă este protectivă",
   "Budesonida este inutilă; singura opțiune este colectomia de urgență"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Predomină la femeile de vârstă mijlocie sau vârstnice și se asociază cu afecțiuni autoimune (artrită, boală tiroidiană, sclerodermie cutanată limitată, ciroză biliară primară) — Corect: Predominanța feminină și lista autoimună sunt explicite.\n\nIncidența formelor limfocitară și colagenoasă este crescută la pacienții cu boală celiacă, diagnostic care trebuie exclus — Corect: Asocierea cu boala celiacă și necesitatea excluderii sunt citate.\n\nTratamentul este de obicei cu budesonidă; există dovezi și pentru aminosalicilați, bismut, iar în forme refractare prednisolon și azatioprină — Corect: Budesonida, aminosalicilații, bismutul și treapta prednisolon/azatioprină sunt din text.\n\nPredomină la bărbații tineri, iar boala celiacă este protectivă — Incorect: Textul indică femei, nu bărbați tineri; celiacă crește incidența.\n\nBudesonida este inutilă; singura opțiune este colectomia de urgență — Incorect: Budesonida este tratamentul obișnuit; colectomia de urgență ține de megacolonul toxic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1208, Colita microscopică — Femei, autoimunitate, celiac și budesonid (pagini PDF: 311).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1208
   ],
   "pdfPages": [
    311
   ],
   "section": "Colita microscopică — Femei, autoimunitate, celiac și budesonid"
  },
  "learningObjective": "Profilul femeii de vârstă mijlocie/vârstnice cu autoimunitate, asocierea celiacă și ierarhia budesonid–5-ASA–bismut–azatioprină.",
  "optionRationales": [
   "Predominanța feminină și lista autoimună sunt explicite.",
   "Asocierea cu boala celiacă și necesitatea excluderii sunt citate.",
   "Budesonida, aminosalicilații, bismutul și treapta prednisolon/azatioprină sunt din text.",
   "Textul indică femei, nu bărbați tineri; celiacă crește incidența.",
   "Budesonida este tratamentul obișnuit; colectomia de urgență ține de megacolonul toxic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sexul/vârsta și asocierea celiacă și înlocuiește budesonida cu colectomia de urgență."
  },
  "textbookExpressions": [
   "sclerodermia cutanată limitată",
   "budesonida"
  ]
 },
 {
  "id": "gastro-adv-073",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Afecțiunile gingivale din Cadranul 32.9 includ:",
  "options": [
   "Gingivita acută ulcerativă necrotizantă (angina Vincent) prin spirochete și bacterii fusiforme, tratată cu metronidazol oral 200 mg de 3 ori pe zi",
   "Hiperplazia fibroasă gingivală indusă de fenitoin, ciclosporină sau nifedipină",
   "Gingivita cronică prin placă bacteriană, tratată prin îndepărtarea plăcii",
   "Angina Vincent se tratează cu IPP, spirochetele fiind absente",
   "Hiperplazia gingivală este produsă de H. pylori, fără legătură cu fenitoinul"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Gingivita acută ulcerativă necrotizantă (angina Vincent) prin spirochete și bacterii fusiforme, tratată cu metronidazol oral 200 mg de 3 ori pe zi — Corect: Spirochete și fusiforme; metronidazol 200 mg de 3 ori pe zi.\n\nHiperplazia fibroasă gingivală indusă de fenitoin, ciclosporină sau nifedipină — Corect: Fenitoin, ciclosporină și nifedipină sunt listate.\n\nGingivita cronică prin placă bacteriană, tratată prin îndepărtarea plăcii — Corect: Placa bacteriană se îndepărtează.\n\nAngina Vincent se tratează cu IPP, spirochetele fiind absente — Incorect: IPP nu tratează Vincent; spirochetele sunt cauza.\n\nHiperplazia gingivală este produsă de H. pylori, fără legătură cu fenitoinul — Incorect: H. pylori nu cauzează hiperplazia gingivală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1162, Cavitatea orală — Angina Vincent și hiperplazia medicamentoasă (pagini PDF: 291).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1162
   ],
   "pdfPages": [
    291
   ],
   "section": "Cavitatea orală — Angina Vincent și hiperplazia medicamentoasă"
  },
  "learningObjective": "Cuplarea metronidazolului 200 mg ×3 în angina Vincent cu trio-ul fenitoin/ciclosporină/nifedipină.",
  "optionRationales": [
   "Spirochete și fusiforme; metronidazol 200 mg de 3 ori pe zi.",
   "Fenitoin, ciclosporină și nifedipină sunt listate.",
   "Placa bacteriană se îndepărtează.",
   "IPP nu tratează Vincent; spirochetele sunt cauza.",
   "H. pylori nu cauzează hiperplazia gingivală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută metronidazolul 200 mg spre IPP și atribuie hiperplazia lui H. pylori."
  },
  "textbookExpressions": [
   "200 mg de 3 ori pe",
   "fenitoin, ciclosporină"
  ]
 },
 {
  "id": "gastro-adv-074",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Hernia hiatală prin alunecare, conform Cadranului 32.12, este prezentă la:",
  "options": [
   "30% dintre persoanele cu vârsta peste 50 de ani; nu produce simptome — simptomele țin de reflux",
   "70% dintre tineri, cu SEI incompetent deasupra diafragmului ca regulă",
   "5% peste 80 de ani, identică herniei paraesofagiene",
   "Toți pacienții cu Barrett, independent de vârstă",
   "0% peste 50 de ani, alunecarea fiind imposibilă"
  ],
  "correct": [
   0
  ],
  "explanation": "30% dintre persoanele cu vârsta peste 50 de ani; nu produce simptome — simptomele țin de reflux — Corect: Cadranul: 30% peste 50 de ani; simptomele sunt de reflux.\n\n70% dintre tineri, cu SEI incompetent deasupra diafragmului ca regulă — Incorect: 70% este hernia din esofagita erozivă, nu prevalența la tineri.\n\n5% peste 80 de ani, identică herniei paraesofagiene — Incorect: Paraesofagiana are SEI competent sub diafragm.\n\nToți pacienții cu Barrett, independent de vârstă — Incorect: Barrett asociază HH în 95% în figură, nu „toți”.\n\n0% peste 50 de ani, alunecarea fiind imposibilă — Incorect: Textul afirmă 30% peste 50 de ani.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1163, Hernia hiatală — Alunecare 30% peste 50 de ani (pagini PDF: 292).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1163
   ],
   "pdfPages": [
    292
   ],
   "section": "Hernia hiatală — Alunecare 30% peste 50 de ani"
  },
  "learningObjective": "Ponderea 30% peste 50 de ani a herniei prin alunecare, asimptomatică în sine.",
  "optionRationales": [
   "Cadranul: 30% peste 50 de ani; simptomele sunt de reflux.",
   "70% este hernia din esofagita erozivă, nu prevalența la tineri.",
   "Paraesofagiana are SEI competent sub diafragm.",
   "Barrett asociază HH în 95% în figură, nu „toți”.",
   "Textul afirmă 30% peste 50 de ani."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 30% (alunecare >50) cu 70% (eroziv) și 95% (Barrett)."
  },
  "textbookExpressions": [
   "30% dintre persoanele",
   "peste 50 de ani"
  ]
 },
 {
  "id": "gastro-adv-075",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Monitorizarea pH și tratamentul OTC al BAGE:",
  "options": [
   "Un scor DeMeester mai mare de 14,72 indică reflux; trebuie corelație între pH <4,0 și simptome",
   "Capsula Bravo wireless se atașează esofagului inferior, se detașează spontan și se elimină prin scaun",
   "Preparatele cu alginat 10 ml de trei ori pe zi formează un gel sau plută de spumă cu conținutul gastric",
   "DeMeester sub 2 exclude simptomele, pH <4 fiind irelevant",
   "Alginatul 10 ml ×3 înlocuiește IPP-ul în esofagitele erozive"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Un scor DeMeester mai mare de 14,72 indică reflux; trebuie corelație între pH <4,0 și simptome — Corect: DeMeester >14,72 și corelația pH<4–simptome.\n\nCapsula Bravo wireless se atașează esofagului inferior, se detașează spontan și se elimină prin scaun — Corect: Bravo se detașează și se elimină în scaun.\n\nPreparatele cu alginat 10 ml de trei ori pe zi formează un gel sau plută de spumă cu conținutul gastric — Corect: Alginat 10 ml ×3, plută de spumă.\n\nDeMeester sub 2 exclude simptomele, pH <4 fiind irelevant — Incorect: Pragul este 14,72, nu 2.\n\nAlginatul 10 ml ×3 înlocuiește IPP-ul în esofagitele erozive — Incorect: IPP rămân elecția în afara formelor ușoare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1163, BAGE — DeMeester >14,72, Bravo și alginat 10 ml ×3 (pagini PDF: 292).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1163
   ],
   "pdfPages": [
    292
   ],
   "section": "BAGE — DeMeester >14,72, Bravo și alginat 10 ml ×3"
  },
  "learningObjective": "Pragul 14,72, corelația pH<4 și schema alginat 10 ml ×3.",
  "optionRationales": [
   "DeMeester >14,72 și corelația pH<4–simptome.",
   "Bravo se detașează și se elimină în scaun.",
   "Alginat 10 ml ×3, plută de spumă.",
   "Pragul este 14,72, nu 2.",
   "IPP rămân elecția în afara formelor ușoare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Coboară DeMeester la 2 și face alginatul substitut al IPP în eroziv."
  },
  "textbookExpressions": [
   "14,72",
   "10 ml de trei ori pe zi"
  ]
 },
 {
  "id": "gastro-adv-076",
  "topicId": "gastro",
  "type": "CM",
  "stem": "IPP în BAGE, dincolo de alegerea de clasă:",
  "options": [
   "IPP reduc secreția acidă gastrică cu până la 90%",
   "Aproximativ 60% dintre pacienți devin asimptomatici după 4 săptămâni de IPP o dată pe zi",
   "Pacienții sub 45 de ani, fără semne de alarmă (în special disfagie), pot fi tratați fără investigații de primă intenție",
   "Răspunsul la 4 săptămâni este nul, acidul scăzând cu sub 10%",
   "Endoscopia este primul pas la toți tinerii fără alarmă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "IPP reduc secreția acidă gastrică cu până la 90% — Corect: Până la 90% reducere a secreției.\n\nAproximativ 60% dintre pacienți devin asimptomatici după 4 săptămâni de IPP o dată pe zi — Corect: Aproximativ 60% asimptomatici la 4 săptămâni.\n\nPacienții sub 45 de ani, fără semne de alarmă (în special disfagie), pot fi tratați fără investigații de primă intenție — Corect: Sub 45 ani fără alarmă: tratament fără investigații de primă intenție.\n\nRăspunsul la 4 săptămâni este nul, acidul scăzând cu sub 10% — Incorect: Textul citează 90% și 60%/4 săptămâni.\n\nEndoscopia este primul pas la toți tinerii fără alarmă — Incorect: Investigațiile nu sunt primul pas la tinerii fără alarmă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1163, BAGE — IPP −90% acid, 60% la 4 săptămâni, tineri fără alarmă (pagini PDF: 292).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1163
   ],
   "pdfPages": [
    292
   ],
   "section": "BAGE — IPP −90% acid, 60% la 4 săptămâni, tineri fără alarmă"
  },
  "learningObjective": "Reducerea de 90% a acidului, rata 60%/4 săptămâni și pragul de 45 de ani fără alarmă.",
  "optionRationales": [
   "Până la 90% reducere a secreției.",
   "Aproximativ 60% asimptomatici la 4 săptămâni.",
   "Sub 45 ani fără alarmă: tratament fără investigații de primă intenție.",
   "Textul citează 90% și 60%/4 săptămâni.",
   "Investigațiile nu sunt primul pas la tinerii fără alarmă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează 90%/60% și impune endoscopia la tinerii fără alarmă."
  },
  "textbookExpressions": [
   "până la 90%",
   "60% dintre aceştia"
  ]
 },
 {
  "id": "gastro-adv-077",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Boala de reflux laringofaringian și hernia paraesofagiană:",
  "options": [
   "În BRLF, tusea, vocea răgușită, rinoreea și astmul sunt mai frecvente decât pirozisul",
   "Hernia prin rostogolire: SEI rămâne competent sub diafragm; ocazional dureri intense prin volvulus sau strangulare",
   "BRLF se manifestă doar prin pirozis, fără tuse sau răgușeală",
   "Paraesofagiana are SEI deasupra diafragmului, identică alunecării",
   "Volvulusul paraesofagian este regula, SEI fiind incompetent"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "În BRLF, tusea, vocea răgușită, rinoreea și astmul sunt mai frecvente decât pirozisul — Corect: Tuse, răgușeală, rinoree, astm mai frecvente decât pirozisul.\n\nHernia prin rostogolire: SEI rămâne competent sub diafragm; ocazional dureri intense prin volvulus sau strangulare — Corect: SEI competent sub diafragm; volvulus ocazional.\n\nBRLF se manifestă doar prin pirozis, fără tuse sau răgușeală — Incorect: Pirozisul poate lipsi.\n\nParaesofagiana are SEI deasupra diafragmului, identică alunecării — Incorect: Alunecarea aduce joncțiunea deasupra; paraesofagiana păstrează SEI jos.\n\nVolvulusul paraesofagian este regula, SEI fiind incompetent — Incorect: Volvulusul este ocazional, nu regula.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1163, BRLF — Tuse/răgușeală versus hernie paraesofagiană (pagini PDF: 292).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1163
   ],
   "pdfPages": [
    292
   ],
   "section": "BRLF — Tuse/răgușeală versus hernie paraesofagiană"
  },
  "learningObjective": "Simptomele extraesofagiene dominante în BRLF versus SEI competent al herniei prin rostogolire.",
  "optionRationales": [
   "Tuse, răgușeală, rinoree, astm mai frecvente decât pirozisul.",
   "SEI competent sub diafragm; volvulus ocazional.",
   "Pirozisul poate lipsi.",
   "Alunecarea aduce joncțiunea deasupra; paraesofagiana păstrează SEI jos.",
   "Volvulusul este ocazional, nu regula."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă poziția SEI a paraesofagienei cu alunecarea și reduce BRLF la pirozis."
  },
  "textbookExpressions": [
   "vocea răguşită",
   "volvulus sau a strangulării"
  ]
 },
 {
  "id": "gastro-adv-078",
  "topicId": "gastro",
  "type": "CM",
  "stem": "În clasificarea Los Angeles, dincolo de gradul D (>75% circumferință):",
  "options": [
   "Gradul A: eroziuni limitate la pliuri, care nu depășesc 5 mm",
   "Gradul B: cel puțin o eroziune mai lungă de 5 mm, limitată la pliuri, fără continuitate între vârfurile a două pliuri",
   "Gradul C: eroziuni care se continuă între vârfurile pliurilor, dar nu sunt circumferențiale",
   "Gradul A înseamnă eroziuni confluente pe toată circumferința",
   "Gradul B cere continuitate între toate pliurile, identic gradului D"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Gradul A: eroziuni limitate la pliuri, care nu depășesc 5 mm — Corect: A: nu depășesc 5 mm, limitate la pliuri.\n\nGradul B: cel puțin o eroziune mai lungă de 5 mm, limitată la pliuri, fără continuitate între vârfurile a două pliuri — Corect: B: >5 mm, fără continuitate între două pliuri.\n\nGradul C: eroziuni care se continuă între vârfurile pliurilor, dar nu sunt circumferențiale — Corect: C: continuitate între pliuri, nu circumferențial.\n\nGradul A înseamnă eroziuni confluente pe toată circumferința — Incorect: Circumferențialul >75% este D, nu A.\n\nGradul B cere continuitate între toate pliurile, identic gradului D — Incorect: Continuitatea între pliuri definește C, nu B.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1164, Esofagită — Los Angeles A/B/C (pragul 5 mm) (pagini PDF: 293).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1164
   ],
   "pdfPages": [
    293
   ],
   "section": "Esofagită — Los Angeles A/B/C (pragul 5 mm)"
  },
  "learningObjective": "Pragul 5 mm care desparte A de B și continuitatea între pliuri care desparte B de C.",
  "optionRationales": [
   "A: nu depășesc 5 mm, limitate la pliuri.",
   "B: >5 mm, fără continuitate între două pliuri.",
   "C: continuitate între pliuri, nu circumferențial.",
   "Circumferențialul >75% este D, nu A.",
   "Continuitatea între pliuri definește C, nu B."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 5 mm și continuitatea pliurilor între A, B și C."
  },
  "textbookExpressions": [
   "nu depăşesc 5 mm",
   "mai lungă de"
  ]
 },
 {
  "id": "gastro-adv-079",
  "topicId": "gastro",
  "type": "CM",
  "stem": "NERD, antagoniști H2 și gastroplicatura endoluminală:",
  "options": [
   "NERD are endoscopie normală, de obicei la femei; un grup mic are esofag hipersensibil, cu disconfort la modificări ușoare de pH",
   "Antagoniștii H2 (cimetidină, ranitidină, famotidină, nizatidină) pot fi combinați cu IPP în forme mai severe",
   "Gastroplicatura reduce pirozisul și episoadele acide, dar fără îmbunătățire de durată obiectivată prin pH",
   "NERD predomină la bărbații vârstnici cu esofagită D",
   "H2 înlocuiesc IPP-ul ca elecție în toate cazurile non-ușoare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "NERD are endoscopie normală, de obicei la femei; un grup mic are esofag hipersensibil, cu disconfort la modificări ușoare de pH — Corect: Femei, endoscopie normală, esofag hipersensibil.\n\nAntagoniștii H2 (cimetidină, ranitidină, famotidină, nizatidină) pot fi combinați cu IPP în forme mai severe — Corect: H2 pot fi adăugați IPP în forme severe.\n\nGastroplicatura reduce pirozisul și episoadele acide, dar fără îmbunătățire de durată obiectivată prin pH — Corect: Beneficiu clinic fără durabilitate pe măsurarea pH.\n\nNERD predomină la bărbații vârstnici cu esofagită D — Incorect: NERD este de obicei la femei, nu esofagită D.\n\nH2 înlocuiesc IPP-ul ca elecție în toate cazurile non-ușoare — Incorect: IPP rămân elecția în afara formelor ușoare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1164, BAGE — NERD hipersensibil, H2 plus IPP, gastroplicatură (pagini PDF: 293).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1164
   ],
   "pdfPages": [
    293
   ],
   "section": "BAGE — NERD hipersensibil, H2 plus IPP, gastroplicatură"
  },
  "learningObjective": "Profilul NERD (femei, esofag hipersensibil), combinația H2+IPP și limita obiectivă a gastroplicaturii.",
  "optionRationales": [
   "Femei, endoscopie normală, esofag hipersensibil.",
   "H2 pot fi adăugați IPP în forme severe.",
   "Beneficiu clinic fără durabilitate pe măsurarea pH.",
   "NERD este de obicei la femei, nu esofagită D.",
   "IPP rămân elecția în afara formelor ușoare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Face NERD-ul o esofagită D masculină și retrogradează H2 peste IPP."
  },
  "textbookExpressions": [
   "esofag „hipersensibil\"",
   "Antagoniştii receptorilor H2"
  ]
 },
 {
  "id": "gastro-adv-080",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Doza de întreținere citată pentru omeprazol, după normalizarea sensibilității esofagiene, este:",
  "options": [
   "Omeprazol 20 mg",
   "Omeprazol 80 mg de două ori pe zi, ca în sindromul Zollinger-Ellison",
   "Lansoprazol 5 mg săptămânal",
   "Ranitidină 10 mg, fără IPP",
   "Alginat 100 ml ca unică întreținere"
  ],
  "correct": [
   0
  ],
  "explanation": "Omeprazol 20 mg — Corect: Textul: omeprazol 20 mg poate fi păstrat ca întreținere.\n\nOmeprazol 80 mg de două ori pe zi, ca în sindromul Zollinger-Ellison — Incorect: 80 mg bid ține de alte indicații, nu de textul de întreținere.\n\nLansoprazol 5 mg săptămânal — Incorect: 5 mg săptămânal nu apare.\n\nRanitidină 10 mg, fără IPP — Incorect: H2 nu înlocuiesc IPP-ul de întreținere citat.\n\nAlginat 100 ml ca unică întreținere — Incorect: Alginatul este OTC, nu unica întreținere post-IPP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1164, BAGE — Întreținere cu omeprazol 20 mg (pagini PDF: 293).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1164
   ],
   "pdfPages": [
    293
   ],
   "section": "BAGE — Întreținere cu omeprazol 20 mg"
  },
  "learningObjective": "Reținerea dozei de 20 mg omeprazol ca întreținere, distinctă de IPP-ul bid din formele severe.",
  "optionRationales": [
   "Textul: omeprazol 20 mg poate fi păstrat ca întreținere.",
   "80 mg bid ține de alte indicații, nu de textul de întreținere.",
   "5 mg săptămânal nu apare.",
   "H2 nu înlocuiesc IPP-ul de întreținere citat.",
   "Alginatul este OTC, nu unica întreținere post-IPP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă 20 mg la doze de hipergastrinemie sau retrogradează alginatul ca unică întreținere."
  },
  "textbookExpressions": [
   "omeprazol 20 mg",
   "tratament de întreţinere"
  ]
 },
 {
  "id": "gastro-adv-081",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Strictura peptică și indicația de a evita chirurgia antireflux:",
  "options": [
   "Chirurgia trebuie evitată la dismotilitate esofagiană fără relație cu refluxul acid, la non-responderi IPP și la cei cu tulburări funcționale intestinale",
   "Stricturile peptice, mai rare după IPP, survin de obicei peste 60 de ani, cu disfagie intermitentă pentru solide care se agravează treptat",
   "Cazurile ușoare pot răspunde doar la IPP; cele severe cer dilatare endoscopică și IPP pe termen lung",
   "Chirurgia este primul pas la tinerii cu NERD și dismotilitate",
   "Strictura peptică este tipică sub 30 de ani și răspunde doar la H2, fără dilatare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Chirurgia trebuie evitată la dismotilitate esofagiană fără relație cu refluxul acid, la non-responderi IPP și la cei cu tulburări funcționale intestinale — Corect: Dismotilitate, non-răspuns IPP și tulburări funcționale: evită chirurgia.\n\nStricturile peptice, mai rare după IPP, survin de obicei peste 60 de ani, cu disfagie intermitentă pentru solide care se agravează treptat — Corect: Peste 60 de ani, disfagie intermitentă pentru solide.\n\nCazurile ușoare pot răspunde doar la IPP; cele severe cer dilatare endoscopică și IPP pe termen lung — Corect: Ușoare: doar IPP; severe: dilatare plus IPP.\n\nChirurgia este primul pas la tinerii cu NERD și dismotilitate — Incorect: NERD cu dismotilitate este tocmai contextul de evitat chirurgical.\n\nStrictura peptică este tipică sub 30 de ani și răspunde doar la H2, fără dilatare — Incorect: Strictura este la >60 ani; dilatarea este pentru cazurile severe.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1165, BAGE — Evitarea chirurgiei și strictura >60 ani (pagini PDF: 294).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1165
   ],
   "pdfPages": [
    294
   ],
   "section": "BAGE — Evitarea chirurgiei și strictura >60 ani"
  },
  "learningObjective": "Cele trei situații de evitarea fundoplicaturii și profilul stricturii (vârstnic, disfagie pentru solide).",
  "optionRationales": [
   "Dismotilitate, non-răspuns IPP și tulburări funcționale: evită chirurgia.",
   "Peste 60 de ani, disfagie intermitentă pentru solide.",
   "Ușoare: doar IPP; severe: dilatare plus IPP.",
   "NERD cu dismotilitate este tocmai contextul de evitat chirurgical.",
   "Strictura este la >60 ani; dilatarea este pentru cazurile severe."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Operează NERD-ul cu dismotilitate și mută strictura la tineri, inversând paragraful de complicații."
  },
  "textbookExpressions": [
   "peste 60 de ani",
   "dismotilitate esofagiană"
  ]
 },
 {
  "id": "gastro-adv-082",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Displazia de grad scăzut pe esofag Barrett, la endoscopia de control:",
  "options": [
   "Se repetă de obicei endoscopia la 6 luni, cu biopsii în cadran la fiecare 1 cm, sub IPP în doză mare",
   "Dacă displazia de grad scăzut persistă, se propune ablație endoscopică sau monitorizare la 6 luni",
   "Insulele de țesut scuamos sau columnar nu contribuie la măsurarea extensiei în criteriile Praga",
   "Displazia de grad scăzut impune esofagectomie imediată, fără biopsii de control",
   "Intervalul de 6 luni se aplică doar displaziei de grad înalt nodulare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se repetă de obicei endoscopia la 6 luni, cu biopsii în cadran la fiecare 1 cm, sub IPP în doză mare — Corect: Control la 6 luni, cadran la 1 cm, IPP doză mare.\n\nDacă displazia de grad scăzut persistă, se propune ablație endoscopică sau monitorizare la 6 luni — Corect: Persistență: ablație sau supraveghere la 6 luni.\n\nInsulele de țesut scuamos sau columnar nu contribuie la măsurarea extensiei în criteriile Praga — Corect: Insulele nu contribuie la extensia Praga.\n\nDisplazia de grad scăzut impune esofagectomie imediată, fără biopsii de control — Incorect: Esofagectomia nu este primul pas în displazia scăzută.\n\nIntervalul de 6 luni se aplică doar displaziei de grad înalt nodulare — Incorect: 6 luni este intervalul displaziei scăzute; înalta nodulară merge spre EMR.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1166, Barrett — Displazie scăzută: 6 luni, 1 cm, IPP (pagini PDF: 295).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1166
   ],
   "pdfPages": [
    295
   ],
   "section": "Barrett — Displazie scăzută: 6 luni, 1 cm, IPP"
  },
  "learningObjective": "Algoritmul 6 luni / biopsii 1 cm / IPP doză mare, plus nota Praga că insulele nu se măsoară.",
  "optionRationales": [
   "Control la 6 luni, cadran la 1 cm, IPP doză mare.",
   "Persistență: ablație sau supraveghere la 6 luni.",
   "Insulele nu contribuie la extensia Praga.",
   "Esofagectomia nu este primul pas în displazia scăzută.",
   "6 luni este intervalul displaziei scăzute; înalta nodulară merge spre EMR."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Sare la esofagectomie în displazia scăzută și confundă intervalele 6 luni versus 3 luni ale gradului înalt."
  },
  "textbookExpressions": [
   "interval de 6 luni",
   "fiecare 1 cm"
  ]
 },
 {
  "id": "gastro-adv-083",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Displazia de grad înalt și ablația în Barrett:",
  "options": [
   "Leziunea nodulară se îndepărtează prin rezecție endoscopică mucosală pentru stadializare histologică mai precisă",
   "Fără leziune vizibilă: IPP doze mari și biopsii nu mai târziu de 3 luni; ecoendoscopia stadializează, excluzând cancerul și limfadenopatia",
   "Ablația prin radiofrecvență a înlocuit terapia fotodinamică ca tehnică de elecție după îndepărtarea leziunii nodulare",
   "Fotodinamica rămâne elecția, RFA fiind abandonată",
   "EMR este contraindicată la leziunile nodulare, esofagectomia fiind unica opțiune"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Leziunea nodulară se îndepărtează prin rezecție endoscopică mucosală pentru stadializare histologică mai precisă — Corect: EMR pentru stadializare dacă este nodulară.\n\nFără leziune vizibilă: IPP doze mari și biopsii nu mai târziu de 3 luni; ecoendoscopia stadializează, excluzând cancerul și limfadenopatia — Corect: IPP doză mare, biopsii ≤3 luni, EUS.\n\nAblația prin radiofrecvență a înlocuit terapia fotodinamică ca tehnică de elecție după îndepărtarea leziunii nodulare — Corect: RFA a înlocuit fotodinamica.\n\nFotodinamica rămâne elecția, RFA fiind abandonată — Incorect: RFA, nu fotodinamica, este elecția.\n\nEMR este contraindicată la leziunile nodulare, esofagectomia fiind unica opțiune — Incorect: EMR este tocmai indicația leziunii nodulare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1166, Barrett — HGD, EMR, biopsii la 3 luni, RFA (pagini PDF: 295).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1166
   ],
   "pdfPages": [
    295
   ],
   "section": "Barrett — HGD, EMR, biopsii la 3 luni, RFA"
  },
  "learningObjective": "EMR pentru nodular, fereastra ≤3 luni fără leziune vizibilă și RFA ca succesoare a fotodinamicii.",
  "optionRationales": [
   "EMR pentru stadializare dacă este nodulară.",
   "IPP doză mare, biopsii ≤3 luni, EUS.",
   "RFA a înlocuit fotodinamica.",
   "RFA, nu fotodinamica, este elecția.",
   "EMR este tocmai indicația leziunii nodulare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează fotodinamica ca elecție și interzice EMR-ul nodular, inversând algoritmul endoscopic."
  },
  "textbookExpressions": [
   "nu mai târziu de 3 luni",
   "Ablaţia prin radiofrecvenţă"
  ]
 },
 {
  "id": "gastro-adv-084",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Patogenia H. pylori, dincolo de urează deja menționată:",
  "options": [
   "Aderența se face prin molecule inclusiv BabA, care se leagă de antigenul Lewis de pe celulele mucoasei gastrice",
   "Ulcerele sunt mai frecvente când tulpina exprimă CagA și VacA, cu sinteză mai pronunțată de IL-8",
   "Polimorfismele care cresc IL-1β se asociază cu gastrită atrofică și cancer",
   "BabA se leagă de urează, fără Lewis, IL-8 fiind protector",
   "CagA/VacA reduc inflamația, IL-1β prevenind atrofia"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Aderența se face prin molecule inclusiv BabA, care se leagă de antigenul Lewis de pe celulele mucoasei gastrice — Corect: BabA se leagă de Lewis.\n\nUlcerele sunt mai frecvente când tulpina exprimă CagA și VacA, cu sinteză mai pronunțată de IL-8 — Corect: CagA și VacA, cu IL-8 crescută.\n\nPolimorfismele care cresc IL-1β se asociază cu gastrită atrofică și cancer — Corect: IL-1β: gastrită atrofică și cancer.\n\nBabA se leagă de urează, fără Lewis, IL-8 fiind protector — Incorect: Lewis, nu ureaza, este ligandul BabA.\n\nCagA/VacA reduc inflamația, IL-1β prevenind atrofia — Incorect: CagA/VacA accentuează inflamația; IL-1β se asociază cu atrofie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1172, H. pylori — BabA/Lewis, CagA/VacA/IL-8, IL-1β (pagini PDF: 297).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1172
   ],
   "pdfPages": [
    297
   ],
   "section": "H. pylori — BabA/Lewis, CagA/VacA/IL-8, IL-1β"
  },
  "learningObjective": "Trio-ul adeziune BabA–Lewis, virulență CagA/VacA–IL-8 și riscul genetic IL-1β.",
  "optionRationales": [
   "BabA se leagă de Lewis.",
   "CagA și VacA, cu IL-8 crescută.",
   "IL-1β: gastrită atrofică și cancer.",
   "Lewis, nu ureaza, este ligandul BabA.",
   "CagA/VacA accentuează inflamația; IL-1β se asociază cu atrofie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează rolul IL-8/IL-1β și rupe cuplul BabA–Lewis."
  },
  "textbookExpressions": [
   "BabA",
   "interleukinei 8"
  ]
 },
 {
  "id": "gastro-adv-085",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Proporția de persoane infectate cu H. pylori care dezvoltă ulcer duodenal, din populația adultă mondială infectată 50-60%, este de:",
  "options": [
   "Doar 15%",
   "90%, identic sensibilității testului respirator",
   "Toate, gastrita antrală fiind echivalentă ulcerului",
   "2-3%, identic raportului UD/UG inversat",
   "75% imediat după eradicarea bacteriei"
  ],
  "correct": [
   0
  ],
  "explanation": "Doar 15% — Corect: Textul: doar 15% dintre infectați dezvoltă ulcere duodenale.\n\n90%, identic sensibilității testului respirator — Incorect: 90% este sensibilitatea testului respirator, nu rata de UD.\n\nToate, gastrita antrală fiind echivalentă ulcerului — Incorect: Gastrita antrală este obișnuită și adesea asimptomatică.\n\n2-3%, identic raportului UD/UG inversat — Incorect: UD sunt de 2-3 ori mai frecvente decât UG, nu 2-3% dintre infectați.\n\n75% imediat după eradicarea bacteriei — Incorect: Eradicarea scade recurența, nu produce ulcer la 75%.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1173, Ulcer duodenal — Doar 15% dintre infectați (pagini PDF: 297).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1173
   ],
   "pdfPages": [
    297
   ],
   "section": "Ulcer duodenal — Doar 15% dintre infectați"
  },
  "learningObjective": "Reținerea cifrei 15% (ulcer printre infectați), distinctă de 50-75% (H. pylori printre UD) și de 50-60% (prevalență adultă).",
  "optionRationales": [
   "Textul: doar 15% dintre infectați dezvoltă ulcere duodenale.",
   "90% este sensibilitatea testului respirator, nu rata de UD.",
   "Gastrita antrală este obișnuită și adesea asimptomatică.",
   "UD sunt de 2-3 ori mai frecvente decât UG, nu 2-3% dintre infectați.",
   "Eradicarea scade recurența, nu produce ulcer la 75%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 15% (UD la infectați) cu 50-75% (H. pylori la UD) și 90% (test respirator)."
  },
  "textbookExpressions": [
   "doar 15%",
   "50-60% din populaţia"
  ]
 },
 {
  "id": "gastro-adv-086",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Boala ulceroasă peptică, definiție și epidemiologie:",
  "options": [
   "Ulcerul depășește în profunzime muscularis mucosae, cu bază fibroasă; eroziunile sunt limitate la mucoasă",
   "UD afectează aproximativ 10% din populația adultă și sunt de 2-3 ori mai frecvente decât UG",
   "UG se asociază cu pangastrită (corp și antru), pierdere de celule parietale și reducerea producției de acid",
   "UD sunt de 10 ori mai rare decât UG și respectă muscularis mucosae",
   "UG cresc acidul prin hipergastrinemie antrală, identic UD"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ulcerul depășește în profunzime muscularis mucosae, cu bază fibroasă; eroziunile sunt limitate la mucoasă — Corect: Dincolo de muscularis mucosae versus limitat la mucoasă.\n\nUD afectează aproximativ 10% din populația adultă și sunt de 2-3 ori mai frecvente decât UG — Corect: 10% adulți; UD de 2-3 ori mai frecvente decât UG.\n\nUG se asociază cu pangastrită (corp și antru), pierdere de celule parietale și reducerea producției de acid — Corect: Pangastrită, pierdere parietală, acid redus.\n\nUD sunt de 10 ori mai rare decât UG și respectă muscularis mucosae — Incorect: UD sunt mai frecvente, nu mai rare, și depășesc muscularis.\n\nUG cresc acidul prin hipergastrinemie antrală, identic UD — Incorect: Hipergastrinemia antrală ține de gastrita antrală/UD, nu de UG.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1173, Ulcer — Muscularis mucosae, UD 10% și 2-3× UG, pangastrită (pagini PDF: 297).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1173
   ],
   "pdfPages": [
    297
   ],
   "section": "Ulcer — Muscularis mucosae, UD 10% și 2-3× UG, pangastrită"
  },
  "learningObjective": "Definiția versus eroziune, ponderea 10% și 2-3×, plus hipoclorhidria pangastritei gastrice.",
  "optionRationales": [
   "Dincolo de muscularis mucosae versus limitat la mucoasă.",
   "10% adulți; UD de 2-3 ori mai frecvente decât UG.",
   "Pangastrită, pierdere parietală, acid redus.",
   "UD sunt mai frecvente, nu mai rare, și depășesc muscularis.",
   "Hipergastrinemia antrală ține de gastrita antrală/UD, nu de UG."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează UD versus UG (frecvență și acid) și confundă ulcerul cu eroziunea."
  },
  "textbookExpressions": [
   "10% din populaţia adultă",
   "2-3 ori mai frecvente"
  ]
 },
 {
  "id": "gastro-adv-087",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Metodele non-invazive pentru H. pylori, dincolo de antigenul fecal monoclonal:",
  "options": [
   "Serologia IgG are sensibilitate 90% și specificitate 83%; scăderea titrului cu 50% poate dura până la 1 an, deci nu confirmă eradicarea",
   "Testul respirator cu uree 13C are sensibilitate 90% și specificitate 96%; se evită antibioticele 4 săptămâni și IPP 2 săptămâni înainte",
   "Anticorpii salivari nu sunt la fel de sensibili sau specifici comparativ cu serologia",
   "Serologia IgG se negativează în 48 de ore după eradicare, fiind testul de control",
   "Respiratorul cere IPP în ziua testului, antibioticele crescând sensibilitatea"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Serologia IgG are sensibilitate 90% și specificitate 83%; scăderea titrului cu 50% poate dura până la 1 an, deci nu confirmă eradicarea — Corect: 90% și 83%; titrul scade lent, până la 1 an.\n\nTestul respirator cu uree 13C are sensibilitate 90% și specificitate 96%; se evită antibioticele 4 săptămâni și IPP 2 săptămâni înainte — Corect: 90% și 96%; fără Abx 4 săptămâni, fără IPP 2 săptămâni.\n\nAnticorpii salivari nu sunt la fel de sensibili sau specifici comparativ cu serologia — Corect: Saliva este inferioară serologiei.\n\nSerologia IgG se negativează în 48 de ore după eradicare, fiind testul de control — Incorect: Serologia nu confirmă eradicarea.\n\nRespiratorul cere IPP în ziua testului, antibioticele crescând sensibilitatea — Incorect: IPP-ul scade sensibilitatea; se evită 2 săptămâni.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1174, H. pylori — Serologie 90/83, 13C 90/96, fereastra 4/2 săptămâni (pagini PDF: 298).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1174
   ],
   "pdfPages": [
    298
   ],
   "section": "H. pylori — Serologie 90/83, 13C 90/96, fereastra 4/2 săptămâni"
  },
  "learningObjective": "Perechile 90/83 (serologie) versus 90/96 (respirator) și ferestrele 4 săptămâni Abx / 2 săptămâni IPP.",
  "optionRationales": [
   "90% și 83%; titrul scade lent, până la 1 an.",
   "90% și 96%; fără Abx 4 săptămâni, fără IPP 2 săptămâni.",
   "Saliva este inferioară serologiei.",
   "Serologia nu confirmă eradicarea.",
   "IPP-ul scade sensibilitatea; se evită 2 săptămâni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Face serologia test de eradicare la 48 de ore și inversează ferestrele Abx/IPP ale respiratorului."
  },
  "textbookExpressions": [
   "sensibilitate de 90%",
   "ultimele 4 săptămâni"
  ]
 },
 {
  "id": "gastro-adv-088",
  "topicId": "gastro",
  "type": "CS",
  "stem": "Sensibilitatea și specificitatea antigenului fecal H. pylori cu anticorpi monoclonali, deja apropiate de 97,6/96, se completează cu:",
  "options": [
   "Întreruperea IPP 2 săptămâni înainte; blocanții H2 pot continua",
   "Oprirea H2 și continuarea IPP până în ziua recoltării",
   "Necesitatea endoscopiei, testul fiind doar invaziv",
   "Specificitate sub 50%, inutil după eradicare",
   "Înlocuirea culturii gastrice la toți vârstnicii cu alarmă"
  ],
  "correct": [
   0
  ],
  "explanation": "Întreruperea IPP 2 săptămâni înainte; blocanții H2 pot continua — Corect: Textul: întrerupere IPP 2 săptămâni; H2 pot continua.\n\nOprirea H2 și continuarea IPP până în ziua recoltării — Incorect: H2 pot continua; IPP se opresc.\n\nNecesitatea endoscopiei, testul fiind doar invaziv — Incorect: Testul este non-invaziv.\n\nSpecificitate sub 50%, inutil după eradicare — Incorect: Specificitatea citată este 96%.\n\nÎnlocuirea culturii gastrice la toți vârstnicii cu alarmă — Incorect: „Testează și tratează” vizează dispepsia sub 55 ani fără alarmă, nu înlocuiește endoscopia la alarmă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1174, H. pylori — Antigen fecal: oprire IPP, H2 permis (pagini PDF: 298).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1174
   ],
   "pdfPages": [
    298
   ],
   "section": "H. pylori — Antigen fecal: oprire IPP, H2 permis"
  },
  "learningObjective": "Nuanța practică: oprire IPP 2 săptămâni, H2 permis, distinct de cifrele de performanță deja folosite.",
  "optionRationales": [
   "Textul: întrerupere IPP 2 săptămâni; H2 pot continua.",
   "H2 pot continua; IPP se opresc.",
   "Testul este non-invaziv.",
   "Specificitatea citată este 96%.",
   "„Testează și tratează” vizează dispepsia sub 55 ani fără alarmă, nu înlocuiește endoscopia la alarmă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează IPP versus H2 înaintea antigenului fecal, singura nuanță practică rămasă nefolosită."
  },
  "textbookExpressions": [
   "2 săptămâni",
   "blocanţii receptorilor H2"
  ]
 },
 {
  "id": "gastro-adv-089",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Consecințele pe termen lung ale chirurgiei gastrice, dincolo de ulcerul recurent:",
  "options": [
   "Sindromul dumping după gastrectomie parțială cu gastro-jejunoanastomoză: greață, distensie, transpirații, leșin, palpitații prin evacuare jejunală hiperotonă și scăderea volemiei; poate apărea hipoglicemie",
   "Diareea după vagotomie: episoade severe recurente la aproximativ 1% dintre pacienți",
   "Carențe: fier (absorbție redusă), folat (aport deficitar), B12 (deficit de factor intrinsec), scădere ponderală (aport redus)",
   "Dumping-ul este un reflux biliari, fără deplasare de lichid plasmatic",
   "Diareea post-vagotomie atinge 50% din pacienți, B12 fiind în exces"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sindromul dumping după gastrectomie parțială cu gastro-jejunoanastomoză: greață, distensie, transpirații, leșin, palpitații prin evacuare jejunală hiperotonă și scăderea volemiei; poate apărea hipoglicemie — Corect: Evacuare jejunală, influx de lichid, hipovolemie, posibilă hipoglicemie.\n\nDiareea după vagotomie: episoade severe recurente la aproximativ 1% dintre pacienți — Corect: Aproximativ 1% episoade severe după vagotomie.\n\nCarențe: fier (absorbție redusă), folat (aport deficitar), B12 (deficit de factor intrinsec), scădere ponderală (aport redus) — Corect: Fier, folat, B12, greutate.\n\nDumping-ul este un reflux biliari, fără deplasare de lichid plasmatic — Incorect: Mecanismul este hiperosmolar, nu reflux biliar.\n\nDiareea post-vagotomie atinge 50% din pacienți, B12 fiind în exces — Incorect: 1%, nu 50%; B12 scade prin lipsa de factor intrinsec.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1176, Chirurgia gastrică — Dumping, diaree 1%, carențe B12/fier/folat (pagini PDF: 300).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1176
   ],
   "pdfPages": [
    300
   ],
   "section": "Chirurgia gastrică — Dumping, diaree 1%, carențe B12/fier/folat"
  },
  "learningObjective": "Mecanismul dumping-ului, ponderea 1% a diareei post-vagotomie și triada carențelor.",
  "optionRationales": [
   "Evacuare jejunală, influx de lichid, hipovolemie, posibilă hipoglicemie.",
   "Aproximativ 1% episoade severe după vagotomie.",
   "Fier, folat, B12, greutate.",
   "Mecanismul este hiperosmolar, nu reflux biliar.",
   "1%, nu 50%; B12 scade prin lipsa de factor intrinsec."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă diareea post-vagotomie de la 1% la 50% și rupe mecanismul hiperosmolar al dumping-ului."
  },
  "textbookExpressions": [
   "aproximativ 1%",
   "factor intrinsec"
  ]
 },
 {
  "id": "gastro-adv-090",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Asocierile H. pylori cu neoplazia gastrică:",
  "options": [
   "Incidența cancerului gastric distal (nu și a celui proximal) este direct proporțională cu infecția H. pylori în țările cu incidență ridicată",
   "Peste 70% dintre limfoamele gastrice MALT cu celule B prezintă infecție H. pylori; gastrita cronică conține celula B clonală",
   "Cancerul proximal este proporțional cu H. pylori, MALT-ul fiind independent de bacterie",
   "Eradicarea nu are rol în MALT, celula B clonală fiind absentă",
   "Adenocarcinomul distal scade când prevalența H. pylori crește"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Incidența cancerului gastric distal (nu și a celui proximal) este direct proporțională cu infecția H. pylori în țările cu incidență ridicată — Corect: Distal da, proximal nu; proporționalitate în țările cu incidență ridicată.\n\nPeste 70% dintre limfoamele gastrice MALT cu celule B prezintă infecție H. pylori; gastrita cronică conține celula B clonală — Corect: Peste 70% MALT; celulă B clonală în gastrita cronică.\n\nCancerul proximal este proporțional cu H. pylori, MALT-ul fiind independent de bacterie — Incorect: Proximalul nu urmează aceeași proporționalitate.\n\nEradicarea nu are rol în MALT, celula B clonală fiind absentă — Incorect: Gastrita cronică conține clona B care dă MALT.\n\nAdenocarcinomul distal scade când prevalența H. pylori crește — Incorect: Incidența distală crește cu infecția, nu scade.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1176, H. pylori — Cancer distal și MALT >70% (pagini PDF: 300).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1176
   ],
   "pdfPages": [
    300
   ],
   "section": "H. pylori — Cancer distal și MALT >70%"
  },
  "learningObjective": "Gradientul distal versus proximal al adenocarcinomului și ponderea >70% H. pylori în MALT.",
  "optionRationales": [
   "Distal da, proximal nu; proporționalitate în țările cu incidență ridicată.",
   "Peste 70% MALT; celulă B clonală în gastrita cronică.",
   "Proximalul nu urmează aceeași proporționalitate.",
   "Gastrita cronică conține clona B care dă MALT.",
   "Incidența distală crește cu infecția, nu scade."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută proporționalitatea pe cancerul proximal și rupe legătura MALT–H. pylori >70%."
  },
  "textbookExpressions": [
   "Peste 70%",
   "distal (dar nu şi"
  ]
 },
 {
  "id": "gastro-adv-091",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Leziunile AINS la evaluare endoscopică, dincolo de COX-1/COX-2:",
  "options": [
   "Aproximativ 50% dintre consumatorii regulați de AINS dezvoltă leziuni ale mucoasei gastrice",
   "Aproximativ 30% prezintă ulcere la endoscopie",
   "Doar o mică parte au simptome (aproximativ 5%) și 1-2% dezvoltă o complicație majoră (hemoragie sau perforație)",
   "90% sunt simptomatici, 50% având perforație",
   "Ulcerele endoscopice lipsesc, leziunile fiind 1-2%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Aproximativ 50% dintre consumatorii regulați de AINS dezvoltă leziuni ale mucoasei gastrice — Corect: 50% leziuni mucoase.\n\nAproximativ 30% prezintă ulcere la endoscopie — Corect: 30% ulcere endoscopice.\n\nDoar o mică parte au simptome (aproximativ 5%) și 1-2% dezvoltă o complicație majoră (hemoragie sau perforație) — Corect: 5% simptome; 1-2% complicație majoră.\n\n90% sunt simptomatici, 50% având perforație — Incorect: Simptomele sunt ~5%, nu 90%.\n\nUlcerele endoscopice lipsesc, leziunile fiind 1-2% — Incorect: Ulcerele endoscopice sunt ~30%, nu absente.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1176, AINS — 50% leziuni, 30% ulcere, 5% simptome, 1-2% complicații (pagini PDF: 300).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1176
   ],
   "pdfPages": [
    300
   ],
   "section": "AINS — 50% leziuni, 30% ulcere, 5% simptome, 1-2% complicații"
  },
  "learningObjective": "Cascada 50% / 30% / 5% / 1-2% a leziunilor AINS.",
  "optionRationales": [
   "50% leziuni mucoase.",
   "30% ulcere endoscopice.",
   "5% simptome; 1-2% complicație majoră.",
   "Simptomele sunt ~5%, nu 90%.",
   "Ulcerele endoscopice sunt ~30%, nu absente."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 50/30/5/1-2 între simptome, ulcere și perforație, patru procente din același paragraf AINS."
  },
  "textbookExpressions": [
   "aproximativ 50%",
   "1-2%"
  ]
 },
 {
  "id": "gastro-adv-092",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Epidemiologia BII, dincolo de gradientul etnic deja citat:",
  "options": [
   "Incidența BC este aproximativ 4-10/100.000 anual, prevalență 25-100/100.000",
   "Incidența CU este stabilă la 6-15/100.000 anual, prevalență 80-150/100.000",
   "În 10% din colitele BII nu se poate distinge BC de CU (colită nedeterminată)",
   "Aproximativ 25% sunt diagnosticați înainte de 18 ani, boala tânără fiind mai extinsă și agresivă",
   "Incidența BC este 80-150/100.000, CU fiind 4-10, fără forme nedeterminate"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Incidența BC este aproximativ 4-10/100.000 anual, prevalență 25-100/100.000 — Corect: BC: 4-10 incidență, 25-100 prevalență.\n\nIncidența CU este stabilă la 6-15/100.000 anual, prevalență 80-150/100.000 — Corect: CU: 6-15 și 80-150.\n\nÎn 10% din colitele BII nu se poate distinge BC de CU (colită nedeterminată) — Corect: 10% colită nedeterminată.\n\nAproximativ 25% sunt diagnosticați înainte de 18 ani, boala tânără fiind mai extinsă și agresivă — Corect: 25% înainte de 18 ani, mai agresivă.\n\nIncidența BC este 80-150/100.000, CU fiind 4-10, fără forme nedeterminate — Incorect: Cifrele 80-150 țin de prevalența CU, nu de incidența BC.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1198, BII — Incidență 4-10 versus 6-15, 10% nedeterminată, 25% <18 ani (pagini PDF: 301).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1198
   ],
   "pdfPages": [
    301
   ],
   "section": "BII — Incidență 4-10 versus 6-15, 10% nedeterminată, 25% <18 ani"
  },
  "learningObjective": "Perechile incidență/prevalență BC versus CU, 10% colită nedeterminată și 25% debut pediatric.",
  "optionRationales": [
   "BC: 4-10 incidență, 25-100 prevalență.",
   "CU: 6-15 și 80-150.",
   "10% colită nedeterminată.",
   "25% înainte de 18 ani, mai agresivă.",
   "Cifrele 80-150 țin de prevalența CU, nu de incidența BC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează 4-10 (BC) cu 80-150 (prevalență CU) și neagă colita nedeterminată."
  },
  "textbookExpressions": [
   "4-10/100.000",
   "25% dintre pacienţi"
  ]
 },
 {
  "id": "gastro-adv-093",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Factorii genetici în BII:",
  "options": [
   "Până la 1 din 5 pacienți cu BC și 1 din 6 cu CU au o rudă de gradul I cu BII",
   "Concordanța la gemeni monozigoți versus dizigoți pentru BC este 20-50% versus 10%",
   "Factorii genetici majori pentru BC includ NOD2 (CARD15)",
   "Concordanța monozigoților este 0%, NOD2 ținând de CU nu de BC",
   "Riscul familial lipsește, istoricul fiind cel mai slab predictor"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Până la 1 din 5 pacienți cu BC și 1 din 6 cu CU au o rudă de gradul I cu BII — Corect: 1 din 5 BC, 1 din 6 CU.\n\nConcordanța la gemeni monozigoți versus dizigoți pentru BC este 20-50% versus 10% — Corect: 20-50% MZ versus 10% DZ.\n\nFactorii genetici majori pentru BC includ NOD2 (CARD15) — Corect: NOD2 (CARD15) pentru BC.\n\nConcordanța monozigoților este 0%, NOD2 ținând de CU nu de BC — Incorect: NOD2 este factor major pentru BC; concordanța MZ nu este 0%.\n\nRiscul familial lipsește, istoricul fiind cel mai slab predictor — Incorect: Istoricul familial este cel mai mare factor de risc independent.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1198, BII — 1 din 5 / 1 din 6, gemeni 20-50% versus 10%, NOD2 (pagini PDF: 301).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1198
   ],
   "pdfPages": [
    301
   ],
   "section": "BII — 1 din 5 / 1 din 6, gemeni 20-50% versus 10%, NOD2"
  },
  "learningObjective": "Ponderile familiale 1/5 și 1/6, concordanța gemelară și locusul NOD2/CARD15.",
  "optionRationales": [
   "1 din 5 BC, 1 din 6 CU.",
   "20-50% MZ versus 10% DZ.",
   "NOD2 (CARD15) pentru BC.",
   "NOD2 este factor major pentru BC; concordanța MZ nu este 0%.",
   "Istoricul familial este cel mai mare factor de risc independent."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută NOD2 pe CU și anulează concordanța gemelară 20-50%/10%."
  },
  "textbookExpressions": [
   "1 din 5 pacienţi",
   "NOD2"
  ]
 },
 {
  "id": "gastro-adv-094",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Microbiota în BII, dincolo de disbioza generică:",
  "options": [
   "Intestinul are de 10 ori mai multe organisme bacteriene decât celule gazdă, cu 300-400 specii distincte",
   "Concentrații mai scăzute de Faecalibacterium prausnitzii în specimenele rezecate prezic recădere endoscopică ulterioară",
   "E. coli aderă prin pili de tip 1 la CEACAM6 pe celulele ileale în BC",
   "F. prausnitzii crescut prezice recăderea, CEACAM6 fiind absent în ileon",
   "Diversitatea microbiană este crescută în BII, MAP fiind confirmat prin PCR și trialuri anti-MTB pozitive"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Intestinul are de 10 ori mai multe organisme bacteriene decât celule gazdă, cu 300-400 specii distincte — Corect: 10 ori mai multe bacterii; 300-400 specii.\n\nConcentrații mai scăzute de Faecalibacterium prausnitzii în specimenele rezecate prezic recădere endoscopică ulterioară — Corect: F. prausnitzii scăzut prezice recăderea endoscopică.\n\nE. coli aderă prin pili de tip 1 la CEACAM6 pe celulele ileale în BC — Corect: Pili tip 1 – CEACAM6.\n\nF. prausnitzii crescut prezice recăderea, CEACAM6 fiind absent în ileon — Incorect: Scăderea, nu creșterea, prezice recăderea.\n\nDiversitatea microbiană este crescută în BII, MAP fiind confirmat prin PCR și trialuri anti-MTB pozitive — Incorect: Diversitatea este redusă; PCR și trialurile nu confirmă MAP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1199, BII — 10× bacterii, F. prausnitzii și CEACAM6 (pagini PDF: 302).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1199
   ],
   "pdfPages": [
    302
   ],
   "section": "BII — 10× bacterii, F. prausnitzii și CEACAM6"
  },
  "learningObjective": "Ordinul 10×/300-400 specii, valoarea predictivă a F. prausnitzii scăzut și ligandul CEACAM6.",
  "optionRationales": [
   "10 ori mai multe bacterii; 300-400 specii.",
   "F. prausnitzii scăzut prezice recăderea endoscopică.",
   "Pili tip 1 – CEACAM6.",
   "Scăderea, nu creșterea, prezice recăderea.",
   "Diversitatea este redusă; PCR și trialurile nu confirmă MAP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează F. prausnitzii ca predictor și „confirmă” MAP, două capcane microbiene din același paragraf."
  },
  "textbookExpressions": [
   "Faecalibacterium prausnitzii",
   "CEACAM6"
  ]
 },
 {
  "id": "gastro-adv-095",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Inducția remisiei în boala Crohn, dincolo de anti-TNF:",
  "options": [
   "Prednisolon oral 30-60 mg/zi în pusee moderate-severe",
   "Boala ileocecală ușoară-moderată: budesonid cu eliberare controlată, disponibilitate sistemică redusă",
   "Nutriția enterală ca unică sursă 28 de zile induce remisie similară steroizilor; recidiva e mare mai ales cu afectare colonică",
   "Steroizii sunt de elecție în boala penetrantă și sepsisul perianal",
   "Aminosalicilații au dovezi solide de eficacitate, budesonidul fiind evitat ileocecal"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Prednisolon oral 30-60 mg/zi în pusee moderate-severe — Corect: 30-60 mg/zi prednisolon.\n\nBoala ileocecală ușoară-moderată: budesonid cu eliberare controlată, disponibilitate sistemică redusă — Corect: Budesonid ileocecal ușor-moderat.\n\nNutriția enterală ca unică sursă 28 de zile induce remisie similară steroizilor; recidiva e mare mai ales cu afectare colonică — Corect: 28 de zile, rate similare steroizilor, recidivă colonică.\n\nSteroizii sunt de elecție în boala penetrantă și sepsisul perianal — Incorect: Steroizii se evită în boala penetrantă sau sepsis perianal.\n\nAminosalicilații au dovezi solide de eficacitate, budesonidul fiind evitat ileocecal — Incorect: Aminosalicilații au foarte puține dovezi în BC.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1203, Crohn — Prednisolon 30-60 mg, budesonid ileocecal, 28 zile enteral (pagini PDF: 306).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1203
   ],
   "pdfPages": [
    306
   ],
   "section": "Crohn — Prednisolon 30-60 mg, budesonid ileocecal, 28 zile enteral"
  },
  "learningObjective": "Doza 30-60 mg, budesonidul ileocecal și fereastra de 28 de zile a nutriției enterale.",
  "optionRationales": [
   "30-60 mg/zi prednisolon.",
   "Budesonid ileocecal ușor-moderat.",
   "28 de zile, rate similare steroizilor, recidivă colonică.",
   "Steroizii se evită în boala penetrantă sau sepsis perianal.",
   "Aminosalicilații au foarte puține dovezi în BC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune steroizii în fistula/sepsis și neagă budesonidul ileocecal, două reguli de inducție."
  },
  "textbookExpressions": [
   "30-60 mg/zi",
   "28 de zile"
  ]
 },
 {
  "id": "gastro-adv-096",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Prognosticul care ghidează întreținerea în Crohn:",
  "options": [
   "Prognostic bun: vârstă înaintată la diagnostic, fără boală perianală, ulcerație limitată, non-fumător — poate fără întreținere",
   "Prognostic defavorabil: vârstă tânără, intestin subțire extensiv, ulcerație colonică profundă, perianal/rectal, fumător — imunosupresie de lungă durată",
   "Prognosticul bun este vârsta tânără, fumatul și boala perianală",
   "Întreținerea se oprește la fumători tineri cu ulcerație profundă",
   "Calprotectina fecală nu are valoare de predicție a răspunsului"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Prognostic bun: vârstă înaintată la diagnostic, fără boală perianală, ulcerație limitată, non-fumător — poate fără întreținere — Corect: Vârstă înaintată, fără perianal, ulcerație limitată, non-fumător.\n\nPrognostic defavorabil: vârstă tânără, intestin subțire extensiv, ulcerație colonică profundă, perianal/rectal, fumător — imunosupresie de lungă durată — Corect: Tânăr, extensiv, profund, perianal, fumător.\n\nPrognosticul bun este vârsta tânără, fumatul și boala perianală — Incorect: Acestea sunt markerii defavorabili, nu buni.\n\nÎntreținerea se oprește la fumători tineri cu ulcerație profundă — Incorect: Defavorabilii tocmai cer imunosupresie.\n\nCalprotectina fecală nu are valoare de predicție a răspunsului — Incorect: Calprotectina și lactoferina predictează răspunsul sau eșecul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1203, Crohn — Factori de prognostic bun versus defavorabil (pagini PDF: 306).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1203
   ],
   "pdfPages": [
    306
   ],
   "section": "Crohn — Factori de prognostic bun versus defavorabil"
  },
  "learningObjective": "Contrastul vârstă înaintată/non-fumător versus tânăr/fumător/perianal pentru decizia de întreținere.",
  "optionRationales": [
   "Vârstă înaintată, fără perianal, ulcerație limitată, non-fumător.",
   "Tânăr, extensiv, profund, perianal, fumător.",
   "Acestea sunt markerii defavorabili, nu buni.",
   "Defavorabilii tocmai cer imunosupresie.",
   "Calprotectina și lactoferina predictează răspunsul sau eșecul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează markerii bun/defavorabil (vârstă, fumat, perianal) din același paragraf de întreținere."
  },
  "textbookExpressions": [
   "vârstă înaintată la diagnostic",
   "vârstă tânără la diag-nostic"
  ]
 },
 {
  "id": "gastro-adv-097",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Chirurgia în Crohn, dincolo de indicațiile deja listate:",
  "options": [
   "Studii pre-biologice: până la 80% vor necesita o intervenție; recurența este 15% pe an fără profilaxie de menținere",
   "O cură de 3 luni cu metronidazol reduce rata recăderii; ileocolonoscopie de anastomoză la 6 luni postoperator",
   "Pacienții cu Crohn nu se pretează pentru rezervor ileal, recurența la acest nivel fiind mare",
   "Rezervorul ileoanal este operația standard în Crohn, recurența fiind nulă",
   "Metronidazolul 3 luni crește recăderea, ileocolonoscopia la 6 luni fiind evitată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Studii pre-biologice: până la 80% vor necesita o intervenție; recurența este 15% pe an fără profilaxie de menținere — Corect: Până la 80%; 15% pe an.\n\nO cură de 3 luni cu metronidazol reduce rata recăderii; ileocolonoscopie de anastomoză la 6 luni postoperator — Corect: Metronidazol 3 luni; ileocolonoscopie la 6 luni.\n\nPacienții cu Crohn nu se pretează pentru rezervor ileal, recurența la acest nivel fiind mare — Corect: Pouch-ul nu se pretează în Crohn.\n\nRezervorul ileoanal este operația standard în Crohn, recurența fiind nulă — Incorect: Pouch-ul este pentru CU, nu pentru Crohn.\n\nMetronidazolul 3 luni crește recăderea, ileocolonoscopia la 6 luni fiind evitată — Incorect: Metronidazolul reduce recăderea; controlul la 6 luni este cerut.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1205, Crohn — Chirurgie 80%, recurență 15%/an, metronidazol 3 luni, fără pouch (pagini PDF: 308).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1205
   ],
   "pdfPages": [
    308
   ],
   "section": "Crohn — Chirurgie 80%, recurență 15%/an, metronidazol 3 luni, fără pouch"
  },
  "learningObjective": "Ponderea 80%, rata 15%/an, metronidazolul 3 luni, controlul la 6 luni și contraindicația pouch-ului.",
  "optionRationales": [
   "Până la 80%; 15% pe an.",
   "Metronidazol 3 luni; ileocolonoscopie la 6 luni.",
   "Pouch-ul nu se pretează în Crohn.",
   "Pouch-ul este pentru CU, nu pentru Crohn.",
   "Metronidazolul reduce recăderea; controlul la 6 luni este cerut."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune pouch-ul în Crohn și inversează metronidazolul 3 luni, două decizii postoperatorii."
  },
  "textbookExpressions": [
   "80%",
   "15% pe an"
  ]
 },
 {
  "id": "gastro-adv-098",
  "topicId": "gastro",
  "type": "CM",
  "stem": "După colectomie subtotală cu anastomoză ileorectală pentru Crohn colonic cu rect cruțat:",
  "options": [
   "Rata de recurență este 60-70% în ileon, rect sau ambele",
   "Două treimi dintre acești pacienți păstrează un rect funcțional pentru 10 ani",
   "Recurența este nulă, rectul rămânând funcțional la toți 20 de ani",
   "Panproctocolectomia este evitată când rectul este complet afectat",
   "Ileostoma terminală este contraindicată dacă colonul și rectul sunt afectate"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Rata de recurență este 60-70% în ileon, rect sau ambele — Corect: 60-70% recurență ileon/rect/ambele.\n\nDouă treimi dintre acești pacienți păstrează un rect funcțional pentru 10 ani — Corect: Două treimi păstrează rect funcțional 10 ani.\n\nRecurența este nulă, rectul rămânând funcțional la toți 20 de ani — Incorect: Recurența nu este nulă.\n\nPanproctocolectomia este evitată când rectul este complet afectat — Incorect: Dacă colonul și rectul sunt afectate, panproctocolectomia cu ileostomă este standard.\n\nIleostoma terminală este contraindicată dacă colonul și rectul sunt afectate — Incorect: Ileostoma este standardul când rectul este afectat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1205, Crohn colonic — Ileorectal 60-70% recurență, 2/3 rect funcțional/10 ani (pagini PDF: 308).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1205
   ],
   "pdfPages": [
    308
   ],
   "section": "Crohn colonic — Ileorectal 60-70% recurență, 2/3 rect funcțional/10 ani"
  },
  "learningObjective": "Perechea 60-70% recurență versus două treimi cu rect funcțional la 10 ani.",
  "optionRationales": [
   "60-70% recurență ileon/rect/ambele.",
   "Două treimi păstrează rect funcțional 10 ani.",
   "Recurența nu este nulă.",
   "Dacă colonul și rectul sunt afectate, panproctocolectomia cu ileostomă este standard.",
   "Ileostoma este standardul când rectul este afectat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează 60-70% și 10 ani, cifrele de pronostic ale anastomozei ileorectale."
  },
  "textbookExpressions": [
   "60-70%",
   "10 ani"
  ]
 },
 {
  "id": "gastro-adv-099",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Eliberarea colonică a 5-ASA prin legătură azo, polimer pH-sensibil sau microsfere, plus PPAR-γ:",
  "options": [
   "Gruparea activă este 5-ASA, absorbit în intestinul subțire; preparatele eliberează 5-ASA în colon prin legătură azo (sulfasalazină, balsalazidă, olsalazină), polimer sensibil la pH sau microsfere",
   "Mecanismul implică probabil PPAR-γ; sunt eficienți în inducție (ușor-moderat) și menținere, cu efect chemopreventiv pentru cancerul colorectal asociat CU",
   "5-ASA poate provoca rareori boli renale",
   "5-ASA se absoarbe doar în colon, legătura azo fiind inutilă",
   "Sunt ineficienți în menținere și cresc riscul de CCR"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Gruparea activă este 5-ASA, absorbit în intestinul subțire; preparatele eliberează 5-ASA în colon prin legătură azo (sulfasalazină, balsalazidă, olsalazină), polimer sensibil la pH sau microsfere — Corect: 5-ASA eliberat în colon prin azo, pH sau microsfere.\n\nMecanismul implică probabil PPAR-γ; sunt eficienți în inducție (ușor-moderat) și menținere, cu efect chemopreventiv pentru cancerul colorectal asociat CU — Corect: PPAR-γ, inducție, menținere, chemoprevenție CCR.\n\n5-ASA poate provoca rareori boli renale — Corect: Boli renale rare.\n\n5-ASA se absoarbe doar în colon, legătura azo fiind inutilă — Incorect: 5-ASA se absoarbe în intestinul subțire, de aceea trebuie vehicul colonic.\n\nSunt ineficienți în menținere și cresc riscul de CCR — Incorect: Sunt eficienți în menținere și chemopreventivi, nu invers.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1206, CU — 5-ASA, legătură azo, PPAR-γ, chemoprevenție (pagini PDF: 309).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1206
   ],
   "pdfPages": [
    309
   ],
   "section": "CU — 5-ASA, legătură azo, PPAR-γ, chemoprevenție"
  },
  "learningObjective": "Eliberarea colonică (azo/pH/microsfere), PPAR-γ și dublul rol inducție/menținere plus chemoprevenție, cu nefrotoxicitate rară.",
  "optionRationales": [
   "5-ASA eliberat în colon prin azo, pH sau microsfere.",
   "PPAR-γ, inducție, menținere, chemoprevenție CCR.",
   "Boli renale rare.",
   "5-ASA se absoarbe în intestinul subțire, de aceea trebuie vehicul colonic.",
   "Sunt eficienți în menținere și chemopreventivi, nu invers."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează vehiculul colonic al 5-ASA și inversează chemoprevenția CCR."
  },
  "textbookExpressions": [
   "5-ASA",
   "PPAR"
  ]
 },
 {
  "id": "gastro-adv-100",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Conform Cadranului 32.41, episodul sever de colită ulcerativă se definește prin:",
  "options": [
   "Frecvența scaunelor >6 pe zi cu sânge",
   "Febră ≥37,5°C și tahicardie >90/min",
   "VSH >30 mm/oră",
   "Hemoglobină <100 g/L și albumină <30 g/L",
   "Sub 3 scaune/zi fără sânge, febră absentă, Hb >120 g/L"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Frecvența scaunelor >6 pe zi cu sânge — Corect: >6 scaune/zi cu sânge.\n\nFebră ≥37,5°C și tahicardie >90/min — Corect: ≥37,5°C și >90/min.\n\nVSH >30 mm/oră — Corect: VSH >30.\n\nHemoglobină <100 g/L și albumină <30 g/L — Corect: Hb <100 și albumină <30.\n\nSub 3 scaune/zi fără sânge, febră absentă, Hb >120 g/L — Incorect: Aceste valori descriu forma ușoară/constipația, nu atacul sever.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1206, CU severă — Cadranul 32.41: >6 scaune, 37,5°C, 90, VSH 30, Hb 100, albumină 30 (pagini PDF: 309).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1206
   ],
   "pdfPages": [
    309
   ],
   "section": "CU severă — Cadranul 32.41: >6 scaune, 37,5°C, 90, VSH 30, Hb 100, albumină 30"
  },
  "learningObjective": "Cele șase praguri ale atacului sever versus un profil de constipație/formă ușoară.",
  "optionRationales": [
   ">6 scaune/zi cu sânge.",
   "≥37,5°C și >90/min.",
   "VSH >30.",
   "Hb <100 și albumină <30.",
   "Aceste valori descriu forma ușoară/constipația, nu atacul sever."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește cele șase praguri de severitate cu un tablou de tranzit lent, toate din același cadran."
  },
  "textbookExpressions": [
   ">6 scaune",
   "<30 g/L"
  ]
 },
 {
  "id": "gastro-adv-101",
  "topicId": "gastro",
  "type": "CS",
  "stem": "În atacul sever de colită ulcerativă, endoscopia de elecție este:",
  "options": [
   "Sigmoidoscopie flexibilă limitată, fără pregătire, colonoscopia completă fiind evitată pentru a nu perfora",
   "Colonoscopie completă cu pregătire, perforația fiind neglijabilă",
   "Enteroscopie de intestin subțire, colonul nefiind interesat",
   "Capsule endoscopy ca primă intenție, fără sigmoidoscopie",
   "Nicio endoscopie, radiografia pe gol stadializând extensia cu acuratețe"
  ],
  "correct": [
   0
  ],
  "explanation": "Sigmoidoscopie flexibilă limitată, fără pregătire, colonoscopia completă fiind evitată pentru a nu perfora — Corect: Textul: colonoscopia completă evitată; sigmoidoscopie flexibilă fără pregătire.\n\nColonoscopie completă cu pregătire, perforația fiind neglijabilă — Incorect: Colonoscopia completă riscă perforația.\n\nEnteroscopie de intestin subțire, colonul nefiind interesat — Incorect: CU afectează colonul, nu cere enteroscopie de primă intenție.\n\nCapsule endoscopy ca primă intenție, fără sigmoidoscopie — Incorect: Capsula nu înlocuiește confirmarea endoscopică distală.\n\nNicio endoscopie, radiografia pe gol stadializând extensia cu acuratețe — Incorect: Radiografia pe gol exclude dilatarea, dar nu apreciază corect extinderea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1206, CU severă — Sigmoidoscopie fără pregătire, nu colonoscopie completă (pagini PDF: 309).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1206
   ],
   "pdfPages": [
    309
   ],
   "section": "CU severă — Sigmoidoscopie fără pregătire, nu colonoscopie completă"
  },
  "learningObjective": "Evitarea colonoscopiei complete în atacul sever, în favoarea sigmoidoscopiei nepregătite.",
  "optionRationales": [
   "Textul: colonoscopia completă evitată; sigmoidoscopie flexibilă fără pregătire.",
   "Colonoscopia completă riscă perforația.",
   "CU afectează colonul, nu cere enteroscopie de primă intenție.",
   "Capsula nu înlocuiește confirmarea endoscopică distală.",
   "Radiografia pe gol exclude dilatarea, dar nu apreciază corect extinderea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Impune colonoscopia completă în atacul sever, tocmai gestul pe care textul îl evită."
  },
  "textbookExpressions": [
   "Colonoscopia completă",
   "sigmoidoscopie flexibilă"
  ]
 },
 {
  "id": "gastro-adv-102",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Constipația după criteriile Roma IV și clasificarea funcțională:",
  "options": [
   "Diagnosticul de cercetare cere cel puțin 2 criterii timp de minim 3 luni, printre care <3 scaune/săptămână, efort >25% din timp, Bristol 1-2 în >25% defecații",
   "Clasificare: tranzit colonic normal 59%, tulburări de defecație 25%, tranzit încetinit 13%; asocierea tulburare de defecație plus tranzit încetinit 3%",
   "Tranzitul normal înseamnă că scaunul traversează colonul în ritm normal, frecvența putând fi percepută totuși ca anormală",
   "Roma IV cere un singur criteriu o singură zi, tranzitul încetinit acoperind 59%",
   "Tulburările de defecație sunt 59%, tranzitul normal 3%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Diagnosticul de cercetare cere cel puțin 2 criterii timp de minim 3 luni, printre care <3 scaune/săptămână, efort >25% din timp, Bristol 1-2 în >25% defecații — Corect: ≥2 criterii, minim 3 luni; <3/săptămână, efort >25%, Bristol 1-2.\n\nClasificare: tranzit colonic normal 59%, tulburări de defecație 25%, tranzit încetinit 13%; asocierea tulburare de defecație plus tranzit încetinit 3% — Corect: 59% normal, 25% defecație, 13% încetinit, 3% asociere.\n\nTranzitul normal înseamnă că scaunul traversează colonul în ritm normal, frecvența putând fi percepută totuși ca anormală — Corect: Tranzit normal cu percepție de constipație.\n\nRoma IV cere un singur criteriu o singură zi, tranzitul încetinit acoperind 59% — Incorect: Roma IV cere cel puțin 2 criterii/3 luni; 59% este tranzitul normal.\n\nTulburările de defecație sunt 59%, tranzitul normal 3% — Incorect: 59% este tranzitul normal, nu tulburarea de defecație.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1208, Constipație — Roma IV (≥2/3 luni) și 59/25/13/3% (pagini PDF: 311).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1208
   ],
   "pdfPages": [
    311
   ],
   "section": "Constipație — Roma IV (≥2/3 luni) și 59/25/13/3%"
  },
  "learningObjective": "Pragul ≥2 criterii/3 luni și cele patru ponderi 59/25/13/3 ale subtipurilor de tranzit.",
  "optionRationales": [
   "≥2 criterii, minim 3 luni; <3/săptămână, efort >25%, Bristol 1-2.",
   "59% normal, 25% defecație, 13% încetinit, 3% asociere.",
   "Tranzit normal cu percepție de constipație.",
   "Roma IV cere cel puțin 2 criterii/3 luni; 59% este tranzitul normal.",
   "59% este tranzitul normal, nu tulburarea de defecație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 59/25/13/3 între subtipuri și reduce Roma IV la un criteriu de o zi."
  },
  "textbookExpressions": [
   "<3 scaune/săptămână",
   "59%"
  ]
 },
 {
  "id": "gastro-adv-021-v2",
  "topicId": "gastro",
  "type": "CM",
  "stem": "Supravegherea esofagului Barrett:",
  "options": [
   "HGD fără leziune vizibilă: biopsii în 3 luni",
   "displazia de grad scăzut se reverifică la 6 luni",
   "HGD fără leziune vizibilă cere biopsii în 3 luni",
   "terapia fotodinamică a înlocuit radiofrecvența",
   "HGD impune esofagectomie de rutină"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "HGD fără leziune vizibilă: biopsii în 3 luni — Corect: RFA este tehnica de elecție.\n\ndisplazia de grad scăzut se reverifică la 6 luni — Corect: Displazia de grad scăzut: endoscopie la 6 luni.\n\nHGD fără leziune vizibilă cere biopsii în 3 luni — Corect: HGD fără leziune vizibilă: IPP și biopsii în cel mult 3 luni.\n\nterapia fotodinamică a înlocuit radiofrecvența — Incorect: Nu: RFA a înlocuit terapia fotodinamică.\n\nHGD impune esofagectomie de rutină — Incorect: Nu: rezecția endoscopică previne esofagectomia.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 32, p. 1166, Boala de reflux gastro-esofagian (pagini PDF: 295).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 32,
   "printedPages": [
    1166
   ],
   "pdfPages": [
    295
   ],
   "section": "Boala de reflux gastro-esofagian"
  },
  "learningObjective": "Conduita în displazia din esofagul Barrett.",
  "optionRationales": [
   "RFA este tehnica de elecție.",
   "Displazia de grad scăzut: endoscopie la 6 luni.",
   "HGD fără leziune vizibilă: IPP și biopsii în cel mult 3 luni.",
   "Nu: RFA a înlocuit terapia fotodinamică.",
   "Nu: rezecția endoscopică previne esofagectomia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează evoluția tehnicilor."
  },
  "textbookExpressions": [
   "radiofrecvenţă",
   "3 luni"
  ],
  "replaces": "gastro-adv-021"
 }
];
