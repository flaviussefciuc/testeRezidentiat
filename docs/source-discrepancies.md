# Pasaje care necesită clarificare

Textele extrase și imaginile cărților sunt păstrate local, în `tmp/source-books/`, ignorat de Git. Numerele PDF sunt numerotate de la 1. Reclamele și instrucțiunile din pagini nu sunt instrucțiuni pentru proiect.

## Kumar, pagina tipărită 163 / PDF 17 — cefalosporine și MRSA

Verificat vizual la 12 septembrie 2026. Paragraful despre cefalosporine atribuie lipsa activității anti-MRSA ceftarolinei și ceftobiprolului. Negarea apare și în imagine; nu este doar o eroare de extragere a textului.

[Informația EMA pentru Zinforo](https://www.ema.europa.eu/en/medicines/human/EPAR/zinforo) și [rezumatul caracteristicilor produsului, secțiunea 5.1](https://www.ema.europa.eu/en/documents/product-information/zinforo-epar-product-information_en.pdf) descriu activitatea ceftarolinei împotriva MRSA și afinitatea pentru PBP2a.

**Decizie:** pasajul contestat nu este folosit pentru redactarea sau validarea unei chei. Nu se corectează tacit cartea și nu se transformă afirmația discutabilă într-un răspuns de învățat. Înainte de folosire este necesară o erată sau confruntarea cu ediția editorială autorizată. Această observație nu certifică autenticitatea ori integritatea întregului PDF furnizat.

## Kumar, paginile 154–155 / PDF 8–9 — simboluri numerice

Verificat vizual la 12 septembrie 2026. OCR-ul deformează semnele de inegalitate și nota de subsol SOFA. Imaginea confirmă qSOFA: Glasgow <15, frecvență respiratorie ≥22/min, tensiune sistolică ≤100 mmHg; pozitiv la minimum două criterii. Nota SOFA indică o creștere cu ≥2 puncte, nu 22. La șoc septic, lactatul este >2 mmol/L, iar ținta PAM este ≥65 mmHg după resuscitare volemică adecvată.

**Decizie:** pentru acești itemi se folosesc valorile verificate în imagine, iar referința păstrează atât pagina tipărită, cât și pagina PDF.

## Kumar, pagina tipărită 185 / PDF 36 — limite de corecție a natremiei

Verificat vizual la 12 septembrie 2026. Limita de creștere în 48 de ore din paragraful despre debutul acut diferă de cea din Cadranul 9.14 de pe aceeași pagină. Inconsecvența este prezentă în imagine. Nu sunt preluate aceste valori în întrebări. Itemii privind adaptarea cerebrală și abordarea în funcție de volemie folosesc pasajele necontradictorii și nu prescriu viteze de corecție.

## Kumar, paginile tipărite 195–202 — gol de sursă

Aceste pagini de echilibru acido-bazic apar în tematica 2026, dar nu au fost localizate în extrasul primit. Secvența PDF 23–41 corespunde p. 172–190; PDF 42 începe cu p. 224. Nu se completează golul prin citarea unor pagini care nu au fost consultate. Extinderea întrebărilor hidro-electrolitice folosește numai p. 172–190.

## Tiroidă și diabet — 13 septembrie 2026

- Kumar: pagina PDF 95 se încheie la p. 618, iar PDF 96 începe la p. 621. P. 619 nu este disponibilă în extras și nu este citată de grile noi.
- P. 613: se evită transformarea unui TSH crescut izolat în diagnostic complet fără interpretarea fT4/contextului și folosirea unor ținte de sarcină generale ca reguli actuale.
- P. 617 și 622: se evită formulările generale privind siguranța oncologică a radioiodului, schimbarea antitiroidianului după reacții severe, profilaxia MEN2 fără context genetic și tratamentul limfomului tiroidian.
- P. 709: efectele incretinelor sunt prezentate colectiv; nu se atribuie automat fiecărui hormon toate efectele asupra glucagonului, golirii gastrice și sațietății.
- P. 710: textul diagnosticului precizează «mai mare sau egal», în timp ce unele simboluri din casete sunt extrase diferit. Întrebările folosesc valori aflate clar în interiorul intervalelor și diferențiază criteriul glicemic de confirmarea diagnosticului.
- P. 717–720: nu se folosesc ca barem actual autorizarea SGLT2 în tipul 1, lipsa formulărilor orale GLP-1, contraindicațiile generale pentru metformin ori afirmația că toate ghidurile cer aceeași primă linie. Întrebările acceptate din aceste pagini testează mecanismele și distincțiile susținute de text.

## Complicații diabetice — verificare suplimentară

- P. 721: nu se preia drept durată de viață eritrocitară mențiunea de aproximativ șase săptămâni din explicația HbA1c și nu se folosesc duratele de purtare sau întârzierile unor senzori ca proprietăți universale actuale.
- P. 722–723: acetona este un corp cetonic, dar nu produce acidoză precum acetoacetatul și β-hidroxibutiratul. Se evită formularea colectivă că toți corpii cetonici sunt acizi tari. Formularea despre insulină care ar accentua hiperpotasemia este contradictorie; p. 724 descrie corect captarea celulară a potasiului după insulină.
- P. 724–725: nu se folosesc bareme de tratament din casetă unde administrarea inițială a potasiului diferă de textul narativ. Nici pragul tipărit pentru hipotermie și nici pH-ul OCR din tabel nu sunt folosite drept răspunsuri.
- P. 728: tabelul verificat vizual plasează hemoragia în vitros la retinopatia proliferativă; fibroza și dezlipirea prin tracțiune sunt avansate. S-a corectat explicația proiectului 029 înainte de publicare. Nu se utilizează afirmația generală că edemul macular nu poate fi observat oftalmoscopic.
- P. 729–732: se evită formularea despre țintirea directă a vaselor noi cu laser, sensul invariabil al schimbării refracției, pareza diabetică de nerv III obligatoriu nedureroasă și tratamentele generale pentru gastropareză fără verificare suplimentară. Aceste afirmații nu susțin cheia niciunui item nou.

## Remedierea din 24 septembrie 2026 — erori de citare corectate la rescriere

Fiecare temă rescrisă (versiunile `-v2`) a fost confruntată din nou cu paginile citate. Se consemnează aici erorile găsite în versiunile retrase (păstrate neschimbate în `src/app/bank/retired/`) și corecția aplicată.

### Hemostază (Lawrence, cap. 4)
- `hemostaza-adv-020` și `hemostaza-adv-021`: citau p. 42 (PDF 16), însă paragrafele «Cazuri particulare» (sarcina, afecțiunile hepatice și renale) sunt pe p. 43 (PDF 17). Cheile erau corecte; versiunile `-v2` citează p. 43.
- Celelalte 29 de itemi: cheia și justificările au fost confirmate de textul p. 39–45. Nu s-au găsit erori de conținut.

### Esofag (Lawrence, cap. 12)
- Nu s-au găsit chei greșite în cei 86 de itemi confruntați cu p. 140–142 și 151–164.
- Retrase fără înlocuitor (26): `esofag-adv-013` și `-014` testau legendele figurilor Nissen/Collis de pe p. 151, care aparțin secțiunii BRGE. Lista din tematică pentru capitolul 12 nu include BRGE, iar figurile sunt trimiteri din afara intervalului. Alți 24 de itemi erau parafraze ale aceluiași obiectiv: 003, 019, 029, 033, 034, 036, 040, 043, 052, 061, 064, 065, 067, 070, 075, 077, 078, 079, 080, 081, 083, 084, 085, 086.

### Hernii (Lawrence, cap. 11)
- Nu s-au găsit chei greșite în cei 64 de itemi confruntați cu p. 125–137.
- P. 129 este contradictorie: fraza anterioară spune că plasele «biologice și absorbabile» sunt mult mai puțin susceptibile la infecție, dar fraza următoare recomandă în contaminare materialele «biologice și non-absorbabile», probabil o eroare de traducere. Versiunile `-v2` folosesc doar prima afirmație (biologice/absorbabile, mai puțin susceptibile la infecție) și nu construiesc cheia pe formularea «non-absorbabile».
- P. 134 precizează că detaliile tehnice ale procedeelor tisulare «nu sunt solicitate la examene standard». Itemul `hernii-adv-040` (rândurile Bassini/Shouldice din Tabelul 11.1) a fost retras. `-019` a fost păstrat doar pentru distincția esențială: McVay este procedeul tisular folosit și în hernia femurală.
- Retrase fără înlocuitor și ca parafraze/itemi fără conținut medical: 027 (dublura lui 060), 044 (organizarea capitolului), 061 (dublura lui 015), 062 (inclus în 013), 063 (dublura lui 003), 064 (afirmații despre examene, nu conținut medical).

### Sepsis (Kumar, cap. 8)
- **Cheie greșită corectată:** `sepsis-adv-003` punea «temperatura timpanică <36°C» printre criteriile de **risc înalt** din Cadranul 8.3 (NICE). În cadran, temperatura timpanică <36°C este criteriu de **risc moderat spre crescut**; coloana de risc înalt nu are criteriu de temperatură. `sepsis-adv-003-v2` o tratează ca distractor.
- P. 155: pragul NEWS pentru solicitarea ajutorului apare în extras ca «scor NEWS total de 2 din 5 sau mai mare», probabil o eroare OCR/de traducere. Nu se construiește nicio cheie pe acest prag; se folosește doar NEWS 2 ≥5 ca prag de screening (p. 154).
- P. 159 față de p. 167: terapia adjuvantă (rifampicină, acid fusidic) apare printre parametrii de evaluat în infecția severă cu S. aureus, dar p. 167 citează studiul britanic fără beneficiu clinic. Versiunea veche `-021` avea opțiunea «terapia adjuvantă este inutilă» marcată falsă. `-v2` nu mai testează această afirmație contradictorie. `-051-v2` testează doar faptul explicit că studiul nu a arătat beneficiu.
- Retrase fără înlocuitor (parafraze): 005, 009, 018, 059, 068, 069, 075.

### Stomac și duoden (Lawrence, cap. 13)
- Nu s-au găsit chei greșite în cei 96 de itemi confruntați cu p. 167–168, 172–174 și 179–191.
- P. 187: legenda Figurii 13-13 numește bypass-ul gastric «cea mai frecventă procedură bariatrică», în timp ce textul și Figura 13-11 arată gastrectomia longitudinală pe primul loc (125.496 față de 40.392 în 2016). Versiunile `-v2` urmează textul și datele numerice.
- P. 180–181: textul plasează dumpingul precoce «la aproximativ 15 minute» și pe cel tardiv «la 3 ore», iar Tabelul 13-2 dă 15–30 de minute, respectiv 1–3 ore. Itemii folosesc intervalele din tabel, compatibile cu textul.
- P. 182: proporția pacienților cu scaune dese după reconstrucție este ilizibilă în extras («unul din panu»); nu se folosește ca răspuns.
- Retrase fără înlocuitor (trivia sau parafraze): 015, 029, 030, 055, 068, 071, 073, 075, 083, 088, 091, 092.

### Reumatologie (Kumar, cap. 18)
- **Paginare greșită corectată:** extrasul nu conține p. 455–456, deci p. 457–459 (LES) sunt PDF 85–87, nu PDF 87–89. Vechea formulă `p-370` lega p. 457 de PDF 87 (conținutul p. 459) și p. 459 de PDF 89 (capitolul de endocrinologie). `reumatologie-adv-038` (VSH/PCR în LES) și `-088` (tratament, prognostic, sarcină) citau p. 457, dar informația se află pe p. 459. Versiunile `-v2` citează p. 459, cu formula `p-372` pentru p. ≥457.
- P. 453: losartanul este descris ca «antagonist al receptorilor angiotensinei I», o formulare imprecisă (este antagonist al receptorului AT1 al angiotensinei II). Itemul `-062-v2` testează doar efectul uricozuric, fără a folosi această formulare.
- LES: tot conținutul folosit (inclusiv sarcina și anticorpii anti-Ro/anti-La) precede titlul «Sindromul antifosfolipidic» de pe p. 459, conform limitei din tematică.
- Retrase ca parafraze sau trivia de dozare: 004, 013, 015, 075, 085.

### Tromboembolism (Kumar, cap. 29)
- Nu s-au găsit chei greșite în cei 88 de itemi confruntați cu p. 1001–1017 (ferestrele Wells: chirurgie 12 săptămâni pentru TVP și 4 săptămâni pentru EP; valorile PESI verificate în Cadranul 29.5).
- `tromboembolism-adv-030` (formularea CS/CM semnalată în raportul din 2026-09-23) a fost retras fără înlocuitor, fiind dublura lui `-029` (fondaparinux); problema de formulare dispare odată cu retragerea.
- Scorul Wells pentru EP (Cadranul 29.4) include și cancerul activ; `-071-v2` îl folosește ca răspuns corect.
- Retrase fără înlocuitor (parafraze/dubluri): 030, 036, 042, 046, 047, 049, 050, 052, 053, 065, 073, 074, 076, 080, 089, 090.

### Căile biliare (Lawrence, cap. 16)
- Nu s-au găsit chei greșite în cei 66 de itemi confruntați cu p. 242–255.
- P. 243: fraza «Calculii pigmentari conțin adesea suficient calciu cât să devină radioopaci» se referă la calculii pigmentari în general, nu doar la cei bruni. Vechiul `-026` o atribuia explicit calculilor bruni. Itemul a fost retras, iar `-009-v2` nu folosește această atribuire.
- P. 250: proporția ileusului biliar din ocluzii apare în extras ca «<!%» (OCR). Valoarea «sub 1%» este păstrată, dar expresiile citate folosesc alte fragmente, lizibile.
- Retrase fără înlocuitor (dubluri): 026 (dublura lui 009), 052 și 053 (dublurile lui 031), 063 (inclus în 002).

### Evaluarea și managementul perioperator (Lawrence, cap. 1)
- Nu s-au găsit chei greșite în cei 40 de itemi confruntați cu p. 1–12.
- **Contradicție internă:** p. 2 recomandă oprirea fumatului «cu minim 6 săptămâni» înaintea intervenției, pentru reducerea complicațiilor pulmonare; p. 10 recomandă, pentru atelectazie, oprirea fumatului «cu 8 săptămâni înainte». Vechiul `-007` testa valoarea de 8 săptămâni. `-007-v2` nu mai construiește cheia pe niciuna dintre aceste valori.
- P. 5: în extras, doza din Tabelul 1-3 apare ca «SO mg» (OCR pentru 50 mg). Valoarea de 50 mg este confirmată de logica tabelului (25 mg la 8 ore ulterior).
- Retras fără înlocuitor (trivia numerică izolată): 034 (echivalentul de 36 mg hidrocortizon/zi din sindromul Cushing).

### Traumatologie (Lawrence, cap. 9)
- Nu s-au găsit chei greșite în cei 105 itemi confruntați cu p. 87–106.
- P. 103: textul spune că valorile IGB «≥0,9» sugerează leziune arterială sau ocluzie. Semnul este inversat, probabil prin OCR sau traducere: sunt patologice valorile <0,9. Nicio cheie nu folosește acest prag; `-104-v2` testează doar valoarea normală (1).
- P. 98–99: textul afirmă că leziunile splenice sunt clasificate «de la I la VI», dar Tabelul 9-5 are doar gradele I–V. Itemii folosesc doar pragurile din tabel.
- P. 100: «Contuziile renale necesită rareori intervenție chirurgicală, cu excepția cazurilor în care este lezată uretra sau pelvisul renal»: «uretra» este probabil o eroare de traducere pentru «ureterul». Nicio cheie nu folosește această frază.
- P. 90: textul trimite scorul Glasgow la «Tabelul 9-1», dar scala este în Tabelul 9-2. Itemii citează Tabelul 9-2.
- **Contradicție între itemii vechi:** `-012` marca drept fals «cateter 22 sau 24 gauge», iar `-077` marca drept adevărat «16 sau 18 G». P. 87 confirmă 16 sau 18 gauge. `-012` a fost retras ca dublură, iar `-077-v2` păstrează valoarea corectă.
- Retrase fără înlocuitor (dubluri sau trivia): 012, 013, 014, 017, 020, 023, 037, 046, 053, 061, 076, 080, 083, 084, 087, 088, 089, 091, 092, 093, 094, 095, 097, 099, 100, 102.

### Intestinul subțire și apendicele (Lawrence, cap. 14)
- **Cheie greșită corectată:** `intestin-adv-050` marca drept corectă afirmația «Apendicectomia se evită, cecul rămânând în fosa iliacă dreaptă». P. 210 spune explicit că în volvulusul de mezenteron «de obicei se efectuează și apendicectomia», deoarece apendicele ar rămâne în cadranul superior stâng, împreună cu cecul. `-050-v2` o tratează ca adevărată, iar poziția cecului în FID ca distractor.
- **În afara tematicii:** tematica 2026 acoperă p. 193–199 «până la "Boala Crohn a intestinului subțire"», apoi p. 204–206 doar pentru «Ischemia mezenterică acută». Boala Crohn a intestinului subțire (finalul p. 199, p. 204 până la titlul «Ischemia mezenterică acută») este deci exclusă. Au fost retrași fără înlocuitor: 013, 014, 041, 042, 043, 060.
- P. 211: sindromul intestinului scurt se află între «Malrotația» și «Bolile apendicelui», în intervalul de pagini 209–211 al tematicii. Itemul `-022` a fost păstrat pe baza regulii intervalului de pagini.
- P. 211: pragul de 180 cm apare în extras ca «<I 80 cm» (OCR). Valoarea este confirmată de logica pragurilor NPT (60 cm / 100 cm).
- Retrase fără înlocuitor (dubluri sau trivia): 025 (dublura lui 006), 063 (a treia intervenție, trivia), 067 (proporția de 2%, trivia), 069 (inclus în 047).

### Bolile sistemului vascular (Lawrence, cap. 26)
- Nu s-au găsit chei greșite în cei 66 de itemi confruntați cu p. 520–527 și 534–541.
- **Conținut la marginea intervalelor din tematică:** p. 520 începe cu anevrismele femurale și disecția de aortă, înaintea titlului «Boala arterială periferică». P. 534 începe cu boala vertebro-bazilară (furtul subclavicular), înaintea titlului «Bolile venelor». P. 541 se încheie cu «Traumatismele vasculare». Tematica indică doar intervalele de pagini (520–527, 534–541), fără limite de tip «până la», așa că itemii sunt păstrați după regula intervalului de pagini.
- Retrase fără înlocuitor (dubluri sau trivia): 044 (inclus în 003), 047 (inclus în 048), 051 (valoare numerică dintr-o figură), 054 (frecvența sondei Doppler, trivia).

### Epidemiologie și etică (Sinopsis, cap. 15)
- Nu s-au găsit chei greșite în cei 24 de itemi confruntați cu p. 333–338.
- P. 335: nota «OR dă estimarea cea mai precisă a AR în cazurile de boli rare» folosește «AR», deși textul definește raportul cotelor ca estimator al **riscului relativ** (RR) la prevalență scăzută. «AR» este probabil o eroare de traducere. `-018-v2` testează doar formularea din text (OR estimează RR dacă prevalența este scăzută).
- P. 338: criteriile (1)–(5) ale morții cerebrale sunt paginate în extras sub «Moartea cardiacă». Conținutul lor (reflexe de trunchi, apnee, excluderea hipotermiei) este clar al morții cerebrale, iar itemii îl tratează ca atare.
- Retrase fără înlocuitor (unite într-un singur item CM, `-012-v2`): 015 (prevalența), 020 (rata de fatalitate) și 022 (inclus în `-017-v2`).

### Terapie intensivă (Kumar, cap. 10)
- Nu s-au găsit chei greșite în cei 37 de itemi confruntați cu p. 224–233.
- **Contradicție internă:** Cadranul 10.13 indică pentru ventilația protectivă pulmonară un volum curent de 6–8 ml/kg și o presiune maximă în căile respiratorii <35–40 cmH2O. Textul de pe p. 230 indică 4–8 ml/kg (ideal 6 ml/kg) și o presiune de platou ≤30 cmH2O. `-028-v2` folosește valorile din text.
- P. 224: Cadranul 10.12, terapia vasodilatatoare și suportul mecanic al miocardului se află pe p. 224 înaintea titlului «Insuficiența respiratorie», care deschide intervalul p. 224–232 din tematică. Itemii 011, 023, 024 și 031 sunt păstrați după regula intervalului de pagini.
- Retrase fără înlocuitor (dubluri): 010 (versiunea din `advanced-revisions.ts`, dublura lui 037) și 022 (inclus în 024 și 031).

### Dermatologie (Sinopsis, cap. 9)
- Nu s-au găsit chei greșite în cei 42 de itemi confruntați cu p. 196–209.
- Retrase fără înlocuitor (dubluri sau trivia numerică): 015 (marginea de 0,5 cm, inclusă în `-042-v2`), 031 (inclus în `-016-v2`), 039 (inclus în `-027-v2`), 040 (inclus în `-029-v2`).

### Infecțiile chirurgicale (Lawrence, cap. 8)
- Nu s-au găsit chei greșite în cei 45 de itemi confruntați cu p. 75–84.
- P. 77: textul spune că febra medicamentoasă «este rar întâlnită» și se ia în calcul doar după excluderea altor cauze, iar Tabelul 8-4 o plasează «întotdeauna, cu condiția să fie excluse alte etiologii». Formulările sunt compatibile. Itemii testează doar raritatea ei, ca diagnostic de excludere.
- Retrase fără înlocuitor (dubluri sau trivia numerică): 009 (proporția de 5% a infecțiilor nosocomiale), 014 (inclus în 038), 027 (inclus în 003), 045 (inclus în 013).

### Endocrinologie — tiroida (Kumar, cap. 21)
- Nu s-au găsit chei greșite în cei 50 de itemi confruntați cu p. 611–618 și 621–622.
- Limita «până la Gușa»: p. 619–620 lipsesc din extrasul sursă. Tot conținutul de pe p. 618 (orbitopatia, rezistența la hormonii tiroidieni, fătul și boala Graves maternă) precedă titlul «Gușa» și rămâne în tematică.
- P. 621: evaluarea nodulului (FNA, scintigrafie) și tratamentul gușii eutiroidiene se află după titlul «Gușa», dar pe o pagină inclusă în intervalul p. 621–622 al carcinomului. `-043-v2` este păstrat după regula intervalului de pagini.
- Retrase fără înlocuitor (dubluri sau trivia numerică): 007 (inclus în 045/034/047/048), 008 (inclus în 049), 009 (inclus în 050), 013 (inclus în 041), 042 (pragul de 160/minut, trivia numerică), 051 (recapitulare de procente, inclusă în 039/054/038).

### Tulburările psihice (Sinopsis, cap. 14)
- Nu s-au găsit chei greșite în cei 52 de itemi confruntați cu p. 319–330.
- P. 321, caseta «Pasul următor» despre sindromul neuroleptic malign: tratamentul include «un agonist dopaminergic cum ar fi dantrolenul». Dantrolenul este un relaxant muscular, iar Tabelul 14-2 (p. 320) listează corect bromocriptina și amantadina ca agoniști dopaminergici, cu dantrolenul separat. Niciun item nu testează această formulare.
- Temele au fost redistribuite între ID-urile vechi, deoarece fiecare versiune nouă trebuie să înlocuiască un item retras: 005 → trăsăturile generale ale tulburărilor de personalitate, 030 → antipsihoticele atipice, 032 → diskinezia tardivă, 044 → tulburările factice, 047 → caseta SNM. Conținutul vechi al acestor ID-uri (dubluri: bipolar tip I, comorbiditățile și epidemiologia TOC, prazosinul, mecanismul litiului) este acoperit de alți itemi v2.
