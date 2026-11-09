import type {Question} from '../../models';

// Frozen snapshot: never edit. Old attempts are scored against these exact versions.
export const RETIRED_HIV:(Question&Record<string,unknown>)[]=[
 {
  "id": "hiv-adv-001",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Căile de transmitere a infecției HIV:",
  "options": [
   "Riscul cadrelor medicale după o singură înțepătură cu un ac contaminat cu sânge HIV-pozitiv este de aproximativ 3%",
   "Cel mai important marker al riscului de transmitere este încărcătura virală HIV, care are nivelul cel mai crescut în infecția acută",
   "Circumcizia reduce transmiterea HIV către partener, dar nu influențează dobândirea infecției de către bărbatul circumcis",
   "Transmiterea pare mai importantă de la bărbat la femeie și către partenerul receptiv în relațiile sexuale anale decât invers",
   "Fără nicio intervenție, studiile europene indică faptul că 15% dintre nou-născuții din mame HIV-pozitive pot dobândi infecția"
  ],
  "correct": [
   1,
   3,
   4
  ],
  "explanation": "Riscul cadrelor medicale după o singură înțepătură cu un ac contaminat cu sânge HIV-pozitiv este de aproximativ 3% — Incorect: Textul precizează un risc de aproximativ 0,3% după o singură înţepătură cu ac contaminat, nu 3%.\n\nCel mai important marker al riscului de transmitere este încărcătura virală HIV, care are nivelul cel mai crescut în infecția acută — Corect: Încărcătura virală este cel mai important marker al riscului de transmitere, fiind maximă în infecţia acută.\n\nCircumcizia reduce transmiterea HIV către partener, dar nu influențează dobândirea infecției de către bărbatul circumcis — Incorect: Textul precizează că circumcizia reduce atât dobândirea, cât şi transmiterea HIV, nu doar transmiterea.\n\nTransmiterea pare mai importantă de la bărbat la femeie și către partenerul receptiv în relațiile sexuale anale decât invers — Corect: Transmiterea este mai importantă de la bărbat la femeie şi către partenerul receptiv în relaţiile anale.\n\nFără nicio intervenție, studiile europene indică faptul că 15% dintre nou-născuții din mame HIV-pozitive pot dobândi infecția — Corect: Studiile europene indică o rată de transmitere verticală de 15% fără intervenţie, cu rate de până la 40% raportate în Africa şi SUA.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1426, 1427, 1428, HIV — Epidemiologie și patogenie: Căile de transmitere a HIV (pagini PDF: 367, 368, 369).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1426,
    1427,
    1428
   ],
   "pdfPages": [
    367,
    368,
    369
   ],
   "section": "HIV — Epidemiologie și patogenie: Căile de transmitere a HIV"
  },
  "learningObjective": "Cuantificarea corectă a riscului de transmitere HIV pe diferite căi și recunoașterea factorilor care îl modulează (viremie, direcție a transmiterii, circumcizie).",
  "optionRationales": [
   "Textul precizează un risc de aproximativ 0,3% după o singură înţepătură cu ac contaminat, nu 3%.",
   "Încărcătura virală este cel mai important marker al riscului de transmitere, fiind maximă în infecţia acută.",
   "Textul precizează că circumcizia reduce atât dobândirea, cât şi transmiterea HIV, nu doar transmiterea.",
   "Transmiterea este mai importantă de la bărbat la femeie şi către partenerul receptiv în relaţiile anale.",
   "Studiile europene indică o rată de transmitere verticală de 15% fără intervenţie, cu rate de până la 40% raportate în Africa şi SUA."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii folosesc o eroare de ordin de mărime (3% față de 0,3%) și o restrângere falsă a efectului circumciziei, ambele plauzibile fără lectura atentă a textului."
  },
  "textbookExpressions": [
   "partenerul receptiv",
   "circumcizia poate reduce"
  ]
 },
 {
  "id": "hiv-adv-002",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre virusul imunodeficienței umane (HIV):",
  "options": [
   "HIV este un lentivirus din familia retrovirusurilor, caracterizat prin prezența revers-transcriptazei",
   "HIV-2 are doar 40% omologie structurală cu HIV-1 și pare să aibă o evoluție mai lentă decât acesta",
   "Grupul M al HIV-1 reprezintă 98% din infecțiile globale, subtipul B predominând în Europa și America de Nord",
   "Multe dintre antiretroviralele utilizate în infecția cu HIV-1 sunt ineficiente în infecția cu HIV-2",
   "Grupul O al HIV-1 este forma predominantă în Africa Centrală și subsahariană, unde depășește grupul M"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "HIV este un lentivirus din familia retrovirusurilor, caracterizat prin prezența revers-transcriptazei — Corect: HIV este un lentivirus din familia retrovirusurilor, iar revers-transcriptaza este enzima caracteristică.\n\nHIV-2 are doar 40% omologie structurală cu HIV-1 și pare să aibă o evoluție mai lentă decât acesta — Corect: Textul precizează că HIV-2 are doar 40% omologie structurală cu HIV-1 şi o evoluţie mai lentă.\n\nGrupul M al HIV-1 reprezintă 98% din infecțiile globale, subtipul B predominând în Europa și America de Nord — Corect: Grupul M însumează 98% din infecţii, cu predominanţa subtipului B în Europa, America de Nord şi Australia.\n\nMulte dintre antiretroviralele utilizate în infecția cu HIV-1 sunt ineficiente în infecția cu HIV-2 — Corect: Textul precizează că multe antiretrovirale eficiente în HIV-1 sunt ineficiente în HIV-2.\n\nGrupul O al HIV-1 este forma predominantă în Africa Centrală și subsahariană, unde depășește grupul M — Incorect: Grupul O (outlier) se limitează la un număr mic de cazuri în Camerun; în Africa Centrală şi subsahariană predomină subtipurile M, în special C.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1428, HIV — Epidemiologie și patogenie: Virusul imunodeficienței umane (pagini PDF: 369).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1428
   ],
   "pdfPages": [
    369
   ],
   "section": "HIV — Epidemiologie și patogenie: Virusul imunodeficienței umane"
  },
  "learningObjective": "Diferențierea HIV-1 de HIV-2 și cunoașterea distribuției grupurilor și subtipurilor HIV-1 relevante pentru epidemiologie și terapie.",
  "optionRationales": [
   "HIV este un lentivirus din familia retrovirusurilor, iar revers-transcriptaza este enzima caracteristică.",
   "Textul precizează că HIV-2 are doar 40% omologie structurală cu HIV-1 şi o evoluţie mai lentă.",
   "Grupul M însumează 98% din infecţii, cu predominanţa subtipului B în Europa, America de Nord şi Australia.",
   "Textul precizează că multe antiretrovirale eficiente în HIV-1 sunt ineficiente în HIV-2.",
   "Grupul O (outlier) se limitează la un număr mic de cazuri în Camerun; în Africa Centrală şi subsahariană predomină subtipurile M, în special C."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Testează detalii de virologie rar reținute (procentul de omologie, distribuția grupurilor), iar distractorul confundă grupul O cu subtipul C al grupului M."
  },
  "textbookExpressions": [
   "40% omologie structurală",
   "Grupul M (subtipuri majore)"
  ]
 },
 {
  "id": "hiv-adv-003",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Testele de amplificare a acidului nucleic (NAAT) pentru ARN-HIV pot stabili diagnosticul infecției acute HIV:",
  "options": [
   "Cu 7 zile înaintea unui test de antigen p24 și cu 12 zile înaintea unui test de anticorpi cu sensibilitate crescută",
   "Cu 12 zile înaintea unui test de antigen p24 și cu 7 zile înaintea unui test de anticorpi cu sensibilitate crescută",
   "Simultan cu testul de antigen p24, dar cu 12 zile înaintea unui test de anticorpi cu sensibilitate crescută",
   "Cu 7 zile înaintea unui test de anticorpi, dar numai după pozitivarea antigenului p24",
   "Abia după 2-4 săptămâni de la infecție, concomitent cu apariția anticorpilor anti-HIV"
  ],
  "correct": [
   0
  ],
  "explanation": "Cu 7 zile înaintea unui test de antigen p24 și cu 12 zile înaintea unui test de anticorpi cu sensibilitate crescută — Corect: Textul precizează că NAAT pentru ARN-HIV stabileşte diagnosticul cu 7 zile înaintea testului de antigen p24 şi cu 12 zile înaintea testului de anticorpi.\n\nCu 12 zile înaintea unui test de antigen p24 și cu 7 zile înaintea unui test de anticorpi cu sensibilitate crescută — Incorect: Intervalele sunt inversate: avansul faţă de p24 este de 7 zile, iar faţă de anticorpi de 12 zile.\n\nSimultan cu testul de antigen p24, dar cu 12 zile înaintea unui test de anticorpi cu sensibilitate crescută — Incorect: NAAT precede testul de antigen p24 cu 7 zile, nu este simultan cu acesta.\n\nCu 7 zile înaintea unui test de anticorpi, dar numai după pozitivarea antigenului p24 — Incorect: NAAT se pozitivează înaintea antigenului p24, nu după acesta.\n\nAbia după 2-4 săptămâni de la infecție, concomitent cu apariția anticorpilor anti-HIV — Incorect: Anticorpii apar în primele 2-4 săptămâni, dar NAAT precede atât apariţia lor, cât şi a antigenului p24.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1430, HIV — Tabloul clinic în infecția HIV netratată: Infecția primară HIV (pagini PDF: 371).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1430
   ],
   "pdfPages": [
    371
   ],
   "section": "HIV — Tabloul clinic în infecția HIV netratată: Infecția primară HIV"
  },
  "learningObjective": "Ierarhizarea temporală a testelor diagnostice (NAAT, antigen p24, anticorpi) în fereastra infecției acute HIV.",
  "optionRationales": [
   "Textul precizează că NAAT pentru ARN-HIV stabileşte diagnosticul cu 7 zile înaintea testului de antigen p24 şi cu 12 zile înaintea testului de anticorpi.",
   "Intervalele sunt inversate: avansul faţă de p24 este de 7 zile, iar faţă de anticorpi de 12 zile.",
   "NAAT precede testul de antigen p24 cu 7 zile, nu este simultan cu acesta.",
   "NAAT se pozitivează înaintea antigenului p24, nu după acesta.",
   "Anticorpii apar în primele 2-4 săptămâni, dar NAAT precede atât apariţia lor, cât şi a antigenului p24."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate variantele folosesc aceleași două cifre (7 și 12 zile) și aceleași trei teste, permutate; răspunsul cere memorarea exactă a ordinii de pozitivare."
  },
  "textbookExpressions": [
   "antigen p24",
   "limfocite reactive atipice"
  ]
 },
 {
  "id": "hiv-adv-004",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Următoarele afirmații despre monitorizarea virusologică și imunologică a pacientului cu infecție HIV sunt adevărate:",
  "options": [
   "Punctul de referință viral (setpoint) se stabilește la aproximativ 6 săptămâni de la seroconversia HIV",
   "Cel mai sensibil test de încărcătură virală poate detecta până la 20 copii de ARN viral/ml plasmă",
   "Încărcătura virală nu trebuie evaluată la mai puțin de o lună după imunizări sau episoade acute de infecții intercurente",
   "La pacientul stabil virusologic sub ART, cu CD4 peste 350/mm3, numărul de CD4 se monitorizează la fiecare 3 luni",
   "Pacienții cu viremie peste 100.000 copii/ml au un risc de 10 ori mai mare de progresie către SIDA în următorii 5 ani față de cei cu viremie constant sub 10.000 copii/ml"
  ],
  "correct": [
   1,
   2,
   4
  ],
  "explanation": "Punctul de referință viral (setpoint) se stabilește la aproximativ 6 săptămâni de la seroconversia HIV — Incorect: Textul precizează că setpoint-ul viral se stabileşte la aproximativ 6 luni de la seroconversie, nu 6 săptămâni.\n\nCel mai sensibil test de încărcătură virală poate detecta până la 20 copii de ARN viral/ml plasmă — Corect: Cel mai sensibil test detectează până la 20 copii de ARN viral/ml.\n\nÎncărcătura virală nu trebuie evaluată la mai puțin de o lună după imunizări sau episoade acute de infecții intercurente — Corect: Creşterile tranzitorii după imunizări sau infecţii intercurente impun amânarea determinării cu cel puţin o lună.\n\nLa pacientul stabil virusologic sub ART, cu CD4 peste 350/mm3, numărul de CD4 se monitorizează la fiecare 3 luni — Incorect: La pacientul stabil virusologic cu CD4 peste 350/mm3 sub ART, monitorizarea CD4 se face aproximativ o dată pe an.\n\nPacienții cu viremie peste 100.000 copii/ml au un risc de 10 ori mai mare de progresie către SIDA în următorii 5 ani față de cei cu viremie constant sub 10.000 copii/ml — Corect: Textul indică un risc de 10 ori mai mare de progresie către SIDA în 5 ani la viremii peste 100.000 copii/ml faţă de cele constant sub 10.000 copii/ml.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1434, HIV — Abordarea clinică a pacientului cu infecție HIV: Monitorizare (pagini PDF: 375).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1434
   ],
   "pdfPages": [
    375
   ],
   "section": "HIV — Abordarea clinică a pacientului cu infecție HIV: Monitorizare"
  },
  "learningObjective": "Aplicarea pragurilor și intervalelor de monitorizare imunologică și virusologică și înțelegerea valorii prognostice a setpoint-ului viral.",
  "optionRationales": [
   "Textul precizează că setpoint-ul viral se stabileşte la aproximativ 6 luni de la seroconversie, nu 6 săptămâni.",
   "Cel mai sensibil test detectează până la 20 copii de ARN viral/ml.",
   "Creşterile tranzitorii după imunizări sau infecţii intercurente impun amânarea determinării cu cel puţin o lună.",
   "La pacientul stabil virusologic cu CD4 peste 350/mm3 sub ART, monitorizarea CD4 se face aproximativ o dată pe an.",
   "Textul indică un risc de 10 ori mai mare de progresie către SIDA în 5 ani la viremii peste 100.000 copii/ml faţă de cele constant sub 10.000 copii/ml."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Combină trei praguri numerice reale cu două erori de unitate/interval (săptămâni în loc de luni, 3 luni în loc de un an) greu de sesizat fără cunoașterea exactă a textului."
  },
  "textbookExpressions": [
   "viral setpoint",
   "20 copii de ARN viral"
  ]
 },
 {
  "id": "hiv-adv-005",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Alegeți afirmațiile corecte referitoare la medicamentele antiretrovirale:",
  "options": [
   "Abacavir se poate asocia cu reacții de hipersensibilitate la indivizii purtători ai alelei HLA-B*5701",
   "Nevirapina poate determina hepatotoxicitate severă la femeile cu CD4 peste 250 celule/mm3 și la bărbații cu CD4 peste 400 celule/mm3",
   "Rilpivirina ar trebui folosită doar când viremia la inițierea terapiei depășește 100.000 copii/ml",
   "Efectul elvitegravirului trebuie potențat („boostat\") prin asociere cu cobicistat",
   "Spre deosebire de alte antiretrovirale, maraviroc se leagă de celula gazdă (co-receptorul CCR5), nu de o țintă virală"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "Abacavir se poate asocia cu reacții de hipersensibilitate la indivizii purtători ai alelei HLA-B*5701 — Corect: Cadranul 37.16 indică asocierea abacavirului cu reacţii de hipersensibilitate la indivizii cu risc (HLA-B*5701).\n\nNevirapina poate determina hepatotoxicitate severă la femeile cu CD4 peste 250 celule/mm3 și la bărbații cu CD4 peste 400 celule/mm3 — Corect: Cadranul 37.16 precizează pragurile de CD4 peste 250/mm3 la femei şi peste 400/mm3 la bărbaţi pentru hepatotoxicitatea nevirapinei.\n\nRilpivirina ar trebui folosită doar când viremia la inițierea terapiei depășește 100.000 copii/ml — Incorect: Textul indică opusul: rilpivirina se foloseşte doar când viremia iniţială este sub 100.000 copii/ml.\n\nEfectul elvitegravirului trebuie potențat („boostat\") prin asociere cu cobicistat — Corect: Cadranul 37.16 precizează că efectul elvitegravirului trebuie boostat cu cobicistat.\n\nSpre deosebire de alte antiretrovirale, maraviroc se leagă de celula gazdă (co-receptorul CCR5), nu de o țintă virală — Corect: Maraviroc se leagă de celula gazdă, nu de ţinta virală, fiind eficient doar la virioni care nu folosesc co-receptorul CXCR4.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1436, 1437, 1438, HIV — Tratamentul pacienților cu infecție HIV: Medicamente antiretrovirale (Cadranul 37.16) (pagini PDF: 377, 378, 379).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1436,
    1437,
    1438
   ],
   "pdfPages": [
    377,
    378,
    379
   ],
   "section": "HIV — Tratamentul pacienților cu infecție HIV: Medicamente antiretrovirale (Cadranul 37.16)"
  },
  "learningObjective": "Recunoașterea particularităților de siguranță și de prescriere ale principalilor agenți antiretrovirali din fiecare clasă.",
  "optionRationales": [
   "Cadranul 37.16 indică asocierea abacavirului cu reacţii de hipersensibilitate la indivizii cu risc (HLA-B*5701).",
   "Cadranul 37.16 precizează pragurile de CD4 peste 250/mm3 la femei şi peste 400/mm3 la bărbaţi pentru hepatotoxicitatea nevirapinei.",
   "Textul indică opusul: rilpivirina se foloseşte doar când viremia iniţială este sub 100.000 copii/ml.",
   "Cadranul 37.16 precizează că efectul elvitegravirului trebuie boostat cu cobicistat.",
   "Maraviroc se leagă de celula gazdă, nu de ţinta virală, fiind eficient doar la virioni care nu folosesc co-receptorul CXCR4."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere reținerea pragurilor de CD4 diferențiate pe sexe pentru nevirapină și inversează sensul pragului viremic pentru rilpivirină, o eroare frecventă."
  },
  "textbookExpressions": [
   "reacţii de hipersensibilitate",
   "boostat potenţat cu Cobicistat"
  ]
 },
 {
  "id": "hiv-adv-006",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Identificați afirmația corectă referitoare la rezistența HIV la tratamentul antiretroviral:",
  "options": [
   "O singură mutație punctiformă poate determina rezistență înaltă la clasa INNRT, în timp ce rezistența la INRT și IP apare prin acumularea mai multor mutații",
   "Genotiparea pentru rezistență trebuie efectuată la câteva săptămâni după întreruperea ART, când tulpinile rezistente devin dominante",
   "Inhibitorii de protează au o barieră genetică joasă, comparabilă cu cea a INNRT și INSTI",
   "Prevalența mutațiilor de rezistență transmise la pacienții cu infecție primară HIV este sub 1% în toate studiile",
   "Variantele virale cu mutații de rezistență dispar definitiv după îndepărtarea presiunii de selecție exercitate de medicație"
  ],
  "correct": [
   0
  ],
  "explanation": "O singură mutație punctiformă poate determina rezistență înaltă la clasa INNRT, în timp ce rezistența la INRT și IP apare prin acumularea mai multor mutații — Corect: Textul precizează că o singură mutaţie punctiformă poate determina rezistenţă înaltă la INNRT, pe când la INRT şi IP rezistenţa necesită acumularea mai multor mutaţii.\n\nGenotiparea pentru rezistență trebuie efectuată la câteva săptămâni după întreruperea ART, când tulpinile rezistente devin dominante — Incorect: Textul indică opusul: după întreruperea ART varianta sălbatică redevine predominantă, de aceea genotiparea se face pe probe recoltate sub tratament.\n\nInhibitorii de protează au o barieră genetică joasă, comparabilă cu cea a INNRT și INSTI — Incorect: INNRT şi INSTI au barieră genetică joasă; inhibitorii de protează au, în general, o barieră genetică mai înaltă.\n\nPrevalența mutațiilor de rezistență transmise la pacienții cu infecție primară HIV este sub 1% în toate studiile — Incorect: Studiile la pacienţii cu infecţie primară au evidenţiat rate de prevalenţă între 2 şi 20%.\n\nVariantele virale cu mutații de rezistență dispar definitiv după îndepărtarea presiunii de selecție exercitate de medicație — Incorect: Variantele rezistente supravieţuiesc şi sunt „arhivate\", reapărând la reiniţierea ART şi a presiunii de selecţie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1439, 1438, HIV — Tratamentul pacienților cu infecție HIV: Rezistența la tratamentul ARV (Cadranul 37.20) (pagini PDF: 380, 379).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1439,
    1438
   ],
   "pdfPages": [
    380,
    379
   ],
   "section": "HIV — Tratamentul pacienților cu infecție HIV: Rezistența la tratamentul ARV (Cadranul 37.20)"
  },
  "learningObjective": "Înțelegerea barierei genetice diferite între clasele ARV și a condițiilor corecte de efectuare a testelor de rezistență.",
  "optionRationales": [
   "Textul precizează că o singură mutaţie punctiformă poate determina rezistenţă înaltă la INNRT, pe când la INRT şi IP rezistenţa necesită acumularea mai multor mutaţii.",
   "Textul indică opusul: după întreruperea ART varianta sălbatică redevine predominantă, de aceea genotiparea se face pe probe recoltate sub tratament.",
   "INNRT şi INSTI au barieră genetică joasă; inhibitorii de protează au, în general, o barieră genetică mai înaltă.",
   "Studiile la pacienţii cu infecţie primară au evidenţiat rate de prevalenţă între 2 şi 20%.",
   "Variantele rezistente supravieţuiesc şi sunt „arhivate\", reapărând la reiniţierea ART şi a presiunii de selecţie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Distractorii inversează logica momentului genotipării și atribuie inhibitorilor de protează bariera genetică joasă a INNRT, două confuzii conceptuale frecvente."
  },
  "textbookExpressions": [
   "barieră genetică joasă",
   "varianta sălbatică (wild type)"
  ]
 },
 {
  "id": "hiv-adv-007",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Pneumonia cu Pneumocystis jirovecii la pacientul cu infecție HIV se caracterizează prin:",
  "options": [
   "Apariție în general la un număr de limfocite CD4 sub 200/mm3, cu debut insidios pe parcursul câtorva săptămâni",
   "Radiografie pulmonară normală în stadiile incipiente, cu aspect înalt sugestiv de „sticlă mată\" la examenul CT cu rezoluție înaltă",
   "Microorganism ușor de cultivat in vitro, cultura din lavajul bronho-alveolar fiind standardul de diagnostic",
   "Tratament de primă intenție în forma severă (PaO2 sub 8 kPa) cu co-trimoxazol intravenos 120 mg/kg/zi timp de 21 zile, asociat cu corticoterapie sistemică",
   "Profilaxie secundară standard cu pentamidină în aerosoli, co-trimoxazolul fiind rezervat pacienților care nu tolerează sulfonamidele"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "explanation": "Apariție în general la un număr de limfocite CD4 sub 200/mm3, cu debut insidios pe parcursul câtorva săptămâni — Corect: Textul precizează că infecţia apare la CD4 sub 200/mm3, cu debut insidios pe câteva săptămâni.\n\nRadiografie pulmonară normală în stadiile incipiente, cu aspect înalt sugestiv de „sticlă mată\" la examenul CT cu rezoluție înaltă — Corect: În stadiile incipiente radiografia este normală, iar CT-ul cu rezoluţie înaltă arată imagini în „sticlă mată\".\n\nMicroorganism ușor de cultivat in vitro, cultura din lavajul bronho-alveolar fiind standardul de diagnostic — Incorect: Textul indică opusul: microorganismul nu poate fi cultivat in vitro şi se evidenţiază prin coloraţie argentică sau imunofluorescenţă.\n\nTratament de primă intenție în forma severă (PaO2 sub 8 kPa) cu co-trimoxazol intravenos 120 mg/kg/zi timp de 21 zile, asociat cu corticoterapie sistemică — Corect: Forma severă se tratează cu co-trimoxazol i.v. 120 mg/kg/zi, 21 zile, iar corticoterapia sistemică reduce mortalitatea în cazurile severe.\n\nProfilaxie secundară standard cu pentamidină în aerosoli, co-trimoxazolul fiind rezervat pacienților care nu tolerează sulfonamidele — Incorect: Regimul standard de profilaxie secundară este co-trimoxazol 960 mg de trei ori pe săptămână; pentamidina în aerosoli este alternativă la intoleranţa la sulfonamide.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1443, 1444, HIV — Afecțiuni specifice asociate cu infecția HIV: Infecția cu Pneumocystis jirovecii (pagini PDF: 384, 385).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1443,
    1444
   ],
   "pdfPages": [
    384,
    385
   ],
   "section": "HIV — Afecțiuni specifice asociate cu infecția HIV: Infecția cu Pneumocystis jirovecii"
  },
  "learningObjective": "Corelarea pragului de CD4, a aspectului imagistic, a metodei de diagnostic și a schemei terapeutice/profilactice în pneumocistoză.",
  "optionRationales": [
   "Textul precizează că infecţia apare la CD4 sub 200/mm3, cu debut insidios pe câteva săptămâni.",
   "În stadiile incipiente radiografia este normală, iar CT-ul cu rezoluţie înaltă arată imagini în „sticlă mată\".",
   "Textul indică opusul: microorganismul nu poate fi cultivat in vitro şi se evidenţiază prin coloraţie argentică sau imunofluorescenţă.",
   "Forma severă se tratează cu co-trimoxazol i.v. 120 mg/kg/zi, 21 zile, iar corticoterapia sistemică reduce mortalitatea în cazurile severe.",
   "Regimul standard de profilaxie secundară este co-trimoxazol 960 mg de trei ori pe săptămână; pentamidina în aerosoli este alternativă la intoleranţa la sulfonamide."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează rolul co-trimoxazolului și al pentamidinei în profilaxia secundară și atribuie unui organism necultivabil un standard de diagnostic prin cultură."
  },
  "textbookExpressions": [
   "sticlă mată",
   "coloraţie argentică"
  ]
 },
 {
  "id": "hiv-adv-008",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Un bărbat de 34 de ani, nou diagnosticat cu infecție HIV (CD4 = 35 celule/mm3), acuză scotoame și scăderea acuității vizuale la ochiul drept; examenul fundului de ochi evidențiază hemoragii și exsudate perivasculare cu aspect de „felie de pizza\". Care dintre următoarele afirmații sunt adevărate?",
  "options": [
   "Manifestările sunt specifice, iar diagnosticul retinitei cu citomegalovirus se stabilește clinic",
   "Foscarnetul produce mielosupresie, iar ganciclovirul este nefrotoxic, ceea ce orientează alegerea între ele",
   "Tratamentul se poate face cu valganciclovir oral 900 mg x 2/zi sau ganciclovir i.v. 5 mg/kg x 2/zi, minimum 3 săptămâni",
   "Retinita cu citomegalovirus apare tipic la valori ale CD4 cuprinse între 200 și 350 celule/mm3",
   "Dacă imunosupresia nu este ameliorată, reactivarea este frecventă și determină cecitate"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "explanation": "Manifestările sunt specifice, iar diagnosticul retinitei cu citomegalovirus se stabilește clinic — Corect: Textul precizează că manifestările clinice sunt specifice, iar diagnosticul este stabilit clinic.\n\nFoscarnetul produce mielosupresie, iar ganciclovirul este nefrotoxic, ceea ce orientează alegerea între ele — Incorect: Toxicităţile sunt inversate: ganciclovirul produce mielosupresie, iar foscarnetul este nefrotoxic.\n\nTratamentul se poate face cu valganciclovir oral 900 mg x 2/zi sau ganciclovir i.v. 5 mg/kg x 2/zi, minimum 3 săptămâni — Corect: Textul indică valganciclovir per os 900 mg x 2/zi sau ganciclovir 5 mg/kg x 2/zi i.v., cel puţin 3 săptămâni sau până la remisia retinitei.\n\nRetinita cu citomegalovirus apare tipic la valori ale CD4 cuprinse între 200 și 350 celule/mm3 — Incorect: Retinita CMV apare când CD4 este sub 50 celule/mm3, nu la valori de 200-350/mm3.\n\nDacă imunosupresia nu este ameliorată, reactivarea este frecventă și determină cecitate — Corect: Fără ameliorarea imunosupresiei, reactivarea este frecventă şi determină cecitate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1446, HIV — Afecțiuni specifice asociate cu infecția HIV: Retinita cu CMV (pagini PDF: 387).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1446
   ],
   "pdfPages": [
    387
   ],
   "section": "HIV — Afecțiuni specifice asociate cu infecția HIV: Retinita cu CMV"
  },
  "learningObjective": "Recunoașterea retinitei CMV la pacientul cu imunodepresie profundă și cunoașterea schemei terapeutice și a toxicităților agenților anti-CMV.",
  "optionRationales": [
   "Textul precizează că manifestările clinice sunt specifice, iar diagnosticul este stabilit clinic.",
   "Toxicităţile sunt inversate: ganciclovirul produce mielosupresie, iar foscarnetul este nefrotoxic.",
   "Textul indică valganciclovir per os 900 mg x 2/zi sau ganciclovir 5 mg/kg x 2/zi i.v., cel puţin 3 săptămâni sau până la remisia retinitei.",
   "Retinita CMV apare când CD4 este sub 50 celule/mm3, nu la valori de 200-350/mm3.",
   "Fără ameliorarea imunosupresiei, reactivarea este frecventă şi determină cecitate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Vigneta impune corelarea CD4 = 35/mm3 cu pragul de risc și inversează toxicitățile celor doi agenți parenterali anti-CMV."
  },
  "textbookExpressions": [
   "felie de pizza",
   "Ganciclovirul poate produce mielosupresie"
  ]
 },
 {
  "id": "hiv-adv-009",
  "topicId": "hiv",
  "type": "CM",
  "stem": "O femeie de 41 de ani cu infecție HIV netratată (CD4 = 80 celule/mm3) este diagnosticată cu tuberculoză pulmonară și începe terapia antituberculoasă standard. Precizați enunțurile corecte privind conduita terapeutică:",
  "options": [
   "Rifampicina inhibă citocromul P450 și crește concentrația plasmatică a inhibitorilor de protează până la niveluri toxice",
   "Terapia antiretrovirală trebuie inițiată la 2 săptămâni de la începerea medicației antituberculoase",
   "Inițierea terapiei antiretrovirale poate fi temporizată cel puțin 6 săptămâni, ca la orice pacient cu tuberculoză și infecție HIV",
   "Rifabutina are un efect mai slab asupra citocromului P450 și poate substitui rifampicina",
   "Apariția IRIS-TB după inițierea antiretroviralelor reflectă o terapie antituberculoasă inadecvată și impune schimbarea acesteia"
  ],
  "correct": [
   1,
   3
  ],
  "explanation": "Rifampicina inhibă citocromul P450 și crește concentrația plasmatică a inhibitorilor de protează până la niveluri toxice — Incorect: Textul indică opusul: rifampicina este un inductor potent al citocromului P450 şi reduce concentraţia inhibitorilor de protează.\n\nTerapia antiretrovirală trebuie inițiată la 2 săptămâni de la începerea medicației antituberculoase — Corect: Textul precizează că la CD4 sub 100 celule/mm3 ART se iniţiază la 2 săptămâni de la începerea terapiei antituberculoase.\n\nInițierea terapiei antiretrovirale poate fi temporizată cel puțin 6 săptămâni, ca la orice pacient cu tuberculoză și infecție HIV — Incorect: Temporizarea cu cel puţin 6 săptămâni se aplică pacienţilor cu CD4 peste 200 celule/mm3, nu celor cu CD4 de 80/mm3.\n\nRifabutina are un efect mai slab asupra citocromului P450 și poate substitui rifampicina — Corect: Rifabutina are efect mai slab asupra citocromului P450 şi poate substitui rifampicina.\n\nApariția IRIS-TB după inițierea antiretroviralelor reflectă o terapie antituberculoasă inadecvată și impune schimbarea acesteia — Incorect: Textul precizează că IRIS-TB nu reflectă o terapie antituberculoasă inadecvată şi nu este limitat la o anumită combinaţie de ARV.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1448, HIV — Afecțiuni specifice asociate cu infecția HIV: Infecția cu Mycobacterium tuberculosis (pagini PDF: 389).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1448
   ],
   "pdfPages": [
    389
   ],
   "section": "HIV — Afecțiuni specifice asociate cu infecția HIV: Infecția cu Mycobacterium tuberculosis"
  },
  "learningObjective": "Alegerea momentului inițierii ART în funcție de CD4 la pacientul cu tuberculoză și gestionarea interacțiunilor rifamicinelor cu antiretroviralele.",
  "optionRationales": [
   "Textul indică opusul: rifampicina este un inductor potent al citocromului P450 şi reduce concentraţia inhibitorilor de protează.",
   "Textul precizează că la CD4 sub 100 celule/mm3 ART se iniţiază la 2 săptămâni de la începerea terapiei antituberculoase.",
   "Temporizarea cu cel puţin 6 săptămâni se aplică pacienţilor cu CD4 peste 200 celule/mm3, nu celor cu CD4 de 80/mm3.",
   "Rifabutina are efect mai slab asupra citocromului P450 şi poate substitui rifampicina.",
   "Textul precizează că IRIS-TB nu reflectă o terapie antituberculoasă inadecvată şi nu este limitat la o anumită combinaţie de ARV."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Cere aplicarea pragului de CD4 din vignetă la două intervale diferite de inițiere a ART și inversează sensul interacțiunii rifampicină–inhibitori de protează."
  },
  "textbookExpressions": [
   "inductor potent al citocromului P450",
   "Rifabutina are un efect mai slab"
  ]
 },
 {
  "id": "hiv-adv-010",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Care dintre următoarele afirmații privind prevenirea transmiterii infecției HIV sunt adevărate?",
  "options": [
   "Circumcizia bărbaților heterosexuali neinfectați a redus transmiterea HIV de la femei la bărbați cu cel puțin 20%",
   "Profilaxia pre-expunere constă în tenofovir-emtricitabină per os, zilnic sau înaintea expunerii, cu o reducere de până la 90% a riscului de infectare",
   "Profilaxia post-expunere este benefică dacă este administrată în primele 7 zile de la expunere",
   "Studiile Partner 1 și Partner 2 au raportat transmisie zero de la partenerul HIV-pozitiv nedetectabil sub ART la partenerul neinfectat",
   "Dezvoltarea unui vaccin eficient a fost facilitată de variabilitatea genetică redusă a virusului"
  ],
  "correct": [
   1,
   3
  ],
  "explanation": "Circumcizia bărbaților heterosexuali neinfectați a redus transmiterea HIV de la femei la bărbați cu cel puțin 20% — Incorect: Textul precizează o reducere de cel puţin 50% a transmiterii de la femei la bărbaţi după circumcizie, nu 20%.\n\nProfilaxia pre-expunere constă în tenofovir-emtricitabină per os, zilnic sau înaintea expunerii, cu o reducere de până la 90% a riscului de infectare — Corect: PrEP constă în tenofovir-emtricitabină per os, zilnic sau înaintea expunerii, cu reducere de până la 90% a riscului.\n\nProfilaxia post-expunere este benefică dacă este administrată în primele 7 zile de la expunere — Incorect: Textul precizează că PEP este benefică dacă este administrată în primele 72 de ore, nu 7 zile.\n\nStudiile Partner 1 și Partner 2 au raportat transmisie zero de la partenerul HIV-pozitiv nedetectabil sub ART la partenerul neinfectat — Corect: Studiile Partner 1 şi 2 au raportat transmisie zero, stând la baza mesajului „U = U\".\n\nDezvoltarea unui vaccin eficient a fost facilitată de variabilitatea genetică redusă a virusului — Incorect: Textul indică opusul: dezvoltarea vaccinului a fost îngreunată de variabilitatea genetică a virusului şi de răspunsul imun complex al gazdei.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1450, 1441, 1449, HIV — Prevenția și măsurile de control în infecția HIV (pagini PDF: 391, 382, 390).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1450,
    1441,
    1449
   ],
   "pdfPages": [
    391,
    382,
    390
   ],
   "section": "HIV — Prevenția și măsurile de control în infecția HIV"
  },
  "learningObjective": "Cuantificarea eficienței principalelor intervenții biomedicale de prevenire a HIV (circumcizie, PrEP, PEP, tratament ca prevenție).",
  "optionRationales": [
   "Textul precizează o reducere de cel puţin 50% a transmiterii de la femei la bărbaţi după circumcizie, nu 20%.",
   "PrEP constă în tenofovir-emtricitabină per os, zilnic sau înaintea expunerii, cu reducere de până la 90% a riscului.",
   "Textul precizează că PEP este benefică dacă este administrată în primele 72 de ore, nu 7 zile.",
   "Studiile Partner 1 şi 2 au raportat transmisie zero, stând la baza mesajului „U = U\".",
   "Textul indică opusul: dezvoltarea vaccinului a fost îngreunată de variabilitatea genetică a virusului şi de răspunsul imun complex al gazdei."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Trei praguri numerice de eficiență/timp sunt alterate cu valori plauzibile (20% față de 50%, 7 zile față de 72 de ore), iar ultimul distractor inversează cauzalitatea."
  },
  "textbookExpressions": [
   "transmisie zero",
   "cel puţin 50%"
  ]
 },
 {
  "id": "hiv-adv-011",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Țintele globale UNAIDS „90-90-90\" prevăd ca:",
  "options": [
   "90% dintre persoanele care trăiesc cu HIV să fie diagnosticate și să-și cunoască statusul serologic",
   "90% dintre persoanele diagnosticate să primească terapie ARV",
   "90% dintre cei care primesc ARV să aibă supresie virală",
   "90% dintre cei cu supresie virală să fie vindecați funcțional, fără tratament ulterior",
   "Aceste ținte să fie atinse până în 2020, nu până în 2030"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "90% dintre persoanele care trăiesc cu HIV să fie diagnosticate și să-și cunoască statusul serologic — Corect: Prima treaptă este diagnosticul a 90% dintre persoanele care trăiesc cu HIV.\n\n90% dintre persoanele diagnosticate să primească terapie ARV — Corect: A doua treaptă este ARV la 90% dintre diagnosticați.\n\n90% dintre cei care primesc ARV să aibă supresie virală — Corect: A treia treaptă este supresia virală la 90% dintre cei tratați.\n\n90% dintre cei cu supresie virală să fie vindecați funcțional, fără tratament ulterior — Incorect: Supresia virală nu echivalează cu vindecare funcțională.\n\nAceste ținte să fie atinse până în 2020, nu până în 2030 — Incorect: Textul leagă țintele de încheierea epidemiei până în 2030.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1426, HIV — Epidemiologie: țintele 90-90-90 (pagini PDF: 367).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1426
   ],
   "pdfPages": [
    367
   ],
   "section": "HIV — Epidemiologie: țintele 90-90-90"
  },
  "learningObjective": "Recunoașterea celor trei trepte ale cascadei 90-90-90 și a orizontului 2030, fără a confunda supresia cu vindecarea.",
  "optionRationales": [
   "Prima treaptă este diagnosticul a 90% dintre persoanele care trăiesc cu HIV.",
   "A doua treaptă este ARV la 90% dintre diagnosticați.",
   "A treia treaptă este supresia virală la 90% dintre cei tratați.",
   "Supresia virală nu echivalează cu vindecare funcțională.",
   "Textul leagă țintele de încheierea epidemiei până în 2030."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Adaugă o a patra treaptă inexistentă (vindecare) și mută orizontul de la 2030 la 2020."
  },
  "textbookExpressions": [
   "90-90-90",
   "până în 2030"
  ]
 },
 {
  "id": "hiv-adv-012",
  "topicId": "hiv",
  "type": "CM",
  "stem": "În Marea Britanie, în 2017, următoarele afirmații epidemiologice sunt adevărate:",
  "options": [
   "Numărul de cazuri noi a crescut față de 2015, reflectând eșecul PrEP",
   "Dintre cei diagnosticați, 98% erau în tratament ARV, iar 97% dintre tratați aveau supresie virală",
   "Diagnosticul tardiv (CD4 sub 350/ml în primele 3 luni) rămânea de 43%",
   "Circa 75% dintre cei care trăiesc cu HIV au cel puțin încă o afecțiune cronică",
   "O treime dintre persoanele care trăiesc cu HIV aveau sub 30 de ani"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "explanation": "Numărul de cazuri noi a crescut față de 2015, reflectând eșecul PrEP — Incorect: Textul descrie o scădere a cazurilor noi din 2015, nu o creștere.\n\nDintre cei diagnosticați, 98% erau în tratament ARV, iar 97% dintre tratați aveau supresie virală — Corect: 98% tratați și 97% cu supresie sunt cifrele din 2017.\n\nDiagnosticul tardiv (CD4 sub 350/ml în primele 3 luni) rămânea de 43% — Corect: 43% diagnostic tardiv este explicit.\n\nCirca 75% dintre cei care trăiesc cu HIV au cel puțin încă o afecțiune cronică — Corect: 75% au cel puțin o comorbiditate cronică.\n\nO treime dintre persoanele care trăiesc cu HIV aveau sub 30 de ani — Incorect: O treime au peste 50 de ani, nu sub 30.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1426, HIV — Epidemiologie în țările cu nivel de trai ridicat (pagini PDF: 367).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1426
   ],
   "pdfPages": [
    367
   ],
   "section": "HIV — Epidemiologie în țările cu nivel de trai ridicat"
  },
  "learningObjective": "Reținerea cascadei britanice 92/98/97 și a ponderii diagnosticului tardiv (43%) versus comorbiditățile (75%).",
  "optionRationales": [
   "Textul descrie o scădere a cazurilor noi din 2015, nu o creștere.",
   "98% tratați și 97% cu supresie sunt cifrele din 2017.",
   "43% diagnostic tardiv este explicit.",
   "75% au cel puțin o comorbiditate cronică.",
   "O treime au peste 50 de ani, nu sub 30."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează vârsta (peste 50 versus sub 30) și inversează trendul cazurilor noi, pe fondul unor procente reale din aceeași pagină."
  },
  "textbookExpressions": [
   "43% în 2017",
   "75% dintre cei"
  ]
 },
 {
  "id": "hiv-adv-013",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Transmiterea verticală a HIV:",
  "options": [
   "Fără intervenție, studiile europene indică circa 15%, cu rate de până la 40% în Africa și SUA",
   "În era pre-ARV, alăptarea dubla riscul de transmitere verticală",
   "În Marea Britanie, riscul actual este de 1:1000",
   "90% din infecțiile materno-fetale se înregistrează în țările cu nivel de trai scăzut",
   "Majoritatea infecțiilor se produc in-utero, nașterea și alăptarea având un rol minor"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Fără intervenție, studiile europene indică circa 15%, cu rate de până la 40% în Africa și SUA — Corect: Cifrele 15% europene și până la 40% Africa/SUA sunt din text.\n\nÎn era pre-ARV, alăptarea dubla riscul de transmitere verticală — Corect: Alăptarea dubla riscul în era pre-ARV.\n\nÎn Marea Britanie, riscul actual este de 1:1000 — Corect: Riscul britanic 1:1000 este explicit.\n\n90% din infecțiile materno-fetale se înregistrează în țările cu nivel de trai scăzut — Corect: 90% din transmiterile verticale sunt în țările cu venituri scăzute.\n\nMajoritatea infecțiilor se produc in-utero, nașterea și alăptarea având un rol minor — Incorect: Textul precizează că majoritatea infecțiilor se produc perinatal, deși transmiterea in-utero este posibilă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1427, HIV — Transmiterea verticală (pagini PDF: 368).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1427
   ],
   "pdfPages": [
    368
   ],
   "section": "HIV — Transmiterea verticală"
  },
  "learningObjective": "Cuantificarea riscului fără intervenție, a dublării prin alăptare și a ratei britanice 1:1000, față de predominanța perinatală.",
  "optionRationales": [
   "Cifrele 15% europene și până la 40% Africa/SUA sunt din text.",
   "Alăptarea dubla riscul în era pre-ARV.",
   "Riscul britanic 1:1000 este explicit.",
   "90% din transmiterile verticale sunt în țările cu venituri scăzute.",
   "Textul precizează că majoritatea infecțiilor se produc perinatal, deși transmiterea in-utero este posibilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează locul predominant al transmiterii (in-utero versus perinatal) pe fondul unor procente exacte ușor de memorat greșit."
  },
  "textbookExpressions": [
   "1:1000",
   "alăptarea dubla riscul"
  ]
 },
 {
  "id": "hiv-adv-014",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Patogenia infecției HIV include:",
  "options": [
   "Receptorul recunoscut de gp120 este molecula CD4, împreună cu co-receptorii CCR5 sau CXCR4",
   "Limfocitele T CD4 și CCR5 pozitive din tractul gastrointestinal sunt infectate masiv încă de la început",
   "Timpul de înjumătățire al virusului în circulație este de circa 6 ore, cu 10⁸-10⁹ particule eliberate zilnic",
   "Anticorpii neutralizing apar în primele 48 de ore de la infecție",
   "Infecția independentă de CD4 a astrocitelor și a celulelor epiteliale renale poate deteriora aceste organe"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Receptorul recunoscut de gp120 este molecula CD4, împreună cu co-receptorii CCR5 sau CXCR4 — Corect: Interacțiunea gp120–CD4 cu CCR5 sau CXCR4 este mecanismul de pătrundere.\n\nLimfocitele T CD4 și CCR5 pozitive din tractul gastrointestinal sunt infectate masiv încă de la început — Corect: Infectarea masivă precoce a limfocitelor intestinale este explicită.\n\nTimpul de înjumătățire al virusului în circulație este de circa 6 ore, cu 10⁸-10⁹ particule eliberate zilnic — Corect: Timpul de înjumătățire de circa 6 ore și 10⁸-10⁹ particule/zi sunt citate.\n\nAnticorpii neutralizing apar în primele 48 de ore de la infecție — Incorect: Anticorpii neutralizing apar la circa 12 săptămâni, nu în 48 de ore.\n\nInfecția independentă de CD4 a astrocitelor și a celulelor epiteliale renale poate deteriora aceste organe — Corect: Infecția CD4-independentă a astrocitelor și a epiteliului renal este menționată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1429, 1428, HIV — Patogenie: pătrunderea în celulă și turnover-ul viral (pagini PDF: 370, 369).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1429,
    1428
   ],
   "pdfPages": [
    370,
    369
   ],
   "section": "HIV — Patogenie: pătrunderea în celulă și turnover-ul viral"
  },
  "learningObjective": "Corelarea gp120–CD4–CCR5/CXCR4 cu depleția intestinală precoce și cu cinetică virală de 6 ore.",
  "optionRationales": [
   "Interacțiunea gp120–CD4 cu CCR5 sau CXCR4 este mecanismul de pătrundere.",
   "Infectarea masivă precoce a limfocitelor intestinale este explicită.",
   "Timpul de înjumătățire de circa 6 ore și 10⁸-10⁹ particule/zi sunt citate.",
   "Anticorpii neutralizing apar la circa 12 săptămâni, nu în 48 de ore.",
   "Infecția CD4-independentă a astrocitelor și a epiteliului renal este menționată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută apariția anticorpilor neutralizing de la 12 săptămâni la 48 de ore, intervalul seroconversiei acute."
  },
  "textbookExpressions": [
   "aproximativ 6 ore",
   "translocaţie microbiană"
  ]
 },
 {
  "id": "hiv-adv-015",
  "topicId": "hiv",
  "type": "CS",
  "stem": "„Elite controllers\" sunt definiți ca sub-populația de long-term non-progressors care mențin, în absența ARV, o viremie:",
  "options": [
   "sub 20 copii/ml, pragul celui mai sensibil test de încărcătură",
   "sub 50 copii/ml, pragul de supresie sub tratament",
   "sub 2.000 copii/ml sau chiar nedetectabilă",
   "sub 10.000 copii/ml, pragul de prognostic favorabil",
   "sub 100.000 copii/ml, sub care riscul de SIDA nu crește"
  ],
  "correct": [
   2
  ],
  "explanation": "sub 20 copii/ml, pragul celui mai sensibil test de încărcătură — Incorect: 20 copii/ml este sensibilitatea testului de încărcătură, nu definiția elite controllers.\n\nsub 50 copii/ml, pragul de supresie sub tratament — Incorect: 50 copii/ml este ținta de supresie sub ARV.\n\nsub 2.000 copii/ml sau chiar nedetectabilă — Corect: Textul definește elite controllers prin viremie sub 2.000 copii/ml sau nedetectabilă, fără ARV.\n\nsub 10.000 copii/ml, pragul de prognostic favorabil — Incorect: 10.000 copii/ml este pragul de prognostic comparativ din monitorizare, nu definiția.\n\nsub 100.000 copii/ml, sub care riscul de SIDA nu crește — Incorect: Peste 100.000 copii/ml crește de 10 ori riscul de SIDA; nu definește elite controllers.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1430, HIV — Perioada de latență clinică: elite controllers (pagini PDF: 371).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1430
   ],
   "pdfPages": [
    371
   ],
   "section": "HIV — Perioada de latență clinică: elite controllers"
  },
  "learningObjective": "Diferențierea pragului de 2.000 copii/ml al elite controllers de pragurile de laborator și de prognostic din același capitol.",
  "optionRationales": [
   "20 copii/ml este sensibilitatea testului de încărcătură, nu definiția elite controllers.",
   "50 copii/ml este ținta de supresie sub ARV.",
   "Textul definește elite controllers prin viremie sub 2.000 copii/ml sau nedetectabilă, fără ARV.",
   "10.000 copii/ml este pragul de prognostic comparativ din monitorizare, nu definiția.",
   "Peste 100.000 copii/ml crește de 10 ori riscul de SIDA; nu definește elite controllers."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate pragurile viremice apar în capitol; doar 2.000 copii/ml definește elite controllers."
  },
  "textbookExpressions": [
   "elite controllers",
   "2.000 copii/ml"
  ]
 },
 {
  "id": "hiv-adv-016",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Infecția primară HIV:",
  "options": [
   "Se referă la perioada de 6 luni de la contactare, cu replicare rapidă și infecțiozitate ridicată",
   "Boala virală autolimitată, confuzabilă cu mononucleoza, apare după 3-6 săptămâni și durează până la 3 săptămâni",
   "Limfocitele CD4 sunt invariabil normale, raportul CD4:CD8 rămânând neschimbat",
   "Anticorpii pot lipsi în etapele timpurii, deși ARN-ul viral plasmatic este crescut și p24 poate fi detectat",
   "Dacă testele standard sunt negative dar suspiciunea persistă, testarea se repetă după 7 zile"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "Se referă la perioada de 6 luni de la contactare, cu replicare rapidă și infecțiozitate ridicată — Corect: Primoinfecția acoperă 6 luni, cu viremie înaltă.\n\nBoala virală autolimitată, confuzabilă cu mononucleoza, apare după 3-6 săptămâni și durează până la 3 săptămâni — Corect: Intervalul 3-6 săptămâni și durata până la 3 săptămâni sunt explicite.\n\nLimfocitele CD4 sunt invariabil normale, raportul CD4:CD8 rămânând neschimbat — Incorect: CD4 pot fi scăzute semnificativ, cu inversarea raportului CD4:CD8.\n\nAnticorpii pot lipsi în etapele timpurii, deși ARN-ul viral plasmatic este crescut și p24 poate fi detectat — Corect: ARN crescut și p24 detectabil înaintea anticorpilor sunt descrise.\n\nDacă testele standard sunt negative dar suspiciunea persistă, testarea se repetă după 7 zile — Corect: Repetarea după 7 zile este recomandată explicit.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1430, HIV — Infecția primară: clinic și diagnostic (pagini PDF: 371).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1430
   ],
   "pdfPages": [
    371
   ],
   "section": "HIV — Infecția primară: clinic și diagnostic"
  },
  "learningObjective": "Recunoașterea ferestrei de 6 luni, a sindromului de la 3-6 săptămâni și a strategiei de retestare la 7 zile.",
  "optionRationales": [
   "Primoinfecția acoperă 6 luni, cu viremie înaltă.",
   "Intervalul 3-6 săptămâni și durata până la 3 săptămâni sunt explicite.",
   "CD4 pot fi scăzute semnificativ, cu inversarea raportului CD4:CD8.",
   "ARN crescut și p24 detectabil înaintea anticorpilor sunt descrise.",
   "Repetarea după 7 zile este recomandată explicit."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă limfopenia și inversarea CD4:CD8, semne de laborator reale ale fazei acute."
  },
  "textbookExpressions": [
   "6 luni de la contactarea",
   "limfocite reactive atipice"
  ]
 },
 {
  "id": "hiv-adv-017",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Limfadenopatia generalizată persistentă (LGP) în infecția HIV:",
  "options": [
   "Este definită ca adenopatie peste 1 cm în două sau mai multe zone extra-inghinale, peste 3 luni, fără altă cauză decât HIV",
   "Ganglionii sunt de obicei simetrici, fermi, mobili și nedureroși, uneori cu splenomegalie",
   "Biopsia ganglionară este indicată de rutină la toți pacienții cu LGP",
   "Prezența LGP accelerează invariabil progresia către SIDA",
   "Adenopatia se accentuează pe măsură ce boala avansează, fără regresia ulterioară"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Este definită ca adenopatie peste 1 cm în două sau mai multe zone extra-inghinale, peste 3 luni, fără altă cauză decât HIV — Corect: Definiția dimensională, topografică și temporală este explicită.\n\nGanglionii sunt de obicei simetrici, fermi, mobili și nedureroși, uneori cu splenomegalie — Corect: Caracterele palpatorii și splenomegalia posibilă sunt descrise.\n\nBiopsia ganglionară este indicată de rutină la toți pacienții cu LGP — Incorect: Biopsia nu este în general indicată.\n\nPrezența LGP accelerează invariabil progresia către SIDA — Incorect: Prezența LGP nu pare să influențeze evoluția bolii.\n\nAdenopatia se accentuează pe măsură ce boala avansează, fără regresia ulterioară — Incorect: Pe măsură ce boala progresează, adenopatia poate să regreseze.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1430, HIV — Limfadenopatia generalizată persistentă (pagini PDF: 371).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1430
   ],
   "pdfPages": [
    371
   ],
   "section": "HIV — Limfadenopatia generalizată persistentă"
  },
  "learningObjective": "Aplicarea definiției LGP (1 cm, extra-inghinal, >3 luni) și a faptului că nu modifică evoluția, biopsia nefiind de rutină.",
  "optionRationales": [
   "Definiția dimensională, topografică și temporală este explicită.",
   "Caracterele palpatorii și splenomegalia posibilă sunt descrise.",
   "Biopsia nu este în general indicată.",
   "Prezența LGP nu pare să influențeze evoluția bolii.",
   "Pe măsură ce boala progresează, adenopatia poate să regreseze."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă o entitate fără impact prognostic într-un marker de progresie și face din biopsie o rutină."
  },
  "textbookExpressions": [
   ">1 cm",
   "zone extra-inghinale"
  ]
 },
 {
  "id": "hiv-adv-018",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Trombocitopenia izolată din infecția HIV:",
  "options": [
   "Poate apărea precoce și poate fi, o perioadă, singura manifestare",
   "Numărul poate scădea dramatic la 10-20 × 10⁹/L, cu sângerări și echimoze",
   "Anticorpii circulanți antitrombocitari determină distrugere periferică",
   "Terapia cu corticosteroizi este tratamentul de primă intenție, înaintea ARV",
   "ARV eficient produce frecvent creșterea numărului de trombocite"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Poate apărea precoce și poate fi, o perioadă, singura manifestare — Corect: Apariția precoce ca unică manifestare este explicită.\n\nNumărul poate scădea dramatic la 10-20 × 10⁹/L, cu sângerări și echimoze — Corect: Pragul 10-20 × 10⁹/L este citat.\n\nAnticorpii circulanți antitrombocitari determină distrugere periferică — Corect: Distrugerea periferică prin anticorpi este descrisă.\n\nTerapia cu corticosteroizi este tratamentul de primă intenție, înaintea ARV — Incorect: Textul precizează că terapia cu corticoizi ar trebui evitată.\n\nARV eficient produce frecvent creșterea numărului de trombocite — Corect: ARV eficient crește frecvent trombocitele.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1431, HIV — Complicații hematologice: trombocitopenia (pagini PDF: 372).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1431
   ],
   "pdfPages": [
    372
   ],
   "section": "HIV — Complicații hematologice: trombocitopenia"
  },
  "learningObjective": "Recunoașterea mecanismului imun periferic și a evitării corticoizilor, ARV fiind intervenția care crește trombocitele.",
  "optionRationales": [
   "Apariția precoce ca unică manifestare este explicită.",
   "Pragul 10-20 × 10⁹/L este citat.",
   "Distrugerea periferică prin anticorpi este descrisă.",
   "Textul precizează că terapia cu corticoizi ar trebui evitată.",
   "ARV eficient crește frecvent trombocitele."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează locul corticoizilor (de evitat) cu al ARV, pe fondul unui prag numeric real."
  },
  "textbookExpressions": [
   "10-20 x 109/L",
   "corticosterozi ar trebui evitată"
  ]
 },
 {
  "id": "hiv-adv-019",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Nefropatia asociată HIV (HIVAN):",
  "options": [
   "Este cel mai frecvent întâlnită la bărbații de rasă neagră și poate fi exacerbată de heroină",
   "Este o glomeruloscleroză focală segmentară cu tubulopatie prin infectarea directă a celulelor tubulare",
   "Poate progresa până la insuficiență renală cu necesar de substituție sau transplant",
   "Tenofovirul este asociat cu sindromul Fanconi",
   "Este forma dominantă de afectare renală la caucazieni cu CD4 peste 500/mm³"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Este cel mai frecvent întâlnită la bărbații de rasă neagră și poate fi exacerbată de heroină — Corect: Predominanța la bărbații de rasă neagră și exacerbarea prin heroină sunt explicite.\n\nEste o glomeruloscleroză focală segmentară cu tubulopatie prin infectarea directă a celulelor tubulare — Corect: GSFS cu infectare tubulară directă este mecanismul descris.\n\nPoate progresa până la insuficiență renală cu necesar de substituție sau transplant — Corect: Progresia către substituție/transplant este menționată.\n\nTenofovirul este asociat cu sindromul Fanconi — Corect: Tenofovirul este asociat cu sindromul Fanconi.\n\nEste forma dominantă de afectare renală la caucazieni cu CD4 peste 500/mm³ — Incorect: HIVAN este rară și caracteristică stadiilor avansate, nu caucazienilor cu CD4 înalt.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1432, HIV — Complicații renale: HIVAN (pagini PDF: 373).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1432
   ],
   "pdfPages": [
    373
   ],
   "section": "HIV — Complicații renale: HIVAN"
  },
  "learningObjective": "Recunoașterea profilului demografic, a FSGS cu tubulopatie și a toxicității Fanconi a tenofovirului.",
  "optionRationales": [
   "Predominanța la bărbații de rasă neagră și exacerbarea prin heroină sunt explicite.",
   "GSFS cu infectare tubulară directă este mecanismul descris.",
   "Progresia către substituție/transplant este menționată.",
   "Tenofovirul este asociat cu sindromul Fanconi.",
   "HIVAN este rară și caracteristică stadiilor avansate, nu caucazienilor cu CD4 înalt."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie HIVAN-ul pacientului caucazian cu imunodepresie minimă, opusul profilului din text."
  },
  "textbookExpressions": [
   "bărbaţii de rasă neagră",
   "sindromul Fanconi"
  ]
 },
 {
  "id": "hiv-adv-020",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Standardul actual de testare HIV în numeroase țări este reprezentat de testele de generația a 4-a, care identifică simultan:",
  "options": [
   "Doar anticorpii anti-HIV-1, nu și anti-HIV-2",
   "Doar ARN-ul viral, analog NAAT",
   "Anticorpii anti-HIV și antigenul p24",
   "Doar antigenul p24, după dispariția anticorpilor",
   "Izolarea virusului în culturi, ca metodă de screening"
  ],
  "correct": [
   2
  ],
  "explanation": "Doar anticorpii anti-HIV-1, nu și anti-HIV-2 — Incorect: Testele de generația a 4-a nu se limitează la Ac anti-HIV-1.\n\nDoar ARN-ul viral, analog NAAT — Incorect: NAAT detectează genomul, nu este testul de generația a 4-a descris aici.\n\nAnticorpii anti-HIV și antigenul p24 — Corect: Textul precizează identificarea simultană a anticorpilor și a antigenului p24.\n\nDoar antigenul p24, după dispariția anticorpilor — Incorect: p24 dispare de obicei la 8-10 săptămâni, iar testul de generația a 4-a include și anticorpii.\n\nIzolarea virusului în culturi, ca metodă de screening — Incorect: Culturile sunt tehnici specializate, nu screening.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1433, HIV — Testarea HIV: teste de generația a 4-a (pagini PDF: 374).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1433
   ],
   "pdfPages": [
    374
   ],
   "section": "HIV — Testarea HIV: teste de generația a 4-a"
  },
  "learningObjective": "Identificarea combinației Ac + p24 ca standard de generația a 4-a, distinct de NAAT și de culturi.",
  "optionRationales": [
   "Testele de generația a 4-a nu se limitează la Ac anti-HIV-1.",
   "NAAT detectează genomul, nu este testul de generația a 4-a descris aici.",
   "Textul precizează identificarea simultană a anticorpilor și a antigenului p24.",
   "p24 dispare de obicei la 8-10 săptămâni, iar testul de generația a 4-a include și anticorpii.",
   "Culturile sunt tehnici specializate, nu screening."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează țintele diagnostice (Ac, p24, ARN, culturi) din același capitol de testare."
  },
  "textbookExpressions": [
   "antigenul p24",
   "Testele moderne"
  ]
 },
 {
  "id": "hiv-adv-021",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Anticorpii anti-HIV, ca marker de infecție:",
  "options": [
   "Pot fi detectați după o perioadă de 3 luni (în medie 6 săptămâni) de la infecție",
   "Traversează placenta, astfel că toți nou-născuții din mame HIV-pozitive îi au la naștere",
   "La nou-născuții neinfectați, titrul scade până la dispariție în primele 18 luni",
   "Sunt un marker de infecție activă neonatală, echivalent PCR-ului",
   "Algoritmul STARHS distinge infecția recentă (sub 130 de zile) de cea mai veche"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Pot fi detectați după o perioadă de 3 luni (în medie 6 săptămâni) de la infecție — Corect: Fereastra de 3 luni, media 6 săptămâni, este explicită.\n\nTraversează placenta, astfel că toți nou-născuții din mame HIV-pozitive îi au la naștere — Corect: Trecerea transplacentară a IgG este descrisă.\n\nLa nou-născuții neinfectați, titrul scade până la dispariție în primele 18 luni — Corect: Dispariția până la 18 luni la neinfectați este citată.\n\nSunt un marker de infecție activă neonatală, echivalent PCR-ului — Incorect: Anticorpii nu sunt marker de infecție activă neonatală.\n\nAlgoritmul STARHS distinge infecția recentă (sub 130 de zile) de cea mai veche — Corect: STARHS cu pragul de 130 de zile este descris.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1433, HIV — Detecția anticorpilor anti-HIV (pagini PDF: 374).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1433
   ],
   "pdfPages": [
    374
   ],
   "section": "HIV — Detecția anticorpilor anti-HIV"
  },
  "learningObjective": "Aplicarea ferestrei serologice medii de 6 săptămâni, a transferului transplacentar și a dispariției până la 18 luni la copilul neinfectat.",
  "optionRationales": [
   "Fereastra de 3 luni, media 6 săptămâni, este explicită.",
   "Trecerea transplacentară a IgG este descrisă.",
   "Dispariția până la 18 luni la neinfectați este citată.",
   "Anticorpii nu sunt marker de infecție activă neonatală.",
   "STARHS cu pragul de 130 de zile este descris."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă anticorpii transplacentari într-un diagnostic de infecție neonatală activă, greșeala clasică de interpretare."
  },
  "textbookExpressions": [
   "primele 18 luni",
   "fereastră serologică"
  ]
 },
 {
  "id": "hiv-adv-022",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Evaluarea inițială a pacientului nou diagnosticat cu HIV include:",
  "options": [
   "Consult de specialist în termen de două săptămâni, sau mai rapid dacă este simptomatic",
   "Analiza genotipului viral doar după eșecul primei linii de ARV",
   "HLA-B*5701 figurează printre investigațiile de bază din Marea Britanie",
   "Monitorizarea celor care refuză ARV se face săptămânal, indiferent de CD4",
   "Cea mai adecvată probă pentru genotip este cea recoltată cât mai aproape de diagnostic"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "explanation": "Consult de specialist în termen de două săptămâni, sau mai rapid dacă este simptomatic — Corect: Două săptămâni, mai rapid dacă simptomatic, este explicit.\n\nAnaliza genotipului viral doar după eșecul primei linii de ARV — Incorect: Genotiparea este recomandată pentru toți nou-diagnosticații, nu după eșec.\n\nHLA-B*5701 figurează printre investigațiile de bază din Marea Britanie — Corect: HLA-B*5701 este în Cadranul 37.14.\n\nMonitorizarea celor care refuză ARV se face săptămânal, indiferent de CD4 — Incorect: Cei care refuză ARV sunt monitorizați de 2-4 ori pe an, mai rar la CD4 crescut.\n\nCea mai adecvată probă pentru genotip este cea recoltată cât mai aproape de diagnostic — Corect: Proba cât mai aproape de diagnostic ghidează ARV.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1434, 1433, HIV — Evaluarea inițială și determinarea genotipului (pagini PDF: 375, 374).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1434,
    1433
   ],
   "pdfPages": [
    375,
    374
   ],
   "section": "HIV — Evaluarea inițială și determinarea genotipului"
  },
  "learningObjective": "Reținerea ferestrei de 2 săptămâni până la specialist și a genotipării imediat după diagnostic, inclusiv HLA-B*5701.",
  "optionRationales": [
   "Două săptămâni, mai rapid dacă simptomatic, este explicit.",
   "Genotiparea este recomandată pentru toți nou-diagnosticații, nu după eșec.",
   "HLA-B*5701 este în Cadranul 37.14.",
   "Cei care refuză ARV sunt monitorizați de 2-4 ori pe an, mai rar la CD4 crescut.",
   "Proba cât mai aproape de diagnostic ghidează ARV."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amână genotiparea până la eșec și înlocuiește intervalul 2-4 ori/an cu monitorizare săptămânală."
  },
  "textbookExpressions": [
   "două săptămâni",
   "2-4 ori pe an"
  ]
 },
 {
  "id": "hiv-adv-023",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Inițierea terapiei antiretrovirale:",
  "options": [
   "ARV trebuie oferit tuturor pacienților cu HIV, indiferent de numărul de CD4",
   "La o afecțiune definitorie SIDA sau o infecție oportunistă, ARV se inițiază în termen de două săptămâni de la tratamentul afecțiunii intercurente",
   "La primoinfecție, ARV trebuie inițiat imediat",
   "Renunțarea la pragul de CD4 s-a bazat și pe beneficiul demonstrat la CD4 peste 500",
   "ARV se amână până când CD4 scade sub 350/mm³, conform ghidurilor vechi încă în vigoare"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "ARV trebuie oferit tuturor pacienților cu HIV, indiferent de numărul de CD4 — Corect: Indicația independentă de CD4 este explicită.\n\nLa o afecțiune definitorie SIDA sau o infecție oportunistă, ARV se inițiază în termen de două săptămâni de la tratamentul afecțiunii intercurente — Corect: Fereastra de două săptămâni după OI/SIDA este citată.\n\nLa primoinfecție, ARV trebuie inițiat imediat — Corect: Inițierea imediată în primoinfecție este cerută.\n\nRenunțarea la pragul de CD4 s-a bazat și pe beneficiul demonstrat la CD4 peste 500 — Corect: Beneficiul la CD4 >500 este argumentul abandonării pragurilor vechi.\n\nARV se amână până când CD4 scade sub 350/mm³, conform ghidurilor vechi încă în vigoare — Incorect: Ghidurile vechi bazate pe CD4 au fost abandonate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1435, HIV — Când trebuie inițiată terapia antiretrovirală (pagini PDF: 376).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1435
   ],
   "pdfPages": [
    376
   ],
   "section": "HIV — Când trebuie inițiată terapia antiretrovirală"
  },
  "learningObjective": "Aplicarea indicației universale de ARV, cu inițiere imediată în primoinfecție și în 2 săptămâni după OI.",
  "optionRationales": [
   "Indicația independentă de CD4 este explicită.",
   "Fereastra de două săptămâni după OI/SIDA este citată.",
   "Inițierea imediată în primoinfecție este cerută.",
   "Beneficiul la CD4 >500 este argumentul abandonării pragurilor vechi.",
   "Ghidurile vechi bazate pe CD4 au fost abandonate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reintroduce pragul vechi de 350/mm³ ca regulă actuală, contrar paragrafului de abandonare a acestor praguri."
  },
  "textbookExpressions": [
   "indiferent de numărul",
   "peste 500"
  ]
 },
 {
  "id": "hiv-adv-024",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Regimul de primă linie la pacientul naiv trebuie să conțină:",
  "options": [
   "Un singur INRT, pentru a limita toxicitatea mitocondrială",
   "Două INRT plus un al treilea agent: INSTI, IP potențat sau INNRT",
   "Tenofovir-DF sau TAF plus emtricitabină ca fundament INRT recomandat",
   "Abacavir este contraindicat la purtătorii HLA-B*57:01",
   "Monoterapia cu un INSTI este suficientă la viremie sub 10.000 copii/ml"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "explanation": "Un singur INRT, pentru a limita toxicitatea mitocondrială — Incorect: Tratamentul se inițiază cu trei medicamente, două INRT plus un al treilea.\n\nDouă INRT plus un al treilea agent: INSTI, IP potențat sau INNRT — Corect: Cadranul 37.18 descrie doi INRT plus INSTI, IP boostat sau INNRT.\n\nTenofovir-DF sau TAF plus emtricitabină ca fundament INRT recomandat — Corect: TDF/TAF plus emtricitabină este fundamentul recomandat.\n\nAbacavir este contraindicat la purtătorii HLA-B*57:01 — Corect: Abacavirul este contraindicat la HLA-B*57:01.\n\nMonoterapia cu un INSTI este suficientă la viremie sub 10.000 copii/ml — Incorect: Monoterapia INSTI nu este schema de primă linie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1437, HIV — Cu ce medicamente se inițiază terapia ARV (pagini PDF: 378).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1437
   ],
   "pdfPages": [
    378
   ],
   "section": "HIV — Cu ce medicamente se inițiază terapia ARV"
  },
  "learningObjective": "Reținerea schemei 2 INRT + al treilea agent și a contraindicației abacavirului la HLA-B*57:01.",
  "optionRationales": [
   "Tratamentul se inițiază cu trei medicamente, două INRT plus un al treilea.",
   "Cadranul 37.18 descrie doi INRT plus INSTI, IP boostat sau INNRT.",
   "TDF/TAF plus emtricitabină este fundamentul recomandat.",
   "Abacavirul este contraindicat la HLA-B*57:01.",
   "Monoterapia INSTI nu este schema de primă linie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reduce schema de trei medicamente la un singur INRT sau la monoterapie INSTI, greșeli de dezescaladare."
  },
  "textbookExpressions": [
   "trei medicamente",
   "HLA-6*57:01"
  ]
 },
 {
  "id": "hiv-adv-025",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Combinația abacavir/lamivudină (Kivexa) la naivi, în absența asocierii cu dolutegravir, este recomandată doar dacă viremia la inițiere este:",
  "options": [
   "nedetectabilă",
   "sub 50 copii/ml",
   "sub 10.000 copii/ml",
   "sub 100.000 copii/ml",
   "peste 100.000 copii/ml, unde este superioară Truvadei"
  ],
  "correct": [
   3
  ],
  "explanation": "nedetectabilă — Incorect: Nedetectabilul este ținta sub tratament, nu criteriul de alegere Kivexa.\n\nsub 50 copii/ml — Incorect: 50 copii/ml este supresia, nu pragul de prescriere.\n\nsub 10.000 copii/ml — Incorect: 10.000 copii/ml este un prag de prognostic, nu de alegere a backbone-ului.\n\nsub 100.000 copii/ml — Corect: Non-inferioritatea Kivexa la viremii sub 100.000 copii/ml este explicită.\n\npeste 100.000 copii/ml, unde este superioară Truvadei — Incorect: La viremie mare, Kivexa se folosește doar dacă Truvada este contraindicată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1437, HIV — INRT: Kivexa versus Truvada (pagini PDF: 378).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1437
   ],
   "pdfPages": [
    378
   ],
   "section": "HIV — INRT: Kivexa versus Truvada"
  },
  "learningObjective": "Reținerea pragului de 100.000 copii/ml sub care Kivexa este non-inferioară, cu excepția asocierii cu dolutegravir.",
  "optionRationales": [
   "Nedetectabilul este ținta sub tratament, nu criteriul de alegere Kivexa.",
   "50 copii/ml este supresia, nu pragul de prescriere.",
   "10.000 copii/ml este un prag de prognostic, nu de alegere a backbone-ului.",
   "Non-inferioritatea Kivexa la viremii sub 100.000 copii/ml este explicită.",
   "La viremie mare, Kivexa se folosește doar dacă Truvada este contraindicată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate pragurile viremice apar în capitol; doar 100.000 copii/ml condiționează Kivexa (fără dolutegravir)."
  },
  "textbookExpressions": [
   "100.000 de copii/ml",
   "Kivexa"
  ]
 },
 {
  "id": "hiv-adv-026",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Selectați enunțurile adevărate despre inhibitorii non-nucleozidici de revers-transcriptază:",
  "options": [
   "INNRT sunt eficienți împotriva HIV-2, spre deosebire de INRT",
   "Efavirenzul este astăzi mai degrabă alternativă decât elecție, din cauza efectelor pe SNC (disforie, insomnie, risc suicidar)",
   "Rilpivirina trebuie administrată cu alimente; inhibitorii pompei de protoni sunt contraindicați",
   "Nevirapina nu trebuie folosită la femei cu CD4 peste 250/mm³ sau la bărbați cu CD4 peste 400/mm³",
   "Etravirina nu are nicio activitate pe tulpinile rezistente la alți INNRT"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "explanation": "INNRT sunt eficienți împotriva HIV-2, spre deosebire de INRT — Incorect: INNRT sunt ineficienți împotriva HIV-2.\n\nEfavirenzul este astăzi mai degrabă alternativă decât elecție, din cauza efectelor pe SNC (disforie, insomnie, risc suicidar) — Corect: Efectele SNC mută efavirenzul la alternativă.\n\nRilpivirina trebuie administrată cu alimente; inhibitorii pompei de protoni sunt contraindicați — Corect: Administrarea cu alimente și contraindicația IPP sunt explicite.\n\nNevirapina nu trebuie folosită la femei cu CD4 peste 250/mm³ sau la bărbați cu CD4 peste 400/mm³ — Corect: Pragurile 250 (femei) și 400 (bărbați) sunt citate.\n\nEtravirina nu are nicio activitate pe tulpinile rezistente la alți INNRT — Incorect: Etravirina are oarecare activitate împotriva tulpinilor rezistente.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1437, HIV — Analogii non-nucleozidici de revers-transcriptază (pagini PDF: 378).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1437
   ],
   "pdfPages": [
    378
   ],
   "section": "HIV — Analogii non-nucleozidici de revers-transcriptază"
  },
  "learningObjective": "Diferențierea locului actual al efavirenzului, a restricțiilor rilpivirinei (alimente, IPP) și a pragurilor de CD4 pentru nevirapină.",
  "optionRationales": [
   "INNRT sunt ineficienți împotriva HIV-2.",
   "Efectele SNC mută efavirenzul la alternativă.",
   "Administrarea cu alimente și contraindicația IPP sunt explicite.",
   "Pragurile 250 (femei) și 400 (bărbați) sunt citate.",
   "Etravirina are oarecare activitate împotriva tulpinilor rezistente."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie INNRT activitate pe HIV-2 (fals) și neagă activitatea reziduală a etravirinei."
  },
  "textbookExpressions": [
   "inhibitorii pompei de protoni",
   "peste 250/mm3"
  ]
 },
 {
  "id": "hiv-adv-027",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Inhibitorii de protează „bostați\":",
  "options": [
   "Boosting-ul cu doze mici de ritonavir sau cobicistat blochează P450, crescând timpul de înjumătățire al IP",
   "Atazanavirul crește bilirubina neconjugată și poate produce icter",
   "Boosting-ul reduce riscul de tulburări lipidice, în particular al trigliceridelor",
   "IP au, în general, o barieră genetică mai joasă decât INNRT",
   "Darunavirul nu are activitate pe virusuri rezistente la IP mai vechi"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Boosting-ul cu doze mici de ritonavir sau cobicistat blochează P450, crescând timpul de înjumătățire al IP — Corect: Mecanismul de boosting prin blocarea P450 este explicit.\n\nAtazanavirul crește bilirubina neconjugată și poate produce icter — Corect: Hiperbilirubinemia neconjugată și icterul sunt descrise la atazanavir.\n\nBoosting-ul reduce riscul de tulburări lipidice, în particular al trigliceridelor — Incorect: Boosting-ul crește riscul tulburărilor lipidice, în particular al trigliceridelor.\n\nIP au, în general, o barieră genetică mai joasă decât INNRT — Incorect: IP au barieră genetică mai înaltă, nu mai joasă.\n\nDarunavirul nu are activitate pe virusuri rezistente la IP mai vechi — Incorect: Darunavirul a demonstrat activitate împotriva virusurilor rezistente la IP vechi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1438, HIV — Inhibitorii de protează (pagini PDF: 379).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1438
   ],
   "pdfPages": [
    379
   ],
   "section": "HIV — Inhibitorii de protează"
  },
  "learningObjective": "Corelarea boosting-ului P450 cu hiperbilirubinemia de atazanavir, distinct de bariera genetică înaltă a IP.",
  "optionRationales": [
   "Mecanismul de boosting prin blocarea P450 este explicit.",
   "Hiperbilirubinemia neconjugată și icterul sunt descrise la atazanavir.",
   "Boosting-ul crește riscul tulburărilor lipidice, în particular al trigliceridelor.",
   "IP au barieră genetică mai înaltă, nu mai joasă.",
   "Darunavirul a demonstrat activitate împotriva virusurilor rezistente la IP vechi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează efectul boosting-ului asupra lipidelor și atribuie IP bariera joasă a INNRT."
  },
  "textbookExpressions": [
   "poate produce icter",
   "barieră genetică mai înaltă"
  ]
 },
 {
  "id": "hiv-adv-028",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Monitorizarea după inițierea ARV, conform textului:",
  "options": [
   "După 4 săptămâni, încărcătura virală ar trebui să scadă cu cel puțin 1 log10 copii/ml",
   "Supresia sub 50 copii/ml ar trebui obținută între săptămânile 12-24",
   "Viremia se reevaluează la 1, 3 și 6 luni de la inițiere",
   "CD4 se evaluează la 3 luni de la inițiere, apoi la 3-4 luni",
   "După supresie, viremia se dozează săptămânal până la 12 luni"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "După 4 săptămâni, încărcătura virală ar trebui să scadă cu cel puțin 1 log10 copii/ml — Corect: Scăderea de cel puțin 1 log10 la 4 săptămâni este explicită.\n\nSupresia sub 50 copii/ml ar trebui obținută între săptămânile 12-24 — Corect: Supresia <50 între săptămânile 12-24 este ținta.\n\nViremia se reevaluează la 1, 3 și 6 luni de la inițiere — Corect: Reevaluarea la 1, 3 și 6 luni este citată.\n\nCD4 se evaluează la 3 luni de la inițiere, apoi la 3-4 luni — Corect: CD4 la 3 luni, apoi 3-4 luni, este schema.\n\nDupă supresie, viremia se dozează săptămânal până la 12 luni — Incorect: După supresie, în stabilitate, viremia se evaluează la fiecare 6 luni.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1438, HIV — Monitorizarea terapiei ARV (pagini PDF: 379).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1438
   ],
   "pdfPages": [
    379
   ],
   "section": "HIV — Monitorizarea terapiei ARV"
  },
  "learningObjective": "Aplicarea cineticilor 1 log la 4 săptămâni și <50 copii/ml la 12-24 săptămâni, plus calendarul de reevaluare.",
  "optionRationales": [
   "Scăderea de cel puțin 1 log10 la 4 săptămâni este explicită.",
   "Supresia <50 între săptămânile 12-24 este ținta.",
   "Reevaluarea la 1, 3 și 6 luni este citată.",
   "CD4 la 3 luni, apoi 3-4 luni, este schema.",
   "După supresie, în stabilitate, viremia se evaluează la fiecare 6 luni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește intervalul de 6 luni după supresie cu dozări săptămânale, o intensificare nejustificată."
  },
  "textbookExpressions": [
   "1 log10 copii/ml",
   "<50 copii/ml"
  ]
 },
 {
  "id": "hiv-adv-029",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Eșecul virusologic și schimbarea ARV:",
  "options": [
   "Eșecul virusologic este definit prin două determinări succesive peste 400 copii/ml la un pacient anterior suprimat",
   "Noul regim trebuie bazat pe cel puțin doi agenți noi la care virusul este sensibil",
   "Dacă viremia este nedetectabilă și un medicament nu se tolerează, se face switch în aceeași clasă, la un agent la care virusul este sensibil",
   "Întreruperea ARV este de evitat chiar în toxicitate cumulativă, pentru a nu pierde bariera genetică",
   "Efavirenzul și nevirapina, cu timp de înjumătățire lung, pot necesita oprire înaintea celorlalte componente"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Eșecul virusologic este definit prin două determinări succesive peste 400 copii/ml la un pacient anterior suprimat — Corect: Definiția prin două valori >400 copii/ml este explicită.\n\nNoul regim trebuie bazat pe cel puțin doi agenți noi la care virusul este sensibil — Corect: Cel puțin doi agenți noi sensibili sunt ceruți.\n\nDacă viremia este nedetectabilă și un medicament nu se tolerează, se face switch în aceeași clasă, la un agent la care virusul este sensibil — Corect: Switch-ul intra-clasă la intoleranță cu viremie nedetectabilă este descris.\n\nÎntreruperea ARV este de evitat chiar în toxicitate cumulativă, pentru a nu pierde bariera genetică — Incorect: Textul indică întreruperea în toxicitate cumulativă sau interacțiuni urgente.\n\nEfavirenzul și nevirapina, cu timp de înjumătățire lung, pot necesita oprire înaintea celorlalte componente — Corect: Oprirea eșalonată a efavirenzului/nevirapinei este precizată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1440, HIV — Eșecul terapeutic, switch și întrerupere (pagini PDF: 381).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1440
   ],
   "pdfPages": [
    381
   ],
   "section": "HIV — Eșecul terapeutic, switch și întrerupere"
  },
  "learningObjective": "Aplicarea pragului dublu de 400 copii/ml, a regulii celor doi agenți noi și a opririi eșalonate a INNRT cu timp de înjumătățire lung.",
  "optionRationales": [
   "Definiția prin două valori >400 copii/ml este explicită.",
   "Cel puțin doi agenți noi sensibili sunt ceruți.",
   "Switch-ul intra-clasă la intoleranță cu viremie nedetectabilă este descris.",
   "Textul indică întreruperea în toxicitate cumulativă sau interacțiuni urgente.",
   "Oprirea eșalonată a efavirenzului/nevirapinei este precizată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Interzice întreruperea pe care textul o recomandă în toxicitate și cere reținerea pragului dublu de 400 copii/ml."
  },
  "textbookExpressions": [
   "peste 400 copii/ml",
   "timp de înjumătăţire lung"
  ]
 },
 {
  "id": "hiv-adv-030",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Reacția de hipersensibilitate la abacavir, legată de HLA-B*5701, apare de obicei în:",
  "options": [
   "primele 6 săptămâni de la inițiere",
   "primele 48 de ore, analog anafilaxiei IgE",
   "luna a 6-a de tratament, odată cu IRIS",
   "al doilea an, ca toxicitate mitocondrială",
   "numai la reinițiere, nu și la prima expunere"
  ],
  "correct": [
   0
  ],
  "explanation": "primele 6 săptămâni de la inițiere — Corect: Textul precizează apariția de obicei în primele 6 săptămâni.\n\nprimele 48 de ore, analog anafilaxiei IgE — Incorect: Nu este descrisă ca anafilaxie IgE în 48 de ore.\n\nluna a 6-a de tratament, odată cu IRIS — Incorect: IRIS nu este mecanismul HSR la abacavir.\n\nal doilea an, ca toxicitate mitocondrială — Incorect: Toxicitatea mitocondrială este a altor INRT, nu HSR-ul de 6 săptămâni.\n\nnumai la reinițiere, nu și la prima expunere — Incorect: Poate apărea la prima expunere; reinițierea este contraindicată pentru că poate fi fatală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1440, HIV — Reacții alergice: hipersensibilitatea la abacavir (pagini PDF: 381).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1440
   ],
   "pdfPages": [
    381
   ],
   "section": "HIV — Reacții alergice: hipersensibilitatea la abacavir"
  },
  "learningObjective": "Reținerea ferestrei de 6 săptămâni a HSR la abacavir și a contraindicației de reinițiere.",
  "optionRationales": [
   "Textul precizează apariția de obicei în primele 6 săptămâni.",
   "Nu este descrisă ca anafilaxie IgE în 48 de ore.",
   "IRIS nu este mecanismul HSR la abacavir.",
   "Toxicitatea mitocondrială este a altor INRT, nu HSR-ul de 6 săptămâni.",
   "Poate apărea la prima expunere; reinițierea este contraindicată pentru că poate fi fatală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează fereastra de 6 săptămâni cu alte intervale reale din același capitol (48 h, IRIS, toxicitate tardivă)."
  },
  "textbookExpressions": [
   "primele 6 săptămâni",
   "HLA-8 5701"
  ]
 },
 {
  "id": "hiv-adv-031",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Complicații metabolice și IRIS după ARV:",
  "options": [
   "Simvastatina este agentul de elecție pentru dislipidemia de sub IP, interacțiunile fiind neglijabile",
   "Stavudina și zidovudina determină un risc crescut de lipoatrofie",
   "Pentru a reduce IRIS în tuberculoză și criptococoză, tratamentul specific se dă în medie 4 săptămâni înaintea ARV",
   "Toxicitatea mitocondrială cu acidoză lactică este o urgență care impune continuarea ARV la doze reduse",
   "Tenofovir alafenamida pare să aibă toxicitate osoasă mai redusă decât TDF"
  ],
  "correct": [
   1,
   2,
   4
  ],
  "explanation": "Simvastatina este agentul de elecție pentru dislipidemia de sub IP, interacțiunile fiind neglijabile — Incorect: Simvastatina este contraindicată din cauza interacțiunilor cu IP.\n\nStavudina și zidovudina determină un risc crescut de lipoatrofie — Corect: Stavudina și zidovudina cresc riscul de lipoatrofie.\n\nPentru a reduce IRIS în tuberculoză și criptococoză, tratamentul specific se dă în medie 4 săptămâni înaintea ARV — Corect: Fereastra medie de 4 săptămâni înaintea ARV în TB și criptococoză este explicită.\n\nToxicitatea mitocondrială cu acidoză lactică este o urgență care impune continuarea ARV la doze reduse — Incorect: Acidoza lactică impune întreruperea imediată a ARV, nu continuarea.\n\nTenofovir alafenamida pare să aibă toxicitate osoasă mai redusă decât TDF — Corect: TAF are toxicitate osoasă mai redusă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1440, 1441, HIV — Lipodistrofie, toxicitate mitocondrială și IRIS (pagini PDF: 381, 382).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1440,
    1441
   ],
   "pdfPages": [
    381,
    382
   ],
   "section": "HIV — Lipodistrofie, toxicitate mitocondrială și IRIS"
  },
  "learningObjective": "Recunoașterea contraindicației simvastatinei cu IP, a ferestrei IRIS de 4 săptămâni și a avantajului osos al TAF.",
  "optionRationales": [
   "Simvastatina este contraindicată din cauza interacțiunilor cu IP.",
   "Stavudina și zidovudina cresc riscul de lipoatrofie.",
   "Fereastra medie de 4 săptămâni înaintea ARV în TB și criptococoză este explicită.",
   "Acidoza lactică impune întreruperea imediată a ARV, nu continuarea.",
   "TAF are toxicitate osoasă mai redusă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă simvastatina contraindicată în agent de elecție și cere continuarea ARV în acidoza lactică, o urgență de întrerupere."
  },
  "textbookExpressions": [
   "Simvastatina este contraindicată",
   "lipoatrofie"
  ]
 },
 {
  "id": "hiv-adv-032",
  "topicId": "hiv",
  "type": "CM",
  "stem": "O gravidă cu HIV, viremie sub 50 copii/ml sub ARV, fără complicații de travaliu. Conduita corectă include:",
  "options": [
   "Rata de transmitere în acest context este circa 0,1% în Marea Britanie",
   "Nașterea vaginală nu crește riscul de transmitere față de cezariană",
   "Nou-născutul primește zidovudină sirop timp de 4 săptămâni",
   "Mamele sunt încă sfătuite să nu alăpteze, deși riscul sub ARV eficient este extrem de scăzut",
   "Cezariana rămâne indicația de elecție la orice gravidă seropozitivă, chiar cu viremie nedetectabilă"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Rata de transmitere în acest context este circa 0,1% în Marea Britanie — Corect: 0,1% la femeile cu ARV și VL<50 este explicit.\n\nNașterea vaginală nu crește riscul de transmitere față de cezariană — Corect: Nașterea vaginală nu crește riscul dacă ARV este eficient și nu apar complicații.\n\nNou-născutul primește zidovudină sirop timp de 4 săptămâni — Corect: Zidovudina sirop 4 săptămâni este schema nou-născutului.\n\nMamele sunt încă sfătuite să nu alăpteze, deși riscul sub ARV eficient este extrem de scăzut — Corect: Sfătuirea de a nu alăpta rămâne, deși riscul sub ARV este extrem de scăzut.\n\nCezariana rămâne indicația de elecție la orice gravidă seropozitivă, chiar cu viremie nedetectabilă — Incorect: Cezariana a redus riscul în era pre-ARV; nu mai este impusă la VL nedetectabilă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1441, HIV — Sarcina: transmitere, naștere și alăptare (pagini PDF: 382).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1441
   ],
   "pdfPages": [
    382
   ],
   "section": "HIV — Sarcina: transmitere, naștere și alăptare"
  },
  "learningObjective": "Aplicarea ratei 0,1% la VL<50, a nașterii vaginale acceptabile și a zidovudinei 4 săptămâni la nou-născut.",
  "optionRationales": [
   "0,1% la femeile cu ARV și VL<50 este explicit.",
   "Nașterea vaginală nu crește riscul dacă ARV este eficient și nu apar complicații.",
   "Zidovudina sirop 4 săptămâni este schema nou-născutului.",
   "Sfătuirea de a nu alăpta rămâne, deși riscul sub ARV este extrem de scăzut.",
   "Cezariana a redus riscul în era pre-ARV; nu mai este impusă la VL nedetectabilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Reintroduce cezariana universală din era pre-ARV, ignorând rata 0,1% și nașterea vaginală acceptată."
  },
  "textbookExpressions": [
   "0,1%",
   "zidovudină sirop"
  ]
 },
 {
  "id": "hiv-adv-033",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Profilaxia post-expunere (PEP) în Marea Britanie:",
  "options": [
   "Poate fi benefică dacă este administrată în primele 72 de ore",
   "Regimul standard este Truvada cu raltegravir, timp de 4 săptămâni",
   "Dacă sursa are viremie nedetectabilă (sub 200 copii ARN HIV/ml), PEP nu este recomandată",
   "PEP înlocuiește prezervativul la partenerii cu viremie nedetectabilă",
   "Testarea HIV a expusului înainte de PEP nu este necesară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Poate fi benefică dacă este administrată în primele 72 de ore — Corect: Fereastra de 72 de ore este explicită.\n\nRegimul standard este Truvada cu raltegravir, timp de 4 săptămâni — Corect: Truvada plus raltegravir 4 săptămâni este regimul standard britanic.\n\nDacă sursa are viremie nedetectabilă (sub 200 copii ARN HIV/ml), PEP nu este recomandată — Corect: PEP nu este recomandată dacă sursa are VL<200.\n\nPEP înlocuiește prezervativul la partenerii cu viremie nedetectabilă — Incorect: Textul precizează că PEP nu trebuie să înlocuiască celelalte metode de protecție.\n\nTestarea HIV a expusului înainte de PEP nu este necesară — Incorect: Pacienții la risc trebuie testați HIV înainte de începerea PEP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1441, HIV — Profilaxia post-expunere (pagini PDF: 382).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1441
   ],
   "pdfPages": [
    382
   ],
   "section": "HIV — Profilaxia post-expunere"
  },
  "learningObjective": "Aplicarea ferestrei de 72 de ore, a schemei Truvada+raltegravir 4 săptămâni și a non-indicației când sursa are VL<200.",
  "optionRationales": [
   "Fereastra de 72 de ore este explicită.",
   "Truvada plus raltegravir 4 săptămâni este regimul standard britanic.",
   "PEP nu este recomandată dacă sursa are VL<200.",
   "Textul precizează că PEP nu trebuie să înlocuiască celelalte metode de protecție.",
   "Pacienții la risc trebuie testați HIV înainte de începerea PEP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă PEP într-un substitut al prezervativului și anulează testarea prealabilă, pe fondul pragului VL<200 ușor de ignorat."
  },
  "textbookExpressions": [
   "primele 72 de ore",
   "<200 copii ARN HIV"
  ]
 },
 {
  "id": "hiv-adv-034",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Vaccinarea la adultul cu HIV, conform Cadranului 37.22:",
  "options": [
   "Vaccinurile cu virus viu-atenuat se administrează preferențial la CD4 sub 200/mm³, când riscul de infecție naturală este maxim",
   "Vaccinurile viu-atenuate nu trebuie administrate la CD4 sub 200/mm³ și se folosesc cu atenție sub 350/mm³",
   "Gripa inactivată se recomandă tuturor pacienților, anual",
   "ROR și varicela viu-atenuate se dau tuturor neimunizaților, indiferent de CD4",
   "Hepatita B cu subunitate virală se recomandă tuturor neimunizaților"
  ],
  "correct": [
   1,
   2,
   4
  ],
  "explanation": "Vaccinurile cu virus viu-atenuat se administrează preferențial la CD4 sub 200/mm³, când riscul de infecție naturală este maxim — Incorect: Textul interzice vaccinurile vii la CD4<200, nu le preferă.\n\nVaccinurile viu-atenuate nu trebuie administrate la CD4 sub 200/mm³ și se folosesc cu atenție sub 350/mm³ — Corect: Interdicția sub 200 și prudența sub 350 sunt explicite.\n\nGripa inactivată se recomandă tuturor pacienților, anual — Corect: Gripa inactivată anual pentru toți este în tabel.\n\nROR și varicela viu-atenuate se dau tuturor neimunizaților, indiferent de CD4 — Incorect: ROR și varicela sunt vii; se țin cont de pragul de CD4.\n\nHepatita B cu subunitate virală se recomandă tuturor neimunizaților — Corect: Hepatita B la toți neimunizații este indicată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1443, HIV — Vaccinarea la adulții cu infecție HIV (pagini PDF: 384).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1443
   ],
   "pdfPages": [
    384
   ],
   "section": "HIV — Vaccinarea la adulții cu infecție HIV"
  },
  "learningObjective": "Aplicarea pragului CD4<200 pentru interdicția vaccinurilor vii și a indicațiilor anuale (gripă) și universale (VHB).",
  "optionRationales": [
   "Textul interzice vaccinurile vii la CD4<200, nu le preferă.",
   "Interdicția sub 200 și prudența sub 350 sunt explicite.",
   "Gripa inactivată anual pentru toți este în tabel.",
   "ROR și varicela sunt vii; se țin cont de pragul de CD4.",
   "Hepatita B la toți neimunizații este indicată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează regula vaccinurilor vii (contraindicate, nu preferate, la CD4<200)."
  },
  "textbookExpressions": [
   "CD4 <200/mm3",
   "Viu atenuat"
  ]
 },
 {
  "id": "hiv-adv-035",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Meningita criptococică la pacientul cu HIV:",
  "options": [
   "Redoarea de ceafă și fotofobia pot lipsi, răspunsul inflamator fiind alterat",
   "Tratamentul inițial este amfotericină B liposomală 4,0 mg/kg/zi i.v., cu sau fără flucitozină",
   "Corticoterapia sistemică este adjuvantul de rutină, ca în pneumocistoză",
   "ARV se inițiază la circa 4 săptămâni, pentru a reduce IRIS",
   "Întreținerea cu fluconazol continuă până la 1 an, cu VL nedetectabilă și CD4 constant peste 100/mm³"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "Redoarea de ceafă și fotofobia pot lipsi, răspunsul inflamator fiind alterat — Corect: Absența redorii și fotofobiei este explicită.\n\nTratamentul inițial este amfotericină B liposomală 4,0 mg/kg/zi i.v., cu sau fără flucitozină — Corect: Doza 4,0 mg/kg/zi cu/fără flucitozină este citată.\n\nCorticoterapia sistemică este adjuvantul de rutină, ca în pneumocistoză — Incorect: Nu se recomandă corticoterapia.\n\nARV se inițiază la circa 4 săptămâni, pentru a reduce IRIS — Corect: ARV la circa 4 săptămâni reduce IRIS.\n\nÎntreținerea cu fluconazol continuă până la 1 an, cu VL nedetectabilă și CD4 constant peste 100/mm³ — Corect: Fluconazolul de întreținere până la 1 an, VL nedetectabilă și CD4>100 este schema.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1444, HIV — Criptococoza (pagini PDF: 385).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1444
   ],
   "pdfPages": [
    385
   ],
   "section": "HIV — Criptococoza"
  },
  "learningObjective": "Recunoașterea meningismului absent, a schemei amfotericină±flucitozină și a amânării ARV 4 săptămâni, fără steroizi.",
  "optionRationales": [
   "Absența redorii și fotofobiei este explicită.",
   "Doza 4,0 mg/kg/zi cu/fără flucitozină este citată.",
   "Nu se recomandă corticoterapia.",
   "ARV la circa 4 săptămâni reduce IRIS.",
   "Fluconazolul de întreținere până la 1 an, VL nedetectabilă și CD4>100 este schema."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Importă corticoterapia din pneumocistoză, contraindicată aici, pe fondul unor praguri CD4 și intervale reale."
  },
  "textbookExpressions": [
   "amfotericină B liposomală",
   "Nu se recomandă utilizarea corticoterapiei"
  ]
 },
 {
  "id": "hiv-adv-036",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Doza de încărcare de pirimetamină în toxoplasmoza cerebrală, urmată de 50 mg zilnic cel puțin 6 săptămâni, este:",
  "options": [
   "50 mg",
   "100 mg",
   "200 mg",
   "400 mg",
   "800 mg, ca misoprostolul ulcerului"
  ],
  "correct": [
   2
  ],
  "explanation": "50 mg — Incorect: 50 mg este doza zilnică de întreținere, nu încărcarea.\n\n100 mg — Incorect: 100 mg nu este doza de încărcare citată.\n\n200 mg — Corect: Textul indică încărcare 200 mg, apoi 50 mg zilnic.\n\n400 mg — Incorect: 400 mg este doza de fluconazol i.v. din criptococoză, nu pirimetamina.\n\n800 mg, ca misoprostolul ulcerului — Incorect: 800 μg/zi este doza de misoprostol din alt capitol, nu mg de pirimetamină.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1445, 1444, HIV — Toxoplasmoza: tratament (pagini PDF: 386, 385).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1445,
    1444
   ],
   "pdfPages": [
    386,
    385
   ],
   "section": "HIV — Toxoplasmoza: tratament"
  },
  "learningObjective": "Reținerea dozei de încărcare de 200 mg, distinctă de întreținerea de 50 mg și de alte doze din capitol.",
  "optionRationales": [
   "50 mg este doza zilnică de întreținere, nu încărcarea.",
   "100 mg nu este doza de încărcare citată.",
   "Textul indică încărcare 200 mg, apoi 50 mg zilnic.",
   "400 mg este doza de fluconazol i.v. din criptococoză, nu pirimetamina.",
   "800 μg/zi este doza de misoprostol din alt capitol, nu mg de pirimetamină."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 200 mg (încărcare) cu 50 mg (întreținere) și cu doze reale ale altor antimicrobiene din aceleași pagini."
  },
  "textbookExpressions": [
   "doză de încărcare 200 mg",
   "50 mg zilnic"
  ]
 },
 {
  "id": "hiv-adv-037",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Criptosporidioza la pacientul cu HIV:",
  "options": [
   "Poate provoca diaree apoasă severă și persistentă, cu anorexie, dureri, greață și vărsături",
   "Se poate asocia cu colangită sclerozantă",
   "Chisturile se vizualizează cu colorația Kinyoun în materiile fecale",
   "Nitazoxanida este tratamentul curativ, ARV fiind inutil până la eradicarea parazitului",
   "Refacerea imunologică prin ARV eficient este tratamentul de elecție și determină de obicei remisia"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Poate provoca diaree apoasă severă și persistentă, cu anorexie, dureri, greață și vărsături — Corect: Tabloul de diaree apoasă persistentă este descris.\n\nSe poate asocia cu colangită sclerozantă — Corect: Asocierea cu colangită sclerozantă este menționată.\n\nChisturile se vizualizează cu colorația Kinyoun în materiile fecale — Corect: Colorația Kinyoun este metoda citată.\n\nNitazoxanida este tratamentul curativ, ARV fiind inutil până la eradicarea parazitului — Incorect: Nitazoxanida și paromomicina pot avea un oarecare efect, dar elecția este ARV.\n\nRefacerea imunologică prin ARV eficient este tratamentul de elecție și determină de obicei remisia — Corect: Refacerea imună prin ARV determină de obicei remisia.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1445, HIV — Criptosporidioza (pagini PDF: 386).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1445
   ],
   "pdfPages": [
    386
   ],
   "section": "HIV — Criptosporidioza"
  },
  "learningObjective": "Recunoașterea colorației Kinyoun și a faptului că ARV, nu antiparazitarul, este tratamentul de elecție.",
  "optionRationales": [
   "Tabloul de diaree apoasă persistentă este descris.",
   "Asocierea cu colangită sclerozantă este menționată.",
   "Colorația Kinyoun este metoda citată.",
   "Nitazoxanida și paromomicina pot avea un oarecare efect, dar elecția este ARV.",
   "Refacerea imună prin ARV determină de obicei remisia."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ierarhia terapeutică, făcând din nitazoxanidă cura și din ARV o măsură amânabilă."
  },
  "textbookExpressions": [
   "coloraţiei Kinyoun",
   "tratamentul de elecţie"
  ]
 },
 {
  "id": "hiv-adv-038",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Co-infecția HIV cu virusuri hepatitice:",
  "options": [
   "La nivel global, 5-15% dintre pacienții cu HIV au hepatită B cronică, iar circa o treime au VHC",
   "Toți nou-diagnosticații se testează pentru VHA, VHB și VHC; neimunizații se vaccinează anti-A și anti-B",
   "Progresia bolii hepatice este mai rapidă decât în mono-infecție",
   "DAA pentru VHC se administrează 12 săptămâni, cu SVR peste 90%",
   "ARV se evită până după vindecarea VHC, pentru a nu amplifica hepatotoxicitatea"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "La nivel global, 5-15% dintre pacienții cu HIV au hepatită B cronică, iar circa o treime au VHC — Corect: Prevalențele globale sunt citate.\n\nToți nou-diagnosticații se testează pentru VHA, VHB și VHC; neimunizații se vaccinează anti-A și anti-B — Corect: Testarea și vaccinarea anti-A/B sunt cerute.\n\nProgresia bolii hepatice este mai rapidă decât în mono-infecție — Corect: Progresia mai rapidă este explicită.\n\nDAA pentru VHC se administrează 12 săptămâni, cu SVR peste 90% — Corect: DAA 12 săptămâni cu SVR>90% sunt pe pagina următoare.\n\nARV se evită până după vindecarea VHC, pentru a nu amplifica hepatotoxicitatea — Incorect: Toți co-infectații HIV/VHC trebuie să primească ARV; dacă DAA sunt planificate, ARV se începe cu 4-6 săptămâni înainte.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1445, 1446, HIV — Co-infecția cu virusuri hepatitice B și C (pagini PDF: 386, 387).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1445,
    1446
   ],
   "pdfPages": [
    386,
    387
   ],
   "section": "HIV — Co-infecția cu virusuri hepatitice B și C"
  },
  "learningObjective": "Cuantificarea prevalențelor 5-15% VHB și ~1/3 VHC, a vaccinării universale și a SVR>90% la 12 săptămâni de DAA.",
  "optionRationales": [
   "Prevalențele globale sunt citate.",
   "Testarea și vaccinarea anti-A/B sunt cerute.",
   "Progresia mai rapidă este explicită.",
   "DAA 12 săptămâni cu SVR>90% sunt pe pagina următoare.",
   "Toți co-infectații HIV/VHC trebuie să primească ARV; dacă DAA sunt planificate, ARV se începe cu 4-6 săptămâni înainte."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amână ARV până după VHC, opusul recomandării de a începe ARV cu 4-6 săptămâni înaintea DAA."
  },
  "textbookExpressions": [
   "5-15%",
   "aproximativ o treime"
  ]
 },
 {
  "id": "hiv-adv-039",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Colita cu citomegalovirus la pacientul cu HIV se caracterizează prin:",
  "options": [
   "Debut tipic la CD4 între 200 și 350/mm³, analog pneumocistozei",
   "Examen histologic cu incluziuni citoplasmatice în „ochi de bufniță\"",
   "Ganciclovir 5 mg/kg × 2/zi i.v. timp de 14-28 de zile",
   "Terapia de menținere rămâne necesară chiar după refacerea imună prin ARV",
   "Durere abdominală, diaree cu sânge și mucoasă colonică friabilă sau ulcerată"
  ],
  "correct": [
   1,
   2,
   4
  ],
  "explanation": "Debut tipic la CD4 între 200 și 350/mm³, analog pneumocistozei — Incorect: CMV apare la CD4 constant sub 100, retinita sub 50, nu la 200-350.\n\nExamen histologic cu incluziuni citoplasmatice în „ochi de bufniță\" — Corect: Incluziunile în ochi de bufniță sunt caracteristice.\n\nGanciclovir 5 mg/kg × 2/zi i.v. timp de 14-28 de zile — Corect: Doza 5 mg/kg ×2, 14-28 zile, este explicită.\n\nTerapia de menținere rămâne necesară chiar după refacerea imună prin ARV — Incorect: Menținerea nu mai este necesară după ameliorarea imună prin ARV.\n\nDurere abdominală, diaree cu sânge și mucoasă colonică friabilă sau ulcerată — Corect: Tabloul durere–diaree sangvinolentă–mucoasă friabilă este descris.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1446, HIV — Afecțiuni gastrointestinale cu CMV (pagini PDF: 387).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1446
   ],
   "pdfPages": [
    387
   ],
   "section": "HIV — Afecțiuni gastrointestinale cu CMV"
  },
  "learningObjective": "Recunoașterea incluziunilor „ochi de bufniță\" și a schemei ganciclovir 14-28 de zile, fără menținere după reconstitutie.",
  "optionRationales": [
   "CMV apare la CD4 constant sub 100, retinita sub 50, nu la 200-350.",
   "Incluziunile în ochi de bufniță sunt caracteristice.",
   "Doza 5 mg/kg ×2, 14-28 zile, este explicită.",
   "Menținerea nu mai este necesară după ameliorarea imună prin ARV.",
   "Tabloul durere–diaree sangvinolentă–mucoasă friabilă este descris."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută colita CMV la pragul de CD4 al pneumocistozei și prelungește inutil terapia de menținere."
  },
  "textbookExpressions": [
   "ochi de bufniţă",
   "14-28 de zile"
  ]
 },
 {
  "id": "hiv-adv-040",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Leucoencefalopatia multifocală progresivă (PML):",
  "options": [
   "Se datorează poliomavirusului JC, care infectează oligodendrocitele",
   "Leziunile nu captează contrastul și nu produc efect de masă",
   "RMN este mai sensibil decât CT, cu leziuni hiperintense T2 în substanța albă",
   "Tratamentul specific de elecție este cidofovirul, ARV fiind adjuvant",
   "PCR pentru JC în LCR plus imagistica sunt de regulă suficiente, biopsia nemaifiind necesară"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Se datorează poliomavirusului JC, care infectează oligodendrocitele — Corect: JC pe oligodendrocite este mecanismul.\n\nLeziunile nu captează contrastul și nu produc efect de masă — Corect: Absența prizei de contrast și a efectului de masă este explicită.\n\nRMN este mai sensibil decât CT, cu leziuni hiperintense T2 în substanța albă — Corect: RMN T2 hiperintens, mai sensibil decât CT, este descris.\n\nTratamentul specific de elecție este cidofovirul, ARV fiind adjuvant — Incorect: Nu există tratament specific; ARV eficient este singura intervenție care poate induce remisie.\n\nPCR pentru JC în LCR plus imagistica sunt de regulă suficiente, biopsia nemaifiind necesară — Corect: PCR în LCR plus IRM fac biopsia inutilă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1447, HIV — Infecția cu poliomavirusul JC: PML (pagini PDF: 388).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1447
   ],
   "pdfPages": [
    388
   ],
   "section": "HIV — Infecția cu poliomavirusul JC: PML"
  },
  "learningObjective": "Corelarea virusului JC cu leziunile fără contrast/masă și cu absența unui antiviral specific, ARV fiind singura intervenție.",
  "optionRationales": [
   "JC pe oligodendrocite este mecanismul.",
   "Absența prizei de contrast și a efectului de masă este explicită.",
   "RMN T2 hiperintens, mai sensibil decât CT, este descris.",
   "Nu există tratament specific; ARV eficient este singura intervenție care poate induce remisie.",
   "PCR în LCR plus IRM fac biopsia inutilă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Introduce cidofovirul ca elecție, deși textul afirmă absența tratamentului specific."
  },
  "textbookExpressions": [
   "Poliomavirusul JC",
   "nu produc efect de masă"
  ]
 },
 {
  "id": "hiv-adv-041",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Infecția diseminată cu Mycobacterium avium-intracellulare:",
  "options": [
   "Apare în stadii avansate, cu imunodepresie foarte severă",
   "Poarta de intrare este tractul digestiv sau plămânii, cu diseminare prin macrofage",
   "O combinație des întâlnită este etambutol, rifabutină și claritromicină",
   "MAI este sensibil la regimul standard antituberculos de primă linie",
   "Profilaxia primară cu rifabutină sau azitromicină poate întârzia apariția, fără creștere demonstrată a supraviețuirii"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Apare în stadii avansate, cu imunodepresie foarte severă — Corect: Apariția în imunodepresie foarte severă este explicită.\n\nPoarta de intrare este tractul digestiv sau plămânii, cu diseminare prin macrofage — Corect: Poarta digestivă/pulmonară și diseminarea prin macrofage sunt descrise.\n\nO combinație des întâlnită este etambutol, rifabutină și claritromicină — Corect: Combinația etambutol, rifabutină și claritromicină este citată.\n\nMAI este sensibil la regimul standard antituberculos de primă linie — Incorect: MAI este rezistent la tratamentul standard anti-TB.\n\nProfilaxia primară cu rifabutină sau azitromicină poate întârzia apariția, fără creștere demonstrată a supraviețuirii — Corect: Profilaxia întârzie apariția, fără creștere a duratei de supraviețuire.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1448, HIV — Infecția cu Mycobacterium avium-intracellulare (pagini PDF: 389).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1448
   ],
   "pdfPages": [
    389
   ],
   "section": "HIV — Infecția cu Mycobacterium avium-intracellulare"
  },
  "learningObjective": "Recunoașterea rezistenței la anti-TB standard și a combinației etambutol–rifabutină–claritromicină, plus limita profilaxiei.",
  "optionRationales": [
   "Apariția în imunodepresie foarte severă este explicită.",
   "Poarta digestivă/pulmonară și diseminarea prin macrofage sunt descrise.",
   "Combinația etambutol, rifabutină și claritromicină este citată.",
   "MAI este rezistent la tratamentul standard anti-TB.",
   "Profilaxia întârzie apariția, fără creștere a duratei de supraviețuire."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie MAI sensibilitatea la HREZ, opusul rezistenței declarate, pe fondul unei combinații reale de macrolid și rifabutină."
  },
  "textbookExpressions": [
   "Etambutolul poate fi util",
   "claritromicină sau azitromicină"
  ]
 },
 {
  "id": "hiv-adv-042",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Agentul implicat în patogenia sarcomului Kaposi epidemic este:",
  "options": [
   "EBV, ca în limfomul primar cerebral",
   "HHV-8 (virusul herpetic uman 8)",
   "HPV, ca în carcinomul cervical",
   "Virusul JC, ca în PML",
   "CMV, ca în retinită"
  ],
  "correct": [
   1
  ],
  "explanation": "EBV, ca în limfomul primar cerebral — Incorect: EBV se asociază cu limfoamele, nu cu SK.\n\nHHV-8 (virusul herpetic uman 8) — Corect: Textul identifică HHV-8 în patogenia SK.\n\nHPV, ca în carcinomul cervical — Incorect: HPV este legat de neoplazia cervicală/anală.\n\nVirusul JC, ca în PML — Incorect: JC produce PML.\n\nCMV, ca în retinită — Incorect: CMV produce retinită și colită, nu SK.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1449, 1447, HIV — Sarcomul Kaposi (pagini PDF: 390, 388).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1449,
    1447
   ],
   "pdfPages": [
    390,
    388
   ],
   "section": "HIV — Sarcomul Kaposi"
  },
  "learningObjective": "Asocierea SK epidemic cu HHV-8, distinct de EBV, HPV, JC și CMV, toate virusuri cu manifestări proprii în HIV.",
  "optionRationales": [
   "EBV se asociază cu limfoamele, nu cu SK.",
   "Textul identifică HHV-8 în patogenia SK.",
   "HPV este legat de neoplazia cervicală/anală.",
   "JC produce PML.",
   "CMV produce retinită și colită, nu SK."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează cele cinci virusuri oncogene/oportuniste din aceleași pagini între tumorile și infecțiile pe care le cauzează."
  },
  "textbookExpressions": [
   "HHV-8",
   "nuanţa violacee"
  ]
 },
 {
  "id": "hiv-adv-043",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Neoplaziile asociate HIV:",
  "options": [
   "Limfoamele sunt în majoritate non-Hodgkin cu celulă mare B, frecvent extra-ganglionare (creier, plămân, tub digestiv)",
   "O mare parte sunt asociate EBV, cu exprimarea antigenelor nucleare latente EBNA 1-6",
   "Femeile cu HIV au risc crescut de neoplasm de col, fiind recomandată citologie cervicală anuală",
   "Sarcomul Kaposi visceral are prognostic mai bun decât forma cutanată, fiind mai sensibil la radioterapie",
   "Terapia ARV favorizează regresia leziunilor de SK"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "explanation": "Limfoamele sunt în majoritate non-Hodgkin cu celulă mare B, frecvent extra-ganglionare (creier, plămân, tub digestiv) — Corect: Profilul LNH B extra-ganglionar este explicit.\n\nO mare parte sunt asociate EBV, cu exprimarea antigenelor nucleare latente EBNA 1-6 — Corect: Asocierea EBV/EBNA 1-6 este citată.\n\nFemeile cu HIV au risc crescut de neoplasm de col, fiind recomandată citologie cervicală anuală — Corect: Citologia cervicală anuală este recomandată.\n\nSarcomul Kaposi visceral are prognostic mai bun decât forma cutanată, fiind mai sensibil la radioterapie — Incorect: SK visceral are prognostic mai rezervat decât cel cutanat.\n\nTerapia ARV favorizează regresia leziunilor de SK — Corect: ARV favorizează regresia leziunilor de SK.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1449, HIV — Limfoame, carcinom cervical și sarcom Kaposi (pagini PDF: 390).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1449
   ],
   "pdfPages": [
    390
   ],
   "section": "HIV — Limfoame, carcinom cervical și sarcom Kaposi"
  },
  "learningObjective": "Recunoașterea profilului LNH extra-ganglionar EBV-asociat, a citologiei anuale și a regresiei SK sub ARV, cu prognostic rezervat al formei viscerale.",
  "optionRationales": [
   "Profilul LNH B extra-ganglionar este explicit.",
   "Asocierea EBV/EBNA 1-6 este citată.",
   "Citologia cervicală anuală este recomandată.",
   "SK visceral are prognostic mai rezervat decât cel cutanat.",
   "ARV favorizează regresia leziunilor de SK."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează prognosticul SK visceral versus cutanat, pe fondul unor asocieri virale reale."
  },
  "textbookExpressions": [
   "EBNA 1-6",
   "citologiei cervicale"
  ]
 },
 {
  "id": "hiv-adv-044",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Extinderea testării HIV în Marea Britanie:",
  "options": [
   "În 2017, circa 8% dintre persoanele cu HIV erau nediagnosticate, iar 43% dintre noile diagnostice erau tardive (CD4 sub 350)",
   "Testarea se recomandă tuturor nou-înregistraților în asistența primară și urgență unde seroprevalența depășește 2/1.000",
   "Testele reactive la domiciliu sau point-of-care nu necesită confirmare serologică, specificitatea fiind absolută",
   "23% dintre pacienți au avut CD4 sub 200/mm³ la diagnostic",
   "Inițierea tardivă a tratamentului este cel mai important predictor al morbidității și mortalității"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "explanation": "În 2017, circa 8% dintre persoanele cu HIV erau nediagnosticate, iar 43% dintre noile diagnostice erau tardive (CD4 sub 350) — Corect: 8% nediagnosticați și 43% tardiv sunt cifrele din 2017.\n\nTestarea se recomandă tuturor nou-înregistraților în asistența primară și urgență unde seroprevalența depășește 2/1.000 — Corect: Pragul 2/1.000 pentru testare în primar și urgență este explicit.\n\nTestele reactive la domiciliu sau point-of-care nu necesită confirmare serologică, specificitatea fiind absolută — Incorect: Textul cere confirmare serologică din cauza ratei semnificative de fals-pozitive.\n\n23% dintre pacienți au avut CD4 sub 200/mm³ la diagnostic — Corect: 23% cu CD4<200 la diagnostic este citat.\n\nInițierea tardivă a tratamentului este cel mai important predictor al morbidității și mortalității — Corect: Inițierea tardivă este descrisă ca cel mai important predictor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1449, HIV — Extinderea testării și diagnosticul tardiv (pagini PDF: 390).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1449
   ],
   "pdfPages": [
    390
   ],
   "section": "HIV — Extinderea testării și diagnosticul tardiv"
  },
  "learningObjective": "Reținerea ponderilor 8% nediagnosticați, 43% tardiv, 23% CD4<200 și a pragului populațional 2/1.000 pentru testare universală.",
  "optionRationales": [
   "8% nediagnosticați și 43% tardiv sunt cifrele din 2017.",
   "Pragul 2/1.000 pentru testare în primar și urgență este explicit.",
   "Textul cere confirmare serologică din cauza ratei semnificative de fals-pozitive.",
   "23% cu CD4<200 la diagnostic este citat.",
   "Inițierea tardivă este descrisă ca cel mai important predictor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează necesitatea confirmării testelor rapide, deși textul subliniază fals-pozitivele, și cere reținerea a trei procente din același paragraf."
  },
  "textbookExpressions": [
   "2/1.000",
   "43% dintre pacienţii"
  ]
 },
 {
  "id": "hiv-adv-045",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Următoarele afirmații despre prevenirea transmiterii HIV, dincolo de PrEP, sunt adevărate:",
  "options": [
   "Modelele britanice atribuie marea majoritate a cazurilor noi persoanelor nediagnosticate sau cu infecție recentă",
   "Dezvoltarea vaccinului a fost ușurată de variabilitatea genetică redusă a virusului",
   "Furnizarea de echipament steril de injectare a avut efecte favorabile unde a fost implementată",
   "Testele de domiciliu reactive impun confirmare serologică și programare rapidă la specialist",
   "Persoanele cu infecție recentă și viremie înaltă au contagiozitate deosebit de ridicată"
  ],
  "correct": [
   0,
   2,
   3,
   4
  ],
  "explanation": "Modelele britanice atribuie marea majoritate a cazurilor noi persoanelor nediagnosticate sau cu infecție recentă — Corect: Atribuirea cazurilor noi nediagnosticaților/infecției recente este explicită.\n\nDezvoltarea vaccinului a fost ușurată de variabilitatea genetică redusă a virusului — Incorect: Textul indică opusul: vaccinul a fost îngreunat de variabilitatea genetică.\n\nFurnizarea de echipament steril de injectare a avut efecte favorabile unde a fost implementată — Corect: Echipamentul steril de injectare a avut efecte favorabile.\n\nTestele de domiciliu reactive impun confirmare serologică și programare rapidă la specialist — Corect: Confirmarea serologică a testelor de domiciliu este cerută pe pagina anterioară.\n\nPersoanele cu infecție recentă și viremie înaltă au contagiozitate deosebit de ridicată — Corect: Contagiozitatea deosebit de ridicată a infecției recente cu viremie înaltă este citată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1450, 1449, HIV — Strategii de reducere a transmiterii (pagini PDF: 391, 390).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1450,
    1449
   ],
   "pdfPages": [
    391,
    390
   ],
   "section": "HIV — Strategii de reducere a transmiterii"
  },
  "learningObjective": "Recunoașterea rolului nediagnosticatului și al infecției recente în lanțul de transmitere, plus confirmarea testelor de domiciliu.",
  "optionRationales": [
   "Atribuirea cazurilor noi nediagnosticaților/infecției recente este explicită.",
   "Textul indică opusul: vaccinul a fost îngreunat de variabilitatea genetică.",
   "Echipamentul steril de injectare a avut efecte favorabile.",
   "Confirmarea serologică a testelor de domiciliu este cerută pe pagina anterioară.",
   "Contagiozitatea deosebit de ridicată a infecției recente cu viremie înaltă este citată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează obstacolul vaccinului (variabilitatea genetică) și cere integrarea datelor de testare de pe pagina alăturată."
  },
  "textbookExpressions": [
   "cel puţin 50%",
   "nedetectabil = netransmisibil"
  ]
 },
 {
  "id": "hiv-adv-046",
  "topicId": "hiv",
  "type": "CM",
  "stem": "De la descrierea SIDA (1981) și a HIV (1983), estimările globale citate în text sunt:",
  "options": [
   "peste 78 de milioane de persoane infectate de-a lungul timpului",
   "39 de milioane de decese",
   "36,9 milioane de oameni care trăiesc cu HIV la cea mai recentă estimare",
   "21,7 milioane de persoane infectate vreodată, fără decese înregistrate",
   "sub 10 milioane de persoane care trăiesc cu HIV"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "peste 78 de milioane de persoane infectate de-a lungul timpului — Corect: Textul estimează peste 78 de milioane de persoane infectate.\n\n39 de milioane de decese — Corect: 39 de milioane de decese sunt citate.\n\n36,9 milioane de oameni care trăiesc cu HIV la cea mai recentă estimare — Corect: 36,9 milioane trăiesc cu HIV la cea mai recentă estimare.\n\n21,7 milioane de persoane infectate vreodată, fără decese înregistrate — Incorect: 21,7 milioane este numărul celor cu acces la ARV, nu totalul infectați vreodată.\n\nsub 10 milioane de persoane care trăiesc cu HIV — Incorect: Textul plasează prevalența globală la 36,9 milioane, nu sub 10.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1425, 1426, HIV — Epidemiologie globală: bilanț istoric (pagini PDF: 366, 367).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1425,
    1426
   ],
   "pdfPages": [
    366,
    367
   ],
   "section": "HIV — Epidemiologie globală: bilanț istoric"
  },
  "learningObjective": "Reținerea trio-ului 78 milioane infectați / 39 milioane decese / 36,9 milioane trăiesc cu HIV, distinct de 21,7 milioane aflați sub ARV de pe pagina următoare.",
  "optionRationales": [
   "Textul estimează peste 78 de milioane de persoane infectate.",
   "39 de milioane de decese sunt citate.",
   "36,9 milioane trăiesc cu HIV la cea mai recentă estimare.",
   "21,7 milioane este numărul celor cu acces la ARV, nu totalul infectați vreodată.",
   "Textul plasează prevalența globală la 36,9 milioane, nu sub 10."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 21,7 milioane (ARV) peste bilanțul istoric 78/39/36,9, trei cifre de pe aceeași deschidere de capitol."
  },
  "textbookExpressions": [
   "78 de milioane",
   "36,9 milioane"
  ]
 },
 {
  "id": "hiv-adv-047",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Africa subsahariană în epidemia HIV, conform textului:",
  "options": [
   "Africa de Sud și de Est adăpostește 6,2% din populația globului, dar peste jumătate din populația lumii diagnosticată cu HIV",
   "În fiecare an se înregistrează aici 43% din cazurile noi de HIV",
   "Swaziland are cea mai mare prevalență mondială, 27,2% dintre adulții 15-49 de ani",
   "Calea predominantă de transmitere în regiune este prin consum de droguri injectabile, nu contact heterosexual",
   "Prevalența este identică la femeile tinere și la bărbați"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Africa de Sud și de Est adăpostește 6,2% din populația globului, dar peste jumătate din populația lumii diagnosticată cu HIV — Corect: Disproporția 6,2% versus peste jumătate din diagnostice este explicită.\n\nÎn fiecare an se înregistrează aici 43% din cazurile noi de HIV — Corect: 43% din cazurile noi anuale sunt citate.\n\nSwaziland are cea mai mare prevalență mondială, 27,2% dintre adulții 15-49 de ani — Corect: 27,2% la adulții 15-49 din Swaziland este cifra din text.\n\nCalea predominantă de transmitere în regiune este prin consum de droguri injectabile, nu contact heterosexual — Incorect: Calea predominantă este contactul heterosexual.\n\nPrevalența este identică la femeile tinere și la bărbați — Incorect: Infecția este aproape de două ori mai frecventă la femeile tinere (3,2%) decât la bărbați (1,6%).\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1426, HIV — Epidemiologie: Africa subsahariană (pagini PDF: 367).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1426
   ],
   "pdfPages": [
    367
   ],
   "section": "HIV — Epidemiologie: Africa subsahariană"
  },
  "learningObjective": "Cuantificarea disproporției 6,2% populație versus >50% din cazuri și 43% din incidente, plus prevalența 27,2% din Swaziland.",
  "optionRationales": [
   "Disproporția 6,2% versus peste jumătate din diagnostice este explicită.",
   "43% din cazurile noi anuale sunt citate.",
   "27,2% la adulții 15-49 din Swaziland este cifra din text.",
   "Calea predominantă este contactul heterosexual.",
   "Infecția este aproape de două ori mai frecventă la femeile tinere (3,2%) decât la bărbați (1,6%)."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește calea heterosexuală cu drogurile injectabile și anulează gradientul pe sexe, pe fondul a trei procente reale."
  },
  "textbookExpressions": [
   "6,2% din populaţia",
   "27,2% dintre adulţii"
  ]
 },
 {
  "id": "hiv-adv-048",
  "topicId": "hiv",
  "type": "CS",
  "stem": "În Africa subsahariană, prevalența HIV la femeile tinere comparativ cu bărbații este, conform textului:",
  "options": [
   "Aproape dublă: medie 3,2% versus 1,6%",
   "Identică, 1,6% în ambele sexe",
   "Mai mică la femei (0,8%) decât la bărbați (3,2%)",
   "Limitată la femeile peste 50 de ani",
   "Corelată doar cu transmiterea verticală, nu cu contactul heterosexual"
  ],
  "correct": [
   0
  ],
  "explanation": "Aproape dublă: medie 3,2% versus 1,6% — Corect: Textul precizează aproape dublu: 3,2% versus 1,6%.\n\nIdentică, 1,6% în ambele sexe — Incorect: Valorile nu sunt identice.\n\nMai mică la femei (0,8%) decât la bărbați (3,2%) — Incorect: Direcția gradientului este inversată în această opțiune.\n\nLimitată la femeile peste 50 de ani — Incorect: Textul vizează femeile tinere, nu grupa peste 50 de ani.\n\nCorelată doar cu transmiterea verticală, nu cu contactul heterosexual — Incorect: Explicațiile sunt complexe, dar calea predominantă este contactul heterosexual.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1426, HIV — Epidemiologie: gradientul pe sexe în Africa (pagini PDF: 367).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1426
   ],
   "pdfPages": [
    367
   ],
   "section": "HIV — Epidemiologie: gradientul pe sexe în Africa"
  },
  "learningObjective": "Reținerea prevalențelor 3,2% la femeile tinere versus 1,6% la bărbați, pe fondul transmiterii heterosexuale predominante.",
  "optionRationales": [
   "Textul precizează aproape dublu: 3,2% versus 1,6%.",
   "Valorile nu sunt identice.",
   "Direcția gradientului este inversată în această opțiune.",
   "Textul vizează femeile tinere, nu grupa peste 50 de ani.",
   "Explicațiile sunt complexe, dar calea predominantă este contactul heterosexual."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 3,2% și 1,6% între sexe și mută gradientul pe grupe de vârstă din alte paragrafe epidemiologice."
  },
  "textbookExpressions": [
   "3,2%",
   "1,6%"
  ]
 },
 {
  "id": "hiv-adv-049",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Conform ghidurilor britanice de testare HIV (Cadranul 37.9), testarea universală a tuturor pacienților se recomandă în:",
  "options": [
   "Clinicile de ginecologie sau de boli cu transmitere sexuală",
   "Servicii de consultații prenatale și secții unde se practică întreruperi de sarcină",
   "Centre pentru persoanele dependente de droguri",
   "Servicii de îngrijire pentru tuberculoză, hepatită B și C și limfom",
   "Cabinete de medicină de familie din zone cu prevalență sub 0,1 la 1000, fără alți factori de risc"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Clinicile de ginecologie sau de boli cu transmitere sexuală — Corect: Clinicile de ginecologie/BTS sunt listate.\n\nServicii de consultații prenatale și secții unde se practică întreruperi de sarcină — Corect: Prenatalul și întreruperile de sarcină sunt listate.\n\nCentre pentru persoanele dependente de droguri — Corect: Centrele pentru dependenți de droguri sunt listate.\n\nServicii de îngrijire pentru tuberculoză, hepatită B și C și limfom — Corect: TB, hepatite B/C și limfomul sunt listate.\n\nCabinete de medicină de familie din zone cu prevalență sub 0,1 la 1000, fără alți factori de risc — Incorect: În asistența primară testarea universală vizează zonele cu prevalență înaltă (≥2/1000), nu pe cele cu prevalență foarte mică.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1427, HIV — Indicațiile testării: servicii cu testare universală (pagini PDF: 368).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1427
   ],
   "pdfPages": [
    368
   ],
   "section": "HIV — Indicațiile testării: servicii cu testare universală"
  },
  "learningObjective": "Recunoașterea setărilor de testare universală (BTS, prenatal, droguri, TB/VHB/VHC/limfom) versus pragul de prevalență înaltă din asistența primară.",
  "optionRationales": [
   "Clinicile de ginecologie/BTS sunt listate.",
   "Prenatalul și întreruperile de sarcină sunt listate.",
   "Centrele pentru dependenți de droguri sunt listate.",
   "TB, hepatite B/C și limfomul sunt listate.",
   "În asistența primară testarea universală vizează zonele cu prevalență înaltă (≥2/1000), nu pe cele cu prevalență foarte mică."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută pragul de 2/1000 al asistenței primare spre o prevalență neglijabilă, pe fondul unei liste reale de servicii universale."
  },
  "textbookExpressions": [
   "Clinicile de ginecologie",
   "prevalenţă înaltă"
  ]
 },
 {
  "id": "hiv-adv-050",
  "topicId": "hiv",
  "type": "CS",
  "stem": "La expunerea inițială, infecția HIV permanentă se stabilește, de obicei, prin:",
  "options": [
   "Transportul virusului de către celulele dendritice de pe mucoase spre ganglionii limfatici regionali, de către un „virus fondator\" (founder virus)",
   "Infecția directă a miocitelor scheletice, fără pasaj ganglionar",
   "Integrarea în genomul eritrocitelor mature, care nu au nucleu",
   "Colonizarea keratinocitelor, fără celule dendritice",
   "Replicare limitată la nivelul trombocitelor circulante"
  ],
  "correct": [
   0
  ],
  "explanation": "Transportul virusului de către celulele dendritice de pe mucoase spre ganglionii limfatici regionali, de către un „virus fondator\" (founder virus) — Corect: Textul descrie transportul de către celulele dendritice spre ganglionii regionali, de obicei de către un virus fondator.\n\nInfecția directă a miocitelor scheletice, fără pasaj ganglionar — Incorect: Miocitele scheletice nu sunt poarta citată.\n\nIntegrarea în genomul eritrocitelor mature, care nu au nucleu — Incorect: Eritrocitele mature nu au nucleu și nu sunt ținta de integrare descrisă.\n\nColonizarea keratinocitelor, fără celule dendritice — Incorect: Celulele dendritice, nu keratinocitele ca atare, transportă virusul.\n\nReplicare limitată la nivelul trombocitelor circulante — Incorect: Trombocitele nu sunt rezervorul de stabilire a infecției permanente.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1429, HIV — Patogenie: virusul fondator și celulele dendritice (pagini PDF: 370).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1429
   ],
   "pdfPages": [
    370
   ],
   "section": "HIV — Patogenie: virusul fondator și celulele dendritice"
  },
  "learningObjective": "Recunoașterea traseului mucoasă → celule dendritice → ganglion regional, cu un virus fondator care stabilește infecția permanentă.",
  "optionRationales": [
   "Textul descrie transportul de către celulele dendritice spre ganglionii regionali, de obicei de către un virus fondator.",
   "Miocitele scheletice nu sunt poarta citată.",
   "Eritrocitele mature nu au nucleu și nu sunt ținta de integrare descrisă.",
   "Celulele dendritice, nu keratinocitele ca atare, transportă virusul.",
   "Trombocitele nu sunt rezervorul de stabilire a infecției permanente."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește traseul dendritice–ganglion cu ținte celulare absente din paragraf (miocit, eritrocit, trombocit)."
  },
  "textbookExpressions": [
   "virus fondator",
   "celulele dendritice"
  ]
 },
 {
  "id": "hiv-adv-051",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Răspunsul imun al gazdei în infecția HIV include:",
  "options": [
   "Producția de virus de către celulele infectate durează aproximativ 2 zile și este probabil limitată de moartea celulei",
   "Celulele NK sunt implicate, deși mutațiile de scăpare ale populației virale le compromit efectele antivirale",
   "Anticorpii neutralizanți apar la aproximativ 12 săptămâni de la infecție",
   "Anticorpii neutralizanți apar în primele 48 de ore și sterilizează mucusul",
   "Celulele NK elimină invariabil virusul fondator înainte de integrare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Producția de virus de către celulele infectate durează aproximativ 2 zile și este probabil limitată de moartea celulei — Corect: Durata de aproximativ 2 zile este explicită.\n\nCelulele NK sunt implicate, deși mutațiile de scăpare ale populației virale le compromit efectele antivirale — Corect: Rolul NK și mutațiile de scăpare sunt citate.\n\nAnticorpii neutralizanți apar la aproximativ 12 săptămâni de la infecție — Corect: Cele 12 săptămâni până la anticorpii neutralizanți sunt din text.\n\nAnticorpii neutralizanți apar în primele 48 de ore și sterilizează mucusul — Incorect: 48 de ore nu este intervalul citat; 12 săptămâni este.\n\nCelulele NK elimină invariabil virusul fondator înainte de integrare — Incorect: Textul nu atribuie NK sterilizarea virusului fondator.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1429, HIV — Patogenie: cinetică celulară, NK și anticorpi (pagini PDF: 370).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1429
   ],
   "pdfPages": [
    370
   ],
   "section": "HIV — Patogenie: cinetică celulară, NK și anticorpi"
  },
  "learningObjective": "Corelarea duratei de 2 zile a producției virale cu limitele NK (mutații de scăpare) și cu apariția anticorpilor neutralizanți la 12 săptămâni.",
  "optionRationales": [
   "Durata de aproximativ 2 zile este explicită.",
   "Rolul NK și mutațiile de scăpare sunt citate.",
   "Cele 12 săptămâni până la anticorpii neutralizanți sunt din text.",
   "48 de ore nu este intervalul citat; 12 săptămâni este.",
   "Textul nu atribuie NK sterilizarea virusului fondator."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută anticorpii de la 12 săptămâni la 48 de ore (fereastra infecției acute) și supraestimează NK."
  },
  "textbookExpressions": [
   "aproximativ 2 zile",
   "12 săptămâni"
  ]
 },
 {
  "id": "hiv-adv-052",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Sistemele de clasificare OMS și CDC ale infecției HIV:",
  "options": [
   "Sunt cele mai des utilizate; aplicabilitatea principală este monitorizarea și supravegherea populației, mai degrabă decât asistența clinică de rutină",
   "Clasificarea CDC (stadiile 0-3) combină serologie HIV pozitivă, numărul de CD4 și condițiile care definesc SIDA",
   "Înlocuiesc viremia și CD4 în decizia de inițiere a ARV la fiecare vizită",
   "Stadiul CDC 0 înseamnă SIDA cu CD4 sub 50/mm³",
   "Sistemul OMS exclude testul de anticorpi anti-HIV"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Sunt cele mai des utilizate; aplicabilitatea principală este monitorizarea și supravegherea populației, mai degrabă decât asistența clinică de rutină — Corect: Textul plasează aplicabilitatea principală la supravegherea populației.\n\nClasificarea CDC (stadiile 0-3) combină serologie HIV pozitivă, numărul de CD4 și condițiile care definesc SIDA — Corect: Combinația serologie–CD4–condiții SIDA pentru CDC 0-3 este explicită.\n\nÎnlocuiesc viremia și CD4 în decizia de inițiere a ARV la fiecare vizită — Incorect: Textul le delimitează de asistența clinică de rutină.\n\nStadiul CDC 0 înseamnă SIDA cu CD4 sub 50/mm³ — Incorect: Stadiile 0-3 combină laborator și clinic, nu definesc stadiul 0 ca SIDA cu CD4<50.\n\nSistemul OMS exclude testul de anticorpi anti-HIV — Incorect: Sistemul OMS include un test de anticorpi anti-HIV pozitiv.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1430, HIV — Clasificarea OMS și CDC (pagini PDF: 371).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1430
   ],
   "pdfPages": [
    371
   ],
   "section": "HIV — Clasificarea OMS și CDC"
  },
  "learningObjective": "Recunoașterea rolului de supraveghere (nu de rutină clinică) și a componentelor stadiilor CDC 0-3.",
  "optionRationales": [
   "Textul plasează aplicabilitatea principală la supravegherea populației.",
   "Combinația serologie–CD4–condiții SIDA pentru CDC 0-3 este explicită.",
   "Textul le delimitează de asistența clinică de rutină.",
   "Stadiile 0-3 combină laborator și clinic, nu definesc stadiul 0 ca SIDA cu CD4<50.",
   "Sistemul OMS include un test de anticorpi anti-HIV pozitiv."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă instrumentele de supraveghere în criterii de prescriere ARV și inversează conținutul stadiului 0."
  },
  "textbookExpressions": [
   "Centrului pentru controlul bolilor",
   "stadiile 0-3"
  ]
 },
 {
  "id": "hiv-adv-053",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Complexul demenței asociate SIDA (ADC) și polineuropatia senzitivă:",
  "options": [
   "ADC variază de la pierderi ușoare de memorie până la deficit cognitiv sever, tulburări de personalitate și lentoare psihomotorie",
   "Histologic, la nivelul măduvei se poate observa mielopatie vacuolară; CT arată atrofie cerebrală, iar RMN leziuni T2 hiperintense în substanța albă",
   "LCR este de obicei normal, deși poate exista o creștere a proteinelor",
   "Polineuropatia senzitivă apare în stadii avansate, predominant la membrele inferioare, cu durere intensă la picioare în formele severe",
   "EEG este patognomonic, cu complexe periodice trifazice specifice ADC"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "ADC variază de la pierderi ușoare de memorie până la deficit cognitiv sever, tulburări de personalitate și lentoare psihomotorie — Corect: Spectrul de la memorie ușoară la deficit sever este explicit.\n\nHistologic, la nivelul măduvei se poate observa mielopatie vacuolară; CT arată atrofie cerebrală, iar RMN leziuni T2 hiperintense în substanța albă — Corect: Mielopatia vacuolară, atrofia CT și leziunile T2 sunt citate.\n\nLCR este de obicei normal, deși poate exista o creștere a proteinelor — Corect: LCR de obicei normal, posibil proteine crescute, este din text.\n\nPolineuropatia senzitivă apare în stadii avansate, predominant la membrele inferioare, cu durere intensă la picioare în formele severe — Corect: Predominanța la membrele inferioare și durerea de picioare sunt descrise.\n\nEEG este patognomonic, cu complexe periodice trifazice specifice ADC — Incorect: EEG evidențiază modificări nespecifice de encefalopatie, nu complexe patognomonice.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1431, HIV — ADC, mielopatie vacuolară și polineuropatie (pagini PDF: 372).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1431
   ],
   "pdfPages": [
    372
   ],
   "section": "HIV — ADC, mielopatie vacuolară și polineuropatie"
  },
  "learningObjective": "Recunoașterea spectrului ADC, a mielopatiei vacuolare și a LCR-ului adesea normal, plus polineuropatia dureroasă de picioare.",
  "optionRationales": [
   "Spectrul de la memorie ușoară la deficit sever este explicit.",
   "Mielopatia vacuolară, atrofia CT și leziunile T2 sunt citate.",
   "LCR de obicei normal, posibil proteine crescute, este din text.",
   "Predominanța la membrele inferioare și durerea de picioare sunt descrise.",
   "EEG evidențiază modificări nespecifice de encefalopatie, nu complexe patognomonice."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie EEG-ului un pattern patognomonic pe care textul îl califică nespecific, pe fondul unor semne imagistice reale."
  },
  "textbookExpressions": [
   "mielopatiei vacuolare",
   "Polineuropatia senzitivă"
  ]
 },
 {
  "id": "hiv-adv-054",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Leucoplazia păroasă orală, semn de imunosupresie asociat EBV, apare intermitent:",
  "options": [
   "pe marginile laterale ale limbii sau pe mucoasa bucală, ca zone albicioase, reliefate",
   "doar pe palatul dur, ca peteșii",
   "ca ulcerații aftoase pe pilierii amigdalieni",
   "ca depozit detersabil pe fața dorsală a limbii, ca în candidoză",
   "ca leziuni violacee conjunctivale, ca în sarcomul Kaposi"
  ],
  "correct": [
   0
  ],
  "explanation": "pe marginile laterale ale limbii sau pe mucoasa bucală, ca zone albicioase, reliefate — Corect: Textul plasează leziunile intermitent pe marginile laterale ale limbii sau mucoasa bucală, albicioase și reliefate.\n\ndoar pe palatul dur, ca peteșii — Incorect: Palatul cu peteșii nu este descrierea citată.\n\nca ulcerații aftoase pe pilierii amigdalieni — Incorect: Ulcerațiile aftoase sunt o altă manifestare mucoasă.\n\nca depozit detersabil pe fața dorsală a limbii, ca în candidoză — Incorect: Candidoza este detersabilă; leucoplazia păroasă este reliefată, produsă de EBV.\n\nca leziuni violacee conjunctivale, ca în sarcomul Kaposi — Incorect: Leziunile violacee conjunctivale țin de sarcomul Kaposi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1447, HIV — Leucoplazia păroasă orală (EBV) (pagini PDF: 388).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1447
   ],
   "pdfPages": [
    388
   ],
   "section": "HIV — Leucoplazia păroasă orală (EBV)"
  },
  "learningObjective": "Localizarea leucoplaziei păroase pe marginile laterale ale limbii, distinct de candidoză, afte și Kaposi.",
  "optionRationales": [
   "Textul plasează leziunile intermitent pe marginile laterale ale limbii sau mucoasa bucală, albicioase și reliefate.",
   "Palatul cu peteșii nu este descrierea citată.",
   "Ulcerațiile aftoase sunt o altă manifestare mucoasă.",
   "Candidoza este detersabilă; leucoplazia păroasă este reliefată, produsă de EBV.",
   "Leziunile violacee conjunctivale țin de sarcomul Kaposi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează trei leziuni orale/oculare reale din capitol (afte, candidoză, Kaposi) peste localizarea laterală a leucoplaziei păroase."
  },
  "textbookExpressions": [
   "Leucoplazia paroasa",
   "marginile laterale ale limbii"
  ]
 },
 {
  "id": "hiv-adv-055",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Complicațiile digestive și renale netratate ale HIV includ:",
  "options": [
   "Enteropatia HIV cu grade variabile de atrofie a vilozităților, asociată diareei cronice fără alt patogen identificat",
   "Hipoclorhidria, cu consecințe asupra absorbției medicamentelor și asupra dezvoltării excesive a bacteriilor intestinale",
   "Tenofovirul asociat cu sindromul Fanconi",
   "HIVAN ca glomeruloscleroză rapidă predominantă la femeile caucaziene tinere, fără legătură cu heroina",
   "Celulele limfoide rectale fără rol de rezervor în contactul anal"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Enteropatia HIV cu grade variabile de atrofie a vilozităților, asociată diareei cronice fără alt patogen identificat — Corect: Enteropatia cu atrofie vilozitară este explicită.\n\nHipoclorhidria, cu consecințe asupra absorbției medicamentelor și asupra dezvoltării excesive a bacteriilor intestinale — Corect: Hipoclorhidria și consecințele ei sunt citate.\n\nTenofovirul asociat cu sindromul Fanconi — Corect: Asocierea tenofovir–Fanconi este menționată.\n\nHIVAN ca glomeruloscleroză rapidă predominantă la femeile caucaziene tinere, fără legătură cu heroina — Incorect: HIVAN este cel mai frecvent la bărbații de rasă neagră și poate fi exacerbată de heroină.\n\nCelulele limfoide rectale fără rol de rezervor în contactul anal — Incorect: Textul descrie tesutul limfoid rectal ca țintă și rezervor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1432, HIV — Enteropatie, hipoclorhidrie și tenofovir/Fanconi (pagini PDF: 373).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1432
   ],
   "pdfPages": [
    373
   ],
   "section": "HIV — Enteropatie, hipoclorhidrie și tenofovir/Fanconi"
  },
  "learningObjective": "Recunoașterea atrofiei vilozitare, a hipoclorhidriei și a Fanconi prin tenofovir, distinct de epidemiologia HIVAN (bărbați de rasă neagră, heroină).",
  "optionRationales": [
   "Enteropatia cu atrofie vilozitară este explicită.",
   "Hipoclorhidria și consecințele ei sunt citate.",
   "Asocierea tenofovir–Fanconi este menționată.",
   "HIVAN este cel mai frecvent la bărbații de rasă neagră și poate fi exacerbată de heroină.",
   "Textul descrie tesutul limfoid rectal ca țintă și rezervor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează profilul HIVAN (rasă, sex, heroină) și neagă rezervorul rectal, ambele pe aceeași pagină."
  },
  "textbookExpressions": [
   "sindromul Fanconi",
   "Hipoclorhidria"
  ]
 },
 {
  "id": "hiv-adv-056",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Pneumopatia interstițială limfoidă (LIP) în infecția HIV:",
  "options": [
   "A fost descrisă frecvent la copiii cu HIV, dar este rar întâlnită la adulți",
   "Infiltratul alveolar conține limfocite, plasmocite și limfoblaști; virusul Epstein-Barr poate fi decelat",
   "Este forma tipică de pneumonie a adultului cu CD4 peste 500/mm³",
   "Se datorează Pneumocystis, cu aspect de sticlă mată ca în PCP",
   "Răspunde doar la co-trimoxazol, EBV nefiind implicat"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "A fost descrisă frecvent la copiii cu HIV, dar este rar întâlnită la adulți — Corect: Predominanța pediatrică și raritatea la adulți sunt explicite.\n\nInfiltratul alveolar conține limfocite, plasmocite și limfoblaști; virusul Epstein-Barr poate fi decelat — Corect: Compoziția infiltratului și EBV sunt citate.\n\nEste forma tipică de pneumonie a adultului cu CD4 peste 500/mm³ — Incorect: Nu este pneumonia tipică a adultului cu CD4 păstrat.\n\nSe datorează Pneumocystis, cu aspect de sticlă mată ca în PCP — Incorect: Pneumocystis și sticla mată țin de PCP, nu de definiția LIP.\n\nRăspunde doar la co-trimoxazol, EBV nefiind implicat — Incorect: Textul leagă LIP de infiltrat linfo-plasmocitar și EBV, nu de co-trimoxazol ca unica terapie.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1432, HIV — Pneumopatia interstițială limfoidă (pagini PDF: 373).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1432
   ],
   "pdfPages": [
    373
   ],
   "section": "HIV — Pneumopatia interstițială limfoidă"
  },
  "learningObjective": "Recunoașterea LIP ca entitate pediatrică, cu infiltrat linfo-plasmocitar și posibil EBV, rară la adult.",
  "optionRationales": [
   "Predominanța pediatrică și raritatea la adulți sunt explicite.",
   "Compoziția infiltratului și EBV sunt citate.",
   "Nu este pneumonia tipică a adultului cu CD4 păstrat.",
   "Pneumocystis și sticla mată țin de PCP, nu de definiția LIP.",
   "Textul leagă LIP de infiltrat linfo-plasmocitar și EBV, nu de co-trimoxazol ca unica terapie."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă LIP-ul pediatric cu PCP-ul adultului (sticlă mată, co-trimoxazol) de pe paginile de infecții oportuniste."
  },
  "textbookExpressions": [
   "limfoida {LIP)",
   "Virusul Epstein-Barr"
  ]
 },
 {
  "id": "hiv-adv-057",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Consecințele clinice ale afectării imune prin HIV depind de:",
  "options": [
   "Expunerea de-a lungul vieții; multe episoade sunt reactivări ale unei infecții latente, iar factorii geografici determină flora",
   "Virulența microorganismului: M. tuberculosis, Candida și virusurile herpetice dau manifestări și la imunodepresie ușoară",
   "Gradul de imunodepresie: la CD4 sub 100/mm³ pot apărea infecții diseminate cu agenți de virulență scăzută, precum MAI și Cryptosporidium",
   "Pentru infecțiile cu virulență scăzută de acest tip este indicat tratament profilactic",
   "Microorganismele puțin virulente produc boală încă din stadiile incipiente, înaintea TB și a candidozei"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Expunerea de-a lungul vieții; multe episoade sunt reactivări ale unei infecții latente, iar factorii geografici determină flora — Corect: Expunerea, reactivarea și geografia sunt primul factor.\n\nVirulența microorganismului: M. tuberculosis, Candida și virusurile herpetice dau manifestări și la imunodepresie ușoară — Corect: Virulența înaltă a TB, Candida și herpes la imunodepresie ușoară este explicită.\n\nGradul de imunodepresie: la CD4 sub 100/mm³ pot apărea infecții diseminate cu agenți de virulență scăzută, precum MAI și Cryptosporidium — Corect: Pragul CD4<100 pentru MAI și Cryptosporidium este citat.\n\nPentru infecțiile cu virulență scăzută de acest tip este indicat tratament profilactic — Corect: Profilaxia pentru acest tip de infecții este indicată.\n\nMicroorganismele puțin virulente produc boală încă din stadiile incipiente, înaintea TB și a candidozei — Incorect: Textul inversează: puțin virulentele apar tardiv, la imunosupresie severă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1433, HIV — Factorii care modulează expresia clinică (pagini PDF: 374).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1433
   ],
   "pdfPages": [
    374
   ],
   "section": "HIV — Factorii care modulează expresia clinică"
  },
  "learningObjective": "Ierarhizarea expunerii, virulenței (TB/Candida/herpes devreme) și a pragului CD4<100 pentru MAI/Cryptosporidium, cu indicație de profilaxie.",
  "optionRationales": [
   "Expunerea, reactivarea și geografia sunt primul factor.",
   "Virulența înaltă a TB, Candida și herpes la imunodepresie ușoară este explicită.",
   "Pragul CD4<100 pentru MAI și Cryptosporidium este citat.",
   "Profilaxia pentru acest tip de infecții este indicată.",
   "Textul inversează: puțin virulentele apar tardiv, la imunosupresie severă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează calendarul virulenței (precoce versus tardiv) pe fondul pragului CD4<100 real."
  },
  "textbookExpressions": [
   "CD4 <100/mm3",
   "Cryptosporidium"
  ]
 },
 {
  "id": "hiv-adv-058",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Persoanele nou diagnosticate cu HIV ar trebui evaluate de un medic specialist în termen de:",
  "options": [
   "șase luni, dacă sunt asimptomatice",
   "două săptămâni de la diagnostic, sau mai rapid dacă sunt simptomatice ori au alte afecțiuni acute",
   "un an, până la prima determinare de viremie",
   "24 de ore, doar dacă CD4 este deja sub 50/mm³",
   "trei ani, cât latența clinică medie"
  ],
  "correct": [
   1
  ],
  "explanation": "șase luni, dacă sunt asimptomatice — Incorect: Șase luni depășește intervalul citat.\n\ndouă săptămâni de la diagnostic, sau mai rapid dacă sunt simptomatice ori au alte afecțiuni acute — Corect: Textul cere evaluare de specialist în două săptămâni, sau mai rapid dacă simptomatic/acut.\n\nun an, până la prima determinare de viremie — Incorect: Un an nu este intervalul din paragraf.\n\n24 de ore, doar dacă CD4 este deja sub 50/mm³ — Incorect: Textul nu limitează urgența la CD4<50.\n\ntrei ani, cât latența clinică medie — Incorect: Trei ani nu este fereastra de evaluare inițială.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1434, HIV — Evaluarea inițială: intervalul până la specialist (pagini PDF: 375).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1434
   ],
   "pdfPages": [
    375
   ],
   "section": "HIV — Evaluarea inițială: intervalul până la specialist"
  },
  "learningObjective": "Reținerea ferestrei de două săptămâni (mai rapid dacă simptomatic) pentru transferul către serviciul specializat.",
  "optionRationales": [
   "Șase luni depășește intervalul citat.",
   "Textul cere evaluare de specialist în două săptămâni, sau mai rapid dacă simptomatic/acut.",
   "Un an nu este intervalul din paragraf.",
   "Textul nu limitează urgența la CD4<50.",
   "Trei ani nu este fereastra de evaluare inițială."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Toate intervalele apar în capitol (latență, monitorizare); doar două săptămâni este cel al evaluării inițiale."
  },
  "textbookExpressions": [
   "două săptămâni",
   "nou diagnosticati"
  ]
 },
 {
  "id": "hiv-adv-059",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Genotiparea virală și monitorizarea înainte de ARV:",
  "options": [
   "Analiza genotipului este recomandată pentru toți nou-diagnosticații; proba cea mai adecvată este cea recoltată cât mai aproape de diagnostic",
   "Rezultatele ghidează terapia ARV, putându-se identifica tulpini rezistente de novo",
   "Pacienții care nu inițiază ARV sunt monitorizați de 2-4 ori pe an, sau la intervale mai mari dacă CD4 este crescut",
   "Genotiparea se amână până după eșecul primei linii, proba de diagnostic fiind inutilă",
   "Pacienții fără ARV nu mai necesită nicio vizită până la un eveniment definitoriu SIDA"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Analiza genotipului este recomandată pentru toți nou-diagnosticații; proba cea mai adecvată este cea recoltată cât mai aproape de diagnostic — Corect: Recomandarea universală și proba cât mai aproape de diagnostic sunt explicite.\n\nRezultatele ghidează terapia ARV, putându-se identifica tulpini rezistente de novo — Corect: Ghidarea ARV și tulpinile rezistente de novo sunt citate.\n\nPacienții care nu inițiază ARV sunt monitorizați de 2-4 ori pe an, sau la intervale mai mari dacă CD4 este crescut — Corect: Ritmul 2-4 ori pe an (sau mai rar la CD4 crescut) este din text.\n\nGenotiparea se amână până după eșecul primei linii, proba de diagnostic fiind inutilă — Incorect: Textul cere genotiparea la diagnostic, nu după eșec.\n\nPacienții fără ARV nu mai necesită nicio vizită până la un eveniment definitoriu SIDA — Incorect: Monitorizarea rămâne necesară pentru rata de progresie și opțiunile de tratament.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1434, HIV — Genotip la diagnostic și monitorizarea pre-ARV (pagini PDF: 375).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1434
   ],
   "pdfPages": [
    375
   ],
   "section": "HIV — Genotip la diagnostic și monitorizarea pre-ARV"
  },
  "learningObjective": "Aplicarea genotipării la toți nou-diagnosticații (probă precoce) și a ritmului 2-4 vizite/an la cei care amână ARV.",
  "optionRationales": [
   "Recomandarea universală și proba cât mai aproape de diagnostic sunt explicite.",
   "Ghidarea ARV și tulpinile rezistente de novo sunt citate.",
   "Ritmul 2-4 ori pe an (sau mai rar la CD4 crescut) este din text.",
   "Textul cere genotiparea la diagnostic, nu după eșec.",
   "Monitorizarea rămâne necesară pentru rata de progresie și opțiunile de tratament."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amână genotipul până după eșec, opusul recomandării de probă la diagnostic."
  },
  "textbookExpressions": [
   "genotipului viral",
   "2-4 ori pe an"
  ]
 },
 {
  "id": "hiv-adv-060",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Atazanavirul, dintre inhibitorii de protează, se caracterizează prin:",
  "options": [
   "Creșterea nivelului plasmatic al bilirubinei neconjugate, putând produce icter",
   "Absența oricărui efect digestiv sau lipidic, spre deosebire de darunavir",
   "Inhibarea selectivă a integrazei, nu a proteazei",
   "Administrarea fără boosting, ritonavirul fiind contraindicat",
   "Lipsa activității ca agent de primă linie"
  ],
  "correct": [
   0
  ],
  "explanation": "Creșterea nivelului plasmatic al bilirubinei neconjugate, putând produce icter — Corect: Textul precizează creșterea bilirubinei neconjugate și posibilitatea icterului.\n\nAbsența oricărui efect digestiv sau lipidic, spre deosebire de darunavir — Incorect: Atazanavirul poate produce tulburări gastro-intestinale și ale metabolismului lipidic, ca și darunavirul.\n\nInhibarea selectivă a integrazei, nu a proteazei — Incorect: Inhibarea integrazei este a INSTI, nu a atazanavirului.\n\nAdministrarea fără boosting, ritonavirul fiind contraindicat — Incorect: Atazanavirul boostat este frecvent folosit ca agent de primă linie.\n\nLipsa activității ca agent de primă linie — Incorect: Textul îl plasează, împreună cu darunavirul boostat, ca agent de linia întâi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1438, HIV — Atazanavir: hiperbilirubinemie neconjugată (pagini PDF: 379).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1438
   ],
   "pdfPages": [
    379
   ],
   "section": "HIV — Atazanavir: hiperbilirubinemie neconjugată"
  },
  "learningObjective": "Recunoașterea icterului prin bilirubină neconjugată ca particularitate a atazanavirului, distinct de mecanismul INSTI.",
  "optionRationales": [
   "Textul precizează creșterea bilirubinei neconjugate și posibilitatea icterului.",
   "Atazanavirul poate produce tulburări gastro-intestinale și ale metabolismului lipidic, ca și darunavirul.",
   "Inhibarea integrazei este a INSTI, nu a atazanavirului.",
   "Atazanavirul boostat este frecvent folosit ca agent de primă linie.",
   "Textul îl plasează, împreună cu darunavirul boostat, ca agent de linia întâi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Confundă atazanavirul cu un INSTI și neagă boosting-ul/linia întâi, pe fondul icterului real prin bilirubină neconjugată."
  },
  "textbookExpressions": [
   "bilirubinei neconjugate",
   "Atazanavirul"
  ]
 },
 {
  "id": "hiv-adv-061",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Potențarea („boosting\") inhibitorilor de protează cu doze mici de ritonavir sau cobicistat:",
  "options": [
   "Blochează metabolizarea via citocrom P450, crescând timpul de înjumătățire și concentrațiile plasmatice, cu mai puține pastile",
   "Crește eficacitatea și reduce riscul de rezistență",
   "Dezavantajele includ polipragmazia, alte interacțiuni și risc crescut de tulburări lipidice, în particular trigliceride",
   "Unii IP au fost asociați cu afectarea coagulării la pacienții cu hemofilie",
   "Boosting-ul scade concentrațiile de IP și crește riscul de rezistență, de aceea se evită la naivi"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Blochează metabolizarea via citocrom P450, crescând timpul de înjumătățire și concentrațiile plasmatice, cu mai puține pastile — Corect: Mecanismul P450 și creșterea T1/2/concentrațiilor sunt explicite.\n\nCrește eficacitatea și reduce riscul de rezistență — Corect: Eficacitatea sporită și rezistența redusă sunt citate.\n\nDezavantajele includ polipragmazia, alte interacțiuni și risc crescut de tulburări lipidice, în particular trigliceride — Corect: Dezavantajele, inclusiv trigliceridele, sunt enumerate.\n\nUnii IP au fost asociați cu afectarea coagulării la pacienții cu hemofilie — Corect: Asocierea cu coagularea la hemofilici este menționată.\n\nBoosting-ul scade concentrațiile de IP și crește riscul de rezistență, de aceea se evită la naivi — Incorect: Boosting-ul crește, nu scade, concentrațiile de IP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1438, HIV — Boosting-ul inhibitorilor de protează (pagini PDF: 379).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1438
   ],
   "pdfPages": [
    379
   ],
   "section": "HIV — Boosting-ul inhibitorilor de protează"
  },
  "learningObjective": "Echilibrarea câștigului farmacocinetic al boosting-ului (T1/2, pastile, rezistență) cu polipragmazia, interacțiunile, trigliceridele și hemofilia.",
  "optionRationales": [
   "Mecanismul P450 și creșterea T1/2/concentrațiilor sunt explicite.",
   "Eficacitatea sporită și rezistența redusă sunt citate.",
   "Dezavantajele, inclusiv trigliceridele, sunt enumerate.",
   "Asocierea cu coagularea la hemofilici este menționată.",
   "Boosting-ul crește, nu scade, concentrațiile de IP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează direcția boosting-ului (scade concentrațiile) deși restul listei reproduce avantajele reale din paragraf."
  },
  "textbookExpressions": [
   "boosting",
   "trigliceride"
  ]
 },
 {
  "id": "hiv-adv-062",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Întreruperea unui ARV cu timp de înjumătățire lung poate determina o coadă subterapeutică („subtherapeutic drug tail\") care:",
  "options": [
   "Favorizează apariția tulpinilor rezistente",
   "Sterilizează rezervoarele și previne arhivarea mutațiilor",
   "Este indiferentă, varianta sălbatică nemaiputând reveni",
   "Impune genotipare doar la 6 luni după oprire, nu sub tratament",
   "Este un avantaj al INNRT, motiv pentru oprirea lor bruscă"
  ],
  "correct": [
   0
  ],
  "explanation": "Favorizează apariția tulpinilor rezistente — Corect: Textul leagă coada subterapeutică de apariția tulpinilor rezistente.\n\nSterilizează rezervoarele și previne arhivarea mutațiilor — Incorect: Arhivarea mutațiilor este descrisă separat; coada nu sterilizează rezervoarele.\n\nEste indiferentă, varianta sălbatică nemaiputând reveni — Incorect: Varianta sălbatică redevine dominantă în absența presiunii, dar coada selectează rezistență.\n\nImpune genotipare doar la 6 luni după oprire, nu sub tratament — Incorect: Genotiparea se face pe probe sub tratament.\n\nEste un avantaj al INNRT, motiv pentru oprirea lor bruscă — Incorect: INNRT au barieră genetică joasă; oprirea bruscă nu este un avantaj.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1439, HIV — Rezistență: coada subterapeutică (pagini PDF: 380).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1439
   ],
   "pdfPages": [
    380
   ],
   "section": "HIV — Rezistență: coada subterapeutică"
  },
  "learningObjective": "Recunoașterea „drug tail” de după oprirea unui ARV cu T1/2 lung ca fereastră de selecție a rezistenței.",
  "optionRationales": [
   "Textul leagă coada subterapeutică de apariția tulpinilor rezistente.",
   "Arhivarea mutațiilor este descrisă separat; coada nu sterilizează rezervoarele.",
   "Varianta sălbatică redevine dominantă în absența presiunii, dar coada selectează rezistență.",
   "Genotiparea se face pe probe sub tratament.",
   "INNRT au barieră genetică joasă; oprirea bruscă nu este un avantaj."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă coada subterapeutică într-un beneficiu, opusul selecției de rezistență descrise în cadran."
  },
  "textbookExpressions": [
   "subtherapeutic drug tail",
   "timp de înjumătăţire lung"
  ]
 },
 {
  "id": "hiv-adv-063",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Eșecul virusologic, definit prin două determinări succesive ale viremiei peste 400 copii/ml după supresie anterioară:",
  "options": [
   "Necesită investigații suplimentare, inclusiv genotipare virală",
   "Noul regim trebuie bazat pe cel puțin doi agenți noi la care virusul este sensibil",
   "Dacă opțiunea adecvată este disponibilă, se inițiază cât mai curând posibil",
   "Se așteaptă scăderea spontană a viremiei 6 luni, fără genotip",
   "Noul regim poate conține un singur agent activ, restul fiind reciclați indiferent de rezistență"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Necesită investigații suplimentare, inclusiv genotipare virală — Corect: Investigațiile și genotiparea sunt cerute.\n\nNoul regim trebuie bazat pe cel puțin doi agenți noi la care virusul este sensibil — Corect: Cel puțin doi agenți noi sensibili sunt explicit.\n\nDacă opțiunea adecvată este disponibilă, se inițiază cât mai curând posibil — Corect: Inițierea cât mai curând este citată.\n\nSe așteaptă scăderea spontană a viremiei 6 luni, fără genotip — Incorect: Așteptarea 6 luni contrazice urgența schimbării.\n\nNoul regim poate conține un singur agent activ, restul fiind reciclați indiferent de rezistență — Incorect: Un singur agent activ nu îndeplinește regula celor doi agenți noi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1440, HIV — Eșec virusologic: pragul 400 copii/ml (pagini PDF: 381).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1440
   ],
   "pdfPages": [
    381
   ],
   "section": "HIV — Eșec virusologic: pragul 400 copii/ml"
  },
  "learningObjective": "Aplicarea definiției (două viremii >400) și a regulii a cel puțin doi agenți noi activi, inițiați fără întârziere.",
  "optionRationales": [
   "Investigațiile și genotiparea sunt cerute.",
   "Cel puțin doi agenți noi sensibili sunt explicit.",
   "Inițierea cât mai curând este citată.",
   "Așteptarea 6 luni contrazice urgența schimbării.",
   "Un singur agent activ nu îndeplinește regula celor doi agenți noi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește regula celor doi agenți noi cu expectativă sau reciclară, pe fondul pragului 400 copii/ml ușor de confundat cu 50 sau 200."
  },
  "textbookExpressions": [
   "peste 400 copii/ml",
   "cel puţin doi agenţi noi"
  ]
 },
 {
  "id": "hiv-adv-064",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Metabolismul osos la pacientul cu HIV:",
  "options": [
   "Scăderea densității osoase s-a observat odată cu inițierea ARV, mai ales pe regimuri cu tenofovir; TAF pare să aibă toxicitate osoasă mai redusă",
   "Evaluarea riscului de fractură prin scorul FRAX se face de rutină la toți peste 50 de ani, la femeile la menopauză sau în prezența altor factori de risc",
   "Tenofovirul DF protejează masa osoasă, TAF fiind mai toxic",
   "FRAX este rezervat copiilor cu LIP, nu adulților",
   "Fracturile de fragilitate nu au fost raportate la pacienții cu HIV"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Scăderea densității osoase s-a observat odată cu inițierea ARV, mai ales pe regimuri cu tenofovir; TAF pare să aibă toxicitate osoasă mai redusă — Corect: Efectul tenofovirului și profilul mai bun al TAF sunt explicite.\n\nEvaluarea riscului de fractură prin scorul FRAX se face de rutină la toți peste 50 de ani, la femeile la menopauză sau în prezența altor factori de risc — Corect: FRAX la >50 ani, menopauză sau alți factori de risc este citat.\n\nTenofovirul DF protejează masa osoasă, TAF fiind mai toxic — Incorect: Direcția toxicității este inversată.\n\nFRAX este rezervat copiilor cu LIP, nu adulților — Incorect: FRAX vizează adulții la risc, nu copiii cu LIP.\n\nFracturile de fragilitate nu au fost raportate la pacienții cu HIV — Incorect: Textul raportează DMO scăzută și fracturi de fragilitate.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1441, HIV — Densitate osoasă, tenofovir/TAF și FRAX (pagini PDF: 382).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1441
   ],
   "pdfPages": [
    382
   ],
   "section": "HIV — Densitate osoasă, tenofovir/TAF și FRAX"
  },
  "learningObjective": "Corelarea scăderii DMO la inițierea tenofovirului (TAF mai blând) cu FRAX de rutină după 50 de ani/menopauză.",
  "optionRationales": [
   "Efectul tenofovirului și profilul mai bun al TAF sunt explicite.",
   "FRAX la >50 ani, menopauză sau alți factori de risc este citat.",
   "Direcția toxicității este inversată.",
   "FRAX vizează adulții la risc, nu copiii cu LIP.",
   "Textul raportează DMO scăzută și fracturi de fragilitate."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează toxicitatea osoasă TDF versus TAF și mută FRAX pe seama LIP pediatric."
  },
  "textbookExpressions": [
   "Tenofovir alafenamida",
   "scorul FRAX"
  ]
 },
 {
  "id": "hiv-adv-065",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Inițierea ARV în infecția acută HIV și prevenirea IRIS:",
  "options": [
   "ARV trebuie inițiat imediat la toți cei care se prezintă cu infecție acută HIV",
   "În acest stadiu diversitatea virală este redusă, iar capacitatea imunologică este încă păstrată",
   "Pentru a evita IRIS în TB și criptococoză, tratamentul specific se dă câteva săptămâni (în medie 4) înaintea ARV",
   "IRIS apare de obicei la cei cu imunodepresie importantă la inițierea ARV",
   "Infecția acută contraindică ARV până la 6 luni, pentru a nu arhiva rezistență"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "ARV trebuie inițiat imediat la toți cei care se prezintă cu infecție acută HIV — Corect: Inițierea imediată în infecția acută este explicită.\n\nÎn acest stadiu diversitatea virală este redusă, iar capacitatea imunologică este încă păstrată — Corect: Diversitatea redusă și capacitatea imună păstrată sunt citate.\n\nPentru a evita IRIS în TB și criptococoză, tratamentul specific se dă câteva săptămâni (în medie 4) înaintea ARV — Corect: Fereastra medie de 4 săptămâni pentru TB/Cryptococcus este din text.\n\nIRIS apare de obicei la cei cu imunodepresie importantă la inițierea ARV — Corect: Contextul de imunodepresie importantă al IRIS este descris.\n\nInfecția acută contraindică ARV până la 6 luni, pentru a nu arhiva rezistență — Incorect: Textul cere ARV imediat în infecția acută, nu amânare 6 luni.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1441, 1440, HIV — Infecția acută și fereastra IRIS de 4 săptămâni (pagini PDF: 382, 381).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1441,
    1440
   ],
   "pdfPages": [
    382,
    381
   ],
   "section": "HIV — Infecția acută și fereastra IRIS de 4 săptămâni"
  },
  "learningObjective": "Contrastarea inițierii imediate în infecția acută (diversitate redusă) cu amânarea medie de 4 săptămâni în TB/criptococoză pentru IRIS.",
  "optionRationales": [
   "Inițierea imediată în infecția acută este explicită.",
   "Diversitatea redusă și capacitatea imună păstrată sunt citate.",
   "Fereastra medie de 4 săptămâni pentru TB/Cryptococcus este din text.",
   "Contextul de imunodepresie importantă al IRIS este descris.",
   "Textul cere ARV imediat în infecția acută, nu amânare 6 luni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Importă fereastra de 6 luni a primoinfecției ca interdicție ARV, opusul inițierii imediate din acest paragraf."
  },
  "textbookExpressions": [
   "infectie acuta HIV",
   "în medie 4 săptămâni"
  ]
 },
 {
  "id": "hiv-adv-066",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Factorii asociați cu prognostic nefavorabil în meningita criptococică la pacientul cu HIV sunt:",
  "options": [
   "Număr mare de fungi în LCR, număr mic de leucocite în LCR și alterarea stării de conștiență la prezentare",
   "Titrul de antigen care se negativează rapid sub tratament",
   "Redoarea de ceafă marcată, ca semn de inflamație viguroasă protectoare",
   "Absența antigenului criptococic din LCR",
   "Culturile negative din sânge, care exclud diseminarea"
  ],
  "correct": [
   0
  ],
  "explanation": "Număr mare de fungi în LCR, număr mic de leucocite în LCR și alterarea stării de conștiență la prezentare — Corect: Cei trei factori sunt enumerați explicit.\n\nTitrul de antigen care se negativează rapid sub tratament — Incorect: Titrul scade semnificativ, dar de obicei nu se negativează; nu este markerul de prognostic citat.\n\nRedoarea de ceafă marcată, ca semn de inflamație viguroasă protectoare — Incorect: Redoarea poate lipsi prin răspuns inflamator anormal.\n\nAbsența antigenului criptococic din LCR — Incorect: Antigenul din LCR poate fi pozitiv în titruri variabile.\n\nCulturile negative din sânge, care exclud diseminarea — Incorect: Criptococii pot fi identificați și în culturi din sânge; negativul nu este criteriul de prognostic.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1444, HIV — Criptococoză: markeri de prognostic (pagini PDF: 385).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1444
   ],
   "pdfPages": [
    385
   ],
   "section": "HIV — Criptococoză: markeri de prognostic"
  },
  "learningObjective": "Reținerea triadei de prognostic nefavorabil (fungi mulți, leucocite puține, conștiență alterată), distinct de antigenul care de obicei nu se negativează.",
  "optionRationales": [
   "Cei trei factori sunt enumerați explicit.",
   "Titrul scade semnificativ, dar de obicei nu se negativează; nu este markerul de prognostic citat.",
   "Redoarea poate lipsi prin răspuns inflamator anormal.",
   "Antigenul din LCR poate fi pozitiv în titruri variabile.",
   "Criptococii pot fi identificați și în culturi din sânge; negativul nu este criteriul de prognostic."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește triada de prognostic cu negativarea antigenului, pe care textul o descrie ca rară."
  },
  "textbookExpressions": [
   "număr mare de fungi",
   "alterarea stării de constienta"
  ]
 },
 {
  "id": "hiv-adv-067",
  "topicId": "hiv",
  "type": "CM",
  "stem": "În pneumonia cu Pneumocystis, dincolo de co-trimoxazol:",
  "options": [
   "Atovaquona sau clindamicină plus primachină pot fi alternative",
   "În cazurile severe, corticoterapia sistemică reduce mortalitatea; hipoxia severă poate necesita CPAP sau ventilație, iar evoluția se poate complica cu pneumotorax",
   "Pentamidina în aerosoli protejează doar plămânii, penetrează ineficient lobii superiori, iar recurențele pot fi atipice sau extrapulmonare",
   "Corticoterapia este indicată și în formele ușoare orale",
   "ARV se amână până după un an de profilaxie secundară"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Atovaquona sau clindamicină plus primachină pot fi alternative — Corect: Cele două alternative sunt citate.\n\nÎn cazurile severe, corticoterapia sistemică reduce mortalitatea; hipoxia severă poate necesita CPAP sau ventilație, iar evoluția se poate complica cu pneumotorax — Corect: Steroizii în sever, CPAP/ventilație și pneumotoraxul sunt descrise.\n\nPentamidina în aerosoli protejează doar plămânii, penetrează ineficient lobii superiori, iar recurențele pot fi atipice sau extrapulmonare — Corect: Limitele pentamidinei (lobi superiori, forme atipice/extrapulmonare) sunt explicite.\n\nCorticoterapia este indicată și în formele ușoare orale — Incorect: În formele ușoare orale corticoterapia nu este indicată.\n\nARV se amână până după un an de profilaxie secundară — Incorect: ARV trebuie inițiat cât mai precoce la netratați.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1444, HIV — PCP: alternative, steroizi, pneumotorax și pentamidină (pagini PDF: 385).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1444
   ],
   "pdfPages": [
    385
   ],
   "section": "HIV — PCP: alternative, steroizi, pneumotorax și pentamidină"
  },
  "learningObjective": "Poziționarea atovaquonei/clinda-primachinei, a steroizilor doar în formele severe (risc de pneumotorax) și a limitelor pentamidinei inhalatorii.",
  "optionRationales": [
   "Cele două alternative sunt citate.",
   "Steroizii în sever, CPAP/ventilație și pneumotoraxul sunt descrise.",
   "Limitele pentamidinei (lobi superiori, forme atipice/extrapulmonare) sunt explicite.",
   "În formele ușoare orale corticoterapia nu este indicată.",
   "ARV trebuie inițiat cât mai precoce la netratați."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde steroizii la forma ușoară și amână ARV, opusul textului, pe fondul pneumotoraxului și pentamidinei reale."
  },
  "textbookExpressions": [
   "pneumotoraxului",
   "lobilor superiori"
  ]
 },
 {
  "id": "hiv-adv-068",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Leishmanioza la pacientul cu HIV care a călătorit în zone endemice:",
  "options": [
   "Simptomele sunt frecvent nespecifice (febră, alterarea stării generale, diaree, scădere ponderală); splenomegalia, anemia și trombocitopenia sunt importante",
   "Amastigotele se vizualizează în biopsia de măduvă sau aspiratul splenic; serologia nu este fiabilă în acest context",
   "Tratamentul de elecție este co-trimoxazolul, ca în PCP",
   "Serologia este standardul de aur, biopsia de măduvă fiind superfluă",
   "Zonele endemice se limitează la Scandinavia, fără Mediterană"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Simptomele sunt frecvent nespecifice (febră, alterarea stării generale, diaree, scădere ponderală); splenomegalia, anemia și trombocitopenia sunt importante — Corect: Tabloul nespecific și triada splenomegalie–anemie–trombocitopenie sunt explicite.\n\nAmastigotele se vizualizează în biopsia de măduvă sau aspiratul splenic; serologia nu este fiabilă în acest context — Corect: Amastigotele în măduvă/splină și infiabilitatea serologiei sunt citate.\n\nTratamentul de elecție este co-trimoxazolul, ca în PCP — Incorect: Tratamentul se face cu amfotericină liposomală, nu cu co-trimoxazol.\n\nSerologia este standardul de aur, biopsia de măduvă fiind superfluă — Incorect: Serologia nu este fiabilă; biopsia/aspiratul sunt metodele citate.\n\nZonele endemice se limitează la Scandinavia, fără Mediterană — Incorect: Zonele citate sunt America de Sud, Africa tropicală și o mare parte din Mediterană.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1445, HIV — Leishmanioza viscerală (pagini PDF: 386).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1445
   ],
   "pdfPages": [
    386
   ],
   "section": "HIV — Leishmanioza viscerală"
  },
  "learningObjective": "Recunoașterea tabloului spleno-anemic, a vizualizării amastigotelor și a infiabilității serologiei, cu amfotericină liposomală ca tratament.",
  "optionRationales": [
   "Tabloul nespecific și triada splenomegalie–anemie–trombocitopenie sunt explicite.",
   "Amastigotele în măduvă/splină și infiabilitatea serologiei sunt citate.",
   "Tratamentul se face cu amfotericină liposomală, nu cu co-trimoxazol.",
   "Serologia nu este fiabilă; biopsia/aspiratul sunt metodele citate.",
   "Zonele citate sunt America de Sud, Africa tropicală și o mare parte din Mediterană."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește amfotericina cu co-trimoxazolul PCP și declară serologia standard de aur, opusul infiabilității din text."
  },
  "textbookExpressions": [
   "Amastigotele",
   "amfotericina liposomala"
  ]
 },
 {
  "id": "hiv-adv-069",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Co-infecția HIV/VHC, dincolo de DAA 12 săptămâni:",
  "options": [
   "Dacă tratamentul VHC este planificat, ARV se inițiază preferabil cu 4-6 săptămâni înaintea DAA",
   "Cei care temporizează tratamentul VHC trebuie să facă cel puțin anual elastografie hepatică sau altă monitorizare non-invazivă",
   "Incidența hepatitei C acute a crescut la BSB; dacă la 4 săptămâni de la diagnosticul acut viremia VHC nu a scăzut cu 2 log10, se încep DAA",
   "Răspunsul imun la VHC protejează de reinfecție, care este rară după clearance",
   "ARV se evită până după vindecarea VHC, pentru a nu crește hepatotoxicitatea"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Dacă tratamentul VHC este planificat, ARV se inițiază preferabil cu 4-6 săptămâni înaintea DAA — Corect: Fereastra 4-6 săptămâni este explicită.\n\nCei care temporizează tratamentul VHC trebuie să facă cel puțin anual elastografie hepatică sau altă monitorizare non-invazivă — Corect: Elastografia anuală la cei care temporizează este citată.\n\nIncidența hepatitei C acute a crescut la BSB; dacă la 4 săptămâni de la diagnosticul acut viremia VHC nu a scăzut cu 2 log10, se încep DAA — Corect: Regula BSB / 4 săptămâni / 2 log10 este din text.\n\nRăspunsul imun la VHC protejează de reinfecție, care este rară după clearance — Incorect: Răspunsul imun nu protejează împotriva reinfecției; ratele de reinfecție sunt crescute.\n\nARV se evită până după vindecarea VHC, pentru a nu crește hepatotoxicitatea — Incorect: Toți co-infectații trebuie să primească ARV; temporizarea ARV până după VHC este opusul recomandării.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1446, HIV — Co-infecția VHC: fereastra 4-6 săptămâni și hepatita C acută (pagini PDF: 387).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1446
   ],
   "pdfPages": [
    387
   ],
   "section": "HIV — Co-infecția VHC: fereastra 4-6 săptămâni și hepatita C acută"
  },
  "learningObjective": "Aplicarea inițierii ARV cu 4-6 săptămâni înaintea DAA, a elastografiei anuale și a regulii de 2 log10 la 4 săptămâni în hepatita C acută.",
  "optionRationales": [
   "Fereastra 4-6 săptămâni este explicită.",
   "Elastografia anuală la cei care temporizează este citată.",
   "Regula BSB / 4 săptămâni / 2 log10 este din text.",
   "Răspunsul imun nu protejează împotriva reinfecției; ratele de reinfecție sunt crescute.",
   "Toți co-infectații trebuie să primească ARV; temporizarea ARV până după VHC este opusul recomandării."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Neagă reinfecția și inversează ordinea ARV–DAA, două capcane de pe aceeași pagină."
  },
  "textbookExpressions": [
   "4-6 săptămâni",
   "elastografie hepatica"
  ]
 },
 {
  "id": "hiv-adv-070",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Infecția genitală/orală cu HSV la pacientul cu HIV imunodeprimat se manifestă, mai degrabă, prin leziuni:",
  "options": [
   "veziculoase clasice, ca la imunocompetent, cu eliminare virală scurtă",
   "ulcerative, nu veziculoase, cu eliminare virală prelungită",
   "violacee conjunctivale, ca în sarcomul Kaposi",
   "albicioase reliefate pe marginea limbii, ca leucoplazia păroasă",
   "în sticlă mată pulmonară, ca în PCP"
  ],
  "correct": [
   1
  ],
  "explanation": "veziculoase clasice, ca la imunocompetent, cu eliminare virală scurtă — Incorect: Pattern-ul veziculos scurt este al imunocompetentului.\n\nulcerative, nu veziculoase, cu eliminare virală prelungită — Corect: Textul precizează leziuni mai degrabă ulcerative decât veziculoase, cu eliminare virală prelungită.\n\nviolacee conjunctivale, ca în sarcomul Kaposi — Incorect: Violaceul conjunctival este Kaposi.\n\nalbicioase reliefate pe marginea limbii, ca leucoplazia păroasă — Incorect: Zonele albicioase laterale sunt leucoplazia păroasă EBV.\n\nîn sticlă mată pulmonară, ca în PCP — Incorect: Sticla mată este PCP.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1447, HIV — HSV: ulcerativ versus veziculos (pagini PDF: 388).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1447
   ],
   "pdfPages": [
    388
   ],
   "section": "HIV — HSV: ulcerativ versus veziculos"
  },
  "learningObjective": "Recunoașterea pattern-ului ulcerativ (nu veziculos) și a shedding-ului prelungit al HSV la imunodeprimat.",
  "optionRationales": [
   "Pattern-ul veziculos scurt este al imunocompetentului.",
   "Textul precizează leziuni mai degrabă ulcerative decât veziculoase, cu eliminare virală prelungită.",
   "Violaceul conjunctival este Kaposi.",
   "Zonele albicioase laterale sunt leucoplazia păroasă EBV.",
   "Sticla mată este PCP."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează patru morphologii reale din capitol (vezicule, Kaposi, leucoplazie, sticlă mată) peste HSV-ul ulcerativ."
  },
  "textbookExpressions": [
   "ulcerativ decat veziculos",
   "Eliminarea virala a HSV"
  ]
 },
 {
  "id": "hiv-adv-071",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Infecțiile cu VZV, EBV și HPV la pacientul cu HIV:",
  "options": [
   "Herpesul zoster tinde să fie mai agresiv și mai lung; poate cuprinde mai multe dermatoame; tulpinile rezistente la aciclovir (de obicei mutații de timidin-kinază) pot răspunde la foscarnet",
   "EBV se asociază frecvent cu limfomul primar cerebral și limfoamele non-Hodgkin; titruri înalte în secrețiile orofaringiene",
   "HPV se asociază cu progresie mai rapidă a neoplaziei intraepiteliale anale și cervicale, spre carcinom scuamos de col sau rect",
   "Vaccinarea HPV ar trebui recomandată",
   "Zosterul nu apare decât la CD4 sub 50/mm³, iar HPV nu influențează neoplazia cervicală"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Herpesul zoster tinde să fie mai agresiv și mai lung; poate cuprinde mai multe dermatoame; tulpinile rezistente la aciclovir (de obicei mutații de timidin-kinază) pot răspunde la foscarnet — Corect: Agresivitatea, mai multe dermatoame, mutațiile TK și foscarnetul sunt explicite.\n\nEBV se asociază frecvent cu limfomul primar cerebral și limfoamele non-Hodgkin; titruri înalte în secrețiile orofaringiene — Corect: Asocierea EBV–limfom și titrurile orofaringiene sunt citate.\n\nHPV se asociază cu progresie mai rapidă a neoplaziei intraepiteliale anale și cervicale, spre carcinom scuamos de col sau rect — Corect: Progresia CIN/AIN spre carcinom scuamos este descrisă.\n\nVaccinarea HPV ar trebui recomandată — Corect: Vaccinarea HPV este recomandată.\n\nZosterul nu apare decât la CD4 sub 50/mm³, iar HPV nu influențează neoplazia cervicală — Incorect: Zosterul poate apărea în orice stadiu; HPV accelerează neoplazia cervicală/anală.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1447, HIV — VZV (foscarnet), EBV oncogen și HPV anogenital (pagini PDF: 388).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1447
   ],
   "pdfPages": [
    388
   ],
   "section": "HIV — VZV (foscarnet), EBV oncogen și HPV anogenital"
  },
  "learningObjective": "Corelarea zosterului multidermatomal rezistent (timidin-kinază, foscarnet) cu EBV oncogen și cu accelerarea CIN/AIN prin HPV.",
  "optionRationales": [
   "Agresivitatea, mai multe dermatoame, mutațiile TK și foscarnetul sunt explicite.",
   "Asocierea EBV–limfom și titrurile orofaringiene sunt citate.",
   "Progresia CIN/AIN spre carcinom scuamos este descrisă.",
   "Vaccinarea HPV este recomandată.",
   "Zosterul poate apărea în orice stadiu; HPV accelerează neoplazia cervicală/anală."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Restrânge zosterul la CD4<50 (pragul retinitei CMV) și neagă legătura HPV–CIN, ambele de pe pagini vecine."
  },
  "textbookExpressions": [
   "timidin-kinaza",
   "foscarnet"
  ]
 },
 {
  "id": "hiv-adv-072",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Interacțiunea rifampicină–inhibitori de protează, dincolo de inducția P450 care scade IP:",
  "options": [
   "Unii IP blochează citocromul P450, crescând concentrația de rifampicină până la niveluri toxice, cu uveită și efecte hepatotoxice",
   "INNRT interacționează de asemenea cu rifampicina, făcând necesară modificarea dozelor",
   "Rifampicina crește concentrația tuturor IP până la toxicitate, fără risc de rezistență",
   "Uveita este un efect al co-trimoxazolului, nu al toxicității rifampicinei",
   "INNRT nu au nicio interacțiune cu rifampicina"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Unii IP blochează citocromul P450, crescând concentrația de rifampicină până la niveluri toxice, cu uveită și efecte hepatotoxice — Corect: Blocarea P450 de către unii IP, toxicitatea rifampicinei, uveita și hepatotoxicitatea sunt explicite.\n\nINNRT interacționează de asemenea cu rifampicina, făcând necesară modificarea dozelor — Corect: Interacțiunea INNRT–rifampicină cu modificarea dozelor este citată.\n\nRifampicina crește concentrația tuturor IP până la toxicitate, fără risc de rezistență — Incorect: Rifampicina reduce, nu crește, concentrația de IP.\n\nUveita este un efect al co-trimoxazolului, nu al toxicității rifampicinei — Incorect: Uveita este legată de toxicitatea rifampicinei în această interacțiune.\n\nINNRT nu au nicio interacțiune cu rifampicina — Incorect: Textul afirmă că INNRT interacționează, necessitând modificarea dozelor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1448, HIV/TB — Rifampicina, uveita și INNRT (pagini PDF: 389).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1448
   ],
   "pdfPages": [
    389
   ],
   "section": "HIV/TB — Rifampicina, uveita și INNRT"
  },
  "learningObjective": "Recunoașterea dublei interacțiuni: IP care cresc rifampicina (uveită, hepatotoxicitate) și INNRT care cer ajustare de doză.",
  "optionRationales": [
   "Blocarea P450 de către unii IP, toxicitatea rifampicinei, uveita și hepatotoxicitatea sunt explicite.",
   "Interacțiunea INNRT–rifampicină cu modificarea dozelor este citată.",
   "Rifampicina reduce, nu crește, concentrația de IP.",
   "Uveita este legată de toxicitatea rifampicinei în această interacțiune.",
   "Textul afirmă că INNRT interacționează, necessitând modificarea dozelor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează direcția rifampicină→IP (crește versus scade) și mută uveita pe seama co-trimoxazolului."
  },
  "textbookExpressions": [
   "uveita",
   "citocromului P450"
  ]
 },
 {
  "id": "hiv-adv-073",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Sarcomul Kaposi epidemic, dincolo de asocierea cu HHV-8:",
  "options": [
   "Se manifestă mai agresiv decât forma endemică a neinfectaților HIV; incidența a scăzut după ARV",
   "Este o tumoră multicentrică din celule fusiforme și endoteliale care formează fante cu eritrocite captive, de unde nuanța violacee",
   "Poate apărea în jurul ochilor, în special la conjunctivă, cu edem periorbital; radioterapia locală poate ajuta leziunile cutanate și ganglionare",
   "Forma viscerală are prognostic mai bun decât cea cutanată, fiind mai radiosensibilă",
   "ARV nu influențează regresia leziunilor"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Se manifestă mai agresiv decât forma endemică a neinfectaților HIV; incidența a scăzut după ARV — Corect: Agresivitatea față de forma endemică și scăderea incidenței după ARV sunt explicite.\n\nEste o tumoră multicentrică din celule fusiforme și endoteliale care formează fante cu eritrocite captive, de unde nuanța violacee — Corect: Celulele fusiforme, fantele și nuanța violacee sunt descrise.\n\nPoate apărea în jurul ochilor, în special la conjunctivă, cu edem periorbital; radioterapia locală poate ajuta leziunile cutanate și ganglionare — Corect: Localizarea perioculară/conjunctivală și radioterapia locală sunt citate.\n\nForma viscerală are prognostic mai bun decât cea cutanată, fiind mai radiosensibilă — Incorect: SK visceral are prognostic mai rezervat decât cel cutanat.\n\nARV nu influențează regresia leziunilor — Incorect: ARV favorizează regresia leziunilor.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1449, HIV — Sarcomul Kaposi: histologie și afectare oculară (pagini PDF: 390).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1449
   ],
   "pdfPages": [
    390
   ],
   "section": "HIV — Sarcomul Kaposi: histologie și afectare oculară"
  },
  "learningObjective": "Corelarea agresivității epidemice, a histologiei (fante cu eritrocite) și a localizării conjunctivale, cu prognosticul mai rezervat al formei viscerale.",
  "optionRationales": [
   "Agresivitatea față de forma endemică și scăderea incidenței după ARV sunt explicite.",
   "Celulele fusiforme, fantele și nuanța violacee sunt descrise.",
   "Localizarea perioculară/conjunctivală și radioterapia locală sunt citate.",
   "SK visceral are prognostic mai rezervat decât cel cutanat.",
   "ARV favorizează regresia leziunilor."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează prognosticul visceral versus cutanat și neagă regresia sub ARV, două afirmații din același paragraf."
  },
  "textbookExpressions": [
   "celule fusiforme",
   "edem periorbital"
  ]
 },
 {
  "id": "hiv-adv-074",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Circumcizia bărbaților heterosexuali neinfectați, în studiile africane citate, a redus transmiterea de la femei la bărbați cu cel puțin 50%. La femeile HIV-negative, la 2 ani după circumcizia partenerilor HIV-pozitivi, s-a observat:",
  "options": [
   "o reducere identică, de cel puțin 50%",
   "o reducere mai modestă a incidenței HIV",
   "o creștere a incidenței, prin riscul compensator",
   "eliminarea completă a transmiterii, ca în U=U",
   "absența oricărui efect măsurabil"
  ],
  "correct": [
   1
  ],
  "explanation": "o reducere identică, de cel puțin 50% — Incorect: 50% este reducerea la bărbatul circumcis, nu la parteneră.\n\no reducere mai modestă a incidenței HIV — Corect: Textul precizează o reducere mai modestă a incidenței la femeile HIV-negative, la 2 ani.\n\no creștere a incidenței, prin riscul compensator — Incorect: Nu este descrisă o creștere prin risc compensator.\n\neliminarea completă a transmiterii, ca în U=U — Incorect: U=U ține de viremia nedetectabilă sub ARV, nu de circumcizie.\n\nabsența oricărui efect măsurabil — Incorect: Un efect modest este totuși raportat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1450, HIV — Circumcizia: efectul asupra partenerei (pagini PDF: 391).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1450
   ],
   "pdfPages": [
    391
   ],
   "section": "HIV — Circumcizia: efectul asupra partenerei"
  },
  "learningObjective": "Diferențierea reducerii de cel puțin 50% (femeie→bărbat) de reducerea mai modestă a incidenței la partenerele HIV-negative la 2 ani.",
  "optionRationales": [
   "50% este reducerea la bărbatul circumcis, nu la parteneră.",
   "Textul precizează o reducere mai modestă a incidenței la femeile HIV-negative, la 2 ani.",
   "Nu este descrisă o creștere prin risc compensator.",
   "U=U ține de viremia nedetectabilă sub ARV, nu de circumcizie.",
   "Un efect modest este totuși raportat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Egalizează efectul asupra partenerei cu cei 50% ai bărbatului circumcis, deși textul îl califică mai modest, la 2 ani."
  },
  "textbookExpressions": [
   "reducere mai modestă",
   "2 ani de la circumcizia"
  ]
 },
 {
  "id": "hiv-adv-075",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Dincolo de PrEP și U=U, textul leagă menținerea HIV ca prioritate de:",
  "options": [
   "Înțelegerea și schimbarea comportamentală, dificile mai ales unde sexualitatea, HIV și SIDA sunt tabu",
   "Stigmatizare, sărăcie, legislație punitivă, inechitate socială și războaie, care pot contribui la răspândire",
   "Voință politică, care nu este evidentă în toate contextele, pentru ca progresul să fie susținut",
   "Un vaccin deja disponibil, care a înlăturat nevoia voinței politice",
   "Notificarea partenerilor ca gest lipsit de orice controversă, superfluu dacă există testare confidențială"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Înțelegerea și schimbarea comportamentală, dificile mai ales unde sexualitatea, HIV și SIDA sunt tabu — Corect: Dificultatea schimbării comportamentale în domenii tabu este explicită.\n\nStigmatizare, sărăcie, legislație punitivă, inechitate socială și războaie, care pot contribui la răspândire — Corect: Lista stigmat–sărăcie–legi–inechitate–războaie este citată.\n\nVoință politică, care nu este evidentă în toate contextele, pentru ca progresul să fie susținut — Corect: Voința politică, nu mereu evidentă, este cerută pentru susținerea progresului.\n\nUn vaccin deja disponibil, care a înlăturat nevoia voinței politice — Incorect: Textul descrie dezvoltarea vaccinului ca îngreunată, nu ca un produs care înlocuiește politica.\n\nNotificarea partenerilor ca gest lipsit de orice controversă, superfluu dacă există testare confidențială — Incorect: Notificarea partenerilor este utilă, dar pot apărea controverse.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1450, HIV — Determinanți structurali și voință politică (pagini PDF: 391).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1450
   ],
   "pdfPages": [
    391
   ],
   "section": "HIV — Determinanți structurali și voință politică"
  },
  "learningObjective": "Recunoașterea obstacolelor tabu/stigmat/sărăcie/legi punitive și a nevoii de voință politică, cu nuanța controverselor notificării partenerilor.",
  "optionRationales": [
   "Dificultatea schimbării comportamentale în domenii tabu este explicită.",
   "Lista stigmat–sărăcie–legi–inechitate–războaie este citată.",
   "Voința politică, nu mereu evidentă, este cerută pentru susținerea progresului.",
   "Textul descrie dezvoltarea vaccinului ca îngreunată, nu ca un produs care înlocuiește politica.",
   "Notificarea partenerilor este utilă, dar pot apărea controverse."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Declară vaccinul disponibil și notificarea necontroversată, două afirmații pe care textul le nuanțează opus."
  },
  "textbookExpressions": [
   "legislatia punitiva",
   "vointa politica"
  ]
 },
 {
  "id": "hiv-adv-076",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Impactul epidemiologic global al HIV, dincolo de bilanțul 78/39/36,9 milioane, include:",
  "options": [
   "Din 2001, numărul de cazuri noi a scăzut la nivel global cu 38%",
   "HIV este principala cauză de invaliditate la persoanele de 30-45 de ani",
   "HIV este principala cauză de deces la femeile de 15-49 de ani",
   "Rata de infecție scade uniform în Europa de Est și Asia Centrală",
   "ARV-ul eficient crește transmiterea, fără efect asupra incidenței"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Din 2001, numărul de cazuri noi a scăzut la nivel global cu 38% — Corect: Scăderea globală de 38% a cazurilor noi din 2001 este explicită.\n\nHIV este principala cauză de invaliditate la persoanele de 30-45 de ani — Corect: Invaliditatea dominantă la 30-45 de ani este citată.\n\nHIV este principala cauză de deces la femeile de 15-49 de ani — Corect: Decesul dominant la femeile 15-49 este citat.\n\nRata de infecție scade uniform în Europa de Est și Asia Centrală — Incorect: Rata continuă să crească în Europa de Est și părți din Asia Centrală.\n\nARV-ul eficient crește transmiterea, fără efect asupra incidenței — Incorect: ARV-ul eficient reduce transmiterea.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1426, HIV — Incidență −38% și impact pe grupe de vârstă (pagini PDF: 367).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1426
   ],
   "pdfPages": [
    367
   ],
   "section": "HIV — Incidență −38% și impact pe grupe de vârstă"
  },
  "learningObjective": "Reținerea scăderii de 38% din 2001 și a primatului de invaliditate (30-45 ani) și mortalitate (femei 15-49), versus creșterile din Europa de Est.",
  "optionRationales": [
   "Scăderea globală de 38% a cazurilor noi din 2001 este explicită.",
   "Invaliditatea dominantă la 30-45 de ani este citată.",
   "Decesul dominant la femeile 15-49 este citat.",
   "Rata continuă să crească în Europa de Est și părți din Asia Centrală.",
   "ARV-ul eficient reduce transmiterea."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează direcția incidenței în Europa de Est și neagă efectul ARV asupra transmiterii, pe fondul a trei cifre reale."
  },
  "textbookExpressions": [
   "38%",
   "30 şi 45 de ani"
  ]
 },
 {
  "id": "hiv-adv-077",
  "topicId": "hiv",
  "type": "CM",
  "stem": "În Marea Britanie, în 2017, cascadele de îngrijire citate sunt:",
  "options": [
   "101.600 de persoane trăiau cu HIV; 92% își cunoșteau diagnosticul, 98% dintre diagnosticați erau pe ARV, 97% dintre aceștia cu supresie virală",
   "4363 de cazuri noi diagnosticate",
   "O treime dintre cei care trăiesc cu HIV au peste 50 de ani, iar 30% sunt femei",
   "Sub 10.000 trăiau cu HIV, fără supresie virală",
   "Toți diagnosticații erau femei sub 25 de ani"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "101.600 de persoane trăiau cu HIV; 92% își cunoșteau diagnosticul, 98% dintre diagnosticați erau pe ARV, 97% dintre aceștia cu supresie virală — Corect: 101.600, 92%, 98% și 97% sunt din text.\n\n4363 de cazuri noi diagnosticate — Corect: 4363 cazuri noi în 2017.\n\nO treime dintre cei care trăiesc cu HIV au peste 50 de ani, iar 30% sunt femei — Corect: O treime peste 50 de ani și 30% femei.\n\nSub 10.000 trăiau cu HIV, fără supresie virală — Incorect: Prevalența nu este sub 10.000.\n\nToți diagnosticații erau femei sub 25 de ani — Incorect: 30% femei și îmbătrânirea contrazic „toți femei sub 25”.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1426, HIV — Marea Britanie 2017: 101.600 și cascada 92/98/97 (pagini PDF: 367).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1426
   ],
   "pdfPages": [
    367
   ],
   "section": "HIV — Marea Britanie 2017: 101.600 și cascada 92/98/97"
  },
  "learningObjective": "Trio-ul prevalență 101.600 / 4363 noi / cascada 92-98-97, plus îmbătrânirea (1/3 peste 50) și 30% femei.",
  "optionRationales": [
   "101.600, 92%, 98% și 97% sunt din text.",
   "4363 cazuri noi în 2017.",
   "O treime peste 50 de ani și 30% femei.",
   "Prevalența nu este sub 10.000.",
   "30% femei și îmbătrânirea contrazic „toți femei sub 25”."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Subestimează prevalența britanică și anulează cascada 92/98/97, trei ordine de mărime de pe aceeași pagină."
  },
  "textbookExpressions": [
   "101.600 de persoane",
   "97% aveau supresie virală"
  ]
 },
 {
  "id": "hiv-adv-078",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Diagnosticul tardiv și comorbiditățile în Marea Britanie/Europa:",
  "options": [
   "Diagnosticul tardiv (CD4 <350/ml în primele 3 luni) a scăzut de la 52% (2004) la 43% (2017), dar rămâne ridicat",
   "75% dintre cei care trăiesc cu HIV au cel puțin încă o afecțiune cronică (sănătate mentală, HTA, lipide, diabet)",
   "În Europa, în 2017, principalele cauze de internare au inclus afecțiuni respiratorii, psihiatrice, cardiovasculare, renale și neurologice",
   "Bolile definitorii SIDA au înlocuit comorbiditățile netransmisibile unde ARV este accesibil",
   "Fragilitatea apare doar după 80 de ani, identic populației neinfectate"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Diagnosticul tardiv (CD4 <350/ml în primele 3 luni) a scăzut de la 52% (2004) la 43% (2017), dar rămâne ridicat — Corect: 52% (2004) la 43% (2017) pentru CD4 <350.\n\n75% dintre cei care trăiesc cu HIV au cel puțin încă o afecțiune cronică (sănătate mentală, HTA, lipide, diabet) — Corect: 75% au cel puțin o afecțiune cronică.\n\nÎn Europa, în 2017, principalele cauze de internare au inclus afecțiuni respiratorii, psihiatrice, cardiovasculare, renale și neurologice — Corect: Cauzele de internare europene sunt enumerate.\n\nBolile definitorii SIDA au înlocuit comorbiditățile netransmisibile unde ARV este accesibil — Incorect: Unde ARV este accesibil, bolile SIDA au fost înlocuite de afecțiuni netransmisibile.\n\nFragilitatea apare doar după 80 de ani, identic populației neinfectate — Incorect: Fragilitatea și dizabilitățile apar la persoane mai tinere decât la neinfectați.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1426, HIV — Diagnostic tardiv 43% și comorbidități 75% (pagini PDF: 367).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1426
   ],
   "pdfPages": [
    367
   ],
   "section": "HIV — Diagnostic tardiv 43% și comorbidități 75%"
  },
  "learningObjective": "Perechea 52%→43% CD4<350 și 75% cu o comorbiditate cronică, plus cauzele de internare europene.",
  "optionRationales": [
   "52% (2004) la 43% (2017) pentru CD4 <350.",
   "75% au cel puțin o afecțiune cronică.",
   "Cauzele de internare europene sunt enumerate.",
   "Unde ARV este accesibil, bolile SIDA au fost înlocuite de afecțiuni netransmisibile.",
   "Fragilitatea și dizabilitățile apar la persoane mai tinere decât la neinfectați."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează substituția SIDA→netransmisibile și mută fragilitatea la octogenari, contrar textului despre îmbătrânire precoce."
  },
  "textbookExpressions": [
   "43% în 2017",
   "75% dintre cei"
  ]
 },
 {
  "id": "hiv-adv-079",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Transmiterea verticală a HIV, dincolo de alăptarea deja menționată ca factor:",
  "options": [
   "Fără intervenție, studiile europene sugerează că 15% dintre nou-născuții din mame HIV-pozitive pot dobândi HIV",
   "Au fost raportate rate de până la 40% în Africa și SUA",
   "În Marea Britanie, riscul de transmitere verticală este de 1:1000",
   "90% din infecțiile materno-fetale globale se înregistrează în țările cu nivel de trai scăzut, prin lipsa accesului la intervenții",
   "În era pre-ARV, alăptarea reducea riscul la jumătate, in-utero fiind calea unică"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Fără intervenție, studiile europene sugerează că 15% dintre nou-născuții din mame HIV-pozitive pot dobândi HIV — Corect: 15% fără intervenție în studiile europene.\n\nAu fost raportate rate de până la 40% în Africa și SUA — Corect: Până la 40% în Africa și SUA.\n\nÎn Marea Britanie, riscul de transmitere verticală este de 1:1000 — Corect: 1:1000 în Marea Britanie.\n\n90% din infecțiile materno-fetale globale se înregistrează în țările cu nivel de trai scăzut, prin lipsa accesului la intervenții — Corect: 90% din MTCT în țări cu nivel scăzut.\n\nÎn era pre-ARV, alăptarea reducea riscul la jumătate, in-utero fiind calea unică — Incorect: Alăptarea dubla riscul pre-ARV; majoritatea infecțiilor sunt perinatale, nu doar in-utero.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1427, HIV — Transmitere verticală: 15%, 40%, 1:1000, 90% (pagini PDF: 368).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1427
   ],
   "pdfPages": [
    368
   ],
   "section": "HIV — Transmitere verticală: 15%, 40%, 1:1000, 90%"
  },
  "learningObjective": "Ponderile 15% (Europa fără intervenție), până la 40% (Africa/SUA), 1:1000 (UK) și 90% din MTCT în țări sărace.",
  "optionRationales": [
   "15% fără intervenție în studiile europene.",
   "Până la 40% în Africa și SUA.",
   "1:1000 în Marea Britanie.",
   "90% din MTCT în țări cu nivel scăzut.",
   "Alăptarea dubla riscul pre-ARV; majoritatea infecțiilor sunt perinatale, nu doar in-utero."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează efectul alăptării pre-ARV și uită că 90% din MTCT ține de accesul la intervenții."
  },
  "textbookExpressions": [
   "15% dintre nou-născuţii",
   "1:1000"
  ]
 },
 {
  "id": "hiv-adv-080",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Riscul citat pentru cadrul medical după o singură înțepătură cu ac contaminat HIV este de aproximativ:",
  "options": [
   "0,3%, date obținute înainte de utilizarea pe scară largă a ARV care reduce viremia",
   "30%, identic transmiterii verticale fără intervenție",
   "0% dacă insectele vectoare sunt absente",
   "10%, identic riscului prin contact social",
   "50%, ca în studiile de circumcizie"
  ],
  "correct": [
   0
  ],
  "explanation": "0,3%, date obținute înainte de utilizarea pe scară largă a ARV care reduce viremia — Corect: Textul: risc de aproximativ 0,3% după o singură înțepătură, date pre-ARV pe scară largă.\n\n30%, identic transmiterii verticale fără intervenție — Incorect: 30% este ordinul transmiterii verticale fără intervenție, nu al înțepăturii.\n\n0% dacă insectele vectoare sunt absente — Incorect: Absența transmiterii prin insecte nu anulează riscul ocupațional.\n\n10%, identic riscului prin contact social — Incorect: Nu există dovadă de transmitere prin contact social.\n\n50%, ca în studiile de circumcizie — Incorect: 50% este reducerea prin circumcizie, nu riscul per înțepătură.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1428, HIV — Expunere ocupațională: 0,3% (pagini PDF: 369).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1428
   ],
   "pdfPages": [
    369
   ],
   "section": "HIV — Expunere ocupațională: 0,3%"
  },
  "learningObjective": "Reținerea riscului 0,3% per înțepătură, nuanțat de era pre-ARV eficient.",
  "optionRationales": [
   "Textul: risc de aproximativ 0,3% după o singură înțepătură, date pre-ARV pe scară largă.",
   "30% este ordinul transmiterii verticale fără intervenție, nu al înțepăturii.",
   "Absența transmiterii prin insecte nu anulează riscul ocupațional.",
   "Nu există dovadă de transmitere prin contact social.",
   "50% este reducerea prin circumcizie, nu riscul per înțepătură."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 0,3% (înțepătură) cu 15-40% (vertical) sau 50% (circumcizie), toate din capitolul de transmitere."
  },
  "textbookExpressions": [
   "0,3%",
   "înţepături cu un ac"
  ]
 },
 {
  "id": "hiv-adv-081",
  "topicId": "hiv",
  "type": "CM",
  "stem": "HIV-2 și grupurile de HIV-1, conform textului:",
  "options": [
   "HIV-2 este limitat aproape în întregime la Africa de Vest (și Europa, mai ales Franța și Portugalia), cu doar 40% omologie structurală cu HIV-1 și evoluție mai lentă",
   "Multe ARV folosite în HIV-1 sunt ineficiente în HIV-2",
   "Grupul M reprezintă 98% din infecțiile globale; în Europa/America de Nord/Australia predomină subtipul B, în Africa Centrală/subsahariană subtipul C",
   "HIV-2 este identic structural cu HIV-1 și răspunde la aceleași ARV",
   "Grupul M acoperă sub 5% din infecții, subtipul B fiind absent în Europa"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "HIV-2 este limitat aproape în întregime la Africa de Vest (și Europa, mai ales Franța și Portugalia), cu doar 40% omologie structurală cu HIV-1 și evoluție mai lentă — Corect: Africa de Vest, 40% omologie, evoluție mai lentă.\n\nMulte ARV folosite în HIV-1 sunt ineficiente în HIV-2 — Corect: Multe ARV anti-HIV-1 sunt ineficiente pe HIV-2.\n\nGrupul M reprezintă 98% din infecțiile globale; în Europa/America de Nord/Australia predomină subtipul B, în Africa Centrală/subsahariană subtipul C — Corect: Grup M 98%; B în Occident, C în Africa.\n\nHIV-2 este identic structural cu HIV-1 și răspunde la aceleași ARV — Incorect: Omologia este 40%, nu identitate; ARV-urile diferă.\n\nGrupul M acoperă sub 5% din infecții, subtipul B fiind absent în Europa — Incorect: Grupul M este 98%, nu sub 5%; B predomină în Europa.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1428, HIV — HIV-2 (40% omologie) și grupul M 98% (pagini PDF: 369).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1428
   ],
   "pdfPages": [
    369
   ],
   "section": "HIV — HIV-2 (40% omologie) și grupul M 98%"
  },
  "learningObjective": "Omologia 40%, ineficiența multor ARV, ponderea 98% a grupului M și clivajul B versus C.",
  "optionRationales": [
   "Africa de Vest, 40% omologie, evoluție mai lentă.",
   "Multe ARV anti-HIV-1 sunt ineficiente pe HIV-2.",
   "Grup M 98%; B în Occident, C în Africa.",
   "Omologia este 40%, nu identitate; ARV-urile diferă.",
   "Grupul M este 98%, nu sub 5%; B predomină în Europa."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie HIV-2 același spectru ARV și inversează 98% (grup M) cu o pondere marginală."
  },
  "textbookExpressions": [
   "40% omologie structurală",
   "98% din infecţiile"
  ]
 },
 {
  "id": "hiv-adv-082",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Turnover-ul viral și răspunsul umoral precoce:",
  "options": [
   "Timpul de înjumătățire al virusului în circulație este de aproximativ 6 ore",
   "Pentru nivelurile de viremie observate trebuie eliberate și eliminate zilnic 10⁸-10⁹ particule",
   "Anticorpii neutralizanți apar la aproximativ 12 săptămâni de la infecție",
   "Producția de virus de către celula infectată durează aproximativ 2 săptămâni, fără moarte celulară",
   "Anticorpii neutralizanți sunt prezenți din prima zi, fără fereastră de 12 săptămâni"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Timpul de înjumătățire al virusului în circulație este de aproximativ 6 ore — Corect: T1/2 ≈ 6 ore în circulație.\n\nPentru nivelurile de viremie observate trebuie eliberate și eliminate zilnic 10⁸-10⁹ particule — Corect: 10⁸-10⁹ particule eliberate și eliminate zilnic.\n\nAnticorpii neutralizanți apar la aproximativ 12 săptămâni de la infecție — Corect: Ac neutralizing la ~12 săptămâni.\n\nProducția de virus de către celula infectată durează aproximativ 2 săptămâni, fără moarte celulară — Incorect: Producția durează aproximativ 2 zile, limitată de moartea celulei.\n\nAnticorpii neutralizanți sunt prezenți din prima zi, fără fereastră de 12 săptămâni — Incorect: Anticorpii nu sunt prezenți din prima zi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1429, HIV — T1/2 6 ore, 10⁸-10⁹ particule/zi, Ac la 12 săptămâni (pagini PDF: 370).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1429
   ],
   "pdfPages": [
    370
   ],
   "section": "HIV — T1/2 6 ore, 10⁸-10⁹ particule/zi, Ac la 12 săptămâni"
  },
  "learningObjective": "Trio-ul cinetic 6 ore / 10⁸-10⁹ zilnic / 2 zile de producție (nu 2 săptămâni) și fereastra de 12 săptămâni a Ac neutralizanți.",
  "optionRationales": [
   "T1/2 ≈ 6 ore în circulație.",
   "10⁸-10⁹ particule eliberate și eliminate zilnic.",
   "Ac neutralizing la ~12 săptămâni.",
   "Producția durează aproximativ 2 zile, limitată de moartea celulei.",
   "Anticorpii nu sunt prezenți din prima zi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Umflă producția celulară de la 2 zile la 2 săptămâni și anulează fereastra de 12 săptămâni a Ac."
  },
  "textbookExpressions": [
   "6 ore",
   "12 săptămâni de la infecţie"
  ]
 },
 {
  "id": "hiv-adv-083",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Primoinfecția HIV, ca fereastră de 6 luni, se caracterizează prin:",
  "options": [
   "Primele 2-4 săptămâni pot fi silențioase clinic și serologic; după 3-6 săptămâni poate apărea o boală virală autolimitată de până la 3 săptămâni, confundabilă cu mononucleoza",
   "Seroconversia este imediată în prima oră, fără fereastră silențioasă",
   "Boala acută durează 12 luni, fără recuperare",
   "Limfocitele CD4 cresc masiv, raportul CD4:CD8 rămânând normal",
   "ARN-ul viral plasmatic este absent, p24 fiind nedetectabil"
  ],
  "correct": [
   0
  ],
  "explanation": "Primele 2-4 săptămâni pot fi silențioase clinic și serologic; după 3-6 săptămâni poate apărea o boală virală autolimitată de până la 3 săptămâni, confundabilă cu mononucleoza — Corect: Textul descrie fereastra silențioasă 2-4 săptămâni, apoi boala la 3-6 săptămâni, până la 3 săptămâni.\n\nSeroconversia este imediată în prima oră, fără fereastră silențioasă — Incorect: Nu există seroconversie în prima oră.\n\nBoala acută durează 12 luni, fără recuperare — Incorect: Recuperarea este de obicei completă, durata nu este 12 luni.\n\nLimfocitele CD4 cresc masiv, raportul CD4:CD8 rămânând normal — Incorect: CD4 pot fi scăzute, raportul CD4:CD8 inversat.\n\nARN-ul viral plasmatic este absent, p24 fiind nedetectabil — Incorect: ARN-ul este crescut, p24 poate fi detectat.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1430, HIV — Infecția acută: 2-4 săptămâni silențioase, 3-6 săptămâni boală (pagini PDF: 371).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1430
   ],
   "pdfPages": [
    371
   ],
   "section": "HIV — Infecția acută: 2-4 săptămâni silențioase, 3-6 săptămâni boală"
  },
  "learningObjective": "Calendarul 2-4 săptămâni silențioase, 3-6 săptămâni debut, durată până la 3 săptămâni, versus markerii p24/ARN prezenți.",
  "optionRationales": [
   "Textul descrie fereastra silențioasă 2-4 săptămâni, apoi boala la 3-6 săptămâni, până la 3 săptămâni.",
   "Nu există seroconversie în prima oră.",
   "Recuperarea este de obicei completă, durata nu este 12 luni.",
   "CD4 pot fi scăzute, raportul CD4:CD8 inversat.",
   "ARN-ul este crescut, p24 poate fi detectat."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Comprimă fereastra silențioasă la o oră și inversează CD4/ARN, calendarul clasic al primoinfecției."
  },
  "textbookExpressions": [
   "2-4 săptămâni",
   "3-6 săptămâni"
  ]
 },
 {
  "id": "hiv-adv-084",
  "topicId": "hiv",
  "type": "CM",
  "stem": "NAAT, setpoint-ul și elite controllers:",
  "options": [
   "NAAT pentru ARN-HIV poate diagnostica cu 7 zile înaintea antigenului p24 și cu 12 zile înaintea unui test de anticorpi cu sensibilitate crescută",
   "Elite controllers, subgrup al long-term non-progressors, mențin viremie sub 2000 copii/ml sau nedetectabilă, fără ARV",
   "După ~6 luni de la seroconversie se stabilește un setpoint viral; >100.000 copii/ml asociază risc de 10 ori mai mare de progresie spre SIDA în 5 ani versus <10.000",
   "NAAT este inferior p24 cu 7 zile, anticorpii precedând ARN-ul",
   "Elite controllers au viremie persistentă peste 100.000 fără ARV"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "NAAT pentru ARN-HIV poate diagnostica cu 7 zile înaintea antigenului p24 și cu 12 zile înaintea unui test de anticorpi cu sensibilitate crescută — Corect: 7 zile înainte de p24, 12 zile înainte de Ac.\n\nElite controllers, subgrup al long-term non-progressors, mențin viremie sub 2000 copii/ml sau nedetectabilă, fără ARV — Corect: Elite: <2000 sau nedetectabil fără ARV.\n\nDupă ~6 luni de la seroconversie se stabilește un setpoint viral; >100.000 copii/ml asociază risc de 10 ori mai mare de progresie spre SIDA în 5 ani versus <10.000 — Corect: Setpoint la ~6 luni; 10× risc dacă >100.000 versus <10.000.\n\nNAAT este inferior p24 cu 7 zile, anticorpii precedând ARN-ul — Incorect: NAAT precede p24 și Ac, nu invers.\n\nElite controllers au viremie persistentă peste 100.000 fără ARV — Incorect: Elite-ii au viremie joasă, nu >100.000.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1430, 1434, HIV — NAAT −7/−12 zile, elite <2000, setpoint 6 luni (pagini PDF: 371, 375).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1430,
    1434
   ],
   "pdfPages": [
    371,
    375
   ],
   "section": "HIV — NAAT −7/−12 zile, elite <2000, setpoint 6 luni"
  },
  "learningObjective": "Fereastra NAAT (7 și 12 zile), pragul elite <2000 și gradientul prognostic 100.000 versus 10.000 la 5 ani.",
  "optionRationales": [
   "7 zile înainte de p24, 12 zile înainte de Ac.",
   "Elite: <2000 sau nedetectabil fără ARV.",
   "Setpoint la ~6 luni; 10× risc dacă >100.000 versus <10.000.",
   "NAAT precede p24 și Ac, nu invers.",
   "Elite-ii au viremie joasă, nu >100.000."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează ordinea NAAT–p24–Ac și confundă elite-ii cu viremia de prognostic nefavorabil."
  },
  "textbookExpressions": [
   "7 zile înaintea",
   "2.000 copii/ml"
  ]
 },
 {
  "id": "hiv-adv-085",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Complicațiile renale și cardiovasculare netratate, dincolo de HIVAN deja descrisă ca entitate:",
  "options": [
   "HIVAN este cel mai frecventă la bărbații de rasă neagră și poate fi exacerbată de heroină; este o glomeruloscleroză focală segmentară cu tubulopatie prin infectare tubulară directă",
   "Pacienții cu HIV au risc de două ori mai mare de afecțiuni cardiovasculare; HDL-ul netrataților este mai mic decât la neinfectați",
   "HIVAN predomină la femeile caucaziene și este o nefropatie diabetică tipică",
   "Riscul cardiovascular este înjumătățit față de populația generală, HDL-ul fiind crescut",
   "Tenofovirul nu are toxicitate renală, sindromul Fanconi fiind exclus"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "HIVAN este cel mai frecventă la bărbații de rasă neagră și poate fi exacerbată de heroină; este o glomeruloscleroză focală segmentară cu tubulopatie prin infectare tubulară directă — Corect: Rasă neagră, heroină, FSGS și tubulopatie directă.\n\nPacienții cu HIV au risc de două ori mai mare de afecțiuni cardiovasculare; HDL-ul netrataților este mai mic decât la neinfectați — Corect: Risc CV ×2; HDL mai mic la netratați.\n\nHIVAN predomină la femeile caucaziene și este o nefropatie diabetică tipică — Incorect: Nu predomină la femei caucaziene.\n\nRiscul cardiovascular este înjumătățit față de populația generală, HDL-ul fiind crescut — Incorect: Riscul CV este dublu, nu înjumătățit.\n\nTenofovirul nu are toxicitate renală, sindromul Fanconi fiind exclus — Incorect: Tenofovirul este asociat cu sindromul Fanconi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1432, HIV — HIVAN (FSGS, rasă neagră) și risc CV dublu (pagini PDF: 373).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1432
   ],
   "pdfPages": [
    373
   ],
   "section": "HIV — HIVAN (FSGS, rasă neagră) și risc CV dublu"
  },
  "learningObjective": "Profilul HIVAN (bărbat negru, heroină, FSGS) și dublarea riscului CV cu HDL scăzut la netratați.",
  "optionRationales": [
   "Rasă neagră, heroină, FSGS și tubulopatie directă.",
   "Risc CV ×2; HDL mai mic la netratați.",
   "Nu predomină la femei caucaziene.",
   "Riscul CV este dublu, nu înjumătățit.",
   "Tenofovirul este asociat cu sindromul Fanconi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează terenul HIVAN și direcția riscului CV/HDL, două paragrafe consecutive de complicații de organ."
  },
  "textbookExpressions": [
   "rasă neagră",
   "de două ori mai mare"
  ]
 },
 {
  "id": "hiv-adv-086",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Cel mai sensibil test de ARN-HIV citat detectează până la:",
  "options": [
   "20 copii de ARN viral/ml",
   "2000 copii/ml, pragul elite controllers",
   "100.000 copii/ml, setpoint-ul de prognostic",
   "10 copii/ml doar din salivă",
   "0 copii, testele fiind calitative"
  ],
  "correct": [
   0
  ],
  "explanation": "20 copii de ARN viral/ml — Corect: Textul: cel mai sensibil test detectează până la 20 copii/ml.\n\n2000 copii/ml, pragul elite controllers — Incorect: 2000 este pragul elite, nu sensibilitatea testului.\n\n100.000 copii/ml, setpoint-ul de prognostic — Incorect: 100.000 este pragul de prognostic la 5 ani.\n\n10 copii/ml doar din salivă — Incorect: Nu este un test salivar de 10 copii.\n\n0 copii, testele fiind calitative — Incorect: Rezultatele sunt în copii/ml sau log, nu doar calitative.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1434, HIV — Sensibilitatea viremiei: 20 copii/ml (pagini PDF: 375).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1434
   ],
   "pdfPages": [
    375
   ],
   "section": "HIV — Sensibilitatea viremiei: 20 copii/ml"
  },
  "learningObjective": "Pragul analitic 20 copii/ml, distinct de 2000 (elite) și 100.000 (prognostic).",
  "optionRationales": [
   "Textul: cel mai sensibil test detectează până la 20 copii/ml.",
   "2000 este pragul elite, nu sensibilitatea testului.",
   "100.000 este pragul de prognostic la 5 ani.",
   "Nu este un test salivar de 10 copii.",
   "Rezultatele sunt în copii/ml sau log, nu doar calitative."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 20 (limită analitică), 2000 (elite) și 100.000 (setpoint), trei praguri de viremie."
  },
  "textbookExpressions": [
   "20 copii",
   "ARN viral/ ml"
  ]
 },
 {
  "id": "hiv-adv-087",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Monitorizarea viremiei după inițierea ARV și artefactele tranzitorii:",
  "options": [
   "Încărcătura virală începe să scadă la 4 săptămâni și atinge scăderea maximă în săptămânile 10-12",
   "Creșteri tranzitorii pot urma imunizărilor (gripă, pneumococ) sau infecțiilor intercurente (TBC); viremia nu se evaluează la mai puțin de o lună de la aceste evenimente",
   "După stabilizare virusologică și CD4 >350/mm³ sub ARV, CD4 se monitorizează aproximativ o dată pe an",
   "Viremia trebuie măsurată în ziua vaccinării antigripale, pentru a prinde nadirul",
   "CD4 se oprește definitiv după prima lună de ARV, indiferent de valoare"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Încărcătura virală începe să scadă la 4 săptămâni și atinge scăderea maximă în săptămânile 10-12 — Corect: Scădere de la 4 săptămâni, maxim 10-12.\n\nCreșteri tranzitorii pot urma imunizărilor (gripă, pneumococ) sau infecțiilor intercurente (TBC); viremia nu se evaluează la mai puțin de o lună de la aceste evenimente — Corect: Nu se dozează VL sub o lună de la vaccin/infecție.\n\nDupă stabilizare virusologică și CD4 >350/mm³ sub ARV, CD4 se monitorizează aproximativ o dată pe an — Corect: CD4 anual după stabilizare și >350.\n\nViremia trebuie măsurată în ziua vaccinării antigripale, pentru a prinde nadirul — Incorect: Vaccinarea produce creșteri tranzitorii, nu nadir.\n\nCD4 se oprește definitiv după prima lună de ARV, indiferent de valoare — Incorect: CD4 anual continuă după stabilizare, nu se oprește la o lună.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1434, HIV — Cinetica VL 4/10-12 săptămâni și fereastra post-vaccin (pagini PDF: 375).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1434
   ],
   "pdfPages": [
    375
   ],
   "section": "HIV — Cinetica VL 4/10-12 săptămâni și fereastra post-vaccin"
  },
  "learningObjective": "Calendarul 4 apoi 10-12 săptămâni, interdicția de a doza VL <1 lună post-vaccin/TBC și ritmul anual al CD4 după 350.",
  "optionRationales": [
   "Scădere de la 4 săptămâni, maxim 10-12.",
   "Nu se dozează VL sub o lună de la vaccin/infecție.",
   "CD4 anual după stabilizare și >350.",
   "Vaccinarea produce creșteri tranzitorii, nu nadir.",
   "CD4 anual continuă după stabilizare, nu se oprește la o lună."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Dozează viremia în ziua vaccinului — tocmai artefactul pe care textul îl evită prin fereastra de o lună."
  },
  "textbookExpressions": [
   "4 săptămâni",
   "săptămânile 10-12"
  ]
 },
 {
  "id": "hiv-adv-088",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Conform Cadranului 37.16, particularitățile de clasă ale ARV includ:",
  "options": [
   "Abacavirul se asociază cu hipersensibilitate la HLA-B*5701; abacavir+lamivudină doar dacă viremia la start este <100.000 copii/ml",
   "Nevirapina poate da hepatotoxicitate severă la CD4 >250/mm³ la femei sau >400/mm³ la bărbați",
   "Maraviroc este eficient doar fără tropism CXCR4; se leagă de celula gazdă, nu de ținta virală",
   "Enfuvirtide se administrează subcutanat de două ori pe zi, la pacienții fără alte opțiuni",
   "Rilpivirina se folosește indiferent de viremie, iar raltegravirul se dă o dată pe lună"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Abacavirul se asociază cu hipersensibilitate la HLA-B*5701; abacavir+lamivudină doar dacă viremia la start este <100.000 copii/ml — Corect: HLA-B*5701 și pragul <100.000 pentru ABC/3TC.\n\nNevirapina poate da hepatotoxicitate severă la CD4 >250/mm³ la femei sau >400/mm³ la bărbați — Corect: Nevirapină: >250 femei, >400 bărbați.\n\nMaraviroc este eficient doar fără tropism CXCR4; se leagă de celula gazdă, nu de ținta virală — Corect: Maraviroc: fără CXCR4, leagă gazda.\n\nEnfuvirtide se administrează subcutanat de două ori pe zi, la pacienții fără alte opțiuni — Corect: Enfuvirtide s.c. ×2, ultima linie.\n\nRilpivirina se folosește indiferent de viremie, iar raltegravirul se dă o dată pe lună — Incorect: Rilpivirina doar dacă VL <100.000; raltegravirul se administrează de 2 ori pe zi.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1436, ARV — HLA-B*5701, nevirapină/CD4, maraviroc, enfuvirtide (pagini PDF: 377).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1436
   ],
   "pdfPages": [
    377
   ],
   "section": "ARV — HLA-B*5701, nevirapină/CD4, maraviroc, enfuvirtide"
  },
  "learningObjective": "Patru constrângeri de clasă: HLA-B*5701/<100.000, pragurile CD4 ale nevirapinei, tropismul CCR5 și enfuvirtide s.c. ×2.",
  "optionRationales": [
   "HLA-B*5701 și pragul <100.000 pentru ABC/3TC.",
   "Nevirapină: >250 femei, >400 bărbați.",
   "Maraviroc: fără CXCR4, leagă gazda.",
   "Enfuvirtide s.c. ×2, ultima linie.",
   "Rilpivirina doar dacă VL <100.000; raltegravirul se administrează de 2 ori pe zi."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează pragurile <100.000 și CD4 ale nevirapinei, patru note de subsol din același cadran de clase."
  },
  "textbookExpressions": [
   "HlA-8*5701",
   ">250 celule/mm3 la femei"
  ]
 },
 {
  "id": "hiv-adv-089",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Rezistența ARV, dincolo de „drug tail\" deja descris:",
  "options": [
   "O singură mutație punctiformă poate da rezistență înaltă în clasa INNRT, pe când INRT și IP cer acumularea mai multor mutații",
   "Prevalența rezistenței transmise în infecția primară este 2-20%; la cronici netratați, mutațiile primare 3-10%",
   "Sunătoarea și rifampicina induc P450 și pot scădea nivelurile unor ARV; INSTI pot fi reduse de antiacide",
   "INNRT au barieră genetică înaltă, o mutație fiind insuficientă",
   "Genotiparea de rezistență se face după oprirea ARV, tulpina sălbatică fiind inutilă de evitat"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "O singură mutație punctiformă poate da rezistență înaltă în clasa INNRT, pe când INRT și IP cer acumularea mai multor mutații — Corect: INNRT: o mutație; INRT/IP: mai multe.\n\nPrevalența rezistenței transmise în infecția primară este 2-20%; la cronici netratați, mutațiile primare 3-10% — Corect: 2-20% în primară; 3-10% la cronici netratați.\n\nSunătoarea și rifampicina induc P450 și pot scădea nivelurile unor ARV; INSTI pot fi reduse de antiacide — Corect: Sunătoare/rifampicină pe P450; antiacide pe INSTI.\n\nINNRT au barieră genetică înaltă, o mutație fiind insuficientă — Incorect: INNRT au barieră joasă, nu înaltă.\n\nGenotiparea de rezistență se face după oprirea ARV, tulpina sălbatică fiind inutilă de evitat — Incorect: Genotiparea la eșec se face sub ARV, altfel revine wild-type.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1439, Rezistență — INNRT o mutație, 2-20% primar, sunătoare (pagini PDF: 380).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1439
   ],
   "pdfPages": [
    380
   ],
   "section": "Rezistență — INNRT o mutație, 2-20% primar, sunătoare"
  },
  "learningObjective": "Bariera joasă INNRT, intervalele 2-20% / 3-10% și inductorii (sunătoare, rifampicină, antiacide vs INSTI).",
  "optionRationales": [
   "INNRT: o mutație; INRT/IP: mai multe.",
   "2-20% în primară; 3-10% la cronici netratați.",
   "Sunătoare/rifampicină pe P450; antiacide pe INSTI.",
   "INNRT au barieră joasă, nu înaltă.",
   "Genotiparea la eșec se face sub ARV, altfel revine wild-type."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează bariera INNRT și cere genotiparea după oprire, două capcane din Cadranul 37.20."
  },
  "textbookExpressions": [
   "2 şi 20%",
   "3 şi 10%"
  ]
 },
 {
  "id": "hiv-adv-090",
  "topicId": "hiv",
  "type": "CM",
  "stem": "O gravidă cu HIV, dincolo de cezariana deja nuanțată:",
  "options": [
   "Rata de transmitere în UK este 1% pentru toate femeile diagnosticate înainte de naștere și 0,1% dacă ARV cu viremie sub 50 copii/ml",
   "Nou-născutul primește zidovudină sirop 4 săptămâni; mama continuă ARV",
   "Dacă refuză ARV pentru propria sănătate, inițierea pentru făt este la începutul trimestrului II dacă VL >30.000 copii/ml, sau mai devreme dacă >100.000",
   "Alăptarea este impusă, riscul rămânând 40% sub ARV",
   "Zidovudina la nou-născut se omite dacă mama are VL >100.000"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Rata de transmitere în UK este 1% pentru toate femeile diagnosticate înainte de naștere și 0,1% dacă ARV cu viremie sub 50 copii/ml — Corect: 1% toate diagnosticate antenatal; 0,1% dacă VL <50.\n\nNou-născutul primește zidovudină sirop 4 săptămâni; mama continuă ARV — Corect: AZT sirop 4 săptămâni la nou-născut.\n\nDacă refuză ARV pentru propria sănătate, inițierea pentru făt este la începutul trimestrului II dacă VL >30.000 copii/ml, sau mai devreme dacă >100.000 — Corect: T2 dacă VL >30.000; mai devreme dacă >100.000.\n\nAlăptarea este impusă, riscul rămânând 40% sub ARV — Incorect: Mamele sunt sfătuite să nu alăpteze, deși riscul sub ARV eficient este extrem de scăzut.\n\nZidovudina la nou-născut se omite dacă mama are VL >100.000 — Incorect: AZT neonatal se dă 4 săptămâni, nu se omite la viremie înaltă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1441, Sarcina — Transmitere 1%/0,1%, AZT 4 săptămâni, praguri 30.000/100.000 (pagini PDF: 382).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1441
   ],
   "pdfPages": [
    382
   ],
   "section": "Sarcina — Transmitere 1%/0,1%, AZT 4 săptămâni, praguri 30.000/100.000"
  },
  "learningObjective": "Perechea 1% versus 0,1% (VL<50), siropul AZT 4 săptămâni și pragurile 30.000/100.000 pentru startul tardiv.",
  "optionRationales": [
   "1% toate diagnosticate antenatal; 0,1% dacă VL <50.",
   "AZT sirop 4 săptămâni la nou-născut.",
   "T2 dacă VL >30.000; mai devreme dacă >100.000.",
   "Mamele sunt sfătuite să nu alăpteze, deși riscul sub ARV eficient este extrem de scăzut.",
   "AZT neonatal se dă 4 săptămâni, nu se omite la viremie înaltă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează pragurile 30.000/100.000 și impune alăptarea, contrar paragrafului de obstetrică britanică."
  },
  "textbookExpressions": [
   "0,1%",
   "30.000 de copii/ml"
  ]
 },
 {
  "id": "hiv-adv-091",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Meningita criptococică, dincolo de factorii de prognostic deja citați:",
  "options": [
   "Tratament inițial: amfotericină B liposomală 4,0 mg/kg/zi i.v., cu sau fără flucitozină",
   "După 2 săptămâni i.v., se continuă fluconazol până la 8 săptămâni",
   "ARV se inițiază la aproximativ 4 săptămâni, pentru a reduce IRIS; întreținere cu fluconazol până la 1 an, VL nedetectabilă și CD4 constant >100/mm³",
   "Corticoterapia este de primă linie, amfotericina fiind evitată",
   "ARV se pornește în aceeași zi cu amfotericina, fără fluconazol de întreținere"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Tratament inițial: amfotericină B liposomală 4,0 mg/kg/zi i.v., cu sau fără flucitozină — Corect: Amfotericină liposomală 4,0 mg/kg/zi ± flucitozină.\n\nDupă 2 săptămâni i.v., se continuă fluconazol până la 8 săptămâni — Corect: Fluconazol după 2 săptămâni, până la 8.\n\nARV se inițiază la aproximativ 4 săptămâni, pentru a reduce IRIS; întreținere cu fluconazol până la 1 an, VL nedetectabilă și CD4 constant >100/mm³ — Corect: ARV la ~4 săptămâni; fluconazol până la 1 an și CD4>100.\n\nCorticoterapia este de primă linie, amfotericina fiind evitată — Incorect: Nu se recomandă corticoterapia.\n\nARV se pornește în aceeași zi cu amfotericina, fără fluconazol de întreținere — Incorect: ARV-ul precoce crește riscul de IRIS; întreținerea cu fluconazol este cerută.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1444, Criptococ — Amfotericină 4 mg/kg, fluconazol 8 săptămâni, ARV la 4 săptămâni (pagini PDF: 385).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1444
   ],
   "pdfPages": [
    385
   ],
   "section": "Criptococ — Amfotericină 4 mg/kg, fluconazol 8 săptămâni, ARV la 4 săptămâni"
  },
  "learningObjective": "Doza 4,0 mg/kg, secvența 2 apoi 8 săptămâni și fereastra ARV de ~4 săptămâni până la CD4>100 un an.",
  "optionRationales": [
   "Amfotericină liposomală 4,0 mg/kg/zi ± flucitozină.",
   "Fluconazol după 2 săptămâni, până la 8.",
   "ARV la ~4 săptămâni; fluconazol până la 1 an și CD4>100.",
   "Nu se recomandă corticoterapia.",
   "ARV-ul precoce crește riscul de IRIS; întreținerea cu fluconazol este cerută."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Pornește ARV în ziua 0 și adaugă steroizi, tocmai ce textul evită în criptococoză."
  },
  "textbookExpressions": [
   "4,0 mg/kg/zi",
   "peste 100/mm3"
  ]
 },
 {
  "id": "hiv-adv-092",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Profilaxia secundară a pneumoniei cu Pneumocystis, dincolo de co-trimoxazolul acut:",
  "options": [
   "Indicație la CD4 sub 200/mm³; standard co-trimoxazol 960 mg de trei ori pe săptămână",
   "Pentamidina în aerosoli protejează doar plămânii, penetrează slab lobii superiori; recurențele pot fi atipice sau extrapulmonare",
   "Profilaxia se oprește la orice CD4, pentamidina acoperind și extrapulmonarul",
   "C. krusei este sensibilă la fluconazol, fiind de elecție în PCP",
   "Atovaquona înlocuiește CPAP-ul în hipoxie severă"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Indicație la CD4 sub 200/mm³; standard co-trimoxazol 960 mg de trei ori pe săptămână — Corect: CD4<200; co-trimoxazol 960 mg ×3/săptămână.\n\nPentamidina în aerosoli protejează doar plămânii, penetrează slab lobii superiori; recurențele pot fi atipice sau extrapulmonare — Corect: Pentamidina: doar pulmonar, slab superior, recurențe atipice.\n\nProfilaxia se oprește la orice CD4, pentamidina acoperind și extrapulmonarul — Incorect: Nu se oprește la orice CD4; pentamidina nu acoperă extrapulmonarul.\n\nC. krusei este sensibilă la fluconazol, fiind de elecție în PCP — Incorect: C. krusei este rezistentă la fluconazol (candidoză, nu PCP).\n\nAtovaquona înlocuiește CPAP-ul în hipoxie severă — Incorect: Hipoxia severă cere CPAP/ventilație, nu înlocuire cu atovaquonă.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1444, PCP — Co-trimoxazol 960 mg ×3/săptămână și limitele pentamidinei (pagini PDF: 385).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1444
   ],
   "pdfPages": [
    385
   ],
   "section": "PCP — Co-trimoxazol 960 mg ×3/săptămână și limitele pentamidinei"
  },
  "learningObjective": "Pragul CD4<200, doza 960 mg de 3 ori/săptămână și eșecul pentamidinei pe lobi superiori/extrapulmonar.",
  "optionRationales": [
   "CD4<200; co-trimoxazol 960 mg ×3/săptămână.",
   "Pentamidina: doar pulmonar, slab superior, recurențe atipice.",
   "Nu se oprește la orice CD4; pentamidina nu acoperă extrapulmonarul.",
   "C. krusei este rezistentă la fluconazol (candidoză, nu PCP).",
   "Hipoxia severă cere CPAP/ventilație, nu înlocuire cu atovaquonă."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Extinde pentamidina la extrapulmonar și mută C. krusei în PCP, două confuzii de pe aceeași pagină de OI fungice."
  },
  "textbookExpressions": [
   "960 mg",
   "Pentamidina"
  ]
 },
 {
  "id": "hiv-adv-093",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Tratamentul de elecție al aspergilozei la pacientul cu HIV, când există factori favorizanți (neutropenie, steroizi, patologie pulmonară), este:",
  "options": [
   "Voriconazol, alternative amfotericină B liposomală 3 mg/kg i.v. zilnic sau caspofungină",
   "Co-trimoxazol 960 mg ×3/săptămână, ca în PCP",
   "Fluconazol, C. krusei fiind sensibilă",
   "Pirimetamină de încărcare, ca în toxoplasmoză",
   "Nicio antifungică, ARV-ul fiind suficient fără factori de risc"
  ],
  "correct": [
   0
  ],
  "explanation": "Voriconazol, alternative amfotericină B liposomală 3 mg/kg i.v. zilnic sau caspofungină — Corect: Textul: elecție voriconazol; alternative amfotericină 3 mg/kg sau caspofungină.\n\nCo-trimoxazol 960 mg ×3/săptămână, ca în PCP — Incorect: Co-trimoxazolul 960 este profilaxia PCP.\n\nFluconazol, C. krusei fiind sensibilă — Incorect: Fluconazolul nu este elecția; C. krusei e rezistentă la fluconazol.\n\nPirimetamină de încărcare, ca în toxoplasmoză — Incorect: Pirimetamina ține de toxoplasmoză.\n\nNicio antifungică, ARV-ul fiind suficient fără factori de risc — Incorect: Aspergiloza este rară fără factori favorizanți, dar tratamentul citat este voriconazolul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1444, HIV — Aspergiloza: voriconazol (pagini PDF: 385).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1444
   ],
   "pdfPages": [
    385
   ],
   "section": "HIV — Aspergiloza: voriconazol"
  },
  "learningObjective": "Voriconazolul ca elecție, cu amfotericină 3 mg/kg sau caspofungină ca alternative, nu schemele de PCP/Candida/Toxo.",
  "optionRationales": [
   "Textul: elecție voriconazol; alternative amfotericină 3 mg/kg sau caspofungină.",
   "Co-trimoxazolul 960 este profilaxia PCP.",
   "Fluconazolul nu este elecția; C. krusei e rezistentă la fluconazol.",
   "Pirimetamina ține de toxoplasmoză.",
   "Aspergiloza este rară fără factori favorizanți, dar tratamentul citat este voriconazolul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește voriconazolul cu co-trimoxazol, fluconazol sau pirimetamină, trei OI de pe aceeași pagină."
  },
  "textbookExpressions": [
   "voriconazol",
   "3 mg/kg i.v."
  ]
 },
 {
  "id": "hiv-adv-094",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Retinita CMV la pacientul cu HIV:",
  "options": [
   "Poate apărea la CD4 <50/mm³; netratată distruge retina; aspect de „felie de pizza\" (hemoragii și exsudate perivasculare)",
   "Tratament cât mai curând: valganciclovir 900 mg ×2/zi p.o., sau ganciclovir 5 mg/kg ×2/zi, sau foscarnet 90 mg/kg ×2/zi i.v., ≥3 săptămâni sau până la remisie",
   "Ganciclovirul poate mielosupresa, foscarnetul este nefrotoxic",
   "CMV-boala apare tipic la CD4 >500, fără risc de cecitate",
   "Valganciclovirul de întreținere este mai eficace decât ganciclovirul i.v."
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Poate apărea la CD4 <50/mm³; netratată distruge retina; aspect de „felie de pizza\" (hemoragii și exsudate perivasculare) — Corect: CD4<50; felie de pizza; distrugere retinină netratată.\n\nTratament cât mai curând: valganciclovir 900 mg ×2/zi p.o., sau ganciclovir 5 mg/kg ×2/zi, sau foscarnet 90 mg/kg ×2/zi i.v., ≥3 săptămâni sau până la remisie — Corect: Valganciclovir 900×2, ganciclovir 5×2, foscarnet 90×2, ≥3 săptămâni.\n\nGanciclovirul poate mielosupresa, foscarnetul este nefrotoxic — Corect: Mielosupresie vs nefrotoxicitate.\n\nCMV-boala apare tipic la CD4 >500, fără risc de cecitate — Incorect: Boala CMV este la CD4 constant <100, retinita <50.\n\nValganciclovirul de întreținere este mai eficace decât ganciclovirul i.v. — Incorect: Valganciclovirul oral de întreținere are eficacitate mai scăzută decât ganciclovirul i.v.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1446, CMV — Retinită CD4<50, felie de pizza, valganciclovir 900×2 (pagini PDF: 387).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1446
   ],
   "pdfPages": [
    387
   ],
   "section": "CMV — Retinită CD4<50, felie de pizza, valganciclovir 900×2"
  },
  "learningObjective": "Pragul CD4<50, dozele 900/5/90 și toxicitățile ganciclovir versus foscarnet.",
  "optionRationales": [
   "CD4<50; felie de pizza; distrugere retinină netratată.",
   "Valganciclovir 900×2, ganciclovir 5×2, foscarnet 90×2, ≥3 săptămâni.",
   "Mielosupresie vs nefrotoxicitate.",
   "Boala CMV este la CD4 constant <100, retinita <50.",
   "Valganciclovirul oral de întreținere are eficacitate mai scăzută decât ganciclovirul i.v."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Mută retinita la CD4>500 și inversează ierarhia valganciclovir versus ganciclovir i.v."
  },
  "textbookExpressions": [
   "900 mg x 2/zi",
   "felie de pizza"
  ]
 },
 {
  "id": "hiv-adv-095",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Colita și poliradiculopatia CMV:",
  "options": [
   "Colita: durere abdominală (inclusiv fosa iliacă stângă), diaree cu sânge; histologic incluziuni citoplasmatice „ochi de bufniță\"; ganciclovir 5 mg/kg ×2/zi i.v. 14-28 de zile",
   "Poliradiculopatia lombo-sacrată: slăbiciune și tulburări sfincteriene; în LCR leucocite aproape în totalitate neutrofile",
   "Colita se tratează doar cu fluconazol, incluziunile fiind absente",
   "LCR-ul din poliradiculopatie este acellular, fără neutrofile",
   "Întreținerea CMV rămâne necesară chiar după reconstituirea imună prin ARV"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Colita: durere abdominală (inclusiv fosa iliacă stângă), diaree cu sânge; histologic incluziuni citoplasmatice „ochi de bufniță\"; ganciclovir 5 mg/kg ×2/zi i.v. 14-28 de zile — Corect: Tablou de colită, ochi de bufniță, ganciclovir 14-28 zile.\n\nPoliradiculopatia lombo-sacrată: slăbiciune și tulburări sfincteriene; în LCR leucocite aproape în totalitate neutrofile — Corect: LCR aproape exclusiv neutrofilic în poliradiculopatie.\n\nColita se tratează doar cu fluconazol, incluziunile fiind absente — Incorect: Fluconazolul nu este tratamentul colitei CMV.\n\nLCR-ul din poliradiculopatie este acellular, fără neutrofile — Incorect: Leucocitele LCR sunt aproape toate neutrofile.\n\nÎntreținerea CMV rămâne necesară chiar după reconstituirea imună prin ARV — Incorect: Întreținerea nu mai e necesară după ameliorarea imună prin ARV.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1446, CMV — Ochi de bufniță și LCR neutrofilic în poliradiculopatie (pagini PDF: 387).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1446
   ],
   "pdfPages": [
    387
   ],
   "section": "CMV — Ochi de bufniță și LCR neutrofilic în poliradiculopatie"
  },
  "learningObjective": "Perechea histologică „ochi de bufniță\" + 14-28 zile și paradoxul neutrofilelor din LCR-ul poliradiculopatiei.",
  "optionRationales": [
   "Tablou de colită, ochi de bufniță, ganciclovir 14-28 zile.",
   "LCR aproape exclusiv neutrofilic în poliradiculopatie.",
   "Fluconazolul nu este tratamentul colitei CMV.",
   "Leucocitele LCR sunt aproape toate neutrofile.",
   "Întreținerea nu mai e necesară după ameliorarea imună prin ARV."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Înlocuiește ganciclovirul cu fluconazol și neagă neutrofilele din LCR, două detalii CMV de pe aceeași pagină."
  },
  "textbookExpressions": [
   "ochi de bufniţă",
   "14-28 de zile"
  ]
 },
 {
  "id": "hiv-adv-096",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Leucoencefalopatia multifocală progresivă (PML) prin virus JC:",
  "options": [
   "Infectează oligodendrocitele; leziuni de obicei multiple, limitate la substanța albă, fără captare de contrast și fără efect de masă",
   "RMN T2 hiperintens; PCR JC în LCR plus imagistică sunt de regulă suficiente, biopsia nemaifiind necesară",
   "Nu există tratament specific; ARV eficient este singura intervenție care poate da remisie clinică și radiologică",
   "Leziunile captează contrast și au efect de masă, ca abcesul toxoplasma",
   "Ganciclovirul i.v. vindecă PML, ARV-ul fiind inutil"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "Infectează oligodendrocitele; leziuni de obicei multiple, limitate la substanța albă, fără captare de contrast și fără efect de masă — Corect: Oligodendrocite; albă; fără contrast, fără masă.\n\nRMN T2 hiperintens; PCR JC în LCR plus imagistică sunt de regulă suficiente, biopsia nemaifiind necesară — Corect: T2 hiperintens; PCR+IRM, fără biopsie.\n\nNu există tratament specific; ARV eficient este singura intervenție care poate da remisie clinică și radiologică — Corect: Doar ARV-ul poate induce remisie.\n\nLeziunile captează contrast și au efect de masă, ca abcesul toxoplasma — Incorect: Absența captării și a masei deosebește de toxoplasma.\n\nGanciclovirul i.v. vindecă PML, ARV-ul fiind inutil — Incorect: Nu există tratament specific anti-JC; ganciclovirul ține de CMV.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1447, PML — JC, T2 fără contrast/masă, doar ARV (pagini PDF: 388).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1447
   ],
   "pdfPages": [
    388
   ],
   "section": "PML — JC, T2 fără contrast/masă, doar ARV"
  },
  "learningObjective": "Profilul imagistic (fără contrast, fără masă) și absența terapiei specifice în afara ARV.",
  "optionRationales": [
   "Oligodendrocite; albă; fără contrast, fără masă.",
   "T2 hiperintens; PCR+IRM, fără biopsie.",
   "Doar ARV-ul poate induce remisie.",
   "Absența captării și a masei deosebește de toxoplasma.",
   "Nu există tratament specific anti-JC; ganciclovirul ține de CMV."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Atribuie PML-ului inelul și masa toxoplasmei și înlocuiește ARV-ul cu ganciclovir, două OI cerebrale vecine."
  },
  "textbookExpressions": [
   "nu captează",
   "virusului JC"
  ]
 },
 {
  "id": "hiv-adv-097",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Tuberculoza la pacientul cu HIV, tipar în funcție de imunitate:",
  "options": [
   "La status imunologic relativ bun, tabloul este similar pacientului fără HIV",
   "În stadii avansate, manifestările sunt atipice, adesea extrapulmonare (ganglioni, măduvă, ficat), cu posibilă bacteriemie",
   "Examenul microscopic din spută poate fi negativ chiar în infecția pulmonară; culturile sunt cel mai bun instrument",
   "IDR la tuberculină este mereu interpretabilă, independent de CD4",
   "Formele extrapulmonare cer o durată mai scurtă decât la neinfectați"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "La status imunologic relativ bun, tabloul este similar pacientului fără HIV — Corect: Imunitate relativ bună: tablou similar.\n\nÎn stadii avansate, manifestările sunt atipice, adesea extrapulmonare (ganglioni, măduvă, ficat), cu posibilă bacteriemie — Corect: Avansat: atipic, extrapulmonar, bacteriemie.\n\nExamenul microscopic din spută poate fi negativ chiar în infecția pulmonară; culturile sunt cel mai bun instrument — Corect: Spută negativă posibilă; culturi cele mai bune.\n\nIDR la tuberculină este mereu interpretabilă, independent de CD4 — Incorect: IDR poate fi neinterpretabilă la imunodepresie severă.\n\nFormele extrapulmonare cer o durată mai scurtă decât la neinfectați — Incorect: Durata poate fi mai lungă, mai ales extrapulmonar.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1447, TB-HIV — Tablou similar versus extrapulmonar atipic (pagini PDF: 388).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1447
   ],
   "pdfPages": [
    388
   ],
   "section": "TB-HIV — Tablou similar versus extrapulmonar atipic"
  },
  "learningObjective": "Gradientul imun: similar HIV-negativ versus extrapulmonar/bacteriemie, plus sputa negativă și culturile.",
  "optionRationales": [
   "Imunitate relativ bună: tablou similar.",
   "Avansat: atipic, extrapulmonar, bacteriemie.",
   "Spută negativă posibilă; culturi cele mai bune.",
   "IDR poate fi neinterpretabilă la imunodepresie severă.",
   "Durata poate fi mai lungă, mai ales extrapulmonar."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Face IDR-ul infailibil și scurtează extrapulmonarul, inversând nuanțele de diagnostic TB-HIV."
  },
  "textbookExpressions": [
   "extrapulmonară",
   "culturile reprezintă"
  ]
 },
 {
  "id": "hiv-adv-098",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Extinderea testării HIV în Marea Britanie, 2017, dincolo de PrEP:",
  "options": [
   "Aproximativ 8% dintre pacienții cu HIV erau nediagnosticați",
   "43% dintre nou-diagnosticați au fost tardivi (CD4 <350/mm³)",
   "23% au avut CD4 <200/mm³ la diagnostic",
   "Testarea se recomandă noilor înregistrați în asistența primară și urgențelor unde seroprevalența depășește 2/1000",
   "Nediagnosticații erau 0%, toți având CD4 >500"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "explanation": "Aproximativ 8% dintre pacienții cu HIV erau nediagnosticați — Corect: 8% nediagnosticați.\n\n43% dintre nou-diagnosticați au fost tardivi (CD4 <350/mm³) — Corect: 43% tardivi CD4<350.\n\n23% au avut CD4 <200/mm³ la diagnostic — Corect: 23% CD4<200.\n\nTestarea se recomandă noilor înregistrați în asistența primară și urgențelor unde seroprevalența depășește 2/1000 — Corect: Testare la noi înregistrați și în urgență dacă >2/1000.\n\nNediagnosticații erau 0%, toți având CD4 >500 — Incorect: Textul citează 8% nediagnosticați și 23% cu CD4<200, nu zero.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1449, Prevenție — 8% nediagnosticați, 23% CD4<200, prag 2/1000 (pagini PDF: 390).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1449
   ],
   "pdfPages": [
    390
   ],
   "section": "Prevenție — 8% nediagnosticați, 23% CD4<200, prag 2/1000"
  },
  "learningObjective": "Trio-ul 8% / 43% / 23% și pragul de seroprevalență 2/1000 pentru testarea în urgență/primar.",
  "optionRationales": [
   "8% nediagnosticați.",
   "43% tardivi CD4<350.",
   "23% CD4<200.",
   "Testare la noi înregistrați și în urgență dacă >2/1000.",
   "Textul citează 8% nediagnosticați și 23% cu CD4<200, nu zero."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează 8% și 23% în favoarea unui screening inutil, trei procente din același bilanț 2017."
  },
  "textbookExpressions": [
   "8% din pacienţii",
   "2/1.000"
  ]
 },
 {
  "id": "hiv-adv-099",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Testele HIV de la domiciliu sau point-of-care, conform textului:",
  "options": [
   "Datorită unei rate semnificative de rezultate fals pozitive, toate testele reactive trebuie urmate de serologie de confirmare și programare rapidă la specialist",
   "Înlocuiesc serologia, fals-pozitivele fiind absente",
   "Se interpretează doar din salivă, fără confirmare",
   "Sunt interzise legislativ în Marea Britanie",
   "Rezultatul telefonic înlocuiește evaluarea specialistului"
  ],
  "correct": [
   0
  ],
  "explanation": "Datorită unei rate semnificative de rezultate fals pozitive, toate testele reactive trebuie urmate de serologie de confirmare și programare rapidă la specialist — Corect: Textul: rată semnificativă de fals-pozitive; confirmare serologică și programare rapidă.\n\nÎnlocuiesc serologia, fals-pozitivele fiind absente — Incorect: Nu înlocuiesc serologia.\n\nSe interpretează doar din salivă, fără confirmare — Incorect: Există teste din sânge sau salivă; confirmarea rămâne.\n\nSunt interzise legislativ în Marea Britanie — Incorect: Modificările legislative au permis vânzarea truselor.\n\nRezultatul telefonic înlocuiește evaluarea specialistului — Incorect: Specialistul rămâne necesar dacă infecția este confirmată.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1449, Testare — Fals-pozitive la domiciliu și confirmare serologică (pagini PDF: 390).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1449
   ],
   "pdfPages": [
    390
   ],
   "section": "Testare — Fals-pozitive la domiciliu și confirmare serologică"
  },
  "learningObjective": "Obligația confirmării serologice după un test reactiv de domiciliu/POC, din cauza fals-pozitivelor.",
  "optionRationales": [
   "Textul: rată semnificativă de fals-pozitive; confirmare serologică și programare rapidă.",
   "Nu înlocuiesc serologia.",
   "Există teste din sânge sau salivă; confirmarea rămâne.",
   "Modificările legislative au permis vânzarea truselor.",
   "Specialistul rămâne necesar dacă infecția este confirmată."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Tratează testul de domiciliu ca diagnostic definitiv, tocmai capcana fals-pozitivului semnalată în text."
  },
  "textbookExpressions": [
   "fals pozitive",
   "point-of-care"
  ]
 },
 {
  "id": "hiv-adv-100",
  "topicId": "hiv",
  "type": "CM",
  "stem": "PrEP și mesajul U=U, dincolo de circumcizia deja citată:",
  "options": [
   "PrEP cu tenofovir-emtricitabină (TDF-FTC) oral, zilnic sau înainte de expunere, reduce riscul cu până la 90% dacă este luată constant, la BSB și heterosexuali",
   "Studiile Partner 1 și 2 au raportat transmisie zero de la partenerul cu ARV și viremie nedetectabilă",
   "Mesajul U=U (undetectable = untransmittable) evidențiază beneficiile testării și ale ARV",
   "PrEP este ineficace sub 10% și se evită la heterosexuali",
   "Partner 1/2 au arătat transmisie de 50%, identic circumciziei"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "PrEP cu tenofovir-emtricitabină (TDF-FTC) oral, zilnic sau înainte de expunere, reduce riscul cu până la 90% dacă este luată constant, la BSB și heterosexuali — Corect: TDF-FTC zilnic sau event-driven, până la 90%.\n\nStudiile Partner 1 și 2 au raportat transmisie zero de la partenerul cu ARV și viremie nedetectabilă — Corect: Partner 1 și 2: transmisie zero dacă nedetectabil.\n\nMesajul U=U (undetectable = untransmittable) evidențiază beneficiile testării și ale ARV — Corect: U=U leagă testarea de ARV.\n\nPrEP este ineficace sub 10% și se evită la heterosexuali — Incorect: Textul: eficientă și la heterosexuali, până la 90%.\n\nPartner 1/2 au arătat transmisie de 50%, identic circumciziei — Incorect: 50% este reducerea prin circumcizie, nu rata de transmisie Partner.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1450, Prevenție — PrEP TDF-FTC până la 90% și U=U (pagini PDF: 391).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1450
   ],
   "pdfPages": [
    391
   ],
   "section": "Prevenție — PrEP TDF-FTC până la 90% și U=U"
  },
  "learningObjective": "Reducerea până la 90% a PrEP și transmisia zero din Partner, distinse de 50% al circumciziei.",
  "optionRationales": [
   "TDF-FTC zilnic sau event-driven, până la 90%.",
   "Partner 1 și 2: transmisie zero dacă nedetectabil.",
   "U=U leagă testarea de ARV.",
   "Textul: eficientă și la heterosexuali, până la 90%.",
   "50% este reducerea prin circumcizie, nu rata de transmisie Partner."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Permutează 90% (PrEP) cu 50% (circumcizie) și neagă transmisia zero U=U."
  },
  "textbookExpressions": [
   "până la 90%",
   "nedetectabil = netransmisibil"
  ]
 },
 {
  "id": "hiv-adv-101",
  "topicId": "hiv",
  "type": "CS",
  "stem": "Nu există nicio dovadă că HIV s-ar răspândi prin:",
  "options": [
   "Contact social sau domestic ori insecte care se hrănesc cu sânge, cum ar fi țânțarii și tăunii",
   "Acele contaminate ale consumatorilor de droguri i.v.",
   "Sânge netestat și factori de coagulare înainte de 1985",
   "Transmitere perinatală și alăptare",
   "Contact heterosexual în Africa subsahariană"
  ],
  "correct": [
   0
  ],
  "explanation": "Contact social sau domestic ori insecte care se hrănesc cu sânge, cum ar fi țânțarii și tăunii — Corect: Textul neagă transmiterea socială/domestică și prin țânțari/tăuni.\n\nAcele contaminate ale consumatorilor de droguri i.v. — Incorect: Acele i.v. sunt o cale principală.\n\nSânge netestat și factori de coagulare înainte de 1985 — Incorect: Transfuzia pre-1985 este recunoscută.\n\nTransmitere perinatală și alăptare — Incorect: Calea verticală este reală.\n\nContact heterosexual în Africa subsahariană — Incorect: Contactul heterosexual predomină în Africa.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1428, HIV — Absența transmiterii sociale și vectoriale (pagini PDF: 369).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1428
   ],
   "pdfPages": [
    369
   ],
   "section": "HIV — Absența transmiterii sociale și vectoriale"
  },
  "learningObjective": "Negarea explicită a contactului social/domestic și a vectorilor hematofagi, versus căile reale.",
  "optionRationales": [
   "Textul neagă transmiterea socială/domestică și prin țânțari/tăuni.",
   "Acele i.v. sunt o cale principală.",
   "Transfuzia pre-1985 este recunoscută.",
   "Calea verticală este reală.",
   "Contactul heterosexual predomină în Africa."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Singura cale pe care textul o neagă (social/insecte) versus patru căi afirmate pe aceleași pagini de transmitere."
  },
  "textbookExpressions": [
   "ţânţarii şi tăunii",
   "contact social sau domestic"
  ]
 },
 {
  "id": "hiv-adv-102",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Pătrunderea HIV în limfocitul T CD4, conform figurii de replicare:",
  "options": [
   "gp120 se leagă de CD4 și de co-receptorii CCR5 sau CXCR4; gp41 mediază fuziunea cu membrana",
   "Revers-transcrierea produce ADN din ARN; ADN-ul se integrează în genomul gazdei",
   "p24 (capsidă) poate monitoriza infecția; p17 este proteina-matrice",
   "gp120 se leagă doar de CCR4, fără CD4, fuziunea fiind independentă de gp41",
   "Integrarea este evitată, virusul rămânând epicitoplasmatic, fără revers-transcriptază"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "gp120 se leagă de CD4 și de co-receptorii CCR5 sau CXCR4; gp41 mediază fuziunea cu membrana — Corect: Atașare gp120+CD4+CCR5/CXCR4; fuziune gp41.\n\nRevers-transcrierea produce ADN din ARN; ADN-ul se integrează în genomul gazdei — Corect: RT apoi integrare.\n\np24 (capsidă) poate monitoriza infecția; p17 este proteina-matrice — Corect: p24 monitorizare; p17 matrice.\n\ngp120 se leagă doar de CCR4, fără CD4, fuziunea fiind independentă de gp41 — Incorect: CCR5 sau CXCR4, nu „doar CCR4”; CD4 este receptorul.\n\nIntegrarea este evitată, virusul rămânând epicitoplasmatic, fără revers-transcriptază — Incorect: Revers-transcriptaza și integrarea definesc retrovirusul.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1428, 1429, HIV — gp120/CCR5/CXCR4, gp41, p24/p17 (pagini PDF: 369, 370).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1428,
    1429
   ],
   "pdfPages": [
    369,
    370
   ],
   "section": "HIV — gp120/CCR5/CXCR4, gp41, p24/p17"
  },
  "learningObjective": "Cuplarea gp120–CD4–CCR5/CXCR4, fuziunea gp41 și markerii p24/p17.",
  "optionRationales": [
   "Atașare gp120+CD4+CCR5/CXCR4; fuziune gp41.",
   "RT apoi integrare.",
   "p24 monitorizare; p17 matrice.",
   "CCR5 sau CXCR4, nu „doar CCR4”; CD4 este receptorul.",
   "Revers-transcriptaza și integrarea definesc retrovirusul."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Anulează CD4/gp41 și RT, adică tocmai schema din Fig. 37.10-37.11."
  },
  "textbookExpressions": [
   "CCR5 şi CXCR4",
   "gp41"
  ]
 },
 {
  "id": "hiv-adv-103",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Profilaxia post-expunere (PEP):",
  "options": [
   "Personalul cu expunere ocupațională și persoanele expuse sexual trebuie să primească PEP",
   "Studiile pe animale susțin tripla terapie ca PEP, dar nu există studii prospective care să arate cea mai bună opțiune; fiecare situație se evaluează individual",
   "PEP înlocuiește PrEP-ul zilnic la toți BSB, fără evaluarea riscului",
   "PEP se administrează doar după 6 luni de la expunere, fereastra fiind depășită",
   "Tripla terapie ca PEP este contraindicată, fiind rezervată primoinfecției"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Personalul cu expunere ocupațională și persoanele expuse sexual trebuie să primească PEP — Corect: Ocupațional și sexual: PEP.\n\nStudiile pe animale susțin tripla terapie ca PEP, dar nu există studii prospective care să arate cea mai bună opțiune; fiecare situație se evaluează individual — Corect: Animale: triplă terapie; fără prospectiv uman definitiv.\n\nPEP înlocuiește PrEP-ul zilnic la toți BSB, fără evaluarea riscului — Incorect: PEP nu înlocuiește PrEP-ul ca strategie populațională.\n\nPEP se administrează doar după 6 luni de la expunere, fereastra fiind depășită — Incorect: Fereastra este imediată după expunere, nu la 6 luni.\n\nTripla terapie ca PEP este contraindicată, fiind rezervată primoinfecției — Incorect: Tripla este tocmai opțiunea susținută de modele.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1441, PEP — Ocupațională și sexuală, triplă terapie fără studiu prospectiv (pagini PDF: 382).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1441
   ],
   "pdfPages": [
    382
   ],
   "section": "PEP — Ocupațională și sexuală, triplă terapie fără studiu prospectiv"
  },
  "learningObjective": "Indicația dublă (ocupațional + sexual) și absența studiului prospectiv, cu tripla terapie susținută de modele animale.",
  "optionRationales": [
   "Ocupațional și sexual: PEP.",
   "Animale: triplă terapie; fără prospectiv uman definitiv.",
   "PEP nu înlocuiește PrEP-ul ca strategie populațională.",
   "Fereastra este imediată după expunere, nu la 6 luni.",
   "Tripla este tocmai opțiunea susținută de modele."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Amână PEP-ul 6 luni și îl confundă cu PrEP/primoinfecția, trei ferestre distincte din capitol."
  },
  "textbookExpressions": [
   "Profilaxia post-expunere",
   "triplei terapii"
  ]
 },
 {
  "id": "hiv-adv-104",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Hepatita C acută la pacientul cu HIV, dincolo de DAA 12 săptămâni deja citate:",
  "options": [
   "Ghidurile UK: dacă la 4 săptămâni de la diagnosticul infecției acute nu scade viremia VHC cu 2 log10, se începe DAA",
   "Răspunsul imun nu protejează împotriva reinfecției; recăderea se tratează ca VHC cronică, reinfecția ca hepatită acută C",
   "ARV-ul se amână 12 luni după DAA, elastografia fiind inutilă",
   "Clearance-ul spontan conferă imunitate sterilizantă, fără reinfecție",
   "DAA se evită la co-infectați, fiind rezervate monoinfecției VHC"
  ],
  "correct": [
   0,
   1
  ],
  "explanation": "Ghidurile UK: dacă la 4 săptămâni de la diagnosticul infecției acute nu scade viremia VHC cu 2 log10, se începe DAA — Corect: Fără scădere 2 log la 4 săptămâni → DAA.\n\nRăspunsul imun nu protejează împotriva reinfecției; recăderea se tratează ca VHC cronică, reinfecția ca hepatită acută C — Corect: Fără protecție la reinfecție; recădere=cronic, reinfecție=acut.\n\nARV-ul se amână 12 luni după DAA, elastografia fiind inutilă — Incorect: ARV se inițiază de preferință 4-6 săptămâni înainte de DAA; elastografie anuală dacă se temporizează.\n\nClearance-ul spontan conferă imunitate sterilizantă, fără reinfecție — Incorect: Reinfecțiile sunt raportate după clearance spontan sau terapeutic.\n\nDAA se evită la co-infectați, fiind rezervate monoinfecției VHC — Incorect: Opțiunile DAA sunt similare monoinfecției, cu aviz de expert pentru interacțiuni.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1446, HIV/VHC acut — 2 log la 4 săptămâni și reinfecție versus recădere (pagini PDF: 387).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1446
   ],
   "pdfPages": [
    387
   ],
   "section": "HIV/VHC acut — 2 log la 4 săptămâni și reinfecție versus recădere"
  },
  "learningObjective": "Regula 2 log10/4 săptămâni și distincția recădere (cronic) versus reinfecție (acut).",
  "optionRationales": [
   "Fără scădere 2 log la 4 săptămâni → DAA.",
   "Fără protecție la reinfecție; recădere=cronic, reinfecție=acut.",
   "ARV se inițiază de preferință 4-6 săptămâni înainte de DAA; elastografie anuală dacă se temporizează.",
   "Reinfecțiile sunt raportate după clearance spontan sau terapeutic.",
   "Opțiunile DAA sunt similare monoinfecției, cu aviz de expert pentru interacțiuni."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Transformă absența imunității post-VHC în protecție sterilizantă și amână ARV-ul un an."
  },
  "textbookExpressions": [
   "4 săptămâni",
   "reinfecţiei"
  ]
 },
 {
  "id": "hiv-adv-105",
  "topicId": "hiv",
  "type": "CM",
  "stem": "Sarcomul Kaposi epidemic și limfoamele, dincolo de HHV-8 deja asociat:",
  "options": [
   "SK viscerale (ganglioni, plămâni, tract GI) au prognostic mai rezervat decât cele limitate la tegument; ARV favorizează regresia, radioterapia locală ajută cutanat/ganglionar, chimioterapia e pentru forme agresive",
   "Limfoamele sunt frecvent NHL cu celulă mare B, extra-ganglionare (creier, plămân, GI), adesea EBV cu EBNA 1-6",
   "Citologia cervicală anuală se recomandă femeilor cu HIV pentru modificări pre-neoplazice HPV",
   "SK cutanat are prognostic mai grav decât cel visceral, ARV-ul fiind inutil",
   "Limfoamele sunt indolente, fără sindroame B, EBV fiind absent"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "explanation": "SK viscerale (ganglioni, plămâni, tract GI) au prognostic mai rezervat decât cele limitate la tegument; ARV favorizează regresia, radioterapia locală ajută cutanat/ganglionar, chimioterapia e pentru forme agresive — Corect: Visceral mai rezervat; ARV, RT locală, CT sistemică.\n\nLimfoamele sunt frecvent NHL cu celulă mare B, extra-ganglionare (creier, plămân, GI), adesea EBV cu EBNA 1-6 — Corect: NHL B mare, extra-ganglionar, EBV/EBNA.\n\nCitologia cervicală anuală se recomandă femeilor cu HIV pentru modificări pre-neoplazice HPV — Corect: Citologie cervicală anuală.\n\nSK cutanat are prognostic mai grav decât cel visceral, ARV-ul fiind inutil — Incorect: Textul: visceral mai rezervat; ARV induce regresia.\n\nLimfoamele sunt indolente, fără sindroame B, EBV fiind absent — Incorect: Limfoamele sunt agresive, adesea cu sindroame B și EBV.\n\nReferință: Kumar & Clark, Medicină clinică, ediția a 10-a, text român, cap. 37, p. 1449, Neoplazii — SK visceral versus cutanat și NHL/EBV (pagini PDF: 390).",
  "source": "https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf",
  "reference": {
   "book": "Kumar & Clark",
   "edition": "Medicină clinică, ediția a 10-a, text român",
   "chapter": 37,
   "printedPages": [
    1449
   ],
   "pdfPages": [
    390
   ],
   "section": "Neoplazii — SK visceral versus cutanat și NHL/EBV"
  },
  "learningObjective": "Gradientul prognostic visceral>cutanat, profilul NHL extra-ganglionar EBV și citologia cervicală anuală.",
  "optionRationales": [
   "Visceral mai rezervat; ARV, RT locală, CT sistemică.",
   "NHL B mare, extra-ganglionar, EBV/EBNA.",
   "Citologie cervicală anuală.",
   "Textul: visceral mai rezervat; ARV induce regresia.",
   "Limfoamele sunt agresive, adesea cu sindroame B și EBV."
  ],
  "difficulty": {
   "score": 8,
   "kind": "editorial-estimate",
   "reason": "Inversează prognosticul SK visceral/cutanat și face limfomul indolent, două neoplazii de pe aceeași deschidere."
  },
  "textbookExpressions": [
   "prognostic mai rezervat",
   "citologiei cervicale"
  ]
 }
];
