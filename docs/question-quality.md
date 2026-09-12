# Revizuirea băncii · 12 septembrie 2026

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

Cele 5 grile inițiale de sepsis și cele 5 de electroliți sunt retrase din sesiunile noi. Rămân în `QUESTION_HISTORY`, cu textul și cheile originale, pentru rezultate și teste deja începute. Banca activă are 230 de grile, dintre care 40 revizuite pe sursa furnizată. Celelalte 120 de propuneri inițiale rămân nepublicate și necesită aceeași revizuire; celelalte 190 de grile inițiale active necesită îmbunătățire editorială.

`npm run audit:questions` produce raportul. Testele refuză publicarea unui item declarat verificat dacă înregistrarea de review lipsește, dovezile sunt incomplete, pagina este în afara intervalelor de capitol sau amprenta diferă. Schimbarea unui distractor, a cheii ori a explicației invalidează review-ul anterior. Verificarea automată a intervalelor nu înlocuiește verificarea manuală a excluderilor din interiorul paginilor.

`npm run audit:questions:release` verifică finalizarea obiectivului de 800 de itemi suplimentari. La această etapă sunt 40 de itemi noi verificați și o creștere netă de 30 de întrebări active după retrageri; obiectivul nu este îndeplinit. Se pot publica loturi individuale verificate fără a prezenta extinderea ca terminată. Toate cele trei cardinalități CM sunt necesare în bancă; distribuția egală din acest lot este o decizie editorială, nu o cotă oficială sau o predicție pentru examen.

## Al doilea lot: electroliți

20 de itemi suplimentari confruntați cu p. 172–190: 5 CS și câte 5 CM cu 2, 3 și 4 răspunsuri. Distractorii compară tubulopatii, mecanisme diuretice, compartimente hidrice și cauze reale versus preanalitice ale hiperkaliemiei. Fiecare opțiune are motivare și referință. Imaginile paginilor 176, 185 și 188 au fost verificate pentru receptorii ADH, mecanismele cerebrale și diferențierea tubulopatiilor. Nu se folosesc dozele contradictorii de corecție a natremiei.

În extrasul furnizat, p. 172–190 corespund PDF 23–41; pagina PDF 42 este deja p. 224. Paginile obligatorii 195–202 nu au fost localizate. Capitolul acido-bazic rămâne un gol de sursă, nu o parte pretins verificată. Celelalte două cărți au text extras local, dar nu se pretinde că întregul lor conținut a fost revizuit.
