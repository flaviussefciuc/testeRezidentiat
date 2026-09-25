import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_ORL:(Question&Record<string,unknown>)[]=[
 {
  "id": "orl-adv-001",
  "topicId": "orl",
  "type": "CM",
  "stem": "Impactul patologiilor din sfera ORL:",
  "options": [
   "Mai mult de 60% dintre consulturile medicale la copii sunt consecința unor patologii din sfera ORL",
   "Peste 50% dintre consulturile la adulți sunt consecința unor patologii din sfera ORL",
   "Rinosinuzita are cel mai mare impact financiar asupra economiei din SUA, prin scăderea productivității și costurile serviciilor medicale",
   "Hipoacuzia neurosenzorială depășește rinosinuzita ca impact financiar asupra economiei din SUA",
   "Cele mai frecvente intervenții chirurgicale din SUA, în acest capitol, sunt laringectomiile totale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mai mult de 60% dintre consulturile medicale la copii sunt consecința unor patologii din sfera ORL — Corect: Textul citează explicit pragul de peste 60% dintre consulturile pediatrice.\n\nPeste 50% dintre consulturile la adulți sunt consecința unor patologii din sfera ORL — Corect: Pragul de peste 50% la adulți este enunțat în aceeași frază.\n\nRinosinuzita are cel mai mare impact financiar asupra economiei din SUA, prin scăderea productivității și costurile serviciilor medicale — Corect: Rinosinuzita este identificată ca având cel mai mare impact financiar în SUA.\n\nHipoacuzia neurosenzorială depășește rinosinuzita ca impact financiar asupra economiei din SUA — Incorect: Textul atribuie impactul financiar maxim rinosinuzitei, nu hipoacuziei.\n\nCele mai frecvente intervenții chirurgicale din SUA, în acest capitol, sunt laringectomiile totale — Incorect: Intervențiile citate ca fiind printre cele mai frecvente sunt tonsilectomiile/adenoidectomiile și plasarea de aeratoare timpanale, nu laringectomia.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 548, Otorinolaringologia — Introducere (pagini PDF: 221).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    548
   ],
   "pdfPages": [
    221
   ],
   "section": "Otorinolaringologia — Introducere"
  },
  "learningObjective": "Recunoașterea ponderii consulturilor ORL la copii și adulți și a rinosinuzitei ca principală povară economică, distinctă de intervențiile timpanale și amigdaliene.",
  "optionRationales": [
   "Textul citează explicit pragul de peste 60% dintre consulturile pediatrice.",
   "Pragul de peste 50% la adulți este enunțat în aceeași frază.",
   "Rinosinuzita este identificată ca având cel mai mare impact financiar în SUA.",
   "Textul atribuie impactul financiar maxim rinosinuzitei, nu hipoacuziei.",
   "Intervențiile citate ca fiind printre cele mai frecvente sunt tonsilectomiile/adenoidectomiile și plasarea de aeratoare timpanale, nu laringectomia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii înlocuiesc rinosinuzita cu hipoacuzia și substituie tonsilectomia/timpanostomia cu laringectomia, două confuzii de ierarhie epidemiologico-chirurgicală."
  },
  "textbookExpressions": [
   "mult de 60%",
   "Rinosinuzita are cel mai mare impact financiar"
  ]
 },
 {
  "id": "orl-adv-002",
  "topicId": "orl",
  "type": "CM",
  "stem": "Conductul auditiv extern se caracterizează prin:",
  "options": [
   "Treimea laterală are o porțiune cartilaginoasă",
   "Două treimi mediale au o porțiune osoasă",
   "Tegumentul porțiunii cartilaginoase conține foliculi piloși și glande ceruminoase",
   "Treimea medială este cartilaginoasă, iar cele două treimi laterale sunt osoase",
   "Urechea internă este constituită din trompa lui Eustachio, membrana timpanică și lanțul osicular"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Treimea laterală are o porțiune cartilaginoasă — Corect: Textul plasează porțiunea cartilaginoasă în treimea laterală.\n\nDouă treimi mediale au o porțiune osoasă — Corect: Porțiunea osoasă ocupă două treimi mediale.\n\nTegumentul porțiunii cartilaginoase conține foliculi piloși și glande ceruminoase — Corect: Foliculii piloși și glandele ceruminoase sunt descrise în tegumentul porțiunii cartilaginoase.\n\nTreimea medială este cartilaginoasă, iar cele două treimi laterale sunt osoase — Incorect: Raportul cartilaj/os este inversat față de text.\n\nUrechea internă este constituită din trompa lui Eustachio, membrana timpanică și lanțul osicular — Incorect: Trompa, timpanul și oscioarele definesc urechea medie, nu urechea internă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 549, Urechea — Anatomie (pagini PDF: 222).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    549
   ],
   "pdfPages": [
    222
   ],
   "section": "Urechea — Anatomie"
  },
  "learningObjective": "Diferențierea segmentului cartilaginos lateral al conductului de porțiunea osoasă medială și de conținutul urechii medii.",
  "optionRationales": [
   "Textul plasează porțiunea cartilaginoasă în treimea laterală.",
   "Porțiunea osoasă ocupă două treimi mediale.",
   "Foliculii piloși și glandele ceruminoase sunt descrise în tegumentul porțiunii cartilaginoase.",
   "Raportul cartilaj/os este inversat față de text.",
   "Trompa, timpanul și oscioarele definesc urechea medie, nu urechea internă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează raportul 1/3 față de 2/3 al conductului și mută conținutul urechii medii în urechea internă."
  },
  "textbookExpressions": [
   "treimea laterală",
   "glande ceruminoase"
  ]
 },
 {
  "id": "orl-adv-003",
  "topicId": "orl",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la urechea internă și nervul facial:",
  "options": [
   "Urechea internă este alcătuită din cohlee, canalele semicirculare și conductul auditiv intern",
   "Organul lui Corti se află în cohlee, macula în utriculă și saculă, iar crestele ampulare în canalele semicirculare",
   "Conductul auditiv intern conține nervii cranieni VII și VIII",
   "Nervul facial se află postero-inferior de segmentele auditive și vestibulare ale nervului VIII",
   "Fibrele secretomotorii ale nervului intermediar se opresc la glanda parotidă, fără a atinge glandele lacrimale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Urechea internă este alcătuită din cohlee, canalele semicirculare și conductul auditiv intern — Corect: Cele trei componente ale urechii interne sunt enumerate explicit.\n\nOrganul lui Corti se află în cohlee, macula în utriculă și saculă, iar crestele ampulare în canalele semicirculare — Corect: Cele trei organe senzoriale și sediile lor sunt descrise în text.\n\nConductul auditiv intern conține nervii cranieni VII și VIII — Corect: Nervii VII și VIII sunt citați ca fiind conținuți în conductul auditiv intern.\n\nNervul facial se află postero-inferior de segmentele auditive și vestibulare ale nervului VIII — Incorect: Textul plasează nervul facial antero-superior, nu postero-inferior, față de VIII.\n\nFibrele secretomotorii ale nervului intermediar se opresc la glanda parotidă, fără a atinge glandele lacrimale — Incorect: Nervul intermediar destinează fibre secretomotorii glandelor sublinguală, submandibulară, lacrimale și mucoaselor nazale și palatine.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 549, Urechea internă și nervul facial — Anatomie (pagini PDF: 222).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    549
   ],
   "pdfPages": [
    222
   ],
   "section": "Urechea internă și nervul facial — Anatomie"
  },
  "learningObjective": "Recunoașterea celor trei organe senzoriale ale urechii interne și a conținutului conductului auditiv intern.",
  "optionRationales": [
   "Cele trei componente ale urechii interne sunt enumerate explicit.",
   "Cele trei organe senzoriale și sediile lor sunt descrise în text.",
   "Nervii VII și VIII sunt citați ca fiind conținuți în conductul auditiv intern.",
   "Textul plasează nervul facial antero-superior, nu postero-inferior, față de VIII.",
   "Nervul intermediar destinează fibre secretomotorii glandelor sublinguală, submandibulară, lacrimale și mucoaselor nazale și palatine."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează poziția facialului față de VIII și limitează greșit teritoriul secretomotor al nervului intermediar."
  },
  "textbookExpressions": [
   "Organul lui Corti",
   "conductul auditiv intern"
  ]
 },
 {
  "id": "orl-adv-004",
  "topicId": "orl",
  "type": "CS",
  "stem": "Egalizarea presiunilor în urechea medie se realizează prin:",
  "options": [
   "Deschiderea periodică a trompei lui Eustachio, în mod normal închisă, produsă de masticație sau deglutiție",
   "Menținerea trompei lui Eustachio permanent deschisă, cu închidere doar în timpul deglutiției",
   "Contracția continuă a mușchiului scăriței, independent de deglutiție",
   "Comunicarea directă a urechii medii cu fereastra rotundă, fără rol tubar",
   "Egalizarea pasivă prin porțiunea osoasă a conductului auditiv extern"
  ],
  "correct": [
   0
  ],
  "explanation": "Deschiderea periodică a trompei lui Eustachio, în mod normal închisă, produsă de masticație sau deglutiție — Corect: Textul descrie dilatarea periodică a cavității aeriene prin masticație sau deglutiție, care deschide trompa normal închisă.\n\nMenținerea trompei lui Eustachio permanent deschisă, cu închidere doar în timpul deglutiției — Incorect: Trompa este descrisă ca fiind în mod normal închisă, nu permanent deschisă.\n\nContracția continuă a mușchiului scăriței, independent de deglutiție — Incorect: Muşchii scăriței și ai ciocanului nu sunt mecanismul de egalizare a presiunilor.\n\nComunicarea directă a urechii medii cu fereastra rotundă, fără rol tubar — Incorect: Fereastra ovală, nu rotundă, este contactul piciorului scăriței; egalizarea rămâne tubară.\n\nEgalizarea pasivă prin porțiunea osoasă a conductului auditiv extern — Incorect: Conductul auditiv extern nu egalizează presiunea din urechea medie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 549, Urechea medie — Fiziologie (pagini PDF: 222).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    549
   ],
   "pdfPages": [
    222
   ],
   "section": "Urechea medie — Fiziologie"
  },
  "learningObjective": "Identificarea deschiderii intermitente a trompei lui Eustachio ca mecanism de egalizare a presiunilor.",
  "optionRationales": [
   "Textul descrie dilatarea periodică a cavității aeriene prin masticație sau deglutiție, care deschide trompa normal închisă.",
   "Trompa este descrisă ca fiind în mod normal închisă, nu permanent deschisă.",
   "Muşchii scăriței și ai ciocanului nu sunt mecanismul de egalizare a presiunilor.",
   "Fereastra ovală, nu rotundă, este contactul piciorului scăriței; egalizarea rămâne tubară.",
   "Conductul auditiv extern nu egalizează presiunea din urechea medie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează starea de repaus a trompei (închisă față de deschisă) și atribuie egalizarea unor structuri ale urechii interne sau externe."
  },
  "textbookExpressions": [
   "trompei lui Eustachio",
   "masticaţie sau deglutiţie"
  ]
 },
 {
  "id": "orl-adv-005",
  "topicId": "orl",
  "type": "CS",
  "stem": "Pe audiograma tonală, intervalul care definește hipoacuzia moderată este:",
  "options": [
   "0–20 dB",
   "25–40 dB",
   "40–70 dB",
   "70–90 dB",
   "peste 90 dB"
  ],
  "correct": [
   2
  ],
  "explanation": "0–20 dB — Incorect: 0–20 dB este considerat auz normal.\n\n25–40 dB — Incorect: 25–40 dB definește hipoacuzia ușoară.\n\n40–70 dB — Corect: Textul atribuie intervalul 40–70 dB hipoacuziei moderate.\n\n70–90 dB — Incorect: 70–90 dB corespunde hipoacuziei severe.\n\npeste 90 dB — Incorect: Pragul peste 90 dB definește hipoacuzia profundă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 553, Evaluare — Audiometria tonală (pagini PDF: 226).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    553
   ],
   "pdfPages": [
    226
   ],
   "section": "Evaluare — Audiometria tonală"
  },
  "learningObjective": "Aplicarea pragurilor audiometrice care separă hipoacuzia ușoară de cea moderată, severă și profundă.",
  "optionRationales": [
   "0–20 dB este considerat auz normal.",
   "25–40 dB definește hipoacuzia ușoară.",
   "Textul atribuie intervalul 40–70 dB hipoacuziei moderate.",
   "70–90 dB corespunde hipoacuziei severe.",
   "Pragul peste 90 dB definește hipoacuzia profundă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cele cinci intervale consecutive din aceeași frază sunt ușor de permutat, mai ales pragul de 40 dB partajat între ușoară și moderată."
  },
  "textbookExpressions": [
   "40-70 dB hipoacuzie mo",
   "70-90 dB hipoacuzie severă"
  ]
 },
 {
  "id": "orl-adv-006",
  "topicId": "orl",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații privind testele cu diapazonul sunt adevărate?",
  "options": [
   "Testul Weber folosește un diapazon de 512 Hz plasat central pe frunte, dorsum nasi sau maxilar",
   "Lateralizarea Weber într-o singură ureche semnalează hipoacuzie neurosenzorială contralaterală sau de conducere ipsilaterală",
   "Un pacient cu hipoacuzie de conducere aude diapazonul Rinne mai bine pe mastoidă decât la 2 cm de conduct",
   "Audiometria tonală evaluează recunoașterea vorbirii și discriminarea silabelor",
   "Testul Rinne este mai informativ când hipoacuzia este mixtă și simetrică, decât când este pură și unilaterală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Testul Weber folosește un diapazon de 512 Hz plasat central pe frunte, dorsum nasi sau maxilar — Corect: Frecvența de 512 Hz și locurile de plasare sunt specificate pentru Weber.\n\nLateralizarea Weber într-o singură ureche semnalează hipoacuzie neurosenzorială contralaterală sau de conducere ipsilaterală — Corect: Regula contralateral-neurosenzorial / ipsilateral-conducere este enunțată explicit.\n\nUn pacient cu hipoacuzie de conducere aude diapazonul Rinne mai bine pe mastoidă decât la 2 cm de conduct — Corect: În hipoacuzia de conducere, conducerea osoasă pe mastoidă depășește calea aeriană.\n\nAudiometria tonală evaluează recunoașterea vorbirii și discriminarea silabelor — Incorect: Textul precizează că audiometria tonală nu evaluează recunoașterea vorbirii sau discriminarea.\n\nTestul Rinne este mai informativ când hipoacuzia este mixtă și simetrică, decât când este pură și unilaterală — Incorect: Textul atribuie valoare diagnostică mai mare testelor când hipoacuzia este doar de conducere sau doar neurosenzorială și unilaterală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 553, Evaluare — Testele cu diapazonul (pagini PDF: 226).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    553
   ],
   "pdfPages": [
    226
   ],
   "section": "Evaluare — Testele cu diapazonul"
  },
  "learningObjective": "Interpretarea Weber și Rinne în hipoacuzia pură unilaterală și recunoașterea limitei audiometriei tonale.",
  "optionRationales": [
   "Frecvența de 512 Hz și locurile de plasare sunt specificate pentru Weber.",
   "Regula contralateral-neurosenzorial / ipsilateral-conducere este enunțată explicit.",
   "În hipoacuzia de conducere, conducerea osoasă pe mastoidă depășește calea aeriană.",
   "Textul precizează că audiometria tonală nu evaluează recunoașterea vorbirii sau discriminarea.",
   "Textul atribuie valoare diagnostică mai mare testelor când hipoacuzia este doar de conducere sau doar neurosenzorială și unilaterală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează regula de lateralizare Weber și atribuie audiometriei tonale o funcție (discriminarea vorbirii) pe care textul o exclude."
  },
  "textbookExpressions": [
   "diapazon de 512 Hz",
   "2 cm de conductul auditiv"
  ]
 },
 {
  "id": "orl-adv-007",
  "topicId": "orl",
  "type": "CM",
  "stem": "Tumorile glandelor salivare se caracterizează prin:",
  "options": [
   "Aproximativ 85% își au originea la nivelul glandei parotide",
   "Din tumorile parotidei, 75% sunt benigne, față de 50% la submandibulară și 30% la glandele minore",
   "Aproximativ 80% dintre tumorile benigne sunt adenoame pleomorfe",
   "Cea mai frecventă malignitate a glandelor salivare principale este carcinomul adenoid chistic",
   "Tumora Warthin apare predominant la femeile nefumătoare, în lobul profund al parotidei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Aproximativ 85% își au originea la nivelul glandei parotide — Corect: Proporția de 85% cu origine parotidiană este explicită.\n\nDin tumorile parotidei, 75% sunt benigne, față de 50% la submandibulară și 30% la glandele minore — Corect: Cele trei procente de benignitate (75%, 50%, 30%) sunt enumerate pe sedii.\n\nAproximativ 80% dintre tumorile benigne sunt adenoame pleomorfe — Corect: Adenomul pleomorf/tumora mixtă reprezintă aproximativ 80% dintre benigne.\n\nCea mai frecventă malignitate a glandelor salivare principale este carcinomul adenoid chistic — Incorect: Carcinomul mucoepidermoid este cea mai frecventă malignitate a glandelor principale; adenoidul chistic este cel mai frecvent în afara parotidei.\n\nTumora Warthin apare predominant la femeile nefumătoare, în lobul profund al parotidei — Incorect: Tumora Warthin apare în 8% din cazuri, la bărbați fumători, preponderent în coada parotidei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 579, Glandele salivare — Tumorile benigne și maligne (pagini PDF: 252).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    579
   ],
   "pdfPages": [
    252
   ],
   "section": "Glandele salivare — Tumorile benigne și maligne"
  },
  "learningObjective": "Compararea ratelor de benignitate pe sediu și recunoașterea adenomului pleomorf, distincție de carcinomul mucoepidermoid și de tumora Warthin.",
  "optionRationales": [
   "Proporția de 85% cu origine parotidiană este explicită.",
   "Cele trei procente de benignitate (75%, 50%, 30%) sunt enumerate pe sedii.",
   "Adenomul pleomorf/tumora mixtă reprezintă aproximativ 80% dintre benigne.",
   "Carcinomul mucoepidermoid este cea mai frecventă malignitate a glandelor principale; adenoidul chistic este cel mai frecvent în afara parotidei.",
   "Tumora Warthin apare în 8% din cazuri, la bărbați fumători, preponderent în coada parotidei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează ierarhia mucoepidermoid față de adenoid chistic și profilul Warthin (sex, fumat, coada parotidei)."
  },
  "textbookExpressions": [
   "glandei parotide",
   "adenoame pleomorfe"
  ]
 },
 {
  "id": "orl-adv-008",
  "topicId": "orl",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații diferențiază corect chistul de canal tireoglos de anomalia de arc branhial?",
  "options": [
   "Chistul tireoglos se situează pe linia mediană, de la baza limbii la istmul tiroidian",
   "Chistul tireoglos ascensionează atât la deglutiție, cât și la protruzia limbii",
   "Tratamentul chistului tireoglos este operația Sistrunk",
   "Anomaliile de arc branhial se tratează prin operația Sistrunk, identic chistului tireoglos",
   "Fistula de canal tireoglos este o malformație congenitală prezentă de la naștere"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Chistul tireoglos se situează pe linia mediană, de la baza limbii la istmul tiroidian — Corect: Localizarea aproape mediană, de la baza limbii la istm, este enunțată pentru canalul tireoglos.\n\nChistul tireoglos ascensionează atât la deglutiție, cât și la protruzia limbii — Corect: Ascensionarea la deglutiție și la protruzia limbii este semnul clinic distinctiv.\n\nTratamentul chistului tireoglos este operația Sistrunk — Corect: Tabelul indică operația Sistrunk ca tratament al anomaliei tireoglose.\n\nAnomaliile de arc branhial se tratează prin operația Sistrunk, identic chistului tireoglos — Incorect: Anomaliile de arc branhial sunt tratate prin tehnica McFee „în scară”, nu prin Sistrunk.\n\nFistula de canal tireoglos este o malformație congenitală prezentă de la naștere — Incorect: Tabelul precizează că fistula tireoglosă nu este congenitală, ci urmează infecției sau rezecției inadecvate.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 581, Anomalii congenitale cervicale — Tabelul 27-11 (pagini PDF: 254).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    581
   ],
   "pdfPages": [
    254
   ],
   "section": "Anomalii congenitale cervicale — Tabelul 27-11"
  },
  "learningObjective": "Contrastarea localizării mediane, a mobilității cu limba și a operației Sistrunk față de traiectul lateral și tehnica McFee.",
  "optionRationales": [
   "Localizarea aproape mediană, de la baza limbii la istm, este enunțată pentru canalul tireoglos.",
   "Ascensionarea la deglutiție și la protruzia limbii este semnul clinic distinctiv.",
   "Tabelul indică operația Sistrunk ca tratament al anomaliei tireoglose.",
   "Anomaliile de arc branhial sunt tratate prin tehnica McFee „în scară”, nu prin Sistrunk.",
   "Tabelul precizează că fistula tireoglosă nu este congenitală, ci urmează infecției sau rezecției inadecvate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă operația Sistrunk cu McFee și transformă fistula tireoglosă dobândită într-una congenitală."
  },
  "textbookExpressions": [
   "Operaţia Sistrunk",
   "protruzia limbii"
  ]
 },
 {
  "id": "orl-adv-009",
  "topicId": "orl",
  "type": "CM",
  "stem": "Traumatismele pavilionului auricular și ale membranei timpanice:",
  "options": [
   "Hematomul auricular separă cartilajul de pericondru și, netratat, duce la deformarea de „ureche conopidiformă”",
   "Aproximativ 90% dintre perforațiile timpanice posttraumatice se vindecă fără sechele",
   "Dacă perforația nu se închide în câteva luni, se recomandă timpanoplastie cu grefă din fascia temporalis",
   "Degerăturile urechii impun debridare agresivă imediată a escarei și presiune continuă pe cartilajul expus",
   "Fracturile longitudinale de os temporal însumează aproximativ 15% din fracturile acestui os"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Hematomul auricular separă cartilajul de pericondru și, netratat, duce la deformarea de „ureche conopidiformă” — Corect: Mecanismul de forfecare și sechela de ureche conopidiformă sunt descrise explicit.\n\nAproximativ 90% dintre perforațiile timpanice posttraumatice se vindecă fără sechele — Corect: Rata de 90% de vindecare spontană a perforațiilor posttraumatice este citată.\n\nDacă perforația nu se închide în câteva luni, se recomandă timpanoplastie cu grefă din fascia temporalis — Corect: Timpanoplastia cu fascia temporalis este recomandată dacă vindecarea întârzie câteva luni.\n\nDegerăturile urechii impun debridare agresivă imediată a escarei și presiune continuă pe cartilajul expus — Incorect: Textul cere debridare conservativă, păstrarea umedă a cartilajului și evitarea presiunii.\n\nFracturile longitudinale de os temporal însumează aproximativ 15% din fracturile acestui os — Incorect: Fracturile longitudinale însumează aproximativ 85% din fracturile de os temporal, nu 15%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 556, Trauma auriculară — Perforații și fracturi de os temporal (pagini PDF: 229).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    556
   ],
   "pdfPages": [
    229
   ],
   "section": "Trauma auriculară — Perforații și fracturi de os temporal"
  },
  "learningObjective": "Aplicarea drenajului hematomului auricular, a ratei de vindecare a perforațiilor și a predominanței fracturilor longitudinale.",
  "optionRationales": [
   "Mecanismul de forfecare și sechela de ureche conopidiformă sunt descrise explicit.",
   "Rata de 90% de vindecare spontană a perforațiilor posttraumatice este citată.",
   "Timpanoplastia cu fascia temporalis este recomandată dacă vindecarea întârzie câteva luni.",
   "Textul cere debridare conservativă, păstrarea umedă a cartilajului și evitarea presiunii.",
   "Fracturile longitudinale însumează aproximativ 85% din fracturile de os temporal, nu 15%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează rata 85% față de 15% a fracturilor longitudinale și transformă debridarea conservativă într-una agresivă."
  },
  "textbookExpressions": [
   "conopidifonnă",
   "timpanoplastia"
  ]
 },
 {
  "id": "orl-adv-010",
  "topicId": "orl",
  "type": "CS",
  "stem": "În fractura longitudinală de os temporal, paralizia de nerv facial este:",
  "options": [
   "Frecventă, în jur de 50% din cazuri",
   "Rară, în jur de 15% din cazuri",
   "Prezentă în toate fracturile cu hemotimpan",
   "Mai frecventă decât în fractura orizontală",
   "Independentă de mecanismul de producere, identică în ambele tipuri"
  ],
  "correct": [
   1
  ],
  "explanation": "Frecventă, în jur de 50% din cazuri — Incorect: Pragul de ~50% aparține fracturii orizontale, nu celei longitudinale.\n\nRară, în jur de 15% din cazuri — Corect: Tabelul indică paralizie facială rară (~15%) în fractura longitudinală.\n\nPrezentă în toate fracturile cu hemotimpan — Incorect: Hemotimpanul figurează la fractura orizontală; nu implică paralizie facială constantă.\n\nMai frecventă decât în fractura orizontală — Incorect: Fractura orizontală, nu cea longitudinală, asociază paralizie facială frecventă.\n\nIndependentă de mecanismul de producere, identică în ambele tipuri — Incorect: Tabelul leagă procentele de tipul de fractură (longitudinală față de orizontală).\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 557, Fracturile de os temporal — Tabelul 27-5 (pagini PDF: 230).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    557
   ],
   "pdfPages": [
    230
   ],
   "section": "Fracturile de os temporal — Tabelul 27-5"
  },
  "learningObjective": "Reținerea contrastului numeric dintre paralizia facială rară (~15%) din fractura longitudinală și cea frecventă (~50%) din fractura orizontală.",
  "optionRationales": [
   "Pragul de ~50% aparține fracturii orizontale, nu celei longitudinale.",
   "Tabelul indică paralizie facială rară (~15%) în fractura longitudinală.",
   "Hemotimpanul figurează la fractura orizontală; nu implică paralizie facială constantă.",
   "Fractura orizontală, nu cea longitudinală, asociază paralizie facială frecventă.",
   "Tabelul leagă procentele de tipul de fractură (longitudinală față de orizontală)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează pragurile 15% și 50% între fractura longitudinală și cea orizontală, confuzie clasică de tabel."
  },
  "textbookExpressions": [
   "Rar(-15%)",
   "Frecvent"
  ]
 },
 {
  "id": "orl-adv-011",
  "topicId": "orl",
  "type": "CM",
  "stem": "Otita externă difuză, denumită și „urechea înotătorului”:",
  "options": [
   "Cel mai frecvent agent patogen implicat este Pseudomonas",
   "Tratamentul include toaletarea conductului pentru a permite accesul soluțiilor topice",
   "Dacă edemul împiedică picăturile, se plasează un pansament mic, cu instilații de 2–4 ori pe zi",
   "Agentul etiologic dominant este Streptococcus pneumoniae, ca în otita medie acută",
   "Fungii sunt agenții primari ai otitei externe difuze, înaintea oricărei bacterii"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cel mai frecvent agent patogen implicat este Pseudomonas — Corect: Pseudomonas este citat ca cel mai frecvent agent patogen.\n\nTratamentul include toaletarea conductului pentru a permite accesul soluțiilor topice — Corect: Toaletarea conductului este descrisă ca etapă care facilitează soluțiile topice.\n\nDacă edemul împiedică picăturile, se plasează un pansament mic, cu instilații de 2–4 ori pe zi — Corect: Pansamentul cu instilații de 2–4 ori pe zi este indicația când conductul este obstruat de edem.\n\nAgentul etiologic dominant este Streptococcus pneumoniae, ca în otita medie acută — Incorect: S. pneumoniae este agent al otitei medii acute, nu agentul dominant al otitei externe difuze.\n\nFungii sunt agenții primari ai otitei externe difuze, înaintea oricărei bacterii — Incorect: Fungii sunt incriminați de obicei în infecții secundare pe epiteliu descuamat, nu ca agenți primari.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 557, Otita externă — Formă difuză (pagini PDF: 230).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    557
   ],
   "pdfPages": [
    230
   ],
   "section": "Otita externă — Formă difuză"
  },
  "learningObjective": "Recunoașterea Pseudomonas ca agent principal și a strategiei de toaletă plus pansament, distinctă de flora otitei medii.",
  "optionRationales": [
   "Pseudomonas este citat ca cel mai frecvent agent patogen.",
   "Toaletarea conductului este descrisă ca etapă care facilitează soluțiile topice.",
   "Pansamentul cu instilații de 2–4 ori pe zi este indicația când conductul este obstruat de edem.",
   "S. pneumoniae este agent al otitei medii acute, nu agentul dominant al otitei externe difuze.",
   "Fungii sunt incriminați de obicei în infecții secundare pe epiteliu descuamat, nu ca agenți primari."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută S. pneumoniae din OMA în otita externă și promovează fungii din rol secundar în rol etiologic primar."
  },
  "textbookExpressions": [
   "urechea înotătorului",
   "Cel mai frecvent agent patogen"
  ]
 },
 {
  "id": "orl-adv-012",
  "topicId": "orl",
  "type": "CM",
  "stem": "Otita externă necrotizantă, numită anterior otită externă malignă:",
  "options": [
   "Reprezintă osteomielita osului temporal și a bazei craniului",
   "Cel mai frecvent agent este Pseudomonas aeruginosa",
   "Pacienții la risc sunt diabeticii și imunocompromișii",
   "Infecția nu răspunde la tratamentul topic, necesitând antibioterapie sistemică și topică luni de zile",
   "Debridarea chirurgicală este inutilă chiar în stadiile precoce, fiind rezervată doar sechelelor tardive"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Reprezintă osteomielita osului temporal și a bazei craniului — Corect: Definiția de osteomielită a osului temporal și a bazei craniului este explicită.\n\nCel mai frecvent agent este Pseudomonas aeruginosa — Corect: Pseudomonas aeruginosa este agentul cel mai frecvent citat.\n\nPacienții la risc sunt diabeticii și imunocompromișii — Corect: Diabetul zaharat și imunocompromiterea sunt grupurile la risc.\n\nInfecția nu răspunde la tratamentul topic, necesitând antibioterapie sistemică și topică luni de zile — Corect: Lipsa răspunsului la topic și durata de luni a terapiei agresive sunt descrise pe pagina următoare.\n\nDebridarea chirurgicală este inutilă chiar în stadiile precoce, fiind rezervată doar sechelelor tardive — Incorect: Textul precizează că debridarea chirurgicală poate fi utilă în stadiile precoce.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 557, 558, Otita externă necrotizantă (pagini PDF: 230, 231).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    557,
    558
   ],
   "pdfPages": [
    230,
    231
   ],
   "section": "Otita externă necrotizantă"
  },
  "learningObjective": "Recunoașterea osteomielitei de bază de craniu la diabetic și a eșecului terapiei doar topice.",
  "optionRationales": [
   "Definiția de osteomielită a osului temporal și a bazei craniului este explicită.",
   "Pseudomonas aeruginosa este agentul cel mai frecvent citat.",
   "Diabetul zaharat și imunocompromiterea sunt grupurile la risc.",
   "Lipsa răspunsului la topic și durata de luni a terapiei agresive sunt descrise pe pagina următoare.",
   "Textul precizează că debridarea chirurgicală poate fi utilă în stadiile precoce."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Acceptă corect eșecul topic, dar distractorul final neagă debridarea precoce, confuzie între urgența medicală și fereastra chirurgicală."
  },
  "textbookExpressions": [
   "Pseudomonas aeruginosa",
   "diabet zaharat"
  ]
 },
 {
  "id": "orl-adv-013",
  "topicId": "orl",
  "type": "CM",
  "stem": "Următoarele afirmații despre otita medie acută sunt adevărate:",
  "options": [
   "În SUA este cea mai frecventă infecție pentru care se prescriu antibiotice copiilor",
   "Până la vârsta de 2 ani, 75% dintre copii suferă cel puțin trei episoade",
   "Agenții cei mai frecvenți sunt Streptococcus pneumoniae, Moraxella catarrhalis și Haemophilus influenzae",
   "Dacă se utilizează antibiotice, doza mare de amoxicilină (90 mg/kgc/zi) este de primă linie",
   "Timpanocenteza rămâne tratamentul de bază, recomandat de rutină în era antibioticelor"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "În SUA este cea mai frecventă infecție pentru care se prescriu antibiotice copiilor — Corect: Afirmația despre prescrierea de antibiotice la copii este explicită.\n\nPână la vârsta de 2 ani, 75% dintre copii suferă cel puțin trei episoade — Corect: Procentul de 75% până la 2 ani, cu cel puțin trei episoade, este citat.\n\nAgenții cei mai frecvenți sunt Streptococcus pneumoniae, Moraxella catarrhalis și Haemophilus influenzae — Corect: Cei trei agenți sunt enumerați în această ordine.\n\nDacă se utilizează antibiotice, doza mare de amoxicilină (90 mg/kgc/zi) este de primă linie — Corect: Doza de 90 mg/kgc/zi de amoxicilină este recomandarea de primă linie.\n\nTimpanocenteza rămâne tratamentul de bază, recomandat de rutină în era antibioticelor — Incorect: Textul precizează că timpanocenteza este rar recomandată în prezent, deși permite cultură.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 558, Otita medie acută — Diagnostic și tratament (pagini PDF: 231).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    558
   ],
   "pdfPages": [
    231
   ],
   "section": "Otita medie acută — Diagnostic și tratament"
  },
  "learningObjective": "Aplicarea epidemiologiei, a tridentului bacterian și a dozei de amoxicilină, cu recunoașterea rolului actual marginal al timpanocentezei.",
  "optionRationales": [
   "Afirmația despre prescrierea de antibiotice la copii este explicită.",
   "Procentul de 75% până la 2 ani, cu cel puțin trei episoade, este citat.",
   "Cei trei agenți sunt enumerați în această ordine.",
   "Doza de 90 mg/kgc/zi de amoxicilină este recomandarea de primă linie.",
   "Textul precizează că timpanocenteza este rar recomandată în prezent, deși permite cultură."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează doza de 90 mg/kgc/zi ca fapt memorabil, dar inversează statutul actual al timpanocentezei din era pre-antibiotică."
  },
  "textbookExpressions": [
   "90 mg/kgc/zi",
   "75% dintre copii"
  ]
 },
 {
  "id": "orl-adv-014",
  "topicId": "orl",
  "type": "CS",
  "stem": "Plasarea de tub prin timpanostomie este luată în considerare după:",
  "options": [
   "6 episoade de otită medie acută în 6 luni",
   "Un singur episod de OMA cu febră, fără alte criterii",
   "3 episoade de OMA pe tot parcursul copilăriei",
   "Otita medie seroasă rezolvată în prima lună de urmărire",
   "Orice OMA tratată cu azitromicină pentru alergie la penicilină"
  ],
  "correct": [
   0
  ],
  "explanation": "6 episoade de otită medie acută în 6 luni — Corect: Textul definește candidații prin 6 episoade de OMA în 6 luni.\n\nUn singur episod de OMA cu febră, fără alte criterii — Incorect: Un episod izolat nu îndeplinește criteriul de recurență.\n\n3 episoade de OMA pe tot parcursul copilăriei — Incorect: Pragul nu este 3 episoade pe tot parcursul copilăriei.\n\nOtita medie seroasă rezolvată în prima lună de urmărire — Incorect: OMS autolimitată la 3 luni nu este indicația de tub din acest paragraf; paragraful citează OMA recurentă.\n\nOrice OMA tratată cu azitromicină pentru alergie la penicilină — Incorect: Alergia la penicilină orientează spre macrolid, nu spre timpanostomie de principiu.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 558, Otita medie acută — Timpanostomia (pagini PDF: 231).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    558
   ],
   "pdfPages": [
    231
   ],
   "section": "Otita medie acută — Timpanostomia"
  },
  "learningObjective": "Reținerea pragului de 6 episoade în 6 luni ca indicație de tub de timpanostomie în OMA recurentă.",
  "optionRationales": [
   "Textul definește candidații prin 6 episoade de OMA în 6 luni.",
   "Un episod izolat nu îndeplinește criteriul de recurență.",
   "Pragul nu este 3 episoade pe tot parcursul copilăriei.",
   "OMS autolimitată la 3 luni nu este indicația de tub din acest paragraf; paragraful citează OMA recurentă.",
   "Alergia la penicilină orientează spre macrolid, nu spre timpanostomie de principiu."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractează cu pragul de 3 episoade (folosit la copii pentru OMA ca epidemiologie) în locul criteriului 6 în 6 luni."
  },
  "textbookExpressions": [
   "6 episoade",
   "tub prin timpanostomie"
  ]
 },
 {
  "id": "orl-adv-015",
  "topicId": "orl",
  "type": "CM",
  "stem": "Otita medie seroasă:",
  "options": [
   "Constă în lichid în urechea medie, fără semne și simptome de infecție",
   "Este o boală autolimitată; urmărirea 3 luni este recomandată dacă nu există risc de tulburări de limbaj",
   "Antibioticele, antihistaminicele, decongestionantele și steroizii nu și-au dovedit eficiența",
   "Este cea mai frecventă patologie a urechii medii, înaintea otitei medii acute",
   "Miringotomia cu tuburi de ventilație se indică din prima săptămână, fără perioadă de observație"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Constă în lichid în urechea medie, fără semne și simptome de infecție — Corect: Definiția prin lichid fără semne de infecție este explicită.\n\nEste o boală autolimitată; urmărirea 3 luni este recomandată dacă nu există risc de tulburări de limbaj — Corect: Ghidul citat recomandă urmărire 3 luni în absența riscului de limbaj.\n\nAntibioticele, antihistaminicele, decongestionantele și steroizii nu și-au dovedit eficiența — Corect: Ineficiența antibioticelor, antihistaminicelor, decongestionantelor și steroizilor este enunțată.\n\nEste cea mai frecventă patologie a urechii medii, înaintea otitei medii acute — Incorect: Textul o plasează ca a doua cea mai frecventă patologie a urechii medii, după OMA.\n\nMiringotomia cu tuburi de ventilație se indică din prima săptămână, fără perioadă de observație — Incorect: Tuburile se recomandă dacă lichidul persistă peste 3 luni, nu din prima săptămână.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 558, 559, Otita medie seroasă (pagini PDF: 231, 232).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    558,
    559
   ],
   "pdfPages": [
    231,
    232
   ],
   "section": "Otita medie seroasă"
  },
  "learningObjective": "Recunoașterea OMS ca a doua patologie ca frecvență, autolimitată, fără beneficiu demonstrat al medicației antiinflamatorii sau antihistaminice.",
  "optionRationales": [
   "Definiția prin lichid fără semne de infecție este explicită.",
   "Ghidul citat recomandă urmărire 3 luni în absența riscului de limbaj.",
   "Ineficiența antibioticelor, antihistaminicelor, decongestionantelor și steroizilor este enunțată.",
   "Textul o plasează ca a doua cea mai frecventă patologie a urechii medii, după OMA.",
   "Tuburile se recomandă dacă lichidul persistă peste 3 luni, nu din prima săptămână."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează locul OMS față de OMA și comprimă fereastra de 3 luni într-o indicație chirurgicală imediată."
  },
  "textbookExpressions": [
   "Timpanometria este utilă",
   "3 luni"
  ]
 },
 {
  "id": "orl-adv-016",
  "topicId": "orl",
  "type": "CM",
  "stem": "Colesteatomul urechii medii:",
  "options": [
   "Este un chist acoperit de tegument, producător de keratină, cu origine posibilă într-o membrană timpanică patologică",
   "Enzimele osteolitice din baza membranei produc osteonecroză, cu risc de eroziune a oscioarelor, a nervului facial și a cohleei",
   "Răspunde durabil la antibiotice topice, similar otitei externe difuze",
   "Se dezvoltă pe fondul unei presiuni pozitive continue în urechea medie",
   "Otoscopia arată o masă eritematoasă pulsatilă în spatele unui timpan translucid, ca în glomus tympanicum"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este un chist acoperit de tegument, producător de keratină, cu origine posibilă într-o membrană timpanică patologică — Corect: Definiția de chist tegumentar producător de keratină este explicită.\n\nEnzimele osteolitice din baza membranei produc osteonecroză, cu risc de eroziune a oscioarelor, a nervului facial și a cohleei — Corect: Lista structurilor erodabile și osteonecroza enzimatică sunt descrise.\n\nRăspunde durabil la antibiotice topice, similar otitei externe difuze — Incorect: Tratamentul necesar este excizia chirurgicală, nu terapia topică ca în otita externă.\n\nSe dezvoltă pe fondul unei presiuni pozitive continue în urechea medie — Incorect: Colesteatomul se dezvoltă pe disfuncție tubară cronică și presiune negativă, nu pozitivă.\n\nOtoscopia arată o masă eritematoasă pulsatilă în spatele unui timpan translucid, ca în glomus tympanicum — Incorect: Masa albicioasă cu granulație și perforație este aspectul otoscopic; masa eritematoasă pulsatilă descrie glomus tympanicum.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 559, Colesteatomul (pagini PDF: 232).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    559
   ],
   "pdfPages": [
    232
   ],
   "section": "Colesteatomul"
  },
  "learningObjective": "Recunoașterea naturii de sac de retracție keratinizant și a osteonecrozei enzimatice, distincte de glomus și de otita externă.",
  "optionRationales": [
   "Definiția de chist tegumentar producător de keratină este explicită.",
   "Lista structurilor erodabile și osteonecroza enzimatică sunt descrise.",
   "Tratamentul necesar este excizia chirurgicală, nu terapia topică ca în otita externă.",
   "Colesteatomul se dezvoltă pe disfuncție tubară cronică și presiune negativă, nu pozitivă.",
   "Masa albicioasă cu granulație și perforație este aspectul otoscopic; masa eritematoasă pulsatilă descrie glomus tympanicum."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează semnul presiunii (negativă față de pozitivă) și substituie aspectul albicios cu masa pulsatilă a glomusului de pe pagina următoare."
  },
  "textbookExpressions": [
   "produce keratină",
   "Enzimele osteolitice"
  ]
 },
 {
  "id": "orl-adv-017",
  "topicId": "orl",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la otoscleroză:",
  "options": [
   "Afectează cel mai frecvent adulții tineri și produce hipoacuzie de transmisie prin fixarea piciorului scăriței",
   "Fixează ciocanul, nu scărița, și produce hipoacuzie neurosenzorială pură de la debut",
   "Nu are predispoziție genetică și se ameliorează caracteristic în sarcină",
   "Stapedectomia este inutilă, proteza auditivă fiind singura opțiune acceptată de majoritatea pacienților",
   "Afectează doar bărbații, fără implicare cohleară posibilă"
  ],
  "correct": [
   0
  ],
  "explanation": "Afectează cel mai frecvent adulții tineri și produce hipoacuzie de transmisie prin fixarea piciorului scăriței — Corect: Vârsta, tipul de hipoacuzie și fixarea scăriței sunt enunțate explicit.\n\nFixează ciocanul, nu scărița, și produce hipoacuzie neurosenzorială pură de la debut — Incorect: Osul spongios afectează piciorul scăriței; hipoacuzia neurosenzorială apare doar dacă este antrenată și cohleea.\n\nNu are predispoziție genetică și se ameliorează caracteristic în sarcină — Incorect: Textul descrie predispoziție genetică și agravare în sarcină, nu ameliorare.\n\nStapedectomia este inutilă, proteza auditivă fiind singura opțiune acceptată de majoritatea pacienților — Incorect: Majoritatea pacienților preferă înlocuirea chirurgicală a scăriței (stapedectomie).\n\nAfectează doar bărbații, fără implicare cohleară posibilă — Incorect: Afectează femeile și bărbații; cohleea poate fi antrenată secundar.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 559, Otoscleroza (pagini PDF: 232).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    559
   ],
   "pdfPages": [
    232
   ],
   "section": "Otoscleroza"
  },
  "learningObjective": "Recunoașterea fixării piciorului scăriței ca mecanism al hipoacuziei de transmisie la adultul tânăr.",
  "optionRationales": [
   "Vârsta, tipul de hipoacuzie și fixarea scăriței sunt enunțate explicit.",
   "Osul spongios afectează piciorul scăriței; hipoacuzia neurosenzorială apare doar dacă este antrenată și cohleea.",
   "Textul descrie predispoziție genetică și agravare în sarcină, nu ameliorare.",
   "Majoritatea pacienților preferă înlocuirea chirurgicală a scăriței (stapedectomie).",
   "Afectează femeile și bărbații; cohleea poate fi antrenată secundar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă oscicul fixat (ciocan față de scăriță) și inversează evoluția din sarcină (agravare față de ameliorare)."
  },
  "textbookExpressions": [
   "piciorul scăriţei",
   "stapedectomie"
  ]
 },
 {
  "id": "orl-adv-018",
  "topicId": "orl",
  "type": "CM",
  "stem": "Hipoacuzia neurosenzorială dobândită:",
  "options": [
   "Presbiacuzia rezultă din degenerare cohleară și afectează 75% dintre oameni până la 80 de ani",
   "Expunerea prelungită la zgomote cu frecvența peste 90 dB lezează celulele păroase, pe frecvențe medii și înalte",
   "Eritromicina și aspirina pot determina o hipoacuzie neurosenzorială reversibilă",
   "Hipoacuzia de cauză genetică pediatrică afectează 1 din 200 de copii, de obicei cu transmitere dominantă",
   "Aminoglicozidele lezează doar celulele păroase ale urechii medii, fără impact vestibular"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Presbiacuzia rezultă din degenerare cohleară și afectează 75% dintre oameni până la 80 de ani — Corect: Procentul de 75% până la 80 de ani este citat pentru presbiacuzie.\n\nExpunerea prelungită la zgomote cu frecvența peste 90 dB lezează celulele păroase, pe frecvențe medii și înalte — Corect: Pragul de peste 90 dB și topografia pe frecvențe medii și înalte sunt explicite.\n\nEritromicina și aspirina pot determina o hipoacuzie neurosenzorială reversibilă — Corect: Reversibilitatea hipoacuziei induse de eritromicină și aspirină este menționată.\n\nHipoacuzia de cauză genetică pediatrică afectează 1 din 200 de copii, de obicei cu transmitere dominantă — Incorect: Textul citează 1 din 2.000 de copii, de obicei cu model recesiv, nu 1 din 200 dominant.\n\nAminoglicozidele lezează doar celulele păroase ale urechii medii, fără impact vestibular — Incorect: Aminoglicozidele lezează cohleea și celulele păroase vestibulare, nu urechea medie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 559, Hipoacuzia neurosenzorială (pagini PDF: 232).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    559
   ],
   "pdfPages": [
    232
   ],
   "section": "Hipoacuzia neurosenzorială"
  },
  "learningObjective": "Separarea presbiacuziei, a pragului de 90 dB și a ototoxicității reversibile (eritromicină, aspirină) de leziunea aminoglicozidică vestibulo-cohleară.",
  "optionRationales": [
   "Procentul de 75% până la 80 de ani este citat pentru presbiacuzie.",
   "Pragul de peste 90 dB și topografia pe frecvențe medii și înalte sunt explicite.",
   "Reversibilitatea hipoacuziei induse de eritromicină și aspirină este menționată.",
   "Textul citează 1 din 2.000 de copii, de obicei cu model recesiv, nu 1 din 200 dominant.",
   "Aminoglicozidele lezează cohleea și celulele păroase vestibulare, nu urechea medie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 1/2.000 cu 1/200 și mută leziunea aminoglicozidică din labirint în urechea medie, lângă pragul de 90 dB comun cu hipoacuzia profundă."
  },
  "textbookExpressions": [
   "75% dintre oameni",
   "aspirina"
  ]
 },
 {
  "id": "orl-adv-019",
  "topicId": "orl",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații diferențiază corect neuronita vestibulară de vertijul pozițional paroxistic benign?",
  "options": [
   "Neuronita vestibulară produce vertij sever cu durată de câteva zile și ameliorare în câteva săptămâni",
   "Vertijul pozițional paroxistic benign durează de la câteva secunde până la câteva minute și se diagnostichează prin manevra Dix-Hallpike",
   "BPPV este determinat de canalolitiază sau otoconii libere în endolimfa canalelor semicirculare",
   "Manevra Epley este inutilă în BPPV, procedurile distructive vestibulare fiind prima intenție",
   "Inhibitorii vestibulari se prescriu luni de zile în neuronită, ca tratament de fond, nu 1–2 zile"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Neuronita vestibulară produce vertij sever cu durată de câteva zile și ameliorare în câteva săptămâni — Corect: Durata de zile cu ameliorare în săptămâni este caracteristică neuronitei.\n\nVertijul pozițional paroxistic benign durează de la câteva secunde până la câteva minute și se diagnostichează prin manevra Dix-Hallpike — Corect: Fereastra de secunde-minute și manevra Dix-Hallpike definesc BPPV.\n\nBPPV este determinat de canalolitiază sau otoconii libere în endolimfa canalelor semicirculare — Corect: Canalolitiaza/otoconiile libere sunt mecanismul enunțat.\n\nManevra Epley este inutilă în BPPV, procedurile distructive vestibulare fiind prima intenție — Incorect: Manevrele de repoziționare (Epley) sunt foarte eficiente; procedurile distructive sunt rezervate cazurilor refractare.\n\nInhibitorii vestibulari se prescriu luni de zile în neuronită, ca tratament de fond, nu 1–2 zile — Incorect: Inhibitorii vestibulari se folosesc pe termen scurt, 1–2 zile, nu luni.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 559, 560, Patologia vestibulară — Neuronita și BPPV (pagini PDF: 232, 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    559,
    560
   ],
   "pdfPages": [
    232,
    233
   ],
   "section": "Patologia vestibulară — Neuronita și BPPV"
  },
  "learningObjective": "Contrastarea duratei (zile față de secunde-minute) și a diagnosticului Dix-Hallpike, cu rezervarea procedurilor distructive cazurilor refractare.",
  "optionRationales": [
   "Durata de zile cu ameliorare în săptămâni este caracteristică neuronitei.",
   "Fereastra de secunde-minute și manevra Dix-Hallpike definesc BPPV.",
   "Canalolitiaza/otoconiile libere sunt mecanismul enunțat.",
   "Manevrele de repoziționare (Epley) sunt foarte eficiente; procedurile distructive sunt rezervate cazurilor refractare.",
   "Inhibitorii vestibulari se folosesc pe termen scurt, 1–2 zile, nu luni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează durata episoadelor și promovează distrucția vestibulară ca primă linie în locul manevrei Epley."
  },
  "textbookExpressions": [
   "Dix-Hallpike",
   "câteva secunde"
  ]
 },
 {
  "id": "orl-adv-020",
  "topicId": "orl",
  "type": "CM",
  "stem": "Boala Meniere:",
  "options": [
   "Este hidrops endolimfatic, cu hipoacuzie episodică, vertij debilitant de câteva ore, tinitus și plenitudine auriculară",
   "Este de obicei unilaterală și se asociază cu bombarea sau ruperea membranei Reissner",
   "Tratamentul medical constă în regim hiposodat și diuretice",
   "Decompresia sacului endolimfatic este tratamentul inițial, înaintea oricărei măsuri dietetice",
   "Vertijul durează câteva secunde și se reproduce prin manevra Dix-Hallpike"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este hidrops endolimfatic, cu hipoacuzie episodică, vertij debilitant de câteva ore, tinitus și plenitudine auriculară — Corect: Tetrada clinică și identificarea ca hidrops endolimfatic sunt explicite.\n\nEste de obicei unilaterală și se asociază cu bombarea sau ruperea membranei Reissner — Corect: Unilateralitatea și leziunea membranei Reissner sunt descrise.\n\nTratamentul medical constă în regim hiposodat și diuretice — Corect: Regimul hiposodat și diureticele constituie tratamentul medical.\n\nDecompresia sacului endolimfatic este tratamentul inițial, înaintea oricărei măsuri dietetice — Incorect: Chirurgia sacului sau a nervului vestibular este rezervată vertijului debilitant neresponsiv.\n\nVertijul durează câteva secunde și se reproduce prin manevra Dix-Hallpike — Incorect: Durata de secunde și Dix-Hallpike definesc BPPV, nu Meniere.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 560, Boala Meniere — Hidropsul endolimfatic (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    560
   ],
   "pdfPages": [
    233
   ],
   "section": "Boala Meniere — Hidropsul endolimfatic"
  },
  "learningObjective": "Recunoașterea tetradei Meniere și a duratei de ore, distinctă de BPPV, cu ierarhia hiposodat/diuretice înaintea chirurgiei.",
  "optionRationales": [
   "Tetrada clinică și identificarea ca hidrops endolimfatic sunt explicite.",
   "Unilateralitatea și leziunea membranei Reissner sunt descrise.",
   "Regimul hiposodat și diureticele constituie tratamentul medical.",
   "Chirurgia sacului sau a nervului vestibular este rezervată vertijului debilitant neresponsiv.",
   "Durata de secunde și Dix-Hallpike definesc BPPV, nu Meniere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută durata de secunde a BPPV asupra Meniere și inversează ierarhia medical-chirurgicală a sacului endolimfatic."
  },
  "textbookExpressions": [
   "hidropsul endolimfatic",
   "membranei Reissner"
  ]
 },
 {
  "id": "orl-adv-021",
  "topicId": "orl",
  "type": "CM",
  "stem": "Paralizia Bell:",
  "options": [
   "Este cea mai frecventă formă de paralizie facială, idiopatică, cu infecție herpetică confirmată prin PCR",
   "Se instalează în câteva ore, poate deveni completă, asociază durere mastoidiană și durează sub 72 de ore",
   "Leziunile supranucleare, ca ischemia cerebrovasculară, afectează caracteristic fruntea, lipsită de inervație încrucișată",
   "Majoritatea cazurilor necesită explorare chirurgicală imediată a conductului auditiv intern",
   "Paralizia persistentă sau recurentă nu justifică imagistică, prognosticul fiind rezervat doar în traumatism"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este cea mai frecventă formă de paralizie facială, idiopatică, cu infecție herpetică confirmată prin PCR — Corect: Caracterul idiopatic, frecvența maximă și confirmarea HSV prin PCR sunt enunțate.\n\nSe instalează în câteva ore, poate deveni completă, asociază durere mastoidiană și durează sub 72 de ore — Corect: Cinetica de ore, durerea mastoidiană și pragul de 72 de ore sunt descrise.\n\nLeziunile supranucleare, ca ischemia cerebrovasculară, afectează caracteristic fruntea, lipsită de inervație încrucișată — Incorect: Textul precizează că leziunile supranucleare nu afectează frecvent fruntea, datorită fibrelor corticobulbare directe și încrucișate.\n\nMajoritatea cazurilor necesită explorare chirurgicală imediată a conductului auditiv intern — Incorect: Majoritatea cazurilor se vindecă spontan; chirurgia nu este tratamentul inițial.\n\nParalizia persistentă sau recurentă nu justifică imagistică, prognosticul fiind rezervat doar în traumatism — Incorect: Paralizia persistentă sau recurentă impune imagistică pentru a exclude o tumoră.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 560, Patologia nervului facial — Paralizia Bell (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    560
   ],
   "pdfPages": [
    233
   ],
   "section": "Patologia nervului facial — Paralizia Bell"
  },
  "learningObjective": "Recunoașterea ferestrei sub 72 de ore și a sparing-ului frunții în leziunea supranucleară, opus paraliziei Bell periferice.",
  "optionRationales": [
   "Caracterul idiopatic, frecvența maximă și confirmarea HSV prin PCR sunt enunțate.",
   "Cinetica de ore, durerea mastoidiană și pragul de 72 de ore sunt descrise.",
   "Textul precizează că leziunile supranucleare nu afectează frecvent fruntea, datorită fibrelor corticobulbare directe și încrucișate.",
   "Majoritatea cazurilor se vindecă spontan; chirurgia nu este tratamentul inițial.",
   "Paralizia persistentă sau recurentă impune imagistică pentru a exclude o tumoră."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează semnul frunții (supranuclear față de periferic) și transformă evoluția spontană într-o indicație chirurgicală de urgență."
  },
  "textbookExpressions": [
   "paralizie Bell",
   "<72 de ore"
  ]
 },
 {
  "id": "orl-adv-022",
  "topicId": "orl",
  "type": "CS",
  "stem": "Semnul patognomonic al schwanomului vestibular este:",
  "options": [
   "Hipoacuzie neurosenzorială cu discriminare vocală slabă, însoțită de tinitus",
   "Hipoacuzie de transmisie simetrică, cu Rinne negativ bilateral",
   "Otoree purulentă cronică și masă albicioasă timpanică",
   "Tinitus pulsatil cu masă eritematoasă în spatele unui timpan translucid",
   "Fixarea piciorului scăriței, agravată în sarcină"
  ],
  "correct": [
   0
  ],
  "explanation": "Hipoacuzie neurosenzorială cu discriminare vocală slabă, însoțită de tinitus — Corect: Textul numește explicit această asociere semn patognomonic.\n\nHipoacuzie de transmisie simetrică, cu Rinne negativ bilateral — Incorect: Hipoacuzia de transmisie cu Rinne negativ descrie otoscleroza sau patologia de ureche medie.\n\nOtoree purulentă cronică și masă albicioasă timpanică — Incorect: Otoreea și masa albicioasă descriu colesteatomul.\n\nTinitus pulsatil cu masă eritematoasă în spatele unui timpan translucid — Incorect: Tinitusul pulsatil și masa eritematoasă descriu glomus tympanicum.\n\nFixarea piciorului scăriței, agravată în sarcină — Incorect: Fixarea scăriței definește otoscleroza, nu schwanomul de VIII.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 560, Neoplazii otologice — Schwanomul vestibular (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    560
   ],
   "pdfPages": [
    233
   ],
   "section": "Neoplazii otologice — Schwanomul vestibular"
  },
  "learningObjective": "Diferențierea triadei SNHL plus discriminare slabă plus tinitus de glomus, colesteatom și otoscleroză, toate din același capitol.",
  "optionRationales": [
   "Textul numește explicit această asociere semn patognomonic.",
   "Hipoacuzia de transmisie cu Rinne negativ descrie otoscleroza sau patologia de ureche medie.",
   "Otoreea și masa albicioasă descriu colesteatomul.",
   "Tinitusul pulsatil și masa eritematoasă descriu glomus tympanicum.",
   "Fixarea scăriței definește otoscleroza, nu schwanomul de VIII."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Așază patognomonicul schwanomului lângă trei entități otologice din aceeași pagină (glomus, otoscleroză, colesteatom) cu semne aproape superpozabile."
  },
  "textbookExpressions": [
   "Semnul patognomonic",
   "discriminare vocală"
  ]
 },
 {
  "id": "orl-adv-023",
  "topicId": "orl",
  "type": "CM",
  "stem": "Drenajul sinusurilor paranazale se caracterizează prin:",
  "options": [
   "Canalul nazo-lacrimal se deschide în meatul inferior",
   "Sinusurile etmoidal anterior, maxilar și frontal se deschid în meatul mijlociu",
   "Regiunea sinusului etmoid anterior plus meatul mijlociu alcătuiește complexul ostio-meatal",
   "Celulele etmoidale posterioare și sinusul sfenoidal drenează în meatul superior",
   "Sinusul sfenoidal și celulele etmoidale posterioare drenează în meatul inferior, alături de canalul nazo-lacrimal"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Canalul nazo-lacrimal se deschide în meatul inferior — Corect: Drenajul nazo-lacrimal în meatul inferior este explicit.\n\nSinusurile etmoidal anterior, maxilar și frontal se deschid în meatul mijlociu — Corect: Cele trei sinusuri anterioare se deschid în meatul mijlociu.\n\nRegiunea sinusului etmoid anterior plus meatul mijlociu alcătuiește complexul ostio-meatal — Corect: Definiția complexului ostio-meatal este dată în text.\n\nCelulele etmoidale posterioare și sinusul sfenoidal drenează în meatul superior — Corect: Drenajul posterior (etmoid posterior și sfenoid) în meatul superior este enunțat.\n\nSinusul sfenoidal și celulele etmoidale posterioare drenează în meatul inferior, alături de canalul nazo-lacrimal — Incorect: Meatul inferior primește canalul nazo-lacrimal, nu sfenoidul sau etmoidul posterior.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 561, Nasul și sinusurile — Anatomie (pagini PDF: 234).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    561
   ],
   "pdfPages": [
    234
   ],
   "section": "Nasul și sinusurile — Anatomie"
  },
  "learningObjective": "Maparea celor trei meate: lacrimal inferior, ostio-meatal mijlociu, sfenoid-etmoid posterior superior.",
  "optionRationales": [
   "Drenajul nazo-lacrimal în meatul inferior este explicit.",
   "Cele trei sinusuri anterioare se deschid în meatul mijlociu.",
   "Definiția complexului ostio-meatal este dată în text.",
   "Drenajul posterior (etmoid posterior și sfenoid) în meatul superior este enunțat.",
   "Meatul inferior primește canalul nazo-lacrimal, nu sfenoidul sau etmoidul posterior."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează meatul superior cu cel inferior pentru sfenoid și etmoidul posterior, confuzie anatomică clasică."
  },
  "textbookExpressions": [
   "complex ostio-meatal",
   "meatului mijlociu"
  ]
 },
 {
  "id": "orl-adv-024",
  "topicId": "orl",
  "type": "CS",
  "stem": "Sediul cel mai frecvent al epistaxisului anterior este:",
  "options": [
   "Plexul Kiesselbach de pe septul nazal, cu ramuri din carotida internă și din cea externă",
   "Artera sfenopalatină izolată, fără contribuție din carotida internă",
   "Arterele etmoidale, ramuri desprinse din carotida externă, fără aport oftalmic",
   "Plexul pterigoid, prin vene fără valve către sinusul cavernos",
   "Ostiumul sinusului sfenoidal, în meatul superior"
  ],
  "correct": [
   0
  ],
  "explanation": "Plexul Kiesselbach de pe septul nazal, cu ramuri din carotida internă și din cea externă — Corect: Textul identifică plexul Kiesselbach ca sediul cel mai frecvent al sângerărilor nazale, cu dublă origine carotidă.\n\nArtera sfenopalatină izolată, fără contribuție din carotida internă — Incorect: Artera sfenopalatină este principala sursă a cavităților nazale, dar sediul tipic al epistaxisului anterior este plexul septal.\n\nArterele etmoidale, ramuri desprinse din carotida externă, fără aport oftalmic — Incorect: Arterele etmoidale sunt ramuri oftalmice din carotida internă, nu din cea externă.\n\nPlexul pterigoid, prin vene fără valve către sinusul cavernos — Incorect: Plexul pterigoid explică diseminarea infecțioasă, nu originea epistaxisului anterior.\n\nOstiumul sinusului sfenoidal, în meatul superior — Incorect: Ostiumul sfenoidal nu este sediul clasic al epistaxisului anterior.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 561, Vascularizația nasului — Plexul Kiesselbach (pagini PDF: 234).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    561
   ],
   "pdfPages": [
    234
   ],
   "section": "Vascularizația nasului — Plexul Kiesselbach"
  },
  "learningObjective": "Identificarea plexului Kiesselbach ca zonă de confluență internă-externă, distinctă de sfenopalatină ca sursă principală posterioară.",
  "optionRationales": [
   "Textul identifică plexul Kiesselbach ca sediul cel mai frecvent al sângerărilor nazale, cu dublă origine carotidă.",
   "Artera sfenopalatină este principala sursă a cavităților nazale, dar sediul tipic al epistaxisului anterior este plexul septal.",
   "Arterele etmoidale sunt ramuri oftalmice din carotida internă, nu din cea externă.",
   "Plexul pterigoid explică diseminarea infecțioasă, nu originea epistaxisului anterior.",
   "Ostiumul sfenoidal nu este sediul clasic al epistaxisului anterior."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confruntă plexul Kiesselbach cu sfenopalatina (sursa principală posterioară) și cu originea etmoidalelor (carotidă internă, nu externă)."
  },
  "textbookExpressions": [
   "Kiesselbach",
   "sfenopalatină"
  ]
 },
 {
  "id": "orl-adv-025",
  "topicId": "orl",
  "type": "CM",
  "stem": "Indicați afirmațiile corecte privind managementul epistaxisului:",
  "options": [
   "Cea mai frecventă cauză este traumatismul mucoasei nazale",
   "Angiofibromul nazo-faringian juvenil trebuie suspicionat la adolescentul de sex masculin cu epistaxis unilateral recurent",
   "Pacienții cu tamponament posterior se spitalizează, cu oxigen umidificat și antibioterapie profilactică",
   "Ligatura arterelor etmoidale este procedurile de elecție pentru sângerarea posterioară",
   "Tamponamentul anterior este suficient când sângele continuă să se exteriorizeze în faringe"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cea mai frecventă cauză este traumatismul mucoasei nazale — Corect: Traumatismul este numit cea mai frecventă cauză.\n\nAngiofibromul nazo-faringian juvenil trebuie suspicionat la adolescentul de sex masculin cu epistaxis unilateral recurent — Corect: Profilul adolescent masculin cu sângerare unilaterală este clasic pentru angiofibrom.\n\nPacienții cu tamponament posterior se spitalizează, cu oxigen umidificat și antibioterapie profilactică — Corect: Spitalizarea, oxigenul umidificat și antibioterapia profilactică sunt cerute după tamponament posterior.\n\nLigatura arterelor etmoidale este procedurile de elecție pentru sângerarea posterioară — Incorect: Pentru sângerarea posterioară se leagă sau se embolizează artera maxilară internă; etmoidalele vizează epistaxisul antero-superior.\n\nTamponamentul anterior este suficient când sângele continuă să se exteriorizeze în faringe — Incorect: Continuarea sângerării faringiene după un tamponament anterior bine realizat impune tamponament posterior.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 563, Epistaxisul — Cauze și tratament (pagini PDF: 236).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    563
   ],
   "pdfPages": [
    236
   ],
   "section": "Epistaxisul — Cauze și tratament"
  },
  "learningObjective": "Ierarhia traumatism–cauterizare–tamponament și recunoașterea angiofibromului juvenil, cu distincția ligaturii etmoidale față de maxilara internă.",
  "optionRationales": [
   "Traumatismul este numit cea mai frecventă cauză.",
   "Profilul adolescent masculin cu sângerare unilaterală este clasic pentru angiofibrom.",
   "Spitalizarea, oxigenul umidificat și antibioterapia profilactică sunt cerute după tamponament posterior.",
   "Pentru sângerarea posterioară se leagă sau se embolizează artera maxilară internă; etmoidalele vizează epistaxisul antero-superior.",
   "Continuarea sângerării faringiene după un tamponament anterior bine realizat impune tamponament posterior."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează teritoriul ligaturii (etmoidale față de maxilară internă) și tratează eșecul tamponamentului anterior ca pe un succes."
  },
  "textbookExpressions": [
   "Kisselbach",
   "tamponament nazal anterior"
  ]
 },
 {
  "id": "orl-adv-026",
  "topicId": "orl",
  "type": "CM",
  "stem": "Rinita alergică:",
  "options": [
   "Afectează 20% din populație și este mediată de imunoglobulinele E",
   "Un istoric familial pozitiv este întâlnit la 50% dintre pacienți",
   "Imunoterapia alergen-specifică este eficientă și în rinitele non-IgE, după o singură injecție",
   "Cromoglicatul de sodiu acționează prin vasoconstricție directă a cornetelor, similar decongestionantelor",
   "Testele cutanate sunt caracteristic negative, diagnosticul bazându-se doar pe paloarea mucoasei"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Afectează 20% din populație și este mediată de imunoglobulinele E — Corect: Prevalența de 20% și medierea IgE sunt explicite.\n\nUn istoric familial pozitiv este întâlnit la 50% dintre pacienți — Corect: Procentul de 50% cu istoric familial este citat.\n\nImunoterapia alergen-specifică este eficientă și în rinitele non-IgE, după o singură injecție — Incorect: Imunoterapia este eficientă doar în boala mediată de IgE și necesită ani de întreținere.\n\nCromoglicatul de sodiu acționează prin vasoconstricție directă a cornetelor, similar decongestionantelor — Incorect: Cromoglicatul previne degranularea mastocitelor, nu vasoconstricția.\n\nTestele cutanate sunt caracteristic negative, diagnosticul bazându-se doar pe paloarea mucoasei — Incorect: Testele cutanate sunt adesea pozitive, iar aspectul rinoscopic nu este specific.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 564, Rinita alergică (pagini PDF: 237).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    564
   ],
   "pdfPages": [
    237
   ],
   "section": "Rinita alergică"
  },
  "learningObjective": "Reținerea prevalenței de 20%, a agregării familiale de 50% și a mecanismului IgE, opus rinitei medicamentoase sau hormonale.",
  "optionRationales": [
   "Prevalența de 20% și medierea IgE sunt explicite.",
   "Procentul de 50% cu istoric familial este citat.",
   "Imunoterapia este eficientă doar în boala mediată de IgE și necesită ani de întreținere.",
   "Cromoglicatul previne degranularea mastocitelor, nu vasoconstricția.",
   "Testele cutanate sunt adesea pozitive, iar aspectul rinoscopic nu este specific."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde imunoterapia dincolo de IgE și confundă cromoglicatul cu un decongestionant vasoconstrictor."
  },
  "textbookExpressions": [
   "20% din populaţie",
   "imunoglobulinele E"
  ]
 },
 {
  "id": "orl-adv-027",
  "topicId": "orl",
  "type": "CM",
  "stem": "Polipoza nazală:",
  "options": [
   "Presupune mase bilaterale, multiple, translucide, care apar la complexul ostio-meatal",
   "Polipii unilaterali, mai ales cu sângerare, cresc suspiciunea unei neoplazii",
   "Sinuzita polipoasă este rară la copii și impune excluderea fibrozei chistice sau a imunodeficienței",
   "Excizia chirurgicală este prima intenție, înaintea oricărei cure de steroizi",
   "Polipii sunt aproape toți unilaterali la adultul tânăr, fără legătură cu astmul sau cu aspirina"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Presupune mase bilaterale, multiple, translucide, care apar la complexul ostio-meatal — Corect: Morfologia bilaterală translucidă la complexul ostio-meatal este caracteristică.\n\nPolipii unilaterali, mai ales cu sângerare, cresc suspiciunea unei neoplazii — Corect: Textul subliniază raritatea polipilor unilaterali și suspiciunea de neoplazie.\n\nSinuzita polipoasă este rară la copii și impune excluderea fibrozei chistice sau a imunodeficienței — Corect: Alerta de fibroză chistică sau imunodeficiență la copil este explicită.\n\nExcizia chirurgicală este prima intenție, înaintea oricărei cure de steroizi — Incorect: Gestionarea inițială include steroizi topici și o cură scurtă orală; chirurgia este rezervată eșecului sau contraindicației.\n\nPolipii sunt aproape toți unilaterali la adultul tânăr, fără legătură cu astmul sau cu aspirina — Incorect: Polipoza se asociază cu astm, hipersensibilitate la aspirină și fibroză chistică; polipii sunt rar unilaterali.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 564, 565, Polipoza nazală (pagini PDF: 237, 238).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    564,
    565
   ],
   "pdfPages": [
    237,
    238
   ],
   "section": "Polipoza nazală"
  },
  "learningObjective": "Recunoașterea bilateralității ca regulă și a polipului unilateral sângerând ca semnal oncologic, plus alerta de fibroză chistică la copil.",
  "optionRationales": [
   "Morfologia bilaterală translucidă la complexul ostio-meatal este caracteristică.",
   "Textul subliniază raritatea polipilor unilaterali și suspiciunea de neoplazie.",
   "Alerta de fibroză chistică sau imunodeficiență la copil este explicită.",
   "Gestionarea inițială include steroizi topici și o cură scurtă orală; chirurgia este rezervată eșecului sau contraindicației.",
   "Polipoza se asociază cu astm, hipersensibilitate la aspirină și fibroză chistică; polipii sunt rar unilaterali."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează regula bilateral/unilateral și pune chirurgia înaintea steroizilor, două erori de triage ale masei nazale."
  },
  "textbookExpressions": [
   "polipii unilaterali",
   "fibroza chistică"
  ]
 },
 {
  "id": "orl-adv-028",
  "topicId": "orl",
  "type": "CM",
  "stem": "Un nou-născut cianozează și se sufoacă la hrănire, iar simptomele se ameliorează temporar la plâns. Atrezia coanală bilaterală este susținută de:",
  "options": [
   "Imposibilitatea de a trece un cateter mic prin nas în nazofaringe",
   "Faptul că atrezia bilaterală este o urgență medico-chirurgicală",
   "Necesitatea stentării imediate cu o cale aeriană orală sau a intubației endotraheale",
   "Faptul că atrezia unilaterală, nu cea bilaterală, constituie urgența neonatală",
   "Reducerea închisă a dorsum nasi ca tratament definitiv, similar fracturii nazale"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Imposibilitatea de a trece un cateter mic prin nas în nazofaringe — Corect: Eșecul trecerii cateterului sugerează diagnosticul, conform textului.\n\nFaptul că atrezia bilaterală este o urgență medico-chirurgicală — Corect: Atrezia coanală bilaterală este numită urgență medico-chirurgicală.\n\nNecesitatea stentării imediate cu o cale aeriană orală sau a intubației endotraheale — Corect: Stentarea orală sau intubația sunt măsurile imediate.\n\nFaptul că atrezia unilaterală, nu cea bilaterală, constituie urgența neonatală — Incorect: Urgența este forma bilaterală, deoarece nou-născutul respiră nazal; unilaterala nu este prezentată ca urgență identică.\n\nReducerea închisă a dorsum nasi ca tratament definitiv, similar fracturii nazale — Incorect: Reducerea închisă privește fracturile nazale fără deplasare septală, nu atrezia coanală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 565, Atrezia coanală (pagini PDF: 238).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    565
   ],
   "pdfPages": [
    238
   ],
   "section": "Atrezia coanală"
  },
  "learningObjective": "Recunoașterea urgenței atreziei bilaterale, a ameliorării la plâns și a diagnosticului prin eșecul cateterului nazal.",
  "optionRationales": [
   "Eșecul trecerii cateterului sugerează diagnosticul, conform textului.",
   "Atrezia coanală bilaterală este numită urgență medico-chirurgicală.",
   "Stentarea orală sau intubația sunt măsurile imediate.",
   "Urgența este forma bilaterală, deoarece nou-născutul respiră nazal; unilaterala nu este prezentată ca urgență identică.",
   "Reducerea închisă privește fracturile nazale fără deplasare septală, nu atrezia coanală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează care formă (uni- față de bilaterală) este urgența și confundă corecția coanală cu reducerea unei fracturi nazale."
  },
  "textbookExpressions": [
   "Atrezia coanală",
   "intubare endotraheală"
  ]
 },
 {
  "id": "orl-adv-029",
  "topicId": "orl",
  "type": "CM",
  "stem": "Fractura oaselor nazale:",
  "options": [
   "Oasele nazale sunt oasele cel mai des fracturate ale corpului",
   "Hematomul septal impune drenaj prompt pentru a preveni abcesul și deformarea cu „nas în șa”",
   "Hematomul septal se lasă să se resorbă spontan, pentru a nu leza pericondrul",
   "Fracturile fără deplasare necesită reducere deschisă de principiu",
   "Loviturile laterale aplatizează dorsum nasi, iar cele frontale deplasează un os lateral"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Oasele nazale sunt oasele cel mai des fracturate ale corpului — Corect: Afirmația că oasele nazale sunt cel mai des fracturate este explicită.\n\nHematomul septal impune drenaj prompt pentru a preveni abcesul și deformarea cu „nas în șa” — Corect: Drenajul prompt previne abcesul, resorbția cartilajului și nasul în șa.\n\nHematomul septal se lasă să se resorbă spontan, pentru a nu leza pericondrul — Incorect: Netratarea hematomului duce la resorbție cartilaginoasă; drenajul este necesar, nu expectativă.\n\nFracturile fără deplasare necesită reducere deschisă de principiu — Incorect: Fracturile fără deplasare nu necesită reducere; reducerea deschisă este pentru leziuni complexe cu deplasare septală.\n\nLoviturile laterale aplatizează dorsum nasi, iar cele frontale deplasează un os lateral — Incorect: Textul inversează: lovitura laterală înfundă un os și deplasează contralateralul; lovitura frontală aplatizează și lărgește dorsum nasi.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 565, Deformarea nazală și septală (pagini PDF: 238).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    565
   ],
   "pdfPages": [
    238
   ],
   "section": "Deformarea nazală și septală"
  },
  "learningObjective": "Recunoașterea oaselor nazale ca cel mai frecvent fracturate și a urgenței hematomului septal, opus fracturii nedeplasate.",
  "optionRationales": [
   "Afirmația că oasele nazale sunt cel mai des fracturate este explicită.",
   "Drenajul prompt previne abcesul, resorbția cartilajului și nasul în șa.",
   "Netratarea hematomului duce la resorbție cartilaginoasă; drenajul este necesar, nu expectativă.",
   "Fracturile fără deplasare nu necesită reducere; reducerea deschisă este pentru leziuni complexe cu deplasare septală.",
   "Textul inversează: lovitura laterală înfundă un os și deplasează contralateralul; lovitura frontală aplatizează și lărgește dorsum nasi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează indicația de drenaj al hematomului septal și oglindește vectorul loviturii laterale față de cea frontală."
  },
  "textbookExpressions": [
   "nas în şa",
   "Oasele nazale sunt cel mai des fracturate"
  ]
 },
 {
  "id": "orl-adv-030",
  "topicId": "orl",
  "type": "CM",
  "stem": "Sinuzita acută:",
  "options": [
   "Apare adesea ca o complicație a unei infecții virale de tract respirator superior",
   "Organismele des incriminate sunt S. pneumoniae, H. influenzae și M. catarrhalis",
   "Tratamentul empiric include amoxicilină-acid clavulanic sau cefuroximă timp de 7–14 zile",
   "Diagnosticul cere CT coronal înaintea oricărui tratament, chiar în formele necomplicate",
   "Complexul ostio-meatal este sediul a doar 10% dintre bolile inflamatorii sinusale cronice"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Apare adesea ca o complicație a unei infecții virale de tract respirator superior — Corect: Legătura cu guturaiul comun este explicită.\n\nOrganismele des incriminate sunt S. pneumoniae, H. influenzae și M. catarrhalis — Corect: Cei trei agenți sunt enumerați identic.\n\nTratamentul empiric include amoxicilină-acid clavulanic sau cefuroximă timp de 7–14 zile — Corect: Durata de 7–14 zile și exemplele de antibiotice (inclusiv amoxicilină-clavulanat și cefuroximă) sunt citate.\n\nDiagnosticul cere CT coronal înaintea oricărui tratament, chiar în formele necomplicate — Incorect: În cazurile necomplicate tratamentul se inițiază empiric, pe criterii clinice.\n\nComplexul ostio-meatal este sediul a doar 10% dintre bolile inflamatorii sinusale cronice — Incorect: În sinuzita cronică, complexul ostio-meatal este sediul a 90% dintre cazuri, nu 10%.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 565, Sinuzita acută (pagini PDF: 238).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    565
   ],
   "pdfPages": [
    238
   ],
   "section": "Sinuzita acută"
  },
  "learningObjective": "Recunoașterea tridentului bacterian comun cu OMA și a ferestrei de 7–14 zile, fără a pretinde CT în forma necomplicată.",
  "optionRationales": [
   "Legătura cu guturaiul comun este explicită.",
   "Cei trei agenți sunt enumerați identic.",
   "Durata de 7–14 zile și exemplele de antibiotice (inclusiv amoxicilină-clavulanat și cefuroximă) sunt citate.",
   "În cazurile necomplicate tratamentul se inițiază empiric, pe criterii clinice.",
   "În sinuzita cronică, complexul ostio-meatal este sediul a 90% dintre cazuri, nu 10%."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 90% cu 10% pentru complexul ostio-meatal și impune CT acolo unde textul acceptă tratamentul empiric."
  },
  "textbookExpressions": [
   "7-14 zile",
   "complexului ostio-meatal"
  ]
 },
 {
  "id": "orl-adv-031",
  "topicId": "orl",
  "type": "CM",
  "stem": "Infecțiile rinosinusale micotice și papilomul invertit:",
  "options": [
   "Organismele oportuniste implicate includ Phycomycetes (Mucor, Rhizopus) și Aspergillus",
   "Diagnosticul infecției invazive depinde de identificarea histologică; exudatul nazal este insuficient",
   "Papiloamele invertite sunt invazive local, iar 10–15% pot degenera în carcinoame scuamoase",
   "Biopsia angiofibromului juvenil este procedura de elecție, hemoragia fiind neglijabilă",
   "Osteomul simptomatic al sinusurilor se doar monitorizează, fără excizie chiar la creștere progresivă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Organismele oportuniste implicate includ Phycomycetes (Mucor, Rhizopus) și Aspergillus — Corect: Cele două grupuri fungice sunt enumerate.\n\nDiagnosticul infecției invazive depinde de identificarea histologică; exudatul nazal este insuficient — Corect: Textul precizează că exudatul nazal este insuficient și că diagnosticul este histologic.\n\nPapiloamele invertite sunt invazive local, iar 10–15% pot degenera în carcinoame scuamoase — Corect: Procentul 10–15% de degenerare și indicația de excizie largă sunt explicite.\n\nBiopsia angiofibromului juvenil este procedura de elecție, hemoragia fiind neglijabilă — Incorect: Diagnosticul angiofibromului este clinic și radiologic, deoarece biopsia poate produce hemoragie riscantă.\n\nOsteomul simptomatic al sinusurilor se doar monitorizează, fără excizie chiar la creștere progresivă — Incorect: Osteoamele asimptomatice se monitorizează; cele cu creștere progresivă se îndepărtează chirurgical.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 566, Infecțiile rinosinusale micotice — Neoplazii benigne (pagini PDF: 239).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    566
   ],
   "pdfPages": [
    239
   ],
   "section": "Infecțiile rinosinusale micotice — Neoplazii benigne"
  },
  "learningObjective": "Separarea urgenței histologice a mucormicozei de riscul de 10–15% al papilomului invertit și de interdicția biopsiei angiofibromului.",
  "optionRationales": [
   "Cele două grupuri fungice sunt enumerate.",
   "Textul precizează că exudatul nazal este insuficient și că diagnosticul este histologic.",
   "Procentul 10–15% de degenerare și indicația de excizie largă sunt explicite.",
   "Diagnosticul angiofibromului este clinic și radiologic, deoarece biopsia poate produce hemoragie riscantă.",
   "Osteoamele asimptomatice se monitorizează; cele cu creștere progresivă se îndepărtează chirurgical."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă biopsia angiofibromului (riscantă) în gest de elecție și inversează indicația osteomului în creștere."
  },
  "textbookExpressions": [
   "I 0-15 %",
   "Aspergillus"
  ]
 },
 {
  "id": "orl-adv-032",
  "topicId": "orl",
  "type": "CM",
  "stem": "Abcesul periamigdalian și indicațiile infecțioase ale tonsilectomiei:",
  "options": [
   "Abcesul periamigdalian asociază asimetria amigdalelor, tumefacția palatului moale, deviația uvulei și voce stinsă",
   "Printre indicațiile infecțioase figurează 6 episoade de amigdalită acută într-un an",
   "Faringita streptococică se caracterizează, printre altele, prin absența notabilă a tusei (criterii Centor)",
   "Prezența tusei este criteriul Centor care confirmă faringita streptococică",
   "Abcesele peritonsilare se rezolvă doar cu antibiotice orale, fără aspirație sau drenaj"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Abcesul periamigdalian asociază asimetria amigdalelor, tumefacția palatului moale, deviația uvulei și voce stinsă — Corect: Cele patru elemente clinice ale abcesului sunt enumerate.\n\nPrintre indicațiile infecțioase figurează 6 episoade de amigdalită acută într-un an — Corect: Tabelul 27-9 listează 6 episoade într-un an ca indicație.\n\nFaringita streptococică se caracterizează, printre altele, prin absența notabilă a tusei (criterii Centor) — Corect: Absența tusei este subliniată ca element al criteriilor Centor.\n\nPrezența tusei este criteriul Centor care confirmă faringita streptococică — Incorect: Textul vorbește despre absența, nu prezența, tusei.\n\nAbcesele peritonsilare se rezolvă doar cu antibiotice orale, fără aspirație sau drenaj — Incorect: Abcesele peritonsilare necesită de obicei aspirație sau drenaj chirurgical.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 568, Faringitele — Abcesul periamigdalian și Tabelul 27-9 (pagini PDF: 241).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    568
   ],
   "pdfPages": [
    241
   ],
   "section": "Faringitele — Abcesul periamigdalian și Tabelul 27-9"
  },
  "learningObjective": "Recunoașterea tetradei abcesului periamigdalian, a pragului de 6 episoade/an și a absenței tusei ca semn Centor.",
  "optionRationales": [
   "Cele patru elemente clinice ale abcesului sunt enumerate.",
   "Tabelul 27-9 listează 6 episoade într-un an ca indicație.",
   "Absența tusei este subliniată ca element al criteriilor Centor.",
   "Textul vorbește despre absența, nu prezența, tusei.",
   "Abcesele peritonsilare necesită de obicei aspirație sau drenaj chirurgical."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează semnul tusei din criteriile Centor și minimizează drenajul abcesului la antibiotice orale."
  },
  "textbookExpressions": [
   "criterii Centor",
   "6 episoade într-un an"
  ]
 },
 {
  "id": "orl-adv-033",
  "topicId": "orl",
  "type": "CM",
  "stem": "Un sugar cu hipoplazie mandibulară, glosoptoză și palatoschizis. Sunt adevărate următoarele:",
  "options": [
   "Asocierea descrie sindromul Pierre Robin, cu risc de obstrucție prin deplasarea posterioară a limbii",
   "Corecția palatoschizisului se realizează înainte de vârsta de 2 ani, pentru dezvoltarea limbajului",
   "Apneea se definește prin scăderea cu cel puțin 90% a semnalului termic oro-nazal, timp de cel puțin 10 secunde",
   "La copiii cu apnee obstructivă, indicele de masă corporală este de obicei normal, cu hipertrofie adeno-amigdaliană",
   "Regula lui 10 pentru cheiloschizis cere greutate sub 2 kg și hemoglobină sub 8 g/dL"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Asocierea descrie sindromul Pierre Robin, cu risc de obstrucție prin deplasarea posterioară a limbii — Corect: Triada hipoplazie mandibulară–glosoptoză–palatoschizis este explicită.\n\nCorecția palatoschizisului se realizează înainte de vârsta de 2 ani, pentru dezvoltarea limbajului — Corect: Vârsta de 2 ani pentru corecția palatului este citată.\n\nApneea se definește prin scăderea cu cel puțin 90% a semnalului termic oro-nazal, timp de cel puțin 10 secunde — Corect: Definiția polisomnografică (90% și 10 secunde) este dată.\n\nLa copiii cu apnee obstructivă, indicele de masă corporală este de obicei normal, cu hipertrofie adeno-amigdaliană — Corect: La copii, IMC este de obicei normal, cu hipertrofie adenoidiană și amigdaliană.\n\nRegula lui 10 pentru cheiloschizis cere greutate sub 2 kg și hemoglobină sub 8 g/dL — Incorect: Regula lui 10 cere copil >10 săptămâni, >4,53 kg și Hb >10, nu valorile inversate.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 569, Anomalii congenitale — Pierre Robin, palatoschizis, apneea obstructivă (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    569
   ],
   "pdfPages": [
    242
   ],
   "section": "Anomalii congenitale — Pierre Robin, palatoschizis, apneea obstructivă"
  },
  "learningObjective": "Recunoașterea triadei Pierre Robin, a vârstei de 2 ani pentru palat și a definiției apneei ≥90%/10 s, opus regulii lui 10 a buzei.",
  "optionRationales": [
   "Triada hipoplazie mandibulară–glosoptoză–palatoschizis este explicită.",
   "Vârsta de 2 ani pentru corecția palatului este citată.",
   "Definiția polisomnografică (90% și 10 secunde) este dată.",
   "La copii, IMC este de obicei normal, cu hipertrofie adenoidiană și amigdaliană.",
   "Regula lui 10 cere copil >10 săptămâni, >4,53 kg și Hb >10, nu valorile inversate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează pragurile regulii lui 10 și atribuie copiilor cu OSA obezitatea adultului, două capcane de prag și de fenotip."
  },
  "textbookExpressions": [
   "Pierre Robin",
   "90% din valoarea"
  ]
 },
 {
  "id": "orl-adv-034",
  "topicId": "orl",
  "type": "CM",
  "stem": "Inervația laringelui:",
  "options": [
   "Nervul laringeu superior asigură funcția senzitivă și inervează mușchiul crico-tiroidian",
   "Nervul laringeu recurent inervează ceilalți mușchi intrinseci",
   "Nervul laringeu recurent stâng are traiect toracic mai lung și este mai susceptibil leziunilor",
   "Mușchiul crico-aritenoidian posterior produce adducția corzilor vocale pentru fonație",
   "Drenajul limfatic supraglotic este sărac și doar ipsilateral, spre deosebire de glotă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Nervul laringeu superior asigură funcția senzitivă și inervează mușchiul crico-tiroidian — Corect: Teritoriul nervului laringeu superior este enunțat astfel.\n\nNervul laringeu recurent inervează ceilalți mușchi intrinseci — Corect: Recurentul deservește funcțiile motorii ale celorlalți mușchi intrinseci.\n\nNervul laringeu recurent stâng are traiect toracic mai lung și este mai susceptibil leziunilor — Corect: Lungimea și vulnerabilitatea recurentului stâng sunt explicite.\n\nMușchiul crico-aritenoidian posterior produce adducția corzilor vocale pentru fonație — Incorect: Crico-aritenoidianul posterior produce abducția (deschiderea) corzilor, nu adducția.\n\nDrenajul limfatic supraglotic este sărac și doar ipsilateral, spre deosebire de glotă — Incorect: Supraglota are drenaj limfatic bine reprezentat, bilateral, către ganglionii jugulari profunzi; glota și subglota au limfatice rare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 570, Laringele — Inervație și limfatice (pagini PDF: 243).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    570
   ],
   "pdfPages": [
    243
   ],
   "section": "Laringele — Inervație și limfatice"
  },
  "learningObjective": "Separarea laringelui superior (senzitiv plus crico-tiroidian) de recurent (restul mușchilor), cu vulnerabilitatea recurentului stâng.",
  "optionRationales": [
   "Teritoriul nervului laringeu superior este enunțat astfel.",
   "Recurentul deservește funcțiile motorii ale celorlalți mușchi intrinseci.",
   "Lungimea și vulnerabilitatea recurentului stâng sunt explicite.",
   "Crico-aritenoidianul posterior produce abducția (deschiderea) corzilor, nu adducția.",
   "Supraglota are drenaj limfatic bine reprezentat, bilateral, către ganglionii jugulari profunzi; glota și subglota au limfatice rare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează abducția crico-aritenoidianului posterior cu adducția și oglindește densitatea limfatică supraglotică față de glotică."
  },
  "textbookExpressions": [
   "laringeu recurent",
   "crico-tiroidian"
  ]
 },
 {
  "id": "orl-adv-035",
  "topicId": "orl",
  "type": "CM",
  "stem": "Tipul de stridor orientează localizarea stenozei astfel:",
  "options": [
   "Îngustarea deasupra corzilor vocale produce stridor inspirator",
   "Stenoza la nivelul corzilor sau al traheei extratoracice produce stridor bifazic",
   "Obstrucția parțială a traheei intratoracice produce stridor expirator",
   "Stridorul expirator este patognomonic pentru laringomalacie și exclude astmul",
   "Îngustarea deasupra corzilor produce stridor expirator, iar cea intratoracică produce stridor inspirator"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Îngustarea deasupra corzilor vocale produce stridor inspirator — Corect: Regula inspiratorului pentru stenoza de deasupra corzilor este explicită.\n\nStenoza la nivelul corzilor sau al traheei extratoracice produce stridor bifazic — Corect: Bifazicul este atribuit corzilor sau traheei extratoracice.\n\nObstrucția parțială a traheei intratoracice produce stridor expirator — Corect: Expiratorul este atribuit traheei intratoracice.\n\nStridorul expirator este patognomonic pentru laringomalacie și exclude astmul — Incorect: Stridorul expirator este des interpretat eronat drept astm; laringomalacia produce stridor inspirator.\n\nÎngustarea deasupra corzilor produce stridor expirator, iar cea intratoracică produce stridor inspirator — Incorect: Opțiunea inversează complet mapa nivel-fază din text.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 572, 573, Stridorul — Corelația cu nivelul obstrucției (pagini PDF: 245, 246).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    572,
    573
   ],
   "pdfPages": [
    245,
    246
   ],
   "section": "Stridorul — Corelația cu nivelul obstrucției"
  },
  "learningObjective": "Aplicarea regulii inspirator-supraglotic, bifazic-glottic/extratoracic, expirator-intratoracic.",
  "optionRationales": [
   "Regula inspiratorului pentru stenoza de deasupra corzilor este explicită.",
   "Bifazicul este atribuit corzilor sau traheei extratoracice.",
   "Expiratorul este atribuit traheei intratoracice.",
   "Stridorul expirator este des interpretat eronat drept astm; laringomalacia produce stridor inspirator.",
   "Opțiunea inversează complet mapa nivel-fază din text."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește cele trei etaje ale hărții stridorului și confundă expiratorul cu laringomalacia (inspiratorie)."
  },
  "textbookExpressions": [
   "stridorul inspirator",
   "Stridorul expirator"
  ]
 },
 {
  "id": "orl-adv-036",
  "topicId": "orl",
  "type": "CS",
  "stem": "Cea mai frecventă cauză de stridor la copii, însumând 60% dintre cazuri, este:",
  "options": [
   "Laringomalacia",
   "Epiglotita",
   "Crupul (laringo-traheo-bronșita)",
   "Stenoza subglotică postintubație",
   "Hemangiomul subglotic"
  ],
  "correct": [
   0
  ],
  "explanation": "Laringomalacia — Corect: Textul atribuie laringomalaciei 60% dintre cauzele de stridor la copii.\n\nEpiglotita — Incorect: Epiglotita este o cauză de stridor inspirator, dar nu cea mai frecventă.\n\nCrupul (laringo-traheo-bronșita) — Incorect: Crupul produce stridor bifazic, fără a deține ponderea de 60%.\n\nStenoza subglotică postintubație — Incorect: Stenoza subglotică este frecvent post-traumatică/postintubație, nu prima cauză.\n\nHemangiomul subglotic — Incorect: Hemangiomul subglotic figurează printre cauzele bifazice, nu ca entitate dominantă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 573, Patologie pediatrică structurală — Laringomalacia (pagini PDF: 246).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    573
   ],
   "pdfPages": [
    246
   ],
   "section": "Patologie pediatrică structurală — Laringomalacia"
  },
  "learningObjective": "Identificarea laringomalaciei ca primă cauză (60%) de stridor pediatric, distinctă de crup, epiglotită și stenoza subglotică.",
  "optionRationales": [
   "Textul atribuie laringomalaciei 60% dintre cauzele de stridor la copii.",
   "Epiglotita este o cauză de stridor inspirator, dar nu cea mai frecventă.",
   "Crupul produce stridor bifazic, fără a deține ponderea de 60%.",
   "Stenoza subglotică este frecvent post-traumatică/postintubație, nu prima cauză.",
   "Hemangiomul subglotic figurează printre cauzele bifazice, nu ca entitate dominantă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Celelalte cauze pediatrice din Tabelul 27-10 sunt aproape-egale ca notorietate, dar textul rezervă 60% laringomalaciei."
  },
  "textbookExpressions": [
   "60% dintre cauzuri",
   "Laringomalacia"
  ]
 },
 {
  "id": "orl-adv-037",
  "topicId": "orl",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații diferențiază corect epiglotita de crup?",
  "options": [
   "Epiglotita este provocată de obicei de H. influenzae și afectează cu precădere copiii între 3 și 6 ani",
   "În epiglotită se evită apăsătorul de limbă, din riscul de laringospasm reflex",
   "Crupul afectează de regulă copiii ≤2 ani, are etiologie virală și tuse lătrătoare, cu semnul „turlei gotice”",
   "Edemul din crup se remite mai greu, deseori în 5–7 zile, față de detubarea din epiglotită în primele 72 de ore",
   "Crupul este o infecție bacteriană cu H. influenzae, iar epiglotita este virală subglotică"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Epiglotita este provocată de obicei de H. influenzae și afectează cu precădere copiii între 3 și 6 ani — Corect: Agentul și intervalul 3–6 ani sunt explicitate pentru epiglotită.\n\nÎn epiglotită se evită apăsătorul de limbă, din riscul de laringospasm reflex — Corect: Interdicția apăsătorului de limbă este subliniată.\n\nCrupul afectează de regulă copiii ≤2 ani, are etiologie virală și tuse lătrătoare, cu semnul „turlei gotice” — Corect: Vârsta ≤2 ani, etiologia virală, tusea lătrătoare și semnul turlei gotice definesc crupul.\n\nEdemul din crup se remite mai greu, deseori în 5–7 zile, față de detubarea din epiglotită în primele 72 de ore — Corect: Comparația 5–7 zile față de 72 de ore este enunțată.\n\nCrupul este o infecție bacteriană cu H. influenzae, iar epiglotita este virală subglotică — Incorect: Opțiunea inversează complet etiologia și etajul anatomic al celor două boli.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 574, Epiglotita și crupul (pagini PDF: 247).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    574
   ],
   "pdfPages": [
    247
   ],
   "section": "Epiglotita și crupul"
  },
  "learningObjective": "Contrastarea vârstei, a agentului, a manevrei interzise (apăsătorul) și a ferestrelor 72 de ore față de 5–7 zile.",
  "optionRationales": [
   "Agentul și intervalul 3–6 ani sunt explicitate pentru epiglotită.",
   "Interdicția apăsătorului de limbă este subliniată.",
   "Vârsta ≤2 ani, etiologia virală, tusea lătrătoare și semnul turlei gotice definesc crupul.",
   "Comparația 5–7 zile față de 72 de ore este enunțată.",
   "Opțiunea inversează complet etiologia și etajul anatomic al celor două boli."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează H. influenzae între epiglotită și crup și oglindește etajul (supraglotic față de subglotic) împreună cu ferestrele de remisie."
  },
  "textbookExpressions": [
   "turlei gotice",
   "primele 72 ore"
  ]
 },
 {
  "id": "orl-adv-038",
  "topicId": "orl",
  "type": "CM",
  "stem": "Paralizia de coardă vocală:",
  "options": [
   "Forma unilaterală produce de obicei voce de intensitate redusă, „șoptită”, și tuse la deglutiția lichidelor",
   "Forma bilaterală lasă vocea aproape normală, dar asociază stridor bifazic marcat",
   "Dacă după 6–12 luni mobilitatea nu revine și paralizia este necompensată, coarda poate fi tracționată medial",
   "Traheotomia este prima intenție în papilomatoza laringiană a copilului, pentru a preveni însămânțarea",
   "Nodulii de coardă vocală sunt asimetrici, situați la comisura posterioară, lângă procesul vocal"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Forma unilaterală produce de obicei voce de intensitate redusă, „șoptită”, și tuse la deglutiția lichidelor — Corect: Tabloul unilateral (voce șoptită, tuse la lichide) este explicit.\n\nForma bilaterală lasă vocea aproape normală, dar asociază stridor bifazic marcat — Corect: Tabloul bilateral (voce aproape normală, stridor bifazic) este explicit.\n\nDacă după 6–12 luni mobilitatea nu revine și paralizia este necompensată, coarda poate fi tracționată medial — Corect: Fereastra 6–12 luni și medializarea sunt descrise.\n\nTraheotomia este prima intenție în papilomatoza laringiană a copilului, pentru a preveni însămânțarea — Incorect: Traheostomia trebuie evitată în papilomatoză, fiind rezervată cazurilor avansate, din riscul de însămânțare.\n\nNodulii de coardă vocală sunt asimetrici, situați la comisura posterioară, lângă procesul vocal — Incorect: Nodulii sunt albi, simetrici, la unirea treimii anterioare cu cele două treimi posterioare, nu la procesul vocal (sediul granuloamelor).\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 575, Paralizia corzilor vocale — Noduli și papiloame (pagini PDF: 248).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    575
   ],
   "pdfPages": [
    248
   ],
   "section": "Paralizia corzilor vocale — Noduli și papiloame"
  },
  "learningObjective": "Contrastarea vocii șoptite unilaterale cu vocea aproape normală plus stridor bifazic din paralizia bilaterală.",
  "optionRationales": [
   "Tabloul unilateral (voce șoptită, tuse la lichide) este explicit.",
   "Tabloul bilateral (voce aproape normală, stridor bifazic) este explicit.",
   "Fereastra 6–12 luni și medializarea sunt descrise.",
   "Traheostomia trebuie evitată în papilomatoză, fiind rezervată cazurilor avansate, din riscul de însămânțare.",
   "Nodulii sunt albi, simetrici, la unirea treimii anterioare cu cele două treimi posterioare, nu la procesul vocal (sediul granuloamelor)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează tabloul vocal al formei uni- față de bilaterale și mută nodulii pe locul granuloamelor de proces vocal."
  },
  "textbookExpressions": [
   "şoptită",
   "6-12 luni"
  ]
 },
 {
  "id": "orl-adv-039",
  "topicId": "orl",
  "type": "CM",
  "stem": "Carcinomul scuamos laringian:",
  "options": [
   "Reprezintă cea mai frecventă leziune malignă a laringelui; celelalte tipuri însumează sub 5%",
   "Tumorile supraglotice au rată ridicată de metastazare limfatică, astfel încât chiar leziunile mici, fără adenopatii palpabile, necesită tratamentul regiunilor limfatice cervicale",
   "După laringectomie totală, pacientul nu va mai putea fi intubat oral",
   "Adenopatia cervicală concomitentă crește rata de supraviețuire la 5 ani cu până la 70%",
   "Radioterapia tumorilor glotice mici impune un volum cervical similar celui din cancerele supraglotice"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Reprezintă cea mai frecventă leziune malignă a laringelui; celelalte tipuri însumează sub 5% — Corect: Dominanța carcinomului scuamos și pragul sub 5% pentru celelalte tipuri sunt explicite.\n\nTumorile supraglotice au rată ridicată de metastazare limfatică, astfel încât chiar leziunile mici, fără adenopatii palpabile, necesită tratamentul regiunilor limfatice cervicale — Corect: Necesitatea tratării limfaticelor cervicale chiar fără adenopatii palpabile este enunțată pentru supraglotă.\n\nDupă laringectomie totală, pacientul nu va mai putea fi intubat oral — Corect: Textul subliniază că laringectomizatul nu va mai putea fi intubat oral.\n\nAdenopatia cervicală concomitentă crește rata de supraviețuire la 5 ani cu până la 70% — Incorect: Adenopatia este factor de prognostic negativ, reducând (nu crescând) supraviețuirea la 5 ani cu până la 70%.\n\nRadioterapia tumorilor glotice mici impune un volum cervical similar celui din cancerele supraglotice — Incorect: Iradierea supraglotică include o proporție semnificativ mai mare a gâtului decât iradierea glotică, cu morbiditate mai mare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 576, Tumori maligne ale laringelui (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    576
   ],
   "pdfPages": [
    249
   ],
   "section": "Tumori maligne ale laringelui"
  },
  "learningObjective": "Recunoașterea densității limfatice supraglotice, a interdicției intubației orale post-laringectomie și a impactului negativ al adenopatiei.",
  "optionRationales": [
   "Dominanța carcinomului scuamos și pragul sub 5% pentru celelalte tipuri sunt explicite.",
   "Necesitatea tratării limfaticelor cervicale chiar fără adenopatii palpabile este enunțată pentru supraglotă.",
   "Textul subliniază că laringectomizatul nu va mai putea fi intubat oral.",
   "Adenopatia este factor de prognostic negativ, reducând (nu crescând) supraviețuirea la 5 ani cu până la 70%.",
   "Iradierea supraglotică include o proporție semnificativ mai mare a gâtului decât iradierea glotică, cu morbiditate mai mare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează direcția impactului adenopatiei asupra supraviețuirii (scade, nu crește, cu 70%) și egalizează greșit volumele de iradiere glotă-supraglotă."
  },
  "textbookExpressions": [
   "Laringectomia totală",
   "intubat oral"
  ]
 },
 {
  "id": "orl-adv-040",
  "topicId": "orl",
  "type": "CM",
  "stem": "Cricotirotomia și traheotomia:",
  "options": [
   "Cricotirotomia este cea mai rapidă și sigură intervenție când intubația orotraheală eșuează în obstrucția acută",
   "La copiii mici cricotirotomia nu este posibilă, calea aeriană fiind asigurată prin traheotomie imediat subcricoidiană",
   "Din riscul de stenoză subglotică, cricotirotomia se convertește prudent la traheostomie dacă intubația va fi necesară mai multe zile",
   "Traheotomia este preferată cricotirotomiei ca prim gest în obstrucția acută, deoarece nu există risc de stenoză",
   "Dependența ventilatorie prelungită anticipată, de obicei peste 2 săptămâni, nu figurează printre indicațiile traheotomiei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cricotirotomia este cea mai rapidă și sigură intervenție când intubația orotraheală eșuează în obstrucția acută — Corect: Textul numește cricotirotomia cea mai rapidă și sigură soluție după eșecul intubației.\n\nLa copiii mici cricotirotomia nu este posibilă, calea aeriană fiind asigurată prin traheotomie imediat subcricoidiană — Corect: Excepția copilului mic, cu traheotomie între cricoid și primul inel, este explicită.\n\nDin riscul de stenoză subglotică, cricotirotomia se convertește prudent la traheostomie dacă intubația va fi necesară mai multe zile — Corect: Conversia la traheostomie din riscul de stenoză este recomandată dacă intubația depășește câteva zile.\n\nTraheotomia este preferată cricotirotomiei ca prim gest în obstrucția acută, deoarece nu există risc de stenoză — Incorect: În obstrucția acută cu eșec al intubației, cricotirotomia precede traheotomia.\n\nDependența ventilatorie prelungită anticipată, de obicei peste 2 săptămâni, nu figurează printre indicațiile traheotomiei — Incorect: Tabelul 27-12 include dependența ventilatorie prelungită anticipată, de obicei peste 2 săptămâni.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 583, Calea aeriană asigurată chirurgical — Tabelul 27-12 (pagini PDF: 256).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    583
   ],
   "pdfPages": [
    256
   ],
   "section": "Calea aeriană asigurată chirurgical — Tabelul 27-12"
  },
  "learningObjective": "Ierarhia cricotirotomie de urgență față de traheotomie planificată și conversia precoce din cauza stenozei subglotice, cu excepția copilului mic.",
  "optionRationales": [
   "Textul numește cricotirotomia cea mai rapidă și sigură soluție după eșecul intubației.",
   "Excepția copilului mic, cu traheotomie între cricoid și primul inel, este explicită.",
   "Conversia la traheostomie din riscul de stenoză este recomandată dacă intubația depășește câteva zile.",
   "În obstrucția acută cu eșec al intubației, cricotirotomia precede traheotomia.",
   "Tabelul 27-12 include dependența ventilatorie prelungită anticipată, de obicei peste 2 săptămâni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ordinea de urgență cricotiroidotomie-traheotomie și neagă indicația de >2 săptămâni din tabelul de traheotomie."
  },
  "textbookExpressions": [
   "cricotirotomie",
   "Tabelul 27-12"
  ]
 },
 {
  "id": "orl-adv-041",
  "topicId": "orl",
  "type": "CM",
  "stem": "Hipoacuzia de conducere se deosebește de cea neurosenzorială prin:",
  "options": [
   "Pacientul descrie cel mai frecvent o „ureche înfundată”, prin pierderea amplificării sunetului",
   "Poate rezulta din patologii ale conductului auditiv extern, ale membranei timpanice, ale urechii medii sau ale lanțului osicular",
   "Hipoacuzia unilaterală orientează spre o cauză locală și impune evaluarea atentă a asimetriei pentru a exclude un proces neoplazic",
   "Pacientul cu hipoacuzie neurosenzorială bilaterală aude mai bine în zgomot decât în liniște",
   "Hipoacuzia de conducere este produsă de presbiacuzie, ototoxicitate sau neurinom de acustic"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pacientul descrie cel mai frecvent o „ureche înfundată”, prin pierderea amplificării sunetului — Corect: Senzația de ureche înfundată este caracterizarea explicită a hipoacuziei de conducere.\n\nPoate rezulta din patologii ale conductului auditiv extern, ale membranei timpanice, ale urechii medii sau ale lanțului osicular — Corect: Cele patru sedii ale căii de transmisie sunt enumerate.\n\nHipoacuzia unilaterală orientează spre o cauză locală și impune evaluarea atentă a asimetriei pentru a exclude un proces neoplazic — Corect: Unilateralitatea ca indiciu de cauză locală și de neoplasm este enunțată.\n\nPacientul cu hipoacuzie neurosenzorială bilaterală aude mai bine în zgomot decât în liniște — Incorect: Pacienții cu SNHL bilaterală au dificultăți tocmai când este mult zgomot.\n\nHipoacuzia de conducere este produsă de presbiacuzie, ototoxicitate sau neurinom de acustic — Incorect: Presbiacuzia, ototoxicitatea și neurinomul figurează la hipoacuzia neurosenzorială, nu de conducere.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 553, Evaluare — Hipoacuzie de conducere versus neurosenzorială (pagini PDF: 226).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    553
   ],
   "pdfPages": [
    226
   ],
   "section": "Evaluare — Hipoacuzie de conducere versus neurosenzorială"
  },
  "learningObjective": "Contrastarea senzației de ureche înfundată și a sediilor de transmisie cu alerta de neoplasm în hipoacuzia asimetrică.",
  "optionRationales": [
   "Senzația de ureche înfundată este caracterizarea explicită a hipoacuziei de conducere.",
   "Cele patru sedii ale căii de transmisie sunt enumerate.",
   "Unilateralitatea ca indiciu de cauză locală și de neoplasm este enunțată.",
   "Pacienții cu SNHL bilaterală au dificultăți tocmai când este mult zgomot.",
   "Presbiacuzia, ototoxicitatea și neurinomul figurează la hipoacuzia neurosenzorială, nu de conducere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută presbiacuzia și neurinomul pe calea de transmisie și inversează relația SNHL–zgomot."
  },
  "textbookExpressions": [
   "ureche înfundată",
   "Hipoacuzia de conducere"
  ]
 },
 {
  "id": "orl-adv-042",
  "topicId": "orl",
  "type": "CS",
  "stem": "Timpanograma plată, fără eficiență maximă în nicio poziție a membranei, sugerează:",
  "options": [
   "Lichid în urechea medie (efuziune), perforația membranei timpanice sau obstrucția conductului auditiv extern",
   "Presiune negativă izolată în urechea medie, cu maxim doar la deplasarea membranei spre exterior",
   "Auz normal, cu maxim fără manipularea presiunii",
   "Otoscleroză cu fixarea piciorului scăriței, fără lichid",
   "Hipoacuzie neurosenzorială profundă, peste 90 dB"
  ],
  "correct": [
   0
  ],
  "explanation": "Lichid în urechea medie (efuziune), perforația membranei timpanice sau obstrucția conductului auditiv extern — Corect: Textul leagă timpanograma plată de lichid, perforație sau obstrucție de conduct.\n\nPresiune negativă izolată în urechea medie, cu maxim doar la deplasarea membranei spre exterior — Incorect: Maximul doar la deplasarea spre exterior descrie presiunea negativă (curba C).\n\nAuz normal, cu maxim fără manipularea presiunii — Incorect: Eficiența maximă fără manipulare este curba A normală.\n\nOtoscleroză cu fixarea piciorului scăriței, fără lichid — Incorect: Otoscleroza nu este interpretarea curbei plate din figură.\n\nHipoacuzie neurosenzorială profundă, peste 90 dB — Incorect: Pragul peste 90 dB definește hipoacuzia profundă audiometrică, nu timpanograma.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 555, Timpanometria — Curba plată (pagini PDF: 228).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    555
   ],
   "pdfPages": [
    228
   ],
   "section": "Timpanometria — Curba plată"
  },
  "learningObjective": "Interpretarea curbei plate ca efuziune, perforație sau obstrucție de conduct, distinctă de presiunea negativă (curba C) și de curba normală A.",
  "optionRationales": [
   "Textul leagă timpanograma plată de lichid, perforație sau obstrucție de conduct.",
   "Maximul doar la deplasarea spre exterior descrie presiunea negativă (curba C).",
   "Eficiența maximă fără manipulare este curba A normală.",
   "Otoscleroza nu este interpretarea curbei plate din figură.",
   "Pragul peste 90 dB definește hipoacuzia profundă audiometrică, nu timpanograma."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează curbele A, B (plată) și C din aceeași figură de timpanometrie."
  },
  "textbookExpressions": [
   "timpanogramă plată",
   "efuziune"
  ]
 },
 {
  "id": "orl-adv-043",
  "topicId": "orl",
  "type": "CS",
  "stem": "Otalgia agravată de masticație, cu istoric de traumă a ATM sau de intervenții dentare recente, orientează spre:",
  "options": [
   "Afectarea structurilor miofasciale ale articulației temporo-mandibulare",
   "Otita externă necrotizantă cu Pseudomonas, la diabetic",
   "Colesteatomul cu osteonecroză enzimatică a oscioarelor",
   "Paralizia Bell confirmată prin PCR pentru HSV",
   "Glomus tympanicum cu masă pulsatilă în spatele timpanului"
  ],
  "correct": [
   0
  ],
  "explanation": "Afectarea structurilor miofasciale ale articulației temporo-mandibulare — Corect: Textul leagă otalgia la masticație, trauma ATM și stomatologia recentă de structurile miofasciale ale ATM.\n\nOtita externă necrotizantă cu Pseudomonas, la diabetic — Incorect: Otita externă necrotizantă este o cauză otogenică la diabetic, nu patternul de masticație.\n\nColesteatomul cu osteonecroză enzimatică a oscioarelor — Incorect: Colesteatomul se recunoaște otoscopic, nu prin durere la mestecat izolată.\n\nParalizia Bell confirmată prin PCR pentru HSV — Incorect: Paralizia Bell este o neuropatie facială, nu otalgia de ATM.\n\nGlomus tympanicum cu masă pulsatilă în spatele timpanului — Incorect: Glomusul produce tinitus pulsatil și masă eritematoasă, nu otalgie de masticație.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 555, Otalgia — Cauze non-otogenice și ATM (pagini PDF: 228).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    555
   ],
   "pdfPages": [
    228
   ],
   "section": "Otalgia — Cauze non-otogenice și ATM"
  },
  "learningObjective": "Recunoașterea otalgiei reflectate de ATM/dentare, față de cauzele otogenice din același capitol.",
  "optionRationales": [
   "Textul leagă otalgia la masticație, trauma ATM și stomatologia recentă de structurile miofasciale ale ATM.",
   "Otita externă necrotizantă este o cauză otogenică la diabetic, nu patternul de masticație.",
   "Colesteatomul se recunoaște otoscopic, nu prin durere la mestecat izolată.",
   "Paralizia Bell este o neuropatie facială, nu otalgia de ATM.",
   "Glomusul produce tinitus pulsatil și masă eritematoasă, nu otalgie de masticație."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește ATM-ul (cauză non-otogenică din tabel) cu otita necrotizantă, colesteatomul sau glomusul."
  },
  "textbookExpressions": [
   "otalgie",
   "temporo-mandibulare"
  ]
 },
 {
  "id": "orl-adv-044",
  "topicId": "orl",
  "type": "CM",
  "stem": "Tinitusul pulsatil se deosebește de tinitusul continuu prin:",
  "options": [
   "Este, de obicei, de natură vasculară",
   "Tinitusul continuu de leziune cohleară variază ca intensitate cu zgomotul de fundal sau cu momentul zilei",
   "Există medicamente cu eficiență demonstrată care îl suprimă în câteva zile",
   "Tinitusul bilateral implică, de regulă, doar un neurinom de acustic unilateral",
   "Tinitusul unilateral exclude patologia de cohlee sau de nerv"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este, de obicei, de natură vasculară — Corect: Textul atribuie tinitusul pulsatil unei origini vasculare.\n\nTinitusul continuu de leziune cohleară variază ca intensitate cu zgomotul de fundal sau cu momentul zilei — Corect: Variația intensității cu zgomotul și cu ora zilei este descrisă pentru leziunea cohleară.\n\nExistă medicamente cu eficiență demonstrată care îl suprimă în câteva zile — Incorect: Textul precizează că nu există medicamente cu eficiență dovedită.\n\nTinitusul bilateral implică, de regulă, doar un neurinom de acustic unilateral — Incorect: Neurinomul este o cauză unilaterală; tinitusul bilateral poate fi toxicitate sistemică sau leziune binaurală.\n\nTinitusul unilateral exclude patologia de cohlee sau de nerv — Incorect: Tinitusul unilateral implică patologie nervoasă sau cohleară, nu o exclude.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 555, Tinitusul — Pulsatil versus continuu (pagini PDF: 228).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    555
   ],
   "pdfPages": [
    228
   ],
   "section": "Tinitusul — Pulsatil versus continuu"
  },
  "learningObjective": "Separarea originii vasculare a tinitusului pulsatil de sunetul continuu cohlear, cu recunoașterea absenței unui tratament medicamentos dovedit.",
  "optionRationales": [
   "Textul atribuie tinitusul pulsatil unei origini vasculare.",
   "Variația intensității cu zgomotul și cu ora zilei este descrisă pentru leziunea cohleară.",
   "Textul precizează că nu există medicamente cu eficiență dovedită.",
   "Neurinomul este o cauză unilaterală; tinitusul bilateral poate fi toxicitate sistemică sau leziune binaurală.",
   "Tinitusul unilateral implică patologie nervoasă sau cohleară, nu o exclude."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inventă un tratament medicamentos eficient și inversează lateralitatea (neurinom unilateral versus tinitus bilateral)."
  },
  "textbookExpressions": [
   "Tinitusul pulsatil",
   "sunet continuu"
  ]
 },
 {
  "id": "orl-adv-045",
  "topicId": "orl",
  "type": "CS",
  "stem": "Rinoreea purulentă unilaterală sau epistaxisul la un copil sau la un pacient psihiatric trebuie să ridice suspiciunea de:",
  "options": [
   "Corp străin intranazal",
   "Polipoză nazală bilaterală de complex ostio-meatal",
   "Rinită alergică mediată de IgE, cu teste cutanate pozitive",
   "Atrezie coanală bilaterală de nou-născut",
   "Osteom fronto-etmoidal asimptomatic"
  ],
  "correct": [
   0
  ],
  "explanation": "Corp străin intranazal — Corect: Textul cere suspiciunea de corp străin în rinoree purulentă unilaterală sau epistaxis la pediatrici sau psihiatrici.\n\nPolipoză nazală bilaterală de complex ostio-meatal — Incorect: Polipii sunt rar unilaterali; forma bilaterală nu explică rinoreea purulentă unilaterală.\n\nRinită alergică mediată de IgE, cu teste cutanate pozitive — Incorect: Rinita alergică produce secreții subțiri albicioase, de obicei bilaterale.\n\nAtrezie coanală bilaterală de nou-născut — Incorect: Atrezia bilaterală este urgență neonatală de cale aeriană, nu rinoree purulentă la copilul mare.\n\nOsteom fronto-etmoidal asimptomatic — Incorect: Osteomul asimptomatic se monitorizează, nu produce rinoree purulentă unilaterală.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 563, Epistaxisul și rinoreea — Corp străin (pagini PDF: 236).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    563
   ],
   "pdfPages": [
    236
   ],
   "section": "Epistaxisul și rinoreea — Corp străin"
  },
  "learningObjective": "Recunoașterea corpului străin ca explicație a rinoreei purulente unilaterale la copil sau pacient psihiatric.",
  "optionRationales": [
   "Textul cere suspiciunea de corp străin în rinoree purulentă unilaterală sau epistaxis la pediatrici sau psihiatrici.",
   "Polipii sunt rar unilaterali; forma bilaterală nu explică rinoreea purulentă unilaterală.",
   "Rinita alergică produce secreții subțiri albicioase, de obicei bilaterale.",
   "Atrezia bilaterală este urgență neonatală de cale aeriană, nu rinoree purulentă la copilul mare.",
   "Osteomul asimptomatic se monitorizează, nu produce rinoree purulentă unilaterală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește corpul străin cu polipoza bilaterală sau rinita alergică, două cauze de secreție din același capitol."
  },
  "textbookExpressions": [
   "corpi stră",
   "epistaxis"
  ]
 },
 {
  "id": "orl-adv-046",
  "topicId": "orl",
  "type": "CM",
  "stem": "Secrețiile nazale și sindromul picăturii postnazale:",
  "options": [
   "Secrețiile transparente, unilaterale, pot apărea în fistula de LCR și impun recoltarea și analiza secreției",
   "Sindromul picăturii postnazale poate determina disfagie, exacerbarea astmului, odinofagie sau disfonie",
   "Secrețiile purulente, urât mirositoare, indică o infecție bacteriană",
   "Secrețiile subțiri translucid-albicioase sunt tipice doar infecției fungice invazive cu Mucor",
   "Absența secrețiilor la examenul nazal exclude diagnosticul de rinosinuzită"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Secrețiile transparente, unilaterale, pot apărea în fistula de LCR și impun recoltarea și analiza secreției — Corect: Secreția transparentă unilaterală ca fistula de LCR, cu indicație de analiză, este explicită.\n\nSindromul picăturii postnazale poate determina disfagie, exacerbarea astmului, odinofagie sau disfonie — Corect: Lista de simptome ale picăturii postnazale este enumerată.\n\nSecrețiile purulente, urât mirositoare, indică o infecție bacteriană — Corect: Secrețiile purulente fetide indică infecție bacteriană.\n\nSecrețiile subțiri translucid-albicioase sunt tipice doar infecției fungice invazive cu Mucor — Incorect: Secrețiile subțiri albicioase sunt frecvente în rinite alergice, vasomotorii sau virale, nu în mucormicoză.\n\nAbsența secrețiilor la examenul nazal exclude diagnosticul de rinosinuzită — Incorect: Textul precizează că absența secrețiilor nu exclude diagnosticul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 563, Rinoreea — Fistula de LCR și picătura postnazală (pagini PDF: 236).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    563
   ],
   "pdfPages": [
    236
   ],
   "section": "Rinoreea — Fistula de LCR și picătura postnazală"
  },
  "learningObjective": "Recunoașterea secreției clare unilaterale ca alertă de LCR și a simptomelor picăturii postnazale, versus falsa excludere prin nas „uscat”.",
  "optionRationales": [
   "Secreția transparentă unilaterală ca fistula de LCR, cu indicație de analiză, este explicită.",
   "Lista de simptome ale picăturii postnazale este enumerată.",
   "Secrețiile purulente fetide indică infecție bacteriană.",
   "Secrețiile subțiri albicioase sunt frecvente în rinite alergice, vasomotorii sau virale, nu în mucormicoză.",
   "Textul precizează că absența secrețiilor nu exclude diagnosticul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie secreția albicioasă mucormicozei și tratează nasul uscat ca excludere de sinuzită."
  },
  "textbookExpressions": [
   "picăturii postnazale",
   "Secreţiile transparente"
  ]
 },
 {
  "id": "orl-adv-047",
  "topicId": "orl",
  "type": "CM",
  "stem": "Telangiectazia ereditară hemoragică, cauză de epistaxis recurent, se caracterizează prin:",
  "options": [
   "Transmitere autozomal dominantă, cu malformații arterio-venoase la mucoasa aerodigestivă",
   "Fragilitate vasculară a mucoasei nazale, cu hemoragii nazale recurente",
   "Transmitere recesivă legată de X, similară deficitului de G6PD",
   "Lipsa oricărei malformații vasculare, sângerarea fiind doar traumatică digitală",
   "Răspuns durabil la o singură cauterizare, fără recidivă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Transmitere autozomal dominantă, cu malformații arterio-venoase la mucoasa aerodigestivă — Corect: Transmiterea AD și MAV-urile mucoasei aerodigestive sunt explicite.\n\nFragilitate vasculară a mucoasei nazale, cu hemoragii nazale recurente — Corect: Fragilitatea vasculară cu hemoragii recurente este descrisă.\n\nTransmitere recesivă legată de X, similară deficitului de G6PD — Incorect: Modelul nu este recesiv legat de X.\n\nLipsa oricărei malformații vasculare, sângerarea fiind doar traumatică digitală — Incorect: Malformațiile arterio-venoase sunt substratul, nu doar trauma digitală.\n\nRăspuns durabil la o singură cauterizare, fără recidivă — Incorect: Epistaxisul este recurent prin însăși natura bolii.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 563, Epistaxisul — Telangiectazia ereditară hemoragică (pagini PDF: 236).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    563
   ],
   "pdfPages": [
    236
   ],
   "section": "Epistaxisul — Telangiectazia ereditară hemoragică"
  },
  "learningObjective": "Recunoașterea transmiterii autozomal dominante și a MAV-urilor mucoasei aerodigestive ca substrat al epistaxisului recidivant.",
  "optionRationales": [
   "Transmiterea AD și MAV-urile mucoasei aerodigestive sunt explicite.",
   "Fragilitatea vasculară cu hemoragii recurente este descrisă.",
   "Modelul nu este recesiv legat de X.",
   "Malformațiile arterio-venoase sunt substratul, nu doar trauma digitală.",
   "Epistaxisul este recurent prin însăși natura bolii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă transmiterea AD cu X-linkatul G6PD și reduce boala la o cauză traumatică unică."
  },
  "textbookExpressions": [
   "Telangiectazia ereditară",
   "autozomal dominantă"
  ]
 },
 {
  "id": "orl-adv-048",
  "topicId": "orl",
  "type": "CM",
  "stem": "În sinuzita cronică, măsurile care facilitează clearance-ul mucociliar și ventilația includ:",
  "options": [
   "Sprayuri intranazale steroidiene topice, ca adiție importantă la antibiotic prin efect antiinflamator asupra ostiumului",
   "Sprayuri nazale saline, expectorante, oprirea fumatului și creșterea aportului de fluide",
   "Chirurgia concentrată pe complexul ostio-meatal, pentru restabilirea ventilației și a drenajului",
   "Corticoterapia sistemică prelungită ca unică măsură, fără topițe sau igienă nazală",
   "Abandonarea complexului ostio-meatal ca țintă chirurgicală, drenajul făcându-se doar prin meatul inferior"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sprayuri intranazale steroidiene topice, ca adiție importantă la antibiotic prin efect antiinflamator asupra ostiumului — Corect: Rolul antiinflamator al spray-urilor steroidiene asupra ostiumului este explicit.\n\nSprayuri nazale saline, expectorante, oprirea fumatului și creșterea aportului de fluide — Corect: Salina, expectorantele, oprirea fumatului și fluidele sunt enumerate.\n\nChirurgia concentrată pe complexul ostio-meatal, pentru restabilirea ventilației și a drenajului — Corect: Chirurgia se concentrează pe complexul ostio-meatal.\n\nCorticoterapia sistemică prelungită ca unică măsură, fără topițe sau igienă nazală — Incorect: Steroizii sistemici prelungiți nu înlocuiesc topițele și igiena.\n\nAbandonarea complexului ostio-meatal ca țintă chirurgicală, drenajul făcându-se doar prin meatul inferior — Incorect: Complexul ostio-meatal rămâne pivotul, nu meatul inferior.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 566, Sinuzita cronică — Ostium, steroizi topici și chirurgie (pagini PDF: 239).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    566
   ],
   "pdfPages": [
    239
   ],
   "section": "Sinuzita cronică — Ostium, steroizi topici și chirurgie"
  },
  "learningObjective": "Integrarea steroizilor topici, a măsurilor de clearance și a rolului de pivot al complexului ostio-meatal în chirurgia sinuzitei cronice.",
  "optionRationales": [
   "Rolul antiinflamator al spray-urilor steroidiene asupra ostiumului este explicit.",
   "Salina, expectorantele, oprirea fumatului și fluidele sunt enumerate.",
   "Chirurgia se concentrează pe complexul ostio-meatal.",
   "Steroizii sistemici prelungiți nu înlocuiesc topițele și igiena.",
   "Complexul ostio-meatal rămâne pivotul, nu meatul inferior."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează pivotul ostio-meatal și înlocuiește steroizii topici cu o cură sistemică unică."
  },
  "textbookExpressions": [
   "complexului ostio-meatal",
   "Spray-urile"
  ]
 },
 {
  "id": "orl-adv-049",
  "topicId": "orl",
  "type": "CS",
  "stem": "Cea mai des întâlnită tumoră ce implică sinusurile paranazale este:",
  "options": [
   "Osteomul, adesea în regiunea fronto-etmoidală, frecvent descoperit accidental",
   "Papilomul invertit, cu degenerare în 10–15%",
   "Angiofibromul juvenil al adolescentului masculin",
   "Neuroblastomul olfactiv (estezioneuroblastomul)",
   "Rabdomiosarcomul de musculatură striată"
  ],
  "correct": [
   0
  ],
  "explanation": "Osteomul, adesea în regiunea fronto-etmoidală, frecvent descoperit accidental — Corect: Textul numește osteomul cea mai des întâlnită tumoră a sinusurilor paranazale, fronto-etmoidală, adesea accidentală.\n\nPapilomul invertit, cu degenerare în 10–15% — Incorect: Papilomul invertit este invaziv local, cu 10–15% degenerare, nu cea mai frecventă.\n\nAngiofibromul juvenil al adolescentului masculin — Incorect: Angiofibromul este tumora adolescentului masculin, nu cea mai frecventă.\n\nNeuroblastomul olfactiv (estezioneuroblastomul) — Incorect: Estezioneuroblastomul este o malignitate rară neuroectodermală.\n\nRabdomiosarcomul de musculatură striată — Incorect: Rabdomiosarcomul este o tumoră rară a musculaturii.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 566, Neoplazii rinosinusale — Osteomul (pagini PDF: 239).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    566
   ],
   "pdfPages": [
    239
   ],
   "section": "Neoplazii rinosinusale — Osteomul"
  },
  "learningObjective": "Identificarea osteomului ca tumora sinusală cea mai frecventă, distinctă de papilomul invertit, angiofibrom și tumorile maligne rare.",
  "optionRationales": [
   "Textul numește osteomul cea mai des întâlnită tumoră a sinusurilor paranazale, fronto-etmoidală, adesea accidentală.",
   "Papilomul invertit este invaziv local, cu 10–15% degenerare, nu cea mai frecventă.",
   "Angiofibromul este tumora adolescentului masculin, nu cea mai frecventă.",
   "Estezioneuroblastomul este o malignitate rară neuroectodermală.",
   "Rabdomiosarcomul este o tumoră rară a musculaturii."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește osteomul (cea mai frecventă, adesea incidentală) cu papilomul invertit sau angiofibromul, mai „celebre” dar mai rare."
  },
  "textbookExpressions": [
   "Osteomul",
   "sinusurile paranazale"
  ]
 },
 {
  "id": "orl-adv-050",
  "topicId": "orl",
  "type": "CM",
  "stem": "Disfagia și odinofagia orientează astfel:",
  "options": [
   "Disfagia doar pentru solide sau progresivă (solide apoi lichide) orientează către un obstacol mecanic",
   "Odinofagia cronică asociată acestui tip de disfagie poate indica o malignitate și impune laringoscopie și esofagoscopie, eventual biopsie",
   "Senzația de înecare, mai ales cu lichide, sugerează lipsă de control a bolului în tulburări neurologice",
   "Disfagia doar pentru lichide, cu sparing al solidelor, este semnul clasic al cancerului esofagian stenozant",
   "Globus-ul asociază constant un deficit neurologic obiectiv, fără rol pentru reflux sau picătura postnazală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Disfagia doar pentru solide sau progresivă (solide apoi lichide) orientează către un obstacol mecanic — Corect: Patternul solide/progresiv ca obstacol mecanic este explicit.\n\nOdinofagia cronică asociată acestui tip de disfagie poate indica o malignitate și impune laringoscopie și esofagoscopie, eventual biopsie — Corect: Odinofagia cronică ca indiciu de malignitate, cu endoscopie, este enunțată.\n\nSenzația de înecare, mai ales cu lichide, sugerează lipsă de control a bolului în tulburări neurologice — Corect: Înecarea cu lichide ca semn neurologic este descrisă.\n\nDisfagia doar pentru lichide, cu sparing al solidelor, este semnul clasic al cancerului esofagian stenozant — Incorect: Cancerul stenozant debutază la solide, nu la lichide.\n\nGlobus-ul asociază constant un deficit neurologic obiectiv, fără rol pentru reflux sau picătura postnazală — Incorect: Examenul în globus este adesea nesemnificativ; refluxul, picătura postnazală și iritanții trebuie considerați.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 568, Disfagia — Obstacol mecanic versus neurologic (pagini PDF: 241).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    568
   ],
   "pdfPages": [
    241
   ],
   "section": "Disfagia — Obstacol mecanic versus neurologic"
  },
  "learningObjective": "Separarea disfagiei pentru solide (mecanică, alertă oncologică) de înecarea cu lichide (neurologică) și de globus-ul iritativ.",
  "optionRationales": [
   "Patternul solide/progresiv ca obstacol mecanic este explicit.",
   "Odinofagia cronică ca indiciu de malignitate, cu endoscopie, este enunțată.",
   "Înecarea cu lichide ca semn neurologic este descrisă.",
   "Cancerul stenozant debutază la solide, nu la lichide.",
   "Examenul în globus este adesea nesemnificativ; refluxul, picătura postnazală și iritanții trebuie considerați."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează solide versus lichide între obstacolul mecanic și deficitul neurologic."
  },
  "textbookExpressions": [
   "Odinofagia cronică",
   "obstacol mecanic"
  ]
 },
 {
  "id": "orl-adv-051",
  "topicId": "orl",
  "type": "CM",
  "stem": "Ingestia de caustice la nivelul cavității orale și al esofagului:",
  "options": [
   "Alcalinele provoacă necroză de lichefiere, de obicei cu leziuni mai severe esofagiene",
   "Acizii au ca efect necroza de coagulare",
   "Severitatea leziunilor externe și orofaringiene poate să nu se coreleze cu extensia leziunilor esofagiene sau gastrice",
   "Un aspect oral benign exclude leziunile distale severe",
   "Alcalinele produc doar necroză de coagulare superficială, fără risc de perforație"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Alcalinele provoacă necroză de lichefiere, de obicei cu leziuni mai severe esofagiene — Corect: Necroza de lichefiere a alcalinelor, mai severă esofagian, este explicită.\n\nAcizii au ca efect necroza de coagulare — Corect: Necroza de coagulare a acizilor este enunțată.\n\nSeveritatea leziunilor externe și orofaringiene poate să nu se coreleze cu extensia leziunilor esofagiene sau gastrice — Corect: Lipsa de corelație oral–distal este subliniată.\n\nUn aspect oral benign exclude leziunile distale severe — Incorect: Un aspect oral aparent benign poate masca leziuni distale severe.\n\nAlcalinele produc doar necroză de coagulare superficială, fără risc de perforație — Incorect: Alcalinele lichidă, nu coagulează; perforația este un risc.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 568, Ingestia de caustice — Lichefiere versus coagulare (pagini PDF: 241).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    568
   ],
   "pdfPages": [
    241
   ],
   "section": "Ingestia de caustice — Lichefiere versus coagulare"
  },
  "learningObjective": "Contrastarea necrozei de lichefiere (alcaline, esofag) cu cea de coagulare (acizi) și recunoașterea discordanței oral–distal.",
  "optionRationales": [
   "Necroza de lichefiere a alcalinelor, mai severă esofagian, este explicită.",
   "Necroza de coagulare a acizilor este enunțată.",
   "Lipsa de corelație oral–distal este subliniată.",
   "Un aspect oral aparent benign poate masca leziuni distale severe.",
   "Alcalinele lichidă, nu coagulează; perforația este un risc."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește lichefierea alcalină cu coagularea acidă și tratează gura „curată” ca excludere a leziunii esofagiene."
  },
  "textbookExpressions": [
   "necroză de lichefiere",
   "necroza de coagulare"
  ]
 },
 {
  "id": "orl-adv-052",
  "topicId": "orl",
  "type": "CS",
  "stem": "Cea mai des întâlnită infecție fungică a cavității orale este:",
  "options": [
   "Candidoza cauzată de Candida albicans",
   "Mucormicoza (Rhizopus) invazivă de sinus",
   "Aspergiloza rinosinusală la imunocompetent",
   "Actinomicoza cervicală cu granulații sulfurate",
   "Blastomicoza laringiană"
  ],
  "correct": [
   0
  ],
  "explanation": "Candidoza cauzată de Candida albicans — Corect: Textul numește candidoza prin Candida albicans cea mai des întâlnită infecție fungică orală.\n\nMucormicoza (Rhizopus) invazivă de sinus — Incorect: Mucor/Rhizopus sunt cauze de infecție rinosinusală fulminantă la imunocompromis.\n\nAspergiloza rinosinusală la imunocompetent — Incorect: Aspergillus figurează alături de Phycomycetes la sinusuri, nu ca prima infecție orală.\n\nActinomicoza cervicală cu granulații sulfurate — Incorect: Actinomicoza nu este infecția fungică orală dominantă din acest paragraf.\n\nBlastomicoza laringiană — Incorect: Blastomicoza laringiană nu este citată ca cea mai frecventă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 568, Stomatita fungică — Candida albicans (pagini PDF: 241).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    568
   ],
   "pdfPages": [
    241
   ],
   "section": "Stomatita fungică — Candida albicans"
  },
  "learningObjective": "Identificarea candidozei orale ca infecție fungică dominantă, distinctă de fungii rinosinusali oportuniști.",
  "optionRationales": [
   "Textul numește candidoza prin Candida albicans cea mai des întâlnită infecție fungică orală.",
   "Mucor/Rhizopus sunt cauze de infecție rinosinusală fulminantă la imunocompromis.",
   "Aspergillus figurează alături de Phycomycetes la sinusuri, nu ca prima infecție orală.",
   "Actinomicoza nu este infecția fungică orală dominantă din acest paragraf.",
   "Blastomicoza laringiană nu este citată ca cea mai frecventă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește Candida orală cu Mucor sau Aspergillus, agenții infecțiilor rinosinusale din capitol."
  },
  "textbookExpressions": [
   "Candida albicans",
   "cea mai des întâlnită infecţie fungică"
  ]
 },
 {
  "id": "orl-adv-053",
  "topicId": "orl",
  "type": "CM",
  "stem": "Cadrul cartilaginos al laringelui cuprinde:",
  "options": [
   "Nouă structuri cartilaginoase, dintre care trei nepereche și trei pereche",
   "Nepereche: epiglota, tiroidul și cricoidul",
   "Pereche: aritenoidele, corniculatele și cuneiformele",
   "Cricoidul, singurul inel cartilaginos complet, are formă de inel cu pecete localizată posterior",
   "Cartilajul tiroid este singurul inel complet, în formă de pecete posterior"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Nouă structuri cartilaginoase, dintre care trei nepereche și trei pereche — Corect: Cadrul de nouă structuri, trei nepereche și trei pereche, este explicit.\n\nNepereche: epiglota, tiroidul și cricoidul — Corect: Cele trei nepereche sunt enumerate.\n\nPereche: aritenoidele, corniculatele și cuneiformele — Corect: Cele trei pereche sunt enumerate.\n\nCricoidul, singurul inel cartilaginos complet, are formă de inel cu pecete localizată posterior — Corect: Cricoidul este singurul inel complet, cu pecetea posterior.\n\nCartilajul tiroid este singurul inel complet, în formă de pecete posterior — Incorect: Tiroidul este în formă de scut; inelul complet este cricoidul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 570, Laringele — Anatomie cartilaginoasă (pagini PDF: 243).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    570
   ],
   "pdfPages": [
    243
   ],
   "section": "Laringele — Anatomie cartilaginoasă"
  },
  "learningObjective": "Recunoașterea celor 9 cartilaje (3+3) și a identității cricoidului ca singurul inel complet, în formă de pecete posterior.",
  "optionRationales": [
   "Cadrul de nouă structuri, trei nepereche și trei pereche, este explicit.",
   "Cele trei nepereche sunt enumerate.",
   "Cele trei pereche sunt enumerate.",
   "Cricoidul este singurul inel complet, cu pecetea posterior.",
   "Tiroidul este în formă de scut; inelul complet este cricoidul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește inelul complet (cricoid) cu scutul tiroidian, lângă lista de 3+3 cartilaje."
  },
  "textbookExpressions": [
   "nouă structuri",
   "cricoid"
  ]
 },
 {
  "id": "orl-adv-054",
  "topicId": "orl",
  "type": "CM",
  "stem": "Mușchiul crico-aritenoidian posterior se caracterizează prin:",
  "options": [
   "Rotește aritenoidul către lateral, deschizând (abducție) corzile vocale pentru respirație",
   "Restul mușchilor intrinseci închid (adducție) corzile pentru fonație, tuse și deglutiție",
   "Mușchii extrinseci ascensionează și tensionează laringele ca pe un întreg",
   "Este singurul adductor, inervat de nervul laringeu superior prin membrana tirohioidiană",
   "Abducția este asigurată de crico-tiroidian, ramură a recurentului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Rotește aritenoidul către lateral, deschizând (abducție) corzile vocale pentru respirație — Corect: Rotația laterală și abducția pentru respirație sunt explicite.\n\nRestul mușchilor intrinseci închid (adducție) corzile pentru fonație, tuse și deglutiție — Corect: Ceilalți intrinseci adductează pentru fonație, tuse și deglutiție.\n\nMușchii extrinseci ascensionează și tensionează laringele ca pe un întreg — Corect: Extrinsecii mobilizează laringele ca întreg.\n\nEste singurul adductor, inervat de nervul laringeu superior prin membrana tirohioidiană — Incorect: Posteriorul este abductor, nu adductor; laringele superior inervează crico-tiroidianul.\n\nAbducția este asigurată de crico-tiroidian, ramură a recurentului — Incorect: Crico-tiroidianul este inervat de laringele superior, nu este abductorul principal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 570, Laringele — Mușchi intrinseci și extrinseci (pagini PDF: 243).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    570
   ],
   "pdfPages": [
    243
   ],
   "section": "Laringele — Mușchi intrinseci și extrinseci"
  },
  "learningObjective": "Identificarea crico-aritenoidianului posterior ca unicul abductor, versus adducția celorlalți intrinseci și rolul extrinsecilor.",
  "optionRationales": [
   "Rotația laterală și abducția pentru respirație sunt explicite.",
   "Ceilalți intrinseci adductează pentru fonație, tuse și deglutiție.",
   "Extrinsecii mobilizează laringele ca întreg.",
   "Posteriorul este abductor, nu adductor; laringele superior inervează crico-tiroidianul.",
   "Crico-tiroidianul este inervat de laringele superior, nu este abductorul principal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează abducția unică a posteriorului cu adducția și atribuie greșit inervația laringelui superior."
  },
  "textbookExpressions": [
   "crico-a",
   "abducţie"
  ]
 },
 {
  "id": "orl-adv-055",
  "topicId": "orl",
  "type": "CS",
  "stem": "Hemoptizia, în semiologia ORL, poate indica:",
  "options": [
   "O leziune hemoragică a tractului aero-digestiv superior, inclusiv sânge nazal drenat posterior și aspirat",
   "Doar patologia pulmonară, sursele supra-glotice fiind excluse prin definiție",
   "Otimpanul intact, fără a necesita inspectarea nasului sau a faringelui",
   "Fixarea piciorului scăriței, ca în otoscleroză",
   "Stridorul inspirator al laringomalaciei, fără sângerare"
  ],
  "correct": [
   0
  ],
  "explanation": "O leziune hemoragică a tractului aero-digestiv superior, inclusiv sânge nazal drenat posterior și aspirat — Corect: Textul cere excluderea aspirației sângelui dintr-o sursă aero-digestivă superioară, precum hemoragia nazală drenată posterior.\n\nDoar patologia pulmonară, sursele supra-glotice fiind excluse prin definiție — Incorect: Semiologia clasică pulmonară nu exclude sursele superioare.\n\nOtimpanul intact, fără a necesita inspectarea nasului sau a faringelui — Incorect: Nasul și faringele trebuie inspectate.\n\nFixarea piciorului scăriței, ca în otoscleroză — Incorect: Otoscleroza produce hipoacuzie de transmisie, nu hemoptizie.\n\nStridorul inspirator al laringomalaciei, fără sângerare — Incorect: Laringomalacia produce stridor inspirator, nu hemoptizie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 572, Hemoptizia — Sursă aero-digestivă superioară (pagini PDF: 245).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    572
   ],
   "pdfPages": [
    245
   ],
   "section": "Hemoptizia — Sursă aero-digestivă superioară"
  },
  "learningObjective": "Recunoașterea posibilității ca „hemoptizia” să fie sânge aspirat din nas sau din tractul aero-digestiv superior.",
  "optionRationales": [
   "Textul cere excluderea aspirației sângelui dintr-o sursă aero-digestivă superioară, precum hemoragia nazală drenată posterior.",
   "Semiologia clasică pulmonară nu exclude sursele superioare.",
   "Nasul și faringele trebuie inspectate.",
   "Otoscleroza produce hipoacuzie de transmisie, nu hemoptizie.",
   "Laringomalacia produce stridor inspirator, nu hemoptizie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează hemoptizia ca semn strict pulmonar, ignorând drenajul posterior al epistaxisului din același capitol."
  },
  "textbookExpressions": [
   "Hemoptizia",
   "aero-digestiv superior"
  ]
 },
 {
  "id": "orl-adv-056",
  "topicId": "orl",
  "type": "CM",
  "stem": "Stenoza traheală și subglotică postintubație:",
  "options": [
   "Cea mai frecventă leziune internă este intubația prelungită; presiunea balonașului poate provoca ischemie și leziuni mucoase",
   "Modificările cicatriciale pot apărea în zile până la luni de la detubare, pe măsură ce cicatricea se contractă",
   "Segmentele mai scurte de 1 cm pot fi rezolvate prin excizii laser endoscopice și dilatații; mitomicina C topică a dat rezultate promițătoare",
   "Stenoza scurtă impune de principiu rezecție segmentară cu anastomoză, laserul fiind inutil",
   "Mitomicina C stimulează fibroblastele și este contraindicată după dilatație"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cea mai frecventă leziune internă este intubația prelungită; presiunea balonașului poate provoca ischemie și leziuni mucoase — Corect: Mecanismul intubație prelungită–presiune–ischemie este explicit.\n\nModificările cicatriciale pot apărea în zile până la luni de la detubare, pe măsură ce cicatricea se contractă — Corect: Apariția în zile până la luni, prin contracția cicatricei, este descrisă.\n\nSegmentele mai scurte de 1 cm pot fi rezolvate prin excizii laser endoscopice și dilatații; mitomicina C topică a dat rezultate promițătoare — Corect: Pragul sub 1 cm pentru laser/dilatații și mitomicina C sunt citate.\n\nStenoza scurtă impune de principiu rezecție segmentară cu anastomoză, laserul fiind inutil — Incorect: Rezecția cu anastomoză este, de regulă, necesară; stenoza scurtă poate fi endoscopică.\n\nMitomicina C stimulează fibroblastele și este contraindicată după dilatație — Incorect: Mitomicina C este un inhibitor de activitate fibroblastică, nu un stimulator.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 574, Stenoza subglotică și traheală postintubație (pagini PDF: 247).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    574
   ],
   "pdfPages": [
    247
   ],
   "section": "Stenoza subglotică și traheală postintubație"
  },
  "learningObjective": "Legarea ischemiei de balonaș, a ferestrei zile–luni și a laserului plus mitomicină pentru stenozele <1 cm.",
  "optionRationales": [
   "Mecanismul intubație prelungită–presiune–ischemie este explicit.",
   "Apariția în zile până la luni, prin contracția cicatricei, este descrisă.",
   "Pragul sub 1 cm pentru laser/dilatații și mitomicina C sunt citate.",
   "Rezecția cu anastomoză este, de regulă, necesară; stenoza scurtă poate fi endoscopică.",
   "Mitomicina C este un inhibitor de activitate fibroblastică, nu un stimulator."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează pragul de 1 cm (laser versus rezecție) și transformă inhibitorul fibroblastelor într-un stimulator."
  },
  "textbookExpressions": [
   "mitomicină C",
   "intubaţia prelungită"
  ]
 },
 {
  "id": "orl-adv-057",
  "topicId": "orl",
  "type": "CS",
  "stem": "Adenita cervicală supurată la copil, fără ameliorare în 24–48 de ore de antibioterapie, impune:",
  "options": [
   "Incizia și drenajul colecției",
   "Observație încă 2 săptămâni, fluctuenta fiind suficientă",
   "Doar vaccin pneumococic, fără drenaj",
   "Operația Sistrunk, ca în chistul tireoglos",
   "Embolizarea arterei maxilare interne, ca în epistaxisul posterior"
  ],
  "correct": [
   0
  ],
  "explanation": "Incizia și drenajul colecției — Corect: Textul cere incizie și drenaj dacă supurația se superficializează sau nu se ameliorează în 24–48 de ore.\n\nObservație încă 2 săptămâni, fluctuenta fiind suficientă — Incorect: Așteptarea prelungită nu este strategia descrisă.\n\nDoar vaccin pneumococic, fără drenaj — Incorect: Vaccinul nu drenează un abces format.\n\nOperația Sistrunk, ca în chistul tireoglos — Incorect: Sistrunk este operația chistului tireoglos, nu a adenitei.\n\nEmbolizarea arterei maxilare interne, ca în epistaxisul posterior — Incorect: Embolizarea maxilarei interne privește epistaxisul posterior.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 580, Adenita cervicală — Drenajul supurației (pagini PDF: 253).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    580
   ],
   "pdfPages": [
    253
   ],
   "section": "Adenita cervicală — Drenajul supurației"
  },
  "learningObjective": "Recunoașterea ferestrei 24–48 de ore către incizie și drenaj când antibioterapia eșuează la copilul cu adenită supurată.",
  "optionRationales": [
   "Textul cere incizie și drenaj dacă supurația se superficializează sau nu se ameliorează în 24–48 de ore.",
   "Așteptarea prelungită nu este strategia descrisă.",
   "Vaccinul nu drenează un abces format.",
   "Sistrunk este operația chistului tireoglos, nu a adenitei.",
   "Embolizarea maxilarei interne privește epistaxisul posterior."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește drenajul adenitei cu Sistrunk sau embolizarea maxilarei, două gesturi din același capitol de cap și gât."
  },
  "textbookExpressions": [
   "24--48 de ore",
   "drenajul"
  ]
 },
 {
  "id": "orl-adv-058",
  "topicId": "orl",
  "type": "CM",
  "stem": "Boala ghearelor de pisică (adenită granulomatoasă):",
  "options": [
   "Este cauzată de zgârietura de feline sau canide; lanțul ganglionar ipsilateral se tumefiază și este sensibil",
   "Manifestările sistemice inițiale includ subfebră, stare generală alterată și mialgii",
   "Adenopatia se poate remite spontan; tratamentul este suportiv, iar antibioticele cu spectru Gram-negativ pot scurta evoluția",
   "Diagnosticul se bazează pe serologia Epstein-Barr, identică mononucleozei",
   "Excizia tuturor nodulilor este primul gest, înaintea oricărei observații"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Este cauzată de zgârietura de feline sau canide; lanțul ganglionar ipsilateral se tumefiază și este sensibil — Corect: Mecanismul zgârieturii și adenopatia ipsilaterală sensibilă sunt explicite.\n\nManifestările sistemice inițiale includ subfebră, stare generală alterată și mialgii — Corect: Subfebră, alterare și mialgii sunt enumerate.\n\nAdenopatia se poate remite spontan; tratamentul este suportiv, iar antibioticele cu spectru Gram-negativ pot scurta evoluția — Corect: Remisia spontană, tratamentul suportiv și scurtarea cu antibiotice Gram-negative sunt descrise.\n\nDiagnosticul se bazează pe serologia Epstein-Barr, identică mononucleozei — Incorect: Serologia EBV ține de mononucleoză, listată alături de Bartonella, nu este testul bolii ghearelor.\n\nExcizia tuturor nodulilor este primul gest, înaintea oricărei observații — Incorect: Excizia (sau puncția) este rezervată supurației, nu este primul gest.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 580, Adenita granulomatoasă — Boala ghearelor de pisică (pagini PDF: 253).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    580
   ],
   "pdfPages": [
    253
   ],
   "section": "Adenita granulomatoasă — Boala ghearelor de pisică"
  },
  "learningObjective": "Recunoașterea zgârieturii felină/canină, a tabloului sistemic blând și a tratamentului suportiv, versus falsa echivalare cu EBV.",
  "optionRationales": [
   "Mecanismul zgârieturii și adenopatia ipsilaterală sensibilă sunt explicite.",
   "Subfebră, alterare și mialgii sunt enumerate.",
   "Remisia spontană, tratamentul suportiv și scurtarea cu antibiotice Gram-negative sunt descrise.",
   "Serologia EBV ține de mononucleoză, listată alături de Bartonella, nu este testul bolii ghearelor.",
   "Excizia (sau puncția) este rezervată supurației, nu este primul gest."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă Bartonella cu EBV și pune excizia înaintea evoluției suportive."
  },
  "textbookExpressions": [
   "ghearelor de pisică",
   "subfebră"
  ]
 },
 {
  "id": "orl-adv-059",
  "topicId": "orl",
  "type": "CM",
  "stem": "Chistul dermoid cervical se deosebește de chistul de canal tireoglos prin:",
  "options": [
   "Nu își modifică poziția odată cu deglutiția, nefiind atașat de osul hioid",
   "Este adesea situat superficial de musculatura prelaringiană",
   "Apare, de regulă, în primele două decade, ca formațiune moale, nedureroasă, mediană",
   "Ascensionează la protruzia limbii, fiind legat de foramen cecum",
   "Se tratează prin operația Sistrunk, cu rezecția corpului hioidului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Nu își modifică poziția odată cu deglutiția, nefiind atașat de osul hioid — Corect: Lipsa deplasării cu deglutiția, prin absența atașării de hioid, este explicită.\n\nEste adesea situat superficial de musculatura prelaringiană — Corect: Sediul superficial de musculatura prelaringiană este enunțat.\n\nApare, de regulă, în primele două decade, ca formațiune moale, nedureroasă, mediană — Corect: Vârsta (primele două decade) și caracterul moale median nedureros sunt descrise.\n\nAscensionează la protruzia limbii, fiind legat de foramen cecum — Incorect: Ascensionarea la protruzia limbii definește chistul tireoglos, nu dermoidul.\n\nSe tratează prin operația Sistrunk, cu rezecția corpului hioidului — Incorect: Sistrunk este tratamentul anomaliei tireoglose; dermoidul se excizează complet.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 581, Chistul dermoid versus canalul tireoglos (pagini PDF: 254).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    581
   ],
   "pdfPages": [
    254
   ],
   "section": "Chistul dermoid versus canalul tireoglos"
  },
  "learningObjective": "Contrastarea imobilității la deglutiție și a sediului superficial prelaringian cu mobilitatea tireoglosului legat de hioid.",
  "optionRationales": [
   "Lipsa deplasării cu deglutiția, prin absența atașării de hioid, este explicită.",
   "Sediul superficial de musculatura prelaringiană este enunțat.",
   "Vârsta (primele două decade) și caracterul moale median nedureros sunt descrise.",
   "Ascensionarea la protruzia limbii definește chistul tireoglos, nu dermoidul.",
   "Sistrunk este tratamentul anomaliei tireoglose; dermoidul se excizează complet."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie dermoidului semnul limbii și operația Sistrunk, discriminatorii clasice ale canalului tireoglos."
  },
  "textbookExpressions": [
   "Chisturile dermoide",
   "osul hioid"
  ]
 },
 {
  "id": "orl-adv-060",
  "topicId": "orl",
  "type": "CM",
  "stem": "Higromul chistic și hemangiomul congenital cervical:",
  "options": [
   "Higroamele sunt malformații limfatice cavernoase, cel mai frecvent în triunghiul cervical posterior, identificate la naștere sau în primii doi ani",
   "IRM este necesar înaintea exciziei, pentru delimitare și pentru a exclude extensia toracică",
   "Majoritatea hemangioamelor scad spontan până la vârsta de 5 ani, deci tratamentul conservator este justificat",
   "Hemangioamele subglotice pot fi tratate prin excizii laser cu CO2 endoscopice sau prin administrare de β-blocante",
   "Higromul este bine încapsulat și se excizează ușor, fără risc asupra nervilor sau vaselor"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Higroamele sunt malformații limfatice cavernoase, cel mai frecvent în triunghiul cervical posterior, identificate la naștere sau în primii doi ani — Corect: Localizarea posterioară, vârsta și natura limfatică cavernosă sunt explicite.\n\nIRM este necesar înaintea exciziei, pentru delimitare și pentru a exclude extensia toracică — Corect: Necesitatea IRM pentru extensia toracică este enunțată.\n\nMajoritatea hemangioamelor scad spontan până la vârsta de 5 ani, deci tratamentul conservator este justificat — Corect: Regresia până la 5 ani și conservatorismul sunt descrise.\n\nHemangioamele subglotice pot fi tratate prin excizii laser cu CO2 endoscopice sau prin administrare de β-blocante — Corect: Laserul CO2 endoscopic și β-blocantele sunt citate pentru hemangiomul subglotic.\n\nHigromul este bine încapsulat și se excizează ușor, fără risc asupra nervilor sau vaselor — Incorect: Higroamele sunt neîncapsulate, dezorganizate și înglobează nervi și vase, făcând excizia dificilă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 582, Higromul chistic și hemangiomul congenital (pagini PDF: 255).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    582
   ],
   "pdfPages": [
    255
   ],
   "section": "Higromul chistic și hemangiomul congenital"
  },
  "learningObjective": "Recunoașterea predilecției pentru triunghiul posterior, a IRM preoperator și a regresiei hemangiomului până la 5 ani, cu alerta de hemangiom subglotic.",
  "optionRationales": [
   "Localizarea posterioară, vârsta și natura limfatică cavernosă sunt explicite.",
   "Necesitatea IRM pentru extensia toracică este enunțată.",
   "Regresia până la 5 ani și conservatorismul sunt descrise.",
   "Laserul CO2 endoscopic și β-blocantele sunt citate pentru hemangiomul subglotic.",
   "Higroamele sunt neîncapsulate, dezorganizate și înglobează nervi și vase, făcând excizia dificilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Descrie higromul ca leziune încapsulată ușor de scos și uită laserul/β-blocantul din hemangiomul subglotic."
  },
  "textbookExpressions": [
   "Higroamele chistice",
   "5 ani"
  ]
 },
 {
  "id": "orl-adv-061",
  "topicId": "orl",
  "type": "CM",
  "stem": "Celulele păroase ale urechii interne și tonotopia cohleară:",
  "options": [
   "Organul lui Corti, macula și crestele ampulare conțin celule păroase care transformă energia mecanică în energie electrică",
   "Mişcarea stereocililor din apropierea scăriței produce perceperea frecvențelor înalte, iar cea de la vârf frecvențele joase",
   "Accelerația rotațională este interpretată de canalele semicirculare, iar cea liniară de macula din utriculă și saculă",
   "Frecvențele înalte sunt percepute la helicotremă, iar cele joase lângă scăriță",
   "Macula detectează rotația capului, iar canalele semicirculare accelerația liniară gravitațională"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Organul lui Corti, macula și crestele ampulare conțin celule păroase care transformă energia mecanică în energie electrică — Corect: Cele trei organe senzoriale și conversia mecanic→electric sunt enunțate.\n\nMişcarea stereocililor din apropierea scăriței produce perceperea frecvențelor înalte, iar cea de la vârf frecvențele joase — Corect: Topografia scăriță=înalte, vârf=joase este explicită.\n\nAccelerația rotațională este interpretată de canalele semicirculare, iar cea liniară de macula din utriculă și saculă — Corect: Canalele pentru rotație și macula utriculă/saculă pentru liniar sunt descrise.\n\nFrecvențele înalte sunt percepute la helicotremă, iar cele joase lângă scăriță — Incorect: Opțiunea inversează tonotopia.\n\nMacula detectează rotația capului, iar canalele semicirculare accelerația liniară gravitațională — Incorect: Opțiunea inversează canalele cu macula.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 550, 551, Urechea internă — Transducție și tonotopie (pagini PDF: 223, 224).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    550,
    551
   ],
   "pdfPages": [
    223,
    224
   ],
   "section": "Urechea internă — Transducție și tonotopie"
  },
  "learningObjective": "Maparea stereocililor de lângă scăriță pe frecvențe înalte și a vârfului/helicotremei pe joase, plus canale (rotație) versus maculă (liniar).",
  "optionRationales": [
   "Cele trei organe senzoriale și conversia mecanic→electric sunt enunțate.",
   "Topografia scăriță=înalte, vârf=joase este explicită.",
   "Canalele pentru rotație și macula utriculă/saculă pentru liniar sunt descrise.",
   "Opțiunea inversează tonotopia.",
   "Opțiunea inversează canalele cu macula."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește tonotopia (scăriță versus helicotremă) și vectorii canal/maculă."
  },
  "textbookExpressions": [
   "frecvenţelor înalte",
   "canalelor semicirculare"
  ]
 },
 {
  "id": "orl-adv-062",
  "topicId": "orl",
  "type": "CM",
  "stem": "Sistemul vestibular, ca unul dintre cele trei sisteme de orientare în spațiu:",
  "options": [
   "Orientarea depinde de sistemul vestibular, de cel ocular și de propriocepție",
   "Eliminarea informațiilor vizuale (închiderea ochilor) sau proprioceptive la un pacient cu patologie vestibulară reduce semnificativ abilitatea de orientare",
   "Orientarea cere simultan, în orice circumstanță, semnale de la toate cele trei sisteme",
   "Sistemul auditiv, nu vestibularul, compensează asimetria în timp",
   "Propriocepția este superfluă, vestibulul izolat menținând ortostatismul cu ochii închiși"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Orientarea depinde de sistemul vestibular, de cel ocular și de propriocepție — Corect: Cele trei sisteme sunt enumerate explicit.\n\nEliminarea informațiilor vizuale (închiderea ochilor) sau proprioceptive la un pacient cu patologie vestibulară reduce semnificativ abilitatea de orientare — Corect: Închiderea ochilor sau imponderabilitatea la un vestibular patologic reduce orientarea.\n\nOrientarea cere simultan, în orice circumstanță, semnale de la toate cele trei sisteme — Incorect: Textul precizează că, în cele mai multe circumstanțe, orientarea se poate menține fără toate trei simultan.\n\nSistemul auditiv, nu vestibularul, compensează asimetria în timp — Incorect: Spre deosebire de auditiv, vestibularul poate compensa asimetria.\n\nPropriocepția este superfluă, vestibulul izolat menținând ortostatismul cu ochii închiși — Incorect: Propriocepția este unul dintre cele trei piloni, nu superfluă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 550, Fiziologie vestibulară — Cele trei sisteme de orientare (pagini PDF: 223).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    550
   ],
   "pdfPages": [
    223
   ],
   "section": "Fiziologie vestibulară — Cele trei sisteme de orientare"
  },
  "learningObjective": "Recunoașterea triadei vestibular–ocular–proprioceptiv și a decompensării la închiderea ochilor, opus mitului că toate trei sunt mereu indispensabile.",
  "optionRationales": [
   "Cele trei sisteme sunt enumerate explicit.",
   "Închiderea ochilor sau imponderabilitatea la un vestibular patologic reduce orientarea.",
   "Textul precizează că, în cele mai multe circumstanțe, orientarea se poate menține fără toate trei simultan.",
   "Spre deosebire de auditiv, vestibularul poate compensa asimetria.",
   "Propriocepția este unul dintre cele trei piloni, nu superfluă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pretinde simultaneitatea obligatorie a celor trei sisteme și atribuie compensarea asimetrică auditivului, nu vestibulului."
  },
  "textbookExpressions": [
   "sistemul vestibular",
   "închiderea ochilor"
  ]
 },
 {
  "id": "orl-adv-063",
  "topicId": "orl",
  "type": "CS",
  "stem": "Vertijul de asimetrie vestibulară se deosebește de hipoacuzie prin faptul că:",
  "options": [
   "Sistemul vestibular, spre deosebire de cel auditiv, poate compensa în timp această asimetrie",
   "Sistemul auditiv compensează rapid, iar vestibularul nu se adaptează",
   "Nistagmusul lipsește, tracturile oculo-vestibulare nefiind antrenate",
   "Vertijul cere mișcare obiectivă a pacientului, fără senzație rotatorie în repaus",
   "Nevrita vestibulară produce asimetrie simetrică binaurală, fără nistagmus"
  ],
  "correct": [
   0
  ],
  "explanation": "Sistemul vestibular, spre deosebire de cel auditiv, poate compensa în timp această asimetrie — Corect: Fraza „spre deosebire de cel auditiv, poate compensa” este explicită.\n\nSistemul auditiv compensează rapid, iar vestibularul nu se adaptează — Incorect: Compensarea este vestibulară, nu auditivă.\n\nNistagmusul lipsește, tracturile oculo-vestibulare nefiind antrenate — Incorect: Asimetria produce nistagmus prin tracturile oculo-vestibulare.\n\nVertijul cere mișcare obiectivă a pacientului, fără senzație rotatorie în repaus — Incorect: Vertijul este senzație rotatorie în lipsa unei mișcări obiective.\n\nNevrita vestibulară produce asimetrie simetrică binaurală, fără nistagmus — Incorect: Nevrita este exemplul de patologie care afectează în special unul dintre cele două sisteme.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 550, Vertijul — Compensare vestibulară versus auditivă (pagini PDF: 223).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    550
   ],
   "pdfPages": [
    223
   ],
   "section": "Vertijul — Compensare vestibulară versus auditivă"
  },
  "learningObjective": "Reținerea capacității unice a vestibulului de a compensa asimetria, spre deosebire de calea auditivă, cu nistagmus din tracturile oculo-vestibulare.",
  "optionRationales": [
   "Fraza „spre deosebire de cel auditiv, poate compensa” este explicită.",
   "Compensarea este vestibulară, nu auditivă.",
   "Asimetria produce nistagmus prin tracturile oculo-vestibulare.",
   "Vertijul este senzație rotatorie în lipsa unei mișcări obiective.",
   "Nevrita este exemplul de patologie care afectează în special unul dintre cele două sisteme."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie compensarea auditivului și neagă nistagmusul, cele două note distinctive ale paragrafului de asimetrie."
  },
  "textbookExpressions": [
   "poate compensa",
   "nevrita vestibulară"
  ]
 },
 {
  "id": "orl-adv-064",
  "topicId": "orl",
  "type": "CM",
  "stem": "Disfuncția nervului facial, în funcție de sediul leziunii, poate asocia:",
  "options": [
   "Pierderea secreției lacrimale",
   "Pierderea reflexului stapedian (contracția mușchiului scăriței)",
   "Pierderea gustului în treimea anterioară a limbii și a secreției nazale sau submandibulare",
   "Sinkinezie, prin reinervări aberante, dacă regenerarea este importantă",
   "Păstrarea intactă a mimicii, leziunea afectând doar cohleea"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Pierderea secreției lacrimale — Corect: Secreția lacrimală este printre manifestările enumerate.\n\nPierderea reflexului stapedian (contracția mușchiului scăriței) — Corect: Reflexul stapedian figurează explicit.\n\nPierderea gustului în treimea anterioară a limbii și a secreției nazale sau submandibulare — Corect: Gustul treimii anterioare și secrețiile nazală/submandibulară sunt citate.\n\nSinkinezie, prin reinervări aberante, dacă regenerarea este importantă — Corect: Reinervările aberante duc la contracții involuntare (sinkinezie).\n\nPăstrarea intactă a mimicii, leziunea afectând doar cohleea — Incorect: Mimica este tocmai teritoriul motor al VII; cohleea nu explică aceste semne.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 551, Nervul facial — Semne distale și sinkinezie (pagini PDF: 224).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    551
   ],
   "pdfPages": [
    224
   ],
   "section": "Nervul facial — Semne distale și sinkinezie"
  },
  "learningObjective": "Lista semnelor topografice (lacrimi, stapedius, gust, salivă) și sinkinezia după regenerare aberantă, opus păstrării mimicii.",
  "optionRationales": [
   "Secreția lacrimală este printre manifestările enumerate.",
   "Reflexul stapedian figurează explicit.",
   "Gustul treimii anterioare și secrețiile nazală/submandibulară sunt citate.",
   "Reinervările aberante duc la contracții involuntare (sinkinezie).",
   "Mimica este tocmai teritoriul motor al VII; cohleea nu explică aceste semne."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă afectarea mimicii și mută leziunea pe cohlee, ignorând harta topografică a figurii 27-5."
  },
  "textbookExpressions": [
   "secreţiei lacrimale",
   "sinkinezie"
  ]
 },
 {
  "id": "orl-adv-065",
  "topicId": "orl",
  "type": "CS",
  "stem": "Pentru examinarea facilă a conductului auditiv extern, pavilionul auricular se tracționează:",
  "options": [
   "Spre superior și posterior",
   "Spre inferior și anterior, ca la sugarul cu otită",
   "Medial, spre tragus, pentru a vizualiza umbo-ul",
   "În jos și înapoi, analog manevrei Dix-Hallpike",
   "Fără tracțiune, speculul mic fiind suficient în orice vârstă"
  ],
  "correct": [
   0
  ],
  "explanation": "Spre superior și posterior — Corect: Textul cere tracțiunea pavilionului spre superior și posterior.\n\nSpre inferior și anterior, ca la sugarul cu otită — Incorect: Inferior și anterior nu este manevra descrisă aici.\n\nMedial, spre tragus, pentru a vizualiza umbo-ul — Incorect: Tragusul nu este direcția de tracțiune.\n\nÎn jos și înapoi, analog manevrei Dix-Hallpike — Incorect: Dix-Hallpike este manevră vestibulară, nu otoscopică.\n\nFără tracțiune, speculul mic fiind suficient în orice vârstă — Incorect: Se folosește cel mai mare specul care poate fi utilizat, cu tracțiune.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 551, Examenul otoscopic — Tracțiunea pavilionului (pagini PDF: 224).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    551
   ],
   "pdfPages": [
    224
   ],
   "section": "Examenul otoscopic — Tracțiunea pavilionului"
  },
  "learningObjective": "Reținerea vectorului superior-posterior la adult, distinct de vectorul infantil inferior-posterior din practica pediatrică generală.",
  "optionRationales": [
   "Textul cere tracțiunea pavilionului spre superior și posterior.",
   "Inferior și anterior nu este manevra descrisă aici.",
   "Tragusul nu este direcția de tracțiune.",
   "Dix-Hallpike este manevră vestibulară, nu otoscopică.",
   "Se folosește cel mai mare specul care poate fi utilizat, cu tracțiune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează vectorul superior-posterior cu cel infantil inferior sau cu o manevră vestibulară."
  },
  "textbookExpressions": [
   "superior şi posterior",
   "specul auricular"
  ]
 },
 {
  "id": "orl-adv-066",
  "topicId": "orl",
  "type": "CM",
  "stem": "Examenul membranei timpanice și al auzului conversațional:",
  "options": [
   "Membrana este în mod obișnuit translucidă; prin ea se pot vizualiza porțiuni ale lanțului osicular",
   "Perforațiile >1 mm sunt, în general, ușor de vizualizat, dar pot fi confundate cu retracții din disfuncție tubară",
   "Vocea conversațională este, de regulă, la aproximativ 55 dB, cu frecvențe între 500–3000 Hz",
   "Perforațiile sub 1 mm sunt patognomonice și nu se confundă cu retracțiile",
   "Auzul conversațional se testează la 90 dB, pragul hipoacuziei profunde"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Membrana este în mod obișnuit translucidă; prin ea se pot vizualiza porțiuni ale lanțului osicular — Corect: Transluciditatea și vizualizarea osciculelor sunt explicite.\n\nPerforațiile >1 mm sunt, în general, ușor de vizualizat, dar pot fi confundate cu retracții din disfuncție tubară — Corect: Pragul >1 mm și confuzia cu retracția de disfuncție tubară sunt enunțate.\n\nVocea conversațională este, de regulă, la aproximativ 55 dB, cu frecvențe între 500–3000 Hz — Corect: 55 dB și banda 500–3000 Hz sunt citate.\n\nPerforațiile sub 1 mm sunt patognomonice și nu se confundă cu retracțiile — Incorect: Confuzia cu retracțiile este tocmai capcana perforațiilor, inclusiv a celor vizibile.\n\nAuzul conversațional se testează la 90 dB, pragul hipoacuziei profunde — Incorect: 90 dB este pragul hipoacuziei profunde audiometrice, nu al vocii conversaționale.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 551, Otoscopia — Transluciditate, perforație, 55 dB (pagini PDF: 224).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    551
   ],
   "pdfPages": [
    224
   ],
   "section": "Otoscopia — Transluciditate, perforație, 55 dB"
  },
  "learningObjective": "Integrarea translucidității, a pragului >1 mm (confuzie cu retracția) și a vocii conversaționale la 55 dB / 500–3000 Hz.",
  "optionRationales": [
   "Transluciditatea și vizualizarea osciculelor sunt explicite.",
   "Pragul >1 mm și confuzia cu retracția de disfuncție tubară sunt enunțate.",
   "55 dB și banda 500–3000 Hz sunt citate.",
   "Confuzia cu retracțiile este tocmai capcana perforațiilor, inclusiv a celor vizibile.",
   "90 dB este pragul hipoacuziei profunde audiometrice, nu al vocii conversaționale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 55 dB conversațional cu 90 dB (hipoacuzie profundă) și neagă confuzia perforație–retracție."
  },
  "textbookExpressions": [
   "55 dB",
   "> 1 mm"
  ]
 },
 {
  "id": "orl-adv-067",
  "topicId": "orl",
  "type": "CS",
  "stem": "În diagrama nervului facial, o leziune în punctul A (distal de ganglionul geniculat, înaintea ramurilor lacrimale deja desprinse) determină:",
  "options": [
   "Pierderea funcției distale, dar funcția lacrimară și secreția salivară a parotidei ar fi păstrate",
   "Pierderea lacrimilor și a salivației parotidiene, cu mimică intactă",
   "Hipoacuzie de transmisie prin fixarea scăriței, ca în otoscleroză",
   "Nistagmus vertical, prin lezarea nucleului vestibular",
   "Ageuzie completă posterioară, nervul IX fiind întrerupt în mastoidă"
  ],
  "correct": [
   0
  ],
  "explanation": "Pierderea funcției distale, dar funcția lacrimară și secreția salivară a parotidei ar fi păstrate — Corect: Legendă: leziunea în A pierde funcția distală, cu păstrarea funcției lacrimale și a secreției salivare a parotidei.\n\nPierderea lacrimilor și a salivației parotidiene, cu mimică intactă — Incorect: Lacrimile și parotida sunt tocmai funcțiile păstrate.\n\nHipoacuzie de transmisie prin fixarea scăriței, ca în otoscleroză — Incorect: Fixarea scăriței este otoscleroză, nu leziune de VII.\n\nNistagmus vertical, prin lezarea nucleului vestibular — Incorect: Nucleul vestibular nu este punctul A al facialului.\n\nAgeuzie completă posterioară, nervul IX fiind întrerupt în mastoidă — Incorect: Gustul anterior (coarda timpanului) poate fi afectat distal; IX nu trece prin mastoidă ca ramură a VII.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 552, Nervul facial — Topografia leziunii (punctul A) (pagini PDF: 225).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    552
   ],
   "pdfPages": [
    225
   ],
   "section": "Nervul facial — Topografia leziunii (punctul A)"
  },
  "learningObjective": "Citirea figurii 27-5: leziunea A pierde funcția distală, dar păstrează lacrimile și salivația parotidiană.",
  "optionRationales": [
   "Legendă: leziunea în A pierde funcția distală, cu păstrarea funcției lacrimale și a secreției salivare a parotidei.",
   "Lacrimile și parotida sunt tocmai funcțiile păstrate.",
   "Fixarea scăriței este otoscleroză, nu leziune de VII.",
   "Nucleul vestibular nu este punctul A al facialului.",
   "Gustul anterior (coarda timpanului) poate fi afectat distal; IX nu trece prin mastoidă ca ramură a VII."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează teritoriile păstrate (lacrimi, parotidă) cu cele pierdute, capcana clasică a topografiei facialului."
  },
  "textbookExpressions": [
   "funcţia lacrimară",
   "secreţia salivară a parotidei"
  ]
 },
 {
  "id": "orl-adv-068",
  "topicId": "orl",
  "type": "CM",
  "stem": "Evaluarea pacientului cu afectare vestibulară, dincolo de nervii cranieni standard, include:",
  "options": [
   "Căutarea nistagmusului spontan sau indus de modificarea poziției",
   "Testul Romberg (ortostatism cu ochii închiși) pentru a elimina influența vizuală",
   "Evaluarea funcțiilor cerebelului (testul index-nas)",
   "Testul Rinne ca primă manevră de echilibru, diapazonul înlocuind Romberg",
   "Închiderea ochilor ameliorează orientarea în patologia vestibulară, deci Romberg este superfluu"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Căutarea nistagmusului spontan sau indus de modificarea poziției — Corect: Nistagmusul spontan sau pozițional este cerut.\n\nTestul Romberg (ortostatism cu ochii închiși) pentru a elimina influența vizuală — Corect: Romberg este definit ca ortostatism cu ochii închiși.\n\nEvaluarea funcțiilor cerebelului (testul index-nas) — Corect: Index-nas este exemplul de probă cerebeloasă.\n\nTestul Rinne ca primă manevră de echilibru, diapazonul înlocuind Romberg — Incorect: Rinne diferențiază hipoacuzia, nu echilibrul.\n\nÎnchiderea ochilor ameliorează orientarea în patologia vestibulară, deci Romberg este superfluu — Incorect: La vestibulopat, închiderea ochilor reduce orientarea, de aceea Romberg este util.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 552, 550, Examen vestibular — Nistagmus, Romberg, cerebel (pagini PDF: 225, 223).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    552,
    550
   ],
   "pdfPages": [
    225,
    223
   ],
   "section": "Examen vestibular — Nistagmus, Romberg, cerebel"
  },
  "learningObjective": "Triada nistagmus pozițional, Romberg (fără vedere) și probe cerebeloase, opus confuziei cu Rinne și opus mitului că ochii închiși ajută vestibulopatul.",
  "optionRationales": [
   "Nistagmusul spontan sau pozițional este cerut.",
   "Romberg este definit ca ortostatism cu ochii închiși.",
   "Index-nas este exemplul de probă cerebeloasă.",
   "Rinne diferențiază hipoacuzia, nu echilibrul.",
   "La vestibulopat, închiderea ochilor reduce orientarea, de aceea Romberg este util."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește Romberg cu Rinne și pretinde că ochii închiși ameliorează vestibulopatul, contrar paginii 550."
  },
  "textbookExpressions": [
   "testul Romberg",
   "index-nas"
  ]
 },
 {
  "id": "orl-adv-069",
  "topicId": "orl",
  "type": "CS",
  "stem": "Pe audiograma tonală, hipoacuzia de transmisie se recunoaște prin:",
  "options": [
   "Valori anormale ale conducerii aeriene și valori normale ale conducerii osoase, cu decalaj aero-osos",
   "Valori anormale egale ale conducerii aeriene și osoase, fără decalaj",
   "Conducere aeriană normală și osoasă prăbușită sub 90 dB",
   "Limita inferioară a auzului normal deplasată la 70 dB",
   "O timpanogramă plată, fără nicio informație audiometrică"
  ],
  "correct": [
   0
  ],
  "explanation": "Valori anormale ale conducerii aeriene și valori normale ale conducerii osoase, cu decalaj aero-osos — Corect: Figura 27-7B: AC anormală, BC normală, decalaj aero-osos.\n\nValori anormale egale ale conducerii aeriene și osoase, fără decalaj — Incorect: AC=BC anormale definește hipoacuzia neurosenzorială.\n\nConducere aeriană normală și osoasă prăbușită sub 90 dB — Incorect: BC prăbușită descrie SNHL, nu transmisia.\n\nLimita inferioară a auzului normal deplasată la 70 dB — Incorect: Limita inferioară a auzului normal este circa 20 dB, nu 70.\n\nO timpanogramă plată, fără nicio informație audiometrică — Incorect: Timpanograma completează, dar nu înlocuiește patternul audiometric al transmisiei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 554, Audiograma — Hipoacuzia de transmisie (decalaj aero-osos) (pagini PDF: 227).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    554
   ],
   "pdfPages": [
    227
   ],
   "section": "Audiograma — Hipoacuzia de transmisie (decalaj aero-osos)"
  },
  "learningObjective": "Identificarea gap-ului aero-osos (AC anormal, BC normal) ca semn al transmisiei, distinct de SNHL (AC=BC anormale) și de mixtă.",
  "optionRationales": [
   "Figura 27-7B: AC anormală, BC normală, decalaj aero-osos.",
   "AC=BC anormale definește hipoacuzia neurosenzorială.",
   "BC prăbușită descrie SNHL, nu transmisia.",
   "Limita inferioară a auzului normal este circa 20 dB, nu 70.",
   "Timpanograma completează, dar nu înlocuiește patternul audiometric al transmisiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează patternurile A–D ale figurii 27-7 (normal, transmisie, SNHL, mixtă)."
  },
  "textbookExpressions": [
   "decalaj aero-osos",
   "Hipoacuzie de transmisie"
  ]
 },
 {
  "id": "orl-adv-070",
  "topicId": "orl",
  "type": "CM",
  "stem": "Hipoacuzia mixtă și testele electrofiziologice:",
  "options": [
   "În hipoacuzia mixtă, valorile anormale ale conducerii aeriene sunt mai scăzute decât valorile anormale ale conducerii osoase",
   "Limita inferioară a auzului normal este de aproximativ 20 dB",
   "Potențialele evocate auditive ale trunchiului cerebral și otoemisiunile acustice evocate nu necesită un răspuns voluntar, fiind utile la nou-născut, comatos sau retard",
   "Hipoacuzia mixtă are AC=BC, ambele normale, analog auzului normal",
   "OAE măsoară răspunsul cortical voluntar la cuvinte, nu sunetele emise de cohlee"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "În hipoacuzia mixtă, valorile anormale ale conducerii aeriene sunt mai scăzute decât valorile anormale ale conducerii osoase — Corect: AC mai scăzută decât BC anormală, cu gap suprapus peste SNHL, definește mixta.\n\nLimita inferioară a auzului normal este de aproximativ 20 dB — Corect: Pragul de circa 20 dB este enunțat.\n\nPotențialele evocate auditive ale trunchiului cerebral și otoemisiunile acustice evocate nu necesită un răspuns voluntar, fiind utile la nou-născut, comatos sau retard — Corect: ABR și OAE sunt descrise ca tehnici fără răspuns voluntar.\n\nHipoacuzia mixtă are AC=BC, ambele normale, analog auzului normal — Incorect: AC=BC normale este auzul normal, nu mixta.\n\nOAE măsoară răspunsul cortical voluntar la cuvinte, nu sunetele emise de cohlee — Incorect: OAE sunt sunete emise de cohlee la stimulare acustică, nu un răspuns cortical verbal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 554, Audiometrie — Mixtă, 20 dB, ABR și OAE (pagini PDF: 227).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    554
   ],
   "pdfPages": [
    227
   ],
   "section": "Audiometrie — Mixtă, 20 dB, ABR și OAE"
  },
  "learningObjective": "Citirea figurii 27-7D (AC mai jos decât BC anormală) plus pragul 20 dB și testele fără răspuns voluntar (ABR, OAE).",
  "optionRationales": [
   "AC mai scăzută decât BC anormală, cu gap suprapus peste SNHL, definește mixta.",
   "Pragul de circa 20 dB este enunțat.",
   "ABR și OAE sunt descrise ca tehnici fără răspuns voluntar.",
   "AC=BC normale este auzul normal, nu mixta.",
   "OAE sunt sunete emise de cohlee la stimulare acustică, nu un răspuns cortical verbal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă mixta cu auzul normal (AC=BC) și transformă OAE într-un test cortical voluntar."
  },
  "textbookExpressions": [
   "20 dB",
   "otoemisiunilor acustice"
  ]
 },
 {
  "id": "orl-adv-071",
  "topicId": "orl",
  "type": "CS",
  "stem": "Timpanometria cu sondă multicanal produce modificări de presiune cuprinse între:",
  "options": [
   "400 mm H2O presiune negativă și 200 mm H2O presiune pozitivă",
   "±50 mm H2O, analog vocii conversaționale de 55 dB",
   "−200 până la +400 mm H2O, valorile fiind inversate",
   "0 mm H2O, presiunea nefiind manipulată în curba C",
   "90 dB SPL, ca prag al hipoacuziei profunde"
  ],
  "correct": [
   0
  ],
  "explanation": "400 mm H2O presiune negativă și 200 mm H2O presiune pozitivă — Corect: Transductorul variază între 400 mm H2O negativă și 200 mm H2O pozitivă.\n\n±50 mm H2O, analog vocii conversaționale de 55 dB — Incorect: 55 dB este vocea conversațională, nu presiunea sondei.\n\n−200 până la +400 mm H2O, valorile fiind inversate — Incorect: Semnele și valorile 400/200 sunt în această ordine, nu inversate.\n\n0 mm H2O, presiunea nefiind manipulată în curba C — Incorect: Curba C cere manipularea membranei spre exterior, deci presiune variată.\n\n90 dB SPL, ca prag al hipoacuziei profunde — Incorect: 90 dB este un prag audiometric, nu o presiune de timpanometrie.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 554, Timpanometria — Intervalul de presiune al sondei (pagini PDF: 227).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    554
   ],
   "pdfPages": [
    227
   ],
   "section": "Timpanometria — Intervalul de presiune al sondei"
  },
  "learningObjective": "Reținerea ferestrei −400 / +200 mm H2O, distinctă de curbele A/B/C de pe pagina următoare și de pragurile audiometrice.",
  "optionRationales": [
   "Transductorul variază între 400 mm H2O negativă și 200 mm H2O pozitivă.",
   "55 dB este vocea conversațională, nu presiunea sondei.",
   "Semnele și valorile 400/200 sunt în această ordine, nu inversate.",
   "Curba C cere manipularea membranei spre exterior, deci presiune variată.",
   "90 dB este un prag audiometric, nu o presiune de timpanometrie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează −400/+200 cu +400/−200 sau le înlocuiește cu praguri audiometrice (55 dB, 90 dB)."
  },
  "textbookExpressions": [
   "400 mm H20",
   "200 mm H20"
  ]
 },
 {
  "id": "orl-adv-072",
  "topicId": "orl",
  "type": "CS",
  "stem": "Secrețiile sinusului maxilar ajung în meatul mijlociu după ce trec prin:",
  "options": [
   "Ostium și infundibul",
   "Meatul inferior, analog drenajului chirurgical clasic",
   "Helicotremă, ca lichidul cohlear al frecvențelor joase",
   "Ductul Stenon, la molarul maxilar 2",
   "Fereastra rotundă, analog undei stapediene"
  ],
  "correct": [
   0
  ],
  "explanation": "Ostium și infundibul — Corect: Figura 27-11: secrețiile maxilarului trec prin ostium și infundibul înainte de meatul mijlociu.\n\nMeatul inferior, analog drenajului chirurgical clasic — Incorect: Meatul inferior nu este calea naturală descrisă aici.\n\nHelicotremă, ca lichidul cohlear al frecvențelor joase — Incorect: Helicotrema este cohleară.\n\nDuctul Stenon, la molarul maxilar 2 — Incorect: Stenon este ductul parotidei.\n\nFereastra rotundă, analog undei stapediene — Incorect: Fereastra rotundă este a urechii interne.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 562, Complexul ostio-meatal — Drenajul maxilarului (pagini PDF: 235).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    562
   ],
   "pdfPages": [
    235
   ],
   "section": "Complexul ostio-meatal — Drenajul maxilarului"
  },
  "learningObjective": "Urmărirea traseului maxilar: ostium → infundibul → meat mijlociu, distinct de meatul inferior și de analogiile cohleare sau salivare.",
  "optionRationales": [
   "Figura 27-11: secrețiile maxilarului trec prin ostium și infundibul înainte de meatul mijlociu.",
   "Meatul inferior nu este calea naturală descrisă aici.",
   "Helicotrema este cohleară.",
   "Stenon este ductul parotidei.",
   "Fereastra rotundă este a urechii interne."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește ostium+infundibul cu meatul inferior sau cu ducte din alte capitole (Stenon, helicotremă)."
  },
  "textbookExpressions": [
   "ostium",
   "infundibul"
  ]
 },
 {
  "id": "orl-adv-073",
  "topicId": "orl",
  "type": "CM",
  "stem": "După etmoidectomia funcțională endoscopică (latura stângă a figurii 27-11):",
  "options": [
   "Procesul uncinat a fost îndepărtat",
   "Celulele etmoidale anterioare au fost deschise",
   "Ostiumul natural maxilar se lasă neatins, drenajul fiind redirecționat prin meatul inferior",
   "Cornetul mijlociu se rezecă de principiu, altfel ostiumul nu poate fi lărgit",
   "Sinusul frontal se drenează prin meatul inferior, nu prin regiunile etmoidale"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Procesul uncinat a fost îndepărtat — Corect: Îndepărtarea procesului uncinat este explicită.\n\nCelulele etmoidale anterioare au fost deschise — Corect: Deschiderea celulelor etmoidale anterioare este citată.\n\nOstiumul natural maxilar se lasă neatins, drenajul fiind redirecționat prin meatul inferior — Incorect: Ostiumul natural maxilar a fost lărgit, nu abandonat în favoarea meatului inferior.\n\nCornetul mijlociu se rezecă de principiu, altfel ostiumul nu poate fi lărgit — Incorect: Cornetul mijlociu (C) este intact pe figură.\n\nSinusul frontal se drenează prin meatul inferior, nu prin regiunile etmoidale — Incorect: Secrețiile frontale trec prin regiunile etmoidale către meatul mijlociu, nu prin meatul inferior.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 562, Chirurgia endoscopică — Complexul ostio-meatal (pagini PDF: 235).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    562
   ],
   "pdfPages": [
    235
   ],
   "section": "Chirurgia endoscopică — Complexul ostio-meatal"
  },
  "learningObjective": "Citirea post-FESS: uncinat scos și etmoid anterior deschis, cu ostiumul maxilar lărgit (nu abandonat) și cornetul mijlociu păstrat.",
  "optionRationales": [
   "Îndepărtarea procesului uncinat este explicită.",
   "Deschiderea celulelor etmoidale anterioare este citată.",
   "Ostiumul natural maxilar a fost lărgit, nu abandonat în favoarea meatului inferior.",
   "Cornetul mijlociu (C) este intact pe figură.",
   "Secrețiile frontale trec prin regiunile etmoidale către meatul mijlociu, nu prin meatul inferior."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Rezecă greșit cornetul mijlociu (păstrat pe figură) și mută drenajul frontal pe meatul inferior."
  },
  "textbookExpressions": [
   "Procesul uncinat",
   "Cometul nazal mijlociu"
  ]
 },
 {
  "id": "orl-adv-074",
  "topicId": "orl",
  "type": "CM",
  "stem": "Deglutiția este împărțită în patru faze. Sunt adevărate:",
  "options": [
   "Faza de preparare mărunțește bolul și îl amestecă cu saliva, sub control care asigură consistența pentru pasajul gastric",
   "Când bolul traversează istmul orofaringian începe faza a treia, involuntară: laringele ascensionează, epiglota dirijează spre sinusurile piriforme, cricofaringianul se relaxează",
   "Faza a patra este peristaltismul esofagian primar către stomac",
   "Faza a treia rămâne voluntară, limba împingând bolul după ce a trecut de istm",
   "Sfincterul esofagian superior se contractă în faza a treia, blocând lumenul pentru a proteja de aspirație"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Faza de preparare mărunțește bolul și îl amestecă cu saliva, sub control care asigură consistența pentru pasajul gastric — Corect: Prepararea (mărunțire, salivă, consistență) este faza întâi.\n\nCând bolul traversează istmul orofaringian începe faza a treia, involuntară: laringele ascensionează, epiglota dirijează spre sinusurile piriforme, cricofaringianul se relaxează — Corect: Trecerea istmului declanșează faza involuntară cu ascensionarea laringelui, epiglotă-jgheab și relaxarea cricofaringianului.\n\nFaza a patra este peristaltismul esofagian primar către stomac — Corect: Peristaltismul primar esofagian este faza a patra.\n\nFaza a treia rămâne voluntară, limba împingând bolul după ce a trecut de istm — Incorect: După istm controlul este involuntar, nu voluntar.\n\nSfincterul esofagian superior se contractă în faza a treia, blocând lumenul pentru a proteja de aspirație — Incorect: Cricofaringianul se relaxează pentru a deschide lumenul, nu se contractă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 567, Deglutiția — Cele patru faze (pagini PDF: 240).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    567
   ],
   "pdfPages": [
    240
   ],
   "section": "Deglutiția — Cele patru faze"
  },
  "learningObjective": "Separarea preparării, a declanșării involuntare la istmul orofaringian și a peristaltismului esofagian de mitul voluntarității tardive.",
  "optionRationales": [
   "Prepararea (mărunțire, salivă, consistență) este faza întâi.",
   "Trecerea istmului declanșează faza involuntară cu ascensionarea laringelui, epiglotă-jgheab și relaxarea cricofaringianului.",
   "Peristaltismul primar esofagian este faza a patra.",
   "După istm controlul este involuntar, nu voluntar.",
   "Cricofaringianul se relaxează pentru a deschide lumenul, nu se contractă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează faza a treia voluntară și contractă cricofaringianul, inversând deschiderea sfincterului."
  },
  "textbookExpressions": [
   "istmul orofaringian",
   "cricofaringian"
  ]
 },
 {
  "id": "orl-adv-075",
  "topicId": "orl",
  "type": "CS",
  "stem": "Odinofagia cu durată de mai puțin de o săptămână orientează spre:",
  "options": [
   "Infecție, mai ales dacă asociază febră și stare generală alterată",
   "Neoplazie, durerea referită în ureche fiind rară în tumori",
   "Disfuncție de trompă, analog otitei seroase de 3 luni",
   "Papilom scuamos laringian al adultului, leziune puțin agresivă",
   "Hemangiom subglotic în regresia de la 4 ani"
  ],
  "correct": [
   0
  ],
  "explanation": "Infecție, mai ales dacă asociază febră și stare generală alterată — Corect: Textul atribuie infecțiilor odinofagia sub o săptămână; febra și alterarea stării orientează tot acolo.\n\nNeoplazie, durerea referită în ureche fiind rară în tumori — Incorect: Neoplaziile dau simptome îndelungate, adesea cu durere referită în ureche.\n\nDisfuncție de trompă, analog otitei seroase de 3 luni — Incorect: Cele 3 luni țin de otita seroasă, nu de odinofagie.\n\nPapilom scuamos laringian al adultului, leziune puțin agresivă — Incorect: Papilomul adultului este o tumoră laringiană, nu patternul de odinofagie scurtă.\n\nHemangiom subglotic în regresia de la 4 ani — Incorect: Hemangiomul subglotic produce stridor, nu odinofagia de o săptămână.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 567, Odinofagia — Infecție versus neoplazie (pagini PDF: 240).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    567
   ],
   "pdfPages": [
    240
   ],
   "section": "Odinofagia — Infecție versus neoplazie"
  },
  "learningObjective": "Fereastra sub o săptămână plus febra = infecție, opus simptomelor îndelungate cu otalgie referită și scădere ponderală din malignitate.",
  "optionRationales": [
   "Textul atribuie infecțiilor odinofagia sub o săptămână; febra și alterarea stării orientează tot acolo.",
   "Neoplaziile dau simptome îndelungate, adesea cu durere referită în ureche.",
   "Cele 3 luni țin de otita seroasă, nu de odinofagie.",
   "Papilomul adultului este o tumoră laringiană, nu patternul de odinofagie scurtă.",
   "Hemangiomul subglotic produce stridor, nu odinofagia de o săptămână."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie fereastra scurtă neoplaziei (care este cea îndelungată, cu otalgie referită)."
  },
  "textbookExpressions": [
   "mai puţin de o săptămână",
   "pierderea în"
  ]
 },
 {
  "id": "orl-adv-076",
  "topicId": "orl",
  "type": "CM",
  "stem": "Sforăitul și tulburările de somn:",
  "options": [
   "Pacienții se pot prezenta cu oboseală cronică, somnolență diurnă sau insuficiență cardiacă dreaptă",
   "Sforăitul este mai frecvent odată cu vârsta și nu este în mod necesar patologic la adult",
   "Orice obstrucție semnificativă este exacerbată în somn, când tonusul de repaus al căii aeriene superioare este redus",
   "Sforăitul adultului este constant o apnee, fără a necesita anamneza opririlor respiratorii",
   "Tonusul căii aeriene crește în somn, deci obstrucția se ameliorează nocturn"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Pacienții se pot prezenta cu oboseală cronică, somnolență diurnă sau insuficiență cardiacă dreaptă — Corect: Triada oboseală–somnolență–cord pulmonar este enumerată.\n\nSforăitul este mai frecvent odată cu vârsta și nu este în mod necesar patologic la adult — Corect: Sforăitul crește cu vârsta și nu este necesar patologic.\n\nOrice obstrucție semnificativă este exacerbată în somn, când tonusul de repaus al căii aeriene superioare este redus — Corect: Exacerbarea prin tonus redus în somn este explicită.\n\nSforăitul adultului este constant o apnee, fără a necesita anamneza opririlor respiratorii — Incorect: Clinicianul trebuie să caute istoricul de apnee; sforăitul nu echivalează apneea.\n\nTonusul căii aeriene crește în somn, deci obstrucția se ameliorează nocturn — Incorect: Tonusul scade, nu crește, în somn.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 567, Somnul — Sforăit, apnee, tonusul căii aeriene (pagini PDF: 240).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    567
   ],
   "pdfPages": [
    240
   ],
   "section": "Somnul — Sforăit, apnee, tonusul căii aeriene"
  },
  "learningObjective": "Separarea sforăitului (nu neapărat patologic) de apneea care trebuie căutată și de exacerbarea obstrucției prin scăderea tonusului nocturn.",
  "optionRationales": [
   "Triada oboseală–somnolență–cord pulmonar este enumerată.",
   "Sforăitul crește cu vârsta și nu este necesar patologic.",
   "Exacerbarea prin tonus redus în somn este explicită.",
   "Clinicianul trebuie să caute istoricul de apnee; sforăitul nu echivalează apneea.",
   "Tonusul scade, nu crește, în somn."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Echivalează sforăitul cu apneea și inversează tonusul nocturn (scade, deci obstrucția se agravează)."
  },
  "textbookExpressions": [
   "Sforăitul",
   "tonusul de repaus"
  ]
 },
 {
  "id": "orl-adv-077",
  "topicId": "orl",
  "type": "CM",
  "stem": "Un pacient cu disfagie cronică, otalgie referită și scădere ponderală pe luni de zile. Sunt adevărate:",
  "options": [
   "Acest pattern ridică suspiciunea unei malignități și impune inspecția completă, inclusiv palparea digitală a cavității orale și orofaringelui",
   "Palparea este justificată deoarece multe leziuni sunt greu de vizualizat, dar indurate sau neregulate la palpare",
   "Dizartria rezultă din disfuncția anatomică sau neurologică a limbii, palatului și buzelor, care modelează sunetele laringelui",
   "Odinofagia scurtă, sub o săptămână, cu febră, este echivalentul acestui tablou neoplazic",
   "Absența unei mase vizibile exclude leziunea, palparea fiind superfluă dacă endoscopia este normală"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Acest pattern ridică suspiciunea unei malignități și impune inspecția completă, inclusiv palparea digitală a cavității orale și orofaringelui — Corect: Simptomele îndelungate, otalgia referită și scăderea ponderală orientează spre malignitate; palparea completează inspecția.\n\nPalparea este justificată deoarece multe leziuni sunt greu de vizualizat, dar indurate sau neregulate la palpare — Corect: Indurația oculta vizual este motivul palparii.\n\nDizartria rezultă din disfuncția anatomică sau neurologică a limbii, palatului și buzelor, care modelează sunetele laringelui — Corect: Limba, palatul și buzele ca rezonatori ai vocii laringiene sunt enunțate.\n\nOdinofagia scurtă, sub o săptămână, cu febră, este echivalentul acestui tablou neoplazic — Incorect: Fereastra scurtă febrilă este infecțioasă, nu neoplazică.\n\nAbsența unei mase vizibile exclude leziunea, palparea fiind superfluă dacă endoscopia este normală — Incorect: Textul subliniază că leziunile pot fi impalpabil-vizibile invers: palpabile fără a fi văzute.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 567, Cavitatea orală — Palpare, dizartrie, red-flag neoplazic (pagini PDF: 240).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    567
   ],
   "pdfPages": [
    240
   ],
   "section": "Cavitatea orală — Palpare, dizartrie, red-flag neoplazic"
  },
  "learningObjective": "Cuplarea red-flag-urilor de malignitate cu palparea leziunilor oculte și cu dizartria de rezonatori, opus odinofagiei infecțioase scurte.",
  "optionRationales": [
   "Simptomele îndelungate, otalgia referită și scăderea ponderală orientează spre malignitate; palparea completează inspecția.",
   "Indurația oculta vizual este motivul palparii.",
   "Limba, palatul și buzele ca rezonatori ai vocii laringiene sunt enunțate.",
   "Fereastra scurtă febrilă este infecțioasă, nu neoplazică.",
   "Textul subliniază că leziunile pot fi impalpabil-vizibile invers: palpabile fără a fi văzute."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Echivalează tabloul de luni de zile cu infecția de o săptămână și neagă palparea când vizualul este curat."
  },
  "textbookExpressions": [
   "Palparea digitală",
   "dizartria"
  ]
 },
 {
  "id": "orl-adv-078",
  "topicId": "orl",
  "type": "CS",
  "stem": "Laringele unui pacient cu disfonie care nu se remite timp de o lună:",
  "options": [
   "Trebuie inspectat cu atenție",
   "Poate fi ignorat dacă vocea este doar „stinsă”, leziunile de deasupra corzilor fiind benigne",
   "Se evaluează doar după 6–12 luni, analog ferestrei de medializare a corzii paralizate",
   "Nu necesită laringoscopie dacă tusea cronică este atribuită unui IECA",
   "Se tratează empiric cu β-blocant, ca hemangiomul subglotic"
  ],
  "correct": [
   0
  ],
  "explanation": "Trebuie inspectat cu atenție — Corect: Fraza „care nu se remite timp de o lună, trebuie inspectat cu atenție” este explicită.\n\nPoate fi ignorat dacă vocea este doar „stinsă”, leziunile de deasupra corzilor fiind benigne — Incorect: Vocea stinsă orientează spre leziuni deasupra corzilor adevărate, nu scutește inspecția.\n\nSe evaluează doar după 6–12 luni, analog ferestrei de medializare a corzii paralizate — Incorect: 6–12 luni este fereastra paraliziei de coardă, nu a disfoniei neremise.\n\nNu necesită laringoscopie dacă tusea cronică este atribuită unui IECA — Incorect: IECA poate cauza tuse, dar nu anulează inspecția unei disfonii de o lună.\n\nSe tratează empiric cu β-blocant, ca hemangiomul subglotic — Incorect: β-blocantul ține de hemangiomul subglotic pediatric, nu de disfonia adultului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 571, Disfonia — Fereastra de o lună (pagini PDF: 244).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    571
   ],
   "pdfPages": [
    244
   ],
   "section": "Disfonia — Fereastra de o lună"
  },
  "learningObjective": "Reținerea pragului de o lună de disfonie neremisă ca indicație de inspecție laringiană atentă.",
  "optionRationales": [
   "Fraza „care nu se remite timp de o lună, trebuie inspectat cu atenție” este explicită.",
   "Vocea stinsă orientează spre leziuni deasupra corzilor adevărate, nu scutește inspecția.",
   "6–12 luni este fereastra paraliziei de coardă, nu a disfoniei neremise.",
   "IECA poate cauza tuse, dar nu anulează inspecția unei disfonii de o lună.",
   "β-blocantul ține de hemangiomul subglotic pediatric, nu de disfonia adultului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește fereastra de o lună cu 6–12 luni (paralizie) sau cu tratamente din alte entități (IECA, β-blocant)."
  },
  "textbookExpressions": [
   "o lună",
   "Disfonia"
  ]
 },
 {
  "id": "orl-adv-079",
  "topicId": "orl",
  "type": "CM",
  "stem": "Caracterul vocii orientează sediul disfoniei astfel:",
  "options": [
   "O voce șuierătoare indică adducție incompletă (denervare, tulburare funcțională sau presbilaringită)",
   "Vocea încordată sau „sugrumată” implică spasticitatea mișcării",
   "Vocea stinsă apare la leziuni tumorale sau inflamatorii deasupra corzilor vocale adevărate",
   "Vocea aspră indică o patologie a corzii vocale",
   "Vocea șuierătoare este patognomonică pentru o tumoră deasupra corzilor, iar cea aspră pentru presbilaringită"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "O voce șuierătoare indică adducție incompletă (denervare, tulburare funcțională sau presbilaringită) — Corect: Șuierătoarea și cauzele de adducție incompletă, inclusiv presbilaringita, sunt explicite.\n\nVocea încordată sau „sugrumată” implică spasticitatea mișcării — Corect: Sugrumarea = spasticitate este enunțată.\n\nVocea stinsă apare la leziuni tumorale sau inflamatorii deasupra corzilor vocale adevărate — Corect: Vocea stinsă este plasată deasupra corzilor adevărate.\n\nVocea aspră indică o patologie a corzii vocale — Corect: Asprimea = patologie de coardă.\n\nVocea șuierătoare este patognomonică pentru o tumoră deasupra corzilor, iar cea aspră pentru presbilaringită — Incorect: Opțiunea inversează șuierătoarea cu stinsa și asprimea cu presbilaringita.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 571, Disfonia — Șuierătoare, sugrumată, stinsă, aspră (pagini PDF: 244).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    571
   ],
   "pdfPages": [
    244
   ],
   "section": "Disfonia — Șuierătoare, sugrumată, stinsă, aspră"
  },
  "learningObjective": "Cele patru timbre (șuier/adducție incompletă, sugrumat/spastic, stins/supraglotic, aspru/coardă) versus permutarea lor.",
  "optionRationales": [
   "Șuierătoarea și cauzele de adducție incompletă, inclusiv presbilaringita, sunt explicite.",
   "Sugrumarea = spasticitate este enunțată.",
   "Vocea stinsă este plasată deasupra corzilor adevărate.",
   "Asprimea = patologie de coardă.",
   "Opțiunea inversează șuierătoarea cu stinsa și asprimea cu presbilaringita."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează cele patru timbre între etajele adducție, spasticitate, supraglotă și coardă."
  },
  "textbookExpressions": [
   "presbilaringită",
   "Vocea stinsă"
  ]
 },
 {
  "id": "orl-adv-080",
  "topicId": "orl",
  "type": "CM",
  "stem": "Tusea cronică, în semiologia laringiană:",
  "options": [
   "Tusea imediat după masă este, de obicei, consecința aspirației, mai ales la lichide",
   "Picătura postnazală (sinuzită, rinită alergică sau vasomotorie) și refluxul gastro-esofagian irită laringele",
   "Inhibitorii enzimei de conversie pot induce un edem ușor al corzii vocale, cu tuse",
   "Tusea postprandială este patognomonică pentru presbilaringită, fără rol de aspirație",
   "IECA protejează coarda de edem, tusea fiind atunci doar de cauză pulmonară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tusea imediat după masă este, de obicei, consecința aspirației, mai ales la lichide — Corect: Tusea imediat după masă, mai ales la lichide, este legată de aspirație.\n\nPicătura postnazală (sinuzită, rinită alergică sau vasomotorie) și refluxul gastro-esofagian irită laringele — Corect: Picătura postnazală și RGE sunt enumerate ca iritanți.\n\nInhibitorii enzimei de conversie pot induce un edem ușor al corzii vocale, cu tuse — Corect: IECA → edem ușor de coardă → tuse este explicit.\n\nTusea postprandială este patognomonică pentru presbilaringită, fără rol de aspirație — Incorect: Presbilaringita produce voce șuierătoare prin atrofie, nu tuse postprandială.\n\nIECA protejează coarda de edem, tusea fiind atunci doar de cauză pulmonară — Incorect: IECA este o cauză laringiană de tuse, nu un protector.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 571, Tusea cronică — Aspirație, RGE, IECA (pagini PDF: 244).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    571
   ],
   "pdfPages": [
    244
   ],
   "section": "Tusea cronică — Aspirație, RGE, IECA"
  },
  "learningObjective": "Ierarhia aspirație postprandială, picătură/RGE și edemul de IECA, opus atribuirii tusei postprandiale presbilaringitei.",
  "optionRationales": [
   "Tusea imediat după masă, mai ales la lichide, este legată de aspirație.",
   "Picătura postnazală și RGE sunt enumerate ca iritanți.",
   "IECA → edem ușor de coardă → tuse este explicit.",
   "Presbilaringita produce voce șuierătoare prin atrofie, nu tuse postprandială.",
   "IECA este o cauză laringiană de tuse, nu un protector."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută tusea postprandială pe presbilaringită și neagă edemul de IECA."
  },
  "textbookExpressions": [
   "inhibitorii enzimei de conversie",
   "imediat după masă"
  ]
 },
 {
  "id": "orl-adv-081",
  "topicId": "orl",
  "type": "CM",
  "stem": "Cele patru straturi fasciale cervicale:",
  "options": [
   "Fascia cervicală superficială, imediat profund de tegument, înglobează platisma",
   "Stratul superficial al fasciei cervicale profunde se dedublează și înglobează sternocleidomastoidianul și mușchii prelaringieni",
   "Partea mijlocie (viscerală) învelește faringele, tiroida, laringele și traheea; porțiunea laterală dă teaca carotidă",
   "Foița cea mai profundă este fascia prevertebrală, care învelește musculatura paraspinoasă",
   "Fascia prevertebrală este cea mai superficială, înglobând platisma, iar teaca carotidă derivă din fascia superficială"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Fascia cervicală superficială, imediat profund de tegument, înglobează platisma — Corect: Platisma în fascia cervicală superficială este explicită.\n\nStratul superficial al fasciei cervicale profunde se dedublează și înglobează sternocleidomastoidianul și mușchii prelaringieni — Corect: Dedublarea pe SCM și prelaringieni este citată.\n\nPartea mijlocie (viscerală) învelește faringele, tiroida, laringele și traheea; porțiunea laterală dă teaca carotidă — Corect: Conținutul visceral și originea tecii carotide sunt enunțate.\n\nFoița cea mai profundă este fascia prevertebrală, care învelește musculatura paraspinoasă — Corect: Prevertebrala ca foiță cea mai profundă este descrisă.\n\nFascia prevertebrală este cea mai superficială, înglobând platisma, iar teaca carotidă derivă din fascia superficială — Incorect: Opțiunea inversează complet ordinea superficial/profund.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 577, Gâtul — Cele patru foițe fasciale (pagini PDF: 250).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    577
   ],
   "pdfPages": [
    250
   ],
   "section": "Gâtul — Cele patru foițe fasciale"
  },
  "learningObjective": "Ordinea superficială (platisma) → profundă superficială (SCM) → viscerală (teacă carotidă) → prevertebrală, opus inversării platismei cu prevertebrala.",
  "optionRationales": [
   "Platisma în fascia cervicală superficială este explicită.",
   "Dedublarea pe SCM și prelaringieni este citată.",
   "Conținutul visceral și originea tecii carotide sunt enunțate.",
   "Prevertebrala ca foiță cea mai profundă este descrisă.",
   "Opțiunea inversează complet ordinea superficial/profund."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește platisma (superficială) cu prevertebrala (profundă) și mută teaca carotidă pe fascia superficială."
  },
  "textbookExpressions": [
   "fascia prevertebrală",
   "tecii carotice"
  ]
 },
 {
  "id": "orl-adv-082",
  "topicId": "orl",
  "type": "CS",
  "stem": "Ductul Stenon al parotidei se deschide în cavitatea orală:",
  "options": [
   "Printr-o terminație ampulară la nivelul molarului maxilar 2",
   "La frenul lingual, analog ductului Wharton",
   "Prin multiple ducte pe fața superioară a glandei, ca sublinguala",
   "În meatul mijlociu, după infundibulul maxilar",
   "La vârful apofizei mastoide, unde iese nervul facial"
  ],
  "correct": [
   0
  ],
  "explanation": "Printr-o terminație ampulară la nivelul molarului maxilar 2 — Corect: Traiectul: 1 cm sub arcada zigomatică, traversează maseterul, ampula la molarul maxilar 2.\n\nLa frenul lingual, analog ductului Wharton — Incorect: Frenul lingual este deschiderea Wharton.\n\nPrin multiple ducte pe fața superioară a glandei, ca sublinguala — Incorect: Ductele multiple superioare sunt ale sublingualei.\n\nÎn meatul mijlociu, după infundibulul maxilar — Incorect: Meatul mijlociu este rinosinusal.\n\nLa vârful apofizei mastoide, unde iese nervul facial — Incorect: Orificiul stilomastoidian este ieșirea nervului facial, nu a ductului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 577, Glanda parotidă — Ductul Stenon (pagini PDF: 250).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    577
   ],
   "pdfPages": [
    250
   ],
   "section": "Glanda parotidă — Ductul Stenon"
  },
  "learningObjective": "Localizarea ampulei Stenon la molarul maxilar 2, distinctă de Wharton (fren lingual) și de orificiul stilomastoidian al VII.",
  "optionRationales": [
   "Traiectul: 1 cm sub arcada zigomatică, traversează maseterul, ampula la molarul maxilar 2.",
   "Frenul lingual este deschiderea Wharton.",
   "Ductele multiple superioare sunt ale sublingualei.",
   "Meatul mijlociu este rinosinusal.",
   "Orificiul stilomastoidian este ieșirea nervului facial, nu a ductului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă ampula Stenon (molar 2) cu Wharton (fren) sau cu orificiul stilomastoidian."
  },
  "textbookExpressions": [
   "Stenon",
   "molarului maxilar 2"
  ]
 },
 {
  "id": "orl-adv-083",
  "topicId": "orl",
  "type": "CM",
  "stem": "Producția zilnică de salivă și enzima sa principală:",
  "options": [
   "Glandele salivare produc aproximativ 500 mL pe zi, din care 90% de către parotide și submandibulare",
   "Enzima digestivă principală este α-amilaza, cu rol în descompunerea amidonului",
   "Saliva este lipsită de rol de clearance, fiind doar un lubrifiant inert, fără enzimă digestivă",
   "Productia zilnică este de 50 mL, 90% provenind din glandele minore",
   "Enzima principală este pepsina gastrică, saliva fiind lipsită de amilază"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Glandele salivare produc aproximativ 500 mL pe zi, din care 90% de către parotide și submandibulare — Corect: 500 mL/zi și 90% parotide+submandibulare sunt explicite.\n\nEnzima digestivă principală este α-amilaza, cu rol în descompunerea amidonului — Corect: α-amilaza ca enzimă principală este citată.\n\nSaliva este lipsită de rol de clearance, fiind doar un lubrifiant inert, fără enzimă digestivă — Incorect: Textul atribuie salivei lubrifiere, clearance bacterian, igienă orală și α-amilază.\n\nProductia zilnică este de 50 mL, 90% provenind din glandele minore — Incorect: 50 mL și predominanța glandelor minore contrazic textul.\n\nEnzima principală este pepsina gastrică, saliva fiind lipsită de amilază — Incorect: Pepsina nu este enzima salivară descrisă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 577, Fiziologia salivei — 500 mL, 90%, α-amilază (pagini PDF: 250).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    577
   ],
   "pdfPages": [
    250
   ],
   "section": "Fiziologia salivei — 500 mL, 90%, α-amilază"
  },
  "learningObjective": "Reținerea volumului 500 mL, a cotei de 90% parotid+submandibular și a α-amilazei, opus glandelor minore sau pepsinei.",
  "optionRationales": [
   "500 mL/zi și 90% parotide+submandibulare sunt explicite.",
   "α-amilaza ca enzimă principală este citată.",
   "Textul atribuie salivei lubrifiere, clearance bacterian, igienă orală și α-amilază.",
   "50 mL și predominanța glandelor minore contrazic textul.",
   "Pepsina nu este enzima salivară descrisă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 500 mL/90% cu 50 mL/glande minore și înlocuiește α-amilaza cu pepsina."
  },
  "textbookExpressions": [
   "500 mL",
   "amilaza"
  ]
 },
 {
  "id": "orl-adv-084",
  "topicId": "orl",
  "type": "CM",
  "stem": "Glanda submandibulară și ductul Wharton:",
  "options": [
   "Glanda stă într-o concavitate inferior de mandibulă, între pântecele anterior și posterior ale digastricului",
   "Ductul Wharton trece între milohioidian și hioglos și se deschide adiacent frenului lingual",
   "Inervația secretomotorie parasimpatică vine din nucleul salivator superior, via nervi linguali și coarda timpanului",
   "Inervația parasimpatică vine din nucleul salivator inferior (IX), analog parotidei",
   "Ductul se deschide la molarul maxilar 2, identic Stenon"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Glanda stă într-o concavitate inferior de mandibulă, între pântecele anterior și posterior ale digastricului — Corect: Raportul cu digastricul este explicit.\n\nDuctul Wharton trece între milohioidian și hioglos și se deschide adiacent frenului lingual — Corect: Traiectul între milohioidian și hioglos și ampula de lângă fren sunt descrise.\n\nInervația secretomotorie parasimpatică vine din nucleul salivator superior, via nervi linguali și coarda timpanului — Corect: Nucleul salivator superior, lingualul și coarda timpanului sunt citați.\n\nInervația parasimpatică vine din nucleul salivator inferior (IX), analog parotidei — Incorect: Nucleul inferior și IX inervează parotida, nu submandibulara.\n\nDuctul se deschide la molarul maxilar 2, identic Stenon — Incorect: Molarul 2 este ampula Stenon.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 577, Glanda submandibulară — Wharton și nucleul salivator superior (pagini PDF: 250).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    577
   ],
   "pdfPages": [
    250
   ],
   "section": "Glanda submandibulară — Wharton și nucleul salivator superior"
  },
  "learningObjective": "Contrastarea nucleului salivator superior (submandibulară) cu inferiorul (parotidă/IX) și a deschiderii la fren versus molarul 2.",
  "optionRationales": [
   "Raportul cu digastricul este explicit.",
   "Traiectul între milohioidian și hioglos și ampula de lângă fren sunt descrise.",
   "Nucleul salivator superior, lingualul și coarda timpanului sunt citați.",
   "Nucleul inferior și IX inervează parotida, nu submandibulara.",
   "Molarul 2 este ampula Stenon."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă nucleul salivator superior cu inferiorul (parotidă) și ampula de la fren cu molarul 2."
  },
  "textbookExpressions": [
   "Wharton",
   "nucleul salivator superior"
  ]
 },
 {
  "id": "orl-adv-085",
  "topicId": "orl",
  "type": "CM",
  "stem": "La un adult de peste 40 de ani, o masă cervicală nedureroasă:",
  "options": [
   "Va fi tratată ca un neoplasm până la proba contrarie",
   "Carcinomul scuamos metastazează frecvent în ganglionii care drenează aero-digestivul superior; în era HPV, metastazele chistice pot fi confundate cu chisturi branhiale",
   "Dacă nu se identifică primarul, puncția-biopsie cu ac subțire stabilește adesea diagnosticul; biopsia excizională deschisă este ultima soluție",
   "Biopsia incizională este preferată, pentru a evita diseminarea",
   "Masele supraclaviculare exclud metastazele infraclaviculare (stomac, plămân)"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Va fi tratată ca un neoplasm până la proba contrarie — Corect: Fraza „până la proba contrarie” este explicită.\n\nCarcinomul scuamos metastazează frecvent în ganglionii care drenează aero-digestivul superior; în era HPV, metastazele chistice pot fi confundate cu chisturi branhiale — Corect: Metastazele scuamoase, HPV și confuzia cu chistul branhial sunt enunțate.\n\nDacă nu se identifică primarul, puncția-biopsie cu ac subțire stabilește adesea diagnosticul; biopsia excizională deschisă este ultima soluție — Corect: FNA ca diagnostic și excizia deschisă ca ultimă soluție sunt descrise.\n\nBiopsia incizională este preferată, pentru a evita diseminarea — Incorect: Biopsia incizională se evită din riscul de diseminare.\n\nMasele supraclaviculare exclud metastazele infraclaviculare (stomac, plămân) — Incorect: Metastazele de stomac/plămân apar tocmai în fosele supraclaviculare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 578, Masa cervicală a adultului — Neoplasm, HPV, puncție (pagini PDF: 251).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    578
   ],
   "pdfPages": [
    251
   ],
   "section": "Masa cervicală a adultului — Neoplasm, HPV, puncție"
  },
  "learningObjective": "Regula >40 ani = neoplasm până la proba contrarie, capcana chistului branhial HPV și ierarhia FNA înaintea exciziei deschise, cu evitarea inciziei.",
  "optionRationales": [
   "Fraza „până la proba contrarie” este explicită.",
   "Metastazele scuamoase, HPV și confuzia cu chistul branhial sunt enunțate.",
   "FNA ca diagnostic și excizia deschisă ca ultimă soluție sunt descrise.",
   "Biopsia incizională se evită din riscul de diseminare.",
   "Metastazele de stomac/plămân apar tocmai în fosele supraclaviculare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Promovează biopsia incizională (interzisă pentru diseminare) și neagă fosa supraclaviculară ca sediu infraclavicular."
  },
  "textbookExpressions": [
   "peste 40 ani",
   "HPV-pozitiv"
  ]
 },
 {
  "id": "orl-adv-086",
  "topicId": "orl",
  "type": "CS",
  "stem": "La adolescentul sau adultul tânăr, o formațiune cervicală sub 3 cm, la un pacient compliant:",
  "options": [
   "Poate fi urmărită",
   "Impune laringectomie totală, analog carcinomului scuamos al decadei a 6-a",
   "Se tratează ca neoplasm până la proba contrarie, identic adultului de peste 40 de ani, fără observație",
   "Necesită evidare radicală înaintea oricărei puncții",
   "Este patognomonică pentru fistulă traheo-innominată post-traheotomie"
  ],
  "correct": [
   0
  ],
  "explanation": "Poate fi urmărită — Corect: Textul permite urmărirea unui pacient compliant cu formațiune <3 cm.\n\nImpune laringectomie totală, analog carcinomului scuamos al decadei a 6-a — Incorect: Laringectomia este a cancerului laringian avansat, nu a ganglionului tânărului.\n\nSe tratează ca neoplasm până la proba contrarie, identic adultului de peste 40 de ani, fără observație — Incorect: Regula neoplasmului până la proba contrarie este a adultului >40 de ani.\n\nNecesită evidare radicală înaintea oricărei puncții — Incorect: Puncția-biopsie este pasul pentru leziunile care cresc, suspecte de limfom, nu evidarea oarbă.\n\nEste patognomonică pentru fistulă traheo-innominată post-traheotomie — Incorect: Fistula innominată este o complicație tardivă de traheotomie, nu o masă <3 cm.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 578, Masa cervicală a tânărului — Pragul de 3 cm (pagini PDF: 251).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    578
   ],
   "pdfPages": [
    251
   ],
   "section": "Masa cervicală a tânărului — Pragul de 3 cm"
  },
  "learningObjective": "Contrastarea observației la tânărul cu masă <3 cm față de regula „neoplasm până la proba contrarie” a adultului >40 de ani.",
  "optionRationales": [
   "Textul permite urmărirea unui pacient compliant cu formațiune <3 cm.",
   "Laringectomia este a cancerului laringian avansat, nu a ganglionului tânărului.",
   "Regula neoplasmului până la proba contrarie este a adultului >40 de ani.",
   "Puncția-biopsie este pasul pentru leziunile care cresc, suspecte de limfom, nu evidarea oarbă.",
   "Fistula innominată este o complicație tardivă de traheotomie, nu o masă <3 cm."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Aplică regula adultului >40 de ani tânărului cu masă <3 cm, pentru care textul acceptă urmărirea."
  },
  "textbookExpressions": [
   "<3 cm",
   "adolescent"
  ]
 },
 {
  "id": "orl-adv-087",
  "topicId": "orl",
  "type": "CS",
  "stem": "Când puncțiile-biopsie cu ac fin sunt non-diagnostice și examenul aero-digestiv sub anestezie generală nu descoperă primarul, următorul pas include:",
  "options": [
   "Tonsilectomia ipsilaterală și biopsii ale rinofaringelui și bazei de limbă",
   "Biopsia incizională imediată, înaintea oricărei endoscopii sub anestezie",
   "Observație 2 ani fără imagistică, primarul neputând apărea ulterior",
   "Embolizarea arterei sfenopalatine, ca în epistaxisul posterior",
   "Operația Sistrunk, analog chistului de canal tireoglos"
  ],
  "correct": [
   0
  ],
  "explanation": "Tonsilectomia ipsilaterală și biopsii ale rinofaringelui și bazei de limbă — Corect: Textul enumeră tonsilectomia ipsilaterală și biopsiile de rinofaringe și bază de limbă când FNA repetat eșuează.\n\nBiopsia incizională imediată, înaintea oricărei endoscopii sub anestezie — Incorect: Incizionala se evită și se face doar după acest pachet.\n\nObservație 2 ani fără imagistică, primarul neputând apărea ulterior — Incorect: Primarul se poate manifesta în decurs de 2 ani, deci supravegherea este necesară, nu abandonul imagistic.\n\nEmbolizarea arterei sfenopalatine, ca în epistaxisul posterior — Incorect: Sfenopalatina este vascularizația nazală, nu gestul din CUP.\n\nOperația Sistrunk, analog chistului de canal tireoglos — Incorect: Sistrunk este al chistului tireoglos.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 578, 583, CUP cervical — Tonsilectomie ipsilaterală și biopsii oculte (pagini PDF: 251, 256).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    578,
    583
   ],
   "pdfPages": [
    251,
    256
   ],
   "section": "CUP cervical — Tonsilectomie ipsilaterală și biopsii oculte"
  },
  "learningObjective": "Recunoașterea pachetului de căutare a primarului ocultat (amigdală ipsilaterală, rinofaringe, baza limbii) înaintea biopsiei incizionale.",
  "optionRationales": [
   "Textul enumeră tonsilectomia ipsilaterală și biopsiile de rinofaringe și bază de limbă când FNA repetat eșuează.",
   "Incizionala se evită și se face doar după acest pachet.",
   "Primarul se poate manifesta în decurs de 2 ani, deci supravegherea este necesară, nu abandonul imagistic.",
   "Sfenopalatina este vascularizația nazală, nu gestul din CUP.",
   "Sistrunk este al chistului tireoglos."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Sare direct la biopsia incizională, pe care textul o rezervă după tonsilectomie ipsilaterală și biopsii oculte."
  },
  "textbookExpressions": [
   "tonsilectomia ipsilaterală",
   "bazei de limbă"
  ]
 },
 {
  "id": "orl-adv-088",
  "topicId": "orl",
  "type": "CM",
  "stem": "Otalgia de cauză non-otogenică, conform tabelului 27-2, poate proveni din:",
  "options": [
   "Afecțiuni ale articulației temporo-mandibulare și patologie dentară",
   "Elongația procesului stiloid (sindromul Eagle)",
   "Tumorile de hipofaringe, laringe sau esofag sunt cauze otogenice, nu viscerale reflectate",
   "Otită externă și mastoidită, care sunt cauze otogenice, nu non-otogenice",
   "Fixarea piciorului scăriței, ca în otoscleroză, fără durere reflectată"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Afecțiuni ale articulației temporo-mandibulare și patologie dentară — Corect: ATM și dentarul figurează la durerea oro-facială non-otogenică.\n\nElongația procesului stiloid (sindromul Eagle) — Corect: Sindromul Eagle (stiloid alungit) este enumerat.\n\nTumorile de hipofaringe, laringe sau esofag sunt cauze otogenice, nu viscerale reflectate — Incorect: Tumorile de hipofaringe, laringe, esofag sunt rubrica viscerală non-otogenică, nu otogenică.\n\nOtită externă și mastoidită, care sunt cauze otogenice, nu non-otogenice — Incorect: Otita externă și mastoidita sunt rubrica otogenică.\n\nFixarea piciorului scăriței, ca în otoscleroză, fără durere reflectată — Incorect: Otoscleroza produce hipoacuzie de transmisie, nu otalgia din tabel.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 555, Otalgia — Cauze non-otogenice (Tabelul 27-2) (pagini PDF: 228).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    555
   ],
   "pdfPages": [
    228
   ],
   "section": "Otalgia — Cauze non-otogenice (Tabelul 27-2)"
  },
  "learningObjective": "Separarea ATM/dentar și Eagle de cauzele otogenice (OE, mastoidită) și de viscerul faringo-laringo-esofagian, care este tot non-otogenic.",
  "optionRationales": [
   "ATM și dentarul figurează la durerea oro-facială non-otogenică.",
   "Sindromul Eagle (stiloid alungit) este enumerat.",
   "Tumorile de hipofaringe, laringe, esofag sunt rubrica viscerală non-otogenică, nu otogenică.",
   "Otita externă și mastoidita sunt rubrica otogenică.",
   "Otoscleroza produce hipoacuzie de transmisie, nu otalgia din tabel."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută otita externă/mastoidita (otogenice) în rubrica non-otogenică și adaugă otoscleroza, absentă din tabelul durerii."
  },
  "textbookExpressions": [
   "sindromul Eagle",
   "temporo-mandibulare"
  ]
 },
 {
  "id": "orl-adv-089",
  "topicId": "orl",
  "type": "CS",
  "stem": "Otoreea subțire, apoasă, galben-transparentă, după un traumatism, cu structuri otice aparent normale, trebuie să ridice suspiciunea de:",
  "options": [
   "Fisurǎ de lichid cefalorahidian",
   "Apă de baie cu cerumen, fără nicio altă semnificație post-traumatică",
   "Otoscleroză cu fixarea scăriței",
   "Colesteatom cu masă albicioasă și osteonecroză enzimatică",
   "Glomus tympanicum cu tinitus pulsatil"
  ],
  "correct": [
   0
  ],
  "explanation": "Fisurǎ de lichid cefalorahidian — Corect: Textul cere suspiciunea de fistulă de LCR când a avut loc o traumă.\n\nApă de baie cu cerumen, fără nicio altă semnificație post-traumatică — Incorect: Apa de baie cu cerumen explică același aspect doar în absența traumei.\n\nOtoscleroză cu fixarea scăriței — Incorect: Otoscleroza nu produce otoree apoasă.\n\nColesteatom cu masă albicioasă și osteonecroză enzimatică — Incorect: Colesteatomul se însoțește de infecții cronice și masă albicioasă, nu de lichid transparent post-traumatic.\n\nGlomus tympanicum cu tinitus pulsatil — Incorect: Glomusul dă tinitus pulsatil și masă eritematoasă, nu otoree apoasă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 555, Otoreea — Fistula de LCR post-traumatică (pagini PDF: 228).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    555
   ],
   "pdfPages": [
    228
   ],
   "section": "Otoreea — Fistula de LCR post-traumatică"
  },
  "learningObjective": "Contrastarea secreției apoase post-traumatice (LCR) cu apa de baie (aceeași culoare, dar fără traumă) și cu otoreea mucopurulentă infecțioasă.",
  "optionRationales": [
   "Textul cere suspiciunea de fistulă de LCR când a avut loc o traumă.",
   "Apa de baie cu cerumen explică același aspect doar în absența traumei.",
   "Otoscleroza nu produce otoree apoasă.",
   "Colesteatomul se însoțește de infecții cronice și masă albicioasă, nu de lichid transparent post-traumatic.",
   "Glomusul dă tinitus pulsatil și masă eritematoasă, nu otoree apoasă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează lichidul apos post-traumatic ca cerumen de baie, ignorând alerta de LCR din același paragraf."
  },
  "textbookExpressions": [
   "lichid cefalo-rahidian",
   "traumă"
  ]
 },
 {
  "id": "orl-adv-090",
  "topicId": "orl",
  "type": "CM",
  "stem": "Factorii de risc ai otitei medii cu efuziune, conform tabelului 27-7, includ:",
  "options": [
   "Frecventarea creșei (îngrijire în colectivitate)",
   "Aparține sexului masculin",
   "Hrănirea cu biberonul și fumatul în casă",
   "Număr crescut de frați în casă și infecție recentă de tract respirator superior",
   "Alăptarea la sân ca unică alimentație, care anulează riscul de efuziune"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Frecventarea creșei (îngrijire în colectivitate) — Corect: Creșa este primul item al tabelului.\n\nAparține sexului masculin — Corect: Sexul masculin este itemul 2.\n\nHrănirea cu biberonul și fumatul în casă — Corect: Biberonul și fumatul în casă sunt itemii 4 și 5.\n\nNumăr crescut de frați în casă și infecție recentă de tract respirator superior — Corect: Frații și IVRS recentă completează tabelul.\n\nAlăptarea la sân ca unică alimentație, care anulează riscul de efuziune — Incorect: Alăptarea nu figurează ca factor de risc; biberonul este riscul citat.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 559, Otita seroasă — Factori de risc (Tabelul 27-7) (pagini PDF: 232).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    559
   ],
   "pdfPages": [
    232
   ],
   "section": "Otita seroasă — Factori de risc (Tabelul 27-7)"
  },
  "learningObjective": "Cele șase elemente ale tabelului (creșă, băiat, IVRS recentă, biberon, fumat casnic, frați), opus alăptării ca factor protector inventat.",
  "optionRationales": [
   "Creșa este primul item al tabelului.",
   "Sexul masculin este itemul 2.",
   "Biberonul și fumatul în casă sunt itemii 4 și 5.",
   "Frații și IVRS recentă completează tabelul.",
   "Alăptarea nu figurează ca factor de risc; biberonul este riscul citat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește biberonul (factor de risc) cu alăptarea ca „risc”, deși tabelul listează hrănirea cu biberonul."
  },
  "textbookExpressions": [
   "Hrănire cu biberonul",
   "Fumatul în casă"
  ]
 },
 {
  "id": "orl-adv-091",
  "topicId": "orl",
  "type": "CS",
  "stem": "Cel mai important efect secundar al paraliziei faciale, prin inabilitatea de a închide pleoapa, este:",
  "options": [
   "Keratita ipsilaterală de expunere, care netratată poate cauza leziuni corneene și orbire",
   "Hipoacuzia de transmisie prin fixarea scăriței",
   "Tinitusul pulsatil de glomus",
   "Atrezia coanală bilaterală a nou-născutului",
   "Sialadenita acută a Wharton-ului"
  ],
  "correct": [
   0
  ],
  "explanation": "Keratita ipsilaterală de expunere, care netratată poate cauza leziuni corneene și orbire — Corect: Textul numește keratita ipsilaterală de expunere cel mai important efect secundar, cu risc de orbire.\n\nHipoacuzia de transmisie prin fixarea scăriței — Incorect: Fixarea scăriței este otoscleroză.\n\nTinitusul pulsatil de glomus — Incorect: Glomusul produce tinitus pulsatil.\n\nAtrezia coanală bilaterală a nou-născutului — Incorect: Atrezia coanală este o urgență neonatală nazală.\n\nSialadenita acută a Wharton-ului — Incorect: Sialadenita este o infecție salivară, nu o consecință a lagoftalmiei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 560, Paralizia facială — Keratita de expunere (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    560
   ],
   "pdfPages": [
    233
   ],
   "section": "Paralizia facială — Keratita de expunere"
  },
  "learningObjective": "Identificarea keratitei de expunere ca principală amenințare, cu lacrimi artificiale, benzi nocturne sau greutăți de aur palpebrale.",
  "optionRationales": [
   "Textul numește keratita ipsilaterală de expunere cel mai important efect secundar, cu risc de orbire.",
   "Fixarea scăriței este otoscleroză.",
   "Glomusul produce tinitus pulsatil.",
   "Atrezia coanală este o urgență neonatală nazală.",
   "Sialadenita este o infecție salivară, nu o consecință a lagoftalmiei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește keratita de expunere (amenințarea oculară) cu otoscleroză, glomus sau atrezie, entități din același capitol."
  },
  "textbookExpressions": [
   "keratita",
   "pleoapa superioară"
  ]
 },
 {
  "id": "orl-adv-092",
  "topicId": "orl",
  "type": "CM",
  "stem": "Granuloamele laringiene de la procesul vocal al aritenoidului:",
  "options": [
   "Se asociază frecvent cu reflux acid, intubație traheală sau traumatisme vocale (hemai, tuse cronică)",
   "Răspund adesea la terapia agresivă a RGE, antibiotice și corticoterapie scurtă",
   "Leziunile neresponsive pot fi tratate prin injectarea de toxină botulinică în mușchii adductori (tiroaritenoidian și cricotiroidian lateral)",
   "Nodulii cântăreților, simetrici la unirea treimii anterioare cu cele două treimi posterioare, sunt identici granuloamelor de proces vocal",
   "Excizia chirurgicală este prima intenție, botulinumul fiind contraindicat în adductorii corzii"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se asociază frecvent cu reflux acid, intubație traheală sau traumatisme vocale (hemai, tuse cronică) — Corect: Cauzele (RGE, intubație, hemai/tuse) și sediul lângă procesul vocal sunt explicite.\n\nRăspund adesea la terapia agresivă a RGE, antibiotice și corticoterapie scurtă — Corect: Răspunsul la RGE, antibiotic și steroid scurt este enunțat.\n\nLeziunile neresponsive pot fi tratate prin injectarea de toxină botulinică în mușchii adductori (tiroaritenoidian și cricotiroidian lateral) — Corect: Botox în tiroaritenoidian și cricotiroidian lateral, prin blocarea acetilcolinei, este descris.\n\nNodulii cântăreților, simetrici la unirea treimii anterioare cu cele două treimi posterioare, sunt identici granuloamelor de proces vocal — Incorect: Nodulii de efort sunt albi, simetrici, la unirea treimii anterioare, nu la procesul vocal.\n\nExcizia chirurgicală este prima intenție, botulinumul fiind contraindicat în adductorii corzii — Incorect: Chirurgia este rară (obstrucție sau suspiciune de malignitate); Botox-ul este o opțiune.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 575, Leziunile cronice ale corzii — Granulom versus nodul (pagini PDF: 248).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    575
   ],
   "pdfPages": [
    248
   ],
   "section": "Leziunile cronice ale corzii — Granulom versus nodul"
  },
  "learningObjective": "Separarea granulomului de proces vocal (RGE, intubație, Botox în adductori) de nodulii simetrici de joncțiune 1/3–2/3, tratați foniatric.",
  "optionRationales": [
   "Cauzele (RGE, intubație, hemai/tuse) și sediul lângă procesul vocal sunt explicite.",
   "Răspunsul la RGE, antibiotic și steroid scurt este enunțat.",
   "Botox în tiroaritenoidian și cricotiroidian lateral, prin blocarea acetilcolinei, este descris.",
   "Nodulii de efort sunt albi, simetrici, la unirea treimii anterioare, nu la procesul vocal.",
   "Chirurgia este rară (obstrucție sau suspiciune de malignitate); Botox-ul este o opțiune."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "confundă granulomul de proces vocal cu nodulii de joncțiune 1/3 și inversează Botox-ul cu chirurgia de primă intenție."
  },
  "textbookExpressions": [
   "procesul vocal",
   "toxină botulinică"
  ]
 },
 {
  "id": "orl-adv-093",
  "topicId": "orl",
  "type": "CM",
  "stem": "Epidemiologia carcinomului scuamos laringian:",
  "options": [
   "Incidența cancerului laringian reprezintă circa 10% din cea a cancerului pulmonar",
   "Vârful de incidență este în decadele 6 și 7, bărbații fiind mai predispuși decât femeile",
   "Fumatul și consumul de alcool sunt factori de risc importanți",
   "Vârful este în decadele 2–3, analog papilomului scuamos pediatric",
   "Incidența depășește cancerul pulmonar, alcoolul nefiind un factor de risc"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Incidența cancerului laringian reprezintă circa 10% din cea a cancerului pulmonar — Corect: Raportul de 10% față de cancerul pulmonar este explicit.\n\nVârful de incidență este în decadele 6 și 7, bărbații fiind mai predispuși decât femeile — Corect: Decadele 6 și 7 și predilecția masculină sunt citate.\n\nFumatul și consumul de alcool sunt factori de risc importanți — Corect: Fumatul și alcoolul sunt enunțate.\n\nVârful este în decadele 2–3, analog papilomului scuamos pediatric — Incorect: Decadele 2–3 și vârsta <5 ani țin de papilomul pediatric.\n\nIncidența depășește cancerul pulmonar, alcoolul nefiind un factor de risc — Incorect: Incidența este o zecime din pulmonară, nu o depășește.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 576, Cancerul laringian — 10% din pulmonar, decadele 6–7 (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    576
   ],
   "pdfPages": [
    249
   ],
   "section": "Cancerul laringian — 10% din pulmonar, decadele 6–7"
  },
  "learningObjective": "Reținerea raportului 10% față de cancerul pulmonar și a vârfului în decadele 6–7, distinct de papilomul de dinainte de 5 ani.",
  "optionRationales": [
   "Raportul de 10% față de cancerul pulmonar este explicit.",
   "Decadele 6 și 7 și predilecția masculină sunt citate.",
   "Fumatul și alcoolul sunt enunțate.",
   "Decadele 2–3 și vârsta <5 ani țin de papilomul pediatric.",
   "Incidența este o zecime din pulmonară, nu o depășește."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează vârful din decadele 6–7 în copilărie și inversează raportul 10% față de cancerul pulmonar."
  },
  "textbookExpressions": [
   "l 0% din cea a can",
   "decadele 6"
  ]
 },
 {
  "id": "orl-adv-094",
  "topicId": "orl",
  "type": "CM",
  "stem": "După laringectomie totală, comunicarea verbală poate fi realizată prin:",
  "options": [
   "Electrolaringe",
   "Vibrațiile musculaturii neofaringelui și ale esofagului cervical",
   "O valvă protetică unidirecțională plasată pe o fistulă chirurgicală între esofagul cervical și traheostomă (voce esofagiană)",
   "Intubație orotraheală de rutină, calea aeriană rămânând comună cu cea digestivă",
   "Păstrarea glotei native, laringectomia totală neancorând traheea la tegument"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Electrolaringe — Corect: Electrolaringele este enumerat.\n\nVibrațiile musculaturii neofaringelui și ale esofagului cervical — Corect: Neofaringele și esofagul cervical ca sursă de vibrație sunt descrise.\n\nO valvă protetică unidirecțională plasată pe o fistulă chirurgicală între esofagul cervical și traheostomă (voce esofagiană) — Corect: Valva unidirecțională pe fistulă TE este explicită.\n\nIntubație orotraheală de rutină, calea aeriană rămânând comună cu cea digestivă — Incorect: Pacientul nu va mai putea fi intubat oral; căile sunt separate.\n\nPăstrarea glotei native, laringectomia totală neancorând traheea la tegument — Incorect: Traheea este ancorată la tegument (traheostomă definitivă).\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 576, Laringectomia totală — Reabilitarea vocii (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    576
   ],
   "pdfPages": [
    249
   ],
   "section": "Laringectomia totală — Reabilitarea vocii"
  },
  "learningObjective": "Cele trei soluții (electrolaringe, voce esofagiană nativă, proteză pe fistulă TE), opus mitului intubației orale, interzisă după separarea căilor.",
  "optionRationales": [
   "Electrolaringele este enumerat.",
   "Neofaringele și esofagul cervical ca sursă de vibrație sunt descrise.",
   "Valva unidirecțională pe fistulă TE este explicită.",
   "Pacientul nu va mai putea fi intubat oral; căile sunt separate.",
   "Traheea este ancorată la tegument (traheostomă definitivă)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Păstrează intubația orală după laringectomie, deși textul o interzice odată cu separarea aero-digestivă."
  },
  "textbookExpressions": [
   "electrolaringe",
   "fistulă"
  ]
 },
 {
  "id": "orl-adv-095",
  "topicId": "orl",
  "type": "CM",
  "stem": "Sialadenita acută supurativă:",
  "options": [
   "Afectează cel mai frecvent glandele submandibulare, la adulți deshidratați cu status general alterat",
   "Glanda eliberează lichid purulent prin orificiul Wharton",
   "Agenții sunt de regulă S. aureus, S. pneumoniae și streptococi hemolitici; tratamentul include hidratare și antibiotice pe Gram-pozitive",
   "Parotida este sediul cel mai frecvent, germenul tipic fiind anaerobii piciorului diabetic",
   "Wharton rămâne sec, diagnosticul cerând puncție din Stenon"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Afectează cel mai frecvent glandele submandibulare, la adulți deshidratați cu status general alterat — Corect: Submandibulara, adultul și deshidratarea sunt explicite.\n\nGlanda eliberează lichid purulent prin orificiul Wharton — Corect: Puroiul prin Wharton, cu gust neplăcut, este descris.\n\nAgenții sunt de regulă S. aureus, S. pneumoniae și streptococi hemolitici; tratamentul include hidratare și antibiotice pe Gram-pozitive — Corect: Cei trei agenți și hidratarea plus antibiotic anti-Gram-pozitive sunt citați.\n\nParotida este sediul cel mai frecvent, germenul tipic fiind anaerobii piciorului diabetic — Incorect: Textul plasează sialadenita acută cel mai frecvent la submandibulare, nu la parotidă.\n\nWharton rămâne sec, diagnosticul cerând puncție din Stenon — Incorect: Puroiul iese pe Wharton, nu cere puncție din Stenon.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 579, Sialadenita acută — Submandibulară, Wharton, Gram-pozitive (pagini PDF: 252).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    579
   ],
   "pdfPages": [
    252
   ],
   "section": "Sialadenita acută — Submandibulară, Wharton, Gram-pozitive"
  },
  "learningObjective": "Predilecția submandibulară a adultului deshidratat, puroiul pe Wharton și spectrul Gram-pozitiv, opus parotidei ca sediu dominant.",
  "optionRationales": [
   "Submandibulara, adultul și deshidratarea sunt explicite.",
   "Puroiul prin Wharton, cu gust neplăcut, este descris.",
   "Cei trei agenți și hidratarea plus antibiotic anti-Gram-pozitive sunt citați.",
   "Textul plasează sialadenita acută cel mai frecvent la submandibulare, nu la parotidă.",
   "Puroiul iese pe Wharton, nu cere puncție din Stenon."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută sediul dominant de pe submandibulară pe parotidă și neagă puroiul pe Wharton."
  },
  "textbookExpressions": [
   "sialadenita acută",
   "Wharton"
  ]
 },
 {
  "id": "orl-adv-096",
  "topicId": "orl",
  "type": "CM",
  "stem": "Sindromul Sjögren la nivelul glandelor salivare:",
  "options": [
   "Determină xerostomie, keratoconjunctivită sicca și modificări de țesut conjunctiv",
   "Majoritatea pacienților au hipergammaglobulinemie, IgG ridicată și anticorpi SS-A, SS-B; peste 50% au ANA",
   "Pacienții trebuie monitorizați pentru hipertrofie progresivă, din riscul semnificativ de limfom salivar",
   "Diagnosticul se confirmă prin biopsia glandelor salivare principale, glandele minore fiind inutile",
   "Riscul de limfom este neglijabil, urmărirea hipertrofiei fiind superfluă"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Determină xerostomie, keratoconjunctivită sicca și modificări de țesut conjunctiv — Corect: Xerostomia, keratoconjunctivita sicca și țesutul conjunctiv sunt enunțate.\n\nMajoritatea pacienților au hipergammaglobulinemie, IgG ridicată și anticorpi SS-A, SS-B; peste 50% au ANA — Corect: Hipergammaglobulina, SS-A/SS-B și ANA la peste 50% sunt citate.\n\nPacienții trebuie monitorizați pentru hipertrofie progresivă, din riscul semnificativ de limfom salivar — Corect: Riscul de limfom salivar la hipertrofie progresivă este explicit.\n\nDiagnosticul se confirmă prin biopsia glandelor salivare principale, glandele minore fiind inutile — Incorect: Diagnosticul se poate confirma prin biopsia glandelor salivare secundare, nu a principalelor.\n\nRiscul de limfom este neglijabil, urmărirea hipertrofiei fiind superfluă — Incorect: Urmărirea hipertrofiei este cerută tocmai din riscul de limfom.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 579, Sjögren — SS-A/SS-B, sicca, limfom (pagini PDF: 252).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    579
   ],
   "pdfPages": [
    252
   ],
   "section": "Sjögren — SS-A/SS-B, sicca, limfom"
  },
  "learningObjective": "Cuplarea sicca + SS-A/SS-B + ANA cu alerta de limfom la hipertrofia progresivă, biopsia fiind a glandelor secundare (minore).",
  "optionRationales": [
   "Xerostomia, keratoconjunctivita sicca și țesutul conjunctiv sunt enunțate.",
   "Hipergammaglobulina, SS-A/SS-B și ANA la peste 50% sunt citate.",
   "Riscul de limfom salivar la hipertrofie progresivă este explicit.",
   "Diagnosticul se poate confirma prin biopsia glandelor salivare secundare, nu a principalelor.",
   "Urmărirea hipertrofiei este cerută tocmai din riscul de limfom."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută biopsia pe glandele principale și neagă riscul de limfom, cele două note ale paragrafului Sjögren."
  },
  "textbookExpressions": [
   "SS-A, SS-B",
   "limfom salivar"
  ]
 },
 {
  "id": "orl-adv-097",
  "topicId": "orl",
  "type": "CS",
  "stem": "La pacienții cu metastază cervicală de primar ocultat, tumora primară se va manifesta de obicei în decurs de:",
  "options": [
   "2 ani, ceea ce impune supraveghere periodică",
   "2 săptămâni, analog ameliorării lombalgiei mecanice",
   "6–12 luni, analog ferestrei de medializare a corzii paralizate",
   "O lună, analog disfoniei care impune laringoscopie",
   "24 de ore, analog drenajului abcesului subperiostal"
  ],
  "correct": [
   0
  ],
  "explanation": "2 ani, ceea ce impune supraveghere periodică — Corect: Textul: tumora primară se va manifesta în decursul a 2 ani, deci supraveghere periodică.\n\n2 săptămâni, analog ameliorării lombalgiei mecanice — Incorect: 2 săptămâni nu este fereastra CUP.\n\n6–12 luni, analog ferestrei de medializare a corzii paralizate — Incorect: 6–12 luni este medializarea corzii.\n\nO lună, analog disfoniei care impune laringoscopie — Incorect: O lună este disfonia neremisă.\n\n24 de ore, analog drenajului abcesului subperiostal — Incorect: 24 de ore este o fereastră de drenaj infecțios, nu oncologic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 583, CUP cervical — Fereastra de 2 ani (pagini PDF: 256).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    583
   ],
   "pdfPages": [
    256
   ],
   "section": "CUP cervical — Fereastra de 2 ani"
  },
  "learningObjective": "Reținerea ferestrei de 2 ani pentru apariția primarului ocultat, ca justificare a supravegherii, distinctă de alte ferestre din capitol.",
  "optionRationales": [
   "Textul: tumora primară se va manifesta în decursul a 2 ani, deci supraveghere periodică.",
   "2 săptămâni nu este fereastra CUP.",
   "6–12 luni este medializarea corzii.",
   "O lună este disfonia neremisă.",
   "24 de ore este o fereastră de drenaj infecțios, nu oncologic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează cei 2 ani de supraveghere CUP cu ferestre scurte din laringologie sau infecții."
  },
  "textbookExpressions": [
   "tumora primară",
   "supravegherea periodică"
  ]
 },
 {
  "id": "orl-adv-098",
  "topicId": "orl",
  "type": "CM",
  "stem": "Complicațiile postoperatorii precoce ale traheotomiei includ:",
  "options": [
   "Decanularea accidentală",
   "Hemoragiile",
   "Pneumotoraxul și crearea unei căi false în mediastin",
   "Stopul cardiac",
   "Stenoza traheală tardivă și fistula traheo-esofagiană, care sunt complicații precoce, nu tardive"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Decanularea accidentală — Corect: Decanularea accidentală este primul item precoce.\n\nHemoragiile — Corect: Hemoragiile figurează la precoce.\n\nPneumotoraxul și crearea unei căi false în mediastin — Corect: Pneumotoraxul și calea falsă mediastinală sunt citate.\n\nStopul cardiac — Corect: Stopul cardiac încheie lista precoce.\n\nStenoza traheală tardivă și fistula traheo-esofagiană, care sunt complicații precoce, nu tardive — Incorect: Stenoza și fistula traheo-esofagiană sunt în lista tardivă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 583, Traheotomia — Complicații precoce (pagini PDF: 256).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    583
   ],
   "pdfPages": [
    256
   ],
   "section": "Traheotomia — Complicații precoce"
  },
  "learningObjective": "Lista precoce (decanulare, sângerare, pneumotorax, cale falsă, stop) versus stenoza și fistula TE, care sunt tardive.",
  "optionRationales": [
   "Decanularea accidentală este primul item precoce.",
   "Hemoragiile figurează la precoce.",
   "Pneumotoraxul și calea falsă mediastinală sunt citate.",
   "Stopul cardiac încheie lista precoce.",
   "Stenoza și fistula traheo-esofagiană sunt în lista tardivă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută stenoza și fistula TE (tardive) în lista precoce, lângă decanulare și pneumotorax."
  },
  "textbookExpressions": [
   "decanularea accidentală",
   "pneumotoraxul"
  ]
 },
 {
  "id": "orl-adv-099",
  "topicId": "orl",
  "type": "CM",
  "stem": "Printre complicațiile tardive posibile ale traheotomiei se numără:",
  "options": [
   "Țesut de granulație peristomal sau traheal, cu sângerare sau obstrucție",
   "Persistența unei fistule traheo-cutanate după decanulare, stenoza traheală",
   "Fistula între trahee și trunchiul brahiocefalic și fistula traheo-esofagiană",
   "Decanularea accidentală și stopul cardiac, care definesc faza tardivă",
   "Absența oricărei nevoi de umidifiere, nasul rămânând pe circuitul inspirat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Țesut de granulație peristomal sau traheal, cu sângerare sau obstrucție — Corect: Granulația peristomală/traheală este primul item tardiv.\n\nPersistența unei fistule traheo-cutanate după decanulare, stenoza traheală — Corect: Fistula cutanată persistentă și stenoza sunt citate.\n\nFistula între trahee și trunchiul brahiocefalic și fistula traheo-esofagiană — Corect: Fistula cu trunchiul brahiocefalic și cea traheo-esofagiană încheie lista tardivă.\n\nDecanularea accidentală și stopul cardiac, care definesc faza tardivă — Incorect: Decanularea și stopul sunt precoce.\n\nAbsența oricărei nevoi de umidifiere, nasul rămânând pe circuitul inspirat — Incorect: Pacientul nu mai beneficiază de încălzirea și umidifierea nazală, deci umidifierea artificială este importantă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 583, Traheotomia — Complicații tardive și umidifiere (pagini PDF: 256).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    583
   ],
   "pdfPages": [
    256
   ],
   "section": "Traheotomia — Complicații tardive și umidifiere"
  },
  "learningObjective": "Separarea granulației, fistulei cutanate, stenozei, fistulei innominate și TE de evenimentele precoce (decanulare, stop) și de pierderea umidifierii nazale.",
  "optionRationales": [
   "Granulația peristomală/traheală este primul item tardiv.",
   "Fistula cutanată persistentă și stenoza sunt citate.",
   "Fistula cu trunchiul brahiocefalic și cea traheo-esofagiană încheie lista tardivă.",
   "Decanularea și stopul sunt precoce.",
   "Pacientul nu mai beneficiază de încălzirea și umidifierea nazală, deci umidifierea artificială este importantă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută decanularea/stopul (precoce) pe lista tardivă și neagă pierderea umidifierii nazale."
  },
  "textbookExpressions": [
   "fistulă",
   "brahiocefalic"
  ]
 },
 {
  "id": "orl-adv-100",
  "topicId": "orl",
  "type": "CM",
  "stem": "Hemangioamele subglotice și traheale:",
  "options": [
   "Sunt leziuni vasculare observate în primul an de viață, asociate cu stridor și hemangioame cutanate",
   "De regulă intră în regres până la vârsta de 4 ani, justificând o terapie conservatoare",
   "Dacă nu răspund la un β-blocant, pot fi necesare excizia laser sau traheotomia",
   "Regresează după pubertate, analog papilomului scuamos, β-blocantul fiind inutil",
   "Radioterapia este tratamentul de primă intenție, ca în papilomatoza adultului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Sunt leziuni vasculare observate în primul an de viață, asociate cu stridor și hemangioame cutanate — Corect: Primul an, stridorul și asocierea cutanată sunt explicite.\n\nDe regulă intră în regres până la vârsta de 4 ani, justificând o terapie conservatoare — Corect: Regresia până la 4 ani justifică conservatorul.\n\nDacă nu răspund la un β-blocant, pot fi necesare excizia laser sau traheotomia — Corect: β-blocantul, apoi laserul sau traheotomia, sunt ierarhia eșecului.\n\nRegresează după pubertate, analog papilomului scuamos, β-blocantul fiind inutil — Incorect: Regresia la pubertate este a papilomului, nu a hemangiomului.\n\nRadioterapia este tratamentul de primă intenție, ca în papilomatoza adultului — Incorect: Radioterapia este puțin eficientă în papilom; nu este prima linie a hemangiomului.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 576, Hemangiomul subglotic — Primul an, regresie la 4 ani, β-blocant (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    576
   ],
   "pdfPages": [
    249
   ],
   "section": "Hemangiomul subglotic — Primul an, regresie la 4 ani, β-blocant"
  },
  "learningObjective": "Contrastarea regresiei până la 4 ani și a β-blocantului cu papilomul (regresie la pubertate, laser, evitarea traheostomei).",
  "optionRationales": [
   "Primul an, stridorul și asocierea cutanată sunt explicite.",
   "Regresia până la 4 ani justifică conservatorul.",
   "β-blocantul, apoi laserul sau traheotomia, sunt ierarhia eșecului.",
   "Regresia la pubertate este a papilomului, nu a hemangiomului.",
   "Radioterapia este puțin eficientă în papilom; nu este prima linie a hemangiomului."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "confundă regresia de la 4 ani (hemangiom) cu cea pubertară a papilomului și inversează β-blocantul cu radioterapia."
  },
  "textbookExpressions": [
   "4 ani",
   "P-blocant"
  ]
 },
 {
  "id": "orl-adv-101",
  "topicId": "orl",
  "type": "CS",
  "stem": "Pragul de inteligibilitate a vorbirii (PIV) reprezintă cea mai mică intensitate la care pacientul repetă cu succes cuvinte bisilabice în:",
  "options": [
   "50% din timp",
   "10% din timp, analog persistenței lichidului după OMA",
   "90% din timp, analog supraviețuirii la 3 ani a tumorilor glotice mici",
   "75% din timp, analog presbiacuziei până la 80 de ani",
   "100% din timp, discriminarea monosilabică fiind superfluă"
  ],
  "correct": [
   0
  ],
  "explanation": "50% din timp — Corect: Textul definește pragul vocii conversaționale ca cea mai mică intensitate cu repetare reușită în 50% din timp.\n\n10% din timp, analog persistenței lichidului după OMA — Incorect: 10% este ponderea copiilor cu lichid persistând 10–12 săptămâni după OMA, nu PIV.\n\n90% din timp, analog supraviețuirii la 3 ani a tumorilor glotice mici — Incorect: 90% este supraviețuirea la 3 ani a tumorilor glotice mici.\n\n75% din timp, analog presbiacuziei până la 80 de ani — Incorect: 75% este ponderea presbiacuziei până la 80 de ani.\n\n100% din timp, discriminarea monosilabică fiind superfluă — Incorect: Discriminarea se măsoară separat, pe monosilabe echilibrate fonetic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 553, Audiometrie vocală — Pragul de inteligibilitate a vorbirii (pagini PDF: 226).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    553
   ],
   "pdfPages": [
    226
   ],
   "section": "Audiometrie vocală — Pragul de inteligibilitate a vorbirii"
  },
  "learningObjective": "Memorarea definiției PIV ca 50% succes la cuvinte din două silabe, distinctă de scorul de recunoaștere a monosilabelor.",
  "optionRationales": [
   "Textul definește pragul vocii conversaționale ca cea mai mică intensitate cu repetare reușită în 50% din timp.",
   "10% este ponderea copiilor cu lichid persistând 10–12 săptămâni după OMA, nu PIV.",
   "90% este supraviețuirea la 3 ani a tumorilor glotice mici.",
   "75% este ponderea presbiacuziei până la 80 de ani.",
   "Discriminarea se măsoară separat, pe monosilabe echilibrate fonetic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 50% al PIV cu alte procente din capitol (10%, 75%, 90%)."
  },
  "textbookExpressions": [
   "două silabe",
   "50% din timp"
  ]
 },
 {
  "id": "orl-adv-102",
  "topicId": "orl",
  "type": "CM",
  "stem": "Audiometria tonală se efectuează pe cel puțin șase frecvențe. Sunt adevărate:",
  "options": [
   "Frecvențele testate sunt 250, 500, 1.000, 2.000, 4.000 și 8.000 Hz",
   "Discriminarea vorbirii este procentul de cuvinte monosilabice, echilibrate fonetic, repetate cu succes",
   "Audiometria tonală evaluează recunoașterea vorbirii, făcând inutil PIV-ul",
   "Cele șase frecvențe încep de la 125 Hz și se opresc la 4.000 Hz, analog vocii conversaționale",
   "Discriminarea se testează cu cuvinte bisilabice, identic PIV-ului"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Frecvențele testate sunt 250, 500, 1.000, 2.000, 4.000 și 8.000 Hz — Corect: Cele șase frecvențe sunt enumerate explicit.\n\nDiscriminarea vorbirii este procentul de cuvinte monosilabice, echilibrate fonetic, repetate cu succes — Corect: Discriminarea ca procent de monosilabe echilibrate fonetic este enunțată.\n\nAudiometria tonală evaluează recunoașterea vorbirii, făcând inutil PIV-ul — Incorect: Audiometria tonală nu evaluează recunoașterea vorbirii; aceasta este rolul PIV și al discriminării.\n\nCele șase frecvențe încep de la 125 Hz și se opresc la 4.000 Hz, analog vocii conversaționale — Incorect: Lista începe la 250 Hz și include 8.000 Hz.\n\nDiscriminarea se testează cu cuvinte bisilabice, identic PIV-ului — Incorect: Cuvintele bisilabice definesc PIV-ul, nu discriminarea.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 553, Audiometria tonală — Șase frecvențe și discriminarea monosilabică (pagini PDF: 226).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    553
   ],
   "pdfPages": [
    226
   ],
   "section": "Audiometria tonală — Șase frecvențe și discriminarea monosilabică"
  },
  "learningObjective": "Separarea listei de frecvențe (250–8.000 Hz) de scorul de recunoaștere pe monosilabe, față de PIV-ul bisilabic.",
  "optionRationales": [
   "Cele șase frecvențe sunt enumerate explicit.",
   "Discriminarea ca procent de monosilabe echilibrate fonetic este enunțată.",
   "Audiometria tonală nu evaluează recunoașterea vorbirii; aceasta este rolul PIV și al discriminării.",
   "Lista începe la 250 Hz și include 8.000 Hz.",
   "Cuvintele bisilabice definesc PIV-ul, nu discriminarea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie audiometriei tonale funcția vocală și schimbă monosilabele discriminării cu bisilabele PIV."
  },
  "textbookExpressions": [
   "8.000 Hz",
   "cuvinte monosilabice"
  ]
 },
 {
  "id": "orl-adv-103",
  "topicId": "orl",
  "type": "CM",
  "stem": "Conform tabelului 27-5, fractura transversală (orizontală) de os temporal se deosebește de cea longitudinală prin:",
  "options": [
   "Mecanism: lovitură frontală sau occipitală, care intersectează axul lung al osului pietros",
   "Vertij frecvent, membrană timpanică în general intactă și hemotimpan",
   "Paralizie de nerv facial frecventă (circa 50%) și hipoacuzie în general neurosenzorială",
   "Mecanism: lovitură laterală, paralelă cu axul pietros, cu otoree hemoragică și semn Battle",
   "Hipoacuzie de transmisie și paralizie facială rară, analog longitudinalei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mecanism: lovitură frontală sau occipitală, care intersectează axul lung al osului pietros — Corect: Lovitura frontală/occipitală care intersectează axul pietros este explicită.\n\nVertij frecvent, membrană timpanică în general intactă și hemotimpan — Corect: Vertijul, timpanul intact și hemotimpanul figurează în tabel.\n\nParalizie de nerv facial frecventă (circa 50%) și hipoacuzie în general neurosenzorială — Corect: Facialul frecvent (~50%) și hipoacuzia neurosenzorială sunt citate.\n\nMecanism: lovitură laterală, paralelă cu axul pietros, cu otoree hemoragică și semn Battle — Incorect: Lovitura laterală, otoreea hemoragică și semnul Battle definesc longitudinalea.\n\nHipoacuzie de transmisie și paralizie facială rară, analog longitudinalei — Incorect: Transmisia și facialul rar (~15%) sunt ale longitudinalei, nu ale transversalei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 557, Fracturile de os temporal — Tabelul 27-5, forma transversală (pagini PDF: 230).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    557
   ],
   "pdfPages": [
    230
   ],
   "section": "Fracturile de os temporal — Tabelul 27-5, forma transversală"
  },
  "learningObjective": "Contrastarea loviturii fronto-occipitale, a timpanului intact cu hemotimpan, a vertijului și a facialului ~50% cu tabloul longitudinalei (lateral, Battle, transmisie).",
  "optionRationales": [
   "Lovitura frontală/occipitală care intersectează axul pietros este explicită.",
   "Vertijul, timpanul intact și hemotimpanul figurează în tabel.",
   "Facialul frecvent (~50%) și hipoacuzia neurosenzorială sunt citate.",
   "Lovitura laterală, otoreea hemoragică și semnul Battle definesc longitudinalea.",
   "Transmisia și facialul rar (~15%) sunt ale longitudinalei, nu ale transversalei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie transversalei semnul Battle și hipoacuzia de transmisie, discriminatorii clasice ale longitudinalei."
  },
  "textbookExpressions": [
   "Intersectează axul",
   "~50%"
  ]
 },
 {
  "id": "orl-adv-104",
  "topicId": "orl",
  "type": "CS",
  "stem": "Otita externă localizată (foliculita conductului auditiv extern) este cauzată cel mai frecvent de traumă cu:",
  "options": [
   "Unghia sau agrafe de păr, cu durere intensă la mobilizarea pavilionului; tratamentul implică antibiotice antistafilococice, drenaj sau ambele",
   "Pseudomonas din apa de înot, analog urechii înotătorului difuze",
   "Aspergillus pe epiteliul descuamat, ca infecție secundară fungică",
   "Proteus la diabeticul cu osteomielită de bază de craniu",
   "Un corp străin caustic, care impune anestezie generală de la prima tentativă"
  ],
  "correct": [
   0
  ],
  "explanation": "Unghia sau agrafe de păr, cu durere intensă la mobilizarea pavilionului; tratamentul implică antibiotice antistafilococice, drenaj sau ambele — Corect: Trauma cu unghia sau agrafele, durerea la mobilizarea pavilionului și antistafilococicele/drenajul sunt explicite.\n\nPseudomonas din apa de înot, analog urechii înotătorului difuze — Incorect: Pseudomonas este agentul otitei externe difuze (urechea înotătorului).\n\nAspergillus pe epiteliul descuamat, ca infecție secundară fungică — Incorect: Fungii sunt incriminați de obicei în infecții secundare ale formei difuze.\n\nProteus la diabeticul cu osteomielită de bază de craniu — Incorect: Proteus/Klebsiella figurează la otita externă necrotizantă.\n\nUn corp străin caustic, care impune anestezie generală de la prima tentativă — Incorect: Corpul străin caustic este o urgență de extracție, nu foliculita.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 557, Otita externă localizată — Foliculita de conduct (pagini PDF: 230).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    557
   ],
   "pdfPages": [
    230
   ],
   "section": "Otita externă localizată — Foliculita de conduct"
  },
  "learningObjective": "Recunoașterea traumei cu unghia/agrafă, a durerii la mobilizarea pavilionului și a antibioticului antistafilococic, distincte de Pseudomonas-ul otitei difuze.",
  "optionRationales": [
   "Trauma cu unghia sau agrafele, durerea la mobilizarea pavilionului și antistafilococicele/drenajul sunt explicite.",
   "Pseudomonas este agentul otitei externe difuze (urechea înotătorului).",
   "Fungii sunt incriminați de obicei în infecții secundare ale formei difuze.",
   "Proteus/Klebsiella figurează la otita externă necrotizantă.",
   "Corpul străin caustic este o urgență de extracție, nu foliculita."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă foliculita antistafilococică cu Pseudomonas-ul înotătorului sau cu otita necrotizantă a diabeticului."
  },
  "textbookExpressions": [
   "Unghia",
   "antistafilococice"
  ]
 },
 {
  "id": "orl-adv-105",
  "topicId": "orl",
  "type": "CM",
  "stem": "Corpii străini auriculari la preșcolar:",
  "options": [
   "Reprezintă o urgență doar dacă obiectul este caustic",
   "Copiii permit, de obicei, o singură încercare; dacă eșuează, este necesară anestezia generală",
   "Toți corpii străini, inclusiv un bob de mazăre, impun extracție imediată sub anestezie generală, fără tentativă trează",
   "Corticoterapia locală este contraindicată între tentative",
   "Un bob de popcorn se extrage prin irigare forțată, analog dopului de ceară"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Reprezintă o urgență doar dacă obiectul este caustic — Corect: Doar obiectul caustic face din corpul străin o urgență.\n\nCopiii permit, de obicei, o singură încercare; dacă eșuează, este necesară anestezia generală — Corect: O singură încercare, apoi anestezie generală, este explicită.\n\nToți corpii străini, inclusiv un bob de mazăre, impun extracție imediată sub anestezie generală, fără tentativă trează — Incorect: Nu toți corpii impun AG de la prima tentativă.\n\nCorticoterapia locală este contraindicată între tentative — Incorect: Între timp, corticoterapia locală este utilă.\n\nUn bob de popcorn se extrage prin irigare forțată, analog dopului de ceară — Incorect: Textul nu recomandă irigarea forțată a boabelor.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 558, Corpii străini de conduct auditiv — Urgența caustică și o tentativă (pagini PDF: 231).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    558
   ],
   "pdfPages": [
    231
   ],
   "section": "Corpii străini de conduct auditiv — Urgența caustică și o tentativă"
  },
  "learningObjective": "Recunoașterea urgenței doar pentru obiectul caustic și a regulii unei singure tentative treze, urmată de anestezie generală.",
  "optionRationales": [
   "Doar obiectul caustic face din corpul străin o urgență.",
   "O singură încercare, apoi anestezie generală, este explicită.",
   "Nu toți corpii impun AG de la prima tentativă.",
   "Între timp, corticoterapia locală este utilă.",
   "Textul nu recomandă irigarea forțată a boabelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă orice corp străin (mazăre, popcorn) în urgență de AG, ignorând regula obiectului caustic și a unei tentative."
  },
  "textbookExpressions": [
   "obiectul este caustic",
   "anestezia generală"
  ]
 },
 {
  "id": "orl-adv-106",
  "topicId": "orl",
  "type": "CM",
  "stem": "Când trompa lui Eustachio nu se deschide suficient, mecanismul otitei medii include:",
  "options": [
   "Crearea unui vacuum, cu absorbția oxigenului și a azotului în mucoasa urechii medii și în celulele mastoidiene",
   "Creșterea permeabilității capilare și stimularea activității glandulare, cu lichid sau pungi de retracție",
   "Dacă sunt prezenți agenți infecțioși, transudatul este un excelent mediu de cultură",
   "Presiune pozitivă continuă, analog colesteatomului prin hiperpresiune",
   "Deschiderea permanentă a trompei, cu reflux nazofaringian steril, fără vacuum"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Crearea unui vacuum, cu absorbția oxigenului și a azotului în mucoasa urechii medii și în celulele mastoidiene — Corect: Vacuumul și absorbția oxigenului și azotului sunt explicite.\n\nCreșterea permeabilității capilare și stimularea activității glandulare, cu lichid sau pungi de retracție — Corect: Permeabilitatea capilară, activitatea glandulară, lichidul și pungile de retracție sunt descrise.\n\nDacă sunt prezenți agenți infecțioși, transudatul este un excelent mediu de cultură — Corect: Transudatul ca mediu de cultură este enunțat.\n\nPresiune pozitivă continuă, analog colesteatomului prin hiperpresiune — Incorect: Colesteatomul se dezvoltă pe presiune negativă, nu pozitivă.\n\nDeschiderea permanentă a trompei, cu reflux nazofaringian steril, fără vacuum — Incorect: Trompa este în mod normal închisă și se deschide intermitent; nu rămâne permanent deschisă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 558, Otita medie — Vacuum tubar și transudat (pagini PDF: 231).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    558
   ],
   "pdfPages": [
    231
   ],
   "section": "Otita medie — Vacuum tubar și transudat"
  },
  "learningObjective": "Reconstituirea lanțului vacuum → absorbție O2/N2 → permeabilitate capilară și lichid, ca premisă a otitei când intervin germenii.",
  "optionRationales": [
   "Vacuumul și absorbția oxigenului și azotului sunt explicite.",
   "Permeabilitatea capilară, activitatea glandulară, lichidul și pungile de retracție sunt descrise.",
   "Transudatul ca mediu de cultură este enunțat.",
   "Colesteatomul se dezvoltă pe presiune negativă, nu pozitivă.",
   "Trompa este în mod normal închisă și se deschide intermitent; nu rămâne permanent deschisă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează vacuumul (presiune negativă) în hiperpresiune și trompa permanent deschisă."
  },
  "textbookExpressions": [
   "oxigenul şi azotul",
   "pungi de retracţie"
  ]
 },
 {
  "id": "orl-adv-107",
  "topicId": "orl",
  "type": "CM",
  "stem": "Ghidul AAP 2004 pentru otita medie acută prevede:",
  "options": [
   "Dacă simptomele nu sunt grave sau diagnosticul este neclar, se recomandă inițial doar monitorizarea, cu reevaluare în 48–72 de ore",
   "Azitromicina, claritromicina sau eritromicina pot fi folosite la alergicii la peniciline",
   "După inițierea antibioticului, durerea cedează în 3 zile, iar funcția trompei revine în 2 săptămâni",
   "Dacă infecția persistă după 3 zile, se trece la doză mare de amoxicilină-clavulanat; apoi, dacă eșuează, o cură de 3 zile de ceftriaxonă parenteral",
   "Antibioticele, antihistaminicele și steroizii sunt inutile în OMA, analog otitei seroase"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Dacă simptomele nu sunt grave sau diagnosticul este neclar, se recomandă inițial doar monitorizarea, cu reevaluare în 48–72 de ore — Corect: Monitorizarea inițială și reevaluarea în 48–72 de ore sunt explicite.\n\nAzitromicina, claritromicina sau eritromicina pot fi folosite la alergicii la peniciline — Corect: Cele trei macrolide la alergicii la penicilină sunt enumerate.\n\nDupă inițierea antibioticului, durerea cedează în 3 zile, iar funcția trompei revine în 2 săptămâni — Corect: Cedarea durerii în 3 zile și a funcției tubare în 2 săptămâni sunt citate.\n\nDacă infecția persistă după 3 zile, se trece la doză mare de amoxicilină-clavulanat; apoi, dacă eșuează, o cură de 3 zile de ceftriaxonă parenteral — Corect: Amox-clavulatul la eșecul de 3 zile și ceftriaxona 3 zile sunt enunțate.\n\nAntibioticele, antihistaminicele și steroizii sunt inutile în OMA, analog otitei seroase — Incorect: Ineficiența antibioticelor/antihistaminicelor/steroizilor este afirmată pentru OMS, nu pentru OMA tratată.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 558, Otita medie acută — Observație 48–72 de ore și eskalare antibiotică (pagini PDF: 231).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    558
   ],
   "pdfPages": [
    231
   ],
   "section": "Otita medie acută — Observație 48–72 de ore și eskalare antibiotică"
  },
  "learningObjective": "Aplicarea observației 48–72 de ore, a macrolidului la alergici, a ferestrelor 3 zile/2 săptămâni și a treptei amox-clav apoi ceftriaxonă.",
  "optionRationales": [
   "Monitorizarea inițială și reevaluarea în 48–72 de ore sunt explicite.",
   "Cele trei macrolide la alergicii la penicilină sunt enumerate.",
   "Cedarea durerii în 3 zile și a funcției tubare în 2 săptămâni sunt citate.",
   "Amox-clavulatul la eșecul de 3 zile și ceftriaxona 3 zile sunt enunțate.",
   "Ineficiența antibioticelor/antihistaminicelor/steroizilor este afirmată pentru OMS, nu pentru OMA tratată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută ineficiența medicației din OMS (3 luni de observație) peste OMA, unde ghidul detaliază trepte antibiotice."
  },
  "textbookExpressions": [
   "48-72 de ore",
   "ceftriaxonă"
  ]
 },
 {
  "id": "orl-adv-108",
  "topicId": "orl",
  "type": "CS",
  "stem": "După un episod de otită medie acută, lichidul din urechea medie persistă peste 10–12 săptămâni la circa:",
  "options": [
   "10% dintre copii",
   "75% dintre copii, analog celor cu cel puțin trei OMA până la 2 ani",
   "50% dintre copii, analog PIV-ului vocal",
   "90% dintre copii, analog vindecării perforațiilor timpanice posttraumatice",
   "2,2 milioane de cazuri pe an, cifra anuală a OMS în SUA, nu un procent"
  ],
  "correct": [
   0
  ],
  "explanation": "10% dintre copii — Corect: Procentul de circa 10% cu lichid peste 10–12 săptămâni este explicit.\n\n75% dintre copii, analog celor cu cel puțin trei OMA până la 2 ani — Incorect: 75% este ponderea copiilor cu ≥3 OMA până la 2 ani.\n\n50% dintre copii, analog PIV-ului vocal — Incorect: 50% este pragul PIV.\n\n90% dintre copii, analog vindecării perforațiilor timpanice posttraumatice — Incorect: 90% este rata de vindecare a perforațiilor posttraumatice.\n\n2,2 milioane de cazuri pe an, cifra anuală a OMS în SUA, nu un procent — Incorect: 2,2 milioane este estimarea anuală a OMS, nu procentul de persistență după OMA.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 558, Otita medie acută — Persistența lichidului 10–12 săptămâni (pagini PDF: 231).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    558
   ],
   "pdfPages": [
    231
   ],
   "section": "Otita medie acută — Persistența lichidului 10–12 săptămâni"
  },
  "learningObjective": "Memorarea celor 10% de copii cu lichid persistând peste 10–12 săptămâni, ca justificare a urmăririi până la ureche medie liberă.",
  "optionRationales": [
   "Procentul de circa 10% cu lichid peste 10–12 săptămâni este explicit.",
   "75% este ponderea copiilor cu ≥3 OMA până la 2 ani.",
   "50% este pragul PIV.",
   "90% este rata de vindecare a perforațiilor posttraumatice.",
   "2,2 milioane este estimarea anuală a OMS, nu procentul de persistență după OMA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 10% cu 75% (epidemiologia OMA) și cu 90% (perforațiile), două cifre din același capitol otologic."
  },
  "textbookExpressions": [
   "I 0%",
   "I 0-12 săptămâni"
  ]
 },
 {
  "id": "orl-adv-109",
  "topicId": "orl",
  "type": "CM",
  "stem": "Boala Meniere (hidropsul endolimfatic) se asociază cu:",
  "options": [
   "Bombarea sau ruperea membranei Reissner și amestecarea endolimfei cu perilimfa, toxică pentru celulele păroase",
   "Tratament medical prin regim hiposodat și diuretice",
   "Decompresia sacului endolimfatic sau distrucția nervului vestibular, rezervate vertijului debilitant neresponsiv",
   "Manevra Epley ca primă intenție, analog BPPV prin canalolitiază",
   "Fixarea piciorului scăriței, analog otosclerozei adultului tânăr"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Bombarea sau ruperea membranei Reissner și amestecarea endolimfei cu perilimfa, toxică pentru celulele păroase — Corect: Ruptura membranei Reissner și toxicitatea amestecului pentru celulele păroase sunt explicite.\n\nTratament medical prin regim hiposodat și diuretice — Corect: Regimul hiposodat și diureticele sunt tratamentul medical.\n\nDecompresia sacului endolimfatic sau distrucția nervului vestibular, rezervate vertijului debilitant neresponsiv — Corect: Decompresia sacului sau distrucția vestibulară sunt rezervate vertijului neresponsiv.\n\nManevra Epley ca primă intenție, analog BPPV prin canalolitiază — Incorect: Epley este manevra BPPV, nu a hidropsului.\n\nFixarea piciorului scăriței, analog otosclerozei adultului tânăr — Incorect: Fixarea scăriței definește otoscleroza, nu Meniere.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 560, Boala Meniere — Membrana Reissner și tratamentul (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    560
   ],
   "pdfPages": [
    233
   ],
   "section": "Boala Meniere — Membrana Reissner și tratamentul"
  },
  "learningObjective": "Recunoașterea amestecului toxic endolimfă–perilimfă, a diureticelor hiposodate și a chirurgiei rezervate cazurilor refractare.",
  "optionRationales": [
   "Ruptura membranei Reissner și toxicitatea amestecului pentru celulele păroase sunt explicite.",
   "Regimul hiposodat și diureticele sunt tratamentul medical.",
   "Decompresia sacului sau distrucția vestibulară sunt rezervate vertijului neresponsiv.",
   "Epley este manevra BPPV, nu a hidropsului.",
   "Fixarea scăriței definește otoscleroza, nu Meniere."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește diureticele și decompresia sacului cu Epley sau stapedectomie, două gesturi din patologii vestibulo-otice învecinate."
  },
  "textbookExpressions": [
   "membranei Reissner",
   "regim hiposodat"
  ]
 },
 {
  "id": "orl-adv-110",
  "topicId": "orl",
  "type": "CM",
  "stem": "Paralizia Bell se caracterizează prin:",
  "options": [
   "Infecție virală nervoasă cu herpes simplex, confirmată prin PCR",
   "Instalare în câteva ore, cu posibilă progresie către paralizie completă",
   "Durere mastoidiană asociată, cu durată sub 72 de ore",
   "Vindecare spontană în majoritatea cazurilor; forma persistentă sau recurentă impune imagistică pentru a exclude o tumoră",
   "Prognostic rezervat de rutină, analog leziunii complete prin tumoră malignă sau fractură de os temporal"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Infecție virală nervoasă cu herpes simplex, confirmată prin PCR — Corect: HSV confirmat prin PCR este explicit.\n\nInstalare în câteva ore, cu posibilă progresie către paralizie completă — Corect: Instalarea în câteva ore cu progresie posibilă către completă este descrisă.\n\nDurere mastoidiană asociată, cu durată sub 72 de ore — Corect: Durerea mastoidiană sub 72 de ore este citată.\n\nVindecare spontană în majoritatea cazurilor; forma persistentă sau recurentă impune imagistică pentru a exclude o tumoră — Corect: Vindecarea spontană majoritară și imagistica la persistență/recidivă sunt enunțate.\n\nPrognostic rezervat de rutină, analog leziunii complete prin tumoră malignă sau fractură de os temporal — Incorect: Prognosticul bun al leziunii incomplete/inflamatorii este opus celui rezervat al tumorii maligne sau al traumei temporale.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 560, Paralizia Bell — HSV, fereastra de 72 de ore și imagistica recurenței (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    560
   ],
   "pdfPages": [
    233
   ],
   "section": "Paralizia Bell — HSV, fereastra de 72 de ore și imagistica recurenței"
  },
  "learningObjective": "Integrarea confirmării PCR pentru HSV, a instalării în ore, a durerii mastoidiene <72 de ore și a imagisticii la persistență/recidivă.",
  "optionRationales": [
   "HSV confirmat prin PCR este explicit.",
   "Instalarea în câteva ore cu progresie posibilă către completă este descrisă.",
   "Durerea mastoidiană sub 72 de ore este citată.",
   "Vindecarea spontană majoritară și imagistica la persistență/recidivă sunt enunțate.",
   "Prognosticul bun al leziunii incomplete/inflamatorii este opus celui rezervat al tumorii maligne sau al traumei temporale."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie Bell-ului prognosticul rezervat al tumorii maligne/fracturii temporale, ignorând vindecarea spontană și PCR-ul HSV."
  },
  "textbookExpressions": [
   "herpes simplex",
   "<72 de ore"
  ]
 },
 {
  "id": "orl-adv-111",
  "topicId": "orl",
  "type": "CM",
  "stem": "Paralizia facială în context de otită medie acută, respectiv leziunea supranucleară, se deosebesc astfel:",
  "options": [
   "În OMA, tratamentul este miringotomie largă plus antibioterapie topică și sistemică",
   "Leziunile supranucleare (ischemie cerebrovasculară) nu afectează frecvent fruntea, ramurile fiind conectate cu fibre corticobulbare directe și încrucișate",
   "Miringotomia este contraindicată în OMA cu pareză, analog aspirației prin celulită a artritei septice",
   "Leziunea supranucleară șterge fruntea bilateral, analog leziunii de trunchi distal de ganglionul geniculat",
   "Blefarorafia este primul gest în OMA, înaintea oricărei miringotomii"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "În OMA, tratamentul este miringotomie largă plus antibioterapie topică și sistemică — Corect: Miringotomia largă plus antibiotic topic și sistemic sunt cerute în OMA cu paralizie facială.\n\nLeziunile supranucleare (ischemie cerebrovasculară) nu afectează frecvent fruntea, ramurile fiind conectate cu fibre corticobulbare directe și încrucișate — Corect: Păstrarea frunții prin fibre directe și încrucișate este explicită.\n\nMiringotomia este contraindicată în OMA cu pareză, analog aspirației prin celulită a artritei septice — Incorect: Tabelul 27-6 include pareza facială ca indicație de miringotomie de urgență.\n\nLeziunea supranucleară șterge fruntea bilateral, analog leziunii de trunchi distal de ganglionul geniculat — Incorect: Fruntea este frecvent păstrată, nu ștearsă, în leziunea supranucleară.\n\nBlefarorafia este primul gest în OMA, înaintea oricărei miringotomii — Incorect: Protecția oculară (lacrimi, benzi, greutăți de aur) este a lagoftalmiei, nu înlocuiește miringotomia din OMA.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 560, Paralizia facială — OMA (miringotomie) versus supranuclear (fruntea păstrată) (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    560
   ],
   "pdfPages": [
    233
   ],
   "section": "Paralizia facială — OMA (miringotomie) versus supranuclear (fruntea păstrată)"
  },
  "learningObjective": "Contrastarea miringotomiei largi din OMA cu păstrarea frunții în leziunea supranucleară prin inervație corticobulbară bilaterală.",
  "optionRationales": [
   "Miringotomia largă plus antibiotic topic și sistemic sunt cerute în OMA cu paralizie facială.",
   "Păstrarea frunții prin fibre directe și încrucișate este explicită.",
   "Tabelul 27-6 include pareza facială ca indicație de miringotomie de urgență.",
   "Fruntea este frecvent păstrată, nu ștearsă, în leziunea supranucleară.",
   "Protecția oculară (lacrimi, benzi, greutăți de aur) este a lagoftalmiei, nu înlocuiește miringotomia din OMA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Interzice miringotomia tocmai când tabelul o cere și șterge fruntea pe care inervația bilaterală o păstrează."
  },
  "textbookExpressions": [
   "miringotomie largă",
   "fruntea"
  ]
 },
 {
  "id": "orl-adv-112",
  "topicId": "orl",
  "type": "CS",
  "stem": "Exostozele conductului auditiv extern se deosebesc de osteoame prin faptul că:",
  "options": [
   "Sunt noduli multipli, indurați, netezi, de obicei bilaterali, pe când osteoamele sunt unice și unilaterale",
   "Sunt unice și unilaterale, analog osteoamelor de sinus fronto-etmoidal",
   "Se asociază cu tinitus pulsatil și masă eritematoasă în spatele timpanului, analog glomusului",
   "Degeneră în 10–15% în carcinom scuamos, analog papilomului invertit",
   "Răspund la picături antipseudomonas, analog urechii înotătorului"
  ],
  "correct": [
   0
  ],
  "explanation": "Sunt noduli multipli, indurați, netezi, de obicei bilaterali, pe când osteoamele sunt unice și unilaterale — Corect: Multiplicitatea, caracterul indurat neted și bilateralitatea exostozelor, versus osteomul unic unilateral, sunt explicite.\n\nSunt unice și unilaterale, analog osteoamelor de sinus fronto-etmoidal — Incorect: Unicitatea și unilateralitatea definesc osteomul, nu exostoza.\n\nSe asociază cu tinitus pulsatil și masă eritematoasă în spatele timpanului, analog glomusului — Incorect: Masa pulsatilă eritematoasă este glomus tympanicum.\n\nDegeneră în 10–15% în carcinom scuamos, analog papilomului invertit — Incorect: Degenerarea 10–15% este a papilomului invertit rinosinusal.\n\nRăspund la picături antipseudomonas, analog urechii înotătorului — Incorect: Picăturile antipseudomonas tratează otita externă difuză, nu exostozele.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 560, Neoplazii otologice — Exostoză versus osteom (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    560
   ],
   "pdfPages": [
    233
   ],
   "section": "Neoplazii otologice — Exostoză versus osteom"
  },
  "learningObjective": "Diferențierea exostozelor multiple bilaterale de osteomul unic unilateral al conductului.",
  "optionRationales": [
   "Multiplicitatea, caracterul indurat neted și bilateralitatea exostozelor, versus osteomul unic unilateral, sunt explicite.",
   "Unicitatea și unilateralitatea definesc osteomul, nu exostoza.",
   "Masa pulsatilă eritematoasă este glomus tympanicum.",
   "Degenerarea 10–15% este a papilomului invertit rinosinusal.",
   "Picăturile antipseudomonas tratează otita externă difuză, nu exostozele."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește multiplicitatea exostozelor cu unicitatea osteomului și le confundă cu glomusul sau papilomul invertit."
  },
  "textbookExpressions": [
   "Exostozele",
   "Osteoamele"
  ]
 },
 {
  "id": "orl-adv-113",
  "topicId": "orl",
  "type": "CM",
  "stem": "Glomus tympanicum, paragangliom vascular al urechii medii:",
  "options": [
   "Este histologic similar tumorilor glomice ale corpului carotidian, ale nervului vag și ale bulbului jugular",
   "Pacienții acuză de obicei tinitus pulsatil unilateral și hipoacuzie",
   "O masă eritematoasă poate fi văzută otoscopic în spatele unei membrane timpanice translucide, altfel normale",
   "Excizia chirurgicală este tratamentul de elecție",
   "Masa albicioasă cu granulație și osteonecroză enzimatică definește glomusul, nu colesteatomul"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este histologic similar tumorilor glomice ale corpului carotidian, ale nervului vag și ale bulbului jugular — Corect: Similitudinea cu glomusul carotidian, vagal și jugular este explicită.\n\nPacienții acuză de obicei tinitus pulsatil unilateral și hipoacuzie — Corect: Tinitusul pulsatil unilateral și hipoacuzia sunt simptomele uzuale.\n\nO masă eritematoasă poate fi văzută otoscopic în spatele unei membrane timpanice translucide, altfel normale — Corect: Masa eritematoasă în spatele timpanului translucid este descrisă.\n\nExcizia chirurgicală este tratamentul de elecție — Corect: Excizia chirurgicală este tratamentul de elecție.\n\nMasa albicioasă cu granulație și osteonecroză enzimatică definește glomusul, nu colesteatomul — Incorect: Masa albicioasă cu osteonecroză enzimatică este colesteatomul, nu glomusul.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 560, Glomus tympanicum — Tinitus pulsatil și masă eritematoasă (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    560
   ],
   "pdfPages": [
    233
   ],
   "section": "Glomus tympanicum — Tinitus pulsatil și masă eritematoasă"
  },
  "learningObjective": "Recunoașterea identității histologice cu celelalte paraganglioame, a tinitusului pulsatil și a masei roșii în spatele timpanului translucid.",
  "optionRationales": [
   "Similitudinea cu glomusul carotidian, vagal și jugular este explicită.",
   "Tinitusul pulsatil unilateral și hipoacuzia sunt simptomele uzuale.",
   "Masa eritematoasă în spatele timpanului translucid este descrisă.",
   "Excizia chirurgicală este tratamentul de elecție.",
   "Masa albicioasă cu osteonecroză enzimatică este colesteatomul, nu glomusul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Schimbă masa roșie pulsatilă a glomusului cu masa albicioasă keratinizantă a colesteatomului."
  },
  "textbookExpressions": [
   "Glomus tympanicum",
   "tinitus pulsatil"
  ]
 },
 {
  "id": "orl-adv-114",
  "topicId": "orl",
  "type": "CM",
  "stem": "Valva nazală, localizată în porțiunea anterioară a cavității nazale:",
  "options": [
   "Este alcătuită din țesutul erectil al cornetului inferior, septul nazal și cartilajele nazale superioare laterale",
   "La adult este frecvent zona cea mai îngustă a tractului respirator, sediu al obstrucției prin deviație de sept sau hipertrofie de cornet inferior",
   "Este zona cea mai largă a căii aeriene, analog glotei adultului care tolerează edemul",
   "Drenajul lacrimal se face aici, prin meatul mijlociu, analog complexului ostio-meatal",
   "Plexul Kiesselbach se află pe cornetul inferior, nu pe sept"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este alcătuită din țesutul erectil al cornetului inferior, septul nazal și cartilajele nazale superioare laterale — Corect: Cele trei componente ale valvei sunt enumerate.\n\nLa adult este frecvent zona cea mai îngustă a tractului respirator, sediu al obstrucției prin deviație de sept sau hipertrofie de cornet inferior — Corect: Caracterul de zonă cea mai îngustă și cauzele de obstrucție (sept, cornet) sunt explicite.\n\nEste zona cea mai largă a căii aeriene, analog glotei adultului care tolerează edemul — Incorect: Glota adultului este mai mare și tolerează edemul; valva este îngustă.\n\nDrenajul lacrimal se face aici, prin meatul mijlociu, analog complexului ostio-meatal — Incorect: Canalul nazo-lacrimal se deschide în meatul inferior, nu la valvă prin meatul mijlociu.\n\nPlexul Kiesselbach se află pe cornetul inferior, nu pe sept — Incorect: Plexul Kiesselbach este pe septul nazal.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 561, Nasul — Valva nazală ca zonă cea mai îngustă (pagini PDF: 234).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    561
   ],
   "pdfPages": [
    234
   ],
   "section": "Nasul — Valva nazală ca zonă cea mai îngustă"
  },
  "learningObjective": "Identificarea valvei (cornet inferior erectil, sept, cartilaje superioare laterale) ca cel mai îngust segment respirator al adultului.",
  "optionRationales": [
   "Cele trei componente ale valvei sunt enumerate.",
   "Caracterul de zonă cea mai îngustă și cauzele de obstrucție (sept, cornet) sunt explicite.",
   "Glota adultului este mai mare și tolerează edemul; valva este îngustă.",
   "Canalul nazo-lacrimal se deschide în meatul inferior, nu la valvă prin meatul mijlociu.",
   "Plexul Kiesselbach este pe septul nazal."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă valva (cel mai îngust segment) în cel mai larg și mută drenajul lacrimal pe meatul mijlociu."
  },
  "textbookExpressions": [
   "Valva nazală",
   "cea mai îngustă"
  ]
 },
 {
  "id": "orl-adv-115",
  "topicId": "orl",
  "type": "CM",
  "stem": "Aerul inspirat, la ieșirea din nas, are ca ținte optime:",
  "options": [
   "Temperatura de 34°C, umiditate 80% și puține particule atmosferice",
   "Vene fără valve către orbită și sinusul cavernos, ceea ce permite diseminarea infecțiilor feței și sinusurilor către orbită și SNC",
   "Temperatura de 37°C și umiditate 100%, analog aerului alveolar",
   "Vene cu valve competente care blochează orice propagare către sinusul cavernos",
   "Inervație doar de la nervul II, fără fibre V, VII, simpatice sau parasimpatice"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Temperatura de 34°C, umiditate 80% și puține particule atmosferice — Corect: Cele trei ținte (34°, 80%, puține particule) sunt explicite.\n\nVene fără valve către orbită și sinusul cavernos, ceea ce permite diseminarea infecțiilor feței și sinusurilor către orbită și SNC — Corect: Comunicarea prin vene emisare fără valve cu orbita și sinusul cavernos este enunțată.\n\nTemperatura de 37°C și umiditate 100%, analog aerului alveolar — Incorect: 34°C și 80% nu sunt 37°C/100%.\n\nVene cu valve competente care blochează orice propagare către sinusul cavernos — Incorect: Absența valvelor, nu prezența lor, explică diseminarea.\n\nInervație doar de la nervul II, fără fibre V, VII, simpatice sau parasimpatice — Incorect: Nasul este inervat de I, V și VII plus simpatice și parasimpatice.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 561, Fiziologia nazală — 34°C, 80% umiditate și vene fără valve (pagini PDF: 234).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    561
   ],
   "pdfPages": [
    234
   ],
   "section": "Fiziologia nazală — 34°C, 80% umiditate și vene fără valve"
  },
  "learningObjective": "Cuplarea țintelor de condiționare a aerului (34°C, 80%) cu absența valvelor venoase către orbită și sinusul cavernos.",
  "optionRationales": [
   "Cele trei ținte (34°, 80%, puține particule) sunt explicite.",
   "Comunicarea prin vene emisare fără valve cu orbita și sinusul cavernos este enunțată.",
   "34°C și 80% nu sunt 37°C/100%.",
   "Absența valvelor, nu prezența lor, explică diseminarea.",
   "Nasul este inervat de I, V și VII plus simpatice și parasimpatice."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește 34°C/80% cu 37°C alveolar și inventează valve venoase care ar bloca propagarea către cavernos."
  },
  "textbookExpressions": [
   "34°",
   "80%"
  ]
 },
 {
  "id": "orl-adv-116",
  "topicId": "orl",
  "type": "CM",
  "stem": "Polipii nazali unilaterali, rinita virală și rinita hormonală:",
  "options": [
   "Polipii sunt rar unilaterali; un polip unilateral, mai ales cu sângerare, crește suspiciunea de neoplazie",
   "Sinuzita polipoasă este rară la copii și cere evaluare promptă pentru fibroză chistică sau imunodeficiență",
   "În guturai, regenerarea epiteliului are loc până în aproximativ ziua a 14-a, dar funcția ciliară poate întârzia săptămâni",
   "Estrogenii (sarcină, perioada premenstruală, contraceptive orale) produc congestie vasculară nazală",
   "Polipii unilaterali sunt varianta tipică a copilului, fără a necesita excluderea fibrozei chistice"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Polipii sunt rar unilaterali; un polip unilateral, mai ales cu sângerare, crește suspiciunea de neoplazie — Corect: Raritatea formei unilaterale și alerta de neoplazie sunt explicite.\n\nSinuzita polipoasă este rară la copii și cere evaluare promptă pentru fibroză chistică sau imunodeficiență — Corect: Evaluarea pentru FC sau imunodeficiență la copilul cu sinuzită polipoasă este cerută.\n\nÎn guturai, regenerarea epiteliului are loc până în aproximativ ziua a 14-a, dar funcția ciliară poate întârzia săptămâni — Corect: Ziua 14 a regenerării epiteliale, cu întârzierea cililor, este citată.\n\nEstrogenii (sarcină, perioada premenstruală, contraceptive orale) produc congestie vasculară nazală — Corect: Estrogenii ca cauză de congestie (sarcină, premenstruu, COC) sunt enunțați.\n\nPolipii unilaterali sunt varianta tipică a copilului, fără a necesita excluderea fibrozei chistice — Incorect: Forma unilaterală nu este tipică; la copil impune excluderea FC.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 564, Polipi unilaterali, ziua 14 a guturaiului și rinita de estrogen (pagini PDF: 237).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    564
   ],
   "pdfPages": [
    237
   ],
   "section": "Polipi unilaterali, ziua 14 a guturaiului și rinita de estrogen"
  },
  "learningObjective": "Alertarea pe polipul unilateral (neoplazie, FC la copil), pe regenerarea epitelială la 14 zile și pe congestia estrogenică.",
  "optionRationales": [
   "Raritatea formei unilaterale și alerta de neoplazie sunt explicite.",
   "Evaluarea pentru FC sau imunodeficiență la copilul cu sinuzită polipoasă este cerută.",
   "Ziua 14 a regenerării epiteliale, cu întârzierea cililor, este citată.",
   "Estrogenii ca cauză de congestie (sarcină, premenstruu, COC) sunt enunțați.",
   "Forma unilaterală nu este tipică; la copil impune excluderea FC."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează polipul unilateral ca variantă pediatrică banală, anulând alerta de neoplazie și de fibroză chistică."
  },
  "textbookExpressions": [
   "Polipii sunt rar unilaterali",
   "ziua a 14-a"
  ]
 },
 {
  "id": "orl-adv-117",
  "topicId": "orl",
  "type": "CM",
  "stem": "Rinita alergică neresponsivă la evitare și farmacoterapie, respectiv inflamația cronică nazală, se caracterizează prin:",
  "options": [
   "Cromoglicatul de sodiu topic previne degranularea mastocitelor",
   "Imunoterapia alergen-specifică stimulează reglarea sintezei IgE de către limfocitele T supresoare și cere ani de întreținere",
   "Dacă simptomele cronice persistă sub tratament, culturile și biopsia exclud TBC, sifilis, rinosclerom (Klebsiella rhinoscleromatis) și lepră",
   "Imunoterapia este eficientă și în rinitele non-IgE, după o singură injecție",
   "Rinoscleromul este o infecție virală autolimitată, analog guturaiului de 14 zile"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cromoglicatul de sodiu topic previne degranularea mastocitelor — Corect: Prevenirea degranulării mastocitelor de către cromoglicat este explicită.\n\nImunoterapia alergen-specifică stimulează reglarea sintezei IgE de către limfocitele T supresoare și cere ani de întreținere — Corect: Reglarea IgE prin T supresoare și durata de ani sunt descrise.\n\nDacă simptomele cronice persistă sub tratament, culturile și biopsia exclud TBC, sifilis, rinosclerom (Klebsiella rhinoscleromatis) și lepră — Corect: Klebsiella rhinoscleromatis figurează pe lista de infecții de exclus prin cultură/biopsie.\n\nImunoterapia este eficientă și în rinitele non-IgE, după o singură injecție — Incorect: Imunoterapia este eficientă doar în boala mediată de IgE și cere ani, nu o injecție.\n\nRinoscleromul este o infecție virală autolimitată, analog guturaiului de 14 zile — Incorect: Rinoscleromul este o infecție bacteriană (Klebsiella), nu un guturai viral.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 564, Rinita alergică — Cromoglicat, limfocite T și rinosclerom (pagini PDF: 237).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    564
   ],
   "pdfPages": [
    237
   ],
   "section": "Rinita alergică — Cromoglicat, limfocite T și rinosclerom"
  },
  "learningObjective": "Recunoașterea cromoglicatului, a imunoterapiei mediate de T supresoare pe ani și a biopsiei pentru rinosclerom/Klebsiella când simptomele cronice persistă.",
  "optionRationales": [
   "Prevenirea degranulării mastocitelor de către cromoglicat este explicită.",
   "Reglarea IgE prin T supresoare și durata de ani sunt descrise.",
   "Klebsiella rhinoscleromatis figurează pe lista de infecții de exclus prin cultură/biopsie.",
   "Imunoterapia este eficientă doar în boala mediată de IgE și cere ani, nu o injecție.",
   "Rinoscleromul este o infecție bacteriană (Klebsiella), nu un guturai viral."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde imunoterapia la non-IgE și transformă rinoscleromul (Klebsiella) într-un guturai de 14 zile."
  },
  "textbookExpressions": [
   "Cromoglicatul de sodiu",
   "rinoscleromul"
  ]
 },
 {
  "id": "orl-adv-118",
  "topicId": "orl",
  "type": "CM",
  "stem": "Fractura oaselor nazale, cele mai des fracturate oase ale corpului:",
  "options": [
   "Lovitura laterală înfundă un os nazal și deplasează lateral osul contralateral; lovitura frontală aplatizează și lărgește dorsum nasi",
   "Hematomul septal, între cartilaj și mucopericondru, trebuie drenat prompt pentru a preveni abcesul și resorbția, cu deformare „nas în șa”",
   "Lovitura severă transmisă posterior poate produce fractură nazo-orbito-etmoidală, cu rinolicvoree, hipertelorism și anosmie",
   "Fracturile nedeplasate impun reducere deschisă de principiu, analog deplasărilor septale complexe",
   "Hematomul septal se resorbe spontan, drenajul fiind rezervat nasului în șa deja constituit"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Lovitura laterală înfundă un os nazal și deplasează lateral osul contralateral; lovitura frontală aplatizează și lărgește dorsum nasi — Corect: Cele două tipare de deformare după direcția loviturii sunt explicite.\n\nHematomul septal, între cartilaj și mucopericondru, trebuie drenat prompt pentru a preveni abcesul și resorbția, cu deformare „nas în șa” — Corect: Drenajul prompt al hematomului septal pentru a preveni nasul în șa este cerut.\n\nLovitura severă transmisă posterior poate produce fractură nazo-orbito-etmoidală, cu rinolicvoree, hipertelorism și anosmie — Corect: Rinolicvoreea, hipertelorismul și anosmia fracturii NOE sunt enumerate.\n\nFracturile nedeplasate impun reducere deschisă de principiu, analog deplasărilor septale complexe — Incorect: Nedeplasatele nu necesită reducere; deschiderea este pentru leziunile complexe cu deplasare septală.\n\nHematomul septal se resorbe spontan, drenajul fiind rezervat nasului în șa deja constituit — Incorect: Drenajul este preventiv, nu se așteaptă nasul în șa.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 565, Fractura nazală — Nas în șa, NOE și direcția loviturii (pagini PDF: 238).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    565
   ],
   "pdfPages": [
    238
   ],
   "section": "Fractura nazală — Nas în șa, NOE și direcția loviturii"
  },
  "learningObjective": "Maparea loviturii laterale versus frontale, a urgenței hematomului septal (nas în șa) și a triadei NOE (LCR, hipertelorism, anosmie).",
  "optionRationales": [
   "Cele două tipare de deformare după direcția loviturii sunt explicite.",
   "Drenajul prompt al hematomului septal pentru a preveni nasul în șa este cerut.",
   "Rinolicvoreea, hipertelorismul și anosmia fracturii NOE sunt enumerate.",
   "Nedeplasatele nu necesită reducere; deschiderea este pentru leziunile complexe cu deplasare septală.",
   "Drenajul este preventiv, nu se așteaptă nasul în șa."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amână drenajul hematomului până după nasul în șa și cere reducere deschisă la nedeplasate."
  },
  "textbookExpressions": [
   "nas în şa",
   "nazo-orbito-etmoidală"
  ]
 },
 {
  "id": "orl-adv-119",
  "topicId": "orl",
  "type": "CS",
  "stem": "Tratamentul medicamentos empiric al sinuzitei acute necomplicate se face, de regulă, timp de:",
  "options": [
   "7–14 zile, cu amoxicilină-acid clavulanic, cefprozil, cefuroximă, claritromicină sau loracarbef, plus o cură scurtă de decongestionante topice și steroizi intranazali",
   "3 zile de ceftriaxonă parenteral, analog eșecului OMA",
   "48–72 de ore de observație fără antibiotic, analog OMA neclare",
   "3 luni, analog ferestrei OMS fără risc de limbaj",
   "O singură doză de amoxicilină 90 mg/kg, analog primei linii din OMA"
  ],
  "correct": [
   0
  ],
  "explanation": "7–14 zile, cu amoxicilină-acid clavulanic, cefprozil, cefuroximă, claritromicină sau loracarbef, plus o cură scurtă de decongestionante topice și steroizi intranazali — Corect: Intervalul 7–14 zile și lista de antibiotice plus decongestionant/steroid topic sunt explicite.\n\n3 zile de ceftriaxonă parenteral, analog eșecului OMA — Incorect: Ceftriaxona 3 zile este treapta de eșec a OMA, nu prima linie a sinuzitei.\n\n48–72 de ore de observație fără antibiotic, analog OMA neclare — Incorect: Observația 48–72 de ore este a OMA neclare.\n\n3 luni, analog ferestrei OMS fără risc de limbaj — Incorect: 3 luni este urmărirea OMS.\n\nO singură doză de amoxicilină 90 mg/kg, analog primei linii din OMA — Incorect: 90 mg/kg de amoxicilină este prima linie a OMA, nu durata sinuzitei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 565, Sinuzita acută — Durata 7–14 zile și spectrul empiric (pagini PDF: 238).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    565
   ],
   "pdfPages": [
    238
   ],
   "section": "Sinuzita acută — Durata 7–14 zile și spectrul empiric"
  },
  "learningObjective": "Memorarea ferestrei 7–14 zile și a listei de molecule (amox-clav, cefalosporine orale, claritromicină, loracarbef) plus topițe scurte.",
  "optionRationales": [
   "Intervalul 7–14 zile și lista de antibiotice plus decongestionant/steroid topic sunt explicite.",
   "Ceftriaxona 3 zile este treapta de eșec a OMA, nu prima linie a sinuzitei.",
   "Observația 48–72 de ore este a OMA neclare.",
   "3 luni este urmărirea OMS.",
   "90 mg/kg de amoxicilină este prima linie a OMA, nu durata sinuzitei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 7–14 zile cu ferestrele OMA (48–72 de ore, 3 zile de ceftriaxonă) și cu 3 luni ale OMS."
  },
  "textbookExpressions": [
   "7-14 zile",
   "loracarbef"
  ]
 },
 {
  "id": "orl-adv-120",
  "topicId": "orl",
  "type": "CS",
  "stem": "În infecția rinosinusală micotică invazivă a imunocompromisului, diagnosticul depinde de:",
  "options": [
   "Identificarea histologică a fungilor invazivi în specimene bioptice; exudatul nazal este insuficient",
   "Cultura din exudatul nazal, biopsia fiind superfluă dacă cornetele sunt negre",
   "Timpanometrie plată, analog efuziunii otice",
   "PCR pentru HSV, analog paraliziei Bell",
   "Teste cutanate cu extracte de polen, analog rinitei IgE"
  ],
  "correct": [
   0
  ],
  "explanation": "Identificarea histologică a fungilor invazivi în specimene bioptice; exudatul nazal este insuficient — Corect: Dependența diagnosticului de histologia biopsiei și insuficiența exudatului sunt explicite.\n\nCultura din exudatul nazal, biopsia fiind superfluă dacă cornetele sunt negre — Incorect: Exudatul este declarat insuficient; cornetele negre sunt un semn clinic, nu un substitut al biopsiei.\n\nTimpanometrie plată, analog efuziunii otice — Incorect: Timpanograma plată privește urechea medie.\n\nPCR pentru HSV, analog paraliziei Bell — Incorect: PCR HSV confirmă Bell-ul, nu mucormicoza.\n\nTeste cutanate cu extracte de polen, analog rinitei IgE — Incorect: Testele cutanate țin de rinita alergică.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 566, Infecțiile fungice rinosinusale — Biopsie, nu exudat (pagini PDF: 239).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    566
   ],
   "pdfPages": [
    239
   ],
   "section": "Infecțiile fungice rinosinusale — Biopsie, nu exudat"
  },
  "learningObjective": "Recunoașterea biopsiei cu fungi invazivi ca standard, exudatul nazal fiind declarat insuficient, lângă cornetele negre necrotice.",
  "optionRationales": [
   "Dependența diagnosticului de histologia biopsiei și insuficiența exudatului sunt explicite.",
   "Exudatul este declarat insuficient; cornetele negre sunt un semn clinic, nu un substitut al biopsiei.",
   "Timpanograma plată privește urechea medie.",
   "PCR HSV confirmă Bell-ul, nu mucormicoza.",
   "Testele cutanate țin de rinita alergică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește biopsia tisulară (singurul diagnostic) cu exudatul nazal sau cu PCR/teste cutanate din alte capitole."
  },
  "textbookExpressions": [
   "Exudatul nazal este insuficient",
   "cornetele negre"
  ]
 },
 {
  "id": "orl-adv-121",
  "topicId": "orl",
  "type": "CM",
  "stem": "Angiofibromul juvenil nazo-faringian:",
  "options": [
   "Se dezvoltă în fosa pterigomaxilară și se prezintă ca tumoră nazală unilaterală la băieții adolescenți, cu epistaxis și obstrucție",
   "Diagnosticul este clinic și radiologic, biopsia putând produce hemoragie riscantă; embolizarea preoperatorie reduce sângerarea la excizie",
   "Se biopsiază de rutină înaintea imagisticii, analog carcinomului scuamos oral",
   "Afectează fetele premenstruale, analog rinitei estrogenice",
   "Se monitorizează ca osteomul fronto-etmoidal asimptomatic, fără excizie"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Se dezvoltă în fosa pterigomaxilară și se prezintă ca tumoră nazală unilaterală la băieții adolescenți, cu epistaxis și obstrucție — Corect: Sediul pterigomaxilar, sexul, vârsta, epistaxisul și obstrucția sunt explicite.\n\nDiagnosticul este clinic și radiologic, biopsia putând produce hemoragie riscantă; embolizarea preoperatorie reduce sângerarea la excizie — Corect: Diagnosticul clinic/radiologic, riscul biopsiei și embolizarea preoperatorie sunt enunțate.\n\nSe biopsiază de rutină înaintea imagisticii, analog carcinomului scuamos oral — Incorect: Biopsia de rutină este tocmai gestul riscant.\n\nAfectează fetele premenstruale, analog rinitei estrogenice — Incorect: Entitatea este a băieților adolescenți, nu a fetelor cu rinită hormonală.\n\nSe monitorizează ca osteomul fronto-etmoidal asimptomatic, fără excizie — Incorect: Osteomul asimptomatic se monitorizează; angiofibromul se excizează după embolizare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 566, Angiofibromul juvenil — Fosa pterigomaxilară și interdicția biopsiei (pagini PDF: 239).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    566
   ],
   "pdfPages": [
    239
   ],
   "section": "Angiofibromul juvenil — Fosa pterigomaxilară și interdicția biopsiei"
  },
  "learningObjective": "Recunoașterea adolescentului masculin, a fosei pterigomaxilare și a interdicției de biopsie, cu embolizare preoperatorie.",
  "optionRationales": [
   "Sediul pterigomaxilar, sexul, vârsta, epistaxisul și obstrucția sunt explicite.",
   "Diagnosticul clinic/radiologic, riscul biopsiei și embolizarea preoperatorie sunt enunțate.",
   "Biopsia de rutină este tocmai gestul riscant.",
   "Entitatea este a băieților adolescenți, nu a fetelor cu rinită hormonală.",
   "Osteomul asimptomatic se monitorizează; angiofibromul se excizează după embolizare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere biopsia de rutină (contraindicată) și mută tumora pe profilul rinitei estrogenice sau al osteomului monitorizat."
  },
  "textbookExpressions": [
   "pterigomaxilare",
   "embolizarea preoperatorie"
  ]
 },
 {
  "id": "orl-adv-122",
  "topicId": "orl",
  "type": "CS",
  "stem": "Cea mai des întâlnită formă de cancer intranazal în rândul copiilor este:",
  "options": [
   "Rabdomiosarcomul, o tumoră a musculaturii striate; chirurgia este adesea redusă la procedură de diagnostic, după progresele chemo- și radioterapiei",
   "Osteomul fronto-etmoidal, cea mai frecventă tumoră a sinusurilor la adult",
   "Papilomul invertit, cu degenerare în 10–15%",
   "Neuroblastomul olfactiv (estezioneuroblastomul)",
   "Carcinomul scuamos, care reprezintă 90% din tumorile maligne orale ale adultului"
  ],
  "correct": [
   0
  ],
  "explanation": "Rabdomiosarcomul, o tumoră a musculaturii striate; chirurgia este adesea redusă la procedură de diagnostic, după progresele chemo- și radioterapiei — Corect: Textul numește rabdomiosarcomul cea mai des întâlnită formă de cancer intranazal la copii și reduce rolul chirurgiei la diagnostic.\n\nOsteomul fronto-etmoidal, cea mai frecventă tumoră a sinusurilor la adult — Incorect: Osteomul este cea mai frecventă tumoră sinusală (adesea benignă, la adult).\n\nPapilomul invertit, cu degenerare în 10–15% — Incorect: Papilomul invertit este al adultului, invaziv local.\n\nNeuroblastomul olfactiv (estezioneuroblastomul) — Incorect: Estezioneuroblastomul este o malignitate rară neuroectodermală.\n\nCarcinomul scuamos, care reprezintă 90% din tumorile maligne orale ale adultului — Incorect: 90% scuamos privește cavitatea orală/faringele adultului, nu cancerul intranazal pediatric.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 566, Neoplazii rinosinusale — Rabdomiosarcomul copilului (pagini PDF: 239).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    566
   ],
   "pdfPages": [
    239
   ],
   "section": "Neoplazii rinosinusale — Rabdomiosarcomul copilului"
  },
  "learningObjective": "Identificarea rabdomiosarcomului ca cel mai frecvent cancer intranazal pediatric, cu chirurgie adesea doar diagnostică.",
  "optionRationales": [
   "Textul numește rabdomiosarcomul cea mai des întâlnită formă de cancer intranazal la copii și reduce rolul chirurgiei la diagnostic.",
   "Osteomul este cea mai frecventă tumoră sinusală (adesea benignă, la adult).",
   "Papilomul invertit este al adultului, invaziv local.",
   "Estezioneuroblastomul este o malignitate rară neuroectodermală.",
   "90% scuamos privește cavitatea orală/faringele adultului, nu cancerul intranazal pediatric."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește rabdomiosarcomul pediatric cu osteomul, papilomul invertit sau scuamosul oral 90%, ierarhii din același paragraf de neoplazii."
  },
  "textbookExpressions": [
   "Rabdomiosarcomul",
   "copiilor"
  ]
 },
 {
  "id": "orl-adv-123",
  "topicId": "orl",
  "type": "CM",
  "stem": "Inervația limbii se caracterizează prin:",
  "options": [
   "Mișcările sunt controlate de perechi de mușchi extrinseci și intrinseci inervați de nervul hipoglos",
   "Senzația gustativă din două treimi anterioare este transmisă de nervul lingual către coarda timpanului, ramură a facialului",
   "Ramura linguală a glosofaringianului deservește fibrele gustative ale treimii posterioare",
   "Gustul celor două treimi anterioare trece prin nervul IX, analog reflexului nauseos",
   "Hipoglosul este strict senzitiv, motilitatea limbii depinzând de facial"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Mișcările sunt controlate de perechi de mușchi extrinseci și intrinseci inervați de nervul hipoglos — Corect: Inervația motorie prin hipoglos este explicită.\n\nSenzația gustativă din două treimi anterioare este transmisă de nervul lingual către coarda timpanului, ramură a facialului — Corect: Calea lingual–coarda timpanului–facial pentru cele două treimi anterioare este descrisă.\n\nRamura linguală a glosofaringianului deservește fibrele gustative ale treimii posterioare — Corect: Glosofaringianul lingual pentru treimea posterioară este enunțat.\n\nGustul celor două treimi anterioare trece prin nervul IX, analog reflexului nauseos — Incorect: IX nu deservește gustul celor două treimi anterioare.\n\nHipoglosul este strict senzitiv, motilitatea limbii depinzând de facial — Incorect: Hipoglosul este motor, nu strict senzitiv.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 566, Limba — Hipoglos, coarda timpanului și IX (pagini PDF: 239).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    566
   ],
   "pdfPages": [
    239
   ],
   "section": "Limba — Hipoglos, coarda timpanului și IX"
  },
  "learningObjective": "Separarea motilității (XII) de gustul anterior (lingual → coarda timpanului/VII) și de gustul posterior (IX).",
  "optionRationales": [
   "Inervația motorie prin hipoglos este explicită.",
   "Calea lingual–coarda timpanului–facial pentru cele două treimi anterioare este descrisă.",
   "Glosofaringianul lingual pentru treimea posterioară este enunțat.",
   "IX nu deservește gustul celor două treimi anterioare.",
   "Hipoglosul este motor, nu strict senzitiv."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește VII (coarda) cu IX pe cele două treimi anterioare și face din hipoglos un nerv senzitiv."
  },
  "textbookExpressions": [
   "coarda timpanului",
   "glosofaringian"
  ]
 },
 {
  "id": "orl-adv-124",
  "topicId": "orl",
  "type": "CS",
  "stem": "În planificarea corecției cheiloschizisului se aplică regula lui 10, adică atunci când copilul:",
  "options": [
   "Are peste 10 săptămâni, cântărește peste 4,53 kg și are Hb peste 10",
   "Are peste 10 luni, 10 kg și Hb 14, analog adultului",
   "Este operat înainte de 2 ani, analog palatoschizisului pentru limbaj",
   "Are 1,5/1.000, analog incidenței displaziei de șold",
   "Prezintă sindrom Pierre Robin, cu indicație de ham Pavlik"
  ],
  "correct": [
   0
  ],
  "explanation": "Are peste 10 săptămâni, cântărește peste 4,53 kg și are Hb peste 10 — Corect: Cele trei praguri ale regulii lui 10 sunt explicite.\n\nAre peste 10 luni, 10 kg și Hb 14, analog adultului — Incorect: 10 luni/10 kg/Hb 14 nu sunt cifrele din text.\n\nEste operat înainte de 2 ani, analog palatoschizisului pentru limbaj — Incorect: Înainte de 2 ani este ținta palatoschizisului pentru limbaj, nu regula lui 10 a buzei.\n\nAre 1,5/1.000, analog incidenței displaziei de șold — Incorect: 1,5/1.000 este incidența DDH.\n\nPrezintă sindrom Pierre Robin, cu indicație de ham Pavlik — Incorect: Pierre Robin se tratează prin biberon special, fixarea limbii sau traheostomie, nu prin Pavlik.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 569, Cheiloschizisul — Regula lui 10 (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    569
   ],
   "pdfPages": [
    242
   ],
   "section": "Cheiloschizisul — Regula lui 10"
  },
  "learningObjective": "Memorarea triadei >10 săptămâni, >4,53 kg, Hb >10 ca prag de programare a cheiloplastiei.",
  "optionRationales": [
   "Cele trei praguri ale regulii lui 10 sunt explicite.",
   "10 luni/10 kg/Hb 14 nu sunt cifrele din text.",
   "Înainte de 2 ani este ținta palatoschizisului pentru limbaj, nu regula lui 10 a buzei.",
   "1,5/1.000 este incidența DDH.",
   "Pierre Robin se tratează prin biberon special, fixarea limbii sau traheostomie, nu prin Pavlik."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 10 săptămâni/4,53 kg cu 10 luni/10 kg și cu fereastra de 2 ani a palatului."
  },
  "textbookExpressions": [
   "regula lui 1 O",
   ">4,53 kg"
  ]
 },
 {
  "id": "orl-adv-125",
  "topicId": "orl",
  "type": "CM",
  "stem": "Corecția palatoschizisului se realizează înainte de vârsta de 2 ani pentru a permite dezvoltarea normală a limbajului. În plus:",
  "options": [
   "Pacienții prezintă constant otită medie seroasă cronică, deoarece musculatura palatului este redirecționată, cu afectarea deschiderii trompei lui Eustachio",
   "Tuburi de ventilație auriculară sunt inserate, de obicei, pentru a trata OMS recurentă",
   "Palatoschizisul nu afectează trompa, OMS fiind întâmplătoare",
   "Cheiloplastia se amână după 2 ani, regula lui 10 neavând rol în primele luni",
   "Incompetența velo-faringiană îmbunătățește presiunile de deglutiție și deschide sfincterul esofagian superior"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Pacienții prezintă constant otită medie seroasă cronică, deoarece musculatura palatului este redirecționată, cu afectarea deschiderii trompei lui Eustachio — Corect: OMS constantă prin redirecționarea musculaturii palatului și afectarea trompei este explicită.\n\nTuburi de ventilație auriculară sunt inserate, de obicei, pentru a trata OMS recurentă — Corect: Inserția uzuală a tuburilor de ventilație este enunțată.\n\nPalatoschizisul nu afectează trompa, OMS fiind întâmplătoare — Incorect: Textul leagă explicit palatoschizisul de OMS.\n\nCheiloplastia se amână după 2 ani, regula lui 10 neavând rol în primele luni — Incorect: Cheiloplastia începe din primele luni, după regula lui 10.\n\nIncompetența velo-faringiană îmbunătățește presiunile de deglutiție și deschide sfincterul esofagian superior — Incorect: Incompetența velo-faringiană scade presiunile de deglutiție și împiedică deschiderea sfincterului esofagian superior.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 569, Palatoschizisul — OMS prin musculatura palatului și tuburi (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    569
   ],
   "pdfPages": [
    242
   ],
   "section": "Palatoschizisul — OMS prin musculatura palatului și tuburi"
  },
  "learningObjective": "Legarea redirecționării mușchilor palatini de OMS cronică și de inserția de tuburi de ventilație, alături de ținta de 2 ani pentru limbaj.",
  "optionRationales": [
   "OMS constantă prin redirecționarea musculaturii palatului și afectarea trompei este explicită.",
   "Inserția uzuală a tuburilor de ventilație este enunțată.",
   "Textul leagă explicit palatoschizisul de OMS.",
   "Cheiloplastia începe din primele luni, după regula lui 10.",
   "Incompetența velo-faringiană scade presiunile de deglutiție și împiedică deschiderea sfincterului esofagian superior."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă legătura palat–trompa lui Eustachio și inversează ferestrele buzei (luni) versus palatului (înainte de 2 ani)."
  },
  "textbookExpressions": [
   "înainte de vârsta de 2 ani",
   "otită medie seroasă"
  ]
 },
 {
  "id": "orl-adv-126",
  "topicId": "orl",
  "type": "CS",
  "stem": "Apneea obstructivă în somn se definește, pe somnografie, prin scăderea semnalului termic oro-nazal cu cel puțin:",
  "options": [
   "90% din valoarea de bază, pentru cel puțin 10 secunde",
   "50% timp de 50% din noapte, analog PIV-ului",
   "10% timp de 10–12 săptămâni, analog lichidului post-OMA",
   "60% din ciclu, analog fazei de sprijin a mersului",
   "25%, analog mortalității fasceitei necrozante"
  ],
  "correct": [
   0
  ],
  "explanation": "90% din valoarea de bază, pentru cel puțin 10 secunde — Corect: Pragurile 90% și 10 secunde sunt explicite.\n\n50% timp de 50% din noapte, analog PIV-ului — Incorect: 50% este PIV-ul vocal.\n\n10% timp de 10–12 săptămâni, analog lichidului post-OMA — Incorect: 10–12 săptămâni este persistența lichidului după OMA.\n\n60% din ciclu, analog fazei de sprijin a mersului — Incorect: 60% este faza de sprijin a mersului, din capitolul de ortopedie, nu definiția apneei.\n\n25%, analog mortalității fasceitei necrozante — Incorect: 25% este mortalitatea fasceitei necrozante.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 569, Apneea de somn — Pragul 90% timp de 10 secunde (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    569
   ],
   "pdfPages": [
    242
   ],
   "section": "Apneea de somn — Pragul 90% timp de 10 secunde"
  },
  "learningObjective": "Memorarea definiției polisomnografice: scădere ≥90% a senzorului termic, ≥10 secunde.",
  "optionRationales": [
   "Pragurile 90% și 10 secunde sunt explicite.",
   "50% este PIV-ul vocal.",
   "10–12 săptămâni este persistența lichidului după OMA.",
   "60% este faza de sprijin a mersului, din capitolul de ortopedie, nu definiția apneei.",
   "25% este mortalitatea fasceitei necrozante."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 90%/10 secunde cu alte procente-prag din bancă (50%, 10%, 60%, 25%)."
  },
  "textbookExpressions": [
   "90% din valoarea de bază",
   "1 O secunde"
  ]
 },
 {
  "id": "orl-adv-127",
  "topicId": "orl",
  "type": "CM",
  "stem": "Apneea obstructivă a adultului obez, respectiv a copilului, se deosebesc prin:",
  "options": [
   "La adult, obstrucția nazală și circumferința mare a gâtului sunt frecvente; CPAP nocturn este tratamentul, iar scăderea ponderală până la greutatea ideală este de obicei curativă",
   "La copii, IMC este de obicei normal, dar este prezentă hipertrofia adenoidiană și amigdaliană",
   "Dacă adultul nu tolerează CPAP sau nu slăbește, pot ajuta septoplastia, turbinoreducția, tonsilectomia sau uvulo-palato-faringoplastia",
   "La copil, CPAP înlocuiește de principiu adenotonsilectomia, IMC-ul fiind crescut analog adultului",
   "Traheostomia este primul gest la adultul obez, înaintea oricărui CPAP"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "La adult, obstrucția nazală și circumferința mare a gâtului sunt frecvente; CPAP nocturn este tratamentul, iar scăderea ponderală până la greutatea ideală este de obicei curativă — Corect: Obstrucția nazală, circumferința gâtului, CPAP și caracterul curativ al scăderii ponderale sunt explicite.\n\nLa copii, IMC este de obicei normal, dar este prezentă hipertrofia adenoidiană și amigdaliană — Corect: IMC normal plus hipertrofia adenotonsilară la copil sunt enunțate.\n\nDacă adultul nu tolerează CPAP sau nu slăbește, pot ajuta septoplastia, turbinoreducția, tonsilectomia sau uvulo-palato-faringoplastia — Corect: Lista de recalibrări chirurgicale (septoplastie, turbină, tonsile, UPPP) este citată.\n\nLa copil, CPAP înlocuiește de principiu adenotonsilectomia, IMC-ul fiind crescut analog adultului — Incorect: La copil, hipertrofia adenotonsilară este mecanismul, nu IMC-ul de adult; CPAP nu înlocuiește de principiu adenotonsilectomia.\n\nTraheostomia este primul gest la adultul obez, înaintea oricărui CPAP — Incorect: Traheostomia este rezervată cazurilor severe, nu este primul gest.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 569, Apneea de somn — Adult (CPAP, gât) versus copil (adenoizi) (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    569
   ],
   "pdfPages": [
    242
   ],
   "section": "Apneea de somn — Adult (CPAP, gât) versus copil (adenoizi)"
  },
  "learningObjective": "Contrastarea adultului obez cu gât gros (CPAP, scădere ponderală, UPPP) cu copilul normoponderal cu hipertrofie adenotonsilară.",
  "optionRationales": [
   "Obstrucția nazală, circumferința gâtului, CPAP și caracterul curativ al scăderii ponderale sunt explicite.",
   "IMC normal plus hipertrofia adenotonsilară la copil sunt enunțate.",
   "Lista de recalibrări chirurgicale (septoplastie, turbină, tonsile, UPPP) este citată.",
   "La copil, hipertrofia adenotonsilară este mecanismul, nu IMC-ul de adult; CPAP nu înlocuiește de principiu adenotonsilectomia.",
   "Traheostomia este rezervată cazurilor severe, nu este primul gest."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie copilului IMC-ul adultului și pune traheostomia înaintea CPAP-ului."
  },
  "textbookExpressions": [
   "CPAP",
   "hipertrofia adenoidiană"
  ]
 },
 {
  "id": "orl-adv-128",
  "topicId": "orl",
  "type": "CS",
  "stem": "Dintre tumorile maligne ale cavității orale și faringelui, ponderea carcinoamelor scuamoase este de circa:",
  "options": [
   "90%; la buză prognosticul este mai bun decât în cavitatea orală, dar mai agresiv decât scuamoasele cutanate similare",
   "10%, analog raportului cancer laringian/pulmonar",
   "5%, analog celorlalte histologii laringiene în afara scuamosului",
   "50%, analog PIV-ului vocal",
   "75%, analog presbiacuziei până la 80 de ani"
  ],
  "correct": [
   0
  ],
  "explanation": "90%; la buză prognosticul este mai bun decât în cavitatea orală, dar mai agresiv decât scuamoasele cutanate similare — Corect: Ponderea de 90% și comparația prognostică buză–cavitate orală–piele sunt explicite.\n\n10%, analog raportului cancer laringian/pulmonar — Incorect: 10% este incidența cancerului laringian față de pulmonar.\n\n5%, analog celorlalte histologii laringiene în afara scuamosului — Incorect: Sub 5% sunt celelalte malignități laringiene.\n\n50%, analog PIV-ului vocal — Incorect: 50% este PIV.\n\n75%, analog presbiacuziei până la 80 de ani — Incorect: 75% este presbiacuzia.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 569, Carcinomul oral — 90% scuamos și prognosticul buzei (pagini PDF: 242).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    569
   ],
   "pdfPages": [
    242
   ],
   "section": "Carcinomul oral — 90% scuamos și prognosticul buzei"
  },
  "learningObjective": "Memorarea celor 90% scuamoase și a poziției prognostice a buzei (mai bună decât gura, mai agresivă decât pielea).",
  "optionRationales": [
   "Ponderea de 90% și comparația prognostică buză–cavitate orală–piele sunt explicite.",
   "10% este incidența cancerului laringian față de pulmonar.",
   "Sub 5% sunt celelalte malignități laringiene.",
   "50% este PIV.",
   "75% este presbiacuzia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 90% scuamos oral cu 10% laringe/pulmonar și cu 5% non-scuamos laringian."
  },
  "textbookExpressions": [
   "90% sunt carcinoame",
   "buzei"
  ]
 },
 {
  "id": "orl-adv-129",
  "topicId": "orl",
  "type": "CM",
  "stem": "Laringomalacia, dincolo de ponderea de 60% a stridorului pediatric, se caracterizează prin:",
  "options": [
   "Prezență la naștere, adesea la prematuri; majoritatea simptomelor apar în primele 2 luni",
   "Stridor agravat în decubit dorsal sau la hrănire; diagnostic prin laringoscopie flexibilă cu colaps în ventilație spontană",
   "Remisie spontană până în al doilea an de viață; părinții evită supinația, mai ales în somn",
   "Supraglotoplastia este rezervată apneei alarmante și retardului de creștere",
   "Stridorul se ameliorează în decubit dorsal și impune traheopexie, analog traheomalaciei"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Prezență la naștere, adesea la prematuri; majoritatea simptomelor apar în primele 2 luni — Corect: Debutul la naștere/prematuri și fereastra de 2 luni sunt explicite.\n\nStridor agravat în decubit dorsal sau la hrănire; diagnostic prin laringoscopie flexibilă cu colaps în ventilație spontană — Corect: Agravarea în decubit/hrănire și laringoscopia flexibilă sunt descrise.\n\nRemisie spontană până în al doilea an de viață; părinții evită supinația, mai ales în somn — Corect: Remisia până în anul 2 și evitarea supinației sunt enunțate.\n\nSupraglotoplastia este rezervată apneei alarmante și retardului de creștere — Corect: Supraglotoplastia pentru apnee și eșec de creștere este citată.\n\nStridorul se ameliorează în decubit dorsal și impune traheopexie, analog traheomalaciei — Incorect: Agravarea, nu ameliorarea, este în decubit; traheopexia este a traheomalaciei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 573, Laringomalacia — Decubit, 2 luni, remisie în anul 2, supraglotoplastie (pagini PDF: 246).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    573
   ],
   "pdfPages": [
    246
   ],
   "section": "Laringomalacia — Decubit, 2 luni, remisie în anul 2, supraglotoplastie"
  },
  "learningObjective": "Completarea epidemiologiei de 60% cu agravarea în supinație, laringoscopia flexibilă, remisia până la 2 ani și indicația îngustă de supraglotoplastie.",
  "optionRationales": [
   "Debutul la naștere/prematuri și fereastra de 2 luni sunt explicite.",
   "Agravarea în decubit/hrănire și laringoscopia flexibilă sunt descrise.",
   "Remisia până în anul 2 și evitarea supinației sunt enunțate.",
   "Supraglotoplastia pentru apnee și eșec de creștere este citată.",
   "Agravarea, nu ameliorarea, este în decubit; traheopexia este a traheomalaciei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează efectul decubitului și înlocuiește supraglotoplastia cu traheopexia traheomalaciei."
  },
  "textbookExpressions": [
   "decubit dorsal",
   "al doilea an de viaţă"
  ]
 },
 {
  "id": "orl-adv-130",
  "topicId": "orl",
  "type": "CM",
  "stem": "Traheomalacia și stenoza subglotică a copilului:",
  "options": [
   "Traheomalacia produce stridor expirator sau bifazic prin colaps antero-posterior; remisia este de regulă în primele 18 luni",
   "La copii, spațiul subglotic este cea mai îngustă regiune a căii aeriene superioare",
   "Exacerbările stenozei ușoare răspund de obicei la epinefrină racemică nebulizată și corticosteroizi sistemici",
   "Diafragmele congenitale se formează când recanalizarea embrionară a laringelui eșuează",
   "Subglota adultului este mai îngustă decât a copilului, analog glotei care nu tolerează edemul"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Traheomalacia produce stridor expirator sau bifazic prin colaps antero-posterior; remisia este de regulă în primele 18 luni — Corect: Stridorul expirator/bifazic, colapsul AP și 18 luni sunt explicite.\n\nLa copii, spațiul subglotic este cea mai îngustă regiune a căii aeriene superioare — Corect: Subglota ca cea mai îngustă regiune la copil este enunțată.\n\nExacerbările stenozei ușoare răspund de obicei la epinefrină racemică nebulizată și corticosteroizi sistemici — Corect: Epinefrina racemică și steroizii sistemici sunt tratamentul exacerbărilor.\n\nDiafragmele congenitale se formează când recanalizarea embrionară a laringelui eșuează — Corect: Eșecul recanalizării embrionare ca origine a diafragmelor este descris.\n\nSubglota adultului este mai îngustă decât a copilului, analog glotei care nu tolerează edemul — Incorect: Glota adultului este mai mare și tolerează edemul; subglota copilului este îngustă, nu invers.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 573, Calea aeriană pediatrică — Traheomalacie 18 luni și subglota îngustă (pagini PDF: 246).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    573
   ],
   "pdfPages": [
    246
   ],
   "section": "Calea aeriană pediatrică — Traheomalacie 18 luni și subglota îngustă"
  },
  "learningObjective": "Integrarea colapsului AP cu remisia la 18 luni, a subglotei ca cel mai îngust segment pediatric și a adrenalinei racemice, plus diafragmele din eșecul recanalizării.",
  "optionRationales": [
   "Stridorul expirator/bifazic, colapsul AP și 18 luni sunt explicite.",
   "Subglota ca cea mai îngustă regiune la copil este enunțată.",
   "Epinefrina racemică și steroizii sistemici sunt tratamentul exacerbărilor.",
   "Eșecul recanalizării embrionare ca origine a diafragmelor este descris.",
   "Glota adultului este mai mare și tolerează edemul; subglota copilului este îngustă, nu invers."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește calibrul subglotei copil versus adult și mută remisia de 18 luni pe o stenoză care s-ar agrava la adult."
  },
  "textbookExpressions": [
   "18 luni de viaţă",
   "epinefrina racemică"
  ]
 },
 {
  "id": "orl-adv-131",
  "topicId": "orl",
  "type": "CM",
  "stem": "Un copil cu epiglotită, dincolo de agentul H. influenzae și de interdicția apăsătorului de limbă:",
  "options": [
   "Incidența a scăzut substanțial după vaccinul anti-H. influenzae",
   "Adoptă o poziție cu toracele ridicat și capul în hiperextensie, care aliniază laringele și traheea",
   "Odată calea aeriană asigurată, se preferă intubația nazo-traheală datorită stabilității superioare",
   "Vaccinul a crescut incidența, analog trecerii de la otita externă malignă la cea necrotizantă",
   "Intubația oro-traheală este preferată nazo-trahealei, analog cricotirotomiei adultului"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Incidența a scăzut substanțial după vaccinul anti-H. influenzae — Corect: Scăderea incidenței după vaccin este explicită.\n\nAdoptă o poziție cu toracele ridicat și capul în hiperextensie, care aliniază laringele și traheea — Corect: Poziția de aliniere laringe-trahee este descrisă.\n\nOdată calea aeriană asigurată, se preferă intubația nazo-traheală datorită stabilității superioare — Corect: Preferința nazo-traheală pentru stabilitate este enunțată.\n\nVaccinul a crescut incidența, analog trecerii de la otita externă malignă la cea necrotizantă — Incorect: Vaccinul a scăzut, nu a crescut, incidența.\n\nIntubația oro-traheală este preferată nazo-trahealei, analog cricotirotomiei adultului — Incorect: Nazo-traheala este preferată oro-trahealei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 574, Epiglotita — Vaccin, poziție de hiperextensie și intubație nazală (pagini PDF: 247).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    574
   ],
   "pdfPages": [
    247
   ],
   "section": "Epiglotita — Vaccin, poziție de hiperextensie și intubație nazală"
  },
  "learningObjective": "Adăugarea scăderii post-vaccinale, a poziției cu toracele ridicat/cap în hiperextensie și a preferinței nazo-traheale, peste agentul și apăsătorul deja cunoscuți.",
  "optionRationales": [
   "Scăderea incidenței după vaccin este explicită.",
   "Poziția de aliniere laringe-trahee este descrisă.",
   "Preferința nazo-traheală pentru stabilitate este enunțată.",
   "Vaccinul a scăzut, nu a crescut, incidența.",
   "Nazo-traheala este preferată oro-trahealei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează impactul vaccinului și preferința nazo- versus oro-traheală."
  },
  "textbookExpressions": [
   "vaccinului anti-H. influenzae",
   "nazo-traheal"
  ]
 },
 {
  "id": "orl-adv-132",
  "topicId": "orl",
  "type": "CM",
  "stem": "Papilomatoza laringiană se tratează prin:",
  "options": [
   "Ablație laser endoscopică; radioterapia este mai puțin eficientă",
   "Terapii sistemice în studiu: α-interferon, ribavirină, aciclovir și indole-3, pentru cazurile severe",
   "Traheotomie de primă intenție la copil, pentru a preveni însămânțarea distală",
   "Radioterapie ca tratament de elecție, analog carcinomului glotic mic",
   "β-blocant, analog hemangiomului subglotic care regresează la 4 ani"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Ablație laser endoscopică; radioterapia este mai puțin eficientă — Corect: Ablația laser și eficiența mai mică a radioterapiei sunt explicite.\n\nTerapii sistemice în studiu: α-interferon, ribavirină, aciclovir și indole-3, pentru cazurile severe — Corect: α-interferonul, ribavirina, aciclovirul și indole-3 sunt enumerate ca terapii în studiu.\n\nTraheotomie de primă intenție la copil, pentru a preveni însămânțarea distală — Incorect: Traheostomia trebuie evitată la copil din riscul de însămânțare.\n\nRadioterapie ca tratament de elecție, analog carcinomului glotic mic — Incorect: Radioterapia este mai puțin eficientă; la glota mică fără ganglioni este o opțiune oncologică, nu a papilomului.\n\nβ-blocant, analog hemangiomului subglotic care regresează la 4 ani — Incorect: β-blocantul este al hemangiomului subglotic.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 576, Papilomatoza laringiană — Laser versus radioterapie și antivirale în studiu (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    576
   ],
   "pdfPages": [
    249
   ],
   "section": "Papilomatoza laringiană — Laser versus radioterapie și antivirale în studiu"
  },
  "learningObjective": "Recunoașterea laserului endoscopic ca tratament, a ineficienței relative a radioterapiei și a antiviraleelor/interferonului încă în studiu.",
  "optionRationales": [
   "Ablația laser și eficiența mai mică a radioterapiei sunt explicite.",
   "α-interferonul, ribavirina, aciclovirul și indole-3 sunt enumerate ca terapii în studiu.",
   "Traheostomia trebuie evitată la copil din riscul de însămânțare.",
   "Radioterapia este mai puțin eficientă; la glota mică fără ganglioni este o opțiune oncologică, nu a papilomului.",
   "β-blocantul este al hemangiomului subglotic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune traheotomia sau radioterapia (sau β-blocantul hemangiomului) în locul laserului, trei capcane din același paragraf de leziuni vasculare și papilare."
  },
  "textbookExpressions": [
   "ablaţia laser",
   "a-interferon"
  ]
 },
 {
  "id": "orl-adv-133",
  "topicId": "orl",
  "type": "CS",
  "stem": "Pentru tumorile glotice mici, superficiale, fără extensie paraglotică și fără adenopatii, chirurgia și radioterapia oferă la 3 ani o rată de supraviețuire de:",
  "options": [
   "Peste 90%",
   "Circa 10%, analog raportului laringe/pulmonar",
   "Sub 5%, analog histologiilor non-scuamoase",
   "70% în minus, analog impactului adenopatiei cervicale la 5 ani",
   "25%, analog mortalității fasceitei necrozante"
  ],
  "correct": [
   0
  ],
  "explanation": "Peste 90% — Corect: Rata >90% la 3 ani pentru ambele modalități, la leziuni glotice mici fără extensie ganglionară, este explicită.\n\nCirca 10%, analog raportului laringe/pulmonar — Incorect: 10% este incidența față de cancerul pulmonar.\n\nSub 5%, analog histologiilor non-scuamoase — Incorect: Sub 5% sunt celelalte histologii.\n\n70% în minus, analog impactului adenopatiei cervicale la 5 ani — Incorect: Adenopatia reduce supraviețuirea la 5 ani cu până la 70%, nu este rata glotei mici.\n\n25%, analog mortalității fasceitei necrozante — Incorect: 25% este mortalitatea fasceitei.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 576, Carcinomul glotic mic — Supraviețuire >90% la 3 ani (pagini PDF: 249).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    576
   ],
   "pdfPages": [
    249
   ],
   "section": "Carcinomul glotic mic — Supraviețuire >90% la 3 ani"
  },
  "learningObjective": "Memorarea supraviețuirii >90% la 3 ani pentru glota mică tratată prin chirurgie sau radioterapie, distinctă de scăderea cu 70% pe care o aduce adenopatia.",
  "optionRationales": [
   "Rata >90% la 3 ani pentru ambele modalități, la leziuni glotice mici fără extensie ganglionară, este explicită.",
   "10% este incidența față de cancerul pulmonar.",
   "Sub 5% sunt celelalte histologii.",
   "Adenopatia reduce supraviețuirea la 5 ani cu până la 70%, nu este rata glotei mici.",
   "25% este mortalitatea fasceitei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează >90% la 3 ani cu scăderea de 70% indusă de adenopatie și cu 10% laringe/pulmonar."
  },
  "textbookExpressions": [
   ">90%",
   "corzilor vocale"
  ]
 },
 {
  "id": "orl-adv-134",
  "topicId": "orl",
  "type": "CM",
  "stem": "Adenita cervicală profundă a adultului, de regulă de origine dentară:",
  "options": [
   "CT delimitează abcesul; la copil CT poate fi înșelător, interpretând flegmonul ca abces",
   "Incizia cervicală laterală se face cu prudență, ganglionii și abcesele fiind în teaca carotidiană",
   "Nedrenat, abcesul poate fuza de-a lungul planurilor până la mediastin, cu morbiditate și mortalitate crescute",
   "Incizia mediană tip Sistrunk este calea de drenaj, analog chistului tireoglos",
   "La copil, CT distinge infailibil abcesul de flegmon, făcând inutilă prudența operatorie"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "CT delimitează abcesul; la copil CT poate fi înșelător, interpretând flegmonul ca abces — Corect: CT fidel la adult și înșelător la copil (flegmon ca abces) este explicit.\n\nIncizia cervicală laterală se face cu prudență, ganglionii și abcesele fiind în teaca carotidiană — Corect: Incizia laterală prudentă în teaca carotidă este descrisă.\n\nNedrenat, abcesul poate fuza de-a lungul planurilor până la mediastin, cu morbiditate și mortalitate crescute — Corect: Fuzarea mediastinală cu morbiditate/mortalitate crescute este enunțată.\n\nIncizia mediană tip Sistrunk este calea de drenaj, analog chistului tireoglos — Incorect: Sistrunk este operația chistului tireoglos, nu drenajul abcesului profund.\n\nLa copil, CT distinge infailibil abcesul de flegmon, făcând inutilă prudența operatorie — Incorect: La copil CT poate fi înșelător, nu infailibil.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 580, Abcesul cervical profund — Teaca carotidă, mediastin și CT pediatric (pagini PDF: 253).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    580
   ],
   "pdfPages": [
    253
   ],
   "section": "Abcesul cervical profund — Teaca carotidă, mediastin și CT pediatric"
  },
  "learningObjective": "Recunoașterea capcanei CT-ului pediatric (flegmon vs abces), a tecii carotidiene și a riscului de fuzare mediastinală.",
  "optionRationales": [
   "CT fidel la adult și înșelător la copil (flegmon ca abces) este explicit.",
   "Incizia laterală prudentă în teaca carotidă este descrisă.",
   "Fuzarea mediastinală cu morbiditate/mortalitate crescute este enunțată.",
   "Sistrunk este operația chistului tireoglos, nu drenajul abcesului profund.",
   "La copil CT poate fi înșelător, nu infailibil."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere Sistrunk ca drenaj și tratează CT-ul pediatric ca infailibil, două erori de gât congenital versus infecțios."
  },
  "textbookExpressions": [
   "teaca carotidiană",
   "mediastinal"
  ]
 },
 {
  "id": "orl-adv-135",
  "topicId": "orl",
  "type": "CM",
  "stem": "Adenitele cervicale micobacteriene la copil, comparativ cu scrofula adultului:",
  "options": [
   "Cazurile cu bacterii atipice (Mycobacterium avium-intracellulare) sunt mai frecvente la copii decât adenitele tuberculoase",
   "Se prezintă ca formațiune nedureroasă fluctuentă, adesea parotidiană sau submandibulară, cu tegument violaceu; neglijată, fistulizează",
   "Tratamentul optim al atipicelor rezistente este excizia grupelor ganglionare; antibioticele sunt rezervate recurențelor sau rezecției parțiale",
   "Scrofula (adenita TBC) se tratează optim chirurgical, fără antibiotic, analog atipicelor",
   "Majoritatea pacienților cu scrofulă asociază leziuni pulmonare concomitente"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Cazurile cu bacterii atipice (Mycobacterium avium-intracellulare) sunt mai frecvente la copii decât adenitele tuberculoase — Corect: Predominanța atipicelor față de TBC la copii este explicită.\n\nSe prezintă ca formațiune nedureroasă fluctuentă, adesea parotidiană sau submandibulară, cu tegument violaceu; neglijată, fistulizează — Corect: Forma fluctuentă, sediul parotidian/submandibular, violaceul și fistulizarea sunt descrise.\n\nTratamentul optim al atipicelor rezistente este excizia grupelor ganglionare; antibioticele sunt rezervate recurențelor sau rezecției parțiale — Corect: Excizia ca tratament optim al atipicelor, cu antibiotic la recurență/rezecție parțială, este enunțată.\n\nScrofula (adenita TBC) se tratează optim chirurgical, fără antibiotic, analog atipicelor — Incorect: Scrofula se tratează optim cu antibiotice; chirurgia este adjuvantă pentru histologie.\n\nMajoritatea pacienților cu scrofulă asociază leziuni pulmonare concomitente — Incorect: Textul notează că, în mod curios, majoritatea nu asociază leziuni pulmonare.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 580, Adenita micobacteriană — MAC pediatric versus scrofulă (pagini PDF: 253).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    580
   ],
   "pdfPages": [
    253
   ],
   "section": "Adenita micobacteriană — MAC pediatric versus scrofulă"
  },
  "learningObjective": "Contrastarea predilecției MAC la copil (excizie, tegument violaceu) cu scrofula tratată antibiotic, adesea fără leziuni pulmonare.",
  "optionRationales": [
   "Predominanța atipicelor față de TBC la copii este explicită.",
   "Forma fluctuentă, sediul parotidian/submandibular, violaceul și fistulizarea sunt descrise.",
   "Excizia ca tratament optim al atipicelor, cu antibiotic la recurență/rezecție parțială, este enunțată.",
   "Scrofula se tratează optim cu antibiotice; chirurgia este adjuvantă pentru histologie.",
   "Textul notează că, în mod curios, majoritatea nu asociază leziuni pulmonare."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește tratamentul (excizie la atipice, antibiotic la scrofulă) și atribuie scrofula o leziune pulmonară concomitentă pe care textul o neagă."
  },
  "textbookExpressions": [
   "avium-intracellulare",
   "violacee"
  ]
 },
 {
  "id": "orl-adv-136",
  "topicId": "orl",
  "type": "CM",
  "stem": "Indicațiile traheotomiei, conform tabelului 27-12, includ:",
  "options": [
   "Ocolirea obstrucției căii aeriene superioare",
   "Dependență ventilatorie prelungită anticipată, de obicei peste 2 săptămâni",
   "Acces direct pentru irigare și aspirare (toaletă pulmonară)",
   "Prevenirea aspirării cronice și reducerea spațiului mort la efort ventilator precar sau deprimare a SNC",
   "Cricotirotomia de urgență ca substitut de tabel, fără conversie ulterioară"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Ocolirea obstrucției căii aeriene superioare — Corect: Ocolirea obstrucției este primul item.\n\nDependență ventilatorie prelungită anticipată, de obicei peste 2 săptămâni — Corect: Pragul de obicei peste 2 săptămâni este citat.\n\nAcces direct pentru irigare și aspirare (toaletă pulmonară) — Corect: Toaleta pulmonară prin irigare/aspirare figurează explicit.\n\nPrevenirea aspirării cronice și reducerea spațiului mort la efort ventilator precar sau deprimare a SNC — Corect: Prevenirea aspirării cronice și reducerea spațiului mort încheie tabelul.\n\nCricotirotomia de urgență ca substitut de tabel, fără conversie ulterioară — Incorect: Cricotirotomia este gestul de urgență când intubația eșuează; tabelul 27-12 este al traheotomiei, iar cricotirotomia se convertește dacă intubația depășește câteva zile.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 583, Traheotomia — Tabelul 27-12 (pagini PDF: 256).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    583
   ],
   "pdfPages": [
    256
   ],
   "section": "Traheotomia — Tabelul 27-12"
  },
  "learningObjective": "Lista completă a tabelului 27-12: bypass obstructiv, ventilație >2 săptămâni, toaletă pulmonară, prevenirea aspirației și reducerea spațiului mort.",
  "optionRationales": [
   "Ocolirea obstrucției este primul item.",
   "Pragul de obicei peste 2 săptămâni este citat.",
   "Toaleta pulmonară prin irigare/aspirare figurează explicit.",
   "Prevenirea aspirării cronice și reducerea spațiului mort încheie tabelul.",
   "Cricotirotomia este gestul de urgență când intubația eșuează; tabelul 27-12 este al traheotomiei, iar cricotirotomia se convertește dacă intubația depășește câteva zile."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește itemii de toaletă/spațiu mort ai tabelului cu cricotirotomia neconvertită, o confuzie de procedură de urgență versus planificată."
  },
  "textbookExpressions": [
   "toaletă pulmonară",
   "spaţiului mort"
  ]
 },
 {
  "id": "orl-adv-137",
  "topicId": "orl",
  "type": "CS",
  "stem": "Cricotirotomia, când intubația orotraheală eșuează, presupune:",
  "options": [
   "Incizie verticală a tegumentului imediat deasupra membranei cricotiroidiene, apoi incizie orizontală a membranei, cu plasarea unei sonde traheale",
   "Incizie orizontală a tegumentului și verticală a membranei, analog traheotomiei dintre inele",
   "Traheotomie imediat subcricoidiană ca prim gest la adult, analog copilului mic",
   "Laringectomie totală, pacientul nemaiputând fi intubat oral",
   "Miringotomie largă, analog parezei faciale din OMA"
  ],
  "correct": [
   0
  ],
  "explanation": "Incizie verticală a tegumentului imediat deasupra membranei cricotiroidiene, apoi incizie orizontală a membranei, cu plasarea unei sonde traheale — Corect: Secvența verticală pe piele, orizontală pe membrană și sonda traheală este explicită.\n\nIncizie orizontală a tegumentului și verticală a membranei, analog traheotomiei dintre inele — Incorect: Orientările inciziilor sunt inverse față de text.\n\nTraheotomie imediat subcricoidiană ca prim gest la adult, analog copilului mic — Incorect: Subcricoidiana este calea copilului mic, la care cricotirotomia nu este posibilă.\n\nLaringectomie totală, pacientul nemaiputând fi intubat oral — Incorect: Laringectomia totală ancorează traheea la tegument în cancer, nu în obstrucția acută.\n\nMiringotomie largă, analog parezei faciale din OMA — Incorect: Miringotomia privește OMA cu pareză facială.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 583, Cricotirotomia — Incizie cutanată verticală, membrană orizontală (pagini PDF: 256).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    583
   ],
   "pdfPages": [
    256
   ],
   "section": "Cricotirotomia — Incizie cutanată verticală, membrană orizontală"
  },
  "learningObjective": "Recunoașterea secvenței piele verticală deasupra membranei, apoi membrană orizontală, distinctă de traheotomia subcricoidiană a copilului.",
  "optionRationales": [
   "Secvența verticală pe piele, orizontală pe membrană și sonda traheală este explicită.",
   "Orientările inciziilor sunt inverse față de text.",
   "Subcricoidiana este calea copilului mic, la care cricotirotomia nu este posibilă.",
   "Laringectomia totală ancorează traheea la tegument în cancer, nu în obstrucția acută.",
   "Miringotomia privește OMA cu pareză facială."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Oglindește direcțiile de incizie (piele versus membrană) și înlocuiește gestul cu traheotomia copilului sau cu laringectomia."
  },
  "textbookExpressions": [
   "Incizarea ve1ticală",
   "Membrana va fi incizată"
  ]
 },
 {
  "id": "orl-adv-138",
  "topicId": "orl",
  "type": "CM",
  "stem": "Electronistagmografia și posturografia pe platformă evaluează sistemul vestibular astfel:",
  "options": [
   "ENG folosește electrozi periorbitali și tehnici calorice sau de rotire a capului pentru a cuantifica nistagmusul și integritatea vestibulară",
   "Posturografia modifică feedback-ul vizual și proprioceptiv (încăpere fără indicii vizuale, platformă instabilă) pentru a izola contribuția vestibulară la orientare",
   "ENG înlocuiește audiograma tonală în hipoacuzia de transmisie",
   "Posturografia se face cu ochii deschiși pe platformă fixă, analog testului Rinne",
   "Testul Weber de 512 Hz pe mastoidă este echivalentul ENG"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "ENG folosește electrozi periorbitali și tehnici calorice sau de rotire a capului pentru a cuantifica nistagmusul și integritatea vestibulară — Corect: Electrozii periorbitali, stimularea calorică/de rotație și cuantificarea nistagmusului sunt explicite.\n\nPosturografia modifică feedback-ul vizual și proprioceptiv (încăpere fără indicii vizuale, platformă instabilă) pentru a izola contribuția vestibulară la orientare — Corect: Eliminarea feedback-ului vizual și proprioceptiv pe platformă instabilă este descrisă.\n\nENG înlocuiește audiograma tonală în hipoacuzia de transmisie — Incorect: ENG nu înlocuiește audiograma de transmisie.\n\nPosturografia se face cu ochii deschiși pe platformă fixă, analog testului Rinne — Incorect: Testul cere tocmai alterarea vederii și a platformei, nu ochi deschiși pe suport fix.\n\nTestul Weber de 512 Hz pe mastoidă este echivalentul ENG — Incorect: Weber este un test cu diapazon, nu ENG.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 556, Evaluare vestibulară — ENG caloric și posturografie (pagini PDF: 229).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    556
   ],
   "pdfPages": [
    229
   ],
   "section": "Evaluare vestibulară — ENG caloric și posturografie"
  },
  "learningObjective": "Separarea cuantificării nistagmusului (electrozi periorbitali, caloric/rotire) de izolarea vestibulului prin scoaterea vederii și propriocepției.",
  "optionRationales": [
   "Electrozii periorbitali, stimularea calorică/de rotație și cuantificarea nistagmusului sunt explicite.",
   "Eliminarea feedback-ului vizual și proprioceptiv pe platformă instabilă este descrisă.",
   "ENG nu înlocuiește audiograma de transmisie.",
   "Testul cere tocmai alterarea vederii și a platformei, nu ochi deschiși pe suport fix.",
   "Weber este un test cu diapazon, nu ENG."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă ENG/posturografia cu Weber/Rinne și cu audiograma de transmisie, toate teste de ureche din același capitol."
  },
  "textbookExpressions": [
   "Electronistagmografia",
   "Posturografia pe platformă"
  ]
 },
 {
  "id": "orl-adv-139",
  "topicId": "orl",
  "type": "CM",
  "stem": "Pavilionul auricular se formează din șase coliculi branhiali cartilaginoși ai primului și celui de-al doilea arc. Sunt adevărate:",
  "options": [
   "Defectele duc la chisturi sau tracturi sinusale preauriculare, rezecabile dacă se infectează frecvent",
   "Anomalii importante ale primului arc pot duce la absența pavilionului, a conductului sau a structurilor urechii medii/interne",
   "Cele mai importante intervenții sunt evaluarea audiometrică și reabilitarea auditivă precoce cu proteze, ideal în primul an de viață; reconstrucția chirurgicală începe ulterior",
   "Reconstrucția pavilionului precede orice protezare, chiar în primul an",
   "Tracturile preauriculare se lasă netratate chiar după infecții repetate, analog exostozelor asimptomatice"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Defectele duc la chisturi sau tracturi sinusale preauriculare, rezecabile dacă se infectează frecvent — Corect: Chisturile/tracturile din defecte de unire a coliculilor și rezecția după infecții repetate sunt explicite.\n\nAnomalii importante ale primului arc pot duce la absența pavilionului, a conductului sau a structurilor urechii medii/interne — Corect: Anomaliile majore ale primului arc, cu absența pavilionului/conductului/urechii medii-interne, sunt descrise.\n\nCele mai importante intervenții sunt evaluarea audiometrică și reabilitarea auditivă precoce cu proteze, ideal în primul an de viață; reconstrucția chirurgicală începe ulterior — Corect: Audiometria și protezarea în primul an, cu reconstrucție ulterioară, sunt enunțate.\n\nReconstrucția pavilionului precede orice protezare, chiar în primul an — Incorect: Reabilitarea auditivă precoce precede seria reconstructivă.\n\nTracturile preauriculare se lasă netratate chiar după infecții repetate, analog exostozelor asimptomatice — Incorect: Tracturile cu infecții frecvente se rezecă.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 556, Anomalii congenitale auriculare — Șase coliculi și protezarea în primul an (pagini PDF: 229).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    556
   ],
   "pdfPages": [
    229
   ],
   "section": "Anomalii congenitale auriculare — Șase coliculi și protezarea în primul an"
  },
  "learningObjective": "Recunoașterea originii din arcele 1–2, a tracturilor preauriculare infectate și a priorității reabilitării auditive în primul an, înaintea reconstrucției.",
  "optionRationales": [
   "Chisturile/tracturile din defecte de unire a coliculilor și rezecția după infecții repetate sunt explicite.",
   "Anomaliile majore ale primului arc, cu absența pavilionului/conductului/urechii medii-interne, sunt descrise.",
   "Audiometria și protezarea în primul an, cu reconstrucție ulterioară, sunt enunțate.",
   "Reabilitarea auditivă precoce precede seria reconstructivă.",
   "Tracturile cu infecții frecvente se rezecă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pune reconstrucția înaintea protezării din primul an și lasă tracturile infectate netratate, analog exostozelor."
  },
  "textbookExpressions": [
   "primul an de viaţă",
   "primului arc branhial"
  ]
 },
 {
  "id": "orl-adv-140",
  "topicId": "orl",
  "type": "CS",
  "stem": "Pentru a proteja corneea în paralizia facială cu lagoftalmie, pe lângă lacrimi artificiale, creme și benzi nocturne, pot fi necesare:",
  "options": [
   "Blefarorafie sau atașarea de greutăți pe bază de plăcuțe de aur la nivelul pleoapei superioare",
   "Stapedectomie, analog otosclerozei cu scăriță fixată",
   "Manevra Epley, analog BPPV",
   "Decompresia sacului endolimfatic, analog Meniere refractar",
   "Embolizarea preoperatorie, analog angiofibromului juvenil"
  ],
  "correct": [
   0
  ],
  "explanation": "Blefarorafie sau atașarea de greutăți pe bază de plăcuțe de aur la nivelul pleoapei superioare — Corect: Blefarorafia și plăcuțele de aur palpebrale sunt citate explicit pentru o mai bună acoperire a corneei.\n\nStapedectomie, analog otosclerozei cu scăriță fixată — Incorect: Stapedectomia tratează otoscleroza, nu lagoftalmia.\n\nManevra Epley, analog BPPV — Incorect: Epley repoziționează otoconii, nu închide pleoapa.\n\nDecompresia sacului endolimfatic, analog Meniere refractar — Incorect: Decompresia sacului este a Meniere-ului neresponsiv.\n\nEmbolizarea preoperatorie, analog angiofibromului juvenil — Incorect: Embolizarea reduce sângerarea angiofibromului, nu protejează corneea.\n\nReferință: Lawrence, Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025, cap. 27, p. 560, Paralizia facială — Plăcuțe de aur palpebrale (pagini PDF: 233).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Lawrence",
   "edition": "Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025",
   "chapter": 27,
   "printedPages": [
    560
   ],
   "pdfPages": [
    233
   ],
   "section": "Paralizia facială — Plăcuțe de aur palpebrale"
  },
  "learningObjective": "Recunoașterea blefarorafiei și a greutăților de aur pe pleoapa superioară ca gesturi de acoperire corneană, dincolo de lacrimi și benzi.",
  "optionRationales": [
   "Blefarorafia și plăcuțele de aur palpebrale sunt citate explicit pentru o mai bună acoperire a corneei.",
   "Stapedectomia tratează otoscleroza, nu lagoftalmia.",
   "Epley repoziționează otoconii, nu închide pleoapa.",
   "Decompresia sacului este a Meniere-ului neresponsiv.",
   "Embolizarea reduce sângerarea angiofibromului, nu protejează corneea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește greutățile de aur palpebrale cu stapedectomie, Epley sau embolizare, trei gesturi din același capitol otologic."
  },
  "textbookExpressions": [
   "plăcuţe de aur",
   "pleoapei superioare"
  ]
 }
];
