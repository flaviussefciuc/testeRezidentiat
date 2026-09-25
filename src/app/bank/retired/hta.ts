import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_HTA:(Question&Record<string,unknown>)[]=[
 {
  "id": "hta-adv-001",
  "topicId": "hta",
  "type": "CM",
  "stem": "Despre importanța hipertensiunii arteriale ca factor de risc cardiovascular sunt corecte afirmațiile:",
  "options": [
   "Tensiunea arterială crescută reprezintă principalul factor de risc pentru mortalitate la nivel mondial, depășind fumatul",
   "Hipertensiunea arterială este un factor de risc important pentru fibrilația atrială, accidentul vascular cerebral, infarctul miocardic acut și boala renală cronică terminală",
   "Terapiile antihipertensive moderne sunt omologate pentru protecție cardiovasculară în principal pe baza ameliorării simptomelor raportate de pacient",
   "Afectează aproximativ o treime dintre adulți, la nivel mondial",
   "Este cea mai frecventă cauză de prezentare la camera de gardă, mai frecventă decât orice altă patologie cronică"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Tensiunea arterială crescută reprezintă principalul factor de risc pentru mortalitate la nivel mondial, depășind fumatul — Corect: Textul indică TA crescută drept principalul factor de risc pentru mortalitate globală, înaintea fumatului.\n\nHipertensiunea arterială este un factor de risc important pentru fibrilația atrială, accidentul vascular cerebral, infarctul miocardic acut și boala renală cronică terminală — Corect: Sunt enumerate explicit ca riscuri asociate hipertensiunii.\n\nTerapiile antihipertensive moderne sunt omologate pentru protecție cardiovasculară în principal pe baza ameliorării simptomelor raportate de pacient — Incorect: Omologarea se bazează pe reducerea susţinută a TA, nu pe ameliorarea simptomelor.\n\nAfectează aproximativ o treime dintre adulți, la nivel mondial — Corect: Hipertensiunea afectează o treime dintre adulţi, la nivel mondial.\n\nEste cea mai frecventă cauză de prezentare la camera de gardă, mai frecventă decât orice altă patologie cronică — Incorect: Textul o descrie drept cea mai comună patologie cronică din ambulatorul medicului generalist (1 din 10 programări), nu drept cea mai frecventă prezentare de urgenţă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1134, 1133, Introducere — Impactul hipertensiunii arteriale (pagini PDF: 279, 278).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1134,
    1133
   ],
   "pdfPages": [
    279,
    278
   ],
   "section": "Introducere — Impactul hipertensiunii arteriale"
  },
  "learningObjective": "Recunoașterea amploarei epidemiologice a hipertensiunii și a bazei de evidență pentru omologarea tratamentului ei.",
  "optionRationales": [
   "Textul indică TA crescută drept principalul factor de risc pentru mortalitate globală, înaintea fumatului.",
   "Sunt enumerate explicit ca riscuri asociate hipertensiunii.",
   "Omologarea se bazează pe reducerea susţinută a TA, nu pe ameliorarea simptomelor.",
   "Hipertensiunea afectează o treime dintre adulţi, la nivel mondial.",
   "Textul o descrie drept cea mai comună patologie cronică din ambulatorul medicului generalist (1 din 10 programări), nu drept cea mai frecventă prezentare de urgenţă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii înlocuiesc baza reală de evidență (reducerea TA) cu una plauzibilă dar falsă (ameliorarea simptomelor) și extind o statistică de ambulator la un context de urgență nemenționat."
  },
  "textbookExpressions": [
   "principalul factor de risc",
   "1 din 10"
  ]
 },
 {
  "id": "hta-adv-002",
  "topicId": "hta",
  "type": "CM",
  "stem": "Privind evaluarea clinică inițială a pacientului hipertensiv sunt corecte afirmațiile:",
  "options": [
   "Cele patru elemente-cheie ale evaluării includ stabilirea valorii reale a TA, existența unei cauze identificabile, necesitatea reducerii TA și existența unor motive pentru o abordare terapeutică preferențială",
   "TA sistolică reprezintă presiunea arterială maximă, în timpul contracției cardiace, iar TA diastolică reprezintă cea mai mică presiune, în timpul relaxării cardiace",
   "O singură determinare a TA reprezintă cu fidelitate TA uzuală (de fond) a pacientului",
   "TA prezintă variabilitate doar pe termen scurt (secunde, minute), fiind stabilă de la o zi la alta sau sezonier",
   "Simptomele legate de TA crescută, în absența unei urgențe hipertensive, reprezintă de regulă o indicație pentru inițierea tratamentului"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Cele patru elemente-cheie ale evaluării includ stabilirea valorii reale a TA, existența unei cauze identificabile, necesitatea reducerii TA și existența unor motive pentru o abordare terapeutică preferențială — Corect: Cele patru întrebări-cheie structurează evaluarea clinică a pacientului hipertensiv.\n\nTA sistolică reprezintă presiunea arterială maximă, în timpul contracției cardiace, iar TA diastolică reprezintă cea mai mică presiune, în timpul relaxării cardiace — Corect: Aceasta este definiţia fiziologică a TA sistolice şi diastolice.\n\nO singură determinare a TA reprezintă cu fidelitate TA uzuală (de fond) a pacientului — Incorect: Textul precizează opusul: o singură determinare ar putea să nu reprezinte cu fidelitate TA uzuală.\n\nTA prezintă variabilitate doar pe termen scurt (secunde, minute), fiind stabilă de la o zi la alta sau sezonier — Incorect: TA variază şi pe termen lung (sezonier), nu doar pe termen scurt.\n\nSimptomele legate de TA crescută, în absența unei urgențe hipertensive, reprezintă de regulă o indicație pentru inițierea tratamentului — Incorect: În absenţa unei urgenţe, simptomele legate de TA crescută nu sunt o indicaţie pentru tratament; de fapt, terapia poate fi ea însăşi o cauză de simptome.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1134, Abordarea clinică a pacientului hipertensiv; Măsurarea tensiunii arteriale (pagini PDF: 279).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1134
   ],
   "pdfPages": [
    279
   ],
   "section": "Abordarea clinică a pacientului hipertensiv; Măsurarea tensiunii arteriale"
  },
  "learningObjective": "Aplicarea celor patru întrebări-cheie ale evaluării clinice și înțelegerea limitelor unei determinări izolate a TA.",
  "optionRationales": [
   "Cele patru întrebări-cheie structurează evaluarea clinică a pacientului hipertensiv.",
   "Aceasta este definiţia fiziologică a TA sistolice şi diastolice.",
   "Textul precizează opusul: o singură determinare ar putea să nu reprezinte cu fidelitate TA uzuală.",
   "TA variază şi pe termen lung (sezonier), nu doar pe termen scurt.",
   "În absenţa unei urgenţe, simptomele legate de TA crescută nu sunt o indicaţie pentru tratament; de fapt, terapia poate fi ea însăşi o cauză de simptome."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Doi distractori inversează afirmații explicite din text (fidelitatea unei singure determinări, indicația de tratament pe bază de simptome)."
  },
  "textbookExpressions": [
   "ar putea să nu reprezinte cu fidelitate",
   "presiunea arterială maximă"
  ]
 },
 {
  "id": "hta-adv-003",
  "topicId": "hta",
  "type": "CM",
  "stem": "Despre tehnica corectă de măsurare a tensiunii arteriale la cabinet sunt corecte afirmațiile:",
  "options": [
   "Dacă există o diferență semnificativă (de obicei >10 mmHg) între cele două brațe, măsurătorile ulterioare se efectuează la brațul cu TA mai mare",
   "Manșeta trebuie să acopere cel puțin 80% din circumferința brațului și trebuie plasată la nivelul inimii",
   "TA măsurată la cabinet este, pentru majoritatea persoanelor, cu aproximativ 5/5 mmHg mai mare decât cea măsurată la domiciliu",
   "Metodele oscilometrice automatizate sunt preferate față de metodele auscultatorii la pacienții cu fibrilație atrială",
   "O singură măsurătoare este suficientă pentru a stabili TA de cabinet, cu condiția ca aparatul să fie validat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Dacă există o diferență semnificativă (de obicei >10 mmHg) între cele două brațe, măsurătorile ulterioare se efectuează la brațul cu TA mai mare — Corect: Braţul cu valoarea mai mare este folosit pentru măsurătorile ulterioare, când diferenţa depăşeşte 10 mmHg.\n\nManșeta trebuie să acopere cel puțin 80% din circumferința brațului și trebuie plasată la nivelul inimii — Corect: Acestea sunt cerinţele tehnice explicite pentru manşetă.\n\nTA măsurată la cabinet este, pentru majoritatea persoanelor, cu aproximativ 5/5 mmHg mai mare decât cea măsurată la domiciliu — Corect: Aceasta este definiţia efectului de halat alb.\n\nMetodele oscilometrice automatizate sunt preferate față de metodele auscultatorii la pacienții cu fibrilație atrială — Incorect: Textul indică opusul: metoda ascultatorie este preferată în fibrilaţia atrială, unde oscilometria este inexactă.\n\nO singură măsurătoare este suficientă pentru a stabili TA de cabinet, cu condiția ca aparatul să fie validat — Incorect: Practica stabilită cere cel puţin două măsurători consecutive, folosind media sau cea mai mică valoare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1135, 1134, 1136, Măsurarea tensiunii arteriale — Determinarea la cabinet (pagini PDF: 280, 279, 281).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1135,
    1134,
    1136
   ],
   "pdfPages": [
    280,
    279,
    281
   ],
   "section": "Măsurarea tensiunii arteriale — Determinarea la cabinet"
  },
  "learningObjective": "Aplicarea regulilor tehnice de măsurare corectă a TA și interpretarea diferenței sistematice dintre cabinet și domiciliu (efectul de halat alb).",
  "optionRationales": [
   "Braţul cu valoarea mai mare este folosit pentru măsurătorile ulterioare, când diferenţa depăşeşte 10 mmHg.",
   "Acestea sunt cerinţele tehnice explicite pentru manşetă.",
   "Aceasta este definiţia efectului de halat alb.",
   "Textul indică opusul: metoda ascultatorie este preferată în fibrilaţia atrială, unde oscilometria este inexactă.",
   "Practica stabilită cere cel puţin două măsurători consecutive, folosind media sau cea mai mică valoare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Testează patru reguli tehnice concrete și inversează o excepție importantă (FA) unde metoda modernă, altfel preferată, devine inadecvată."
  },
  "textbookExpressions": [
   "braţul cu TA mai mare",
   "efect de halat alb"
  ]
 },
 {
  "id": "hta-adv-004",
  "topicId": "hta",
  "type": "CM",
  "stem": "Despre fenotipurile de hipertensiune arterială și metodele de măsurare în afara cabinetului sunt corecte afirmațiile:",
  "options": [
   "Hipertensiunea de halat alb se caracterizează prin TA crescută la cabinet și TA normală în afara cabinetului, cu risc cardiovascular intermediar",
   "Hipertensiunea mascată se caracterizează prin TA normală la cabinet și TA crescută în afara cabinetului, cu risc cardiovascular intermediar",
   "Medicația antihipertensivă este de regulă recomandată în hipertensiunea de halat alb, având în vedere riscul cardiovascular asociat",
   "Monitorizarea ambulatorie a TA pe 24 de ore este un indicator mai predictiv pentru evenimentele cardiovasculare decât măsurătorile de cabinet sau de domiciliu",
   "TA măsurată la domiciliu tinde să fie mai mare decât TA măsurată la cabinet, la același pacient"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Hipertensiunea de halat alb se caracterizează prin TA crescută la cabinet și TA normală în afara cabinetului, cu risc cardiovascular intermediar — Corect: Acesta este profilul hipertensiunii de halat alb, descris cu risc intermediar.\n\nHipertensiunea mascată se caracterizează prin TA normală la cabinet și TA crescută în afara cabinetului, cu risc cardiovascular intermediar — Corect: Acesta este profilul hipertensiunii mascate, descris cu risc intermediar.\n\nMedicația antihipertensivă este de regulă recomandată în hipertensiunea de halat alb, având în vedere riscul cardiovascular asociat — Incorect: Textul indică opusul: medicaţia nu este recomandată în halatul alb, din lipsă de dovezi clinice.\n\nMonitorizarea ambulatorie a TA pe 24 de ore este un indicator mai predictiv pentru evenimentele cardiovasculare decât măsurătorile de cabinet sau de domiciliu — Corect: Media pe 24 de ore este descrisă ca mai predictivă decât cabinetul sau domiciliul.\n\nTA măsurată la domiciliu tinde să fie mai mare decât TA măsurată la cabinet, la același pacient — Incorect: TA de domiciliu tinde să fie mai mică, nu mai mare, decât cea de cabinet.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1136, Tipuri de hipertensiune arterială; Determinarea TA în ambulator (pagini PDF: 281).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1136
   ],
   "pdfPages": [
    281
   ],
   "section": "Tipuri de hipertensiune arterială; Determinarea TA în ambulator"
  },
  "learningObjective": "Diferențierea celor patru fenotipuri de TA pe baza combinației cabinet/în afara cabinetului și clasificarea metodelor de măsurare după puterea predictivă.",
  "optionRationales": [
   "Acesta este profilul hipertensiunii de halat alb, descris cu risc intermediar.",
   "Acesta este profilul hipertensiunii mascate, descris cu risc intermediar.",
   "Textul indică opusul: medicaţia nu este recomandată în halatul alb, din lipsă de dovezi clinice.",
   "Media pe 24 de ore este descrisă ca mai predictivă decât cabinetul sau domiciliul.",
   "TA de domiciliu tinde să fie mai mică, nu mai mare, decât cea de cabinet."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere recunoașterea simultană a două fenotipuri cu tablou opus și a unei reguli terapeutice contraintuitive (halatul alb nu se tratează, în ciuda riscului)."
  },
  "textbookExpressions": [
   "profile de risc cardiovascular",
   "mai predictiv"
  ]
 },
 {
  "id": "hta-adv-005",
  "topicId": "hta",
  "type": "CM",
  "stem": "Despre hipertensiunea sistolică izolată sunt corecte afirmațiile:",
  "options": [
   "Se produce prin rigidizarea arterială legată de vârstă, cu creșterea TA sistolice și reducerea corespunzătoare a TA diastolice",
   "O presiune a pulsului mai mare decât valoarea uzuală de sub 50 mmHg este asociată cu injurie vasculară crescută",
   "Tratamentul medicamentos în hipertensiunea sistolică izolată diferă fundamental de cel din hipertensiunea arterială mixtă",
   "Este necesară prudență pentru a nu reduce TA diastolică sub aproximativ 60 mmHg, din cauza riscului asupra fluxului sanguin coronarian",
   "Insuficiența aortică nu poate produce un fenotip sistolic izolat similar celui indus de rigidizarea arterială"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Se produce prin rigidizarea arterială legată de vârstă, cu creșterea TA sistolice și reducerea corespunzătoare a TA diastolice — Corect: Rigidizarea arterelor mari creşte TA sistolică şi reduce corespunzător TA diastolică.\n\nO presiune a pulsului mai mare decât valoarea uzuală de sub 50 mmHg este asociată cu injurie vasculară crescută — Corect: Creşterea presiunii pulsului dincolo de valoarea uzuală sub 50 mmHg este asociată cu injurie vasculară.\n\nTratamentul medicamentos în hipertensiunea sistolică izolată diferă fundamental de cel din hipertensiunea arterială mixtă — Incorect: Textul precizează că tratamentul este acelaşi ca cel pentru hipertensiunea mixtă.\n\nEste necesară prudență pentru a nu reduce TA diastolică sub aproximativ 60 mmHg, din cauza riscului asupra fluxului sanguin coronarian — Corect: Reducerea sub acest prag poate afecta fluxul sanguin coronarian, dependent de presiunea diastolică.\n\nInsuficiența aortică nu poate produce un fenotip sistolic izolat similar celui indus de rigidizarea arterială — Incorect: Insuficienţa aortică poate provoca, de asemenea, un fenotip sistolic izolat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1136, Tipuri de hipertensiune arterială — Hipertensiunea sistolică izolată (pagini PDF: 281).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1136
   ],
   "pdfPages": [
    281
   ],
   "section": "Tipuri de hipertensiune arterială — Hipertensiunea sistolică izolată"
  },
  "learningObjective": "Înțelegerea mecanismului hemodinamic al hipertensiunii sistolice izolate și a limitei de siguranță pentru TA diastolică în tratamentul ei.",
  "optionRationales": [
   "Rigidizarea arterelor mari creşte TA sistolică şi reduce corespunzător TA diastolică.",
   "Creşterea presiunii pulsului dincolo de valoarea uzuală sub 50 mmHg este asociată cu injurie vasculară.",
   "Textul precizează că tratamentul este acelaşi ca cel pentru hipertensiunea mixtă.",
   "Reducerea sub acest prag poate afecta fluxul sanguin coronarian, dependent de presiunea diastolică.",
   "Insuficienţa aortică poate provoca, de asemenea, un fenotip sistolic izolat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează o regulă terapeutică (tratament diferit) și o excludere falsă a unei cauze valvulare alternative recunoscute de text."
  },
  "textbookExpressions": [
   "injurie vasculară crescută",
   "fluxul sanguin coronarian"
  ]
 },
 {
  "id": "hta-adv-006",
  "topicId": "hta",
  "type": "CM",
  "stem": "Conform definiției din text, hipotensiunea ortostatică este confirmată prin:",
  "options": [
   "O scădere a TA sistolice de peste 20 mmHg la 3 minute de la trecerea în ortostatism",
   "O scădere a TA diastolice de peste 10 mmHg la 3 minute de la trecerea în ortostatism",
   "O scădere a TA sistolice de peste 20 mmHg, evaluată imediat, fără a aștepta un interval standardizat",
   "O creștere compensatorie semnificativă a frecvenței cardiace, necesară pentru confirmarea diagnosticului",
   "Este de obicei simptomatică și impune tratament imediat indiferent de context"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "O scădere a TA sistolice de peste 20 mmHg la 3 minute de la trecerea în ortostatism — Corect: Acesta este pragul sistolic exact, la intervalul de timp specificat de 3 minute.\n\nO scădere a TA diastolice de peste 10 mmHg la 3 minute de la trecerea în ortostatism — Corect: Acesta este pragul diastolic exact, la același interval de 3 minute.\n\nO scădere a TA sistolice de peste 20 mmHg, evaluată imediat, fără a aștepta un interval standardizat — Incorect: Intervalul standardizat de 3 minute este parte a definiției, nu doar pragul numeric.\n\nO creștere compensatorie semnificativă a frecvenței cardiace, necesară pentru confirmarea diagnosticului — Incorect: Textul nu menționează un criteriu de frecvență cardiacă pentru acest diagnostic.\n\nEste de obicei simptomatică și impune tratament imediat indiferent de context — Incorect: Textul precizează că este de obicei asimptomatică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1137, Măsurarea tensiunii arteriale — Hipotensiunea ortostatică (pagini PDF: 282).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1137
   ],
   "pdfPages": [
    282
   ],
   "section": "Măsurarea tensiunii arteriale — Hipotensiunea ortostatică"
  },
  "learningObjective": "Aplicarea exactă a criteriilor de prag și de temporizare pentru diagnosticul hipotensiunii ortostatice.",
  "optionRationales": [
   "Acesta este pragul sistolic exact, la intervalul de timp specificat de 3 minute.",
   "Acesta este pragul diastolic exact, la același interval de 3 minute.",
   "Intervalul standardizat de 3 minute este parte a definiției, nu doar pragul numeric.",
   "Textul nu menționează un criteriu de frecvență cardiacă pentru acest diagnostic.",
   "Textul precizează că este de obicei asimptomatică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Necesită reținerea simultană a două praguri numerice și a intervalului de timp standardizat, fără de care pragurile singure sunt insuficiente."
  },
  "textbookExpressions": [
   "3 minute",
   "este asimptomatică"
  ]
 },
 {
  "id": "hta-adv-007",
  "topicId": "hta",
  "type": "CM",
  "stem": "Despre etiologia hipertensiunii arteriale sunt corecte afirmațiile:",
  "options": [
   "Până la 90% dintre pacienți nu prezintă o cauză identificabilă a TA crescute (hipertensiune arterială primară)",
   "Termenul preferat actual este „hipertensiune arterială primară”, în locul terminologiei clasice de „hipertensiune arterială esențială”",
   "Fiecare genă implicată individual în reglarea poligenică a TA contribuie cu aproximativ 0,5-1 mmHg, dar combinate pot determina 60% din nivelul TA al unei persoane",
   "Un istoric familial de hipertensiune sau accidente vasculare cerebrale la vârste neobișnuit de tinere nu impune, de regulă, o evaluare pentru cauze secundare",
   "Factorii de mediu și stilul de viață pot media până la 40% din variabilitatea TA"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Până la 90% dintre pacienți nu prezintă o cauză identificabilă a TA crescute (hipertensiune arterială primară) — Corect: Hipertensiunea primară este descrisă la până la 90% dintre pacienţi.\n\nTermenul preferat actual este „hipertensiune arterială primară”, în locul terminologiei clasice de „hipertensiune arterială esențială” — Corect: Terminologia „esenţială” este cea clasică; termenul actual preferat este „primară”.\n\nFiecare genă implicată individual în reglarea poligenică a TA contribuie cu aproximativ 0,5-1 mmHg, dar combinate pot determina 60% din nivelul TA al unei persoane — Corect: Fiecare genă contribuie individual redus, dar combinat pot determina 60% din nivelul TA.\n\nUn istoric familial de hipertensiune sau accidente vasculare cerebrale la vârste neobișnuit de tinere nu impune, de regulă, o evaluare pentru cauze secundare — Incorect: Textul indică opusul: un asemenea istoric ar trebui să determine o evaluare completă pentru cauze secundare.\n\nFactorii de mediu și stilul de viață pot media până la 40% din variabilitatea TA — Corect: Elementele de mediu şi stilul de viaţă sunt descrise ca mediind până la 40% din variabilitatea TA.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1137, Etiologia hipertensiunii arteriale (pagini PDF: 282).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1137
   ],
   "pdfPages": [
    282
   ],
   "section": "Etiologia hipertensiunii arteriale"
  },
  "learningObjective": "Cuantificarea contribuției poligenice, de mediu și a factorilor de stil de viață la nivelul TA, și recunoașterea semnalelor de alarmă familiale.",
  "optionRationales": [
   "Hipertensiunea primară este descrisă la până la 90% dintre pacienţi.",
   "Terminologia „esenţială” este cea clasică; termenul actual preferat este „primară”.",
   "Fiecare genă contribuie individual redus, dar combinat pot determina 60% din nivelul TA.",
   "Textul indică opusul: un asemenea istoric ar trebui să determine o evaluare completă pentru cauze secundare.",
   "Elementele de mediu şi stilul de viaţă sunt descrise ca mediind până la 40% din variabilitatea TA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reunește patru fapte cantitative și terminologice distincte, cu un singur distractor care inversează o regulă de alarmă clinică importantă."
  },
  "textbookExpressions": [
   "preferată terminologiei clasice",
   "0,5-1 mmHg"
  ]
 },
 {
  "id": "hta-adv-008",
  "topicId": "hta",
  "type": "CM",
  "stem": "Despre cauzele secundare de hipertensiune arterială sunt corecte afirmațiile:",
  "options": [
   "Cauzele secundare identificabile sunt prezente la aproximativ 10% dintre toți pacienții hipertensivi, proporție mai mare la cei sub 30 de ani",
   "Hiperaldosteronismul primar, apneea obstructivă de somn și obezitatea sunt considerate cele mai frecvente cauze de hipertensiune secundară",
   "Feocromocitomul se caracterizează prin palpitații, transpirații, pusee hipertensive și anxietate",
   "Hiperaldosteronismul primar se caracterizează prin potasiu seric crescut și un raport aldosteron/renină scăzut",
   "Sarcina este clasificată de text drept o cauză secundară obișnuită de hipertensiune arterială, similar feocromocitomului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cauzele secundare identificabile sunt prezente la aproximativ 10% dintre toți pacienții hipertensivi, proporție mai mare la cei sub 30 de ani — Corect: Cauzele secundare sunt prezente la 10% dintre pacienţi, proporţie mai mare sub 30 de ani.\n\nHiperaldosteronismul primar, apneea obstructivă de somn și obezitatea sunt considerate cele mai frecvente cauze de hipertensiune secundară — Corect: Aceste trei cauze sunt considerate cele mai frecvente cauze de hipertensiune secundară.\n\nFeocromocitomul se caracterizează prin palpitații, transpirații, pusee hipertensive și anxietate — Corect: Acesta este tabloul clinic clasic al feocromocitomului.\n\nHiperaldosteronismul primar se caracterizează prin potasiu seric crescut și un raport aldosteron/renină scăzut — Incorect: Textul indică opusul: potasiu scăzut şi raport aldosteron/renină crescut.\n\nSarcina este clasificată de text drept o cauză secundară obișnuită de hipertensiune arterială, similar feocromocitomului — Incorect: Textul precizează explicit că sarcina nu este de obicei considerată o cauză secundară.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1138, 1139, Hipertensiunea arterială secundară (pagini PDF: 283, 284).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1138,
    1139
   ],
   "pdfPages": [
    283,
    284
   ],
   "section": "Hipertensiunea arterială secundară"
  },
  "learningObjective": "Recunoașterea frecvenței relative și a tabloului clinic caracteristic al principalelor cauze secundare de hipertensiune.",
  "optionRationales": [
   "Cauzele secundare sunt prezente la 10% dintre pacienţi, proporţie mai mare sub 30 de ani.",
   "Aceste trei cauze sunt considerate cele mai frecvente cauze de hipertensiune secundară.",
   "Acesta este tabloul clinic clasic al feocromocitomului.",
   "Textul indică opusul: potasiu scăzut şi raport aldosteron/renină crescut.",
   "Textul precizează explicit că sarcina nu este de obicei considerată o cauză secundară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează un raport biochimic caracteristic (K/aldosteron-renină) și extinde greșit o excepție explicită (sarcina) la statutul unei cauze secundare clasice."
  },
  "textbookExpressions": [
   "hiperaldosteronismul primar",
   "apneea obstructivă de somn"
  ]
 },
 {
  "id": "hta-adv-009",
  "topicId": "hta",
  "type": "CM",
  "stem": "Despre clasificarea retinopatiei hipertensive sunt corecte afirmațiile:",
  "options": [
   "Forma ușoară include îngustarea arteriolară generalizată, îngustarea focală arteriolară și încrucișarea arteriovenoasă, cu asociere modestă cu evenimentele cardiovasculare",
   "Forma moderată include hemoragii, microanevrisme, pete cu aspect de vată și exsudate dure, cu asociere puternică cu evenimentele cardiovasculare",
   "Forma severă se definește prin semnele formei moderate, plus edem papilar, cu asociere puternică cu accidentele vasculare cerebrale și decesul",
   "Clasificarea actuală păstrează cele patru fenotipuri originale ale sistemului Keith-Wagener-Barker, fără nicio modificare",
   "Edemul papilar reprezintă un semn caracteristic al formei ușoare de retinopatie hipertensivă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Forma ușoară include îngustarea arteriolară generalizată, îngustarea focală arteriolară și încrucișarea arteriovenoasă, cu asociere modestă cu evenimentele cardiovasculare — Corect: Aceste semne definesc forma uşoară, cu asociere modestă.\n\nForma moderată include hemoragii, microanevrisme, pete cu aspect de vată și exsudate dure, cu asociere puternică cu evenimentele cardiovasculare — Corect: Aceste semne definesc forma moderată, cu asociere puternică.\n\nForma severă se definește prin semnele formei moderate, plus edem papilar, cu asociere puternică cu accidentele vasculare cerebrale și decesul — Corect: Forma severă adaugă edemul papilar la semnele formei moderate, cu cea mai puternică asociere.\n\nClasificarea actuală păstrează cele patru fenotipuri originale ale sistemului Keith-Wagener-Barker, fără nicio modificare — Incorect: O evaluare mai recentă a redus clasificarea de la patru la trei clase.\n\nEdemul papilar reprezintă un semn caracteristic al formei ușoare de retinopatie hipertensivă — Incorect: Edemul papilar este semnul distinctiv al formei severe, nu al celei uşoare.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1140, Leziunile organelor țintă induse de hipertensiune — Ochii (pagini PDF: 285).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1140
   ],
   "pdfPages": [
    285
   ],
   "section": "Leziunile organelor țintă induse de hipertensiune — Ochii"
  },
  "learningObjective": "Recunoașterea celor trei clase de retinopatie hipertensivă și a severității asocierii lor cu evenimentele cardiovasculare.",
  "optionRationales": [
   "Aceste semne definesc forma uşoară, cu asociere modestă.",
   "Aceste semne definesc forma moderată, cu asociere puternică.",
   "Forma severă adaugă edemul papilar la semnele formei moderate, cu cea mai puternică asociere.",
   "O evaluare mai recentă a redus clasificarea de la patru la trei clase.",
   "Edemul papilar este semnul distinctiv al formei severe, nu al celei uşoare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere ordonarea corectă a semnelor pe trei trepte de severitate și cunoașterea revizuirii recente a clasificării originale în patru clase."
  },
  "textbookExpressions": [
   "asociere puternică",
   "edem papilar"
  ]
 },
 {
  "id": "hta-adv-010",
  "topicId": "hta",
  "type": "CM",
  "stem": "Despre evaluarea leziunilor de organ țintă cardiace și renale în hipertensiunea arterială sunt corecte afirmațiile:",
  "options": [
   "Criteriile ECG pentru hipertrofia ventriculului stâng au o sensibilitate modestă (20-50%), dar o specificitate mai bună (>90%)",
   "Imagistica cardiacă (ecocardiografie transtoracică, RMN cardiac) este mai sensibilă și specifică decât ECG pentru hipertrofia ventriculară stângă",
   "O reducere a RFG cu până la 10% la inițierea terapiei antihipertensive indică, de regulă, o leziune renală intrinsecă progresivă",
   "ECG-ul standard nu este recomandat de rutină la pacienții hipertensivi, din cauza costului ridicat",
   "Ecocardiografia transtoracică este mai puțin sensibilă decât ECG pentru estimarea masei ventriculului stâng"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Criteriile ECG pentru hipertrofia ventriculului stâng au o sensibilitate modestă (20-50%), dar o specificitate mai bună (>90%) — Corect: Aceasta este performanța diagnostică descrisă pentru criteriile ECG de hipertrofie ventriculară stângă.\n\nImagistica cardiacă (ecocardiografie transtoracică, RMN cardiac) este mai sensibilă și specifică decât ECG pentru hipertrofia ventriculară stângă — Corect: Imagistica cardiacă este descrisă ca mai sensibilă şi specifică decât ECG.\n\nO reducere a RFG cu până la 10% la inițierea terapiei antihipertensive indică, de regulă, o leziune renală intrinsecă progresivă — Incorect: Textul indică opusul: această reducere reflectă de obicei modificări hemodinamice intra-renale, nu o leziune intrinsecă, şi este de regulă permisă.\n\nECG-ul standard nu este recomandat de rutină la pacienții hipertensivi, din cauza costului ridicat — Incorect: ECG este recomandat la toţi pacienţii hipertensivi, fiind ieftin şi disponibil pe scară largă.\n\nEcocardiografia transtoracică este mai puțin sensibilă decât ECG pentru estimarea masei ventriculului stâng — Incorect: Textul indică opusul: ecocardiografia şi RMN cardiac sunt mai sensibile şi specifice decât ECG, nu mai puţin.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1140, Leziunile organelor țintă induse de hipertensiune — Cordul; Rinichii (pagini PDF: 285).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1140
   ],
   "pdfPages": [
    285
   ],
   "section": "Leziunile organelor țintă induse de hipertensiune — Cordul; Rinichii"
  },
  "learningObjective": "Compararea sensibilității și specificității ECG față de imagistica cardiacă, și interpretarea corectă a scăderii tranzitorii a RFG la inițierea tratamentului.",
  "optionRationales": [
   "Aceasta este performanța diagnostică descrisă pentru criteriile ECG de hipertrofie ventriculară stângă.",
   "Imagistica cardiacă este descrisă ca mai sensibilă şi specifică decât ECG.",
   "Textul indică opusul: această reducere reflectă de obicei modificări hemodinamice intra-renale, nu o leziune intrinsecă, şi este de regulă permisă.",
   "ECG este recomandat la toţi pacienţii hipertensivi, fiind ieftin şi disponibil pe scară largă.",
   "Textul indică opusul: ecocardiografia şi RMN cardiac sunt mai sensibile şi specifice decât ECG, nu mai puţin."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează interpretarea unui semn de rutină (scăderea RFG) dintr-un fenomen hemodinamic tolerat într-o falsă alarmă de leziune renală progresivă."
  },
  "textbookExpressions": [
   "toate au o sensibilitate",
   "hemodinamice intra-renale"
  ]
 },
 {
  "id": "hta-adv-011",
  "topicId": "hta",
  "type": "CM",
  "stem": "Privind beneficiile cuantificate ale reducerii tensiunii arteriale, conform meta-analizelor citate, sunt corecte afirmațiile:",
  "options": [
   "O reducere de 10/5 mmHg a TA este asociată cu o reducere de aproximativ 15% a mortalității de toate cauzele",
   "Aceeași reducere de 10/5 mmHg este asociată cu o reducere de 35% a accidentului vascular cerebral",
   "Un singur medicament antihipertensiv, în doză standard, reduce TA cu aproximativ 20/11 mmHg în hipertensiunea ușoară",
   "Trei medicamente antihipertensive administrate la jumătate din doza standard reduc TA cu aproximativ 20/11 mmHg",
   "Reducerea de 10/5 mmHg este asociată cu o reducere de 40% a insuficienței cardiace"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "O reducere de 10/5 mmHg a TA este asociată cu o reducere de aproximativ 15% a mortalității de toate cauzele — Corect: Reducerea de 10/5 mmHg este asociată cu o reducere de 15% a mortalităţii de toate cauzele.\n\nAceeași reducere de 10/5 mmHg este asociată cu o reducere de 35% a accidentului vascular cerebral — Corect: Aceeaşi reducere este asociată cu o reducere de 35% a AVC.\n\nUn singur medicament antihipertensiv, în doză standard, reduce TA cu aproximativ 20/11 mmHg în hipertensiunea ușoară — Incorect: Valoarea de 20/11 mmHg corespunde tripla terapie la jumătate de doză, nu monoterapiei standard, care reduce cu aproximativ 9/5 mmHg.\n\nTrei medicamente antihipertensive administrate la jumătate din doza standard reduc TA cu aproximativ 20/11 mmHg — Corect: Aceasta este reducerea descrisă pentru trei medicamente la jumătate din doza standard.\n\nReducerea de 10/5 mmHg este asociată cu o reducere de 40% a insuficienței cardiace — Corect: Reducerea de 10/5 mmHg este asociată cu o reducere de 40% a insuficienţei cardiace.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1140, Tratament — Beneficiile reducerii tensiunii arteriale (pagini PDF: 285).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1140
   ],
   "pdfPages": [
    285
   ],
   "section": "Tratament — Beneficiile reducerii tensiunii arteriale"
  },
  "learningObjective": "Diferențierea reducerii TA obținute prin monoterapie față de tripla terapie la doză redusă, și cuantificarea beneficiilor cardiovasculare ale reducerii de 10/5 mmHg.",
  "optionRationales": [
   "Reducerea de 10/5 mmHg este asociată cu o reducere de 15% a mortalităţii de toate cauzele.",
   "Aceeaşi reducere este asociată cu o reducere de 35% a AVC.",
   "Valoarea de 20/11 mmHg corespunde tripla terapie la jumătate de doză, nu monoterapiei standard, care reduce cu aproximativ 9/5 mmHg.",
   "Aceasta este reducerea descrisă pentru trei medicamente la jumătate din doza standard.",
   "Reducerea de 10/5 mmHg este asociată cu o reducere de 40% a insuficienţei cardiace."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amestecă valorile numerice ale monoterapiei cu cele ale tripla terapie la doză redusă, o confuzie facilă fără citire atentă a celor două scenarii."
  },
  "textbookExpressions": [
   "reducere de 10/5 mmHg",
   "20/11 mmHg"
  ]
 },
 {
  "id": "hta-adv-012",
  "topicId": "hta",
  "type": "CM",
  "stem": "Privind impactul cuantificat al modificărilor stilului de viață asupra TA sunt corecte afirmațiile:",
  "options": [
   "Exercițiile cardiovasculare regulate (30 minute zilnic) reduc TA, în medie, cu aproximativ 5 mmHg",
   "Creșterea consumului de fructe și legume, alături de reducerea grăsimilor saturate, reduce TA, în medie, cu aproximativ 10 mmHg",
   "Reducerea aportului de sare sub 6 g/zi reduce TA, în medie, cu aproximativ 5 mmHg",
   "Scăderea în greutate la pacienții supraponderali reduce TA, în medie, cu aproximativ 10 mmHg pentru fiecare kilogram pierdut",
   "Reducerea consumului de alcool sub 2 unități/zi reduce TA, în medie, cu aproximativ 10 mmHg"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Exercițiile cardiovasculare regulate (30 minute zilnic) reduc TA, în medie, cu aproximativ 5 mmHg — Corect: Exerciţiile cardiovasculare regulate reduc TA, în medie, cu 5 mmHg.\n\nCreșterea consumului de fructe și legume, alături de reducerea grăsimilor saturate, reduce TA, în medie, cu aproximativ 10 mmHg — Corect: Modificarea dietetică descrisă reduce TA, în medie, cu 10 mmHg.\n\nReducerea aportului de sare sub 6 g/zi reduce TA, în medie, cu aproximativ 5 mmHg — Corect: Reducerea sării sub 6 g/zi reduce TA, în medie, cu 5 mmHg.\n\nScăderea în greutate la pacienții supraponderali reduce TA, în medie, cu aproximativ 10 mmHg pentru fiecare kilogram pierdut — Incorect: Valoarea corectă este de 1 mmHg pentru fiecare kilogram pierdut, nu 10 mmHg.\n\nReducerea consumului de alcool sub 2 unități/zi reduce TA, în medie, cu aproximativ 10 mmHg — Incorect: Valoarea corectă pentru reducerea alcoolului sub 2 unităţi/zi este de 3 mmHg, nu 10 mmHg.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1142, Tratament — Modificarea stilului de viață (pagini PDF: 287).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1142
   ],
   "pdfPages": [
    287
   ],
   "section": "Tratament — Modificarea stilului de viață"
  },
  "learningObjective": "Reținerea magnitudinii comparative a efectului fiecărei modificări a stilului de viață asupra TA, conform Cadranului 31.4.",
  "optionRationales": [
   "Exerciţiile cardiovasculare regulate reduc TA, în medie, cu 5 mmHg.",
   "Modificarea dietetică descrisă reduce TA, în medie, cu 10 mmHg.",
   "Reducerea sării sub 6 g/zi reduce TA, în medie, cu 5 mmHg.",
   "Valoarea corectă este de 1 mmHg pentru fiecare kilogram pierdut, nu 10 mmHg.",
   "Valoarea corectă pentru reducerea alcoolului sub 2 unităţi/zi este de 3 mmHg, nu 10 mmHg."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Doi distractori exagerează de zece ori valorile reale ale scăderii ponderale și ale reducerii alcoolului, sub aparența unor cifre plauzibile."
  },
  "textbookExpressions": [
   "Exerciţii cardiovasculare regulate",
   "1 mmHg/kg"
  ]
 },
 {
  "id": "hta-adv-013",
  "topicId": "hta",
  "type": "CM",
  "stem": "Despre alegerea inițială a claselor de medicamente antihipertensive, conform ghidurilor citate, sunt corecte afirmațiile:",
  "options": [
   "Vârstnicii și descendenții negrilor africani, având un nivel scăzut al reninei, răspund mai puțin la IECA/ARA în monoterapie și beneficiază preferențial de blocante ale canalelor de calciu",
   "Pacienților albi mai tineri li se recomandă inițierea tratamentului cu un IECA sau un ARA",
   "IECA sunt, în general, mai bine tolerate decât ARA, cu apariție mai rară a tusei sau angioedemului",
   "Conform studiului PATHWAY-2, beta-blocantele reprezintă cel mai bun medicament de linia a patra pentru hipertensiunea rezistentă, fiind preferate spironolactonei",
   "Blocantele canalelor de calciu reprezintă prima linie recomandată pentru toți pacienții albi mai tineri, indiferent de alte caracteristici"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Vârstnicii și descendenții negrilor africani, având un nivel scăzut al reninei, răspund mai puțin la IECA/ARA în monoterapie și beneficiază preferențial de blocante ale canalelor de calciu — Corect: Nivelul scăzut al reninei explică răspunsul redus la IECA/ARA şi preferinţa pentru blocante de calciu în aceste grupuri.\n\nPacienților albi mai tineri li se recomandă inițierea tratamentului cu un IECA sau un ARA — Corect: Aceasta este recomandarea explicită pentru pacienţii albi mai tineri.\n\nIECA sunt, în general, mai bine tolerate decât ARA, cu apariție mai rară a tusei sau angioedemului — Incorect: Textul indică opusul: ARA sunt mai bine tolerate decât IECA.\n\nConform studiului PATHWAY-2, beta-blocantele reprezintă cel mai bun medicament de linia a patra pentru hipertensiunea rezistentă, fiind preferate spironolactonei — Incorect: PATHWAY-2 arată opusul: spironolactona este preferată beta- sau alfa-blocantelor ca linia a patra.\n\nBlocantele canalelor de calciu reprezintă prima linie recomandată pentru toți pacienții albi mai tineri, indiferent de alte caracteristici — Incorect: Pentru pacienţii albi mai tineri, prima linie recomandată este IECA sau ARA, nu blocantele de calciu.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1142, Tratament — Tratamentul medicamentos; Studiul PATHWAY-2 (pagini PDF: 287).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1142
   ],
   "pdfPages": [
    287
   ],
   "section": "Tratament — Tratamentul medicamentos; Studiul PATHWAY-2"
  },
  "learningObjective": "Aplicarea algoritmului bazat pe vârstă și etnie ca surogat pentru activitatea reninei, și identificarea medicamentului de linia a patra susținut de dovezi.",
  "optionRationales": [
   "Nivelul scăzut al reninei explică răspunsul redus la IECA/ARA şi preferinţa pentru blocante de calciu în aceste grupuri.",
   "Aceasta este recomandarea explicită pentru pacienţii albi mai tineri.",
   "Textul indică opusul: ARA sunt mai bine tolerate decât IECA.",
   "PATHWAY-2 arată opusul: spironolactona este preferată beta- sau alfa-blocantelor ca linia a patra.",
   "Pentru pacienţii albi mai tineri, prima linie recomandată este IECA sau ARA, nu blocantele de calciu."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează atât raportul de tolerabilitate IECA/ARA, cât și concluzia centrală a studiului PATHWAY-2 citat explicit în text."
  },
  "textbookExpressions": [
   "mai bine tolerate",
   "PATHWAY-2"
  ]
 },
 {
  "id": "hta-adv-014",
  "topicId": "hta",
  "type": "CM",
  "stem": "Privind abordarea hipertensiunii arteriale în perioada perioperatorie sunt corecte afirmațiile:",
  "options": [
   "Hipertensiunea arterială necontrolată este un motiv comun pentru anularea intervențiilor chirurgicale elective",
   "Nu există dovezi clare că reducerea bruscă, preoperatorie, a unei TA severe la valori controlate este benefică",
   "Hipertensiunea necontrolată reprezintă, de asemenea, un motiv pentru a întârzia o intervenție chirurgicală de urgență",
   "Este de obicei necesar să se continue medicamentele antihipertensive pe toată perioada perioperatorie, cu excepții specifice",
   "Activarea simpatică din timpul inducției anesteziei generale determină, de regulă, o scădere a TA"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Hipertensiunea arterială necontrolată este un motiv comun pentru anularea intervențiilor chirurgicale elective — Corect: Hipertensiunea necontrolată este descrisă explicit ca motiv comun de anulare a chirurgiei elective.\n\nNu există dovezi clare că reducerea bruscă, preoperatorie, a unei TA severe la valori controlate este benefică — Corect: Textul precizează explicit absența unor dovezi clare de beneficiu al reducerii bruşte preoperatorii.\n\nHipertensiunea necontrolată reprezintă, de asemenea, un motiv pentru a întârzia o intervenție chirurgicală de urgență — Incorect: Textul indică opusul: nu este un motiv pentru a întârzia o intervenţie de urgenţă.\n\nEste de obicei necesar să se continue medicamentele antihipertensive pe toată perioada perioperatorie, cu excepții specifice — Corect: Continuarea medicaţiei antihipertensive este de obicei necesară, cu excepţii precizate (ex. leziune renală acută).\n\nActivarea simpatică din timpul inducției anesteziei generale determină, de regulă, o scădere a TA — Incorect: Inducţia determină, de regulă, o creştere a TA cu 30 mmHg sau mai mult, nu o scădere.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1143, 1144, Abordarea hipertensiunii arteriale în spital — Perioada perioperatorie (pagini PDF: 288, 289).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1143,
    1144
   ],
   "pdfPages": [
    288,
    289
   ],
   "section": "Abordarea hipertensiunii arteriale în spital — Perioada perioperatorie"
  },
  "learningObjective": "Diferențierea conduitei preoperatorii pentru chirurgia electivă față de cea de urgență și recunoașterea efectului simpatic al inducției anestezice.",
  "optionRationales": [
   "Hipertensiunea necontrolată este descrisă explicit ca motiv comun de anulare a chirurgiei elective.",
   "Textul precizează explicit absența unor dovezi clare de beneficiu al reducerii bruşte preoperatorii.",
   "Textul indică opusul: nu este un motiv pentru a întârzia o intervenţie de urgenţă.",
   "Continuarea medicaţiei antihipertensive este de obicei necesară, cu excepţii precizate (ex. leziune renală acută).",
   "Inducţia determină, de regulă, o creştere a TA cu 30 mmHg sau mai mult, nu o scădere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distinge conduita electivă de cea de urgență, o distincție pe care mulți ar simplifica-o greșit ca fiind identică."
  },
  "textbookExpressions": [
   "motiv comun",
   "cu 30 mmHg"
  ]
 },
 {
  "id": "hta-adv-015",
  "topicId": "hta",
  "type": "CM",
  "stem": "Despre managementul urgențelor hipertensive, conform Cadranului 31.7, sunt corecte afirmațiile:",
  "options": [
   "În disecția acută de aortă, ținta terapeutică imediată include reducerea TA sistolice la 100-120 mmHg și a frecvenței cardiace la 50-60 bătăi/minut",
   "În edemul pulmonar acut, ținta este reducerea imediată a TA sistolice sub 140 mmHg",
   "În hipertensiunea malignă, ținta este reducerea cu 25% a tensiunii arteriale medii în câteva ore, nu o normalizare imediată",
   "În pre-eclampsie, ținta este reducerea imediată a TA sistolice sub 160 mmHg și a celei diastolice sub 105 mmHg",
   "Nitroglicerina sublinguală și nifedipina reprezintă terapiile standard recomandate pentru orice creștere tensională la pacienții internați, indiferent de context"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "În disecția acută de aortă, ținta terapeutică imediată include reducerea TA sistolice la 100-120 mmHg și a frecvenței cardiace la 50-60 bătăi/minut — Corect: Acestea sunt ținta de TAS şi de frecvenţă cardiacă specificate pentru disecţia acută de aortă.\n\nÎn edemul pulmonar acut, ținta este reducerea imediată a TA sistolice sub 140 mmHg — Corect: Aceasta este ţinta specificată pentru edemul pulmonar acut.\n\nÎn hipertensiunea malignă, ținta este reducerea cu 25% a tensiunii arteriale medii în câteva ore, nu o normalizare imediată — Corect: Hipertensiunea malignă necesită o reducere graduală de 25% a TAM, nu o normalizare bruscă.\n\nÎn pre-eclampsie, ținta este reducerea imediată a TA sistolice sub 160 mmHg și a celei diastolice sub 105 mmHg — Corect: Acestea sunt ţintele specificate pentru pre-eclampsie.\n\nNitroglicerina sublinguală și nifedipina reprezintă terapiile standard recomandate pentru orice creștere tensională la pacienții internați, indiferent de context — Incorect: Textul precizează opusul: aceste medicamente cu durată scurtă de acţiune nu îşi găsesc justificare pentru hipertensiunea necomplicată la pacienţii internaţi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1145, 1144, Abordarea hipertensiunii arteriale în spital — Urgențele hipertensive (pagini PDF: 290, 289).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1145,
    1144
   ],
   "pdfPages": [
    290,
    289
   ],
   "section": "Abordarea hipertensiunii arteriale în spital — Urgențele hipertensive"
  },
  "learningObjective": "Diferențierea țintelor terapeutice specifice fiecărei urgențe hipertensive și recunoașterea situațiilor în care medicamentele cu durată scurtă de acțiune nu sunt indicate.",
  "optionRationales": [
   "Acestea sunt ținta de TAS şi de frecvenţă cardiacă specificate pentru disecţia acută de aortă.",
   "Aceasta este ţinta specificată pentru edemul pulmonar acut.",
   "Hipertensiunea malignă necesită o reducere graduală de 25% a TAM, nu o normalizare bruscă.",
   "Acestea sunt ţintele specificate pentru pre-eclampsie.",
   "Textul precizează opusul: aceste medicamente cu durată scurtă de acţiune nu îşi găsesc justificare pentru hipertensiunea necomplicată la pacienţii internaţi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reunește patru ținte terapeutice numerice distincte, specifice fiecărui sindrom, și inversează o regulă generală despre medicamentele cu durată scurtă de acțiune."
  },
  "textbookExpressions": [
   "urgenţe hipertensive",
   "nu îşi găsesc justificare"
  ]
 },
 {
  "id": "hta-adv-016",
  "topicId": "hta",
  "type": "CS",
  "stem": "Care este poziția actuală, conform textului, privind utilizarea aspirinei în doze mici pentru prevenția cardiovasculară primară la pacienții hipertensivi?",
  "options": [
   "Nu mai este recomandată la niciun grup de pacienți în acest scop, din cauza creșterii evenimentelor hemoragice care anulează beneficiul",
   "Este recomandată la toți pacienții cu risc cardiovascular total peste 1% pe an",
   "Este recomandată în mod specific la pacienții diabetici, la care beneficiul net este clar demonstrat",
   "Este recomandată de rutină înaintea inițierii oricărui tratament antihipertensiv",
   "Este recomandată doar la femeile cu antecedente de hipertensiune indusă de sarcină"
  ],
  "correct": [
   0
  ],
  "explanation": "Nu mai este recomandată la niciun grup de pacienți în acest scop, din cauza creșterii evenimentelor hemoragice care anulează beneficiul — Corect: Textul precizează explicit că aspirina nu mai este recomandată la niciun grup, întrucât beneficiul este anulat de riscul hemoragic.\n\nEste recomandată la toți pacienții cu risc cardiovascular total peste 1% pe an — Incorect: Pragul de 1%/an este folosit pentru statine, nu pentru recomandarea aspirinei.\n\nEste recomandată în mod specific la pacienții diabetici, la care beneficiul net este clar demonstrat — Incorect: Textul precizează că beneficiul nu s-a demonstrat nici la pacienţii diabetici.\n\nEste recomandată de rutină înaintea inițierii oricărui tratament antihipertensiv — Incorect: Aspirina nu este descrisă ca parte de rutină a inițierii tratamentului antihipertensiv.\n\nEste recomandată doar la femeile cu antecedente de hipertensiune indusă de sarcină — Incorect: Nu există o asemenea recomandare specifică în text.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1142, Tratament — Reducerea riscului cardiovascular total (pagini PDF: 287).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1142
   ],
   "pdfPages": [
    287
   ],
   "section": "Tratament — Reducerea riscului cardiovascular total"
  },
  "learningObjective": "Actualizarea poziției privind aspirina în prevenția primară, pe baza studiilor contemporane citate.",
  "optionRationales": [
   "Textul precizează explicit că aspirina nu mai este recomandată la niciun grup, întrucât beneficiul este anulat de riscul hemoragic.",
   "Pragul de 1%/an este folosit pentru statine, nu pentru recomandarea aspirinei.",
   "Textul precizează că beneficiul nu s-a demonstrat nici la pacienţii diabetici.",
   "Aspirina nu este descrisă ca parte de rutină a inițierii tratamentului antihipertensiv.",
   "Nu există o asemenea recomandare specifică în text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii reciclează praguri și grupuri populaționale reale din alte recomandări (statine, diabet) pentru a construi o afirmație plauzibilă dar nesusținută pentru aspirină."
  },
  "textbookExpressions": [
   "nu mai este recomandată",
   "beneficiile rezultate"
  ]
 },
 {
  "id": "hta-adv-017",
  "topicId": "hta",
  "type": "CS",
  "stem": "Cum este definită, de regulă, hipertensiunea arterială rezistentă?",
  "options": [
   "TA necontrolată, în pofida administrării a trei antihipertensive din clase diferite, recomandate de ghid",
   "TA necontrolată sub tratamentul cu un singur antihipertensiv",
   "TA controlată doar cu modificări ale stilului de viață, fără medicație",
   "TA crescută doar la cabinet, cu valori normale în ambulatoriu",
   "TA necontrolată la un pacient care nu a inițiat încă niciun tratament"
  ],
  "correct": [
   0
  ],
  "explanation": "TA necontrolată, în pofida administrării a trei antihipertensive din clase diferite, recomandate de ghid — Corect: Aceasta este definiția explicită din text pentru hipertensiunea arterială rezistentă.\n\nTA necontrolată sub tratamentul cu un singur antihipertensiv — Incorect: Lipsa de control sub un singur medicament nu corespunde definiției de rezistență.\n\nTA controlată doar cu modificări ale stilului de viață, fără medicație — Incorect: Controlul prin stilul de viață singur nu implică rezistență la tratamentul medicamentos.\n\nTA crescută doar la cabinet, cu valori normale în ambulatoriu — Incorect: Acest tablou descrie hipertensiunea de halat alb, nu rezistența la tratament.\n\nTA necontrolată la un pacient care nu a inițiat încă niciun tratament — Incorect: Absența oricărui tratament nu corespunde definiției de hipertensiune rezistentă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1137, Etiologia hipertensiunii arteriale — Hipertensiunea rezistentă (pagini PDF: 282).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1137
   ],
   "pdfPages": [
    282
   ],
   "section": "Etiologia hipertensiunii arteriale — Hipertensiunea rezistentă"
  },
  "learningObjective": "Aplicarea definiției operaționale a hipertensiunii arteriale rezistente, distinctă de simpla lipsă de control sub monoterapie sau netratată.",
  "optionRationales": [
   "Aceasta este definiția explicită din text pentru hipertensiunea arterială rezistentă.",
   "Lipsa de control sub un singur medicament nu corespunde definiției de rezistență.",
   "Controlul prin stilul de viață singur nu implică rezistență la tratamentul medicamentos.",
   "Acest tablou descrie hipertensiunea de halat alb, nu rezistența la tratament.",
   "Absența oricărui tratament nu corespunde definiției de hipertensiune rezistentă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii propun tablouri clinice reale din alte secțiuni ale capitolului (halat alb, netratat) drept variante ale definiției de rezistență, ușor de confundat fără citire precisă."
  },
  "textbookExpressions": [
   "hipertensiune arterială rezistentă",
   "trei antihipertensive din clase diferite"
  ]
 },
 {
  "id": "hta-adv-020",
  "topicId": "hta",
  "type": "CM",
  "stem": "Valorile prag de diagnostic ale hipertensiunii, în Figura 31.2, sunt:",
  "options": [
   "Sub 80 de ani: >140 sau >90 mmHg la cabinet, ori >135 sau >85 mmHg în ambulator sau la domiciliu",
   "Peste 80 de ani: >160 sau >90 mmHg la cabinet, ori >150 sau >85 mmHg în ambulator sau la domiciliu",
   "În Regatul Unit, țintele sunt <140/90 mmHg sub 80 de ani și <150/90 mmHg peste 80 de ani",
   "Determinarea la cabinet este metoda cea mai validată; studiile cu antihipertensive au folosit-o pentru includere și titrarea către ținte",
   "Pragurile sunt identice sub și peste 80 de ani: >180/110 mmHg atât la cabinet cât și acasă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Sub 80 de ani: >140 sau >90 mmHg la cabinet, ori >135 sau >85 mmHg în ambulator sau la domiciliu — Corect: Perechea 140/90 cabinet și 135/85 extra-cabinet este a adulților sub 80 de ani.\n\nPeste 80 de ani: >160 sau >90 mmHg la cabinet, ori >150 sau >85 mmHg în ambulator sau la domiciliu — Corect: 160/90 cabinet și 150/85 extra-cabinet sunt ale celor peste 80 de ani.\n\nÎn Regatul Unit, țintele sunt <140/90 mmHg sub 80 de ani și <150/90 mmHg peste 80 de ani — Corect: Țintele UK 140/90 și 150/90 completează figura.\n\nDeterminarea la cabinet este metoda cea mai validată; studiile cu antihipertensive au folosit-o pentru includere și titrarea către ținte — Corect: Validarea cabinetului pentru trialuri este din același paragraf de măsurare.\n\nPragurile sunt identice sub și peste 80 de ani: >180/110 mmHg atât la cabinet cât și acasă — Incorect: Pragurile diferă după vârstă; 180/110 nu este pragul de diagnostic din figură.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1135, Figura 31.2 — Valori prag și ținte (pagini PDF: 280).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1135
   ],
   "pdfPages": [
    280
   ],
   "section": "Figura 31.2 — Valori prag și ținte"
  },
  "learningObjective": "Aplicarea pragurilor distincte sub/peste 80 de ani, a țintelor NICE 140/90 versus 150/90 și a validării măsurătorii de cabinet.",
  "optionRationales": [
   "Perechea 140/90 cabinet și 135/85 extra-cabinet este a adulților sub 80 de ani.",
   "160/90 cabinet și 150/85 extra-cabinet sunt ale celor peste 80 de ani.",
   "Țintele UK 140/90 și 150/90 completează figura.",
   "Validarea cabinetului pentru trialuri este din același paragraf de măsurare.",
   "Pragurile diferă după vârstă; 180/110 nu este pragul de diagnostic din figură."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul unifică pragurile celor două vârste la 180/110, anulând distincția centrală a figurii."
  },
  "textbookExpressions": [
   ">140 sau >90",
   ">160 sau >90"
  ]
 },
 {
  "id": "hta-adv-021",
  "topicId": "hta",
  "type": "CM",
  "stem": "Trendul internațional al țintelor tensionale, față de practica din Regatul Unit, este descris astfel:",
  "options": [
   "Trendul internațional este să se atingă valori <130/80 mmHg la toți pacienții, dacă sunt tolerate",
   "În Regatul Unit, țintele rămân <140/90 mmHg sub 80 de ani și <150/90 mmHg peste 80 de ani",
   "NICE a adoptat deja <120/70 mmHg ca țintă unică, abandonând pragul de 80 de ani",
   "Trendul internațional cere >160/90 mmHg ca țintă, nu ca prag de diagnostic",
   "Țintele UK și cele internaționale sunt identice: 180/110 mmHg"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Trendul internațional este să se atingă valori <130/80 mmHg la toți pacienții, dacă sunt tolerate — Corect: <130/80 la toți, dacă e tolerată, este trendul internațional din figură.\n\nÎn Regatul Unit, țintele rămân <140/90 mmHg sub 80 de ani și <150/90 mmHg peste 80 de ani — Corect: Cele două ținte UK pe vârstă sunt alăturate.\n\nNICE a adoptat deja <120/70 mmHg ca țintă unică, abandonând pragul de 80 de ani — Incorect: NICE păstrează 140/90 și 150/90, nu 120/70.\n\nTrendul internațional cere >160/90 mmHg ca țintă, nu ca prag de diagnostic — Incorect: 160/90 este prag de diagnostic peste 80 de ani, nu țintă.\n\nȚintele UK și cele internaționale sunt identice: 180/110 mmHg — Incorect: 180/110 nu figurează ca țintă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1135, Figura 31.2 — Ținte UK versus internaționale (pagini PDF: 280).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1135
   ],
   "pdfPages": [
    280
   ],
   "section": "Figura 31.2 — Ținte UK versus internaționale"
  },
  "learningObjective": "Contrastarea țintei internaționale <130/80 (dacă e tolerată) de țintele NICE diferențiate după 80 de ani.",
  "optionRationales": [
   "<130/80 la toți, dacă e tolerată, este trendul internațional din figură.",
   "Cele două ținte UK pe vârstă sunt alăturate.",
   "NICE păstrează 140/90 și 150/90, nu 120/70.",
   "160/90 este prag de diagnostic peste 80 de ani, nu țintă.",
   "180/110 nu figurează ca țintă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii confundă pragul de diagnostic 160/90 cu ținta și atribuie NICE o țintă 120/70 pe care figura o rezervă trendului intern <130/80."
  },
  "textbookExpressions": [
   "<130/80",
   "<150/90"
  ]
 },
 {
  "id": "hta-adv-022",
  "topicId": "hta",
  "type": "CM",
  "stem": "De la anii 1990, pragul de diagnostic și conduita după gradul hipertensiunii includ:",
  "options": [
   "Pragul general acceptat a fost TA de cabinet >140 mmHg sistolică sau >90 mmHg diastolică (oricare este depășită prima)",
   "Tratamentul a fost rezervat în mare parte hipertensiunii de gradul 2, unde dovezile pentru reducerea farmacologică sunt solide",
   "În gradul 1, s-a insistat pe stilul de viață, cu tratament imediat doar la risc CV total >1%/an sau la leziuni de organ țintă; medicația se recomandă dacă TA nu se normalizează după 3-12 luni de măsuri tolerate",
   "Gradul 1 se tratează imediat farmacologic, stilul de viață fiind inutil",
   "Pragul de diagnostic din 1990 a fost 180/110 mmHg, 140/90 fiind abandonat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pragul general acceptat a fost TA de cabinet >140 mmHg sistolică sau >90 mmHg diastolică (oricare este depășită prima) — Corect: 140 sau 90, oricare prima, este pragul din 1990.\n\nTratamentul a fost rezervat în mare parte hipertensiunii de gradul 2, unde dovezile pentru reducerea farmacologică sunt solide — Corect: Rezervarea tratamentului pentru gradul 2 este explicită.\n\nÎn gradul 1, s-a insistat pe stilul de viață, cu tratament imediat doar la risc CV total >1%/an sau la leziuni de organ țintă; medicația se recomandă dacă TA nu se normalizează după 3-12 luni de măsuri tolerate — Corect: Riscul >1%/an, leziunile țintă și 3-12 luni sunt conduita gradului 1.\n\nGradul 1 se tratează imediat farmacologic, stilul de viață fiind inutil — Incorect: Textul rezervă imediatul farmacologic gradului 2 și grupurilor cu risc/leziuni.\n\nPragul de diagnostic din 1990 a fost 180/110 mmHg, 140/90 fiind abandonat — Incorect: 140/90 este tocmai pragul acceptat din 1990.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1138, Valori de referință și ținte — Prag și grade (pagini PDF: 283).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1138
   ],
   "pdfPages": [
    283
   ],
   "section": "Valori de referință și ținte — Prag și grade"
  },
  "learningObjective": "Separarea diagnosticului 140/90 de rezerva farmacologică a gradului 2 și de fereastra 3-12 luni a gradului 1.",
  "optionRationales": [
   "140 sau 90, oricare prima, este pragul din 1990.",
   "Rezervarea tratamentului pentru gradul 2 este explicită.",
   "Riscul >1%/an, leziunile țintă și 3-12 luni sunt conduita gradului 1.",
   "Textul rezervă imediatul farmacologic gradului 2 și grupurilor cu risc/leziuni.",
   "140/90 este tocmai pragul acceptat din 1990."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează gradul 1 versus 2 și mută pragul de diagnostic de la 140/90 la 180/110."
  },
  "textbookExpressions": [
   "140 mmHg",
   "3-12 luni"
  ]
 },
 {
  "id": "hta-adv-023",
  "topicId": "hta",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la studiul SPRINT și la ghidurile NICE, potrivit capitolului:",
  "options": [
   "SPRINT și meta-analizele au sugerat un beneficiu semnificativ al ghidării către <130/80 mmHg la toți pacienții; acest aspect este reflectat în cele mai multe ghiduri internaționale, dar nu încă în cele NICE din Marea Britanie",
   "NICE a fost primul ghid care a impus <130/80 mmHg, SPRINT infirând această țintă",
   "SPRINT a vizat 150/90 mmHg la tineri, NICE cerând <120/70 mmHg",
   "Ținta <130/80 mmHg este contraindicată de toate ghidurile internaționale",
   "NICE și SPRINT recomandă identic 180/110 mmHg"
  ],
  "correct": [
   0
  ],
  "explanation": "SPRINT și meta-analizele au sugerat un beneficiu semnificativ al ghidării către <130/80 mmHg la toți pacienții; acest aspect este reflectat în cele mai multe ghiduri internaționale, dar nu încă în cele NICE din Marea Britanie — Corect: Contrastul internațional versus NICE este fraza din paragraf.\n\nNICE a fost primul ghid care a impus <130/80 mmHg, SPRINT infirând această țintă — Incorect: Relația este inversată: internaționalele au preluat, NICE încă nu.\n\nSPRINT a vizat 150/90 mmHg la tineri, NICE cerând <120/70 mmHg — Incorect: SPRINT susține <130/80, nu 150/90 la tineri.\n\nȚinta <130/80 mmHg este contraindicată de toate ghidurile internaționale — Incorect: Majoritatea ghidurilor internaționale reflectă <130/80.\n\nNICE și SPRINT recomandă identic 180/110 mmHg — Incorect: 180/110 nu este ținta niciuneia.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1138, SPRINT versus NICE (pagini PDF: 283).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1138
   ],
   "pdfPages": [
    283
   ],
   "section": "SPRINT versus NICE"
  },
  "learningObjective": "Recunoașterea decalajului: evidența SPRINT pentru <130/80 adoptată internațional, încă nepreluată de NICE.",
  "optionRationales": [
   "Contrastul internațional versus NICE este fraza din paragraf.",
   "Relația este inversată: internaționalele au preluat, NICE încă nu.",
   "SPRINT susține <130/80, nu 150/90 la tineri.",
   "Majoritatea ghidurilor internaționale reflectă <130/80.",
   "180/110 nu este ținta niciuneia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează cine a adoptat <130/80 (internaționale versus NICE) după SPRINT."
  },
  "textbookExpressions": [
   "SPRINT",
   "130/80 mmHg"
  ]
 },
 {
  "id": "hta-adv-024",
  "topicId": "hta",
  "type": "CM",
  "stem": "La persoanele peste 80 de ani, ghidurile citate recomandă:",
  "options": [
   "Mai puține dovezi pentru tratamentul hipertensiunii ușoare; cele mai multe ghiduri tratează doar hipertensiunea moderată (gradul 2)",
   "Unele ghiduri (ex. NICE) sugerează o țintă mai laxă de cabinet, 150/90 mmHg, peste 80 de ani",
   "ESC/ESH tind să reducă TA de cabinet sub 130/80 mmHg la vârstnicii cu status biologic adecvat, dacă este tolerată; vârsta nu trebuie folosită ca substitut al fragilității",
   "Toți octogenarii, inclusiv cei fragili cu risc de căderi, au țintă unică 110/60 mmHg",
   "NICE impune <130/80 mmHg peste 80 de ani, ESC cerând 150/90 mmHg"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mai puține dovezi pentru tratamentul hipertensiunii ușoare; cele mai multe ghiduri tratează doar hipertensiunea moderată (gradul 2) — Corect: Limitarea la gradul 2 este prima frază.\n\nUnele ghiduri (ex. NICE) sugerează o țintă mai laxă de cabinet, 150/90 mmHg, peste 80 de ani — Corect: 150/90 NICE este ținta laxă citată.\n\nESC/ESH tind să reducă TA de cabinet sub 130/80 mmHg la vârstnicii cu status biologic adecvat, dacă este tolerată; vârsta nu trebuie folosită ca substitut al fragilității — Corect: ESC/ESH <130/80 dacă e tolerată și avertismentul despre fragilitate încheie paragraful.\n\nToți octogenarii, inclusiv cei fragili cu risc de căderi, au țintă unică 110/60 mmHg — Incorect: Fragilitatea și riscul de căderi cer prudență, nu 110/60 de rutină.\n\nNICE impune <130/80 mmHg peste 80 de ani, ESC cerând 150/90 mmHg — Incorect: Sensurile NICE versus ESC sunt inversate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1138, Hipertensiunea la peste 80 de ani (pagini PDF: 283).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1138
   ],
   "pdfPages": [
    283
   ],
   "section": "Hipertensiunea la peste 80 de ani"
  },
  "learningObjective": "Contrastarea țintei NICE 150/90 la octogenari de tendința ESC/ESH <130/80 la vâstnicul fit, fără a substitui vârsta fragilității.",
  "optionRationales": [
   "Limitarea la gradul 2 este prima frază.",
   "150/90 NICE este ținta laxă citată.",
   "ESC/ESH <130/80 dacă e tolerată și avertismentul despre fragilitate încheie paragraful.",
   "Fragilitatea și riscul de căderi cer prudență, nu 110/60 de rutină.",
   "Sensurile NICE versus ESC sunt inversate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează NICE 150/90 și ESC 130/80 și impun 110/60 fragilului, contrar avertismentului despre căderi."
  },
  "textbookExpressions": [
   "150/90 mmHg",
   "peste 80 de ani"
  ]
 },
 {
  "id": "hta-adv-025",
  "topicId": "hta",
  "type": "CM",
  "stem": "Substanțele frecvent implicate în creșterea tensiunii arteriale, enumerate în capitol, includ:",
  "options": [
   "Alcoolul, drogurile stimulante recreaționale, pilulele contraceptive orale și AINS",
   "Corticosteroizii, inhibitorii de calcineurină, inhibitorii VEGF și unele antidepresive (ex. venlafaxină)",
   "Statinele și ezetimibul, ca antihipertensive de primă linie",
   "IECA și ARA, care cresc TA prin retenție de sare",
   "Amlodipina, care produce HTA de novo prin vasoconstricție"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Alcoolul, drogurile stimulante recreaționale, pilulele contraceptive orale și AINS — Corect: Alcoolul, stimulentele, OCP și AINS deschid lista.\n\nCorticosteroizii, inhibitorii de calcineurină, inhibitorii VEGF și unele antidepresive (ex. venlafaxină) — Corect: Corticosteroizii, calcineurina, VEGF și venlafaxina o închid.\n\nStatinele și ezetimibul, ca antihipertensive de primă linie — Incorect: Statinele țin de riscul CV, nu de creșterea TA.\n\nIECA și ARA, care cresc TA prin retenție de sare — Incorect: IECA/ARA scad TA.\n\nAmlodipina, care produce HTA de novo prin vasoconstricție — Incorect: Amlodipina este antihipertensiv (edem, nu HTA de novo).\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1138, Medicamente și droguri care cresc TA (pagini PDF: 283).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1138
   ],
   "pdfPages": [
    283
   ],
   "section": "Medicamente și droguri care cresc TA"
  },
  "learningObjective": "Recunoașterea listei (alcool, OCP, AINS, steroizi, calcineurină, VEGF, venlafaxină), distinct de antihipertensivele și hipolipemiantele din același capitol.",
  "optionRationales": [
   "Alcoolul, stimulentele, OCP și AINS deschid lista.",
   "Corticosteroizii, calcineurina, VEGF și venlafaxina o închid.",
   "Statinele țin de riscul CV, nu de creșterea TA.",
   "IECA/ARA scad TA.",
   "Amlodipina este antihipertensiv (edem, nu HTA de novo)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii plasează IECA, amlodipina și statinele pe lista de substanțe care cresc TA."
  },
  "textbookExpressions": [
   "venlafaxină",
   "inhibitorii de calcineurină"
  ]
 },
 {
  "id": "hta-adv-026",
  "topicId": "hta",
  "type": "CS",
  "stem": "Primul studiu Veterans Administration Cooperation, citat în capitol, a randomizat:",
  "options": [
   "Pacienți cu TA diastolică 115-129 mmHg către tratament activ versus placebo; după standardele moderne aceasta ar fi hipertensiune severă, dar a demonstrat beneficiul scăderii TA",
   "Pacienți cu TA 120/70 mmHg, fără a găsi vreun beneficiu",
   "Doar octogenari cu 150/90 mmHg, anticipând NICE",
   "Hipertensiune de halat alb, fără braț placebo",
   "Diastolică 70-80 mmHg, considerată deja urgență hipertensivă"
  ],
  "correct": [
   0
  ],
  "explanation": "Pacienți cu TA diastolică 115-129 mmHg către tratament activ versus placebo; după standardele moderne aceasta ar fi hipertensiune severă, dar a demonstrat beneficiul scăderii TA — Corect: 115-129 mmHg diastolic, activ versus placebo și calificarea de severă modernă sunt din paragraf.\n\nPacienți cu TA 120/70 mmHg, fără a găsi vreun beneficiu — Incorect: 120/70 nu a fost populația Veterans.\n\nDoar octogenari cu 150/90 mmHg, anticipând NICE — Incorect: Studiul nu este un trial NICE la octogenari.\n\nHipertensiune de halat alb, fără braț placebo — Incorect: Nu este un studiu de halat alb.\n\nDiastolică 70-80 mmHg, considerată deja urgență hipertensivă — Incorect: 70-80 mmHg diastolic nu este pragul Veterans.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1138, Veterans Administration Cooperation (pagini PDF: 283).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1138
   ],
   "pdfPages": [
    283
   ],
   "section": "Veterans Administration Cooperation"
  },
  "learningObjective": "Reținerea ferestrei diastolice 115-129 mmHg ca hipertensiune severă după standarde moderne, totuși prima demonstrație de beneficiu.",
  "optionRationales": [
   "115-129 mmHg diastolic, activ versus placebo și calificarea de severă modernă sunt din paragraf.",
   "120/70 nu a fost populația Veterans.",
   "Studiul nu este un trial NICE la octogenari.",
   "Nu este un studiu de halat alb.",
   "70-80 mmHg diastolic nu este pragul Veterans."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută populația Veterans de la 115-129 mmHg diastolic la praguri moderne de diagnostic sau de urgență."
  },
  "textbookExpressions": [
   "115-129 mmHg",
   "Veterans Administration"
  ]
 },
 {
  "id": "hta-adv-027",
  "topicId": "hta",
  "type": "CM",
  "stem": "În pofida instrumentelor și tratamentelor disponibile, controlul tensional:",
  "options": [
   "Are o rată de sub 50% sub valorile țintă, în majoritatea populațiilor",
   "Rămâne în centrul preocupărilor locale, naționale și internaționale",
   "Depășește 95% în majoritatea populațiilor, problema fiind rezolvată",
   "Este relevant doar în urgențele hipertensive, nu în ambulator",
   "Nu constituie o preocupare de sănătate publică, costurile fiind neglijabile"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Are o rată de sub 50% sub valorile țintă, în majoritatea populațiilor — Corect: Sub 50% este cifra din paragraf.\n\nRămâne în centrul preocupărilor locale, naționale și internaționale — Corect: Centrul preocupărilor pe trei niveluri este explicit.\n\nDepășește 95% în majoritatea populațiilor, problema fiind rezolvată — Incorect: Textul spune sub 50%, nu peste 95%.\n\nEste relevant doar în urgențele hipertensive, nu în ambulator — Incorect: Majoritatea cazurilor sunt tratate în ambulator.\n\nNu constituie o preocupare de sănătate publică, costurile fiind neglijabile — Incorect: Costurile anuale depășesc 1 miliard de lire în UK.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1134, Introducere — Controlul tensional (pagini PDF: 279).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1134
   ],
   "pdfPages": [
    279
   ],
   "section": "Introducere — Controlul tensional"
  },
  "learningObjective": "Reținerea ratei de control sub 50% ca problemă persistentă de sănătate publică.",
  "optionRationales": [
   "Sub 50% este cifra din paragraf.",
   "Centrul preocupărilor pe trei niveluri este explicit.",
   "Textul spune sub 50%, nu peste 95%.",
   "Majoritatea cazurilor sunt tratate în ambulator.",
   "Costurile anuale depășesc 1 miliard de lire în UK."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă eșecul de control sub 50% într-un succes de 95% sau într-o problemă doar de urgență."
  },
  "textbookExpressions": [
   "sub 50%",
   "valorilor ţintă"
  ]
 },
 {
  "id": "hta-adv-028",
  "topicId": "hta",
  "type": "CM",
  "stem": "Hipertensiunea ca boală a îmbătrânirii, în datele de deschidere:",
  "options": [
   "Este rară la copii și adolescenți",
   "Diagnosticarea sub 30 de ani necesită o evaluare atentă a posibilelor cauze secundare",
   "Costurile anuale ale tratamentului depășesc 1 miliard de lire în Marea Britanie",
   "Majoritatea cazurilor sunt tratate în ambulator, serviciile de specialitate fiind rezervate cauzelor secundare sau fenotipurilor problematice",
   "Este boala dominantă a copilului mic, cauzele secundare fiind rare sub 30 de ani"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este rară la copii și adolescenți — Corect: Raritatea la copii/adolescenți este enunțată.\n\nDiagnosticarea sub 30 de ani necesită o evaluare atentă a posibilelor cauze secundare — Corect: Evaluarea secundară sub 30 de ani este cerută.\n\nCosturile anuale ale tratamentului depășesc 1 miliard de lire în Marea Britanie — Corect: 1 miliard de lire este cifra UK.\n\nMajoritatea cazurilor sunt tratate în ambulator, serviciile de specialitate fiind rezervate cauzelor secundare sau fenotipurilor problematice — Corect: Ambulatorul ca loc principal și specialitatea pentru secundare/fenotipuri sunt din același paragraf.\n\nEste boala dominantă a copilului mic, cauzele secundare fiind rare sub 30 de ani — Incorect: Relația vârstă–cauze secundare este inversată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1134, Introducere — Vârstă și costuri (pagini PDF: 279).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1134
   ],
   "pdfPages": [
    279
   ],
   "section": "Introducere — Vârstă și costuri"
  },
  "learningObjective": "Asocierea rarității pediatrice, a alarmei sub 30 de ani, a costului >1 miliard £ și a predominanței ambulatorii.",
  "optionRationales": [
   "Raritatea la copii/adolescenți este enunțată.",
   "Evaluarea secundară sub 30 de ani este cerută.",
   "1 miliard de lire este cifra UK.",
   "Ambulatorul ca loc principal și specialitatea pentru secundare/fenotipuri sunt din același paragraf.",
   "Relația vârstă–cauze secundare este inversată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează alarma de cauză secundară sub 30 de ani, în timp ce celelalte opțiuni cer vârstă, cost și locul de tratament."
  },
  "textbookExpressions": [
   "sub 30 de ani",
   "1 miliard"
  ]
 },
 {
  "id": "hta-adv-029",
  "topicId": "hta",
  "type": "CM",
  "stem": "În Cadranul 31.2, asocierile clinic–paraclinic ale unor cauze vasculare și endocrine includ:",
  "options": [
   "Coarctația de aortă — diferență de puls sau de TA între membrele superioare sau între superioare și inferioare; angiografie RMN/CT a întregii aorte",
   "Stenoza de arteră renală — deteriorare bruscă a funcției renale după IECA/ARA și edem pulmonar acut cu funcție cardiacă normală; angiografie renală",
   "Feocromocitomul — palpitații, transpirații, pusee, paloare, anxietate; metanefrine plasmatice, apoi localizare MIBG/RMN după alfa-blocadă adecvată",
   "Coarctația se confirmă prin metanefrine plasmatice, feocromocitomul prin diferența de puls braț-picior",
   "Stenoza de arteră renală se tratează prin suprarenalectomie laparoscopică, ca hiperaldosteronismul unilateral"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Coarctația de aortă — diferență de puls sau de TA între membrele superioare sau între superioare și inferioare; angiografie RMN/CT a întregii aorte — Corect: Diferența de puls/TA și angio aortei sunt ale coarctației.\n\nStenoza de arteră renală — deteriorare bruscă a funcției renale după IECA/ARA și edem pulmonar acut cu funcție cardiacă normală; angiografie renală — Corect: IRA post-IECA, edemul flash și angio renală sunt ale stenozei.\n\nFeocromocitomul — palpitații, transpirații, pusee, paloare, anxietate; metanefrine plasmatice, apoi localizare MIBG/RMN după alfa-blocadă adecvată — Corect: Clinica, metanefrinele, MIBG și alfa-blocada sunt ale feocromocitomului.\n\nCoarctația se confirmă prin metanefrine plasmatice, feocromocitomul prin diferența de puls braț-picior — Incorect: Testele sunt inversate între coarctație și pheo.\n\nStenoza de arteră renală se tratează prin suprarenalectomie laparoscopică, ca hiperaldosteronismul unilateral — Incorect: Suprarenalectomia aparține aldosteronomului, nu stenozei renale.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1139, Cadranul 31.2 — Cauze secundare (pagini PDF: 284).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1139
   ],
   "pdfPages": [
    284
   ],
   "section": "Cadranul 31.2 — Cauze secundare"
  },
  "learningObjective": "Perecherea semnelor (diferență de puls, IRA post-IECA, triadă pheo) cu testele specifice (angio aortă/renală, metanefrine), fără a amesteca rândurile.",
  "optionRationales": [
   "Diferența de puls/TA și angio aortei sunt ale coarctației.",
   "IRA post-IECA, edemul flash și angio renală sunt ale stenozei.",
   "Clinica, metanefrinele, MIBG și alfa-blocada sunt ale feocromocitomului.",
   "Testele sunt inversate între coarctație și pheo.",
   "Suprarenalectomia aparține aldosteronomului, nu stenozei renale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută metanefrinele, diferența de puls și suprarenalectomia între trei rânduri vecine ale aceluiași cadran."
  },
  "textbookExpressions": [
   "Coarctaţie de aortă",
   "Metanefrine plasmatice"
  ]
 },
 {
  "id": "hta-adv-030",
  "topicId": "hta",
  "type": "CM",
  "stem": "Hipertensiunea în raport cu sexul, etnia și urbanizarea, în datele de deschidere:",
  "options": [
   "Hormonii sexuali feminini par a proteja împotriva creșterii TA; femeile au valori mai mici până la menopauză",
   "După menopauză, atât prevalența hipertensiunii cât și valorile efective ale TA sunt aproximativ egale cu cele ale bărbaților",
   "Este mai frecventă în anumite grupuri etnice (rasa neagră, afro-caraibienii) și se asociază cu urbanizarea și imigrația",
   "Femeile au TA mai mare decât bărbații înainte de menopauză, etnia neinfluențând prevalența",
   "Urbanizarea scade TA, hormonii feminini crescând-o înainte de menopauză"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hormonii sexuali feminini par a proteja împotriva creșterii TA; femeile au valori mai mici până la menopauză — Corect: Protecția hormonală și valorile mai mici până la menopauză sunt din închiderea paginii precedente.\n\nDupă menopauză, atât prevalența hipertensiunii cât și valorile efective ale TA sunt aproximativ egale cu cele ale bărbaților — Corect: Egalizarea postmenopauză a prevalenței și a valorilor este fraza de deschidere.\n\nEste mai frecventă în anumite grupuri etnice (rasa neagră, afro-caraibienii) și se asociază cu urbanizarea și imigrația — Corect: Etnia neagră/afro-caraibiană și urbanizarea/imigrația completează epidemiologia.\n\nFemeile au TA mai mare decât bărbații înainte de menopauză, etnia neinfluențând prevalența — Incorect: Relația premenopauză este inversată.\n\nUrbanizarea scade TA, hormonii feminini crescând-o înainte de menopauză — Incorect: Urbanizarea se asociază cu creștere, nu cu scădere, a TA.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1134, 1133, Introducere — Sex, etnie, urbanizare (pagini PDF: 279, 278).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1134,
    1133
   ],
   "pdfPages": [
    279,
    278
   ],
   "section": "Introducere — Sex, etnie, urbanizare"
  },
  "learningObjective": "Contrastarea protecției hormonale premenopauză de egalizarea postmenopauză și de excesul din grupurile negre/afro-caraibiene.",
  "optionRationales": [
   "Protecția hormonală și valorile mai mici până la menopauză sunt din închiderea paginii precedente.",
   "Egalizarea postmenopauză a prevalenței și a valorilor este fraza de deschidere.",
   "Etnia neagră/afro-caraibiană și urbanizarea/imigrația completează epidemiologia.",
   "Relația premenopauză este inversată.",
   "Urbanizarea se asociază cu creștere, nu cu scădere, a TA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează protecția premenopauză și transformă urbanizarea din factor de risc în protecție."
  },
  "textbookExpressions": [
   "hormonii sexuali feminini",
   "până la menopauză"
  ]
 },
 {
  "id": "hta-adv-031",
  "topicId": "hta",
  "type": "CS",
  "stem": "Relația continuă dintre TA și evenimentele cardiovasculare, ilustrată în Figura 31.1, motivează, potrivit capitolului:",
  "options": [
   "O tendință către inițierea tratamentului chiar la valori-limită mai mici și către utilizarea riscului cardiovascular pentru a decide dacă reducerea TA este benefică în anumite cazuri particulare",
   "Abandonarea oricărui prag numeric, tratamentul începând doar după un eveniment coronarian",
   "Ignorarea riscului CV global, doar valoarea de cabinet numărând",
   "Inițierea doar la TA >220/140 mmHg, relația cu evenimentele fiind în trepte, nu continuă",
   "Utilizarea riscului CV doar după AVC, valorile-limită mai mici fiind abandonate"
  ],
  "correct": [
   0
  ],
  "explanation": "O tendință către inițierea tratamentului chiar la valori-limită mai mici și către utilizarea riscului cardiovascular pentru a decide dacă reducerea TA este benefică în anumite cazuri particulare — Corect: Tendința către valori-limită mai mici și decizia după riscul CV sunt fraza de după figură.\n\nAbandonarea oricărui prag numeric, tratamentul începând doar după un eveniment coronarian — Incorect: Textul păstrează praguri, dar le coboară; nu așteaptă evenimentul.\n\nIgnorarea riscului CV global, doar valoarea de cabinet numărând — Incorect: Riscul CV global este tocmai instrumentul de decizie.\n\nInițierea doar la TA >220/140 mmHg, relația cu evenimentele fiind în trepte, nu continuă — Incorect: Relația este continuă, nu în trepte de 220/140.\n\nUtilizarea riscului CV doar după AVC, valorile-limită mai mici fiind abandonate — Incorect: Valorile-limită mai mici sunt tocmai tendința descrisă, nu un abandon.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1133, 1134, Figura 31.1 — Relația continuă TA–CV (pagini PDF: 278, 279).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1133,
    1134
   ],
   "pdfPages": [
    278,
    279
   ],
   "section": "Figura 31.1 — Relația continuă TA–CV"
  },
  "learningObjective": "Recunoașterea consecinței clinice a relației continue: praguri mai joase plus decizie ghidată de riscul CV.",
  "optionRationales": [
   "Tendința către valori-limită mai mici și decizia după riscul CV sunt fraza de după figură.",
   "Textul păstrează praguri, dar le coboară; nu așteaptă evenimentul.",
   "Riscul CV global este tocmai instrumentul de decizie.",
   "Relația este continuă, nu în trepte de 220/140.",
   "Valorile-limită mai mici sunt tocmai tendința descrisă, nu un abandon."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă relația continuă din Fig. 31.1 într-un prag unic 220/140 sau într-un tratament doar post-eveniment."
  },
  "textbookExpressions": [
   "Fig. 31.1",
   "riscului cardiovascular"
  ]
 },
 {
  "id": "hta-adv-032",
  "topicId": "hta",
  "type": "CM",
  "stem": "În Cadranul 31.2, asocierile clinic–paraclinic ale unor cauze metabolice, endocrine și respiratorii includ:",
  "options": [
   "Apneea obstructivă de somn — somnolență diurnă (scor Epworth), sforăit, cefalee matinală; scor Mallampati 3 sau 4; puls-oximetrie nocturnă, apoi polisomnografie; CPAP sau dispozitiv de avansare mandibulară",
   "Hipercortizolismul — distribuție centripetă, hirsutism, striuri pigmentare; test supresiv la doze mici de dexametazonă (cortizolul ar trebui să scadă în mod normal)",
   "Hiperaldosteronismul primar — slăbiciune, K+ scăzut, raport aldosteron/renină crescut; suprarenalectomie laparoscopică dacă secreția este unilaterală",
   "Acromegalia — mâini/picioare mărite, separare interdentală, hemianopsie bitemporală; IGF-1 seric; rezecția glandei pituitare",
   "Apneea de somn se confirmă prin IGF-1, acromegalia prin scor Epworth, iar aldosteronomul prin CPAP"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Apneea obstructivă de somn — somnolență diurnă (scor Epworth), sforăit, cefalee matinală; scor Mallampati 3 sau 4; puls-oximetrie nocturnă, apoi polisomnografie; CPAP sau dispozitiv de avansare mandibulară — Corect: Epworth, Mallampati, oximetria/polisomnografia și CPAP sunt ale OSA.\n\nHipercortizolismul — distribuție centripetă, hirsutism, striuri pigmentare; test supresiv la doze mici de dexametazonă (cortizolul ar trebui să scadă în mod normal) — Corect: Fenotipul cushingoid și testul la dexametazonă sunt ale hipercortizolismului.\n\nHiperaldosteronismul primar — slăbiciune, K+ scăzut, raport aldosteron/renină crescut; suprarenalectomie laparoscopică dacă secreția este unilaterală — Corect: K scăzut, ARR crescut și laparoscopia unilaterală sunt ale aldosteronomului.\n\nAcromegalia — mâini/picioare mărite, separare interdentală, hemianopsie bitemporală; IGF-1 seric; rezecția glandei pituitare — Corect: IGF-1 și rezecția pituitară sunt ale acromegaliei.\n\nApneea de somn se confirmă prin IGF-1, acromegalia prin scor Epworth, iar aldosteronomul prin CPAP — Incorect: Testele sunt permutate între cele patru rânduri.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1139, Cadranul 31.2 — OSA, Cushing, aldosteron, acromegalie (pagini PDF: 284).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1139
   ],
   "pdfPages": [
    284
   ],
   "section": "Cadranul 31.2 — OSA, Cushing, aldosteron, acromegalie"
  },
  "learningObjective": "Perecherea semnelor (Epworth/Mallampati, centripet, K↓, IGF-1) cu testele specifice, fără a amesteca rândurile.",
  "optionRationales": [
   "Epworth, Mallampati, oximetria/polisomnografia și CPAP sunt ale OSA.",
   "Fenotipul cushingoid și testul la dexametazonă sunt ale hipercortizolismului.",
   "K scăzut, ARR crescut și laparoscopia unilaterală sunt ale aldosteronomului.",
   "IGF-1 și rezecția pituitară sunt ale acromegaliei.",
   "Testele sunt permutate între cele patru rânduri."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul permută IGF-1, Epworth și CPAP între patru rânduri vecine ale aceluiași cadran."
  },
  "textbookExpressions": [
   "scor Epworth",
   "IGF-1 seric"
  ]
 },
 {
  "id": "hta-adv-033",
  "topicId": "hta",
  "type": "CM",
  "stem": "Măsurile de stil de viață din Cadranul 31.2, dincolo de enumerarea medicamentelor care cresc TA, includ:",
  "options": [
   "Consiliere alimentară ghidată de excreția de sodiu în 24 de ore",
   "Reducerea consumului de alcool sub 14 unități/săptămână",
   "Alcoolul se crește peste 40 de unități/săptămână ca măsură antihipertensivă",
   "Excreția de sodiu în 24 de ore este superfluă, sarea neinfluențând TA",
   "Aderența se îmbunătățește prin evitarea implicării pacientului în decizie"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Consiliere alimentară ghidată de excreția de sodiu în 24 de ore — Corect: Excreția de Na pe 24 de ore ghidează consilierea alimentară.\n\nReducerea consumului de alcool sub 14 unități/săptămână — Corect: <14 unități/săptămână este ținta de alcool din cadran.\n\nAlcoolul se crește peste 40 de unități/săptămână ca măsură antihipertensivă — Incorect: Reducerea, nu creșterea, alcoolului scade TA.\n\nExcreția de sodiu în 24 de ore este superfluă, sarea neinfluențând TA — Incorect: Sodiul urinar este tocmai instrumentul de monitorizare a sării.\n\nAderența se îmbunătățește prin evitarea implicării pacientului în decizie — Incorect: Cadranul cere implicarea pacientului în decizia terapeutică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1139, Cadranul 31.2 — Stil de viață (pagini PDF: 284).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1139
   ],
   "pdfPages": [
    284
   ],
   "section": "Cadranul 31.2 — Stil de viață"
  },
  "learningObjective": "Reținerea sodiului urinar pe 24 de ore și a pragului de alcool <14 unități/săptămână.",
  "optionRationales": [
   "Excreția de Na pe 24 de ore ghidează consilierea alimentară.",
   "<14 unități/săptămână este ținta de alcool din cadran.",
   "Reducerea, nu creșterea, alcoolului scade TA.",
   "Sodiul urinar este tocmai instrumentul de monitorizare a sării.",
   "Cadranul cere implicarea pacientului în decizia terapeutică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează pragul de alcool <14 U și anulează sodiul urinar ca ghid dietetic."
  },
  "textbookExpressions": [
   "<14 unităţi",
   "Excreţia sodiului în 24h"
  ]
 },
 {
  "id": "hta-adv-034",
  "topicId": "hta",
  "type": "CM",
  "stem": "Valorile prag de diagnostic din Cadranul 31.3, pe grade, sunt:",
  "options": [
   "Gradul 1: 140-159 sau 90-99 mmHg la cabinet, respectiv 135-149 sau 85-94 mmHg în ambulator/domiciliu",
   "Gradul 2: 160-179 sau 100-109 mmHg la cabinet, respectiv 150-169 sau 95-104 mmHg extra-cabinet",
   "Hipertensiune severă: >180 sau >110 mmHg la cabinet, respectiv >170 sau >105 mmHg extra-cabinet; sistolică izolată: >140 cu diastolică <90 la cabinet",
   "Gradul 1 începe de la 180/110 mmHg, gradul 2 fiind sub 130/80 mmHg",
   "Sistolica izolată se definește prin diastolică >110 mmHg cu sistolică <130 mmHg"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Gradul 1: 140-159 sau 90-99 mmHg la cabinet, respectiv 135-149 sau 85-94 mmHg în ambulator/domiciliu — Corect: Perechea 140-159/90-99 și 135-149/85-94 este a gradului 1.\n\nGradul 2: 160-179 sau 100-109 mmHg la cabinet, respectiv 150-169 sau 95-104 mmHg extra-cabinet — Corect: 160-179/100-109 și 150-169/95-104 sunt ale gradului 2.\n\nHipertensiune severă: >180 sau >110 mmHg la cabinet, respectiv >170 sau >105 mmHg extra-cabinet; sistolică izolată: >140 cu diastolică <90 la cabinet — Corect: >180/>110, extra-cabinet >170/>105 și sistolica izolată >140/<90 închid tabelul.\n\nGradul 1 începe de la 180/110 mmHg, gradul 2 fiind sub 130/80 mmHg — Incorect: 180/110 este hipertensiunea severă, nu gradul 1; 130/80 este TA normală.\n\nSistolica izolată se definește prin diastolică >110 mmHg cu sistolică <130 mmHg — Incorect: Sistolica izolată are sistolică înaltă cu diastolică <90, nu invers.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1140, Cadranul 31.3 — Grade de hipertensiune (pagini PDF: 285).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1140
   ],
   "pdfPages": [
    285
   ],
   "section": "Cadranul 31.3 — Grade de hipertensiune"
  },
  "learningObjective": "Aplicarea ferestrelor 140-159 / 160-179 / >180 și a echivalentelor extra-cabinet, plus sistolica izolată >140/<90.",
  "optionRationales": [
   "Perechea 140-159/90-99 și 135-149/85-94 este a gradului 1.",
   "160-179/100-109 și 150-169/95-104 sunt ale gradului 2.",
   ">180/>110, extra-cabinet >170/>105 și sistolica izolată >140/<90 închid tabelul.",
   "180/110 este hipertensiunea severă, nu gradul 1; 130/80 este TA normală.",
   "Sistolica izolată are sistolică înaltă cu diastolică <90, nu invers."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează gradul 1 cu hipertensiunea severă și permută sistolică versus diastolică în forma izolată."
  },
  "textbookExpressions": [
   "140-159",
   "Hipertensiune sistolică izolată"
  ]
 },
 {
  "id": "hta-adv-035",
  "topicId": "hta",
  "type": "CM",
  "stem": "Aderența la tratamentul antihipertensiv, în datele din capitol, se caracterizează prin:",
  "options": [
   "Tehnicile de analiză a medicamentului în plasmă sau urină arată o corelație slabă a chestionarelor/reînnoirii rețetelor cu prezența obiectivă a substanței",
   "Până la două treimi dintre pacienții aflați sub tratament de specialitate nu își administrează, parțial sau total, medicamentele",
   "Controlul tensional obținut doar după o perioadă lungă (>6 luni) asociază risc cardiovascular ridicat, de unde tendința de a abandona monoterapia inițială",
   "Ghidurile ESH/ESC sugerează inițierea cu o combinație în o singură pilulă, asocierile îmbunătățind aderența",
   "Aderența depășește 95% în centrele de specialitate, monoterapia rămânând superioară combinațiilor"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Tehnicile de analiză a medicamentului în plasmă sau urină arată o corelație slabă a chestionarelor/reînnoirii rețetelor cu prezența obiectivă a substanței — Corect: Corelația slabă chestionar versus plasmă/urină este explicită.\n\nPână la două treimi dintre pacienții aflați sub tratament de specialitate nu își administrează, parțial sau total, medicamentele — Corect: Cifra de până la două treimi este din același paragraf.\n\nControlul tensional obținut doar după o perioadă lungă (>6 luni) asociază risc cardiovascular ridicat, de unde tendința de a abandona monoterapia inițială — Corect: >6 luni și abandonul monoterapiei inițiale sunt argumentul de risc.\n\nGhidurile ESH/ESC sugerează inițierea cu o combinație în o singură pilulă, asocierile îmbunătățind aderența — Corect: Pilula combinată ESH/ESC închide recomandarea.\n\nAderența depășește 95% în centrele de specialitate, monoterapia rămânând superioară combinațiilor — Incorect: Textul dă până la două treimi non-aderenți, nu 95% aderenți.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1142, Aderența — Combinații și monoterapie (pagini PDF: 287).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1142
   ],
   "pdfPages": [
    287
   ],
   "section": "Aderența — Combinații și monoterapie"
  },
  "learningObjective": "Integrarea celor două treimi non-aderente, a pragului >6 luni și a pilulei combinate ESH/ESC.",
  "optionRationales": [
   "Corelația slabă chestionar versus plasmă/urină este explicită.",
   "Cifra de până la două treimi este din același paragraf.",
   ">6 luni și abandonul monoterapiei inițiale sunt argumentul de risc.",
   "Pilula combinată ESH/ESC închide recomandarea.",
   "Textul dă până la două treimi non-aderenți, nu 95% aderenți."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul transformă eșecul de aderență (două treimi) într-un succes de 95% și reînvie monoterapia."
  },
  "textbookExpressions": [
   "două treimi",
   ">6 luni"
  ]
 },
 {
  "id": "hta-adv-036",
  "topicId": "hta",
  "type": "CS",
  "stem": "Denervarea simpatică renală, în descrierea abordărilor viitoare, constă în:",
  "options": [
   "Cateterizare endovasculară a nervilor simpatici renali din proximitatea arterei renale, cu eliberare de radiofrecvență, ultrasunete sau neurotoxine (alcool) pe peretele arterial, pentru a anula semnalizarea aferentă către centrii vasomotori",
   "Ablatie chirurgicală deschisă a nervilor vagi cervicali, ca antihipertensiv de primă linie la toți tinerii",
   "Stentarea carotidiană de rutină, care înlocuiește medicamentele",
   "Iradierea externă a hipotalamusului, fără acces endovascular",
   "Injectarea de spironolactonă în artera renală, ca substitut al cateterului"
  ],
  "correct": [
   0
  ],
  "explanation": "Cateterizare endovasculară a nervilor simpatici renali din proximitatea arterei renale, cu eliberare de radiofrecvență, ultrasunete sau neurotoxine (alcool) pe peretele arterial, pentru a anula semnalizarea aferentă către centrii vasomotori — Corect: Radiofrecvența, ultrasunetele și alcoolul pe peretele arterei renale sunt tehnica citată.\n\nAblatie chirurgicală deschisă a nervilor vagi cervicali, ca antihipertensiv de primă linie la toți tinerii — Incorect: Nervii vagi cervicali nu sunt ținta; procedura nu este primă linie universală.\n\nStentarea carotidiană de rutină, care înlocuiește medicamentele — Incorect: Stentarea carotidiană nu este metoda descrisă.\n\nIradierea externă a hipotalamusului, fără acces endovascular — Incorect: Accesul este endovascular renal, nu iradiere hipotalamică.\n\nInjectarea de spironolactonă în artera renală, ca substitut al cateterului — Incorect: Spironolactona rămâne medicament oral de linia a patra, nu injectat arterial.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1143, Abordări viitoare — Denervare renală (pagini PDF: 288).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1143
   ],
   "pdfPages": [
    288
   ],
   "section": "Abordări viitoare — Denervare renală"
  },
  "learningObjective": "Recunoașterea accesului endovascular pe artera renală și a celor trei forme de energie/neurotoxină.",
  "optionRationales": [
   "Radiofrecvența, ultrasunetele și alcoolul pe peretele arterei renale sunt tehnica citată.",
   "Nervii vagi cervicali nu sunt ținta; procedura nu este primă linie universală.",
   "Stentarea carotidiană nu este metoda descrisă.",
   "Accesul este endovascular renal, nu iradiere hipotalamică.",
   "Spironolactona rămâne medicament oral de linia a patra, nu injectat arterial."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută denervarea de pe artera renală pe vag, carotidă sau hipotalamus."
  },
  "textbookExpressions": [
   "Denervarea simpatică renală",
   "radio-frecvenţă"
  ]
 },
 {
  "id": "hta-adv-037",
  "topicId": "hta",
  "type": "CM",
  "stem": "Contraindicațiile și efectele adverse din Cadranul 31.6 pentru diuretice includ:",
  "options": [
   "Tiazid-like (indapamidă 1,5-2,5 mg): hiposodemie, hipopotasemie, hiperuricemie, hiperglicemie; contraindicație absolută — guta",
   "Economisitoare de potasiu (spironolactonă 25-50 mg): hiposodemie, hiperpotasemie, ginecomastie; contraindicații — RFGe <30 ml/min și K >5,0 mmol/L",
   "Tiazidele sunt indicate în gută, iar spironolactona este contraindicată în hiperaldosteronismul primar",
   "Indapamida are doza 120-480 mg, ca verapamilul, fără efect pe uricemie",
   "Spironolactona este evitată în hipertensiunea rezistentă, RFGe <30 fiind o indicație"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Tiazid-like (indapamidă 1,5-2,5 mg): hiposodemie, hipopotasemie, hiperuricemie, hiperglicemie; contraindicație absolută — guta — Corect: Lista de efecte și guta ca CI absolută sunt ale tiazid-like.\n\nEconomisitoare de potasiu (spironolactonă 25-50 mg): hiposodemie, hiperpotasemie, ginecomastie; contraindicații — RFGe <30 ml/min și K >5,0 mmol/L — Corect: RFGe <30 și K >5,0 sunt CI ale economisitoarelor; doza 25-50 mg este exemplul.\n\nTiazidele sunt indicate în gută, iar spironolactona este contraindicată în hiperaldosteronismul primar — Incorect: Guta contraindică tiazidul; hiperaldosteronismul este indicație specială a spironolactonei.\n\nIndapamida are doza 120-480 mg, ca verapamilul, fără efect pe uricemie — Incorect: 120-480 mg este doza de verapamil, nu de indapamidă.\n\nSpironolactona este evitată în hipertensiunea rezistentă, RFGe <30 fiind o indicație — Incorect: Hipertensiunea rezistentă este indicație specială; RFGe <30 este contraindicație.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1143, Cadranul 31.6 — Diuretice (pagini PDF: 288).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1143
   ],
   "pdfPages": [
    288
   ],
   "section": "Cadranul 31.6 — Diuretice"
  },
  "learningObjective": "Contrastarea profilelor tiazid (gută, uricemie) versus economisitor (RFGe <30, K >5,0), cu dozele indapamidă/spironolactonă.",
  "optionRationales": [
   "Lista de efecte și guta ca CI absolută sunt ale tiazid-like.",
   "RFGe <30 și K >5,0 sunt CI ale economisitoarelor; doza 25-50 mg este exemplul.",
   "Guta contraindică tiazidul; hiperaldosteronismul este indicație specială a spironolactonei.",
   "120-480 mg este doza de verapamil, nu de indapamidă.",
   "Hipertensiunea rezistentă este indicație specială; RFGe <30 este contraindicație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează guta și hiperaldosteronismul ca indicație versus contraindicație și mută doza de verapamil pe indapamidă."
  },
  "textbookExpressions": [
   "Gută",
   "K >5,0 mmol/L"
  ]
 },
 {
  "id": "hta-adv-038",
  "topicId": "hta",
  "type": "CM",
  "stem": "În perioada perioperatorie, dincolo de anularea chirurgiei elective, capitolul precizează:",
  "options": [
   "Inducția anesteziei generale poate crește TA cu 30 mmHg sau mai mult la hipertensivul netratat",
   "În menținerea anesteziei, TA tinde să scadă prin simpatoliză, vasodilatație și pierderea reglării baroreflexe; hipertensivul necontrolat este mai predispus la variații (hipo- sau hipertensiune)",
   "Postoperator, durerea și omiterea medicamentelor antihipertensive sunt cele mai frecvente cauze; fără leziune acută de organ, se urmărește menținerea sub 180/110 mmHg, parțial pentru riscul hemoragic",
   "Inducția scade TA cu 30 mmHg, menținerea crescând-o constant; postoperator se vizează 90/60 mmHg de rutină",
   "Hipertensiunea intraoperatorie se tratează înainte de a verifica calea aeriană sau oxigenul ventilatorului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Inducția anesteziei generale poate crește TA cu 30 mmHg sau mai mult la hipertensivul netratat — Corect: Creșterea de 30 mmHg la inducție este cifra citată.\n\nÎn menținerea anesteziei, TA tinde să scadă prin simpatoliză, vasodilatație și pierderea reglării baroreflexe; hipertensivul necontrolat este mai predispus la variații (hipo- sau hipertensiune) — Corect: Scăderea din menținere și variațiile hipertensivului necontrolat completează intraoperatorul.\n\nPostoperator, durerea și omiterea medicamentelor antihipertensive sunt cele mai frecvente cauze; fără leziune acută de organ, se urmărește menținerea sub 180/110 mmHg, parțial pentru riscul hemoragic — Corect: Durerea, omiterea medicației și <180/110 închid postoperatorul.\n\nInducția scade TA cu 30 mmHg, menținerea crescând-o constant; postoperator se vizează 90/60 mmHg de rutină — Incorect: Sensurile inducție versus menținere sunt inversate; 90/60 nu este ținta.\n\nHipertensiunea intraoperatorie se tratează înainte de a verifica calea aeriană sau oxigenul ventilatorului — Incorect: Textul cere mai întâi excluderea problemelor de cale aeriană/oxigen, hipertensiunea intraoperatorie ținând cel mai frecvent de dozarea inadecvată a anestezicului.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1144, Perioada perioperatorie — Intra- și postoperator (pagini PDF: 289).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1144
   ],
   "pdfPages": [
    289
   ],
   "section": "Perioada perioperatorie — Intra- și postoperator"
  },
  "learningObjective": "Secvența +30 mmHg la inducție, scăderea din menținere și ținta postoperatorie <180/110, fără TOD acută.",
  "optionRationales": [
   "Creșterea de 30 mmHg la inducție este cifra citată.",
   "Scăderea din menținere și variațiile hipertensivului necontrolat completează intraoperatorul.",
   "Durerea, omiterea medicației și <180/110 închid postoperatorul.",
   "Sensurile inducție versus menținere sunt inversate; 90/60 nu este ținta.",
   "Textul cere mai întâi excluderea problemelor de cale aeriană/oxigen, hipertensiunea intraoperatorie ținând cel mai frecvent de dozarea inadecvată a anestezicului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează +30 mmHg de la inducție la menținere și coboară ținta postoperatorie la 90/60."
  },
  "textbookExpressions": [
   "30 mmHg",
   "180/110 mmHg"
  ]
 },
 {
  "id": "hta-adv-039",
  "topicId": "hta",
  "type": "CM",
  "stem": "Hipertensiunea la pacientul internat în salon, fără urgență hipertensivă, se abordează astfel:",
  "options": [
   "În absența unei urgențe sau a unei comorbidități care cere tratament de urgență (ex. tromboliză în AVC acut), hipertensiunea necontrolată nu necesită tratament imediat",
   "Este uzual ca valorile constant peste 180/110 mmHg să fie abordate terapeutic, mai ales fără alt precipitant; se preferă titrarea terapiilor cronice, nu nitroglicerina sublinguală sau nifedipina",
   "NTG sublingual și nifedipina sunt de primă intenție la orice creștere tensională de salon",
   "Orice valoare peste 140/90 mmHg în salon impune vasodilatator cu durată scurtă",
   "Omiterea medicamentelor, durerea, distensia vezicală și sevrajul nu influențează TA de salon"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "În absența unei urgențe sau a unei comorbidități care cere tratament de urgență (ex. tromboliză în AVC acut), hipertensiunea necontrolată nu necesită tratament imediat — Corect: Absența tratamentului imediat fără urgență/comorbiditate este prima regulă.\n\nEste uzual ca valorile constant peste 180/110 mmHg să fie abordate terapeutic, mai ales fără alt precipitant; se preferă titrarea terapiilor cronice, nu nitroglicerina sublinguală sau nifedipina — Corect: 180/110 și preferința pentru terapiile cronice versus NTG/nifedipină sunt din închidere.\n\nNTG sublingual și nifedipina sunt de primă intenție la orice creștere tensională de salon — Incorect: Textul spune că NTG SL și nifedipina nu își găsesc justificare.\n\nOrice valoare peste 140/90 mmHg în salon impune vasodilatator cu durată scurtă — Incorect: 140/90 nu este pragul de salon citat; vasodilatatorul scurt este evitat.\n\nOmiterea medicamentelor, durerea, distensia vezicală și sevrajul nu influențează TA de salon — Incorect: Acești precipitanți sunt tocmai lista din paragraf.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1144, Tensiunea arterială în salonul de spital (pagini PDF: 289).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1144
   ],
   "pdfPages": [
    289
   ],
   "section": "Tensiunea arterială în salonul de spital"
  },
  "learningObjective": "Separarea pragului de îngrijorare 180/110 de interdicția vasodilatatoarelor scurte (NTG SL, nifedipină) în hipertensiunea necomplicată de salon.",
  "optionRationales": [
   "Absența tratamentului imediat fără urgență/comorbiditate este prima regulă.",
   "180/110 și preferința pentru terapiile cronice versus NTG/nifedipină sunt din închidere.",
   "Textul spune că NTG SL și nifedipina nu își găsesc justificare.",
   "140/90 nu este pragul de salon citat; vasodilatatorul scurt este evitat.",
   "Acești precipitanți sunt tocmai lista din paragraf."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă NTG SL/nifedipina din non-indicație în primă intenție la pragul de 140/90."
  },
  "textbookExpressions": [
   "180/110 mmHg",
   "nifedipina"
  ]
 },
 {
  "id": "hta-adv-040",
  "topicId": "hta",
  "type": "CM",
  "stem": "În urgențele hipertensive, capitolul subliniază că:",
  "options": [
   "Rapiditatea și amploarea creșterii tensionale pot fi mai importante decât nivelul absolut al TA în determinarea gravității leziunii de organ",
   "La femeile tinere, TA obișnuită poate fi 90-110/60-70 mmHg, astfel încât pre-eclampsia poate apărea chiar de la peste 140/90 mmHg",
   "Doar o minoritate dintre pacienții cu TA semnificativ crescută (de obicei >180/120 mmHg) au leziune acută de organ; în urgență este indicată terapia intravenoasă",
   "Pre-eclampsia apare doar peste 220/140 mmHg, TA obișnuită a tinerei fiind 180/110 mmHg",
   "Amploarea creșterii este irelevantă, doar valoarea absolută numărând, iar terapia orală înlocuiește IV-ul în urgență"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Rapiditatea și amploarea creșterii tensionale pot fi mai importante decât nivelul absolut al TA în determinarea gravității leziunii de organ — Corect: Rata de creștere versus valoarea absolută este teza de deschidere.\n\nLa femeile tinere, TA obișnuită poate fi 90-110/60-70 mmHg, astfel încât pre-eclampsia poate apărea chiar de la peste 140/90 mmHg — Corect: 90-110/60-70 și pre-eclampsia de la 140/90 sunt exemplul obstetrical.\n\nDoar o minoritate dintre pacienții cu TA semnificativ crescută (de obicei >180/120 mmHg) au leziune acută de organ; în urgență este indicată terapia intravenoasă — Corect: Minoritatea cu TOD la >180/120 și indicația IV închid paragraful.\n\nPre-eclampsia apare doar peste 220/140 mmHg, TA obișnuită a tinerei fiind 180/110 mmHg — Incorect: Bazala tinerei nu este 180/110; pre-eclampsia poate începe de la 140/90.\n\nAmploarea creșterii este irelevantă, doar valoarea absolută numărând, iar terapia orală înlocuiește IV-ul în urgență — Incorect: Textul spune opusul: rata contează, iar IV-ul este indicat în urgență.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1144, Urgențele hipertensive — Principii (pagini PDF: 289).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1144
   ],
   "pdfPages": [
    289
   ],
   "section": "Urgențele hipertensive — Principii"
  },
  "learningObjective": "Contrastarea ratei de creștere și a bazalei 90-110/60-70 a tinerei de pragul de 140/90 al pre-eclampsiei, versus 180/120 al urgenței clasice.",
  "optionRationales": [
   "Rata de creștere versus valoarea absolută este teza de deschidere.",
   "90-110/60-70 și pre-eclampsia de la 140/90 sunt exemplul obstetrical.",
   "Minoritatea cu TOD la >180/120 și indicația IV închid paragraful.",
   "Bazala tinerei nu este 180/110; pre-eclampsia poate începe de la 140/90.",
   "Textul spune opusul: rata contează, iar IV-ul este indicat în urgență."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută bazala tinerei la 180/110 și anulează importanța ratei de creștere."
  },
  "textbookExpressions": [
   "90-110/60-70 mmHg",
   "140/90 mmHg"
  ]
 },
 {
  "id": "hta-adv-041",
  "topicId": "hta",
  "type": "CM",
  "stem": "Printre motivele de trimitere la un centru de specialitate, dincolo de urgențele hipertensive, se numără:",
  "options": [
   "Hipertensiune necontrolată sub ≥3 clase diferite de antihipertensive",
   "Vârsta tânără (<30-40 de ani) sau date clinice (ex. suflu abdominal) care sugerează o cauză secundară",
   "Valori normale ale TA, însă cu injurii ale organelor țintă",
   "TA labilă sau extrem de variabilă; intoleranță care împiedică tratamentul după ghid",
   "Trimiterea se rezervă doar octogenarilor cu TA <120/70 mmHg, fără leziuni țintă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Hipertensiune necontrolată sub ≥3 clase diferite de antihipertensive — Corect: ≥3 clase definește rezistența ca motiv de trimitere.\n\nVârsta tânără (<30-40 de ani) sau date clinice (ex. suflu abdominal) care sugerează o cauză secundară — Corect: Fereastra <30-40 de ani și suflul abdominal sunt exemplele de secundar.\n\nValori normale ale TA, însă cu injurii ale organelor țintă — Corect: TOD la TA normală este un rând separat.\n\nTA labilă sau extrem de variabilă; intoleranță care împiedică tratamentul după ghid — Corect: Labilitatea și intoleranța închid lista.\n\nTrimiterea se rezervă doar octogenarilor cu TA <120/70 mmHg, fără leziuni țintă — Incorect: Textul nu rezervă trimiterea octogenarului hipotensiv fără TOD.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1144, Dirijarea către centre de specialitate (pagini PDF: 289).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1144
   ],
   "pdfPages": [
    289
   ],
   "section": "Dirijarea către centre de specialitate"
  },
  "learningObjective": "Reținerea pachetului ≥3 clase, <30-40 de ani, TOD la TA normală și TA labilă, distinct de octogenarul cu țintă joasă.",
  "optionRationales": [
   "≥3 clase definește rezistența ca motiv de trimitere.",
   "Fereastra <30-40 de ani și suflul abdominal sunt exemplele de secundar.",
   "TOD la TA normală este un rând separat.",
   "Labilitatea și intoleranța închid lista.",
   "Textul nu rezervă trimiterea octogenarului hipotensiv fără TOD."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Patru criterii reale de trimitere; distractorul inversează vârsta tânără și TOD-ul către octogenarul fără leziuni."
  },
  "textbookExpressions": [
   "<30-40 ani",
   "injurii ale organelor ţintă"
  ]
 },
 {
  "id": "hta-adv-042",
  "topicId": "hta",
  "type": "CM",
  "stem": "Encefalopatia hipertensivă, în Cadranul 31.7, se recunoaște prin:",
  "options": [
   "Tulburări vizuale, cefalee, convulsii, confuzie, comă, adesea cu retinopatie moderat-severă",
   "Investigația de elecție: RMN cerebral cu edem al fosei cerebrale posterioare (SEPR)",
   "Ținta: reducerea cu 25% a TAM imediată, cu labetalol sau nicardipină IV",
   "Investigația de elecție este bandeleta urinară, ținta fiind TAS 100-120 mmHg ca în disecție",
   "SEPR contraindică labetalolul, ținta fiind creșterea TAM cu 25%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tulburări vizuale, cefalee, convulsii, confuzie, comă, adesea cu retinopatie moderat-severă — Corect: Clinica neurologică plus retinopatia sunt din rândul encefalopatiei.\n\nInvestigația de elecție: RMN cerebral cu edem al fosei cerebrale posterioare (SEPR) — Corect: SEPR (edem de fosă posterioară) este investigația de elecție.\n\nȚinta: reducerea cu 25% a TAM imediată, cu labetalol sau nicardipină IV — Corect: 25% TAM imediată cu labetalol/nicardipină este ținta.\n\nInvestigația de elecție este bandeleta urinară, ținta fiind TAS 100-120 mmHg ca în disecție — Incorect: Bandeleta și 100-120 mmHg sunt ale pre-eclampsiei, respectiv disecției.\n\nSEPR contraindică labetalolul, ținta fiind creșterea TAM cu 25% — Incorect: SEPR motivează reducerea, nu creșterea, TAM; labetalolul este terapia de primă intenție.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1145, Cadranul 31.7 — Encefalopatia hipertensivă (pagini PDF: 290).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1145
   ],
   "pdfPages": [
    290
   ],
   "section": "Cadranul 31.7 — Encefalopatia hipertensivă"
  },
  "learningObjective": "Asocierea clinicii, a SEPR la RMN și a reducerii imediate cu 25% a TAM, distinct de ținta disecției.",
  "optionRationales": [
   "Clinica neurologică plus retinopatia sunt din rândul encefalopatiei.",
   "SEPR (edem de fosă posterioară) este investigația de elecție.",
   "25% TAM imediată cu labetalol/nicardipină este ținta.",
   "Bandeleta și 100-120 mmHg sunt ale pre-eclampsiei, respectiv disecției.",
   "SEPR motivează reducerea, nu creșterea, TAM; labetalolul este terapia de primă intenție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută ținta 100-120 mmHg a disecției pe encefalopatie și inversează 25% (creștere versus scădere)."
  },
  "textbookExpressions": [
   "SEPR",
   "edem al fosei cerebrale posterioare"
  ]
 },
 {
  "id": "hta-adv-043",
  "topicId": "hta",
  "type": "CM",
  "stem": "Hipertensiunea malignă, în notele Cadranului 31.7, se caracterizează prin:",
  "options": [
   "Tulburări vizuale și cefalee, cu retinopatie moderat-severă",
   "Țintă: reducerea cu 25% a TAM în câteva ore, nu o normalizare bruscă; labetalol sau nicardipină IV (unii autori consideră atenololul oral suficient)",
   "Uneori asociază injurie renală acută prin necroză fibrinoidă a arteriolelor",
   "Ținta este TAS 100-120 mmHg în minute, ca în disecția de aortă",
   "Necroza fibrinoidă contraindică orice scădere a TAM, atenololul oral fiind evitat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tulburări vizuale și cefalee, cu retinopatie moderat-severă — Corect: Clinica vizuală/cefalee cu retinopatie este rândul de istoric/examen.\n\nȚintă: reducerea cu 25% a TAM în câteva ore, nu o normalizare bruscă; labetalol sau nicardipină IV (unii autori consideră atenololul oral suficient) — Corect: 25% în câteva ore, IV-ul și nota despre atenolol oral sunt din țintă/terapie.\n\nUneori asociază injurie renală acută prin necroză fibrinoidă a arteriolelor — Corect: Necroza fibrinoidă arteriolară explică IRA asociată.\n\nȚinta este TAS 100-120 mmHg în minute, ca în disecția de aortă — Incorect: 100-120 mmHg imediat este ținta disecției, nu a formei maligne.\n\nNecroza fibrinoidă contraindică orice scădere a TAM, atenololul oral fiind evitat — Incorect: Textul cere scădere graduală 25%, nu interzicerea scăderii.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1145, Cadranul 31.7 — Hipertensiunea malignă (pagini PDF: 290).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1145
   ],
   "pdfPages": [
    290
   ],
   "section": "Cadranul 31.7 — Hipertensiunea malignă"
  },
  "learningObjective": "Separarea ferestrei „25% TAM în câteva ore” și a necrozei fibrinoide de ținta imediată 100-120 mmHg a disecției.",
  "optionRationales": [
   "Clinica vizuală/cefalee cu retinopatie este rândul de istoric/examen.",
   "25% în câteva ore, IV-ul și nota despre atenolol oral sunt din țintă/terapie.",
   "Necroza fibrinoidă arteriolară explică IRA asociată.",
   "100-120 mmHg imediat este ținta disecției, nu a formei maligne.",
   "Textul cere scădere graduală 25%, nu interzicerea scăderii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică ținta de disecție (100-120 mmHg imediat) asupra formei maligne, unde cadranul cere 25% în câteva ore."
  },
  "textbookExpressions": [
   "necrozei fibrinoide",
   "câteva ore"
  ]
 },
 {
  "id": "hta-adv-044",
  "topicId": "hta",
  "type": "CM",
  "stem": "Agenții centrali din Cadranul 31.6, exemplificați prin metildopa, se caracterizează prin:",
  "options": [
   "Metildopa 250-500 mg de 3 ori pe zi este utilizată în sarcină",
   "Simpaticoliza centrală asociază depresie, amețeli, uscăciune bucală; la întrerupere poate apărea hipertensiune de rebound",
   "Metildopa este contraindicată în sarcină, doza uzuală fiind 2,5-10 mg zilnic ca ramiprilul",
   "Rebound-ul lipsește, clasa fiind indicată în tulburările de dispoziție și în IC cu FE redusă",
   "Alfa-blocantele, nu agenții centrali, poartă riscul de hipertensiune la oprire"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Metildopa 250-500 mg de 3 ori pe zi este utilizată în sarcină — Corect: Doza 250-500 mg × 3 și indicația din sarcină sunt din rândul central.\n\nSimpaticoliza centrală asociază depresie, amețeli, uscăciune bucală; la întrerupere poate apărea hipertensiune de rebound — Corect: Efectele (depresie, amețeli, uscăciune) și rebound-ul sunt din aceleași coloane.\n\nMetildopa este contraindicată în sarcină, doza uzuală fiind 2,5-10 mg zilnic ca ramiprilul — Incorect: 2,5-10 mg este doza de ramipril; metildopa este folosită în sarcină.\n\nRebound-ul lipsește, clasa fiind indicată în tulburările de dispoziție și în IC cu FE redusă — Incorect: Tulburările de dispoziție și IC cu FE redusă sunt contraindicații, nu indicații; rebound-ul este notat.\n\nAlfa-blocantele, nu agenții centrali, poartă riscul de hipertensiune la oprire — Incorect: Rebound-ul este atribuit agenților centrali, nu alfa-blocantelor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1143, Cadranul 31.6 — Agenți centrali (pagini PDF: 288).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1143
   ],
   "pdfPages": [
    288
   ],
   "section": "Cadranul 31.6 — Agenți centrali"
  },
  "learningObjective": "Reținerea dozei de metildopa 250-500 mg × 3 (sarcină) și a hipertensiunii de rebound la întrerupere.",
  "optionRationales": [
   "Doza 250-500 mg × 3 și indicația din sarcină sunt din rândul central.",
   "Efectele (depresie, amețeli, uscăciune) și rebound-ul sunt din aceleași coloane.",
   "2,5-10 mg este doza de ramipril; metildopa este folosită în sarcină.",
   "Tulburările de dispoziție și IC cu FE redusă sunt contraindicații, nu indicații; rebound-ul este notat.",
   "Rebound-ul este atribuit agenților centrali, nu alfa-blocantelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută doza de ramipril pe metildopa și transformă contraindicațiile (dispoziție, IC) în indicații."
  },
  "textbookExpressions": [
   "Metildopa 250-500",
   "uscăciune bucală"
  ]
 },
 {
  "id": "hta-adv-045",
  "topicId": "hta",
  "type": "CM",
  "stem": "Costurile și organizarea îngrijirii hipertensiunii, în datele de deschidere din Marea Britanie, includ:",
  "options": [
   "Costurile anuale legate de tratament depășesc 1 miliard de lire",
   "Majoritatea pacienților sunt tratați în ambulator; serviciile de specialitate sunt rezervate de obicei cauzelor secundare, fenotipurilor problematice sau intoleranțelor medicamentoase",
   "Sub 30 de ani, diagnosticul cere o evaluare atentă a cauzelor secundare",
   "Costul anual este sub 10.000 de lire, toți hipertensivii fiind internați de rutină",
   "Sub 30 de ani, cauzele secundare sunt atât de rare încât screeningul se amână până la 80 de ani"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Costurile anuale legate de tratament depășesc 1 miliard de lire — Corect: Cifra de peste 1 miliard de lire este din paragraf.\n\nMajoritatea pacienților sunt tratați în ambulator; serviciile de specialitate sunt rezervate de obicei cauzelor secundare, fenotipurilor problematice sau intoleranțelor medicamentoase — Corect: Ambulatoriul ca regulă și specialitatea pentru secundar/fenotipuri/intoleranțe sunt explicitate.\n\nSub 30 de ani, diagnosticul cere o evaluare atentă a cauzelor secundare — Corect: Sub 30 de ani impune căutarea cauzei secundare.\n\nCostul anual este sub 10.000 de lire, toți hipertensivii fiind internați de rutină — Incorect: 1 miliard, nu 10.000; internațiile de rutină contrazic modelul ambulator.\n\nSub 30 de ani, cauzele secundare sunt atât de rare încât screeningul se amână până la 80 de ani — Incorect: Textul cere evaluare atentă sub 30 de ani, nu amânare până la 80.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1133, Introducere — Costuri și filiere de îngrijire (pagini PDF: 278).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1133
   ],
   "pdfPages": [
    278
   ],
   "section": "Introducere — Costuri și filiere de îngrijire"
  },
  "learningObjective": "Reținerea ordinii de 1 miliard de lire, a predominanței ambulatorii și a pragului <30 de ani pentru etiologia secundară.",
  "optionRationales": [
   "Cifra de peste 1 miliard de lire este din paragraf.",
   "Ambulatoriul ca regulă și specialitatea pentru secundar/fenotipuri/intoleranțe sunt explicitate.",
   "Sub 30 de ani impune căutarea cauzei secundare.",
   "1 miliard, nu 10.000; internațiile de rutină contrazic modelul ambulator.",
   "Textul cere evaluare atentă sub 30 de ani, nu amânare până la 80."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii comprimă 1 miliard de lire la 10.000 și inversează regula vârstnic versus tânăr pentru screeningul secundar."
  },
  "textbookExpressions": [
   "1 miliard",
   "sub 30 de ani"
  ]
 },
 {
  "id": "hta-adv-046",
  "topicId": "hta",
  "type": "CM",
  "stem": "Protocolul de măsurare a TA la domiciliu, potrivit recomandărilor din capitol, prevede:",
  "options": [
   "Cel puțin două măsurători consecutive dimineața, înainte de tratament, și încă o dată seara, timp de 4-7 zile",
   "Prima determinare nu este luată în considerare; media celorlalte reprezintă TA de domiciliu",
   "Valoarea tinde să fie cu circa 5/5 mmHg mai mică decât cea de cabinet și este înalt predictivă pentru evenimente cardiovasculare",
   "Este utilă pentru identificarea fenotipurilor de TA, implicarea pacientului în decizie și monitorizarea între vizitele de cabinet",
   "Se păstrează doar prima măsurătoare din fiecare zi, TA de domiciliu fiind cu 20/15 mmHg peste cea de cabinet"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Cel puțin două măsurători consecutive dimineața, înainte de tratament, și încă o dată seara, timp de 4-7 zile — Corect: Perechea dimineață-înainte-de-tratament și seara, pe 4-7 zile, este protocolul.\n\nPrima determinare nu este luată în considerare; media celorlalte reprezintă TA de domiciliu — Corect: Excluderea primei determinări și media restului definesc valoarea de domiciliu.\n\nValoarea tinde să fie cu circa 5/5 mmHg mai mică decât cea de cabinet și este înalt predictivă pentru evenimente cardiovasculare — Corect: Offset-ul 5/5 mmHg mai mic și predictivitatea CV sunt explicitate.\n\nEste utilă pentru identificarea fenotipurilor de TA, implicarea pacientului în decizie și monitorizarea între vizitele de cabinet — Corect: Cele trei utilități (fenotipuri, decizie comună, monitorizare) deschid lista de indicații.\n\nSe păstrează doar prima măsurătoare din fiecare zi, TA de domiciliu fiind cu 20/15 mmHg peste cea de cabinet — Incorect: Se exclude prima lectură, nu se păstrează doar ea; domiciliul este mai mic, nu mai mare, decât cabinetul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1136, Măsurarea TA la domiciliu (pagini PDF: 281).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1136
   ],
   "pdfPages": [
    281
   ],
   "section": "Măsurarea TA la domiciliu"
  },
  "learningObjective": "Reținerea schemei 2× dimineața + seara / 4-7 zile, a excluderii primei lecturi, a offset-ului 5/5 mmHg și a celor trei utilități clinice.",
  "optionRationales": [
   "Perechea dimineață-înainte-de-tratament și seara, pe 4-7 zile, este protocolul.",
   "Excluderea primei determinări și media restului definesc valoarea de domiciliu.",
   "Offset-ul 5/5 mmHg mai mic și predictivitatea CV sunt explicitate.",
   "Cele trei utilități (fenotipuri, decizie comună, monitorizare) deschid lista de indicații.",
   "Se exclude prima lectură, nu se păstrează doar ea; domiciliul este mai mic, nu mai mare, decât cabinetul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul inversează regula de a discard prima lectură și transformă offset-ul 5/5 mmHg într-o creștere de 20/15."
  },
  "textbookExpressions": [
   "4-7 zile",
   "5/5 mmHg"
  ]
 },
 {
  "id": "hta-adv-047",
  "topicId": "hta",
  "type": "CM",
  "stem": "Monitorizarea ambulatorie a TA pe 24 de ore, în detaliile tehnice și de utilizare, se caracterizează prin:",
  "options": [
   "Dispozitive oscilometrice portabile, de obicei la 20-30 de minute în activitate și la 30-60 de minute în somn",
   "Media pe 24 de ore este un indicator mai predictiv pentru evenimentele CV decât măsurătorile de cabinet sau de domiciliu; în Marea Britanie este recomandată pentru diagnostic, în locul celor de cabinet",
   "TA diurnă ambulatorie este cu 5-10/5 mmHg mai mică decât TA de cabinet la același pacient",
   "Măsurătorile se fac o dată pe zi, media pe 24 de ore fiind inferioară cabinetului ca predictor",
   "În Marea Britanie ABPM-ul este abandonat diagnostic, TA diurnă fiind cu 30 mmHg peste cea de cabinet"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Dispozitive oscilometrice portabile, de obicei la 20-30 de minute în activitate și la 30-60 de minute în somn — Corect: Cadența 20-30 min ziua și 30-60 min noaptea este cea din text.\n\nMedia pe 24 de ore este un indicator mai predictiv pentru evenimentele CV decât măsurătorile de cabinet sau de domiciliu; în Marea Britanie este recomandată pentru diagnostic, în locul celor de cabinet — Corect: Superioritatea predictive și recomandarea UK de diagnostic sunt fraza centrală.\n\nTA diurnă ambulatorie este cu 5-10/5 mmHg mai mică decât TA de cabinet la același pacient — Corect: 5-10/5 mmHg mai mic diurn versus cabinet este offset-ul citat.\n\nMăsurătorile se fac o dată pe zi, media pe 24 de ore fiind inferioară cabinetului ca predictor — Incorect: Măsurătorile sunt zeci pe 24 de ore, nu una; predictorul este superior cabinetului.\n\nÎn Marea Britanie ABPM-ul este abandonat diagnostic, TA diurnă fiind cu 30 mmHg peste cea de cabinet — Incorect: UK recomandă ABPM la diagnostic; offset-ul nu este +30 mmHg.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1136, Determinarea TA în ambulator (pagini PDF: 281).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1136
   ],
   "pdfPages": [
    281
   ],
   "section": "Determinarea TA în ambulator"
  },
  "learningObjective": "Separarea intervalelor 20-30 / 30-60 min, a rolului diagnostic UK și a offset-ului diurn 5-10/5 mmHg.",
  "optionRationales": [
   "Cadența 20-30 min ziua și 30-60 min noaptea este cea din text.",
   "Superioritatea predictive și recomandarea UK de diagnostic sunt fraza centrală.",
   "5-10/5 mmHg mai mic diurn versus cabinet este offset-ul citat.",
   "Măsurătorile sunt zeci pe 24 de ore, nu una; predictorul este superior cabinetului.",
   "UK recomandă ABPM la diagnostic; offset-ul nu este +30 mmHg."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează poziția NICE a ABPM (diagnostic versus abandon) și umflă offset-ul de la 5-10/5 la +30 mmHg."
  },
  "textbookExpressions": [
   "20-30 de minute",
   "5-10/5 mmHg"
  ]
 },
 {
  "id": "hta-adv-048",
  "topicId": "hta",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la locul măsurătorii de cabinet după introducerea ABPM:",
  "options": [
   "Rămâne justificată pentru monitorizarea continuă și titrarea medicamentelor, întrucât niciun studiu de prognostic cardiovascular nu a inclus determinări extra-cabinet pentru ajustarea tratamentului",
   "A fost abandonată complet, titrarea făcându-se doar pe ABPM în toate trialurile de prognostic",
   "Este superioară prognostic ABPM-ului, ghidurile cerând-o ca unică metodă diagnostică",
   "Se folosește doar în fibrilație atrială, ABPM-ul înlocuind orice titrare",
   "Titrarea extra-cabinet a fost standardul tuturor studiilor de evenimente CV"
  ],
  "correct": [
   0
  ],
  "explanation": "Rămâne justificată pentru monitorizarea continuă și titrarea medicamentelor, întrucât niciun studiu de prognostic cardiovascular nu a inclus determinări extra-cabinet pentru ajustarea tratamentului — Corect: Justificarea pentru titrare și absența studiilor de prognostic cu extra-cabinet sunt fraza de după lista de limite.\n\nA fost abandonată complet, titrarea făcându-se doar pe ABPM în toate trialurile de prognostic — Incorect: Trialurile de prognostic au folosit cabinetul, nu ABPM-ul, pentru titrare.\n\nEste superioară prognostic ABPM-ului, ghidurile cerând-o ca unică metodă diagnostică — Incorect: Ghidurile nu o mai vor ca unică metodă diagnostică, dar o păstrează la titrare.\n\nSe folosește doar în fibrilație atrială, ABPM-ul înlocuind orice titrare — Incorect: FA impune metoda auscultatorie, nu rezervarea cabinetului; titrarea rămâne de cabinet.\n\nTitrarea extra-cabinet a fost standardul tuturor studiilor de evenimente CV — Incorect: Textul spune opusul: niciun studiu de prognostic nu a titrat extra-cabinet.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1136, Măsurarea TA la cabinet — Titrare versus diagnostic (pagini PDF: 281).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1136
   ],
   "pdfPages": [
    281
   ],
   "section": "Măsurarea TA la cabinet — Titrare versus diagnostic"
  },
  "learningObjective": "Recunoașterea disocierii diagnostic (ABPM) versus titrare (cabinet, lipsă de trialuri extra-cabinet).",
  "optionRationales": [
   "Justificarea pentru titrare și absența studiilor de prognostic cu extra-cabinet sunt fraza de după lista de limite.",
   "Trialurile de prognostic au folosit cabinetul, nu ABPM-ul, pentru titrare.",
   "Ghidurile nu o mai vor ca unică metodă diagnostică, dar o păstrează la titrare.",
   "FA impune metoda auscultatorie, nu rezervarea cabinetului; titrarea rămâne de cabinet.",
   "Textul spune opusul: niciun studiu de prognostic nu a titrat extra-cabinet."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă absența trialurilor extra-cabinet într-un standard de titrare ABPM, inversând argumentul paragrafului."
  },
  "textbookExpressions": [
   "niciun studiu de prognostic",
   "titrarea medicamentelor"
  ]
 },
 {
  "id": "hta-adv-049",
  "topicId": "hta",
  "type": "CM",
  "stem": "Lemnul dulce (liquorice) și tensiunea arterială oscilantă, în datele de etiologie, se recunosc prin:",
  "options": [
   "Lemnul dulce inhibă o enzimă care, în mod normal, împiedică cortizolul să activeze receptorul mineralocorticoid",
   "TA oscilantă, cu variabilitate exagerată, ține adesea de tulburări autonome sau endocrine; evaluarea cere metode repetate pe termen scurt (ambulator) și lung (domiciliu), tratamentul fiind de obicei de clinică de specialitate",
   "Lemnul dulce blochează aldosteronul, scăzând TA; oscilațiile se tratează de rutină în medicina de familie, fără ABPM",
   "Lichiorul de anason, nu liquorice, activează receptorul glucocorticoid",
   "Variabilitatea exagerată se evaluează printr-o singură măsurătoare de cabinet"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Lemnul dulce inhibă o enzimă care, în mod normal, împiedică cortizolul să activeze receptorul mineralocorticoid — Corect: Inhibiția enzimei care protejează receptorul mineralocorticoid de cortizol este mecanismul citat.\n\nTA oscilantă, cu variabilitate exagerată, ține adesea de tulburări autonome sau endocrine; evaluarea cere metode repetate pe termen scurt (ambulator) și lung (domiciliu), tratamentul fiind de obicei de clinică de specialitate — Corect: Autonom/endocrin, ABPM plus domiciliu și clinica de specialitate definesc oscilantul.\n\nLemnul dulce blochează aldosteronul, scăzând TA; oscilațiile se tratează de rutină în medicina de familie, fără ABPM — Incorect: Liquorice crește, nu scade, TA; oscilantul nu este de rutină la medicul de familie.\n\nLichiorul de anason, nu liquorice, activează receptorul glucocorticoid — Incorect: Textul numește liquorice, nu anasonul, și receptorul mineralocorticoid, nu glucocorticoid.\n\nVariabilitatea exagerată se evaluează printr-o singură măsurătoare de cabinet — Incorect: O singură măsurătoare de cabinet este tocmai inadecvată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1137, 1138, Dieta — Liquorice; Tensiunea arterială oscilantă (pagini PDF: 282, 283).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1137,
    1138
   ],
   "pdfPages": [
    282,
    283
   ],
   "section": "Dieta — Liquorice; Tensiunea arterială oscilantă"
  },
  "learningObjective": "Contrastarea mecanismului mineralocorticoid al liquorice de evaluarea multimodală a TA oscilante în clinică de specialitate.",
  "optionRationales": [
   "Inhibiția enzimei care protejează receptorul mineralocorticoid de cortizol este mecanismul citat.",
   "Autonom/endocrin, ABPM plus domiciliu și clinica de specialitate definesc oscilantul.",
   "Liquorice crește, nu scade, TA; oscilantul nu este de rutină la medicul de familie.",
   "Textul numește liquorice, nu anasonul, și receptorul mineralocorticoid, nu glucocorticoid.",
   "O singură măsurătoare de cabinet este tocmai inadecvată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează efectul liquorice (creștere versus scădere a TA) și mută oscilantul din clinica de specialitate în cabinetul unic."
  },
  "textbookExpressions": [
   "liquorice",
   "receptorul mineralocorticoid"
  ]
 },
 {
  "id": "hta-adv-050",
  "topicId": "hta",
  "type": "CM",
  "stem": "Răspunsul tensional fiziologic la sarcină, potrivit capitolului, include:",
  "options": [
   "Creșterea volumului circulant, compensată de o vasodilatație semnificativă, ceea ce duce la scăderea TA, în special în trimestrul al doilea",
   "Hipertensiunea asociată sarcinii se ameliorează adesea în câteva luni de la naștere",
   "Femeile cu tulburări hipertensive de sarcină sunt predispuse să devină hipertensive mai precoce decât martorele de vârstă similară",
   "TA crește fiziologic în trimestrul al doilea prin vasoconstricție, volumul circulant scăzând",
   "Hipertensiunea de sarcină persistă invariabil după naștere, fără risc ulterior de HTA esențială"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Creșterea volumului circulant, compensată de o vasodilatație semnificativă, ceea ce duce la scăderea TA, în special în trimestrul al doilea — Corect: Volumul crescut, vasodilatația și scăderea din trimestrul II deschid fiziologia.\n\nHipertensiunea asociată sarcinii se ameliorează adesea în câteva luni de la naștere — Corect: Ameliorarea în câteva luni după naștere este evoluția uzuală.\n\nFemeile cu tulburări hipertensive de sarcină sunt predispuse să devină hipertensive mai precoce decât martorele de vârstă similară — Corect: Predispoziția la HTA mai precoce versus martore este avertismentul.\n\nTA crește fiziologic în trimestrul al doilea prin vasoconstricție, volumul circulant scăzând — Incorect: Sensul trimestrului II este inversat (scădere, nu creștere).\n\nHipertensiunea de sarcină persistă invariabil după naștere, fără risc ulterior de HTA esențială — Incorect: Remisiunea postnatală este frecventă; riscul ulterior de HTA există, nu lipsește.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1138, Hipertensiunea arterială secundară — Sarcina (pagini PDF: 283).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1138
   ],
   "pdfPages": [
    283
   ],
   "section": "Hipertensiunea arterială secundară — Sarcina"
  },
  "learningObjective": "Separarea vasodilatației de trimestrul II de remisiunea postnatală și de predispoziția ulterioară la HTA precoce.",
  "optionRationales": [
   "Volumul crescut, vasodilatația și scăderea din trimestrul II deschid fiziologia.",
   "Ameliorarea în câteva luni după naștere este evoluția uzuală.",
   "Predispoziția la HTA mai precoce versus martore este avertismentul.",
   "Sensul trimestrului II este inversat (scădere, nu creștere).",
   "Remisiunea postnatală este frecventă; riscul ulterior de HTA există, nu lipsește."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează vasodilatația de trimestrul II într-o creștere tensională și neagă atât remisiunea postnatală cât și riscul ulterior."
  },
  "textbookExpressions": [
   "trimestru",
   "câteva luni de la naştere"
  ]
 },
 {
  "id": "hta-adv-051",
  "topicId": "hta",
  "type": "CM",
  "stem": "Scala Morisky de aderență la medicație, în interpretarea din Cadranul 31.5, se citește astfel:",
  "options": [
   "Un scor de 8 sugerează o aderență bună la tratament",
   "Un scor de 7 sugerează o aderență scăzută, asociată cu un control mai prost al TA",
   "Scorul 8 definește non-aderența totală, 7 fiind aderența perfectă",
   "Scala nu se punctează, fiind doar calitativă",
   "Orice scor peste 2 contraindică antihipertensivele"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Un scor de 8 sugerează o aderență bună la tratament — Corect: 8 = aderență bună este fraza de interpretare.\n\nUn scor de 7 sugerează o aderență scăzută, asociată cu un control mai prost al TA — Corect: 7 = aderență scăzută cu control mai prost completează.\n\nScorul 8 definește non-aderența totală, 7 fiind aderența perfectă — Incorect: Sensurile 8 versus 7 sunt inversate.\n\nScala nu se punctează, fiind doar calitativă — Incorect: Scala este numerică, cu punctaj explicit.\n\nOrice scor peste 2 contraindică antihipertensivele — Incorect: Nu există un prag de 2 care să contraindice terapia.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1142, Cadranul 31.5 — Scala Morisky (pagini PDF: 287).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1142
   ],
   "pdfPages": [
    287
   ],
   "section": "Cadranul 31.5 — Scala Morisky"
  },
  "learningObjective": "Contrastarea scorului 8 (aderență bună) de 7 (aderență scăzută, control mai prost).",
  "optionRationales": [
   "8 = aderență bună este fraza de interpretare.",
   "7 = aderență scăzută cu control mai prost completează.",
   "Sensurile 8 versus 7 sunt inversate.",
   "Scala este numerică, cu punctaj explicit.",
   "Nu există un prag de 2 care să contraindice terapia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează 8 (bun) versus 7 (scăzut), distincția unică a cadranului de interpretare."
  },
  "textbookExpressions": [
   "scor de 8",
   "Scorul de 7"
  ]
 },
 {
  "id": "hta-adv-052",
  "topicId": "hta",
  "type": "CM",
  "stem": "Dozele-exemplu din Cadranul 31.6, pentru alte clase decât ramiprilul și indapamida, includ:",
  "options": [
   "Losartan 25-100 mg zilnic",
   "Amlodipină 5-10 mg zilnic",
   "Verapamil 120-480 mg zilnic",
   "Doxazosin 1-8 mg zilnic",
   "Losartan 2,5-10 mg, amlodipină 120-480 mg, verapamil 1-8 mg, doxazosin 25-100 mg"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Losartan 25-100 mg zilnic — Corect: 25-100 mg este exemplul ARA (losartan).\n\nAmlodipină 5-10 mg zilnic — Corect: 5-10 mg este exemplul BCC DHP (amlodipină).\n\nVerapamil 120-480 mg zilnic — Corect: 120-480 mg este al verapamilului non-DHP.\n\nDoxazosin 1-8 mg zilnic — Corect: 1-8 mg este al doxazosinului.\n\nLosartan 2,5-10 mg, amlodipină 120-480 mg, verapamil 1-8 mg, doxazosin 25-100 mg — Incorect: Dozele sunt permutate între cele patru rânduri.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1143, Cadranul 31.6 — Doze-exemplu ARA, BCC, alfa-blocant (pagini PDF: 288).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1143
   ],
   "pdfPages": [
    288
   ],
   "section": "Cadranul 31.6 — Doze-exemplu ARA, BCC, alfa-blocant"
  },
  "learningObjective": "Reținerea ferestrelor losartan 25-100, amlodipină 5-10, verapamil 120-480 și doxazosin 1-8, fără a le permuta.",
  "optionRationales": [
   "25-100 mg este exemplul ARA (losartan).",
   "5-10 mg este exemplul BCC DHP (amlodipină).",
   "120-480 mg este al verapamilului non-DHP.",
   "1-8 mg este al doxazosinului.",
   "Dozele sunt permutate între cele patru rânduri."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorul permută cele patru ferestre de doză între losartan, amlodipină, verapamil și doxazosin."
  },
  "textbookExpressions": [
   "Losartan 25-100",
   "Doxazosin 1-8 mg"
  ]
 },
 {
  "id": "hta-adv-053",
  "topicId": "hta",
  "type": "CM",
  "stem": "Dincolo de descrierea tehnică a denervării renale, capitolul subliniază că:",
  "options": [
   "Amploarea scăderii TA, măsurată extra-cabinet, este similară monoterapiei antihipertensive, astfel încât majoritatea pacienților vor necesita în continuare terapie medicamentoasă pe termen lung",
   "Sunt tehnologii noi: siguranța pe termen lung (arteră renală și altele) nu este clară",
   "Nu există studii de prognostic pe evenimente cardiace, renale, AVC sau deces care să folosească altă tehnologie decât medicamentele",
   "Denervarea înlocuiește definitiv medicamentele la toți pacienții, cu dovezi de prognostic pe deces egale cu politerapia",
   "Siguranța pe 20 de ani a arterei renale este deja demonstrată în trialuri de mortalitate"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Amploarea scăderii TA, măsurată extra-cabinet, este similară monoterapiei antihipertensive, astfel încât majoritatea pacienților vor necesita în continuare terapie medicamentoasă pe termen lung — Corect: Similaritatea cu monoterapia și persistenta nevoii de medicamente sunt din paragraf.\n\nSunt tehnologii noi: siguranța pe termen lung (arteră renală și altele) nu este clară — Corect: Noutatea și siguranța neclară (inclusiv artera renală) sunt recunoscute explicit.\n\nNu există studii de prognostic pe evenimente cardiace, renale, AVC sau deces care să folosească altă tehnologie decât medicamentele — Corect: Absența studiilor de prognostic non-farmacologic închide limita.\n\nDenervarea înlocuiește definitiv medicamentele la toți pacienții, cu dovezi de prognostic pe deces egale cu politerapia — Incorect: Textul spune că majoritatea vor necesita în continuare medicamente.\n\nSiguranța pe 20 de ani a arterei renale este deja demonstrată în trialuri de mortalitate — Incorect: Siguranța pe termen lung și trialurile de deces lipsesc tocmai.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1143, Abordări viitoare — Limitele denervării (pagini PDF: 288).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1143
   ],
   "pdfPages": [
    288
   ],
   "section": "Abordări viitoare — Limitele denervării"
  },
  "learningObjective": "Contrastarea efectului de ordinul monoterapiei, a incertitudinii de siguranță și a absenței trialurilor de evenimente, de iluzia înlocuirii medicamentelor.",
  "optionRationales": [
   "Similaritatea cu monoterapia și persistenta nevoii de medicamente sunt din paragraf.",
   "Noutatea și siguranța neclară (inclusiv artera renală) sunt recunoscute explicit.",
   "Absența studiilor de prognostic non-farmacologic închide limita.",
   "Textul spune că majoritatea vor necesita în continuare medicamente.",
   "Siguranța pe termen lung și trialurile de deces lipsesc tocmai."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii transformă un efect de ordinul monoterapiei, fără date de prognostic, într-un substitut definitiv al politerapiei."
  },
  "textbookExpressions": [
   "monoterapiei antihipertensive",
   "nu există studii de prognostic"
  ]
 },
 {
  "id": "hta-adv-054",
  "topicId": "hta",
  "type": "CM",
  "stem": "Indicațiile speciale din sarcină, în Cadranul 31.6, includ:",
  "options": [
   "Nifedipina/amlodipina sunt menționate pentru utilizare în sarcină (BCC dihidropiridinice)",
   "Labetalolul este utilizat în sarcină, în rândul beta-blocantelor",
   "Metildopa 250-500 mg × 3/zi este utilizată în sarcină, la agenții centrali",
   "IECA și ARA sunt de primă intenție în sarcină, labetalolul fiind evitat",
   "Nifedipina este contraindicată în sarcină, metildopa fiind rezervată gută"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Nifedipina/amlodipina sunt menționate pentru utilizare în sarcină (BCC dihidropiridinice) — Corect: Nota de sarcină de pe rândul BCC DHP este a nifedipinei/amlodipinei.\n\nLabetalolul este utilizat în sarcină, în rândul beta-blocantelor — Corect: Labetalolul este nota de sarcină a beta-blocantelor.\n\nMetildopa 250-500 mg × 3/zi este utilizată în sarcină, la agenții centrali — Corect: Metildopa × 3 este nota de sarcină a agenților centrali.\n\nIECA și ARA sunt de primă intenție în sarcină, labetalolul fiind evitat — Incorect: IECA/ARA au contraindicație de stenoză renală bilaterală; nu sunt prima linie de sarcină.\n\nNifedipina este contraindicată în sarcină, metildopa fiind rezervată gută — Incorect: Nifedipina este menționată pentru sarcină; guta contraindică tiazidul, nu metildopa.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1143, Cadranul 31.6 — Antihipertensive în sarcină (pagini PDF: 288).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1143
   ],
   "pdfPages": [
    288
   ],
   "section": "Cadranul 31.6 — Antihipertensive în sarcină"
  },
  "learningObjective": "Perecherea nifedipină/amlodipină, labetalol și metildopa ca opțiuni de sarcină, distinct de IECA/ARA.",
  "optionRationales": [
   "Nota de sarcină de pe rândul BCC DHP este a nifedipinei/amlodipinei.",
   "Labetalolul este nota de sarcină a beta-blocantelor.",
   "Metildopa × 3 este nota de sarcină a agenților centrali.",
   "IECA/ARA au contraindicație de stenoză renală bilaterală; nu sunt prima linie de sarcină.",
   "Nifedipina este menționată pentru sarcină; guta contraindică tiazidul, nu metildopa."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută IECA/ARA în prima linie de sarcină și inversează nota de sarcină a nifedipinei."
  },
  "textbookExpressions": [
   "utiliza rea în sarcină",
   "Labetalol utilizat în"
  ]
 },
 {
  "id": "hta-adv-055",
  "topicId": "hta",
  "type": "CS",
  "stem": "În perioada preoperatorie, administrarea IECA și ARA, potrivit capitolului, este descrisă astfel:",
  "options": [
   "Este adesea temporizată în mod arbitrar timp de 24 de ore preoperator, însă de obicei este necesar să se continue antihipertensivele pe toată perioada perioperatorie, exceptând hipotensiunea sau probleme conexe (de exemplu oprirea nefrotoxicelor în IRA)",
   "Se opresc cu 14 zile înainte, ca iodura de potasiu din tiroidectomie",
   "Se dublează doza în dimineața intervenției, pentru a preveni +30 mmHg de la inducție",
   "Se înlocuiesc de rutină cu nifedipină sublinguală la inducție",
   "Nu se mai reiau postoperator, ținta fiind 90/60 mmHg"
  ],
  "correct": [
   0
  ],
  "explanation": "Este adesea temporizată în mod arbitrar timp de 24 de ore preoperator, însă de obicei este necesar să se continue antihipertensivele pe toată perioada perioperatorie, exceptând hipotensiunea sau probleme conexe (de exemplu oprirea nefrotoxicelor în IRA) — Corect: Temporizarea arbitrară 24 de ore și continuarea perioperatorie, cu excepțiile citate, sunt fraza din paragraf.\n\nSe opresc cu 14 zile înainte, ca iodura de potasiu din tiroidectomie — Incorect: 14 zile și iodura țin de pregătirea tiroidectomiei, nu de HTA.\n\nSe dublează doza în dimineața intervenției, pentru a preveni +30 mmHg de la inducție — Incorect: Doza nu se dublează pentru a pretinde inducția.\n\nSe înlocuiesc de rutină cu nifedipină sublinguală la inducție — Incorect: Nifedipina sublinguală nu își găsește justificare în hipertensiunea necomplicată.\n\nNu se mai reiau postoperator, ținta fiind 90/60 mmHg — Incorect: Medicația se continuă de obicei; 90/60 nu este ținta perioperatorie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1144, Perioada perioperatorie — IECA/ARA (pagini PDF: 289).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1144
   ],
   "pdfPages": [
    289
   ],
   "section": "Perioada perioperatorie — IECA/ARA"
  },
  "learningObjective": "Reținerea ferestrei arbitrare de 24 de ore versus regula de a continua antihipertensivele, cu excepțiile de hipotensiune/IRA.",
  "optionRationales": [
   "Temporizarea arbitrară 24 de ore și continuarea perioperatorie, cu excepțiile citate, sunt fraza din paragraf.",
   "14 zile și iodura țin de pregătirea tiroidectomiei, nu de HTA.",
   "Doza nu se dublează pentru a pretinde inducția.",
   "Nifedipina sublinguală nu își găsește justificare în hipertensiunea necomplicată.",
   "Medicația se continuă de obicei; 90/60 nu este ținta perioperatorie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii înlocuiesc pauza arbitrară de 24 de ore cu 14 zile sau cu dublarea dozei, și reintroduc nifedipina sublinguală."
  },
  "textbookExpressions": [
   "24 de ore preoperator",
   "leziunilor renale acute"
  ]
 },
 {
  "id": "hta-adv-056",
  "topicId": "hta",
  "type": "CM",
  "stem": "Sindromul coronarian acut ca urgență hipertensivă, în Cadranul 31.7, se recunoaște prin:",
  "options": [
   "Istoric de dureri toracice; examen: diaforeză",
   "Investigație de elecție: ECG cu modificări ST/T și troponină serică crescută",
   "Țintă: reducere imediată a TAS sub 140 mmHg; terapie de primă intenție: NTG, labetalol i.v.",
   "Ținta este TAS 100-120 mmHg și FC 50-60/min, ca în disecție",
   "Bandeleta urinară și magneziul i.v. sunt de primă intenție, ca în pre-eclampsie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Istoric de dureri toracice; examen: diaforeză — Corect: Durerea toracică și diaforeza sunt rândul de istoric/examen.\n\nInvestigație de elecție: ECG cu modificări ST/T și troponină serică crescută — Corect: ECG ST/T și troponina sunt investigația de elecție.\n\nȚintă: reducere imediată a TAS sub 140 mmHg; terapie de primă intenție: NTG, labetalol i.v. — Corect: <140 mmHg imediat și NTG/labetalol sunt ținta/terapia.\n\nȚinta este TAS 100-120 mmHg și FC 50-60/min, ca în disecție — Incorect: 100-120 mmHg și 50-60/min sunt ale disecției.\n\nBandeleta urinară și magneziul i.v. sunt de primă intenție, ca în pre-eclampsie — Incorect: Bandeleta și magneziul sunt ale pre-eclampsiei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1145, Cadranul 31.7 — Sindrom coronarian acut (pagini PDF: 290).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1145
   ],
   "pdfPages": [
    290
   ],
   "section": "Cadranul 31.7 — Sindrom coronarian acut"
  },
  "learningObjective": "Perecherea ST/T + troponină de ținta TAS <140 mmHg cu NTG/labetalol, distinct de disecție și de pre-eclampsie.",
  "optionRationales": [
   "Durerea toracică și diaforeza sunt rândul de istoric/examen.",
   "ECG ST/T și troponina sunt investigația de elecție.",
   "<140 mmHg imediat și NTG/labetalol sunt ținta/terapia.",
   "100-120 mmHg și 50-60/min sunt ale disecției.",
   "Bandeleta și magneziul sunt ale pre-eclampsiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii aplică țintele disecției (100-120, 50-60) sau ale pre-eclampsiei (Mg) asupra SCA, unde cadranul cere TAS <140 cu NTG/labetalol."
  },
  "textbookExpressions": [
   "TAS <140 mmHg",
   "Troponină serică"
  ]
 },
 {
  "id": "hta-adv-057",
  "topicId": "hta",
  "type": "CM",
  "stem": "Disecția acută de aortă, în notele Cadranului 31.7, se deosebește prin:",
  "options": [
   "Diferență de puls sau de TA între cele două membre superioare; investigație: angio-CT aortei sau eco transesofagian care arată faldul de disecție",
   "După controlul frecvenței cardiace, poate fi adăugată medicație vasodilatatoare (NTG, nicardipină); pacienții cu Marfan sau sindroame de aortă proximală necesită intervenție chirurgicală precoce",
   "Ținta imediată este TAS <140 mmHg fără controlul frecvenței, magneziul fiind de primă intenție",
   "Atenololul oral este considerat suficient, ca în nota de hipertensiune malignă",
   "SEPR la RMN înlocuiește angio-CT-ul de aortă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Diferență de puls sau de TA între cele două membre superioare; investigație: angio-CT aortei sau eco transesofagian care arată faldul de disecție — Corect: Asimetria de puls/TA și faldul imagistic sunt rândurile de examen/investigație.\n\nDupă controlul frecvenței cardiace, poate fi adăugată medicație vasodilatatoare (NTG, nicardipină); pacienții cu Marfan sau sindroame de aortă proximală necesită intervenție chirurgicală precoce — Corect: Vasodilatatorul după controlul FC și chirurgia precoce Marfan sunt din note.\n\nȚinta imediată este TAS <140 mmHg fără controlul frecvenței, magneziul fiind de primă intenție — Incorect: <140 mmHg fără controlul FC și magneziul sunt ale SCA, respectiv pre-eclampsiei.\n\nAtenololul oral este considerat suficient, ca în nota de hipertensiune malignă — Incorect: Atenololul oral suficient este nota formei maligne, nu a disecției.\n\nSEPR la RMN înlocuiește angio-CT-ul de aortă — Incorect: SEPR este al encefalopatiei hipertensive.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1145, Cadranul 31.7 — Disecție acută de aortă (pagini PDF: 290).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1145
   ],
   "pdfPages": [
    290
   ],
   "section": "Cadranul 31.7 — Disecție acută de aortă"
  },
  "learningObjective": "Reținerea asimetrei de puls/TA, a faldului la angio-CT/ETE și a vasodilatatorului doar după controlul FC, plus chirurgia precoce din Marfan.",
  "optionRationales": [
   "Asimetria de puls/TA și faldul imagistic sunt rândurile de examen/investigație.",
   "Vasodilatatorul după controlul FC și chirurgia precoce Marfan sunt din note.",
   "<140 mmHg fără controlul FC și magneziul sunt ale SCA, respectiv pre-eclampsiei.",
   "Atenololul oral suficient este nota formei maligne, nu a disecției.",
   "SEPR este al encefalopatiei hipertensive."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii permută țintele SCA, magneziul de pre-eclampsie și SEPR pe rândul de disecție, unde cadranul cere controlul FC apoi vasodilatație."
  },
  "textbookExpressions": [
   "faldul de disecţie",
   "sindrom Marian"
  ]
 },
 {
  "id": "hta-adv-058",
  "topicId": "hta",
  "type": "CS",
  "stem": "Apariția bruscă a hipertensiunii severe sau agravarea uneia bine controlate anterior trebuie să determine, potrivit capitolului:",
  "options": [
   "Evaluarea atentă a aderenței la tratament, apoi, dacă pacientul aderă, a stilului de viață și a cauzelor secundare",
   "Inițierea imediată a denervării renale, fără reevaluarea aderenței",
   "Oprirea tuturor antihipertensivelor pentru 6 luni, ca test diagnostic",
   "Ignorarea aderenței, cauza fiind constant o stenoză de arteră renală",
   "ABPM-ul este contraindicat în această situație"
  ],
  "correct": [
   0
  ],
  "explanation": "Evaluarea atentă a aderenței la tratament, apoi, dacă pacientul aderă, a stilului de viață și a cauzelor secundare — Corect: Secvența aderență, apoi stil de viață și secundar dacă aderă, este fraza din paragraf.\n\nInițierea imediată a denervării renale, fără reevaluarea aderenței — Incorect: Denervarea nu este primul pas al agravării bruște.\n\nOprirea tuturor antihipertensivelor pentru 6 luni, ca test diagnostic — Incorect: Oprirea pe 6 luni nu este un test diagnostic citat.\n\nIgnorarea aderenței, cauza fiind constant o stenoză de arteră renală — Incorect: Aderența se evaluează prima; stenoza renală este doar una dintre cauzele secundare posibile.\n\nABPM-ul este contraindicat în această situație — Incorect: ABPM rămâne util pentru fenotipuri, nu este contraindicat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1137, Etiologia — Apariție bruscă sau agravare (pagini PDF: 282).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1137
   ],
   "pdfPages": [
    282
   ],
   "section": "Etiologia — Apariție bruscă sau agravare"
  },
  "learningObjective": "Recunoașterea secvenței aderență → stil de viață → cauze secundare când HTA devine brusc severă sau scapă de sub control.",
  "optionRationales": [
   "Secvența aderență, apoi stil de viață și secundar dacă aderă, este fraza din paragraf.",
   "Denervarea nu este primul pas al agravării bruște.",
   "Oprirea pe 6 luni nu este un test diagnostic citat.",
   "Aderența se evaluează prima; stenoza renală este doar una dintre cauzele secundare posibile.",
   "ABPM rămâne util pentru fenotipuri, nu este contraindicat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii sar peste aderență direct la denervare sau stenoză renală, inversând ordinea de gândire a paragrafului."
  },
  "textbookExpressions": [
   "Apariţia bruscă",
   "aderenţei la tratament"
  ]
 },
 {
  "id": "hta-adv-059",
  "topicId": "hta",
  "type": "CM",
  "stem": "Terapia de scădere a colesterolului la hipertensiv, în strategia de risc CV total, se caracterizează prin:",
  "options": [
   "Cel mai frecvent cu doze mici de statine puternice, recomandată la toți pacienții cu risc cardiovascular total >1% pe an",
   "Pragul de 1%/an poate să nu fie atins la tineri, din cauza influenței vârstei în scorurile de risc, deci se consideră o perspectivă mai de durată a reducerii riscului",
   "Aspirina rămâne de primă intenție în prevenția primară a tânărului hipertensiv, statinelor fiindu-le rezervat riscul <0,1%/an",
   "Statinele se evită dacă riscul depășește 1%/an, fiind rezervate octogenarilor fără HTA",
   "Scorurile de risc nu depind de vârstă, pragul de 1%/an fiind atins constant înainte de 30 de ani"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Cel mai frecvent cu doze mici de statine puternice, recomandată la toți pacienții cu risc cardiovascular total >1% pe an — Corect: Dozele mici de statine puternice și pragul >1%/an deschid recomandarea.\n\nPragul de 1%/an poate să nu fie atins la tineri, din cauza influenței vârstei în scorurile de risc, deci se consideră o perspectivă mai de durată a reducerii riscului — Corect: Nerespectarea pragului la tineri din cauza vârstei și perspectiva de durată completează.\n\nAspirina rămâne de primă intenție în prevenția primară a tânărului hipertensiv, statinelor fiindu-le rezervat riscul <0,1%/an — Incorect: Aspirina nu mai este recomandată în prevenția primară; >1%/an este al statinelor, nu <0,1%.\n\nStatinele se evită dacă riscul depășește 1%/an, fiind rezervate octogenarilor fără HTA — Incorect: Pragul >1%/an este tocmai indicația, nu o contraindicație.\n\nScorurile de risc nu depind de vârstă, pragul de 1%/an fiind atins constant înainte de 30 de ani — Incorect: Vârsta influențează puternic scorul; tinerii pot rămâne sub 1%/an.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 31, p. 1142, Reducerea riscului cardiovascular total — Statine (pagini PDF: 287).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 31,
   "printedPages": [
    1142
   ],
   "pdfPages": [
    287
   ],
   "section": "Reducerea riscului cardiovascular total — Statine"
  },
  "learningObjective": "Separarea pragului >1%/an pentru statină de nuanța tânărului (vârsta în scor) și de abandonul aspirinei în prevenția primară.",
  "optionRationales": [
   "Dozele mici de statine puternice și pragul >1%/an deschid recomandarea.",
   "Nerespectarea pragului la tineri din cauza vârstei și perspectiva de durată completează.",
   "Aspirina nu mai este recomandată în prevenția primară; >1%/an este al statinelor, nu <0,1%.",
   "Pragul >1%/an este tocmai indicația, nu o contraindicație.",
   "Vârsta influențează puternic scorul; tinerii pot rămâne sub 1%/an."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii mută pragul de 1%/an de pe statină pe aspirină sau îl transformă în contraindicație."
  },
  "textbookExpressions": [
   "mai mare de 1% pe an",
   "doze mici de statine"
  ]
 }
];
