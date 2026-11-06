# TesteRezidentiat · Rezi

Aplicație Angular SPA în limba română pentru pregătirea concursului de rezidențiat, domeniul Medicină (sesiunea 15 noiembrie 2026).

**Aplicație:** https://testerezidentiat.vercel.app

## Ce oferă

**Grilele**
- 3.220 de grile active în toate cele 39 de capitole ale tematicii 2026 (613 CS, 2.607 CM), fiecare confruntată cu pagina din ediția română a bibliografiei și legată de o recenzie editorială cu amprentă exactă (`docs/question-reviews.json`).
- După verificare, fiecare variantă își afișează verdictul (adevărat/fals, bifat/omis), punctul obținut la CM și justificarea din manual; cardul explicativ adaugă obiectivul grilei, capcana urmărită de distractori, termenii din manual și pagina.
- Negațiile și calificativele decisive din enunț sunt evidențiate; grilele negative au un avertisment explicit.
- Testele nu combină grile-surori și amestecă variantele; orice grilă poate fi raportată editorilor (issue GitHub precompletat, eticheta `raport-grila`).

**Moduri de lucru**
- Antrenament pe capitole și surse (toate, nevăzute, greșite, scadente), antrenor adaptiv fără număr fix de grile, simulări de 200/100/52 de grile cu antrenor de ritm (72 s/grilă), foaie de răspuns și condiții reale de examen.
- Recapitulare programată (Leitner) calculată din istoricul răspunsurilor, cu marcarea încrederii (Sigur/Nesigur/Ghicesc).
- Adevărat sau fals: ~16.000 de afirmații verificate, cu propria recapitulare programată; carduri rapide; provocarea zilei (aceleași 10 grile pentru toți); teste tipărite cu cod, barem și corectare din foaia de răspuns.
- Fișe de recapitulare pe capitole (în ordinea paginilor, cu capcane, test de diagnostic, tipărire și citire cu voce), pagini de recitit generate din greșeli, notițe și colecție personală, căutare în bancă, export Anki.

**Planificare și analiză**
- Planul până la examen pe zile, ponderat după mărimea capitolelor și punctele slabe; seria zilnică și calendarul activității; harta tematicii; indicele de pregătire (progres în bancă, nu predicție).
- Rezultate cu lecțiile de reținut, harta capitolului, unde s-au dus punctele (omisiuni, bifări greșite, CM anulate), obiceiul de marcare la CM, calibrarea încrederii, ritmul pe grilă și motivele greșelilor; raport săptămânal, jaloane și strategia personalizată pentru ziua examenului.

**Experiență**
- Temă luminoasă/întunecată (tokeni OKLCH generați), mărimea textului, fonturi pentru citit (Literata, Atkinson Hyperlegible), mod concentrare, tastatură completă (A–E, Shift+A–E, S/N/G, Enter, ←/→, F, Z, ?, Ctrl+K), dock și bară de navigare pentru telefon.
- Aplicație instalabilă care funcționează offline (service worker), audit WCAG 2 AA fără erori în ambele teme.
- Conturi Supabase cu sincronizarea rezultatelor; mod vizitator, mutarea sesiunilor de vizitator în cont și restaurarea din export.

## Dezvoltare

Node.js 24. Copiază `.env.example` în `.env.local` și configurează URL-ul Supabase și cheia publică, apoi:

```sh
npm install
npm start
npm run check
```

`npm test` verifică punctajul, compoziția simulărilor, integritatea băncii și a recenziilor, indexul băncii, recapitularea programată, planul, seria, analiza punctelor, evidențierea enunțurilor, exportul Anki și provocarea zilei.

Construcția (`npm run build`) are patru pași:
1. `scripts/config.mjs` scrie configurația publică Supabase;
2. `scripts/export-bank.ts` serializează banca: `src/app/bank-index.generated.ts` (index de ~160 KB: capitol, cheie, activ, perechi de grile-surori) și `public/bank/active.json` / `history.json` (textul complet, încărcat doar de paginile care îl afișează);
3. `ng build`;
4. `scripts/sw-manifest.mjs` scrie lista de fișiere pe care service worker-ul (`public/sw.js`) le păstrează offline.

Culorile se scriu în `src/styles.css` ca hex obișnuit; `python scripts/theme-tokens.py` le transformă în tokeni și derivă tema întunecată, iar `python scripts/contrast-fix.py` închide la culoare textele care nu ating contrastul AA. Fiecare componentă încărcată cu `@defer` stă în fișierul ei (cu două componente în același fișier, `ng build` termina construcția, dar nu se mai oprea).

## Supabase și Vercel

Migrarea din `supabase/migrations/202609110001_attempts.sql` creează rezultate izolate prin RLS pentru fiecare utilizator. Sunt permise numai citirea și inserarea propriilor rezultate. Încrederea, timpul pe grilă și motivul greșelilor se salvează în `answers` (JSONB), fără schimbări de schemă. Cheile secrete nu sunt incluse în SPA.

Configurează `SUPABASE_URL` și `SUPABASE_PUBLISHABLE_KEY` în Vercel. În Supabase → Authentication → URL Configuration, setează Site URL la `https://testerezidentiat.vercel.app` și adaugă `https://testerezidentiat.vercel.app/cont` în Redirect URLs.

Fiecare push pe `main` construiește două proiecte Vercel (`testerezidentiat` și `teste-rezidentiat`). Pe planul Hobby limita este de 100 de deploy-uri pe zi; după atingerea ei, deploy-urile apar ca „rate limited” și trebuie repornite (Redeploy sau un push nou) după 24 de ore.

`node scripts/verify-cloud.mjs` verifică autentificarea, sincronizarea și izolarea datelor cu două conturi temporare, eliminate la final.

## Conținut și limite

[Tematica oficială 2026](https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf) și resursele anilor anteriori sunt accesibile în aplicație. Grilele sunt originale, redactate cu ajutorul AI, fără validare independentă de medic și fără acoperire exhaustivă a bibliografiei. Procesul editorial este descris în [documentația editorială](docs/question-quality.md). Formatul și punctajul urmează metodologia anilor anteriori; dificultatea nu este calibrată față de concurs, iar indicele de pregătire nu prezice rezultatul.
