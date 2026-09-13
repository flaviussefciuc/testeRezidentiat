# Revizuirea băncii · 13 septembrie 2026

## Situația curentă: 52 / 800 acceptate

Toate cele 200 de întrebări inițiale au o decizie editorială individuală în `legacy-question-review.json`: amprenta exactă, motiv și scor sub 8. Evaluarea a citit enunțurile, opțiunile și cheile pentru admiterea editorială; nu pretinde o reverificare medicală completă a cheilor respinse. Întrebările inițiale nu mai intră în sesiuni noi.

Cele 80 de întrebări suplimentare publicate anterior au evaluări individuale în `difficulty-review.json`. Nouă obiective au versiuni noi acceptate; restul sunt retrase fără înlocuitor acceptat. Toate versiunile publicate anterior rămân în istoric, fără schimbarea cheilor sau a punctajului rezultatelor vechi.

Banca activă conține 52 de întrebări avansate, toate cu estimare editorială 8/10: 23 din etapa precedentă, 14 de tiroidă și 15 de diabet. Dintre cele 40 de propuneri noi, șase de tiroidă și cinci de diabet au rămas la 7/10. Împreună cu două propuneri anterioare, sunt 13 proiecte neacceptate. Evaluarea nu este un scor psihometric și nu certifică echivalența cu examenul.

Fiecare întrebare acceptată are referințe la ediția română, pagini tipărite și PDF, cinci justificări ale opțiunilor, expresii terminologice și review legat de amprenta exactă a versiunii. Figurile pentru structurile analogilor de insulină și tabelul MODY au fost verificate vizual. Alternativele trebuie să testeze distincții precise între concepte apropiate. Ambiguitatea și obscuritatea nu cresc scorul.

Antrenamentul folosește numai banca acceptată. Estimarea dificultății apare după verificarea răspunsului. Simularea este temporar indisponibilă până la minimum 50 CS și 150 CM acceptate. Istoricul păstrează 332 de versiuni: 200 inițiale, 80 suplimentare anterioare și 52 avansate. Formatul CM include două, trei și patru răspunsuri corecte, fără cotă obligatorie pentru fiecare cardinalitate.

Ultima cerere este «până la 800», după revizuirea băncii. Pragul de finalizare și progresul din aplicație urmăresc 800 de întrebări active acceptate; sunt necesare încă 748. Vechiul obiectiv de creștere netă cu 800 este păstrat numai în jurnalul istoric de mai jos. `audit:questions:release` trebuie să eșueze până la finalizarea obiectivului. Auditul structural nu stabilește corectitudinea medicală.

Sursele noi: Kumar, p. 611–618 și 621–622 (PDF 88–97, cu salt de paginare) și p. 702–711, 715–720 (PDF 101–110, 114–119). Pagina tipărită 619 lipsește din extras, la fel ca intervalul 195–202 identificat anterior; nu se publică întrebări care depind de aceste pagini. În diabet sunt evitate afirmațiile depășite despre autorizări, formulări disponibile și contraindicații generale. Criteriile de examen rămân cele din ediția cerută, iar erorile sau pasajele ambigue nu devin barem.

## Jurnalul etapelor anterioare

Numerele de mai jos descriu loturile publicate înaintea aplicării pragului 8/10. Nu sunt situația activă curentă.

## Materiale comparate

- Caiet C, Medicină, 2021: https://ro.scribd.com/document/543594894/Caiet-Tip-C-Reziden%C8%9Biat-2021 — transcriere publică a unui scan; folosită pentru structura itemilor, nu drept barem medical.
- Caiet D, Medicină, noiembrie 2023: https://www.scribd.com/document/755535325/REZI2023-subiect — transcriere publică OCR; comparate enunțuri și tipuri de distractori. Erorile OCR nu sunt importate.
- Analiza 2024: https://blog.grile-rezidentiat.ro/grilele-de-la-rezi-2024-medicina-analiza-completa/ — sursă secundară pentru distribuție, nu consultare directă a întregului caiet.
- Analiza 2025: https://blog.grile-rezidentiat.ro/grilele-de-la-rezi-2025-medicina-analiza-completa/ — distribuție și raportarea la pagini; nu se pretinde verificarea directă a întregului caiet 2025.
- Arhiva oficială: https://www.umft.ro/ro/rezidentiat-2023/
- Tematică: https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf

## Observații și criterii

Eșantioanele consultate includ frecvent enunțuri scurte, liste de afirmații, mecanisme, investigații, complicații și indicații terapeutice. Scenariile clinice sunt unul dintre formate, nu singurul. Variantele se diferențiază prin informație medicală, nu prin absurdități evidente. Numărul de răspunsuri corecte variază la CM. Procentele retrospective nu prezic examenul 2026.

Pentru extindere: cinci opțiuni distincte, CS cu un răspuns și CM cu 2–4, întrebare independentă, context suficient, explicație care motivează cheia, ID stabil, capitol valid și referință de lectură. Nu se numără drept întrebări noi permutările variantelor sau schimbările de vârstă ale aceluiași caz. Nu se republică întrebările oficiale.

Verificarea automată controlează numărul, ID-urile, dublurile exacte, opțiunile, cheile, acoperirea și punctarea. Nu dovedește adevărul medical sau dificultatea. Materialul rămâne redactat cu ajutorul AI; echivalența psihometrică necesită validare medicală și rezultate de la studenți. Referințele online sunt lectură suplimentară; edițiile române și paginile din tematica oficială rămân reperul pentru examen. Afirmațiile terapeutice dependente de ghid trebuie confruntate cu ediția cerută.

## Reguli confirmate și constatarea auditului

Art. 26 din [metodologia oficială 2025](https://www.dsptimis.ro/public/data_files/media/2025/202510081252-0208102025Metodologie.pdf): 50 CS cu un răspuns din cinci și 150 CM cu două, trei sau patru răspunsuri corecte. CS: 4 puncte pentru răspunsul corect. CM: maximum 5 puncte, câte un punct pentru fiecare opțiune clasificată corect, dacă sunt marcate 2–4 variante. Marcarea a 0, 1 sau 5 variante la CM anulează punctajul întrebării. Nu există în această regulă o cotă fixă pentru fiecare dintre subtipurile CM.

Auditul inițial a găsit 50 CS și 150 CM: 0 cu două, 14 cu trei, 136 cu patru răspunsuri corecte. Acesta este un defect editorial și permite strategii de ghicire. Feedbackul utilizatorilor confirmă că mulți distractori sunt prea ușor de eliminat. Schimbarea artificială a cheilor nu rezolvă problema: se reevaluează fiecare afirmație și se folosesc alternative medicale apropiate.

## Prima revizuire pe textul furnizat

Utilizatorul a furnizat cele trei PDF-uri. Extragerea locală a reușit: Kumar 391 pagini PDF, Lawrence 345, Sinopsis 118. Acestea sunt extrase, cu numerotare diferită de paginile cărții; nu certificăm integritatea lor editorială. Inventarul conține amprentele fișierelor, fără reproducerea textului. Nu mai există un blocaj de acces la surse.

Cele 20 de propuneri de sepsis au fost rescrise și confruntate cu textul: 5 CS și câte 5 CM cu 2, 3 și 4 răspunsuri. Sunt păstrate ca `source-checked`, cu recenzent explicit AI, pagini tipărite și PDF, motivarea tuturor opțiunilor și amprenta exactă a conținutului. Acesta nu este un review efectuat de medic și nu demonstrează dificultate echivalentă examenului. Valorile numerice qSOFA și șoc septic de la p. 154 au fost confruntate și cu imaginea. Pasajele contradictorii sunt consemnate în `source-discrepancies.md` și nu sunt folosite ca barem.

Câte 5 grile inițiale de sepsis, electroliți, terapie intensivă și hematologie sunt retrase din sesiunile noi. Rămân în `QUESTION_HISTORY`, cu textul și cheile originale, pentru rezultate și teste deja începute. Banca activă are 260 de grile, dintre care 80 revizuite pe sursa furnizată. Celelalte 80 de propuneri inițiale rămân nepublicate și necesită aceeași revizuire; celelalte 180 de grile inițiale active necesită îmbunătățire editorială.

`npm run audit:questions` produce raportul. Testele refuză publicarea unui item declarat verificat dacă înregistrarea de review lipsește, dovezile sunt incomplete, pagina este în afara intervalelor de capitol sau amprenta diferă. Schimbarea unui distractor, a cheii ori a explicației invalidează review-ul anterior. Verificarea automată a intervalelor nu înlocuiește verificarea manuală a excluderilor din interiorul paginilor.

`npm run audit:questions:release` verifică finalizarea obiectivului de 800 de itemi suplimentari. La această etapă sunt 80 de itemi noi verificați și o creștere netă de 60 de întrebări active după retrageri; obiectivul nu este îndeplinit. Se pot publica loturi individuale verificate fără a prezenta extinderea ca terminată. Toate cele trei cardinalități CM sunt necesare în bancă; distribuția egală din acest lot este o decizie editorială, nu o cotă oficială sau o predicție pentru examen.

## Al doilea lot: electroliți

20 de itemi suplimentari confruntați cu p. 172–190: 5 CS și câte 5 CM cu 2, 3 și 4 răspunsuri. Distractorii compară tubulopatii, mecanisme diuretice, compartimente hidrice și cauze reale versus preanalitice ale hiperkaliemiei. Fiecare opțiune are motivare și referință. Imaginile paginilor 176, 185 și 188 au fost verificate pentru receptorii ADH, mecanismele cerebrale și diferențierea tubulopatiilor. Nu se folosesc dozele contradictorii de corecție a natremiei.

În extrasul furnizat, p. 172–190 corespund PDF 23–41; pagina PDF 42 este deja p. 224. Paginile obligatorii 195–202 nu au fost localizate. Capitolul acido-bazic rămâne un gol de sursă, nu o parte pretins verificată. Celelalte două cărți au text extras local, dar nu se pretinde că întregul lor conținut a fost revizuit.

## Al treilea lot: terapie intensivă

20 de itemi confruntați cu p. 224–233 (PDF 42–51), cu 5 CS și câte 5 CM cu 2, 3 și 4 răspunsuri. Acoperă insuficiența respiratorie, modurile ventilatorii, efectele PEEP, capnografia, VNI, sevrajul, complicațiile și fiziopatologia ARDS. Distractorii folosesc confuzii între mecanisme și parametri, între colonizare și infecție și între ameliorarea oxigenării și beneficiul clinic. Fiecare opțiune are o justificare și o localizare a dovezii. Imaginile p. 230 și 232 au fost confruntate cu textul extras.

Creșterea cerută de 800 este calculată net față de cele 200 de grile inițiale: pragul de finalizare cere minimum 1.000 de întrebări active și minimum 800 de itemi suplimentari cu review complet. Retragerea unui item vechi nu este numărată ca extindere.

## Al patrulea lot: hematologie, distractori apropiați

20 de itemi verificați pe p. 327–336 și 351–355 (PDF 52–66), cu 5 CS și câte 5 CM cu 2, 3 și 4 răspunsuri. A doua trecere editorială, după feedbackul privind dificultatea, a înlocuit alternativele îndepărtate cu variante din aceeași categorie medicală: perechi de markeri cu o singură componentă greșită, compartimente și transportori apropiați, profiluri imunologice și limite de efect terapeutic. Cazurile includ inflamație asociată cu deficit marțial și aglutinare de probă asociată cu dimorfism real.

Înregistrarea fiecărui review precizează confuzia medicală testată. Variantele Coombs folosesc formulări paralele pentru a evita indicarea răspunsului prin lungime. Nu se prezintă ca o bancă psihometric calibrată sau validată de medic. Schema/tabelele de la p. 331, 351 și 352 au fost confruntate cu imaginile. Aplazia și policitemia de la capetele intervalelor nu au fost folosite ca subiecte noi. Au fost evitate pasajele discutabile despre fototerapia neonatală și profilaxia anti-D.

Criteriul editorial suplimentar: un distractor trebuie să corespundă unei confuzii medicale identificabile, iar diferența față de o afirmație adevărată să poată fi explicată precis. Diagnosticele fără legătură, tratamentele evident nepotrivite și negările absolute nu sunt o metodă de creștere a dificultății. Revizuirea se aplică în continuare și băncii vechi.
