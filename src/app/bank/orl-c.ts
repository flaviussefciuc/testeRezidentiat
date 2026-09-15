import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-327;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('orl',27,pdfOffset,`orl-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const ORL_C=[
q(61,['Celulele păroase ale urechii interne și tonotopia cohleară:',
 ['Organul lui Corti, macula și crestele ampulare conțin celule păroase care transformă energia mecanică în energie electrică','Mişcarea stereocililor din apropierea scăriței produce perceperea frecvențelor înalte, iar cea de la vârf frecvențele joase','Accelerația rotațională este interpretată de canalele semicirculare, iar cea liniară de macula din utriculă și saculă','Frecvențele înalte sunt percepute la helicotremă, iar cele joase lângă scăriță','Macula detectează rotația capului, iar canalele semicirculare accelerația liniară gravitațională'],'ABC',550,'Urechea internă — Transducție și tonotopie',
 'Maparea stereocililor de lângă scăriță pe frecvențe înalte și a vârfului/helicotremei pe joase, plus canale (rotație) versus maculă (liniar).',
 ['Cele trei organe senzoriale și conversia mecanic→electric sunt enunțate.','Topografia scăriță=înalte, vârf=joase este explicită.','Canalele pentru rotație și macula utriculă/saculă pentru liniar sunt descrise.','Opțiunea inversează tonotopia.','Opțiunea inversează canalele cu macula.']],
 8,'Oglindește tonotopia (scăriță versus helicotremă) și vectorii canal/maculă.',['frecvenţelor înalte','canalelor semicirculare'],[551]),

q(62,['Sistemul vestibular, ca unul dintre cele trei sisteme de orientare în spațiu:',
 ['Orientarea depinde de sistemul vestibular, de cel ocular și de propriocepție','Eliminarea informațiilor vizuale (închiderea ochilor) sau proprioceptive la un pacient cu patologie vestibulară reduce semnificativ abilitatea de orientare','Orientarea cere simultan, în orice circumstanță, semnale de la toate cele trei sisteme','Sistemul auditiv, nu vestibularul, compensează asimetria în timp','Propriocepția este superfluă, vestibulul izolat menținând ortostatismul cu ochii închiși'],'AB',550,'Fiziologie vestibulară — Cele trei sisteme de orientare',
 'Recunoașterea triadei vestibular–ocular–proprioceptiv și a decompensării la închiderea ochilor, opus mitului că toate trei sunt mereu indispensabile.',
 ['Cele trei sisteme sunt enumerate explicit.','Închiderea ochilor sau imponderabilitatea la un vestibular patologic reduce orientarea.','Textul precizează că, în cele mai multe circumstanțe, orientarea se poate menține fără toate trei simultan.','Spre deosebire de auditiv, vestibularul poate compensa asimetria.','Propriocepția este unul dintre cele trei piloni, nu superfluă.']],
 8,'Pretinde simultaneitatea obligatorie a celor trei sisteme și atribuie compensarea asimetrică auditivului, nu vestibulului.',['sistemul vestibular','închiderea ochilor']),

q(63,['Vertijul de asimetrie vestibulară se deosebește de hipoacuzie prin faptul că:',
 ['Sistemul vestibular, spre deosebire de cel auditiv, poate compensa în timp această asimetrie','Sistemul auditiv compensează rapid, iar vestibularul nu se adaptează','Nistagmusul lipsește, tracturile oculo-vestibulare nefiind antrenate','Vertijul cere mișcare obiectivă a pacientului, fără senzație rotatorie în repaus','Nevrita vestibulară produce asimetrie simetrică binaurală, fără nistagmus'],'A',550,'Vertijul — Compensare vestibulară versus auditivă',
 'Reținerea capacității unice a vestibulului de a compensa asimetria, spre deosebire de calea auditivă, cu nistagmus din tracturile oculo-vestibulare.',
 ['Fraza „spre deosebire de cel auditiv, poate compensa” este explicită.','Compensarea este vestibulară, nu auditivă.','Asimetria produce nistagmus prin tracturile oculo-vestibulare.','Vertijul este senzație rotatorie în lipsa unei mișcări obiective.','Nevrita este exemplul de patologie care afectează în special unul dintre cele două sisteme.']],
 8,'Atribuie compensarea auditivului și neagă nistagmusul, cele două note distinctive ale paragrafului de asimetrie.',['poate compensa','nevrita vestibulară']),

q(64,['Disfuncția nervului facial, în funcție de sediul leziunii, poate asocia:',
 ['Pierderea secreției lacrimale','Pierderea reflexului stapedian (contracția mușchiului scăriței)','Pierderea gustului în treimea anterioară a limbii și a secreției nazale sau submandibulare','Sinkinezie, prin reinervări aberante, dacă regenerarea este importantă','Păstrarea intactă a mimicii, leziunea afectând doar cohleea'],'ABCD',551,'Nervul facial — Semne distale și sinkinezie',
 'Lista semnelor topografice (lacrimi, stapedius, gust, salivă) și sinkinezia după regenerare aberantă, opus păstrării mimicii.',
 ['Secreția lacrimală este printre manifestările enumerate.','Reflexul stapedian figurează explicit.','Gustul treimii anterioare și secrețiile nazală/submandibulară sunt citate.','Reinervările aberante duc la contracții involuntare (sinkinezie).','Mimica este tocmai teritoriul motor al VII; cohleea nu explică aceste semne.']],
 8,'Neagă afectarea mimicii și mută leziunea pe cohlee, ignorând harta topografică a figurii 27-5.',['secreţiei lacrimale','sinkinezie']),

q(65,['Pentru examinarea facilă a conductului auditiv extern, pavilionul auricular se tracționează:',
 ['Spre superior și posterior','Spre inferior și anterior, ca la sugarul cu otită','Medial, spre tragus, pentru a vizualiza umbo-ul','În jos și înapoi, analog manevrei Dix-Hallpike','Fără tracțiune, speculul mic fiind suficient în orice vârstă'],'A',551,'Examenul otoscopic — Tracțiunea pavilionului',
 'Reținerea vectorului superior-posterior la adult, distinct de vectorul infantil inferior-posterior din practica pediatrică generală.',
 ['Textul cere tracțiunea pavilionului spre superior și posterior.','Inferior și anterior nu este manevra descrisă aici.','Tragusul nu este direcția de tracțiune.','Dix-Hallpike este manevră vestibulară, nu otoscopică.','Se folosește cel mai mare specul care poate fi utilizat, cu tracțiune.']],
 8,'Inversează vectorul superior-posterior cu cel infantil inferior sau cu o manevră vestibulară.',['superior şi posterior','specul auricular']),

q(66,['Examenul membranei timpanice și al auzului conversațional:',
 ['Membrana este în mod obișnuit translucidă; prin ea se pot vizualiza porțiuni ale lanțului osicular','Perforațiile >1 mm sunt, în general, ușor de vizualizat, dar pot fi confundate cu retracții din disfuncție tubară','Vocea conversațională este, de regulă, la aproximativ 55 dB, cu frecvențe între 500–3000 Hz','Perforațiile sub 1 mm sunt patognomonice și nu se confundă cu retracțiile','Auzul conversațional se testează la 90 dB, pragul hipoacuziei profunde'],'ABC',551,'Otoscopia — Transluciditate, perforație, 55 dB',
 'Integrarea translucidității, a pragului >1 mm (confuzie cu retracția) și a vocii conversaționale la 55 dB / 500–3000 Hz.',
 ['Transluciditatea și vizualizarea osciculelor sunt explicite.','Pragul >1 mm și confuzia cu retracția de disfuncție tubară sunt enunțate.','55 dB și banda 500–3000 Hz sunt citate.','Confuzia cu retracțiile este tocmai capcana perforațiilor, inclusiv a celor vizibile.','90 dB este pragul hipoacuziei profunde audiometrice, nu al vocii conversaționale.']],
 8,'Permutează 55 dB conversațional cu 90 dB (hipoacuzie profundă) și neagă confuzia perforație–retracție.',['55 dB','> 1 mm']),

q(67,['În diagrama nervului facial, o leziune în punctul A (distal de ganglionul geniculat, înaintea ramurilor lacrimale deja desprinse) determină:',
 ['Pierderea funcției distale, dar funcția lacrimară și secreția salivară a parotidei ar fi păstrate','Pierderea lacrimilor și a salivației parotidiene, cu mimică intactă','Hipoacuzie de transmisie prin fixarea scăriței, ca în otoscleroză','Nistagmus vertical, prin lezarea nucleului vestibular','Ageuzie completă posterioară, nervul IX fiind întrerupt în mastoidă'],'A',552,'Nervul facial — Topografia leziunii (punctul A)',
 'Citirea figurii 27-5: leziunea A pierde funcția distală, dar păstrează lacrimile și salivația parotidiană.',
 ['Legendă: leziunea în A pierde funcția distală, cu păstrarea funcției lacrimale și a secreției salivare a parotidei.','Lacrimile și parotida sunt tocmai funcțiile păstrate.','Fixarea scăriței este otoscleroză, nu leziune de VII.','Nucleul vestibular nu este punctul A al facialului.','Gustul anterior (coarda timpanului) poate fi afectat distal; IX nu trece prin mastoidă ca ramură a VII.']],
 8,'Inversează teritoriile păstrate (lacrimi, parotidă) cu cele pierdute, capcana clasică a topografiei facialului.',['funcţia lacrimară','secreţia salivară a parotidei']),

q(68,['Evaluarea pacientului cu afectare vestibulară, dincolo de nervii cranieni standard, include:',
 ['Căutarea nistagmusului spontan sau indus de modificarea poziției','Testul Romberg (ortostatism cu ochii închiși) pentru a elimina influența vizuală','Evaluarea funcțiilor cerebelului (testul index-nas)','Testul Rinne ca primă manevră de echilibru, diapazonul înlocuind Romberg','Închiderea ochilor ameliorează orientarea în patologia vestibulară, deci Romberg este superfluu'],'ABC',552,'Examen vestibular — Nistagmus, Romberg, cerebel',
 'Triada nistagmus pozițional, Romberg (fără vedere) și probe cerebeloase, opus confuziei cu Rinne și opus mitului că ochii închiși ajută vestibulopatul.',
 ['Nistagmusul spontan sau pozițional este cerut.','Romberg este definit ca ortostatism cu ochii închiși.','Index-nas este exemplul de probă cerebeloasă.','Rinne diferențiază hipoacuzia, nu echilibrul.','La vestibulopat, închiderea ochilor reduce orientarea, de aceea Romberg este util.']],
 8,'Înlocuiește Romberg cu Rinne și pretinde că ochii închiși ameliorează vestibulopatul, contrar paginii 550.',['testul Romberg','index-nas'],[550]),

q(69,['Pe audiograma tonală, hipoacuzia de transmisie se recunoaște prin:',
 ['Valori anormale ale conducerii aeriene și valori normale ale conducerii osoase, cu decalaj aero-osos','Valori anormale egale ale conducerii aeriene și osoase, fără decalaj','Conducere aeriană normală și osoasă prăbușită sub 90 dB','Limita inferioară a auzului normal deplasată la 70 dB','O timpanogramă plată, fără nicio informație audiometrică'],'A',554,'Audiograma — Hipoacuzia de transmisie (decalaj aero-osos)',
 'Identificarea gap-ului aero-osos (AC anormal, BC normal) ca semn al transmisiei, distinct de SNHL (AC=BC anormale) și de mixtă.',
 ['Figura 27-7B: AC anormală, BC normală, decalaj aero-osos.','AC=BC anormale definește hipoacuzia neurosenzorială.','BC prăbușită descrie SNHL, nu transmisia.','Limita inferioară a auzului normal este circa 20 dB, nu 70.','Timpanograma completează, dar nu înlocuiește patternul audiometric al transmisiei.']],
 8,'Permutează patternurile A–D ale figurii 27-7 (normal, transmisie, SNHL, mixtă).',['decalaj aero-osos','Hipoacuzie de transmisie']),

q(70,['Hipoacuzia mixtă și testele electrofiziologice:',
 ['În hipoacuzia mixtă, valorile anormale ale conducerii aeriene sunt mai scăzute decât valorile anormale ale conducerii osoase','Limita inferioară a auzului normal este de aproximativ 20 dB','Potențialele evocate auditive ale trunchiului cerebral și otoemisiunile acustice evocate nu necesită un răspuns voluntar, fiind utile la nou-născut, comatos sau retard','Hipoacuzia mixtă are AC=BC, ambele normale, analog auzului normal','OAE măsoară răspunsul cortical voluntar la cuvinte, nu sunetele emise de cohlee'],'ABC',554,'Audiometrie — Mixtă, 20 dB, ABR și OAE',
 'Citirea figurii 27-7D (AC mai jos decât BC anormală) plus pragul 20 dB și testele fără răspuns voluntar (ABR, OAE).',
 ['AC mai scăzută decât BC anormală, cu gap suprapus peste SNHL, definește mixta.','Pragul de circa 20 dB este enunțat.','ABR și OAE sunt descrise ca tehnici fără răspuns voluntar.','AC=BC normale este auzul normal, nu mixta.','OAE sunt sunete emise de cohlee la stimulare acustică, nu un răspuns cortical verbal.']],
 8,'Confundă mixta cu auzul normal (AC=BC) și transformă OAE într-un test cortical voluntar.',['20 dB','otoemisiunilor acustice']),

q(71,['Timpanometria cu sondă multicanal produce modificări de presiune cuprinse între:',
 ['400 mm H2O presiune negativă și 200 mm H2O presiune pozitivă','±50 mm H2O, analog vocii conversaționale de 55 dB','−200 până la +400 mm H2O, valorile fiind inversate','0 mm H2O, presiunea nefiind manipulată în curba C','90 dB SPL, ca prag al hipoacuziei profunde'],'A',554,'Timpanometria — Intervalul de presiune al sondei',
 'Reținerea ferestrei −400 / +200 mm H2O, distinctă de curbele A/B/C de pe pagina următoare și de pragurile audiometrice.',
 ['Transductorul variază între 400 mm H2O negativă și 200 mm H2O pozitivă.','55 dB este vocea conversațională, nu presiunea sondei.','Semnele și valorile 400/200 sunt în această ordine, nu inversate.','Curba C cere manipularea membranei spre exterior, deci presiune variată.','90 dB este un prag audiometric, nu o presiune de timpanometrie.']],
 8,'Inversează −400/+200 cu +400/−200 sau le înlocuiește cu praguri audiometrice (55 dB, 90 dB).',['400 mm H20','200 mm H20']),

q(72,['Secrețiile sinusului maxilar ajung în meatul mijlociu după ce trec prin:',
 ['Ostium și infundibul','Meatul inferior, analog drenajului chirurgical clasic','Helicotremă, ca lichidul cohlear al frecvențelor joase','Ductul Stenon, la molarul maxilar 2','Fereastra rotundă, analog undei stapediene'],'A',562,'Complexul ostio-meatal — Drenajul maxilarului',
 'Urmărirea traseului maxilar: ostium → infundibul → meat mijlociu, distinct de meatul inferior și de analogiile cohleare sau salivare.',
 ['Figura 27-11: secrețiile maxilarului trec prin ostium și infundibul înainte de meatul mijlociu.','Meatul inferior nu este calea naturală descrisă aici.','Helicotrema este cohleară.','Stenon este ductul parotidei.','Fereastra rotundă este a urechii interne.']],
 8,'Înlocuiește ostium+infundibul cu meatul inferior sau cu ducte din alte capitole (Stenon, helicotremă).',['ostium','infundibul']),

q(73,['După etmoidectomia funcțională endoscopică (latura stângă a figurii 27-11):',
 ['Procesul uncinat a fost îndepărtat','Celulele etmoidale anterioare au fost deschise','Ostiumul natural maxilar se lasă neatins, drenajul fiind redirecționat prin meatul inferior','Cornetul mijlociu se rezecă de principiu, altfel ostiumul nu poate fi lărgit','Sinusul frontal se drenează prin meatul inferior, nu prin regiunile etmoidale'],'AB',562,'Chirurgia endoscopică — Complexul ostio-meatal',
 'Citirea post-FESS: uncinat scos și etmoid anterior deschis, cu ostiumul maxilar lărgit (nu abandonat) și cornetul mijlociu păstrat.',
 ['Îndepărtarea procesului uncinat este explicită.','Deschiderea celulelor etmoidale anterioare este citată.','Ostiumul natural maxilar a fost lărgit, nu abandonat în favoarea meatului inferior.','Cornetul mijlociu (C) este intact pe figură.','Secrețiile frontale trec prin regiunile etmoidale către meatul mijlociu, nu prin meatul inferior.']],
 8,'Rezecă greșit cornetul mijlociu (păstrat pe figură) și mută drenajul frontal pe meatul inferior.',['Procesul uncinat','Cometul nazal mijlociu']),

q(74,['Deglutiția este împărțită în patru faze. Sunt adevărate:',
 ['Faza de preparare mărunțește bolul și îl amestecă cu saliva, sub control care asigură consistența pentru pasajul gastric','Când bolul traversează istmul orofaringian începe faza a treia, involuntară: laringele ascensionează, epiglota dirijează spre sinusurile piriforme, cricofaringianul se relaxează','Faza a patra este peristaltismul esofagian primar către stomac','Faza a treia rămâne voluntară, limba împingând bolul după ce a trecut de istm','Sfincterul esofagian superior se contractă în faza a treia, blocând lumenul pentru a proteja de aspirație'],'ABC',567,'Deglutiția — Cele patru faze',
 'Separarea preparării, a declanșării involuntare la istmul orofaringian și a peristaltismului esofagian de mitul voluntarității tardive.',
 ['Prepararea (mărunțire, salivă, consistență) este faza întâi.','Trecerea istmului declanșează faza involuntară cu ascensionarea laringelui, epiglotă-jgheab și relaxarea cricofaringianului.','Peristaltismul primar esofagian este faza a patra.','După istm controlul este involuntar, nu voluntar.','Cricofaringianul se relaxează pentru a deschide lumenul, nu se contractă.']],
 8,'Păstrează faza a treia voluntară și contractă cricofaringianul, inversând deschiderea sfincterului.',['istmul orofaringian','cricofaringian']),

q(75,['Odinofagia cu durată de mai puțin de o săptămână orientează spre:',
 ['Infecție, mai ales dacă asociază febră și stare generală alterată','Neoplazie, durerea referită în ureche fiind rară în tumori','Disfuncție de trompă, analog otitei seroase de 3 luni','Papilom scuamos laringian al adultului, leziune puțin agresivă','Hemangiom subglotic în regresia de la 4 ani'],'A',567,'Odinofagia — Infecție versus neoplazie',
 'Fereastra sub o săptămână plus febra = infecție, opus simptomelor îndelungate cu otalgie referită și scădere ponderală din malignitate.',
 ['Textul atribuie infecțiilor odinofagia sub o săptămână; febra și alterarea stării orientează tot acolo.','Neoplaziile dau simptome îndelungate, adesea cu durere referită în ureche.','Cele 3 luni țin de otita seroasă, nu de odinofagie.','Papilomul adultului este o tumoră laringiană, nu patternul de odinofagie scurtă.','Hemangiomul subglotic produce stridor, nu odinofagia de o săptămână.']],
 8,'Atribuie fereastra scurtă neoplaziei (care este cea îndelungată, cu otalgie referită).',['mai puţin de o săptămână','pierderea în']),

q(76,['Sforăitul și tulburările de somn:',
 ['Pacienții se pot prezenta cu oboseală cronică, somnolență diurnă sau insuficiență cardiacă dreaptă','Sforăitul este mai frecvent odată cu vârsta și nu este în mod necesar patologic la adult','Orice obstrucție semnificativă este exacerbată în somn, când tonusul de repaus al căii aeriene superioare este redus','Sforăitul adultului este constant o apnee, fără a necesita anamneza opririlor respiratorii','Tonusul căii aeriene crește în somn, deci obstrucția se ameliorează nocturn'],'ABC',567,'Somnul — Sforăit, apnee, tonusul căii aeriene',
 'Separarea sforăitului (nu neapărat patologic) de apneea care trebuie căutată și de exacerbarea obstrucției prin scăderea tonusului nocturn.',
 ['Triada oboseală–somnolență–cord pulmonar este enumerată.','Sforăitul crește cu vârsta și nu este necesar patologic.','Exacerbarea prin tonus redus în somn este explicită.','Clinicianul trebuie să caute istoricul de apnee; sforăitul nu echivalează apneea.','Tonusul scade, nu crește, în somn.']],
 8,'Echivalează sforăitul cu apneea și inversează tonusul nocturn (scade, deci obstrucția se agravează).',['Sforăitul','tonusul de repaus']),

q(77,['Un pacient cu disfagie cronică, otalgie referită și scădere ponderală pe luni de zile. Sunt adevărate:',
 ['Acest pattern ridică suspiciunea unei malignități și impune inspecția completă, inclusiv palparea digitală a cavității orale și orofaringelui','Palparea este justificată deoarece multe leziuni sunt greu de vizualizat, dar indurate sau neregulate la palpare','Dizartria rezultă din disfuncția anatomică sau neurologică a limbii, palatului și buzelor, care modelează sunetele laringelui','Odinofagia scurtă, sub o săptămână, cu febră, este echivalentul acestui tablou neoplazic','Absența unei mase vizibile exclude leziunea, palparea fiind superfluă dacă endoscopia este normală'],'ABC',567,'Cavitatea orală — Palpare, dizartrie, red-flag neoplazic',
 'Cuplarea red-flag-urilor de malignitate cu palparea leziunilor oculte și cu dizartria de rezonatori, opus odinofagiei infecțioase scurte.',
 ['Simptomele îndelungate, otalgia referită și scăderea ponderală orientează spre malignitate; palparea completează inspecția.','Indurația oculta vizual este motivul palparii.','Limba, palatul și buzele ca rezonatori ai vocii laringiene sunt enunțate.','Fereastra scurtă febrilă este infecțioasă, nu neoplazică.','Textul subliniază că leziunile pot fi impalpabil-vizibile invers: palpabile fără a fi văzute.']],
 8,'Echivalează tabloul de luni de zile cu infecția de o săptămână și neagă palparea când vizualul este curat.',['Palparea digitală','dizartria']),

q(78,['Laringele unui pacient cu disfonie care nu se remite timp de o lună:',
 ['Trebuie inspectat cu atenție','Poate fi ignorat dacă vocea este doar „stinsă”, leziunile de deasupra corzilor fiind benigne','Se evaluează doar după 6–12 luni, analog ferestrei de medializare a corzii paralizate','Nu necesită laringoscopie dacă tusea cronică este atribuită unui IECA','Se tratează empiric cu β-blocant, ca hemangiomul subglotic'],'A',571,'Disfonia — Fereastra de o lună',
 'Reținerea pragului de o lună de disfonie neremisă ca indicație de inspecție laringiană atentă.',
 ['Fraza „care nu se remite timp de o lună, trebuie inspectat cu atenție” este explicită.','Vocea stinsă orientează spre leziuni deasupra corzilor adevărate, nu scutește inspecția.','6–12 luni este fereastra paraliziei de coardă, nu a disfoniei neremise.','IECA poate cauza tuse, dar nu anulează inspecția unei disfonii de o lună.','β-blocantul ține de hemangiomul subglotic pediatric, nu de disfonia adultului.']],
 8,'Înlocuiește fereastra de o lună cu 6–12 luni (paralizie) sau cu tratamente din alte entități (IECA, β-blocant).',['o lună','Disfonia']),

q(79,['Caracterul vocii orientează sediul disfoniei astfel:',
 ['O voce șuierătoare indică adducție incompletă (denervare, tulburare funcțională sau presbilaringită)','Vocea încordată sau „sugrumată” implică spasticitatea mișcării','Vocea stinsă apare la leziuni tumorale sau inflamatorii deasupra corzilor vocale adevărate','Vocea aspră indică o patologie a corzii vocale','Vocea șuierătoare este patognomonică pentru o tumoră deasupra corzilor, iar cea aspră pentru presbilaringită'],'ABCD',571,'Disfonia — Șuierătoare, sugrumată, stinsă, aspră',
 'Cele patru timbre (șuier/adducție incompletă, sugrumat/spastic, stins/supraglotic, aspru/coardă) versus permutarea lor.',
 ['Șuierătoarea și cauzele de adducție incompletă, inclusiv presbilaringita, sunt explicite.','Sugrumarea = spasticitate este enunțată.','Vocea stinsă este plasată deasupra corzilor adevărate.','Asprimea = patologie de coardă.','Opțiunea inversează șuierătoarea cu stinsa și asprimea cu presbilaringita.']],
 8,'Permutează cele patru timbre între etajele adducție, spasticitate, supraglotă și coardă.',['presbilaringită','Vocea stinsă']),

q(80,['Tusea cronică, în semiologia laringiană:',
 ['Tusea imediat după masă este, de obicei, consecința aspirației, mai ales la lichide','Picătura postnazală (sinuzită, rinită alergică sau vasomotorie) și refluxul gastro-esofagian irită laringele','Inhibitorii enzimei de conversie pot induce un edem ușor al corzii vocale, cu tuse','Tusea postprandială este patognomonică pentru presbilaringită, fără rol de aspirație','IECA protejează coarda de edem, tusea fiind atunci doar de cauză pulmonară'],'ABC',571,'Tusea cronică — Aspirație, RGE, IECA',
 'Ierarhia aspirație postprandială, picătură/RGE și edemul de IECA, opus atribuirii tusei postprandiale presbilaringitei.',
 ['Tusea imediat după masă, mai ales la lichide, este legată de aspirație.','Picătura postnazală și RGE sunt enumerate ca iritanți.','IECA → edem ușor de coardă → tuse este explicit.','Presbilaringita produce voce șuierătoare prin atrofie, nu tuse postprandială.','IECA este o cauză laringiană de tuse, nu un protector.']],
 8,'Mută tusea postprandială pe presbilaringită și neagă edemul de IECA.',['inhibitorii enzimei de conversie','imediat după masă']),

q(81,['Cele patru straturi fasciale cervicale:',
 ['Fascia cervicală superficială, imediat profund de tegument, înglobează platisma','Stratul superficial al fasciei cervicale profunde se dedublează și înglobează sternocleidomastoidianul și mușchii prelaringieni','Partea mijlocie (viscerală) învelește faringele, tiroida, laringele și traheea; porțiunea laterală dă teaca carotidă','Foița cea mai profundă este fascia prevertebrală, care învelește musculatura paraspinoasă','Fascia prevertebrală este cea mai superficială, înglobând platisma, iar teaca carotidă derivă din fascia superficială'],'ABCD',577,'Gâtul — Cele patru foițe fasciale',
 'Ordinea superficială (platisma) → profundă superficială (SCM) → viscerală (teacă carotidă) → prevertebrală, opus inversării platismei cu prevertebrala.',
 ['Platisma în fascia cervicală superficială este explicită.','Dedublarea pe SCM și prelaringieni este citată.','Conținutul visceral și originea tecii carotide sunt enunțate.','Prevertebrala ca foiță cea mai profundă este descrisă.','Opțiunea inversează complet ordinea superficial/profund.']],
 8,'Oglindește platisma (superficială) cu prevertebrala (profundă) și mută teaca carotidă pe fascia superficială.',['fascia prevertebrală','tecii carotice']),

q(82,['Ductul Stenon al parotidei se deschide în cavitatea orală:',
 ['Printr-o terminație ampulară la nivelul molarului maxilar 2','La frenul lingual, analog ductului Wharton','Prin multiple ducte pe fața superioară a glandei, ca sublinguala','În meatul mijlociu, după infundibulul maxilar','La vârful apofizei mastoide, unde iese nervul facial'],'A',577,'Glanda parotidă — Ductul Stenon',
 'Localizarea ampulei Stenon la molarul maxilar 2, distinctă de Wharton (fren lingual) și de orificiul stilomastoidian al VII.',
 ['Traiectul: 1 cm sub arcada zigomatică, traversează maseterul, ampula la molarul maxilar 2.','Frenul lingual este deschiderea Wharton.','Ductele multiple superioare sunt ale sublingualei.','Meatul mijlociu este rinosinusal.','Orificiul stilomastoidian este ieșirea nervului facial, nu a ductului.']],
 8,'Schimbă ampula Stenon (molar 2) cu Wharton (fren) sau cu orificiul stilomastoidian.',['Stenon','molarului maxilar 2']),

q(83,['Producția zilnică de salivă și enzima sa principală:',
 ['Glandele salivare produc aproximativ 500 mL pe zi, din care 90% de către parotide și submandibulare','Enzima digestivă principală este α-amilaza, cu rol în descompunerea amidonului','Saliva este lipsită de rol de clearance, fiind doar un lubrifiant inert, fără enzimă digestivă','Productia zilnică este de 50 mL, 90% provenind din glandele minore','Enzima principală este pepsina gastrică, saliva fiind lipsită de amilază'],'AB',577,'Fiziologia salivei — 500 mL, 90%, α-amilază',
 'Reținerea volumului 500 mL, a cotei de 90% parotid+submandibular și a α-amilazei, opus glandelor minore sau pepsinei.',
 ['500 mL/zi și 90% parotide+submandibulare sunt explicite.','α-amilaza ca enzimă principală este citată.','Textul atribuie salivei lubrifiere, clearance bacterian, igienă orală și α-amilază.','50 mL și predominanța glandelor minore contrazic textul.','Pepsina nu este enzima salivară descrisă.']],
 8,'Permutează 500 mL/90% cu 50 mL/glande minore și înlocuiește α-amilaza cu pepsina.',['500 mL','amilaza']),

q(84,['Glanda submandibulară și ductul Wharton:',
 ['Glanda stă într-o concavitate inferior de mandibulă, între pântecele anterior și posterior ale digastricului','Ductul Wharton trece între milohioidian și hioglos și se deschide adiacent frenului lingual','Inervația secretomotorie parasimpatică vine din nucleul salivator superior, via nervi linguali și coarda timpanului','Inervația parasimpatică vine din nucleul salivator inferior (IX), analog parotidei','Ductul se deschide la molarul maxilar 2, identic Stenon'],'ABC',577,'Glanda submandibulară — Wharton și nucleul salivator superior',
 'Contrastarea nucleului salivator superior (submandibulară) cu inferiorul (parotidă/IX) și a deschiderii la fren versus molarul 2.',
 ['Raportul cu digastricul este explicit.','Traiectul între milohioidian și hioglos și ampula de lângă fren sunt descrise.','Nucleul salivator superior, lingualul și coarda timpanului sunt citați.','Nucleul inferior și IX inervează parotida, nu submandibulara.','Molarul 2 este ampula Stenon.']],
 8,'Schimbă nucleul salivator superior cu inferiorul (parotidă) și ampula de la fren cu molarul 2.',['Wharton','nucleul salivator superior']),

q(85,['La un adult de peste 40 de ani, o masă cervicală nedureroasă:',
 ['Va fi tratată ca un neoplasm până la proba contrarie','Carcinomul scuamos metastazează frecvent în ganglionii care drenează aero-digestivul superior; în era HPV, metastazele chistice pot fi confundate cu chisturi branhiale','Dacă nu se identifică primarul, puncția-biopsie cu ac subțire stabilește adesea diagnosticul; biopsia excizională deschisă este ultima soluție','Biopsia incizională este preferată, pentru a evita diseminarea','Masele supraclaviculare exclud metastazele infraclaviculare (stomac, plămân)'],'ABC',578,'Masa cervicală a adultului — Neoplasm, HPV, puncție',
 'Regula >40 ani = neoplasm până la proba contrarie, capcana chistului branhial HPV și ierarhia FNA înaintea exciziei deschise, cu evitarea inciziei.',
 ['Fraza „până la proba contrarie” este explicită.','Metastazele scuamoase, HPV și confuzia cu chistul branhial sunt enunțate.','FNA ca diagnostic și excizia deschisă ca ultimă soluție sunt descrise.','Biopsia incizională se evită din riscul de diseminare.','Metastazele de stomac/plămân apar tocmai în fosele supraclaviculare.']],
 8,'Promovează biopsia incizională (interzisă pentru diseminare) și neagă fosa supraclaviculară ca sediu infraclavicular.',['peste 40 ani','HPV-pozitiv']),

q(86,['La adolescentul sau adultul tânăr, o formațiune cervicală sub 3 cm, la un pacient compliant:',
 ['Poate fi urmărită','Impune laringectomie totală, analog carcinomului scuamos al decadei a 6-a','Se tratează ca neoplasm până la proba contrarie, identic adultului de peste 40 de ani, fără observație','Necesită evidare radicală înaintea oricărei puncții','Este patognomonică pentru fistulă traheo-innominată post-traheotomie'],'A',578,'Masa cervicală a tânărului — Pragul de 3 cm',
 'Contrastarea observației la tânărul cu masă <3 cm față de regula „neoplasm până la proba contrarie” a adultului >40 de ani.',
 ['Textul permite urmărirea unui pacient compliant cu formațiune <3 cm.','Laringectomia este a cancerului laringian avansat, nu a ganglionului tânărului.','Regula neoplasmului până la proba contrarie este a adultului >40 de ani.','Puncția-biopsie este pasul pentru leziunile care cresc, suspecte de limfom, nu evidarea oarbă.','Fistula innominată este o complicație tardivă de traheotomie, nu o masă <3 cm.']],
 8,'Aplică regula adultului >40 de ani tânărului cu masă <3 cm, pentru care textul acceptă urmărirea.',['<3 cm','adolescent']),

q(87,['Când puncțiile-biopsie cu ac fin sunt non-diagnostice și examenul aero-digestiv sub anestezie generală nu descoperă primarul, următorul pas include:',
 ['Tonsilectomia ipsilaterală și biopsii ale rinofaringelui și bazei de limbă','Biopsia incizională imediată, înaintea oricărei endoscopii sub anestezie','Observație 2 ani fără imagistică, primarul neputând apărea ulterior','Embolizarea arterei sfenopalatine, ca în epistaxisul posterior','Operația Sistrunk, analog chistului de canal tireoglos'],'A',578,'CUP cervical — Tonsilectomie ipsilaterală și biopsii oculte',
 'Recunoașterea pachetului de căutare a primarului ocultat (amigdală ipsilaterală, rinofaringe, baza limbii) înaintea biopsiei incizionale.',
 ['Textul enumeră tonsilectomia ipsilaterală și biopsiile de rinofaringe și bază de limbă când FNA repetat eșuează.','Incizionala se evită și se face doar după acest pachet.','Primarul se poate manifesta în decurs de 2 ani, deci supravegherea este necesară, nu abandonul imagistic.','Sfenopalatina este vascularizația nazală, nu gestul din CUP.','Sistrunk este al chistului tireoglos.']],
 8,'Sare direct la biopsia incizională, pe care textul o rezervă după tonsilectomie ipsilaterală și biopsii oculte.',['tonsilectomia ipsilaterală','bazei de limbă'],[583]),

q(88,['Otalgia de cauză non-otogenică, conform tabelului 27-2, poate proveni din:',
 ['Afecțiuni ale articulației temporo-mandibulare și patologie dentară','Elongația procesului stiloid (sindromul Eagle)','Tumorile de hipofaringe, laringe sau esofag sunt cauze otogenice, nu viscerale reflectate','Otită externă și mastoidită, care sunt cauze otogenice, nu non-otogenice','Fixarea piciorului scăriței, ca în otoscleroză, fără durere reflectată'],'AB',555,'Otalgia — Cauze non-otogenice (Tabelul 27-2)',
 'Separarea ATM/dentar și Eagle de cauzele otogenice (OE, mastoidită) și de viscerul faringo-laringo-esofagian, care este tot non-otogenic.',
 ['ATM și dentarul figurează la durerea oro-facială non-otogenică.','Sindromul Eagle (stiloid alungit) este enumerat.','Tumorile de hipofaringe, laringe, esofag sunt rubrica viscerală non-otogenică, nu otogenică.','Otita externă și mastoidita sunt rubrica otogenică.','Otoscleroza produce hipoacuzie de transmisie, nu otalgia din tabel.']],
 8,'Mută otita externă/mastoidita (otogenice) în rubrica non-otogenică și adaugă otoscleroza, absentă din tabelul durerii.',['sindromul Eagle','temporo-mandibulare']),

q(89,['Otoreea subțire, apoasă, galben-transparentă, după un traumatism, cu structuri otice aparent normale, trebuie să ridice suspiciunea de:',
 ['Fisurǎ de lichid cefalorahidian','Apă de baie cu cerumen, fără nicio altă semnificație post-traumatică','Otoscleroză cu fixarea scăriței','Colesteatom cu masă albicioasă și osteonecroză enzimatică','Glomus tympanicum cu tinitus pulsatil'],'A',555,'Otoreea — Fistula de LCR post-traumatică',
 'Contrastarea secreției apoase post-traumatice (LCR) cu apa de baie (aceeași culoare, dar fără traumă) și cu otoreea mucopurulentă infecțioasă.',
 ['Textul cere suspiciunea de fistulă de LCR când a avut loc o traumă.','Apa de baie cu cerumen explică același aspect doar în absența traumei.','Otoscleroza nu produce otoree apoasă.','Colesteatomul se însoțește de infecții cronice și masă albicioasă, nu de lichid transparent post-traumatic.','Glomusul dă tinitus pulsatil și masă eritematoasă, nu otoree apoasă.']],
 8,'Tratează lichidul apos post-traumatic ca cerumen de baie, ignorând alerta de LCR din același paragraf.',['lichid cefalo-rahidian','traumă']),

q(90,['Factorii de risc ai otitei medii cu efuziune, conform tabelului 27-7, includ:',
 ['Frecventarea creșei (îngrijire în colectivitate)','Aparține sexului masculin','Hrănirea cu biberonul și fumatul în casă','Număr crescut de frați în casă și infecție recentă de tract respirator superior','Alăptarea la sân ca unică alimentație, care anulează riscul de efuziune'],'ABCD',559,'Otita seroasă — Factori de risc (Tabelul 27-7)',
 'Cele șase elemente ale tabelului (creșă, băiat, IVRS recentă, biberon, fumat casnic, frați), opus alăptării ca factor protector inventat.',
 ['Creșa este primul item al tabelului.','Sexul masculin este itemul 2.','Biberonul și fumatul în casă sunt itemii 4 și 5.','Frații și IVRS recentă completează tabelul.','Alăptarea nu figurează ca factor de risc; biberonul este riscul citat.']],
 8,'Înlocuiește biberonul (factor de risc) cu alăptarea ca „risc”, deși tabelul listează hrănirea cu biberonul.',['Hrănire cu biberonul','Fumatul în casă']),

q(91,['Cel mai important efect secundar al paraliziei faciale, prin inabilitatea de a închide pleoapa, este:',
 ['Keratita ipsilaterală de expunere, care netratată poate cauza leziuni corneene și orbire','Hipoacuzia de transmisie prin fixarea scăriței','Tinitusul pulsatil de glomus','Atrezia coanală bilaterală a nou-născutului','Sialadenita acută a Wharton-ului'],'A',560,'Paralizia facială — Keratita de expunere',
 'Identificarea keratitei de expunere ca principală amenințare, cu lacrimi artificiale, benzi nocturne sau greutăți de aur palpebrale.',
 ['Textul numește keratita ipsilaterală de expunere cel mai important efect secundar, cu risc de orbire.','Fixarea scăriței este otoscleroză.','Glomusul produce tinitus pulsatil.','Atrezia coanală este o urgență neonatală nazală.','Sialadenita este o infecție salivară, nu o consecință a lagoftalmiei.']],
 8,'Înlocuiește keratita de expunere (amenințarea oculară) cu otoscleroză, glomus sau atrezie, entități din același capitol.',['keratita','pleoapa superioară']),

q(92,['Granuloamele laringiene de la procesul vocal al aritenoidului:',
 ['Se asociază frecvent cu reflux acid, intubație traheală sau traumatisme vocale (hemai, tuse cronică)','Răspund adesea la terapia agresivă a RGE, antibiotice și corticoterapie scurtă','Leziunile neresponsive pot fi tratate prin injectarea de toxină botulinică în mușchii adductori (tiroaritenoidian și cricotiroidian lateral)','Nodulii cântăreților, simetrici la unirea treimii anterioare cu cele două treimi posterioare, sunt identici granuloamelor de proces vocal','Excizia chirurgicală este prima intenție, botulinumul fiind contraindicat în adductorii corzii'],'ABC',575,'Leziunile cronice ale corzii — Granulom versus nodul',
 'Separarea granulomului de proces vocal (RGE, intubație, Botox în adductori) de nodulii simetrici de joncțiune 1/3–2/3, tratați foniatric.',
 ['Cauzele (RGE, intubație, hemai/tuse) și sediul lângă procesul vocal sunt explicite.','Răspunsul la RGE, antibiotic și steroid scurt este enunțat.','Botox în tiroaritenoidian și cricotiroidian lateral, prin blocarea acetilcolinei, este descris.','Nodulii de efort sunt albi, simetrici, la unirea treimii anterioare, nu la procesul vocal.','Chirurgia este rară (obstrucție sau suspiciune de malignitate); Botox-ul este o opțiune.']],
 8,'confundă granulomul de proces vocal cu nodulii de joncțiune 1/3 și inversează Botox-ul cu chirurgia de primă intenție.',['procesul vocal','toxină botulinică']),

q(93,['Epidemiologia carcinomului scuamos laringian:',
 ['Incidența cancerului laringian reprezintă circa 10% din cea a cancerului pulmonar','Vârful de incidență este în decadele 6 și 7, bărbații fiind mai predispuși decât femeile','Fumatul și consumul de alcool sunt factori de risc importanți','Vârful este în decadele 2–3, analog papilomului scuamos pediatric','Incidența depășește cancerul pulmonar, alcoolul nefiind un factor de risc'],'ABC',576,'Cancerul laringian — 10% din pulmonar, decadele 6–7',
 'Reținerea raportului 10% față de cancerul pulmonar și a vârfului în decadele 6–7, distinct de papilomul de dinainte de 5 ani.',
 ['Raportul de 10% față de cancerul pulmonar este explicit.','Decadele 6 și 7 și predilecția masculină sunt citate.','Fumatul și alcoolul sunt enunțate.','Decadele 2–3 și vârsta <5 ani țin de papilomul pediatric.','Incidența este o zecime din pulmonară, nu o depășește.']],
 8,'Permutează vârful din decadele 6–7 în copilărie și inversează raportul 10% față de cancerul pulmonar.',['l 0% din cea a can','decadele 6']),

q(94,['După laringectomie totală, comunicarea verbală poate fi realizată prin:',
 ['Electrolaringe','Vibrațiile musculaturii neofaringelui și ale esofagului cervical','O valvă protetică unidirecțională plasată pe o fistulă chirurgicală între esofagul cervical și traheostomă (voce esofagiană)','Intubație orotraheală de rutină, calea aeriană rămânând comună cu cea digestivă','Păstrarea glotei native, laringectomia totală neancorând traheea la tegument'],'ABC',576,'Laringectomia totală — Reabilitarea vocii',
 'Cele trei soluții (electrolaringe, voce esofagiană nativă, proteză pe fistulă TE), opus mitului intubației orale, interzisă după separarea căilor.',
 ['Electrolaringele este enumerat.','Neofaringele și esofagul cervical ca sursă de vibrație sunt descrise.','Valva unidirecțională pe fistulă TE este explicită.','Pacientul nu va mai putea fi intubat oral; căile sunt separate.','Traheea este ancorată la tegument (traheostomă definitivă).']],
 8,'Păstrează intubația orală după laringectomie, deși textul o interzice odată cu separarea aero-digestivă.',['electrolaringe','fistulă']),

q(95,['Sialadenita acută supurativă:',
 ['Afectează cel mai frecvent glandele submandibulare, la adulți deshidratați cu status general alterat','Glanda eliberează lichid purulent prin orificiul Wharton','Agenții sunt de regulă S. aureus, S. pneumoniae și streptococi hemolitici; tratamentul include hidratare și antibiotice pe Gram-pozitive','Parotida este sediul cel mai frecvent, germenul tipic fiind anaerobii piciorului diabetic','Wharton rămâne sec, diagnosticul cerând puncție din Stenon'],'ABC',579,'Sialadenita acută — Submandibulară, Wharton, Gram-pozitive',
 'Predilecția submandibulară a adultului deshidratat, puroiul pe Wharton și spectrul Gram-pozitiv, opus parotidei ca sediu dominant.',
 ['Submandibulara, adultul și deshidratarea sunt explicite.','Puroiul prin Wharton, cu gust neplăcut, este descris.','Cei trei agenți și hidratarea plus antibiotic anti-Gram-pozitive sunt citați.','Textul plasează sialadenita acută cel mai frecvent la submandibulare, nu la parotidă.','Puroiul iese pe Wharton, nu cere puncție din Stenon.']],
 8,'Mută sediul dominant de pe submandibulară pe parotidă și neagă puroiul pe Wharton.',['sialadenita acută','Wharton']),

q(96,['Sindromul Sjögren la nivelul glandelor salivare:',
 ['Determină xerostomie, keratoconjunctivită sicca și modificări de țesut conjunctiv','Majoritatea pacienților au hipergammaglobulinemie, IgG ridicată și anticorpi SS-A, SS-B; peste 50% au ANA','Pacienții trebuie monitorizați pentru hipertrofie progresivă, din riscul semnificativ de limfom salivar','Diagnosticul se confirmă prin biopsia glandelor salivare principale, glandele minore fiind inutile','Riscul de limfom este neglijabil, urmărirea hipertrofiei fiind superfluă'],'ABC',579,'Sjögren — SS-A/SS-B, sicca, limfom',
 'Cuplarea sicca + SS-A/SS-B + ANA cu alerta de limfom la hipertrofia progresivă, biopsia fiind a glandelor secundare (minore).',
 ['Xerostomia, keratoconjunctivita sicca și țesutul conjunctiv sunt enunțate.','Hipergammaglobulina, SS-A/SS-B și ANA la peste 50% sunt citate.','Riscul de limfom salivar la hipertrofie progresivă este explicit.','Diagnosticul se poate confirma prin biopsia glandelor salivare secundare, nu a principalelor.','Urmărirea hipertrofiei este cerută tocmai din riscul de limfom.']],
 8,'Mută biopsia pe glandele principale și neagă riscul de limfom, cele două note ale paragrafului Sjögren.',['SS-A, SS-B','limfom salivar']),

q(97,['La pacienții cu metastază cervicală de primar ocultat, tumora primară se va manifesta de obicei în decurs de:',
 ['2 ani, ceea ce impune supraveghere periodică','2 săptămâni, analog ameliorării lombalgiei mecanice','6–12 luni, analog ferestrei de medializare a corzii paralizate','O lună, analog disfoniei care impune laringoscopie','24 de ore, analog drenajului abcesului subperiostal'],'A',583,'CUP cervical — Fereastra de 2 ani',
 'Reținerea ferestrei de 2 ani pentru apariția primarului ocultat, ca justificare a supravegherii, distinctă de alte ferestre din capitol.',
 ['Textul: tumora primară se va manifesta în decursul a 2 ani, deci supraveghere periodică.','2 săptămâni nu este fereastra CUP.','6–12 luni este medializarea corzii.','O lună este disfonia neremisă.','24 de ore este o fereastră de drenaj infecțios, nu oncologic.']],
 8,'Permutează cei 2 ani de supraveghere CUP cu ferestre scurte din laringologie sau infecții.',['tumora primară','supravegherea periodică']),

q(98,['Complicațiile postoperatorii precoce ale traheotomiei includ:',
 ['Decanularea accidentală','Hemoragiile','Pneumotoraxul și crearea unei căi false în mediastin','Stopul cardiac','Stenoza traheală tardivă și fistula traheo-esofagiană, care sunt complicații precoce, nu tardive'],'ABCD',583,'Traheotomia — Complicații precoce',
 'Lista precoce (decanulare, sângerare, pneumotorax, cale falsă, stop) versus stenoza și fistula TE, care sunt tardive.',
 ['Decanularea accidentală este primul item precoce.','Hemoragiile figurează la precoce.','Pneumotoraxul și calea falsă mediastinală sunt citate.','Stopul cardiac încheie lista precoce.','Stenoza și fistula traheo-esofagiană sunt în lista tardivă.']],
 8,'Mută stenoza și fistula TE (tardive) în lista precoce, lângă decanulare și pneumotorax.',['decanularea accidentală','pneumotoraxul']),

q(99,['Printre complicațiile tardive posibile ale traheotomiei se numără:',
 ['Țesut de granulație peristomal sau traheal, cu sângerare sau obstrucție','Persistența unei fistule traheo-cutanate după decanulare, stenoza traheală','Fistula între trahee și trunchiul brahiocefalic și fistula traheo-esofagiană','Decanularea accidentală și stopul cardiac, care definesc faza tardivă','Absența oricărei nevoi de umidifiere, nasul rămânând pe circuitul inspirat'],'ABC',583,'Traheotomia — Complicații tardive și umidifiere',
 'Separarea granulației, fistulei cutanate, stenozei, fistulei innominate și TE de evenimentele precoce (decanulare, stop) și de pierderea umidifierii nazale.',
 ['Granulația peristomală/traheală este primul item tardiv.','Fistula cutanată persistentă și stenoza sunt citate.','Fistula cu trunchiul brahiocefalic și cea traheo-esofagiană încheie lista tardivă.','Decanularea și stopul sunt precoce.','Pacientul nu mai beneficiază de încălzirea și umidifierea nazală, deci umidifierea artificială este importantă.']],
 8,'Mută decanularea/stopul (precoce) pe lista tardivă și neagă pierderea umidifierii nazale.',['fistulă','brahiocefalic']),

q(100,['Hemangioamele subglotice și traheale:',
 ['Sunt leziuni vasculare observate în primul an de viață, asociate cu stridor și hemangioame cutanate','De regulă intră în regres până la vârsta de 4 ani, justificând o terapie conservatoare','Dacă nu răspund la un β-blocant, pot fi necesare excizia laser sau traheotomia','Regresează după pubertate, analog papilomului scuamos, β-blocantul fiind inutil','Radioterapia este tratamentul de primă intenție, ca în papilomatoza adultului'],'ABC',576,'Hemangiomul subglotic — Primul an, regresie la 4 ani, β-blocant',
 'Contrastarea regresiei până la 4 ani și a β-blocantului cu papilomul (regresie la pubertate, laser, evitarea traheostomei).',
 ['Primul an, stridorul și asocierea cutanată sunt explicite.','Regresia până la 4 ani justifică conservatorul.','β-blocantul, apoi laserul sau traheotomia, sunt ierarhia eșecului.','Regresia la pubertate este a papilomului, nu a hemangiomului.','Radioterapia este puțin eficientă în papilom; nu este prima linie a hemangiomului.']],
 8,'confundă regresia de la 4 ani (hemangiom) cu cea pubertară a papilomului și inversează β-blocantul cu radioterapia.',['4 ani','P-blocant']),
];
