import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-58;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('arsuri',10,pdfOffset,`arsuri-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const ARSURI_C=[
q(31,['Pielea poate fi lezată, potrivit capitolului, de:',
 ['Căldura directă de la flacără sau lichide fierbinți, contactul cu obiecte fierbinți sau substanțe corozive și curentul electric','Doar radiația ultravioletă, celelalte agenții fiind inofensive pentru epiderm','Numai lichidele sub 20°C, flacăra neproducând leziuni de profunzime','Curentul electric, fără implicarea substanțelor corozive','Un singur mecanism, clasificarea făcându-se după etiologie, nu după profunzime'],'A',108,'Fiziopatologia leziunilor din arsură — Agenți',
 'Recunoașterea listei de agenți (flacără, lichide, obiecte fierbinți, corozive, curent) și a clasificării după profunzime.',
 ['Textul enumeră căldura directă, contactul cu obiecte fierbinți sau corozive și curentul electric.','Agenții nu se limitează la ultraviolet.','Lichidele fierbinți, nu cele reci, sunt citate ca agenți.','Substanțele corozive sunt listate alături de curent.','Clasificarea se face după profunzimea injuriei, nu după un singur mecanism etiologic.']],
 8,'Reduce lista de agenți la ultraviolet sau lichide reci, deși capitolul deschide cu patru mecanisme distincte.',['lichidele fierbinţi','curentul electric']),

q(32,['Arsurile epidermice extensive, dincolo de aspectul clinic, se caracterizează prin:',
 ['Efecte fiziologice limitate, tratamentul suportiv constând în analgezice orale, hidratare orală și sulfați de neomicină topic pentru prevenția infecției','Vindecare în câteva zile, cu exfolierea epidermului lezat, fără cicatrice, deoarece cicatrizarea apare în derm','Arsurile solare, deși pot afecta straturi mai profunde, sunt adesea limitate la epiderm','Necesitatea resuscitării Consensus și a grefării de principiu','Formarea de escară avasculară uscată, cu retracție de tip garou'],'ABC',109,'Arsuri epidermice — Tratament suportiv',
 'Contrastarea tratamentului oral/topic al gradului I față de resuscitarea și grefarea rezervate leziunilor mai profunde.',
 ['Analgezicele orale, hidratarea orală și neomicina topică sunt explicit suportive.','Exfolierea în câteva zile și absența cicatricii (cicatrizarea e dermică) sunt citate.','Limitarea frecventă a arsurii solare la epiderm este enunțată.','Consensus și grefarea țin de arsurile profunde/întinse, nu de cele epidermice.','Escară avasculară și garoul definesc gradul III.']],
 8,'Mută resuscitarea Consensus și escara de grad III asupra arsurii epidermice, tratată doar suportiv.',['sulfatul de neomicină','analgezice orale']),

q(33,['Conform Tabelului 10-1, concentrația de COHb de 80–90% se asociază cu:',
 ['Deces într-o oră','Absența simptomelor, ca la fumătorul cu 0–10%','Cefalee moderată și dilatație a vaselor cutanate, ca la 10–20%','Comă și convulsii intermitente, fără deces, ca la 50–60%','Doar presiune la nivelul frunții, fără risc vital'],'A',111,'Tabelul 10-1 — Concentrații COHb',
 'Aplicarea rândului 80–90% (deces într-o oră), distinct de 0–10% asimptomatic și de 50–60% (comă).',
 ['Rândul 80–90% listează decesul într-o oră.','0–10% este fără simptome (până la 10% la fumători).','10–20% produce presiune frontală și cefalee moderată.','50–60% asociază comă și convulsii, nu decesul într-o oră.','Presiunea frontală aparține intervalului 10–20%.']],
 8,'Permutează decesul într-o oră (80–90%) cu pragurile asimptomatice sau de comă din același tabel.',['80-90','Deces într-o oră']),

q(34,['Terapia cu oxigen hiperbar (OHB) în intoxicația cu CO:',
 ['Oxigenul la trei atmosfere produce o PaO2 de 1.500 mm Hg, asigurând oxigen dizolvat imediat disponibil','Reduce timpul de înjumătățire a COHb de la 80 de minute (o atmosferă) până la aproximativ 20 de minute','Se ia în considerare când e nevoie de scădere mai rapidă a COHb, de obicei din cauza simptomelor neurologice acute','Înlocuiește resuscitarea volemică, personalul specializat nefiind necesar','Produce PaO2 de 80 mm Hg și prelungește timpul de înjumătățire la 1.500 de minute'],'ABC',111,'OHB — Trei atmosfere și PaO2',
 'Recunoașterea triadului 3 atm / 1.500 mm Hg / 80→20 minute, rezervat simptomelor neurologice acute.',
 ['Cifra 1.500 mm Hg la trei atmosfere este explicită.','Reducerea 80→20 minute este citată.','Indicația (simptome neurologice acute) este enunțată.','Textul cere personal/echipament și prioritate împreună cu resuscitarea volemică.','PaO2 și timpii sunt inversați față de paragraf.']],
 8,'Inversează PaO2 1.500 mm Hg cu 80 mm Hg și anulează prioritatea resuscitării alături de OHB.',['1.500','trei ahnosfere']),

q(35,['Un tânăr cu explozie de sticlă, la 45 de minute, are față cenușie și uscată, buze carbonizate, dar respiră normal. Conduita respiratorie imediată este:',
 ['Intubație profilactică, edemul facial/de căi putând progresa rapid în primele 24 de ore','Așteptarea colapsului căilor, intubația nazo-traheală fiind standardul actual','Oxigen pe mască fără evaluarea patenței, edemul neputând apărea fără fum','Bronhoscopie amânată 5 zile, leziunea superioară fiind doar chimică','Traheostomie de principiu, înaintea oricărei evaluări a căilor'],'A',111,'Arsuri de căi superioare — Intubație precoce',
 'Aplicarea intubației precoce înaintea edemului progresiv din primele 24 de ore, ilustrat de cazul cu explozie.',
 ['Figura și textul subliniază intubația profilactică înaintea colapsului.','Intubația nazo-traheală este descrisă ca actualmente rară.','Edemul facial masiv poate urma și arsurilor chimice/prin lichide, fără flacără sau fum.','Leziunea superioară este termică, nu chimică; evaluarea căilor e la bilanțul inițial.','Traheostomia nu este gestul imediat descris aici.']],
 8,'Amână intubația până la colaps, inversul explicit al cazului cu explozie și edem progresiv.',['Intubaţia orotraheală precoce','primele 24 de ore']),

q(36,['Oprirea procesului de ardere, înaintea oricărei măsuri terapeutice, include:',
 ['Stingerea flăcării cu apă, prin înăbușire sau prin rularea pacientului pe sol','Răcirea imediată cu apă rece a lichidelor vâscoase (smoală, plastice), care pot continua arderea','Diluarea rapidă și completă a chimicalelor caustice cu cantități mari de apă','Neabordarea victimei de electrocuție până la oprirea sursei de curent','Așezarea imediată a măștii de oxigen pe îmbrăcămintea care încă mocnește'],'ABCD',112,'Oprirea procesului de ardere',
 'Recunoașterea celor patru gesturi de stingere/decontaminare și a riscului de reaprindere prin masca de oxigen.',
 ['Apa, înăbușirea și rularea sunt listate pentru flacără.','Smoala/plasticele trebuie răcite imediat cu apă rece.','Causticele se diluează cu apă din abundență.','Sursa electrică trebuie oprită înainte de abord.','Textul avertizează că masca de oxigen poate reaprinde îmbrăcămintea mocnită.']],
 8,'Pune masca de oxigen pe hainele care mocnesc, riscul explicit din același paragraf de oprire a arderii.',['Oprirea procesului de ardere','chimicale toxice']),

q(37,['Resuscitarea inițială a arsului cu leziuni aparent majore cere:',
 ['Două linii intravenoase de calibru mare, cateter Foley și prelevare de sânge; calculul formal al lichidelor se amână până după evaluarea secundară','Un singur branul periferic, fără Foley, calculul Consensus făcându-se înaintea ABC','Acoperirea imediată cu creme antibiotice, înaintea evaluării secundare','Renunțarea la examenul fizic complet, arsura dramatică înlocuind bilanțul traumatic','Montarea de principiu a coloizilor înaintea oricărei linii venoase'],'A',112,'Evaluarea inițială — Linii, Foley, calcul amânat',
 'Secvența două linii de calibru mare + Foley + analize, cu amânarea calculului formal după evaluarea secundară.',
 ['Cele două linii, Foley-ul, analizele și amânarea calculului sunt explicite.','Calculul formal nu precede ABC-ul; se cer două linii.','Cremele antibiotice nu se aplică înaintea evaluării secundare.','Examenul fizic complet este imperativ, arsura putând masca alte leziuni.','Coloizii nu sunt prima linie de acces.']],
 8,'Inversează ordinea ABC versus calculul formal și acoperă plaga înaintea evaluării secundare.',['două linii intravenoase','cateter Foley']),

q(38,['Conform diagramei Lund și Browder, sunt adevărate afirmațiile:',
 ['Gâtul rămâne 2% din SCT la toate vârstele tabelate','Toracele anterior este 13% independent de vârstă','Coapsa crește de la 5½% la naștere la 9½% la adult','Capul crește de la 7% la naștere la 19% la adult','Organele genitale reprezintă 9% SCT, identic unui segment din regula lui 9'],'ABC',113,'Lund și Browder — Gât, torace, coapsă',
 'Aplicarea rândurilor invariabile (gât 2%, torace anterior 13%) și a creșterii coapsei cu vârsta, față de capul care scade.',
 ['Rândul „Gât” este 2 la toate coloanele.','Toracele anterior este 13 la toate vârstele.','Coapsa trece de la 5½ la naștere la 9½ la adult.','Capul scade de la 19 la naștere la 7 la adult, nu crește.','Organele genitale sunt 1%, nu 9%.']],
 8,'Inversează evoluția capului cu cea a coapsei și atribuie genitalelor 9% din regula lui 9.',['Gât 2','Torace ant. 13']),

q(39,['Criteriile 7–10 de transfer către centrul de arsuri (Tabelul 10-2) includ:',
 ['Arsuri la pacienți cu afecțiuni medicale preexistente ce pot complica managementul, prelungi recuperarea sau afecta mortalitatea','Arsuri și traumă concomitentă când leziunea de arsură are riscul cel mai mare; dacă trauma e imediat mai gravă, se stabilizează la traumă, apoi se transferă','Arsuri la copii din spitale fără personal calificat sau echipament necesar îngrijirii acestora','Pacienți ce vor necesita intervenții speciale de reintegrare socială, emoționale și de reabilitare','Arsura solară epidermică izolată, sub 5% SCT, la adultul fără comorbidități'],'ABCD',114,'Tabelul 10-2 — Criteriile 7–10',
 'Completarea criteriilor 1–6 deja uzitate cu comorbiditățile, trauma concomitentă, copilul din spital neechipat și reintegrarea.',
 ['Criteriul 7 (comorbidități) este tabelat.','Criteriul 8 (traumă concomitentă și triajul regional) este citat.','Criteriul 9 (copii fără resurse) este explicit.','Criteriul 10 (reintegrare/reabilitare) închide lista.','Arsura solară epidermică nu figurează ca indicație de centru.']],
 8,'Extinde transferul asupra arsurii solare și testează rândurile 7–10, omise față de pragul de 10% SCT.',['reintegrare socială','spitalele fără personal']),

q(40,['Debitul urinar folosit ca obiectiv al resuscitării Consensus este de:',
 ['≥30 mL/oră la adulți și 1–1,5 mL/kg/oră la copii','100 mL/oră la orice ars termic, identic țintei din mioglobinuria electrică','0,5 mL/kg/oră la adult, fără prag absolut','5 mL/oră, prag sub care se introduce de rutină furosemid','2–4 mL/oră, independent de vârstă'],'A',114,'Formula Consensus — Ținta de diureză',
 'Diferențierea țintei Consensus (≥30 mL/oră adult; 1–1,5 mL/kg/oră copil) de 100 mL/oră din rabdomioliza electrică.',
 ['Cele două praguri sunt enunțate explicit.','100 mL/oră ține de mioglobinuria electrică, nu de Consensus.','0,5 mL/kg/oră subestimează ținta adultului.','Furosemidul nu este indicatorul de diureză.','2–4 mL apar în formula de volum, nu ca diureză-țintă.']],
 8,'Substituie 30 mL/oră (adult Consensus) cu 100 mL/oră (electrocuție), două ținte din același capitol.',['30 mL/oră','1-1,5 mL/kg/oră']),

q(41,['Un bărbat de 100 kg, ars 65% SCT (membre inferioare, torace, membre superioare). Conform exemplului Consensus:',
 ['În a doua și a treia tură de 8 ore se administrează câte ¼ din volumul calculat pe 24 de ore','Minimul (2 mL/kg/%SCT) este 13.000 mL/24 ore, adică 812 mL/oră în primele 8 ore','Maximul (4 mL/kg/%SCT) este 26.000 mL/24 ore, adică 1.625 mL/oră în primele 8 ore','Jumătate din volum se dă în ultimele 8 ore, prima tură primind doar ¼','Coloizii înlocuiesc Ringerul din prima oră, formula fiind un volum fix'],'ABC',115,'Tabelul 10-3 — Exemplul 100 kg / 65% SCT',
 'Aplicarea fracțiilor ½ apoi ¼+¼ și a cifrelor 13.000/812 versus 26.000/1.625 din exemplul tabelat.',
 ['Fracția de ¼ în turile 2 și 3 este principiul C al exercițiului.','Minimul 13.000 mL și 812 mL/oră sunt calculate în exemplu.','Maximul 26.000 mL și 1.625 mL/oră completează intervalul.','Jumătatea se dă în primele 8 ore, nu în ultimele.','Ringerul, nu coloizii, este soluția inițială; formula se ajustează.']],
 8,'Inversează ½ din primele 8 ore cu ¼ și permutează minimul 812 mL/oră cu un volum coloid fix.',['13.000 ml/24 ore','1.625 ml/oră']),

q(42,['În arsura inhalatorie severă, resuscitarea și SDRA se caracterizează prin:',
 ['Pacienții cu leziuni inhalatorii necesită frecvent volume mai mari de fluid, din cauza pierderilor oculte pulmonare','SDRA se diagnostichează prin aspect de „geam mat” pe radiografia toracică, cu agravarea insuficienței respiratorii; ventilatoarele se setează pe PEEP și volume curente mici, pentru a minimiza barotrauma','Formula Consensus se abandonează, fluidele fiind oprite pentru a preveni orice edem','SDRA se tratează prin creșterea volumului curent, PEEP-ul fiind contraindicat','Leziunea inhalatorie reduce, nu crește, necesarul de cristaloizi'],'AB',116,'Suport respirator — Inhalare și SDRA',
 'Contrastarea necesarului crescut de fluide în inhalare cu riscul de a agrava SDRA prin resuscitare excesivă și cu strategia PEEP/volume mici.',
 ['Pierderile oculte și volumele mai mari sunt explicite.','„Geam mat”, PEEP și volumele curente mici sunt citate.','Formula se ajustează, nu se abandonează.','Volumele mici, nu crescute, minimizează barotrauma.','Necesarul de fluide crește, nu scade.']],
 8,'Oprește fluidele în inhalare și crește volumul curent, inversul titrării și al strategiei anti-barotraumă.',['geam mat','volume curente mici']),

q(43,['Acumularea masivă de fluide în țesuturile abdominale la arsul resuscitat poate produce:',
 ['Sindrom de compartiment abdominal ce necesită laparotomie pentru scăderea compresiei intra-abdominale','Doar escarotomie toracică, laparotomia fiind superfluă','Fasciotomie de antebraț, abdomenul neputând dezvolta hipertensiune de compartiment','Oprirea infuziei și diuretic de primă intenție, fără decompresie chirurgicală','Paracenteză diagnostică, fără indicație de laparotomie'],'A',116,'Sindrom de compartiment abdominal post-resuscitare',
 'Recunoașterea laparotomiei decompresive când edemul abdominal produce sindrom de compartiment, distinct de escarotomia toracică.',
 ['Laparotomia pentru scăderea compresiei intra-abdominale este explicită.','Escarotomia toracică tratează compresia respiratorie, nu hipertensiunea abdominală de compartiment.','Fasciotomia de membru nu decomprima abdomenul.','Decompresia chirurgicală, nu diureticul izolat, este gestul citat.','Paracenteza nu înlocuiește laparotomia descrisă.']],
 8,'Înlocuiește laparotomia decompresivă cu escarotomie toracică sau diuretic, două gesturi din același paragraf de edem.',['sindrom de compartiment abdominal','laparotomie']),

q(44,['Excizia fascială, comparativ cu cea tangențială, se caracterizează prin:',
 ['Îndepărtarea cu bisturiul sau electrocauterul a pielii și a țesutului subcutanat până la fascia subiacentă','Este ușor de realizat, relativ fără sângerare și cu rată bună de prindere a grefei, dar mutilantă, cu rigidizare articulară și pierderea mobilității','Majoritatea chirurgilor așteaptă completarea resuscitării lichidiene înainte de etapa excizională, pentru a stabiliza volumul intravascular','Produce sângerare semnificativă, dar salvează elementele dermice intacte, identic tangențialei','Se începe în prima oră, înaintea oricărei resuscitări, sângerarea fiind neglijabilă ca impact volemic'],'ABC',117,'Excizia fascială versus tangențială',
 'Contrastarea fascialei (ușoară, puțin sângerândă, mutilantă) cu amânarea exciziei până după resuscitare.',
 ['Planul până la fascia este definiția.','Avantajele tehnice și costul funcțional/cosmetic sunt citate.','Așteptarea până la încheierea resuscitării este explicită.','Sângerarea semnificativă și salvarea dermului definesc tangențiala, nu fasciala.','Excizia nu precede resuscitarea; sângerarea intraoperatorie poate compromite volumul.']],
 8,'Atribuie fascialei sângerarea și salvarea dermului ale tangențialei și o programează înaintea resuscitării.',['excizia fasciată','tangenţială'],[116]),

q(45,['După controlul infecției de plagă, complicațiile infecțioase actuale la arsul spitalizat includ:',
 ['Pneumonia, actualmente una dintre cele mai comune și problematice infecții, favorizată de bronșiectazii și dopuri de mucus din leziunea inhalatorie','Tromboflebita septică a venelor periferice sau centrale cateterizate','Sepsisul de plagă ca cea mai comună cauză actuală de deces în centrele de arși, pneumonia fiind eradicată','Infecția urinară fiind imposibilă, Foley-ul protejând de colonizare','Flora endemică de centru dispărând după un singur topic cu argint'],'AB',118,'Infecții actuale — Pneumonie și tromboflebită',
 'Recunoașterea pneumoniei ca infecție dominantă actuală și a tromboflebitei de cateter, după ce sepsisul de plagă a devenit rar.',
 ['Pneumonia ca infecție comună/problematică și mecanismul inhalator sunt explicite.','Tromboflebita septică pe vene cateterizate este listată.','Sepsisul de plagă a devenit rar în centre; pneumonia l-a înlocuit ca problemă comună.','Infecțiile de tract urinar sunt menționate ca posibile.','Populațiile microbiene endemice sunt greu de eradicat.']],
 8,'Readuce sepsisul de plagă ca principală cauză actuală de deces, inversul ierarhiei post-excizie.',['Pneumonia este actualmente','Tromboflebita septică']),

q(46,['Cele trei clase de substanțe chimice care lezează pielea se deosebesc astfel:',
 ['Alcalinele se combină cu proteinele formând proteinate alcalini cu ioni de hidroxid, care pătrund mai profund','Acizii degradează proteinele prin hidroliză, cu escară mai puțin profundă decât alcalinele, plus leziune termică prin căldura de contact','Compușii organici (produse petroliere, fenoli) acționează ca solvenți ai grăsimii, dizolvând membranele celulare','Toate cele trei clase prezintă risc de absorbție și toxicitate sistemică, atât pentru pacient, cât și pentru personal','Acizii pătrund mai profund decât alcalinele, proteinatele alcaline rămânând superficiale'],'ABCD',119,'Arsuri chimice — Alcali, acizi, organici',
 'Contrastarea pătrunderii alcaline (proteinate/hidroxid) cu escara mai puțin profundă a acizilor și cu solventul lipidic al organicelor.',
 ['Mecanismul alcalin și pătrunderea profundă sunt explicite.','Hidroliza, escara mai puțin profundă și căldura de contact definesc acizii.','Solvenții lipidici (petroliere, fenoli) definesc organicii.','Riscul sistemic pentru victimă și echipă este enunțat.','Direcția de profunzime este inversată față de text.']],
 8,'Inversează profunzimea alcali versus acizi, distincția mecanică centrală a paragrafului.',['protei naţi alcalini','solvenţi ai grăsimii']),

q(47,['Leziunile electrice se clasifică, după tensiune, astfel:',
 ['Joasă tensiune <1.000 V (de obicei 120 V casnic, limitată în jurul plăgii) versus înaltă tensiune >1.000 V (industrial, pielea putând fi puțin afectată, cu daune profunde extinse)','Joasă tensiune >10.000 V, înaltă tensiune fiind sub 120 V','Orice contact casnic echivalează cu înaltă tensiune, mușchii superficiali fiind cei mai lezați','Tensiunea nu se praghează, pielea având rezistență nulă','Înalta tensiune distruge doar epidermul, țesuturile de lângă os fiind scutite'],'A',119,'Leziuni electrice — Pragul de 1.000 V',
 'Aplicarea pragului 1.000 V și a paradoxului înaltei tensiuni (piele limitată, leziune profundă lângă os).',
 ['<1.000 versus >1.000 V, 120 V casnic și contrastul piele/profund sunt explicite.','Pragurile sunt inversate față de text.','Casnicul este joasă tensiune; mușchii profunzi lângă os sunt mai lezați.','Pielea are rezistență ridicată; clasificarea există.','Țesuturile adiacente oaselor suferă adesea leziuni mai severe.']],
 8,'Inversează pragul 1.000 V și mută leziunea maximă de pe mușchiul periostal pe epiderm.',['<I.OOO V','>I.OOO V']),

q(48,['Leziunile prin fulger se caracterizează prin:',
 ['Sunt electrocuții prin curent continuu de voltaj înalt','Explozia asociată poate produce traume, inclusiv ruptura timpanului','Complicațiile tardive includ cataracta și neuropatia periferică','Sunt identice arsurii solare epidermice, fără risc de arc sau flacără','Ruptura de timpan exclude diagnosticul, cataracta apărând doar în arsura termică'],'ABC',120,'Fulger — Arc, timpan, sechele tardive',
 'Recunoașterea fulgerului ca DC de înalt voltaj, cu ruptură de timpan și sechele tardive (cataractă, neuropatie).',
 ['Clasificarea ca DC de voltaj înalt este explicită.','Ruptura timpanului prin explozie este citată.','Cataracta și neuropatia periferică sunt complicații tardive.','Fulgerul poate asocia arc, flacără și căderi, nu e o arsură solară.','Timpanul rupt susține, nu exclude, diagnosticul.']],
 8,'Reduce fulgerul la arsură solară și inversează valoarea diagnostică a rupturii de timpan.',['loviturile de fulger','rnptura timpanului']),

q(49,['Pruritul la arsul în reabilitare, potrivit studiului din clinică:',
 ['50% dintre pacienți au relatat prurit moderat până la sever, care a afectat somnul și calitatea vieții','A fost întâlnit în 32% din arsurile <2% SCT; poate persista până la 12 ani, doar 36% raportând beneficiu al tratamentului','Dispare în 48 de ore, fiind limitat la arsurile >70% SCT','Răcirea, TENS și masajul agravează pruritul și sunt evitate','Doar opioidele IV controlează pruritul, gabapentina fiind contraindicată'],'AB',122,'Prurit post-arsură',
 'Reținerea triadului 50% / 32% sub 2% SCT / persistență până la 12 ani, cu răspuns terapeutic de doar 36%.',
 ['50% cu impact pe somn/calitatea vieții este explicit.','32% sub 2% SCT, 12 ani și 36% beneficiu sunt citate.','Pruritul nu e rezervat arsurilor uriașe și nu dispare în 48 de ore.','Răcirea, TENS și masajul sunt descrise ca utile.','Au fost folosite doxepin, gabapentină, dapsonă, ondansetron și blocante H1/H2.']],
 8,'Permutează 50% (prevalență) cu dispariția în 48 de ore și contraindică măsurile nefarmacologice citate.',['50% dintre pacienţi','până la 12 ani']),

q(50,['Necroliza epidermică toxică și SSJ se deosebesc și se recunosc prin:',
 ['NET este definită ca >30% descuamare SC, SSJ are <10%, iar 10–29% reprezintă suprapunere SSJ/NET','80% din NET sunt provocate de medicamente; Dilantina și sulfamidele sunt implicate în 40% din cazuri','Semnul Nikolsky (separarea epidermului la presiune digitală moderată) este o constatare frecventă','SSJ depășește 50% SC, NET fiind rezervată leziunilor sub 5%','Nikolsky exclude NET, diagnosticul cerând doar radiografie pulmonară'],'ABC',122,'NET versus SSJ — Praguri și Nikolsky',
 'Aplicarea pragurilor >30% / <10% / 10–29% și a etiologia medicamentoasă (80%, Dilantină/sulfamide 40%), plus Nikolsky.',
 ['Cele trei praguri de extensie sunt explicite.','80% medicamentoase și 40% Dilantină/sulfamide sunt citate.','Definiția Nikolsky este ilustrată.','Direcția pragurilor este inversată.','Nikolsky este frecvent în NET, nu un semn de excludere.']],
 8,'Inversează pragurile NET/SSJ (>30% versus <10%) și anulează semnul Nikolsky.',['>30% descuamare','Semnul Nikolsky']),
];
