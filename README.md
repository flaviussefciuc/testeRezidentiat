# TesteRezidentiat · Rezi

Aplicație Angular SPA în limba română pentru pregătirea concursului de rezidențiat, domeniul Medicină.

**Aplicație:** https://testerezidentiat.vercel.app

## Funcționalități

- 245 de grile active, inclusiv 60 de sepsis, electroliți și terapie intensivă revizuite pe textul bibliografiei furnizate, 39 de capitole din tematica 2026, explicații și resurse.
- Antrenament filtrat pe capitole și recapitularea răspunsurilor greșite.
- Simulare: 200 de întrebări distincte, 50 CS + 150 CM, 4 ore, maximum 950 de puncte.
- Istoric, evoluție săptămânală, punctaj pe capitole, export JSON.
- Conturi Supabase și sincronizarea rezultatelor finalizate între dispozitive.
- Mod vizitator și reluarea testului în același browser; rezultatele vizitatorului rămân separate de cont.

## Dezvoltare

Node.js 24. Copiază `.env.example` în `.env.local` și configurează URL-ul Supabase și cheia publică, apoi:

```sh
npm ci
npm start
npm run check
```

`npm test` verifică punctajul, compoziția examenului, integritatea băncii și statisticile. `npm run build` produce SPA-ul în `dist/rezidentiat/browser`.

## Supabase și Vercel

Migrarea din `supabase/migrations/202609110001_attempts.sql` creează rezultate izolate prin RLS pentru fiecare utilizator. Sunt permise numai citirea și inserarea propriilor rezultate. Cheile secrete nu sunt incluse în SPA.

Configurează `SUPABASE_URL` și `SUPABASE_PUBLISHABLE_KEY` în Vercel. În Supabase → Authentication → URL Configuration, setează Site URL la `https://testerezidentiat.vercel.app` și adaugă `https://testerezidentiat.vercel.app/cont` în Redirect URLs pentru confirmări și recuperarea parolei. Livrarea mesajelor către utilizatori externi necesită un furnizor SMTP configurat conform cerințelor Supabase.

`node scripts/verify-cloud.mjs` verifică autentificarea, sincronizarea, reîncercarea unei inserări și izolarea datelor cu două conturi temporare, eliminate la final. Necesită o cheie secretă de server în mediul local și nu se execută în browser.

```sh
npx vercel deploy --prod
```

## Conținut și limite

[Tematica oficială 2026](https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf) și resursele anilor anteriori sunt accesibile în aplicație. Grilele sunt originale, redactate cu ajutorul AI, nu au validare medicală editorială și nu acoperă exhaustiv bibliografia. Revizuirea înlocuiește cele 15 grile inițiale de sepsis, electroliți și terapie intensivă cu 60 de itemi având explicații pentru fiecare opțiune și pagini de referință. Istoricul păstrează versiunile originale. Celelalte capitole sunt încă în curs de revizuire, iar obiectivul de 800 de întrebări suplimentare nu este finalizat. Procesul este descris în [documentația editorială](docs/question-quality.md). Formatul și punctajul urmează metodologia anilor anteriori; dificultatea nu este calibrată față de concurs.
