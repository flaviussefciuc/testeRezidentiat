import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_ORTOPEDIE:(Question&Record<string,unknown>)[]=[
 {
  "id": "ortopedie-adv-001",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Fractura, subluxația și luxația se definesc astfel:",
  "options": [
   "Fractura este o întrerupere sau o pierdere a continuității structurale a unui os",
   "În subluxație, suprafețele articulare juxtapuse sunt parțial lipsite de contact",
   "În luxație, suprafețele articulare sunt total lipsite de contact",
   "Subluxația articulară nu poate fi tranzitorie și nu se reduce spontan",
   "Luxația reprezintă o deplasare parțială, iar subluxația una completă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Fractura este o întrerupere sau o pierdere a continuității structurale a unui os — Corect: Definiția fracturii ca întrerupere sau pierdere a continuității osoase este explicită.\n\nÎn subluxație, suprafețele articulare juxtapuse sunt parțial lipsite de contact — Corect: Textul descrie subluxația ca lipsă parțială de contact a suprafețelor juxtapuse.\n\nÎn luxație, suprafețele articulare sunt total lipsite de contact — Corect: Luxația este definită prin lipsa totală de contact.\n\nSubluxația articulară nu poate fi tranzitorie și nu se reduce spontan — Incorect: Subluxația poate fi tranzitorie, cu reducere spontană.\n\nLuxația reprezintă o deplasare parțială, iar subluxația una completă — Incorect: Raportul este invers: subluxația este parțială, luxația este completă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 585, Traumatismele — Fracturi, subluxații și luxații (pagini PDF: 257).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    585
   ],
   "pdfPages": [
    257
   ],
   "section": "Traumatismele — Fracturi, subluxații și luxații"
  },
  "learningObjective": "Diferențierea întreruperii osoase de deplasarea parțială versus completă a suprafețelor articulare.",
  "optionRationales": [
   "Definiția fracturii ca întrerupere sau pierdere a continuității osoase este explicită.",
   "Textul descrie subluxația ca lipsă parțială de contact a suprafețelor juxtapuse.",
   "Luxația este definită prin lipsa totală de contact.",
   "Subluxația poate fi tranzitorie, cu reducere spontană.",
   "Raportul este invers: subluxația este parțială, luxația este completă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează deplasarea parțială/completă, o confuzie clasică de nomenclatură."
  },
  "textbookExpressions": [
   "pierdere a continuităţii",
   "total lipsite de contact"
  ]
 },
 {
  "id": "ortopedie-adv-002",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații privind impactul patologiilor musculoscheletale sunt adevărate?",
  "options": [
   "Patologiile musculoscheletale sunt a doua cea mai frecventă cauză de prezentare la medic",
   "Patruzeci la sută dintre prezentările de la camera de gardă sunt asociate afecțiunilor musculo-scheletale",
   "Dorsalgia este cea mai frecventă cauză de absenteism și de dizabilitate la pacienții sub 45 de ani",
   "Osteoporoza afectează sub 2 milioane de femei aflate la postmenopauză",
   "Sistemul musculoscheletal reprezintă sub 10% din masa totală a corpului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Patologiile musculoscheletale sunt a doua cea mai frecventă cauză de prezentare la medic — Corect: Locul doi al prezentărilor la medic este citat explicit.\n\nPatruzeci la sută dintre prezentările de la camera de gardă sunt asociate afecțiunilor musculo-scheletale — Corect: Procentul de 40% la camera de gardă este enunțat.\n\nDorsalgia este cea mai frecventă cauză de absenteism și de dizabilitate la pacienții sub 45 de ani — Corect: Dorsalgia ca principală cauză de absenteism sub 45 de ani este explicită.\n\nOsteoporoza afectează sub 2 milioane de femei aflate la postmenopauză — Incorect: Textul estimează osteoporoza la peste 20 de milioane de femei postmenopauză.\n\nSistemul musculoscheletal reprezintă sub 10% din masa totală a corpului — Incorect: Oasele, articulațiile, mușchii, tendoanele, ligamentele și fascia reprezintă 70% din masa corporală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 585, Sistemul musculoscheletal — Impact epidemiologic (pagini PDF: 257).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    585
   ],
   "pdfPages": [
    257
   ],
   "section": "Sistemul musculoscheletal — Impact epidemiologic"
  },
  "learningObjective": "Recunoașterea ponderii prezentărilor, a camerei de gardă și a dorsalgiei ca principală cauză de absenteism sub 45 de ani.",
  "optionRationales": [
   "Locul doi al prezentărilor la medic este citat explicit.",
   "Procentul de 40% la camera de gardă este enunțat.",
   "Dorsalgia ca principală cauză de absenteism sub 45 de ani este explicită.",
   "Textul estimează osteoporoza la peste 20 de milioane de femei postmenopauză.",
   "Oasele, articulațiile, mușchii, tendoanele, ligamentele și fascia reprezintă 70% din masa corporală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește pragurile 20 de milioane și 70% cu valori subestimate din aceeași pagină."
  },
  "textbookExpressions": [
   "Patruzeci la sută",
   "Dorsalgia este cea mai frecventă"
  ]
 },
 {
  "id": "ortopedie-adv-003",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la fracturile deschise:",
  "options": [
   "O fractură este deschisă când o leziune a tegumentului sau a mucoasei permite comunicarea cu mediul extern",
   "Fracturile pelvine pot comunica cu rectul sau vaginul și sunt descoperite doar la un examen fizic amănunțit",
   "Prin definiție, fracturile deschise sunt contaminate și necesită tratament de urgență pentru a preveni infecția",
   "O fractură este deschisă numai dacă linia de fractură este vizibilă la inspecție",
   "Fractura închisă presupune discontinuitate tegumentară, dar fără contaminare bacteriană"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "O fractură este deschisă când o leziune a tegumentului sau a mucoasei permite comunicarea cu mediul extern — Corect: Definiția prin leziune tegumentară sau mucoasă cu comunicare externă este explicită.\n\nFracturile pelvine pot comunica cu rectul sau vaginul și sunt descoperite doar la un examen fizic amănunțit — Corect: Comunicarea pelvină cu rectul sau vaginul este menționată ca descoperire la examen amănunțit.\n\nPrin definiție, fracturile deschise sunt contaminate și necesită tratament de urgență pentru a preveni infecția — Corect: Contaminarea prin definiție și urgența tratamentului sunt enunțate.\n\nO fractură este deschisă numai dacă linia de fractură este vizibilă la inspecție — Incorect: Unele fracturi deschise, precum cele pelvine, nu sunt evidente la inspecție.\n\nFractura închisă presupune discontinuitate tegumentară, dar fără contaminare bacteriană — Incorect: Fractura închisă are pielea sau mucoasa supraiacentă intactă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 586, Fracturile — Tip: deschisă versus închisă (pagini PDF: 258).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    586
   ],
   "pdfPages": [
    258
   ],
   "section": "Fracturile — Tip: deschisă versus închisă"
  },
  "learningObjective": "Recunoașterea comunicării cu mediul extern, inclusiv pe cale pelvină ocultă, ca definiție a fracturii deschise contaminate.",
  "optionRationales": [
   "Definiția prin leziune tegumentară sau mucoasă cu comunicare externă este explicită.",
   "Comunicarea pelvină cu rectul sau vaginul este menționată ca descoperire la examen amănunțit.",
   "Contaminarea prin definiție și urgența tratamentului sunt enunțate.",
   "Unele fracturi deschise, precum cele pelvine, nu sunt evidente la inspecție.",
   "Fractura închisă are pielea sau mucoasa supraiacentă intactă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii cer vizibilitate la inspecție și inversează definiția fracturii închise."
  },
  "textbookExpressions": [
   "deschise sunt contaminate",
   "microfracturi"
  ]
 },
 {
  "id": "ortopedie-adv-004",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre fractura de stres, fractura pe os patologic și localizare:",
  "options": [
   "Stresul submaximal repetat poate produce microfracturi care, netratate, conduc la fractură de stres",
   "Fractura pe os patologic apare după o traumă minimă pe os anormal, inclusiv osteoporoză sau tumori",
   "Fracturile metafizare, cu aport sanguin bogat, se vindecă de obicei mai repede decât cele diafizare corticale",
   "Fractura de stres este tipică numai osului tumoral, nu soldaților sau antrenamentului intens",
   "Vindecarea diafizară este mai rapidă decât cea metafizară, deci nu necesită protecție prelungită"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Stresul submaximal repetat poate produce microfracturi care, netratate, conduc la fractură de stres — Corect: Mecanismul microfracturilor prin stres submaximal repetat este descris.\n\nFractura pe os patologic apare după o traumă minimă pe os anormal, inclusiv osteoporoză sau tumori — Corect: Definiția pe os patologic, cu osteoporoză și tumori, este explicită.\n\nFracturile metafizare, cu aport sanguin bogat, se vindecă de obicei mai repede decât cele diafizare corticale — Corect: Vindecarea mai rapidă a osului metafizar/spongios față de corticala diafizară este enunțată.\n\nFractura de stres este tipică numai osului tumoral, nu soldaților sau antrenamentului intens — Incorect: Fracturile de stres sunt frecvente la soldați și la antrenament intens pe condiție precară.\n\nVindecarea diafizară este mai rapidă decât cea metafizară, deci nu necesită protecție prelungită — Incorect: Fracturile diafizare se vindecă mai lent și cer perioade mai lungi de protecție.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 586, Fracturile — Stres, os patologic și localizare (pagini PDF: 258).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    586
   ],
   "pdfPages": [
    258
   ],
   "section": "Fracturile — Stres, os patologic și localizare"
  },
  "learningObjective": "Diferențierea fracturii de stres de cea pe os patologic și a ritmului de vindecare metafizar versus diafizar.",
  "optionRationales": [
   "Mecanismul microfracturilor prin stres submaximal repetat este descris.",
   "Definiția pe os patologic, cu osteoporoză și tumori, este explicită.",
   "Vindecarea mai rapidă a osului metafizar/spongios față de corticala diafizară este enunțată.",
   "Fracturile de stres sunt frecvente la soldați și la antrenament intens pe condiție precară.",
   "Fracturile diafizare se vindecă mai lent și cer perioade mai lungi de protecție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sediul predilect al stresului și ritmul de vindecare metafiză/diafiză."
  },
  "textbookExpressions": [
   "de stres sunt frecvent",
   "os patologic"
  ]
 },
 {
  "id": "ortopedie-adv-005",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la traiectul unei fracturi transversale:",
  "options": [
   "Apare în urma unui traumatism cu energie redusă, de obicei prin lovitură directă sau avulsie ligamentară",
   "Rezultă tipic din torsiune de mare energie și are tendință minimă de deplasare",
   "Definește orice fractură cu peste două fragmente, denumită și cominutivă",
   "Este traiectul caracteristic al fracturilor intra-articulare ale platoului tibial",
   "Indică absorbția unei energii cinetice maxime, similar fracturii segmentare"
  ],
  "correct": [
   0
  ],
  "explanation": "Apare în urma unui traumatism cu energie redusă, de obicei prin lovitură directă sau avulsie ligamentară — Corect: Textul leagă traiectul transversal de energia redusă, lovitura directă sau avulsia ligamentară.\n\nRezultă tipic din torsiune de mare energie și are tendință minimă de deplasare — Incorect: Torsiunea produce fracturi spiroide sau oblice, care tind să se deplaseze și să se scurteze.\n\nDefinește orice fractură cu peste două fragmente, denumită și cominutivă — Incorect: Peste două fragmente definesc fractura cominutivă, nu pe cea transversală.\n\nEste traiectul caracteristic al fracturilor intra-articulare ale platoului tibial — Incorect: Platoul tibial este citat la fractura impactată, nu ca sediu al traiectului transversal.\n\nIndică absorbția unei energii cinetice maxime, similar fracturii segmentare — Incorect: Energia mare caracterizează fracturile cominutive, nu transversale.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 586, Traiectul fracturii — Transversală versus spiroidă (pagini PDF: 258).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    586
   ],
   "pdfPages": [
    258
   ],
   "section": "Traiectul fracturii — Transversală versus spiroidă"
  },
  "learningObjective": "Recunoașterea fracturii transversale ca leziune de energie redusă, distinctă de spiroidă de torsiune.",
  "optionRationales": [
   "Textul leagă traiectul transversal de energia redusă, lovitura directă sau avulsia ligamentară.",
   "Torsiunea produce fracturi spiroide sau oblice, care tind să se deplaseze și să se scurteze.",
   "Peste două fragmente definesc fractura cominutivă, nu pe cea transversală.",
   "Platoul tibial este citat la fractura impactată, nu ca sediu al traiectului transversal.",
   "Energia mare caracterizează fracturile cominutive, nu transversale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută traiectul transversal către torsiune sau cominuție, două tipare învecinate din aceeași pagină."
  },
  "textbookExpressions": [
   "fractură transversală",
   "energie redusă"
  ]
 },
 {
  "id": "ortopedie-adv-006",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Clasificarea Salter-Harris a decolărilor epifizare:",
  "options": [
   "Tipul I presupune separarea epifizei de metafiză; dacă periostul este intact, fractura rămâne nedeplasată",
   "Tipul III se extinde de la cartilajul de creștere prin epifiză, este intra-articular și necesită reducere perfectă",
   "Tipul IV trece din metafiză prin placa de creștere în epifiză și trebuie fixat chirurgical",
   "Tipul V este cel mai ușor de recunoscut pe radiografia inițială, ca o linie metafizară triunghiulară",
   "Urmărirea radiografică a fracturilor plăcii de creștere se încheie la 6 săptămâni"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tipul I presupune separarea epifizei de metafiză; dacă periostul este intact, fractura rămâne nedeplasată — Corect: Separarea epifiză-metafiză și rolul periostului în nedeplasare sunt explicite.\n\nTipul III se extinde de la cartilajul de creștere prin epifiză, este intra-articular și necesită reducere perfectă — Corect: Caracterul intra-articular al tipului III și cerința reducerii perfecte sunt enunțate.\n\nTipul IV trece din metafiză prin placa de creștere în epifiză și trebuie fixat chirurgical — Corect: Traiectul IV și indicația de fixare chirurgicală pentru a preveni pseudartroza sunt descrise.\n\nTipul V este cel mai ușor de recunoscut pe radiografia inițială, ca o linie metafizară triunghiulară — Incorect: Tipul V poate să nu fie aparent pe radiografii și este greu de identificat prospectiv.\n\nUrmărirea radiografică a fracturilor plăcii de creștere se încheie la 6 săptămâni — Incorect: Toate fracturile plăcii de creștere se investighează radiografic cel puțin la 1 an.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 588, Clasificarea Salter-Harris a decolărilor epifizare (pagini PDF: 260).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    588
   ],
   "pdfPages": [
    260
   ],
   "section": "Clasificarea Salter-Harris a decolărilor epifizare"
  },
  "learningObjective": "Aplicarea tipurilor I, III și IV și a implicațiilor de reducere, fixare și prognostic, față de tipul V occult.",
  "optionRationales": [
   "Separarea epifiză-metafiză și rolul periostului în nedeplasare sunt explicite.",
   "Caracterul intra-articular al tipului III și cerința reducerii perfecte sunt enunțate.",
   "Traiectul IV și indicația de fixare chirurgicală pentru a preveni pseudartroza sunt descrise.",
   "Tipul V poate să nu fie aparent pe radiografii și este greu de identificat prospectiv.",
   "Toate fracturile plăcii de creștere se investighează radiografic cel puțin la 1 an."
  ],
  "difficulty": {
   "score": 9,
   "kind": "editorial-estimate",
   "reason": "Confundă tipul V occult cu fragmentul metafizar al tipului II și scurtează urmărirea de la 1 an la 6 săptămâni."
  },
  "textbookExpressions": [
   "Salter-Harris de tip I",
   "placa de creştere"
  ]
 },
 {
  "id": "ortopedie-adv-007",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Precizați enunțul corect privind termenii varus și valgus:",
  "options": [
   "Varus descrie vârful angulării îndreptat opus liniei mediane; genu varum corespunde picioarelor în paranteză",
   "Valgus descrie vârful angulării îndreptat opus liniei mediane; genu valgum corespunde picioarelor în paranteză",
   "Rotația se cuantifică în procente pe radiografia unică de față, nu clinic",
   "Apoziția se exprimă în grade, iar angulația în centimetri",
   "Genu valgum denumește picioarele în paranteză, iar genu varum picioarele în X"
  ],
  "correct": [
   0
  ],
  "explanation": "Varus descrie vârful angulării îndreptat opus liniei mediane; genu varum corespunde picioarelor în paranteză — Corect: Direcția opusă liniei mediane definește varus; genu varum sunt picioarele în paranteză.\n\nValgus descrie vârful angulării îndreptat opus liniei mediane; genu valgum corespunde picioarelor în paranteză — Incorect: Valgus are vârful către linia mediană; picioarele în X sunt genu valgum.\n\nRotația se cuantifică în procente pe radiografia unică de față, nu clinic — Incorect: Rotația se diagnostichează cel mai bine clinic, nu pe o singură radiografie de față.\n\nApoziția se exprimă în grade, iar angulația în centimetri — Incorect: Apoziția se cuantifică în procente, angulația în grade, scurtarea în centimetri.\n\nGenu valgum denumește picioarele în paranteză, iar genu varum picioarele în X — Incorect: Raportul paranteză/X este inversat față de text.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 588, Deplasarea — Varus, valgus, apoziție și rotație (pagini PDF: 260).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    588
   ],
   "pdfPages": [
    260
   ],
   "section": "Deplasarea — Varus, valgus, apoziție și rotație"
  },
  "learningObjective": "Diferențierea varus/valgus după direcția vârfului angulării față de linia mediană.",
  "optionRationales": [
   "Direcția opusă liniei mediane definește varus; genu varum sunt picioarele în paranteză.",
   "Valgus are vârful către linia mediană; picioarele în X sunt genu valgum.",
   "Rotația se diagnostichează cel mai bine clinic, nu pe o singură radiografie de față.",
   "Apoziția se cuantifică în procente, angulația în grade, scurtarea în centimetri.",
   "Raportul paranteză/X este inversat față de text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește varus și valgus, confuzia clasică paranteză versus X."
  },
  "textbookExpressions": [
   "genu varum",
   "genu valgum"
  ]
 },
 {
  "id": "ortopedie-adv-008",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Următoarele afirmații despre evaluarea radiologică a traumatismului musculoscheletal sunt adevărate:",
  "options": [
   "Sunt necesare două incidențe în unghi drept, de obicei anteroposterioară și laterală",
   "Trebuie vizualizată atât articulația proximală, cât și cea distală față de zona lezată",
   "Radiografiile coloanei cervicale sunt indicate la pacienții cu leziuni faciale și la nivelul capului",
   "O singură incidență AP este suficientă pentru cuantificarea deplasării tridimensionale",
   "Fractura de scafoid, dacă nu este evidentă radiografic, se lasă nemobilizată până la CT"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sunt necesare două incidențe în unghi drept, de obicei anteroposterioară și laterală — Corect: Cele două incidențe perpendiculare sunt cerute explicit.\n\nTrebuie vizualizată atât articulația proximală, cât și cea distală față de zona lezată — Corect: Vizualizarea articulațiilor proximală și distală este al doilea principiu.\n\nRadiografiile coloanei cervicale sunt indicate la pacienții cu leziuni faciale și la nivelul capului — Corect: Asocierea leziunilor faciale/cap cu radiografii cervicale este enunțată.\n\nO singură incidență AP este suficientă pentru cuantificarea deplasării tridimensionale — Incorect: O singură incidență nu permite descrierea exactă a deplasării.\n\nFractura de scafoid, dacă nu este evidentă radiografic, se lasă nemobilizată până la CT — Incorect: Dacă fractura de scafoid este suspectată clinic, se imobilizează și se reevaluează.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 588, 590, Evaluarea pacienților cu traumatism musculoscheletal (pagini PDF: 260, 262).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    588,
    590
   ],
   "pdfPages": [
    260,
    262
   ],
   "section": "Evaluarea pacienților cu traumatism musculoscheletal"
  },
  "learningObjective": "Aplicarea regulilor celor două incidențe, a articulațiilor adiacente și a asocierilor (cervical, scafoid).",
  "optionRationales": [
   "Cele două incidențe perpendiculare sunt cerute explicit.",
   "Vizualizarea articulațiilor proximală și distală este al doilea principiu.",
   "Asocierea leziunilor faciale/cap cu radiografii cervicale este enunțată.",
   "O singură incidență nu permite descrierea exactă a deplasării.",
   "Dacă fractura de scafoid este suspectată clinic, se imobilizează și se reevaluează."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează regula celor două incidențe și a imobilizării scafoidului occult."
  },
  "textbookExpressions": [
   "două incidenţe",
   "coloanei cervicale"
  ]
 },
 {
  "id": "ortopedie-adv-009",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Sindromul de embolie grăsoasă după fracturi de oase lungi se caracterizează prin:",
  "options": [
   "Peteșii asociate cu alterarea stării mentale",
   "Dispnee și saturație scăzută a oxigenului, cu opacifiere difuză pe radiografia toracică, fără leziuni focale",
   "Diagnostic clinic, în absența unei investigații de laborator specifice",
   "Confirmarea prin dozarea trigliceridelor serice înaintea oricărui tratament",
   "Tratamentul de primă intenție este embolectomia chirurgicală a arterei pulmonare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Peteșii asociate cu alterarea stării mentale — Corect: Asocierea peteșii-alterare mentală este explicită.\n\nDispnee și saturație scăzută a oxigenului, cu opacifiere difuză pe radiografia toracică, fără leziuni focale — Corect: Dispneea, hipoxemia și opacifierea difuză fără focare sunt descrise.\n\nDiagnostic clinic, în absența unei investigații de laborator specifice — Corect: Absența unei investigații de laborator specifice este enunțată.\n\nConfirmarea prin dozarea trigliceridelor serice înaintea oricărui tratament — Incorect: Nu există test de laborator specific; diagnosticul este clinic.\n\nTratamentul de primă intenție este embolectomia chirurgicală a arterei pulmonare — Incorect: Tratamentul este suportiv și, în cazuri grave, intubație cu oxigen până la 100%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 590, Evaluare — Sindromul de embolie grăsoasă (pagini PDF: 262).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    590
   ],
   "pdfPages": [
    262
   ],
   "section": "Evaluare — Sindromul de embolie grăsoasă"
  },
  "learningObjective": "Recunoașterea triadei clinico-radiologice și a caracterului de diagnostic clinic cu tratament suportiv.",
  "optionRationales": [
   "Asocierea peteșii-alterare mentală este explicită.",
   "Dispneea, hipoxemia și opacifierea difuză fără focare sunt descrise.",
   "Absența unei investigații de laborator specifice este enunțată.",
   "Nu există test de laborator specific; diagnosticul este clinic.",
   "Tratamentul este suportiv și, în cazuri grave, intubație cu oxigen până la 100%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă un diagnostic clinic suportiv într-unul de laborator sau chirurgical."
  },
  "textbookExpressions": [
   "embolie grăsoasă",
   "opacifiere difuză"
  ]
 },
 {
  "id": "ortopedie-adv-010",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Montarea corectă a atelei la un pacient cu fractură presupune:",
  "options": [
   "Imobilizarea atât a articulației supraiacente, cât și a celei subiacente focarului de fractură",
   "Imobilizarea doar a focarului, lăsând articulațiile adiacente libere pentru a preveni redoarea",
   "Aplicarea tracțiunii transosoase înaintea oricărei atele, la toate fracturile de antebraț",
   "Verificarea neurovasculară o singură dată, înainte de montarea atelei, fără reevaluare",
   "Lăsarea fracturilor deschise fără atelă, pentru a nu închide contaminarea"
  ],
  "correct": [
   0
  ],
  "explanation": "Imobilizarea atât a articulației supraiacente, cât și a celei subiacente focarului de fractură — Corect: Textul cere imobilizarea articulației supraiacente și a celei subiacente.\n\nImobilizarea doar a focarului, lăsând articulațiile adiacente libere pentru a preveni redoarea — Incorect: Atelele trebuie să cuprindă articulațiile adiacente, nu doar focarul.\n\nAplicarea tracțiunii transosoase înaintea oricărei atele, la toate fracturile de antebraț — Incorect: Tracțiunea transosoasă nu este pasul inițial al tuturor fracturilor de antebraț.\n\nVerificarea neurovasculară o singură dată, înainte de montarea atelei, fără reevaluare — Incorect: Examenul neurovascular se repetă după orice reducere sau manipulare.\n\nLăsarea fracturilor deschise fără atelă, pentru a nu închide contaminarea — Incorect: Toate traumatismele musculo-scheletale se imobilizează în atele, inclusiv cele deschise.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 590, Principii de tratament — Imobilizarea în atelă (pagini PDF: 262).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    590
   ],
   "pdfPages": [
    262
   ],
   "section": "Principii de tratament — Imobilizarea în atelă"
  },
  "learningObjective": "Recunoașterea imobilizării articulațiilor de deasupra și de dedesubt ca regulă a atelei corecte.",
  "optionRationales": [
   "Textul cere imobilizarea articulației supraiacente și a celei subiacente.",
   "Atelele trebuie să cuprindă articulațiile adiacente, nu doar focarul.",
   "Tracțiunea transosoasă nu este pasul inițial al tuturor fracturilor de antebraț.",
   "Examenul neurovascular se repetă după orice reducere sau manipulare.",
   "Toate traumatismele musculo-scheletale se imobilizează în atele, inclusiv cele deschise."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Omite articulațiile adiacente, o eroare practică frecventă de imobilizare."
  },
  "textbookExpressions": [
   "Montarea corectă",
   "subiacente focarului"
  ]
 },
 {
  "id": "ortopedie-adv-011",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "În tratamentul inițial al fracturii deschise se recomandă:",
  "options": [
   "Examinarea leziunii o singură dată, acoperirea cu pansament steril și imobilizarea în atelă",
   "Administrarea de vaccin antitetanic, dacă este necesar, și inițierea antibioticelor",
   "Pentru leziunile ușor contaminate, cefalosporine de generația I intravenos",
   "Debridarea și irigarea se fac de rutină la pat, fără anestezie, înaintea oricărui pansament",
   "Tratamentul fracturii se finalizează înainte de obținerea unei plăgi aseptice"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Examinarea leziunii o singură dată, acoperirea cu pansament steril și imobilizarea în atelă — Corect: Examenul unic, pansamentul steril și atela sunt descrise.\n\nAdministrarea de vaccin antitetanic, dacă este necesar, și inițierea antibioticelor — Corect: Antitetanosul și antibioticele sunt cerute.\n\nPentru leziunile ușor contaminate, cefalosporine de generația I intravenos — Corect: Cefalosporinele de generația I intravenos sunt indicate la contaminare ușoară.\n\nDebridarea și irigarea se fac de rutină la pat, fără anestezie, înaintea oricărui pansament — Incorect: Debridarea și irigarea se fac de obicei în sala de operație, sub anestezie generală.\n\nTratamentul fracturii se finalizează înainte de obținerea unei plăgi aseptice — Incorect: Tratamentul fracturii nu se realizează până nu se obține o plagă aseptică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 591, Fracturi deschise — Debridare și antibiotice (pagini PDF: 263).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    591
   ],
   "pdfPages": [
    263
   ],
   "section": "Fracturi deschise — Debridare și antibiotice"
  },
  "learningObjective": "Aplicarea secvenței examen unic-pansament-atelă, a antitetanosului și a cefalosporinei de generația I la contaminare ușoară.",
  "optionRationales": [
   "Examenul unic, pansamentul steril și atela sunt descrise.",
   "Antitetanosul și antibioticele sunt cerute.",
   "Cefalosporinele de generația I intravenos sunt indicate la contaminare ușoară.",
   "Debridarea și irigarea se fac de obicei în sala de operație, sub anestezie generală.",
   "Tratamentul fracturii nu se realizează până nu se obține o plagă aseptică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează locul debridării (sala versus pat) și ordinea plagă aseptică/osteosinteză."
  },
  "textbookExpressions": [
   "cefalosporine de generaţia I",
   "pansament steril"
  ]
 },
 {
  "id": "ortopedie-adv-012",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Formarea calusului moale în etapele vindecării fracturii corespunde intervalului:",
  "options": [
   "2 zile–6 săptămâni, cu proliferare de condroblaste și osteoblaste și os imatur sau fibros",
   "Imediat după traumatism, concomitent cu formarea hematomului",
   "10 zile–4 luni, etapă de consolidare cu os lamelar",
   "2–24 luni, de remodelare și reconstituire a cavității medulare",
   "Ore până la săptămâni, limitat la inflamație fără proliferare celulară"
  ],
  "correct": [
   0
  ],
  "explanation": "2 zile–6 săptămâni, cu proliferare de condroblaste și osteoblaste și os imatur sau fibros — Corect: Tabelul atribuie calusului moale intervalul 2 zile–6 săptămâni și osul fibros.\n\nImediat după traumatism, concomitent cu formarea hematomului — Incorect: Hematomul se formează imediat, distinct de calusul moale.\n\n10 zile–4 luni, etapă de consolidare cu os lamelar — Incorect: Calusul dur (consolidare, os lamelar) este 10 zile–4 luni.\n\n2–24 luni, de remodelare și reconstituire a cavității medulare — Incorect: Remodelarea este 2–24 luni.\n\nOre până la săptămâni, limitat la inflamație fără proliferare celulară — Incorect: Inflamația și proliferarea celulară ocupă ore până la săptămâni, înaintea calusului moale.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 591, Etapele vindecării fracturii — Tabelul 28-1 (pagini PDF: 263).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    591
   ],
   "pdfPages": [
    263
   ],
   "section": "Etapele vindecării fracturii — Tabelul 28-1"
  },
  "learningObjective": "Plasarea calusului moale între hematom/inflamație și calusul dur, cu intervalul 2 zile–6 săptămâni.",
  "optionRationales": [
   "Tabelul atribuie calusului moale intervalul 2 zile–6 săptămâni și osul fibros.",
   "Hematomul se formează imediat, distinct de calusul moale.",
   "Calusul dur (consolidare, os lamelar) este 10 zile–4 luni.",
   "Remodelarea este 2–24 luni.",
   "Inflamația și proliferarea celulară ocupă ore până la săptămâni, înaintea calusului moale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează intervalele tabelului 28-1 între calus moale, calus dur și remodelare."
  },
  "textbookExpressions": [
   "calusului moale",
   "2 zile - 6 săptămâni"
  ]
 },
 {
  "id": "ortopedie-adv-013",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Indicațiile reducerii deschise a unei fracturi includ:",
  "options": [
   "Eșecul metodelor de reducere închisă",
   "Fracturile cu traiect intra-articular, pentru reconstituirea perfectă a suprafeței articulare",
   "Reducerea deschisă ca primă intenție a oricărei fracturi transversale de ulnă, fără tentativă închisă",
   "Menținerea alinierii doar prin gravitație, fără nicio formă de imobilizare",
   "Interzicerea reducerii închise la copii, inclusiv a tracțiunii transtegumentare"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Eșecul metodelor de reducere închisă — Corect: Eșecul reducerii închise este prima indicație enunțată.\n\nFracturile cu traiect intra-articular, pentru reconstituirea perfectă a suprafeței articulare — Corect: Fracturile intra-articulare cer reconstituire perfectă pentru a împiedica artroza.\n\nReducerea deschisă ca primă intenție a oricărei fracturi transversale de ulnă, fără tentativă închisă — Incorect: Reducerea închisă este metoda inițială; transversala de ulnă nu este indicație de deschidere primară.\n\nMenținerea alinierii doar prin gravitație, fără nicio formă de imobilizare — Incorect: Menținerea reducerii necesită imobilizare (gips, tracțiune, orteză, fixare).\n\nInterzicerea reducerii închise la copii, inclusiv a tracțiunii transtegumentare — Incorect: Tracțiunea transtegumentară este utilă la copiii mici.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 591, Reducerea — Închisă versus deschisă (pagini PDF: 263).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    591
   ],
   "pdfPages": [
    263
   ],
   "section": "Reducerea — Închisă versus deschisă"
  },
  "learningObjective": "Recunoașterea eșecului reducerii închise și a fracturilor intra-articulare ca indicații de reducere deschisă.",
  "optionRationales": [
   "Eșecul reducerii închise este prima indicație enunțată.",
   "Fracturile intra-articulare cer reconstituire perfectă pentru a împiedica artroza.",
   "Reducerea închisă este metoda inițială; transversala de ulnă nu este indicație de deschidere primară.",
   "Menținerea reducerii necesită imobilizare (gips, tracțiune, orteză, fixare).",
   "Tracțiunea transtegumentară este utilă la copiii mici."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde reducerea deschisă la toate transversalele și anulează tracțiunea pediatrică."
  },
  "textbookExpressions": [
   "reducerea deschisă",
   "intra-articular"
  ]
 },
 {
  "id": "ortopedie-adv-014",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Indicațiile pentru fixarea internă a unei fracturi, conform tabelului 28-2, includ:",
  "options": [
   "Eșecul metodelor non-operatorii de reducere",
   "Reducerea anatomică a fracturilor intra-articulare",
   "Fracturi la care nu se poate aplica tracțiune sau gips, de exemplu col femural sau intertrohanteriene la vârstnici",
   "Fracturi deschise contaminate, pentru a evita debridarea repetată",
   "Fracturi infectate, ca metodă de elecție în locul fixatorului extern"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Eșecul metodelor non-operatorii de reducere — Corect: Eșecul non-operator este prima indicație din tabel.\n\nReducerea anatomică a fracturilor intra-articulare — Corect: Reducerea anatomică intra-articulară figurează explicit.\n\nFracturi la care nu se poate aplica tracțiune sau gips, de exemplu col femural sau intertrohanteriene la vârstnici — Corect: Colul femural și fracturile intertrohanteriene la vârstnici sunt exemplele din tabel.\n\nFracturi deschise contaminate, pentru a evita debridarea repetată — Incorect: Fracturile deschise instabile sunt indicație de fixare externă, nu internă de primă intenție.\n\nFracturi infectate, ca metodă de elecție în locul fixatorului extern — Incorect: Fracturile infectate figurează la indicațiile fixării externe.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 594, Fixarea internă — Tabelul 28-2 (pagini PDF: 266).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    594
   ],
   "pdfPages": [
    266
   ],
   "section": "Fixarea internă — Tabelul 28-2"
  },
  "learningObjective": "Aplicarea indicațiilor de osteosinteză internă, distincte de cele ale fixatorului extern (deschise, infectate).",
  "optionRationales": [
   "Eșecul non-operator este prima indicație din tabel.",
   "Reducerea anatomică intra-articulară figurează explicit.",
   "Colul femural și fracturile intertrohanteriene la vârstnici sunt exemplele din tabel.",
   "Fracturile deschise instabile sunt indicație de fixare externă, nu internă de primă intenție.",
   "Fracturile infectate figurează la indicațiile fixării externe."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută indicațiile tabelului 28-3 (deschise, infectate) asupra fixării interne."
  },
  "textbookExpressions": [
   "fixarea internă",
   "colului femural"
  ]
 },
 {
  "id": "ortopedie-adv-015",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Fixarea externă a unei fracturi este indicată în:",
  "options": [
   "Fracturi deschise instabile, pentru accesul la plagă și evitarea implantului intern în contaminare",
   "Fracturi pelvine instabile",
   "Fracturi închise nedeplasate de radius distal, ca tratament de primă intenție la vârstnici",
   "Fracturi de scafoid nedeplasate, în locul atelei gipsate",
   "Orice fractură metafizară impactată, pentru a accelera vindecarea spongioasă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Fracturi deschise instabile, pentru accesul la plagă și evitarea implantului intern în contaminare — Corect: Accesul la leziune și evitarea implantului intern în plagă contaminată sunt explicite.\n\nFracturi pelvine instabile — Corect: Fracturile pelvine instabile figurează în tabel.\n\nFracturi închise nedeplasate de radius distal, ca tratament de primă intenție la vârstnici — Incorect: Colles nedeplasat nu este indicație de fixator ca primă intenție.\n\nFracturi de scafoid nedeplasate, în locul atelei gipsate — Incorect: Scafoidul nedeplasat se imobilizează în atelă gipsată.\n\nOrice fractură metafizară impactată, pentru a accelera vindecarea spongioasă — Incorect: Osul metafizar impactat se vindecă adesea fără fixator extern.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 594, Fixarea externă — Tabelul 28-3 (pagini PDF: 266).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    594
   ],
   "pdfPages": [
    266
   ],
   "section": "Fixarea externă — Tabelul 28-3"
  },
  "learningObjective": "Recunoașterea fracturilor deschise instabile și pelvine instabile ca indicații clasice de fixator extern.",
  "optionRationales": [
   "Accesul la leziune și evitarea implantului intern în plagă contaminată sunt explicite.",
   "Fracturile pelvine instabile figurează în tabel.",
   "Colles nedeplasat nu este indicație de fixator ca primă intenție.",
   "Scafoidul nedeplasat se imobilizează în atelă gipsată.",
   "Osul metafizar impactat se vindecă adesea fără fixator extern."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde fixatorul extern la Colles și scafoid nedeplasat, tratate de fapt conservator."
  },
  "textbookExpressions": [
   "Fracturi deschise, instabile",
   "Fracturi pelvine instabile"
  ]
 },
 {
  "id": "ortopedie-adv-016",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Complicațiile locale ale vindecării fracturii includ:",
  "options": [
   "Întârzierea în consolidare, când perioada de vindecare depășește pe cea fiziologică",
   "Pseudartroza, cu țesut fibros sau membrană sinovială între fragmente dacă mobilizarea este excesivă",
   "Calusul vicios, cu scurtare, angulare sau rotație, care poate impune osteotomie de corecție",
   "Embolia grăsoasă și tetanosul, ca manifestări strict locale ale focarului",
   "Artroza post-traumatică apare doar după fracturi extra-articulare perfect reduse"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Întârzierea în consolidare, când perioada de vindecare depășește pe cea fiziologică — Corect: Definiția întârzierii față de perioada fiziologică este explicită.\n\nPseudartroza, cu țesut fibros sau membrană sinovială între fragmente dacă mobilizarea este excesivă — Corect: Pseudartroza cu țesut fibros sau articulație falsă este descrisă.\n\nCalusul vicios, cu scurtare, angulare sau rotație, care poate impune osteotomie de corecție — Corect: Calusul vicios și indicația de osteotomie sunt enunțate.\n\nEmbolia grăsoasă și tetanosul, ca manifestări strict locale ale focarului — Incorect: Embolia grăsoasă și tetanosul sunt complicații sistemice, nu locale.\n\nArtroza post-traumatică apare doar după fracturi extra-articulare perfect reduse — Incorect: Artroza post-traumatică urmează fracturilor intra-articulare cu deplasare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 594, Complicații locale — Consolidare, pseudartroză, calus vicios (pagini PDF: 266).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    594
   ],
   "pdfPages": [
    266
   ],
   "section": "Complicații locale — Consolidare, pseudartroză, calus vicios"
  },
  "learningObjective": "Diferențierea întârzierii, pseudartrozei și calusului vicios de complicațiile sistemice și de artroza intra-articulară.",
  "optionRationales": [
   "Definiția întârzierii față de perioada fiziologică este explicită.",
   "Pseudartroza cu țesut fibros sau articulație falsă este descrisă.",
   "Calusul vicios și indicația de osteotomie sunt enunțate.",
   "Embolia grăsoasă și tetanosul sunt complicații sistemice, nu locale.",
   "Artroza post-traumatică urmează fracturilor intra-articulare cu deplasare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Clasifică greșit embolia/tetanosul ca locale și inversează sediul artrozei post-traumatice."
  },
  "textbookExpressions": [
   "Întârzierea în consolidare",
   "Calusul vicios"
  ]
 },
 {
  "id": "ortopedie-adv-017",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Oasele cele mai vulnerabile la osteonecroză post-traumatică, prin acoperire cartilaginoasă extinsă și înveliș muscular slab, sunt:",
  "options": [
   "Capul femural, scafoidul și talusul",
   "Diafiza femurală, ulna și calcaneul",
   "Metacarpianul V, olecranul și platoul tibial",
   "Coastele, sternul și clavicula medială",
   "Peroneul distal, cuboidul și pisiformul"
  ],
  "correct": [
   0
  ],
  "explanation": "Capul femural, scafoidul și talusul — Corect: Cele trei oase sunt enumerate explicit ca vulnerabile.\n\nDiafiza femurală, ulna și calcaneul — Incorect: Diafiza femurală are înveliș muscular bogat și nu figurează pe listă.\n\nMetacarpianul V, olecranul și platoul tibial — Incorect: Olecranul și platoul tibial nu sunt citate ca sedii clasice de osteonecroză în acest paragraf.\n\nCoastele, sternul și clavicula medială — Incorect: Coastele și sternul nu apar în lista de vulnerabilitate.\n\nPeroneul distal, cuboidul și pisiformul — Incorect: Oasele mici menționate nu sunt cele trei exemple ale textului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 594, Necroza avasculară post-traumatică (pagini PDF: 266).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    594
   ],
   "pdfPages": [
    266
   ],
   "section": "Necroza avasculară post-traumatică"
  },
  "learningObjective": "Identificarea capului femural, scafoidului și talusului ca oase cu risc înalt de osteonecroză.",
  "optionRationales": [
   "Cele trei oase sunt enumerate explicit ca vulnerabile.",
   "Diafiza femurală are înveliș muscular bogat și nu figurează pe listă.",
   "Olecranul și platoul tibial nu sunt citate ca sedii clasice de osteonecroză în acest paragraf.",
   "Coastele și sternul nu apar în lista de vulnerabilitate.",
   "Oasele mici menționate nu sunt cele trei exemple ale textului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește triada cap femural-scafoid-talus cu oase vecine din același capitol."
  },
  "textbookExpressions": [
   "capul femural",
   "osul scafoid"
  ]
 },
 {
  "id": "ortopedie-adv-018",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Scurtarea membrului inferior după leziunea cartilajului de creștere la copil:",
  "options": [
   "O scurtare sub 1 cm este bine tolerată",
   "Scurtarea de 1–2 cm se rezolvă cu pantofi cu talpă groasă",
   "O scurtare peste 2 cm se corectează prin epifiziodeză contralaterală",
   "Orice scurtare, inclusiv de 5 mm, impune alungire chirurgicală imediată",
   "Diformitatea angulară prin afectare parțială nu beneficiază de chirurgie, chiar precoce"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "O scurtare sub 1 cm este bine tolerată — Corect: Toleranța sub 1 cm este explicită.\n\nScurtarea de 1–2 cm se rezolvă cu pantofi cu talpă groasă — Corect: Soluția cu talpă groasă pentru 1–2 cm este citată.\n\nO scurtare peste 2 cm se corectează prin epifiziodeză contralaterală — Corect: Epifiziodeza contralaterală pentru scurtare peste 2 cm este enunțată.\n\nOrice scurtare, inclusiv de 5 mm, impune alungire chirurgicală imediată — Incorect: Scurtarea de 5 mm este bine tolerată, nu impune alungire.\n\nDiformitatea angulară prin afectare parțială nu beneficiază de chirurgie, chiar precoce — Incorect: Diformitatea angulară prin afectare parțială se tratează chirurgical cu rezultate bune dacă este precoce.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 594, Tulburările de creștere — Scurtare și epifiziodeză (pagini PDF: 266).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    594
   ],
   "pdfPages": [
    266
   ],
   "section": "Tulburările de creștere — Scurtare și epifiziodeză"
  },
  "learningObjective": "Aplicarea pragurilor sub 1 cm, 1–2 cm (talpă) și peste 2 cm (epifiziodeză contralaterală).",
  "optionRationales": [
   "Toleranța sub 1 cm este explicită.",
   "Soluția cu talpă groasă pentru 1–2 cm este citată.",
   "Epifiziodeza contralaterală pentru scurtare peste 2 cm este enunțată.",
   "Scurtarea de 5 mm este bine tolerată, nu impune alungire.",
   "Diformitatea angulară prin afectare parțială se tratează chirurgical cu rezultate bune dacă este precoce."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează pragurile 1 cm și 2 cm și anulează osteotomia precoce a deformării angulare."
  },
  "textbookExpressions": [
   "talpă groasă",
   "epifiziodeză"
  ]
 },
 {
  "id": "ortopedie-adv-019",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "În luxația posterioară de șold, membrul afectat este poziționat tipic în:",
  "options": [
   "Flexie, adducție și rotație internă",
   "Extensie, abducție și rotație externă",
   "Flexie, abducție și rotație externă, ca în fractura de col femural",
   "Extensie, adducție și rotație externă",
   "Flexie neutră fără rotație, cu sprijin permis pe membru"
  ],
  "correct": [
   0
  ],
  "explanation": "Flexie, adducție și rotație internă — Corect: Poziția de flexie, adducție și rotație internă este enunțată explicit.\n\nExtensie, abducție și rotație externă — Incorect: Extensia, abducția și rotația externă descriu alt pattern, nu luxația posterioară.\n\nFlexie, abducție și rotație externă, ca în fractura de col femural — Incorect: Rotația externă și scurtarea sunt tipice fracturilor de șold, nu luxației posterioare.\n\nExtensie, adducție și rotație externă — Incorect: Combinația extensie-adducție-rotație externă nu este descrisă.\n\nFlexie neutră fără rotație, cu sprijin permis pe membru — Incorect: Pacientul evită mișcarea articulației luxate; sprijinul nu este permis.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 595, Subluxația și luxația articulară — Poziția membrului (pagini PDF: 267).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    595
   ],
   "pdfPages": [
    267
   ],
   "section": "Subluxația și luxația articulară — Poziția membrului"
  },
  "learningObjective": "Recunoașterea triadei flexie-adducție-rotație internă ca poziție clasică a luxației posterioare de șold.",
  "optionRationales": [
   "Poziția de flexie, adducție și rotație internă este enunțată explicit.",
   "Extensia, abducția și rotația externă descriu alt pattern, nu luxația posterioară.",
   "Rotația externă și scurtarea sunt tipice fracturilor de șold, nu luxației posterioare.",
   "Combinația extensie-adducție-rotație externă nu este descrisă.",
   "Pacientul evită mișcarea articulației luxate; sprijinul nu este permis."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește triada posterioară cu rotația externă a fracturii de șold, două entități învecinate."
  },
  "textbookExpressions": [
   "luxat posterior",
   "rotaţie internă"
  ]
 },
 {
  "id": "ortopedie-adv-020",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Un tânăr cade pe mâna în hiperextensie, cu pumnul în flexie dorsală și deviere radială, și are sensibilitate în tabachera anatomică. Sunt adevărate:",
  "options": [
   "Scafoidul este osul cel mai frecvent fracturat dintre oasele carpiene",
   "Pacientul trebuie tratat ca pentru o fractură dovedită, chiar dacă radiografia inițială nu arată linie de fractură",
   "Fracturile nedeplasate se imobilizează într-o atelă gipsată care încorporează antebrațul în extensie și policele în abducție",
   "Fracturile nedeplasate se lasă fără imobilizare, urmărirea fiind doar clinică la 6 luni",
   "Necroza avasculară este rară, deoarece scafoidul are vascularizație abundantă și nu este acoperit de cartilaj"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Scafoidul este osul cel mai frecvent fracturat dintre oasele carpiene — Corect: Frecvența maximă între oasele carpiene este explicită.\n\nPacientul trebuie tratat ca pentru o fractură dovedită, chiar dacă radiografia inițială nu arată linie de fractură — Corect: Tratamentul ca fractură dovedită, chiar cu radiografie negativă, este cerut.\n\nFracturile nedeplasate se imobilizează într-o atelă gipsată care încorporează antebrațul în extensie și policele în abducție — Corect: Atela cu antebraț în extensie și police în abducție este descrisă pentru nedeplasate.\n\nFracturile nedeplasate se lasă fără imobilizare, urmărirea fiind doar clinică la 6 luni — Incorect: Nedeplasatele se imobilizează, nu se lasă libere.\n\nNecroza avasculară este rară, deoarece scafoidul are vascularizație abundantă și nu este acoperit de cartilaj — Incorect: Scafoidul este acoperit de cartilaj hialin, cu vascularizație limitată, deci NAV și pseudartroză sunt frecvente.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 595, Leziuni frecvente — Fractura osului scafoid (pagini PDF: 267).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    595
   ],
   "pdfPages": [
    267
   ],
   "section": "Leziuni frecvente — Fractura osului scafoid"
  },
  "learningObjective": "Aplicarea mecanismului FOOSH, a regulii tabacherei anatomice și a imobilizării nedeplasate, față de riscul de osteonecroză.",
  "optionRationales": [
   "Frecvența maximă între oasele carpiene este explicită.",
   "Tratamentul ca fractură dovedită, chiar cu radiografie negativă, este cerut.",
   "Atela cu antebraț în extensie și police în abducție este descrisă pentru nedeplasate.",
   "Nedeplasatele se imobilizează, nu se lasă libere.",
   "Scafoidul este acoperit de cartilaj hialin, cu vascularizație limitată, deci NAV și pseudartroză sunt frecvente."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Omite imobilizarea scafoidului occult și neagă riscul de osteonecroză."
  },
  "textbookExpressions": [
   "tabachera anatomică",
   "flexie dorsală"
  ]
 },
 {
  "id": "ortopedie-adv-021",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Fractura Colles a radiusului distal:",
  "options": [
   "Este o fractură transversală imediat proximal de articulația pumnului, după cădere pe mâna în hiperextensie",
   "Este frecventă la vârstnici sau cu osteoporoză; radiografic există cominuție dorsală, impactare și angulare palmară",
   "După reducere, o atelă se aplică de la cot până la palmă, cu radiografie de control la 10 zile",
   "Reducerea se obține prin dorsiflexia accentuată a pumnului și deviație radială",
   "Nervul ulnar este structura de examinat înainte și după reducere, nu nervul median"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este o fractură transversală imediat proximal de articulația pumnului, după cădere pe mâna în hiperextensie — Corect: Definiția transversală imediat proximal de pumn și mecanismul sunt explicite.\n\nEste frecventă la vârstnici sau cu osteoporoză; radiografic există cominuție dorsală, impactare și angulare palmară — Corect: Asocierea cu osteoporoza, cominuția dorsală și angularea palmară sunt descrise.\n\nDupă reducere, o atelă se aplică de la cot până la palmă, cu radiografie de control la 10 zile — Corect: Atela de la cot la palmă și radiografia la 10 zile figurează pe pagina următoare.\n\nReducerea se obține prin dorsiflexia accentuată a pumnului și deviație radială — Incorect: Reducerea pune pumnul în flexie și deviație ulnară, nu în dorsiflexie și deviație radială.\n\nNervul ulnar este structura de examinat înainte și după reducere, nu nervul median — Incorect: Nervul median, aflat pe fața volară, trebuie examinat înainte și după reducere.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 595, 596, Fractura distală de radius — Colles (pagini PDF: 267, 268).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    595,
    596
   ],
   "pdfPages": [
    267,
    268
   ],
   "section": "Fractura distală de radius — Colles"
  },
  "learningObjective": "Recunoașterea mecanismului, a aspectului radiografic și a atelei cot-palmă cu control la 10 zile.",
  "optionRationales": [
   "Definiția transversală imediat proximal de pumn și mecanismul sunt explicite.",
   "Asocierea cu osteoporoza, cominuția dorsală și angularea palmară sunt descrise.",
   "Atela de la cot la palmă și radiografia la 10 zile figurează pe pagina următoare.",
   "Reducerea pune pumnul în flexie și deviație ulnară, nu în dorsiflexie și deviație radială.",
   "Nervul median, aflat pe fața volară, trebuie examinat înainte și după reducere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează flexia/deviația ulnară a reducerii și nervul median cu ulnarul."
  },
  "textbookExpressions": [
   "fractură Colles",
   "angulare palmară"
  ]
 },
 {
  "id": "ortopedie-adv-022",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Pronația dureroasă a cotului la copilul de 1–4 ani, după ce a fost tras de mână, se tratează prin:",
  "options": [
   "Flexie ușoară a cotului și supinația mâinii, cu repoziționarea ligamentului inelar în jurul colului radial",
   "Imobilizare gipsată în pronație forțată timp de 6 săptămâni",
   "Fixare percutanată cu broșe a colului radial, similar fracturii supracondiliene",
   "Tracțiune transosoasă prin olecran, ca în fracturile de humerus",
   "Artrotomie de urgență pentru a exclude artrita septică a cotului"
  ],
  "correct": [
   0
  ],
  "explanation": "Flexie ușoară a cotului și supinația mâinii, cu repoziționarea ligamentului inelar în jurul colului radial — Corect: Manevra de flexie ușoară și supinație, cu repoziționarea ligamentului inelar, este explicită.\n\nImobilizare gipsată în pronație forțată timp de 6 săptămâni — Incorect: Nu se descrie gips în pronație forțată.\n\nFixare percutanată cu broșe a colului radial, similar fracturii supracondiliene — Incorect: Broșele percutanate privesc fractura supracondiliană, nu pronația dureroasă.\n\nTracțiune transosoasă prin olecran, ca în fracturile de humerus — Incorect: Tracțiunea prin olecran nu este tratamentul acestei entități.\n\nArtrotomie de urgență pentru a exclude artrita septică a cotului — Incorect: Artrita septică nu este diagnosticul acestei leziuni de ligament inelar.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 596, Pronația dureroasă a cotului (pagini PDF: 268).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    596
   ],
   "pdfPages": [
    268
   ],
   "section": "Pronația dureroasă a cotului"
  },
  "learningObjective": "Recunoașterea manevrei de flexie ușoară plus supinație ca tratament al subluxației ligamentului inelar.",
  "optionRationales": [
   "Manevra de flexie ușoară și supinație, cu repoziționarea ligamentului inelar, este explicită.",
   "Nu se descrie gips în pronație forțată.",
   "Broșele percutanate privesc fractura supracondiliană, nu pronația dureroasă.",
   "Tracțiunea prin olecran nu este tratamentul acestei entități.",
   "Artrita septică nu este diagnosticul acestei leziuni de ligament inelar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește manevra simplă de supinație cu osteosinteza supracondiliană învecinată."
  },
  "textbookExpressions": [
   "ligamentului inelar",
   "colului radial"
  ]
 },
 {
  "id": "ortopedie-adv-023",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Un copil de 7 ani cade pe mâna hiperextinsă, cu cotul extins. Fractura supracondiliană de humerus:",
  "options": [
   "Fragmentul distal este deplasat adesea posterior",
   "Poate leza artera brahială și nervii median și radial, la producere sau la reducere",
   "Este o cauză frecventă de sindrom de compartiment (contractură ischemică Volkmann)",
   "Ischemia musculară peste 2 ore, la temperatură corporală normală, produce leziuni musculare permanente",
   "Prezența pulsului radial exclude sindromul de compartiment al antebrațului"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Fragmentul distal este deplasat adesea posterior — Corect: Deplasarea posterioară a fragmentului distal este enunțată.\n\nPoate leza artera brahială și nervii median și radial, la producere sau la reducere — Corect: Artera brahială, nervul median și radialul sunt citate.\n\nEste o cauză frecventă de sindrom de compartiment (contractură ischemică Volkmann) — Corect: Asocierea cu contractura ischemică Volkmann este explicită.\n\nIschemia musculară peste 2 ore, la temperatură corporală normală, produce leziuni musculare permanente — Corect: Pragul de peste 2 ore pentru leziuni musculare permanente este descris.\n\nPrezența pulsului radial exclude sindromul de compartiment al antebrațului — Incorect: Sindromul de compartiment poate exista cu puls și sensibilitate normale.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 596, 600, Fractura supracondiliană a humerusului — Volkmann (pagini PDF: 268, 272).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    596,
    600
   ],
   "pdfPages": [
    268,
    272
   ],
   "section": "Fractura supracondiliană a humerusului — Volkmann"
  },
  "learningObjective": "Integrarea deplasării posterioare, a leziunii neurovasculare, a Volkmann și a pragului de 2 ore, față de falsul reconfort al pulsului.",
  "optionRationales": [
   "Deplasarea posterioară a fragmentului distal este enunțată.",
   "Artera brahială, nervul median și radialul sunt citate.",
   "Asocierea cu contractura ischemică Volkmann este explicită.",
   "Pragul de peste 2 ore pentru leziuni musculare permanente este descris.",
   "Sindromul de compartiment poate exista cu puls și sensibilitate normale."
  ],
  "difficulty": {
   "score": 9,
   "kind": "editorial-estimate",
   "reason": "Pragul de 2 ore și falsul reconfort al pulsului sunt near-miss-uri clasice de compartiment."
  },
  "textbookExpressions": [
   "contractură ischemică Volkmann",
   "Artera brahială"
  ]
 },
 {
  "id": "ortopedie-adv-024",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Luxația umărului se caracterizează prin:",
  "options": [
   "Umărul este articulația care se luxează cel mai frecvent; în peste 90% din luxațiile traumatice capul humeral este anterior",
   "Integritatea nervului axilar se testează prin sensibilitatea regiunii deltoidiene și funcția motorie a deltoidului, înainte și după reducere",
   "Luxația posterioară trebuie suspectată după electrocutare, criză epileptică sau sevraj alcoolic",
   "Luxația posterioară se exclude pe o singură radiografie AP, în care capul pare aliniat cu glena",
   "Reducerea se obține prin adducție forțată și rotație internă maximă, fără tracțiune"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Umărul este articulația care se luxează cel mai frecvent; în peste 90% din luxațiile traumatice capul humeral este anterior — Corect: Frecvența maximă și deplasarea anterioară în peste 90% sunt explicite.\n\nIntegritatea nervului axilar se testează prin sensibilitatea regiunii deltoidiene și funcția motorie a deltoidului, înainte și după reducere — Corect: Testarea nervului axilar înainte și după reducere este cerută.\n\nLuxația posterioară trebuie suspectată după electrocutare, criză epileptică sau sevraj alcoolic — Corect: Contextul electrocutare/epilepsie/sevraj este enunțat.\n\nLuxația posterioară se exclude pe o singură radiografie AP, în care capul pare aliniat cu glena — Incorect: Posterioara este frecvent omisă pe AP; este necesară incidența axilară.\n\nReducerea se obține prin adducție forțată și rotație internă maximă, fără tracțiune — Incorect: Reducerea anterioarei se face prin abducție graduală cu tracțiune și contratracție în axilă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 596, 597, Luxația umărului — Anterioară versus posterioară (pagini PDF: 268, 269).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    596,
    597
   ],
   "pdfPages": [
    268,
    269
   ],
   "section": "Luxația umărului — Anterioară versus posterioară"
  },
  "learningObjective": "Recunoașterea predominanței anterioare, a nervului axilar și a contextului posterioarei omise pe AP.",
  "optionRationales": [
   "Frecvența maximă și deplasarea anterioară în peste 90% sunt explicite.",
   "Testarea nervului axilar înainte și după reducere este cerută.",
   "Contextul electrocutare/epilepsie/sevraj este enunțat.",
   "Posterioara este frecvent omisă pe AP; este necesară incidența axilară.",
   "Reducerea anterioarei se face prin abducție graduală cu tracțiune și contratracție în axilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează radiografia AP ca suficientă pentru posterioară și inversează manevra de reducere."
  },
  "textbookExpressions": [
   "90% din luxaţiile traumatice",
   "nervul axillar"
  ]
 },
 {
  "id": "ortopedie-adv-025",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Fractura de col femural se deosebește de cea intertrohanterică prin:",
  "options": [
   "Este intracapsulară, cu periost subțire și fără înveliș muscular, deci cu risc înalt de pseudartroză",
   "Vasele capului femural, pe fața posterioară a colului, pot fi lezate, cu necroză a capului",
   "Fractura intertrohanterică este extracapsulară, cu vascularizație bună și vindecare obișnuită",
   "Ambele sunt extracapsulare, cu risc identic de necroză a capului femural",
   "Fixarea cu șurub de glisare și placă este tratamentul colului, nu al fracturii intertrohanterice"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este intracapsulară, cu periost subțire și fără înveliș muscular, deci cu risc înalt de pseudartroză — Corect: Caracterul intracapsular, periostul subțire și absența mușchiului explică pseudartroza.\n\nVasele capului femural, pe fața posterioară a colului, pot fi lezate, cu necroză a capului — Corect: Traiectul posterior al vaselor și riscul de necroză sunt descrise.\n\nFractura intertrohanterică este extracapsulară, cu vascularizație bună și vindecare obișnuită — Corect: Sediul extracapsular și vindecarea intertrohantericei sunt explicite.\n\nAmbele sunt extracapsulare, cu risc identic de necroză a capului femural — Incorect: Doar colul este intracapsular; intertrohanterica este extracapsulară.\n\nFixarea cu șurub de glisare și placă este tratamentul colului, nu al fracturii intertrohanterice — Incorect: Șurubul de glisare cu placă tratează intertrohanterica; colul se fixează sau se înlocuiește prin hemiartroplastie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 598, Fracturile șoldului — Col femural versus intertrohanterică (pagini PDF: 270).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    598
   ],
   "pdfPages": [
    270
   ],
   "section": "Fracturile șoldului — Col femural versus intertrohanterică"
  },
  "learningObjective": "Contrastarea sediului intracapsular (NAV, pseudartroză) cu cel extracapsular intertrohanteric (vindecare, DHS).",
  "optionRationales": [
   "Caracterul intracapsular, periostul subțire și absența mușchiului explică pseudartroza.",
   "Traiectul posterior al vaselor și riscul de necroză sunt descrise.",
   "Sediul extracapsular și vindecarea intertrohantericei sunt explicite.",
   "Doar colul este intracapsular; intertrohanterica este extracapsulară.",
   "Șurubul de glisare cu placă tratează intertrohanterica; colul se fixează sau se înlocuiește prin hemiartroplastie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește intra- versus extracapsular și atribuie DHS-ul colului, nu intertrohantericei."
  },
  "textbookExpressions": [
   "colului femoral",
   "intertrohanterice"
  ]
 },
 {
  "id": "ortopedie-adv-026",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Pierderea sanguină estimată într-o fractură închisă de diafiză femurală este de:",
  "options": [
   "1–3 unități de sânge la nivelul coapsei, cu risc de șoc hipovolemic",
   "Sub 200 mL, insuficientă pentru a produce hipovolemie",
   "Peste 8 unități, ceea ce impune toracotomie de control",
   "Nicio pierdere semnificativă, osul cortical fiind avascular",
   "Echivalentul unei fracturi de scafoid, deci fără nevoie de radiografii de pelvis"
  ],
  "correct": [
   0
  ],
  "explanation": "1–3 unități de sânge la nivelul coapsei, cu risc de șoc hipovolemic — Corect: Intervalul 1–3 unități cu posibil șoc hipovolemic este explicit.\n\nSub 200 mL, insuficientă pentru a produce hipovolemie — Incorect: Pierderea este considerabilă, nu minimă.\n\nPeste 8 unități, ceea ce impune toracotomie de control — Incorect: Toracotomia nu figurează ca tratament al fracturii femurale.\n\nNicio pierdere semnificativă, osul cortical fiind avascular — Incorect: Osul cortical are aport, iar hematoma coapsei este voluminoasă.\n\nEchivalentul unei fracturi de scafoid, deci fără nevoie de radiografii de pelvis — Incorect: Radiografiile de pelvis și șold sunt cerute la toți pacienții cu fractură de femur.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 598, Fracturile diafizei femurale — Pierdere sanguină (pagini PDF: 270).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    598
   ],
   "pdfPages": [
    270
   ],
   "section": "Fracturile diafizei femurale — Pierdere sanguină"
  },
  "learningObjective": "Recunoașterea intervalului 1–3 unități și a riscului de șoc, cu excluderea altor surse de hipovolemie.",
  "optionRationales": [
   "Intervalul 1–3 unități cu posibil șoc hipovolemic este explicit.",
   "Pierderea este considerabilă, nu minimă.",
   "Toracotomia nu figurează ca tratament al fracturii femurale.",
   "Osul cortical are aport, iar hematoma coapsei este voluminoasă.",
   "Radiografiile de pelvis și șold sunt cerute la toți pacienții cu fractură de femur."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește intervalul 1–3 unități cu volume din alte leziuni (hemotorax, scafoid)."
  },
  "textbookExpressions": [
   "1-3 unităţi de sânge",
   "hipovolemie"
  ]
 },
 {
  "id": "ortopedie-adv-027",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Luxația posterioară de șold după impactul genunchiului de bord:",
  "options": [
   "Poate produce elongația nervului sciatic; pacienții trebuie evaluați pentru mers stepat",
   "Orice întârziere a reducerii peste 8–12 ore crește riscul de necroză avasculară a capului femural și de artroză post-traumatică",
   "Reducerea poate fi amânată 48 de ore fără risc suplimentar de osteonecroză",
   "Nervul femural, nu sciaticul, este structura neurologică amenințată",
   "Mersul stepat sugerează leziunea nervului axilar, nu a sciaticului"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Poate produce elongația nervului sciatic; pacienții trebuie evaluați pentru mers stepat — Corect: Elongația sciaticului și mersul stepat sunt explicite.\n\nOrice întârziere a reducerii peste 8–12 ore crește riscul de necroză avasculară a capului femural și de artroză post-traumatică — Corect: Fereastra de peste 8–12 ore pentru NAV și artroză este citată.\n\nReducerea poate fi amânată 48 de ore fără risc suplimentar de osteonecroză — Incorect: Întârzierea crește riscul; amânarea 48 de ore nu este sigură.\n\nNervul femural, nu sciaticul, este structura neurologică amenințată — Incorect: Nervul amenințat este sciaticul, nu femuralul.\n\nMersul stepat sugerează leziunea nervului axilar, nu a sciaticului — Incorect: Mersul stepat este atribuit sciaticului, nu nervului axilar (deltoid).\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 598, Luxația șoldului — Sciatic și fereastra 8–12 ore (pagini PDF: 270).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    598
   ],
   "pdfPages": [
    270
   ],
   "section": "Luxația șoldului — Sciatic și fereastra 8–12 ore"
  },
  "learningObjective": "Aplicarea evaluării sciaticului (mers stepat) și a ferestrei de 8–12 ore pentru osteonecroză.",
  "optionRationales": [
   "Elongația sciaticului și mersul stepat sunt explicite.",
   "Fereastra de peste 8–12 ore pentru NAV și artroză este citată.",
   "Întârzierea crește riscul; amânarea 48 de ore nu este sigură.",
   "Nervul amenințat este sciaticul, nu femuralul.",
   "Mersul stepat este atribuit sciaticului, nu nervului axilar (deltoid)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Scurtează sau anulează fereastra 8–12 ore și schimbă sciaticul cu femuralul sau axilarul."
  },
  "textbookExpressions": [
   "8-12 ore",
   "nervului sciatic"
  ]
 },
 {
  "id": "ortopedie-adv-028",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Fracturile diafizare de tibie se caracterizează prin:",
  "options": [
   "Se produc de 9 ori mai frecvent decât cele de diafiză femurală; aproape 33% din suprafața tibiei este subcutanată",
   "Au risc crescut de sindrom de compartiment; semnul cardinal la conștient este durerea disproporționată",
   "Osteosinteza pe focar închis și gipsul deasupra genunchiului sunt tratamentul standard al fracturilor închise necomplicate",
   "Vascularizația abundantă a tibiei face pseudartroza excepțională",
   "Fixatorul extern este contraindicated în fracturile deschise de tibie, fiind rezervat colului femural"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se produc de 9 ori mai frecvent decât cele de diafiză femurală; aproape 33% din suprafața tibiei este subcutanată — Corect: Raportul 9:1 față de femural și cei 33% subcutanat sunt explicite.\n\nAu risc crescut de sindrom de compartiment; semnul cardinal la conștient este durerea disproporționată — Corect: Riscul de compartiment și durerea disproporționată sunt enunțate.\n\nOsteosinteza pe focar închis și gipsul deasupra genunchiului sunt tratamentul standard al fracturilor închise necomplicate — Corect: Standardul pentru închise necomplicate este osteosinteza închisă și gipsul deasupra genunchiului.\n\nVascularizația abundantă a tibiei face pseudartroza excepțională — Incorect: Vascularizația redusă duce la pseudartroză și întârziere de consolidare.\n\nFixatorul extern este contraindicated în fracturile deschise de tibie, fiind rezervat colului femural — Incorect: Fixarea externă este frecvent folosită în fracturile deschise de tibie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 598, Fracturile diafizelor tibială și fibulară (pagini PDF: 270).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    598
   ],
   "pdfPages": [
    270
   ],
   "section": "Fracturile diafizelor tibială și fibulară"
  },
  "learningObjective": "Integrarea frecvenței, a sediului subcutanat, a compartimentului și a gipsului deasupra genunchiului.",
  "optionRationales": [
   "Raportul 9:1 față de femural și cei 33% subcutanat sunt explicite.",
   "Riscul de compartiment și durerea disproporționată sunt enunțate.",
   "Standardul pentru închise necomplicate este osteosinteza închisă și gipsul deasupra genunchiului.",
   "Vascularizația redusă duce la pseudartroză și întârziere de consolidare.",
   "Fixarea externă este frecvent folosită în fracturile deschise de tibie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează vascularizația tibiei și contraindică fixatorul extern tocmai acolo unde este clasic."
  },
  "textbookExpressions": [
   "de 9 ori",
   "pacient conştient"
  ]
 },
 {
  "id": "ortopedie-adv-029",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "O deplasare de 1 mm a unei fracturi de gleznă reduce suprafața de contact articulară cu:",
  "options": [
   "40%",
   "10%",
   "5%",
   "75%",
   "Nicio reducere a suprafeței, dacă maleola posterioară este intactă"
  ],
  "correct": [
   0
  ],
  "explanation": "40% — Corect: Textul precizează că o deplasare de 1 mm reduce suprafața de contact cu 40%.\n\n10% — Incorect: 10% nu este valoarea citată.\n\n5% — Incorect: 5% subestimează pierderea de contact.\n\n75% — Incorect: 75% supraestimează procentul din text.\n\nNicio reducere a suprafeței, dacă maleola posterioară este intactă — Incorect: Principiul vizează congruența articulară independent de maleola posterioară izolată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 599, Leziunile gleznei — Congruență articulară (pagini PDF: 271).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    599
   ],
   "pdfPages": [
    271
   ],
   "section": "Leziunile gleznei — Congruență articulară"
  },
  "learningObjective": "Memorarea pragului 1 mm = 40% pierdere de contact, care fundamentează reducerea anatomică deschisă.",
  "optionRationales": [
   "Textul precizează că o deplasare de 1 mm reduce suprafața de contact cu 40%.",
   "10% nu este valoarea citată.",
   "5% subestimează pierderea de contact.",
   "75% supraestimează procentul din text.",
   "Principiul vizează congruența articulară independent de maleola posterioară izolată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește procentul 40% cu valori plauzibile vecine, un near-miss cantitativ."
  },
  "textbookExpressions": [
   "I mm reduce",
   "cu 40%"
  ]
 },
 {
  "id": "ortopedie-adv-030",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Fracturile de bazin cu velocitate mare:",
  "options": [
   "Aproximativ 1 din 5 prezintă concomitent leziuni ale vezicii urinare sau ale uretrei, la bărbați",
   "Sânge la meat sau incapacitatea de a urina impune uretrografie retrogradă înaintea sondei vezicale",
   "Sânge în rect sau vagin face fractura deschisă; după debridare și fixare externă se practică colostomie",
   "Stabilizarea de urgență cu fixator extern este inutilă în instabilitatea hemodinamică",
   "Hematuria se evaluează prin uretrografie, nu prin urografie intravenoasă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Aproximativ 1 din 5 prezintă concomitent leziuni ale vezicii urinare sau ale uretrei, la bărbați — Corect: Proporția 1 din 5 la bărbați este explicită.\n\nSânge la meat sau incapacitatea de a urina impune uretrografie retrogradă înaintea sondei vezicale — Corect: Uretrografia retrogradă înaintea cateterului este cerută la sânge pe meat sau anurie.\n\nSânge în rect sau vagin face fractura deschisă; după debridare și fixare externă se practică colostomie — Corect: Sângele rectal/vaginal definește fractura deschisă, tratată și prin colostomie.\n\nStabilizarea de urgență cu fixator extern este inutilă în instabilitatea hemodinamică — Incorect: Fixatorul extern de urgență este considerat esențial în instabilitate hemodinamică.\n\nHematuria se evaluează prin uretrografie, nu prin urografie intravenoasă — Incorect: Hematuria se evaluează prin urografie intravenoasă, pentru funcția renală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 599, Fracturile de bazin — Uretră, vezică și fractură deschisă (pagini PDF: 271).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    599
   ],
   "pdfPages": [
    271
   ],
   "section": "Fracturile de bazin — Uretră, vezică și fractură deschisă"
  },
  "learningObjective": "Aplicarea ratei 1 din 5 a leziunilor urologice, a uretrografiei înaintea sondei și a colostomiei în fractura pelvină deschisă.",
  "optionRationales": [
   "Proporția 1 din 5 la bărbați este explicită.",
   "Uretrografia retrogradă înaintea cateterului este cerută la sânge pe meat sau anurie.",
   "Sângele rectal/vaginal definește fractura deschisă, tratată și prin colostomie.",
   "Fixatorul extern de urgență este considerat esențial în instabilitate hemodinamică.",
   "Hematuria se evaluează prin urografie intravenoasă, pentru funcția renală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează uretrografia și urografia și anulează rolul fixatorului în șoc."
  },
  "textbookExpressions": [
   "I din 5 fracturi",
   "uretrografie retrogradă"
  ]
 },
 {
  "id": "ortopedie-adv-031",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Reimplantarea după amputație traumatică:",
  "options": [
   "Cu cât masa musculară a segmentului amputat este mai mare, cu atât prognosticul funcțional este mai rezervat",
   "La adult, nivelele favorabile sunt policele, mai multe degete simultan și zona pumnului sau metacarpiană",
   "Segmentul rămâne viabil circa 6 ore în ischemie caldă (36°C) și până la 16 ore în ischemie rece (10°C)",
   "Pregătirea pentru transport include pansament umed și sac etanș imersat în apă cu gheață",
   "Gheața uscată este metoda de elecție, deoarece scade metabolismul fără risc de degerătură"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Cu cât masa musculară a segmentului amputat este mai mare, cu atât prognosticul funcțional este mai rezervat — Corect: Regula masei musculare și a ischemiei este explicită.\n\nLa adult, nivelele favorabile sunt policele, mai multe degete simultan și zona pumnului sau metacarpiană — Corect: Policele, degetele multiple și pumnul/metacarpul sunt nivelele favorabile la adult.\n\nSegmentul rămâne viabil circa 6 ore în ischemie caldă (36°C) și până la 16 ore în ischemie rece (10°C) — Corect: Cele 6 ore la 36°C și 16 ore la 10°C sunt citate.\n\nPregătirea pentru transport include pansament umed și sac etanș imersat în apă cu gheață — Corect: Pansamentul umed și sacul în apă cu gheață sunt descrise.\n\nGheața uscată este metoda de elecție, deoarece scade metabolismul fără risc de degerătură — Incorect: Gheața uscată produce degerături și leziuni tisulare suplimentare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 600, Amputația traumatică și reimplantarea (pagini PDF: 272).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    600
   ],
   "pdfPages": [
    272
   ],
   "section": "Amputația traumatică și reimplantarea"
  },
  "learningObjective": "Aplicarea regulii masei musculare, a nivelelor favorabile la adult și a ferestrelor 6/16 ore, față de gheața uscată interzisă.",
  "optionRationales": [
   "Regula masei musculare și a ischemiei este explicită.",
   "Policele, degetele multiple și pumnul/metacarpul sunt nivelele favorabile la adult.",
   "Cele 6 ore la 36°C și 16 ore la 10°C sunt citate.",
   "Pansamentul umed și sacul în apă cu gheață sunt descrise.",
   "Gheața uscată produce degerături și leziuni tisulare suplimentare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează ferestrele de ischemie și promovează gheața uscată, o eroare de transport."
  },
  "textbookExpressions": [
   "6 ore",
   "16 ore de ischemie"
  ]
 },
 {
  "id": "ortopedie-adv-032",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Sindromul de compartiment al membrului:",
  "options": [
   "Semnele clasice sunt cei patru P: durere, parestezie, paralizie și paloare; durerea este semnul cel mai util",
   "Durerea este intensificată de întinderea pasivă a mușchilor din compartimentul afectat",
   "Poate exista în prezența unui puls și a unei sensibilități normale",
   "Fasciotomia este indicată dacă presiunea depășește 30–40 mm Hg la un pacient inconștient sau cu paralizie",
   "Clinicianul trebuie să aștepte paloarea și paralizia înainte de a îndepărta gipsul circular"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Semnele clasice sunt cei patru P: durere, parestezie, paralizie și paloare; durerea este semnul cel mai util — Corect: Cei patru P și caracterul durerii ca semn cel mai util sunt explicite.\n\nDurerea este intensificată de întinderea pasivă a mușchilor din compartimentul afectat — Corect: Intensificarea la întindere pasivă este descrisă.\n\nPoate exista în prezența unui puls și a unei sensibilități normale — Corect: Apariția cu puls și sensibilitate normale este enunțată.\n\nFasciotomia este indicată dacă presiunea depășește 30–40 mm Hg la un pacient inconștient sau cu paralizie — Corect: Pragul 30–40 mm Hg la inconștient/paralizat figurează pe pagina următoare.\n\nClinicianul trebuie să aștepte paloarea și paralizia înainte de a îndepărta gipsul circular — Incorect: Nu se așteaptă parestezia, paralizia sau paloarea; gipsul circular se îndepărtează la durere disproporționată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 600, 601, Sindromul de compartiment — Semne și prag de fasciotomie (pagini PDF: 272, 273).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    600,
    601
   ],
   "pdfPages": [
    272,
    273
   ],
   "section": "Sindromul de compartiment — Semne și prag de fasciotomie"
  },
  "learningObjective": "Integrarea celor 4 P, a durerii la stretch, a pulsului păstrat și a pragului 30–40 mm Hg, față de așteptarea greșită a palorii.",
  "optionRationales": [
   "Cei patru P și caracterul durerii ca semn cel mai util sunt explicite.",
   "Intensificarea la întindere pasivă este descrisă.",
   "Apariția cu puls și sensibilitate normale este enunțată.",
   "Pragul 30–40 mm Hg la inconștient/paralizat figurează pe pagina următoare.",
   "Nu se așteaptă parestezia, paralizia sau paloarea; gipsul circular se îndepărtează la durere disproporționată."
  ],
  "difficulty": {
   "score": 9,
   "kind": "editorial-estimate",
   "reason": "Near-miss pe pragul 30 mm Hg și pe falsul reconfort al pulsului, două erori de compartiment."
  },
  "textbookExpressions": [
   "patru P",
   "30 nm1 Hg"
  ]
 },
 {
  "id": "ortopedie-adv-033",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Fractura de stres:",
  "options": [
   "Radiografiile au sensibilitate scăzută, cu o rată de rezultate fals-negative de aproximativ 70%",
   "Scintigrafia cu pirofosfat de technetiu poate identifica fracturile de stres în stadii precoce",
   "Radiografia simplă are sensibilitate de peste 95% din prima zi și face scintigrafia inutilă",
   "Tratamentul constă în încărcare imediată pentru a stimula calusul dur",
   "Sunt întâlnite doar la nivelul primului metatarsian, nu la femur, tibie sau coaste"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Radiografiile au sensibilitate scăzută, cu o rată de rezultate fals-negative de aproximativ 70% — Corect: Rata de 70% fals-negative radiografice este explicită.\n\nScintigrafia cu pirofosfat de technetiu poate identifica fracturile de stres în stadii precoce — Corect: Pirofosfatul de technetiu detectează formarea osoasă precoce.\n\nRadiografia simplă are sensibilitate de peste 95% din prima zi și face scintigrafia inutilă — Incorect: Radiografia este nesensibilă, nu de 95%.\n\nTratamentul constă în încărcare imediată pentru a stimula calusul dur — Incorect: Tratamentul tradițional este repaus și protecție față de stres.\n\nSunt întâlnite doar la nivelul primului metatarsian, nu la femur, tibie sau coaste — Incorect: Au fost identificate la femur, tibie, calcaneu, metatarsiene, humerus, coaste și L5.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 601, Leziuni sportive — Fractura de stres (pagini PDF: 273).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    601
   ],
   "pdfPages": [
    273
   ],
   "section": "Leziuni sportive — Fractura de stres"
  },
  "learningObjective": "Recunoașterea fals-negativelor radiografice de 70% și a rolului scintigrafiei cu technetiu.",
  "optionRationales": [
   "Rata de 70% fals-negative radiografice este explicită.",
   "Pirofosfatul de technetiu detectează formarea osoasă precoce.",
   "Radiografia este nesensibilă, nu de 95%.",
   "Tratamentul tradițional este repaus și protecție față de stres.",
   "Au fost identificate la femur, tibie, calcaneu, metatarsiene, humerus, coaste și L5."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sensibilitatea radiografiei (70% fals-negative) și limitează sediul la metatarsianul de marș."
  },
  "textbookExpressions": [
   "fals-negative, de aproximativ 70%",
   "pirofosfat de teclmeţiu"
  ]
 },
 {
  "id": "ortopedie-adv-034",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Coafa rotatorilor a umărului:",
  "options": [
   "Cei patru mușchi sunt subscapular, supraspinos, infraspinos și rotund mic",
   "Aria în secțiune a coafei este egală cu cea a deltoidului, deci forța de stabilizare egalează forța de mobilitate",
   "Ruptura coafei reduce forța de rotație externă a umărului",
   "Mușchiul principal comprimat sub arcul coraco-acromial în abducție este subscapularul",
   "Diagnosticul de ruptură se pune doar clinic, artrografia, ecografia și IRM-ul fiind inutile"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cei patru mușchi sunt subscapular, supraspinos, infraspinos și rotund mic — Corect: Cei patru mușchi sunt enumerați explicit.\n\nAria în secțiune a coafei este egală cu cea a deltoidului, deci forța de stabilizare egalează forța de mobilitate — Corect: Egalitatea de arie și de forță cu deltoidul este descrisă.\n\nRuptura coafei reduce forța de rotație externă a umărului — Corect: Ruptura reduce forța de rotație externă.\n\nMușchiul principal comprimat sub arcul coraco-acromial în abducție este subscapularul — Incorect: În abducție, supraspinosul se contractă sub arcul coraco-acromial, nu subscapularul.\n\nDiagnosticul de ruptură se pune doar clinic, artrografia, ecografia și IRM-ul fiind inutile — Incorect: Artrografia, ecografia sau IRM diagnostichează ruptura cu acuratețe.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 602, Tendinita coafei rotatorilor (pagini PDF: 274).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    602
   ],
   "pdfPages": [
    274
   ],
   "section": "Tendinita coafei rotatorilor"
  },
  "learningObjective": "Identificarea celor patru mușchi, a echivalenței de arie cu deltoidul și a deficitului de rotație externă.",
  "optionRationales": [
   "Cei patru mușchi sunt enumerați explicit.",
   "Egalitatea de arie și de forță cu deltoidul este descrisă.",
   "Ruptura reduce forța de rotație externă.",
   "În abducție, supraspinosul se contractă sub arcul coraco-acromial, nu subscapularul.",
   "Artrografia, ecografia sau IRM diagnostichează ruptura cu acuratețe."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă supraspinosul cu subscapularul sub acromion și neagă imagistica rupturii."
  },
  "textbookExpressions": [
   "subscapular, supraspinos",
   "rotaţia externă"
  ]
 },
 {
  "id": "ortopedie-adv-035",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Entorsele ligamentare se clasifică astfel:",
  "options": [
   "Gradul I: leziuni microscopice cu sensibilitate, fără modificare a stabilității la stres",
   "Gradul III: întrerupere totală cu pierderea stabilității articulației",
   "Gradul I presupune ruptură completă și punct final absent la testare",
   "Gradul II păstrează continuitatea macroscopică, dar nu produce nicio laxitate",
   "Ligamentul deltoid al gleznei este lezat mai frecvent decât ligamentele laterale, deoarece maleola peronieră este scurtă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Gradul I: leziuni microscopice cu sensibilitate, fără modificare a stabilității la stres — Corect: Gradul I microscopic fără instabilitate este explicit.\n\nGradul III: întrerupere totală cu pierderea stabilității articulației — Corect: Gradul III ca întrerupere totală cu pierderea stabilității este definit.\n\nGradul I presupune ruptură completă și punct final absent la testare — Incorect: Ruptura completă definește gradul III, nu I.\n\nGradul II păstrează continuitatea macroscopică, dar nu produce nicio laxitate — Incorect: Gradul II are laxitate cu punct final ferm.\n\nLigamentul deltoid al gleznei este lezat mai frecvent decât ligamentele laterale, deoarece maleola peronieră este scurtă — Incorect: Maleola peronieră mai lungă protejează împotriva eversiunii; deltoidul este mai rar afectat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 604, Entorsele — Gradele I–III și gleznă (pagini PDF: 276).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    604
   ],
   "pdfPages": [
    276
   ],
   "section": "Entorsele — Gradele I–III și gleznă"
  },
  "learningObjective": "Diferențierea gradului I (stabil) de III (instabil) și recunoașterea predominanței ligamentelor laterale ale gleznei.",
  "optionRationales": [
   "Gradul I microscopic fără instabilitate este explicit.",
   "Gradul III ca întrerupere totală cu pierderea stabilității este definit.",
   "Ruptura completă definește gradul III, nu I.",
   "Gradul II are laxitate cu punct final ferm.",
   "Maleola peronieră mai lungă protejează împotriva eversiunii; deltoidul este mai rar afectat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește gradele I și III și inversează anatomia maleolei peroniere/deltoidului."
  },
  "textbookExpressions": [
   "Entorsele de gradul I",
   "entorsă de gradul III"
  ]
 },
 {
  "id": "ortopedie-adv-036",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Ligamentul încrucișat anterior (LIA):",
  "options": [
   "Este singurul dintre cele patru ligamente majore ale genunchiului care este intrasinovial",
   "Dintre pacienții cu hemartroză după leziuni de genunchi, 70% au leziuni de LIA; la leziunile acute de LIA, 50% asociază leziuni meniscale",
   "LIA se vindecă prost și se reconstruiește, în general, cu autogrefă de țesuturi moi",
   "Leziunile izolate de ligament colateral medial se vindecă prost și impun reconstrucție cu autogrefă de tendon patelar",
   "Testul Lachman, cu genunchiul la 90° de flexie, evaluează fibrele anteromediale ale LIP"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este singurul dintre cele patru ligamente majore ale genunchiului care este intrasinovial — Corect: Caracterul intrasinovial unic este explicit.\n\nDintre pacienții cu hemartroză după leziuni de genunchi, 70% au leziuni de LIA; la leziunile acute de LIA, 50% asociază leziuni meniscale — Corect: Procentele 70% (hemartroză-LIA) și 50% (menisc) sunt citate.\n\nLIA se vindecă prost și se reconstruiește, în general, cu autogrefă de țesuturi moi — Corect: Vindecarea proastă și autogrefa sunt enunțate.\n\nLeziunile izolate de ligament colateral medial se vindecă prost și impun reconstrucție cu autogrefă de tendon patelar — Incorect: LCM izolat se vindecă bine cu gips articulat; reconstrucția descrisă este a LIA.\n\nTestul Lachman, cu genunchiul la 90° de flexie, evaluează fibrele anteromediale ale LIP — Incorect: Lachman se face la 20° și evaluează fibrele posterolaterale ale LIA, nu LIP la 90°.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 606, Entorsele de genunchi — LIA, hemartroză și reconstrucție (pagini PDF: 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    606
   ],
   "pdfPages": [
    277
   ],
   "section": "Entorsele de genunchi — LIA, hemartroză și reconstrucție"
  },
  "learningObjective": "Aplicarea caracterului intrasinovial, a ratelor 70%/50% și a vindecării proaste a LIA, față de LCM izolat.",
  "optionRationales": [
   "Caracterul intrasinovial unic este explicit.",
   "Procentele 70% (hemartroză-LIA) și 50% (menisc) sunt citate.",
   "Vindecarea proastă și autogrefa sunt enunțate.",
   "LCM izolat se vindecă bine cu gips articulat; reconstrucția descrisă este a LIA.",
   "Lachman se face la 20° și evaluează fibrele posterolaterale ale LIA, nu LIP la 90°."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă LIA cu LCM la indicația de autogrefă și inversează unghiul Lachman."
  },
  "textbookExpressions": [
   "70% au leziuni",
   "testul Lachman"
  ]
 },
 {
  "id": "ortopedie-adv-037",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Leziunea meniscală a genunchiului:",
  "options": [
   "În ortostatism, meniscul distribuie 40–60% din greutatea corpului la nivelul articulației",
   "Rupturile longitudinale din treimea periferică se pot vindeca când sunt reparate, zona fiind bine vascularizată",
   "Meniscectomia totală duce la dezvoltarea lentă a artrozei tibiofemurale",
   "Testul McMurray se efectuează cu genunchiul în extensie completă, fără rotație tibială",
   "Rupturile în mâner de găleată nu produc blocaj mecanic, ci doar durere de repaus nocturn"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În ortostatism, meniscul distribuie 40–60% din greutatea corpului la nivelul articulației — Corect: Intervalul 40–60% este explicit.\n\nRupturile longitudinale din treimea periferică se pot vindeca când sunt reparate, zona fiind bine vascularizată — Corect: Vindecarea rupturilor longitudinale periferice reparate este descrisă.\n\nMeniscectomia totală duce la dezvoltarea lentă a artrozei tibiofemurale — Corect: Artroza după meniscectomie totală este enunțată.\n\nTestul McMurray se efectuează cu genunchiul în extensie completă, fără rotație tibială — Incorect: McMurray implică flexie la 90°, rotație tibială, apoi extensie în valgus sau varus.\n\nRupturile în mâner de găleată nu produc blocaj mecanic, ci doar durere de repaus nocturn — Incorect: Rupturile în mâner de găleată prind fragmentul între condil și platou și blochează mecanic articulația.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 607, 606, Leziunea meniscală — Sarcină, vascularizație și McMurray (pagini PDF: 279, 277).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    607,
    606
   ],
   "pdfPages": [
    279,
    277
   ],
   "section": "Leziunea meniscală — Sarcină, vascularizație și McMurray"
  },
  "learningObjective": "Recunoașterea distribuției 40–60%, a vindecării periferice și a artrozei după meniscectomie totală.",
  "optionRationales": [
   "Intervalul 40–60% este explicit.",
   "Vindecarea rupturilor longitudinale periferice reparate este descrisă.",
   "Artroza după meniscectomie totală este enunțată.",
   "McMurray implică flexie la 90°, rotație tibială, apoi extensie în valgus sau varus.",
   "Rupturile în mâner de găleată prind fragmentul între condil și platou și blochează mecanic articulația."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează tehnica McMurray (90° plus rotație) și neagă blocajul din mânerul de găleată."
  },
  "textbookExpressions": [
   "40-60%",
   "mâner de găleată"
  ]
 },
 {
  "id": "ortopedie-adv-038",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Disjuncția acromio-claviculară, degetul Mallet și fractura boxerului:",
  "options": [
   "În disjuncția de gradul III sunt afectate atât ligamentul acromioclavicular, cât și ligamentele coracoclaviculare, cu extremitatea laterală a claviculei ridicată deasupra acromionului",
   "Degetul Mallet se vindecă bine dacă articulația interfalangiană distală este imobilizată în extensie completă timp de 6 săptămâni",
   "Fractura boxerului (metacarpianul V) se tratează de obicei prin reducere închisă și imobilizare gipsată, chiar la angulații peste 45°",
   "Gradul III acromio-clavicular se recunoaște prin subluxație vizibilă doar pe radiografii de stres cu greutăți, clavicula rămânând la nivelul acromionului",
   "Degetul Mallet impune sutura chirurgicală de urgență a tendonului, imobilizarea fiind ineficientă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În disjuncția de gradul III sunt afectate atât ligamentul acromioclavicular, cât și ligamentele coracoclaviculare, cu extremitatea laterală a claviculei ridicată deasupra acromionului — Corect: Ruptura ambelor ligamente și clavicula ridicată definesc gradul III.\n\nDegetul Mallet se vindecă bine dacă articulația interfalangiană distală este imobilizată în extensie completă timp de 6 săptămâni — Corect: Imobilizarea DIP în extensie 6 săptămâni este tratamentul Mallet.\n\nFractura boxerului (metacarpianul V) se tratează de obicei prin reducere închisă și imobilizare gipsată, chiar la angulații peste 45° — Corect: Reducerea închisă și gipsul, chiar la angulație peste 45°, sunt preferate la boxer.\n\nGradul III acromio-clavicular se recunoaște prin subluxație vizibilă doar pe radiografii de stres cu greutăți, clavicula rămânând la nivelul acromionului — Incorect: Radiografiile de stres cu greutăți descriu gradul II (AC rupt, coracoclaviculare întinse).\n\nDegetul Mallet impune sutura chirurgicală de urgență a tendonului, imobilizarea fiind ineficientă — Incorect: Mallet se vindecă bine prin imobilizare, nu prin sutură de urgență.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 607, 608, Leziuni ale umărului și mâinii — AC, Mallet, boxer (pagini PDF: 279, 280).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    607,
    608
   ],
   "pdfPages": [
    279,
    280
   ],
   "section": "Leziuni ale umărului și mâinii — AC, Mallet, boxer"
  },
  "learningObjective": "Diferențierea gradului III AC (ambele ligamente, claviculă ridicată) de Mallet (6 săptămâni în extensie DIP) și de fractura boxerului tratată conservator.",
  "optionRationales": [
   "Ruptura ambelor ligamente și clavicula ridicată definesc gradul III.",
   "Imobilizarea DIP în extensie 6 săptămâni este tratamentul Mallet.",
   "Reducerea închisă și gipsul, chiar la angulație peste 45°, sunt preferate la boxer.",
   "Radiografiile de stres cu greutăți descriu gradul II (AC rupt, coracoclaviculare întinse).",
   "Mallet se vindecă bine prin imobilizare, nu prin sutură de urgență."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă gradul II cu III la AC și transformă Mallet-ul conservator în urgență chirurgicală."
  },
  "textbookExpressions": [
   "gradul lll",
   "6 săptămâni"
  ]
 },
 {
  "id": "ortopedie-adv-039",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Un sportiv de vârstă mijlocie simte o lovitură în gambă; flexia plantară activă este slabă, dar prezentă. Testul Thompson fără flexie plantară la strângerea gambei indică:",
  "options": [
   "Ruptura tendonului Ahilean; flexia plantară reziduală este menținută de tibialul posterior și flexorul lung al degetelor",
   "Ruptura completă a tibialului posterior, Ahilele rămânând intact",
   "O entorsă de gradul I a ligamentului talofibular anterior",
   "Fractura de stres a calcaneului, vizibilă de la prima radiografie",
   "Miozită osificantă a solearului, cu indicație de rezecție înainte de 18 luni"
  ],
  "correct": [
   0
  ],
  "explanation": "Ruptura tendonului Ahilean; flexia plantară reziduală este menținută de tibialul posterior și flexorul lung al degetelor — Corect: Absența flexiei plantare la strângerea gambei indică ruptura Ahilelui; PF activă slabă persistă prin tibial posterior și FDL.\n\nRuptura completă a tibialului posterior, Ahilele rămânând intact — Incorect: Tibialul posterior explică PF reziduală, nu este structura ruptă.\n\nO entorsă de gradul I a ligamentului talofibular anterior — Incorect: Entorsa ATFL nu anulează testul Thompson.\n\nFractura de stres a calcaneului, vizibilă de la prima radiografie — Incorect: Fractura de stres nu este diagnosticul acestei manevre.\n\nMiozită osificantă a solearului, cu indicație de rezecție înainte de 18 luni — Incorect: Miozita osificantă se rezecează tardiv (după 18 luni), nu este diagnosticul Thompson.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 609, Ruptura de tendon Ahilean — Testul Thompson (pagini PDF: 281).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    609
   ],
   "pdfPages": [
    281
   ],
   "section": "Ruptura de tendon Ahilean — Testul Thompson"
  },
  "learningObjective": "Interpretarea Thompson-ului negativ (fără flexie plantară) ca ruptură de Ahile, cu PF reziduală din tibial posterior și FDL.",
  "optionRationales": [
   "Absența flexiei plantare la strângerea gambei indică ruptura Ahilelui; PF activă slabă persistă prin tibial posterior și FDL.",
   "Tibialul posterior explică PF reziduală, nu este structura ruptă.",
   "Entorsa ATFL nu anulează testul Thompson.",
   "Fractura de stres nu este diagnosticul acestei manevre.",
   "Miozita osificantă se rezecează tardiv (după 18 luni), nu este diagnosticul Thompson."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie deficitul tibialului posterior sau entorsei laterale, ignorând complexul gastrocnemian-solear."
  },
  "textbookExpressions": [
   "Testul Thompson",
   "tendonului lui Ahille"
  ]
 },
 {
  "id": "ortopedie-adv-040",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Displazia de dezvoltare a șoldului:",
  "options": [
   "Incidența este de 1,5/1.000 nou-născuți; într-o treime din cazuri este bilaterală; sexul feminin este mai afectat",
   "Manevrele Ortolani și Barlow sunt utile în special în primele două săptămâni de viață; tratamentul precoce folosește hamul Pavlik",
   "După vârsta de o lună, cel mai relevant semn este limitarea abducției coapsei",
   "Capul femural este vizibil radiografic de la naștere, deci ecografia nu are rol în primele 9 luni",
   "Manevra Barlow reduce capul în acetabul, iar Ortolani luxează șoldul instabil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Incidența este de 1,5/1.000 nou-născuți; într-o treime din cazuri este bilaterală; sexul feminin este mai afectat — Corect: Incidența 1,5/1.000, treimea bilaterală și predilecția feminină sunt explicite.\n\nManevrele Ortolani și Barlow sunt utile în special în primele două săptămâni de viață; tratamentul precoce folosește hamul Pavlik — Corect: Utilitatea în primele două săptămâni și hamul Pavlik sunt descrise.\n\nDupă vârsta de o lună, cel mai relevant semn este limitarea abducției coapsei — Corect: Limitarea abducției după o lună este semnul cel mai relevant.\n\nCapul femural este vizibil radiografic de la naștere, deci ecografia nu are rol în primele 9 luni — Incorect: Capul este cartilaginos până la circa 9 luni; ultrasonografia este utilă în această perioadă.\n\nManevra Barlow reduce capul în acetabul, iar Ortolani luxează șoldul instabil — Incorect: Ortolani reduce (cracment de revenire), Barlow luxează prin adducție și flexie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 613, 614, Displazia de dezvoltare a șoldului — Ortolani, Barlow, Pavlik (pagini PDF: 285, 286).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    613,
    614
   ],
   "pdfPages": [
    285,
    286
   ],
   "section": "Displazia de dezvoltare a șoldului — Ortolani, Barlow, Pavlik"
  },
  "learningObjective": "Aplicarea epidemiologiei, a ferestrei de 2 săptămâni pentru Ortolani/Barlow și a hamului Pavlik, față de ecografia din primele 9 luni.",
  "optionRationales": [
   "Incidența 1,5/1.000, treimea bilaterală și predilecția feminină sunt explicite.",
   "Utilitatea în primele două săptămâni și hamul Pavlik sunt descrise.",
   "Limitarea abducției după o lună este semnul cel mai relevant.",
   "Capul este cartilaginos până la circa 9 luni; ultrasonografia este utilă în această perioadă.",
   "Ortolani reduce (cracment de revenire), Barlow luxează prin adducție și flexie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează Ortolani/Barlow și înlocuiește ecografia precoce cu radiografia de la naștere."
  },
  "textbookExpressions": [
   "hamului Pavlik",
   "semnul Barlow"
  ]
 },
 {
  "id": "ortopedie-adv-041",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Boala Legg-Calvé-Perthes și epifizioliza femurală proximală:",
  "options": [
   "Perthes reprezintă osteonecroza capului femural la copii de 4–8 ani, cu raport băieți/fete de 8/1",
   "Durerea poate fi referită pe fața internă a genunchiului, în teritoriul nervului obturator",
   "Epifizioliza este mai frecventă la băieți, bilaterală în circa 33%, la 10–14 ani, la obezi cu insuficiență gonadală sau la copii înalți cu creștere rapidă",
   "Perthes afectează predominant fetele adolescente, cu raport 1/8 față de băieți",
   "Epifizioliza se tratează prin ham Pavlik, fără fixare cu șuruburi"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Perthes reprezintă osteonecroza capului femural la copii de 4–8 ani, cu raport băieți/fete de 8/1 — Corect: Vârsta 4–8 ani și raportul 8/1 sunt explicite.\n\nDurerea poate fi referită pe fața internă a genunchiului, în teritoriul nervului obturator — Corect: Durerea referită pe obturator, deci investigarea șoldului la durere de genunchi, este descrisă.\n\nEpifizioliza este mai frecventă la băieți, bilaterală în circa 33%, la 10–14 ani, la obezi cu insuficiență gonadală sau la copii înalți cu creștere rapidă — Corect: Predilecția masculină, 33% bilateral, 10–14 ani și cele două biotipuri sunt enunțate.\n\nPerthes afectează predominant fetele adolescente, cu raport 1/8 față de băieți — Incorect: Raportul 8/1 este masculin/feminin, nu invers, și nu privește adolescente.\n\nEpifizioliza se tratează prin ham Pavlik, fără fixare cu șuruburi — Incorect: Capul se fixează cu multiple șuruburi; Pavlik este tratamentul DDH.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 614, Perthes și epifizioliza femurală proximală (pagini PDF: 286).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    614
   ],
   "pdfPages": [
    286
   ],
   "section": "Perthes și epifizioliza femurală proximală"
  },
  "learningObjective": "Contrastarea vârstei 4–8 ani și a raportului 8/1 din Perthes cu profilul 10–14 ani și 33% bilateral al epifiziolizei.",
  "optionRationales": [
   "Vârsta 4–8 ani și raportul 8/1 sunt explicite.",
   "Durerea referită pe obturator, deci investigarea șoldului la durere de genunchi, este descrisă.",
   "Predilecția masculină, 33% bilateral, 10–14 ani și cele două biotipuri sunt enunțate.",
   "Raportul 8/1 este masculin/feminin, nu invers, și nu privește adolescente.",
   "Capul se fixează cu multiple șuruburi; Pavlik este tratamentul DDH."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește sex-ratio-ul Perthes și atribuie hamul Pavlik epifiziolizei."
  },
  "textbookExpressions": [
   "4-8 ani",
   "aproximativ 33%"
  ]
 },
 {
  "id": "ortopedie-adv-042",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Scolioza idiopatică a adolescentului se caracterizează prin:",
  "options": [
   "Fetele sunt afectate de nouă ori mai frecvent decât băieții; deformarea se accentuează cel mai frecvent în adolescență",
   "Curburile toracice severe pot compromite funcția cardio-pulmonară",
   "Scolioza congenitală asociază frecvent malformații de tub neural, genito-urinare și cardiovasculare",
   "Băieții sunt afectați de nouă ori mai frecvent, iar curba este dureroasă de la debut",
   "Scolioza neuromusculară se limitează la un segment scurt, similar neurofibromatozei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Fetele sunt afectate de nouă ori mai frecvent decât băieții; deformarea se accentuează cel mai frecvent în adolescență — Corect: Raportul 9:1 fete/băieți și accentuarea în adolescență sunt explicite.\n\nCurburile toracice severe pot compromite funcția cardio-pulmonară — Corect: Compromiterea cardio-pulmonară a curburilor toracice severe este menționată.\n\nScolioza congenitală asociază frecvent malformații de tub neural, genito-urinare și cardiovasculare — Corect: Asocierea cu tub neural, GU și CV la forma congenitală este enunțată.\n\nBăieții sunt afectați de nouă ori mai frecvent, iar curba este dureroasă de la debut — Incorect: Predilecția este feminină; forma idiopatică este descrisă ca nedureroasă progresivă.\n\nScolioza neuromusculară se limitează la un segment scurt, similar neurofibromatozei — Incorect: Curbarea neuromusculară implică de obicei întreaga lungime a coloanei; segmentul scurt sever este al neurofibromatozei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 615, Scolioza — Idiopatică, congenitală și neuromusculară (pagini PDF: 287).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    615
   ],
   "pdfPages": [
    287
   ],
   "section": "Scolioza — Idiopatică, congenitală și neuromusculară"
  },
  "learningObjective": "Recunoașterea predilecției feminine 9:1, a riscului cardio-pulmonar toracic și a malformațiilor asociate formei congenitale.",
  "optionRationales": [
   "Raportul 9:1 fete/băieți și accentuarea în adolescență sunt explicite.",
   "Compromiterea cardio-pulmonară a curburilor toracice severe este menționată.",
   "Asocierea cu tub neural, GU și CV la forma congenitală este enunțată.",
   "Predilecția este feminină; forma idiopatică este descrisă ca nedureroasă progresivă.",
   "Curbarea neuromusculară implică de obicei întreaga lungime a coloanei; segmentul scurt sever este al neurofibromatozei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează sex-ratio-ul 9:1 și confundă curba lungă neuromusculară cu segmentul scurt din neurofibromatoză."
  },
  "textbookExpressions": [
   "nouă ori mai frecvent",
   "cardio-pulmonară"
  ]
 },
 {
  "id": "ortopedie-adv-043",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Osteomielita hematogenă acută la copil:",
  "options": [
   "Metafizele oaselor lungi sunt cele mai obișnuite focare, prin turbulența capilarelor care se răsucesc la cartilajul de creștere",
   "În grupa 0–3 luni sunt implicate bacterii coliforme; până la 3 ani Haemophilus influenzae; Staphylococcus aureus apare la toate vârstele",
   "Antibioticele se continuă cel puțin 3 săptămâni; lipsa ameliorării în 24 de ore impune drenajul abcesului subperiostal",
   "Modificările radiologice apar din prima zi și fac scintigrafia inutilă",
   "La adult, germenul principal rămâne Escherichia coli, nu S. aureus"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Metafizele oaselor lungi sunt cele mai obișnuite focare, prin turbulența capilarelor care se răsucesc la cartilajul de creștere — Corect: Anatomia capilarelor metafizare și predilecția sediului sunt explicite.\n\nÎn grupa 0–3 luni sunt implicate bacterii coliforme; până la 3 ani Haemophilus influenzae; Staphylococcus aureus apare la toate vârstele — Corect: Coliformele 0–3 luni, H. influenzae până la 3 ani și S. aureus la toate vârstele sunt citate.\n\nAntibioticele se continuă cel puțin 3 săptămâni; lipsa ameliorării în 24 de ore impune drenajul abcesului subperiostal — Corect: Cele 3 săptămâni de antibiotic și drenajul după 24 de ore fără ameliorare sunt enunțate.\n\nModificările radiologice apar din prima zi și fac scintigrafia inutilă — Incorect: Modificările radiologice apar târziu, după o săptămână sau mai mult; scintigrafia în 3 faze ajută precoce.\n\nLa adult, germenul principal rămâne Escherichia coli, nu S. aureus — Incorect: S. aureus rămâne principala cauză a infecției osoase la adulți.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 616, Osteomielita hematogenă acută (pagini PDF: 288).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    616
   ],
   "pdfPages": [
    288
   ],
   "section": "Osteomielita hematogenă acută"
  },
  "learningObjective": "Aplicarea predilecției metafizare, a spectrului pe vârste și a ferestrelor 24 de ore/3 săptămâni.",
  "optionRationales": [
   "Anatomia capilarelor metafizare și predilecția sediului sunt explicite.",
   "Coliformele 0–3 luni, H. influenzae până la 3 ani și S. aureus la toate vârstele sunt citate.",
   "Cele 3 săptămâni de antibiotic și drenajul după 24 de ore fără ameliorare sunt enunțate.",
   "Modificările radiologice apar târziu, după o săptămână sau mai mult; scintigrafia în 3 faze ajută precoce.",
   "S. aureus rămâne principala cauză a infecției osoase la adulți."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează latența radiologică și înlocuiește S. aureus adult cu E. coli."
  },
  "textbookExpressions": [
   "bacteriile coliforme",
   "abces subperiostal"
  ]
 },
 {
  "id": "ortopedie-adv-044",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Artrita septică:",
  "options": [
   "La copii apare ca o complicație a osteomielitei hematogene; articulațiile cu metafiza în capsulă sunt șoldul, cotul și umărul",
   "Suspiciunea clinică justifică aspirația lichidului articular în urgență pentru cultură, colorație Gram și numărarea celulelor",
   "Aspirația printr-o zonă de celulită este contraindicată, deoarece poate introduce germeni în articulație",
   "Un număr de leucocite sub 50.000 nu este de obicei infecțios; peste 100.000 este sugestiv pentru infecție",
   "Tratamentul de elecție este antibioterapia orală prelungită, fără artrotomie sau lavaj"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "La copii apare ca o complicație a osteomielitei hematogene; articulațiile cu metafiza în capsulă sunt șoldul, cotul și umărul — Corect: Șoldul, cotul și umărul sunt enumerate ca articulații cu metafiză în capsulă.\n\nSuspiciunea clinică justifică aspirația lichidului articular în urgență pentru cultură, colorație Gram și numărarea celulelor — Corect: Aspirația în urgență la suspiciune clinică este cerută.\n\nAspirația printr-o zonă de celulită este contraindicată, deoarece poate introduce germeni în articulație — Corect: Contraindicația aspirației prin celulită este explicită.\n\nUn număr de leucocite sub 50.000 nu este de obicei infecțios; peste 100.000 este sugestiv pentru infecție — Corect: Pragurile sub 50.000 și peste 100.000 sunt citate.\n\nTratamentul de elecție este antibioterapia orală prelungită, fără artrotomie sau lavaj — Incorect: Tratamentul eficient este artrotomia, drenajul, debridarea și lavajul, plus antibiotic intravenos.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 617, Artrita septică — Aspirație, praguri celulare și urgență (pagini PDF: 289).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    617
   ],
   "pdfPages": [
    289
   ],
   "section": "Artrita septică — Aspirație, praguri celulare și urgență"
  },
  "learningObjective": "Integrarea articulațiilor cu metafiză intracapsulară, a aspirației de urgență, a interdicției prin celulită și a pragurilor 50.000/100.000.",
  "optionRationales": [
   "Șoldul, cotul și umărul sunt enumerate ca articulații cu metafiză în capsulă.",
   "Aspirația în urgență la suspiciune clinică este cerută.",
   "Contraindicația aspirației prin celulită este explicită.",
   "Pragurile sub 50.000 și peste 100.000 sunt citate.",
   "Tratamentul eficient este artrotomia, drenajul, debridarea și lavajul, plus antibiotic intravenos."
  ],
  "difficulty": {
   "score": 9,
   "kind": "editorial-estimate",
   "reason": "Near-miss pe pragurile 50.000/100.000 și pe interdicția de a aspira prin celulită."
  },
  "textbookExpressions": [
   "<SO.OOO",
   "> 100.000"
  ]
 },
 {
  "id": "ortopedie-adv-045",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Tenosinovita septică a flexorilor mâinii și fasceita necrozantă:",
  "options": [
   "Kanavel descrie deget edemațiat uniform, poziție flectată, durere pe teacă la presiune anteroposterioară și durere ascuțită la extensie pasivă",
   "Absența ameliorării în 24–48 de ore impune drenaj chirurgical și lavaj abundent",
   "Fasceita necrozantă de tip 2 este determinată de streptococ β-hemolitic de grup A, asociat sau nu cu S. aureus, la pacienți anterior sănătoși",
   "Tipul 1 de fasceită necrozantă este monomicrobian, rezervat gazdelor imunocompetente",
   "Rata mortalității în fasceita necrozantă este neglijabilă, sub 1%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Kanavel descrie deget edemațiat uniform, poziție flectată, durere pe teacă la presiune anteroposterioară și durere ascuțită la extensie pasivă — Corect: Cele patru semne Kanavel sunt enumerate.\n\nAbsența ameliorării în 24–48 de ore impune drenaj chirurgical și lavaj abundent — Corect: Fereastra 24–48 de ore către chirurgie este explicită.\n\nFasceita necrozantă de tip 2 este determinată de streptococ β-hemolitic de grup A, asociat sau nu cu S. aureus, la pacienți anterior sănătoși — Corect: Tipul 2 streptococic, cu sau fără S. aureus, la anterior sănătoși, este descris.\n\nTipul 1 de fasceită necrozantă este monomicrobian, rezervat gazdelor imunocompetente — Incorect: Tipul 1 este polimicrobian, cel mai frecvent la imunocompromiși.\n\nRata mortalității în fasceita necrozantă este neglijabilă, sub 1% — Incorect: Mortalitatea se poate apropia de 25%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 618, Tenosinovita flexorilor (Kanavel) și fasceita necrozantă (pagini PDF: 290).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    618
   ],
   "pdfPages": [
    290
   ],
   "section": "Tenosinovita flexorilor (Kanavel) și fasceita necrozantă"
  },
  "learningObjective": "Recunoașterea celor 4 semne Kanavel, a ferestrei 24–48 de ore și a tipului 2 streptococic la gazdă sănătoasă.",
  "optionRationales": [
   "Cele patru semne Kanavel sunt enumerate.",
   "Fereastra 24–48 de ore către chirurgie este explicită.",
   "Tipul 2 streptococic, cu sau fără S. aureus, la anterior sănătoși, este descris.",
   "Tipul 1 este polimicrobian, cel mai frecvent la imunocompromiși.",
   "Mortalitatea se poate apropia de 25%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește tipurile 1/2 de fasceită și înlocuiește mortalitatea de 25% cu sub 1%."
  },
  "textbookExpressions": [
   "Kanavel",
   "se poate apropia de 25%"
  ]
 },
 {
  "id": "ortopedie-adv-046",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Osteoartroza și artrita reumatoidă se deosebesc prin:",
  "options": [
   "Radiologic, osteoartroza asociază pensare localizată a spațiului, scleroză subcondrală, osteofite și chiste subcondrale",
   "Cartilajul articular nu are inervație; durerea din artroză are originea în structurile periarticulare",
   "Artrita reumatoidă este mai frecventă la femei (3:1), asociată HLA-DR4; 80% au factor reumatoid, prezent însă și la 1–5% din populația generală",
   "Osteofitele hipertrofice sunt rare în artrita reumatoidă",
   "Artroplastia totală de genunchi reduce durerea în mai puțin de 20% din cazuri și se rezervă tinerilor foarte activi"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Radiologic, osteoartroza asociază pensare localizată a spațiului, scleroză subcondrală, osteofite și chiste subcondrale — Corect: Cele patru elemente patognomonice radiologice sunt enumerate.\n\nCartilajul articular nu are inervație; durerea din artroză are originea în structurile periarticulare — Corect: Absența inervației cartilajului și originea periarticulară a durerii sunt explicite.\n\nArtrita reumatoidă este mai frecventă la femei (3:1), asociată HLA-DR4; 80% au factor reumatoid, prezent însă și la 1–5% din populația generală — Corect: Raportul 3:1, HLA-DR4, 80% RF și 1–5% în populație sunt citate.\n\nOsteofitele hipertrofice sunt rare în artrita reumatoidă — Corect: Osteofitele rare în RA sunt enunțate.\n\nArtroplastia totală de genunchi reduce durerea în mai puțin de 20% din cazuri și se rezervă tinerilor foarte activi — Incorect: Artroplastia totală reduce durerea în peste 90% și se rezervă artrozei avansate cu stil de viață relativ sedentar.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 619, 620, Osteoartroza versus artrita reumatoidă (pagini PDF: 291, 292).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    619,
    620
   ],
   "pdfPages": [
    291,
    292
   ],
   "section": "Osteoartroza versus artrita reumatoidă"
  },
  "learningObjective": "Contrastarea celor 4 semne radiologice OA și a originii periarticulare a durerii cu profilul RA (3:1, HLA-DR4, osteofite rare).",
  "optionRationales": [
   "Cele patru elemente patognomonice radiologice sunt enumerate.",
   "Absența inervației cartilajului și originea periarticulară a durerii sunt explicite.",
   "Raportul 3:1, HLA-DR4, 80% RF și 1–5% în populație sunt citate.",
   "Osteofitele rare în RA sunt enunțate.",
   "Artroplastia totală reduce durerea în peste 90% și se rezervă artrozei avansate cu stil de viață relativ sedentar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește rata de 90% a artroplastiei cu 20% și inversează indicația tânăr activ (care este a artrodezei)."
  },
  "textbookExpressions": [
   "Pensarea localizată",
   "HLA-DR4"
  ]
 },
 {
  "id": "ortopedie-adv-047",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Hernia de disc lombară și sindromul de coadă de cal:",
  "options": [
   "Cele mai frecvent afectate discuri sunt L4–L5 și L5–S1; discul L4–L5 rupt afectează rădăcina L5, iar L5–S1 rădăcina S1",
   "Testul de ridicare a membrului inferior este pozitiv prin durere radiată sub nivelul genunchiului",
   "Hernierea centrală cu incontinență fecală și urinară (sindrom de coadă de cal) este o urgență chirurgicală",
   "Majoritatea durerilor lombare se datorează unui disc alunecat; peste 50% necesită tratament chirurgical",
   "Indicațiile absolute de decompresie includ doar durerea axială mecanică de peste 48 de ore"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cele mai frecvent afectate discuri sunt L4–L5 și L5–S1; discul L4–L5 rupt afectează rădăcina L5, iar L5–S1 rădăcina S1 — Corect: Segmentele și rădăcinile corespunzătoare sunt explicite.\n\nTestul de ridicare a membrului inferior este pozitiv prin durere radiată sub nivelul genunchiului — Corect: Pozitivitatea prin durere sub genunchi este descrisă.\n\nHernierea centrală cu incontinență fecală și urinară (sindrom de coadă de cal) este o urgență chirurgicală — Corect: Coada de cal ca urgență pentru a evita incontinența permanentă este enunțată.\n\nMajoritatea durerilor lombare se datorează unui disc alunecat; peste 50% necesită tratament chirurgical — Incorect: 80–90% din durerile lombare au etiologie necunoscută; doar 1–2% necesită chirurgie.\n\nIndicațiile absolute de decompresie includ doar durerea axială mecanică de peste 48 de ore — Incorect: Indicațiile absolute sunt deficitul neurologic progresiv și sindromul de coadă de cal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 623, 625, Hernia de disc lombară — Rădăcini și coadă de cal (pagini PDF: 295, 297).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    623,
    625
   ],
   "pdfPages": [
    295,
    297
   ],
   "section": "Hernia de disc lombară — Rădăcini și coadă de cal"
  },
  "learningObjective": "Aplicarea corespondenței L4–L5/L5 și L5–S1/S1, a Lasegue-ului sub genunchi și a urgenței cozii de cal.",
  "optionRationales": [
   "Segmentele și rădăcinile corespunzătoare sunt explicite.",
   "Pozitivitatea prin durere sub genunchi este descrisă.",
   "Coada de cal ca urgență pentru a evita incontinența permanentă este enunțată.",
   "80–90% din durerile lombare au etiologie necunoscută; doar 1–2% necesită chirurgie.",
   "Indicațiile absolute sunt deficitul neurologic progresiv și sindromul de coadă de cal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Supraestimează ponderea discului alunecat și înlocuiește indicațiile absolute cu durerea axială scurtă."
  },
  "textbookExpressions": [
   "L4-L5",
   "sindrom de coadă de cal"
  ]
 },
 {
  "id": "ortopedie-adv-048",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Osteoporoza se deosebește de osteomalacie prin:",
  "options": [
   "În osteoporoză, compoziția chimică este normală, dar mineralul osos total este cu peste 2 deviații standard sub etalonul de vârstă; raportul mineral/matrice rămâne normal",
   "În osteomalacie, cantitatea de matrice pe unitatea de volum este normală, dar insuficient calcificată; raportul mineral/matrice este scăzut",
   "Forma pediatrică a osteomalaciei se numește rahitism",
   "Osteoporoza are matrice nemineralizată abundantă (zone osteoide largi), iar osteomalacia are raport mineral/matrice normal",
   "Zona Looser este patognomonică osteoporozei involutive, nu osteomalaciei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În osteoporoză, compoziția chimică este normală, dar mineralul osos total este cu peste 2 deviații standard sub etalonul de vârstă; raportul mineral/matrice rămâne normal — Corect: Definiția cu peste 2 DS și raportul normal sunt explicite.\n\nÎn osteomalacie, cantitatea de matrice pe unitatea de volum este normală, dar insuficient calcificată; raportul mineral/matrice este scăzut — Corect: Matricea normală cantitativ, slab calcificată, și raportul scăzut definesc osteomalacia.\n\nForma pediatrică a osteomalaciei se numește rahitism — Corect: Rahitismul ca formă pediatrică este enunțat.\n\nOsteoporoza are matrice nemineralizată abundantă (zone osteoide largi), iar osteomalacia are raport mineral/matrice normal — Incorect: Zonele osteoide largi țin de osteomalacie, nu de osteoporoză.\n\nZona Looser este patognomonică osteoporozei involutive, nu osteomalaciei — Incorect: Zona Looser (bandă de rarefiere, fractură de stres în curs de vindecare) este caracteristică osteomalaciei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 627, 628, Osteoporoza versus osteomalacie (pagini PDF: 299, 300).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    627,
    628
   ],
   "pdfPages": [
    299,
    300
   ],
   "section": "Osteoporoza versus osteomalacie"
  },
  "learningObjective": "Contrastarea raportului mineral/matrice normal (osteoporoză, ambele deficiente) versus scăzut (osteomalacie, mineralizare inadecvată).",
  "optionRationales": [
   "Definiția cu peste 2 DS și raportul normal sunt explicite.",
   "Matricea normală cantitativ, slab calcificată, și raportul scăzut definesc osteomalacia.",
   "Rahitismul ca formă pediatrică este enunțat.",
   "Zonele osteoide largi țin de osteomalacie, nu de osteoporoză.",
   "Zona Looser (bandă de rarefiere, fractură de stres în curs de vindecare) este caracteristică osteomalaciei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește raportul mineral/matrice și atribuie liniile Looser osteoporozei."
  },
  "textbookExpressions": [
   "peste 2 deviaţii standard",
   "matricea organică"
  ]
 },
 {
  "id": "ortopedie-adv-049",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Tumorile osoase primare:",
  "options": [
   "Cea mai frecventă tumoră primară osoasă este mielomul multiplu; scintigrafia osoasă este negativă în mielom",
   "Osteosarcomul este bimodal, adesea înainte de 30 de ani, metafizar; 50% interesează femurul distal și tibia proximală, cu spiculi „raze de soare”",
   "Sarcomul Ewing apare la 10–15 ani, diafizar, cu aspect de „bulb de ceapă”, și poate fi confundat clinic și histologic cu osteomielita",
   "Osteomul osteoid produce durere care cedează adesea la aspirină, la sub 30 de ani, femur și tibie, zonă radiotransparentă sub 1 cm cu scleroză",
   "Tumora cu celule gigante este o leziune diafizară a copilului înainte de închiderea cartilajului de creștere, cu evoluție invariabil benignă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Cea mai frecventă tumoră primară osoasă este mielomul multiplu; scintigrafia osoasă este negativă în mielom — Corect: Mielomul ca cea mai frecventă primară și scintigrafia negativă sunt explicite.\n\nOsteosarcomul este bimodal, adesea înainte de 30 de ani, metafizar; 50% interesează femurul distal și tibia proximală, cu spiculi „raze de soare” — Corect: Bimodalitatea, metafiza, 50% femur distal/tibie proximală și razele de soare sunt din tabelul 28-9.\n\nSarcomul Ewing apare la 10–15 ani, diafizar, cu aspect de „bulb de ceapă”, și poate fi confundat clinic și histologic cu osteomielita — Corect: Vârsta 10–15 ani, bulb de ceapă și confuzia cu osteomielita sunt citate.\n\nOsteomul osteoid produce durere care cedează adesea la aspirină, la sub 30 de ani, femur și tibie, zonă radiotransparentă sub 1 cm cu scleroză — Corect: Durerea cedând la aspirină, vârsta sub 30 de ani și nidusul sub 1 cm sunt descrise.\n\nTumora cu celule gigante este o leziune diafizară a copilului înainte de închiderea cartilajului de creștere, cu evoluție invariabil benignă — Incorect: Tumora cu celule gigante este epifizară, la 20–40 de ani, după închiderea cartilajului, și trebuie tratată ca leziune malignă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 630, 631, Neoplasmele osului — Mielom, osteosarcom, Ewing, osteom osteoid (pagini PDF: 302, 303).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    630,
    631
   ],
   "pdfPages": [
    302,
    303
   ],
   "section": "Neoplasmele osului — Mielom, osteosarcom, Ewing, osteom osteoid"
  },
  "learningObjective": "Recunoașterea mielomului ca cea mai frecventă tumoră primară (scintigrafie negativă), a osteosarcomului metafizar „raze de soare” și a Ewing-ului „bulb de ceapă”.",
  "optionRationales": [
   "Mielomul ca cea mai frecventă primară și scintigrafia negativă sunt explicite.",
   "Bimodalitatea, metafiza, 50% femur distal/tibie proximală și razele de soare sunt din tabelul 28-9.",
   "Vârsta 10–15 ani, bulb de ceapă și confuzia cu osteomielita sunt citate.",
   "Durerea cedând la aspirină, vârsta sub 30 de ani și nidusul sub 1 cm sunt descrise.",
   "Tumora cu celule gigante este epifizară, la 20–40 de ani, după închiderea cartilajului, și trebuie tratată ca leziune malignă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută osteoclastomul în diafiza copilului și neagă agresivitatea lui, față de celelalte entități din tabele."
  },
  "textbookExpressions": [
   "mielom multiplu",
   "bulb de ceapă"
  ]
 },
 {
  "id": "ortopedie-adv-050",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Mersul antalgic și mersul Trendelenburg se recunosc prin:",
  "options": [
   "Mersul antalgic scurtează faza de sprijin pe membrul afectat și faza de balansare a membrului opus, deci lungimea pasului",
   "Hipotonia abductorilor șoldului (fesier mijlociu și mic) permite înclinarea bazinului contralateral; compensarea prin înclinarea trunchiului ipsilateral definește mersul Trendelenburg",
   "Faza de sprijin ocupă 60% din ciclul de mers, iar faza de balansare 40%",
   "Mersul antalgic prelungește faza de sprijin pe membrul dureros, pentru a „testa” articulația",
   "Mersul Trendelenburg este produs de hipotonia cvadricepsului, pacientul împingând coapsa înapoi cu mâna"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mersul antalgic scurtează faza de sprijin pe membrul afectat și faza de balansare a membrului opus, deci lungimea pasului — Corect: Despovărarea rapidă scurtează sprijinul pe membrul afectat și balansul opusului.\n\nHipotonia abductorilor șoldului (fesier mijlociu și mic) permite înclinarea bazinului contralateral; compensarea prin înclinarea trunchiului ipsilateral definește mersul Trendelenburg — Corect: Mecanismul abductorilor și compensarea ipsilaterală sunt descrise ca mers Trendelenburg sau de tip fesier mijlociu.\n\nFaza de sprijin ocupă 60% din ciclul de mers, iar faza de balansare 40% — Corect: Raportul 60%/40% al ciclului este explicit.\n\nMersul antalgic prelungește faza de sprijin pe membrul dureros, pentru a „testa” articulația — Incorect: Reacția la durere este despovărarea, nu prelungirea sprijinului.\n\nMersul Trendelenburg este produs de hipotonia cvadricepsului, pacientul împingând coapsa înapoi cu mâna — Incorect: Împingerea coapsei înapoi compensează hipotonia de cvadriceps, nu mersul Trendelenburg.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 633, 632, Mersul — Ciclul de mers, antalgic și Trendelenburg (pagini PDF: 305, 304).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    633,
    632
   ],
   "pdfPages": [
    305,
    304
   ],
   "section": "Mersul — Ciclul de mers, antalgic și Trendelenburg"
  },
  "learningObjective": "Contrastarea scurtării fazei de sprijin (antalgic) cu înclinarea ipsilaterală de compensare a deficitului de fesier mijlociu (Trendelenburg).",
  "optionRationales": [
   "Despovărarea rapidă scurtează sprijinul pe membrul afectat și balansul opusului.",
   "Mecanismul abductorilor și compensarea ipsilaterală sunt descrise ca mers Trendelenburg sau de tip fesier mijlociu.",
   "Raportul 60%/40% al ciclului este explicit.",
   "Reacția la durere este despovărarea, nu prelungirea sprijinului.",
   "Împingerea coapsei înapoi compensează hipotonia de cvadriceps, nu mersul Trendelenburg."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează scurtarea versus prelungirea sprijinului antalgic și atribuie Trendelenburg-ul cvadricepsului."
  },
  "textbookExpressions": [
   "60% din ciclu",
   "mers Trendelenburg"
  ]
 },
 {
  "id": "ortopedie-adv-051",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Vindecarea unei fracturi este evidență radiologic atunci când:",
  "options": [
   "Se observă trabecule osoase distincte care traversează sediul fracturii",
   "Dispare doar durerea de palpare, fără nicio modificare pe radiografie",
   "Apar linii Looser pe colul femural și ramurile pubiene",
   "Calusul moale ocupă intervalul imediat post-traumatic, concomitent cu hematomul",
   "Scintigrafia cu technetiu este negativă, ca în mielomul multiplu"
  ],
  "correct": [
   0
  ],
  "explanation": "Se observă trabecule osoase distincte care traversează sediul fracturii — Corect: Textul precizează că vindecarea radiologică este evidentă când trabeculele osoase distincte traversează sediul fracturii.\n\nDispare doar durerea de palpare, fără nicio modificare pe radiografie — Incorect: Dispariția durerii și a mișcării în focar sunt criterii clinice, nu radiologice izolate.\n\nApar linii Looser pe colul femural și ramurile pubiene — Incorect: Zona Looser caracterizează osteomalacia, nu consolidarea unei fracturi.\n\nCalusul moale ocupă intervalul imediat post-traumatic, concomitent cu hematomul — Incorect: Calusul moale nu coincide cu hematomul imediat.\n\nScintigrafia cu technetiu este negativă, ca în mielomul multiplu — Incorect: Scintigrafia negativă în mielom nu este criteriul de vindecare a fracturii.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 593, Vindecarea osoasă — Criterii clinice și radiologice (pagini PDF: 265).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    593
   ],
   "pdfPages": [
    265
   ],
   "section": "Vindecarea osoasă — Criterii clinice și radiologice"
  },
  "learningObjective": "Diferențierea criteriului radiologic (trabecule care traversează focarul) de semnele clinice și de entități metabolice sau tumorale din același capitol.",
  "optionRationales": [
   "Textul precizează că vindecarea radiologică este evidentă când trabeculele osoase distincte traversează sediul fracturii.",
   "Dispariția durerii și a mișcării în focar sunt criterii clinice, nu radiologice izolate.",
   "Zona Looser caracterizează osteomalacia, nu consolidarea unei fracturi.",
   "Calusul moale nu coincide cu hematomul imediat.",
   "Scintigrafia negativă în mielom nu este criteriul de vindecare a fracturii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește trabeculele care traversează focarul cu linii Looser sau cu calusul moale din tabelul de vindecare."
  },
  "textbookExpressions": [
   "trabecule",
   "Clinic, vindecarea"
  ]
 },
 {
  "id": "ortopedie-adv-052",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Restabilirea funcției după o fractură se caracterizează prin:",
  "options": [
   "Imobilizarea membrului în poziție funcțională, pentru a evita redoarea periarticulară și intra-articulară",
   "Inițierea exercițiilor izometrice ale mușchilor imobilizați, pentru a evita atrofia",
   "Încurajarea, de la debut, a mișcării articulațiilor adiacente care nu sunt imobilizate",
   "Imobilizarea prelungită a tuturor articulațiilor adiacente, până la consolidarea radiologică completă",
   "Exercițiile excesive accelerează consolidarea și previn eșecul implantului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Imobilizarea membrului în poziție funcțională, pentru a evita redoarea periarticulară și intra-articulară — Corect: Textul cere imobilizarea în poziție funcțională pentru a evita redoarea.\n\nInițierea exercițiilor izometrice ale mușchilor imobilizați, pentru a evita atrofia — Corect: Exercițiile izometrice sunt inițiate pentru a evita atrofia musculară.\n\nÎncurajarea, de la debut, a mișcării articulațiilor adiacente care nu sunt imobilizate — Corect: Mișcarea articulațiilor neimobilizate este încurajată de la debut.\n\nImobilizarea prelungită a tuturor articulațiilor adiacente, până la consolidarea radiologică completă — Incorect: Doar articulațiile cuprinse de imobilizare sunt limitate; cele adiacente libere se mobilizează.\n\nExercițiile excesive accelerează consolidarea și previn eșecul implantului — Incorect: Exercițiile excesive pot întârzia vindecarea, rupe implantul și pierde reducerea.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 592, 593, Principii de tratament — Recuperarea după fractură (pagini PDF: 264, 265).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    592,
    593
   ],
   "pdfPages": [
    264,
    265
   ],
   "section": "Principii de tratament — Recuperarea după fractură"
  },
  "learningObjective": "Aplicarea poziției funcționale, a izometriei și a mobilizării articulațiilor libere, față de recuperarea agresivă care întârzie vindecarea.",
  "optionRationales": [
   "Textul cere imobilizarea în poziție funcțională pentru a evita redoarea.",
   "Exercițiile izometrice sunt inițiate pentru a evita atrofia musculară.",
   "Mișcarea articulațiilor neimobilizate este încurajată de la debut.",
   "Doar articulațiile cuprinse de imobilizare sunt limitate; cele adiacente libere se mobilizează.",
   "Exercițiile excesive pot întârzia vindecarea, rupe implantul și pierde reducerea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă recuperarea progresivă într-o imobilizare globală sau într-un antrenament excesiv, două erori din același paragraf."
  },
  "textbookExpressions": [
   "poziţie funcţională",
   "Exerciţiile izometrice"
  ]
 },
 {
  "id": "ortopedie-adv-053",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la evaluarea vasculară după o luxație:",
  "options": [
   "O leziune arterială limitată la intima poate produce un tromb progresiv, deci evaluarea neurovasculară seriată este esențială după reducere",
   "Pulsul simetric exclude leziunea de intimă și face inutil indexul gleznă-braț",
   "Reducerea se amână până la arteriografie, chiar când tegumentul gleznei este compromis",
   "Leziunile vasculare produc ocluzie acută vizibilă imediat, fără tromboză întârziată pe intimă",
   "Radiografia post-reducere este superfluă dacă reducerea clinică „a reușit”"
  ],
  "correct": [
   0
  ],
  "explanation": "O leziune arterială limitată la intima poate produce un tromb progresiv, deci evaluarea neurovasculară seriată este esențială după reducere — Corect: Textul descrie trombul progresiv pe leziune de intimă și cere evaluare neurovasculară seriată după reducere.\n\nPulsul simetric exclude leziunea de intimă și face inutil indexul gleznă-braț — Incorect: Pulsul asimetric, Doppler-ul sau indexul gleznă-braț justifică evaluare vasculară amănunțită.\n\nReducerea se amână până la arteriografie, chiar când tegumentul gleznei este compromis — Incorect: Dacă tegumentul este compromis sau statusul neurovascular este îndoielnic, reducerea se face de urgență.\n\nLeziunile vasculare produc ocluzie acută vizibilă imediat, fără tromboză întârziată pe intimă — Incorect: Nu toate leziunile vasculare produc ocluzie acută.\n\nRadiografia post-reducere este superfluă dacă reducerea clinică „a reușit” — Incorect: Radiografia post-reducere verifică alinierea și exclude o fractură asociată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 595, Subluxația și luxația — Evaluare neurovasculară (pagini PDF: 267).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    595
   ],
   "pdfPages": [
    267
   ],
   "section": "Subluxația și luxația — Evaluare neurovasculară"
  },
  "learningObjective": "Recunoașterea trombozei întârziate pe leziune de intimă și a necesității evaluării seriate, inclusiv prin index gleznă-braț.",
  "optionRationales": [
   "Textul descrie trombul progresiv pe leziune de intimă și cere evaluare neurovasculară seriată după reducere.",
   "Pulsul asimetric, Doppler-ul sau indexul gleznă-braț justifică evaluare vasculară amănunțită.",
   "Dacă tegumentul este compromis sau statusul neurovascular este îndoielnic, reducerea se face de urgență.",
   "Nu toate leziunile vasculare produc ocluzie acută.",
   "Radiografia post-reducere verifică alinierea și exclude o fractură asociată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează pulsul păstrat ca excludere a leziunii de intimă, ignorând tromboza întârziată descrisă în text."
  },
  "textbookExpressions": [
   "evaluarea neurovasculară seriată",
   "index gleznă-braţ"
  ]
 },
 {
  "id": "ortopedie-adv-054",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Sindromul de compartiment de efort la alergător:",
  "options": [
   "La alergătorii competitivi, durerea provine adesea din compartimentul posterior profund (tibial posterior, flexori, flexor lung al halucelui)",
   "Diagnosticul se bazează pe măsurători obiective ale presiunii; după efort, presiunile scad lent, cu revenire întârziată",
   "Durerea de efort a alergătorului este, de regulă, din compartimentul palmar al mâinii",
   "Presiunile revin instantaneu la normal, identic individului asimptomatic, deci măsurătoarea este inutilă",
   "Fasciotomia este contraindicată după eșecul ortezelor și al modificării antrenamentului"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "La alergătorii competitivi, durerea provine adesea din compartimentul posterior profund (tibial posterior, flexori, flexor lung al halucelui) — Corect: Textul plasează durerea alergătorului competitiv în compartimentul posterior profund.\n\nDiagnosticul se bazează pe măsurători obiective ale presiunii; după efort, presiunile scad lent, cu revenire întârziată — Corect: Măsurătoarea de presiune și revenirea întârziată definesc diagnosticul.\n\nDurerea de efort a alergătorului este, de regulă, din compartimentul palmar al mâinii — Incorect: Compartimentul palmar nu este sediul descris; la majoritatea, durerea e în compartimentul anterior al gambei.\n\nPresiunile revin instantaneu la normal, identic individului asimptomatic, deci măsurătoarea este inutilă — Incorect: La simptomatici revenirea este lentă, nu instantanee.\n\nFasciotomia este contraindicată după eșecul ortezelor și al modificării antrenamentului — Incorect: După eșecul măsurilor conservatoare, fasciotomia poate trata cu succes afecțiunea.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 604, Sindromul de compartiment de exerciții (pagini PDF: 276).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    604
   ],
   "pdfPages": [
    276
   ],
   "section": "Sindromul de compartiment de exerciții"
  },
  "learningObjective": "Diferențierea sediului posterior profund la alergătorul competitiv de recuperarea lentă a presiunii, față de fasciotomia rezervată eșecului conservator.",
  "optionRationales": [
   "Textul plasează durerea alergătorului competitiv în compartimentul posterior profund.",
   "Măsurătoarea de presiune și revenirea întârziată definesc diagnosticul.",
   "Compartimentul palmar nu este sediul descris; la majoritatea, durerea e în compartimentul anterior al gambei.",
   "La simptomatici revenirea este lentă, nu instantanee.",
   "După eșecul măsurilor conservatoare, fasciotomia poate trata cu succes afecțiunea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută durerea alergătorului din posteriorul profund în palmar și anulează indicația de fasciotomie după eșec conservator."
  },
  "textbookExpressions": [
   "compattiment de exerci",
   "fasciotomie"
  ]
 },
 {
  "id": "ortopedie-adv-055",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Entorsele laterale ale gleznei:",
  "options": [
   "Ligamentul talofibular anterior este primul lezat în inversiune exagerată",
   "Tratamentul include gheață, drenaj postural, bandaj compresiv și mobilizare precoce",
   "Exercițiile de propriocepție sunt o componentă importantă a recuperării, deoarece terminațiile proprioceptive sunt lezate",
   "Repararea chirurgicală primară este regula, deoarece majoritatea entorselor lasă instabilitate reziduală marcată",
   "Ligamentul deltoid este lezat mai frecvent decât cele laterale, maleola peronieră fiind scurtă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Ligamentul talofibular anterior este primul lezat în inversiune exagerată — Corect: Textul identifică talofibularul anterior ca primul ligament lezat în inversiune.\n\nTratamentul include gheață, drenaj postural, bandaj compresiv și mobilizare precoce — Corect: Gheața, drenajul postural, bandajul și mobilizarea precoce sunt enumerate.\n\nExercițiile de propriocepție sunt o componentă importantă a recuperării, deoarece terminațiile proprioceptive sunt lezate — Corect: Propriocepția lezată explică recidivele și impune exerciții specifice.\n\nRepararea chirurgicală primară este regula, deoarece majoritatea entorselor lasă instabilitate reziduală marcată — Incorect: Reparația primară este rar indicată; rezultatele reconstrucției tardive sunt similare.\n\nLigamentul deltoid este lezat mai frecvent decât cele laterale, maleola peronieră fiind scurtă — Incorect: Maleola peronieră mai lungă protejează de eversiune; deltoidul este mai rar afectat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 604, Entorsele de gleznă — Ligamente laterale (pagini PDF: 276).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    604
   ],
   "pdfPages": [
    276
   ],
   "section": "Entorsele de gleznă — Ligamente laterale"
  },
  "learningObjective": "Recunoașterea ordinii ATFL-calcaneofibular, a tratamentului funcțional și a propriocepției, versus falsa predominanță a deltoidului.",
  "optionRationales": [
   "Textul identifică talofibularul anterior ca primul ligament lezat în inversiune.",
   "Gheața, drenajul postural, bandajul și mobilizarea precoce sunt enumerate.",
   "Propriocepția lezată explică recidivele și impune exerciții specifice.",
   "Reparația primară este rar indicată; rezultatele reconstrucției tardive sunt similare.",
   "Maleola peronieră mai lungă protejează de eversiune; deltoidul este mai rar afectat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează frecvența deltoid versus laterale și promovează chirurgia primară pe care textul o rezervă excepțiilor."
  },
  "textbookExpressions": [
   "talofibular anterior",
   "propriocepţie"
  ]
 },
 {
  "id": "ortopedie-adv-056",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Entorsa articulației metatarsofalangiene a halucelui (turf toe), netratată, este considerată cauză a:",
  "options": [
   "Hallux rigidus, cu artrită a MTF și pierderea extensiei",
   "Degetului Mallet, prin avulsia extensorului de la falanga distală",
   "Fracturii boxerului a metacarpianului V",
   "Miozitei osificante a cvadricepsului",
   "Spondilolizei de pars interarticularis"
  ],
  "correct": [
   0
  ],
  "explanation": "Hallux rigidus, cu artrită a MTF și pierderea extensiei — Corect: Textul leagă entorsa MTF netratată de artrita MTF a halucelui și de pierderea extensiei (hallux rigidus).\n\nDegetului Mallet, prin avulsia extensorului de la falanga distală — Incorect: Degetul Mallet este ruptura extensorului de la IFD.\n\nFracturii boxerului a metacarpianului V — Incorect: Fractura boxerului privește metacarpianul V.\n\nMiozitei osificante a cvadricepsului — Incorect: Miozita osificantă urmează contuziei de cvadriceps.\n\nSpondilolizei de pars interarticularis — Incorect: Spondiloliza este o fractură de pars, nu o sechelă de turf toe.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 610, Leziuni sportive — Turf toe și hallux rigidus (pagini PDF: 282).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    610
   ],
   "pdfPages": [
    282
   ],
   "section": "Leziuni sportive — Turf toe și hallux rigidus"
  },
  "learningObjective": "Legarea entorsei MTF a halucelui netratate de hallux rigidus, distinct de Mallet, boxer și miozita osificantă din aceeași secțiune.",
  "optionRationales": [
   "Textul leagă entorsa MTF netratată de artrita MTF a halucelui și de pierderea extensiei (hallux rigidus).",
   "Degetul Mallet este ruptura extensorului de la IFD.",
   "Fractura boxerului privește metacarpianul V.",
   "Miozita osificantă urmează contuziei de cvadriceps.",
   "Spondiloliza este o fractură de pars, nu o sechelă de turf toe."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Așază hallux rigidus lângă Mallet, boxer și miozită, trei leziuni învecinate din capitolul de sport."
  },
  "textbookExpressions": [
   "hallux rigidus",
   "metatarsofalangiene"
  ]
 },
 {
  "id": "ortopedie-adv-057",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Miozita osificantă traumatică:",
  "options": [
   "Reprezintă os depus în mușchi după contuzie, adesea în cvadriceps",
   "Simptomele includ sensibilitate musculară profundă și pierderea mișcării în articulația adiacentă",
   "Leziunea este autolimitată și poate fi diminuată de AINS",
   "Excizia înainte de 18 luni se asociază cu o rată ridicată de recidivă",
   "Forma sistemică apare doar la sportivul sănătos, nu după paralizie traumatică sau arsuri extinse"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Reprezintă os depus în mușchi după contuzie, adesea în cvadriceps — Corect: Definiția prin os intramusuclar post-contuzie, adesea în cvadriceps, este explicită.\n\nSimptomele includ sensibilitate musculară profundă și pierderea mișcării în articulația adiacentă — Corect: Sensibilitatea profundă și redoarea articulației adiacente sunt descrise.\n\nLeziunea este autolimitată și poate fi diminuată de AINS — Corect: Caracterul autolimitat și AINS sunt enunțate.\n\nExcizia înainte de 18 luni se asociază cu o rată ridicată de recidivă — Corect: Rezecția precoce (înainte de 18 luni) are rată înaltă de recidivă.\n\nForma sistemică apare doar la sportivul sănătos, nu după paralizie traumatică sau arsuri extinse — Incorect: Forma sistemică apare la pacienții cu paralizie traumatică sau arsuri extinse.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 610, Miozita osificantă traumatică (pagini PDF: 282).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    610
   ],
   "pdfPages": [
    282
   ],
   "section": "Miozita osificantă traumatică"
  },
  "learningObjective": "Recunoașterea metaplaziei din cvadriceps, a rolului AINS și a ferestrei de 18 luni înaintea exciziei, versus forma sistemică din paralizie/arsuri.",
  "optionRationales": [
   "Definiția prin os intramusuclar post-contuzie, adesea în cvadriceps, este explicită.",
   "Sensibilitatea profundă și redoarea articulației adiacente sunt descrise.",
   "Caracterul autolimitat și AINS sunt enunțate.",
   "Rezecția precoce (înainte de 18 luni) are rată înaltă de recidivă.",
   "Forma sistemică apare la pacienții cu paralizie traumatică sau arsuri extinse."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează fereastra de 18 luni a exciziei și atribuie forma sistemică sportivului sănătos, nu paraliziei sau arsurilor."
  },
  "textbookExpressions": [
   "miozită osificantă",
   "18 luni"
  ]
 },
 {
  "id": "ortopedie-adv-058",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "La naștere, anteversia femurală este de aproximativ:",
  "options": [
   "40°",
   "10–15°",
   "7° de valgus scheletal",
   "20° de genu varum",
   "0°, colul fiind retrovertit"
  ],
  "correct": [
   0
  ],
  "explanation": "40° — Corect: Textul precizează că la naștere anteversia femurală este de aproximativ 40°.\n\n10–15° — Incorect: 10–15° descrie orientarea anterioară a colului privit de-a lungul diafizei la adult.\n\n7° de valgus scheletal — Incorect: 7° de valgus este aliniamentul adult după vârsta de 3 ani.\n\n20° de genu varum — Incorect: 20° sau mai mult este genu varum fiziologic al sugarului.\n\n0°, colul fiind retrovertit — Incorect: Colul nu este retrovertit la 0° la naștere.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 610, 611, Torsiunea membrului inferior — Anteversia femurală (pagini PDF: 282, 283).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    610,
    611
   ],
   "pdfPages": [
    282,
    283
   ],
   "section": "Torsiunea membrului inferior — Anteversia femurală"
  },
  "learningObjective": "Memorarea anteversiei de circa 40° la naștere, distinctă de 10–15° a adultului și de unghiurile genu varum/valgum.",
  "optionRationales": [
   "Textul precizează că la naștere anteversia femurală este de aproximativ 40°.",
   "10–15° descrie orientarea anterioară a colului privit de-a lungul diafizei la adult.",
   "7° de valgus este aliniamentul adult după vârsta de 3 ani.",
   "20° sau mai mult este genu varum fiziologic al sugarului.",
   "Colul nu este retrovertit la 0° la naștere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 40° de la naștere cu 10–15° ale adultului și cu unghiurile varus/valgus din pagina următoare."
  },
  "textbookExpressions": [
   "40°",
   "anteversia femurală"
  ]
 },
 {
  "id": "ortopedie-adv-059",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Genu varum și genu valgum fiziologice ale copilului:",
  "options": [
   "Sugarii au genu varum fiziologic, cu unghi tibio-femural de 20° sau mai mult",
   "La circa 18 luni, unghiul se corectează pe măsură ce femurul și tibia devin coliniare",
   "După vârsta de 3 ani, aliniamentul adult normal este de 7° de valgus scheletal",
   "Genu varum persistent peste 2 ani nu justifică nicio evaluare radiologică",
   "Malaliniamentul persistă la majoritatea copiilor și impune osteotomie înainte de mers"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sugarii au genu varum fiziologic, cu unghi tibio-femural de 20° sau mai mult — Corect: Varumul fiziologic de 20° sau mai mult la sugari este explicit.\n\nLa circa 18 luni, unghiul se corectează pe măsură ce femurul și tibia devin coliniare — Corect: Corecția la circa 18 luni, cu femur și tibie coliniare, este enunțată.\n\nDupă vârsta de 3 ani, aliniamentul adult normal este de 7° de valgus scheletal — Corect: Aliniamentul adult de 7° valgus după 3 ani este citat.\n\nGenu varum persistent peste 2 ani nu justifică nicio evaluare radiologică — Incorect: Dacă genu varum persistă peste 2 ani, evaluarea radiologică poate fi justificată.\n\nMalaliniamentul persistă la majoritatea copiilor și impune osteotomie înainte de mers — Incorect: Pentru majoritatea copiilor aceste condiții sunt spectrul dezvoltării normale, rar chirurgicale.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 611, Diformități angulare — Genu varum și genu valgum (pagini PDF: 283).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    611
   ],
   "pdfPages": [
    283
   ],
   "section": "Diformități angulare — Genu varum și genu valgum"
  },
  "learningObjective": "Aplicarea progresiei 20° varum → colinearitate la 18 luni → 7° valgus după 3 ani.",
  "optionRationales": [
   "Varumul fiziologic de 20° sau mai mult la sugari este explicit.",
   "Corecția la circa 18 luni, cu femur și tibie coliniare, este enunțată.",
   "Aliniamentul adult de 7° valgus după 3 ani este citat.",
   "Dacă genu varum persistă peste 2 ani, evaluarea radiologică poate fi justificată.",
   "Pentru majoritatea copiilor aceste condiții sunt spectrul dezvoltării normale, rar chirurgicale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește vârstele 18 luni și 3 ani și transformă o variantă de creștere în indicație precoce de osteotomie."
  },
  "textbookExpressions": [
   "18 luni",
   "7"
  ]
 },
 {
  "id": "ortopedie-adv-060",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Piciorul plat și piciorul scobit la copil:",
  "options": [
   "În piciorul plat flexibil, arcul longitudinal lipsește în ortostatism, dar reapare fără sprijin",
   "Piciorul plat rigid, cu mișcare pasivă limitată, poate fi cauzat de o unire congenitală a oaselor tarsiene",
   "Pes cavus cu degete în gheară este consecința neuropatiilor periferice, cum ar fi Charcot-Marie-Tooth",
   "Piciorul plat flexibil este, de regulă, o indicație de artrodeză tarsiană înainte de vârsta de 2 ani",
   "Pes cavus este varianta fiziologică a sugarului, analog genu varum de 20°"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În piciorul plat flexibil, arcul longitudinal lipsește în ortostatism, dar reapare fără sprijin — Corect: Absența arcului în sprijin și reapariția fără încărcare definesc forma flexibilă.\n\nPiciorul plat rigid, cu mișcare pasivă limitată, poate fi cauzat de o unire congenitală a oaselor tarsiene — Corect: Unirea congenitală tarsiană explică platul rigid.\n\nPes cavus cu degete în gheară este consecința neuropatiilor periferice, cum ar fi Charcot-Marie-Tooth — Corect: Pes cavus cu degete în gheară este legat de CMT și alte neuropatii.\n\nPiciorul plat flexibil este, de regulă, o indicație de artrodeză tarsiană înainte de vârsta de 2 ani — Incorect: Platului flexibil îi lipsește, de obicei, simptomatologia; nu se artrodezează de principiu la 2 ani.\n\nPes cavus este varianta fiziologică a sugarului, analog genu varum de 20° — Incorect: Pes cavus nu este aliniamentul fiziologic al sugarului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 611, 613, Piciorul plat flexibil, coaliția tarsiană și pes cavus (pagini PDF: 283, 285).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    611,
    613
   ],
   "pdfPages": [
    283,
    285
   ],
   "section": "Piciorul plat flexibil, coaliția tarsiană și pes cavus"
  },
  "learningObjective": "Diferențierea platului flexibil (laxitate, arc care reapare) de coaliția tarsiană rigidă și de pes cavus din CMT.",
  "optionRationales": [
   "Absența arcului în sprijin și reapariția fără încărcare definesc forma flexibilă.",
   "Unirea congenitală tarsiană explică platul rigid.",
   "Pes cavus cu degete în gheară este legat de CMT și alte neuropatii.",
   "Platului flexibil îi lipsește, de obicei, simptomatologia; nu se artrodezează de principiu la 2 ani.",
   "Pes cavus nu este aliniamentul fiziologic al sugarului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă platul flexibil asimptomatic în indicație de artrodeză și mută pes cavus pe locul varumului fiziologic."
  },
  "textbookExpressions": [
   "Charcot-Marie-Tooth",
   "Piciorul plat"
  ]
 },
 {
  "id": "ortopedie-adv-061",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Piciorul strâmb congenital persistând după seria de corecții se tratează prin:",
  "options": [
   "Eliberarea chirurgicală posteromedială a structurilor dense de țesut moale de la picior și gleznă",
   "Ham Pavlik cu șoldurile în flexie și abducție, ca în displazia de șold",
   "Observație până la adolescență, similar genu valgum fiziologic",
   "Epifiziodeză contralaterală, ca în scurtarea peste 2 cm",
   "Fasciotomie de compartiment anterior al gambei"
  ],
  "correct": [
   0
  ],
  "explanation": "Eliberarea chirurgicală posteromedială a structurilor dense de țesut moale de la picior și gleznă — Corect: Textul recomandă eliberarea chirurgicală posteromedială când piciorul strâmb persistă după seria de corecții.\n\nHam Pavlik cu șoldurile în flexie și abducție, ca în displazia de șold — Incorect: Hamul Pavlik este tratamentul displaziei de șold, nu al piciorului strâmb.\n\nObservație până la adolescență, similar genu valgum fiziologic — Incorect: Piciorul strâmb persistent nu se lasă pe seama remodelării adolescente.\n\nEpifiziodeză contralaterală, ca în scurtarea peste 2 cm — Incorect: Epifiziodeza contralaterală corectează inegalitatea de lungime, nu equinovarusul.\n\nFasciotomie de compartiment anterior al gambei — Incorect: Fasciotomia privește sindromul de compartiment, nu piciorul strâmb.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 615, Piciorul strâmb — Tratament după eșecul gipsurilor (pagini PDF: 287).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    615
   ],
   "pdfPages": [
    287
   ],
   "section": "Piciorul strâmb — Tratament după eșecul gipsurilor"
  },
  "learningObjective": "Recunoașterea eliberării posteromediale după eșecul imobilizărilor ghipsate succesive, distinctă de Pavlik și de epifiziodeză.",
  "optionRationales": [
   "Textul recomandă eliberarea chirurgicală posteromedială când piciorul strâmb persistă după seria de corecții.",
   "Hamul Pavlik este tratamentul displaziei de șold, nu al piciorului strâmb.",
   "Piciorul strâmb persistent nu se lasă pe seama remodelării adolescente.",
   "Epifiziodeza contralaterală corectează inegalitatea de lungime, nu equinovarusul.",
   "Fasciotomia privește sindromul de compartiment, nu piciorul strâmb."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește eliberarea posteromedială cu hamul Pavlik, două manevre pediatrice din același capitol."
  },
  "textbookExpressions": [
   "picior strâmb",
   "posteromedial"
  ]
 },
 {
  "id": "ortopedie-adv-062",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Scolioza flexibilă se deosebește de cea structurală prin:",
  "options": [
   "Forma flexibilă poate fi datorată posturii deficitare, spasmului de lângă un disc herniat sau compensării unui picior scurtat",
   "Forma structurală asociază o diformitate vertebrală rotativă, necorectabilă prin schimbarea posturii",
   "Asimetria cutiei toracice se observă cel mai bine când pacientul se apleacă înainte",
   "Scolioza decompensată, cu trunchiul necentrat pe pelvis, asociază un grad mai mic de durere de spate",
   "Forma idiopatică a adolescentului este dureroasă de la debut și predomină la băieți"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Forma flexibilă poate fi datorată posturii deficitare, spasmului de lângă un disc herniat sau compensării unui picior scurtat — Corect: Cele trei cauze ale formei flexibile sunt enumerate.\n\nForma structurală asociază o diformitate vertebrală rotativă, necorectabilă prin schimbarea posturii — Corect: Rotația vertebrală necorectabilă definește forma structurală.\n\nAsimetria cutiei toracice se observă cel mai bine când pacientul se apleacă înainte — Corect: Aplecarea înainte evidențiază asimetria toracică.\n\nScolioza decompensată, cu trunchiul necentrat pe pelvis, asociază un grad mai mic de durere de spate — Incorect: Scolioza decompensată se asociază cu un grad mai mare, nu mai mic, de durere.\n\nForma idiopatică a adolescentului este dureroasă de la debut și predomină la băieți — Incorect: Idiopatica adolescentului este nedureroasă progresivă și predomină la fete (9:1).\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 615, Scolioza — Flexibilă versus structurală (pagini PDF: 287).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    615
   ],
   "pdfPages": [
    287
   ],
   "section": "Scolioza — Flexibilă versus structurală"
  },
  "learningObjective": "Contrastarea cauzei posturale/compensatorii a formei flexibile cu rotația vertebrală fixă și cu testul de aplecare înainte.",
  "optionRationales": [
   "Cele trei cauze ale formei flexibile sunt enumerate.",
   "Rotația vertebrală necorectabilă definește forma structurală.",
   "Aplecarea înainte evidențiază asimetria toracică.",
   "Scolioza decompensată se asociază cu un grad mai mare, nu mai mic, de durere.",
   "Idiopatica adolescentului este nedureroasă progresivă și predomină la fete (9:1)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează legătura decompensare–durere și reia sex-ratio-ul 9:1 deja folosit, dar pe axa dureroasă/nedureroasă."
  },
  "textbookExpressions": [
   "Scolioza",
   "apleacă înainte"
  ]
 },
 {
  "id": "ortopedie-adv-063",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Un tânăr cu gonartroză medială simptomatică și genunchi în varus. Osteotomia tibială urmărește:",
  "options": [
   "Transformarea alinierii în valgus, transferând încărcarea spre cartilajul sănătos",
   "Conversia imediată în artrodeză, contraindicată la tinerii activi",
   "Artroplastia totală ca primă intenție la tânărul foarte activ",
   "Meniscectomia totală, care previne artroza tibiofemurală",
   "Fasciotomia compartimentului posterior profund"
  ],
  "correct": [
   0
  ],
  "explanation": "Transformarea alinierii în valgus, transferând încărcarea spre cartilajul sănătos — Corect: Textul descrie transformarea genunchiului în varus cu artroză medială într-unul în valgus prin osteotomie tibială.\n\nConversia imediată în artrodeză, contraindicată la tinerii activi — Incorect: Artrodeza este durabilă la tineri activi cu o articulație izolată, nu este scopul osteotomiei de realiniere.\n\nArtroplastia totală ca primă intenție la tânărul foarte activ — Incorect: Artroplastia totală se rezervă artrozei avansate și stilului relativ sedentar.\n\nMeniscectomia totală, care previne artroza tibiofemurală — Incorect: Meniscectomia totală duce la artroză, nu o previne.\n\nFasciotomia compartimentului posterior profund — Incorect: Fasciotomia nu realiniază un genunchi varus artrozic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 620, Osteoartroza genunchiului — Osteotomia tibială (pagini PDF: 292).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    620
   ],
   "pdfPages": [
    292
   ],
   "section": "Osteoartroza genunchiului — Osteotomia tibială"
  },
  "learningObjective": "Identificarea osteotomiei tibiale varus→valgus ca realiniere către cartilajul lateral sănătos la tânărul cu gonartroză medială.",
  "optionRationales": [
   "Textul descrie transformarea genunchiului în varus cu artroză medială într-unul în valgus prin osteotomie tibială.",
   "Artrodeza este durabilă la tineri activi cu o articulație izolată, nu este scopul osteotomiei de realiniere.",
   "Artroplastia totală se rezervă artrozei avansate și stilului relativ sedentar.",
   "Meniscectomia totală duce la artroză, nu o previne.",
   "Fasciotomia nu realiniază un genunchi varus artrozic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă osteotomia de realiniere cu artrodeza sau cu proteza totală, trei trepte terapeutice din același paragraf."
  },
  "textbookExpressions": [
   "osteotomie tibială",
   "gonartroză"
  ]
 },
 {
  "id": "ortopedie-adv-064",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre artroplastia și artrodeza genunchiului:",
  "options": [
   "Artroplastia parțială reface unul dintre compartimentele medial, lateral sau patelofemural, cu ligamente încrucișate intacte",
   "Artroplastia totală reduce durerea în mai mult de 90% din cazuri și se rezervă artrozei avansate cu stil relativ sedentar",
   "Artrodeza convertește articulația dureroasă mobilă într-una stabilă, fixă, lipsită de durere, indicată tinerilor foarte activi cu interesare izolată",
   "Artrodeza articulațiilor mari este de elecție în artrita inflamatorie sistemică, multiplă",
   "Uzura, slăbirea și infecția implantului nu figurează printre complicațiile artroplastiei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Artroplastia parțială reface unul dintre compartimentele medial, lateral sau patelofemural, cu ligamente încrucișate intacte — Corect: Condițiile (un compartiment, LIA/LIP intacte, mobilități funcționale) sunt explicite.\n\nArtroplastia totală reduce durerea în mai mult de 90% din cazuri și se rezervă artrozei avansate cu stil relativ sedentar — Corect: Rata de peste 90% și rezervarea pentru stil sedentar sunt citate.\n\nArtrodeza convertește articulația dureroasă mobilă într-una stabilă, fixă, lipsită de durere, indicată tinerilor foarte activi cu interesare izolată — Corect: Definiția și indicația artrodezei la tânărul activ cu o articulație izolată sunt enunțate.\n\nArtrodeza articulațiilor mari este de elecție în artrita inflamatorie sistemică, multiplă — Incorect: Artrodeza articulațiilor mari este contraindicată în artrita inflamatorie sistemică multiplă.\n\nUzura, slăbirea și infecția implantului nu figurează printre complicațiile artroplastiei — Incorect: Uzura, slăbirea, infecția, osteoporoza locală și fracturile periprotetice sunt enumerate.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 620, Artroplastia parțială, totală și artrodeza (pagini PDF: 292).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    620
   ],
   "pdfPages": [
    292
   ],
   "section": "Artroplastia parțială, totală și artrodeza"
  },
  "learningObjective": "Ierarhizarea unicompartimental versus total (90%) versus artrodeză la tânărul activ, cu recunoașterea contraindicației artrodezei în AR sistemică.",
  "optionRationales": [
   "Condițiile (un compartiment, LIA/LIP intacte, mobilități funcționale) sunt explicite.",
   "Rata de peste 90% și rezervarea pentru stil sedentar sunt citate.",
   "Definiția și indicația artrodezei la tânărul activ cu o articulație izolată sunt enunțate.",
   "Artrodeza articulațiilor mari este contraindicată în artrita inflamatorie sistemică multiplă.",
   "Uzura, slăbirea, infecția, osteoporoza locală și fracturile periprotetice sunt enumerate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde artrodeza la AR sistemică multiplă și neagă complicațiile protezei, două capcane de indicație."
  },
  "textbookExpressions": [
   "mai mult de 90%",
   "Artrodeza"
  ]
 },
 {
  "id": "ortopedie-adv-065",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Artrita reumatoidă, dincolo de distrucția articulară, se caracterizează prin:",
  "options": [
   "Pannus sinovial care deteriorează cartilajul, după infiltrare cu macrofage și limfocite",
   "Manifestări extraarticulare: vasculită, neuropatie, irită, limfadenopatie, splenomegalie și poliserozită",
   "Semne radiologice precoce de tumefacție a părților moi și osteoporoză periarticulară",
   "Osteofite hipertrofice abundente, identice osteoartrozei",
   "Factorul reumatoid, când este prezent, exclude boala, fiind specific populației generale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pannus sinovial care deteriorează cartilajul, după infiltrare cu macrofage și limfocite — Corect: Formarea pannusului după infiltrarea sinovialei este descrisă.\n\nManifestări extraarticulare: vasculită, neuropatie, irită, limfadenopatie, splenomegalie și poliserozită — Corect: Lista extraarticulară este enumerată explicit.\n\nSemne radiologice precoce de tumefacție a părților moi și osteoporoză periarticulară — Corect: Tumefacția părților moi și osteoporoza periarticulară sunt semnele radiologice precoce.\n\nOsteofite hipertrofice abundente, identice osteoartrozei — Incorect: Osteofitele hipertrofice sunt rare în AR, spre deosebire de osteoartroză.\n\nFactorul reumatoid, când este prezent, exclude boala, fiind specific populației generale — Incorect: RF este prezent la 80% dintre pacienți și la 1–5% din populație; nu exclude boala.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 620, 619, Artrita reumatoidă — Pannus și extraarticular (pagini PDF: 292, 291).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    620,
    619
   ],
   "pdfPages": [
    292,
    291
   ],
   "section": "Artrita reumatoidă — Pannus și extraarticular"
  },
  "learningObjective": "Recunoașterea pannusului, a listei extraarticulare și a osteoporozei periarticulare precoce, versus osteofitele rare în AR.",
  "optionRationales": [
   "Formarea pannusului după infiltrarea sinovialei este descrisă.",
   "Lista extraarticulară este enumerată explicit.",
   "Tumefacția părților moi și osteoporoza periarticulară sunt semnele radiologice precoce.",
   "Osteofitele hipertrofice sunt rare în AR, spre deosebire de osteoartroză.",
   "RF este prezent la 80% dintre pacienți și la 1–5% din populație; nu exclude boala."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie AR osteofitele OA și inversează valoarea factorului reumatoid (80% versus 1–5%)."
  },
  "textbookExpressions": [
   "poliserozită",
   "osteoporoza peria"
  ]
 },
 {
  "id": "ortopedie-adv-066",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Rădăcina L5, în hernia de disc lombară, se recunoaște prin:",
  "options": [
   "Hipoestezie pe piciorul dorsal și haluce, cu hipotonie a extensorului lung al halucelui",
   "Diminuarea reflexului rotulian și slăbiciune a cvadricepsului",
   "Diminuarea reflexului achilean și hipotonie a flexorilor degetelor și gleznei",
   "Hipoestezie pe fața medială a piciorului și gleznei, ca în L4",
   "Hiperreflexie cu clonus și semn Babinski, ca în mielopatia cervicală"
  ],
  "correct": [
   0
  ],
  "explanation": "Hipoestezie pe piciorul dorsal și haluce, cu hipotonie a extensorului lung al halucelui — Corect: Tabelul atribuie L5 hipoestezia dorsală/haluce și hipotonie ELH; reflexul tibial posterior există doar la 20% din populație.\n\nDiminuarea reflexului rotulian și slăbiciune a cvadricepsului — Incorect: Cvadricepsul și rotulianul definesc L4.\n\nDiminuarea reflexului achilean și hipotonie a flexorilor degetelor și gleznei — Incorect: Flexorii, evertorii și achileanul definesc S1.\n\nHipoestezie pe fața medială a piciorului și gleznei, ca în L4 — Incorect: Fața medială a piciorului și gleznei este teritoriul L4.\n\nHiperreflexie cu clonus și semn Babinski, ca în mielopatia cervicală — Incorect: Hiperreflexia și Babinski țin de mielopatia cervicală, nu de radiculopatia L5.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 624, Hernia de disc lombară — Tabelul 28-4, rădăcina L5 (pagini PDF: 296).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    624
   ],
   "pdfPages": [
    296
   ],
   "section": "Hernia de disc lombară — Tabelul 28-4, rădăcina L5"
  },
  "learningObjective": "Maparea L5 (haluce, ELH, fără reflex constant) față de L4 (rotulian) și S1 (achilean).",
  "optionRationales": [
   "Tabelul atribuie L5 hipoestezia dorsală/haluce și hipotonie ELH; reflexul tibial posterior există doar la 20% din populație.",
   "Cvadricepsul și rotulianul definesc L4.",
   "Flexorii, evertorii și achileanul definesc S1.",
   "Fața medială a piciorului și gleznei este teritoriul L4.",
   "Hiperreflexia și Babinski țin de mielopatia cervicală, nu de radiculopatia L5."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează triada L4–L5–S1 din tabelul 28-4, confuzia clasică de reflex rotulian versus achilean versus ELH."
  },
  "textbookExpressions": [
   "Rădăcina nervoasă L5",
   "extensor lung al halucelui"
  ]
 },
 {
  "id": "ortopedie-adv-067",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Stenoza de canal lombar și claudicația neurogenică:",
  "options": [
   "Durerea debutează după ortostatism sau mers prelungit și se ameliorează în șezut sau decubit",
   "Se deosebește de claudicația vasculară, care dispare după un repaus scurt",
   "Afectează de regulă populația peste 65 de ani, cu patologie degenerativă discală extinsă",
   "Dispare caracteristic după câțiva pași pe loc, identic claudicației vasculare, fără a necesita schimbarea posturii",
   "Mielografia cu contrast în spațiul epidural este investigația de primă intenție, înaintea IRM"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Durerea debutează după ortostatism sau mers prelungit și se ameliorează în șezut sau decubit — Corect: Patternul ortostatism/mers și ameliorarea în șezut sau decubit este explicit.\n\nSe deosebește de claudicația vasculară, care dispare după un repaus scurt — Corect: Deosebirea de claudicația vasculară (repaos scurt) este enunțată.\n\nAfectează de regulă populația peste 65 de ani, cu patologie degenerativă discală extinsă — Corect: Vârsta peste 65 de ani este citată.\n\nDispare caracteristic după câțiva pași pe loc, identic claudicației vasculare, fără a necesita schimbarea posturii — Incorect: Schimbarea posturii (așezare), nu pauza scurtă în picioare, ameliorează claudicația neurogenică.\n\nMielografia cu contrast în spațiul epidural este investigația de primă intenție, înaintea IRM — Incorect: IRM (și CT) delimitează leziunea; mielografia este rară, dacă IRM nu se poate efectua.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 625, Stenoza spinală — Claudicație neurogenică (pagini PDF: 297).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    625
   ],
   "pdfPages": [
    297
   ],
   "section": "Stenoza spinală — Claudicație neurogenică"
  },
  "learningObjective": "Contrastarea ameliorării în flexie/șezut a claudicației neurogene de dispariția rapidă în repaus a celei vasculare, la vârstnicul >65 de ani.",
  "optionRationales": [
   "Patternul ortostatism/mers și ameliorarea în șezut sau decubit este explicit.",
   "Deosebirea de claudicația vasculară (repaos scurt) este enunțată.",
   "Vârsta peste 65 de ani este citată.",
   "Schimbarea posturii (așezare), nu pauza scurtă în picioare, ameliorează claudicația neurogenică.",
   "IRM (și CT) delimitează leziunea; mielografia este rară, dacă IRM nu se poate efectua."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Egalizează greșit claudicația neurogenică cu cea vasculară și pune mielografia înaintea IRM."
  },
  "textbookExpressions": [
   "claudicaţie neurogenică",
   "peste 65 de ani"
  ]
 },
 {
  "id": "ortopedie-adv-068",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Hernia de disc cervicală:",
  "options": [
   "Cele mai frecvente rupturi sunt la C5–C6 și C6–C7, unde flexia-extensia este cea mai amplă",
   "Rădăcinile C6 și C7 sunt cel mai adesea afectate",
   "Decompresia de urgență este indicată dacă există semne de mielopatie (hiperreflexie, slăbiciune ipsilaterală, amorțeli contralaterale, Babinski sau Hoffmann)",
   "Rădăcina C5 este sediul cel mai frecvent, reflexul tricipital fiind primul atins",
   "Tracțiunea craniană este contraindicată, sporind presiunea pe rădăcină"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cele mai frecvente rupturi sunt la C5–C6 și C6–C7, unde flexia-extensia este cea mai amplă — Corect: Predominanța C5–C6 și C6–C7 este explicită.\n\nRădăcinile C6 și C7 sunt cel mai adesea afectate — Corect: Afectarea C6 și C7 este enunțată.\n\nDecompresia de urgență este indicată dacă există semne de mielopatie (hiperreflexie, slăbiciune ipsilaterală, amorțeli contralaterale, Babinski sau Hoffmann) — Corect: Lista de semne de mielopatie ca indicație de urgență este citată.\n\nRădăcina C5 este sediul cel mai frecvent, reflexul tricipital fiind primul atins — Incorect: C5 (deltoid, biceps, rotulian? bicipital) nu este etajul cel mai frecvent; tricipitalul este C7.\n\nTracțiunea craniană este contraindicată, sporind presiunea pe rădăcină — Incorect: Tracțiunea craniană poate atenua presiunea pe rădăcină.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 626, Discul cervical — C5–C6, C6–C7 și mielopatie (pagini PDF: 298).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    626
   ],
   "pdfPages": [
    298
   ],
   "section": "Discul cervical — C5–C6, C6–C7 și mielopatie"
  },
  "learningObjective": "Fixarea etajelor C5–C6/C6–C7 și a semnelor de tract lung ca indicație de decompresie de urgență.",
  "optionRationales": [
   "Predominanța C5–C6 și C6–C7 este explicită.",
   "Afectarea C6 și C7 este enunțată.",
   "Lista de semne de mielopatie ca indicație de urgență este citată.",
   "C5 (deltoid, biceps, rotulian? bicipital) nu este etajul cel mai frecvent; tricipitalul este C7.",
   "Tracțiunea craniană poate atenua presiunea pe rădăcină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută predominanța de la C6/C7 la C5 și transformă tracțiunea (utilă) într-o contraindicație."
  },
  "textbookExpressions": [
   "C5-C6",
   "Hoffmann"
  ]
 },
 {
  "id": "ortopedie-adv-069",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Precizați enunțul corect privind coloana cervicală în poliartrita reumatoidă:",
  "options": [
   "Radiografii laterale în flexie-extensie trebuie făcute oricărui pacient reumatoid supus intubării pentru anestezie generală",
   "Implicarea neurologicǎ corelează liniar cu gradul de subluxație, deci filmele sunt inutile dacă nu există deficit",
   "Stabilizarea prin fuziune este inutilă chiar când deficitul neurologic este cauzat de instabilitatea cervicală",
   "Impactarea occipito-atlanto-axială protejează măduva, odontoidul rămânând sub foramen magnum",
   "Subluxația subaxială nu poate fi demonstrată pe incidența laterală"
  ],
  "correct": [
   0
  ],
  "explanation": "Radiografii laterale în flexie-extensie trebuie făcute oricărui pacient reumatoid supus intubării pentru anestezie generală — Corect: Textul cere radiografii laterale în flexie-extensie înaintea intubării la pacientul reumatoid.\n\nImplicarea neurologicǎ corelează liniar cu gradul de subluxație, deci filmele sunt inutile dacă nu există deficit — Incorect: Implicarea neurologicǎ nu corelează neapărat cu gradul de subluxație.\n\nStabilizarea prin fuziune este inutilă chiar când deficitul neurologic este cauzat de instabilitatea cervicală — Incorect: Când deficitul este cauzat de instabilitate, tratamentul de elecție este fuziunea.\n\nImpactarea occipito-atlanto-axială protejează măduva, odontoidul rămânând sub foramen magnum — Incorect: Impactarea occipito-atlanto-axială împinge odontoidul în foramen magnum și poate comprima măduva.\n\nSubluxația subaxială nu poate fi demonstrată pe incidența laterală — Incorect: Instabilitatea subaxială se dovedește clinic radiologic, mai ales pe laterala cu înclinare sau deplasare AP.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 627, Artrita reumatoidă a coloanei cervicale — Intubație (pagini PDF: 299).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    627
   ],
   "pdfPages": [
    299
   ],
   "section": "Artrita reumatoidă a coloanei cervicale — Intubație"
  },
  "learningObjective": "Recunoașterea filmelor laterale în flexie-extensie înaintea intubării, independent de corelația imperfectă cu deficitul neurologic.",
  "optionRationales": [
   "Textul cere radiografii laterale în flexie-extensie înaintea intubării la pacientul reumatoid.",
   "Implicarea neurologicǎ nu corelează neapărat cu gradul de subluxație.",
   "Când deficitul este cauzat de instabilitate, tratamentul de elecție este fuziunea.",
   "Impactarea occipito-atlanto-axială împinge odontoidul în foramen magnum și poate comprima măduva.",
   "Instabilitatea subaxială se dovedește clinic radiologic, mai ales pe laterala cu înclinare sau deplasare AP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează filmele pre-intubație pe motivul falsei corelații deficit–subluxație, o capcană de anestezie."
  },
  "textbookExpressions": [
   "intubării",
   "subluxaţie"
  ]
 },
 {
  "id": "ortopedie-adv-070",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Osul normal, ca material bifazic, se caracterizează prin:",
  "options": [
   "Mineralul (hidroxiapatită) se opune forțelor de compresiune",
   "Matricea organică, în principal colagen de tip I, asigură rezistența la îndoire și răsucire",
   "Osul normal este alcătuit în proporție de 70% mineral și 30% matrice organică",
   "Raportul este 30% mineral și 70% osteoid, ca în osteomalacie",
   "Colagenul de tip II al cartilajului articular este principala matrice a osului cortical"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mineralul (hidroxiapatită) se opune forțelor de compresiune — Corect: Rolul mineralului împotriva compresiunii este explicit.\n\nMatricea organică, în principal colagen de tip I, asigură rezistența la îndoire și răsucire — Corect: Rolul colagenului de tip I împotriva îndoirii și răsucirii este descris.\n\nOsul normal este alcătuit în proporție de 70% mineral și 30% matrice organică — Corect: Proporția 70% mineral / 30% organică este citată.\n\nRaportul este 30% mineral și 70% osteoid, ca în osteomalacie — Incorect: Raportul inversat descrie o confuzie cu osteomalacia, nu osul normal.\n\nColagenul de tip II al cartilajului articular este principala matrice a osului cortical — Incorect: Matricea osoasă este colagen de tip I, nu tip II.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 627, Osul — Compoziție minerală și organică (pagini PDF: 299).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    627
   ],
   "pdfPages": [
    299
   ],
   "section": "Osul — Compoziție minerală și organică"
  },
  "learningObjective": "Fixarea raportului 70/30 și a rolurilor compresiune versus torsiune, distinct de osteoidul nemineralizat al osteomalaciei.",
  "optionRationales": [
   "Rolul mineralului împotriva compresiunii este explicit.",
   "Rolul colagenului de tip I împotriva îndoirii și răsucirii este descris.",
   "Proporția 70% mineral / 30% organică este citată.",
   "Raportul inversat descrie o confuzie cu osteomalacia, nu osul normal.",
   "Matricea osoasă este colagen de tip I, nu tip II."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește 70/30 și schimbă colagenul I cu II, două near-miss-uri de compoziție."
  },
  "textbookExpressions": [
   "70%",
   "matricea organică"
  ]
 },
 {
  "id": "ortopedie-adv-071",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Zona Looser, bandă de rarefiere caracteristică osteomalaciei, se observă cel mai frecvent la:",
  "options": [
   "Colul femural sau ramurile pubiene",
   "Metafiza distală a radiusului, ca în Colles",
   "Scafoidul, în tabachera anatomică",
   "Pars interarticularis L5, ca în spondiloliză",
   "Platoul tibial, ca în fractura impactată"
  ],
  "correct": [
   0
  ],
  "explanation": "Colul femural sau ramurile pubiene — Corect: Textul plasează zona Looser cel mai frecvent la colul femural sau ramurile pubiene.\n\nMetafiza distală a radiusului, ca în Colles — Incorect: Colles este o primă manifestare a osteoporozei, nu sediul clasic Looser.\n\nScafoidul, în tabachera anatomică — Incorect: Scafoidul este vulnerabil la osteonecroză, nu este exemplul Looser.\n\nPars interarticularis L5, ca în spondiloliză — Incorect: Spondiloliza este o altă fractură de stres, a pars-ului, nu Looser.\n\nPlatoul tibial, ca în fractura impactată — Incorect: Platoul tibial nu este sediul citat al benzii de rarefiere.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 628, Osteomalacia — Zona Looser (pagini PDF: 300).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    628
   ],
   "pdfPages": [
    300
   ],
   "section": "Osteomalacia — Zona Looser"
  },
  "learningObjective": "Localizarea liniei Looser ca fractură de stres în curs de vindecare la col femural sau ramuri pubiene.",
  "optionRationales": [
   "Textul plasează zona Looser cel mai frecvent la colul femural sau ramurile pubiene.",
   "Colles este o primă manifestare a osteoporozei, nu sediul clasic Looser.",
   "Scafoidul este vulnerabil la osteonecroză, nu este exemplul Looser.",
   "Spondiloliza este o altă fractură de stres, a pars-ului, nu Looser.",
   "Platoul tibial nu este sediul citat al benzii de rarefiere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută linia Looser pe sediile Colles, scafoid sau pars, toate fracturi de stres din același capitol."
  },
  "textbookExpressions": [
   "zonă Looser",
   "colului femural"
  ]
 },
 {
  "id": "ortopedie-adv-072",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Hiperparatiroidismul se recunoaște prin:",
  "options": [
   "Forma primară se datorează unui adenom sau hiperplaziei paratiroidiene; forma secundară, insuficienței renale cronice cu retenție de fosfați",
   "Radiografic apar rarefiere difuză și leziuni osteolitice corticale diseminate (osteită fibroasă chistică)",
   "Hormonul scade calciul plasmatic și crește fosfatul, analog calcitoninei",
   "Forma primară este cauzată de deficitul dietetic de vitamina D, ca rahitismul",
   "Zona Looser este patognomonică hiperparatiroidismului, nu osteomalaciei"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Forma primară se datorează unui adenom sau hiperplaziei paratiroidiene; forma secundară, insuficienței renale cronice cu retenție de fosfați — Corect: Cauzele primară (adenom/hiperplazie) și secundară (IRC, fosfați) sunt explicite.\n\nRadiografic apar rarefiere difuză și leziuni osteolitice corticale diseminate (osteită fibroasă chistică) — Corect: Rarefierea difuză și osteita fibroasă chistică sunt descrise.\n\nHormonul scade calciul plasmatic și crește fosfatul, analog calcitoninei — Incorect: PTH crește calciul plasmatic și scade fosfatul, nu invers.\n\nForma primară este cauzată de deficitul dietetic de vitamina D, ca rahitismul — Incorect: Deficitul de vitamină D definește rahitismul/osteomalacia, nu hiperPTH primar.\n\nZona Looser este patognomonică hiperparatiroidismului, nu osteomalaciei — Incorect: Zona Looser este caracteristică osteomalaciei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 628, Hiperparatiroidismul — Osteită fibroasă chistică (pagini PDF: 300).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    628
   ],
   "pdfPages": [
    300
   ],
   "section": "Hiperparatiroidismul — Osteită fibroasă chistică"
  },
  "learningObjective": "Contrastarea cauzei (adenom versus IRC) și a osteitei fibroase chistice de liniile Looser ale osteomalaciei.",
  "optionRationales": [
   "Cauzele primară (adenom/hiperplazie) și secundară (IRC, fosfați) sunt explicite.",
   "Rarefierea difuză și osteita fibroasă chistică sunt descrise.",
   "PTH crește calciul plasmatic și scade fosfatul, nu invers.",
   "Deficitul de vitamină D definește rahitismul/osteomalacia, nu hiperPTH primar.",
   "Zona Looser este caracteristică osteomalaciei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează efectul PTH asupra Ca/P și mută liniile Looser din osteomalacie în hiperparatiroidism."
  },
  "textbookExpressions": [
   "osteită fibroasă chistică",
   "Hiperparatiroidismul"
  ]
 },
 {
  "id": "ortopedie-adv-073",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Boala Paget a osului:",
  "options": [
   "Zonele implicate sunt bogat vascularizate și pot produce șunturi arterio-venoase cu insuficiență cardiacă secundară",
   "Fosfataza alcalină secretată de osteoblaste poate fi semnificativ crescută",
   "În sub 1% din cazuri, celulele osteoformatoare degenerează în osteosarcom",
   "Tratamentul cu calcitonină sau bifosfonați este rezervat durerii refractare, hipercalcemiei maligne, insuficienței cardiace sau suferinței neurologice",
   "Majoritatea cazurilor sunt simptomatice de la debut și impun osteosinteză profilactică a pelvisului"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Zonele implicate sunt bogat vascularizate și pot produce șunturi arterio-venoase cu insuficiență cardiacă secundară — Corect: Șunturile AV și insuficiența cardiacă sunt explicite.\n\nFosfataza alcalină secretată de osteoblaste poate fi semnificativ crescută — Corect: Creșterea fosfatazei alcaline este citată.\n\nÎn sub 1% din cazuri, celulele osteoformatoare degenerează în osteosarcom — Corect: Pragul sub 1% de transformare în osteosarcom este enunțat.\n\nTratamentul cu calcitonină sau bifosfonați este rezervat durerii refractare, hipercalcemiei maligne, insuficienței cardiace sau suferinței neurologice — Corect: Lista indicațiilor medicale este enumerată.\n\nMajoritatea cazurilor sunt simptomatice de la debut și impun osteosinteză profilactică a pelvisului — Incorect: Majoritatea cazurilor sunt asimptomatice, descoperite accidental pe radiografii de bazin.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 629, Boala Paget — Vascularizație, FA și malignizare (pagini PDF: 301).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    629
   ],
   "pdfPages": [
    301
   ],
   "section": "Boala Paget — Vascularizație, FA și malignizare"
  },
  "learningObjective": "Integrarea șunturilor AV, a FA înalte, a riscului <1% de osteosarcom și a indicațiilor de calcitonină/bifosfonat.",
  "optionRationales": [
   "Șunturile AV și insuficiența cardiacă sunt explicite.",
   "Creșterea fosfatazei alcaline este citată.",
   "Pragul sub 1% de transformare în osteosarcom este enunțat.",
   "Lista indicațiilor medicale este enumerată.",
   "Majoritatea cazurilor sunt asimptomatice, descoperite accidental pe radiografii de bazin."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă descoperirea accidentală pelvină într-o indicație de osteosinteză și umflă rata de sarcom peste 1%."
  },
  "textbookExpressions": [
   "calcitonină",
   "Paget"
  ]
 },
 {
  "id": "ortopedie-adv-074",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Metastazele osoase se caracterizează prin:",
  "options": [
   "Tumorile primare de sân, prostată, plămân, rinichi și tiroidă metastazează des la os",
   "Se localizează preferențial în oasele hematopoietice, bogat vascularizate: coloană, coaste, craniu, bazin și metafizele oaselor lungi",
   "Sunt frecvente la pacienții peste 50 de ani, pe când tumorile musculoscheletale primare sunt rare",
   "Sunt rare după 50 de ani, predominând osteosarcomul metafizar al adolescentului",
   "Scintigrafia osoasă este constant negativă, ca în mielomul multiplu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tumorile primare de sân, prostată, plămân, rinichi și tiroidă metastazează des la os — Corect: Cele cinci origini sunt enumerate explicit.\n\nSe localizează preferențial în oasele hematopoietice, bogat vascularizate: coloană, coaste, craniu, bazin și metafizele oaselor lungi — Corect: Lista sediilor hematopoietice este citată.\n\nSunt frecvente la pacienții peste 50 de ani, pe când tumorile musculoscheletale primare sunt rare — Corect: Frecvența metastazelor după 50 de ani, față de raritatea primarelor, este enunțată.\n\nSunt rare după 50 de ani, predominând osteosarcomul metafizar al adolescentului — Incorect: Osteosarcomul bimodal al tânărului nu înlocuiește metastazele vârstnicului.\n\nScintigrafia osoasă este constant negativă, ca în mielomul multiplu — Incorect: Scintigrafia negativă este tipică mielomului, nu metastazelor în general.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 629, 630, Neoplasmele osului — Metastaze versus tumori primare (pagini PDF: 301, 302).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    629,
    630
   ],
   "pdfPages": [
    301,
    302
   ],
   "section": "Neoplasmele osului — Metastaze versus tumori primare"
  },
  "learningObjective": "Recunoașterea celor cinci primitive clasice și a predilecției pentru osul hematopoietic al adultului peste 50 de ani.",
  "optionRationales": [
   "Cele cinci origini sunt enumerate explicit.",
   "Lista sediilor hematopoietice este citată.",
   "Frecvența metastazelor după 50 de ani, față de raritatea primarelor, este enunțată.",
   "Osteosarcomul bimodal al tânărului nu înlocuiește metastazele vârstnicului.",
   "Scintigrafia negativă este tipică mielomului, nu metastazelor în general."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește metastazele vârstnicului cu osteosarcomul adolescentului și aplică greșit scintigrafia negativă a mielomului."
  },
  "textbookExpressions": [
   "50 de ani",
   "rinichilor"
  ]
 },
 {
  "id": "ortopedie-adv-075",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Ligamentul colateral ulnar al articulației metacarpofalangiene a policelui (degetul schiorului) este esențial pentru:",
  "options": [
   "Opoziția policelui; lezarea îl face instabil și slăbește prinderea",
   "Flexia plantară a gleznei, testată prin Thompson",
   "Extensia interfalangiană distală, ca în degetul Mallet",
   "Stabilitatea anterioară a talusului, ca în testul sertarului de gleznă",
   "Abducția halucelui în turf toe"
  ],
  "correct": [
   0
  ],
  "explanation": "Opoziția policelui; lezarea îl face instabil și slăbește prinderea — Corect: Textul subliniază că ligamentul colateral ulnar al MTF a policelui este esențial pentru opoziție; lezarea slăbește prinderea.\n\nFlexia plantară a gleznei, testată prin Thompson — Incorect: Thompson testează tendonul Ahilean.\n\nExtensia interfalangiană distală, ca în degetul Mallet — Incorect: Mallet este avulsia extensorului de la IFD.\n\nStabilitatea anterioară a talusului, ca în testul sertarului de gleznă — Incorect: Sertarul anterior de gleznă testează ATFL și calcaneofibularul.\n\nAbducția halucelui în turf toe — Incorect: Turf toe este entorsa MTF a halucelui, nu UCL al policelui.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 608, Degetul schiorului — Ligamentul colateral ulnar (pagini PDF: 280).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    608
   ],
   "pdfPages": [
    280
   ],
   "section": "Degetul schiorului — Ligamentul colateral ulnar"
  },
  "learningObjective": "Identificarea UCL al MTF a policelui ca stabilizer al opoziției și al prinderii, distinct de Mallet, Thompson și sertarul de gleznă.",
  "optionRationales": [
   "Textul subliniază că ligamentul colateral ulnar al MTF a policelui este esențial pentru opoziție; lezarea slăbește prinderea.",
   "Thompson testează tendonul Ahilean.",
   "Mallet este avulsia extensorului de la IFD.",
   "Sertarul anterior de gleznă testează ATFL și calcaneofibularul.",
   "Turf toe este entorsa MTF a halucelui, nu UCL al policelui."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută UCL-ul policelui pe Ahile, Mallet sau ATFL, trei teste de stabilitate din paginile învecinate."
  },
  "textbookExpressions": [
   "degetul schiorului",
   "Ligamentul colateral ulnar"
  ]
 },
 {
  "id": "ortopedie-adv-076",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Fractura în lemn verde a ulnei, incompletă, cu vârful înclinării anterior, se tratează prin:",
  "options": [
   "Completarea fracturii, cu întreruperea celeilalte corticale, pentru a preveni deformarea angulară",
   "Observație, corticala intactă prevenind orice angulație",
   "Fixare internă cu placă, ca în fractura segmentară a adultului",
   "Fasciotomie de compartiment anterior, analog sindromului de efort",
   "Artrodeză radiocarpiană de urgență"
  ],
  "correct": [
   0
  ],
  "explanation": "Completarea fracturii, cu întreruperea celeilalte corticale, pentru a preveni deformarea angulară — Corect: Textul cere completarea fracturii prin întreruperea celeilalte corticale, altfel deformarea angulară persistă.\n\nObservație, corticala intactă prevenind orice angulație — Incorect: Corticala intactă menține înclinarea; observația nu corectează vârful anterior.\n\nFixare internă cu placă, ca în fractura segmentară a adultului — Incorect: Placa este tratamentul fracturilor cominutive/segmentare de energie mare, nu al lemnului verde.\n\nFasciotomie de compartiment anterior, analog sindromului de efort — Incorect: Fasciotomia nu are rol în corectarea unei corticale pediatrice incomplete.\n\nArtrodeză radiocarpiană de urgență — Incorect: Artrodeza radiocarpiană nu figurează ca tratament al fracturii ulnare în lemn verde.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 587, Traiectul fracturii — Lemn verde (pagini PDF: 259).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    587
   ],
   "pdfPages": [
    259
   ],
   "section": "Traiectul fracturii — Lemn verde"
  },
  "learningObjective": "Recunoașterea necesității de a întrerupe a doua corticală la fractura pediatrică incompletă, pentru a evita angulația reziduală.",
  "optionRationales": [
   "Textul cere completarea fracturii prin întreruperea celeilalte corticale, altfel deformarea angulară persistă.",
   "Corticala intactă menține înclinarea; observația nu corectează vârful anterior.",
   "Placa este tratamentul fracturilor cominutive/segmentare de energie mare, nu al lemnului verde.",
   "Fasciotomia nu are rol în corectarea unei corticale pediatrice incomplete.",
   "Artrodeza radiocarpiană nu figurează ca tratament al fracturii ulnare în lemn verde."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește completarea corticalei (gestul descris pe figură) cu observație sau cu osteosinteza adultului."
  },
  "textbookExpressions": [
   "lemn verde",
   "întreruperea celeilalte corticale"
  ]
 },
 {
  "id": "ortopedie-adv-077",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Fracturile cominutive, impactate și prin compresie:",
  "options": [
   "Fragmentul triunghiular se numește în aripă de fluture; configurația cilindrică este segmentară",
   "Cominutivele rezultă din forțe mari, cu deteriorarea aportului sanguin intramedular și a țesuturilor moi",
   "Fractura impactată este frecventă în os metafizar: col femural, extremitate distală radială sau platou tibial",
   "Fractura prin compresie strivește osul cortical diafizar, nu trabecularul vertebral",
   "Lemnul verde este traiectul tipic al fracturii segmentare a adultului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Fragmentul triunghiular se numește în aripă de fluture; configurația cilindrică este segmentară — Corect: Textul distinge fragmentul triunghiular „în aripă de fluture” de forma cilindrică segmentară.\n\nCominutivele rezultă din forțe mari, cu deteriorarea aportului sanguin intramedular și a țesuturilor moi — Corect: Energia mare și compromiterea vascularizației intramedulare sunt enunțate.\n\nFractura impactată este frecventă în os metafizar: col femural, extremitate distală radială sau platou tibial — Corect: Sediile metafizare (col femural, radius distal, platou tibial) și energia redusă sunt citate.\n\nFractura prin compresie strivește osul cortical diafizar, nu trabecularul vertebral — Incorect: Compreshia strivește osul trabecular/spongios, adesea în corpurile vertebrale.\n\nLemnul verde este traiectul tipic al fracturii segmentare a adultului — Incorect: Lemnul verde este încurbarea incompletă a unei singure corticale la copil, nu segmentara adultului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 587, Clasificarea traiectului — Cominutivă, impactată, compresie (pagini PDF: 259).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    587
   ],
   "pdfPages": [
    259
   ],
   "section": "Clasificarea traiectului — Cominutivă, impactată, compresie"
  },
  "learningObjective": "Diferențierea fragmentului fluture/segmentar de impactarea metafizară de energie redusă și de strivirea trabeculară vertebrală.",
  "optionRationales": [
   "Textul distinge fragmentul triunghiular „în aripă de fluture” de forma cilindrică segmentară.",
   "Energia mare și compromiterea vascularizației intramedulare sunt enunțate.",
   "Sediile metafizare (col femural, radius distal, platou tibial) și energia redusă sunt citate.",
   "Compreshia strivește osul trabecular/spongios, adesea în corpurile vertebrale.",
   "Lemnul verde este încurbarea incompletă a unei singure corticale la copil, nu segmentara adultului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută compresia din corpul vertebral trabecular pe corticala diafizară și confundă lemnul verde cu segmentara."
  },
  "textbookExpressions": [
   "aripă de fluture",
   "impactată"
  ]
 },
 {
  "id": "ortopedie-adv-078",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Deplasarea fragmentelor unei fracturi se caracterizează prin:",
  "options": [
   "Fragmentul distal este denumit în raport cu fragmentul proximal, deoarece reducerea aliniază distalu pe proximal",
   "Deplasarea posterioară de 50% plus cea laterală de 50% poate însemna, tridimensional, o apoziție osoasă de doar 25%",
   "Deplasarea se raportează la fragmentul distal ca reper, proximalul fiind ignorat",
   "Procentele dintr-un singur plan descriu fidel contactul cortical tridimensional",
   "Angulația se măsoară doar în plan orizontal, fără convenții coronale sau sagitale"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Fragmentul distal este denumit în raport cu fragmentul proximal, deoarece reducerea aliniază distalu pe proximal — Corect: Textul fixează convenția: distalu este descris față de proximal, deoarece reducerea îl aliniază pe acesta.\n\nDeplasarea posterioară de 50% plus cea laterală de 50% poate însemna, tridimensional, o apoziție osoasă de doar 25% — Corect: Figura 28-7 arată că 50% posterior plus 50% lateral pot lăsa doar 25% apoziție.\n\nDeplasarea se raportează la fragmentul distal ca reper, proximalul fiind ignorat — Incorect: Reperul este fragmentul proximal, nu distalu luat ca origină.\n\nProcentele dintr-un singur plan descriu fidel contactul cortical tridimensional — Incorect: Procentele unipolare induc în eroare în plan tridimensional.\n\nAngulația se măsoară doar în plan orizontal, fără convenții coronale sau sagitale — Incorect: Deplasarea se măsoară în planuri coronale și sagitale, iar angulația are două convenții.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 587, Deplasarea fracturii — Convenție distal/proximal și apoziție (pagini PDF: 259).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    587
   ],
   "pdfPages": [
    259
   ],
   "section": "Deplasarea fracturii — Convenție distal/proximal și apoziție"
  },
  "learningObjective": "Aplicarea convenției de denumire a distalui față de proximal și a capcanei 50%+50%=25% apoziție 3D.",
  "optionRationales": [
   "Textul fixează convenția: distalu este descris față de proximal, deoarece reducerea îl aliniază pe acesta.",
   "Figura 28-7 arată că 50% posterior plus 50% lateral pot lăsa doar 25% apoziție.",
   "Reperul este fragmentul proximal, nu distalu luat ca origină.",
   "Procentele unipolare induc în eroare în plan tridimensional.",
   "Deplasarea se măsoară în planuri coronale și sagitale, iar angulația are două convenții."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează reperul distal/proximal și tratează procentul unipolar ca echivalent al contactului 3D."
  },
  "textbookExpressions": [
   "deplasarea posterioară cu 50%",
   "25%"
  ]
 },
 {
  "id": "ortopedie-adv-079",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "În imaginea antero-posterioară (plan coronal), când fragmentul distal este angulat lateral, vârful angulației fracturii este:",
  "options": [
   "Medial",
   "Lateral, identic direcției fragmentului distal",
   "Anterior, ca în planul sagital",
   "Posterior, spre vârful ulnei în lemn verde",
   "Independență de plan, angulația nefiind descrisă"
  ],
  "correct": [
   0
  ],
  "explanation": "Medial — Corect: Figura 28-8A: fragmentul distal angulat lateral, angularea fracturii (vârful) este medială.\n\nLateral, identic direcției fragmentului distal — Incorect: Vârful nu coincide cu direcția distalui; cele două convenții sunt opuse.\n\nAnterior, ca în planul sagital — Incorect: Anteriorul este vârful din imaginea laterală (plan sagital), nu din AP.\n\nPosterior, spre vârful ulnei în lemn verde — Incorect: Posteriorul descrie direcția distalui pe radiografia laterală, nu vârful din AP.\n\nIndependență de plan, angulația nefiind descrisă — Incorect: Textul consacră explicit ambele convenții de descriere.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 589, Angulația — Convenția din planul coronal (pagini PDF: 261).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    589
   ],
   "pdfPages": [
    261
   ],
   "section": "Angulația — Convenția din planul coronal"
  },
  "learningObjective": "Recunoașterea celor două convenții: direcția fragmentului distal versus sediul (vârful) angulației, opuse în plan coronal.",
  "optionRationales": [
   "Figura 28-8A: fragmentul distal angulat lateral, angularea fracturii (vârful) este medială.",
   "Vârful nu coincide cu direcția distalui; cele două convenții sunt opuse.",
   "Anteriorul este vârful din imaginea laterală (plan sagital), nu din AP.",
   "Posteriorul descrie direcția distalui pe radiografia laterală, nu vârful din AP.",
   "Textul consacră explicit ambele convenții de descriere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă direcția distalui (lateral) cu vârful angulației (medial), cele două convenții din aceeași figură."
  },
  "textbookExpressions": [
   "angulat lateral",
   "angularea fracturii este"
  ]
 },
 {
  "id": "ortopedie-adv-080",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "În imaginea laterală (plan sagital) a unei fracturi, dacă fragmentul distal este angulat posterior:",
  "options": [
   "Vârful unghiului este anterior",
   "Vârful unghiului este posterior, identic distalui",
   "Planul sagital nu se folosește la cuantificarea angulației",
   "Deplasarea se raportează doar procentual, fără ax lung",
   "Vârful unghiului coincide cu linia mediană, ca în genu valgum"
  ],
  "correct": [
   0
  ],
  "explanation": "Vârful unghiului este anterior — Corect: Figura 28-8B: distal angulat posterior, vârful unghiului este anterior.\n\nVârful unghiului este posterior, identic distalui — Incorect: Vârful este opus direcției distalui, nu identic.\n\nPlanul sagital nu se folosește la cuantificarea angulației — Incorect: Planul sagital (incidența laterală) este una dintre cele două măsurători.\n\nDeplasarea se raportează doar procentual, fără ax lung — Incorect: Angulația reflectă relația axelor lungi distal-proximal, nu doar procentul de deplasare.\n\nVârful unghiului coincide cu linia mediană, ca în genu valgum — Incorect: Linia mediană definește varus/valgus, nu vârful angulației de fractură sagitală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 589, Angulația — Convenția din planul sagital (pagini PDF: 261).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    589
   ],
   "pdfPages": [
    261
   ],
   "section": "Angulația — Convenția din planul sagital"
  },
  "learningObjective": "Aplicarea figurii 28-8B: distal posterior ⇒ apex anterior, distinct de convenția coronală.",
  "optionRationales": [
   "Figura 28-8B: distal angulat posterior, vârful unghiului este anterior.",
   "Vârful este opus direcției distalui, nu identic.",
   "Planul sagital (incidența laterală) este una dintre cele două măsurători.",
   "Angulația reflectă relația axelor lungi distal-proximal, nu doar procentul de deplasare.",
   "Linia mediană definește varus/valgus, nu vârful angulației de fractură sagitală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Egalizează vârful cu direcția distalui pe laterala, deși figura le plasează anterior versus posterior."
  },
  "textbookExpressions": [
   "angulat posterior",
   "vârful unghiului este anterior"
  ]
 },
 {
  "id": "ortopedie-adv-081",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Un pacient este găsit după o criză epileptică, cu umăr dureros. Clinic, brațul este în rotație internă și nu poate fi rotat extern dincolo de neutră. Sunt adevărate:",
  "options": [
   "Luxația posterioară trebuie luată în considerare după electrocutare, criză epileptică, șoc electric sau sevraj alcoolic",
   "Radiografiile în două incidențe perpendiculare sunt necesare; o singură AP poate omite capul în afara glenei",
   "Reducerea se amână până la artroscopie, chiar dacă statusul neurovascular este îndoielnic",
   "Rotația internă blocată exclude luxația și face inutile radiografiile",
   "Luxația posterioară se confirmă pe o singură radiografie AP, procesul coracoid fiind posterior"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Luxația posterioară trebuie luată în considerare după electrocutare, criză epileptică, șoc electric sau sevraj alcoolic — Corect: Textul cere suspiciunea de posterioară după epilepsie, electrocutare, șocuri electrice sau sevraj.\n\nRadiografiile în două incidențe perpendiculare sunt necesare; o singură AP poate omite capul în afara glenei — Corect: Capul în afara glenei pe axilară și necesitatea a două planuri perpendiculare sunt enunțate.\n\nReducerea se amână până la artroscopie, chiar dacă statusul neurovascular este îndoielnic — Incorect: Reducerea pe focar închis prin tracțiune și contratracțiune este descrisă, nu amânarea artroscopică.\n\nRotația internă blocată exclude luxația și face inutile radiografiile — Incorect: Rotația internă fără ER dincolo de neutră este semnul clinic, nu o excludere.\n\nLuxația posterioară se confirmă pe o singură radiografie AP, procesul coracoid fiind posterior — Incorect: Procesul coracoid este o structură scapulară anterioară, utilă la orientarea filmului, nu un reper posterior.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 597, 596, Luxația posterioară de umăr — Clinic și imagistică (pagini PDF: 269, 268).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    597,
    596
   ],
   "pdfPages": [
    269,
    268
   ],
   "section": "Luxația posterioară de umăr — Clinic și imagistică"
  },
  "learningObjective": "Recunoașterea poziției în rotație internă, a contextului convulsiv/electric și a cerinței de două planuri perpendiculare.",
  "optionRationales": [
   "Textul cere suspiciunea de posterioară după epilepsie, electrocutare, șocuri electrice sau sevraj.",
   "Capul în afara glenei pe axilară și necesitatea a două planuri perpendiculare sunt enunțate.",
   "Reducerea pe focar închis prin tracțiune și contratracțiune este descrisă, nu amânarea artroscopică.",
   "Rotația internă fără ER dincolo de neutră este semnul clinic, nu o excludere.",
   "Procesul coracoid este o structură scapulară anterioară, utilă la orientarea filmului, nu un reper posterior."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează AP-ul izolat ca diagnostic și inversează coracoidul (anterior) cu un reper posterior."
  },
  "textbookExpressions": [
   "rotaţie internă",
   "electrocutării"
  ]
 },
 {
  "id": "ortopedie-adv-082",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Fracturile de șold prin traumatism de energie minimă, la vârstnici și osteoporotici, reprezintă circa:",
  "options": [
   "33% din internările în centrele de ortopedie",
   "5% din internările ortopedice, predominând scafoidul",
   "90% din traumatismele de cameră de gardă, analog dorsalgiei",
   "Sub 2% din patologia musculoscheletală",
   "Echivalentul fracturilor de stres tibiale ale alergătorului recreațional"
  ],
  "correct": [
   0
  ],
  "explanation": "33% din internările în centrele de ortopedie — Corect: Textul atribuie acestor fracturi circa 33% din internările în centrele de ortopedie.\n\n5% din internările ortopedice, predominând scafoidul — Incorect: Scafoidul nu este ponderea internărilor citată.\n\n90% din traumatismele de cameră de gardă, analog dorsalgiei — Incorect: 90% și dorsalgia țin de alte capitole/pagini, nu de acest paragraf.\n\nSub 2% din patologia musculoscheletală — Incorect: Ponderea este o treime din internări, nu sub 2%.\n\nEchivalentul fracturilor de stres tibiale ale alergătorului recreațional — Incorect: Sindromul de stres tibial este o entitate de efort, nu echivalent epidemiologic al fracturii de șold.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 597, Fracturile șoldului — Pondere epidemiologică (pagini PDF: 269).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    597
   ],
   "pdfPages": [
    269
   ],
   "section": "Fracturile șoldului — Pondere epidemiologică"
  },
  "learningObjective": "Reținerea ponderii de circa 33% dintre internările ortopedice pentru fracturile de șold de energie minimă.",
  "optionRationales": [
   "Textul atribuie acestor fracturi circa 33% din internările în centrele de ortopedie.",
   "Scafoidul nu este ponderea internărilor citată.",
   "90% și dorsalgia țin de alte capitole/pagini, nu de acest paragraf.",
   "Ponderea este o treime din internări, nu sub 2%.",
   "Sindromul de stres tibial este o entitate de efort, nu echivalent epidemiologic al fracturii de șold."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 33% cu procente din alte patologii (stres, dorsalgie, scafoid) din același capitol."
  },
  "textbookExpressions": [
   "circa 33%",
   "osteoporoză"
  ]
 },
 {
  "id": "ortopedie-adv-083",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Fasciita plantară a sportivului:",
  "options": [
   "Factori contributivi sunt piciorul plat și cel cav, alergarea pe vârfuri sau în nisip, obezitatea și încălțămintea inadecvată",
   "Tratamentul conservator include repaus, medicație, scădere ponderală, încălțăminte adecvată și suport calcaneean sau orteze",
   "Chirurgia eliberează fascia plantară de la originea calcaneeană și este rezervată eșecului nonoperativ",
   "Eliberarea chirurgicală a fasciei este gestul de primă intenție, înaintea ortezelor",
   "Afecțiunea cedează mai rapid dacă persistă de mult timp, fără măsuri conservatoare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Factori contributivi sunt piciorul plat și cel cav, alergarea pe vârfuri sau în nisip, obezitatea și încălțămintea inadecvată — Corect: Lista factorilor (plat, cav, vârfuri, nisip, obezitate, papuci) este explicită.\n\nTratamentul conservator include repaus, medicație, scădere ponderală, încălțăminte adecvată și suport calcaneean sau orteze — Corect: Măsurile conservatoare sunt enumerate în această ordine.\n\nChirurgia eliberează fascia plantară de la originea calcaneeană și este rezervată eșecului nonoperativ — Corect: Eliberarea de la originea calcaneeană este rezervată cazurilor neresponsive.\n\nEliberarea chirurgicală a fasciei este gestul de primă intenție, înaintea ortezelor — Incorect: Chirurgia nu este prima intenție.\n\nAfecțiunea cedează mai rapid dacă persistă de mult timp, fără măsuri conservatoare — Incorect: Textul precizează că persistența îndelungată încetinește, nu accelerează, recuperarea.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 603, Leziuni sportive — Fasciita plantară (pagini PDF: 275).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    603
   ],
   "pdfPages": [
    275
   ],
   "section": "Leziuni sportive — Fasciita plantară"
  },
  "learningObjective": "Integrarea factorilor mecanici, a ierarhiei conservatoare și a eliberării fasciei de pe calcaneu doar după eșec.",
  "optionRationales": [
   "Lista factorilor (plat, cav, vârfuri, nisip, obezitate, papuci) este explicită.",
   "Măsurile conservatoare sunt enumerate în această ordine.",
   "Eliberarea de la originea calcaneeană este rezervată cazurilor neresponsive.",
   "Chirurgia nu este prima intenție.",
   "Textul precizează că persistența îndelungată încetinește, nu accelerează, recuperarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ierarhia (chirurgie înaintea ortezelor) și durata (persistența încetinește vindecarea)."
  },
  "textbookExpressions": [
   "fascia plantară",
   "originea sa calcaneeană"
  ]
 },
 {
  "id": "ortopedie-adv-084",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Un alergător acuză durere anterioară de genunchi la urcatul scărilor, ghemuit și după ședere prelungită. Sindromul dureros patelar:",
  "options": [
   "Rotula funcționează ca un scripete care crește eficiența mecanică a cvadricepsului în extensia genunchiului",
   "Tratamentul conservator evită activitățile agravante, folosește AINS și orteze rotuliene",
   "Exercițiile de ridicare a piciorului cu genunchiul extins întăresc cvadricepsul și sunt importante pentru recuperare",
   "Exercițiile cu genunchiul în extensie exagerată trebuie evitate, deoarece pun presiune excesivă pe patelă",
   "Diagnosticul de condromalacie se pune clinic, fără RMN sau artroscopie, pe baza durerii anterioare izolate"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Rotula funcționează ca un scripete care crește eficiența mecanică a cvadricepsului în extensia genunchiului — Corect: Funcția de scripete a rotulei este enunțată.\n\nTratamentul conservator evită activitățile agravante, folosește AINS și orteze rotuliene — Corect: Evitarea activităților, AINS și ortezele rotuliene sunt descrise ca eficiente.\n\nExercițiile de ridicare a piciorului cu genunchiul extins întăresc cvadricepsul și sunt importante pentru recuperare — Corect: Ridicarea piciorului cu genunchiul extins este citată ca importantă.\n\nExercițiile cu genunchiul în extensie exagerată trebuie evitate, deoarece pun presiune excesivă pe patelă — Corect: Extensia exagerată agravează presiunea patelară.\n\nDiagnosticul de condromalacie se pune clinic, fără RMN sau artroscopie, pe baza durerii anterioare izolate — Incorect: Condromalacia se rezervă leziunilor de cartilaj văzute la RMN sau artroscopic, nu durerii izolate.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 603, Sindromul dureros patelar — Condromalacie (pagini PDF: 275).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    603
   ],
   "pdfPages": [
    275
   ],
   "section": "Sindromul dureros patelar — Condromalacie"
  },
  "learningObjective": "Separarea tratamentului conservator și a izometriei în extensie de interdicția hiperextensiei și de rezerva diagnosticului de condromalacie pentru RMN/artroscopie.",
  "optionRationales": [
   "Funcția de scripete a rotulei este enunțată.",
   "Evitarea activităților, AINS și ortezele rotuliene sunt descrise ca eficiente.",
   "Ridicarea piciorului cu genunchiul extins este citată ca importantă.",
   "Extensia exagerată agravează presiunea patelară.",
   "Condromalacia se rezervă leziunilor de cartilaj văzute la RMN sau artroscopic, nu durerii izolate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă durerea anterioară în diagnostic de condromalacie și promovează hiperextensia, pe care textul o interzice."
  },
  "textbookExpressions": [
   "condromalacie",
   "genunchiul extins"
  ]
 },
 {
  "id": "ortopedie-adv-085",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Testul sertarului anterior al gleznei este pozitiv atunci când:",
  "options": [
   "Ligamentul talofibular anterior este întrerupt și se observă translația anterioară excesivă a piciorului pe gambă",
   "Ligamentul deltoid este intact, iar maleola peronieră scurtă permite eversiunea",
   "Ligamentul încrucișat posterior cedează, cu translație posterioară a tibiei",
   "Fascia plantară este ruptă de pe originea calcaneeană",
   "Ligamentul colateral medial al genunchiului cedează în varus"
  ],
  "correct": [
   0
  ],
  "explanation": "Ligamentul talofibular anterior este întrerupt și se observă translația anterioară excesivă a piciorului pe gambă — Corect: Figura 28-26 leagă sertarul pozitiv de întreruperea talofibularului anterior și de translația piciorului pe gambă.\n\nLigamentul deltoid este intact, iar maleola peronieră scurtă permite eversiunea — Incorect: Deltoidul și lungimea maleolei țin de biomecanica eversiunii, nu de acest test.\n\nLigamentul încrucișat posterior cedează, cu translație posterioară a tibiei — Incorect: LIP controlează translația posterioară a tibiei la genunchi, nu sertarul de gleznă.\n\nFascia plantară este ruptă de pe originea calcaneeană — Incorect: Fascia plantară este o entitate de călcâi, nu un stabilizator al sertarului.\n\nLigamentul colateral medial al genunchiului cedează în varus — Incorect: LCM al genunchiului nu este structura testată de sertarul de gleznă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 605, Entorsele de gleznă — Testul sertarului anterior (pagini PDF: 278).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    605
   ],
   "pdfPages": [
    278
   ],
   "section": "Entorsele de gleznă — Testul sertarului anterior"
  },
  "learningObjective": "Identificarea sertarului anterior de gleznă ca semn al întreruperii talofibularului anterior, distinct de ligamentele genunchiului.",
  "optionRationales": [
   "Figura 28-26 leagă sertarul pozitiv de întreruperea talofibularului anterior și de translația piciorului pe gambă.",
   "Deltoidul și lungimea maleolei țin de biomecanica eversiunii, nu de acest test.",
   "LIP controlează translația posterioară a tibiei la genunchi, nu sertarul de gleznă.",
   "Fascia plantară este o entitate de călcâi, nu un stabilizator al sertarului.",
   "LCM al genunchiului nu este structura testată de sertarul de gleznă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută sertarul anterior de gleznă pe LIP sau pe LCM, ligamente din figura 28-27 de pe aceeași pagină."
  },
  "textbookExpressions": [
   "talofibular anterior",
   "translaţia anterioară excesivă"
  ]
 },
 {
  "id": "ortopedie-adv-086",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Stabilitatea articulației genunchiului, conform figurii 28-27:",
  "options": [
   "Depinde de cele două ligamente colaterale și de cele două ligamente încrucișate",
   "Ligamentul încrucișat anterior rezistă la translația anterioară a tibiei",
   "Ligamentul încrucișat posterior împiedică translația posterioară a tibiei",
   "Ligamentul încrucișat anterior împiedică translația posterioară, iar posteriorul pe cea anterioară",
   "Stabilitatea este asigurată doar de tendonul patelar, fără rol colateral"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Depinde de cele două ligamente colaterale și de cele două ligamente încrucișate — Corect: Textul enumeră cele două colaterale și cele două încrucișate ca piloni ai stabilității.\n\nLigamentul încrucișat anterior rezistă la translația anterioară a tibiei — Corect: Rolul LIA de a rezista translației anterioare a tibiei este explicit.\n\nLigamentul încrucișat posterior împiedică translația posterioară a tibiei — Corect: Rolul LIP de a împiedica translația posterioară este explicit.\n\nLigamentul încrucișat anterior împiedică translația posterioară, iar posteriorul pe cea anterioară — Incorect: Opțiunea inversează vectorii LIA și LIP.\n\nStabilitatea este asigurată doar de tendonul patelar, fără rol colateral — Incorect: Tendonul patelar figurează pe schemă, dar nu înlocuiește cele patru ligamente.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 605, Genunchiul — Ligamente colaterale și încrucișate (pagini PDF: 278).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    605
   ],
   "pdfPages": [
    278
   ],
   "section": "Genunchiul — Ligamente colaterale și încrucișate"
  },
  "learningObjective": "Maparea LIA→translație tibială anterioară și LIP→posterioară, pe lângă cele două colaterale.",
  "optionRationales": [
   "Textul enumeră cele două colaterale și cele două încrucișate ca piloni ai stabilității.",
   "Rolul LIA de a rezista translației anterioare a tibiei este explicit.",
   "Rolul LIP de a împiedica translația posterioară este explicit.",
   "Opțiunea inversează vectorii LIA și LIP.",
   "Tendonul patelar figurează pe schemă, dar nu înlocuiește cele patru ligamente."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește vectorii LIA (anterior) și LIP (posterior), capcana clasică a încrucișatelor."
  },
  "textbookExpressions": [
   "translaţia anterioară a tibiei",
   "translaţia posterioară"
  ]
 },
 {
  "id": "ortopedie-adv-087",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Anteversia femurală de-a lungul creșterii:",
  "options": [
   "Valoarea medie scade de la aproximativ 40° la naștere până la 10° la maturitate",
   "Schimbările cele mai dramatice au loc în primii 2 ani de viață",
   "Anteversia crește de la 10° la naștere la 40° la maturitate",
   "Modificările majore survin după închiderea cartilajului de creștere, în adolescența tardivă",
   "La maturitate colul este retrovertit la 0°, analog genu varum al sugarului"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Valoarea medie scade de la aproximativ 40° la naștere până la 10° la maturitate — Corect: Textul figurei precizează scăderea de la circa 40° la naștere la 10° la maturitate.\n\nSchimbările cele mai dramatice au loc în primii 2 ani de viață — Corect: Cele mai dramatice schimbări sunt plasate în primii 2 ani.\n\nAnteversia crește de la 10° la naștere la 40° la maturitate — Incorect: Direcția este de scădere, nu de creștere.\n\nModificările majore survin după închiderea cartilajului de creștere, în adolescența tardivă — Incorect: Adolescența tardivă nu este intervalul pantei maxime.\n\nLa maturitate colul este retrovertit la 0°, analog genu varum al sugarului — Incorect: 10° la maturitate rămâne anteversie, nu retroversie 0°.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 612, Torsiunea membrului inferior — Curba anteversiei (pagini PDF: 284).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    612
   ],
   "pdfPages": [
    284
   ],
   "section": "Torsiunea membrului inferior — Curba anteversiei"
  },
  "learningObjective": "Citirea graficului 28-37: 40°→10°, cu panta maximă în primii 2 ani, nu după fuziunea epifizară.",
  "optionRationales": [
   "Textul figurei precizează scăderea de la circa 40° la naștere la 10° la maturitate.",
   "Cele mai dramatice schimbări sunt plasate în primii 2 ani.",
   "Direcția este de scădere, nu de creștere.",
   "Adolescența tardivă nu este intervalul pantei maxime.",
   "10° la maturitate rămâne anteversie, nu retroversie 0°."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează 40°/10° și mută panta dramatică din primii 2 ani în adolescența tardivă."
  },
  "textbookExpressions": [
   "40° la naştere",
   "la maturitate"
  ]
 },
 {
  "id": "ortopedie-adv-088",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Adducția metatarsienelor ca o cauză a rotației interne a piciorului se recunoaște prin:",
  "options": [
   "O margine laterală convexă a piciorului; dacă piciorul nu poate fi corectat pasiv în poziție neutră, diformitatea este rigidă și poate necesita imobilizări gipsate repetate",
   "O margine medială convexă, analog genu valgum, tratată prin ham Pavlik",
   "Torsiune tibială externă, cu unghi coapsă-picior orientat în afara liniei mediane, ca variantă rigidă",
   "Anteversie femurală de 10° la naștere, corectată prin epifiziodeză",
   "Pes cavus cu degete în gheară, indicație de artrodeză tarsiană înainte de 2 ani"
  ],
  "correct": [
   0
  ],
  "explanation": "O margine laterală convexă a piciorului; dacă piciorul nu poate fi corectat pasiv în poziție neutră, diformitatea este rigidă și poate necesita imobilizări gipsate repetate — Corect: Figura 28-39B subliniază marginea laterală convexă și gipsurile repetate dacă nu se corectează pasiv la neutru.\n\nO margine medială convexă, analog genu valgum, tratată prin ham Pavlik — Incorect: Convexitatea descrisă este laterală, nu medială; Pavlik este al displaziei de șold.\n\nTorsiune tibială externă, cu unghi coapsă-picior orientat în afara liniei mediane, ca variantă rigidă — Incorect: Torsiunea tibială externă este detectată prin unghiul coapsă-picior orientat în afara liniei mediane, nu este adducția metatarsiană.\n\nAnteversie femurală de 10° la naștere, corectată prin epifiziodeză — Incorect: Anteversia la naștere este circa 40°, nu 10°.\n\nPes cavus cu degete în gheară, indicație de artrodeză tarsiană înainte de 2 ani — Incorect: Pes cavus și artrodeza precoce nu sunt tratamentul adducției metatarsiene.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 612, Diformități de torsiune — Adducția metatarsienelor (pagini PDF: 284).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    612
   ],
   "pdfPages": [
    284
   ],
   "section": "Diformități de torsiune — Adducția metatarsienelor"
  },
  "learningObjective": "Diferențierea marginii laterale convexe și a formei rigide (gipsuri seriate) de torsiunea tibială externă din aceeași figură.",
  "optionRationales": [
   "Figura 28-39B subliniază marginea laterală convexă și gipsurile repetate dacă nu se corectează pasiv la neutru.",
   "Convexitatea descrisă este laterală, nu medială; Pavlik este al displaziei de șold.",
   "Torsiunea tibială externă este detectată prin unghiul coapsă-picior orientat în afara liniei mediane, nu este adducția metatarsiană.",
   "Anteversia la naștere este circa 40°, nu 10°.",
   "Pes cavus și artrodeza precoce nu sunt tratamentul adducției metatarsiene."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă convexitatea laterală cu cea medială și atribuie Pavlik-ul sau artrodeza unei diformități de antepicior."
  },
  "textbookExpressions": [
   "metatarsiene",
   "imobilizări ghipsate repetate"
  ]
 },
 {
  "id": "ortopedie-adv-089",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "O tânără cu pustule palmare și artrită a articulațiilor mici ale mâinii. Artrita gonococică:",
  "options": [
   "Infecția gonococică sistemică poate asocia peteșii sau pustule la palme sau tălpi",
   "Cultura din aspiratul articular relevă diplococi Gram-negativi tipici",
   "Infecția afectează uzual articulațiile mici ale mâinii și piciorului",
   "Tratamentul cu cefuroxim 1 g intravenos zilnic, 7 zile, conduce de obicei la recuperare completă, germenul neproducând colagenază",
   "Germenul produce colagenază abundantă, deci distrucția cartilajului este ireversibilă chiar după antibiotic"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Infecția gonococică sistemică poate asocia peteșii sau pustule la palme sau tălpi — Corect: Peteșiile/pustulele palmo-plantare sunt enunțate.\n\nCultura din aspiratul articular relevă diplococi Gram-negativi tipici — Corect: Diplococii Gram-negativi din aspirat sunt citați.\n\nInfecția afectează uzual articulațiile mici ale mâinii și piciorului — Corect: Predilecția pentru articulațiile mici ale mâinii și piciorului este explicită.\n\nTratamentul cu cefuroxim 1 g intravenos zilnic, 7 zile, conduce de obicei la recuperare completă, germenul neproducând colagenază — Corect: Cefuroxim 1 g i.v. zilnic 7 zile și absența colagenazei explică recuperarea.\n\nGermenul produce colagenază abundantă, deci distrucția cartilajului este ireversibilă chiar după antibiotic — Incorect: Textul leagă recuperarea completă de lipsa colagenazei, nu de distrucție ireversibilă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 621, Artropatii infecțioase — Artrita gonococică (pagini PDF: 293).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    621
   ],
   "pdfPages": [
    293
   ],
   "section": "Artropatii infecțioase — Artrita gonococică"
  },
  "learningObjective": "Recunoașterea tetradei pustule palmo-plantare, diplococi Gram-negativi, articulații mici și cefuroxim 7 zile, opus mitului colagenazei.",
  "optionRationales": [
   "Peteșiile/pustulele palmo-plantare sunt enunțate.",
   "Diplococii Gram-negativi din aspirat sunt citați.",
   "Predilecția pentru articulațiile mici ale mâinii și piciorului este explicită.",
   "Cefuroxim 1 g i.v. zilnic 7 zile și absența colagenazei explică recuperarea.",
   "Textul leagă recuperarea completă de lipsa colagenazei, nu de distrucție ireversibilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează absența colagenazei (recuperare) într-o distrucție inevitabilă, lângă doza de cefuroxim ușor de uitat."
  },
  "textbookExpressions": [
   "Gram-negativi tipici",
   "cefuroxim 1"
  ]
 },
 {
  "id": "ortopedie-adv-090",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Boala Lyme cu poliartralgie migratorie:",
  "options": [
   "Este cauzată de spirocheta Borrelia burgdorferi, purtată de căpușe de pe căprioare",
   "Simptomele se ameliorează de obicei după doxiciclină 100 mg p.o. de 2 ori pe zi, 10 zile",
   "Amoxicilina 500 mg p.o. la 6 ore, 10 zile, este o alternativă",
   "Tratamentul de elecție este cefuroxim 1 g i.v. zilnic, ca în gonococ",
   "Cristalele de urat negativ birefringente confirmă diagnosticul, analog gutei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este cauzată de spirocheta Borrelia burgdorferi, purtată de căpușe de pe căprioare — Corect: Spirocheta și vectorul (căpușe/căprioare) sunt explicite.\n\nSimptomele se ameliorează de obicei după doxiciclină 100 mg p.o. de 2 ori pe zi, 10 zile — Corect: Doxiciclina 100 mg ×2/zi, 10 zile, este citată.\n\nAmoxicilina 500 mg p.o. la 6 ore, 10 zile, este o alternativă — Corect: Amoxicilina 500 mg la 6 ore, 10 zile, este alternativa.\n\nTratamentul de elecție este cefuroxim 1 g i.v. zilnic, ca în gonococ — Incorect: Cefuroximul i.v. 7 zile este schema gonococului, nu a Lyme.\n\nCristalele de urat negativ birefringente confirmă diagnosticul, analog gutei — Incorect: Cristalele de urat definesc guta, nu infecția cu Borrelia.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 621, Artropatii infecțioase — Boala Lyme (pagini PDF: 293).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    621
   ],
   "pdfPages": [
    293
   ],
   "section": "Artropatii infecțioase — Boala Lyme"
  },
  "learningObjective": "Separarea schemei orale 10 zile (doxiciclină sau amoxicilină) de cefuroximul gonococic și de cristalele gutei de pe aceeași pagină.",
  "optionRationales": [
   "Spirocheta și vectorul (căpușe/căprioare) sunt explicite.",
   "Doxiciclina 100 mg ×2/zi, 10 zile, este citată.",
   "Amoxicilina 500 mg la 6 ore, 10 zile, este alternativa.",
   "Cefuroximul i.v. 7 zile este schema gonococului, nu a Lyme.",
   "Cristalele de urat definesc guta, nu infecția cu Borrelia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează schema Lyme (oral 10 zile) cu cefuroximul i.v. al gonococului și cu cristalele gutei."
  },
  "textbookExpressions": [
   "Borrelia Burg",
   "doxiciclină"
  ]
 },
 {
  "id": "ortopedie-adv-091",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Analiza lichidului articular diferențiază guta de pseudogută prin:",
  "options": [
   "Guta: cristale în așchii, monoclinice, negativ birefringente de acid uric",
   "Pseudoguta: cristale romboidale, pozitiv birefringente de calciu pirofosfat dihidrat",
   "Guta: cristale romboidale pozitiv birefringente de pirofosfat",
   "Pseudoguta: așchii negativ birefringente de urat, identice gutei",
   "Allopurinolul este tratamentul puseului acut, iar colchicina prevenția de lungă durată"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Guta: cristale în așchii, monoclinice, negativ birefringente de acid uric — Corect: Morfologia în așchii, monoclinică, negativ birefringentă a uratului este explicită.\n\nPseudoguta: cristale romboidale, pozitiv birefringente de calciu pirofosfat dihidrat — Corect: Romburile pozitiv birefringente de CPPD definesc pseudoguta.\n\nGuta: cristale romboidale pozitiv birefringente de pirofosfat — Incorect: Romburile pozitiv birefringente sunt ale pseudogutei, nu ale gutei.\n\nPseudoguta: așchii negativ birefringente de urat, identice gutei — Incorect: Așchiile de urat nu descriu pseudoguta.\n\nAllopurinolul este tratamentul puseului acut, iar colchicina prevenția de lungă durată — Incorect: Puseul acut se tratează cu AINS în doze mari sau colchicină; allopurinolul scade uricemia pe termen lung.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 621, Artropatii microcristaline — Gută versus pseudogută (pagini PDF: 293).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    621
   ],
   "pdfPages": [
    293
   ],
   "section": "Artropatii microcristaline — Gută versus pseudogută"
  },
  "learningObjective": "Contrastarea uratului negativ birefringent cu pirofosfatul pozitiv birefringent, plus ierarhia AINS/colchicină acut versus allopurinol preventiv.",
  "optionRationales": [
   "Morfologia în așchii, monoclinică, negativ birefringentă a uratului este explicită.",
   "Romburile pozitiv birefringente de CPPD definesc pseudoguta.",
   "Romburile pozitiv birefringente sunt ale pseudogutei, nu ale gutei.",
   "Așchiile de urat nu descriu pseudoguta.",
   "Puseul acut se tratează cu AINS în doze mari sau colchicină; allopurinolul scade uricemia pe termen lung."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește semnul optic (negativ versus pozitiv birefringent) și inversează allopurinolul din prevenție în puseu."
  },
  "textbookExpressions": [
   "negativ birefringente",
   "calciu pirofosfat dihidrat"
  ]
 },
 {
  "id": "ortopedie-adv-092",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Osteonecroza netraumatică:",
  "options": [
   "Pacienții cu glucocorticoizi (în special LES sau transplant renal) au risc crescut",
   "Trombii din siclemie, bulele de azot ale scafandrilor, glucocerebrozidele din Gaucher și embolii grăsoși ai alcoolicului pot ocluziona osul",
   "IRM este cea mai sensibilă metodă de detectare a osteonecrozei incipiente; necroza celulară apare în 24 de ore, iar radiografia poate întârzia până la 5 ani",
   "Scintigrafia este superioară IRM în stadiul presimptomatic, iar radiografia se pozitivează în primele 24 de ore",
   "Capul femural este rar afectat, predilecția fiind pentru diafiza tibială, bogat anastomozată"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pacienții cu glucocorticoizi (în special LES sau transplant renal) au risc crescut — Corect: Riscul steroidian, mai ales în LES și transplant renal, este enunțat.\n\nTrombii din siclemie, bulele de azot ale scafandrilor, glucocerebrozidele din Gaucher și embolii grăsoși ai alcoolicului pot ocluziona osul — Corect: Mecanismele ocluzive enumerate sunt din același paragraf.\n\nIRM este cea mai sensibilă metodă de detectare a osteonecrozei incipiente; necroza celulară apare în 24 de ore, iar radiografia poate întârzia până la 5 ani — Corect: Sensibilitatea IRM, fereastra de 24 de ore microscopică și întârzierea radiologică de până la 5 ani sunt explicite.\n\nScintigrafia este superioară IRM în stadiul presimptomatic, iar radiografia se pozitivează în primele 24 de ore — Incorect: IRM, nu scintigrafia, este metoda cea mai sensibilă; radiografia întârzie ani.\n\nCapul femural este rar afectat, predilecția fiind pentru diafiza tibială, bogat anastomozată — Incorect: Capul femural este cel mai afectat; osul are puține anastomoze.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 621, Osteonecroza — Cauze netraumatice și diagnostic precoce (pagini PDF: 293).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    621
   ],
   "pdfPages": [
    293
   ],
   "section": "Osteonecroza — Cauze netraumatice și diagnostic precoce"
  },
  "learningObjective": "Integrarea listelor embolice (steroid, siclemie, caisson, Gaucher) cu superioritatea IRM și latența radiologică de până la 5 ani.",
  "optionRationales": [
   "Riscul steroidian, mai ales în LES și transplant renal, este enunțat.",
   "Mecanismele ocluzive enumerate sunt din același paragraf.",
   "Sensibilitatea IRM, fereastra de 24 de ore microscopică și întârzierea radiologică de până la 5 ani sunt explicite.",
   "IRM, nu scintigrafia, este metoda cea mai sensibilă; radiografia întârzie ani.",
   "Capul femural este cel mai afectat; osul are puține anastomoze."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ierarhia IRM/radiografie (5 ani versus 24 de ore) și mută predilecția de pe capul femural pe tibie."
  },
  "textbookExpressions": [
   "IRM este cea mai sensibilă",
   "5 ani"
  ]
 },
 {
  "id": "ortopedie-adv-093",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Tratamentul necrozei avasculare a capului femural:",
  "options": [
   "Tratamentul conservator previne încărcarea articulară până la încheierea procesului natural de vindecare",
   "Decompresia centrală, prin forarea unui tunel în osul spongios mort, scade presiunea intraosoasă și ușurează revascularizarea",
   "Dacă volumul de os mort este mare, artroplastia totală este o opțiune rezonabilă",
   "Încărcarea deplină imediată accelerează substituția trabeculelor necrotice",
   "Decompresia centrală crește presiunea intraosoasă și este rezervată artrozei finale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tratamentul conservator previne încărcarea articulară până la încheierea procesului natural de vindecare — Corect: Prevenirea încărcării până la vindecarea naturală stă la baza tratamentului conservator.\n\nDecompresia centrală, prin forarea unui tunel în osul spongios mort, scade presiunea intraosoasă și ușurează revascularizarea — Corect: Tunelul în osul mort scade presiunea și oferă cale de revascularizare.\n\nDacă volumul de os mort este mare, artroplastia totală este o opțiune rezonabilă — Corect: Volumul mare de os mort justifică artroplastia totală.\n\nÎncărcarea deplină imediată accelerează substituția trabeculelor necrotice — Incorect: Încărcarea persistentă fractură osul necrotic subcondral.\n\nDecompresia centrală crește presiunea intraosoasă și este rezervată artrozei finale — Incorect: Decompresia scade, nu crește, presiunea intraosoasă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 622, Osteonecroza — Decompresie centrală și artroplastie (pagini PDF: 294).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    622
   ],
   "pdfPages": [
    294
   ],
   "section": "Osteonecroza — Decompresie centrală și artroplastie"
  },
  "learningObjective": "Ierarhia descărcare → decompresie centrală (scăderea presiunii) → artroplastie când volumul necrotic este mare, la tineri activi cu risc de uzură a implantului.",
  "optionRationales": [
   "Prevenirea încărcării până la vindecarea naturală stă la baza tratamentului conservator.",
   "Tunelul în osul mort scade presiunea și oferă cale de revascularizare.",
   "Volumul mare de os mort justifică artroplastia totală.",
   "Încărcarea persistentă fractură osul necrotic subcondral.",
   "Decompresia scade, nu crește, presiunea intraosoasă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează efectul decompresiei asupra presiunii intraosoase și promovează încărcarea, care precipită prăbușirea subcondrală."
  },
  "textbookExpressions": [
   "Decompresia centrală",
   "intraosoasă"
  ]
 },
 {
  "id": "ortopedie-adv-094",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Ponderea adulților care au un episod de durere lombară joasă suficient de sever cât să interfereze cu activitatea zilnică este de:",
  "options": [
   "80%",
   "10%, identic ponderii cu iradiere sciatică",
   "1–2%, analog indicației chirurgicale pentru hernie de disc",
   "50% în primele 2 săptămâni, ca rată de ameliorare, nu de incidență",
   "Sub 5%, durerea lombară fiind rară între 30 și 65 de ani"
  ],
  "correct": [
   0
  ],
  "explanation": "80% — Corect: Textul citează 80% dintre adulți cu un episod suficient de sever.\n\n10%, identic ponderii cu iradiere sciatică — Incorect: Sub 10% au iradiere sciatică, pe pagina 623, nu ca incidență a episodului.\n\n1–2%, analog indicației chirurgicale pentru hernie de disc — Incorect: 1–2% este ponderea care necesită chirurgie pentru hernie, nu incidența episodului.\n\n50% în primele 2 săptămâni, ca rată de ameliorare, nu de incidență — Incorect: 50% în 2 săptămâni este rata de ameliorare, nu prevalența de-a lungul vieții.\n\nSub 5%, durerea lombară fiind rară între 30 și 65 de ani — Incorect: Grupa 30–65 ani este tocmai cea în care lombalgia este cea mai frecventă suferință musculoscheletală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 622, 623, Coloana lombară — Epidemiologie (pagini PDF: 294, 295).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    622,
    623
   ],
   "pdfPages": [
    294,
    295
   ],
   "section": "Coloana lombară — Epidemiologie"
  },
  "learningObjective": "Reținerea cifrei de 80% dintre adulți cu episod invalidant de lombalgie, distinctă de 10% sciatică și 1–2% chirurgie de pe pagina următoare.",
  "optionRationales": [
   "Textul citează 80% dintre adulți cu un episod suficient de sever.",
   "Sub 10% au iradiere sciatică, pe pagina 623, nu ca incidență a episodului.",
   "1–2% este ponderea care necesită chirurgie pentru hernie, nu incidența episodului.",
   "50% în 2 săptămâni este rata de ameliorare, nu prevalența de-a lungul vieții.",
   "Grupa 30–65 ani este tocmai cea în care lombalgia este cea mai frecventă suferință musculoscheletală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 80% (episod de-a lungul vieții) cu 10% sciatică și 1–2% chirurgie din paragraful următor."
  },
  "textbookExpressions": [
   "80%",
   "durere lombară joasă"
  ]
 },
 {
  "id": "ortopedie-adv-095",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Unitatea mobilă a coloanei vertebrale:",
  "options": [
   "Este compusă din două corpuri vertebrale acoperite cu plăci terminale cartilaginoase și un disc intervertebral",
   "Discul conține un nucleus pulposus gelatinos central și un annulus fibrosus elastic",
   "Fațetele lombare sunt orientate în plan sagital și permit flexia și extensia",
   "Fațetele lombare, orizontale, permit rotația largă și blochează flexia",
   "Nucleus pulposus este inelul fibros periferic, iar annulus este gelul central"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este compusă din două corpuri vertebrale acoperite cu plăci terminale cartilaginoase și un disc intervertebral — Corect: Definiția unității mobile (două vertebre + disc) este explicită.\n\nDiscul conține un nucleus pulposus gelatinos central și un annulus fibrosus elastic — Corect: Nucleus central gelatinos și annulus elastic periferic sunt descrise.\n\nFațetele lombare sunt orientate în plan sagital și permit flexia și extensia — Corect: Orientarea sagitală lombară și cuplul flexie-extensie sunt enunțate.\n\nFațetele lombare, orizontale, permit rotația largă și blochează flexia — Incorect: Fațetele toracice, nu lombare, sunt mai orizontale și permit înclinarea laterală și rotația.\n\nNucleus pulposus este inelul fibros periferic, iar annulus este gelul central — Incorect: Opțiunea inversează nucleul și inelul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 622, Anatomia coloanei — Disc, fațete, unitate mobilă (pagini PDF: 294).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    622
   ],
   "pdfPages": [
    294
   ],
   "section": "Anatomia coloanei — Disc, fațete, unitate mobilă"
  },
  "learningObjective": "Maparea nucleu central/inel periferic și a orientării sagitale a fațetelor lombare (flexie-extensie), opus fațetelor toracice mai orizontale.",
  "optionRationales": [
   "Definiția unității mobile (două vertebre + disc) este explicită.",
   "Nucleus central gelatinos și annulus elastic periferic sunt descrise.",
   "Orientarea sagitală lombară și cuplul flexie-extensie sunt enunțate.",
   "Fațetele toracice, nu lombare, sunt mai orizontale și permit înclinarea laterală și rotația.",
   "Opțiunea inversează nucleul și inelul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește nucleus/annulus și atribuie lombarului orientarea orizontală toracică."
  },
  "textbookExpressions": [
   "nucleus pulposus",
   "Faţetele lombare"
  ]
 },
 {
  "id": "ortopedie-adv-096",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Condrosarcomul, conform tabelului 28-9:",
  "options": [
   "Apare la 40–60 de ani, ca masă tumorală în creștere cu durere surdă, în zone centrale (centurile bazinului și umărului)",
   "Poate reprezenta transformarea malignă a unui encondrom sau osteocondrom preexistent, mai ales dacă este multiplu",
   "Este tumora copilului de 10–15 ani, diafizară, cu aspect de „bulb de ceapă”",
   "Spiculii „raze de soare” metafizari definesc condrosarcomul, nu osteosarcomul",
   "Proteinuria Bence Jones confirmă condrosarcomul, nu mielomul"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Apare la 40–60 de ani, ca masă tumorală în creștere cu durere surdă, în zone centrale (centurile bazinului și umărului) — Corect: Vârsta, durerea surdă și sediul central pelvi-scapular sunt din tabel.\n\nPoate reprezenta transformarea malignă a unui encondrom sau osteocondrom preexistent, mai ales dacă este multiplu — Corect: Transformarea encondromului/osteocondromului, mai ales multiplu, este citată.\n\nEste tumora copilului de 10–15 ani, diafizară, cu aspect de „bulb de ceapă” — Incorect: 10–15 ani, diafiză și bulb de ceapă definesc sarcomul Ewing.\n\nSpiculii „raze de soare” metafizari definesc condrosarcomul, nu osteosarcomul — Incorect: Razele de soare sunt ale osteosarcomului metafizar.\n\nProteinuria Bence Jones confirmă condrosarcomul, nu mielomul — Incorect: Bence Jones ține de mielomul cu origine plasmocitară.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 631, Tumori osoase — Condrosarcomul (Tabelul 28-9) (pagini PDF: 303).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    631
   ],
   "pdfPages": [
    303
   ],
   "section": "Tumori osoase — Condrosarcomul (Tabelul 28-9)"
  },
  "learningObjective": "Separarea vârstei 40–60 și a originii pe encondrom/osteocondrom de Ewing („bulb de ceapă”) și de osteosarcom („raze de soare”).",
  "optionRationales": [
   "Vârsta, durerea surdă și sediul central pelvi-scapular sunt din tabel.",
   "Transformarea encondromului/osteocondromului, mai ales multiplu, este citată.",
   "10–15 ani, diafiză și bulb de ceapă definesc sarcomul Ewing.",
   "Razele de soare sunt ale osteosarcomului metafizar.",
   "Bence Jones ține de mielomul cu origine plasmocitară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută semnele Ewing și osteosarcom (bulb de ceapă, raze de soare) pe condrosarcomul adultului de 40–60 de ani."
  },
  "textbookExpressions": [
   "40-60 de ani",
   "encondrom"
  ]
 },
 {
  "id": "ortopedie-adv-097",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Evaluarea de laborator a unei suspiciuni de tumoră osoasă include:",
  "options": [
   "În carcinomul de prostată, antigenul specific prostatic se măsoară înainte de tușeul rectal",
   "Dacă se suspectează un mielom, este necesară electroforeza proteinelor serice",
   "Studiul funcției hepatice și determinarea acidului uric, fosfatazei alcaline, calciului și fosforului evaluează formarea sau resorbția osoasă",
   "Tușeul rectal precede dozarea PSA, pentru a „activa” antigenul",
   "Electroforeza se rezervă osteosarcomului cu raze de soare, nu mielomului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În carcinomul de prostată, antigenul specific prostatic se măsoară înainte de tușeul rectal — Corect: Textul cere măsurarea PSA înainte de tușeul rectal.\n\nDacă se suspectează un mielom, este necesară electroforeza proteinelor serice — Corect: Electroforeza serică este impusă de suspiciunea de mielom.\n\nStudiul funcției hepatice și determinarea acidului uric, fosfatazei alcaline, calciului și fosforului evaluează formarea sau resorbția osoasă — Corect: Panelul hepatic, uric, FA, calciu și fosfor este enumerat.\n\nTușeul rectal precede dozarea PSA, pentru a „activa” antigenul — Incorect: Ordinea corectă este PSA apoi tușeu, nu invers.\n\nElectroforeza se rezervă osteosarcomului cu raze de soare, nu mielomului — Incorect: Electroforeza ține de mielom, nu de osteosarcom.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 631, Neoplasmele osului — Laborator (PSA, electroforeză) (pagini PDF: 303).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    631
   ],
   "pdfPages": [
    303
   ],
   "section": "Neoplasmele osului — Laborator (PSA, electroforeză)"
  },
  "learningObjective": "Ordinea PSA înainte de tușeu, electroforeza din mielom și panelul FA/Ca/P/uric, opus inversării tușeu-PSA.",
  "optionRationales": [
   "Textul cere măsurarea PSA înainte de tușeul rectal.",
   "Electroforeza serică este impusă de suspiciunea de mielom.",
   "Panelul hepatic, uric, FA, calciu și fosfor este enumerat.",
   "Ordinea corectă este PSA apoi tușeu, nu invers.",
   "Electroforeza ține de mielom, nu de osteosarcom."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ordinea PSA–tușeu și atribuie electroforeza osteosarcomului în locul mielomului."
  },
  "textbookExpressions": [
   "antigenului specific prostatei",
   "electroforeza proteinelor serice"
  ]
 },
 {
  "id": "ortopedie-adv-098",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Imagistica și biopsia tumorilor osoase:",
  "options": [
   "Scintigrafia cu technețiu-99m pirofosfat este un screening excelent al metastazelor, dar este negativă în mielomul multiplu",
   "CT definește osul cortical și este metoda de preferat pentru leziunile pulmonare mici",
   "IRM evaluează extinderea intramedulară și relația cu pachetele vasculonervoase",
   "Tehnicile speciale de imagistică se efectuează înainte de a recurge la biopsie",
   "Biopsia se practică înaintea oricărei imagistici, incizia fiind transversală pe os, cu disecție musculară extinsă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Scintigrafia cu technețiu-99m pirofosfat este un screening excelent al metastazelor, dar este negativă în mielomul multiplu — Corect: Fixarea Tc-99m în osul activ și negativitatea din mielom sunt explicite.\n\nCT definește osul cortical și este metoda de preferat pentru leziunile pulmonare mici — Corect: Rolul CT pentru corticală și noduli pulmonari mici este enunțat.\n\nIRM evaluează extinderea intramedulară și relația cu pachetele vasculonervoase — Corect: IRM pentru măduvă și raportul vasculonervos este descris.\n\nTehnicile speciale de imagistică se efectuează înainte de a recurge la biopsie — Corect: Imagistica specială precede biopsia.\n\nBiopsia se practică înaintea oricărei imagistici, incizia fiind transversală pe os, cu disecție musculară extinsă — Incorect: Incizia este în axul longitudinal, evitând disecția musculară extinsă; imagistica vine înainte.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 632, Tumori osoase — Scintigrafie, CT, IRM și biopsie (pagini PDF: 304).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    632
   ],
   "pdfPages": [
    304
   ],
   "section": "Tumori osoase — Scintigrafie, CT, IRM și biopsie"
  },
  "learningObjective": "Ierarhia imagistică (scintigrafie de screening, CT cortical/pulmonar, IRM medular) înaintea biopsiei longitudinale atelejate.",
  "optionRationales": [
   "Fixarea Tc-99m în osul activ și negativitatea din mielom sunt explicite.",
   "Rolul CT pentru corticală și noduli pulmonari mici este enunțat.",
   "IRM pentru măduvă și raportul vasculonervos este descris.",
   "Imagistica specială precede biopsia.",
   "Incizia este în axul longitudinal, evitând disecția musculară extinsă; imagistica vine înainte."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ordinea biopsie-imagistică și transformă incizia longitudinală într-una transversală contaminată."
  },
  "textbookExpressions": [
   "99m pirofosfat",
   "înainte de a recurge la biopsie"
  ]
 },
 {
  "id": "ortopedie-adv-099",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Riscul iminent de fractură pe os patologic justifică osteosinteza profilactică atunci când leziunea ocupă:",
  "options": [
   "Peste 50% din diametrul corticalei osului",
   "Sub 10% din diametrul medular, analog nidusului de osteom osteoid",
   "Întreaga epifiză, dar nu corticala diafizară",
   "Doar trabeculele, fără interesare corticală",
   "Peste 90% din lungimea diafizei, analog unei fracturi segmentare"
  ],
  "correct": [
   0
  ],
  "explanation": "Peste 50% din diametrul corticalei osului — Corect: Textul leagă ocuparea a peste 50% din diametrul corticalei de riscul iminent și de preferința pentru osteosinteză profilactică.\n\nSub 10% din diametrul medular, analog nidusului de osteom osteoid — Incorect: Nidusul sub 1 cm este al osteomului osteoid, nu pragul de fractură patologică.\n\nÎntreaga epifiză, dar nu corticala diafizară — Incorect: Pragul este cortical (diametru), nu o regulă epifizară.\n\nDoar trabeculele, fără interesare corticală — Incorect: Interesarea doar trabeculară fără 50% cortical nu este indicația citată.\n\nPeste 90% din lungimea diafizei, analog unei fracturi segmentare — Incorect: 90% din lungime nu este criteriul din acest paragraf.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 632, Metastaze osoase — Pragul de 50% și osteosinteza profilactică (pagini PDF: 304).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    632
   ],
   "pdfPages": [
    304
   ],
   "section": "Metastaze osoase — Pragul de 50% și osteosinteza profilactică"
  },
  "learningObjective": "Reținerea pragului de peste 50% din diametrul cortical ca indicație de fixare profilactică, înaintea fracturii, care are morbiditate mai mare.",
  "optionRationales": [
   "Textul leagă ocuparea a peste 50% din diametrul corticalei de riscul iminent și de preferința pentru osteosinteză profilactică.",
   "Nidusul sub 1 cm este al osteomului osteoid, nu pragul de fractură patologică.",
   "Pragul este cortical (diametru), nu o regulă epifizară.",
   "Interesarea doar trabeculară fără 50% cortical nu este indicația citată.",
   "90% din lungime nu este criteriul din acest paragraf."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează pragul de 50% din diametrul cortical cu 10% (nidus) sau 90% (segmentară)."
  },
  "textbookExpressions": [
   "peste 50% din diametrul",
   "os patologic"
  ]
 },
 {
  "id": "ortopedie-adv-100",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Ciclul normal de mers se caracterizează prin:",
  "options": [
   "Se extinde de la atingerea solului cu călcâiul unui picior până la următoarea atingere a solului cu același călcâi",
   "Faza de sprijin ocupă 60% din ciclu și începe cu atingerea călcâiului, urmată de piciorul plat, terminându-se cu desprinderea degetelor",
   "Faza de balansare ocupă 40% din ciclu, cu pendularea membrului până la atingerea călcâiului",
   "Faza de sprijin ocupă 40%, iar balansarea 60%, călcâiul atingând solul la sfârșitul sprijinului",
   "Lungimea pasului este distanța dintre două contacte succesive ale aceluiași călcâi, identică ciclului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se extinde de la atingerea solului cu călcâiul unui picior până la următoarea atingere a solului cu același călcâi — Corect: Definiția ciclului de la un contact de călcâi la următorul ipsilateral este explicită.\n\nFaza de sprijin ocupă 60% din ciclu și începe cu atingerea călcâiului, urmată de piciorul plat, terminându-se cu desprinderea degetelor — Corect: 60% sprijin și succesiunea călcâi–picior plat–desprinderea degetelor sunt descrise.\n\nFaza de balansare ocupă 40% din ciclu, cu pendularea membrului până la atingerea călcâiului — Corect: 40% balansare până la noul contact de călcâi este enunțată.\n\nFaza de sprijin ocupă 40%, iar balansarea 60%, călcâiul atingând solul la sfârșitul sprijinului — Incorect: Raportul 60/40 este inversat în această opțiune.\n\nLungimea pasului este distanța dintre două contacte succesive ale aceluiași călcâi, identică ciclului — Incorect: Lungimea ciclului este călcâi-călcâi ipsilateral; lungimea pasului este distanța (începută pe pagina aceasta, distinctă de ciclu).\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 632, Mersul — Ciclul, sprijin și balansare (pagini PDF: 304).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    632
   ],
   "pdfPages": [
    304
   ],
   "section": "Mersul — Ciclul, sprijin și balansare"
  },
  "learningObjective": "Definirea ciclului călcâi-călcâi ipsilateral, a succesiunii heel-strike → foot-flat → toe-off (60%) și a balansului de 40%.",
  "optionRationales": [
   "Definiția ciclului de la un contact de călcâi la următorul ipsilateral este explicită.",
   "60% sprijin și succesiunea călcâi–picior plat–desprinderea degetelor sunt descrise.",
   "40% balansare până la noul contact de călcâi este enunțată.",
   "Raportul 60/40 este inversat în această opțiune.",
   "Lungimea ciclului este călcâi-călcâi ipsilateral; lungimea pasului este distanța (începută pe pagina aceasta, distinctă de ciclu)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește 60%/40% și confundă lungimea pasului cu lungimea ciclului ipsilateral."
  },
  "textbookExpressions": [
   "60% din ciclu",
   "atingerea călcâiului"
  ]
 },
 {
  "id": "ortopedie-adv-101",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Etiologia durerii lombare joase:",
  "options": [
   "În 80–90% dintre cazuri etiologia este necunoscută, patogenia rămânând neelucidată",
   "Mai puțin de 10% dintre pacienți au durere iradiată în teritoriul sciatic (L5–S3)",
   "Numai 1–2% dintre pacienți necesită tratament chirurgical pentru hernie de disc",
   "Majoritatea lombalgiilor se datorează unui „disc alunecat”, indicația chirurgicală fiind regula",
   "Peste 50% necesită discectomie în primele 2 săptămâni"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În 80–90% dintre cazuri etiologia este necunoscută, patogenia rămânând neelucidată — Corect: Intervalul 80–90% cu etiologie necunoscută este explicit.\n\nMai puțin de 10% dintre pacienți au durere iradiată în teritoriul sciatic (L5–S3) — Corect: Pragul sub 10% pentru iradierea sciatică este citat.\n\nNumai 1–2% dintre pacienți necesită tratament chirurgical pentru hernie de disc — Corect: Doar 1–2% ajung la chirurgie pentru hernie.\n\nMajoritatea lombalgiilor se datorează unui „disc alunecat”, indicația chirurgicală fiind regula — Incorect: Textul respinge opinia că majoritatea ar fi „disc alunecat”.\n\nPeste 50% necesită discectomie în primele 2 săptămâni — Incorect: 50% se ameliorează în 2 săptămâni cu tratament simptomatic, nu prin discectomie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 623, Lombalgia — Cauze necunoscute, sciatică, chirurgie (pagini PDF: 295).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    623
   ],
   "pdfPages": [
    295
   ],
   "section": "Lombalgia — Cauze necunoscute, sciatică, chirurgie"
  },
  "learningObjective": "Contrastarea necunoscutei de 80–90% cu sciatica <10% și cu chirurgia de 1–2%, opus mitului discului alunecat.",
  "optionRationales": [
   "Intervalul 80–90% cu etiologie necunoscută este explicit.",
   "Pragul sub 10% pentru iradierea sciatică este citat.",
   "Doar 1–2% ajung la chirurgie pentru hernie.",
   "Textul respinge opinia că majoritatea ar fi „disc alunecat”.",
   "50% se ameliorează în 2 săptămâni cu tratament simptomatic, nu prin discectomie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă excepția chirurgicală 1–2% în regulă și atribuie majoritatea cazurilor discului herniat."
  },
  "textbookExpressions": [
   "80--90%",
   "1-2%"
  ]
 },
 {
  "id": "ortopedie-adv-102",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Cu tratament simptomatic, ameliorarea durerii lombare joase se produce în:",
  "options": [
   "50% dintre cazuri în 2 săptămâni și 90% în 3 luni",
   "10% în 2 săptămâni, restul impunând chirurgie",
   "90% în 48 de ore, analog claudicației vasculare",
   "1–2% în 3 luni, ponderea celor operați",
   "Nicio ameliorare spontană, orteza fiind necesară până la maturitate, ca în scolioză"
  ],
  "correct": [
   0
  ],
  "explanation": "50% dintre cazuri în 2 săptămâni și 90% în 3 luni — Corect: Cele două procente și ferestrele temporale sunt enunțate explicit.\n\n10% în 2 săptămâni, restul impunând chirurgie — Incorect: Ameliorarea este regula, nu excepția de 10%.\n\n90% în 48 de ore, analog claudicației vasculare — Incorect: 48 de ore este fereastra claudicației vasculare, nu a lombalgiei.\n\n1–2% în 3 luni, ponderea celor operați — Incorect: 1–2% este ponderea chirurgicală, nu rata de ameliorare.\n\nNicio ameliorare spontană, orteza fiind necesară până la maturitate, ca în scolioză — Incorect: Orteza până la maturitate ține de scolioza adolescentului, nu de contractura lombară.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 623, Lombalgia — Istoria naturală (pagini PDF: 295).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    623
   ],
   "pdfPages": [
    295
   ],
   "section": "Lombalgia — Istoria naturală"
  },
  "learningObjective": "Reținerea ferestrelor 50% la 2 săptămâni și 90% la 3 luni, distincte de 1–2% chirurgie și de 80% rezoluție la 6 săptămâni a durerii mecanice.",
  "optionRationales": [
   "Cele două procente și ferestrele temporale sunt enunțate explicit.",
   "Ameliorarea este regula, nu excepția de 10%.",
   "48 de ore este fereastra claudicației vasculare, nu a lombalgiei.",
   "1–2% este ponderea chirurgicală, nu rata de ameliorare.",
   "Orteza până la maturitate ține de scolioza adolescentului, nu de contractura lombară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 50%/2 săptămâni și 90%/3 luni cu 1–2% chirurgie sau cu 48 de ore vasculare."
  },
  "textbookExpressions": [
   "50% se ameliorează",
   "90% în 3 luni"
  ]
 },
 {
  "id": "ortopedie-adv-103",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Osteomielita cronică și infecția de implant:",
  "options": [
   "Bacteriile izolate de un sechestru osos avascular rămân latente și se pot reactiva după mulți ani, cu traiect de drenaj",
   "Tratamentul eficient al implantului infectat este îndepărtarea chirurgicală, debridarea și antibioterapia parenterală",
   "S. aureus rămâne principala cauză a infecției osoase la adulți; S. epidermidis poate produce infecții mai puțin virulente",
   "Antibioticele orale fără debridarea sechestrului eradică infecția, implantul putând fi păstrat de rutină",
   "Etiologia piciorului diabetic este monomicrobiană, rezervată Haemophilus influenzae"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Bacteriile izolate de un sechestru osos avascular rămân latente și se pot reactiva după mulți ani, cu traiect de drenaj — Corect: Peretele osos avascular (sechestrul) și latența de ani sunt descrise.\n\nTratamentul eficient al implantului infectat este îndepărtarea chirurgicală, debridarea și antibioterapia parenterală — Corect: Triada explantare–debridare–antibiotic parenteral este explicită.\n\nS. aureus rămâne principala cauză a infecției osoase la adulți; S. epidermidis poate produce infecții mai puțin virulente — Corect: S. aureus ca germen principal adult și S. epidermidis ca variantă mai puțin virulentă sunt citate.\n\nAntibioticele orale fără debridarea sechestrului eradică infecția, implantul putând fi păstrat de rutină — Incorect: Sechestrul trebuie debridat; păstrarea de rutină a implantului nu este tratamentul eficient.\n\nEtiologia piciorului diabetic este monomicrobiană, rezervată Haemophilus influenzae — Incorect: Piciorul diabetic are etiologie mixtă aerobă și anaerobă, nu H. influenzae (copil <3 ani).\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 617, Osteomielita — Sechestru, implant și adult (pagini PDF: 289).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    617
   ],
   "pdfPages": [
    289
   ],
   "section": "Osteomielita — Sechestru, implant și adult"
  },
  "learningObjective": "Recunoașterea sechestrului ca sanctuar, a explantării ca tratament al protezei infectate și a dualității S. aureus/S. epidermidis.",
  "optionRationales": [
   "Peretele osos avascular (sechestrul) și latența de ani sunt descrise.",
   "Triada explantare–debridare–antibiotic parenteral este explicită.",
   "S. aureus ca germen principal adult și S. epidermidis ca variantă mai puțin virulentă sunt citate.",
   "Sechestrul trebuie debridat; păstrarea de rutină a implantului nu este tratamentul eficient.",
   "Piciorul diabetic are etiologie mixtă aerobă și anaerobă, nu H. influenzae (copil <3 ani)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează implantul și neagă sechestrul, apoi atribuie piciorului diabetic spectrul pediatric de H. influenzae."
  },
  "textbookExpressions": [
   "sechestru osos",
   "aureus rămâne"
  ]
 },
 {
  "id": "ortopedie-adv-104",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Contractura lombară (durerea mecanică) și spondiloliza:",
  "options": [
   "Durerea mecanică radiază rar dincolo de genunchi și rămâne localizată la coloană și zona fesieră",
   "Mai mult de 80% dintre aceste probleme se rezolvă în 6 săptămâni de la debut",
   "Spondiloliza este fractura de pars interarticularis, imediat caudal de fațeta superioară, după hiperextensie plus forță rotațională",
   "Durerea mecanică iradiază caracteristic sub genunchi, în teritoriul L5–S3, și impune discectomie",
   "Pars interarticularis este sediul zonei Looser din osteomalacie, nu al fracturii de stres vertebrale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Durerea mecanică radiază rar dincolo de genunchi și rămâne localizată la coloană și zona fesieră — Corect: Iradierea rară dincolo de genunchi este explicită.\n\nMai mult de 80% dintre aceste probleme se rezolvă în 6 săptămâni de la debut — Corect: Fereastra de 6 săptămâni pentru >80% este citată.\n\nSpondiloliza este fractura de pars interarticularis, imediat caudal de fațeta superioară, după hiperextensie plus forță rotațională — Corect: Sediul pars, imediat caudal de fațeta superioară, și cuplul hiperextensie–rotație sunt descrise.\n\nDurerea mecanică iradiază caracteristic sub genunchi, în teritoriul L5–S3, și impune discectomie — Incorect: Iradierea sub genunchi definește sciatica, nu durerea mecanică.\n\nPars interarticularis este sediul zonei Looser din osteomalacie, nu al fracturii de stres vertebrale — Incorect: Zona Looser este a osteomalaciei (col femural, ramuri pubiene), nu pars.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 623, Lombalgia mecanică — Spondiloliză (pars interarticularis) (pagini PDF: 295).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    623
   ],
   "pdfPages": [
    295
   ],
   "section": "Lombalgia mecanică — Spondiloliză (pars interarticularis)"
  },
  "learningObjective": "Contrastarea iradierii scurte (deasupra genunchiului) și a rezoluției în 6 săptămâni cu sediul spondilolizei în pars, nu cu sciatica chirurgicală.",
  "optionRationales": [
   "Iradierea rară dincolo de genunchi este explicită.",
   "Fereastra de 6 săptămâni pentru >80% este citată.",
   "Sediul pars, imediat caudal de fațeta superioară, și cuplul hiperextensie–rotație sunt descrise.",
   "Iradierea sub genunchi definește sciatica, nu durerea mecanică.",
   "Zona Looser este a osteomalaciei (col femural, ramuri pubiene), nu pars."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă durerea mecanică (deasupra genunchiului, 6 săptămâni) în sciatică chirurgicală și mută pars pe zona Looser."
  },
  "textbookExpressions": [
   "pars interarticularis",
   "săptămâni"
  ]
 },
 {
  "id": "ortopedie-adv-105",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Managementul artritei reumatoide avansate și al altor artropatii:",
  "options": [
   "În distrugeri articulare avansate, rupturile tendinoase sunt reparate, iar rezecția artroplastică sau endoprotezarea ajută mobilitatea",
   "Echipa multidisciplinară include reumatolog, chirurg ortoped, fizioterapeut, terapeut ocupațional și asistent social",
   "Anti-TNF au fost adăugați tratamentului artritei inflamatorii sistemice, cu reducere dramatică a durerii la unii pacienți; efectele pe termen lung nu sunt cunoscute",
   "Anti-TNF înlocuiesc de rutină echipa multidisciplinară, efectele pe termen lung fiind bine stabilite",
   "Guta acută se previne cu allopurinol, iar puseul se tratează doar prin decompresie centrală a capului femural"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În distrugeri articulare avansate, rupturile tendinoase sunt reparate, iar rezecția artroplastică sau endoprotezarea ajută mobilitatea — Corect: Repararea tendinoasă și artroplastia/endoprotezarea în stadiul avansat sunt enunțate.\n\nEchipa multidisciplinară include reumatolog, chirurg ortoped, fizioterapeut, terapeut ocupațional și asistent social — Corect: Componența echipei este enumerată.\n\nAnti-TNF au fost adăugați tratamentului artritei inflamatorii sistemice, cu reducere dramatică a durerii la unii pacienți; efectele pe termen lung nu sunt cunoscute — Corect: Reducerea dramatică a durerii și necunoașterea efectelor de lungă durată sunt explicite.\n\nAnti-TNF înlocuiesc de rutină echipa multidisciplinară, efectele pe termen lung fiind bine stabilite — Incorect: Anti-TNF se adaugă tratamentului, nu înlocuiesc echipa; prognosticul lung nu este cunoscut.\n\nGuta acută se previne cu allopurinol, iar puseul se tratează doar prin decompresie centrală a capului femural — Incorect: Puseul gutos se tratează cu AINS sau colchicină; decompresia centrală este a osteonecrozei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 621, Artrita reumatoidă — Echipă, anti-TNF și artropatii (pagini PDF: 293).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    621
   ],
   "pdfPages": [
    293
   ],
   "section": "Artrita reumatoidă — Echipă, anti-TNF și artropatii"
  },
  "learningObjective": "Păstrarea echipei multidisciplinare și a incertitudinii pe termen lung a anti-TNF, distincte de cristalele gutei și de decompresia osteonecrozei de pe aceeași pagină.",
  "optionRationales": [
   "Repararea tendinoasă și artroplastia/endoprotezarea în stadiul avansat sunt enunțate.",
   "Componența echipei este enumerată.",
   "Reducerea dramatică a durerii și necunoașterea efectelor de lungă durată sunt explicite.",
   "Anti-TNF se adaugă tratamentului, nu înlocuiesc echipa; prognosticul lung nu este cunoscut.",
   "Puseul gutos se tratează cu AINS sau colchicină; decompresia centrală este a osteonecrozei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă anti-TNF în substitut al echipei, cu siguranță pe termen lung, și mută decompresia capului femural pe guta acută."
  },
  "textbookExpressions": [
   "anti-TNF",
   "echipă multidisciplinară"
  ]
 },
 {
  "id": "ortopedie-adv-106",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Plăgile deschise extinse sau cele apărute în urma activităților din gospodărie, pe lângă cefalosporina de generația I, se tratează în plus cu:",
  "options": [
   "Aminoglicozide și metronidazol",
   "Doar vaccin antitetanic, fără alt antibiotic",
   "Fluorochinolonă orală ca unică acoperire a contaminării ușoare",
   "Antifungice sistemice, analog otitei externe necrotizante",
   "Heparină în doză de embolie grăsoasă, înaintea debridării"
  ],
  "correct": [
   0
  ],
  "explanation": "Aminoglicozide și metronidazol — Corect: Textul cere, pentru leziunile extinse sau din gospodărie, aminoglicozide și metronidazol (Flagyl) pe lângă cefalosporină.\n\nDoar vaccin antitetanic, fără alt antibiotic — Incorect: Antitetanosul este adjunct, nu înlocuiește dublarea antibiotică.\n\nFluorochinolonă orală ca unică acoperire a contaminării ușoare — Incorect: Cefalosporina de generația I intravenos este rezervată contaminării ușoare, nu este înlocuită de o fluorochinolonă orală.\n\nAntifungice sistemice, analog otitei externe necrotizante — Incorect: Antifungicele nu figurează în protocolul fracturii deschise din acest paragraf.\n\nHeparină în doză de embolie grăsoasă, înaintea debridării — Incorect: Embolia grăsoasă se tratează suportiv, nu cu heparină înaintea debridării.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 591, Fracturi deschise — Contaminare extinsă și din gospodărie (pagini PDF: 263).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    591
   ],
   "pdfPages": [
    263
   ],
   "section": "Fracturi deschise — Contaminare extinsă și din gospodărie"
  },
  "learningObjective": "Recunoașterea adaosului de aminoglicozid plus metronidazol la plăgile extinse sau din gospodărie, distinct de cefalosporina de generația I a contaminării ușoare.",
  "optionRationales": [
   "Textul cere, pentru leziunile extinse sau din gospodărie, aminoglicozide și metronidazol (Flagyl) pe lângă cefalosporină.",
   "Antitetanosul este adjunct, nu înlocuiește dublarea antibiotică.",
   "Cefalosporina de generația I intravenos este rezervată contaminării ușoare, nu este înlocuită de o fluorochinolonă orală.",
   "Antifungicele nu figurează în protocolul fracturii deschise din acest paragraf.",
   "Embolia grăsoasă se tratează suportiv, nu cu heparină înaintea debridării."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Adaugă metronidazolul și aminoglicozidul doar la gospodărie/extins, lângă cefalosporina de generația I deja cunoscută."
  },
  "textbookExpressions": [
   "aminoglicozide",
   "metronidazol"
  ]
 },
 {
  "id": "ortopedie-adv-107",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Tracțiunea folosită pentru a obține și menține reducerea unei fracturi:",
  "options": [
   "Tracțiunea transtegumentară este utilă la copiii mici",
   "Tracțiunea transosoasă cere o broșă distal de focar, pentru a depăși contracția mușchilor mari în fracturi pelvine, femurale sau tibiale",
   "În fracturile humerale, greutatea membrului superior distal aplică tracțiune gravitațională dacă corpul este în ortostatism",
   "Tracțiunea transosoasă este metoda de elecție la sugar, tegumentul fiind evitat",
   "Gravitația pe humerus a înlocuit ortezele funcționale, fiind folosită de rutină"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tracțiunea transtegumentară este utilă la copiii mici — Corect: Utilitatea tracțiunii transtegumentare la copiii mici este explicită.\n\nTracțiunea transosoasă cere o broșă distal de focar, pentru a depăși contracția mușchilor mari în fracturi pelvine, femurale sau tibiale — Corect: Broșa distală și forțele pe pelvis, femur sau tibie sunt descrise.\n\nÎn fracturile humerale, greutatea membrului superior distal aplică tracțiune gravitațională dacă corpul este în ortostatism — Corect: Tracțiunea gravitațională a humerusului în ortostatism, eventual cu gips pe antebraț, este enunțată.\n\nTracțiunea transosoasă este metoda de elecție la sugar, tegumentul fiind evitat — Incorect: La copiii mici se preferă tegumentul, nu broșa transosoasă.\n\nGravitația pe humerus a înlocuit ortezele funcționale, fiind folosită de rutină — Incorect: Textul precizează că tehnica gravitațională este foarte rar folosită și în mare parte înlocuită de orteze.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 591, 593, Menținerea reducerii — Tracțiune tegumentară, transosoasă și gravitațională (pagini PDF: 263, 265).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    591,
    593
   ],
   "pdfPages": [
    263,
    265
   ],
   "section": "Menținerea reducerii — Tracțiune tegumentară, transosoasă și gravitațională"
  },
  "learningObjective": "Diferențierea tracțiunii pe piele la copilul mic, a broșei distale la pelvis/femur/tibie și a greutății brațului în fractura de humerus.",
  "optionRationales": [
   "Utilitatea tracțiunii transtegumentare la copiii mici este explicită.",
   "Broșa distală și forțele pe pelvis, femur sau tibie sunt descrise.",
   "Tracțiunea gravitațională a humerusului în ortostatism, eventual cu gips pe antebraț, este enunțată.",
   "La copiii mici se preferă tegumentul, nu broșa transosoasă.",
   "Textul precizează că tehnica gravitațională este foarte rar folosită și în mare parte înlocuită de orteze."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează indicația pediatrică (piele versus broșă) și tratează gravitația humerală ca standard actual, deși textul o declară aproape abandonată."
  },
  "textbookExpressions": [
   "Tracţiunea transtegumentară",
   "fracturile humerale"
  ]
 },
 {
  "id": "ortopedie-adv-108",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Dispozitivele de fixare internă, ca „atelă internă”, se caracterizează prin:",
  "options": [
   "Mențin doar poziția fragmentelor până la vindecare; prezența implantului nu garantează consolidarea",
   "Încărcarea ciclică a unui implant, dacă fractura nu consolidează, duce la slăbirea sau degradarea acestuia",
   "După îndepărtare, osul se poate refractura la orificiile șuruburilor, mai ales în corticala diafizară",
   "Fixarea internă înlocuiește mecanismele fiziologice de vindecare, deci cursa implant–calus dispare",
   "Refractura după explantare este tipică osului metafizar spongios, nu corticalei diafizare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mențin doar poziția fragmentelor până la vindecare; prezența implantului nu garantează consolidarea — Corect: Comparația cu atela internă și absența garanției de vindecare sunt explicite.\n\nÎncărcarea ciclică a unui implant, dacă fractura nu consolidează, duce la slăbirea sau degradarea acestuia — Corect: Încărcarea repetitivă care slăbește implantul dacă nu există consolidare este enunțată.\n\nDupă îndepărtare, osul se poate refractura la orificiile șuruburilor, mai ales în corticala diafizară — Corect: Refractura la orificiile șuruburilor, mai ales diafizar cortical, figurează pe pagina următoare.\n\nFixarea internă înlocuiește mecanismele fiziologice de vindecare, deci cursa implant–calus dispare — Incorect: Textul cere respectarea mecanismelor fiziologice; implantul nu le înlocuiește.\n\nRefractura după explantare este tipică osului metafizar spongios, nu corticalei diafizare — Incorect: Riscul de refractură este localizat explicit în osul cortical diafizar.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 591, 592, Fixarea internă — Cursa vindecare versus degradarea implantului (pagini PDF: 263, 264).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    591,
    592
   ],
   "pdfPages": [
    263,
    264
   ],
   "section": "Fixarea internă — Cursa vindecare versus degradarea implantului"
  },
  "learningObjective": "Recunoașterea implantului ca atelă internă, a cursei cu degradarea ciclică și a refracturii la găurile de șurub din corticala diafizară.",
  "optionRationales": [
   "Comparația cu atela internă și absența garanției de vindecare sunt explicite.",
   "Încărcarea repetitivă care slăbește implantul dacă nu există consolidare este enunțată.",
   "Refractura la orificiile șuruburilor, mai ales diafizar cortical, figurează pe pagina următoare.",
   "Textul cere respectarea mecanismelor fiziologice; implantul nu le înlocuiește.",
   "Riscul de refractură este localizat explicit în osul cortical diafizar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă cursa vindecare–implant și mută refractura din corticala diafizară pe spongiosul metafizar."
  },
  "textbookExpressions": [
   "atelă internă",
   "orificiilor şuruburilor"
  ]
 },
 {
  "id": "ortopedie-adv-109",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Viteza și succesul vindecării unei fracturi sunt influențate de:",
  "options": [
   "Nivelul de energie al traumatismului: fracturile deschise, cominutive și cu deplasare se vindecă lent",
   "Tipul de os (spongios sau cortical) și integritatea țesutului moale",
   "Starea generală, statusul nutrițional și vârsta: copiii se vindecă mai rapid decât adulții",
   "Clinic, vindecarea este evidentă când nu mai este prezentă durerea la palpare și nu mai există mișcări în focar",
   "Radiologic, vindecarea se recunoaște prin absența oricărui trabecul care să traverseze focarul"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Nivelul de energie al traumatismului: fracturile deschise, cominutive și cu deplasare se vindecă lent — Corect: Energia mare (deschise, cominutive, deplasate) ca factor de vindecare lentă este explicită.\n\nTipul de os (spongios sau cortical) și integritatea țesutului moale — Corect: Tipul de os și țesutul moale sunt enumerați.\n\nStarea generală, statusul nutrițional și vârsta: copiii se vindecă mai rapid decât adulții — Corect: Nutriția și vindecarea mai rapidă a copiilor sunt citate.\n\nClinic, vindecarea este evidentă când nu mai este prezentă durerea la palpare și nu mai există mișcări în focar — Corect: Clinic, vindecarea cere dispariția durerii la palpare și a mișcării în focar.\n\nRadiologic, vindecarea se recunoaște prin absența oricărui trabecul care să traverseze focarul — Incorect: Radiologic se observă trabecule osoase distincte care traversează sediul fracturii.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 593, Vindecarea fracturii — Factori de ritm, clinic și radiologic (pagini PDF: 265).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    593
   ],
   "pdfPages": [
    265
   ],
   "section": "Vindecarea fracturii — Factori de ritm, clinic și radiologic"
  },
  "learningObjective": "Integrarea energiei, a tipului de os și a vârstei cu semnele de consolidare (fără durere, fără mobilitate; trabecule care traversează).",
  "optionRationales": [
   "Energia mare (deschise, cominutive, deplasate) ca factor de vindecare lentă este explicită.",
   "Tipul de os și țesutul moale sunt enumerați.",
   "Nutriția și vindecarea mai rapidă a copiilor sunt citate.",
   "Clinic, vindecarea cere dispariția durerii la palpare și a mișcării în focar.",
   "Radiologic se observă trabecule osoase distincte care traversează sediul fracturii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează semnele clinice și radiologice de consolidare, lăsând factorii de energie și vârstă ca near-miss-uri corecte."
  },
  "textbookExpressions": [
   "cominutive",
   "trabecule osoase"
  ]
 },
 {
  "id": "ortopedie-adv-110",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Pe lângă eșecul non-operator și fracturile intra-articulare, tabelul 28-2 include ca indicații de fixare internă:",
  "options": [
   "Fracturi pe os patologic",
   "Fracturi multiple pe aceeași extremitate sau la același pacient",
   "Fracturi la paraplegici, pentru a favoriza îngrijirea",
   "Fracturi infectate, ca metodă de elecție în locul fixatorului extern",
   "Fracturi deschise instabile, pentru a evita debridarea plăgii"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Fracturi pe os patologic — Corect: Fracturile pe os patologic figurează explicit în tabel.\n\nFracturi multiple pe aceeași extremitate sau la același pacient — Corect: Fracturile multiple pe aceeași extremitate sau la același pacient sunt citate.\n\nFracturi la paraplegici, pentru a favoriza îngrijirea — Corect: Paraplegicii sunt indicație pentru a favoriza îngrijirea.\n\nFracturi infectate, ca metodă de elecție în locul fixatorului extern — Incorect: Fracturile infectate țin de tabelul 28-3 (fixare externă).\n\nFracturi deschise instabile, pentru a evita debridarea plăgii — Incorect: Fracturile deschise instabile sunt indicație de fixator extern, nu intern de primă intenție.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 594, Fixarea internă — Tabelul 28-2, indicații suplimentare (pagini PDF: 266).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    594
   ],
   "pdfPages": [
    266
   ],
   "section": "Fixarea internă — Tabelul 28-2, indicații suplimentare"
  },
  "learningObjective": "Recunoașterea osului patologic, a fracturilor multiple și a paraplegicului ca indicații de osteosinteză internă, distincte de tabelul 28-3 (infectate, deschise).",
  "optionRationales": [
   "Fracturile pe os patologic figurează explicit în tabel.",
   "Fracturile multiple pe aceeași extremitate sau la același pacient sunt citate.",
   "Paraplegicii sunt indicație pentru a favoriza îngrijirea.",
   "Fracturile infectate țin de tabelul 28-3 (fixare externă).",
   "Fracturile deschise instabile sunt indicație de fixator extern, nu intern de primă intenție."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută indicațiile tabelului 28-3 (infectate, deschise) peste cele rămase din 28-2 (patologic, multiple, paraplegic)."
  },
  "textbookExpressions": [
   "os patologic",
   "paraplegici"
  ]
 },
 {
  "id": "ortopedie-adv-111",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Indicațiile de fixare externă, dincolo de fracturile deschise instabile și pelvine, includ:",
  "options": [
   "Fracturi infectate",
   "Fracturi cominutive severe sau instabile la care nu se poate practica fixarea internă",
   "Fracturi cu pierdere osoasă, în care lungimea trebuie menținută până la grefă",
   "Fracturi nedeplasate de scafoid, în locul atelei gipsate",
   "Fracturi pe os patologic de col femural, ca alternativă la hemiartroplastie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Fracturi infectate — Corect: Fracturile infectate figurează explicit.\n\nFracturi cominutive severe sau instabile la care nu se poate practica fixarea internă — Corect: Cominuția severă când fixarea internă nu este posibilă este citată.\n\nFracturi cu pierdere osoasă, în care lungimea trebuie menținută până la grefă — Corect: Pierderea osoasă cu menținerea lungimii până la grefă este enunțată.\n\nFracturi nedeplasate de scafoid, în locul atelei gipsate — Incorect: Scafoidul nedeplasat se imobilizează în atelă gipsată.\n\nFracturi pe os patologic de col femural, ca alternativă la hemiartroplastie — Incorect: Osul patologic de col femural este indicație de fixare internă sau hemiartroplastie, nu de fixator ca primă linie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 594, Fixarea externă — Tabelul 28-3, indicații rămase (pagini PDF: 266).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    594
   ],
   "pdfPages": [
    266
   ],
   "section": "Fixarea externă — Tabelul 28-3, indicații rămase"
  },
  "learningObjective": "Completarea tabelului 28-3 cu infecția, cominuția ireductibilă intern și menținerea lungimii până la grefă.",
  "optionRationales": [
   "Fracturile infectate figurează explicit.",
   "Cominuția severă când fixarea internă nu este posibilă este citată.",
   "Pierderea osoasă cu menținerea lungimii până la grefă este enunțată.",
   "Scafoidul nedeplasat se imobilizează în atelă gipsată.",
   "Osul patologic de col femural este indicație de fixare internă sau hemiartroplastie, nu de fixator ca primă linie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde fixatorul la scafoid și col patologic, două entități tratate intern sau conservator în același capitol."
  },
  "textbookExpressions": [
   "Fracturi infectate",
   "grefe osoase"
  ]
 },
 {
  "id": "ortopedie-adv-112",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Pacienții cu luxații post-traumatice ale șoldului dezvoltă, de regulă, coxartroză la:",
  "options": [
   "10–20 de ani mai târziu",
   "6 săptămâni, analog contracturii lombare mecanice",
   "8–12 ore, fereastra de necroză avasculară, nu de artroză",
   "2 zile, intervalul calusului moale",
   "Un an, controlul radiologic al plăcii de creștere"
  ],
  "correct": [
   0
  ],
  "explanation": "10–20 de ani mai târziu — Corect: Textul plasează coxartroza, de regulă, la 10–20 de ani după luxația post-traumatică de șold.\n\n6 săptămâni, analog contracturii lombare mecanice — Incorect: 6 săptămâni este evoluția durerii mecanice lombare, nu a coxartrozei.\n\n8–12 ore, fereastra de necroză avasculară, nu de artroză — Incorect: 8–12 ore este fereastra de necroză avasculară dacă reducerea întârzie.\n\n2 zile, intervalul calusului moale — Incorect: 2 zile–6 săptămâni este calusul moale.\n\nUn an, controlul radiologic al plăcii de creștere — Incorect: Un an este controlul radiologic al fracturilor de placă de creștere.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 594, Artroza post-traumatică — Fereastra 10–20 de ani după luxația de șold (pagini PDF: 266).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    594
   ],
   "pdfPages": [
    266
   ],
   "section": "Artroza post-traumatică — Fereastra 10–20 de ani după luxația de șold"
  },
  "learningObjective": "Separarea decadei 10–20 de ani a coxartrozei post-luxație de ferestrele scurte (NAV 8–12 ore, calus, controlul de 1 an).",
  "optionRationales": [
   "Textul plasează coxartroza, de regulă, la 10–20 de ani după luxația post-traumatică de șold.",
   "6 săptămâni este evoluția durerii mecanice lombare, nu a coxartrozei.",
   "8–12 ore este fereastra de necroză avasculară dacă reducerea întârzie.",
   "2 zile–6 săptămâni este calusul moale.",
   "Un an este controlul radiologic al fracturilor de placă de creștere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 10–20 de ani cu 8–12 ore (NAV) și cu alte ferestre din același capitol."
  },
  "textbookExpressions": [
   "I 0-20 de ani",
   "coxartroză"
  ]
 },
 {
  "id": "ortopedie-adv-113",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Fractura de olecran, după cădere pe cot, se caracterizează prin:",
  "options": [
   "Deplasare prin contracția tricepsului brahial, cu pierderea extensiei active a cotului",
   "Interesarea suprafețelor articulare; orice deplasare impune chirurgie pentru a reface articulația și integritatea tricepsului",
   "Tratament prin supinație și flexie ușoară, analog pronației dureroase a copilului",
   "Imobilizare în atelă de la cot la palmă, ca în Colles, fără a reface tricepsul",
   "Fasciotomie de compartiment anterior, analog sindromului de efort"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Deplasare prin contracția tricepsului brahial, cu pierderea extensiei active a cotului — Corect: Contracția tricepsului și pierderea extensiei active sunt explicite.\n\nInteresarea suprafețelor articulare; orice deplasare impune chirurgie pentru a reface articulația și integritatea tricepsului — Corect: Interesarea articulară și chirurgia pentru deplasare sunt enunțate.\n\nTratament prin supinație și flexie ușoară, analog pronației dureroase a copilului — Incorect: Flexia ușoară cu supinație tratează pronația dureroasă, nu olecranul.\n\nImobilizare în atelă de la cot la palmă, ca în Colles, fără a reface tricepsul — Incorect: Atela cot-palmă este a fracturii Colles.\n\nFasciotomie de compartiment anterior, analog sindromului de efort — Incorect: Fasciotomia nu reface tricepsul rupt de pe olecran.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 596, Fractura de olecran — Triceps și suprafața articulară (pagini PDF: 268).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    596
   ],
   "pdfPages": [
    268
   ],
   "section": "Fractura de olecran — Triceps și suprafața articulară"
  },
  "learningObjective": "Recunoașterea deplasării prin triceps, cu pierderea extensiei active, și a indicației chirurgicale pentru orice deplasare articulară.",
  "optionRationales": [
   "Contracția tricepsului și pierderea extensiei active sunt explicite.",
   "Interesarea articulară și chirurgia pentru deplasare sunt enunțate.",
   "Flexia ușoară cu supinație tratează pronația dureroasă, nu olecranul.",
   "Atela cot-palmă este a fracturii Colles.",
   "Fasciotomia nu reface tricepsul rupt de pe olecran."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește refacerea tricepsului cu manevra de pronație dureroasă sau cu atela Colles, două gesturi învecinate pe aceeași pagină."
  },
  "textbookExpressions": [
   "olecran",
   "triceps brahial"
  ]
 },
 {
  "id": "ortopedie-adv-114",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Dacă ischemia musculară a antebrațului depășește 8 ore, revascularizarea membrului produce:",
  "options": [
   "Complicații sistemice prin hiperpotasemie și eliberare de mioglobină",
   "Doar o contractură Volkmann reversibilă, fără risc metabolic",
   "Embolie grăsoasă cu peteșii, analog fracturilor de oase lungi",
   "Osteonecroză a scafoidului, prin acoperire cartilaginoasă",
   "Calus vicios cubital, corectat prin osteotomie"
  ],
  "correct": [
   0
  ],
  "explanation": "Complicații sistemice prin hiperpotasemie și eliberare de mioglobină — Corect: Textul leagă ischemia peste 8 ore de leziune musculară ireversibilă și de complicații sistemice (hiperpotasemie, mioglobină) la revascularizare.\n\nDoar o contractură Volkmann reversibilă, fără risc metabolic — Incorect: Peste 8 ore leziunea nu mai este reversibilă.\n\nEmbolie grăsoasă cu peteșii, analog fracturilor de oase lungi — Incorect: Embolia grăsoasă este o complicație sistemică a fracturilor de oase lungi, nu a revascularizării de compartiment.\n\nOsteonecroză a scafoidului, prin acoperire cartilaginoasă — Incorect: Scafoidul este vulnerabil la osteonecroză post-fractură, nu la ischemia de 8 ore a flexorilor.\n\nCalus vicios cubital, corectat prin osteotomie — Incorect: Calusul vicios este o complicație de aliniere, nu metabolică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 596, Contractura ischemică — Pragul de 8 ore și revascularizarea (pagini PDF: 268).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    596
   ],
   "pdfPages": [
    268
   ],
   "section": "Contractura ischemică — Pragul de 8 ore și revascularizarea"
  },
  "learningObjective": "Recunoașterea pragului de peste 8 ore ca ischemie ireversibilă, cu hiperpotasemie și mioglobină la revascularizare, dincolo de pragul de 2 ore al leziunii musculare permanente.",
  "optionRationales": [
   "Textul leagă ischemia peste 8 ore de leziune musculară ireversibilă și de complicații sistemice (hiperpotasemie, mioglobină) la revascularizare.",
   "Peste 8 ore leziunea nu mai este reversibilă.",
   "Embolia grăsoasă este o complicație sistemică a fracturilor de oase lungi, nu a revascularizării de compartiment.",
   "Scafoidul este vulnerabil la osteonecroză post-fractură, nu la ischemia de 8 ore a flexorilor.",
   "Calusul vicios este o complicație de aliniere, nu metabolică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă pragul de 8 ore (hiperK, mioglobină) cu embolia grăsoasă sau cu osteonecroza scafoidului din același capitol."
  },
  "textbookExpressions": [
   "8 ore",
   "mioglobină"
  ]
 },
 {
  "id": "ortopedie-adv-115",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Sindromul umăr-mână, complicație a fracturii Colles la vârstnici:",
  "options": [
   "Asociază redoarea umărului și a degetelor din cauza imobilizării prelungite",
   "Se previne prin exerciții ale umărului și ale degetelor din fazele incipiente de vindecare",
   "Diformitatea Colles tinde să reapară din cauza cominuției corticale dorsale",
   "Nervul ulnar, pe fața dorsală, este structura de examinat înainte și după reducere",
   "Radiografia de control se amână 6 luni, analog urmăririi plăcii de creștere"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Asociază redoarea umărului și a degetelor din cauza imobilizării prelungite — Corect: Redoarea umărului și a degetelor prin imobilizare prelungită definește sindromul.\n\nSe previne prin exerciții ale umărului și ale degetelor din fazele incipiente de vindecare — Corect: Exercițiile umărului și degetelor din fazele incipiente sunt cerute.\n\nDiformitatea Colles tinde să reapară din cauza cominuției corticale dorsale — Corect: Tendința de reapariție a diformității prin cominuție dorsală este explicită.\n\nNervul ulnar, pe fața dorsală, este structura de examinat înainte și după reducere — Incorect: Nervul median, pe fața volară a pumnului, trebuie examinat, nu ulnarul dorsal.\n\nRadiografia de control se amână 6 luni, analog urmăririi plăcii de creștere — Incorect: Radiografia de control este la 10 zile, nu la 6 luni.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 596, Fractura Colles — Sindromul umăr-mână și cominuția dorsală (pagini PDF: 268).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    596
   ],
   "pdfPages": [
    268
   ],
   "section": "Fractura Colles — Sindromul umăr-mână și cominuția dorsală"
  },
  "learningObjective": "Cuplarea redoarei umăr-degete cu exercițiile precoce și cu tendința de redislocare prin cominuție corticală dorsală.",
  "optionRationales": [
   "Redoarea umărului și a degetelor prin imobilizare prelungită definește sindromul.",
   "Exercițiile umărului și degetelor din fazele incipiente sunt cerute.",
   "Tendința de reapariție a diformității prin cominuție dorsală este explicită.",
   "Nervul median, pe fața volară a pumnului, trebuie examinat, nu ulnarul dorsal.",
   "Radiografia de control este la 10 zile, nu la 6 luni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă nervul median volar cu ulnarul și amână controlul de la 10 zile la 6 luni, lângă sindromul umăr-mână."
  },
  "textbookExpressions": [
   "umăr-mână",
   "cominuţiei corticale dorsale"
  ]
 },
 {
  "id": "ortopedie-adv-116",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Mecanismul unei fracturi de gleznă se deduce din planul traiectului. Sunt adevărate:",
  "options": [
   "Traiectul transversal al maleolei mediale sugerează abducție (eversiune sau pronație) a piciorului pe gambă",
   "Traiectul transversal al maleolei laterale sugerează adducție (inversiune sau supinație)",
   "Fractura trimalleolară adaugă un fragment tibial posterior, prin încărcare verticală a gleznei în flexie plantară",
   "Traiectul transversal al maleolei mediale definește inversiunea, analog adducției din figura 28-20A",
   "Fragmentul posterior apare pe radiografia AP, nu pe profil, și exclude încărcarea verticală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Traiectul transversal al maleolei mediale sugerează abducție (eversiune sau pronație) a piciorului pe gambă — Corect: Transversala maleolei mediale ca abducție/eversiune/pronație este explicită.\n\nTraiectul transversal al maleolei laterale sugerează adducție (inversiune sau supinație) — Corect: Transversala lateralei ca adducție/inversiune/supinație este enunțată.\n\nFractura trimalleolară adaugă un fragment tibial posterior, prin încărcare verticală a gleznei în flexie plantară — Corect: Trimalleolara prin fragment tibial posterior și încărcare verticală în flexie plantară este descrisă.\n\nTraiectul transversal al maleolei mediale definește inversiunea, analog adducției din figura 28-20A — Incorect: Transversala medială este a eversiunii, nu a inversiunii.\n\nFragmentul posterior apare pe radiografia AP, nu pe profil, și exclude încărcarea verticală — Incorect: Fragmentul posterior se vede cel mai bine pe profil.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 599, Fracturile gleznei — Planul traiectului și trimalleolara (pagini PDF: 271).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    599
   ],
   "pdfPages": [
    271
   ],
   "section": "Fracturile gleznei — Planul traiectului și trimalleolara"
  },
  "learningObjective": "Maparea transversalei mediale pe eversiune, a celei laterale pe inversiune și a maleolei posterioare pe încărcarea verticală în flexie plantară.",
  "optionRationales": [
   "Transversala maleolei mediale ca abducție/eversiune/pronație este explicită.",
   "Transversala lateralei ca adducție/inversiune/supinație este enunțată.",
   "Trimalleolara prin fragment tibial posterior și încărcare verticală în flexie plantară este descrisă.",
   "Transversala medială este a eversiunii, nu a inversiunii.",
   "Fragmentul posterior se vede cel mai bine pe profil."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește eversiunea (maleolă medială transversală) cu inversiunea și mută fragmentul posterior de pe profil pe AP."
  },
  "textbookExpressions": [
   "maleolă medială",
   "trimaleolară"
  ]
 },
 {
  "id": "ortopedie-adv-117",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "În fracturile de coloană, sunt adevărate:",
  "options": [
   "Coloana este instabilă dacă mișcările neprotejate produc deplasări care pot compromite structurile nervoase",
   "La inconștient sau la leziuni deasupra claviculei (faciale), coloana cervicală se presupune lezată până la proba contrarie",
   "Fracturile minore de compresie toraco-lombare asociază frecvent ileus prin hemoragie retroperitoneală; alimentația enterală se amână până la remitere",
   "Ileusul cere alimentație enterală imediată, pentru a preveni atrofia paravertebrală",
   "La paraplegic, absența sensibilității face superfluă examinarea sistematică a viscerelor"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Coloana este instabilă dacă mișcările neprotejate produc deplasări care pot compromite structurile nervoase — Corect: Definiția instabilității prin risc neurologic la mișcare neprotejată este explicită.\n\nLa inconștient sau la leziuni deasupra claviculei (faciale), coloana cervicală se presupune lezată până la proba contrarie — Corect: Presupunerea leziunii cervicale până la proba contrarie este enunțată.\n\nFracturile minore de compresie toraco-lombare asociază frecvent ileus prin hemoragie retroperitoneală; alimentația enterală se amână până la remitere — Corect: Ileusul prin hemoragie retroperitoneală și amânarea alimentației sunt descrise.\n\nIleusul cere alimentație enterală imediată, pentru a preveni atrofia paravertebrală — Incorect: Alimentația enterală se amână, nu se forțează.\n\nLa paraplegic, absența sensibilității face superfluă examinarea sistematică a viscerelor — Incorect: La paraplegic, semnele altor leziuni sunt mascate; examinarea sistematică a structurilor vitale este obligatoriu clinic, dar cuvântul interzis nu apare în opțiune: textul cere totuși examinarea amănunțită.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 599, Fracturile de coloană — Instabilitate, cervical ocult și ileus (pagini PDF: 271).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    599
   ],
   "pdfPages": [
    271
   ],
   "section": "Fracturile de coloană — Instabilitate, cervical ocult și ileus"
  },
  "learningObjective": "Aplicarea definiției instabilității, a presupunerii cervicale la trauma facială/inconștiență și a ileusului prin hemom retroperitoneal.",
  "optionRationales": [
   "Definiția instabilității prin risc neurologic la mișcare neprotejată este explicită.",
   "Presupunerea leziunii cervicale până la proba contrarie este enunțată.",
   "Ileusul prin hemoragie retroperitoneală și amânarea alimentației sunt descrise.",
   "Alimentația enterală se amână, nu se forțează.",
   "La paraplegic, semnele altor leziuni sunt mascate; examinarea sistematică a structurilor vitale este obligatoriu clinic, dar cuvântul interzis nu apare în opțiune: textul cere totuși examinarea amănunțită."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Forțează alimentația în ileus și anulează examenul viscerelor la paraplegic, două capcane de trauma spinală."
  },
  "textbookExpressions": [
   "ileus",
   "deasupra claviculei"
  ]
 },
 {
  "id": "ortopedie-adv-118",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Rezultatele reimplantării digitale, dincolo de ferestrele de ischemie, includ:",
  "options": [
   "Dintre reimplantările digitale, 85% rămân viabile",
   "Mișcările articulare păstrează circa 50% din funcția normală",
   "Toate degetele devin intolerante la frig cel puțin 2 ani, iar 80% dintre epifize continuă să crească",
   "La copii, amputațiile la orice nivel au o șansă mare de reimplantare cu succes",
   "Gheața uscată prelungește viabilitatea peste 16 ore, fără risc de degerătură"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Dintre reimplantările digitale, 85% rămân viabile — Corect: Rata de 85% viabilitate digitală este explicită.\n\nMișcările articulare păstrează circa 50% din funcția normală — Corect: Cei 50% din funcția articulară sunt citați.\n\nToate degetele devin intolerante la frig cel puțin 2 ani, iar 80% dintre epifize continuă să crească — Corect: Intoleranța la frig cel puțin 2 ani și cei 80% de epifize care cresc sunt enunțate.\n\nLa copii, amputațiile la orice nivel au o șansă mare de reimplantare cu succes — Corect: La copii, amputațiile la orice nivel au o șansă mare de reimplantare cu succes.\n\nGheața uscată prelungește viabilitatea peste 16 ore, fără risc de degerătură — Incorect: Gheața uscată produce degerături; se folosește apă cu gheață.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 600, Reimplantarea — 85% viabilitate, 50% mișcare, intoleranță la frig (pagini PDF: 272).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    600
   ],
   "pdfPages": [
    272
   ],
   "section": "Reimplantarea — 85% viabilitate, 50% mișcare, intoleranță la frig"
  },
  "learningObjective": "Memorarea ratelor 85%/50%/80% și a intoleranței la frig de 2 ani, plus succesul pediatric la orice nivel, versus gheața uscată interzisă.",
  "optionRationales": [
   "Rata de 85% viabilitate digitală este explicită.",
   "Cei 50% din funcția articulară sunt citați.",
   "Intoleranța la frig cel puțin 2 ani și cei 80% de epifize care cresc sunt enunțate.",
   "La copii, amputațiile la orice nivel au o șansă mare de reimplantare cu succes.",
   "Gheața uscată produce degerături; se folosește apă cu gheață."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reintroduce gheața uscată ca metodă de transport, deși textul o interzice explicit din cauza degerăturilor."
  },
  "textbookExpressions": [
   "85% rămân viabile",
   "2 ani"
  ]
 },
 {
  "id": "ortopedie-adv-119",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Epicondilita laterală (cotul tenismenului):",
  "options": [
   "Este o leziune de suprasolicitare la originea mușchilor extensori ai pumnului pe epicondilul lateral",
   "Tratamentul conservator include repaus, căldură, AINS, întinderea extensorilor și întărirea flexorilor antagonici",
   "Când este necesară chirurgia, se identifică și se excizează țesut de granulație cronic la originea extensorului radial al carpului",
   "Originea lezată este a flexorilor pumnului pe epicondilul medial, analog golf-ului",
   "Chirurgia de primă intenție precede orice întindere a extensorilor"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este o leziune de suprasolicitare la originea mușchilor extensori ai pumnului pe epicondilul lateral — Corect: Originea extensorilor pumnului pe epicondilul lateral este explicită.\n\nTratamentul conservator include repaus, căldură, AINS, întinderea extensorilor și întărirea flexorilor antagonici — Corect: Lista conservatoare, inclusiv întărirea flexorilor, este enumerată.\n\nCând este necesară chirurgia, se identifică și se excizează țesut de granulație cronic la originea extensorului radial al carpului — Corect: Granulația de la originea extensorului radial al carpului este sediul chirurgical.\n\nOriginea lezată este a flexorilor pumnului pe epicondilul medial, analog golf-ului — Incorect: Epicondilul medial și flexorii nu sunt leziunea descrisă ca tenismen.\n\nChirurgia de primă intenție precede orice întindere a extensorilor — Incorect: Chirurgia este rezervată puținele cazuri neresponsive.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 602, Leziuni sportive — Epicondilita laterală (pagini PDF: 274).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    602
   ],
   "pdfPages": [
    274
   ],
   "section": "Leziuni sportive — Epicondilita laterală"
  },
  "learningObjective": "Recunoașterea originii extensorilor pe epicondilul lateral, a întăririi antagonicilor și a exciziei granulației de pe ECRB.",
  "optionRationales": [
   "Originea extensorilor pumnului pe epicondilul lateral este explicită.",
   "Lista conservatoare, inclusiv întărirea flexorilor, este enumerată.",
   "Granulația de la originea extensorului radial al carpului este sediul chirurgical.",
   "Epicondilul medial și flexorii nu sunt leziunea descrisă ca tenismen.",
   "Chirurgia este rezervată puținele cazuri neresponsive."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută leziunea pe epicondilul medial (flexori) și pune chirurgia înaintea conservatorului."
  },
  "textbookExpressions": [
   "cotul tenismenului",
   "extensor radial al carpului"
  ]
 },
 {
  "id": "ortopedie-adv-120",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "În timpul alergării, piciorul atinge solul de:",
  "options": [
   "800–2.000 de ori pe o milă, cu o forță de 2–4 ori greutatea corporală",
   "50–100 de ori pe o milă, sub greutatea corporală",
   "O singură dată pe ciclul de mers, analog fazei de sprijin de 60%",
   "9 ori mai frecvent decât în mers, analog raportului tibie/femur",
   "Echivalentul a 14 miliarde de contacte, costul anual al dorsalgiei"
  ],
  "correct": [
   0
  ],
  "explanation": "800–2.000 de ori pe o milă, cu o forță de 2–4 ori greutatea corporală — Corect: Cele 800–2.000 de atingeri pe milă și forța de 2–4 ori greutatea sunt explicite.\n\n50–100 de ori pe o milă, sub greutatea corporală — Incorect: 50–100 subestimează grosolan frecvența.\n\nO singură dată pe ciclul de mers, analog fazei de sprijin de 60% — Incorect: Ciclul de mers nu reduce contactele alergării la unul.\n\n9 ori mai frecvent decât în mers, analog raportului tibie/femur — Incorect: Raportul 9:1 privește fracturile tibiale versus femurale, nu pașii.\n\nEchivalentul a 14 miliarde de contacte, costul anual al dorsalgiei — Incorect: 14 miliarde de dolari este costul anual al afecțiunilor coloanei, nu numărul de contacte.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 601, Leziuni de suprasolicitare — Impactul alergării (pagini PDF: 273).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    601
   ],
   "pdfPages": [
    273
   ],
   "section": "Leziuni de suprasolicitare — Impactul alergării"
  },
  "learningObjective": "Memorarea intervalului 800–2.000 de contacte pe milă, cu 2–4 ori greutatea corporală, ca bază a leziunilor de suprasolicitare.",
  "optionRationales": [
   "Cele 800–2.000 de atingeri pe milă și forța de 2–4 ori greutatea sunt explicite.",
   "50–100 subestimează grosolan frecvența.",
   "Ciclul de mers nu reduce contactele alergării la unul.",
   "Raportul 9:1 privește fracturile tibiale versus femurale, nu pașii.",
   "14 miliarde de dolari este costul anual al afecțiunilor coloanei, nu numărul de contacte."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește 800–2.000 și 2–4× greutatea cu alte cifre din capitol (9×, 60%, 14 miliarde)."
  },
  "textbookExpressions": [
   "800-2.000",
   "2---4 ori"
  ]
 },
 {
  "id": "ortopedie-adv-121",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "La alergătorul recreațional, durerea de stres tibial este de obicei localizată în compartimentul anterior, care conține:",
  "options": [
   "Tibialul anterior, extensorul degetelor și extensorul lung al halucelui",
   "Tibialul posterior, flexorii degetelor și flexorul lung al halucelui",
   "Solearul și gastrocnemianul, analog compartimentului posterior superficial",
   "Peronierul lung și scurt, analog compartimentului lateral",
   "Flexorul lung al degetelor mâinii, analog tenosinovitei Kanavel"
  ],
  "correct": [
   0
  ],
  "explanation": "Tibialul anterior, extensorul degetelor și extensorul lung al halucelui — Corect: Cei trei mușchi ai compartimentului anterior sunt enumerați explicit.\n\nTibialul posterior, flexorii degetelor și flexorul lung al halucelui — Incorect: Triada posteriorului profund este a alergătorului competitiv.\n\nSolearul și gastrocnemianul, analog compartimentului posterior superficial — Incorect: Solearul și gastrocnemianul definesc posteriorul superficial.\n\nPeronierul lung și scurt, analog compartimentului lateral — Incorect: Peronierii definesc compartimentul lateral.\n\nFlexorul lung al degetelor mâinii, analog tenosinovitei Kanavel — Incorect: Flexorii mâinii țin de tenosinovita Kanavel, nu de gambă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 604, Sindromul de stres tibial — Compartimentul anterior al recreaționalului (pagini PDF: 276).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    604
   ],
   "pdfPages": [
    276
   ],
   "section": "Sindromul de stres tibial — Compartimentul anterior al recreaționalului"
  },
  "learningObjective": "Identificarea triadei anteriorului (tibial anterior, EDL, EHL) la alergătorul recreațional, distinctă de posteriorul profund al competitivului.",
  "optionRationales": [
   "Cei trei mușchi ai compartimentului anterior sunt enumerați explicit.",
   "Triada posteriorului profund este a alergătorului competitiv.",
   "Solearul și gastrocnemianul definesc posteriorul superficial.",
   "Peronierii definesc compartimentul lateral.",
   "Flexorii mâinii țin de tenosinovita Kanavel, nu de gambă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă anteriorul recreaționalului cu posteriorul profund al competitivului, cele două topografii din același paragraf."
  },
  "textbookExpressions": [
   "compartimentul anterior",
   "extensor lung al halucelui"
  ]
 },
 {
  "id": "ortopedie-adv-122",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Disjuncția acromio-claviculară de gradul II se recunoaște prin:",
  "options": [
   "Ruptura ligamentului acromioclavicular cu întinderea ligamentelor coracoclaviculare și subluxație claviculară",
   "Radiografii de stres cu greutăți la încheieturi: distanța claviculă–coracoid mai mare pe partea afectată",
   "Clavicula ridicată vizibil deasupra acromionului, cu ruptura ambelor ligamente, analog gradului III",
   "Imobilizarea DIP în extensie 6 săptămâni, analog degetului Mallet",
   "Reducere închisă și gips, analog fracturii boxerului a metacarpianului V"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Ruptura ligamentului acromioclavicular cu întinderea ligamentelor coracoclaviculare și subluxație claviculară — Corect: Ruptura AC cu întinderea coracoclavicularelor și subluxația definesc gradul II.\n\nRadiografii de stres cu greutăți la încheieturi: distanța claviculă–coracoid mai mare pe partea afectată — Corect: Radiografiile de stres cu greutăți și distanța claviculă–coracoid crescută sunt descrise.\n\nClavicula ridicată vizibil deasupra acromionului, cu ruptura ambelor ligamente, analog gradului III — Incorect: Clavicula ridicată deasupra acromionului, cu ambele ligamente rupte, este gradul III.\n\nImobilizarea DIP în extensie 6 săptămâni, analog degetului Mallet — Incorect: Cele 6 săptămâni în extensie DIP sunt tratamentul Mallet.\n\nReducere închisă și gips, analog fracturii boxerului a metacarpianului V — Incorect: Gipsul boxerului nu evaluează distanța coracoclaviculară.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 607, Disjuncția acromio-claviculară — Gradul II și radiografiile de stres (pagini PDF: 279).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    607
   ],
   "pdfPages": [
    279
   ],
   "section": "Disjuncția acromio-claviculară — Gradul II și radiografiile de stres"
  },
  "learningObjective": "Diferențierea gradului II (AC rupt, coracoclaviculare întinse, greutăți la încheieturi) de clavicula ridicată a gradului III.",
  "optionRationales": [
   "Ruptura AC cu întinderea coracoclavicularelor și subluxația definesc gradul II.",
   "Radiografiile de stres cu greutăți și distanța claviculă–coracoid crescută sunt descrise.",
   "Clavicula ridicată deasupra acromionului, cu ambele ligamente rupte, este gradul III.",
   "Cele 6 săptămâni în extensie DIP sunt tratamentul Mallet.",
   "Gipsul boxerului nu evaluează distanța coracoclaviculară."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă gradul II (subluxație la stres) cu gradul III (claviculă ridicată) și cu Mallet/boxer de pe aceeași pagină."
  },
  "textbookExpressions": [
   "gradul II",
   "procesul coracoid"
  ]
 },
 {
  "id": "ortopedie-adv-123",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Pentru testul de stres al ligamentului colateral ulnar al MCP-ului policelui, articulația se plasează în:",
  "options": [
   "Flexie de 35°, pentru a relaxa aponevroza palmară și flexorul scurt al policelui",
   "Extensie completă, analog imobilizării Mallet a IFD",
   "Abducție de 90°, analog luxației anterioare de umăr",
   "Flexie de 90°, analog sertarului anterior al genunchiului",
   "Neutru, fără flexie, pentru a tensiona aponevroza adductorului"
  ],
  "correct": [
   0
  ],
  "explanation": "Flexie de 35°, pentru a relaxa aponevroza palmară și flexorul scurt al policelui — Corect: Textul cere 35° de flexie pentru a relaxa aponevroza palmară și flexorul scurt.\n\nExtensie completă, analog imobilizării Mallet a IFD — Incorect: Extensia completă este a imobilizării Mallet, nu a testului UCL.\n\nAbducție de 90°, analog luxației anterioare de umăr — Incorect: 90° de abducție privește mecanismul luxației anterioare de umăr.\n\nFlexie de 90°, analog sertarului anterior al genunchiului — Incorect: 90° de flexie este a sertarului anterior al genunchiului.\n\nNeutru, fără flexie, pentru a tensiona aponevroza adductorului — Incorect: Relaxarea, nu tensionarea aponevrozei, este scopul flexiei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 607, Policele schiorului — Flexia de 35° la testarea UCL (pagini PDF: 279).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    607
   ],
   "pdfPages": [
    279
   ],
   "section": "Policele schiorului — Flexia de 35° la testarea UCL"
  },
  "learningObjective": "Recunoașterea flexiei de 35° a MCP ca poziție care relaxează aponevroza palmară și FSB, permițând testarea UCL.",
  "optionRationales": [
   "Textul cere 35° de flexie pentru a relaxa aponevroza palmară și flexorul scurt.",
   "Extensia completă este a imobilizării Mallet, nu a testului UCL.",
   "90° de abducție privește mecanismul luxației anterioare de umăr.",
   "90° de flexie este a sertarului anterior al genunchiului.",
   "Relaxarea, nu tensionarea aponevrozei, este scopul flexiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 35° cu 90° (umăr sau genunchi) și cu extensia Mallet, toate unghiuri din capitolul de leziuni sportive."
  },
  "textbookExpressions": [
   "35° de",
   "flexor scurt al policelui"
  ]
 },
 {
  "id": "ortopedie-adv-124",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Cele mai comune diformități rotaționale ale piciorului copilului se atribuie uneia dintre trei zone. Sunt adevărate:",
  "options": [
   "Cele trei zone sunt femurul (anteversie/retroversie), tibia (rotație internă/externă) și antepiciorul (adducția metatarsienelor)",
   "Cea mai frecventă cauză este poziționarea intrauterină; posturile de somn sau șezut pot întârzia rezolvarea",
   "Majoritatea copiilor ating aproape jumătate din dimensiunea de adult în primii 2 ani",
   "Anteversia se evaluează cu copilul în supinație, rotația internă fiind irelevantă",
   "Adducția metatarsienelor se recunoaște printr-o margine laterală concavă, analog genu varum"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cele trei zone sunt femurul (anteversie/retroversie), tibia (rotație internă/externă) și antepiciorul (adducția metatarsienelor) — Corect: Cele trei zone sunt enumerate explicit.\n\nCea mai frecventă cauză este poziționarea intrauterină; posturile de somn sau șezut pot întârzia rezolvarea — Corect: Poziționarea intrauterină ca cea mai frecventă cauză este enunțată.\n\nMajoritatea copiilor ating aproape jumătate din dimensiunea de adult în primii 2 ani — Corect: Jumătatea din statura adultă în primii 2 ani este citată.\n\nAnteversia se evaluează cu copilul în supinație, rotația internă fiind irelevantă — Incorect: Diformitățile de rotație se evaluează mai bine în pronație.\n\nAdducția metatarsienelor se recunoaște printr-o margine laterală concavă, analog genu varum — Incorect: Marginea laterală convexă (nu concavă) semnalează adducția metatarsienelor.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 610, 611, Torsiunea pediatrică — Trei zone și mulajul intrauterin (pagini PDF: 282, 283).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    610,
    611
   ],
   "pdfPages": [
    282,
    283
   ],
   "section": "Torsiunea pediatrică — Trei zone și mulajul intrauterin"
  },
  "learningObjective": "Maparea femur–tibie–antepicior, a cauzei intrauterine și a creșterii din primii 2 ani (jumătate din talia adultă).",
  "optionRationales": [
   "Cele trei zone sunt enumerate explicit.",
   "Poziționarea intrauterină ca cea mai frecventă cauză este enunțată.",
   "Jumătatea din statura adultă în primii 2 ani este citată.",
   "Diformitățile de rotație se evaluează mai bine în pronație.",
   "Marginea laterală convexă (nu concavă) semnalează adducția metatarsienelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează pronația ca poziție de evaluare și concavitatea marginei laterale, două detalii de semiotica torsiunii."
  },
  "textbookExpressions": [
   "poziţionarea in￾trauterină",
   "primii 2 ani"
  ]
 },
 {
  "id": "ortopedie-adv-125",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Genu varum care persistă peste vârsta de 2 ani poate justifica evaluare radiologică, deoarece cauzele patologice includ:",
  "options": [
   "Afectarea cartilajului de creștere a metafizei mediale tibiale",
   "Nanismul condrodisplazic",
   "Rahitismul rezistent la vitamina D (hipofosfatemic sau renal)",
   "Varumul fiziologic de 20° al sugarului, care nu s-a corectat încă la 18 luni",
   "Aliniamentul adult de 7° valgus, interpretat ca varum patologic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Afectarea cartilajului de creștere a metafizei mediale tibiale — Corect: Afectarea fizei metafizei mediale tibiale este prima cauză patologică citată.\n\nNanismul condrodisplazic — Corect: Nanismul condrodisplazic figurează pe listă.\n\nRahitismul rezistent la vitamina D (hipofosfatemic sau renal) — Corect: Rahitismul rezistent la vitamina D este enunțat.\n\nVarumul fiziologic de 20° al sugarului, care nu s-a corectat încă la 18 luni — Incorect: Varumul fiziologic de 20° se corectează la circa 18 luni; persistența peste 2 ani ridică suspiciunea patologică.\n\nAliniamentul adult de 7° valgus, interpretat ca varum patologic — Incorect: 7° valgus după 3 ani este aliniamentul adult normal, nu un varum.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 611, Diformități angulare — Genu varum patologic (pagini PDF: 283).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    611
   ],
   "pdfPages": [
    283
   ],
   "section": "Diformități angulare — Genu varum patologic"
  },
  "learningObjective": "Separarea cauzelor patologice (fiză tibială medială, condrodisplazie, rahitism rezistent) de varumul fiziologic care se corectează la 18 luni.",
  "optionRationales": [
   "Afectarea fizei metafizei mediale tibiale este prima cauză patologică citată.",
   "Nanismul condrodisplazic figurează pe listă.",
   "Rahitismul rezistent la vitamina D este enunțat.",
   "Varumul fiziologic de 20° se corectează la circa 18 luni; persistența peste 2 ani ridică suspiciunea patologică.",
   "7° valgus după 3 ani este aliniamentul adult normal, nu un varum."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează varumul fiziologic și valgusul adult de 7° ca și cauze patologice, ignorând pragul de 2 ani."
  },
  "textbookExpressions": [
   "rahitism rezistent",
   "2 ani"
  ]
 },
 {
  "id": "ortopedie-adv-126",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Boala Legg-Calvé-Perthes, dincolo de epidemiologia 4–8 ani și 8/1, se caracterizează prin:",
  "options": [
   "Evoluție autolimitată, cu durată între 2 și 4 ani",
   "Cele mai importante modificări radiografice în stadiul de revascularizare, când osul nou apare dens (sclerotic)",
   "Tratament inițial prin tracțiune pentru mobilitate, apoi orteze care mențin membrele în abducție",
   "Predilecție feminină 8/1, analog scoliozei idiopatice",
   "Tratament prin ham Pavlik, identic displaziei de dezvoltare a șoldului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Evoluție autolimitată, cu durată între 2 și 4 ani — Corect: Durata autolimitată 2–4 ani este explicită.\n\nCele mai importante modificări radiografice în stadiul de revascularizare, când osul nou apare dens (sclerotic) — Corect: Stadiul de revascularizare ca moment al modificărilor radiografice maxime, cu os dens, este descris.\n\nTratament inițial prin tracțiune pentru mobilitate, apoi orteze care mențin membrele în abducție — Corect: Tracțiunea apoi ortezele în abducție sunt enunțate.\n\nPredilecție feminină 8/1, analog scoliozei idiopatice — Incorect: Raportul 8/1 este masculin/feminin, nu invers.\n\nTratament prin ham Pavlik, identic displaziei de dezvoltare a șoldului — Incorect: Hamul Pavlik este tratamentul DDH precoce, nu al Perthes.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 614, Perthes — Istorie naturală 2–4 ani și orteze în abducție (pagini PDF: 286).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    614
   ],
   "pdfPages": [
    286
   ],
   "section": "Perthes — Istorie naturală 2–4 ani și orteze în abducție"
  },
  "learningObjective": "Recunoașterea ferestrei 2–4 ani, a densității maxime la revascularizare și a ortezelor în abducție, distincte de Pavlik și de sex-ratio-ul inversat.",
  "optionRationales": [
   "Durata autolimitată 2–4 ani este explicită.",
   "Stadiul de revascularizare ca moment al modificărilor radiografice maxime, cu os dens, este descris.",
   "Tracțiunea apoi ortezele în abducție sunt enunțate.",
   "Raportul 8/1 este masculin/feminin, nu invers.",
   "Hamul Pavlik este tratamentul DDH precoce, nu al Perthes."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește sex-ratio-ul 8/1 și înlocuiește ortezele în abducție cu hamul Pavlik al DDH."
  },
  "textbookExpressions": [
   "2 şi 4 ani",
   "revascularizare"
  ]
 },
 {
  "id": "ortopedie-adv-127",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Boala Osgood-Schlatter afectează inserția tendonului rotulian pe tuberozitatea tibială. Sunt adevărate:",
  "options": [
   "Reprezintă o avulsie parțială a tuberozității, soldată cu necroză avasculară a porțiunii avulsionate",
   "Durerea se agravează la îngenunchiere, palpare și alergare; zona proemină și este sensibilă",
   "Este de obicei autolimitată și dispare odată cu închiderea cartilajelor de creștere",
   "Se tratează prin osteotomie tibială de valgizare, analog gonartrozei mediale a adultului tânăr",
   "Fixarea cu multiple șuruburi a capului femural, analog epifiziolizei, este gestul de primă intenție"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Reprezintă o avulsie parțială a tuberozității, soldată cu necroză avasculară a porțiunii avulsionate — Corect: Avulsia parțială și necroza porțiunii avulsionate sunt explicite.\n\nDurerea se agravează la îngenunchiere, palpare și alergare; zona proemină și este sensibilă — Corect: Agravarea la îngenunchiere, palpare și sport, cu proeminență sensibilă, este descrisă.\n\nEste de obicei autolimitată și dispare odată cu închiderea cartilajelor de creștere — Corect: Caracterul autolimitat până la închiderea cartilajelor este enunțat.\n\nSe tratează prin osteotomie tibială de valgizare, analog gonartrozei mediale a adultului tânăr — Incorect: Osteotomia tibială privește gonartroza medială a tânărului, nu Osgood-Schlatter.\n\nFixarea cu multiple șuruburi a capului femural, analog epifiziolizei, este gestul de primă intenție — Incorect: Șuruburile multiple fixează epifizioliza femurală proximală, nu tuberozitatea.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 614, Osgood-Schlatter — Avulsie a tuberozității tibiale (pagini PDF: 286).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    614
   ],
   "pdfPages": [
    286
   ],
   "section": "Osgood-Schlatter — Avulsie a tuberozității tibiale"
  },
  "learningObjective": "Recunoașterea avulsiei parțiale cu NAV, a durerii la îngenunchiere și a remisiei la închiderea fizei, versus osteotomia adultului sau șuruburile epifiziolizei.",
  "optionRationales": [
   "Avulsia parțială și necroza porțiunii avulsionate sunt explicite.",
   "Agravarea la îngenunchiere, palpare și sport, cu proeminență sensibilă, este descrisă.",
   "Caracterul autolimitat până la închiderea cartilajelor este enunțat.",
   "Osteotomia tibială privește gonartroza medială a tânărului, nu Osgood-Schlatter.",
   "Șuruburile multiple fixează epifizioliza femurală proximală, nu tuberozitatea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută tratamentul pe osteotomia de genu varum sau pe șuruburile epifiziolizei, două gesturi pediatrice/tinere învecinate."
  },
  "textbookExpressions": [
   "Osgood-Schaltter",
   "tuberozităţii tibiale"
  ]
 },
 {
  "id": "ortopedie-adv-128",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Piciorul strâmb congenital (talipes equinovarus) se caracterizează prin:",
  "options": [
   "Incidență de 1/1.000 nou-născuți, de două ori mai frecvent la băieți, bilateral în 33%",
   "Triada: gleznă în flexie plantară (equinus), retropicior în varus și antepicior în adducție/supinație",
   "Netratat, pacientul calcă pe marginea laterală; mușchii posteriori ai gambei sunt atrofiați și contractați",
   "Incidență de 1,5/1.000, analog displaziei de șold, cu predilecție feminină",
   "Tratament de primă intenție prin ham Pavlik, fără serie de gipsuri"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Incidență de 1/1.000 nou-născuți, de două ori mai frecvent la băieți, bilateral în 33% — Corect: Incidența, sex-ratio-ul și bilateralitatea de 33% sunt explicite.\n\nTriada: gleznă în flexie plantară (equinus), retropicior în varus și antepicior în adducție/supinație — Corect: Cele trei caracteristici anatomice sunt enumerate.\n\nNetratat, pacientul calcă pe marginea laterală; mușchii posteriori ai gambei sunt atrofiați și contractați — Corect: Călcarea pe marginea laterală și contractura posteriorului sunt descrise.\n\nIncidență de 1,5/1.000, analog displaziei de șold, cu predilecție feminină — Incorect: 1,5/1.000 și predilecția feminină țin de DDH, nu de piciorul strâmb.\n\nTratament de primă intenție prin ham Pavlik, fără serie de gipsuri — Incorect: Tratamentul începe cu corecții gipsate seriate, nu cu ham Pavlik.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 614, 615, Piciorul varus-equin — Epidemiologie și triada deformării (pagini PDF: 286, 287).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    614,
    615
   ],
   "pdfPages": [
    286,
    287
   ],
   "section": "Piciorul varus-equin — Epidemiologie și triada deformării"
  },
  "learningObjective": "Aplicarea ratei 1/1.000, a predilecției masculine 2:1, a bilateralității de 33% și a triadei equinus–varus–adductus.",
  "optionRationales": [
   "Incidența, sex-ratio-ul și bilateralitatea de 33% sunt explicite.",
   "Cele trei caracteristici anatomice sunt enumerate.",
   "Călcarea pe marginea laterală și contractura posteriorului sunt descrise.",
   "1,5/1.000 și predilecția feminină țin de DDH, nu de piciorul strâmb.",
   "Tratamentul începe cu corecții gipsate seriate, nu cu ham Pavlik."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă 1/1.000 masculin cu 1,5/1.000 feminin al DDH și pune Pavlik în locul gipsurilor."
  },
  "textbookExpressions": [
   "I/I .OOO",
   "equinus"
  ]
 },
 {
  "id": "ortopedie-adv-129",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Fasceita necrozantă, dincolo de tipurile 1 și 2, se caracterizează prin:",
  "options": [
   "Tipul 3 este cauzat de bacterii marine",
   "Scorul LRINEC folosește creșterea leucocitelor, glicemiei, PCR și creatininei și scăderea sodiului și hemoglobinei",
   "La debridare, necroza are aspect purulent de „apă murdară”, cu miros fetid",
   "Tipul 3 este polimicrobian al diabeticului, analog tipului 1",
   "LRINEC se bazează pe hipercalcemie și pe scăderea VSH, analog osteomielitei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tipul 3 este cauzat de bacterii marine — Corect: Tipul 3 prin bacterii marine este explicit.\n\nScorul LRINEC folosește creșterea leucocitelor, glicemiei, PCR și creatininei și scăderea sodiului și hemoglobinei — Corect: Cele șase analize ale LRINEC (creșteri și scăderi) sunt enumerate.\n\nLa debridare, necroza are aspect purulent de „apă murdară”, cu miros fetid — Corect: Aspectul de apă murdară fetidă la debridare este descris.\n\nTipul 3 este polimicrobian al diabeticului, analog tipului 1 — Incorect: Polimicrobianul imunocompromisului este tipul 1, nu 3.\n\nLRINEC se bazează pe hipercalcemie și pe scăderea VSH, analog osteomielitei — Incorect: LRINEC nu folosește calciu sau VSH; VSH-ul urmărește osteomielita.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 618, Fasceita necrozantă — Tipul 3 marin și scorul LRINEC (pagini PDF: 290).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    618
   ],
   "pdfPages": [
    290
   ],
   "section": "Fasceita necrozantă — Tipul 3 marin și scorul LRINEC"
  },
  "learningObjective": "Completarea clasificării cu bacteriile marine, cu componentele LRINEC și cu aspectul de apă murdară la debridare.",
  "optionRationales": [
   "Tipul 3 prin bacterii marine este explicit.",
   "Cele șase analize ale LRINEC (creșteri și scăderi) sunt enumerate.",
   "Aspectul de apă murdară fetidă la debridare este descris.",
   "Polimicrobianul imunocompromisului este tipul 1, nu 3.",
   "LRINEC nu folosește calciu sau VSH; VSH-ul urmărește osteomielita."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă tipul 3 marin cu tipul 1 polimicrobian și înlocuiește LRINEC cu markeri de osteomielită."
  },
  "textbookExpressions": [
   "bacterii marine",
   "LRINEC"
  ]
 },
 {
  "id": "ortopedie-adv-130",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Artroza trapezo-metacarpiană a policelui și medicația osteoartrozei:",
  "options": [
   "La mână, artroza afectează uzual articulația trapezo-metacarpiană, cu durere la bază ca o ciupitură",
   "Acetaminofenul s-a dovedit eficient în durerea musculoscheletală; narcoticele cronice trebuie evitate",
   "Injectarea repetată de corticosteroizi poate accelera deteriorarea articulară prin efecte nocive pe metabolismul cartilajului",
   "Glucozamina și condroitin sulfatul au beneficiu dovedit prin studii, înlocuind AINS",
   "Cartilajul articular este bogat inervat, deci durerea artrozică nu poate avea origine periarticulară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "La mână, artroza afectează uzual articulația trapezo-metacarpiană, cu durere la bază ca o ciupitură — Corect: Sediul trapezo-metacarpian și durerea de ciupitură sunt explicite.\n\nAcetaminofenul s-a dovedit eficient în durerea musculoscheletală; narcoticele cronice trebuie evitate — Corect: Eficiența acetaminofenului și evitarea narcoticelor cronice sunt enunțate.\n\nInjectarea repetată de corticosteroizi poate accelera deteriorarea articulară prin efecte nocive pe metabolismul cartilajului — Corect: Efectul nociv al steroizilor repețați pe metabolismul cartilajului este citat.\n\nGlucozamina și condroitin sulfatul au beneficiu dovedit prin studii, înlocuind AINS — Incorect: Beneficiul glucozaminei/condroitinei a fost pretins, dar nu dovedit prin studii.\n\nCartilajul articular este bogat inervat, deci durerea artrozică nu poate avea origine periarticulară — Incorect: Cartilajul nu are inervație; durerea are originea în structurile periarticulare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 619, Osteoartroza — Trapezo-metacarpiana și injecțiile de steroid (pagini PDF: 291).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    619
   ],
   "pdfPages": [
    291
   ],
   "section": "Osteoartroza — Trapezo-metacarpiana și injecțiile de steroid"
  },
  "learningObjective": "Recunoașterea TMC a policelui, a acetaminofenului și a riscului injecțiilor steroidiene repetate asupra cartilajului.",
  "optionRationales": [
   "Sediul trapezo-metacarpian și durerea de ciupitură sunt explicite.",
   "Eficiența acetaminofenului și evitarea narcoticelor cronice sunt enunțate.",
   "Efectul nociv al steroizilor repețați pe metabolismul cartilajului este citat.",
   "Beneficiul glucozaminei/condroitinei a fost pretins, dar nu dovedit prin studii.",
   "Cartilajul nu are inervație; durerea are originea în structurile periarticulare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie suplimentelor un beneficiu dovedit și inervează cartilajul, două mituri din același paragraf de tratament."
  },
  "textbookExpressions": [
   "trapezo-metacarpiană",
   "corticosteroizi"
  ]
 },
 {
  "id": "ortopedie-adv-131",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre artroplastia parțială, cea totală și artrodeza genunchiului:",
  "options": [
   "Artroplastia parțială cere un singur compartiment afectat, ligamente încrucișate intacte și mobilitate în limite funcționale",
   "Artroplastia totală reduce durerea în mai mult de 90% din cazuri și se rezervă artrozei avansate cu stil de viață relativ sedentar",
   "Artrodeza este durabilă la tineri foarte activi, cu o articulație izolată (haluce, coloană, gleznă); este contraindicată în artrita inflamatorie sistemică multiplă",
   "Artrodeza articulațiilor mari este indicația de elecție în poliartrita reumatoidă multiplă",
   "Artroplastia parțială se folosește când ambele încrucișate sunt rupte și toate trei compartimentele sunt uzate"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Artroplastia parțială cere un singur compartiment afectat, ligamente încrucișate intacte și mobilitate în limite funcționale — Corect: Cele trei condiții ale artroplastiei parțiale sunt explicite.\n\nArtroplastia totală reduce durerea în mai mult de 90% din cazuri și se rezervă artrozei avansate cu stil de viață relativ sedentar — Corect: Rata de peste 90% și rezervarea la artroză avansată sedentară sunt citate.\n\nArtrodeza este durabilă la tineri foarte activi, cu o articulație izolată (haluce, coloană, gleznă); este contraindicată în artrita inflamatorie sistemică multiplă — Corect: Indicația tânăr activ cu articulație izolată și contraindicația în artrita inflamatorie multiplă sunt enunțate.\n\nArtrodeza articulațiilor mari este indicația de elecție în poliartrita reumatoidă multiplă — Incorect: Artrodeza marilor articulații este contraindicată tocmai în artrita inflamatorie sistemică multiplă.\n\nArtroplastia parțială se folosește când ambele încrucișate sunt rupte și toate trei compartimentele sunt uzate — Incorect: Încrucișatele intacte și un singur compartiment sunt cerințe, nu contraindicații inversate.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 620, Gonartroza — Unicompartimentală, totală și artrodeză (pagini PDF: 292).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    620
   ],
   "pdfPages": [
    292
   ],
   "section": "Gonartroza — Unicompartimentală, totală și artrodeză"
  },
  "learningObjective": "Contrastarea criteriilor unicompartimentale, a ratei >90% a TKA la sedentar și a artrodezei tânărului activ, contraindicată în boala inflamatorie multiplă.",
  "optionRationales": [
   "Cele trei condiții ale artroplastiei parțiale sunt explicite.",
   "Rata de peste 90% și rezervarea la artroză avansată sedentară sunt citate.",
   "Indicația tânăr activ cu articulație izolată și contraindicația în artrita inflamatorie multiplă sunt enunțate.",
   "Artrodeza marilor articulații este contraindicată tocmai în artrita inflamatorie sistemică multiplă.",
   "Încrucișatele intacte și un singur compartiment sunt cerințe, nu contraindicații inversate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește contraindicația artrodezei în PR multiplă și cere parțiala tocmai când încrucișatele și toate compartimentele sunt compromise."
  },
  "textbookExpressions": [
   "90% din cazuri",
   "Artrodeza"
  ]
 },
 {
  "id": "ortopedie-adv-132",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Hernia de disc cervicală: cele mai frecvente rupturi și rădăcinile corespunzătoare din tabelul 28-5:",
  "options": [
   "Cele mai frecvente rupturi sunt la C5–C6 și C6–C7, unde flexia-extensia este cea mai amplă",
   "Rădăcina C6: hipoestezie față laterală antebraț și palmară police, slăbire a extensiei pumnului, diminuare reflex brahioradial",
   "Rădăcina C7: hipoestezie degetul 3, slăbire extensie degete și triceps, diminuare reflex tricipital",
   "Rădăcina C6 slăbește deltoidul și bicepsul, cu diminuarea reflexului bicipital, analog C5",
   "Rădăcina C7 se recunoaște prin hipoestezie pe degetul 5 și slăbirea flexiei degetelor, analog C8"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cele mai frecvente rupturi sunt la C5–C6 și C6–C7, unde flexia-extensia este cea mai amplă — Corect: Interspațiile C5–C6 și C6–C7 ca cele mai frecvente sunt explicite.\n\nRădăcina C6: hipoestezie față laterală antebraț și palmară police, slăbire a extensiei pumnului, diminuare reflex brahioradial — Corect: Triada senzitiv-motor-reflex a C6 din tabel este citată.\n\nRădăcina C7: hipoestezie degetul 3, slăbire extensie degete și triceps, diminuare reflex tricipital — Corect: Triada C7 (deget 3, extensie degete/triceps, tricipital) este enunțată.\n\nRădăcina C6 slăbește deltoidul și bicepsul, cu diminuarea reflexului bicipital, analog C5 — Incorect: Deltoid, biceps și bicipital definesc C5, nu C6.\n\nRădăcina C7 se recunoaște prin hipoestezie pe degetul 5 și slăbirea flexiei degetelor, analog C8 — Incorect: Degetul 5 și flexia degetelor definesc C8, nu C7.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 626, Discul cervical — C5–C6/C6–C7 și rădăcinile C6, C7 (pagini PDF: 298).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    626
   ],
   "pdfPages": [
    298
   ],
   "section": "Discul cervical — C5–C6/C6–C7 și rădăcinile C6, C7"
  },
  "learningObjective": "Maparea predilecției C5–C6 și C6–C7 pe rădăcinile C6 (police, extensie pumn, BR) și C7 (deget 3, triceps).",
  "optionRationales": [
   "Interspațiile C5–C6 și C6–C7 ca cele mai frecvente sunt explicite.",
   "Triada senzitiv-motor-reflex a C6 din tabel este citată.",
   "Triada C7 (deget 3, extensie degete/triceps, tricipital) este enunțată.",
   "Deltoid, biceps și bicipital definesc C5, nu C6.",
   "Degetul 5 și flexia degetelor definesc C8, nu C7."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează C6 cu C5 (biceps) și C7 cu C8 (degetul 5), capcane clasice de radiculopatie cervicală."
  },
  "textbookExpressions": [
   "C5-C6",
   "reflex brahioradial"
  ]
 },
 {
  "id": "ortopedie-adv-133",
  "topicId": "ortopedie",
  "type": "CM",
  "stem": "Implicarea coloanei cervicale în artrita reumatoidă urmează, de obicei, unul dintre trei modele:",
  "options": [
   "Sinovita atlas–odontoid întinde ligamentul transvers, cu subluxație atlanto-axială (C1–C2) în flexie și comprimarea măduvei de dintele deplasat posterior",
   "Sinovita erozivă atlas–condil occipital cauzează impactare occipito-atlanto-axială, cu protruzia odontoidului în foramen magnum",
   "Sinovita fațetelor sub axis produce instabilitate de segment (subluxație subaxială), vizibilă pe laterala cu înclinare sau deplasare AP",
   "Cele trei modele se exclud reciproc de impactarea odontoidului, care protejează canalul",
   "Subluxația C1–C2 apare caracteristic în extensie, ligamentul transvers rămânând intact"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sinovita atlas–odontoid întinde ligamentul transvers, cu subluxație atlanto-axială (C1–C2) în flexie și comprimarea măduvei de dintele deplasat posterior — Corect: Mecanismul ligamentului transvers și al dintelui posterior este explicit.\n\nSinovita erozivă atlas–condil occipital cauzează impactare occipito-atlanto-axială, cu protruzia odontoidului în foramen magnum — Corect: Impactarea cu odontoidul în foramen magnum este descrisă.\n\nSinovita fațetelor sub axis produce instabilitate de segment (subluxație subaxială), vizibilă pe laterala cu înclinare sau deplasare AP — Corect: Subluxația subaxială pe laterala cu înclinare/deplasare este enunțată.\n\nCele trei modele se exclud reciproc de impactarea odontoidului, care protejează canalul — Incorect: Cele trei modele coexistă ca tipare posibile; impactarea comprimă, nu protejează.\n\nSubluxația C1–C2 apare caracteristic în extensie, ligamentul transvers rămânând intact — Incorect: Subluxația atlanto-axială este de obicei în flexie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 626, 627, Artrita reumatoidă cervicală — Cele trei modele de instabilitate (pagini PDF: 298, 299).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    626,
    627
   ],
   "pdfPages": [
    298,
    299
   ],
   "section": "Artrita reumatoidă cervicală — Cele trei modele de instabilitate"
  },
  "learningObjective": "Recunoașterea triadei C1–C2 (ligament transvers), impactare occipito-atlanto-axială și subluxație subaxială.",
  "optionRationales": [
   "Mecanismul ligamentului transvers și al dintelui posterior este explicit.",
   "Impactarea cu odontoidul în foramen magnum este descrisă.",
   "Subluxația subaxială pe laterala cu înclinare/deplasare este enunțată.",
   "Cele trei modele coexistă ca tipare posibile; impactarea comprimă, nu protejează.",
   "Subluxația atlanto-axială este de obicei în flexie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează flexia C1–C2 cu extensia și tratează impactarea odontoidului ca protectoare a măduvei."
  },
  "textbookExpressions": [
   "atlanto-axiale",
   "foramen magnum"
  ]
 },
 {
  "id": "ortopedie-adv-134",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Primele manifestări clinice ale osteoporozei involutive includ frecvent fracturi prin compresie vertebrală și fracturi de:",
  "options": [
   "Femur proximal (șold), humerus și radius distal (Colles)",
   "Scafoid, analog tabacherei anatomice a tânărului",
   "Olecran prin avulsia tricepsului",
   "Platou tibial impactat de energie redusă, analog metafizei copilului",
   "Diafiză femurală de mare energie, analog politraumatismului"
  ],
  "correct": [
   0
  ],
  "explanation": "Femur proximal (șold), humerus și radius distal (Colles) — Corect: Textul enumeră corpii vertebrali, femurul proximal, humerusul și radiusul distal (Colles) ca prime manifestări.\n\nScafoid, analog tabacherei anatomice a tânărului — Incorect: Scafoidul este fractura tânărului prin FOOSH, nu prima manifestare osteoporotică din listă.\n\nOlecran prin avulsia tricepsului — Incorect: Olecranul este o cădere pe cot, nu exemplul de fragilitate.\n\nPlatou tibial impactat de energie redusă, analog metafizei copilului — Incorect: Platoul tibial impactat este un exemplu de fractură metafizară, nu lista osteoporozei.\n\nDiafiză femurală de mare energie, analog politraumatismului — Incorect: Diafiza femurală cere energie mare la tineri, opusul fragilității.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 627, Osteoporoza — Primele fracturi de fragilitate (pagini PDF: 299).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    627
   ],
   "pdfPages": [
    299
   ],
   "section": "Osteoporoza — Primele fracturi de fragilitate"
  },
  "learningObjective": "Identificarea triadei șold–humerus–Colles, alături de vertebre, ca prime manifestări ale osteoporozei involutive.",
  "optionRationales": [
   "Textul enumeră corpii vertebrali, femurul proximal, humerusul și radiusul distal (Colles) ca prime manifestări.",
   "Scafoidul este fractura tânărului prin FOOSH, nu prima manifestare osteoporotică din listă.",
   "Olecranul este o cădere pe cot, nu exemplul de fragilitate.",
   "Platoul tibial impactat este un exemplu de fractură metafizară, nu lista osteoporozei.",
   "Diafiza femurală cere energie mare la tineri, opusul fragilității."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește triada șold–humerus–Colles cu scafoid, olecran sau diafiză de mare energie, toate din același capitol de traumatologie."
  },
  "textbookExpressions": [
   "humerusului",
   "Colles"
  ]
 },
 {
  "id": "ortopedie-adv-135",
  "topicId": "ortopedie",
  "type": "CS",
  "stem": "Rahitismul, forma pediatrică a osteomalaciei, se recunoaște radiografic prin:",
  "options": [
   "Cartilaje de creștere anormal de largi și metafize în formă de cupă; oasele lungi moi pot fi încurbate",
   "Zone Looser ca primă imagine, fără lărgirea fizei",
   "Spiculi „raze de soare” metafizari, analog osteosarcomului",
   "Aspect de „bulb de ceapă” diafizar, analog sarcomului Ewing",
   "Pensare localizată, osteofite și chiste subcondrale, analog osteoartrozei"
  ],
  "correct": [
   0
  ],
  "explanation": "Cartilaje de creștere anormal de largi și metafize în formă de cupă; oasele lungi moi pot fi încurbate — Corect: Lărgirea cartilajelor de creștere, metafizele în cupă și încurbarea oaselor moi sunt explicite.\n\nZone Looser ca primă imagine, fără lărgirea fizei — Incorect: Zona Looser este caracteristica adultului cu osteomalacie, cel mai des la col femural sau ramuri pubiene.\n\nSpiculi „raze de soare” metafizari, analog osteosarcomului — Incorect: Razele de soare definesc osteosarcomul.\n\nAspect de „bulb de ceapă” diafizar, analog sarcomului Ewing — Incorect: Bulbul de ceapă definește Ewing-ul.\n\nPensare localizată, osteofite și chiste subcondrale, analog osteoartrozei — Incorect: Cele patru semne radiologice OA nu descriu rahitismul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 28, p. 628, Rahitismul — Fize largi și metafize în cupă (pagini PDF: 300).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 28,
   "printedPages": [
    628
   ],
   "pdfPages": [
    300
   ],
   "section": "Rahitismul — Fize largi și metafize în cupă"
  },
  "learningObjective": "Diferențierea imaginii de rahitism (fiză largă, metafiză în cupă, oase încurbate) de Looser-ul adultului, de tumorile din tabelul 28-9 și de OA.",
  "optionRationales": [
   "Lărgirea cartilajelor de creștere, metafizele în cupă și încurbarea oaselor moi sunt explicite.",
   "Zona Looser este caracteristica adultului cu osteomalacie, cel mai des la col femural sau ramuri pubiene.",
   "Razele de soare definesc osteosarcomul.",
   "Bulbul de ceapă definește Ewing-ul.",
   "Cele patru semne radiologice OA nu descriu rahitismul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută imaginea de rahitism pe Looser, raze de soare sau bulb de ceapă, trei pattern-uri radiologice din același capitol."
  },
  "textbookExpressions": [
   "formă de cupă",
   "cartilaje de creştere"
  ]
 }
];
