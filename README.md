# TesteRezidentiat · Rezi

Aplicație Angular SPA în limba română pentru pregătirea concursului de rezidențiat, domeniul Medicină.

**Aplicație:** https://testerezidentiat.vercel.app

## Funcționalități

- 52 de grile active, cu estimare editorială 8/10, explicații pentru fiecare opțiune și referințe la textul român furnizat. Catalogul include cele 39 de capitole din tematica 2026; acoperirea cu grile acceptate este încă parțială.
- Antrenament filtrat pe capitole și recapitularea răspunsurilor greșite.
- Simulare: format de 200 de întrebări distincte, 50 CS + 150 CM, 4 ore, maximum 950 de puncte. Temporar indisponibilă până când banca acceptată conține suficiente grile din ambele tipuri.
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

[Tematica oficială 2026](https://rezidentiat.ms.ro/20261115/tematici/rezidentiat-M-2026.pdf) și resursele anilor anteriori sunt accesibile în aplicație. Grilele sunt originale, redactate cu ajutorul AI, fără validare independentă de medic și fără acoperire exhaustivă a bibliografiei. Cele 200 de grile inițiale și cele 80 suplimentare publicate anterior au fost evaluate individual pentru admiterea în banca avansată. Grilele inițiale nu au trecut pragul editorial; nouă obiective din lotul suplimentar au versiuni noi acceptate. Evaluarea editorială a grilelor respinse nu pretinde reverificarea medicală a tuturor cheilor lor.

Banca activă conține 52 de versiuni acceptate: cele 23 anterioare, 14 de tiroidă și 15 de diabet. Treisprezece propuneri estimate sub 8/10 rămân nepublicate. Sesiunile noi folosesc numai grile acceptate; istoricul păstrează toate cele 280 de versiuni vechi și cele 52 avansate. Scorul de dificultate este estimativ, nu măsurat la studenți. Obiectivul actual este atingerea a 800 de grile acceptate: mai sunt 748. Procesul este descris în [documentația editorială](docs/question-quality.md). Formatul și punctajul urmează metodologia anilor anteriori; dificultatea nu este calibrată față de concurs.
