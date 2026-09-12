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

Auditul băncii live a găsit 50 CS și 150 CM: 0 cu două, 14 cu trei, 136 cu patru răspunsuri corecte. Acesta este un defect editorial și permite strategii de ghicire. Cele 160 de propuneri inițiale au aceeași problemă de distribuție. Nu sunt acceptate și nu sunt importate în aplicație. Nu se schimbă artificial cheia pentru a obține o distribuție: trebuie rescrise enunțurile sau variantele și reevaluat adevărul fiecăreia.

`npm run audit:questions` produce raportul; `npm run audit:questions:release` refuză declararea extinderii complete până la 800 de itemi cu înregistrări complete de review. Fișierul `question-reviews.json` este gol în mod intenționat: nu au fost consultate edițiile române complete și nu se inventează pagini, dovezi sau recenzenți. Șablonul cere motivarea tuturor celor cinci variante, inclusiv cele incorecte.

Prioritatea comunicată de utilizator este calitatea. Următorul pas necesar pentru validarea fidelității față de bibliografie este accesul la exemplare/extrase autorizate din cele trei ediții române cerute. Până atunci, comparația de format și verificările software pot continua, dar nu demonstrează echivalența conținutului cu un examen oficial.
